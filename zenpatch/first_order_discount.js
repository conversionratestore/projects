let startFunkPopup = setInterval(() => {
  if (document.querySelector('#zenpatch-mood-calming-stickers-the-natural-patch-co')) {
    clearInterval(startFunkPopup)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Exp: Popup first order`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: - Exp: Popup first order`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let popupTimerId
    let active = false
    getNewUser("_ga")

    function getNewUser(name) {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      let valueCookie
      let timeNewUser
      if (parts.length === 2 && !localStorage.getItem("newUser")) {
        valueCookie = parts.pop().split(";").shift()
        timeNewUser = +(valueCookie.split(".").pop() + "000")
        console.log(`timeNewUser`, new Date(timeNewUser))
        if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
          console.log(`New User`)
          active = true
          localStorage.setItem("newUser", "true")
          popupTimerId = setTimeout(() => {
            openPopup()
            if (document.querySelector(".overlay_popup .content_popup")) {
              countTimer()
            }
          }, 10000)
        }
      }
    }

    let scriptCustomTimer = document.createElement("script")
    scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js"
    scriptCustomTimer.async = false
    document.head.appendChild(scriptCustomTimer)

    let scriptCustomTimerStyle = document.createElement("link")
    scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css"
    scriptCustomTimerStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomTimerStyle)

    let popupStyle = /*html */ `
        <style>
            #zenpatch-mood-calming-stickers-the-natural-patch-co .ju_Con,
            #zenpatch-mood-calming-stickers-the-natural-patch-co #ju_overlay{
                display: none !important;
            }
        .overlay_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(255 255 255 / 75%);
            display: flex;
            overflow-y: auto;
            z-index: 1000000000;
            transition: all 0.5s ease;
        }
        .overlay_popup.is_hidden{
            opacity: 0;
            pointer-events: none;
        }
        .overlay_popup .container_popup {
            display: block;
            position: relative;
            max-width: 335px;
            width: 100%;
            margin: auto;
            transition: all 0.5s ease 0s;
        }
        .overlay_popup .container_popup > .btn_close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 24px;
            height: 24px;
            outline: none;
            cursor: pointer;
            background: rgba(55, 63, 71, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 1111;
        }
        .content_popup{
            background: #FFFFFF;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
        }
        .header_popup{
            padding: 10px 24px 18px;
            background: #89A571;
            position: relative;
            border-radius: 10px 10px 0 0;
        }
        .header_popup::after{
            position: absolute;
                content: '';
                top: 3px;
                right: 11px;
                width: 103px;
                height: 100px;
                background: url(https://conversionratestore.github.io/projects/zenpatch/img/zen_putch.png) no-repeat center center;
                background-size: contain;
        }
        .header_popup::before{
            position: absolute;
                content: '';
                bottom: -10px;
                right: 0;
                width: 100%;
                height: 28px;
                z-index: 1;
                background: url(https://conversionratestore.github.io/projects/zenpatch/img/bgr.svg) no-repeat center center;
                background-size: contain;
        }
        .header_popup p{
            font-family: 'Din Condensed',Roboto,sans-serif !important;
            font-weight: 400;
            font-size: 42px !important;
            line-height: 50px !important;
            color: #FFFFFF;
            margin: 0;
            position: relative;
            z-index: 1110;
            width: max-content;
        }
        .header_popup p:nth-child(2){
            font-size: 36px !important;
            line-height: 43px !important;
        }
        .header_popup p:nth-child(2)::after{
            position: absolute;
            content: '';
            top: -10px;
            right: -35px;
            width: 21px;
            height: 21px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/text_cross.svg) no-repeat center center;
            background-size: contain;
        }
        .content_popup h2{
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #010101 !important;
            margin: 0 !important;
        }
        .email_opt_in{
            padding: 5px 20px 30px;
            text-align: center;
        }
        .email_opt_in.is_hidden{
            display: none;
        }
        .email_opt_in p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.5px;
            color: #515151;
            margin: 8px 0 16px;
        }
        .email_opt_in label{
            margin: 0 0 16px !important;
            position: relative;
        }
        .email_opt_in label::before{
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
            width: 16px;
            height: 12px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/email.svg) no-repeat center center;
            background-size: contain;
        }
        .email_opt_in label input{
            height: 50px !important;
            width: 100% !important;
            border: 1px solid #D3D3D3 !important;
            border-radius: 31px !important;
            background: unset !important;
            box-shadow: unset !important;
            padding: 0 24px 0 50px !important;
        }
        .no_thanks_btn{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            text-decoration-line: underline;
            color: #2C7D73;
            margin-top: 20px;
        }
        .success_block{
            padding: 5px 20px 20px;
            text-align: center;
        }
        .success_block.is_hidden{
            display: none;
        }
        .content_popup .success_block h2{
            margin-bottom: 6px !important;
        }
        .success_block p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.5px;
            color: #515151;
            margin: 0 -5px 16px;
        }
        .success_block p span{
            font-weight: 800;
            color: #2C7D73;
        }
        .voucher_block{
            border: 2px dashed #D9D9D9;
            border-radius: 31px;
            margin-bottom: 16px;
            padding: 17px;
        }
        .voucher_block span{
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.5px;
            color: #2C7D73;
        }
        .content_popup .green_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 60px;
            background: #2C7D73;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
            border-radius: 52px;
            font-family: 'Din Condensed',Roboto,sans-serif !important;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        /*countdown */
        .countdown-wrapper{
            padding: 0px 0 50px;
        }
        .countdown.flip-clock-wrapper{
            margin: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .countdown.flip-clock-wrapper ul{
            width: 32px;
            height: 48px;
            font-size: 2rem;
            font-weight: 400;
            line-height: 1.5;
            border-radius: 0.0625em 0.0625em 0 0;
            background: #2e2e2e;
            margin: 0;
        }
        .countdown.flip-clock-wrapper ul li a div div.inn,
        .countdown.flip-clock-wrapper ul li a div.down,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-active .down .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-active .up .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-before .down .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-before .up .shadow{
            background-color: #2e2e2e;
            border-radius: unset;
            background: #2e2e2e;
        }
        .countdown .flip-clock-divider{
            height: 48px !important;
        }
        .countdown  .flip-clock-dot{
            opacity: 0;
        }
        .countdown.flip-clock-wrapper .flip:first-of-type{
            display: none;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(3),
        .countdown.flip-clock-wrapper .flip:nth-of-type(5),
        .countdown.flip-clock-wrapper .flip:nth-of-type(7){
            border-radius: 0.0625em 0 0 0.0625em;
            width: 27px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(4),
        .countdown.flip-clock-wrapper .flip:nth-of-type(6),
        .countdown.flip-clock-wrapper .flip:nth-of-type(8){
            border-radius: 0 0.0625em 0.0625em 0;
            width: 27px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(3) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(5) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(7) a div div.inn{
            left: 3px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(4) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(6) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(8) a div div.inn{
            left: -3px !important;
        }
        .countdown.flip-clock-wrapper ul li{
            line-height: 1.5;
        }
        .countdown.flip-clock-wrapper ul li a div,
        .countdown.flip-clock-wrapper ul li a div div.inn{
            font-size: 2rem;
            color: #ededed;
        }
        .countdown .flip-clock-divider .flip-clock-label{
            top: unset !important;
            bottom: -27px !important;
            right: -28px !important;
            color: rgb(156, 156, 156) !important;
        }
        .countdown .flip-clock-divider.seconds .flip-clock-label{
            right: -54px !important;
        }
        .countdown .flip-clock-divider.minutes .flip-clock-label {
            right: -50px !important;
        }        
        .countdown .flip-clock-divider.hours .flip-clock-label {
            right: -47px !important;
        }
        /*btn_trigger_popup */
        .btn_trigger_popup{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background: #F9BF07;
            border-radius: 27px;
            width: 100%;
            max-width: 331px;
            margin: 16px auto;
            padding: 11px 14px 11px 56px;
            position: relative;
        }
        .btn_trigger_popup::before{
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: 16px;
            width: 28px;
            height: 19px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/discount.svg) no-repeat center center;
            background-size: contain;
        }
        body .btn_trigger_popup > p{
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 12px !important;
            line-height: 18px !important;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #010101;
            margin: 0;
        }
        .btn_trigger_popup svg{
            margin: 0 0 0 auto;
        }
        .btn_trigger_popup.applied_discount{
            background: #E5E6E9;
            border: 1px solid #E5E6E9;
        }
        .btn_trigger_popup.applied_discount svg{
            display: none;
        }
        .btn_trigger_popup.applied_discount.is_hidden,
        .btn_trigger_popup.not_applied_discount.is_hidden{
            display: none;
        }
        input.error{
        border: 2px solid #ef4836 !important;
        }
        .input_validation_email {
            position: absolute;
            width: 100%;
            padding: 2px 0 0 8px;
            color: #ef4836;
            text-align: center;
            font-size: 10px;
            line-height: 1.25;
            display: none;
        }
        @media (max-width: 320px) {
            .header_popup::before{
                width: 102%;
            }
            .header_popup p{
                font-size: 39px !important;
            }
            .header_popup p:nth-child(2) {
                font-size: 33px !important;
            }
            .success_block p{
                font-size: 15px !important;
            }
            body .btn_trigger_popup > p{
                font-size: 11px !important;
            }
        }

        </style>
        `

    let popUp = /*html */ `
                <div class="overlay_popup is_hidden">
                    <div class="container_popup">
                        <div class="btn_close" data-close="Close extra 10 percent popup">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.19995 2.27234L11.8 11.8723M2.19995 11.8723L11.8 2.27234L2.19995 11.8723Z" stroke="white" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
        `

    let contentPopup = /*html */ `
          <div class="content_popup">
                <div class="header_popup">
                    <p>EXTRA 10% OFF</p>
                    <p>FREE SHIPPING</p>
                </div>
                <div class="email_opt_in">
                    <h2>UNLOCK BONUS OFFER</h2>
                    <p>Your bonus offer will be available for:</p>
                    <div class="countdown-wrapper">
                        <div id="countdown" class="countdown"></div>
                    </div>
                    <form action="#">
                        <label>
                            <input type="email" name="myEmail" id="myEmail" placeholder="Enter your email to claim">
                            <div class="input_validation_email">Your email doesn't seem to be valid</div>
                        </label>
                        <button type="submit" class="green_btn">Claim Bonus Offer</button>
                    </form>
                    <button class="no_thanks_btn" data-close="No thanks">No thanks, I don't want extra savings</button>
                </div>
                <div class="success_block is_hidden">
                    <h2>Congratulations!</h2>
                    <p>You've unlocked an additional <span>10% OFF + FREE SHIPPING</span> for your first order</p>
                    <div class="voucher_block">
                        <span>NATURAL10</span>
                    </div>
                    <p>Discount code will be automatically applied at checkout</p>
                    <button class="green_btn" data-close="Continue shopping button">Continue shopping</button>
                </div>
            </div>
        `

    let triggerPopup = /*html */ `
        <div class="btn_trigger_popup not_applied_discount" data-popup>
            <p>Get aDDITIONAL 10% OFF </p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64657 9L5 4.13389L6.2707 3L12 9L6.2707 15L5 13.8661L9.64657 9Z" fill="black"/>
            </svg>
        </div>
        <div class="btn_trigger_popup applied_discount is_hidden">
            <p>aDDITIONAL 10% OFF applied next</p>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64657 9L5 4.13389L6.2707 3L12 9L6.2707 15L5 13.8661L9.64657 9Z" fill="black"/>
            </svg>
        </div>
        `

    document.head.insertAdjacentHTML("beforeend", popupStyle)

    if (!localStorage.getItem("restartFunc")) {
      document.querySelector("#addToCart")?.insertAdjacentHTML("beforebegin", triggerPopup)
      document.body.insertAdjacentHTML("afterbegin", popUp)
      let countdown

      if (localStorage.getItem("appliedDiscount") && !localStorage.getItem("restartFunc")) {
        changeVisabilityApplieddiscount()
      }

      const popupTrigger = document.querySelectorAll("[data-popup]"),
        popup = document.querySelector(".overlay_popup")

      function closePopup() {
        popup.classList.add("is_hidden")
        document.body.style.overflow = ""
      }

      function openPopup() {
        if (!document.querySelector(".overlay_popup .container_popup .content_popup")) {
          document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup)
        }
        popup.classList.remove("is_hidden")
        document.body.style.overflow = "hidden"

        clearInterval(popupTimerId)
        active = false

        if (!document.querySelector(".countdown.flip-clock-wrapper") && active === false) {
          console.log(`active`, active)
          countTimer()
        }

        if (document.querySelector(".overlay_popup .content_popup")) {
          document.querySelectorAll("[data-close]").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                let step
                if ($(".email_opt_in").is(":visible") && el.getAttribute("data-close") === "Close extra 10 percent popup") {
                  step = 1
                }
                if ($(".success_block ").is(":visible") && el.getAttribute("data-close") === "Close extra 10 percent popup") {
                  step = 2
                }
                pushDataLayer(`${el.getAttribute("data-close")}`, step)
                closePopup()
              }
              e.target.setAttribute("data-test", "1")

              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test")
                }
              }, 200)
            })
          })

          // click pn btn Claim Bonus Offer
          document.querySelector("form .green_btn")?.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              e.preventDefault()
              pushDataLayer("Claim bonus offer button")
              validationForm()
              if (document.querySelector('.input_validation_email').textContent === "You've already given us that email address before") {
                document.querySelector('.input_validation_email').textContent = "Your email doesn't seem to be valid"
                validationForm()
              }
            }
            e.target.setAttribute("data-test", "1")

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test")
              }
            }, 200)
          })

          document.querySelector(`input[name='myEmail']`)?.addEventListener("focus", (e) => {
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("Email input")
            }
            e.target.setAttribute("data-test", "1")

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test")
              }
            }, 300)
          })
          document.querySelector(`.voucher_block`)?.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("Discount number")
            }
            e.target.setAttribute("data-test", "1")

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test")
              }
            }, 300)
          })
        }
      }
      popupTrigger.forEach((btn) => {
        if (!btn.classList.contains("applied_discount")) {
          btn.addEventListener("click", () => {
            pushDataLayer("Tap Additional 10 off applied button")
            openPopup()
          })
        }
      })

      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          pushDataLayer("Сlick on overlay close")
          closePopup()
        }
      })

      function countTimer() {
        let clock = setInterval(() => {
          if (typeof FlipClock === "function" && typeof jQuery === "function" && document.querySelector("#countdown")) {
            clearInterval(clock)
            let init_countdown, set_countdown
            countdown = init_countdown = function () {
              countdown = new FlipClock($(".countdown"), {
                language: "en",
                clockFace: "DailyCounter",
                countdown: true,
                autoStart: false,
                showSeconds: true,
                callbacks: {
                  start: function () {
                    console.log(`start countdown`)
                  },
                  stop: function () {
                    console.log(`stop countdown`)
                  },
                },
              })

              return countdown
            }
            set_countdown = function (minutes, start) {
              let elapsed, end, left_secs, now, seconds
              if (countdown.running) {
                return
              }
              seconds = minutes * 60
              now = new Date()
              start = new Date(start)
              end = start.getTime() + seconds * 1000
              left_secs = Math.round((end - now.getTime()) / 1000)
              elapsed = false
              if (left_secs < 0) {
                console.log(`left_secs`, left_secs)
                left_secs *= -1
                elapsed = true
              }
              countdown.setTime(left_secs)
              return countdown.start()
            }
            init_countdown()
            set_countdown(15, new Date())
          }
        }, 500)
      }
      // change EVENT btn addToCart and setDiscountCheckout
      function setDiscountCheckout() {
        let idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value
        // observer
        let observer = new MutationObserver(() => {
          if (document) {
            observer.disconnect()
            idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value
            observer.observe(document, {
              childList: true,
              subtree: true,
            })
          }
        })

        observer.observe(document, {
          childList: true,
          subtree: true,
        })

        document.querySelector("#addToCart")?.addEventListener("click", function (e) {
          e.preventDefault()
          pushDataLayer("Click on addToCart")
          addToCartCheckout(idValue)
        })

        async function addToCartCheckout(idValue) {
          // clearCart
          await fetch("/cart/clear.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json()
            })
            .catch((error) => {
              console.error("Error:", error)
            })

          formData = {
            items: [
              {
                id: idValue,
                quantity: 1,
              },
            ],
          }

          await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => {
              return response.json()
            })
            .catch((error) => {
              console.error("Error:", error)
            })

          setTimeout(() => {
            if (!localStorage.getItem("restartFunc")) {
              window.location.href = "/checkout?discount=NATURAL10"
              localStorage.setItem("restartFunc", "true")
            } else {
              window.location.pathname = "/checkout"
            }
          }, 300)
        }
      }

      function changeVisabilityApplieddiscount() {
        document.querySelector(".btn_trigger_popup.not_applied_discount")?.classList.add("is_hidden")
        document.querySelector(".btn_trigger_popup.applied_discount")?.classList.remove("is_hidden")
        setDiscountCheckout()

        if (document.querySelector(".success_block")?.classList.contains("is_hidden")) {
          document.querySelector(".success_block")?.classList.remove("is_hidden")
        }
        if (!document.querySelector(".email_opt_in")?.classList.contains("is_hidden")) {
          document.querySelector(".email_opt_in")?.classList.add("is_hidden")
        }
      }
      // Visability
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      })
      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      })
      let int = setInterval(() => {
        if (document.querySelector(".email_opt_in")) {
          clearInterval(int)
          obs.observe(document.querySelector(".email_opt_in"))
        }
      }, 100)
      let int2 = setInterval(() => {
        if (document.querySelector(".success_block")) {
          clearInterval(int2)
          obs.observe(document.querySelector(".success_block"))
        }
      }, 100)
      if (document.querySelector(".not_applied_discount")) {
        obs.observe(document.querySelector(".not_applied_discount"))
      }
      let int3 = setInterval(() => {
        if (document.querySelector(".applied_discount") && document.querySelector(".overlay_popup").classList.contains("is_hidden")) {
          clearInterval(int3)
          obs.observe(document.querySelector(".applied_discount"))
        }
      }, 100)
      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target)
            }, 2000)
          }
        })
      }
      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("email_opt_in")) {
              pushDataLayer("Visibility extra 10 percent popup", "step_1")
            }
            if (i.target.classList.contains("success_block")) {
              pushDataLayer("Visibility extra 10 percent popup", "step_2")
            }
            if (i.target.classList.contains("not_applied_discount")) {
              pushDataLayer("Visibility Get additional 10 off button")
            }
            if (i.target.classList.contains("applied_discount") && document.querySelector(".overlay_popup").classList.contains("is_hidden")) {
              pushDataLayer("Visibility Additional 10 off applied button")
            }
            obs.unobserve(i.target)
          }
          obs2.unobserve(i.target)
        })
      }
      // validationForm
      function validationForm() {
        let inputValueEmail = document.querySelector(`input[name='myEmail']`).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)
        if (inputValueEmail === null) {
          document.querySelector(`input[name='email']`).classList.add("error")
          document.querySelector(`.input_validation_email`).style.display = "block"
        } else {
          document.querySelector(`input[name='email']`).classList.remove("error")
          document.querySelector(`.input_validation_email`).style.display = "none"
        }

        if (inputValueEmail !== null) {
          mailToKlavio(document.querySelector(`input[name='myEmail']`).value)

          async function mailToKlavio(email) {
            formData = {
              "email": email,
              "listId": "Rn9LMT"
            }
            await fetch("https://conversionrate.top/api/naturalpatch/klavio/emailsend", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }).then(response => response.json())
              .then((data) => {
                console.log(data)
                if (data.status === 'error') {
                  document.querySelector('.input_validation_email').textContent = "You've already given us that email address before"
                  document.querySelector(`.input_validation_email`).style.display = "block"
                  document.querySelector(`input[name='email']`).classList.remove("error")
                  console.log(`dfghgfdfgh`)
                } else {
                  document.querySelector('.input_validation_email').textContent = "Your email doesn't seem to be valid"

                  document.querySelector(`input[name='email']`).classList.remove("error")
                  document.querySelector(`.input_validation_email`).style.display = "none"
                  countdown.stop()
                  localStorage.setItem("appliedDiscount", "yes")
                  changeVisabilityApplieddiscount()
                }
              })
              .catch((error) => {
                console.error("Error:", error)
              })

          }

        }
      }
    }



    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)
        clarity("set", "popup_first_order", "variant_1")
      }
    }, 200)
  }
}, 400)
