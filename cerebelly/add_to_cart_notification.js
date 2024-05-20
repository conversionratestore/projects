(function() {
  "use strict";
  const c = (a, i, o, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: i,
      event_type: o,
      event_loc: n
    }), console.dir(`Event: ${a} | ${i} | ${o} | ${n}`);
  }, C = ({ name: a, dev: i }) => {
    console.dir(
      `%c EXP: ${a} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (a) => document.querySelectorAll(a), t = (a) => document.querySelector(a), S = (a) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, m = (a, i, o, n, e = 1e3, r = 0.5) => {
    let s, l;
    if (s = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? l = setTimeout(() => {
          c(
            i,
            d[0].target.dataset.visible || o || "",
            "Visibility",
            n
          ), s.disconnect();
        }, e) : (console.log("Element is not fully visible"), clearTimeout(l));
      },
      { threshold: [r] }
    ), typeof a == "string") {
      const d = document.querySelector(a);
      d && s.observe(d);
    } else
      s.observe(a);
  }, x = (a) => new Promise((i) => {
    if (t(a))
      return i(t(a));
    const o = new MutationObserver(() => {
      t(a) && (i(t(a)), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), E = (a) => new Promise((i, o) => {
    var n = 0, e = setInterval(r, 1e3);
    function r() {
      n++, n > a && (clearInterval(e), i(!0));
    }
    document.addEventListener("click", function() {
      i(!1);
    });
  }), g = {
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
  }, q = (a, i, o, n, e) => (
    /* HTML */
    ` <div class="crs_notification">
  <div class="crs_notification_head justify-between">
      <div class="items-center">
          ${g.checkbox}
          <h3>Added to cart</h3>
      </div>
      <button type="button" class="crs_close">
          ${g.close}
      </button>
  </div>
  <div class="crs_notification_body justify-between">
      <div class="d-flex">
          <img src="${a}" alt="${i}">
          <div>
              <div class="crs_notification_title">${i}</div>
              <div class="crs_notification_info">${o}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${n}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-lg-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${e})${g.arrowRight}</a>
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
</nav>`, T = `
<button type="button" class="crs_arrow crs_arrow_prev" hidden>${g.arrowLeftSlide}</button>
<button type="button" class="crs_arrow crs_arrow_next" hidden>${g.arrowRightSlide}</button>`, j = (a) => `<p class="crs_tastes"><span>1</span> of ${a} flavors<p>`, z = `.items-center {
  display: flex;
  align-items: center;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .flex-md-column-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}/*# sourceMappingURL=base.css.map */`, B = `.crs_notification {
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
  padding: 12px;
  max-height: none;
  height: 100%;
  position: relative;
  justify-content: space-between;
}
.modal .product-wrapper .css-5nnxvq .product-image-wrapper picture img {
  height: 100%;
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
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

.modal .css-5nnxvq .subscribe:before {
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
p.crs_tastes + p {
  display: none;
}

.css-12a0csp .product-wrapper .left-side section {
  max-height: none;
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
  .modal .product-wrapper .css-5nnxvq .product-image-wrapper {
    padding: 16px;
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
  p.crs_tastes {
    font-size: 18px;
  }
}
@media (max-width: 1279px) {
  .crs_nav ul {
    padding: 0 44px 0 24px;
  }
  .css-mc9jj7 .controls .default-close {
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
  .modal .css-12a0csp .product-wrapper .right-side > div[style="height: 50px;"] {
    display: none;
  }
  .modal.css-mc9jj7 .controls .default-close {
    right: 0;
    top: 0;
    padding: 13px;
    display: flex;
    margin: 0;
  }
  .modal.css-mc9jj7 .controls .default-close img {
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
  C({ name: "Enhancements on PDP and new Add to Cart notification", dev: "Olha" }), S("new_add_to_cart");
  const v = window.innerWidth < 991 ? "mobile" : "desktop";
  class w {
    constructor(i) {
      this.device = i, this.isSelectorWrapper = this.device === "desktop" ? ".product-wrapper" : ".css-12a0csp", this.clickRemove = !1, this.clickAdd = !1, this.notExitPopup = !1, this.init();
    }
    init() {
      if (!t(".crs_style") && !t(".crs_script")) {
        let e = document.createElement("script");
        e.src = "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js", e.async = !1, e.className = "crs_script", document.head.appendChild(e), document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">${z + B}</style>`);
      }
      E(this.device === "desktop" ? 20 : 10).then((e) => {
        var r;
        e && sessionStorage.getItem("exit_intent") == null && ((r = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : r.cart.boxes[0]) != null && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), c("exp_newaddtocart_vis_04", "User inactive", "Visibility", "Popover"));
      }), setTimeout(() => {
        var e;
        sessionStorage.getItem("exit_intent") == null && ((e = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : e.cart.boxes[0]) != null && !t(".crs_notification") && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), c("exp_newaddtocart_vis_05", "After 180 seconds", "Visibility", "Popover"));
      }, 18e4);
      const i = () => {
        this.notExitPopup = !0, setTimeout(() => {
          this.notExitPopup = !1;
        }, 500);
      };
      x(".e-nav .mobile-cart-box").then((e) => {
        e.addEventListener("click", (r) => {
          document.body.classList.remove("crs_hide_cart");
        }), document.body.classList.add("crs_hide_cart"), document.addEventListener("click", (r) => {
          var s, l;
          i(), !r.target.closest(".modal") && !r.target.closest(".mobile-cart-box") && !r.target.closest(".cart-product") ? document.body.classList.add("crs_hide_cart") : r.target.closest(".mobile-cart-box") && t(".modal.css-w1q39a") ? setTimeout(() => {
            var d, u;
            m(t(".modal.css-w1q39a"), "exp_newaddtocart_vis_10", "View slide in cart", `Cart ${((u = (d = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : d.cart) == null ? void 0 : u.boxes[0]) != null ? "" : "empty"} popover`);
          }, 100) : (r.target.closest(".default-close") || r.target.closest(".default-close-container")) && this.clickAdd === !1 ? (document.body.classList.add("crs_hide_cart"), c("exp_newaddtocart_click_08", "Close", "Button", `Cart ${((l = (s = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : s.cart) == null ? void 0 : l.boxes[0]) != null ? "" : "empty"} popover`)) : r.target.closest(".css-jobqsc") && r.target.classList.contains("red") ? c("exp_newaddtocart_click_09", "Shop all", "Button", "Cart empty popover") : r.target.closest(".cart-product-reset") ? c("exp_newaddtocart_click_10", `Remove "${r.target.closest(".cart-product-info").querySelector(".title").innerHTML.split("<span")[0]}"`, "Button", "Cart popover") : r.target.classList.contains("checkout") ? c("exp_newaddtocart_click_11", "Checkout", "Button", "Cart popover") : r.target.classList.contains("continue") ? c("exp_newaddtocart_click_12", "Continue shopping", "Button", "Cart popover") : r.target.closest(".added-container") && c("exp_newaddtocart_click_13", `${r.target.closest("button").getAttribute("aria-label")}`, "Button", "Cart popover");
        });
      }), x(".pageContainer .product").then((e) => {
        p(".sidebar a").forEach((r) => {
          r.addEventListener("click", (s) => i());
        });
      }), this.exitIntent();
      let o = window.location.href;
      const n = new MutationObserver((e) => {
        var r, s;
        o != window.location.href && (o = window.location.href, document.body.classList.add("crs_hide_cart")), this.navigation(), this.changeElements(), window.location.href.includes("/bundle") && this.addTastes(), document.body.style.overflow = this.checkPageUrl() === "pdp" ? "hidden" : "", ((s = (r = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : r.cart) == null ? void 0 : s.boxes[0]) == null && t(".crs_notification") && t(".crs_notification").remove(), n.disconnect(), n.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });
      });
      n.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0
      });
    }
    addTastes() {
      if (!t(".crs_tastes") && t(".product-image-wrapper"))
        for (let i in b) {
          let o = window.location.href.split("/"), n = o[o.length - 1].split("?")[0], e = b[i];
          for (let r = 0; r < e.length; r++)
            if (e[r] == n) {
              t(".product-image-wrapper").insertAdjacentHTML("afterbegin", j(i)), t(".product-image-wrapper").insertAdjacentHTML("beforebegin", T), t(".crs_arrow_next").hidden = !1;
              let s = 1;
              p(".crs_arrow").forEach((l) => {
                let d = l.classList.contains("crs_arrow_prev") ? "prev" : "next";
                m(l, "exp_newaddtocart_vis_09", `View ${d} arrow`, "Product"), l.addEventListener("click", () => {
                  l.classList.contains("crs_arrow_next") && t(".css-12a0csp .next") ? (t(".css-12a0csp .next").click(), s += 1, c("exp_newaddtocart_click_06", "Next", "Button", "Product")) : l.classList.contains("crs_arrow_prev") && t(".css-12a0csp .prev") && (t(".css-12a0csp .prev").click(), s -= 1, c("exp_newaddtocart_click_07", "Prev", "Button", "Product")), t(".crs_arrow_prev").hidden = s <= 1, t(".crs_arrow_next").hidden = s >= i, t(".crs_tastes > span").innerHTML = s;
                });
              });
            }
        }
    }
    checkPageUrl() {
      const i = window.location.href;
      return i.includes("checkout") || i.includes("cart") ? "not_exp" : i.includes("/product") || i.includes("/bundle") ? "pdp" : "other";
    }
    renderNotification(i = "") {
      var o, n;
      t(".crs_notification") && t(".crs_notification").remove(), ((n = (o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart) == null ? void 0 : n.boxes[0]) != null && (this.updateDataNotification(), setTimeout(() => {
        let e = JSON.parse(localStorage.getItem("data_notification"));
        document.body.insertAdjacentHTML("afterbegin", q(e.image, e.title, e.type, e.price, e.count)), setTimeout(() => {
          t(".crs_notification").classList.add("active"), this.checkAttentiveCreativ(), this.clickAdd === !0 && (c("exp_newaddtocart_vis_02", "Add to cart", "Visibility", "Popover"), this.clickAdd = !1);
        }, 100), this.actionNotification();
      }, 200));
    }
    actionNotification() {
      if (!t(".crs_notification"))
        return;
      let i = t(".crs_notification");
      i.querySelector(".crs_close").addEventListener("click", (o) => {
        i.classList.remove("active"), setTimeout(() => {
          i == null || i.remove();
        }, 200), c("exp_newaddtocart_click_03", "Close", "Button", "Popover");
      }), i.querySelector(".crs_continue_shop").addEventListener("click", (o) => {
        o.preventDefault(), i.classList.remove("active"), setTimeout(() => {
          i == null || i.remove();
        }, 200), c("exp_newaddtocart_click_04", "Continue Shopping", "Button", "Popover");
      }), i.querySelector(".crs_view_cart").addEventListener("click", (o) => {
        c("exp_newaddtocart_click_02", "View cart", "Button", "Popover");
      });
    }
    resizeOfferPdp() {
      if (!t(".css-5nnxvq .product-image-wrapper img") || !t(".css-5nnxvq .action-wrapper"))
        return;
      let i = 0;
      v === "mobile" ? i = "76px - 24px - 48px" + (window.location.href.includes("bundle") ? " - 28px" : "") : i = "67px - 66px - 34px" + (window.location.href.includes("bundle") ? " - 68px - 28px" : ""), t(".css-5nnxvq .product-image-wrapper img").style = `height: calc(${window.innerHeight}px - ${i} - ${t(".css-5nnxvq .action-wrapper").clientHeight}px`;
    }
    exitIntent() {
      if (console.dir("exitIntent start"), this.device === "desktop") {
        let i = 0, o = 0;
        window.addEventListener("mousemove", function(n) {
          i = n.clientX, o = n.clientY;
        }), document.body.addEventListener(
          "mouseleave",
          function() {
            var n, e;
            (i < 50 || o < 50 || i > window.innerWidth - 50 || o > window.innerHeight - 50) && (console.dir("leave mouse"), sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && ((e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.boxes[0]) != null && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), new w(v).renderNotification(), c("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover")));
          },
          { once: !1 }
        );
      } else {
        let i = (/android/i.test(navigator.userAgent), 120), o = 0, n = 0, e = (r = "window") => {
          var l, d;
          let s = r == "window" ? window.scrollY : t(r).scrollTop;
          n = s - o, o = s, (n > i || n < -i) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && !t(".css-m18cj1") && ((d = (l = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : l.cart) == null ? void 0 : d.boxes[0]) != null && this.notExitPopup === !1 && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (console.dir(n), sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), c("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"), r == "window" ? document.removeEventListener("scroll", () => e()) : t(r).removeEventListener("scroll", e()));
        };
        document.addEventListener("scroll", () => e()), x(this.isSelectorWrapper).then((r) => {
          t(".modal " + this.isSelectorWrapper).addEventListener("scroll", () => {
            e(this.isSelectorWrapper), this.checkAttentiveCreativ();
          });
        });
      }
    }
    navigation() {
      if (t(".crs_nav") || !t(".css-12a0csp .product-wrapper .left-side"))
        return;
      this.device === "mobile" ? t(".css-12a0csp .product-wrapper .left-side").insertAdjacentHTML("beforeend", y) : (t(".css-12a0csp .product-wrapper").insertAdjacentHTML("afterbegin", y), t(".crs_nav ul").after(t(".css-mc9jj7 .controls .default-close"))), t(".modal.css-mc9jj7 .default-close").addEventListener("click", (n) => {
        n.target.closest(".modal").querySelector(".product-wrapper") && c("exp_newaddtocart_click_05", "Close", "Button", "Product");
      }), c("exp_newaddtocart_vis_06", "View product", "Visibility", "Product"), c("exp_newaddtocart_vis_01", "View navigation", "Visibility", "Under the add to cart"), document.body.classList.add("crs_hide_cart"), p(".right-side section").forEach((n) => {
        let e = "View Nutrition Facts section";
        n.querySelector("h3") && (e = n.querySelector("h3").innerText), m(n, "exp_newaddtocart_vis_08", e, "Product");
      }), t(".modal .product-wrapper button.button.red") && c("exp_newaddtocart_vis_07", "View " + t(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product"), p(".crs_nav a").forEach((n) => {
        n.addEventListener("click", (e) => {
          e.preventDefault(), c("exp_newaddtocart_click_01", e.target.innerText, "Nav panel", "Under the add to cart");
          let r = e.target.href.split("#")[1];
          t("#" + r) && (seamless.polyfill(), seamless.scrollBy(t(this.isSelectorWrapper), { behavior: "smooth", top: t("#" + r).getBoundingClientRect().top - n.clientHeight - 20, left: 0 }));
        });
      });
      function i(n) {
        t(".css-12a0csp .product-wrapper .right-side") && t(".crs_nav") && n === "desktop" && (t(".crs_nav").style.minWidth = t(".css-12a0csp .product-wrapper .right-side").clientWidth + "px", t(".crs_nav").style.right = window.innerWidth - t(".css-12a0csp .product-wrapper .right-side").getBoundingClientRect().right + "px");
      }
      window.addEventListener("resize", () => {
        i(this.device);
      }), i(this.device), t(".css-12a0csp").addEventListener("scroll", (n) => {
        if (this.device !== "mobile")
          return;
        let e = t(".crs_nav").getBoundingClientRect().bottom;
        e < 0 ? t(".crs_nav").classList.add("fixed") : t(".crs_nav").classList.remove("fixed"), e < -100 ? (t(".crs_nav").classList.add("active"), t(".css-mc9jj7 .controls .default-close").style.top = "55px") : (t(".crs_nav").classList.remove("active"), t(".css-mc9jj7 .controls .default-close").style = "");
      });
      function o(n) {
        var e = n.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      this.device === "desktop" && p(".crs_nav a")[0].classList.add("active"), t(this.isSelectorWrapper).addEventListener("scroll", (n) => {
        const e = p(".product-wrapper .right-side section[id] h2"), r = p(".crs_nav a");
        var s = -1;
        e.forEach(function(l, d) {
          o(l) && s === -1 && (s = d);
        }), s !== -1 && r.forEach(function(l, d) {
          if (d === s) {
            l.classList.add("active");
            const u = t(".crs_nav ul"), h = l.getBoundingClientRect(), f = u.getBoundingClientRect();
            h.left < f.left ? u.scrollLeft -= f.left - h.left : h.right > f.right && (u.scrollLeft += h.right - f.right);
          } else
            l.classList.remove("active");
        });
      });
    }
    checkAttentiveCreativ() {
      t("#attentive_overlay") && this.device === "mobile" && (t(".crs_notification") && !t("#attentive_overlay.crs_top") && t("#attentive_overlay").classList.add("crs_top"), !t(".crs_notification") && t("#attentive_overlay.crs_top") && t("#attentive_overlay").classList.remove("crs_top"), t(".bar-product-image") && (t(".scrolled .bar-product-image") ? t("#attentive_overlay iframe") && !t(".crs_notification") && t("#attentive_overlay iframe").style.bottom == "16px" && (t("#attentive_overlay iframe").style.bottom = t(".bar-product-image").clientHeight + "px") : t("#attentive_overlay iframe").style.bottom != "16px" && (t("#attentive_overlay iframe").style.bottom = "16px")));
    }
    changeElements() {
      var i;
      if (this.checkAttentiveCreativ(), p(".button").forEach((o, n) => {
        let e = o.innerText.toLowerCase();
        if (e.includes("to bag")) {
          let r = o.innerText;
          o.innerText = r.toLowerCase().replace("bag", "cart");
        }
        o.closest(".add") && e.includes("to cart") && o.addEventListener("click", (r) => {
          this.clickAdd === !1 && (this.clickAdd = !0);
        });
      }), t(".modal .cart-product .product-count") && this.clickAdd == !0 && (document.body.classList.add("crs_hide_cart"), this.renderNotification(t(".modal .cart-product .product-count").innerText), t(".crs_hide_cart .modal .cart-product .product-count").closest(".modal").querySelector(".default-close").click()), t(".css-5nnxvq .unit-price .discount .subscribe") && !t(".css-5nnxvq .action-wrapper > .subscribe") && t(".css-5nnxvq .unit-price").after(t(".css-5nnxvq .unit-price .discount .subscribe")), t(".css-5nnxvq .prices") && !t(".css-5nnxvq .unit-price > .prices") && t(".css-5nnxvq .unit-price .discount").after(t(".css-5nnxvq .prices")), t(".left-side .action-wrapper") && t(".right-side .css-s7fk0u h2")) {
        if (!t(".left-side .action-wrapper > h2"))
          t(".left-side .action-wrapper").insertAdjacentHTML("afterbegin", `<h2>${t(".right-side .css-s7fk0u h2").innerHTML}</h2>`);
        else {
          let o = t(".right-side .css-s7fk0u h2").innerHTML;
          t(".left-side .action-wrapper > h2").innerHTML != o && (t(".left-side .action-wrapper > h2").innerHTML = t(".right-side .css-s7fk0u h2").innerHTML, this.resizeOfferPdp());
        }
        t(".pdp-net-weight") && !t(".css-5nnxvq .product-image-wrapper > .pdp-net-weight") && (t(".css-5nnxvq .product-image-wrapper picture").after(t(".pdp-net-weight")), this.resizeOfferPdp());
      }
      p('.product-wrapper .right-side img[loading="lazy"]').forEach((o) => {
        o.removeAttribute("loading");
      }), (i = t(".modal .left-side .remove")) == null || i.addEventListener("click", (o) => {
        this.clickRemove == !1 && (this.clickRemove = !0, setTimeout(() => {
          t(".modal .left-side .add button") && (c("exp_newaddtocart_vis_07", "View " + t(".modal .left-side .add button").innerText + " button", "Visibility", "Product"), this.clickRemove = !1);
        }, 500));
      }), p(".cart-product .cart-product-reset button").forEach((o) => {
        o.addEventListener("click", (n) => {
          var e;
          if (this.clickRemove == !1) {
            this.clickRemove = !0;
            let r = JSON.parse(localStorage.getItem("data_notification"));
            o.closest(".cart-product").querySelector(".title").innerHTML.includes(r == null ? void 0 : r.title) && ((e = t(".crs_notification")) == null || e.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), p(".remove").forEach((o) => {
        o.addEventListener("click", (n) => {
          var e;
          if (this.clickRemove == !1) {
            this.clickRemove = !0;
            let r = JSON.parse(localStorage.getItem("data_notification")), s = "";
            n.target.closest(".product") ? s = n.target.closest(".product").querySelector(".title").innerText.toLowerCase().trim() : n.target.closest(".action-wrapper") ? s = n.target.closest(".action-wrapper").querySelector("h2").innerText.toLowerCase().trim() : n.target.closest(".cart-product") && (s = n.target.closest(".cart-product").querySelector(".title").innerHTML.split("<span")[0].toLowerCase().trim()), s.includes(r == null ? void 0 : r.title.toLowerCase().trim()) && ((e = t(".crs_notification")) == null || e.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), !t("#puree") && p(".product-wrapper .right-side section").forEach((o) => {
        var r, s;
        let n = (r = o.querySelector("h3")) == null ? void 0 : r.innerText.toLowerCase(), e = (s = o.querySelector("h2")) == null ? void 0 : s.innerText.toLowerCase();
        n != null && n.includes("ingredients") ? o.id = "ingredients" : n != null && n.includes("nutrients") ? o.id = "nutrients" : n != null && n.includes("us vs them") ? o.id = "usvsthem" : e != null && e.includes("directions & safety") && (o.id = "puree");
      });
    }
    updateDataNotification() {
      setTimeout(() => {
        var i, o, n, e, r;
        if (((o = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : o.boxes[0]) != null) {
          const s = (e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.boxes, l = Object.keys(s), d = l[l.length - 1], u = s[d], h = u.image.includes("https") ? u.image : "https://cerebelly.com/wp-json/cerebelly/image/get?path=" + u.image;
          let f = {};
          f.type = (r = JSON.parse(localStorage.getItem("data_notification"))) == null ? void 0 : r.type, p(".product").forEach((_) => {
            var k, L;
            _.querySelector(".title").innerText.includes(u.title) && (f.type = ((k = _.querySelector(".quantity")) == null ? void 0 : k.innerHTML) || ((L = _.querySelector(".desktop")) == null ? void 0 : L.innerHTML.replace(" | ", "")));
          }), f.title = u.title, f.image = h, f.price = u.price, f.count = parseInt(d) + 1, console.dir(f), localStorage.setItem("data_notification", JSON.stringify(f));
        }
      }, 200);
    }
  }
  new w(v);
})();