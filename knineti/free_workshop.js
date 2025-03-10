let startFunc = setInterval(() => {
  if (document.querySelector("#player")) {
    clearInterval(startFunc)

    myFunk()

    function myFunk() {
      let linkCustom = document.createElement("link")
      linkCustom.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
      linkCustom.rel = "stylesheet"
      document.head.appendChild(linkCustom)

      let scriptCustom = document.createElement("script")
      scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
      scriptCustom.async = false
      document.body.appendChild(scriptCustom)

      let styleFreeWorkShop = /*html */ `
        <style>
            #demo1 .item_mc{
                height: 0;
            }

            .main > section .container-fluid{

                margin: 0;
                padding: 0;
            }
            .main > section .banner_txt{
                width: 100% !important;
                position: unset !important;
            }
            .main > section{
                background: #DFE8F0;

                justify-content: center;
                padding: 60px 15px 35px;
            }

            .main > section .row.flowplayer_breed_vdo, .main > section .row.flowplayer_breed_vdo .col-md-12{
                padding: 0;
                margin: 0;
            }

            .main > section .banner_txt{
            padding: 0 !important;
            }

            #player .fp-ratio{
              padding-top: 56% !important;
            }

            .main > section .row{
              margin: 0 !important;

            }

            #myCarousel{
                float: unset !important;
            }

            .free_work_shop_box{
                width: 100%;
                background: #dde8f1;
                max-width: 984px;
                margin: 0 auto;
            }
            
            .free_work_shop_container{
                width: 100%;
                padding: 40px 0 60px;
            }

            .free_work_shop_box .title_block{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .free_work_shop_box .title_block h2{
                font-family: 'Open Sans', sans-serif;
                font-weight: 800;
                font-size: 14px;
                line-height: 19px;
                text-transform: uppercase;
                color: #1D3871;
            }

            .free_work_shop_box .title_block span{
                font-family: 'Open Sans', sans-serif;
                font-weight: 700;
                font-size: 12px;
                line-height: 16px;
                text-transform: uppercase;
                color: #FFFFFF;
                background: #1D3871;
                border-radius: 2px;
                padding: 2px 6px;
                margin-bottom: 12px;
            }

            .free_work_shop_box .timeline{
                border: 1px solid #734F21;
                border-radius: 2px;
                position: relative;
                opacity: 0;
                background: #dde8f1;
                padding-left: 15px;
                padding-right: 15px;
            }

            .free_work_shop_box .timeline_container {
                display: flex;
                background: linear-gradient(90deg, #DFE8F0 1.63%, rgba(223, 232, 240, 0) 17.13%);
                position: relative;
            }

            .free_work_shop_box .timeline_container::after{
                position: absolute;
                content:'';
                top: 45px;
                left: 0;
                background: #1D3871;
                border-radius: 21px;
                width: 100%;
                height: 3px;
            }

            .timeline button {
                height: 100%;
                width: 30px;
                background: #dde8f1 no-repeat center / 10px;
                border: none;
                flex-shrink: 0;
                display: block;
                cursor: pointer;
                position: absolute;
                top: 0; 
                z-index: 2;
                border-right: 1px solid #734F21;
                border-left: 1px solid #734F21;
            }
            
            .timeline button.button-next:before {
                content: '';
                position: absolute;
                top: 0;
                width: 400px;
                height: 100%;
                pointer-events: none;
                right: calc(100% + 1px);
                background: linear-gradient(90deg, #DFE8F0 1.63%, rgba(223, 232, 240, 0) 17.13%);
                transform: matrix(-1, 0, 0, 1, 0, 0);
            }

            .timeline button.button-prev:before {
                content: '';
                position: absolute;
                top: 0;
                width: 400px;
                height: 100%;
                pointer-events: none;
                left: calc(100% + 1px);
                background: linear-gradient(90deg, #DFE8F0 1.63%, rgba(223, 232, 240, 0) 17.13%);
            }

            .timeline button[disabled] {
                opacity: 0;
                pointer-events: none;
            }

            .timeline button.button-prev {
                left: -16px;
                border-radius: 2px 0 0 2px;
                background-image: url("https://conversionratestore.github.io/projects/knineti/img/button_prev.svg");
            }

            .timeline button.button-next {
                right: -16px;
                border-radius: 0 2px 2px 0;
                background-image: url("https://conversionratestore.github.io/projects/knineti/img/button_next.svg");
            }

            .tns-outer {
                width: 100%;
            }

            .free_work_shop_box p.timeline_clock{
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 0.1em;
                color: #1D3871 !important;
                margin-bottom: 35px;
            }

            .slide[data-point="1"] p.timeline_clock, .slide[data-point="15"] p.timeline_clock{
                color: #808080 !important;
            }

            .free_work_shop_box .timeline_title{
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                color: #1D3871;
                max-width: 197px;
                position: relative;
                padding-left: 11px;
                display: block;
                text-align: left;
            }

            .slide[data-point="2"] .timeline_title, 
            .slide[data-point="4"] .timeline_title,
            .slide[data-point="6"] .timeline_title,
            .slide[data-point="8"] .timeline_title,
            .slide[data-point="14"] .timeline_title {
                text-transform: uppercase !important;
                font-weight: 800 !important;
            }

            .timeline_title::after{
                content: "";
                top: 0;
                left: 0;
                position: absolute;
                background: #1D3871;
                border-radius: 2px;
                width: 3px;
                height: 100%;
            }

            .timeline_title::before{
                z-index: 55;
                content: "";
                top: -31px;
                left: -1px;
                position: absolute;
                background: #1D3871;
                border: 2px solid #FFFFFF;
                border-radius: 3px;
                width: 6px;
                height: 11px;
            }

            .slide[data-point="1"] .timeline_title::before,
            .slide[data-point="15"] .timeline_title::before,
            .slide[data-point="1"] .timeline_title::after,
            .slide[data-point="15"] .timeline_title::after{
                content: unset !important;
            }

            .slide {
                padding-top: 6px;
                padding-bottom: 30px;
                padding-left: 2px;
            }

            .slide[data-point="1"]{
                padding-right: 31px;
            }

            .slide[data-point="2"]{
                padding-right: 51px;
            }

            .slide[data-point="3"]{
                padding-right: 61px;
            }

            .slide[data-point="4"]{
                padding-right: 30px;
            }

            .slide[data-point="5"]{
                padding-right: 127px;
            }

            .slide[data-point="6"]{
                padding-right: 159px;
            }

            .slide[data-point="7"]{
                padding-right: 110px;
            }

            .slide[data-point="8"]{
                padding-right: 73px;
            }
            .slide[data-point="9"]{
                padding-right: 141px;
            }

            .slide[data-point="10"]{
                padding-right: 64px;
            }

            .slide[data-point="11"]{
                padding-right: 61px;
            }

            .slide[data-point="12"]{
                padding-right: 21px;
            }

            .slide[data-point="13"]{
                padding-right: 125px;
            }

            .slide[data-point="15"]{
                padding-right: 10px;
            }

            /* */

            .price_block{
                background: #FFFFFF;
                border-radius: 2px;
                border: 5px solid #734F22;
                max-width: 279px;
                width: 100%;
                height: 100%;
                padding: 10px;
                margin-left: 30px;
            }

            .price_block .block_gradient{
                background: url(https://conversionratestore.github.io/projects/knineti/img/background_price.png) no-repeat;
                background-size: cover;
                height: 126px;
                margin: -11px;
                border-left: 1px solid #734F22;
            }

            .price_block .block_gradient p{
                font-weight: 800;
                font-size: 10px;
                line-height: 14px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: #FFFFFF !important;
                text-align: center;
                padding-top: 10px;
            }

            .price_block .blur_block{
                padding: 10px;
                background: #FFFFFF;
                border: 1px solid #734F22;
                box-shadow: 0px 7.49835px 29.2436px rgb(127 143 156 / 7%);
                border-radius: 3px;
                margin-top: -94px;
            }

            .price_block .blur_block> p:first-of-type{
                font-weight: 800;
                font-size: 16px;
                line-height: 17px;
                text-align: center;
                color: #203B54 !important;
            }

            .price_block .blur_block> p:nth-of-type(2){
                font-weight: 700;
                font-size: 10px;
                line-height: 14px;
                text-align: center;
                text-transform: uppercase;
                color: #1D3871 !important;
                background: #DFE8F0;
                border-radius: 2px;
                padding: 5px 0;
                margin: 10px 0;
            }

            .price_block .blur_block> p:nth-of-type(2) span:last-child{
                text-transform: lowercase;
            }

            /* */
            .price_block .pricing_text_box{
                margin-bottom: 27px;
            }

            .price_block .pricing_text_box ul {
                padding: 0;
                position: relative;
            }

            .price_block .pricing_text_box ul li {
                text-align: center;
                position: relative;
            }

            .price_block .pricing_text_box ul li:not(:last-child){
                margin-bottom: 20px;
            }

            .price_block .pricing_text_box ul li:not(:last-child)::after{
                position: absolute;
                content: '';
                width: 150px;
                border-bottom: 1px dashed #DFE8F0;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
            }

            .price_block .pricing_text_box ul li > p{
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                text-align: center;
                color: #1D3871 !important;
                margin-bottom: 5px;
            }

            .price_block .pricing_text_box ul li > p > span{
                font-weight: 800;
            }

            .price_block .pricing_text_box ul li > span{
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
                text-decoration-line: line-through;
                color: #808080;
            }

            .price_block .pricing_text_box ul li > span:first-of-type{
                padding-right: 5px;
            }

            .price_block .pricing_text_box ul li > span:last-of-type{
                font-weight: 800;
                color: #734F22;
                text-decoration-line: unset;
                position: relative;
                padding-left: 5px;
            }

            .price_block .pricing_text_box ul li > span:last-of-type::before{
                position: absolute;
                content: "";
                border-bottom: 1px solid #734F22;
                transform: rotate(110deg);
                width: 16px;
                top: 50%;
                left: -10px;
            }

            .main > section .enroll_btn_txt{
                margin: 10px 0 0 !important;
                display: block !important;
            }

          button.active_enroll_now{
                display: flex;
                width: 300px;
                justify-content: center;
                align-items: center;
                padding: 8px 0;
                font-size: 18px;
                line-height: 15px;
                text-align: center;
                letter-spacing: -0.01em;
                border: 1px solid #1D3871;
                outline: none;
                border-radius: 5px;
                height: 46px;
                background: #1D3871;
                cursor: pointer;
                font-weight: 700;
                color: #FFFFFF;
                box-shadow: 5px 5px 10px #272020;
                margin: 30px auto 0;
            }

            .active_blur{
                background: rgba(240, 230, 223, 0.13);
                filter: blur(3px);
                opacity: 0.4;
            }

            .active_blur_parent{
                border-radius: 10px;
                border: 1px dashed #734F22;
                position: relative;
            }

            .active_blur_text{
                position: absolute;
                content: '';
                top: 50%;
                left: 50%;
                width: 100%;
                transform: translateX(-50%) translateY(-50%);
                pointer-events: none;
            }

            .active_blur_text > p{
                font-weight: 800;
                font-size: 20px;
                line-height: 23px;
                text-align: center;
                text-transform: uppercase;
                color: #808080 !important;
                opacity: 0.8;
                filter: blur(1px);
            }

            .active_blur_text > p:nth-of-type(2){
                line-height: 38px;
                color: #1D3871 !important;
            }

            .active_blur_text > p:last-of-type{
                line-height: 24px;
            }
        </style>
`
      let arrText = {
        "0:00": [``, 1],
        "6:14": [`3 key rules to train <br/> your dog to be like a <br/> service dog`, 2],
        "13:34": [`Stop your dog pulling its <br/> leash - a powerful <br/> technique`, 3],
        "16:30": [`Using body <br/> language to <br/> train your dog`, 4],
        "17:22": [`Body language to <br/> stop your dog <br/> jumping on people`, 5],
        "21:45": [`Prevent <br/> excessive <br/> barking`, 6],
        "36:11": [`Why you should wean <br/> your dog away from <br/> treats, and how to do it`, 7],
        "40:04": [`2 important <br/> cues taught <br/> to service dogs`, 8],
        "40:43": [`Training your dog <br/> to walk without <br/> pulling its leash`, 9],
        "45:14": [`Training your <br/> dog to come to <br/> you when called`, 10],
        "45:55": [`Learn what’s a ‘puppy-pushup’  <br/> and why you should <br/>  train your dog to do them`, 11],
        "47:09": [`Dramatically <br/> improve your dog’s <br/> impulse control`, 12],
        "47:33": [`How to stop <br/> your dog from <br/> being aggressive`, 13],
        "50:11": [`Housebreaking: <br/> preventing accidents <br/> in your home`, 14],
        "56:25": [``, 15],
      }

      let freeWorkShop = /*html */ `
<div class="free_work_shop_box">
    <div class="free_work_shop_container">
        <div class="title_block">
            <h2>TOPICS COVERED In this video</h2>
            <span>56:25</span>
        </div>
        <div class="timeline">
            <div class="timeline_container">
                <button class="button-prev"></button>
                <div class="slider"></div>
                <button class="button-next"></button>
            </div>
        </div>
    </div>
</div>
`

      let priceBlock = /*html */ `
<div class="price_block">
    <div class="block_gradient">
        <p>workshop Special offer</p>
    </div>
    <div class="blur_block">
        <p>Get Total Transformation Masterclass and <br/> your FREE gifts now </p>
        <div class="pricing_text_box active_blur_parent">
            <ul class="active_blur">
                <li>
                    <p>Total Transformation Masterclass </p>
                    <span>$497.00</span>
                    <span>$297.00</span>
                </li>
                <li>
                    <p>10 weeks of personal coaching with our training experts </p>
                    <span>$999.00</span>
                    <span>$0.00</span>
                </li>
                <li>
                    <p><span>BONUS CLASS </span> <br/> How to housebreak your dog</p>
                    <span>$69.70</span>
                    <span>$0.00</span>
                </li>
                <li>
                    <p><span>BONUS CLASS </span> <br/> How to prevent your dog’s separation anxiety</p>
                    <span>$69.70</span>
                    <span>$0.00</span>
                </li>
                <li>
                    <p><span>BONUS CLASS </span> <br/> How to prevent biting/nipping and get your dog adjusted to kids</p>
                    <span>$69.70</span>
                    <span>$0.00</span>
                </li>
            </ul>
            <div class="active_blur_text">
                <p>You personal <br/> offer with</p>
                <p>83% off</p>
                <p>will be <br/> available <br/> shortly</p>
            </div>
        </div>
        <div>
            <img src="https://conversionratestore.github.io/projects/knineti/img/dogs.jpg" alt="dogs">
        </div>
        <p>Offer is valid until <span>January</span><span>17th</span></p>
        <button disabled><span>Your special offer will be <br/> available in <b>35:00</b></span></button>
    </div>
</div>
`

      document.head.insertAdjacentHTML("beforeend", styleFreeWorkShop)

      if (window.innerWidth > 768) {
        if (document.querySelector("#demo1")) {
          document.querySelector("#demo1").remove()
        }

        if (document.querySelector("#below_video_text")) {
          document.querySelector("#below_video_text").remove()
        }

        function setSlide(time, title, countPoint) {
          return `
        <div class="slide" data-point="${countPoint}">
            <p class="timeline_clock">${time}</p>
            <span class="timeline_title">${title}</span>
        </div>
    `
        }

        if (document.querySelector("section .container-fluid #myCarousel")) {
          document.querySelector("section .container-fluid #myCarousel").insertAdjacentHTML("beforeend", freeWorkShop)
          for (let key in arrText) {
            document.querySelector(".slider").insertAdjacentHTML("beforeend", setSlide(key, arrText[key][0], arrText[key][1]))
          }
        }

        let runSlider = setInterval(() => {
          if (document.querySelector(".tns-outer") && document.querySelector(".tns-outer") != null) {
            clearInterval(runSlider)

            document.querySelector(".timeline").style.opacity = "1"
            document.querySelector(".button-next").addEventListener("click", () => {
              console.log(`button-next`)

              window.dataLayer = window.dataLayer || []
              dataLayer.push({
                event: "event-to-ga",
                eventCategory: "Exp: FW improvements",
                eventAction: `timeline scrolling button-next`,
              })
            })

            document.querySelector(".button-prev").addEventListener("click", () => {
              console.log(`button-prev`)

              window.dataLayer = window.dataLayer || []
              dataLayer.push({
                event: "event-to-ga",
                eventCategory: "Exp: FW improvements",
                eventAction: "timeline scrolling button-prev",
              })
            })

            document.querySelector(".exp").remove()
          } else {
            let tnsInterval = setInterval(() => {
              if (typeof tns === "function") {
                clearInterval(tnsInterval)
                let sliderCategories = tns({
                  container: document.querySelector(".slider"),
                  autoWidth: true,
                  autoplay: false,
                  axis: "horizontal",
                  controls: true,
                  loop: false,
                  prevButton: document.querySelector(".button-prev"),
                  nextButton: document.querySelector(".button-next"),
                  autoplayButton: false,
                  autoplayButtonOutput: false,
                  mouseDrag: true,
                  nav: false,
                  preventScrollOnTouch: "auto",
                  swipeAngle: false,
                })

                sliderCategories.events.on("touchStart", () => {
                  window.dataLayer = window.dataLayer || []
                  dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: "Exp: FW improvements",
                    eventAction: "Swipe slider",
                    eventLabel: `Slider swipe`,
                  })
                })
              }
            }, 100)
          }
        }, 300)

        // Offer is valid until XXXX
        let paramsLocation = new URLSearchParams(window.location.search)
        let dQueryDate = atob(paramsLocation.get("d"))
        let dsp = dQueryDate.split("-")

        let daySevenToday = new Date(new Date().setDate(new Date().getDate() + 7)).toDateString().split(" ")
        let daySeven = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 7)).toDateString().split(" ")
        console.log(daySeven)

        if (document.querySelector(".free_work_shop_box")) {
          // timer
          timerVideo()

          function timerVideo() {
            let intevalVideo = setInterval(() => {
              if (document.querySelector("video")) {
                clearInterval(intevalVideo)

                setTimeout(() => {
                  // let counter
                  const videoItem = document.querySelector("video")

                  function timeUpdate() {
                    console.log(videoItem.currentTime)
                    let timer = 35 * 60 + 45
                    // let timer = 2 * 60 + 45

                    let currentTime = Math.floor(videoItem.currentTime)

                    if (currentTime > 45) {
                      timer -= currentTime
                      let minutes = timer / 60 < 10 ? `0${Math.floor(timer / 60)}` : Math.floor(timer / 60)
                      let seconds = timer % 60 < 10 ? `0${timer % 60}` : timer % 60

                      if (timer < 0) {
                        let int = setInterval(() => {
                          document.querySelector(".main > section .enroll_btn_txt").insertAdjacentHTML("afterend", `<button class="active_enroll_now">ENROLL NOW</button>`)

                          if (document.querySelector("button.active_enroll_now")) {
                            clearInterval(int)

                            videoItem.removeEventListener("timeupdate", timeUpdate)
                            onClickBtnEnroll()
                          }
                        }, 10)
                      }
                    }
                  }

                  videoItem.addEventListener("timeupdate", timeUpdate)

                  function onClickBtnEnroll() {
                    console.log(`onClickBtnEnroll`)
                    document.querySelector("button.active_enroll_now").addEventListener("click", () => {
                      window.dataLayer = window.dataLayer || []
                      dataLayer.push({
                        event: "event-to-ga",
                        eventCategory: "Exp: FW improvements",
                        eventAction: "Enroll Now clicked",
                      })

                      document.querySelector(".pattern-block a.button-blue-large").click()
                    })
                  }
                }, 1000)
              }
            }, 100)
          }
        }

        window.dataLayer = window.dataLayer || []
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: "Exp: FW improvements",
          eventAction: "loaded",
        })
        ;(function (h, o, t, j, a, r) {
          h.hj =
            h.hj ||
            function () {
              ;(h.hj.q = h.hj.q || []).push(arguments)
            }
          h._hjSettings = { hjid: 2689748, hjsv: 6 }
          a = o.getElementsByTagName("head")[0]
          r = o.createElement("script")
          r.async = 1
          r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
          a.appendChild(r)
        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
        hj("event", "FW_improvements")
      }
    }
  }
}, 10)
