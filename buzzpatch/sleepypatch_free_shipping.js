if (window.innerWidth <= 768) {
  if (window.location.pathname === "/pages/sleepypatch") {
    let startFunkShippingh = setInterval(() => {
      if (document.querySelector(".shipping-noti")) {
        clearInterval(startFunkShippingh)

        // event
        function pushDataLayer(actionDataLayer, labelDataLayer) {
          window.dataLayer = window.dataLayer || []
          if (labelDataLayer) {
            console.log(actionDataLayer + " : " + labelDataLayer)
            dataLayer.push({
              event: "event-to-ga",
              eventCategory: `Exp: sleepypatch_free_shipping`,
              eventAction: `${actionDataLayer}`,
              eventLabel: `${labelDataLayer}`,
            })
          } else {
            console.log(actionDataLayer)
            dataLayer.push({
              event: "event-to-ga",
              eventCategory: `Exp: sleepypatch_free_shipping`,
              eventAction: `${actionDataLayer}`,
            })
          }
        }

        let styleMob = /*html*/ `
                <style>
                .shipping-noti{
                    display: none !important;
                }
                .hand-banner{
                    position: relative;
                }
                .hand-banner .new_free_shipping{
                    position: absolute;
                    width: 100%;
                    bottom: 80px;
                    left: 0;
                    background: #F4BE00;
                    padding: 10px 2px;
                }
                .hand-banner .new_free_shipping > p{
                    margin: 0 auto;
                    color: #000;
                    font-weight: 700;
                    font-size: 14px !important;
                    line-height: 16px !important;
                    text-align: center;
                    text-transform: none;
                }
                .hand-banner .new_free_shipping > p span{
                    margin: 0 10px;
                }
                .new_free_shipping_btn{
                    background: #F4BE00;
                    padding: 10px 2px;
                    width: 106%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 15px -10px;
                }
                .new_free_shipping_btn img{
                    margin: 0 !important;
                    width: 31px;
                }
                body .new_free_shipping_btn p{
                    font-weight: 400;
                    font-size: 14px !important;
                    line-height: 16px !important;
                    color: #000000;
                    margin: 0 0 0 8px;
                }
                </style>
                `

        document.head.insertAdjacentHTML("beforeend", styleMob)
        document
          .querySelector(".hand-banner")
          .insertAdjacentHTML("beforeend", `<div class="new_free_shipping"><p>FREE shipping <span>|</span>30-day Money Back Guarantee</p></div>`)
        document
          .querySelector("#addToCart")
          .insertAdjacentHTML(
            "beforebegin",
            `<div class="new_free_shipping_btn"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/free_delivery.svg" alt="truck"><p><b>FREE Shipping</b> Worldwide</p></div><div class="testik"></div>`
          )

        let obs = new IntersectionObserver(visibility, {
          threshold: 1,
        })

        let obs2 = new IntersectionObserver(visibility2, {
          threshold: 1,
        })

        if (document.querySelector(".new_free_shipping")) {
          obs.observe(document.querySelector(".new_free_shipping"))
        }
        if (document.querySelector("#addToCart")) {
          obs.observe(document.querySelector("#addToCart"))
        }
        if (document.querySelector(".testik")) {
          obs.observe(document.querySelector(".testik"))
        }

        function visibility(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              setTimeout(function () {
                obs2.observe(i.target)
              }, 600)
            }
          })
        }

        function visibility2(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              if (i.target.classList.contains("new_free_shipping")) {
                pushDataLayer("Visibility block `FREE shipping | 30-day Money Back Guarantee`")
              }
              if (i.target.classList.contains("testik")) {
                pushDataLayer("Visibility block `FREE Shipping Worldwide`")
              }
              if (i.target.getAttribute("id") === "addToCart") {
                pushDataLayer("Visibility btn `PROCEED TO CHECKOUT`")
              }

              obs.unobserve(i.target)
            }

            obs2.unobserve(i.target)
          })
        }

        pushDataLayer("loaded")
        const record = setInterval(() => {
          if (typeof clarity === "function") {
            clearInterval(record)
            clarity("set", "sleepypatch_free_shipping", "variant_1")
          }
        }, 200)

        document.querySelector(".exp")?.remove()
      }
    }, 100)
  }

  if (window.location.pathname.includes("/checkouts/")) {
    let startCheckouts = setInterval(() => {
      if (document.querySelector(".banner")) {
        clearInterval(startCheckouts)

        // event
        function pushDataLayer(actionDataLayer, labelDataLayer) {
          window.dataLayer = window.dataLayer || []
          if (labelDataLayer) {
            console.log(actionDataLayer + " : " + labelDataLayer)
            dataLayer.push({
              event: "event-to-ga",
              eventCategory: `Exp: sleepypatch_free_shipping`,
              eventAction: `${actionDataLayer}`,
              eventLabel: `${labelDataLayer}`,
            })
          } else {
            console.log(actionDataLayer)
            dataLayer.push({
              event: "event-to-ga",
              eventCategory: `Exp: sleepypatch_free_shipping`,
              eventAction: `${actionDataLayer}`,
            })
          }
        }

        let styleMobCheckouts = /*html*/ `
                <style>
                .total-line__price span[data-checkout-total-shipping-target]{
                    font-weight: 700 !important;
                    font-size: 14px !important;
                    line-height: 16px !important;
                    color: #313131 !important;
                }
                </style>
                `

        document.head.insertAdjacentHTML("beforeend", styleMobCheckouts)

        if (document.querySelector(".total-line__price span[data-checkout-total-shipping-target]")) {
          document.querySelector(".total-line__price span[data-checkout-total-shipping-target]").textContent = "Free"
        }

        document.querySelector('[aria-controls="order-summary"]').addEventListener("click", (e) => {
          if (e.currentTarget.classList.contains("order-summary-toggle--show")) {
            pushDataLayer("click on Show order summary")
          } else {
            pushDataLayer("click on Hide order summary")
          }
        })

        pushDataLayer("loaded")
        const record = setInterval(() => {
          if (typeof clarity === "function") {
            clearInterval(record)
            clarity("set", "sleepypatch_free_shipping", "variant_1")
          }
        }, 200)

        document.querySelector(".exp")?.remove()
      }
    }, 100)
  }
}
