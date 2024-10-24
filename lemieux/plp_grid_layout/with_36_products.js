(function() {
  "use strict";
  const E = (o, n, t, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: n,
      event_type: t,
      event_loc: e
    }), console.log(`Event: ${o} | ${n} | ${t} | ${e}`);
  }, C = ({ name: o, dev: n }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, l = (o) => document.querySelector(o), A = (o, n) => {
    let t = null, e = null;
    const s = {
      threshold: 0.5
      // 50% of the product must be visible
    };
    function r(h, v) {
      h.forEach((i) => {
        var c;
        if (i.isIntersecting) {
          const f = window.crypto.randomUUID();
          i.target.setAttribute("data-product-id", f);
          const w = (c = i.target.querySelector("[cy-listingproductname]")) == null ? void 0 : c.textContent;
          n.add(w), o(n.size), v.unobserve(i.target);
        }
      });
    }
    e = new IntersectionObserver(r, s);
    const d = document.querySelector("ac-product-listing");
    return d ? (d.querySelectorAll("product").forEach((h) => {
      e.observe(h);
    }), t = new MutationObserver((h) => {
      h.forEach((v) => {
        v.addedNodes.forEach((i) => {
          i instanceof HTMLElement && i.nodeName.toLowerCase() === "product" && e.observe(i);
        });
      });
    }), t.observe(d, { childList: !0, subtree: !0 }), [t, e]) : void 0;
  }, k = `/* div:has(> product) {
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
} */

.crs-viewed {
  color: var(--atomic-color-1, #212121);
  font-family: source-sans-3, sans-serif;
  font-size: 1.125rem;
  letter-spacing: 0.0625rem;
  line-height: 1.75rem;
}`;
  C({ name: "New PLP GRID Layout", dev: "OS" }), function(o, n, t, e, s, r) {
    o.hj = o.hj || function() {
      (o.hj.q = o.hj.q || []).push(arguments);
    }, o._hjSettings = { hjid: 2667925, hjsv: 6 }, s = n.getElementsByTagName("head")[0], r = n.createElement("script"), r.async = !0, r.src = t + o._hjSettings.hjid + e + o._hjSettings.hjsv, s && s.appendChild(r);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "plp_grid");
  const y = (o, n) => {
    let t = null;
    const e = () => {
      const s = document.querySelector(o);
      s && (n(s), t && t.disconnect());
    };
    return t && t.disconnect(), t = new MutationObserver(e), t.observe(document.body, {
      childList: !0,
      subtree: !0
    }), e(), t;
  };
  class x {
    constructor() {
      this.observers = [], this.timers = [], this.clickNum = 1, this.productsLoaded = !1, this.productsSeen = 0, this.productsSet = /* @__PURE__ */ new Set(), this.previousProductAmount = 0, this.device = window.innerWidth < 1101 ? "mobile" : "desktop", this.productClickEvent = this.handleProductClick.bind(this), this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${k}</style>`);
      let n = window.location.pathname;
      const t = () => {
        l("ac-product-listing") && (this.changeListingSize(), setTimeout(() => {
          this.trackProductVisibility();
        }, 1e3));
      }, e = () => {
        this.elementCountObserver && this.elementCountObserver.disconnect(), document.removeEventListener("mousedown", this.productClickEvent), clearInterval(this.timerId), this.timers.forEach((s) => {
          clearTimeout(s);
        }), this.observers.forEach((s) => {
          s.disconnect();
        }), t(), window.location.pathname !== n && this.productsSet.clear(), n = window.location.pathname;
      };
      t(), this.pageChangeHandler(e);
    }
    handleProductClick(n) {
      n.target.closest("product img") && E("plp_product_image_click", "Product Image ", "click", "PLP Product Image");
    }
    pageChangeHandler(n) {
      (function(t) {
        const e = t.pushState, s = t.replaceState;
        t.pushState = function(r) {
          e.apply(t, arguments), n();
        }, t.replaceState = function(r) {
          s.apply(t, arguments), n();
        }, window.addEventListener("popstate", function(r) {
          n();
        });
      })(window.history);
    }
    trackProductVisibility() {
      this.elementCountObserver && this.elementCountObserver.disconnect(), this.elementCountObserver = y("ac-product-listing", (n) => {
        document.addEventListener("mousedown", this.productClickEvent);
        const t = y('[aria-label="Load more"]', (e) => {
          const s = A((p) => {
            this.productsSeen !== p && (this.productsSeen = p, E("plp_view_items_count", `Product Seen: ${p}`, "view", "PLP"));
          }, this.productsSet), r = s == null ? void 0 : s[0], d = s == null ? void 0 : s[1];
          this.observers.push(r), this.observers.push(d);
        });
        this.observers.push(t);
      }), this.observers.push(this.elementCountObserver);
    }
    changeProductsSize() {
      const n = () => {
        var L;
        let e = 0;
        const r = l("ac-product-listing").querySelectorAll("product"), d = Array.from(r), p = new URLSearchParams(window.location.search), v = parseInt(p.get("pg") || "1", 10) * 24;
        d.forEach((a, m) => {
          a.style.display = "";
        }), d.forEach((a, m) => {
          m >= v && (a.style.display = "none");
        });
        const i = d.filter((a) => a.style.display !== "none").length, c = document.querySelector('[aria-label="Load more"]'), f = (L = c == null ? void 0 : c.parentElement) == null ? void 0 : L.querySelector(".p1.col-1");
        f.style.display = "none";
        const w = f.textContent;
        if (w) {
          const a = w.match(/\d+/g);
          e = parseInt((a == null ? void 0 : a[1]) ?? "0"), this.previousProductAmount = e;
          const m = (
            /* HTML */
            `<div class="crs-viewed">
          You’ve viewed ${i <= e ? i : e} of
          ${e} products
        </div>`
          );
          i !== e ? c.disabled = !1 : c.disabled = !0;
          const g = l(".crs-viewed");
          g ? g.textContent = `You’ve viewed ${i} of ${e} products` : f.insertAdjacentHTML("afterend", m);
        }
        c && ((e > d.length || i < e) && (c.disabled = !1), c.addEventListener("click", async () => {
          await new Promise((u) => {
            new MutationObserver((_, I) => {
              _.some((M) => M.addedNodes.length > 0) && (I.disconnect(), u(!0));
            }).observe(l("ac-product-listing"), { childList: !0, subtree: !0 });
          });
          const a = l("ac-product-listing"), m = a.querySelectorAll("product"), g = Array.from(m), S = l(".crs-viewed"), O = a.querySelectorAll('product[style*="display: none"]'), q = Array.from(O), $ = new URLSearchParams(window.location.search), j = parseInt($.get("pg") || "1", 10);
          q.slice(0, 24).forEach((u) => {
            u.style.display = "";
          }), g.forEach((u, P) => {
            P >= j * 24 && (u.style.display = "none");
          });
          const b = g.filter(
            (u) => u.style.display !== "none"
          ).length;
          S && (S.textContent = `You’ve viewed ${b >= e ? e : b} of ${e} products`), b !== e ? c.disabled = !1 : c.disabled = !0;
        }));
      }, t = new MutationObserver((e) => {
        e.forEach((s) => {
          n();
        });
      });
      y('[aria-label="Load more"]', (e) => {
        var r;
        const s = (r = e == null ? void 0 : e.parentElement) == null ? void 0 : r.querySelector(".p1.col-1");
        n(), t.observe(s, {
          childList: !0,
          subtree: !0,
          characterData: !0
        });
      }), this.observers.push(t);
    }
    changeListingSize() {
      const n = l("ac-listing-size"), t = n == null ? void 0 : n.querySelector("button:first-of-type"), e = n == null ? void 0 : n.querySelector("button:last-of-type");
      !t || !e || t.classList.contains("col-43") || t.click();
    }
  }
  new x();
})();
