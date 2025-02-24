(function() {
  "use strict";
  const m = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function y(e) {
    return new Promise((t) => {
      if (document.querySelector(e))
        return t(document.querySelector(e));
      const n = new MutationObserver(() => {
        document.querySelector(e) && (t(document.querySelector(e)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  /*!
   * paypal-js v8.2.0 (2025-01-23T17:26:53.747Z)
   * Copyright 2020-present, PayPal, Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function b(e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
        t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n;
  }
  typeof SuppressedError == "function" && SuppressedError;
  function v(e, t) {
    var n = document.querySelector('script[src="'.concat(e, '"]'));
    if (n === null)
      return null;
    var r = d(e, t), a = n.cloneNode();
    if (delete a.dataset.uidAuto, Object.keys(a.dataset).length !== Object.keys(r.dataset).length)
      return null;
    var o = !0;
    return Object.keys(a.dataset).forEach(function(i) {
      a.dataset[i] !== r.dataset[i] && (o = !1);
    }), o ? n : null;
  }
  function w(e) {
    var t = e.url, n = e.attributes, r = e.onSuccess, a = e.onError, o = d(t, n);
    o.onerror = a, o.onload = r, document.head.insertBefore(o, document.head.firstElementChild);
  }
  function g(e) {
    var t = e.sdkBaseUrl, n = e.environment, r = b(e, ["sdkBaseUrl", "environment"]), a = t || j(n), o = r, i = Object.keys(o).filter(function(s) {
      return typeof o[s] < "u" && o[s] !== null && o[s] !== "";
    }).reduce(function(s, u) {
      var h = o[u].toString();
      return u = S(u), u.substring(0, 4) === "data" || u === "crossorigin" ? s.attributes[u] = h : s.queryParams[u] = h, s;
    }, {
      queryParams: {},
      attributes: {}
    }), c = i.queryParams, f = i.attributes;
    return c["merchant-id"] && c["merchant-id"].indexOf(",") !== -1 && (f["data-merchant-id"] = c["merchant-id"], c["merchant-id"] = "*"), {
      url: "".concat(a, "?").concat(E(c)),
      attributes: f
    };
  }
  function S(e) {
    var t = function(n, r) {
      return (r ? "-" : "") + n.toLowerCase();
    };
    return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, t);
  }
  function E(e) {
    var t = "";
    return Object.keys(e).forEach(function(n) {
      t.length !== 0 && (t += "&"), t += n + "=" + e[n];
    }), t;
  }
  function j(e) {
    return e === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
  }
  function d(e, t) {
    t === void 0 && (t = {});
    var n = document.createElement("script");
    return n.src = e, Object.keys(t).forEach(function(r) {
      n.setAttribute(r, t[r]), r === "data-csp-nonce" && n.setAttribute("nonce", t["data-csp-nonce"]);
    }), n;
  }
  function k(e, t) {
    if (t === void 0 && (t = Promise), p(e, t), typeof document > "u")
      return t.resolve(null);
    var n = g(e), r = n.url, a = n.attributes, o = a["data-namespace"] || "paypal", i = l(o);
    return a["data-js-sdk-library"] || (a["data-js-sdk-library"] = "paypal-js"), v(r, a) && i ? t.resolve(i) : O({
      url: r,
      attributes: a
    }, t).then(function() {
      var c = l(o);
      if (c)
        return c;
      throw new Error("The window.".concat(o, " global variable is not available."));
    });
  }
  function O(e, t) {
    t === void 0 && (t = Promise), p(e, t);
    var n = e.url, r = e.attributes;
    if (typeof n != "string" || n.length === 0)
      throw new Error("Invalid url.");
    if (typeof r < "u" && typeof r != "object")
      throw new Error("Expected attributes to be an object.");
    return new t(function(a, o) {
      if (typeof document > "u")
        return a();
      w({
        url: n,
        attributes: r,
        onSuccess: function() {
          return a();
        },
        onError: function() {
          var i = new Error('The script "'.concat(n, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
          return o(i);
        }
      });
    });
  }
  function l(e) {
    return window[e];
  }
  function p(e, t) {
    if (typeof e != "object" || e === null)
      throw new Error("Expected an options object.");
    var n = e.environment;
    if (n && n !== "production" && n !== "sandbox")
      throw new Error('The `environment` option must be either "production" or "sandbox".');
    if (typeof t < "u" && typeof t != "function")
      throw new Error("Expected PromisePonyfill to be a function.");
  }
  const B = `paypal-pay-in-three-message.icmsHiddenComponent > div {
  display: block !important;
}

product-view-klarna-msg {
  display: none;
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
}`;
  m({ name: "Klarna & PayPal BNPL", dev: "OS" }), function(e, t, n, r, a, o) {
    e.hj = e.hj || function() {
      (e.hj.q = e.hj.q || []).push(arguments);
    }, e._hjSettings = { hjid: 2667925, hjsv: 6 }, a = t.getElementsByTagName("head")[0], o = t.createElement("script"), o.async = !0, o.src = n + e._hjSettings.hjid + r + e._hjSettings.hjsv, a && a.appendChild(o);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_klarna_paypal");
  class P {
    constructor() {
      var t, n;
      this.countryCode = (n = (t = window == null ? void 0 : window.autoInitData) == null ? void 0 : t.website) == null ? void 0 : n.websiteCode, this.observers = [], this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.init();
    }
    init() {
      this.country === "uk" && (console.log("experiment init"), this.handlePageChange(), this.loadPaypalScript(), this.addPaypalMessageBadgeOnBasketPage(), this.initStyles());
    }
    handlePageChange() {
      let t = window.location.href;
      new MutationObserver((r) => {
        r.forEach((a) => {
          t !== window.location.href && (t = window.location.href, this.observers.forEach((o) => o.disconnect()), this.addPaypalMessageBadgeOnBasketPage());
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    async addPaypalMessageBadgeOnBasketPage() {
      var n;
      if (window.location.pathname.includes("/basket")) {
        const r = await y("paypal-pay-in-three-message");
        if (r) {
          r.insertAdjacentHTML(
            "beforebegin",
            /* HTML */
            ' <div id="crs-paypap-basket"></div>'
          );
          const o = document.querySelector("#crs-paypap-basket"), i = (n = document.querySelector("[data-pp-amount]")) == null ? void 0 : n.getAttribute("data-pp-amount"), c = setInterval(() => {
            window != null && window.paypal && o && (paypal.Messages({
              amount: i,
              currency: "GBP"
            }).render("#crs-paypap-basket"), clearInterval(c));
          }, 500);
        }
      }
    }
    async loadPaypalScript() {
      const t = window.location.pathname;
      t.includes("/basket") || t.includes("/checkout") || k({
        clientId: "AaZlrvE0hFLH-X2KV8UzAollYEfKCnbyF0odBirm7WFXRaIoFVr1vgcO-Zqa7XmDMVqATCiOZ-0_3U9B",
        currency: "GBP",
        locale: "en_GB",
        components: "messages",
        commit: !1,
        intent: "capture",
        merchantId: "PHEWBQ8SPPYXC"
      }).then((n) => {
        console.log("Paypal SDK loaded via npm", n);
      }).catch((n) => {
        console.error("Failed to load PayPal SDK", n);
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.innerHTML = B, document.head.appendChild(t);
    }
  }
  new P();
})();
