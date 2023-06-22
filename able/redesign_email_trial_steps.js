// -------------------------------------
// CONSTANTS & CSS
// -------------------------------------
const WAIT_INTERVAL_TIMEOUT = 100
const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/able/img'
const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'

const styleCSS = /*html*/`
  <style>

    #buttonDiv {
      display: flex;
      justify-content: center;
    }

    .crs_block {
      font-family: 'SF Pro Text', sans-serif;
    }

    .crs_block[hidden="true"],
    .crs_block[hidden] {
      display: none !important;
    }

    .crs_block p,
    .crs_block span,
    .crs_block a,
    .crs_block h2,
    .crs_block h3,
    .crs_block h4,
    .crs_block h5 {
      margin: 0;
    }

    .trial_step,
    .email_step {
      padding: 24px;
    }

    .trial_step h3,
    .email_step h3 {
      font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.004em;
      color: #010101;
    }

    .email_step h4 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #010101;

      margin: 12px 0 24px;
    }

    .email_step h5 {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #010101;
    }

    .email_step ul {
      padding: 0;
      margin: 0;
      list-style: none;
      margin: 16px 0 24px;
    }

    .email_step ul li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    .email_step ul li img {
      margin-right: 12px;
    }

    .email_step ul li span {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.0024em;
      color: #202B47;
    }

    #email_wrapper {
      display: flex;
      flex-direction: column;
    }

    #email_wrapper input {
      position: relative;
      border: none;
      outline: none;
      background: #F6F6F6;
      border-radius: 8px;
      padding: 19px 16px;
      margin-top: 6px;
      border: none;
      border-radius: 8px;
      background-size: 100% 2px;
      background-repeat: no-repeat;
      background-position: bottom 0 center;
      font-family: 'SF Pro Text', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }

    #email_wrapper input:focus {
      background-image: linear-gradient(#423BE6, #423BE6);
    }

    #email_wrapper p {
      visibility: hidden;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: right;
      color: #FF4D2B;
      margin-top: 4px;
    }

    .trial_step button,
    #email_wrapper button {
      width: 100%;
      border: none;
      margin-top: 24px;
      background: #C5C5D1;
      border-radius: 8px;
      font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      color: #FFFFFF;
      padding: 11px;
      cursor: pointer;
    }

    #email_wrapper button {
      margin-top: 8px;
    }

    #email_wrapper.invalid input {
      background-image: linear-gradient(#FF4D2B, #FF4D2B);
    }

    #email_wrapper.invalid p {
      visibility: visible;
    }

    #email_wrapper.valid input {
      background-image: none;
    }

    #email_wrapper.valid button {
      background: #EB731A;
    }

    #email_wrapper.valid button:hover,
    .trial_step button:hover {
      background: #CA5010;
    }

    p.acknowledge {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #5E626B;
      margin: 16px 0 24px;
      text-align: center;
    }

    .acknowledge a {
      color: #1375D6;
    }

    .security {
      display: flex;
      gap: 12px;
      align-items: start;
      padding: 16px;
      background: #E0E6F7;
      border-radius: 12px;
    }

    .security p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
    }

    .trial_step {
      position: relative;
      justify-content: space-between;
    }

    .trial_step h3,
    .trial_step p {
      margin: 0;
    }

    .trial_step .heading {
      display: flex;
      gap: 12px;
    }

    .trial_step .content {
      margin-bottom: 24px;
    }

    .trial_step .content p {
      margin-top: 12px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #5E626B;
    }

    .trial_step .content p span {
      color: #EB731A;
    }

    p.choose {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #010101;
      margin-bottom: 16px;
    }

    .prices {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .prices>div {
      width: 22.5%;
      max-width: 120px;
      background: #E8F5FD;
      border-radius: 6px;
      padding: 21px 10px;
      text-align: center;
      /* transition: all 0.5s ease; */
      cursor: pointer;
    }

    .prices>div:hover {
      background: #B7E3FF;
    }

    .prices>div.active_price {
      background: #1375D6;
    }

    .prices>div span {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;
      color: #010101;
    }

    .prices>div.active_price span {
      color: #FFFFFF;
    }


    .most_popular {
      position: relative;
    }

    .most_popular>div {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      width: 100%;
      text-align: center;
    }

    .most_popular>div p {
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #4A4A4A;
    }

    .most_popular>div img {
      display: block;
      margin: 0 auto;
    }

    .support {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 16px;
      background: #FFE9D2;
      border-radius: 12px;
      max-width: 80%;
      margin-top: 42px;
    }

    .support p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #010101;
    }

    .support .currle_arrow {
      position: absolute;
      left: calc(100% + 8px);
      bottom: 80%;
    }

    .trial_step button {
      background: #EB731A;
    }

    .stars {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      margin-top: 16px;
    }

    .stars p {
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: #010101;
    }

    .divider {
      display: flex;
      align-items: center;
      margin: 12px 0;
    }

    .line {
      flex-grow: 1;
      height: 1px;
      background-color: #E0E3EB;
    }

    .or {
      padding: 0 20px;
    }

    .or span{
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #010101;
    }

    @media only screen and (min-width: 769px) {
      body.grayBg {
        background: #F6F6F6;
      }

      .trial_step {
        max-width: 820px;
        margin: 40px auto 0;
        background: #FFFFFF;
        border-radius: 24px;
        padding: 40px;
      }

      .trial_step .heading {
        justify-content: center;
      }

      .trial_step .heading img{
        height: 40px;
        width: 40px;
      }

      .trial_step .heading h3{
        font-size: 40px;
        line-height: 50px;
        margin-bottom: 12px;
      }

      .trial_step .content p {
        font-size: 16px;
        line-height: 20px;
      }

      .trial_step .content {
        margin-bottom: 32px;
      }

      p.choose {
        text-align: center;
        font-size: 24px;
        line-height: 34px;
        letter-spacing: normal;
        margin-bottom: 24px;
        font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
      }

      .support_wrapper {
        position: relative;
      }

      .support {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 273px;
        transform: translateX(70%);
        margin-top: 14px;
      }

      .support img{
        width: 40px;
        height: 37px;
      }

      .support p{
        color: #202B47;
      }

      .support .currle_arrow {
        position: absolute;
        left: 0;
        bottom:calc(100% + 17px);
        transform: rotate(270deg);
      }

      .bottom {
        text-align: center;
      }

      .trial_step button {
        margin-top: 80px;
        max-width: 288px;
      }

      .trial_step .circles_bottom {
        transform: rotate(90deg);
        left: auto;
        right: calc(100% - 55px);
        top: auto;
        bottom: 25px;
      }

      .email_step {
        max-width: 1030px;
        margin: 40px auto 0;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .email_step h2 {
        font-family: 'SF Pro Display', 'SF Pro Text', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 50px;
        color: #010101;
        margin-bottom: 40px;
      }

      .email_step .left {
        height: fit-content;
        padding: 50px;
        border: 1px solid #E0E3EB;
        border-radius: 12px 0 0 12px;
        border-right: none;
      }

      .email_step .right {
        position: relative;
        min-width: 49%;
        max-width: 505px;
        padding: 40px;
        background: #fff;
        border-radius: 12px;
      }

      .email_step ul li img {
        width: 48px;
        height: 48px;
        margin-right: 16px;
      }

      .email_step ul li span {
        font-size: 16px;
        line-height: 20px;
      }

      .circles_top,
      .circles_bottom {
        position: absolute;
        right: -31px;
        z-index: -1;
      }

      .circles_top {
        top: 25px;
        left: calc(100% - 31px);
      }

      .circles_bottom {
        top: auto;
        bottom: -15px;
        left: calc(100% - 67px);
      }
    }

    @media only screen and (max-width: 1237px) {
      .email_step .circles_top,
      .email_step .circles_bottom {
        display: none;
      }
    }

    @media only screen and (max-width: 1105px) {
      .trial_step .circles_top,
      .trial_step .circles_bottom {
        display: none;
      }
    }

    @media only screen and (min-width: 770px) and (max-width: 1175px) {
      .support {
        transform: translateX(25%);
      }

      .support .currle_arrow {
        left: 43%;
      }
    }
  </style>
`

// -------------------------------------
// HTML ELEMENTS
// -------------------------------------
const emailPage = /*html*/`
<div class="email_step crs_block" hidden="true">
    <h3>What email would you like to use to access your program?</h3>
    <h4>We’ve created a personalized program to help you reach your goal of losing 10 kg</h4>
    <h5>You’ll get:</h5>
    <ul>
      <li>
        <img src="${IMAGE_DIR_URL}/get1.svg">
        <span>Science-backed weight loss program tailored to your needs and goals</span>
      </li>
      <li>
        <img src="${IMAGE_DIR_URL}/get2.svg">
        <span>Unlimited 1-on-1 video and text support from your coach</span>
      </li>
      <li>
        <img src="${IMAGE_DIR_URL}/get3.svg">
        <span>Customized diet [and exercise plan] tailored to your weight and lifestyle</span>
      </li>
      <li>
        <img src="${IMAGE_DIR_URL}/get4.svg">
        <span>The accountability tools you'll need to live our program and build life-long health.</span>
      </li>
    </ul>
    <div id="email_wrapper" class="${localStorage.email ? 'valid' : ''}" ${localStorage.email ? sendValidBtnEvent() : ''}>
      <label for="email">Your e-mail</label>
      <input type="email" placeholder="e-mail@gmail.com" value="${localStorage.email ? localStorage.email : ''}" />
      <p>Please enter correct email.</p>
      <button>Continue</button>
      <div class="divider">
        <div class="line"></div>
        <div class="or"><span>OR</span></div>
        <div class="line"></div>
      </div>
      <div id="buttonDiv"></div>
    </div>
    <p class="acknowledge">By clicking "Continue" you acknowledge that you have read, understood, and accepted Able’s <a
        href="https://help.ableapp.com/en/articles/5590061-eula" target="_blank" rel="noreferrer nofollow">Terms of
        Use</a> and <a href="https://help.ableapp.com/en/articles/5590060-privacy-notice" target="_blank"
        rel="noreferrer nofollow">Privacy Policy</a>.</p>
    <div class="security">
      <img src="${IMAGE_DIR_URL}/security.svg" alt="security">
      <p>We take data security seriously. Your email address will never be shared with third parties or spam.</p>
    </div>
  </div>
`
const emailPageDesktop = /*html*/`
  <div class="email_step crs_block" hidden="true">
    <div class="left">
      <h2>You’ll get:</h2>
      <ul>
        <li>
          <img src="${IMAGE_DIR_URL}/get1.svg">
          <span>Science-backed weight loss program tailored to your needs and goals</span>
        </li>
        <li>
          <img src="${IMAGE_DIR_URL}/get2.svg">
          <span>Unlimited 1-on-1 video and text support from your coach</span>
        </li>
        <li>
          <img src="${IMAGE_DIR_URL}/get3.svg">
          <span>Customized diet [and exercise plan] tailored to your weight and lifestyle</span>
        </li>
        <li>
          <img src="${IMAGE_DIR_URL}/get4.svg">
          <span>The accountability tools you'll need to live our program and build life-long health.</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <h3>What email would you like to use to access your program?</h3>
      <h4>We’ve created a personalized program to help you reach your goal of losing 10 kg</h4>
      <div id="email_wrapper" class="${localStorage.email ? 'valid' : ''}">
        <label for="email">Your e-mail</label>
        <input type="email" placeholder="e-mail@gmail.com" value="${localStorage.email ? localStorage.email : ''}" />
        <p>Please enter correct email.</p>
        <button>Continue</button>
        <div class="divider">
        <div class="line"></div>
        <div class="or"><span>OR</span></div>
        <div class="line"></div>
      </div>
      <div id="buttonDiv"></div>
      </div>
      <p class="acknowledge">By clicking "Continue" you acknowledge that you have read, understood, and accepted Able’s
        <a href="https://help.ableapp.com/en/articles/5590061-eula" target="_blank" rel="noreferrer nofollow">Terms of
          Use</a> and <a href="https://help.ableapp.com/en/articles/5590060-privacy-notice" target="_blank"
          rel="noreferrer nofollow">Privacy Policy</a>.
      </p>
      <div class="security">
        <img src="${IMAGE_DIR_URL}/security.svg" alt="security">
        <p>We take data security seriously. Your email address will never be shared with third parties or spam.</p>
      </div>
      <img class="circles_top" src="${IMAGE_DIR_URL}/email_circles_top.svg" alt="">
      <img class="circles_bottom" src="${IMAGE_DIR_URL}/email_circles_bottom.svg" alt="">
    </div>
  </div>
`
const trialPage = /*html*/`
<div class="trial_step crs_block" hidden="true">
    <div class="top">
      <div class="heading">
        <img src="${IMAGE_DIR_URL}/trial_try.svg" alt="">
        <h3>Try Able for 1 week</h3>
      </div>
      <div class="content">
        <p>We've helped thousands of people reach their weight-loss objectives, and we'd want to share our
          <span>tried-and-true methods with you nearly for free.</span>
        </p>
        <p>Money shouldn’t stand in the way of finding a plan that finally works, especially in light of the global
          health crisis.</p>
        <p><span>It costs us $18.37 to offer you a 7-day trial</span>, but please select an option that works best for
          you.</p>
      </div>
      <p class="choose">Choose a price for your 7-day trial</p>
      <div class="prices">
        <div><span>$0.50</span></div>
        <div class="most_popular active_price">
          <span>$5</span>
          <div>
            <p>Most popular</p>
            <img src="${IMAGE_DIR_URL}/underline.svg" alt="">
          </div>
        </div>
        <div><span>$10</span></div>
        <div><span>$18.43</span></div>
      </div>
      <div class="support_wrapper">
      <div class="support">
        <img src="${IMAGE_DIR_URL}/heart_hand.svg" alt="">
        <p>Your trial fee will directly support 200+ Able coaches</p>
        <img class="currle_arrow" src="${IMAGE_DIR_URL}/curle_arrow.svg" alt="">
      </div>
      </div>
      
    </div>
    <div class="bottom">
      <button>Next</button>
      <div class="stars">
        <img src="${IMAGE_DIR_URL}/stars.svg" alt="">
        <p><b>4.7/5</b> by <b>15000+</b> Happy Customers</p>
      </div>
    </div>
    <img class="circles_top" src="${IMAGE_DIR_URL}/email_circles_top.svg" alt="">
    <img class="circles_bottom" src="${IMAGE_DIR_URL}/email_circles_bottom.svg" alt="">
  </div>
`
// -------------------------------------
// FUNCTIONS
// -------------------------------------
const waitForElm = (selector) => {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
  })
}

let observerMap = {}

const checkVisibilityAfterMs = (elSelector, eventsObj) => {
  let timer
  const config = {
    root: null,
    threshold: 0.6,
  }

  if (observerMap[elSelector]) {
    observerMap[elSelector].disconnect() // Disconnect previous observer
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        timer = setTimeout(() => {
          observer.disconnect()
          sendGAEvent(eventsObj)
        }, 2000)
      } else {
        clearTimeout(timer)
      }
    })
  }, config)

  observer.observe(document.querySelector(elSelector))
  observerMap[elSelector] = observer

  console.log(observerMap)
}

// Function to disconnect all observers
const disconnectAllObservers = () => {
  for (const key in observerMap) {
    observerMap[key].disconnect()
  }
  observerMap = {}
}

function sendGAEvent(obj) { // Send a Google Analytics event
  window.dataLayer = window.dataLayer || []
  dataLayer.push(obj)

  console.log(obj)
}

function sendValidBtnEvent() {
  sendGAEvent({
    'event': 'event-to-ga4',
    'event_name': 'exp_move_email_cont',
    'event_desc': 'Continue',
    'event_type': 'Button',
    'event_loc': 'Step What email would you like'
  })
}

const setEmailValue = (isGoogle = false) => {
  const clientInput = document.querySelector('.mainContent-0-2-1 input')
  const myInput = document.querySelector('#email_wrapper input')

  let lastValue = clientInput.value
  clientInput.value = myInput.value
  let inputEvent = new Event('input', { bubbles: true })
  // hack React15
  inputEvent.simulated = true
  // hack React16
  let tracker = clientInput._valueTracker
  if (tracker) {
    tracker.setValue(lastValue)
  }
  clientInput.dispatchEvent(inputEvent)

  if (isGoogle) {
    sendValidBtnEvent()
  }

  sendGAEvent({
    'event': 'event-to-ga4',
    'event_name': 'exp_move_email_fs_what_email',
    'event_desc': 'Form submit',
    'event_type': 'Form submit',
    'event_loc': 'Step What email would you like'
  })

  document.getElementById('email_wrapper').classList.add('valid')
  document.querySelector('.mainContent-0-2-1 button')?.click()
}

/* email */
const setEmailPageLogic = () => {
  const emailWrapper = document.getElementById('email_wrapper')
  const myInput = emailWrapper.querySelector("input")
  const myButton = emailWrapper.querySelector("button")
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/

  let typingTimer
  const delay = 1000 // Adjust the delay as desired (in milliseconds)

  myInput.addEventListener('input', () => {
    clearTimeout(typingTimer) // Clear the previous typing timer

    typingTimer = setTimeout(() => {
      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_einput',
        'event_desc': 'Your email',
        'event_type': 'Input',
        'event_loc': 'Step What email would you like'
      })

      if (myInput.value.length > 0) {
        if (emailPattern.test(myInput.value)) {
          emailWrapper.classList.add('valid')
          emailWrapper.classList.remove('invalid')

          sendValidBtnEvent()
        } else {
          emailWrapper.classList.add('invalid')
          emailWrapper.classList.remove('valid')

          sendGAEvent({
            'event': 'event-to-ga4',
            'event_name': 'exp_move_email_err',
            'event_desc': 'Validation error',
            'event_type': 'Input',
            'event_loc': 'Step What email would you like'
          })
        }
      }
      else {
        emailWrapper.classList.remove('invalid')
        emailWrapper.classList.remove('valid')
      }
    }, delay)
  })

  myButton.addEventListener('click', () => {
    if (myInput.value.length === 0) {
      emailWrapper.classList.add('invalid')
      myInput.focus()

      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_err',
        'event_desc': 'Validation error',
        'event_type': 'Input',
        'event_loc': 'Step What email would you like'
      })
    } else if (emailWrapper.classList.contains('invalid')) {
      myInput.focus()
    } else {
      setEmailValue()
    }
  })

  const waitForGoogleBtn = setInterval(() => {
    if (
      document.getElementById("buttonDiv")
      && document.querySelector('#email_wrapper button')
      && document.querySelector('.mainContent-0-2-1 input')
      && (typeof google !== 'undefined' && google?.accounts?.id?.initialize && google?.accounts?.id?.renderButton)
    ) {
      clearInterval(waitForGoogleBtn)

      google.accounts.id.initialize({
        client_id: '861160216721-ffluipsg8tgi9b9avi2oq6bl1d7oqnap.apps.googleusercontent.com',
        callback: handleCredentialResponse
      })
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
          theme: "filled_black",
          size: "large",
          locale: 'en',
          text: 'continue_with',
          width: document.querySelector('#email_wrapper button').clientWidth,
          click_listener: onClickHandler
        }  // customization attributes
      )
      // google.accounts.id.prompt() // also display the One Tap dialog
    }
  }, WAIT_INTERVAL_TIMEOUT)
}

function onClickHandler() {
  sendGAEvent({
    'event': 'event-to-ga4',
    'event_name': 'exp_move_email_google',
    'event_desc': 'Continue with Google',
    'event_type': 'Button',
    'event_loc': 'Step What email would you like to use to access your program?'
  })
}

let isEmailLogicAdded = false

const showEmailOnPage = async () => {
  if (DEVICE === 'desktop') {
    document.body.classList.add('grayBg')
  }

  const waitForElements = setInterval(async () => {
    if (
      document.querySelector('.mainContent-0-2-1 button')
      && document.querySelector('.mainContent-0-2-1 input')
      && document.querySelector('.security')
    ) {
      clearInterval(waitForElements)

      if (!document.querySelector('.trial_step')?.hidden) {
        document.querySelector('.trial_step').hidden = true
      }

      document.querySelector('.mainContent-0-2-1').hidden = true
      document.querySelector('.email_step').hidden = false

      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_vis_will_get',
        'event_desc': 'You will get',
        'event_type': 'View element on screen',
        'event_loc': 'Step What email would you like'
      })

      checkVisibilityAfterMs('.email_step ul', {
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_vis_will_get',
        'event_desc': 'You will get',
        'event_type': 'View element on screen',
        'event_loc': 'Step What email would you like'
      })

      checkVisibilityAfterMs('.security', {
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_vis_we_take',
        'event_desc': 'We take data security seriously.',
        'event_type': 'View element on screen',
        'event_loc': 'Step What email would you like'
      })

      checkVisibilityAfterMs('#email_wrapper input', {
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_vis_einput',
        'event_desc': 'Your email',
        'event_type': 'View element on screen',
        'event_loc': 'Step What email would you like'
      })

      if (!isEmailLogicAdded) {
        isEmailLogicAdded = true
        setEmailPageLogic()
      }
    }
  }, WAIT_INTERVAL_TIMEOUT)
}

/* trial */
let isTrailLogicAdded = false

const setTrialPageLogic = () => {
  const prices = document.querySelectorAll('.prices > div')

  prices.forEach((price, index) => {
    price.addEventListener('click', () => {
      document.querySelector('.active_price').classList.remove('active_price')
      price.classList.add('active_price')

      document.querySelectorAll('header + div button')[index].click()

      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_price',
        'event_desc': 'Choose a price for your 7-day trial',
        'event_type': document.querySelectorAll('header + div button')[index].innerText,
        'event_loc': 'Step Try Able for 1 week'
      })
    })
  })

  document.querySelector('.trial_step button').addEventListener('click', () => {
    sendGAEvent({
      'event': 'event-to-ga4',
      'event_name': 'exp_move_email_next_try_week',
      'event_desc': 'Next',
      'event_type': document.querySelector('.active_price')?.innerText,
      'event_loc': 'Step Try Able for 1 week'
    })

    document.querySelectorAll('header + div button')[4].click()
  })
}

const showTrialOnPage = async () => {
  if (DEVICE === 'desktop') {
    document.body.classList.add('grayBg')
  }

  const waitForElements = setInterval(async () => {
    if (
      document.querySelectorAll('header + div button')[4]
      && document.querySelectorAll('.prices > div')[3]
      && document.querySelector('.trial_step button')
    ) {
      clearInterval(waitForElements)

      if (!document.querySelector('.email_step')?.hidden) {
        document.querySelector('.email_step').hidden = true
      }

      document.querySelector('header + div').hidden = true
      document.querySelector('.trial_step').hidden = false

      sendGAEvent({
        'event': 'event-to-ga4',
        'event_name': 'exp_move_email_vis_screen_try_week',
        'event_desc': 'Try Able for 1 week',
        'event_type': 'View screen',
        'event_loc': 'Step Try Able for 1 week'
      })

      if (!isTrailLogicAdded) {
        setTrialPageLogic()

        isTrailLogicAdded = true
      }
    }
  }, WAIT_INTERVAL_TIMEOUT)
}

function handleCredentialResponse(response) {
  const jwt = response.credential

  // Decode the JWT ID token
  const base64Url = jwt.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  // Parse the JSON payload and retrieve the email
  const payload = JSON.parse(jsonPayload)
  const email = payload.email

  document.querySelector('#email_wrapper input').value = email

  setEmailValue(true)
}

// -------------------------------------
// MAKE DOM CHANGES
// -------------------------------------
const scriptTag = document.createElement('script')
scriptTag.src = 'https://accounts.google.com/gsi/client'
scriptTag.async = true
scriptTag.defer = true

document.body.appendChild(scriptTag)

document.head.insertAdjacentHTML('afterend', styleCSS)

waitForElm('#root').then(async (root) => {
  // Add pages to the DOM
  if (DEVICE === 'desktop') {
    root.insertAdjacentHTML('afterend', emailPageDesktop)
  } else {
    root.insertAdjacentHTML('afterend', emailPage)
  }

  root.insertAdjacentHTML('afterend', trialPage)

  if (window.location.pathname === '/email') {
    // waitForElm('.email_step').then(() => showEmailOnPage())
    await waitForElm('.email_step')
    showEmailOnPage()
  }
  if (window.location.pathname === '/trial-pay') {
    await waitForElm('.trial_step')
    showTrialOnPage()
  }

  /* Run mutation for page recognition */
  const globalMut = new MutationObserver(async () => {
    globalMut.disconnect()

    if (window.location.pathname === '/email') {
      showEmailOnPage()
    } else if (window.location.pathname === '/trial-pay') {
      showTrialOnPage()
    } else {
      document.querySelector('.grayBg')?.classList.remove('grayBg')

      if (document.querySelector('.mainContent-0-2-1')?.hidden) {
        document.querySelector('.mainContent-0-2-1').hidden = false
      }

      if (!document.querySelector('.email_step')?.hidden) {
        document.querySelector('.email_step').hidden = true
      }

      if (!document.querySelector('.trial_step')?.hidden) {
        document.querySelector('.trial_step').hidden = true
      }

      if (Object.entries(observerMap).length > 0) {
        console.log('Disconnecting all observers...')
        disconnectAllObservers()
      }
    }

    globalMut.observe(root, {
      childList: true,
      subtree: true
    })
  })
  globalMut.observe(root, {
    childList: true,
    subtree: true
  })
})

sendGAEvent({
  'event': 'event-to-ga4',
  'event_name': 'exp_discount_after_payment_attempt_load',
  'event_desc': 'loaded'
})
