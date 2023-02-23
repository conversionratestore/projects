const urlPathname = window.location.pathname
const intervalTimeout = 100

const sendEvent = (eventAction, eventLabel = '') => { // GO Event
    const obj = {
        event: "event-to-ga",
        eventCategory: "Exp: Free shipping content",
        eventAction,
        eventLabel,
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(obj)
}

if (urlPathname.includes('pages/sleepypatch')) {

    if (sessionStorage.getItem("Page2Visited")) {
        sessionStorage.removeItem("Page2Visited");
        window.location.reload(true); // force refresh page1
    }

    const dir = 'https://conversionratestore.github.io/projects/buzzpatch/img/'

    const style = /*html*/`
      <style>
        #getNow .prices + img {
            display: none;
        }

        .guarantee {
            background: #FFFFFF;
            border: 1px solid #ECEEF0;
            border-radius: 2px;
            padding: 15px;
        }

        .guarantee p {
            font-family: 'Roboto', sans-serif;
            margin: 0;
        }

        .guarantee_head {
            display: flex;
            align-items: center;
        }

        .guarantee_head img {
            margin: 0 !important;
            margin-right: 10px !important;
            max-width: initial !important;
        }

        .guarantee_head p:first-child {
            font-weight: 400;
            font-size: 20px !important;
            line-height: 110% !important;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #0C0B0B;
            font-family: 'Din Condensed', 'Roboto', sans-serif;
            margin: 0;
            margin-bottom: 2px;
            text-align: left;
        }

        body .guarantee_head p:last-child {
            font-weight: 400;
            font-size: 14px !important;
            line-height: 130% !important;
            color: #212529;
            margin: 0;
            text-align: left;
        }

        .guarantee hr {
            border-color: #D9D9D9;
            margin: 10px 0 !important;
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #ccc;
            padding: 0;
        }

        .guarantee_bottom {
            display: flex;
            justify-content: space-between;
        }

        .package .guarantee_bottom p {
            font-weight: 400;
            font-size: 14px !important;
            line-height: 130% !important;
            color: #6F6F6F;
            margin: 0 !important;
        }

        .package .guarantee_bottom p b {
            font-size: 16px !important;
            color: #0C0B0B;
        }

        .package .guarantee_bottom img {
            margin: 0 !important;
            margin-left: 10px !important;
            max-width: initial !important;
        }

        .progress_bar {
            position: relative;
            height: 10px;
            background: #ECEEF0;
            border-radius: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 2px;
            margin-bottom: 16px;
            margin-top: 23px;
        }

        .progress_inner {
            position: relative;
            width: 42%;
            background: #EFAE16;
            border-radius: 100px;
            height: 100%;
            z-index: 1;
        }

        .full .progress_inner img:last-child {
            z-index: 0;
        }

        .progress_inner img:last-child {
            z-index: 1;
        }

        .progress_inner img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            z-index: 1;
            width: 24px;
            height: 24px;
        }

        .progress_bar .line {
            position: absolute;
            top: 50%;
            right: 50%;
            width: 6px;
            height: 23px;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ECEEF0;
            border-radius: 13px;
        }

        .progress_bar .line>div {
            width: 2px;
            height: 20px;
            background: #999999;
            border-radius: 13px;
        }

        .progress_bar.full .progress_inner {
            width: 100%;
        }

        .progress_bar.full .line>div {
            background: #EFAE16;
        }

        .full+.car_shipping div p:first-child {
            display: none;
        }

        .full+.car_shipping div p:last-child {
            display: block;
        }

        .car_shipping div p:last-child {
            display: none;
        }

        .car_shipping {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
        }

        .car_shipping img {
            max-width: initial !important;
            margin: 0 !important;
            margin-right: 10px !important;
        }

        body .car_shipping p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px !important;
            line-height: 130% !important;
            color: #0C0B0B;
            margin: 0;
        }

        .guarantee + img {
            display: none !important;
        }

        .pack_img_wrapper {
            position: relative;
            width: 152px;
            height: 152px;
            margin: 22px auto -6px;
        }

        .pack_img {
            width: 100%;
            height: 100%;
        }

        .pack_svg {
            position: absolute;
            top: 0;
            right: -30px;
            display: block;
        }

        #getNow .sub + img {
            display: none;
        }

        #getNow .pack_svg.hide_me{
            display: none;
        }
    </style>
    `

    /* HTML elements */
    const progressBar = /*html*/`
<div class="progress_bar full" data-obj="input range">
        <div class="progress_inner">
            <img src="${dir}smile_bar.png" alt="">
            <img src="${dir}smile_rembo.png" alt="">
        </div>
        <div class="line">
            <div></div>
        </div>
    </div>
    <div class="car_shipping">
        <img src="${dir}car_speed.svg" alt="">
        <div>
            <p>You are only <b>1 pack</b> away from <b>Free Shipping</b></p>
            <p><b>You get Free Shipping, congratulations!</b></p>
        </div>
    </div>
`
    const guarantee = /*html*/`
<div class="guarantee" data-obj="test us much section">
        <div class="guarantee_head">
            <img src="${dir}30_days_gold.svg" alt="">
            <div>
                <p>Test as much as you want</p>
                <p>No returns required</p>
            </div>
        </div>
        <hr>
        <div class="guarantee_bottom">
            <p>Rated: <b>Excellent</b> (Reviews 233)</p>
            <img src="${dir}stars_green.svg" alt="">
        </div>
    </div>
`
    /** Functions */
    const checkVisibilityAfterMs = (el, ms = 3000) => {
        let timer;

        const config = {
            root: null,
            threshold: 1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    timer = setTimeout(() => {
                        sendEvent(`Visibility ${entry.target.dataset.obj}`)
                    }, ms);
                } else {
                    clearTimeout(timer);
                }
            });
        }, config);

        observer.observe(el);
    }

    /** Parse HTML, CSS and run functions. */
    document.head.insertAdjacentHTML('beforeend', style)

    const waitForImg = setInterval(() => {
        if (document.querySelector('#getNow img')) {
            clearInterval(waitForImg)

            document.querySelector('#getNow img').insertAdjacentHTML('afterend', /*html*/`
                <div class="pack_img_wrapper">
                    <img class="pack_img" src="${dir}itch_pack.png" alt="">
                    <img class="pack_svg" src="${dir}free_shipping_icon.svg" alt="">
                </div>
            `)
        }
    }, intervalTimeout)

    const waitForAddBtn = setInterval(() => {
        if (
            document.getElementById('addToCart')
            && document.querySelector('form input[type="radio"]')
        ) {
            clearInterval(waitForAddBtn)

            document.querySelector('form input[type="radio"]').click()
            document.querySelector('form input[type="radio"]').checked = true

            document.getElementById('addToCart').insertAdjacentHTML('beforebegin', progressBar)
            document.getElementById('addToCart').insertAdjacentHTML('afterend', guarantee)
            sessionStorage.setItem('packOne', 'false')

            const waitForBar = setInterval(() => {
                if (
                    document.querySelector('.progress_bar')
                    && document.querySelector('.pack_svg')
                    && document.querySelector('.guarantee')
                    && document.querySelectorAll('form input[type="radio"]')[3]
                ) {
                    clearInterval(waitForBar)

                    document.querySelectorAll('form input[type="radio"]').forEach(radio => {
                        radio.addEventListener('change', () => {
                            if (radio.id === 'radios-3') {
                                document.querySelector('.progress_bar').classList.remove('full')

                                document.querySelector('.pack_svg').classList.add('hide_me')

                                sessionStorage.setItem('packOne', 'true')
                            } else {
                                document.querySelector('.progress_bar').classList.add('full')

                                document.querySelector('.pack_svg').classList.remove('hide_me')

                                sessionStorage.setItem('packOne', 'false')
                            }
                        })
                    });

                    checkVisibilityAfterMs(document.querySelector('.progress_bar'))
                    checkVisibilityAfterMs(document.querySelector('.guarantee'))
                }
            }, intervalTimeout)
        }
    }, intervalTimeout)
} else if (urlPathname.includes('checkout')) {
    sessionStorage.setItem("Page2Visited", "True")

    if (sessionStorage.getItem('packOne') === 'true') {
        document.head.insertAdjacentHTML('beforeend', /*html*/`
        <style>
        .money-back.js-mobile {
            margin: 20px auto 18px;
        }
        .money-back.js-mobile .f-shipping {
            display: none;
        }
        </style>
        `)

        const waitForPriceShipping = setInterval(() => {
            if (document.querySelector('.total-line--shipping .total-line__price span')) {
                clearInterval(waitForPriceShipping)

                if (document.querySelector('.total-line--shipping .total-line__price span').classList.contains('order-summary__small-text')) {
                    document.querySelector('.skeleton-while-loading.order-summary__small-text').innerText = 'Calculated at next step'
                }
            }
        }, intervalTimeout)
    }
}

sendEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `free_shipping_content`, 'variant_1')
    }
}, intervalTimeout)