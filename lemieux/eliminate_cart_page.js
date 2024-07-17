(function() {
  "use strict";
  const u = ({ name: s, dev: a }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${a})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(s, a, n, t, e, c) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, e = a.getElementsByTagName("head")[0], c = a.createElement("script"), c.async = !0, c.src = n + s._hjSettings.hjid + t + s._hjSettings.hjsv, e && e.appendChild(c);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), window.onload = () => {
    u({ name: "Eliminate cart page step on Desktop", dev: "OS" });
    class s {
      constructor() {
        var n, t;
        this.observer = null, this.countryCode = (t = (n = window == null ? void 0 : window.autoInitData) == null ? void 0 : n.website) == null ? void 0 : t.websiteCode, this.addToCartClickHandler = null, this.basketButtonHandler = () => {
          this.waitForElement('minibasket a[href*="/basket"]', (e) => {
            var i;
            const c = this.country === "us" ? "/us/checkout" : "/checkout";
            console.log("Element appeared!");
            const o = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${c}"
          ><span class="p1 col-w">Checkout securely</span></a
        >`
            );
            e.outerHTML = o, (i = document.querySelector('minibasket a[href*="/checkout"]')) == null || i.addEventListener("click", (l) => {
              const r = document.querySelector('minibasket [aria-label="Close"]');
              r && r.click();
            });
          });
        }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1024 ? "desktop" : "mobile", this.init();
      }
      init() {
        this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && (this.basketButtonHandler(), this.handleLastPdp()), this.updateDevice(), this.checkBasketPage();
      }
      updateDevice() {
        window.addEventListener("resize", () => {
          const n = this.device;
          this.device = window.innerWidth > 1024 ? "desktop" : "mobile", n !== this.device && this.init();
        });
      }
      handleLastPdp() {
        const n = () => {
          const t = document.querySelector("action[cy-basketaddbutton]");
          t && (this.addToCartClickHandler && t.removeEventListener("click", this.addToCartClickHandler), this.addToCartClickHandler = () => {
            console.log("Add to cart button clicked", location.href), localStorage.setItem("lastPdpHref", location.href);
          }, t.addEventListener("click", this.addToCartClickHandler));
        };
        (function(t) {
          const e = t.pushState, c = t.replaceState;
          t.pushState = function(o) {
            e.apply(t, arguments), n();
          }, t.replaceState = function(o) {
            c.apply(t, arguments), n();
          }, window.addEventListener("popstate", function(o) {
            n();
          });
        })(window.history), n();
      }
      checkBasketPage() {
        function n() {
          const e = setInterval(function() {
            document.querySelectorAll("button").forEach((o) => {
              var i;
              if (o && ((i = o.textContent) != null && i.includes("Continue shopping"))) {
                console.log("Button found.");
                const l = document.referrer;
                o.addEventListener("click", (r) => {
                  if (l.includes("checkout")) {
                    r.preventDefault();
                    const d = localStorage.getItem("lastPdpHref");
                    d && (location.href = d);
                  }
                }), clearInterval(e);
              }
            });
          }, 100);
        }
        function t() {
          location.href.includes("basket") && (console.log("here is basket page"), n());
        }
        (function(e) {
          const c = e.pushState, o = e.replaceState;
          e.pushState = function(i) {
            c.apply(e, arguments), t();
          }, e.replaceState = function(i) {
            o.apply(e, arguments), t();
          }, window.addEventListener("popstate", function(i) {
            t();
          });
        })(window.history), t();
      }
      waitForElement(n, t) {
        this.observer && this.observer.disconnect(), this.observer = new MutationObserver((e, c) => {
          const o = document.querySelector(n);
          o && t(o);
        }), this.observer.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["href"]
        });
      }
    }
    new s();
  };
})();
