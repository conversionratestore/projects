if (window.location.pathname.includes('/a/')) {
    window.location = 'https://collections.creditsage.com/b/11-charter-communications'
} else {
    // -------------------------------------
    // CONSTANTS
    // -------------------------------------
    const WAIT_INTERVAL_TIMEOUT = 100
    const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/creditsage/img'
    let timeoutId

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
        max-height: 90%;
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

    .popup .title {
        font-family: 'Circe', sans-serif;
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        color: #1E2F44;
        margin-bottom: 12px;
    }

    .popup p {
        font-family: 'Circular Std', 'Circe', sans-serif;
        font-style: normal;
        font-weight: 450;
        font-size: 14px;
        line-height: 22px;
        color: #5F6B7A;
        margin: 0;
    }

    .popup p span {
        color: #2DAF6B;
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

    p.call_to_fix {
        font-family: 'Circe', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: #1E2F44;
        margin: 12px auto;
        max-width: 304px;
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
        <p class="green_div">* CreditSage's experts <span>can potentially remove</span> negative items from your report
            or provide a full
            refund (minus
            setup fee) if none are removed <span>within the first 100 days.</span></p>
        <p class="call_to_fix">Call now to fix your credit report and reclaim financial freedom today!</p>
        <a href="tel:(844)442-0573" class="btn btn_green w-inline-block tap_to_call">
            <div class="ic ic_btn w-embed"><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.83333 14.3933C10.7533 18.1667 13.84 21.2533 17.62 23.1733L20.5533 20.2333C20.92 19.8667 21.4467 19.76 21.9067 19.9067C23.4 20.4 25.0067 20.6667 26.6667 20.6667C27.4067 20.6667 28 21.26 28 22V26.6667C28 27.4067 27.4067 28 26.6667 28C14.1467 28 4 17.8533 4 5.33333C4 4.59333 4.6 4 5.33333 4H10C10.74 4 11.3333 4.59333 11.3333 5.33333C11.3333 6.99333 11.6 8.6 12.0933 10.0933C12.24 10.5533 12.1333 11.08 11.7667 11.4467L8.83333 14.3933Z"
                        fill="currentColor"></path>
                </svg></div>
            <div class="btn-txt mobile">Tap To Call</div>
            <div class="w-embed">
                <p class="btn-txt">Call (844) 442-0573</p>
            </div>
        </a>
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

    const showPopup = (seconds) => {
        if (!sessionStorage.getItem('popupShown')) {
            document.querySelector('.popup').classList.add('show')
            document.querySelector('.overlay').style.display = 'block';
            sessionStorage.setItem('popupShown', 'true')

            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event-to-ga4',
                'event_name': 'exp_value_proposition_popup_vis',
                'event_desc': 'Did you know',
                'event_type': 'Popup',
                'event_loc': seconds
            })
        }
    }

    const resetTimeout = () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => showPopup(5000), 5000)
    }

    const handleOutsideClick = (event) => {
        if (!event.target.closest('.popup')) {
            closePopup()
        }
    }

    const closePopup = () => {
        document.querySelector('.popup').classList.remove('show')
        document.querySelector('.overlay').style.display = 'none';

        window.dataLayer = window.dataLayer || []
        dataLayer.push({
            'event': 'event-to-ga4',
            'event_name': 'exp_value_proposition_popup_close',
            'event_desc': 'Close',
            'event_type': 'Popup',
            'event_loc': 'Landing page'
        })

        document.removeEventListener('click', handleOutsideClick)
    }

    // -------------------------------------
    // MAKE DOM CHANGES
    // -------------------------------------
    document.head.insertAdjacentHTML('beforeend', style)

    const waitForBody = setInterval(() => {
        if (document.body) {
            clearInterval(waitForBody)

            document.body.insertAdjacentHTML('beforeend', popupHTML)

            waitForElement('.popup-close').then(() => {
                const popup = document.querySelector('.popup')
                const closeButton = popup.querySelector('.popup-close')

                closeButton.addEventListener('click', () => {
                    closePopup()
                })

                setTimeout(() => showPopup(10000), 10000)

                window.addEventListener('click', resetTimeout, { once: true })
                window.addEventListener('scroll', resetTimeout, { once: true })

                document.addEventListener('click', handleOutsideClick, { once: true })
            })

            waitForElement('.tap_to_call').then(el => el.addEventListener('click', () => {

                window.dataLayer = window.dataLayer || []
                dataLayer.push({
                    'event': 'event-to-ga4',
                    'event_name': 'exp_value_proposition_popup_call',
                    'event_desc': 'Click',
                    'event_type': 'Button',
                    'event_loc': 'Landing page'
                })
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