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

    addTargetBlankLst()

    function addTargetBlankLst() {
      document.querySelectorAll(".js-main-prod-list li").forEach(function (el) {
        if (!el.getAttribute("data-lst")) {
          el.addEventListener("mouseenter", function () {
            el.querySelectorAll(".lst_a").forEach((a) => {
              if (!a.getAttribute("data-test")) {
                a.addEventListener("click", function (e) {
                  e.preventDefault()
                  e.stopPropagation()
                  pushDataLayer("Click on view details button")
                  window.open(a.href, "_blank")
                })
              }
              a.setAttribute("data-test", "1")
            })
          })
          el.setAttribute("data-lst", "1")
        }
      })
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        addTargetBlankLst()

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
