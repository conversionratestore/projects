// funtion for push data to GA4

const bundle1 = 40939284856947
const bundle2 = 40939284889715
const bundle3 = 40939284922483
const bundleSub1 = 4
const bundleSub2 = 5

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

const script1 = document.createElement('script')
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
script1.async = true
document.head.appendChild(script1)

const link = document.createElement('link')
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
link.rel = 'stylesheet'
document.head.appendChild(link)

const link2 = document.createElement('link')
link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css'
link2.rel = 'stylesheet'
document.head.appendChild(link2)

const $el = (selector) => document.querySelector(selector)
const $$el = (selector) => document.querySelectorAll(selector)

// clarity script
// const clarityInterval = setInterval(function () {
//     if (typeof clarity == 'function') {
//       clearInterval(clarityInterval);
//       clarity('set', '', 'variant_1');
//     }
//   }, 1000);

const blockVisibility = (selector, viewTime, event, location) => {
  let v1 = new IntersectionObserver(
    (entries) => {
      entries.forEach((item) => {
        if (item.isIntersecting) {
          v1.unobserve(item.target)
          setTimeout(function () {
            v2.observe(item.target)
          }, 1000 * viewTime)
        }
      })
    },
    {
      threshold: 0.5
    }
  )

  let v2 = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        pushDataLayer(
          event || `view_element_${item.target.id}`,
          'Element visibility',
          `View element on screen (${viewTime} sec or more)`,
          location || item.target.id
        )
        v1.unobserve(item.target)
      } else {
        v1.observe(item.target)
      }
      v2.unobserve(item.target)
    })
  })

  document.querySelectorAll(selector).forEach((item) => {
    v1.observe(item)
  })
}

let setExp = setInterval(function () {
  if (document.body && typeof $('').slick == 'function') {
    clearInterval(setExp)
    startMainBlock()
    startSlideInBlock()
  }
}, 100)

function startMainBlock() {
  const styleBundle = /* html */ `
    <style>
      .slick-dots {
        margin-top: 10px;
      }
      .slick-dots li {
        width: auto;
      }
      .slick-dots li button {
        height: 8px;
        width: 8px;
        border-radius: 100px;
        background-color: #D5D9DC;
        transition: all 0.3s ease-in-out;
        padding: 0;
      }
      .slick-dots li.slick-active button {
        width: 20px;
        background-color: #2975B3;
      }

      .slick-dots li button::before {
        content: '';
        display: none;
      }


      .bundle_block {
        width: 100%;
        margin: 40px 0 90px;
        background: #F8F8F8;
        border-radius: 30px;
        padding: 48px 102px;
      }
      .bundle_block h3 {
        font-size: 36px;
        font-family: 'Rubik', sans-serif;
        font-weight: 700;
        line-height: 1.2;
        color: #20425E;
        text-transform: none;
        width: 70%;
        margin: 0 auto 8px;
        text-align: center;
      }
      .bundle_block h3>span {
        color: #F2742A;
      }
      .bundle_block h3+p {
        font-size: 14px;
        color: #5E778B;
        text-align: center;
        margin-bottom: 28px;
      }
      .bundle_block__slider {
        width: 100%;
        display: flex;
        column-gap: 40px;
        align-items: stretch;
      }
      .bundle_block__slider__item {
        width: calc((100% - 80px) / 3);
        display: flex;
        column-gap: 48px;
        padding: 20px 32px;
        background-color: #fff;
        border-radius: 15px;
        border: 2px solid #fff;
        transition: all 0.3s ease-in-out;
        position: relative;
        cursor: pointer;
      }
      .bundle_block__slider__item>div {
        width: calc((100% - 48px) / 2);
      }
      .bundle_block__slider__item .img {
        width: 100%;
        aspect-ratio: 1 / 1;
        position: relative;
      }
      .bundle_block__slider__item .img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .bundle_block__slider__item .img+p {
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        font-family: 'Rubik', sans-serif;
        color: #20425E;
        line-height: 1.3;
        margin: 8px 0;
      }
      .bundle_block__slider__item>div>p:last-child {
        font-size: 14px;
        color: #F2742A;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 3px;
      }
      .bundle_block__slider__item>div>p:last-child img:first-of-type {
        height: 16px;
      }
      .bundle_block__slider__item::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 24px;
        height: 24px;
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/plus.svg?v=1693318633') center center no-repeat;
        transform: translate(-50%, -50%);
        background-size: contain;
      }
      .bundle_block__slider__item.active {
        border: 2px solid #2975B3;
        background: #E4F4FE;
      }
      .bundle_block__slider__item:first-child .prod1 .img:after,
      .bundle_block__slider__item:nth-child(2) .prod1 .img:after,
      .bundle_block__slider__item:first-child .prod2 .img:after {
        content: 'x12';
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 28px;
        width: 28px;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        background: #F2742A;
        border-radius: 50%;
        top: 0;
        right: 10%;
      }
      .bundle_block__slider__item:first-child .prod2 .img:after {
        content: 'x4';
      }
      .bundle_block__slider__item:nth-child(2) .prod1 .img:after {
        content: 'x3';
      }
      p.aster {
        display: flex;
        font-size: 14px;
        color: #5E778B;
        margin: 28px 0;
        position: relative;
        width: 100%;
        padding-bottom: 31px;
      }
      p.aster img {
        display: inline-block;
        margin: 0 8px 0 2px;
        width: 20px;
      }
      p.aster span {
        color: #F2742A;
      }
      p.aster b {
        font-size: 16px;
        font-weight: 700;
        font-family: 'Rubik', sans-serif;
        margin-right: 8px;
      }
      p.aster::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: #FFF;
        border-radius: 3px;
      }
      .total_bundle_block {
        display: flex;
        align-items: center;
      }
      .total_bundle_block .subscription {
        width: 45%;
        margin-right: 3%;
        align-items: start;
        border-radius: 12px;
        border: 1px solid #DBB64E;
        background: #FEF7E7;
        padding: 16px;
        column-gap: 12px;
        flex-wrap: nowrap;
        position: relative;
        cursor: pointer;
        display: flex;
      }
      .total_bundle_block .subscription.hide {
        display: none;
      }
      .total_bundle_block .subscription input {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        position: absolute;
      }
      .total_bundle_block .subscription input + span {
        display: flex;
        height: 24px;
        width: 24px;
        background-color: #fff;
        border-radius: 3px;
        border: 1px solid #20425E;
        flex-shrink: 0;
      }
      .total_bundle_block .subscription input:checked + span::after {
        content: "";
        width: 24px;
        height: 24px;
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/check.svg?v=1691013967') center center no-repeat;
        background-size: contain;
        display: block;
        margin: auto;
      }
      .total_bundle_block .subscription p {
        font-size: 12px;
        line-height: 1.5;
      }
      .total_bundle_block .subscription p b {
        font-size: 16px;
        font-weight: 700;
      }
      .total_bundle_block .subscription p b span {
        color: #F2742A;
      }
      .total_bundle_block .total_bundle {
        font-family: 'Rubik', sans-serif;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.3;
        margin-right: 20px;
        margin-left: auto;
      }
      .total_bundle_block .total_bundle span {
        color: #5E778B;
        text-decoration: line-through;
        font-size: 18px;
        font-weight: 400;
        margin-right: 6px;
      }

      .total_bundle_block button, .popup_bundle button, .aside_wrapper .footer-card .add_to_cart {
        font-family: 'Roboto', sans-serif;
        display: flex;
        padding: 12px 40px;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        background: #20425E;
        border: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-transform: none;
        cursor: pointer;
        color: #fff;
        width: 300px;
      }
      .bundle_block h3 p, .aside_bundle h3 p {
        display: inline-block;
        position: relative;
        cursor: pointer;
      }
      .bundle_block h3 p .arrow, .aside_bundle h3 p .arrow {
        display: none;
        position: absolute;
        background-color: #fff;
        width: 20px;
        height: 10px;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        z-index: 2;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
      }
      .bundle_block h3 p span, .aside_bundle h3 p span {
        display: none;
        position: absolute;
        font-size: 16px;
        text-align: left;
        padding: 20px;
        background: #fff;
        border-radius: 6px;
        color: #5E778B;
        line-height: 1.5;
        box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
        z-index: 1;
        top: 36px;
        width: 290px;
        right: -10px;
        font-weight: 400;
        letter-spacing: 0;
      }
      .bundle_block h3 p.open span,
      .bundle_block h3 p.open .arrow,
      .aside_bundle h3 p.open span,
      .aside_bundle h3 p.open .arrow {
        display: block;
      }
      .bundle_block h3 p span b, .aside_bundle h3 p span b {
        display: flex;
        align-items: center;
        column-gap: 8px;
        font-weight: 700;
        margin-bottom: 8px;
        color: #20425E;
        line-height: 1.25;
      }

      @media (min-width: 769px) {
        .bundle_block .mob, .popup_bundle .mob {
          display: none;
        }
      }
      @media (max-width: 768px) {
        .bundle_block .desktop, .popup_bundle .desktop {
          display: none;
        }
        .bundle_block {
          padding: 20px;
        }
        .bundle_block h3 {
          font-size: 18px;
          width: 100%;
        }
        .bundle_block h3+p {
          margin-bottom: 16px;
        }
        .bundle_block__slider {
          flex-wrap: wrap;
          background-color: #E4F4FE;
          margin-bottom: 40px !important;
        }
        .bundle_block__slider__item {
          width: 100%;
          border-radius: 0;
          background-color: #E4F4FE;
          border: 2px solid #E4F4FE;
        }
        .bundle_block__slider__item.active {
          border: 2px solid #E4F4FE;
        }
        .total_bundle_block {
          flex-direction: column;
        }
        .bundle_block__slider__item.slick-slide {
          display: flex !important;
        }
        .total_bundle_block .subscription {
          width: 100%;
          margin-bottom: 16px;
          margin-right: 0;
        }
        .total_bundle_block .total_bundle {
          margin: 0;
        }
        .total_bundle_block button {
          width: 100%;
          margin-top: 16px;
        }
        .bundle_block .slick-dots {
          bottom: -35px;
        }
      }
    </style>
  `
  const bundleItem = function () {
    let html = ''
    for (let i = 0; i < 3; i++) {
      html += /* html */ `
      <div class="bundle_block__slider__item ${i === 1 ? 'active' : ''}" 
      data-variant="${i === 0 ? bundle3 : i === 1 ? bundle2 : bundle1}"
      data-price="${i === 0 ? 257.53 : i === 1 ? 65.36 : 33.38}"
      data-oldprice="${i === 0 ? 363.83 : i === 1 ? 84.96 : 36.98}"
      data-plan="${i === 0 ? bundleSub1 : i === 1 ? bundleSub2 : 0}">
        <div class="prod1">
          <div class="img">
            <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pack1.png?v=1693319984" alt="pack somnifix">
          </div>
          <p>SomniFix Mouth Strips</p>
          <p>
            <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/patch_orange.svg?v=1691586030" alt="patch">
            <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/close_orange.svg?v=1691586030" alt="cross">
            ${i === 0 ? 365 : i === 1 ? 84 : 28}
          </p>
        </div>
        <div class="prod2">
          <div class="img">
              <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/melatonin.png?v=1693402246" alt="melatonin">
          </div>
          <p>Melatonin<br>5 Mg</p>
          <p>
            <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pill.svg?v=1693315860" alt="pill">
            <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/close_orange.svg?v=1691586030" alt="cross">
            ${i === 0 ? 400 : 100}
          </p>
        </div>
      </div>
    `
    }
    return html
  }

  const bundleBlock = /* html */ `
      <div class="bundle_block">
        <h3>Bundle up for better sleep 
        Mouth Strips and Melatonin!<span class="desktop">*</span>
          <p class="mob"><img src="https://cdn.shopify.com/s/files/1/2572/8006/files/info_orange.svg?v=1693317036" alt="info"><i class="arrow"></i>
            <span><b><img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pill2.svg?v=1693318832" alt="pill">Melatonin 5mg:</b>
              Non habit-forming vegetarian capsules to support deeper & healthier natural sleep for up to 6 hours! Safe for long term use.
            </span>
          </p>
        </h3>
        <p>Combo offer: <b>SAVE 23%</b> on bundle</p>
        <div class="bundle_block__slider">
          ${bundleItem()}
        </div>
        <p class="aster desktop"><span>*</span><img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pill2.svg?v=1693318832" alt="pill"><b>Melatonin 5mg:</b>
        Non habit-forming vegetarian capsules to support deeper & healthier natural sleep for up to 6 hours! Safe for long term use.</p>
        <div class="total_bundle_block">
          <label class="subscription">
            <input type="checkbox" name="subscription">
            <span></span>
            <p> 
              <b>Subscribe and <span>save 10%</span></b><br>
              Auto delivery every <span>3 months</span> for <span>$58.82</span>. No hidden fees. Сancel any
              time.
            </p>
          </label>
          <p class="total_bundle"><span>$84.96</span>$65.36</p>
          <button data-selected="${bundle2}" data-sub="0">ADD TO CART</button>
        </div>
      </div>
  `

  const stylePopupBundle = /* html */ `
    <style>
      .popup_bundle_wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: none;
      }
      .popup_bundle {
        position: absolute;
        width: 95%;
        max-width: 490px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px 0;
        background: #F8F8F8;
        border-radius: 12px;
        border: 1px solid #4090D1;
      }
      .popup_bundle_close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 24px;
        height: 24px;
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/close.svg?v=1693318633') center center no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      .popup_bundle .logo {
        margin: 0 auto 28px;
        display: block;
      }
      .popup_bundle .logo+p {
        font-size: 20px;
        text-align: center;
        color: #20425E;
        font-family: 'Rubik', sans-serif;
        line-height: 1.5;
        margin-bottom: 20px;
        padding: 0 40px;
      }
      .popup_bundle .logo+p b {
        text-transform: uppercase;
      }
      .popup_bundle_products {
        display: flex;
        column-gap: 48px;
        margin-bottom: 20px;
        width: 100%;
        padding: 24px 40px;
        background-color: #E4F4FE;
        text-align: center;
        position: relative;
      }
      .popup_bundle_products>div {
        width: calc((100% - 48px) / 2);
      }
      .popup_bundle_products::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        width: 24px;
        height: 24px;
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/plus.svg?v=1693318633') center center no-repeat;
        transform: translate(-50%, -50%);
        background-size: contain;
      }
      .popup_bundle_products .img {
        width: 100px;
        margin: 0 auto;
        aspect-ratio: 1 / 1;
        position: relative;
      }
      .popup_bundle_products .img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .popup_bundle_products .img+p {
        font-size: 14px;
        font-weight: 700;
        font-family: 'Rubik', sans-serif;
        color: #20425E;
        line-height: 1.3;
        margin: 8px 0;
      }
      .popup_bundle_products>div>p:last-child {
        font-size: 14px;
        color: #F2742A;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 3px;
      }
      .popup_bundle_products>div>p:last-child img:first-of-type {
        height: 16px;
      }
      .popup_bundle .total_bundle {
        font-family: 'Rubik', sans-serif;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 16px;
      }
      .popup_bundle .total_bundle span {
        color: #5E778B;
        text-decoration: line-through;
        font-size: 18px;
        font-weight: 400;
        margin-right: 6px;
      }
      .popup_bundle button {
        margin: 0 auto 16px;
        width: calc(100% - 80px);
      }
      .popup_bundle .info {
        font-size: 14px;
        display: flex;
        align-items: start;
        column-gap: 8px;
        line-height: 1.5;
        padding: 0 40px;
      }
      @media (max-width: 768px) {
        .popup_bundle_wrapper {
          padding: 30px 0;
          overflow-y: auto;
        }
        .popup_bundle {
          position: relative;
          top: unset;
          left: unset;
          transform: unset;
          margin: 0 auto;
          padding: 25px 0;
        }
        .popup_bundle .logo+p {
          font-size: 18px;
        }
        .popup_bundle_products {
          padding: 20px 32px;
        }
        .popup_bundle button {
          width: calc(100% - 64px);
        }
        .popup_bundle .info {
          padding: 0 32px;
        }
      }
    </style>
  `

  const popupBundle = /* html */ `
    <div class="popup_bundle_wrapper">
      <div class="popup_bundle">
        <div class="popup_bundle_close"></div>
        <img src="https://conversionratestore.github.io/projects/somnifix/img/logo.svg" alt="logo" class="logo">
        <p>Did you know that 
        <b>you CAN save 10%</b> on the "Mouth Strips + Melatonin" <b>bundle</b>? 
        Here's to a good sleep!</p>
        <div class="popup_bundle_products">
          <div class="prod1">
            <div class="img">
              <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pack1.png?v=1693319984" alt="pack somnifix">
            </div>
            <p>SomniFix Mouth Strips</p>
            <p>
              <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/patch_orange.svg?v=1691586030" alt="patch">
              <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/close_orange.svg?v=1691586030" alt="cross">
              <span>84</span>
            </p>
          </div>
          <div class="prod2">
            <div class="img">
                <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/melatonin.png?v=1693402246" alt="melatonin">
            </div>
            <p>Melatonin<br class="mob">5 Mg</p>
            <p>
              <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pill.svg?v=1693315860" alt="pill">
              <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/close_orange.svg?v=1691586030" alt="cross">
              <span>100</span>
            </p>
          </div>
        </div>
        <p class="total_bundle"><span>$84.96</span>$58.82</p>
        <button data-sub="${bundleSub1}" data-selected="${bundle2}">Save 10% on BUNDLE</button>
        <p class="info">
          <img src="https://cdn.shopify.com/s/files/1/2572/8006/files/attention_orange.svg?v=1693317010" alt="attention">
          <span>The offer is time-limited, so don't miss your chance to improve your sleep.</span>
        </p>
      </div>
    </div>
  `

  document.head.insertAdjacentHTML('beforeend', styleBundle)
  document.head.insertAdjacentHTML('beforeend', stylePopupBundle)
  document.body.insertAdjacentHTML('beforeend', popupBundle)
  $el('#money_back').insertAdjacentHTML('beforebegin', bundleBlock)

  $('.bundle_block__slider__item:not(.slick-slide)').on('click', function () {
    $('.bundle_block__slider__item').removeClass('active')
    $(this).addClass('active')
    setVariant()
  })

  $('.bundle_block input[name="subscription"]').on('change', function () {
    setVariant()
  })

  $('.bundle_block h3 p').on('click', function (e) {
    $(this).toggleClass('open')
  })

  $('.bundle_block button').on('click', function (e) {
    if (!$('.bundle_block input[name="subscription"]').prop('checked') && +$(this).attr('data-selected') !== bundle1) {
      $('.popup_bundle_wrapper').show()
    } else {
      addToCartorCheckout(this)
    }
  })

  $('.popup_bundle_close').on('click', function (e) {
    $('.popup_bundle_wrapper').hide()
    $('.popup_bundle button').attr('data-sub', 0)
    $('.popup_bundle button').click()
  })

  $('.popup_bundle_wrapper').on('click', function (e) {
    if (e.target.closest('.popup_bundle')) return
    $('.popup_bundle_wrapper').hide()
    $('.popup_bundle button').attr('data-sub', 0)
    $('.popup_bundle button').click()
  })

  $('.popup_bundle button').on('click', function (e) {
    addToCartorCheckout(this)
    $('.popup_bundle_wrapper').hide()
  })

  $(document).on('click', function (e) {
    console.log(e.target)
    if (e.target.closest('.bundle_block h3 p')) return
    $('.bundle_block h3 p').removeClass('open')
  })

  if (window.innerWidth < 769) {
    $('.bundle_block__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: false,
      initialSlide: 1
    })

    $('.bundle_block__slider').on('afterChange', function (event, slick, currentSlide) {
      $('.bundle_block__slider__item').removeClass('active')
      $('.bundle_block__slider__item').eq(currentSlide).addClass('active')
      setVariant()
    })
  }

  function setVariant() {
    let variant = $('.bundle_block__slider__item.active').data('variant')
    let price = $('.bundle_block__slider__item.active').data('price')
    let oldprice = $('.bundle_block__slider__item.active').data('oldprice')
    let sub = $('.bundle_block__slider__item.active').data('plan')

    // update data in bundle block
    if (variant === bundle1) {
      $('.bundle_block label.subscription').addClass('hide')
      $('.bundle_block input[name="subscription"]').prop('checked', false)
    } else {
      $('.bundle_block label.subscription').removeClass('hide')
      $('.bundle_block label.subscription p>span:last-of-type').html(`$${(price * 0.9).toFixed(2)}`)
      $('.bundle_block label.subscription p>span:first-of-type').text(variant === bundle2 ? '3 months' : '12 months')
    }

    if ($('.bundle_block input[name="subscription"]').prop('checked')) {
      price = (price * 0.9).toFixed(2)
    }

    $('.total_bundle_block button').attr('data-selected', variant)
    $('.total_bundle_block .total_bundle').html(`<span>$${oldprice}</span>$${price}`)
    if ($('.bundle_block input[name="subscription"]').prop('checked')) {
      $('.total_bundle_block button').attr('data-sub', sub)
    } else {
      $('.total_bundle_block button').attr('data-sub', 0)
    }

    // update data in popup
    if (!$('.bundle_block input[name="subscription"]').prop('checked') && variant !== bundle1) {
      $('.popup_bundle .total_bundle').html(`<span>$${oldprice}</span>$${(price * 0.9).toFixed(2)} `)
      $('.popup_bundle button').attr('data-sub', sub)
      $('.popup_bundle button').attr('data-selected', variant)
      $('.popup_bundle .prod1>p:last-child span').text(variant === bundle2 ? '84' : '365')
      $('.popup_bundle .prod2>p:last-child span').text(variant === bundle2 ? '100' : '400')
    }
  }
}

function startSlideInBlock() {
  const style = /* html */ `
    <style>
      .aside_wrapper {
        border-radius: 22px;
        border: 1px solid #D5D9DC;
        background: #F5F6F7;
        padding: 14px;
        overflow-y: auto;
        height: calc(100vh - 60px);
      }
      .footer-card .aside_subscribe {
        border: 1px solid #DBB64E;
        margin-bottom: 24px;
        margin-top: 0;
      }
      .aside_parent .middle-block,
      .aside_to_checkout,
      .aside_wrapper .total{
        display: none;
      }
      .aside_wrapper .aside_parent {
        margin-top: 0;
        padding-top: 0;
      }
      .aside_wrapper .footer-card {
        position: sticky;
        bottom: 0;
        background: #F5F6F7;
        border-top: 1px solid #D5D9DC;
        width: calc(100% + 28px);
        margin: 0 -14px 0;
        padding: 14px 14px 0;
      }
      .aside_wrapper .footer-card .add_to_cart {
        text-transform: uppercase;
        margin-top: 15px;
        width: 100%;
      }
      .aside_wrapper::-webkit-scrollbar {
        width: 5px;
      }
      .aside_wrapper::-webkit-scrollbar-track {
        background: #F5F6F7;
      }
      .aside_wrapper::-webkit-scrollbar-thumb {
        background: #D5D9DC;
        border-radius: 10px;
      }
      .aside_bundle {
        background-color: #fff;
        padding: 20px 14px;
        border-top: 1px solid #D5D9DC;
        width: calc(100% + 28px);
        margin: 14px -14px 0;
      }
      .aside_bundle h3 {
        font-size: 18px;
        font-weight: 500;
        font-family: 'Rubik', sans-serif;
        line-height: 1.2;
        margin-bottom: 12px;
        color: #20425E;
        text-align: center;
        text-transform: none;
        letter-spacing: 0;
      }
      .bundle_select {
        width: 100%;
        padding: 6px 16px;
        position: relative;
        border-radius: 6px;
        border: 1px solid #D5D9DC;
        cursor: pointer;
      }
      .bundle_select.open ul {
        display: block;
      }
      .bundle_select::after {
        content: '';
        display: block;
        position: absolute;
        right: 16px;
        top: 50%;
        width: 12px;
        height: 12px;
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/chevron_down.svg?v=1686134411') center center no-repeat;
        background-size: contain;
        transform: translateY(-50%);
      }
      .bundle_select .selected_item {
        font-size: 14px;
        font-weight: 700;
        line-height: 1.5;
        color: #1E415F;
      }
      .bundle_select ul {
        display: none;
        position: absolute;
        top: calc(100% + 5px);
        left: 0;
        border-radius: 6px;
        background: #FFF;
        box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.15);
        overflow: hidden;
        z-index: 2;
        width: 100%;
      }
      .bundle_select ul li {
        font-size: 12px;
        padding: 8px 16px;
        cursor: pointer;
      }
      .bundle_select ul li.selected {
        background: #FEF7E7;
        color: #F2742A;
      }
      .bundle_selected {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 8px;
        border-radius: 12px;
        background: #F8F8F8;
        padding: 16px;
        cursor: pointer;
        border: 2px solid #F8F8F8;
      }
      .bundle_selected.active {
        border: 2px solid #2975B3;
        background: #F1F7FC;
      }
      .bundle_selected .b_save {
        position: absolute;
        top: 7px;
        right: 6px;
        padding: 2px 6px;
        border-radius: 5px;
        background: #F0752D;
        color: #fff;
        font-size: 10px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0.2px;
        text-transform: uppercase;
      }
      .bundle_selected .prod1 {
        margin-right: 30px;
        text-align: center;
        width: 44px;
        position: relative;
      }
      .bundle_selected .prod2 {
        margin-right: 16px;
      }
      .bundle_selected .prod1 p b, .bundle_selected .prod2 p b {
        font-weight: 400;
      }
      .bundle_selected .b_week {
        font-size: 16px;
        font-weight: 700;
        color: #1E415F;
        line-height: 1.2;
        margin-bottom: 5px;
      }
      .bundle_selected .b_summ {
        font-size: 13px;
        color: #1E415F;
        line-height: 1.5;
      }
      .bundle_selected .b_summ span:first-of-type {
        text-decoration: line-through;
        color: #5E788D;
      }
      .bundle_selected .prod1 .prod_img, .bundle_selected .prod2 .prod_img {
        height: 20px;
        margin-bottom: 5px;
      }
      .bundle_selected .prod1 .prod_img {
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/patch_blue.svg?v=1693558288') center center no-repeat;
        background-size: contain;
      }
      .bundle_selected .prod2 .prod_img {
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/pill2.svg?v=1693318832') center center no-repeat;
        background-size: contain;
      }
      .bundle_selected.active .prod1 .prod_img {
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/patch_orange.svg?v=1691586030') center center no-repeat;
        background-size: contain;
      }
      .bundle_selected.active .prod2 .prod_img {
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/pill.svg?v=1693315860') center center no-repeat;
        background-size: contain;
      }
      .bundle_selected .prod1 p span, .bundle_selected .prod2 p span {
        display: inline-block;
        height: 10px;
        width: 10px;
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/close.svg?v=1685974008') center center no-repeat;
        background-size: contain;
        margin-left: 5px;
      }
      .bundle_selected.active .prod1 p span, .bundle_selected.active .prod2 p span {
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/close_orange.svg?v=1691586030') center center no-repeat;
      }
      .aside_parent .swatchCustom__item_new:not(.active) {
        background: #fff !important;
      }
      .bundle_selected .prod1 p, .bundle_selected .prod2 p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        line-height: 1;
        color: #1E415F;
      }
      .bundle_selected.active .prod1 p, .bundle_selected.active .prod2 p {
        color: #F2742A;
      }
      .bundle_selected .prod1::after {
        content: '';
        width: 14px;
        height: 14px;
        position: absolute;
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
        background: url('https://cdn.shopify.com/s/files/1/2572/8006/files/plus.svg?v=1693318633') center center no-repeat;
      }
    </style>
  `

  const bundleBlock = /* html */ `
    <div class="aside_bundle">
      <h3>Bundle up for better sleep<br>
        Mouth Strips and Melatonin!
        <p><img src="https://cdn.shopify.com/s/files/1/2572/8006/files/info_orange.svg?v=1693317036" alt="info"><i class="arrow"></i>
          <span><b><img src="https://cdn.shopify.com/s/files/1/2572/8006/files/pill2.svg?v=1693318832" alt="pill">Melatonin 5mg:</b>
            Non habit-forming vegetarian capsules to support deeper & healthier natural sleep for up to 6 hours! Safe for long term use.
          </span>
        </p>
      </h3>
      <div class="bundle_select">
        <div class="selected_item">
          Bundle for 3 months
        </div>
        <ul>
          <li data-variant="${bundle3}" data-price="257.53" data-oldprice="363.83" data-plan="${bundleSub1}" data-save="29">Bundle for 12 months</li>
          <li data-variant="${bundle2}" data-price="65.36" data-oldprice="84.96" data-plan="${bundleSub2}" data-save="23" class="selected">Bundle for 3 months</li>
          <li data-variant="${bundle1}" data-price="33.38" data-oldprice="36.98" data-plan="0" data-save="10">Bundle for 1 month</li>
        </ul>
      </div>
      <div class="bundle_selected">
        <div class="prod1">
          <div class="prod_img"></div>
          <p><span></span><b>84</b></p>
        </div>
        <div class="prod2">
          <div class="prod_img"></div>
          <p><span></span><b>100</b></p>
        </div>
        <div class="b_price">
          <p class="b_week"><span>$5.45</span>/week</p>
          <p class="b_summ">Total: <span>$84.96</span> <span>$65.36</span></p>
        </div>
        <span class="b_save">Save 23%</span>
      </div>
    </div>
  `

  $('.footer-card').before(bundleBlock)
  document.head.insertAdjacentHTML('beforeend', style)
  document
    .querySelector('.footer-card')
    .insertAdjacentHTML(
      'beforeend',
      '<button class="add_to_cart" data-selected="32115046023283" data-sub="0">Add to cart</button>'
    )

  $('.aside_bundle h3 p').on('click', function (e) {
    $(this).toggleClass('open')
  })

  $('.aside_subscribe').after($('.footer-card .prices'))

  $('.aside_bundle .bundle_select').on('click', function (e) {
    if (e.target.closest('ul')) return
    $(this).toggleClass('open')
  })

  $('.aside_bundle .bundle_select li').on('click', function (e) {
    $('.aside_bundle .bundle_select li').removeClass('selected')
    $(this).addClass('selected')
    $('.aside_bundle .bundle_select .selected_item').text($(this).text())
    $('.aside_bundle .bundle_select').removeClass('open')
    $('.aside_subscribe__checkbox').prop('checked', false)
    setVariant()
  })

  $('.aside_bundle .bundle_selected').on('click', function (e) {
    $(this).addClass('active')
    $('.swatchCustom__item_new').removeClass('active')
    $('.aside_subscribe__checkbox').prop('checked', false)
    setVariant()
  })

  $('.swatchCustom__item_new').on('click', function (e) {
    $('.swatchCustom__item_new').removeClass('active')
    $(this).addClass('active')
    $('.aside_bundle .bundle_selected').removeClass('active')
    const variant = $(this).data('variant')
    $('.footer-card .add_to_cart').attr('data-selected', variant)
    $('.footer-card .add_to_cart').attr('data-sub', 0)
  })

  $('.footer-card .add_to_cart').on('click', function (e) {
    addToCartorCheckout(this)
  })

  document.querySelector('.aside_subscribe__checkbox').addEventListener('change', function (e) {
    e.preventDefault()
    e.stopPropagation()
    if ($('.aside_bundle .bundle_selected').hasClass('active')) {
      setVariant()
    } else {
      const sub = $('.swatchCustom__item_new.active').data('planid')
      $('.footer-card .add_to_cart').attr('data-sub', sub)
    }
  })

  $(document).on('click', function (e) {
    if (e.target.closest('.aside_bundle h3 p')) return
    $('.aside_bundle h3 p').removeClass('open')
  })

  $(document).on('click', function (e) {
    if (e.target.closest('.aside_bundle .bundle_select')) return
    $('.aside_bundle .bundle_select').removeClass('open')
  })

  function setVariant() {
    let variant = $('.aside_bundle .bundle_select li.selected').data('variant')
    let price = $('.aside_bundle .bundle_select li.selected').data('price')
    let oldprice = $('.aside_bundle .bundle_select li.selected').data('oldprice')
    let sub = $('.aside_bundle .bundle_select li.selected').data('plan')
    let save = $('.aside_bundle .bundle_select li.selected').data('save')

    $('.aside_bundle .bundle_selected .prod1 p b').text(variant === bundle2 ? '84' : variant === bundle3 ? '365' : '28')
    $('.aside_bundle .bundle_selected .prod2 p b').text(variant === bundle3 ? '400' : '100')
    $('.aside_bundle .bundle_selected .b_week span').text(`$${(price / 4).toFixed(2)}`)
    $('.aside_bundle .bundle_selected .b_summ span:first-of-type').text(`$${oldprice}`)
    $('.aside_bundle .bundle_selected .b_summ span:last-of-type').text(`$${price}`)
    $('.aside_bundle .bundle_selected .b_save').text(`Save ${save}%`)

    $('.footer-card .add_to_cart').attr('data-selected', variant)

    if ($('.aside_bundle .bundle_selected').hasClass('active')) {
      $('.footer-card .prices').html(`<span class="l-through">$${oldprice}</span><span>$${price}</span>`)
    }

    if ($('.aside_subscribe__checkbox').prop('checked')) {
      $('.footer-card .add_to_cart').attr('data-sub', sub)
      $('.footer-card .prices').html(
        `<span class="l-through">$${oldprice}</span><span>$${(price * 0.9).toFixed(2)}</span>`
      )
    } else {
      $('.footer-card .add_to_cart').attr('data-sub', 0)
    }

    if (variant == bundle1) {
      $('.footer-card .aside_subscribe').removeClass('active')
    } else {
      $('.footer-card .aside_subscribe').addClass('active')
      $('.footer-card .aside_subscribe .aside_subscribe__info').html(
        `Auto delivery every ${variant === bundle2 ? 3 : 12} month for $${(price * 0.9).toFixed(
          2
        )}.<br>No hidden fees. Сancel anytime.`
      )
    }
  }
}

async function addToCartorCheckout(button) {
  try {
    const itemId = $(button).attr('data-selected')
    const planId = +$(button).attr('data-sub')
    const itemQuantity = 1
    const subscribe = !!planId

    let add = true

    $('.loader_custom').addClass('active')
    let formData = {
      items: [
        {
          id: itemId,
          quantity: itemQuantity
        }
      ]
    }
    if (subscribe) {
      formData = {
        items: [
          {
            id: itemId,
            quantity: itemQuantity,
            selling_plan: planId
          }
        ]
      }
      const cart = await fetch('/cart.js').then((res) => res.json())

      if (cart.items.length == 0) {
        const addCart = await addToCart(formData)
        window.location.href = '/checkout'
      } else {
        cart.items.forEach((item) => {
          if (item.selling_plan_allocation && item.selling_plan_allocation.selling_plan.id == planId) {
            add = false
          }
        })

        if (add) {
          const addCart = await addToCart(formData)
          window.location.href = '/cart'
        } else {
          window.location.href = '/cart'
        }
      }
    } else {
      const addCart = await addToCart(formData)
      window.location.href = '/cart'
    }
    $('.loader_custom').removeClass('active')
  } catch (e) {
    console.log(e)
  }
}
