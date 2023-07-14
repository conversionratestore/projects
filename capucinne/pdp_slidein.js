console.log('initExp');
localStorage.setItem('subtotal', '-999999');

let isAddCart,
  isKlarnaClick,
  isDiscountEvent = false;

let klaviyoStep = 1;

(function () {
  /********* exp **********/
  const exp = {
    dir: 'https://flopsi69.github.io/crs/capucinne/pdp_slidein',
    observer: true,
    clarity: {
      enable: true,
      params: ['set', 'new_payments', 'variant_1'],
    },
    debug: false,
  };

  // Observer
  if (exp.observer) {
    initObserver(
      (el) => {
        if (el.ariaLabel === 'POPUP Form') {
          pushDataLayer(
            'new_payments_pp_get_50_off',
            'Visibility',
            'Popup',
            'Popup 50$ off'
          );
        }

        // if (el.classList.contains('.needsclick') && !isDiscountEvent) {
        //   console.log('ffff1');
        //   // TODO
        //   observerView(el);
        // }

        if (
          (el.closest('.needsclick') &&
            el.querySelector('svg path') &&
            el
              .closest('[component="[object Object]"]')
              ?.querySelector('svg path')
              ?.getAttribute('d') ===
              `M11.1597 18.9917L6.66651 14.4983C5.99844 13.8687 4.95494 13.8706 4.28909 14.5025C3.59908 15.1574 3.56725 16.2465 4.21784 16.9405L9.72916 23.085C10.5199 23.9286 11.862 23.9189 12.6405 23.064L25.9625 8.9336C26.5713 8.26509 26.5411 7.23449 25.8943 6.60272C25.2293 5.95322 24.1631 5.96785 23.5162 6.63534L11.1597 18.9917Z`) ||
          el
            .closest('[component="[object Object]"]')
            ?.querySelector('svg path')
            ?.getAttribute('d') ===
            `M3.60156 1.09961C1.94471 1.09961 0.601562 2.44275 0.601562 4.09961V22.4996C0.601562 24.1565 1.94471 25.4996 3.60156 25.4996H8V23.4996H3.60156C3.04928 23.4996 2.60156 23.0519 2.60156 22.4996V4.09961C2.60156 3.54732 3.04928 3.09961 3.60156 3.09961H18.8016C19.3538 3.09961 19.8016 3.54732 19.8016 4.09961V5.30078H21.8016V4.09961C21.8016 2.44276 20.4584 1.09961 18.8016 1.09961H3.60156Z`
        ) {
          sessionStorage.setItem('lav-discount', 'yes');
        }

        if (el.name == 'phone-number' && el.closest('.needsclick')) {
          el.closest('form.needsclick')
            .querySelectorAll('button[class*="go"')[1]
            .click();
        }

        if (el.closest('.needsclick')?.querySelector('[title="Recaptcha"]')) {
          pushDataLayer(
            'new_payments_pp_get_50_off_captcha_vis',
            'CAPTCHA',
            'Element visibility',
            'Popup 50$ off'
          );

          el.closest('.needsclick')
            .querySelector('[title="Recaptcha"]')
            .addEventListener('click', () => {
              pushDataLayer(
                'new_payments_pp_get_50_off_captcha_click',
                'Klick on CAPTCHA',
                'CAPTCHA',
                'Popup 50$ off'
              );
            });
        }
      },
      (el) => {
        // console.log('Remove', el);
        if (el.id === 'extend-learn-more-modal-iframe') {
          pushDataLayer(
            'new_payments_ext_pop_close',
            'Close',
            'Button',
            'Extend popup'
          );
        }
      }
    );
  }

  /*** STYLES / Start ***/
  const styles = `
    .product-block--sales-point, .grid--product-images--partial .full-bleed--mobile.small--hide {
      display: none!important;
    }
    .product-single__title, .product-block--header {
      margin-bottom: 0;
    }
    .product-block--price {
      margin-bottom: 10px;
    }

    .lav-btn {
      background: #1C1D1D;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      transition: all 0.3s ease;
      border: 1px solid #1C1D1D;
    }
    @media (min-width: 769px) {
        .lav-btn:hover {
        color: #1C1D1D;
        background-color: #fff;
        }
    }
    .lav-btn img {
      transition: 0.35s;
    }
    @media (min-width: 769px) {
        .lav-btn:hover img {
        filter: invert(106%) sepia(5%) saturate(360%) hue-rotate(131deg) brightness(92%) contrast(88%);
        }
    }
    .lav-btn img {
      margin-right: 8px;
    }

    .lav-sticky {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 20;
      background-color: #fff;
      border-top: 1px solid #E8E8E1;
      padding: 0 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .lav-sticky__info {
      display: flex;
      align-items: center;
    }
    .lav-sticky__img {
      margin-right: 12px;
      line-height: 0;
      margin-top: -1px;
    }
    .lav-sticky__img img {
      max-width: 100px;
      max-height: 100px;
    }
    .lav-sticky__title {
      color: #1C1D1D;
      font-size: 14px;
      max-width: 300px;
      font-weight: 600;
      line-height: 1;
    }
    .lav-sticky__price {
      position: relative;
      display: flex;
      padding-left: 20px;
      margin-left: 20px;
    }
    .lav-sticky__price:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 60px;
      background-color: #E8E8E1;
      event-pointer: none;
    }
    .lav-sticky__price-old {
      display: none;
      color: #565656;
      font-size: 22px;
      letter-spacing: -0.308px;
      text-decoration: line-through;
    }
    .lav-sticky__price-new {
      color: #1C1D1D;
      font-size: 22px;
      font-weight: 600;
      letter-spacing: -0.308px;
      margin: 0 8px;
    }
    .lav-sticky__price-discount {
      display: flex;
      align-items: center;
      color: #C1856F;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
    }
    .lav-sticky__price-discount img {
      margin-right: 4px;
      flex-shrink: 0;0
    }
    .lav-sticky__btn {
      max-width: 330px;
      width: 100%;
    }

    .lav-reviews {
      margin-top: 8px;
      margin-bottom: 20px;
    }
    .lav-reviews > div {
      padding-top: 0!important;
      display: flex;
      align-items: center;
    }
    .lav-reviews > div a {
      line-height: 0;
      margin-right: 8px;
    }
    .lav-reviews > div a svg {
      width: 16px;
    }
    .lav-reviews > div span {
      color: #565656;
      font-size: 14px;
      // border-bottom: 1px solid #000;
      line-height: 1;
      // transiton: 0.35s;
      // cursor: pointer;
      padding-top: 1px;
      transition: 0.35s;
    }
    .lav-reviews:hover > div span {
      // opacity: 0.5;
    }
    [data-product-price] {
      display: flex;
      flex-wrap: wrap;
    }
    .lav-discount {
      display: flex;
      align-items: center;
      color: #C1856F;
      font-size: 16px;
      line-height: 1;
      margin-left: 10px;
      transition: 0.35s;
    }
    .cart__item .lav-discount {
      font-size: 12px;
      margin-left: 0;
      display: inline-flex;
      position: relative;
      bottom: -2px;
    }
    .cart__item .lav-discount__icon img {
      width: 16px;
    }
    .lav-discount:not(.lav-discount_applied):hover {
      opacity: 0.6;
      cursor: pointer;
    }
    .lav-discount__caption {
      font-weight: 600;
      border-bottom: 1px solid #C1856F;
      margin: 0 4px;
    }
    .lav-discount_applied .lav-discount__caption {
      border-color: transparent;
    }

    .lav-point__wrap {
      position: relative;
      margin-bottom: -2px;
      padding: 16px;
      margin-top: 10px;
      background-color: #F6F5F5;
      color: #565656;
      font-size: 14px;
      line-height: 25px;
    }
    .lav-point {
      display: flex;
      align-items: center;
    }
    .lav-point span {
      font-weight: 600;
      color: #1C1D1D;
    }
    .lav-point:last-child {
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transition: all .3s ease;
      color: #1C1D1D;
      text-decoration: underline;
    }
    .lav-point:last-child:hover {
      opacity: 0.7;
    }
    .lav-point__icon {
      margin-right: 8px;
    }
    .lav-point + .lav-point {
      margin-top: 8px;
    }

    .lav-options {
      margin-bottom: 0;
    }
    .lav-earn {
      display: flex;
      align-items: center;
      margin-top: 6px;
      padding: 12px;
      background-color: #F6ECEA;
      margin-bottom: 18px;
    }
    .lav-earn__img {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      line-height: 0;
    }
    .lav-earn__img img {
      max-width: 52px;
    }
    .lav-earn__caption {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      max-width: 400px;
    }
    .lav-earn__caption span {
      font-weight: 600;
      color: #1C1D1D;
    }
    .lav-earn__caption a {
      color: #000;
      font-size: inherit;
      line-height: inherit;
      transition: 0.35s;
      white-space: nowrap;
    }
    .lav-earn__caption a:hover {
      opacity: 0.6;
    }
    .lav-earn__caption a img {
      position: relative;
      top: 2px;
    }

    .needsclick[aria-label="Open Form"] {
      opacity: 0;
      pointer-events: none;
      z-index: -1!important;
    }

    .product-single__form .add-to-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1C1D1D;
      min-height: 48px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      transition: 0.3s!important;
      transition-delay: 0s!important;
    }
    .product-single__form .add-to-cart:hover {
      transition: 0.3s!important;
      background: #fff!important;
      color: #1C1D1D!important;
      border-color: #1C1D1D!important;
      transition-delay: 0s!important;
    }
    .product-single__form .add-to-cart img {
      transition: inherit;
    }
    .product-single__form .add-to-cart:hover img {
      filter: invert(106%) sepia(5%) saturate(360%) hue-rotate(131deg) brightness(92%) contrast(88%);
    }
    .product-single__form .add-to-cart:after {
      display: none;
    }
    .product-single__form .add-to-cart img {
      margin-right: 8px;
    }

    .lav-benefits {
      display: flex;
      justify-content: center;
      background-color: #F6F5F5;
      padding: 16px;
      line-height: 1;
      text-transform: capitalize;
      color: #1C1D1D;
      margin-top: 16px;
    }
    .lav-benefits img {
      margin-right: 8px;
      flex-shrink: 0;
    }
    .lav-benefits__item {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .lav-benefits__item + .lav-benefits__item {
      border-left: 1px solid #fff;
      margin-left: 16px;
      padding-left: 16px;
    }
    .lav-benefits__slide {
      padding: 12px;
      font-size: 12px;
      color: #565656;
      margin-top: 0;
    }
    .lav-benefits__slide img {
      width: 20px;
      // margin-right: 4px;
    }
    .lav-benefits__slide .lav-benefits__item + .lav-benefits__item {
      margin-left: 8px;
      padding-left: 8px;
    }
    .drawer__footer {
      padding-top: 16px;
      padding-bottom: 12px;
    }
    [for="CartTermsDrawer"] {
      color: #565656!important;
      font-size: 12px!important;
      line-height: 18px!important;
      font-weight: 400!important;
      letter-spacing: 0!important;
    }
    [for="CartTermsDrawer"] a {
      text-decoration: underline!important;
      color: #1C1D1D!important;
      transition: 0.3s;
    }
    [for="CartTermsDrawer"] a:hover {
      opacity: 0.6;
    }
    #CartTermsDrawer {
      margin-right: 5px;
      accent-color: #1C1D1D;
    }

    .lav-extend {
      margin-top: 12px;
      background-color: #F6F5F5;
      padding: 16px;
      color: #1C1D1D;
    }
    .lav-extend__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .lav-extend__covered {
      display: flex;
      align-items: center;
      color: #000;
      font-size: 14px;
      cursor: pointer;
      transition: 0.35s;
    }
    .lav-extend__covered:hover {
      opacity: 0.5;
    }
    .lav-extend__caption {
      color: #1C1D1D;
      font-size: 14px;
    }
    .lav-extend__covered span {
      border-bottom: 1px solid #000;
      padding-top: 1px;
      line-height: 1;
    }
    .lav-extend__covered img {
      margin-left: 3px;
    }
    .lav-extend__body {
      margin-top: 12px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 12px;
    }
    .lav-extend__item {
      border: 2px solid #D4A298;
      background: #FFF;
      padding: 8px;
      text-align: center;
      cursor: pointer;
      transition: 0.35s;
    }
    .lav-extend__item.active {
      background-color: #D4A298;
    }
    .lav-extend__item:not(.active):hover {
      opacity: 0.7;
    }
    .lav-extend__item-caption {
      color: #1C1D1D;
      font-size: 12px;
      line-height: 18px;
      text-transform: capitalize;
    }
    .lav-extend__item-price {
      margin-top: 4px;
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.308px;
    }
    .tangiblee-cta-wrapper {
      position: absolute;
      top: 9px;
      right: 9px;
      z-index: 1;
      border-radius: 5px;
      padding: 6px;
      background-color: #fff;
      display: none;
    }
    .tangiblee-cta-wrapper.lav-hand {
      display: block;
    }
    .tangiblee-cta-wrapper .tangiblee-cta__icon {
      margin-top: 0;
      line-height: 0;
      width: auto;
      height: auto;
    }
    .tangiblee-cta {
      margin-top: 0;
      height: auto;
      color: #CC9286!important;
      text-align: center;
      font-size: 12px!important;
      letter-spacing: -0.308px;
    }
    .lav-shipping .collapsible-content__inner {
      padding-left: 12px!important;
      padding-right: 12px!important;
    }
    .lav-shipping__caption {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 0!important;
    }
    .lav-shipping__date {
      margin-top: 6px;
      color: #1C1D1D;
      font-size: 18px;
      font-weight: 600;
      line-height: 19px;
    }
    .lav-shipping__rush {
      display: none;
      margin-top: 16px;
      padding: 12px;
      background-color: #F6F5F5;
    }
    .lav-shipping__rush.active {
      display: block;
    }
    .lav-shipping__rush-head {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      line-height: 19px;
    }
    .lav-shipping__rush-head img {
      margin-right: 6px;
      flex-shrink: 0;
    }
    .lav-shipping__rush-body {
      color: #565656;
      font-size: 11px;
      line-height: 18px;
      margin-top: 4px;
    }
    .lav-timeline {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 16px;
    }
    .lav-timeline:before {
      content: '';
      position: absolute;
      width: 100%;
      top: 14px;
      left: 0;
      right: 0;
      background-color: #E8E8E1;
      height: 1px;
    }
    .lav-timeline__item {
      position: relative;
    }
    .lav-timeline__item:first-child {
      text-align: left;
    }
    .lav-timeline__item:nth-child(2) {
      text-align: center;
    }
    .lav-timeline__item:last-child {
      text-align: right;
    }
    .lav-timeline__item-icon {
      line-height: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      background-color: #EEDAD6;
      width: 28px;
      height: 28px;
    }
    .lav-timeline__item:nth-child(2) .lav-timeline__item-icon {
      margin-left: auto;
      margin-right: auto;
    }
    .lav-timeline__item:nth-child(3) .lav-timeline__item-icon {
      margin-left: auto;
    }
    .lav-timeline__item-date {
      color:  #1C1D1D;
      font-size: 12px;
      font-weight: 600;
      line-height: 19px;
      margin-top: 8px;
    }
    .lav-timeline__item-caption {
      margin-top: 4px;
      color: #565656;
      font-size: 12px;
      line-height: 18px;
    }

    .drawer__header {
      height: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
    }
    .drawer__scrollable {
      padding-top: 0;
      padding-bottom: 12px;
    }
    .drawer__title {
      font-size: 18px;
    }
    .drawer__close, .drawer__title {
      display: block;
      margin: 0;
    }
    .cart__item-name {
      color: #1C1D1D;
      font-size: 15px;
      font-weight: 600;
      line-height: 120%;
    }
    .drawer__close {
      width: auto;
    }
    .cart__item:first-child {
      padding-top: 16px;
    }
    .cart__item {
      padding: 16px 0;
      margin-bottom: 0;
    }
    .cart__item .cart__price:not(.cart__price--strikethrough) .money {
      color: #1C1D1D;
      font-size: 14px!important;
      font-weight: 600!important;
      line-height: 21px;
      letter-spacing: -0.308px;
    }
    .cart__item .cart__price.cart__price--strikethrough {
      margin-right: 4px;
    }
    .cart__item .cart__price.cart__price--strikethrough .money {
      color: #565656;
      font-size: 12px!important;
      line-height: 18px;
      letter-spacing: -0.308px;
    }
    .cart__item .cart__price {
      display: inline-block;
      margin-right: 10px;
    }
    .cart__item .js-qty__wrapper {
      position: relative;
      margin-top: 12px;
    }
    .cart__item-sub br {
      // display: none;
    }
    .cart__image {
      margin-right: 16px;
    }
    .cart__item--variants * {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      text-transform: capitalize;
      font-weight: 400!important;
    }
    .cart__item--variants > div + div {
      margin-top: 2px;
    }
    .lav-product__remove {
      position: absolute;
      top: 50%;
      left: calc(100% + 20px);
      transform: translateY(-50%);
      cursor: pointer;
      transition: opacity 0.2s ease-in-out;
      color: #565656;
      font-size: 12px;
      line-height: 22px;
      text-decoration-line: underline;
    }
    .lav-product__remove:hover {
      opacity: 0.6;
    }

    .lav-gift {
      order: 1;
      border-top: 1px solid #E8E8E1;
      border-bottom: 1px solid #E8E8E1!important;
      background: #F6F5F5;
      padding: 17px 30px;
      margin: 16px -30px!important;
      align-items: center;
    }
    .lav-gift .cart__item-name {
      color: #1C1D1D;
      font-size: 13px;
      font-weight: 600;
      line-height: 120%;
      margin: 0;
    }
    .lav-gift .cart__item--variants {
      margin: 8px 0;
    }
    .lav-gift .cart__item--variants + .cart__item--variants {
      display: none;
    }
    .lav-gift .cart__item--variants div {
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      text-transform: capitalize;
    }
    .lav-gift .cart__item-details {
      display: block;
    }
    .lav-gift .cart__item--variants span {
      font-weight: 400;
    }
    .lav-gift .cart__item-sub br {
      display: none;
    }
    .lav-gift .cart__price {
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.308px;
    }

    .cart__checkout-wrapper .lav-btn {
      background: #1C1D1D;
    }
    @media (min-width: 769px) {
        .cart__checkout-wrapper .lav-btn:hover {
        background: #fff!important;
        animation: none!important;
        transition-delay: 0s!important;
        }
    }
    .cart__terms {
      margin-bottom: 12px!important;
    }
    .cart__checkout-wrapper {
      margin-top: 0!important;
    }
    .lav-notes {
      display: flex;
      align-items: center;
      line-height: 1;
      cursor: pointer;
      transition: 0.35s;
      color: #000;
      font-size: 12px;
    }
    .lav-notes span {
      text-decoration: underline;
    }
    .lav-notes img {
      margin-right: 4px;
    }
    .lav-notes:hover {
      opacity: 0.6;
    }
    [for="CartNoteDrawer"] {
      color: #000!important;
      font-size: 12px!important;
      line-height: 22px!important;
      font-weight: 400!important;
      margin: 0!important;
    }
    .input-full.cart-notes {
      margin: 4px 0 0;
      min-height: 60px;
      border: 1px solid #E8E8E1;
      font-size: 12px;
      line-height: 1.3;
    }
    .lav-summary {
      margin-top: 16px;
      padding-top: 8px;
      padding-bottom: 12px;
      border-top: 1px solid #E8E8E1;
      color: #565656;
      font-size: 12px;
      line-height: 18px;
      display: flex;
      flex-flow: column;
    }
    .lav-summary__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .lav-summary__item-gift {
      order: 1;
    }
    .lav-summary__item:last-child {
      color: #1C1D1D;
      font-size: 14px;
      font-weight: 600;
      line-height: 21px;
      letter-spacing: -0.308px;
      order: 2;
    }
    .lav-summary__item + .lav-summary__item {
      margin-top: 8px;
    }
    .lav-summary__caption {
      max-width: 65%;
    }
    .lav-summary__value {
      margin-left: 12px;
      white-space: nowrap;
    }
    .lav-mob {
      display: none;
    }
    .lav-btn-price {
      position: relative;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      padding-right: 28px;
      margin-right: 24px;
    }
    @media(min-width: 769px) {
        .lav-btn:hover .lav-btn-price:after {
        background-color: #1C1D1D;
        }
    }
    .lav-btn-price:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100px;
      background-color: #fff;
      width: 4px;
      height: 4px;
      transition: 0.2s;
    }
    .cart__item-sub {
      display: block;
    }
    .drawer__footer .cart__item-row.text-center, .drawer__footer .cart__item-sub {
      display: none;
    }
    .drawer__inner .cart__items {
      display: flex;
      flex-flow: column;
    }
    .extend-offer {
      display: none;
    }
    .the4-toolkit-wishlist-action  {
      margin-bottom: 5px;
    }
    .lav-hide {
      display: none;
    }
    .lav-p-extend {
      display: flex;
      align-items: center;
      padding-top: 16px;
      //padding-bottom: 16px;
      margin-top: 16px;
      border-top: 1px solid #E8E8E1;
      //border-bottom: 1px solid #E8E8E1;
      margin-left: -116px;
      width: calc(100% + 116px);
      transition: 0.35s;
      cursor: pointer;
    }
    .lav-p-extend:hover {
      opacity: 0.6;
    }
    .lav-p-extend__icon {
      line-height: 0;
      margin-right: 12px;
    }
    .lav-p-extend__icon img {
      width: 60px;
    }
    .lav-p-extend__info {
    }
    .lav-p-extend__title {
      color: #1C1D1D;
      font-size: 13px;
      font-weight: 600;
      line-height: 120%;
    }
    .lav-p-extend__caption {
      color: #565656;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
    }
    .extend-side-cart-offer {
      display: none;
    }
    .lav-paypal {
      margin-bottom: 10px;
    }
    .lav-paypal * {
      flex-grow: 1!important;
    }
    .lav-paypal .shopify-cleanslate [data-testid="grid-cell"] {
      flex-grow: 1!important;
      background: #ffc43c!important;
    }
    .paypal-button.paypal-button-shape-rect {
      border: 0!important;
    }
    .widget-visible {
      z-index: 22!important;
    }
    .dynamic-checkout__content .shopify-cleanslate li {
        height: 52px !important;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    .dynamic-checkout__content .shopify-cleanslate li:not(:last-child) {
        display: none;
    }
    footer.site-footer {
        padding-bottom: 100px;
    }
    .lav-select_size {
      width: 100%;
      background: #1C1D1D;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      line-height: 12px;
      letter-spacing: 0.8px;
      padding: 16px;
      cursor: pointer;
    }
    
    @media(max-width: 768px) {
      .lav-paypal .shopify-cleanslate [data-testid="grid-cell"] {
        // height: 42px!important;
      }
      .lav-paypal .shopify-cleanslate [title="Checkout with PayPal"] {
        // max-height: 42px!important;
      }
      .drawer--right {
        width: 320px;
      }
      // [title="chat widget"] {
      //   bottom: 90px!important;
      // }
      .tangiblee-cta-wrapper {
        top: initial;
        right: initial;
        bottom: 9px;
        left: 15vw;
      }
      .lav-discount__icon img {
        height: 19px;
      }
      .lav-discount__caption {
        font-size: 14px;
      }
      .lav-point__wrap {
        font-size: 12px;
      }
      .lav-point__icon img {
        height: 23px;
      }
      .product__main-photos {
        margin-bottom: 40px;
      }
      .lav-benefits {
        margin-top: 8px;
        padding: 12px;
        font-size: 12px;
        line-height: 18px;
        color: #565656;
      }
      .lav-extend {
        margin-top: 8px;
        padding: 12px;
      }
      .lav-extend__caption {
        font-size: 12px;
        line-height: 18px;
        color: #565656;
        max-width: 170px;
      }
      .lav-extend__covered {
        font-size: 12px;
        margin-left: 10px;
      }
      .lav-shipping__caption {
        font-size: 11px;
      }
      .lav-shipping__date {
        margin-top: 4px;
      }
      .lav-timeline__item-caption {
        font-size: 11px;
        margin-top: 0;
      }
      .lav-shipping .lav-benefits {
        margin-top: 16px;
      }
      .lav-shipping .collapsible-content__inner {
        padding-bottom: 16px!important;
      }
      .lav-sticky__info {
        display: none;
      }
      .lav-sticky {
        padding: 12px 17px;
      }
      .lav-sticky__btn {
        max-width: 100%;
      }
      .lav-desk {
        dispalay: none;
      }
      .lav-mob {
        display: block;
      }
      .lav-benefits__slide {
        margin-top: 0;
        border-top: 1px solid #FFF;
        font-size: 11px;
        line-height: 1.35;
      }
      .lav-benefits__slide img {
        // width: 18px;
      }
      .drawer__footer {
        padding-top: 12px;
        border-top: 1px solid #E8E8E1;
        background: #F6F5F5;
      }
      .cart__checkout.lav-btn {
        min-height: 40px;
        padding: 8px;
      }
      .cart__checkout.lav-btn img {
        height: 23px;
      }
      .cart__item-name {
        font-size: 13px;
      }
      .lav-btn-price {
        padding-right: 20px;
        margin-right: 16px;
      }
      footer.site-footer {
        padding-bottom: 75px;
      }
      .dynamic-checkout__content .shopify-cleanslate li {
        height: 40px !important;
      }
    }
  `;

  function observerView(el) {
    const observerOptions = {
      // root: null,
      threshold: 0.8,
      rootMargin: '0px 0px -20% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('lav-point__wrap')) {
            isElementInViewport(entry.target, [
              'new_payments_14_day_visibility',
              '14 day free block visibility',
              'Element visibility',
              'Product Information',
            ]);
          }

          if (entry.target.classList.contains('lav-klarna')) {
            isElementInViewport(entry.target, [
              'new_payments_cart_clarna_vis',
              'Klarn block',
              'Element visibility',
              'Cart sidebar',
            ]);
          }

          // TODO
          if (entry.target.classList.contains('needsclick')) {
            // console.log('ffff');
            isElementInViewport(
              entry.target.closest('.needsclick'),
              [
                'new_payments_pp_get_50_off',
                'Visibility',
                'Popup',
                'Popup 50$ off',
              ],
              3,
              () => {
                isDiscountEvent = true;
              }
            );
          }

          if (entry.target.classList.contains('lav-earn')) {
            if (entry.target.closest('.product-single__meta')) {
              isElementInViewport(entry.target, [
                'new_payments_free_earrings_vis',
                'Free earrings banner',
                'Element visibility',
                'Product Information',
              ]);
            } else if (entry.target.closest('.drawer__inner')) {
              isElementInViewport(entry.target, [
                'new_payments_cart_free_earrings_vis',
                'Free earrings banner',
                'Element visibility',
                'Cart sidebar',
              ]);
            }
          }

          if (
            entry.target.classList.contains('lav-benefits') &&
            entry.target.closest('.product-single__form')
          ) {
            isElementInViewport(entry.target, [
              'new_payments_rush_free_shipping1',
              'Free shipping (add to cart)',
              'Element visibility',
              'Product Information',
            ]);
          }
          if (entry.target.classList.contains('lav-extend')) {
            isElementInViewport(entry.target, [
              'new_payments_extend_vis',
              'Extend block',
              'Element visibility',
              'Product Information',
            ]);
          }
          if (entry.target.classList.contains('lav-shipping__rush')) {
            isElementInViewport(entry.target, [
              'new_payments_rush_order_vis',
              'Rush order is activated',
              'Element visibility',
              'Product Information',
            ]);
          }
          if (entry.target.classList.contains('lav-summary')) {
            isElementInViewport(entry.target, [
              'new_payments_cart_subtotal_vis',
              'Subtotal block',
              'Element visibility',
              'Cart sidebar',
            ]);
          }

          if (entry.target.classList.contains('drawer__header')) {
            isElementInViewport(entry.target, [
              'new_payments_cart_free_shipping',
              'Free shipping',
              'Element visibility',
              'Cart sidebar',
            ]);
          }

          if (
            entry.target.classList.contains('lav-benefits') &&
            entry.target.closest('.lav-shipping')
          ) {
            isElementInViewport(entry.target, [
              'new_payments_rush_free_shipping2',
              'Free shipping (faq)',
              'Element visibility',
              'Product Information',
            ]);
          }
        }
      });
    }, observerOptions);

    if (el) {
      observer.observe(el);
    } else {
      for (let el of Array.from(document.querySelectorAll('.lav-watch'))) {
        observer.observe(el);
      }
    }

    function isElementInViewport(el, events, timeout = 3, cb) {
      setTimeout(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (
          rect.top + rect.height * 0.3 < windowHeight &&
          rect.bottom > rect.height * 0.3
        ) {
          observer.unobserve(el);
          if (!el.classList.contains('in-view')) {
            pushDataLayer(...events);
            el.classList.add('in-view');
            if (typeof cb === 'function') {
              cb();
            }
          }
        }
      }, timeout * 1000);
    }
  }

  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  waitFor(
    () => document.head,
    () => {
      document.head.appendChild(stylesEl);
    },
    100
  );
  /*** STYLES / End ***/

  /********* Custom Code **********/
  const getDiscount = `
    <div class='lav-discount'>
      <div class='lav-discount__icon'>
        <img src='${exp.dir}/img/discount-icon.svg' />
      </div>
      <div class='lav-discount__caption'>Get Your 50$ Off</div>
      <div class='lav-discount__arrow'>
        <img src='${exp.dir}/img/discount-arrow.svg' />
      </div>
    </div>
  `;

  const appliedDiscount = `
    <div class='lav-discount lav-discount_applied'>
      <div class='lav-discount__icon'>
        <img src='${exp.dir}/img/discount-apply.svg' />
      </div>
      <div class='lav-discount__caption'>You save 50$</div>
    </div>
  `;

  const earnStart = `
  <div class='lav-earn lav-earn-start lav-watch'>
    <div class='lav-earn__img'>
      <img class='lav-earn_moon' src='https://conversionratestore.github.io/projects/capucinne/earn.jpg' />
    </div>
    <div class='lav-earn__caption lav-earn_moon'>
      Spend <span>$1500 or more</span> and <span>get free</span> complimentary Half Moon Capucinne earrings <a href='/products/gift?variant=46796290392405'><u>Learn more</u> <img src="${exp.dir}/img/black-arrow.svg"></a>
    </div>
  </div>
  `;

  const earnGift1 = `
  <div class='lav-earn lav-earn-1500 lav-watch'>
    <div class='lav-earn__img'>
      <img class='lav-earn_moon' src='https://conversionratestore.github.io/projects/capucinne/earn.jpg' />
    </div>
    <div class='lav-earn__caption lav-earn_moon' >
      <span>You’ll receive a free</span> pair of Half Moon Capucinne <span>earrings</span> with your order&nbsp; <a href='/products/gift?variant=46796290392405'><u>Learn more</u> <img src="${exp.dir}/img/black-arrow.svg"></a>
    </div>
  </div>
  `;

  const earnGift2 = `
  <div class='lav-earn lav-earn-5000 lav-watch'>
    <div class='lav-earn__img'>
      <img class='lav-earn_chain' src='https://conversionratestore.github.io/projects/capucinne/chain.jpg'  />
    </div>
    <div class='lav-earn__caption lav-earn_chain'>
      <span>You’ll receive a free</span> pair of Half Moon Capucinne <span>bracelet</span> with your order&nbsp; <a href='/products/gift?variant=46796290392405'><u>Learn more</u> <img src="${exp.dir}/img/black-arrow.svg"></a>
    </div>
  </div>
  `;

  const productExtend = `
    <div class='lav-p-extend'>
      <div class='lav-p-extend__icon'>
        <img src='${exp.dir}/img/protect.png' />
      </div>
      <div class='lav-extend__info'>
        <div class='lav-p-extend__title'>
          Protect your jewellery 
          <img src='${exp.dir}/img/black-arrow.svg' />
        </div>
        <div class='lav-p-extend__caption'>from a defect or accidental damage</div>
      </div>
    </div>
  `;

  init();
  function init() {
    console.log('init');

    waitFor(
      () => $el('[href="#reviews"]'),
      () => {
        $el('[href="#reviews"]')
          .closest('.product-block')
          ?.classList.add('lav-reviews');

        $el('.lav-reviews > div span').innerText =
          'Over ' +
          $el('.lav-reviews > div span').innerText.match(/\d+\s\w+/)[0];

        $el('[data-product-blocks]').insertAdjacentElement(
          'afterbegin',
          $el('[href="#reviews"]').closest('.product-block')
        );
      }
    );

    // $el('.lav-reviews > div span').addEventListener('click', () => {
    //   $el('.lav-reviews > div a').click();
    // });

    const points = `
      <div class='lav-point__wrap lav-watch'>
        <div class='lav-point'>
          <img class='lav-point__icon' src='${exp.dir}/img/point1.svg' />
          <div class='lav-points__caption'><span>14 days Free</span> Returns &&nbsp;Exchange </div>
        </div>

        <div class='lav-point'>
          <img class='lav-point__icon' src='${exp.dir}/img/point2.svg' />
          <div class='lav-points__caption'><span>Free</span> worldwide insured <span>shipping</span></div>
        </div>

        <div class='lav-point'>
          <img class='lav-point__icon' src='${exp.dir}/img/point3.svg' />
          <div class='lav-points__caption'>See it live - schedule a meeting</div>
        </div>
      </div>
    `;

    const benefits = `
    <div class='lav-benefits lav-watch'>
      <div class='lav-benefits__item'>
        <img src='${exp.dir}/img/delivery.svg' />
        Free insured shipping
      </div>

      <div class='lav-benefits__item'>
        <img src='${exp.dir}/img/shield.svg' />
        14 days Free Returns &&nbsp;Exchange 
      </div>
    </div>
  `;

    waitFor(
      () => $el('.product-block--sales-point'),
      () => {
        $el('.product-block--sales-point').insertAdjacentHTML(
          'beforebegin',
          points
        );

        $el('.lav-point:last-child').addEventListener('click', () => {
          $el('.product-block--sales-point span[onclick]').click();
        });
      }
    );

    waitFor(
      () => $el('.product-single__form .add-to-cart'),
      () => {
        $el('.one-whole')
          ?.closest('.product-block')
          ?.classList.add('lav-options');

        $el('.product-single__form .add-to-cart').insertAdjacentHTML(
          'afterbegin',
          `<img src='${exp.dir}/img/bag.svg' />`
        );

        $el('.product-single__form .add-to-cart').addEventListener(
          'click',
          () => {
            if (!isAddCart) {
              pushDataLayer(
                'new_payments_add_to_cart_new',
                'Add to cart new',
                'Button',
                'Product Information'
              );
            }
          }
        );

        $el('.product-single__form .add-to-cart').insertAdjacentHTML(
          'afterend',
          benefits
        );
      }
    );

    handleShipping(benefits);
    waitFor(
      () => $el('#CartDrawer') && $el('#CartDrawer [for="CartNoteDrawer"]'),
      () => {
        handleSlideIn(benefits);
      }
    );

    waitFor(
      () => $el('.product-single__title') && item && item.ImageURL && $el('[data-add-to-cart]') && $el('.extend-offer'),
      () => {
        addSticky();
      }
    );

    // updateTotal();
    // findGift();
    // handleHand();

    setInterval(() => {
      updateData();
      handleWidgets();
    }, 500);

    handleDocumentClick();
    setTimeout(() => {
      observerView();
    }, 500);
  }

  function handleWidgets() {
    if (!window.location.pathname.includes('/products/')) return false;
    $el('.widget-visible')?.setAttribute('style', 'z-index: 22!important');

    for (let frame of $$el('.widget-visible iframe')) {
      if (frame.width === '120px') {
        frame.style.display = 'none';
      }
      if (frame.width === '64px' || frame.width === '67px') {
        if (window.innerWidth < 768) {
          frame.style.bottom = '80px';
        } else {
          frame.style.bottom = '110px';
          frame.style.right = '10px';
        }
      }

      if (frame.width === '300px') {
        // frame.style.right = '130px';
        frame.style.bottom = '100px';
      }
    }
  }

  function handleDocumentClick() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.klaviyo-close-form')) {
        pushDataLayer(
          'new_payments_pp_get_50_off_close',
          `Close. ${target
            .closest('.klaviyo-close-form')
            ?.nextElementSibling?.querySelector(
              '[data-testid="form-component"]'
            )
            ?.innerText?.trim()}`,
          'Button',
          'Popup 50$ off'
        );
      }

      if (target.closest('.needsclick')) {
        if (
          target.tagName === 'INPUT' &&
          target.placeholder === 'Enter your email address'
        ) {
          pushDataLayer(
            'new_payments_pp_get_50_off_email',
            'Email',
            'Input',
            'Popup 50$ off'
          );
        }

        if (
          target.tagName === 'BUTTON' &&
          target.innerText === 'UNLOCK MY DEAL' &&
          klaviyoStep < 3
        ) {
          pushDataLayer(
            'new_payments_pp_get_50_off_unlock',
            `Unlock my deal. ${klaviyoStep === 1 ? 'Step 1' : 'Step 2'}`,
            'Button',
            'Popup 50$ off'
          );

          if (!target.closest('.klaviyo-form')) {
            klaviyoStep++;
          }
        }

        if (
          target.tagName === 'BUTTON' &&
          (target.innerText === 'No thanks I’ll pay full price' ||
            target.innerText === `No thanks, I'll pay the full price`) &&
          klaviyoStep < 3
        ) {
          pushDataLayer(
            'new_payments_pp_get_50_off_no',
            `No, thanks. ${klaviyoStep === 1 ? 'Step 1' : 'Step 2'}`,
            'Button',
            'Popup 50$ off'
          );
        }

        if (
          target
            .closest('[component="[object Object]"]')
            ?.querySelector('svg path')
            ?.getAttribute('d') ===
          `M11.1597 18.9917L6.66651 14.4983C5.99844 13.8687 4.95494 13.8706 4.28909 14.5025C3.59908 15.1574 3.56725 16.2465 4.21784 16.9405L9.72916 23.085C10.5199 23.9286 11.862 23.9189 12.6405 23.064L25.9625 8.9336C26.5713 8.26509 26.5411 7.23449 25.8943 6.60272C25.2293 5.95322 24.1631 5.96785 23.5162 6.63534L11.1597 18.9917Z`
        ) {
          sessionStorage.setItem('lav-discount', 'yes');

          pushDataLayer(
            'new_payments_pp_get_50_off_copy',
            'Copy discount code',
            'Button',
            'Popup 50$ off'
          );
        }

        if (
          target.tagName === 'BUTTON' &&
          target.innerText === 'CONTINUE SHOPPING'
        ) {
          sessionStorage.setItem('lav-discount', 'yes');

          pushDataLayer(
            'new_payments_pp_get_50_off_continue',
            'Continue shopping',
            'Button',
            'Popup 50$ off'
          );
        }
      }
    });
  }

  function updateData() {
    if (!$el('[data-cart-subtotal]')) return false;

    const subtotal =
      parseInt(
        $el('[data-cart-subtotal]')?.getAttribute('data-cart-subtotal')
      ) / 100;

    const cart = $el('#CartDrawer');

    handleExtend();
    handleKlarna();
    waitFor(
      () => $el('.lav-sticky'),
      () => {
        handleDiscount();
      }
    );
    handleItems(cart);
    setTimeout(() => {
      // waitFor(
      //   () =>
      //     $el('.product-single__meta .tangiblee-cta-wrapper') &&
      //     $el('.product-single__meta .tangiblee-cta')?.style.display !== 'none',
      //   () => {
      handleHand();
      // }
      // );
    }, 500);
    findGift();

    if (parseInt(localStorage.getItem('subtotal')) === parseInt(subtotal))
      return false;

    updateTotal();
    setTimeout(() => {
      handleEarn(subtotal);
    }, 1000);
    setTimeout(() => {
        handleItemsSummary();
    }, 500);

    localStorage.setItem('subtotal', subtotal);
  }

  function handleKlarna() {
    if (
      $el('#CartDrawerForm [part="osm-container"]') ||
      !$el('klarna-placement div')
    )
      return false;

    const original = $el('klarna-placement div')?.shadowRoot?.querySelector(
      'div'
    );

    original.querySelector('.container').style = 'border: 0;padding: 3px 0;';
    original.querySelector('.text-wrapper').style = 'margin-left: 9px;';
    original.querySelector('.text-wrapper .text[part="osm-message"]').style =
      'color: #565656';
    original.querySelector('.text button').style = 'color: #000';

    const clone = original?.cloneNode(true);

    if (!clone) return false;

    clone.classList.add('lav-klarna');

    observerView(clone);

    $el('klarna-placement div')
      ?.shadowRoot?.querySelector('[part="osm-cta"]')
      .addEventListener('click', () => {
        if (!isKlarnaClick) {
          pushDataLayer(
            'new_payments_klarna_link',
            'Klarna learn more',
            'Link',
            'Product Information'
          );
        }

        setTimeout(() => {
          $el('klarna-osm-interstitial')
            ?.shadowRoot.querySelector(
              '#learn-more-dialog-payment_calculator-light__footer-button-wrapper'
            )
            ?.addEventListener('click', () => {
              pushDataLayer(
                'new_payments_klarna_go_it',
                'Go it',
                'Button',
                'Klarna popup'
              );
            });

          $el('klarna-osm-interstitial')
            ?.shadowRoot.querySelector(
              '#learn-more-dialog-payment_calculator-light__nav-bar__right-icon'
            )
            ?.addEventListener('click', () => {
              pushDataLayer(
                'new_payments_klarna_close',
                'Close',
                'Button',
                'Klarna popup'
              );
            });
        }, 1000);
      });

    clone.querySelector('[part="osm-cta"]').addEventListener('click', (e) => {
      e.preventDefault();
      pushDataLayer(
        'new_payments_cart_clarna_learn',
        'Klarna learn more',
        'Link',
        'Cart sidebar'
      );
      isKlarnaClick = true;
      $el('klarna-placement div')
        ?.shadowRoot?.querySelector('[part="osm-cta"]')
        .click();
      isKlarnaClick = false;
    });

    $el('.lav-summary')?.insertAdjacentElement('afterend', clone);
  }

  function handleExtend() {
    if (
      $el('.lav-extend') ||
      !$el('.extend-offer iframe')
        ?.contentWindow?.document?.querySelector('.btn-offer .term-length')
        ?.textContent.trim() ||
      !$el('.product-single__form .add-to-cart + .lav-benefits')
    )
      return false;

    const innerEl = $el('.extend-offer iframe').contentWindow.document;

    const extend = `
      <div class='lav-extend lav-watch'>
        <div class='lav-extend__head'>
          <div class='lav-extend__caption'>
            Add accident protection offered by
            <img src='${exp.dir}/img/extend.svg' />
          </div>
          <div class='lav-extend__covered'>
            <span>What is covered?</span>
            <img src='${exp.dir}/img/black-arrow.svg' />
          </div>
        </div>
        <div class='lav-extend__body'></div>
      </div>
    `;

    $el(
      '.product-single__form .add-to-cart + .lav-benefits'
    ).insertAdjacentHTML('afterend', extend);

    // console.log('testik', innerEl, innerEl.querySelectorAll('.btn-offer'));

    for (let item of innerEl.querySelectorAll('.btn-offer')) {
      const el = document.createElement('div');
      el.classList.add('lav-extend__item');

      el.innerHTML = `
        <div class='lav-extend__item-caption'>${
          item.querySelector('.term-length').textContent
        }</div>
        <div class='lav-extend__item-price'>${
          item.querySelector('.plan-price').textContent
        }</div>
      `;

      document
        .querySelector('.lav-extend__body')
        .insertAdjacentElement('beforeend', el);

      el.addEventListener('click', () => {
        item.click();

        pushDataLayer(
          'new_payments_extend_term',
          `Term of protection: ${
            item.querySelector('.term-length').textContent
          }`,
          'Button',
          'Product Information'
        );

        if (el.classList.contains('active')) {
          el.classList.remove('active');
        } else {
          $el('.lav-extend__item.active')?.classList.remove('active');
          el.classList.add('active');
        }
      });
    }

    $el('.lav-extend__covered').addEventListener('click', () => {
      pushDataLayer(
        'new_payments_extend_what_is_covered',
        'What is covered',
        'Link',
        'Product Information'
      );
      innerEl.querySelector('.info-link').click();
    });
  }

  function handleItemsSummary() {
    for (let item of $$el(
      '.lav-summary__item:not(.lav-summary__item-subtotal)'
    )) {
      item.remove();
    }

    for (let item of $$el('.cart__items .cart__item')) {
      const el = `
        <div class="lav-summary__item ${
          item.querySelector('.cart__item-name').innerText.trim() ===
          'Free Gift'
            ? 'lav-summary__item-gift'
            : ''
        }">
          <div class="lav-summary__caption">
          ${item.querySelector('.cart__item-name').innerText}
          ${
            item.querySelector('.cart__item-name').innerText.trim() ===
            'Free Gift'
              ? `(${item
                  .querySelector('.cart__item--variants')
                  .innerText.replace('Product:', '')
                  .trim()})`
              : ''
          }
          </div>
          <div class="lav-summary__value">
          ${item.querySelector('.cart__price').innerText} 
          ${
            item.querySelector('.js-qty__num')?.value > 1
              ? `(X${item.querySelector('.js-qty__num')?.value})`
              : ''
          }
      </div>
        </div>
      `;

      $el('.lav-summary').insertAdjacentHTML('afterbegin', el);
    }
  }

  function handleHand() {
    if (
      !$el('.product-single__meta .tangiblee-cta-wrapper') ||
      $el('.product-single__meta .tangiblee-cta')?.style.display === 'none'
    ) {
      if (
        $el('.product-single__meta .tangiblee-cta')?.style.display === 'none'
      ) {
        $el('.product-single__meta .tangiblee-cta-wrapper')?.classList.add(
          'lav-hide'
        );
      }
      return false;
    }

    $el('.product-single__meta .tangiblee-cta-wrapper').classList.add(
      'lav-hand'
    );

    $el('.lav-hand').addEventListener('click', () => {
      pushDataLayer(
        'new_payments_try_it_on_your_hand',
        'Try it on your hand',
        'Button',
        'Gallery'
      );
    });

    $el('.product__main-photos').insertAdjacentElement(
      'afterbegin',
      $el('.product-single__meta .tangiblee-cta-wrapper')
    );

    $el('.tangiblee-cta-wrapper .tangiblee-cta__icon').innerHTML = `
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_420_3986)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4238 3.57381C20.4238 2.47158 19.5302 1.57804 18.428 1.57804H14.7148V0L18.428 1.62302e-07C20.4018 2.48578e-07 22.0018 1.60005 22.0018 3.57381V7.28686H20.4238V3.57381Z" fill="#CC9286"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.57806 3.57381C1.57806 2.47158 2.4716 1.57804 3.57384 1.57804L7.28691 1.57805V1.62304e-07L3.57384 0C1.60006 -8.62765e-08 2.48578e-07 1.60005 1.62302e-07 3.57381L0 7.28686H1.57806V3.57381Z" fill="#CC9286"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.428 20.422C19.5302 20.422 20.4238 19.5284 20.4238 18.4262V14.7131H22.0018V18.4262C22.0018 20.4 20.4018 22 18.428 22H14.7148V20.422H18.428Z" fill="#CC9286"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.57806 18.4262C1.57806 19.5284 2.4716 20.422 3.57384 20.422H7.28691V22H3.57384C1.60006 22 -2.58829e-07 20.4 0 18.4262L4.86909e-07 14.7131H1.57806V18.4262Z" fill="#CC9286"/> <g clip-path="url(#clip1_420_3986)"> <path d="M6.42969 12.9181V7.80573C6.42969 7.78528 6.42969 7.76669 6.42969 7.74624C6.44224 7.60337 6.51071 7.47124 6.62022 7.37862C6.72972 7.28601 6.87139 7.24039 7.01436 7.25173C7.08812 7.24833 7.16177 7.2605 7.23052 7.28744C7.29927 7.31438 7.36158 7.35549 7.41339 7.40809C7.46521 7.4607 7.50538 7.52362 7.53128 7.59277C7.55717 7.66192 7.56822 7.73575 7.56371 7.80945V11.2598C7.76077 11.1398 7.9679 11.0372 8.18277 10.9531V6.10284C8.19106 5.95808 8.25442 5.82197 8.35984 5.72241C8.46525 5.62285 8.60477 5.56738 8.74978 5.56738C8.89479 5.56738 9.03431 5.62285 9.13972 5.72241C9.24512 5.82197 9.30852 5.95808 9.31679 6.10284V10.6454C9.52138 10.6116 9.72783 10.5899 9.93492 10.5804V5.68549C9.9432 5.54072 10.0066 5.4046 10.112 5.30505C10.2174 5.20549 10.3569 5.15002 10.5019 5.15002C10.6469 5.15002 10.7865 5.20549 10.8919 5.30505C10.9973 5.4046 11.0607 5.54072 11.0689 5.68549V10.612C11.2778 10.638 11.4847 10.6783 11.688 10.7328V6.39285C11.6963 6.24809 11.7597 6.11197 11.8651 6.01242C11.9705 5.91286 12.11 5.85739 12.255 5.85739C12.4 5.85739 12.5395 5.91286 12.645 6.01242C12.7504 6.11197 12.8138 6.24809 12.822 6.39285V11.6911C12.822 12.2712 12.8759 12.577 13.06 12.577C13.3677 12.577 13.7534 11.3528 14.0704 10.7096C14.3492 10.1165 14.5407 9.90181 15.0287 9.90181C15.2444 9.90181 15.5678 10.111 15.5678 10.347C15.4626 10.9005 15.2968 11.4407 15.0733 11.9579C14.7953 13.2831 14.2038 14.5224 13.3481 15.5719C12.9331 15.9979 12.4328 16.3315 11.8801 16.5512C11.3274 16.7707 10.7346 16.8713 10.1403 16.8463C7.98013 16.8463 6.42969 15.6267 6.42969 12.9181Z" fill="#CC9286"/> </g> </g> <defs> <clipPath id="clip0_420_3986"> <rect width="22" height="22" fill="white"/> </clipPath> <clipPath id="clip1_420_3986"> <rect width="11.7" height="11.7" fill="white" transform="translate(5.14844 5.15002)"/> </clipPath> </defs> </svg>
    `;

    $el('.tangiblee-cta-wrapper').classList.remove('lav-hide');

    // $el('.lav-hand').addEventListener('click', () => {
    //   $el('.tangiblee-cta-wrapper a').click();
    // });
  }

  function updateTotal() {
    let value = $el('.drawer__footer [data-subtotal]')?.innerText.trim();
    if (!value) return false;

    for (let item of $$el('.lav-cart-price')) {
      item.innerText = value;
    }
  }

  function handleDiscount() {
    if (!$el('.needsclick[aria-label="Open Form"]')) {
      for (let item of $$el('.lav-discount:not(.lav-discount_applied)')) {
        item.remove();
      }

      if (sessionStorage.getItem('lav-discount') === 'yes') {
        if (!$el('.product-block--price .lav-discount')) {
          $el('[data-product-price]').insertAdjacentHTML(
            'beforeend',
            appliedDiscount
          );
        }

        if (!$el('.lav-sticky .lav-discount')) {
          $el('.lav-sticky__price').insertAdjacentHTML(
            'beforeend',
            appliedDiscount
          );
        }
      }

      return false;
    }

    if (!$el('.product-block--price .lav-discount')) {
      $el('[data-product-price]').insertAdjacentHTML('beforeend', getDiscount);

      $el('.product-block--price .lav-discount').addEventListener(
        'click',
        () => {
          if ($el('.needsclick[aria-label="Open Form"]')) {
            pushDataLayer(
              'new_payments_pdp_get_your_50_off',
              'Get your 50$ off',
              'Link',
              'Product Information'
            );

            pushDataLayer(
              'new_payments_pp_get_50_off',
              'Visibility',
              'Popup',
              'Popup 50$ off'
            );
            $el('.needsclick[aria-label="Open Form"]').click();
          } else {
            for (let item of $$el('.lav-discount')) {
              item.remove();
            }
          }
        }
      );
    }

    if (!$el('.lav-sticky .lav-discount')) {
      $el('.lav-sticky__price').insertAdjacentHTML('beforeend', getDiscount);

      $el('.lav-sticky .lav-discount').addEventListener('click', () => {
        pushDataLayer(
          'new_payments_pp_get_50_off',
          'Visibility',
          'Popup',
          'Popup 50$ off'
        );
        $el('.needsclick[aria-label="Open Form"]').click();
      });
    }
  }

  function handleEarn(subtotal) {
    if (!$el('[data-product-blocks] .lav-earn')) {
      $el('.the4-toolkit-wishlist')?.insertAdjacentHTML(
        'beforebegin',
        earnStart
      );
    }
    const price = +document.querySelector('.product__price:not(.product__price--compare) .money').getAttribute('doubly-currency-usd') / 100
    subtotal = price
    if (subtotal >= 5000 && !$el('[data-product-blocks] .lav-earn-5000')) {
      $el('[data-product-blocks] .lav-earn')?.remove();
      $el('.the4-toolkit-wishlist')?.insertAdjacentHTML(
        'beforebegin',
        earnGift2
      );
      $el('[data-product-blocks] .lav-earn a')?.addEventListener(
        'click',
        () => {
          pushDataLayer(
            'new_payments_learn_more_brecelet',
            'Learn more (earrings)',
            'Link',
            'Product Information'
          );
        }
      );
    } else if (
      subtotal < 5000 &&
      subtotal >= 1500 &&
      !$el('[data-product-blocks] .lav-earn-1500')
    ) {
      $el('[data-product-blocks] .lav-earn')?.remove();
      $el('.the4-toolkit-wishlist')?.insertAdjacentHTML(
        'beforebegin',
        earnGift1
      );
      $el('[data-product-blocks] .lav-earn a')?.addEventListener(
        'click',
        () => {
          pushDataLayer(
            'new_payments_learn_more_earrings',
            'Learn more (earrings)',
            'Link',
            'Product Information'
          );
        }
      );
    } else if (
      subtotal < 1500 &&
      !$el('[data-product-blocks] .lav-earn-start')
    ) {
      $el('[data-product-blocks] .lav-earn')?.remove();
      $el('.the4-toolkit-wishlist')?.insertAdjacentHTML(
        'beforebegin',
        earnStart
      );
    }
  }

  function handleShipping(benefits) {
    const el = Array.from($$el('.product-block--tab')).find((item) => {
      return item
        .querySelector('.label')
        .innerText.includes('Shipping and Production');
    });

    if (!el) {
      setTimeout(() => {
        handleShipping();
      }, 1000);
      return false;
    }

    el.classList.add('lav-shipping');

    el.querySelector('.label').innerHTML = el
      .querySelector('.label')
      .innerHTML.replace(
        'Shipping and Production',
        'Shipping, returns and exechnges'
      );

    el.querySelector('.collapsible-content__inner').classList.remove('rte');

    const options = { day: '2-digit', month: 'short' };
    const date = new Date();
    const currentDate = date.toLocaleString('en-US', options);
    const dateAfter8Weeks = new Date(
      date.getTime() + 8 * 7 * 24 * 60 * 60 * 1000
    ).toLocaleString('en-US', options);
    const dateAfter9Weeks = new Date(
      date.getTime() + 9 * 7 * 24 * 60 * 60 * 1000
    ).toLocaleString('en-US', options);

    const deliveryFrom = new Date(
      date.getTime() + (8 * 7 + 5) * 24 * 60 * 60 * 1000
    ).toLocaleString('en-US', options);
    const deliferyAfter = new Date(
      date.getTime() + (9 * 7 + 5) * 24 * 60 * 60 * 1000
    ).toLocaleString('en-US', options);

    el.querySelector('.collapsible-content__inner').innerHTML = `
        <div class='lav-shipping__caption'>Estimated arrival</div>
        <div class='lav-shipping__date'>${deliveryFrom}-${deliferyAfter}</div>

        <div class='lav-shipping__rush lav-watch'>
          <div class='lav-shipping__rush-head'>
            <img src='${exp.dir}/img/rush.svg' />
            Rush order is activated!
          </div>
          <div class='lav-shipping__rush-body'>
            Your product will arrive much faster.
          </div>
        </div>

        <div class='lav-timeline'>
          <div class='lav-timeline__item'>
            <div class='lav-timeline__item-icon'>
              <img src='${exp.dir}/img/shipping1.svg' />
            </div>
            <div class='lav-timeline__item-date'>${currentDate}</div>
            <div class='lav-timeline__item-caption'>Order placed</div>
          </div>

          <div class='lav-timeline__item'>
            <div class='lav-timeline__item-icon'>
              <img src='${exp.dir}/img/shipping2.svg' />
            </div>
            <div class='lav-timeline__item-date'>${dateAfter8Weeks}-${dateAfter9Weeks}</div>
            <div class='lav-timeline__item-caption'>Order dispatches</div>
          </div>

          <div class='lav-timeline__item'>
            <div class='lav-timeline__item-icon'>
              <img src='${exp.dir}/img/shipping3.svg' />
            </div>
            <div class='lav-timeline__item-date'>${deliveryFrom}-${deliferyAfter}</div>
            <div class='lav-timeline__item-caption'>Delivered!</div>
          </div>
        </div>

        ${benefits}
    `;

    $el('[id="switch-label-rush"]')?.addEventListener('change', () => {
      if ($el('[id="switch-label-rush"]').checked) {
        $el('.lav-shipping__rush').classList.add('active');
      } else {
        $el('.lav-shipping__rush').classList.remove('active');
      }

      $el('.lav-shipping button').click();
      $el('.lav-shipping button').click();
    });
  }

  function addSticky() {
    const el = `
      <div class='lav-sticky'>
        <div class='lav-sticky__info'>
          <div class='lav-sticky__img'>
            <img src='${item.ImageURL}' />
          </div>
          <div class='lav-sticky__title'>
            ${$el('.product-single__title').innerText}
          </div>
          <div class='lav-sticky__price'>
            <div class='lav-sticky__price-old'>$2,110.00</div>
            <div class='lav-sticky__price-new lav-product-price'></div>
          </div>
        </div>

        <button class='lav-sticky__btn lav-btn'>
          <img src='${exp.dir}/img/bag.svg' />
          <span class='lav-product-price lav-btn-price lav-mob'></span>
          <span class='lav-btn-caption'>Select size</span>
        </button>
      </div>
    `;

    $el('body').insertAdjacentHTML('beforeend', el);
    $el('.lav-sticky__btn .lav-product-price').style.display = 'none';
    $el('.lav-sticky__btn img').style.display = 'none';

    let activated = false;

    if($el('[name="properties[Ring size]"]')) {
      $el('[name="properties[Ring size]"]').insertAdjacentHTML('afterbegin', '<option value="Select size" selected>Select size</option>');
      $el('.extend-offer').insertAdjacentHTML('afterend', '<div class="lav-select_size">Select size</div>')
      $el('[data-add-to-cart]').style.display = 'none';

      $el('[name="properties[Ring size]"]').addEventListener('change', function(e){
        if(e.target.value !== 'Select size') {
          activated = true;
          $el('.lav-sticky__btn .lav-product-price').style.display = 'block';
          $el('.lav-sticky__btn img').style.display = 'block';
          $el('.lav-sticky__btn .lav-btn-caption').innerText = 'Add to cart';
          $el('[data-add-to-cart]').style.display = 'flex';
          $el('.lav-select_size').style.display = 'none';

        } else {
          activated = false;
          $el('.lav-sticky__btn .lav-product-price').style.display = 'none';
          $el('.lav-sticky__btn img').style.display = 'none';
          $el('.lav-sticky__btn .lav-btn-caption').innerText = 'Select size';
          $el('[data-add-to-cart]').style.display = 'none';
          $el('.lav-select_size').style.display = 'flex';
        }
      })

    } else {
      activated = true;
      $el('.lav-sticky__btn .lav-product-price').style.display = 'block';
      $el('.lav-sticky__btn img').style.display = 'block';
      $el('.lav-sticky__btn .lav-btn-caption').innerText = 'Add to cart';
    }


    $el('.lav-select_size').addEventListener('click', () => {
            pushDataLayer(
              'new_payments_select_size',
              'Select size',
              'Button',
              'Add product section'
            );
            const el = $el('.variant-wrapper');
            const offset = el.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
    })



    $el('.lav-sticky__btn').addEventListener('click', () => {
        if (activated) {
            pushDataLayer(
                'new_payments_sticky_add_to_cart',
                'Sticky add to cart',
                'Button',
                'Sticky section'
            );
            isAddCart = true;
            $el('button.add-to-cart').click();
            setTimeout(() => {
                isAddCart = false;
            }, 200);
        } else {
            pushDataLayer(
              'new_payments_sticky_select_size',
              'Sticky select size',
              'Button',
              'Sticky section'
            );
            const el = $el('.variant-wrapper');
            const offset = el.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        }
    });

    waitFor(
      () => $el('.product__price .money')?.innerText,
      () => {
        for (let spot of $$el('.lav-product-price')) {
          spot.innerText = $el('.product__price .money').innerText.trim();
        }
      }
    );

    const obs = new MutationObserver((muts) => {
        for (let mut of muts) {
            console.log(mut)
            if(mut.target.classList.contains('money')) {
                $el('.lav-sticky__btn .lav-product-price').innerText = mut.target.innerText.trim();
            }
        }
    })
    obs.observe($el('.product__price:not(.product__price--compare)'), {
        childList: true,
        subtree: true,
        characterData: true,
    });
  }

  function handleSlideIn(benefits) {
    const el = $el('#CartDrawer');

    const summary = `
      <div class='lav-notes'>
        <img src='${exp.dir}/img/notes.svg' />
        <span class='lav-notes__caption'>Leave order notes</span>
      </div>

      <div class='lav-summary lav-watch'>
        <div class='lav-summary__item lav-summary__item-subtotal'>
          <div class='lav-summary__caption'>Subtotal</div>
          <div class='lav-summary__value lav-cart-price'></div>
        </div>
      </div>
    `;

    $el('[for="CartNoteDrawer"]', el).style.display = 'none';
    $el('[for="CartNoteDrawer"]', el).innerText = 'Order notes:';
    $el('.input-full.cart-notes', el).style.display = 'none';

    $el('.cart-notes', el).insertAdjacentHTML('afterend', summary);
    $el('.lav-notes', el).addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      pushDataLayer(
        'new_payments_cart_leave_order_notes',
        'Leave order notes',
        'Link',
        'Cart sidebar'
      );
      $el('.lav-notes', el).remove();
      $el('[for="CartNoteDrawer"]', el).style.display = 'block';
      $el('.input-full.cart-notes', el).style.display = 'block';
    });

    $el('.drawer__inner', el).insertAdjacentHTML('beforeend', benefits);
    $el('.lav-benefits', el).classList.add('lav-benefits__slide');
    $el('.drawer__header', el).classList.add('lav-watch');

    $el('[for="CartTermsDrawer"] a', el).innerText = 'Terms and Conditions';

    $el('.cart__checkout-wrapper button', el).addEventListener('click', () => {
      pushDataLayer(
        'new_payments_cart_checkout',
        'Checkout',
        'Button',
        'Cart sidebar'
      );
    });

    $el('.cart__checkout-wrapper button', el).innerHTML = `
      <img src='${exp.dir}/img/bag.svg' />
      <span class='lav-btn-price lav-cart-price'></span>
      <span class='lav-btn-caption'>CHECK OUT</span>
    `;
    $el('.cart__checkout-wrapper button', el).classList.add('lav-btn');

    if ($el('.lav-paypal')) {
      $el('.lav-paypal').style.display = 'flex';
      if ($el('.lav-paypal [data-testid="grid-cell"]')) {
        $el('.lav-paypal [data-testid="grid-cell"]').style.flexGrow =
          '1!important';
      } else {
        setTimeout(() => {
          if ($el('.lav-paypal [data-testid="grid-cell"]')) {
            $el('.lav-paypal [data-testid="grid-cell"]').style.flexGrow =
              '1!important';
          }
        }, 1500);
      }

      $el('.lav-paypal').addEventListener('click', () => {
        pushDataLayer(
          'new_payments_cart_paypal',
          'PayPal',
          'Button',
          'Cart sidebar'
        );
      });
    }
  }

  function handleItems(el) {
    Array.from($$el('.cart__item', el)).forEach((pr) => {
      if (
        $el('.needsclick[aria-label="Open Form"]') &&
        !pr.querySelector('.lav-discount') &&
        !pr
          .querySelector('.cart__item-name')
          .innerText.toLowerCase()
          .includes('gift') &&
        !pr
          .querySelector('.cart__item-name')
          .innerText.toLowerCase()
          .includes('extend protection')
      ) {
        
        if(!pr.querySelector('.cart__item-name').innerText.toLowerCase().includes('engraving') && 
        !pr.querySelector('.cart__item-name').innerText.toLowerCase().includes('rush')) {
            pr.querySelector('.cart__price').insertAdjacentHTML(
            'afterend',
            getDiscount
            );
        }

        pr.querySelector('.lav-discount')?.addEventListener(
          'click',
          function (e) {
            if ($el('.needsclick[aria-label="Open Form"]')) {
              pushDataLayer(
                'new_payments_cart_get_your_50_off',
                'Get your 50$ off',
                'Link',
                'Cart sidebar'
              );

              pushDataLayer(
                'new_payments_pp_get_50_off',
                'Visibility',
                'Popup',
                'Popup 50$ off'
              );
              $el('.needsclick[aria-label="Open Form"]').click();
            } else {
              for (let item of $$el('.lav-discount')) {
                item.remove();
              }
            }
          }
        );
      }

      if (
        !$el('.needsclick[aria-label="Open Form"]') &&
        sessionStorage.getItem('lav-discount') === 'yes' &&
        !pr.querySelector('.lav-discount.lav-discount_applied') &&
        !pr
          .querySelector('.cart__item-name')
          .innerText.toLowerCase()
          .includes('gift') &&
        !pr
          .querySelector('.cart__item-name')
          .innerText.toLowerCase()
          .includes('extend protection')
      ) {
        pr.querySelector('.cart__price').insertAdjacentHTML(
          'afterend',
          appliedDiscount
        );
      }

      if (
        !pr.querySelector('.extend-simple-offer iframe') &&
        pr.querySelector('.lav-p-extend')
      ) {
        pr.querySelector('.lav-p-extend').remove();
      }

      if (
        pr.querySelector('.extend-simple-offer iframe') &&
        !pr.querySelector('.lav-p-extend')
      ) {
        pr.querySelector('.cart__item-details').insertAdjacentHTML(
          'beforeend',
          productExtend
        );

        pr.querySelector('.lav-p-extend').addEventListener(
          'click',
          function () {
            pushDataLayer(
              'new_payments_cart_protect_your_gewellery',
              'Protect your gewellery',
              'Link',
              'Cart sidebar'
            );
            pr.querySelector('.extend-simple-offer iframe')
              .contentDocument.querySelector('button')
              .click();
          }
        );
      }

      if (
        !pr.querySelector('.js-qty__wrapper') ||
        pr.querySelector('.lav-product__remove')
      ) {
        return false;
      }

      pr.querySelector('.js-qty__wrapper').insertAdjacentHTML(
        'beforeend',
        `<div class='lav-product__remove'>Remove</div>`
      );

      pr.querySelector('.lav-product__remove').addEventListener(
        'click',
        function (e) {
          if (pr.querySelector('.js-qty__num')) {
            pushDataLayer(
              'new_payments_cart_remove',
              'Remove',
              'Link',
              'Cart sidebar'
            );
            pr.querySelector('.js-qty__num').value = 0;
            pr.querySelector('.js-qty__num').dispatchEvent(new Event('change'));
          }
        }
      );
    });
  }

  function findGift() {
    const el = $el('#CartDrawer');

    let gift = Array.from($$el('.cart__item', el)).find((pr) => {
      return pr.querySelector('.cart__item-name').innerText.trim() == 'Gift';
    });

    if (gift) {
      gift.classList.add('lav-gift');
      // gift.querySelector('.cart__image').innerHTML = `
      //   <img src='${exp.dir}/img/gift.png' />
      // `;
      gift.querySelector('.cart__item-name').innerText = 'Free Gift';
      if(gift.querySelector('.cart__item--variants>div').innerHTML.toLowerCase().includes('earrings')) {
        gift.querySelector('.cart__item--variants>div').innerHTML = '<span>Product:</span> Half moon Capucinne earrings';
      } else {
        gift.querySelector('.cart__item--variants>div').innerHTML = '<span>Product:</span>  Half moon Capucinne bracelet';
      }
      
      gift.querySelector('.cart__price').innerText = '$0.00';
      if ($el('.drawer__scrollable .lav-earn')) {
        $el('.drawer__scrollable .lav-earn').remove();
      }
    } else if (!$el('.drawer__scrollable .lav-earn') && !$el('.lav-gift')) {
      $el('.drawer__scrollable [for="CartNoteDrawer"]')
        .closest('div')
        .insertAdjacentHTML('afterbegin', earnStart);
    }
  }

  // *** Utils *** //
  // Waiting for loading by condition
  function waitFor(condition, cb, ms = 1000) {
    if (condition()) {
      if (typeof cb == 'function') cb();
      return;
    }

    let interval = setInterval(function () {
      if (condition()) {
        clearInterval(interval);
        if (typeof cb == 'function') cb();
      }
    }, ms);
  }

  // Alalytic 4
  function pushDataLayer(name = '', desc = '', type = '', loc = '') {
    try {
      var objData = {
        event: 'event-to-ga4',
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      };
      console.log('eventFire', objData);
      if (!exp.debug) {
        dataLayer.push(objData);
      }
    } catch (e) {
      console.log('Event Error:', e);
    }
  }

  // Mutation Observer
  function initObserver(cb, removedCb) {
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          cb(node);
        }

        for (let node of mutation.removedNodes) {
          if (!(node instanceof HTMLElement)) continue;

          removedCb(node);
        }
      }
    });

    waitFor(
      () => document.body,
      () => {
        observer.observe(document.body, { childList: true, subtree: true });
      },
      100
    );
  }

  //Clarity
  if (!exp.debug && exp.clarity.enable) {
    waitFor(
      () => typeof clarity == 'function',
      () => {
        clarity(...exp.clarity.params);
      }
    );
  }

  function $el(selector, context = document) {
    return context.querySelector(selector);
  }

  function $$el(selector, context = document) {
    return context.querySelectorAll(selector);
  }
})();
