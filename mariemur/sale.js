document.head.insertAdjacentHTML('beforeend', `
    <style class="custom-style">
        .countdown {
            padding: 8px;
            background-color: #000;
            text-align: center;
        }
        .countdown p {                    
            color: #FFFFFF;
            font-weight: 300;
            font-size: 14px;
            line-height: 14px;
        }
        .countdown span {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.2px;
            text-transform: uppercase;            
            color: #FFFFFF;
            margin-left: 15px;
        }        
        .product-list__box-price .money,
        .product-price .money{
            font-size: 17px !important; 
        }
        
        .cart-modal__box-option-row .price,
         .cart-modal__box-option .price{
            font-size: 12px !important; 
        }
        .cart-modal__box-option-row .money,
         .cart-modal__box-option .money{
            font-size: 12px !important; 
        }
        .price-look .price_sale, .money:not(.cart-modal__total-price .money) {
            font-size: 17px;
        }
        .product-price .price_sale {
            display: block;
            margin: 5px 0 0;
            font-weight: 300;
            font-size: 18px;
        }
        .product-price .price_sale span {
            font-size: 14px;
        }
        .product-list__box-price .price,
        .product-price .price {
            text-align: right;
        } 
        .money.money_sale{
            color: #5E5E5E !important;
            font-weight: 300;
            font-size: 12px !important;
            line-height: 14px;
            letter-spacing: 0.3px;
            text-decoration: line-through;
        }    
        .price_sale {
            margin-top: 5px;
            color: #A60B00;
            font-weight: 300;
            font-size: 18px;
            letter-spacing: 0.3px;
        }
        .product-list__box-price  .price_sale {
            font-size: 17px;
            font-weight: 300;
        }
         .price_sale {
            font-weight: 700;
            font-size: 12px;
        }
        .price_sale span {
            font-size: 14px;
        }
         .price_sale:not(.catalog.js-collections .price_sale),
         .money:not(.cart-modal__total-price .money) {
            display: inline-block;
        }
        .catalog.js-collections .price_sale{
            margin-right: 0 !important;
        }
        .cart-modal__box-option-row .price_sale,
        .product-list__box-price .price_sale
        {
            margin: 0 5px 0 0;
        }
       
        .coupon_hidden {
            display: none !important;
        }
        
        .af_tag:first-child {
            display: none;
        }        
        
        @media screen and (max-width: 767px) {
            .price-look {
                width: 50%;
            }
        }
    </style>
`);

let intervalTime = 0;

// check 24 hours session
if (!window.localStorage.getItem('startDate')) {
    window.localStorage.setItem('startDate', Date.now().toString());
} else {
    let currentDate = Date.now();
    window.localStorage.setItem('currentDate', currentDate.toString());

    intervalTime = currentDate - window.localStorage.getItem('startDate');
}

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

let twentyFourHours = (24 * 60 * 60) - (intervalTime / 1000);

if (twentyFourHours > 0) {
    // elements on the site
    const elementsArray = ['.product-price .price span span.money[data-currency-usd]', '.product-list__box-price .price span .money[data-currency-usd]', '.product-list__box-price .price span.money[data-currency-usd]', '.cart-modal__box-option-row .money[data-currency-usd]'];

    // draw my template function
    function drawSale(element) {
        let isTitlePrice = document.querySelector(element)?.closest('.row-title-price');

        document.querySelectorAll(element).forEach(price => {
            if (!(price.classList.value === 'money money_sale')) {
                let valueInString = price.innerText.split('$')[1];
                let num = parseFloat(valueInString.replace(/,/g, ''));
                let val = num - (num * .10);

                price.classList.add('money_sale');

                isTitlePrice
                    ? price.insertAdjacentHTML('afterend', `<p class="price_sale">${formatter.format(val.toFixed(2))}<br><span>(10% off)</span></p>`)
                    : price.insertAdjacentHTML('beforebegin', `<p class="price_sale">${formatter.format(val.toFixed(2))}</p>`);

                if (price.closest('b')) {
                    price.closest('b').style.cssText = `text-align: right;`;
                }
            }
        });
    }

    // call drawSale function for each element from array
    function addCoupon() {
        document.querySelector('.af_cd_setup').style.opacity = '0';
        document.querySelector('#af_custom_coupon_text_popup').value = 'MM10CRO';
        document.querySelector('#af_custom_apply_coupon_trigger_popup').click();

        let saleInterval = setInterval(() => {
            if (document.querySelector('.af_money.af_new_price') && document.querySelector('.af_coupon_text.af_coupon_code')) {
                clearInterval(saleInterval);

                document.querySelector('.af_cd_setup').style.opacity = '100%';

                document.querySelectorAll('.af_tag').forEach(coupon => {
                    if (coupon.querySelector('.af_coupon_text.af_coupon_code').innerText === 'MM10CRO') {
                        coupon.classList.add('coupon_hidden');
                    }
                });
            }
        }, 100);
    }

    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };

    let mut = new MutationObserver(muts => {
        mut.disconnect();
        for (let i = 0; i < elementsArray.length; i++) {
            drawSale(elementsArray[i]);
        }
        mut.observe(document.querySelector('.cart-modal'), config);
    });

    let checkCartInterval = setInterval(() => {
        if(document.querySelector('.cart-modal')) {
            clearInterval(checkCartInterval);
            mut.observe(document.querySelector('.cart-modal'), config);
        }
    }, 100)

    /* create observers */

    // select the target node
    const loadMoreTarget = document.querySelector('.catalog-content');

    // if exist create observer
    if (loadMoreTarget) {
        let loadMoreObserver = new MutationObserver(function (mutations) {
                drawSale('.product-list__box-price .price span.money[data-currency-usd]');
        });

        loadMoreObserver.observe(loadMoreTarget, config);
    }

    // create observers instance
    let addCouponInterval = setInterval(() => {
        if (document.querySelector('#af_custom_coupon_text_popup') && document.querySelector('#af_custom_apply_coupon_trigger_popup')) {
            clearInterval(addCouponInterval);
            addCoupon();
        }
    }, 500);


    let thirdObserver = new MutationObserver(function (mutations) {
        document.querySelectorAll('.price_sale').forEach(sale => {
            sale.remove();
        });

        document.querySelectorAll('.money').forEach(money => {
            money.classList.remove('money_sale');
        });
    });


    /* timer */
    let checkHeaderInterval = setInterval(() => {
        if(document.querySelector('.header')) {
            clearInterval(checkHeaderInterval);
            document.querySelector('.header').insertAdjacentHTML('afterbegin', '<div class="countdown"><p>Sale: 10% off <span>00:00:00</span></p></div>');

            function startTimer(duration, display) {
                let timer = duration, hours, minutes, seconds;
                let timerInterval = setInterval(function () {
                    hours = parseInt((timer / 3600) % 24, 10);
                    minutes = parseInt((timer / 60) % 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    hours = hours < 10 ? '0' + hours : hours;
                    minutes = minutes < 10 ? '0' + minutes : minutes;
                    seconds = seconds < 10 ? '0' + seconds : seconds;

                    display.innerText = `${hours}:${minutes}:${seconds}`;

                    if (--timer < 0) {

                        clearInterval(timerInterval);

                        CDSetupInit.removeIndividualCoupon('MM10CRO', this);

                        document.querySelector('.countdown').remove();

                        document.querySelectorAll('.price_sale').forEach(sale => {
                            sale.remove();
                        });

                        document.querySelector('.custom-style').remove();

                        document.head.insertAdjacentHTML('beforeend', `
                    <style>.price .money { font-size: 17px !important; }</style>`);
                    }
                }, 1000);
            }

            startTimer(twentyFourHours, document.querySelector('.header .countdown span'));
        }
    }, 100)




}

setInterval(()=> {
    if(document.querySelectorAll('.af_money.af_striked_out_price').length > 1) {
        document.querySelectorAll('.af_money.af_striked_out_price')[0].remove();
    }
}, 500)

// hotjar events
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - New visitors discount',
    'eventAction': 'loaded'
});

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = {hjid: 2442662, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.hj = window.hj || function () {
    (hj.q = hj.q || []).push(arguments);
};
hj('trigger', 'new_visitors_discount');
