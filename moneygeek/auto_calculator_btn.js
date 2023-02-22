let startNewBtn = setInterval(() => {
  if (document.querySelector(".css-1h9j791 .css-j7qwjs")) {
    clearInterval(startNewBtn)
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
          eventCategory: `Exp: Auto Calc CTA ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Auto Calc CTA ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let style = /*html */ ``

    document.body.insertAdjacentHTML("afterbegin", style)

    if (document.querySelector("#KAWC_CTA_button").getAttribute("disabled") === "") {
      document.querySelector("#KAWC_CTA_button").removeAttribute("disabled")
    }

    document.querySelector("#KAWC_CTA_button").addEventListener("click", () => {
      pushDataLayer("Get Your Personalized Quote CTA click")
    })

    // visibility
    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    })

    obs.observe(document.querySelector("#KAWC_CTA_button"))

    function visibility(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          if (i.target.getAttribute("id") === "KAWC_CTA_button") {
            pushDataLayer("Get Your Personalized Quote CTA visibility")
          }

          obs.unobserve(i.target)
        }
      })
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)

        clarity("set", `auto_calc_cta${eventVar}`, "variant_1")
      }
    }, 200)
  }
}, 300)
