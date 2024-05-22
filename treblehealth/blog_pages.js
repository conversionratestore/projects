(function() {
  "use strict";
  const c = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, r = (t) => document.querySelectorAll(t), o = (t) => document.querySelector(t), u = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  };
  function i(t) {
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
  (function(t) {
    t = t === void 0 ? {} : t;
    let e, n, a, l, f = (t == null ? void 0 : t.delay) || 50;
    function m() {
      e = null, l = 0;
    }
    return m(), function() {
      return n = window.scrollY, e != null && (l = n - e), e = n, clearTimeout(a), a = setTimeout(m, f), l;
    };
  })();
  const d = `.elementor-2470 .elementor-element.elementor-element-bfae500 a.elementor-button-link {
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
}/*# sourceMappingURL=main.css.map */`, h = window.innerWidth < 768 ? "mobile" : "desktop";
  class s {
    constructor(e) {
      this.device = e, this.init();
    }
    init() {
      c({ name: "AB test Blog pages", dev: "SKh" }), u("exp_blog"), document.head.insertAdjacentHTML("beforeend", `<style>${d}</style>`), this.changeTxtHeaderBanner(), this.changeTxtAndLinkBtns(), this.changeTxtAndLinkStickyBtn(), this.changeTxtBloclNextStep();
    }
    changeTxtHeaderBanner() {
      r(".elementor-659 .elementor-element.elementor-element-c1c5677 .elementor-button-text").forEach((e) => {
        e.innerHTML !== "Take the Tinnitus Quiz. <span>Start Now.</span>" && (e.innerHTML = "Take the Tinnitus Quiz. <span>Start Now.</span>"), e.querySelector("span").addEventListener("click", (n) => {
          n.preventDefault();
        });
      });
    }
    changeTxtAndLinkBtns() {
      r(".elementor-button-link").forEach((e) => {
        e.textContent !== "Take the Tinnitus Quiz" && !e.closest(".elementor-location-header") && (e.textContent = "Take the Tinnitus Quiz"), e.closest(".elementor-659 .elementor-element.elementor-element-e55687d") || e.addEventListener("click", (n) => {
          n.preventDefault(), window.location.href = "https://treblehealth.com/survey/";
        });
      });
    }
    changeTxtAndLinkStickyBtn() {
      i("body .floating_button").then((e) => {
        o("body .floating_button a").textContent !== "Take the Tinnitus Quiz" && (o("body .floating_button a").textContent = "Take the Tinnitus Quiz"), o("body .floating_button a").addEventListener("click", (n) => {
          n.preventDefault(), window.location.href = "https://treblehealth.com/intl-survey/";
        });
      });
    }
    changeTxtBloclNextStep() {
      i(".elementor-12397 .elementor-element.elementor-element-1878e6ea").then((e) => {
        let n = o(".elementor-12397 .elementor-element.elementor-element-1878e6ea");
        n.querySelector("h3.elementor-heading-title") && n.querySelector("h3.elementor-heading-title").textContent !== "Next Step: Take the Tinnitus Quiz" && (n.querySelector("h3.elementor-heading-title").textContent = "Next Step: Take the Tinnitus Quiz"), n.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text") && n.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text").innerHTML !== "Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz." && (n.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text").innerHTML = "Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz.");
      });
    }
  }
  i(".post-template-default").then((t) => {
    new s(h);
  });
})();
//# sourceMappingURL=index.js.map
