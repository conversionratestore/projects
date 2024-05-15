(function() {
  "use strict";
  const l = (p, i, o, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: p,
      event_desc: i,
      event_type: o,
      event_loc: n
    }), console.dir(`Event: ${p} | ${i} | ${o} | ${n}`);
  }, b = ({ name: p, dev: i }) => {
    console.dir(
      `%c EXP: ${p} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, h = (p) => document.querySelectorAll(p), t = (p) => document.querySelector(p), y = (p) => {
    let i = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(i), window.clarity("set", p, "variant_1"));
    }, 1e3);
  }, k = (p) => new Promise((i, o) => {
    var n = 0, e = setInterval(r, 1e3);
    function r() {
      n++, n > p && (clearInterval(e), i(!0));
    }
    document.addEventListener("click", function() {
      i(!1);
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
  </svg>`
  }, L = (p, i, o, n, e) => (
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
          <img src="${p}" alt="${i}">
          <div>
              <div class="crs_notification_title">${i}</div>
              <div class="crs_notification_info">${o}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${n}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-md-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${e})${m.arrowRight}</a>
  </div>
</div>`
  ), x = `
<nav class="crs_nav">
  <ul class="d-flex">
    <li><a href="#ingredients">ingredients</a></li>
    <li><a href="#nutrients">Nutritients</a></li>
    <li><a href="#usvsthem">the cerebelly standard</a></li>
    <li><a href="#puree">directions & safety</a></li>
  </ul>
</nav>`, C = `.items-center {
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
}/*# sourceMappingURL=base.css.map */`, S = `.crs_notification {
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

.crs_show_notification .modal.css-1m229m3,
.crs_show_notification .modal.css-8z7pw4 {
  display: none !important;
}

.modal .product-wrapper .css-5nnxvq .product-image-wrapper {
  padding: 12px;
  max-height: none;
  height: auto;
}
.modal .product-wrapper .css-5nnxvq .product-image-wrapper picture img {
  height: 100%;
  max-height: calc(50vh - 72px - 28px - 48px);
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

.css-12a0csp .prev,
.css-12a0csp .next {
  display: none !important;
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
}
@media (max-width: 360px) {
  .crs_notification {
    padding-left: 16px;
    padding-right: 16px;
  }
}/*# sourceMappingURL=main.css.map */`;
  b({ name: "Enhancements on PDP and new Add to Cart notification", dev: "Olha" }), y("new_add_to_cart");
  const v = window.innerWidth < 991 ? "mobile" : "desktop";
  class g {
    constructor(i) {
      this.device = i, this.isSelectorWrapper = this.device === "desktop" ? ".product-wrapper" : ".css-12a0csp", this.clickClosePdp = !1, this.clickRemove = !1, this.clickAdd = !1, this.init();
    }
    init() {
      if (!t(".crs_style") && !t(".crs_script")) {
        let o = document.createElement("script");
        o.src = "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js", o.async = !1, o.className = "crs_script", document.head.appendChild(o), document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">${C + S}</style>`);
      }
      k(this.device === "desktop" ? 20 : 10).then((o) => {
        var n;
        o && sessionStorage.getItem("exit_intent") == null && ((n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart.boxes[0]) != null && this.checkPageUrl() === "other" && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_04", "User inactive", "Visibility", "Popover"));
      }), setTimeout(() => {
        var o;
        sessionStorage.getItem("exit_intent") == null && ((o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart.boxes[0]) != null && !t(".crs_notification") && this.checkPageUrl() === "other" && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_05", "After 180 seconds", "Visibility", "Popover"));
      }, 18e4), this.exitIntent(), document.body.classList.add("crs_show_notification"), t(".css-1et9m3v.b-header.fw-header .e-nav .mobile-cart-box").addEventListener("click", (o) => {
        document.body.classList.remove("crs_show_notification");
      });
      const i = new MutationObserver((o) => {
        var n, e;
        this.navigation(), this.changeElements(), document.body.style.overflow = this.checkPageUrl() === "pdp" ? "hidden" : "", ((e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.boxes[0]) == null && t(".crs_notification") && t(".crs_notification").remove(), i.disconnect(), i.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });
      });
      i.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0
      });
    }
    checkPageUrl() {
      const i = window.location.href;
      return i.includes("checkout") ? "checkout" : i.includes("/cart") ? "cart" : i.includes("/product") || i.includes("/bundle") ? "pdp" : "other";
    }
    renderNotification(i = "") {
      var o, n;
      t(".crs_notification") && t(".crs_notification").remove(), ((n = (o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart) == null ? void 0 : n.boxes[0]) != null && (this.updateDataNotification(), setTimeout(() => {
        let e = JSON.parse(localStorage.getItem("data_notification"));
        document.body.insertAdjacentHTML("afterbegin", L(e.image, e.title, e.type, e.price, e.count)), setTimeout(() => {
          t(".crs_notification").classList.add("active");
        }, 200), this.actionNotification();
      }, 200));
    }
    actionNotification() {
      if (!t(".crs_notification"))
        return;
      let i = t(".crs_notification");
      i.querySelector(".crs_close").addEventListener("click", (o) => {
        i.classList.remove("active"), setTimeout(() => {
          i == null || i.remove();
        }, 200), l("exp_newaddtocart_click_03", "Close", "Button", "Popover");
      }), i.querySelector(".crs_continue_shop").addEventListener("click", (o) => {
        o.preventDefault(), i.classList.remove("active"), setTimeout(() => {
          i == null || i.remove();
        }, 200), l("exp_newaddtocart_click_04", "Continue Shopping", "Button", "Popover");
      }), i.querySelector(".crs_view_cart").addEventListener("click", (o) => {
        l("exp_newaddtocart_click_02", "View cart", "Button", "Popover");
      });
    }
    exitIntent() {
      var i;
      switch (v) {
        case "desktop":
          let o = 0, n = 0;
          window.addEventListener("mousemove", function(a) {
            o = a.clientX, n = a.clientY;
          }), document.body.addEventListener(
            "mouseleave",
            function() {
              var a, u;
              (o < 50 || n < 50 || o > window.innerWidth - 50 || n > window.innerHeight - 50) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && ((u = (a = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : a.cart) == null ? void 0 : u.boxes[0]) != null && (sessionStorage.setItem("exit_intent", "true"), new g().renderNotification(), l("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"));
            },
            { once: !0 }
          );
          break;
        case "mobile":
          let e = (/android/i.test(navigator.userAgent), 120), r = 0, s = 0, c = () => {
            var u, d, f;
            let a = window.scrollY;
            s = a - r, r = a, (s > e || s < -e) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && !t(".css-m18cj1") && ((d = (u = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : u.cart) == null ? void 0 : d.boxes[0]) != null && this.clickClosePdp === !1 && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), l("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"), document.removeEventListener("scroll", c), (f = t(this.isSelectorWrapper)) == null || f.removeEventListener("scroll", c));
          };
          document.addEventListener("scroll", c), (i = t(this.isSelectorWrapper)) == null || i.addEventListener("scroll", c);
          break;
      }
    }
    navigation() {
      if (t(".crs_nav") || !t(".css-12a0csp .product-wrapper .left-side"))
        return;
      this.device === "mobile" ? t(".css-12a0csp .product-wrapper .left-side").insertAdjacentHTML("beforeend", x) : (t(".css-12a0csp .product-wrapper").insertAdjacentHTML("afterbegin", x), t(".crs_nav ul").after(t(".css-mc9jj7 .controls .default-close"))), t(".modal.css-mc9jj7 .default-close").addEventListener("click", (n) => {
        this.clickClosePdp = !0, setTimeout(() => {
          document.body.classList.add("crs_show_notification"), this.clickClosePdp = !1;
        }, 300), n.target.closest(".modal").querySelector(".product-wrapper") && l("exp_newaddtocart_click_05", "Close", "Button", "Product");
      }), l("exp_newaddtocart_vis_06", "View product", "Visibility", "Product"), l("exp_newaddtocart_vis_01", "View navigation", "Visibility", "Under the add to cart"), document.body.classList.add("crs_show_notification"), t(".modal .product-wrapper button.button.red") && l("exp_newaddtocart_vis_07", "View " + t(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product"), h(".crs_nav a").forEach((n) => {
        n.addEventListener("click", (e) => {
          e.preventDefault(), l("exp_newaddtocart_click_01", e.target.innerText, "Nav panel", "Under the add to cart");
          let r = e.target.href.split("#")[1];
          t("#" + r) && (seamless.polyfill(), seamless.scrollBy(t(this.isSelectorWrapper), { behavior: "smooth", top: t("#" + r).getBoundingClientRect().top - n.clientHeight - 20, left: 0 }));
        });
      });
      function i() {
        t(".crs_nav").style.minWidth = t(".css-12a0csp .product-wrapper .right-side").clientWidth + "px", t(".crs_nav").style.right = window.innerWidth - t(".css-12a0csp .product-wrapper .right-side").getBoundingClientRect().right + "px";
      }
      window.addEventListener("resize", () => {
        this.device === "desktop" && i();
      }), i(), t(".css-12a0csp").addEventListener("scroll", (n) => {
        if (this.device !== "mobile")
          return;
        let e = t(".crs_nav").getBoundingClientRect().bottom;
        e < 0 ? t(".crs_nav").classList.add("fixed") : t(".crs_nav").classList.remove("fixed"), e < -100 ? (t(".crs_nav").classList.add("active"), t(".css-mc9jj7 .controls .default-close").style.top = "55px") : (t(".crs_nav").classList.remove("active"), t(".css-mc9jj7 .controls .default-close").style = "");
      });
      function o(n) {
        var e = n.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      this.device === "desktop" && h(".crs_nav a")[0].classList.add("active"), t(this.isSelectorWrapper).addEventListener("scroll", (n) => {
        const e = h(".product-wrapper .right-side section[id] h2"), r = h(".crs_nav a");
        var s = -1;
        e.forEach(function(c, a) {
          o(c) && s === -1 && (s = a);
        }), s !== -1 && r.forEach(function(c, a) {
          if (a === s) {
            c.classList.add("active");
            const u = t(".crs_nav ul"), d = c.getBoundingClientRect(), f = u.getBoundingClientRect();
            d.left < f.left ? u.scrollLeft -= f.left - d.left : d.right > f.right && (u.scrollLeft += d.right - f.right);
          } else
            c.classList.remove("active");
        });
      });
    }
    changeElements() {
      var i, o;
      if (h(".button").forEach((n, e) => {
        let r = n.innerText.toLowerCase();
        if (r.includes("to bag")) {
          let s = n.innerText;
          n.innerText = s.toLowerCase().replace("bag", "cart");
        }
        n.closest(".add") && r.includes("to cart") && n.addEventListener("click", (s) => {
          this.clickAdd == !1 && (this.clickAdd = !0, console.dir("click add to cart"));
        });
      }), t(".css-8z7pw4 .custom .default-close") && t(".css-8z7pw4 .custom .default-close").addEventListener("click", (n) => {
        document.body.classList.add("crs_show_notification");
      }), t(".modal .cart-product .product-count") && this.clickAdd == !0 && (document.body.classList.add("crs_show_notification"), this.renderNotification(t(".modal .cart-product .product-count").innerText), l("exp_newaddtocart_vis_02", "Add to cart", "Visibility", "Popover"), t(".crs_show_notification .modal .cart-product .product-count").closest(".modal").querySelector(".default-close").click(), this.clickAdd = !1), t(".action-wrapper") && !t(".action-wrapper h2") && (t(".action-wrapper").insertAdjacentHTML("afterbegin", `<h2>${(i = document.querySelector(".css-12a0csp h2")) == null ? void 0 : i.innerHTML}</h2>`), t(".pdp-net-weight") && t(".css-5nnxvq .product-image-wrapper picture").after(t(".pdp-net-weight"))), t(".css-5nnxvq .unit-price .discount .subscribe") && !t(".css-5nnxvq .action-wrapper > .subscribe") && t(".css-5nnxvq .unit-price").after(t(".css-5nnxvq .unit-price .discount .subscribe")), t(".css-5nnxvq .prices") && !t(".css-5nnxvq .unit-price > .prices")) {
        t(".css-5nnxvq .unit-price .discount").after(t(".css-5nnxvq .prices"));
        let n = 0;
        this.device === "mobile" ? n = "76px - 24px - 48px" : n = "67px - 66px", t(".css-5nnxvq .product-image-wrapper picture img").style = `max-height: calc(${window.innerHeight}px - ${n} - ${t(".css-5nnxvq .action-wrapper").clientHeight}px`;
      }
      h('.product-wrapper .right-side img[loading="lazy"]').forEach((n) => {
        n.removeAttribute("loading");
      }), (o = t(".modal .left-side .remove")) == null || o.addEventListener("click", (n) => {
        this.clickRemove == !1 && (this.clickRemove = !0, setTimeout(() => {
          t(".modal .left-side .add button") && (l("exp_newaddtocart_vis_07", "View " + t(".modal .left-side .add button").innerText + " button", "Visibility", "Product"), this.clickRemove = !1);
        }, 500));
      }), h(".cart-product .cart-product-reset button").forEach((n) => {
        n.addEventListener("click", (e) => {
          var r;
          if (this.clickRemove == !1) {
            this.clickRemove = !0, console.dir("click remove product in cart");
            let s = JSON.parse(localStorage.getItem("data_notification"));
            n.closest(".cart-product").querySelector(".title").innerHTML.includes(s == null ? void 0 : s.title) && (console.dir("remove product in cart"), (r = t(".crs_notification")) == null || r.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), h(".remove").forEach((n) => {
        n.addEventListener("click", (e) => {
          var r;
          if (this.clickRemove == !1) {
            this.clickRemove = !0;
            let s = JSON.parse(localStorage.getItem("data_notification"));
            console.dir("click remove product");
            let c = "";
            e.target.closest(".product") ? c = e.target.closest(".product").querySelector(".title").innerText.toLowerCase().trim() : e.target.closest(".action-wrapper") ? c = e.target.closest(".action-wrapper").querySelector("h2").innerText.toLowerCase().trim() : e.target.closest(".cart-product") && (c = e.target.closest(".cart-product").querySelector(".title").innerHTML.split("<span")[0].toLowerCase().trim()), c.includes(s == null ? void 0 : s.title.toLowerCase().trim()) && (console.dir("remove product"), (r = t(".crs_notification")) == null || r.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), !t("#puree") && h(".product-wrapper .right-side section").forEach((n) => {
        var s, c;
        let e = (s = n.querySelector("h3")) == null ? void 0 : s.innerText.toLowerCase(), r = (c = n.querySelector("h2")) == null ? void 0 : c.innerText.toLowerCase();
        e != null && e.includes("ingredients") ? n.id = "ingredients" : e != null && e.includes("nutrients") ? n.id = "nutrients" : e != null && e.includes("us vs them") ? n.id = "usvsthem" : r != null && r.includes("directions & safety") && (n.id = "puree");
      });
    }
    updateDataNotification() {
      setTimeout(() => {
        var i, o, n, e;
        if (((o = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : o.boxes[0]) != null) {
          const r = (e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.boxes, s = Object.keys(r), c = s[s.length - 1], a = r[c], u = a.image.includes("https") ? a.image : "https://cerebelly.com/wp-json/cerebelly/image/get?path=" + a.image;
          let d = {};
          h(".product").forEach((f) => {
            var w, _;
            f.querySelector(".title").innerText.includes(a.title) && (d.type = ((w = f.querySelector(".quantity")) == null ? void 0 : w.innerHTML) || ((_ = f.querySelector(".desktop")) == null ? void 0 : _.innerHTML.replace(" | ", "")));
          }), d.title = a.title, d.image = u, d.price = a.price, d.count = parseInt(c) + 1, console.dir(d), localStorage.setItem("data_notification", JSON.stringify(d));
        }
      }, 200);
    }
  }
  new g(v);
})();