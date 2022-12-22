let stickyBanner = setInterval(() => {
  if (document.querySelector("#menu-list")) {
    clearInterval(stickyBanner)

    console.log(">>>>>>>>>>>>>>>Variant B")

    let eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sticky AutoFilled ZIP Variant B ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Sticky AutoFilled ZIP Variant B ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let style = /*html */ `
    <style>
        .css-15hxzhe{
          z-index: 1;
        }
        .sticky_banner{
            background: #FFFFFF;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);
            border-radius: 5px;
            padding: 16px;
            top: 12px;
            left: 0;
            width: 300px;
            display: none;
            z-index: 55;
            margin: 0;
        }
        .sticky_banner.is_fixed{            
            display: block;
            margin: -15px 0 25px;
            position: relative;
        }
        .btn_close_sticky{
            position: absolute;
            right: 11px;
            top: 11px;
            cursor: pointer;
        }
        .sticky_banner p{
            font-family: "Brandon Grotesque", sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 22px;
            color: #555555;
            margin-bottom: 16px;
            max-width: 208px;
        }
        .sticky_banner button{
            margin: 8px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #526EFF;
            border-radius: 6px;
            width: 100%;
            height: 48px;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        .sticky_banner label{
            display: flex;
            background: #FFFFFF;
            border: 1px solid #D3D4D6;
            border-radius: 4px;
            align-items: center;
            padding: 7px 12px;
        }
        .sticky_banner label svg{
            flex: 1 0 16px;
            margin-right: 12px;
        }
        .sticky_banner input{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #000000;
            border-left: 1px solid #D3D4D6;
            border-bottom: unset;
            border-top: unset;
            border-radius: 0;
            border-right: unset;
            padding: 0 0 0 12px;
            margin: 0;
        }
        .sticky_banner input:focus,
        .sticky_banner input:hover{
            border-color: #D3D4D6;
        }
        .sticky_banner input::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #B2B2B2;
        }
        .zip_error{
            display: none;
            font-family: "Brandon Grotesque", sans-serif;
            font-weight: 600;
            font-size: 12px;
            line-height: 16px;
            color: #DB3732;
            margin: 0;
        }
        .sticky_banner.is_hidden{
            display: none;
        }
        .zip_error.is_error{
            display: block;
        }
        .sticky_banner label.is_error{
            border-color: #DB3732;
        }

        @media (max-width: 1110px){
            .sticky_banner.is_fixed{            
                position: absolute;
                display: block;
                margin: 0;
            }
            .sticky_banner.is_hidden{
              display: none;
            }
            .sticky_banner{
                width: 100%;
                top: -50px;
                border-radius: unset;
                box-shadow: 0px 2px 0px #EFEFF1;
            }
            .sticky_banner p{
                max-width: 311px;
                font-size: 24px;
                line-height: 28px;
                margin-bottom: 12px;
            }
            .sticky_banner button{
                margin-top: 10px;
            }
            .sticky_banner label{
                padding: 8px 12px;
            }
        }
    </style>
    `

    let stickyBlock = /*html */ `
    <div></div>
    <section class="sticky_banner">
        <svg class="btn_close_sticky" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_82_1006)">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#555555"/>
            </g>
            <defs>
            <clipPath id="clip0_82_1006">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <p>Compare rates and save on auto insurance today!</p>
        <label>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_82_998)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.94141 4C7.54584 4 7.15916 4.1173 6.83027 4.33706C6.50137 4.55682 6.24502 4.86918 6.09365 5.23463C5.94227 5.60009 5.90267 6.00222 5.97984 6.39018C6.05701 6.77814 6.24749 7.13451 6.52719 7.41421C6.8069 7.69392 7.16326 7.8844 7.55123 7.96157C7.93919 8.03874 8.34132 7.99913 8.70677 7.84776C9.07223 7.69638 9.38458 7.44004 9.60435 7.11114C9.82411 6.78224 9.94141 6.39556 9.94141 6C9.94141 5.46957 9.73069 4.96086 9.35562 4.58579C8.98055 4.21071 8.47184 4 7.94141 4ZM7.94141 7C7.73943 7.00221 7.54152 6.9432 7.37372 6.83075C7.20593 6.71829 7.07613 6.55766 7.00141 6.37C6.92244 6.18571 6.9007 5.98194 6.939 5.78514C6.97729 5.58834 7.07386 5.4076 7.21617 5.26637C7.35848 5.12514 7.53995 5.02994 7.73704 4.99314C7.93413 4.95634 8.13772 4.97964 8.32141 5.06C8.54621 5.14096 8.73459 5.29973 8.85245 5.50758C8.97031 5.71542 9.00986 5.95859 8.96393 6.19307C8.918 6.42755 8.78963 6.63783 8.60207 6.78585C8.4145 6.93387 8.18014 7.00984 7.94141 7Z" fill="#555555"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3406 5.42002C13.252 4.6015 12.9788 3.81378 12.5415 3.11619C12.1043 2.41861 11.5144 1.82938 10.8163 1.39289C10.1182 0.95641 9.3302 0.684062 8.51159 0.596374C7.69298 0.508687 6.86514 0.607947 6.09047 0.886675C5.31579 1.1654 4.61448 1.61633 4.03939 2.20547C3.4643 2.79461 3.03043 3.5066 2.77048 4.28777C2.51053 5.06895 2.43127 5.89894 2.53869 6.7152C2.64611 7.53146 2.93739 8.31269 3.3906 9.00002L7.1706 14.8C7.25543 14.9279 7.37059 15.0328 7.50582 15.1054C7.64105 15.178 7.79213 15.2159 7.9456 15.2159C8.09907 15.2159 8.25015 15.178 8.38538 15.1054C8.5206 15.0328 8.63576 14.9279 8.7206 14.8L12.4906 9.00002C13.0744 8.10917 13.3807 7.06508 13.3706 6.00002C13.3808 5.80682 13.3808 5.61322 13.3706 5.42002H13.3406ZM11.6506 8.42002L7.9406 14.11L4.2206 8.40002C3.78624 7.73136 3.54041 6.95787 3.50903 6.16114C3.47765 5.36441 3.66188 4.57397 4.0423 3.87323C4.42272 3.17248 4.98521 2.58739 5.67045 2.17969C6.35568 1.77199 7.13825 1.55679 7.9356 1.55679C8.73295 1.55679 9.51551 1.77199 10.2007 2.17969C10.886 2.58739 11.4485 3.17248 11.8289 3.87323C12.2093 4.57397 12.3935 5.36441 12.3622 6.16114C12.3308 6.95787 12.085 7.73136 11.6506 8.40002V8.42002Z" fill="#555555"/>
                </g>
                <defs>
                <clipPath id="clip0_82_998">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <input type="number" autocomplete="off" pattern="[0-9]*" name="zipCode"  placeholder="Your zip code" class="">
        </label>
        <span class="zip_error">Write your zip code</span>
        <button>Compare quotes</button>
    </section>
    `

    document.body.insertAdjacentHTML("afterbegin", style)

    if (!sessionStorage.getItem("sticky_banner")) {
      if (document.querySelector("#sub-navigation")) {
        let s = setInterval(() => {
          if (document.querySelector("#social-section")) {
            clearInterval(s)
            setTimeout(() => {
              if (window.innerWidth <= 1110) {
                document.querySelector("#sub-navigation").insertAdjacentHTML("beforeend", stickyBlock)
              } else {
                document.querySelector("#sub-navigation").insertAdjacentHTML("afterbegin", stickyBlock)
              }

              if (document.querySelector(".sticky_banner")) {
                const options = {
                  root: null,
                  threshold: 1,
                }

                let observerNewHeader = new IntersectionObserver((entries) => {
                  if (!entries[0].isIntersecting) return
                  pushDataLayer(`Sticky banner appearance`)
                  observerNewHeader.disconnect()
                })

                observerNewHeader.observe(document.querySelector(".sticky_banner"), options)
              }
            }, 1000)
          }
        }, 10)
      }
    }

    window.addEventListener("scroll", function () {
      onLoadStickyBanner()
    })

    onLoadStickyBanner()

    function onLoadStickyBanner() {
      let positionVar = 0
      if (window.innerWidth <= 1110) {
        positionVar = 60
      }

      if (document.querySelector(".sticky_banner")) {
        if (
          (document.querySelector(".css-2s6hek")?.getBoundingClientRect().bottom <= positionVar &&
            window.location.pathname !== "/insurance/auto/car-insurance-estimate-calculator/") ||
          (document.querySelector(".css-1ih2ha8")?.getBoundingClientRect().bottom <= positionVar &&
            window.location.pathname !== "/insurance/auto/car-insurance-estimate-calculator/") ||
          (window.location.pathname === "/insurance/auto/car-insurance-estimate-calculator/" &&
            document.querySelector(".css-1ngo9xx")?.getBoundingClientRect().bottom <= positionVar)
        ) {
          if (!document.querySelector(".sticky_banner").classList.contains("is_fixed")) {
            document.querySelector(".sticky_banner").classList.add("is_fixed")
            if (window.innerWidth > 1110) {
              document.querySelector("#social-section").style.display = "none"
              document.querySelector(".social").style.display = "none"
            }
            if (document.querySelector(".sticky_banner")) {
              let stickyBox = document.querySelector(".sticky_banner"),
                label = stickyBox.querySelector("label"),
                input = stickyBox.querySelector("input"),
                closeBtn = stickyBox.querySelector(".btn_close_sticky"),
                btnSend = stickyBox.querySelector("button"),
                error = stickyBox.querySelector(".zip_error")

              if (closeBtn) {
                closeBtn.addEventListener("click", (e) => {
                  if (!e.target.getAttribute("data-test")) {
                    pushDataLayer("Sticky banner closed")
                    sessionStorage.setItem("sticky_banner", "true")
                    stickyBox.classList.add("is_hidden")
                    if (window.innerWidth > 1110) {
                      document.querySelector("#social-section").style.display = "block"
                      document.querySelector(".social").style.display = "block"
                    }
                  }
                  e.target.setAttribute("data-test", "1")
                })
              }
              if (btnSend) {
                btnSend.addEventListener("click", (e) => {
                  e.preventDefault()
                  if (!e.target.getAttribute("data-test")) {
                    if (!e.target.classList.contains("on_click")) {
                      pushDataLayer("Sticky Compare Quoutes clicked")
                    }

                    if (window.location.pathname === "/insurance/auto/how-much-car-insurance-do-you-need/") {
                      document.querySelector("form.css-1lpx304 button[type='submit']").click()
                    } else if (
                      window.location.pathname === "/insurance/auto/temporary-and-month-to-month-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/non-owner-car-insurance-north-carolina/" ||
                      window.location.pathname === "/insurance/auto/high-risk-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-texas/" ||
                      window.location.pathname === "/insurance/auto/cheapest-full-coverage-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/best-home-auto-bundle/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-california/" ||
                      window.location.pathname === "/insurance/auto/cheap-car-insurance-no-deposit/" ||
                      window.location.pathname === "/insurance/auto/cheap-sr22-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-after-tickets-accidents/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-new-drivers/" ||
                      window.location.pathname === "/insurance/auto/cheapest-liability-only-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-quotes-companies/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-after-a-dui/" ||
                      window.location.pathname === "/insurance/auto/best-cheapest-car-insurance-for-students/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-under-25-year-old/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-florida/" ||
                      window.location.pathname === "/insurance/auto/compare-quotes/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-for-18-year-olds/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-pennsylvania/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-georgia/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-houston-tx/" ||
                      window.location.pathname === "/insurance/auto/chevrolet-corvette-insurance/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-for-19-year-olds/" ||
                      window.location.pathname === "/insurance/auto/how-to-get-car-insurance-with-bad-credit/" ||
                      window.location.pathname === "/insurance/auto/first-time-drivers-buyers-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/best-car-insurance-guide/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-for-21-year-olds/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-ohio/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-miami-fl/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-atlanta-ga/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-tampa-fl/" ||
                      window.location.pathname === "/insurance/homeowners/best-condo-insurance/" ||
                      window.location.pathname === "/insurance/homeowners/best-cheap-homeowners-insurance-miami-fl/" ||
                      window.location.pathname === "/insurance/homeowners/what-is-dwelling-coverage/" ||
                      window.location.pathname === "/insurance/homeowners/high-risk/" ||
                      window.location.pathname === "/insurance/homeowners/best-cheap-homeowners-insurance-tampa-fl/" ||
                      window.location.pathname === "/insurance/homeowners/cost-cheap-homeowners-insurance-oklahoma/" ||
                      window.location.pathname === "/insurance/homeowners/cheap-homeowners-insurance/" ||
                      window.location.pathname === "/insurance/homeowners/best-homeowners-insurance/" ||
                      window.location.pathname === "/insurance/homeowners/best-cheap-homeowners-insurance-orlando-fl/" ||
                      window.location.pathname === "/insurance/homeowners/best-cheap-homeowners-insurance-pensacola/" ||
                      window.location.pathname === "/insurance/homeowners/getting-home-insurance-with-bad-credit/" ||
                      window.location.pathname === "/insurance/homeowners/best-cheap-homeowners-insurance-fort-myers/" ||
                      window.location.pathname === "/insurance/homeowners/best-homeowners-insurance-california/" ||
                      window.location.pathname === "/insurance/homeowners/best-homeowners-insurance-mississippi/" ||
                      window.location.pathname === "/insurance/homeowners/best-homeowners-insurance-new-jersey/" ||
                      window.location.pathname === "/insurance/homeowners/cost-cheap-homeowners-insurance-pennsylvania/" ||
                      window.location.pathname === "/insurance/homeowners/reviews/allstate/" ||
                      window.location.pathname === "/insurance/renters/cheap-renters-insurance-coverage/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-alabama/" ||
                      window.location.pathname === "/insurance/renters/pet-liability-renters-coverage/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-dallas-tx/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-seattle-wa/" ||
                      window.location.pathname === "/insurance/renters/mobile-home-renters-insurance/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-austin-tx/" ||
                      window.location.pathname === "/insurance/renters/average-cost-of-renters-insurance/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-michigan/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-colorado/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-san-diego-ca/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-philadelphia-pa/" ||
                      window.location.pathname === "/insurance/renters/best-cheap-renters-insurance-in-georgia/" ||
                      window.location.pathname === "/insurance/auto/best-car-insurance-florida/" ||
                      window.location.pathname === "/insurance/auto/non-owner-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/non-owner-sr22-car-insurance/" ||
                      window.location.pathname === "/insurance/auto/honda-cr-v-insurance/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-los-angeles-ca/" ||
                      window.location.pathname === "/insurance/auto/how-to-get-car-insurance-for-low-income/" ||
                      window.location.pathname === "/insurance/auto/how-to-switch-car-insurance-companies/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-for-17-year-olds/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-new-jersey/" ||
                      window.location.pathname === "/insurance/auto/state-laws-minimum-requirements-florida/" ||
                      window.location.pathname === "/insurance/auto/best-cheap-car-insurance-for-16-year-olds/" ||
                      window.location.pathname === "/insurance/auto/cheapest-car-insurance-new-york/"
                    ) {
                      document.querySelector("form.css-8atqhb button[type='submit']").click()
                    } else if (window.location.pathname === "/insurance/auto/resources/protecting-against-fraud/") {
                      document.querySelector("form.css-6d9zwi button[type='submit']").click()
                    } else if (
                      window.location.pathname === "/insurance/auto/anonymous-car-insurance-quote-no-personal-information/" ||
                      window.location.pathname === "/insurance/auto/car-insurance-estimate-calculator/"
                    ) {
                      document.querySelector("form.css-nbmzhw button[type='submit']").click()
                    } else if (
                      window.location.pathname === "/insurance/homeowners/reviews/travelers/" ||
                      window.location.pathname === "/insurance/homeowners/reviews/progressive/"
                    ) {
                      document.querySelector("form.css-1azpkau button[type='submit']").click()
                    }

                    if (document.querySelector(".chakra-form__error-message.css-vamxt0") !== null) {
                      error.classList.add("is_error")
                      label.classList.add("is_error")
                      pushDataLayer("Sticky filed error shown")
                    } else {
                      error.classList.remove("is_error")
                      label.classList.remove("is_error")
                    }
                  }
                  e.target.setAttribute("data-test", "1")

                  setTimeout(() => {
                    if (e.target.getAttribute("data-test")) {
                      e.target.removeAttribute("data-test")
                    }
                  }, 500)
                })
              }

              if (input) {
                input.addEventListener("focus", (e) => {
                  if (!e.target.getAttribute("data-test")) {
                    pushDataLayer("Sticky field selected (focus)")
                  }
                  e.target.setAttribute("data-test", "1")

                  setTimeout(() => {
                    if (e.target.getAttribute("data-test")) {
                      e.target.removeAttribute("data-test")
                    }
                  }, 300)
                })

                input.addEventListener("input", (e) => {
                  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set

                  nativeInputValueSetter.call(document.querySelector('[name="zip"]'), e.target.value)

                  if (document.querySelector(".chakra-form__error-message.css-vamxt0")) {
                    error.classList.remove("is_error")
                    label.classList.remove("is_error")
                  }
                  var ev2 = new Event("input", { bubbles: true })
                  document.querySelector('[name="zip"]').dispatchEvent(ev2)
                })

                document.querySelector(".sticky_banner input").addEventListener("keydown", (e) => {
                  if (e.keyCode === 13 || e.which === 13) {
                    e.preventDefault()
                    if (!e.target.getAttribute("data-test")) {
                      pushDataLayer("Enter on input")
                      btnSend.classList.add("on_click")
                      btnSend.click()

                      setTimeout(() => {
                        if (btnSend.classList.contains("on_click")) {
                          btnSend.classList.remove("on_click")
                        }
                      }, 7000)
                    }
                    e.target.setAttribute("data-test", "1")

                    setTimeout(() => {
                      if (e.target.getAttribute("data-test")) {
                        e.target.removeAttribute("data-test")
                      }
                    }, 500)
                  }
                })
              }

              if (document.querySelector('[name="zip"]')) {
                document.querySelector('[name="zip"]').addEventListener("input", (e) => {
                  input.value = e.target.value

                  if (document.querySelector(".chakra-form__error-message.css-vamxt0")) {
                    error.classList.remove("is_error")
                    label.classList.remove("is_error")
                  }
                })
              }
            }
          }
        } else {
          if (window.innerWidth > 1110) {
            document.querySelector("#social-section").style.display = "block"
            document.querySelector(".social").style.display = "block"
          }
          document.querySelector(".sticky_banner").classList.remove("is_fixed")
        }
      }
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)

        clarity("set", `sticky_autofilled_zip_variant_b${eventVar}`, "variant_1")
      }
    }, 200)
  }
}, 100)
