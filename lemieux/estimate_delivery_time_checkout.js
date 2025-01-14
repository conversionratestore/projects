(function() {
  "use strict";
  const h = (e, t, i, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: i,
      event_loc: n
    }), console.log(`Event: ${e} | ${t} | ${i} | ${n}`);
  }, g = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function v(e) {
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
  g({
    name: "Estimate Delivery time at checkout",
    dev: "OS"
  }), function(e, t, i, n, r, s) {
    e.hj = e.hj || function() {
      (e.hj.q = e.hj.q || []).push(arguments);
    }, e._hjSettings = { hjid: 2667925, hjsv: 6 }, r = t.getElementsByTagName("head")[0], s = t.createElement("script"), s.async = !0, s.src = i + e._hjSettings.hjid + n + e._hjSettings.hjsv, r && r.appendChild(s);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "plp_grid");
  const d = {
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
  class p {
    constructor() {
      this.lastPath = window.location.pathname, this.pageObserver = null, this.shippingObserver = null, this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.init();
    }
    async init() {
      this.checkout(), this.observePageChange(), h("exp_checkout", "init", "success", "Init event");
    }
    async checkout() {
      if (!location.pathname.includes("/checkout"))
        return;
      const t = await v('[name="shippingMethod"'), i = async () => {
        var l;
        const r = t.querySelectorAll("radio"), s = document.querySelector('select[name="country"]'), a = s.options[s.selectedIndex].value;
        console.log("country:", a), r.length >= 1 && r.forEach((y, w) => {
          const u = y.querySelector(".radio__body > div p");
          let o;
          if (location.pathname === "/us/checkout" ? (console.log("US"), o = y.querySelector(".radio__body > p:last-of-type:not(:has(i))")) : o = y.querySelector(".radio__body > p:not(.s2)"), u && o) {
            let c = d[u == null ? void 0 : u.textContent];
            d[a] && (c = d[a]), Array.isArray(c) ? (o.innerText = c[w] || c[0], o.classList.add("ch")) : c && (o.innerText = c, o.classList.add("ch"));
          }
        }), (l = this.shippingObserver) == null || l.disconnect();
      };
      i(), this.shippingObserver = new MutationObserver((r) => {
        r.forEach((s) => {
          var a;
          (a = this.shippingObserver) == null || a.disconnect(), setTimeout(() => {
            var l;
            i(), (l = this.shippingObserver) == null || l.observe(t, n);
          }, 1e3);
        });
      });
      const n = { childList: !0, subtree: !0 };
      this.shippingObserver.observe(t, n);
    }
    observePageChange() {
      this.pageObserver = new MutationObserver((i) => {
        i.forEach((n) => {
          window.location.pathname !== this.lastPath && (this.device === "mobile" ? setTimeout(() => {
            this.checkout();
          }, 2800) : this.checkout(), this.lastPath = window.location.pathname);
        });
      });
      const t = { childList: !0, subtree: !0 };
      this.pageObserver.observe(document.body, t);
    }
  }
  new p();
})();
