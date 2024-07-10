(function() {
  "use strict";
  const d = (n, e, o, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: o,
      event_loc: i
    }), console.log(`Event: ${n} | ${e} | ${o} | ${i.replace(/  +/g, " ")}`);
  }, b = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  }, m = (n) => new Promise((e) => {
    const o = document.querySelector(n);
    if (o)
      return e(o);
    const i = new MutationObserver(() => {
      const c = document.querySelector(n);
      c && (e(c), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = "https://conversionratestore.github.io/projects/geeni/img/amazon-prime/img", A = (
    /* HTML */
    `
<div class="top-amazon">
  <p><span class="fw-700">Fast, FREE delivery</span> with</p>
  <img src="${y}/Amazon_Prime_Logo_Blue.svg"
    alt="Amazon Prime logo">
</div>
`
  ), B = (
    /* HTML */
    `
<div class="warranty-sale-custom">
  <div class="container">
    <div class="warranty-sale-custom__container--desktop">
      <div>
        <p class="warranty-sale-custom__title">Warranty On All Products</p>
        <p class="warranty-sale-custom__description">365-days</p>
        <p class="warranty-sale-custom__subdescription">Direct from manufacturer</p>
      </div>
      <div>
        <p class="warranty-sale-custom__title"><span>Buy with</span> <span class="prime-img-wrap"><img
            src="${y}/Amazon_Prime_Logo_Blue.svg"
            alt="Amazon Prime logo"></span></p>
        <p class="warranty-sale-custom__description">Fast, FREE Delivery & Returns</p>
        <p class="warranty-sale-custom__subdescription">Guaranteed by Amazon</p>
      </div>
      <div>
        <p class="warranty-sale-custom__title">Buy More, Save More</p>
        <div class="warranty-sale-custom__three-columns">
          <div>
            <p class="warranty-sale-custom__description">10% off</p>
            <p class="warranty-sale-custom__subdescription">orders of $99+</p>
          </div>
          <div>
            <p class="warranty-sale-custom__description">15% off</p>
            <p class="warranty-sale-custom__subdescription">orders of $149+</p>
          </div>
          <div>
            <p class="warranty-sale-custom__description">20% off</p>
            <p class="warranty-sale-custom__subdescription">orders of $199+</p>
          </div>
        </div>
      </div>

    </div>
    <div class="warranty-sale-custom__container--mobile">
      <div class="warranty-sale-custom__special-block">
      <p class="warranty-sale-custom__title"><span>Buy with</span> <span class="prime-img-wrap"><img
            src="${y}/Amazon_Prime_Logo_Blue.svg"
            alt="Amazon Prime logo"></span></p>
        <p class="warranty-sale-custom__description">Fast, FREE Delivery & Returns</p>
        <p class="warranty-sale-custom__subdescription">Guaranteed by Amazon</p>
      </div>
      <div>
        <img src="https://conversionratestore.github.io/projects/geeni/img/home-app-web/check.svg" alt="">
        <div>
          <p><span class="fw-700">Direct from manufacturer</span></p>
          <p><span class="fw-700">365</span>-days warranty on all products</p>
        </div>
      </div>
      <div class="warranty-sale-custom__buy-block">
        <div class="warranty-sale-custom__buy">
          <img src="https://conversionratestore.github.io/projects/geeni/img/home-app-web/bonus.svg" alt="">
          <p><span class="fw-700">Buy More, Save More</span></p>
        </div>
        <div class="saves-comparison">
          <div>
            <div><span>SAVE</span><span>10% off</span></div>
            <div class="line"></div>
            <div><span>spend</span><span>$99</span></div>
          </div>
          <div>
            <div><span>SAVE</span><span>15% off</span></div>
            <div class="line"></div>
            <div><span>spend</span><span>$149</span></div>
          </div>
          <div>
            <div><span>SAVE</span><span>20% off</span></div>
            <div class="line"></div>
            <div><span>spend</span><span>$199</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`
  ), z = (
    /* HTML */
    `
<div class="crs-popup">
  <div class="container">
      <button class="crs-popup_close d-flex" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11 1L1 11M11 11L1 1" stroke="white" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <h2>Shipping & Return Policy</h2>
      <p>All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</h4>
      <p class="return-policy">Return Policy</p>
      <div class="crs-info">
        <p>We accept returns <span class="fw-700">up to 30 days</span> after delivery</p>
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
</div>
`
  ), S = (
    /* HTML */
    `
<div class="sticky-btn">
  <div class="sticky-btn-inner">
    <button>
        Buy with 
        <img src="https://conversionratestore.github.io/projects/geeni/img/amazon-prime/img/Amazon_Prime_Logo_White.svg" alt="Amazon Prime logo">
        <span class="sticky-btn__dot"></span>
        <span class="sticky-btn__price"></span>
      </button>
  </div>
</div>
`
  ), E = (n) => (
    /* HTML */
    `
<div class="crs-delivery" data-hide-prime="true">
    <div>
      <p><span class="fw-700">Free standard delivery</span> on orders over <span class="fw-700">$69</span><br><span class="fw-700"> • 30 days free return</span></p>
      <p>Approximate date of delivery, <span class="fw-700" data-delivery-type="standart">${n}</span> <img class="crs-tooltip" src="${y}/info_icon.svg" alt="open info popup"></p>
    </div>

    <div class="or-divider">
      <div></div>
      <span>OR</span>
      <div></div>
    </div>

    <div>
      <button>Buy with <img src="https://conversionratestore.github.io/projects/geeni/img/amazon-prime/img/Amazon_Prime_Logo_White.svg" alt="Amazon Prime logo"></button>
      <div>
        <p><span class="fw-700">FREE & fast delivery</span> guaranteed by Amazon<br><span class="fw-700"> • 30 days free return</span></p>
        <p>Approximate date of delivery, <span class="fw-700" data-delivery-type="prime"></span> <img class="prime-tooltip" src="${y}/info_icon.svg" alt="open info popup"></p>
      </div>
    </div>
  </div>
  ${z}
  ${S}
`
  ), F = (
    /* HTML */
    `
  <button class="buy-with-prime">Buy with <img src="https://conversionratestore.github.io/projects/geeni/img/amazon-prime/img/Amazon_Prime_Logo_White.svg" alt="Amazon Prime logo"></button>
`
  ), P = `/* TOP AMAZON */
.top-amazon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  background: #232F3E;
}
.top-amazon p {
  color: #FFF;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin: 0 8px 0 0;
}
.top-amazon img {
  position: relative;
  top: 6px;
  width: 51px;
  height: 33px;
}
@media (max-width: 768px) {
  .top-amazon {
    height: 54px;
    margin-bottom: 8px;
  }
  .top-amazon img {
    width: 46.364px;
    height: 30px;
  }
}

/* WARRANTY */
.warranty-sale {
  display: none !important;
}

.warranty-sale-custom {
  margin-bottom: 60px;
}
.warranty-sale-custom .prime-img-wrap {
  width: 59px;
  display: inline-block;
}
.warranty-sale-custom .prime-img-wrap img {
  width: 58.821px;
  height: 37px;
  position: absolute;
  top: 2px;
  right: 0;
}
.warranty-sale-custom .warranty-sale-custom__container--desktop {
  display: flex;
  justify-content: space-between;
}
.warranty-sale-custom .warranty-sale-custom__container--desktop > div {
  display: flex;
  padding: 36px 18px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background: #F8F8F8;
  text-align: center;
  width: 32.1%;
}
.warranty-sale-custom .warranty-sale-custom__container--desktop > div:nth-child(2) .warranty-sale-custom__title {
  display: flex;
  align-items: flex-end;
  gap: 5px;
  position: relative;
}
.warranty-sale-custom .warranty-sale-custom__container--desktop > div:nth-child(2) .warranty-sale-custom__title span {
  color: var(--Black-900, #000) !important;
}
.warranty-sale-custom .warranty-sale-custom__title {
  color: var(--Light-blue-900, #00B0EE);
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  /* 120% */
  margin: 0 0 30px;
}
.warranty-sale-custom .warranty-sale-custom__description {
  color: var(--Black-900, #000);
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  /* 62.5% */
  margin: 0 0 14px;
}
.warranty-sale-custom .warranty-sale-custom__subdescription {
  color: var(--Grey-800, #4A4A4A);
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  /* 150% */
  letter-spacing: 1.08px;
  text-transform: uppercase;
  margin: 0;
}
.warranty-sale-custom .warranty-sale-custom__three-columns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 2px;
}
.warranty-sale-custom .warranty-sale-custom__container--mobile {
  display: none;
  gap: 16px;
}
.warranty-sale-custom .warranty-sale-custom__buy {
  text-align: center;
}
.warranty-sale-custom .warranty-sale-custom__container--mobile > div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16px 24px;
  border-radius: 8px;
  background: var(--Blue-100, #F2F7F8);
}
.warranty-sale-custom .warranty-sale-custom__container--mobile > div:first-child div {
  text-align: center;
}
.warranty-sale-custom .warranty-sale-custom__container--mobile .warranty-sale-custom__buy-block img {
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
}
.warranty-sale-custom .warranty-sale-custom__container--mobile > div p {
  margin: 0;
  color: var(--Grey-900, #333);
  font-size: 16px;
  line-height: 28px;
}
.warranty-sale-custom .saves-comparison {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  margin-top: 12px;
}
.warranty-sale-custom .saves-comparison > div {
  border-radius: 8px;
  background: var(--White, #FFF);
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px;
  text-align: center;
}
.warranty-sale-custom .saves-comparison > div > div {
  flex-direction: column;
  display: flex;
}
.warranty-sale-custom .saves-comparison > div > div:nth-of-type(1) span:first-child {
  color: var(--Grey-900, #333);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  /* 150% */
  text-transform: uppercase;
}
.warranty-sale-custom .saves-comparison > div > div:nth-of-type(1) span:last-child {
  color: var(--Light-blue-900, #00B0EE);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  /* 142.857% */
  text-transform: lowercase;
}
.warranty-sale-custom .saves-comparison > div > div:nth-of-type(3) span:first-child {
  color: var(--Grey-800, #4A4A4A);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  /* 150% */
  text-transform: uppercase;
}
.warranty-sale-custom .saves-comparison > div > div:nth-of-type(3) span:last-child {
  color: var(--Grey-900, #333);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  /* 112.5% */
  text-transform: lowercase;
}
.warranty-sale-custom .line {
  background: #F0F0F0;
  width: 1px;
  margin: 0 12%;
}
.warranty-sale-custom .crs-products .heading-2 {
  margin: 0 auto 32px;
  text-align: center;
}
.warranty-sale-custom .container {
  max-width: 1352px;
  margin: 0 auto;
  padding: 0 16px;
}
@media (max-width: 768px) {
  .warranty-sale-custom {
    margin-bottom: 28px;
  }
  .warranty-sale-custom .warranty-sale-custom__container--desktop {
    display: none;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile {
    display: flex;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile {
    flex-direction: column;
    gap: 4px;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div:first-child div {
    text-align: start;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div:nth-child(2) {
    flex-direction: row;
    gap: 12px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div p {
    color: var(--Grey-900, #333);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    /* 142.857% */
    text-transform: capitalize;
  }
  .warranty-sale-custom .warranty-sale-custom__buy {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile .warranty-sale-custom__buy-block img {
    width: 24px;
    height: 24px;
    margin-bottom: 0;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div {
    padding: 12px 20px;
  }
  .warranty-sale-custom .saves-comparison > div {
    display: flex;
    flex-direction: column;
  }
  .warranty-sale-custom .saves-comparison > line {
    display: none;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div.warranty-sale-custom__special-block {
    border-radius: 16px;
    background: #F8F8F8;
    padding: 32px 18px;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div.warranty-sale-custom__special-block .warranty-sale-custom__title {
    font-size: 18px;
    line-height: 24px;
    position: relative;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div.warranty-sale-custom__special-block .warranty-sale-custom__description {
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin: 27px 0 6px;
    text-align: center;
  }
  .warranty-sale-custom .warranty-sale-custom__container--mobile > div.warranty-sale-custom__special-block .warranty-sale-custom__subdescription {
    color: var(--Grey-800, #4A4A4A);
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    /* 150% */
    letter-spacing: 1.08px;
    text-transform: uppercase;
  }
}

/* DELIVERY */
.delivery {
  display: none;
}

.crs-delivery {
  margin-bottom: 16px;
}
.crs-delivery .fw-700 {
  color: #000;
}
.crs-delivery p {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
}
.crs-delivery > div:nth-child(1) {
  text-align: center;
}
.crs-delivery > div:nth-child(1) p {
  color: var(--mygeeni-com-scorpion, #5B5B5B);
}
.crs-delivery .or-divider {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 24px 0 12px;
}
@media (max-width: 768px) {
  .crs-delivery .or-divider {
    gap: 8px;
  }
}
.crs-delivery .or-divider span {
  color: var(--Blue-900, #023F88);
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  /* 100% */
  text-transform: uppercase;
}
.crs-delivery .or-divider div {
  background: #EBEEF6;
  height: 1px;
  width: 100%;
}
.crs-delivery[data-hide-prime=true] > .or-divider, .crs-delivery[data-hide-prime=true] > div:nth-child(3) {
  display: none;
}
.crs-delivery > div:nth-child(3) {
  padding: 20px 20px 12px 20px;
  background: #E8F8FE;
  text-align: center;
}
.crs-delivery > div:nth-child(3) .fw-700 {
  color: #023F88;
}
.crs-delivery > div:nth-child(3) p {
  color: #1B1B1B;
}
.crs-delivery > div:nth-child(3) button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 30px;
  background: #1A99FF;
  height: 54px;
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: #FFF;
  font-weight: 700;
  margin-bottom: 16px;
}
.crs-delivery > div:nth-child(3) button img {
  position: relative;
  top: 5px;
  width: 45px;
  height: 27px;
}
@media (min-width: 768px) {
  .crs-delivery br {
    display: none;
  }
}
@media (max-width: 768px) {
  .crs-delivery {
    margin: 0 -20px 20px;
  }
}
.crs-delivery .crs-tooltip {
  filter: brightness(0) saturate(100%) invert(0%) sepia(90%) saturate(7462%) hue-rotate(9deg) brightness(103%) contrast(110%);
}
.crs-delivery .prime-tooltip,
.crs-delivery .crs-tooltip {
  position: relative;
  top: 3px;
  padding: 2px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

/* Add Cirlce Prime Badge and change slider nav arrows on the Collection Page */
.collection-section .product__badge__item.product__badge__item--custom {
  background: #DD5611;
}
.collection-section .product__badge__item.product__badge__item--saving {
  background: #4A30CA;
}
.collection-section .product__media__holder:not([aria-label="Smart Home Starter Pack"]):not([aria-label="Home Surveillance Bundle"]):not([aria-label="Color Lighting Bundle"]):not([aria-label="Indoor Security System Bundle"]) .product__media__image::after {
  content: "";
  position: absolute;
  top: 5px;
  right: 5px;
  background: url("https://conversionratestore.github.io/projects/geeni/img/amazon-prime/img/Prime_Circle.svg") no-repeat;
  background-size: cover;
  z-index: 3;
  width: 56px;
  height: 56px;
}
@media (max-width: 768px) {
  .collection-section .product__media__holder:not([aria-label="Smart Home Starter Pack"]):not([aria-label="Home Surveillance Bundle"]):not([aria-label="Color Lighting Bundle"]):not([aria-label="Indoor Security System Bundle"]) .product__media__image::after {
    width: 40px;
    height: 40px;
  }
}

.collection-section .swiper-button-next:after,
.collection-section .swiper-button-prev:after {
  color: var(--mygeeni-com-big-stone, #122231);
  font-family: "Inter", sans-serif;
  font-size: 8px;
  font-weight: 400;
  line-height: 16px;
}

/* POPUP */
.crs-popup {
  font-family: "Avenir Next Rounded", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 999999;
  background: rgba(27, 27, 27, 0.4);
  padding: 10px 0;
  display: none;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
}

.crs-popup.active {
  display: flex;
  opacity: 1;
  pointer-events: auto;
}

.crs-popup .container {
  border-radius: 8px;
  background: var(--bg-light-blue, #E8F8FE);
  padding: 26px 16px 46px;
  position: relative;
  max-width: calc(100% - 40px);
  margin: 0 20px;
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
  padding: 10px 26px;
  position: relative;
  margin-bottom: 20px;
  text-align: center;
}

.crs-info > p {
  color: var(--font-h, #1B1B1B);
  font-size: 12px;
  line-height: 22px;
  margin: 0;
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

.return-policy {
  color: var(--Font-H, #1B1B1B);
  font-size: 13px;
  font-weight: 700 !important;
  line-height: 22px;
  margin-bottom: 16px;
  font-weight: 700;
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
.sticky-btn {
  display: none;
}

/* BUY WITH PRIME IN THE CART */
.buy-with-prime {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 30px;
  background: #1A99FF;
  height: 54px;
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: #FFF;
  font-weight: 700;
  margin-top: 4px;
}
.buy-with-prime img {
  position: relative;
  top: 5px;
  width: 45px;
  height: 27px;
}/*# sourceMappingURL=styles.css.map */`, I = `.yotpo-widget-instance,
.yotpo-widget-clear {
  width: 100%;
}

.yotpo-bottom-line-scroll-panel {
  justify-content: space-between;
  align-items: center !important;
}

.review-link {
  display: none !important;
}`, T = `.product-single__media-slider::after {
  content: "";
  position: absolute;
  top: 6px;
  right: 6px;
  background: url("https://conversionratestore.github.io/projects/geeni/img/amazon-prime/img/Prime_Circle.svg") no-repeat;
  background-size: cover;
  z-index: 3;
  width: 80px;
  height: 80px;
}

@media (max-width: 768px) {
  .product-single__media-slider::after {
    top: 0;
    right: 2px;
  }
}`, L = `/* STICKY */
.sticky-btn {
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 54px;
  z-index: 120;
  background: #1A99FF;
}

@media (max-width: 768px) {
  .sticky-btn {
    display: flex !important;
  }
}

.sticky-btn button {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-size: 16px;
  font-weight: 700;
  line-height: 33px;
  gap: 4px;
}

.sticky-btn .sticky-btn__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #fff;
  flex-shrink: 0;
  display: block;
}

.sticky-btn img {
  position: relative;
  top: 7px;
  width: 45px;
  height: 25px;
}

.sticky-btn .sticky-btn__price {
  margin-left: 2px;
}

@media (max-width: 768px) {
  .sticky-btn-wrapper {
    display: none !important;
  }
}`;
  k("exp_amazon"), b({ name: "AmazonPay", dev: "AK" });
  function _() {
    const n = window.location.pathname;
    if (n === "/" || n === "/index")
      return "home";
    if (n.includes("/collections/") && !n.includes("/products/"))
      return "collections";
    if (n.includes("/products/"))
      return "product";
  }
  function h(n) {
    const e = document.createElement("style");
    e.textContent = n, document.head.insertAdjacentElement("beforeend", e);
  }
  class q {
    constructor() {
      this.initializePage();
    }
    initializePage() {
      this.addBlocks();
    }
    addBlocks() {
      m("#MainContent").then((e) => e.insertAdjacentHTML("afterbegin", A)), m(".warranty-sale").then((e) => e.insertAdjacentHTML("afterend", B));
    }
    addEvents() {
    }
  }
  class R {
    constructor(e) {
      this.pdpType = e, this.initializePage();
    }
    initializePage() {
      this.hideAllReviews(), this.addPrimeCircleIfNeeded(), this.addComponent();
    }
    addComponent() {
      function e() {
        const i = setInterval(() => {
          var c, g;
          if (document.querySelector(".product__block.product__form__wrapper") && ((c = document.querySelector("[data-delivery-date]")) != null && c.textContent)) {
            clearInterval(i);
            const v = document.querySelector(".product__block.product__form__wrapper"), x = (g = document.querySelector("[data-delivery-date]")) == null ? void 0 : g.textContent, w = E(x);
            v.insertAdjacentHTML("afterend", w);
          }
        }, 100);
      }
      if (e(), this.pdpType !== "bundle") {
        let o = function() {
          m(".crs-delivery").then((s) => s.dataset.hidePrime = "false");
        }, i = function() {
          const r = setInterval(() => {
            var a, t, l;
            if ((t = (a = document.querySelector("delivery-promise-wc")) == null ? void 0 : a.shadowRoot) != null && t.querySelector(".AmazonLayout__nowrap") && document.querySelector('[data-delivery-type="prime"]')) {
              clearInterval(r);
              const p = document.querySelector('[data-delivery-type="prime"]'), u = (l = document.querySelector("delivery-promise-wc").shadowRoot.querySelector(".AmazonLayout__nowrap")) == null ? void 0 : l.textContent;
              p.innerText = c(u);
            }
          }, 100);
        }, c = function(s) {
          const r = /(?:Tomorrow )?(?:\w+ )?(\w+) (\d+)/, a = s.match(r);
          if (!a)
            return "Invalid date";
          const [, t, l] = a, p = /* @__PURE__ */ new Date();
          let u = /* @__PURE__ */ new Date(`${t} ${l}, ${p.getFullYear()}`);
          return s.startsWith("Tomorrow") && u.setDate(p.getDate() + 1), u.toLocaleDateString("en-US", {
            weekday: "short",
            // "Mon" for Monday
            month: "short",
            // "Jul" for July
            day: "numeric"
            // "16" for the 16th
          });
        }, g = function() {
          const r = setInterval(() => {
            var a, t, l;
            if (document.querySelector(".crs-delivery button") && ((l = (t = (a = document.querySelector("delivery-promise-wc")) == null ? void 0 : a.querySelector("#generic-promise-wc")) == null ? void 0 : t.shadowRoot) != null && l.querySelector(".amazon-pay-button")) && document.querySelector(".sticky-btn")) {
              clearInterval(r);
              const p = document.querySelector(".crs-delivery button"), u = document.querySelector(".sticky-btn"), f = document.querySelector("delivery-promise-wc").querySelector("#generic-promise-wc").shadowRoot.querySelector(".amazon-pay-button");
              p.addEventListener("click", () => {
                d("exp_amazon_pdp_u_buy_with_prime", "Buy with prime", "Button", "Product details"), setTimeout(() => {
                  f.click();
                }, 100);
              }), u.addEventListener("click", () => {
                d("exp_amazon_pdp_s_buy_with_prime", "Buy with prime", "Button", "Sticky button"), setTimeout(() => {
                  f.click();
                }, 100);
              });
            }
          }, 100);
        }, v = function() {
          const r = setInterval(() => {
            if (document.querySelector(".crs-tooltip") && document.querySelector(".crs-popup") && document.querySelector(".crs-popup_close")) {
              clearInterval(r);
              const a = document.querySelector(".crs-tooltip"), t = document.querySelector(".crs-popup"), l = document.querySelector(".crs-popup_close");
              a.addEventListener("click", () => {
                t.classList.add("active"), d("exp_amazon_pdp_tooltip", "Tooltip", "Button", "Free & fast delivery on orders over $69");
              }), l.addEventListener("click", () => {
                t.classList.remove("active");
              }), t.addEventListener("click", (p) => {
                p.target.closest(".container") || p.target.classList.remove("active");
              });
            }
          }, 100);
        }, x = function() {
          setInterval(() => {
            const s = document.querySelector(".sticky-btn-wrapper__price"), r = document.querySelector(".sticky-btn__price");
            r && s && (r.textContent = s.textContent);
          }, 1e3);
        }, w = function() {
          const r = setInterval(() => {
            var a, t;
            (t = (a = document.querySelector("delivery-promise-wc")) == null ? void 0 : a.shadowRoot) != null && t.querySelector(".AmazonLayout__icon") && document.querySelector(".prime-tooltip") && (clearInterval(r), document.querySelector(".prime-tooltip").addEventListener("click", () => {
              d("exp_amazon_pdp_learn_more", "Learn more", "Button", "Free & fast delivery guaranteed by Amazon"), document.querySelector("delivery-promise-wc").shadowRoot.querySelector(".AmazonLayout__icon").click(), d("exp_amazon_free_delivery_view", "View on screen", "Element visibility", "Popup Get fast free delivery");
            }));
          }, 100);
        };
        console.log("Single page"), h(L), o(), g(), i(), v(), x(), w();
      }
    }
    hideAllReviews() {
      h(I);
    }
    addPrimeCircleIfNeeded() {
      this.pdpType !== "bundle" && h(T);
    }
  }
  class C {
    constructor() {
      this.handleStickyCart();
    }
    handleStickyCart() {
      m(".payments-cart-exp ul #AmazonPayButton").then((e) => {
        document.querySelector(".payments-cart-exp").insertAdjacentHTML("beforeend", F), m(".buy-with-prime").then((o) => {
          o.addEventListener("click", (i) => {
            i.preventDefault(), d("exp_amazon_cart_buy_with_prime", "Buy with prime", "Button", "Cart"), e.click();
          });
        });
      });
    }
  }
  m("head").then(() => {
    if (h(P), _() === "home" && new q(), _() === "product") {
      let n = function() {
        const e = window.location.pathname;
        return [
          "/products/full-security-bundle",
          "/products/color-lighting-bundle",
          "/products/indoor-security-system-bundle",
          "/products/smart-home-starter-pack"
        ].some((c) => e.includes(c)) ? "bundle" : "single";
      };
      new R(n());
    }
    new C();
  });
})();
//# sourceMappingURL=index.js.map