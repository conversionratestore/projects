if (window.innerWidth <= 768) {
  let startfunkMobUpsell = setInterval(() => {
    if (document.querySelector(".prices")) {
      clearInterval(startfunkMobUpsell)
      console.log(`first`)

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
            }

            .new_reviews_box a,
            .cart_box a{
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
                margin-top: 44px;
            }

            .new_reviews_box > div{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 24px 0 6px;
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
                padding: 12px 8px;
                width: 100%;
            }

            .your_cart{
                background: #FAFAFA;
                border: 1px solid #E6E6E6;
                border-radius: 5px;
                padding: 24px 8px 16px;
            }

            .your_cart h2{
                font-family: 'Segoe UI', sans-serif;
                font-weight: 700 !important;
                font-size: 24px !important;
                line-height: 32px;
                letter-spacing: 0.02em !important;
                color: #333333 !important;
                margin-bottom: 12px !important;
                text-align: center;
                text-transform: unset;
            }

            .your_cart h3{
                font-weight: 600;
                font-size: 36px;
                line-height: 42px;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #0C0B0B;
                margin: 16px 0 10px;
                text-align: center;
            }

            .your_cart > div:not(.progress_bar){
                padding: 16px 8px;
                background: #FFFFFF;
                border: 1px solid #ECEEF0;
                box-sizing: border-box;
                box-shadow: 0px 2px 4px rgb(12 11 11 / 10%), 0px 12px 32px rgb(0 0 0 / 5%);
                border-radius: 6px;
            }

            .your_cart > div:last-of-type{
                position: relative;
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

            .your_cart .price_box{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .your_cart .price_box .img_box{
                width: 39%;
            }

            .your_cart .price_box > div:last-of-type{
                width: 59%;
            }

            .your_cart .price_box > div:last-of-type p{
                font-weight: 400;
                font-size: 16px !important;
                line-height: 110% !important;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #0C0B0B;
                margin: 0 0 5px;
            }

            .your_cart .price_box > div:last-of-type span:last-of-type{
                font-family: "Roboto", sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 130%;
                text-decoration-line: line-through;
                color: #999999;
            }

            .your_cart .price_box > div:last-of-type span:first-of-type{
                font-family: "Roboto", sans-serif;
                font-weight: 700;
                font-size: 14px;
                line-height: 130%;
                color: #FF3C7F;
                margin-right: 4px;
            }

            .your_cart .progress_bar{
                text-align: center;
                margin-top: 16px;
            }

            .your_cart .progress_bar span{
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

            .your_cart .progress_bar span:first-of-type{
                color: #FFFFFF;
                background: #FF3C7F;
                position: relative;
                margin-right: 16px;
            }

            .your_cart .progress_bar span:last-of-type{
                color: #4A4A4A;
                background: #EEE3E3;
            }

            .your_cart .progress_bar span:first-of-type::after{
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

            .your_cart .btn_wrap{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 13px;
            }

            .your_cart .btn_wrap > a{
                height: 46px;
                width: 48%;
                font-size: 14px !important;
                line-height: 16px;
                letter-spacing: 0.05em;
            }

            .your_cart .btn_wrap > a:first-of-type{
                color: #FF3C7F !important;
                background: #FFFFFF;
                border: 1px solid #FF3C7F;
            }

            .your_cart > div > p{ 
                font-family: 'Segoe UI', sans-serif;
                font-weight: 600;
                font-size: 18px !important;
                line-height: 23px !important;
                color: #333333;
                margin: 12px auto 8px;
                text-align: center;
                max-width: 266px; 
            }

            .your_cart > div > ul{ 
                color: #FF3C7F; 
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                margin: 0;
            } 

            .your_cart > div > ul li + li{ 
                margin-top: 8px; 
            } 

            .your_cart > div > ul li > p{ 
                font-family: "Roboto", sans-serif; 
                font-weight: 400;
                font-size: 14px !important; 
                line-height: 130% !important; 
                color: #212529; 
                margin: 0;
            }
            
        </style>
      `
      let newRreviewsBox = /*html */ `
        <div class="new_reviews_box">            
            <a href="#scrollAddBtn">Add to cart</a>

            <div id="scrollAddBtn">
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
        <div class="cart_box">
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

                <div class="progress_bar">
                    <span>1</span>
                    <span>2</span>
                </div>

                <h3>Need instant itch <br> relief?</h3>

                <div>
                    <div class="text_absolute">
                        <span>40%</span>
                        <span>off</span>
                    </div>

                    <div class="price_box">
                        <div class="img_box">
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/upsell_4.png" alt="">
                        </div>
                        <div>
                            <p>MagicPatch itch relief patches <br> - 60 patches in 1 pack</p>
                            <span>$14.99</span>
                            <span>$24.99</span>
                        </div>
                    </div>

                    <div class="btn_wrap">
                        <a href="#">no, thanks</a>
                        <a href="#">Add to cart</a>
                    </div>

                    <p>Place patch on skin with a bite to stop the itching instantly.</p>
                    <ul>
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
                </div>
            </div>
                
        </div>
        `
      document.head.insertAdjacentHTML("beforeend", cartBoxStyle)
      document.querySelector(".prices").insertAdjacentHTML("afterend", newRreviewsBox)
      document.querySelector("#getNow").insertAdjacentHTML("afterend", cartBox)

      if (document.querySelector(".cart_box")) {
        document.querySelector(".cart_box").after(document.querySelector("#addToCart"))

        document.querySelector(".your_cart .btn_wrap > a:first-of-type").addEventListener("click", function (e) {
          e.preventDefault()
          document.querySelector("#addToCart").click()
        })
      }

      getCartPrice()
      scrolling(".new_reviews_box a")

      //your cart price
      function getCartPrice() {
        let salePrice = document.querySelector(".js-total .pr").textContent
        let oldPrice = document.querySelector(".js-strike .rp").textContent
        let countVal = document.querySelector(".js-packs input[type=radio]:checked+label").textContent.split(" ")[0]
        let text = "BuzzPatch Packs"

        document.querySelector(".your_cart #BuzzPacks.price_box > div:last-of-type span:first-of-type").textContent = `$${salePrice}`
        document.querySelector(".your_cart #BuzzPacks.price_box > div:last-of-type span:last-of-type").textContent = `$${oldPrice}`

        if (countVal === "1") {
          text = "BuzzPatch Pack"
        }

        if (countVal === "") {
          countVal = document.querySelector(".js-packs input[type=radio]:checked+label").textContent.split(" ")[1]
        }

        document.querySelector(".your_cart #BuzzPacks.price_box > div:last-of-type p").textContent = `${countVal} ${text}`
      }

      // js scrolling
      function scrolling(upSelector) {
        let links = document.querySelectorAll(upSelector),
          speed = 0.5

        links.forEach((link) => {
          link.addEventListener("click", function (event) {
            event.preventDefault()

            let widthTop = document.documentElement.scrollTop,
              hash = this.hash,
              toBlock = document.querySelector(hash).getBoundingClientRect().top,
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
                location.hash = hash
              }
            }
          })
        })
      }

      // observer
      let observer = new MutationObserver(() => {
        if (document) {
          observer.disconnect()
          getCartPrice()
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

      document.querySelector(".your_cart .btn_wrap > a:last-of-type").addEventListener("click", function (e) {
        e.preventDefault()
        addToCart()
      })

      //add to cart and checkout
      let idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value
      function addToCart() {
        fetch("/cart/clear.js", {
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

        setTimeout(() => {
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

          fetch("/cart/add.js", {
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

          window.location.pathname = "/checkout"
        }, 100)
      }
    }
  }, 10)
}
