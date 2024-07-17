(function() {
  "use strict";
  const r = ({ name: t, dev: c }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${c})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(t, c, o, n, e, s) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, e = c.getElementsByTagName("head")[0], s = c.createElement("script"), s.async = !0, s.src = o + t._hjSettings.hjid + n + t._hjSettings.hjsv, e && e.appendChild(s);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), window.onload = () => {
    r({ name: "Eliminate cart page step on Desktop", dev: "OS" });
    class t {
      constructor() {
        var o, n;
        this.observer = null, this.countryCode = (n = (o = window == null ? void 0 : window.autoInitData) == null ? void 0 : o.website) == null ? void 0 : n.websiteCode, this.checkoutClickHandler = null, this.basketButtonHandler = () => {
          this.waitForElement('minibasket a[href*="/basket"]', (e) => {
            const s = this.country === "us" ? "/us/checkout" : "/checkout";
            console.log("Element appeared!");
            const i = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${s}"
          ><span class="p1 col-w">Checkout securely</span></a
        >`
            );
            e.outerHTML = i;
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
            document.querySelectorAll("button").forEach((i) => {
              var a;
              if (i && ((a = i.textContent) != null && a.includes("Continue shopping"))) {
                console.log("Button found.");
                const u = document.referrer;
                i.addEventListener("click", (l) => {
                  u.includes("checkout") && (l.preventDefault(), history.go(-2));
                }), clearInterval(e);
              }
            });
          }, 100);
        }
        function n() {
          location.href.includes("basket") && (console.log("here is basket page"), o());
        }
        (function(e) {
          const s = e.pushState, i = e.replaceState;
          e.pushState = function(a) {
            s.apply(e, arguments), n();
          }, e.replaceState = function(a) {
            i.apply(e, arguments), n();
          }, window.addEventListener("popstate", function(a) {
            n();
          });
        })(window.history), n();
      }
      waitForElement(o, n) {
        this.observer && this.observer.disconnect(), this.observer = new MutationObserver((e, s) => {
          const i = document.querySelector(o);
          i && n(i);
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
