(function() {
  "use strict";
  const m = (i, n, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: n,
      event_type: e,
      event_loc: o
    }), console.dir(`Event: ${i} | ${n} | ${e} | ${o}`);
  }, k = ({ name: i, dev: n }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, _ = (i) => document.querySelectorAll(i), t = (i) => document.querySelector(i), v = (i, n = "variant_1") => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, n), console.log("set", i, n));
    }, 1e3);
  };
  function s(i) {
    return new Promise((n) => {
      if (document.querySelector(i))
        return n(document.querySelector(i));
      const e = new MutationObserver(() => {
        document.querySelector(i) && (n(document.querySelector(i)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(i) {
    i = i === void 0 ? {} : i;
    let n, e, o, r, d = (i == null ? void 0 : i.delay) || 50;
    function a() {
      n = null, r = 0;
    }
    return a(), function() {
      return e = window.scrollY, n != null && (r = e - n), n = e, clearTimeout(o), o = setTimeout(a, d), r;
    };
  })();
  function S(i) {
    return new Promise((n) => setTimeout(n, i));
  }
  const x = async (i, n) => {
    const e = i, r = (n == null ? void 0 : n.getBoundingClientRect().top) + window.pageYOffset - e;
    return window.scrollTo({
      top: r,
      behavior: "smooth"
    }), await S(800), !0;
  }, g = {
    orangeArrowIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 17 24" fill="none">
      <path
        d="M4.01427 3.16832C3.92131 2.62391 4.28729 2.10723 4.83169 2.01428L13.7033 0.499517C14.2477 0.406565 14.7644 0.772539 14.8573 1.31695C14.9503 1.86135 14.5843 2.37803 14.0399 2.47099L6.15404 3.81744L7.50049 11.7033C7.59345 12.2477 7.22747 12.7644 6.68307 12.8574C6.13866 12.9503 5.62198 12.5843 5.52903 12.0399L4.01427 3.16832ZM1.88236 19.5293C2.64385 20.9572 4.46064 21.8193 6.72273 21.8991C8.96036 21.978 11.3203 21.266 12.8415 19.9349C13.5907 19.2793 14.1241 18.4866 14.37 17.5684C14.6151 16.6532 14.5935 15.5433 14.1207 14.2189C13.1612 11.5309 10.3617 8.02327 4.42199 3.81604L5.57801 2.18398C11.6383 6.47657 14.8388 10.2813 16.0043 13.5465C16.594 15.1986 16.6662 16.7255 16.3019 18.0857C15.9384 19.4429 15.1593 20.5643 14.1585 21.44C12.1797 23.1715 9.28964 23.9908 6.65227 23.8978C4.03936 23.8057 1.35615 22.7928 0.117638 20.4705L1.88236 19.5293Z"
        fill="#F4BE00"
      />
    </svg>
  `
    ),
    percentIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
      <path
        d="M8.08183 5.625C8.08183 6.12228 7.88406 6.59919 7.53204 6.95083C7.18001 7.30246 6.70257 7.5 6.20473 7.5C5.70689 7.5 5.22945 7.30246 4.87742 6.95083C4.5254 6.59919 4.32764 6.12228 4.32764 5.625C4.32764 5.12772 4.5254 4.65081 4.87742 4.29917C5.22945 3.94754 5.70689 3.75 6.20473 3.75C6.70257 3.75 7.18001 3.94754 7.53204 4.29917C7.88406 4.65081 8.08183 5.12772 8.08183 5.625ZM6.83043 5.625C6.83043 5.45924 6.76451 5.30027 6.64717 5.18306C6.52982 5.06585 6.37068 5 6.20473 5C6.03879 5 5.87964 5.06585 5.7623 5.18306C5.64495 5.30027 5.57903 5.45924 5.57903 5.625C5.57903 5.79076 5.64495 5.94973 5.7623 6.06694C5.87964 6.18415 6.03879 6.25 6.20473 6.25C6.37068 6.25 6.52982 6.18415 6.64717 6.06694C6.76451 5.94973 6.83043 5.79076 6.83043 5.625Z"
        fill="#0C0B0B"
      />
      <path
        d="M3.0761 1.25H8.81501C9.14687 1.25007 9.46512 1.38181 9.69974 1.61625L18.4595 10.3663C18.6941 10.6007 18.8259 10.9185 18.8259 11.25C18.8259 11.5815 18.6941 11.8993 18.4595 12.1337L12.7206 17.8663C12.4859 18.1006 12.1677 18.2322 11.8359 18.2322C11.5041 18.2322 11.1858 18.1006 10.9511 17.8663L2.19137 9.11625C1.95667 8.88188 1.82478 8.56399 1.82471 8.2325V2.5C1.82471 2.16848 1.95655 1.85054 2.19123 1.61612C2.42591 1.3817 2.74421 1.25 3.0761 1.25ZM3.0761 8.2325L11.8359 16.9825L17.5748 11.25L8.81501 2.5H3.0761V8.2325Z"
        fill="#0C0B0B"
      />
    </svg>
  `
    )
  }, C = (
    /* HTML */
    `
  <div id="newSubscriptionBlock">
    <div class="new_subscription_block">
      <div class="plan_selection">
        <input type="radio" name="plan" value="oneTime" id="oneTime" />
        <label for="oneTime" class="one_time_variant"> One-time</label>

        <input type="radio" name="plan" value="subscribeSave" id="subscribeSave" checked />
        <label for="subscribeSave" class="subscribe_save_variant"> Subscribe & Save</label>
      </div>
      <div class="plan_comment">A choice that saves both time and money ${g.orangeArrowIcon}</div>
      <ul class="plan_details">
        <li>100% Money-Back Guarantee</li>
        <li>Priority Customer Service</li>
        <li>Free, Fast Shipping Worldwide</li>
        <li>5 Day Reminder - Cancel Anytime</li>
        <li>Extra 15% Off First and Fauture Orders</li>
      </ul>
    </div>
  </div>
`
  ), L = (
    /* HTML */
    `
  <div class="custom_dropdown">
    <button class="dropdown_toggle">Select an option</button>
    <div class="dropdown_menu"></div>
  </div>
`
  ), B = (
    /* HTML */
    `
  <div class="sticky_block">
    <div class="choose_your_product_btn">Choose your product</div>
  </div>
`
  ), T = `.rtx-subscription-label__wrapper,
.product-form__submit img,
.product-form__submit span {
  display: none !important;
}

body .product {
  justify-content: space-between;
}
body .product--medium:not(.product--no-media) .product__media-wrapper {
  max-width: 660px;
}
body #pdpGetNow {
  padding: 0;
  max-width: 490px;
}
body .icartShopifyCartContent > section:nth-child(1) {
  padding-top: 20px;
}
@media (max-width: 768px) {
  body .icartShopifyCartContent > section:nth-child(1) {
    padding-top: 0;
  }
}
body .icartShopifyCartContent > section:nth-child(1) > section {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 20px 55px;
}
@media (max-width: 768px) {
  body .icartShopifyCartContent > section:nth-child(1) > section {
    padding: 0 15px 55px;
  }
}
body .product__info-container .product__title {
  margin-bottom: 15px;
}
@media (max-width: 768px) {
  body .product__info-container .product__title {
    margin-bottom: 12px;
  }
}
body .product__info-container .product__title h1 {
  line-height: 43.2px;
  margin-bottom: 0;
}
@media (max-width: 768px) {
  body .product__info-container .product__title h1 {
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 2px;
    max-width: 340px;
    margin-bottom: 0;
  }
}
body .product__info-container div[role=status] {
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;
}
body .product__info-container .jdgm-prev-badge__text {
  color: #515151;
  font-family: "SF Pro Text";
  font-size: 17px;
  font-weight: 400;
  line-height: 23.8px;
  letter-spacing: 0.6px;
}
body .product__info-container .product-form__input {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  gap: 15px;
}
@media (max-width: 768px) {
  body .product__info-container .product-form__input {
    gap: 10px;
  }
}
body .product__info-container .product-form__input input[type=radio] + label {
  color: #212529;
  text-align: center;
  font-family: "DINEngschrift LT";
  font-size: 16px !important;
  font-weight: 400;
  line-height: 16px !important;
  letter-spacing: 1px;
  text-transform: uppercase;
  max-width: 48.4%;
  width: 100%;
  padding: 13.4px !important;
  margin: 0;
}
@media (max-width: 1080px) {
  body .product__info-container .product-form__input input[type=radio] + label {
    max-width: 48.3%;
  }
}
@media (max-width: 1022px) {
  body .product__info-container .product-form__input input[type=radio] + label {
    max-width: 48.2%;
  }
}
@media (max-width: 875px) {
  body .product__info-container .product-form__input input[type=radio] + label {
    max-width: 48%;
  }
}
@media (max-width: 768px) {
  body .product__info-container .product-form__input input[type=radio] + label {
    line-height: 22px !important;
    padding: 7.4px !important;
    max-width: 48.6%;
  }
}
@media (max-width: 376px) {
  body .product__info-container .product-form__input input[type=radio] + label {
    max-width: 48.5%;
  }
}
@media (max-width: 361px) {
  body .product__info-container .product-form__input input[type=radio] + label {
    max-width: 48.4%;
  }
}
body .product__info-container label .best-seller {
  left: -1px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  body .product__info-container label .best-seller {
    left: -1.5px;
  }
}
body .product__info-container .each_pack_subscribe {
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-decoration-line: underline;
  text-transform: capitalize;
  margin-top: 4px;
  font-family: "Roboto", sans-serif;
}
body .product__info-container .each_pack_subscribe + .each-pack {
  display: none;
}
@media (max-width: 768px) {
  body .product__info-container .each_pack_subscribe {
    margin-top: 0;
    line-height: 20px;
  }
}
body .product__info-container .each-pack {
  margin-top: 4px;
}
@media (max-width: 768px) {
  body .product__info-container .each-pack {
    margin-top: 0;
    line-height: 20px;
  }
}
body .product__info-container .product-form {
  margin: 0;
}
body .product__info-container .product-form .product-form__buttons {
  max-width: 100%;
}
body .product__info-container .product-form .product-form__buttons .product-form__submit.subscription-v2-submit-btn {
  width: 100%;
  max-width: 100%;
  min-height: 50px;
  margin: 0;
  border-radius: 40px;
  background: #ff3c81;
  color: #fff;
  text-align: center;
  font-family: "DINEngschrift LT" !important;
  font-size: 20px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
body .product__info-container .new_price_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
body .product__info-container .new_sale_price {
  color: #000;
  font-family: "Roboto", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
body .product__info-container .new_reg_price {
  color: #616267;
  font-family: "Roboto", sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1.3px;
  text-decoration: line-through;
  text-transform: uppercase;
  margin: 0;
}
body .product__info-container .percent_off {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  color: #000;
  font-family: "Roboto", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
body .product__info-container .percent_off svg {
  margin-top: 2px;
}
body .product__info-container .price--large {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}
body .product__info-container .price__container {
  margin: 0 !important;
  display: none !important;
}
body .product__info-container .price .price-item {
  font-family: "Roboto", sans-serif !important;
  font-size: 24px !important;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-decoration: unset;
  color: #000;
  margin: 0;
  text-transform: uppercase;
}
body .product__info-container .price--on-sale .price__badge-sale {
  font-family: "Roboto", sans-serif !important;
  font-size: 24px !important;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.5px;
  text-decoration: unset;
  color: #000;
  padding: 0 0 0 24px !important;
  margin: 0 !important;
  text-transform: uppercase;
  display: none !important;
}
body .product__info-container .price__badge-sale svg {
  left: -3px !important;
  top: 50% !important;
  transform: translateY(-50%);
}
body .product__info-container .pdp-fsa-logo {
  margin-top: 15px;
}
body .product__info-container .np-one-pack {
  max-width: 100% !important;
}
@media (max-width: 768px) {
  body .product__info-container .price__container {
    margin: 0;
  }
}
body .product__info-container .cPrice {
  padding: 0;
  color: #515151;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  display: none !important;
}
@media (max-width: 768px) {
  body .product__info-container .cPrice {
    line-height: 20px;
  }
}
@media (max-width: 768px) {
  body .social-proof {
    margin-bottom: 12px;
  }
}
body .social-proof .proof {
  color: #000;
  font-family: "SF Pro Text";
  font-size: 11px;
  font-weight: 400;
  line-height: 11px;
  letter-spacing: 0.6px;
  border-radius: 10px;
  border: 1px solid #c3c3c3;
  background: #f1f1f1;
  padding: 3.2px 6px;
}
body .chemical-free > .container {
  max-width: 100% !important;
  padding: 0 35px;
}
body .chemical-free .js-title {
  color: #0c0b0b !important;
  font-family: "DINEngschrift LT" !important;
  font-size: 67px;
  font-weight: 400;
  line-height: 60.97px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 20px 10px;
}
body .chemical-free .text-subhead {
  color: #515151;
  font-family: "SF Pro Text";
  font-size: 27px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0.6px;
}
body .chemical-free .text-violet h5 {
  color: #244899;
  font-family: "Inter", sans-serif;
  font-size: 26.953px;
  font-weight: 700;
  line-height: 36px;
}
body .chemical-free .text-violet p {
  color: #244899;
  font-family: "SF Pro Text";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0.6px;
  margin: 0;
}
body .sleep-heading {
  max-width: 100% !important;
  padding: 0 35px;
}

.new_subscription_block {
  border-radius: 6px;
  background: #f1f3f4;
  padding: 33px 15px 15px;
  margin: 5px 0 15px;
}
.new_subscription_block .plan_selection {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.new_subscription_block .plan_selection label {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 12px 17px;
  margin: 0;
  color: #717171;
  font-family: "Roboto", sans-serif !important;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 6px;
  border: 2px solid #d3d3d3;
  background: #fff;
  cursor: pointer;
}
.new_subscription_block .plan_selection label.subscribe_save_variant {
  position: relative;
}
.new_subscription_block .plan_selection label.subscribe_save_variant::before {
  content: "Save extra 15%";
  position: absolute;
  top: -19px;
  left: 50%;
  transform: translateX(-50%);
  width: -moz-max-content;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px 2px 8px;
  border-radius: 4px 4px 0px 0px;
  background: #1f4fc9;
  color: #fff;
  font-family: "DINEngschrift LT";
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 1;
}
.new_subscription_block .plan_selection input[type=radio] {
  display: none;
}
.new_subscription_block .plan_selection input[type=radio]:checked + label {
  color: #212529;
  border: 2px solid #1f4fc9;
  background: #fff;
}
.new_subscription_block .plan_comment {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #1f4fc9;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  line-height: 26px;
  text-decoration-line: underline;
  margin: 10px auto;
}
.new_subscription_block .plan_details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
  border-radius: 6px;
  background: #fff;
  padding: 15px 5px 15px 15px;
  margin: 0;
  list-style: none;
}
.new_subscription_block .plan_details li {
  position: relative;
  width: 48%;
  color: #000;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: normal;
  padding-left: 22px;
}
@media (min-width: 1230px) {
  .new_subscription_block .plan_details li:last-child {
    margin-top: -16px;
  }
}
@media (max-width: 1230px) {
  .new_subscription_block .plan_details li {
    width: 46%;
  }
}
.new_subscription_block .plan_details li::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 0;
  width: 13.9px;
  height: 13.9px;
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/checkmark_done_complete.svg) no-repeat center center;
  background-size: contain;
}
.new_subscription_block .plan_details.one_time_checked li:nth-child(2),
.new_subscription_block .plan_details.one_time_checked li:nth-child(4),
.new_subscription_block .plan_details.one_time_checked li:nth-child(5) {
  color: #c3c3c3;
}
.new_subscription_block .plan_details.one_time_checked li:nth-child(2)::before,
.new_subscription_block .plan_details.one_time_checked li:nth-child(4)::before,
.new_subscription_block .plan_details.one_time_checked li:nth-child(5)::before {
  content: "";
  background: url(https://conversionratestore.github.io/projects/buzzpatch/img/stop_icon.svg) no-repeat center center;
  background-size: contain;
}

.new_subscription_block + .rtx-subscription-dropdown {
  width: 100%;
  color: #0c0b0b;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: normal;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  background: #fff;
  outline: none;
  box-shadow: none;
  padding: 8px 12px;
  background-image: url(//www.natpat.com/cdn/shop/files/select-form-icon.svg?v=374583230437431762);
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: calc(100% - 8px) center;
  -webkit-appearance: none;
}
.new_subscription_block + .rtx-subscription-dropdown:disabled {
  color: #c3c3c3;
}
.new_subscription_block + .rtx-subscription-dropdown:focus-visible {
  outline-offset: 0 !important;
  outline: none !important;
}
.new_subscription_block + .rtx-subscription-dropdown option {
  background: #fff;
  padding: 8px 16px;
}
.new_subscription_block + .rtx-subscription-dropdown option:selected {
  background-color: blue;
  color: white;
}
.new_subscription_block + .rtx-subscription-dropdown option:hover {
  background-color: lightblue;
}

@media (max-width: 768px) {
  .sticky_block_visible #provesrc-widget-area #provesrc-notification-container {
    bottom: 150px !important;
  }
}
@media (max-width: 768px) and (max-width: 769px) {
  .sticky_block_visible #provesrc-widget-area #provesrc-notification-container {
    bottom: 100px !important;
  }
}
@media (max-width: 768px) {
  .sticky_block {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
    padding: 0 15px 24px;
    z-index: 1111;
  }
  .sticky_block .choose_your_product_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border-radius: 40px;
    background: #ff3c81;
    color: #fff;
    font-family: "DINEngschrift LT";
    font-size: 20px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  #newSubscriptionBlock {
    margin: 0 -15px;
    background: #f1f3f4;
    padding: 33px 15px 15px;
  }
  #newSubscriptionBlock .new_subscription_block {
    border-radius: 0;
    background: inherit;
    padding: 0;
    margin: 0 0 15px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_selection {
    gap: 10px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_selection label {
    padding: 11.2px 7px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_selection label.subscribe_save_variant::before {
    padding: 4px 8px 2px 8px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_comment {
    margin: 6px 0;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details {
    flex-direction: column;
    padding: 12px 17px;
    gap: 12px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li {
    width: 100%;
    line-height: 18px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li::before {
    top: 50%;
    transform: translateY(-50%);
    width: 13.9px;
    height: 13.9px;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li:nth-child(1) {
    order: 1;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li:nth-child(2) {
    order: 4;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li:nth-child(3) {
    order: 2;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li:nth-child(4) {
    order: 5;
  }
  #newSubscriptionBlock .new_subscription_block .plan_details li:nth-child(5) {
    order: 3;
  }
}
.custom_dropdown {
  position: relative;
  display: inline-block;
  width: 100%;
}
.custom_dropdown .dropdown_toggle {
  position: relative;
  width: 100%;
  text-align: left;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  background: #fff;
  padding: 8px 12px;
  cursor: pointer;
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.custom_dropdown .dropdown_toggle.disabled {
  pointer-events: none;
  color: #c3c3c3;
  opacity: 0.7;
}
.custom_dropdown .dropdown_toggle::after {
  content: "";
  position: absolute;
  background-image: url(//www.natpat.com/cdn/shop/files/select-form-icon.svg?v=374583230437431762);
  background-repeat: no-repeat;
  width: 24px;
  height: 24px;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.custom_dropdown .dropdown_toggle.active::after {
  transform: rotateX(180deg) translateY(50%);
}
.custom_dropdown .dropdown_menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  border: 2px solid #d3d3d3;
  background-color: #fff;
  z-index: 5;
  margin-top: 1px;
}
.custom_dropdown .dropdown_menu.show {
  display: block;
}
.custom_dropdown .text_transform {
  text-transform: lowercase;
}
.custom_dropdown .most_common {
  color: #717171;
}
.custom_dropdown .dropdown_item {
  padding: 5px 10px;
  color: #0c0b0b;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
}
.custom_dropdown .dropdown_item.selected {
  background: #1f4fc9;
  color: white;
}
.custom_dropdown .dropdown_item.selected .most_common {
  color: white;
}
.custom_dropdown .dropdown_item:hover {
  background: #1f4fc9;
  color: white;
}
.custom_dropdown .dropdown_item:hover .most_common {
  color: white;
}/*# sourceMappingURL=main.css.map */`, z = window.innerWidth < 768 ? "mobile" : "desktop";
  class E {
    constructor(n) {
      this.device = n, this.observer = null, this.init();
    }
    init() {
      k({ name: "NatPat: subscription Optimization", dev: "SKh" }), v("exp_sub_option"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${T}</style>`), this.changeTxtxMainBtn(), this.observePageChange(), this.device === "mobile" && this.renderStickyBlock();
    }
    changeTxtxMainBtn() {
      s(".product-form__buttons button").then((n) => {
        t(".new_txt_btn") || n.insertAdjacentHTML("afterbegin", '<div class="new_txt_btn">Add to cart</div>');
      });
    }
    replacePriceTxtHandler() {
      s(".cPrice span").then((n) => {
        s(".price__container").then((e) => {
          s(".product-form__submit span[data-rtx-subscription-price]").then((o) => {
            let r = setInterval(() => {
              o.textContent !== "" && (clearInterval(r), s(".price--on-sale .price__badge-sale").then((d) => {
                var l;
                const a = n.textContent;
                let c = "", p = "";
                t(".product-form__submit span[data-rtx-subscription-price]").classList.contains("hidden") || (c = t(".product-form__submit span[data-rtx-subscription-price]").textContent, p = "Тут %", console.log("Тут %")), t(".product-form__submit span[data-rtx-onetime-price]").classList.contains("hidden") || (c = t(".product-form__submit span[data-rtx-onetime-price]").textContent, p = (l = t(".price--on-sale .price__badge-sale")) == null ? void 0 : l.textContent.trim(), console.log(p, "percentOff")), t(".new_price_wrapper") || e.insertAdjacentHTML(
                  "beforebegin",
                  `<div class="new_price_wrapper">
                      <div class="new_reg_price">${a}</div>
                      <div class="new_sale_price">${c}</div>
                      <div class="percent_off">${g.percentIcon} ${p}</div>
                    </div>`
                );
              }));
            }, 300);
          });
        });
      });
    }
    observePageChange() {
      this.observer = new MutationObserver((e) => {
        var o, r;
        t(".rtx-subscription-unselected.np-one-pack.is-hidden") ? t("#newSubscriptionBlock") || this.renderNewSubscriptionBlock() : (o = t("#newSubscriptionBlock")) == null || o.remove(), t('[id="purchaseTypeSubscription"]').checked ? this.changeSubscribePricePacksHandler() : (r = t(".each_pack_subscribe")) == null || r.remove();
      });
      const n = { childList: !0, subtree: !0 };
      this.observer.observe(t("body"), n);
    }
    renderNewSubscriptionBlock() {
      s(".rtx-subscription-label__wrapper").then((n) => {
        t("#newSubscriptionBlock") || n.insertAdjacentHTML("afterend", C);
      }), s(".new_subscription_block").then((n) => {
        this.replacePriceTxtHandler(), this.changeSubscriptionPlanHandler(), this.renderCustomDropdown();
      }), console.log("renderNewSubscriptionBlock>>>>>>>>>>>>>>>>");
    }
    changeSubscriptionPlanHandler() {
      s(".plan_selection").then((n) => {
        console.log("plan_selection>>>>>>>>>>>>>>"), _(".plan_selection label").forEach((e) => {
          e.addEventListener("click", () => {
            var o, r;
            switch (console.log("label >>>>>>>>", e.getAttribute("for")), (o = t(".custom_dropdown")) == null || o.remove(), (r = t(".new_price_wrapper")) == null || r.remove(), e.getAttribute("for")) {
              case "oneTime":
                m("exp_sub_option_button_01", "One-Time", "Button", "Subscribe section"), t('[id="purchaseTypeOneTime"]').click(), t(".plan_details").classList.contains("one_time_checked") || t(".plan_details").classList.add("one_time_checked");
                break;
              case "subscribeSave":
                m("exp_sub_option_button_02", "Subscribe & Save", "Button", "Subscribe section"), t('[id="purchaseTypeSubscription"]').click(), t(".plan_details").classList.contains("one_time_checked") && t(".plan_details").classList.remove("one_time_checked");
                break;
            }
            this.renderCustomDropdown(), this.replacePriceTxtHandler();
          });
        });
      });
    }
    renderCustomDropdown() {
      s("#newSubscriptionBlock").then((n) => {
        t(".custom_dropdown") || n.insertAdjacentHTML("beforeend", L), this.renderOptions();
      });
    }
    renderOptions() {
      s(".rtx-subscription-dropdown option").then((n) => {
        s(".custom_dropdown").then((e) => {
          const o = t(".rtx-subscription-dropdown"), r = _(".rtx-subscription-dropdown option"), d = t(".dropdown_menu"), a = t(".dropdown_toggle");
          r.forEach((c) => {
            var f, h, b, w, y;
            let p = c.getAttribute("selected") !== null ? "selected" : "";
            const l = c.getAttribute("value");
            let u = (f = c.textContent) != null && f.includes("Every") ? `<b>Ship every:</b> <span class="text_transform">${(h = c.textContent) == null ? void 0 : h.split("Every ")[1]}</span>` : c.textContent;
            (b = c.textContent) != null && b.includes("(most common)") && (u = `<b>Ship every:</b> <span class="text_transform">${(w = c.textContent) == null ? void 0 : w.split("Every ")[1].split("(most common)")[0]}</span> <span class="most_common">(${(y = c.textContent) == null ? void 0 : y.split("(")[1]}</span>`), o && o.value === l && (a.innerHTML = `${u}`, p = "selected"), u && u.includes("One Time") && t('[id="purchaseTypeOneTime"]').checked && a.classList.add("disabled"), d.insertAdjacentHTML(
              "beforeend",
              `<div class="dropdown_item ${p}" data-value="${l}">${u}</div>`
            );
          }), this.changeCustomDropdownHandler(".custom_dropdown");
        });
      });
    }
    changeCustomDropdownHandler(n) {
      const e = t(n), o = e.querySelector(".dropdown_toggle"), r = e.querySelector(".dropdown_menu"), d = e.querySelectorAll(".dropdown_item"), a = _(".rtx-subscription-dropdown option");
      o.addEventListener("click", () => {
        m("exp_sub_option_dropdown_01", "Ship every", "Dropdown", "Subscribe section"), r.classList.toggle("show"), this.adjustDropdownPosition(r), o.classList.toggle("active");
      }), d.forEach((p) => {
        p.addEventListener("click", (l) => {
          var h;
          const u = l.currentTarget, f = u.getAttribute("data-value");
          d.forEach((b) => b.classList.remove("selected")), u.classList.add("selected"), r.style.top = "100%", o.innerHTML = u.innerHTML, r.classList.remove("show"), o.classList.remove("active"), console.log(`Selected value: ${f}`), m(
            "exp_sub_option_dropdown_02",
            `Selected value: ${(h = u.querySelector(".text_transform")) == null ? void 0 : h.textContent}`,
            "Dropdown",
            "Subscribe section"
          ), a.forEach((b) => {
            b.getAttribute("value") === f && (console.log(b.getAttribute("value") === f), b.closest("select") && (b.closest("select").value = f));
          });
        });
      }), document.addEventListener("click", (p) => {
        const l = p.target;
        e.contains(l) || (r.classList.remove("show"), o.classList.remove("active"), r.style.top = "100%");
      }), new IntersectionObserver(
        (p) => {
          p.forEach((l) => {
            l.isIntersecting || this.adjustDropdownPosition(r);
          });
        },
        {
          root: null,
          threshold: 1
        }
      ).observe(r);
    }
    adjustDropdownPosition(n) {
      const e = n.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight;
      e.bottom > o ? n.style.top = `-${e.height + 2}px` : n.style.top = "100%";
    }
    changeSubscribePricePacksHandler() {
      s("label .each-pack").then((n) => {
        _("label .each-pack").forEach((e) => {
          var o;
          (o = e.previousElementSibling) != null && o.classList.contains("each_pack_subscribe") || e.insertAdjacentHTML("beforebegin", '<span class="each_pack_subscribe">Тут буде ціна</span>');
        });
      });
    }
    // MOBILE
    renderStickyBlock() {
      s("body").then((n) => {
        t(".sticky_block") || n.insertAdjacentHTML("afterend", B), this.toggleStickyBlockVisibility(), this.clickStickyBtnHandler();
      });
    }
    toggleStickyBlockVisibility() {
      s("section.page-width").then(() => {
        s(".sticky_block").then(() => {
          const n = t(".sticky_block"), e = t("section.page-width");
          let o = _(".get-it");
          !_(".get-it") && _('[href="#pdpGetNow"]') && (o = _('[href="#pdpGetNow"]'));
          function r(a) {
            const c = a.getBoundingClientRect();
            return c.top < (window.innerHeight || document.documentElement.clientHeight) && c.bottom > 0 && c.left < (window.innerWidth || document.documentElement.clientWidth) && c.right > 0;
          }
          function d() {
            let a = !1;
            r(e) && (a = !0), o.forEach((c) => {
              r(c) && (a = !0);
            }), a ? (n.style.display = "none", t("body").classList.contains("sticky_block_visible") && t("body").classList.remove("sticky_block_visible")) : (n.style.display = "block", t("body").classList.add("sticky_block_visible"));
          }
          d(), console.log(o), window.addEventListener("scroll", d), window.addEventListener("resize", d);
        });
      });
    }
    clickStickyBtnHandler() {
      s(".choose_your_product_btn").then((n) => {
        n.addEventListener("click", () => {
          m("exp_sub_option_button_03", "Choose your product", "Button", "Sticky button"), x(0, t("#pdpGetNow .product__title")), window.innerWidth < 376 && x(10, t("variant-radios"));
        });
      });
    }
  }
  s(".rtx-subscription").then((i) => {
    new E(z);
  });
})();
//# sourceMappingURL=index.js.map
