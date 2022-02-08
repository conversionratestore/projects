let styleComparisonBlock = /*html*/ `
<style>
  .bp-tooltip .bp-tooltiptext {
    max-width: 180px;
    left: calc(50% - 54px) !important;
    width: 95px !important;
  }

  .comparison_slider_nav {
    padding-bottom: 42px;
    margin-bottom: 40px;
  }

  .comparison_slider_nav,
  .comparison_slider_nav .bp-comparison {
    background: #eceef0;
  }

  .comparison_slider_nav .bp-comparison {
    padding: 30px 0 40px;
    margin-bottom: 0 !important;
  }





  .comparison_slider_nav .col-lg-3.text-center.js-heading {
    margin-top: 10px;
  }

  .comparison_slider_nav .bp-mob-table-container p {
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

  section#purchase{
    padding-bottom: 0;
  }

  .img_block {
    margin-bottom: -2px;
    background: #F9F8F6;
  }

  .img_block img {
    width: 100% !important;
  }

  .comparison_block {
    background-size: 100%;
    background-color: #eceef0;
    padding: 30px 16px 40px;
    margin-bottom: 37px;
  }

  .comparison_block h2,
  .comparison_slider_nav .js-title.text-dark {
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

  .comparison_slider_nav .js-title.text-dark {
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
    position: relative;
    margin: 40px auto 0;
    width: max-content;
  }

  .comparison_block > p > svg:not(.mini_box) {
    position: absolute;
    bottom: 41px;
    right: 19px;
    width: 40px;
  }

  .mini_box {
    position: absolute;
    bottom: -9px;
    right: 20px;
    opacity: 0;
  }

  .hidden_text {
    opacity: 0;
    position: absolute;
    top: -72px;
    right: 7px;
    width: 100%;
    background: #ffffff;
    font-family: "Roboto", sans-serif;
    text-transform: none;
    box-shadow: 0px 0.688073px 4.06px rgb(0 0 0 / 7%), 6px 7.26px 20.4px rgb(0 0 0 / 10%);
    border-radius: 7px;
    font-weight: 400;
    font-size: 12px !important;
    line-height: 17px !important;
    color: #212529;
    margin: 0;
    padding: 10px;
    max-width: 245px;
    text-align: left;
  }

  @media (width: 360px) {
    .comparison_block > p{
      font-size: 24px !important;
    }
  }



  @media (max-width: 280px) {
    .comparison_block > p {
      width: 100%;
    }
  }

  .comparison_block > p > span span {
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

  .comparison_block table thead th.accent_span div > img{
    padding-top: 25px;
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

  .comparison_slider_nav .slick-dots li a::before,
  .slick-dots li button::before {
    background: #f1f3f4;
    border: 1px solid #212529;
    width: 12px;
    height: 12px;
    content: "";
    transform: unset;
    color: unset;
  }

  .comparison_slider_nav .slick-dots li.slick-active a::before,
  .slick-dots li.slick-active button::before {
    content: "";
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

      .comparison_block > p > svg:not(.mini_box){
        bottom: 57px;
        right: 6px;
      }
      
      .hidden_text{
            right: -7px;
      }
  }

  .hidden_text.toggle_opacity,  .mini_box.toggle_opacity {
    opacity: 1;
  }


</style>
`

let comparisonBlock = /*html*/ `
<div class="img_block">
  <img src="https://conversionratestore.github.io/projects/buzzpatch/img/background_comparison_block2.svg" alt="background figure">
</div>
    <section class="comparison_block">
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
          <span>Buzzpatch is <span>UP to 25% <br />cheaper</span> than a bug spray</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_752_9110" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33301 8.00065C1.33301 4.32065 4.31967 1.33398 7.99967 1.33398C11.6797 1.33398 14.6663 4.32065 14.6663 8.00065C14.6663 11.6807 11.6797 14.6673 7.99967 14.6673C4.31967 14.6673 1.33301 11.6807 1.33301 8.00065ZM2.66634 8.00065C2.66634 10.9407 5.05967 13.334 7.99967 13.334C10.9397 13.334 13.333 10.9407 13.333 8.00065C13.333 5.06065 10.9397 2.66732 7.99967 2.66732C5.05967 2.66732 2.66634 5.06065 2.66634 8.00065ZM8.66634 10.6673V12.0007H7.33301V10.6673H8.66634ZM5.45301 5.88732C5.81967 4.67398 7.03301 3.82732 8.40634 4.02732C9.56634 4.20065 10.4797 5.18065 10.6397 6.34065C10.7917 7.41634 10.1968 7.93538 9.62264 8.43635C9.51714 8.52839 9.41235 8.61982 9.31301 8.71398C9.23301 8.78732 9.15968 8.86065 9.09301 8.94065C9.08967 8.94398 9.08634 8.94899 9.08301 8.95398C9.07967 8.95898 9.07634 8.96398 9.07301 8.96732C9.00634 9.04732 8.93967 9.13398 8.88634 9.22732C8.87967 9.23732 8.87467 9.24732 8.86967 9.25732C8.86467 9.26732 8.85967 9.27732 8.85301 9.28732C8.73968 9.48732 8.66634 9.72065 8.66634 10.0007H7.33301C7.33301 9.66732 7.38634 9.39398 7.46634 9.16732C7.46926 9.15855 7.47091 9.15106 7.47239 9.14429C7.47429 9.13563 7.47593 9.12814 7.47967 9.12065C7.48301 9.11065 7.48801 9.10232 7.49301 9.09399C7.49801 9.08565 7.50301 9.07732 7.50634 9.06732C7.55301 8.94732 7.61301 8.83398 7.67301 8.73398C7.67634 8.72732 7.67967 8.72232 7.68301 8.71732C7.68634 8.71232 7.68968 8.70732 7.69301 8.70065C7.69301 8.69732 7.69467 8.69565 7.69634 8.69398C7.69801 8.69232 7.69968 8.69065 7.69968 8.68732C7.92673 8.34537 8.23124 8.11118 8.51601 7.89217C8.92523 7.57745 9.2937 7.29408 9.33301 6.76732C9.38634 6.12065 8.91967 5.50065 8.28634 5.36732C7.59967 5.22065 6.96634 5.62732 6.75301 6.22065C6.65967 6.47398 6.43967 6.66732 6.16634 6.66732H6.03301C5.62634 6.66732 5.33301 6.27398 5.45301 5.88732Z" fill="black"/>
            </mask>
            <g mask="url(#mask0_752_9110)">
            <rect width="16" height="16" fill="#FF3C7F"/>
            </g>
          </svg>
          <span class="hidden_text">The calculation is based on comparing the price of Buzzpatch to the price of the most popular mosquito repelling spay available on the market.
          <svg class="mini_box" width="27" height="10" viewBox="0 0 27 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6905 9.11818C13.9833 9.64203 13.0167 9.64203 12.3095 9.11818L0 -9.53674e-07L27 -9.53674e-07L14.6905 9.11818Z" fill="white"/>
          </svg>
          </span>
        </p>
    </section>
`

document.head.insertAdjacentHTML("beforeend", styleComparisonBlock)
document.querySelector("#reviews").insertAdjacentHTML("beforebegin", comparisonBlock)

// click on hint
if (document.querySelector(".comparison_block > p > svg")) {
  const toggleMenu = () => {
    document.querySelector(".hidden_text").classList.toggle("toggle_opacity")
    document.querySelector(".mini_box").classList.toggle("toggle_opacity")
  }

  document.querySelector(".comparison_block > p > svg").addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp: Pricing comparison option",
      eventAction: "Click on the hint",
    })

    e.stopPropagation()

    toggleMenu()
  })

  document.addEventListener("click", (e) => {
    document.querySelector(".hidden_text")?.classList.remove("toggle_opacity")
    document.querySelector(".mini_box")?.classList.remove("toggle_opacity")
  })
}

clarity("set", "comparison_option", "variant_1")

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
