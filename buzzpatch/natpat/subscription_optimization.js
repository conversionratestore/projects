(function() {
  "use strict";
  const m = (o, n, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: n,
      event_type: t,
      event_loc: i
    }), console.dir(`Event: ${o} | ${n} | ${t} | ${i}`);
  }, y = ({ name: o, dev: n }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, h = (o) => document.querySelectorAll(o), e = (o) => document.querySelector(o), k = (o, n = "variant_1") => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", o, n), console.log("set", o, n));
    }, 1e3);
  };
  function s(o) {
    return new Promise((n) => {
      if (document.querySelector(o))
        return n(document.querySelector(o));
      const t = new MutationObserver(() => {
        document.querySelector(o) && (n(document.querySelector(o)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(o) {
    o = o === void 0 ? {} : o;
    let n, t, i, r, p = (o == null ? void 0 : o.delay) || 50;
    function a() {
      n = null, r = 0;
    }
    return a(), function() {
      return t = window.scrollY, n != null && (r = t - n), n = t, clearTimeout(i), i = setTimeout(a, p), r;
    };
  })();
  function v(o) {
    return new Promise((n) => setTimeout(n, o));
  }
  const x = async (o, n) => {
    const t = o, r = (n == null ? void 0 : n.getBoundingClientRect().top) + window.pageYOffset - t;
    return window.scrollTo({
      top: r,
      behavior: "smooth"
    }), await v(800), !0;
  }, S = (
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
      <div class="plan_comment">A choice that saves both time and money ${{
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
      )
    }.orangeArrowIcon}</div>
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
  ), C = (
    /* HTML */
    `
  <div class="sticky_block">
    <div class="choose_your_product_btn">Choose your product</div>
  </div>
`
  ), B = `.rtx-subscription-label__wrapper,
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
body .product__info-container .new_sale_rice {
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
}/*# sourceMappingURL=main.css.map */`, T = window.innerWidth < 768 ? "mobile" : "desktop";
  class z {
    constructor(n) {
      this.device = n, this.observer = null, this.init();
    }
    init() {
      y({ name: "NatPat: subscription Optimization", dev: "SKh" }), k("exp_sub_option"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${B}</style>`), this.changeTxtxMainBtn(), this.observePageChange(), this.device === "mobile" && this.renderStickyBlock();
    }
    changeTxtxMainBtn() {
      s(".product-form__buttons button").then((n) => {
        e(".new_txt_btn") || n.insertAdjacentHTML("afterbegin", '<div class="new_txt_btn">Add to cart</div>');
      });
    }
    replacePriceTxtHandler() {
      s(".cPrice span").then((n) => {
        s(".price__container").then((t) => {
          const i = n.textContent;
          let r = "";
          e(".product-form__submit span[data-rtx-subscription-price]").classList.contains("hidden") || (r = e(".product-form__submit span[data-rtx-subscription-price]").textContent), e(".product-form__submit span[data-rtx-onetime-price]").classList.contains("hidden") || (r = e(".product-form__submit span[data-rtx-onetime-price]").textContent), console.log(r, "salePrice"), e(".new_price_wrapper") || t.insertAdjacentHTML(
            "beforebegin",
            `<div class="new_price_wrapper">
              <div class="new_reg_price">${i}</div>
              <div class="new_sale_rice">${r}</div>
            </div>`
          );
        });
      });
    }
    observePageChange() {
      this.observer = new MutationObserver((t) => {
        var i;
        e(".rtx-subscription-unselected.np-one-pack.is-hidden") ? e("#newSubscriptionBlock") || this.renderNewSubscriptionBlock() : (i = e("#newSubscriptionBlock")) == null || i.remove();
      });
      const n = { childList: !0, subtree: !0 };
      this.observer.observe(e("body"), n);
    }
    renderNewSubscriptionBlock() {
      s(".rtx-subscription-label__wrapper").then((n) => {
        e("#newSubscriptionBlock") || n.insertAdjacentHTML("afterend", S);
      }), s(".new_subscription_block").then((n) => {
        this.replacePriceTxtHandler(), this.changeSubscriptionPlanHandler(), this.renderCustomDropdown();
      }), console.log("renderNewSubscriptionBlock>>>>>>>>>>>>>>>>");
    }
    changeSubscriptionPlanHandler() {
      s(".plan_selection").then((n) => {
        console.log("plan_selection>>>>>>>>>>>>>>"), h(".plan_selection label").forEach((t) => {
          t.addEventListener("click", () => {
            var i, r;
            switch (console.log("label >>>>>>>>", t.getAttribute("for")), (i = e(".custom_dropdown")) == null || i.remove(), (r = e(".new_price_wrapper")) == null || r.remove(), t.getAttribute("for")) {
              case "oneTime":
                m("exp_sub_option_button_01", "One-Time", "Button", "Subscribe section"), e('[id="purchaseTypeOneTime"]').click(), e(".plan_details").classList.contains("one_time_checked") || e(".plan_details").classList.add("one_time_checked");
                break;
              case "subscribeSave":
                m("exp_sub_option_button_02", "Subscribe & Save", "Button", "Subscribe section"), e('[id="purchaseTypeSubscription"]').click(), e(".plan_details").classList.contains("one_time_checked") && e(".plan_details").classList.remove("one_time_checked");
                break;
            }
            this.renderCustomDropdown(), this.replacePriceTxtHandler();
          });
        });
      });
    }
    renderCustomDropdown() {
      s("#newSubscriptionBlock").then((n) => {
        e(".custom_dropdown") || n.insertAdjacentHTML("beforeend", L), this.renderOptions();
      });
    }
    renderOptions() {
      s(".rtx-subscription-dropdown option").then((n) => {
        s(".custom_dropdown").then((t) => {
          const i = e(".rtx-subscription-dropdown"), r = h(".rtx-subscription-dropdown option"), p = e(".dropdown_menu"), a = e(".dropdown_toggle");
          r.forEach((c) => {
            var _, f, l, w, g;
            let u = c.getAttribute("selected") !== null ? "selected" : "";
            const b = c.getAttribute("value");
            let d = (_ = c.textContent) != null && _.includes("Every") ? `<b>Ship every:</b> <span class="text_transform">${(f = c.textContent) == null ? void 0 : f.split("Every ")[1]}</span>` : c.textContent;
            (l = c.textContent) != null && l.includes("(most common)") && (d = `<b>Ship every:</b> <span class="text_transform">${(w = c.textContent) == null ? void 0 : w.split("Every ")[1].split("(most common)")[0]}</span> <span class="most_common">(${(g = c.textContent) == null ? void 0 : g.split("(")[1]}</span>`), i && i.value === b && (a.innerHTML = `${d}`, u = "selected"), d && d.includes("One Time") && a.classList.add("disabled"), p.insertAdjacentHTML(
              "beforeend",
              `<div class="dropdown_item ${u}" data-value="${b}">${d}</div>`
            );
          }), this.changeCustomDropdownHandler(".custom_dropdown");
        });
      });
    }
    changeCustomDropdownHandler(n) {
      const t = e(n), i = t.querySelector(".dropdown_toggle"), r = t.querySelector(".dropdown_menu"), p = t.querySelectorAll(".dropdown_item"), a = h(".rtx-subscription-dropdown option");
      i.addEventListener("click", () => {
        m("exp_sub_option_dropdown_01", "Ship every", "Dropdown", "Subscribe section"), r.classList.toggle("show"), this.adjustDropdownPosition(r), i.classList.toggle("active");
      }), p.forEach((u) => {
        u.addEventListener("click", (b) => {
          var f;
          const d = b.currentTarget, _ = d.getAttribute("data-value");
          p.forEach((l) => l.classList.remove("selected")), d.classList.add("selected"), r.style.top = "100%", i.innerHTML = d.innerHTML, r.classList.remove("show"), i.classList.remove("active"), console.log(`Selected value: ${_}`), m(
            "exp_sub_option_dropdown_02",
            `Selected value: ${(f = d.querySelector(".text_transform")) == null ? void 0 : f.textContent}`,
            "Dropdown",
            "Subscribe section"
          ), a.forEach((l) => {
            l.getAttribute("value") === _ && (console.log(l.getAttribute("value") === _), l.closest("select") && (l.closest("select").value = _));
          });
        });
      }), document.addEventListener("click", (u) => {
        const b = u.target;
        t.contains(b) || (r.classList.remove("show"), i.classList.remove("active"), r.style.top = "100%");
      }), new IntersectionObserver(
        (u) => {
          u.forEach((b) => {
            b.isIntersecting || this.adjustDropdownPosition(r);
          });
        },
        {
          root: null,
          threshold: 1
        }
      ).observe(r);
    }
    adjustDropdownPosition(n) {
      const t = n.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight;
      t.bottom > i ? n.style.top = `-${t.height + 2}px` : n.style.top = "100%";
    }
    // MOBILE
    renderStickyBlock() {
      s("body").then((n) => {
        e(".sticky_block") || n.insertAdjacentHTML("afterend", C), this.toggleStickyBlockVisibility(), this.clickStickyBtnHandler();
      });
    }
    toggleStickyBlockVisibility() {
      s("section.page-width").then(() => {
        s(".sticky_block").then(() => {
          const n = document.querySelector(".sticky_block"), t = document.querySelector("section.page-width"), i = document.querySelectorAll(".get-it");
          function r(a) {
            const c = a.getBoundingClientRect();
            return c.top < (window.innerHeight || document.documentElement.clientHeight) && c.bottom > 0 && c.left < (window.innerWidth || document.documentElement.clientWidth) && c.right > 0;
          }
          function p() {
            let a = !1;
            r(t) && (a = !0), i.forEach((c) => {
              r(c) && (a = !0);
            }), a ? (n.style.display = "none", e("body").classList.contains("sticky_block_visible") && e("body").classList.remove("sticky_block_visible")) : (n.style.display = "block", e("body").classList.add("sticky_block_visible"));
          }
          p(), window.addEventListener("scroll", p), window.addEventListener("resize", p);
        });
      });
    }
    clickStickyBtnHandler() {
      s(".choose_your_product_btn").then((n) => {
        n.addEventListener("click", () => {
          m("exp_sub_option_button_03", "Choose your product", "Button", "Sticky button"), x(0, e("#pdpGetNow .product__title")), window.innerWidth < 376 && x(10, e("variant-radios"));
        });
      });
    }
  }
  s(".rtx-subscription").then((o) => {
    new z(T);
  });
})();
//# sourceMappingURL=index.js.map
