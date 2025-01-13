(function() {
  "use strict";
  const h = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function g(t) {
    return new Promise((e) => {
      if (document.querySelector(t))
        return e(document.querySelector(t));
      const i = new MutationObserver(() => {
        document.querySelector(t) && (e(document.querySelector(t)), i.disconnect());
      });
      i.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  h({
    name: "Estimate Delivery time at checkout",
    dev: "OS"
  });
  const l = {
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
      const e = await g('[name="shippingMethod"'), i = async () => {
        var o;
        const c = e.querySelectorAll("radio"), u = document.querySelector('select[name="country"]'), n = u.options[u.selectedIndex].value;
        console.log("country:", n), c.length >= 1 && c.forEach((d, k) => {
          const a = d.querySelector(".radio__body > div p");
          let r;
          if (location.pathname === "/us/checkout" ? (console.log("US"), r = d.querySelector(".radio__body > p:last-of-type:not(.s2)")) : r = d.querySelector(".radio__body > p:not(.s2)"), a && r) {
            let s = l[a == null ? void 0 : a.textContent];
            l[n] && (s = l[n]), Array.isArray(s) ? (r.innerText = s[k] || s[0], r.classList.add("ch")) : s && (r.innerText = s, r.classList.add("ch"));
          }
        }), (o = this.shippingObserver) == null || o.disconnect();
      };
      i(), this.shippingObserver = new MutationObserver((c) => {
        c.forEach((u) => {
          var n;
          (n = this.shippingObserver) == null || n.disconnect(), setTimeout(() => {
            var o;
            i(), (o = this.shippingObserver) == null || o.observe(e, y);
          }, 1e3);
        });
      });
      const y = { childList: !0, subtree: !0 };
      this.shippingObserver.observe(e, y);
    }
    observePageChange() {
      this.pageObserver = new MutationObserver((i) => {
        i.forEach((y) => {
          window.location.pathname !== this.lastPath && (this.device === "mobile" ? setTimeout(() => {
            this.checkout();
          }, 2800) : this.checkout(), this.lastPath = window.location.pathname);
        });
      });
      const e = { childList: !0, subtree: !0 };
      this.pageObserver.observe(document.body, e);
    }
  }
  new v();
})();
