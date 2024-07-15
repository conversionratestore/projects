(function() {
  "use strict";
  const c = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(t, e, o, s, n, i) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, n = e.getElementsByTagName("head")[0], i = e.createElement("script"), i.async = !0, i.src = o + t._hjSettings.hjid + s + t._hjSettings.hjsv, n && n.appendChild(i);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), c({ name: "Eliminate cart page step on Desktop", dev: "OS" });
  class r {
    constructor() {
      var e, o;
      this.observer = null, this.countryCode = (o = (e = window == null ? void 0 : window.autoInitData) == null ? void 0 : e.website) == null ? void 0 : o.websiteCode, this.checkoutClickHandler = null, this.basketButtonHandler = () => {
        this.waitForElement('minibasket a[href*="/basket"]', (s) => {
          const n = this.country === "us" ? "/us/checkout" : "/checkout";
          console.log("Element appeared!", s), s.setAttribute("href", n), this.checkoutClickHandler && s.removeEventListener("click", this.checkoutClickHandler), this.checkoutClickHandler = (i) => {
            i.preventDefault(), window.location.href = n;
          }, s.addEventListener("click", this.checkoutClickHandler);
        });
      }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1024 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.basketButtonHandler(), this.updateDevice();
    }
    updateDevice() {
      window.addEventListener("resize", () => {
        const e = this.device;
        this.device = window.innerWidth > 1024 ? "desktop" : "mobile", e !== this.device && this.init();
      });
    }
    waitForElement(e, o) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((s, n) => {
        const i = document.querySelector(e);
        i && o(i);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new r();
})();
