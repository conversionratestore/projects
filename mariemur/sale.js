document.head.insertAdjacentHTML('beforeend', `
    <style>
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
        .reviews-prod-title {
            margin-top: -35px;
        }  
        .product-price .price_sale {
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
        .money{
            color: #5E5E5E;
            font-weight: 300;
            font-size: 12px !important;
            line-height: 14px;
            letter-spacing: 0.3px;
            text-decoration: line-through;
        }       
        /* .money:not('.cart-modal__total .money'){*/
        /*    color: #5E5E5E;*/
        /*    font-weight: 300;*/
        /*    font-size: 12px !important;*/
        /*    line-height: 14px;*/
        /*    letter-spacing: 0.3px;*/
        /*    text-decoration: line-through;*/
        /*}*/
        .price_sale {
            margin-top: 5px;
            color: #A60B00;
            font-weight: 300;
            font-size: 18px;
            letter-spacing: 0.3px;
        }
         .price_sale {
            font-weight: 700;
            font-size: 12px;
        }
        .price_sale span {
            font-size: 14px;
        }
         .price_sale,
         .money {
            display: inline-block;
        }
        .price_sale {
            margin: 0 0 0 5px;
        }
        .price-look {
            width: 28%;
        }
        .coupon_hidden {
            display: none !important;
        }
    </style>
`);

// elements on the site
const elementsArray = ['.product-price .money', '.product-list__box-price .price .money', '.cart-modal__box .money'];

// draw my template function
function drawSale(element) {
    let saleSpan = '';

    if (element === '.product-price .money') {
        saleSpan = ' <br><span>(10% off)</span>';
    }

    document.querySelectorAll(element).forEach(price => {
        let valueInString = price.innerText.split('$')[1];
        let num = parseFloat(valueInString);
        let val = num - (num * .10);

        price.insertAdjacentHTML('afterend', `<p class="price_sale">$${val.toFixed(2)}${saleSpan}</p>`);

        if (price.closest('b')) {
            price.closest('b').style.cssText = `text-align: right;`;
        }
    });
}

// call drawSale function for each element from array
for (let i = 0; i < elementsArray.length; i++) {
    drawSale(elementsArray[i]);
}

/* create observers */

// select the target node
const newTarget = document.querySelector('.cart-modal');

// create an observer instance
let newObserver = new MutationObserver(function (mutations) {
    document.querySelector('#af_custom_coupon_text_popup').value = 'MM10CRO';
    document.querySelector('#af_custom_apply_coupon_trigger_popup').click();

    newObserver.disconnect();
});

// create second observer instance
let secondObserver = new MutationObserver(function (mutations) {
    let removeCoupon = setInterval(() => {
        clearInterval(removeCoupon);
        document.querySelectorAll('.af_tag').forEach(coupon => {
            if (coupon.querySelector('.af_coupon_text.af_coupon_code').innerText === 'MM10CRO') {
                coupon.classList.add('coupon_hidden');
            }
        });
    }, 100);
});

// configuration of the observer:
const newConfig = {attributes: true, childList: true, characterData: true};

// pass in the target node, as well as the observer options
newObserver.observe(newTarget, newConfig);
secondObserver.observe(newTarget, newConfig);

/* timer */
document.querySelector('.header').insertAdjacentHTML('afterbegin', '<div class="countdown"><p>Sale: 10% off <span></span></p></div>');

const twentyFourHours = 24 * 60 * 60;
const display = document.querySelector('.header .countdown span');

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

            document.querySelector('.countdown').remove();

        }
    }, 1000);
}

startTimer(twentyFourHours, display);

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