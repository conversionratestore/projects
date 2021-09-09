let style = `
    <style>
        @media (max-width: 767px) {
            .product-single__swatch__item--color .product-single__swatch__label,
            .types__link--image,
            .sizes__link--image {
                width: 54px !important;
                height: 54px !important;
            }
        }
        
        .product-single__swatch__item--color .product-single__swatch__label__graphic {
            width: 46px;
            height: 46px;
        }
        
        .types__item {
            width: auto;
        }
        
        #sizes {
            width: 100%;
        }
        
        .faq__accordion__item {
            margin-left: 0 !important;
        }
        
        .product-single__classic-title h1 {
            font-size: 18px;
            line-height: 24px;
        }
        
        .product-single__bottom .o-layout .o-layout__item:first-child .js-cart-replace {
            border-top: 10px solid #A8034F;
            padding: 0 !important;
            margin-left: 30px;
        }
        
        .product-single__reviews-stars.product-single__box {
            background: #fdf4f8;
        }
        
        .selected_options {
            background: #fdf4f8;
            padding: 15px 20px 0;
            border-top: 4px solid #A8034F;
        }
        
        .selected_options p {
            margin: 0;
        }
        
        .product-single--minimal .product-single__price {
            padding: 0 25px 12px;
            background: #fdf4f8;
            margin-bottom: 19px;
        }
        
       
        .product-description__container {
            font-size: 14px;
            line-height: 19px;
        }
        
        .product-description__container li {
            margin-bottom: 25px;
        }
        
        .product-single__reviews-stars {
            margin-top: 0;
            padding-top: 10px;
        }
        
        .selected_options {
            font-size: 16px;
            color: #212121;
            margin-bottom: 0;
        }
        
        .selected_options span {
            color: #999999;
            display:inline-block;
            padding: 0 5px;
        }
        
        .selected_options+.product-single__reviews-stars {
            display: none;
        }
        
        .product-single__reviews-stars {
            padding: 0 !important;
        }
        
        .product-single__price-text {
            font-size: 18px;
            margin: 0;
            padding: 10px 0;
            justify-content:space-between;
            width: 100%;    
        }
        
        .ready_ship {
            color: #34A853;
        }
        
        .ready_ship img {
            margin-right: 7px;
        }
        
        .afterpay-klarna__info, .afterpay-link {
            display: none !important;
        }
        .new_specifics {
            background: #fdf4f8;
            margin-left: 20px;
        }
        .new_specifics li {
            color: #A8034F;
        }
        
        .new_specifics li span {
            color: #212121;
        }
        .loox-rating {
            text-align: left;
        }
        
        .product-single__share-items,
         form .product-single__add, 
         form .product-single__ready-to-ship-note{
            display: none;
        }
        
        .afterpay-klarna {
            display: inline-flex;
        }
        
        .product-single--minimal .product-single__price .afterpay-paragraph {
            margin-top: 0;
            margin-bottom: 10px;
            text-align: left;
        }
        
        .product-single__bottom .afterpay-text1 {
            display: inline-block;
            margin-bottom: 5px;
        }
        
        .product-single__bottom .loox-icon.loox-star {
            font-size: 20px;
            margin-right: 3px;
        }
        
        .product-single__bottom .loox-rating {
            display: flex;
            align-items: center;
        }
        
        .types+.sizes {
            margin-bottom: 15px;
        }
        
    </style>
`

let hide = setInterval(function () {
    if(document.querySelector('.main')) {
        clearInterval(hide)
        document.querySelector('.main').style.opacity = '0'
    }
}, 10)


let block = `
    <ul class="new_specifics">
        <li><span>100% polyester which ensures high durability of the fabric</span></li>
        <li><span>Extremely soft and pleasant to touch fabric</span></li>
        <li><span>Luxury looks and supreme quality</span></li>
        <li><span>Pet and kids friendly</span></li>
    </ul>
`

let start = setInterval(function () {
    if(document.querySelector('.product-single__price__notes') && document.querySelector('.product-single__ready-to-ship-text') && document.querySelector('.satcb_btn')) {
        clearInterval(start)
        exp();
        document.querySelector('.main').style.opacity = '1'
    }
}, 100)


function exp() {
    document.body.insertAdjacentHTML('afterbegin', style)

    let readyText = document.querySelector('.product-single__ready-to-ship-text').innerText

    let color = document.querySelector('.js-swatch-variant-title_color').innerText
    let size = (document.querySelector('.types .product-single__swatch__sub-title'))?
        document.querySelector('.types .product-single__swatch__sub-title').innerText :
        document.querySelectorAll('.product-single__swatch')[1].querySelector('input:checked').value

    document.querySelectorAll('.js-cart-replace')[1].insertAdjacentHTML('afterend', `<div class="options_select"></div>`)




    document.querySelector('.product-single__classic-title').insertAdjacentHTML('afterend', `<div class="selected_options"><p>Color:<span>${color}</span></p><p>Size:<span>${size}</span></p></div>`)
    document.querySelector('.afterpay-paragraph').after(document.querySelector('.product-single__reviews-stars'))
    document.querySelector('.product-single__price__notes').insertAdjacentHTML('beforebegin', block)
    document.querySelector('.afterpay-logo-link').after(document.querySelector('.afterpay-klarna'))

    let btns = document.querySelector('.product-single__add.js-product-buttons').cloneNode(true)

    document.querySelector('.new_specifics').insertAdjacentElement('afterend', btns)
    document.querySelector('.new_specifics').insertAdjacentHTML('afterend', `<div class="ready_ship"><img src="https://conversionratestore.github.io/projects/mammamiacovers/img/confirm.svg" alt="confirm">${readyText}</div>`)

    if (document.querySelector('.types')){
        document.querySelector('.types').after(document.querySelector('.line_line').nextElementSibling)
    } else {
        document.querySelector('.similar').after(document.querySelector('.line_line').nextElementSibling)
    }

    document.querySelectorAll('.product-single__swatch__item--color .product-single__swatch__label').forEach(item => {
        item.addEventListener('click', function () {
            console.log('hello')
            document.querySelector('.selected_options p:first-child span').innerText = item.closest('.product-single__swatch__item--color').querySelector('input').value

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: PDP with benefits',
                'eventAction': `Click on ${item.closest('.product-single__swatch__item--color').querySelector('input').value} color`
            });
        })
    })

    document.querySelectorAll('.similar .sizes__item').forEach(item => {
        item.addEventListener('click', function () {
            let txt = item.querySelector('.sizes__text').innerText

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: PDP with benefits',
                'eventAction': `Click on ${txt} collection`
            });
        })
    })

    document.querySelectorAll('.types__item').forEach(item => {
        item.addEventListener('click', function () {
            let txt = item.querySelector('.types__text').innerText

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: PDP with benefits',
                'eventAction': `Click on ${txt} sizer`
            });
        })
    })

    document.querySelectorAll('.similar+#sizes .sizes__item').forEach(item => {
        item.addEventListener('click', function () {
            let txt = item.querySelector('.sizes__text').innerText

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: PDP with benefits',
                'eventAction': `Click on ${txt} type`
            });
        })
    })

    document.querySelectorAll('.product-single__price button').forEach(item => {
        item.addEventListener('click', function () {
            let btnClass = item.classList.value

            document.querySelectorAll('form .product-single__add button').forEach(item => {
                if (item.classList.value === btnClass) {
                    item.click()
                }
            })
        })
    });

    document.querySelector('.main').style.opacity = '1'
};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2425703,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'pdp_with_benefits');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: PDP with benefits',
    'eventAction': 'loaded'
});
