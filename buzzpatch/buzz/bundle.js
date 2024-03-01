;(function () {
  console.log(
    '%c EXP: Bundle AOV (DEV: YK)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )
  const git = 'https://conversionratestore.github.io/projects/buzzpatch/img'
  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)

  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval)
      clarity('set', 'bundle_AOV', 'variant_1')
    }
  }, 1000)

  const pushDataLayer = (name, desc, type = '', loc = '') => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'event-to-ga4',
      event_name: name,
      event_desc: desc,
      event_type: type,
      event_loc: loc
    })
    console.log(`Event: ${name} ${desc} ${type} ${loc}`)
  }

  function VisibilityofTime(selector, exp_name, visible_place, time = 3000, threshold = 0.5) {
    let observer
    let timer

    observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          timer = setTimeout(() => {
            pushDataLayer(
              `exp_${exp_name}_element_visible`,
              entries[0].target.dataset.visible,
              'visible',
              visible_place
            )
            observer.disconnect()
          }, time)
        } else {
          console.log('Element is not fully visible')
          clearTimeout(timer) // Clear the timer if the element is not visible
        }
      },
      { threshold: [threshold] }
    )

    observer.observe(document.querySelector(selector))
  }

  const svg = {
    question: `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
    <path d="M2 11.1352H4V12.84H2V11.1352ZM0 3.38036C0 3.03495 0.0784317 2.70626 0.235294 2.39428C0.392157 2.08231 0.607843 1.8149 0.882353 1.59206C1.15686 1.35807 1.47712 1.17423 1.84314 1.04052C2.20915 0.906819 2.60131 0.839966 3.01961 0.839966C3.50327 0.839966 3.94118 0.923532 4.33333 1.09066C4.73856 1.25779 5.0719 1.49178 5.33333 1.79261C5.46405 1.9486 5.56863 2.09345 5.64706 2.22715C5.73856 2.36086 5.81046 2.5057 5.86275 2.66169C5.91503 2.80654 5.94771 2.97367 5.96078 3.16309C5.98693 3.3525 6 3.57534 6 3.83161C6 4.1213 5.99346 4.36643 5.98039 4.56699C5.98039 4.7564 5.96732 4.92353 5.94118 5.06838C5.91503 5.21323 5.88235 5.34136 5.84314 5.45278C5.80392 5.55306 5.75163 5.64777 5.68627 5.7369L4.33333 7.70905C4.24183 7.84275 4.1634 7.98203 4.09804 8.12687C4.03268 8.26058 4 8.40542 4 8.56141V9.89846H2V8.34414C2 8.09902 2.04575 7.86504 2.13725 7.64219C2.22876 7.41935 2.3464 7.20208 2.4902 6.99038L3.7451 5.25222C3.84967 5.10738 3.91503 4.95139 3.94118 4.78426C3.98039 4.61713 4 4.44999 4 4.28286V3.39707C4 3.16309 3.90196 2.96253 3.70588 2.7954C3.52288 2.62827 3.29412 2.5447 3.01961 2.5447C2.78431 2.5447 2.55556 2.61712 2.33333 2.76197C2.11111 2.90682 2 3.11852 2 3.39707V4.36643H0V3.38036Z"/>
    </svg>`,
    stars: `<svg width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0Z" fill="#F4BE00"/>
    <path d="M24 0L26.3511 4.76393L31.6085 5.52786L27.8042 9.23607L28.7023 14.4721L24 12L19.2977 14.4721L20.1958 9.23607L16.3915 5.52786L21.6489 4.76393L24 0Z" fill="#F4BE00"/>
    <path d="M40 0L42.3511 4.76393L47.6085 5.52786L43.8042 9.23607L44.7023 14.4721L40 12L35.2977 14.4721L36.1958 9.23607L32.3915 5.52786L37.6489 4.76393L40 0Z" fill="#F4BE00"/>
    <path d="M56 0L58.3511 4.76393L63.6085 5.52786L59.8042 9.23607L60.7023 14.4721L56 12L51.2977 14.4721L52.1958 9.23607L48.3915 5.52786L53.6489 4.76393L56 0Z" fill="#F4BE00"/>
    <path d="M72 0L74.3511 4.76393L79.6085 5.52786L75.8042 9.23607L76.7023 14.4721L72 12L67.2977 14.4721L68.1958 9.23607L64.3915 5.52786L69.6489 4.76393L72 0Z" fill="#F4BE00"/>
    </svg>`
  }

  const prices = {
    US: {
      by_one: 10,
      total: 40,
      currency: '$'
    },
    GB: {
      by_one: 10,
      total: 40,
      currency: '£'
    },
    AU: {
      by_one: 14,
      total: 56,
      currency: '$'
    },
    NZ: {
      by_one: 16,
      total: 64,
      currency: '$'
    }
  }

  const productId = '42664572944428'

  class Bundle {
    constructor() {
      this.loc = this.checkLocalization()
      this.init()
    }

    init() {
      if (this.loc === 'US' || this.loc === 'GB' || this.loc === 'AU' || this.loc === 'NZ') {
        this.drawBundle()
      }
    }

    drawBundle() {
      console.log()
      const bundle = /* html */ `
      <div class="crm_bundle_wrapper">
        <style>
          .crm_bundle {
            padding: 0 5px;
            max-width: 320px;
            margin: 5px auto 9px;
          }
          .crm_bundle h3 {
            color: #212529;
            font-size: 18px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            font-weight: 700;
            font-family: "DIN Condensed", sans-serif;
            text-align: left;
            margin-bottom: 0;
          }
          .crm_bundle .bundle_item {
            display: flex;
            gap: 12px;
            align-items: flex-start;
            border-radius: 4px 0px 4px 4px;
            border: 2px solid #FF3C7F;
            background: #FFF;
            position: relative;
            transition: all 0.3s;
          }
          .crm_bundle .bundle_item.active {
            background-color: #FF3C7F;
          }
          .crm_bundle .bundle_item.active :is(h4, p) {
            color: #FFF;
          }
          .crm_bundle .bundle_item p {
            margin: 0;
            text-align: left;
          }
          .crm_bundle .bundle_item h4 {
            font-size: 14px;
            color: #212529;
            font-family: "Roboto", sans-serif;
            line-height: 22px;
            font-weight: 700;
            text-transform: none;
            text-align: left;
            margin-bottom: 0;
          }
          .crm_bundle .bundle_item_desc {
            padding: 10px 0;
          }
          .crm_bundle .bundle_item h4+p {
            font-size: 14px !important;
            color: #6f6f6f;
            line-height: 18px !important;
            margin-bottom: 4px;
            font-weight: 400;
          }
          .crm_bundle p.bundle_item_price {
            font-size: 14px !important;
            color: #212529;
            line-height: 18px !important;
            font-weight: 400;
          }
          .crm_bundle .tooltip_bundle {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .crm_bundle .tooltip_bundle span {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #999;
            border-radius: 50%;
            position: relative;
            z-index: 1;
          }
          .crm_bundle .bundle_item.active .tooltip_bundle span {
            background: #fff;
            z-index: 1000000;
          }
          .crm_bundle .tooltip_bundle.active span {
            z-index: 1000000;
          }
          .crm_bundle .tooltip_bundle span svg {
            fill: #fff;
          }
          .crm_bundle .bundle_item.active .tooltip_bundle span svg {
            fill: #FF3C7F;
          }
          .crm_bundle .tooltip_bundle .tooltipbox {
            position: absolute;
            width: calc(100vw - 46px);
            max-width: 320px;
            padding: 16px;
            background: #FFF;
            border-radius: 6px;
            right: -7px;
            bottom: calc(100% + 8px);
            z-index: 1000000;
            display: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .crm_bundle .tooltip_bundle.active .tooltipbox {
            display: block;
          }
          .crm_bundle .tooltip_bundle .tooltipbox::after {
            content: "";
            position: absolute;
            clip-path: polygon(0% 100%, 100% 0, 0 0);
            width: 18px;
            height: 18px;
            background: #FFF;
            border-radius: 4px;
            bottom: -8px;
            right: 27px;
            transform: translateX(50%) rotateZ(-135deg);
          }
          .crm_bundle .tooltip_bundle .tooltipbox .info {
            display: flex;
            gap: 14px;
            margin-bottom: 14px;
          }
          .crm_bundle .tooltip_bundle .tooltipbox .info + p {
            font-size: 14px !important;
            color: #212529;
            line-height: 22px !important;
            font-weight: 400;
          }
          .crm_bundle .tooltip_bundle .tooltipbox .info>div {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .crm_bundle .tooltip_bundle .tooltipbox .info>div p:first-of-type {
            font-size: 16px !important;
            color: #1F4FC9;
            display: flex;
            align-items: center;
            gap: 9px;
            line-height: 22px !important;
          }
          .crm_bundle .tooltip_bundle .tooltipbox .info>div p:nth-of-type(2) {
            font-size: 14px !important;
            color: #212529;
            line-height: 22px !important;
            font-weight: 400;
          }
          .crm_bundle .tooltip_bundle .tooltipbox .info>div p:last-of-type {
            color: #1F4FC9;
            font-size: 14px !important;
            font-weight: 600;
            line-height: 18px !important;
            text-transform: uppercase;
          }
          .crm_bundle .bundle_item_img img {
            margin-bottom: 0 !important;
          }
          .crm_bundle .sale_off {
            position: absolute;
            bottom: calc(100% + 2px);
            right: -2px;
            display: block;
            padding: 6px 10px;
            background: #000;
            color: #FFF;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
            letter-spacing: 0.5px;
            font-family: "DIN Condensed", sans-serif;
            text-transform: uppercase;
            border-radius: 2px 2px 0 0;
          }
          .crm_bundle .tooltip_overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999999;
            backdrop-filter: blur(5px);
          }
          .crm_bundle .tooltip_bundle.active .tooltip_overlay {
            display: block;
          }
        </style>
        <div class="crm_bundle">
          <h3>Bundle & save</h3>
          <div class="bundle_item" data-visible="Bundle item">
            <div class="bundle_item_img">
              <img src="${git}/bundle_1.png" alt="Bundle item">
            </div>
            <div class="bundle_item_desc">
              <h4>Whole family protection kit</h4>
              <p>3 Packs + 40 Mosquito<br>Patches For Adults</p>
              <p class="bundle_item_price">${prices[this.loc].currency}${prices[this.loc].by_one.toFixed(2)} Each</p>
            </div>
            <span class="sale_off">60% off</span>
            <div class="tooltip_bundle">
              <span>${svg.question}</span>
              <div class="tooltipbox" data-visible="Bundle tooltip">
                <div class="info">
                  <img src="${git}/bundle_2.png" alt="bundle info">
                  <div>
                    <p><b>BuzzPatch</b>${svg.stars}</p>
                    <p>Mosquito Repellent Patches</p>
                    <p>40 Adult-Sized Patches</p>
                  </div>
                </div>
                <p>The same #1 best selling BuzzPatch your kiddos know and love, but with grown-up sizes and colors! (No judgment if you still want to wear the smiley faces, though.)</p>
              </div>
              <div class="tooltip_overlay"> 
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      $('#getNow .form').after(bundle)

      const item = $('.bundle_item')
      const tooltip = $('.tooltip_bundle')
      const checkoutBtn = $('#addToCart')
      const currency = checkoutBtn.attr('href').split('currency=')[1].split('&')[0]

      item.on('click', e => {
        if (e.target.closest('.tooltip_bundle')) return
        item.addClass('active')
        $('#getNow .js-packs input:checked').prop('checked', false)
        checkoutBtn.attr('href', `/cart/${productId}:1?currency=${currency}`)
        $('#getNow .js-total .pr').text(prices[this.loc].total.toFixed(2))
        $('#getNow .js-total .ps').text(60)
        pushDataLayer('exp_bundle_item_click', 'Bundle item click', 'click', 'select items block')
      })

      tooltip.on('click', function (e) {
        if (!e.target.classList.contains('tooltipbox') && !e.target.closest('.tooltipbox')) {
          tooltip.toggleClass('active')
          pushDataLayer('exp_bundle_tooltip_click', 'Bundle tooltip click', 'click', 'select items block')
        }
      })

      $('#getNow .js-packs input').on('change', function () {
        item.removeClass('active')
      })

      VisibilityofTime('.bundle_item', 'bundle', 'select items block', 1000)
      VisibilityofTime('.tooltipbox', 'bundle_tooltip', 'select items block', 1000)
    }

    checkLocalization() {
      const localization = document.cookie.match(/localization=([^;]+)/g)
      let loc = localization[0].split('=')[1]
      return loc
    }
  }

  new Bundle()
})()
