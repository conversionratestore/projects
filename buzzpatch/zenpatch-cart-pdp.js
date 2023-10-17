;(function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/buzzpatch/img/'

  // -------------------------------------
  // CSS & HTML
  // -------------------------------------
  const styleCSS = /*html*/ `
    <style>
      /* General */
      .container.package .free-shipping-checkout,
      .container.package .prices .js-regular,
      .view-prices h3 + p {
        display: none !important;
      }

      .patches-in-pack p {
        color: #6F6F6F !important;
        font-family: "Roboto", sans-serif;
        font-size: 14px !important;
        font-weight: 400 !important;
        line-height: 1.43 !important;
        margin-bottom: 0 !important;
      }
      
      .patches-in-pack img {
        min-width: 100% !important;
        height: 36px !important;
        object-fit: cover;
        margin-block: 8px !important;
      }

      .container.package .js-heading .btn,
      .button-proceed {
        font-size: 22px !important;
        font-weight: 400 !important;
        line-height: 24px !important; /* 109.091% */
        letter-spacing: 1.5px !important;
      }

      .trust-advisor {
        margin-top: 10px;
        margin-inline: auto;
        text-align: center;
        max-width: 100% !important;
      }

      .trust-advisor img {
        width: 182px;
        height: 54px;
      }

      /* PDP */
      .pdp-paypal-bottom {
        margin: 0 auto !important;
      }

      .pdp-paypal-bottom .pdp-paypal-container {
        margin-top: 6px;
      }

      .shopify-payment-button__button--branded .shopify-cleanslate {
        justify-content: center;
      }

      .container.package #addToCart {
        margin-block: 8px 10px !important;
      }

      .container.package .js-heading h2{
        margin-bottom: 0 !important;
        font-family: "Din Condensed","Roboto",sans-serif !important;
        font-size: 44px;
        font-weight: 400;
        line-height: 1.18;
        letter-spacing: 0.88px;
      }

      .container.package .patches-in-pack {
        margin-inline: -30px;
      }

      .prices + .js-heading img {
        display: none !important;
      }

      .package .form {
        margin-top: 0 !important;
      }

      .prices .js-total {
        margin: 8px 0 0 0 !important;
        color: var(--Black, #0C0B0B);
        font-size: 24px !important;
        line-height: 32px !important; /* 133.333% */
      }

      #getNow {
        background: none !important;
      }

      #addToCart {
        margin-block: 10px !important;
      }

      /* Slide-in */
      #cons {
        position: relative;
        padding-inline: 16px !important;
      }

      #cons .title-logo {
        margin-bottom: 0 !important;
        font-family: "Din Condensed","Roboto",sans-serif !important;
      }

      #cons .slide-logo {
        color: #212529;
        font-family: "Din Condensed", "Bebas", "Roboto",sans-serif !important;
        font-size: 26px !important;
        font-weight: 400;
        line-height: 1.3 !important;
        letter-spacing: 0.52px !important;
        text-transform: uppercase;
      }

      #cons .patches-in-pack {
        margin-bottom: 52px;
      }

      #cons .patches-in-pack img {
        position: absolute;
        left: 0;
        width: 100%;
      }

      #cons .title-logo .close-btn {
        width: 16px;
        height: 16px;
        padding: 2px;
      }

      .reviews-slide {
        display: none !important;
      }

      body .sidebar .view-prices {
        margin-top: 8px !important;
      }
      .view-prices h3 {
        line-height: 32px !important; 
      }
      .sidebar .view-prices {
        gap: 0 !important;
      }
      .pdp-paypal-container {
        margin-top: 8px;
        display: block !important;
      }

      .pdp-paypal-container + .button-proceed {
        margin-top: 10px !important;
      }

    </style>`

  const patchesInPack = /*html*/ `
    <div class="patches-in-pack">
      <p>72 patches in 3 packs - 3 months for 1 person</p>
      <img src="//naturalpatch.com/cdn/shop/files/free-shipping-worldwide.svg?v=2160055944846624631" alt="free shipping worldwide">
    </div>`

  const trustadvisor = /*html*/ `
    <div class="trust-advisor">
      <img src="${IMAGE_DIR_URL}/rated-trustadvisor.png" alt="trustadvisor excellent rate">
    </div> 
  `

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', styleCSS)

  appPatchesInPackAndLogic()
  changeCloseIMG()
  hideNavbarIntersection()
  addTrustAdvisor()

  waitForElement(`.pdp-paypal-bottom .shopify-cleanslate [role="button"]`).then((el) => {
    handleVisibility(el, [
      'exp_add_exp_v_msus_bnft',
      '{{button_name}} - {{focusTime}}',
      'Visibility',
      'Main Stock Up And Save'
    ])

    el.addEventListener('click', () => {
      pushDataLayer(['exp_add_exp_b_msus_bn', el.querySelector('span').innerText, 'Button', 'Main Stock Up And Save'])
    })
  })
  waitForElement(`.shopify-cleanslate [role="button"]`).then((el) => {
    handleVisibility(el, ['exp_add_exp_v_sp_bnft', '{{button_name}} - {{focusTime}}', 'Visibility', 'Select package'])

    el.addEventListener('focus', () => {
      pushDataLayer(['exp_add_exp_b_sp_bn', el.querySelector('span').innerText, 'Button', 'Select package'])
    })
  })

  waitForElement('.slide-in .patches-in-pack img').then((el) =>
    handleVisibility(el, [
      'exp_add_exp_v_spfsw_ft',
      '{{focusTime}}',
      'Visibility',
      'Select package FREE Shipping Worldwide'
    ])
  )
  waitForElement('.slide-in .patches-in-pack > p').then((el) =>
    handleVisibility(el, [
      'exp_add_exp_v_spiap_ft',
      '{{focusTime}}',
      'Visibility',
      'Select package Information about pack '
    ])
  )

  waitForElement('.container.package .patches-in-pack img').then((el) =>
    handleVisibility(el, [
      'exp_add_exp_ft_msusrsw_v',
      '{{focusTime}}',
      'Visibility',
      'Main Stock Up And Save FREE Shipping Worldwide'
    ])
  )
  waitForElement('.container.package  .patches-in-pack > p').then((el) =>
    handleVisibility(el, [
      'exp_add_exp_ft_msusiap_v',
      '{{focusTime}}',
      'Visibility',
      'Main Stock Up And Save Information about pack'
    ])
  )

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity('set', `add_exp`, 'variant_1')
    }
  }, WAIT_INTERVAL_TIMEOUT)

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  function waitForElement(selector) {
    return new Promise((resolve) => {
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
  function handleVisibility(el, eventParams) {
    let isVisible = false
    let entryTime
    const config = {
      root: null,
      threshold: 0 // Trigger when any part of the element is out of viewport
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            // The element has become visible
            isVisible = true
            entryTime = new Date().getTime()
          }
        } else if (isVisible) {
          // The element is out of the viewport, calculate visibility duration
          isVisible = false
          const exitTime = new Date().getTime()
          const visibilityDuration = (exitTime - entryTime) / 1000 // Convert to seconds
          const roundedDuration = Math.round(visibilityDuration)

          if (roundedDuration) {
            const eventData = eventParams
            eventData[1] = roundedDuration

            if (el.matches('.shopify-cleanslate [role="button"]')) {
              eventData[1] = `${el.querySelector('span').innerText} - ${roundedDuration}`
            }

            pushDataLayer(eventData)
            observer.disconnect()
          }
        }
      })
    }, config)

    observer.observe(el)
  }
  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    // Send a Google Analytics event
    const eventData = {
      event: 'event-to-ga4',
      event_name,
      event_desc,
      event_type,
      event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function appPatchesInPackAndLogic() {
    const waitForPacks = setInterval(() => {
      if (document.querySelectorAll('.container.package .list-packs, .slide-packs.slide-in .list-packs')[7]) {
        clearInterval(waitForPacks)

        addPatchesNumber('.container.package .slide-packs')
        addPatchesNumber('.slide-packs.slide-in')
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function addPatchesNumber(parentSelector) {
    const parent = document.querySelector(parentSelector)
    const patches = parent.querySelectorAll('.list-packs')

    parent.insertAdjacentHTML('afterbegin', patchesInPack)

    const waitForPatchesInPack = setInterval(() => {
      const $patchesInPack = parent.querySelector('.patches-in-pack')

      if ($patchesInPack) {
        clearInterval(waitForPatchesInPack)

        // handle click on packs
        patches.forEach(function (pack, index) {
          // Calculate the value based on the index (4 - index)
          const packNumber = 4 - index
          const calculatedPatchesInPack = packNumber * 24

          pack.addEventListener('click', function () {
            let txt

            if (Number(packNumber) > 1) {
              txt = `${calculatedPatchesInPack} patches in ${packNumber} packs - ${packNumber} months for 1 person`
            } else {
              txt = `${calculatedPatchesInPack} patches in ${packNumber} pack - ${packNumber} month for 1 person`
            }

            $patchesInPack.querySelector('p').innerText = txt
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function changeCloseIMG() {
    waitForElement('#cons .title-logo img').then((el) => (el.src = `${IMAGE_DIR_URL}/slide-in-close-x.svg`))
  }
  function hideNavbarIntersection() {
    const waitForNavbar = setInterval(() => {
      const navbar = document.querySelector('header .navbar')
      const addToCartBtn = document.getElementById('addToCart')
      if (navbar && addToCartBtn) {
        clearInterval(waitForNavbar)

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                navbar.style.transform = 'translateY(-100%)'
              } else {
                navbar.style.transform = 'translateY(0)'
              }
            })
          },
          {
            threshold: 0.5
          }
        )

        // Start observing the element
        observer.observe(addToCartBtn)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
  function addTrustAdvisor() {
    waitForElement('.reviews-slide').then((el) => el.insertAdjacentHTML('afterend', trustadvisor))
    waitForElement('.prices + .js-heading').then((el) => el.insertAdjacentHTML('afterend', trustadvisor))
  }
})()
