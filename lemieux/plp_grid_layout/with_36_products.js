(function() {
  "use strict";
  const g = (r, t, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: t,
      event_type: e,
      event_loc: o
    }), console.log(`Event: ${r} | ${t} | ${e} | ${o}`);
  }, w = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, l = (r) => document.querySelector(r), L = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, P = (r) => {
    let t = null, e = null, o = 0;
    const n = {
      threshold: 0.5
      // 50% of the product must be visible
    };
    function i(a, s) {
      a.forEach((c) => {
        c.isIntersecting && (o++, r(o), s.unobserve(c.target));
      });
    }
    e = new IntersectionObserver(i, n);
    const p = document.querySelector("ac-product-listing");
    return p ? (p.querySelectorAll("product").forEach((a) => {
      e.observe(a);
    }), t = new MutationObserver((a) => {
      a.forEach((s) => {
        s.addedNodes.forEach((c) => {
          c instanceof HTMLElement && c.nodeName.toLowerCase() === "product" && e.observe(c);
        });
      });
    }), t.observe(p, { childList: !0, subtree: !0 }), [t, e]) : void 0;
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
  w({ name: "New PLP GRID Layout", dev: "OS" }), L("");
  const f = (r, t) => {
    let e = null;
    const o = () => {
      const n = document.querySelector(r);
      n && (t(n), e && e.disconnect());
    };
    return e && e.disconnect(), e = new MutationObserver(o), e.observe(document.body, {
      childList: !0,
      subtree: !0
    }), o(), e;
  };
  class E {
    constructor() {
      this.observers = [], this.clickNum = 1, this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${S}</style>`);
      const t = () => {
        this.mainObserver && this.mainObserver.disconnect(), this.elementCountObserver && this.elementCountObserver.disconnect(), this.mainObserver = new MutationObserver(() => {
          l("ac-product-listing") && (this.productClickEvent = (o) => {
            o.target.closest("product img") && g("plp_product_image_click", "Product Image ", "click", "PLP Product Image");
          }, setTimeout(() => {
            this.changeListingSize();
          }));
        }), this.mainObserver.observe(document.body, { childList: !0, subtree: !0 }), this.observers.forEach((e) => e.disconnect()), this.increaseProductSize();
      };
      this.pageChangeHandler(t), t();
    }
    pageChangeHandler(t) {
      (function(e) {
        const o = e.pushState, n = e.replaceState;
        e.pushState = function(i) {
          o.apply(e, arguments), t();
        }, e.replaceState = function(i) {
          n.apply(e, arguments), t();
        }, window.addEventListener("popstate", function(i) {
          t();
        });
      })(window.history);
    }
    increaseProductSize() {
      console.log("increaseProductSize"), this.elementCountObserver && this.elementCountObserver.disconnect(), this.elementCountObserver = f("ac-product-listing", (t) => {
        document.addEventListener("mousedown", this.productClickEvent);
        const e = f('[aria-label="Load more"]', (o) => {
          const n = P((m) => {
            g("plp_view_items_count", `Product Seen: ${m}`, "view", "PLP");
          }), i = n == null ? void 0 : n[0], p = n == null ? void 0 : n[1];
          this.observers.push(i), this.observers.push(p);
        });
        this.observers.push(e);
      }), this.observers.push(this.elementCountObserver);
    }
    updateProductAmountNum() {
      const t = l("ac-product-listing");
      if (!t)
        return 0;
      const e = t.querySelector("ac-product-listing-tools span").textContent;
      return parseInt(e.trim());
    }
    changeProductsSize() {
      const t = l("ac-product-listing");
      if (!t)
        return;
      const e = this.updateProductAmountNum(), o = t.querySelectorAll("product"), n = Array.from(o), i = new URLSearchParams(window.location.search), m = parseInt(i.get("pg") || "1", 10) * 24;
      n.forEach((u, h) => {
        u.style.display = "";
      }), n.forEach((u, h) => {
        h >= m && (u.style.display = "none");
      });
      const a = n.filter((u) => u.style.display !== "none").length, s = document.querySelector('[aria-label="Load more"]'), c = s == null ? void 0 : s.previousElementSibling;
      c && (c.textContent = `You’ve viewed ${a} of ${e} products`), s && ((e > n.length || a < e) && (s.disabled = !1), s.addEventListener("click", async () => {
        await new Promise((d) => {
          new MutationObserver(($, k) => {
            $.some((q) => q.addedNodes.length > 0) && (k.disconnect(), d(!0));
          }).observe(l("ac-product-listing"), { childList: !0, subtree: !0 });
        });
        const u = l("ac-product-listing"), h = u.querySelectorAll("product"), b = Array.from(h), O = u.querySelectorAll('product[style*="display: none"]'), A = Array.from(O), C = new URLSearchParams(window.location.search), I = parseInt(C.get("pg") || "1", 10);
        A.slice(0, 24).forEach((d) => {
          d.style.display = "";
        }), b.forEach((d, y) => {
          y >= I * 24 && (d.style.display = "none");
        });
        const v = b.filter((d) => d.style.display !== "none").length;
        c && (c.textContent = `You’ve viewed ${v >= e ? e : v} of ${e} products`), v !== e ? s.disabled = !1 : s.disabled = !0;
      }));
    }
    changeListingSize() {
      const t = l("ac-listing-size"), e = t == null ? void 0 : t.querySelector("button:first-of-type"), o = t == null ? void 0 : t.querySelector("button:last-of-type");
      !e || !o || e.click();
    }
  }
  new E();
})();
//# sourceMappingURL=index.js.map
