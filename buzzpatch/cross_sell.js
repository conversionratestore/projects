let crossSellFunc = setInterval(() => {
  if (document.querySelector("#getNow")) {
    clearInterval(crossSellFunc)

    let scriptCustomSlider = document.createElement("script")
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
    scriptCustomSlider.async = false
    document.head.appendChild(scriptCustomSlider)

    let scriptCustomSliderStyle = document.createElement("link")
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    scriptCustomSliderStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomSliderStyle)

    let crossSellStyle = /*html */ `
    <style>
        /* */
    .backdrop_popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #F9F8F6;
      display: flex;
      overflow-y: auto;
      z-index: 5500000595;
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }
    .backdrop_popup.show {
      opacity: 1;
      pointer-events: auto;
    }
    .backdrop_popup.show .container_popup {
      transform: translateY(0);
    }
    .backdrop_popup .container_popup {
      background: #F9F8F6;
      position: relative;
      transform: translateY(-100px);
      transition: all 0.3s ease;
      height: 100%;
    }
    .body_popup{
      height: 100%;
    background: #F9F8F6;      
    }

      /*cross_sell_block */
      .cross_sell_block{
          padding: 20px;
          background: #F9F8F6;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          background: #F9F8F6;
      }
  
      /*count_patch_box */
      .count_patch_box{
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF;
          border: 1px solid #ECEEF0;
          box-shadow: 0px 2px 4px rgb(12 11 11 / 10%), 0px 12px 32px rgb(0 0 0 / 5%);
          border-radius: 6px;
          padding: 15px;
          margin: 0;
      }
  
      .count_patch_box > p{
          font-weight: 600 !important;
          font-size: 14px !important;
          line-height: 130% !important;
          color: #3C3C3C;
          margin: 0 0 0 10px;
      }
  
      /*magic_patch_box */
      .magic_patch_box{
          margin: 20px 0 28px;
      }
  
      .magic_patch_box h2{
          font-family: 'Roboto', sans-serif !important;
          text-transform: unset;
          text-align: center;
          font-weight: 700;
          font-size: 24px;
          line-height: 130%;
          color: #0C0B0B;
          color: #0C0B0B;
          margin: 0;
      }
  
      .magic_patch_box h2 span{
          color: #FF3C7F;
      }
  
      .magic_patch_box > p{
          font-weight: 600;
          text-align: center;
          font-size: 16px !important;
          line-height: 130% !important;
          color: #FF3C7F;
          margin: 4px 0 20px;
      }
  
      .price_block{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid #D9D9D9;
          margin: 13px 0 20px;
      }
  
      .price_block span{
          font-weight: 700;
          font-size: 24px;
          line-height: 130%;
          color: #0C0B0B;
      }
  
      .price_block span:last-child{
          font-weight: 400;
          font-size: 16px;
          margin-top: 4px;
          color: rgb(12 11 11 / 99%);
      }
  
      .magic_patch_box ul:not(#carousel){
          color: #FF3C7F;
          max-width: 227px;
          margin: 0 auto;
      }
  
      .magic_patch_box ul:not(#carousel) li span{
          font-weight: 400;
          font-size: 16px;
          line-height: 130%;
          color: #212529;
      }
  
      .magic_patch_box ul:not(#carousel) li +li{
          margin-top: 12px;
      }
  
      /*btn_wrap */
      .btn_wrap{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 0 0 20px;
      }
  
      .btn_wrap button{
          font-family: 'DINEngschrift LT', sans-serif !important;
          width: 100%;
          height: 66px;
          background: #F53981;
          box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
          border-radius: 52px;
          font-weight: 500;
          font-size: 20px;
          line-height: 80%;
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #FFFFFF;
      }
  
      .btn_wrap button.no_magic{
          color: #0C0B0B;
          font-weight: 400;
          font-size: 16px;
          background: #F9F8F6;
      }
  
      .btn_wrap button + button{
          margin-top: 10px;
      }

      /*carousel */
      #carousel{
        margin: 0;
      }

      .slick-arrow {
        position: absolute;
        top: 50%;
        z-index: 2;
        cursor: pointer;
        opacity: 1;
        background: unset;
        border: unset;
        }

      .slick-arrow.prev_btn {
        left: -8px;
    }

        .slick-arrow.next_btn {
        right: -8px;
    }
        .slick-initialized .slick-slide{
            padding: 0 40px;       
         }

         /* addToCart*/
         #addToCart{
            display: none;
         }
         .new_btn_addToCart{
            width: 100%;
            margin-bottom: 40px;
         }
         .new_btn_addToCart a{
            font-family: 'DINEngschrift LT', sans-serif !important;
            margin: 0 auto;
            background: #F53981;
            box-shadow: 0px 2px 4px rgb(12 11 11 / 10%), 0px 12px 32px rgb(0 0 0 / 5%);
            border-radius: 52px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 331px;
            font-weight: 500;
            font-size: 20px;
            line-height: 16px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            height: 66px;
         }

         @media (max-width: 320px){
          .count_patch_box > p{
            font-size: 12px !important;
          }
          .magic_patch_box h2{
            font-size: 23px;
          }
          .magic_patch_box > p{
            font-size: 15px !important;
          }
          .magic_patch_box ul:not(#carousel){
            max-width: 213px;
          }
          .magic_patch_box ul:not(#carousel) li +li {
              margin-top: 6px;
          }
          .btn_wrap button{
            height: 58px;
          }
          .carousel__slide img{
            max-height: 155px;
          }
         }

        @media (max-width: 280px){
          .count_patch_box > p{
            font-size: 10px !important;
          }
          .magic_patch_box h2{
            font-size: 20px;
          }
          .magic_patch_box > p{
            font-size: 13px !important;
          }
          .magic_patch_box ul:not(#carousel){
            max-width: 178px;
          }
          .magic_patch_box ul:not(#carousel) li span{
            font-size: 13px;
          }
          .btn_wrap button{
            height: 54px;
          }
          .carousel__slide img{
            max-height: 135px;
          }
          .slick-arrow.next_btn {
            right: -12px;
          }
          .slick-arrow.prev_btn{
            left: -12px;
          }
         }
      
    </style>
    `

    let newBtnAddToCart = /*html */ `
        <div class="new_btn_addToCart">            
            <a href="#">Add to cart</a>
        </div>
    `

    let popUp = /*html */ `
    <div class="backdrop_popup">
      <div class="container_popup">
        <div class="body_popup">
          <div class="cross_sell_block">
            <div>
              <div class="count_patch_box">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
                    fill="#01A022"
                  />
                </svg>
                <p><span>3</span> BuzzPatch <span>Packs</span> added to your cart!</p>
              </div>

              <div class="magic_patch_box">
                <h2>Get <span>Extra</span> Protection with MagicPatch Itch Relief</h2>
                <p>in case you get an unexpected bite</p>
                <ul id="carousel" class="single-item">
                  <li class="carousel__slide">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_patch1.jpg" alt="magic patch" />
                  </li>
                  <li class="carousel__slide">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_patch2.jpg" alt="child" />
                  </li>
                  <li class="carousel__slide">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/magic_patch3.jpg" alt="magic patch" />
                  </li>
                </ul>
                <div class="price_block">
                  <span>$14.99 (40% OFF)</span>
                  <span>Reg. Price: $24.99 (Save $9.99)</span>
                </div>
                <ul>
                  <li><span>Reduce pain in 30-60 seconds</span></li>
                  <li><span>100% natural & chemical free</span></li>
                  <li><span>Safe for kids 0+ years old</span></li>
                  <li><span>27 patches in 1 pack</span></li>
                </ul>
              </div>
            </div>
            <div class="btn_wrap">
              <button class="add_to_order">Add to ORDER</button>
              <button class="no_magic">No, Thanks</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `

    document.head.insertAdjacentHTML("beforeend", crossSellStyle)
    document.body.insertAdjacentHTML("afterbegin", popUp)
    document.querySelector(".prices").insertAdjacentHTML("afterend", newBtnAddToCart)

    //textContent addToCart
    document.querySelector(".new_btn_addToCart a").addEventListener("click", function (e) {
      e.preventDefault()
      console.log(`addToCart`)
      showPopup()
    })

    //show popup
    function showPopup() {
      document.querySelector(".backdrop_popup").classList.add("show")
      document.body.style.overflow = "hidden"
    }

    //get count value
    getCountVal()
    let idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value

    function getCountVal() {
      let countVal = document.querySelector(".js-packs input[type=radio]:checked+label").textContent.split(" ")[0]
      if (countVal === "") {
        countVal = document.querySelector(".js-packs input[type=radio]:checked+label").textContent.split(" ")[1]
      }

      document.querySelector(".count_patch_box > p > span:first-child").textContent = countVal
      if (countVal === "1") {
        document.querySelector(".count_patch_box > p > span:last-child").textContent = "Pack"
      }
    }

    // observer
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        getCountVal()

        idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value
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

    // click on btn
    document.querySelector(".add_to_order").addEventListener("click", function (e) {
      e.preventDefault()

      addToCartCheckout(idValue)
    })

    document.querySelector(".no_magic").addEventListener("click", function (e) {
      e.preventDefault()

      addToCartCheckout(idValue, "Checkout without Upsell")
    })

    //add to cart on checkout
    async function addToCartCheckout(idValue, parent = "") {
      // clearCart
      await fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json()
        })
        .catch((error) => {
          console.error("Error:", error)
        })

      let formData = {
        items: [
          {
            id: idValue,
            quantity: 1,
          },
          {
            id: 39558788972588,
            quantity: 1,
          },
        ],
      }

      if (parent === "Checkout without Upsell") {
        formData = {
          items: [
            {
              id: idValue,
              quantity: 1,
            },
          ],
        }
      }

      await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          return response.json()
        })
        .catch((error) => {
          console.error("Error:", error)
        })

      setTimeout(() => {
        window.location.pathname = "/checkout"
      }, 300)
    }

    // slider

    let slickInterval = setInterval(() => {
      if (typeof jQuery("#carousel").slick === "function") {
        clearInterval(slickInterval)
        $(".single-item").slick({
          arrows: true,
          autoplay: false,
          dots: false,
          centerMode: true,
          variableWidth: true,
          prevArrow: `
           <div class="prev_btn"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4111 22.5892C14.1896 21.8107 14.1903 20.5486 13.4126 19.7692L5.66031 12L13.4126 4.23077C14.1903 3.45137 14.1896 2.18931 13.4111 1.41077V1.41077C12.6319 0.631622 11.3687 0.631623 10.5895 1.41077L0.000312805 12L10.5895 22.5892C11.3687 23.3684 12.6319 23.3684 13.4111 22.5892V22.5892Z" fill="#FF3C7F"/></svg></div>`,
          nextArrow: `
            <div class="next_btn"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.588919 22.5892C-0.189627 21.8107 -0.190315 20.5486 0.587381 19.7692L8.33969 12L0.587381 4.23077C-0.190315 3.45137 -0.189627 2.18931 0.588919 1.41077C1.36806 0.631622 2.63131 0.631623 3.41046 1.41077L13.9997 12L3.41046 22.5892C2.63131 23.3684 1.36806 23.3684 0.588919 22.5892Z" fill="#FF3C7F"/></svg></div>`,
        })

        // $(".single-item").slick({
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        //   arrows: true,
        //   autoplay: false,
        //   dots: false,
        //   centerMode: true,
        //   variableWidth: true,
        //   prevArrow: `
        //    <div class="prev_btn"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4111 22.5892C14.1896 21.8107 14.1903 20.5486 13.4126 19.7692L5.66031 12L13.4126 4.23077C14.1903 3.45137 14.1896 2.18931 13.4111 1.41077V1.41077C12.6319 0.631622 11.3687 0.631623 10.5895 1.41077L0.000312805 12L10.5895 22.5892C11.3687 23.3684 12.6319 23.3684 13.4111 22.5892V22.5892Z" fill="#FF3C7F"/></svg></div>`,
        //   nextArrow: `
        //     <div class="next_btn"><svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.588919 22.5892C-0.189627 21.8107 -0.190315 20.5486 0.587381 19.7692L8.33969 12L0.587381 4.23077C-0.190315 3.45137 -0.189627 2.18931 0.588919 1.41077C1.36806 0.631622 2.63131 0.631623 3.41046 1.41077L13.9997 12L3.41046 22.5892C2.63131 23.3684 1.36806 23.3684 0.588919 22.5892Z" fill="#FF3C7F"/></svg></div>`,
        // })

        document.querySelector(".slick-slide img")?.click()
      }
    }, 20)
  }
}, 10)
