; (function () {
  // -------------------------------------
  // CONSTANTS
  // ------------------------------------- 
  const dir = `https://conversionratestore.github.io/projects/geeni/img/`
  const WAIT_INTERVAL_TIMEOUT = 100
  const media = window.matchMedia("(max-width: 1023px)").matches

  let discountChange = true

  /* CSS & HTML */
  const styleBase = `
<style>
    .line-vertical {
        width: 1px;
        height: 14px;
        background: #D9D9D9;
        margin: 0 16px;
    }
    .d-flex  {
        display: flex;
    }
    .items-center  {
        align-items: center;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .items-end {
        align-items: flex-end;
    }
    .relative {
        position: relative;
    }
    .d-none {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        .d-lg-flex {
            display: flex;
        }
        .justify-lg-between {
            justify-content: space-between;
        }
        .d-lg-block {
            display: block;
        }
        .d-lg-none {
            display: none;
        }
        .justify-lg-start {
            justify-content: flex-start;
        }
    }
  </style>`
  const stylePDP = /*html*/`
<style class="style-pdp">
    .product__alternates, 
    .selector-wrapper--qty, 
    .payments-exp ul li iframe.paypalLight, 
    .payments-exp ul li [data-testid="GooglePay-button"],
    .product__accordions,
    .product__block:not(.product__title-and-price, .product__price-and-badge, .product__form__wrapper, .product__description),
    .MainTabarnappUIContainer,
    #shopify-section-template--16711182876924__06a1d96e-d388-4a9e-b044-c646f1b0c2bf,
    .transparent-header:not(#shopify-section-template--16711182876924__a03e6f6c-22fb-4b5c-a452-fea76cc1a100) {
        display: none!important;
    }
    #shopify-section-template--16711182876924__16842542196ee361cd,
    #shopify-section-template--16711182876924__a03e6f6c-22fb-4b5c-a452-fea76cc1a100,
    .index-section {
        order: 1;
    }
    .main-content {
        display: flex;
        flex-direction: column;
    }
     .shopify-installments__learn-more {
      color: #023F88 !important;
    }
    .product__description {
        padding-bottom: 0;
    }
    .product-single {
        padding-top: 0;
    }
    .product__title {
        color: var(--font-h, #1B1B1B);
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px;
        padding-bottom: 4px;
    }
    .yotpo-sr-bottom-line-score {
        font-weight: 500!important;
        font-family: Avenir Next!important;
        font-size: 14px!important;
    }
    .product__reviews {
        margin-bottom: 12px;
    }
    .manufacturer {
        background: var(--bg-light-blue, #E8F8FE);
        color: var(--Main-Blue, #023F88);
        text-align: center;
        font-family: Avenir Next;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20.781px; /* 148.437% */
        text-transform: uppercase;
        padding: 9px;
        margin: -4px -20px 0;
    }
    .manufacturer svg {
        margin-right: 8px;
    }
    .pack_size p {
        color: var(--font-h, #1B1B1B);
        font-family: Avenir Next;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
    }
    .pack_size ul {
        margin: 0;
    }
    .pack_size ul li.sold-out{
      background: #ddd;
    }
    .pack_size > p {
        font-weight: 700;
        margin: 16px 0 12px;
    }
    .pack_size li {
        border-radius: 10px;
        border: 1px solid #DEDEDE;
        background: var(--bg-light-grey, #F7F7F7);
        padding: 3px 16px 3px 3px;
        cursor: pointer;
        position: relative;
        margin: 0 0 6px 0;
    }
    .pack_size li * {
        pointer-events: none;
    }
    .pack_size li img {
        border-radius: 8px;
        border: 1px solid #F7F7F7;
        background-color: lightgray;
        width: 72px;
        height: 72px;     
        object-fit: contain;  
        flex-shrink: 0;
    }
    .pack_size li.selected {
        border: 2px solid var(--Secondary-blue, #00B0EE);
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        padding: 2px 15px 2px 2px;
    }
    .pack_size li .count {
        position: absolute;
        top: 3px;
        right: 4px;
        z-index: 1;
        color: var(--font-blue, #023F88);
        font-size: 14px;
        font-weight: 500;
        line-height: 22px; 
    }
    .pack_size li .name {
        font-weight: 600;
    }
    .pack_size li > .relative {
        margin-right: 12px;
        height: 72px;
    }
    .pack_size li .title {
        color: var(--font-body, #5B5B5B);
        font-size: 14px;
        font-weight: 400;
    }
    .pack_size .prices {
        margin-left: auto;
        color: #000;
font-family: Avenir Next;
font-size: 20px;
font-weight: 600;
line-height: 28px; /* 140% */
    }
    p.compare {
        color: #BBB!important;
        font-weight: 500;
        text-decoration-line:line-through
    }
    .pr {
        color: var(--font-h, #1B1B1B);
        font-weight: 600;
    }
    .pack_size li p.pr {
        margin-left: 5px;
    }
    .saved {
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        border-radius: 0px 10px 0 10px;
        background: #53B347;   
        padding: 0 4px 0 8px;
    }
    .pack_size li .saved {
        position: absolute;
        top: -1px;
        right: -1px;
    }
    .pack_size li.selected .saved {
        top: -2px;
        right: -2px;
    }
    .product__price-and-badge .product__price {
        padding: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 10px;
    }
    .product__price-and-badge .product__price p {
        font-size: 24px;
        line-height: 32px; 
        margin: 0;
    }
    .product__price-and-badge .product__price .saved {
        font-weight: 600;
        border-radius: 0px 10px 0 10px;
        border-radius: 4px;
        line-height: 24px;
        padding: 0 10px;
        margin: 0 0 0 8px;
    }
    .product__price-and-badge .product__price p.compare {
        margin: 0 0 0 8px;
        font-weight: 400;
    }
    .product__price-and-badge .product__price p.pr:before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: 0 12px;
        background: #1B1B1B;
        flex-shrink: 0;
        display: block;
    }
    .product__price-and-badge .product__price p.name {
        font-weight: 400;
    }
    .product__price--regular {
        color: var(--font-h, #1B1B1B);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        margin: -10px 0 0 0;
    }
    .discount {
        padding-bottom: 16px;
    }
    .discount p {
        color:  #1B1B1B;
        font-size: 14px;
        line-height: 22px; 
        margin: 0 0 0 12px;
    }
    .discount b {
        font-weight: 600;
    }
    .qty_block > p {
        color: var(--font-h, #1B1B1B);
        font-size: 14px;
        line-height: 22px; 
        margin: 0;
    }
    .calc_qty {
        border-radius: 6px;
        border: 1px solid var(--Border, #D9D9D9);
        background: #FFF;
    }
    .btn_qty {
        position: relative;
        width: 34px;
        height: 40px;
        
    }
    .btn_qty:before, .btn_qty_plus:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 12px;
        height: 1px;
        background-color: #1B1B1B;
    }
    .btn_qty_plus:after  {
        width: 1px;
        height: 12px;
    }
    .btn_qty[disapled]:before, .btn_qty_plus[disapled]:after {
        background-color: #888888;
    }
    input.input_qty {
        border: none;
        border-right: 1px solid #D9D9D9;
        border-left: 1px solid #D9D9D9;
        width: 36px;
        height: 40px;
        line-height: 40px;
        padding: 0;
        color: var(--grey-black, #1C1D1D);
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        border-radius: 0;
    }
    input.input_qty::-webkit-outer-spin-button,
    input.input_qty::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input.input_qty[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }
    .compatibility_block {
        border-radius: 6px;
        border: 1px solid var(--Border, #D9D9D9);
        background: #FFF;
        margin-left: 5px;
        padding: 6px;
        height: 42px;
        width: fit-content;
    }
    .payments-exp {
        display: block!important;
    }
    .payments-exp .shopify-cleanslate ul li {
        height: auto!important;
        margin: 0!important;
        border-radius: 30px;
        overflow: hidden;
    }
    .payments-exp > p {
        display: none;
        color: var(--font-body, #5B5B5B);
        font-size: 14px;
        font-weight: 500;
        line-height: 22px; 
        position: relative;
        text-align: center;
        margin: 8px 0;
    }
    .payments-exp > p span {
        width: fit-content;
        padding: 0 8px;
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .payments-exp > p:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 1px;
        background: var(--Border, #D9D9D9);
        z-index: 0
    }
    .shop-pay-terms {
        margin-top: 12px;
    }
    .delivery {
        background: var(--bg-light-grey, #F7F7F7);
        padding: 23px 20px 12px !important;
        margin-top: 16px !important;
        margin: 0 -20px;
    }
    .delivery p {
        color: var(--font-body, #5B5B5B);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin: 0;
    }
    .delivery p.title span {
        color: var(--font-h, #1B1B1B);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding-left: 6px;
    }
    .delivery p.title {
        margin-bottom: 3px;
    }
    .delivery b {
        font-weight: 700;
        color: var(--font-h, #1B1B1B);
    }
    .delivery a {
        color: var(--Main-Blue, #023F88);
        margin-top: 11px;
        display: block;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-decoration-line: underline;
    }
    .delivery > div + .title {
      margin-top: 16px;
    }
    .warranty {
        margin: 0 -20px;
        background: var(--bg-light-blue, #E8F8FE);
        padding: 9px;
        color: var(--font-h, #1B1B1B);
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 18.81px; 
        text-transform: uppercase;
        margin-bottom: 24px;
    }
    .warranty svg {
        margin-right: 8px;
    }
    .product__description .title {
        color: var(--font-h, #1B1B1B);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin: 0 0 12px 0;
    }
    .product__description > ul {
        margin-bottom: 10px;
    }
    .product__description > ul:not(.active) li:not(:first-child) {
        display: none;
    }
    .product__description .btn_more {
        color: var(--Main-Blue, #023F88);
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        text-decoration-line: underline;
        width: 100%;
        margin-bottom: 16px;
    }
    .product__description .btn_more svg {
        margin-left: 6px;
    }
    .product__description > ul.active+.btn_more svg {
        transform: scaleY(-1);
    }
    .support {
        background: var(--bg-light-blue, #E8F8FE);
        margin: 0 -20px;
        padding: 14.5px 16px;
    }
    .support p {
        color: var(--font-h, #1B1B1B);
        margin: 0 0 0 8px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
    .support p span {
        font-weight: 400;
        margin-left: 12px;
    }
    .support p a {
        color: var(--Main-Blue, #023F88);
        font-size: 16px;
        font-weight: 600;
        line-height: 24px; 
        text-decoration: underline !important;

    }
      .support p a::after,
      .support p a::before {
        display: none !important;
      }


    /* Andrii's part */
    .product__block {
      padding-bottom: 2px !important;
    }

    .shop-pay-terms {
      font-size: 14px;
    }

   

    .product__title-and-price {
      margin-bottom: 15px !important;
    }

    .video-preview img {
      height: 100%;
      object-fit: cover;
    }

    .logo__image-link--other img,
    .logo__image-link--home  img{
            display: none;
    }
    
    .logo__image-link--other img.custom-logo,
    .logo__image-link--home  img.custom-logo{
            display: block;
            height: 100%;
    }

    .logo__image-push {
      display: none;
    }

    .video-iframe {
  width: 100%;
  height: auto;
}

.product-single__wrapper--stacked .product-single__thumbnails, .product-single__wrapper--grid .product-single__thumbnails {
      display: block !important;
    }
    

    .product-single__thumbnails {
      padding: 0;
    }
    .product-single__thumbnails .flickity-viewport {
      height: 100px !important;
    }

    .product-single__thumbnail {
      padding: 9px !important;
    }

    .product-single__thumbnail-link {
      width: 90px;
    height: 90px;
    }

    .product__reviews {
      display: flex;
      gap: 14px;
      align-items: center;
    }
    
    .review-link {
      display: flex;
      gap: 6px;
      align-items: center;


    }

    .review-link  a{
      color: #023F88;
font-family: Avenir Next;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 157.143% */
text-decoration: underline;
    }

    .yotpo.yotpo-small-box {
      border: 0 !important;
    }    

    /* sticky btn*/
    .sticky-btn-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.20);
  z-index: 120;
}

.sticky-btn-info {
  padding-left: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  background: #FFF;
}

.sticky-btn-info__product-name {
  color: var(--font-h, #1B1B1B);

  /* 16/semi */
  font-family: Avenir Next;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  /* 150% */
  margin-right: 20px;
}

.sticky-btn-info__price-wrapper {
  height: 100%;
  display: flex;
  align-items: center;

  color: #000;
  font-family: Avenir Next;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}

.sticky-btn-info__price-wrapper .sticky-btn-info__old-price {
  color: #888;
  text-decoration: line-through;
}

.sticky-btn-info__price-wrapper .sticky-btn-info__price-block {
  display: flex;
  gap: 12px;
  margin-right: 12px;
}

.sticky-btn-pack {
  display: flex;
  align-items: center;

  position: relative;
  background: var(--bg-light-grey, #F7F7F7);

  color: var(--Main-Blue, #5B5B5B);
  text-align: center;
  font-family: Avenir Next;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  /* 137.5% */
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding-inline: 16px;

  cursor: pointer;

  height: 100%;
}
.sticky-btn-pack__current {
  display: flex;
    flex-wrap: nowrap;
    align-items: center;
}

.sticky-btn-pack__current span {
  white-space: nowrap;
}

.sticky-btn-pack__current svg {
  margin-left: 40px;
}

.sticky-btn-pack__options {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  border-top: 1px solid var(--Border, #D9D9D9);
  border-right: 1px solid var(--Border, #D9D9D9);
  border-bottom: 1px solid var(--Border, #D9D9D9);
  background: var(--bg-light-grey, #F7F7F7);
  transform: scaleY(0);
  transition: transform 0.3s ease-in-out;
  transform-origin: bottom;
}

.sticky-btn-pack__options.sticky-btn-pack__options--visible {
  transform: scaleY(1);
}

.sticky-btn-pack__options p {
  width: 100%;
  margin: 0;
  padding: 12px 15px;
  text-align: left;
}

/* .sticky-btn-pack__options p:hover {
  opacity: 0.9;
} */

.sticky-btn-pack__options>p:hover {
  background: #EDEDED;
}

.sticky-btn-pack__option--active,
.sticky-btn-pack__current {
  color: var(--font-body, #023F88);
}

.sticky-btn-wrapper .add-to-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 31%;
  background: #023F88;
  color: #FFF;
  text-align: center;
  font-family: Avenir Next;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  padding: 15px;
  border: 0;
  border-radius: 0;
  cursor: pointer;
}

.add-to-cart.add-to-cart--sold {
  background-color: #ddd;

    color: var(--text-alpha-50);
}

.sticky-btn-wrapper__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #FFF;
  flex-shrink: 0;
  display: block;
}

.sticky-btn-wrapper .add-to-cart span {
  display: none;
}

/* cart */
.cart-drawer__message {
  background: var(--bg-light-grey, #F7F7F7);
  padding-top: 10px !important;
}

.cart__message__progress {
  height: 2px !important;
  background-color: #fff !important;
  border: 1px solid var(--Border, #D9D9D9);

}

.cart__message__progress__holder {
  line-height: 1;
}

.cart__message__success,
.cart__message__default {
  display: none !important;
}

.msg {
  display: none;
  align-items: center;
  gap: 4px;
  color: var(--font-h, #1B1B1B);
font-family: Avenir Next;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 22px; /* 157.143% */
}

.msg p {
  margin: 0;
}

.msg span:not(".away-from__number") {
  color: var(--Main-Blue, #023F88);
  font-weight: 600;
}

.get-ur-discount {
  display: flex;
  align-items: center;
  margin-top: 10px;

}

.get-ur-discount p {
  margin: 0px 2px 0 4px;
  color: #53B6EB;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 20px; /* 142.857% */
text-decoration: underline;
cursor: pointer;
}

.payments-cart-exp {
  display: block !important;
}

.payments-cart-exp [role="list"] li:not(:first-child) {
  display: none;
}

.payments-cart-exp .shopify-cleanslate .IcgSIE7pEVZrlnAeRS6j, 
.payments-cart-exp .shopify-cleanslate .DefhEHZZf4y32pvV7mZj {
  border-radius: 30px;
}

.cart__checkout {
  height: 54px;
}

/*.product__submit__item [name="add"] {display: none;} */

    @media screen and (max-width: 1023px) {
      .discount {
        padding-top: 16px;
      }
      .product-single__thumbnail-link {
        width: 60px;
        height: 60px;
        padding: 0;
    }
    .product-single__thumbnail {
        padding: 3px!important;
    }
    .product-single__thumbnails {
        padding: 0 0 0 15px !important;
    }

    .product-single__thumbnails .flickity-viewport {
      height: 66px !important;
    }
      
        /*#shopify-section-template--16711182876924__icons {
            margin: 0 -20px;
        }*/
        .product-single {
            padding-bottom: 0;
        }
        .index-section {
            display: none!important;
        }

        .sticky-btn-info {
          display: none;
        }

        .sticky-btn-wrapper .add-to-cart  {
          width: 100%;
        }

        .sticky-btn-wrapper .add-to-cart  span {
          display: inline;
        }
    }

    .payments-exp .shopify-cleanslate ul li{
        display: none;
      }

    .payments-exp .shopify-cleanslate ul li:first-child{
        display: block;
      }

    @media screen and (min-width: 1024px) {
      .product-single__media-slider * {
        border-radius: 0 !important;
      }

        #shopify-section-template--16711182876924__icons {
            margin-top: 60px;
        }
        .payments-exp > p {
            display: none;
        }
        .discount {
            padding: 0;
        }
        .product__form .btn--submit {
            width: 48%;
        }
        .product__submit__item {
          display: flex;
        }
        .payments-exp {
            width: 48%;
            margin-left: auto;
        }
        .payments-exp .shopify-cleanslate ul li {
            width: 100%;
            flex-basis: auto!important;
            display: none;
        }
        
        .payments-exp .shopify-cleanslate ul li > div {
            height: 54px!important;
        }
        .product__submit__item, .warranty, .delivery, .manufacturer, .support  {
            margin-left: 0;
            margin-right: 0;
        }
        .delivery {
            padding: 4px 20px 20px;
            margin-bottom: 12px;
        }
        .compatibility_block  {
            margin: 0 6px 16px 0;
        }
        .support {
            padding-right: 25px;
            padding-left: 25px;
        }
    }
  </style>`

  //for (12)
  let compatibilityHTML = (classess = '') => `  
<div class="compatibility_block ${classess}">
    <img src="${dir}compatibility_alexa.svg" alt="alexa">
    </div>
    <div class="compatibility_block ${classess}">
    <img src="${dir}compatibility_google.svg" alt="google">
  </div>`

  const stickyBtn = (productName, packs) => {
    let packsHTML
    let packSelectBlock = ''
    //let stickySelectedPack
    let btn

    if (packs) {
      console.log(packs)

      // stickySelectedPack = packs[0]

      // console.log(stickySelectedPack)

      const activePack = document.querySelector('.alternative-options__item--active .alternative-options__item-label')

      packsHTML = [...packs].map((pack, index) => {
        const packName = document.querySelectorAll('.alternative-options__item-label')[index]
        // console.log(pack.dataset)
        return /*html*/`
          <p 
            class="${packName?.innerText === activePack?.innerText ? "sticky-btn-pack__option--active" : ''}" 
            data-pack-id="${pack.dataset.id}" 
            data-pack-price="${pack.dataset.price}" 
            data-pack-compare="${pack.dataset.compare}"
          >
            ${packName?.innerText} 
          </p>
          `
      }).join('')

      packSelectBlock = /*html*/`
        <div class="sticky-btn-pack">
            <p class="sticky-btn-pack__current"><span>${document.querySelector('.alternative-options__item--active')?.innerText}</span> <svg xmlns="http://www.w3.org/2000/svg" width="13"
                height="7" viewBox="0 0 13 7" fill="none">
                <path
                  d="M7.00781 6.99609C6.72656 6.99609 6.47656 6.90234 6.28906 6.71484L1.28906 1.71484C0.882812 1.33984 0.882812 0.683594 1.28906 0.308594C1.66406 -0.0976562 2.32031 -0.0976562 2.69531 0.308594L7.00781 4.58984L11.2891 0.308594C11.6641 -0.0976562 12.3203 -0.0976562 12.6953 0.308594C13.1016 0.683594 13.1016 1.33984 12.6953 1.71484L7.69531 6.71484C7.50781 6.90234 7.25781 6.99609 7.00781 6.99609Z"
                  fill="#023F88" />
              </svg></p>
            <div class="sticky-btn-pack__options">
              <!-- <p class="sticky-btn-pack__option--active">1 Pack</p>
              <p>2 Pack</p>
              <p>3 Pack</p> -->
              ${packsHTML}
            </div>
          </div>
      `
    }

    let packPrice, packCompare

    if (!packs) {
      packPrice = document.querySelector('.product__price--regular')?.innerText
      packCompare = document.querySelector('.product__price--compare')?.innerText != '$0.00' ? document.querySelector('.product__price--compare')?.innerText : ''
    } else {
      const activePack = document.querySelector('.alternative-options__item--active').closest('li')

      packPrice = activePack.dataset.price
      packCompare = activePack.dataset.compare != '$0.00' ? activePack.dataset.compare : ''
    }


    // if (media && packs) {
    //   btn = /*html*/`
    //  <button class="add-to-cart" data-btn-link="true">Choose a Product</button>`
    // } else {
    //   const clientCTABtn = document.querySelector('[data-add-to-cart-text]')?.innerText.toLowerCase().includes('sold out') ? 'add-to-cart--sold' : ''

    //   btn = /*html*/`
    //   <button class="add-to-cart ${clientCTABtn}">
    //     ${clientCTABtn ? 'Sold out' : 'Add to cart'}
    //     <span class="sticky-btn-wrapper__dot"></span>
    //     <span class="sticky-btn-wrapper__price">${packPrice}</span>
    //   </button>`
    // }

    const clientCTABtn = document.querySelector('[data-add-to-cart-text]')?.innerText.toLowerCase().includes('sold out') ? 'add-to-cart--sold' : ''

    btn = /*html*/`
      <button class="add-to-cart ${clientCTABtn}">
        ${clientCTABtn ? 'Sold out' : 'Add to cart'}
        <span class="sticky-btn-wrapper__dot"></span>
        <span class="sticky-btn-wrapper__price">${packPrice}</span>
      </button>`

    return /*html*/`
     <div class="sticky-btn-wrapper">
    <div class="sticky-btn-inner d-flex">
      <div class="sticky-btn-info">
        <p class="sticky-btn-info__product-name">${productName}</p>
        <div class="sticky-btn-info__price-wrapper d-flex">
          <div class="sticky-btn-info__price-block">
            <p class="sticky-btn-info__price">${packPrice}</p>
            <p class="sticky-btn-info__old-price">${packCompare}</p>
          </div>
          ${packSelectBlock}
        </div>
      </div>
        ${btn}
    </div>
  </div>
  `}

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  start()

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  function waitForElement(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector))
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector))
          observer.disconnect()
        }
      })

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true
      })
    })
  }

  function handleVisibility(el, eventParams) {
    let isVisible = false
    let entryTime
    const config = {
      root: null,
      threshold: 0, // Trigger when any part of the element is out of viewport
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            // The element has become visible
            isVisible = true
            entryTime = new Date().getTime()
          }
        } else if (isVisible) {
          // The element is out of the viewport, calculate visibility duration
          isVisible = false
          const exitTime = new Date().getTime()
          const visibilityDuration = (exitTime - entryTime) / 1000 // Convert to seconds
          const roundedDuration = Math.round(visibilityDuration)

          if (roundedDuration) {
            const eventData = eventParams
            eventData[1] = roundedDuration
            pushDataLayer(eventData)
            observer.disconnect()
          }
        }
      })
    }, config)

    observer.observe(el)
  }

  function pushDataLayer([event_name, event_desc, event_type, event_loc]) { // Send a Google Analytics event
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function extractNumberWithDollarSignAndPlus(string) {
    // Regular expression to extract a number with a dollar sign ($) and optional '+' sign
    const regex = /\$([\d.]+)\+/

    // Extract the number with a dollar sign and optional '+' sign from the string
    const match = string.match(regex)
    if (match) {
      const number = parseFloat(match[1]) // Extract the number part without symbols
      console.log(number)
      return number // Return only the extracted number
    } else {
      return '' // Return null if no matching number is found
    }
  }

  function selectedPack(event) {
    let _this = event.target

    if (!_this.classList.contains('selected')) {
      pushDataLayer(['exp_imp_pdp_b_ps_pn', `${_this.querySelector('.name').innerText}`, 'Button', 'Pack size'])

      _this.parentElement.querySelector('.selected')?.classList.remove('selected')

      //document.querySelector(`[data-id="${_this.dataset.id}"]`)?.click()
      window.location = document.querySelector(`[data-id="${_this.dataset.id}"] a`)?.href
      //document.querySelector(`[data-id="32658361385039"] a`)?.click()
      //document.querySelector(`[data-pack-id="${_this.dataset.id}"]`)?.click()
    }
    _this.classList.add('selected')

    let pack = _this.querySelector('.name').innerHTML,
      price = _this.querySelector('.pr').innerHTML,
      compare = _this.querySelector('.compare').innerHTML,
      saved = _this.querySelector('.saved') ? _this.querySelector('.saved').innerHTML : ''

    _this.closest('.pack_size').parentElement.querySelector('.product__price-and-badge .product__price').innerHTML = `
        <p class="name">${pack}</p>
        <p class="pr d-flex items-center">${price}</p>
        <p class="compare">${compare}</p>
        ${saved != '' ? '<div class="saved">' + saved + '</div>' : ''}`

    _this.closest('.pack_size').parentElement.querySelector('.product__form [name="id"]').value = _this.dataset.id
  }

  //get cart
  function getCart() {
    return new Promise((resolve, reject) => {
      fetch(`https://mygeeni.com/cart.js`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      }).then(res => res.json()).then(data => {
        resolve(data)
        console.log(data)
      }).catch((error) => {
        console.error('Error:', error)
      })
    })
  }

  //change qty (PDP)
  function qtyChange(event) {
    let _this = event.target
    let qty = _this.parentElement.querySelector('.input_qty')

    if (_this.classList.contains('btn_qty_minus')) {
      if (qty.value > 1) {
        qty.value = +qty.value - 1
      }
      pushDataLayer(['exp_imp_pdp_b_qty_en', '-', 'Button', 'QTY'])
    } else if (_this.classList.contains('btn_qty_plus')) {
      qty.value = +qty.value + 1
      pushDataLayer(['exp_imp_pdp_b_qty_en', '-', 'Button', 'QTY'])
    }

    _this.closest('form').querySelector('.quantity__selector.quantity__input').value = qty.value

  }

  //get the current date + 7 days in the format: Fri, Aug 11 (19)
  function formatDate() {
    const today = new Date()

    const nextWeek = new Date(today)
    nextWeek.setDate(today.getDate() + 7)

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const nextWeekDayOfWeek = daysOfWeek[nextWeek.getDay()]
    const nextWeekMonth = months[nextWeek.getMonth()]

    const formattedDate = `${nextWeekDayOfWeek}, ${nextWeekMonth} ${nextWeek.getDate()}`

    return formattedDate
  }

  function redesignPacks() {
    let packSizeHtml = `
              <div class="pack_size" id="pack_size">
                  <p>Pack size</p>
                  <ul></ul>
              </div>`

    if (media) {
      document.querySelector('.manufacturer').insertAdjacentHTML('afterend', packSizeHtml)
    } else {
      document.querySelector('.product__reviews').insertAdjacentHTML('afterend', packSizeHtml)
    }

    document.querySelectorAll('.product__alternates .alternative-options > li').forEach((item, index) => {

      //let saved = +(item.dataset.compare.replace('$', '')) - +(item.dataset.price.replace('$', ''))
      let saved = ''

      const compareValue = item.dataset.compare
      const priceValue = item.dataset.price

      if (compareValue && priceValue) {
        const price = parseFloat(priceValue.replace('$', ''))
        const compare = parseFloat(compareValue.replace('$', ''))

        if (compare > price) {
          saved = Math.round(((compare - price) / compare) * 100) + '%'
        }
      }

      document.querySelector('.pack_size ul').insertAdjacentHTML('beforeend', `
                  <li class="d-flex items-center ${item.querySelector('.alternative-options__item--active') ? 'selected' : ''} ${item.classList.contains('alternative-options__sold-out') ? "sold-out" : ""}" data-id="${item.dataset.id}">
                      <div class="relative">   
                          <div class="count">x${index + 1}</div>
                          <img src="${item.querySelector('img').src}" alt="${item.querySelector('img').alt}">
                      </div>
                      <div class="">  
                          <p class="name">${item.querySelector('.alternative-options__item-label').innerHTML}</p>
                          <p class="title"></p>
                      </div>
                      <div class="prices d-flex">
                          <p class="compare">${item.dataset.compare != '$0.00' ? item.dataset.compare : ''}</p>
                          <p class="pr">${item.dataset.price}</p>
                      </div>
                      ${saved !== '' ? '<div class="saved">Save $' + saved + '</div>' : ''}
                  </li>`)

      // add handleOnClickForPack
      const waitForItem = setInterval(() => {
        const addedItem = document.querySelectorAll('.pack_size ul li')[index]
        if (addedItem) {
          clearInterval(waitForItem)


          addedItem.addEventListener('click', (e) => selectedPack(e))
        }
      }, WAIT_INTERVAL_TIMEOUT)

      //(11)
      if (item.querySelector('.alternative-options__item--active')) {
        document.querySelector('.product__price-and-badge .product__price').innerHTML = `
                  <p class="name">${item.querySelector('.alternative-options__item-label').innerHTML}</p>
                  <p class="pr d-flex items-center">${item.dataset.price}</p>
                  <p class="compare">${item.dataset.compare != '$0.00' ? item.dataset.compare : ''}</p>
                  ${saved != '' ? '<div class="saved">  Save $' + saved + '</div>' : ''}`
      }
    })
  }

  function addStickyBtn(title, packs) {
    console.log('addStickyBtn')
    document.body.insertAdjacentHTML('beforeend', stickyBtn(title.innerText, packs))

    // const waitForStickyBtn = setInterval(() => {
    //   const productPacks = document.querySelector('.sticky-btn-pack__options')
    //   const currentProductPacks = document.querySelector('.sticky-btn-pack__current span')

    //   if (productPacks && currentProductPacks) {
    //     clearInterval(waitForStickyBtn)


    //   }
    // }, WAIT_INTERVAL_TIMEOUT)

    document.body.addEventListener('click', (e) => {
      const target = e.target

      if (target.matches('.sticky-btn-pack__options > p')) {
        const selectedPack = target

        console.log(selectedPack)

        if (!selectedPack.classList.contains('sticky-btn-pack__option--active')) {
          document.querySelector('.sticky-btn-pack__current span').innerText = selectedPack.innerText

          document.querySelector('.sticky-btn-pack__option--active').classList.remove('sticky-btn-pack__option--active')

          selectedPack.classList.add('sticky-btn-pack__option--active')

          pushDataLayer(['exp_imp_pdp_b_sd_pn', `${selectedPack.innerText}`, 'Button', 'Sticky desktop'])


          document.querySelector('.sticky-btn-info__price').innerText = selectedPack.dataset.packPrice
          // document.querySelector('.sticky-btn-wrapper__price').innerText = selectedPack.dataset.packPrice
          document.querySelector('.sticky-btn-info__old-price').innerText = selectedPack.dataset.packCompare != '$0.00' ? selectedPack.dataset.packCompare : ''

          document.querySelector(`[data-id="${selectedPack.dataset.packId}"]`).click()

          document.querySelector('.sticky-btn-pack__options--visible')?.classList.remove('sticky-btn-pack__options--visible')
        }
      } else if (target.closest('.sticky-btn-pack')) {
        document.querySelector('.sticky-btn-pack__options').classList.toggle('sticky-btn-pack__options--visible')
      } else if (target.matches('.sticky-btn-wrapper .add-to-cart')) {
        pushDataLayer(['exp_imp_pdp_st_b_atc', 'Add to cart', 'Button', 'Sticky mobile'])
        document.querySelector('button[name="add"]').click()

      } else {
        document.querySelector('.sticky-btn-pack__options--visible')?.classList.remove('sticky-btn-pack__options--visible')
      }
    })
  }

  function start() {
    const waitForBody = setInterval(() => {
      if (document.body) {
        clearInterval(waitForBody)

        // PDP
        if (window.location.href.includes('/products/')) {
          document.body.insertAdjacentHTML('afterbegin', styleBase)
          document.body.insertAdjacentHTML('afterbegin', stylePDP)

          waitForElement('[data-add-to-cart-text]').then(el => {
            if (el.innerText.toLowerCase().includes('sold out')) {
              el.innerText = 'Sold Out'
            }
          })

          // change logo
          waitForElement('.logo__image-link--other').then(el => {
            console.log("el", el)
            el.insertAdjacentHTML('beforeend', /*html*/`
            <img class="custom-logo" src="${dir}logo_geeni.png" alt="logo" >
          `)
          })
          waitForElement('.logo__image-link--home').then(el => el.insertAdjacentHTML('beforeend', /*html*/`
          <img class="custom-logo" src="${dir}logo_geeni.png" alt="logo">
          `))

          // hide chat btn behind slide-in cart
          waitForElement('#survicate-box + div:not([class])').then(el => el.style.zIndex = "999")

          //(2-5)
          const waitForSlider = setInterval(() => {
            if (
              document.querySelector('.product__title-and-price') &&
              document.querySelector('.product__reviews')
            ) {
              clearInterval(waitForSlider)

              let manufacturerHtml = `
              <div class="flex-center manufacturer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21.75 9.75H20.71C20.5005 8.93115 20.1797 8.15479 19.752 7.43042L20.4851 6.69653C20.7781 6.40356 20.7781 5.92896 20.4851 5.63599L18.364 3.51489C18.071 3.22192 17.5964 3.22192 17.3035 3.51489L16.5696 4.24805C15.8452 3.82031 15.0688 3.49951 14.25 3.29004V2.25C14.25 1.83545 13.9146 1.5 13.5 1.5H10.5C10.0854 1.5 9.75 1.83545 9.75 2.25V3.29004C8.93115 3.49951 8.15479 3.82031 7.43042 4.24805L6.69653 3.51489C6.40356 3.22192 5.92896 3.22192 5.63599 3.51489L3.51489 5.63599C3.22192 5.92896 3.22192 6.40356 3.51489 6.69653L4.24805 7.43042C3.82031 8.15479 3.49951 8.93115 3.29004 9.75H2.25C1.83545 9.75 1.5 10.0854 1.5 10.5V13.5C1.5 13.9146 1.83545 14.25 2.25 14.25H3.29004C3.49951 15.0688 3.82031 15.8452 4.24805 16.5696L3.51489 17.3035C3.22192 17.5964 3.22192 18.071 3.51489 18.364L5.63599 20.4851C5.92896 20.7781 6.40356 20.7781 6.69653 20.4851L7.43042 19.752C8.15479 20.1797 8.93115 20.5005 9.75 20.71V21.75C9.75 22.1646 10.0854 22.5 10.5 22.5H13.5C13.9146 22.5 14.25 22.1646 14.25 21.75V20.71C15.0688 20.5005 15.8452 20.1797 16.5696 19.752L17.3035 20.4851C17.5964 20.7781 18.071 20.7781 18.364 20.4851L20.4851 18.364C20.7781 18.071 20.7781 17.5964 20.4851 17.3035L19.752 16.5696C20.1797 15.8452 20.5005 15.0688 20.71 14.25H21.75C22.1646 14.25 22.5 13.9146 22.5 13.5V10.5C22.5 10.0854 22.1646 9.75 21.75 9.75ZM16.5 13.5C16.5 14.0713 16.1829 14.5854 15.6716 14.8411L11.9999 16.8002L8.31152 14.833C7.8175 14.5854 7.5 14.0713 7.5 13.5V9.25241C7.5 8.96617 7.66292 8.70488 7.91995 8.57895L11.3291 6.9082C11.5364 6.80493 11.7682 6.75 12 6.75C12.2318 6.75 12.4636 6.80493 12.6709 6.9082L16.0821 8.59264C16.338 8.71898 16.5 8.97968 16.5 9.26509V13.5Z" fill="#023F88"/>
                      <path d="M15.3352 9.0791L12.3352 7.5791C12.1243 7.47363 11.8752 7.47363 11.6643 7.5791L8.66429 9.0791C8.63824 9.09215 8.61778 9.11201 8.59375 9.12772L11.9997 10.8307L15.4057 9.12772C15.3817 9.11201 15.3612 9.09215 15.3352 9.0791Z" fill="#023F88"/>
                      <path d="M8.25 13.5026C8.25 13.7867 8.4104 14.0464 8.66455 14.1735L11.625 15.7526V11.4844L8.25 9.79688V13.5026Z" fill="#023F88"/>
                      <path d="M12.375 15.7526L15.3354 14.1735C15.5896 14.0464 15.75 13.7867 15.75 13.5026V9.79688L12.375 11.4844V15.7526Z" fill="#023F88"/>
                  </svg>
                  Direct from the manufacturer
              </div>`

              if (media) {
                document.querySelector('.product-single__gallery').before(document.querySelector('.product__title-and-price')) // (2)
                document.querySelector('.product__title-and-price').after(document.querySelector('.product__reviews')) // (2)
              }

              const waitForFlickity = setInterval(() => {
                if (typeof Flickity === 'function') {
                  clearInterval(waitForFlickity)

                  if (media) {
                    //reloadCells thumbnails slider
                    let slider = new Flickity(document.querySelector('.product-single__thumbnails'), { // (3)
                      contain: true,
                      pageDots: true,
                      auto: true,
                      asNavFor: '.product-single__gallery',


                    })
                    slider.reloadCells()
                  } else {

                    let slider = new Flickity(document.querySelector('.product-single__media-slider'), { // (3)
                      contain: true,
                      pageDots: false,
                      auto: true,
                      prevNextButtons: false,
                      draggable: true
                    })

                    let slider1 = new Flickity(document.querySelector('.product-single__thumbnails'), { // (3)
                      contain: true,
                      pageDots: false,
                      auto: true,
                      prevNextButtons: false, cellAlign: 'left',
                      draggable: true,
                      asNavFor: '.product-single__media-slider',
                    })
                  }
                }
              }, WAIT_INTERVAL_TIMEOUT)

              // add "Direct from the manufacturer" 
              waitForElement('.product-single__gallery').then(el => {

                if (media) {
                  el.insertAdjacentHTML('afterend', manufacturerHtml)
                } else {
                  el.insertAdjacentHTML('afterbegin', manufacturerHtml)

                }
              })

              document.querySelector('.product__reviews').insertAdjacentHTML('beforeend', /*html*/`
                <div class="review-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
<path d="M12.375 5.5625C12.375 8.24219 9.80469 10.375 6.6875 10.375C5.62109 10.375 4.66406 10.1562 3.81641 9.71875C3.13281 10.0742 2.25781 10.375 1.19141 10.375C1.10938 10.375 1.02734 10.3477 1 10.2656C0.972656 10.1836 0.972656 10.1016 1.05469 10.0469C1.05469 10.0195 1.68359 9.36328 2.12109 8.46094C1.41016 7.64062 1 6.65625 1 5.5625C1 2.91016 3.54 297 0.75 6.6875 0.75C9.80469 0.75 12.375 2.91016 12.375 5.5625ZM17.3789 12.8906C17.8164 13.7656 18.418 14.3945 18.418 14.4219C18.4727 14.4766 18.5 14.5586 18.4727 14.6406C18.4453 14.7227 18.3633 14.75 18.2812 14.75C17.2969 14.75 16.4492 14.4766 15.7656 14.1758C15.0273 14.5312 14.1523 14.75 13.25 14.75C10.7617 14.75 8.71094 13.2188 8.13672 11.1133C11.0625 10.5391 13.25 8.26953 13.25 5.5625C13.25 5.42578 13.2227 5.28906 13.2227 5.15234C13.2227 5.15234 13.2227 5.125 13.25 5.125C16.1484 5.125 18.5 7.28516 18.5 9.9375C18.5 11.0586 18.0625 12.0703 17.3789 12.8906Z" fill="#023F88"/>
</svg>
<a href="#shopify-section-template--16711182876924__16842542196ee361cd">See all reviews</a>
                </div>
   
              `)

              waitForElement('.review-link a').then(el => el.addEventListener('click', () => {
                pushDataLayer(['exp_imp_pdp_l_fs_sar', 'See all reviews', 'Link', 'First sccreen'])
              }))
            }
          }, WAIT_INTERVAL_TIMEOUT)

          // redesign packs (6-13) 
          // add sticky btn
          const waitForRedesignPacks = setInterval(() => {
            const packsAlternates = document.querySelector('.product__alternates')
            // const packs = document.querySelectorAll('.product__alternates .alternative-options > li')
            const productTitle = document.querySelector('.product__title')
            const clientCTABtn = document.querySelector('[data-add-to-cart-text]')

            if (document.querySelector('.manufacturer') && productTitle && clientCTABtn) {
              clearInterval(waitForRedesignPacks)

              console.log('clientCTABtn', clientCTABtn)

              let packs

              if (packsAlternates.querySelectorAll('.alternative-options > li')?.length > 0) {
                redesignPacks()
                packs = document.querySelectorAll('.product__alternates .alternative-options > li')
              }


              addStickyBtn(productTitle, packs)
            }
          }, WAIT_INTERVAL_TIMEOUT)

          //shop-pay-terms move for payments buttons (17)
          const waitForShopPayTerms = setInterval(() => {
            if (document.querySelector('.payments-exp .dynamic-checkout__content .shopify-cleanslate') &&
              !document.querySelector('.product__submit__buttons+.shop-pay-terms')
            ) {
              clearInterval(waitForShopPayTerms)

              document.querySelector('.product__submit__buttons').after(document.querySelector('.shop-pay-terms'))
            }
          }, WAIT_INTERVAL_TIMEOUT)

          // block with discount "Spend $ and get a % discount" (13)
          const waitForCartAndProductPriceBlock = setInterval(() => {
            const cartDrawer = document.querySelector('.cart-drawer')
            const productPriceBlock = document.querySelector('.product__block.product__price-and-badge')
            const qtyBlock = document.querySelector('.qty_block')

            if (cartDrawer && productPriceBlock && qtyBlock) {
              clearInterval(waitForCartAndProductPriceBlock)

              // Function to check if the element has the "is-open" class
              const checkIsOpen = (targetElement, priceContainer) => {

                if (targetElement.classList.contains('is-open')) {
                  discountChange = true
                }

                if (
                  !targetElement.classList.contains('is-open') &&
                  discountChange == true
                ) {
                  discountChange = false

                  getCart().then(data => {
                    console.log(data)

                    let req = /(\d{1,})(\d{2})$/
                    let total = +(data['total_price'].toString().replace(req, "$1.$2"))

                    let discount = ``
                    if (total >= 0 && total <= 99.00) {
                      discount = `<p>Spend <b>$99</b> and get a <b>10% discount</b></p>`
                    } else if (total > 99.00 && total <= 149.00) {
                      discount = `<p>Spend <b>$149</b> and get a <b>15% discount</b></p>`
                    } else if (total > 149.00) {
                      discount = `<p>Spend <b>$199</b> and get a <b>20% discount</b></p>`
                    }

                    if (document.querySelector('.discount')) {
                      document.querySelector('.discount').remove()
                    }

                    let discountHTML = `
                        <div class="discount d-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                                <circle cx="14" cy="14.25" r="14" fill="#E8F8FE"/>
                                <path d="M8.53864 8H13.3148C13.8598 8 14.3726 8.22387 14.7573 8.60765L20.399 14.2364C21.2003 15.036 21.2003 16.3472 20.399 17.1468L16.1357 21.4003C15.3343 22.1999 14.02 22.1999 13.2187 21.4003L7.57699 15.7716C7.19233 15.3878 7 14.8761 7 14.3324V9.53512C7 8.7036 7.67315 8 8.53864 8ZM10.5902 12.6054C11.1351 12.6054 11.6159 12.1576 11.6159 11.582C11.6159 11.0383 11.1351 10.5585 10.5902 10.5585C10.0132 10.5585 9.5644 11.0383 9.5644 11.582C9.5644 12.1576 10.0132 12.6054 10.5902 12.6054Z" fill="#023F88"/>
                            </svg>  
                            ${discount}
                        </div>`

                    if (media) {
                      priceContainer.insertAdjacentHTML('afterend', discountHTML)
                    } else {
                      qtyBlock.insertAdjacentHTML('beforebegin', discountHTML)
                      // waitForElement('.qty_block').then(el => el.insertAdjacentHTML('beforebegin', discountHTML))
                      // document.querySelector('.qty_block').insertAdjacentHTML('beforebegin', discountHTML)
                    }
                  })
                }
              }

              const config = { attributes: true, attributeFilter: ['class'] }
              const callback = (mutationsList) => {
                for (const mutation of mutationsList) {
                  console.log(mutation)

                  if (mutation.type === 'attributes') {
                    // Check if the "is-open" class has been added or removed
                    if (mutation.attributeName === 'class') {
                      checkIsOpen(cartDrawer, productPriceBlock)

                      const drawerMessage = document.querySelector('.cart-drawer__message').textContent

                      if (!document.querySelector('.away-from')) {

                        const priceToFreeShipping = extractNumberWithDollarSignAndPlus(drawerMessage)
                        document.querySelector('.cart__message__progress__holder').insertAdjacentHTML('beforebegin', /*html*/`
                          
<div class="msg away-from">
  <p>You are $<span class="away-from__number">${priceToFreeShipping}</span> away from</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
    <path d="M4.2 0H13.8C14.775 0 15.6 0.773438 15.6 1.6875V3.375H17.475C18.1125 3.375 18.7125 3.62109 19.2 4.04297L22.0875 6.75C22.5375 7.17188 22.8 7.76953 22.8 8.36719V12.375C23.4375 12.375 24 12.9023 24 13.5C24 14.1328 23.4375 14.625 22.8 14.625H21.6C21.6 16.4883 19.9875 18 18 18C15.975 18 14.4 16.4883 14.4 14.625H9.6C9.6 16.4883 7.9875 18 6 18C3.975 18 2.4 16.4883 2.4 14.625V10.125H7.8C8.1 10.125 8.4 9.87891 8.4 9.5625C8.4 9.28125 8.1 9 7.8 9H0.6C0.2625 9 0 8.75391 0 8.4375C0 8.15625 0.2625 7.875 0.6 7.875H9C9.3 7.875 9.6 7.62891 9.6 7.3125C9.6 7.03125 9.3 6.75 9 6.75H1.8C1.4625 6.75 1.2 6.50391 1.2 6.1875C1.2 5.90625 1.4625 5.625 1.8 5.625H10.2C10.5 5.625 10.8 5.37891 10.8 5.0625C10.8 4.78125 10.5 4.5 10.2 4.5H0.6C0.2625 4.5 0 4.25391 0 3.9375C0 3.65625 0.2625 3.375 0.6 3.375H2.4V1.6875C2.4 0.773438 3.1875 0 4.2 0ZM20.4 8.36719L17.475 5.625H15.6V9H20.4V8.36719ZM6 16.3125C6.975 16.3125 7.8 15.5742 7.8 14.625C7.8 13.7109 6.975 12.9375 6 12.9375C4.9875 12.9375 4.2 13.7109 4.2 14.625C4.2 15.5742 4.9875 16.3125 6 16.3125ZM19.8 14.625C19.8 13.7109 18.975 12.9375 18 12.9375C16.9875 12.9375 16.2 13.7109 16.2 14.625C16.2 15.5742 16.9875 16.3125 18 16.3125C18.975 16.3125 19.8 15.5742 19.8 14.625Z" fill="#023F88"/>
  </svg>
  <span>Free shipping</span>                    
</div>
                          <div class="msg congrats">
                            <p>Congratulations!</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
      <path d="M1.8 0H11.4C12.375 0 13.2 0.773438 13.2 1.6875V3.375H15.075C15.7125 3.375 16.3125 3.62109 16.8 4.04297L19.6875 6.75C20.1375 7.17188 20.4 7.76953 20.4 8.36719V12.375C21.0375 12.375 21.6 12.9023 21.6 13.5C21.6 14.1328 21.0375 14.625 20.4 14.625H19.2C19.2 16.4883 17.5875 18 15.6 18C13.575 18 12 16.4883 12 14.625H7.20001C7.20001 16.4883 5.5875 18 3.6 18C1.575 18 0 16.4883 0 14.625V10.125C0 10.125 0 9.85072 0 9.53432C0 9.25307 0 9 0 9C0 9 0 8.75391 0 8.4375C0 8.15625 0 7.875 0 7.875C0 7.875 0 7.62891 0 7.3125C0 7.03125 0 6.75 0 6.75C0 6.75 0 6.50391 0 6.1875C0 5.90625 0 5.625 0 5.625C0 5.625 0 5.37891 0 5.0625C0 4.78125 0 4.5 0 4.5C0 4.5 0 4.25391 0 3.9375C0 3.65625 0 3.375 0 3.375V1.6875C0 0.773438 0.787499 0 1.8 0ZM18 8.36719L15.075 5.625H13.2V9H18V8.36719ZM3.6 16.3125C4.575 16.3125 5.4 15.5742 5.4 14.625C5.4 13.7109 4.575 12.9375 3.6 12.9375C2.5875 12.9375 1.8 13.7109 1.8 14.625C1.8 15.5742 2.5875 16.3125 3.6 16.3125ZM17.4 14.625C17.4 13.7109 16.575 12.9375 15.6 12.9375C14.5875 12.9375 13.8 13.7109 13.8 14.625C13.8 15.5742 14.5875 16.3125 15.6 16.3125C16.575 16.3125 17.4 15.5742 17.4 14.625Z" fill="#023F88"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29831 4.40819C9.58093 4.711 9.56457 5.18559 9.26175 5.46822L4.40405 10.0021L2.18057 7.40802C1.911 7.09352 1.94743 6.62005 2.26192 6.35048C2.57641 6.08092 3.04989 6.11734 3.31946 6.43183L4.52455 7.83778L8.23828 4.37163C8.54109 4.08901 9.01568 4.10537 9.29831 4.40819Z" fill="white"/>
    </svg>
    <span>You're eligible for free delivery</span>
                          </div>
                        `)
                      }

                      if (document.querySelector('.cart__message__default.is-hidden')) {
                        document.querySelector('.msg.away-from').style.display = "none"
                        document.querySelector('.msg.congrats').style.display = "flex"
                      } else {
                        document.querySelector('.away-from__number').innerText = extractNumberWithDollarSignAndPlus(drawerMessage)

                        document.querySelector('.msg.away-from').style.display = "flex"
                        document.querySelector('.msg.congrats').style.display = "none"
                      }

                      if (!document.querySelector('.get-ur-discount')) {
                        document.querySelector('.cart__item__content').insertAdjacentHTML('beforeend', /*html*/`
                          <div class="get-ur-discount">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M7.60056 8.84132C7.94519 8.84132 8.22456 8.56195 8.22456 8.21732C8.22456 7.8727 7.94519 7.59332 7.60056 7.59332C7.25594 7.59332 6.97656 7.8727 6.97656 8.21732C6.97656 8.56195 7.25594 8.84132 7.60056 8.84132Z" fill="#53B6EB"/>
  <path d="M12.3916 12.3854C12.2261 12.3854 12.0674 12.4511 11.9504 12.5681C11.8334 12.6852 11.7676 12.8439 11.7676 13.0094C11.766 13.135 11.802 13.2583 11.8708 13.3635C11.9396 13.4686 12.0383 13.5509 12.1541 13.5997C12.2699 13.6485 12.3976 13.6617 12.5209 13.6376C12.6443 13.6134 12.7576 13.5531 12.8465 13.4642C12.9353 13.3753 12.9957 13.262 13.0198 13.1387C13.0439 13.0153 13.0308 12.8876 12.9819 12.7718C12.9331 12.656 12.8509 12.5574 12.7457 12.4885C12.6406 12.4197 12.5173 12.3838 12.3916 12.3854Z" fill="#53B6EB"/>
  <path d="M17.3596 8.76135C17.0769 8.49769 16.8391 8.18964 16.6556 7.84935C16.5377 7.46339 16.4836 7.06075 16.4956 6.65735C16.5637 5.95049 16.3607 5.24416 15.9276 4.68135C15.3648 4.24829 14.6585 4.04526 13.9516 4.11335C13.5616 4.12101 13.1728 4.06702 12.7996 3.95335C12.4593 3.76988 12.1513 3.53208 11.8876 3.24935C11.4134 2.67522 10.7383 2.30333 9.99961 2.20935C9.27402 2.30914 8.61345 2.68089 8.15161 3.24935C7.88637 3.53035 7.57861 3.76791 7.23961 3.95335C6.85352 4.07071 6.45098 4.12474 6.04761 4.11335C5.33815 4.04399 4.62887 4.24705 4.06361 4.68135C3.63266 5.24494 3.43244 5.95146 3.50361 6.65735C3.50932 7.06096 3.45265 7.46304 3.33561 7.84935C3.15493 8.19144 2.9168 8.49993 2.63161 8.76135C2.06799 9.2261 1.69963 9.88571 1.59961 10.6094C1.69374 11.3331 2.05987 11.9938 2.62361 12.4574C2.91343 12.7318 3.15423 13.0538 3.33561 13.4093C3.45297 13.7954 3.507 14.198 3.49561 14.6013C3.43025 15.3104 3.6329 16.0183 4.06361 16.5853C4.63002 17.0168 5.33919 17.217 6.04761 17.1453C6.45114 17.1409 6.85303 17.1975 7.23961 17.3133C7.58037 17.4961 7.88853 17.734 8.15161 18.0174C8.62052 18.5692 9.28058 18.9235 9.99961 19.0093C10.7221 18.9114 11.3815 18.546 11.8476 17.9853C12.1203 17.6936 12.4427 17.4525 12.7996 17.2733C13.1856 17.1554 13.5882 17.1014 13.9916 17.1133C14.6981 17.1774 15.403 16.9748 15.9676 16.5454C16.4019 15.9801 16.605 15.2708 16.5356 14.5613C16.5242 14.158 16.5783 13.7554 16.6956 13.3693C16.881 13.0303 17.1186 12.7226 17.3996 12.4574C17.9532 11.9888 18.3101 11.3291 18.3996 10.6094C18.296 9.88504 17.925 9.22577 17.3596 8.76135ZM6.15961 8.21735C6.15803 7.93413 6.24047 7.65681 6.39651 7.42045C6.55254 7.18408 6.77516 6.9993 7.03621 6.88946C7.29727 6.77961 7.58503 6.74965 7.86311 6.80335C8.14119 6.85705 8.39711 6.99201 8.59849 7.19115C8.79987 7.3903 8.93768 7.64469 8.99449 7.92216C9.05129 8.19962 9.02455 8.4877 8.91763 8.74997C8.81071 9.01223 8.62842 9.2369 8.39382 9.39556C8.15921 9.55423 7.88283 9.63976 7.59961 9.64135C7.2212 9.64136 6.85817 9.49158 6.58985 9.22476C6.32153 8.95793 6.16972 8.59575 6.16761 8.21735H6.15961ZM7.52761 13.6334C7.4917 13.6716 7.44832 13.7021 7.40016 13.723C7.35201 13.7438 7.30009 13.7546 7.24761 13.7546C7.19513 13.7546 7.14321 13.7438 7.09505 13.723C7.0469 13.7021 7.00352 13.6716 6.96761 13.6334C6.92934 13.5974 6.89885 13.5541 6.878 13.5059C6.85715 13.4577 6.84639 13.4058 6.84639 13.3534C6.84639 13.3009 6.85715 13.249 6.878 13.2008C6.89885 13.1526 6.92934 13.1093 6.96761 13.0733L12.4476 7.58535C12.4849 7.54806 12.5292 7.51847 12.5779 7.49829C12.6266 7.4781 12.6789 7.46771 12.7316 7.46771C12.7844 7.46771 12.8366 7.4781 12.8853 7.49829C12.934 7.51847 12.9783 7.54806 13.0156 7.58535C13.0529 7.62265 13.0825 7.66692 13.1027 7.71565C13.1229 7.76438 13.1332 7.81661 13.1332 7.86935C13.1332 7.92209 13.1229 7.97432 13.1027 8.02305C13.0825 8.07178 13.0529 8.11606 13.0156 8.15335L7.52761 13.6334ZM12.3836 14.4334C12.1004 14.4334 11.8235 14.3494 11.588 14.192C11.3525 14.0347 11.169 13.811 11.0606 13.5494C10.9522 13.2877 10.9239 12.9998 10.9791 12.722C11.0344 12.4442 11.1708 12.189 11.371 11.9888C11.5713 11.7885 11.8265 11.6521 12.1042 11.5969C12.382 11.5416 12.6699 11.57 12.9316 11.6784C13.1933 11.7867 13.4169 11.9703 13.5743 12.2058C13.7316 12.4413 13.8156 12.7181 13.8156 13.0013C13.8167 13.1894 13.7807 13.3758 13.7097 13.55C13.6387 13.7241 13.5341 13.8826 13.4018 14.0163C13.2696 14.15 13.1123 14.2564 12.939 14.3293C12.7657 14.4022 12.5797 14.4403 12.3916 14.4414L12.3836 14.4334Z" fill="#53B6EB"/>
</svg>
<p>Get Your 10% Off</p>
<svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
  <g clip-path="url(#clip0_1003_173)">
    <path d="M4 1.20938L8 5.6094L4 10.0094" stroke="#53B6EB" stroke-linecap="square" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1003_173">
      <rect width="11" height="11" fill="white" transform="matrix(0 -1 1 0 0 11.1094)"/>
    </clipPath>
  </defs>
</svg>
                          </div>
                        `)

                        waitForElement('.get-ur-discount').then(el => el.addEventListener('click', () => {
                          console.log(el)
                        }))
                      }

                      console.log('mut')
                    }
                  }
                }
              }
              const observer = new MutationObserver(callback)
              observer.observe(cartDrawer, config)

              // Initial check
              checkIsOpen(cartDrawer, productPriceBlock)
            }
          }, WAIT_INTERVAL_TIMEOUT)

          // const waitForCart = setInterval(() => {  
          //   if (condition) {
          //     clearInterval(waitForCart)
          //   }
          // }), WAIT_INTERVAL_TIMEOUT)

          //qty and compatibility icons
          waitForElement('.selector-wrapper--qty').then(el => {
            el.insertAdjacentHTML('afterend', `
            <div class="d-flex items-end justify-lg-between">
                <div class="qty_block">
                    <p>QTY</p>
                    <div class="d-flex calc_qty">
                        <button type="button" class="btn_qty btn_qty_minus"></button>
                        <input type="number" class="input_qty" value="1">
                        <button type="button" class="btn_qty btn_qty_plus"></button>
                    </div>
                </div>
                ${compatibilityHTML('d-lg-none')}
            </div>`)

            // add qty handlers
            const waitForQtyBtns = setInterval(() => {
              if (document.querySelectorAll('.btn_qty')[1]) {
                clearInterval(waitForQtyBtns)

                for (const btn of document.querySelectorAll('.btn_qty')) {
                  btn.addEventListener('click', (e) => {
                    qtyChange(e)
                  })
                }
              }
            }, WAIT_INTERVAL_TIMEOUT)

            waitForElement('.input_qty').then(inputQty => inputQty.addEventListener('change', (e) => qtyChange(e)))
          })

          //delivery section (18-21)
          const waitForDelivery = setInterval(() => {
            if (
              document.querySelector('.product__accordions .product__accordion__content p') &&
              document.querySelector('.product__form__wrapper')
            ) {
              clearInterval(waitForDelivery)

              let orders = document.querySelector('.product__accordions .product__accordion__content p').innerHTML.split('on orders')[1].split('+')[0]
              let returnOrder = document.querySelector('.product__accordions .product__accordion__content p').innerHTML.split('free ')[1].split('returns')[0]

              document.querySelector('.product__form__wrapper').insertAdjacentHTML('afterend', `
                <div class="delivery">
                    <p class="d-flex items-center title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                            <path d="M4.2 0.75H13.8C14.775 0.75 15.6 1.52344 15.6 2.4375V4.125H17.475C18.1125 4.125 18.7125 4.37109 19.2 4.79297L22.0875 7.5C22.5375 7.92188 22.8 8.51953 22.8 9.11719V13.125C23.4375 13.125 24 13.6523 24 14.25C24 14.8828 23.4375 15.375 22.8 15.375H21.6C21.6 17.2383 19.9875 18.75 18 18.75C15.975 18.75 14.4 17.2383 14.4 15.375H9.6C9.6 17.2383 7.9875 18.75 6 18.75C3.975 18.75 2.4 17.2383 2.4 15.375V10.875H7.8C8.1 10.875 8.4 10.6289 8.4 10.3125C8.4 10.0312 8.1 9.75 7.8 9.75H0.6C0.2625 9.75 0 9.50391 0 9.1875C0 8.90625 0.2625 8.625 0.6 8.625H9C9.3 8.625 9.6 8.37891 9.6 8.0625C9.6 7.78125 9.3 7.5 9 7.5H1.8C1.4625 7.5 1.2 7.25391 1.2 6.9375C1.2 6.65625 1.4625 6.375 1.8 6.375H10.2C10.5 6.375 10.8 6.12891 10.8 5.8125C10.8 5.53125 10.5 5.25 10.2 5.25H0.6C0.2625 5.25 0 5.00391 0 4.6875C0 4.40625 0.2625 4.125 0.6 4.125H2.4V2.4375C2.4 1.52344 3.1875 0.75 4.2 0.75ZM20.4 9.11719L17.475 6.375H15.6V9.75H20.4V9.11719ZM6 17.0625C6.975 17.0625 7.8 16.3242 7.8 15.375C7.8 14.4609 6.975 13.6875 6 13.6875C4.9875 13.6875 4.2 14.4609 4.2 15.375C4.2 16.3242 4.9875 17.0625 6 17.0625ZM19.8 15.375C19.8 14.4609 18.975 13.6875 18 13.6875C16.9875 13.6875 16.2 14.4609 16.2 15.375C16.2 16.3242 16.9875 17.0625 18 17.0625C18.975 17.0625 19.8 16.3242 19.8 15.375Z" fill="#023F88"/>
                        </svg>
                        <span>Delivery </span>
                    </p>
                    <div class="d-lg-flex justify-lg-between">
                        <p>Free standard delivery on orders over <b>${orders}</b> </p>
                        <div class="line-vertical d-lg-block d-none"></div>
                        <p>Approximate data of delivery, <b>${formatDate()}</b> </p>
                    </div>
                    <p class="d-flex items-center title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6687 1.65736L13.7025 3.40889L3.86672 9.08756V13.2955C3.86672 13.4636 3.95006 13.608 4.0957 13.6921L6.37561 15.0084C6.44841 15.0504 6.53175 15.0504 6.60459 15.0084C6.67739 14.9663 6.71906 14.8942 6.71906 14.8101V10.7344L16.5548 5.0557L19.5886 6.80723C19.8798 6.97537 20.0466 7.26412 20.0466 7.6004V12.864C19.2229 12.5862 18.3514 12.4363 17.481 12.3832V12.0303C17.481 11.6459 17.2615 11.3011 16.9131 11.1384C16.5649 10.9758 16.1595 11.0288 15.8648 11.2754L12.3727 14.1982C12.083 14.4407 11.9247 14.7942 11.9368 15.1717C11.9489 15.5509 12.1282 15.8911 12.434 16.1155L15.9143 18.6689C16.2149 18.8894 16.609 18.9218 16.9415 18.7533C17.2744 18.5847 17.481 18.2484 17.481 17.8753V17.4856C18.2054 17.572 18.9224 17.7947 19.5112 18.221C19.6254 18.3037 19.7337 18.3937 19.8345 18.4905C19.7671 18.5695 19.6846 18.638 19.5887 18.6934L10.6687 23.8433C10.3775 24.0114 10.044 24.0114 9.75281 23.8433L0.832969 18.6934C0.541687 18.5253 0.375 18.2365 0.375 17.9002V7.60045C0.375 7.26412 0.541687 6.97537 0.832969 6.80728L9.75286 1.65736C10.0441 1.48921 10.3775 1.48921 10.6687 1.65736ZM16.731 16.6922C21.6289 16.6922 23.017 21.3703 18.9938 23.473C18.9718 23.4844 18.9623 23.5108 18.9725 23.5335C18.9819 23.5546 19.0043 23.5658 19.0268 23.5602C25.711 21.9161 25.2437 13.1107 16.731 13.1107V12.0303C16.731 11.9371 16.6802 11.8574 16.5958 11.818C16.5113 11.7786 16.4176 11.7908 16.3462 11.8506L12.854 14.7734C12.7398 14.869 12.6816 14.9991 12.6863 15.1479C12.6911 15.2967 12.7575 15.4228 12.8776 15.5108L16.358 18.0643C16.431 18.1178 16.5217 18.1253 16.6025 18.0844C16.6833 18.0434 16.731 17.9658 16.731 17.8753V16.6922Z" fill="#023F88"/>
                        </svg>
                        <span>Return & Refund Policy</span>
                    </p>
                    <p>${returnOrder} free return and refund policy on all your orders</p>
                    <a href="https://mygeeni.com/pages/shipping-return-policy">Learn more</a>
                </div>
                <div class="warranty flex-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g clip-path="url(#clip0_732_16344)">
                        <path d="M12 7.28125C9.28638 7.28125 7.07812 9.48951 7.07812 12.2031C7.07812 14.9168 9.28638 17.125 12 17.125C14.7136 17.125 16.9219 14.9168 16.9219 12.2031C16.9219 9.48951 14.7136 7.28125 12 7.28125ZM15.3096 11.294L11.794 14.8096C11.6567 14.947 11.4767 15.0156 11.2969 15.0156C11.1171 15.0156 10.9371 14.947 10.7997 14.8096L8.69037 12.7003C8.41571 12.4256 8.41571 11.9807 8.69037 11.706C8.96503 11.4313 9.40998 11.4313 9.68464 11.706L11.2969 13.3182L14.3154 10.2997C14.59 10.0251 15.035 10.0251 15.3096 10.2997C15.5843 10.5744 15.5843 11.0194 15.3096 11.294Z" fill="#023F88"/>
                        <path d="M20.4375 3.0625H18.7903C16.413 3.0625 14.1781 2.09003 12.4971 0.409119C12.2225 0.13446 11.7775 0.13446 11.5029 0.409119C9.82197 2.09003 7.58698 3.0625 5.20972 3.0625H3.5625C3.17377 3.0625 2.85938 3.3769 2.85938 3.76563V12.2031C2.85938 18.5216 7.45716 21.4606 10.4996 23.3742C10.7778 23.5487 11.7039 24.2032 12 24.2032C12.2954 24.2032 13.197 23.5656 13.4742 23.3915C16.5271 21.4765 21.1407 18.5346 21.1407 12.2031V3.76563C21.1407 3.3769 20.8261 3.0625 20.4375 3.0625ZM12 18.5313C8.51038 18.5313 5.67188 15.6926 5.67188 12.2031C5.67188 8.71351 8.51038 5.87501 12 5.87501C15.4895 5.87501 18.3281 8.71351 18.3281 12.2031C18.3281 15.6926 15.4895 18.5313 12 18.5313Z" fill="#023F88"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_732_16344">
                        <rect width="24" height="24" fill="white" transform="translate(0 0.25)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    365-Days Warranty on All Products
                </div>`)

            }
          }, WAIT_INTERVAL_TIMEOUT)

          //Details section (22-24)
          const waitForDetailsSection = setInterval(() => {
            if (document.querySelector('.product__description')) {
              clearInterval(waitForDetailsSection)

              document.querySelector('.product__description').insertAdjacentHTML('afterbegin', `
                  <p class="title">Details</p>`)

              waitForElement('.product__description > ul').then(list => {
                list.insertAdjacentHTML('beforebegin', `
              <div class="d-lg-flex d-none">
                  ${compatibilityHTML()}
              </div>
              <p class="title title_about">About this product</p>`)

                //learn more button (23-24)
                list.insertAdjacentHTML('afterend', `
                          <button type="button" class="btn_more flex-center justify-lg-start">
                              <span>Learn more</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                  <path d="M7.01338 11.25C6.77258 11.25 6.55853 11.1679 6.39799 11.0037L1.26087 5.74853C0.913043 5.42009 0.913043 4.84531 1.26087 4.51686C1.58194 4.16105 2.14381 4.16105 2.46488 4.51686L7.01338 9.14247L11.5351 4.51686C11.8562 4.16105 12.4181 4.16105 12.7391 4.51686C13.087 4.84531 13.087 5.42009 12.7391 5.74853L7.60201 11.0037C7.44147 11.1679 7.22742 11.25 7.01338 11.25Z" fill="#023F88"/>
                              </svg>
                          </button>
                          <div class="support d-flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                  <path d="M12 0.745117C18.7031 0.745117 23.7656 6.37012 24 12.7451V17.6201C24 18.2764 23.4844 18.7451 22.875 18.7451C22.2188 18.7451 21.75 18.2764 21.75 17.6201V12.7451C21.75 7.40137 17.3438 3.04199 12 3.04199C6.60938 3.04199 2.25 7.40137 2.25 12.7451V17.6201C2.25 18.2764 1.64062 18.7451 1.07812 18.7451C0.46875 18.7451 0 18.2764 0 17.6201V12.7451C0.1875 6.37012 5.25 0.745117 12 0.745117ZM7.5 12.7451C8.29688 12.7451 9 13.4482 9 14.292V20.2451C9 21.0889 8.29688 21.7451 7.5 21.7451H6.75C5.0625 21.7451 3.75 20.4326 3.75 18.7451V15.792C3.75 14.1045 5.0625 12.7451 6.75 12.7451H7.5ZM17.25 12.7451C18.8906 12.7451 20.25 14.1045 20.25 15.792V18.7451C20.25 20.4326 18.8906 21.7451 17.25 21.7451H16.5C15.6562 21.7451 15 21.0889 15 20.2451V14.292C15 13.4482 15.6562 12.7451 16.5 12.7451H17.25Z" fill="#023F88"/>
                              </svg>
                              <p>Questions? <span>Visit our</span> <a href="/pages/support">support page</a></p>
                </div> `)

                waitForElement('.btn_more').then(btn => {

                  handleVisibility(btn,
                    ['exp_imp_pdp_v_dlm_ft', '{{focusTime}}', 'Visibility', 'Details learn more']
                  )

                  btn.addEventListener('click', () => {
                    list.classList.toggle('active')
                    if (list.classList.contains('active')) {
                      btn.querySelector('span').innerHTML = 'See less'
                      pushDataLayer(['exp_imp_pdp_l_d_lm', 'Learn more', 'Link', 'Details'])
                    } else {
                      btn.querySelector('span').innerHTML = 'Learn more'


                    }
                  })
                }
                )
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)

          //lift up an icons (25)
          const waitForLiftUpIcons = setInterval(() => {
            if (document.querySelector('#shopify-section-template--16711182876924__icons') &&
              !document.querySelector('.shopify-section--product+#shopify-section-template--16711182876924__icons')
            ) {
              clearInterval(waitForLiftUpIcons)

              document.querySelector('.shopify-section--product').after(document.querySelector('#shopify-section-template--16711182876924__icons'))
            }
          }, WAIT_INTERVAL_TIMEOUT)

          //text replace on  "You May Also Like" (26)Z
          waitForElement('.featured-collection__top h2').then(h2 => {
            h2.innerHTML = 'You May Also Like'
          })

          //text replace on  "Recently Viewed" (27)
          waitForElement('#Text--template--16711182876924__0ba37192-7466-420d-ada7-f85e8f0f34f7 span.text-highlight__break').then(el => el.innerHTML = 'Recently Viewed')

          // (29)
          waitForElement('.yotpo.yotpo-main-widget').then(yotpo => {
            yotpo.insertAdjacentHTML('afterbegin', /*html*/`
            <div class="reviews-title"><p>Reviews from our customers</p></div>
          `)
          })

          waitForElement('.product-single__thumbnails').then(el => {
            handleVisibility(
              el,
              ['exp_imp_pdp_vis_fs_t', '{{focusTime}}', 'Visibility', 'First sccreen Thumbnail']
            )
          })
          waitForElement('.manufacturer').then(el => {
            handleVisibility(
              el,
              ['exp_imp_pdp_v_fs_dfm', '{{focusTime}}', 'Visibility', 'First sccreen Direct from the manufacturer']
            )
          })
          waitForElement('.pack_size').then(el => {
            handleVisibility(
              el,
              ['exp_imp_pdp_v_ps_pss', '{{focusTime}}', 'Visibility', 'Pack size Pack size section']
            )
          })
          waitForElement('.qty_block').then(el => {
            handleVisibility(
              el,
              ['exp_imp_pdp_v_ps_1p', '{{focusTime}}', 'Visibility', 'Pack save 1 pack']
            )
          })
          waitForElement('.discount').then(el => {
            handleVisibility(
              el,
              ['exp_imp_pdp_v_ps_s', '{{focusTime}}', 'Visibility', 'Pack save spend']
            )
          })

          // waitForElement('.product__submit__holder [name="add"]').then(el =>
          //   el.addEventListener('click', () => {
          //     pushDataLayer(['exp_imp_pdp_b_ps_atc', 'Add to cart', 'Button', 'Product section'])
          //   })
          // )

          // waitForElement('.product__submit__item').then(el =>
          //   el.addEventListener('click', (e) => {
          //     if (e.target.closest(`[name="add"]`)) {

          //       pushDataLayer(['exp_imp_pdp_b_ps_atc', 'Add to cart', 'Button', 'Product section'])
          //     }
          //   })
          // )

          waitForElement('.payments-exp [data-testid="ShopifyPay-button"]').then(el => {
            if (media) {
              waitForElement('.payments-exp > p').then(el => el.style.display = "block")
            }

            el.addEventListener('click', () => {
              pushDataLayer(['exp_imp_pdp_b_ps_sp', 'Shop pay', 'Button', 'Product section'])
            })
          }
          )

          waitForElement('.delivery').then(el =>
            handleVisibility(
              el,
              ['exp_imp_pdp_v_dr_ft', '{{focusTime}}', 'Visibility', 'Delivery & Return']
            ))

          waitForElement('.btn_more').then(el =>
            handleVisibility(
              el,
              ['exp_imp_pdp_v_drlm_ft', '{{focusTime}}', 'Visibility', 'Delivery & Return learn more']
            ))

          waitForElement('.product__block ').then(el =>
            handleVisibility(
              el,
              ['exp_imp_pdp_v_365_ft', '{{focusTime}}', 'Visibility', '365 day warranty']
            ))

          waitForElement('.delivery a').then(el => {
            el.addEventListener('click', () => {
              pushDataLayer(['exp_imp_pdp_v_l_dr_lm', 'Learn more', 'Link', 'Delivery & Return'])
            })
          })

          waitForElement('.product__block .title + div').then(el => {
            handleVisibility(el,
              ['exp_imp_pdp_v_d_ft', '{{focusTime}}', 'Visibility', 'Details']
            )
          })


          waitForElement('.support').then(el => {
            handleVisibility(el,
              ['exp_imp_pdp_v_q_ft', '{{focusTime}}', 'Visibility', 'Questions']
            )
          })

          waitForElement('.support a').then(el => {
            el.addEventListener('click', () => {
              pushDataLayer(['exp_imp_pdp_l_q_sp', 'Support page', 'Link', 'Questions'])
            })
          })

          waitForElement('.shopify-section-template--16711182876924__icons').then(el =>
            handleVisibility(el,
              ['exp_imp_pdp_v_b_ft', '{{focusTime}}', 'Visibility', 'Benefits']
            )
          )

          waitForElement('.featured-collection__container .product-grid-item').then(el => {
            handleVisibility(el,
              ['exp_imp_pdp_v_ymal_ft', '{{focusTime}}', 'Visibility', 'You may also like']
            )
          })

          waitForElement('.related-products .product-grid-item').then(el => {
            handleVisibility(el,
              ['exp_imp_pdp_v_rv_ft', '{{focusTime}}', 'Visibility', 'Recently viewed']
            )
          })

          waitForElement('.product-single__thumbnails').then(el => {
            el.addEventListener('click', (e) => {
              if (e.target.closest('.product-single__thumbnail')) {
                pushDataLayer(['exp_imp_pdp_i_fs_it', `${e.target.closest('.product-single__thumbnail').dataset.id}`, 'Image', 'First sccreen'])
              }
            })
          })
        } else {
          // block with discount "Spend $ and get a % discount" (13)
          //           const waitForCart = setInterval(() => {
          //             const cartDrawer = document.querySelector('.cart-drawer')

          //             if (cartDrawer) {
          //               clearInterval(waitForCart)

          //               // Function to check if the element has the "is-open" class
          //               const checkIsOpen = (targetElement, priceContainer) => {

          //                 if (targetElement.classList.contains('is-open')) {
          //                   discountChange = true
          //                 }

          //                 if (
          //                   !targetElement.classList.contains('is-open') &&
          //                   discountChange == true
          //                 ) {
          //                   discountChange = false

          //                   getCart().then(data => {
          //                     console.log(data)

          //                     let req = /(\d{1,})(\d{2})$/
          //                     let total = +(data['total_price'].toString().replace(req, "$1.$2"))

          //                     let discount = ``
          //                     if (total >= 0 && total <= 99.00) {
          //                       discount = `<p>Spend <b>$99</b> and get a <b>10% discount</b></p>`
          //                     } else if (total > 99.00 && total <= 149.00) {
          //                       discount = `<p>Spend <b>$149</b> and get a <b>15% discount</b></p>`
          //                     } else if (total > 149.00) {
          //                       discount = `<p>Spend <b>$199</b> and get a <b>20% discount</b></p>`
          //                     }

          //                     /*if (document.querySelector('.discount')) {
          //                       document.querySelector('.discount').remove()
          //                     }*/

          //                     let discountHTML = `
          //                         <div class="discount d-flex items-center">
          //                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
          //                                 <circle cx="14" cy="14.25" r="14" fill="#E8F8FE"/>
          //                                 <path d="M8.53864 8H13.3148C13.8598 8 14.3726 8.22387 14.7573 8.60765L20.399 14.2364C21.2003 15.036 21.2003 16.3472 20.399 17.1468L16.1357 21.4003C15.3343 22.1999 14.02 22.1999 13.2187 21.4003L7.57699 15.7716C7.19233 15.3878 7 14.8761 7 14.3324V9.53512C7 8.7036 7.67315 8 8.53864 8ZM10.5902 12.6054C11.1351 12.6054 11.6159 12.1576 11.6159 11.582C11.6159 11.0383 11.1351 10.5585 10.5902 10.5585C10.0132 10.5585 9.5644 11.0383 9.5644 11.582C9.5644 12.1576 10.0132 12.6054 10.5902 12.6054Z" fill="#023F88"/>
          //                             </svg>  
          //                             ${discount}
          //                         </div>`

          //                     // if (media) {
          //                     //   priceContainer.insertAdjacentHTML('afterend', discountHTML)
          //                     // } else {
          //                     //   qtyBlock.insertAdjacentHTML('beforebegin', discountHTML)
          //                     //   // waitForElement('.qty_block').then(el => el.insertAdjacentHTML('beforebegin', discountHTML))
          //                     //   // document.querySelector('.qty_block').insertAdjacentHTML('beforebegin', discountHTML)
          //                     // }
          //                   })
          //                 }
          //               }

          //               const config = { attributes: true, attributeFilter: ['class'] }
          //               const callback = (mutationsList) => {
          //                 for (const mutation of mutationsList) {
          //                   console.log(mutation)

          //                   if (mutation.type === 'attributes') {
          //                     // Check if the "is-open" class has been added or removed
          //                     if (mutation.attributeName === 'class') {
          //                       checkIsOpen(cartDrawer, productPriceBlock)

          //                       const drawerMessage = document.querySelector('.cart-drawer__message').textContent

          //                       if (!document.querySelector('.away-from')) {

          //                         const priceToFreeShipping = extractNumberWithDollarSignAndPlus(drawerMessage)
          //                         document.querySelector('.cart__message__progress__holder').insertAdjacentHTML('beforebegin', /*html*/`

          // <div class="msg away-from">
          //   <p>You are $<span class="away-from__number">${priceToFreeShipping}</span> away from</p>
          //   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
          //     <path d="M4.2 0H13.8C14.775 0 15.6 0.773438 15.6 1.6875V3.375H17.475C18.1125 3.375 18.7125 3.62109 19.2 4.04297L22.0875 6.75C22.5375 7.17188 22.8 7.76953 22.8 8.36719V12.375C23.4375 12.375 24 12.9023 24 13.5C24 14.1328 23.4375 14.625 22.8 14.625H21.6C21.6 16.4883 19.9875 18 18 18C15.975 18 14.4 16.4883 14.4 14.625H9.6C9.6 16.4883 7.9875 18 6 18C3.975 18 2.4 16.4883 2.4 14.625V10.125H7.8C8.1 10.125 8.4 9.87891 8.4 9.5625C8.4 9.28125 8.1 9 7.8 9H0.6C0.2625 9 0 8.75391 0 8.4375C0 8.15625 0.2625 7.875 0.6 7.875H9C9.3 7.875 9.6 7.62891 9.6 7.3125C9.6 7.03125 9.3 6.75 9 6.75H1.8C1.4625 6.75 1.2 6.50391 1.2 6.1875C1.2 5.90625 1.4625 5.625 1.8 5.625H10.2C10.5 5.625 10.8 5.37891 10.8 5.0625C10.8 4.78125 10.5 4.5 10.2 4.5H0.6C0.2625 4.5 0 4.25391 0 3.9375C0 3.65625 0.2625 3.375 0.6 3.375H2.4V1.6875C2.4 0.773438 3.1875 0 4.2 0ZM20.4 8.36719L17.475 5.625H15.6V9H20.4V8.36719ZM6 16.3125C6.975 16.3125 7.8 15.5742 7.8 14.625C7.8 13.7109 6.975 12.9375 6 12.9375C4.9875 12.9375 4.2 13.7109 4.2 14.625C4.2 15.5742 4.9875 16.3125 6 16.3125ZM19.8 14.625C19.8 13.7109 18.975 12.9375 18 12.9375C16.9875 12.9375 16.2 13.7109 16.2 14.625C16.2 15.5742 16.9875 16.3125 18 16.3125C18.975 16.3125 19.8 15.5742 19.8 14.625Z" fill="#023F88"/>
          //   </svg>
          //   <span>Free shipping</span>                    
          // </div>
          //                           <div class="msg congrats">
          //                             <p>Congratulations!</p>
          //                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
          //       <path d="M1.8 0H11.4C12.375 0 13.2 0.773438 13.2 1.6875V3.375H15.075C15.7125 3.375 16.3125 3.62109 16.8 4.04297L19.6875 6.75C20.1375 7.17188 20.4 7.76953 20.4 8.36719V12.375C21.0375 12.375 21.6 12.9023 21.6 13.5C21.6 14.1328 21.0375 14.625 20.4 14.625H19.2C19.2 16.4883 17.5875 18 15.6 18C13.575 18 12 16.4883 12 14.625H7.20001C7.20001 16.4883 5.5875 18 3.6 18C1.575 18 0 16.4883 0 14.625V10.125C0 10.125 0 9.85072 0 9.53432C0 9.25307 0 9 0 9C0 9 0 8.75391 0 8.4375C0 8.15625 0 7.875 0 7.875C0 7.875 0 7.62891 0 7.3125C0 7.03125 0 6.75 0 6.75C0 6.75 0 6.50391 0 6.1875C0 5.90625 0 5.625 0 5.625C0 5.625 0 5.37891 0 5.0625C0 4.78125 0 4.5 0 4.5C0 4.5 0 4.25391 0 3.9375C0 3.65625 0 3.375 0 3.375V1.6875C0 0.773438 0.787499 0 1.8 0ZM18 8.36719L15.075 5.625H13.2V9H18V8.36719ZM3.6 16.3125C4.575 16.3125 5.4 15.5742 5.4 14.625C5.4 13.7109 4.575 12.9375 3.6 12.9375C2.5875 12.9375 1.8 13.7109 1.8 14.625C1.8 15.5742 2.5875 16.3125 3.6 16.3125ZM17.4 14.625C17.4 13.7109 16.575 12.9375 15.6 12.9375C14.5875 12.9375 13.8 13.7109 13.8 14.625C13.8 15.5742 14.5875 16.3125 15.6 16.3125C16.575 16.3125 17.4 15.5742 17.4 14.625Z" fill="#023F88"/>
          //       <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29831 4.40819C9.58093 4.711 9.56457 5.18559 9.26175 5.46822L4.40405 10.0021L2.18057 7.40802C1.911 7.09352 1.94743 6.62005 2.26192 6.35048C2.57641 6.08092 3.04989 6.11734 3.31946 6.43183L4.52455 7.83778L8.23828 4.37163C8.54109 4.08901 9.01568 4.10537 9.29831 4.40819Z" fill="white"/>
          //     </svg>
          //     <span>You're eligible for free delivery</span>
          //                           </div>
          //                         `)
          //                       }

          //                       if (document.querySelector('.cart__message__default.is-hidden')) {
          //                         document.querySelector('.msg.away-from').style.display = "none"
          //                         document.querySelector('.msg.congrats').style.display = "flex"
          //                       } else {
          //                         document.querySelector('.away-from__number').innerText = extractNumberWithDollarSignAndPlus(drawerMessage)

          //                         document.querySelector('.msg.away-from').style.display = "flex"
          //                         document.querySelector('.msg.congrats').style.display = "none"
          //                       }

          //                       if (!document.querySelector('.get-ur-discount')) {
          //                         document.querySelector('.cart__item__content').insertAdjacentHTML('beforeend', /*html*/`
          //                           <div class="get-ur-discount">
          //                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
          //   <path d="M7.60056 8.84132C7.94519 8.84132 8.22456 8.56195 8.22456 8.21732C8.22456 7.8727 7.94519 7.59332 7.60056 7.59332C7.25594 7.59332 6.97656 7.8727 6.97656 8.21732C6.97656 8.56195 7.25594 8.84132 7.60056 8.84132Z" fill="#53B6EB"/>
          //   <path d="M12.3916 12.3854C12.2261 12.3854 12.0674 12.4511 11.9504 12.5681C11.8334 12.6852 11.7676 12.8439 11.7676 13.0094C11.766 13.135 11.802 13.2583 11.8708 13.3635C11.9396 13.4686 12.0383 13.5509 12.1541 13.5997C12.2699 13.6485 12.3976 13.6617 12.5209 13.6376C12.6443 13.6134 12.7576 13.5531 12.8465 13.4642C12.9353 13.3753 12.9957 13.262 13.0198 13.1387C13.0439 13.0153 13.0308 12.8876 12.9819 12.7718C12.9331 12.656 12.8509 12.5574 12.7457 12.4885C12.6406 12.4197 12.5173 12.3838 12.3916 12.3854Z" fill="#53B6EB"/>
          //   <path d="M17.3596 8.76135C17.0769 8.49769 16.8391 8.18964 16.6556 7.84935C16.5377 7.46339 16.4836 7.06075 16.4956 6.65735C16.5637 5.95049 16.3607 5.24416 15.9276 4.68135C15.3648 4.24829 14.6585 4.04526 13.9516 4.11335C13.5616 4.12101 13.1728 4.06702 12.7996 3.95335C12.4593 3.76988 12.1513 3.53208 11.8876 3.24935C11.4134 2.67522 10.7383 2.30333 9.99961 2.20935C9.27402 2.30914 8.61345 2.68089 8.15161 3.24935C7.88637 3.53035 7.57861 3.76791 7.23961 3.95335C6.85352 4.07071 6.45098 4.12474 6.04761 4.11335C5.33815 4.04399 4.62887 4.24705 4.06361 4.68135C3.63266 5.24494 3.43244 5.95146 3.50361 6.65735C3.50932 7.06096 3.45265 7.46304 3.33561 7.84935C3.15493 8.19144 2.9168 8.49993 2.63161 8.76135C2.06799 9.2261 1.69963 9.88571 1.59961 10.6094C1.69374 11.3331 2.05987 11.9938 2.62361 12.4574C2.91343 12.7318 3.15423 13.0538 3.33561 13.4093C3.45297 13.7954 3.507 14.198 3.49561 14.6013C3.43025 15.3104 3.6329 16.0183 4.06361 16.5853C4.63002 17.0168 5.33919 17.217 6.04761 17.1453C6.45114 17.1409 6.85303 17.1975 7.23961 17.3133C7.58037 17.4961 7.88853 17.734 8.15161 18.0174C8.62052 18.5692 9.28058 18.9235 9.99961 19.0093C10.7221 18.9114 11.3815 18.546 11.8476 17.9853C12.1203 17.6936 12.4427 17.4525 12.7996 17.2733C13.1856 17.1554 13.5882 17.1014 13.9916 17.1133C14.6981 17.1774 15.403 16.9748 15.9676 16.5454C16.4019 15.9801 16.605 15.2708 16.5356 14.5613C16.5242 14.158 16.5783 13.7554 16.6956 13.3693C16.881 13.0303 17.1186 12.7226 17.3996 12.4574C17.9532 11.9888 18.3101 11.3291 18.3996 10.6094C18.296 9.88504 17.925 9.22577 17.3596 8.76135ZM6.15961 8.21735C6.15803 7.93413 6.24047 7.65681 6.39651 7.42045C6.55254 7.18408 6.77516 6.9993 7.03621 6.88946C7.29727 6.77961 7.58503 6.74965 7.86311 6.80335C8.14119 6.85705 8.39711 6.99201 8.59849 7.19115C8.79987 7.3903 8.93768 7.64469 8.99449 7.92216C9.05129 8.19962 9.02455 8.4877 8.91763 8.74997C8.81071 9.01223 8.62842 9.2369 8.39382 9.39556C8.15921 9.55423 7.88283 9.63976 7.59961 9.64135C7.2212 9.64136 6.85817 9.49158 6.58985 9.22476C6.32153 8.95793 6.16972 8.59575 6.16761 8.21735H6.15961ZM7.52761 13.6334C7.4917 13.6716 7.44832 13.7021 7.40016 13.723C7.35201 13.7438 7.30009 13.7546 7.24761 13.7546C7.19513 13.7546 7.14321 13.7438 7.09505 13.723C7.0469 13.7021 7.00352 13.6716 6.96761 13.6334C6.92934 13.5974 6.89885 13.5541 6.878 13.5059C6.85715 13.4577 6.84639 13.4058 6.84639 13.3534C6.84639 13.3009 6.85715 13.249 6.878 13.2008C6.89885 13.1526 6.92934 13.1093 6.96761 13.0733L12.4476 7.58535C12.4849 7.54806 12.5292 7.51847 12.5779 7.49829C12.6266 7.4781 12.6789 7.46771 12.7316 7.46771C12.7844 7.46771 12.8366 7.4781 12.8853 7.49829C12.934 7.51847 12.9783 7.54806 13.0156 7.58535C13.0529 7.62265 13.0825 7.66692 13.1027 7.71565C13.1229 7.76438 13.1332 7.81661 13.1332 7.86935C13.1332 7.92209 13.1229 7.97432 13.1027 8.02305C13.0825 8.07178 13.0529 8.11606 13.0156 8.15335L7.52761 13.6334ZM12.3836 14.4334C12.1004 14.4334 11.8235 14.3494 11.588 14.192C11.3525 14.0347 11.169 13.811 11.0606 13.5494C10.9522 13.2877 10.9239 12.9998 10.9791 12.722C11.0344 12.4442 11.1708 12.189 11.371 11.9888C11.5713 11.7885 11.8265 11.6521 12.1042 11.5969C12.382 11.5416 12.6699 11.57 12.9316 11.6784C13.1933 11.7867 13.4169 11.9703 13.5743 12.2058C13.7316 12.4413 13.8156 12.7181 13.8156 13.0013C13.8167 13.1894 13.7807 13.3758 13.7097 13.55C13.6387 13.7241 13.5341 13.8826 13.4018 14.0163C13.2696 14.15 13.1123 14.2564 12.939 14.3293C12.7657 14.4022 12.5797 14.4403 12.3916 14.4414L12.3836 14.4334Z" fill="#53B6EB"/>
          // </svg>
          // <p>Get Your 10% Off</p>
          // <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
          //   <g clip-path="url(#clip0_1003_173)">
          //     <path d="M4 1.20938L8 5.6094L4 10.0094" stroke="#53B6EB" stroke-linecap="square" stroke-linejoin="round"/>
          //   </g>
          //   <defs>
          //     <clipPath id="clip0_1003_173">
          //       <rect width="11" height="11" fill="white" transform="matrix(0 -1 1 0 0 11.1094)"/>
          //     </clipPath>
          //   </defs>
          // </svg>
          //                           </div>
          //                         `)

          //                         waitForElement('.get-ur-discount').then(el => el.addEventListener('click', () => {
          //                           console.log(el)
          //                         }))
          //                       }

          //                       console.log('mut')
          //                     }
          //                   }
          //                 }
          //               }
          //               const observer = new MutationObserver(callback)
          //               observer.observe(cartDrawer, config)

          //               // Initial check
          //               checkIsOpen(cartDrawer, productPriceBlock)
          //             }
          //           }, WAIT_INTERVAL_TIMEOUT)
        }


      }
    }, WAIT_INTERVAL_TIMEOUT)
  }
})()