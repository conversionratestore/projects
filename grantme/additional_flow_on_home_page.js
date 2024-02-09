console.log(
  '%c EXP: additional_flow_on_home_page (DEV: SKh)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)

const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/'
// clarity script
const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'exp_add_flow', 'variant_1')
  }
}, 1000)
// funtion for push data to GA4
const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} ${desc} ${type} ${loc}`)
}
function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round(endShow - startShow)
        console.log(timeShow, `timeShow`)
        entry.target.removeAttribute('data-startShow')
        if (timeShow >= 3000) {
          pushDataLayer(event, `Page view ${timeShow}`, 'Visibility', location)
        }
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}
function checkScrollPosition(headerOff, elPosition) {
  const headerOffset = headerOff
  const elementPosition = elPosition?.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

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
      subtree: true,
      characterData: true
    })
  })
}

const icons = {
  trustScore: /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="20" viewBox="0 0 110 20" fill="none">
        <path d="M0.499023 19.1283H20.4712V0.0078125H0.499023V19.1283Z" fill="#2DAF6B"/>
        <path d="M17.5245 8.14277L6.19648 16.021L7.84945 11.1519L3.52246 8.14277H8.87084L10.5235 3.27344L12.1761 8.14277H17.5245ZM10.5239 13.0121L13.6176 12.3891L14.8502 16.021L10.5239 13.0121Z" fill="white"/>
        <path d="M22.7568 19.1283H42.729V0.0078125H22.7568V19.1283Z" fill="#2DAF6B"/>
        <path d="M22.7568 19.1283H32.7429V0.0078125H22.7568V19.1283Z" fill="#2DAF6B"/>
        <path d="M32.9824 12.9369L35.6353 12.3881L36.8622 16.1024L32.702 13.1298L28.3794 16.1024L30.0571 11.2157L25.665 8.1956H31.0938L32.7708 3.30859L34.4485 8.1956H39.8769L32.9824 12.9369Z" fill="white"/>
        <path d="M45.0127 19.1283H64.9849V0.0078125H45.0127V19.1283Z" fill="#2DAF6B"/>
        <path d="M45.0127 19.1283H54.9988V0.0078125H45.0127V19.1283Z" fill="#2DAF6B"/>
        <path d="M62.0382 8.14277L50.7102 16.021L52.3631 11.1519L48.0361 8.14277H53.3845L55.0371 3.27344L56.6898 8.14277L62.0382 8.14277ZM55.0376 13.0121L58.1313 12.3891L59.3639 16.021L55.0376 13.0121Z" fill="white"/>
        <path d="M67.2705 19.1283H87.2427V0.0078125H67.2705V19.1283Z" fill="#2DAF6B"/>
        <path d="M67.2705 19.1283H77.2566V0.0078125H67.2705V19.1283Z" fill="#2DAF6B"/>
        <path d="M84.296 8.14277L72.9683 16.021L74.6209 11.1519L70.2939 8.14277H75.6423L77.295 3.27344L78.9476 8.14277L84.296 8.14277ZM77.2954 13.0121L80.3891 12.3891L81.6217 16.021L77.2954 13.0121Z" fill="white"/>
        <path d="M89.5264 19.1283H109.499V0.0078125H89.5264V19.1283Z" fill="#2DAF6B"/>
        <path d="M89.5264 19.1283H99.5125V0.0078125H89.5264V19.1283Z" fill="#2DAF6B"/>
        <path d="M106.552 8.14277L95.2242 16.021L96.8768 11.1519L92.5498 8.14277H97.8982L99.5508 3.27344L101.203 8.14277H106.552ZM99.5512 13.0121L102.645 12.3891L103.878 16.021L99.5512 13.0121Z" fill="white"/>
    </svg>
    `,
  star: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M16 6.28095L3.05597 15.2833L4.94442 9.71952L0 6.28095H6.11155L8 0.716797L9.88844 6.28095H16ZM8.00047 11.8451L11.5356 11.1332L12.9441 15.2833L8.00047 11.8451Z"
        fill="#00B67A"
      />
    </svg>
  `,
  arrowBlue: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
      <path
        d="M9.12045 8.76958C9.12045 9.05633 9.01096 9.34304 8.79244 9.56167L1.91274 16.4413C1.4751 16.8789 0.765551 16.8789 0.328093 16.4413C-0.109364 16.0038 -0.109365 15.2944 0.328093 14.8568L6.41564 8.76958L0.328305 2.68235C-0.109152 2.24471 -0.109153 1.53538 0.328305 1.09795C0.765763 0.660107 1.47531 0.660107 1.91295 1.09795L8.79266 7.97748C9.01121 8.19621 9.12045 8.48293 9.12045 8.76958Z"
        fill="#3E78BA"
      />
    </svg>
  `
}

class HomePage {
  constructor(targetUrl) {
    this.targetUrl = targetUrl
    this.device = innerWidth <= 1025 ? 'Mobile' : 'Desktop'
    this.init()
  }

  init() {
    const currentUrl = location.pathname

    if (currentUrl === this.targetUrl) {
      console.log(`ONLY HomePage >>>>>`)
      this.initMainStyles()

      this.reDesignHeader()
      this.initStickyHeader()
      if (this.device === 'Mobile') {
        this.observerHeaderMob()
      }
      this.renderHeroTrustScoreStarsBlock()
      this.renderHeroScheduleConsultationCallBlock()
      this.reDesignTuitionSection()
      this.onClickTrustScoreStarsBlocks()
      this.onClickScheduleFreeConsultationBtns()
      this.onClickDifferentBtns()
      this.onChangeTxtTuitionSection()
      this.onChangeTxtReviews()
    }
  }
  scheduleFreeConsultationBtnHtml() {
    const scheduleFreeConsultationBtnStyle = /* HTML */ `
      <style>
        .schedule_a_free_link {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          max-width: 362px;
          width: 100%;
          border-radius: 6px;
          border: 2px solid #3e78ba;
          font-size: 18px;
          font-weight: 700;
          line-height: 25px;
          color: #3e78ba;
          transition: all 0.25s ease;
        }
        .schedule_a_free_link:hover {
          background: linear-gradient(89.48deg, #e6ad19 9.07%, #826f91 33.99%, #3e78ba 57.89%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.25s ease;
        }
        .schedule_a_free_link > svg {
          margin-left: 12px;
        }
        .schedule_a_free_link span {
          margin-left: 5px;
        }
        /*sticky_header scheduleFreeConsultationBtn */
        .sticky_header .schedule_a_free_link {
          background: #ebbd45;
          border: none;
          font-size: 16px;
          line-height: 16px;
          color: #2b3e51;
          height: 48px;
          max-width: 278px;
        }
        .sticky_header .schedule_a_free_link:hover {
          color: #3e78ba;
          -webkit-text-fill-color: #3e78ba;
        }
        .sticky_header .schedule_a_free_link svg,
        .sticky_header .schedule_a_free_link span {
          display: none;
        }
        /*tuition_section */
        .tuition_section .schedule_a_free_link {
          background: #ebbd45;
          border: none;
          font-size: 20px;
          line-height: 20px;
          color: #2b3e51;
          height: 62px;
          max-width: 317px;
          margin: 0 auto;
        }
        .tuition_section .schedule_a_free_link:hover {
          color: #3e78ba;
          -webkit-text-fill-color: #3e78ba;
        }
        .tuition_section .schedule_a_free_link svg,
        .tuition_section .schedule_a_free_link span {
          display: none;
        }
        @media (max-width: 1025px) {
          .schedule_a_free_link span {
            display: none;
          }
          /*sticky_header scheduleFreeConsultationBtn */
          .sticky_header .schedule_a_free_link {
            max-width: 100%;
          }
        }
      </style>
    `
    const scheduleFreeConsultationBtn = /* HTML */ `
      ${scheduleFreeConsultationBtnStyle}
      <a class="schedule_a_free_link" href="https://app.grantme.com/assessment-outcome?user_type=parent"
        >Schedule a free consultation call <span>now</span> ${icons.arrowBlue}
      </a>
    `
    return scheduleFreeConsultationBtn
  }
  trustScoreStarsBlockHtml() {
    const trustScoreStarsStyle = /* HTML */ `
      <style>
        .trust_score_wrapp {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: max-content;
          cursor: pointer;
          gap: 12px;
          padding-top: 60px;
          margin: 0 auto;
          cursor: pointer;
        }
        .trust_score_wrapp > div {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .trust_score_wrapp p {
          font-size: 18px;
          line-height: 25px;
          margin: 0 8px 0 0;
        }
        p.reviews_mark {
          color: #2daf6b;
          margin: 0 8px 0 0;
        }
        p.reviews_count {
          margin: 0;
        }
        /*sticky_header trustScoreStarsBlock*/
        .sticky_header .trust_score_wrapp {
          padding: 0;
          gap: 6px;
          margin: 0 0 0 auto;
        }
        .sticky_header .trust_score_wrapp p {
          color: #fff;
          font-size: 14px;
          line-height: 21px;
        }
        .sticky_header p.reviews_mark {
          color: #2daf6b;
        }
        .sticky_header p.reviews_count {
          text-decoration-line: underline;
        }
        @media (max-width: 1025px) {
          .trust_score_wrapp {
            padding-top: 90px;
            gap: 8px;
          }
          .trust_score_wrapp p {
            font-size: 14px;
            line-height: 21px;
          }
          p.reviews_mark {
            margin: 0 6px 0 0;
          }
          p.reviews_count {
            text-decoration-line: underline;
            font-weight: 700;
          }
          /*sticky_header trustScoreStarsBlock*/
          .sticky_header .trust_score_wrapp {
            display: none;
          }
        }
      </style>
    `
    const trustScoreStarsBlock = /* HTML */ `
      <div class="trust_score_wrapp">
        ${trustScoreStarsStyle} ${icons.trustScore}
        <div>
          <p class="reviews_txt">TrustScore</p>
          ${icons.star}
          <p class="reviews_mark">4.8</p>
          <p class="reviews_count">(<span>1,620+ reviews</span>)</p>
        </div>
      </div>
    `
    return trustScoreStarsBlock
  }
  logoHeaderHtml() {
    const logoStyle = /* HTML */ `
      <style>
        .logo_wrap {
          max-width: 134px;
          max-height: 40px;
          width: 100%;
        }
        .logo_wrap img {
          width: 100%;
          height: 100%;
        }
        /*sticky_header logo*/
        @media (max-width: 1025px) {
          .sticky_header .logo_wrap {
            display: none;
          }
        }
      </style>
    `
    const logo = /* HTML */ `
      ${logoStyle}
      <a href="/" class="logo_wrap">
        <img src="${git}/grantme/img/sticky_grantme_logo_new.png" alt="logo" />
      </a>
    `
    return logo
  }
  telLinkHtml() {
    const telLinkStyle = /* HTML */ `
      <style>
        .tel_link {
          position: relative;
          padding: 0 24px 0 42px;
          border-right: 1px solid #cccccc;
          font-weight: 700;
          font-size: 16px;
          line-height: 18px;
          color: #2b3e51 !important;
          text-decoration: none;
          text-align: center;
          transition: all 0.3s;
        }
        .tel_link::before {
          position: absolute;
          content: '';
          width: 30px;
          height: 30px;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          background: url(${git}/grantme/img/burger_open_call.svg) no-repeat center center;
        }
        .tel_link:hover {
          background: unset !important;
          color: #ebbd45 !important;
          text-decoration: none !important;
        }
        @media (max-width: 1025px) {
          .tel_link {
            width: 30px;
            height: 30px;
            padding: 0;
            border: none;
            font-size: 0;
          }
        }
      </style>
    `
    const telLink = /* HTML */ `
      ${telLinkStyle}
      <a class="tel_link" href="tel:+18004934084">(800) 493-4084</a>
    `
    return telLink
  }
  reDesignHeader() {
    const newBtnBurgerMenu = /* HTML */ `
      <style>
        @media (max-width: 1025px) {
          .new_btn_burger_menu {
            padding: 24px;
            margin-top: 40px;
          }
          .new_btn_burger_menu .log_in_link {
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;
            color: #2b3e51;
            text-align: center;
            display: block;
            width: max-content;
            margin: 0 auto;
          }
          .new_btn_burger_menu .take_assessment_btn {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 62px;
            width: 100%;
            border-radius: 6px;
            background: #ebbd45;
            max-width: 100%;
            margin: 30px 0 14px;
            color: #2b3e51;
            font-family: 'Lato';
            font-size: 20px;
            font-weight: 700;
            line-height: 20px;
          }
          .new_btn_burger_menu .schedule_a_free_link {
            height: 62px;
            max-width: 100%;
          }
          .new_btn_burger_menu .schedule_a_free_link > svg {
            margin-top: 3px;
          }
        }
      </style>
      <div class="new_btn_burger_menu">
        <a
          class="log_in_link"
          href="https://app.grantme.com/?__hstc=171153535.ea99a1c023c26b49f6cec8b875a1d24c.1677748523116.1683211802760.1683277102530.17&amp;__hssc=171153535.2.1683277102530&amp;__hsfp=3100531308"
          >Log In</a
        >
        <a
          class="take_assessment_btn"
          href="https://app.grantme.com/grantme-program-assessment?__hstc=171153535.ea99a1c023c26b49f6cec8b875a1d24c.1677748523116.1683211802760.1683277102530.17&__hssc=171153535.1.1683277102530&__hsfp=3100531308"
          >Take Assessment</a
        >
        ${this.scheduleFreeConsultationBtnHtml()}
      </div>
    `

    let selectorTagHeader = null
    let selectorTagBurgerMenu = null

    if (this.device === 'Mobile') {
      selectorTagHeader = '.elementor-24572 .elementor-element.elementor-element-d3b93f4'
      selectorTagBurgerMenu = '#menu-1-e3c03f0'

      waitForElement(selectorTagHeader).then(el => {
        if (!$el('#heroScheduleConsultationCallBlock')) {
          this.insert(this.telLinkHtml(), selectorTagHeader, 'beforebegin')
        }
      })

      waitForElement(selectorTagBurgerMenu).then(el => {
        if (!$el('.new_btn_burger_menu')) {
          this.insert(newBtnBurgerMenu, selectorTagBurgerMenu, 'afterend')
        }
      })
    } else {
      selectorTagHeader =
        '.elementor-24572 .elementor-element.elementor-element-1e45e76.elementor-column.elementor-element[data-element_type=column]>.elementor-widget-wrap.elementor-element-populated'

      waitForElement(selectorTagHeader).then(el => {
        if (!$el('#heroScheduleConsultationCallBlock')) {
          this.insert(this.telLinkHtml(), selectorTagHeader, 'afterbegin')
        }
      })
    }
  }
  initStickyHeader() {
    const stickyHeaderStyle = /* HTML */ `
      <style>
        .sticky_header {
          display: none;
          background: #3e5062;
          padding: 11px 0;
        }
        .sticky_header.is_fixed {
          position: fixed;
          display: block;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transform: translateY(0%);
          animation: ani 0.5s ease;
        }
        @keyframes ani {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .sticky_header .container {
          margin: 0 auto;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 25px;
          max-width: 1200px;
          width: 90%;
        }
        @media (max-width: 1025px) {
          .sticky_header {
            background: #e9f3fa;
            box-shadow: 0px -2px 16px 0px rgba(0, 0, 0, 0.16);
            padding: 12px 20px;
          }
          .sticky_header .container {
            margin: 0;
            width: 100%;
          }
          .sticky_header.is_fixed {
            top: unset;
            bottom: 0;
          }
          @keyframes ani {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0);
            }
          }
        }
      </style>
    `
    const stickyHeader = /* HTML */ `
      ${stickyHeaderStyle}
      <div class="sticky_header">
        <div class="container">
          ${this.logoHeaderHtml()} ${this.trustScoreStarsBlockHtml()} ${this.scheduleFreeConsultationBtnHtml()}
        </div>
      </div>
    `
    waitForElement('#page').then(el => {
      if (!$el('.sticky_header')) {
        this.insert(stickyHeader, '#page', 'afterbegin')
      }
    })
    waitForElement('.schedule_a_free_block').then(el => {
      if ($el('.sticky_header')) {
        let stickyHeader = $el('.sticky_header')
        const elemClose = el

        function visible(target) {
          if (target.getBoundingClientRect().bottom < 0) {
            stickyHeader.classList.add('is_fixed')
          } else {
            if (stickyHeader.classList.contains('is_fixed')) {
              stickyHeader.classList.remove('is_fixed')
            }
          }
        }
        window.addEventListener('scroll', function () {
          visible(elemClose)
        })
        visible(elemClose)
      }
    })
  }
  observerHeaderMob() {
    let observer = new MutationObserver(() => {
      if ($el('.menu-is-active')) {
        observer.disconnect()

        if (!$el('#masthead').classList.contains('menu_open')) {
          $el('#masthead').classList.add('menu_open')
          $el('body').style.overflow = 'hidden'
        }

        observer.observe(document, {
          childList: true,
          subtree: true
        })
      } else {
        observer.disconnect()
        if ($el('#masthead').classList.contains('menu_open')) {
          $el('#masthead').classList.remove('menu_open')
          $el('body').style.overflow = 'unset'
        }
        observer.observe(document, {
          childList: true,
          subtree: true
        })
      }
    })

    observer.observe(document, {
      childList: true,
      subtree: true
    })
  }
  renderHeroTrustScoreStarsBlock() {
    waitForElement('#page #masthead').then(el => {
      if (!$el('#page #masthead + .trust_score_wrapp')) {
        this.insert(this.trustScoreStarsBlockHtml(), '#page #masthead', 'afterend')
      }
    })
  }
  renderHeroScheduleConsultationCallBlock() {
    const heroScheduleConsultationCallStyle = /* HTML */ `
      <style>
        #heroScheduleConsultationCallBlock .additional_txt {
          position: relative;
          font-size: 18px;
          line-height: 25px;
          text-decoration-line: underline;
          color: #2b3e51;
          margin: 0 auto;
          max-width: max-content;
        }
        #heroScheduleConsultationCallBlock .additional_txt::before {
          position: absolute;
          content: '';
          width: 85px;
          height: 90px;
          background: url(${git}/grantme/img/additional_txt_arr.svg) no-repeat center center;
          top: 5px;
          left: -92px;
          z-index: 5;
        }
        #heroScheduleConsultationCallBlock ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1000px;
          width: 100%;
          list-style: none;
          padding: 0;
          margin: 30px auto 0;
          border: 1px solid #e9f3fa;
          border-radius: 12px;
        }
        #heroScheduleConsultationCallBlock ul > li:nth-child(1) {
          width: 56%;
          background: #e9f3fa;
          padding: 30px 38px 30px 30px;
          border: 1px solid #e9f3fa;
          border-radius: 12px;
          text-align: left !important;
          display: flex;
          flex-direction: column;
        }
        #heroScheduleConsultationCallBlock ul > li:nth-child(2) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 44%;
          padding: 52px 29px 49px 38px;
        }
        #heroScheduleConsultationCallBlock .img_wrapper {
          width: 100%;
          max-width: 84px;
          max-height: 39px;
        }
        #heroScheduleConsultationCallBlock .schedule_title {
          margin: 24px 0 12px;
          letter-spacing: -0.96px;
        }
        #heroScheduleConsultationCallBlock .schedule_txt {
          font-size: 16px;
          line-height: 24px;
          color: #2b3e51;
          margin: 0 0 24px;
          max-width: 456px;
        }
        #heroScheduleConsultationCallBlock .counter_block .h1 {
          font-size: 76px;
        }
        #heroScheduleConsultationCallBlock .counter_block .counter_text {
          margin: 0 auto;
        }
        #heroScheduleConsultationCallBlock .schedule_txt.mob_var {
          display: none;
        }
        @media (max-width: 1025px) {
          #heroScheduleConsultationCallBlock .additional_txt {
            font-weight: 500;
            font-size: 16px;
            line-height: 22px;
          }
          #heroScheduleConsultationCallBlock .additional_txt::before {
            width: 55px;
            height: 71px;
            top: 4px;
            left: -61px;
            background-size: contain;
          }
          #heroScheduleConsultationCallBlock ul {
            margin: 24px auto 0;
            border: none;
            border-radius: unset;
          }
          #heroScheduleConsultationCallBlock ul > li:nth-child(1) {
            width: 100%;
            padding: 20px 18px;
            flex-wrap: wrap;
            flex-direction: initial;
          }
          #heroScheduleConsultationCallBlock ul > li:nth-child(2) {
            width: 100%;
            padding: 50px 18px 20px;
            gap: 70px;
          }
          #heroScheduleConsultationCallBlock .img_wrapper {
            max-width: 74px;
            display: inline-block;
            margin: 7px 12px 0 0;
          }
          #heroScheduleConsultationCallBlock .schedule_title {
            display: inline-block;
            margin: 0 !important;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            max-width: 210px;
          }
          #heroScheduleConsultationCallBlock .schedule_txt {
            margin: 8px 0 11px;
            max-width: 308px;
          }
          #heroScheduleConsultationCallBlock .schedule_txt.deck_var {
            display: none;
          }
          #heroScheduleConsultationCallBlock .schedule_txt.mob_var {
            display: block;
          }
        }
      </style>
    `
    const heroScheduleConsultationCallBlock = /* HTML */ `
      ${heroScheduleConsultationCallStyle}
      <div id="heroScheduleConsultationCallBlock">
        <p class="additional_txt">Not sure if it is right for you?</p>
        <ul>
          <li class="schedule_a_free_block">
            <div class="img_wrapper">
              <img src="${git}/grantme/img/our_consultants.png" alt="Our consultants" />
            </div>
            <h2 class="schedule_title">Get in touch with a program advisor today</h2>
            <p class="schedule_txt deck_var">
              Discuss your (your child) background and interests with one of our expert program advisors—they’ll help
              you figure out if a GrantMe education program is right for you.
            </p>
            <p class="schedule_txt mob_var">
              In a quick <b>15-minute call</b> with one of our expert advisors, explore whether a GrantMe education
              program suits you. <br />
              <b>Open to parents and students.</b>
            </p>
            ${this.scheduleFreeConsultationBtnHtml()}
          </li>
          <li class="counter_block">
            <div>
              <h3 class="h1 colored"><span>20,000+</span></h3>
              <p class="counter_text">Students Supported All Time</p>
            </div>
            <div>
              <h3 class="h1 colored"><span>43,000</span></h3>
              <p class="counter_text">Applications Edited Last Year</p>
            </div>
          </li>
        </ul>
      </div>
    `

    waitForElement('.counter_section .counter_wrapper.flex').then(el => {
      if (!$el('#heroScheduleConsultationCallBlock')) {
        this.insert(heroScheduleConsultationCallBlock, '.counter_section .counter_wrapper.flex', 'beforebegin')
      }
    })
  }
  reDesignTuitionSection() {
    waitForElement('.tuition_section a.btn').then(el => {
      if (!$el('.tuition_section a.btn + .schedule_a_free_link')) {
        this.insert(this.scheduleFreeConsultationBtnHtml(), '.tuition_section a.btn', 'afterend')
      }

      const newTuitionTxt =
        'Unlock university admission and funding opportunities available to students. Click the button below to book a call now!'
      if (el.previousElementSibling.textContent !== newTuitionTxt) {
        el.previousElementSibling.textContent = newTuitionTxt
      }
    })
  }
  onClickTrustScoreStarsBlocks() {
    waitForElement('.trust_score_wrapp').then(el => {
      $$el('.trust_score_wrapp').forEach(el => {
        el.addEventListener('click', e => {
          if (e.target.closest('.sticky_header')) {
            pushDataLayer(
              'exp_add_flow_trust_score_homstickyheader',
              'Trust Score',
              'Button',
              'Homepage First screen Sticky Header'
            )
          }
          if (e.target.closest('#masthead + .trust_score_wrapp')) {
            pushDataLayer('exp_add_flow_trust_score_homfirshero', 'Trust Score', 'Button', 'Homepage First screen Hero')
          }
          let coverageElem = $el('.report_card_section')
          checkScrollPosition(0, coverageElem)
        })
      })
    })
  }
  onClickScheduleFreeConsultationBtns() {
    waitForElement('.schedule_a_free_link').then(el => {
      $$el('.schedule_a_free_link').forEach(el => {
        el.addEventListener('click', e => {
          //   e.preventDefault()
          if (e.target.closest('.new_btn_burger_menu')) {
            pushDataLayer('exp_add_flow_but_menu_consultain', 'Schedule a free consultation call', 'Button', 'Menu')
          }
          if (e.target.closest('#heroScheduleConsultationCallBlock')) {
            pushDataLayer(
              'exp_add_flow_but_homprog_concall',
              'Schedule a free consultation call',
              'Button',
              'Homepage Get in touch with a program advisor today'
            )
          }
          if (e.target.closest('.tuition_section')) {
            pushDataLayer(
              'exp_add_flow_but_homsave_concall',
              'Schedule a free consultation call',
              'Button',
              'Homepage Got 15-Minutes? We’ll Save You Up To 30 Hours'
            )
          }
          if (e.target.closest('.sticky_header.is_fixed')) {
            let maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            let currentScrollHeight = window.pageYOffset.toFixed(0)
            if (this.device === 'Mobile') {
              pushDataLayer(
                'exp_add_flow_stickbut_home_concall',
                `${((currentScrollHeight / maxScrollHeight) * 100).toFixed(0)}% - Schedule a free consultation call`,
                'Sticky button ',
                'Homepage'
              )
            } else {
              pushDataLayer(
                'exp_add_flow_stick_homdesk_cancal',
                `${((currentScrollHeight / maxScrollHeight) * 100).toFixed(0)}% - Schedule a free consultation call`,
                'Sticky button ',
                'Homepage Header Desktop'
              )
            }
          }

          //   window.location.href = 'https://app.grantme.com/assessment-outcome?user_type=parent'
        })
      })
    })
  }
  onClickDifferentBtns() {
    document.addEventListener('click', function (e) {
      if (!e.target.getAttribute('data-test')) {
        const targetElement = e.target
        // console.log(targetElement, `targetElement`)
        if (targetElement.matches('.elementor-icons')) {
          pushDataLayer('exp_add_flow_but_homfirshead_menu', 'Menu', 'Button', 'Homepage First screen Header')
        }
        if (targetElement.matches('.tel_link')) {
          pushDataLayer('exp_add_flow_but_homfirshead_call', 'Call', 'Button', 'Homepage First screen Header')
        }
        if (targetElement.matches('.take_assessment_btn')) {
          pushDataLayer('exp_add_flow_but_menu_assessm', 'Take Assessment', 'Button', 'Menu')
        }
        if (targetElement.matches('.competition-section + .future_section .btn_yellow')) {
          pushDataLayer(
            'exp_add_flow_but_compet_takasse',
            'Take Assessment',
            'Button',
            'Homepage Block Leave Your Competition In The Dust'
          )
        }
        if (targetElement.matches('.top_universities_section + .future_section .btn_yellow')) {
          pushDataLayer(
            'exp_add_flow_but_stud_takasse',
            'Take Assessment',
            'Button',
            '"Homepage Block Get Into Top Universities'
          )
        }
        if (targetElement.matches('.new_btn_burger_menu .log_in_link')) {
          pushDataLayer('exp_add_flow_but_menu_login', 'Log In', 'Button', 'Menu')
        }
        if (targetElement.matches('#heroScheduleConsultationCallBlock .additional_txt')) {
          //   let coverageElem = $el('#heroScheduleConsultationCallBlock ul')
          //   console.log(`coverageElem`, coverageElem)
          //   if (this.device === 'Mobile') {
          //     checkScrollPosition(100, coverageElem)
          //   } else {
          //     checkScrollPosition(30, coverageElem)
          //   }
          pushDataLayer(
            'exp_add_flow_lin_homefirst_sure',
            'Not sure if it is right for you?',
            'Link',
            'Homepage First screen'
          )
        }
      }
      e.target.setAttribute('data-test', '1')
      setTimeout(() => {
        if (e.target.getAttribute('data-test')) {
          e.target.removeAttribute('data-test')
        }
      }, 1000)
    })
  }
  onChangeTxtTuitionSection() {
    waitForElement('.tuition_section').then(el => {
      if (el.querySelector('h2').textContent !== 'Got 15-Minutes? We’ll Save You Up To 30 Hours') {
        el.querySelector('h2').textContent = 'Got 15-Minutes? We’ll Save You Up To 30 Hours'
      }
      if (!el.querySelector('p:nth-of-type(1)').textContent.includes('15-minute')) {
        el.querySelector('p:nth-of-type(1)').textContent =
          'GrantMe offers a 15-minute complimentary initial consultation to learn about our consulting programs & pricing. You’ll also learn how you can increase your odds of getting into university, securing funding, & save more than 30 hours as you do it.'
      }
    })
  }
  onChangeTxtReviews() {
    waitForElement('p.reviews_count span').then(el => {
      if (el.textContent !== '1,620+ reviews') {
        el.textContent = '1,620+ reviews'
      }
    })
  }

  // common func
  initMainStyles() {
    const mainStyles = /* HTML */ `
      <style>
        /*hero */
        .main_section:after,
        .main_section:before {
          display: none;
        }
        .main_section {
          height: unset;
          min-height: unset;
          padding: 24px 0 0;
        }
        .main_section p {
          margin: 0;
          font-size: 18px;
          line-height: 25px;
        }
        .main_section h4 {
          margin: 0 0 40px;
          font-size: 18px;
          line-height: 25px;
          font-weight: 400;
        }
        .main_section .main_slider_hor {
          margin-bottom: 16px;
        }
        .main_section .btn_yellow {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 400px;
          width: 100%;
          height: 62px;
          font-size: 20px;
          font-weight: 700;
          line-height: 20px;
          padding: 0;
          margin: 0 auto;
        }
        .counter_section {
          padding-top: 24px;
        }
        /*tuition_section */
        .tuition_section a.btn {
          display: none;
        }
        .tuition_section p:last-of-type {
          max-width: 1000px;
          margin: 0 auto 32px;
        }
        /*counter_wrapper */
        .counter_wrapper.flex {
          display: none;
        }
        /*header */
        @media (min-width: 1024px) {
          .elementor-24572 .elementor-element.elementor-element-d790b6a {
            padding: 10px 0;
          }
          .elementor-24572 .elementor-element.elementor-element-d790b6a > .elementor-container {
            max-width: 1200px;
            width: 90%;
            align-items: center;
            justify-content: space-between;
          }
          .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
            flex: 1 0 134px;
            width: 100%;
            max-width: 134px;
            height: 40px;
          }
          .elementor-24572 .elementor-element.elementor-element-2c332a5 img {
            width: 100%;
            height: 100%;
            max-width: unset;
          }
          .elementor-24572
            .elementor-element.elementor-element-1e45e76.elementor-column.elementor-element[data-element_type='column']
            > .elementor-widget-wrap.elementor-element-populated {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .elementor-24572 .elementor-element.elementor-element-1e45e76 {
            min-width: 465px;
          }
          .elementor-24572 .elementor-element.elementor-element-4eb5bf6 {
            width: 45%;
          }
          .hfe-nav-menu__layout-horizontal .hfe-nav-menu {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
          }
          .hfe-nav-menu__layout-horizontal .hfe-nav-menu > li + li {
            margin-left: 30px;
          }
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .menu-item a.hfe-menu-item {
            padding: 0;
          }
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .menu-item a.hfe-menu-item:hover,
          .elementor-widget-heading .elementor-heading-title[class*='elementor-size-'] > a:hover,
          .sub-menu .menu-item:hover,
          .sub-menu .menu-item:hover a {
            background: unset !important;
            color: #ebbd45 !important;
            text-decoration: none !important;
          }
          .elementor-24572
            .elementor-element.elementor-element-e3c03f0
            nav.hfe-nav-menu__layout-horizontal:not(.hfe-dropdown)
            ul.sub-menu {
            margin-top: 15px;
          }
        }
        @media (max-width: 1025px) {
          /*hero */
          .main_section {
            padding-top: 19px;
          }
          .main_section h1.display {
            font-size: 36px;
            line-height: 44px;
            max-width: 300px;
            margin: 0 auto;
          }
          .main_slider_hor .h1 {
            font-size: 44px;
            line-height: 44px;
          }
          .main_section .main_slider_hor {
            margin-bottom: 12px;
          }
          .main_section .slick-vertical .slick-slide {
            margin: 0 !important;
          }
          .counter_section {
            padding-top: 20px;
          }
          .main_section h4 {
            margin-bottom: 24px;
          }
          /*tuition_section */
          .tuition_section p:last-of-type {
            max-width: 306px;
            margin: 0 auto 22px;
          }
          /*header */
          .ehf-header #masthead {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
          }
          /*burgermenu */
          .menu_open#masthead {
            height: 100vh;
            position: fixed;
            overflow-y: scroll;
            top: 0;
            left: 0;
            width: 100%;
            background: #ffffff !important;
            z-index: 100;
          }
          .menu_open#masthead .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu-icon {
            color: initial;
          }
          .menu_open#masthead .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
            display: block;
          }
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-dropdown.menu-is-active {
            padding: 36px 0 0;
            box-shadow: unset;
            border-radius: unset !important;
            border-top: 1px solid #cccccc;
            flex-direction: column;
          }
          .hfe-nav-menu #menu-item-27581 {
            border: none !important;
          }
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-dropdown.menu-is-active li.menu-item a {
            text-align: left !important;
            padding: 9px 24px !important;
          }
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu-icon {
            padding: 0;
          }
          .elementor-24572 .elementor-element.elementor-element-d790b6a {
            padding: 10px 24px;
          }
          .elementor-24572 .elementor-element.elementor-element-4eb5bf6 {
            width: 40px;
          }
          .elementor-24572 .elementor-element.elementor-element-d3b93f4 {
            width: 100%;
            max-width: 134px;
            height: 40px;
          }
          .elementor-24572 .elementor-element.elementor-element-2c332a5 img {
            width: 100%;
            max-width: 100%;
            height: 100%;
          }
          .elementor-section .elementor-container {
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
          }
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-nav-menu__toggle {
            margin: 0;
          }
          .elementor-kit-31553 h2 {
            font-size: 29px;
          }
          #hubspot-messages-iframe-container.widget-align-right {
            bottom: 75px !important;
            z-index: 99;
          }
        }
        @media only screen and (min-width: 710px) and (max-width: 1026px) {
          .main_section .main_slider_hor {
            margin-top: 0;
          }
          #heroScheduleConsultationCallBlock ul {
            flex-wrap: nowrap !important;
          }
          .tuition_section p:last-of-type {
            max-width: unset;
          }
        }
        /*
        @media (max-width: 431px) {
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-dropdown.menu-is-active {
            height: 850px;
            justify-content: space-between;
            overflow-y: scroll;
          }
        }
        @media (max-width: 391px) {
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-dropdown.menu-is-active {
            height: 770px;
          }
        }
        @media (max-width: 376px) {
          .elementor-24572 .elementor-element.elementor-element-e3c03f0 .hfe-dropdown.menu-is-active {
            height: 600px;
          }
        }
        */
      </style>
    `
    this.insert(mainStyles, 'head')
  }
  insert(html, selector, position = 'beforeend') {
    $el(selector).insertAdjacentHTML(position, html)
  }
}

class BookingPage {
  constructor(targetUrl) {
    this.targetUrl = targetUrl
    this.device = innerWidth <= 768 ? 'Mobile' : 'Desktop'
    this.newNameBtn = 'Request Consultation'
    this.init()
  }

  init() {
    const currentUrl = location.pathname

    if (currentUrl === this.targetUrl) {
      console.log(`ONLY BookingPage >>>>>`)
      this.initMainStyles()
      this.reDesignHero()
      this.addTitleFaqStart()
      this.onChangeTxtFooterBtn()
      this.onClickYellowBtns()
      this.onClickVideo()
      this.onClickSlickArrow()
      this.onClickAccordion()
      this.visibleBookingCalendar()
      this.onChangeTxtReviews()
      this.onClickTrustScoreStarsBlocks()
      this.fixIconAccordion()
      this.observerBookingSteps()

      if (this.device === 'Mobile') {
        this.replaceElement()
      }
    }
  }
  reDesignHero() {
    const titleHtml = /* HTML */ `
      <style>
        .new_hero_title {
          color: #fff;
          font-family: 'Bitter';
          font-size: 48px;
          font-weight: 600;
          line-height: 56px;
          margin: 0 0 40px;
          max-width: 510px;
        }
        .new_hero_title span {
          display: inline-block;
          position: relative;
          color: #ebbd45;
        }
        .new_hero_title span:before {
          position: absolute;
          content: '';
          background: url(/themes/custom/grantmenew2/css/features/../../images/booking/right-arrow-yellow.svg) no-repeat
            center center;
          width: 24px;
          height: 24px;
          top: 50%;
          right: -50px;
          transform: translateY(-50%);
        }
        @media (max-width: 768px) {
          .new_hero_title {
            display: none;
          }
        }
      </style>
      <h2 class="new_hero_title">Unlock Your <span>University Potential</span></h2>
    `

    waitForElement('.greetings_box').then(el => {
      if (!$el('.new_hero_title')) {
        el.insertAdjacentHTML('beforebegin', titleHtml)
      }
    })
    waitForElement('.consultation_descr_box').then(el => {
      el.querySelectorAll('.parent_child_change').forEach(el => {
        el.textContent = 'you'
      })

      el.querySelectorAll('.user_check_reference_your').forEach(el => {
        el.textContent = 'your'
      })
      el.querySelectorAll('.user_check_reference').forEach(el => {
        el.textContent = 'are'
      })
    })
    waitForElement('.calc_step_third>p>span:nth-child(1)').then(el => {
      if (el.textContent !== '15 min') {
        el.textContent = '15 min'
      }
    })

    waitForElement('.calendar').then(el => {
      $$el('.day.has-event').forEach(el => {
        el.addEventListener('click', e => {
          const parentElem = $el('.chosen_select')
          parentElem.style.opacity = '0'
          setTimeout(() => {
            waitForElement('.chosen_select div.select_custom').then(el => {
              el.click()
              setTimeout(() => {
                parentElem.style.opacity = '1'
              }, 200)
            })
          }, 100)
        })
      })
    })
  }
  observerBookingSteps() {
    waitForElement('.new_schedule .nav_steps').then(el => {
      let triggerMut = el
      let observer = new MutationObserver(() => {
        observer.disconnect()

        if (triggerMut.querySelector('svg').getAttribute('data-navsteps') === '2') {
          let txt = 'Select a Time (Duration: 15min)'
          if (this.device === 'Mobile') {
            txt = 'Select a Time (15min)'
          }
          if (triggerMut.querySelector('svg + p').textContent !== txt) {
            triggerMut.querySelector('svg + p').textContent = txt
          }
        }

        observer.observe(triggerMut, {
          childList: true,
          subtree: true
        })
      })

      observer.observe(triggerMut, {
        childList: true,
        subtree: true
      })
    })
  }
  onChangeTxtReviews() {
    waitForElement('.reviews_btn_wrapper p:last-child').then(el => {
      if (el.textContent !== '(1,620+ reviews)') {
        el.textContent = '(1,620+ reviews)'
      }
    })
  }
  replaceElement() {
    waitForElement('.what_users_say_box').then(el => {
      waitForElement('.as_seen_on_box').then(i => {
        el.after(i)
      })
    })
  }
  addTitleFaqStart() {
    const titleHtml = /* HTML */ `
      <style>
        .title_faq {
          color: #2b3e51;
          text-align: center;
          font-family: 'Bitter';
          font-size: 48px;
          font-weight: 400;
          line-height: 40px;
          letter-spacing: -0.24px;
          text-transform: capitalize;
          margin-bottom: 58px;
        }
        @media (max-width: 768px) {
          .title_faq {
            margin: 0 auto 10px !important;
            font-size: 32px !important;
            max-width: 255px;
          }
        }
      </style>
      <h2 class="title_faq">Frequently Asked Questions</h2>
    `
    waitForElement('.path-start-free-trial .faqstartfreetrial').then(el => {
      $$el('.path-start-free-trial .faqstartfreetrial').forEach(i => {
        if (!i.querySelector('.title_faq')) {
          i.insertAdjacentHTML('afterbegin', titleHtml)
        }
      })
    })
  }
  onChangeTxtFooterBtn() {
    waitForElement('.footer-start-free-trial a.btn.primary-solid-yellow').then(el => {
      if (el.textContent !== this.newNameBtn) {
        el.textContent = this.newNameBtn
      }

      el.addEventListener('click', e => {
        e.preventDefault()
        pushDataLayer(
          'exp_add_flow_but_bookcons_reque',
          'Request Consultation',
          'Button',
          'Booking page  Schedule a Complimentary Consultation'
        )
        let coverageElem = $el('#newScheduleBox')
        checkScrollPosition(0, coverageElem)
      })
    })
  }
  onClickYellowBtns() {
    waitForElement('.book_free_call_btn').then(el => {
      $$el('.book_free_call_btn')?.forEach(el => {
        el.addEventListener('click', e => {
          e.preventDefault()
          e.stopPropagation()

          if (e.target.closest('.is_fixed') || e.target.closest('.sticky_box')) {
            pushDataLayer(
              'exp_add_flow_sticbut_bookcons_bookcall',
              'Book a Free Call',
              'Sticky button ',
              'Booking page  Schedule a Complimentary Consultation'
            )
          }
          let coverageElem = $el('#newScheduleBox')
          checkScrollPosition(0, coverageElem)
        })
      })
    })
  }
  onClickSlickArrow() {
    waitForElement('.slick-arrow').then(el => {
      $$el('.slick-arrow').forEach(el => {
        el.addEventListener('click', function (e) {
          if (e.currentTarget.classList.contains('testimonials_arrow_prev')) {
            pushDataLayer(
              'exp_add_flow_but_bookcons_arrow',
              'left',
              'Button',
              'Booking page  Schedule a Complimentary Consultation'
            )
          } else {
            pushDataLayer(
              'exp_add_flow_but_bookcons_arrow',
              'right',
              'Button',
              'Booking page  Schedule a Complimentary Consultation'
            )
          }
        })
      })
    })
  }
  onClickVideo() {
    waitForElement('.testimonials_video').then(el => {
      $$el('.wistia_responsive_padding').forEach(el => {
        el.addEventListener('click', () => {
          pushDataLayer(
            'exp_add_flow_clic_bookcons_video',
            'Video',
            'Click',
            'Booking page Schedule a Complimentary Consultation'
          )
        })
      })
    })
  }
  onClickAccordion() {
    waitForElement('#accordion').then(el => {
      $$el('#accordion .panel .panel-heading a').forEach(el => {
        el.addEventListener('click', link => {
          pushDataLayer(
            'exp_add_flow_accor_bookcons_quest',
            `${link.currentTarget.textContent} - Questions`,
            'Accordion',
            'Booking page  Schedule a Complimentary Consultation'
          )
        })
      })
    })
  }
  onClickTrustScoreStarsBlocks() {
    waitForElement('.reviews_btn_wrapper').then(el => {
      $$el('.reviews_btn_wrapper').forEach(el => {
        el.addEventListener('click', e => {
          let coverageElem = $el('.what_users_say_box')
          if (this.device === 'Desktop') {
            checkScrollPosition(80, coverageElem)
          } else {
            checkScrollPosition(0, coverageElem)
          }
        })
      })
    })
  }
  fixIconAccordion() {
    waitForElement('#accordion .panel .panel-title a').then(el => {
      if ($$el('#accordion .panel .panel-title a')[3]) {
        $$el('#accordion .panel .panel-title a')[3].classList.add('collapsed')
      }
      if ($$el('#accordion .panel .panel-title a')[4]) {
        $$el('#accordion .panel .panel-title a')[4].classList.add('collapsed')
      }
    })
  }
  visibleBookingCalendar() {
    waitForElement('#newScheduleBox').then(el => {
      checkFocusTime(
        '#newScheduleBox',
        'exp_add_flow_vis_bookcons_page',
        'Booking page Schedule a Complimentary Consultation'
      )
    })
  }

  // common func
  initMainStyles() {
    const mainStyles = /* HTML */ `
      <style>
        /*header */
        .sticky_header .book_free_call_btn {
          display: flex !important;
          max-width: 164px;
        }
        .reviews_btn_wrapper p:last-child {
          text-decoration: underline !important;
        }
        /*hero */
        .greetings_box,
        .consultation_descr_box h2 {
          display: none;
        }
        .consultation_descr_box {
          padding: 24px 32px 24px 24px;
          margin: 0;
        }
        body .consultation_descr_box > div + div,
        body .consultation_descr_box > div.no_commitments_wrapper {
          margin-top: 24px;
        }
        body .consultation_descr_box > div h3 {
          font-size: 24px !important;
          font-weight: 600 !important;
          line-height: 36px !important;
          margin-bottom: 12px !important;
        }
        body .consultation_descr_box > div ul {
          list-style: none;
        }
        body .consultation_descr_box > div ul li {
          position: relative;
          padding-left: 15px;
        }
        body .consultation_descr_box > div ul li::before {
          position: absolute;
          content: '';
          width: 7px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
        body .consultation_descr_box > div ul li + li {
          margin-top: 16px;
        }
        .our_consultants_wrapper > p:before {
          background: url(${git}/grantme/img/telephone_blue.svg) no-repeat center center;
        }
        .new_schedule_box > h2 {
          margin: 0 auto;
          max-width: 358px;
        }
        .path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center {
          max-width: 590px;
        }
        .chosen_select {
          transition: all 250ms cubic-bezier(0.4, 0, 1, 1);
        }
        /*as_seen_on_box */
        body .as_seen_on_box h2 {
          margin-bottom: 43px !important;
        }
        /* what_users_say_box*/
        .what_users_say_box {
          padding-top: 0;
        }
        .what_users_say_box h2 {
          margin-bottom: 36px;
        }
        .testimonials_arrows {
          margin-bottom: 0;
        }
        /* faqstartfreetrial*/
        .path-start-free-trial .faqstartfreetrial {
          padding: 100px 0;
        }
        .path-start-free-trial .faqstartfreetrial .panel-group {
          margin: 0;
        }
        /*competition-section  */
        .competition-section {
          display: none;
        }
        /*footer */
        .footer-start-free-trial h2 {
          padding-top: 97px;
        }
        .footer-start-free-trial > p {
          padding-top: 32px;
        }
        @media only screen and (min-width: 768px) and (max-width: 1199px) {
          .path-schedule-consultation
            .block-schedule-consulation-header
            #scholarshipListContent
            .academy-waiting-left
            * {
            text-align: left;
          }
          .navbar-default .region.region-navigation {
            width: 100%;
          }

          .container_video.container {
            max-width: 912px;
            width: 100%;
          }
        }
        @media only screen and (min-width: 768px) and (max-width: 1080px) {
          .new_hero_title {
            font-size: 39px !important;
          }
          .new_hero_title span:before {
            right: -35px;
          }
        }
        @media (max-width: 768px) {
          .path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent .academy-waiting {
            display: flex;
            flex-direction: column-reverse;
          }
          .new_schedule_box {
            background: #2b3e51;
            padding: 24px 16px;
          }
          .new_schedule_box > h2,
          .new_schedule_box .new_schedule_descr span {
            color: #fff;
          }
          .new_schedule_box .new_schedule_descr span:before {
            background: url(${git}/grantme/img/dollar_yellow.svg) no-repeat center center;
          }
          .new_schedule_box .new_schedule_descr span:nth-child(2):before {
            background: url(${git}/grantme/img/clock_yellow.svg) no-repeat center center;
          }
          .new_schedule_box .new_schedule_descr span:nth-child(3):before {
            background: url(${git}/grantme/img/zoom_yellow.svg) no-repeat center center;
          }
          body .our_consultants_wrapper h3 {
            color: #fff !important;
          }
          .our_consultants_wrapper .path-start-free-trial #scholarshipListContent .academy-waiting p,
          body .our_consultants_wrapper > p a,
          .our_consultants_wrapper > p,
          .our_consultants_wrapper > div p {
            color: #fff !important;
          }
          .row.academy-waiting > .col-lg-5.academy-waiting-left {
            padding: 0px 16px 24px;
          }
          .our_consultants_wrapper > p:before {
            background: url(/themes/custom/grantmenew2/css/features/../../images/booking/telephone-yellow.svg) no-repeat
              center center;
          }
          body .consultation_descr_box > div h3 {
            font-size: 18px !important;
            font-weight: 700 !important;
            line-height: 24px !important;
          }
          body .consultation_descr_box > div ul li {
            color: #ccc;
          }
          body .consultation_descr_box > div ul {
            padding: 0 0 0 5px;
          }
          body .consultation_descr_box > div ul li::before {
            top: 10px;
            transform: unset;
          }
          body .consultation_descr_box > div ul li span {
            color: #fff;
          }
          body .consultation_descr_box > div ul li + li {
            margin-top: 8px;
          }
          .what_users_say_box {
            padding: 40px 16px 0;
          }
          .what_users_say_box h2 {
            margin-bottom: 20px;
          }
          .as_seen_on_box {
            padding: 40px 16px 0;
          }
          body .as_seen_on_box h2 {
            margin-bottom: 17px !important;
          }
          .reviews_btn_box {
            display: none;
          }
          .path-start-free-trial .faqstartfreetrial {
            padding: 21px 0;
          }
          .footer-start-free-trial h2 {
            padding-top: 47px;
          }
          .footer-start-free-trial > p {
            padding-top: 32px;
            max-width: 360px;
            margin: 0 auto;
          }
        }
      </style>
    `
    this.insert(mainStyles, 'head')
  }
  insert(html, selector, position = 'beforeend') {
    $el(selector).insertAdjacentHTML(position, html)
  }
}

new HomePage('/')
new BookingPage('/assessment-outcome')
