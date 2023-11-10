console.log(
  '%c EXP: Introduce express checkout buttons ',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/'

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

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'express_checkout_buttons', 'variant_1')
  }
}, 1000)

const img1 = /* html */ `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_50_391)">
    <path d="M6.33333 16C5.88733 16 5.46867 15.8267 5.154 15.5113L0.488 10.8447C0.173333 10.5307 0 10.112 0 9.66667C0 9.23867 0.162 8.832 0.456 8.52133L7.974 0.728C8.41 0.266 9.028 0 9.66667 0H14.3333C15.2527 0 16 0.748 16 1.66667V6.33333C16 6.97133 15.7347 7.58867 15.2713 8.02733L7.48067 15.542C7.16733 15.838 6.76133 16 6.33333 16ZM9.66667 0.666667C9.204 0.666667 8.77333 0.852 8.456 1.188L0.938 8.982C0.764 9.166 0.666667 9.41 0.666667 9.66667C0.666667 9.934 0.770667 10.1847 0.959333 10.3733L5.626 15.04C5.996 15.4107 6.64 15.42 7.02 15.0593L14.81 7.546C14.8107 7.54533 14.8113 7.54467 14.812 7.544C15.1487 7.226 15.3333 6.796 15.3333 6.33333V1.66667C15.3333 1.11533 14.8847 0.666667 14.3333 0.666667H9.66667Z" fill="#212121"/>
    <path d="M12.6668 4.66667C11.9315 4.66667 11.3335 4.06867 11.3335 3.33333C11.3335 2.598 11.9315 2 12.6668 2C13.4022 2 14.0002 2.598 14.0002 3.33333C14.0002 4.06867 13.4022 4.66667 12.6668 4.66667ZM12.6668 2.66667C12.2988 2.66667 12.0002 2.966 12.0002 3.33333C12.0002 3.70067 12.2988 4 12.6668 4C13.0348 4 13.3335 3.70067 13.3335 3.33333C13.3335 2.966 13.0348 2.66667 12.6668 2.66667Z" fill="#212121"/>
    <path d="M5.99984 13.3332C5.2645 13.3332 4.6665 12.7352 4.6665 11.9998C4.6665 11.2645 5.2645 10.6665 5.99984 10.6665C6.73517 10.6665 7.33317 11.2645 7.33317 11.9998C7.33317 12.7352 6.73517 13.3332 5.99984 13.3332ZM5.99984 11.3332C5.63184 11.3332 5.33317 11.6325 5.33317 11.9998C5.33317 12.3672 5.63184 12.6665 5.99984 12.6665C6.36784 12.6665 6.6665 12.3672 6.6665 11.9998C6.6665 11.6325 6.36784 11.3332 5.99984 11.3332Z" fill="#212121"/>
    <path d="M7.33333 7.33317C6.598 7.33317 6 6.73517 6 5.99984C6 5.2645 6.598 4.6665 7.33333 4.6665C8.06867 4.6665 8.66667 5.2645 8.66667 5.99984C8.66667 6.73517 8.06867 7.33317 7.33333 7.33317ZM7.33333 5.33317C6.96533 5.33317 6.66667 5.6325 6.66667 5.99984C6.66667 6.36717 6.96533 6.6665 7.33333 6.6665C7.70133 6.6665 8 6.36717 8 5.99984C8 5.6325 7.70133 5.33317 7.33333 5.33317Z" fill="#212121"/>
    <path d="M2.9992 9.99981C2.84186 9.99981 2.7012 9.88715 2.67186 9.72581C2.6392 9.54515 2.7592 9.37115 2.93986 9.33848L10.2732 8.00515C10.4512 7.96981 10.6279 8.09115 10.6612 8.27315C10.6939 8.45381 10.5739 8.62781 10.3932 8.66048L3.05986 9.99381C3.03986 9.99848 3.0192 9.99981 2.9992 9.99981Z" fill="#212121"/>
    </g>
    <defs>
    <clipPath id="clip0_50_391">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
  </svg>
`

const img2 = /* html */ `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_50_409)">
    <path d="M14.3333 2.6665H1.66666C0.747344 2.6665 0 3.4145 0 4.33319V11.6665C0 12.5852 0.747344 13.3332 1.66666 13.3332H14.3333C15.2527 13.3332 16 12.5852 16 11.6665V4.33319C16 3.4145 15.2527 2.6665 14.3333 2.6665ZM15.3333 11.6665C15.3333 12.2178 14.8847 12.6665 14.3333 12.6665H1.66666C1.11531 12.6665 0.666656 12.2178 0.666656 11.6665V4.33319C0.666656 3.78185 1.11531 3.33319 1.66666 3.33319H14.3333C14.8847 3.33319 15.3333 3.78185 15.3333 4.33319V11.6665H15.3333Z" fill="#212121"/>
    <path d="M7 10.6665H2.33334C2.14934 10.6665 2 10.8158 2 10.9998C2 11.1838 2.14934 11.3332 2.33334 11.3332H7C7.184 11.3332 7.33334 11.1838 7.33334 10.9998C7.33334 10.8158 7.184 10.6665 7 10.6665Z" fill="#212121"/>
    <path d="M7.38019 4.15184C6.99019 4.03518 6.55554 4.1865 6.30954 4.51784C6.12154 4.76984 6.06419 5.08384 6.15219 5.37984C6.61085 6.9225 8.05619 7.99984 9.66685 7.99984C9.85085 7.99984 10.0002 7.8505 10.0002 7.6665C10.0002 6.05584 8.92285 4.6105 7.38019 4.15184ZM6.79085 5.18984C6.75285 5.06384 6.80751 4.9645 6.84351 4.9165C6.90816 4.82984 7.00616 4.77784 7.10485 4.77784C7.13285 4.77784 7.16151 4.7825 7.18951 4.7905C8.33751 5.13184 9.17016 6.14115 9.31151 7.31184C8.14019 7.16984 7.13219 6.33718 6.79085 5.18984Z" fill="#212121"/>
    <path d="M13.0242 4.51776C12.7775 4.1871 12.3435 4.0351 11.9535 4.15176C10.4108 4.61042 9.3335 6.05576 9.3335 7.66641C9.3335 7.85041 9.48284 7.99976 9.66684 7.99976C11.2775 7.99976 12.7228 6.92242 13.1815 5.37976C13.2695 5.08442 13.2122 4.76976 13.0242 4.51776ZM12.5422 5.18976C12.2015 6.33776 11.1928 7.17042 10.0215 7.31176C10.1628 6.14041 10.9962 5.13176 12.1435 4.79042C12.1722 4.78242 12.2008 4.77776 12.2288 4.77776C12.3275 4.77776 12.4255 4.82976 12.4895 4.91642C12.5255 4.96442 12.5802 5.06376 12.5422 5.18976Z" fill="#212121"/>
    <path d="M9.66684 2.6665C9.48284 2.6665 9.3335 2.81585 9.3335 2.99985V12.9998C9.3335 13.1838 9.48284 13.3332 9.66684 13.3332C9.85084 13.3332 10.0002 13.1838 10.0002 12.9998V2.99985C10.0002 2.81585 9.85084 2.6665 9.66684 2.6665Z" fill="#212121"/>
    <path d="M9.90185 7.43148C9.77185 7.30148 9.56051 7.30148 9.43051 7.43148L7.43051 9.43148C7.30051 9.56148 7.30051 9.77283 7.43051 9.90283C7.49585 9.96748 7.58116 10.0002 7.66651 10.0002C7.75185 10.0002 7.83716 9.96752 7.90185 9.90283L9.90185 7.90283C10.0319 7.7728 10.0319 7.56148 9.90185 7.43148Z" fill="#212121"/>
    <path d="M11.9019 9.43148L9.90185 7.43148C9.77185 7.30148 9.56051 7.30148 9.43051 7.43148C9.30051 7.56148 9.30051 7.77283 9.43051 7.90283L11.4305 9.90283C11.4959 9.96748 11.5812 10.0002 11.6665 10.0002C11.7519 10.0002 11.8372 9.96752 11.9019 9.90283C12.0319 9.7728 12.0319 9.56148 11.9019 9.43148Z" fill="#212121"/>
    <path d="M15.6667 7.3335H0.333344C0.149344 7.3335 0 7.48281 0 7.66681C0 7.85081 0.149344 8.00015 0.333344 8.00015H15.6667C15.8507 8.00015 16 7.85081 16 7.66681C16 7.48281 15.8507 7.3335 15.6667 7.3335Z" fill="#212121"/>
    </g>
    <defs>
    <clipPath id="clip0_50_409">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
  </svg>
`

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class ExpCheckoutBtns {
  constructor(d) {
    this.device = d
    this.country = window.location.pathname.includes('us') ? 'us' : 'uk'
    this.init()
  }

  init() {
    this.styles()
    this.mainScript()
    this.addCouponField()
    this.stylingBasecouponFields()
    this.controlMutation()
    this.visibleHandler()
  }

  styles() {
    const style = /* html */ `
      <style>
        .hiddeExpressPayments {
          height: auto;
          overflow: visible;
          visibility: inherit;
        }
        .continue_shopping {
          border: none;
        }
        .continue_shopping span {
          font-weight: 700;
          text-decoration: underline;
        }
        .crs_wrapper {
          padding-bottom: 16px;
        }
        .promocode, .giftcard {
          padding: 8px 12px;
          border: 1px solid #CECDCD;
          background: #FAFAFA;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          width: calc(100% - 3rem);
          margin: 0 auto 8px;
        }
        .hideblock {
          display: none;
          overflow: hidden;
          height: 0;
          width: 100%;
          position: relative;
          transition: all 0.3s ease;
        }
        .promocode.show .hideblock, .giftcard.show .hideblock {
          display: block;
        }
        .promocode p, .giftcard p {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #212121;
          width: 100%;
          cursor: pointer;
        }
        .promocode p span, .giftcard p span {
          margin-left: auto;
          display: block;
          width: 9px;
          height: 1px;
          background: #000;
          position: relative;
        }
        .promocode p span::after, .giftcard p span::after {
          position: absolute;
          content: '';
          width: 1px;
          height: 9px;
          background: #000;
          top: -4px;
          left: 4px;
          transition: all 0.3s ease;
        }
        .promocode.show p span::after, .giftcard.show p span::after {
          height: 0px;
        }
        .promocode input, .giftcard input {
          width: 100%;
          border: 1px solid #CECDCD;
          background: #fff;
          border-radius: 4px;
          padding: 14px 16px 6px;
          margin-bottom: 12px;
          font-size: 14px;
          line-height: 20px;
          color: #212121;
        }
        .promocode label, .giftcard label {
          position: absolute;
          top: 15px;
          left: 16px;
          font-size: 12px;
          letter-spacing: 0.5px;
          color: #212121;
          transition: all 0.3s linear;
        }
        .promocode label span, .giftcard label span {
          color: #FF2F2F;
        }
        .promocode input:focus+label, .giftcard input:focus+label, .promocode input:not(:placeholder-shown) + label, .giftcard input:not(:placeholder-shown) + label {
          top: 6px;
          left: 16px;
          font-size: 11px;
          opacity: 0.8;
        }
        .promocode input::placeholder, .giftcard input::placeholder {
          opacity: 0;
        }
        .promocode .btns, .giftcard .btns {
          display: flex;
          gap: 8px;
          width: 100%;
        }
        .promocode .btns button, .giftcard .btns button {
          width: calc(50% - 4px);
          border: 1px solid #212121;
          color: #212121;
          padding: 10px 0;
          font-size: 18px;
          cursor: pointer;
        }
        .promocode .btns button:first-of-type, .giftcard .btns button:first-of-type {
          background: #212121;
          color: #fff;
        }
        .crs_wrapper .error {
          color: #FF2F2F;
        }
        .crs_wrapper .balance {
          color: #acacac;
          font-size: 18px;
          text-align: center;
        }
        coupon-form [zippyclass="is-open"] span, giftcards-form [zippyclass="is-open"] span {
          display: flex;
          align-items: center;
          column-gap: 8px;
        }
        coupon-form, giftcards-form {
          border: 1px solid #CECDCD;
        }
        basket-view coupon-form, basket-view giftcards-form {
          border: none;
        }
        @media (max-width: 767px) {

        }
      </style>
    `

    $el('head').insertAdjacentHTML('beforeend', style)
  }

  mainScript() {
    $$el('.button__body').forEach(btn => {
      if (
        btn.innerText.toLowerCase() === 'continue shopping' &&
        !btn.parentElement.classList.contains('continue_shopping')
      ) {
        btn.parentElement.classList.add('continue_shopping')
      }
    })
  }

  addCouponField() {
    const cart = app.customer.basket.data

    const couponField = /* html */ `
      <div class="crs_wrapper">
        <div class="promocode">
          <p>
            ${img1}
            Have you got a promo code?
            <span></span>
          </p>
          <div class="hideblock">
            <input type="text" name="promocode" id="promocode" placeholder="P" />
            <label for="promocode">Enter offer code<span>*</span></label>
            <div class="btns">
              <button>Apply</button>
              <button>Cancel</button>
            </div>
          </div>
        </div>
        <div class="giftcard">
          <p>
            ${img2}
            Have you got a gift card?
            <span></span>
          </p>
          <div class="hideblock">
            <input name="gift_card" id="gift_card" type="text" placeholder="P" />
            <label for="gift_card">Enter a gift card<span>*</span></label>
            <div class="btns">
              <button>Apply</button>
              <button>Check balance</button>
            </div>
          </div>
        </div>
      </div>
    `

    function setHandlers() {
      $el('.promocode .btns button:last-of-type').addEventListener('click', () => {
        $el('.promocode .hideblock').style.height = `0px`
        pushDataLayer(
          'exp_int_exp_check_butt_promo_canc',
          'Cancel',
          'Button',
          'Checkout page Have you got a promo code?'
        )
        setTimeout(() => {
          $el('.promocode').classList.remove('show')
        }, 300)
      })

      $el('.promocode .btns button:first-of-type').addEventListener('click', async () => {
        const code = $el('.promocode input').value
        if (code) {
          const data = await applyCoupon(code, 'coupon')
          if (data.error) {
            showError('coupon', data.error)
          }
        } else {
          showError('coupon')
        }
        pushDataLayer(
          'exp_int_exp_check_butt_promo_appl',
          'Apply',
          'Button',
          'Checkout page Have you got a promo code?'
        )
      })

      $el('.promocode p').addEventListener('click', () => {
        if (!$el('.promocode').classList.contains('show')) {
          $el('.promocode').classList.add('show')
          const scrollHeight = $el('.promocode .hideblock').scrollHeight
          $el('.promocode .hideblock').style.height = `${scrollHeight}px`
          $el('.promocode input').focus()
          pushDataLayer(
            'exp_int_exp_check_drop_check_promo',
            'Click Have you got a promo code?',
            'Dropdown',
            'Checkout page'
          )
        } else {
          $el('.promocode .hideblock').style.height = `0px`
          setTimeout(() => {
            $el('.promocode').classList.remove('show')
          }, 300)
        }
      })

      $el('.giftcard p').addEventListener('click', () => {
        if (!$el('.giftcard').classList.contains('show')) {
          $el('.giftcard').classList.add('show')
          const scrollHeight = $el('.giftcard .hideblock').scrollHeight
          $el('.giftcard .hideblock').style.height = `${scrollHeight}px`
          $el('.giftcard input').focus()
          pushDataLayer(
            'exp_int_exp_check_drop_check_gift',
            'Click Have you got a gift card?',
            'Dropdown',
            'Checkout page'
          )
        } else {
          $el('.giftcard .hideblock').style.height = `0px`
          setTimeout(() => {
            $el('.giftcard').classList.remove('show')
          }, 300)
        }
      })

      $el('.giftcard .btns button:last-of-type').addEventListener('click', async () => {
        const code = $el('.giftcard input').value
        if (code) {
          const data = await applyCoupon(code, 'giftcard', 'balance')
          if (data.error) {
            showError('giftcard', data.error)
          } else {
            if ($el('.giftcard .balance')) $el('.giftcard .balance').remove()
            $el('.giftcard').insertAdjacentHTML(
              'beforeend',
              `<p class="balance">Your balance is  ${this.country === 'uk' ? '£' : '$'}${data.balance}</p>`
            )
            setTimeout(() => {
              $el('.giftcard .error').remove()
            }, 6000)
          }
        } else {
          showError('giftcard')
        }
        pushDataLayer(
          'exp_int_exp_check_butt_gift_check',
          'Check balance',
          'Button',
          'Checkout page Have you got a gift code?'
        )
      })

      $el('.giftcard .btns button:first-of-type').addEventListener('click', async () => {
        const code = $el('.giftcard input').value
        if (code) {
          const data = await applyCoupon(code, 'giftcard')
        } else {
          showError('giftcard')
        }
        pushDataLayer('exp_int_exp_check_butt_gift_appl', 'Apply', 'Button', 'Checkout page Have you got a gift card?')
      })
    }

    function showError(type, txt) {
      const text = txt ? txt : type === 'coupon' ? 'Please enter a coupon code' : 'Please enter a gift card'
      const block = type === 'coupon' ? '.promocode' : '.giftcard'
      let random = (Math.random().toFixed(3) * 1000).toString()
      if ($el(`${block} .error`)) $el(`${block} .error`).remove()
      $el(block).insertAdjacentHTML('beforeend', `<p class="error r${random}">${text}</p>`)
      setTimeout(() => {
        $el(`${block} .error.r${random}`)?.remove()
      }, 6000)
    }

    function hideBlocks() {
      if (cart.coupon) {
        $el('.promocode').style.display = 'none'
      }

      if (cart.giftcards.length) {
        $el('.giftcard').style.display = 'none'
      }
    }

    setTimeout(() => {
      if (
        window.location.pathname.includes('/checkout') &&
        !$el('.promocode') &&
        !window.location.hash.includes('step=payment')
      ) {
        $el('[zippyname="basketTab"]').insertAdjacentHTML('beforeend', couponField)
        setHandlers()
        hideBlocks()
      } else if (
        window.location.pathname.includes('/checkout') &&
        $el('.promocode') &&
        window.location.hash.includes('step=payment')
      ) {
        $el('.crs_wrapper')?.remove()
        this.stylingBasecouponFields()
      }
    }, 500)
  }

  stylingBasecouponFields() {
    if ($el('coupon-form') && !$el('coupon-form [zippyclass="is-open"] span svg')) {
      $el('coupon-form [zippyclass="is-open"] span').insertAdjacentHTML('afterbegin', img1)
    }

    if ($el('giftcards-form') && !$el('giftcards-form [zippyclass="is-open"] span svg')) {
      $el('giftcards-form [zippyclass="is-open"] span').insertAdjacentHTML('afterbegin', img2)
    }
  }

  controlMutation() {
    const config = { childList: true, subtree: true }

    const callback = (mutationsList, observer) => {
      observer.disconnect()
      this.mainScript()
      this.addCouponField()
      $$el('.hiddeExpressPayments').forEach(el => {
        if (el.getAttribute('data-gaevent')) return
        el.setAttribute('data-gaevent', `exp_int_exp_check_visib_${window.location.pathname.split('/')[1]}`)
        el.setAttribute('data-visible', `express_checkout_buttons_${window.location.pathname.split('/')[1]}`)
      })
      observer.observe(document.body, config)
    }

    const observer = new MutationObserver(callback)
    observer.observe(document.body, config)
  }
  visibleHandler() {
    setInterval(() => {
      $$el('.hiddeExpressPayments[data-visible]').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          pushDataLayer(el.dataset.gaevent, 'View element', 'Visibility', el.dataset.visible)
          el.removeAttribute('data-visible')
        }
      })
    }, 2000)
  }
}

new ExpCheckoutBtns(device)

// apply coupon or giftcard

async function applyCoupon(coupon, type, action = 'add') {
  try {
    const body = type === 'coupon' ? { coupon: coupon } : { code: coupon }
    const API = `https://www.lemieux.com/api/p/${type}/${action}`
    const res = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await res.json()
    if (!data.error && action !== 'balance') {
      window.location.reload()
      return
    }
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
