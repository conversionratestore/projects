console.log(
  '%c EXP: Indent Popup (DEV: SO)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)

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
    clarity('set', 'exit-intent-popup', 'variant_1')
  }
}, 1000)

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

const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/'

const icons = {
  close: /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17.7305 19.009L12.0045 13.274L6.27846 19.009L5 17.7305L10.735 12.0045L5 6.27846L6.27846 5L12.0045 10.735L17.7305 5.009L19 6.27846L13.274 12.0045L19 17.7305L17.7305 19.009Z" fill="#333333"/>
    </svg>
  `,
  copy: /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M18.9167 5H9.58333C9.42862 5 9.28025 5.06146 9.17085 5.17085C9.06146 5.28025 9 5.42862 9 5.58333V8.5H6.08333C5.92862 8.5 5.78025 8.56146 5.67085 8.67085C5.56146 8.78025 5.5 8.92862 5.5 9.08333V18.4167C5.5 18.5714 5.56146 18.7197 5.67085 18.8291C5.78025 18.9385 5.92862 19 6.08333 19H15.4167C15.5714 19 15.7197 18.9385 15.8291 18.8291C15.9385 18.7197 16 18.5714 16 18.4167V15.5H18.9167C19.0714 15.5 19.2197 15.4385 19.3291 15.3291C19.4385 15.2197 19.5 15.0714 19.5 14.9167V5.58333C19.5 5.42862 19.4385 5.28025 19.3291 5.17085C19.2197 5.06146 19.0714 5 18.9167 5ZM14.8333 17.8333H6.66667V9.66667H14.8333V17.8333ZM18.3333 14.3333H16V9.08333C16 8.92862 15.9385 8.78025 15.8291 8.67085C15.7197 8.56146 15.5714 8.5 15.4167 8.5H10.1667V6.16667H18.3333V14.3333Z" fill="#0170B9"/>
    </svg>
  `
}

const checkScrollSpeed = (function (settings) {
  settings = settings || {}

  let lastPos
  let newPos
  let timer
  let delta,
    delay = settings.delay || 50

  function clear() {
    lastPos = null
    delta = 0
  }

  clear()

  return function () {
    newPos = window.scrollY
    if (lastPos != null) {
      delta = newPos - lastPos
    }
    lastPos = newPos
    clearTimeout(timer)
    timer = setTimeout(clear, delay)
    return delta
  }
})()

function setCookie(name, value, days = 1) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  var expires = 'expires=' + date.toUTCString()
  document.cookie = name + '=' + value + ';' + expires
}

function getCookie(name) {
  let cookie = {}
  document.cookie.split(';').forEach(function (el) {
    let split = el.split('=')
    cookie[split[0].trim()] = split.slice(1).join('=')
  })
  return cookie[name]
}

class IndentPopup {
  constructor(targetUrl, startingPrice, image, interestedProduct = []) {
    this.targetUrl = targetUrl
    this.startingPrice = startingPrice
    this.image = image
    this.interestedProduct = interestedProduct
    this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
    this.productName = null
    this.timer = getCookie('discount_timer') || 30 * 60
  }

  init() {
    const currentUrl = location.href
    if (!currentUrl.includes(this.targetUrl)) {
      return
    }
    this.productName = $el('.fl-heading .fl-heading-text').textContent
    this.#initStyles()
    this.#createOfferReservedBlock()
    this.#createLikelyToSellOutBlock()
    this.#createPopup()
    this.#popupTriggers()
    this.#copyDiscount()
    this.#initTimer()
  }

  #popupTriggers() {
    const preventTriggersDuringBooking = () => {
      const bookingPopup = document.getElementById('rzd-modal')
      if (bookingPopup) return
    }
    const showInterestedPopupByFocus = () => {
      const isCompletedBooking = !$el('iframe')
      window.addEventListener('focus', event => {
        setTimeout(() => {
          if (!isCompletedBooking && this.timer > 0) {
            preventTriggersDuringBooking()
            this.#showInterestedPopup()
          }
        }, 500)
      })
    }

    if (this.device === 'Mobile') {
      const timer = setTimeout(() => {
        preventTriggersDuringBooking()
        this.#showDiscountPopup()
      }, 20000)

      window.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (scrollSpeed < -100 && scrollSpeed > 100) {
          preventTriggersDuringBooking()
          this.#showDiscountPopup()
        }
      })

      showInterestedPopupByFocus()
    } else {
      document.addEventListener('mouseleave', event => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        ) {
          if (this.timer > 0) {
            preventTriggersDuringBooking()
            this.#showDiscountPopup()
          }
        }
      })
      showInterestedPopupByFocus()
    }
  }
  #showInterestedPopup() {
    const interestedPopup = /* html */ `
      <div class="interested__popup">
        <div class="interested__header">You may be interested in</div>
        <div class="interested__items">
          <div class="interested__item">
            <div class="interested__product">
              <img src=${this.interestedProduct[0].image} />
              <div class="interested__product-name">${this.interestedProduct[0].title}</div>
            </div>
            <div class="interested__action">
              <a href=${this.interestedProduct[0].link} data-availability>Check Availability</a>
            </div>
          </div>
          <div class="interested__item">
            <div class="interested__product">
              <img src=${this.interestedProduct[1].image} />
              <div class="interested__product-name">${this.interestedProduct[1].title}</div>
            </div>
            <div class="interested__action">
              <a href=${this.interestedProduct[1].link} data-availability>Check Availability</a>
            </div>
          </div>
        </div>
      </div>
    `
    this.#showPopup(interestedPopup, 'interestedPopup')
    $el('[data-availability]')?.addEventListener('click', event => {
      pushDataLayer(
        'exp_exit_popup_but_popinterest_avail',
        'Check Availability',
        'Button',
        'Popup You may be interested in'
      )
    })
  }

  #showDiscountPopup() {
    const image = this.image
    const productName = this.productName
    const timer = this.#timer()
    const discountPopup = /* html */ `
      <div class="discount__popup">
        <div class="discount__header">
          BOOK NOW & get <span>10% OFF</span> on your tickets
        </div>
          ${timer}
        <div class="discount__product">
          <img class="discount__image" src=${image} />
          <div class="discount__product-name">${productName}</div>
        </div>
        <div class="discount__description">Usually it’s fully booked within <span>72 hours</span></div>
        <div class="discount__divider"></div>
        <div class="discount__code">
        <div class="discount__code-title">Enter code during checkout</div>
        <div class="discount__code-container">
          <span>BOOK10</span>
          <button data-discount data-target="popup">${icons.copy}</button>
        </div>
        </div>
        <div class="discount__action">
          <button data-popup="close" data-continue>Continue booking</button>
        </div>
      </div>
    `
    this.#showPopup(discountPopup, 'discountPopup')
    
    $el('[data-continue]')?.addEventListener('click', event => {
      pushDataLayer(
        'exp_exit_popup_but_popbook_cont',
        'Continue booking',
        'Button',
        'Popup BOOK NOW & get 10% OFF on your tickets'
      )
    })
  }

  #showPopup(content, name) {
    const isShowed = getCookie(name)
    if (isShowed) return

    const backdrop = $el('.indent-popup-backdrop')
    const popup = $el('.indent-popup .indent-popup__content')
    backdrop.style.display = 'block'
    popup.innerHTML = content
    setCookie(name, true)
    if (name === 'discountPopup') {
      checkFocusTime('.discount__popup', 'exp_exit_popup_vis_popbook_focu', 'Popup BOOK NOW & get 10% OFF on your tickets')
    }
    if (name === 'interestedPopup') {
      checkFocusTime('.interested__popup', 'exp_exit_popup_vis_popinterest_focu', 'Popup You may be interested in')
    }
  }

  #createPopup() {
    const popup = /* html */ `
      <div class='indent-popup-backdrop'>
        <div class='indent-popup'>
          <button class='indent-popup__close' data-popup="close">
            ${icons.close}
          </button>
          <div class='indent-popup__content'>
          </div>
        </div>
      </div>
   `
    this.#insert(popup, 'body', 'afterbegin')
    this.#handleClosePopup()
  }

  #handleClosePopup() {
    const backdrop = $el('.indent-popup-backdrop')
    const popup = $el('.indent-popup')
    const closePopupBtns = popup.querySelectorAll('[data-popup="close"]')
    closePopupBtns.forEach(btn => {
      btn.addEventListener('click', event => {
        if (backdrop.querySelector('.discount__popup')) {
          pushDataLayer(
            'exp_exit_popup_but_popbook_clos',
            'Close',
            'Button',
            'Popup BOOK NOW & get 10% OFF on your tickets'
          )
        }
        if (backdrop.querySelector('.interested__popup')) {
          pushDataLayer('exp_exit_popup_but_popinterest_clos', 'Close', 'Button', 'Popup You may be interested in')
        }
        backdrop.style.display = 'none'
      })
    })

    window.addEventListener('mousedown', event => {
      event.stopPropagation()
      if (backdrop.style.display === 'block' && !event.target.closest('.indent-popup')) {
        backdrop.style.display = 'none'
      }
    })
  }

  #copyDiscount() {
    $$el('[data-discount]').forEach(btn => {
      btn.addEventListener('click', event => {
        navigator.clipboard.writeText('BOOK10')
        if (event.target.dataset.target === 'block' && this.targetUrl === '2-hour-electric-boat-rental') {
          pushDataLayer('exp_exit_popup_ico_hourelec_prom', 'Promo code', 'Icone', 'Block Offer reserved only for:2 Hour Electric Boat Rental')
        }
        if (event.target.dataset.target === 'popup') {
          pushDataLayer(
            'exp_exit_popup_ico_popbook_prom',
            'Promo code',
            'Icone',
            'Popup BOOK NOW & get 10% OFF on your tickets'
          )
        }
      })
    })
  }

  #initTimer() {
    const timerId = setInterval(() => {
      if (this.timer < 1) {
        clearInterval(timerId)
        $el('.offer-reserved__product-discount').style.display = 'none'
        const popupBackdrop = $el('.indent-popup-backdrop')
        if (popupBackdrop.querySelector('.discount__popup')) {
          popupBackdrop.style.display = 'none'
        }
      } else {
        this.timer -= 1
        setCookie('discount_timer', this.timer)
        const timerItems = $$el('span.timer__item')
        const minutes = Math.floor(this.timer / 60)
        const seconds = this.timer % 60
        timerItems.forEach(item => {
          if (item.dataset.timer === 'minutes-1') {
            item.textContent = Math.floor(minutes / 10)
          }

          if (item.dataset.timer === 'minutes-2') {
            item.textContent = minutes % 10
          }

          if (item.dataset.timer === 'seconds-1') {
            item.textContent = Math.floor(seconds / 10)
          }

          if (item.dataset.timer === 'seconds-2') {
            item.textContent = seconds % 10
          }
        })
      }
    }, 1000)
  }
  #timer() {
    const timer = /* html */ `
      <div class="timer">
        <div class="timer__container">
          <div class="timer__dial">
            <span class="timer__item" data-timer="minutes-1">0</span>
            <span class="timer__item" data-timer="minutes-2">0</span>
          </div>
          <div class="timer__label">Minutes</div>
        </div>
        <div class="timer__colon">
        :
        </div>
        <div class="timer__container">
          <div class="timer__dial">
            <span class="timer__item" data-timer="seconds-1">0</span>
            <span class="timer__item" data-timer="seconds-2">0</span>
          </div>
          <div class="timer__label">Seconds</div>
        </div>
      </div>
    `
    return timer
  }

  #createLikelyToSellOutBlock() {
    const likelyToSellOut = /* html */ `
      <div class="sellout">
        <div class="sellout__header">
          <span class="sellout__title">Likely to sellout</span>
        </div>
        <div class="sellout__price">
          Starting from $${this.startingPrice} per person
        </div>
        <div class="sellout_dates">
          Available for the next dates:
        </div>
      </div>
    `
    const isMobileDevice = this.device === 'Mobile'

    this.#insert(
      likelyToSellOut,
      isMobileDevice ? '#mobile-booking .fl-module-content' : '#booking-form .fl-module-content',
      'afterbegin'
    )
    checkFocusTime('.sellout', 'exp_exit_popup_vis_likely_focu', 'LIKELY TO SELL OUT')
  }

  #createOfferReservedBlock() {
    const timer = this.#timer()

    const action =
      this.device === 'Mobile'
        ? '<a href="#mobile-booking" data-booknow>Book now</a>'
        : '<button data-discount data-target="block">Copy code</button>'

    const offerReservedHtml = /* html */ `
      <div class="offer-reserved">
        <div class="offer-reserver__timer-container">
          <div class="offer-reserved__header">Offer reserved only for:</div>
          <div class="offer-reserved__timer">${timer}</div>
        </div>
        <div class="offer-reserved__divider"></div>
        <div class="offer-reserved__product-container">
          <div class="offer-reserved__product">
            <div class="offer-reserved__product-name">${this.productName}</div>
            <div class="offer-reserved__product-discount">
              <div class="offer-reserved__product-discount-description">Book now & enjoy <span>10% off</span></div>
              <div class="offer-reserved__product-discount-code">
                With code: <span>BOOK10</span>
                <button class="offer-reserved__copy-btn" data-discount data-target="block">
                  ${icons.copy}
                </button>
              </div>
              <div class="offer-reserved__action">
                ${action}
              </div>
            </div>
            </div>
          </div>
      </div>
    `
    this.#insert(offerReservedHtml, '.fl-module-rich-text .fl-rich-text ul:nth-of-type(2)', 'afterend')
    $el('[data-booknow]')?.addEventListener('click', () => {
      pushDataLayer('exp_exit_popup_but_reserved_book', 'BOOK NOW', 'Button', 'Block Offer reserved only for:')
    })
    checkFocusTime('.offer-reserved', 'exp_exit_popup_vis_reserved_focu', 'Block Offer reserved only for: Timer')
  }

  #insert(html, selector, position = 'beforeend') {
    $el(selector).insertAdjacentHTML(position, html)
  }

  #initStyles() {
    const styles = /*html*/ `
      <style>
        #mobile-booking .fl-module-content {
          margin-top: 0;
        }
        .sellout {
          font-family: Lato;
          padding: 4px 20px;
        }
        .sellout__header {
          display: flex;
          align-items: flex-start;
        }
        .sellout__title {
          display: flex;
          padding: 4px 12px;
          justify-content: center;
          align-items: center;
          border-radius: 2px;
          background: #E600231A;
          color: #E60023;
          text-align: center;
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: 18px; 
        }
        .sellout__price {
          margin-top: 8px;
          color: #333;
          font-size: 16px;
          font-style: normal;
          font-weight: 900;
          line-height: 24px;
        }
        .sellout_dates {
          margin-top: 4px;
          color: #0170B9;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 28px;
        }
        .indent-popup-backdrop {
          background: rgba(11, 25, 51, 0.60);
          position: fixed;
          display: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 100000;
        }
        .indent-popup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 400px;
          width: calc(100% - 32px);
          padding: 40px 26px;
          border-radius: 8px;
          background: #fff;
        }
        .indent-popup__close {
          position: absolute;
          background: none;
          padding: 0;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
        }
        .indent-popup__close:hover,.indent-popup__close:focus {
          background: none;
        }
        @media screen and (min-width: 768px) {
          .indent-popup {
            padding: 40px 60px;
          }
        }
        .timer {
          display: flex;
          margin-top: 16px;
          gap: 4px;
        }
        .timer__container {
          display: flex;
          flex-direction: column;
          aligin-items: center;
          gap: 5px;
        }
        .timer__dial {
          display: flex;
          gap: 4px;
        }
        .timer__item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 46px;
          border-radius: 2px;
          border: 1px solid #CFDAE9;
          background: #FFF;
          color: #23282D !important;
          text-align: center;
          leading-trim: both;
          text-edge: cap;
          font-size: 32px !important;
          font-weight: 700 !important;
          line-height: 36px !important;
        }
        .timer__label {
          color: #333;
          text-align: center;
          font-family: Lato;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
        }
        .timer__colon {
          color: #0F0900 !important;
          text-align: center !important;
          font-family: Josefin Sans !important;
          font-size: 32px !important;
          font-weight: 600 !important;
          line-height: 36px!important;                    
        }
        .offer-reserved {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 659px;
          padding: 32px 20px;
          border-radius: 8px;
          border: 1px solid #CFDAE9;
          font-family: Lato;

          background: #FAFAFA;
        }
        .offer-reserver__timer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .offer-reserved__header {
          color: #23282D !important;
          text-align: center;
          font-size: 14px !important;
          font-weight: 700 !important;
          line-height: 20px !important;
          text-transform: uppercase;
        }
        .offer-reserved__timer {

        }
        .offer-reserved__divider {
          border: 1px dashed #CFDAE9;
          width: 100%;
          background: none;
          margin: 20px 0;
        }
        .offer-reserved__product-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .offer-reserved__product {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .offer-reserved__product-name {
          color: #23282D !important;
          text-align: center;
          font-size: 18px !important;
          font-weight: 700 !important;
          line-height: 26px !important;
        }
        .offer-reserved__product-discount {
        }
        .offer-reserved__product-discount-description {
          color: #23282D !important;
          text-align: center !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          line-height: 24px !important;
        }
        .offer-reserved__product-discount-description span {
          color: #0170B9 !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          line-height: 24px !important;
        }
        .offer-reserved__product-discount-code {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          margin-top: 6px;
          text-align: center;
          color: #23282D !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          line-height: 24px !important;
        }
        .offer-reserved__product-discount-code span {
          color: #0170B9 !important;
          font-size: 16px !important;
          font-weight: 800 !important;
          line-height: 24px !important;
          letter-spacing: 1px !important;
          text-transform: uppercase !important;
        }
        .offer-reserved__copy-btn {
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          background: none !important;
          padding: 0 !important;
        }
        .offer-reserved__action {
          display: flex;
          margin-top: 20px;
          width: 100%;
        }
        .offer-reserved__action button, .offer-reserved__action a {
          display: 'block';
          background: #18AAE2 !important;
          border-radius: 100px !important;
          color: #fff !important;
          padding: 12px 32px;
          text-align: center !important; 
          font-size: 16px !important;
          font-weight: 700 !important;
          line-height: 24px !important;
          text-transform: uppercase;
          width: 100%;
        }
        @media screen and (min-width: 963px) {
          .offer-reserved {
            position: relative;
            flex-direction: row;
            min-height: 208px;
            padding: 24px 40px;
          }
          .offer-reserver__timer-container {
            width: 100%
          }
          .offer-reserved__product-container {
            width: 100%;
          }
          .offer-reserved__divider {
            min-height: 160px;
            height: 100%;
            width: 1px;
            margin: 0 32px;
          }
          .offer-reserved__product {
            gap: 16px;
          }
          .offer-reserved__product {
            align-items: flex-start;
            gap: 8px;
          }

          .offer-reserved__product-name,
          .offer-reserved__product-discount-description,
          .offer-reserved__product-discount-code  {
            text-align: left !important;
            justify-content: flex-start;
          }
          .offer-reserved__copy-btn {
            display: none;
          }
          .offer-reserved__action {
            margin-top: 16px;
          }
        }
      .interested__popup {
        display: flex:
        justify-content: center;
      }
      .interested__header {
        text-align: center;
        color: #000;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px; 
      }
      .interested__items {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-top: 24px;
        width: 100%;
      }
      .interested__item {
        width: 100%;
      }
      .discount__product, .interested__product {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .discount__product-name, .interested__product-name {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px;
      }
      .discount__product img, .interested__product img {
        width: 120px;
        height: 80px;
        border-radius: 8px;
      }
      .interested__action {
        display: flex;
        justify-content: center;
        margin-top: 12px;
        width: 100%;
      }
      .interested__action a {
        display: block;
        width: 100%;
        border-radius: 100px;
        background: #09B62C;
        padding: 12px 32px;
        color:  #FFF;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
      }
      .discount__popup {
        display: flex;
        flex-direction: column;
      }
      .discount__header {
        color: #000;
        text-align: center;
        font-family: Lato;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .discount__header span {
        color: #0170B9;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
      .discount__popup .timer {
        display: flex;
        justify-content: center;
      }
      .discount__product {
        margin-top: 20px;
      }
      .discount__description {
        border-radius: 8px;
        margin-top: 20px;
        background: #F1F1F1;
        padding: 4px 16px;
        text-align: center;
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
      }
      .discount__description span {
        color: #0170B9;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-decoration-line: underline;
      }
      .discount__divider {
        width: 100%;
        height: 1px;
        border: 1px dashed #CFDAE9;
        margin: 20px 0;
      }
      .discount__code-title {
        text-align: center;
        color: #000;
        font-family: Inter;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
      }
      .discount__code-container {
        margin-top: 8px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        border: 1px solid #DDD;
        width: 100%;
        height: 44px;
      }
      .discount__code-container button {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 25px;
        padding: 0;
        height: 25px;
        background: none;
      }
      .discount__code-container span {
        color: #0170B9;
        text-align: center;
        font-family: Lato;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
      .discount__action {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        width: 100%;
      }
      .discount__action button {
        border-radius: 100px;
        background: #18AAE2;
        padding: 12px 32px;
        width: 100%;
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-transform: uppercase;
      }
      </style>
    `
    this.#insert(styles, 'head')
  }
}

const pontoonBoat = new IndentPopup(
  'swimmable-pontoon-boat-rental-at-lake-las-vegas',
  69,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/06/P2_lg-1024x683.png',
  [
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/nye.png',
      title: 'Nye Firework Yacht Cruise',
      link: 'https://lakelasvegaswatersports.com/nye-firework-yacht-cruise/'
    },
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2022/10/IMG_9594-3-1024x683.jpg',
      title: '2 Hour Electric Boat',
      link: 'https://lakelasvegaswatersports.com/2-hour-electric-boat-rental/'
    }
  ]
)
pontoonBoat.init()

const pinkElectricBoat = new IndentPopup(
  'pink-electric-boat-rental-at-lake-las-vegas',
  50,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/06/photo_2023_06_02_00_32_05_lg.jpg',
  [
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/Fireworks_lg.jpeg',
      title: 'New Years Eve Electric Boat',
      link: 'https://lakelasvegaswatersports.com/new-years-eve-electric-boat-rental-champagne-included-at-lake-las-vegas/'
    },
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/DuffyDate-5-1-1024x683.jpg',
      title: '2 Hour Electric Boat',
      link: 'https://lakelasvegaswatersports.com/2-hour-electric-boat-rental/'
    }
  ]
)

pinkElectricBoat.init()

const twoHourElectricBoat = new IndentPopup(
  '2-hour-electric-boat-rental',
  22,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/772A2702-1-scaled.jpg',
  [
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/red_xmas_yacht.png',
      link: 'https://lakelasvegaswatersports.com/jingle-on-the-waves-christmas-cruise',
      title: 'Jingle On The Waves: Christmas Cruise'
    },
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2022/09/IMG_0092__2__transformed_lg.jpeg',
      link: 'https://lakelasvegaswatersports.com/kayak-rentals/',
      title: 'Kayak Rentals'
    }
  ]
)

twoHourElectricBoat.init()

const kayakRentals = new IndentPopup(
  'kayak-rentals',
  28,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2022/09/IMG_0092__2__transformed_lg.jpeg',
  [
    {
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/772A2702-1-scaled.jpg',
      link: 'https://lakelasvegaswatersports.com/2-hour-electric-boat-rental/',
      title: '2 Hour Electric Boat'
    },
    {
      image:
        'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/Red_Santa_Hat_Christmas_Greeting_Card-1024x538.png',
      link: 'https://lakelasvegaswatersports.com/santa-sail-kid-friendly-yacht-cruise/',
      title: 'Santa Sail - Kid Friendly Yacht Cruise'
    }
  ]
)

kayakRentals.init()

const electricSurfboardExperience = new IndentPopup(
  'e-foil-lessons',
  225,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2022/04/2022_04_26_10.42.09_lg-1024x682.jpg',
  [
    {
      title: 'Nye Firework Yacht Cruise',
      link: 'https://lakelasvegaswatersports.com/nye-firework-yacht-cruise/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/nye.png'
    },
    {
      title: '2 Hour Electric Boat',
      link: 'https://lakelasvegaswatersports.com/2-hour-electric-boat-rental/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2022/06/772A2702-1-scaled.jpg'
    }
  ]
)

electricSurfboardExperience.init()

const newYearsEveElectricBoat = new IndentPopup(
  'new-years-eve-electric-boat-rental-champagne-included-at-lake-las-vegas',
  58,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/Fireworks__1___1__lg.png',
  [
    {
      title: 'Jingle On The Waves: Christmas Cruise',
      link: 'https://lakelasvegaswatersports.com/jingle-on-the-waves-christmas-cruise/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/red_xmas_yacht.png'
    },
    {
      title: 'Santa Sail - Kid Friendly Yacht Cruise',
      link: 'https://lakelasvegaswatersports.com/santa-sail-kid-friendly-yacht-cruise/',
      image:
        'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/Red_Santa_Hat_Christmas_Greeting_Card-1024x538.png'
    }
  ]
)

newYearsEveElectricBoat.init()

const nyeFireworkYachtCruise = new IndentPopup(
  'nye-firework-yacht-cruise',
  54.99,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/nye.png',
  {
    title: 'Jingle On The Waves: Christmas Cruise',
    link: 'https://lakelasvegaswatersports.com/jingle-on-the-waves-christmas-cruise/',
    image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/red_xmas_yacht.png'
  },
  {
    title: 'New Years Eve Electric Boat Rental (Champagne included)',
    link: 'https://lakelasvegaswatersports.com/new-years-eve-electric-boat-rental-champagne-included-at-lake-las-vegas/',
    image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/Fireworks__1___1__lg.png'
  }
)
const jingleOnTheWaves = new IndentPopup(
  'jingle-on-the-waves-christmas-cruise',
  24.99,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/red_xmas_yacht.png',
  [
    {
      title: 'Nye Firework Yacht Cruise',
      link: 'https://lakelasvegaswatersports.com/nye-firework-yacht-cruise/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/nye.png'
    },
    {
      title: 'Santa Sail - Kid Friendly Yacht Cruise',
      link: 'https://lakelasvegaswatersports.com/santa-sail-kid-friendly-yacht-cruise/',
      image:
        'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/Red_Santa_Hat_Christmas_Greeting_Card-1024x538.png'
    }
  ]
)

jingleOnTheWaves.init()

const santaSail = new IndentPopup(
  'santa-sail-kid-friendly-yacht-cruise',
  24.99,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/Red_Santa_Hat_Christmas_Greeting_Card-1024x538.png',
  [
    {
      title: 'Nye Firework Yacht Cruise',
      link: 'https://lakelasvegaswatersports.com/nye-firework-yacht-cruise/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/nye.png'
    },
    {
      title: 'Jingle On The Waves: Christmas Cruise',
      link: 'https://lakelasvegaswatersports.com/jingle-on-the-waves-christmas-cruise/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/red_xmas_yacht.png'
    }
  ]
)

santaSail.init()

const mimosaCruise = new IndentPopup(
  'mimosa-cruise-lake-las-vegas',
  19.99,
  'https://lakelasvegaswatersports.com/wp-content/uploads/2023/07/photo_2023-07-06_04-11-13-1-1024x536.jpg',
  [
    {
      title: 'New Years Eve Electric Boat Rental (Champagne included)',
      link: 'https://lakelasvegaswatersports.com/new-years-eve-electric-boat-rental-champagne-included-at-lake-las-vegas/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/Fireworks__1___1__lg.png'
    },
    {
      title: 'Jingle On The Waves: Christmas Cruise',
      link: 'https://lakelasvegaswatersports.com/jingle-on-the-waves-christmas-cruise/',
      image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/11/red_xmas_yacht.png'
    }
  ]
)

mimosaCruise.init()

const latinNightCruise = new IndentPopup('latin-night-cruise-at-lake-las-vegas', 19.99, '', [
  {
    title: 'New Years Eve Electric Boat Rental (Champagne included)',
    link: 'https://lakelasvegaswatersports.com/new-years-eve-electric-boat-rental-champagne-included-at-lake-las-vegas/',
    image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/Fireworks__1___1__lg.png'
  },
  {
    title: 'Nye Firework Yacht Cruise',
    link: 'https://lakelasvegaswatersports.com/nye-firework-yacht-cruise/',
    image: 'https://lakelasvegaswatersports.com/wp-content/uploads/2023/12/nye.png'
  }
])

latinNightCruise.init()
