let styleBuzzpatchstickers = /*html*/ `
<style>

.acc-color{
color: #FF3C7F;
font-weight: 500;
}

.stickers-block p{
margin:0;
}

.stickers-block{
background: #F1F3F4 url("https://conversionratestore.github.io/projects/buzzpatch/img/bg_white.svg") no-repeat center -1px / 100%;
font-weight: 400;
font-size: 14px;
line-height: 1.3;
text-align: center;
color: #212529;
padding: 90px 15px 52px 15px;
margin: 0 0 52px 0;
}

.stickers-main-title{
margin: 25px 0 40px 0;
font-weight: 400;
font-size: 36px;
line-height: 1.2;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #0C0B0B;
}

.stickers-question-list{
font-weight: 600;
font-size: 18px !important;
line-height: 1.3 !important;
color: #212529 !important;
margin-left: 30px !important;
margin-right: 10px !important;
}

.stickers-question{
margin-bottom: 20px !important;
text-align:start;
}

.add-person-list{
display:flex;
flex-wrap: wrap;
}

.stickers-select{
width:100% !important;
background-color: #FFFFFF !important;
border: 1px solid #D9D9D9 !important;
box-sizing: border-box !important;
border-radius: 5px !important;
padding: 9px 5px 9px 15px !important;
font-weight: 500 !important;
font-size: 16px !important;
line-height: 1.3 !important;
color: #212529 !important;
overflow:scroll;
}

.select-var{
margin-bottom: 40px;
}

.add-person-flexbox{
width: 30%;
margin-top: 10px;
}

.add-person-flexbox:not(:last-child){
margin-right: 10px;
}

.add-person-block{
font-weight: 600 !important;
font-size: 14px !important;
line-height: 1.3 !important;
color: #212529 !important;
margin-bottom: 4px !important;
text-align: start !important;
}

.add-person-btn{
margin-top: 20px;
margin-bottom: 8px;
width: 44px;
height: 44px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
border-radius: 50%;
}

.add-person-svg{
vertical-align: unset;
}

.add-person-title{
font-family: 'DINEngschrift LT', sans-serif;
font-weight: 400 !important;
font-size: 16px !important;
line-height: 1 !important;
text-align: center !important;
letter-spacing: 0.05em !important;
text-transform: uppercase !important;
color: #0C0B0B !important;
}

.stickers-title{
font-weight: 400;
font-size: 26px;
line-height: 1.2;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #212529;
margin-bottom: 5px;
}

.stickers-pack{
font-weight: 400;
font-size: 18px;
line-height: 1.5;
text-align: center;
color: #6F6F6F;
margin-bottom: 0 !important;
}

.stickers-price{
font-weight: 700 !important;
font-size: 24px !important;
line-height: 1.3 !important;
color: #0C0B0B !important;
margin-top: 20px !important;
margin-bottom: 5px !important;
}

.stickers-foreach-text{
font-weight: 400 !important;
font-size: 14px !important;
line-height: 1.3 !important;
color: #212529;
}

.flex-btn{
display: flex;
justify-content: space-around;
}

.stickers-btn{
display: inline-flex;
width: 100%;
max-width: 343px;
height: 65px;
align-items: center;
justify-content: center;
font-family: 'DINEngschrift LT', sans-serif;
font-weight: 400;
font-size: 16px !important;
line-height: 1;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF !important;
background: #FF3C7F;
box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
border-radius: 52px;
border: 1px solid #FF3C7F;
cursor: pointer;
outline: none;
}


@media (max-width: 321px) {
.stickers-select{
font-size: 12px !important;
padding: 9px 5px 9px 10px !important;
}

.stickers-title {
font-size: 23px !important;
}

.modal-form-stickers{
padding: 30px 20px !important;
}
}

.stickers-btn.other{
background: #FFFFFF;
color: #FF3C7F !important;
border: 1px solid #FF3C7F;
box-shadow:none;
margin-left: 5px !important;
}

.stickers-btn.small-btn{
margin: 0 0 40px 0;
max-width: 165px;
}

.parent-border{
border-top: 1px solid #D9D9D9;
padding: 20px 0 0 0;
}

.flex-box-total{
display: flex;
text-align: start;
justify-content: space-between;
align-items: center;
}

.flex-box-total:not(:last-child){
margin-bottom: 20px;
}

.flex-text-total{
font-family: 'Roboto', sans-serif !important;
max-width: 57%;
font-weight: 600 !important;
font-size: 14px !important;
line-height: 130% !important;
color: #212529 !important;
margin: 0 !important;
}


.flex-span-total{
font-family: 'DINEngschrift LT', sans-serif !important;
font-size: 20px !important;
line-height: 1.2 !important;
letter-spacing: 0.02em !important;
text-transform: uppercase !important;
color: #000000 !important;
}

.text-season{
text-align:start;
font-size: 14px !important;
line-height: 1.3 !important;
color: #000000 !important;
}

.text-season:not(:last-child){
margin-bottom:9px;
}

.hidden {
display: none;
}


.backdrop-modal {
position: fixed;
top: 0;
left: 0;
z-index: 1055;
width: 100%;
height: 100%;
opacity: 1;
overflow-y: scroll;
background-color: rgba(0, 0, 0, 0.59);
transition: all 0.8s ease 0s;
}

.backdrop-modal.is-hidden {
opacity: 0;
pointer-events: none;
}

.modal-form-stickers {
display: flex;
min-height: 100%;
align-items: center;
justify-content: center;
padding: 30px 10px;
}

.modal-form-content{
position: relative;
max-width: 343px;
margin-right: auto;
margin-left: auto;
background-color: #FFFFFF;
text-align: center;
transition: all 0.8s ease 0s;
}

.modal-open {
overflow: hidden;
}

.btn-close-popup {
position: absolute;
top: -16px;
right: -10px;
display: flex;
padding: 0;
margin: 0;
width: 30px;
height: 30px;

justify-content: center;
align-items: center;
border: 1px solid #181818;
border-radius: 50%;
outline: none;
cursor: pointer;
color: white;
background-color: #181818;
box-shadow: 0px 4px 12px rgb(213 202 202 / 76%);
}

.icon-close-popup {
fill: currentColor;
}

.popup-box-stickers{
padding: 30px 15px 30px 15px;
}

.margin-indent{
margin-left: 3px;
}

</style>
`

let buzzpatchStickersOne = /*html*/ `
<section class="stickers-block">
    <h1 class="stickers-main-title">how many buzzpatch stickers do you need to protect your family?</h1>
    <div class="stickers-block-first">
        <ol class="stickers-question-list">
            <li class="select-var">
                <p class="stickers-question">How  many people do you need Buzzpatch stickers for?</p>
                <select class="stickers-select" data-person>
                    <option selected value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                </select>
            </li>
            <li class="select-var">
                <p class="stickers-question">How  old are they?</p>
                <div class="add-person-list">
                    <div class="add-person-flexbox">
                        <p class="add-person-block">Person 1</p>
                        <select class="stickers-select" data-age>
                            <option selected value="30">0 - 2</option>
                            <option value="60">3 - 5</option>
                            <option value="120">6 +</option>
                        </select>
                    </div>
                    <div class="add-person-flexbox hidden">
                        <p class="add-person-block">Person 2</p>
                        <select class="stickers-select" data-age>
                            <option selected value="30">0 - 2</option>
                            <option value="60">3 - 5</option>
                            <option value="120">6 +</option>
                        </select>
                    </div>
                    <div class="add-person-flexbox hidden">
                        <p class="add-person-block">Person 3</p>
                        <select class="stickers-select" data-age>
                            <option selected value="30">0 - 2</option>
                            <option value="60">3 - 5</option>
                            <option value="120">6 +</option>
                        </select>
                    </div>
                    <div class="add-person-flexbox hidden">
                        <p class="add-person-block">Person 4</p>
                        <select class="stickers-select" data-age>
                            <option selected value="30">0 - 2</option>
                            <option value="60">3 - 5</option>
                            <option value="120">6 +</option>
                        </select>
                    </div>
                </div>
<!-- 
                <button class="add-person-btn">
                    <svg class="add-person-svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#0C0B0B"/>
                    </svg>
                </button>

                <p class="add-person-title">add person</p> -->
            </li>
            <li class="select-var">
                <p class="stickers-question">How  many months per year does the mosquito season last?</p>
                <select class="stickers-select" data-month>
                    <option selected value="1">1 month</option>
                    <option value="2">2 months</option>
                    <option value="3">3 months</option>
                    <option value="4">3+ months</option>
                </select>
            </li>
        </ol>
        <button class="stickers-btn btn-first">Calculate how many I need</button>
    </div>
</section>
`

let popUpStickers = /*html*/ `
<div class="backdrop-modal is-hidden" data-modal>
  <form class="modal-form-stickers">
    <div class=modal-form-content>
      <div class="popup-box-stickers">
        <button type="button" class="btn-close-popup">
          <svg class="icon-close-popup" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.90473 1.12841L5.59556 4.43758L8.96715 7.80917L7.79109 8.98522L4.41951 5.61364L1.12656 8.90659L0.068036 7.84807L3.36099 4.55512L0.0129204 1.20705L1.18897 0.0309971L4.53704 3.37906L7.84621 0.0698909L8.90473 1.12841Z" fill="#ffffff"/>
          </svg>          
        </button>

        <div class="stickers-block-two">
          <h2 class="stickers-title">You are recommended <span class="acc-color packs-var">3 packs</span> that contain <span class="acc-color stickers-var">180</span> stickers</h2>
          <p class="stickers-pack">60 stickers in 1 pack</p>
          <img src="https://conversionratestore.github.io/projects/buzzpatch/img/sticker.png" alt="stickers" width="225">

          <p class="stickers-price discount-var">$36.00 (40% OFF)</p>
          <p class="stickers-foreach-text each-var">$12 for each pack</p>

          <div class="flex-btn">
            <a href="https://buzzpatch.com/a/secure/checkout/x89M9vTnQhNJyK4KKpcw" class="stickers-btn small-btn">Buy <span class="packs-var margin-indent">3 packs</span></a>
            <a href="#getNow"" class="stickers-btn small-btn other">see other packs</a>
          </div>

          <div class="parent-border">
            <div class="flex-box-total">
              <p class="flex-text-total">Mosquito season duration:</p>
              <span class="flex-span-total total-month-var">3 months</span>
            </div>

            <div class="flex-box-total">
              <p class="flex-text-total">Total number of Buzzpatch stickers required:</p>
              <span class="flex-span-total total-summ-var">180 stickers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
`

document.head.insertAdjacentHTML("beforeend", styleBuzzpatchstickers)
document.body.insertAdjacentHTML("afterbegin", popUpStickers)
document.querySelector("#faqs").insertAdjacentHTML("beforebegin", buzzpatchStickersOne)

//  variant Person
document.querySelector("[data-person]").addEventListener("change", function () {
  let valueDataPerson = this.value

  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - How many stickers need mobile",
    eventAction: "Click on dropdown toggle in question 1",
    eventLabel: `Person(s) ${valueDataPerson}`,
  })

  document.querySelectorAll(".add-person-flexbox").forEach((el, idx) => {
    if (+document.querySelector("[data-person]").value > idx) {
      el.classList.remove("hidden")
    } else {
      el.classList.add("hidden")
    }
  })
})

//  variant Age
document.querySelectorAll("[data-age]").forEach((el, i) => {
  el.addEventListener("change", function () {
    let valueDataAge = el.options[el.selectedIndex].text

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp - How many stickers need mobile",
      eventAction: `Click on dropdown toggle in question 2 (Person ${i + 1})`,
      eventLabel: valueDataAge,
    })
  })
})

//  variant Month
document.querySelector("[data-month]").addEventListener("change", function (e) {
  let valueDataMonth = this.value

  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - How many stickers need mobile",
    eventAction: "Click on dropdown toggle in question 3",
    eventLabel: `Month ${valueDataMonth}`,
  })
})

// calculate Summ For Pack
function calculateSummForPack() {
  let total = 0

  document.querySelectorAll(".add-person-flexbox:not(.hidden) [data-age]").forEach((el, idx) => {
    total += +el.value
  })

  let monthValue = +document.querySelector("[data-month]").value
  let calcSumm = total * monthValue

  return calcSumm
}

// btn calculate how many i need
document.querySelector(".btn-first").addEventListener("click", function () {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - How many stickers need mobile",
    eventAction: "Click on button calculate how many do you need",
  })

  showModalStickers()

  let summ = calculateSummForPack()

  let selectedText = document.querySelector("[data-month]").options[document.querySelector("[data-month]").selectedIndex].text

  if (60 >= summ) {
    document.querySelectorAll(".packs-var").forEach((el) => {
      el.textContent = `1 pack`
    })
    document.querySelector(".stickers-var").textContent = `60`
    document.querySelector(".discount-var").textContent = `$14.99 (25% OFF)`
    document.querySelector(".each-var").textContent = `$14.99 for each pack`

    document.querySelector(".total-month-var").textContent = selectedText
    document.querySelector(".total-summ-var").textContent = `${summ} stickers`

    document.querySelector("a.small-btn").setAttribute("href", "https://buzzpatch.com/a/secure/checkout/ZusYB2LRugSE6FJGQ9Xl")
  } else if (120 >= summ) {
    document.querySelectorAll(".packs-var").forEach((el) => {
      el.textContent = `2 packs`
    })
    document.querySelector(".stickers-var").textContent = `120`
    document.querySelector(".discount-var").textContent = `$27.00 (32.5% OFF)`
    document.querySelector(".each-var").textContent = `$13.5 for each pack`

    document.querySelector(".total-month-var").textContent = selectedText
    document.querySelector(".total-summ-var").textContent = `${summ} stickers`

    document.querySelector("a.small-btn").setAttribute("href", "https://buzzpatch.com/a/secure/checkout/7Bgb8Ox8zIEicZJYJxY9")
  } else if (180 >= summ) {
    document.querySelectorAll(".packs-var").forEach((el) => {
      el.textContent = `3 packs`
    })
    document.querySelector(".stickers-var").textContent = `180`
    document.querySelector(".discount-var").textContent = `$36.00 (40% OFF)`
    document.querySelector(".each-var").textContent = `$12.00 for each pack`

    document.querySelector(".total-month-var").textContent = selectedText
    document.querySelector(".total-summ-var").textContent = `${summ} stickers`

    document.querySelector("a.small-btn").setAttribute("href", "https://buzzpatch.com/a/secure/checkout/x89M9vTnQhNJyK4KKpcw")
  } else {
    document.querySelectorAll(".packs-var").forEach((el) => {
      el.textContent = `4 packs`
    })
    document.querySelector(".stickers-var").textContent = `240`
    document.querySelector(".discount-var").textContent = `$42.00 (47.5% OFF)`
    document.querySelector(".each-var").textContent = `$10.5 for each pack`

    document.querySelector(".total-month-var").textContent = selectedText

    if (summ >= 240) {
      summ = 240
    }

    document.querySelector(".total-summ-var").textContent = `${summ} stickers`

    document.querySelector("a.small-btn").setAttribute("href", "https://buzzpatch.com/a/secure/checkout/4jpyLOrOz8c9rVMspZBw")
  }
})

// button buy 1-4 packs
if (document.querySelector("a.small-btn")) {
  document.querySelector("a.small-btn").addEventListener("click", function () {
    let a = document.querySelector("a.small-btn").textContent

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp - How many stickers need mobile",
      eventAction: `Click on button buy packs`,
      eventLabel: a,
    })
  })
}

// btn see other packs
scrolling(".other")

// Pure js scrolling
function scrolling(upSelector) {
  // Scrolling with raf
  let links = document.querySelectorAll(upSelector),
    speed = 0.5

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp - How many stickers need mobile",
        eventAction: "Click on button see other packs",
      })

      document.querySelector(".backdrop-modal").classList.add("is-hidden")
      document.body.style.overflow = ""

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

window.dataLayer = window.dataLayer || []
dataLayer.push({
  event: "event-to-ga",
  eventCategory: "Exp - How many stickers need mobile",
  eventAction: "loaded",
})
;(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2247058, hjsv: 6 }
  a = o.getElementsByTagName("head")[0]
  r = o.createElement("script")
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
window.hj =
  window.hj ||
  function () {
    ;(hj.q = hj.q || []).push(arguments)
  }
hj("trigger", "how_many_stickers_need_mobile")

// show Modal Stickers
function showModalStickers() {
  document.querySelector(".btn-close-popup").addEventListener("click", function () {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp - How many stickers need mobile",
      eventAction: "Click on button close popup",
    })

    document.querySelector(".backdrop-modal").classList.add("is-hidden")
    document.body.style.overflow = ""
  })

  showModal(".backdrop-modal")

  function showModal(selector) {
    document.querySelector(selector).classList.remove("is-hidden")
    document.body.style.overflow = "hidden"
  }
}
