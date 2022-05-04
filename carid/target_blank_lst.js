let startfunk = setInterval(() => {
  if (document.querySelector(".main-content")) {
    clearInterval(startfunk)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: PDP on new tab`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: PDP on new tab`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    if (document.querySelector("#prod-list .js-main-prod-list")) {
      addTargetBlankGrd()
    }

    function addTargetBlankGrd() {
      console.log(`#prod_grd`)
      document.querySelectorAll(".js-main-prod-list .lst_a").forEach(function (el) {
        if (!el.getAttribute("data-grd")) {
          el.addEventListener("click", function (e) {
            console.log(`data-grd`, !el.getAttribute("data-grd"))
            e.preventDefault()
            e.stopPropagation()
            pushDataLayer("Click on view details button")

            window.open(this.href, "_blank")
            console.log(el)
          })
          el.setAttribute("data-grd", "prod_grd")
        }
      })
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        if (document.querySelector("#prod-list .js-main-prod-list")) {
          addTargetBlankGrd()
        }

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

    pushDataLayer("loaded")
    clarity("set", "pdp_on_new_tab", "variant_1")
  }
}, 10)
