;(() => {
  console.log(
    '%c EXP: Exit Popup (DEV: OS)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )
  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)
  const git = 'https://conversionratestore.github.io/projects/treblehealth'

  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval)
      clarity('set', 'exp_enh_exit_int', 'variant_1')
    }
  }, 1000)

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

  const devices = {
    mobile: 'mobile',
    desktop: 'desktop'
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

  const icons = {
    close: /* HTML */ `
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L5.29287 6.7071C4.90237 6.3166 4.90237 5.6834 5.29287 5.2929L10.2929 0.292897C10.6834 -0.0976325 11.3166 -0.0976325 11.7071 0.292897C12.0976 0.683398 12.0976 1.3166 11.7071 1.7071L7.41417 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071Z"
          fill="#2E168D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.292897 11.7071C0.683398 12.0976 1.3166 12.0976 1.7071 11.7071L6.7071 6.7071C7.0976 6.3166 7.0976 5.6834 6.7071 5.2929L1.7071 0.292897C1.3166 -0.0976325 0.683398 -0.0976325 0.292897 0.292897C-0.0976325 0.683398 -0.0976325 1.3166 0.292897 1.7071L4.5858 6L0.292897 10.2929C-0.0976325 10.6834 -0.0976325 11.3166 0.292897 11.7071Z"
          fill="#2E168D"
        />
      </svg>
    `
  }
  class Timer {
    constructor(callback, delay) {
      let timerId,
        start,
        remaining = delay

      this.pause = function () {
        clearTimeout(timerId)
        remaining -= new Date() - start
      }

      this.resume = function () {
        start = new Date()
        window.clearTimeout(timerId)
        if (remaining > 0) timerId = setTimeout(callback, remaining)
      }

      this.resume()
    }
  }

  const selectors = {
    calendlyIframe: 'iframe[src*="calendly"][title="Select a Date & Time - Calendly"]'
  }

  const IS_POPUP_SHOWN = 'isPopupShown'

  class ExitPopup {
    constructor(timer = 20000, scrollSpeed = -150) {
      this.popup
      this.time = timer
      this.scrollSpeed = scrollSpeed
      this.device = screen.width <= 768 ? devices.mobile : devices.desktop
    }

    init() {
      const currentUrl = window.location.href
      if (
        $el(selectors.calendlyIframe) ||
        currentUrl.includes('group-calendly-v1') ||
        currentUrl.includes('individual-calendly-v2')
      ) {
      this.render()
      this.popupTriggers()
      }
    }

    popupTriggers() {
      window.addEventListener('resize', () => {
        this.device = screen.width <= 768 ? devices.mobile : devices.desktop
      })

      if (this.device === devices.desktop) {
        document.addEventListener('mouseout', event => {
          if (!event.toElement && !event.relatedTarget && event.target.localName !== 'iframe') {
            this.showPopup()
          }
        })
      }

      if (this.device === devices.mobile) {
        document.addEventListener('scroll', () => {
          if (checkScrollSpeed() <= this.scrollSpeed) {
            this.showPopup()
          }
        })
      }

      let i = 0
      const timer = new Timer(() => {
        this.showPopup()
      }, this.time)

      let isTimerPaused = false

      if (this.device === devices.desktop) {
        document.addEventListener('mousemove', event => {
          if (event.target.closest(selectors.calendlyIframe)) {
            timer.pause()
            isTimerPaused = true
          } else if (isTimerPaused) {
            timer.resume()
            isTimerPaused = false
          }
        })
      }
      if (this.device === devices.mobile) {
        const options = {
          threshold: 0.5
        }

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            const isVisible = entry.isIntersecting
            if (isVisible) {
              timer.pause()
              isTimerPaused = true
            } else if (isTimerPaused) {
              timer.resume()
              isTimerPaused = false
            }
          })
        }, options)

        waitForElement(selectors.calendlyIframe).then(element => {
          observer.observe(element)
        })
      }
      $$el('a[href="#"]').forEach(link => {
        link.addEventListener('click', () => {
          sessionStorage.setItem(IS_POPUP_SHOWN, true)
        })
      })
    }
    showPopup() {
      const isPopupShown = sessionStorage.getItem(IS_POPUP_SHOWN)
      if (isPopupShown) return
      this.popup.showModal()
      sessionStorage.setItem(IS_POPUP_SHOWN, true)
    }
    render() {
      const html = /* HTML */ `
        <style>
          .crs-popup {
            width: 822px;
            height: 531px;
            flex-grow: 0;
            padding: 0;
            border-radius: 10px;
            background-color: #fff;
            overflow: hidden;
            border: none;
          }
          .crs-popup::backdrop {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .crs-popup__wrap * {
            font-family: 'Plus Jakarta Sans', sans-serif !important;
          }
          .crs-popup__wrap {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100%;
          }
          .crs-popup__close {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 !important;
            top: 16px;
            right: 16px;
            width: 32px;
            height: 32px;
            border-radius: 50% !important;
            color: #2e168d !important;
            font-size: 14px !important;
            cursor: pointer;
            border: none !important;
            background-color: transparent !important;
            background: #efecfb !important ;
          }
          .crs-popup__close:is(:focus, :focus-visible) {
            outline: none;
          }

          .crs-popup__content {
            width: 60%;
            padding: 40px;
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            gap: 12px;
            border: solid 1px #eeebfb;
            border: solid 3px #eeebfb;
            border-radius: 10px 0 0 10px;
            border-right: none;
          }
          .crs-popup__bg {
            width: 40%;
            height: 532px;
            background: url('${git}/img/popup_bg.png') no-repeat center center;
          }

          .crs-popup__title {
            font-size: 24px !important;
            margin: 0;
          }
          .crs-popup p {
            font-size: 14px;
          }
          .crs-popup__image img {
            width: 100%;
            height: 150px;
          }
          .crs-popup__highlight {
            padding: 10px 16px;
            border-radius: 8px;
            background-color: #f0edfc;
            color: #2e168d;

            & span {
              font-weight: 700;
              color: #4622da;
            }
          }
          .crs-popup__actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          .crs-popup__actions * {
            font-size: 16px !important;
            width: 100%;
          }
          .crs-popup__actions button:first-child {
            font-weight: bold;
          }
          .crs-popup__actions button:last-child {
            text-decoration: underline;
            text-underline-offset: 5px;
          }
          button.crs-popup__grab {
            box-sizing: border-box;

            border-radius: 5px;
            padding: 12px !important;

            border: 2px solid #4622da!important;
            background-color: #4622da;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            color: #fff;
            cursor: pointer;
            &:hover {
              background-color: #fff;
              border: 2px solid #4622da!important;
              color: #4622da !important;
              
            }
          }
          button.crs-popup__exit {
            padding: 0 !important;
            background-color: transparent !important;
            border: none !important;
            font-weight: 500 !important;
            color: #2e168d !important;
          }
          @media (max-width: 768px) {
            .crs-popup {
              height: auto;
              overflow: auto;
              width: 375px;
              max-height: fit-content;
            }
            .crs-popup__bg {
              display: none;
            }
            .crs-popup__title {
              padding-right: 31px;
            }

            .crs-popup__content {
              width: 100%;
              padding: 19px 16px;
              border: none;
              border-radius: 0;
              gap: 11px;
            }
            .crs-popup__highlight {
              padding: 10px;
            }
          }
        </style>
        <dialog class="crs-popup">
          <div class="crs-popup__wrap">
            <button class="crs-popup__close" data-popup="exit">${icons.close}</button>
            <div class="crs-popup__content">
              <h2 class="crs-popup__title">
                Don't Ignore the Ringing. <br />
                Discover Relief Today!
              </h2>
              <p>
                The National Health and Nutrition Examination Surveys reveal that nearly
                <b>1 in 10 U.S. adults is affected by tinnitus</b>.
              </p>
              <div class="crs-popup__image">
                <img src="${git}/img/tr_medication.png" alt="treblehealth medication" />
              </div>
              <p class="crs-popup__highlight">
                While medication typically does not help, Treble Health's Tinnitus Relief Bundle yields
                <span>improvements in 6 months for 82% of patients</span>
              </p>
              <div class="crs-popup__actions">
                <button href="#" class="crs-popup__grab" data-popup="grab">
                  Grab My Free Seat Now
                </button>
                <button class="crs-popup__exit" data-popup="exit">No thanks, I don't want to treat my tinnitus</button>
              </div>
            </div>
            <div class="crs-popup__bg"></div>
          </div>
        </dialog>
      `
      document.body.insertAdjacentHTML('beforeend', html)

      this.popup = $el('.crs-popup')
      const closeBtns = $$el('[data-popup="exit"]')
      const grabBtn = $el('[data-popup="grab"]')

      grabBtn.addEventListener('click', event => {
        const link = $el('a[href="#"]')
        pushDataLayer(
          'exp_enh_exit_int_but_popignor_free',
          'Grab My Free Seat Now',
          'Button',
          "Pop up Don't Ignore the Ringing. Discover Relief Today!"
        )
        link.click()
        this.popup.close()
      })

      closeBtns.forEach(btn => {
        btn.addEventListener('click', event => {
          if (event.target.closest('.crs-popup__close')) {
            pushDataLayer(
              'exp_enh_exit_int_but_popignor_clos',
              'Close',
              'Button',
              "Pop up Don't Ignore the Ringing. Discover Relief Today!"
            )
          }
          if (event.target.closest('.crs-popup__exit')) {
            pushDataLayer(
              'exp_enh_exit_int_but_popignor_no',
              "No, thanks, I'll keep the ringing",
              'Button',
              "Pop up Don't Ignore the Ringing. Discover Relief Today!"
            )
          }
          this.popup.close()
        })
      })

      document.body.addEventListener('click', event => {
        if (event.target === this.popup) {
          this.popup.close()
          pushDataLayer(
            'exp_enh_exit_int_clbeh_popignor_clos',
            'Close',
            'Сlick behind the pop-up area',
            "Pop up Don't Ignore the Ringing. Discover Relief Today!"
          )
        }
      })
      blockVisibility(
        '.crs-popup',
        'exp_enh_exit_int_vis_popignor_bloc',
        'Block view',
        "Pop up Don't Ignore the Ringing. Discover Relief Today!"
      )
    }
  }

  new ExitPopup().init()
})()
