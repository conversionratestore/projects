console.log(
  '%c EXP: Exit intent popup (DEV: YK)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)

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
  </svg>`
}

class Popup {
  constructor(device) {
    this.D = device
    this.init()
  }

  init() {
    this.createPopup()
    this.popupTrigger()
  }

  createPopup() {
    const popup = /*html*/ `
      <div class="crs_popup_wrapper">
        <style>
          .crs_popup_wrapper {
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
          .crs_popup_wrapper.show {
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
          .crs_close {
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
          .crs_popup_header h3 + p {
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            margin-bottom: 12px;
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
            flex-direction: column;
            gap: 14px;
            max-height: 280px;
            overflow-y: auto;
          }
          .crs_info p {
            font-size: 14px;
            line-height: 20px;
            color: #2B4632;
            margin: 0;
            font-weight: 500;
          }
          .popup_cart_list li {
            width: 100%;
            display: flex;
            gap: 14px;
          }
          .popup_cart_list li .img {
            width: 84px;
            height: 84px;
            border-radius: 4px;
            overflow: hidden;
          }
          .popup_cart_list li .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .popup_cart_list li .descr {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .popup_cart_list li .descr p {
            font-size: 14px;
            line-height: 20px;
            color: #646464;
            margin: 0;
          }
          .popup_cart_list li .descr p:first-of-type {
            font-weight: 700;
            color: #2B4632;
          }
          .popup_cart_list li .descr .old {
            text-decoration: line-through;
            margin-right: 4px;
          }
          .popup_cart_list li .descr .new {
            color: #2B4632;
            font-weight: 600;
          }
          .popup_cart_list li.one_item {
            padding: 12px;
            border-radius: 6px;
            border: 1px dashed #B0BFD4;
            align-items: center;
          }
          .popup_cart_list li.one_item .img {
            width: 100px;
            height: 100px;
          }
          .popup_cart_list li.one_item .descr p {
            font-size: 16px;
          }
          .popup_cart_list li.one_item .descr p:first-of-type {
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
          }
        </style>
        <div class="crs_popup">
          <div class="crs_popup_header">
            <div class="crs_close">${svg.close}</div>
            <h3>It’s almost yours!</h3>
            <p>Only one step left:</p>
            <div class="crs_label">
              <span>${svg.leftEdge}</span>
              ${svg.fire}
              <p>Popular choice, stocks are limited!</p>
              <span>${svg.rightEdge}</span>
            </div>
          </div>
          <div class="crs_popup_body">
          <ul class="popup_cart_list">
            
          </ul>
          <div class="crs_info">
            ${svg.info}
            <p>We can’t guarantee its availability if you don't complete the purchase now</p>
          </div>
          </div>
          <div class="crs_popup_footer">
            <button>complete my order now</button>
          </div>
        </div>
      </div>
    `
    document.body.insertAdjacentHTML('beforeend', popup)

    const closePopup = $el('.crs_close')
    const checkoutBtn = $el('.crs_popup_footer button')
    closePopup.addEventListener('click', () => {
      $el('.crs_popup_wrapper').classList.remove('show')
      sessionStorage.setItem('crs_popup', true)
      pushDataLayer('exp_eip_btn_close', 'Exit intent popup close button', 'Click', 'Popup')
    })

    checkoutBtn.addEventListener('click', () => {
      pushDataLayer('exp_eip_btn_checkout', 'Exit intent popup checkout button', 'Click', 'Popup')
      window.location.href = '/checkout'
    })

    $el('.crs_popup_wrapper').addEventListener('click', e => {
      if (e.target === $el('.crs_popup_wrapper')) {
        $el('.crs_popup_wrapper').classList.remove('show')
        sessionStorage.setItem('crs_popup', true)
        pushDataLayer('exp_eip_bg_click', 'Exit intent popup background click', 'Click', 'Popup')
      }
    })
  }

  async drawCart() {
    const cart = await fetch('/cart.js')
    const cartJson = await cart.json()
    console.log(cartJson)
    if (cartJson.items.length === 0 || sessionStorage.getItem('crs_popup')) return
    cartJson.items.length > 1
      ? ($el('.crs_info p').innerText =
          'We can’t guarantee the availability of all products in your cart if you don’t complete the purchase now')
      : ''
    const listItems = cartJson.items.map(item => {
      let oldPrice, newPrice
      $$el('#shopify-section-minicart .item_block').forEach(el => {
        if (el.querySelector('h3').innerText.includes(item.product_title)) {
          oldPrice = el.querySelector('.item_price .compare').innerText
          newPrice = el.querySelector('.item_price .compare+span').innerText
        }
      })

      return /*html*/ `
        <li ${cartJson.items.length === 1 ? 'class="one_item"' : ''}>
          <div class="img">
            <img src="${item.image}" alt="">
          </div>
          <div class="descr">
            <p>
              ${item.product_title}
            </p>
            <p>
              ${item.variant_title}
            </p>
            <p class="price">
              <span class="old">${oldPrice}</span>
              <span class="new">${newPrice}</span>
            </p>
          </div>
        </li>
      `
    })
    $el('.crs_popup_wrapper .popup_cart_list').innerHTML = listItems.join('')
    $el('.crs_popup_wrapper').classList.add('show')
    pushDataLayer('exp_eip_popup_visible', 'Exit intent popup visible', 'Visible', 'Popup')
  }

  async popupTrigger() {
    document.body.setAttribute('data-time', new Date().getTime())

    if (this.D === 'mobile') {
      checkScrollSpeed(window, speed => {
        if (speed > 150) {
          this.drawCart()
        }
      })
    } else {
      document.addEventListener('mouseleave', () => {
        this.drawCart()
      })
    }

    document.addEventListener('click', e => {
      document.body.setAttribute('data-time', new Date().getTime())
    })

    document.addEventListener('scroll', e => {
      document.body.setAttribute('data-time', new Date().getTime())
    })

    const timer = setInterval(() => {
      const time = new Date().getTime()
      const timeAction = document.body.getAttribute('data-time')
      if (
        time - timeAction > 60000 &&
        $el('#shopify-section-minicart').getBoundingClientRect().right < window.innerWidth + 20
      ) {
        if (sessionStorage.getItem('crs_popup')) {
          clearInterval(timer)
          return
        }
        clearInterval(timer)
        this.drawCart()
      }
    }, 1000)
  }
}

new Popup()
