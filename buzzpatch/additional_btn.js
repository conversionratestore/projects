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

        .my_button svg {
            margin: 0 0 6px 4px;
        }

        footer .my_button {
            color: #0D0B0B !important;
            border-color: #EFAE15;
        }

        .my_btn_wrap {
            text-align:  center;
            margin-bottom: 47px;
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
const btn = (svgColor) =>
    /*html*/`
    <a class="my_button" href="https://naturalpatch.com/pages/retail2023v1">Become a reseller
        ${svgColor
        ? `
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M-6.17205e-07 1.88L5.56275 8L-8.21774e-08 14.12L1.71255 16L9 8L1.71255 -7.4858e-08L-6.17205e-07 1.88Z" fill="${svgColor}"/>
            </svg>`
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

const checkVisibility = (el) => {
    const config = {
        root: null,
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.closest('my_btn_wrap')) {
                    sendEvent('visible footer btn')
                } else {
                    sendEvent('visible header btn')
                }
            }
        });
    }, config);

    observer.observe(el);
}

const sendEvent = (eventAction, eventLabel = '') => { // GO Event
    const obj = {
        event: "event-to-ga",
        eventCategory: "Exp: Button. " + device,
        eventAction,
        eventLabel,
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(obj)
    console.log(obj);
}

const clickBtnHandler = (target) => {
    if (target.closest('my_btn_wrap')) {
        sendEvent('click on footer btn')
    } else {
        sendEvent('click on header btn')
    }
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
                    checkVisibility(btn)
                })
            }
        }, intervalTimeout)
    }
}, intervalTimeout)

sendEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `button_${device.toLowerCase()}`, 'variant_1')
    }
}, intervalTimeout)