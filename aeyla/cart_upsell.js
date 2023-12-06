console.log('%c EXP: Cart upsell (DEV: YK)', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')

const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'exp_sli_car_enh', 'variant_1')
  }
}, 1000)

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round((endShow - startShow) / 1000)
        entry.target.removeAttribute('data-startShow')
        pushDataLayer(event, timeShow, 'Visibility', location)
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}
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

;(function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/PROJECT_NAME/images'
  const svgObject = {
    cart: `<svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2503 34.8333C16.1248 34.8333 16.8337 34.1244 16.8337 33.25C16.8337 32.3755 16.1248 31.6666 15.2503 31.6666C14.3759 31.6666 13.667 32.3755 13.667 33.25C13.667 34.1244 14.3759 34.8333 15.2503 34.8333Z" fill="#2B4632" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28.4168 34.8333C29.2913 34.8333 30.0002 34.1244 30.0002 33.25C30.0002 32.3755 29.2913 31.6666 28.4168 31.6666C27.5424 31.6666 26.8335 32.3755 26.8335 33.25C26.8335 34.1244 27.5424 34.8333 28.4168 34.8333Z" fill="#2B4632" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 5H6.81818L10.7164 23.7455C10.8494 24.3901 11.2137 24.9691 11.7455 25.3811C12.2774 25.7931 12.9428 26.0121 13.6255 25.9995H27.7636C28.4463 26.0121 29.1117 25.7931 29.6436 25.3811C30.1754 24.9691 30.5398 24.3901 30.6727 23.7455L33 11.9998H8.27273" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2.03589L16 5.49999" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 1.5V5.5" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 2.03589L26 5.49999" stroke="#2B4632" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    moneyBack: `<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                <path d="M6.9422 9.70003L6.94219 9.70002C6.61516 9.82231 6.23348 10.1182 5.92724 10.5599C5.62079 11.0019 5.47852 11.4619 5.47852 11.8067V20.475C5.47852 20.8655 5.61822 21.4291 5.91208 22.0133C6.20548 22.5966 6.57613 23.0484 6.89416 23.2864L6.9422 9.70003ZM6.9422 9.70003L6.94569 9.69871L12.7633 7.50688C12.7639 7.50667 12.7645 7.50645 12.7651 7.50624C13.0302 7.40759 13.4773 7.33044 14.0031 7.33044C14.5251 7.33044 14.9819 7.40649 15.266 7.509L21.0805 9.68797L21.0815 9.68836C21.4083 9.81055 21.7896 10.1062 22.0955 10.5484C22.4014 10.9905 22.5452 11.4539 22.5452 11.8067V20.475C22.5452 20.8655 22.4055 21.4291 22.1116 22.0133C21.818 22.597 21.4471 23.049 21.1289 23.2868L16.1129 27.0313L16.1088 27.0344C15.5921 27.4228 14.8371 27.6609 14.0118 27.6609C13.1866 27.6609 12.4316 27.4228 11.9149 27.0344L11.9108 27.0314L6.89482 23.2868L6.9422 9.70003Z" fill="#2B4632" stroke="#2B4632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <mask id="path-2-inside-1_97_1939" fill="white">
                <path d="M10.5581 17.3483L12.4364 19.2266L17.4531 14.21"/>
                </mask>
                <path d="M10.5581 17.3483L12.4364 19.2266L17.4531 14.21" fill="#2B4632"/>
                <path d="M12.6794 15.227C11.5079 14.0554 9.60836 14.0554 8.43679 15.227C7.26521 16.3985 7.26521 18.298 8.43678 19.4696L12.6794 15.227ZM12.4364 19.2266L10.3151 21.3479C10.8777 21.9106 11.6408 22.2266 12.4364 22.2266C13.2321 22.2266 13.9951 21.9106 14.5578 21.3479L12.4364 19.2266ZM19.5744 16.3313C20.746 15.1597 20.746 13.2602 19.5744 12.0886C18.4029 10.9171 16.5034 10.9171 15.3318 12.0886L19.5744 16.3313ZM8.43678 19.4696L10.3151 21.3479L14.5578 17.1053L12.6794 15.227L8.43678 19.4696ZM14.5578 21.3479L19.5744 16.3313L15.3318 12.0886L10.3151 17.1053L14.5578 21.3479Z" fill="#2B4632" mask="url(#path-2-inside-1_97_1939)"/>
                </g>
                <path d="M20.2385 3.10169L14.4168 5.29503C13.0752 5.79669 11.9785 7.38336 11.9785 8.80669V17.475C11.9785 18.8517 12.8885 20.66 13.9968 21.4884L19.0135 25.2334C20.6585 26.47 23.3652 26.47 25.0102 25.2334L30.0268 21.4884C31.1352 20.66 32.0452 18.8517 32.0452 17.475V8.80669C32.0452 7.37169 30.9485 5.78503 29.6068 5.28336L23.7852 3.10169C22.7935 2.74003 21.2068 2.74003 20.2385 3.10169Z" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5581 14.3483L20.4364 16.2266L25.4531 11.21" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
    warranty: `<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
              <path d="M16.0458 6.66771L17.1064 5.60705L16.0458 6.66772C17.1509 7.77289 18.6499 8.3938 20.2129 8.3938H20.2129C21.8108 8.39376 23.1061 9.68908 23.1061 11.287C23.1061 12.85 23.727 14.349 24.8322 15.4541C25.962 16.584 25.962 18.4159 24.8322 19.5458C23.727 20.6509 23.1061 22.1499 23.1061 23.7129C23.1061 25.3108 21.8107 26.6061 20.2129 26.6061C18.6499 26.6061 17.1509 27.227 16.0458 28.3322C14.9159 29.462 13.084 29.462 11.9541 28.3322C10.849 27.227 9.34995 26.6061 7.78701 26.6061C6.18913 26.6061 4.8938 25.3107 4.8938 23.7129C4.8938 22.1499 4.27288 20.6509 3.16772 19.5458L2.10705 20.6064L3.16771 19.5458C2.03785 18.4159 2.03785 16.584 3.16771 15.4541C4.27289 14.349 4.8938 12.8499 4.8938 11.287C4.8938 9.68913 6.18916 8.3938 7.78701 8.3938C9.35001 8.3938 10.849 7.77288 11.9541 6.66771C13.084 5.53785 14.9159 5.53785 16.0458 6.66771Z" fill="#2B4632" stroke="#2B4632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.9375 17.5C19.9375 20.7792 17.2792 23.4375 14 23.4375C10.7208 23.4375 8.0625 20.7792 8.0625 17.5C8.0625 14.2208 10.7208 11.5625 14 11.5625C17.2792 11.5625 19.9375 14.2208 19.9375 17.5Z" fill="#2B4632" stroke="#2B4632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.7701 15.0348L12.8397 19.9652L10.2295 17.355" stroke="#2B4632" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <path d="M32.6061 8.28701C32.6061 9.45218 33.069 10.5696 33.8928 11.3935C35.6085 13.1091 35.6085 15.8908 33.8928 17.6064C33.069 18.4303 32.6061 19.5478 32.6061 20.7129C32.6061 23.1392 30.6391 25.1061 28.2129 25.1061C27.0477 25.1061 25.9303 25.569 25.1064 26.3928C23.3908 28.1085 20.6091 28.1085 18.8935 26.3928C18.0696 25.569 16.9521 25.1061 15.787 25.1061C13.3607 25.1061 11.3938 23.1391 11.3938 20.7129C11.3938 19.5477 10.9309 18.4303 10.1071 17.6064C8.3914 15.8908 8.3914 13.1091 10.1071 11.3935C10.9309 10.5696 11.3938 9.45212 11.3938 8.28701C11.3938 5.86069 13.3607 3.8938 15.787 3.8938C16.9522 3.8938 18.0696 3.43092 18.8935 2.60705C20.6091 0.891398 23.3908 0.891398 25.1064 2.60705C25.9303 3.43092 27.0478 3.8938 28.2129 3.8938C30.6392 3.89374 32.6061 5.86069 32.6061 8.28701Z" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 21.9375C26.1076 21.9375 29.4375 18.6076 29.4375 14.5C29.4375 10.3924 26.1076 7.0625 22 7.0625C17.8924 7.0625 14.5625 10.3924 14.5625 14.5C14.5625 18.6076 17.8924 21.9375 22 21.9375Z" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.7701 12.0348L20.8397 16.9652L18.2295 14.355" stroke="#2B4632" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15M1 15L15 1" stroke="#2B4632" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 19H13.6C14.2365 19 14.847 18.7498 15.2971 18.3044C15.7471 17.859 16 17.2549 16 16.625V9.5C16 8.87011 15.7471 8.26602 15.2971 7.82062C14.847 7.37522 14.2365 7.125 13.6 7.125H2.4C1.76348 7.125 1.15303 7.37522 0.702944 7.82062C0.252856 8.26602 0 8.87011 0 9.5V16.625C0 17.2549 0.252856 17.859 0.702944 18.3044C1.15303 18.7498 1.76348 19 2.4 19ZM9.60039 13.0625C9.60039 13.9369 8.88405 14.6458 8.00039 14.6458C7.11673 14.6458 6.40039 13.9369 6.40039 13.0625C6.40039 12.188 7.11673 11.4791 8.00039 11.4791C8.88405 11.4791 9.60039 12.188 9.60039 13.0625Z" fill="white"/>
            <path d="M12.0002 9.30208C11.788 9.30208 11.5845 9.21868 11.4345 9.07021C11.2845 8.92174 11.2002 8.72038 11.2002 8.51042V4.75C11.2002 3.91015 10.8631 3.10469 10.2629 2.51083C9.66282 1.91696 8.84889 1.58333 8.0002 1.58333C7.1515 1.58333 6.33757 1.91696 5.73745 2.51083C5.13734 3.10469 4.8002 3.91015 4.8002 4.75L4.8 4.99737C4.8 5.20733 4.71571 5.4087 4.56569 5.55716C4.41566 5.70563 4.21217 5.78904 4 5.78904C3.78783 5.78904 3.58434 5.70563 3.43431 5.55716C3.28429 5.4087 3.2 5.20733 3.2 4.99737L3.2002 4.75C3.2002 3.49022 3.70591 2.28204 4.60608 1.39124C5.50626 0.500445 6.72716 0 8.0002 0C9.27324 0 10.4941 0.500445 11.3943 1.39124C12.2945 2.28204 12.8002 3.49022 12.8002 4.75V8.51042C12.8002 8.72038 12.7159 8.92174 12.5659 9.07021C12.4159 9.21868 12.2124 9.30208 12.0002 9.30208Z" fill="white"/>
            </svg>`
  }
  // -------------------------------------
  // HTML & CSS
  // -------------------------------------

  const style = /*html*/ `
    <style>
      /* Client's elements */  

      .minicart_header {
        position: relative;
        justify-content: flex-start !important;
        padding: 8px 16px !important;
      }

      .minicart_head svg {
        position: absolute;
        right: 16px;
      }

      .minicart_head h3, .empty_cart h2, .minicart_items {
        margin: 0 !important;
        font-size: 14px !important;
        color: #2B4632 !important;
      }

      .minicart_items {
        position: relative;
      }

      .minicart_items::before {
        content: '(';
      }

      .minicart_items::after {
        content: ')';
        margin-left: -4px; /* Adjust the value as needed */
      }

      .choice_wrapper,
      .free_shipping_wrapper,
      .stock_wrapper {
        display: none !important;
      }

      .item_title {
          display: flex !important;
          flex-direction: column;
      }

      .quantity_wrapper {
        margin-top: auto !important;
      }

      .item_block .trash {
        bottom: 0 !important;
        width: 24px;
        height: 24px;
      }

      .item_block .trash svg {
        width: 100%;
        height: 100%;
      }

      .item_title h3 {
        color: #2B4632 !important;
        font-weight: 700 !important;
      }

      .product-option {
        font-size: 14px !important;
        color: #646464 !important;
      }

      .item_price span {
        font-size: 14px !important;
      }

      .item_price span.compare {
        color: #646464 !important;
        text-decoration-color: #646464 !important;
      }

      .item_price span:last-child {
        color: #2B4632 !important;
        font-weight: 600 !important;
      }

      .slide_cart_quantity {
        font-size: 14px !important;
      }

      @media screen and (max-width: 640px) {
        .minicart {
            max-width: calc(100% - 20px) !important;
        }
      }

      /* My elements */
      .shipping-crs {
        background: #E2EEE8;
        color: #2B4632;
        text-align: center;
        padding: 6px 16px;
        font-size: 14px;
        line-height: 20px;
        font-family: "Inter", "BiancoSerif", sans-serif;
      }

      .shipping-crs p {
        margin-bottom: 0;
      }

      .shipping-crs > div {
        display: flex;
        gap: 6px;
        justify-content: center;
        align-items: center;
        margin-bottom: 2px;
      }

      .shipping-crs > div:first-child {
        color: #2B4632;
        font-weight: 700;
      }

      .shipping > p {
        font-weight: 500;
      }

      .mb-0 {
        margin-bottom: 0;
      }

      .show-all {
        color: #2B4632;
        font-size: 14px;
        font-weight: 600;
        text-decoration-line: underline;
        font-family: "Inter", "BiancoSerif", sans-serif;
        margin-block: 16px 0;
      }

      /* Upsell */
      .upsell {
        font-family: "Inter", "BiancoSerif", sans-serif;
        margin-block: 16px;
      }

      .upsell p {
        margin: 0;
      }

      p.upsell__heading {
        color: #1B437E;
        font-size: 14px;
        font-weight: 700;
        line-height: 22px; /* 157.143% */
        text-transform: uppercase;
        margin-bottom: 4px;
      }

      .upsell__content {
        display: flex;
        flex-direction: row;
        gap: 10px;
        padding: 10px;
        border-radius: 6px;
        border: 1.5px solid #B0BFD4;
        background: #FFF;
      }

      .upsell__description {
          width: 100%;
      }

      .upsell__image-wrapper {
        width: 80px;
        flex-shrink: 0;
      }

      .upsell__image-wrapper img {
        border-radius: 4px;
      }

      .upsell__title,
      .upsell__text {
        color: #1B437E;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      .upsell__title {
        font-weight: 700;
      }

      .upsell__footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 2px;
      }

      .upsell__price {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .upsell__price p {
        margin-right: 8px;
        font-size: 14px;
        line-height: 20px;
      }

      .upsell__price--new {
        color: #1B437E;
        font-weight: 700;
      }

      .upsell__price--old {
        color: #646464;
        text-decoration: line-through;
        font-weight: 400;
      }

      .upsell__button {
        display: inline-block;
        padding: 6px 21px;
        border-radius: 6px;
        background: #1B437E;
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-decoration: none;
        border: none;
      }

      .choice {
        border-radius: 6px;
        background: #FCF5E6;
        padding: 8px 12px;
        margin-block: 16px;

        color: #2B4632;
        font-family: "Inter", "BiancoSerif", sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
      .minicart_inner .empty_cart, .cart_total, .minicart_inner .shipping_wrapper,
      .secure_checkout .cs, .secure_checkout .scpi {
        display: none;
      }
      .checkout_wrapper {
        padding: 8px 16px;
      }
      .checkout_wrapper .klarna_wrapper p {
        margin-bottom: 0;
        font-size: 14px;
        align-items: center;
      }
      .checkout_wrapper .secure_checkout {
        margin: 8px 0;
      }
      .checkout_wrapper .secure_checkout a.chckout {
        color: #fff;
        display: flex;
        column-gap: 8px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 700;
        background: #E67125;
        text-transform: uppercase;
        padding: 14px;
        height: auto;
      }
      .checkout_wrapper .secure_checkout a.chckout svg {
        margin-right: 0;
      }
      .checkout_wrapper .secure_checkout + p {
        margin-bottom: 0;
        font-size: 12px;
        line-height: 22px;
        font-weight: 700;
        text-align: center;
      }
      .minicart_inner {
        height: 100dvh !important;
      }
      .minicart_inner .items_wrapper {
        height: 100%;
        max-height: calc(100dvh - 207px);
      }
      .minicart_items::after {
        margin-left: 0 !important;
      }
      #cart>div:last-of-type {
        border-top: 0 !important;
      }
      #cart .upsell__heading {
        font-size: 22px;
        font-family: 'BiancoSerif', serif;
        font-weight: 700;
        line-height: 1.2;
      }
      #cart .upsell__title, #cart .upsell__price  {
        font-size: 16px;
        font-family: 'BiancoSerif', serif;
      }
      .cart-icon-klarna>svg {
        width: 3rem;
      }

      .minicart_inner .crs_mobile{
        display: none;
      }

      .minicart {
        z-index: 99999 !important;
      }

      @media (min-width: 769px) {
        #cart .upsell {
          width: 535px;
          margin: 0 auto;
          
        }
        #cart .upsell__heading {
          font-size: 26px;
          line-height: normal;
        }
        .crs_mobile {
          display: none;
        }
      }
    </style>`

  const shipping = (free, arrives) => /*html*/ `
   <div class="shipping-crs">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5C4.8675 1.5 1.5 4.8675 1.5 9C1.5 13.1325 4.8675 16.5 9 16.5C13.1325 16.5 16.5 13.1325 16.5 9C16.5 4.8675 13.1325 1.5 9 1.5ZM12.585 7.275L8.3325 11.5275C8.2275 11.6325 8.085 11.6925 7.935 11.6925C7.785 11.6925 7.6425 11.6325 7.5375 11.5275L5.415 9.405C5.1975 9.1875 5.1975 8.8275 5.415 8.61C5.6325 8.3925 5.9925 8.3925 6.21 8.61L7.935 10.335L11.79 6.48C12.0075 6.2625 12.3675 6.2625 12.585 6.48C12.8025 6.6975 12.8025 7.05 12.585 7.275Z" fill="#048201"/>
      </svg>
      <p>${free}</p>
    </div>

    <p>${arrives}</p>
  </div>
  `

  const showAllProducts = number =>
    /*html*/ `<div class="show-all"><p class="mb-0">Show all products (${number})</p></div>`

  const upsellBlock = /*html*/ `
    <div class="upsell">
      <p class="upsell__heading">Complete your ultimate<br class="crs_mobile"> sleep setup</p>
      <div class="upsell__content">
        <div class="upsell__image-wrapper">
          <img src="//www.aeyla.co.uk/cdn/shop/products/MEL2923-MelaComfort7438.webp?crop=center&height=1400&v=1677452179&width=1400" alt="product img">
        </div>
        <div class="upsell__description">
          <p class="upsell__title">Sleep Enhancer Pillow Spray - 50 ml</p>
          <p class="upsell__text">Fall asleep faster, wake up revitalized</p>
          <div class="upsell__footer">
            <div class="upsell__price">
              <p class="upsell__price--new">$14.99</p>
              <p class="upsell__price--old">$19.99</p>
            </div>
            <button class="upsell__button">Add</button>
          </div>
        </div>
    </div>
  </div>
  `
  const choiceBlock = /*html*/ `
    <div class="choice">
      <p class="mb-0"><b>Great Choice!</b> Get ready to experience deep, rejuvenating sleep...</p>
    </div>
  `

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  const go = setInterval(() => {
    if (typeof $ === 'function' && $el('.minicart_inner')) {
      clearInterval(go)
      start()
    }
  }, 100)

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

  function getCart() {
    return fetch('/cart.json').then(function (response) {
      if (!response.ok) throw new Error(`Failed to get cart. ${response.status} ${response.statusText}`)
      return response.json()
    })
  }

  function handleChangesInCart() {
    waitForElement('#shopify-section-minicart').then(targetElement => {
      const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            const addedNodes = mutation.addedNodes

            // Additional logic for handling added and removed nodes
            addedNodes.forEach(node => {
              if (node.nodeType === 1) {
                // Check if node is a valid DOM element

                if (node.matches && node.matches('.minicart_inner')) {
                  console.log('cart is changed')
                  if ($el('.minicart_inner .empty_cart')) {
                    drawEmptyCart()
                  } else {
                    addShipping()
                    addShowAllProducts()
                    addUpsellAndChoice()
                    editCheckoutBtnBlock()
                  }
                  if (window.location.href.includes('/cart')) {
                    cartPageUpsell()
                  }
                }
              }
            })
          }
        }
      })

      const config = { attributes: true, childList: true, subtree: true }

      observer.observe(targetElement, config)
    })
  }

  function addShipping() {
    const waitForEl = setInterval(() => {
      const freeShippingEl = document.querySelector('.free_shipping_wrapper p')
      const arrivalEl = document.querySelector('.arrival span')

      if (freeShippingEl && arrivalEl) {
        clearInterval(waitForEl)

        if (document.querySelector('.shipping-crs')) {
          document.querySelector('.shipping-crs').remove()
        }

        freeShippingEl.parentElement.insertAdjacentHTML(
          'beforebegin',
          shipping(freeShippingEl.innerText, arrivalEl.innerText)
        )
        checkFocusTime(
          '.shipping-crs',
          'exp_slid_cart_enha_vis_freeukshipp_foc',
          "YOUR CART You've qualified for FREE UK shipping!"
        )
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addShowAllProducts() {
    if ($el('.minicart').getBoundingClientRect().x > 30) {
      getCart().then(cart => {
        const cartItemsNumber = cart.items.length

        if (cartItemsNumber <= 1) return
        waitForElement('.items_wrapper .item_block').then(block => {
          if ($el('show-all')) return
          block.insertAdjacentHTML('afterend', showAllProducts(cartItemsNumber - 1))
          $el('.items_wrapper .show-all p').addEventListener('click', function () {
            pushDataLayer(
              'exp_slid_cart_enha_lin_undimaprod_show',
              'Show all products',
              'Link',
              'YOUR CART Under image product'
            )
            this.closest('.show-all').remove()
            $$el('.items_wrapper .item_block').forEach((el, index) => {
              el.style.display = 'flex'
            })
          })
        })
        $$el('.items_wrapper .item_block').forEach((el, index) => {
          if (index > 0) {
            el.style.display = 'none'
          }
        })
      })
    }
  }

  function drawEmptyCart() {
    const block = /*html*/ `
      <div class="crs_empty_cart">
        <style>
          .crs_empty_cart {
            padding: 16px;
            position: relative;
          }
          .crs_empty_cart * {
            font-family: Inter, sans-serif;
          }
          .crs_empty_cart .close {
            position: absolute;
            top: 16px;
            right: 16px;
            height: 14px;
            width: 14px;
            cursor: pointer;
          } 
          .crs_empty_cart .empty_header {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            color: #2B4632;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;
            column-gap: 4px;
          }
          .crs_empty_cart .empty_header span {
            font-weight: 400;
          }
          .crs_empty_cart .empty_block {
            padding: 20px;
            border-radius: 6px;
            border: 1px dashed #B0BFD4;
            margin-bottom: 14px;
          }
          .crs_empty_cart .empty_block .img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 2px solid #2B4632;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 16px;
          }
          .crs_empty_cart .empty_block .img svg {
            width: 60%;
            height: 60%;
            position: relative;
            left: -2pxpx;
          }
          .crs_empty_cart .empty_block h2 {
            color: #2B4632;
            font-size: 18px;
            font-weight: 700;
            line-height: 26px;
            margin-bottom: 6px;
            text-align: center;
          }
          .crs_empty_cart .empty_block h2 + p {
            color: #2B4632;
            font-size: 14px;
            font-weight: 500;
            line-height: 22px;
            margin-bottom: 16px;
            text-align: center;
          }
          .crs_empty_cart .empty_block a {
            display: inline-block;
            padding: 12px;
            border-radius: 6px;
            background: #2B4632;
            color: #FFF;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px;
            text-decoration: none;
            border: none;
            text-align: center;
            text-transform: uppercase;
            width: 100%;
          }
          .empty_back_guarantee, .empty_warranty {
            display: flex;
            align-items: center;
            margin-bottom: 14px;
            padding: 8px 16px;
            border-radius: 6px;
            background: #FCF5E6;
            column-gap: 12px;
          }
          .empty_back_guarantee p, .empty_warranty p {
            font-size: 14px;
            line-height: 22px;
            margin: 0;
            text-transform: uppercase;
          }
          .empty_back_guarantee p b, .empty_warranty p b {
            font-weight: 700;
            display: block;
          }
        </style>
        <div class="close">${svgObject.close}</div>
        <div class="empty_header">
          YOUR CART <span>(0 items)</span>
        </div>
        <div class="empty_block">
          <div class="img">
            ${svgObject.cart}
          </div>
          <h2>Your cart is empty</h2>
          <p>Our products are designed to break the cycle of sleep-related stress</p>
          <a href="https://www.aeyla.co.uk/collections/shop-all-aeyla">Shop all products</a>
        </div>
        <div class="empty_back_guarantee">
          ${svgObject.moneyBack}
          <p>
          SHOP CONFIDENTLY 
          <b>30-DAY MONEY BACK GUARANTEE</b>
          </p>
        </div>
        <div class="empty_warranty">
          ${svgObject.warranty}
          <p>
            <b>365-Day Warranty</b>
          </p>
        </div>  
      </div> 
    `

    $el('.minicart_inner .empty_cart').insertAdjacentHTML('afterend', block)
    $el('.crs_empty_cart .empty_block a').addEventListener('click', () => {
      pushDataLayer(
        'exp_slid_cart_enha_but_cartempty_shop',
        'Shop all products',
        'Button',
        'YOUR CART Your cart is empty'
      )
    })
    $el('.crs_empty_cart .close').addEventListener('click', () => {
      $el('.opnd').click()
    })
  }

  function drawTotalBlock() {
    const subtotal1 = $el('.cart_total .tot_val').innerText
    const subtotal2 = $el('.cart_total .stt').innerText
    const saved = $el('.cart_total .tot_val_save').innerText

    const block = /*html*/ `
      <div class="crs_cart_total">
        <style>
          .crs_cart_total {
            margin-top: 16px;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .crs_cart_total p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
          }
          .crs_cart_total .sub {
            font-size: 16px;
            line-height: 24px;
            color: #2B4632;
            font-weight: 600;
          }
          .crs_cart_total .sub span {
            font-weight: 700;
          }
          .crs_cart_total .sub span b {
            font-weight: 400;
            color: #646464;
            text-decoration: line-through;
            display: inline-block;
            margin-right: 8px;
          }
          .crs_cart_total .saved {
            font-size: 14px;
            line-height: 24px;
            color: #A84A23;
            font-weight: 700;
          }
          .crs_cart_total .ship {
            font-size: 14px;
            line-height: 24px;
            color: #2B4632;
            font-weight: 600;
          }
          .crs_cart_total .ship span {
            font-weight: 700;
          }
        </style>
        <p class="sub">Subtotal <span><b>${subtotal1}</b>${subtotal2}</span></p>
        <p class="saved">You just saved<span>${saved}</span></p>
        <p class="ship">Shipping<span>FREE</span></p>
      </div>
    `
    $el('.items_wrapper').insertAdjacentHTML('beforeend', block)
    checkFocusTime(
      '.crs_cart_total',
      'exp_slid_cart_enha_vis_blocksss_foc',
      'YOUR CART Block Subtotal You just saved Shipping'
    )
  }

  function editCheckoutBtnBlock() {
    waitForElement('.secure_checkout').then(el => {
      if (!$el('.secure_checkout + p')) {
        $el('.secure_checkout .chckout').innerHTML = `${svgObject.lock} Proceed to secure checkout`
        $el('.secure_checkout').insertAdjacentHTML('afterend', '<p>30-Day Money Back Guarantee | 365-Day Warranty</p>')
      }
      $el('.minicart_items').innerText = $el('.minicart_items').innerText.trim()
    })
  }

  function addUpsellAndChoice() {
    waitForElement('.items_wrapper').then(el => {
      let upsell = true
      $$el('.items_wrapper .item_block h3').forEach(el => {
        if (el.innerText.toLowerCase().includes('sleep enhancer pillow spray')) {
          upsell = false
        }
      })
      if (upsell) {
        if (!$el('.upsell') && !$el('.choice')) {
          el.insertAdjacentHTML('beforeend', upsellBlock)
          el.insertAdjacentHTML('beforeend', choiceBlock)

          drawTotalBlock()

          checkFocusTime(
            '.upsell',
            'exp_slid_cart_enha_vis_complultim_foc',
            'YOUR CART Complete your ultimate sleep setup'
          )

          $el('.minicart_inner .upsell__button').addEventListener('click', () => {
            addSprayToCart()
            pushDataLayer(
              'exp_slid_cart_enha_but_complultim_add',
              'Add',
              'Button',
              'YOUR CART Complete your ultimate sleep setup'
            )
          })
        }
      } else {
        if (!$el('.choice')) {
          el.insertAdjacentHTML('beforeend', choiceBlock)
          drawTotalBlock()
        }
      }
      checkFocusTime('.choice', 'exp_slid_cart_enha_vis_greatchois_foc', 'YOUR CART Great Choice!')
    })
  }

  function addSprayToCart() {
    let fd = {
      items: [
        {
          id: 44467910967582,
          quantity: 1
        }
      ]
    }
    $.ajax({
      url: '/cart/add.js',
      type: 'POST',
      data: fd,
      dataType: 'json',
      error: function (err) {
        console.log(err)
      }
    }).done(function (item) {
      $.getJSON('/cart.js', function (c) {
        $('.ic').find('.cart_count').text(c.item_count)
        $('#AddToCart').text('ADD TO CART')
        addToCartOK()
      })
    })
  }

  function globalEvents() {
    $('.minicart_inner').on('click', '.chckout', function () {
      pushDataLayer('exp_slid_cart_enha_but_yourcart_check', 'Proceed to secure checkout', 'Button', 'YOUR CART')
    })
  }

  function cartPageUpsell() {
    waitForElement('#cart a.text-lg').then(el => {
      let upsell = true

      $$el('#cart a.text-lg').forEach(el => {
        if (el.innerText.toLowerCase().includes('sleep enhancer pillow spray')) {
          upsell = false
        }
      })
      $$el('.button-no-border').forEach(el => {
        el.addEventListener('click', () => {
          window.location.reload()
        })
      })

      if (upsell && !$el('#cart .upsell')) {
        $el('#cart>div:last-of-type').insertAdjacentHTML('beforebegin', upsellBlock)

        $el('#cart .upsell__button').addEventListener('click', () => {
          addSprayToCart()
          pushDataLayer(
            'exp_slid_cart_enha_but_pagcompultim_add',
            'Add',
            'Button',
            'Shopping cart page Complete your ultimate sleep setup'
          )
        })

        checkFocusTime(
          '#cart .upsell',
          'exp_slid_cart_enha_vis_pagcompultim_foc',
          'Shopping cart page Complete your ultimate sleep setup'
        )
      }
    })
  }

  function start() {
    handleChangesInCart()
    globalEvents()

    if ($el('.minicart_inner .empty_cart')) {
      drawEmptyCart()
    } else {
      editCheckoutBtnBlock()
      addShipping()
      addShowAllProducts()
      addUpsellAndChoice()
    }

    if (window.location.href.includes('/cart')) {
      cartPageUpsell()
    }
  }
})()
