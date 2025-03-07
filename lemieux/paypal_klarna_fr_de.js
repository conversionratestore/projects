(function() {
  "use strict";
  const C = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function y(t) {
    return new Promise((e) => {
      if (document.querySelector(t))
        return e(document.querySelector(t));
      const n = new MutationObserver(() => {
        document.querySelector(t) && (e(document.querySelector(t)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }

  function O(t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
        e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
    return n;
  }
  typeof SuppressedError == "function" && SuppressedError;
  function x(t, e) {
    var n = document.querySelector('script[src="'.concat(t, '"]'));
    if (n === null)
      return null;
    var r = k(t, e), a = n.cloneNode();
    if (delete a.dataset.uidAuto, Object.keys(a.dataset).length !== Object.keys(r.dataset).length)
      return null;
    var o = !0;
    return Object.keys(a.dataset).forEach(function(c) {
      a.dataset[c] !== r.dataset[c] && (o = !1);
    }), o ? n : null;
  }
  function q(t) {
    var e = t.url, n = t.attributes, r = t.onSuccess, a = t.onError, o = k(e, n);
    o.onerror = a, o.onload = r, document.head.insertBefore(o, document.head.firstElementChild);
  }
  function P(t) {
    var e = t.sdkBaseUrl, n = t.environment, r = O(t, ["sdkBaseUrl", "environment"]), a = e || D(n), o = r, c = Object.keys(o).filter(function(u) {
      return typeof o[u] < "u" && o[u] !== null && o[u] !== "";
    }).reduce(function(u, s) {
      var l = o[s].toString();
      return s = I(s), s.substring(0, 4) === "data" || s === "crossorigin" ? u.attributes[s] = l : u.queryParams[s] = l, u;
    }, {
      queryParams: {},
      attributes: {}
    }), i = c.queryParams, d = c.attributes;
    return i["merchant-id"] && i["merchant-id"].indexOf(",") !== -1 && (d["data-merchant-id"] = i["merchant-id"], i["merchant-id"] = "*"), {
      url: "".concat(a, "?").concat(T(i)),
      attributes: d
    };
  }
  function I(t) {
    var e = function(n, r) {
      return (r ? "-" : "") + n.toLowerCase();
    };
    return t.replace(/[A-Z]+(?![a-z])|[A-Z]/g, e);
  }
  function T(t) {
    var e = "";
    return Object.keys(t).forEach(function(n) {
      e.length !== 0 && (e += "&"), e += n + "=" + t[n];
    }), e;
  }
  function D(t) {
    return t === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
  }
  function k(t, e) {
    e === void 0 && (e = {});
    var n = document.createElement("script");
    return n.src = t, Object.keys(e).forEach(function(r) {
      n.setAttribute(r, e[r]), r === "data-csp-nonce" && n.setAttribute("nonce", e["data-csp-nonce"]);
    }), n;
  }
  function L(t, e) {
    if (e === void 0 && (e = Promise), E(t, e), typeof document > "u")
      return e.resolve(null);
    var n = P(t), r = n.url, a = n.attributes, o = a["data-namespace"] || "paypal", c = S(o);
    return a["data-js-sdk-library"] || (a["data-js-sdk-library"] = "paypal-js"), x(r, a) && c ? e.resolve(c) : M({
      url: r,
      attributes: a
    }, e).then(function() {
      var i = S(o);
      if (i)
        return i;
      throw new Error("The window.".concat(o, " global variable is not available."));
    });
  }
  function M(t, e) {
    e === void 0 && (e = Promise), E(t, e);
    var n = t.url, r = t.attributes;
    if (typeof n != "string" || n.length === 0)
      throw new Error("Invalid url.");
    if (typeof r < "u" && typeof r != "object")
      throw new Error("Expected attributes to be an object.");
    return new e(function(a, o) {
      if (typeof document > "u")
        return a();
      q({
        url: n,
        attributes: r,
        onSuccess: function() {
          return a();
        },
        onError: function() {
          var c = new Error('The script "'.concat(n, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
          return o(c);
        }
      });
    });
  }
  function S(t) {
    return window[t];
  }
  function E(t, e) {
    if (typeof t != "object" || t === null)
      throw new Error("Expected an options object.");
    var n = t.environment;
    if (n && n !== "production" && n !== "sandbox")
      throw new Error('The `environment` option must be either "production" or "sandbox".');
    if (typeof e < "u" && typeof e != "function")
      throw new Error("Expected PromisePonyfill to be a function.");
  }
  const A = `/* paypal-pay-in-three-message.icmsHiddenComponent > div {
  display: block !important;
} */

product-view-layout product-view-klarna-msg {
  display: none !important;
}

product-view-layout .sticky-panel {
  display: grid;
}

product-view-layout .sticky-panel > div:first-child {
  order: -1;
}
product-view-layout .sticky-panel > div:nth-child(2) {
  order: -1;
}

product-view-layout .sticky-panel div:has(> paypal-pay-in-three-message) {
  order: -1;
}

basket-view paypal-pay-in-three-message {
  display: none;
}

/* product-view-layout paypal-pay-in-three-message {
  display: none;
} */

#crs-paypal-basket,
#crs-paypal-product {
  max-width: 100%;
  overflow: hidden;
  min-height: 1.7rem;
}
/* #crs-paypal-basket,
#crs-paypal-product > div {
  min-width: 387px;

} */

#crs-paypal-product.active { 
  background-color: #f6f5f5;
  background-color: var(--atomic-background-color-5, #f6f5f5);
  padding: 0.5rem;
}
`;
  C({ name: "Klarna & PayPal BNPL", dev: "OS" }), function(t, e, n, r, a, o) {
    t.hj = t.hj || function() {
      (t.hj.q = t.hj.q || []).push(arguments);
    }, t._hjSettings = { hjid: 2667925, hjsv: 6 }, a = e.getElementsByTagName("head")[0], o = e.createElement("script"), o.async = !0, o.src = n + t._hjSettings.hjid + r + t._hjSettings.hjsv, a && a.appendChild(o);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_klarna_paypal");
  class H {
    constructor() {
      var e, n;
      this.countryCode = (n = (e = window == null ? void 0 : window.autoInitData) == null ? void 0 : e.website) == null ? void 0 : n.websiteCode, this.basketButtonHandler = () => {
        (() => {
          !location.href.includes("basket") && !location.href.includes("checkout") && y('minibasket a[href*="/basket"]').then((a) => {
            var d;
            const o = a, c = o.href;
            this.country;
            const i = (
              /* HTML */
              `<a
            class="w-12 p-r-0 p-l-0 button"
            href="${c}"
            ><span class="p1 col-w">Checkout securely</span></a
          >`
            );
            o.outerHTML = i, (d = document.querySelector('minibasket a[href*="/checkout"]')) == null || d.addEventListener("click", (u) => {
              const s = document.querySelector(
                'minibasket [aria-label="Close"]'
              );
              localStorage.setItem("lastPdpHref", location.href), s && s.click();
            });
          });
        })();
      }, this.observers = [], this.country = this.countryCode === "base" ? "uk" : this.countryCode === "de" ? "de" : this.countryCode === "fr" ? "fr" : this.countryCode === "us" ? "us" : "other", this.init();
    }
    init() {
      if (!(this.country !== "uk" && this.country !== "de" && this.country !== "fr"))
        try {
          this.handlePageChange(), this.loadPaypalScript(), this.basketButtonHandler(), this.addPaypalMessageBadgeOnBasketPage(), this.initStyles();
        } catch {
        }
    }
    handlePageChange() {
      let e = window.location.href;
      new MutationObserver((r) => {
        r.forEach((a) => {
          e !== window.location.href && (e = window.location.href, this.observers.forEach((o) => o.disconnect()), this.addPaypalMessageBadgeOnBasketPage());
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    async addPaypalMessageBadgeOnBasketPage() {
      var n, r, a, o, c, i, d, u, s, l, j, B;
      if (window.location.pathname.includes("/basket")) {
        const b = await y(
          "paypal-pay-in-three-message"
        );
        if (b) {
          document.querySelector("#crs-paypal-basket") || b.insertAdjacentHTML(
            "beforebegin",
            /* HTML */
            ` <div id="crs-paypal-basket">
          <div></div>
        </div>`
          );
          const v = document.querySelector(
            "#crs-paypal-basket"
          ), f = (n = document.querySelector("[data-pp-amount]")) == null ? void 0 : n.getAttribute("data-pp-amount"), h = (o = (a = (r = window == null ? void 0 : window.autoInitData) == null ? void 0 : r.website) == null ? void 0 : a.currency) == null ? void 0 : o.base, g = (i = (c = window == null ? void 0 : window.autoInitData) == null ? void 0 : c.website) == null ? void 0 : i.defaultCountry;
          if (!f || !h) return;
          const p = setInterval(() => {
            window != null && window.paypal && v && (paypal.Messages({
              amount: f,
              currency: h,
              buyerCountry: g,
              style: {
                layout: "text"
              }
            }).render("#crs-paypal-basket div"), clearInterval(p));
          }, 500);
        }
      } else if (await y("product-view-add-to-basket")) {
        const m = (d = document.querySelector("[data-pp-amount]")) == null ? void 0 : d.getAttribute("data-pp-amount"), w = (l = (s = (u = window == null ? void 0 : window.autoInitData) == null ? void 0 : u.website) == null ? void 0 : s.currency) == null ? void 0 : l.base, v = (B = (j = window == null ? void 0 : window.autoInitData) == null ? void 0 : j.website) == null ? void 0 : B.defaultCountry;
        if (!m || !w) return;
        const f = (
          /* HTML */
          ` <div id="crs-paypal-product">
          <div></div>
        </div>`
        ), h = document.querySelector(
          "paypal-pay-in-three-message"
        );
        setTimeout(() => {
          document.querySelector("#crs-paypal-product") || h.insertAdjacentHTML("afterend", f);
        }, 1e3);
        const g = setInterval(() => {
          window != null && window.paypal && y("#crs-paypal-product").then(() => {
            var p;
            paypal.Messages({
              amount: m,
              currency: w,
              buyerCountry: v
            }).render("#crs-paypal-product div"), clearInterval(g), (p = document.querySelector("#crs-paypal-product")) == null || p.classList.add("active");
          });
        }, 500);
      }
    }
    async loadPaypalScript() {
      var a, o, c, i, d, u, s;
      const e = window.location.pathname;
      if (e.includes("/checkout") || e.includes("/basket"))
        return;
      const n = (o = (a = window == null ? void 0 : window.autoInitData) == null ? void 0 : a.website) == null ? void 0 : o.locale, r = (d = (i = (c = window == null ? void 0 : window.autoInitData) == null ? void 0 : c.website) == null ? void 0 : i.currency) == null ? void 0 : d.base;
      (s = (u = window == null ? void 0 : window.autoInitData) == null ? void 0 : u.website) == null || s.defaultCountry, L({
        clientId: "AaZlrvE0hFLH-X2KV8UzAollYEfKCnbyF0odBirm7WFXRaIoFVr1vgcO-Zqa7XmDMVqATCiOZ-0_3U9B",
        currency: r || "USD",
        locale: n,
        components: "messages"
        // intent: 'capture',
        // merchantId: 'PHEWBQ8SPPYXC',
      }).then((l) => {
        console.log("Paypal SDK loaded via npm", l);
      }).catch((l) => {
        console.error("Failed to load PayPal SDK", l);
      });
    }
    initStyles() {
      const e = document.createElement("style");
      e.innerHTML = A, document.head.appendChild(e);
    }
  }
  new H();
})();
