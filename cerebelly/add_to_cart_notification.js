(function() {
  "use strict";
  const m = (c, n, e, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: n,
      event_type: e,
      event_loc: i
    }), console.dir(`Event: ${c} | ${n} | ${e} | ${i}`);
  }, $ = ({ name: c, dev: n }) => {
    console.dir(
      `%c EXP: ${c} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = (c) => document.querySelectorAll(c), t = (c) => document.querySelector(c), N = (c) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", c, "variant_1"));
    }, 1e3);
  }, M = (c) => {
    let n = setInterval(function() {
      typeof window.FS == "function" && typeof window.FS.event == "function" && (clearInterval(n), console.dir("init fullStory"), window.FS.event("SetVariant", {
        name: c,
        variant: "variant_1"
      }));
    }, 1e3);
  }, E = (c, n, e, i, r = 1e3, s = 0.5) => {
    let o, a;
    if (o = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? a = setTimeout(() => {
          m(
            n,
            d[0].target.dataset.visible || e || "",
            "Visibility",
            i
          ), o.disconnect();
        }, r) : (console.log("Element is not fully visible"), clearTimeout(a));
      },
      { threshold: [s] }
    ), typeof c == "string") {
      const d = document.querySelector(c);
      d && o.observe(d);
    } else
      o.observe(c);
  }, j = (c) => new Promise((n) => {
    if (t(c))
      return n(t(c));
    const e = new MutationObserver(() => {
      t(c) && (n(t(c)), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), O = (c) => new Promise((n, e) => {
    var i = 0, r = setInterval(s, 1e3);
    function s() {
      i++, i > c && (clearInterval(r), n(!0));
    }
    document.addEventListener("click", function() {
      n(!1);
    });
  }), C = {
    checkbox: (
      /*html */
      `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="#0EB31F"/>
      <path d="M12.3758 5.14365C12.1989 4.96677 11.8956 4.96677 11.7188 5.14365L6.99345 9.86896L4.28966 7.16517C4.11277 6.98829 3.80955 6.98829 3.63266 7.16517C3.45578 7.34206 3.45578 7.64529 3.63266 7.82217L6.66495 10.8545C6.74918 10.9387 6.8671 10.9892 6.99345 10.9892C7.11979 10.9892 7.23772 10.9387 7.32195 10.8545L12.3673 5.79222C12.5442 5.61534 12.5442 5.31211 12.3673 5.13523H12.3758V5.14365Z" fill="white" stroke="white" stroke-width="0.3" stroke-miterlimit="10"/>
  </svg>
  `
    ),
    close: `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.73561 0.363702C1.38414 0.0122297 0.814294 0.0122297 0.462823 0.363702C0.111351 0.715173 0.111351 1.28502 0.462823 1.63649L4.82642 6.00009L0.462823 10.3637C0.111351 10.7152 0.111351 11.285 0.462822 11.6365C0.814294 11.988 1.38414 11.988 1.73561 11.6365L6.09921 7.27289L10.4628 11.6365C10.8143 11.988 11.3841 11.988 11.7356 11.6365C12.0871 11.285 12.0871 10.7152 11.7356 10.3637L7.37201 6.00009L11.7356 1.63649C12.0871 1.28502 12.0871 0.715174 11.7356 0.363702C11.3841 0.0122299 10.8143 0.0122295 10.4628 0.363701L6.09922 4.7273L1.73561 0.363702Z" fill="white" fill-opacity="0.5"/>
  </svg>`,
    arrowRight: `
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
    <path d="M11.7769 4.44951L7.54411 0.21672C7.47447 0.146501 7.39161 0.0907677 7.30032 0.0527335C7.20902 0.0146993 7.1111 -0.00488281 7.0122 -0.00488281C6.91331 -0.00488281 6.81539 0.0146993 6.72409 0.0527335C6.6328 0.0907677 6.54994 0.146501 6.4803 0.21672C6.34076 0.357085 6.26244 0.546963 6.26244 0.744882C6.26244 0.942802 6.34076 1.13268 6.4803 1.27305L9.47696 4.26971H0.749167C0.550476 4.26971 0.359922 4.34864 0.219426 4.48914C0.07893 4.62964 0 4.82019 0 5.01888C0 5.21757 0.07893 5.40813 0.219426 5.54862C0.359922 5.68912 0.550476 5.76805 0.749167 5.76805H9.43951L6.44284 8.72726C6.30276 8.86833 6.22446 9.05927 6.22516 9.25807C6.22586 9.45687 6.30551 9.64725 6.44658 9.78733C6.58765 9.92741 6.77859 10.0057 6.9774 10.005C7.1762 10.0043 7.36658 9.92465 7.50666 9.78358L11.7395 5.55079C11.8179 5.48326 11.8816 5.40019 11.9263 5.30683C11.9711 5.21347 11.996 5.11184 11.9996 5.00836C12.0031 4.90488 11.9851 4.8018 11.9468 4.70561C11.9085 4.60942 11.8506 4.52222 11.7769 4.44951Z" fill="white"/>
  </svg>`,
    arrowRightSlide: `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M6 17L14 9L6 0.999999" stroke="#15206B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    arrowLeftSlide: `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M12 17L4 9L12 0.999999" stroke="#15206B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
  }, P = {
    3: ["pumpkin-bundle", "bone-broth-protein-pack-3"],
    4: ["smart-bar-sampler"],
    5: ["5-7-months-bundle", "8-9-months-bundle", "10-11-months-bundle", "toddler-snack-pack", "plant-based-protein-pack", "iron-rich-heroes", "superfoods-variety-pack", "fabulous-fiber"],
    6: ["12-14-months-bundle", "15-17-months-bundle", "18-20-months-bundle", "21-24-months-bundle", "25-months", "spring-sprouts-2", "smart-picks-14"]
  }, V = (c, n, e, i, r) => (
    /* HTML */
    ` <div class="crs_notification">
  <div class="crs_notification_head justify-between">
      <div class="items-center">
          ${C.checkbox}
          <h3>Added to cart</h3>
      </div>
      <button type="button" class="crs_close">
          ${C.close}
      </button>
  </div>
  <div class="crs_notification_body justify-between">
      <div class="d-flex">
          <img src="${c}" alt="${n}">
          <div>
              <div class="crs_notification_title">${n}</div>
              <div class="crs_notification_info">${e}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${i}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-lg-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${r})${C.arrowRight}</a>
  </div>
</div>`
  ), F = `
<nav class="crs_nav">
  <ul class="d-flex">
    <li><a href="#ingredients">ingredients</a></li>
    <li><a href="#nutrients">Nutritients</a></li>
    <li><a href="#usvsthem">the cerebelly standard</a></li>
    <li><a href="#puree">directions & safety</a></li>
  </ul>
</nav>`, R = `
<button type="button" class="crs_arrow crs_arrow_prev" hidden>${C.arrowLeftSlide}</button>
<button type="button" class="crs_arrow crs_arrow_next" hidden>${C.arrowRightSlide}</button>`, H = (c) => `<p class="crs_tastes"><span>1</span> of ${c} flavors<p>`;
  var D = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.wnd, i = e === void 0 ? window : e;
    (function(r, s, o, a, d, h, p, b) {
      var x = function(f) {
        return f in r ? (r.console && r.console.log && r.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'), !1) : !0;
      }(o);
      if (!x)
        return;
      function L(S) {
        var f = [], g;
        function _() {
          g && (f.forEach(function(l) {
            var u;
            try {
              u = l[g[0]] && l[g[0]](g[1]);
            } catch (w) {
              l[3] && l[3](w);
              return;
            }
            u && u.then ? u.then(l[2], l[3]) : l[2] && l[2](u);
          }), f.length = 0);
        }
        function v(l) {
          return function(u) {
            g || (g = [l, u], _());
          };
        }
        S(v(0), v(1));
        function y(l, u) {
          return L(function(w, q) {
            f.push([l, u, w, q]), _();
          });
        }
        return {
          then: y
        };
      }
      p = r[o] = function() {
        var f = function(v, y, l, u) {
          u = u || 2;
          function w(Q, tt) {
            g(v, y, l, Q, tt, u);
          }
          var q = /Async$/;
          if (q.test(v))
            return v = v.replace(q, ""), typeof Promise == "function" ? new Promise(w) : L(w);
          var A;
          return g(v, y, l, A, A, u);
        };
        function g(_, v, y, l, u, w) {
          return f._api ? f._api(_, v, y, l, u, w) : (f.q && f.q.push([_, v, y, l, u, w]), null);
        }
        return f.q = [], f;
      }(), b = /* @__PURE__ */ function() {
        return function(f) {
          function g(y) {
            typeof y[4] == "function" && y[4](new Error(f));
          }
          var _ = p.q;
          if (_) {
            for (var v = 0; v < _.length; v++)
              g(_[v]);
            _.length = 0, _.push = g;
          }
        };
      }(), function() {
        h = s.createElement(a), h.async = !0, h.crossOrigin = "anonymous", h.src = "https://" + d, h.onerror = function() {
          b("Error loading " + d);
        };
        var f = s.getElementsByTagName(a)[0];
        f.parentNode.insertBefore(h, f);
      }(), function() {
        function f() {
        }
        function g(l, u, w) {
          p(l, u, w, 1);
        }
        function _(l, u, w) {
          g("setProperties", {
            type: l,
            properties: u
          }, w);
        }
        function v(l, u) {
          _("user", l, u);
        }
        function y(l, u, w) {
          v({
            uid: l
          }, w), u && v(u, w);
        }
        p.identify = y, p.setUserVars = v, p.identifyAccount = f, p.clearUserCookie = f, p.setVars = _, p.event = function(l, u, w) {
          g("trackEvent", {
            name: l,
            properties: u
          }, w);
        }, p.anonymize = function() {
          y(!1);
        }, p.shutdown = function() {
          g("shutdown");
        }, p.restart = function() {
          g("restart");
        }, p.log = function(l, u) {
          g("log", {
            level: l,
            msg: u
          });
        }, p.consent = function(l) {
          g("setIdentity", {
            consent: !arguments.length || l
          });
        };
      }(), function() {
        var f = "fetch", g = "XMLHttpRequest";
        p._w = {}, p._w[g] = r[g], p._w[f] = r[f], r[f] && (r[f] = function() {
          return p._w[f].apply(this, arguments);
        });
      }(), p._v = "2.0.0";
    })(i, i.document, i._fs_namespace, "script", i._fs_script);
  }, J = function(n) {
    return n === "window" ? "document" : "".concat(n, ".document");
  }, U = function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = n.shouldInsertScript, i = e === void 0 ? !0 : e, r = n.globalVar, s = r === void 0 ? "window" : r, o = n.apiVersion, a = o === void 0 ? "1.3.0" : o;
    return `(function(m,n,e,t,l,o,g,y){
    if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
    g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];`.concat(i ? `
    o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
    y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);` : "", `
    g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
    g.anonymize=function(){g.identify(!!0)};
    g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
    g.log = function(a,b){g("log",[a,b])};
    g.consent=function(a){g("consent",!arguments.length||a)};
    g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
    g.clearUserCookie=function(){};
    g.setVars=function(n, p){g('setVars',[n,p]);};
    g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
    if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
    g._v="`).concat(a, `";
})(`).concat(s, ",").concat(J(s), ",").concat(s, "['_fs_namespace'],'script','user');");
  }, W = function(n) {
    var e = n.orgId, i = n.namespace, r = i === void 0 ? "FS" : i, s = n.host, o = s === void 0 ? "fullstory.com" : s, a = n.script, d = a === void 0 ? "edge.fullstory.com/s/fs.js" : a;
    if (!e)
      throw new Error("FullStory orgId is a required parameter");
    window._fs_host = o, window._fs_script = d, window._fs_org = e, window._fs_namespace = r, D();
  };
  U();
  var I = function() {
    return I = Object.assign || function(n) {
      for (var e, i = 1, r = arguments.length; i < r; i++) {
        e = arguments[i];
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && (n[s] = e[s]);
      }
      return n;
    }, I.apply(this, arguments);
  }, B = function() {
    if (window._fs_namespace)
      return window[window._fs_namespace];
  }, Y = function(c, n) {
    var e = I({}, c);
    if (B()) {
      console.warn("The FullStory snippet has already been defined elsewhere (likely in the <head> element)");
      return;
    }
    e.recordCrossDomainIFrames && (window._fs_run_in_iframe = !0), e.appHost && (window._fs_app_host = e.appHost), e.assetMapId && (window._fs_asset_map_id = e.assetMapId), e.startCaptureManually && (window._fs_capture_on_startup = !1), e.recordOnlyThisIFrame && (window._fs_is_outer_script = !0), e.cookieDomain && (window._fs_cookie_domain = e.cookieDomain), e.debug === !0 && (e.script ? console.warn("Ignoring `debug = true` because `script` is set") : e.script = "edge.fullstory.com/s/fs-debug.js"), W(e);
    var i = B();
    if (!i) {
      console.warn("Failed to initialize FS snippet");
      return;
    }
    if (n && i("observe", { type: "start", callback: n }), e.devMode === !0) {
      var r = "FullStory was initialized in devMode and will stop recording";
      i("trackEvent", {
        name: "FullStory Dev Mode",
        properties: {
          message: r
        }
      }), i("shutdown"), window._fs_dev_mode = !0, console.warn(r);
    }
  }, X = function(c) {
    return function(n, e) {
      if (window._fs_initialized) {
        c && console.warn(c);
        return;
      }
      Y(n, e), window._fs_initialized = !0;
    };
  }, G = X("FullStory init has already been called once, additional invocations are ignored");
  const Z = `.items-center {
  display: flex;
  align-items: center;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

@media (min-width: 992px) {
  .flex-lg-column-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}/*# sourceMappingURL=base.css.map */`, K = `.crs_notification {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 30px 30px 0 0;
  background: #15206B;
  z-index: 9999;
  padding: 24px 24px 32px;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
}
.crs_notification.active {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.crs_notification .subscribe {
  display: none !important;
}
.crs_notification h3 {
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
.crs_notification svg {
  flex-shrink: 0;
}
.crs_notification_body {
  padding: 16px 0;
}
.crs_notification_body img {
  border-radius: 8px;
  background-color: #EBEFF8;
  margin-right: 12px;
  width: 70px;
  height: 70px;
  -o-object-fit: contain;
     object-fit: contain;
  flex-shrink: 0;
}
.crs_notification_title {
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 4px;
  max-width: 155px;
}
.crs_notification_info {
  color: rgba(255, 255, 255, 0.5);
}
.crs_notification_price {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  padding-left: 20px;
  text-align: right;
}

.crs_continue_shop {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.21px;
  text-transform: capitalize;
  white-space: nowrap;
  flex-shrink: 0;
}

.crs_view_cart {
  border-radius: 25px;
  background: #FC4D38;
  margin-left: 12px;
  color: #FFF;
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 2.6px;
  text-transform: uppercase;
  padding: 0;
  width: 100%;
  text-decoration: none;
}
.crs_view_cart svg {
  margin-left: 8px;
}

.crs_close {
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
}

.crs_hide_cart .modal.css-1m229m3,
.crs_hide_cart .modal.css-8z7pw4 {
  display: none !important;
}

.modal .product-wrapper .css-5nnxvq .product-image-wrapper {
  padding: 0;
  max-height: none;
  height: 100%;
  position: relative;
  justify-content: space-between;
}

.modal .css-12a0csp p.pdp-net-weight {
  color: var(--Blue-500, #3856A7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 8px 0 0 0;
}

.modal .product-wrapper .css-5nnxvq .tm-text {
  color: rgba(21, 32, 107, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 12px 0 0 0 !important;
}

.modal .product-wrapper .css-5nnxvq .action-wrapper {
  padding: 20px 20px 16px;
  margin-top: 12px;
}

.modal .product-wrapper .css-5nnxvq .unit-price {
  flex-direction: row !important;
  max-width: 100% !important;
  margin: 0 0 16px 0;
}

.product-wrapper .css-5nnxvq .unit-price .regular {
  width: -moz-fit-content;
  width: fit-content;
  margin-right: 6px;
  color: var(--Blue-500, #3856A7);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  text-decoration-line: line-through;
  margin-bottom: 0;
}

.modal .product-wrapper .css-5nnxvq .unit-price .discount {
  color: var(--Green-500, #00865A);
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  margin-right: 8px;
}

.modal .product-wrapper .css-5nnxvq .prices {
  color: var(--Blue-500, #3856A7);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-transform: lowercase;
  letter-spacing: normal;
}

.modal .css-5nnxvq .subscribe {
  width: 100%;
  display: block;
  border-radius: 100px;
  background: rgba(201, 229, 222, 0.5);
  color: var(--Green-500, #00865A);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px;
  text-align: center;
  margin-bottom: 8px;
  position: relative;
}

.modal:not(.css-1ryd8t3) .css-5nnxvq .subscribe:before {
  content: "";
  position: absolute;
  left: calc(100% - 8px);
  top: calc(100% - 5px);
  background: url("https://conversionratestore.github.io/projects/cerebelly/img/arrow-arc.svg") no-repeat center/contain;
  width: 25px;
  height: 26px;
}

.modal .product-wrapper button.button.red {
  border-radius: 100px;
  background: var(--Orange-500, #FC4D38);
  width: 100%;
  font-size: 16px;
  padding: 18px 20px;
}
.modal .product-wrapper button.button.red:hover {
  background-color: rgb(255, 178, 196);
}

.modal .product-wrapper .scrolled button.button.red {
  padding: 6px 20px;
  min-height: 48px;
}

.modal .product-wrapper .action.add {
  width: 100%;
}

.modal .css-12a0csp h2 {
  color: var(--Blue-600, #15206B);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: lowercase;
  margin-bottom: 10px;
}

.modal .css-12a0csp .product-wrapper .right-side {
  display: grid;
}

.modal .css-12a0csp .product-wrapper .right-side section:nth-child(3) {
  order: -1;
}

.modal .css-12a0csp .product-wrapper .right-side section:first-child,
.developmental-section,
.standard-section,
.safety-usage-section {
  order: 2;
}

.crs_nav {
  min-height: 48px;
  margin: 24px -24px 0;
}
.crs_nav ul {
  overflow-x: auto;
  background: var(--Blue-600, #15206B);
  list-style-type: none;
}
.crs_nav.fixed ul {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100px);
}
.crs_nav.active ul {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  transition: all 0.2s ease;
}
.crs_nav a {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.21px;
  text-transform: capitalize;
  opacity: 0.8;
  padding: 14px 8px;
  border-bottom: 2px solid transparent;
  margin-right: 8px;
  text-wrap: nowrap;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  flex-shrink: 0;
}
.crs_nav a.active {
  opacity: 1;
  border-color: #FC4D38;
  font-weight: 600;
}

.css-s7fk0u .explanation-video .directions-safety {
  text-decoration: underline;
}

.modal .product-wrapper .css-5nnxvq .action-wrapper > * {
  max-width: 360px !important;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto !important;
}

.css-12a0csp .next,
.css-12a0csp .prev {
  display: none;
}

.crs_arrow {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #FFD9E0;
  background-size: 18px;
  position: absolute;
  top: calc(50% - 136px);
  transform: translateY(-50%);
  z-index: 3;
  border: none;
  cursor: pointer;
  padding: 0;
}
.crs_arrow:not([hidden]) {
  display: flex;
}
.crs_arrow svg {
  margin: auto;
  display: block;
  flex-shrink: 0;
}
.crs_arrow_prev {
  left: 8px;
}
.crs_arrow_next {
  right: 8px;
}

.css-12a0csp p.crs_tastes,
p.crs_tastes {
  color: #FC4D38;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.css-12a0csp p.crs_tastes + p,
p.crs_tastes + p {
  display: none;
}

.product-image-wrapper p:not(.pdp-net-weight, .crs_tastes) {
  display: none;
}

.css-12a0csp .product-wrapper .left-side section {
  max-height: none !important;
}

.css-ylm3vf .cart-wrapper .cart-product-wrapper .cart-product .cart-product-reset {
  width: -moz-fit-content;
  width: fit-content;
}

.modal .product-wrapper .css-5nnxvq {
  padding-top: 12px;
}
.modal .product-wrapper .css-5nnxvq picture {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}
.modal .product-wrapper .css-5nnxvq picture img {
  width: calc(100% - 24px);
  margin: 0 auto;
  -o-object-fit: contain;
     object-fit: contain;
  display: block;
}

@media (min-width: 992px) {
  .modal .css-12a0csp .product-wrapper {
    padding: 0 20px;
  }
  .crs_notification {
    bottom: auto;
    left: auto;
    top: 127px;
    right: 0;
    max-width: 375px;
    border-radius: 30px 0px 0px 30px;
    padding: 24px;
    transform: translateX(100%);
  }
  .crs_notification.active {
    transform: translateX(0);
  }
  .crs_notification h3 {
    font-size: 16px;
  }
  .crs_notification_body img {
    width: 96px;
    height: 96px;
  }
  .crs_view_cart {
    margin-left: 0;
    margin-bottom: 12px;
  }
  .crs_nav {
    position: fixed;
    top: 0;
    right: 20px;
    max-width: 840px;
    margin: 0;
    width: 100%;
    z-index: 9999;
    width: -moz-fit-content;
    width: fit-content;
  }
  .crs_nav ul {
    border-radius: 0px 0px 50px 50px;
    background: #F2F4FA;
    padding: 0 80px;
  }
  .crs_nav ul a {
    padding: 27.5px 8px;
    font-size: 16px;
    color: var(--Blue-500, #3856A7);
    font-weight: 500;
  }
  .crs_nav ul a.active {
    color: var(--Blue-600, #15206B);
  }
  .crs_nav .default-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    padding: 10px;
    cursor: pointer;
    z-index: 2;
    display: flex;
  }
  .modal .css-12a0csp .product-wrapper .right-side {
    padding: 92px 0;
  }
  .modal .product-wrapper .css-5nnxvq {
    padding-top: 16px;
  }
  .modal .product-wrapper .css-5nnxvq picture img {
    width: calc(100% - 32px);
  }
  .modal .product-wrapper .css-5nnxvq .action-wrapper {
    margin-top: 16px;
  }
  .modal .css-12a0csp p.pdp-net-weight {
    font-size: 16px;
    margin-top: 12px;
  }
  .modal .css-12a0csp .product-wrapper .left-side {
    padding: 16px 0 50px;
  }
  .css-mc9jj7 .controls .default-close {
    right: 43px;
  }
  .modal .css-12a0csp h2 {
    font-size: 28px;
    line-height: 34px;
  }
  .product-wrapper .css-5nnxvq .unit-price .regular {
    font-size: 18px;
  }
  .product-wrapper .css-5nnxvq .unit-price .discount {
    font-size: 20px !important;
  }
  .product-wrapper .css-5nnxvq .unit-price .prices {
    font-size: 16px;
  }
  .modal .product-wrapper .css-5nnxvq .tm-text {
    font-size: 14px;
    line-height: 18px;
  }
  .modal .css-5nnxvq .subscribe {
    padding: 7px;
  }
  .crs_arrow_prev {
    left: 24px;
  }
  .crs_arrow_.next {
    right: 24px;
  }
  .css-12a0csp p.crs_tastes,
  p.crs_tastes {
    font-size: 18px;
  }
}
@media (max-width: 1279px) {
  .crs_nav ul {
    padding: 0 44px 0 24px;
  }
  .css-mc9jj7 .controls .default-close {
    right: 24px;
  }
}
@media (max-width: 991px) {
  .modal .css-12a0csp .product-wrapper .left-side {
    padding: 24px 24px 0 !important;
    z-index: 1;
  }
  .modal .css-12a0csp .product-wrapper .right-side section {
    padding: 30px 20px;
  }
  .modal .css-12a0csp .product-wrapper .right-side {
    padding: 20px 24px 120px;
  }
  .modal .css-12a0csp .product-wrapper .right-side > div[style="height: 50px;"] {
    display: none;
  }
  .modal.css-1ryd8t3 .controls .default-close,
  .modal.css-mc9jj7 .controls .default-close {
    right: 0;
    top: 0;
    padding: 13px;
    display: flex;
    margin: 0;
  }
  .modal.css-1ryd8t3 .controls .default-close img,
  .modal.css-mc9jj7 .controls .default-close img {
    width: 18px;
    height: 18px;
  }
  .crs_nav ul::-webkit-scrollbar {
    height: 0;
    width: 0;
    display: none;
    -webkit-appearance: none;
            appearance: none;
  }
  #attentive_overlay.crs_top iframe {
    top: auto !important;
    bottom: 248px !important;
  }
  .crs_arrow {
    top: calc(50% - 113px);
  }
}
@media (max-width: 360px) {
  .crs_notification {
    padding-left: 16px;
    padding-right: 16px;
  }
}/*# sourceMappingURL=main.css.map */`;
  $({ name: "Enhancements on PDP and new Add to Cart notification", dev: "Olha" }), N("new_add_to_cart"), G({
    orgId: "YOUR_ORG_ID"
  }), M("new_add_to_cart");
  const z = window.innerWidth < 991 ? "mobile" : "desktop";
  class T {
    constructor(n) {
      this.device = n, this.isSelectorWrapper = this.device === "desktop" ? ".product-wrapper" : ".css-12a0csp", this.clickRemove = !1, this.clickAdd = !1, this.notExitPopup = !1, this.type = "", this.init();
    }
    init() {
      if (!t(".crs_style") && !t(".crs_script")) {
        let s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js", s.async = !1, s.className = "crs_script", document.head.appendChild(s), document.head.insertAdjacentHTML("beforeend", `
      <style class="crs_style">${Z + K}</style>`);
      }
      O(this.device === "desktop" ? 20 : 10).then((s) => {
        var o;
        s && sessionStorage.getItem("exit_intent") == null && ((o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart.boxes[0]) != null && !window.location.href.includes("cart") && !window.location.href.includes("order") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), m("exp_newaddtocart_vis_04", "User inactive", "Visibility", "Popover"));
      }), setTimeout(() => {
        var s;
        sessionStorage.getItem("exit_intent") == null && ((s = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : s.cart.boxes[0]) != null && !t(".crs_notification") && !window.location.href.includes("cart") && !window.location.href.includes("order") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), m("exp_newaddtocart_vis_05", "After 180 seconds", "Visibility", "Popover"));
      }, 18e4);
      const n = () => {
        this.notExitPopup = !0, setTimeout(() => {
          this.notExitPopup = !1;
        }, 500);
      };
      let e = 0;
      j(".e-nav .mobile-cart-box").then((s) => {
        s.addEventListener("click", (o) => {
          document.body.classList.remove("crs_hide_cart");
        }), document.body.classList.add("crs_hide_cart"), document.addEventListener("click", (o) => {
          var a, d, h, p, b;
          if (n(), !o.target.closest(".modal") && !o.target.closest(".mobile-cart-box") && !o.target.closest(".cart-product") && document.body.classList.add("crs_hide_cart"), o.target.closest(".modal.css-w1q39a") && ((o.target.closest(".default-close") || o.target.closest(".default-close-container")) && this.clickAdd === !1 ? (document.body.classList.add("crs_hide_cart"), m("exp_newaddtocart_click_08", "Close", "Button", `Cart ${((d = (a = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : a.cart) == null ? void 0 : d.price) != 0 ? "" : "empty"} popover`)) : o.target.closest(".css-jobqsc") && o.target.classList.contains("red") ? m("exp_newaddtocart_click_09", "Shop all", "Button", "Cart empty popover") : o.target.classList.contains("continue") ? m("exp_newaddtocart_click_12", "Continue shopping", "Button", "Cart popover") : o.target.classList.contains("checkout") && m("exp_newaddtocart_click_11", "Checkout", "Button", "Cart popover")), t(".modal.css-w1q39a") && (o.target.closest(".cart-product-reset") ? (m("exp_newaddtocart_click_10", `Remove "${o.target.closest(".cart-product-info").querySelector(".title").innerHTML.split("<span")[0]}"`, "Button", "Cart popover"), t(".modal.css-w1q39a .cart-product") || (e = 0), this.updateDataNotification()) : o.target.closest(".added-container") && (m("exp_newaddtocart_click_13", `${o.target.closest("button").getAttribute("aria-label")}`, "Button", "Cart popover"), t(".modal.css-w1q39a .cart-product") || (e = 0), this.updateDataNotification())), t(".modal.css-w1q39a") ? e == 0 && (e = 1, E(t(".modal.css-w1q39a"), "exp_newaddtocart_vis_10", "View slide in cart", `Cart ${((p = (h = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : h.cart) == null ? void 0 : p.price) == 0 ? "empty" : ""} popover`)) : e = 0, o.target.closest(".remove") || o.target.classList.contains("remove")) {
            let x = JSON.parse(localStorage.getItem("data_notification"));
            o.target.closest(".added-container").querySelector(".remove").getAttribute("aria-label").toLowerCase().trim().includes(x == null ? void 0 : x.title.toLowerCase().trim()) && ((b = t(".crs_notification")) == null || b.remove(), this.updateDataNotification());
          }
        });
      }), j(".pageContainer .product").then((s) => {
        k(".sidebar a").forEach((o) => {
          o.addEventListener("click", (a) => n());
        });
      }), this.exitIntent();
      let i = window.location.href;
      const r = new MutationObserver((s) => {
        var o, a;
        i != window.location.href && (i = window.location.href, document.body.classList.add("crs_hide_cart")), this.navigation(), this.changeElements(), window.location.href.includes("/bundle") && this.addTastes(), document.body.style.overflow = this.checkPageUrl() === "pdp" ? "hidden" : "", ((a = (o = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : o.cart) == null ? void 0 : a.price) == 0 && t(".crs_notification") && t(".crs_notification").remove(), r.disconnect(), r.observe(document.body, {
          childList: !0,
          subtree: !0,
          attributes: !0
        });
      });
      r.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0
      });
    }
    addTastes() {
      if (!t(".crs_tastes") && t(".css-5nnxvq picture"))
        for (let n in P) {
          let e = window.location.href.split("/"), i = e[e.length - 1].split("?")[0], r = P[n];
          for (let s = 0; s < r.length; s++)
            if (r[s] == i) {
              t(".css-5nnxvq").insertAdjacentHTML("afterbegin", H(n)), t(".css-5nnxvq").insertAdjacentHTML("afterbegin", R), t(".crs_arrow_next").hidden = !1;
              let o = 1;
              k(".crs_arrow").forEach((a) => {
                let d = a.classList.contains("crs_arrow_prev") ? "prev" : "next";
                E(a, "exp_newaddtocart_vis_09", `View ${d} arrow`, "Product"), a.addEventListener("click", () => {
                  a.classList.contains("crs_arrow_next") && t(".css-12a0csp .next") ? (t(".css-12a0csp .next").click(), o += 1, m("exp_newaddtocart_click_06", "Next", "Button", "Product")) : a.classList.contains("crs_arrow_prev") && t(".css-12a0csp .prev") && (t(".css-12a0csp .prev").click(), o -= 1, m("exp_newaddtocart_click_07", "Prev", "Button", "Product")), t(".crs_arrow_prev").hidden = o <= 1, t(".crs_arrow_next").hidden = o >= n, t(".crs_tastes > span").innerHTML = o;
                });
              });
            }
        }
    }
    checkPageUrl() {
      const n = window.location.href;
      return n.includes("checkout") || n.includes("cart") ? "not_exp" : n.includes("/product") || n.includes("/bundle") ? "pdp" : "other";
    }
    renderNotification(n = "") {
      var e, i;
      t(".crs_notification") && t(".crs_notification").remove(), ((i = (e = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : e.cart) == null ? void 0 : i.price) != 0 && (this.updateDataNotification(), setTimeout(() => {
        let r = JSON.parse(localStorage.getItem("data_notification"));
        document.body.insertAdjacentHTML("afterbegin", V(r.image, r.title, r.type, r.price, r.count)), setTimeout(() => {
          t(".crs_notification").classList.add("active"), this.checkAttentiveCreativ(), this.clickAdd === !0 && (m("exp_newaddtocart_vis_02", "Add to cart", "Visibility", "Popover"), this.clickAdd = !1);
        }, 100), this.actionNotification();
      }, 200));
    }
    actionNotification() {
      if (!t(".crs_notification"))
        return;
      let n = t(".crs_notification");
      n.querySelector(".crs_close").addEventListener("click", (e) => {
        n.classList.remove("active"), setTimeout(() => {
          n == null || n.remove();
        }, 200), m("exp_newaddtocart_click_03", "Close", "Button", "Popover");
      }), n.querySelector(".crs_continue_shop").addEventListener("click", (e) => {
        e.preventDefault(), n.classList.remove("active"), setTimeout(() => {
          n == null || n.remove();
        }, 200), m("exp_newaddtocart_click_04", "Continue Shopping", "Button", "Popover");
      }), n.querySelector(".crs_view_cart").addEventListener("click", (e) => {
        m("exp_newaddtocart_click_02", "View cart", "Button", "Popover");
      });
    }
    resizeOfferPdp() {
      if (!t(".css-5nnxvq picture img") || !t(".css-5nnxvq .action-wrapper"))
        return;
      let n = 0;
      z === "mobile" ? n = "76px - 24px - 48px" + (window.location.href.includes("bundle") ? " - 28px" : "") : n = "67px - 66px - 34px" + (window.location.href.includes("bundle") ? " - 68px - 28px" : ""), t(".css-5nnxvq picture img").style = `height: calc(${window.innerHeight}px - ${n} - ${t(".css-5nnxvq .action-wrapper").clientHeight}px`;
    }
    exitIntent() {
      if (this.device === "desktop") {
        let n = 0, e = 0;
        window.addEventListener("mousemove", function(i) {
          n = i.clientX, e = i.clientY;
        }), document.body.addEventListener(
          "mouseleave",
          function() {
            var i, r;
            (n < 50 || e < 50 || n > window.innerWidth - 50 || e > window.innerHeight - 50) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && ((r = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : r.price) != 0 && !window.location.href.includes("cart") && !window.location.href.includes("order") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), new T(z).renderNotification(), m("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"));
          },
          { once: !1 }
        );
      } else {
        let n = (/android/i.test(navigator.userAgent), 120), e = 0, i = 0, r = (s = "window") => {
          var a, d;
          let o = s == "window" ? window.scrollY : t(s).scrollTop;
          i = o - e, e = o, (i > n || i < -n) && sessionStorage.getItem("exit_intent") == null && !t(".crs_notification") && !t(".css-m18cj1") && ((d = (a = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : a.cart) == null ? void 0 : d.price) != 0 && this.notExitPopup === !1 && !window.location.href.includes("cart") && !window.location.href.includes("order") && !window.location.href.includes("checkout") && (sessionStorage.setItem("exit_intent", "true"), this.renderNotification(), m("exp_newaddtocart_vis_03", "Exit intent", "Visibility", "Popover"), s == "window" ? document.removeEventListener("scroll", () => r()) : t(s).removeEventListener("scroll", r()));
        };
        document.addEventListener("scroll", () => r()), j(this.isSelectorWrapper).then((s) => {
          t(".modal " + this.isSelectorWrapper).addEventListener("scroll", () => {
            r(this.isSelectorWrapper), this.checkAttentiveCreativ();
          });
        });
      }
    }
    navigation() {
      if (t(".crs_nav") || !t(".css-12a0csp .product-wrapper .left-side"))
        return;
      this.device === "mobile" ? t(".css-12a0csp .product-wrapper .left-side").insertAdjacentHTML("beforeend", F) : (t(".css-12a0csp .product-wrapper").insertAdjacentHTML("afterbegin", F), t(".crs_nav ul").after(t(".css-mc9jj7 .controls .default-close, .css-1ryd8t3 .controls .default-close, .css-194jzej .controls .default-close"))), t(".modal.css-1ryd8t3 .default-close, .modal.css-mc9jj7 .default-close, .modal.css-194jzej .controls .default-close").addEventListener("click", (i) => {
        i.target.closest(".modal").querySelector(".product-wrapper") && m("exp_newaddtocart_click_05", "Close", "Button", "Product");
      }), m("exp_newaddtocart_vis_06", "View product", "Visibility", "Product"), m("exp_newaddtocart_vis_01", "View navigation", "Visibility", "Under the add to cart"), document.body.classList.add("crs_hide_cart"), k(".right-side section").forEach((i) => {
        let r = "View Nutrition Facts section";
        i.querySelector("h3") && (r = i.querySelector("h3").innerText), E(i, "exp_newaddtocart_vis_08", r, "Product");
      }), t(".modal .product-wrapper button.button.red") && m("exp_newaddtocart_vis_07", "View " + t(".modal .product-wrapper button.button.red").innerText + " button", "Visibility", "Product"), k(".crs_nav a").forEach((i) => {
        i.addEventListener("click", (r) => {
          r.preventDefault(), m("exp_newaddtocart_click_01", r.target.innerText, "Nav panel", "Under the add to cart");
          let s = r.target.href.split("#")[1];
          t("#" + s) && (seamless.polyfill(), seamless.scrollBy(t(this.isSelectorWrapper), { behavior: "smooth", top: t("#" + s).getBoundingClientRect().top - i.clientHeight - 20, left: 0 }));
        });
      });
      function n(i) {
        t(".css-12a0csp .product-wrapper .right-side") && t(".crs_nav") && i === "desktop" && (t(".crs_nav").style.minWidth = t(".css-12a0csp .product-wrapper .right-side").clientWidth + "px", t(".crs_nav").style.right = window.innerWidth - t(".css-12a0csp .product-wrapper .right-side").getBoundingClientRect().right + "px");
      }
      window.addEventListener("resize", () => {
        n(this.device);
      }), n(this.device), t(".css-12a0csp").addEventListener("scroll", (i) => {
        if (this.device !== "mobile")
          return;
        let r = t(".crs_nav").getBoundingClientRect().bottom;
        r < 0 ? t(".crs_nav").classList.add("fixed") : t(".crs_nav").classList.remove("fixed"), r < -100 ? (t(".crs_nav").classList.add("active"), t(".css-mc9jj7 .controls .default-close, .css-1ryd8t3 .controls .default-close, .modal.css-194jzej .controls .default-close").style.top = "55px") : (t(".crs_nav").classList.remove("active"), t(".css-mc9jj7 .controls .default-close, .css-1ryd8t3 .controls .default-close, .modal.css-194jzej .controls .default-close").style = "");
      });
      function e(i) {
        var r = i.getBoundingClientRect();
        return r.top >= 0 && r.left >= 0 && r.bottom <= (window.innerHeight || document.documentElement.clientHeight) && r.right <= (window.innerWidth || document.documentElement.clientWidth);
      }
      this.device === "desktop" && k(".crs_nav a")[0].classList.add("active"), t(this.isSelectorWrapper).addEventListener("scroll", (i) => {
        const r = k(".product-wrapper .right-side section[id] h2"), s = k(".crs_nav a");
        var o = -1;
        r.forEach(function(a, d) {
          e(a) && o === -1 && (o = d);
        }), o !== -1 && s.forEach(function(a, d) {
          if (d === o) {
            a.classList.add("active");
            const h = t(".crs_nav ul"), p = a.getBoundingClientRect(), b = h.getBoundingClientRect();
            p.left < b.left ? h.scrollLeft -= b.left - p.left : p.right > b.right && (h.scrollLeft += p.right - b.right);
          } else
            a.classList.remove("active");
        });
      });
    }
    checkAttentiveCreativ() {
      t("#attentive_overlay") && this.device === "mobile" && (t(".crs_notification") && !t("#attentive_overlay.crs_top") && t("#attentive_overlay").classList.add("crs_top"), !t(".crs_notification") && t("#attentive_overlay.crs_top") && t("#attentive_overlay").classList.remove("crs_top"), t(".bar-product-image") && (t(".scrolled .bar-product-image") ? t("#attentive_overlay iframe") && !t(".crs_notification") && t("#attentive_overlay iframe").style.bottom == "16px" && (t("#attentive_overlay iframe").style.bottom = t(".bar-product-image").clientHeight + "px") : t("#attentive_overlay iframe").style.bottom != "16px" && (t("#attentive_overlay iframe").style.bottom = "16px")));
    }
    changeElements() {
      var n;
      if (this.checkAttentiveCreativ(), k(".button").forEach((e, i) => {
        let r = e.innerText.toLowerCase();
        if (r.includes("to bag")) {
          let s = e.innerText;
          e.innerText = s.toLowerCase().replace("bag", "cart");
        }
        r.includes("to cart") && (e.closest(".add") || e.closest(".sticky-button-mobile") || e.closest(".made-for-header-actions") || e.closest(".action-button-wrap") || e.closest(".css-vmdrei")) && e.addEventListener("click", (s) => {
          this.clickAdd === !1 && (this.clickAdd = !0, t(".css-nco9x8 .tab .wrapper .text.full") ? this.type = t(".css-nco9x8 .tab .wrapper .text.full").innerText.split("/")[1] : t(".css-v9y3g3 .made-for-header .clickable") ? this.type = t(".css-v9y3g3 .made-for-header .clickable").innerText.replace("|", "") : t(".css-x4efki .box-content .box-info .blueprint") ? this.type = t(".css-x4efki .box-content .box-info .blueprint").innerText.split("|")[1] : this.type = "");
        });
      }), t(".modal .cart-product .product-count") && this.clickAdd == !0 && (document.body.classList.add("crs_hide_cart"), this.renderNotification(t(".modal .cart-product .product-count").innerText), t(".crs_hide_cart .modal .cart-product .product-count").closest(".modal").querySelector(".default-close").click()), t(".css-5nnxvq .unit-price .discount .subscribe") && !t(".css-5nnxvq .action-wrapper > .subscribe") && t(".css-5nnxvq .unit-price").after(t(".css-5nnxvq .unit-price .discount .subscribe")), t(".css-5nnxvq .prices") && !t(".css-5nnxvq .unit-price > .prices") && t(".css-5nnxvq .unit-price .discount").after(t(".css-5nnxvq .prices")), t(".left-side .action-wrapper") && t(".right-side .css-s7fk0u h2")) {
        if (!t(".left-side .action-wrapper > h2"))
          t(".left-side .action-wrapper").insertAdjacentHTML("afterbegin", `<h2>${t(".right-side .css-s7fk0u h2").innerHTML}</h2>`);
        else {
          let e = t(".right-side .css-s7fk0u h2").innerHTML;
          t(".left-side .action-wrapper > h2").innerHTML != e && (t(".left-side .action-wrapper > h2").innerHTML = t(".right-side .css-s7fk0u h2").innerHTML, this.resizeOfferPdp());
        }
        t(".pdp-net-weight") && !t(".css-5nnxvq picture + .pdp-net-weight") && (t(".css-5nnxvq picture").after(t(".pdp-net-weight")), this.resizeOfferPdp());
      }
      k('.product-wrapper .right-side img[loading="lazy"]').forEach((e) => {
        e.removeAttribute("loading");
      }), (n = t(".modal .left-side .remove")) == null || n.addEventListener("click", (e) => {
        this.clickRemove == !1 && (this.clickRemove = !0, setTimeout(() => {
          t(".modal .left-side .add button") && (m("exp_newaddtocart_vis_07", "View " + t(".modal .left-side .add button").innerText + " button", "Visibility", "Product"), this.clickRemove = !1);
        }, 500));
      }), k(".cart-product .cart-product-reset button").forEach((e) => {
        e.addEventListener("click", (i) => {
          var r, s, o, a;
          if (this.clickRemove == !1) {
            this.clickRemove = !0;
            let d = JSON.parse(localStorage.getItem("data_notification")), h = e.closest(".cart-product").querySelector(".title").innerHTML;
            this.type = (o = (s = (r = e.closest(".cart-product")) == null ? void 0 : r.nextElementSibling) == null ? void 0 : s.querySelector(".product-count")) == null ? void 0 : o.innerText, h.includes(d == null ? void 0 : d.title) && ((a = t(".crs_notification")) == null || a.remove(), this.updateDataNotification()), setTimeout(() => {
              this.clickRemove == !1;
            }, 200);
          }
        });
      }), !t("#puree") && k(".product-wrapper .right-side section").forEach((e) => {
        var s, o;
        let i = (s = e.querySelector("h3")) == null ? void 0 : s.innerText.toLowerCase(), r = (o = e.querySelector("h2")) == null ? void 0 : o.innerText.toLowerCase();
        i != null && i.includes("ingredients") ? e.id = "ingredients" : i != null && i.includes("nutrients") ? e.id = "nutrients" : i != null && i.includes("us vs them") ? e.id = "usvsthem" : r != null && r.includes("directions & safety") && (e.id = "puree");
      });
    }
    updateDataNotification() {
      setTimeout(() => {
        var n, e, i, r, s;
        if (((e = (n = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : n.cart) == null ? void 0 : e.price) != 0) {
          const o = (r = (i = JSON.parse(localStorage.getItem("v4Cart"))) == null ? void 0 : i.cart) == null ? void 0 : r.boxes, a = Object.keys(o);
          let d = a[a.length - 1], h = o[d];
          for (; h && h.incomplete == !0 && d > 0; )
            d--, h = o[d];
          let p = 0;
          for (const L in o)
            o[L].incomplete == !1 && (p += 1);
          let b = "/wp-content/themes/cerebelly/build/21c99a25c363149c9021.jpg";
          h.image ? b = h.image.includes("https") ? h.image : "https://cerebelly.com/wp-json/cerebelly/image/get?path=" + h.image : h.type == "personalized" && (b = "/wp-content/themes/cerebelly/build/1167d3c7a96e3f66206f.jpg");
          let x = {};
          this.type != "" ? (x.type = this.type, console.dir(x.type)) : (x.type = t(".cart-product .product-count") ? t(".cart-product .product-count").innerText : ((s = JSON.parse(localStorage.getItem("data_notification"))) == null ? void 0 : s.type) || "", console.dir(x.type)), k(".product").forEach((L) => {
            var S, f, g;
            (S = L == null ? void 0 : L.querySelector(".title")) != null && S.innerText.includes(h.title) && (x.type = ((f = L.querySelector(".quantity")) == null ? void 0 : f.innerHTML) || ((g = L.querySelector(".desktop")) == null ? void 0 : g.innerHTML.replace(" | ", "")));
          }), x.title = h.title || "", x.image = b, x.price = h.price.toFixed(2), x.count = p, console.dir(x), localStorage.setItem("data_notification", JSON.stringify(x));
        }
      }, 200);
    }
  }
  new T(z);
})();