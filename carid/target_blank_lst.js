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

    let prodLstStyle = /*html*/ `
    <style>

    .link_target_blank  {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        background: rgb(245 222 179 / 50%);
        width: 100%;
        height: 70%;
        z-index: 5;
        display: none;
      }

      .link_target_blank_var{
        position: absolute;
        right: 0;
        bottom: 0;
        cursor: pointer;
        background: rgb(245 222 179 / 50%);
        width: 100%;
        height:10%;
        z-index: 5;
        display: none;
      }

      .js-main-prod-list li .-clone .link_target_blank_var,
      .js-main-prod-list li .-clone .link_target_blank{
        display: none;
      }

       .js-main-prod-list li .link_target_blank_var,
       .js-main-prod-list li .link_target_blank{
        display: block;
      }

      </style>
    `

    document.head.insertAdjacentHTML("beforeend", prodLstStyle)

    if (document.querySelector("#prod-list .js-main-prod-list.prod_lst")) {
      addTargetBlankLst()
    }

    if (document.querySelector("#prod-list .js-main-prod-list.prod_grd")) {
      addTargetBlankGrd()
    }

    function addTargetBlankLst() {
      console.log(`#prod_lst`)
      document.querySelectorAll(".js-main-prod-list.prod_lst .lst_a").forEach(function (el) {
        if (!el.getAttribute("data-lst")) {
          el.addEventListener("click", function (e) {
            if (e.target === el) {
              e.preventDefault()
              e.stopPropagation()
              pushDataLayer("Click on view details button")

              window.open(this.href, "_blank")
            }
          })

          el.setAttribute("data-lst", "prod_lst")
        }
      })
    }

    function addTargetBlankGrd() {
      document.querySelectorAll(".js-main-prod-list.prod_grd li").forEach((el) => {
        el.insertAdjacentHTML("afterbegin", `<a class="link_target_blank" href="" target="_blank"></a>`)
      })

      document.querySelectorAll(".js-main-prod-list.prod_grd li").forEach((el) => {
        el.insertAdjacentHTML("beforeend", `<a class="link_target_blank_var" href="" target="_blank"></a>`)
      })

      addClickOnLink(".js-main-prod-list.prod_grd a.link_target_blank", "link_target_blank")
      addClickOnLink(".js-main-prod-list.prod_grd a.link_target_blank_var", "link_target_blank_var")

      function addClickOnLink(selector, event) {
        document.querySelectorAll(selector).forEach(function (el) {
          if (!el.getAttribute("data-grd")) {
            this.addEventListener("click", function (e) {
              if (e.target === el) {
                pushDataLayer(`Click on view details button ${event}`)
              }
            })

            el.setAttribute("data-grd", "prod_grd")
          }
        })
      }
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        if (document.querySelector("#prod-list .js-main-prod-list.prod_lst")) {
          addTargetBlankLst()
        }

        document.querySelectorAll(".js-main-prod-list.prod_grd li").forEach((el) => {
          if (!el.querySelector("a.link_target_blank") && !el.querySelector("a.link_target_blank_var")) {
            addTargetBlankGrd()
          }
        })

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
