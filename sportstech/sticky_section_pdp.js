(function() {
  "use strict";
  const l = (c, t, n, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: t,
      event_type: n,
      event_loc: i
    }), console.dir(`Event: ${c} | ${t} | ${n} | ${i}`);
  }, u = ({ name: c, dev: t }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (c) => document.querySelectorAll(c), e = (c) => document.querySelector(c), b = (c) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", c, "variant_1"));
    }, 1e3);
  };
  function o(c) {
    return new Promise((t) => {
      if (document.querySelector(c))
        return t(document.querySelector(c));
      const n = new MutationObserver(() => {
        document.querySelector(c) && (t(document.querySelector(c)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(c) {
    c = c === void 0 ? {} : c;
    let t, n, i, r, a = (c == null ? void 0 : c.delay) || 50;
    function d() {
      t = null, r = 0;
    }
    return d(), function() {
      return n = window.scrollY, t != null && (r = n - t), t = n, clearTimeout(i), i = setTimeout(d, a), r;
    };
  })();
  const p = {
    arrowLeftIcon: (
      /* HTML */
      `
    <svg
      class="arrow_left_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3428 1.6572C11.3929 1.70721 11.4327 1.76662 11.4599 1.83203C11.487 1.89744 11.501 1.96757 11.501 2.03838C11.501 2.1092 11.487 2.17932 11.4599 2.24473C11.4327 2.31015 11.3929 2.36956 11.3428 2.41957L5.26213 8.49916L11.3428 14.5788C11.3929 14.6288 11.4326 14.6882 11.4597 14.7536C11.4868 14.8191 11.5007 14.8892 11.5007 14.9599C11.5007 15.0307 11.4868 15.1008 11.4597 15.1662C11.4326 15.2316 11.3929 15.2911 11.3428 15.3411C11.2927 15.3912 11.2333 15.4309 11.1679 15.458C11.1025 15.4851 11.0324 15.499 10.9616 15.499C10.8908 15.499 10.8207 15.4851 10.7553 15.458C10.6899 15.4309 10.6305 15.3912 10.5804 15.3411L4.11965 8.88035C4.06951 8.83034 4.02973 8.77092 4.00259 8.70551C3.97545 8.6401 3.96147 8.56998 3.96147 8.49916C3.96147 8.42835 3.97545 8.35822 4.00259 8.29281C4.02973 8.2274 4.06951 8.16799 4.11965 8.11798L10.5804 1.6572C10.6304 1.60706 10.6899 1.56728 10.7553 1.54014C10.8207 1.51299 10.8908 1.49902 10.9616 1.49902C11.0324 1.49902 11.1026 1.51299 11.168 1.54014C11.2334 1.56728 11.2928 1.60706 11.3428 1.6572Z"
        fill="white"
      />
    </svg>
  `
    ),
    cartIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="26" viewBox="0 0 21 26" fill="none">
      <path
        d="M6.74544 21.3337C7.20568 21.3337 7.57878 20.9606 7.57878 20.5004C7.57878 20.0401 7.20568 19.667 6.74544 19.667C6.28521 19.667 5.91211 20.0401 5.91211 20.5004C5.91211 20.9606 6.28521 21.3337 6.74544 21.3337Z"
        stroke="white"
        stroke-width="1.53846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.9134 21.3337C16.3736 21.3337 16.7468 20.9606 16.7468 20.5004C16.7468 20.0401 16.3736 19.667 15.9134 19.667C15.4532 19.667 15.0801 20.0401 15.0801 20.5004C15.0801 20.9606 15.4532 21.3337 15.9134 21.3337Z"
        stroke="white"
        stroke-width="1.53846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.78906 4.70801H3.45572L5.67239 15.058C5.75371 15.437 5.96462 15.7759 6.26882 16.0162C6.57302 16.2565 6.95148 16.3833 7.33906 16.3747H15.4891C15.8684 16.374 16.2361 16.244 16.5316 16.0062C16.827 15.7684 17.0325 15.4368 17.1141 15.0664L18.4891 8.87467H4.34739"
        stroke="white"
        stroke-width="1.53846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `
    ),
    arrowBreadcrumbIcon: (
      /* HTML */
      `
    <svg
      class="arrow_breadcrumb_icon"
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.853556 0.353556L4.2477 3.7477L4.60125 4.10125C4.79652 4.29652 4.79652 4.6131 4.60125 4.80836L4.2477 5.16191L0.853596 8.55602C0.658334 8.75128 0.341751 8.75128 0.146487 8.55602C-0.0487767 8.36075 -0.0487782 8.04417 0.146483 7.84891L3.54059 4.4548L0.146451 1.06066C-0.0488128 0.865398 -0.0488143 0.548814 0.146448 0.353552C0.341709 0.158291 0.658292 0.158292 0.853556 0.353556Z"
        fill="#D9D9D9"
      />
    </svg>
  `
    )
  }, g = [
    "http://www.sportstech.de/laufband/swalk-grau",
    //+
    "http://www.sportstech.de/hantelbank/brt400",
    //+
    "http://www.sportstech.de/klimmzugstange/ks270",
    //+
    "http://www.sportstech.de/klimmzugstange/ks260",
    //+
    "http://www.sportstech.de/stepper/stx300",
    // + ...
    "http://www.sportstech.de/laufband/swalk-holzoptik-grau",
    //+
    "http://www.sportstech.de/vibrationsplatte/vp250-tuerkis",
    //+
    "http://www.sportstech.de/laufband/f31s",
    //+
    "http://www.sportstech.de/ergometer/esx500",
    //+
    "http://www.sportstech.de/laufband/swalk-holzoptik-hell",
    //+
    "http://www.sportstech.de/crosstrainer/cx700",
    //+
    "http://www.sportstech.de/kraftstation/hgx200",
    //+
    "http://www.sportstech.de/kraftstation/hgx100"
    //+
    // 'http://www.sportstech.de/laufband/f37s',
    // 'http://www.sportstech.de/hanteln/ah300-20kg', //цієї сторінки не існує
    // 'http://www.sportstech.de/speedbike/sbike-lite',
    // 'http://www.sportstech.de/laufband/f10',
    // 'http://www.sportstech.de/laufband/swalk-plus',
    // 'http://www.sportstech.de/rudergeraet/wrx1000-dunkelbraun',
    // 'http://www.sportstech.de/laufband/stread-fold',
    // 'http://www.sportstech.de/ergometer/esx600s',
    // 'http://www.sportstech.de/laufband/stread-lite',
    // 'http://www.sportstech.de/laufband/f75',
    // 'http://www.sportstech.de/speedbike/sbike',
    // 'http://www.sportstech.de/rudergeraet/srow'
  ], x = (
    /* HTML */
    `
  <div class="sticky_block_desktop">
    <div class="part_left"></div>
    <div class="part_right"></div>
  </div>
`
  ), h = (c, t) => (
    /* HTML */
    ` <div class="fixed_block_desktop">
    <p class="pdp_name">${c}</p>
    <div class="">
      <span class="pdp_price">${t} €</span>
      <div class="add_to_cart_btn">In den Warenkorb</div>
    </div>
  </div>`
  ), y = (
    /* HTML */
    `
  <div class="sticky_block_mobile">
    <div class="add_to_cart_btn">${p.cartIcon} In den Warenkorb</div>
  </div>
`
  ), w = (
    /* HTML */
    '<nav id="pdpBreadcrumbs"></nav>'
  ), v = (c, t, n, i, r) => (
    /* HTML */
    `
    <a href="${c}">${t}</a>
    ${p.arrowBreadcrumbIcon}
    ${t.toLocaleLowerCase().trim() === i.toLocaleLowerCase().trim() ? "" : `<a href="/${n}">${i}</a> ${p.arrowBreadcrumbIcon}`}
    <span class="active_pdp">${r}</span>
  `
  ), C = `.is-ctl-product {
  position: relative;
}
@media (min-width: 768px) {
  .is-ctl-product .container-main {
    margin: 0 !important;
  }
  .is-ctl-product .cms-block-container:empty {
    display: none;
  }
  .is-ctl-product.crs_sticky .cms-block-product-description-reviews > div {
    padding-top: 0 !important;
  }
  .is-ctl-product.crs_sticky .section:nth-child(2) {
    padding-bottom: 0 !important;
  }
  .is-ctl-product.crs_sticky .ElementsWidget-prefix .ElementsWidget,
  .is-ctl-product.crs_sticky .ElementsWidget-prefix .R-PaginationControls {
    margin: 0 !important;
  }
  .is-ctl-product.crs_sticky .rhweb-fixed-buy-widget.fixedBuyWidgetNone {
    display: none !important;
  }
  .is-ctl-product.crs_sticky header.sticky {
    position: relative;
  }
  .is-ctl-product.crs_sticky .content-main {
    padding: 0 !important;
  }
  .is-ctl-product.crs_sticky .belvg-block-gallery-full-width > div {
    display: none;
  }
  .is-ctl-product.crs_sticky .section-faq .section-faq__content {
    padding-top: 76px;
  }
  .is-ctl-product.crs_sticky .section-faq .section-faq__content .title {
    color: #000;
    text-align: center;
    font-family: "Inter";
    font-size: 41.594px;
    font-weight: 400;
    line-height: 66px;
    margin: 0;
  }
  .is-ctl-product .cms-block-gallery-buybox > div {
    padding-top: 16px !important;
  }
  .is-ctl-product .product-detail-buy .product-detail-name {
    margin-bottom: 16px !important;
  }
  .is-ctl-product .product-detail-buy .product-detail-price-container,
  .is-ctl-product .product-detail-buy .product-detail-price-container + .mb-4 {
    margin-bottom: 16px !important;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .is-ctl-product .product-detail-buy .product-badges {
    margin: 0 0 10px;
  }
  .is-ctl-product .product-detail-buy .product-badges .badge {
    margin: 0;
    border-radius: 0px 3px 3px 0px;
    background: #f8cb87;
  }
  .is-ctl-product .product-detail-buy .product-badges svg path {
    fill: #758ca3;
  }
  .is-ctl-product .product-detail-buy span.badge {
    margin: 0 0 20px !important;
    color: #fff;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    border-radius: 50px;
    background: #e4002b;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-group {
    margin-bottom: 18px;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-group-title {
    color: #000;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 8px;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-options {
    gap: 10px;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-option {
    margin: 0;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-option-label {
    min-height: 33px;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #000;
    margin: 0;
    background: #fff;
    border: 1px solid hsla(205, 10%, 32%, 0.35);
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-option-label:not(.is-display-text) {
    border: 1px solid #d9d9d9;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-option-input:checked + .product-detail-configurator-option-label.is-display-text {
    color: #fff;
    border: 1px solid #e4002b !important;
    background: #e4002b;
    opacity: 1;
  }
  .is-ctl-product .product-detail-buy .product-detail-configurator-option-input:checked + .product-detail-configurator-option-label:not(.is-display-text) {
    border: 1px solid #e4002b !important;
    box-shadow: 3px 3px 0px 1px #fff inset, -3px -3px 0px 1px #fff inset;
  }
  .is-ctl-product .product-detail-buy .buy-widget-container .btn-buy {
    height: 42px;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 34px;
  }
  .is-ctl-product .product-detail-buy .product-detail-form-container {
    margin-bottom: 20px;
  }
  .is-ctl-product .product-detail-buy .product-detail-delivery-information {
    margin-bottom: 24px;
  }
  .is-ctl-product .product-detail-buy .product-detail-delivery-information .product-detail-delivery-date {
    color: #5c5c5c;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .is-ctl-product .product-detail-buy .product-detail-delivery-information .rhweb-delivery-info-grid {
    border-top: none;
  }
  .is-ctl-product .product-detail-buy .product-detail-delivery-information .rhweb-product-delivery-information {
    color: #000;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .is-ctl-product .product-detail-buy .accordion .accordion-header {
    color: #25282a;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 34px;
    text-transform: uppercase;
  }
}
@media (max-width: 768px) {
  .is-ctl-product {
    min-width: 100% !important;
  }
  .is-ctl-product .rhweb-fixed-buy-widget.fixedBuyWidgetNone {
    display: none !important;
  }
  .is-ctl-product button.needsclick.kl-teaser-SP24tu.kl-private-reset-css-Xuajs1 {
    bottom: 162px !important;
    display: none !important;
  }
}
.is-ctl-product .breadcrumb.cms-breadcrumb {
  display: none !important;
}
.is-ctl-product .sticky_block_desktop {
  display: flex;
  justify-content: center;
  padding: 16px 20px 0;
  gap: 45px;
}
.is-ctl-product .sticky_block_desktop .part_left {
  width: 66%;
}
.is-ctl-product .sticky_block_desktop .part_left > div {
  width: 100%;
  margin: 0;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs h2,
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs h3 {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 48px;
  opacity: 1;
  margin-bottom: 20px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs h2 br,
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs h3 br {
  display: none;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs p {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.4px;
  margin: 0 0 24px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-hero {
  padding: 56px 0 80px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-hero .hero-text-cont {
  padding: 40px 64px 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-hero .hero-text-cont p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-2 .module-2-wrapper {
  flex-direction: column;
  padding: 0 64px 80px;
  gap: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-2 .copy-cont {
  padding: 0;
  margin-top: -130px;
  text-align: center;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-2 .copy-cont p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-2 .copy-cont img {
  margin: 40px auto 0;
  width: 100%;
  max-width: 670px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g {
  padding: 80px 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g .g-copy-cont {
  padding: 0 64px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g .g-copy-cont p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g .g-img-cont img {
  margin: 40px auto;
  max-width: 670px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g .g-text {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g .g-text h2 {
  max-width: 778px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-g .g-text p {
  max-width: 800px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-j {
  padding: 56px 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-j h3 {
  max-width: 536px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-j p {
  margin: 0 auto 24px;
  max-width: 724px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-j .slider-img-arrow-prev {
  left: 20px;
  top: 65%;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .module-j .slider-img-arrow-next {
  right: 20px;
  top: 60%;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .instagram-boxes-section {
  padding: 0;
  margin: -32px 0 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .instagram-boxes-section h2 {
  margin-bottom: 12px;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_first_crs .instagram-boxes-section p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-hero .hero-imgs {
  display: flex;
  margin: 0 0 40px;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-b {
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-b .b-wrapper {
  flex-direction: column;
  gap: 40px;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-b .b-cont {
  max-width: 100%;
  text-align: center;
  margin: 0;
  width: 100%;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-b .b-cont > img {
  max-width: 300px;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-g .g-text {
  flex-direction: column;
  padding: 40px 0 0;
  align-items: center;
  text-align: center;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-g .g-text p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-d {
  padding: 0 0 40px;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e {
  padding: 40px 0 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e .e-cont {
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e .e-cont.e-btm {
  flex-direction: column-reverse;
  margin-top: 40px;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e .e-img {
  max-width: 500px;
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e .e-text {
  max-width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e .e-text .head {
  margin-top: 20px;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-e .e-text p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-f {
  margin: 40px 0;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-f .f-container {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-f .f-container .f-text {
  text-align: center !important;
  max-width: 100%;
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-f .f-container .f-text p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-k {
  margin: 120px 0 80px;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-k .k-image-text {
  top: -65px;
  text-align: center !important;
}
.is-ctl-product .sticky_block_desktop .part_left.hgx200_crs .module-g {
  margin: 40px 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_crs .module .module-row {
  margin: 0 auto;
  padding: 15px 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_crs .module .text-cont {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_crs .module p {
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.variant_crs .module .product-details-subtitle,
.is-ctl-product .sticky_block_desktop .part_left.variant_crs .module h3,
.is-ctl-product .sticky_block_desktop .part_left.variant_crs .module h2 {
  font-family: roboto-bold;
  font-size: 33px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 20px;
  text-align: left;
}
@media (max-width: 1290px) {
  .is-ctl-product .sticky_block_desktop .part_left.variant_crs .module .product-details-subtitle,
  .is-ctl-product .sticky_block_desktop .part_left.variant_crs .module h3,
  .is-ctl-product .sticky_block_desktop .part_left.variant_crs .module h2 {
    line-height: 30px;
    font-size: 24px;
  }
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e {
  padding: 80px 0 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e .e-cont {
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e .e-cont.e-btm {
  flex-direction: column-reverse;
  margin-top: 80px;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e .e-img {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e .e-text {
  max-width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e .e-text .head {
  margin-top: 20px;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-e .e-text p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-h {
  margin: 80px auto;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-h .h-cont {
  align-items: center;
  gap: 15px;
  margin: 80px auto;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-h .h-cont img {
  max-width: 254px;
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-h .h-text {
  max-width: 100%;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-h .h-text .head {
  font-family: "Roboto", sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 50px;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-h .h-text p {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.4px;
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-b {
  padding: 80px 0 0;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-b .b-intro {
  height: auto;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-b .b-head {
  font-size: 24px;
}
.is-ctl-product .sticky_block_desktop .part_left.cx700_crs .module-b .b-cont img {
  max-width: 167px;
}
.is-ctl-product .sticky_block_desktop .part_left.sbike_crs .badge-gallery img {
  width: 150px;
  max-width: 150px;
}
@media (max-width: 1290px) {
  .is-ctl-product .sticky_block_desktop .part_left.sbike_crs .badge-gallery img {
    width: 135px;
    max-width: 135px;
  }
}
@media (max-width: 1280px) {
  .is-ctl-product .sticky_block_desktop .part_left.sbike_crs .badge-gallery img {
    width: 115px;
    max-width: 115px;
  }
}
@media (max-width: 1100px) {
  .is-ctl-product .sticky_block_desktop .part_left.sbike_crs .badge-gallery img {
    width: 100px;
  }
}
.is-ctl-product .sticky_block_desktop .part_left.srow_crs .p2lab-product-video + .cms-block-container-row {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.srow_crs .fifth_row_content_section {
  width: 100%;
}
.is-ctl-product .sticky_block_desktop .part_left .tec-specs {
  padding: 56px 64px 6px;
}
@media (max-width: 1200px) {
  .is-ctl-product .sticky_block_desktop .part_left .tec-specs {
    padding: 56px 20px 6px;
  }
}
.is-ctl-product .sticky_block_desktop .part_left .tec-specs > p {
  color: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 40px;
}
.is-ctl-product .sticky_block_desktop .part_left .tec-specs p.tec-cat {
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 20px;
}
.is-ctl-product .sticky_block_desktop .part_left .tec-specs .tec-table {
  display: flex;
  gap: 38px;
}
.is-ctl-product .sticky_block_desktop .part_left .tec-specs .tec-left,
.is-ctl-product .sticky_block_desktop .part_left .tec-specs .tec-right {
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .row {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .col-12 {
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs img {
  width: 100%;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e {
  padding: 40px 0 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e .e-cont {
  flex-direction: column;
  align-items: center;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e .e-cont.e-btm {
  flex-direction: column-reverse;
  margin-top: 40px;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e .e-img {
  max-width: 500px;
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e .e-text {
  max-width: 100%;
  text-align: center;
  margin: 0;
  padding: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e .e-text .head {
  margin-top: 20px;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-e .e-text p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g {
  padding: 80px 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g .g-copy-cont {
  padding: 0 64px;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g .g-copy-cont p {
  margin: 0;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g .g-img-cont img {
  margin: 40px auto;
  max-width: 670px;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g .g-text {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g .g-text h2 {
  max-width: 778px;
}
.is-ctl-product .sticky_block_desktop .part_left.f37s_crs .module-g .g-text p {
  max-width: 800px;
}
.is-ctl-product .sticky_block_desktop .part_right {
  position: sticky;
  top: 10px;
  z-index: 2;
  width: 32%;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-bottom: 10px;
}
.is-ctl-product .sticky_block_desktop .part_right::-webkit-scrollbar {
  display: none;
}
.is-ctl-product .sticky_block_desktop .part_right > div {
  width: 100%;
  margin: 0;
  padding: 0 6px;
}
.is-ctl-product .sticky_block_desktop .part_right .btn.btn-primary {
  width: 100%;
  text-wrap: wrap;
}
.is-ctl-product .fixed_block_desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 100%;
  padding: 18.6px 20px;
  z-index: 1044;
  border-bottom: 1px solid #d8d8d8;
  background: #fff;
}
.is-ctl-product .fixed_block_desktop p {
  color: #000;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
  letter-spacing: initial;
  text-transform: initial;
}
.is-ctl-product .fixed_block_desktop > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.is-ctl-product .fixed_block_desktop > div .pdp_price {
  color: #25282a;
  font-family: "Open Sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: initial;
  text-transform: initial;
  margin: 0;
}
.is-ctl-product .fixed_block_desktop > div .add_to_cart_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 150px;
  min-width: 150px;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  border: 1px solid #e4002b;
  background: #e4002b;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 34px;
  cursor: pointer;
  margin: 0;
}
.is-ctl-product .sticky_block_mobile {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #d8d8d8;
  background: #fff;
  padding: 16px;
  z-index: 1044;
}
.is-ctl-product .sticky_block_mobile .add_to_cart_btn {
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 3px;
  border: 1px solid #e4002b;
  background: #e4002b;
  cursor: pointer;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 34px;
}
.is-ctl-product #pdpBreadcrumbs {
  margin: 0 0 12px;
  color: rgba(0, 0, 0, 0.35);
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
@media (max-width: 768px) {
  .is-ctl-product #pdpBreadcrumbs {
    margin: 0;
    padding: 16px 0 0;
  }
}
.is-ctl-product #pdpBreadcrumbs a {
  color: #333;
}
.is-ctl-product #pdpBreadcrumbs .active_pdp {
  color: rgba(0, 0, 0, 0.35);
}
.is-ctl-product #pdpBreadcrumbs svg {
  margin: 0 6px;
}
@media (max-width: 768px) {
  .is-ctl-product .product-detail-buy .product-detail-name {
    margin-bottom: 24px;
  }
  .is-ctl-product .product-detail-buy .product-detail-price-container {
    margin-bottom: 32px;
  }
}

.offcanvas .d-grid [href="/checkout/cart"] {
  display: none !important;
}
.offcanvas .btn-block.ml-1 {
  margin-top: 1rem;
}

.header-minimal .header-minimal-back-to-shop-button {
  color: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  gap: 12px;
}
.header-minimal .header-minimal-logo {
  margin-bottom: 2px;
}
.header-minimal .header-minimal-contact small {
  line-height: 24px;
}/*# sourceMappingURL=main.css.map */`, L = window.innerWidth < 768 ? "mobile" : "desktop";
  class B {
    constructor(t) {
      this.device = t, this.activePdpName = "", this.productPrice = "", this.init();
    }
    init() {
      u({ name: "Sticky section on PDP", dev: "SKh" }), b("sticky_section_on_pdp"), document.head.insertAdjacentHTML(
        "afterbegin",
        '<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style>${C}</style>`), this.renderBreadcrumbsBlock(), this.device === "mobile" ? this.renderStickyBlockMobile() : this.checkCurrentUrl(), this.changeBtnReturnToCartHanlder();
    }
    // ___________________________________________________________________________________________________________________________________________
    // PDP
    renderBreadcrumbsBlock() {
      let t = ".product-detail-buy";
      this.device === "mobile" && (t = ".cms-block-gallery-buybox"), o(t).then(() => {
        e("#pdpBreadcrumbs") || e(t).insertAdjacentHTML("afterbegin", w), this.generateBreadcrumbs(), this.clickPdpBreadcrumbsHandler();
      }), console.log("renderBreadcrumbsBlock");
    }
    clickPdpBreadcrumbsHandler() {
      o("#pdpBreadcrumbs").then((t) => {
        m("#pdpBreadcrumbs a").forEach((n) => {
          n.addEventListener("click", (i) => {
            l("exp_sticky_breadcrumb", i.target.textContent.trim(), "Link", "Sticky right block.");
          });
        });
      });
    }
    generateBreadcrumbs() {
      var f, k;
      const t = document.getElementById("pdpBreadcrumbs");
      if (!t)
        return;
      const n = (f = e(".main-navigation-menu .main-navigation-link.active")) == null ? void 0 : f.textContent, i = (k = e(".main-navigation-menu .main-navigation-link.active")) == null ? void 0 : k.href;
      let r = "";
      window.dataLayer.forEach((s) => {
        s.productCategory && (r = s.productCategory), s.productName && (this.activePdpName = s.productName), s.productPrice && (this.productPrice = s.productPrice);
      });
      const d = window.location.pathname.split("/").filter((s) => s), _ = v(
        i,
        n,
        d[0],
        r,
        this.activePdpName
      );
      t.innerHTML = _, console.log("generateBreadcrumbs");
    }
    // DESKTOP
    checkCurrentUrl() {
      const t = window.location.pathname;
      g.forEach((n) => {
        n.includes(t) && (console.log(`Current URL matches: ${t}`), this.renderStickyBlockDesktop(), this.replaceProductDetailMedia(), o(".is-ctl-product .sticky_block_desktop").then((i) => {
          switch (t) {
            case "/laufband/swalk-grau":
              e(".part_left").classList.add("variant_first_crs");
              break;
            case "/laufband/swalk-holzoptik-grau":
              e(".part_left").classList.add("variant_first_crs");
              break;
            case "/hantelbank/brt400":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/klimmzugstange/ks270":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/klimmzugstange/ks260":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/stepper/stx300":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/vibrationsplatte/vp250-tuerkis":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/laufband/f31s":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/ergometer/esx500":
              e(".part_left").classList.add("variant_crs");
              break;
            case "/laufband/swalk-holzoptik-hell":
              e(".part_left").classList.add("variant_first_crs");
              break;
            case "/crosstrainer/cx700":
              e(".part_left").classList.add("cx700_crs");
              break;
            case "/kraftstation/hgx200":
              e(".part_left").classList.add("hgx200_crs");
              break;
            case "/kraftstation/hgx100":
              e(".part_left").classList.add("variant_crs");
              break;
          }
        }));
      }), console.log("checkCurrentUrl");
    }
    replaceProductDetailMedia() {
      o(".product-detail-media").then((t) => {
        e('[data-cms-element-id="0190073cf0237206892ad787687c0639"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="0190073cf0237206892ad787687c0639"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="01900745e2487acbbf2ad71c668a5ec2"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="01900745e2487acbbf2ad71c668a5ec2"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="12288917e4a741c79588401542f89bf1"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="12288917e4a741c79588401542f89bf1"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="497a5f166d054605ac3504fb8c1eb36e"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="497a5f166d054605ac3504fb8c1eb36e"]').closest(".cms-block-container-row")
        ), e(".categories-container") && t.insertAdjacentElement("beforeend", e(".categories-container").closest(".cms-block-container-row")), e(".template-cont") && t.insertAdjacentElement("beforeend", e(".template-cont").closest(".cms-block-container-row")), e('[data-cms-element-id="0190074730af79c59f992fbad4f41755"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="0190074730af79c59f992fbad4f41755"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018eae58ed3273c4905d891afab91efb"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018eae58ed3273c4905d891afab91efb"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ecc64460d75d19daffb87eb829d8b"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ecc64460d75d19daffb87eb829d8b"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec8010ad675c99b9bd822bd24c0a8"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec8010ad675c99b9bd822bd24c0a8"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec80ca265772d8cfd206bbf7a0f94"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec80ca265772d8cfd206bbf7a0f94"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec82638927545b462be213839afaa"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec82638927545b462be213839afaa"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec829f91077b7ae3d738b88ff8a49"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec829f91077b7ae3d738b88ff8a49"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec88fa0507bcfb721d098f1f7fcd1"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec88fa0507bcfb721d098f1f7fcd1"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec8389d04787491bd3155b3cc301e"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec8389d04787491bd3155b3cc301e"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec8b53666734d8088e22fca13927d"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec8b53666734d8088e22fca13927d"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ec8c1c64d7321a2263db97468458d"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ec8c1c64d7321a2263db97468458d"]').closest(".cms-block-container-row")
        ), e('[data-cms-element-id="018ecdfc728479a59828d40ae138001b"]') && t.insertAdjacentElement(
          "beforeend",
          e('[data-cms-element-id="018ecdfc728479a59828d40ae138001b"]').closest(".cms-block-container-row")
        ), e(".tec-specs") && t.insertAdjacentElement("beforeend", e(".tec-specs"));
      }), o(".product-detail-media .section-faq").then((t) => {
        var n;
        (n = e(".belvg-block-gallery-full-width")) == null || n.insertAdjacentElement("beforeend", t);
      }), console.log("replaceProductDetailMedia");
    }
    renderStickyBlockDesktop() {
      o(".is-ctl-product .content-main .belvg-block-gallery-full-width").then((t) => {
        var n;
        e(".sticky_block_desktop") || (t.insertAdjacentHTML("beforebegin", x), (n = t.closest(".is-ctl-product")) == null || n.classList.add("crs_sticky"));
      }), o(".is-ctl-product .sticky_block_desktop").then((t) => {
        t.querySelector(".part_right").insertAdjacentElement("afterbegin", e(".product-detail-buy")), t.querySelector(".part_left").insertAdjacentElement("afterbegin", e(".product-detail-media")), e(".fixed_block_desktop") || t.insertAdjacentHTML("afterend", h(this.activePdpName, this.productPrice)), !e(".product-detail-form-container .buy-widget-container .btn-buy") && e(".fixed_block_desktop .add_to_cart_btn") && (e(".fixed_block_desktop .add_to_cart_btn").style.display = "none");
      }), o(".is-ctl-product .fixed_block_desktop").then((t) => {
        this.setupStickyBlockScrollHandler(), this.addToCartStickyBlockDesktopHandler();
      }), console.log("renderStickyBlockDesktop");
    }
    addToCartStickyBlockDesktopHandler() {
      o(".fixed_block_desktop .add_to_cart_btn").then((t) => {
        t.addEventListener("click", (n) => {
          var i;
          n.preventDefault(), t.closest(".fixed_crs") ? l(
            "exp_sticky_footer_add_to_cart",
            "Add to cart",
            "Button",
            `Sticky Footer. ${this.scrollDepthHandler()}`
          ) : l("exp_sticky_desktop_add_to_cart", "Add to cart", "Button", "Sticky Desktop"), (i = e(".product-detail-form-container .buy-widget-container .btn-buy")) == null || i.click();
        });
      }), console.log("addToCartStickyBlockDesktopHandler");
    }
    setupStickyBlockScrollHandler() {
      const t = e(".sticky_block_desktop"), n = e(".fixed_block_desktop");
      t && n && window.addEventListener("scroll", () => {
        t.getBoundingClientRect().bottom <= 0 ? (n.style.position = "fixed", n.classList.contains("fixed_crs") || n.classList.add("fixed_crs")) : (n.style.position = "static", n.classList.contains("fixed_crs") && n.classList.remove("fixed_crs"));
      }), console.log("setupStickyBlockScrollHandler");
    }
    // MOBILE
    renderStickyBlockMobile() {
      o(".is-ctl-product").then((t) => {
        !e(".sticky_block_mobile") && e(".rhweb-fixed-buy-widget .buy-widget-container .btn-buy") && t.insertAdjacentHTML("afterbegin", y), this.addToCartStickyBlockMobileHandler(), this.toggleStickyBlockVisibility();
      });
    }
    addToCartStickyBlockMobileHandler() {
      o(".sticky_block_mobile .add_to_cart_btn").then((t) => {
        t.addEventListener("click", (n) => {
          var i;
          n.preventDefault(), l(
            "exp_sticky_footer_add_to_cart",
            "Add to cart",
            "Button",
            `Sticky Footer. ${this.scrollDepthHandler()}`
          ), (i = e(".rhweb-fixed-buy-widget .buy-widget-container .btn-buy")) == null || i.click();
        });
      });
    }
    toggleStickyBlockVisibility() {
      o(".product-detail-form-container .buy-widget-container .btn-buy").then(() => {
        o(".sticky_block_mobile").then(() => {
          const t = e(".sticky_block_mobile"), n = e(".product-detail-form-container .buy-widget-container .btn-buy");
          function i() {
            const r = {
              root: null,
              threshold: 0.5
            };
            let a = new IntersectionObserver((d) => {
              d.forEach((_) => {
                _.isIntersecting ? t.style.display = "none" : t.style.display = "block", a.unobserve(_.target);
              }), a.disconnect();
            }, r);
            a.observe(n);
          }
          window.addEventListener("scroll", () => {
            i();
          }), i();
        });
      });
    }
    scrollDepthHandler() {
      const t = document.documentElement.scrollHeight, n = window.innerHeight;
      return `${(window.scrollY / (t - n) * 100).toFixed(0)}%`;
    }
    // ___________________________________________________________________________________________________________________________________________
    // CHECKOUT
    changeBtnReturnToCartHanlder() {
      window.location.href.match("/checkout") && o(".header-minimal .header-minimal-back-to-shop-button").then((t) => {
        var n;
        t.href !== "https://www.sportstech.de/checkout/cart" && (t.href = "https://www.sportstech.de/checkout/cart"), (n = t.textContent) != null && n.includes("Warenkorb anzeigen") || (t.innerHTML = `${p.arrowLeftIcon} Warenkorb anzeigen`);
      });
    }
  }
  new B(L);
})();
//# sourceMappingURL=index.js.map
