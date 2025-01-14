(function() {
  "use strict";
  const d = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function g(e) {
    return new Promise((t) => {
      if (document.querySelector(e))
        return t(document.querySelector(e));
      const i = new MutationObserver(() => {
        document.querySelector(e) && (t(document.querySelector(e)), i.disconnect());
      });
      i.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  d({
    name: "Estimate Delivery time at checkout",
    dev: "OS"
  }), function(e, t, i, a, n, r) {
    e.hj = e.hj || function() {
      (e.hj.q = e.hj.q || []).push(arguments);
    }, e._hjSettings = { hjid: 2667925, hjsv: 6 }, n = t.getElementsByTagName("head")[0], r = t.createElement("script"), r.async = !0, r.src = i + e._hjSettings.hjid + a + e._hjSettings.hjsv, n && n.appendChild(r);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "plp_grid");
  const y = {
    "Worldwide Express Delivery": "Delivery is currently taking 3 - 5 working days",
    "Worldwide Express Shipping": "Delivery is currently taking 3 - 6 working days",
    "EU Delivery": "Delivery is currently taking 2 - 4 working days",
    "EU Shipping": "Delivery is currently taking 4 - 6 working days",
    GB: ["Delivery is currently taking 2 - 4 working days", "Delivery is currently taking 1 - 2 working days"],
    US: "Delivery in 2 - 3 working days",
    NZ: "Delivery is currently taking 3 - 5 working days",
    AU: "Delivery is currently taking 3 - 5 working days",
    CA: "Delivery is currently taking 2 - 5 working days with DHL.",
    FR: "Delivery is currently taking 2 - 4 working days",
    TR: "Delivery is currently taking 4 - 6 working days",
    TH: "Delivery is currently taking 3 - 6 working days",
    RS: "Delivery is currently taking 4 - 6 working days",
    MX: "Delivery is currently taking 3 - 6 working days",
    IE: "Delivery is currently taking 2 - 4 working days"
  };
  class v {
    constructor() {
      this.lastPath = window.location.pathname, this.pageObserver = null, this.shippingObserver = null, this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.init();
    }
    async init() {
      this.checkout(), this.observePageChange();
    }
    async checkout() {
      const t = await g('[name="shippingMethod"'), i = async () => {
        var l;
        const n = t.querySelectorAll("radio"), r = document.querySelector('select[name="country"]'), o = r.options[r.selectedIndex].value;
        console.log("country:", o), n.length >= 1 && n.forEach((h, p) => {
          const u = h.querySelector(".radio__body > div p");
          let s;
          if (location.pathname === "/us/checkout" ? (console.log("US"), s = h.querySelector(".radio__body > p:last-of-type:not(:has(i))")) : s = h.querySelector(".radio__body > p:not(.s2)"), u && s) {
            let c = y[u == null ? void 0 : u.textContent];
            y[o] && (c = y[o]), Array.isArray(c) ? (s.innerText = c[p] || c[0], s.classList.add("ch")) : c && (s.innerText = c, s.classList.add("ch"));
          }
        }), (l = this.shippingObserver) == null || l.disconnect();
      };
      i(), this.shippingObserver = new MutationObserver((n) => {
        n.forEach((r) => {
          var o;
          (o = this.shippingObserver) == null || o.disconnect(), setTimeout(() => {
            var l;
            i(), (l = this.shippingObserver) == null || l.observe(t, a);
          }, 1e3);
        });
      });
      const a = { childList: !0, subtree: !0 };
      this.shippingObserver.observe(t, a);
    }
    observePageChange() {
      this.pageObserver = new MutationObserver((i) => {
        i.forEach((a) => {
          window.location.pathname !== this.lastPath && (this.device === "mobile" ? setTimeout(() => {
            this.checkout();
          }, 2800) : this.checkout(), this.lastPath = window.location.pathname);
        });
      });
      const t = { childList: !0, subtree: !0 };
      this.pageObserver.observe(document.body, t);
    }
  }
  new v();
})();
