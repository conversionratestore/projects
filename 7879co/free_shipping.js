;(() => {
  console.log(
    '%c EXP: Add free shipping info A/B test (DEV: OS)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )
  ;(function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        ;(h.hj.q = h.hj.q || []).push(arguments)
      }
    h._hjSettings = { hjid: 2667925, hjsv: 6 }
    a = o.getElementsByTagName('head')[0]
    r = o.createElement('script')
    r.async = 1
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
    a.appendChild(r)
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
  hj('event', 'free_shipping')
  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)
  const git = 'https://conversionratestore.github.io/projects/'

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

  const blockVisibility = (selector, viewTime, event, descr, type, location) => {
    let v1 = new IntersectionObserver(
      entries => {
        entries.forEach(item => {
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

    let v2 = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.isIntersecting) {
          pushDataLayer(
            event || `view_element_${item.target.id}`,
            descr || 'Element visibility',
            type || `View element on screen (${viewTime} sec or more)`,
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
  const icons = {
    shipping: /* HTML */ `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.8917 15.625H8.1084C7.94264 15.625 7.78367 15.5592 7.66646 15.4419C7.54925 15.3247 7.4834 15.1658 7.4834 15C7.4834 14.8342 7.54925 14.6753 7.66646 14.5581C7.78367 14.4408 7.94264 14.375 8.1084 14.375H11.8917C12.0575 14.375 12.2165 14.4408 12.3337 14.5581C12.4509 14.6753 12.5167 14.8342 12.5167 15C12.5167 15.1658 12.4509 15.3247 12.3337 15.4419C12.2165 15.5592 12.0575 15.625 11.8917 15.625Z"
        fill="white"
      />
      <path
        d="M16.8167 15.625H14.775C14.6092 15.625 14.4503 15.5592 14.3331 15.442C14.2158 15.3248 14.15 15.1658 14.15 15C14.15 14.8343 14.2158 14.6753 14.3331 14.5581C14.4503 14.4409 14.6092 14.375 14.775 14.375H16.8167C16.8632 14.376 16.9087 14.3608 16.9452 14.3319C16.9817 14.303 17.007 14.2622 17.0167 14.2167L17.5667 11.4584H12.5C12.4119 11.4585 12.3248 11.44 12.2444 11.4041C12.164 11.3682 12.092 11.3157 12.0333 11.25C11.9754 11.1845 11.9315 11.1078 11.9042 11.0247C11.877 10.9416 11.8671 10.8538 11.875 10.7667L12.6083 4.16669C12.6115 4.13698 12.6087 4.10694 12.6001 4.07832C12.5915 4.04971 12.5773 4.02309 12.5583 4.00002C12.5147 3.96038 12.4588 3.93686 12.4 3.93335H2.5C2.33424 3.93335 2.17527 3.8675 2.05806 3.75029C1.94085 3.63308 1.875 3.47411 1.875 3.30835C1.875 3.14259 1.94085 2.98362 2.05806 2.86641C2.17527 2.7492 2.33424 2.68335 2.5 2.68335H12.4C12.6044 2.68299 12.8067 2.72587 12.9934 2.80916C13.1801 2.89246 13.347 3.0143 13.4833 3.16669C13.6209 3.31931 13.7253 3.49887 13.7899 3.69396C13.8544 3.88906 13.8777 4.09544 13.8583 4.30002L13.2 10.1834H18.3333C18.4254 10.1835 18.5164 10.2037 18.5998 10.2425C18.6833 10.2814 18.7573 10.338 18.8167 10.4084C18.8744 10.4817 18.9161 10.5663 18.9391 10.6567C18.962 10.7471 18.9658 10.8414 18.95 10.9334L18.25 14.4334C18.1863 14.7673 18.0084 15.0688 17.747 15.2862C17.4855 15.5035 17.1567 15.6233 16.8167 15.625Z"
        fill="white"
      />
      <path
        d="M5.22484 15.625H1.6665C1.50074 15.625 1.34177 15.5592 1.22456 15.4419C1.10735 15.3247 1.0415 15.1658 1.0415 15C1.0415 14.8342 1.10735 14.6753 1.22456 14.5581C1.34177 14.4408 1.50074 14.375 1.6665 14.375H5.22484C5.3906 14.375 5.54957 14.4408 5.66678 14.5581C5.78399 14.6753 5.84984 14.8342 5.84984 15C5.84984 15.1658 5.78399 15.3247 5.66678 15.4419C5.54957 15.5592 5.3906 15.625 5.22484 15.625Z"
        fill="white"
      />
      <path
        d="M18.3333 11.4584H12.5C12.3342 11.4584 12.1753 11.3925 12.0581 11.2753C11.9408 11.1581 11.875 10.9991 11.875 10.8334C11.875 10.6676 11.9408 10.5086 12.0581 10.3914C12.1753 10.2742 12.3342 10.2084 12.5 10.2084H17.5L16.2667 6.60004C16.2526 6.55832 16.2256 6.52214 16.1897 6.49669C16.1538 6.47123 16.1107 6.45782 16.0667 6.45837H13.0583C12.8926 6.45837 12.7336 6.39253 12.6164 6.27532C12.4992 6.15811 12.4333 5.99913 12.4333 5.83337C12.4333 5.66761 12.4992 5.50864 12.6164 5.39143C12.7336 5.27422 12.8926 5.20837 13.0583 5.20837H16.0667C16.3702 5.21108 16.6655 5.30681 16.9129 5.48265C17.1602 5.65848 17.3477 5.90597 17.45 6.19171L18.925 10.6334C18.9573 10.7276 18.9666 10.8282 18.9521 10.9268C18.9376 11.0254 18.8997 11.1191 18.8417 11.2C18.7826 11.2794 18.706 11.344 18.6178 11.3888C18.5296 11.4336 18.4322 11.4574 18.3333 11.4584Z"
        fill="white"
      />
      <path
        d="M6.66667 18.125C6.21342 18.125 5.77035 17.9906 5.39349 17.7387C5.01662 17.4869 4.72289 17.129 4.54944 16.7103C4.37599 16.2915 4.33061 15.8308 4.41903 15.3862C4.50746 14.9417 4.72572 14.5333 5.04621 14.2128C5.36671 13.8923 5.77505 13.6741 6.21959 13.5857C6.66413 13.4972 7.1249 13.5426 7.54365 13.7161C7.9624 13.8895 8.32031 14.1832 8.57212 14.5601C8.82393 14.937 8.95833 15.38 8.95833 15.8333C8.95833 16.4411 8.71689 17.024 8.28712 17.4537C7.85735 17.8835 7.27446 18.125 6.66667 18.125ZM6.66667 14.7916C6.46065 14.7916 6.25925 14.8527 6.08795 14.9672C5.91665 15.0816 5.78313 15.2443 5.70429 15.4347C5.62545 15.625 5.60482 15.8344 5.64502 16.0365C5.68521 16.2386 5.78442 16.4242 5.9301 16.5699C6.07578 16.7155 6.26138 16.8148 6.46345 16.8549C6.66551 16.8951 6.87496 16.8745 7.0653 16.7957C7.25564 16.7168 7.41832 16.5833 7.53278 16.412C7.64724 16.2407 7.70833 16.0393 7.70833 15.8333C7.70833 15.557 7.59859 15.2921 7.40324 15.0967C7.20789 14.9014 6.94293 14.7916 6.66667 14.7916Z"
        fill="white"
      />
      <path
        d="M13.3332 18.125C12.8799 18.125 12.4369 17.9906 12.06 17.7387C11.6831 17.4869 11.3894 17.129 11.2159 16.7103C11.0425 16.2915 10.9971 15.8308 11.0855 15.3862C11.174 14.9417 11.3922 14.5333 11.7127 14.2128C12.0332 13.8923 12.4416 13.6741 12.8861 13.5857C13.3306 13.4972 13.7914 13.5426 14.2102 13.7161C14.6289 13.8895 14.9868 14.1832 15.2386 14.5601C15.4904 14.937 15.6248 15.38 15.6248 15.8333C15.6248 16.4411 15.3834 17.024 14.9536 17.4537C14.5239 17.8835 13.941 18.125 13.3332 18.125ZM13.3332 14.7916C13.1271 14.7916 12.9258 14.8527 12.7545 14.9672C12.5832 15.0816 12.4496 15.2443 12.3708 15.4347C12.292 15.625 12.2713 15.8344 12.3115 16.0365C12.3517 16.2386 12.4509 16.4242 12.5966 16.5699C12.7423 16.7155 12.9279 16.8148 13.13 16.8549C13.332 16.8951 13.5415 16.8745 13.7318 16.7957C13.9221 16.7168 14.0848 16.5833 14.1993 16.412C14.3137 16.2407 14.3748 16.0393 14.3748 15.8333C14.3748 15.557 14.2651 15.2921 14.0697 15.0967C13.8744 14.9014 13.6094 14.7916 13.3332 14.7916Z"
        fill="white"
      />
      <path
        d="M5 6.875H2.5C2.33424 6.875 2.17527 6.80915 2.05806 6.69194C1.94085 6.57473 1.875 6.41576 1.875 6.25C1.875 6.08424 1.94085 5.92527 2.05806 5.80806C2.17527 5.69085 2.33424 5.625 2.5 5.625H5C5.16576 5.625 5.32473 5.69085 5.44194 5.80806C5.55915 5.92527 5.625 6.08424 5.625 6.25C5.625 6.41576 5.55915 6.57473 5.44194 6.69194C5.32473 6.80915 5.16576 6.875 5 6.875Z"
        fill="white"
      />
      <path
        d="M5.83317 9.79163H1.6665C1.50074 9.79163 1.34177 9.72578 1.22456 9.60857C1.10735 9.49136 1.0415 9.33239 1.0415 9.16663C1.0415 9.00087 1.10735 8.84189 1.22456 8.72468C1.34177 8.60747 1.50074 8.54163 1.6665 8.54163H5.83317C5.99893 8.54163 6.1579 8.60747 6.27511 8.72468C6.39232 8.84189 6.45817 9.00087 6.45817 9.16663C6.45817 9.33239 6.39232 9.49136 6.27511 9.60857C6.1579 9.72578 5.99893 9.79163 5.83317 9.79163Z"
        fill="white"
      />
      <path
        d="M6.66634 12.7084H3.33301C3.16725 12.7084 3.00828 12.6425 2.89107 12.5253C2.77386 12.4081 2.70801 12.2491 2.70801 12.0834C2.70801 11.9176 2.77386 11.7586 2.89107 11.6414C3.00828 11.5242 3.16725 11.4584 3.33301 11.4584H6.66634C6.8321 11.4584 6.99107 11.5242 7.10828 11.6414C7.22549 11.7586 7.29134 11.9176 7.29134 12.0834C7.29134 12.2491 7.22549 12.4081 7.10828 12.5253C6.99107 12.6425 6.8321 12.7084 6.66634 12.7084Z"
        fill="white"
      />
    </svg>`,
    back: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
      <path d="M5 0.5L0.999999 4.5L5 8.5" stroke="black" stroke-linecap="round" />
    </svg>`
  }
  const countries = {
    ie: 'Irland',
    us: 'United States',
    gcc: 'Gulf Cooperation Council',
    eu: 'Europe',
    'int-usd': 'International',
    gb: 'United Kingdom'
  }

  const CRS_CART_TOTAL_PRICE = 'crsCartTotalPrice'

  class FreeShipping {
    constructor() {
      this.currentCountry = this.checkLocale()
      this.eventCountry = this.currentCountry === countries.gb ? 'UK' : 'US'
      this.usFreeDelivery = 350
      this.cartTotalPrice = +localStorage.getItem(CRS_CART_TOTAL_PRICE) || 0
      this.productPrice = 0
    }

    init() {
      let isPdp =
        this.currentCountry === countries.gb
          ? location.pathname.split('/').length === 5
          : location.pathname.split('/').length === 6
      let previousUrl = ''
      this.initStyles()

      if (this.checkPageUrl() === 'bag') {
        this.cart()
        previousUrl = location.href
      }

      if (this.checkPageUrl() === 'shop' && isPdp) {
        this.pdp()
        previousUrl = location.href
      }
      const mutation = new MutationObserver(mutations => {
        mutations.forEach(m => {
          if (m.previousSibling?.nodeName !== 'IFRAME') {
            this.currentCountry = this.checkLocale()
            this.eventCountry = this.currentCountry === countries.gb ? 'UK' : 'US'
            isPdp =
              this.currentCountry === countries.gb
                ? location.pathname.split('/').length === 5
                : location.pathname.split('/').length === 6
            if (this.checkPageUrl() === 'bag' && location.href !== previousUrl) {
              this.cart()

              previousUrl = location.href
            }

            if (this.checkPageUrl() === 'shop' && location.href !== previousUrl && isPdp) {
              this.pdp()
              previousUrl = location.href
            }

            previousUrl = location.href
            mutation.disconnect()
            mutation.observe(document.body, {
              childList: true
            })
          }
        })
      })
      mutation.observe(document.body, {
        childList: true
      })
    }

    pdp() {
      let isFreeshippingShown = false
      let isOverFreeShippingShown = false

      const pdpChanges = () => {
        waitForElement('#add-cart-button-fixed').then(elem => {
          const container = elem.parentNode.nextElementSibling
          const warranty = container.children[0]
          const shipping = container.children[1]

          const { firstDay, lastDay } = this.estimateDelivery()

          const shippingHtml = /* HTML */ `
            <div class="crs_shipping">
              <div class="crs_shipping__header">
                <span class="crs_shipping__icon">${icons.shipping}</span>
                <span class="crs_shipping__title">
                  <span>Congratulations!</span>
                  You have
                  <span>FREE ${this.currentCountry === countries.gb ? 'UK' : 'US'} Shipping</span>
                </span>
              </div>
              <div class="crs_shipping__body">
                <div class="crs_shipping__date"></div>
                <div class="crs_shipping__estimate">
                  <span>Est. Delivery:</span>
                  <span class="crs_shipping__estimate_range"
                    >${firstDay.getDate()}
                    ${firstDay.toLocaleString('en-GB', {
                      month: 'short'
                    })}
                    - ${lastDay.getDate()}
                    ${lastDay.toLocaleString('en-GB', {
                      month: 'short'
                    })}</span
                  >
                </div>
              </div>
            </div>
          `
          const oldElement = document.querySelector('.crs_shipping')

          if (!oldElement) {
            container.insertAdjacentHTML('beforeend', shippingHtml)
            $el('.crs_shipping__date').append(shipping)
            container.append(warranty)
          }
          if (this.currentCountry === countries.us && this.cartTotalPrice < this.usFreeDelivery) {
            $el('.crs_shipping').classList.add('crs_shipping--inactive')
            const shippingTitle = /* HTML */ `
              <span class="crs_shipping__title">
                <span>FREE US Shipping</span>
                on orders over
                <span>$${this.usFreeDelivery}</span>
              </span>
            `
            $el('.crs_shipping__header').innerHTML = shippingTitle
          } else {
            $el('.crs_shipping').classList.remove('crs_shipping--inactive')
            const shippingTitle = /* HTML */ `
              <span class="crs_shipping__title">
                <span>Congratulations!</span>
                You have
                <span>FREE ${this.currentCountry === countries.gb ? 'UK' : 'US'} Shipping</span>
              </span>
            `
            $el('.crs_shipping__header').innerHTML = shippingTitle
          }

          $$el('p').forEach(elem => {
            if (elem.textContent.includes('Made for You')) {
              $el('.crs_shipping__body').style.display = 'none'
            }
          })

          if (
            (!isFreeshippingShown && this.currentCountry === countries.gb) ||
            (!isFreeshippingShown && this.currentCountry === countries.us && this.cartTotalPrice >= this.usFreeDelivery)
          ) {
            isFreeshippingShown = true
            isOverFreeShippingShown = false
            blockVisibility(
              '.crs_shipping',
              3,
              `exp_cust_free_del_vis_pdp${this.eventCountry.toLowerCase()}_elem`,
              'Element view',
              'Visibility',
              `PDP ${this.eventCountry} Shipping`
            )
          }
          if (
            !isOverFreeShippingShown &&
            this.currentCountry === countries.us &&
            this.cartTotalPrice < this.usFreeDelivery
          ) {
            isOverFreeShippingShown = true
            isFreeshippingShown = false
            blockVisibility(
              '.crs_shipping',
              3,
              `exp_cust_free_del_vis_pdpusorov_elem`,
              'Element view',
              'Visibility',
              `PDP US Shipping FREE US Shipping on orders over $${this.usFreeDelivery}`
            )
          }
          $$el('button').forEach(elem => {
            elem.addEventListener('click', event => {
              console.log('fixed', event.target.closest('.fixed'))
              if (event.currentTarget.dataset.testid === 'add-to-bag' && !event.target.closest('.fixed')) {
                if (this.currentCountry === countries.gb) {
                  pushDataLayer(
                    `exp_cust_free_del_but_pdp${this.eventCountry.toLowerCase()}_adbag`,
                    'Add to bag',
                    'Button',
                    `PDP ${this.eventCountry}`
                  )
                }
                if (this.currentCountry === countries.us) {
                  this.productPrice = +$el('h3.text-h3.font-semibold').textContent.replace(/^\D+/g, '').replace(',', '')

                  this.cartTotalPrice += this.productPrice

                  localStorage.setItem(CRS_CART_TOTAL_PRICE, this.cartTotalPrice.toFixed(2))
                  pdpChanges()
                  if (this.cartTotalPrice < this.usFreeDelivery) {
                    pushDataLayer(
                      'exp_cust_free_del_but_pdpusorov_adbag',
                      'Add to bag',
                      'Button',
                      `PDP US FREE US Shipping on orders over $${this.usFreeDelivery}`
                    )
                  } else {
                    pushDataLayer(
                      `exp_cust_free_del_but_pdp${this.eventCountry.toLowerCase()}_adbag`,
                      'Add to bag',
                      'Button',
                      `PDP ${this.eventCountry}`
                    )
                  }
                }
              }
              if (event.currentTarget.dataset.testid === 'add-to-bag' && event.target.closest('.fixed')) {
                if (this.currentCountry === countries.gb) {
                  pushDataLayer(`exp_cust_free_del_but_pdpuk_adbag_st`, 'Add to bag', 'Button', `PDP UK`)
                }
                if (this.currentCountry === countries.us) {
                  this.productPrice = +$el('h3.text-h3.font-semibold').textContent.replace(/^\D+/g, '').replace(',', '')

                  this.cartTotalPrice += this.productPrice

                  localStorage.setItem(CRS_CART_TOTAL_PRICE, this.cartTotalPrice.toFixed(2))
                  pdpChanges()
                  if (this.cartTotalPrice < this.usFreeDelivery) {
                    pushDataLayer(
                      'exp_cust_free_del_but_pdpusorov_adbag_st',
                      'Add to bag',
                      'Button',
                      `PDP US FREE US Shipping on orders over $${this.usFreeDelivery}`
                    )
                  } else {
                    pushDataLayer(`exp_cust_free_del_but_pdpus_adbag_st`, 'Add to bag', 'Button', `PDP US`)
                  }
                }
              }
            })
          })
        })
      }
      pdpChanges()
    }

    cart() {
      let isFreeshippingShown = false
      let isOverFreeShippingShown = false

      const cartChanges = () => {
        waitForElement('p.tracking-tight').then(elem => {
          if (elem.textContent.includes('Your bag is empty')) {
            this.cartTotalPrice = 0
            localStorage.removeItem(CRS_CART_TOTAL_PRICE)
          }
        })

        waitForElement('[data-testid="checkout-button"]').then(elem => {
          $el('.crs_cart_shipping')?.remove()
          $el('.crs_free_text')?.remove()
          $el('.crs_free_notification')?.remove()
          $$el('h5').forEach(elem => {
            if (elem.textContent.includes('Total')) {
              this.cartTotalPrice = +elem.nextElementSibling.textContent.replace(/^\D+/g, '').replace(',', '')
              localStorage.setItem(CRS_CART_TOTAL_PRICE, this.cartTotalPrice.toFixed(2))
            }
          })

          $$el('h3').forEach(elem => {
            const elemStyle = getComputedStyle(elem)
            if (elem.textContent.includes('In Your Bag') && elemStyle.display !== 'none') {
              if (
                this.currentCountry === countries.gb ||
                (this.currentCountry === countries.us && this.cartTotalPrice > this.usFreeDelivery)
              ) {
                const cartFreeShippingHtml = /* HTML */ `
                  <div class="crs_shipping crs_cart_shipping">
                    <div class="crs_shipping__header">
                      <span class="crs_shipping__icon">${icons.shipping}</span>
                      <span class="crs_shipping__title">
                        <span>Congratulations!</span>
                        You have
                        <span>FREE ${this.currentCountry === countries.gb ? 'UK' : 'US'} Shipping</span>
                      </span>
                    </div>
                  </div>
                `

                elem.insertAdjacentHTML('afterend', cartFreeShippingHtml)
              }
              if (this.currentCountry === countries.us && this.cartTotalPrice < this.usFreeDelivery) {
                const cartFreeShippingHtmlUSA = /* HTML */ `
                  <div class="crs_free_notification">
                    <button class="crs_return" onclick="history.back()">
                      <span>${icons.back}</span> Continue shopping
                    </button>
                    <div class="crs_shipping__warning_title">
                      You are $<span>${(this.usFreeDelivery - this.cartTotalPrice).toFixed(2)}</span> away from FREE US
                      Shipping
                    </div>

                    <div class="crs_shipping__progress_container" style="width: 100%">
                      <div class="crs_shipping__progress_bar" style="width: 0%"></div>
                    </div>
                  </div>
                `
                elem.insertAdjacentHTML('afterend', cartFreeShippingHtmlUSA)

                $el('.crs_return').addEventListener('click', () => {
                  pushDataLayer(
                    'exp_cust_free_del_lin_shopus_cont',
                    'Continue shopping',
                    'Link',
                    'Shopping bag page US Shipping'
                  )
                })

                const progressBar = $el('.crs_shipping__progress_bar')
                const percentage = Math.min((this.cartTotalPrice / this.usFreeDelivery) * 100, 100)
                progressBar.style.width = percentage + '%'
              }
            }
            if (elem.textContent.includes('Summary')) {
              if (this.currentCountry === countries.us && this.cartTotalPrice < this.usFreeDelivery) {
                return
              }
              const targetDiv = elem.nextElementSibling.nextElementSibling

              const freeHtml = /* HTML */ `
                <div class="flex w-full justify-between font-normal crs_free_text">
                  <h5 class="text-h5 text-platinum-32">Shipping</h5>
                  <h5 class="text-h5 crs_text_green">Free</h5>
                </div>
              `
              targetDiv.insertAdjacentHTML('afterend', freeHtml)
            }
          })
          if (
            (!isFreeshippingShown && this.currentCountry === countries.gb) ||
            (!isFreeshippingShown && this.currentCountry === countries.us && this.cartTotalPrice >= this.usFreeDelivery)
          ) {
            isFreeshippingShown = true
            isOverFreeShippingShown = false

            blockVisibility(
              '.crs_cart_shipping',
              3,
              `exp_cust_free_del_vis_shop${this.eventCountry.toLowerCase()}_elem`,
              'Element view',
              'Visibility',
              `Shopping bag page ${this.eventCountry} Shipping`
            )
          }

          if (
            !isOverFreeShippingShown &&
            this.currentCountry === countries.us &&
            this.cartTotalPrice < this.usFreeDelivery
          ) {
            isOverFreeShippingShown = true
            isFreeshippingShown = false
            blockVisibility(
              '.crs_free_notification',
              3,
              'exp_cust_free_del_vis_shopusorov_elem',
              'Element view',
              'Visibility',
              `Shopping bag page US Shipping FREE US Shipping on orders over $${this.usFreeDelivery}`
            )
          }
        })
      }
      // const observedElement = document.querySelector('[data-testid="checkout-button"]')?.parentNode.previousSibling
      waitForElement('[data-testid="checkout-button"]').then(elem => {
        const observedElement = elem.parentNode.previousSibling
        const cartMutation = new MutationObserver(mutation => {
          mutation.forEach(item => {
            if (item.type === 'characterData') {
              cartMutation.disconnect()
              cartChanges()
            }
          })

          cartMutation.observe(observedElement, {
            childList: true,
            characterData: true,
            characterDataOldValue: true,
            attributes: true,
            subtree: true
          })
        })

        cartMutation.observe(observedElement, {
          childList: true,
          characterData: true,
          characterDataOldValue: true,
          attributes: true,
          subtree: true
        })
      })

      cartChanges()

      waitForElement('[data-testid="checkout-button"]').then(elem => {
        elem.addEventListener('click', () => {
          if (
            this.currentCountry === countries.gb ||
            (this.currentCountry === countries.us && this.cartTotalPrice > this.usFreeDelivery)
          ) {
            pushDataLayer(
              `exp_cust_free_del_but_shop${this.eventCountry.toLowerCase()}_check`,
              'Go to Checkout',
              'Button',
              `Shopping bag page ${this.eventCountry} Shipping`
            )
          }
          if (this.currentCountry === countries.us && this.cartTotalPrice < this.usFreeDelivery) {
            pushDataLayer(
              'exp_cust_free_del_but_shopusorov_check',
              'Go to Checkout',
              'Button',
              `Shopping bag page US Shipping FREE US Shipping on orders over $${this.usFreeDelivery}`
            )
          }
        })
      })
    }

    checkPageUrl() {
      const pageUrl = window.location.href

      if (pageUrl.includes('/bag/')) {
        return 'bag'
      } else if (pageUrl.includes('/shop/')) {
        return 'shop'
      } else {
        return 'other'
      }
    }
    checkLocale() {
      const url = window.location.href
      const regex = /https:\/\/7879\.co\/(?:([a-z-]+)\/)?.*/
      const match = url.match(regex)
      if (match) {
        const locale = match[1]
        return countries?.[locale] || countries.gb
      }
      return null
    }

    estimateDelivery() {
      const addBusinessDays = (date, days) => {
        let count = 0
        while (count < days) {
          date.setDate(date.getDate() + 1)
          if (date.getDay() !== 0 && date.getDay() !== 6) {
            count++
          }
        }
        return new Date(date)
      }

      let extraDay = 0
      if (new Date().getUTCHours() >= 13 && new Date().getDay() !== 0 && new Date().getDay() !== 6) {
        extraDay = 1
      }

      const firstDay = addBusinessDays(new Date(), 3 + extraDay)
      const lastDay = addBusinessDays(new Date(), 5 + extraDay)
      return { firstDay, lastDay }
    }
    initStyles() {
      const style = /* HTML */ `
        <style>
          #add-cart-button-fixed + div {
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
          }
          .crs_shipping {
            width: 100%;
            font-family:
              Roobert TRIAL,
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Helvetica,
              Arial,
              sans-serif,
              Apple Color Emoji,
              Segoe UI Emoji,
              Segoe UI Symbol;
            font-size: 14px;
            font-weight: 400;
          }
          .crs_shipping__header {
            display: flex;
            gap: 6px;
            padding: 8px 20px;
            background: #569a30;
            color: #fff;
            line-height: 18px;
          }
          .crs_shipping--inactive .crs_shipping__header {
            background: #d5d5d8;
            color: #000;
          }
          .crs_shipping__title span:first-child {
            font-weight: 600;
          }
          .crs_shipping__title span:last-child {
            text-transform: uppercase;
            font-weight: 600;
          }
          .crs_shipping__body {
            border: 1px dashed #569a30;
            border-top: none;
            background: #f4f4f5;
            padding: 8px 20px;
            text-align: left;
          }

          .crs_shipping--inactive .crs_shipping__body {
            background: #f4f4f5;
            border-color: #d5d5d8;
          }

          .crs_shipping__date {
            color: #484850;
            line-height: 20px;
          }
          .crs_shipping__date div {
            padding: 0;
            text-align: left;
          }
          .crs_shipping__date div p:first-child span,
          .crs_shipping__date div p:nth-child(2) {
            color: #000;
            font-weight: 600;
            line-height: 20px;
          }
          .crs_shipping__estimate {
            color: #484850;
            line-height: 20px;
          }
          .crs_shipping__estimate span:first-child {
            color: #000;
            font-weight: 600;
          }
          .crs_cart_shipping {
            margin-left: -1.25rem;
            width: calc(100% + 2.5rem);
            margin-top: -20px;
            margin-bottom: 1.25rem;
          }
          .crs_text_green {
            color: #069b0c;
            font-family:
              Roobert TRIAL,
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Helvetica,
              Arial,
              sans-serif,
              Apple Color Emoji,
              Segoe UI Emoji,
              Segoe UI Symbol;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
          }
          .crs_free_notification {
            position: relative;
            margin-left: -1.25rem;
            font-family:
              Roobert TRIAL,
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Helvetica,
              Arial,
              sans-serif,
              Apple Color Emoji,
              Segoe UI Emoji,
              Segoe UI Symbol;
            width: calc(100% + 2.5rem);
            margin-bottom: 1.25rem;
            background: #f4f4f5;
            padding: 12px 17px;
          }
          .crs_return {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 100%;
            border: none;
            background: none;
            color: #000;
            font-size: 14px;
            font-weight: 400;
            line-height: 18px;
            text-decoration-line: underline;
          }
          .crs_shipping__warning_title {
            color: #000;
            font-size: 14px;
            font-weight: 600;
            line-height: 18px;
          }
          .crs_shipping__progress_container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: #d5d5d8;
            overflow: hidden;
          }
          .crs_shipping__progress_bar {
            height: 3px;
            background: #569a30;
          }

          @media (min-width: 767px) {
            .crs_cart_shipping,
            .crs_free_notification {
              margin: 0;
              margin-bottom: 24px;
              max-width: 480px;
            }
            .crs_cart_shipping {
              margin-top: -20px;
            }
            .crs_cart_shipping .crs_shipping__header {
              display: flex;
              justify-content: center;
            }
          }
        </style>
      `

      document.head.insertAdjacentHTML('beforeend', style)
    }
  }

  new FreeShipping().init()
})()
