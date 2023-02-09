/** Variables */
let device = screen.width <= 768 ? "Mobile" : "Desktop"

const intervalTimeout = 100

const style = /*html*/`
    <style>
        .my_button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid #EFAE15;
            border-radius: 82px;
            font-family: "DINEngschrift LT","Roboto",sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            text-transform: uppercase;
            color: #FFFFFF !important;
            padding: 17px 42px;
            text-decoration: none !important;
            opacity: 1 !important;
        }

        .my_button:hover{
            background: #FFFFFF;
            color: #E69B29 !important;
        }
        .my_button:active{
            background: #FFFFFF;
            color: #0D0B0B !important;
        }

        .my_button:hover img {
            filter: brightness(0) saturate(100%) invert(72%) sepia(25%) saturate(2184%) hue-rotate(345deg) brightness(98%) contrast(84%);
        }
        .my_button:active img {
            filter: brightness(0) saturate(100%) invert(6%) sepia(10%) saturate(370%) hue-rotate(314deg) brightness(95%) contrast(103%);
        }

        .js-heading.js-desktop .get-it {
            line-height: 32px !important;
            margin-bottom: 10px !important;
            padding: 19px 100px 17px !important;
        }

        .js-heading.js-desktop .get-it + .my_button {
            position: absolute;
            margin-left: 25px;
        }

        .my_button img {
            margin: 0 0 6px 4px;
        }

        footer .my_button {
            color: #0D0B0B !important;
            border-color: #EFAE15;
        }

        footer .my_button img {
            filter: brightness(0) saturate(100%) invert(6%) sepia(10%) saturate(370%) hue-rotate(314deg) brightness(95%) contrast(103%);
        }
        footer .my_button:hover {
            background: rgba(239, 174, 21, 0.1) !important;
            color: #0D0B0B !important;
        }
        footer .my_button:hover img{
            filter: brightness(0) saturate(100%) invert(6%) sepia(10%) saturate(370%) hue-rotate(314deg) brightness(95%) contrast(103%);
        }
        footer .my_button:active {
            background: rgba(239, 174, 21, 0.1) !important;
            color: #EFAE15 !important;
        }
        footer .my_button:active img {
            filter: brightness(0) saturate(100%) invert(72%) sepia(25%) saturate(2184%) hue-rotate(345deg) brightness(98%) contrast(84%);
        }

        .my_btn_wrap {
            text-align:  center;
            margin-bottom: 47px;
        }

        @media only screen and (max-width: 950px) and (min-width: 760px) {
            .js-heading.js-desktop .get-it + .my_button {
                margin-left: 15px;
            }
            header .my_button {
                font-size: 20px;
            }
            header .my_button img {
                display: none;
            }
        }
    </style>
`
const mobileStyle = /*html*/`
<style>
    .my_button {
        padding: 14px 40px;
        background: rgba(255, 255, 255, 0.95);
        border: 2px solid #FEC2D4;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
        border-radius: 70px;
        font-family: "DINEngschrift LT","Roboto",sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        color: #FF3C81;
        text-decoration: none !important;
        text-transform: uppercase;
        width: 100%;
        display: block;
        width: 100%;
        max-width: 331px;
        position: relative;
        margin: 0 auto;
        opacity: 1 !important;
    }
    
    .my_button:active, .my_button:hover {
        background: rgba(254, 194, 212, 0.95); 
        color: #0D0B0B;
    }

    .my_button + .get-it {
        font-size: 24px !important;
        margin-top: 16px !important;
    }

    .my_btn_wrap {
        text-align:  center;
        margin: 25px auto !important;
    }
</style>
`

/* HTML elements */
const btn = (isArrow) =>
    /*html*/`
    <a class="my_button" href="https://naturalpatch.com/pages/retail2023v1">Become a reseller
        ${isArrow
        ? '<img src="https://conversionratestore.github.io/projects/buzzpatch/img/btn_arrow_right.svg" alt="">'
        : ''
    }
    </a>`

/** Functions */
const waitForEl = selector => {
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
                    if (!(node instanceof HTMLElement)) continue;

                    if (node.matches(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                }
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })
    })
}

const sendEvent = (eventAction, eventLabel = '') => { // GO Event
    const obj = {
        event: "event-to-ga",
        eventCategory: "Exp: Wholesale option. " + device,
        eventAction,
        eventLabel,
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(obj)
    console.log(obj);
}

const checkVisibilityAfterMs = (el, ms = 2000) => {
    let timer;

    const config = {
        root: null,
        threshold: 1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                timer = setTimeout(() => {
                    let position = 'First screen'

                    if (entry.target.closest('.my_btn_wrap')) {
                        position = 'Footer'
                    }

                    sendEvent(`Visibility on Become a reseller button`, position)
                }, ms);
            } else {
                clearTimeout(timer);
            }
        });
    }, config);

    observer.observe(el);
}

const clickBtnHandler = (target) => {
    let position = 'First screen'

    if (target.closest('.my_btn_wrap')) {
        position = 'Footer'
    }

    sendEvent('Click on Become a reseller button', position)
}

/** Parse HTML, CSS and run functions. */
document.head.insertAdjacentHTML('beforeend', device === 'Mobile' ? mobileStyle : style)


const waitForBody = setInterval(async () => {
    if (document.querySelector('body')) {
        clearInterval(waitForBody)

        if (device === 'Mobile') {
            const $header = await waitForEl('.js-heading.js-mobile .get-it')
            const $footerLogo = await waitForEl('footer .navbar-brand.js-logo')

            $header.insertAdjacentHTML('beforebegin', btn())
            $footerLogo.insertAdjacentHTML('afterend', `<div class="my_btn_wrap">${btn()}</div>`)
        } else {
            const $header = await waitForEl('.js-heading.js-desktop .get-it')
            const $footer = await waitForEl('footer')

            $header.insertAdjacentHTML('afterend', btn('#FFFFFF'))
            $footer.insertAdjacentHTML('afterbegin', `<div class="my_btn_wrap">${btn('#0D0B0B')}</div>`)
        }

        const waitForBtns = setInterval(() => {
            if (document.querySelectorAll('.my_button')) {
                clearInterval(waitForBtns)

                document.querySelectorAll('.my_button').forEach(btn => {
                    btn.addEventListener('click', (e) => clickBtnHandler(e.target))
                    checkVisibilityAfterMs(btn)
                })
            }
        }, intervalTimeout)
    }
}, intervalTimeout)

sendEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `exp_wholesale_option_${device.toLowerCase()} `, 'variant_1')
    }
}, intervalTimeout)