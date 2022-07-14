let testStart = setInterval(() => {
  if (document.querySelector(".e-page-content-wrap")) {
  }
  clearInterval(testStart)

  let styleVar = /*html */ `
  <style>
  .css-ayu7xz .boxmenuContainer,
  .css-ayu7xz .pageContainer > .container div.element-filter {
    position: unset !important;
  }

  .css-qa0rkb .cart-wrapper .cart-product-actions{
    padding: 20px;
    /*
    position: fixed !important;
    */
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 10%);
    width: 100%;
    bottom: 0;
    z-index: 100;
    margin: 0;
  }

  .css-qa0rkb .cart-wrapper .cart-product-actions button.checkout{
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.05em;
    padding: 17px 0;
    width: 100%;
    max-width: unset;
    margin-bottom: 10px;
  }

  /*count_badge*/
  .count_badge{
    display: none;
    align-items: center;
    position: absolute;
    justify-content: center;
    width: 26px;
    height: 26px;
    top: -6px;
    right: -16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    z-index: 20;
    background: #FC4E37;
    border-radius: 50%;
  }

  .count_badge.is_visible{
    display: flex;
  }

  .e-page-content-wrap + div.is_hidden{
    display: none;
  }

  /*sticky_box */
  .sticky_box{
    position: fixed;
    bottom: -1px;
    background: #FFFFFF;
    box-shadow: 2px 0px 8px rgb(0 0 0 / 10%);
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    z-index: 100;
  }

  .sticky_box > span{
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #3956A7;
  }

  .sticky_box > button{
    max-width: 272px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FC4E37;
    border-radius: 60px;
    outline: unset;
    border: unset;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 15px 0;
  }

  .sticky_box > button span{
    margin: 0 5px;
  }

  /*shipping_box */
  .shipping_box{
    background: #EBEEF7;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    padding: 4px 0;
  }

  .shipping_box > span{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #3956A7;
    margin-left: 7px;
  }

  .shipping_box > span b{
    margin: 0 3px;
    font-weight: 800;
  }
  </style>
  `

  let stickyBox = /*html */ `
  <div class="sticky_box">
    <span>$1660.88</span>
    <button>Checkout NOW - GET <span>25%</span> OFF</button>
  </div>
  `

  let shippingBox = /*html */ `
  <div class="shipping_box">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.28569 10.4285H11.9998V11.7141H4.28569V10.4285ZM3 7.21423H9.42844V8.49992H3V7.21423Z" fill="#3956A7"/>
        <path d="M20.9481 10.818L19.0196 6.31809C18.9701 6.20243 18.8877 6.10386 18.7827 6.0346C18.6776 5.96535 18.5546 5.92846 18.4288 5.92853H16.5003V4.64284C16.5003 4.47235 16.4325 4.30884 16.312 4.18828C16.1914 4.06773 16.0279 4 15.8574 4H5.57191V5.28569H15.2146V13.3572C14.9216 13.5273 14.6653 13.7537 14.4603 14.0234C14.2553 14.293 14.1057 14.6006 14.0202 14.9283H9.98053C9.82407 14.3224 9.45197 13.7942 8.93398 13.443C8.41599 13.0917 7.78767 12.9414 7.1668 13.0203C6.54594 13.0992 5.97514 13.4018 5.56142 13.8714C5.14769 14.341 4.91943 14.9453 4.91943 15.5712C4.91943 16.197 5.14769 16.8014 5.56142 17.271C5.97514 17.7406 6.54594 18.0432 7.1668 18.1221C7.78767 18.2009 8.41599 18.0506 8.93398 17.6994C9.45197 17.3481 9.82407 16.82 9.98053 16.214H14.0202C14.16 16.7657 14.4798 17.2551 14.929 17.6046C15.3782 17.9541 15.9311 18.1439 16.5003 18.1439C17.0694 18.1439 17.6223 17.9541 18.0715 17.6046C18.5207 17.2551 18.8405 16.7657 18.9803 16.214H20.3573C20.5278 16.214 20.6913 16.1463 20.8119 16.0257C20.9324 15.9052 21.0002 15.7417 21.0002 15.5712V11.0713C21.0002 10.9842 20.9825 10.898 20.9481 10.818ZM7.50044 16.8569C7.24616 16.8569 6.99758 16.7815 6.78615 16.6402C6.57472 16.4989 6.40993 16.2981 6.31262 16.0632C6.21531 15.8283 6.18985 15.5698 6.23946 15.3204C6.28907 15.071 6.41152 14.8419 6.59132 14.6621C6.77113 14.4823 7.00022 14.3598 7.24962 14.3102C7.49901 14.2606 7.75752 14.2861 7.99245 14.3834C8.22738 14.4807 8.42818 14.6455 8.56945 14.8569C8.71072 15.0683 8.78613 15.3169 8.78613 15.5712C8.78579 15.9121 8.65022 16.2389 8.40918 16.4799C8.16814 16.721 7.84132 16.8565 7.50044 16.8569ZM16.5003 7.21422H18.0045L19.3828 10.4284H16.5003V7.21422ZM16.5003 16.8569C16.246 16.8569 15.9974 16.7815 15.786 16.6402C15.5745 16.4989 15.4097 16.2981 15.3124 16.0632C15.2151 15.8283 15.1897 15.5698 15.2393 15.3204C15.2889 15.071 15.4113 14.8419 15.5911 14.6621C15.7709 14.4823 16 14.3598 16.2494 14.3102C16.4988 14.2606 16.7573 14.2861 16.9923 14.3834C17.2272 14.4807 17.428 14.6455 17.5693 14.8569C17.7105 15.0683 17.7859 15.3169 17.7859 15.5712C17.7856 15.9121 17.65 16.2389 17.409 16.4799C17.168 16.721 16.8411 16.8565 16.5003 16.8569ZM19.7145 14.9283H18.9803C18.8387 14.3777 18.5184 13.8896 18.0696 13.5406C17.6208 13.1916 17.0688 13.0014 16.5003 12.9998V11.7141H19.7145V14.9283Z" fill="#3956A7"/>
    </svg>
    <span>Your order qualifies for <b>FREE</b> Shipping</span>
  </div>
  `

  document.head.insertAdjacentHTML("beforeend", styleVar)

  // setTimeout(() => {
  //   document.querySelector(".css-qa0rkb .cart-wrapper .cart-product-actions")?.insertAdjacentHTML("afterbegin", shippingBox)
  // }, 3000)

  //   document.querySelector(
  //     ".css-qa0rkb .cart-wrapper .cart-product-actions button.checkout"
  //   ).textContent = "CHECKOUT NOW - GET 15% OFF";

  // observer
  // const target = document.querySelector(".e-page-content-wrap + div")
  // const config = {
  //   childList: true,
  //   subtree: true,
  // }

  // let observer = new MutationObserver((mutations) => {
  //   observer.disconnect()

  //   // for (let mutation of mutations) {
  //   //   for (let node of mutation.addedNodes) {
  //   //     if (!(node instanceof HTMLElement)) continue

  //   //     if (node.matches(".css-n8qisr .custom .content > div")) {
  //   //       calback()
  //   //     }

  //   //     function calback() {
  //   //       // const items = [...document.querySelectorAll(".product-count")]
  //   //       // let totalItems = 0
  //   //       // items.forEach((i) => {
  //   //       //   let item = +i.textContent.split(" ")[0] || +i.textContent.split("-")[0]
  //   //       //   totalItems += item
  //   //       // })
  //   //       // localStorage.setItem("allItems", totalItems)
  //   //       // console.dir(totalItems)
  //   //       const items = document.querySelector(".cart-product-wrapper").children.length
  //   //       totalItems = items
  //   //       localStorage.setItem("allItems", totalItems)

  //   //       const prices = [...document.querySelectorAll(".product-price")]
  //   //       let totalPrice = 0

  //   //       prices.forEach((element) => {
  //   //         let price = +element.textContent.slice(1).replace(/,/g, "")
  //   //         totalPrice += price
  //   //       })

  //   //       localStorage.setItem("allSumm", totalPrice.toFixed(2))
  //   //       // renderCountBadge()
  //   //       // renderStickyBox()

  //   //       console.dir(totalPrice.toFixed(2))
  //   //     }
  //   //   }
  //   // }
  //   observer.observe(target, config)
  // })

  // observer.observe(target, config)

  // renderStickyBox()
  // renderCountBadge()

  // render StickyBox
  // function renderStickyBox() {
  //   // if (document.querySelector(".count_badge").classList.contains("is_visible") && localStorage.getItem("allSumm") && !document.querySelector(".sticky_box")) {
  //   //   document.querySelector(".e-page-content.css-xf71d4.css-l33dnr.is-scrolled.is-scrolled-50.is-scrolled-60").insertAdjacentHTML("beforeend", stickyBox)
  //   // }

  //   if (localStorage.getItem("allSumm") && !document.querySelector(".sticky_box")) {
  //     document.querySelector(".e-page-content.css-xf71d4.css-l33dnr.is-scrolled.is-scrolled-50.is-scrolled-60").insertAdjacentHTML("beforeend", stickyBox)
  //   }

  //   if (document.querySelector(".sticky_box > span")) {
  //     let summ = +localStorage.getItem("allSumm")
  //     document.querySelector(".sticky_box > span").textContent = `$${summ}`
  //   }
  // }

  // function renderCountBadge() {
  //   if (!document.querySelector(".count_badge") && localStorage.getItem("allItems")) {
  //     document.querySelector(".css-11td2i.b-header.fw-header .e-nav .mobile-cart-box")?.insertAdjacentHTML("afterbegin", `<span class="count_badge">0</span>`)
  //   }

  //   if (document.querySelector(".count_badge") && localStorage.getItem("allItems")) {
  //     let items = +localStorage.getItem("allItems")
  //     document.querySelector(".count_badge").textContent = items
  //     document.querySelector(".count_badge").classList.add("is_visible")
  //   }
  // }

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  document.querySelector(".css-11td2i.b-header.fw-header .e-nav .mobile-cart-box")?.insertAdjacentHTML("afterbegin", `<span class="count_badge">0</span>`)

  //?????????
  addToCartPopup()
  function addToCartPopup() {
    document.querySelectorAll(".css-ayu7xz .pageContainer > .container .category .products .product .action button").forEach((el) => {
      el.addEventListener("click", function () {
        document.querySelector(".e-page-content-wrap + div").classList.add("is_hidden")
        document.querySelector(".css-11td2i.b-header.fw-header .e-nav .mobile-cart-box").click()
        document.querySelector(".css-11td2i.b-header.fw-header .e-nav .mobile-cart-box").click()
        document.querySelector(".e-page-content-wrap + div").classList.remove("is_hidden")

        let temp = []
        if (localStorage.getItem("product")) {
          temp = JSON.parse(localStorage.getItem("product"))
        }

        temp.push({
          price: el.closest(".product").querySelector(".discount").textContent.slice(1).replace(/,/g, ""),
          count: 1,
          title: el.closest(".product").querySelector(".title").textContent,
        })

        localStorage.setItem("product", JSON.stringify(temp))

        if (localStorage.getItem("product") && !document.querySelector(".sticky_box")) {
          document.querySelector(".e-page-content.css-xf71d4.css-l33dnr.is-scrolled.is-scrolled-50.is-scrolled-60").insertAdjacentHTML("beforeend", stickyBox)
        }

        getStorageInfo()
      })
    })
  }

  function getStorageInfo() {
    let storage = JSON.parse(localStorage.getItem("product"))
    let res = storage.reduce((accumulator, el) => accumulator + +el.price, 0)
    let resCount = storage.reduce((accumulator, el) => accumulator + +el.count, 0)
    console.dir(res)
    if (document.querySelector(".sticky_box > span")) {
      document.querySelector(".sticky_box > span").textContent = `$${res.toFixed(2)}`
    }

    if (document.querySelector(".count_badge")) {
      document.querySelector(".count_badge").textContent = resCount
      document.querySelector(".count_badge").classList.add("is_visible")
    }
  }

  document.querySelector(".sticky_box > button")?.addEventListener("click", function () {
    document.querySelector(".css-11td2i.b-header.fw-header .e-nav .mobile-cart-box").click()
    document.querySelector(".e-page-content-wrap + div").classList.add("is_hidden")
    document.querySelector(".css-qa0rkb .cart-wrapper .cart-product-actions button.checkout").click()
    document.querySelector(".e-page-content-wrap + div").classList.remove("is_hidden")
  })

  document.querySelectorAll(".product .added button").forEach((el) => {
    let title = el.closest(".product").querySelector(".title").textContent

    el.addEventListener("click", () => {
      let storage = JSON.parse(localStorage.getItem("product"))
      let res = storage.filter((item) => {
        return item.title === title
      })

      if (el.classList.contains("add")) {
        console.dir(`add`)
        console.dir(res)
      }

      if (el.classList.contains("remove")) {
        console.dir(`remove`)
        console.dir(res)
      }
    })
  })
}, 10)
