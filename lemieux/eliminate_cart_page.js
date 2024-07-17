(function() {
  "use strict";
  const r = ({ name: s, dev: n }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(s, n, i, t, o, e) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, o = n.getElementsByTagName("head")[0], e = n.createElement("script"), e.async = !0, e.src = i + s._hjSettings.hjid + t + s._hjSettings.hjsv, o && o.appendChild(e);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), r({ name: "Eliminate cart page step on Desktop", dev: "OS" });
  class a {
    constructor() {
      var n, i;
      this.observer = null, this.countryCode = (i = (n = window == null ? void 0 : window.autoInitData) == null ? void 0 : n.website) == null ? void 0 : i.websiteCode, this.checkoutClickHandler = null, this.basketButtonHandler = () => {
        this.waitForElement('minibasket a[href*="/basket"]', (t) => {
          const o = this.country === "us" ? "/us/checkout" : "/checkout";
          console.log("Element appeared!", t), t.setAttribute("href", o), t.setAttribute("routerlink", o), this.checkoutClickHandler && t.removeEventListener("click", this.checkoutClickHandler), this.checkoutClickHandler = (e) => {
            e.preventDefault(), window.location.assign(o);
          }, t.addEventListener("click", this.checkoutClickHandler);
        });
      }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1024 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.basketButtonHandler(), this.updateDevice();
    }
    updateDevice() {
      window.addEventListener("resize", () => {
        const n = this.device;
        this.device = window.innerWidth > 1024 ? "desktop" : "mobile", n !== this.device && this.init();
      });
    }
    checkBasketPage() {
      function n() {
        const t = setInterval(function() {
          document.querySelectorAll("button").forEach((e) => {
            var c;
            if (e && ((c = e.textContent) != null && c.includes("Continue shopping"))) {
              console.log("Button found.");
              const u = document.referrer;
              e.addEventListener("click", (h) => {
                u.includes("checkout") && (h.preventDefault(), history.go(-2));
              }), clearInterval(t);
            }
          });
        }, 100);
      }
      function i() {
        location.href.includes("basket") && (console.log("here is basket page"), n());
      }
      (function(t) {
        const o = t.pushState, e = t.replaceState;
        t.pushState = function(c) {
          o.apply(t, arguments), i();
        }, t.replaceState = function(c) {
          e.apply(t, arguments), i();
        }, window.addEventListener("popstate", function(c) {
          i();
        });
      })(window.history), i();
    }
    waitForElement(n, i) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((t, o) => {
        const e = document.querySelector(n);
        e && i(e);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new a();
})();
//# sourceMappingURL=index.js.map
