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

    if (document.querySelector("#prod-list .prod_lst")) {
      addTargetBlankLst()
    }

    if (document.querySelector("#prod-list .prod_grd")) {
      addTargetBlankGrd()
    }

    function addTargetBlankLst() {
      document.querySelectorAll("#prod-list .prod_lst .lst_a").forEach(function (el) {
        el.addEventListener("click", function (e) {
          pushDataLayer("Click on view details button")
          e.preventDefault()
          e.stopPropagation()

          window.open(this.href, "_blank")
        })
      })
    }

    function addTargetBlankGrd() {
      //   setTimeout(() => {
      document.querySelectorAll(".prod_grd .lst_a").forEach(function (el) {
        el.addEventListener("click", function (e) {
          pushDataLayer("Click on view details button")
          e.preventDefault()
          e.stopPropagation()

          window.open(this.href, "_blank")
        })
      })
      //   }, 500)
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        if (document.querySelector(".prod_lst")) {
          addTargetBlankLst()
        }

        if (document.querySelector(".prod_grd")) {
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
