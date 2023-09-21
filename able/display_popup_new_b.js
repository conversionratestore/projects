; (function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/able/img'
  const DEVICE = screen.width < 768 ? 'mobile' : 'desktop'
  const WAIT_INTERVAL_TIMEOUT = 100
  let popupWasVisible = false

  let packPrice
  let packValue

  const waitForRoot = setInterval(() => {
    const rootElement = document.getElementById('root')

    if (rootElement) {
      clearInterval(waitForRoot)
      const style = /*html*/`
  <style>
    .hide_arrow {
      opacity: 0 !important;
      pointer-events: none !important;
    }
    /* Style for the popup container */
    .overlay {
      display: none; 
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 9999;
    }

    .overlay.show-popup {
      display: block; 
    }

    /* Style for the popup content */
    .popup {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
      padding: 0 24px 24px;
      border-radius: 12px;
      max-width: 418px;
      width: calc(100% - 20px);
    }

    .popup p {
      font-family: "SF Pro Text", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: #010101;
      margin: 0;
    }

    .popup .timer {
      padding: 11px 24px;
      margin-inline: -24px;
      background: #FFE9D2;
      text-align: center;
      border-radius: 12px 12px 0px 0px;
    }

    .popup .timer span {
      color: #EB731A;
      font-weight: 600;
    }

    .popup .heading {
      display: flex;
      gap: 12px;
      margin-top: 16px;
    }

    .popup .heading p {
      font-family: "SF Pro Display", "SF Pro Text", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 34px;
      letter-spacing: -0.096px;
    }

    .popup .txt p {
      color: #5E626B;
      margin-top: 12px;
    }

    .popup .txt p b {
      color: #010101;
      font-weight: 600;
    }

    .popup .price {
      margin-block: 20px 40px;
    }

    .popup .price>p {
      margin-bottom: 16px;
    }

    .price .packs {
      display: flex;
      gap: 12px;
      justify-content: space-between;
      height: 50px;
    }

    .price .packs>div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.3%;
      border-radius: 6px;
      border: 1px solid #E0E3EB;
      background: #F6F6F6;
      cursor: pointer;
    }

    .price .packs>div:focus-visible,
    .price .packs>div:hover {
      background: #B7E3FF;
    }

    .price .packs>div.active {
      background: var(--new-secondary, #1375D6);
    }

    .price .packs>div.active p {
      color: #fff;
    }

    .price p {
      font-size: 16px;
      font-weight: 600;
    }

    .price .popular {
      position: absolute;
      top: calc(100% + 4px);
      display: flex;
      flex-direction: column;
      cursor: auto;
    }

    .price .popular p {
      font-size: 12px;
      color: var(--text-alt, #5E626B) !important;
    }

    .popup .trial-support {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      width: 100%;
      border-radius: 12px;
      background: #E8F5FD;
    }

    .currle_arrow svg {
      position: absolute;
      top: -15px;
      right: 0;
    }

    .popup button {
      margin-block: 24px 16px;
      padding: 11px 16px;
      border-radius: 8px;
      background: #EB731A;
      color: #fff;
      border: none;
      width: 100%;
      font-family: "SF Pro Display", "SF Pro Text", sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      cursor: pointer;
    }

    .popup button:disabled {
      cursor: not-allowed;
      background-color: #C5C5D1;
      color: #FFFFFF;
    }
    .popup button:not(:disabled):focus-visible,
    .popup button:not(:disabled):hover {
      background: #CA5010;
    }

    .bottom-stars {
      display: flex;
      justify-content: center;
      gap: 4px;
    }

    .bottom-stars p {
      font-weight: 500;
      font-size: 12px;
    }

    .bottom-stars p b {
      font-weight: 700;
    }

    .popup .trial-support p {
      max-width: 254px;
    }

    @media only screen and (min-width: 768px) {
      .popup .timer {
        padding: 11px 30px;
        margin: 0 -30px;
      }
      .popup {
        padding: 0 30px 30px;
      }

      .popup .heading {
        margin-top: 30px;
      }

      .currle_arrow svg {
        top: -25px;
      }

      .mob {
        display: none !important;
      }
      .desk {
        display: block !important;
      }
    }

    @media only screen and (max-width: 768px) {
      .popup button {
        margin-block: 16px 12px;
      }

      .popup .price>p {
        margin-bottom: 12px;
      }

      .popup .trial-support p {
        max-width: 195px;
      }

      .mob {
        display: block !important;
      }
      .desk {
        display: none !important;
      }
    }
  </style>
      `

      // -------------------------------------
      // HTML ELEMENTS
      // -------------------------------------
      const popup = /*html*/`
  <div id="myPopupOverlay" class="overlay">
    <div class="popup">
      <div class="timer">
        <p>Your spot is reserved for: <span>00:00</span></p>
      </div>
      <div class="heading">
        <img src="${IMAGE_DIR_URL}/trial_try.svg" alt="">
        <p>Try Able for 1 week</p>
      </div>
      <div class="txt">
        <p>We’ve helped thousands of people to achieve their weight-loss objectives, and we’d want to share our
          <b>tried-and-true methods with you nearly for free.</b>
        </p>
        <p>Money shouldn’t stand in the way of finding a plan that finally works, especially in light of the global
          health crisis.</p>
        <p><b>It costs us $18.37 to offer you a 7-day trial,</b> but please select an option that works best for you.
        </p>
      </div>
      <div class="price">
        <p>Choose a price for your 7-day trial</p>
        <div class="packs">
          <div>
            <p>$0.50</p>
          </div>
          <div>
            <p>$3</p>
            <div class="popular">
              <p>Most popular</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="77" height="4" viewBox="0 0 77 4" fill="none">
                <path
                  d="M0.942919 2.31512C0.942919 2.31512 24.9937 0.382067 43.4889 0.800533C61.9841 1.219 75.4806 1.52415 75.4806 1.52415"
                  stroke="#1375D6" stroke-width="1.4" stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <div>
            <p>$18.37</p>
          </div>
        </div>
      </div>
      <div class="trial-support">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M16.275 16.7563C16.3625 16.8 16.4063 16.8 16.4938 16.8C16.5813 16.8 16.6688 16.8 16.7125 16.7563C21.4813 13.825 24.675 9.93126 25.0688 6.56251C25.2438 5.03126 24.8063 3.67501 23.8438 2.66876C22.8813 1.66251 21.5688 1.13751 20.1688 1.18126C18.8125 1.22501 17.5438 1.75001 16.4938 2.75626C15.4438 1.75001 14.175 1.22501 12.8188 1.18126C11.4188 1.13751 10.15 1.66251 9.14377 2.66876C8.13752 3.67501 7.74377 4.98751 7.91877 6.56251C8.35627 9.93126 11.55 13.825 16.275 16.7563Z" fill="#1375D6"/>
        <path d="M0 25.8125H4.94375V16.275H0.74375L0 25.8125Z" fill="#1375D6"/>
        <path d="M27.825 19.1188C27.5187 18.6813 26.95 18.5062 26.4687 18.725L18.8562 22.1813H18.8125L18.7687 22.225C18.55 22.3125 18.2875 22.4 18.025 22.4H11.2437C11.5062 21.875 12.0312 21.4812 12.6875 21.4812H18.0687C18.2 21.4812 18.2875 21.4375 18.4187 21.3938L18.4625 21.35C18.55 21.3062 18.5937 21.2625 18.6375 21.2188C18.725 21.0875 18.9 20.9125 18.9 20.6062C18.9 20.1687 18.5062 19.775 18.0687 19.775H13.9125C13.5625 19.775 13.1687 19.6875 12.8625 19.5125L9.36245 17.675C9.18745 17.5875 8.9687 17.5 8.74995 17.5H5.94995V24.5H7.87495C8.13745 24.5 8.39995 24.5438 8.66245 24.6313L14.1312 26.6C14.875 26.8625 15.6625 26.8188 16.3187 26.425L27.4312 20.5625C27.7812 20.3875 28 19.9937 28 19.6C28 19.4687 27.9562 19.2938 27.825 19.1188Z" fill="#1375D6"/>
      </svg>
        <p>Your trial fee will directly support 200+ Able coaches</p>
        <div class="currle_arrow desk">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
            <path d="M38.702 0L33.0618 13.1089L47.1788 11.4632L38.702 0ZM2.99854 46.9191C9.10106 47.3104 18.8282 46.4075 26.9667 41.356C35.2043 36.2431 41.6575 26.9706 41.2087 11.0219L38.7482 11.0918C39.1733 26.2009 33.1284 34.624 25.6731 39.2514C18.1187 43.9404 8.95816 44.8225 3.15533 44.4505L2.99854 46.9191Z" fill="#1375D6"/>
          </svg>
        </div>
        <div class="currle_arrow mob">
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="47" viewBox="0 0 39 47" fill="none">
            <path d="M31.4454 0L26.8627 13.1089L38.3328 11.4632L31.4454 0ZM2.43628 46.9191C7.39458 47.3104 15.2979 46.4075 21.9104 41.356C28.6035 36.2431 33.8467 26.9706 33.4821 11.0219L31.4829 11.0918C31.8283 26.2009 26.9168 34.624 20.8594 39.2514C14.7214 43.9404 7.27848 44.8225 2.56368 44.4505L2.43628 46.9191Z" fill="#1375D6"/>
          </svg>
        </div>
      </div>
      <button disabled>See My Program</button>
      <div class="bottom-stars">
        <img src="${IMAGE_DIR_URL}/stars.svg" alt="">
        <p><b>4.7/5</b> by <b>15000+</b> Happy Customers</p>
      </div>
    </div>
  </div>
      `

      // -------------------------------------
      // FUNCTIONS
      // -------------------------------------
      function sendGAEvent(event_name, event_desc, event_type, event_loc) { // Send a Google Analytics event
        window.dataLayer = window.dataLayer || []

        const obj = {
          'event': 'event-to-ga4',
          event_name,
          event_desc,
          event_type,
          event_loc
        }

        dataLayer.push(obj)
        console.log(obj)
      }

      function handleClickOnPacks() {
        document.querySelectorAll('.packs > div').forEach((pack, index) => {
          pack.addEventListener('click', () => {
            document.querySelector('.packs .active')?.classList.remove('active')
            pack.classList.add('active')

            if (document.querySelector('.popup button').disabled) {
              document.querySelector('.popup button').removeAttribute('disabled')
            }

            let price
            let trialAmount
            let value

            // Step 1: Retrieve the object from localStorage
            const storedData = localStorage.getItem("planCode")
            // Step 2: Parse the string back to an object
            const parsedData = JSON.parse(storedData)

            switch (index) {
              case 0:
                sendGAEvent(
                  'exp_popup_trial_price_05',
                  'Choose a price.  Option — $0,5',
                  'Button',
                  'Popup Try Able for 1 week'
                )

                price = 50
                trialAmount = 50
                value = "$0.50"

                break
              case 1:
                sendGAEvent(
                  'exp_popup_trial_price_3',
                  'Choose a price.  Option — $3,0',
                  'Button',
                  'Popup Try Able for 1 week'
                )

                price = 300
                trialAmount = 300
                value = "$3"
                break
              case 2:
                sendGAEvent(
                  'exp_popup_trial_price_1837',
                  'Choose a price.  Option — $18,37',
                  'Button',
                  'Popup Try Able for 1 week'
                )

                price = 1837
                trialAmount = 1837
                value = "$18.37"
                break

              default:
                break
            }

            parsedData.price = price
            parsedData.trialAmount = trialAmount
            parsedData.value = value

            packPrice = price
            packValue = value

            localStorage.setItem("planCode", JSON.stringify(parsedData))
          })
        })
      }

      function ShowPopup() {
        // Store references to the timers
        this.waitForTimer = null
        this.timer = null

        this.init = function () {
          if (
            sessionStorage.getItem('popupWasShown') !== 'true' &&
            !document.querySelector('.show-popup')
          ) {
            const popupOverlay = document.getElementById("myPopupOverlay")

            // Open popup after 5s
            setTimeout(() => {
              popupOverlay.classList.add('show-popup')
              document.body.style.overflow = "hidden" // Prevent scrolling of the background content

              // hide
              if (document.querySelector('header + .false')) {
                document.querySelector('header + .false').style.display = "none" // timer banner
              }
              if (document.querySelector('header + .false + div > *:last-child')) {
                document.querySelector('header + .false + div > *:last-child').style.display = "none" // Get My Program Now sticky
              }

              if (!popupWasVisible) {
                popupWasVisible = true
                sendGAEvent('exp_popup_trial_outside_click', 'Popup visibility', 'Element visibility', 'Popup Try Able for 1 week')
              }
            }, 5000)

            // Clear previous waitForTimer, if any
            clearInterval(this.waitForTimer)

            this.waitForTimer = setInterval(() => {
              if (
                typeof localStorage["paywall-timer-minutes"] !== 'undefined'
                || typeof localStorage["paywall-timer-seconds"] !== 'undefined'
              ) {
                // Clear previous timer, if any
                clearInterval(this.timer)

                this.timer = setInterval(() => {
                  if (
                    typeof localStorage["paywall-timer-minutes"] === 'undefined'
                    || typeof localStorage["paywall-timer-seconds"] === 'undefined'
                  ) {
                    clearInterval(this.timer)
                    document.querySelector('.show-popup')?.classList.remove('show-popup')
                    document.body.style.overflow = "auto" // Allow scrolling of the background content again
                  } else {
                    document.querySelector('.popup .timer span').innerHTML = `${localStorage["paywall-timer-minutes"].padStart(2, '0')}:${localStorage["paywall-timer-seconds"].padStart(2, '0')}`
                  }
                }, 1000)
                clearInterval(this.waitForTimer)
              }
            }, WAIT_INTERVAL_TIMEOUT)
          }
        }
      }

      function addPopupLogic() {
        const popupOverlay = document.getElementById("myPopupOverlay")

        // showPopup()

        // close popup on click
        document.querySelector(".popup button").addEventListener("click", () => {
          // popupOverlay.style.display = "none"
          // document.body.style.overflow = "auto" // Allow scrolling of the background content again

          sessionStorage.setItem('popupWasShown', 'true')

          if (sessionStorage.trialDiscountApplied !== 'true') {
            sessionStorage.removeItem("trialDiscountModalWindowShown")
          }

          popupOverlay.classList.remove('show-popup')
          document.body.style.overflow = "auto"

          window.dispatchEvent(new CustomEvent('onStoreUpdated', {
            detail: {
              value:
              {
                "key": "able-35-weekly-free-trial-USD-Weekly",
                "value": `${packValue}`,
                "price": packPrice,
                "currencyLabel": "$",
                "trialAmount": packPrice,
                "currency": "USD",
                "invoiceItemPriceId": "Set-Up-Fee-Able-v2-USD"
              },
              keyEvent: 'planCode'
            }
          }))

          sendGAEvent('exp_popup_trial_see_my_program', 'See My Program', 'Button', 'Popup Try Able for 1 week')
        })

        popupOverlay.addEventListener('click', (e) => {
          if (!e.target.closest('.popup')) {
            sendGAEvent('exp_popup_trial_visibility', 'Click outside the popup', 'Parent element', 'Popup Try Able for 1 week')
          }
        })

        handleClickOnPacks()
      }

      function hideArrow() {
        if (!document.querySelector('.hide_arrow')) {
          document.querySelector('header > div')?.classList.add('hide_arrow')
        }
      }

      // -------------------------------------
      // MAKE DOM CHANGES
      // -------------------------------------
      document.head.insertAdjacentHTML('beforeend', style)
      document.body.insertAdjacentHTML('beforeend', popup)

      const waitForPopup = setInterval(() => {
        if (
          document.getElementById("myPopupOverlay")
          && document.querySelector(".popup button")
          && document.querySelectorAll('.packs > div')[2]
          && document.querySelector('.popup .timer span')) {
          clearInterval(waitForPopup)

          if (window.location.pathname.includes('paywall')) {
            hideArrow()
            const showPopupInstance = new ShowPopup()
            showPopupInstance.init()
          }

          const globalObserver = new MutationObserver((mutations) => {
            if (window.location.pathname.includes('paywall')) {
              globalObserver.disconnect()

              // Log the mutations and their targets
              mutations.forEach((mutation) => {
                if (mutation.target.matches('#root')) {
                  hideArrow()

                  const showPopupInstance = new ShowPopup()
                  showPopupInstance.init()
                }
              })

              // Re-observe the 'root' element
              globalObserver.observe(rootElement, {
                childList: true,
                subtree: true
              })
            } else {
              if (sessionStorage.popupWasShown !== 'false') {
                sessionStorage.setItem('popupWasShown', 'false')
              }

              if (popupWasVisible) {
                popupWasVisible = false
              }

              if (document.querySelector('.hide_arrow')) {
                document.querySelector('.hide_arrow').classList.remove('hide_arrow')
              }
            }
          })
          // Initial observation of the 'root' element
          globalObserver.observe(rootElement, {
            childList: true,
            subtree: true
          })

          addPopupLogic()
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }
  }, WAIT_INTERVAL_TIMEOUT)

  const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
      clearInterval(recordClarity)
      clarity("set", `exp_popup_trial_${DEVICE}`, "variant_1")
    }
  }, WAIT_INTERVAL_TIMEOUT)
})()