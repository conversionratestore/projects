(function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const dir = `https://conversionratestore.github.io/projects/geeni/img/`;
  const WAIT_INTERVAL_TIMEOUT = 100;
  const media = window.matchMedia("(max-width: 1023px)").matches;

  const location = window.location;

  const req = /(\d{1,})(\d{2})$/; // Regular expression to extract a number with a dollar sign ($) and optional '+' sign

  /* CSS & HTML */
  const styleBase = /*html*/ `
  <style>
  #shopify-section-header {
    z-index: 999999;
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
  
  .msg span:not(.away-from__number) {
    color: var(--Main-Blue, #023F88);
    font-weight: 600;
  }
  @media screen and (max-width: 376px) {
    .msg {
      gap: 3px;
        }
    }
  
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
    </style>`;
  const stylePDP = /*html*/ `
  <style class="style-pdp"> 
      .select-popout__toggle .icon-select,
      .payments-exp ul li iframe.paypalLight, 
      .payments-exp ul li [data-testid="GooglePay-button"],
      .MainTabarnappUIContainer {
          display: none!important;
      }
      .crs-amzn {
        display: block!important;
      }
      .main-content {
          display: flex;
          flex-direction: column;
      }
       .shopify-installments__learn-more {
        color: #023F88 !important;
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
          margin-bottom: 0;
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
          padding-top: 7px;
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
          margin: 0 12px 0 4px;
          background: #1B1B1B;
          flex-shrink: 0;
          display: block;
      }
      .product__price-and-badge .product__price p.name {
          font-weight: 400;
      }
      .product__price {
        display: flex;
        align-items: center;
      }
      .product__price p,
      .product__price .saved,
      .product__price span {
        margin: 0 !important;
      }
      .product__price--compare {
        margin: 0 11px 0 0!important;
        font-size: 17px;
        line-height: 23.75px; 
        color: #000;
        opacity: 0.5;
      }
      .product__price span.product__price--regular {
        color: #000;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 23.75px; 
        margin-right: 5px!important;
      }
      .selector-wrapper--qty {
        width: 100%;
        margin-right: 8px;
      }
      .compatibility_block {
          border-radius: 6px;
          border: 1px solid var(--Border, #D9D9D9);
          background: #FFF;
          margin-left: 5px;
          padding: 0 6px;
          height: 42px;
          width: fit-content;
          flex-shrink: 0;
      }
      .payments-exp {
          display: none!important;
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
      .product__alternates {
        padding: 10px 0;
      }
      .product-single__wrapper .product__submit__holder {
        padding: 0!important;
       }
       .crs-gray {
        border-radius: 4px;
        background: var(--bg-light-grey, #F7F7F7);
        padding: 0 20px;
        margin: 0 -20px 12px;
       }
       .crs-gray button {
        font-weight: 700;
        margin-bottom: 12px;
       }
       .product__submit__block.crs-gray {
        padding: 14px 20px;
       }
       .crs-gray p {
        margin: 0;
       }
       .product__submit__block.crs-gray p {
        color: var(--font-h, #1B1B1B);
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; 
        margin: 4px 0 0 0;
       }
       .product__submit__block.crs-gray p b {
        font-weight: 700;
       }
       .product__submit__block .crs-tooltip {
        margin-bottom: -3px;
        cursor: pointer;
        margin-left: 4px;
       }
      .warranty {
          margin: 12px -20px 0;
          background: #E8F8FE;
          padding: 9px;
          color: #1B1B1B;
          text-align: center;
          font-size: 14px;
          font-weight: 600;
          line-height: 18.81px; 
          text-transform: uppercase;
      }
      .warranty svg {
          margin-right: 8px;
      }
      .product__description .title {
          color: #1B1B1B;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          margin: 0 0 12px 0;
      }

      /* Andrii's part */
  
      .shop-pay-terms {
        font-size: 14px;
      }

      .product__title-and-price {
        margin-bottom: 2px!important;
      }
  
      .video-preview img {
        height: 100%;
        object-fit: cover;
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

  .product__form.hide-shoppay .product__submit__item [name="add"] {
    min-width: 100%;
  }
  
  .product__form.hide-shoppay .product__submit__item .payments-exp {
    display: none !important;
  }
  .variant--soldout .product__submit__add {
    background: #DEDEDE;
  }
  .variant--soldout .product__submit__add span {
    color: var(--font-grey, #888);
  text-align: center;
  font-family: Avenir Next;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.8px;
  text-transform: uppercase;
  }
  /*.product__submit__item [name="add"] {display: none;} */
  
      @media screen and (max-width: 1023px) {
        .pack_size li.selected {
          padding: 2px 16px 2px 2px;
        }
        .pack_size ul li .sold-out.sold-out--show {
          margin-inline: auto 0;
        }
        .sold-out--show + .prices {
          display: none;
        }
        .product__price-and-badge .product__price p.pr:before {
          margin: 0 6px 0 -2px;
        }
        .discount {
          padding-top: 12px;
          justify-content: center;
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
        
          .product-single {
              padding-bottom: 0;
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
  
          .payments-exp > p {
              display: none;
          }
          .discount {
              padding: 0;
          }
          .product__form .btn--submit {
              width: 48%;       
      
              min-width: 100%;
          }
          .product__form.is-shoppay .btn--submit {
            min-width: auto;
          }
  
          .product__form  {
            gap: 4px !important;
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
          .product__submit__item, .warranty, .support  {
              margin-left: 0;
              margin-right: 0;
          }
          .compatibility_block  {
              min-width: 130px;
              margin-left: 20px;
          }
          .support {
              padding-right: 25px;
              padding-left: 25px;
          }
          .product__submit__wrapper {
            width: 100%;
            margin-top: 15px;
          }
          .product__submit__wrapper > div {
            width: calc(50% - 4px);
            margin: 0;
           
            border-radius: 30px 30px 4px 4px;
          }
          .product__submit__block.crs-gray {
            padding: 0 0 12px 0;
          }
          .product__submit__wrapper > div:first-child {
            margin-right: 8px;
          }
          .product__submit__buttons {
            margin: 0;
          }
          .crs-amzn {
            margin-top: -16px;
          }
          .crs-gray button {
            margin-bottom: 8px;
          }
          .selector-wrapper--qty {
            width: 130px;
            margin: 0;
          }
          .selector-wrapper--qty .select-popout--small {
            max-width: 130px;
          }
          .select-popout__toggle {
            line-height: 1;
          }
          .product__block .rte li {
            max-width: calc(100% - 50px);
            list-style-type: none;
            margin-left: auto;
          }
      }
      @media screen and (max-width: 767px) {
        .product__form {
          gap: 0 !important;
        }
      }

    </style>`;

  const cartCSS = /*html */ `
  <style>
  .cart-drawer button.btn_amazon {
    margin: 8px 0 0 0!important;
  }
  .cart-drawer .discount {
        text-align: center;
      border-top: 1px solid #D9D9D9;
      padding: 15px 0 19px;
      margin-inline: 20px;
      justify-content: center;
      }
  .cart-drawer__message {
    background: var(--bg-light-grey, #F7F7F7);
    padding-top: 10px !important;
  }
  
  .cart__message__progress {
    height: 3px !important;
    background-color: #fff !important;
    border: 1px solid var(--Border, #D9D9D9);
  }
  
  .cart__message__progress__holder {
    line-height: 5px;
  }
  
  .cart__message__success,
  .cart__message__default {
    display: none !important;
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
  
  .reviews-title p{
    color: var(--font-h, #1B1B1B);
  text-align: center;
  font-family: Avenir Next;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 125% */
  text-transform: capitalize;
  margin: 0;
  margin-bottom: 25px;
  }
  
      .cart-drawer__foot{
          background: #FFF;
          box-shadow: 0px -2px 12px 0px rgba(0, 0, 0, 0.15);
          padding: 12px 20px 0;
      }
      .cart-drawer__foot .cart__text{
        font-size: 12px;
        line-height: 20px;
      }
      .cart-drawer__foot .warranty {
        margin-top: 8px;
      }
      .cart__widget__wrapper{
          border-radius: 5px;
          border: 1px solid #D9D9D9;
          background: #F7F7F7;
          margin: 0 0 12px;
      }
      .cart__widget__wrapper .cart__widget{
          margin: 0 !important;
          padding: 7px 12px;
      }
      .cart__widget__wrapper .cart__widget__title {
          margin: 0;
          padding: 0;
          color: #5B5B5B;
          font-family: 'Avenir Next';
          font-size: 14px;
          font-weight: 400;
          line-height: 157%;
      }
      .cart__widget__wrapper .cart__widget__title span {
        color: var(--font-blue, #023F88);
        font-weight: 600;
      }
      #gift-notes{
          margin: 0;
      }
      .cart__widget__title .icon{
          right: 15px;
          height: 12px;
          width: 12px;
          stroke-width: 25px;
          top: 5px;
      }
      .cart__widget__title .icon path{
          stroke: #023F88;
      }
      .cart__checkout{
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.8px;
      }
      /*subtotal_block */
      .subtotal-wrapper {
        margin-inline: 20px;
        padding-bottom: 35px;
      }
      .subtotal_block{
          padding: 0 !important;
      }
      .subtotal-wrapper {
        padding-top: 19px;
        border-top: 1px solid #D9D9D9;
      }
      .discount + .subtotal-wrapper {
        border: 0;
        padding-top: 0;
      }
      .get_discount_inform_wrapp{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
          border-top: 1px solid #D9D9D9;
          padding-top: 12px;
      }
      .get_discount_inform_wrapp p{
          color: #1B1B1B;
          font-family: 'Avenir Next';
          font-size: 14px;
          font-weight: 400;
          line-height: 157%;
          margin: 0;
      }
      .get_discount_inform_wrapp p b{
          font-weight: 600;
      }
      .product_title_list{
          margin: 0;
          padding: 0;
          list-style: none;
      }
      .product_title_list li{
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin: 0;
      }
      .product_title_list li + li{
          margin-top: 8px;
      }
      .product_title_list li p{
          color: #5B5B5B;
          font-family: 'Avenir Next';
          font-size: 14px;
          font-weight: 400;
          line-height: 157%;
          margin: 0;
      }
      .product_title_txt{
          max-width: 70%;
      }
      .subtotal_txt_wrapp{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          margin: 12px 0 0;
          border-top: 1px solid #D9D9D9;
      }
      .subtotal_txt_wrapp p{
          color: #1C1D1D;
          font-family: 'Avenir Next';
          font-size: 16px;
          font-weight: 700;
          line-height: 150%;
          margin: 0;
      }
      /**have_question_block */
      .have_question_block{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 15px;
          display: none;
      }
      .have_question_block p{
          color: #1B1B1B;
          font-family: 'Avenir Next';
          font-size: 14px;
          font-weight: 600;
          line-height: 134%;
          text-transform: uppercase;
          margin: 0;
      }
      .have_question_block p:nth-child(2){
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          color: #023F88;
          line-height: 157%;
          text-decoration-line: underline;
          cursor: pointer;
      }
  </style>
    `;

  const compatibilityHTML = (classess = "") => `  
    <div class="compatibility_block ${classess} items-center">
      <img src="${dir}compatibility_alexa.svg" alt="alexa">
      </div>
      <div class="compatibility_block ${classess}">
      <img src="${dir}compatibility_google.svg" alt="google">
    </div>`;

  const warranty = `
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
      1-YEAR WARRANTY ON ALL PRODUCTS
    </div>`;


  const iconPrime = `
    <svg style="position: absolute; right: 0; top: 0; z-index: 1;" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1145_63642)">
        <path d="M39.9874 79.8959C62.0724 79.8959 79.9748 62.0217 79.9748 39.9714C79.9748 17.9211 62.0724 0.046875 39.9874 0.046875C17.9024 0.046875 0 17.9211 0 39.9714C0 62.0217 17.9024 79.8959 39.9874 79.8959Z" fill="#1A99FF"/>
        <path d="M15.4221 53.0437C15.2835 53.0563 15.1575 53.0185 15.0567 52.9305C15.0063 52.8802 14.9811 52.8173 14.9559 52.7544C14.9307 52.6915 14.9307 52.616 14.9307 52.5531V39.572C14.9181 39.5091 14.9307 39.4336 14.9559 39.3707C14.9811 39.3078 15.0063 39.2449 15.0567 39.1946C15.1575 39.1192 15.2961 39.0814 15.4221 39.094H16.8205C16.9465 39.0814 17.0725 39.1192 17.1732 39.1946C17.274 39.2701 17.337 39.3833 17.3622 39.5217L17.4882 40.0248C17.8914 39.6349 18.3701 39.333 18.8992 39.1317C19.441 38.9179 20.0079 38.8047 20.5874 38.8047C21.8473 38.8047 22.8425 39.2701 23.5732 40.1883C24.304 41.1066 24.6693 42.3519 24.6693 43.9242C24.6693 45.0059 24.4929 45.9368 24.1276 46.7418C23.8126 47.4839 23.3087 48.1254 22.6536 48.6034C22.0236 49.0437 21.2803 49.2701 20.5118 49.2575C19.9953 49.2575 19.4788 49.1695 18.9874 49.0059C18.5339 48.855 18.1181 48.616 17.7528 48.3015V52.5657C17.7654 52.6286 17.7654 52.7041 17.7528 52.767C17.7402 52.8298 17.7024 52.8927 17.652 52.9431C17.6016 52.9934 17.5386 53.0311 17.4756 53.0437C17.4126 53.0563 17.337 53.0688 17.274 53.0437H15.4221ZM19.6929 47.1066C20.4236 47.1066 20.9528 46.855 21.3055 46.3644C21.6457 45.8739 21.8221 45.094 21.8221 44.0248C21.8221 42.9431 21.6583 42.1632 21.3181 41.6726C20.978 41.182 20.4362 40.9305 19.7055 40.9431C19.0378 40.9431 18.3701 41.1192 17.7906 41.4714V46.5909C18.3575 46.9305 19.0126 47.1066 19.6929 47.1066Z" fill="white"/>
        <path d="M27.0973 49.034C27.0343 49.0466 26.9587 49.034 26.8957 49.0214C26.8327 48.9963 26.7697 48.9711 26.7193 48.9208C26.6689 48.8705 26.6311 48.8202 26.6185 48.7447C26.5933 48.6818 26.5933 48.6063 26.6059 48.5434V39.5749C26.5933 39.512 26.6059 39.4365 26.6311 39.3736C26.6563 39.3107 26.6815 39.2478 26.7319 39.1975C26.8327 39.1221 26.9713 39.0843 27.0973 39.0843H28.4957C28.6217 39.0717 28.7477 39.1095 28.8485 39.1849C28.9492 39.2604 29.0122 39.3736 29.0374 39.512L29.2894 40.556C29.8185 39.99 30.3099 39.5749 30.7634 39.3359C31.217 39.0969 31.7209 38.9711 32.2374 38.9711H32.5146C32.6532 38.9585 32.7918 38.9963 32.9051 39.0843C32.9555 39.1346 32.9807 39.1975 33.0059 39.2604C33.0311 39.3233 33.0311 39.3988 33.0185 39.4617V41.0969C33.0311 41.2227 32.9933 41.361 32.9177 41.4617C32.8673 41.512 32.8044 41.5371 32.7414 41.5623C32.6784 41.5875 32.6028 41.5875 32.5398 41.5875C32.4516 41.5875 32.3256 41.5875 32.187 41.5623C32.0485 41.5371 31.8595 41.5497 31.6453 41.5497C31.2799 41.5623 30.9146 41.6 30.5492 41.6755C30.1713 41.7384 29.8059 41.8516 29.4532 42.0026V48.5434C29.4658 48.6818 29.428 48.8076 29.3398 48.9082C29.2894 48.9585 29.2264 48.9837 29.1634 49.0088C29.1004 49.034 29.0248 49.034 28.9618 49.034H27.0973Z" fill="white"/>
        <path d="M35.8175 37.5579C35.3891 37.5831 34.9608 37.4321 34.6332 37.1554C34.3435 36.8535 34.1797 36.4636 34.1797 36.0485C34.1797 35.6334 34.3435 35.2309 34.6332 34.9416C34.9734 34.6774 35.3891 34.5391 35.8175 34.5391C36.2458 34.5391 36.6616 34.6774 37.0017 34.9416C37.2915 35.2435 37.4553 35.6334 37.4553 36.0485C37.4553 36.4636 37.2915 36.8661 37.0017 37.1554C36.6742 37.4321 36.2458 37.5705 35.8175 37.5579ZM34.8726 49.0296C34.8096 49.0422 34.734 49.0422 34.671 49.0171C34.608 48.9919 34.545 48.9667 34.4946 48.9164C34.4443 48.8661 34.4065 48.8158 34.3939 48.7403C34.3687 48.6774 34.3687 48.602 34.3813 48.5391V39.5705C34.3687 39.5076 34.3813 39.4321 34.4065 39.3693C34.4317 39.3064 34.4569 39.2435 34.5072 39.1932C34.608 39.1177 34.7466 39.0799 34.8726 39.0799H36.7372C36.8002 39.0674 36.8758 39.0674 36.9387 39.0799C37.0017 39.0925 37.0647 39.1303 37.1151 39.1806C37.1655 39.2309 37.2033 39.2938 37.2159 39.3567C37.2285 39.4196 37.2411 39.495 37.2159 39.5579V48.5516C37.2285 48.69 37.1907 48.8158 37.1025 48.9164C37.0521 48.9667 36.9891 48.9919 36.9261 49.0171C36.8632 49.0422 36.7876 49.0422 36.7246 49.0422H34.8726V49.0296Z" fill="white"/>
        <path d="M40.1402 49.0291C40.0772 49.0417 40.0017 49.0417 39.9387 49.0165C39.8757 48.9914 39.8127 48.9662 39.7623 48.9159C39.7119 48.8656 39.6741 48.8153 39.6615 48.7398C39.6363 48.6769 39.6363 48.6014 39.6489 48.5385V39.57C39.6363 39.5071 39.6489 39.4316 39.6741 39.3687C39.6993 39.3058 39.7245 39.2429 39.7749 39.1926C39.8757 39.1172 40.0143 39.0794 40.1402 39.0794H41.5387C41.6646 39.0668 41.7906 39.1046 41.8914 39.1801C41.9922 39.2555 42.0552 39.3687 42.0804 39.5071L42.2316 40.0354C42.8111 39.6329 43.4284 39.3184 44.0961 39.0668C44.6505 38.8782 45.2174 38.7775 45.7969 38.7901C46.9686 38.7901 47.7875 39.2052 48.2662 40.0354C48.8458 39.6329 49.4757 39.3184 50.1434 39.0794C50.7229 38.8907 51.3402 38.7901 51.9576 38.7901C52.8646 38.7901 53.5702 39.0417 54.0741 39.5448C54.578 40.048 54.83 40.7524 54.83 41.6706V48.5511C54.8426 48.6769 54.8048 48.8153 54.7166 48.9159C54.6662 48.9662 54.6032 48.9914 54.5402 49.0165C54.4772 49.0417 54.4017 49.0417 54.3387 49.0417H52.4615C52.3985 49.0543 52.3229 49.0543 52.2599 49.0291C52.1969 49.004 52.1339 48.9788 52.0835 48.9285C52.0332 48.8782 51.9954 48.8279 51.9828 48.7524C51.9576 48.6895 51.9576 48.614 51.9702 48.5511V42.3121C51.9702 41.4316 51.5796 40.9914 50.7859 40.9914C50.0552 41.004 49.3245 41.1675 48.6568 41.4945V48.5511C48.6694 48.6895 48.6316 48.8153 48.5434 48.9159C48.493 48.9662 48.43 48.9914 48.367 49.0165C48.304 49.0417 48.2284 49.0417 48.1654 49.0417H46.3009C46.2379 49.0543 46.1623 49.0543 46.0993 49.0291C46.0363 49.004 45.9733 48.9788 45.9229 48.9285C45.8725 48.8782 45.8347 48.8279 45.8221 48.7524C45.7969 48.6895 45.7969 48.614 45.8095 48.5511V42.3121C45.8095 41.4316 45.419 40.9914 44.6253 40.9914C43.882 40.9914 43.1513 41.1801 42.4835 41.5197V48.5637C42.4961 48.6895 42.4583 48.8279 42.3702 48.9285C42.3198 48.9788 42.2568 49.004 42.1938 49.0291C42.1308 49.0543 42.0552 49.0543 41.9922 49.0543L40.1402 49.0291Z" fill="white"/>
        <path d="M61.5806 49.3176C59.968 49.3176 58.7333 48.8773 57.864 47.9968C56.9948 47.1163 56.5664 45.8459 56.5664 44.1981C56.5664 42.5126 57.0074 41.1918 57.8892 40.2233C58.7711 39.2673 60.0058 38.7767 61.568 38.7893C62.7774 38.7893 63.7223 39.0786 64.4026 39.6698C65.0829 40.2484 65.4231 41.0283 65.4231 42.0094C65.4231 42.978 65.0577 43.7201 64.327 44.2107C63.5963 44.7138 62.5129 44.9654 61.0766 44.9654C60.4215 44.978 59.779 44.9025 59.1491 44.7516C59.2247 45.6195 59.4892 46.2484 59.9302 46.6132C60.3711 46.978 61.0514 47.1792 61.9711 47.1792C62.3239 47.1792 62.6766 47.1541 63.0294 47.1163C63.5081 47.0409 63.9869 46.9402 64.4656 46.8145C64.5034 46.8019 64.5412 46.7893 64.579 46.7893C64.6168 46.7893 64.642 46.7767 64.6798 46.7767C64.894 46.7767 65.0074 46.9277 65.0074 47.2296V48.1226C65.0199 48.2736 64.9948 48.4245 64.9192 48.5629C64.831 48.6635 64.7176 48.7516 64.579 48.7893C63.6341 49.1415 62.6136 49.3302 61.5806 49.3176ZM60.9381 43.217C61.6058 43.217 62.0845 43.1163 62.3743 42.9151C62.6766 42.7138 62.8152 42.4119 62.8278 41.9843C62.8278 41.1667 62.3365 40.7641 61.3664 40.7641C60.1192 40.7641 59.4011 41.5314 59.1995 43.0534C59.779 43.1667 60.3585 43.217 60.9381 43.217Z" fill="white"/>
        <path d="M15.0298 28.978C14.992 28.978 14.9416 28.978 14.9038 28.9654C14.866 28.9528 14.8282 28.9276 14.7904 28.9025C14.7652 28.8773 14.74 28.8396 14.7274 28.7893C14.7148 28.7515 14.7148 28.7012 14.7148 28.6635V20.4874C14.7148 20.4497 14.7148 20.3993 14.7274 20.3616C14.74 20.3239 14.7652 20.2861 14.7904 20.2484C14.8156 20.2232 14.8534 20.1981 14.9038 20.1855C14.9416 20.1729 14.992 20.1729 15.0298 20.1729H17.877C18.3936 20.1603 18.8975 20.261 19.3637 20.4622C19.7668 20.6383 20.107 20.9276 20.3589 21.2798C20.5983 21.6446 20.7243 22.0723 20.7117 22.5125C20.7117 23.3931 20.3211 24.0094 19.5274 24.349C20.0188 24.4748 20.4471 24.7515 20.7747 25.1289C21.0644 25.5188 21.2156 26.0094 21.1904 26.5C21.203 26.8522 21.1274 27.1918 20.9889 27.5063C20.8377 27.8207 20.6235 28.0975 20.3463 28.3113C19.7794 28.7641 19.0109 28.9905 18.0534 28.9905H15.0298V28.978ZM16.5164 23.8459H17.6251C18.444 23.8459 18.8597 23.4685 18.8597 22.7012C18.8597 21.9214 18.4818 21.5314 17.7259 21.5314H16.5164V23.8459ZM16.5164 27.6195H18.0156C18.8849 27.6195 19.3133 27.217 19.3133 26.3993C19.3133 25.5566 18.8471 25.1415 17.9274 25.1415H16.5164V27.6195Z" fill="white"/>
        <path d="M24.4166 29.1684C23.8371 29.1684 23.3835 28.9923 23.0686 28.6527C22.741 28.313 22.5898 27.8351 22.5898 27.2313V22.791C22.5898 22.7533 22.5898 22.703 22.6024 22.6652C22.615 22.6275 22.6402 22.5898 22.6654 22.552C22.6906 22.5143 22.7284 22.5017 22.7788 22.4891C22.8166 22.4766 22.867 22.4766 22.9048 22.4766H24.1269C24.1646 22.4766 24.215 22.4766 24.2528 22.4891C24.2906 22.5017 24.3284 22.5269 24.3662 22.552C24.3914 22.5772 24.4166 22.6149 24.4292 22.6652C24.4418 22.703 24.4418 22.7533 24.4418 22.791V26.7156C24.4418 27.4074 24.7442 27.747 25.3363 27.747C25.8024 27.7344 26.256 27.5961 26.6339 27.3445V22.8036C26.6339 22.7659 26.6339 22.7156 26.6465 22.6778C26.6591 22.6401 26.6843 22.6023 26.7095 22.5646C26.7347 22.5395 26.7725 22.5143 26.8229 22.5017C26.8607 22.4891 26.9111 22.4891 26.9489 22.4891H28.1709C28.2087 22.4766 28.2591 22.4891 28.2969 22.5017C28.3347 22.5143 28.3725 22.5395 28.4103 22.5646C28.4355 22.5898 28.4607 22.6275 28.4733 22.6778C28.4859 22.7156 28.4859 22.7659 28.4859 22.8036V28.6652C28.4859 28.703 28.4859 28.7533 28.4733 28.791C28.4607 28.8288 28.4355 28.8665 28.4103 28.9042C28.3851 28.9294 28.3473 28.9545 28.2969 28.9671C28.2591 28.9797 28.2087 28.9797 28.1709 28.9797H27.2513C27.1631 28.9797 27.0875 28.9545 27.0245 28.9042C26.9615 28.8539 26.9111 28.7784 26.8985 28.6904L26.7851 28.2879C26.4324 28.5772 26.0418 28.791 25.6135 28.9545C25.2355 29.1055 24.8198 29.1684 24.4166 29.1684Z" fill="white"/>
        <path d="M31.1564 31.7641C30.8289 31.7641 30.5139 31.7137 30.199 31.6383C30.1108 31.6131 30.0352 31.5754 29.9722 31.4999C29.9218 31.4119 29.9092 31.3112 29.9218 31.2106V30.6194C29.9218 30.4307 29.9974 30.3301 30.1612 30.3301C30.2368 30.3301 30.3124 30.3301 30.3879 30.3427C30.4761 30.3552 30.5643 30.3552 30.6525 30.3552C30.9549 30.3678 31.2446 30.2798 31.484 30.1037C31.6856 29.9402 31.8494 29.6508 31.9753 29.2483L32.0131 29.11L29.6194 23.0219C29.569 22.9213 29.5438 22.8081 29.5312 22.7074C29.5312 22.5817 29.6068 22.5188 29.7706 22.5188H31.0557C31.1564 22.5062 31.2572 22.5313 31.3454 22.5942C31.421 22.6571 31.484 22.7578 31.4966 22.8584L32.8572 27.3867L34.1423 22.8584C34.1675 22.7578 34.2179 22.6697 34.3061 22.6068C34.3942 22.5439 34.495 22.5188 34.5958 22.5313H35.8431C36.0068 22.5313 36.0824 22.5942 36.0824 22.72C36.0698 22.8332 36.0446 22.9339 35.9942 23.0345L33.4116 29.9024C33.1596 30.5691 32.8698 31.0597 32.5171 31.349C32.1265 31.6257 31.6478 31.7766 31.1564 31.7641Z" fill="white"/>
        <path d="M43.1377 28.9829H42.0542C41.9535 28.9954 41.8527 28.9703 41.7645 28.9074C41.6889 28.8319 41.6385 28.7439 41.6133 28.6558L39.7739 22.9954C39.7361 22.8948 39.7109 22.7942 39.7109 22.6935C39.7109 22.5552 39.7991 22.4923 39.9629 22.4923H41.2479C41.3487 22.4797 41.4495 22.5174 41.5251 22.5678C41.6007 22.6307 41.6511 22.7187 41.6637 22.8193L42.6842 27.1715L43.7802 22.8068C43.8054 22.7061 43.8558 22.6181 43.944 22.5552C44.0322 22.4923 44.133 22.4671 44.2338 22.4797H45.1661C45.2668 22.4671 45.3676 22.4923 45.4558 22.5552C45.544 22.6181 45.5944 22.7061 45.6196 22.8068L46.7409 27.1841L47.6983 22.8068C47.7109 22.7061 47.7613 22.6181 47.8369 22.5552C47.9125 22.4923 48.0133 22.4671 48.1141 22.4797H49.3487C49.5251 22.4797 49.6007 22.5426 49.6007 22.681C49.6007 22.7816 49.5755 22.8822 49.5377 22.9829L47.6857 28.6432C47.6731 28.7439 47.6101 28.8445 47.5346 28.8948C47.4464 28.9577 47.3456 28.9829 47.2448 28.9703H46.1613C46.0605 28.9829 45.9598 28.9451 45.8842 28.8822C45.8086 28.8193 45.7456 28.7313 45.733 28.6307L44.6873 24.3917L43.629 28.6307C43.6038 28.7313 43.5535 28.8193 43.4653 28.8822C43.3519 28.9703 43.2511 28.9954 43.1377 28.9829Z" fill="white"/>
        <path d="M51.6021 21.4844C51.325 21.497 51.0352 21.4089 50.821 21.2202C50.632 21.0315 50.5312 20.7674 50.5312 20.4907C50.5312 20.2265 50.632 19.9624 50.821 19.7611C51.0478 19.585 51.3124 19.497 51.6021 19.4844C51.8793 19.4844 52.1564 19.5724 52.3832 19.7485C52.5722 19.9498 52.673 20.2014 52.673 20.4781C52.673 20.7422 52.5722 21.0064 52.3832 21.2076C52.1564 21.3963 51.8793 21.497 51.6021 21.4844ZM50.9848 28.9812C50.947 28.9812 50.8966 28.9812 50.8588 28.9687C50.821 28.9561 50.7832 28.9309 50.7454 28.9058C50.7202 28.8806 50.695 28.8429 50.6824 28.7926C50.6698 28.7548 50.6698 28.7045 50.6698 28.6668V22.8051C50.6698 22.7674 50.6698 22.7171 50.6824 22.6793C50.695 22.6416 50.7202 22.6039 50.7454 22.5661C50.7706 22.5284 50.8084 22.5158 50.8588 22.5032C50.8966 22.4907 50.947 22.4907 50.9848 22.4907H52.2068C52.2446 22.4907 52.295 22.4907 52.3328 22.5032C52.3706 22.5158 52.4084 22.541 52.4462 22.5661C52.4714 22.5913 52.4966 22.629 52.5092 22.6793C52.5218 22.7171 52.5218 22.7674 52.5218 22.8051V28.6668C52.5218 28.7045 52.5218 28.7548 52.5092 28.7926C52.4966 28.8303 52.4714 28.868 52.4462 28.9058C52.421 28.9309 52.3832 28.9561 52.3328 28.9687C52.295 28.9812 52.2446 28.9812 52.2068 28.9812H50.9848Z" fill="white"/>
        <path d="M56.7047 29.0788C55.9866 29.0788 55.4448 28.9152 55.1047 28.5756C54.7645 28.236 54.5881 27.7077 54.5881 27.0033V23.8586H53.9204C53.8826 23.8586 53.8322 23.8586 53.7944 23.8461C53.7566 23.8335 53.7189 23.8083 53.6811 23.7832C53.6559 23.758 53.6307 23.7203 53.6181 23.67C53.6055 23.6322 53.6055 23.5819 53.6055 23.5442V23.0159C53.6055 22.9278 53.6307 22.8398 53.6811 22.7769C53.7441 22.714 53.8196 22.6637 53.9078 22.6637L54.6385 22.5127L54.8653 21.0662C54.8653 20.9656 54.9031 20.8775 54.9787 20.802C55.0543 20.7517 55.1299 20.7266 55.2181 20.7266H56.1252C56.1629 20.7266 56.2133 20.7266 56.2511 20.7391C56.2889 20.7517 56.3267 20.7769 56.3645 20.802C56.4023 20.8272 56.4149 20.8649 56.4275 20.9152C56.4401 20.953 56.4401 21.0033 56.4401 21.041V22.475H57.8763C57.9141 22.475 57.9645 22.475 58.0023 22.4876C58.0401 22.5001 58.0779 22.5253 58.1157 22.5505C58.1535 22.5756 58.1661 22.6134 58.1787 22.6637C58.1913 22.7014 58.1913 22.7517 58.1913 22.7895V23.5316C58.1913 23.5693 58.1913 23.6196 58.1787 23.6574C58.1661 23.6951 58.1409 23.7329 58.1157 23.7706C58.0905 23.7957 58.0527 23.8209 58.0023 23.8335C57.9645 23.8461 57.9141 23.8461 57.8763 23.8461H56.4401V26.9152C56.4401 27.192 56.5031 27.3807 56.6417 27.4813C56.7803 27.5945 57.007 27.6448 57.3346 27.6448C57.4606 27.6448 57.5992 27.6322 57.7252 27.6071C57.8259 27.5945 57.9141 27.5819 58.0149 27.5819C58.1535 27.5819 58.2291 27.67 58.2291 27.8586V28.475C58.2417 28.5756 58.2165 28.6762 58.1787 28.7643C58.1283 28.8398 58.0401 28.8901 57.9519 28.9027C57.7629 28.953 57.574 29.0033 57.3724 29.0285C57.1582 29.0662 56.9315 29.0788 56.7047 29.0788Z" fill="white"/>
        <path d="M60.9276 28.9791H59.7056C59.6678 28.9791 59.6174 28.9791 59.5796 28.9665C59.5418 28.954 59.504 28.9288 59.4662 28.9036C59.441 28.8785 59.4158 28.8408 59.4032 28.7904C59.3906 28.7527 59.3906 28.7024 59.3906 28.6647V19.8848C59.3906 19.847 59.3906 19.7967 59.4032 19.759C59.4158 19.7213 59.441 19.6835 59.4662 19.6458C59.4914 19.6206 59.5292 19.5955 59.5796 19.5829C59.6174 19.5703 59.6678 19.5703 59.7056 19.5703H60.9276C60.9654 19.5703 61.0158 19.5703 61.0536 19.5829C61.0914 19.5955 61.1292 19.6206 61.167 19.6458C61.1922 19.6709 61.2174 19.7087 61.23 19.759C61.2426 19.7967 61.2426 19.847 61.2426 19.8848V23.0672C61.9103 22.5766 62.704 22.2999 63.5355 22.2873C64.1402 22.2873 64.6064 22.4508 64.9339 22.7779C65.2615 23.1049 65.4253 23.5703 65.4253 24.1741V28.6647C65.4253 28.7024 65.4253 28.7527 65.4127 28.7904C65.4001 28.8282 65.3749 28.8659 65.3497 28.9036C65.3245 28.9288 65.2867 28.954 65.2363 28.9665C65.1985 28.9791 65.1481 28.9791 65.1103 28.9791H63.8883C63.8505 28.9791 63.8001 28.9791 63.7623 28.9665C63.7245 28.954 63.6867 28.9288 63.6489 28.9036C63.6237 28.8785 63.5985 28.8408 63.5859 28.7904C63.5733 28.7527 63.5733 28.7024 63.5733 28.6647V24.7275C63.5733 24.0609 63.2583 23.7213 62.641 23.7213C62.1497 23.7338 61.6583 23.8848 61.2552 24.1489V28.6647C61.2552 28.7024 61.2552 28.7527 61.2426 28.7904C61.23 28.8282 61.2048 28.8659 61.1796 28.9036C61.1544 28.9288 61.1166 28.954 61.0662 28.9665C61.0158 28.9791 60.9654 28.9917 60.9276 28.9791Z" fill="white"/>
        <mask id="mask0_1145_63642" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="14" y="34" width="52" height="33">
          <path d="M65.8898 34.4688H14.9922V66.2926H65.8898V34.4688Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_1145_63642)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M61.0008 60.0081C55.4323 64.1213 47.3441 66.2974 40.3898 66.2974C30.6386 66.2974 21.8575 62.6999 15.2181 56.6999C14.7016 56.2345 15.1677 55.593 15.785 55.9452C22.9535 60.1087 31.8102 62.6244 40.9693 62.6244C47.1425 62.6244 53.9331 61.3414 60.1819 58.6999C61.1268 58.31 61.9205 59.3288 61.0008 60.0081Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3176 57.3654C62.6121 56.4598 58.6058 56.9377 56.8168 57.1516C56.2751 57.2145 56.1869 56.7491 56.6782 56.3969C59.8656 54.1579 65.094 54.7994 65.6987 55.5541C66.316 56.3088 65.5349 61.5415 62.5491 64.0447C62.083 64.4346 61.6546 64.2208 61.8562 63.7176C62.5239 62.0321 64.0231 58.2711 63.3176 57.3654Z" fill="white"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1145_63642">
          <rect width="80" height="80" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    `;
  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  start();

  const record = setInterval(() => {
    if (typeof clarity === "function") {
      clearInterval(record);

      clarity("set", "first_e_commerce_hp", "variant_1");
    }
  }, WAIT_INTERVAL_TIMEOUT);

  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
  function waitForElement(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
  }

  function handleVisibility(el, eventParams) {
    let isVisible = false;
    let entryTime;
    const config = {
      root: null,
      threshold: 0, // Trigger when any part of the element is out of viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            // The element has become visible
            isVisible = true;
            entryTime = new Date().getTime();
          }
        } else if (isVisible) {
          // The element is out of the viewport, calculate visibility duration
          isVisible = false;
          const exitTime = new Date().getTime();
          const visibilityDuration = (exitTime - entryTime) / 1000; // Convert to seconds
          const roundedDuration = Math.round(visibilityDuration);

          if (roundedDuration) {
            const eventData = eventParams;
            eventData[1] = roundedDuration;
            pushDataLayer(eventData);
            observer.disconnect();
          }
        }
      });
    }, config);

    observer.observe(el);
  }

  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };

    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
  }

  function extractNumberWithDollarSignAndPlus(string) {
    // Regular expression to extract a number with a dollar sign ($) and optional '+' sign
    const regex = /\$([\d.]+)\+/;

    // Extract the number with a dollar sign and optional '+' sign from the string
    const match = string.match(regex);
    if (match) {
      const number = parseFloat(match[1]); // Extract the number part without symbols
      return number; // Return only the extracted number
    } else {
      return ""; // Return null if no matching number is found
    }
  }

  //get cart
  function getCart() {
    return new Promise((resolve, reject) => {
      fetch(`https://mygeeni.com/cart.js`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  }

  //get the current date + 7 days in the format: Fri, Aug 11 (19)
  function formatDate() {
    const today = new Date();
    const deliveryDate = new Date(today);
    let addedBusinessDays = 0;

    while (addedBusinessDays < 7) {
      // Move to the next day
      deliveryDate.setDate(deliveryDate.getDate() + 1);

      // Check if the current day is a weekend day (Saturday or Sunday)
      if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) {
        addedBusinessDays++;
      }
    }

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const deliveryDayOfWeek = daysOfWeek[deliveryDate.getDay()];
    const deliveryMonth = months[deliveryDate.getMonth()];
    const deliveryDay = deliveryDate.getDate();

    const formattedDate = `${deliveryDayOfWeek}, ${deliveryMonth} ${deliveryDay}`;

    return formattedDate;
  }

  function spendDiscount(total) {
    if (!localStorage.getItem("hideMsg")) {
      let discount = ``;
      if (total >= 0 && total <= 99.0) {
        discount = `<p>Spend <b>$99</b> and get a <b>10% discount</b></p>`;
      } else if (total > 99.0 && total <= 149.0) {
        discount = `<p>Spend <b>$149</b> and get a <b>15% discount</b></p>`;
      } else if (total > 149.0) {
        discount = `<p>Spend <b>$199</b> and get a <b>20% discount</b></p>`;
      }

      let discountHTML = `
        <div class="discount d-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                <circle cx="14" cy="14.25" r="14" fill="#E8F8FE"/>
                <path d="M8.53864 8H13.3148C13.8598 8 14.3726 8.22387 14.7573 8.60765L20.399 14.2364C21.2003 15.036 21.2003 16.3472 20.399 17.1468L16.1357 21.4003C15.3343 22.1999 14.02 22.1999 13.2187 21.4003L7.57699 15.7716C7.19233 15.3878 7 14.8761 7 14.3324V9.53512C7 8.7036 7.67315 8 8.53864 8ZM10.5902 12.6054C11.1351 12.6054 11.6159 12.1576 11.6159 11.582C11.6159 11.0383 11.1351 10.5585 10.5902 10.5585C10.0132 10.5585 9.5644 11.0383 9.5644 11.582C9.5644 12.1576 10.0132 12.6054 10.5902 12.6054Z" fill="#023F88"/>
            </svg>  
            <div>
                ${discount}
            </div>  
        </div>`;

      if (!document.querySelector(".cart-drawer .discount")) {
        waitForElement(".cart-drawer__items").then((el) =>
          el.insertAdjacentHTML("afterend", discountHTML)
        );
      } else {
        document.querySelector(".cart-drawer .discount div").innerHTML =
          discount;
      }

      if (document.querySelector(".main-content .discount")) {
        document.querySelector(".main-content .discount div").innerHTML =
          discount;
      }
    }
  }

  // cart
  function addShippingBlock() {
    // shippingBlock in the cart
    if (
      document.querySelector(".cart-drawer__foot") &&
      !document.querySelector(".cart-drawer__foot .warranty")
    ) {
      document
        .querySelector(".cart-drawer__foot")
        .insertAdjacentHTML("beforeend", warranty);
    }
  }

  // Function to calculate the total price based on the items in the cart.
  function calculateTotalPriceItems(items) {
    let total = 0;
    items.forEach((item) => {
      const price = +item["price"].toString().replace(req, "$1.$2");
      const quantity = item["quantity"];
      total += price * quantity;
    });
    return total;
  }

  // Function to generate the subtotal block HTML.
  function subtotalBlock(items, totalPrice) {
    return /*html */ `
        <div class="subtotal_block">
          <div class="product_title_wrapp">
            <ul class="product_title_list">
              ${items
                .map(
                  (item) => `
                <li>
                  <p class="product_title_txt">${item.title}</p>
                  <p class="product_title_price">$${(item.price * item.quantity)
                    .toString()
                    .replace(req, "$1.$2")}</p>
                </li>
              `
                )
                .join("")}
            </ul>
          </div>
          <div class="subtotal_txt_wrapp">
            <p>Subtotal</p>
            <p class="subtotal_price">$${totalPrice.toFixed(2)}</p>
          </div>
        </div>`;
  }

  // Function to handle the observed mutations on the cart element.
  function handleCartMutation(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const targetElement = mutation.target;
        if (
          targetElement.classList.contains("is-open") &&
          !targetElement.classList.contains("is-loading")
        ) {
          getCart().then((data) => {
            if (data.items.length > 0) {
              const items = data.items;
              let total = +data["total_price"].toString().replace(req, "$1.$2");

              total = calculateTotalPriceItems(items);

              // Check if the subtotal block does not exist and insert it.
              if (
                document.querySelector(".cart-drawer__items") &&
                !document.querySelector(".subtotal-wrapper")
              ) {
                const subtotalHTML = subtotalBlock(items, total);
                document
                  .querySelector(".cart-drawer__items")
                  .insertAdjacentHTML(
                    "afterend",
                    `<div class="subtotal-wrapper">${subtotalHTML}</div>`
                  );
              } else {
                document.querySelector(".subtotal-wrapper").innerHTML =
                  subtotalBlock(items, total);
              }

              spendDiscount(total);
              addShippingBlock();
            } else if (
              document.querySelector(".cart-drawer .discount") &&
              document.querySelector(".subtotal_block")
            ) {
              document.querySelector(".cart-drawer .discount").remove();
              document.querySelector(".cart-drawer .subtotal_block").remove();
            }

            if (
              data.items.length < 1 &&
              localStorage.getItem("checkoutVisited")
            ) {
              localStorage.setItem("hideMsg", "true");

              if (document.querySelector(".main-content .discount")) {
                document.querySelector(".main-content .discount").remove();
              }
            }
            if (
              document.querySelector(".cart__widget__title") &&
              !document.querySelector(".cart__widget__title > span")
            ) {
              document.querySelector(".cart__widget__title").innerHTML =
                document
                  .querySelector(".cart__widget__title")
                  .innerHTML.replace("Add a note.", "<span>Add a note.</span>");
            }
          });

          redesignCartMsg();
        }
      }
    }
  }

  function redesignCartMsg() {
    const drawerMessage = document.querySelector(
      ".cart-drawer__message"
    ).textContent;

    if (!document.querySelector(".away-from")) {
      const priceToFreeShipping =
        extractNumberWithDollarSignAndPlus(drawerMessage);
      document
        .querySelector(".cart__message__progress__holder")
        .insertAdjacentHTML(
          "beforebegin",
          /*html*/ `
                                    
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
                                  `
        );
    }

    if (document.querySelector(".cart__message__default.is-hidden")) {
      document.querySelector(".msg.away-from").style.display = "none";
      document.querySelector(".msg.congrats").style.display = "flex";

      sessionStorage.setItem(
        "msg",
        document.querySelector(".msg.congrats").innerText.replace(/\s+/g, " ")
      );
    } else {
      document.querySelector(".away-from__number").innerText =
        extractNumberWithDollarSignAndPlus(drawerMessage);

      document.querySelector(".msg.away-from").style.display = "flex";
      document.querySelector(".msg.congrats").style.display = "none";

      sessionStorage.setItem(
        "msg",
        document.querySelector(".msg.away-from").innerText.replace(/\s+/g, " ")
      );
    }

    sessionStorage.setItem(
      "msg-progress",
      document.querySelector(".cart__message__progress").value
    );
  }

  function start() {
    const waitForBody = setInterval(() => {
      if (document.body) {
        clearInterval(waitForBody);

        document.body.insertAdjacentHTML("afterbegin", styleBase);

        // PDP
        if (location.href.includes("/products/")) {
          document.body.insertAdjacentHTML("afterbegin", stylePDP);

          const waitForCartTxt = setInterval(() => {
            if (
              document.querySelector("[data-add-to-cart-text]")?.innerText
                ?.length > 0
            ) {
              clearInterval(waitForCartTxt);

              if (
                document
                  .querySelector("[data-add-to-cart-text]")
                  .innerText.toLowerCase()
                  .includes("sold out")
              ) {
                document.querySelector("[data-add-to-cart-text]").innerText =
                  "Sold Out";
              }
            }
          }, WAIT_INTERVAL_TIMEOUT);

          //slider
          const waitForFlickity = setInterval(() => {
            if (typeof Flickity === "function") {
              clearInterval(waitForFlickity);

              if (media) {
                //reloadCells thumbnails slider
                let slider = new Flickity(
                  document.querySelector(".product-single__thumbnails"),
                  {
                    // (3)
                    contain: true,
                    pageDots: true,
                    auto: true,
                    asNavFor: ".product-single__gallery",
                  }
                );
                slider.reloadCells();
              } else {
                let slider = new Flickity(
                  document.querySelector(".product-single__media-slider"),
                  {
                    // (3)
                    contain: true,
                    pageDots: false,
                    auto: true,
                    prevNextButtons: false,
                    draggable: true,
                  }
                );

                let slider1 = new Flickity(
                  document.querySelector(".product-single__thumbnails"),
                  {
                    // (3)
                    contain: true,
                    pageDots: false,
                    auto: true,
                    prevNextButtons: false,
                    cellAlign: "left",
                    draggable: true,
                    asNavFor: ".product-single__media-slider",
                  }
                );
              }
            }
          }, WAIT_INTERVAL_TIMEOUT);

          waitForElement(".review-link a").then((el) =>
            el.addEventListener("click", () => {
              pushDataLayer([
                "exp_imp_pdp_l_fs_sar",
                "See all reviews",
                "Link",
                "First sccreen",
              ]);
            })
          );

          //qty and compatibility icons
          const waitForEl = setInterval(() => {
            if (
              document.querySelector(".selector-wrapper--qty") &&
              document.querySelector(".product__price")
            ) {
              clearInterval(waitForEl);

              const el = document.querySelector(".selector-wrapper--qty");

              el.insertAdjacentHTML(
                "afterend",
                `
                <div class="d-flex items-end">
                    ${compatibilityHTML("d-flex items-center")}
                </div>`
              );

              document.querySelector(".compatibility_block").before(el);
            }
          }, WAIT_INTERVAL_TIMEOUT);

          //delivery section (18-21)
          const waitForDelivery = setInterval(() => {
            if (
              document.querySelector(
                ".product__accordions .product__accordion__content p"
              ) &&
              document.querySelector(".product__form__wrapper") &&
              document.querySelector("form.product__form") &&
              document.querySelector(".product__submit__holder")
            ) {
              clearInterval(waitForDelivery);

              let orders = document
                .querySelector(
                  ".product__accordions .product__accordion__content p"
                )
                .innerHTML.split("on orders")[1]
                .split("+")[0];

              document.querySelector("form.product__form").insertAdjacentHTML(
                "beforeend",
                `
                  <div class="d-lg-flex product__submit__wrapper">
                    <div class="product__submit__block crs-gray">
                          <p>Free standard delivery on orders over <b>${orders}</b> 
                              <svg class="crs-tooltip" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="8" cy="8" r="7.5" stroke="#023F88"/>
                                  <path d="M9.38981 3.79906C9.38981 3.9764 9.35248 4.1444 9.27781 4.30306C9.21248 4.4524 9.11915 4.58306 8.99781 4.69506C8.88581 4.80706 8.74581 4.89573 8.57781 4.96106C8.41915 5.0264 8.25115 5.05906 8.07381 5.05906C7.70048 5.05906 7.38781 4.93773 7.13581 4.69506C6.88381 4.44306 6.75781 4.1444 6.75781 3.79906C6.75781 3.63106 6.79048 3.4724 6.85581 3.32306C6.92115 3.1644 7.01448 3.02906 7.13581 2.91706C7.25715 2.80506 7.39715 2.7164 7.55581 2.65106C7.71448 2.5764 7.88715 2.53906 8.07381 2.53906C8.25115 2.53906 8.41915 2.57173 8.57781 2.63706C8.74581 2.7024 8.88581 2.79106 8.99781 2.90306C9.11915 3.01506 9.21248 3.1504 9.27781 3.30906C9.35248 3.4584 9.38981 3.62173 9.38981 3.79906ZM6.92581 12.9971V6.02506H9.22181V12.9971H6.92581Z" fill="#023F88"/>
                              </svg>
                          </p>
                          <p>Approximate delivery date: <b>${formatDate()}</b> </p>
                    </div>
                    <div class="product__submit__amazon crs-gray">
                      <p></p>
                    </div>
                  </div>
                  ${warranty}
                  <style>
                  .crs-popup {
                      position: fixed;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100vh;
                      overflow-y: auto;
                      z-index: 999999;
                      background: rgba(27, 27, 27, 0.4);
                      padding: 10px 0;
                      display: flex;
                      opacity: 0;
                      pointer-events: none;
                      transition: all 0.2s ease;
                  }
                  .crs-popup.active {
                    opacity: 1;
                    pointer-events: auto;
                  }
                  .crs-popup .container {
                      border-radius: 8px;
                      background: var(--bg-light-blue, #E8F8FE);
                      padding: 26px 16px 24px;
                      position: relative;
                      max-width: calc(100% - 40px);
                      margin: auto;
                      transform: translateY(100px);
                      transition: all 0.2s ease;
                      max-width: 600px;
                  }
                  .crs-popup.active .container {
                      transform: translateY(0);
                  }
                  .crs-popup_close {
                      position: absolute;
                      top: 12px;
                      right: 12px;
                      width: 22px;
                      height: 22px;
                      border-radius: 50%;
                      border: 1px solid #FFF;
                      background: #023F88;
                  }
                  .crs-popup_close svg {
                      margin: auto;
                  }
                  .crs-popup h2 {
                      color: var(--font-h, #1B1B1B);
                      font-size: 24px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: 40px; 
                      margin-bottom: 6px;
                  }
                  .crs-popup .container > p {
                      color: var(--font-h, #1B1B1B);
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 22px;
                      margin: 0 0 16px;
                  }
                  .crs-popup h4 {
                      color: var(--font-h, #1B1B1B);
                      font-size: 13px;
                      font-style: normal;
                      font-weight: 600;
                      line-height: 22px; 
                      margin-bottom: 12px;
                  }
                  .crs-info {
                      border-radius: 6px;
                      border: 1px solid var(--font-h, #1B1B1B);
                      background: #FFF;
                      padding: 10px 8px;
                      position: relative;
                      margin-bottom: 20px;
                  }
                  .crs-info:after {
                      content: '';
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%,-50%);
                      width: 1px;
                      height: 17px;
                      background-color: #D9D9D9;
                  }
                  .crs-info > p {
                    color: var(--font-h, #1B1B1B);
                    width: 50%;
                    padding: 0 4.6vw;
                    font-size: 12px;
                    line-height: 22px;
                  }
                  .crs-info > p b {
                    font-weight: 600;
                  }
                  .crs-table {
                      border-radius: 6px;
                      border: 1px solid var(--font-h, #1B1B1B);
                  }
                  .crs-table_row {
                      padding: 12px 16px;
                      background-color: #fff;
                      border-top: 1px solid var(--font-h, #1B1B1B);
                      border-radius: 0 0 6px 6px;
                  }
                  .crs-table .crs-table_head {
                      border-radius: 6px 6px 0px 0px;
                      background: var(--Main-Blue, #023F88);
                  }
                  .crs-table p {
                      color: var(--font-h, #1B1B1B);
                      font-size: 12px;
                      font-style: normal;
                      font-weight: 400;
                      line-height: 20px; 
                      width: 100%;
                      padding-right: 5px;
                      margin: 0;
                  }
                  .crs-table .crs-table_head p {
                      color: #FFF;
                      font-weight: 600;
                  }
                 
                  @media screen and (min-width: 1024px) {
                    .crs-popup h2 {
                      text-align: center;
                      margin-bottom: 14px;
                    }
                    .crs-popup .container > p {
                      margin-bottom: 20px;
                    }
                    .crs-table_row {
                      padding: 11px 20px;
                    }
                    .crs-table .crs-table_head {
                      padding: 6px 20px;
                    }
                    .crs-info > p {
                      padding: 0 18px;
                      width: auto;
                      max-width: 50%;
                      margin: 0;
                    }
                    .crs-info {
                      justify-content: space-between;
                    }
                    .crs-info:after {
                      left: 52%;
                    }
                    .crs-popup .container {
                      border-radius: 20px;
                    }
                  }
              </style>
              <div class="crs-popup">
                  <div class="container">
                      <button class="crs-popup_close d-flex" type="button">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M11 1L1 11M11 11L1 1" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </button>
                      <h2>Shipping & Return Policy</h2>
                      <p>All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
                      <h4>Domestic Shipping Rates and Estimates:</h4>
                      <div class="crs-info d-flex">
                          <p>Flat rate shipping for orders <b>under $69</b> </p>
                          <p>Free shipping for orders <b>over $69</b></p>
                      </div>
                      <div class="crs-table">
                          <div class="crs-table_row crs-table_head d-flex items-center">
                              <p>SHIPPING OPTION</p>
                              <p>SHIPPING METHOD</p>
                              <p>PRICE</p>
                          </div>
                          <div class="crs-table_row d-flex items-center">
                              <p>Over $69</p>
                              <p>Standard Shipping</p>
                              <p>Free Shipping</p>
                          </div>
                          <div class="crs-table_row d-flex items-center">
                              <p>Under $69</p>
                              <p>Standard Shipping</p>
                              <p>$7.95</p>
                          </div>
                          <div class="crs-table_row d-flex items-center">
                              <p>Canada</p>
                              <p>USPS</p>
                              <p>Calculated at checkout</p>
                          </div>
                      </div>
                  </div>
              </div>`
              );

              if (document.querySelector('.variant--soldout .product__submit__add')) {
                document.querySelector('.product__submit__amazon').style.display = 'none'
              }
                 
              document
                .querySelector(".product__submit__block > p:first-child")
                .before(document.querySelector(".product__submit__holder"));
              document
                .querySelector(".product__submit__amazon > p")
                .before(document.querySelector(".crs-amzn"));

              document
                .querySelector(".crs-tooltip")
                .addEventListener("click", () => {
                  document.querySelector(".crs-popup").classList.add("active");
                });
              document
                .querySelector(".crs-popup_close")
                .addEventListener("click", () => {
                  document
                    .querySelector(".crs-popup")
                    .classList.remove("active");
                });
              document
                .querySelector(".crs-popup")
                .addEventListener("click", (e) => {
                  if (!e.target.closest('.container')) {
                    e.target.classList.remove("active");
                  }
                });
              document
                .querySelector(".product-single__media-slide")
                .insertAdjacentHTML("afterbegin", iconPrime);
            }
          }, WAIT_INTERVAL_TIMEOUT);

          //Details section (22-24)
          const waitForDetailsSection = setInterval(() => {
            if (document.querySelector(".product__description")) {
              clearInterval(waitForDetailsSection);

              document
                .querySelector(".product__description")
                .insertAdjacentHTML(
                  "afterbegin",
                  `
                    <p class="title">Details</p>`
                );
            }
          }, WAIT_INTERVAL_TIMEOUT);

          // add spend and get discount block\
          getCart().then((data) => {
            let req = /(\d{1,})(\d{2})$/;
            let total = +data["total_price"].toString().replace(req, "$1.$2");

            if (
              !(
                data.items.length < 1 && localStorage.getItem("checkoutVisited")
              ) &&
              !localStorage.getItem("hideMsg")
            ) {
              let discount = ``;
              if (total >= 0 && total <= 99.0) {
                discount = `<p>Spend <b>$99</b> and get a <b>10% discount</b></p>`;
              } else if (total > 99.0 && total <= 149.0) {
                discount = `<p>Spend <b>$149</b> and get a <b>15% discount</b></p>`;
              } else if (total > 149.0) {
                discount = `<p>Spend <b>$199</b> and get a <b>20% discount</b></p>`;
              }

              let discountHTML = `
                  <div class="discount d-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                          <circle cx="14" cy="14.25" r="14" fill="#E8F8FE"/>
                          <path d="M8.53864 8H13.3148C13.8598 8 14.3726 8.22387 14.7573 8.60765L20.399 14.2364C21.2003 15.036 21.2003 16.3472 20.399 17.1468L16.1357 21.4003C15.3343 22.1999 14.02 22.1999 13.2187 21.4003L7.57699 15.7716C7.19233 15.3878 7 14.8761 7 14.3324V9.53512C7 8.7036 7.67315 8 8.53864 8ZM10.5902 12.6054C11.1351 12.6054 11.6159 12.1576 11.6159 11.582C11.6159 11.0383 11.1351 10.5585 10.5902 10.5585C10.0132 10.5585 9.5644 11.0383 9.5644 11.582C9.5644 12.1576 10.0132 12.6054 10.5902 12.6054Z" fill="#023F88"/>
                      </svg>
                      <div>
                        ${discount}
                      </div>  
                  </div>`;

              if (!document.querySelector(".main-content .discount")) {
                if (media) {
                  waitForElement(".product__submit__wrapper").then((el) =>
                    el.insertAdjacentHTML("beforebegin", discountHTML)
                  );
                } else {
                  waitForElement(
                    ".product__block.product__price-and-badge"
                  ).then((el) =>
                    el.insertAdjacentHTML("afterend", discountHTML)
                  );
                }
              } else {
                document.querySelector(
                  ".main-content .discount div"
                ).innerHTML = discount;
              }
            }
          });

          // smth else
          waitForElement('button[aria-label="Open Form"]').then((el) => {
            el.style.bottom = "60px";
          });

          // events
          waitForElement(".product-single__thumbnails").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_vis_fs_t",
              "{{focusTime}}",
              "Visibility",
              "First sccreen Thumbnail",
            ]);
          });
          waitForElement(".manufacturer").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_fs_dfm",
              "{{focusTime}}",
              "Visibility",
              "First sccreen Direct from the manufacturer",
            ]);
          });
          waitForElement(".pack_size").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_ps_pss",
              "{{focusTime}}",
              "Visibility",
              "Pack size Pack size section",
            ]);
          });
          waitForElement(".qty_block").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_ps_1p",
              "{{focusTime}}",
              "Visibility",
              "Pack save 1 pack",
            ]);
          });
          waitForElement(".product__submit__block").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_ps_s",
              "{{focusTime}}",
              "Visibility",
              "Pack save spend",
            ]);
          });
          waitForElement(".product__submit__block").then((el) =>
            handleVisibility(el, [
              "exp_imp_pdp_v_dr_ft",
              "{{focusTime}}",
              "Visibility",
              "Delivery & Return",
            ])
          );
          waitForElement(".warranty").then((el) =>
            handleVisibility(el, [
              "exp_imp_pdp_v_365_ft",
              "{{focusTime}}",
              "Visibility",
              "365 day warranty",
            ])
          );
          waitForElement(".product__block .title + p").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_d_ft",
              "{{focusTime}}",
              "Visibility",
              "Details",
            ]);
          });
          waitForElement(".support").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_q_ft",
              "{{focusTime}}",
              "Visibility",
              "Questions",
            ]);
          });
          waitForElement(".support a").then((el) => {
            el.addEventListener("click", () => {
              pushDataLayer([
                "exp_imp_pdp_l_q_sp",
                "Support page",
                "Link",
                "Questions",
              ]);
            });
          });
          waitForElement(".icons-row").then((el) =>
            handleVisibility(el, [
              "exp_imp_pdp_v_b_ft",
              "{{focusTime}}",
              "Visibility",
              "Benefits",
            ])
          );
          waitForElement(
            ".featured-collection__container .product-grid-item"
          ).then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_ymal_ft",
              "{{focusTime}}",
              "Visibility",
              "You may also like",
            ]);
          });
          waitForElement(".related-products .product-grid-item").then((el) => {
            handleVisibility(el, [
              "exp_imp_pdp_v_rv_ft",
              "{{focusTime}}",
              "Visibility",
              "Recently viewed",
            ]);
          });
          waitForElement(".product-single__thumbnails").then((el) => {
            el.addEventListener("click", (e) => {
              if (e.target.closest(".product-single__thumbnail")) {
                pushDataLayer([
                  "exp_imp_pdp_i_fs_it",
                  `${
                    e.target.closest(".product-single__thumbnail").dataset.id
                  }`,
                  "Image",
                  "First sccreen",
                ]);
              }
            });
          });

          waitForElement(".featured-collection__container").then((el) => {
            el.addEventListener("click", (e) => {
              const target = e.target;

              if (
                target.closest(".btn--quick") ||
                target.matches(".btn--quick")
              ) {
                pushDataLayer([
                  "exp_imp_pdp_i_ymal_b",
                  "Basket",
                  "Icon",
                  "You may also like",
                ]);
              } else if (target.closest(".product-grid-item__image")) {
                pushDataLayer([
                  "exp_imp_pdp_i_ymal_pi",
                  "Product image",
                  "Image",
                  "You may also like",
                ]);
              }
            });
          });

          waitForElement(".cart-drawer .payments-cart-exp").then((el) => {
            el.addEventListener("click", (e) => {
              if (
                e.target.closest(`[role="button"]`) ||
                e.target.matches(`[role="button"]`)
              ) {
                pushDataLayer([
                  "exp_imp_pdp_b_c_sp",
                  "Shop pay",
                  "Button",
                  "Cart",
                ]);
              }
            });
          });

          waitForElement(".cart__checkout").then((el) => {
            el.addEventListener("focus", () => {
              localStorage.setItem("checkoutVisited", "true");
            });
          });

          // Function to handle style changes
          function handleStyleChange(mutationsList, observer, arr) {
            for (let mutation of mutationsList) {
              if (
                mutation.type === "attributes" &&
                mutation.attributeName === "style"
              ) {
                // Style attribute has changed
                const sliderStyle = mutation.target.getAttribute("style");
                pushDataLayer(arr);

                // Disconnect the observer after logging the style change
                observer.disconnect();
              }
            }
          }

          waitForElement(".featured-collection__container .carousel").then(
            (el) => {
              let scrolled = false;

              el.addEventListener("scroll", function () {
                if (!scrolled) {
                  pushDataLayer([
                    "exp_imp_pdp_s_ymal_h",
                    "Horisontal",
                    "Scrool",
                    "You may also like",
                  ]);
                  scrolled = true; // Set scrolled to true to prevent further logging
                }
              });
            }
          );

          waitForElement(
            ".featured-collection__container .carousel .flickity-slider"
          ).then((el) => {
            const observer = new MutationObserver((mutationsList, observer) => {
              handleStyleChange(mutationsList, observer, [
                "exp_imp_pdp_s_ymal_h",
                "Horisontal",
                "Scrool",
                "You may also like",
              ]);
            });

            // Start observing changes to the style attribute of the slider
            observer.observe(el, { attributes: true });
          });

          waitForElement(".related-products").then((el) => {
            el.addEventListener("click", (e) => {
              const target = e.target;

              if (
                target.closest(".btn--quick") ||
                target.matches(".btn--quick")
              ) {
                pushDataLayer([
                  "exp_imp_pdp_i_rv_b",
                  "Basket",
                  "Icon",
                  "Recently viewed",
                ]);
              } else if (target.closest(".product-grid-item__image")) {
                pushDataLayer([
                  "exp_imp_pdp_i_rv_pi",
                  "Product image",
                  "Image",
                  "Recently viewed",
                ]);
              }
            });
          });

          waitForElement(".related-products .carousel").then((el) => {
            let scrolled = false;

            el.addEventListener("scroll", function () {
              if (!scrolled) {
                pushDataLayer([
                  "exp_imp_pdp_s_rv_h",
                  "Horisontal",
                  "Scrool",
                  "Recently viewed",
                ]);
                scrolled = true; // Set scrolled to true to prevent further logging
              }
            });
          });

          waitForElement(".related-products .carousel .flickity-slider").then(
            (el) => {
              const observer = new MutationObserver(
                (mutationsList, observer) => {
                  handleStyleChange(mutationsList, observer, [
                    "exp_imp_pdp_s_rv_h",
                    "Horisontal",
                    "Scrool",
                    "Recently viewed",
                  ]);
                }
              );

              // Start observing changes to the style attribute of the slider
              observer.observe(el, { attributes: true });
            }
          );
        } else if (location.href == "https://mygeeni.com/") {
          waitForElement(".top-bar").then(() => {
            document.head.insertAdjacentHTML(
              "beforeend",
              `
              <style>
                .crs-banner {
                  background: #D1EBFF;
                  padding: 5px;
                  gap: 12px;
                }
                .crs-banner p {
                    margin: 0;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 22px;
                }
                .crs-banner a {
                    border-radius: 20px;
                    background: #1A99FF;
                    padding: 7px 20px;
                    color: #FFF;
                    text-align: center;
                    font-size: 10.852px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 19px;
                }
                .crs-banner a svg {
                    margin-left: 3px;
                    margin-bottom: -10px;
                }
                .promotion-row__inner--2 .promotion-row__grid {
                  display: block;
                }
                .promotion_block,
                .promotion-row__item {
                  display: block;
                  padding: 30px;
                  border-radius: 8px;
                  background: #E8F8FE;
                  margin-bottom: 20px;
                }
                #SectionPromotionRow--section-promotion-row-0 {
                  margin-bottom: 20px;
                }
                .promotion-row__item .overlay {
                  background: none;
                }
                .promotion-row__item__content {
                  border-radius: 8px;
                  background: #E8F8FE;
                }
                .promotion_block h3 {
                  color: #023F88;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 24px; 
                  margin: 0;
                }
                .promotion_block p.name {
                  color: #023F88;
                  font-size: 16.7px;
                  font-weight: 400;
                  line-height: 26.13px;
                  margin: 10px 0;
                }
                .promotion_block p:not(.name) {
                  color: #023F88;
                  font-size: 11.4px;
                  font-weight: 500;
                  line-height: 17.81px;
                  margin: 0;
                }
                .promotion_block svg {
                  width: 38px;
                  height: 38px;
                  right: 16px!important;
                  top: 11px!important;
                }
                
                @media screen and (min-width: 1024px) {
                  .promotion-row__inner--2 .promotion-row__grid {
                    display: flex;
                  }
                  .promotion-row__item {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                  }
                  .promotion_block svg {
                    position: initial!important;
                    margin-bottom: 10px;
                  }
                  .promotion_block, 
                  .promotion-row__item {
                    padding: 14px 30px 45px 30px;
                  }
                  .promotion-row__item__content {
                    padding: 0;
                  }
                  .promotion-row__item:last-child {
                    padding-bottom: 30px;
                  }
                  .promotion_block h3 {
                    font-size: 26px;
                    line-height: 32px;
                  }
                }
              </style>`
            );

            document.querySelector(".top-bar").insertAdjacentHTML(
              "afterend",
              `
              <div class="crs-banner flex-center">
                  <p>Fast, FREE delivery with Prime</p>
                  <a href="/collections/all?page=2"><span>Amazon</span>
                      <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1145_61882)">
                          <path d="M0.0697047 11.0688C-0.0157091 11.0723 -0.0995338 11.047 -0.164687 10.9975C-0.220305 10.9379 -0.246128 10.8605 -0.236196 10.7835V3.50933C-0.246128 3.43231 -0.220305 3.35494 -0.164687 3.29539C-0.0987392 3.25046 -0.0169009 3.22906 0.065732 3.23477H0.947679C1.11453 3.21979 1.2647 3.32498 1.28933 3.47368L1.37673 3.75894C1.63059 3.53893 1.93053 3.36563 2.25868 3.24903C2.59438 3.12708 2.95312 3.06397 3.31543 3.06361C4.03767 3.04222 4.72813 3.33069 5.17467 3.84095C5.66649 4.44927 5.91082 5.19059 5.86592 5.94119C5.87943 6.48604 5.76303 7.02697 5.52427 7.52796C5.32722 7.94515 5.00702 8.30637 4.59862 8.57273C4.20373 8.81449 3.73376 8.93929 3.25584 8.92931C2.93127 8.93073 2.60868 8.88259 2.30238 8.78668C2.02071 8.70181 1.7605 8.56845 1.53564 8.39444V10.7906C1.54438 10.8669 1.52055 10.9436 1.46811 11.0046C1.40017 11.0517 1.31476 11.073 1.22974 11.0652L0.0697047 11.0688ZM2.74336 7.73121C3.13586 7.75652 3.51566 7.59892 3.74846 7.31401C3.99596 6.91536 4.10799 6.46037 4.07025 6.00537C4.10839 5.5461 3.99795 5.08683 3.75243 4.68247C3.51883 4.39471 3.13507 4.23675 2.73938 4.26528C2.31946 4.26563 1.90789 4.36761 1.54756 4.56124V7.43168C1.90511 7.63137 2.31827 7.7362 2.73938 7.73477L2.74336 7.73121Z" fill="white"/>
                          <path d="M7.37678 8.80991C7.23455 8.8338 7.09749 8.74965 7.07088 8.62163C7.06492 8.59311 7.06492 8.56387 7.07088 8.53534V3.50404C7.06094 3.42702 7.08677 3.34964 7.14238 3.29009C7.20833 3.24516 7.29017 3.22377 7.3728 3.22947H8.25078C8.41763 3.2145 8.5678 3.31969 8.59243 3.46838L8.75134 4.05317C9.01235 3.77896 9.32421 3.54718 9.67302 3.36854C9.95746 3.23482 10.2737 3.16529 10.5947 3.16529H10.7655C10.8517 3.15852 10.9379 3.17991 11.0079 3.22591C11.0635 3.28546 11.0893 3.36283 11.0794 3.43986V4.35982C11.0861 4.43399 11.0623 4.50745 11.0118 4.56664C10.9455 4.61656 10.8593 4.63974 10.7735 4.63082H10.555C10.4648 4.63082 10.3512 4.63082 10.2133 4.63082C9.98368 4.6351 9.75485 4.65899 9.53 4.70214C9.29561 4.74101 9.06678 4.80198 8.84669 4.88399V8.53891C8.85304 8.61308 8.82921 8.68653 8.77915 8.74572C8.71281 8.79564 8.6266 8.81882 8.54079 8.80991H7.37678Z" fill="white"/>
                          <path d="M12.8426 2.35496C12.5716 2.36708 12.3058 2.28543 12.0997 2.12675C11.9082 1.96593 11.8053 1.73772 11.8176 1.50274C11.8041 1.26633 11.907 1.03669 12.0997 0.875164C12.5351 0.562445 13.154 0.562445 13.5894 0.875164C13.7809 1.03598 13.8838 1.26419 13.8715 1.49917C13.8838 1.73416 13.7809 1.96237 13.5894 2.12318C13.3828 2.284 13.1155 2.36708 12.8426 2.35496ZM12.2586 8.80901C12.1163 8.8329 11.9793 8.74875 11.9527 8.62073C11.9467 8.59221 11.9467 8.56297 11.9527 8.53444V3.49957C11.9427 3.42255 11.9686 3.34517 12.0242 3.28563C12.0901 3.2407 12.172 3.2193 12.2546 3.22501H13.4265C13.5116 3.21716 13.597 3.23856 13.6649 3.28563C13.7173 3.3466 13.7412 3.42326 13.7324 3.49957V8.53444C13.7392 8.60861 13.7154 8.68207 13.6649 8.74126C13.5986 8.79118 13.5124 8.81436 13.4265 8.80544L12.2586 8.80901Z" fill="white"/>
                          <path d="M15.5408 8.81948C15.3986 8.84337 15.2616 8.75922 15.2349 8.63121C15.229 8.60268 15.229 8.57345 15.2349 8.54492V3.51361C15.225 3.43659 15.2508 3.35922 15.3064 3.29967C15.3724 3.25474 15.4542 3.23334 15.5369 3.23905H16.4148C16.5817 3.22407 16.7319 3.32926 16.7565 3.47796L16.8558 3.77392C17.2173 3.55034 17.6082 3.36849 18.0198 3.23192C18.3595 3.12566 18.7166 3.07039 19.0766 3.06789C19.7027 3.01976 20.3041 3.29682 20.6259 3.78105C20.9886 3.55712 21.3827 3.3774 21.7979 3.24618C22.1642 3.13671 22.5479 3.08144 22.9341 3.08216C23.4219 3.05577 23.9003 3.21052 24.257 3.51005C24.586 3.83382 24.7552 4.2635 24.7258 4.70102V8.54849C24.7322 8.62265 24.7083 8.69611 24.6583 8.7553C24.5919 8.80522 24.5057 8.8284 24.4199 8.81948H23.2638C23.1216 8.84337 22.9846 8.75922 22.9579 8.63121C22.952 8.60268 22.952 8.57345 22.9579 8.54492V5.0362C22.9579 4.53949 22.7104 4.29095 22.215 4.29095C21.7534 4.29559 21.2985 4.39329 20.8842 4.57621V8.54849C20.8909 8.62265 20.8671 8.69611 20.8166 8.7553C20.7503 8.80522 20.6641 8.8284 20.5783 8.81948H19.4103C19.2681 8.84337 19.131 8.75922 19.1044 8.63121C19.0984 8.60268 19.0984 8.57345 19.1044 8.54492V5.0362C19.1044 4.53949 18.8569 4.29095 18.3615 4.29095C17.8943 4.29345 17.4342 4.39507 17.0187 4.58691V8.54492C17.0251 8.61909 17.0012 8.69254 16.9512 8.75173C16.8848 8.80166 16.7986 8.82483 16.7128 8.81592L15.5408 8.81948Z" fill="white"/>
                          <path d="M28.9832 8.97389C28.127 9.02417 27.286 8.7546 26.6591 8.22865C26.0859 7.63958 25.7994 6.86902 25.8646 6.08918C25.8074 5.28082 26.0974 4.48316 26.675 3.86058C27.2769 3.30289 28.1195 3.00729 28.9832 3.05115C29.622 3.01691 30.2529 3.19199 30.759 3.54322C31.1872 3.87127 31.4232 4.358 31.3986 4.86256C31.4276 5.35642 31.165 5.82781 30.7073 6.10345C30.0912 6.41937 29.3852 6.56557 28.6773 6.52421C28.276 6.52849 27.8756 6.48784 27.4855 6.40297C27.4878 6.79735 27.665 7.1746 27.9781 7.45131C28.3487 7.68736 28.8 7.79968 29.2533 7.76866C29.475 7.76866 29.6967 7.75547 29.9168 7.72944C30.2195 7.68736 30.519 7.62995 30.8146 7.55828H30.8861H30.9457C31.0836 7.55828 31.1523 7.64279 31.1523 7.81145V8.31423C31.1598 8.39945 31.1408 8.48467 31.0967 8.56026C31.0403 8.61981 30.9656 8.66296 30.8821 8.68507C30.2743 8.88582 29.6307 8.98388 28.9832 8.97389ZM28.5859 5.54006C28.8986 5.56038 29.2112 5.50119 29.4877 5.3689C29.6776 5.2523 29.7849 5.0544 29.7698 4.8483C29.7698 4.38938 29.4651 4.1601 28.856 4.1601C28.0746 4.1601 27.6233 4.59049 27.5013 5.45091C27.8561 5.51189 28.2168 5.54184 28.578 5.54006H28.5859Z" fill="white"/>
                          <path d="M28.338 14.9603C24.8578 17.2638 19.8125 18.4868 15.4703 18.4868C9.66769 18.5147 4.06216 16.5988 -0.24985 13.1132C-0.575614 12.8494 -0.285604 12.4892 0.107697 12.6925C4.89802 15.1475 10.3196 16.4369 15.8358 16.433C19.9519 16.4133 24.0236 15.6656 27.8175 14.2329C28.4214 14.0082 28.914 14.5645 28.338 14.9603Z" fill="white"/>
                          <path d="M29.8043 13.4924C29.3593 12.9825 26.8645 13.2499 25.7402 13.3712C25.3985 13.4068 25.3429 13.1429 25.6528 12.9504C27.6391 11.6952 30.9087 12.0589 31.2861 12.4797C31.6635 12.9005 31.1868 15.8351 29.2997 17.2365C29.0137 17.4504 28.7396 17.3363 28.8667 17.051C29.2918 16.0918 30.2333 13.988 29.8043 13.4924Z" fill="white"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1145_61882">
                          <rect width="31.7819" height="17.8289" fill="white" transform="translate(0.109375 0.648438)"/>
                          </clipPath>
                          </defs>
                      </svg>
                  </a>
              </div>`
            );
            const block = `
            <div class="promotion_block promotion-row__item promotion-row__item--1 text-center grid__item">
              ${iconPrime}
              <h3>Buy with Amazon Prime</h3>
              <p class="name">Fast, FREE Delivery & Returns </p>
              <p>  Directly from the manufacturer</p>
            </div>`
            waitForElement('.promotion-row__grid').then(() => {
              document.querySelector('.promotion-row__grid').insertAdjacentHTML('afterbegin', block)
            })
          });
        } else if (window.location.href.includes("/collections/all")) {
          if (!window.location.href.includes("page=2")) {
            window.location.href =
              window.location.href +
              (window.location.href.includes("?") ? "&page=2" : "?page=2");
          }

          document.head.insertAdjacentHTML(
            "beforeend",
            `
              <style>
              .collection--breadcrumbs-disabled .collection__sticky-bar {
                justify-content: space-between;
              }
                .collection__products.crs-filter-prime > .grid > .product-grid-item,
                .swatch-prime input {
                  display: none!important;
                }
                .collection__products.crs-filter-prime > .grid > .product-grid-item[data-product-prime],
                .product-grid-item[data-product-prime] .crs-product-grid-prime {
                  display: block!important;
                }

                .swatch-prime span {
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 22px;
                  transition: all 0.3s ease;
                }
                .swatch-prime-border {
                    border-radius: 30px;
                    border: 1px solid var(--font-h, #1B1B1B);
                    position: relative;
                    width: 34px;
                    height: 19px;
                    flex-shrink: 0;
                    margin-left: 8px;
                }
                .swatch-prime-circle {
                    border-radius: 13px;
                    background: #1A99FF;
                    width: 13px;
                    height: 13px;
                    flex-shrink: 0;
                    position: absolute;
                    left: 3px;
                    top: 2px;
                }
                .swatch-prime input:checked ~ .swatch-prime-border {
                    background-color: #1A99FF;
                    border-color: #1A99FF;
                }
                .swatch-prime input:checked ~ .swatch-prime-border > .swatch-prime-circle {
                    background-color: #fff;
                    left: calc(100% - 13px - 3px);
                }
                .collection__filter {
                  margin-bottom: 25px;
                }

                .collection__filters__toggle {
                  justify-content: flex-start;
                }
                @media screen and (min-width: 1024px) {
                  .swatch-prime {
                    position: absolute;
                    left: 0;
                    top: 218px;
                    z-index: 9;
                    width: 100%;
                    padding-right: 20px;
                  }
                }
              
              </style>`
          );

          const swatch = ` 
              <label class="swatch-prime d-flex item-center justify-lg-between">
                  <input type="checkbox" checked>
                  <span>Buy with Prime</span>
                  <span class="swatch-prime-border">
                      <span class="swatch-prime-circle"></span>
                  </span>
              </label> `;

          const waitprime = setInterval(() => {
            if (
              !document.querySelector(".swatch-prime") &&
              document.querySelector(".collection__filters__toggle") &&
              document.querySelector(".collection__filters-list__inner")
            ) {
              if (media) {
                document
                  .querySelector(".collection__filters__toggle")
                  .insertAdjacentHTML("afterend", swatch);
              } else {
                document
                  .querySelector(".collection__filters-list__inner")
                  .insertAdjacentHTML("afterend", swatch);
              }

              document
                .querySelector(".collection__products")
                .classList.add("crs-filter-prime");
              document
                .querySelector(".swatch-prime input")
                .addEventListener("change", (e) => {
                  if (e.target.checked) {
                    document
                      .querySelector(".collection__products")
                      .classList.add("crs-filter-prime");
                  } else {
                    document
                      .querySelector(".collection__products")
                      .classList.remove("crs-filter-prime");
                  }
                });
            }
          });
        }

        if (!location.pathname.includes("checkouts")) {
          document.head.insertAdjacentHTML(
            "beforeend",
            /*html*/ `
            <style>
                .btn--scroll-top {
                    display: none !important;
                }
                html div > div + div iframe[title]:not([class]) {
                    bottom: 70px !important;
                    z-index: 999 !important;
                }
               html .kl-teaser-VPxaD7 {
                  z-index: 900 !important;
                }
                .discount {
                    padding-bottom: 12px;
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
                .HiddenBottomBarContainer.svelte-f78rro.svelte-f78rro {
                    z-index: 999 !important;
                }
                .logo__image-link--other img.custom-logo,
                .logo__image-link--home  img.custom-logo{
                        display: block;
                        height: 100%;
                }
  
            </style>
            `
          );
          document.head.insertAdjacentHTML("beforeend", cartCSS);

          waitForElement(".cart-drawer").then((cartElement) => {
            // Create a Mutation Observer to watch for changes in the cart.
            const cartObserver = new MutationObserver(handleCartMutation);

            // Define the options for the Mutation Observer.
            const observerOptions = {
              attributes: true, // Watch for changes to the attributes of the cart.
              attributeFilter: ["class"], // Only watch for changes to the "class" attribute.
            };

            // Start observing the cart element.
            cartObserver.observe(cartElement, observerOptions);
          });
        }
      }
    }, WAIT_INTERVAL_TIMEOUT);
  }
})();
