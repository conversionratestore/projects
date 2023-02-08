let startBtn = setInterval(() => {
  if (document.querySelector("#mainContent") && getpack3SalePrice) {
    clearInterval(startBtn)

    //event
    let eventVar = screen.width <= 768 ? "Mobile" : "Desktop"

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Magicpatch sticky button ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Magicpatch sticky button ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let styleBtn = /*html */ `
    <style>
        .js-main img {
            max-width: 315px !important;
            width: 100%;
        }
        header .js-heading .js-btn.btn-primary {
          margin-top: -125px !important;
        }
        .sticky_wrapp{
            position: fixed;
            bottom: 0;
            z-index: 999;
            background: transparent;
            width: 100%;
            margin: 0;
            padding: 10px;
        }
        .sticky_mob{
            width: 100%;
            height: 77px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: #FF3C81;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 24px 60px rgba(12, 11, 11, 0.05), 0px 12px 24px rgba(12, 11, 11, 0.05);
            border-radius: 52px;
            color: #FFFFFF;
        }
        .sticky_mob span:nth-child(1){
            font-family: 'Din Condensed', Roboto, sans-serif;
            font-weight: 700;
            font-size: 20px !important;
            line-height: 120% !important;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            margin: 0 0 6px;
        }
        .sticky_mob span:nth-child(2){
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 130% !important;
            margin: 0;
        }
        a.sticky_mob:hover {
            text-decoration: unset;
            background-color: #0C0B0B;
            box-shadow: none;
            color: #515151;
        }
        a.sticky_mob:active{
            text-decoration: unset;
            background-color: #0C0B0B;
            box-shadow: none;
            color: #515151;
        }
    </style>
    `

    let package = [
      {
        id: "39307593187372",
        price: getpack3SalePrice.includes(".") ? (getpack3SalePrice.replace(",", "") / 3).toFixed(2) : (Math.floor(getpack3SalePrice.replace(",", "") / 3) / 100).toFixed(2),
        packs: "3 Packs",
        salePrice: getpack3SalePrice,
        offPrice: getpack3OffPrice,
      },
    ]

    let currency = document.querySelector(".js-packs label > span").innerHTML.charAt(0)

    function setPack(currency, price, packs, salePrice, offPrice, href) {
      return `
        <div class="sticky_wrapp">
            <a href="${href}" class="sticky_mob">
                <span>Get ${packs} for ${currency + price} each</span>
                <span>${currency + salePrice} (${offPrice}% off)</span>
            </a>
        </div>`
    }

    document.head.insertAdjacentHTML("beforeend", styleBtn)
    for (let i = 0; i < package.length; i++) {
      document.body.insertAdjacentHTML("afterbegin", setPack(currency, package[i].price, package[i].packs, package[i].salePrice, package[i].offPrice, `/cart/${package[i].id}:1`))
    }

    document.querySelector(".sticky_mob")?.addEventListener("click", (e) => {
      // e.preventDefault()
      let maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      let currentScrollHeight = window.pageYOffset.toFixed(0)

      pushDataLayer("Click on get 3 pack sticky button", `${((currentScrollHeight / maxScrollHeight) * 100).toFixed(0)}%`)
    })

    pushDataLayer("loaded")

    //clarify
    let isClarify = setInterval(() => {
      if (typeof clarity == "function") {
        clearInterval(isClarify)
        clarity("set", "magicpatch_sticky_button", "variant_1")
      }
    }, 100)
  }
}, 300)
