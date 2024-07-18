(function() {
  "use strict";
  const l = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(s, t, o, n, i, e) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, i = t.getElementsByTagName("head")[0], e = t.createElement("script"), e.async = !0, e.src = o + s._hjSettings.hjid + n + s._hjSettings.hjsv, i && i.appendChild(e);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), l({ name: "Eliminate cart page step on Desktop", dev: "OS" });
  class d {
    constructor() {
      var t, o;
      this.observer = null, this.countryCode = (o = (t = window == null ? void 0 : window.autoInitData) == null ? void 0 : t.website) == null ? void 0 : o.websiteCode, this.addToCartClickHandler = null, this.basketButtonHandler = () => {
        this.waitForElement('minibasket a[href*="/basket"]', (n) => {
          var c;
          const i = this.country === "us" ? "/us/checkout" : "/checkout";
          console.log("Element appeared!");
          const e = (
            /* HTML */
            `<a class="w-12 p-r-0 p-l-0 button" href="${i}"
        ><span class="p1 col-w">Checkout securely</span></a
      >`
          );
          n.outerHTML = e, (c = document.querySelector('minibasket a[href*="/checkout"]')) == null || c.addEventListener("click", (r) => {
            const a = document.querySelector('minibasket [aria-label="Close"]');
            localStorage.setItem("lastPdpHref", location.href), a && a.click();
          });
        });
      }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1024 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.basketButtonHandler(), this.updateDevice(), this.checkBasketPage();
    }
    updateDevice() {
      window.addEventListener("resize", () => {
        const t = this.device;
        this.device = window.innerWidth > 1024 ? "desktop" : "mobile", t !== this.device && this.init();
      });
    }
    checkBasketPage() {
      function t() {
        const n = setInterval(function() {
          document.querySelectorAll("button").forEach((e) => {
            var c;
            if (e && ((c = e.textContent) != null && c.includes("Continue shopping"))) {
              console.log("Button found.");
              const r = document.referrer;
              e.addEventListener("click", (a) => {
                if (r.includes("checkout")) {
                  a.preventDefault();
                  const u = localStorage.getItem("lastPdpHref");
                  u && (location.href = u);
                }
              }), clearInterval(n);
            }
          });
        }, 100);
      }
      function o() {
        location.href.includes("basket") && (console.log("here is basket page"), t());
      }
      (function(n) {
        const i = n.pushState, e = n.replaceState;
        n.pushState = function(c) {
          i.apply(n, arguments), o();
        }, n.replaceState = function(c) {
          e.apply(n, arguments), o();
        }, window.addEventListener("popstate", function(c) {
          o();
        });
      })(window.history), o();
    }
    waitForElement(t, o) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((n, i) => {
        const e = document.querySelector(t);
        e && o(e);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new d();
})();
