(function() {
  "use strict";
  const l = ({ name: t, dev: a }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${a})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(t, a, o, n, e, i) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, e = a.getElementsByTagName("head")[0], i = a.createElement("script"), i.async = !0, i.src = o + t._hjSettings.hjid + n + t._hjSettings.hjsv, e && e.appendChild(i);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), window.onload = () => {
    l({ name: "Eliminate cart page step on Desktop", dev: "OS" });
    class t {
      constructor() {
        var o, n;
        this.observer = null, this.countryCode = (n = (o = window == null ? void 0 : window.autoInitData) == null ? void 0 : o.website) == null ? void 0 : n.websiteCode, this.checkoutClickHandler = null, this.basketButtonHandler = () => {
          this.waitForElement('minibasket a[href*="/basket"]', (e) => {
            var c;
            const i = this.country === "us" ? "/us/checkout" : "/checkout";
            console.log("Element appeared!");
            const s = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${i}"
          ><span class="p1 col-w">Checkout securely</span></a
        >`
            );
            e.outerHTML = s, (c = document.querySelector('minibasket a[href*="/checkout"]')) == null || c.addEventListener("click", (u) => {
              const r = document.querySelector('minibasket [aria-label="Close"]');
              r && r.click();
            });
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
          const e = setInterval(function() {
            document.querySelectorAll("button").forEach((s) => {
              var c;
              if (s && ((c = s.textContent) != null && c.includes("Continue shopping"))) {
                console.log("Button found.");
                const u = document.referrer;
                s.addEventListener("click", (r) => {
                  u.includes("checkout") && (r.preventDefault(), history.go(-2));
                }), clearInterval(e);
              }
            });
          }, 100);
        }
        function n() {
          location.href.includes("basket") && (console.log("here is basket page"), o());
        }
        (function(e) {
          const i = e.pushState, s = e.replaceState;
          e.pushState = function(c) {
            i.apply(e, arguments), n();
          }, e.replaceState = function(c) {
            s.apply(e, arguments), n();
          }, window.addEventListener("popstate", function(c) {
            n();
          });
        })(window.history), n();
      }
      waitForElement(o, n) {
        this.observer && this.observer.disconnect(), this.observer = new MutationObserver((e, i) => {
          const s = document.querySelector(o);
          s && n(s);
        }), this.observer.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["href"]
        });
      }
    }
    new t();
  };
})();
