(function() {
  "use strict";
  const c = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, a = (t) => document.querySelectorAll(t), r = (t) => document.querySelector(t), u = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  };
  function l(t) {
    return new Promise((n) => {
      if (document.querySelector(t))
        return n(document.querySelector(t));
      const e = new MutationObserver(() => {
        document.querySelector(t) && (n(document.querySelector(t)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(t) {
    t = t === void 0 ? {} : t;
    let n, e, o, i, p = (t == null ? void 0 : t.delay) || 50;
    function m() {
      n = null, i = 0;
    }
    return m(), function() {
      return e = window.scrollY, n != null && (i = e - n), n = e, clearTimeout(o), o = setTimeout(m, p), i;
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
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      c({ name: "AB test Blog pages", dev: "SKh" }), u("exp_blog"), document.head.insertAdjacentHTML("beforeend", `<style>${d}</style>`), this.changeTxtHeaderBanner(), this.changeTxtAndLinkBtns(), this.changeTxtAndLinkStickyBtn(), this.changeTxtBloclNextStep();
    }
    changeTxtHeaderBanner() {
      l(".elementor-659 .elementor-element.elementor-element-c1c5677 .elementor-button-text").then((n) => {
        a(".elementor-659 .elementor-element.elementor-element-c1c5677 .elementor-button-text").forEach((e) => {
          e.innerHTML !== "Take the Tinnitus Quiz. <span>Start Now.</span>" && (e.innerHTML = "Take the Tinnitus Quiz. <span>Start Now.</span>"), e.querySelector("span").addEventListener("click", (o) => {
            o.preventDefault();
          });
        });
      });
    }
    changeTxtAndLinkBtns() {
      l(".elementor-button-link").then((n) => {
        a(".elementor-button-link").forEach((e) => {
          console.log(e, " link.textContent"), e.textContent !== "Take the Tinnitus Quiz" && !e.closest(".elementor-location-header") && !e.closest(".elementor-popup-modal") && (e.textContent = "Take the Tinnitus Quiz"), !e.closest(".elementor-659 .elementor-element.elementor-element-e55687d") && !e.closest(".elementor-popup-modal") && e.addEventListener("click", (o) => {
            o.preventDefault(), window.location.href = "https://treblehealth.com/survey/";
          });
        });
      });
    }
    changeTxtAndLinkStickyBtn() {
      l("body .floating_button").then((n) => {
        r("body .floating_button a").textContent !== "Take the Tinnitus Quiz" && (r("body .floating_button a").textContent = "Take the Tinnitus Quiz"), r("body .floating_button a").addEventListener("click", (e) => {
          e.preventDefault(), window.location.href = "https://treblehealth.com/intl-survey/";
        });
      });
    }
    changeTxtBloclNextStep() {
      l(".elementor-12397 .elementor-element.elementor-element-1878e6ea").then((n) => {
        let e = r(".elementor-12397 .elementor-element.elementor-element-1878e6ea");
        e.querySelector("h3.elementor-heading-title") && e.querySelector("h3.elementor-heading-title").textContent !== "Next Step: Take the Tinnitus Quiz" && (e.querySelector("h3.elementor-heading-title").textContent = "Next Step: Take the Tinnitus Quiz"), e.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text") && e.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text").innerHTML !== "Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz." && (e.querySelector(".elementor-icon-list-item:nth-child(3) .elementor-icon-list-text").innerHTML = "Join thousands of people who have reduced their tinnitus after <br/> taking the tinnitus quiz.");
      });
    }
  }
  l(".post-template-default").then((t) => {
    setTimeout(() => {
      new s(h);
    }, 1e3);
  });
})();
//# sourceMappingURL=index.js.map
