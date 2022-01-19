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
    .free_work_shop_box{
        width: 99vw;
        margin: 0 auto;
        background: #dde8f1;
    }
    
    .free_work_shop_container{
        max-width: 1010px;
        padding: 40px 10px 60px;
        margin: 0 auto;
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
        cursor: pointer;
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
        width: 130px;
        height: 100%;
        pointer-events: none;
        right: calc(100% + 1px);
        transform: matrix(-1, 0, 0, 1, 0, 0);
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
        max-width: 163px;
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

    .slide:last-child {
        padding-right: 0px!important;
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



</style>
`
let arrText = {
  "0:00": [``, 1],
  "6:14": [`3 key rules to train <br/> your dog to be a <br/> service dog`, 2],
  "13:34": [`Stop your dog pulling its <br/> leash - an effective <br/> technique`, 3],
  "16:30": [`Using body <br/> language to <br/> train your dog`, 4],
  "17:22": [`Body language to <br/> stop your dog <br/> jumping on people`, 5],
  "21:45": [`Dealing <br/> with <br/> unnecessary barking`, 6],
  "36:11": [`Why you should wean <br/> your dog away from <br/> treats, and how to do it`, 7],
  "40:04": [`2 important <br/> commands to make <br/> your dog obedient`, 8],
  "40:43": [`Training your dog <br/> to walk without <br/> pulling its leash`, 9],
  "45:14": [`Coming to you <br/> when you call <br/> them (great tips)`, 10],
  "45:55": [`Learn what’s ‘puppy push- <br/> ups’ and why you should <br/> train your dog to do them`, 11],
  "47:09": [`Master new approaches <br/> to improve your dog’s <br/> impulse control`, 12],
  "47:33": [`Priceless advice to stop <br/> your dog being aggressive <br/> towards dogs and people`, 13],
  "50:11": [`Preventing dog <br/> -related accidents <br/> in your home`, 14],
  "1:33:57": [``, 15],
}

let freeWorkShop = /*html */ `
<div class="free_work_shop_box">
    <div class="free_work_shop_container">
        <div class="title_block">
            <h2>TOPICS COVERED In this video</h2>
            <span>1:33:57</span>
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

document.head.insertAdjacentHTML("beforeend", styleFreeWorkShop)

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
    console.log(key)
  }
}

let runSlider = setInterval(() => {
  if (document.querySelector(".tns-outer") && document.querySelector(".tns-outer") != null) {
    clearInterval(runSlider)
    console.log("runSlider")

    document.querySelector(".timeline").style.opacity = "1"

    if (window.matchMedia("(max-width: 992px)").matches) {
      document.querySelector(".button-next").addEventListener("click", () => {
        document.querySelector("#tns1-mw").style.paddingLeft = "20px"
      })
      document.querySelector(".button-prev").addEventListener("click", (e) => {
        setTimeout(() => {
          if (e.target.disabled === true) {
            document.querySelector("#tns1-mw").style.paddingLeft = "0"
          }
        }, 100)
      })
    }
    document.querySelector(".button-next").addEventListener("click", () => {
      console.log(`button-next`)
    })
    document.querySelector(".button-prev").addEventListener("click", () => {
      console.log(`button-prev`)
    })
  } else {
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
  }
}, 300)
