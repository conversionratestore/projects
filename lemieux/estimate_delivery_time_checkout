(function() {
  "use strict";
  const d = ({ name: t, dev: e }) => {
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
  d({
    name: "Estimate Delivery time at checkout",
    dev: "OS"
  });
  const a = {
    "Worldwide Express Delivery": "Delivery is currently taking 3 - 5 working days (os)",
    "EU Delivery": "Delivery is currently taking 2 - 4 working days",
    GB: ["Delivery is currently taking 2 - 4 working days (os)", "Delivery is currently taking 1 - 2 working days (os)"],
    US: "Delivery in 2 - 3 working days. (os)",
    NZ: "Delivery is currently taking 3 - 5 working days (os)",
    AU: "Delivery is currently taking 3 - 5 working days (os)",
    CA: "Delivery is currently taking 2 - 5 working days with DHL. (os)",
    FR: "Delivery is currently taking 2 - 4 working days",
    TR: "Delivery is currently taking 4 - 6 working days os"
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
        var s;
        console.log("updateEstimateDate");
        const o = e.querySelectorAll("radio"), u = document.querySelector('select[name="country"]'), r = u.options[u.selectedIndex].value;
        console.log("country", r), o.length >= 1 && o.forEach((y, p) => {
          const c = y.querySelector(".radio__body > div p"), h = y.querySelector(".radio__body > p i");
          if (c && h) {
            let n = a[c == null ? void 0 : c.textContent];
            a[r] && (n = a[r]), console.log("message", n), Array.isArray(n) ? h.innerText = n[p] || n[0] : n && (h.innerText = n);
          }
        }), (s = this.shippingObserver) == null || s.disconnect();
      };
      i(), this.shippingObserver = new MutationObserver((o) => {
        o.forEach((u) => {
          var r;
          (r = this.shippingObserver) == null || r.disconnect(), setTimeout(() => {
            var s;
            i(), (s = this.shippingObserver) == null || s.observe(e, l);
          }, 1e3);
        });
      });
      const l = { childList: !0, subtree: !0 };
      this.shippingObserver.observe(e, l);
    }
    observePageChange() {
      this.pageObserver = new MutationObserver((i) => {
        i.forEach((l) => {
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
