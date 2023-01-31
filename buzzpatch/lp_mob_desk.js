/** Variables */
const intervalTimeout = 100
const imgFolderUrl = 'https://conversionratestore.github.io/projects/buzzpatch/img/'

let device = screen.width <= 766 ? "Mobile" : "Desktop"

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
        eventCategory: "Exp: New PDP buzzpatch " + device,
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
        threshold: 0.5 // This was the element being 50% in view (my requirements)
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                timer = setTimeout(() => {
                    sendEvent(`Visibility ${el.className} section`)
                }, ms);
            } else {
                clearTimeout(timer);
            }
        });
    }, config);

    observer.observe(el);
}

/** Parse HTML, CSS and run functions. */
const waitForHeader = setInterval(() => {
    if (document.querySelector('.js-main header')) {
        clearInterval(waitForHeader)

        switch (device) {
            case 'Desktop':
                const styleDesktop = /*html*/`
            <style>
        
            @media only screen and (min-width: 1300px) and (max-width: 1500px) {
                .my_heading {
                    padding-left: 2%;
                }
            }
        
            @media only screen and (max-width: 767px) {
                .my_heading, .steps {
                    display: none;
                }
            }
        
            @media only screen and (min-width: 767px) {
                .navbar-nav.ml-auto:not(.custom_nav) {
                    display: none;
                }

                .my_heading li {
                    text-shadow: none !important;
                }

                header .navbar.fixed-top a {
                    color: #fff !important;
                    transition: none;
                }
                body header {
                    background: #fff url(${imgFolderUrl}header_bg.jpg) no-repeat;
                    background-size: cover;
                    background-position: right;
                }
        
                .bitepatch-template header nav .js-btn.btn-primary {margin-top: 0 !important;}
        
                .navbar-nav {
                    width: 100%;
                    justify-content: space-between;
                }
                .navbar .no-gutters{
                    align-items: center;
                }
        
                header .navbar {
                    padding-top: 16px !important;
                }
        
                header .navbar-nav li,
                header .navbar-nav li a {
                    padding: 0 !important;
                }
                header .navbar-nav li a {
                    font-weight: 600 !important;
                    font-size: 20px !important;
                    line-height: 23px !important;
                    color: #010101 !important;
                }
                
                .bitepatch-template header nav .js-btn.btn-primary {
                    font-weight: 400 !important;
                    font-size: 24px !important;
                    line-height: 32px !important;
                    font-family: 'DINEngschrift LT','Roboto',sans-serif !important;
                    padding: 9px 35px !important;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                }
                
                .bitepatch-template .js-logo img {width: 90px !important;}
        
                header .container .col-lg-12.text-center {
                    display: none;
                }
        
                .my_heading {
                    max-width: 55%;
                    padding-bottom: 65px;
                }
        
                .my_heading__free {
                    width: fit-content;
                    font-family: 'Roboto', sans-serif !important;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 21px;
                    color: #FFFFFF;
                    padding: 10px 24px;
                    background: #FF3C81;
                    border-radius: 52px;
                    margin-bottom: 20px;
                }
        
                .my_heading__free span {
                    padding: 0 16px;
                }
        
                .my_title {
                    font-family: 'DINEngschrift LT', 'Roboto', sans-serif !important;
                    font-weight: 400;
                    font-size: 60px;
                    line-height: 68px;
                    text-transform: uppercase;
                    color: #010101;
                    margin-bottom: 28px;
                }
        
                .my_title img {
                    height: 50px;
                    width: 50px;
                }
        
                .my_heading h3 {
                    font-family: 'Roboto', sans-serif !important;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 32px;
                    color: #010101;
                    text-transform:none;
                }
        
                .my_heading__content {
                    display: flex;
                    flex-direction: row;
                    margin-top: 20px;
                }
        
                .my_heading__content div:first-child {
                    margin-right: 15px;
                }
        
                .my_heading__content div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
        
                .my_heading__content ul li {
                    max-width: 310px;
                    font-family: 'Roboto', sans-serif !important;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #010101;
                    margin-bottom: 16px;
                    list-style-image: url(${imgFolderUrl}check_arrow_pink.svg);
                }
        
                .my_heading__content ul li a {
                    color: #010101;
                    text-decoration: underline;
                }
        
                section.steps {
                    text-align: center;
                }
        
                section.steps .my_title {
                    margin: 24px 0 40px;
                }
        
                .steps_wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }
        
                .line {
                    margin: 50px -40px 0;
                }
        
                .step {
                    max-width: 310px;
                    z-index: 1;
                }
        
                .step img {
                    max-width: 310px;
                    max-height: 310px;
                    border: 10px solid #FFFFFF;
                    box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 24px 60px rgba(12, 11, 11, 0.05), 0px 12px 24px rgba(12, 11, 11, 0.05);
                    border-radius: 50%;
                }
        
                .step_number {
                    font-family: 'DINEngschrift LT', 'Roboto', sans-serif !important;
                    font-weight: 400;
                    font-size: 42px;
                    line-height: 68px;
                    color: #010101;
                    margin: 12px 0 0;
                }
        
                .step_number+p {
                    font-family: 'Roboto', sans-serif !important;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #010101;
                }
        
                .gimme {
                    background: #FF3C81;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                    border-radius: 70px;
                    font-family: 'DINEngschrift LT',  'Roboto', sans-serif !important;
                    font-weight: 400 !important;
                    font-size: 24px !important;
                    line-height: 32px !important;
                    letter-spacing: 0.3px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    padding: 19px 35px !important;
                    width: fit-content;
                }
        
                .trust_img {
                    border-radius: 17px;
                }
            }
            </style>
                `

                document.head.insertAdjacentHTML('beforeend', styleDesktop)

                const menuList = [
                    ['Our Story', 'https://naturalpatch.com/pages/about-us'],
                    ['Advantages', '#included'],
                    ['Our SleepyPatch', 'https://naturalpatch.com/pages/sleepypatch'],
                    ['Reviews', '#reviews'],
                    ['FAQ\'s', '#faqs'],
                    ['Blog', '/a/blog'],
                    ['Wholesale Enquiries', 'https://naturalpatch.com/pages/retail2023v1'],
                ]

                const liList = menuList.map(item =>
                    `<li class="nav-item"><a class="nav-link" href="${item[1]}">${item[0]}</a></li>`
                ).join('')

                /* HTML elements */
                const heading = /*html*/`
                <div class="col-lg-12">
                <div class="my_heading">
                        <p class="my_heading__free">FREE SHIPPING<span>|</span>30-day money back guarantee</p>
                        <h2 class="my_title">Mosquitoes <img src="${imgFolderUrl}mosquito_animal.png"> are the worst<br>And
                            these stickers <img src="${imgFolderUrl}smile_heart.png"> are THE BEST</h2>
                        <h3>What makes Buzz Patch stickers SO GREAT?</h3>
                        <div class="my_heading__content">
                            <div>
                                <ul>
                                    <li>All natural ingredients - super safe for kids and adults.</li>
                                    <li>Non toxic and DEET free.</li>
                                    <li>Up to 12 hours of protection.</li>
                                    <li>Smell amazing :)</li>
                                </ul>
                                <a href="#getNow" class="gimme btn js-btn btn-primary float-right get-it">Gimme those stickers!</a>
                            </div>
                            <div>
                                <ul>
                                    <li>No mess, no fuss.</li>
                                    <li>And they actually work.</li>
                                    <li><a class="event_link" href="#reviews">Check our 300+ five-star customer reviews.</a></li>
                                </ul>
                                <img class="trust_img" src="${imgFolderUrl}reviews_trust.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                `
                const steps = /*html*/`
                <section class="steps">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <img src="${imgFolderUrl}rembo_smile.jpg" alt="rembo smile">
                                    <h2 class="my_title">Oh man, mosquitoes, yes, we know. Shall we banish them forever together right
                                        now?</h2>
                                    <div class="steps_wrapper">
                                        <div class="step">
                                            <img src="${imgFolderUrl}kid1.jpg" alt="kid 1">
                                            <p class="step_number">STEP 1:</p>
                                            <p>Put a Buzz Patch sticker or two on your shirt or pants.</p>
                                        </div>
                                        <div class="line">
                                            <img src="${imgFolderUrl}line_between_img.svg" alt="line">
                                        </div>
                                        <div class="step">
                                            <img src="${imgFolderUrl}kid2.jpg" alt="kid 2">
                                            <p class="step_number">STEP 2:</p>
                                            <p>Forget about mosquitoes and go live your beautiful life outdoors!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                `

                /* Parse HTML */
                waitForEl('.navbar-nav').then(el => el.insertAdjacentHTML('beforebegin', `<ul class="navbar-nav ml-auto custom_nav">${liList}</ul>`))

                waitForEl('.custom_nav').then(el => el.addEventListener('click', (e) => {
                    if (e.target.matches('a')) {
                        sendEvent('Click on menu', e.target.innerText)
                    }
                }))

                waitForEl('.js-heading.js-desktop .row').then(el => el.insertAdjacentHTML('afterbegin', heading))
                document.querySelector('.js-main header').insertAdjacentHTML('afterend', steps)

                break;
            case 'Mobile':
                const styleMobile = /*html*/`
                    <style>
        
                    .js-iphone .js-heading.js-mobile h1 {
                        margin: 32px -10px 28px;
                    }
        
                    .hand_bg {
                        display: flex;
                        align-items: center;
                        width: calc(100% + 30px);
                        min-height: 350px;
                        max-height: 385px;
                        background-image: url(${imgFolderUrl}hand_mobile.png);
                        margin: 0 -15px;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }
        
                    .gimme {
                        max-width: 270px !important;
                        margin: 47% auto 0;
                        max-height: 70px;
                        font-size: 24px !important;                        
                        background: #FF3C81;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                        border-radius: 70px;
                        font-family: 'DINEngschrift LT',  'Roboto', sans-serif !important;
                        font-weight: 400 !important;
                        font-size: 24px !important;
                        line-height: 32px !important;
                        letter-spacing: 0.3px;
                        text-transform: uppercase;
                        color: #FFFFFF;
                        padding: 19px 35px !important;
                        width: fit-content !important;                
                    }
        
                    header .container-fluid.no-padding,
                    header .js-mobile.wave-bg {
                        display: none;
                    }
                .js-heading.js-mobile h1 {
                    font-family: 'DINEngschrift LT', 'Roboto', sans-serif !important;
                    font-weight: 400 !important;
                    font-size: 30px !important;
                    line-height: 36px !important;
                    text-align: center;
                    color: #010101 !important;
                }
        
                .js-heading.js-mobile h1 img {
                    height: 32px !important;
                }
        
                .my_h3 {
                    font-family: 'DINEngschrift LT', 'Roboto', sans-serif !important;
                    font-weight: 400;
                    font-size: 22px;
                    line-height: 26px;
                    text-align: center;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                    color: #010101;
                    margin: 12px 0 28px;
                }
        
                section.list {
                    background-color: #ECEEF0;
                    padding: 15px;
                    padding-bottom: 70px;
                }
        
                section.list ul li {
                    font-family: 'Roboto', sans-serif !important;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #010101;
                    list-style-image: url(${imgFolderUrl}check_arrow_pink.svg);
                    margin-bottom: 12px;
                }
        
                section.list ul li a {
                    color: #010101;
                    text-decoration: underline;
                }
        
                section.steps {
                    padding: 15px;
                }
        
                .steps_wrapper {
                    width: 100%;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }
        
                .steps_wrapper .step_two {
                    margin-left: auto;
                }
        
                .steps_wrapper .step_two {
                    max-width: 230px;
                    margin-top: 20px;
                }
        
                .steps_wrapper .line {
                    position: absolute;
                    top: 15%;
                    right: 3%;
                }
        
                .step {
                    max-width: 200px;
                    z-index: 1;
                }
        
                .step p {
                    text-align: center;
                }
        
                .step img {
                    max-height: 200px;
                    border: 10px solid #FFFFFF;
                    box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 24px 60px rgba(12, 11, 11, 0.05), 0px 12px 24px rgba(12, 11, 11, 0.05);
                    border-radius: 50%;
                }
        
                .step_number {
                    font-family: 'DINEngschrift LT', 'Roboto', sans-serif !important;
                    font-weight: 400;
                    font-size: 22px !important;
                    line-height: 26px !important;
                    color: #010101;
                    margin: 8px 0 4px;
                }
        
                .step_number+p {
                    font-family: 'Roboto', sans-serif !important;
                    font-weight: 400;
                    font-size: 16px !important;
                    line-height: 24px !important;
                    color: #010101;
                    margin: 0;
                    max-width: 200px;
                }
        
                .small_img {
                    text-align: center;
                    width: 100%;
                }
        
                .small_img img {
                    width: 60px;
                    height: 60px;
                }
        
                .wave_wrapper {
                    margin-top: -60px;
                    margin-bottom: -10px;
                    position: relative;
                    z-index: 1;
                }
        
                .wave_wrapper img {
                    width: 100%;
                }
            </style>
                `
                document.head.insertAdjacentHTML('beforeend', styleMobile)

                /* HTML elements */
                const headerImgWithBtn = `
                    <div class="hand_bg">
                        <a href="#getNow" class="gimme btn js-btn btn-primary float-right get-it">Gimme those stickers!</a>
                    </div>
                `

                const elsMobile = /*html*/`
                <div class="wave_wrapper">
                <img src="${imgFolderUrl}my_wave_gray.svg" alt="">
            </div>
            <section class="list">
                <div class="container">
                    <div class="row">
                        <div class="small_img">
                            <img src="${imgFolderUrl}smile_pink.png" alt="pink smile">
                        </div>
                        <h3 class="my_h3">What makes Buzz Patch stickers SO GREAT?</h3>
                        <ul>
                            <li>All natural ingredients - super safe for kids and adults.</li>
                            <li>Non toxic and DEET free.</li>
                            <li>Up to 12 hours of protection.</li>
                            <li>Smell amazing :)</li>
                            <li>No mess, no fuss.</li>
                            <li>And they actually work.</li>
                            <li><a href="#reviews">Check our 300+ five-star customer reviews.</a></li>
                        </ul>
                    </div>
                </div>        
            </section>
            <div class="wave_wrapper">
                <img src="${imgFolderUrl}my_wave_white.svg" alt="">
            </div>
            <section class="steps">
                <div class="container">
                    <div class="row">
                        <div class="small_img">
                            <img src="${imgFolderUrl}rembo_smile.jpg" alt="pink smile">
                        </div>
                        <h3 class="my_h3">Oh man, mosquitoes, yes, we know. Shall we banish them forever together right now?</h3>
                        <div class="steps_wrapper">
                            <div class="step">
                                <img src="${imgFolderUrl}kid1.jpg" alt="kid 1">
                                <p class="step_number">STEP 1:</p>
                                <p>Put a Buzz Patch sticker or two on your shirt or pants.</p>
                            </div>
                            <div class="step step_two">
                                <img src="${imgFolderUrl}kid2.jpg" alt="kid 2">
                                <p class="step_number">STEP 2:</p>
                                <p>Forget about mosquitoes and go live your beautiful life outdoors!</p>
                            </div>
                            <img class="line" src="${imgFolderUrl}line_between_img_mobile.svg" alt="line">
                        </div>
                    </div>
                </div>
            </section>
            <div class="wave_wrapper" style="margin-top: 15px; margin-bottom: 105px;">
                <img src="${imgFolderUrl}my_wave_gray.svg" alt="">
            </div>
                `

                /* Parse HTML */
                waitForEl('.js-heading.js-mobile h1').then(el => el.innerHTML = `Mosquitoes <img src="${imgFolderUrl}mosquito_animal.png"> are the worst<br>And these stickers <img src="${imgFolderUrl}smile_heart.png"> are THE BEST`)

                waitForEl('.hand-banner a').then(el => el.innerText = `Gimme those stickers!`)
                document.querySelector('.js-main header').insertAdjacentHTML('afterend', elsMobile)

                waitForEl('.trust-rating').then(el => el.insertAdjacentHTML('afterend', headerImgWithBtn))

                waitForEl('section.list').then(el => checkVisibilityAfterMs(el))
            default:
                break;
        }

        waitForEl('.gimme').then(el => el.addEventListener('click', () => sendEvent('Click on Gimme those stickers button')))
        waitForEl('.event_link').then(el => el.addEventListener('click', () => sendEvent('Click on Check our 300 link')))
        waitForEl('section.steps').then(el => checkVisibilityAfterMs(el))
    }
}, intervalTimeout)

sendEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `new_pdp_buzzpatch_${device.toLowerCase()}`, 'variant_1')
    }
}, intervalTimeout)