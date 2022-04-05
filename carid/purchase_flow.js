let startfunkCarid = setInterval(() => {
  if (document.querySelector("#product_orderform")) {
    clearInterval(startfunkCarid)

    let scriptCustomPopper = document.createElement("script")
    scriptCustomPopper.src = "https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"
    scriptCustomPopper.async = false
    document.head.appendChild(scriptCustomPopper)

    let scriptCustomTippy = document.createElement("script")
    scriptCustomTippy.src = "https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"
    scriptCustomTippy.async = false
    document.head.appendChild(scriptCustomTippy)

    // // event
    let actionDataLayer = "",
      labelDataLayer = "",
      eventVar = "desktop"

    if (window.innerWidth <= 768) {
      eventVar = "mobile"
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Purchase flow UI improvement ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Purchase flow UI improvement ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let purchaseFlowStyle = /*html */ `
<style>
    #selectBtnReact,
    .sticky_wrapp{
        display: none;
    }

    .tooltip_bar{
        display: none;
    }

    .purchase_flow button,
    button.sticky_mob{
        display: flex;
        width: 100%;
        background-color: #068922;
        border-radius: 3px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        text-transform: uppercase;
        color: #FFFFFF;
        align-items: center;
        justify-content: center;
        outline: none;
        border: none;
        height: 54px;
        max-height: 100%;
        cursor: pointer;
    }

    .purchase_flow button.now_pay_btn,
    button.sticky_mob{
        margin-top: 16px;
        background-color: #4062B9;
    }

    .purchase_flow > div{
        position: relative;
    }

    .tippy-box{
        background: rgba(248, 248, 248, 0.95);
        border: 1px solid #4062B9;
        border-radius: 5px;
        width: 100%;
        min-width: 486px;
    }

    .tippy-content{
        width: 100%;
        padding: 0;
    }

    .hover_block{
        background: rgba(248, 248, 248, 0.95);
        border: 1px solid #4062B9;
        border-radius: 5px;
        position: absolute;
        top: 60px;
        left: -310px;
        z-index: 22222222;
        pointer-events: none;
        opacity: 0;
        transition: all 0.8s ease;
        visibility: hidden;
    }

    .purchase_flow > div > .hover_block > p,
    .hover_block_desk > p{
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        text-transform: uppercase;
        color: #4062B9;
        padding: 10px;
        border-bottom: 1px solid #4062B9;
        margin: 0;
        text-align: left;
    }

    .purchase_flow > div > .hover_block > ul,
    .hover_block_desk > ul {
        list-style: none;
        padding: 18px;
    }

    .purchase_flow > div > .hover_block > ul li,
    .hover_block_desk > ul li {
        display: flex;
        align-items: center;
    }

    .purchase_flow > div > .hover_block > ul li + li,
    .hover_block_desk > ul li + li{
        margin-top: 18px;
    }

    .purchase_flow > div > .hover_block > ul li p:first-child,
    .hover_block_desk > ul li p:first-child{
        font-weight: 700;
        font-size: 14px;
        line-height: 100%; 
        text-transform: uppercase;
        color: #4062B9;
        margin: 0;
    }

    .purchase_flow > div > .hover_block > ul li p:last-child,
    .hover_block_desk > ul li p:last-child{
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #4062B9;  
        margin: 0 0 0 18px;    
    }

    .purchase_flow > div > .hover_block > ul li p:last-child >span,
    .hover_block_desk > ul li p:last-child >span{
        font-weight: 700;
        font-size: 14px;
        line-height: 100%;
        text-transform: lowercase;
        position: relative;
        margin-right: 11px;
    }

    .purchase_flow > div > .hover_block > ul li p:last-child >span::after,
    .hover_block_desk > ul li p:last-child >span::after{
        position: absolute;
        content: '';
        right: -5px;
        top: -3px;
        width: 22px;
        height: 15px;
        background: url('https://conversionratestore.github.io/projects/carid/img/affirm.svg');
        background-repeat: no-repeat;
        background-size: contain;
    }

    .purchase_flow > button:hover {
        background-color: #05711c;
    }

    button.now_pay_btn:hover{
        background-color: #3157ab;
    }

    @media (max-width: 768px) {


        .tooltip_bar{
            background: #F8F8F8;
            border: 1px solid #4062B9;
            border-radius: 5px;
            padding: 10px 45px 10px 10px;
            display: flex;
            margin-top: 20px;
            position: relative;
        }

        .tooltip_bar::after{
            position: absolute;
            content: "";
            background: url(https://cdn.carid.com/css/prod-images/ca4806dc.svg) no-repeat 0 0;
            height: 6px;
            width: 10px;
            right: 14px;
            top: 50%;
            transform: translateY(-50%);
            transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .tooltip_bar > .tooltip_svg{
            width: 16px;
            height: 16px;
            overflow: unset;
        }

        .tooltip_bar > p{
            margin: 0 0 0 15px;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 129%;
            color: #4062B9;
        }

        .hover_block{
            pointer-events: unset;
            margin-top: 8px;
            background: #F8F8F8;
            opacity: 0;
            position: absolute;
            transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
            top: unset !important;
            left: unset !important;
        }

        .purchase_flow > div > .hover_block > p{
            padding: 10px 18px;
            line-height: 140%;
        }

        .purchase_flow > div > .hover_block > ul{
            padding: 10px 18px 16px;
        }

        .purchase_flow > div > .hover_block > ul li{
            align-items: flex-start;
        }

        .purchase_flow > div > .hover_block > ul li p:first-child{
            width: 20%;
        }

        .purchase_flow > div > .hover_block > ul li p:last-child{
            font-size: 14px;
            line-height: 14px;
            margin: 0;
            width: 85%;
        }

        .show_var.hover_block{
            opacity: 1;
            position: static;
            visibility: unset;
        }

        .arrow_down_var.tooltip_bar::after{
            transform: translateY(-50%) rotateX(180deg);
        }

        .sticky_wrapp{
            display: none;
            position: fixed;
            bottom: 0;
            z-index: 999;
            background: #FFFFFF;
            padding: 20px 0;
            width: 100%;
            margin: 0;
        }

        .purchase_flow button.now_pay_btn{
            height: 52px;
            margin: 0;
        }

        .prod_add{
            margin-bottom: 17px;
        }

        button.sticky_mob{
            margin: 0 auto;
            width: 88%;
            line-height: 129%;
            height: 52px;
        }
    }

</style>

`

    let purchaseFlow = /*html */ `
<div class="purchase_flow">
    <!-- <button>CHOOSE OPTIONS and Add to cart</button> -->

    <div>
        <button class="now_pay_btn">order NOW PAY later</button>

        <div class="tooltip_bar">
            <svg class="tooltip_svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 11V7H6.5V8H7.5V11H6V12H10V11H8.5ZM8 4C7.85166 4 7.70666 4.04399 7.58332 4.1264C7.45999 4.20881 7.36386 4.32594 7.30709 4.46299C7.25032 4.60003 7.23547 4.75083 7.26441 4.89632C7.29335 5.0418 7.36478 5.17544 7.46967 5.28033C7.57456 5.38522 7.7082 5.45665 7.85368 5.48559C7.99917 5.51453 8.14997 5.49968 8.28701 5.44291C8.42406 5.38614 8.54119 5.29001 8.6236 5.16668C8.70601 5.04334 8.75 4.89834 8.75 4.75C8.75 4.55109 8.67098 4.36032 8.53033 4.21967C8.38968 4.07902 8.19891 4 8 4Z" fill="#4062B9"/>
                <path d="M8 15C6.61553 15 5.26216 14.5895 4.11101 13.8203C2.95987 13.0511 2.06266 11.9579 1.53285 10.6788C1.00303 9.3997 0.86441 7.99224 1.13451 6.63437C1.4046 5.2765 2.07129 4.02922 3.05026 3.05026C4.02922 2.07129 5.2765 1.4046 6.63437 1.13451C7.99224 0.86441 9.3997 1.00303 10.6788 1.53285C11.9579 2.06266 13.0511 2.95987 13.8203 4.11101C14.5895 5.26216 15 6.61553 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 2C6.81332 2 5.65328 2.3519 4.66658 3.01119C3.67989 3.67047 2.91085 4.60755 2.45673 5.7039C2.0026 6.80026 1.88378 8.00666 2.11529 9.17054C2.3468 10.3344 2.91825 11.4035 3.75736 12.2426C4.59648 13.0818 5.66558 13.6532 6.82946 13.8847C7.99335 14.1162 9.19975 13.9974 10.2961 13.5433C11.3925 13.0892 12.3295 12.3201 12.9888 11.3334C13.6481 10.3467 14 9.18669 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2Z" fill="#4062B9"/>
            </svg>
            <p>Learn how to pay for this product in equal instalments</p>
        </div>

        <div class="hover_block">
            <p>Order now AND pay later in equal instalments</p>
            <ul>
                <li>
                    <p>STEP 1</p>
                    <p>Choose product options</p>
                </li>
                <li>
                    <p>STEP 2</p>
                    <p>Add product to cart</p>
                </li>
                <li>
                    <p>STEP 3</p>
                    <p>Select <span>affirm</span> as a payment method at checkout</p>
                </li>
                <li>
                    <p>STEP 4</p>
                    <p>Enter your details and get a real-time loan decision</p>
                </li>
            </ul>
        </div>
    </div>
</div>
`
    document.head.insertAdjacentHTML("beforeend", purchaseFlowStyle)

    startfunk()

    function startfunk() {
      document.querySelector("#prod-slct-opts-btn-holder").insertAdjacentHTML("beforeend", purchaseFlow)

      if (document.querySelector("button#addToCartButReact")) {
        document.querySelector("button#addToCartButReact").textContent = "CHOOSE OPTIONS and Add to cart"

        document.querySelector("button#addToCartButReact").addEventListener("click", function () {
          pushDataLayer("Click on Choose options and add to cart button")
        })
      }

      if (document.querySelector(".purchase_flow button.now_pay_btn")) {
        document.querySelector(".purchase_flow button.now_pay_btn").addEventListener("click", function (e) {
          e.preventDefault()
          pushDataLayer("Click on Order now pay later button")
          document.querySelector("button#selectBtnReact").click()
        })

        // if (window.innerWidth > 768) {
        //   console.log(window.innerWidth)
        //   document.querySelector(".purchase_flow button.now_pay_btn").addEventListener("mouseenter", function () {
        //     const block = document.querySelector(".purchase_flow > div")
        //     document.querySelector(".purchase_flow > div > .hover_block").style.opacity = "1"
        //     document.querySelector(".purchase_flow > div > .hover_block").style.visibility = "unset"

        //     if (block.getBoundingClientRect().top >= 365) {
        //       document.querySelector(".purchase_flow > div > .hover_block").style.top = "-214px"
        //     } else {
        //       document.querySelector(".purchase_flow > div > .hover_block").style.top = "60px"
        //     }
        //   })

        //   document.querySelector(".purchase_flow button.now_pay_btn").addEventListener("mouseleave", function () {
        //     document.querySelector(".purchase_flow > div > .hover_block").style.opacity = "0"
        //     document.querySelector(".purchase_flow > div > .hover_block").style.visibility = "hidden"
        //   })
        // }
      }

      //   sticky btn mobile and  click on tooltip_bar mobile
      document.body.insertAdjacentHTML("afterbegin", `<div class="sticky_wrapp"><button class="sticky_mob">order NOW PAY later</button></div>`)

      if (window.innerWidth <= 768) {
        //   sticky btn mobile
        if (document.querySelector("button.sticky_mob")) {
          document.querySelector("button.sticky_mob").addEventListener("click", function (e) {
            e.preventDefault()
            document.querySelector("button#selectBtnReact").click()
          })
        }

        const element = document.querySelector("#prod-slct-opts-btn-holder")

        function visible(target) {
          //  position elem
          let targetPosition = {
              top: window.pageYOffset + target.getBoundingClientRect().top,
              left: window.pageXOffset + target.getBoundingClientRect().left,
              right: window.pageXOffset + target.getBoundingClientRect().right,
              bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
            },
            // position window
            windowPosition = {
              top: window.pageYOffset,
              left: window.pageXOffset,
              right: window.pageXOffset + document.documentElement.clientWidth,
              bottom: window.pageYOffset + document.documentElement.clientHeight,
            }

          if (
            targetPosition.bottom > windowPosition.top &&
            targetPosition.top < windowPosition.bottom &&
            targetPosition.right > windowPosition.left &&
            targetPosition.left < windowPosition.right
          ) {
            document.querySelector(".sticky_wrapp").style.display = "none"
          } else {
            document.querySelector(".sticky_wrapp").style.display = "block"
          }
        }

        window.addEventListener("scroll", function () {
          visible(element)
        })

        visible(element)

        //   click on tooltip_bar mobile
        if (document.querySelector(".tooltip_bar")) {
          document.querySelector(".tooltip_bar").addEventListener("click", function () {
            document.querySelector(".purchase_flow > div > .hover_block").classList.toggle("show_var")

            if (document.querySelector(".purchase_flow > div > .hover_block").classList.contains("show_var")) {
              this.classList.add("arrow_down_var")
              pushDataLayer("Click on the Learn how opens a pop up button")
              this.setAttribute("data-time", "0")
              timerEvent(this, "start")
            } else {
              this.classList.remove("arrow_down_var")
              pushDataLayer("Click on the tooltip close button")
              timerEvent(this, "stop")
            }
          })
        }
      }

      // hover desktop
      if (window.innerWidth > 768) {
        let run = setInterval(() => {
          if (typeof tippy === "function") {
            clearInterval(run)

            tippy(".purchase_flow button.now_pay_btn", {
              allowHTML: true,
              followCursor: true,
              arrow: false,
              onShow(instance) {
                console.log(`show`)
                timerEventDesk(document.querySelector(".purchase_flow button.now_pay_btn"), "start")
              },
              onHide(instance) {
                console.log(`hide`)
                timerEventDesk(document.querySelector(".purchase_flow button.now_pay_btn"), "stop")
              },
              content:
                '<div class="hover_block_desk"><p>Order now AND pay later in equal instalments</p><ul><li><p>STEP 1</p><p>Choose product options</p></li><li><p>STEP 2</p><p>Add product to cart</p> </li><li><p>STEP 3</p><p>Select <span>affirm</span> as a payment method at checkout</p></li><li><p>STEP 4</p><p>Enter your details and get a real-time loan decision</p></li></ul></div>',
            })
          }
        }, 100)
      }
    }

    // observer
    // let observer = new MutationObserver(() => {
    //   if (document) {
    //     observer.disconnect()
    //     a()

    //     observer.observe(document, {
    //       childList: true,
    //       subtree: true,
    //     })
    //   }
    // })

    // observer.observe(document, {
    //   childList: true,
    //   subtree: true,
    // })

    //
    // clarity("set", "purchase_flow_improvement", "variant_1")
    pushDataLayer("loaded")

    //   timer
    function timerEvent(el, trigger) {
      let timeNotClosed = 30
      let time = 0
      let currentTime = 0

      let s = setInterval(() => {
        if (trigger === "start") {
          currentTime = ++time
          el.setAttribute("data-time", currentTime)
        }

        if (trigger === "stop") {
          clearInterval(s)
          currentTime = el.getAttribute("data-time")
          console.log(currentTime)
          pushDataLayer("'Visibility equal instalments pop up mobile", `setTimeM ${currentTime}`)
        }

        if (currentTime === timeNotClosed) {
          //   clearInterval(s)
          pushDataLayer("'Visibility equal instalments pop up mobile", "not_closed")
        }

        if (!el.classList.contains("arrow_down_var")) {
          clearInterval(s)
        }
      }, 1000)
    }

    function timerEventDesk(el, trigger) {
      let time = 0
      let currentTime = 0

      let s = setInterval(() => {
        if (trigger === "start") {
          currentTime = ++time
          el.setAttribute("data-time", currentTime)
        }

        if (trigger === "stop") {
          clearInterval(s)
          currentTime = el.getAttribute("data-time")
          console.log(currentTime)
          pushDataLayer("'Visibility equal instalments pop up mobile", `setTimeM ${currentTime}`)
        }

        if (!document.querySelector("div#tippy-1")) {
          clearInterval(s)
        }
      }, 1000)
    }
  }
}, 10)
