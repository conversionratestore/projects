const dir = 'https://conversionratestore.github.io/projects/grantme/img/'

const style = `
<style>
.crs-container .trustpilot span {
    color: var(--white, #FFF);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; 
    text-decoration-line: underline;
    margiin-left: -4px;
}
.trustpilot svg {
    margin-right: 12px;
}
.country-list {
    position: absolute;
    left: -5px;
    bottom: 100%;
    outline: none;
    list-style: none;
    box-shadow: 0 0 15px 5px rgba(0,0,0,.1);
    background-color: #fff;
    max-height: 160px;
    overflow-y: scroll;
    border-radius: 0.25rem;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0,0,0,.1);
    display: none;
    margin: 0.125rem 0;
    padding: 0.5rem 0;
    z-index: 1000;
    width: fit-content;
    min-width: 82.93vw;
}
.flag-dropdown {
    position: absolute;
    left: 5px;
    top: 10px;
    padding: 8px;
}
.flag-dropdown ~ input {
    padding-left: 45px!important
}
.flag-dropdown.active .country-list {
    display: block;
}
.country-list li {
    padding: 10px 13px;
    line-height: 1;
}
.country-list li.active, .country-list li:hover {
    background-color: #f1f1f1;
}
.country-list .fi {
    margin-right: 0.5rem;
    width: 24px;
    height: 20px;
}
.country-list .country-name {
    margin-right: 0.5rem;
}
.country-list .country .dial-code {
    font-weight: 700;
    margin-left: auto;
    display: block;
    color: #000;
}
.elementor-element-39c00eb,
.elementor-element-6514657,
.wj_embed_wrapper.wj_bottombar,
.elementor-element-9b92629 {
    display: none!important;
}
.elementor-31668 .elementor-element.elementor-element-72e0f20 {
    padding: 50px 16px;
}
.elementor-31668 .elementor-element.elementor-element-ab828a0,
.elementor-element-89f4b88 {
    padding: 40px 16px!important;
}
div#n2-ss-16 .n2-ss-slider-3 {
    padding-top: 10px!important;
}
.n2-ss-slider .n2-ss-slider-controls-above, 
.n2-ss-slider .n2-ss-slider-controls-below {
    margin-top: 20px;
}
div#n2-ss-16 .nextend-bullet-bar .n2-bullet.n2-active {
    border: 1px solid rgba(62, 120, 186, 1)!important;
}
.elementor-element-72e0f20 .elementor-column-gap-default>.elementor-column>.elementor-element-populated,
.elementor-element-ab828a0 .elementor-column-gap-default>.elementor-column>.elementor-element-populated ,
.elementor-element-89f4b88 .elementor-column-gap-default>.elementor-column>.elementor-element-populated{
    padding: 0!important;
}
.elementor-31668 .elementor-element.elementor-element-db95b72 .htmega-section-title .section-title-txt {
    color: var(--primary-blue, #2B3E51);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; 
    letter-spacing: -0.96px;
}
.htmega-items-hedding {
    padding: 10px 21px 10px 0!important;
    font-size: 24px!important;
    line-height: 32px!important;
}
.accordion-content {
    padding: 10px 0 20px!important;
}
.accordion-content p {
    text-align: left!important;
    margin: 0!important;
}
.elementor-31668 .elementor-element.elementor-element-0071267 .single_accourdion:last-child .htmega-items-hedding {
    border: none!important;
}
.elementor-31668 .elementor-element.elementor-element-0071267 .accordion-content {
    border-bottom: 1px solid #3E78BA!important;
}
.htmega-accourdion-title .htmega-items-hedding .accourdion-icon {
    width: 16px!important;
}
.elementor-31668 .elementor-element.elementor-element-a377a73 .htmega-section-title .section-subtitle-txt {
    line-height: 24px;
    margin: 13px 0 0 0;
}
.crs-sticky {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    background: #E9F3FA;
    padding: 20px 16px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(100px);
    pointer-events: none;
}
.crs-sticky button {
    margin: 0;
}
.crs-sticky.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}
.crs-sticky button {
    padding: 11px;
}
.crs-container {
    padding: 0 16px;
}
.crs-container h2,
.elementor-31668 .elementor-element.elementor-element-a377a73 .htmega-section-title .section-title-txt {
    color: var(--primary-blue, #2B3E51);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 37px; 
    letter-spacing: -0.48px;
    margin: 0;
}
.elementor-element-89f4b88 .btn-yellow {
    margin-top: 0;
}
.crs-container h3 {
    color: var(--primary-blue, #2B3E51);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
}
.crs-container p {
    color: var(--primary-blue, #2B3E51);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; 
    margin: 0;
    text-align: left;
}
.crs-container input::-webkit-input-placeholder {
    color: var(--grey-60, #676767);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.crs-container input:-moz-placeholder {
    color: var(--grey-60, #676767);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
.crs-container input::-moz-placeholder {
    color: var(--grey-60, #676767);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
}
.crs-container input:-ms-input-placeholder {
    color: var(--grey-60, #676767);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.crs-container input {
    border-radius: 6px;
    border: 1px solid var(--grey-20, #CCC);
    background: var(--white, #FFF);
    padding: 18px 13px;
    color: var(--primary-blue, #2B3E51);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
}
.offer {
    background: var(--primary-blue, #2B3E51);
    padding: 20px 0 24px;
}
.offer .trustpilot {
    margin-bottom: 24px;
}
.offer h1 {
    color: var(--white, #FFF);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 37px;
    letter-spacing: -0.48px;
    margin-bottom: 12px;
}
.offer .crs-container > p {
    color: var(--white, #FFF);
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 24px;
}
.block {
    border-radius: 6px;
    background: #3E5062;
    padding: 24px 16px;
}
.block_head p {
    color: var(--white, #FFF);
    padding-left: 4px;
    font-size: 15px;
    font-weight: 600;
    line-height: 24px; 
    margin: 0;
}
.btn-yellow {
    border-radius: 6px;
    background: #EBBD45!important;
    border: none!important;
    padding: 24px 15px;
    color: var(--primary-blue, #2B3E51);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    width: 100%;
    margin-top: 24px;
    position: realtive;
}
.btn-yellow.loading:after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: url(https://conversionratestore.github.io/projects/lemieux/img/loading.gif) no-repeat center / 100%;
    width: 30px;
    height: 30px;
    z-index: 1;
}
.btn-learn,
.featured p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    margin: 0;
}
.btn-learn {
    color: var(--primary-yellow, #EBBD45)!important;
    display: block;
    font-weight: 600;
    line-height: 22px;
    text-decoration-line: underline;
    margin: 20px 0 0 0!important;
    padding-top: 4px;
}
.featured p {
    padding: 24px 0 10px;
    color: var(--grey-20, #CCC);
    line-height: 24px; /* 150% */
}
.featured img {
    margin: 0 auto;
    display: block;
}
/* host */
.host {
    padding: 30px 0;
}
.host .crs-container > div {
    margin-top: 80px;
}
.host .crs-container > div,
.gift,
.host .crs-container > div .img {
    background: linear-gradient(-90deg, rgba(31, 114, 218, 1), rgba(162, 91, 182, 1), rgba(230, 173, 25, 1));
    padding: 1.5px;
    border-radius: 7px;
}
.host .crs-container > div .img {
    background: linear-gradient(90deg, rgba(31, 114, 218, 1), rgba(162, 91, 182, 1), rgba(230, 173, 25, 1));
}
.host .crs-container > div > div,
.gift > div {
    background-color: #fff;
    border-radius: 7px;
}
.host .crs-container > div > div {
    padding: 83px 16px 28px;
    position: relative;
}
.host .crs-container > div .img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%,-50%);
}
.host .crs-container > div img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.host p {
    color: var(--grey-60, #676767);
    text-align: center;
    margin: 0;
}
.host p.name {
    color: var(--primary-blue, #2B3E51);
    font-size: 22px;
    line-height: 37px;
    letter-spacing: -0.48px;
    margin-bottom: 8px;
}
.host p.info {
    color: var(--primary-blue, #2B3E51);
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    margin-bottom: 8px;
    padding-bottom: 8px;
    position: relative;
}
.host p.info:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
.host .btn-yellow {
    margin-top: 20px;
}
/* learn */
.learn {
    padding: 0 0 30px;
}
.learn ul {
    padding: 0;
    margin: 18px 0;
    display: grid;
    gap: 16px;
    list-style-type: none;
}
.learn ul li {
    position: relative;
    padding-left: 32px;
}
.learn ul li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 2px;
    background: url('${dir}checked-circle.svg') no-repeat center / 20px;
    width: 20px;
    height: 20px;
}
.gift > div {
    padding: 16px;
}
.gift img {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    margin-right: 16px;
}
.gift p {
    margin: 4px 0 0 0;
}
/* attend form */
.attend {
    background: var(--primary-blue, #2B3E51);
    padding: 30px 0;
}
.attend_info p {
    font-size: 16px;
    line-height: 24px;
}
.attend_info {
    display: grid;
    gap: 14px;
}
.attend_info p,
.attend_info > h2 {
    color: #fff;
}
.attend h2  {
    margin-bottom: 6px;
}
.limited {
    border-radius: 6px;
    background: #3E5062;
    padding: 14px;
    display: grid;
    gap: 10px;
    margin-bottom: 30px;
    position: relative;
}
.limited svg {
    position: absolute;
    right: -5.4px;
    bottom: -26.8px;
}
.limited h3 {
    color: #fff;
}
.attend_form {
    border-radius: 10px;
    background: var(--white, #FFF);
    padding: 24px 0 18px;
}
.attend_form > div:not(.elementor-element) {
    display: none;
}
.attend_form h2 {
    margin-bottom: 20px;
    padding: 0 16px;
}
.attend_form p {
    padding-bottom: 6px;
    color: var(--grey-60, #676767);
    padding: 0 16px;
}
form > .relative {
    margin-top: 12px;
}
form .btn-yellow {
    margin: 12px 0 20px;
}
p.error-message {
    display: none;
    color: red;
    font-size: 11px;
    line-height: 1;
    padding: 2px 0 0 0;
}
.error .error-message {
    display: block;
}
form .absolute {
    right: 5px;
    top: 21px;
}
form .absolute p {
    margin-top: -14px;
    color: var(--dull-orange, #EB6F2D);
    font-family: Roboto;
    font-size: 16px;
    line-height: 16px; 
}
/* popup */
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    z-index: 999999;
    background: rgba(43, 62, 81, 0.75);
    padding-top: 76px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
}
.popup.active {
    opacity: 1;
    pointer-events: auto;
}
.popup .crs-container {
    padding-bottom: 20px;
}
.popup_close {
    position: absolute;
    top: 8px;
    right: 0;
    background: none!important;
    border: none!important;
}
.popup_head {
    border-radius: 10px 10px 0px 0px;
    background: #55B4D3;
    padding-top: 57px;
    padding-bottom: 14px;
    position: relative;
}
.popup_head p {
    color: var(--white, #FFF);
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 37px; 
    letter-spacing: -0.48px;
}
.popup_head img {
    border-radius: 50%;
    border: 4px solid var(--white, #FFF);
    width: 93px;
    height: 93px;
    display: block;
    position: absolute;
    top: -46px;
    left: 50%;
    transform: translateX(-50%);
}
.popup form {
    border-radius: 0 0 10px 10px;
    background: #FFF;
    padding: 18px 16px 29px;
}
.popup h2 {
    color: var(--primary-blue, #2B3E51);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
} 
.popup form h2 + p {
    margin: 20px 0;
    font-weight: 700;
    color: var(--grey-60, #676767);
}
.popup input {
    border-radius: 66px;
    border: 1px solid var(--grey-20, #CCC);
    background: #F8F8F8;
    padding-top: 16px;
    padding-bottom: 16px;
}
.popup form .absolute {
    top: 19px;
    right: 15px;
}
.popup form .absolute p {
    margin-top: -10px;
}
.popup .flag-dropdown {
    left: 20px;
    top: 8px;
}
.popup input {
    padding-left: 31px!important;
}
.popup .flag-dropdown ~ input {
    padding-left: 61px!important;
}
/* base */
.crs-underline {
    text-decoration: underline;
}
.relative {
    position: relative;
}
.absolute {
    position: absolute;
}
.d-flex {
    display: flex;
} 
.justify-between {
    justify-content: space-between;
}
.items-center {
    align-items: center;
}

</style>`

function getLocName(event) {
    event.stopImmediatePropagation()
    let target = event.target;
    let loc = ''
    let name = ''
    
    if (target.closest('.offer')) {
        loc = 'First screen Register  - webinar page'
        name = 'exp_regist_pag_butt_first_grab'
    } else if (target.closest('.host')) {
        loc = 'Your hosts Register  - webinar page'
        name = 'exp_regist_pag_butt_hosts_grab'
    } else if (target.closest('.learn')) {
        loc = 'In this FREE webinar, you’ll learn Register  - webinar page'
        name = 'exp_regist_pag_butt_freeweb_grab'
    } else if (target.closest('.elementor-element-72e0f20')) {
        loc = 'Learn About The Program That Brought 20,000+ Students Success Register  - webinar page'
        name = 'exp_regist_pag_butt_learnprog_grab'
    } else if (target.closest('.elementor-element-ab828a0')) {
        loc = 'Frequently Asked Questions Register  - webinar page'
        name = 'exp_regist_pag_butt_question_grab'
    } else if (target.closest('.elementor-element-89f4b88')) {
        loc = 'Your Future Is A Big Deal Register  - webinar page'
        name = 'exp_regist_pag_butt_bigdeal_grab'
    } else if (target.closest('.crs-sticky')) {
        loc = 'Register  - webinar page Sticky button'
        name = 'exp_regist_pag_butt_stikybutt_grab'
    }

    if ($el('#js-reg-btn')) {
        $el('#js-reg-btn').click()
    }
    pushDataLayer(name, 'Grab Your FREE Seat Now!', 'Button', loc)
}

function pushDataLayer(event_name, event_desc, event_type, event_loc) { // Send a Google Analytics event
    window.dataLayer = window.dataLayer || []

    const obj = {
        'event': 'event-to-ga4',
        event_name,
        event_desc,
        event_type,
        event_loc
    }

    dataLayer.push(obj)
    console.log(obj)
}

const visibilityMap = new Map()

let visibilityTimer

function handleVisibility(className) {
  const targetElements = document.querySelectorAll(className)

  visibilityTimer = setTimeout(() => {
    targetElements.forEach((targetElement, index) => {
      const rect = targetElement.getBoundingClientRect()

      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight

      if (isVisible && !visibilityMap.has(targetElement)) {
        visibilityMap.set(targetElement, Date.now())
      } else if (!isVisible && visibilityMap.has(targetElement)) {
        const startTime = visibilityMap.get(targetElement)
        const focusTimeMillis = Date.now() - startTime;
        const focusTimeSeconds = focusTimeMillis / 1000; 

        if (targetElement.className.includes('block')) {
            pushDataLayer('exp_regist_pag_vis_first_focus', focusTimeMillis, 'Visibility', 'First screen Register  - webinar page');
        }
        if (targetElement.closest('.host')) {
            pushDataLayer('exp_regist_pag_vis_hosts_focus', focusTimeMillis, 'Visibility', 'Your hosts Register  - webinar page');
        }
        if (targetElement.closest('.learn') && targetElement.tagName.includes('UL')) {
            pushDataLayer('exp_regist_pag_vis_freeweb_focus', focusTimeMillis, 'Visibility', 'In this FREE webinar, you’ll learn Register  - webinar page');
        }
        if (targetElement.className.includes('gift')) {
            pushDataLayer('exp_regist_pag_vis_exclusbon_focus', focusTimeMillis, 'Visibility', 'In this FREE webinar, you’ll learn. EXCLUSIVE BONUS! Register  - webinar page')
        }
        if (targetElement.className.includes('limited')){
            pushDataLayer('exp_regist_pag_vis_spaclimit_focus', focusTimeMillis, 'Visibility', '"Who Should Attend? Spaces are limited and filling up fast Register  - webinar page"')
        }
        if (targetElement.className.includes('elementor-element-d8f28c4')) {
            pushDataLayer('exp_regist_pag_vis_underform_focus', focusTimeMillis, 'Visibility', 'Under Form Join Our Online College Admission Webinar- FREE' )
        }
        if (targetElement.className.includes('elementor-element-f097975')) {
            pushDataLayer('exp_regist_pag_vis_learnprog_focus', focusTimeMillis, 'Visibility', 'Learn About The Program That Brought 20,000+ Students Success Register  - webinar page' )
        }
        if (targetElement.closest('.accordion')) {
            pushDataLayer('exp_regist_pag_vis_question_focus', focusTimeMillis, 'Visibility', 'Frequently Asked Questions Register  - webinar page' )
        }

        visibilityMap.delete(targetElement)
      }
    })
  }, 500)
}

let startTime = 0;

const btnHtml = `<button type="button" class="btn-yellow" onclick="getLocName(event); setInterval(()=>{startTime += 1}, 100)">Grab Your FREE Seat Now!</button>`

const html = `
<div class="crs-sticky">
    ${btnHtml}
</div>
<section class="offer">
    <div class="crs-container">
        <a href="https://www.trustpilot.com/review/grantme.ca?utm_medium=trustbox&utm_source=MicroCombo" class="trustpilot d-flex items-center">
            <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B"/>
                <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white"/>
                <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B"/>
                <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B"/>
                <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white"/>
                <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B"/>
                <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B"/>
                <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white"/>
                <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B"/>
                <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B"/>
                <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white"/>
                <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B"/>
                <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B"/>
                <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white"/>
            </svg>
            <svg width="106" height="21" viewBox="0 0 106 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.064 7.11H4.816V16H3.465V7.11H0.21V5.969H8.064V7.11ZM8.89656 10.33C9.12056 9.84467 9.3959 9.46667 9.72256 9.196C10.0492 8.92067 10.4482 8.783 10.9196 8.783C11.0689 8.783 11.2112 8.79933 11.3466 8.832C11.4866 8.86467 11.6102 8.916 11.7176 8.986L11.6266 9.917C11.5986 10.0337 11.5286 10.092 11.4166 10.092C11.3512 10.092 11.2556 10.078 11.1296 10.05C11.0036 10.022 10.8612 10.008 10.7026 10.008C10.4786 10.008 10.2779 10.0407 10.1006 10.106C9.9279 10.1713 9.77156 10.2693 9.63156 10.4C9.49623 10.526 9.37256 10.6847 9.26056 10.876C9.15323 11.0627 9.05523 11.2773 8.96656 11.52V16H7.71356V8.909H8.42756C8.5629 8.909 8.65623 8.93467 8.70756 8.986C8.7589 9.03733 8.7939 9.126 8.81256 9.252L8.89656 10.33ZM18.6442 8.909V16H17.9022C17.7248 16 17.6128 15.9137 17.5662 15.741L17.4682 14.978C17.1602 15.3187 16.8148 15.594 16.4322 15.804C16.0495 16.0093 15.6108 16.112 15.1162 16.112C14.7288 16.112 14.3858 16.049 14.0872 15.923C13.7932 15.7923 13.5458 15.6103 13.3452 15.377C13.1445 15.1437 12.9928 14.8613 12.8902 14.53C12.7922 14.1987 12.7432 13.8323 12.7432 13.431V8.909H13.9892V13.431C13.9892 13.9677 14.1105 14.383 14.3532 14.677C14.6005 14.971 14.9762 15.118 15.4802 15.118C15.8488 15.118 16.1918 15.0317 16.5092 14.859C16.8312 14.6817 17.1275 14.439 17.3982 14.131V8.909H18.6442ZM24.7498 10.078C24.6938 10.1807 24.6075 10.232 24.4908 10.232C24.4208 10.232 24.3415 10.2063 24.2528 10.155C24.1641 10.1037 24.0545 10.0477 23.9238 9.987C23.7978 9.92167 23.6461 9.86333 23.4688 9.812C23.2915 9.756 23.0815 9.728 22.8388 9.728C22.6288 9.728 22.4398 9.756 22.2718 9.812C22.1038 9.86333 21.9591 9.93567 21.8378 10.029C21.7211 10.1223 21.6301 10.232 21.5648 10.358C21.5041 10.4793 21.4738 10.6123 21.4738 10.757C21.4738 10.939 21.5251 11.0907 21.6278 11.212C21.7351 11.3333 21.8751 11.4383 22.0478 11.527C22.2205 11.6157 22.4165 11.695 22.6358 11.765C22.8551 11.8303 23.0791 11.9027 23.3078 11.982C23.5411 12.0567 23.7675 12.1407 23.9868 12.234C24.2061 12.3273 24.4021 12.444 24.5748 12.584C24.7475 12.724 24.8851 12.8967 24.9878 13.102C25.0951 13.3027 25.1488 13.5453 25.1488 13.83C25.1488 14.1567 25.0905 14.46 24.9738 14.74C24.8571 15.0153 24.6845 15.2557 24.4558 15.461C24.2271 15.6617 23.9471 15.8203 23.6158 15.937C23.2845 16.0537 22.9018 16.112 22.4678 16.112C21.9731 16.112 21.5251 16.0327 21.1238 15.874C20.7225 15.7107 20.3818 15.503 20.1018 15.251L20.3958 14.775C20.4331 14.7143 20.4775 14.6677 20.5288 14.635C20.5801 14.6023 20.6455 14.586 20.7248 14.586C20.8088 14.586 20.8975 14.6187 20.9908 14.684C21.0841 14.7493 21.1961 14.8217 21.3268 14.901C21.4621 14.9803 21.6255 15.0527 21.8168 15.118C22.0081 15.1833 22.2461 15.216 22.5308 15.216C22.7735 15.216 22.9858 15.1857 23.1678 15.125C23.3498 15.0597 23.5015 14.9733 23.6228 14.866C23.7441 14.7587 23.8328 14.635 23.8888 14.495C23.9495 14.355 23.9798 14.2057 23.9798 14.047C23.9798 13.851 23.9261 13.69 23.8188 13.564C23.7161 13.4333 23.5785 13.3237 23.4058 13.235C23.2331 13.1417 23.0348 13.0623 22.8108 12.997C22.5915 12.927 22.3651 12.8547 22.1318 12.78C21.9031 12.7053 21.6768 12.6213 21.4528 12.528C21.2335 12.43 21.0375 12.3087 20.8648 12.164C20.6921 12.0193 20.5521 11.842 20.4448 11.632C20.3421 11.4173 20.2908 11.1583 20.2908 10.855C20.2908 10.5843 20.3468 10.3253 20.4588 10.078C20.5708 9.826 20.7341 9.60667 20.9488 9.42C21.1635 9.22867 21.4271 9.077 21.7398 8.965C22.0525 8.853 22.4095 8.797 22.8108 8.797C23.2775 8.797 23.6951 8.87167 24.0638 9.021C24.4371 9.16567 24.7591 9.36633 25.0298 9.623L24.7498 10.078ZM28.8535 16.112C28.2935 16.112 27.8618 15.9557 27.5585 15.643C27.2598 15.3303 27.1105 14.88 27.1105 14.292V9.952H26.2565C26.1818 9.952 26.1188 9.931 26.0675 9.889C26.0161 9.84233 25.9905 9.77233 25.9905 9.679V9.182L27.1525 9.035L27.4395 6.844C27.4535 6.774 27.4838 6.718 27.5305 6.676C27.5818 6.62933 27.6471 6.606 27.7265 6.606H28.3565V9.049H30.4075V9.952H28.3565V14.208C28.3565 14.5067 28.4288 14.7283 28.5735 14.873C28.7181 15.0177 28.9048 15.09 29.1335 15.09C29.2641 15.09 29.3761 15.0737 29.4695 15.041C29.5675 15.0037 29.6515 14.964 29.7215 14.922C29.7915 14.88 29.8498 14.8427 29.8965 14.81C29.9478 14.7727 29.9921 14.754 30.0295 14.754C30.0948 14.754 30.1531 14.7937 30.2045 14.873L30.5685 15.468C30.3538 15.6687 30.0948 15.8273 29.7915 15.944C29.4881 16.056 29.1755 16.112 28.8535 16.112ZM37.119 7.537C37.077 7.607 37.0304 7.66067 36.979 7.698C36.9324 7.73067 36.874 7.747 36.804 7.747C36.7247 7.747 36.6314 7.70733 36.524 7.628C36.4167 7.54867 36.2814 7.46233 36.118 7.369C35.9594 7.271 35.7657 7.18233 35.537 7.103C35.313 7.02367 35.04 6.984 34.718 6.984C34.4147 6.984 34.1464 7.026 33.913 7.11C33.6844 7.18933 33.4907 7.299 33.332 7.439C33.178 7.579 33.0614 7.74467 32.982 7.936C32.9027 8.12267 32.863 8.32567 32.863 8.545C32.863 8.825 32.9307 9.05833 33.066 9.245C33.206 9.427 33.388 9.58333 33.612 9.714C33.8407 9.84467 34.0974 9.959 34.382 10.057C34.6714 10.1503 34.9654 10.2483 35.264 10.351C35.5674 10.4537 35.8614 10.5703 36.146 10.701C36.4354 10.827 36.692 10.988 36.916 11.184C37.1447 11.38 37.3267 11.6203 37.462 11.905C37.602 12.1897 37.672 12.5397 37.672 12.955C37.672 13.3937 37.5974 13.8067 37.448 14.194C37.2987 14.5767 37.0794 14.9103 36.79 15.195C36.5054 15.4797 36.153 15.7037 35.733 15.867C35.3177 16.0303 34.844 16.112 34.312 16.112C33.6587 16.112 33.066 15.9953 32.534 15.762C32.002 15.524 31.547 15.2043 31.169 14.803L31.561 14.159C31.5984 14.1077 31.6427 14.0657 31.694 14.033C31.75 13.9957 31.8107 13.977 31.876 13.977C31.9367 13.977 32.0044 14.0027 32.079 14.054C32.1584 14.1007 32.247 14.1613 32.345 14.236C32.443 14.3107 32.555 14.3923 32.681 14.481C32.807 14.5697 32.9494 14.6513 33.108 14.726C33.2714 14.8007 33.4557 14.8637 33.661 14.915C33.8664 14.9617 34.0974 14.985 34.354 14.985C34.676 14.985 34.963 14.9407 35.215 14.852C35.467 14.7633 35.6794 14.6397 35.852 14.481C36.0294 14.3177 36.1647 14.124 36.258 13.9C36.3514 13.676 36.398 13.4263 36.398 13.151C36.398 12.8477 36.328 12.6003 36.188 12.409C36.0527 12.213 35.873 12.0497 35.649 11.919C35.425 11.7883 35.1684 11.6787 34.879 11.59C34.5897 11.4967 34.2957 11.4033 33.997 11.31C33.6984 11.212 33.4044 11.1 33.115 10.974C32.8257 10.848 32.569 10.6847 32.345 10.484C32.121 10.2833 31.939 10.0337 31.799 9.735C31.6637 9.43167 31.596 9.05833 31.596 8.615C31.596 8.26033 31.6637 7.91733 31.799 7.586C31.939 7.25467 32.1397 6.96067 32.401 6.704C32.667 6.44733 32.9914 6.242 33.374 6.088C33.7614 5.934 34.2047 5.857 34.704 5.857C35.264 5.857 35.7727 5.94567 36.23 6.123C36.692 6.30033 37.098 6.557 37.448 6.893L37.119 7.537ZM44.1896 10.169C44.1522 10.2203 44.1149 10.26 44.0776 10.288C44.0402 10.316 43.9889 10.33 43.9236 10.33C43.8536 10.33 43.7766 10.302 43.6926 10.246C43.6086 10.1853 43.5036 10.12 43.3776 10.05C43.2562 9.98 43.1046 9.917 42.9226 9.861C42.7452 9.80033 42.5259 9.77 42.2646 9.77C41.9146 9.77 41.6066 9.833 41.3406 9.959C41.0746 10.0803 40.8506 10.2577 40.6686 10.491C40.4912 10.7243 40.3559 11.0067 40.2626 11.338C40.1739 11.6693 40.1296 12.0403 40.1296 12.451C40.1296 12.8803 40.1786 13.263 40.2766 13.599C40.3746 13.9303 40.5122 14.2103 40.6896 14.439C40.8716 14.663 41.0886 14.8357 41.3406 14.957C41.5972 15.0737 41.8842 15.132 42.2016 15.132C42.5049 15.132 42.7546 15.097 42.9506 15.027C43.1466 14.9523 43.3076 14.8707 43.4336 14.782C43.5642 14.6933 43.6716 14.614 43.7556 14.544C43.8442 14.4693 43.9306 14.432 44.0146 14.432C44.1172 14.432 44.1966 14.4717 44.2526 14.551L44.6026 15.006C44.4486 15.1973 44.2736 15.3607 44.0776 15.496C43.8816 15.6313 43.6692 15.7457 43.4406 15.839C43.2166 15.9277 42.9809 15.993 42.7336 16.035C42.4862 16.077 42.2342 16.098 41.9776 16.098C41.5342 16.098 41.1212 16.0163 40.7386 15.853C40.3606 15.6897 40.0316 15.454 39.7516 15.146C39.4716 14.8333 39.2522 14.4507 39.0936 13.998C38.9349 13.5453 38.8556 13.0297 38.8556 12.451C38.8556 11.9237 38.9279 11.436 39.0726 10.988C39.2219 10.54 39.4366 10.155 39.7166 9.833C40.0012 9.50633 40.3489 9.252 40.7596 9.07C41.1749 8.888 41.6509 8.797 42.1876 8.797C42.6869 8.797 43.1256 8.87867 43.5036 9.042C43.8862 9.20067 44.2246 9.427 44.5186 9.721L44.1896 10.169ZM48.8061 8.797C49.3241 8.797 49.7907 8.88333 50.2061 9.056C50.6214 9.22867 50.9761 9.47367 51.2701 9.791C51.5641 10.1083 51.7881 10.4933 51.9421 10.946C52.1007 11.394 52.1801 11.8957 52.1801 12.451C52.1801 13.011 52.1007 13.515 51.9421 13.963C51.7881 14.411 51.5641 14.7937 51.2701 15.111C50.9761 15.4283 50.6214 15.6733 50.2061 15.846C49.7907 16.014 49.3241 16.098 48.8061 16.098C48.2834 16.098 47.8121 16.014 47.3921 15.846C46.9767 15.6733 46.6221 15.4283 46.3281 15.111C46.0341 14.7937 45.8077 14.411 45.6491 13.963C45.4951 13.515 45.4181 13.011 45.4181 12.451C45.4181 11.8957 45.4951 11.394 45.6491 10.946C45.8077 10.4933 46.0341 10.1083 46.3281 9.791C46.6221 9.47367 46.9767 9.22867 47.3921 9.056C47.8121 8.88333 48.2834 8.797 48.8061 8.797ZM48.8061 15.125C49.5061 15.125 50.0287 14.8917 50.3741 14.425C50.7194 13.9537 50.8921 13.298 50.8921 12.458C50.8921 11.6133 50.7194 10.9553 50.3741 10.484C50.0287 10.0127 49.5061 9.777 48.8061 9.777C48.4514 9.777 48.1411 9.83767 47.8751 9.959C47.6137 10.0803 47.3944 10.2553 47.2171 10.484C47.0444 10.7127 46.9137 10.995 46.8251 11.331C46.7411 11.6623 46.6991 12.038 46.6991 12.458C46.6991 13.298 46.8717 13.9537 47.2171 14.425C47.5671 14.8917 48.0967 15.125 48.8061 15.125ZM54.9434 10.33C55.1674 9.84467 55.4428 9.46667 55.7694 9.196C56.0961 8.92067 56.4951 8.783 56.9664 8.783C57.1158 8.783 57.2581 8.79933 57.3934 8.832C57.5334 8.86467 57.6571 8.916 57.7644 8.986L57.6734 9.917C57.6454 10.0337 57.5754 10.092 57.4634 10.092C57.3981 10.092 57.3024 10.078 57.1764 10.05C57.0504 10.022 56.9081 10.008 56.7494 10.008C56.5254 10.008 56.3248 10.0407 56.1474 10.106C55.9748 10.1713 55.8184 10.2693 55.6784 10.4C55.5431 10.526 55.4194 10.6847 55.3074 10.876C55.2001 11.0627 55.1021 11.2773 55.0134 11.52V16H53.7604V8.909H54.4744C54.6098 8.909 54.7031 8.93467 54.7544 8.986C54.8058 9.03733 54.8408 9.126 54.8594 9.252L54.9434 10.33ZM63.3189 11.681C63.3189 11.3917 63.2769 11.128 63.1929 10.89C63.1136 10.6473 62.9946 10.4397 62.8359 10.267C62.6819 10.0897 62.4929 9.95433 62.2689 9.861C62.0449 9.763 61.7906 9.714 61.5059 9.714C60.9086 9.714 60.4349 9.889 60.0849 10.239C59.7396 10.5843 59.5249 11.065 59.4409 11.681H63.3189ZM64.3269 15.006C64.1729 15.1927 63.9886 15.356 63.7739 15.496C63.5593 15.6313 63.3283 15.7433 63.0809 15.832C62.8383 15.9207 62.5863 15.986 62.3249 16.028C62.0636 16.0747 61.8046 16.098 61.5479 16.098C61.0579 16.098 60.6053 16.0163 60.1899 15.853C59.7793 15.685 59.4223 15.4423 59.1189 15.125C58.8203 14.803 58.5869 14.4063 58.4189 13.935C58.2509 13.4637 58.1669 12.9223 58.1669 12.311C58.1669 11.8163 58.2416 11.3543 58.3909 10.925C58.5449 10.4957 58.7643 10.1247 59.0489 9.812C59.3336 9.49467 59.6813 9.24733 60.0919 9.07C60.5026 8.888 60.9646 8.797 61.4779 8.797C61.9026 8.797 62.2946 8.86933 62.6539 9.014C63.0179 9.154 63.3306 9.35933 63.5919 9.63C63.8579 9.896 64.0656 10.2273 64.2149 10.624C64.3643 11.016 64.4389 11.464 64.4389 11.968C64.4389 12.164 64.4179 12.2947 64.3759 12.36C64.3339 12.4253 64.2546 12.458 64.1379 12.458H59.3989C59.4129 12.906 59.4736 13.2957 59.5809 13.627C59.6929 13.9583 59.8469 14.236 60.0429 14.46C60.2389 14.6793 60.4723 14.845 60.7429 14.957C61.0136 15.0643 61.3169 15.118 61.6529 15.118C61.9656 15.118 62.2339 15.083 62.4579 15.013C62.6866 14.9383 62.8826 14.859 63.0459 14.775C63.2093 14.691 63.3446 14.614 63.4519 14.544C63.5639 14.4693 63.6596 14.432 63.7389 14.432C63.8416 14.432 63.9209 14.4717 63.9769 14.551L64.3269 15.006Z" fill="white"/>
                <path d="M84.002 8.99433L72.6744 16.8725L74.327 12.0035L70 8.99433H75.3484L77.001 4.125L78.6536 8.99433H84.002ZM77.0014 13.8637L80.0951 13.2407L81.3277 16.8725L77.0014 13.8637Z" fill="#2DAF6B"/>
                <path d="M90.8375 12.185V8.874C90.8375 8.56133 90.8585 8.216 90.9005 7.838L87.7575 12.185H90.8375ZM93.6165 12.185V13.186C93.6165 13.2793 93.5862 13.361 93.5255 13.431C93.4648 13.4963 93.3785 13.529 93.2665 13.529H92.3425V16H90.8375V13.529H86.5675C86.4508 13.529 86.3482 13.494 86.2595 13.424C86.1708 13.3493 86.1148 13.2583 86.0915 13.151L85.9095 12.276L90.7045 5.871H92.3425V12.185H93.6165ZM94.5766 15.048C94.5766 14.9033 94.6023 14.7657 94.6536 14.635C94.7096 14.5043 94.7843 14.3923 94.8776 14.299C94.9709 14.2057 95.0829 14.131 95.2136 14.075C95.3443 14.019 95.4843 13.991 95.6336 13.991C95.7829 13.991 95.9206 14.019 96.0466 14.075C96.1773 14.131 96.2893 14.2057 96.3826 14.299C96.4806 14.3923 96.5576 14.5043 96.6136 14.635C96.6696 14.7657 96.6976 14.9033 96.6976 15.048C96.6976 15.1973 96.6696 15.3373 96.6136 15.468C96.5576 15.594 96.4806 15.7037 96.3826 15.797C96.2893 15.8903 96.1773 15.9627 96.0466 16.014C95.9206 16.07 95.7829 16.098 95.6336 16.098C95.4843 16.098 95.3443 16.07 95.2136 16.014C95.0829 15.9627 94.9709 15.8903 94.8776 15.797C94.7843 15.7037 94.7096 15.594 94.6536 15.468C94.6023 15.3373 94.5766 15.1973 94.5766 15.048ZM101.357 14.761C101.642 14.761 101.891 14.7213 102.106 14.642C102.321 14.558 102.5 14.4437 102.645 14.299C102.794 14.1543 102.906 13.9817 102.981 13.781C103.056 13.5803 103.093 13.3633 103.093 13.13C103.093 12.5747 102.939 12.1547 102.631 11.87C102.323 11.5853 101.898 11.443 101.357 11.443C100.816 11.443 100.391 11.5853 100.083 11.87C99.7749 12.1547 99.6209 12.5747 99.6209 13.13C99.6209 13.3633 99.6582 13.5803 99.7329 13.781C99.8075 13.9817 99.9172 14.1543 100.062 14.299C100.211 14.4437 100.393 14.558 100.608 14.642C100.823 14.7213 101.072 14.761 101.357 14.761ZM101.357 7.068C101.1 7.068 100.879 7.10767 100.692 7.187C100.505 7.26633 100.349 7.37367 100.223 7.509C100.102 7.63967 100.011 7.79133 99.9499 7.964C99.8939 8.13667 99.8659 8.31867 99.8659 8.51C99.8659 8.71067 99.8892 8.90667 99.9359 9.098C99.9872 9.28467 100.071 9.45267 100.188 9.602C100.305 9.74667 100.459 9.86333 100.65 9.952C100.841 10.0407 101.077 10.085 101.357 10.085C101.637 10.085 101.873 10.0407 102.064 9.952C102.255 9.86333 102.409 9.74667 102.526 9.602C102.643 9.45267 102.724 9.28467 102.771 9.098C102.822 8.90667 102.848 8.71067 102.848 8.51C102.848 8.31867 102.818 8.13667 102.757 7.964C102.696 7.79133 102.605 7.63967 102.484 7.509C102.363 7.37367 102.209 7.26633 102.022 7.187C101.835 7.10767 101.614 7.068 101.357 7.068ZM103.065 10.722C103.681 10.9227 104.136 11.2307 104.43 11.646C104.724 12.0567 104.871 12.5607 104.871 13.158C104.871 13.606 104.785 14.012 104.612 14.376C104.444 14.74 104.206 15.0503 103.898 15.307C103.59 15.5637 103.219 15.762 102.785 15.902C102.356 16.042 101.88 16.112 101.357 16.112C100.834 16.112 100.356 16.042 99.9219 15.902C99.4925 15.762 99.1239 15.5637 98.8159 15.307C98.5079 15.0503 98.2675 14.74 98.0949 14.376C97.9269 14.012 97.8429 13.606 97.8429 13.158C97.8429 12.5607 97.9899 12.0567 98.2839 11.646C98.5779 11.2307 99.0329 10.9227 99.6489 10.722C99.1589 10.5167 98.7902 10.225 98.5429 9.847C98.3002 9.469 98.1789 9.014 98.1789 8.482C98.1789 8.09933 98.2559 7.74233 98.4099 7.411C98.5685 7.07967 98.7879 6.79267 99.0679 6.55C99.3479 6.30267 99.6815 6.11133 100.069 5.976C100.461 5.836 100.89 5.766 101.357 5.766C101.824 5.766 102.251 5.836 102.638 5.976C103.03 6.11133 103.366 6.30267 103.646 6.55C103.926 6.79267 104.143 7.07967 104.297 7.411C104.456 7.74233 104.535 8.09933 104.535 8.482C104.535 9.014 104.411 9.469 104.164 9.847C103.921 10.225 103.555 10.5167 103.065 10.722Z" fill="#2DAF6B"/>
            </svg>
            <span>(1,325 reviews)</p>
        </a>
        <h1>Unlock the Secrets to a Debt-Free College Journey with Our Exclusive Webinar!</h1>
        <p>Discover the proven strategies how you can help your child of <span class="crs-underline">9-12 grades</span> to get into top choice school and graduate with money in the bank 
            - absolutely FREE!</p>
        <div class="block">
            <div class="d-flex justify-between block_head">
                <div class="d-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 6.4775 17.5225 2 12 2ZM12.625 16.325V17C12.625 17.345 12.345 17.625 12 17.625C11.655 17.625 11.375 17.345 11.375 17V16.3225C10.735 16.2175 10.1488 15.9563 9.71 15.5675C9.45125 15.3375 9.42875 14.9437 9.6575 14.685C9.88625 14.4262 10.2812 14.405 10.54 14.6325C10.8925 14.945 11.425 15.125 12 15.125C13.0162 15.125 13.875 14.5525 13.875 13.875C13.875 13.1975 13.0162 12.625 12 12.625C10.2775 12.625 8.875 11.5037 8.875 10.125C8.875 8.9175 9.95 7.9075 11.375 7.675V7C11.375 6.655 11.655 6.375 12 6.375C12.345 6.375 12.625 6.655 12.625 7V7.6775C13.265 7.7825 13.8512 8.04375 14.29 8.4325C14.5475 8.6625 14.5725 9.0575 14.3425 9.315C14.1125 9.5725 13.7188 9.595 13.46 9.3675C13.1075 9.055 12.575 8.875 12 8.875C10.9838 8.875 10.125 9.4475 10.125 10.125C10.125 10.8025 10.9838 11.375 12 11.375C13.7238 11.375 15.125 12.4963 15.125 13.875C15.125 15.0825 14.05 16.0925 12.625 16.325Z" fill="#EBBD45"/>
                    </svg>
                    <p>Free</p>
                </div>
                <div class="d-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6.48578 2 2 6.48578 2 12C2 17.5142 6.48578 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48578 17.5142 2 12 2ZM16.7559 17.1724C16.5934 17.3349 16.38 17.4167 16.1667 17.4167C15.9534 17.4167 15.7399 17.3349 15.5776 17.1724L11.4109 13.0059C11.2542 12.8501 11.1667 12.6383 11.1667 12.4167V7C11.1667 6.53918 11.5399 6.16672 12 6.16672C12.4601 6.16672 12.8333 6.53918 12.8333 7V12.0717L16.7559 15.9941C17.0816 16.3201 17.0816 16.8466 16.7559 17.1724Z" fill="#EBBD45"/>
                    </svg>
                    <p>60 minutes+Q&A</p>
                </div>
                <div class="d-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13.875 4.5H2.58594C1.57031 4.5 0.75 5.35938 0.75 6.375V17.6641C0.75 18.6797 1.57031 19.5 2.58594 19.5H13.875C14.8906 19.5 15.75 18.6797 15.75 17.6641V6.375C15.75 5.35938 14.8906 4.5 13.875 4.5ZM21.2578 5.98438L17 8.95312V15.0859L21.2578 18.0547C22.0781 18.6016 23.25 18.0156 23.25 17.0391V7C23.25 6.02344 22.0781 5.4375 21.2578 5.98438Z" fill="#EBBD45"/>
                    </svg>
                    <p>Online</p>
                </div>
            </div>
            ${btnHtml}
            <a href="#learn" class="crs-underline btn-learn">What will I learn from the webinar?</a>
        </div>
        <div class="featured">
            <p>Featured on </p>
            <img src="${dir}featured-on.png" alt="image">
        </div>
    </div>
</section>
<section class="host">
    <div class="crs-container">
        <h2>Your hosts:</h2>
        <div>
            <div class="">
                <div class="img">
                    <img src="https://grantme.ca/wp-content/uploads/2023/08/Madison-Guy-Headshot.png" alt="">
                </div>
                <p class="name">Madison</p>
                <p class="info">GrantMe Founder, Forbes 30 under 30</p>
                <p>Navigated her own uncertainties in higher education and financial stresses. Starting in a general arts program at UBC, she transitioned to business school after thorough research. Her journey inspired the creation of GrantMe, a platform dedicated to helping students find their educational paths, secure admissions, and win financial aid with ease and confidence.</p>
            </div>
        </div>
        <div>
            <div class="">
                <div class="img">
                    <img src="https://grantme.ca/wp-content/uploads/2023/08/Jason-Yee-Headshot.png" alt="">
                </div>
                <p class="name">Jason</p>
                <p class="info">GrantMe CEO</p>
                <p>Jason navigated through his own uncertainties in high school, eventually landing at UBC where he studied a mix of kinesiology, business, and psychology. Witnessing peers struggle to find their academic and career paths, he joined Madison at GrantMe, inspired by the platform's potential to guide students towards clarity, opportunity, and financial support in their educational journeys.</p>    
            </div>
        </div>
        ${btnHtml}
    </div>
</section>
<section class="learn" id="learn">
    <div class="crs-container">
        <h2>In this FREE webinar,<br>
            you’ll learn:</h2>
        <ul>
            <li>Why choosing the right school is crucial for a secure future</li>
            <li>The 3 key elements needed for a successful admission</li>
            <li>How to avoid student stress and anxiety</li>
            <li>Tips on selecting your top choice schools and assessing your admission chances</li>
            <li>Crafting an application that stands out and truly represents you</li>
        </ul>
        <div class="gift">
            <div class="d-flex">
                <img src="${dir}gift.svg" alt="gift icon">
                <div>
                    <h3>EXCLUSIVE BONUS!</h3>
                    <p>Stay till the end and receive a step-by-step checklist to navigate your college admission and scholarship journey, sent directly to your inbox!</p>
                </div>
            </div>
        </div>
        ${btnHtml}
    </div>
</section>
<section class="attend">
    <div class="crs-container">
        <div class="attend_info">
            <h2>Who Should Attend?</h2>
            <p>This masterclass is tailored for Canadian citizens, permanent residents of Canada, or dual US and Canadian citizens who are eager to carve a unique educational path without drowning in student debt. </p>
            <p>If you're a student or parent of student in <span class="crs-underline">grades 9-12</span> looking for a clear, efficient, and effective approach to college admissions and scholarships, you’re in the right place!</p>
            <div class="limited">
                <h3>Spaces are limited and filling up fast</h3>
                <p>Grab this golden opportunity to transform your educational journey. </p>
                <p>Fill in the form below to secure your spot!</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="67" viewBox="0 0 58 67" fill="none">
                    <path d="M1.17803 14.1907C0.631408 14.2695 0.252199 14.7766 0.331048 15.3232C0.409898 15.8699 0.916946 16.2491 1.46357 16.1702L1.17803 14.1907ZM37.1147 21.1175L36.5323 21.9305L37.1147 21.1175ZM43.3184 59.4792C43.443 60.0172 43.9802 60.3524 44.5182 60.2278L53.2863 58.1977C53.8243 58.0731 54.1595 57.5359 54.0349 56.9979C53.9103 56.4598 53.3732 56.1246 52.8351 56.2492L45.0413 58.0538L43.2367 50.26C43.1121 49.7219 42.575 49.3868 42.0369 49.5113C41.4989 49.6359 41.1637 50.1731 41.2883 50.7111L43.3184 59.4792ZM46.4782 57.368C46.7206 56.8718 46.5149 56.273 46.0186 56.0306C45.5224 55.7882 44.9236 55.9939 44.6812 56.4902L46.4782 57.368ZM46.4682 51.696C46.3251 52.2294 46.6414 52.7779 47.1748 52.9211C47.7082 53.0643 48.2567 52.7479 48.3999 52.2145L46.4682 51.696ZM49.3407 46.8081C49.387 46.2577 48.9784 45.7741 48.428 45.7278C47.8777 45.6815 47.3941 46.0901 47.3478 46.6405L49.3407 46.8081ZM47.3338 41.5032C47.3829 42.0533 47.8687 42.4594 48.4188 42.4102C48.9689 42.3611 49.375 41.8753 49.3258 41.3252L47.3338 41.5032ZM48.3632 35.9252C48.2188 35.3921 47.6695 35.0771 47.1365 35.2216C46.6034 35.3661 46.2884 35.9153 46.4329 36.4484L48.3632 35.9252ZM44.6475 31.6443C44.8872 32.1419 45.4848 32.351 45.9824 32.1113C46.48 31.8717 46.6891 31.2741 46.4495 30.7765L44.6475 31.6443ZM43.5938 26.0726C43.2621 25.6309 42.6353 25.5418 42.1936 25.8735C41.752 26.2051 41.6629 26.832 41.9945 27.2736L43.5938 26.0726ZM38.5322 23.5227C38.9462 23.8882 39.5781 23.849 39.9437 23.435C40.3093 23.0211 40.2701 22.3891 39.8561 22.0235L38.5322 23.5227ZM35.0357 18.5448C34.5636 18.2582 33.9486 18.4085 33.6619 18.8806C33.3753 19.3527 33.5257 19.9678 33.9977 20.2544L35.0357 18.5448ZM28.5863 17.5581C29.1001 17.7607 29.6808 17.5084 29.8834 16.9947C30.086 16.4809 29.8338 15.9001 29.32 15.6975L28.5863 17.5581ZM23.192 13.8872C22.6508 13.7773 22.1229 14.1269 22.0129 14.6681C21.9029 15.2093 22.2525 15.7372 22.7938 15.8472L23.192 13.8872ZM16.7715 15.11C17.3231 15.1373 17.7924 14.7122 17.8196 14.1606C17.8469 13.609 17.4218 13.1397 16.8702 13.1125L16.7715 15.11ZM10.54 13.1685C9.98873 13.2015 9.56851 13.6751 9.60145 14.2264C9.63438 14.7777 10.108 15.1979 10.6593 15.165L10.54 13.1685ZM4.53046 15.754C5.07843 15.6851 5.46682 15.1851 5.39794 14.6371C5.32907 14.0891 4.82901 13.7007 4.28104 13.7696L4.53046 15.754ZM45.141 59.783C45.6277 59.0031 46.0735 58.1967 46.4782 57.368L44.6812 56.4902C44.306 57.2583 43.8935 58.0043 43.4443 58.7242L45.141 59.783ZM48.3999 52.2145C48.8722 50.4551 49.1865 48.6423 49.3407 46.8081L47.3478 46.6405C47.2033 48.3587 46.9091 50.0539 46.4682 51.696L48.3999 52.2145ZM49.3258 41.3252C49.1634 39.5075 48.8435 37.6974 48.3632 35.9252L46.4329 36.4484C46.8819 38.1053 47.1816 39.7998 47.3338 41.5032L49.3258 41.3252ZM46.4495 30.7765C45.6578 29.1327 44.7069 27.5548 43.5938 26.0726L41.9945 27.2736C43.0267 28.648 43.9105 30.1138 44.6475 31.6443L46.4495 30.7765ZM39.8561 22.0235C39.1735 21.4208 38.4539 20.8467 37.697 20.3045L36.5323 21.9305C37.2337 22.4329 37.9003 22.9646 38.5322 23.5227L39.8561 22.0235ZM37.697 20.3045C36.8101 19.6692 35.9232 19.0837 35.0357 18.5448L33.9977 20.2544C34.8409 20.7663 35.6856 21.3239 36.5323 21.9305L37.697 20.3045ZM29.32 15.6975C27.2845 14.8948 25.2441 14.3042 23.192 13.8872L22.7938 15.8472C24.7371 16.2421 26.6648 16.8004 28.5863 17.5581L29.32 15.6975ZM16.8702 13.1125C14.7786 13.0091 12.6706 13.0413 10.54 13.1685L10.6593 15.165C12.7321 15.0412 14.7659 15.0109 16.7715 15.11L16.8702 13.1125ZM4.28104 13.7696C3.25423 13.8987 2.22002 14.0404 1.17803 14.1907L1.46357 16.1702C2.4965 16.0212 3.51834 15.8812 4.53046 15.754L4.28104 13.7696Z" fill="url(#paint0_linear_1533_472)"/>
                    <path d="M43.3184 59.4821C43.443 60.0201 43.9802 60.3553 44.5182 60.2308L53.2863 58.2006C53.8243 58.076 54.1595 57.5388 54.0349 57.0008C53.9103 56.4627 53.3732 56.1275 52.8351 56.2521L45.0413 58.0567L43.2367 50.2629C43.1121 49.7249 42.575 49.3897 42.0369 49.5143C41.4989 49.6388 41.1637 50.176 41.2883 50.7141L43.3184 59.4821ZM49.405 45.8829C49.4351 45.3314 49.0124 44.86 48.4609 44.83C47.9094 44.7999 47.438 45.2226 47.408 45.7741L49.405 45.8829ZM47.408 45.7741C47.1548 50.4225 45.8109 54.9343 43.4443 58.7271L45.1411 59.7859C47.7022 55.6814 49.1351 50.837 49.405 45.8829L47.408 45.7741Z" fill="#EBBD45"/>
                    <defs>
                    <linearGradient id="paint0_linear_1533_472" x1="48.5" y1="41" x2="22.5" y2="16.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#EBBD45"/>
                    <stop offset="1" stop-color="#EBBD45" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
        <div class="attend_form">
            <h2>Join Our Online College Admission Webinar- FREE</h2>
            <p>The webinar will be conducted by Jason Yee and Madison Guy.</p>
            <p>You'll learn about the program that has brought success to over 20,000 students.</p>
            <p>We’ll email and text you the link for the webinar and tips used by students to win over $5,000,000, find awards they're eligible for, and save 30+hours.</p>
            <div>
                <div class="relative">
                    <div class="absolute d-flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99999 1.66699C7.81666 1.66699 6.04166 3.44199 6.04166 5.62533C6.04166 7.76699 7.71666 9.50033 9.89999 9.57533C9.96666 9.56699 10.0333 9.56699 10.0833 9.57533C10.1 9.57533 10.1083 9.57533 10.125 9.57533C10.1333 9.57533 10.1333 9.57533 10.1417 9.57533C12.275 9.50033 13.95 7.76699 13.9583 5.62533C13.9583 3.44199 12.1833 1.66699 9.99999 1.66699Z" fill="#CCCCCC"/>
                            <path d="M14.2333 11.7914C11.9083 10.2414 8.11666 10.2414 5.775 11.7914C4.71666 12.4997 4.13333 13.4581 4.13333 14.4831C4.13333 15.5081 4.71666 16.4581 5.76666 17.1581C6.93333 17.9414 8.46666 18.3331 10 18.3331C11.5333 18.3331 13.0667 17.9414 14.2333 17.1581C15.2833 16.4497 15.8667 15.4997 15.8667 14.4664C15.8583 13.4414 15.2833 12.4914 14.2333 11.7914Z" fill="#CCCCCC"/>
                        </svg>
                        <p>*</p>
                    </div>
                    <input type="text" placeholder="Enter first name..." required name="first-name">
                    <p class="error-message">First Name cannot be empty</p>
                </div>
                <div class="relative">
                    <div class="absolute d-flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99999 1.66699C7.81666 1.66699 6.04166 3.44199 6.04166 5.62533C6.04166 7.76699 7.71666 9.50033 9.89999 9.57533C9.96666 9.56699 10.0333 9.56699 10.0833 9.57533C10.1 9.57533 10.1083 9.57533 10.125 9.57533C10.1333 9.57533 10.1333 9.57533 10.1417 9.57533C12.275 9.50033 13.95 7.76699 13.9583 5.62533C13.9583 3.44199 12.1833 1.66699 9.99999 1.66699Z" fill="#CCCCCC"/>
                            <path d="M14.2333 11.7914C11.9083 10.2414 8.11666 10.2414 5.775 11.7914C4.71666 12.4997 4.13333 13.4581 4.13333 14.4831C4.13333 15.5081 4.71666 16.4581 5.76666 17.1581C6.93333 17.9414 8.46666 18.3331 10 18.3331C11.5333 18.3331 13.0667 17.9414 14.2333 17.1581C15.2833 16.4497 15.8667 15.4997 15.8667 14.4664C15.8583 13.4414 15.2833 12.4914 14.2333 11.7914Z" fill="#CCCCCC"/>
                        </svg>
                        <p>*</p>
                    </div>
                    <input type="text" placeholder="Enter last name..." required name="last-name">
                    <p class="error-message">Last Name cannot be empty</p>
                </div>
                <div class="relative">
                    <div class="absolute d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M14.1667 2.91699H5.83332C3.33332 2.91699 1.66666 4.16699 1.66666 7.08366V12.917C1.66666 15.8337 3.33332 17.0837 5.83332 17.0837H14.1667C16.6667 17.0837 18.3333 15.8337 18.3333 12.917V7.08366C18.3333 4.16699 16.6667 2.91699 14.1667 2.91699ZM14.5583 7.99199L11.95 10.0753C11.4 10.517 10.7 10.7337 9.99999 10.7337C9.29999 10.7337 8.59166 10.517 8.04999 10.0753L5.44166 7.99199C5.17499 7.77533 5.13332 7.37533 5.34166 7.10866C5.55832 6.84199 5.94999 6.79199 6.21666 7.00866L8.82499 9.09199C9.45832 9.60033 10.5333 9.60033 11.1667 9.09199L13.775 7.00866C14.0417 6.79199 14.4417 6.83366 14.65 7.10866C14.8667 7.37533 14.825 7.77533 14.5583 7.99199Z" fill="#CCCCCC"/>
                        </svg>
                        <p>*</p>
                    </div>
                    <input type="text" placeholder="Enter email address..." required name="email">
                    <p class="error-message">Not a valid e-mail address</p>
                </div>
                <div class="relative">
                    <div class="flag-dropdown flx">
                        <span class="selected-flag">
                            <span class="fi fi-ca"></span>
                        </span>
                        <span class="arrow-drop"></span>
                        <ul class="country-list"></ul>
                    </div>
                    <input type="text" placeholder="+1" data-mask="+1 (000) 000 0000" value="+1" required name="phone">
                    <p class="error-message">Not a valid number phone</p>
                    <div class="absolute d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.5333 1.66699H6.46668C4.16668 1.66699 3.33334 2.50033 3.33334 4.84199V15.1587C3.33334 17.5003 4.16668 18.3337 6.46668 18.3337H13.525C15.8333 18.3337 16.6667 17.5003 16.6667 15.1587V4.84199C16.6667 2.50033 15.8333 1.66699 13.5333 1.66699ZM10 16.0837C9.20001 16.0837 8.54168 15.4253 8.54168 14.6253C8.54168 13.8253 9.20001 13.167 10 13.167C10.8 13.167 11.4583 13.8253 11.4583 14.6253C11.4583 15.4253 10.8 16.0837 10 16.0837ZM11.6667 5.20866H8.33334C7.99168 5.20866 7.70834 4.92533 7.70834 4.58366C7.70834 4.24199 7.99168 3.95866 8.33334 3.95866H11.6667C12.0083 3.95866 12.2917 4.24199 12.2917 4.58366C12.2917 4.92533 12.0083 5.20866 11.6667 5.20866Z" fill="#CCCCCC"/>
                        </svg>
                        <p>*</p>
                    </div>
                </div>
                <button type="button" class="btn-yellow" onclick="pushDataLayer('exp_regist_pag_butt_form_reserv', 'Reserve My Seat!', 'Button', 'Form Join Our Online College Admission Webinar- FREE')">Reserve My Seat!</button>
                <p>Your details will be forwarded to the webinar organizer, who might communicate with you regarding this event or their services</p>
            </div> 
        </div>
    </div>
</section>
<div class="popup d-flex ">
    <button type="button" class="popup_close">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M6.60309 23.3975L23.3969 6.60368" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.3969 23.3963L6.60309 6.60254" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <div class="crs-container">
        <div class="popup_head">
            <img src="https://grantme.ca/wp-content/uploads/2023/08/Jason-Yee-Headshot.png" alt="image" class="popup_img">
            <p>Jason Yee</p>
        </div>
        <form class="">
            <h2>Join Our Online College Admission Webinar- FREE</h2>
            <p>We’ll email and text you the link for the webinar.</p>
            <div class="relative">
                <div class="absolute d-flex">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.99999 1.66699C7.81666 1.66699 6.04166 3.44199 6.04166 5.62533C6.04166 7.76699 7.71666 9.50033 9.89999 9.57533C9.96666 9.56699 10.0333 9.56699 10.0833 9.57533C10.1 9.57533 10.1083 9.57533 10.125 9.57533C10.1333 9.57533 10.1333 9.57533 10.1417 9.57533C12.275 9.50033 13.95 7.76699 13.9583 5.62533C13.9583 3.44199 12.1833 1.66699 9.99999 1.66699Z"
                            fill="#CCCCCC" />
                        <path
                            d="M14.2333 11.7914C11.9083 10.2414 8.11666 10.2414 5.775 11.7914C4.71666 12.4997 4.13333 13.4581 4.13333 14.4831C4.13333 15.5081 4.71666 16.4581 5.76666 17.1581C6.93333 17.9414 8.46666 18.3331 10 18.3331C11.5333 18.3331 13.0667 17.9414 14.2333 17.1581C15.2833 16.4497 15.8667 15.4997 15.8667 14.4664C15.8583 13.4414 15.2833 12.4914 14.2333 11.7914Z"
                            fill="#CCCCCC" />
                    </svg>
                    <p>*</p>
                </div>
                <input type="text" placeholder="Enter first name..." required name="first-name">
                <p class="error-message">First Name cannot be empty</p>
            </div>
            <div class="relative">
                <div class="absolute d-flex">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.99999 1.66699C7.81666 1.66699 6.04166 3.44199 6.04166 5.62533C6.04166 7.76699 7.71666 9.50033 9.89999 9.57533C9.96666 9.56699 10.0333 9.56699 10.0833 9.57533C10.1 9.57533 10.1083 9.57533 10.125 9.57533C10.1333 9.57533 10.1333 9.57533 10.1417 9.57533C12.275 9.50033 13.95 7.76699 13.9583 5.62533C13.9583 3.44199 12.1833 1.66699 9.99999 1.66699Z"
                            fill="#CCCCCC" />
                        <path
                            d="M14.2333 11.7914C11.9083 10.2414 8.11666 10.2414 5.775 11.7914C4.71666 12.4997 4.13333 13.4581 4.13333 14.4831C4.13333 15.5081 4.71666 16.4581 5.76666 17.1581C6.93333 17.9414 8.46666 18.3331 10 18.3331C11.5333 18.3331 13.0667 17.9414 14.2333 17.1581C15.2833 16.4497 15.8667 15.4997 15.8667 14.4664C15.8583 13.4414 15.2833 12.4914 14.2333 11.7914Z"
                            fill="#CCCCCC" />
                    </svg>
                    <p>*</p>
                </div>
                <input type="text" placeholder="Enter last name..." required name="last-name">
                <p class="error-message">Last Name cannot be empty</p>
            </div>
            <div class="relative">
                <div class="absolute d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M14.1667 2.91699H5.83332C3.33332 2.91699 1.66666 4.16699 1.66666 7.08366V12.917C1.66666 15.8337 3.33332 17.0837 5.83332 17.0837H14.1667C16.6667 17.0837 18.3333 15.8337 18.3333 12.917V7.08366C18.3333 4.16699 16.6667 2.91699 14.1667 2.91699ZM14.5583 7.99199L11.95 10.0753C11.4 10.517 10.7 10.7337 9.99999 10.7337C9.29999 10.7337 8.59166 10.517 8.04999 10.0753L5.44166 7.99199C5.17499 7.77533 5.13332 7.37533 5.34166 7.10866C5.55832 6.84199 5.94999 6.79199 6.21666 7.00866L8.82499 9.09199C9.45832 9.60033 10.5333 9.60033 11.1667 9.09199L13.775 7.00866C14.0417 6.79199 14.4417 6.83366 14.65 7.10866C14.8667 7.37533 14.825 7.77533 14.5583 7.99199Z"
                            fill="#CCCCCC" />
                    </svg>
                    <p>*</p>
                </div>
                <input type="text" placeholder="Enter email address..." required name="email">
                <p class="error-message">Not a valid e-mail address</p>
            </div>
            <div class="relative">
                <div class="flag-dropdown flx">
                    <span class="selected-flag">
                        <span class="fi fi-ca"></span>
                    </span>
                    <span class="arrow-drop"></span>
                    <ul class="country-list"></ul>
                </div>
                <input type="text" placeholder="+1" data-mask="+1 (000) 000 0000" value="+1" required name="phone">
                <p class="error-message">Not a valid number phone</p>
                <div class="absolute d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M13.5333 1.66699H6.46668C4.16668 1.66699 3.33334 2.50033 3.33334 4.84199V15.1587C3.33334 17.5003 4.16668 18.3337 6.46668 18.3337H13.525C15.8333 18.3337 16.6667 17.5003 16.6667 15.1587V4.84199C16.6667 2.50033 15.8333 1.66699 13.5333 1.66699ZM10 16.0837C9.20001 16.0837 8.54168 15.4253 8.54168 14.6253C8.54168 13.8253 9.20001 13.167 10 13.167C10.8 13.167 11.4583 13.8253 11.4583 14.6253C11.4583 15.4253 10.8 16.0837 10 16.0837ZM11.6667 5.20866H8.33334C7.99168 5.20866 7.70834 4.92533 7.70834 4.58366C7.70834 4.24199 7.99168 3.95866 8.33334 3.95866H11.6667C12.0083 3.95866 12.2917 4.24199 12.2917 4.58366C12.2917 4.92533 12.0083 5.20866 11.6667 5.20866Z"
                            fill="#CCCCCC" />
                    </svg>
                    <p>*</p>
                </div>
            </div>
            <button type="button" class="btn-yellow" onclick="pushDataLayer('exp_regist_pag_button_popform_reserv', 'Reserve My Seat!', 'Button', 'Pop up did you now Form')">Reserve My Seat Now!</button>
            <p>Your details will be forwarded to the webinar organizer, who might communicate with you regarding this event or their services</p>
        </form>
    </div>
</div>`

//get state
const state = new Promise((resolve, reject) => {
    fetch(`https://conversionratestore.github.io/projects/uplead/state.json`).then(res => res.json()).then(data => {
        resolve(data)
    }).catch((error) => {
        console.error('Error:', error);
    })
})

const $$el = (selector) => document.querySelectorAll(selector)
const $el = (selector) => document.querySelector(selector)

//valid email
const isEmailValid = (input) => {
    let value = input.value;
    let res = value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    if(res == null)
        return false;
    else
        return true;
}

//mask phome
const mask = (input, mask, evt) => {
    try {
      var value = input.value;

      // If user pressed DEL or BACK SPACE, clean the value
      try {
        var e = (evt.which) ? evt.which : event.keyCode;
        if ( e == 46 || e == 8 ) {
          input.value = "";
          return;
        }
      } catch (e1) {}

      var literalPattern=/[0\*]/;
      var numberPattern=/[0-9]/;
      var newValue = "";

      for (var vId = 0, mId = 0 ; mId < mask.length ; ) {
        if (mId >= value.length)
          break;

        // Number expected but got a different value, store only the valid portion
        if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
          break;
        }

        // Found a literal
        while (mask[mId].match(literalPattern) == null) {
          if (value[vId] == mask[mId])
            break;

        newValue += mask[mId++];
      }

      newValue += value[vId++];
      mId++;
    }

    input.value = newValue;
  } catch(e) {}
}

let init = setInterval(() => {
    if ($el('header') && $el('.elementor-element-01b041d iframe')) {
        clearInterval(init)

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css'
        document.head.appendChild(link)

        document.head.insertAdjacentHTML('beforeend', style)
        $el('header').insertAdjacentHTML('afterend', html)

        $el('.attend_form > div').after($el('.elementor-element-01b041d'))
    
        $('.btn-learn').click(function(e) {
            e.preventDefault()
            $('html,body').animate({
                scrollTop: $('#learn').offset().top
            }, 500); 
        })

        //state events
        state.then(state => {
            for (let i = 0; i < state.length; i++) {
                $$el('.country-list').forEach(item => {
                    item.insertAdjacentHTML('beforeend',`
                    <li class="country d-flex items-center ${state[i].abbr == 'ca' ? 'active' : ''}" data-country-code="${state[i].abbr}" data-mask="${state[i].mask}" role="option">
                        <span class="fi fi-${state[i].abbr}"></span>
                        <span class="country-name">${state[i].name}</span>
                        <span class="dial-code">${state[i].code}</span>
                    </li>`)
                })
                
                $$el('.country-list').forEach(item => {
                    item.querySelectorAll('li')[i].addEventListener('click', (e) => {
                        $el('.country-list li.active').classList.remove('active');
                        e.currentTarget.classList.add('active');

                        let inputPhone = e.target.closest('form').querySelector('[name="phone"]');
                        let flagCurrent = e.target.closest('form').querySelector('.selected-flag'); 

                        flagCurrent.innerHTML = ` <span class="fi fi-${e.currentTarget.dataset.countryCode}"></span>`;
                        inputPhone.placeholder = e.currentTarget.querySelector('.dial-code').innerHTML;
                        inputPhone.dataset.mask = e.currentTarget.dataset.mask;
                        inputPhone.value = e.currentTarget.querySelector('.dial-code').innerHTML + ' ';
                    })
                })
            } 
        })

        $$el('.flag-dropdown').forEach(item => {
            item.addEventListener('click', (e) => e.currentTarget.classList.toggle('active'))
        })

        document.addEventListener("scroll", function() {
            let crsSticky = $el(".crs-sticky")
            let btnYellowOffset =  $el(".offer .btn-yellow").getBoundingClientRect().top + 68
            let attendFormOffset = $el(".attend_form").getBoundingClientRect().top
            let btnFormOffset = $el(".attend_form .btn-yellow").getBoundingClientRect().bottom

            if ((btnYellowOffset < 0 && attendFormOffset > 200) || ( attendFormOffset < 0 && btnFormOffset < 70)) {
                crsSticky.classList.add("active")
            } else {
                crsSticky.classList.remove("active")
            }
        });

        $el('.popup_close').addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            e.target.closest('.popup').classList.remove('active')

            const focusTimeMillis = Date.now() - startTime;
            pushDataLayer('exp_regist_pag_visib_popform_focus', focusTimeMillis, 'Visibility ', 'Pop up did you now Form')
        })
      
        $$el('[name="phone"]').forEach(item => {
            item.addEventListener('keyup', (event) => {
                mask(item, event.currentTarget.dataset.mask, event);
            })
        })

        $$el('.btn-yellow').forEach(item => {
            item.addEventListener('click', () => {
                if (item.closest('form')) {
                    let inputs = item.closest('form').querySelectorAll('input')
    
                    inputs.forEach(input => {
                        if (input.value == '') {
                            input.parentElement.classList.add('error')
                        } else {
                            input.parentElement.classList.remove('error')
                            if (input.name == 'email' && isEmailValid(input) != true) {
                                input.parentElement.classList.add('error')
                            }
                            if (input.name == 'phone' && input.value.length < input.dataset.mask.length) {
                                input.parentElement.classList.add('error')
                            }
                        }
                        input.addEventListener('input', () => {
                            input.parentElement.classList.remove('error')
                        })
                    })
                   
                    if (!item.closest('form').querySelector('.error')) {
                        item.classList.add('loading')

                        const email = item.closest('form').querySelector('[name="email"]').value
                        const firstName = item.closest('form').querySelector('[name="first-name"]').value
                        const lastName = item.closest('form').querySelector('[name="last-name"]').value
                        const phone = item.closest('form').querySelector('[name="phone"]').value

                        const dataZapier = {
                          'Webinar': 'Join Our Online College Admission Webinar - FREE',
                          'Session': 'ondemand',
                          'Email': email,
                          'First name': firstName,
                          'Last name': lastName,
                          'Phone': phone
                        };
    
                        fetch('https://hooks.zapier.com/hooks/catch/8630243/38utorx/', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          mode: 'no-cors', 
                          body: JSON.stringify(dataZapier)
                        }).then(data => {
                            console.log('send data Zapier');
                            item.classList.remove('loading')
                            // window.location.href = 'https://grantme.ca/webinar-booking-page/'
                        }).catch(error => {
                            console.error('Error:', error);
                            item.classList.remove('loading')
                        });
                    }
                } 
            })
        })

        //events 

        $$el('form input').forEach(input => {
            input.addEventListener('click', () => {
                let name = input.closest('.popup') ? 'exp_regist_pag_input_popform_name' : 'exp_regist_pag_input_form_name'
                let loc = input.closest('.popup') ? 'Pop up did you now Form' : 'Form Join Our Online College Admission Webinar- FREE'
                pushDataLayer(name, input.name.split('-').join(' '), 'Input', loc)
            })
        })

        handleVisibility('.offer .block')
        handleVisibility('.host h2 + div')
        handleVisibility('.learn ul')
        handleVisibility('.gift')
        handleVisibility('.limited')
        
        window.addEventListener('scroll', () => {
            handleVisibility('.offer .block')
            handleVisibility('.host h2 + div')
            handleVisibility('.learn ul')
            handleVisibility('.gift')
            handleVisibility('.limited')
        })

        let waitElements = setInterval(() => {
            if ($el('.elementor-element-72e0f20') &&
                $el('.elementor-element-ab828a0') &&
                $el('.elementor-element-89f4b88') && 
                $el('.exp-loading')
            ) {
                clearInterval(waitElements)

                console.log('rem load')
                $el('.exp-loading')?.remove()
            } 
        })
    }
})

let addBtn = setInterval(() => {
    if ($el('.elementor-element-72e0f20') &&
        $el('.elementor-element-ab828a0') &&
        $el('.elementor-element-89f4b88')
    ) {
        clearInterval(addBtn)
        $el('.elementor-element-72e0f20').insertAdjacentHTML('beforeend', btnHtml)
        $el('.elementor-element-ab828a0').insertAdjacentHTML('beforeend', btnHtml)
        $el('.elementor-element-89f4b88').insertAdjacentHTML('beforeend', btnHtml)

        //events
        $el('.elementor-element-59961b2 iframe').addEventListener('click', () => {
            pushDataLayer('exp_regist_pag_link_excellent_click', 'Click', 'Link', 'Excellent review Register  - webinar page')
        })
        $$el('.nextend-bullet-bar > div').forEach(item => {
            item.addEventListener('click', () => {
                pushDataLayer('exp_regist_pag_pagin_learnprog_click','Click','Pagination','Learn About The Program That Brought 20,000+ Students Success Register  - webinar page')
            })
        })

        $$el('.accordion > div .htmega-accourdion-title').forEach(item => {
            item.addEventListener('click', () => {
                pushDataLayer('exp_regist_pag_accord_asked_quest', item.innerText ,'Accordion','Frequently Asked Questions Register  - webinar page')
            })
        })

        handleVisibility('.elementor-element-d8f28c4')
        handleVisibility('.elementor-element-f097975')
        handleVisibility('.accordion > div:first-child')
        
        window.addEventListener('scroll', () => { 
            handleVisibility('.elementor-element-d8f28c4')
            handleVisibility('.elementor-element-f097975')
            handleVisibility('.accordion > div:first-child')
        })
    }
})

const isClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(isClarity)
        clarity("set", `exp_registration_page_redesign`, "variant_1")
    }
}, 100)