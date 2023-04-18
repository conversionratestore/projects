if (window.location.pathname.includes('/a/')) {
    window.location = window.location.href.replace('/a/', '/b/')
} else {
    // -------------------------------------
    // CONSTANTS
    // -------------------------------------
    const WAIT_INTERVAL_TIMEOUT = 100
    const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/creditsage/img'
    let timeoutId

    const startTime = Date.now()

    // Define CSS styles
    const style = /*html*/`
  <style>
    .overlay {  
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(95, 107, 122, 0.5);
        z-index: 99;
        display: none;
    }

    .popup {
        position: fixed;
        bottom: -100%;
        left: 0;
        right: 0;
        padding: 19px 16px 24px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transition: bottom 0.3s ease-out;    
        border-radius: 14px 14px 0px 0px;
        z-index: 100;  
        width: 100%;
        overflow: auto;
        max-height: 100%;
    }

    .popup.show {
        bottom: -2px;
    }

    .popup-close {
        position: absolute;
        right: 12px;
        top: 12px;
        padding: 4px;
    }

    .popup p {
        font-family: 'Circe', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #5F6B7A;
        margin: 0;
    }

    .popup p span {
        color: #2DAF6B;
    }

    .popup .title {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        color: #1E2F44;
        margin-bottom: 12px;
    }

    .popup .title + p {
        font-family: 'Circularstd', 'Circe', sans-serif;
    }

    .graph {
        display: block;
        margin: 12px auto 11px;
    }

    p.green_div {
        padding: 8px;
        font-family: 'Circe', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: #5F6B7A;
        background: rgba(45, 175, 107, 0.1);
        border-radius: 18px;
    }

    p.green_div span.asterisk {
        color: #5F6B7A;
        font-family: 'Roboto', sans-serif;
    }

    p.call_to_fix {
        text-align: center;
        color: #1E2F44;
        margin: 12px auto;
        max-width: 304px;
    }

    .popup .btn_green {
        padding: 16px;
    }

    .popup .btn_green .btn-txt.mobile{
        font-size: 24px;
    }

    .popup .btn_green .ic {
        width: 1.5em;
        height: 1.5em;
    }
  </style>
    `

    // -------------------------------------
    // HTML ELEMENTS
    // -------------------------------------
    const popupHTML = /*html*/`
    <div class="overlay"></div>
    <div class="popup">
        <img class="popup-close" src="${IMAGE_DIR_URL}/close_x.svg" alt="x">
        <p class="title">Did you know?</p>
        <p>A collection account can remain on your credit reports <span>for up to 7 years,</span> negatively impacting
            your credit
            score, <span>even if you pay the debt.</span></p>
        <img class="graph" src="${IMAGE_DIR_URL}/graph.svg" alt="">
        <p class="green_div"><span class="asterisk">*</span> CreditSage's experts <span>can potentially remove</span> negative items from your report
            or provide a full
            refund (minus
            setup fee) if none are removed <span>within the first 100 days.</span></p>
        <p class="call_to_fix">Call now to fix your credit report and reclaim financial freedom today!</p>
    </div>
    `

    // -------------------------------------
    // FUNCTIONS
    // -------------------------------------
    const waitForElement = async (selector) => { // Wait for an element to appear on the page
        while (!document.querySelector(selector)) {
            await new Promise(resolve => setTimeout(resolve, WAIT_INTERVAL_TIMEOUT))
        }
        return document.querySelector(selector)
    }

    const showPopup = () => {
        if (!sessionStorage.getItem('popupShown')) {
            document.querySelector('.popup').classList.add('show')
            document.querySelector('.overlay').style.display = 'block'
            sessionStorage.setItem('popupShown', 'true')

            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event-to-ga4',
                'event_name': 'exp_value_proposition_popup_vis',
                'event_desc': 'Did you know',
                'event_type': 'Popup',
                'event_loc': Math.round((Date.now() - startTime) / 1000)
            })
        }
    }

    const resetTimeout = () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => showPopup(), 5000)
    }

    const handleOutsideClick = (event) => {
        if (!event.target.closest('.popup') && document.querySelector('.popup.show')) {
            closePopup()
        }
    }

    const closePopup = (sendEventOnClose = true) => {
        document.querySelector('.popup').classList.remove('show')
        document.querySelector('.overlay').style.display = 'none'

        if (sendEventOnClose) {
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event-to-ga4',
                'event_name': 'exp_value_proposition_popup_close',
                'event_desc': 'Close',
                'event_type': 'Popup',
                'event_loc': 'Landing page'
            })
        }

        document.removeEventListener('click', handleOutsideClick)
    }

    // -------------------------------------
    // MAKE DOM CHANGES
    // -------------------------------------
    document.head.insertAdjacentHTML('beforeend', style)

    const waitForBtn = setInterval(() => {
        if (document.querySelector('.btn_green')) {
            clearInterval(waitForBtn)

            document.body.insertAdjacentHTML('beforeend', popupHTML)

            waitForElement('.popup-close').then(() => {
                const popup = document.querySelector('.popup')
                const closeButton = popup.querySelector('.popup-close')

                closeButton.addEventListener('click', () => {
                    closePopup()
                })

                setTimeout(() => showPopup(), 10000)

                window.addEventListener('click', resetTimeout, { once: true })
                window.addEventListener('scroll', resetTimeout, { once: true })

                document.addEventListener('click', handleOutsideClick)

                // add btn                
                const greenBtn = document.querySelector('.btn_green').cloneNode(true)
                popup.appendChild(greenBtn)
            })

            waitForElement('.popup .btn_green').then(el => el.addEventListener('click', () => {
                window.dataLayer = window.dataLayer || []
                dataLayer.push({
                    'event': 'event-to-ga4',
                    'event_name': 'exp_value_proposition_popup_call',
                    'event_desc': 'Click',
                    'event_type': 'Button',
                    'event_loc': 'Landing page'
                })

                closePopup(false)
            }))
        }
    }, WAIT_INTERVAL_TIMEOUT)

    // Add Clarity
    const recordClarity = setInterval(() => {
        if (typeof clarity === 'function') {
            clearInterval(recordClarity)
            clarity('set', `value_proposition`, 'variant_1')
        }
    }, WAIT_INTERVAL_TIMEOUT)
}