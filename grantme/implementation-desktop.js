; (function () {
  const dir = 'https://conversionratestore.github.io/projects/grantme/img/implementation'
  const WAIT_INTERVAL_TIMEOUT = 100

  const btn = /*html*/`<button class="btn">Grab Your FREE Seat Now!</button>`

  function waitForElement(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector))
          observer.disconnect()
        }
      })

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      })
    })
  }

  function addStyle() {
    const style = /*html*/`
    <style>

    #masthead,
    [data-id="39c00eb"],
    [data-id="6514657"],
    .wj_bottombar.wj_expanded {
      display: none !important;
    }

    .elementor-31668 .elementor-element.elementor-element-d8f28c4 {
      padding: 50px 0;
      background-color: #E9F3FA !important;
      margin-top: 100px;
    }

    .elementor-31668 .elementor-element.elementor-element-72e0f20,
    .elementor-31668 .elementor-element.elementor-element-ab828a0,
    .elementor-31668 .elementor-element.elementor-element-89f4b88 {
      padding: 90px 0;
    }

    .elementor-31668 .elementor-element.elementor-element-a377a73 .htmega-section-title .section-title-txt {
      color: var(--primary-blue, #2B3E51);
      text-align: center;
      font-family: "Bitter", sans-serif;
      font-size: 36px;
      font-weight: 700;
      line-height: 48px; /* 133.333% */
      letter-spacing: -0.96px;
    }

    .elementor-31668 .elementor-element.elementor-element-0071267 .htmega-accourdion-title .htmega-items-hedding {
      color: var(--secondary-blue, #3E78BA);
      font-size: 24px !important;
      line-height: 32px !important; /* 133.333% */
      padding: 21px 0;
    }

    #accordionExample0071267 {
      margin-top: 5px;
      max-width: 1070px;
    }

    .htmega-accourdion-title .htmega-items-hedding .accourdion-icon {
      justify-content: right !important;
    }

     .accordion-content {
      padding: 3px 24px !important;
     }

     .elementor-31668 .elementor-element.elementor-element-0071267 .single_accourdion {
      border-bottom: 1px solid #3E78BA;
      margin-bottom: 0 !important;
     }

     .elementor-31668 .elementor-element.elementor-element-0071267 .htmega-accourdion-title .htmega-items-hedding {
      border: 0 !important;
     }

     .accordion-content p {
      margin-bottom: 29px !important;
      color: #2B3E51;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px; /* 125% */
     }

    .elementor-31668 .elementor-element.elementor-element-9b92629 .elementor-button {
      display: none;
    }

    .d-flex {
      display: flex;
    }

    .justify-space-between {
      justify-content: space-between;
    }

    .color-accent {
      color: var(--primary-yellow, #EBBD45);
    }

    .color-gray--20 {
      color: var(--grey-20, #CCC);
    }

    .color-gray--60 {
      color: var(--grey-60, #676767);
    }

    .color-white {
      color: var(--white, #FFF);
    }

    .color-primary {
      color: var(--primary-blue, #2B3E51);
    }

    .section-title-txt {
      color: var(--primary-blue, #2B3E51);
    }

    .section-title-txt,
    .heading-1 {
      font-size: 36px !important;
      font-weight: 700 !important;
      line-height: 48px !important;
    }

    .heading-1 {
      font-family: "Bitter", sans-serif;
      letter-spacing: normal;
    }

    .heading-2 {
      font-size: 25px !important;
      font-weight: 700 !important;
      line-height: 37px !important;
      font-family: "Bitter", sans-serif;
      letter-spacing: -0.48px;
    }

    .heading-3 {
      font-size: 22px !important;
      font-weight: 700 !important;
      line-height: 36px !important;
      font-family: "Bitter", sans-serif;
      letter-spacing: normal;
    }

    .heading-4 {
      font-size: 18px !important;
      font-weight: 600 !important;
      line-height: 24px !important;
      font-family: "Bitter", sans-serif;
      letter-spacing: normal;
    }

    .txt-content {
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    .txt-center {
      text-align: center;
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-blue, #2B3E51);
      font-family: "Lato", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      border-radius: 6px;
      background: var(--primary-yellow, #EBBD45) !important;
      max-width: 343px;
      width: 100%;
      height: 62px;
      cursor: pointer;
      padding: 0;
      margin: 0 auto;
      border: 0;
    }

    .header {
      background: #3E5062;
      padding: 14px 0;
    }

    .container {
      width: 100%;
      padding: 0 16px;
      margin: auto;
      max-width: 1232px;
    }

    .container h1,
    .container h2,
    .container h3,
    .container h4,
    .container h5,
    .container p {
      margin: 0;
    }

    .header>div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .special-star {
      display: flex;
      gap: 2px;
      color: #2DAF6B;
    }

    .trustscore__txt {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 12px;
    }

    .trustscore__txt p {
      color: #FFF;
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
    }

    .webinar-banner {
      position: relative;
      padding-block: 40px;
      background-color: #2B3E51;
      z-index: 1;
      color: #FFF;
    }

    .webinar-banner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("${dir}/icons-abundant.svg");
      background-repeat: no-repeat;
      background-position: 0 -178px;
      z-index: -1;
    }

    .webinar-description {
      width: 61%;
      display: flex;
      flex-direction: column;
    }

    .webinar-form {
      width: 40%;
      z-index: 1;
    }

    .webinar-form .elementor-widget {
      margin: 0 -26px;
    }

    .privacy-text {
      display: none !important;
    }

    .webinar-brief {
      max-width: 88.67%;
    }

    .two-columns {
      display: flex;
    }

    .webinar-brief p {
      margin-top: 17px;
    }

    .webinar-brief {
      margin-bottom: 22px;
    }

    .will-learn {
      position: relative;
      border-radius: 6px 0 0 6px;
      backdrop-filter: blur(7px);
      padding: 34px 0 34px 24px;
      z-index: 1;
      height: 100%;
    }

    .will-learn::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 105%;
      height: 100%;
      background: rgba(233, 243, 250, 0.10);
      border-radius: 6px 0 0 6px;
      z-index: -1;
    }

    .will-learn .content {
      max-width: 91%;
    }

    .unordered-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }

    .will-learn .unordered-list li {
      color: #FFF;
    }

    .unordered-list li {
      position: relative;
      padding-left: 32px;
      margin-bottom: 8px;
      color: var(--white, #FFF);
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    .unordered-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      background: url("https://conversionratestore.github.io/projects/grantme/img/checked-circle.svg") no-repeat center / 17px;
      width: 17px;
      height: 17px;
    }

    .unordered-list li:last-child {
      margin-bottom: 0;
    }

    .will-learn .unordered-list {
      margin: 16px 0 30px;
    }

    .bonus {
      padding-top: 30px;
      border-top: 1px dashed var(--grey-20, #CCC);
    }

    .bonus>div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }

    .webinar-form {
      padding: 20px 36px;
      border-radius: 12px;
      background: var(--white, #FFF);
      box-shadow: 0px 12px 8px 0px rgba(0, 0, 0, 0.02), 0px 2px 2px 0px rgba(28, 5, 77, 0.05);
    }

    .webinar-form__subheading {
      margin: 10px 0 !important;
      color: var(--grey-60, #676767);
      text-align: center;
      font-family: "Lato", sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px; 
    }

    .join-options {
      display: flex;
      justify-content: center;
      gap: 28px;
      padding: 10px 0 0;
      border-top: 1px solid var(--light-grey, #F2F2F2);
    }

    .join-options>div {
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--primary-blue, #2B3E51);
      font-weight: 600;
    }
    
    .join-options p {
      color: var(--primary-blue, #2B3E51);
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px; /* 150% */
    }

    .hosts {
      padding-block: 100px;
    }

    .hosts .content {
      margin: 0 auto;
    }

    .hosts .container {
      max-width: 972px;
    }

    .hosts .heading-1 {
      margin-bottom: 80px;
    }

    .hosts .heading-4 {
      margin: 4px 0 6px;
    }

    .hosts .divider {
      background: var(--grey-20, #CCC);
      width: 50px;
      height: 1px;
      margin: 18px auto;
    }

    .hosts .heading-2 {
      font-weight: 400 !important;
    }

    .two-equal-columns {
      display: flex;
      justify-content: space-between;
    }

    .hosts .two-equal-columns>div {
      width: 46.8%;
      position: relative;
      padding: 79px 24px 30px;
      /* adjust as needed */
      border-radius: 12px;
      background: #fff;
    }

    .hosts .two-equal-columns>div::before {
      content: "";
      position: absolute;
      top: -1.5px;
      left: -1.5px;
      right: -1.5px;
      bottom: -1.5px;
      background: linear-gradient(-90deg, rgba(31, 114, 218, 1), rgba(162, 91, 182, 1), rgba(230, 173, 25, 1));
      border-radius: 12px;
      z-index: -1;
    }

    .hosts .img {
      padding: 1.5px;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(90deg, rgba(31, 114, 218, 1), rgba(162, 91, 182, 1), rgba(230, 173, 25, 1));
    }

    .hosts .img img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    .host p {
      color: var(--grey-60, #676767);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 150% */
    }

    .attend {
      padding-block: 60px;
      border-radius: 0px 120px;
      background: #2B3E51;
    }

    .attend .container {
      max-width: 982px;
    }

    .attend p {
      margin-bottom: 10px;
      font-family: "Lato", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    .attend p:last-child {
      margin-bottom: 0;
    }

    .attend .two-equal-columns {
      margin: 40px 0;
    }

    .attend .two-equal-columns>div {
      width: 46.3%;
    }

    .attend .two-equal-columns>div:first-child p {
      margin-bottom: 20px;
    }

    .attend .two-equal-columns>div:first-child p:last-child {
      margin-bottom: 0;
    }

    .attend .two-equal-columns>div:last-child .heading-2 {
      margin-bottom: 10px;
    }

    .attend .two-equal-columns>div:last-child {
      border-radius: 12px;
      background: #3E5062;
      padding: 24px 30px 48px;
    }

    div#n2-ss-16 .n2-ss-slider-3 {
      padding: 10px 0 0 0; 
    }

    [data-id="cfd88cd"] .elementor-widget-wrap.elementor-element-populated .btn {
      margin-top: 20px; 
    }

    .elementor-31668 .elementor-element.elementor-element-a377a73 .htmega-section-title .section-subtitle-txt {
      color: #2B3E51;
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 25px; /* 138.889% */
      max-width: 726px;
      margin: 36px 0 16px;
    }

    .bottombar {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #333;
      color: white;
      padding: 10px;
      border-top: 1px solid #DAE5D9;
      border-right: 1px solid #DAE5D9;
      border-left: 1px solid #DAE5D9;
      background: #E3F0F9;
      z-index: 99;
    }

    .bottombar__content {
      display: flex;
      justify-content: space-between;
      max-width: 1232px;
      padding: 20px 16px;
      margin: 0 auto;
    }

    .bottombar__title {
      color: var(--primary-blue, #2B3E51);
      text-align: center;
      font-family: "Bitter", sans-serif;
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: 34px; /* 121.429% */
      letter-spacing: -0.96px;
      margin-bottom: 8px;
    }

    .bottombar .trustscore__txt p{
      color: var(--primary-blue, #2B3E51);
      font-family: "Lato", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 138.889% */
      letter-spacing: normal;
      margin-bottom: 0;
    }

    .bottombar__content > div:last-child {
      width: 35.5%;
    }

    .bottombar .btn {
      max-width: 100%;
    }

    .elementor-31668 .elementor-element.elementor-element-0001917 .htmega-section-title .section-title-txt {
      color: var(--primary-blue, #2B3E51) !important;
      max-width: 38ch;
    }

  </style>
    `

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function addHeader() {
    const header = /*html*/`
      <header class="header">
        <div class="container">
          <img src="${dir}/logo.svg" alt="GrantMe logo">
          <div class="trustscore d-flex">
            <img src="${dir}/trustpilot.svg" alt="5 trustscore stars">

            <div class="trustscore__txt">
              <p>TrustScore</p>
              <div class="special-star">
                <img src="${dir}/trust-star.svg" alt="star">
                <p>4.8</p>
              </div>
              <p>(879 reviews)</p>
            </div>
          </div>
        </div>
      </header>
    `

    waitForElement('[data-elementor-id="31668"]').then(el => el.insertAdjacentHTML('beforebegin', header))
  }

  function addSections() {
    const sections = /*html*/`
       <section class="webinar-banner">
    <div class="container">
      <div class="two-columns">
        <div class="webinar-description">
          <div class="webinar-brief">
            <h1 class="heading-1"><span class="color-accent">Unlock</span> the Secrets to a Debt-Free University Journey
              with <span class="color-accent">Our Exclusive Webinar!</span></h1>
            <p class="color-gray--20 txt-content">Discover the proven strategies how you can help your child of <span
                class="color-white">9-12</span> grades to get into top choice school and
              graduate with money in the bank - absolutely FREE!</p>
          </div>
          <div class="will-learn">
            <div class="content">
              <div class="d-flex justify-space-between">
                <h4 class="heading-4 color-accent">In this FREE webinar, you’ll learn:</h4>
                <img src="${dir}/gold-arrow.svg" alt="arrow right">
              </div>
              <ul class="unordered-list">
                <li>Why choosing the right school is crucial for a secure future</li>
                <li>The 3 key elements needed for a successful admission</li>
                <li>How to avoid student stress and anxiety</li>
                <li>Tips on selecting your top choice schools and improving your admission chances</li>
                <li>Crafting an application that stands out and truly represents you</li>
              </ul>
              <div class="bonus">
                <div>
                  <img src="${dir}/gift.svg" alt="gift">
                  <h4 class="heading-4 color-accent">Exclusive bonus!</h4>
                </div>
                <p class="txt-content">Stay till the end and receive a step-by-step checklist to navigate your college
                  admission and
                  scholarship journey, sent directly to your inbox!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="webinar-form">
          <h3 class="heading-3 color-primary txt-center">Join Our Online University Admission Webinar- FREE</h3>
          <p class="webinar-form__subheading">We’ll email and text you the link for the webinar.</p>
          <div class="join-options">
            <div>
              <img src="${dir}/dollar.svg" alt="dollar">
              <p>Free</p>
            </div>
            <div>
              <img src="${dir}/clock.svg" alt="clock">
              <p>30 minutes</p>
            </div>
            <div>
              <img src="${dir}/video.svg" alt="video">
              <p>Zoom call</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="hosts">
    <div class="container">

      <h1 class="heading-1 color-primary txt-center">Your hosts:</h1>
      <div class="two-equal-columns">
        <div class="host">
          <div class="img">
            <img decoding="async" src="https://grantme.ca/wp-content/uploads/2023/08/Madison-Guy-Headshot.png"
              alt="Madison">
          </div>
          <h5 class="heading-2 fw-400 color-primary txt-center">Madison</h5>
          <h4 class="heading-4 color-primary txt-center">GrantMe Founder, Forbes 30 under 30</h4>
          <div class="divider"></div>
          <p>Navigated her own uncertainties in higher education and financial stresses. Starting in a general arts
            program at UBC, she transitioned to business school after thorough research. Her journey inspired the
            creation of GrantMe, a platform dedicated to helping students find their educational paths, secure
            admissions, and win financial aid with ease and confidence.</p>
        </div>
        <div class="host">
          <div class="img">
            <img decoding="async" src="https://grantme.ca/wp-content/uploads/2023/08/Jason-Yee-Headshot.png"
              alt="Jason">
          </div>
          <h5 class="heading-2 fw-400 color-primary txt-center">Jason</h5>
          <h4 class="heading-4 color-primary txt-center">GrantMe CEO</h4>
          <div class="divider"></div>
          <p>Jason navigated through his own uncertainties in high school, eventually landing at UBC where he studied
            a
            mix of kinesiology, business, and psychology. Witnessing peers struggle to find their academic and career
            paths, he joined Madison at GrantMe, inspired by the platform's potential to guide students towards
            clarity,
            opportunity, and financial support in their educational journeys.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="attend">
    <div class="container">
      <h1 class="heading-1 txt-center color-white">Who Should Attend?</h1>

      <div class="two-equal-columns">
        <div class="color-gray--20">
          <p>This masterclass is tailored for Canadian citizens, permanent residents of Canada, or dual US and Canadian
            citizens who are eager to carve a unique educational path without drowning in student debt. </p>
          <p>
            If you're a student or parent of student in grades <span class="color-white">9-12 looking</span> for a
            clear, efficient, and effective
            approach to college admissions and scholarships, you’re in the right place!
          </p>
        </div>
        <div class="color-white">
          <h2 class="heading-2 color-white">Spaces are limited and filling up fast</h2>
          <p>Grab this golden opportunity to transform your educational journey. </p>
          <p>Fill in the form below to secure your spot!</p>
        </div>
      </div>

      ${btn}
    </div>
  </section>
    `

    waitForElement('[data-elementor-id="31668"]').then(el => el.insertAdjacentHTML('afterbegin', sections))
  }

  function moveIframe() {
    const waitForEl = setInterval(() => {
      const iframe = document.querySelector('[data-id="01b041d"]')
      const joinOptions = document.querySelector('.join-options')

      if (iframe && joinOptions) {
        clearInterval(waitForEl)

        joinOptions.insertAdjacentElement('afterend', iframe)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addBtns() {
    waitForElement('[data-id="cfd88cd"] .elementor-widget-wrap.elementor-element-populated').then((el) => {
      el.insertAdjacentHTML('beforeend', btn)
    })

    waitForElement('[data-id="9b92629"]').then((el) => {
      el.insertAdjacentHTML('beforeend', btn)
    })
  }

  function handleClickOnBtns() {
    const waitForEl = setInterval(() => {
      if (document.querySelectorAll('.btn')[3] && document.getElementById('js-reg-btn')) {
        clearInterval(waitForEl)

        document.querySelectorAll('.btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.getElementById('js-reg-btn').click()
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addFixedBottomBar() {
    const bottomBar = /*html*/`
      <div class="bottombar">
        <div class="bottombar__content">
          <div>
            <p class="bottombar__title">FREE University Admission Webinar</p>
            
            <div class="trustscore d-flex">
              <img src="${dir}/trustpilot.svg" alt="5 trustscore stars">

              <div class="trustscore__txt">
                <p>TrustScore</p>
                <div class="special-star">
                  <img src="${dir}/trust-star.svg" alt="star">
                  <p>4.8</p>
                </div>
                <p>(879 reviews)</p>
              </div>
            </div>

          </div>
          <div>
            ${btn}
          </div>
        </div>
      </div>
    `

    waitForElement('body').then(el => el.insertAdjacentHTML('afterend', bottomBar))
  }

  function init() {
    addStyle()

    addHeader()
    addSections()

    moveIframe()

    addBtns()
    addFixedBottomBar()
    handleClickOnBtns()
  }

  init()
})()