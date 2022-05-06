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

    // if (document.querySelector("#prod-list .js-main-prod-list.prod_lst")) {
    //   addTargetBlankLst()
    // }

    document.querySelectorAll(".js-main-prod-list li").forEach((el) => {
      if (!el.querySelector("a.test_btn")) {
        addTargetBlankGrd(el)
      }
    })

    // function addTargetBlankLst() {
    //   console.log(`#prod_lst`)
    //   document.querySelectorAll(".js-main-prod-list.prod_lst .lst_a").forEach(function (el) {
    //     if (!el.getAttribute("data-lst")) {
    //       el.addEventListener("click", function (e) {
    //         if (e.target === el) {
    //           e.preventDefault()
    //           e.stopPropagation()
    //           pushDataLayer("Click on view details button")

    //           window.open(this.href, "_blank")
    //         }
    //       })

    //       el.setAttribute("data-lst", "prod_lst")
    //     }
    //   })
    // }

    function addTargetBlankGrd(li) {
      li.insertAdjacentHTML("afterbegin", `<a class="link_target_blank test_btn" href="" target="_blank"></a>`)

      li.insertAdjacentHTML("beforeend", `<a class="link_target_blank_var test_btn" href="" target="_blank"></a>`)

      addClickOnLink(".test_btn")

      function addClickOnLink(selector) {
        li.querySelectorAll(selector).forEach(function (el) {
          el.addEventListener("click", function (e) {
            pushDataLayer(`Click on view details button`)
          })
        })
      }
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        // if (document.querySelector("#prod-list .js-main-prod-list.prod_lst")) {
        //   addTargetBlankLst()
        // }

        document.querySelectorAll(".js-main-prod-list li").forEach((el) => {
          if (!el.querySelector("a.test_btn")) {
            addTargetBlankGrd(el)
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
