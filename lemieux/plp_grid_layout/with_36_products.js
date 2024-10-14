(function() {
  "use strict";
  const f = (s, e, t, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: e,
      event_type: t,
      event_loc: o
    }), console.log(`Event: ${s} | ${e} | ${t} | ${o}`);
  }, y = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (s) => document.querySelector(s), L = (s, e) => {
    let t = null, o = null;
    const n = {
      threshold: 0.5
      // 50% of the product must be visible
    };
    function r(d, c) {
      d.forEach((i) => {
        var a;
        if (i.isIntersecting) {
          const m = window.crypto.randomUUID();
          i.target.setAttribute("data-product-id", m);
          const g = (a = i.target.querySelector("[cy-listingproductname]")) == null ? void 0 : a.textContent;
          e.add(g), s(e.size), c.unobserve(i.target);
        }
      });
    }
    o = new IntersectionObserver(r, n);
    const u = document.querySelector("ac-product-listing");
    return u ? (u.querySelectorAll("product").forEach((d) => {
      o.observe(d);
    }), t = new MutationObserver((d) => {
      d.forEach((c) => {
        c.addedNodes.forEach((i) => {
          i instanceof HTMLElement && i.nodeName.toLowerCase() === "product" && o.observe(i);
        });
      });
    }), t.observe(u, { childList: !0, subtree: !0 }), [t, o]) : void 0;
  }, S = `/* div:has(> product) {
  --os-grid-columns: 4;
  grid-template-columns: [column-start] repeat(var(--os-grid-columns, 12), 1fr) [column-end] !important;

}

@media (max-width: 768px) {
  div:has(> product) {
    --os-grid-columns: 2;
    grid-template-columns: [column-start] repeat(var(--os-grid-columns, 12), 1fr) [column-end] !important;
  }
}

product-listing listing-size {
  display: none;
} */`;
  y({ name: "New PLP GRID Layout", dev: "OS" }), function(s, e, t, o, n, r) {
    s.hj = s.hj || function() {
      (s.hj.q = s.hj.q || []).push(arguments);
    }, s._hjSettings = { hjid: 2667925, hjsv: 6 }, n = e.getElementsByTagName("head")[0], r = e.createElement("script"), r.async = !0, r.src = t + s._hjSettings.hjid + o + s._hjSettings.hjsv, n && n.appendChild(r);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "plp_grid");
  const b = (s, e) => {
    let t = null;
    const o = () => {
      const n = document.querySelector(s);
      n && (e(n), t && t.disconnect());
    };
    return t && t.disconnect(), t = new MutationObserver(o), t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), o(), t;
  }, P = (s) => {
    const e = new MutationObserver((t, o) => {
      document.querySelector('[aria-label="Load more"]') && (s(), o.disconnect());
    });
    return e.observe(document, {
      childList: !0,
      subtree: !0
    }), e;
  };
  class E {
    constructor() {
      this.observers = [], this.clickNum = 1, this.productsLoaded = !1, this.productsSeen = 0, this.productsSet = /* @__PURE__ */ new Set(), this.device = window.innerWidth < 1101 ? "mobile" : "desktop", this.productClickEvent = this.handleProductClick.bind(this), this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${S}</style>`);
      let e = window.location.pathname;
      const t = () => {
        this.mainObserver && this.mainObserver.disconnect(), this.mainObserver = new MutationObserver((n) => {
          if (n.some((r) => r.addedNodes.length > 0)) {
            const r = p("ac-product-listing");
            if (this.mainObserver && this.mainObserver.disconnect(), this.mainObserver.observe(document.body, { childList: !0, subtree: !0 }), !r)
              return;
            this.changeListingSize();
            const u = P(() => {
              setTimeout(() => {
                this.trackProductVisibility();
              }, 1e3);
            });
            this.observers.push(u);
          }
        }), this.mainObserver.observe(document.body, { childList: !0, subtree: !0 });
      }, o = () => {
        window.location.pathname !== e && (this.elementCountObserver && this.elementCountObserver.disconnect(), document.removeEventListener("mousedown", this.productClickEvent), clearInterval(this.timerId), this.observers.forEach((n) => {
          n.disconnect();
        }), this.changeListingSize(), t(), this.productsSet.clear(), e = window.location.pathname);
      };
      t(), this.pageChangeHandler(o);
    }
    handleProductClick(e) {
      e.target.closest("product img") && f("plp_product_image_click", "Product Image ", "click", "PLP Product Image");
    }
    pageChangeHandler(e) {
      (function(t) {
        const o = t.pushState, n = t.replaceState;
        t.pushState = function(r) {
          o.apply(t, arguments), e();
        }, t.replaceState = function(r) {
          n.apply(t, arguments), e();
        }, window.addEventListener("popstate", function(r) {
          e();
        });
      })(window.history);
    }
    trackProductVisibility() {
      this.elementCountObserver && this.elementCountObserver.disconnect(), this.elementCountObserver = b("ac-product-listing", (e) => {
        document.addEventListener("mousedown", this.productClickEvent);
        const t = b('[aria-label="Load more"]', (o) => {
          const n = L((h) => {
            this.productsSeen !== h && (this.productsSeen = h, f("plp_view_items_count", `Product Seen: ${h}`, "view", "PLP"));
          }, this.productsSet), r = n == null ? void 0 : n[0], u = n == null ? void 0 : n[1];
          this.observers.push(r), this.observers.push(u);
        });
        this.observers.push(t);
      }), this.observers.push(this.elementCountObserver);
    }
    updateProductAmountNum() {
      const e = p("ac-product-listing");
      if (!e)
        return 0;
      try {
        const t = this.device === "desktop" ? e.querySelector("ac-product-listing-tools span").textContent : e.querySelector("ac-product-listing-tools .p1").textContent;
        return parseInt(t);
      } catch {
        return 0;
      }
    }
    changeProductsSize() {
      const e = p("ac-product-listing");
      if (!e)
        return;
      const t = this.updateProductAmountNum();
      if (t === 0)
        return;
      const o = e.querySelectorAll("product"), n = Array.from(o), r = new URLSearchParams(window.location.search), h = parseInt(r.get("pg") || "1", 10) * 24;
      n.forEach((a, m) => {
        a.style.display = "";
      }), n.forEach((a, m) => {
        m >= h && (a.style.display = "none");
      });
      const d = n.filter((a) => a.style.display !== "none").length, c = document.querySelector('[aria-label="Load more"]'), i = c == null ? void 0 : c.previousElementSibling;
      i && (i.textContent = `You’ve viewed ${d} of ${t} products`), c && ((t > n.length || d < t) && (c.disabled = !1), c.addEventListener("click", async () => {
        await new Promise((l) => {
          new MutationObserver((q, x) => {
            q.some((_) => _.addedNodes.length > 0) && (x.disconnect(), l(!0));
          }).observe(p("ac-product-listing"), { childList: !0, subtree: !0 });
        });
        const a = p("ac-product-listing"), m = a.querySelectorAll("product"), g = Array.from(m), O = a.querySelectorAll('product[style*="display: none"]'), C = Array.from(O), A = new URLSearchParams(window.location.search), k = parseInt(A.get("pg") || "1", 10);
        C.slice(0, 24).forEach((l) => {
          l.style.display = "";
        }), g.forEach((l, w) => {
          w >= k * 24 && (l.style.display = "none");
        });
        const v = g.filter((l) => l.style.display !== "none").length;
        i && (i.textContent = `You’ve viewed ${v >= t ? t : v} of ${t} products`), v !== t ? c.disabled = !1 : c.disabled = !0;
      }));
    }
    changeListingSize() {
      const e = p("ac-listing-size"), t = e == null ? void 0 : e.querySelector("button:first-of-type"), o = e == null ? void 0 : e.querySelector("button:last-of-type");
      !t || !o || t.click();
    }
  }
  new E();
})();
