(function() {
  "use strict";
  const d = (o, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), console.dir(`Event: ${o} | ${e} | ${t} | ${i}`);
  }, p = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (o) => document.querySelectorAll(o), n = (o) => document.querySelector(o), m = (o, e = "variant_1") => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", o, e), console.log("set", o, e));
    }, 1e3);
  };
  function l(o) {
    return new Promise((e) => {
      if (document.querySelector(o))
        return e(document.querySelector(o));
      const t = new MutationObserver(() => {
        document.querySelector(o) && (e(document.querySelector(o)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(o) {
    o = o === void 0 ? {} : o;
    let e, t, i, r, c = (o == null ? void 0 : o.delay) || 50;
    function s() {
      e = null, r = 0;
    }
    return s(), function() {
      return t = window.scrollY, e != null && (r = t - e), e = t, clearTimeout(i), i = setTimeout(s, c), r;
    };
  })();
  const _ = "https://conversionratestore.github.io/projects/envest/img/", x = (
    /* HTML */
    `
  <div class="hero_section ver_c">
    <div class="hero_section_content">
      <h2 class="hero_section_title is_desk">
        Shift Your Mindset. <br />
        <span class="absol_text">Grow Your Wealth</span> <br />
        with Envest.
      </h2>
      <h2 class="hero_section_title is_mob">
        Shift Your Mindset. <br />
        <span class="absol_text">Grow Your Wealth</span> <br />
        with Envest.
      </h2>
      <div class="hero_section_image is_mob"><img src="${_}hero_ver_с_mob.webp" alt="men poor and rich" /></div>
      <p class="hero_section_subtitle">
        Come to the <span class="accent_color_blue">bright side.</span> <br />
        Learn how to earn with
        <span class="accent_color_blue">Envest.</span>
      </p>
    </div>
    <div class="hero_section_image is_desk"><img src="${_}hero_ver_c.webp" alt="men poor and rich" /></div>
  </div>
`
  ), u = (
    /* HTML */
    ' <div class="sticky_block"></div> '
  ), f = `.is_desk {
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
  gap: 20px;
  max-width: 1248px;
  width: 100%;
  margin: 0;
  padding: 0;
}
@media (max-width: 768px) {
  .hero_section {
    flex-direction: column-reverse;
    padding: 0;
  }
}
.hero_section .accent_color_blue {
  color: #1570ef;
}
.hero_section .hero_section_content {
  flex: 0 1 560px;
}
@media (max-width: 768px) {
  .hero_section .hero_section_content {
    flex: unset;
  }
}
.hero_section .hero_section_content .hero_section_title {
  position: relative;
  color: #101828;
  font-family: "Inter", sans-serif;
  font-size: 60px;
  font-weight: 600;
  line-height: 72px;
  letter-spacing: -1.2px;
  margin: 0;
}
.hero_section .hero_section_content .hero_section_title .absol_text {
  position: relative;
  z-index: 1;
}
.hero_section .hero_section_content .hero_section_title .absol_text::before {
  content: "";
  position: absolute;
  bottom: 6px;
  left: -4px;
  width: 102.9%;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/envest/img/underline_title_2.svg) no-repeat;
  z-index: -1;
  background-size: contain;
}
@media (max-width: 1240px) {
  .hero_section .hero_section_content .hero_section_title {
    font-size: 56px;
  }
}
@media (max-width: 1215px) {
  .hero_section .hero_section_content .hero_section_title {
    font-size: 45px;
  }
  .hero_section .hero_section_content .hero_section_title .absol_text::before {
    width: 105%;
    bottom: -1px;
    left: -8px;
  }
}
@media (max-width: 768px) {
  .hero_section .hero_section_content .hero_section_title {
    max-width: 330px;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: normal;
    text-align: left;
    margin: 0 0 24px;
  }
  .hero_section .hero_section_content .hero_section_title br {
    display: none;
  }
}
@media (max-width: 768px) and (max-width: 768px) {
  .hero_section .hero_section_content .hero_section_title .absol_text::before {
    background: url(https://conversionratestore.github.io/projects/envest/img/underline_title_mob_2.svg) no-repeat;
    background-size: contain;
    left: -6px;
    height: 20px;
    bottom: -3px;
  }
}
.hero_section .hero_section_content .hero_section_subtitle {
  color: #101828;
  font-family: "Inter", sans-serif;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  border-radius: 16px;
  background: #eaecf0;
  margin: 40px 0;
  padding: 12px 20px;
}
@media (max-width: 768px) {
  .hero_section .hero_section_content .hero_section_subtitle {
    font-size: 18px;
    line-height: 26px;
    margin: 32px 0 0;
  }
}
.hero_section .hero_section_content button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  background: #0d9488;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  margin: 0;
  transition: all 0.8s ease 0s;
  cursor: pointer;
}
@media (max-width: 768px) {
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
  max-width: 616px;
}
.hero_section.ver_b .hero_section_image {
  max-width: 616px;
}
.hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
  background: url(https://conversionratestore.github.io/projects/envest/img/underline_title_2_v3.svg) no-repeat;
  background-size: contain;
  bottom: 4px;
  left: -8px;
  width: 104%;
}
@media (max-width: 1260px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    font-size: 55px;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
    bottom: 1px;
    left: -6px;
  }
}
@media (max-width: 1250px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    font-size: 53px;
  }
}
@media (max-width: 1195px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    font-size: 50px;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
    bottom: 0;
    left: -7px;
  }
}
@media (max-width: 1179px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    font-size: 48px;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
    bottom: -2px;
    left: -8px;
  }
}
@media (max-width: 1080px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    font-size: 45px;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
    bottom: -4px;
    left: -3px;
  }
}
@media (max-width: 1050px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    font-size: 40px;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
    bottom: -6px;
    left: -6px;
  }
}
@media (max-width: 768px) {
  .hero_section.ver_c .hero_section_content .hero_section_title {
    margin: 0 auto 16px;
    text-align: center;
    font-size: 30px;
    line-height: 38px;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text {
    display: inline-block;
  }
  .hero_section.ver_c .hero_section_content .hero_section_title .absol_text::before {
    background: url(https://conversionratestore.github.io/projects/envest/img/underline_title_mob_2_v3.svg) no-repeat;
    background-size: contain;
    bottom: 1px;
    width: 109%;
    left: -9px;
  }
}
.hero_section.ver_c .hero_section_content .hero_section_subtitle {
  margin-top: 16px;
}
.hero_section.ver_c .hero_section_image {
  max-width: 652px;
}
@media (max-width: 1170px) {
  .hero_section.ver_c .hero_section_image {
    max-width: 580px;
  }
}

.sticky_block {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(242, 244, 247);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);
  --tw-shadow: var(--nextui-box-shadow-medium);
  --tw-shadow-colored: var(--nextui-box-shadow-medium);
  padding: 16px;
  z-index: 100;
}
.sticky_block .sticky_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 48px;
  border-radius: 8px;
  background: #008080;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  margin: 0 auto;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  cursor: pointer;
}

main {
  position: relative;
}
main > div > section:nth-child(2) {
  padding: 96px 20px !important;
  background: #fff;
}
@media (max-width: 768px) {
  main > div > section:nth-child(2) {
    padding: 20px 20px 32px !important;
  }
}
main > div > section:nth-child(2) > div.absolute,
main > div > section:nth-child(2) > div > div.hidden {
  display: none !important;
}
main > div > section:nth-child(2) > div > div:nth-child(1) {
  margin: 0 auto !important;
  max-width: 1248px;
  width: 100%;
  flex-basis: 100%;
}
@media (max-width: 768px) {
  main > div > section:nth-child(2) > div > div:nth-child(1) {
    display: none !important;
  }
}
main > div > section:nth-child(2) > div > div:nth-child(1) > *:not(.hero_section) {
  display: none !important;
}
main > div > section:nth-child(2) > div > div:nth-child(1) > div:nth-child(1) {
  width: 0;
  padding: 0;
  flex-basis: unset;
}

footer + div {
  display: none !important;
}
@media (max-width: 768px) {
  footer {
    padding-bottom: 75px !important;
  }
}/*# sourceMappingURL=main.css.map */`, v = window.innerWidth < 768 ? "mobile" : "desktop";
  class g {
    constructor(e) {
      this.device = e, this.init();
    }
    init() {
      this.initAllFunc(), this.observeMain();
    }
    initAllFunc() {
      window.location.href.match("paywall2") && (p({ name: "Payment-Page-Improvements", dev: "SKh" }), console.log(this.device), m("exp_paywall2"), document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${f}</style>`), this.renderHeroSection(), this.renderHeroBtn(), this.handleClickHeroBtn(), this.renderStickyBlock(), this.renderStickyBtn(), this.handleClickStickyBtn(), this.handleVisibility(), this.observeNewSection());
    }
    renderHeroSection() {
      l("main > div > section:nth-child(2)").then(() => {
        let e = "beforeend";
        this.device === "mobile" && (e = "afterend"), n(".hero_section") || n("main > div > section:nth-child(2) > div >div:nth-child(1)").insertAdjacentHTML(e, x);
      });
    }
    renderHeroBtn() {
      this.device === "desktop" && l(".hero_section").then(() => {
        const e = n("main > div > section:nth-child(2) > div >div:nth-child(1) button"), t = n(".hero_section_content");
        if (!n(".hero_section_content button") && e) {
          const i = "Get My Investment Plan!";
          e.textContent = i, t.insertAdjacentElement("beforeend", e);
        }
      });
    }
    handleClickHeroBtn() {
      l(".hero_section").then(() => {
        const e = n("body");
        e && e.addEventListener("click", (t) => {
          var i, r;
          if (!((i = n(".hero_section")) != null && i.getAttribute("data-test"))) {
            if (!t.target.closest(".z-0"))
              return;
            (t.target.closest(".ver_a") && !t.target.closest(".sticky_block") ? "ver_1" : t.target.closest(".ver_b") && !t.target.closest(".sticky_block") ? "ver_2" : t.target.closest(".ver_c") && !t.target.closest(".sticky_block") ? "ver_3" : null) && d("exp_paywall2_button_01", "Get my plan", "Click", "First screen");
          }
          (r = n(".hero_section")) == null || r.setAttribute("data-test", "1"), setTimeout(() => {
            var c, s;
            (c = n(".hero_section")) != null && c.getAttribute("data-test") && ((s = n(".hero_section")) == null || s.removeAttribute("data-test"));
          }, 1e3);
        });
      });
    }
    renderStickyBlock() {
      l("main").then(() => {
        n(".sticky_block") || n("main").insertAdjacentHTML("afterbegin", u), this.device === "desktop" ? this.toggleStickyBlockVisibility(".hero_section") : this.toggleStickyBlockVisibility(".hero_section_content button");
      });
    }
    renderStickyBtn() {
      l(".sticky_block").then(() => {
        const e = n("footer + div > button"), t = n(".sticky_block");
        if (!n(".sticky_block button") && e) {
          const i = "Get My Investment Plan!";
          e.textContent = i, t.insertAdjacentElement("beforeend", e);
        }
      });
    }
    handleClickStickyBtn() {
      l(".sticky_block").then(() => {
        const e = n("body");
        e && e.addEventListener("click", (t) => {
          var i, r;
          if (!((i = n(".sticky_block")) != null && i.getAttribute("data-test"))) {
            if (!t.target.closest(".z-0"))
              return;
            (t.target.closest(".sticky_block") && !t.target.closest(".ver_a") ? "ver_1" : t.target.closest(".ver_b") && !t.target.closest(".ver_b") ? "ver_2" : t.target.closest(".ver_c") && !t.target.closest(".ver_c") ? "ver_3" : null) && d("exp_paywall2_button_02", "Get my plan", "Click", "Stiky button");
          }
          (r = n(".sticky_block")) == null || r.setAttribute("data-test", "1"), setTimeout(() => {
            var c, s;
            (c = n(".sticky_block")) != null && c.getAttribute("data-test") && ((s = n(".sticky_block")) == null || s.removeAttribute("data-test"));
          }, 1e3);
        });
      });
    }
    toggleStickyBlockVisibility(e) {
      l("#checkout-container").then(() => {
        l(".sticky_block").then(() => {
          const t = n(".sticky_block"), i = n("#checkout-container");
          let r = b(e);
          function c(h) {
            const a = h.getBoundingClientRect();
            return a.top < (window.innerHeight || document.documentElement.clientHeight) && a.bottom > 0 && a.left < (window.innerWidth || document.documentElement.clientWidth) && a.right > 0;
          }
          function s() {
            let h = !1;
            c(i) && (h = !0), r.forEach((a) => {
              c(a) && (h = !0);
            }), h ? (t.style.display = "none", n("body").classList.contains("sticky_block_visible") && n("body").classList.remove("sticky_block_visible")) : (t.style.display = "flex", n("body").classList.add("sticky_block_visible"));
          }
          s(), window.addEventListener("scroll", s), window.addEventListener("resize", s);
        });
      });
    }
    observeNewSection() {
      new MutationObserver(() => {
        n(".hero_section") || this.renderHeroSection(), n(".stickyBlock") || this.renderStickyBlock(), n(".sticky_block button") || this.renderStickyBtn(), n(".hero_section_content button") || this.renderHeroBtn();
      }).observe(n("body"), { childList: !0, subtree: !0 });
    }
    observeMain() {
      new MutationObserver((t) => {
        var i, r, c, s;
        for (let h of t) {
          for (let a of h.removedNodes)
            a instanceof HTMLElement && a.tagName === "HEADER" && (console.log(a), this.initAllFunc());
          for (let a of h.addedNodes)
            a instanceof HTMLElement && a.tagName === "HEADER" && (console.log(a), (i = n(".hero_section")) == null || i.remove(), (r = n(".stickyBlock")) == null || r.remove(), (c = n(".crs_style")) == null || c.remove(), (s = n(".crs_inter")) == null || s.remove());
        }
      }).observe(n("body"), { childList: !0, subtree: !0 });
    }
    handleVisibility() {
      l(".hero_section").then((e) => {
      });
    }
  }
  new g(v);
})();
//# sourceMappingURL=index.js.map
