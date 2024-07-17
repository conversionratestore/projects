(function() {
  "use strict";
  const a = ({ name: n, dev: c }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${c})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(n, c, o, i, t, e) {
    n.hj = n.hj || function() {
      (n.hj.q = n.hj.q || []).push(arguments);
    }, n._hjSettings = { hjid: 2667925, hjsv: 6 }, t = c.getElementsByTagName("head")[0], e = c.createElement("script"), e.async = !0, e.src = o + n._hjSettings.hjid + i + n._hjSettings.hjsv, t && t.appendChild(e);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), window.onload = () => {
    a({ name: "Eliminate cart page step on Desktop", dev: "OS" });
    class n {
      constructor() {
        var o, i;
        this.observer = null, this.countryCode = (i = (o = window == null ? void 0 : window.autoInitData) == null ? void 0 : o.website) == null ? void 0 : i.websiteCode, this.checkoutClickHandler = null, this.basketButtonHandler = () => {
          this.waitForElement('minibasket a[href*="/basket"]', (t) => {
            const e = this.country === "us" ? "/us/checkout" : "/checkout";
            console.log("Element appeared!", t), t.setAttribute("href", e), t.setAttribute("routerlink", e), this.checkoutClickHandler && t.removeEventListener("click", this.checkoutClickHandler), this.checkoutClickHandler = (s) => {
              s.preventDefault(), window.location.assign(e);
            }, t.addEventListener("click", this.checkoutClickHandler);
          });
        }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1024 ? "desktop" : "mobile", this.init();
      }
      init() {
        this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.basketButtonHandler(), this.updateDevice();
      }
      updateDevice() {
        window.addEventListener("resize", () => {
          const o = this.device;
          this.device = window.innerWidth > 1024 ? "desktop" : "mobile", o !== this.device && this.init();
        });
      }
      checkBasketPage() {
        function o() {
          const t = setInterval(function() {
            document.querySelectorAll("button").forEach((s) => {
              var r;
              if (s && ((r = s.textContent) != null && r.includes("Continue shopping"))) {
                console.log("Button found.");
                const u = document.referrer;
                s.addEventListener("click", (h) => {
                  u.includes("checkout") && (h.preventDefault(), history.go(-2));
                }), clearInterval(t);
              }
            });
          }, 100);
        }
        function i() {
          location.href.includes("basket") && (console.log("here is basket page"), o());
        }
        (function(t) {
          const e = t.pushState, s = t.replaceState;
          t.pushState = function(r) {
            e.apply(t, arguments), i();
          }, t.replaceState = function(r) {
            s.apply(t, arguments), i();
          }, window.addEventListener("popstate", function(r) {
            i();
          });
        })(window.history), i();
      }
      waitForElement(o, i) {
        this.observer && this.observer.disconnect(), this.observer = new MutationObserver((t, e) => {
          const s = document.querySelector(o);
          s && i(s);
        }), this.observer.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["href"]
        });
      }
    }
    new n();
  };
})();
