(function() {
  "use strict";
  const m = (r, t, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: t,
      event_type: n,
      event_loc: o
    }), console.dir(`Event: ${r} | ${t} | ${n} | ${o}`);
  }, k = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, d = (r) => document.querySelectorAll(r), e = (r) => document.querySelector(r), v = async (r) => {
    const t = (n) => new Promise((o, c) => {
      const l = n.split(".").pop();
      if (l === "js") {
        if (Array.from(document.scripts).map((a) => a.src.toLowerCase()).includes(n.toLowerCase()))
          return console.log(`Script ${n} allready downloaded!`), o("");
        const i = document.createElement("script");
        i.src = n, i.onload = o, i.onerror = c, document.head.appendChild(i);
      } else if (l === "css") {
        if (Array.from(document.styleSheets).map((a) => {
          var b;
          return (b = a.href) == null ? void 0 : b.toLowerCase();
        }).includes(n.toLowerCase()))
          return console.log(`Style ${n} allready downloaded!`), o("");
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = n, i.onload = o, i.onerror = c, document.head.appendChild(i);
      }
    });
    for (const n of r)
      await t(n), console.log(`Loaded librari ${n}`);
    console.log("All libraries loaded!");
  }, C = (r, t = "variant_1") => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", r, t), console.log("set", r, t));
    }, 1e3);
  };
  function p(r) {
    return new Promise((t) => {
      if (document.querySelector(r))
        return t(document.querySelector(r));
      const n = new MutationObserver(() => {
        document.querySelector(r) && (t(document.querySelector(r)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(r) {
    r = r === void 0 ? {} : r;
    let t, n, o, c, l = (r == null ? void 0 : r.delay) || 50;
    function s() {
      t = null, c = 0;
    }
    return s(), function() {
      return n = window.scrollY, t != null && (c = n - t), t = n, clearTimeout(o), o = setTimeout(s, l), c;
    };
  })();
  function S(r) {
    return new Promise((t) => setTimeout(t, r));
  }
  const w = async (r, t) => {
    const n = r, c = (t == null ? void 0 : t.getBoundingClientRect().top) + window.pageYOffset - n;
    return window.scrollTo({
      top: c,
      behavior: "smooth"
    }), await S(800), !0;
  }, x = {
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
    ),
    tooltipIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <circle cx="12.5" cy="12" r="8" fill="#0091D7" />
      <path
        d="M11.8333 15.0523H13.1667V16.3856H11.8333V15.0523ZM10.5 8.98693C10.5 8.71678 10.5523 8.4597 10.6569 8.21569C10.7614 7.97168 10.9052 7.76253 11.0882 7.58824C11.2712 7.40523 11.4847 7.26144 11.7288 7.15686C11.9728 7.05229 12.2342 7 12.5131 7C12.8355 7 13.1275 7.06536 13.3889 7.19608C13.659 7.3268 13.8813 7.5098 14.0556 7.7451C14.1427 7.8671 14.2124 7.98039 14.2647 8.08497C14.3257 8.18954 14.3736 8.30283 14.4085 8.42484C14.4434 8.53813 14.4651 8.66885 14.4739 8.81699C14.4913 8.96514 14.5 9.13943 14.5 9.33987C14.5 9.56645 14.4956 9.75817 14.4869 9.91503C14.4869 10.0632 14.4782 10.1939 14.4608 10.3072C14.4434 10.4205 14.4216 10.5207 14.3954 10.6078C14.3693 10.6863 14.3344 10.7603 14.2908 10.8301L13.3889 12.3725C13.3279 12.4771 13.2756 12.5861 13.232 12.6993C13.1885 12.8039 13.1667 12.9172 13.1667 13.0392V14.085H11.8333V12.8693C11.8333 12.6776 11.8638 12.4946 11.9248 12.3203C11.9858 12.146 12.0643 11.976 12.1601 11.8105L12.9967 10.451C13.0664 10.3377 13.11 10.2157 13.1275 10.085C13.1536 9.95425 13.1667 9.82353 13.1667 9.69281V9C13.1667 8.81699 13.1013 8.66013 12.9706 8.52941C12.8486 8.39869 12.6961 8.33333 12.5131 8.33333C12.3562 8.33333 12.2037 8.38998 12.0556 8.50327C11.9074 8.61656 11.8333 8.78214 11.8333 9V9.75817H10.5V8.98693Z"
        fill="white"
      />
    </svg>
  `
    )
  }, L = {
    subscribe: `
  <div class='tooltip_block'>
  <p>Free delivery every one, two, or three months</p>
  <p>No fees. Skip or cancel anytime!</p>
  <ul>
  <li><p>You can easily change your subscription in your account.</p></li>
  <li><p>We'll always send you a reminder 5 days in advance of your subscription payment so that you can stay in control. Don't need anymore yet? Just hit the skip or cancel button! No fees.</p></li>
  </ul>
  </div>
  `
  }, B = (
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
      <div class="plan_comment">
        A choice that saves both time and money ${x.orangeArrowIcon}<span
          data-tooltip
          data-title="${L.subscribe}"
          >${x.tooltipIcon}</span
        >
      </div>
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
  ), T = (
    /* HTML */
    `
  <div class="custom_dropdown">
    <button class="dropdown_toggle">Select an option</button>
    <div class="dropdown_menu"></div>
  </div>
`
  ), z = (
    /* HTML */
    `
  <div class="sticky_block">
    <div class="choose_your_product_btn">Choose your product</div>
  </div>
`
  ), E = `.rtx-subscription-label__wrapper,
.product-form__submit img,
.product-form__submit span {
  display: none !important;
}

body.new_subscription_block_visible .price__container {
  margin: 0 !important;
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
.new_subscription_block .plan_comment [data-tooltip] {
  cursor: pointer;
}
.new_subscription_block .plan_comment [data-tippy-root] {
  right: -20px !important;
}
.new_subscription_block .plan_comment .tippy-box {
  background-color: #fff;
  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.1));
  max-width: 330px !important;
  border-radius: 15px;
}
.new_subscription_block .plan_comment .tippy-box .tippy-content {
  padding: 16px;
}
.new_subscription_block .plan_comment .tippy-box .tippy-content .tooltip_block p {
  color: #212529;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 8px;
  text-transform: initial;
  font-style: normal;
}
.new_subscription_block .plan_comment .tippy-box .tippy-content .tooltip_block ul {
  padding-left: 20px;
  margin: 0;
}
.new_subscription_block .plan_comment .tippy-box .tippy-content .tooltip_block ul li {
  color: #515151;
  list-style: disc;
  font-size: 11px;
}
.new_subscription_block .plan_comment .tippy-box .tippy-content .tooltip_block ul li + li {
  margin-top: 15px;
}
.new_subscription_block .plan_comment .tippy-box .tippy-content .tooltip_block ul li p {
  color: #515151;
  font-weight: 400;
  margin: 0;
}
.new_subscription_block .plan_comment .tippy-box[data-placement^=bottom] > .tippy-arrow, .new_subscription_block .plan_comment .tippy-box[data-placement^=top] > .tippy-arrow {
  display: block;
  color: white;
}
.new_subscription_block .plan_comment .tippy-box[data-placement^=bottom] > .tippy-arrow:before, .new_subscription_block .plan_comment .tippy-box[data-placement^=top] > .tippy-arrow:before {
  left: -20px !important;
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
}
@media (max-width: 768px) and (max-width: 376px) {
  #newSubscriptionBlock .new_subscription_block .plan_comment [data-tippy-root] {
    right: -10px !important;
  }
  #newSubscriptionBlock .new_subscription_block .plan_comment .tippy-box[data-placement^=bottom] > .tippy-arrow:before, #newSubscriptionBlock .new_subscription_block .plan_comment .tippy-box[data-placement^=top] > .tippy-arrow:before {
    left: -10px !important;
  }
}
@media (max-width: 768px) {
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
}/*# sourceMappingURL=main.css.map */`, H = window.innerWidth < 768 ? "mobile" : "desktop";
  class I {
    constructor(t) {
      this.device = t, this.observer = null, this.init();
    }
    init() {
      k({ name: "NatPat: subscription Optimization", dev: "SKh" }), C("exp_sub_option"), document.head.insertAdjacentHTML(
        "beforeend",
        '<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${E}</style>`), this.changeTxtxMainBtn(), this.observePageChange(), this.device === "mobile" && this.renderStickyBlock();
    }
    changeTxtxMainBtn() {
      p(".product-form__buttons button").then((t) => {
        e(".new_txt_btn") || t.insertAdjacentHTML("afterbegin", '<div class="new_txt_btn">Add to cart</div>');
      });
    }
    replacePriceTxtHandler() {
      p(".cPrice span").then((t) => {
        p(".price__container").then((n) => {
          p(".product-form__submit span[data-rtx-subscription-price]").then((o) => {
            let c = setInterval(() => {
              o.textContent !== "" && e("[data-percent]") && (clearInterval(c), p(".price--on-sale .price__badge-sale").then((l) => {
                var b;
                const s = t.textContent;
                let i = "", a = "";
                e(".product-form__submit span[data-rtx-subscription-price]").classList.contains("hidden") || (i = e(".product-form__submit span[data-rtx-subscription-price]").textContent, a = e("[data-percent]").getAttribute("data-percent"), console.log("Тут %")), e(".product-form__submit span[data-rtx-onetime-price]").classList.contains("hidden") || (i = e(".product-form__submit span[data-rtx-onetime-price]").textContent, a = (b = e(".price--on-sale .price__badge-sale")) == null ? void 0 : b.textContent.trim(), console.log(a, "percentOff")), e(".new_price_wrapper") || n.insertAdjacentHTML(
                  "beforebegin",
                  `<div class="new_price_wrapper">
                      <div class="new_reg_price">${s}</div>
                      <div class="new_sale_price">${i}</div>
                      <div class="percent_off">${x.percentIcon} ${a}</div>
                    </div>`
                );
              }));
            }, 300);
          });
        });
      });
    }
    observePageChange() {
      this.observer = new MutationObserver((n) => {
        var o, c;
        e(".rtx-subscription-unselected.np-one-pack.is-hidden") ? e("#newSubscriptionBlock") || (this.renderNewSubscriptionBlock(), e("body").classList.add("new_subscription_block_visible")) : ((o = e("#newSubscriptionBlock")) == null || o.remove(), e("body").classList.contains("new_subscription_block_visible") && e("body").classList.remove("new_subscription_block_visible")), e(".one_time_checked") ? (c = e(".each_pack_subscribe")) == null || c.remove() : this.changeSubscribePricePacksHandler();
      });
      const t = { childList: !0, subtree: !0 };
      this.observer.observe(e("body"), t);
    }
    renderNewSubscriptionBlock() {
      p(".rtx-subscription-label__wrapper").then((t) => {
        e("#newSubscriptionBlock") || t.insertAdjacentHTML("afterend", B);
      }), p(".new_subscription_block").then((t) => {
        this.replacePriceTxtHandler(), this.changeSubscriptionPlanHandler(), this.renderCustomDropdown();
      }), this.initTooltip(), console.log("renderNewSubscriptionBlock>>>>>>>>>>>>>>>>");
    }
    changeSubscriptionPlanHandler() {
      p(".plan_selection").then((t) => {
        d(".plan_selection label").forEach((n) => {
          n.addEventListener("click", () => {
            var o, c, l, s, i, a;
            switch (n.getAttribute("for")) {
              case "oneTime":
                if (m("exp_sub_option_button_01", "One-Time", "Button", "Subscribe section"), (o = n.previousElementSibling) != null && o.checked)
                  return;
                (c = e(".custom_dropdown")) == null || c.remove(), (l = e(".new_price_wrapper")) == null || l.remove(), e('[id="purchaseTypeOneTime"]').click(), e(".plan_details").classList.contains("one_time_checked") || e(".plan_details").classList.add("one_time_checked");
                break;
              case "subscribeSave":
                if (m("exp_sub_option_button_02", "Subscribe & Save", "Button", "Subscribe section"), (s = n.previousElementSibling) != null && s.checked)
                  return;
                (i = e(".custom_dropdown")) == null || i.remove(), (a = e(".new_price_wrapper")) == null || a.remove(), e('[id="purchaseTypeSubscription"]').click(), e(".plan_details").classList.contains("one_time_checked") && e(".plan_details").classList.remove("one_time_checked");
                break;
            }
            this.renderCustomDropdown(), this.replacePriceTxtHandler();
          });
        });
      });
    }
    renderCustomDropdown() {
      p("#newSubscriptionBlock").then((t) => {
        e(".custom_dropdown") || t.insertAdjacentHTML("beforeend", T), this.renderOptions(), console.log("renderCustomDropdown");
      });
    }
    renderOptions() {
      p(".rtx-subscription-dropdown option").then((t) => {
        p(".custom_dropdown").then((n) => {
          const o = e(".rtx-subscription-dropdown"), c = d(".rtx-subscription-dropdown option"), l = e(".dropdown_menu"), s = e(".dropdown_toggle");
          c.forEach((i) => {
            var f, h, _, g, y;
            let a = i.getAttribute("selected") !== null ? "selected" : "";
            const b = i.getAttribute("value");
            let u = (f = i.textContent) != null && f.includes("Every") ? `<b>Ship every:</b> <span class="text_transform">${(h = i.textContent) == null ? void 0 : h.split("Every ")[1]}</span>` : i.textContent;
            (_ = i.textContent) != null && _.includes("(most common)") && (u = `<b>Ship every:</b> <span class="text_transform">${(g = i.textContent) == null ? void 0 : g.split("Every ")[1].split("(most common)")[0]}</span> <span class="most_common">(${(y = i.textContent) == null ? void 0 : y.split("(")[1]}</span>`), o && o.value === b && (s.innerHTML = `${u}`, a = "selected"), e(".one_time_checked") && s.classList.add("disabled"), l.insertAdjacentHTML(
              "beforeend",
              `<div class="dropdown_item ${a}" data-value="${b}">${u}</div>`
            );
          }), this.changeCustomDropdownHandler(".custom_dropdown");
        });
      });
    }
    changeCustomDropdownHandler(t) {
      const n = e(t), o = n.querySelector(".dropdown_toggle"), c = n.querySelector(".dropdown_menu"), l = n.querySelectorAll(".dropdown_item"), s = d(".rtx-subscription-dropdown option");
      o.addEventListener("click", () => {
        m("exp_sub_option_dropdown_01", "Ship every", "Dropdown", "Subscribe section"), c.classList.toggle("show"), this.adjustDropdownPosition(c), o.classList.toggle("active");
      }), l.forEach((a) => {
        a.addEventListener("click", (b) => {
          var h;
          const u = b.currentTarget, f = u.getAttribute("data-value");
          l.forEach((_) => _.classList.remove("selected")), u.classList.add("selected"), c.style.top = "100%", o.innerHTML = u.innerHTML, c.classList.remove("show"), o.classList.remove("active"), m(
            "exp_sub_option_dropdown_02",
            `Selected value: ${(h = u.querySelector(".text_transform")) == null ? void 0 : h.textContent}`,
            "Dropdown",
            "Subscribe section"
          ), s.forEach((_) => {
            _.getAttribute("value") === f && _.closest("select") && (_.closest("select").value = f);
          });
        });
      }), document.addEventListener("click", (a) => {
        const b = a.target;
        n.contains(b) || (c.classList.remove("show"), o.classList.remove("active"), c.style.top = "100%");
      }), new IntersectionObserver(
        (a) => {
          a.forEach((b) => {
            b.isIntersecting || this.adjustDropdownPosition(c);
          });
        },
        {
          root: null,
          threshold: 1
        }
      ).observe(c);
    }
    adjustDropdownPosition(t) {
      const n = t.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight;
      n.bottom > o ? t.style.top = `-${n.height + 2}px` : t.style.top = "100%";
    }
    changeSubscribePricePacksHandler() {
      p("label .each-pack[data-subscribe]").then((t) => {
        d("label .each-pack").forEach((n) => {
          var o;
          n.closest('label[data-pack="1"]') || (o = n.previousElementSibling) != null && o.classList.contains("each_pack_subscribe") || n.insertAdjacentHTML(
            "beforebegin",
            `<span class="each_pack_subscribe">${n.getAttribute("data-subscribe")}</span>`
          );
        });
      });
    }
    initTooltip() {
      v([
        "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"
      ]).then(async () => {
        let t = setInterval(() => {
          typeof tippy == "function" && e("[data-tooltip]") && (clearInterval(t), d("[data-tooltip]").forEach((n) => {
            tippy(n, {
              content: n.getAttribute("data-title"),
              // trigger: 'click',
              allowHTML: !0,
              arrow: !0,
              arrowType: "round",
              appendTo: function() {
                return n.closest(".plan_comment");
              },
              placement: "bottom-end",
              interactive: !0,
              onShow(o) {
                m(
                  "exp_sub_option_tooltip_01",
                  "A choice that saves both time and money",
                  "Visibility",
                  "Subscribe section"
                );
              }
            });
          }));
        }, 100);
      });
    }
    // MOBILE
    renderStickyBlock() {
      p("body").then((t) => {
        e(".sticky_block") || t.insertAdjacentHTML("afterend", z), p(".sticky_block").then((n) => {
          let o = setInterval(() => {
            d("a.get-it") && d("a.get-it").length > 0 && (clearInterval(o), this.toggleStickyBlockVisibility("a.get-it"));
          }, 300), c = setInterval(() => {
            d("a.scroll-to-checkout") && d("a.scroll-to-checkout").length > 0 && (clearInterval(c), this.toggleStickyBlockVisibility("a.scroll-to-checkout"));
          }, 300), l = setInterval(() => {
            d("a.get-it-now") && d("a.get-it-now").length > 0 && (clearInterval(l), this.toggleStickyBlockVisibility("a.get-it-now"));
          }, 300), s = setInterval(() => {
            window.location.pathname.match("focuspatch-focus-enhancing-sticker") && d('a[href="#pdpGetNow"]') && d('a[href="#pdpGetNow"]').length > 0 && (clearInterval(s), this.toggleStickyBlockVisibility('a[href="#pdpGetNow"]'));
          }, 300);
          this.clickStickyBtnHandler();
        });
      });
    }
    toggleStickyBlockVisibility(t) {
      p("section.page-width").then(() => {
        p(".sticky_block").then(() => {
          const n = e(".sticky_block"), o = e("section.page-width");
          let c = d(t);
          function l(i) {
            const a = i.getBoundingClientRect();
            return a.top < (window.innerHeight || document.documentElement.clientHeight) && a.bottom > 0 && a.left < (window.innerWidth || document.documentElement.clientWidth) && a.right > 0;
          }
          function s() {
            let i = !1;
            l(o) && (i = !0), c.forEach((a) => {
              l(a) && (i = !0);
            }), i ? (n.style.display = "none", e("body").classList.contains("sticky_block_visible") && e("body").classList.remove("sticky_block_visible")) : (n.style.display = "block", e("body").classList.add("sticky_block_visible"));
          }
          s(), window.addEventListener("scroll", s), window.addEventListener("resize", s);
        });
      });
    }
    clickStickyBtnHandler() {
      p(".choose_your_product_btn").then((t) => {
        t.addEventListener("click", () => {
          m("exp_sub_option_button_03", "Choose your product", "Button", "Sticky button"), w(0, e("#pdpGetNow .product__title")), window.innerWidth < 376 && w(10, e("variant-radios"));
        });
      });
    }
  }
  p(".rtx-subscription").then((r) => {
    new I(H);
  });
})();
//# sourceMappingURL=index.js.map
