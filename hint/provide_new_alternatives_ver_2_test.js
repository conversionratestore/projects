(function() {
  "use strict";
  const l = (t, n, e, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: i
    }), console.dir(`Event: ${t} | ${n} | ${e} | ${i}`);
  }, p = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, d = (t) => document.querySelectorAll(t), o = (t) => document.querySelector(t), u = (t, n = "variant_1") => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, n), console.log("set", t, n));
    }, 1e3);
  };
  function r(t) {
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
    let n, e, i, s, c = (t == null ? void 0 : t.delay) || 50;
    function a() {
      n = null, s = 0;
    }
    return a(), function() {
      return e = window.scrollY, n != null && (s = e - n), n = e, clearTimeout(i), i = setTimeout(a, c), s;
    };
  })();
  const h = () => (
    /* HTML */
    ' <div class="new_btn_skip ver_c">Opt for the minimum cost</div> '
  ), b = `.crs_subscriptionPlan header button[aria-label="Go back"] {
  display: none !important;
}
.crs_subscriptionPlan main > .pt-4 {
  padding: 16px !important;
}
.crs_subscriptionPlan main > .pt-4 > .gap-4 {
  gap: 16px !important;
}
.crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-3 {
  gap: 16px !important;
}
.crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-3 > p.font-semibold {
  color: #121620;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
.crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-3 > p.text-gray-600 {
  color: #4a567a;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
}
.crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-4 {
  gap: 20px !important;
}
.crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-4 > .text-gray-700 {
  color: #4a567a;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.crs_subscriptionPlan div.sticky {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
}
.crs_subscriptionPlan div.sticky > button {
  width: 100%;
  max-width: 100%;
}
.crs_subscriptionPlan .new_btn_skip {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #066fde;
  color: #2b71d7;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}/*# sourceMappingURL=main.css.map */`, f = window.innerWidth < 768 ? "mobile" : "desktop";
  class w {
    constructor(n) {
      this.device = n, this.lastPath = window.location.pathname, this.init();
    }
    init() {
      p({ name: "Provide new alternatives", dev: "SKh" }), u("exp_hyp5", "variant_2"), this.observeMain(), this.loadFontsAndStyles(), this.allFunctionsInitHandler();
    }
    observeMain() {
      new MutationObserver((e) => {
        for (let i of e)
          window.location.pathname !== this.lastPath && (this.lastPath = window.location.pathname, this.allFunctionsInitHandler());
      }).observe(o("body"), { childList: !0, subtree: !0 });
    }
    loadFontsAndStyles() {
      o(".crs_inter") || document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), o(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${b}</style>`);
    }
    // allFunctions
    allFunctionsInitHandler() {
      var n;
      this.checkPage() === "subscriptionPlan" ? (console.log("subscriptionPlan"), this.addClassToBody(), this.renderNewBtnSkip()) : (console.log(this.checkPage()), this.removeClassFromBody(), (n = o(".new_btn_skip")) == null || n.remove());
    }
    checkPage() {
      const n = window.location.href;
      return n.includes("paywall") ? "paywall" : n.includes("subscription-plan") ? "subscriptionPlan" : n.includes("email") ? "email" : "other";
    }
    addClassToBody() {
      r('[alt="arrow-top"]').then((n) => {
        o("body").classList.add("crs_subscriptionPlan"), l("exp_new_astro_visibility_02", "Screen view", "View", "Try hint for 1 week");
      });
    }
    removeClassFromBody() {
      const n = o("body");
      n.classList.contains("crs_subscriptionPlan") && n.classList.remove("crs_subscriptionPlan");
    }
    renderNewBtnSkip() {
      r('.crs_subscriptionPlan [alt="arrow-top"]').then((n) => {
        r(".bg-gray-100").then((e) => {
          const i = o(".crs_subscriptionPlan div.sticky");
          o(".new_btn_skip") || i.insertAdjacentHTML("beforeend", h()), this.addClickhandlerOnNewBtnSkip();
        });
      });
    }
    addClickhandlerOnNewBtnSkip() {
      r(".new_btn_skip").then((n) => {
        const e = o(".new_btn_skip"), i = o("div.sticky > button"), s = d(".bg-gray-100")[0], c = o(".crs_subscriptionPlan main > .pt-4 > .gap-4 > .gap-4");
        e.addEventListener("click", (a) => {
          a.target && a.target.classList.contains("ver_b") ? l("exp_new_astro_button_01", "Skip and start reading for just $1", "Click", "Try hint for 1 week") : l("exp_new_astro_button_02", "Opt for the minimum cost", "Click", "Try hint for 1 week"), c && (c.style.opacity = "0", s == null || s.click(), i == null || i.click());
        });
      });
    }
  }
  r("body").then((t) => {
    new w(f);
  });
})();
//# sourceMappingURL=index.js.map