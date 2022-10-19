let style = `
<style>
    .navbar-brand {
        pointer-events: none;
    }
    .note-block {
        background: #F4BE00;
        padding: 10px 22px;
        width: calc(100% + 20px);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 19px -10px 15px;
    }
    .package .note-block img {
        margin: 0 10px 0 0!important;
        width: 31px;
        height: 16px;
        object-fit: contain;
    }
    .package .note-block p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px!important;
        line-height: 16px!important;
        color: #000000;
        margin: 0;
    }
</style>`

let href = window.location.href

function pushDataLayer() {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Shipping cost',
        'eventAction': 'loaded',
    })
}

let backCheckoutRouting = setInterval(() => {
    if (sessionStorage.getItem('routing-checkout') == 1 && document.querySelector('.js-packs input') != null && !document.querySelectorAll('.js-packs input')[0].checked && document.querySelectorAll('.js-packs input').length > 3) { 
        sessionStorage.setItem('routing-checkout', 0);
        document.querySelectorAll('.js-packs input')[0].click()
    }
}, 200)

if (href.includes('/pages/sleepypatch')) {
    let internal = setInterval(() => {
        if (document.querySelector('.shipping-noti h3') != null && !!document.querySelectorAll('.js-packs') && document.querySelector('#addToCart') != null && document.querySelector('.js-packs input[type=radio]:checked+label') != null) {
            clearInterval(internal)
            document.querySelector('.shipping-noti h3').innerHTML = `30-day Money Back Guarantee`; //change text shipping noti
            document.body.insertAdjacentHTML('afterbegin', style); //add style
           
            //set text for note block 
            let textNote = '';
            let numberPack = document.querySelector('.js-packs input[type=radio]:checked+label').innerText.split(' PACK')[0]
            console.log(numberPack)
            if (numberPack > 1 ) {
                textNote = `Your ${numberPack} pack order comes with <b>FREE shipping</b>`
            } else {
                textNote = `<b>Select 2 or more packs</b> to get FREE Shipping`
            }
            //add note block before addToCart button
            document.querySelector('#addToCart').insertAdjacentHTML('beforebegin',`<div class="note-block"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/shipped_2.svg" alt="free delivery icon"><p>${textNote}</p></div>`);
            
            //change text in note block 
            document.querySelectorAll('.js-packs').forEach((pack, index) => {
                pack.addEventListener('input', (e) => {
                    if (index < 3) {
                        document.querySelector('.package .note-block p').innerHTML = `Your ${pack.querySelector('label').innerText.split(' PACKS')[0]} pack order comes with <b>FREE shipping</b>`
                    } else {
                        document.querySelector('.package .note-block p').innerHTML = `<b>Select 2 or more packs</b> to get FREE Shipping`
                    }
                })
            })
            pushDataLayer();
        }
    })
}

if (href.includes('/checkouts/')) {
    let routing = document.referrer;

    let internal = setInterval(() => {
        if (routing.includes('/pages/sleepypatch')) {
            sessionStorage.setItem('routing', 1);
        } else if (routing.includes('/collections')) {
            sessionStorage.setItem('routing', 0);
        }
        if (sessionStorage.getItem('routing') == 1 && document.querySelector('.step__footer__previous-link-content') != null && document.querySelector('.money-back .f-shipping') != null && document.querySelector('.total-line--shipping > td > span') != null && document.querySelector('.product__description span.product__description__variant.order-summary__small-text') != null) {

            clearInterval(internal)

            let pack = document.querySelector('.product__description span.product__description__variant.order-summary__small-text').innerHTML.split(' ')[0];

            document.querySelectorAll('.breadcrumb a')[0].innerHTML = 'Back';
            document.querySelectorAll('.breadcrumb a')[0].href = 'https://naturalpatch.com/pages/sleepypatch';
            if (document.querySelector('.step__footer__previous-link-content').innerHTML.toLowerCase().includes('to cart')) {
                document.querySelector('.step__footer__previous-link-content').innerHTML = `Back`;
                document.querySelector('.step__footer__previous-link').href = 'https://naturalpatch.com/pages/sleepypatch';
                document.querySelector('.step__footer__previous-link').addEventListener('click', () => sessionStorage.setItem('routing-checkout', 0))
            }
            document.querySelectorAll('.breadcrumb a')[0].addEventListener('click', () => sessionStorage.setItem('routing-checkout', 0))

            if (pack != '1') {
                document.querySelector('.total-line--shipping > td > span').innerHTML = `Free`;
                document.querySelector('.total-line--shipping > td > span').style = `
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 16px;
                    font-family: 'Roboto', sans-serif;
                    font-style: normal;
                    color: #313131;`;

            } else {
                document.querySelector('.money-back .f-shipping').style = 'display: none!important;';
                document.querySelector('.money-back img').style = 'margin-bottom: 15px;';
            }
            pushDataLayer();
            
            sessionStorage.setItem('routing-checkout', 1);
        }
    })
}  

let isClarify = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity('set', 'shipping_cost', 'variant_1')
	}
}, 100)