const dir = 'https://conversionratestore.github.io/projects/grantme/img/'

const style = `
<style>
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
    padding: 24px 16px 18px;
}
.attend_form h2 {
    margin-bottom: 20px;
}
.attend_form p {
    padding-bottom: 6px;
    color: var(--grey-60, #676767);
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

const btnHtml = `<button type="button" class="btn-yellow" onclick="$el('.popup').classList.add('active'); getLocName(event); setInterval(()=>{startTime += 1}, 100)">Grab Your FREE Seat Now!</button>`

const html = `
<div class="crs-sticky">
    ${btnHtml}
</div>
<section class="offer">
    <div class="crs-container">
        <div class="trustpilot"></div>
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
            <p>If you're a student or parent of student in <span class="underline">grades 9-12</span> looking for a clear, efficient, and effective approach to college admissions and scholarships, you’re in the right place!</p>
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
        <form class="attend_form">
            <h2>Join Our Online College Admission Webinar- FREE</h2>
            <p>The webinar will be conducted by Jason Yee and Madison Guy.</p>
            <p>You'll learn about the program that has brought success to over 20,000 students.</p>
            <p>We’ll email and text you the link for the webinar and tips used by students to win over $5,000,000, find awards they're eligible for, and save 30+hours.</p>
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
        </form>
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
    if ($el('header')) {
        clearInterval(init)

        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css'
        document.head.appendChild(link)

        document.head.insertAdjacentHTML('beforeend', style)
        $el('header').insertAdjacentHTML('afterend', html)

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