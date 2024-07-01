(function() {
  "use strict";
  const c = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), console.log(`Event: ${n} | ${e} | ${t} | ${i}`);
  }, d = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, o = (n) => document.querySelector(n), h = (n) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", n, "variant_1"));
    }, 1e3);
  };
  function s(n) {
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
    let e, t, i, r, m = (n == null ? void 0 : n.delay) || 50;
    function a() {
      e = null, r = 0;
    }
    return a(), function() {
      return t = window.scrollY, e != null && (r = t - e), e = t, clearTimeout(i), i = setTimeout(a, m), r;
    };
  })();
  const _ = (
    /* HTML */
    `
  <div class="hero_section ver_a">
    <div class="hero_section_content">
      <h2 class="hero_section_title">
        Your score is <br /><span class="accent_color_blue">better</span> than
        <span class="accent_color_blue">54%</span> of Cerebrum IQ users!
      </h2>
      <p class="hero_section_subtitle">Continue to obtain your certificate</p>
      <!-- <button class="hero_btn">Get My IQ Certificate Now!</button> -->
    </div>
    <div class="hero_section_image"><img src="https://conversionratestore.github.io/projects/cerebrum/img/hero_ver_a.png" alt="certificate" /></div>
  </div>
`
  ), l = `.is_desk {
  display: block;
}
@media (max-width: 768px) {
  .is_desk {
    display: none;
  }
}

.is_mob {
  display: none;
}
@media (max-width: 768px) {
  .is_mob {
    display: block;
  }
}

.hero_section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto 64px;
  padding-left: 2rem;
  padding-right: 2rem;
}
@media (max-width: 768px) {
  .hero_section {
    flex-direction: column-reverse;
    margin-bottom: 32px;
    padding: 0;
  }
}
.hero_section .accent_color_blue {
  color: #0070f0;
}
.hero_section .hero_section_content {
  flex: 0 1 565px;
}
@media (max-width: 768px) {
  .hero_section .hero_section_content {
    flex: unset;
    margin-top: 24px;
  }
}
.hero_section .hero_section_content .hero_section_title {
  color: #11181c;
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  margin: 0;
}
@media (max-width: 1071px) {
  .hero_section .hero_section_content .hero_section_title {
    font-size: 44px;
  }
}
@media (max-width: 768px) {
  .hero_section .hero_section_content .hero_section_title {
    max-width: 335px;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin: 0 auto;
  }
  .hero_section .hero_section_content .hero_section_title br {
    display: none;
  }
}
.hero_section .hero_section_content .hero_section_subtitle {
  color: #52525b;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  margin: 16px 0 24px;
}
@media (max-width: 1071px) {
  .hero_section .hero_section_content .hero_section_subtitle {
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .hero_section .hero_section_content .hero_section_subtitle {
    max-width: 303px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    margin: 8px auto 16px;
  }
}
.hero_section .hero_section_content .hero_btn,
.hero_section .hero_section_content button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  max-width: 360px;
  width: 100%;
  border-radius: 8px;
  background: #0d766e;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin: 24px 0 0;
  transition: all 0.8s ease 0s;
  cursor: pointer;
}
@media (max-width: 768px) {
  .hero_section .hero_section_content .hero_btn,
  .hero_section .hero_section_content button {
    margin-top: 16px;
    width: 100%;
    max-width: 100%;
  }
}
.hero_section .hero_section_image {
  width: 100%;
}
.hero_section.ver_a .hero_section_image {
  max-width: 508px;
  border-radius: 11px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
}
.hero_section.ver_b .hero_section_image {
  max-width: 472px;
}
.hero_section.ver_c .hero_section_image {
  max-width: 500px;
  border: 1px solid #fff;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
}

#top {
  padding: 64px 0 64px;
  background: linear-gradient(206deg, #eff8ff 0.76%, #e0ebfb 48.1%, #f6f9fc 96.4%);
}
@media (max-width: 768px) {
  #top {
    padding: 16px 16px 32px;
  }
}
#top > div.mx-auto.flex {
  display: none;
}
#top > div:nth-child(3) > section {
  padding: 0;
}/*# sourceMappingURL=main.css.map */`, p = window.innerWidth < 768 ? "mobile" : "desktop";
  class x {
    constructor(e) {
      this.device = e, this.init();
    }
    init() {
      d({ name: "Payment-Page-Improvements", dev: "SKh" }), h("exp_screen_motivation"), document.head.insertAdjacentHTML("beforeend", `<style>${l}</style>`), this.renderHerosection(), this.renderHeroBtn(), this.handleClickHeroBtn(), this.observeHeroSection(), this.handleVisibility();
    }
    renderHerosection() {
      s("#top > div.mx-auto.flex").then(() => {
        o(".hero_section") || o("#top").insertAdjacentHTML("afterbegin", _);
      });
    }
    renderHeroBtn() {
      s(".hero_section").then(() => {
        const e = o("#top div.mx-auto.flex button"), t = o(".hero_section_content");
        if (!o(".hero_section_content button") && e) {
          const i = t.closest(".ver_c") || t.closest(".ver_b") ? "Get My IQ Score Now!" : t.closest(".ver_a") ? "Get My IQ Certificate Now!" : "";
          i && (e.textContent = i, t.insertAdjacentElement("beforeend", e));
        }
      });
    }
    handleClickHeroBtn() {
      s(".hero_section").then(() => {
        const e = o("body");
        e && e.addEventListener("click", (t) => {
          if (!t.target.closest(".z-0"))
            return;
          const r = t.target.closest(".ver_a") ? "ver_1" : t.target.closest(".ver_b") ? "ver_2" : t.target.closest(".ver_c") ? "ver_3" : null;
          r && c(
            `exp_screen_motivation_button_01_${r}`,
            "Get My IQ Certificate Now!",
            "Button",
            "First screen Header"
          );
        });
      });
    }
    observeHeroSection() {
      new MutationObserver(() => {
        o(".hero_section") || this.renderHerosection(), o(".hero_section_content button") || this.renderHeroBtn();
      }).observe(o("body"), { childList: !0, subtree: !0 });
    }
    handleVisibility() {
      s(".hero_section").then((e) => {
        c("exp_screen_motivation_section_01_ver_1", "Section", "Visibility", "First screen Header");
      });
    }
  }
  new x(p);
})();
//# sourceMappingURL=index.js.map
