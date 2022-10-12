let style = `
<style>
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
function final_start() {
    
    if (href.includes('/pages/sleepypatch')) {
        let internal = setInterval(() => {
            if (document.querySelector('.shipping-noti h3') != null && !!document.querySelectorAll('.js-packs') && document.querySelector('#addToCart') != null) {
                clearInterval(internal)
                document.querySelector('.shipping-noti h3').innerHTML = `30-day Money Back Guarantee`; //change text shipping noti
                document.body.insertAdjacentHTML('afterbegin', style); //add style
        
                //set text for note block 
                let textNote = '';
                let numberPack = document.querySelector('.js-packs input[type=radio]:checked+label').innerText.split(' PACKS')[0]
                if (numberPack > 1 ) {
                    textNote = `Your ${numberPack} pack order comes with <b>FREE shipping</b>`
                } else {
                    textNote = `<b>Select 2 or more packs</b> to get FREE Shipping`
                }
                //add note block before addToCart button
                document.querySelector('#addToCart').insertAdjacentHTML('beforebegin',`<div class="note-block"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/free_delivery_2.svg" alt="free delivery icon"><p>${textNote}</p></div>`);
                
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
            }
        })
    } else { // if (href.includes('/checkouts/')) 
        let internal = setInterval(() => {
            if (document.querySelector('.money-back .f-shipping') != null && document.querySelector('.total-line--shipping > td > span') != null && document.querySelector('.product__description span.product__description__variant.order-summary__small-text') != null) {
                console.log('true /checkouts/Information')
                let pack = document.querySelector('.product__description span.product__description__variant.order-summary__small-text').innerHTML.split(' ')[0];
               
                if (pack != '1') {
                    clearInterval(internal)
                    document.querySelector('.total-line--shipping > td > span').innerHTML = `Free`;
                    document.querySelector('.total-line--shipping > td > span').style = `
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 16px;
                        font-family: 'Roboto', sans-serif;
                        font-style: normal;
                        color: #313131;`;
                } else {
                    clearInterval(internal)
                    document.querySelector('.money-back .f-shipping').style = 'display: none!important;';
                    document.querySelector('.money-back img').style = 'margin-bottom: 15px;';
                }
            }
        }, 200)
    }    
}

let i = setInterval(function() {
    if (document.querySelector(".review-item img")){
        clearInterval(i);

        function startsWith(str, word) {
            return str.lastIndexOf(word, 0) === 0;
        }
        var h=document.referrer;
        var g=false;
        if (startsWith(h, "https://naturalpatch.com/pages/sleepypatch")==true){g=true;};

        var g1=false;
        if (window.location.href.indexOf("checkouts1") != -1){g1=true;};

        var p='';
        var p1='';
        var p2=false;

        r = document.querySelectorAll(".product");
        if (r!=''){
            for (i=0;i<r.length;i++){

                if (r[i] != null) {
                    r2='';
                    r2= r[i].getAttribute("data-product-type");
                    if (r2!='SleepyPatchV'){
                        p+="1";}
                }}}
        p1=p;

        if (p1=='' && g==true && sessionStorage.getItem('nrb')!='1' || p1=='' && g1==true && sessionStorage.getItem('nrb')!='1' || p1=='' && sessionStorage.getItem('ok')){
            sessionStorage.setItem('ok', 1);
            final_start();
        }
        else{
            if (p1==''){
                sessionStorage.setItem('nrb', 1);
            }
        }
    }
}, 500);

window.dataLayer = window.dataLayer || []
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Shipping cost',
    'eventAction': 'loaded',
})

let isClarify = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity('set', 'shipping_cost', 'variant_1')
	}
}, 100)