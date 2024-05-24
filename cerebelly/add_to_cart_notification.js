(function() {
  "use strict";
  const l = (c, e, n, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: e,
      event_type: n,
      event_loc: r
    }), console.dir(`Event: ${c} | ${e} | ${n} | ${r}`);
  }, S = ({ name: c, dev: e }) => {
    console.dir(
      `%c EXP: ${c} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, f = (c) => document.querySelectorAll(c), t = (c) => document.querySelector(c), E = (c) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", c, "variant_1"));
    }, 1e3);
  }, q = (c) => {
    let e = setInterval(function() {
      typeof window.FS == "function" && typeof window.FS.event == "function" && (clearInterval(e), console.dir("init fullStory"), window.FS.event("SetVariant", {
        name: c,
        variant: "variant_1"
      }));
    }, 1e3);
  }, x = (c, e, n, r, o = 1e3, i = 0.5) => {
    let s, a;
    if (s = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? a = setTimeout(() => {
          l(
            e,
            d[0].target.dataset.visible || n || "",
            "Visibility",
            r
          ), s.disconnect();
        }, o) : (console.log("Element is not fully visible"), clearTimeout(a));
      },
      { threshold: [i] }
    ), typeof c == "string") {
      const d = document.querySelector(c);
      d && s.observe(d);
    } else
      s.observe(c);
  }, g = (c) => new Promise((e) => {
    if (t(c))
      return e(t(c));
    const n = new MutationObserver(() => {
      t(c) && (e(t(c)), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), j = (c) => new Promise((e, n) => {
    var r = 0, o = setInterval(i, 1e3);
    function i() {
      r++, r > c && (clearInterval(o), e(!0));
    }
    document.addEventListener("click", function() {
      e(!1);
    });
  }), m = {
    checkbox: (
      /*html */
      `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="#0EB31F"/>
      <path d="M12.3758 5.14365C12.1989 4.96677 11.8956 4.96677 11.7188 5.14365L6.99345 9.86896L4.28966 7.16517C4.11277 6.98829 3.80955 6.98829 3.63266 7.16517C3.45578 7.34206 3.45578 7.64529 3.63266 7.82217L6.66495 10.8545C6.74918 10.9387 6.8671 10.9892 6.99345 10.9892C7.11979 10.9892 7.23772 10.9387 7.32195 10.8545L12.3673 5.79222C12.5442 5.61534 12.5442 5.31211 12.3673 5.13523H12.3758V5.14365Z" fill="white" stroke="white" stroke-width="0.3" stroke-miterlimit="10"/>
  </svg>
  `
    ),
    close: `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73561 0.363702C1.38414 0.0122297 0.814294 0.0122297 0.462823 0.363702C0.111351 0.715173 0.111351 1.28502 0.462823 1.63649L4.82642 6.00009L0.462823 10.3637C0.111351 10.7152 0.111351 11.285 0.462822 11.6365C0.814294 11.988 1.38414 11.988 1.73561 11.6365L6.09921 7.27289L10.4628 11.6365C10.8143 11.988 11.3841 11.988 11.7356 11.6365C12.0871 11.285 12.0871 10.7152 11.7356 10.3637L7.37201 6.00009L11.7356 1.63649C12.0871 1.28502 12.0871 0.715174 11.7356 0.363702C11.3841 0.0122299 10.8143 0.0122295 10.4628 0.363701L6.09922 4.7273L1.73561 0.363702Z" fill="white" fill-opacity="0.5"/>
  </svg>`,
    arrowRight: `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M11.7769 4.44951L7.54411 0.21672C7.47447 0.146501 7.39161 0.0907677 7.30032 0.0527335C7.20902 0.0146993 7.1111 -0.00488281 7.0122 -0.00488281C6.91331 -0.00488281 6.81539 0.0146993 6.72409 0.0527335C6.6328 0.0907677 6.54994 0.146501 6.4803 0.21672C6.34076 0.357085 6.26244 0.546963 6.26244 0.744882C6.26244 0.942802 6.34076 1.13268 6.4803 1.27305L9.47696 4.26971H0.749167C0.550476 4.26971 0.359922 4.34864 0.219426 4.48914C0.07893 4.62964 0 4.82019 0 5.01888C0 5.21757 0.07893 5.40813 0.219426 5.54862C0.359922 5.68912 0.550476 5.76805 0.749167 5.76805H9.43951L6.44284 8.72726C6.30276 8.86833 6.22446 9.05927 6.22516 9.25807C6.22586 9.45687 6.30551 9.64725 6.44658 9.78733C6.58765 9.92741 6.77859 10.0057 6.9774 10.005C7.1762 10.0043 7.36658 9.92465 7.50666 9.78358L11.7395 5.55079C11.8179 5.48326 11.8816 5.40019 11.9263 5.30683C11.9711 5.21347 11.996 5.11184 11.9996 5.00836C12.0031 4.90488 11.9851 4.8018 11.9468 4.70561C11.9085 4.60942 11.8506 4.52222 11.7769 4.44951Z" fill="white"/>
  </svg>`,
    arrowRightSlide: `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M6 17L14 9L6 0.999999" stroke="#15206B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    arrowLeftSlide: `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M12 17L4 9L12 0.999999" stroke="#15206B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
  }, b = {
    3: ["pumpkin-bundle", "bone-broth-protein-pack-3"],
    4: ["smart-bar-sampler"],
    5: ["5-7-months-bundle", "8-9-months-bundle", "10-11-months-bundle", "toddler-snack-pack", "plant-based-protein-pack", "iron-rich-heroes", "superfoods-variety-pack", "fabulous-fiber"],
    6: ["12-14-months-bundle", "15-17-months-bundle", "18-20-months-bundle", "21-24-months-bundle", "25-months", "spring-sprouts-2", "smart-picks-14"]
  }, T = (c, e, n, r, o) => (
    /* HTML */
    ` <div class="crs_notification">
  <div class="crs_notification_head justify-between">
      <div class="items-center">
          ${m.checkbox}
          <h3>Added to cart</h3>
      </div>
      <button type="button" class="crs_close">
          ${m.close}
      </button>
  </div>
  <div class="crs_notification_body justify-between">
      <div class="d-flex">
          <img src="${c}" alt="${e}">
          <div>
              <div class="crs_notification_title">${e}</div>
              <div class="crs_notification_info">${n}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${r}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-lg-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${o})${m.arrowRight}</a>
  </div>
</div>`
  ), y = `
<nav class="crs_nav">
  <ul class="d-flex">
    <li><a href="#ingredients">ingredients</a></li>
    <li><a href="#nutrients">Nutritients</a></li>
    <li><a href="#usvsthem">the cerebelly standard</a></li>
    <li><a href="#puree">directions & safety</a></li>
  </ul>
</nav>`, z = `
<button type="button" class="crs_arrow crs_arrow_prev" hidden>${m.arrowLeftSlide}</button>
<button type="button" class="crs_arrow crs_arrow_next" hidden>${m.arrowRightSlide}</button>`, I = (c) => `<p class="crs_tastes"><span>1</span> of ${c} flavors<p>`, B = `.items-center {
  display: flex;
  align-items: center;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 992px) {
  .flex-lg-column-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}/*# sourceMappingURL=base.css.map */`, P = `.crs_notification {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 30px 30px 0 0;
  background: #15206B;
  z-index: 9999;
  padding: 24px 24px 32px;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
}
.crs_notification.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.crs_notification .subscribe {
  display: none !important;
}
.crs_notification h3 {
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
.crs_notification svg {
  flex-shrink: 0;
}
.crs_notification_body {
  padding: 16px 0;
}
.crs_notification_body img {
  border-radius: 8px;
  background-color: #EBEFF8;
  margin-right: 12px;
  width: 70px;
  height: 70px;
  -o-object-fit: contain;
     object-fit: contain;
  flex-shrink: 0;
}
.crs_notification_title {
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 4px;
  max-width: 155px;
}
.crs_notification_info {
  color: rgba(255, 255, 255, 0.5);
}
.crs_notification_price {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding-left: 20px;
  text-align: right;
}

.crs_continue_shop {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.21px;
  text-transform: capitalize;
  white-space: nowrap;
  flex-shrink: 0;
}

.crs_view_cart {
  border-radius: 25px;
  background: #FC4D38;
  margin-left: 12px;
  color: #FFF;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  padding: 0;
  width: 100%;
  text-decoration: none;
}
.crs_view_cart svg {
  margin-left: 8px;
}

.crs_close {
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
}

.crs_hide_cart .modal.css-1m229m3,
.crs_hide_cart .modal.css-8z7pw4 {
  display: none !important;
}

.modal .product-wrapper .css-5nnxvq .product-image-wrapper {
  padding: 0;
  max-height: none;
  height: 100%;
  position: relative;
  justify-content: space-between;
}

.modal .css-12a0csp p.pdp-net-weight {
  color: var(--Blue-500, #3856A7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0 0 0;
}

.modal .product-wrapper .css-5nnxvq .tm-text {
  color: rgba(21, 32, 107, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 12px 0 0 0 !important;
}

.modal .product-wrapper .css-5nnxvq .action-wrapper {
  padding: 20px 20px 16px;
  margin-top: 12px;
}

.modal .product-wrapper .css-5nnxvq .unit-price {
  flex-direction: row !important;
  max-width: 100% !important;
  margin: 0 0 16px 0;
}

.product-wrapper .css-5nnxvq .unit-price .regular {
  width: -moz-fit-content;
  width: fit-content;
  margin-right: 6px;
  color: var(--Blue-500, #3856A7);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  text-decoration-line: line-through;
  margin-bottom: 0;
}

.modal .product-wrapper .css-5nnxvq .unit-price .discount {
  color: var(--Green-500, #00865A);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  margin-right: 8px;
}

.modal .product-wrapper .css-5nnxvq .prices {
  color: var(--Blue-500, #3856A7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-transform: lowercase;
  letter-spacing: normal;
}

.modal .css-5nnxvq .subscribe {
  width: 100%;
  display: block;
  border-radius: 100px;
  background: rgba(201, 229, 222, 0.5);
  color: var(--Green-500, #00865A);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px;
  text-align: center;
  margin-bottom: 8px;
  position: relative;
}

.modal:not(.css-1ryd8t3) .css-5nnxvq .subscribe:before {
  content: "";
  position: absolute;
  left: calc(100% - 8px);
  top: calc(100% - 5px);
  background: url("https://conversionratestore.github.io/projects/cerebelly/img/arrow-arc.svg") no-repeat center/contain;
  width: 25px;
  height: 26px;
}

.modal .product-wrapper button.button.red {
  border-radius: 100px;
  background: var(--Orange-500, #FC4D38);
  width: 100%;
  font-size: 16px;
  padding: 18px 20px;
}
.modal .product-wrapper button.button.red:hover {
  background-color: rgb(255, 178, 196);
}

.modal .product-wrapper .scrolled button.button.red {
  padding: 6px 20px;
  min-height: 48px;
}

.modal .product-wrapper .action.add {
  width: 100%;
}

.modal .css-12a0csp h2 {
  color: var(--Blue-600, #15206B);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: lowercase;
  margin-bottom: 10px;
}

.modal .css-12a0csp .product-wrapper .right-side {
  display: grid;
}

.modal .css-12a0csp .product-wrapper .right-side section:nth-child(3) {
  order: -1;
}

.modal .css-12a0csp .product-wrapper .right-side section:first-child,
.developmental-section,
.standard-section,
.safety-usage-section {
  order: 2;
}

.crs_nav {
  min-height: 48px;
  margin: 24px -24px 0;
}
.crs_nav ul {
  overflow-x: auto;
  background: var(--Blue-600, #15206B);
  list-style-type: none;
}
.crs_nav.fixed ul {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100px);
}
.crs_nav.active ul {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  transition: all 0.2s ease;
}
.crs_nav a {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.21px;
  text-transform: capitalize;
  opacity: 0.8;
  padding: 14px 8px;
  border-bottom: 2px solid transparent;
  margin-right: 8px;
  text-wrap: nowrap;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  flex-shrink: 0;
}
.crs_nav a.active {
  opacity: 1;
  border-color: #FC4D38;
  font-weight: 600;
}

.css-s7fk0u .explanation-video .directions-safety {
  text-decoration: underline;
}

.modal .product-wrapper .css-5nnxvq .action-wrapper > * {
  max-width: 360px !important;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto !important;
}

.css-12a0csp .next,
.css-12a0csp .prev {
  display: none;
}

.crs_arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFD9E0;
  background-size: 18px;
  position: absolute;
  top: calc(50% - 136px);
  transform: translateY(-50%);
  z-index: 3;
  border: none;
  cursor: pointer;
  padding: 0;
}
.crs_arrow:not([hidden]) {
  display: flex;
}
.crs_arrow svg {
  margin: auto;
  display: block;
  flex-shrink: 0;
}
.crs_arrow_prev {
  left: 8px;
}
.crs_arrow_next {
  right: 8px;
}

.css-12a0csp p.crs_tastes,
p.crs_tastes {
  color: #FC4D38;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.css-12a0csp p.crs_tastes + p,
p.crs_tastes + p {
  display: none;
}

.product-image-wrapper p:not(.pdp-net-weight, .crs_tastes) {
  display: none;
}

.css-12a0csp .product-wrapper .left-side section {
  max-height: none !important;
}

.css-ylm3vf .cart-wrapper .cart-product-wrapper .cart-product .cart-product-reset {
  width: -moz-fit-content;
  width: fit-content;
}

.modal .product-wrapper .css-5nnxvq {
  padding-top: 12px;
}
.modal .product-wrapper .css-5nnxvq picture {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.modal .product-wrapper .css-5nnxvq picture img {
  width: calc(100% - 24px);
  margin: 0 auto;
  -o-object-fit: contain;
     object-fit: contain;
  display: block;
}

@media (min-width: 992px) {
  .modal .css-12a0csp .product-wrapper {
    padding: 0 20px;
  }
  .crs_notification {
    bottom: auto;
    left: auto;
    top: 127px;
    right: 0;
    max-width: 375px;
    border-radius: 30px 0px 0px 30px;
    padding: 24px;
    transform: translateX(100%);
  }
  .crs_notification.active {
    transform: translateX(0);
  }
  .crs_notification h3 {
    font-size: 16px;
  }
  .crs_notification_body img {
    width: 96px;
    height: 96px;
  }
  .crs_view_cart {
    margin-left: 0;
    margin-bottom: 12px;
  }
  .crs_nav {
    position: fixed;
    top: 0;
    right: 20px;
    max-width: 840px;
    margin: 0;
    width: 100%;
    z-index: 9999;
    width: -moz-fit-content;
    width: fit-content;
  }
  .crs_nav ul {
    border-radius: 0px 0px 50px 50px;
    background: #F2F4FA;
    padding: 0 80px;
  }
  .crs_nav ul a {
    padding: 27.5px 8px;
    font-size: 16px;
    color: var(--Blue-500, #3856A7);
    font-weight: 500;
  }
  .crs_nav ul a.active {
    color: var(--Blue-600, #15206B);
  }
  .crs_nav .default-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
    display: flex;
  }
  .modal .css-12a0csp .product-wrapper .right-side {
    padding: 92px 0;
  }
  .modal .product-wrapper .css-5nnxvq {
    padding-top: 16px;
  }
  .modal .product-wrapper .css-5nnxvq picture img {
    width: calc(100% - 32px);
  }
  .modal .product-wrapper .css-5nnxvq .action-wrapper {
    margin-top: 16px;
  }
  .modal .css-12a0csp p.pdp-net-weight {
    font-size: 16px;
    margin-top: 12px;
  }
  .modal .css-12a0csp .product-wrapper .left-side {
    padding: 16px 0 50px;
  }
  .css-mc9jj7 .controls .default-close {
    right: 43px;
  }
  .modal .css-12a0csp h2 {
    font-size: 28px;
    line-height: 34px;
  }
  .product-wrapper .css-5nnxvq .unit-price .regular {
    font-size: 18px;
  }
  .product-wrapper .css-5nnxvq .unit-price .discount {
    font-size: 20px !important;
  }
  .product-wrapper .css-5nnxvq .unit-price .prices {
    font-size: 16px;
  }
  .modal .product-wrapper .css-5nnxvq .tm-text {
    font-size: 14px;
    line-height: 18px;
  }
  .modal .css-5nnxvq .subscribe {
    padding: 7px;
  }
  .crs_arrow_prev {
    left: 24px;
  }
  .crs_arrow_.next {
    right: 24px;
  }
  .css-12a0csp p.crs_tastes,
  p.crs_tastes {
    font-size: 18px;
  }
}
@media (max-width: 1279px) {
  .crs_nav ul {
    padding: 0 44px 0 24px;
  }
  .modal.css-1ryd8t3 .default-close,
  .modal.css-mc9jj7 .default-close,
  .modal.css-194jzej .default-close {
    right: 24px;
  }
}
@media (max-width: 991px) {
  .modal .css-12a0csp .product-wrapper .left-side {
    padding: 24px 24px 0 !important;
    z-index: 1;
  }
  .modal .css-12a0csp .product-wrapper .right-side section {
    padding: 30px 20px;
  }
  .modal .css-12a0csp .product-wrapper .right-side {
    padding: 20px 24px 120px;
  }
  .modal.css-194jzej .css-12a0csp .product-wrapper .right-side,
  .modal.css-1ryd8t3 .css-12a0csp .product-wrapper .right-side {
    padding-bottom: 0;
  }
  .modal .css-12a0csp .product-wrapper .right-side > div[style="height: 50px;"] {
    display: none;
  }
  .modal.css-1ryd8t3 .default-close,
  .modal.css-mc9jj7 .default-close,
  .modal.css-194jzej .default-close {
    right: 13px !important;
    top: 13px !important;
    padding: 13px;
    display: flex;
    margin: 0;
  }
  .modal.css-1ryd8t3 .default-close img,
  .modal.css-mc9jj7 .default-close img,
  .modal.css-194jzej .default-close img {
    width: 18px;
    height: 18px;
  }
  .crs_nav ul::-webkit-scrollbar {
    height: 0;
    width: 0;
    display: none;
    -webkit-appearance: none;
            appearance: none;
  }
  #attentive_overlay.crs_top iframe {
    top: auto !important;
    bottom: 248px !important;
  }
  .crs_arrow {
    top: calc(50% - 113px);
  }
}
@media (max-width: 360px) {
  .crs_notification {
    padding-left: 16px;
    padding-right: 16px;
  }
}/*# sourceMappingURL=main.css.map */`;
  S({ name: "Enhancements on PDP and new Add to Cart notification", dev: "Olha" }), E("new_add_to_cart"), q("new_add_to_cart");
  const v = window.innerWidth < 991 ? "mobile" : "desktop";
  class w {
    constructor(e) {
      this.notShowExitIntent = () => {
        this.notExitPopup = !0, setTimeout(() => {
          this.notExitPopup = !1;
        }, 500);
      }, this.device = e, this.isSelectorWrapper = this.getSelectorWrapper(), this.clickRemove = !1, this.clickAdd = !1, this.notExitPopup = !1, this.type = "", this.init();
    }
    init() {
      this.appendStyleAndScript(), this.handleUserInactive(this.device === "desktop" ? 20 : 10), this.handleUserAfte180();
      let e = 0;
      g(".e-nav .mobile-cart-box").then((o) => {
        o.addEventListener("click", (i) => {
          document.body.classList.remove("crs_hide_cart");
        }), document.body.classList.add("crs_hide_cart"), document.addEventListener("click", (i) => {
          var s, a, d, h, p;
          if (this.notShowExitIntent(), !i.target.closest(".modal") && !i.target.closest(".mobile-cart-box") && !i.target.closest(".cart-product") && document.body.classList.add("crs_hide_cart"), i.target.closest(".modal.css-w1q39a") && ((i.target.closest(".default-close") || i.target.closest(".default-close-container")) && this.clickAdd === !1 ? (document.body.classList.add("crs_hide_cart"), l("exp_newaddtocart_click_08", "Close", "Button", `Cart ${((a = (s = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : s.cart) == null ? void 0 : a.price) != 0 ? "" : "empty"} popover`)) : i.target.closest(".css-jobqsc") && i.target.classList.contains("red") ? l("exp_newaddtocart_click_09", "Shop all", "Button", "Cart empty popover") : i.target.classList.contains("continue") ? l("exp_newaddtocart_click_12", "Continue shopping", "Button", "Cart popover") : i.target.classList.contains("checkout") && l("exp_newaddtocart_click_11", "Checkout", "Button", "Cart popover")), t(".modal.css-w1q39a") && (i.target.closest(".cart-product-reset") ? (l("exp_newaddtocart_click_10", `Remove "${i.target.closest(".cart-product-info").querySelector(".title").innerHTML.split("<span")[0]}"`, "Button", "Cart popover"), t(".modal.css-w1q39a .cart-product") || (e = 0), this.updateDataNotification()) : i.target.closest(".added-container") && (l("exp_newaddtocart_click_13", `${i.target.closest("button").getAttribute("aria-label")}`, "Button", "Cart popover"), t(".modal.css-w1q39a .cart-product") || (e = 0), this.updateDataNotification())), t(".modal.css-w1q39a") ? e == 0 && (e = 1, x(t(".modal.css-w1q39a"), "exp_newaddtocart_vis_10", "View slide in cart", `Cart ${((h = (d = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : d.cart) == null ? void 0 : h.price) == 0 ? "empty" : ""} popover`)) : e = 0, i.target.closest(".remove") || i.target.classList.contains("remove")) {
            let u = JSON.parse(localStorage.getItem("data_notification"));
            i.target.closest(".added-container").querySelector(".remove").getAttribute("aria-label").toLowerCase().trim().includes(u == null ? void 0 : u.title.toLowerCase().trim()) && ((p = t(".crs_notification")) == null || p.remove(), this.updateDataNotification());
          }
        });
      }), g(".pageContainer .product").then((o) => {
        f(".sidebar a").forEach((i) => {
          i.addEventListener("click", (s) => this.notShowExitIntent());
        });
      }), this.exitIntent();
      let n = window.location.href;
      const r = new MutationObserver((o) => {
        var i, s;
        n != window.location.href && (n = window.location.href, document.body.classList.add("crs_hide_cart")), this.isSelectorWrapper = this.getSelectorWrapper(), this.navigation(), this.changeElements(), window.location.href.includes("/bundle") && this.addTastes(), document.body.style.overflow = t(".modal .product-wrapper .css-5nnxvq .action-wrapper") ? "hidden" : "", ((s = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : s.price) == 0 && t(".crs_notification") && t(".crs_notification").remove(), r.disconnect(), r.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });
      });
      r.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0
      });
    }
    handleUserAfte180() {
      setTimeout(() => {
        !this.isExitIntentTriggered() && this.isCartNotEmpty() && !t(".crs_notification") && !this.isOnCartOrCheckoutPage() && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_05", "After 180 seconds", "Visibility", "Popover"));
      }, 18e4);
    }
    handleUserInactive(e) {
      j(e).then((n) => {
        n && !this.isExitIntentTriggered() && this.isCartNotEmpty() && !this.isOnCartOrCheckoutPage() && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_04", "User inactive", "Visibility", "Popover"));
      });
    }
    exitIntent() {
      if (this.device === "desktop") {
        let e = 0, n = 0;
        window.addEventListener("mousemove", function(r) {
          e = r.clientX, n = r.clientY;
        }), document.body.addEventListener(
          "mouseleave",
          function() {
            var r, o, i, s;
            (e < 50 || n < 50 || e > window.innerWidth - 50 || n > window.innerHeight - 50) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && ((o = (r = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : r.cart) == null ? void 0 : o.price) != 0 && ((s = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : s.price) != null && !window.location.href.includes("cart") && !window.location.href.includes("order") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), new w(v).renderNotification(), l("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"));
          },
          { once: !1 }
        );
      } else {
        let e = (/android/i.test(navigator.userAgent), 120), n = 0, r = 0, o = (i = "window") => {
          let s = i == "window" ? window.scrollY : t(i).scrollTop;
          r = s - n, n = s, (r > e || r < -e) && !this.isExitIntentTriggered() && !t(".crs_notification") && !t(".css-m18cj1") && this.isCartNotEmpty() && this.notExitPopup === !1 && !this.isOnCartOrCheckoutPage() && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"), i == "window" ? document.removeEventListener("scroll", () => o()) : t(i).removeEventListener("scroll", o()));
        };
        document.addEventListener("scroll", () => o()), g(this.isSelectorWrapper).then((i) => {
          t(this.isSelectorWrapper).addEventListener("scroll", () => {
            o(this.isSelectorWrapper), this.checkAttentiveCreativ();
          });
        });
      }
    }
    isExitIntentTriggered() {
      return sessionStorage.getItem("exit_intent") != null;
    }
    isCartNotEmpty() {
      var n;
      const e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart;
      return (e == null ? void 0 : e.price) != 0 && (e == null ? void 0 : e.price) != null;
    }
    isOnCartOrCheckoutPage() {
      const e = window.location.href;
      return e.includes("cart") || e.includes("order") || e.includes("checkout");
    }
    getSelectorWrapper() {
      return this.device === "desktop" ? window.location.href.includes("box-builder") ? ".modal #pdp" : ".modal .product-wrapper" : ".modal .css-12a0csp";
    }
    appendStyleAndScript() {
      if (!t(".crs_style") && !t(".crs_script")) {
        let e = document.createElement("script");
        e.src = "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js", e.async = !1, e.className = "crs_script", document.head.appendChild(e), document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">${B + P}</style>`);
      }
    }
    addTastes() {
      if (!t(".crs_tastes") && t(".css-5nnxvq picture"))
        for (let e in b) {
          let n = window.location.href.split("/"), r = n[n.length - 1].split("?")[0], o = b[e];
          for (let i = 0; i < o.length; i++)
            if (o[i] == r) {
              t(".css-5nnxvq").insertAdjacentHTML("afterbegin", I(e)), t(".css-5nnxvq").insertAdjacentHTML("afterbegin", z), t(".crs_arrow_next").hidden = !1;
              let s = 1;
              f(".crs_arrow").forEach((a) => {
                let d = a.classList.contains("crs_arrow_prev") ? "prev" : "next";
                x(a, "exp_newaddtocart_vis_09", `View ${d} arrow`, "Product"), a.addEventListener("click", () => {
                  a.classList.contains("crs_arrow_next") && t(".css-12a0csp .next") ? (t(".css-12a0csp .next").click(), s += 1, l("exp_newaddtocart_click_06", "Next", "Button", "Product")) : a.classList.contains("crs_arrow_prev") && t(".css-12a0csp .prev") && (t(".css-12a0csp .prev").click(), s -= 1, l("exp_newaddtocart_click_07", "Prev", "Button", "Product")), t(".crs_arrow_prev").hidden = s <= 1, t(".crs_arrow_next").hidden = s >= e, t(".crs_tastes > span").innerHTML = s;
                });
              });
            }
        }
    }
    checkPageUrl() {
      const e = window.location.href;
      return e.includes("checkout") || e.includes("cart") ? "not_exp" : e.includes("/product") || e.includes("/bundle") ? "pdp" : "other";
    }
    renderNotification() {
      t(".crs_notification") && t(".crs_notification").remove(), this.isCartNotEmpty() && (this.updateDataNotification(), setTimeout(() => {
        let e = JSON.parse(localStorage.getItem("data_notification"));
        document.body.insertAdjacentHTML("afterbegin", T(e.image, e.title, e.type, e.price, e.count)), setTimeout(() => {
          t(".crs_notification").classList.add("active"), this.checkAttentiveCreativ(), this.clickAdd === !0 && (l("exp_newaddtocart_vis_02", "Add to cart", "Visibility", "Popover"), this.clickAdd = !1);
        }, 100), this.actionNotification();
      }, 200));
    }
    actionNotification() {
      if (!t(".crs_notification"))
        return;
      let e = t(".crs_notification");
      e.querySelector(".crs_close").addEventListener("click", (n) => {
        e.classList.remove("active"), setTimeout(() => {
          e == null || e.remove();
        }, 200), l("exp_newaddtocart_click_03", "Close", "Button", "Popover");
      }), e.querySelector(".crs_continue_shop").addEventListener("click", (n) => {
        n.preventDefault(), e.classList.remove("active"), setTimeout(() => {
          e == null || e.remove();
        }, 200), l("exp_newaddtocart_click_04", "Continue Shopping", "Button", "Popover");
      }), e.querySelector(".crs_view_cart").addEventListener("click", (n) => {
        l("exp_newaddtocart_click_02", "View cart", "Button", "Popover");
      });
    }
    resizeOfferPdp() {
      if (!t(".css-5nnxvq picture img") || !t(".css-5nnxvq .action-wrapper"))
        return;
      let e = 0;
      v === "mobile" ? e = "76px - 24px - 48px" + (window.location.href.includes("bundle") ? " - 28px" : "") : e = "67px - 66px - 34px" + (window.location.href.includes("bundle") ? " - 68px - 28px" : ""), t(".css-5nnxvq picture img").style = `height: calc(${window.innerHeight}px - ${e} - ${t(".css-5nnxvq .action-wrapper").clientHeight}px`;
    }
    navigation() {
      if (t(".crs_nav") || !t(".css-12a0csp .product-wrapper .left-side"))
        return;
      this.device === "mobile" ? t(".css-12a0csp .product-wrapper .left-side").insertAdjacentHTML("beforeend", y) : (t(".css-12a0csp .product-wrapper").insertAdjacentHTML("afterbegin", y), t(".crs_nav ul").after(t(".css-mc9jj7 .controls .default-close, .css-1ryd8t3 .controls .default-close, .css-194jzej .controls .default-close"))), t(".modal.css-1ryd8t3 .default-close, .modal.css-mc9jj7 .default-close, .modal.css-194jzej .default-close").addEventListener("click", (r) => {
        r.target.closest(".modal").querySelector(".product-wrapper") && l("exp_newaddtocart_click_05", "Close", "Button", "Product");
      }), l("exp_newaddtocart_vis_06", "View product", "Visibility", "Product"), l("exp_newaddtocart_vis_01", "View navigation", "Visibility", "Under the add to cart"), document.body.classList.add("crs_hide_cart"), f(".right-side section").forEach((r) => {
        let o = "View Nutrition Facts section";
        r.querySelector("h3") && (o = r.querySelector("h3").innerText), x(r, "exp_newaddtocart_vis_08", o, "Product");
      }), t(".modal .product-wrapper button.button.red") && l("exp_newaddtocart_vis_07", "View " + t(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product"), f(".crs_nav a").forEach((r) => {
        r.addEventListener("click", (o) => {
          o.preventDefault(), l("exp_newaddtocart_click_01", o.target.innerText, "Nav panel", "Under the add to cart");
          let i = o.target.href.split("#")[1];
          t("#" + i) && (seamless.polyfill(), seamless.scrollBy(t(this.isSelectorWrapper), { behavior: "smooth", top: t("#" + i).getBoundingClientRect().top - r.clientHeight - 20, left: 0 }));
        });
      });
      function e(r) {
        t(".css-12a0csp .product-wrapper .right-side") && t(".crs_nav") && r === "desktop" && (t(".crs_nav").style.minWidth = t(".css-12a0csp .product-wrapper .right-side").clientWidth + "px", t(".crs_nav").style.right = window.innerWidth - t(".css-12a0csp .product-wrapper .right-side").getBoundingClientRect().right + "px");
      }
      window.addEventListener("resize", () => {
        e(this.device);
      }), e(this.device), t(".css-12a0csp").addEventListener("scroll", (r) => {
        if (this.device !== "mobile")
          return;
        let o = t(".crs_nav").getBoundingClientRect().bottom;
        o < 0 ? t(".crs_nav").classList.add("fixed") : t(".crs_nav").classList.remove("fixed"), o < -100 ? (t(".crs_nav").classList.add("active"), t(".css-mc9jj7 .default-close, .css-1ryd8t3 .default-close, .modal.css-194jzej .default-close").style = "top: 55px!important") : (t(".crs_nav").classList.remove("active"), t(".css-mc9jj7 .default-close, .css-1ryd8t3 .default-close, .modal.css-194jzej .default-close").style = "");
      });
      function n(r) {
        var o = r.getBoundingClientRect();
        return o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      this.device === "desktop" && f(".crs_nav a")[0].classList.add("active"), t(this.isSelectorWrapper).addEventListener("scroll", (r) => {
        const o = f(".product-wrapper .right-side section[id] h2"), i = f(".crs_nav a");
        var s = -1;
        o.forEach(function(a, d) {
          n(a) && s === -1 && (s = d);
        }), s !== -1 && i.forEach(function(a, d) {
          if (d === s) {
            a.classList.add("active");
            const h = t(".crs_nav ul"), p = a.getBoundingClientRect(), u = h.getBoundingClientRect();
            p.left < u.left ? h.scrollLeft -= u.left - p.left : p.right > u.right && (h.scrollLeft += p.right - u.right);
          } else
            a.classList.remove("active");
        });
      });
    }
    checkAttentiveCreativ() {
      t("#attentive_overlay") && this.device === "mobile" && (t(".crs_notification") && !t("#attentive_overlay.crs_top") && t("#attentive_overlay").classList.add("crs_top"), !t(".crs_notification") && t("#attentive_overlay.crs_top") && t("#attentive_overlay").classList.remove("crs_top"), t(".bar-product-image") && (t(".scrolled .bar-product-image") ? t("#attentive_overlay iframe") && !t(".crs_notification") && t("#attentive_overlay iframe").style.bottom == "16px" && (t("#attentive_overlay iframe").style.bottom = t(".bar-product-image").clientHeight + "px") : t("#attentive_overlay iframe").style.bottom != "16px" && (t("#attentive_overlay iframe").style.bottom = "16px")));
    }
    changeElements() {
      var e;
      if (this.checkAttentiveCreativ(), f(".button").forEach((n, r) => {
        let o = n.innerText.toLowerCase();
        if (o.includes("to bag")) {
          let i = n.innerText;
          n.innerText = i.toLowerCase().replace("bag", "cart");
        }
        o.includes("to cart") && (n.closest(".add") || n.closest(".sticky-button-mobile") || n.closest(".made-for-header-actions") || n.closest(".action-button-wrap") || n.closest(".css-vmdrei")) && n.addEventListener("click", (i) => {
          this.clickAdd === !1 && (this.clickAdd = !0, t(".css-nco9x8 .tab .wrapper .text.full") ? this.type = t(".css-nco9x8 .tab .wrapper .text.full").innerText.split("/")[1] : t(".css-v9y3g3 .made-for-header .clickable") ? this.type = t(".css-v9y3g3 .made-for-header .clickable").innerText.replace("|", "") : t(".css-x4efki .box-content .box-info .blueprint") ? this.type = t(".css-x4efki .box-content .box-info .blueprint").innerText.split("|")[1] : this.type = "", n.closest(".element-bundles") && n.closest(".highlight") && l("exp_newaddtocart_click_14", "Add to cart", "Button", "PLP"));
        });
      }), t(".modal .cart-product .product-count") && this.clickAdd == !0 && (document.body.classList.add("crs_hide_cart"), this.type = t(".modal .cart-product .product-count").innerText, this.renderNotification(), t(".crs_hide_cart .modal .cart-product .product-count").closest(".modal").querySelector(".default-close").click()), t(".css-5nnxvq .unit-price .discount .subscribe") && !t(".css-5nnxvq .action-wrapper > .subscribe") && t(".css-5nnxvq .unit-price").after(t(".css-5nnxvq .unit-price .discount .subscribe")), t(".css-5nnxvq .prices") && !t(".css-5nnxvq .unit-price > .prices") && t(".css-5nnxvq .unit-price .discount").after(t(".css-5nnxvq .prices")), t(".left-side .action-wrapper") && t(".right-side .css-s7fk0u h2")) {
        if (!t(".left-side .action-wrapper > h2"))
          t(".left-side .action-wrapper").insertAdjacentHTML("afterbegin", `<h2>${t(".right-side .css-s7fk0u h2").innerHTML}</h2>`);
        else {
          let n = t(".right-side .css-s7fk0u h2").innerHTML;
          t(".left-side .action-wrapper > h2").innerHTML != n && (t(".left-side .action-wrapper > h2").innerHTML = t(".right-side .css-s7fk0u h2").innerHTML, this.resizeOfferPdp());
        }
        t(".pdp-net-weight") && !t(".css-5nnxvq picture + .pdp-net-weight") && (t(".css-5nnxvq picture").after(t(".pdp-net-weight")), this.resizeOfferPdp());
      }
      f('.product-wrapper .right-side img[loading="lazy"]').forEach((n) => {
        n.removeAttribute("loading");
      }), (e = t(".modal .left-side .remove")) == null || e.addEventListener("click", (n) => {
        this.clickRemove == !1 && (this.clickRemove = !0, setTimeout(() => {
          t(".modal .left-side .add button") && (l("exp_newaddtocart_vis_07", "View " + t(".modal .left-side .add button").innerText + " button", "Visibility", "Product"), this.clickRemove = !1);
        }, 500));
      }), f(".cart-product .cart-product-reset button").forEach((n) => {
        n.addEventListener("click", (r) => {
          var o, i, s, a;
          if (this.clickRemove == !1) {
            this.clickRemove = !0;
            let d = JSON.parse(localStorage.getItem("data_notification")), h = n.closest(".cart-product").querySelector(".title").innerHTML;
            this.type = ((s = (i = (o = n.closest(".cart-product")) == null ? void 0 : o.nextElementSibling) == null ? void 0 : i.querySelector(".product-count")) == null ? void 0 : s.innerText) || t(".cart-product .product-count").innerText, h.includes(d == null ? void 0 : d.title) && ((a = t(".crs_notification")) == null || a.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), !t("#puree") && f(".product-wrapper .right-side section").forEach((n) => {
        var i, s;
        let r = (i = n.querySelector("h3")) == null ? void 0 : i.innerText.toLowerCase(), o = (s = n.querySelector("h2")) == null ? void 0 : s.innerText.toLowerCase();
        r != null && r.includes("ingredients") ? n.id = "ingredients" : r != null && r.includes("nutrients") ? n.id = "nutrients" : r != null && r.includes("us vs them") ? n.id = "usvsthem" : o != null && o.includes("directions & safety") && (n.id = "puree");
      });
    }
    updateDataNotification() {
      setTimeout(() => {
        var e, n, r;
        if (this.isCartNotEmpty()) {
          const o = (n = (e = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : e.cart) == null ? void 0 : n.boxes, i = Object.keys(o);
          let s = i[i.length - 1], a = o[s];
          for (; a && a.incomplete == !0 && s > 0; )
            s--, a = o[s];
          let d = 0;
          for (const u in o)
            o[u].incomplete == !1 && (d += 1);
          let h = "/wp-content/themes/cerebelly/build/21c99a25c363149c9021.jpg";
          a.image ? h = a.image.includes("https") ? a.image : "https://cerebelly.com/wp-json/cerebelly/image/get?path=" + a.image : a.type == "personalized" && (h = "/wp-content/themes/cerebelly/build/1167d3c7a96e3f66206f.jpg");
          let p = {};
          this.type != "" ? (p.type = this.type, console.dir(p.type)) : (p.type = t(".cart-product .product-count") ? t(".cart-product .product-count").innerText : ((r = JSON.parse(localStorage.getItem("data_notification"))) == null ? void 0 : r.type) || "", console.dir(p.type)), f(".product").forEach((u) => {
            var _, k, L, C;
            (_ = u == null ? void 0 : u.querySelector(".title")) != null && _.innerText.includes(a.title) && (p.type = ((k = u.querySelector(".quantity")) == null ? void 0 : k.innerHTML) || ((L = u.querySelector(".info")) == null ? void 0 : L.innerHTML.split(" | ")[1]) || ((C = u.querySelector(".desktop")) == null ? void 0 : C.innerHTML.replace(" | ", "")));
          }), p.title = a.title || "", p.image = h, p.price = a.price.toFixed(2), p.count = d, console.dir(p), localStorage.setItem("data_notification", JSON.stringify(p));
        }
      }, 200);
    }
  }
  new w(v);
})();