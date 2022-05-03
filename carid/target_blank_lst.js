let startfunk = setInterval(() => {
  if (document.querySelector(".main-content")) {
    clearInterval(startfunk)
    console.log(`startfunk`)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: `,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: `,
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
      console.log(`startfunkLst`)
      document.querySelectorAll("#prod-list .prod_lst .lst_a").forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault()
          e.stopPropagation()
          console.log(`prod_lst`, this.href)

          window.open(this.href, "_blank")
        })
      })
    }

    function addTargetBlankGrd() {
      console.log(`startfunkGrd`)
      //   setTimeout(() => {
      document.querySelectorAll("#prod-list .prod_grd .lst_a").forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault()
          e.stopPropagation()
          console.log(`prod_grd`, this.href)

          window.open(this.href, "_blank")
        })
      })
      //   }, 500)
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()
        console.log(`observer`)

        if (document.querySelector("#prod-list .prod_lst")) {
          addTargetBlankLst()
        }

        if (document.querySelector("#prod-list .prod_grd")) {
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
  }
}, 10)
