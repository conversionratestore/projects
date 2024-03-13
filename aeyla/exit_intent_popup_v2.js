console.log(
  '%c EXP: Exit intent popup (DEV: YK)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)

const git = 'https://conversionratestore.github.io/projects/aeyla/img'

const script = document.createElement('script')
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
script.async = true
document.head.appendChild(script)

const style = document.createElement('link')
style.rel = 'stylesheet'
style.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css'
document.head.appendChild(style)

const style2 = document.createElement('link')
style2.rel = 'stylesheet'
style2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css'
document.head.appendChild(style2)

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
    clarity('set', 'exp_exit_popup', 'variant_1')
  }
}, 1000)

const device = window.innerWidth < 769 ? 'mobile' : 'desktop'

function checkScrollSpeed(selector, callback) {
  const block = selector === window ? window : document.querySelector(selector)
  let lastPos, newPos, timer, delta
  function clear() {
    lastPos = null
    delta = 0
  }
  clear()
  block.addEventListener('scroll', function () {
    newPos = selector === window ? this.scrollY : this.scrollTop
    if (lastPos != null) {
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, 50)
    callback(Math.abs(delta))
  })
}

const svg = {
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_17_33442)">
  <path d="M5 5L19 19M5 19L19 5" stroke="#2B4632" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_17_33442">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>`,
  fire: `<svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.2">
  <path d="M19.5 16.2161C19.5 19.9698 16.5966 23 13 23C9.40341 23 6.5 19.9698 6.5 16.2161C6.5 11.6935 10.7683 11.1056 10.7683 5.76892V5L12.0467 6.31163C14.0183 8.36933 15.1016 11.1282 15.1016 14.0452C15.9466 13.1633 16.575 12.1005 16.9217 10.9246C18.4601 12.1683 19.5 14.0452 19.5 16.2161Z" fill="white" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
  </g>
  <path d="M26.5 14.2161C26.5 17.9698 23.5966 21 20 21C16.4034 21 13.5 17.9698 13.5 14.2161C13.5 9.69351 17.7683 9.10558 17.7683 3.76892V3L19.0467 4.31163C21.0183 6.36933 22.1016 9.12819 22.1016 12.0452C22.9466 11.1633 23.575 10.1005 23.9217 8.9246C25.4601 10.1683 26.5 12.0452 26.5 14.2161Z" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0003 18.3332C14.5837 18.3332 18.3337 14.5832 18.3337 9.99984C18.3337 5.4165 14.5837 1.6665 10.0003 1.6665C5.41699 1.6665 1.66699 5.4165 1.66699 9.99984C1.66699 14.5832 5.41699 18.3332 10.0003 18.3332Z" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 6.6665V10.8332" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.99512 13.3335H10.0026" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  leftEdge: `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="34" viewBox="0 0 39 34" fill="none">
  <path d="M33 0H0L11.8657 17L0 34H33V0Z" fill="#E16E23"/>
  <path d="M33 28V34L39 28H33Z" fill="#B85A1D"/>
  </svg>`,
  rightEdge: `<svg xmlns="http://www.w3.org/2000/svg" width="39" height="34" viewBox="0 0 39 34" fill="none">
  <path d="M6 0H39L27.1343 17L39 34H6V0Z" fill="#E16E23"/>
  <path d="M6 28V34L0 28H6Z" fill="#B85A1D"/>
  </svg>`,
  people: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_351_7129)">
  <path d="M19.4993 0C17.8448 0 16.4993 1.3455 16.4993 3C16.4993 4.6545 17.8448 6 19.4993 6C21.1538 6 22.4993 4.6545 22.4993 3C22.4993 1.3455 21.1538 0 19.4993 0ZM19.4993 4.5C18.6728 4.5 17.9993 3.8265 17.9993 3C17.9993 2.1735 18.6728 1.5 19.4993 1.5C20.3258 1.5 20.9993 2.1735 20.9993 3C20.9993 3.8265 20.3258 4.5 19.4993 4.5Z" fill="#2B4632"/>
  <path d="M23.9963 15.6765L23.3198 8.841C23.2313 8.076 22.5893 7.5 21.8243 7.5H17.9993C17.5853 7.5 17.2493 7.836 17.2493 8.25C17.2493 8.664 17.5853 9 17.9993 9H21.8273L22.4213 15H21.7493C21.3728 15 21.0548 15.2805 21.0053 15.654L20.3243 21L18.6683 20.9805L18.2783 17.9055C18.2258 17.496 17.8598 17.208 17.4398 17.256C17.0288 17.3085 16.7378 17.6835 16.7903 18.0945L17.1803 21.159C17.2673 21.924 17.9093 22.5 18.6743 22.5H20.3243C21.0893 22.5 21.7313 21.924 21.8183 21.1695L22.4078 16.5H23.2493C23.4608 16.5 23.6633 16.41 23.8058 16.254C23.9483 16.0965 24.0173 15.8865 23.9963 15.6765Z" fill="#2B4632"/>
  <path d="M4.49927 0C2.84477 0 1.49927 1.3455 1.49927 3C1.49927 4.6545 2.84477 6 4.49927 6C6.15377 6 7.49927 4.6545 7.49927 3C7.49927 1.3455 6.15377 0 4.49927 0ZM4.49927 4.5C3.67277 4.5 2.99927 3.8265 2.99927 3C2.99927 2.1735 3.67277 1.5 4.49927 1.5C5.32577 1.5 5.99927 2.1735 5.99927 3C5.99927 3.8265 5.32577 4.5 4.49927 4.5Z" fill="#2B4632"/>
  <path d="M6.5587 17.256C6.1492 17.2095 5.7727 17.496 5.7202 17.9055L5.3242 21L3.6682 20.9805L2.9917 15.654C2.9437 15.2805 2.6257 15 2.2492 15H1.5772L2.1742 9H5.9992C6.4132 9 6.7492 8.664 6.7492 8.25C6.7492 7.836 6.4132 7.5 5.9992 7.5H2.1742C1.4092 7.5 0.767202 8.076 0.678702 8.8515L0.00370163 15.6765C-0.0172984 15.888 0.0517016 16.0965 0.194202 16.254C0.335202 16.41 0.537702 16.5 0.749202 16.5H1.5907L2.1802 21.159C2.2672 21.924 2.9092 22.5 3.6742 22.5H5.3242C6.0892 22.5 6.7312 21.924 6.8182 21.1695L7.2082 18.0945C7.2607 17.6835 6.9697 17.3085 6.5587 17.256Z" fill="#2B4632"/>
  <path d="M11.9993 0C10.3448 0 8.99927 1.3455 8.99927 3C8.99927 4.6545 10.3448 6 11.9993 6C13.6538 6 14.9993 4.6545 14.9993 3C14.9993 1.3455 13.6538 0 11.9993 0ZM11.9993 4.5C11.1728 4.5 10.4993 3.8265 10.4993 3C10.4993 2.1735 11.1728 1.5 11.9993 1.5C12.8258 1.5 13.4993 2.1735 13.4993 3C13.4993 3.8265 12.8258 4.5 11.9993 4.5Z" fill="#2B4632"/>
  <path d="M16.4962 15.675L15.8137 8.8515C15.7357 8.0805 15.0937 7.5 14.3197 7.5H9.6787C8.9047 7.5 8.2627 8.0805 8.1862 8.85L7.5037 15.675C7.4827 15.8865 7.5517 16.0965 7.6942 16.2525C7.8352 16.41 8.0377 16.5 8.2492 16.5H9.0697L9.6847 22.6485C9.7627 23.4195 10.4047 24 11.1787 24H12.8212C13.5952 24 14.2372 23.4195 14.3137 22.65L14.9287 16.5H15.7492C15.9607 16.5 16.1632 16.41 16.3057 16.2525C16.4482 16.0965 16.5172 15.885 16.4962 15.675ZM14.2492 15C13.8637 15 13.5412 15.2925 13.5022 15.675L12.8197 22.5H11.1787L10.4962 15.675C10.4572 15.2925 10.1347 15 9.7492 15H9.0787L9.6787 9H14.3212L14.9212 15H14.2492Z" fill="#2B4632"/>
  </g>
  <defs>
  <clipPath id="clip0_351_7129">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_351_8569)">
  <mask id="mask0_351_8569" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
  <path d="M0 0H20V20H0V0Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_351_8569)">
  <path d="M12.4998 0.833496H3.33317C2.4165 0.833496 1.6665 1.5835 1.6665 2.50016V13.3335C1.6665 13.7918 2.0415 14.1668 2.49984 14.1668C2.95817 14.1668 3.33317 13.7918 3.33317 13.3335V3.3335C3.33317 2.87516 3.70817 2.50016 4.1665 2.50016H12.4998C12.9582 2.50016 13.3332 2.12516 13.3332 1.66683C13.3332 1.2085 12.9582 0.833496 12.4998 0.833496ZM15.8332 4.16683H6.6665C5.74984 4.16683 4.99984 4.91683 4.99984 5.8335V17.5002C4.99984 18.4168 5.74984 19.1668 6.6665 19.1668H15.8332C16.7498 19.1668 17.4998 18.4168 17.4998 17.5002V5.8335C17.4998 4.91683 16.7498 4.16683 15.8332 4.16683ZM14.9998 17.5002H7.49984C7.0415 17.5002 6.6665 17.1252 6.6665 16.6668V6.66683C6.6665 6.2085 7.0415 5.8335 7.49984 5.8335H14.9998C15.4582 5.8335 15.8332 6.2085 15.8332 6.66683V16.6668C15.8332 17.1252 15.4582 17.5002 14.9998 17.5002Z" fill="#2B4632"/>
  </g>
  </g>
  <defs>
  <clipPath id="clip0_351_8569">
  <rect width="20" height="20" fill="white"/>
  </clipPath>
  </defs>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M15.6522 0.365055C16.1159 0.814353 16.1159 1.60062 15.6522 2.04992L6.51951 11.6349C6.09142 12.1217 5.34225 12.1217 4.91416 11.6349L0.347826 6.84243C-0.115942 6.39314 -0.115942 5.60686 0.347826 5.15757C0.77592 4.67083 1.52508 4.67083 1.95318 5.15757L5.699 9.08892L14.0468 0.365055C14.4749 -0.121685 15.2241 -0.121685 15.6522 0.365055Z" fill="#2B4632"/>
  </svg>`
}

class Popup {
  constructor(device) {
    this.D = device
    this.user = this.checkUserStatus()
    this.init()
  }

  init() {
    this.createPopup1()
    this.createPopup2()
    this.fixBasePopup()
    this.popupTrigger()
  }

  createPopup1() {
    const randomUser = Math.floor(Math.random() * (15 - 4 + 1)) + 4
    const popup = /*html*/ `
      <div class="crs_popup1_wrapper">
        <style>
          .crs_popup1_wrapper {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 999999999999;
            justify-content: center;
            align-items: center;
          }
          .crs_popup1_wrapper.show {
            display: flex;
          }
          .crs_popup {
            width: 100%;
            max-width: 560px;
            background: #fff;
            border-radius: 6px;
            padding: 20px 35px;
            display: flex;
            flex-direction: column;
          }
          .crs_popup_header {
            position: relative;
          }
          .crs_popup1_wrapper .crs_close {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
          }
          .crs_popup_header h3 {
            padding-top: 25px;
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            margin-bottom: 6px;
            text-align: center;
          }
          .crs_popup_header h3 b {
            color: #A84A23;
          }
          .crs_popup_header h3 + p {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            margin-bottom: 12px;
          }
          .crs_popup_header .timer {
            display: flex;
            font-size: 32px;
            line-height: 36px;
            gap: 2px;
            justify-content: center;
            color: #2B4632;
            align-items: center;
            margin: 5px 0 20px;
            font-family: "Bianco Serif";
            font-weight: 700;
          }
          .crs_popup_header .timer>div {
            display: flex;
            gap: 2px;
            align-items: center;
            position: relative;
          }
          .crs_popup_header .timer>div span {
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 14px;
            line-height: 20px;
            color: #878787;
            font-weight: 400;
            font-family: "Inter", sans-serif;
          }
          .crs_popup_header .timer p {
            margin: 0;
            border-radius: 6px;
            background: #F3F5F4;
            padding: 7px 12px;
            font-weight: 700;
          }
          .crs_label {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 26px;
            background: #E67125;
            position: relative;
            width: calc(100% - 78px);
            margin: 0 auto;
            padding: 4px;
            gap: 8px;
          }
          .crs_label p {
            font-size: 12px;
            line-height: 16px;
            text-transform: uppercase;
            color: #fff;
            font-weight: 600;
            margin: 0;
          }
          .crs_label span {
            position: absolute;
            bottom: -6px;
          }
          .crs_label span:first-of-type {
            right: calc(100% - 7px);
          }
          .crs_label span:last-of-type {
            left: calc(100% - 7px);
          }
          .crs_popup_footer {
            margin-top: auto;
          }
          .crs_popup_footer button {
            width: 100%;
            border-radius: 6px;
            background: #2B4632;
            cursor: pointer;
            border: none;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            padding: 12px;
            margin-top: 20px;
          }
          .crs_popup_footer .discount {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 6px;
            border: 1px dashed #B0BFD4;
            background: #F3F5F4;
            padding: 12px;
            margin-top: 16px;
          }
          .crs_popup_footer .discount p:first-of-type {
            margin: 0;
            font-size: 14px;
            line-height: 20px;
            color: #646464;
            font-weight: 600;
            padding-right: 100px;
          }
          .crs_popup_footer .discount>span {
            display: block;
            width: 1px;
            height: 20px;
            border-right: 1px dashed #B0BFD4;
          }
          .crs_popup_footer .discount p:last-of-type {
            margin: 0;
            font-size: 16px;
            line-height: 24px;
            color: #CE603A;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.96px;
          }
          .crs_popup_footer .discount svg {
            cursor: pointer;
          }
          .crs_popup_footer .discount p.copied {
            border-radius: 10px;
            background: #FFF;
            padding: 4px 10px;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            gap: 6px;
            align-items: center;
            color: #2B4632;
          }
          .crs_popup_footer .discount p.copied span {
            margin: 2px 0 -1px;
          }
          .crs_info {
            border-radius: 6px;
            background: #FCF5E6;
            padding: 8px 12px;
            display: flex;
            gap: 10px;
            align-items: start;
          }
          .popup_cart_list {
            margin: 20px 0;
            display: flex;
            gap: 14px;
            max-height: 280px;
          }
          .crs_info svg {
            flex-shrink: 0;
          }
          .crs_info span {
            font-size: 14px;
            line-height: 20px;
            color: #2B4632;
            margin: 0;
            font-weight: 500;
          }
          .popup_cart_list .slick-track {
            display: flex;
          }
          .popup_cart_list .slick-slide {
            padding: 0 10px;
            height: inherit;
          }
          .popup_cart_list .slick-slide>div {
            height: 100%;
          }
          .popup_cart_list .item {
            width: 100%;
            display: flex !important;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-radius: 6px;
            border: 1px dashed #B0BFD4;
            height: 100%;
          }
          .popup_cart_list .item .img {
            width: 84px;
            height: 84px;
            border-radius: 4px;
            overflow: hidden;
          }
          .popup_cart_list .item .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .popup_cart_list .item .descr {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: auto;
            width: 100%;
          }
          .popup_cart_list .item .descr p {
            font-size: 14px;
            line-height: 20px;
            color: #646464;
            margin: 0;
            text-align: center;
          }
          .popup_cart_list .item .descr p:nth-of-type(2) {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
          }
          .popup_cart_list .item .descr p:first-of-type {
            font-weight: 700;
            color: #2B4632;
          }
          .popup_cart_list .item .descr .old {
            text-decoration: line-through;
            margin-right: 4px;
          }
          .popup_cart_list .item .descr .new {
            color: #2B4632;
            font-weight: 600;
          }
          .popup_cart_list .item.one_item .img {
            width: 100px;
            height: 100px;
          }
          .popup_cart_list .item.one_item .descr p {
            font-size: 16px;
          }
          .popup_cart_list .item.one_item .descr p:first-of-type {
            font-size: 18px;
          }
          @media (max-width: 768px) {
            .crs_popup {
              height: 100dvh;
              border-radius: 0;
              padding: 16px;
            }
            .crs_label span {
              display: none;
            }
            .crs_label {
              width: calc(100% + 32px);
              margin-left: -16px;
            }
            .popup_cart_list {
              max-height: calc(100dvh - 325px);
            }
            .crs_popup_footer .discount p:first-of-type {
              padding-right: 0;
            }
          }
        </style>
        <div class="crs_popup">
          <div class="crs_popup_header">
            <div class="crs_close">${svg.close}</div>
            <h3>${
              this.user === 0 ? 'Check out now and get<br><b>15% OFF</b> your first order' : 'It’s almost yours!'
            }</h3>
            ${
              this.user === 0
                ? /* html */ `
                <div class="timer">
                <div class="minutes">
                  <p>1</p>
                  <p>4</p>
                  <span>minutes</span>
                </div>:
                <div class="seconds">
                  <p>5</p>
                  <p>9</p>
                  <span>seconds</span>
                </div>
                </div> 
              `
                : /* html */ `<p>Only one step left:</p>`
            }
            
            ${
              this.user === 0
                ? ''
                : /* html */ `
            <div class="crs_label">
              <span>${svg.leftEdge}</span>
              ${svg.fire}
              <p>Popular choice, stocks are limited!</p>
              <span>${svg.rightEdge}</span>
            </div>
            `
            }
          </div>
          <div class="crs_popup_body">
            <ul class="popup_cart_list">
              
            </ul>
            <div class="crs_info">
              ${svg.people}
              <span>There are <b>${randomUser} people</b> looking at <span>this product</span>.<span>${
                this.user === 0 ? '' : "We can’t guarantee its availability if you don't complete the purchase now."
              }</span></span>
            </div>
          </div>
          <div class="crs_popup_footer">
            ${
              this.user === 0
                ? /* html */ `
            <div class="discount">
              <p>Enter code at checkout</p>
              <span></span>
              <p>HELLO15</p>
              ${svg.copy}
            </div>
            <button>Checkout Now</button>
            `
                : /* html */ `
            <button>complete my order now</button>
            `
            }
          </div>
        </div>
      </div>
    `
    document.body.insertAdjacentHTML('beforeend', popup)

    const closePopup = $el('.crs_close')
    const checkoutBtn = $el('.crs_popup_footer button')
    const copy = $el('.crs_popup_footer .discount svg')
    closePopup.addEventListener('click', () => {
      $el('.crs_popup1_wrapper').classList.remove('show')
      $el('.popup_cart_list').classList.remove('slick-initialized')
      $el('.popup_cart_list').classList.remove('slick-slider')
      $el('.popup_cart_list').classList.remove('slick-dotted')
      pushDataLayer(
        `exp_eip_v2_btn_close_${this.user === 0 ? 'nu' : 'ru'}`,
        `Close button ${this.user === 0 ? 'New user' : 'Returning User'}`,
        'Click',
        'Main Popup'
      )
    })

    checkoutBtn.addEventListener('click', () => {
      closePopup.click()
      window.location.href = '/checkout'
      pushDataLayer(
        `exp_eip_v2_btn_checkout${this.user === 0 ? 'nu' : 'ru'}`,
        `Checkout button ${this.user === 0 ? 'New user' : 'Returning User'}`,
        'Click',
        'Main Popup'
      )
    })

    $el('.crs_popup1_wrapper').addEventListener('click', e => {
      if (e.target === $el('.crs_popup1_wrapper')) {
        $el('.crs_popup1_wrapper').classList.remove('show')
        $el('.popup_cart_list').classList.remove('slick-initialized')
        $el('.popup_cart_list').classList.remove('slick-slider')
        $el('.popup_cart_list').classList.remove('slick-dotted')
        pushDataLayer(
          `exp_eip_v2_bg_close_${this.user === 0 ? 'nu' : 'ru'}`,
          `Close by bg ${this.user === 0 ? 'New user' : 'Returning User'}`,
          'Click',
          'Main Popup'
        )
      }
    })
    if (copy) {
      copy.addEventListener('click', () => {
        const copyText = $el('.crs_popup_footer .discount p:last-of-type')
        navigator.clipboard.writeText('HELLO15')
        copyText.innerHTML = `${svg.check}<span>copied</span>`
        copyText.classList.add('copied')
        pushDataLayer(
          'exp_eip_v2_btn_copy',
          `Copy button ${this.user === 0 ? 'New user' : 'Returning User'}`,
          'Click',
          'Main Popup'
        )
      })
    }
  }

  createPopup2() {
    const popup = /*html*/ `
      <div class="crs_popup2_wrapper">
        <style>
          .crs_popup2_wrapper {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100dvh;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            z-index: 99999;
            justify-content: center;
            align-items: center;
          }
          .crs_popup2_wrapper.show {
            display: flex;
          }
          .crs_popup2 {
            width: calc(100% - 40px);
            max-width: 560px;
            background: #fff;
            border-radius: 6px;
            padding: 20px 0 0;
            border: 2px solid #fff;
            display: flex;
            flex-direction: column;
            position: relative;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            position: relative;
          }
          .crs_popup2 h3 {
            padding: 0 35px;
            font-size: 24px;
            line-height: 32px;
            font-weight: 700;
            margin-bottom: 6px;
            text-align: center;
            color: #2B4632;
            margin: 12px 0;
          }
          .crs_popup2 .close {
            position: absolute;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            top: 20px;
            right: 20px;
            cursor: pointer;
          }
          .crs_popup2 h3 + p {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            margin-bottom: 20px;
            color: #2B4632;
          }
          .crs_popup2_links {
            display: flex;
            gap: 2px;
            justify-content: space-between;
            align-items: stretch;
            flex-wrap: wrap;
            overflow: hidden;
            border-radius: 0 0 6px 6px;
          }
          .crs_popup2_links li {
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: start;
            justify-content: space-between;
          }
          .crs_popup2_links li .img {
            width: 100%;
            aspect-ratio: 1.3/1;
            position: relative;
            z-index: 1;
          }
          .crs_popup2_links li .img + div {
            width: 100%;
            height: 100%;
            padding: 0 12px 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .crs_popup2_links li .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .crs_popup2_links li p {
            font-size: 20px;
            line-height: 28px;
            color: #2B4632;
            font-weight: 700;
            font-family: "Bianco Serif";
            margin: 0;
          }
          .crs_popup2_links li:first-of-type {
            background-color: #FBF3E3;
          }
          .crs_popup2_links li:nth-of-type(2) {
            background-color: #E9E0DE;
          }
          .crs_popup2_links li:last-of-type {
            background-color: #E6EBDF;
          }
          .crs_popup2_links li a {
            width: 100%;
            border-radius: 6px;
            background: #2B4632;
            cursor: pointer;
            border: none;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 9px;
            margin-top: 9px;
            line-height: 1;
          }
          @media (max-width: 768px) {
            .crs_popup2 h3 {
              padding: 0 20px;
              font-size: 24px;
              margin-bottom: 6px;
            }
            .crs_popup2_links li {
              width: 100%;
              flex-direction: row;
              gap: 6px;
            }
            .crs_popup2_links li .img {
              width: calc(50% - 6px);
              flex-shrink: 0;
            }
            .crs_popup2_links li .img + div {
              width: 50%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 12px;
            }
            .crs_popup2_links li p {
              font-size: 20px;
              line-height: 24px;
            }
          }
        </style>
        <div class="crs_popup2">
          <span class="close">${svg.close}</span>
          <h3>Osteopath-approved, award-winning products for better sleep and stress relief</h3>
          <p>Shop Our Collection Today</p>
          <ul class="crs_popup2_links">
            <li>
              <div class="img">
                <img src="${git}/link1.jpg" alt="link1">
              </div>
              <div>
                <p>Pillows</p>
                <a href="https://www.aeyla.co.uk/collections/pillows" class="crs_btn">Shop Now</a>
              </div>
            </li>
            <li>
              <div class="img">
                <img src="${git}/link2.jpg" alt="link2">
              </div>
              <div>
                <p>Weighted<br>Blankets</p>
                <a href="https://www.aeyla.co.uk/collections/weighted-blanket-blanket-covers" class="crs_btn">Shop Now</a>
              </div>
            </li>
            <li>
              <div class="img">
                <img src="${git}/link3.jpg" alt="link3">
              </div>
              <div>
                <p>Bundle<br>Savings</p>
                <a href="https://www.aeyla.co.uk/collections/bundles" class="crs_btn">Shop Now</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `

    document.body.insertAdjacentHTML('beforeend', popup)

    const closePopup = $el('.crs_popup2_wrapper .close')
    closePopup.addEventListener('click', () => {
      $el('.crs_popup2_wrapper').classList.remove('show')
      pushDataLayer(
        'exp_eip_v2_btn_close',
        `Close button ${this.user === 0 ? 'New user' : 'Returning User'}`,
        'Click',
        'Secondary Popup'
      )
    })

    $el('.crs_popup2_wrapper').addEventListener('click', e => {
      if (e.target === $el('.crs_popup2_wrapper')) {
        $el('.crs_popup2_wrapper').classList.remove('show')
        pushDataLayer(
          'exp_eip_v2_bg_close',
          `Close by bg ${this.user === 0 ? 'New user' : 'Returning User'}`,
          'Click',
          'Secondary Popup'
        )
      }
    })

    $$el('.crs_popup2_links .crs_btn').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        pushDataLayer(
          `exp_eip_v2_btn_shop_${i}`,
          `Shop button ${this.user === 0 ? 'New user' : 'Returning User'} ${btn.previousElementSibling.innerText}`,
          'Click',
          'Secondary Popup'
        )
      })
    })
  }

  fixBasePopup() {
    const style = /*html*/ `
      <style>
        .needsclick button[aria-label="Close teaser"] {
          display: none !important;
        }
        #shopify-section-minicart {
          z-index: 9999999 !important;
        }
        ${
          window.location.href.includes('/products/')
            ? 'div:not(.needsclick)>button.needsclick { opacity: 0; pointer-events: none;}'
            : ''
        }
      </style>
    `
    document.head.insertAdjacentHTML('beforeend', style)
  }

  async drawCart() {
    const cart = await fetch('/cart.js')
    const cartJson = await cart.json()

    const listItems = cartJson.items.reverse().map(item => {
      let oldPrice, newPrice
      $$el('#shopify-section-minicart .item_block').forEach(el => {
        if (el.querySelector('h3').innerText.includes(item.product_title)) {
          oldPrice = el.querySelector('.item_price .compare').innerText
          newPrice = el.querySelector('.item_price .compare+span').innerText
        }
      })

      return /*html*/ `
        <li ${cartJson.items.length === 1 ? 'class="item one_item"' : 'class="item"'}>
          <div class="img">
            <img src="${item.image}" alt="">
          </div>
          <div class="descr">
            <p>
              ${item.product_title}
            </p>
            <p>
              ${item.variant_title ? item.variant_title : ''}
            </p>
            <p class="price">
              <span class="old">${oldPrice}</span>
              <span class="new">${newPrice}</span>
            </p>
          </div>
        </li>
      `
    })
    $el('.crs_popup1_wrapper .popup_cart_list').innerHTML = listItems.join('')
    $el('.crs_popup1_wrapper').classList.add('show')
    if (cartJson.items.length > 1 && this.user === 1) {
      $el('.crs_info span>span:last-of-type').innerHTML =
        'We can’t guarantee the availability of all products in your cart if you don’t complete the purchase now.'
    }
    if (cartJson.items.length > 1) {
      $el('.crs_info span>span:first-of-type').innerHTML = `these products`
    }

    const interObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        pushDataLayer(
          `exp_eip_v2_popup_view${this.user === 0 ? 'nu' : 'ru'}`,
          `Popup visible ${this.user === 0 ? 'New user' : 'Returning User'}`,
          'Visible',
          'Main Popup'
        )
        interObserver.disconnect()
      }
    })

    interObserver.observe($el('.crs_popup1_wrapper'))

    if (!sessionStorage.getItem('timer')) {
      sessionStorage.setItem('timer', 15 * 60 * 1000)
    }
    if ($el('.crs_popup1_wrapper .minutes')) {
      const timer = setInterval(() => {
        const time = sessionStorage.getItem('timer')
        const minutes = Math.floor(time / 60000)
        const seconds = ((time % 60000) / 1000).toFixed(0)
        $el('.crs_popup1_wrapper .minutes p:first-of-type').innerText = minutes < 10 ? `0` : '1'
        $el('.crs_popup1_wrapper .minutes p:last-of-type').innerText = minutes < 10 ? minutes : minutes - 10
        $el('.crs_popup1_wrapper .seconds p:first-of-type').innerText = seconds < 10 ? `0` : seconds[0]
        $el('.crs_popup1_wrapper .seconds p:last-of-type').innerText = seconds < 10 ? seconds : seconds[1]
        sessionStorage.setItem('timer', time - 1000)
        if (time <= 0) {
          clearInterval(timer)
          $el('.crs_popup1_wrapper').classList.remove('show')
        }
      }, 1000)
    }
    if (cartJson.items.length > 1) {
      let slider = setInterval(() => {
        if (typeof $().slick === 'function' && !$el('.popup_cart_list.slick-initialized')) {
          clearInterval(slider)
          $('.popup_cart_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '125px',
            responsive: [
              {
                breakpoint: 500,
                settings: {
                  centerPadding: '50px'
                }
              }
            ]
          })
        }
      }, 100)
    }
  }

  popupTrigger() {
    const combine = this.combinePopup.bind(this)
    if (!sessionStorage.getItem('session_time')) {
      sessionStorage.setItem('session_time', new Date().getTime())
    }
    if (!localStorage.getItem('once_time')) {
      localStorage.setItem('once_time', new Date().getTime())
      sessionStorage.setItem('base_popup', true)
    }
    document.body.setAttribute('data-time', new Date().getTime())
    const sessionTime = sessionStorage.getItem('session_time')
    const onceTime = localStorage.getItem('once_time')
    const checkTime = setInterval(() => {
      if (sessionStorage.getItem('crs_popup')) {
        clearInterval(checkTime)
        return
      }
      if (new Date().getTime() - sessionTime > 180000) {
        console.log('%c 180 sec  trigger', 'color: red; background: white;')
        combine()
      }
      if (new Date().getTime() - onceTime > 600000 && this.user === 0) {
        sessionStorage.removeItem('crs_popup')
        sessionStorage.removeItem('base_popup')
        localStorage.setItem('once_time', new Date().getTime())
      }
    }, 1000)

    if (this.D === 'mobile') {
      checkScrollSpeed(window, speed => {
        if (speed > 120) {
          console.log('%c mobile scroll trigger', 'color: red; background: white;')
          combine()
        }
      })
    } else {
      document.body.addEventListener('mouseleave', () => {
        console.log('%c mouse leave trigger', 'color: red; background: white;')
        combine()
      })

      document.addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'visible') {
          console.log('%c tab focus trigger', 'color: red; background: white;')
          combine()
        }
      })
    }

    function observeElement(elementId) {
      let element = document.getElementById(elementId)

      let timeout

      function setTime() {
        clearTimeout(timeout)
        timeout = setTimeout(function () {
          console.log('%c cart timeout trigger', 'color: red; background: white;')
          combine()
        }, 5000)
      }

      let observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting === true && !entries[0].target.querySelector('.empty_cart')) {
            let showCount = sessionStorage.getItem('showCount') || 0
            if (!sessionStorage.getItem('showCountTime') && +showCount >= 2) {
              sessionStorage.setItem('showCountTime', new Date().getTime())
            }
            showCount++
            sessionStorage.setItem('showCount', showCount)
            setTime()
            $el('#shopify-section-minicart').addEventListener('click', e => {
              setTime()
            })
          } else {
            clearInterval(timeout)
          }
        },
        { threshold: [1] }
      )

      observer.observe(element)
    }

    observeElement('shopify-section-minicart')

    if ($el('#AddToCart')) {
      $el('#AddToCart').addEventListener('click', e => {
        document.body.setAttribute('data-time', new Date().getTime())
      })
    }

    const timer = setInterval(() => {
      const timeout = this.D === 'mobile' ? 10000 : this.user === 0 ? 10000 : 20000
      const time = new Date().getTime()
      const timeAction = document.body.getAttribute('data-time')
      if (
        time - timeAction > timeout &&
        $el('#shopify-section-minicart').getBoundingClientRect().right > window.innerWidth + 20
      ) {
        if (sessionStorage.getItem('crs_popup')) {
          clearInterval(timer)
          return
        }
        clearInterval(timer)
        console.log('%c 10 or 20 sec trigger', 'color: red; background: white;')
        combine()
      }
    }, 1000)
  }

  visibleSecondPopup() {
    const interObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        pushDataLayer(
          'exp_eip_v2_popup_view',
          `Popup visible ${this.user === 0 ? 'New user' : 'Returning User'}`,
          'Visible',
          'Secondary Popup'
        )
        interObserver.disconnect()
      }
    })

    interObserver.observe($el('.crs_popup2_wrapper'))
  }

  async combinePopup() {
    const cartLength = await this.checkCartLength()
    if (this.user === 0) {
      if (cartLength > 0) {
        if (sessionStorage.getItem('crs_popup')) return
        this.drawCart()
        sessionStorage.setItem('crs_popup', true)
      } else {
        if (sessionStorage.getItem('base_popup')) return
        $el('div:not(.needsclick)>button.needsclick').click()
        sessionStorage.setItem('base_popup', true)
      }
    } else {
      if (cartLength > 0) {
        if (sessionStorage.getItem('crs_popup2')) return
        this.drawCart()
        sessionStorage.setItem('crs_popup2', true)
      } else {
        if (sessionStorage.getItem('crs_popup3')) return
        $el('.crs_popup2_wrapper').classList.add('show')
        this.visibleSecondPopup()
        sessionStorage.setItem('crs_popup3', true)
      }
    }
  }

  checkUserStatus() {
    let user = 0
    const userGaId = document.cookie
      .split(';')
      .find(c => c.trim().startsWith('_ga='))
      ?.split('.')[3]

    if (new Date().getTime() - +userGaId * 1000 > 1000 * 30 * 60) {
      user = 1
    }
    return user
  }

  async checkCartLength() {
    const data = await (await fetch('/cart.js')).json()
    return data.items.length
  }
}

new Popup(device)
