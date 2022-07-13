let startFunkReview = setInterval(() => {
  if (document.querySelector("#mainContent")) {
    clearInterval(startFunkReview)

    let scriptCustom = document.createElement("script")
    scriptCustom.src = "https://conversionratestore.github.io/projects/buzzpatch/zuck_fix_v2.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    let scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.3.0/zuck.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)

    let scriptSnapgramStyle = document.createElement("link")
    scriptSnapgramStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/zuck.js/1.3.0/skins/snapgram.css"
    scriptSnapgramStyle.rel = "stylesheet"
    document.head.appendChild(scriptSnapgramStyle)

    //----------------------------------------------------------------------------------------------------
    let scriptCustomImg = document.createElement("script")
    scriptCustomImg.src = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"
    scriptCustomImg.async = false
    document.head.appendChild(scriptCustomImg)

    let scriptCustomImgStyle = document.createElement("link")
    scriptCustomImgStyle.href = "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"
    scriptCustomImgStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomImgStyle)

    // event
    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Review hypothesis`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Review hypothesis`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let styleReveiw = /* html */ `
      <style>
        .trust-rating .stars .text{
            border-bottom: 1px solid #000000;
            font-weight: 700 !important;
            font-size: 13px !important;
            line-height: 16px !important;
        }
        
        #zuck-modal{
          z-index: 999999999999999 !important;
        }

        #zuck-modal-content .story-viewer .head .right .close{
          display: block !important;
          color: #FFFFFF !important;
          opacity: 1 !important;
          height: 100%;
          font-weight: 400;
          margin-top: 16px;
          font-size: 21px !important;
        }

        #zuck-modal.with-effects{
          position: fixed !important;
        }

        #zuck-modal-content .story-viewer .head .right .close > svg{
          top: 24px !important;
          position: absolute !important;
          right: 15px !important;
        }

        #zuck-modal-content .story-viewer .head {
          display: flex;
          justify-content: space-between;
        }        
        
        #zuck-modal-content .story-viewer .head .left{
          display: none !important;
        }

        #zuck-modal-content .story-viewer .head .right{
          float: unset !important;
          width: 48px;
          height: 42px;
          margin: 0 0 0 auto;
        }

        #zuck-modal-content .story-viewer.with-back-button .head .left > .back{
          color: #FFFFFF !important;
          font-size: 32px !important;
        }

        #zuck-modal-content .story-viewer.with-back-button .head .left .img{
          display: none;
        }

        footer .js-logo img{
            margin-top: 0 !important;
        }

        #judgeme_product_reviews .jdgm-rev-widg{
            padding-top: 0 !important;
            margin-top: 0 !important;
        }

        #judgeme_product_reviews .jdgm-rev-widg .jdgm-rev-widg__title{
            display: none;
        }

        /*block_first */
        .block_first{
            margin: 10px 0 0;
            padding: 0;
        }

        .block_first > p{
            font-weight: 400;
            font-size: 12px !important;
            line-height: 16px !important;
            color: #515151;
            margin-bottom: 5px;
        }

        .block_first > div{
            display: flex;
            align-items: center;
            color: #0E0C0C;
        }

        .block_first > div span:nth-child(1){
            font-weight: 700;
            font-size: 18px;
            line-height: 156%;
            margin-right: 10px;
        }

        .block_first > div span:nth-child(3){
            font-weight: 400;
            font-size: 12px;
            line-height: 133%;
            text-decoration-line: underline;
            margin-left: 5px;
        }

        .block_first > ul{
            display: flex;
            margin: 0 !important;
            align-items: center;
            justify-content: space-between;
            gap: 5px;
        }

        .block_first > ul li{
            max-width: 65px;
            max-height: 65px;
            width: 100%;
            height: 100%;
            margin: 0 !important;
        }

        .block_first > ul li img{
            width: 100%;
            height: 100%;
            margin: 0;
        }

        /* block_second*/
        .block_second{
            margin: 0 22px 64px;
        }

        .block_second > h2,
        .block_third > h2 {
            font-weight: 500;
            font-size: 36px;
            line-height: 100%;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 15px;
            text-align: center;
        }

        .block_second ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin: 0;
        }

        .block_second > ul > li{
            border-radius: 50%;
            list-style: none;
            width: 75px;
            height: 75px;
            background: #FFFFFF;
            border: 3px solid #FF3C7F;
            position: relative;
        }

        .stories.carousel .story>a u{
            position: relative;
        }

        .stories.carousel .story>a u::before{
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('https://conversionratestore.github.io/projects/buzzpatch/img/play_arrow.png');
        }

        #zuck-modal-content .story-viewer .head .right .time,
        .block_second.var_second h2 {
          display: none;
        }

        .block_second.var_second{
            margin: 0 7px;
        }

         /*block_third */
        .block_third {
            margin: 64px 30px 0;
        }

        .block_third ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            margin: 0;
        }

        .block_third ul li{
            list-style: none;
            width: 30%;
        }

        .block_third ul li img{
            width: 100%;
            height: 100%;
        }

        #getNow img{
          max-width: 320px !important;
        }

        #getNow > img:not(.new_img_review){
          display: none;
        }

        .block_third.var_second{
            margin: 14px 22px 0;
        }
        
        #getNow .new_img_review_box{
            margin: 20px 18px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 43px;
        }

        #getNow .new_img_review_box >img{
            margin: 0 !important;
        }

        #getNow .new_img_review_box >img:nth-child(1){
            max-width: 76px !important;
        }

        #getNow .new_img_review_box >img:nth-child(2){
            max-width: 200px !important;
        }


         @media (max-width: 320px){
            .block_first > div span:nth-child(1){
                font-size: 16px;
            }

            .block_second > ul > li{
                width: 60px;
                height: 60px;
            }

            .block_third ul li{
                width: 28%;
            }

            .trust-rating .stars .text{
              font-size: 10px !important;
            }

            #getNow .new_img_review_box >img:nth-child(2){
              max-width: 158px !important;
            }

            #getNow .new_img_review_box >img:nth-child(1) {
                max-width: 62px !important;
            }
         }

      </style>
      `

    let blockFirst = /* html */ `
    <div class="block_first">
      <ul>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review1.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review2.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review3.jpg" alt="child" /></li>
        <li><img src="https://conversionratestore.github.io/projects/buzzpatch/img/review4.jpg" alt="child" /></li>
      </ul>
    </div>
    `

    let blockSecond = /* html */ `
    <div class="block_second">
        <h2>Video Reviews</h2>
        <ul id="stories"></ul>
    </div>    
    `

    let blockThird = /* html */ `
<div class="block_third">
    <h2>See it in real life</h2>
    <ul>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review5_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review5.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review6_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review6.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review7_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review7.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review8_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review8.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review9_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review9.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review10_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review10.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review11_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review11.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review12_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review12.jpg" alt="people">
        </li>
        <li data-fancybox="demo" data-src="https://conversionratestore.github.io/projects/buzzpatch/img/review13_1.jpg">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/review13.jpg" alt="people">
        </li>
    </ul>
</div>
`

    document.head.insertAdjacentHTML("beforeend", styleReveiw)
    document.querySelector(".js-heading .trust-rating .stars")?.insertAdjacentHTML("afterend", blockFirst)

    document.querySelector("#flowers")?.insertAdjacentHTML("afterbegin", blockSecond)
    document.querySelector("#reviews .js-title.text-dark")?.insertAdjacentHTML("afterend", blockSecond)

    if (document.querySelector("#reviews .container .block_second")) {
      document.querySelector("#reviews .container .block_second").classList.add("var_second")
      document.querySelector("#reviews .container .block_second ul").setAttribute("id", "storiesVarSecond")
    }

    if (document.querySelector(".trust-rating .stars .text")) {
      document.querySelector(".trust-rating .stars .text").textContent = "See reviews (699)"
    }

    document.querySelector("#ingredients")?.insertAdjacentHTML("beforebegin", blockThird)
    document.querySelector("#reviews .container")?.insertAdjacentHTML("beforeend", blockThird)

    if (document.querySelector("#reviews .container .block_third")) {
      document.querySelector("#reviews .container .block_third").classList.add("var_second")
    }

    document.querySelector(".js-iphone .grey")?.insertAdjacentHTML(
      "beforeend",
      `<div class="new_img_review_box">
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/day_guarantee.png" alt="day_guarantee">
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/new_rating.png" alt="new_rating">
    </div>
    `
    )

    //click on block_first and new_img_review_box
    scrolling(".trust-rating")
    scrolling("#getNow .new_img_review_box >img:nth-child(2)")

    // Pure js scrolling
    function scrolling(upSelector) {
      // Scrolling with raf
      let links = document.querySelectorAll(upSelector)

      links.forEach((link) => {
        link.addEventListener("click", function (event) {
          event.preventDefault()
          if (link.closest("div").classList.contains("new_img_review_box")) {
            pushDataLayer("click on Reviews 'SELECT PACKAGE'")
          } else {
            pushDataLayer("click on Reviews")
          }

          const scrollTarget = document.getElementById("reviews")

          const topOffset = 105
          const elementPosition = scrollTarget.getBoundingClientRect().top
          const offsetPosition = elementPosition - topOffset

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          })
        })
      })
    }

    //play video insta
    let videoInsta = setInterval(() => {
      if (document.querySelector("#stories") && typeof Zuck === "function") {
        clearInterval(videoInsta)
        function buildItem(id, type, src, seen) {
          return {
            id,
            type,
            src,
            seen,
          }
        }

        const stories = new Zuck("stories", {
          skin: "snapgram",
          avatars: true,
          backNative: true,
          list: false,
          openEffect: "false",
          cubeEffect: true,
          backButton: true,
          localStorage: true,
          previousTap: true,
          reactive: true,
          callbacks: {
            onOpen: function (storyId, callback) {
              // on open story viewer
              pushDataLayer("click on video review", `video_${storyId}`)
              callback()
            },
            onView(storyId) {
              // on view story
              pushDataLayer(`video review loaded_${storyId}`)
            },
            onClose(storyId, callback) {
              callback() // on close story viewer
              pushDataLayer(`click on btn close video_${storyId}`)
              setTimeout(() => {
                const scrollTarget = document.querySelector(".js-iphone .wave-bg")
                const topOffset = 90
                const elementPosition = scrollTarget.getBoundingClientRect().top
                const offsetPosition = elementPosition - topOffset

                window.scrollBy({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }, 400)
            },
          },
          stories: [
            {
              id: "1",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review1_1.jpg",
              items: [buildItem("11", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/youngwildandfriedl.mp4", false)],
            },
            {
              id: "2",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review2.jpg",
              items: [buildItem("21", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/paosfitmomlife.mp4", false)],
            },
            {
              id: "3",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review3.jpg",
              items: [
                buildItem("31", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-1.mp4", false),
                buildItem("32", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-2.mp4", false),
              ],
            },
            {
              id: "4",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review4.jpg",
              items: [buildItem("41", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/allthngsmely.mp4", false)],
            },
          ],
        })

        const storiesVarSecond = new Zuck("storiesVarSecond", {
          skin: "snapgram",
          avatars: true,
          backNative: true,
          list: false,
          openEffect: "false",
          cubeEffect: true,
          backButton: true,
          localStorage: true,
          previousTap: true,
          reactive: true,
          callbacks: {
            onOpen: function (storyId, callback) {
              // on open story viewer
              pushDataLayer("click on video review_var_second", `video_${storyId}`)
              callback()
            },
            onView(storyId) {
              // on view story
              pushDataLayer(`video review_var_second loaded_${storyId}`)
            },
            onClose(storyId, callback) {
              callback() // on close story viewer
              pushDataLayer(`click on btn close video_var_second_${storyId}`)
              setTimeout(() => {
                const scrollTarget = document.querySelector("#reviews")
                const topOffset = 110
                const elementPosition = scrollTarget.getBoundingClientRect().top
                const offsetPosition = elementPosition - topOffset

                window.scrollBy({
                  top: offsetPosition,
                  behavior: "smooth",
                })
              }, 400)
            },
          },
          stories: [
            {
              id: "1",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review1_1.jpg",
              items: [buildItem("11", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/youngwildandfriedl.mp4", false)],
            },
            {
              id: "2",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review2.jpg",
              items: [buildItem("21", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/paosfitmomlife.mp4", false)],
            },
            {
              id: "3",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review3.jpg",
              items: [
                buildItem("31", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-1.mp4", false),
                buildItem("32", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/blessed_by_brynn-2.mp4", false),
              ],
            },
            {
              id: "4",
              photo: "https://conversionratestore.github.io/projects/buzzpatch/img/video_review4.jpg",
              items: [buildItem("41", "video", "https://conversionratestore.github.io/projects/buzzpatch/video/allthngsmely.mp4", false)],
            },
          ],
        })
      }
    }, 20)

    // full Size Img
    let fullImg = setInterval(() => {
      if (typeof Fancybox === "function") {
        clearInterval(fullImg)

        Fancybox.bind("[data-fancybox]", {
          // on: {
          //   done: (fancybox, slide) => {
          //     pushDataLayer("'photo review loaded", `photo_${slide.index + 1}`)
          //   },
          // },
        })

        document.querySelectorAll("[data-fancybox]").forEach((el, i) => {
          el.addEventListener("click", function () {
            if (el.closest("div").classList.contains("var_second")) {
              pushDataLayer("click on photo review_var_second", `photo_${i + 1}`)
            } else {
              pushDataLayer("click on photo review", `photo_${i + 1}`)
            }
          })
        })
      }
    }, 10)

    pushDataLayer("loaded")
    clarity("set", `review_hypothesis`, "variant_1")
  }
}, 10)
