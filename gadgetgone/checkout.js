; (function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/gadgetgone/checkout/img'

  const style = /*html*/`
    <style>
      #checkout-form .wrap > .woocommerce > .woocommerce-notices-wrapper + [role="alert"] {
        display: none !important;
      }

      .page-template-checkout #customer_details {
        padding: 0!important;
        flex: 1 1 63.27% !important;
        max-width: 63.27% !important;
        margin-right: 0 !important;
        box-shadow: none !important;
        margin-bottom: 0 !important;
      }

      .page-template-checkout #order_review_wrapper {
        padding: 0 !important;
        flex: 1 1 32.4% !important;
        max-width: 32.4% !important;
      }

      .page-template-checkout .woocommerce-NoticeGroup-checkout {
        display: none !important;
      }

      #open.shopping-cart {
        display: none !important;
      }

      footer[role=contentinfo] .logo-container .logos .logo-wrapper + .logo-wrapper img:not(.custom-paypal-logo) {
        display: none;
      }

      /* Large devices such as laptops (1024px and up) */
      @media only screen and (min-width: 64em) {
        .wrap {
          max-width:1296px!important;
        } 

        .page-template-checkout form[name="checkout"] {
          display: flex;
          flex-flow: nowrap;
          justify-content: space-between;
          align-items: flex-start;
        }
      }

      /* Medium devices such as tablets (768px and smaller) */
      @media only screen and (max-width: 64em) {
        .page-template-checkout #customer_details,
        .page-template-checkout #order_review_wrapper {
          max-width: 100% !important;
        }

        .page-template-checkout #order_review_wrapper {
          margin-bottom: 0 !important;
        }
      }

    </style>`

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `exp_chec_enhanc`, 'variant_1')
    }
  }, WAIT_INTERVAL_TIMEOUT)

  start()

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

  function handleVisibilityAndHoverWithStepChecker(el, event_name, event_desc, event_type, event_loc) {
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
            const currentStep = DEVICE === 'mobile' ? document.querySelector('[data-current-step]').dataset.currentStep : 'desktop'
            pushDataLayer(event_name, `${currentStep} - ${event_desc}`, event_type, event_loc)
          }, ms)
        } else {
          clearTimeout(timer)
        }
      })
    }, config)

    observer.observe(el)
  }

  function handleVisibilityAndHoverStandart(el, event_name, event_desc, event_type, event_loc) {
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

  function pushDataLayer(event_name, event_desc, event_type, event_loc) { // Send a Google Analytics event
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function handlePriceChanging() {
    const waitForEls = setInterval(() => {
      const targetNode = document.getElementById('order_review')
      const customHeaderPriceEl = document.querySelector('.offer-value__price')

      if (customHeaderPriceEl && targetNode) {
        clearInterval(waitForEls)

        const config = { childList: true, subtree: true, characterData: true }

        const callback = function (mutationsList, observer) {
          for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
              const price = document.querySelector('.order-total .woocommerce-Price-amount.amount')

              if (price) {
                customHeaderPriceEl.textContent = price.textContent
              }
            }
          }
        }

        const observer = new MutationObserver(callback)
        observer.observe(targetNode, config)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function changeHeader() {
    if (DEVICE === 'desktop') {
      const style = /*html*/`
    <style>
      .flx {
        display: flex;
      }

      header[role=banner] .header-navigation {
        display: none !important;
      }

      header[role=banner]>.wrap {
        position: static;
      }

      header[role=banner] .site-logo svg {
        width: 108px;
      }

      header[role=banner] {
        height: 112px;
      }

      .trustpilot {
        z-index: 21;
        margin-left: auto;
      }

      .trustpilot img {
        display: block;
      }

      .trustpilot p {
        margin: 0.75rem 0 0 0;
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Roboto", "Nunito Sans";
        font-size: 0.8125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.125rem; /* 138.462% */
      }

      .device-details-title {
        padding: 3rem 0 3.5rem 0;
      }

      .device-details-title h1 {
        font-size: 2.5rem;
      }
      </style>`

      const trustpilot = /*html*/`
        <div class="trustpilot">
          ${style}
          <img src="${IMAGE_DIR_URL}/trustpilot.svg" alt="Trustpilot" />
          <p><b>Excellent</b> 2,465 Reviews</p>
        </div>
        `

      waitForElement('header .wrap').then(el => el.insertAdjacentHTML('beforeend', trustpilot))
    } else {
      const style = /*html*/`
      <style>
       header[role=banner] {
        display: none;
       }

       .custom-header {
        position: fixed;
        z-index: 50;
        top: 0;
        right: 0;
        left: 0;        

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.625rem 1.022rem 0.625rem 1rem;

        background: #FFF;
        box-shadow: 0px 2px 16px 0px rgba(133, 142, 147, 0.16);
       }

       .custom-header img {
        display: block;
       }

       .custom-header p {
        color: var(--dark-blue-main-text, #29353C);
        font-family: Roboto, "Nunito Sans";
        font-size: 0.75rem;
        font-style: normal;
        line-height: 1rem; /* 133.333% */
        margin: 0.25rem 0 0 0 !important;
        text-align: right;
       }
       
       .offer-value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6875rem 1rem;
        border-bottom: 1px solid var(--Grey-light-Stroke-light, #F0F2F4);
        margin-top: 60px;
       }

       .offer-value >div {
        display: flex;
        gap: 0.5rem;
       }

       .offer-value >div p {
        color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 1rem;
          font-style: normal;
          font-weight: 700;
          line-height: 1.5rem; /* 150% */
          margin: 0 !important;
       }

       .offer-value__price {
        color: var(--Blue-text-links, #0092E6);
          text-align: right;
          font-family: "Nunito Sans";
          font-size: 1.125rem;
          font-style: normal;
          font-weight: 800;
          line-height: 1.625rem; /* 144.444% */
          margin: 0 !important;
       }

       .checkout-steps {
        padding: 1.13rem 1rem 0 1rem;
       } 

       .checkout-steps img {
        display: block;
       }

       .checkout-steps p {
        margin: 0 !important;
       }

       .checkout-steps .back {
        display: flex;
        gap: 0.25rem;
        align-items: center;
        width: fit-content;
        cursor: pointer;
       }

       .checkout-steps .back {
        color: var(--dark-blue-main-text, #29353C);
      font-family: "Nunito Sans";
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.25rem; /* 142.857% */
            }

       .checkout-steps__heading {
        color: var(--dark-blue-main-text, #29353C);
        text-align: center;
        font-family: "Nunito Sans";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 800;
        line-height: 2rem; /* 133.333% */
       }

       .steps {
        display: flex;
        margin: 1rem 0 1.5rem;
        align-items: center;
        justify-content: center;
       }

       .steps__line {
        width: 3rem;
        height: 0.25rem;
        background: var(--Grey-light-stroke, #D6D9DC);
       }

       .steps > div:not(.steps__line) {
        display: flex;
        width: 2rem;
        height: 2rem;
        padding: 0.375rem;
        justify-content: center;
        align-items: center;
        border-radius: 6.25rem;
        background:#D6D9DC;
       }

       .steps > div:not(.steps__line) img{
        display: none;
        width: 2rem;
        height: 2rem;
       }

       .steps > div:not(.steps__line) p {
          color: #FFF;
          text-align: center;
          font-family: "Nunito Sans";
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 800;
          line-height: 1; 
       }

       [data-current-step="1"] div[data-step="1"] {
        background: var(--Green-Green-new, #63DD1A);
       }

       [data-current-step="2"]  div[data-step="1"],
       [data-current-step="2"]  div[data-step="1"] + .steps__line,
       [data-current-step="2"]  div[data-step="2"] {
        background: var(--Green-Green-new, #63DD1A);
       }

       [data-current-step="2"]  div[data-step="1"]  {
          padding: 0;
       }

       [data-current-step="2"]  div[data-step="1"] > div {
        display: none;
       }
       [data-current-step="2"]  div[data-step="1"] img {
        display: block;
       }
       [data-current-step="2"]  div[data-step="1"]  {
        padding: 0;
       }

       [data-current-step="3"] div[data-step="1"],
       [data-current-step="3"] div[data-step="2"] {
        background: var(--Green-Green-new, #63DD1A);
       }

       [data-current-step="3"] [data-step],
       [data-current-step="3"] .steps__line {
        background: var(--Green-Green-new, #63DD1A) !important;
       }

       [data-current-step="3"]  div[data-step="1"] > div,
       [data-current-step="3"]  div[data-step="2"] > div {
        display: none;
       }
       [data-current-step="3"]  div[data-step="1"] > img,
       [data-current-step="3"]  div[data-step="2"] > img {
        display: block;
       }
       [data-current-step="3"]  div[data-step="1"],
       [data-current-step="3"]  div[data-step="2"] {
        padding: 0;
       }

       .device-details-title {
        display: none !important;
       }

       #content {
        padding-top: 0 !important;
       }

       [data-current-step="1"] .back {
         visibility: hidden;
       }

       [data-current-step="1"] + #content #payment_type_field + h3,
       [data-current-step="1"] + #content .contact-info,
       [data-current-step="1"] + #content #order_review_wrapper {
          display: none !important;
       }

       [data-current-step="2"] + #content .woocommerce-billing-fields > h3,
       [data-current-step="2"] + #content #payment_type_field,
       [data-current-step="2"] + #content #order_review_wrapper {
          display: none !important;
       }

       [data-current-step="3"] + #content .woocommerce-billing-fields,
       [data-current-step="3"] + #content + .block-wrapper .continue-wrapper {
          display: none !important;
       }
      </style>`

      const banner = (price) => /*html*/`
        <header class="custom-header">
          ${style}
          <div>
            <a href="/">
              <img src="${IMAGE_DIR_URL}/logo.svg" alt="GadgetGone" />
            </a>
          </div>
          <div>
            <img src="${IMAGE_DIR_URL}/trustpilot.svg" alt="Trustpilot" />
            <p><b>Excellent</b> 2,465 Reviews</p>
          </div>
        </header>
        <div class="offer-value">
          <div>
            <img src="${IMAGE_DIR_URL}/deal.svg" alt="deal">
            <p>Estimated offer value:</p>
          </div>
          <p class="offer-value__price">${price}</p>
        </div>
        <div class="checkout-steps" data-current-step="1">
          <div class="back">
            <img src="${IMAGE_DIR_URL}/arrow-left.svg" alt="back arrow">
            <p>back</p>
          </div>
          <h2 class="checkout-steps__heading">Checkout</h2>
          <div class="steps">
            <div data-step="1">
              <div><p>1</p></div>
              <img src="${IMAGE_DIR_URL}/check-circle.svg" alt="step checked">
            </div>
            <div class="steps__line"></div>
            <div data-step="2">
              <div><p>2</p></div>
              <img src="${IMAGE_DIR_URL}/check-circle.svg" alt="step checked">
            </div>
            <div class="steps__line"></div>
            <div data-step="3">
              <div><p>3</p></div>
              <img src="${IMAGE_DIR_URL}/check-circle.svg" alt="step checked">
            </div>
          </div>
        </div>
        `

      const waitForEl = setInterval(() => {
        const price = document.querySelector('.order-total .woocommerce-Price-amount.amount')
        const header = document.querySelector('header')

        if (price && header) {
          clearInterval(waitForEl)

          header.insertAdjacentHTML('afterend', banner(price.innerText))

          handleClickOnBack()
          handlePriceChanging()
        }
      }, WAIT_INTERVAL_TIMEOUT)

    }
  }

  function moveCoupon() {
    const style = /*html*/`
    <style>
      .cart-discount td {
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 800;
        line-height: 1.5rem; /* 150% */
      }

      [name="apply_coupon"] {
        margin: 0 !important;
      }

      .woocommerce-form-coupon-toggle,
      .woocommerce-form-coupon {
        display: none !important;
      }

      .checkout_coupon.woocommerce-form-coupon {
        display: block !important;
      }

      .checkout_coupon.woocommerce-form-coupon > p:first-child {
        display: none;
      }

      .coupon-toggle .coupon-field-wrapper {
        display: none !important;
      }
      .coupon-toggle.coupon-toggle--opened .coupon-field-wrapper {
        display: block !important;
      }

      .coupon-field .woocommerce-error {
        color: #fa0f48;
      }

      .coupon-toggle {
        padding: 1.25rem 0;
        border-bottom:  1px solid #F0F2F4;
      }

      .coupon-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .coupon-heading p {
        margin: 0 !important;
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5rem; /* 150% */
      }

      .plusminus {
        position: relative;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
      }

      .plusminus.plusminus--active:before {
        transform: translatey(-50%) rotate(-90deg);
        opacity: 0;
      }

      .plusminus.plusminus--active:after {
        transform: translatey(-50%) rotate(0);
      }

      .plusminus:before, .plusminus:after {
        content: "";
        display: block;
        background-color: #0092E6;
        position: absolute;
        top: 50%;
        left: 0;
        transition: 0.35s;
        width: 100%;
        height: 3px;
      }

      .plusminus:before {
        transform: translatey(-50%);
      }

      .plusminus:after {
        transform: translatey(-50%) rotate(90deg);
      }

      .coupon-field .woocommerce-error,
      .coupon-apply {
        margin: 0.5rem 0 0.75rem 0;
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
      }

      .coupon-field .input,
      .coupon-field .form-row {
        padding: 0 !important;
        margin: 0 !important;
      }

      .coupon-field .input {
        padding: 0.875rem 1rem;
        border-radius: 0.375rem;
        border: 2px solid var(--Grey-light-stroke, #D6D9DC);
        color: var(--Grey-secondary, #757575);
        font-family: Manrope, "Nunito Sans",sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
      }
 
    </style>
    `

    const html = /*html*/`
      <div class="coupon-toggle">
        <div class="coupon-heading">
          <p>Have a coupon?</p>
          <div class="plusminus"></div>
        </div>
        <div class="coupon-field-wrapper">
          <p class="coupon-apply">If you have a coupon code, please apply it below.</p>
          <div class="coupon-field">
          
          </div>
        </div>
      </div>
    `

    waitForElement('#payment').then(el => {
      el.insertAdjacentHTML('beforebegin', html)

      const waitForEls = setInterval(() => {
        const coupon = document.querySelector('.checkout_coupon.woocommerce-form-coupon')
        const couponField = document.querySelector('.coupon-field')
        const couponHeading = document.querySelector('.coupon-heading')
        const plusminus = document.querySelector('.coupon-heading .plusminus')

        if (coupon && couponField && couponHeading && plusminus) {
          clearInterval(waitForEls)

          couponField.insertAdjacentElement('afterbegin', coupon)

          couponHeading.addEventListener('click', (e) => {
            plusminus.classList.toggle('plusminus--active')
            e.target.closest('.coupon-toggle').classList.toggle('coupon-toggle--opened')

            pushDataLayer('exp_chec_enhanc_but_checoupstep3_ope', 'Open', 'Button', 'Checkout 3-rd Step Have a coupon?')
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    })

    waitForElement('#order_review [name="apply_coupon"]').then(el => el.addEventListener('click', () => {
      pushDataLayer('exp_chec_enhanc_but_checstep3_apply_coup', 'Apply coupon', 'Button', 'Checkout 3-rd Step')
    }))

    waitForElement('#order_review #coupon_code').then(el => el.addEventListener('click', () => {
      pushDataLayer('exp_chec_enhanc_but_checstep3_apply_coup', 'Apply coupon', 'Button', 'Checkout 3-rd Step')
    }))

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function changeSomeHeadingTxtAndServices() {
    const style = /*html*/`
        <style>
        .woocommerce-billing-fields h3{
          color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 900;
          line-height: 2rem; /* 133.333% */
          margin-bottom: 1.5rem;
        }

        @media only screen and (max-width: 64em) {
          .woocommerce-billing-fields h3{
            color: var(--dark-blue-main-text, #29353C);
            font-family: "Nunito Sans";
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 900;
            line-height: 1.75rem; /* 140% */
            margin-bottom: 0.5rem;
          }

          .additional-services {
            margin-top: 0.75rem;
          }

          .additional-services .services-list .services-item .form-row#shipping_insurance_field {
            padding: 1.25rem !important;
          }

          .additional-services h3 {
            display: none !important;
          }
        }
        </style>
    `

    const waitForEls = setInterval(() => {
      if (document.querySelector('#customer_details h3') && document.querySelector('.additional-services h3')) {
        clearInterval(waitForEls)

        const customerDetails = document.querySelector('#customer_details h3')
        const additionalServices = document.querySelector('.additional-services h3')

        if (DEVICE === 'desktop') {
          customerDetails.textContent = '1. How would you like to get paid?'
          additionalServices.textContent = '3. Additional services'

          waitForElement('#shipping_insurance').then(el => {
            el.addEventListener('change', () => {
              pushDataLayer('exp_chec_enhanc_chbox_checshistep3_mes', 'Messaging ', 'Checkbox ', 'Checkout 3-rd Step  Add Shipping Insurance ')
            })
          })
        } else {
          customerDetails.textContent = 'How would you like to get paid?'

          waitForElement('#order_review').then(el => el.insertAdjacentElement('beforebegin', document.querySelector('.additional-services'))).then(() => {
            waitForElement('#shipping_insurance').then(el => {
              el.addEventListener('change', () => {
                pushDataLayer('exp_chec_enhanc_chbox_checshistep3_mes', 'Messaging ', 'Checkbox ', 'Checkout 3-rd Step  Add Shipping Insurance ')
              })
            })
          })
        }
      }
    }, WAIT_INTERVAL_TIMEOUT)

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function setPlaceholder(id, placeholder) {
    const element = document.querySelector(`#${id} input`)
    if (element) {
      element.placeholder = placeholder
    }
  }

  function removeTextNodes(element) {
    for (let i = 0; i < element.childNodes.length; i++) {
      const node = element.childNodes[i]
      if (node.nodeType === Node.TEXT_NODE) {
        element.removeChild(node)
        i-- // Adjust index to account for removed node
      }
    }
  }

  function customizeGetPaid() {
    const style = /*html*/`
    <style>
      #payment_type_field {
        padding: 2.5rem 3rem;
        border-radius: 1rem;
        border: 1px solid var(--Grey-light-Stroke-light, #F0F2F4);
        background: #FFF;
        box-shadow: 0px 8px 16px 0px rgba(41, 53, 60, 0.03);
        margin: 0 0 2rem 0!important;
      }

      #payment_type_field > label[for="payment_type_gift-card-bonus"] {
        display: none !important;
      }

      [for="payment_type_gift-card-bonus"] .text + img {
        display: none !important;
      }

      .page-template-checkout #payment_type_field label.radio {
        padding: 1.5rem !important;
        border-radius: 1rem !important;
        background: #FFF !important;
        
        border: 1px solid var(--Grey-light-Stroke-light, #F0F2F4);
        margin: 0 0 0.5rem 0 !important;
        box-shadow: 0px 8px 16px 0px rgba(41, 53, 60, 0.03) !important;
      }

      .page-template-checkout #payment_type_field label.radio:last-child {
        margin-bottom: 0 !important;
      }

      .page-template-checkout #payment_type_field label.radio:hover {
        border: 1px solid var(--Green-Green-new, #63DD1A);
      }

      .page-template-checkout #payment_type_field [type=radio]:checked+label.radio {
        border: 2px solid var(--Green-Green-new, #63DD1A) !important;
        padding: 2rem !important;
        box-shadow: 0px 8px 16px 0px rgba(95, 223, 0, 0.08) !important;
      }

      .choose-payment-method {
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5rem; /* 150% */
        margin: 0 0 1rem 0 !important;
        padding: 0 !important;
      }

      label[for="payment_type_gift-card-bonus"].radio {
        display: none;
      }

      .label-description {
        padding: 0 !important;
      }

      .card-heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .card-heading p {
        color: var(--dark-blue-main-text, #29353C);
        text-align: center;
        font-family: "Nunito Sans";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.625rem; /* 144.444% */
      }


      .card-heading p,
      .label-description .delivery-time p {
        margin: 0!important;
      }

      .label-description .text p {
        margin: 0 !important;
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
        margin-bottom: 0.7rem !important;
      }

      .label-description .text p:last-child {
        margin-bottom: 0 !important;
      }

      .card-heading>div {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .delivery-time {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        margin: 0.5rem 0 1rem 0 !important;
      }

      .delivery-time p {
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        line-height: 1.5rem; /* 150% */
      }

      .card-checkbox-icon>img {
        display: none;
      }

      label.radio .card-checkbox-icon>img:first-child {
        display: block;
      }

      [type=radio]:checked+label.radio .card-checkbox-icon>img:first-child {
        display: none;
      }

      [type=radio]:checked+label.radio .card-checkbox-icon>img:last-child {
        display: block;
      }

      #billing_paypal_field [for="billing_paypal"] {
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
        margin-bottom: 0.56rem !important;
        padding: 0 !important;
      }

      #billing_paypal {
        padding: 0.875rem 1rem;
        border-radius: 0.375rem;
        border: 2px solid var(--Grey-light-stroke, #D6D9DC);
        background: #FFF;
        margin-bottom: 0 !important;
      }

      #billing_paypal_field [for="billing_paypal"] .optional {
        text-transform: capitalize;
      }

      @media only screen and (max-width: 64em) {
        #payment_type_field {
          padding: 0;
          border: none;
          box-shadow: none;
          margin: 0 !important;
        }

        .choose-payment-method {
          color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.25rem; /* 150% */
        }

        .page-template-checkout #payment_type_field [type=radio]:checked+label.radio {
          padding: 1rem 1.25rem 1.25rem 1.25rem !important;
        }

        .card-heading p {
          color: var(--dark-blue-main-text, #29353C);
          text-align: center;
          font-family: "Nunito Sans";
          font-size: 1rem;
          font-style: normal;
          font-weight: 700;
          line-height: 1.5rem; /* 150% */
        }

        .delivery-time {
          margin: 1rem 0 !important;
        }

        .delivery-time img {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
        }

        .delivery-time p {
          color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 0.875rem;
          font-style: normal;
          line-height: 1.5rem; /* 171.429% */
        }

        .label-description .text p {
          color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 171.429% */
        }

        .page-template-checkout #payment_type_field label.radio {
          padding: 1rem 1.25rem;
        }

        #billing_paypal_field [for="billing_paypal"] {
          color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5rem; /* 150% */
        }

        #billing_paypal {
          padding: 0.875rem 1rem;
          font-size: 0.875rem;
        }
      }
      </style>
    `

    const paymentMethod = {
      giftCard: /*html*/`
      <div class="card-heading">
        <div>
          <img src="${IMAGE_DIR_URL}/gift-card.svg" alt="gift card">
          <p>Gift Card</p>
        </div>
        <div class="card-checkbox-icon">
          <img src="${IMAGE_DIR_URL}/radiobutton.svg" alt="unchecked radiobutton">
          <img src="${IMAGE_DIR_URL}/radiobutton-checked.svg" alt="checked radiobutton">
        </div>
      </div>
      <div class="card-content label-description">
        <div class="delivery-time">
          <img src="${IMAGE_DIR_URL}/stopwatch.svg" alt="stopwatch">
          <p><b>Delivery Time:</b> Same Day</p>
        </div>
        <div class="text">
          <p>We'll send a link to your email address where you can choose gift cards from hundreds of your favorite brands
            like <b>Amazon, Target, Home Depot, Wal-Mart, Apple, Best Buy</b> & More! </p>
          <p><b>Note:</b> Many brands offer a bonus; on average our customers get 3% more value when they get paid via gift
            card.
          </p>
        </div>
      </div>      `,
      paypal: /*html*/`
      <div class="card-heading">
        <div>
          <img src="${IMAGE_DIR_URL}/paypal.svg" alt="paypal">
          <p>PayPal</p>
        </div>
        <div class="card-checkbox-icon">
          <img src="${IMAGE_DIR_URL}/radiobutton.svg" alt="unchecked radiobutton">
          <img src="${IMAGE_DIR_URL}/radiobutton-checked.svg" alt="checked radiobutton">
        </div>
      </div>
      <div class="card-content label-description">
        <div class="delivery-time">
          <img src="${IMAGE_DIR_URL}/stopwatch.svg" alt="stopwatch">
          <p><b>Delivery Time:</b> Same Day</p>
        </div>
        <div class="text">
          <p>Money will be sent to your PayPal account.</p>
          <p><b>Note:</b> PayPal will deduct 2.9% of your total offer amount (plus a flat 30 cents) as their fee for processing payments.</p>
        </div>
      </div>`,
      visa: /*html*/`
      <div class="card-heading">
        <div>
          <img src="${IMAGE_DIR_URL}/visa.svg" alt="visa">
          <p>Virtual Visa Card</p>
        </div>
        <div class="card-checkbox-icon">
          <img src="${IMAGE_DIR_URL}/radiobutton.svg" alt="unchecked radiobutton">
          <img src="${IMAGE_DIR_URL}/radiobutton-checked.svg" alt="checked radiobutton">
        </div>
      </div>
      <div class="card-content label-description">
        <div class="delivery-time">
          <img src="${IMAGE_DIR_URL}/stopwatch.svg" alt="stopwatch">
          <p><b>Delivery Time:</b> Same Day</p>
        </div>
        <div class="text">
          <p>We'll send a Prepaid Virtual Visa Card to your email address. These cards can be used for online purchases wherever Visa is accepted. They can also be transferred to your virtual wallet for in-store, contactless purchases.  </p>
          <p><b>Note:</b>  They cannot be used in most brick and mortar stores without a virtual wallet.</p>
        </div>
      </div>`,
      bank: /*html*/`
      <div class="card-heading">
        <div>
          <img src="${IMAGE_DIR_URL}/bank.svg" alt="bank">
          <p>Bank Transfer</p>
        </div>
        <div class="card-checkbox-icon">
          <img src="${IMAGE_DIR_URL}/radiobutton.svg" alt="unchecked radiobutton">
          <img src="${IMAGE_DIR_URL}/radiobutton-checked.svg" alt="checked radiobutton">
        </div>
      </div>
      <div class="card-content label-description">
        <div class="delivery-time">
          <img src="${IMAGE_DIR_URL}/stopwatch.svg" alt="stopwatch">
          <p><b>Delivery Time:</b> 2-4 Business Days</p>
        </div>
        <div class="text">
          <p>Funds will be deposited directly in your bank account. A secure form will be sent after evaluation to collect your bank account details.</p>
        </div>
      </div>`,
    }

    waitForElement('#payment_type_field > label[for="payment_type_gift-card-bonus"]').then(el => el.insertAdjacentHTML('afterend', /*html*/`
      <h4 class="choose-payment-method">Select your preferred payment method.</h4>
    `))

    // gift card
    waitForElement('label[for="payment_type_gift-card-bonus"].radio').then(el => el.innerHTML = paymentMethod.giftCard)

    // paypal
    waitForElement('label[for="payment_type_paypal"].radio').then(removeTextNodes)
    waitForElement('.label-description.paypal-email-content').then(el => {
      removeTextNodes(el)
      el.insertAdjacentHTML('beforebegin', paymentMethod.paypal)
    })

    waitForElement('#billing_paypal').then((el) => el.placeholder = 'Email address')

    // visa
    waitForElement('label[for="payment_type_virtual-visa"].radio').then(el => el.innerHTML = paymentMethod.visa)

    // bank
    waitForElement('label[for="payment_type_bank-transfer"].radio').then(el => el.innerHTML = paymentMethod.bank)

    // add event on checkboxes
    waitForElement('#payment_type_field .woocommerce-input-wrapper').then(wrapper => {
      wrapper.addEventListener('change', function (e) {
        if (e.target.matches('input[type="radio"].input-radio')) {
          if (e.target.checked) {
            const title = e.target.nextSibling.querySelector('.card-heading > div > p').innerText

            pushDataLayer('exp_chec_enhanc_rad_checkstep1_selpay', `${title} - Select payment `, 'Radio button', 'Checkout 1-rd Step ')
          }
        }
      })
    })

    waitForElement('#billing_first_name').then(el => {
      el.addEventListener('click', () => {
        pushDataLayer('exp_chec_enhanc_inp_checkstep2_firnam', 'First name', 'Input', 'Checkout 2-rd Step ')
      })
    })

    waitForElement('#text_agreement').then(el => {
      el.addEventListener('change', () => {
        pushDataLayer('exp_chec_enhanc_chebox_checkstep2_mes', 'Messaging ', 'Checkbox ', `Checkout 2-rd Step By completing the checkout process, you agree to receive text messages about your offer. You may opt out at any time. `)
      })
    })

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function wrapFormInputs() {
    const style = /*html*/`
    <style>
      .contact-info {
        padding: 2.5rem 3rem;
        border-radius: 1rem;
        border: 1px solid var(--Grey-light-Stroke-light, #F0F2F4);
        background: #FFF;
        box-shadow: 0px 8px 16px 0px rgba(41, 53, 60, 0.03);
      }

      .contact-info .choose-payment-method {
        margin-bottom: 2rem !important;
      }

      .fields-container  {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        column-gap: 2.25rem;
        row-gap: 1.5rem;
        align-items: end;
        width: 100%; /* ensure the grid container fits within its parent */
      }

      .fields-container > * {
        width: auto !important;
        min-width: 0; /* allow grid items to shrink below their intrinsic width */
      }

      .fields-container .validation_error:before,
      .fields-container .woocommerce-invalid:before,
      .fields-container label {
        padding: 0 !important;
      }
      
      .fields-container .woocommerce-invalid:before {
        bottom: calc(100% - 5px) !important;
      }

      .fields-container label {
        margin-bottom: 0.56rem;
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
      }

      .fields-container .form-row ,
      .fields-container input {
        margin: 0 !important;
      }

      .fields-container input {
        border-radius: 6px;
        border: 2px solid var(--Grey-light-stroke, #D6D9DC);
        background: #FFF;
        padding: 0.875rem 1rem;
        font-family: Manrope, Nunito Sans,sans-serif;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1rem;
      }

      .fields-container > *:nth-child(-n+6) {
        grid-column-end: span 3;
      }

      .fields-container > *:nth-child(n+7):nth-child(-n+9) {
        grid-column-end: span 2;
      }

      .fields-container > *:nth-child(10) {
        grid-column-end: span 6;
      }

      .contact-info .form-row {
        padding: 0 !important;
        margin-top: 1.5rem;
      }

      .fields-container .select2-selection {
        padding: 0.875rem 1rem !important;
      }

      .fields-container .select2-container .select2-selection--single {
        margin: 0 !important;
      }

      .fields-container .select2-container .select2-selection--single .select2-selection__rendered {
        padding: 0 !important;
      }

      .fields-container .select2-container--default .select2-selection--single .select2-selection__rendered {
        line-height: 1rem !important;
      }

      .fields-container .select2-container--default .select2-selection--single {
        border-radius: 0.375rem;
        border: 2px solid var(--Grey-light-stroke, #D6D9DC);
      }

      #billing_state + .select2 .select2-selection__arrow {
        display: none !important;
      }

      #text-message-agreement label {
        margin-bottom: 0 !important;
        color: var(--dark-blue-main-text, #29353C);
        font-family: "Nunito Sans";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
      }

      .choose-payment-method--special {
        display: none;
      }

      .fields-container #text-message-agreement label {
        display: flex;
        gap: 0.5rem;
      }

      .fields-container #text-message-agreement label p {
        margin: 0 !important;
      }

      .fields-container #text-message-agreement label abbr{
        display: none;
      }

      #text-message-agreement [type="checkbox"] {
        top: 5px;
      }

      @media only screen and (max-width: 64em) {
        [data-current-step="2"] + #content .choose-payment-method--special {
          display: block;
        }

        .contact-info {
          padding: 1.5rem 1.25rem;
        }

        .choose-payment-method {
          color: var(--dark-blue-main-text, #29353C);
          font-family: "Nunito Sans";
          font-size: 1rem;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5rem; /* 150% */
          margin-bottom: 1.25rem !important;
        }

        .contact-info .choose-payment-method {
          display: none;
        }

        .fields-container {
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          align-items: normal;
        }

        .validation_error:before, .woocommerce-invalid:before {
          font-size: 0.875rem !important;
        }

        .fields-container .woocommerce-invalid:before {
          bottom: calc(100% - 7px) !important;
        }
      }
    </style>
    `

    // Create a new div
    const wrapper = /*html*/`
    <h3>${DEVICE === 'desktop' ? '2. ' : ''}Fill your contact info</h3>
    <h4 class="choose-payment-method choose-payment-method--special">Fill the information about yourself, so we can c<b>ontact you</b> and provide with a <b>Free Prepaid Shipping Label.</b></h4>
    <div class="contact-info"> 
      ${style}     
      <h4 class="choose-payment-method">Fill the information about yourself, so we can contact you and provide with a Free Prepaid Shipping Label.</h4>
      <div class="fields-container"></div>
    </div>
    `

    waitForElement('#billing_first_name_field').then(el => {

      el.insertAdjacentHTML('beforebegin', wrapper)

      const fields = document.querySelectorAll('#billing_first_name_field, #billing_last_name_field, #billing_email_field, #billing_phone_field, #billing_address_1_field, #billing_address_2_field, #billing_city_field, #billing_state_field, #billing_postcode_field, #text-message-agreement')

      const waitForEl = setInterval(() => {
        if (fields && document.querySelector('.fields-container')) {
          clearInterval(waitForEl)

          setPlaceholder('billing_first_name_field', 'First name')
          setPlaceholder('billing_last_name_field', 'Last name')
          setPlaceholder('billing_email_field', 'Email address')
          setPlaceholder('billing_phone_field', 'Phone')
          setPlaceholder('billing_address_1_field', 'Street Address')
          setPlaceholder('billing_address_2_field', 'Apartment, suite, etc. (optional)')
          setPlaceholder('billing_city_field', 'City')
          setPlaceholder('billing_postcode_field', 'ZIP')

          fields.forEach(field => {
            document.querySelector('.fields-container').appendChild(field)
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    })

    waitForElement('.fields-container #text-message-agreement label').then(el => {
      removeTextNodes(el)
      el.insertAdjacentHTML('beforeend', /*html*/`<p>By completing the checkout process, you agree to receive text messages about your offer. You may opt out at any time. *</p>`)
    })
  }

  function changeAdditionalServices() {
    const style = /*html*/`
    <style>

    .additional-services .services-list .services-item .form-row {
      padding: 2.5rem 3rem !important;
      margin: 0 !important;
      border-radius: 1rem !important;
      border: 1px solid var(--Grey-light-Stroke-light, #F0F2F4) !important;
      background: #FFF;
      box-shadow: 0px 8px 16px 0px rgba(41, 53, 60, 0.03) !important;
    }

    .additional-services .services-list .services-item .form-row label {
      color: var(--dark-blue-main-text, #29353C);
      font-family: "Nunito Sans";
      font-size: 1rem;
      font-style: normal;
      font-weight: 800;
      line-height: 1.5rem; /* 150% */
    }
    </style>
    `

    waitForElement('#shipping_insurance-description').then(el => el.textContent = `We'll insure the full value of your package against any damage that might occur during shipping.`)

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function changeFooter() {
    const style = /*html*/`
    <style>
    footer[role=contentinfo] {
      padding: 7.5rem 0 0 0 !important;
    }

    @media only screen and (min-width: 64em) {
      footer[role=contentinfo] .logo-container .logos {
        flex-direction: column !important;
        gap: 1rem !important;
        align-items: flex-start !important;
      }

      footer[role=contentinfo] .logo-container .logos .logo-wrapper {
        margin: 0 !important;
      }
    }

    footer[role=contentinfo] #footer-menu a {
      color: #FFF;
      text-align: center;
      font-family: "Nunito Sans";
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 800;
      line-height: 1.625rem; /* 144.444% */
    }

    footer[role=contentinfo] .copyright {
      padding: 0 !important;
    }

    footer[role=contentinfo] #seo-nav {
      margin: 2rem 0 !important;
    }

    footer[role=contentinfo] .menu-seo-menu-container {
      border-bottom: 1px solid #F0F2F4;
    }

    footer[role=contentinfo] #seo-nav li {padding: 0 14px !important;}

    .socials a {
      display: flex !important;
    }

    .inc {
      color: var(--dark-blue-main-text, #29353C);
      text-align: center;
      font-family: "Nunito Sans";
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem; /* 150% */
      margin: 2rem 0 2.5rem 0 !important;
    }

    @media only screen and (max-width: 64em) {
      footer[role=contentinfo] {
        padding: 2.5rem 0 0 0 !important;
      }

      footer[role=contentinfo] .nav-container {
        border-radius: 1rem;
        overflow: hidden;
        padding: 2.5rem !important;
      }

      footer[role=contentinfo] .logo-container .logos {
        gap: 2.5rem;
      }

      footer[role=contentinfo] .logo-container .logos .logo-wrapper:first-child {width: 6rem;}
      footer[role=contentinfo] .logo-container .logos .logo-wrapper:last-child {width: 7.2rem;}

      footer[role=contentinfo] #footer-menu a {
        color: #FFF;
        text-align: center;
        font-family: "Nunito Sans";
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 800;
        line-height: 1.625rem; /* 144.444% */
      }

      footer[role=contentinfo] .socials {
        gap: 2rem;
      }

      footer[role=contentinfo] .socials a svg {
        color: #fff;
      }

      footer[role=contentinfo] #seo-nav {
        margin: 1.5rem 0 !important;
      }

      footer[role=contentinfo] #seo-nav a {
        color: var(--dark-blue-main-text, #29353C);
        text-align: center;
        font-family: "Nunito Sans";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 171.429% */
      }

      footer[role=contentinfo] .copyright#seo-nav li {
        padding: 0.5rem !important;
      }

      footer[role=contentinfo] #seo-nav a {
        padding: 0;
      }

      .inc {
        color: var(--dark-blue-main-text, #29353C);
        text-align: center;
        font-family: "Nunito Sans";
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.25rem; /* 142.857% */
        margin: 1.5rem 0 !important;
      }

      .inc span {
        display: block;
      }
    }
    </style>    
    `

    waitForElement('footer[role=contentinfo] .wrap').then(el => {
      removeTextNodes(el)
      el.insertAdjacentHTML('beforeend', /*html*/`
        <p class="inc">© 2024 GadgetGone LLC | Orlando Web. <span>Design by Designzillas</span></p>
      `)
    })

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function changeOfferDetails() {
    const style = /*html*/`
    <style>
    .page-template-checkout #order_review_wrapper {
      box-shadow: none !important;
    }

    #checkout-mini-cart {
      display: none;
    }

    .cart h3 {
      color: var(--dark-blue-main-text, #29353C);
      font-family: "Nunito Sans";
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 900;
      line-height: 2rem; /* 133.333% */
      margin-bottom: 1.5rem;
    }

    .item {
      position: relative;
      display: flex;
      gap: 1.25rem;
      margin-bottom: 1rem;
      padding: 1.25rem 1.5rem;
      border-radius: 1rem;
      border: 1px solid var(--Grey-light-Stroke-light, #F0F2F4);
      background: #FFF;
      box-shadow: 0px 8px 16px 0px rgba(41, 53, 60, 0.03);
    }

    .item a {
      width: fit-content;
    }

    .item[data-type="laptop"] {
      flex-direction: column;
      gap: 0.94rem;
    }

    .item:last-child {
      margin-bottom: 0;
    }

    .item__img {
      width: 7.5rem;
      height: 8.0125rem;
      object-fit: contain;
    }

    .item[data-type="laptop"] .item__img {
      width: 14.1rem;
      height: 8.125rem;
    }

    .item[data-type="laptop"] > a {
      margin: auto;
      display: flex;
    }

    .item__info {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .item__info p {
      color: var(--dark-blue-main-text, #29353C);
      font-family: "Nunito Sans";
      font-size: 1rem;
      line-height: 1.5rem;
      margin: 0 !important;
    }

    .item__name {
      color: var(--Blue-text-links, #0092E6);
      font-family: "Nunito Sans";
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem;
      /* 150% */
      text-decoration-line: underline;
    }

    .item__condition span {
      color: var(--Green-Green-new, #63DD1A);
    }

    .item__qty {
      font-weight: 800;
    }

    .item__remove {
      position: absolute;
      top: -0.75rem;
      right: -0.75rem;
      cursor: pointer;
    }

    #order_review .shop_table.woocommerce-checkout-review-order-table {
      width: 100%;
      border-top: none !important;
    }

    #order_review .shop_table.woocommerce-checkout-review-order-table th {
      color: var(--dark-blue-main-text, #29353C);
      font-family: "Nunito Sans";
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem; /* 150% */
    }

    #order_review .woocommerce-Price-amount.amount {
      color: var(--dark-blue-main-text, #29353C);
      text-align: right;
      font-family: "Nunito Sans";
      font-size: 1rem;
      font-style: normal;
      font-weight: 800;
      line-height: 1.5rem; /* 150% */
    }

    #order_review .order-total .woocommerce-Price-amount.amount,
    #order_review .woocommerce-checkout-review-order-table .order-total td {
      color: var(--Green-Green-new, #63DD1A);
      font-family: "Nunito Sans";
      font-size: 1.5rem !important;
      font-weight: 800 !important;
      line-height: 2rem !important; /* 133.333% */
    }

    #order_review {
      padding-top: 2rem;
    }

    .woocommerce-checkout-review-order-table tr th, 
    .woocommerce-checkout-review-order-table tr td {
      padding: 0 0 0.5rem 0 !important;
    }
    .woocommerce-checkout-review-order-table tr.order-total th, 
    .woocommerce-checkout-review-order-table tr.order-total td {
      padding:  0 0 1rem 0 !important;
    }

    .page-template-checkout .woocommerce-terms-and-conditions-wrapper .form-row {
      margin: 1.25rem 0 !important;
    }

    .woocommerce-terms-and-conditions-wrapper .validation_error:before,
    .woocommerce-terms-and-conditions-wrapper .woocommerce-invalid:before {
      bottom: calc(100% - 5px) !important;
      padding-left: 0 !important;
    }

    .page-template-checkout form[name="checkout"] .woocommerce-form__label-for-checkbox {
      padding: 0 !important;
    }

    [name="woocommerce_checkout_place_order"] {
      margin-top: 0 !important;
    }

    @media only screen and (max-width: 64em) {
      .item {
        padding: 0.94rem 1rem;
      }

      #order_review .shop_table.woocommerce-checkout-review-order-table tfoot {
        width: 100%;
        display: inline-table;
      }
    }
    </style>
    `

    const cartItems = [...document.querySelectorAll('.woocommerce-mini-cart-item')]

    const data = cartItems.map(item => {
      const img = item.querySelector('img').src
      const qty = item.querySelector('.quantity')?.innerText
      const link = item.querySelector('a + a').href
      const title = item.querySelector('a + a').innerText
      const isLaptop = item.querySelector('[data-product_category]').dataset.product_category.includes('Laptop')
      const isPhone = item.querySelector('[data-product_category]').dataset.product_category.includes('Phone')

      // Extract variation attributes
      const variationAttributes = item.querySelectorAll('.variation-attribute')
      let attributes = {}

      variationAttributes.forEach(attribute => {
        const keyElement = attribute.querySelector('b')
        const valueElement = attribute.querySelector('p')

        if (keyElement && valueElement) {
          const key = keyElement.textContent.replace(':', '')
          attributes[key] = valueElement.textContent
        }
      })

      // If it's a phone, ensure Storage is above Carrier
      if (isPhone) {
        const { Storage, Carrier, ...rest } = attributes
        attributes = { ...rest }

        if (Storage) {
          attributes.Storage = Storage
        }

        if (Carrier) {
          attributes.Carrier = Carrier
        }
      }

      // Ensure Condition is the last attribute for all devices
      const { Condition, ...rest } = attributes
      if (Condition) {
        attributes = { ...rest, Condition }
      }

      return { title, link, img, qty, isLaptop, attributes }
    })

    const itemsHtml = data.map(item => {
      // Generate HTML for attributes
      let attributesHtml = ''
      for (let key in item.attributes) {
        if (key === 'Condition') {
          attributesHtml += `<p class="item__condition"><b>${key}:</b> <span>${item.attributes[key]}</span></p>`
        } else {
          attributesHtml += `<p><b>${key}:</b> ${item.attributes[key]}</p>`
        }
      }

      return /*html*/`
        <div class="item" ${item.isLaptop ? `data-type="laptop"` : ''}>
          <a href="${item.link}" data-event="img">
          <img class="item__img" src="${item.img}" alt="${item.title}">
          </a>
          <div class="item__info">
            <a class="item__name" href="${item.link}">${item.title}</a>
            ${attributesHtml}
            <p class="item__qty">${item.qty}</p>
          </div>
          <img class="item__remove" src="${IMAGE_DIR_URL}/x.svg" alt="remove item">
        </div>
      `
    })

    const html = /*html*/`
      <div class="cart">
      <h3>Your Offer Details</h3>
        ${itemsHtml.join('')}
      </div>
    `

    const waitForEl = setInterval(() => {
      if (document.querySelectorAll('.item__remove').length === cartItems.length) {
        clearInterval(waitForEl)

        document.querySelectorAll('.item__remove').forEach((el, i) => {
          el.addEventListener('click', () => {
            pushDataLayer('exp_chec_enhanc_but_checdetstep3_del', 'Delete', 'Button', 'Checkout 3-rd Step Your Offer Details')
            cartItems[i].querySelector('a.remove').click()
          })
        })

        document.querySelectorAll('.item__name').forEach((el) => {
          el.addEventListener('click', () => {
            pushDataLayer('exp_chec_enhanc_link_checstep3_item', `${el.innerText}`, 'Link', 'Checkout 3-rd Step')
          })
        })

        document.querySelectorAll('[data-event="img"]').forEach((el) => {
          el.addEventListener('click', () => {
            pushDataLayer('exp_chec_enhanc_link_checstep3_item_pict', `${el.closest('.item').querySelector('.item__name').innerText} - picture`, 'Link', 'Checkout 3-rd Step')
          })
        })

        document.querySelectorAll('.item').forEach((el) => {
          handleVisibilityAndHoverStandart(el, 'exp_chec_enhanc_vis_checdetstep3_prod', `${el.querySelector('.item__name').innerText} - Block view`, 'Visibility ', 'Checkout 3-rd Step Your Offer Details')
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    document.querySelector('#checkout-mini-cart').insertAdjacentHTML('beforebegin', html)

    document.head.insertAdjacentHTML('beforeend', style)
  }

  function smoothScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function handleClickOnBack() {
    const waitForEls = setInterval(() => {
      let backBtn = document.querySelector('.checkout-steps .back')
      let currStep = document.querySelector('[data-current-step]')

      if (backBtn && currStep) {
        clearInterval(waitForEls)

        backBtn.addEventListener('click', () => {
          let step = parseInt(currStep.dataset.currentStep)

          if (step === 2) {
            pushDataLayer('exp_chec_enhanc_but_checkstep2_back', 'Back', 'Button', 'Checkout 2-rd Step ')
          } else if (step === 3) {
            pushDataLayer('exp_chec_enhanc_but_checkstep3_back', 'Back', 'Button', 'Checkout 3-rd Step ')
          }

          step = step - 1
          if (step < 1) step = 1

          currStep.dataset.currentStep = step.toString()
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function validateErrors() {
    const inputs = document.querySelectorAll('.fields-container input:not([type="checkbox"]):not(#billing_address_2)')
    const agreementCheckbox = document.getElementById('text_agreement')

    const phoneRegex = /^[\d\s-.()+]+$/
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const postcodeRegex = /^\d{5}$/

    let firstInvalidElement = null

    let errors = []

    inputs.forEach(input => {
      let error = ''
      if (input.value.trim() === '') {
        error = 'Input value is empty'
      } else {
        switch (input.id) {
          case 'billing_phone':
            if (!phoneRegex.test(input.value)) {
              error = 'Invalid phone number format'
            }
            break
          case 'billing_email':
            if (!emailRegex.test(input.value)) {
              error = 'Invalid email format'
            }
            break
          case 'billing_postcode':
            if (!postcodeRegex.test(input.value)) {
              error = 'Invalid postcode format'
            }
            break
        }
      }
      if (error) {
        errors.push(`${input.id}: ${error}`)
        input.closest('p.form-row').classList.add('woocommerce-invalid')

        if (!firstInvalidElement) {
          firstInvalidElement = input
        }
      } else {
        input.closest('p.form-row').classList.remove('woocommerce-invalid')
      }
    })

    if (!agreementCheckbox.checked) {
      errors.push('Agreement checkbox is not checked')
      agreementCheckbox.closest('p.form-row').classList.add('woocommerce-invalid')

      if (!firstInvalidElement) {
        firstInvalidElement = agreementCheckbox
      }
    }

    if (firstInvalidElement) {
      const formRow = firstInvalidElement?.closest('p.form-row')
      const headerOffset = document.querySelector('.custom-header')?.offsetHeight || 0
      const offsetPosition = formRow.getBoundingClientRect().top + window.scrollY - headerOffset - 32
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      return false
    }

    return true
  }

  function handleClickOnContinue() {
    const waitForEls = setInterval(() => {
      let continueBtn = document.querySelector('.continue-btn')
      let currStep = document.querySelector('[data-current-step]')

      if (continueBtn && currStep) {
        clearInterval(waitForEls)

        continueBtn.addEventListener('click', () => {

          let step = parseInt(currStep.dataset.currentStep)

          if (step > 3) {
            currStep.dataset.currentStep = '3'
          } else if (step === 1) {
            pushDataLayer('exp_chec_enhanc_but_checkstep1_cont', 'Continue', 'Button', 'Checkout 1-rd Step ')

            currStep.dataset.currentStep = (step + 1).toString()
            smoothScrollToTop()

            pushDataLayer('exp_chec_enhanc_vis_checkstep2_page', 'Full page view  ', 'Visibility ', 'Checkout 2-rd Step ')
          } else if (step === 2) {
            pushDataLayer('exp_chec_enhanc_but_checkstep2_cont', 'Continue', 'Button', 'Checkout 2-rd Step ')

            if (validateErrors()) {
              currStep.dataset.currentStep = (step + 1).toString()
              smoothScrollToTop()

              pushDataLayer('exp_chec_enhanc_vis_checkstep3_page', 'Full page view  ', 'Visibility ', 'Checkout 3-rd Step ')
            }
          }
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addIconsHowItWorks() {
    const style = /*html*/`
      <style>
    .options {
      display: flex;
      justify-content: space-between;
      text-align: center;
      max-width: 23.35rem;
      margin: 2rem auto;
    }

    .options > div{
      width: 30%;
    }

    .options p {
      color: var(--dark-blue-main-text, #29353C);
      text-align: center;
      font-family: "Nunito Sans";
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.125rem;
      margin: 0.5rem 0 0 0 !important; 
      /* 138.462% */
    }

    .how-it-works {
      border-radius: 0.5rem;
      border: 1px solid var(--Grey-light-Stroke-light, #F0F2F4);
      background: #FFF;
      box-shadow: 0px 8px 16px 0px rgba(41, 53, 60, 0.03);
      padding: 2rem 1.5rem;
      text-align: center;
    }

    .how-it-works p {
      margin: 0.5rem 0 0 0 !important; 
    }

    .how-it-works__heading {
      color: var(--dark-blue-main-text, #29353C);
      text-align: center;
      font-family: "Nunito Sans";
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 800;
      line-height: 1.75rem;
      margin-bottom: 1rem;
    }

    .how-it-works__steps {
      display: flex;
      justify-content: space-between;
      max-width: 21.5rem;
      margin: 0 auto;
    }

    .how-it-works__steps p {
      color: var(--dark-blue-main-text, #29353C);
      text-align: center;
      font-family: "Nunito Sans";
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.125rem;
    }

    .how-it-works__steps > div {
      width: 19%;
    }

    .how-it-works__steps div:first-child p {
      color: var(--Green-Green-200, #7EC91C);
      font-weight: 700;
    }

    .how-it-works__steps > div.line {
      width: 2rem;
      height: 0.0625rem;
      background: #63DD1A;
      margin-top: 26.5px;
    }

    .line.line--grey {
      background: #D6D9DC !important;
    }

    .continue-wrapper {
      display: none;
    }

    .continue-btn {
      border-radius: 100px;
      background: var(--Green-Green-new, #63DD1A);
      padding: 1rem 2.375rem;
      color: #FFF;
      text-align: center;
      font-family: "Nunito Sans";
      font-size: 1rem;
      font-style: normal;
      font-weight: 800;
      line-height: 1.5rem; /* 150% */
      width: 100%;
      display: block;
    }

    @media only screen and (max-width: 64em) {
      .continue-wrapper {
        display: block;
      }

      .block-wrapper {
        margin: 1.25rem auto 0;
        width: 90%;
      }

      .options {
        margin: 1.5rem 0;
      }

      [data-current-step="3"] + #content + .block-wrapper .options {
        margin: 0 0 1.5rem 0;
      }

      .options > div {
        width: 33.3%;
      }

      .how-it-works {
        padding: 1.5rem 1.25rem;
      }

      .how-it-works__steps > div.line {
        width: 1.9rem;
      }

      .how-it-works__steps > div {
        width: 25%;
      }
    }
  </style>
    `

    const html = /*html*/`
    <div class="block-wrapper">
    ${style}
    <div class="continue-wrapper">
      <button class="continue-btn">Continue</button>
    </div>

    <div class="options">
      <div>
        <img src="${IMAGE_DIR_URL}/stopwatch-blue.svg" alt="stopwatch">
        <p>Get Paid Fast</p>
      </div>
      <div>
        <img src="${IMAGE_DIR_URL}/money.svg" alt="money">
        <p>Multiple<br>Payment Options</p>
      </div>
      <div>
        <img src="${IMAGE_DIR_URL}/sent.svg" alt="shipping">
        <p>Free Prepaid Shipping</p>
      </div>
    </div>

    <div class="how-it-works">
      <h4 class="how-it-works__heading">How it works</h4>
      <div class="how-it-works__steps ">
        <div>
          <img src="${IMAGE_DIR_URL}/smart-check.svg" alt="smartphone">
          <p>Get Your Quote</p>
        </div>
        <div class="line"></div>
        <div>
          <img src="${IMAGE_DIR_URL}/ship.svg" alt="shipping">
          <p>Ship Your Device</p>
        </div>
        <div class="line line--grey"></div>
        <div>
          <img src="${IMAGE_DIR_URL}/paid.svg" alt="money">
          <p>Get Paid</p>
        </div>
      </div>
    </div>
    </div>
    `

    if (DEVICE === 'desktop') {
      waitForElement('#order_review').then(el => el.insertAdjacentHTML('afterend', html))
    } else {
      waitForElement('footer[role=contentinfo]').then(el => el.insertAdjacentHTML('beforebegin', html))

      handleClickOnContinue()
    }

    waitForElement('.options').then(el => handleVisibilityAndHoverWithStepChecker(
      el,
      'exp_chec_enhanc_vis_checbenmot_elem', 'Element view', 'Visibility ', 'Checkout Benefits to motivate users '
    ))

    waitForElement('.how-it-works').then(el => handleVisibilityAndHoverWithStepChecker(
      el,
      'exp_chec_enhanc_vis_checworks_elem', 'Element view', 'Visibility ', 'Checkout How it works'
    ))
  }

  function disableScrolling() {
    var x = window.scrollX
    var y = window.scrollY
    window.onscroll = function () { window.scrollTo(x, y) }
  }

  function enableScrolling() {
    window.onscroll = function () { }
  }

  function handleClickOnSubmit() {
    waitForElement('#order_review_wrapper').then(cart => {

      cart.addEventListener('click', (e) => {
        if (e.target.matches('.button#place_order')) {
          disableScrolling()

          checkRemovedNodes()
        }

      })
    })
  }

  function checkRemovedNodes() {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          for (const removedNode of mutation.removedNodes) {
            if (removedNode.classList.contains('blockUI') && removedNode.classList.contains('blockMsg') && removedNode.classList.contains('blockElement')) {

              observer.disconnect()

              waitForElement('.woocommerce-invalid label').then(invalid => {
                setTimeout(() => {
                  enableScrolling()

                  if (DEVICE === 'desktop') {
                    let headerHeight = document.querySelector('header[role="banner"]').offsetHeight
                    let scrollPosition = invalid.getBoundingClientRect().top + window.scrollY - headerHeight - 32
                    window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
                  }
                }, 100)
              })
            }
          }
        }
      }
    })

    const targetNode = document.querySelector('body')
    const config = { childList: true, subtree: true }

    observer.observe(targetNode, config)
  }

  function addPaypal() {
    waitForElement('footer[role=contentinfo] .logo-container .logos .logo-wrapper + .logo-wrapper').then(el => el.insertAdjacentHTML('beforeend', /*html*/`
      <img class="custom-paypal-logo" src="${IMAGE_DIR_URL}/paypal-seeklogo.svg" alt="paypal">
    `))
  }

  function start() {
    if (DEVICE === 'mobile') {
      pushDataLayer('exp_chec_enhanc_vis_checkstep1_page', 'Full page view  ', 'Visibility ', 'Checkout 1-rd Step ')
    }

    changeHeader()
    moveCoupon()
    changeSomeHeadingTxtAndServices()
    customizeGetPaid()
    wrapFormInputs()
    changeAdditionalServices()

    changeOfferDetails()
    handleClickOnSubmit()
    addIconsHowItWorks()

    addPaypal()
    changeFooter()
  }
})()