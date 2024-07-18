(function() {
  "use strict";
  const u = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(s, e, o, n, i, t) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, i = e.getElementsByTagName("head")[0], t = e.createElement("script"), t.async = !0, t.src = o + s._hjSettings.hjid + n + s._hjSettings.hjsv, i && i.appendChild(t);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), u({ name: "Eliminate cart page step on Desktop", dev: "OS" });
  class l {
    constructor() {
      var e, o;
      this.observer = null, this.countryCode = (o = (e = window == null ? void 0 : window.autoInitData) == null ? void 0 : e.website) == null ? void 0 : o.websiteCode, this.addToCartClickHandler = null, this.basketButtonHandler = () => {
        this.waitForElement('minibasket a[href*="/basket"]', (n) => {
          var c;
          const i = this.country === "us" ? "/us/checkout" : "/checkout";
          console.log("Element appeared!");
          const t = (
            /* HTML */
            `<a class="w-12 p-r-0 p-l-0 button" href="${i}"
        ><span class="p1 col-w">Checkout securely</span></a
      >`
          );
          n.outerHTML = t, (c = document.querySelector('minibasket a[href*="/checkout"]')) == null || c.addEventListener("click", (r) => {
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
        const e = this.device;
        this.device = window.innerWidth > 1024 ? "desktop" : "mobile", e !== this.device && this.init();
      });
    }
    checkBasketPage() {
      function e() {
        const n = setInterval(function() {
          document.querySelectorAll("button").forEach((t) => {
            var c;
            if (t && ((c = t.textContent) != null && c.includes("Continue shopping"))) {
              console.log("Button found.");
              const r = localStorage.getItem("lastPdpHref"), a = (
                /* HTML */
                ` <a class="w-12 button-1 m-b m-t-2" href="${r}"
              ><span class="button__body">Continue shopping</span></a
            >`
              );
              r && (t.outerHTML = a), clearInterval(n);
            }
          });
        }, 100);
      }
      function o() {
        location.href.includes("basket") && (console.log("here is basket page"), e());
      }
      (function(n) {
        const i = n.pushState, t = n.replaceState;
        n.pushState = function(c) {
          i.apply(n, arguments), o();
        }, n.replaceState = function(c) {
          t.apply(n, arguments), o();
        }, window.addEventListener("popstate", function(c) {
          o();
        });
      })(window.history), o();
    }
    waitForElement(e, o) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((n, i) => {
        const t = document.querySelector(e);
        t && o(t);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new l();
})();
