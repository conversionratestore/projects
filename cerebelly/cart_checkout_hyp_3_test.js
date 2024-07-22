(function() {
  "use strict";
  const h = (r, e, t, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: a
    }), console.dir(`Event: ${r} | ${e} | ${t} | ${a}`);
  }, d = (r) => document.querySelectorAll(r), n = (r) => document.querySelector(r), z = async (r) => {
    const e = (t) => new Promise((a, l) => {
      const c = t.split(".").pop();
      if (c === "js") {
        if (Array.from(document.scripts).map((p) => p.src.toLowerCase()).includes(t.toLowerCase()))
          return console.log(`Script ${t} allready downloaded!`), a("");
        const o = document.createElement("script");
        o.src = t, o.onload = a, o.onerror = l, document.head.appendChild(o);
      } else if (c === "css") {
        if (Array.from(document.styleSheets).map((p) => {
          var f;
          return (f = p.href) == null ? void 0 : f.toLowerCase();
        }).includes(t.toLowerCase()))
          return console.log(`Style ${t} allready downloaded!`), a("");
        const o = document.createElement("link");
        o.rel = "stylesheet", o.href = t, o.onload = a, o.onerror = l, document.head.appendChild(o);
      }
    });
    for (const t of r)
      await e(t), console.log(`Loaded librari ${t}`);
    console.log("All libraries loaded!");
  }, P = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  };
  function i(r) {
    return new Promise((e) => {
      if (document.querySelector(r))
        return e(document.querySelector(r));
      const t = new MutationObserver(() => {
        document.querySelector(r) && (e(document.querySelector(r)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(r) {
    r = r === void 0 ? {} : r;
    let e, t, a, l, c = (r == null ? void 0 : r.delay) || 50;
    function s() {
      e = null, l = 0;
    }
    return s(), function() {
      return t = window.scrollY, e != null && (l = t - e), e = t, clearTimeout(a), a = setTimeout(s, c), l;
    };
  })();
  function M(r) {
    return new Promise((e) => setTimeout(e, r));
  }
  const H = async (r, e) => {
    const t = r, l = (e == null ? void 0 : e.getBoundingClientRect().top) + window.pageYOffset - t;
    return window.scrollTo({
      top: l,
      behavior: "smooth"
    }), await M(800), !0;
  }, _ = "https://conversionratestore.github.io/projects/cerebelly/img/", u = {
    tickCircleIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
      <path
        d="M11.4999 1.8335C6.44909 1.8335 2.33325 5.94933 2.33325 11.0002C2.33325 16.051 6.44909 20.1668 11.4999 20.1668C16.5508 20.1668 20.6666 16.051 20.6666 11.0002C20.6666 5.94933 16.5508 1.8335 11.4999 1.8335ZM15.8816 8.89183L10.6841 14.0893C10.5558 14.2177 10.3816 14.291 10.1983 14.291C10.0149 14.291 9.84075 14.2177 9.71242 14.0893L7.11825 11.4952C6.85242 11.2293 6.85242 10.7893 7.11825 10.5235C7.38409 10.2577 7.82409 10.2577 8.08992 10.5235L10.1983 12.6318L14.9099 7.92016C15.1758 7.65433 15.6158 7.65433 15.8816 7.92016C16.1474 8.186 16.1474 8.61683 15.8816 8.89183Z"
        fill="#00865A"
      />
    </svg>
  `
    ),
    infoCircleIcon: `
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
      <path
        d='M9 1.5C13.125 1.5 16.5 4.875 16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5Z'
        stroke='white'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M9 12V8.25' stroke='white' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round' />
      <path
        d='M8.99609 5.3999H9.00283'
        stroke='white'
        stroke-width='1.4'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  `,
    arrowWhiteIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
      <path
        d="M12.2769 4.44951L8.04411 0.21672C7.97447 0.146501 7.89161 0.0907677 7.80032 0.0527335C7.70902 0.0146993 7.6111 -0.00488281 7.5122 -0.00488281C7.41331 -0.00488281 7.31539 0.0146993 7.22409 0.0527335C7.1328 0.0907677 7.04994 0.146501 6.9803 0.21672C6.84076 0.357085 6.76244 0.546963 6.76244 0.744882C6.76244 0.942802 6.84076 1.13268 6.9803 1.27305L9.97696 4.26971H1.24917C1.05048 4.26971 0.859922 4.34864 0.719426 4.48914C0.57893 4.62964 0.5 4.82019 0.5 5.01888C0.5 5.21757 0.57893 5.40813 0.719426 5.54862C0.859922 5.68912 1.05048 5.76805 1.24917 5.76805H9.93951L6.94284 8.72726C6.80276 8.86833 6.72446 9.05927 6.72516 9.25807C6.72586 9.45687 6.80551 9.64725 6.94658 9.78733C7.08765 9.92741 7.27859 10.0057 7.4774 10.005C7.6762 10.0043 7.86658 9.92465 8.00666 9.78358L12.2395 5.55079C12.3179 5.48326 12.3816 5.40019 12.4263 5.30683C12.4711 5.21347 12.496 5.11184 12.4996 5.00836C12.5031 4.90488 12.4851 4.8018 12.4468 4.70561C12.4085 4.60942 12.3506 4.52222 12.2769 4.44951Z"
        fill="white"
      />
    </svg>
  `
    ),
    arrowBlueIcon: (
      /* HTML */
      `
    <svg
      class="arrow_blue_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
    >
      <g clip-path="url(#clip0_312_2183)">
        <path d="M1.645 0L7 5.34333L12.355 0L14 1.645L7 8.645L0 1.645L1.645 0Z" fill="#15206B" />
      </g>
      <defs>
        <clipPath id="clip0_312_2183">
          <rect width="14" height="9" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    fedExIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="13" viewBox="0 0 40 13" fill="none">
  <g clip-path="url(#clip0_313_3285)">
    <path d="M35.9269 11.9079L34.3355 10.1228L32.7587 11.9079H29.4414L32.684 8.26378L29.4414 4.61914H32.8626L34.4692 6.38986L36.016 4.61914H39.3186L36.0908 8.24866L39.3628 11.9079H35.9269Z" fill="#F47920"/>
    <path d="M23.0679 11.9079V0.42627H29.4413V2.98539H25.7674V4.61907H29.4413V7.08147H25.7674V9.34131H29.4413V11.9079H23.0679Z" fill="#F47920"/>
    <path d="M20.3791 0.42627V5.12499H20.35C19.7544 4.44075 19.0111 4.20291 18.1485 4.20291C16.3807 4.20291 15.0496 5.40483 14.5819 6.99291C14.0491 5.24307 12.6744 4.17027 10.6363 4.17027C8.98124 4.17027 7.6742 4.91331 6.99188 6.12363V4.61907H3.57068V2.98539H7.30436V0.42627H0.520996V11.9079H3.57068V7.08147H6.61076C6.52004 7.43595 6.47156 7.81563 6.47156 8.21595C6.47156 10.6111 8.30132 12.2916 10.6365 12.2916C12.6002 12.2916 13.894 11.3698 14.5785 9.68931H11.9649C11.6112 10.1943 11.3428 10.3443 10.6365 10.3443C9.81692 10.3443 9.11036 9.62931 9.11036 8.78115H14.4321C14.6632 10.6841 16.145 12.3247 18.1783 12.3247C19.0552 12.3247 19.8592 11.893 20.3503 11.1641H20.3793V11.9076H23.0683V0.42627H20.3791ZM9.19484 7.11579C9.36476 6.38691 9.92996 5.91003 10.6365 5.91003C11.4136 5.91003 11.9505 6.37227 12.0916 7.11579H9.19484ZM18.7478 10.1599C17.7568 10.1599 17.1408 9.23643 17.1408 8.27235C17.1408 7.24203 17.6769 6.25083 18.7478 6.25083C19.8585 6.25083 20.3008 7.24203 20.3008 8.27235C20.3008 9.24987 19.8321 10.1599 18.7478 10.1599Z" fill="#472F92"/>
  </g>
  <defs>
    <clipPath id="clip0_313_3285">
      <rect width="38.88" height="12" fill="white" transform="translate(0.520996 0.42627)"/>
    </clipPath>
  </defs>
</svg>`
  }, E = {
    flavorGuarantee: `
  <div class='tooltip_block'>
    ${u.infoCircleIcon}
    <div>
      <h3>Don’t like a pouch flavor?</h3>
      <p>No sweat! Reach out to us at support@cerebelly.com and we’ll send three new ones free of charge.</p>
    </div>
  </div>
  `
  }, $ = (
    /* HTML */
    `
  <div class="free_shipping_block">
    ${u.tickCircleIcon}
    <p>Congtatulations! You get <span class="accent_color_green">Free shipping</span></p>
  </div>
`
  ), A = (
    /* HTML */
    `
  <div class="flavor_guarantee_block">
    <div class="img_wrapper">
      <img src="${_}flavor_guarantee_img.png" alt="child" />
    </div>
    <div class="info_wrapper">
      <h3>Flavor Guarantee</h3>
      <p>
        <span>Not happy with a flavor?</span>
        <span
          >Try 3 new ones <b>for FREE.</b>
          <span data-tooltip data-title="${E.flavorGuarantee}" class="learn_more_btn">Learn more</span></span
        >
      </p>
    </div>
  </div>
`
  ), q = (
    /* HTML */
    `
  <div class="sticky_block">
    <div class="total_box"></div>
    <button class="proceed_to_checkout_btn">Proceed to checkout ${u.arrowWhiteIcon}</button>
  </div>
`
  ), B = (
    /* HTML */
    `
  <div class="order_summary_block">
    <ul class="products_list"></ul>
  </div>
`
  ), I = (r, e, t, a, l, c) => (
    /* HTML */
    `
    <li class="products_item">
      <div class="img_wrapper">
        <img src=${r} alt="photo" />
      </div>
      <div class="item_info">
        <div>
          <h3>${e}</h3>
          <div class="quantity_packs_info">
            <span class="items_count">${t}</span>
            <span>|</span>
            <span class="cadence_txt">${a}</span>
          </div>
          ${c === 15 ? '<div class="subscribe_txt">Subscribe & Save 15%</div>' : ""}
        </div>
        <div class="price_wrapper">
          ${c === 15 ? `<span class="price_txt green_color">${l}</span>` : `<span class="price_txt">${l}</span>`}
        </div>
      </div>
    </li>
  `
  ), O = (
    /* HTML */
    `
  <div class="pay_now_txt_block">
    <p>
      By clicking "Pay now", you agree to our
      <a class="terms_sale_link" href="https://cerebelly.com/terms-sale" target="_blank" rel="noopener noreferrer"
        >Terms and Conditions</a
      >
      and
      <a class="privacy_link" href="https://cerebelly.com/privacy" target="_blank" rel="noopener noreferrer"
        >Privacy Policy</a
      >.
    </p>
  </div>
`
  ), F = (r, e) => (
    /* HTML */
    `
    <div class="new_shipping_block">
      <input class="custom_radio" value="" type="radio" name="shipping" id="standartShippingVar" />
      <label for="standartShippingVar">
        <div class="radio_info">
          <div class="radio_txt_box">
            <span class="new_custom_radio"></span>
            <span class="radio_txt">Standart shipping</span>
            <span class="shipping_txt accent_color_green">${r}</span>
          </div>
        </div>
        <div class="radio_days">
          <span>5-7 days</span>
          ${u.fedExIcon}
          <!-- <img src="${_}shipping_img.png" alt="shipping img" /> -->
        </div>
      </label>

      <input class="custom_radio" value="" type="radio" name="shipping" id="expeditedShippingVar" />
      <label for="expeditedShippingVar">
        <div class="radio_info">
          <div class="radio_txt_box">
            <span class="new_custom_radio"></span>
            <span class="radio_txt">Expedited shipping</span>
            <span class="shipping_txt">${e}</span>
          </div>
        </div>
        <div class="radio_days">
          <span>1-3 days</span>
          ${u.fedExIcon}
          <!-- <img src="${_}shipping_img.png" alt="shipping img" /> -->
        </div>
      </label>
    </div>
  `
  ), V = (r, e, t) => (
    /* HTML */
    `
    <div class="new_shipping_txt_block">
      <span class="txt_name">${e}</span>
      <span class="txt_price ${t}">${r}</span>
    </div>
  `
  ), N = (
    /* HTML */
    `
  <div class="order_summary_block_mobile">
    <div class="order_summary_header">
      <p class="order_summary_toggle"><span>Show order summary</span> ${u.arrowBlueIcon}</p>
      <p class="price_total">
        <span class="price_total_strikethrough"></span>
        <span class="price_order_total"></span>
      </p>
    </div>
    <div class="order_summary_body"></div>
  </div>
`
  ), D = `.accent_color_green {
  color: #00865a;
  font-weight: 700;
  letter-spacing: normal;
}
@media (max-width: 768px) {
  .accent_color_green {
    line-height: 20px;
  }
}

.free_shipping_block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #c7efdb;
  padding: 8px 12px;
  margin: 0 0 16px;
}
@media (max-width: 768px) {
  .free_shipping_block {
    gap: 6px;
    margin: 0 0 8px;
    border-radius: 10px;
  }
}
.free_shipping_block svg {
  width: 22px;
  height: 22px;
  flex: 0 0 22px;
}
@media (max-width: 768px) {
  .free_shipping_block svg {
    width: 18px;
    height: 18px;
    flex: 0 0 18px;
  }
}
.free_shipping_block p {
  color: #15206b;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.64px;
  margin: 0;
}
@media (max-width: 768px) {
  .free_shipping_block p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.56px;
  }
}

.flavor_guarantee_block {
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  background: #ffe7e4;
  padding: 8px;
  margin: 0 0 16px;
}
@media (max-width: 768px) {
  .flavor_guarantee_block {
    gap: 8px;
    margin: 0 0 12px;
  }
}
.flavor_guarantee_block .img_wrapper {
  max-width: 72px;
  max-height: 73px;
  width: 100%;
  height: 100%;
}
.flavor_guarantee_block .img_wrapper img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.flavor_guarantee_block .info_wrapper > h3 {
  color: #fc4d38;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.56px;
}
.flavor_guarantee_block .info_wrapper > p {
  color: #15206b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.56px;
  margin: 0;
}
@media (max-width: 361px) {
  .flavor_guarantee_block .info_wrapper > p {
    font-size: 13px;
  }
}
.flavor_guarantee_block .info_wrapper > p span:nth-child(1) {
  display: block;
}
@media (max-width: 768px) {
  .flavor_guarantee_block .info_wrapper > p span:nth-child(1) {
    display: block;
  }
}
.flavor_guarantee_block .info_wrapper > p .learn_more_btn {
  font-size: 12px;
  text-decoration-line: underline;
  cursor: pointer;
}
.flavor_guarantee_block .tippy-box {
  max-width: 291px !important;
  border-radius: 8px;
  background: #15206b;
}
@media (max-width: 768px) {
  .flavor_guarantee_block .tippy-box {
    max-width: 259px !important;
  }
}
.flavor_guarantee_block .tippy-box .tippy-content {
  padding: 14px 12px;
}
.flavor_guarantee_block .tippy-box .tippy-arrow {
  color: #15206b !important;
}
.flavor_guarantee_block .tippy-box .tooltip_block {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
}
.flavor_guarantee_block .tippy-box .tooltip_block svg {
  flex: 1 0 18px;
  width: 18px;
  height: 18px;
}
.flavor_guarantee_block .tippy-box .tooltip_block h3 {
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: normal;
  margin: 0 0 4px;
}
.flavor_guarantee_block .tippy-box .tooltip_block p {
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0;
}

.sticky_block {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  z-index: 10;
  background: #fff;
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 15px;
}
.sticky_block .total_box {
  width: 100%;
  max-width: 315px;
  margin: 0 auto 4px;
}
.sticky_block .total_box .sum-row.order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sticky_block .total_box .sum-row.order-total .caption {
  color: #15206b;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}
.sticky_block .total_box .sum-row.order-total > .total {
  display: flex;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #15206b;
}
.sticky_block .total_box .sum-row.order-total > .total.text-green {
  color: rgb(0, 134, 90);
}
.sticky_block .total_box .sum-row.order-total > .total.text-green .text-strikethrough {
  color: #15206b;
  text-decoration: line-through !important;
}
.sticky_block button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 56px;
  border-radius: 100px;
  border: 1px solid rgb(252, 77, 56);
  background: #fc4d38;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
}
.sticky_block button[disabled] {
  background-color: rgb(242, 242, 242);
  color: rgba(38, 38, 38, 0.65);
  border-color: rgb(252, 77, 56);
}

@media (max-width: 768px) {
  body.cart_page .intercom-lightweight-app-launcher {
    bottom: 110px !important;
  }
}

body .css-10d7lj6 .heading .cart-menu {
  display: flex !important;
}
@media (max-width: 768px) {
  body .css-10d7lj6 .heading .cart-menu {
    display: none !important;
  }
}
body .css-10d7lj6 .heading h1 {
  display: none !important;
}
@media (max-width: 768px) {
  body .css-10d7lj6 .heading h1 {
    display: flex !important;
  }
}
body .container-fluid {
  padding: 0;
}
body .container-fluid > .row {
  margin: 0;
}
@media (max-width: 1300px) {
  body .container-fluid .col-md-8 {
    padding: 0;
    flex: 0 0 65%;
    max-width: 65%;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 {
    padding: 0 15px;
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 {
    margin: 24px 0 0;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 .heading {
    margin: 0 0 24px;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 .heading h1 {
    color: #15206b;
    font-size: 28px;
    font-weight: 900;
    line-height: 37.8px;
    letter-spacing: 0.56px;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 .heading button.link.secondary {
    color: #3856a7;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.16px;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 .managing {
    border-radius: 10px;
    background: #ebeef6;
    gap: 10px;
    margin: 0 0 40px;
    padding: 20px 30px;
    color: #3856a7;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.8px;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 > div > hr {
    display: none !important;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 .box {
    border-top: 1px solid #ebeef6;
    margin-top: 0;
    padding: 48px 0 24px !important;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .info h3 {
    color: #15206b;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.32px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .lines-wrapper {
    margin: 4px 0 12px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .lines-wrapper .lines {
    margin: 0;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .lines-wrapper .lines span {
    color: #3856a7;
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.32px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .cart-quantity {
    margin-top: 12px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .cart-total span {
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.32px;
    margin-top: 0;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .cart-total span.total {
    font-size: 15px;
    line-height: 29px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .cart-total .css-ume3jj {
    color: #00865a;
    font-size: 12px !important;
    font-weight: 600;
    line-height: 120%;
    padding: 6px 12px;
    margin: 7px 0 0;
    width: -moz-max-content;
    width: max-content;
    max-width: -moz-max-content;
    max-width: max-content;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .select-dropdown .select__control {
    margin-top: 7px;
    min-height: 36px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .wrapper .select-dropdown .select__single-value {
    color: #3856a7;
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.32px;
    margin: 0 2px 0 0;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .box .image {
    margin-right: 22px;
    max-width: 134px !important;
    height: 156px;
    border-radius: 10px;
    background: #ebeef7;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-8 .css-10d7lj6 .flavor_guarantee_block {
    margin-bottom: 24px;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .flavor_guarantee_block + div {
    margin: 0 -15px;
    padding: 0 15px;
    border-top: 1px solid #ebeef6;
  }
  body .container-fluid .col-md-8 .css-10d7lj6 .flavor_guarantee_block + div > .box {
    border-top: none;
  }
}
@media (max-width: 1300px) {
  body .container-fluid .col-md-4.custom-column {
    padding: 0;
    flex: 0 0 35%;
    max-width: 35%;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-4.custom-column {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-4.custom-column .css-kq9w2n {
    margin: 0;
    padding: 0 !important;
    min-height: auto;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table {
    padding: 12px 15px 16px !important;
    margin: 0 !important;
    width: 100%;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .checkout-title {
    color: #15206b;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 8px;
    padding: 0 0 8px;
    border-bottom: 1px solid #d5d9f8;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row-hr + .sum-row.total.coupon {
    border-top: 1px solid #d5d9f8;
    padding-top: 8px;
    margin-top: 8px;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row-hr + .sum-row.total.coupon .caption {
    padding-left: 25px;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row-hr + .sum-row.total.coupon .coupon-remove-btn {
    left: 0px;
    right: unset;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row.total {
    margin-bottom: 3.5px !important;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row.total .caption,
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row.total .total {
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row.total .caption {
    color: #15206b;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row.promo-code {
    padding: 8px 0;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row.promo-code span p {
    color: #3856a7;
    font-size: 15px;
    font-weight: 600;
    line-height: 21.75px;
    text-decoration-line: underline;
    margin: 0;
    padding: 0;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row-hr + .sum-row.promo-code {
    border-top: 1px solid #d5d9f8;
    padding: 16px 0;
    margin-top: 8px;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .order-total {
    border-top: 1px solid #d5d9f8;
    padding-top: 15px;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .order-total .caption,
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .order-total .total {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .order-total .total {
    font-weight: 600;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .order-total .total .text-strikethrough {
    color: #15206b;
    font-size: 15px;
    line-height: 22px;
    margin: 1px 8px 0 0 !important;
  }
  body .container-fluid .col-md-4.custom-column .css-kq9w2n .summary-table .sum-row-hr {
    display: none !important;
  }
}
body .container-fluid .col-md-4.custom-column .actions-wrapper button {
  padding: 5px;
  height: 40px;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
}
body .container-fluid .col-md-4.custom-column .actions-wrapper button:hover svg path {
  fill: #fc4d38;
}
@media (max-width: 768px) {
  body .container-fluid .col-md-4.custom-column .actions-wrapper {
    margin: 0;
    padding: 0 15px 24px;
    border: none;
  }
  body .container-fluid .col-md-4.custom-column .actions-wrapper button {
    height: 56px;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-4.custom-column .css-1f2tjn7 {
    padding: 9.2px 24px 34.32px;
  }
}
@media (max-width: 768px) {
  body .container-fluid .col-md-4.custom-column .tm-text.tablet {
    color: #8186ae;
    font-size: 15px;
    font-weight: 300;
    line-height: 21.75px;
    letter-spacing: 0.3px;
    margin: 0 auto 24px;
    max-width: 291px;
  }
}

@media (max-width: 768px) {
  form .form-row {
    flex-direction: column-reverse;
  }
}
form .form-column-left {
  padding: 50px 100px 70px;
}
@media (max-width: 768px) {
  form .form-column-left {
    padding: 24px 15px;
  }
}
form .form-column-left .free_shipping_block {
  margin: 0 0 12px;
}
@media (max-width: 768px) {
  form .form-column-left .free_shipping_block {
    margin-bottom: 8px;
  }
}
form .form-column-left .flavor_guarantee_block {
  margin: 0 0 32px;
}
@media (max-width: 768px) {
  form .form-column-left .flavor_guarantee_block {
    margin-bottom: 30px;
  }
}
form .form-column-left .flavor_guarantee_block .img_wrapper {
  max-width: 52px;
  max-height: 52px;
}
@media (max-width: 768px) {
  form .form-column-left .flavor_guarantee_block .img_wrapper {
    max-width: 72px;
    max-height: 73px;
  }
}
form .form-column-left .flavor_guarantee_block p span:nth-child(1) {
  display: inline;
}
@media (max-width: 768px) {
  form .form-column-left .flavor_guarantee_block p span:nth-child(1) {
    display: block;
  }
}
form .form-column-left .form-wrap {
  padding: 0;
}
form .form-column-left .two-inputs-holder.client-name {
  flex-wrap: wrap;
}
form .form-column-left .two-inputs-holder.client-name > div {
  width: 100% !important;
}
form .form-column-left .input-wrap label input {
  border-radius: 10px !important;
  border: 2px solid #d7dded;
  padding: 10px 16px;
}
form .form-column-left .input-wrap label .react-tel-input .flag-dropdown {
  border-radius: 10px 0 0 10px !important;
  border: 2px solid #d7dded;
  background: #f5f5f5;
}
form .form-column-left .input-wrap label .react-tel-input .flag-dropdown::before {
  color: #838385;
  font-size: 17px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.56px;
}
form .form-column-left .input-wrap label .error-message {
  margin-top: 3px;
}
form .form-column-left .input-wrap label .floating-label {
  color: #9cabd2;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.56px;
}
form .form-column-left .checkout-title {
  color: #3856a7;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.56px;
  margin-bottom: 8px;
}
form .form-column-left .checkout-block:nth-child(1) {
  display: flex;
  flex-direction: column;
  margin: 0;
}
form .form-column-left .checkout-block:nth-child(1) .login-here {
  margin: 0;
  color: #3856a7;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.16px;
}
form .form-column-left .checkout-block:nth-child(1) .StripeElement {
  position: relative;
  order: -1;
  padding: 18px;
  border-radius: 10px;
  border: 1px solid #d7dded;
  margin: 0 0 60px;
}
@media (max-width: 768px) {
  form .form-column-left .checkout-block:nth-child(1) .StripeElement {
    margin: 0 0 52px;
  }
}
form .form-column-left .checkout-block:nth-child(1) .StripeElement::before {
  width: -moz-max-content;
  width: max-content;
  position: absolute;
  content: "express checkout";
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  color: #15206b;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  background: #fff;
  padding: 8px;
}
form .form-column-left .checkout-block:nth-child(1) .StripeElement::after {
  position: absolute;
  content: "";
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #15206b;
  height: 1px;
  width: 100%;
  background: #ebeef6;
  z-index: -1;
}
@media (max-width: 768px) {
  form .form-column-left .checkout-block:nth-child(1) .StripeElement::after {
    width: 108%;
  }
}
form .form-column-left .checkout-block:nth-child(1) .StripeElement .__PrivateStripeElement {
  position: relative;
}
form .form-column-left .checkout-block:nth-child(1) .StripeElement .__PrivateStripeElement::after {
  width: -moz-max-content;
  width: max-content;
  position: absolute;
  content: "or";
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  color: #15206b;
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  background: #fff;
  padding: 8px;
}
form .form-column-left .cards {
  display: none !important;
}
form .form-column-left .checkout-block + .checkout-block {
  margin: 32px 0 17px;
}
@media (max-width: 768px) {
  form .form-column-left .checkout-block + .checkout-block {
    margin: 24px 0 9px;
  }
}
form .form-column-left .new_shipping_block + .checkout-block {
  margin: 32px 0 27px;
}
@media (max-width: 768px) {
  form .form-column-left .new_shipping_block + .checkout-block {
    margin: 24px 0 16px;
  }
}
form .form-column-left .new_shipping_block + .checkout-block .checkout-title {
  margin-bottom: 12px;
}
form .form-column-left .new_shipping_block + .checkout-block .label {
  color: #3856a7;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
}
form .form-column-left .new_shipping_block + .checkout-block .css-1r10i14 .styled-checkbox {
  margin-right: 12px;
}
form .form-column-left .stripe-inputs.checkout-block {
  margin: 0 0 24px !important;
}
@media (max-width: 768px) {
  form .form-column-left .stripe-inputs.checkout-block {
    margin: 0 0 16px !important;
  }
}
form .form-column-left .stripe-inputs.checkout-block .css-1ehc527 {
  border-radius: 10px;
  border: 2px solid #d7dded;
  color: #9cabd2;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.56px;
}
form .form-column-left .stripe-inputs.checkout-block .secure_encrypted_txt {
  color: #3856a7;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 8px 0 12px;
}
@media (max-width: 768px) {
  form .form-column-left .stripe-inputs.checkout-block .secure_encrypted_txt {
    font-size: 15px;
    line-height: 18px;
    margin: 8px 0 16px;
  }
}
form .form-column-left .stripe-inputs.checkout-block .payment_img {
  max-width: 222px;
}
form .form-column-left .stripe-inputs.checkout-block .checkout-title {
  margin: 0;
}
form .form-column-left button {
  display: flex !important;
  height: 56px;
  border-radius: 100px !important;
  align-items: center;
  justify-content: center;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 16px !important;
  letter-spacing: 2.6px !important;
  text-transform: uppercase !important;
  margin: 0 !important;
}
@media (max-width: 768px) {
  form .form-column-left button {
    font-size: 13px !important;
  }
}
form .form-column-right .alert.error {
  text-align: center;
  margin: -20px 0 0 !important;
  background: #f6f7fa;
  width: 100%;
  padding: 0;
}
@media (max-width: 768px) {
  form .form-column-right .alert.error {
    margin: 10px 0 0 !important;
  }
}
form .form-column-right .mobile-errors {
  background: #f6f7fa;
  margin: 0 !important;
  padding: 10px 0;
}
form .form-column-right .refund-policy,
form .form-column-right .css-kq9w2n > button,
form .form-column-right .back-to-cart,
form .form-column-right .sum-row.total.coupon + .total,
form .form-column-right .sum-row.shipping.standard-shipping {
  display: none !important;
}
form .form-column-right .css-kq9w2n {
  padding: 0;
  min-height: auto;
}
@media (max-width: 768px) {
  form .form-column-right .css-kq9w2n {
    background: #f6f7fa;
  }
}
form .form-column-right .checokut-title-wrapper {
  background: #f6f7fa;
  padding: 50px 90px 16px;
  margin: 0;
}
@media (max-width: 1150px) {
  form .form-column-right .checokut-title-wrapper {
    padding: 50px 50px 16px;
  }
}
@media (max-width: 768px) {
  form .form-column-right .checokut-title-wrapper {
    display: none !important;
  }
}
form .form-column-right .checokut-title-wrapper .checokut-title {
  color: #3856a7;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.56px;
}
form .form-column-right .summary-table {
  background: #f6f7fa;
  margin: 0;
  padding: 0 90px 52px;
}
@media (max-width: 1150px) {
  form .form-column-right .summary-table {
    padding: 0 50px 52px;
  }
}
@media (max-width: 768px) {
  form .form-column-right .summary-table {
    padding: 15px 22px 12px;
  }
}
form .form-column-right .summary-table .sum-row-hr {
  display: none;
}
form .form-column-right .summary-table .sum-row-hr + .sum-row.total.coupon {
  margin: 0;
  padding-left: 20px;
}
form .form-column-right .summary-table .sum-row-hr + .sum-row.total.coupon .caption,
form .form-column-right .summary-table .sum-row-hr + .sum-row.total.coupon .total {
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
form .form-column-right .summary-table .sum-row-hr + .sum-row.total.coupon .caption {
  color: #15206b;
}
@media (max-width: 768px) {
  form .form-column-right .summary-table .sum-row-hr + .sum-row.total.coupon .coupon-remove-btn {
    left: -25px;
  }
}
form .form-column-right .summary-table .sum-row.total {
  margin-bottom: 3.5px;
  align-items: center;
}
form .form-column-right .summary-table .sum-row.total .caption,
form .form-column-right .summary-table .sum-row.total .total {
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
}
form .form-column-right .summary-table .sum-row.total .caption {
  color: #15206b !important;
}
form .form-column-right .summary-table .sum-row.order-total {
  border-top: 1px solid #d5d9f8;
  padding-top: 15px;
  align-items: center;
}
form .form-column-right .summary-table .sum-row.order-total .caption {
  color: #15206b;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}
form .form-column-right .summary-table .sum-row.order-total .total {
  color: #00865a;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}
form .form-column-right .summary-table .sum-row.order-total .new_subtotal {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  text-decoration: line-through;
  margin-right: 8px;
  margin-left: auto;
}
form .form-column-right .summary-table .promo-code {
  margin: 16px 0;
}
form .form-column-right .summary-table .promo-code p {
  color: #3856a7 !important;
  text-align: center;
  font-size: 15px !important;
  font-weight: 600 !important;
  line-height: 21.75px !important;
  text-decoration-line: underline !important;
  margin: 0 !important;
  padding: 0 !important;
}
form .form-column-right .css-1f2tjn7 {
  padding: 25.2px 90px 36.2px;
}
@media (max-width: 1150px) {
  form .form-column-right .css-1f2tjn7 {
    padding: 25.2px 50px 36.2px;
  }
}
@media (max-width: 768px) {
  form .form-column-right .css-1f2tjn7 {
    padding: 9.2px 24px 34.2px;
  }
}
form .form-column-right .tm-text {
  color: #8186ae;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  line-height: 21.75px;
  letter-spacing: 0.3px;
  margin: 0;
  padding: 0 90px 70px;
}
@media (max-width: 1150px) {
  form .form-column-right .tm-text {
    padding: 0 50px 70px;
  }
}
@media (max-width: 768px) {
  form .form-column-right .tm-text {
    padding: 0 54px 24px;
  }
}
form .footer_mobile {
  background: #ebeef6;
}
@media (max-width: 768px) {
  form .footer_mobile .css-1f2tjn7 {
    padding: 9.2px 24px 34.2px;
  }
}
form .footer_mobile .tm-text {
  color: #8186ae;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
  line-height: 21.75px;
  letter-spacing: 0.3px;
  margin: 0;
  padding: 0 54px 24px;
}

.order_summary_block {
  background: #f6f7fa;
  padding: 0 90px 15px;
}
@media (max-width: 1150px) {
  .order_summary_block {
    padding: 0 50px 15px;
  }
}
@media (max-width: 768px) {
  .order_summary_block {
    padding: 15px 22px 0;
  }
}
.order_summary_block .products_list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;
}
.order_summary_block .products_list .products_item {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
}
.order_summary_block .products_list .products_item .img_wrapper {
  flex: 0 0 72px;
  height: 72px;
  width: 72px;
  border-radius: 10px;
  background: #ebeef7;
  padding: 10px;
}
.order_summary_block .products_list .products_item .img_wrapper img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
  border-radius: 10px;
}
.order_summary_block .products_list .products_item .item_info {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.order_summary_block .products_list .products_item .item_info h3 {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
  margin: 0 0 4px;
}
.order_summary_block .products_list .products_item .item_info .quantity_packs_info {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0;
}
.order_summary_block .products_list .products_item .item_info .quantity_packs_info span {
  width: -moz-max-content;
  width: max-content;
  color: #3856a7;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.32px;
  margin: 0;
}
.order_summary_block .products_list .products_item .item_info .subscribe_txt {
  display: flex;
  align-items: center;
  gap: 4px;
  max-width: 143px;
  width: 100%;
  padding: 6px 12px;
  border-radius: 1000px;
  background: #c9e5de;
  color: #00865a;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 120%;
  margin: 4px 0 0;
}
.order_summary_block .products_list .products_item .item_info .price_wrapper .price_txt {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0.32px;
  margin: 0;
}
@media (max-width: 768px) {
  .order_summary_block .products_list .products_item .item_info .price_wrapper .price_txt {
    font-size: 14px;
    line-height: 18px;
  }
}
.order_summary_block .products_list .products_item .item_info .price_wrapper .price_txt.green_color {
  color: #00865a;
}

.new_shipping_block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.new_shipping_block input.custom_radio {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
.new_shipping_block label {
  border-radius: 10px;
  border: 2px solid #d7dded;
  padding: 0 !important;
  cursor: pointer;
}
.new_shipping_block label .radio_txt_box {
  display: flex;
  align-items: center;
  padding: 12px 16px 12px;
  gap: 12px;
}
.new_shipping_block label .radio_txt_box .new_custom_radio {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #3856a7;
  background: #fff;
  opacity: 0.7;
}
.new_shipping_block label .radio_txt_box .radio_txt {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.new_shipping_block label .radio_txt_box .shipping_txt {
  margin: 0 0 0 auto;
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  text-transform: uppercase;
}
.new_shipping_block label .radio_txt_box .shipping_txt.accent_color_green {
  color: #00865a;
}
.new_shipping_block label .radio_days {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #ebeef6;
  background: #f6f7fa;
  padding: 11px 16px 11px 46px;
  border-radius: 0 0 10px 10px;
  opacity: 0.7;
}
.new_shipping_block label .radio_days span {
  color: #3856a7;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}
.new_shipping_block label .radio_days img {
  max-width: 100px;
}
.new_shipping_block [type=radio]:checked + label {
  border: 2px solid #3856a7;
}
.new_shipping_block [type=radio]:checked + label .new_custom_radio {
  opacity: 1;
}
.new_shipping_block [type=radio]:checked + label .new_custom_radio::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  background: #3856a7;
  border: 1px solid #3856a7;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.new_shipping_block [type=radio]:checked + label .radio_days {
  opacity: 1;
}

.new_shipping_txt_block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #d5d9f8;
  margin-bottom: 16px;
}
.new_shipping_txt_block span {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
  margin: 0;
}
.new_shipping_txt_block span.accent_color_green {
  color: #00865a;
  text-transform: uppercase;
  line-height: 22px;
}

.pay_now_txt_block {
  margin: 12px 0 0;
}
@media (max-width: 768px) {
  .pay_now_txt_block {
    margin: 8px 0 0;
  }
}
.pay_now_txt_block p {
  color: #3856a7;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0;
}
.pay_now_txt_block p a {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .pay_now_txt_block p {
    text-align: left;
  }
}

.order_summary_block_mobile .order_summary_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 22px;
  border-top: 1px solid #ebeef6;
  border-bottom: 1px solid #ebeef6;
  background: #f6f7fa;
}
.order_summary_block_mobile .order_summary_header p {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
}
.order_summary_block_mobile .order_summary_header p span {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 29px;
}
.order_summary_block_mobile .order_summary_header p svg {
  transition: all 0.5s ease 0s;
}
.order_summary_block_mobile .order_summary_header p.is_open svg {
  transform: rotate(180deg);
}
.order_summary_block_mobile .order_summary_header p.price_total {
  color: #15206b;
}
.order_summary_block_mobile .order_summary_header p.price_total .price_total_strikethrough {
  color: #15206b;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  text-decoration: line-through;
  margin-top: 1px;
}
.order_summary_block_mobile .order_summary_header p.price_total .price_order_total {
  color: #00865a;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}
.order_summary_block_mobile .order_summary_body {
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
}
.order_summary_block_mobile .order_summary_body.is_open {
  height: auto;
  overflow: hidden;
}/*# sourceMappingURL=main.css.map */`, R = window.innerWidth < 768 ? "mobile" : "desktop";
  class Z {
    constructor(e) {
      this.device = e, this.observer = null, this.lastPath = window.location.pathname, this.observePageChange(), this.isActivated = !1, this.isClicked = !1, this.init(), this.observePageChange();
    }
    init() {
      var e, t;
      P("new_enhancement_cart_checkout"), this.checkPage() === "cart" && (this.renderStyles(), console.dir("name: 'Cart', dev: 'SKh"), n(".flavor_guarantee_block") || this.renderFlavorGuaranteeBlock(), (e = n(".actions-wrapper button")) != null && e.innerHTML.includes("Proceed to checkout") || this.changedTxtBtnCheckout(), this.handleClickProceedToCheckoutBtn(), this.device === "mobile" && (n(".sticky_block") || this.renderStickyBlock(), this.toggleStickyBlockVisibility(), this.renderTxtStickyBlock(), this.handleDisabledStickyBlock())), this.checkPage() === "checkout" && (console.dir("name: 'Checkout', dev: 'SKh"), this.renderStyles(), n(".flavor_guarantee_block") || this.renderFlavorGuaranteeBlock(), n(".order_summary_block") || this.renderOrderSummaryBlock(), n(".new_shipping_block") || this.renderStandardFreeShippingBlock(), (!n(".secure_encrypted_txt") || !n(".payment_img")) && this.renderPaymentImgAndDescription(), this.checkedShippingRadioInit(), n(".pay_now_txt_block") || this.renderPayNowTxtBlock(), this.device === "mobile" && ((t = n(".sticky_block")) == null || t.remove(), n(".footer_mobile") || this.renderFooterMobile(), n(".order_summary_block_mobile") || this.renderOrderSummaryBlockMobile(), this.replaceOrderTotal(), this.renderTxtTotalToSummaryBlockMobile()));
    }
    checkPage() {
      const e = window.location.href;
      switch (!0) {
        case e.includes("/checkout"):
          return "checkout";
        case e.includes("/cart"):
          return "cart";
        default:
          return "other";
      }
    }
    observePageChange() {
      this.observer = new MutationObserver((t) => {
        var a, l, c;
        n(".css-jobqsc") && ((a = n(".flavor_guarantee_block")) == null || a.remove(), (l = n(".free_shipping_block")) == null || l.remove(), (c = n(".sticky_block")) == null || c.remove()), t.forEach((s) => {
          var o, p, f, k, w, y, v, S, C, x, b, m, L, T, j;
          window.location.pathname !== this.lastPath && (this.lastPath = window.location.pathname, console.dir(this.lastPath), this.lastPath === "/checkout" ? (this.renderStyles(), this.device === "mobile" && ((o = n(".sticky_block")) == null || o.remove(), n(".footer_mobile") || this.renderFooterMobile(), n(".order_summary_block_mobile") || this.renderOrderSummaryBlockMobile(), this.replaceOrderTotal()), n(".order_summary_block") || this.renderOrderSummaryBlock(), (!n(".secure_encrypted_txt") || !n(".payment_img")) && this.renderPaymentImgAndDescription(), n(".new_shipping_block") || this.renderStandardFreeShippingBlock(), this.checkedShippingRadioInit(), n(".pay_now_txt_block") || this.renderPayNowTxtBlock()) : this.lastPath === "/cart" ? (this.renderStyles(), (p = n(".actions-wrapper button")) != null && p.innerHTML.includes("Proceed to checkout") || this.changedTxtBtnCheckout(), this.handleClickProceedToCheckoutBtn(), this.device === "mobile" && !n(".css-jobqsc") && (n(".sticky_block") || this.renderStickyBlock(), this.toggleStickyBlockVisibility())) : ((f = n(".sticky_block")) == null || f.remove(), (k = n(".flavor_guarantee_block")) == null || k.remove(), (w = n(".free_shipping_block")) == null || w.remove(), (y = n(".order_summary_block")) == null || y.remove(), (v = n(".pay_now_txt_block")) == null || v.remove(), (S = n(".new_shipping_block")) == null || S.remove(), (C = n(".new_shipping_txt_block")) == null || C.remove(), (x = n(".order_summary_block_mobile")) == null || x.remove(), (b = n(".footer_mobile")) == null || b.remove(), (m = n(".payment_img")) == null || m.remove(), (L = n(".secure_encrypted_txt")) == null || L.remove(), (T = n(".crs_inter")) == null || T.remove(), (j = n(".crs_style")) == null || j.remove(), n("body").classList.contains("cart_page") && n("body").classList.remove("cart_page"))), s.target.nodeName === "BODY" && (this.checkPage() === "cart" || this.checkPage() === "checkout") && !n(".flavor_guarantee_block") && !n(".css-jobqsc") && this.renderFlavorGuaranteeBlock();
          for (let g of s.addedNodes)
            if (g instanceof HTMLElement) {
              if (this.isActivated)
                return;
              g.classList.contains("css-1i5hss0") && (this.isActivated = !0, console.dir(g, "node"), this.checkPage() === "cart" && this.device === "mobile" && !n(".css-jobqsc") && this.handleDisabledStickyBlock(), this.checkPage() === "checkout" && (this.handleDisabledRadioBlock(), this.device === "mobile" && n(".order_summary_body").classList.contains("is_open") && (n(".order_summary_body").style.height = "auto"))), g.classList.contains("input-holder") && this.checkPage() === "checkout" && this.device === "mobile" && n(".order_summary_body").classList.contains("is_open") && (n(".order_summary_body").style.height = "auto"), setTimeout(() => {
                this.isActivated = !1;
              }, 700);
            }
          for (let g of s.removedNodes)
            if (g instanceof HTMLElement) {
              if (this.isActivated)
                return;
              g.classList.contains("css-1i5hss0") && (this.isActivated = !0, this.checkPage() === "cart" && (n(".caption.txt_shipping") || this.changedTxtShipping(), this.device === "mobile" && !n(".css-jobqsc") && (this.renderTxtStickyBlock(), this.handleDisabledStickyBlock())), this.checkPage() === "checkout" && (this.handleDisabledRadioBlock(), this.device === "mobile" && (this.renderTxtTotalToSummaryBlockMobile(), n(".order_summary_body").classList.contains("is_open") && (n(".order_summary_body").style.height = "auto")))), setTimeout(() => {
                this.isActivated = !1;
              }, 700);
            }
        });
      });
      const e = { childList: !0, subtree: !0 };
      this.observer.observe(document.body, e);
    }
    // cart and checkout
    renderFlavorGuaranteeBlock() {
      i(".summary-table").then(() => {
        var a;
        let e = "", t = "";
        n(".flavor_guarantee_block") || (this.checkPage() === "cart" && (this.device === "mobile" ? (e = ".container-fluid .heading", t = "afterend") : (e = ".summary-table", t = "beforebegin")), this.checkPage() === "checkout" && (this.device, e = ".form-column-left", t = "afterbegin"), (a = n(e)) == null || a.insertAdjacentHTML(t, A), console.dir("renderFlavorGuaranteeBlock"), this.initTooltip());
      });
    }
    initTooltip() {
      let e = "bottom-end";
      this.device === "mobile" && (e = "top-end"), z([
        "https://unpkg.com/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        "https://unpkg.com/tippy.js@6.3.7/dist/tippy-bundle.umd.min.js"
      ]).then(async () => {
        let t = setInterval(() => {
          typeof tippy == "function" && n("[data-tooltip]") && (clearInterval(t), d("[data-tooltip]").forEach((a) => {
            tippy(a, {
              content: a.getAttribute("data-title"),
              trigger: "click",
              allowHTML: !0,
              arrow: !0,
              arrowType: "round",
              appendTo: function() {
                return a.closest(".info_wrapper");
              },
              placement: e,
              interactive: !0,
              onShow(l) {
              },
              onTrigger(l) {
                window.location.pathname === "/cart" && h("exp_learnmorecart_click_01", "Learn More", "Button", "Cart"), window.location.pathname === "/checkout" && h("exp_learnmorecheckout_click_02", "Learn More", "Button", "Checkout");
              },
              onHide(l) {
              }
            });
          }));
        }, 100);
      });
    }
    renderFreeShippingBlock() {
      i(".flavor_guarantee_block").then(() => {
        n(".free_shipping_block") || n(".flavor_guarantee_block").insertAdjacentHTML("beforebegin", $);
      });
    }
    renderStyles() {
      n(".crs_inter") || document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), n(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${D}</style>`), this.checkPage() === "cart" && !n("body").classList.contains("cart_page") ? n("body").classList.add("cart_page") : n("body").classList.remove("cart_page"), console.dir("renderStyles");
    }
    // cart
    changedTxtShipping() {
      n(".caption.txt_shipping") || i(".promo-code").then(() => {
        d(".sum-row.total.coupon .caption").forEach((e) => {
          var t;
          e.nextElementSibling.textContent === "Free" ? (n(".free_shipping_block") || this.renderFreeShippingBlock(), e.nextElementSibling.style.lineHeight = "22px") : (t = n(".free_shipping_block")) == null || t.remove(), !e.textContent.includes("Subscription savings") && !e.textContent.includes("Standart shipping") && !e.closest(".total").previousElementSibling.classList.contains("sum-row-hr") && e.textContent !== "Standart shipping" && !e.classList.contains("txt_shipping") && (e.textContent = "Standart shipping", e.classList.add("txt_shipping"), console.dir("changedTxtShipping"));
        });
      });
    }
    changedTxtBtnCheckout() {
      i(".actions-wrapper button").then(() => {
        n(".actions-wrapper button") && !n(".actions-wrapper button").innerHTML.includes("Proceed to checkout") && (n(".actions-wrapper button").innerHTML = `Proceed to checkout ${u.arrowWhiteIcon}`, console.dir("changedTxtBtnCheckout"));
      });
    }
    renderStickyBlock() {
      i("#root").then(() => {
        n(".sticky_block") || n("#root").insertAdjacentHTML("afterbegin", q), this.handleClickStickyBtn(), this.handleDisabledStickyBlock(), console.dir("renderStickyBlock");
      });
    }
    renderTxtStickyBlock() {
      i(".sticky_block").then(() => {
        i(".sum-row.order-total .total").then(() => {
          if (n(".sticky_block .total_box")) {
            n(".sticky_block .total_box").innerHTML = "";
            let e = n(".container-fluid .sum-row.order-total").cloneNode(!0);
            n(".sticky_block .total_box .sum-row.order-total") || (n(".sticky_block .total_box").insertAdjacentElement("afterbegin", e), console.dir("renderTxtStickyBlock"));
          }
        });
      });
    }
    handleDisabledStickyBlock() {
      i(".sticky_block .proceed_to_checkout_btn").then(() => {
        i(".actions-wrapper button").then(() => {
          n(".actions-wrapper button").disabled ? n(".sticky_block .proceed_to_checkout_btn").disabled = !0 : n(".sticky_block .proceed_to_checkout_btn").disabled = !1, console.dir("handleDisabledStickyBlock");
        });
      });
    }
    toggleStickyBlockVisibility() {
      i(".actions-wrapper").then(() => {
        i(".sticky_block").then(() => {
          const e = n(".sticky_block"), t = n(".actions-wrapper");
          function a() {
            const l = {
              root: null,
              threshold: 0.5
            };
            let c = new IntersectionObserver((s) => {
              s.forEach((o) => {
                o.isIntersecting ? e.style.display = "none" : e.style.display = "block", c.unobserve(o.target);
              }), c.disconnect();
            }, l);
            c.observe(t);
          }
          window.addEventListener("scroll", () => {
            a();
          }), a();
        });
      }), console.dir("toggleStickyBlockVisibility");
    }
    handleClickStickyBtn() {
      i(".sticky_block button").then(() => {
        var e;
        (e = n(".sticky_block button")) == null || e.addEventListener("click", (t) => {
          t.preventDefault(), this.isClicked = !0, h("exp_stickyproceed_click_03", "Proceed to Checkout", "Button", "Cart - Sticky Banner"), n(".container-fluid .col-md-4.custom-column .actions-wrapper button").click(), this.isClicked = !1;
        }), console.dir("handleClickStickyBtn");
      });
    }
    handleClickProceedToCheckoutBtn() {
      i(".container-fluid .col-md-4.custom-column .actions-wrapper button").then(() => {
        var e;
        (e = n(".container-fluid .col-md-4.custom-column .actions-wrapper button")) == null || e.addEventListener("click", (t) => {
          this.isClicked || h("exp_cartproceed_click_04", "Proceed to Checkout", "Button", "Cart");
        }), console.dir("handleClickProceedToCheckoutBtn");
      });
    }
    // checkout
    renderPayNowTxtBlock() {
      i(".form-column-left button").then(() => {
        n(".pay_now_txt_block") || n(".form-column-left button").insertAdjacentHTML("afterend", O), n(".form-column-left button").textContent !== "Pay now" && (n(".form-column-left button").textContent = "Pay now"), console.dir("renderPayNowTxtBlock"), this.handleClickNewLinksNearPayNow();
      });
    }
    handleClickNewLinksNearPayNow() {
      i(".pay_now_txt_block").then(() => {
        n(".terms_sale_link").addEventListener("click", (e) => {
          console.dir("terms_sale_link");
        }), n(".privacy_link").addEventListener("click", (e) => {
          console.dir("privacy_link");
        });
      });
    }
    renderOrderSummaryBlock() {
      i(".form-column-right .sum-row.total .total").then(() => {
        n(".order_summary_block") || (this.device === "desktop" ? n(".form-column-right .checokut-title-wrapper").insertAdjacentHTML("afterend", B) : i(".order_summary_block_mobile").then(() => {
          n(".order_summary_block_mobile .order_summary_body").insertAdjacentHTML("afterbegin", B);
        }), i(".order_summary_block .products_list").then(() => {
          var l, c, s;
          if (!localStorage.getItem("v4Cart"))
            return;
          n(".products_list").innerHTML = "";
          let t = JSON.parse(localStorage.getItem("v4Cart")).cart.boxes;
          const a = (l = d(".sum-row.total .total")[0]) == null ? void 0 : l.textContent.charAt(0);
          if (n(".products_list").children.length !== t.length)
            for (const o in t) {
              let p = function({ type: x, name: b }, m) {
                return x === "bar" || b.toLowerCase().includes("bar") ? m === 1 ? "5-pack" : `5-pack (${m})` : x === "pouch" || b.toLowerCase().includes("pouch") ? m === 1 ? "6-pack" : `6-pack (${m})` : m + " items";
              };
              const f = (s = (c = t[o]) == null ? void 0 : c.image) != null && s.includes("https://cerebelly.com/wp-json/") ? t[o].image : `https://cerebelly.com/wp-json/cerebelly/image/get?path=${t[o].image}`, k = t[o].title, w = t[o].count, y = p(t[o].blueprint, w);
              console.dir(t[o].blueprint.type);
              const v = t[o].cadence.includes("week") && t[o].subscribe ? `Every ${t[o].cadence}` : "One-time purchase", S = `${a}${t[o].price.toFixed(2)}`, C = ((t[o].priceDefault - t[o].price) / t[o].priceDefault * 100).toFixed(0);
              n(".products_list").children.length !== t.length && n(".products_list").insertAdjacentHTML(
                "beforeend",
                I(f, k, y, v, S, +C)
              );
            }
        })), console.dir("renderOrderSummaryBlock");
      });
    }
    renderStandardFreeShippingBlock() {
      i(".sum-row.shipping.standard-shipping.active").then(() => {
        const e = d(".sum-row.standard-shipping .total")[0].textContent, t = d(".sum-row.standard-shipping .total")[1].textContent;
        n(".new_shipping_block") || n(".stripe-inputs.checkout-block").previousElementSibling.insertAdjacentHTML(
          "beforebegin",
          F(e, t)
        ), i(".new_shipping_block").then(() => {
          d(".new_shipping_block label").forEach((a) => {
            a.addEventListener("click", (l) => {
              var c, s, o;
              (c = n(".new_shipping_txt_block")) == null || c.remove(), a.previousElementSibling.getAttribute("id") === "expeditedShippingVar" ? ((s = n('.sum-row.shipping [name="shipping-option-1"]')) == null || s.click(), h("exp_shippingexpedited_radio_02", "Expedited Shipping", "Radio", "Checkout")) : ((o = n('.sum-row.shipping [name="shipping-option-0"]')) == null || o.click(), h("exp_shippingstandard_radio_01", "Standard Shipping", "Radio", "Checkout")), n(".new_shipping_txt_block") || this.renderNewShippingTxtBlock();
            });
          });
        }), console.dir("renderStandardFreeShippingBlock");
      });
    }
    handleDisabledRadioBlock() {
      i(".new_shipping_block").then(() => {
        var e;
        n(".form-column-left button") && ((e = n(".form-column-left button")) != null && e.disabled ? (n(".new_shipping_block").style.opacity = "0.5", n(".new_shipping_block").style.pointerEvents = "none") : (n(".new_shipping_block").style.opacity = "1", n(".new_shipping_block").style.pointerEvents = "auto"), console.dir("handleDisabledRadioBlock"));
      });
    }
    checkedShippingRadioInit() {
      i(".sum-row.shipping.standard-shipping.active").then(() => {
        n(".new_shipping_txt_block") || this.renderNewShippingTxtBlock(), d(".sum-row.shipping.standard-shipping .total").forEach((e) => {
          e.textContent.includes("FREE") && !n(".free_shipping_block") && this.renderFreeShippingBlock();
        }), i(".new_shipping_block").then(() => {
          var e, t;
          ((e = document.querySelector(".sum-row.shipping.standard-shipping.active input")) == null ? void 0 : e.getAttribute("name")) === "shipping-option-1" && (n("#expeditedShippingVar").checked = !0, console.dir("expeditedShippingVar>>>>>>>>>>>>>>>>>>>")), ((t = document.querySelector(".sum-row.shipping.standard-shipping.active input")) == null ? void 0 : t.getAttribute("name")) === "shipping-option-0" && (n("#standartShippingVar").checked = !0, console.dir("standartShippingVar>>>>>>>>>>>>>>"));
        }), console.dir("checkedShippingRadioInit");
      });
    }
    renderPaymentImgAndDescription() {
      i(".form-column-left .title-with-cards").then(() => {
        n(".payment_img") || n(".form-column-left .title-with-cards").insertAdjacentHTML(
          "beforeend",
          `<img class="payment_img" src='${_}payment_img.png' alt="photo" />`
        ), n(".secure_encrypted_txt") || n(".form-column-left .title-with-cards").insertAdjacentHTML(
          "afterend",
          '<p class="secure_encrypted_txt">All transactions are secure and encrypted</p>'
        ), console.dir("renderPaymentImgAndDescription");
      });
    }
    renderNewShippingTxtBlock() {
      i(".sum-row.shipping.standard-shipping.active").then(() => {
        const e = n(".sum-row.shipping.standard-shipping.active .total").textContent, t = n(".sum-row.shipping.standard-shipping.active label .name").textContent, a = e.includes("FREE") ? "accent_color_green" : "";
        n(".new_shipping_txt_block") || n(".sum-row-hr + .sum-row.shipping.standard-shipping").insertAdjacentHTML(
          "beforebegin",
          V(e, t, a)
        ), i(".summary-table").then(() => {
          setTimeout(() => {
            let l = n(".sum-row.order-total .total").textContent.split("$")[0], c = +n(".sum-row.order-total .total").textContent.split("$")[1], s = " ";
            d(".sum-row.total .caption").forEach((p) => {
              p.textContent === "Total" && (p.closest(".sum-row.total").style.display = "none"), p.textContent === "Subscribe & save savings (15% off)" && (s = p.nextElementSibling.textContent.split("$")[1]);
            });
            let o = setInterval(() => {
              s && (clearInterval(o), n(".new_subtotal") || n(".sum-row.order-total .total").insertAdjacentHTML(
                "beforebegin",
                `<span class="new_subtotal">${c === c + +s ? "" : `${l}${(c + +s).toFixed(2)}`}</span>`
              ));
            }, 100);
          }, 500);
        });
      });
    }
    renderFooterMobile() {
      i(".form-row").then(() => {
        n(".footer_mobile") || n(".form-row").insertAdjacentHTML("afterbegin", '<div class="footer_mobile"></div>');
      }), i(".footer_mobile").then(() => {
        n(".footer_mobile .tm-text") || n(".footer_mobile").insertAdjacentElement("afterbegin", n(".tm-text")), n(".footer_mobile .css-1f2tjn7") || n(".footer_mobile").insertAdjacentElement("afterbegin", n(".css-1f2tjn7"));
      }), console.dir("renderFooterMobile");
    }
    renderOrderSummaryBlockMobile() {
      i(".form-row .form-column-right > .css-kq9w2n").then(() => {
        n(".order_summary_block_mobile") || n(".form-row .form-column-right > .css-kq9w2n").insertAdjacentHTML("afterbegin", N), this.handleOpenAndCloseOrderSummaryBlockMobile(), console.dir("renderOrderSummaryBlockMobile");
      });
    }
    handleOpenAndCloseOrderSummaryBlockMobile() {
      i(".order_summary_block_mobile").then(() => {
        n(".order_summary_header .order_summary_toggle").addEventListener("click", (e) => {
          h("exp_ordersummary_click_05", "Show Order Summary", "Button", "Checkout"), H(100, n(".order_summary_header"));
          const t = n(".order_summary_body");
          e.currentTarget.classList.toggle("is_open"), t.classList.contains("is_open") ? e.currentTarget.querySelector("span").textContent = "Show order summary" : e.currentTarget.querySelector("span").textContent = "Hide order summary", this.resizeOrderSummaryBlockMobile(t), t.classList.toggle("is_open");
        }), console.dir("handleOpenAndCloseOrderSummaryBlockMobile");
      });
    }
    resizeOrderSummaryBlockMobile(e) {
      if (e.classList.contains("is_open")) {
        const t = e.scrollHeight;
        e.style.height = t + "px", setTimeout(() => {
          e.style.height = "0";
        }, 0);
      } else {
        e.style.height = "auto";
        const t = e.scrollHeight + "px";
        e.style.height = "0", setTimeout(() => {
          e.style.height = t;
        }, 0);
      }
    }
    replaceOrderTotal() {
      i(".summary-table").then(() => {
        i(".order_summary_block_mobile").then(() => {
          n(".order_summary_block_mobile .order_summary_body .summary-table") || n(".order_summary_block_mobile .order_summary_body").insertAdjacentElement(
            "beforeend",
            n(".summary-table")
          ), console.dir("replaceOrderTotal"), this.renderTxtTotalToSummaryBlockMobile();
        });
      });
    }
    renderTxtTotalToSummaryBlockMobile() {
      i(".order_summary_block_mobile .order_summary_body .summary-table .new_subtotal").then(() => {
        i(".order_summary_block_mobile .order_summary_header .price_total .price_order_total").then(() => {
          n(".order_summary_block_mobile .order_summary_header .price_total .price_order_total").textContent = n(".sum-row.order-total .total").textContent, n(".order_summary_block_mobile .order_summary_header .price_total .price_total_strikethrough").textContent = n(".order_summary_block_mobile .order_summary_body .summary-table .new_subtotal").textContent, console.dir("renderTxtTotalToSummaryBlockMobile");
        });
      });
    }
  }
  new Z(R);
})();
//# sourceMappingURL=index.js.map
