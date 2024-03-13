; (function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/zenithprepacademy'

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `exp_highlight`, 'variant_1')
    }
  }, WAIT_INTERVAL_TIMEOUT)

  init()
  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
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

  function handleVisibility(el, event_name, event_desc, event_type, event_loc) {
    const ms = 3000
    let timer

    const config = {
      root: null,
      threshold: 1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => {
            pushDataLayer(event_name, event_desc, event_type, event_loc)
          }, ms)
        } else {
          clearTimeout(timer)
        }
      })
    }, config)

    observer.observe(el)
  }

  const pushDataLayer = (event_name, event_desc, event_type, event_loc) => { // Send a Google Analytics event
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function addStyle() {
    const style = /*html*/`
    <style>

    .elementor-7 .elementor-element.elementor-element-3c0e6a6 {
      padding: 4.6% 1% 4.6% 1% !important;
    }

    .learn-more {
      color: #0E2242;
      text-align: center;
      font-family: "Avenir", sans-serif;
      font-size: 1.25vw;
      font-style: normal;
      font-weight: 800;
      line-height: 1.44;
      text-decoration-line: underline;
      text-transform: uppercase;
      margin: 24px 0 0 0;
      cursor: pointer;
    }

    [data-id="8359bf2"] .elementor-widget-wrap .learn-more {
      color: #FFF;
    }

    .logo-slider .elementor-spacer-inner:before {
      top: 21px !important;
    }

    .bold-underline {
      font-weight: 700;
      text-decoration: underline;
    }

    .elementor-7 .elementor-element.elementor-element-32341f5 {
      margin: 0 -10px;
    }

    [data-elementor-type="wp-page"] .elementor-element.elementor-widget-button:not(.elementor-element-903d773) .elementor-button {
      font-size: 1.25vw;
      line-height: 26px;
    }

    [data-id="d811283"] {
      margin-bottom: 15px;
    }

    .elementor-7 .elementor-element.elementor-element-cd7b683 {
      margin-bottom: -30px;
    }

    .elementor-7 .elementor-element.elementor-element-2b74e0d {
      margin: 0;
    }

    .elementor-7 .elementor-element.elementor-element-cf4fd00 {
      margin: 20px 0;
    }

    .elementor-7 .elementor-element.elementor-element-240da1e:not(.elementor-motion-effects-element-type-background),
    .elementor-7 .elementor-element.elementor-element-240da1e>.elementor-motion-effects-container>.elementor-motion-effects-layer {
      margin-top: 0;
    }

    .elementor-7 .elementor-element.elementor-element-fe14faa {
      margin: -5px 0 -15px;
    }

    .elementor-7 .elementor-element.elementor-element-d3dcab9 {
      margin-top: -55px;
    }

    .elementor-7 .elementor-element.elementor-element-a1c8d93.elementor-column>.elementor-widget-wrap {
      padding: 10px 0;
    }

    .elementor-7 .elementor-element.elementor-element-a1c8d93.elementor-column>.elementor-widget-wrap>*:not(.elementor-7 .elementor-element.elementor-element-32341f5) {
      padding: 0 10px;
    }

    @media only screen and (min-width: 767px) {
      [data-id="8359bf2"] .elementor-widget-wrap {
        padding: 10px 20px 0 16px;
      }

      [data-elementor-type="wp-page"] .elementor-element.elementor-widget-button:not(.elementor-element-903d773):not(.elementor-element-2b74e0d):not(.elementor-element-d3dcab9) {
        max-width: 53.5%;
        --container-widget-width: 53.5%;
      }

      .elementor-7 .elementor-element.elementor-element-cd7b683 {
        margin: 33px 0 -18px;
      }

      .elementor-7 .elementor-element.elementor-element-2b74e0d .learn-more {
        text-align: left;
      }

      .elementor-7 .elementor-element.elementor-element-cf4fd00 {
        margin-bottom: -50px;
      }

      .elementor-7 .elementor-element.elementor-element-fe14faa .learn-more {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
      }

      .elementor-7 .elementor-element.elementor-element-240da1e {
        padding: 30% 0% 8% 0%;
      }
    }

    @media only screen and (max-width: 767px) {
      [data-elementor-type="wp-page"] .elementor-button {
        font-size: 18px !important;
      }

      .learn-more {
        font-size: 16px;
        line-height: 1.5;
        /* 150% */
      }

      .elementor-7 .elementor-element.elementor-element-ecb868e .learn-more {
        text-shadow: 4.29px 0px 4.29px rgba(0, 0, 0, 0.25);
      }

      .site-btn a {
        height: 50px !important;
      }

      [data-elementor-type="wp-page"] .elementor-element.elementor-widget-button:not(.elementor-element-903d773):not(.custom-btn):not(.elementor-element-ecb868e):not(.elementor-element-32341f5) {
        max-width: 95% !important;
        --container-widget-width: 95% !important;
      }
    }

    </style>`

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function changeHeading() {
    const style = /*html*/`
    <style>
      .elementor-7 .elementor-element.elementor-element-8359bf2 > .elementor-widget-wrap > .elementor-widget:not(.elementor-widget__width-auto):not(.elementor-widget__width-initial):not(:last-child):not(.elementor-absolute),
      .elementor-7 .elementor-element.elementor-element-dd4b180 {
        display: none;
      }

      [data-id="8359bf2"] .elementor-widget-wrap {
        flex-direction: column;
      }

      .elementor-7 .elementor-element.elementor-element-ecb868e > .elementor-widget-container {
        margin: 0 !important;
      }

      body:not(.rtl) .elementor-7 .elementor-element.elementor-element-946d55e {
        bottom: -4% !important; 
        right: -46% !important;
      }

      .clr-gold {
        color: #F1C063; 
      }

      .heading-2 {
        color: #FFF;
        text-shadow: 4.29px 0px 4.29px rgba(0, 0, 0, 0.25);
        font-family: "Bebas Neue Pro", sans-serif;
        font-size: 4.44vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1; /* 100% */
        margin: 0 0 24px 0;
      }

      .subheading {
        color: #FFF;
        text-shadow: 4.29px 0px 4.29px rgba(0, 0, 0, 0.25);
        font-family: "EB Garamond";
        font-size: 1.67vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.33; /* 133.333% */
        margin: 0 0 30px 0;
        max-width: 80%;
      }

      .info {
        display: flex;
        max-width: 53.5%;
        width: 100%;
        padding: 8px 16px;
        margin-bottom: 16px;
        border: 1px solid #FFF;
        background: rgba(255, 255, 255, 0.14);
      }

      .info p {
        color: #FFF;
        text-shadow: 4.29px 0px 4.29px rgba(0, 0, 0, 0.25);
        font-family: "EB Garamond", sans-serif;
        font-size: 1.39vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.3; /* 130% */
        margin: 0;
      }

      @media only screen and (max-width: 767px) {
        .heading-2 {
          font-size: 36px;
          line-height: 1.11;
          margin: 0 0 12px 0;
        }

        .subheading {
          font-size: 20px;
          line-height: 1.4;
          margin: 0 0 20px 0;
          max-width: 100%;
        }

        .info {
          max-width: 100%;
          margin-bottom: 12px;
        }

        .info p {
          text-align: center;
          font-size: 20px;
          line-height: 26px;
        }
      }
    </style>`

    const html = /*html*/`
      ${style}
      <h2 class="heading-2">Give your child a brighter future by using our admission expertise to access top colleges</h2>
      <p class="subheading">Specialized <span class="bold-underline">consulting for grades 6-12</span>. Plan your child's path <span class="bold-underline">to Ivy League and other top universities</span>.</p>
      <div class="info">
        <p><span class="clr-gold">Over 50,000</span> parents have selected our proven path for their children</p>
      </div>
    `

    waitForElement('.elementor-7 .elementor-element.elementor-element-ecb868e ').then(el => el.insertAdjacentHTML('beforebegin', html))

    copyPasteRunningSentanceEl()

    waitForElement('.heading-2').then(el => handleVisibility(
      el,
      'exp_highlight_section_01', 'Section', 'Visibility', 'First screen'
    ))

    waitForElement('.subheading').then(el => handleVisibility(
      el,
      'exp_highlight_section_02', 'Section', 'Visibility', 'First screen'
    ))

    waitForElement('.info').then(el => handleVisibility(
      el,
      'exp_highlight_section_03', 'Section', 'Visibility', 'First screen'
    ))
  }

  function copyPasteRunningSentanceEl() {
    const waitForEls = setInterval(() => {
      const customUnivSection = document.querySelector('.custom-universities-section .elementor-container')
      const runningSentance = document.querySelector('.elementor-7 .elementor-element.elementor-element-1453762')

      if (customUnivSection && runningSentance) {
        clearInterval(waitForEls)

        let runningSentanceCopy = runningSentance.cloneNode(true)
        customUnivSection.appendChild(runningSentanceCopy)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addNewSections() {
    const style = /*html*/`
    <style>
      .custom-info-section.elementor-section .elementor-container {
        flex-direction: column;
      }

      .custom-universities-section {
        padding: 70px 20px;
        background: #fff;
      }

      .custom-universities-section p {
        color: #0E2242;
        font-family: "EB Garamond", sans-serif;
        font-size: 1.53vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.27;
        /* 127.273% */
        margin: 0 auto;
      }

      .custom-info-section {
        background-image: url("https://www.zenithprepacademy.com/wp-content/uploads/2023/03/zenith-lastsec-01.jpeg");
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 5% 20px;
      }

      .custom-info-section .wrapper {
        display: flex;
        max-width: 99%;
        margin: 0 auto 72px;
        justify-content: space-between;
      }

      .custom-info-section .wrapper>div:first-child {
        width: 46%;
      }

      .custom-info-section .wrapper>div:last-child {
        width: 49%;
      }

      .custom-info-section .wrapper>div:last-child img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      .heading-3 {
        color: #FFF;
        font-family: "Bebas Neue Pro", sans-serif;
        font-size: 2.5vw;
        font-style: normal;
        font-weight: 700;
        line-height: 1.1;
        /* 111.111% */
        margin: 0 0 24px 0;
      }

      .unorder-list {
        list-style-type: none;
        /* Remove default bullets */
        padding: 0;
        margin: 0;
      }

      .unorder-list li {
        background: url(${IMAGE_DIR_URL}/gold-check-arrow.svg) no-repeat left top;
        list-style: none;
        padding-left: 40px;

        color: #FFF;
        font-family: "EB Garamond", sans-serif;
        font-size: 1.39vw;
        line-height: 1.4;
        /* 140% */
        margin: 0 0 16px 0;
      }

      .unorder-list li:last-child {
        margin-bottom: 0;
      }

      .unorder-list ul li {
        padding-left: 30px;
      }

      .unorder-list ul {
        margin-top: 16px;
        padding: 0;
      }

      .unorder-list ul li {
        background: url(${IMAGE_DIR_URL}/gold-bullet.svg) no-repeat left top;
      }

      .golden-div {
        border: 3px solid #EBB858;
        padding: 40px 56px 4.9%;
        position: relative;
      }

      #crs-info>.elementor-widget-button {
        display: none;
        font-family: "Avenir", Sans-serif;
        font-size: 1.302vw;
        font-weight: 900;
        text-transform: uppercase;
        fill: #0E2242;
        border-radius: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        max-width: 100%;
      }

      #crs-info>.elementor-widget-button .elementor-button {
        color: #0E2242;
        margin-top: 32px;
        font-size: 1.25vw;
      }

      .golden-div p {
        color: #FFF;
        font-family: "EB Garamond", sans-serif;
        font-size: 1.53vw;
        font-style: normal;
        font-weight: 400;
        line-height: 1.36;
        margin: 0 0 12px 0;
      }

      .golden-div p:last-child {
        margin-bottom: 0;
      }

      .golden-div .elementor-widget-button {
        width: 36.8% !important;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }

      .point-arrow {
        position: absolute;
        bottom: 75%;
        left: 97%;
        transform: scaleX(-1) scale(0.6);
        width: 6.5vw;
      }

      .golden-div>.point-arrow {
        display: none;
      }

      .golden-div .elementor-button {
        font-family: "Avenir", Sans-serif;
        font-size: 1.302vw;
        font-weight: 900;
        text-transform: uppercase;
        fill: #0E2242;
        color: #0E2242;
        border-radius: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
      }

      @media only screen and (min-width: 1025px) {
        #crs-info.fluid-section .elementor-container {
          width: 76% !important;
        }
      }
      
      @media only screen and (max-width: 767px) {
        .custom-universities-section {
          padding: 32px 20px 40px;
        }

        .custom-universities-section p {
          text-align: center;
          font-size: 20px;
          line-height: 1.4;
          font-family: "Bebas Neue Pro", sans-serif;
        }

        .logo-slider .elementor-spacer-inner:before {
          top: 13px !important;
        }

        .custom-info-section {
          padding: 32px 20px;
        }

        .custom-info-section .wrapper {
          flex-direction: column;
          margin-bottom: 24px;
        }

        .custom-info-section .wrapper>div {
          width: 100% !important;
        }

        .heading-3 {
          font-size: 36px;
          font-weight: 700;
          line-height: 1.11;
        }

        .unorder-list li {
          font-size: 18px;
          line-height: 26px;
          margin: 0 0 12px 0;
          padding-left: 35px;
        }

        .unorder-list ul {
          margin-top: 12px;
        }

        .unorder-list ul li {
          padding-left: 20px;
        }

        .unorder-list ul li {
          background: url(https://conversionratestore.github.io/projects/zenithprepacademy/gold-bullet.svg) no-repeat -5px top;
        }

        .custom-info-section .wrapper>div:last-child {
          display: none;
        }

        .golden-div {
          padding: 24px;
          position: relative;
        }

        .golden-div>.point-arrow {
          display: block;
          bottom: 0;
          left: auto;
          right: 9px;
          transform: scaleX(-1) scale(0.6) translateY(81%);
          width: auto;
        }

        .golden-div p {
          font-size: 18px;
          line-height: 26px;
        }

        .golden-div .elementor-widget-button {
          display: none;
        }

        #crs-info>.elementor-widget-button {
          display: block;
        }
      }
    </style>`

    const html = /*html*/`
      ${style}
      <section class="custom-universities-section elementor-section elementor-top-section elementor-element elementor-section-full_width fluid-section elementor-section-height-default elementor-section-height-default">
        <div class="elementor-container elementor-column-gap-default">
          <p>Zenith students have been accepted into and attend the following universities:</p>
        </div>
      </section>
      <section id="crs-info" class="custom-info-section elementor-section elementor-top-section elementor-element elementor-section-full_width fluid-section elementor-section-height-default elementor-section-height-default">
        <div class="elementor-container elementor-column-gap-default">
          <div class="wrapper">
            <div>
              <h3 class="heading-3">During your personalized consultation, we will discuss:</h3>
              <ul class="unorder-list">
                <li><span class="bold-underline">your child</span> and where they are today</li>
                <li>what <span class="bold-underline">your family’s college admissions goals</span> are</li>
                <li><span class="bold-underline">the best strategies and proper roadmap for your specific child</span> and situation</li>
                <li>
                  <span class="bold-underline">if we can help your child get into an Ivy League / Top 25 university OR at least a tier or 2 better university</span>
                  <ul>
                    <li>if yes, then <span class="bold-underline">provide you an additional FREE 1-hour College Planning and Audit session</span> to create a deeper step-by-step roadmap with your entire family</li>
                    <li>if not, then we’ll give our best efforts to recommend programs we believe will benefit your child</li>
                  </ul>
                </li>
                <li><span class="bold-underline">questions you may have about your child and/or college admissions</span></li>
              </ul>
            </div>
            <div>
              <img src="https://www.zenithprepacademy.com/wp-content/uploads/2023/03/hp-lastsec-img.jpeg" alt="mom and daughter">
            </div>
          </div>
          <div class="golden-div">
            <img class="point-arrow" src="https://www.zenithprepacademy.com/wp-content/uploads/2023/03/yellow-arrow.png" alt="arrow">

            <p>In fact, top universities <span class="bold-underline">COMMONLY reject students with perfect GPA and SAT</span> scores if they don't have these 3 factors.</p>
            <p>No, we're not talking about gender, race, or income. <span class="bold-underline">These 3 factors are 100%</span> within your control if you want to make sure your child has the best chances of getting into a top university.</p>
            <p>And yes, you can even do these when your child is in the 6ᵗʰ-12ᵗʰ grade, but the <span class="bold-underline">earlier they start, the more powerful it will be.</span></p>
            <p>All will be explained in the free consultation.</p>

            <div class="custom-btn elementor-element elementor-align-justify elementor-widget__width-initial site-btn btn-register elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-button" data-element_type="widget" data-widget_type="button.default"> 
              <img class="point-arrow" src="https://www.zenithprepacademy.com/wp-content/uploads/2023/03/yellow-arrow.png" alt="arrow">
                  <div class="elementor-widget-container">
                    <div class="elementor-button-wrapper">
                      <a class="elementor-button elementor-button-link elementor-size-sm" href="#">
                        <span class="elementor-button-content-wrapper">
                          <span class="elementor-button-text">Book A Free Consultation</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="custom-btn elementor-element elementor-align-justify elementor-widget__width-initial site-btn btn-register elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-button" data-element_type="widget" data-widget_type="button.default"> 
              <div class="elementor-widget-container">
                <div class="elementor-button-wrapper">
                  <a class="elementor-button elementor-button-link elementor-size-sm" href="#">
                    <span class="elementor-button-content-wrapper">
                      <span class="elementor-button-text">Book A Free Consultation</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
        </div>
      </section>
    `

    waitForElement('.elementor-7 .elementor-element.elementor-element-64a6439').then(el => el.insertAdjacentHTML('beforebegin', html))

    waitForElement('.unorder-list').then(el => handleVisibility(el, 'exp_highlight_section_04', 'Section', 'Visibility', 'Home page During your personalized consultation, we will discuss: Your child and where they are today...'))
    waitForElement('.unorder-list ul').then(el => handleVisibility(el, 'exp_highlight_section_05', 'Section', 'Visibility', 'During your personalized consultation, we will discuss: In fact, top universities COMMONLY reject students with perfect GPA and SAT scores if they don\'t have these 3 factors...'))

    const waitForEls = setInterval(() => {
      if (document.querySelectorAll('.custom-btn')[1]) {
        clearInterval(waitForEls)

        document.querySelectorAll('.custom-btn').forEach(element => {
          handleVisibility(
            element,
            'exp_highlight_button_vis_02', 'Button Book a free consultation', 'Visibility', 'Home page Under During your personalized consultation, we will discuss:'
          )

          element.addEventListener('click', () => {
            pushDataLayer('exp_highlight_button_02', 'Book a free consultation', 'Button', 'Home page Under During your personalized consultation, we will discuss:')
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addLearnMore() {
    const waitForEls = setInterval(() => {
      const elements =
        document.querySelectorAll(
          '.elementor-element-ecb868e .elementor-widget-container, .elementor-element-d811283 .elementor-widget-container, .elementor-element-cd7b683 .elementor-widget-container, .elementor-element-2b74e0d .elementor-widget-container, .elementor-element-cf4fd00 .elementor-widget-container, .elementor-element-d3dcab9 .elementor-widget-container, .elementor-element-fe14faa .elementor-widget-container, .elementor-element-32341f5')

      const block = document.getElementById('crs-info')
      const header = document.querySelector('[data-elementor-type="header"]')
      if (
        elements && block && header
      ) {
        clearInterval(waitForEls)

        elements.forEach(el => {
          el.insertAdjacentHTML('beforeend', '<p class="learn-more">Learn more about consultation</p>')
        })

        const waitForEl = setInterval(() => {
          if (document.querySelectorAll('.learn-more')[7]) {
            clearInterval(waitForEl)

            document.querySelectorAll('.learn-more').forEach(element => {
              element.addEventListener('click', () => {
                const offsetHeight = header.offsetHeight
                window.scroll({
                  top: block.offsetTop - offsetHeight,
                  behavior: 'smooth'
                })
              })
            })

            addVisibilityAndClickToLink()
          }
        }, WAIT_INTERVAL_TIMEOUT)
      }
    }, WAIT_INTERVAL_TIMEOUT)

  }

  function handleElement(dataId, visLabel, clickLabel, description) {
    waitForElement(`[data-id="${dataId}"] .learn-more`).then(el => {
      handleVisibility(
        el,
        visLabel, `Link Learn more about consultation`, 'Visibility', description
      )

      el.addEventListener('click', () => {
        pushDataLayer(clickLabel, 'Learn more about consultation', 'Link', description)
      })
    })
  }

  function addVisibilityAndClickToLink() {
    handleElement("ecb868e", 'exp_highlight_link_vis_01', 'exp_highlight_link_01', 'First screen')
    handleElement("612ff03", 'exp_highlight_link_vis_02', 'exp_highlight_link_02', 'Home page Under Interviews')
    handleElement("cd7b683", 'exp_highlight_link_vis_03', 'exp_highlight_link_03', 'Home page Under Zenith students have been accepted and attend to the following universities')
    handleElement("2b74e0d", 'exp_highlight_link_vis_04', 'exp_highlight_link_04', 'Home page Under Unbeatable 100% Money Back Guarantee')
    handleElement("cf4fd00", 'exp_highlight_link_vis_05', 'exp_highlight_link_05', 'Home page Under Additionally, prior to anyone becoming a client, our admissions counselors spend 3-5 hours getting to know you and your family for FREE.')
    handleElement("d3dcab9", 'exp_highlight_link_vis_06', 'exp_highlight_link_06', 'Home page Under Can THOUSANDS of Parents Be wrong?')
    handleElement("fe14faa", 'exp_highlight_link_vis_07', 'exp_highlight_link_07', 'Home page Under Get into a 1 or 2-Tier Better University')
    handleElement("32341f5", 'exp_highlight_link_vis_08', 'exp_highlight_link_08', 'Home page Under THE MOST POWERFUL')
  }

  function init() {
    console.log('%cColorful log message', 'color: blue; background-color: yellow')

    addStyle()
    changeHeading()
    addNewSections()
    addLearnMore()
  }
})()