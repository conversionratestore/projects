if (window.innerWidth <= 768) {
  let startfunkMobUpsell = setInterval(() => {
    if (document.querySelector(".prices")) {
      clearInterval(startfunkMobUpsell)

      // event
      let actionDataLayer = "",
        labelDataLayer = ""

      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || []
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Upsell hypothesis 1.V2`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: Upsell hypothesis 1.V2`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      let cartBoxStyle = /*html */ `
        <style>
            .js-mobile.days.lazyautosizes.lazyloaded{
                display: none !important;
            }
            
            #addToCart{
                width: 100%;
                margin: 24px 16px 0;
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                letter-spacing: 0.015em;
                font-family: 'DINEngschrift LT', sans-serif;
                display: none;
            }

            .new_reviews_box a:not(a.scroll_svg),
            .cart_box a:not(a.scroll_svg){
                display: inline-flex;
                width: 100%;
                max-width: 312px;
                height: 65px;
                align-items: center;
                justify-content: center;
                font-family: 'DINEngschrift LT', sans-serif;
                font-weight: 400;
                font-size: 18px !important;
                line-height: 21px;
                text-align: center;
                letter-spacing: 0.015em;
                text-transform: uppercase;
                color: #FFFFFF !important;
                background: #FF3C7F;
                border-radius: 100px;
                border: 1px solid #FF3C7F;
                cursor: pointer;
                outline: none;
                text-decoration: unset;
            }

            .img_box img{
                height: 100% !important;
                object-fit: cover;
                width: 100%;
                margin: 0 !important;
            }

            /*new_reviews_box */
            .new_reviews_box{
                margin-top: 32px;
            }

            .new_reviews_box > div{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 40px 0;
            }

            .new_reviews_box > div > div:last-child{
                text-align: left;
                margin-left: 50px;
            }

            .new_reviews_box > div > div:last-child p{
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 16px !important;
                line-height: 19px !important;
                color: rgba(0, 0, 0, 0.7);
                margin: 0;
            }

            .new_reviews_box > div > div:last-child p> b{
                color: #000000;
            }

            .new_reviews_box > div > div:last-child p:last-of-type{
                font-size: 14px !important;
                line-height: 16px !important;
                color: #000000;
                margin: 2px 0 4px;
            }

            /*cart_box */
            .cart_box{
                padding: 42px 8px 0;
                width: 100%;
                display: none;
            }

            .additionally_cart{
                background: #FAFAFA;
                border: 2px solid #FF3C81;
                border-radius: 5px;
                padding: 16px 8px;
                position: relative;
            }

            .your_cart h2{
                font-family: 'DINEngschrift LT', sans-serif;
                font-weight: 600 !important;
                font-size: 36px !important;
                line-height: 117%;
                letter-spacing: 0.02em !important;
                color: #0C0B0B !important;
                margin-bottom: 16px !important;
                text-align: center;
                text-transform: uppercase;
            }

           .cart_box .additionally_cart > p{
                font-family: 'DINEngschrift LT', sans-serif;
                font-weight: 400;
                font-size: 20px !important;
                line-height: 120% !important;
                text-transform: uppercase;
                color: #0C0B0B;
                margin: 0 auto 16px;
                text-align: center;
                /*
                max-width: 308px;
                */
            }

            .additionally_cart > p >span{
              color: #FF3C7F;
            }

            .cart_box .additionally_cart >a.scroll_svg{
              display: flex;
              text-align: center;
              width: 36px;
              height: 36px;
              margin: 0 auto;
              align-items: center;
              justify-content: center;
            }

            .cart_box .additionally_cart >a.scroll_svg svg{
              text-align: center;
              stroke: #FF3C81;
              transition: all 0.9s ease;
            }
           
            .drop_down_cart{
                padding: 28px 8px;
                background: #FFFFFF;
                border: 1px solid #ECEEF0;
                box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
                border-radius: 6px;
                margin: 4px 0 16px;

                position: absolute;
                pointer-events: none;
                opacity: 0;
                transition: all 0.9s ease;
                visibility: hidden;
            }

        .show_var.drop_down_cart{
            opacity: 1;
            position: relative;
            visibility: unset;
            pointer-events: unset;
        }

            .text_absolute{
                position: absolute;
                top: -10px;
                left: 8px;
                background: #4CAF50;
                box-shadow: 0px 2px 4px rgb(12 11 11 / 10%), 0px 24px 60px rgb(12 11 11 / 5%), 0px 12px 24px rgb(12 11 11 / 5%);
                border-radius: 3px;
                padding: 6px 8px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .text_absolute span{
                font-weight: 400;
                font-size: 11px;
                line-height: 12px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #FFFFFF;
            }

            .text_absolute span:first-child{
                margin-right: 3px;
            }

            .your_cart{
              margin-bottom: 32px;
            }

            .additionally_cart .price_box,
            .your_cart .price_box{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .your_cart .price_box{
              background: #FFFFFF;
              border: 1px solid #ECEEF0;
              box-shadow: 0px 2px 4px rgb(12 11 11 / 10%), 0px 12px 32px rgb(0 0 0 / 5%);
              border-radius: 6px;
              padding: 16px 14px;
            }

            .additionally_cart .price_box .img_box,
            .your_cart .price_box .img_box{
                width: 39%;
            }

            .your_cart .price_box .img_box img{
              min-height: 108px;
            }

            .additionally_cart .price_box > div:last-of-type,
            .your_cart .price_box > div:last-of-type{
                width: 59%;
            }

            .additionally_cart .price_box > div:last-of-type p,
            .your_cart .price_box > div:last-of-type p{
                font-family: 'DINEngschrift LT', sans-serif;
                font-weight: 400;
                font-size: 16px !important;
                line-height: 110% !important;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #0C0B0B;
                margin: 0 0 5px;
            }

            .additionally_cart .price_box > div:last-of-type span:last-of-type,
            .your_cart .price_box > div:last-of-type span:last-of-type{
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 130%;
                text-decoration-line: line-through;
                color: #999999;
            }

            .additionally_cart .price_box > div:last-of-type span:first-of-type,
            .your_cart .price_box > div:last-of-type span:first-of-type{
                font-family: "Roboto", sans-serif;
                font-weight: 700;
                font-size: 14px;
                line-height: 130%;
                color: #FF3C7F;
                margin-right: 4px;
            }

            .additionally_cart .progress_bar{
                text-align: center;
                margin-top: 16px;
            }

            .additionally_cart .progress_bar span{
                width: 24px;
                height: 24px;
                border-radius: 50%;
                padding: 3px 8px;
                font-family: "Roboto", sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                z-index: 2;
            }

            .additionally_cart .progress_bar span:first-of-type{
                color: #FFFFFF;
                background: #FF3C7F;
                position: relative;
                margin-right: 16px;
            }

            .additionally_cart .progress_bar span:last-of-type{
                color: #4A4A4A;
                background: #EEE3E3;
            }

            .additionally_cart .progress_bar span:first-of-type::after{
                position: absolute;
                content: "";
                width: 100%;
                height: 2px;
                background: #EEE3E3;
                top: 50%;
                transform: translateY(-50%);
                left: 25px;
                z-index: 1;
            }

            .additionally_cart .btn_wrap{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
            }

            .additionally_cart .btn_wrap > a:not(a.scroll_svg){
                height: 46px;
                width: 48%;
                font-size: 14px !important;
                line-height: 16px;
                letter-spacing: 0.05em;
            }

            .additionally_cart .btn_wrap > a:first-of-type{
                color: #FF3C7F !important;
                background: #FFFFFF;
                border: 1px solid #FF3C7F;
            }

            .additionally_cart > div > p{ 
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 17px !important;
                line-height: 118% !important;
                color: #181717;
                margin: 12px auto 14px;
                text-align: center;
                max-width: 315px; 
            }

            .additionally_cart > div > ul{ 
                color: #FF3C7F; 
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin: 0;
            } 

            .additionally_cart > div > ul li + li{ 
                margin-top: 8px; 
            } 

            .additionally_cart > div > ul li > p{ 
                font-family: "Roboto", sans-serif; 
                font-weight: 400;
                font-size: 14px !important; 
                line-height: 130% !important; 
                color: #212529; 
                margin: 0;
            }
            .additionally_cart #BuzzPacks.price_box > div.img_box{
                height: 108px;
                max-width: 120px;
            }
            
        </style>
      `
      let newRreviewsBox = /*html */ `
        <div class="new_reviews_box">            
            <a href="#scrollAddBtn">Add to cart</a>

            <div>
                <div class="img_box">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/upsell_1.png" alt="">
                </div>
                <div>
                    <p>Rated <br> <b>Excellent</b></p>
                    <p>Reviews 233</p>
                    <div class="img_box">
                        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/upsell_2.png" alt="">
                    </div>
                </div>
            </div>
        </div>
            `

      let cartBox = /*html */ `
        <div class="cart_box" id="scrollAddBtn">
          <div class="your_cart">
            <h2>Your cart</h2>
  
            <div class="price_box" id='BuzzPacks'>
                <div class="img_box">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/upsell_3.png" alt="">
                </div>
                <div>
                    <p>3 BuzzPatch Packs</p>
                    <span>$41.85</span>
                    <span>$84.00</span>
                </div>
            </div>
          </div>
          <div class="additionally_cart" id="scrollSvg">
                <p>You will now be protected from mosquito bites. But just in case you get <span>an unexpected bite</span>, try our popular instant each relief.</p>

                <div class="drop_down_cart">
                    <div class="text_absolute">
                        <span>40%</span>
                        <span>off</span>
                    </div>

                    <div class="price_box" id='MagicPacks'>
                        <div class="img_box">
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/upsell_4.png" alt="">
                        </div>
                        <div>
                            <p>MagicPatch itch relief patches <br> - 60 patches in 1 pack</p>
                            <span>$14.99</span>
                            <span>$24.99</span>
                        </div>
                    </div>

                    <p>Place the patch on the area with a mosquito bite to experience instant relief:</p>
                    <ul>
                        <li>
                            <p>Instantly stop the itching</p>
                        </li>
                        <li>
                            <p>100% natural & chemical free</p>
                        </li>
                        <li>
                            <p>Safe for kids 0+ years old</p>
                        </li>
                        <li>
                            <p>Effective up to 7 days</p>
                        </li>
                    </ul>     
                    
                    <div class="btn_wrap">
                        <a href="#scrollAddBtn">no, thanks</a>
                        <a href="#">Add to cart</a>
                    </div>
                </div>
                <a href="#scrollSvg" class="scroll_svg">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3154 13.2627L17.6461 18.5934C17.8413 18.7886 18.1579 18.7886 18.3532 18.5934L23.6839 13.2627" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.3154 18.4736L17.6461 23.8043C17.8413 23.9996 18.1579 23.9996 18.3532 23.8043L23.6839 18.4736" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="18" cy="18" r="17" stroke-width="2"/>
                  </svg>
                </a>
            </div>
                
        </div>
        `
      document.head.insertAdjacentHTML("beforeend", cartBoxStyle)
      document.querySelector(".prices").insertAdjacentHTML("afterend", newRreviewsBox)
      document.querySelector("#getNow").insertAdjacentHTML("afterend", cartBox)

      if (document.querySelector(".cart_box")) {
        document.querySelector(".cart_box").after(document.querySelector("#addToCart"))

        getCartPrice()

        scrolling(".new_reviews_box a")
        scrolling(".cart_box .additionally_cart > a.scroll_svg")
        scrolling(".additionally_cart .btn_wrap > a:first-of-type")

        //your cart price
        function getCartPrice() {
          let salePrice = document.querySelector(".js-total .pr").textContent
          let oldPrice = document.querySelector(".js-strike .rp").textContent
          let countVal = document.querySelector(".js-packs input[type=radio]:checked+label").textContent.split(" ")[0]
          let text = "BuzzPatch Packs"
          let upsellSalePrice = document.querySelector(".js-packs label[for=radios-3] span").textContent.split(" ")[0]
          let imgSrc = ""

          document.querySelector(".your_cart #BuzzPacks.price_box > div:last-of-type span:first-of-type").textContent = `$${salePrice}`
          document.querySelector(".your_cart #BuzzPacks.price_box > div:last-of-type span:last-of-type").textContent = `$${oldPrice}`

          document.querySelector(".additionally_cart #MagicPacks.price_box > div:last-of-type span:first-of-type").textContent = upsellSalePrice

          if (upsellSalePrice === "$14.99") {
            document.querySelector(".additionally_cart #MagicPacks.price_box > div:last-of-type span:last-of-type").textContent = "$24.99"
          } else {
            document.querySelector(".additionally_cart #MagicPacks.price_box > div:last-of-type span:last-of-type").textContent = "$31.00"
          }

          if (countVal === "1") {
            text = "BuzzPatch Pack"
            imgSrc =
              "//cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_180x120.jpg?v=1631505264 180w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_360x240.jpg?v=1631505264 360w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_540x360.jpg?v=1631505264 540w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_720x480.jpg?v=1631505264 720w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_900x600.jpg?v=1631505264 900w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_1080x720.jpg?v=1631505264 1080w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_1296x864.jpg?v=1631505264 1296w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_1512x1008.jpg?v=1631505264 1512w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_1728x1152.jpg?v=1631505264 1728w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-1packs_2048x1365.jpg?v=1631505264 2048w"
          }

          if (countVal === "") {
            countVal = document.querySelector(".js-packs input[type=radio]:checked+label").textContent.split(" ")[1]
          }

          if (countVal === "2") {
            imgSrc =
              "//cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_180x120.jpg?v=1631505264 180w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_360x240.jpg?v=1631505264 360w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_540x360.jpg?v=1631505264 540w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_720x480.jpg?v=1631505264 720w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_900x600.jpg?v=1631505264 900w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_1080x720.jpg?v=1631505264 1080w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_1296x864.jpg?v=1631505264 1296w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_1512x1008.jpg?v=1631505264 1512w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_1728x1152.jpg?v=1631505264 1728w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-2packs_2048x1365.jpg?v=1631505264 2048w"
          }

          if (countVal === "3") {
            imgSrc =
              "//cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_180x120.jpg?v=1631505264 180w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_360x240.jpg?v=1631505264 360w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_540x360.jpg?v=1631505264 540w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_720x480.jpg?v=1631505264 720w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_900x600.jpg?v=1631505264 900w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_1080x720.jpg?v=1631505264 1080w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_1296x864.jpg?v=1631505264 1296w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_1512x1008.jpg?v=1631505264 1512w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_1728x1152.jpg?v=1631505264 1728w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-3packs_2048x1365.jpg?v=1631505264 2048w"
          }

          if (countVal === "4") {
            imgSrc =
              "//cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_180x120.jpg?v=1631505264 180w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_360x240.jpg?v=1631505264 360w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_540x360.jpg?v=1631505264 540w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_720x480.jpg?v=1631505264 720w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_900x600.jpg?v=1631505264 900w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_1080x720.jpg?v=1631505264 1080w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_1296x864.jpg?v=1631505264 1296w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_1512x1008.jpg?v=1631505264 1512w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_1728x1152.jpg?v=1631505264 1728w, //cdn.shopify.com/s/files/1/0387/0749/4956/products/Buzzpatch-4packs_2048x1365.jpg?v=1631505264 2048w"
          }

          document.querySelector(".your_cart #BuzzPacks.price_box > div.img_box img").src = imgSrc
          document.querySelector(".your_cart #BuzzPacks.price_box > div:last-of-type p").textContent = `${countVal} ${text}`
        }

        // js scrolling
        function scrolling(upSelector) {
          let links = document.querySelectorAll(upSelector),
            speed = 0.9

          links.forEach((link) => {
            link.addEventListener("click", function (event) {
              event.preventDefault()

              if (upSelector === ".new_reviews_box a") {
                pushDataLayer("Click to Add to cart button", "Main CTA button")

                document.querySelector(".cart_box").style.display = "block"
                document.querySelector("#addToCart").style.display = "flex"
              }

              if (upSelector === ".additionally_cart .btn_wrap > a:first-of-type") {
                pushDataLayer("Click to no thanks button", "Need instant section")

                document.querySelector(".additionally_cart").style.display = "none"
              }

              if (upSelector === ".cart_box .additionally_cart > a.scroll_svg") {
                document.querySelector(".drop_down_cart").classList.toggle("show_var")

                if (document.querySelector(".drop_down_cart").classList.contains("show_var")) {
                  pushDataLayer("Click to Wrap out arrow")

                  this.hash = "#scrollSvg"
                  document.querySelector(".cart_box .additionally_cart > a.scroll_svg svg").style.transform = "rotate(180deg)"
                  document.querySelector(".cart_box .additionally_cart > a.scroll_svg svg").style.stroke = "rgba(255, 60, 129, 0.5)"
                } else {
                  pushDataLayer("Click to Wrap up arrow")

                  this.hash = "#scrollAddBtn"
                  document.querySelector(".cart_box .additionally_cart > a.scroll_svg svg").style.transform = "rotate(0deg)"
                  document.querySelector(".cart_box .additionally_cart > a.scroll_svg svg").style.stroke = "#FF3C82"
                }
              }

              let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top - 87,
                start = null

              requestAnimationFrame(step)

              function step(time) {
                if (start === null) {
                  start = time
                }

                let progress = time - start,
                  r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

                document.documentElement.scrollTo(0, r)

                if (r != widthTop + toBlock) {
                  requestAnimationFrame(step)
                } else {
                  // console.log(`hash`)
                }
                location.hash = hash
              }
            })
          })
        }

        let idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value

        // click on btn
        document.querySelector(".additionally_cart .btn_wrap > a:last-of-type").addEventListener("click", function (e) {
          e.preventDefault()
          pushDataLayer("Click to add to cart button", "Need instant section")
          addToCart(idValue)
        })

        document.querySelector("a#addToCart").addEventListener("click", function (e) {
          e.preventDefault()
          pushDataLayer("Click to Proceed to checkout button")
          addToCart(idValue, "Checkout without Upsell")
        })

        // observer
        let observer = new MutationObserver(() => {
          if (document) {
            observer.disconnect()
            getCartPrice()

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

        //add to cart and checkout
        async function addToCart(idValue, parent = "") {
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

        pushDataLayer("loaded")
        clarity("set", "upsell_hypothesis_1V2", "variant_1")
      }
    }
  }, 10)
}
