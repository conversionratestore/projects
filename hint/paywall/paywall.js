const $$el = (selector) => document.querySelectorAll(selector)
const $el = (selector) => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/hint/paywall/imgs'

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

// clarity script
const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'palmistry: Paywall improvements', 'variant_1')
  }
}, 1000)

// block visibility function
const blockVisibility = (selector, viewTime, event, location) => {
  let v1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          v1.unobserve(item.target)
          setTimeout(function () {
            v2.observe(item.target)
          }, 1000 * viewTime)
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  let v2 = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        pushDataLayer(
          event || `view_element_${item.target.id}`,
          'Element visibility',
          `View element on screen (${viewTime} sec or more)`,
          location || item.target.id
        )
        v1.unobserve(item.target)
      } else {
        v1.observe(item.target)
      }
      v2.unobserve(item.target)
    })
  })

  document.querySelectorAll(selector).forEach((item) => {
    v1.observe(item)
  })
}

const blockVisibilityTimer = (selector, viewTime, event, location) => {
  let v1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          let startTime = new Date()
          localStorage.setItem(selector, startTime)
        } else {
          finishTime = new Date().getTime()
          if (localStorage.getItem(selector)) {
            startTime = new Date(localStorage.getItem(selector)).getTime()
            localStorage.removeItem(selector)
            let time = (finishTime - startTime) / 1000
            if (time >= viewTime) {
              pushDataLayer(
                event || `view_element_${item.target.id}`,
                `Focus time ${time} sec`,
                `View element on screen`,
                location || item.target.id
              )
            }
          }
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  document.querySelectorAll(selector).forEach((item) => {
    v1.observe(item)
  })
}

let startInterval = setInterval(function () {
  if (window.location.href.includes('/palmistry/paywall') && $el('[class*="footerButton"] [class*="button"]')) {
    clearInterval(startInterval)
    start()
  }
}, 100)

function start() {
  const style = /* html */ `
<style class="crs_style_block">
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  border-width: 1px;
}
[class*="footerButton"] [class*="button"] {
  padding: 7px 10px;
  line-height: 1.2;
  min-width: unset;
  min-height: unset;
  flex-shrink: 0;
  width: fit-content;
}
[class*="footerButton"] {
  padding: 12px 20px;
  width: 100%;
  gap: 8px;
}
footer[class*="styles_footer"] {
  border-top: none;
  padding-top: 0;
}
[class*="timerCustomStyles"] {
  font-size: 14px;
  color: #4A567A;
  font-family: 'SF Pro Text';
  display: block;
  line-height: 1.3;
}
[class*="timerCustomStyles"]>span {
  font-size: 14px;
  color: #066FDE;
  font-weight: 700;
  display: inline-block;
  line-height: 1.3;
}
[class*="styles_contentWrapper"] {
  padding: 0;
}
section[class*="styles_welcome"],
section[class*="styles_payment"],
section[class*="styles_moneyBack"],
section[class*="styles_hands"],
section[class*="styles_zodiac"],
section[class*="styles_personalPlan"],
section[class*="styles_nextButtonWrapper"],
section[class*="styles_reviews"],
section[class*="styles_experts"],
[class*="styles_logosWrapper"], 
[class*="styles_emailHeader"] {
  display: none;
}
.crs_new_content h2 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #121620;
  text-align: center;
}
.crs_new_content h1 {
  font-size: 30px;
  font-weight: 700;
  color: #121620;
}
.crs_new_content h1 b, .crs_new_content h2 b {
  font-weight: 700;
  color: #066FDE;
}
.crs_new_content .flex {
  display: flex;
  justify-content: start;
  align-items: center;
}
.crs_new_content img {
  max-width: 50vw;
}
.crs_new_content .crs_btn {
  border-radius: 8px;
  background: #066FDE;
  color: #fff;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
  padding: 18px 24px;
  width: 100%;
  cursor: pointer;
  border: none;
}
.crs_new_content section {
  padding: 0 20px;
}
.crs_trusted {
  justify-content: space-between;
  column-gap: 12px;
  margin: 12px 0;
}
.crs_trusted>img {
  width: 44px;
}
.crs_trusted p {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #4A567A;
}
.crs_trusted>p:first-of-type b {
  font-weight: 500;
  color: #066FDE;
} 
.crs_trusted>p:last-child {
  font-size: 12px;
  color: #121620;
  border-radius: 30px;
  border: 1px solid #DEE5F9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-left: auto;
  column-gap: 2px;
}
.crs_main {
  padding: 0 !important;
  margin-bottom: 30px;
}
.crs_main h1 {
  padding: 20px;
  border-top: 1px solid #DEE5F9;
}
.crs_main h1+div {
  position: relative;
  padding-left: 20px;
  padding-bottom: 26px;
}
.crs_main h1+div>.img {
  position: absolute;
  bottom: -2px;
  right: 0;
}
.crs_main h1+div>.img::after {
  content: '';
  position: absolute;
  height: 50px;
  width: 50px;
  background: url(${git}/chat_main.svg) center center no-repeat;
  background-size: contain;
  top: 10px;
  left: 12px;
}
.crs_main h1+div p:first-of-type {
  width: 235px;
  font-size: 20px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 12px;
  padding-top: 20px;
  border-top: 1px solid #DEE5F9;
}
.crs_main h1+div p:last-of-type {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: #4A567A;
  width: 60%;
}
.crs_main h1+div p:last-of-type b {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: #066FDE;
}
.crs_main .crs_btn {
  width: calc(100% - 40px);
  margin: 0 auto;
  display: block;
}
.crs_main_info {
  padding: 10px 20px;
  justify-content: space-between;
  border-top: 1px solid #DEE5F9;
  border-bottom: 1px solid #DEE5F9;
  margin-bottom: 25px;
}
.crs_main_info p {
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: #121620;
}
.crs_main_info img {
  width: 106px;
}
.crs_main_info+p, .crs_main .crs_btn+p {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #121620;
  display: flex;
  justify-content: center;
  align-items: center;;
  margin-bottom: 12px;
}
.crs_main_info+p img {
  width: 34px;
  height: 34px;
  margin-right: 14px;
}
.crs_main_info+p span {
  color: #066FDE;
}
.crs_main .crs_btn+p {
  column-gap: 7px;
  margin: 12px 0;
}
.crs_money_back {
  align-items: start !important;
  padding: 12px 20px;
  background-color: #EFF2FD;
  column-gap: 12px;
}
.crs_money_back img {
  width: 35px;
  height: 35px;
}
.crs_money_back p {
  font-size: 14px;
  line-height: 1.4;
  color: #121620;
}
.crs_money_back p b {
  font-weight: 700;
  color: #066FDE;
  display: inline-block;
  margin-bottom: 6px;
}
.crs_how_work ul li {
  display: flex;
  column-gap: 12px;
  align-items: start;
  position: relative;
  margin-bottom: 24px;
}
.crs_how_work ul li span {
  display: block;
  width: 35px;
  height: 35px;
  background-color: #DEE5F9;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  flex-shrink: 0;
}
.crs_how_work ul li p {
  font-size: 14px;
  line-height: 1.4;
  color: #4A567A;
}
.crs_how_work ul li p b {
  font-size: 18px;
  line-height: 1.44;
  font-weight: 700;
  color: #066FDE;
  display: inline-block;
  margin-bottom: 6px;
}
.crs_how_work ul li span::after {
  content: '';
  position: absolute;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.crs_how_work ul li:first-child span::after,
.crs_how_work ul li:nth-child(2) span::after {
  background: url(${git}/check.svg) center center no-repeat;
}
.crs_how_work ul li:nth-child(3) span::after {
  background-color: #066FDE;
  border-radius: 50%;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
}
.crs_how_work ul li:last-child span::after {
  border-radius: 50%;
  background-color: #fff;
}
.crs_how_work ul li:not(:last-child)::before {
  position: absolute;
  content: '';
  width: 3px;
  height: calc(100% - 22px);
  top: 41px;
  left: 16px;
  border-radius: 10px;
  background-color: #066FDE;
}
.crs_how_work ul li:nth-child(3)::before {
  background-color: #DEE5F9;
}
.crs_what_included {
  margin-top: 30px;
}
.crs_what_included ul {
  padding: 16px;
  background-color: #EFF2FD;
  border-radius: 10px;
  border: 1px solid #DEE5F9;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}
.crs_what_included ul li {
  display: flex;
  column-gap: 8px;
  align-items: center;
}
.crs_what_included ul li span {
  display: block;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  flex-shrink: 0;
}
.crs_what_included ul li p {
  font-size: 16px;
  color: #121620;
  line-height: 1.4;
}
.crs_palms {
  margin-top: 30px;
}
.crs_palms ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 12px;
  margin-bottom: 25px;
}
.crs_palms ul li {
  width: 100%;
  display: flex;
  border-radius: 8px;
  border: 1px solid #DEE5F9;
  padding: 16px 16px 16px 0;
}
.crs_palms ul li img {
  flex-shrink: 0;
}
.crs_palms ul li:nth-child(2n) {
  padding: 16px 0 16px 16px;
}
.crs_palms ul li p {
  padding-left: 17px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  position: relative;
  color: #4A567A;
}
.crs_palms ul li p b {
  font-weight: 600;
  color: #066FDE;
}
.crs_palms ul li .crs_info p:not(:last-child) {
  margin-bottom: 8px;
}
.crs_palms ul li p::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #DEE5F9;
  border-radius: 50%;
  left: 0;
  top: 4px;
}
.crs_palms ul li p::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #066FDE;
  border-radius: 50%;
  left: 3px;
  top: 7px;
}
.crs_reviews {
  margin-top: 30px;
}
.crs_reviews h2 {
  margin-bottom: 36px;
}
.crs_reviews ul {
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  margin-bottom: 25px;
}
.crs_reviews ul li {
  width: calc(100% - 10px);
  display: flex;
  column-gap: 5px;
  background-color: #EFF2FD;
  border-radius: 8px;
  padding: 16px;
  position: relative;
  margin-left: 10px;
}
.crs_reviews ul li:nth-child(2n) {
  margin-left: 0;
  margin-right: 10px;
}
.crs_reviews ul li .img {
  position: relative;
  width: 95px;
  aspect-ratio: 1/1.2;
  border-radius: 9px;
  overflow: hidden;
  top: -26px;
  left: -26px;
  flex-shrink: 0;
}
.crs_reviews ul li:nth-child(2n) .img {
  left: auto;
  right: -26px;
}
.crs_reviews ul li .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.crs_reviews ul li::after {
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  background: url(${git}/quote.svg) center center no-repeat;
  background-size: contain;
  top: -16px;
  right: 16px;
}
.crs_reviews ul li:nth-child(2n)::after {
  right: auto;
  left: 16px;
}
.crs_review p {
  font-size: 12px;
  color: #4A567A;
  line-height: 1.3;
  margin-bottom: 6px;
}
.crs_review p b {
  font-weight: 700;
  color: #121620;
  display: inline-block;
  margin-bottom: 6px;
}
.crs_review span {
  color: #121620;
  font-size: 12px;
  font-weight: 500;
}
.crs_as_seen {
  margin: 30px 0;
}
.crs_as_seen img {
  width: 100%;
  max-width: 100%;
}
</style>
`
  const content = /* html */ `
<div class="crs_new_content">
<section class="crs_trusted flex">
  <img src="${git}/space.png" alt="space">
  <p>The #1 Astrology app trusted by over <b>25 million</b> people.</p>
  <p class="star">
    <img src="${git}/star.svg" alt="star">
    5.0
  </p>
</section>
<section class="crs_main">
  <h1>Your Palm Reading<br><b>Is Ready</b>!</h1>
  <div>
    <p>“I’ve just received your palm scan results.<br>Let’s discuss!”</p>
    <p><b>Akho</b> 6 years in palmistry readings and spiritual guidance.</p>
    <div class="img">
      <img src="${git}/main.png" alt="Akho">
    </div>
  </div>
  <div class="crs_main_info flex">
    <p>Choose from 80+ palm readers and astrologers.</p>
    <img src="${git}/other.png" alt="other">
  </div>
  <p><img src="${git}/infinity.svg" alt="info">Unlimited chats with a&nbsp;<span>palm reader</span></p>
  <button class="crs_btn">Get My Prediction</button>
  <p><img src="${git}/people.svg" alt="people">776 people joined today</p>
  <div class="crs_money_back flex">
    <img src="${git}/money_back.svg" alt="money back">
    <p>
      <b>100% Money-back guarantee</b><br>
      If you don’t notice any progress after using the app for at least a week, we are ready to makea complete refund within 14 days.
    </p>
  </div>
</section>
<section class="crs_how_work">
  <h2>How does Hint work?</h2>
  <ul>
    <li>
      <span></span>
      <p>
        <b>Send us your palm scan</b><br>
        We analyze your palm lines to get Hints about your future
      </p>
    </li>
    <li>
      <span></span>
      <p>
        <b>Your palm reading is generated</b><br>
        One of our professional palm readers puts together a report filled with Hints about your future
      </p>
    </li>
    <li>
      <span></span>
      <p>
        <b>Start your trial to receive your prediction</b><br>
        Once you're a Hint member, we'll be able to send over your prediction report so you can begin living a better life.
      </p>
    </li>
    <li>
      <span></span>
      <p>
        <b>Talk with a palm reading specialist anytime:</b><br>
        Get the ongoing support you need by discussing your readings, personal horoscopes, and compatibilities with our expert palm reader and astrologist support team.
      </p>
    </li>
  </ul>
  <button class="crs_btn">Begin Trial Now</button>
</section>
<section class="crs_what_included">
  <h2>What's included?</h2>
  <ul>
    <li>
      <span><img src="${git}/hand.svg" alt="hand"></span>
      <p><b>Unlimited</b> palm readings</p>
    </li>
    <li>
      <span><img src="${git}/chat.svg" alt="chat"></span>
      <p><b>1:1 live chats</b> with professional astrologers</p>
    </li>
    <li>
      <span><img src="${git}/puzzle.svg" alt="puzzle"></span>
      <p><b>Daily compatibility</b> readings</p>
    </li>
    <li>
      <span><img src="${git}/lamp.svg" alt="lamp"></span>
      <p>Cosmic <b>relationship tips</b></p>
    </li>
    <li>
      <span><img src="${git}/schedule.svg" alt="schedule"></span>
      <p><b>Daily horoscopes</b></p>
    </li>
  </ul>
</section>
<section class="crs_palms">
  <h2>What do your <b>palms</b><br>say about you?</h2>
  <ul>
    <li>
      <img src="${git}/palm1.svg" alt="palm1">
      <div class="crs_info">
        <p><b>Love line</b> shows your attitude to love and the quality of love</p>
        <p>A long thumb indicates good fortune</p>
      </div>
    </li>
    <li>
      <div class="crs_info">
        <p><b>Head line</b> reflects your intelligence and mentality</p>
        <p>A long index finger indicates a natural leader</p>
      </div>
      <img src="${git}/palm2.svg" alt="palm1">
    </li>
    <li>
      <img src="${git}/palm3.svg" alt="palm1">
      <div class="crs_info">
        <p><b>Life line</b> defines the quality of your life and what you will achieve</p>
        <p>A short middle finger reveals a free spirit</p>
      </div>
    </li>
    <li>
      <div class="crs_info">
        <p><b>Fate line</b> represents your material achievement and career goals</p>
        <p>A short ring finger reveals that a person tends to take risk</p>
      </div>
      <img src="${git}/palm4.svg" alt="palm1">
    </li>
    <li>
      <img src="${git}/palm5.svg" alt="palm1">
      <div class="crs_info">
        <p>A short little finger indicates the person's lack of self-confidence</p>
      </div>
    </li>
  </ul>
  <button class="crs_btn">Discover More</button>
</section>
<section class="crs_reviews">
  <h2>Why does everyone love <b>Hint</b>?</h2>
  <ul>
    <li>
      <div class="img">
        <img src="${git}/review1.jpg" alt="review1">
      </div>
      <div class="crs_review">
        <p><b>“It’s changed my life!”</b><br>
        I'm thankful for this app and Akho! She's an excellent palm reader and astrologer—clear, thorough, and reassuring. I eagerly look forward to more sessions with her!
        </p>
        <span>Rebecca Bauman</span>
      </div>
    </li>
    <li>
      <div class="crs_review">
        <p><b>“After years of seeking, I’ve finally found a true love.”</b><br>
        I was hesitant about whether it was really worth trying, but now I have no regrets and I'm enjoying my new relationships!
        </p>
        <span>Mika Ryan</span>
      </div>
      <div class="img">
        <img src="${git}/review2.jpg" alt="review2">
      </div>
    </li>
    <li>
      <div class="img">
        <img src="${git}/review3.jpg" alt="review3">
      </div>
      <div class="crs_review">
        <p><b>“I’ve found a job I really enjoy”</b><br>
        Thanks to Vladana, I've finally discovered a clue about what my life's purpose really is and what kind of job resonates with me better!
        </p>
        <span>Amanda Holmes</span>
      </div>
    </li>
  </ul>
  <button class="crs_btn">Become a Hint Success Story!</button>
</section>
<section class="crs_as_seen">
  <h2><b>Hint</b> As Seen In</h2>
  <img src="${git}/logos.png" alt="logos">
</section>
</div>
`
  document.body.insertAdjacentHTML('afterbegin', style)
  $el('[class*=styles_contentWrapper]').insertAdjacentHTML('afterbegin', content)
  $el('[class*="footerButton"] [class*="button"]').innerText = 'Get My Prediction'
  $el('[class*="timerCustomStyles"]').insertAdjacentHTML('afterbegin', 'Your Personilized Offer Reserved&nbsp;')
  $$el('.crs_btn').forEach((item) => {
    item.addEventListener('click', () => {
      $el('[class*="footerButton"] [class*="button"]').click()
    })
  })
  setVisibilityHandler()
  setEventListeners()
  const mut = new MutationObserver(() => {
    if (!window.location.href.includes('/palmistry/paywall')) {
      $el('.crs_style_block')?.remove()
    } else {
      if (!$el('.crs_style_block')) {
        document.body.insertAdjacentHTML('afterbegin', style)
      }
      if (!$el('.crs_new_content')) {
        $el('[class*=styles_contentWrapper]').insertAdjacentHTML('afterbegin', content)
        $el('[class*="footerButton"] [class*="button"]').innerText = 'Get My Prediction'
        if (!$el('[class*="timerCustomStyles"]').innerText.includes('Your Personilized')) {
          $el('[class*="timerCustomStyles"]').insertAdjacentHTML('afterbegin', 'Your Personilized Offer Reserved&nbsp;')
        }
        $$el('.crs_btn').forEach((item) => {
          item.addEventListener('click', () => {
            $el('[class*="footerButton"] [class*="button"]').click()
          })
        })
        setVisibilityHandler()
        setEventListeners()
      }
    }
  })
  mut.observe(document.body, {
    childList: true,
    subtree: true
  })
  function setVisibilityHandler() {
    blockVisibility('.crs_main', 2, 'exp_palm_v_fs_gmp', 'first screen')
    blockVisibility('.crs_how_work', 2, 'exp_palm_v_hdhw_btn', 'How does Hint work')
    blockVisibility('.crs_palms', 2, 'exp_palm_v_wdypsay_dm', 'What do your palms say about you')
    blockVisibility('.crs_reviews', 2, 'exp_palm_v_wdelh_bhss', 'Why does everyone love Hint')
    blockVisibility('.crs_as_seen', 2, 'exp_palm_v_asi', 'As Seen In')
    blockVisibility('[class*=styles_footerButton]', 2, 'exp_palm_v_yp_yp', 'Your personilized')
    blockVisibilityTimer('.crs_how_work', 2, 'exp_palm_v_hdhw_ft', 'How does Hint work')
    blockVisibilityTimer('.crs_what_included', 2, 'exp_palm_v_wi_wi', 'Whats included')
    blockVisibilityTimer('.crs_palms', 2, 'exp_palm_v_wdypsay_ft', 'What do your palms say about you')
    blockVisibilityTimer('.crs_reviews', 2, 'exp_palm_v_wdelh_ft', 'Why does everyone love Hint')
  }
  function setEventListeners() {
    $el('.crs_main .crs_btn').addEventListener('click', () => {
      pushDataLayer('exp_palm_b_fs_gmp', 'Get my prediction', 'Button', 'first screen')
    })
    $el('.crs_how_work .crs_btn').addEventListener('click', () => {
      pushDataLayer('exp_palm_b_hdhw_btn', 'Begin Trial Now', 'Button', 'How does Hint work')
    })
    $el('.crs_palms .crs_btn').addEventListener('click', () => {
      pushDataLayer('exp_palm_b_wdypsay_dm', 'Discover More', 'Button', 'What do your palms say about you')
    })
    $el('.crs_reviews .crs_btn').addEventListener('click', () => {
      pushDataLayer('exp_palm_b_wdelh_bhss', 'Become a Hint Success Story!', 'Button', 'Why does everyone love Hint')
    })
    $el('[class*=styles_footerButton]').addEventListener('click', () => {
      pushDataLayer('exp_palm_b_yp_gmp', 'Get My Prediction', 'Button', 'Your personilized')
    })
  }
}
