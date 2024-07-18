(function() {
  "use strict";
  const d = ({ name: t, dev: a }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${a})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  (function(t, a, o, n, e, s) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, e = a.getElementsByTagName("head")[0], s = a.createElement("script"), s.async = !0, s.src = o + t._hjSettings.hjid + n + t._hjSettings.hjsv, e && e.appendChild(s);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "eliminate_cart_page"), window.onload = () => {
    d({ name: "Eliminate cart page step on Desktop", dev: "OS" });
    class t {
      constructor() {
        var o, n;
        this.observer = null, this.countryCode = (n = (o = window == null ? void 0 : window.autoInitData) == null ? void 0 : o.website) == null ? void 0 : n.websiteCode, this.addToCartClickHandler = null, this.basketButtonHandler = () => {
          this.waitForElement('minibasket a[href*="/basket"]', (e) => {
            var c;
            const s = this.country === "us" ? "/us/checkout" : "/checkout";
            console.log("Element appeared!");
            const i = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${s}"
          ><span class="p1 col-w">Checkout securely</span></a
        >`
            );
            e.outerHTML = i, (c = document.querySelector('minibasket a[href*="/checkout"]')) == null || c.addEventListener("click", (u) => {
              const r = document.querySelector('minibasket [aria-label="Close"]');
              localStorage.setItem("lastPdpHref", location.href), r && r.click();
            });
          });
        }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1024 ? "desktop" : "mobile", this.init();
      }
      init() {
        this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.basketButtonHandler(), this.updateDevice(), this.checkBasketPage();
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
              var c;
              if (i && ((c = i.textContent) != null && c.includes("Continue shopping"))) {
                console.log("Button found.");
                const u = document.referrer;
                i.addEventListener("click", (r) => {
                  if (u.includes("checkout")) {
                    r.preventDefault();
                    const l = localStorage.getItem("lastPdpHref");
                    l && (location.href = l);
                  }
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
          e.pushState = function(c) {
            s.apply(e, arguments), n();
          }, e.replaceState = function(c) {
            i.apply(e, arguments), n();
          }, window.addEventListener("popstate", function(c) {
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
