let startFuncShopPay = setInterval(() => {
  if (document) {
    clearInterval(startFuncShopPay);
    const settings = {
      observerCart: true,
    };

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

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

    let shopPayStyle = /*html */ `
    <style>
.slider.slider--mobile {
  margin: 0 !important;
}
.cart_icon_btn {
  filter: unset !important;
}
/** /products/*/
.cPrice {
  display: none !important;
}
.new_txt_old_price {
  color: #616267;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  text-decoration: line-through;
  text-transform: uppercase;
  vertical-align: -webkit-baseline-middle;
}
.product .price .badge,
.product .price__container {
  margin: 0 !important;
}
.price--large .price-item.price-item--sale.price-item--last,
.price--large .badge.price__badge-sale {
  color: #000;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 24px !important;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 !important;
}
.price--large .badge.price__badge-sale {
  padding: 0 0 0 23px !important;
}
.price--large .badge.price__badge-sale svg {
  top: 50% !important;
  transform: translateY(-50%);
}
.instal_info_txt,
.instal_info_txt_not_shoppay {
  color: #616267;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  max-width: 320px;
  margin: 4px auto 0;
}
.currency_txt,
.price_from_month {
  font-weight: 700;
}
.view_sample_plans_link {
  color: #000;
  font-weight: 700;
  line-height: 24px;
  text-decoration-line: underline;
  margin-left: 6px;
}
/*popup */
.overlay_popup {
  position: fixed !important;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: #fff;
  transition: all 0.8s ease 0s;
  z-index: 2200000000;
  opacity: 0;
  pointer-events: none;
}
.overlay_popup.is_visible {
  opacity: 1;
  pointer-events: auto;
  transition: all 0.8s ease 0s;
}
.overlay_popup .container_popup {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  max-width: 100%;
  height: 100%;
  padding: 10px 16px;
  margin: 0;
  transition: all 0.8s ease 0s;
  overflow: auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.overlay_popup .container_popup > svg {
  position: absolute;
  top: 16px;
  right: 16px;
  outline: none;
  cursor: pointer;
}
.main_title_popup {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.sample_plans_txt {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 16px !important;
  font-weight: 400;
  line-height: 24px !important;
  margin: 0 0 14px;
}
.sample_plans_txt span {
  font-weight: 700;
}
.no_impact_banner {
  border-radius: 90px;
  background: rgba(76, 175, 80, 0.2);
  padding: 5px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.no_impact_banner span {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.all_descr_box h3 {
  color: #515151;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 18px;
  text-transform: none;
}
.all_descr_box {
  margin-top: 12px;
}
.all_txt_descr {
  color: #616267;
  font-family: "Roboto", sans-serif;
  font-size: 11.5px !important;
  font-weight: 400;
  line-height: 16px !important;
  margin: 0 0 12px;
}
.partnership_txt {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 5px 0 0;
}
.all_txt_descr a {
  color: inherit;
  text-decoration: underline;
}
.all_descr_box img {
  text-align: center;
  display: block;
  margin: 0 auto;
}
.partnership_txt span {
  color: #515151;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.6px;
}
.weeks_months_box {
  border-radius: 6px;
  border: 1px solid #f0f0f4;
  background: #fff;
  box-shadow: 0px 12px 32px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(12, 11, 11, 0.1);
  padding: 16px;
}
.weeks_block {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ccc;
}
.weeks_months_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.weeks_months_header span:nth-child(1) {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  text-transform: uppercase;
}
.weeks_months_header span:nth-child(2) {
  border-radius: 4px;
  background: #0c0b0b;
  padding: 5px 8px;
  color: #fff;
  font-family: "DINEngschrift LT";
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
}
.weeks_months_body > div {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
}
.weeks_months_body > div + div {
  margin-top: 4px;
}
.weeks_months_top span {
  color: #515151;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  min-width: 60px;
}
.weeks_months_bottom span {
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  min-width: 60px;
}
.continue_to_checkout_btn {
  display: flex;
  border-radius: 100px;
  width: 100%;
  height: 64px;
  color: #fff;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 22px;
  font-weight: 400;
  line-height: 38px;
  text-transform: uppercase;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  margin-top: 14px;
}
.continue_to_checkout_btn.buzzpatch_var {
  background: #ff3c81;
}
.continue_to_checkout_btn.zenpatch_var {
  background: #2a7b72;
}
.continue_to_checkout_btn.sleepypatch_var {
  background: #3292da;
}
/*icart-checkout-contain */
.icart-checkout-contain {
  background: #fff;
  filter: drop-shadow(0px -2px 9px rgba(0, 0, 0, 0.06));
  padding: 19px 20px 20px;
}
.icart .icart-main .icart-inner .icart-cart-main .icart-content .icart-checkout-block .icart-checkout {
  padding: 0 !important;
}
.icart .icart-main .icart-plr-comman {
  padding: 0 20px;
}
.icart-checkout-block .icart-plr-comman {
  background-color: unset !important;
  padding: 0 !important;
}
.icart-checkout-block .icart-checkout button.icart-btn-large.icart-checkout-btn {
  display: flex;
  border-radius: 100px !important;
  background-color: #ff3c81 !important;
  box-shadow: 0px 0px 0px 1px #ff3c81;
  width: 100%;
  height: 45px !important;
  color: #fff !important;
  text-align: center;
  font-size: 14px !important;
  font-weight: 700;
  line-height: 25px !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  align-items: center !important;
  justify-content: center;
  outline: none;
  border: none;
  border-color: unset !important;
  margin: 0 !important;
  padding: 0 !important;
}
.icart-checkout-block .icart-content-title {
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  padding: 0 !important;
}
.icart-checkout-block .icart-content-title > img {
  margin: 0 !important;
}
.icart-checkout-block strong span {
  color: #000 !important;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 16px;
}
body .icart .additional-checkout-buttons {
  position: relative;
  margin-top: 40px !important;
  display: block !important;
}
.icart-all-btn-shopify {
  display: flex !important;
  position: relative;
  margin-top: 40px !important;
}
body .icart .additional-checkout-buttons::before,
.icart-all-btn-shopify::before {
  position: absolute;
  content: "Or";
  color: #5b5b5b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  top: -31px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: #fff;
  padding: 0 10px;
}
body .icart .additional-checkout-buttons::after,
.icart-all-btn-shopify::after {
  position: absolute;
  content: "";
  background: #d9d9d9;
  width: 100%;
  height: 1px;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.icart .icart-main .icart-inner .icart-cart-main .icart-content .icart-checkout label {
  color: #000 !important;
  font-family: "Inter", sans-serif;
  font-size: 18px !important;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;
}
.icart .icart-final-total {
  margin-top: 12px !important;
}
.total_saving {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
}
.total_saving span {
  color: #ff3c81;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.5px;
}
.icart .icart-main .icart-inner .icart-cart-main .icart-content .icart-checkout.icartCartSubTotalContain {
  margin-top: 10px !important;
}
.icartContain .icart-header .icart-header-title {
  color: #515151 !important;
  font-family: Helvetica !important;
  font-size: 14px !important;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.8px;
}
/* checkout*/
.checkout_var ._5uqybw2 ._19gi7ytt {
  color: #fff;
  text-align: right;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  border-radius: 7px;
  background: #515151;
  padding: 3px;
}
.checkout_var .installments_parts {
  text-align: right;
  color: #515151;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin: 5px 0 0;
}
/*cart */
.cart__footer .icart-all-btn-shopify::before {
  background: #efefef;
}
@media (max-width: 320px) {
}

    </style>
    `;

    let styleBtn;
    let closeBtnFill;
    if (window.location.pathname.match("/products/buzzpatch-bundles")) {
      styleBtn = "buzzpatch_var";
      closeBtnFill = "#FF3C81";
    } else if (window.location.pathname.match("/products/zenpatch-mood-calming-stickers")) {
      styleBtn = "zenpatch_var";
      closeBtnFill = `#2A7B72`;
    } else if (window.location.pathname.match("/products/sleepypatch-sleep-promoting-stickers")) {
      styleBtn = "sleepypatch_var";
      closeBtnFill = "#0191D7";
    }

    // popup
    let popUp = /*html */ `
<div class="overlay_popup">
  <div class="container_popup">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
      <g clip-path="url(#clip0_95_1416)">
        <mask id="mask0_95_1416" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="1" width="24" height="24">
          <path d="M24 1.00537H0.0100098V24.9954H24V1.00537Z" fill="white" />
        </mask>
        <g mask="url(#mask0_95_1416)">
          <path d="M0.509766 13.0001C0.509766 6.65147 5.65635 1.50488 12.005 1.50488C18.3536 1.50488 23.5002 6.65147 23.5002 13.0001C23.5002 19.3487 18.3536 24.4953 12.005 24.4953C5.65635 24.4953 0.509766 19.3487 0.509766 13.0001Z" fill="${closeBtnFill}" stroke="white" stroke-width="0.999583" />
          <path d="M16.0033 9.80733L15.1979 9.00195L12.0049 12.1949L8.81197 9.00195L8.00659 9.80733L11.1996 13.0003L8.00659 16.1933L8.81197 16.9986L12.0049 13.8057L15.1979 16.9986L16.0033 16.1933L12.8103 13.0003L16.0033 9.80733Z" fill="white" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_95_1416">
          <rect width="23.99" height="24.9896" fill="white" transform="translate(0.0100098 0.505371)" />
        </clipPath>
      </defs>
    </svg>
  </div>
</div>
  `;

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">`);
    document.head.insertAdjacentHTML("beforeend", shopPayStyle);

    // pdpac
    renderNewElem();
    renderNewElemSlideInCart();

    function renderNewElem() {
      if (window.location.pathname.match("/products/buzzpatch-bundles") || window.location.pathname.match("/products/zenpatch-mood-calming-stickers") || window.location.pathname.match("/products/sleepypatch-sleep-promoting-stickers")) {
        let currency = document.querySelector(".cPrice span").textContent.trim().charAt(0);
        let countPacks = +document.querySelector(".product-form__input input[type=radio]:checked").value.split(" ")[0];
        let priceItem = document.querySelector(".price .price-item").textContent.trim().slice(1).replace(/\D/g, "") / 100;
        let priceItemWeek = priceItem / 4;
        let priceFromMonth = (priceItem / 4 / countPacks) * 1.15;
        let totalMonths = priceItem * 1.15;
        let interestMonths = totalMonths - priceItem;

        let instalmentsInfoTxt = /*html */ `
<div class="instal_info_txt">
  4 interest-free instalments, or from <span class="currency_txt">${currency}</span><span class="price_from_month">${priceFromMonth.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>/mo with
  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="15" viewBox="0 0 59 15" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M39.0029 0.526367C37.7958 0.526367 36.8173 1.47185 36.8173 2.63817V12.2426C36.8173 13.409 37.7958 14.3545 39.0029 14.3545H56.8143C58.0215 14.3545 59 13.409 59 12.2426V2.63817C59 1.47185 58.0215 0.526367 56.8143 0.526367H39.0029ZM42.1228 10.183V7.74856H43.708C45.1562 7.74856 45.9262 6.96402 45.9262 5.77509C45.9262 4.58616 45.1562 3.87443 43.708 3.87443H41.1016V10.183H42.1228ZM42.1228 4.81263H43.4736C44.411 4.81263 44.8715 5.18467 44.8715 5.80745C44.8715 6.43022 44.4278 6.80227 43.5153 6.80227H42.1228V4.81263ZM47.7267 10.3124C48.5052 10.3124 49.0158 9.98084 49.2502 9.41467C49.3172 10.0455 49.7107 10.3691 50.5645 10.1507L50.5729 9.47938C50.2296 9.51174 50.1626 9.39042 50.1626 9.04264V7.39269C50.1626 6.42213 49.5014 5.84788 48.2793 5.84788C47.0737 5.84788 46.379 6.43022 46.379 7.41695H47.3166C47.3166 6.94785 47.6598 6.66477 48.2625 6.66477C48.8986 6.66477 49.1917 6.93168 49.1832 7.39269V7.60297L48.1034 7.71621C46.8896 7.8456 46.22 8.29045 46.22 9.06689C46.22 9.70585 46.6886 10.3124 47.7267 10.3124ZM47.9359 9.58453C47.4086 9.58453 47.1994 9.30954 47.1994 9.03453C47.1994 8.6625 47.6347 8.49264 48.4885 8.3956L49.1582 8.32281C49.1163 9.03453 48.6224 9.58453 47.9359 9.58453ZM53.6736 10.4985C53.2468 11.5014 52.5603 11.8006 51.4889 11.8006H51.0284V10.9757H51.5224C52.1082 10.9757 52.3929 10.7977 52.7027 10.2882L50.8024 5.97729H51.8571L53.2133 9.12351L54.4186 5.97729H55.4483L53.6736 10.4985Z"
      fill="#5A31F4"
    />
    <path d="M4.14419 6.60447C2.74586 6.31139 2.1229 6.19671 2.1229 5.67609C2.1229 5.18641 2.54449 4.94248 3.38763 4.94248C4.12913 4.94248 4.67116 5.25559 5.07015 5.86904C5.10025 5.91638 5.16236 5.93276 5.21317 5.90728L6.78654 5.13908C6.84299 5.11177 6.8637 5.04261 6.83171 4.98981C6.17865 3.89578 4.97228 3.29688 3.38386 3.29688C1.29671 3.29688 0 4.2908 0 5.87087C0 7.54924 1.57901 7.97338 2.97923 8.26646C4.37944 8.55954 5.00427 8.67421 5.00427 9.19483C5.00427 9.71545 4.54883 9.96121 3.6398 9.96121C2.80043 9.96121 2.17749 9.58986 1.80108 8.869C1.77286 8.8162 1.70698 8.79436 1.65241 8.82167L0.0828093 9.57347C0.0282294 9.60078 0.0056452 9.66448 0.0338763 9.7191C0.656822 10.9296 1.93471 11.6104 3.64169 11.6104C5.81542 11.6104 7.12906 10.6329 7.12906 9.00371C7.12906 7.37448 5.54252 6.9012 4.14419 6.60812V6.60447Z" fill="#5A31F4" />
    <path d="M12.5751 3.29695C11.683 3.29695 10.8945 3.60278 10.328 4.14705C10.2922 4.17983 10.2339 4.15616 10.2339 4.10883V0.633768C10.2339 0.573697 10.1849 0.526367 10.1228 0.526367H8.15427C8.09216 0.526367 8.04321 0.573697 8.04321 0.633768V11.4194C8.04321 11.4795 8.09216 11.5268 8.15427 11.5268H10.1228C10.1849 11.5268 10.2339 11.4795 10.2339 11.4194V6.68827C10.2339 5.77447 10.9585 5.07362 11.9352 5.07362C12.912 5.07362 13.6196 5.7599 13.6196 6.68827V11.4194C13.6196 11.4795 13.6686 11.5268 13.7307 11.5268H15.6992C15.7614 11.5268 15.8103 11.4795 15.8103 11.4194V6.68827C15.8103 4.70045 14.4628 3.29878 12.5751 3.29878V3.29695Z" fill="#5A31F4" />
    <path d="M19.8073 2.98865C18.7383 2.98865 17.7334 3.30356 17.0143 3.76047C16.9655 3.79143 16.9485 3.85513 16.9787 3.90428L17.8462 5.3369C17.8782 5.38787 17.9459 5.40608 17.9986 5.37513C18.5445 5.05657 19.1692 4.89091 19.8073 4.89456C21.5255 4.89456 22.7883 6.06687 22.7883 7.61598C22.7883 8.93574 21.7777 9.91328 20.496 9.91328C19.4516 9.91328 18.727 9.32531 18.727 8.49522C18.727 8.0201 18.9359 7.63055 19.4798 7.35568C19.5362 7.32655 19.557 7.2592 19.5231 7.2064L18.7045 5.86662C18.678 5.82295 18.6216 5.80292 18.5707 5.82112C17.4736 6.21432 16.7037 7.1609 16.7037 8.43152C16.7037 10.3538 18.2866 11.7883 20.4943 11.7883C23.0726 11.7883 24.9263 10.0607 24.9263 7.58323C24.9263 4.92732 22.7696 2.98682 19.8036 2.98682L19.8073 2.98865Z" fill="#5A31F4" />
    <path d="M30.6836 3.28209C29.688 3.28209 28.7997 3.63705 28.1504 4.26326C28.1146 4.29785 28.0563 4.27236 28.0563 4.22504V3.47141C28.0563 3.41134 28.0075 3.364 27.9453 3.364H26.0275C25.9655 3.364 25.9165 3.41134 25.9165 3.47141V14.2406C25.9165 14.3007 25.9655 14.348 26.0275 14.348H27.996C28.0582 14.348 28.1072 14.3007 28.1072 14.2406V10.7092C28.1072 10.6618 28.1656 10.6382 28.2012 10.6691C28.8487 11.2516 29.7049 11.592 30.6856 11.592C32.9947 11.592 34.7958 9.78441 34.7958 7.43614C34.7958 5.08788 32.9928 3.28027 30.6856 3.28027L30.6836 3.28209ZM30.313 9.76803C28.9992 9.76803 28.0036 8.75773 28.0036 7.42158C28.0036 6.08544 28.9973 5.07514 30.313 5.07514C31.6285 5.07514 32.6202 6.06906 32.6202 7.42158C32.6202 8.77411 31.6415 9.76803 30.311 9.76803H30.313Z" fill="#5A31F4" />
  </svg>
  <span class="view_sample_plans_link">View sample plans</span>
</div>

        `;

        let instalmentsInfoTxtNotShopPay = /*html */ `
        <div class="instal_info_txt_not_shoppay second_block_not_shoppay">
  Choose <b>3 packs</b> or <b>4 packs</b> for 4 interest-free payments with
  <svg xmlns="http://www.w3.org/2000/svg" width="59" height="15" viewBox="0 0 59 15" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M39.0029 0.526367C37.7958 0.526367 36.8173 1.47185 36.8173 2.63817V12.2426C36.8173 13.409 37.7958 14.3545 39.0029 14.3545H56.8143C58.0215 14.3545 59 13.409 59 12.2426V2.63817C59 1.47185 58.0215 0.526367 56.8143 0.526367H39.0029ZM42.1228 10.183V7.74856H43.708C45.1562 7.74856 45.9262 6.96402 45.9262 5.77509C45.9262 4.58616 45.1562 3.87443 43.708 3.87443H41.1016V10.183H42.1228ZM42.1228 4.81263H43.4736C44.411 4.81263 44.8715 5.18467 44.8715 5.80745C44.8715 6.43022 44.4278 6.80227 43.5153 6.80227H42.1228V4.81263ZM47.7267 10.3124C48.5052 10.3124 49.0158 9.98084 49.2502 9.41467C49.3172 10.0455 49.7107 10.3691 50.5645 10.1507L50.5729 9.47938C50.2296 9.51174 50.1626 9.39042 50.1626 9.04264V7.39269C50.1626 6.42213 49.5014 5.84788 48.2793 5.84788C47.0737 5.84788 46.379 6.43022 46.379 7.41695H47.3166C47.3166 6.94785 47.6598 6.66477 48.2625 6.66477C48.8986 6.66477 49.1917 6.93168 49.1832 7.39269V7.60297L48.1034 7.71621C46.8896 7.8456 46.22 8.29045 46.22 9.06689C46.22 9.70585 46.6886 10.3124 47.7267 10.3124ZM47.9359 9.58453C47.4086 9.58453 47.1994 9.30954 47.1994 9.03453C47.1994 8.6625 47.6347 8.49264 48.4885 8.3956L49.1582 8.32281C49.1163 9.03453 48.6224 9.58453 47.9359 9.58453ZM53.6736 10.4985C53.2468 11.5014 52.5603 11.8006 51.4889 11.8006H51.0284V10.9757H51.5224C52.1082 10.9757 52.3929 10.7977 52.7027 10.2882L50.8024 5.97729H51.8571L53.2133 9.12351L54.4186 5.97729H55.4483L53.6736 10.4985Z"
      fill="#5A31F4"
    />
    <path d="M4.14419 6.60447C2.74586 6.31139 2.1229 6.19671 2.1229 5.67609C2.1229 5.18641 2.54449 4.94248 3.38763 4.94248C4.12913 4.94248 4.67116 5.25559 5.07015 5.86904C5.10025 5.91638 5.16236 5.93276 5.21317 5.90728L6.78654 5.13908C6.84299 5.11177 6.8637 5.04261 6.83171 4.98981C6.17865 3.89578 4.97228 3.29688 3.38386 3.29688C1.29671 3.29688 0 4.2908 0 5.87087C0 7.54924 1.57901 7.97338 2.97923 8.26646C4.37944 8.55954 5.00427 8.67421 5.00427 9.19483C5.00427 9.71545 4.54883 9.96121 3.6398 9.96121C2.80043 9.96121 2.17749 9.58986 1.80108 8.869C1.77286 8.8162 1.70698 8.79436 1.65241 8.82167L0.0828093 9.57347C0.0282294 9.60078 0.0056452 9.66448 0.0338763 9.7191C0.656822 10.9296 1.93471 11.6104 3.64169 11.6104C5.81542 11.6104 7.12906 10.6329 7.12906 9.00371C7.12906 7.37448 5.54252 6.9012 4.14419 6.60812V6.60447Z" fill="#5A31F4" />
    <path d="M12.5751 3.29695C11.683 3.29695 10.8945 3.60278 10.328 4.14705C10.2922 4.17983 10.2339 4.15616 10.2339 4.10883V0.633768C10.2339 0.573697 10.1849 0.526367 10.1228 0.526367H8.15427C8.09216 0.526367 8.04321 0.573697 8.04321 0.633768V11.4194C8.04321 11.4795 8.09216 11.5268 8.15427 11.5268H10.1228C10.1849 11.5268 10.2339 11.4795 10.2339 11.4194V6.68827C10.2339 5.77447 10.9585 5.07362 11.9352 5.07362C12.912 5.07362 13.6196 5.7599 13.6196 6.68827V11.4194C13.6196 11.4795 13.6686 11.5268 13.7307 11.5268H15.6992C15.7614 11.5268 15.8103 11.4795 15.8103 11.4194V6.68827C15.8103 4.70045 14.4628 3.29878 12.5751 3.29878V3.29695Z" fill="#5A31F4" />
    <path d="M19.8073 2.98865C18.7383 2.98865 17.7334 3.30356 17.0143 3.76047C16.9655 3.79143 16.9485 3.85513 16.9787 3.90428L17.8462 5.3369C17.8782 5.38787 17.9459 5.40608 17.9986 5.37513C18.5445 5.05657 19.1692 4.89091 19.8073 4.89456C21.5255 4.89456 22.7883 6.06687 22.7883 7.61598C22.7883 8.93574 21.7777 9.91328 20.496 9.91328C19.4516 9.91328 18.727 9.32531 18.727 8.49522C18.727 8.0201 18.9359 7.63055 19.4798 7.35568C19.5362 7.32655 19.557 7.2592 19.5231 7.2064L18.7045 5.86662C18.678 5.82295 18.6216 5.80292 18.5707 5.82112C17.4736 6.21432 16.7037 7.1609 16.7037 8.43152C16.7037 10.3538 18.2866 11.7883 20.4943 11.7883C23.0726 11.7883 24.9263 10.0607 24.9263 7.58323C24.9263 4.92732 22.7696 2.98682 19.8036 2.98682L19.8073 2.98865Z" fill="#5A31F4" />
    <path d="M30.6836 3.28209C29.688 3.28209 28.7997 3.63705 28.1504 4.26326C28.1146 4.29785 28.0563 4.27236 28.0563 4.22504V3.47141C28.0563 3.41134 28.0075 3.364 27.9453 3.364H26.0275C25.9655 3.364 25.9165 3.41134 25.9165 3.47141V14.2406C25.9165 14.3007 25.9655 14.348 26.0275 14.348H27.996C28.0582 14.348 28.1072 14.3007 28.1072 14.2406V10.7092C28.1072 10.6618 28.1656 10.6382 28.2012 10.6691C28.8487 11.2516 29.7049 11.592 30.6856 11.592C32.9947 11.592 34.7958 9.78441 34.7958 7.43614C34.7958 5.08788 32.9928 3.28027 30.6856 3.28027L30.6836 3.28209ZM30.313 9.76803C28.9992 9.76803 28.0036 8.75773 28.0036 7.42158C28.0036 6.08544 28.9973 5.07514 30.313 5.07514C31.6285 5.07514 32.6202 6.06906 32.6202 7.42158C32.6202 8.77411 31.6415 9.76803 30.311 9.76803H30.313Z" fill="#5A31F4" />
  </svg>
</div>
        `;
        if (document.querySelector(".cPrice") && document.querySelector(".price--large") && !document.querySelector(".new_txt_old_price")) {
          let oldPrice = document.querySelector(".cPrice span").textContent;
          document.querySelector(".price--large").insertAdjacentHTML("afterbegin", `<span class="new_txt_old_price">${oldPrice}</span>`);
        }
        if (!document.querySelector(".instal_info_txt")) {
          document.querySelector(".price--large").insertAdjacentHTML("afterend", instalmentsInfoTxt);
          waitForElement(".instal_info_txt").then((el) => {
            handleVisibility(el, ["exp_shop_pay_v_fs_ftut", "up to two - {{focusTime}}", "Visibility", "First screen"]);
          });
        }
        if (!document.querySelector(".instal_info_txt_not_shoppay")) {
          document.querySelector(".price--large").insertAdjacentHTML("afterend", instalmentsInfoTxtNotShopPay);
          waitForElement(".second_block_not_shoppay").then((el) => {
            handleVisibility(el, ["exp_shop_pay_v_fs_ftot", "over two packs - {{focusTime}}", "Visibility", "First screen "]);
          });
        }
        if (countPacks === 3 || countPacks === 4) {
          if (document.querySelector(".instal_info_txt_not_shoppay")) {
            document.querySelector(".instal_info_txt_not_shoppay").style.display = "none";
          }
        }
        if (countPacks === 1 || countPacks === 2) {
          if (document.querySelector(".instal_info_txt")) {
            document.querySelector(".instal_info_txt").style.display = "none";
          }
        }

        let contentPopup = /*html */ `
<div class="content_popup">
  <h2 class="main_title_popup">Get it now, pay later</h2>
  <p class="sample_plans_txt">Sample plans for <span>${currency}${priceItem.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span> purchase</p>
  <div class="no_impact_banner">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7.99992 14.6668C11.6666 14.6668 14.6666 11.6668 14.6666 8.00016C14.6666 4.3335 11.6666 1.3335 7.99992 1.3335C4.33325 1.3335 1.33325 4.3335 1.33325 8.00016C1.33325 11.6668 4.33325 14.6668 7.99992 14.6668Z" fill="#38D430"/>
  <path d="M5.16675 7.99995L7.05341 9.88661L10.8334 6.11328" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <span>No impact on your credit score</span>
  </div>
  <div class="weeks_months_box">
    <div class="weeks_block">
      <div class="weeks_months_header">
        <span>${currency}${priceItemWeek.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} / 2 weeks</span>
        <span>8 weeks</span>
      </div>
      <div class="weeks_months_body">
        <div class="weeks_months_top">
          <span>APR</span>
          <span>Interest</span>
          <span>Total</span>
        </div>
        <div class="weeks_months_bottom">
          <span>0%</span>
          <span>$0.00</span>
          <span>${currency}${priceItem.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>
        </div>
      </div>
    </div>
    <div class="months_block">
      <div class="weeks_months_header">
        <span>${currency}${priceFromMonth.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")} / month</span>
        <span>12 months</span>
      </div>
      <div class="weeks_months_body">
        <div class="weeks_months_top">
          <span>APR</span>
          <span>Interest</span>
          <span>Total</span>
        </div>
        <div class="weeks_months_bottom">
          <span>15%</span>
          <span>${currency}${interestMonths.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>
          <span>${currency}${totalMonths.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span>
        </div>
      </div>
    </div>
  </div>
  <a href="" class="continue_to_checkout_btn ${styleBtn}">Continue to checkout</a>
  <div class="all_descr_box">
    <h3>Checking your eligibility won’t affect your credit.</h3>
    <p class="all_txt_descr">The estimated payment amount excludes taxes and shipping. Rates range from 0-36% APR. Payment options through Shop Pay Installments are subject to an eligibility check and are provided by these lending partners:<a href="affirm.com/lenders">affirm.com/lenders</a>.Options depend on your purchase amount, and a down payment may be required. More options may be available upon approval. State notices to consumers:<a href="affirm.com/licenses">affirm.com/licenses</a>.</p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/natpat/img/shop_pay_icon.svg" alt="shop pay icon" />
    <p class="partnership_txt">
      <span>Installments in partnership with</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="21" viewBox="0 0 44 21" fill="none">
        <path
          d="M4.34939 13.8817C3.84211 13.8817 3.58742 13.6565 3.58742 13.287C3.58742 12.5998 4.442 12.3659 5.99962 12.217C5.99962 13.1353 5.30922 13.8817 4.34833 13.8817H4.34939ZM5.02085 8.71478C3.90736 8.71478 2.62653 9.18728 1.93086 9.68555L2.56654 10.8883C3.12434 10.4301 4.02523 10.0368 4.83878 10.0368C5.61127 10.0368 6.03857 10.2688 6.03857 10.7375C6.03857 11.0525 5.75546 11.2119 5.22081 11.2749C3.22537 11.5078 1.65723 12.0032 1.65723 13.3882C1.65723 14.486 2.52655 15.1503 3.88421 15.1503C4.85246 15.1503 5.71546 14.6664 6.12487 14.0278V14.9728H7.92981V11.0133C7.92981 9.37914 6.66688 8.71478 5.02085 8.71478ZM23.1482 8.89423V14.9718H25.0815V12.0433C25.0815 10.6515 26.0182 10.243 26.6707 10.243C26.9265 10.243 27.2706 10.3098 27.4969 10.4625L27.8484 8.8551C27.5733 8.75637 27.2791 8.70866 26.9833 8.71478C25.9898 8.71478 25.3647 9.11091 24.9532 9.91559V8.89423H23.1482ZM36.8079 8.71478C35.786 8.71478 35.0219 9.25887 34.6241 9.78196C34.2557 9.10519 33.4738 8.71478 32.5371 8.71478C31.5152 8.71478 30.8079 9.22546 30.4806 9.8125V8.89423H28.6178V14.9718H30.5522V11.8438C30.5522 10.7203 31.2057 10.181 31.8162 10.181C32.3687 10.181 32.876 10.5026 32.876 11.3331V14.9718H34.8072V11.8438C34.8072 10.7079 35.445 10.181 36.0838 10.181C36.5953 10.181 37.1342 10.515 37.1342 11.3197V14.9718H39.0644V10.7709C39.0644 9.40491 38.0424 8.71478 36.8079 8.71478ZM18.4459 8.89328H16.6946V8.27473C16.6946 7.471 17.205 7.24096 17.645 7.24096C18.1312 7.24096 18.5101 7.43473 18.5101 7.43473L19.1058 6.2091C19.1058 6.2091 18.5027 5.854 17.4039 5.854C16.1694 5.854 14.7644 6.48019 14.7644 8.44655V8.89328H11.8333V8.27473C11.8333 7.471 12.3438 7.24096 12.7837 7.24096C13.0342 7.24096 13.3699 7.2925 13.6488 7.43473L14.2445 6.2091C13.8888 6.022 13.3183 5.854 12.5427 5.854C11.3082 5.854 9.90315 6.48019 9.90315 8.44655V8.89328H8.78124V10.2344H9.90315V14.9718H11.8333V10.2344H14.7644V14.9718H16.6946V10.2344H18.4459V8.89328ZM19.5983 14.9709H21.5264V8.89328H19.5983V14.9709Z"
          fill="black"
        />
        <path d="M30.8521 0.414062C25.6361 0.414062 20.9885 3.67193 19.6698 7.85952H21.5589C22.6609 4.74197 26.4023 2.00434 30.8521 2.00434C36.2616 2.00434 40.9366 5.70988 40.9366 11.4782C40.9366 12.7726 40.7503 13.9409 40.3967 14.9718H42.2311L42.249 14.9155C42.55 13.8512 42.7026 12.6952 42.7026 11.4792C42.7026 5.04552 37.493 0.415972 30.8521 0.415972V0.414062Z" fill="#5A31F4" />
      </svg>
    </p>
  </div>
</div>
  `;

        addPopup();
        function addPopup() {
          if (!document.querySelector(".overlay_popup")) {
            document.querySelector("body").insertAdjacentHTML("afterbegin", popUp);
          }

          if (document.querySelector(".overlay_popup") && document.querySelector(".view_sample_plans_link")) {
            let overlay = document.querySelector(".overlay_popup"),
              containerPopup = document.querySelector(".container_popup"),
              btnClose = overlay.querySelector("svg");

            btnClose.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                pushDataLayer(["exp_shop_pay_b_pudyn_c", " Close", "Button", "Pop up did you now"]);
                onClosePopup();
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });

            overlay.addEventListener("click", (e) => {
              if (e.target.matches(".overlay_popup")) {
                onClosePopup();
              }
            });
            document.querySelector(".view_sample_plans_link").addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                pushDataLayer(["exp_shop_pay_l_fs_vsp", "View sample plans", "Link", "First screen"]);
                onOpenPopup();
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });

            function onClosePopup() {
              overlay.classList.remove("is_visible");
              document.body.style.overflow = "auto";
              document.body.style.display = "initial";
              setTimeout(() => {
                document.querySelector(".content_popup")?.remove();
              }, 400);
            }
            function onOpenPopup() {
              overlay.classList.add("is_visible");
              document.body.style.overflow = "hidden";
              document.body.style.display = "block";

              if (!document.querySelector(".overlay_popup .content_popup")) {
                console.log(`<<<<<<<<<<<<object>>>>>>>>>>>>`);
                document.querySelector(".container_popup").insertAdjacentHTML("beforeend", contentPopup);
              }

              let lookForBtn = setInterval(() => {
                if (document.querySelector(".continue_to_checkout_btn")) {
                  clearInterval(lookForBtn);
                  document.querySelector(".continue_to_checkout_btn").addEventListener("click", (e) => {
                    if (!e.target.getAttribute("data-test")) {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCartCheckout(+document.querySelector("input[data-productid]").value, 1);
                      pushDataLayer(["exp_shop_pay_b_pudyn_cc", "Continue to checkout", "Button", "Pop up did you now"]);
                      onClosePopup();
                      // setTimeout(() => {
                      //   window.location = "/checkout";
                      // }, 700);
                    }
                    e.target.setAttribute("data-test", "1");
                    setTimeout(() => {
                      if (e.target.getAttribute("data-test")) {
                        e.target.removeAttribute("data-test");
                      }
                    }, 1000);
                  });
                }
              }, 100);

              waitForElement(".content_popup").then((el) => {
                handleVisibility(el, ["exp_shop_pay_v_pudyn_ft", "{{focusTime}}", "Visibility", "Pop up did you now"]);
              });
            }
          }
        }
      }
    }

    function renderNewElemSlideInCart() {
      if (document.querySelector(".icartShopifyCartContent")) {
        if (document.querySelector(".total_saving")) {
          document.querySelector(".total_saving").remove();
        }
        let currencyCart = document.querySelectorAll(".icart-justadded.icart-plr-comman .icart-list .icart-product-compare-price")[0]?.textContent.trim().charAt(0);
        let initialValue = 0;
        let array1 = [];
        document.querySelectorAll(".icart-justadded.icart-plr-comman .icart-list .icart-product-compare-price").forEach((el) => {
          let price = el.textContent.trim().slice(1).replace(/\D/g, "") / 100;
          array1.push(price);
        });
        let subTotal = document.querySelector(".icart .icart-main .icart-cart-price label")?.textContent.trim().slice(1).replace(/\D/g, "") / 100;
        let sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
        let totalSaving = sumWithInitial - subTotal;
        console.log(array1);
        console.log(sumWithInitial);

        let a = setInterval(() => {
          if (document.querySelector(".icart-checkout-block strong span")) {
            clearInterval(a);
            if (document.querySelector(".icart-checkout-block strong span").innerHTML !== "<b>FREE Shipping</b> Worldwide") {
              document.querySelector(".icart-checkout-block strong span").innerHTML = "<b>FREE Shipping</b> Worldwide";
            }
          }
        }, 100);
        let b = setInterval(() => {
          if (document.querySelector(".icart-checkout button.icart-btn-large.icart-checkout-btn")) {
            clearInterval(b);
            if (document.querySelector(".icart-checkout button.icart-btn-large.icart-checkout-btn").textContent !== "Check out") {
              document.querySelector(".icart-checkout button.icart-btn-large.icart-checkout-btn").textContent = "Check out";
            }
          }
        }, 100);
        let c = setInterval(() => {
          if (document.querySelector(".icart-checkout-block .icart-content-title")) {
            clearInterval(c);
            if (!document.querySelector(".icart-checkout-block .icart-content-title > img")) {
              document.querySelector(".icart-checkout-block .icart-content-title").insertAdjacentHTML("afterbegin", `<img src="https://conversionratestore.github.io/projects/buzzpatch/natpat/img/free_delivery_icon.svg" alt="free delivery icon">`);
            }
          }
        }, 100);
        // let d = setInterval(() => {
        //   if (document.querySelector(".icart-checkout-block  .icart-plr-comman")) {
        //     clearInterval(d);
        //     if (!document.querySelector(".dynamic-checkout__content > button")) {
        //       document.querySelector(".dynamic-checkout__content").insertAdjacentHTML("afterbegin", `<button class="icart-all-btn-shopify">Meta Pay</button>`);
        //     }
        //   }
        // }, 100);
        let e = setInterval(() => {
          if (document.querySelector(".icart .icart-main .icart-cart-total label")) {
            clearInterval(e);
            if (document.querySelector(".icart .icart-main .icart-cart-total label").textContent !== "Subtotal") {
              document.querySelector(".icart .icart-main .icart-cart-total label").textContent = "Subtotal";
            }
          }
        }, 100);
        if (!document.querySelector(".total_saving")) {
          document.querySelector(".icartCartSubTotalContain .icart-ai-c")?.insertAdjacentHTML("afterend", `<div class="total_saving"><span>Your total saving on this order:</span><span>${currencyCart}${totalSaving.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,")}</span></div>`);
        }
      }
    }

    //add to cart to checkout
    async function addToCartCheckout(idValue, qt) {
      let formData = {
        items: [
          {
            id: idValue,
            quantity: qt,
          },
        ],
      };

      await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          response.json();
          setTimeout(() => {
            window.location.pathname = "/checkout";
          }, 300);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    // observer Pdp
    let observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (document) {
            observer.disconnect();

            renderNewElem();

            observer.observe(document, {
              childList: true,
              subtree: true,
            });
          }
        }
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
    });

    // observer Slide In Cart
    let observerCart, observeTarget;
    let isProgress = false;
    if (settings.observerCart) {
      observerCart = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
          if (!isProgress) {
            isProgress = true;
            renderNewElemSlideInCart();

            setTimeout(() => {
              isProgress = false;
            }, 2500);
          }
        }
      });

      let intrevalObserver = setInterval(() => {
        if (document.querySelector(".icart .icart-main .icart-cart-price label")) {
          clearInterval(intrevalObserver);
          observeTarget = document.querySelector(".icart .icart-main .icart-cart-price label");

          observerCart.observe(observeTarget, { childList: true, subtree: true });
        }
      }, 500);
    }
    // cart
    if (window.location.pathname.match("cart")) {
      renderBlockCart();
    }
    function renderBlockCart() {
      if (document.querySelector(".cart__footer .cart__checkout-button").textContent !== "Check out") {
        document.querySelector(".cart__footer .cart__checkout-button").textContent = "Check out";
      }
      if (!document.querySelector(".icart-all-btn-shopify")) {
        document.querySelector("#main-cart-footer .cart__ctas").insertAdjacentHTML("beforeend", `<div class="icart-all-btn-shopify"></div>`);
      }
    }
    // checkout
    if (window.location.pathname.match("checkout")) {
      renderBlockCheckout();
    }

    function renderBlockCheckout() {
      if (document.querySelector("#shop-pay-login-iframe")) {
        document.querySelector("body").classList.add("checkout_var");
      }
      if (document.querySelector("body").classList.contains("checkout_var")) {
        let currencyPrice = document.querySelector("[dir=ltr] ._1x41w3p1 ._5uqybw2 ._19gi7ytl").textContent.trim().charAt(0);
        let totalPrice = document.querySelector("[dir=ltr] ._1x41w3p1 ._5uqybw2 ._19gi7ytl").textContent.trim().slice(1).replace(/\D/g, "") / 100 / 4;
        if (document.querySelector("[dir=ltr] ._1x41w3p1") && !document.querySelector(".installments_parts")) {
          document.querySelector("[dir=ltr] ._1x41w3p1").insertAdjacentHTML("afterend", `<div class="installments_parts">or 4 installments of ${currencyPrice}${totalPrice.toFixed(2)}</div>`);
        }
      }
    }

    function visibElem() {}

    // *** Utils *** //
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
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
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

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_shop_pay", "variant_1");
      }
    }, 200);
  }
}, 100);
