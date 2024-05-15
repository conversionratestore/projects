(function() {
  "use strict";
  const a = (d, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: d,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), console.dir(`Event: ${d} | ${e} | ${t} | ${i}`);
  }, b = ({ name: d, dev: e }) => {
    console.dir(
      `%c EXP: ${d} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (d) => document.querySelectorAll(d), n = (d) => document.querySelector(d), y = (d) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", d, "variant_1"));
    }, 1e3);
  }, L = (d) => new Promise((e, t) => {
    var i = 0, o = setInterval(s, 1e3);
    function s() {
      i++, i > d && (clearInterval(o), e(!0));
    }
    document.addEventListener("click", function() {
      e(!1);
    });
  }), x = {
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
  }, C = (d, e, t, i, o) => (
    /* HTML */
    ` <div class="crs_notification">
  <div class="crs_notification_head justify-between">
      <div class="items-center">
          ${x.checkbox}
          <h3>Added to cart</h3>
      </div>
      <button type="button" class="crs_close">
          ${x.close}
      </button>
  </div>
  <div class="crs_notification_body justify-between">
      <div class="d-flex">
          <img src="${d}" alt="${e}">
          <div>
              <div class="crs_notification_title">${e}</div>
              <div class="crs_notification_info">${t}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${i}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-md-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${o})${x.arrowRight}</a>
  </div>
</div>`
  ), m = `
<nav class="crs_nav">
  <ul class="d-flex">
    <li><a href="#ingredients">ingredients</a></li>
    <li><a href="#nutrients">Nutritients</a></li>
    <li><a href="#usvsthem">the cerebelly standard</a></li>
    <li><a href="#puree">directions & safety</a></li>
  </ul>
</nav>`, k = `.items-center {
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

.crs_show_notification .modal {
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
    constructor(e) {
      this.device = e, this.isSelectorWrapper = this.device === "desktop" ? ".product-wrapper" : ".css-12a0csp", this.clickClosePdp = !1, this.init();
    }
    init() {
      if (!n(".crs_style") && !n(".crs_script")) {
        let t = document.createElement("script");
        t.src = "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js", t.async = !1, t.className = "crs_script", document.head.appendChild(t), document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">${k + S}</style>`);
      }
      L(this.device === "desktop" ? 20 : 10).then((t) => {
        var i;
        console.dir(t), t && sessionStorage.getItem("exit_intent") == null && ((i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart.boxes[0]) != null && this.checkPageUrl() === "other" && (sessionStorage.setItem("exit_intent", "true"), console.dir("inactive init"), this.renderNotification(), a("exp_newaddtocart_vis_04", "User inactive", "Visibility", "Popover"));
      }), setTimeout(() => {
        var t;
        sessionStorage.getItem("exit_intent") == null && ((t = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : t.cart.boxes[0]) != null && !n(".crs_notification") && this.checkPageUrl() === "other" && (sessionStorage.setItem("exit_intent", "true"), console.dir("after 180 seconds init"), this.renderNotification(), a("exp_newaddtocart_vis_05", "After 180 seconds", "Visibility", "Popover"));
      }, 18e4), this.exitIntent();
      const e = new MutationObserver((t) => {
        this.navigation(), this.changeElements(), document.body.style.overflow = this.checkPageUrl() === "pdp" ? "hidden" : "", e.disconnect(), e.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });
      });
      e.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0
      });
    }
    checkPageUrl() {
      const e = window.location.href;
      return e.includes("checkout") ? "checkout" : e.includes("/cart") ? "cart" : e.includes("/product") || e.includes("/bundle") ? "pdp" : "other";
    }
    renderNotification(e = "") {
      n(".crs_notification") && n(".crs_notification").remove();
      const t = JSON.parse(localStorage.getItem("v4Cart")).cart.boxes, i = Object.keys(t), o = i[i.length - 1], s = t[o];
      console.dir("lastObject: " + s);
      const c = s.image.includes("https") ? s.image : "https://cerebelly.com/wp-json/cerebelly/image/get?path=" + s.image;
      let r = {};
      e === "" ? r = JSON.parse(localStorage.getItem("data_notification")) : (r.title = s.title, r.image = c, r.type = e, r.price = s.price, r.count = parseInt(o) + 1, localStorage.setItem("data_notification", JSON.stringify(r))), console.dir(r), console.dir("render:"), console.dir(r), document.body.insertAdjacentHTML("afterbegin", C(r.image, r.title, r.type, r.price, r.count)), setTimeout(() => {
        n(".crs_notification").classList.add("active");
      }, 200), this.actionNotification();
    }
    actionNotification() {
      if (!n(".crs_notification"))
        return;
      let e = n(".crs_notification");
      e.querySelector(".crs_close").addEventListener("click", (t) => {
        e.classList.remove("active"), setTimeout(() => {
          e == null || e.remove();
        }, 200), a("exp_newaddtocart_click_03", "Close", "Button", "Popover");
      }), e.querySelector(".crs_continue_shop").addEventListener("click", (t) => {
        t.preventDefault(), e.classList.remove("active"), setTimeout(() => {
          e == null || e.remove();
        }, 200), a("exp_newaddtocart_click_04", "Continue Shopping", "Button", "Popover");
      }), e.querySelector(".crs_view_cart").addEventListener("click", (t) => {
        a("exp_newaddtocart_click_02", "View cart", "Button", "Popover");
      });
    }
    exitIntent() {
      var e;
      switch (console.dir("start exitIntent"), v) {
        case "desktop":
          let t = 0, i = 0;
          window.addEventListener("mousemove", function(l) {
            t = l.clientX, i = l.clientY;
          }), document.body.addEventListener(
            "mouseleave",
            function() {
              var l, p;
              (t < 50 || i < 50 || t > window.innerWidth - 50 || i > window.innerHeight - 50) && sessionStorage.getItem("exit_intent") == null && !n(".crs_notification") && ((p = (l = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : l.cart) == null ? void 0 : p.boxes[0]) != null && (sessionStorage.setItem("exit_intent", "true"), console.dir("exitIntent desktop: "), new g().renderNotification(), a("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"));
            },
            { once: !0 }
          );
          break;
        case "mobile":
          let o = (/android/i.test(navigator.userAgent), 120), s = 0, c = 0, r = () => {
            var p, f, h, w, _;
            let l = window.scrollY;
            c = l - s, s = l, console.dir("currentSpeed: " + c), console.dir("currentSpeed > speedValue: ", c > o), console.dir("currentSpeed < -speedValue: ", c < -o), console.dir("--------"), console.dir(sessionStorage.getItem("exit_intent") == null), console.dir(!n(".crs_notification")), console.dir(!n(".css-m18cj1")), console.dir(((f = (p = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : p.cart) == null ? void 0 : f.boxes[0]) != null), console.dir("--------"), (c > o || c < -o) && sessionStorage.getItem("exit_intent") == null && !n(".crs_notification") && !n(".css-m18cj1") && ((w = (h = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : h.cart) == null ? void 0 : w.boxes[0]) != null && this.clickClosePdp === !1 && (console.dir("currentSpeed: " + c), sessionStorage.setItem("exit_intent", "true"), console.dir("exitIntent mobile: "), this.renderNotification(), a("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"), document.removeEventListener("scroll", r), (_ = n(this.isSelectorWrapper)) == null || _.removeEventListener("scroll", r));
          };
          document.addEventListener("scroll", r), (e = n(this.isSelectorWrapper)) == null || e.addEventListener("scroll", r);
          break;
      }
    }
    navigation() {
      if (n(".crs_nav") || !n(".css-12a0csp .product-wrapper .left-side"))
        return;
      this.device === "mobile" ? (n(".css-12a0csp .product-wrapper .left-side").insertAdjacentHTML("beforeend", m), n(".modal.css-mc9jj7 .controls .default-close").addEventListener("click", (i) => {
        this.clickClosePdp = !0, setTimeout(() => {
          this.clickClosePdp = !1;
        }, 500), i.target.closest(".modal").querySelector(".product-wrapper") && a("exp_newaddtocart_click_05", "Close", "Button", "Product");
      })) : (n(".css-12a0csp .product-wrapper").insertAdjacentHTML("afterbegin", m), n(".crs_nav ul").after(n(".css-mc9jj7 .controls .default-close"))), a("exp_newaddtocart_vis_06", "View product", "Visibility", "Product"), a("exp_newaddtocart_vis_01", "View navigation", "Visibility", "Under the add to cart"), n(".modal .product-wrapper button.button.red") && a("exp_newaddtocart_vis_07", "View " + n(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product"), u(".crs_nav a").forEach((i) => {
        i.addEventListener("click", (o) => {
          o.preventDefault(), a("exp_newaddtocart_click_01", o.target.innerText, "Nav panel", "Under the add to cart");
          let s = o.target.href.split("#")[1];
          n("#" + s) && (seamless.polyfill(), seamless.scrollBy(n(this.isSelectorWrapper), { behavior: "smooth", top: n("#" + s).getBoundingClientRect().top - i.clientHeight - 20, left: 0 }));
        });
      });
      function e() {
        n(".crs_nav").style.minWidth = n(".css-12a0csp .product-wrapper .right-side").clientWidth + "px", n(".crs_nav").style.right = window.innerWidth - n(".css-12a0csp .product-wrapper .right-side").getBoundingClientRect().right + "px";
      }
      window.addEventListener("resize", () => {
        this.device === "desktop" && e();
      }), e(), n(".css-12a0csp").addEventListener("scroll", (i) => {
        if (this.device !== "mobile")
          return;
        let o = n(".crs_nav").getBoundingClientRect().bottom;
        o < 0 ? n(".crs_nav").classList.add("fixed") : n(".crs_nav").classList.remove("fixed"), o < -100 ? (n(".crs_nav").classList.add("active"), n(".css-mc9jj7 .controls .default-close").style.top = "55px") : (n(".crs_nav").classList.remove("active"), n(".css-mc9jj7 .controls .default-close").style = "");
      });
      function t(i) {
        var o = i.getBoundingClientRect();
        return o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      this.device === "desktop" && u(".crs_nav a")[0].classList.add("active"), n(this.isSelectorWrapper).addEventListener("scroll", (i) => {
        const o = u(".product-wrapper .right-side section[id] h2"), s = u(".crs_nav a");
        var c = -1;
        o.forEach(function(r, l) {
          t(r) && c === -1 && (c = l);
        }), c !== -1 && s.forEach(function(r, l) {
          if (l === c) {
            r.classList.add("active");
            const p = n(".crs_nav ul"), f = r.getBoundingClientRect(), h = p.getBoundingClientRect();
            f.left < h.left ? p.scrollLeft -= h.left - f.left : f.right > h.right && (p.scrollLeft += f.right - h.right);
          } else
            r.classList.remove("active");
        });
      });
    }
    changeElements() {
      var e;
      if (u(".button").forEach((t, i) => {
        let o = t.innerText.toLowerCase();
        if (o.includes("to bag")) {
          let s = t.innerText;
          t.innerText = s.toLowerCase().replace("bag", "cart");
        }
        t.closest(".add") && o.includes("to cart") && t.addEventListener("click", (s) => {
          n(".crs_show_notification") || (console.dir("click"), console.dir(s.target), document.body.classList.add("crs_show_notification"));
        }), t.classList.contains("remove") && n(".modal .product-wrapper button.button.red") && a("exp_newaddtocart_vis_07", "View " + n(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product");
      }), n(".crs_show_notification .modal .cart-product .product-count") && (console.dir("add to cart"), this.renderNotification(n(".modal .cart-product .product-count").innerText), a("exp_newaddtocart_vis_02", "Add to cart", "Visibility", "Popover"), n(".crs_show_notification .modal .cart-product .product-count").closest(".modal").querySelector(".default-close").click(), document.body.classList.remove("crs_show_notification")), n(".action-wrapper") && !n(".action-wrapper h2") && (n(".action-wrapper").insertAdjacentHTML("afterbegin", `<h2>${(e = document.querySelector(".css-12a0csp h2")) == null ? void 0 : e.innerHTML}</h2>`), n(".pdp-net-weight") && n(".css-5nnxvq .product-image-wrapper picture").after(n(".pdp-net-weight"))), n(".css-5nnxvq .unit-price .discount .subscribe") && !n(".css-5nnxvq .action-wrapper > .subscribe") && n(".css-5nnxvq .unit-price").after(n(".css-5nnxvq .unit-price .discount .subscribe")), n(".css-5nnxvq .prices") && !n(".css-5nnxvq .unit-price > .prices")) {
        n(".css-5nnxvq .unit-price .discount").after(n(".css-5nnxvq .prices"));
        let t = 0;
        this.device === "mobile" ? t = "76px - 24px - 48px" : t = "67px - 66px", n(".css-5nnxvq .product-image-wrapper picture img").style = `max-height: calc(${window.innerHeight}px - ${t} - ${n(".css-5nnxvq .action-wrapper").clientHeight}px`;
      }
      u('.product-wrapper .right-side img[loading="lazy"]').forEach((t) => {
        t.removeAttribute("loading");
      }), !n("#puree") && u(".product-wrapper .right-side section").forEach((t) => {
        var s, c;
        let i = (s = t.querySelector("h3")) == null ? void 0 : s.innerText.toLowerCase(), o = (c = t.querySelector("h2")) == null ? void 0 : c.innerText.toLowerCase();
        i != null && i.includes("ingredients") ? t.id = "ingredients" : i != null && i.includes("nutrients") ? t.id = "nutrients" : i != null && i.includes("us vs them") ? t.id = "usvsthem" : o != null && o.includes("directions & safety") && (t.id = "puree");
      });
    }
  }
  new g(v);
})();