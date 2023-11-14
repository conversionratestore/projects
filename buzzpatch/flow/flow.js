console.log('%c EXP: Flow', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')
const git = 'https://conversionratestore.github.io/projects/buzzpatch/flow/img'

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

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'addit_flow', 'variant_1')
  }
}, 1000)

function scrollToElement(selector) {
  const element = document.querySelector(selector)
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition - 100
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round((endShow - startShow) / 1000)
        entry.target.removeAttribute('data-startShow')
        pushDataLayer(event, timeShow, 'Visibility', location)
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}

const questions = [
  {
    q: 'Who do you buy the stickers for?',
    a: ['My kids', 'A whole family']
  },
  {
    q: 'How many children do you have?',
    a: ['One (1)', 'Two (2)', 'Three or more (3+)']
  },
  {
    q: 'How frequently are your children spending time outdoors?',
    a: ['2-3 days per week', '4-5 days per week', 'Every day']
  },
  {
    q: 'Are you planning a vacation shortly?',
    a: ['Yes', 'No']
  }
]

const tableResult = [
  [
    1,
    1,
    1,
    2,
    'I want my kid to enjoy outdoor activities without worrying about mosquitoes.',
    '2 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    1,
    1,
    1,
    1,
    'I want my kid to have a blast during our upcoming family vacation without mosquito bites.',
    '2 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    1,
    1,
    2,
    2,
    'I want my active kid to enjoy outdoor activities without worrying about mosquitoes.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    1,
    1,
    2,
    1,
    'I want my active kid to have a blast during our upcoming family vacation without mosquito bites.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    1,
    1,
    3,
    2,
    'I want my active kid to enjoy outdoor activities without worrying about mosquitoes.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    1,
    1,
    3,
    1,
    'I want my active kid to have a blast during our upcoming family vacation without mosquito bites.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    1,
    2,
    1,
    2,
    'I want my kids to enjoy outdoor activities without worrying about mosquitoes.',
    '3 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    1,
    2,
    1,
    1,
    'I want my kids to have a blast during our upcoming family vacation without mosquito bites.',
    '3 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    1,
    2,
    2,
    2,
    'I want my active kids to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    1,
    2,
    2,
    1,
    'I want my active kids to have a blast during our upcoming family vacation without mosquito bites.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    1,
    2,
    3,
    2,
    'I want my active kids to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    1,
    2,
    3,
    1,
    'I want my active kids to have a blast during our upcoming family vacation without mosquito bites.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    1,
    3,
    1,
    2,
    'I want my kids to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    1,
    3,
    1,
    1,
    'I want my kids to have a blast during our upcoming family vacation without mosquito bites.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    1,
    3,
    2,
    2,
    'I want my active kids to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    1,
    3,
    2,
    1,
    'I want my active kids to have a blast during our upcoming family vacation without mosquito bites.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    1,
    3,
    3,
    2,
    'I want my active kids to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    1,
    3,
    3,
    1,
    'I want my active kids to have a blast during our upcoming family vacation without mosquito bites.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    2,
    1,
    1,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '2 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    2,
    1,
    1,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '2 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    2,
    1,
    2,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    2,
    1,
    2,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    2,
    1,
    3,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    2,
    1,
    3,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '3 Packs',
    'Perfect for a whole family with 1 kid'
  ],
  [
    2,
    2,
    1,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '3 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    2,
    2,
    1,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '3 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    2,
    2,
    2,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    2,
    2,
    2,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    2,
    2,
    3,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    2,
    2,
    3,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '4 Packs',
    'Perfect for a whole family with 2 kids'
  ],
  [
    2,
    3,
    1,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    2,
    3,
    1,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    2,
    3,
    2,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    2,
    3,
    2,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    2,
    3,
    3,
    2,
    'I want my family to enjoy outdoor activities without worrying about mosquitoes.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ],
  [
    2,
    3,
    3,
    1,
    'I want our family to stay mosquito-free during our upcoming vacation.',
    '4 Packs',
    'Perfect for a whole family with 3 kids'
  ]
]

const imgSrc = [
  'https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Buzzpatch2Pack_ae163f6d-b6f9-479c-9269-5801afd721c2.jpg?v=1695091289',
  'https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Buzzpatch3Pack_e1e07768-24b3-494b-924e-0fb4aa559d2a.jpg?v=1695091293',
  'https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Buzzpatch4Pack_d9ecb845-1c16-40c3-abe5-feabc2a49798.jpg?v=1695091294'
]

class Flow {
  constructor() {
    this.answers = []
    this.step = 1
    this.init()
  }

  init() {
    this.addStyles()
    this.createFlow()
    this.drawBlocks()
    this.setHandlers()
    this.visibilityHAndlers()
  }

  addStyles() {
    const style = /*html*/ `
      <style>
        .crs_flow {
          padding: 0 15px;
          margin: 0 auto 20px;
        }
        .crs_flow_wrapper, .crs_flow_result {
          display: none;
          border: 1px solid #E2E2E2;
          border-radius: 12px;
          padding: 20px 24px;
        }
        .crs_flow_result {
          padding: 20px 16px;
        }
        .crs_flow_wrapper.active, .crs_flow_result.active {
          display: block;
        }
        .crs_flow h2 {
          font-weight: 400;
          width: 100%;
          text-align: center;
          font-size: 36px;
          line-height: 40px;
          color: #0C0B0B;
          font-family: 'DINEngschrift LT', sans-serif;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .crs_progress_line {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 20px;
          position: relative;
        }
        .crs_progress_line .line {
          position: absolute;
          width: 100%;
          height: 6px;
          border-radius: 20px;
          background: #E2E2E2;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          z-index: -1;
        }
        .crs_progress_line .line p {
          width: 20%;
          height: 100%;
          background: #FF3C81;
          border-radius: 20px;
          display: block;
        }
        .crs_progress_line span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #E2E2E2;
          color: #515151;
          font-size: 18px;
          line-height: 20px;
        }
        .crs_progress_line span.active {
          color: #fff;
          background: #FF3C81;
        }
        .crs_question {
          display: block;
          text-align: left;
          color: #0C0B0B;
          font-family: 'DINEngschrift LT', sans-serif;
          font-size: 24px !important;
          line-height: 24px !important;
          letter-spacing: 0.12px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .crs_answers {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .crs_answers label {
          display: flex;
          gap: 8px;
          align-items: center;
          position: relative;
          margin-bottom: 0;
        }
        .crs_answers label input {
          position: absolute;
          top: 0;
          left: 0;
          height: 1px;
          width: 1px;
          opacity: 0;
        }
        .crs_answers label input + span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #c9c9c9;
          position: relative;
        }
        .crs_answers label input:checked + span {
          border-color: #FCBC4D;
        }
        .crs_answers label input:checked + span::before {
          position: absolute;
          content: '';
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #FCBC4D;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .crs_answers label p {
          color: #515151;
          font-size: 16px !important;
          font-weight: 500;
          line-height: 24px !important;
          letter-spacing: 0.08px;
          margin-bottom: 0;
        }
        .crs_answers label input:checked + span + p {
          color: #0C0B0B;
          font-weight: 600;
        }
        .crs_btns {
          display: flex;
          gap: 16px;
          margin-top: 30px;
        }
        .crs_btns .crs_next {
          width: 100%;
          border-radius: 500px;
          background: #FF3C81;
          box-shadow: 0px 4px 15px 0px rgba(72, 67, 69, 0.51);
          padding: 18px 10px 10px;
          color: #fff;
          font-family: 'DIN Condensed', sans-serif;
          font-size: 25px;
          font-weight: 700;
          text-transform: uppercase;
          border: none;
          line-height: 1;
          outline: none;
        }
        .crs_btns .crs_prev {
          display: none;
          height: 44px;
          width: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          border: 2px solid #FF3C81;
          flex-shrink: 0;
          outline: none;
        }

        .crs_request, .crs_questions {
          display: none;
        }
        .crs_request.show, .crs_questions.show {
          display: block;
        }
        .crs_request.active {
          display: block;
        }
        .crs_request .crs_title {
          color: #0C0B0B;
          text-align: center;
          font-family: 'DINEngschrift LT', sans-serif;
          font-size: 32px !important;
          line-height: 32px !important;
          letter-spacing: 0.16px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .crs_request .crs_title + p {
          color: var(--Text, #212529);
          text-align: center;
          font-family: 'Roboto', sans-serif;
          font-size: 18px !important;
          line-height: 26px !important;
          letter-spacing: 0.09px;
          margin-bottom: 0;
        }
        .crs_flow_result .crs_title {
          color: #0C0B0B;
          text-align: center;
          font-family: 'DINEngschrift LT', sans-serif;
          font-size: 24px !important;
          line-height: 24px !important;
          letter-spacing: 0.12px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .crs_pack_info {
          display: flex;
          align-items: start;
          gap: 8px;
          margin-bottom: 24px;
          border-radius: 6px;
          border: 1px solid #ECEEF0;
          background: #FFF;
          box-shadow: 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
          padding: 12px;
          position: relative;
        }
        .crs_pack_info .crs_pack_img {
          width: 75px;
          aspect-ratio: 1/1;
          border-radius: 3px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid #ECEEF0;
        }
        .crs_pack_info .crs_pack_img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .crs_pack_info .crs_pack_text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex-grow: 1;
        }
        .crs_pack_info .crs_pack_text p:first-of-type {
          color: #0C0B0B;
          font-family: 'DINEngschrift LT', sans-serif;
          font-size: 20px !important;
          line-height: 110% !important;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          margin-bottom: 0;
        }
        .crs_pack_info .crs_pack_text p:nth-of-type(2) {
          color: #6F6F6F;
          font-size: 13px !important;
          line-height: 20px !important;
          margin-bottom: 0;
          letter-spacing: 0;
        }
        .crs_pack_info .crs_pack_text p:last-of-type {
          margin-bottom: 0;
          display: flex;
          gap: 4px;
        }
        .crs_pack_info .crs_pack_text p:last-of-type {
          color: #0C0B0B;
          font-size: 14px !important;
          line-height: 130% !important;
        }
        .crs_pack_labels {
          position: absolute;
          top: 8px;
          right: 8px;
        }
        .crs_pack_labels span {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          line-height: 12px !important;
          text-transform: uppercase;
          font-family: 'DINEngschrift LT', sans-serif;
          border-radius: 3px;
          padding: 6px 10px;
        }
        .crs_pack_labels span.save {
          font-size: 16px;
          letter-spacing: 0.96px;
          background-color: #FF3C81;
          padding: 4px 10px;
          margin-bottom: 4px;
        }
        .crs_pack_labels span.top {
          font-size: 12px;
          letter-spacing: 0.72px;
          background-color: #202020;
        }
        .crs_pack_info + p {
          color: #0C0B0B;
          text-align: center;
          font-family: 'DINEngschrift LT', sans-serif;
          font-size: 24px !important;
          line-height: 24px !important;
          letter-spacing: 0.12px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .crs_flow_result ul {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E2E2E2;
          margin-bottom: 16px;
          padding-left: 0;
        }
        .crs_flow_result li {
          width: 100%;
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .crs_flow_result li>div {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #FF3C81;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          flex-shrink: 0;
        }
        .crs_flow_result li>div img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .crs_flow_result li p {
          color: #212529;
          font-size: 14px !important;
          line-height: 18px !important;
          letter-spacing: 0.08px;
          margin-bottom: 0;
        }
        .crs_flow_result li b {
          display: block;
          font-weight: 700;
        }
        .crs_shipping p {
          width: 100%;
          color: #212529;
          text-align: center;
          font-size: 14px !important;
          font-weight: 600;
          line-height: 130% !important;
          text-transform: capitalize;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0;
          justify-content: center;
        }
        .crs_shipping p:first-of-type {
          margin-bottom: 8px;
        }
        .crs_buy_btns {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .crs_buy_now {
          width: 100%;
          font-size: 24px !important;
          line-height: 24px !important;
          letter-spacing: 0.3px;
          text-transform: uppercase;
          color: #fff;
          font-family: 'DIN Condensed', sans-serif;
          padding: 24px 16px 16px;
          border-radius: 30px;
          background: #FF3C81;
          border: none;
        }
        .crs_buy_btns a {
          color: #0C0B0B;
          text-align: center;
          font-family: 'DINEngschrift LT', sans-serif;
          font-size: 20px;
          line-height: 22px;
          letter-spacing: 0.1px;
          text-decoration-line: underline;
          text-transform: uppercase;
        }
      </style>
    `

    document.head.insertAdjacentHTML('beforeend', style)
  }

  createFlow() {
    const block = /*html*/ `
      <div class="crs_flow">
        <h2>How many stickers<br>do you need?</h2>
        <div class="crs_flow_wrapper active">
          <div class="crs_questions show" data-step="1">
            <div class="crs_progress_line">
              <div class="line">
                <p></p>
              </div>
              <span class="active">1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
            <p class="crs_question"></p>
            <div class="crs_answers"></div>
          </div>
          <div class="crs_request">
            <p class="crs_title">
              Does it sound<br>familiar?
            </p>
            <p>
              "I want my kid to enjoy outdoor activities without worrying about mosquitoes."
            </p>
          </div>
          <div class="crs_btns">
            <button class="crs_prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                <path d="M8 1L1 8L8 15" stroke="#FF3C81" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="crs_next">Next</button>
          </div>
        </div>
        <div class="crs_flow_result">
          <p class="crs_title">based on the results, your<br>perfect match is...</p>
          <div class="crs_pack_info">
            <div class="crs_pack_img">
              <img src="${imgSrc}" alt="pack">
            </div>
            <div class="crs_pack_text">
              <p>$12.00/pack</p>
              <p>3 Packs | 180 stickers</p>
              <p>$36.00</p>
            </div>
            <div class="crs_pack_labels">
              <span class="save">save 45%</span>
              <span class="top">top seller</span>
            </div>
          </div>
          <p>And that’s why:</p>
          <ul>
            <li>
              <div><img src="${git}/list1.svg" alt="icon"></div>
              <p><b>Perfect for a whole family with 1 kid</b>1 month of everyday use</p>
            </li>
            <li>
              <div><img src="${git}/list2.svg" alt="icon"></div>
              <p><b>100% Natural</b>Safe for kids of all ages</p>
            </li>
            <li>
              <div><img src="${git}/list3.svg" alt="icon"></div>
              <p><b>Effective for 12h</b>Forget about reapplying during day</p>
            </li>
            <li>
              <div><img src="${git}/list4.svg" alt="icon"></div>
              <p><b>Easy to use</b>Goes on clothes, not skin</p>
            </li>
          </ul>
          <div class="crs_shipping">
            <p><img src="${git}/delivery.svg" alt="icon">Free shipping worldwide</p>
            <p><img src="${git}/guaranteed.svg" alt="icon">Guaranteed to Work or It’s Free!</p>
          </div>
          <div class="crs_buy_btns">
            <button class="crs_buy_now">Buy now</button>
            <a href="#getNow">discover all packs</a>
          </div>
        </div>
      </div>
    `

    document.querySelector('section.effectiveness').insertAdjacentHTML('beforebegin', block)
    document.querySelector('#purchase').insertAdjacentHTML('afterend', block)
  }

  drawBlocks() {
    const step = this.step
    const qBlock = $('.crs_question')
    const aBlock = $('.crs_answers')

    if (step == 1) {
      $('.crs_prev').css('display', 'none')
    } else {
      $('.crs_prev').css('display', 'flex')
    }

    if (step < 5) {
      $('.crs_questions').addClass('show')
      $('.crs_request').removeClass('show')
      $('.crs_next').text('Next')
      qBlock.text(questions[this.step - 1].q)
      let answers = ''
      questions[this.step - 1].a.forEach((item, index) => {
        answers += /*html*/ `
        <label>
          <input type="radio" name="q${this.step}" value="${index + 1}">
          <span></span>
          <p>${item}</p>
        </label>
      `
      })

      aBlock.html(answers)
      $('.crs_answers').eq(1).find('input').attr('name', `copy_q${this.step}`)
      let index = 0
      if (this.answers.length > 0 && this.answers.length === this.step) {
        index = this.answers[this.answers.length - 1] - 1
      }
      aBlock.find('input').eq(index).attr('checked', true)
      aBlock.find('[name*=copy]').eq(index).attr('checked', true)
      this.drawProgress()
    }

    if (step === 5) {
      $('.crs_questions').removeClass('show')
      $('.crs_request').addClass('show')
      $('.crs_next').text('that’s my request')
      let result = tableResult.filter(
        el =>
          el[0] === this.answers[0] &&
          el[1] === this.answers[1] &&
          el[2] === this.answers[2] &&
          el[3] === this.answers[3]
      )[0]
      $('.crs_request p:last-of-type').text(`“${result[4]}”`)
      $('.crs_flow_result ul>li:first-of-type b').text(result[6])

      let packs = +result[5].split(' ')[0]
      $('.js-packs').each((index, item) => {
        if ($(item).text().includes(result[5])) {
          $(item).find('input').click()
          $('.crs_pack_text p:first-of-type').text(`${$(item).find('label span').text().split(' ')[0]}/pack`)
          const price = $('#getNow .prices .js-total').text().split('\n')[0]
          const save = $('#getNow .prices .js-total .ps').text()
          $('.crs_pack_text p:last-of-type').text(price)
          $('.crs_pack_info .save').text(`save ${save}%`)
        }
      })

      $('.crs_pack_text p:nth-of-type(2)').text(`${packs} Packs | ${packs * 60} stickers`)
      if (packs === 2) {
        $('.crs_pack_labels .top').css('display', 'none')
      } else if (packs === 4) {
        $('.crs_pack_labels .top').text('best price')
      }

      $('.crs_pack_info img').attr('src', imgSrc[packs - 2])

      console.log(this.answers)
      console.log(result)
    }

    if (step === 6) {
      $('.crs_flow_wrapper').removeClass('active')
      $('.crs_flow_result').addClass('active')
      let p = tableResult
        .filter(
          el =>
            el[0] === this.answers[0] &&
            el[1] === this.answers[1] &&
            el[2] === this.answers[2] &&
            el[3] === this.answers[3]
        )[0][5]
        .split(' ')[0]
      $('.crs_buy_now').on('click', e => {
        pushDataLayer(
          'exp_addit_flow_but_based_buy',
          `Buy now - ${p} packs`,
          'Button',
          'Based on the results, your perfect match is...'
        )
        this.buyProduct(p)
      })
    }
  }

  setHandlers() {
    const next = $('.crs_next')
    const prev = $('.crs_prev')

    next.on('click', e => {
      const value = +$(e.target).closest('.crs_flow_wrapper').find('input:checked').val()
      const text = $(e.target).closest('.crs_flow_wrapper').find('input:checked').siblings('p').text()
      if (this.answers.length === 1 && this.step === 1) {
        this.answers = []
      }
      this.answers.push(value)
      this.step++
      this.drawBlocks()
      pushDataLayer(
        'exp_addit_flow_but_whodoyou_nex',
        `Next - ${text}`,
        'Button',
        `Who do you buy the stickers for? Step ${this.step - 1}`
      )
    })

    prev.on('click', e => {
      this.step--
      this.drawBlocks()
      this.answers.pop()
      pushDataLayer(
        'exp_addit_flow_arrow_howmany_stick',
        `Back arrow - Step ${this.step + 1}`,
        'Button',
        'How many stickers do you need?'
      )
    })

    $('.crs_buy_btns a').on('click', e => {
      const packs = $('.crs_pack_text p:nth-of-type(2)').text().split(' |')[0]
      e.preventDefault()
      pushDataLayer(
        'exp_addit_flow_link_based_discov',
        `Discover all packs - ${packs}`,
        'Link',
        'Based on the results, your perfect match is...'
      )
      scrollToElement('#getNow')
    })
  }

  drawProgress() {
    const pl = $('.crs_progress_line')
    pl.each((index, item) => {
      $(item)
        .find('span')
        .each((index, item) => {
          if (index <= this.step - 1) {
            $(item).addClass('active')
          } else {
            $(item).removeClass('active')
          }
        })
    })

    const line = $('.crs_progress_line .line p')
    switch (this.step) {
      case 1:
        line.css('width', '20%')
        break
      case 2:
        line.css('width', '45%')
        break
      case 3:
        line.css('width', '70%')
        break
      case 4:
        line.css('width', '100%')
        break
      default:
        break
    }
  }

  buyProduct(pack) {
    const productsList = ['41797704745004', '41797704777772', '41797704810540']
    window.location.href = `/cart/${productsList[pack - 2]}:1`
  }

  visibilityHAndlers() {
    checkFocusTime(
      '.transparent+.crs_flow .crs_flow_wrapper',
      'exp_addit_flow_vis_howmany_focstic',
      'Before the button GET BuzzPatch How many stickers do you need?'
    )
    checkFocusTime(
      '.transparent+.crs_flow .crs_flow_result',
      'exp_addit_flow_vis_based_focus',
      'Before the button GET BuzzPatch Based on the results, your perfect match is...'
    )
    checkFocusTime(
      '#purchase+.crs_flow .crs_flow_wrapper',
      'exp_addit_flow_vis_howmany_focstic',
      'After the button GET BuzzPatch How many stickers do you need?'
    )
    checkFocusTime(
      '#purchase+.crs_flow .crs_flow_result',
      'exp_addit_flow_vis_based_focus',
      'After the button GET BuzzPatch Based on the results, your perfect match is...'
    )
  }
}

let start = setInterval(function () {
  if (document.querySelector('#purchase') && document.querySelector('section.effectiveness')) {
    clearInterval(start)
    new Flow()
  }
})

// 20 45 70 100
