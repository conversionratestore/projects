(function() {
  "use strict";
  const g = (o, e, t, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: t,
      event_loc: r
    }), console.log(`Event: ${o} | ${e} | ${t} | ${r}`);
  }, y = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (o) => document.querySelector(o), L = (o) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, P = (o, e) => {
    let t = null, r = null;
    const n = {
      threshold: 0.5
      // 50% of the product must be visible
    };
    function i(d, c) {
      d.forEach((s) => {
        var a;
        if (s.isIntersecting) {
          const m = window.crypto.randomUUID();
          s.target.setAttribute("data-product-id", m);
          const v = (a = s.target.querySelector("[cy-listingproductname]")) == null ? void 0 : a.textContent;
          e.add(v), o(e.size), c.unobserve(s.target);
        }
      });
    }
    r = new IntersectionObserver(i, n);
    const u = document.querySelector("ac-product-listing");
    return u ? (u.querySelectorAll("product").forEach((d) => {
      r.observe(d);
    }), t = new MutationObserver((d) => {
      d.forEach((c) => {
        c.addedNodes.forEach((s) => {
          s instanceof HTMLElement && s.nodeName.toLowerCase() === "product" && r.observe(s);
        });
      });
    }), t.observe(u, { childList: !0, subtree: !0 }), [t, r]) : void 0;
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
  y({ name: "New PLP GRID Layout", dev: "OS" }), L("");
  const b = (o, e) => {
    let t = null;
    const r = () => {
      const n = document.querySelector(o);
      n && (e(n), t && t.disconnect());
    };
    return t && t.disconnect(), t = new MutationObserver(r), t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), r(), t;
  }, E = (o) => {
    const e = new MutationObserver((t, r) => {
      document.querySelector('[aria-label="Load more"]') && (o(), r.disconnect());
    });
    return e.observe(document, {
      childList: !0,
      subtree: !0
    }), e;
  };
  class O {
    constructor() {
      this.observers = [], this.clickNum = 1, this.productsLoaded = !1, this.productsSeen = 0, this.productsSet = /* @__PURE__ */ new Set(), this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.productClickEvent = this.handleProductClick.bind(this), this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${S}</style>`);
      let e = window.location.pathname;
      const t = () => {
        this.mainObserver && this.mainObserver.disconnect(), this.mainObserver = new MutationObserver((n) => {
          if (n.some((i) => i.addedNodes.length > 0)) {
            const i = p("ac-product-listing");
            if (this.mainObserver && this.mainObserver.disconnect(), this.mainObserver.observe(document.body, { childList: !0, subtree: !0 }), !i)
              return;
            this.changeProductsSize(), this.changeListingSize();
            const u = E(() => {
              this.productsLoaded = !0, setTimeout(() => {
                this.trackProductVisibility();
              }, 1e3);
            });
            this.observers.push(u);
          }
        }), this.mainObserver.observe(document.body, { childList: !0, subtree: !0 });
      }, r = () => {
        window.location.pathname !== e && (this.productsLoaded = !1, this.elementCountObserver && this.elementCountObserver.disconnect(), document.removeEventListener("mousedown", this.productClickEvent), clearInterval(this.timerId), this.observers.forEach((n) => {
          n.disconnect();
        }), t(), this.productsSet.clear());
      };
      t(), this.pageChangeHandler(r);
    }
    handleProductClick(e) {
      e.target.closest("product img") && g("plp_product_image_click", "Product Image ", "click", "PLP Product Image");
    }
    pageChangeHandler(e) {
      (function(t) {
        const r = t.pushState, n = t.replaceState;
        t.pushState = function(i) {
          r.apply(t, arguments), e();
        }, t.replaceState = function(i) {
          n.apply(t, arguments), e();
        }, window.addEventListener("popstate", function(i) {
          e();
        });
      })(window.history);
    }
    trackProductVisibility() {
      this.productsLoaded && (this.elementCountObserver && this.elementCountObserver.disconnect(), this.elementCountObserver = b("ac-product-listing", (e) => {
        document.addEventListener("mousedown", this.productClickEvent);
        const t = b('[aria-label="Load more"]', (r) => {
          const n = P((h) => {
            this.productsSeen !== h && (this.productsSeen = h, g("plp_view_items_count", `Product Seen: ${h}`, "view", "PLP"));
          }, this.productsSet), i = n == null ? void 0 : n[0], u = n == null ? void 0 : n[1];
          this.observers.push(i), this.observers.push(u);
        });
        this.observers.push(t);
      }), this.observers.push(this.elementCountObserver));
    }
    updateProductAmountNum() {
      const e = p("ac-product-listing");
      if (!e)
        return 0;
      const t = e.querySelector("ac-product-listing-tools span").textContent;
      return parseInt(t.trim());
    }
    changeProductsSize() {
      const e = p("ac-product-listing");
      if (!e)
        return;
      const t = this.updateProductAmountNum(), r = e.querySelectorAll("product"), n = Array.from(r), i = new URLSearchParams(window.location.search), h = parseInt(i.get("pg") || "1", 10) * 24;
      n.forEach((a, m) => {
        a.style.display = "";
      }), n.forEach((a, m) => {
        m >= h && (a.style.display = "none");
      });
      const d = n.filter((a) => a.style.display !== "none").length, c = document.querySelector('[aria-label="Load more"]'), s = c == null ? void 0 : c.previousElementSibling;
      s && (s.textContent = `You’ve viewed ${d} of ${t} products`), c && ((t > n.length || d < t) && (c.disabled = !1), c.addEventListener("click", async () => {
        await new Promise((l) => {
          new MutationObserver((q, x) => {
            q.some(($) => $.addedNodes.length > 0) && (x.disconnect(), l(!0));
          }).observe(p("ac-product-listing"), { childList: !0, subtree: !0 });
        });
        const a = p("ac-product-listing"), m = a.querySelectorAll("product"), v = Array.from(m), C = a.querySelectorAll('product[style*="display: none"]'), A = Array.from(C), k = new URLSearchParams(window.location.search), I = parseInt(k.get("pg") || "1", 10);
        A.slice(0, 24).forEach((l) => {
          l.style.display = "";
        }), v.forEach((l, w) => {
          w >= I * 24 && (l.style.display = "none");
        });
        const f = v.filter((l) => l.style.display !== "none").length;
        s && (s.textContent = `You’ve viewed ${f >= t ? t : f} of ${t} products`), f !== t ? c.disabled = !1 : c.disabled = !0;
      }));
    }
    changeListingSize() {
      const e = p("ac-listing-size"), t = e == null ? void 0 : e.querySelector("button:first-of-type"), r = e == null ? void 0 : e.querySelector("button:last-of-type");
      !t || !r || t.click();
    }
  }
  new O();
})();
