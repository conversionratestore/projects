(function() {
  "use strict";
  const g = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function h(i) {
    return new Promise((e) => {
      if (document.querySelector(i))
        return e(document.querySelector(i));
      const t = new MutationObserver(() => {
        document.querySelector(i) && (e(document.querySelector(i)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  g({
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
      const e = await h('[name="shippingMethod"'), t = async () => {
        var s;
        const c = e.querySelectorAll("radio"), u = document.querySelector('select[name="country"]'), r = u.options[u.selectedIndex].value;
        console.log("country:", r), c.length >= 1 && c.forEach((d, k) => {
          const a = d.querySelector(".radio__body > div p"), o = d.querySelector(".radio__body > p i");
          if (a && o) {
            let n = l[a == null ? void 0 : a.textContent];
            l[r] && (n = l[r]), Array.isArray(n) ? (o.innerText = n[k] || n[0], o.classList.add("ch")) : n && (o.innerText = n, o.classList.add("ch"));
          }
        }), (s = this.shippingObserver) == null || s.disconnect();
      };
      t(), this.shippingObserver = new MutationObserver((c) => {
        c.forEach((u) => {
          var r;
          (r = this.shippingObserver) == null || r.disconnect(), setTimeout(() => {
            var s;
            t(), (s = this.shippingObserver) == null || s.observe(e, y);
          }, 1e3);
        });
      });
      const y = { childList: !0, subtree: !0 };
      this.shippingObserver.observe(e, y);
    }
    observePageChange() {
      this.pageObserver = new MutationObserver((t) => {
        t.forEach((y) => {
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
