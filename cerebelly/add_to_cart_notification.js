(function() {
  "use strict";
  const l = (c, i, r, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: i,
      event_type: r,
      event_loc: n
    }), console.dir(`Event: ${c} | ${i} | ${r} | ${n}`);
  }, L = ({ name: c, dev: i }) => {
    console.dir(
      `%c EXP: ${c} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (c) => document.querySelectorAll(c), t = (c) => document.querySelector(c), C = (c) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", c, "variant_1"));
    }, 1e3);
  }, w = (c, i, r, n, e = 1e3, o = 0.5) => {
    let s, d;
    if (s = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? d = setTimeout(() => {
          l(
            i,
            a[0].target.dataset.visible || r || "",
            "Visibility",
            n
          ), s.disconnect();
        }, e) : (console.log("Element is not fully visible"), clearTimeout(d));
      },
      { threshold: [o] }
    ), typeof c == "string") {
      const a = document.querySelector(c);
      a && s.observe(a);
    } else
      s.observe(c);
  }, m = (c) => new Promise((i) => {
    if (t(c))
      return i(t(c));
    const r = new MutationObserver(() => {
      t(c) && (i(t(c)), r.disconnect());
    });
    r.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), S = (c) => new Promise((i, r) => {
    var n = 0, e = setInterval(o, 1e3);
    function o() {
      n++, n > c && (clearInterval(e), i(!0));
    }
    document.addEventListener("click", function() {
      i(!1);
    });
  }), f = {
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
  }, _ = {
    3: ["pumpkin-bundle", "bone-broth-protein-pack-3"],
    4: ["smart-bar-sampler"],
    5: ["5-7-months-bundle", "8-9-months-bundle", "10-11-months-bundle", "toddler-snack-pack", "plant-based-protein-pack", "iron-rich-heroes", "superfoods-variety-pack", "fabulous-fiber"],
    6: ["12-14-months-bundle", "15-17-months-bundle", "18-20-months-bundle", "21-24-months-bundle", "25-months", "spring-sprouts-2", "smart-picks-14"]
  }, E = (c, i, r, n, e) => (
    /* HTML */
    ` <div class="crs_notification">
  <div class="crs_notification_head justify-between">
      <div class="items-center">
          ${f.checkbox}
          <h3>Added to cart</h3>
      </div>
      <button type="button" class="crs_close">
          ${f.close}
      </button>
  </div>
  <div class="crs_notification_body justify-between">
      <div class="d-flex">
          <img src="${c}" alt="${i}">
          <div>
              <div class="crs_notification_title">${i}</div>
              <div class="crs_notification_info">${r}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${n}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-md-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${e})${f.arrowRight}</a>
  </div>
</div>`
  ), b = `
<nav class="crs_nav">
  <ul class="d-flex">
    <li><a href="#ingredients">ingredients</a></li>
    <li><a href="#nutrients">Nutritients</a></li>
    <li><a href="#usvsthem">the cerebelly standard</a></li>
    <li><a href="#puree">directions & safety</a></li>
  </ul>
</nav>`, P = `
<button type="button" class="crs_arrow crs_arrow_prev" hidden>${f.arrowLeftSlide}</button>
<button type="button" class="crs_arrow crs_arrow_next" hidden>${f.arrowRightSlide}</button>`, q = (c) => `<p class="crs_tastes"><span>1</span> of ${c} flavors<p>`, T = `.items-center {
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
}/*# sourceMappingURL=base.css.map */`, z = `.crs_notification {
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

.css-12a0csp .product-wrapper .left-side section {
  max-height: none;
}

.css-s7fk0u .explanation-video .directions-safety {
  text-decoration: underline;
}

.modal .product-wrapper .css-5nnxvq .action-wrapper > * {
  max-width: 360px !important;
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
  top: calc(50% + 10px);
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

@media (min-width: 992px) {
  .css-12a0csp .product-wrapper .left-side section {
    max-height: none;
  }
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
  .css-12a0csp .product-wrapper .left-side section {
    max-height: none;
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
  #attentive_creativ.crs_top {
    top: auto !important;
    bottom: 248px !important;
  }
}
@media (max-width: 360px) {
  .crs_notification {
    padding-left: 16px;
    padding-right: 16px;
  }
}/*# sourceMappingURL=main.css.map */`;
  L({ name: "Enhancements on PDP and new Add to Cart notification", dev: "Olha" }), C("new_add_to_cart");
  const x = window.innerWidth < 991 ? "mobile" : "desktop";
  class v {
    constructor(i) {
      this.device = i, this.isSelectorWrapper = this.device === "desktop" ? ".product-wrapper" : ".css-12a0csp", this.clickRemove = !1, this.clickAdd = !1, this.notExitPopup = !1, this.init();
    }
    init() {
      if (!t(".crs_style") && !t(".crs_script")) {
        let e = document.createElement("script");
        e.src = "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js", e.async = !1, e.className = "crs_script", document.head.appendChild(e), document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">${T + z}</style>`);
      }
      S(this.device === "desktop" ? 20 : 10).then((e) => {
        var o;
        e && sessionStorage.getItem("exit_intent") == null && ((o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart.boxes[0]) != null && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_04", "User inactive", "Visibility", "Popover"));
      }), setTimeout(() => {
        var e;
        sessionStorage.getItem("exit_intent") == null && ((e = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : e.cart.boxes[0]) != null && !t(".crs_notification") && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_05", "After 180 seconds", "Visibility", "Popover"));
      }, 18e4);
      const i = () => {
        this.notExitPopup = !0, setTimeout(() => {
          this.notExitPopup = !1;
        }, 500);
      };
      m(".e-nav .mobile-cart-box").then((e) => {
        e.addEventListener("click", (o) => {
          document.body.classList.remove("crs_hide_cart");
        }), document.body.classList.add("crs_hide_cart"), document.addEventListener("click", (o) => {
          i(), !o.target.closest(".modal") && !o.target.closest(".mobile-cart-box") && o.currentTarget && o.currentTarget.classList && !o.currentTarget.classList.contains("button") && (console.dir("document crs_hide_cart"), document.body.classList.add("crs_hide_cart"));
        });
      }), m(".pageContainer .product").then((e) => {
        p(".sidebar a").forEach((o) => {
          o.addEventListener("click", (s) => i());
        });
      }), m(".css-8z7pw4 .custom .default-close").then((e) => {
        e.addEventListener("click", (o) => {
          document.body.classList.add("crs_hide_cart"), console.dir("close side cart");
        });
      }), this.exitIntent();
      let r = window.location.href;
      const n = new MutationObserver((e) => {
        var o, s;
        r != window.location.href && (r = window.location.href, console.dir("oldUrl"), document.body.classList.add("crs_hide_cart")), this.navigation(), this.changeElements(), document.body.style.overflow = this.checkPageUrl() === "pdp" ? "hidden" : "", ((s = (o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart) == null ? void 0 : s.boxes[0]) == null && t(".crs_notification") && t(".crs_notification").remove(), window.location.href.includes("/bundle") && this.addTastes(), n.disconnect(), n.observe(document.body, {
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
        for (let i in _) {
          let r = window.location.href.split("/"), n = r[r.length - 1], e = _[i];
          for (let o = 0; o < e.length; o++)
            if (e[o] == n) {
              t(".product-image-wrapper").insertAdjacentHTML("afterbegin", q(i)), console.dir("add arrow slider (PDP)"), t(".product-image-wrapper").insertAdjacentHTML("afterbegin", P), t(".crs_arrow_next").hidden = !1;
              let s = 1;
              p(".crs_arrow").forEach((d) => {
                let a = d.classList.contains("crs_arrow_prev") ? "prev" : "next";
                w(d, "exp_newaddtocart_vis_09", `View ${a} arrow`, "Product"), d.addEventListener("click", () => {
                  console.dir("click arrow slider (PDP)"), d.classList.contains("crs_arrow_next") && t(".css-12a0csp .next") ? (t(".css-12a0csp .next").click(), s += 1, l("exp_newaddtocart_click_06", "Next", "Button", "Product")) : d.classList.contains("crs_arrow_prev") && t(".css-12a0csp .prev") && (t(".css-12a0csp .prev").click(), s -= 1, l("exp_newaddtocart_click_07", "Prev", "Button", "Product")), t(".crs_arrow_prev").hidden = s <= 1, t(".crs_arrow_next").hidden = s >= i, t(".crs_tastes > span").innerHTML = s;
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
      var r, n;
      t(".crs_notification") && t(".crs_notification").remove(), ((n = (r = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : r.cart) == null ? void 0 : n.boxes[0]) != null && (this.updateDataNotification(), setTimeout(() => {
        let e = JSON.parse(localStorage.getItem("data_notification"));
        document.body.insertAdjacentHTML("afterbegin", E(e.image, e.title, e.type, e.price, e.count)), setTimeout(() => {
          t(".crs_notification").classList.add("active"), this.checkAttentiveCreativ(), this.clickAdd === !0 && (l("exp_newaddtocart_vis_02", "Add to cart", "Visibility", "Popover"), this.clickAdd = !1);
        }, 100), this.actionNotification();
      }, 200));
    }
    actionNotification() {
      if (!t(".crs_notification"))
        return;
      let i = t(".crs_notification");
      i.querySelector(".crs_close").addEventListener("click", (r) => {
        i.classList.remove("active"), setTimeout(() => {
          i == null || i.remove();
        }, 200), l("exp_newaddtocart_click_03", "Close", "Button", "Popover");
      }), i.querySelector(".crs_continue_shop").addEventListener("click", (r) => {
        r.preventDefault(), i.classList.remove("active"), setTimeout(() => {
          i == null || i.remove();
        }, 200), l("exp_newaddtocart_click_04", "Continue Shopping", "Button", "Popover");
      }), i.querySelector(".crs_view_cart").addEventListener("click", (r) => {
        l("exp_newaddtocart_click_02", "View cart", "Button", "Popover");
      });
    }
    resizeOfferPdp() {
      if (!t(".css-5nnxvq .product-image-wrapper img") || !t(".css-5nnxvq .action-wrapper"))
        return;
      let i = 0;
      x === "mobile" ? i = "76px - 24px - 48px" + (window.location.href.includes("bundle") ? " - 28px" : "") : i = "67px - 66px - 34px" + (window.location.href.includes("bundle") ? " - 68px" : ""), console.dir("-----------------"), console.dir(window.innerHeight), console.dir(t(".css-5nnxvq .action-wrapper").clientHeight), console.dir("-----------------"), t(".css-5nnxvq .product-image-wrapper img").style = `height: calc(${window.innerHeight}px - ${i} - ${t(".css-5nnxvq .action-wrapper").clientHeight}px`;
    }
    exitIntent() {
      if (console.dir("exitIntent start"), this.device === "desktop") {
        let i = 0, r = 0;
        window.addEventListener("mousemove", function(n) {
          i = n.clientX, r = n.clientY;
        }), document.body.addEventListener(
          "mouseleave",
          function() {
            var n, e;
            (i < 50 || r < 50 || i > window.innerWidth - 50 || r > window.innerHeight - 50) && (console.dir("leave mouse"), sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && ((e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.boxes[0]) != null && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), new v(x).renderNotification(), l("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover")));
          },
          { once: !1 }
        );
      } else {
        let i = (/android/i.test(navigator.userAgent), 120), r = 0, n = 0, e = (o = "window") => {
          var d, a;
          let s = o == "window" ? window.scrollY : t(o).scrollTop;
          n = s - r, r = s, (n > i || n < -i) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && !t(".css-m18cj1") && ((a = (d = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : d.cart) == null ? void 0 : a.boxes[0]) != null && this.notExitPopup === !1 && !window.location.href.includes("cart") && !window.location.href.includes("checkout") && (console.dir(n), sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"), o == "window" ? document.removeEventListener("scroll", () => e()) : t(o).removeEventListener("scroll", e()));
        };
        document.addEventListener("scroll", () => e()), m(this.isSelectorWrapper).then((o) => {
          t(".modal " + this.isSelectorWrapper).addEventListener("scroll", () => {
            e(this.isSelectorWrapper);
          });
        });
      }
    }
    navigation() {
      if (t(".crs_nav") || !t(".css-12a0csp .product-wrapper .left-side"))
        return;
      this.device === "mobile" ? t(".css-12a0csp .product-wrapper .left-side").insertAdjacentHTML("beforeend", b) : (t(".css-12a0csp .product-wrapper").insertAdjacentHTML("afterbegin", b), t(".crs_nav ul").after(t(".css-mc9jj7 .controls .default-close"))), t(".modal.css-mc9jj7 .default-close").addEventListener("click", (n) => {
        n.target.closest(".modal").querySelector(".product-wrapper") && l("exp_newaddtocart_click_05", "Close", "Button", "Product");
      }), l("exp_newaddtocart_vis_06", "View product", "Visibility", "Product"), l("exp_newaddtocart_vis_01", "View navigation", "Visibility", "Under the add to cart"), document.body.classList.add("crs_hide_cart"), p(".right-side section").forEach((n) => {
        let e = "View Nutrition Facts section";
        n.querySelector("h3") && (e = n.querySelector("h3").innerText), w(n, "exp_newaddtocart_vis_08", e, "Product");
      }), t(".modal .product-wrapper button.button.red") && l("exp_newaddtocart_vis_07", "View " + t(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product"), p(".crs_nav a").forEach((n) => {
        n.addEventListener("click", (e) => {
          e.preventDefault(), l("exp_newaddtocart_click_01", e.target.innerText, "Nav panel", "Under the add to cart");
          let o = e.target.href.split("#")[1];
          t("#" + o) && (seamless.polyfill(), seamless.scrollBy(t(this.isSelectorWrapper), { behavior: "smooth", top: t("#" + o).getBoundingClientRect().top - n.clientHeight - 20, left: 0 }));
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
      function r(n) {
        var e = n.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      this.device === "desktop" && p(".crs_nav a")[0].classList.add("active"), t(this.isSelectorWrapper).addEventListener("scroll", (n) => {
        const e = p(".product-wrapper .right-side section[id] h2"), o = p(".crs_nav a");
        var s = -1;
        e.forEach(function(d, a) {
          r(d) && s === -1 && (s = a);
        }), s !== -1 && o.forEach(function(d, a) {
          if (a === s) {
            d.classList.add("active");
            const g = t(".crs_nav ul"), u = d.getBoundingClientRect(), h = g.getBoundingClientRect();
            u.left < h.left ? g.scrollLeft -= h.left - u.left : u.right > h.right && (g.scrollLeft += u.right - h.right);
          } else
            d.classList.remove("active");
        });
      });
    }
    checkAttentiveCreativ() {
      t("#attentive_creativ") && (t(".crs_notification") && !t("#attentive_creativ.crs_top") && t("#attentive_creativ").classList.add("crs_top"), !t(".crs_notification") && t("#attentive_creativ.crs_top") && t("#attentive_creativ").classList.remove("crs_top"));
    }
    changeElements() {
      var i;
      if (this.checkAttentiveCreativ(), p(".button").forEach((r, n) => {
        let e = r.innerText.toLowerCase();
        if (e.includes("to bag")) {
          let o = r.innerText;
          r.innerText = o.toLowerCase().replace("bag", "cart"), console.dir("replace bag to cart");
        }
        r.closest(".add") && e.includes("to cart") && r.addEventListener("click", (o) => {
          this.clickAdd === !1 && (this.clickAdd = !0, console.dir("this.clickAdd"));
        });
      }), t(".modal .cart-product .product-count") && this.clickAdd == !0 && (console.dir("add to cart"), document.body.classList.add("crs_hide_cart"), this.renderNotification(t(".modal .cart-product .product-count").innerText), t(".crs_hide_cart .modal .cart-product .product-count").closest(".modal").querySelector(".default-close").click()), t(".css-5nnxvq .unit-price .discount .subscribe") && !t(".css-5nnxvq .action-wrapper > .subscribe") && (console.dir("change subscribe (PDP)"), t(".css-5nnxvq .unit-price").after(t(".css-5nnxvq .unit-price .discount .subscribe"))), t(".css-5nnxvq .prices") && !t(".css-5nnxvq .unit-price > .prices") && (console.dir("change prices (PDP)"), t(".css-5nnxvq .unit-price .discount").after(t(".css-5nnxvq .prices"))), t(".left-side .action-wrapper") && t(".right-side .css-s7fk0u h2")) {
        if (!t(".left-side .action-wrapper > h2"))
          console.dir("add name h2 (PDP)"), t(".left-side .action-wrapper").insertAdjacentHTML("afterbegin", `<h2>${t(".right-side .css-s7fk0u h2").innerHTML}</h2>`);
        else {
          let r = t(".right-side .css-s7fk0u h2").innerHTML;
          t(".left-side .action-wrapper > h2").innerHTML != r && (console.dir("change name h2 (PDP)"), t(".left-side .action-wrapper > h2").innerHTML = t(".right-side .css-s7fk0u h2").innerHTML, this.resizeOfferPdp());
        }
        t(".pdp-net-weight") && !t(".css-5nnxvq .product-image-wrapper > .pdp-net-weight") && (console.dir("change weight (PDP)"), t(".css-5nnxvq .product-image-wrapper picture").after(t(".pdp-net-weight")), this.resizeOfferPdp());
      }
      p('.product-wrapper .right-side img[loading="lazy"]').forEach((r) => {
        r.removeAttribute("loading");
      }), (i = t(".modal .left-side .remove")) == null || i.addEventListener("click", (r) => {
        this.clickRemove == !1 && (this.clickRemove = !0, console.dir("clickRemove true (PDP)"), console.dir("clickRemove false 500 (PDP)"), setTimeout(() => {
          t(".modal .left-side .add button") && (l("exp_newaddtocart_vis_07", "View " + t(".modal .left-side .add button").innerText + " button", "Visibility", "Product"), this.clickRemove = !1);
        }, 500));
      }), p(".cart-product .cart-product-reset button").forEach((r) => {
        r.addEventListener("click", (n) => {
          var e;
          if (this.clickRemove == !1) {
            this.clickRemove = !0, console.dir("reset clickRemove true"), console.dir("reset clickRemove false 500");
            let o = JSON.parse(localStorage.getItem("data_notification"));
            r.closest(".cart-product").querySelector(".title").innerHTML.includes(o == null ? void 0 : o.title) && ((e = t(".crs_notification")) == null || e.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), p(".remove").forEach((r) => {
        r.addEventListener("click", (n) => {
          var e;
          if (this.clickRemove == !1) {
            this.clickRemove = !0, console.dir("remove clickRemove true");
            let o = JSON.parse(localStorage.getItem("data_notification")), s = "";
            n.target.closest(".product") ? s = n.target.closest(".product").querySelector(".title").innerText.toLowerCase().trim() : n.target.closest(".action-wrapper") ? s = n.target.closest(".action-wrapper").querySelector("h2").innerText.toLowerCase().trim() : n.target.closest(".cart-product") && (s = n.target.closest(".cart-product").querySelector(".title").innerHTML.split("<span")[0].toLowerCase().trim()), s.includes(o == null ? void 0 : o.title.toLowerCase().trim()) && ((e = t(".crs_notification")) == null || e.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), !t("#puree") && p(".product-wrapper .right-side section").forEach((r) => {
        var o, s;
        let n = (o = r.querySelector("h3")) == null ? void 0 : o.innerText.toLowerCase(), e = (s = r.querySelector("h2")) == null ? void 0 : s.innerText.toLowerCase();
        n != null && n.includes("ingredients") ? r.id = "ingredients" : n != null && n.includes("nutrients") ? r.id = "nutrients" : n != null && n.includes("us vs them") ? r.id = "usvsthem" : e != null && e.includes("directions & safety") && (r.id = "puree");
      });
    }
    updateDataNotification() {
      setTimeout(() => {
        var i, r, n, e;
        if (((r = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : r.boxes[0]) != null) {
          const o = (e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.boxes, s = Object.keys(o), d = s[s.length - 1], a = o[d], g = a.image.includes("https") ? a.image : "https://cerebelly.com/wp-json/cerebelly/image/get?path=" + a.image;
          let u = {};
          p(".product").forEach((h) => {
            var y, k;
            h.querySelector(".title").innerText.includes(a.title) && (u.type = ((y = h.querySelector(".quantity")) == null ? void 0 : y.innerHTML) || ((k = h.querySelector(".desktop")) == null ? void 0 : k.innerHTML.replace(" | ", "")));
          }), u.title = a.title, u.image = g, u.price = a.price, u.count = parseInt(d) + 1, console.dir(u), localStorage.setItem("data_notification", JSON.stringify(u));
        }
      }, 200);
    }
  }
  new v(x);
})();