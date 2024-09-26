(function() {
  "use strict";
  const l = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), console.dir(`Event: ${n} | ${e} | ${t} | ${i}`);
  }, s = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, d = (n) => document.querySelectorAll(n), o = (n) => document.querySelector(n), u = (n, e = "variant_1") => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", n, e), console.log("set", n, e));
    }, 1e3);
  };
  function r(n) {
    return new Promise((e) => {
      if (document.querySelector(n))
        return e(document.querySelector(n));
      const t = new MutationObserver(() => {
        document.querySelector(n) && (e(document.querySelector(n)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(n) {
    n = n === void 0 ? {} : n;
    let e, t, i, a, m = (n == null ? void 0 : n.delay) || 50;
    function c() {
      e = null, a = 0;
    }
    return c(), function() {
      return t = window.scrollY, e != null && (a = t - e), e = t, clearTimeout(i), i = setTimeout(c, m), a;
    };
  })();
  const p = (
    /* HTML */
    `
  <div class="new_redirect_link ver_first">
    <span>or</span>
    <a href="/products/adult-buzzpatch-mosquito-repellent-patches?selling_plan=1060569132">See the grownup version</a>
  </div>
`
  ), f = `a.learn-now {
  display: none !important;
}

.js-heading .hand-banner .js-btn.btn-primary {
  margin-bottom: 16px !important;
}

.js-reviews + .js-heading.js-mobile {
  padding-bottom: 20px;
}

.new_redirect_link {
  position: relative;
  max-width: 311px;
  margin: 0 auto;
  text-align: center;
}
.new_redirect_link.ver_first::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  width: 97%;
  height: 1px;
  background: linear-gradient(to right, #ff3c7f 50%, transparent 0%);
  background-size: 13px 1px;
  background-repeat: repeat-x;
}
.new_redirect_link.ver_first span {
  position: relative;
  z-index: 5;
  display: block;
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 16px;
  font-weight: 400;
  line-height: 110%;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  width: -moz-max-content;
  width: max-content;
  margin: 0 auto 16px;
  padding: 0 16px;
  background: #f5a83f;
}
.new_redirect_link.ver_first a {
  color: #0c0b0b;
  font-family: "DINEngschrift LT";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-decoration-line: underline;
  text-transform: uppercase;
}
.new_redirect_link.ver_second a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 64px;
  width: 100%;
  border-radius: 100px;
  border: 2px solid #ff3c7f;
  background: #ffebf2;
  color: var(--Black, #0c0b0b);
  font-family: "DINEngschrift LT";
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
}/*# sourceMappingURL=main.css.map */`, h = window.innerWidth < 768 ? "mobile" : "desktop";
  class w {
    constructor(e) {
      this.device = e, this.observer = null, this.init();
    }
    init() {
      s({ name: "NatPat: Adults Version", dev: "SKh" }), u("exp_adilt", "variant_1"), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${f}</style>`), this.renderNewRedirectLink(), this.fixesLocation(), this.clickLinkHandler();
    }
    renderNewRedirectLink() {
      r("a.learn-now").then((e) => {
        o(".new_redirect_link") || o(".learn-now").insertAdjacentHTML("afterend", p);
      });
    }
    clickLinkHandler() {
      r(".new_redirect_link").then((e) => {
        o(".new_redirect_link a").addEventListener("click", (t) => {
          l("exp_adult_button_01", "See the grownup version", "Click", "First screen");
        });
      });
    }
    fixesLocation() {
      r(".new_redirect_link").then((e) => {
        d(".new_redirect_link a").forEach((t) => {
          const i = window.location.pathname === "/" ? t.getAttribute("href") : window.location.pathname.split("/pages/buzzpatch")[0] + t.getAttribute("href");
          t.setAttribute("href", i);
        });
      });
    }
  }
  r("a.learn-now").then((n) => {
    new w(h);
  });
})();
//# sourceMappingURL=index.js.map
