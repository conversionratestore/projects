(function() {
  "use strict";
  const c = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, l = (n) => document.querySelectorAll(n), o = (n) => document.querySelector(n);
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
    let e, t, a, i, s = (n == null ? void 0 : n.delay) || 50;
    function m() {
      e = null, i = 0;
    }
    return m(), function() {
      return t = window.scrollY, e != null && (i = t - e), e = t, clearTimeout(a), a = setTimeout(m, s), i;
    };
  })();
  const u = `.elementor-2470 .elementor-element.elementor-element-bfae500 a.elementor-button-link {
  display: flex !important;
  align-items: center;
  justify-content: center;
  max-width: 278px;
  height: 50px;
  margin: 0 auto;
  color: #2e168d !important;
  font-family: "Plus Jakarta Sans" !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 20px !important;
  border-radius: 6px !important;
  border: 2px solid #fbc762 !important;
  background: #fbc762 !important;
}
.elementor-2470 .elementor-element.elementor-element-bfae500 a.elementor-button-link:hover {
  color: #fbc762 !important;
  background-color: rgba(251, 199, 98, 0) !important;
}

.elementor-14082 .elementor-element.elementor-element-b38aaae .elementor-button,
.elementor-13338 .elementor-element.elementor-element-cb137af .elementor-button,
.elementor-13339 .elementor-element.elementor-element-fa45997 .elementor-button {
  max-width: 265px;
  min-width: 265px;
  width: 100%;
  height: 52px;
  margin: 0 auto;
}

.elementor-12397 .elementor-element.elementor-element-2f4f7337 .elementor-heading-title {
  max-width: 415px;
}

body .floating_button a {
  height: 44px !important;
  padding: 0 25px;
}

.elementor-659 .elementor-element.elementor-element-e55687d .elementor-button {
  color: #ff331f;
  border-radius: 5px;
  border: 2px solid #ff331f;
  background: #fff;
  height: 52px;
  padding: 10px 28.4px;
  transition: all 0.5s ease;
}
.elementor-659 .elementor-element.elementor-element-e55687d .elementor-button:hover {
  border: 2px solid #ff2e1f;
  background: #ff2e1f;
  color: #fff;
}

.elementor-icon-list-item:nth-child(3) .elementor-icon-list-text br {
  display: none;
}

@media (max-width: 768px) {
  .elementor-2470 .elementor-element.elementor-element-bfae500 a.elementor-button-link {
    max-width: 100%;
    height: 52px;
  }
  body .floating_button a {
    height: 48px !important;
    padding: 0 31px;
  }
  .elementor-icon-list-item:nth-child(3) .elementor-icon-list-text br {
    display: block;
  }
}/*# sourceMappingURL=main.css.map */`, d = window.innerWidth < 768 ? "mobile" : "desktop";
  class h {
    constructor(e) {
      this.device = e, this.init();
    }
    init() {
      c({ name: "AB test Blog pages", dev: "SKh" }), document.head.insertAdjacentHTML("beforeend", `<style>${u}</style>`), this.changeTxtHeaderBanner(), this.changeTxtAndLinkBtns(), this.changeTxtAndLinkStickyBtn(), this.changeTxtBloclNextStep();
    }
    changeTxtHeaderBanner() {
      l(".elementor-659 .elementor-element.elementor-element-c1c5677 .elementor-button-text").forEach((e) => {
        e.innerHTML !== "Take the Tinnitus Quiz. <span>Start Now.</span>" && (e.innerHTML = "Take the Tinnitus Quiz. <span>Start Now.</span>"), e.querySelector("span").addEventListener("click", (t) => {
          t.preventDefault(), console.log("object");
        });
      });
    }
    changeTxtAndLinkBtns() {
      l(".elementor-button-link").forEach((e) => {
        e.textContent !== "Take the Tinnitus Quiz" && !e.closest(".elementor-location-header") && (e.textContent = "Take the Tinnitus Quiz"), e.addEventListener("click", (t) => {
          t.preventDefault(), console.log(e.href), window.location.href = "https://treblehealth.com/survey/";
        });
      });
    }
    changeTxtAndLinkStickyBtn() {
      r("body .floating_button").then((e) => {
        o("body .floating_button a").textContent !== "Take the Tinnitus Quiz" && (o("body .floating_button a").textContent = "Take the Tinnitus Quiz"), o("body .floating_button a").addEventListener("click", (t) => {
          t.preventDefault(), window.location.href = "https://treblehealth.com/intl-survey/";
        });
      });
    }
    changeTxtBloclNextStep() {
      r(".elementor-12397 .elementor-element.elementor-element-1878e6ea").then((e) => {
        let t = o(".elementor-12397 .elementor-element.elementor-element-1878e6ea");
        t.querySelector("h3.elementor-heading-title") && t.querySelector("h3.elementor-heading-title").textContent !== "Next Step: Take the Tinnitus Quiz" && (t.querySelector("h3.elementor-heading-title").textContent = "Next Step: Take the Tinnitus Quiz"), t.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text") && t.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text").innerHTML !== "Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz." && (t.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text").innerHTML = "Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz.");
      });
    }
  }
  window.location.pathname.match("tinnitus-cure") && new h(d);
})();
//# sourceMappingURL=index.js.map
