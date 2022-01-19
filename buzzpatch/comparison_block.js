// window.onload = function () {
  let scriptCustom = document.createElement("script")
  scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
  scriptCustom.async = false
  document.head.appendChild(scriptCustom)

  let scriptCustomStyle = document.createElement("link")
  scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
  scriptCustomStyle.rel = "stylesheet"
  document.head.appendChild(scriptCustomStyle)

  let styleComparisonBlock = /*html*/ `
<style>

  .bp-tooltip .bp-tooltiptext{
    max-width: 180px;
    left: calc(50% - 55px) !important;
    width: 100px !important;
  }

  .comparison_slider_nav{
    padding-bottom: 42px;
    margin-bottom: 40px;
  }

  .comparison_slider_nav, .comparison_slider_nav .bp-comparison{
    background: #ECEEF0;
  }

  .comparison_slider_nav .bp-comparison{
    padding: 30px 0 40px;
    margin-bottom: 0 !important;
  }

  .wave-effect.js-mobile svg{
    display: none;
  }

  .wave-effect.js-mobile svg path{
  fill:#ECEEF0;
  }

  .wave-effect{
    margin-bottom: -2px;
  }

  .comparison_slider_nav .col-lg-3.text-center.js-heading{
    margin-top: 10px;
  }

  .comparison_slider_nav .bp-mob-table-container p{
  font-weight: 600;
  font-size: 14px !important;
  line-height: 20px !important;
  }

  .comparison_block table thead tr:last-child td,
  table thead tr:last-child th {
    border-bottom: none;
  }

  .accent_span {
    font-family: "Roboto Condensed", sans-serif !important;
    font-weight: 400 !important;
    font-size: 14px !important;
    line-height: 114% !important;
    letter-spacing: 0.015em !important;
    text-transform: uppercase !important;
    color: #ff3c81 !important;
  }

  .img_block {
    margin-bottom: -2px;
  }

  .img_block img {
    width: 100% !important;
  }

  .comparison_block {
    background-size: 100%;
    background-color: #eceef0;
    padding: 30px 16px 40px;
  }

  .comparison_block h2, .comparison_slider_nav .js-title.text-dark {
    font-family: "DINEngschrift LT", sans-serif;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #0c0b0b;
    margin-bottom: 40px;
  }

  .comparison_slider_nav .js-title.text-dark{
    margin-bottom: 56px;
  }

  .comparison_block > p {
    font-family: "DINEngschrift LT", sans-serif;
    font-weight: 400;
    font-size: 26px !important;
    line-height: 110% !important;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #000000;
    border: 2px solid #ff3c81;
    border-radius: 6px;
    padding: 20px 47px;
    margin-top: 40px;
    margin-bottom: 0;
  }

  .comparison_block > p span {
    color: #ff3c81;
  }

  .comparison_block table {
    border-spacing: 0;
    border: none;
    border-radius: none;
  }

  .comparison_block table thead th {
    font-family: "Roboto Condensed", sans-serif !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #212529;
    padding-bottom: 20px;
  }

  .comparison_block table thead th div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .comparison_block table thead th span {
    display: inline-block;
    margin-top: 7px;
  }

  .comparison_block table th,
  .comparison_block table td {
    background: #eceef0 !important;
    border-bottom: none;
    border-right: none;
  }

  .comparison_block table tbody tr {
    border-top: 1px solid #d9d9d9;
  }

  .comparison_block table tbody tr td {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    color: #212529;
    padding: 20px 0;
    width: 119px;
  }

  .comparison_block table tbody tr td:first-child {
    font-weight: 600;
    text-align: left;
  }

  .comparison_block table tbody tr td:not(:last-child) div {
    position: relative;
  }

  .comparison_block table tbody tr td:not(:last-child) div::after {
    position: absolute;
    content: "";
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: #d9d9d9;
    width: 1px;
    height: 26px;
  }

  .comparison_slider_nav .slick-dots li a::before, .slick-dots li button::before{
    background: #F1F3F4;
    border: 1px solid #212529;
    width: 12px;
    height: 12px;
    content:"";
    transform: unset;
    color: unset;
  }

   .comparison_slider_nav .slick-dots li.slick-active a::before, .slick-dots li.slick-active button::before{
    content:"";
    transform: unset;
    color: unset;
    background: #212529;
  }



  @media (max-width: 321px) {
    .comparison_block > p {
      padding: 20px 19px;
    }

    .comparison_block table tbody tr td:first-child div {
      padding-right: 20px;
    }
  }
</style>
`

  let imgBlock = `
<div class="img_block">
  <img src="https://conversionratestore.github.io/projects/buzzpatch/img/background_comparison_block.svg" alt="background figure">
</div>
`

  let sliderBox = /*html */ `
<div class="comparison_slider_nav">
  <section class="comparison_block slider_custom_list">
      <h2>
        How expensive is Buzzpatch <br />
        compared to mosquito <br />
        repelling sprays
      </h2>
      <table>
        <thead>
          <th>&nbsp;</th>
          <th class="accent_span">
            <div>
              <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch_smiley.svg" alt="sticker buzzpatch" />
              <span>Buzzpatch</span>
            </div>
          </th>
          <th>
            <div>
              <img src="https://conversionratestore.github.io/projects/buzzpatch/img/spray_buzz.svg" alt="spray" />
              <span>Spray</span>
            </div>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>Price</div>
            </td>
            <td>
              <div>$19</div>
            </td>
            <td>
              <div>$10</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>One package <br> contains</div>
            </td>
            <td>
              <div>60 patches</div>
            </td>
            <td>
              <div>300 ml</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>Normal use <br> per day</div>
            </td>
            <td>
              <div>3 patches</div>
            </td>
            <td>
              <div>~38 ml</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>How long <br> does it last</div>
            </td>
            <td>
              <div>20 days</div>
            </td>
            <td>
              <div>8 days</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>Price per day</div>
            </td>
            <td>
              <div>$0.95 <br></div>
            </td>
            <td>
              <div>$1.25</div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Buzzpatch is <span>UP to 25% <br />cheaper</span> than a bug spray
      </p>
    </section>
</div>
`

  document.head.insertAdjacentHTML("beforeend", styleComparisonBlock)
  document.querySelector(".wave-effect.js-mobile").insertAdjacentHTML("afterbegin", imgBlock)
  document.querySelector(".bp-comparison.js-mobile").classList.add("slider_custom_list")

  document.querySelector(".wave-effect.js-mobile").insertAdjacentHTML("afterend", sliderBox)

  document.querySelectorAll(".col-lg-7.text-center.d-flex.align-items-center").forEach((el) => el.remove())

  if (document.querySelector(".comparison_slider_nav")) {
    document.querySelector(".comparison_block").after(document.querySelector(".bp-comparison.js-mobile"))

    document.querySelector(".comparison_slider_nav .js-title.text-dark").innerText = `Buzzpatch \nvs other mosquito\n repellents`
  }

  let slickInterval = setInterval(() => {
    if (typeof jQuery(".comparison_slider_nav").slick === "function" && document.querySelector(".comparison_slider_nav")) {
      clearInterval(slickInterval)

      //  slider
      setTimeout(() => {
        let slider = $(".comparison_slider_nav").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          focusOnSelect: true,
          adaptiveHeight: true,
        })

        slider.on("swipe", () => {
          window.dataLayer = window.dataLayer || []
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: "Exp: Pricing comparison option",
            eventAction: "Swipe slider",
            eventLabel: `Slider swipe`,
          })
        })
      }, 200)
    }
  }, 100)

  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp: Pricing comparison option",
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
  hj("event", "pricing_comparison_option")
// }
