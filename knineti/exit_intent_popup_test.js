/** Variables */
let device = screen.width <= 768 ? "Mobile" : "Desktop"
// CSS
const style = /*html*/ ` 
    <style>
        .my_overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.65);
            overflow: hidden;
            opacity: 0;
            z-index: -1;
        }

        .my_overlay.show_popup {
            opacity: 1;
            transition: all 0.2s ease-in-out; 
            z-index: 9999;
        }

        .my_popup {
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            margin: 15px;
            border-radius: 10px;
            max-width: 598px;
            max-height: 671px;
            overflow: hidden;
            transform: scale(0.8); 
        }

        .show_popup .my_popup {
            transform: scale(1); 
            transition: all 0.2s ease-in-out; 
        }

        .my_popup_img img {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: 0 -15px;
        }

        .my_popup_content {
            padding: 24px 40px 40px;
            text-align: center;
        }

        .my_popup_content p {
            margin: 0;
        }

        .content_title {
            font-weight: 600;
            font-size: 32px;
            line-height: 40px;
            text-align: center;
            color: #734F22 !important;
        }

        p.content_txt {
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            color: #555555 !important;
            margin: 8px;
        }

        .content_btn {
            background: #193973;
            box-shadow: 5px 5px 10px #272020;
            border-radius: 6px;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            color: #FFFFFF !important;
            margin: 24px 0 20px;
            padding: 15px 40px;
            border: none;
            cursor: pointer;
        }

        .content_no {
            width: fit-content;
            margin: 0 auto !important;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
            color: #193973 !important;
            cursor: pointer;
        }

        .my_popup_close_wrapper {
            position: absolute;
            top: 8px;
            right: 8px;
            cursor: pointer;
            padding: 4px
        }

        .my_popup_close {

            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFFFFF;
            border: 1px solid #E8F1F9;
            border-radius: 50%;

        }

        @media only screen and (max-width: 768px) {
            .my_popup_content {
                padding: 24px 28px 28px;
            }

            .content_title {
                font-size: 28px;
            }
        }

        @media only screen and (max-width: 400px) {
            .content_title span {
                display: block;
            }
        }
    </style>
`
/* HTML elements */
const popup = /*html*/ `
    <div class="my_overlay">
        <div class="my_popup">
            <div class="my_popup_img">
                <img src="https://conversionratestore.github.io/projects/knineti/img/popup_img.jpg" alt="">
            </div>
            <div class="my_popup_content">
                <p class="content_title">Try it risk-free for <span>90 days</span></p>
                <p class="content_txt">We will refund you the full amount unconditionally if you are in any way
                    dissatisfied with our Masterclass</p>
                <button class="content_btn">Complete purchase</button>
                <p class="content_no">No thanks</p>
            </div>
            <div class="my_popup_close_wrapper">
                <div class="my_popup_close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.36392 4.94986L9.89956 1.41421L8.48535 0L4.94971 3.53564L1.41421 0.000150681L0 1.41436L3.53549 4.94986L6.98856e-05 8.48528L1.41428 9.89949L4.94971 6.36407L8.48528 9.89965L9.8995 8.48543L6.36392 4.94986Z"
                            fill="#555555" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
`

let seconds = 1
let isStopped = false

/** Functions */
const waitForEl = (selector) => {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector))
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector))
        observer.disconnect()
      }

      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue

          if (node.matches(selector)) {
            resolve(document.querySelector(selector))
            observer.disconnect()
          }
        }
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

const sendEvent = (eventAction, eventLabel = "") => {
  // GO Event
  const obj = {
    event: "event-to-ga",
    eventCategory: "Exp: Exit intent pop up. " + device,
    eventAction,
    eventLabel,
  }

  window.dataLayer = window.dataLayer || []
  dataLayer.push(obj)
}

const stopTimeout = () => {
  if (!isStopped) {
    isStopped = true

    clearInterval(myTimerCRS)
    sendEvent("Duration of visibility of the pop up", seconds)
  }
}

const showPopup = () => {
  sessionStorage.setItem("popupAppeared", "true")
  document.querySelector(".my_overlay").classList.add("show_popup")
  sendEvent("Visibility")

  myTimerCRS = setInterval(() => {
    seconds = seconds + 1
  }, 1000)

  setTimeout(() => {
    stopTimeout()
  }, 120000)
}
const hidePopup = (label) => {
  document.querySelector(".my_overlay").classList.remove("show_popup")
  sendEvent("Close pop up", label)

  stopTimeout()
}

/** Parse HTML, CSS and run functions. */
document.head.insertAdjacentHTML("beforeend", style)

const waitForBody = setInterval(() => {
  if (document.body) {
    clearInterval(waitForBody)

    document.body.insertAdjacentHTML("afterbegin", popup)
  }
}, 100)

waitForEl(".my_popup_close_wrapper").then((el) => el.addEventListener("click", () => hidePopup("close")))
waitForEl(".content_no").then((el) => el.addEventListener("click", () => hidePopup("No thanks")))

const waitForBtns = setInterval(() => {
  if (document.querySelector(".submit_btn input") && document.querySelector(".content_btn")) {
    clearInterval(waitForBtns)

    document.querySelector(".content_btn").addEventListener("click", () => {
      document.querySelector(".my_overlay").classList.remove("show_popup")
      sendEvent("click on Complete purchase button")

      stopTimeout()

      const filledInputs = [...document.querySelectorAll(".payment_inform_box input:not(#onetime_pay):not(#monthly_pay)")].every((input) => {
        return input.value.length
      })

      if (filledInputs) {
        document.querySelector(".submit_btn input").focus()
        document.querySelector(".submit_btn input").click()
      } else {
        for (const input of document.querySelectorAll(".payment_inform_box input:not(#onetime_pay):not(#monthly_pay)")) {
          if (!input.value.length) {
            input.focus()
            break
          }
        }
      }
    })

    if (sessionStorage.getItem("popupAppeared") == null) {
      // show popup
      switch (device) {
        case "Desktop":
          let x = 0,
            y = 0
          window.addEventListener("mousemove", function (e) {
            x = e.clientX
            y = e.clientY
          })
          document.body.addEventListener(
            "mouseleave",
            function () {
              if (x < 50 || y < 50 || x > window.innerWidth - 50 || y > window.innerHeight - 50) {
                showPopup()
              }
            },
            { once: true }
          )
          break
        case "Mobile":
          let lastPosition = 0,
            newPosition = 0,
            currentSpeed = 0

          let scrollSpeed = () => {
            lastPosition = window.scrollY
            setTimeout(() => {
              newPosition = window.scrollY
            }, 70)
            currentSpeed = newPosition - lastPosition

            if (currentSpeed > 70) {
              document.removeEventListener("scroll", scrollSpeed)
              showPopup()
            }
          }

          document.addEventListener("scroll", scrollSpeed)
          break
        default:
          break
      }
    }
  }
}, 100)

// observer
const runObserver = () => {
  // Mutation Observer
  const target = document.body
  const config = {
    childList: true,
    subtree: true,
  }

  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      console.log(mutation)
    }
  })

  observer.observe(target, config)
}

$(".paypament-details .order_form_field").keyup(function () {
  onEventDesk()
})

$(".paypament-details .order_form_field").blur(function () {
  onEventDesk()
})

function onEventDesk() {
  if (sessionStorage.getItem("popupAppeared") == null) {
    // show popup
    switch (device) {
      case "Desktop":
        let x = 0,
          y = 0
        window.addEventListener("mousemove", function (e) {
          x = e.clientX
          y = e.clientY
        })
        document.body.addEventListener(
          "mouseleave",
          function () {
            if (x < 50 || y < 50 || x > window.innerWidth - 50 || y > window.innerHeight - 50) {
              showPopup()
            }
          },
          { once: true }
        )
        break
      default:
        break
    }
  }
}

sendEvent("loaded")
const record = setInterval(() => {
  if (typeof clarity === "function") {
    clearInterval(record)

    clarity("set", `exit_intent_pop_up_${device.toLowerCase()}`, "variant_1")
  }
}, 100)
