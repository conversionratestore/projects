let startFunk = setInterval(() => {
  if (document.querySelector(".tour-intro")) {
    clearInterval(startFunk)

    let scriptCustomSlider = document.createElement("script")
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"
    scriptCustomSlider.async = false
    document.head.appendChild(scriptCustomSlider)
    //
    let scriptCustomTimer = document.createElement("script")
    scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js"
    scriptCustomTimer.async = false
    document.head.appendChild(scriptCustomTimer)

    let scriptCustomTimerStyle = document.createElement("link")
    scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css"
    scriptCustomTimerStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomTimerStyle)

    let dir = "https://conversionratestore.github.io/projects/secretfoodtours/img/"

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
          eventCategory: `Exp: Exit intent book now pop up ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Exit intent book now pop up ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let popupStyle = /*html */ `
    <style>
    .overlay_popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
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
        max-width: 1000px;
        width: 100%;
        margin: auto;
        transition: all 0.5s ease 0s;
    }
    .overlay_popup .container_popup > .btn_close {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 40px;
        height: 40px;
        outline: none;
        cursor: pointer;
        background: #144732;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .content_popup{
        display: flex;
        background: #FFFFFF;
    }
    .content_popup > div{
        width: 50%;
    }
    .info_block{
        padding: 40px;
        text-align: center;
    }
    .info_block > h2{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        text-transform: uppercase;
        color: #212529;
        margin: 0 0 30px;
    }
    .info_block > h2 b{
        color: #FF1919;
    }
    .info_block > h3{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #212529;
        margin: 48px 0 12px;
    }
    .voucher_block{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px dashed #EBEBE7;
        height: 50px;
    }
    .voucher_block span{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 3px;
        color: #C39958;
        margin: 0 0 0 10px;
    }
    [data-clipboard-text]{
        cursor: pointer;
    }
    .voucher_block span.copied{
        position: absolute;
        top: 15px;
        left: 80px;
        font-weight: 500;
        font-size: 9px;
        line-height: 14px;
        color: #878787;
        margin: 0;
    }
    .info_block > button{
        font-family: 'Josefin Sans', sans-serif;
        height: 48px;
        width: 100%;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #144732;
        margin: 30px 0 24px;
        cursor: pointer;
        outline: unset;
        border: none;
    }
    .info_block > p{
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        color: #878787;
        margin: 0;
    }
    .img_wrap{
        max-width: 500px;
    }
    .mob_var{
        display: none;
    }
    /* */
    .info_block .flip-clock-wrapper{
        margin: 0 auto;
        max-width: 212px;
    }
    .info_block .flip-clock-wrapper ul{
        box-shadow: unset;
        width: 32px;
        height: 48px;
        line-height: 30px;
        border-radius: unset;
        background: #EBEBE7;
        margin: 1px;
    }
    .info_block .flip-clock-divider{
        width: 20px;
        height: 48px;
        margin: 1px 0;
    }
    .info_block .flip-clock-divider .flip-clock-label{
        top: unset;
        bottom: -1.5em;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #859F94;
    }
    .info_block .flip-clock-dot{
        background: #212529;
        box-shadow: unset;
        width: 5px;
        height: 5px;
        left: 8px;
    }
    .info_block .flip-clock-wrapper ul li a div div.inn{
        color: #212529;
        text-shadow: unset;
        text-align: center;
        background-color: #EBEBE7;
        border-radius: unset;
        font-size: 30px;
        line-height: 55px;
    }
    .info_block .flip-clock-wrapper ul li a div.down{
        border-radius: unset !important;
    }
    .info_block .flip-clock-divider.minutes .flip-clock-dot{
        display: none;
    }
    .info_block .flip-clock-divider.seconds .flip-clock-label{
        right: -62px;
    }
    .info_block .flip-clock-divider.minutes .flip-clock-label {
        right: -59px;
    }
    .info_block .flip-clock-wrapper ul.play li.flip-clock-before .down .shadow{
        background: unset;
    }
    .text_after_countdown{
        background: #EBEBE7;
        padding: 16px 24px;
        max-width: max-content;
        margin: 40px auto -8px;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        color: #144732;
    }
    @media only screen and ( min-width: 768px ) and ( max-width: 1000px ) {
      .info_block{
        padding: 20px;
      }
      .info_block > h2{
        font-size: 24px;
        margin: 0 auto 10px;
        max-width: 385px;
      }
      .info_block > h3{
        margin: 34px 0 12px;
      }
      .info_block > button{
        margin: 15px 0 15px;
      }
    }
    @media (max-width: 768px) {
        .overlay_popup .container_popup{
            max-width: 335px;
            margin: 30px auto auto;
        }
        .content_popup{
            flex-direction: column-reverse;
            margin-bottom: 30px;
        }
        .content_popup > div {
            width: 100%;
        }
        .overlay_popup .container_popup > .btn_close{
            top: 16px;
            right: 16px;
            width: 36px;
            height: 36px;
        }
        .overlay_popup .container_popup > .btn_close svg{
            width: 15px;
        }
        .info_block {
            padding: 20px 20px 24px;
            text-align: center;
        }
        .info_block > h2{
            margin: 0 auto 24px;
            max-width: 250px;
            font-size: 20px;
            line-height: 28px;
        }
        .info_block > h3{
            font-size: 18px;
            line-height: 18px;
            margin: 42px 0 14px;
        }
        .info_block > button{
            margin: 24px 0 12px;
            font-size: 14px;
            line-height: 14px;
        }
        .info_block > p{
            margin: 0 auto;
            max-width: 185px;
            line-height: 20px;
        }
        .mob_var{
            display: block;
        }
        .desk_var{
            display: none;
        }
        .voucher_block span.copied{
          left: 20px;
        }
        .text_after_countdown{
            margin: 0 auto 44px;
        }
    }
    @media (max-width: 320px) {
      .overlay_popup .container_popup{
        max-width: 299px;
      }
      .info_block > h3{
        font-size: 16px;
      }
      .voucher_block span.copied{
        left: 3px;
      }
    }
    @media (max-width: 280px) {
      .overlay_popup .container_popup{
        max-width: 258px;
      }
      .info_block > h2{
        font-size: 17px;
      }
      .info_block > h3{
        font-size: 14px;
      }
      .voucher_block span.copied{
        left: 16px;
        top: 0;
      }
      .text_after_countdown{
        font-size: 16px;
      }
    }

    </style>
    `

    // popup
    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <div class="btn_close">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0184 7.9773L15.5574 3.4383C16.1475 2.89362 16.1475 1.98582 15.5574 1.44113L14.5589 0.442553C14.0142 -0.147518 13.1064 -0.147518 12.5617 0.442553L8.02269 4.98156L3.4383 0.442553C2.89362 -0.147518 1.98582 -0.147518 1.44113 0.442553L0.442553 1.44113C-0.147518 1.98582 -0.147518 2.89362 0.442553 3.4383L4.98156 7.9773L0.442553 12.5617C-0.147518 13.1064 -0.147518 14.0142 0.442553 14.5589L1.44113 15.5574C1.98582 16.1475 2.89362 16.1475 3.4383 15.5574L8.02269 11.0184L12.5617 15.5574C13.1064 16.1475 14.0142 16.1475 14.5589 15.5574L15.5574 14.5589C16.1475 14.0142 16.1475 13.1064 15.5574 12.5617L11.0184 7.9773Z" fill="white"/>
                </svg>
            </div>
          </div>
        </div>
`

    let contentPopup = /*html */ `
        <div class="content_popup">
            <div class="info_block">
                <h2>Book now and get <b>10% off</b> your tickets</h2>
                <div class="countdown-wrapper">
                    <div id="countdown" class="countdown"></div>
                </div>
                <h3>Apply discount code on checkout:</h3>
                <div class="voucher_block">
                    <svg data-clipboard-text="BOOK10" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4521 22H14.5478C16.2963 22 17.73 20.6882 17.9542 19H18.5478C20.4512 19 22 17.4512 22 15.5479V5.4521C22 3.5488 20.4512 2 18.5479 2H9.4521C7.5488 2 6 3.5488 6 5.4521V6H5.4521C3.5488 6 2 7.5488 2 9.4521V18.5478C2 20.4512 3.5488 22 5.4521 22ZM8 5.4521C8 4.6514 8.6514 4 9.4521 4H18.5478C19.3486 4 20 4.6514 20 5.4521V15.5478C20 16.3486 19.3486 17 18.5479 17H18V9.4521C18 7.5488 16.4512 6 14.5479 6H8V5.4521ZM4 9.4521C4 8.6514 4.6514 8 5.4521 8H14.5478C15.3486 8 16 8.6514 16 9.4521V18.5478C16 19.3486 15.3486 20 14.5479 20H5.4521C4.6514 20 4 19.3486 4 18.5479V9.4521Z" fill="#C39958"/>
                    </svg>
                    <span>BOOK10</span>
                </div>
                <button>BOOK a tour</button>
                <p>The discount does not apply to private tours or bookings</p>
            </div>
            <div class="img_wrap">
                <img class="desk_var" src="${dir}popup_img.jpg" alt="woman">
                <img class="mob_var" src="${dir}popup_img_mob.jpg" alt="woman">
            </div>
        </div>
    `

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;700&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", popupStyle)
    document.body.insertAdjacentHTML("afterbegin", popUp)
    document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup)

    exitIntentPopup()
    //   EXIT INTENT popup
    function exitIntentPopup() {
      if (document.querySelector(".overlay_popup")) {
        let overlay = document.querySelector(".overlay_popup"),
          containerPopup = overlay.querySelector(".container_popup"),
          btnClose = overlay.querySelector(".btn_close")

        //show EXIT INTENT popup desktop
        addEvent(document, "mouseout", function (e) {
          if (e.toElement == null && e.relatedTarget == null && sessionStorage.getItem("exit_popup_loaded") == null) {
            sessionStorage.setItem("exit_popup_loaded", "true") //refresh status popup
            onOpenPopup() //show popup
          }
        })

        //exit intent
        function addEvent(obj, evt, fn) {
          if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false)
          } else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn)
          }
        }

        //show EXIT INTENT popup mobile
        if (window.innerWidth <= 768) {
          let lastPosition = 0,
            newPosition = 0,
            currentSpeed = 0

          let scrollSpeed = () => {
            lastPosition = window.scrollY
            setTimeout(() => {
              newPosition = window.scrollY
            }, 70)
            currentSpeed = newPosition - lastPosition

            if (currentSpeed > 70 && sessionStorage.getItem("exit_popup_loaded") == null) {
              sessionStorage.setItem("exit_popup_loaded", "true") //refresh status popup
              onOpenPopup() //show popup
              document.removeEventListener("scroll", scrollSpeed)
            }
          }

          document.addEventListener("scroll", scrollSpeed)
        }

        function onOpenPopup() {
          overlay.classList.remove("is_hidden")
          document.body.style.overflow = "hidden"
          if (!document.querySelector(".overlay_popup .content_popup")) {
            containerPopup?.insertAdjacentHTML("beforeend", contentPopup)
          }
          if (document.querySelector(".overlay_popup .content_popup")) {
            pushDataLayer("Visibility Book now pop up")
            let clock = setInterval(() => {
              if (typeof FlipClock === "function" && typeof jQuery === "function" && document.querySelector("#countdown")) {
                clearInterval(clock)

                let countdown, init_countdown, set_countdown

                countdown = init_countdown = function () {
                  countdown = new FlipClock($(".countdown"), {
                    clockFace: "MinuteCounter",
                    language: "en",
                    autoStart: false,
                    countdown: true,
                    showSeconds: true,
                    callbacks: {
                      start: function () {
                        timerEventDesk(document.querySelector(".info_block"), "start")
                        // return console.log("The clock has started!")
                      },
                      stop: function () {
                        if (this.factory.getTime().time === 0) {
                          document.querySelector(".countdown-wrapper")?.remove()
                          if (!document.querySelector(".info_block > .text_after_countdown")) {
                            document.querySelector(".info_block > h2").insertAdjacentHTML("afterend", `<div class="text_after_countdown">Time is slipping away...</div>`)
                          }
                        }
                        // return console.log("The clock has stopped!")
                      },
                      interval: function () {
                        let time
                        time = this.factory.getTime().time
                        if (time) {
                          //   console.log("Clock interval", time)
                        }
                      },
                    },
                  })

                  function timerEventDesk(el, trigger) {
                    let time = 0
                    let currentTime = 0

                    let s = setInterval(() => {
                      if (trigger === "start") {
                        currentTime = ++time
                        el.setAttribute("data-time", currentTime)
                      }

                      if (trigger === "stop") {
                        clearInterval(s)
                        currentTime = el.getAttribute("data-time")
                        pushDataLayer("Duration of visibility of the pop up", `${currentTime}s`)
                      }
                    }, 1000)
                  }
                  // click on btn close popup
                  btnClose.addEventListener("click", (e) => {
                    countdown.stop()
                    pushDataLayer("Сlick on btn close")
                    timerEventDesk(document.querySelector(".info_block"), "stop")
                    onClosePopup()
                  })

                  // click on overlay popup
                  overlay.addEventListener("click", (e) => {
                    if (e.target.matches(".overlay_popup")) {
                      countdown.stop()
                      с("Сlick on overlay close")
                      timerEventDesk(document.querySelector(".info_block"), "stop")
                      onClosePopup()
                    }
                  })

                  document.querySelector(".info_block > button")?.addEventListener("click", () => {
                    countdown.stop()
                    pushDataLayer("Click on Book a tour button")
                    timerEventDesk(document.querySelector(".info_block"), "stop")
                    onClosePopup()
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

                set_countdown(10, new Date())
              }
            }, 500)
          }
        }

        function onClosePopup() {
          overlay.classList.add("is_hidden")
          document.body.style.overflow = "unset"

          setTimeout(() => {
            document.querySelector(".content_popup")?.remove()
          }, 400)
        }
      }

      let a = setInterval(() => {
        if (typeof ClipboardJS === "function") {
          clearInterval(a)

          let clipboard = new ClipboardJS(".voucher_block svg")

          clipboard.on("success", function (e) {
            // console.info("Action:", e.action)
            // console.info("Text:", e.text)
            // console.info("Trigger:", e.trigger)
            pushDataLayer("Click on copy promo code")

            document.querySelector(".copied")?.remove()
            document.querySelector(".voucher_block").insertAdjacentHTML("beforeend", `<span class="copied">copied!</span>`)
            e.clearSelection()

            setTimeout(() => {
              document.querySelector(".copied")?.remove()
            }, 3000)
          })
        }
      }, 1000)
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)

        clarity("set", "exit_intent_book_now_pop_up”", "variant_1")
      }
    }, 200)
  }
}, 100)
