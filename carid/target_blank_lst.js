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
        if (!el.getAttribute("data-lst")) {
          el.addEventListener("click", function (e) {
            console.log(`data-lst`, !el.getAttribute("data-lst"))
            e.preventDefault()
            e.stopPropagation()
            pushDataLayer("Click on view details button")
            this.setAttribute("data-lst", "prod_lst")

            window.open(this.href, "_blank")
          })
        }
      })
    }

    function addTargetBlankGrd() {
      //   setTimeout(() => {
      document.querySelectorAll(".prod_grd .lst_a").forEach(function (el) {
        if (!el.getAttribute("data-grd")) {
          el.addEventListener("click", function (e) {
            console.log(`data-grd`, !el.getAttribute("data-grd"))
            e.preventDefault()
            e.stopPropagation()
            pushDataLayer("Click on view details button")
            this.setAttribute("data-grd", "prod_grd")

            window.open(this.href, "_blank")
          })
        }
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
