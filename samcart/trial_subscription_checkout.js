window.onload  = function () {
    let action;

    function pushDataLayer(action,label) {
        window.dataLayer = window.dataLayer || [];
        if (label) {
            console.log(action + " : " + label)
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Trial subscription checkout',
                'eventAction': `${action}`,
                'eventLabel': `${label}`
            });
        } else {
            console.log(action)
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Trial subscription checkout',
                'eventAction': `${action}`
            });
        }
    }

    if (window.location.href == 'https://checkout.samcart.com/products/courses-special-offer/') {
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            #get_samcart {
                padding: 40px 0;
                max-width: 676px;
                width: 100%;
                margin: 0 auto;
            }
            .get_samcart_blue, .get_samcart_normal {
                font-weight: 500;
                font-size: 28px;
                line-height: 18px;
                margin-right: 4px;
            }
            .get_samcart_blue {
                text-decoration-line: line-through;
                color: #2096EF;
            }
            .get_samcart_normal {
                color: #183B56;
            }
            #get_samcart .btn_get_samcart {
                background: #2096EF;
                border-radius: 48px;
                width: 100%;
                display: block;
                font-weight: bold;
                font-size: 18px;
                line-height: 48px;
                color: #FFFFFF;
                text-align: center;
                margin: 4px 0 16px;
            }
            #get_samcart .btn_pay {
                background: #000000;
            }
            #get_samcart .btn_pay_pal {
                background: #F6C557;
            }
            #get_samcart .btn {
                border-radius: 40px;
                height: 40px;
                width: 99%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 16px;
            }
            #get_samcart .btn img {
                height: 20px;
                object-fit: contain;
            }
            .get_samcart_text {
                font-size: 16px;
                line-height: 18px;
                color: #183B56;
            }
            .get_samcart_title {
                font-weight: 500;
                font-size: 24px;
                color: #183B56;
                line-height: 24px;
            }
            .btn_blue {
                font-weight: bold;
                font-size: 18px;
                line-height: 18px;
                color: #FFFFFF!important;
                display: block;
                background: #2096EF!important;
                border-radius: 48px;
                padding: 15px 32px;
                margin: 20px auto;
                width: fit-content;
            }
            .get_samcart_btns .d-flex .btn {
                width: calc(100% - 4.5px);
                margin-right: 9px;
            }
            .get_samcart_btns .d-flex .btn:last-child {
                margin-right: 0;
            }
            .get_samcart_btns {
                width: 100%;
            }
            @media only screen and (min-width: 768px)  {
                .get_samcart_top {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .get_samcart_row {
                    display: flex;
                    justify-content: space-between;
                }
                .get_samcart_btns {
                    max-width: 315px;\
                }
            }
            @media only screen and (max-width: 767px)  {
                #get_samcart {
                    padding: 40px 30px;
                }
                .get_samcart_title {
                    font-size: 20px;
                    line-height: 18px;
                }
                .get_samcart_blue, .get_samcart_normal {
                    font-size: 24px;
                }
                .get_samcart_text {
                    text-align: center;
                }
            }
        </style>`)
        document.querySelectorAll('.sc-root-row')[2].insertAdjacentHTML('beforebegin',`
        <div id="get_samcart">
            <div class="get_samcart_row">
                <div class="get_samcart_top">
                    <div>
                        <p class="get_samcart_title">Get Samcart 40% OFF</p>
                        <div class="d-flex">
                            <p class="get_samcart_blue">$580</p>
                            <p class="get_samcart_normal">$349</p>
                        </div>
                    </div>
                    <p class="get_samcart_text">30 days money back guarantee</p>
                </div>
                <div class="get_samcart_btns">
                    <a href="https://checkout.samcart.com/products/courses-special-offer-purchase" class="btn_get_samcart">Enroll Now</a>
                    <div class="d-flex justify-content-between">
                        <a href="https://checkout.samcart.com/products/courses-special-offer-purchase" class="btn btn_pay_pal">
                            <img src="https://conversionratestore.github.io/projects/samcart/img/pay_pal_logo.svg" alt="icon pay">
                        </a>
                    </div>
                </div>
            </div>
        </div>`);

        let applePayBtn = ` 
            <a href="https://checkout.samcart.com/products/courses-special-offer-purchase" class="btn btn_pay">
                <img src="https://conversionratestore.github.io/projects/samcart/img/apple_pay_logo.svg" alt="icon apple pay">
            </a>`;

        let googlePayBtn = `
            <a href="https://checkout.samcart.com/products/courses-special-offer-purchase" class="btn btn_pay">
                <img src="https://conversionratestore.github.io/projects/samcart/img/google_pay_logo.svg" alt="icon google pay">
            </a>`;

        if (document.querySelector(".apple-pay:not(.ng-hide)")) {
            document.querySelector("#get_samcart .justify-content-between").insertAdjacentHTML("afterbegin", applePayBtn);
            document.querySelector('.btn_pay').addEventListener('click', () => {
                action = 'Click on Apple pay';
                pushDataLayer(action)
                localStorage.setItem('paymentSystem', 'applePay');
            })
        }
    
        if (document.querySelector(".google-pay:not(.ng-hide)")) {
            document.querySelector("#get_samcart .justify-content-between").insertAdjacentHTML("afterbegin", googlePayBtn)
            document.querySelector('.btn_pay').addEventListener('click', () => {
                action = 'Click on Google pay';
                pushDataLayer(action)
                localStorage.setItem('paymentSystem', 'googlePay');
            })
        }

        document.querySelector('.btn_get_samcart').addEventListener('click', () => {
            action = 'Click on Enroll now button';
            pushDataLayer(action)
            localStorage.setItem('paymentSystem', 'enroll');
        })
    
        document.querySelector('.btn_pay_pal').addEventListener('click', () => {
            action = 'Click on PayPal button';
            pushDataLayer(action)
            localStorage.setItem('paymentSystem', 'payPal');
        })

        document.querySelector('.tpl-6__content.py-sm-34.px-sm-48.p-16.rounded.bg-white').remove();

        if (window.matchMedia("(max-width: 767px)").matches) {
            document.querySelector('.get_samcart_btns').after(document.querySelector('.get_samcart_text'))
        } 

        let newBtn = `<a href="https://checkout.samcart.com/products/courses-special-offer-14-days-free/" class="btn_blue">Try 14 days for FREE</a>`;

        document.querySelectorAll('.sc-column.col-12.sc-root-row')[4].style.display = 'none';
        document.querySelectorAll('.sc-column.col-12.sc-root-row')[5].style.display = 'none';
        document.querySelectorAll('.hide-on-mobile')[0].style.display = 'none';

        document.querySelectorAll('.sc-column.col-12.sc-root-row .sc-row')[5].insertAdjacentHTML('afterend', newBtn);
        document.querySelectorAll('.sc-column.col-12.sc-root-row .sc-row')[8].insertAdjacentHTML('afterend', newBtn);
        document.querySelectorAll('.sc-column.col-12.sc-root-row .sc-row')[10].insertAdjacentHTML('afterend', newBtn);
        document.querySelectorAll('.sc-column.col-12.sc-root-row .sc-row')[12].insertAdjacentHTML('afterend', newBtn);
        document.querySelectorAll('.sc-column.col-12.sc-root-row .sc-row')[18].insertAdjacentHTML('afterend', newBtn);
        document.querySelectorAll('.sc-column.col-12.sc-root-row .sc-row')[18].style.margin = `0 auto 40px`;
        document.querySelector('.tpl-6.pb-sm-48').classList.remove('pb-sm-48');

        let viewed0 = false,
            viewed1 = false,
            viewed2 = false,
            viewed3 = false,
            viewed4 = false;

        function isScrolledIntoView(el) {
            let rect = el.getBoundingClientRect(),
            elemTop = rect.top,
            elemBottom = rect.bottom;
    
            let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        
            return isVisible;
        }
        
        document.querySelectorAll('.btn_blue').forEach((item,index)=> {
            document.addEventListener('scroll', (e) => {
                if (isScrolledIntoView(item) == true && index === 0 && viewed0 !== true) {
                    viewed0 = true;
                    action = 'Visibility Try 14 days for FREE button',
                    label = 'page Special Offer above title Plus $10,060 Worth..';
                    pushDataLayer(action, label)
                } else if (isScrolledIntoView(item) == false && index === 0) {
                    viewed0 = false;
                }
                if (isScrolledIntoView(item) == true && index === 1 && viewed1 !== true) {
                    viewed1 = true;
                    action = 'Visibility Try 14 days for FREE button',
                    label = 'page Special Offer above title Create your course...';
                    pushDataLayer(action, label)
                } else if (isScrolledIntoView(item) == false && index === 1) {
                    viewed1 = false;
                }
                if (isScrolledIntoView(item) == true && index === 2 && viewed2 !== true) {
                    viewed2 = true;
                    action = 'Visibility Try 14 days for FREE button',
                    label = 'page Special Offer above title 28947 People..';
                    pushDataLayer(action, label)
                } else if (isScrolledIntoView(item) == false && index === 2) {
                    viewed2 = false;
                }
                if (isScrolledIntoView(item) == true && index === 3 && viewed3 !== true) {
                    viewed3 = true;
                    action = 'Visibility Try 14 days for FREE button',
                    label = 'page Special Offer above title A Pre-Designed...';
                    pushDataLayer(action, label)
                } else if (isScrolledIntoView(item) == false && index === 3) {
                    viewed3 = false;
                }
                if (isScrolledIntoView(item) == true && index === 4 && viewed4 !== true) {
                    viewed4 = true;
                    action = 'Visibility Try 14 days for FREE button',
                    label = 'page Special Offer above the footer section';
                    pushDataLayer(action, label)
                } else if (isScrolledIntoView(item) == false && index === 4) {
                    viewed4 = false;
                }
            });
           
            item.addEventListener('click', () => {
                if (index === 0) {
                    action = 'Click on Try 14 days for FREE button',
                    label = 'page Special Offer above title Plus $10,060 Worth..';
                    pushDataLayer(action, label)
                } else if (index === 1) {
                    action = 'Click on Try 14 days for FREE button',
                    label = 'page Special Offer above title Create your course...';
                    pushDataLayer(action, label)
                } else if (index === 2) {
                    action = 'Click on Try 14 days for FREE button',
                    label = 'page Special Offer above title 28947 People..';
                    pushDataLayer(action, label)
                } else if (index === 3) {
                    action = 'Click on Try 14 days for FREE button',
                    label = 'page Special Offer above title A Pre-Designed...';
                    pushDataLayer(action, label)
                } else if (index === 4) {
                    action = 'Click on Try 14 days for FREE button',
                    label = 'page Special Offer above the footer section';
                    pushDataLayer(action, label)
                }
            })
        })
    }

    if (window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-purchase') {
        // document.querySelector('[ng-non-bindable]').remove();
        document.querySelector('.tpl-6.pb-sm-48').classList.remove('pb-sm-48');

        if (localStorage.getItem('paymentSystem')) {
            let paymentSystem = localStorage.getItem('paymentSystem');
            if (paymentSystem == 'payPal') {
                console.log(paymentSystem)
                document.querySelectorAll('.custom-control.custom-radio input')[1].click()
                action = 'Visibility Place Order Now button',
                label = 'page Checkout';
                pushDataLayer(action,label);
            } else if (paymentSystem == 'enroll') {
                document.querySelectorAll('.custom-control.custom-radio input')[0].click()
                action = 'Visibility Place Order Now button',
                label = 'page Checkout';
                pushDataLayer(action,label);
            } else if (paymentSystem == 'applePay' || paymentSystem == 'googlePay') {
                document.querySelectorAll('.custom-control.custom-radio input')[2].click()
            }
        }

        document.querySelectorAll('.custom-control.custom-radio input')[0].addEventListener('click', () => {
            action = 'Visibility Place Order Now button',
            label = 'page Checkout';
            pushDataLayer(action,label);
            
            if (document.querySelector('.card-num-row')) {
                document.querySelector('#placeOrder').addEventListener('click', (e) => {
                    action =  'Click on Place Order Now button',
                    label = 'page Checkout';
                    pushDataLayer(action, label)
                })
            }
        })
        document.querySelectorAll('.custom-control.custom-radio input')[1].addEventListener('click', () => {            
            action = 'Visibility Place Order Now button',
            label = 'page Checkout';
            pushDataLayer(action,label);
        })

        if (document.querySelector('#placeOrder')) {
            document.querySelector('#placeOrder').addEventListener('click', (e) => {
                action =  'Click on Place Order Now button',
                label = 'page Checkout';
                pushDataLayer(action, label)
            })
        }
        
        document.querySelector('.tpl-6__offer__checkbox.custom-control.custom-checkbox').addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            action = 'Click on Yes add the Facebook checkbox';
            pushDataLayer(action)
        })
    }

    if (window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-14-days-free/') {
        document.querySelector('.tpl-6.pb-sm-48').classList.remove('pb-sm-48');
        document.querySelector('#placeOrder').addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            action =  'Click on Start my free trial button',
            label = 'page Checkout';
            pushDataLayer(action, label)
        })
        document.querySelector('.v2-horizontal-large-container').style.display = 'none';
   
    }
    if (window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-purchase' || window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-14-days-free/') {
        document.querySelectorAll('.custom-control.custom-radio input')[1].addEventListener('click', () => {
            action = 'Click on PayPal payment method';
            pushDataLayer(action)
        })
        document.querySelectorAll('.custom-control.custom-radio input')[2].addEventListener('click', (e) => {
            if (e.closest('.custom-control').querySelector(".google-pay:not(.ng-hide)")) {
                action = 'Click on Google pay payment method';
                pushDataLayer(action)
            }
            if (e.closest('.custom-control').querySelector(".apple-pay:not(.ng-hide)")) {
                action = 'Click on Apple pay payment method';
                pushDataLayer(action)
            }
        })
        document.querySelectorAll('.custom-control.custom-radio input')[0].addEventListener('click', (event) => {
            action = 'Click on Credit Card payment method';
            pushDataLayer(action);
            if (document.querySelector('#card-number')) {
                document.querySelector('.card-num-row').addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    action =  'Click on input Card Number',
                    label = 'Contact form';
                    pushDataLayer(action, label)
                })
                document.querySelector('.cvv-col').addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    action =  'Click on input CVC',
                    label = 'Contact form';
                    pushDataLayer(action, label)
                })
                document.querySelector('.exp-col').addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    action =  'Click on input MM YY',
                    label = 'Contact form';
                    pushDataLayer(action, label)
                })
            }
        })

        document.querySelector('[name="fname"]').addEventListener('click', () => {
            action =  'Click on input First Name',
            label = 'Contact form';
            pushDataLayer(action, label)
        })
        document.querySelector('[name="lname"]').addEventListener('click', () => {
            action =  'Click on input Last Name',
            label = 'Contact form';
            pushDataLayer(action, label)
        })
        document.querySelector('[name="email"]').addEventListener('click', () => {
            action =  'Click on input Email Address',
            label = 'Contact form';
            pushDataLayer(action, label)
        })
        document.querySelector('[name="phone"]').addEventListener('click', () => {
            action =  'Click on input Phone Number',
            label = 'Contact form';
            pushDataLayer(action, label)
        })
        if (document.querySelector('#card-number')) {
            document.querySelector('.card-num-row').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                action =  'Click on input Card Number',
                label = 'Contact form';
                pushDataLayer(action, label)
            })
            document.querySelector('.cvv-col').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                action =  'Click on input CVC',
                label = 'Contact form';
                pushDataLayer(action, label)
            })
            document.querySelector('.exp-col').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                action =  'Click on input MM YY',
                label = 'Contact form';
                pushDataLayer(action, label)
            })
        }
    }
};

let optionMut = {
    childList: true,
    subtree: true
}

let mut = new MutationObserver(function (muts) {
    if (document.querySelector('[ng-non-bindable]') && window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-purchase' || document.querySelector('[ng-non-bindable]') && window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-14-days-free/') {
        mut.disconnect();
        document.querySelector('[ng-non-bindable]').remove();
    }

    if (window.location.href == 'https://checkout.samcart.com/products/courses-special-offer-14-days-free/' && document.querySelector('#order-summary-widget') && document.querySelector('#payments')) {
        mut.disconnect();
        document.querySelectorAll('.row.section')[0].style.display = 'none';
        document.querySelectorAll('.row.section')[1].style.display = 'none';
        document.querySelector('#order-summary-widget').style.margin = '0 0 40px 0';
        document.querySelector('#order-summary-widget').after(document.querySelector('#payments'));
        document.querySelector('#order-summary-widget').after(document.querySelectorAll('#paymentForm .tpl-6__checkout__subtitle')[1]);
        document.querySelector('#order-summary-widget').after(document.querySelectorAll('#paymentForm .row')[1]);
        document.querySelector('#order-summary-widget').after(document.querySelectorAll('#paymentForm .row')[0]);
        document.querySelector('#order-summary-widget').after(document.querySelectorAll('#paymentForm .tpl-6__checkout__subtitle')[0]);
    }
})
mut.observe(document, optionMut);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2592989,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'tv_trial_subscription_checkout');
    hj('event', 'trial_subscription_checkout');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Trial subscription checkout',
    'eventAction': 'loaded'
});
