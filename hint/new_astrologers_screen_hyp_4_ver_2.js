(function() {
  "use strict";
  const _ = (t, e, n, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: i
    }), console.dir(`Event: ${t} | ${e} | ${n} | ${i}`);
  }, d = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (t) => document.querySelectorAll(t), s = (t) => document.querySelector(t), g = (t, e = "variant_1") => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, e), console.log("set", t, e));
    }, 1e3);
  };
  function l(t) {
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
    let e, n, i, a, r = (t == null ? void 0 : t.delay) || 50;
    function o() {
      e = null, a = 0;
    }
    return o(), function() {
      return n = window.scrollY, e != null && (a = n - e), e = n, clearTimeout(i), i = setTimeout(o, r), a;
    };
  })();
  const c = "https://conversionratestore.github.io/projects/hint/img/", u = {
    arrowLeftHeaderIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path stroke="#121620" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15 1 8l7-7"></path>
    </svg>
  `
    )
  }, b = (
    /* HTML */
    `
  <div class="new_astrologers_screen ver_c">
    <h2 class="main_title">Choose you personal palm reader</h2>
    <p class="main_description">Choose the one who will be your first palm reader. You can change your choice later.</p>
    <ul class="astrologers_list">
      <li class="radio_item">
        <input type="radio" id="radio_btn_1" name="radio_btn" value="Akho" />
        <label for="radio_btn_1">
          <div class="img_wrapper">
            <img src="${c}astrologer_akho_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Akho</h3>
            <p class="astrologer_description">
              6 years in palmistry readings <br />
              and spiritual guidance.
            </p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_2" name="radio_btn" value="Jane" />
        <label for="radio_btn_2">
          <div class="img_wrapper">
            <img src="${c}astrologer_jane_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Jane</h3>
            <p class="astrologer_description">8 years in astrology and palmistry</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_3" name="radio_btn" value="Samira" />
        <label for="radio_btn_3">
          <div class="img_wrapper">
            <img src="${c}astrologer_samira_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Samira</h3>
            <p class="astrologer_description">20 years in astrology and palmistry</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_4" name="radio_btn" value="Rebecca" />
        <label for="radio_btn_4">
          <div class="img_wrapper">
            <img src="${c}astrologer_rebecca_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Rebecca</h3>
            <p class="astrologer_description">
              8 years in palmistry readings <br />
              and spiritual guidance.
            </p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_5" name="radio_btn" value="Kate" />
        <label for="radio_btn_5">
          <div class="img_wrapper">
            <img src="${c}astrologer_kate_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Kate</h3>
            <p class="astrologer_description">7 years in palmistry</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
      <li class="radio_item">
        <input type="radio" id="radio_btn_6" name="radio_btn" value="Lucy" />
        <label for="radio_btn_6">
          <div class="img_wrapper">
            <img src="${c}astrologer_lucy_1.png" alt="astrologer photo" />
          </div>
          <div>
            <h3 class="astrologer_name">Lucy</h3>
            <p class="astrologer_description">10 years in astrology</p>
          </div>
          <div class="new_custom_radio_wrapper">
            <span class="new_custom_radio"></span>
          </div>
        </label>
      </li>
    </ul>
    <div class="new_sticky_block">
      <div data-nextBtn class="new_continue_btn is_disabled">Continue</div>
      <div data-nextBtn class="choose_later_btn">Choose later</div>
    </div>
  </div>
`
  ), w = `.subscription_plan_page .new_astrologers_screen + main {
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
  color: #066fde;
}
.subscription_plan_page .new_astrologers_screen .main_title {
  color: #121620;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 0 16px;
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
  background: #eff2fd;
}
.subscription_plan_page .new_astrologers_screen .astrologers_info_wrapper .txt_other_astrologers {
  max-width: 240px;
  margin: 12px auto 0;
  color: #121620;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.subscription_plan_page .new_astrologers_screen .astrologers_list .astrologer_item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 12px 12px 20px;
  border-radius: 12px;
  background: #edfaff;
  position: relative;
  z-index: 2;
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
  max-width: 165px;
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
  background: #fff;
  box-shadow: 0px -2px 16px 0px rgba(18, 22, 32, 0.1);
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
}/*# sourceMappingURL=main.css.map */`, h = window.innerWidth < 768 ? "mobile" : "desktop";
  class m {
    constructor(e) {
      this.device = e, this.lastPath = window.location.pathname, this.storage = "", this.init();
    }
    init() {
      d({ name: "New Astrologers Screen", dev: "SKh" }), g("exp_astro_screen", "variant_2"), this.observeMain(), this.loadFontsAndStyles(), this.allFunctionsInitHandler();
    }
    loadFontsAndStyles() {
      s(".crs_inter_astrologers") || document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter_astrologers" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), s(".crs_style_astrologers") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style_astrologers">${w}</style>`);
    }
    // allFunctions
    allFunctionsInitHandler() {
      var n, i, a;
      const e = s("body");
      if (this.checkPage() === "paywall")
        (n = s(".new_btn_back")) == null || n.remove(), e.classList.contains("subscription_plan_page") && e.classList.remove("subscription_plan_page");
      else if (this.checkPage() === "subscriptionPlan") {
        console.log("subscriptionPlan"), e.classList.add("subscription_plan_page");
        let r = setInterval(() => {
          s(".subscription_plan_page main") && (clearInterval(r), s(".subscription_plan_page main").classList.add("is_hidden"));
        }, 300);
        if (localStorage.getItem("newAstrologersScreen") || (s("main") && (s("main").style.display = "none"), this.renderNewAstrologersScreenSection()), localStorage.getItem("newAstrologersScreen")) {
          this.renderNewBtnBack();
          let o = setInterval(() => {
            s(".subscription_plan_page main.is_hidden") && (clearInterval(o), s(".subscription_plan_page main").classList.remove("is_hidden"));
          }, 300);
        }
      } else
        console.log(this.checkPage()), (i = s(".new_btn_back")) == null || i.remove(), (a = s(".new_astrologers_screen")) == null || a.remove(), e.classList.contains("subscription_plan_page") && e.classList.remove("subscription_plan_page");
    }
    // subscription-plan
    renderNewAstrologersScreenSection() {
      l("main").then((e) => {
        const n = e;
        s(".new_astrologers_screen") || n.insertAdjacentHTML("beforebegin", b);
      }), this.clickNewContinueBtnHandler(), this.clickRadioBtnsHandler(), l(".new_astrologers_screen").then((e) => {
        _("exp_new_astro_visibility_02", "Screen view", "View", "palm readers");
      });
    }
    clickNewContinueBtnHandler() {
      l("[data-nextBtn]").then((e) => {
        const n = p("[data-nextBtn]"), i = s(".subscription_plan_page main");
        n.forEach((a) => {
          a.addEventListener("click", () => {
            var r;
            a.classList.contains("new_continue_btn") ? _("exp_new_astro_button_03", `Continue - ${this.storage}`, "Click", "palm readers") : _("exp_new_astro_button_05", "Chose later", "Click", "palm readers"), i.style.display = "block", i.classList.contains("is_hidden") && i.classList.remove("is_hidden"), (r = s(".new_astrologers_screen")) == null || r.remove(), localStorage.setItem("newAstrologersScreen", "yes"), this.renderNewBtnBack();
          });
        });
      });
    }
    clickRadioBtnsHandler() {
      l(".radio_item label").then((e) => {
        p(".radio_item label").forEach((i) => {
          i.addEventListener("click", (a) => {
            var r, o;
            this.storage = a.currentTarget.previousElementSibling.getAttribute("value").trim(), localStorage.setItem("newAstrologerValue", this.storage), _("exp_new_astro_button_06", this.storage, "Click", "palm readers"), (r = s(".new_continue_btn")) != null && r.classList.contains("is_disabled") && ((o = s(".new_continue_btn")) == null || o.classList.remove("is_disabled"));
          });
        });
      });
    }
    renderNewBtnBack() {
      l("header button").then((e) => {
        const n = e;
        setTimeout(() => {
          s(".new_btn_back") || n.insertAdjacentHTML("beforebegin", `<div class="new_btn_back">${u.arrowLeftHeaderIcon}</div>`), this.clickNewBtnBackHandler();
        }, 500);
      });
    }
    clickNewBtnBackHandler() {
      l(".new_btn_back").then((e) => {
        const n = e, i = s(".subscription_plan_page main");
        n.addEventListener("click", () => {
          _("exp_new_astro_button_04", "Back", "Click", "palm readers"), localStorage.getItem("newAstrologersScreen") && localStorage.removeItem("newAstrologersScreen"), i.style.display = "none", i.classList.add("is_hidden"), this.renderNewAstrologersScreenSection(), n.remove();
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
        for (let i of n) {
          window.location.pathname !== this.lastPath && (this.lastPath = window.location.pathname, this.checkPage() === "paywall" && this.allFunctionsInitHandler(), this.checkPage() === "subscriptionPlan" && !s("body").classList.contains("subscription_plan_page") && this.allFunctionsInitHandler());
          for (let a of i.removedNodes)
            a instanceof HTMLElement && a.tagName === "MAIN" && this.checkPage() === "email" && this.allFunctionsInitHandler();
        }
      }).observe(s("body"), { childList: !0, subtree: !0 });
    }
  }
  new m(h);
})();
//# sourceMappingURL=index.js.map
