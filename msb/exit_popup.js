console.log('%c EXP: Exit Popup (DEV: OS)', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/msb/'

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
    clarity('set', 'exp_pop_car_retent', 'variant_1')
  }
}, 1000)

const blockVisibility = (selector, event, descr, location) => {
  let v1 = new IntersectionObserver(
    entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          v1.unobserve(item.target)
          setTimeout(function () {
            v2.observe(item.target)
          }, 1000 * 3)
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  let v2 = new IntersectionObserver(entries => {
    entries.forEach(item => {
      if (item.isIntersecting) {
        pushDataLayer(
          event || `view_element_${item.target.id}`,
          descr || 'Element visibility',
          'Visibility',
          location || item.target.id
        )
        v1.unobserve(item.target)
      } else {
        v1.observe(item.target)
      }
      v2.unobserve(item.target)
    })
  })

  document.querySelectorAll(selector).forEach(item => {
    v1.observe(item)
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

const promoPopupContent = {
  men: [
    {
      title: "Men's wallets",
      image: 'img/exit_popup/mens_wallets.png',
      link: '/men/personalised-leather-wallet-mens.html'
    },
    {
      title: 'men’s briefcases',
      image: 'img/exit_popup/mens_briefcases.png',
      link: '/men/business/luxury-leather-briefcases.html'
    },
    {
      title: 'men’s luggage',
      image: 'img/exit_popup/mens_luggage.png',
      link: '/men/travel/luxury-leather-luggage.html'
    }
  ],
  women: [
    {
      title: "women's handbags",
      image: 'img/exit_popup/womens_handbags.png',
      link: '/women/classic-ladies-leather-handbags.html'
    },
    {
      title: 'women’s purses',
      image: 'img/exit_popup/womens_purses.png',
      link: '/women/classic-leather-purses-ladies.html'
    },
    {
      title: 'women’s briefcases',
      image: 'img/exit_popup/womens_briefcases.png',
      link: '/women/business/ladies-best-leather-briefcases.html'
    }
  ]
}

const icons = {
  copy: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M14.3877 0H5.30462C4.8775 0.00162093 4.46835 0.172009 4.16633 0.474025C3.86432 0.77604 3.69393 1.1852 3.69231 1.61231V3.69231H1.61231C1.1852 3.69393 0.77604 3.86432 0.474025 4.16633C0.172009 4.46835 0.00162093 4.8775 0 5.30462V14.3877C0.00162093 14.8148 0.172009 15.224 0.474025 15.526C0.77604 15.828 1.1852 15.9984 1.61231 16H10.6954C11.1225 15.9984 11.5317 15.828 11.8337 15.526C12.1357 15.224 12.3061 14.8148 12.3077 14.3877V12.3077H14.3877C14.8148 12.3061 15.224 12.1357 15.526 11.8337C15.828 11.5317 15.9984 11.1225 16 10.6954V1.61231C15.9984 1.1852 15.828 0.77604 15.526 0.474025C15.224 0.172009 14.8148 0.00162093 14.3877 0ZM11.0769 14.3877C11.0769 14.4889 11.0367 14.5859 10.9652 14.6575C10.8936 14.729 10.7966 14.7692 10.6954 14.7692H1.61231C1.51112 14.7692 1.41407 14.729 1.34252 14.6575C1.27097 14.5859 1.23077 14.4889 1.23077 14.3877V5.30462C1.23077 5.20343 1.27097 5.10638 1.34252 5.03483C1.41407 4.96327 1.51112 4.92308 1.61231 4.92308H10.6954C10.7966 4.92308 10.8936 4.96327 10.9652 5.03483C11.0367 5.10638 11.0769 5.20343 11.0769 5.30462V14.3877ZM14.7692 10.6954C14.7692 10.7966 14.729 10.8936 14.6575 10.9652C14.5859 11.0367 14.4889 11.0769 14.3877 11.0769H12.3077V5.30462C12.3061 4.8775 12.1357 4.46835 11.8337 4.16633C11.5317 3.86432 11.1225 3.69393 10.6954 3.69231H4.92308V1.61231C4.92308 1.51112 4.96327 1.41407 5.03483 1.34252C5.10638 1.27097 5.20343 1.23077 5.30462 1.23077H14.3877C14.4889 1.23077 14.5859 1.27097 14.6575 1.34252C14.729 1.41407 14.7692 1.51112 14.7692 1.61231V10.6954Z"
      fill="currentColor"
    />
  </svg>`,
  copied: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0C5.388 0 0 5.388 0 12C0 18.612 5.388 24 12 24C18.612 24 24 18.612 24 12C24 5.388 18.612 0 12 0ZM17.736 9.24L10.932 16.044C10.764 16.212 10.536 16.308 10.296 16.308C10.056 16.308 9.828 16.212 9.66 16.044L6.264 12.648C5.916 12.3 5.916 11.724 6.264 11.376C6.612 11.028 7.188 11.028 7.536 11.376L10.296 14.136L16.464 7.968C16.812 7.62 17.388 7.62 17.736 7.968C18.084 8.316 18.084 8.88 17.736 9.24Z"
      fill="#A11A17"
    />
  </svg>`,
  fire: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.23567 15C4.68405 14.7621 3.36202 13.4342 4.00238 10.6157C4.65097 11.5561 4.88682 11.0593 4.88682 11.0593C4.92613 7.86523 7.34365 7.0667 7.34365 7.0667C6.62025 8.69947 8.05176 8.74459 8.14948 10.5979C8.73914 10.2962 8.95534 9.95911 8.95534 9.95911C10.9077 12.5842 9.46019 14.4626 7.61331 14.9445C10.5714 14.565 13.1147 12.0602 11.8966 6.69877C10.6723 8.47396 10.2271 7.53616 10.2271 7.53616C10.1529 1.50726 5.58978 0 5.58978 0C6.95527 3.08196 4.25318 3.16708 4.06868 6.66531C2.95571 6.09589 2.54764 5.45951 2.54764 5.45951C-1.53773 10.9528 2.26352 14.7142 6.23567 15Z"
      fill="#A11A17"
    />
  </svg>`,
  warranty: /* HTML */ ` <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <g clip-path="url(#clip0_197_63534)">
      <path
        d="M24.1 12.5C24.1 11.3 22.7 10.3 22.4 9.29999C22 8.19999 22.6 6.59999 21.9 5.69999C21.2 4.79999 19.6 4.79999 18.6 4.09999C17.7 3.39999 17.2 1.79999 16.1 1.49999C15 1.09999 13.7 1.99999 12.5 1.99999C11.3 1.99999 10 0.999986 8.90002 1.39999C7.80002 1.79999 7.30002 3.39999 6.40002 3.99999C5.40002 4.69999 3.80002 4.69999 3.10002 5.69999C2.40002 6.59999 2.90002 8.19999 2.60002 9.29999C2.30002 10.4 0.900024 11.3 0.900024 12.5C0.900024 13.7 2.30002 14.7 2.60002 15.7C3.00002 16.8 2.40002 18.4 3.10002 19.3C3.80002 20.2 5.40002 20.2 6.40002 20.9C7.30002 21.6 7.80002 23.2 8.90002 23.5C10 23.8 11.3 22.9 12.5 22.9C13.7 22.9 15 23.9 16.1 23.5C17.2 23.1 17.7 21.6 18.6 20.9C19.5 20.2 21.2 20.2 21.9 19.3C22.6 18.4 22.1 16.8 22.4 15.7C22.8 14.7 24.1 13.7 24.1 12.5ZM12.5 21.5C7.50002 21.5 3.50002 17.5 3.50002 12.5C3.50002 7.49999 7.50002 3.49999 12.5 3.49999C17.5 3.49999 21.5 7.49999 21.5 12.5C21.5 17.5 17.5 21.5 12.5 21.5Z"
        fill="#B68B52"
      />
      <path
        d="M18.2 6.80002C16.7 5.30002 14.7 4.40002 12.5 4.40002C10.3 4.40002 8.30002 5.30002 6.80002 6.80002C5.30002 8.30002 4.40002 10.3 4.40002 12.5C4.40002 14.7 5.20002 16.7 6.80002 18.2C8.30002 19.7 10.3 20.6 12.5 20.6C14.7 20.6 16.7 19.8 18.2 18.2C19.7 16.7 20.6 14.7 20.6 12.5C20.6 10.3 19.7 8.30002 18.2 6.80002Z"
        fill="#B68B52"
      />
      <path
        d="M8.00007 15.0999V14.3999C8.80007 13.7999 9.40007 13.2999 9.90007 12.8999C10.6001 12.2999 10.7001 11.8999 10.7001 11.4999C10.7001 10.9999 10.3001 10.5999 9.70007 10.5999C9.10007 10.5999 8.60007 11.0999 8.70007 11.7999H7.80007C7.70007 10.6999 8.40007 9.79993 9.70007 9.79993C10.9001 9.79993 11.6001 10.5999 11.6001 11.4999C11.6001 11.9999 11.4001 12.5999 10.8001 13.1999C10.5001 13.5999 10.0001 13.8999 9.30007 14.3999H11.7001V15.1999H8.00007V15.0999Z"
        fill="white"
      />
      <path
        d="M13.6001 9.8999H16.9001V10.6999H14.3001L14.2001 11.8999C14.5001 11.6999 14.9001 11.4999 15.3001 11.4999C16.2001 11.4999 17.1001 12.1999 17.1001 13.2999C17.1001 14.3999 16.2001 15.1999 15.1001 15.1999C14.0001 15.1999 13.4001 14.5999 13.1001 13.9999L13.9001 13.6999C14.1001 14.0999 14.5001 14.3999 15.0001 14.3999C15.7001 14.3999 16.1001 13.8999 16.1001 13.2999C16.1001 12.6999 15.6001 12.1999 15.0001 12.1999C14.6001 12.1999 14.3001 12.3999 14.0001 12.5999L13.2001 12.3999L13.6001 9.8999Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_197_63534">
        <rect width="25" height="25" fill="white" />
      </clipPath>
    </defs>
  </svg>`,
  return: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path
      d="M17.0759 0H1.84388C0.801688 0 0 0.881857 0 1.92405V17.0759C0 18.1181 0.881856 19 1.92405 19H17.0759C18.1181 19 19 18.1181 19 17.0759V1.92405C18.9198 0.881857 18.1181 0 17.0759 0ZM9.45992 15.7131C6.73418 15.7131 4.48945 13.4684 4.48945 10.7426H5.69198C5.69198 12.827 7.37553 14.4304 9.37975 14.4304C11.4641 14.4304 13.0675 12.7468 13.0675 10.7426C13.0675 8.65823 11.384 7.05485 9.37975 7.05485V9.54008L6.4135 6.4135L9.54009 3.28692V5.77215C12.2658 5.77215 14.5105 8.01688 14.5105 10.7426C14.4304 13.4684 12.1857 15.7131 9.45992 15.7131Z"
      fill="#B68B52"
    />
  </svg>`,
  close: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
    <path
      d="M1.67181 2L11 11.3M1.67181 11.3L11 2"
      stroke="#333333"
      stroke-width="2.325"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`
}
class ExitPopup {
  constructor() {
    this.isUserWatchedPopup = false
    this.idleTime = 60
    this.sessionTime = 180
    this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
    this.country = window.location.host.includes('au')
      ? 'AU'
      : window.location.host.includes('us')
      ? 'US'
      : window.location.host.includes('ca')
      ? 'CA'
      : 'UK'
    this.testId = window.location.host.includes('au')
      ? 'Wpgeya'
      : window.location.host.includes('us')
      ? 'TKAxwu'
      : 'Xv5Qvf'
    this.init()
  }
  init() {
    this.firstOrderDiscountPopup()
    this.insertPopups()
    this.popupsShowTriggers()
  }

  async firstOrderDiscountPopup() {
    const style = /* HTML */ ` <style>
      .popup-hidden {
        display: none !important;
      }
      .crs-hide-font {
        font-size: 0 !important;
      }
      button.needsclick.go397051626:first-child,
      button.needsclick.go397051626:first-child:hover,
      button.needsclick.go397051626:first-child:focus {
        background: #a11a17 !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button.needsclick.go397051626:first-child span {
        font-size: 12px;
        visibility: visible;
        text-transform: uppercase;
      }
      div[data-testid='form-component']:last-child {
        padding-bottom: 10px !important;
      }
      #rich-text-100045421,
      #rich-text-100045179,
      #rich-text-100045283,
      .crs-promo-form__title,
      #rich-text-100045185 > p:first-child span,
      #rich-text-100045289 > p:first-child span,
      #rich-text-100045427 > p:first-child span {
        color: var(--MSB-UI-Black, #333) !important;
        font-family: 'adobe-garamond-pro', serif !important;
        font-size: 32px !important;
        font-weight: 400;
        line-height: 40px;
        margin-top: -40px;
        margin-bottom: -15px;
      }
      #rich-text-100045185,
      #rich-text-100045289,
      #rich-text-100045427 {
        margin-top: -40px;
      }
      .crs-promo-form__title {
        margin-top: 0 !important;
        margin-bottom: 10px !important;
      }
      .crs-promo-form__list {
        margin-bottom: 10px;
      }
      #rich-text-100045179 {
        font-size: 30px !important;
      }
      :is(#rich-text-100045421, #rich-text-100045179, #rich-text-100045283, ) span {
        color: var(--MSB-UI-Red, #a11a17);
        font-family: 'adobe-garamond-pro', serif;
        text-transform: uppercase;
      }
      #rich-text-100045180,
      #rich-text-100045422,
      #rich-text-100045284 {
        color: var(--MSB-UI-Dark-gray, #646464);
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
      }
      label[id^='label-DateOfBirth'],
      label[id^='kl_Content'] {
        font-size: 12px !important;
        margin-bottom: 6px !important;
      }
      .crs-promo-form__close {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 50px;
      }
      .crs-promo-form__close-btn,
      .crs-promo-form__close-btn:focus,
      .crs-promo-form__close-btn:hover {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        color: var(--MSB-UI-Dark-gray, #646464);
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .crs-promo-form__img {
        transform: scaleX(-1) !important;
        background-position: 85% 50% !important;
      }
      .crs-promo-form__content {
        padding: 0 20px 20px;
      }

      .crs-promo-form__descr {
        color: var(--MSB-UI-Dark-gray, #646464);
        font-size: 16px;
        line-height: 22px;
      }
      .crs-promo-form__actions {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .crs-promo-form__continue,
      .crs-promo-form__continue:focus,
      .crs-promo-form__continue:hover {
        width: 100%;
        background: #a11a17;
        color: var(--Untitled-White, #fff);
        text-align: center;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .crs-promo-form__enhance,
      .crs-promo-form__enhance:focus,
      .crs-promo-form__enhance:hover {
        background: none;
        border: none;
        color: var(--MSB-UI-Dark-gray, #646464);
        text-align: center;
        font-size: 14px;

        font-weight: 700;
        line-height: 22px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      @media (min-width: 768px) {
        [data-testid^='klaviyo-form'] > div.needsclick:first-of-type {
          padding: 25px 0 !important;
        }

        .crs-promo-form__list {
          margin-top: 20px;
          padding-left: 30px;
        }
        #rich-text-100045421,
        #rich-text-100045179,
        #rich-text-100045283,
        .crs-promo-form__title,
        #rich-text-100045185 > p:first-child span,
        #rich-text-100045289 > p:first-child span,
        #rich-text-100045427 > p:first-child span {
          font-size: 40px;
          margin-top: 0;
          margin-bottom: -10px;
        }
        #rich-text-100045185,
        #rich-text-100045289,
        #rich-text-100045427 {
          margin-top: 0;
          padding-right: 20px;
        }
        [data-testid^='klaviyo-form'] {
          width: 890px !important;
          & > div {
            min-width: 50% !important;
          }
        }
        .crs-promo-form__content {
          padding-bottom: 0 !important;
          padding: 50px 36px 20px;
          margin-bottom: 50px;
        }
        .crs-promo-form__content .crs-promocode {
          gap: 8px;
        }

        .crs-promo-form__content .crs-promocode__code {
          padding: 12px !important;
        }
      }
    </style>`
    document.head.insertAdjacentHTML('beforeend', style)
    const enhanceExpiriencePopup = await waitForElement('.needsclick.kl-private-reset-css-Xuajs1')

    if (enhanceExpiriencePopup) {
      let init = false
      const popupVisivbleObserver = new IntersectionObserver(
        entries => {
          entries.forEach(item => {
            if (item.isIntersecting) {
              const inputInterval = setInterval(() => {
                if ($el('input[aria-label="First Name*"]') && $el('input[aria-label="First Name*"]').value !== 'CRS') {
                  $el('input[aria-label="First Name*"]').value = 'CRS'
                  $el('input[aria-label="First Name*"]').dispatchEvent(new Event('input'))
                } else {
                  clearInterval(inputInterval)
                }
              }, 50)
            }

            if (item.isIntersecting && init) {
              this.isUserWatchedPopup = true
            }

            if (item.isIntersecting) {
              init = true
            }
          })
        },
        {
          threshold: 0.5
        }
      )
      const changePopupImage = () => {
        const imageUrl = 'https://www.maxwellscottbags.com/media/wysiwyg/Static-Pages/about/loreto-min.jpg'
        if (this.device === 'Desktop') {
          $$el('div.needsclick').forEach(item => {
            if (item.style.backgroundImage) {
              item.style.backgroundImage = `url(${imageUrl})`
              item.classList.add('crs-promo-form__img')
            }
          })
        }
        if (this.device === 'Mobile') {
          const image = $el('div.needsclick img')
          if (image) {
            image.src = `${git}img/order_popup_mobile.png`
          }
        }
      }

      let closeBtnEvent = event => {}
      const popupMutationObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          const enhancePopupTarget = mutation.target.querySelector('[id^="DateOfBirth"]')
          const enhanceForm = enhancePopupTarget?.closest('form > div')
          changePopupImage()
          if (enhanceForm && enhanceForm.dataset.hidden !== 'not-hidden') {
            popupMutationObserver.disconnect()
            enhanceForm.style.display = 'none'
            const newPopupWithPromoHtml = /* HTML */ `
              <div class="crs-promo-form">
                <div class="crs-promo-form__content">
                  <h2 class="crs-promo-form__title">You are on the list</h2>

                  ${this.country === 'UK'
                    ? /* HTML */ `<ul class="crs-promo-form__list">
                        <li>Your 10% first order discount is ready (no minimum spend, no exclusions).</li>
                        <li>Plus, <b>FREE</b> next-day UK delivery by FedEx.</li>
                      </ul>`
                    : /* HTML */ `<p class="crs-promo-form__descr">
                        Your 10% first order discount is ready (no minimum spend, no exclusions).
                      </p>`}
                  ${this.promoCode()}
                  <div class="crs-promo-form__actions">
                    <button class="crs-promo-form__continue" data-popup="promocode">Continue shopping</button>
                    <button class="crs-promo-form__enhance">Enhance your experience</button>
                  </div>
                </div>
              </div>
            `
            if ($el('.crs-promo-form')) return
            const form = enhanceForm.closest('form')
            form.insertAdjacentHTML('afterbegin', newPopupWithPromoHtml)
            $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)

            if (this.country === 'UK') {
              blockVisibility(
                '.crs-promo-form',
                'exp_pop_car_retent_vis_youlisuk_view',
                'Pop up view',
                'Pop up You are on the list UK'
              )
              closeBtnEvent = e => {
                pushDataLayer(
                  'exp_pop_car_retent_but_youlisuk_clos',
                  'Close',
                  'Button',
                  'Pop up You are on the list UK'
                )
              }
              $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
              $el('div[role="dialog"] .klaviyo-close-form').addEventListener('click', closeBtnEvent)
            } else {
              blockVisibility(
                '.crs-promo-form',
                'exp_pop_car_retent_vis_youlisuca_view',
                'Pop up view',
                'Pop up You are on the list USA, Canada, Australia'
              )
              closeBtnEvent = e => {
                pushDataLayer(
                  'exp_pop_car_retent_but_youlisuca_clos',
                  'Close',
                  'Button',
                  'Pop up You are on the list USA, Canada, Australia'
                )
              }
              $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
              $el('div[role="dialog"] .klaviyo-close-form').addEventListener('click', closeBtnEvent)
            }

            if (this.device === 'Mobile') {
              const copyImage = enhanceForm.querySelector('[data-testid="form-row"]:first-child').cloneNode(true)
              $el('.crs-promo-form').prepend(copyImage)
            }
            $el('.crs-promo-form__continue').addEventListener('click', () => {
              $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
              $el('.klaviyo-close-form')?.click()
              $el('div[role="dialog"] .klaviyo-close-form').addEventListener('click', closeBtnEvent)
            })
            $el('.crs-promo-form__enhance').addEventListener('click', () => {
              enhanceForm.style.display = 'block'
              enhanceForm.dataset.hidden = 'not-hidden'
              $el('.crs-promo-form').style.display = 'none'
              popupMutationObserver.observe($el('form.klaviyo-form-version-cid_3'), {
                childList: true,
                subtree: true
              })
              $$el('div[component]').forEach(item => {
                if (item.innerText.includes('SUBSCRIBE NOW')) {
                  item.querySelector('button').classList.add('crs-hide-font')
                }
                if (item.innerText.includes('SKIP AND REVEAL CODE')) {
                  item.parentElement.style.display = 'none'
                }
                if (item.innerText.includes('SUBMIT')) {
                  $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
                  item.querySelector('button').addEventListener('click', () => {
                    $el('.klaviyo-close-form')?.click()
                  })
                }
              })
            })
          }
        })
      })

      const selector = `form[data-testid="klaviyo-form-${this.testId}"]`
      waitForElement(selector).then(elem => {
        if (this.country === 'UK') {
          blockVisibility(
            selector,
            'exp_pop_car_retent_vis_fredeluk_view',
            'Pop up view',
            'Pop up Get 10% Off plus Free Next-Day UK Delivery! UK'
          )
          closeBtnEvent = e => {
            pushDataLayer(
              'exp_pop_car_retent_but_fredeluk_clos',
              'Close',
              'Button',
              'Pop up Get 10% Off plus Free Next-Day UK Delivery! UK'
            )
          }
          $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
          $el('div[role="dialog"] .klaviyo-close-form').addEventListener('click', closeBtnEvent)
          const emailInput = elem.querySelector('input[id^="email"]')
          emailInput.addEventListener('change', e => {
            pushDataLayer(
              'exp_pop_car_retent_inp_fredeluk_email',
              'Email',
              'Input',
              'Pop up Get 10% Off plus Free Next-Day UK Delivery! UK'
            )
          })
        } else {
          blockVisibility(
            selector,
            'exp_pop_car_retent_vis_firorduca_view',
            'Pop up view',
            'Pop up Get 10% Off Your First Order! USA, Canada, Australia'
          )
          closeBtnEvent = e => {
            pushDataLayer(
              'exp_pop_car_retent_but_firorduca_clos',
              'Close',
              'Button',
              'Pop upGet 10% Off Your First Order! USA, Canada, Australia'
            )
          }
          $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
          $el('div[role="dialog"] .klaviyo-close-form').addEventListener('click', closeBtnEvent)
          const emailInput = elem.querySelector('input[id^="email"]')
          emailInput.addEventListener('change', e => {
            pushDataLayer(
              'exp_pop_car_retent_inp_firorduca_email',
              'Email',
              'Input',
              'Pop up Get 10% Off Your First Order! USA, Canada, Australia'
            )
          })
        }

        elem.addEventListener('mousedown', e => {
          const target = e.target
          if (this.country === 'UK') {
            if (target.closest('button[data-popup="email"]')) {
              pushDataLayer(
                'exp_pop_car_retent_but_fredeluk_getdis',
                'Get discount',
                'Button',
                'Pop up Get 10% Off plus Free Next-Day UK Delivery! UK'
              )
            }
            if (target.closest('.crs-promo-form__close')) {
              pushDataLayer(
                'exp_pop_car_retent_but_fredeluk_no',
                'No, thanks',
                'Button',
                'Pop up Get 10% Off plus Free Next-Day UK Delivery! UK'
              )
            }
            if (target.closest('.crs-promocode__copy-btn')) {
              pushDataLayer(
                'exp_pop_car_retent_but_youlisuk_code',
                'Promo code',
                'Button',
                'Pop up You are on the list UK'
              )
            }
            if (target.closest('button[data-popup="promocode"]')) {
              $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
              pushDataLayer(
                'exp_pop_car_retent_but_youlisuk_cont',
                'Continue shopping',
                'Button',
                'Pop up You are on the list UK'
              )
            }
            if (target.closest('.crs-promo-form__enhance')) {
              pushDataLayer(
                'exp_pop_car_retent_but_youlisuk_exper',
                'Enhance your experience with us',
                'Button',
                'Pop up You are on the list UK'
              )
            }
          } else {
            if (target.closest('button[data-popup="email"]')) {
              pushDataLayer(
                'exp_pop_car_retent_but_firorduca_getdis',
                'Get discount',
                'Button',
                'Pop up Get 10% Off Your First Order! USA, Canada, Australia'
              )
            }
            if (target.closest('.crs-promo-form__close')) {
              $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)

              pushDataLayer(
                'exp_pop_car_retent_but_firorduca_no',
                'No, thanks',
                'Button',
                'Pop up Get 10% Off Your First Order! USA, Canada, Australia'
              )
            }
            if (target.closest('.crs-promocode__copy-btn')) {
              pushDataLayer(
                'exp_pop_car_retent_but_youlisuca_code',
                'Promo code',
                'Button',
                'Pop up You are on the list USA, Canada, Australia'
              )
            }
            if (target.closest('button[data-popup="promocode"]')) {
              $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)

              pushDataLayer(
                'exp_pop_car_retent_but_youlisuca_cont',
                'Continue shopping',
                'Button',
                'Pop up You are on the list USA, Canada, Australia'
              )
            }
            if (target.closest('.crs-promo-form__enhance')) {
              pushDataLayer(
                'exp_pop_car_retent_but_youlisuca_exper',
                'Enhance your experience with us',
                'Button',
                'Pop up You are on the list USA, Canada, Australia'
              )
            }
          }
        })
        popupVisivbleObserver.observe(elem)
        const titleSelectors = ['#rich-text-100045421', '#rich-text-100045179', '#rich-text-100045283']
        titleSelectors.forEach(selector => {
          const title = elem.querySelector(selector)
          if (title) {
            title.innerHTML =
              this.country === 'UK'
                ? 'Get <span>10% Off</span> Plus Free Next-Day UK Delivery!'
                : 'Get <span>10% Off</span> <br> Your First Order!'
          }
        })
        const descrSelectors = ['#rich-text-100045180', '#rich-text-100045422', '#rich-text-100045284']
        descrSelectors.forEach(selector => {
          const descr = elem.querySelector(selector)
          if (descr) {
            descr.innerHTML = 'Subscribe to our newsletter and save <br> on your entire first order, no limits.'
          }
        })
        elem.querySelector('input[aria-label="First Name*"]').style.visibility = 'hidden'
        elem.querySelector('input[aria-label="First Name*"]').style.height = 0

        $$el('button.needsclick').forEach(item => {
          if (item.innerText.includes('SUBSCRIBE NOW')) {
            item.style.display = 'none'

            const newButton = document.createElement('button')
            newButton.classList.add('crs-promo-form__continue')
            newButton.innerHTML = '<span>Get 10% discount</span>'
            newButton.dataset.popup = 'email'
            item.parentElement.appendChild(newButton)
            newButton.addEventListener('click', () => {
              item.click()
            })
          }
        })
        changePopupImage()

        const exitButtonHtml = /* HTML */ `
          <div class="crs-promo-form__close">
            <button class="crs-promo-form__close-btn">No, thanks</button>
          </div>
        `
        elem
          .querySelector('button.needsclick.go397051626:first-child')
          .parentElement.parentElement.insertAdjacentHTML('afterend', exitButtonHtml)
        $el('.crs-promo-form__close').addEventListener('click', event => {
          event.preventDefault()
          $el('div[role="dialog"] .klaviyo-close-form').removeEventListener('click', closeBtnEvent)
          $el('.klaviyo-close-form')?.click()
          $el('div[role="dialog"] .klaviyo-close-form').addEventListener('click', closeBtnEvent)
        })
        popupMutationObserver.observe(elem, {
          childList: true,
          subtree: true
        })
      })
    }
  }
  popupsShowTriggers() {
    const showPopupByIdleTime = () => {
      let timer,
        currSeconds = 0

      const resetTimer = () => {
        clearInterval(timer)
        currSeconds = 0
        timer = setInterval(startIdleTimer, 1000)
      }
      window.onload = resetTimer
      window.onmousemove = resetTimer
      window.onmousedown = resetTimer
      window.ontouchstart = resetTimer
      window.onclick = resetTimer
      window.onkeypress = resetTimer

      const startIdleTimer = () => {
        currSeconds++
        if (currSeconds >= this.idleTime) {
          const isProductInCart = this.checkProductsInCart()
          if (isProductInCart) {
            this.showCartPopup()
          }
          if (this.isUserWatchedPopup && !isProductInCart) {
            this.showPromoPopup()
          }
          resetTimer()
        }
      }

      timer = setInterval(startIdleTimer, 1000)
    }

    const showPopupByTime = () => {
      const timerId = setTimeout(() => {
        const isProductInCart = this.checkProductsInCart()
        if (isProductInCart) {
          this.showCartPopup()
        }
        if (this.isUserWatchedPopup && !isProductInCart) {
          this.showPromoPopup()
          clearInterval(timerId)
        } else {
          const waitForUserWatchedPopup = () => {
            setTimeout(() => {
              if (this.isUserWatchedPopup) {
                this.showPromoPopup()
                clearInterval(timerId)
              } else {
                waitForUserWatchedPopup()
              }
            }, 50)
          }
          waitForUserWatchedPopup()
        }
      }, this.sessionTime * 1000)
    }

    $el('#product-addtocart-button')?.addEventListener('click', () => {
      sessionStorage.removeItem(CART_POPUP_SHOWN)
      setTimeout(() => {
        const isProductInCart = this.checkProductsInCart()
        if (isProductInCart) {
          this.showCartPopup()
        }
      }, 120000)
    })
    window.addEventListener('scroll', () => {
      const scrollSpeed = checkScrollSpeed()
      if (scrollSpeed < -120 || scrollSpeed > 120) {
        const isProductInCart = this.checkProductsInCart()
        if (isProductInCart) {
          this.showCartPopup()
        } else {
          if (this.isUserWatchedPopup) {
            this.showPromoPopup()
          }
        }
      }
      const scrollHeight = document.documentElement.scrollHeight
      const visibleHeight = window.innerHeight
      const scrolled = window.scrollY

      const scrollPercentage = (scrolled / (scrollHeight - visibleHeight)) * 100
      if (scrollPercentage >= 50 && this.isUserWatchedPopup) {
        this.showPromoPopup()
      }
    })
    if (this.device === 'Desktop') {
      // show popup when mouse leaves the window
      document.addEventListener('mouseleave', event => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        ) {
          const isProductInCart = this.checkProductsInCart()
          if (isProductInCart) {
            this.showCartPopup()
          } else {
            if (this.isUserWatchedPopup) {
              this.showPromoPopup()
            }
          }
        }
      })
      // show popup when user switches tabs
      window.addEventListener('focus', () => {
        const isProductInCart = this.checkProductsInCart()
        if (isProductInCart) {
          this.showCartPopup()
        } else {
          if (this.isUserWatchedPopup) {
            this.showPromoPopup()
          }
        }
      })
    }

    showPopupByTime()
    showPopupByIdleTime()
  }

  checkProductsInCart() {
    const cart = JSON.parse(localStorage.getItem('mage-cache-storage'))?.cart?.items
    return cart?.length > 0
  }
  showPromoPopup() {
    const PROMO_POPUP_SHOWN = 'promoPopupShown'
    const promoPopup = $el('#promo-popup')
    const isPopupShownDuringSession = sessionStorage.getItem(PROMO_POPUP_SHOWN)

    if (isPopupShownDuringSession || location.pathname.includes('checkout')) return

    let gender = 'men'

    // check gender by viewed products
    const items = JSON.parse(localStorage.getItem('__kla_viewed')) || []

    const keywords = {
      men: ['men', 'father', 'him'],
      women: ['women', 'mother', 'her']
    }

    const counts = items.reduce(
      (acc, item) => {
        const categories = item[0].Categories

        for (let category of categories) {
          const words = category.toLowerCase().split(' ')

          if (keywords.men.some(keyword => words.includes(keyword))) {
            acc.men++
          }

          if (keywords.women.some(keyword => words.includes(keyword))) {
            acc.women++
          }
        }

        return acc
      },
      { men: 0, women: 0 }
    )

    gender = counts.men > counts.women ? 'men' : 'women'

    // check gender by current page
    if (location.pathname.includes('women') || location.pathname.includes('men')) {
      gender = location.pathname.includes('men') ? 'men' : 'women'
    }

    $el('.crs-promo__content').innerHTML = /* HTML */ `
      <div class="crs-promo__blocks">
        ${promoPopupContent[gender]
          .map(item => {
            return /* HTML */ `
              <div class="crs-promo__block">
                <img class="crs-promo__block-img" src="${git}${item.image}" alt="" />
                <div class="crs-promo__block-header">
                  <h3 class="crs-promo__block-title">${item.title}</h3>
                </div>
                <div class="crs-promo__block-action">
                  <a class="crs-promo__block-link" href="${item.link}">Shop Now</a>
                </div>
              </div>
            `
          })
          .join('')}
      </div>
    `
    promoPopup.showModal()
    waitForElement('.crs-promo__blocks').then(elem => {
      elem.addEventListener('mousedown', e => {
        if (e.target.tagName === 'A') {
          const title = e.target.closest('.crs-promo__block').querySelector('.crs-promo__block-title').innerText
          pushDataLayer(
            'exp_pop_car_retent_but_popsale_title',
            `${title} - Shop Now`,
            'Button',
            'Pop up Winter sale - Up to 60% Off'
          )
        }
      })
    })
    sessionStorage.setItem(PROMO_POPUP_SHOWN, true)
  }

  showCartPopup() {
    const CART_POPUP_SHOWN = 'cartPopupShown'
    const cartPopup = $el('#cart-popup')
    const isPopupShownDuringSession = sessionStorage.getItem(CART_POPUP_SHOWN)
    if (isPopupShownDuringSession || location.pathname.includes('checkout')) return
    const cart = JSON.parse(localStorage.getItem('mage-cache-storage'))?.cart?.items

    if (!cart) return

    const cartPopupContent = $el('.crs-cart__content')
    cartPopupContent.innerHTML = /* HTML */ `
      <style>
        .crs-cart__producs {
          position: relative;
          max-height: 200px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 10px 0;
        }

        .crs-cart__producs::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 3px;
          background: #d9d9d9;
          filter: blur(7px);
        }
        .crs-cart__product {
          display: flex;
          gap: 12px;
          height: 90px;
          width: 100%;
          justify-content: flex-start;
          align-items: center;
        }
        .crs-cart__product-img {
          width: 71px;
          height: 71px;
          object-fit: contain;
        }
        .crs-cart__product-content {
          width: 100%;
        }
        .crs-cart__product-title,
        .crs-cart__product-qty,
        .crs-cart__product-price,
        .crs-cart__product-price .price,
        .crs-cart__product-color {
          margin: 0;
          color: #646464;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        }
        .crs-cart_product-header {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .crs-cart__product-title {
          color: var(--Untitled-Black, var(--H1-Font, #333));
          font-family: 'adobe-garamond-pro', serif;
          font-size: 18px;
          font-weight: 700;
        }
        .crs-cart__product-price .price {
          color: var(--MSB-UI-Black, var(--H1-Font, #333)) !important;
          font-family: 'adobe-garamond-pro', serif !important;
          font-size: 16px !important;
          font-weight: 600 !important;
        }
      </style>
      <div class="crs-cart__producs">
        ${cart
          .map(item => {
            return /* HTML */ `
              <div class="crs-cart__product">
                <img class="crs-cart__product-img" src="${item.product_image.src}" alt="${item.product_image.alt}" />
                <div class="crs-cart__product-content">
                  <div class="crs-cart_product-header">
                    <h3 class="crs-cart__product-title">
                      ${item.product_name} <span class="crs-cart__product-qty">(${item.qty})</span>
                    </h3>
                    <div class="crs-cart__product-price">${item.product_price}</div>
                  </div>

                  <p class="crs-cart__product-color">
                    Colour:
                    ${item.options.map(item => {
                      if (item.label === 'Colour') {
                        return item.value
                      }
                    })}
                  </p>
                </div>
              </div>
            `
          })
          .join('')}
      </div>
    `
    cartPopup.showModal()
    sessionStorage.setItem(CART_POPUP_SHOWN, true)
  }

  promoCode() {
    window.crsCpyToClipboard = btn => {
      navigator.clipboard.writeText('WELCOME10')
      btn.innerHTML = icons.copied
      setTimeout(() => {
        btn.innerHTML = icons.copy
      }, 2000)
    }
    const promocodeHtml = /* HTML */ ` <style>
        .crs-promocode {
          font-family: Arial;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .crs-promocode__title {
          color: var(--Untitled-Black, var(--H1-Font, #333));
          font-size: 12px;
          font-weight: 700;
          line-height: 22px;
          margin: 0;
        }
        .crs-promocode__code {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ccc;
          padding: 18px;
          color: #a11a17;
          font-size: 14px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 4.2px;
          text-transform: uppercase;
        }
        .crs-promocode__copy-btn {
          background: none;
          border: none;
          padding: 0;
          color: #a11a17;
        }
        .crs-promocode__copy-btn:focus,
        .crs-promocode__copy-btn:hover,
        .crs-promocode__copy-btn:active {
          outline: none;
          border: none;
          background: none;
        }
      </style>
      <div class="crs-promocode">
        <p class="crs-promocode__title">Enter code at checkout</p>
        <div class="crs-promocode__code">
          WELCOME10
          <button onclick="crsCpyToClipboard(this)" class="crs-promocode__copy-btn">${icons.copy}</button>
        </div>
      </div>`

    return promocodeHtml
  }
  insertPopups() {
    const promoPopupHtml = /* HTML */ `
      <style>
        .crs-dialog {
          background-color: #fff;
          border: none;
          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
          max-width: 334px;
          padding: 0;
        }
        .crs-dialog__wrap {
          padding: 28px 14px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .crs-dialog::backdrop {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
        }
        .crs-dialog__close {
          position: absolute;
          top: 5px;
          right: 5px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .crs-dialog__close:focus,
        .crs-dialog__close:hover,
        .crs-dialog__close:active {
          outline: none;
          border: none;
          background: none;
        }
        .crs-dialog__title {
          color: var(--MSB-UI-Black, var(--H1-Font, #333));
          font-family: 'adobe-garamond-pro', serif;
          font-size: 28px;
          font-weight: 400;
          line-height: 36px;
          margin: 0;
        }
        #cart-popup .crs-dialog__title {
          text-align: left;
        }
        .crs-dialog__title span {
          color: var(--MSB-UI-Red, var(--H1-Font, #a11a17));
          text-transform: uppercase;
        }
        .crs-dialog__descr {
          color: var(--MSB-UI-Dark-gray, #646464);
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
        }
        .crs-promo__blocks {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-left: -14px;
          width: calc(100% + 28px);
        }
        .crs-promo__block {
          background: var(--H1-Font, #333);
          display: grid;
          grid-template-columns: 145px 1fr;
          grid-template-rows: 1fr 1fr;
          height: 133px;
        }
        .crs-promo__block-img {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .crs-promo__block-header {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
          padding: 12px;
          padding-bottom: 0;
          min-height: 20px;
        }
        .crs-promo__block-title {
          color: #fff;
          font-family: 'adobe-garamond-pro', serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 26px; /* 144.444% */
          text-transform: uppercase;
          margin: 0;
        }
        .crs-promo__block-action {
          grid-column: 2 / 3;
          grid-row: 2 / 3;
          padding: 12px;
        }
        .crs-promo__block-link {
          justify-self: center;
          align-self: center;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          color: #333;
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          text-transform: uppercase;
          text-decoration: none;
          padding: 14px 32px;
        }
        .crs-dialog__action {
          margin-top: 11px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .crs-promo .crs-dialog__wrap {
          padding-bottom: 0;
        }

        @media screen and (min-width: 768px) {
          .crs-dialog {
            max-width: 800px;
          }
          .crs-dialog__wrap {
            padding: 35px 50px;
          }

          .crs-dialog__title,
          .crs-dialog__descr {
            text-align: center;
          }
          .crs-dialog__title {
            font-size: 40px;
          }
          .crs-promo__blocks {
            flex-direction: row;
            gap: 20px;
            width: 100%;
            justify-content: center;
            margin: auto;
            margin-bottom: 20px;
          }
          .crs-promo__block {
            width: 240px;
            grid-template-columns: 1fr;
            grid-template-rows: 72px 1fr 72px;
            height: max-content;
            background: #fff;
          }
          .crs-promo__block-header {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            background:
              linear-gradient(0deg, var(--H1-Font, #333) 0%, var(--H1-Font, #333) 100%),
              url(<path-to-image>),
              lightgray 0px -72.789px / 100% 450.802% no-repeat;
          }
          .crs-promo__block-img {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            height: 260px;
          }
          .crs-promo__block-action {
            grid-column: 1 / 2;
            grid-row: 3 / 4;
            padding: 0;
            padding-top: 20px;
          }
          .crs-promo__block-link {
            width: 100%;
            background: #a11a17;
            color: #fff !important;
          }
        }
      </style>
      <dialog id="promo-popup" class="crs-dialog crs-promo">
        <div class="crs-dialog__wrap">
          <button class="crs-dialog__close">${icons.close}</button>
          <h2 class="crs-dialog__title">Explore our best</h2>
          <p class="crs-dialog__descr">Take a closer look at our top picks crafted just for you.</p>
          <div class="crs-dialog__content crs-promo__content"></div>
        </div>
      </dialog>
    `

    const cartPopupHtml = /* HTML */ ` <style>
        #cart-popup .crs-dialog__descr {
          position: relative;
          background: #f9efe1;
          width: fit-content;
          margin: 0 auto;
          padding: 8px 16px;
          text-align: center;
          color: var(--MSB-UI-Black, var(--H1-Font, #333));
          text-align: center;
          font-family: Arial;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 19px;
          letter-spacing: 0.7px;
        }
        #cart-popup .crs-dialog__descr::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -10px;
          border-width: 10px;
          border-style: solid;
          border-color: #f9efe1 transparent transparent transparent;
        }
        .crs-dialog__descr-icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        .crs-cart__badges {
          display: flex;
          gap: 24px;
        }
        .crs-cart__warranty,
        .crs-cart__return {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--Untitled-Black, var(--H1-Font, #333));
          font-size: 12px;
          font-weight: 400;
          line-height: 22px;
        }
        .crs-cart__checkout,
        .crs-cart__checkout:visited {
          display: block;
          width: 100%;
          background: var(--MSB-UI-Red, #a11a17);
          padding-block: 16px;
          color: var(--Untitled-White, #fff);
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        @media screen and (min-width: 768px) {
          #cart-popup {
            max-width: 560px;
          }
          #cart-popup .crs-dialog__descr {
            width: 100% !important;
          }
          .crs-dialog__title {
            padding: 0 10px;
          }
          .crs-cart__badges {
            justify-content: center;
            gap: 52px;
          }
        }
      </style>
      <dialog id="cart-popup" class="crs-dialog crs-cart">
        <div class="crs-dialog__wrap">
          <button class="crs-dialog__close">${icons.close}</button>
          <h2 class="crs-dialog__title">Check out now and get <span>10% Off</span> your first order</h2>
          ${this.country === 'UK' ? '<div>+ Free next-day UK delivery</div>' : ''}
          <div class="crs-dialog__descr">
            <span class="crs-dialog__descr-icon">${icons.fire}</span> High Demand! Limited stock available. Secure yours
            now.
          </div>
          <div class="crs-dialog__content crs-cart__content"></div>
          <div class="crs-cart__badges">
            <div class="crs-cart__warranty">${icons.warranty} 25-Year Warranty</div>
            <div class="crs-cart__return">${icons.return} 60-Day Return</div>
          </div>
          ${this.promoCode()}
          <div class="crs-dialog__action">
            <a class="crs-cart__checkout" href="/checkout">Complete my order now</a>
          </div>
        </div>
      </dialog>`

    document.body.insertAdjacentHTML('beforeend', promoPopupHtml)
    document.body.insertAdjacentHTML('beforeend', cartPopupHtml)
    $$el('.crs-dialog').forEach(popup => {
      popup.querySelector('.crs-dialog__close').addEventListener('click', () => {
        popup.close()
      })
      popup.addEventListener('click', e => {
        if (e.target === popup) {
          popup.close()
        }
      })
    })
    waitForElement('#cart-popup').then(() => {
      if (this.country === 'UK') {
        blockVisibility(
          '#cart-popup',
          'exp_pop_car_retent_vis_popchecuk_view',
          'Pop up view',
          'Pop up Check out now and get 10% off your first order + Free next-day UK delivery UK'
        )
        $el('.crs-cart__checkout').addEventListener('mousedown', () => {
          pushDataLayer(
            'exp_pop_car_retent_but_popchecuk_comp',
            'Complete my order now',
            'Button',
            'Pop up Check out now and get 10% off your first order + Free next-day UK delivery UK'
          )
        })
      } else {
        blockVisibility(
          '#cart-popup',
          'exp_pop_car_retent_vis_popchecuca_view',
          'Pop up view',
          'Pop up Check out now and get 10% off your first order USA, Canada, Australia'
        )
        $el('.crs-cart__checkout').addEventListener('mousedown', () => {
          pushDataLayer(
            'exp_pop_car_retent_but_popchecuca_comp',
            'Complete my order now',
            'Button',
            'Pop up Check out now and get 10% off your first order USA, Canada, Australia'
          )
        })
      }
    })
    waitForElement('#promo-popup').then(() => {
      blockVisibility(
        '#promo-popup',
        'exp_pop_car_retent_vis_popsale_view',
        'Pop up view',
        'Pop up Winter sale - Up to 60% Off'
      )
    })
  }
}

new ExitPopup()
