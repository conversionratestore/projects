(function() {
  "use strict";
  const c = (t, e, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: o
    }), console.dir(`Event: ${t} | ${e} | ${n} | ${o}`);
  }, d = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, _ = (t) => document.querySelectorAll(t), s = (t) => document.querySelector(t), g = (t, e = "variant_1") => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, e), console.log("set", t, e));
    }, 1e3);
  };
  function a(t) {
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
    let e, n, o, i, r = (t == null ? void 0 : t.delay) || 50;
    function l() {
      e = null, i = 0;
    }
    return l(), function() {
      return n = window.scrollY, e != null && (i = n - e), e = n, clearTimeout(o), o = setTimeout(l, r), i;
    };
  })();
  const p = "https://conversionratestore.github.io/projects/hint/img/", u = {
    arrowLeftHeaderIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path stroke="#121620" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15 1 8l7-7"></path>
    </svg>
  `
    )
  }, h = (
    /* HTML */
    `
  <div class="new_astrologers_screen">
    <h2 class="main_title">
      <span class="accent_color_blue">Hint</span> is co-created and operated with
      <span class="accent_color_blue">80+</span> world-renowned astrologists and palm readers!
    </h2>
    <div class="astrologers_info_wrapper">
      <ul class="astrologers_list">
        <li class="astrologer_item">
          <div class="img_wrapper">
            <img src="${p}astrologer_akho_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Akho</h3>
            <p class="astrologer_description">6 years in palmistry readings and spiritual guidance.</p>
          </div>
        </li>
        <li class="astrologer_item best_for_you">
          <div class="img_wrapper">
            <img src="${p}astrologer_jane_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Jane Watson</h3>
            <p class="astrologer_description">8 years in astrology and palmistry</p>
          </div>
        </li>
        <li class="astrologer_item decoration">
          <div class="img_wrapper">
            <img src="${p}astrologer_kate_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Kate Smith</h3>
            <p class="astrologer_description">7 years in palmistry</p>
          </div>
        </li>
      </ul>
      <p class="txt_other_astrologers">
        And other <span class="accent_color_blue">80+</span> astrologists <br />
        and palm readers
      </p>
    </div>
    <div class="new_sticky_block">
      <p><span class="accent_color_blue">Join us</span> to ask about your future!</p>
      <div data-nextBtn class="new_continue_btn">Continue</div>
    </div>
  </div>
`
  ), b = `.subscription_plan_page header {
  position: relative;
  z-index: 0;
}
.subscription_plan_page header > button {
  z-index: 1000000000000000000000000000000000000000000000000000;
}
.subscription_plan_page .new_astrologers_screen + main {
  opacity: 0;
}
.subscription_plan_page .new_astrologers_screen + main.is_hidden {
  opacity: 0 !important;
  pointer-events: none;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.subscription_plan_page [data-overlay-container] {
  width: 100%;
}
.subscription_plan_page .new_astrologers_screen {
  padding: 20px 20px 140px;
}
.subscription_plan_page .new_astrologers_screen .accent_color_blue {
  color: #8a2be2;
}
.subscription_plan_page .new_astrologers_screen .main_title {
  color: #121620;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 0 24px;
  max-width: 335px;
}
@media (max-width: 362px) {
  .subscription_plan_page .new_astrologers_screen .main_title {
    font-size: 23px;
  }
}
@media (max-width: 346px) {
  .subscription_plan_page .new_astrologers_screen .main_title {
    font-size: 21px;
  }
}
@media (max-width: 322px) {
  .subscription_plan_page .new_astrologers_screen .main_title {
    font-size: 20px;
  }
}
.subscription_plan_page .new_astrologers_screen .astrologers_info_wrapper {
  padding: 20px;
  border-radius: 12px;
  background: #faf5ff;
}
.subscription_plan_page .new_astrologers_screen .astrologers_info_wrapper .txt_other_astrologers {
  padding-top: 16px;
  margin: 16px auto 0;
  border-top: 1px solid #ebecf0;
  color: #121620;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list .astrologer_item {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 2;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list .astrologer_item:nth-child(2) .astrologer_description {
  max-width: 100%;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list .img_wrapper {
  width: 68px;
  height: 68px;
  flex-shrink: 0;
  border-radius: 68px;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list .astrologer_name {
  color: #202b47;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  margin: 0 0 4px;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list .astrologer_description {
  max-width: 170px;
  color: #4a567a;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.01px;
}
@media (max-width: 346px) {
  .subscription_plan_page .new_astrologers_screen .astrologers_list .astrologer_description {
    font-size: 10px;
  }
}
.subscription_plan_page .new_astrologers_screen.ver_c .main_title {
  font-size: 30px;
  line-height: 38px;
  margin: 0 0 12px;
  max-width: 310px;
}
.subscription_plan_page .new_astrologers_screen.ver_c .main_description {
  color: #4a567a;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  max-width: 330px;
  margin: 0 0 16px;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list input {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list input:checked + label {
  border: 2px solid #066fde;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list input:checked + label .new_custom_radio {
  border: 2px solid #066fde;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list input:checked + label .new_custom_radio::before {
  content: "";
  position: absolute;
  width: 12.5px;
  height: 11.5px;
  border-radius: 50%;
  background: #066fde;
  border: 2px solid #066fde;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list label {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  border: 2px solid #eff2fd;
  background: #eff2fd;
  padding: 12px 12px 12px 20px;
  max-height: 92px;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list .astrologer_name {
  font-size: 16px;
  line-height: 24px;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list .astrologer_description {
  max-width: 100%;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list .new_custom_radio_wrapper {
  position: absolute;
  right: 12px;
  top: 12px;
}
.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list .new_custom_radio {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 50%;
  border: 2px solid #858da5;
}
.subscription_plan_page .new_astrologers_screen .new_sticky_block {
  border-top: 1px solid #ebecf0;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px 20px;
  z-index: 10;
}
.subscription_plan_page .new_astrologers_screen .new_sticky_block p {
  color: #121620;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 auto 12px;
}
.subscription_plan_page .new_astrologers_screen .new_sticky_block .new_continue_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #066fde;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}
.subscription_plan_page .new_astrologers_screen .new_sticky_block .new_continue_btn.is_disabled {
  background: #c2cad8;
  pointer-events: none;
}
.subscription_plan_page .new_astrologers_screen .new_sticky_block .choose_later_btn {
  width: -moz-max-content;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #202b47;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: 16px auto 0;
}

.new_btn_back {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  position: absolute;
  left: 8px;
}
.new_btn_back + button {
  display: none;
}

.cky-revisit-bottom-left {
  bottom: 125px !important;
}/*# sourceMappingURL=main.css.map */`, w = window.innerWidth < 768 ? "mobile" : "desktop";
  class m {
    constructor(e) {
      this.device = e, this.lastPath = window.location.pathname, this.storage = "", this.init();
    }
    init() {
      d({ name: "New Astrologers Screen", dev: "SKh" }), g("exp_astro_screen", "variant_1"), this.observeMain(), this.loadFontsAndStyles(), this.allFunctionsInitHandler();
    }
    loadFontsAndStyles() {
      s(".crs_inter_astrologers") || document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter_astrologers" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), s(".crs_style_astrologers") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style_astrologers">${b}</style>`);
    }
    // allFunctions
    allFunctionsInitHandler() {
      var n, o, i;
      const e = s("body");
      if (this.checkPage() === "paywall")
        (n = s(".new_btn_back")) == null || n.remove(), e.classList.contains("subscription_plan_page") && e.classList.remove("subscription_plan_page");
      else if (this.checkPage() === "subscriptionPlan") {
        console.log("subscriptionPlan"), e.classList.contains("subscription_plan_page") || e.classList.add("subscription_plan_page");
        let r = setInterval(() => {
          s(".subscription_plan_page main") && (clearInterval(r), s(".subscription_plan_page main").classList.add("is_hidden"));
        }, 300);
        if (localStorage.getItem("newAstrologersScreen") || (s("main") && (s("main").style.display = "none"), this.renderNewAstrologersScreenSection()), localStorage.getItem("newAstrologersScreen")) {
          this.renderNewBtnBack();
          let l = setInterval(() => {
            s(".subscription_plan_page main.is_hidden") && (clearInterval(l), s(".subscription_plan_page main").classList.remove("is_hidden"));
          }, 300);
        }
      } else
        console.log(this.checkPage()), (o = s(".new_btn_back")) == null || o.remove(), (i = s(".new_astrologers_screen")) == null || i.remove(), e.classList.contains("subscription_plan_page") && (console.log("        body.classList.remove('subscription_plan_page')"), e.classList.remove("subscription_plan_page"));
    }
    // subscription-plan
    renderNewAstrologersScreenSection() {
      a("main").then((e) => {
        const n = e;
        s(".new_astrologers_screen") || n.insertAdjacentHTML("beforebegin", h);
      }), this.clickNewContinueBtnHandler(), this.clickRadioBtnsHandler(), a(".new_astrologers_screen").then((e) => {
        c("exp_new_astro_visibility_01", "Screen view", "View", "palm readers");
      });
    }
    clickNewContinueBtnHandler() {
      a("[data-nextBtn]").then((e) => {
        const n = _("[data-nextBtn]"), o = s(".subscription_plan_page main");
        n.forEach((i) => {
          i.addEventListener("click", () => {
            var r;
            c("exp_new_astro_button_01", "Continue", "Click", "palm readers"), o.style.display = "block", o.classList.contains("is_hidden") && o.classList.remove("is_hidden"), (r = s(".new_astrologers_screen")) == null || r.remove(), localStorage.setItem("newAstrologersScreen", "yes"), this.renderNewBtnBack();
          });
        });
      });
    }
    clickRadioBtnsHandler() {
      a(".radio_item label").then((e) => {
        _(".radio_item label").forEach((o) => {
          o.addEventListener("click", (i) => {
            var r, l;
            this.storage = i.currentTarget.previousElementSibling.getAttribute("value").trim(), localStorage.setItem("newAstrologerValue", this.storage), c("exp_new_astro_button_06", this.storage, "Click", "palm readers"), (r = s(".new_continue_btn")) != null && r.classList.contains("is_disabled") && ((l = s(".new_continue_btn")) == null || l.classList.remove("is_disabled"));
          });
        });
      });
    }
    renderNewBtnBack() {
      a("header button").then((e) => {
        const n = e;
        setTimeout(() => {
          s(".new_btn_back") || n.insertAdjacentHTML("beforebegin", `<div class="new_btn_back">${u.arrowLeftHeaderIcon}</div>`), this.clickNewBtnBackHandler();
        }, 500);
      });
    }
    clickNewBtnBackHandler() {
      a(".new_btn_back").then((e) => {
        const n = e, o = s(".subscription_plan_page main");
        n.addEventListener("click", () => {
          c("exp_new_astro_button_02", "Back", "Click", "palm readers"), localStorage.getItem("newAstrologersScreen") && localStorage.removeItem("newAstrologersScreen"), o.style.display = "none", o.classList.add("is_hidden"), this.renderNewAstrologersScreenSection(), n.remove();
        });
      });
    }
    // initChooseAstrologer() {
    //   if (localStorage.getItem('newAstrologerValue')) {
    //     waitForElement('.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list').then(element => {
    //       $$el('.subscription_plan_page .new_astrologers_screen.ver_c .astrologers_list input').forEach(el => {
    //         console.log(el.value)
    //         if (el.value === localStorage.getItem('newAstrologerValue')) {
    //           el.checked = true
    //         }
    //       })
    //     })
    //   }
    // }
    // main
    // __________________________________________________________________________________________
    checkPage() {
      const e = window.location.href;
      return e.includes("paywall") ? "paywall" : e.includes("subscription-plan") ? "subscriptionPlan" : e.includes("email") ? "email" : "other";
    }
    observeMain() {
      new MutationObserver((n) => {
        for (let o of n) {
          window.location.pathname !== this.lastPath && (this.lastPath = window.location.pathname, this.checkPage() === "paywall" && this.allFunctionsInitHandler(), this.checkPage() === "subscriptionPlan" && !s("body").classList.contains("subscription_plan_page") && (console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>"), this.allFunctionsInitHandler()));
          for (let i of o.removedNodes)
            i instanceof HTMLElement && i.tagName === "MAIN" && this.checkPage() === "email" && (console.log(i, "NODE!!!!!!!!!!!!!!!!!!!!"), this.allFunctionsInitHandler());
        }
      }).observe(s("body"), { childList: !0, subtree: !0 });
    }
  }
  a("body").then((t) => {
    new m(w);
  });
})();
//# sourceMappingURL=index.js.map
