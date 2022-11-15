const style = /*html*/`
        <style>
            .container.container-checkout {
                padding-bottom: 30px;
            }
            #notification-container + div > div {
                left: 20px !important;
                right: auto;
                width: fit-content;
            }
            .i-embedded-form {
                left: 0 !important;
                right: auto !important;
            }
            .logo-wrapper {pointer-events: none;}

            .steps {
                display: flex;
                flex-direction: row;
                align-items: center;
                counter-reset: my-step-counter;
                max-width: 478px;
                margin: 40px 0 55px;
            }
            .step {
                position: relative;
            }
            .step p {
                margin: 4px 0 0;
                white-space: nowrap;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                text-transform: uppercase;
            }
            .circle {
                position: relative;
                width: 50px;
                height: 50px;
                border: 2px solid #ccc;
                border-radius: 50%;
            }
            .circle::after {
                counter-increment: my-step-counter;
                content: counter(my-step-counter);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: 600;
                font-size: 16px;
                color: #212529;
            }
            .check .circle::after {
                content: url('https://conversionratestore.github.io/projects/kingsbox/img/check_arr.svg');
            }
            .line {
                height: 2px;
                width: 100%;
                background-color: #ccc;
            }
            .black .circle,
            .check .circle {
                border-color: #000;
            }
            .black + .line,
            .check + .line {
                background-color: #000;
            }

            .checkout-shipping {
                padding-right: 48px;
                background-color: #fff;
            }

            .checkout-shipping-info {
                padding-left: 0 !important;
                padding-right: 0 !important;
            }

            /* app-checkout-shipping-info,
            app-checkout-delivery-method,
            app-checkout-payment, */
            app-checkout-notes {
                display: none;
            } 

            .checkout-shopping-cart {
                padding: 0 !important;
            }

            .checkout-shopping-cart hr {
                display: none !important;
            }

            .moneyback {
                background: #28A9E2;
                padding: 20px 40px;
                text-align: center;
            }
            .moneyback p {
                line-height: 171.19%;
                color: #FFFFFF;
                margin: 0;
            }        
            .moneyback p:first-child {
                font-weight: 600;
                font-size: 16px;
                text-transform: uppercase;
            }
            .moneyback p:last-child {
                font-weight: 400;
                font-size: 12px;
            }

            .my_title {
                font-weight: 600;
                font-size: 25px;
                line-height: 31px;
                color: #212529;
                margin-bottom: 30px;
            }

            app-checkout-shopping-cart .card-title-wrapper {display: none !important;}

            .checkout-summary,
            .checkout-shopping-cart {
                border-top: none;
            }

            .checkout-summary .card-title-wrapper,
            .checkout-summary .products,
            .checkout-summary .checkout-submit {
                display: none !important;
            }

            .shopping-cart-product {
                padding: 30px;
                background-color: #f4f4f4;
            }

            .checkout-summary .coupons-form {
                margin-top: 0 !important;
            }

            .coupons-form div:first-child p {
                text-decoration: underline;
                cursor: pointer;
            }

            .coupons-form div:last-child {
                height: 0;
                opacity: 0;
                transition: 0.7s all ease;
                pointer-events: none;
            }

            .coupons-form.opened div:last-child {
                height: 45px;
                opacity: 1;
                pointer-events: auto;
            }

            .steps_btn_wrapper div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 10px;
            }

            .steps_btn_wrapper button {
                width: 49%;
                height: 48px;
                padding: 8px;
                border: 1px solid #32AAE0;
                font-weight: 700;
                font-size: 12px;
                line-height: 28px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .steps_btn_wrapper button.back {
                background-color: #fff;
                color: #32AAE0;
            }
            .steps_btn_wrapper button.continue {
                background-color: #32AAE0;
            }
            .steps_btn_wrapper button.continue:disabled {
                background-color:#C2C2C2;
                border: none;
            }

            /*.shopping-cart-product .product-image {
                min-width: 125px;
                max-width: 125px;
                max-height: 85px;
            }*/

            .checkout-delivery-method, .checkout-payment {padding: 0;}

            .info-section {
                display: flex;
                flex-wrap: wrap;
                position: relative;
            }
            .info-section div:first-child > div {
                display: none !important;
            }
            .info-section-data p:nth-child(4),
            .info-section-data p:nth-child(5),
            .info-section-data p:nth-child(5) + div,
            .info-section-data p:nth-child(5) + div p {
                display: inline !important;
                position: relative;
            }
            .info-section-data p:nth-child(4)::after,
            .info-section-data p:nth-child(5)::after {
                position: absolute;
                content: ',';
                bottom: 0;
                
            }
            .info-section-data p:nth-child(4)::after {
                right: -3px;
            }
            .info-section-data p:nth-child(5)::after {
                right: 1px;
            }


            .change-shipping-info {
                position: absolute;
                top: 20px;
                right: 20px;
            }
            .delivery {width: 100%;}
            .delivery hr {border-color: #C4C4C4;}
            .shipping_title,
            .delivery p {
                font-size: 14px;
                line-height: 22px;
                margin: 0;
            }
            .delivery > div {
                display: flex;
                justify-content: space-between;
            }
            .delivery > div > div {
                display: flex;
            }
            .delivery .method {
                font-weight: 400;            
                color: #000000;            
            }
            .shipping_title,
            .delivery .title {
                font-weight: 600;
                color: #212529;
                width: 150px;
            }
            .delivery .change,
            .change-shipping-info{
                font-weight: 400 !important;   
                color: #32AAE0;
                cursor: pointer;
                font-size: 14px !important;
            }

            .checkout-paypal-btn > div {
                padding: 0 180px;
            }

            app-checkout-payment .checkout-payment {
                width: 49%;
            }

            #paypal-button {
                margin: -10px 0 0;
            }
            .mob_cart_wrapper:not(.clickable) {
                transform: scaleY(0);
                position: absolute;
                pointer-events: none;
                z-index: -1;
            }
            .mob_cart_wrapper {
                background: #FCFCFC;
                display: none;
                padding: 8px 30px;
            }   
            .mob_cart_wrapper.fixed {
                transform-origin: top;
                transition: transform 0.3s ease;
                transform: scaleY(1);
                width: 100%;
                position: fixed;
                top: 0;
                z-index: 2;
                box-shadow: 0 2px 4px rgb(182 182 182 / 75%);
            }
            .mob_cart_wrapper p {
                position: relative;
                display: block;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                color: #212529;
                margin: 0;
            }
            .mob_cart_wrapper.clickable p::after{
                position: absolute;
                content: '';
                top: 50%;
                right: 0;
                height: 8px;
                width: 12px;
                background: url('https://conversionratestore.github.io/projects/kingsbox/img/expand_more.svg');
                background-repeat: no-repeat;
                object-fit: cover;
                transform: translateY(-50%) rotate(180deg);
            }  
            .mob_cart_wrapper.clickable.hide_cart p::after{
                transform: translateY(-50%);
            }
            .hide_cart + div {display: none;}
            .hide_cart + div + div {display: none;}

            .product-price p {
                font-weight: 500 !important;
            }

            .shopping-cart-product .product-image {
                min-width: 125px !important;
                max-width: 125px !important;
                height: auto !important;
            }

            .shopping-cart-product>div:last-child {
                margin-top: -1.5rem !important;
            }

            .product-actions i {
                margin-left: 1.5rem !important;
                margin-right: 0 !important;
            }

            @media (min-width: 1640px) {
                .container.container-checkout {
                    max-width: 1580px !important;
                }
            }

            @media (min-width: 1440px) {
                .container.container-checkout {
                    max-width: 1380px !important;
                }
            }
                        
            @media only screen and (min-width: 1200px){
                .product-data {
                width: 100%;
                flex-flow: row !important;
                display: flex !important;
                flex-wrap: wrap !important;
                align-items: baseline !important;
                justify-content: space-between !important;
                }
                .product-data .product-title {
                    width: auto !important;
                    order: 0;
                    white-space: normal !important;
                }
                .product-variations {
                    order: 3;
                    width: 100%;
                }
                .product-price {
                    order: 1;
                }
                .checkout-shipping .moneyback {display: none;}
            }

            @media only screen and (max-width: 1200px) {
                .mob_cart_wrapper {display: block;}

                .checkout-body {padding-top: 0 !important;}
                .checkout-header-wrapper {position: relative;}

                .checkout-summary,.shopping-cart-product {
                    background-color: #FCFCFC;
                }

                app-product-with-variations .my_title {display: none;}

                .checkout-header, .checkout-header-wrapper {background-color: #000;}
                .checkout-header-wrapper img {filter: invert(100%);}
                .checkout-title {    color: #fff;}

                .container-checkout>div>div>div {
                    display: flex;
                    flex-flow: column;
                }

                .checkout-shipping-info-col+div {
                    order: -1;
                }

                .mob_cart_wrapper, {
                    padding: 8px 30px;
                }
                .checkout-shipping {
                    padding: 30px;
                    border-top: none;
                }
                .moneyback {margin: -30px -30px 0 -30px;}
                .checkout-shopping-cart .moneyback {
                    display: none;
                }
                .checkout-shipping-info-col .moneyback {
                    display: block;
                }
                .moneyback {
                    padding: 8px 30px;
                }
                .moneyback p:first-child {                
                    font-size: 12px;
                }
                .moneyback p:last-child {
                    font-size: 8px;
                }

                .product-actions i {
                    margin-left: 0.8rem !important;
                    margin-right: 0 !important;
                }

                .steps {
                    margin: 24px auto 55px;
                }
                .step p {
                    font-size: 10px;
                }
                .circle {
                    width: 30px;
                    height: 30px;
                }
                .circle::after {
                    font-size: 8px;
                }
                .check .circle::after{ 
                    transform: translate(-50%, -50%) scale(0.5);
                }           

                .total {
                    font-size: .9rem !important;
                }

                app-checkout-payment .checkout-payment {width: 100%;}
                
                .steps_btn_wrapper div {flex-direction: column-reverse; margin-top: 32px;}
                .steps_btn_wrapper button {
                    width: 100%;
                }
                .steps_btn_wrapper button.back {margin-top: 16px;}
                
                .container.container-checkout { padding-bottom: 0px;}

                .checkout-paypal-btn > div {padding: 0; margin: 0;}
                #paypal-button { margin: 0;}
                .mob_widener{padding: 0 25px;}
            }

            @media(min-width: 768px) and (max-width: 1200px){
                .mob_cart_wrapper.fixed {
                    max-width: 800px;
                }
            }

            @media(max-width: 767px) {
                /*.checkout-body {padding-top: 72px;} */
                .mob_cart_wrapper {
                    padding: 8px 20px;
                }
                .shopping-cart-product,
                .checkout-shipping  {
                    padding: 20px;
                }
                .moneyback {
                    margin: -20px -20px 0 -20px;
                }
            }
        </style>
        `
const waitForEl = (selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }

            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (!(node instanceof HTMLElement)) continue

                    if (node.matches(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                }
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}
const intervalTimeout = 100

let device = 'desktop'

if (window.innerWidth < 768) {
    device = 'mobile'
}

const callEvent = (eventAction, eventLabel = '') => { // GO Event
    window.dataLayer = window.dataLayer || []
    const obj = {
        'event': 'event-to-ga',
        'eventCategory': `Exp: Checkout hypothesis ${device}`,
        eventAction,
        eventLabel
    }

    dataLayer.push(obj)
    console.log(obj);
}
/** SUMMARY */
document.head.insertAdjacentHTML('beforeend', style)

const moneyback = /*html*/`
    <div class="moneyback">
        <p>30 days money back guarantee</p>
        <p>If you are not satisfied with your Kingsbox product, you can return it within 30 days of delivery without giving a specific reason for return. </p>
    </div>
`
const checkoutSteps = /*html*/`
            ${moneyback}
            <div class="steps">
                <div class="step black check">
                    <div class="circle"></div>
                    <p>Shop</p>
                </div>
                <div class="line"></div>
                <div class="step black">
                    <div class="circle"></div>
                    <p>Shipping info</p>
                </div>
                <div class="line mob_widener"></div>
                <div class="step">
                    <div class="circle"></div>
                    <p>delivery Method</p>
                </div>
                <div class="line"></div>
                <div class="step">
                    <div class="circle"></div>
                    <p>payment</p>
                </div>
            </div>    
        `

waitForEl('.checkout-shipping').then(el => {
    el.insertAdjacentHTML('afterbegin', checkoutSteps)
})
waitForEl('.checkout-shipping-info-col').then(el => {
    el.classList.remove('col-xl-4')
    el.classList.add('col-xl-7')
})
waitForEl('.checkout-shipping-info-col + div').then(el => {
    el.classList.remove('col-xl-4')
    el.classList.add('col-xl-5')
})
waitForEl('.checkout-shopping-cart-col').then(el => el.classList.remove('col-xl-4'))
const obsSummary = () => {
    // define an observer instance
    const observer1 = new IntersectionObserver(onIntersection, {
        root: null,   // default is the viewport
        threshold: 0.1, // percentage of target's visible area. Triggers "onIntersection"
    })

    // callback is called on intersection change
    function onIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.mob_cart_wrapper:not(.clickable)').classList.remove('fixed')
            } else {
                document.querySelector('.mob_cart_wrapper:not(.clickable)').classList.add('fixed')
            }
        })
    }

    // Use the observer to observe an element
    observer1.observe(document.querySelector('app-checkout-summary'))
}
const changeCartTotalPrice = () => {
    const waitForWr = setInterval(() => {
        if (
            document.querySelectorAll('.mob_cart_wrapper p span')[1]
            && document.querySelectorAll('.total')[1]
        ) {
            clearInterval(waitForWr)

            document.querySelectorAll('.mob_cart_wrapper p span').forEach(element => {
                element.innerText = document.querySelectorAll('.total')[1].innerText
            })

        }
    }, intervalTimeout)
}
const waitForSummaryAndCart = setInterval(() => {
    if (
        document.querySelector('app-checkout-summary')
        && document.querySelector('.checkout-shopping-cart-col')
        && document.querySelector('.checkout-summary')
    ) {
        clearInterval(waitForSummaryAndCart)

        document.querySelector('app-checkout-summary').insertAdjacentElement('afterbegin',
            document.querySelector('.checkout-shopping-cart-col')) // put cart above summary

        document.querySelector('app-checkout-summary').insertAdjacentHTML('beforebegin', `<div class="mob_cart_wrapper"><p>Your cart total is <span></span></p></div>`)
        document.querySelector('app-checkout-summary').insertAdjacentHTML('afterbegin', `<div class="mob_cart_wrapper clickable"><p>Your cart total is <span></span></p></div>`)
        waitForEl('.mob_cart_wrapper.clickable p').then(el => el.addEventListener('click', () => {
            el.closest('.mob_cart_wrapper').classList.toggle('hide_cart')
            callEvent('click on cart total arrow')
        }))

        changeCartTotalPrice()

        obsSummary()
    }
}, intervalTimeout)
waitForEl('.checkout-shopping-cart').then(el => el.insertAdjacentHTML('afterbegin', moneyback))
waitForEl('.shopping-cart-product').then(el => el.insertAdjacentHTML('afterbegin', `<h2 class="my_title">Summary</h2>`))
const waitForCoupon = setInterval(() => {
    if (
        document.querySelectorAll('app-checkout-summary div')[2]
        && document.querySelector('.coupons-form')
        && document.querySelector('.coupons-form div')
    ) {
        clearInterval(waitForCoupon)

        document.querySelector('.coupons-form div').addEventListener('click', () => {
            document.querySelector('.coupons-form').classList.toggle('opened')
            callEvent('click on promo code/gift card')
        })

        document.querySelector('.coupons-form').previousElementSibling.insertAdjacentElement('beforebegin', document.querySelector('.coupons-form'))
    }
}, intervalTimeout)

/** STEPS */
const showStepAndHideOther = (stepNumber) => {
    console.log('call func');

    const steps = [
        'app-checkout-shipping-info',
        'app-checkout-delivery-method',
        'app-checkout-payment'
    ]

    Promise.all([
        steps.forEach((item) => waitForEl(item).then(el => el.hidden = true))
    ]).then(() => {
        if (stepNumber === 0) {
            waitForEl(steps[0] + ' .card-title').then(el => el.hidden = false)
            waitForEl(steps[0] + ' .shipping_title').then(el => el.hidden = true)

            if (window.matchMedia("(max-width: 1200px)").matches) {
                waitForEl('.checkout-shipping-info').then(el => el.hidden = false)
            }
        } else {
            waitForEl(steps[0] + ' .card-title').then(el => el.hidden = true)
            waitForEl(steps[0] + ' .shipping_title').then(el => el.hidden = false)

            if (window.matchMedia("(max-width: 1200px)").matches) {
                waitForEl('.checkout-shipping-info').then(el => el.hidden = true)
            }
        }

        if (stepNumber === 1 || stepNumber === 2) {
            waitForEl(steps[0]).then(el => el.hidden = false)
            waitForEl(steps[0] + ' .card-title').then(el => el.hidden = true)
        }

        if (stepNumber === 2) {
            waitForEl('.delivery').then(el => el.hidden = false)
        } else {
            waitForEl('.delivery').then(el => el.hidden = true)
        }
        waitForEl(steps[stepNumber]).then(el => el.hidden = false)
    })

    const waitForStepBar = setInterval(() => {
        if (document.querySelectorAll('.steps .step')[3]) {
            clearInterval(waitForStepBar)

            document.querySelectorAll('.steps .step:not(:first-child)').forEach((step, index) => {

                if (stepNumber === index) {
                    step.classList.add('black')
                } else if (stepNumber < index) {
                    step.classList.remove('black', 'check')
                } else {
                    step.classList.add('check')
                }
            })
        }
    }, intervalTimeout)

    const waitForBtns = setInterval(() => {
        if (document.querySelectorAll('.steps_btn_wrapper button')[5]) {
            clearInterval(waitForBtns)

            document.querySelectorAll('.steps_btn_wrapper div').forEach((div, index) => {
                if (index === stepNumber) {
                    div.hidden = false
                } else {
                    div.hidden = true
                }
            })
        }
    }, intervalTimeout)

    waitForEl('.info-section-data').then(() => waitForEl('[data-stepbtn="shipping"] .continue')).then(el => el.removeAttribute('disabled'))

    sessionStorage.setItem('checkout_step', stepNumber)
}

const waitForBtns = setInterval(() => {
    if (document.querySelectorAll('.steps_btn_wrapper button')[5]) {
        clearInterval(waitForBtns)

        document.querySelector('.steps_btn_wrapper').addEventListener('click', e => {
            if (e.target.matches('button')) {
                callEvent(`click on button — ${e.target.innerText}`)
            }
        })
    }
}, intervalTimeout)

if (sessionStorage.getItem('checkout_step')) {
    switch (sessionStorage.getItem('checkout_step')) {
        case '0':
            showStepAndHideOther(0)
            break;
        case '1':
            showStepAndHideOther(1)
            break;
        case '2':
            showStepAndHideOther(2)
            break;

        default:
            break;
    }
} else {
    showStepAndHideOther(0)
}

waitForEl('.checkout-shipping').then(el => {
    el.insertAdjacentHTML('beforeend', /*html*/`
        <div class="steps_btn_wrapper">
            <div data-stepBtn="shipping">
                <button class="back" onclick="location.href='https://kingsbox.com/'" type="button">back to shop</button>
                <button class="continue" onclick="showStepAndHideOther(1)" disabled>continue to delivery</button>
            </div>
            <div data-stepBtn="delivery">
                <button class="back" onclick="showStepAndHideOther(0)">Back to Shipping info</button>
                <button class="continue" onclick="showStepAndHideOther(2)" disabled>continue to Payment</button>
            </div>
            <div data-stepBtn="pay">
                <button class="back" onclick="showStepAndHideOther(1)" type="button">Back to delivery method</button>
                <button class="continue" disabled>Pay now</button>
            </div>
        </div>`)
    }
)
waitForEl('.info-section-data').then(el => {
    el.insertAdjacentHTML('beforebegin', `<p class="shipping_title">Shipping info</p>`)

    el.insertAdjacentHTML('afterend', /*html*/`
            <div class="delivery">
                <hr>
                <div>
                    <div>
                        <p class="title">Delivery Method&nbsp;</p>                   
                        <p class="method"><span data-delivery="method"></span><span data-delivery="price"></span></p>
                    </div>
                    <p class="change" onclick="showStepAndHideOther(1)">Change</p>
                </div>         
            </div>
        `)
})
const changeDeliveryPriceAndBtn = () => {
    waitForEl('div.d-flex.flex-row.justify-content-between.align-items-center.mb-4.ng-tns-c106-7 p:last-child').then((price) => {
        waitForEl('[data-stepBtn="delivery"] .continue').then((btn) => {
            if (
                price.innerText !== '/'
                || price.innerText !== 'Calculated at next step'
            ) {
                btn.removeAttribute('disabled')

                const waitForEl = setInterval(() => {
                    if (
                        (document.querySelector('.active .value') || document.querySelector('.active h6'))
                        && document.querySelector('[data-delivery="method"]')
                        && document.querySelector('[data-delivery="price"]')
                        && price
                    ) {
                        clearInterval(waitForEl)

                        document.querySelector('[data-delivery="method"]').innerText =

                            (document.querySelector('.active .value')?.innerText || document.querySelector('.active h6')?.innerText)
                            + ' — '

                        document.querySelector('[data-delivery="price"]').innerText = price.innerText
                    }
                }, intervalTimeout)
            } else {
                price.innerText = 'Calculated at next step'
                btn.setAttribute('disabled', true)
            }
        })
    }
    )
    changeCartTotalPrice()
}
waitForEl('.checkout-summary').then(el => {
    changeDeliveryPriceAndBtn()

    const target = el
    const config = {
        childList: true,
        subtree: true
    }
    let observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue

                if (node.matches('.item-price')) {
                    changeDeliveryPriceAndBtn()
                }
            }
        }
    })
    observer.observe(target, config)
})
const waitForPay = setInterval(() => {
    if (
        document.querySelector('.checkout-submit')
        && document.querySelector('[data-stepBtn="pay"] .continue')
    ) {
        clearInterval(waitForPay)

        document.querySelector('[data-stepBtn="pay"] .continue').hidden = false

        document.querySelector('[data-stepBtn="pay"] .continue').onclick = () => {
            document.querySelector('.checkout-submit-btn').click()
        }

        const target = document.querySelector('.checkout-submit')
        const config = {
            childList: true,
            subtree: true,
            attributes: true
        }
        let observer = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (!(node instanceof HTMLElement)) continue

                    if (node.matches('.checkout-paypal-btn')) {
                        document.querySelector('[data-stepBtn="pay"] .continue').insertAdjacentElement('afterend', document.querySelector('#paypal-button'))
                        document.querySelector('[data-stepBtn="pay"] .continue').hidden = true
                    }
                    if (node.matches('.checkout-submit-btn')) {
                        document.querySelector('[data-stepBtn="pay"] .continue').hidden = false
                        document.querySelector('[data-stepBtn="pay"] .continue').onclick = () => {
                            document.querySelector('.checkout-submit-btn').click()
                        }
                    }
                }
            }
        })
        observer.observe(target, config)
    }
}, 100)
const waitForPayBtn = setInterval(() => {
    if (document.querySelector('.checkout-payment') && document.querySelector('[data-stepbtn="pay"] .continue')) {
        clearInterval(waitForPayBtn)

        document.querySelector('.checkout-payment').addEventListener('click', (e) => {
            if (e.target.closest('.payment-method-wrapper')) {
                document.querySelector('[data-stepbtn="pay"] .continue').removeAttribute('disabled')
            }
        }, { once: true })
    }
}, intervalTimeout)

callEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `checkout_hypothesis_${device}`, 'variant_1')
    }
}, intervalTimeout)