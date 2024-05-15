(function() {
  "use strict";
  const w = (p, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: p,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), console.log(`Event: ${p} | ${e} | ${t} | ${s}`);
  }, _ = ({ name: p, dev: e }) => {
    console.log(
      `%c EXP: ${p} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (p, e, t, s, a = 1, h) => {
    let l = new IntersectionObserver(
      (d) => {
        d.forEach((n) => {
          n.isIntersecting && (l.unobserve(n.target), setTimeout(function() {
            c.observe(n.target);
          }, 1e3 * a));
        });
      },
      {
        threshold: 0.5
      }
    ), c = new IntersectionObserver((d) => {
      d.forEach((n) => {
        n.isIntersecting ? (w(
          e || `view_element_${n.target.id}`,
          t || `View element on screen (${a} sec or more)`,
          "view",
          s || n.target.id
        ), h && h(), l.unobserve(n.target)) : l.observe(n.target), c.unobserve(n.target);
      });
    });
    document.querySelectorAll(p).forEach((d) => {
      l.observe(d);
    });
  };
  function L(p) {
    return new Promise((e) => {
      if (document.querySelector(p))
        return e(document.querySelector(p));
      const t = new MutationObserver(() => {
        document.querySelector(p) && (e(document.querySelector(p)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const i = (p) => document.querySelector(p);
  (function(p = {}) {
    let e, t, s, a, h = p.delay || 50;
    function l() {
      e = null, a = 0;
    }
    return l(), function() {
      return t = window.scrollY, e !== null && (a = t - e), e = t, clearTimeout(s), s = setTimeout(l, h), a;
    };
  })();
  class q {
    constructor() {
      this.init();
    }
    init() {
      this.setEvents();
    }
    setEvents() {
      const e = document.querySelector(".swiper-container"), t = e == null ? void 0 : e.swiper, s = i(".os-navigation");
      s.querySelector(".os-next");
      const a = s.querySelector(".os-prev"), h = () => {
        w("exp_2_step_funnel_survey_1_1_back", "Back", "button", "Step 1.1");
      };
      t == null || t.on("transitionEnd", () => {
        const n = t.realIndex;
        n === 1 && i("#estimate-bill").classList.contains("os-hide") && (i('#estimate-homeowner [data-step="2"]').classList.contains("os-hide") && v("#estimate-homeowner", "exp_2_step_funnel_survey_1_1_view", "Full page view", "Step 1.1"), a.addEventListener("click", h)), n === 4 && v("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
      });
      const l = i("#homeowner-yes"), c = i("#homeowner-no"), d = i("#homeowner-back");
      l.addEventListener("click", () => {
        w("exp_2_step_funnel_survey_1_1_yes", "Yes", "button", "Step 1.1"), a.removeEventListener("click", h);
      }), c.addEventListener("click", () => {
        w("exp_2_step_funnel_survey_1_1_no", "No", "button", "Step 1.1"), i('#estimate-homeowner [data-step="1"]').classList.contains("os-hide") && v(
          '#estimate-homeowner [data-step="2"]',
          "exp_2_step_funnel_survey_1_2_view",
          "Full page view",
          "Step 1.2"
        );
      }), d.addEventListener("click", () => {
        w("exp_2_step_funnel_survey_1_2_back", "Back to previous step", "button", "Step 1.2");
      });
    }
  }
  const T = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
  width="200"
  height="200"
  style="shape-rendering: auto; display: block; background: transparent;"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g>
    <g transform="rotate(0 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.875s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(45 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.75s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(90 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.625s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(135 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.375s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(225 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.25s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(270 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.125s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(315 50 50)">
      <rect x="47" y="24" rx="3" ry="3.12" width="6" height="12" fill="#83be63">
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g></g>
  </g>
</svg>`
  ), E = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), C = ".os-secure{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;margin-top:2px;justify-content:center;align-items:center;gap:13px;font-family:Noto Sans SC;font-size:14px;font-weight:700}.os-secure span{width:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}";
  class k {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container not found");
        return;
      }
      document.head.insertAdjacentHTML("beforeend", `<style>${C}</style>`), this.render();
    }
    render() {
      var t;
      const e = (
        /* HTML */
        `<div class="os-secure"><span>${E}</span>Your data is safe and secure</div>`
      );
      (t = this.container) == null || t.insertAdjacentHTML("beforeend", e);
    }
  }
  const j = (
    /* HTML */
    `
  <div class="container" id="estimate-homeowner">
    <div class="text-center" data-step="1">
      <h1 class="title htitle" data-custom>Are you homeowner?</h1>
      <h4 class="sub-title mb-20 location-text"></h4>

      <div class="small-container">
        <ul class="form-list">
          <li>
            <button type="button" class="btn default btn-with-loader" id="homeowner-yes">Yes</button>
          </li>
          <li>
            <button type="button" class="btn default btn-with-loader" id="homeowner-no">No</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center os-hide" data-step="2">
      <h1 class="title htitle" data-custom>To explore solar options, you <br class="desktop"> must be a homeowner</h1>
      <h4 class="sub-title mb-20 location-text"></h4>
      <h5><strong>If you chose the wrong answer, go back to the previous step</strong></h5>
      <div class="small-container">
        <ul class="form-list">
          <li>
            <button type="button" class="btn default btn-with-loader" id="homeowner-back">Back to Previous Step</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
`
  ), N = (
    /* HTML */
    `
  <div class="v-center" id="estimate-notnet">
  <div class="os-spinner">${T}</div>
    <div class="container text-center os-hide" data-os="result">
      <h1 class="title htitle">
      Our research indicates <br class="desktop"> that you are <br class="mobile"> a great candidate for <br>
      </h1>
      <h2 class="title htitle"><span>No Net Cost Solar*</span></h2>
      <h4 class="sub-title mb-20 location-text"></h4>

      <div class="small-container">
        <p>
          *No net cost solar implies that savings and incentives might offset costs associated with the cost of the
          panels and installation. These are subject to change and vary by location, system size, and energy usage. No
          net cost solar does not mean free
        </p>
      </div>
    </div>
  </div>
`
  ), A = ".os-progress-block{position:absolute;top:92px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center}@media (max-width: 768px){.os-progress-block{top:88px;padding:0 20px}}.os-progress-block .os-progress{width:100%;height:8px;max-width:540px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:100%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class H {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="os-progress-block">
        <div class="os-progress">
          <div
            class="os-progress-bar"
            role="progressbar"
            style="width: 1%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div class="os-steps" style="left: 1%"><span>1</span>/5</div>
        </div>
      </div>
    `
      ), t = document.querySelector("#header-with-id");
      document.head.insertAdjacentHTML("beforeend", `<style>${A}</style>`), t == null || t.insertAdjacentHTML("beforeend", e);
    }
    update(e) {
      if (e < 1 || e > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const t = (e - 1) * 25 + (e === 1 ? 1 : e === 5 ? -5 : 0), s = document.querySelector(".os-progress-bar"), a = document.querySelector(".os-steps");
      s && (s.style.width = `${t}%`, s.setAttribute("aria-valuenow", t.toString())), a && (a.style.left = `${t}%`, a.querySelector("span").textContent = e.toString());
    }
  }
  class M {
    constructor() {
      var e;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (e = this.swiperElement) == null ? void 0 : e.swiper, this.progressBar = new H();
    }
    changeSlides() {
      const e = document.querySelector(".swiper-container"), t = document.querySelectorAll(".swiper-slide"), s = e == null ? void 0 : e.swiper, a = i("#solarForm .wrapper"), h = i(".os-navigation"), l = h.querySelector(".os-next");
      s == null || s.on("transitionEnd", () => {
        const o = s.realIndex;
        a.dataset.currentSlide = o.toString();
        const u = i(".swiper-slide-active"), g = u == null ? void 0 : u.clientHeight;
        if (h.style.top = `${g}px`, e && (e.dataset.currentSlide = o.toString()), o === 0 && this.progressBar.update(1), o === 1 && (this.progressBar.update(2), i("#estimate-homeowner").classList.contains("os-hide") && (l == null || l.classList.remove("os-hide"))), o === 2 && this.progressBar.update(4), o === 3 && this.progressBar.update(5), o === 3 ? a.dataset.background = "false" : a.dataset.background = "", o === 7 ? a.dataset.background = "opacity" : a.dataset.background = "", o > 3 ? i(".os-progress-block").classList.add("os-hide") : i(".os-progress-block").classList.remove("os-hide"), o === 4) {
          const m = i('input[value="unknown"]'), b = m.parentElement;
          m.checked = !0;
          const r = i(".os-spinner"), x = i('[data-os="result"]'), y = setTimeout(() => {
            r.classList.add("os-hide"), x.classList.remove("os-hide");
          }, 1e3), z = setTimeout(() => {
            b && b.click(), r.classList.remove("os-hide"), x.classList.add("os-hide"), x.classList.add("os-passed");
          }, 4e3), S = i("#slider-block .prevSlide");
          x.classList.contains("os-passed") && (clearTimeout(y), clearTimeout(z), x.classList.remove("os-passed"), S == null || S.click());
        }
      }), t.forEach((o) => {
        var u, g;
        if (o.querySelector("#estimate-zip")) {
          const m = o.querySelector(".title"), b = o.querySelector("h5"), r = o.querySelector("#calculateYourSavings"), x = o.querySelector("#zip"), y = o.querySelector("#zip-error");
          y && (y.textContent = ""), m && m.insertAdjacentHTML("afterend", '<h1 class="os-title">Enter your zip code</h1>'), b && (b.style.display = "none"), r && (r.textContent = "Continue"), x && x.setAttribute("placeholder", "Enter Your Zip Code"), r == null || r.addEventListener("click", () => {
            l == null || l.classList.add("os-hide");
          });
        }
        if (o.querySelector("#estimate-bill")) {
          const m = o.querySelectorAll(".title:not([data-custom])"), b = o.querySelectorAll(".sub-title"), r = (g = (u = o.closest(".swiper-container")) == null ? void 0 : u.nextElementSibling) == null ? void 0 : g.querySelector(".nextSlide");
          m.forEach((x) => {
            x && (x.innerHTML = /* HTML */
            'How much is<br class="desktop" />your latest monthly energy bill?');
          }), b.forEach((x) => {
            x && x.classList.add("os-hide");
          }), r && r.classList.add("os-hide"), this.estimateHomeownerHandler();
        }
        if (o.querySelector("#estimate-shade")) {
          const m = o.querySelector("#estimate-shade");
          m.style.display = "none";
        }
        if (o.querySelector("#estimate-map")) {
          i("#estimate-map");
          const m = o.querySelectorAll(".title"), b = o.querySelectorAll(".sub-title");
          m.forEach((r) => {
            r && (r.textContent = "Find your house location");
          }), b.forEach((r) => {
            r && (r.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new k("#estimate-map .container");
        }
        if (o.querySelector("#estimate-email")) {
          const m = o.querySelectorAll(".sub-title.banner");
          o.querySelectorAll(".title").forEach((r) => {
            r && (r.innerHTML = /* HTML */
            'What is your <br class="mobile"> email address?');
          }), m.forEach((r) => {
            r && r.classList.add("os-hide");
          }), new k("#estimate-email .container");
        }
        if (o.querySelector("#estimate-phone"), o.querySelector("#estimate-name")) {
          const m = o.querySelectorAll(".title"), b = o.querySelector("#fname"), r = o.querySelector("#lname");
          m && m.forEach((x) => {
            x && (x.innerHTML = /* HTML */
            "What is your name?");
          }), b && b.setAttribute("placeholder", "First Name"), r && r.setAttribute("placeholder", "Family Name"), new k("#estimate-name .container");
        }
      });
      const c = i("#bill-slider .rangeslider-tooltip"), d = document.querySelector(".rangeslider__handle"), n = parseInt(d.style.left);
      c.style.left = n - 18 + "px", new MutationObserver(function(o) {
        o.forEach(function(u) {
          if (u.type === "attributes" && u.attributeName === "style") {
            const g = parseInt(d.style.left);
            c.style.left = g - 18 + "px";
          }
        });
      }).observe(d, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    estimateHomeownerHandler() {
      const e = i("#estimate-homeowner"), t = i("#estimate-bill"), s = i(".os-navigation"), a = s.querySelector(".os-next");
      t.classList.add("os-hide");
      const h = i("#homeowner-yes"), l = i("#homeowner-no"), c = i("#homeowner-back"), d = i("#solarForm .wrapper"), n = i('#estimate-homeowner [data-step="1"]'), f = i('#estimate-homeowner [data-step="2"]'), o = i(".os-progress-block");
      h == null || h.addEventListener("click", () => {
        t.classList.remove("os-hide"), e.classList.add("os-hide"), s.classList.remove("os-hide"), a == null || a.classList.remove("os-hide"), this.progressBar.update(3);
      }), l == null || l.addEventListener("click", () => {
        n.classList.add("os-hide"), f.classList.remove("os-hide"), o.classList.add("os-hide"), d.dataset.background = "false", s == null || s.classList.add("os-hide");
      }), c == null || c.addEventListener("click", () => {
        n.classList.remove("os-hide"), f.classList.add("os-hide"), o.classList.remove("os-hide"), d.dataset.background = "", s == null || s.classList.remove("os-hide");
      });
    }
    addSlides() {
      var t, s, a;
      const e = document.querySelectorAll(".swiper-slide");
      (s = (t = e[1]) == null ? void 0 : t.querySelector("#estimate-bill")) == null || s.insertAdjacentHTML("afterend", j), (a = e[4]) == null || a.insertAdjacentHTML("beforeend", N);
    }
  }
  const B = '.os-navigation{display:none;font-family:Noto Sans SC,sans-serif;width:100%;position:absolute;justify-content:space-between;align-items:center;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);left:50%;transform:translate(-50%);bottom:50px;max-width:540px!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-top:24px;z-index:50;height:56px}@media (max-width: 768px){.os-navigation{max-width:100%;margin-top:62px;padding:0 20px}}.os-navigation .os-next{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#83be63;font-family:inherit;border:none;border-radius:5px;min-height:56px;color:#fff;font-size:16px;font-weight:700;line-height:24px;min-width:333px;cursor:pointer;text-transform:uppercase}@media (max-width: 768px){.os-navigation .os-next{min-width:200px}}.os-navigation .os-next:hover{background:#8fd26a;transition:background .3s}.os-navigation .os-prev{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;font-family:inherit;gap:8px;align-items:center;border:none;background:none;color:#2b3d50;font-weight:700;font-size:16px;padding-left:0;padding-right:0;cursor:pointer;text-transform:uppercase}.os-navigation .os-prev:before{content:"";display:block;width:25px;height:20px;background-image:url(/images/back.svg);background-repeat:no-repeat;background-position:left center;background-size:20px}.os-navigation .os-prev:before:hover{opacity:.8;transition:opacity .3s}[data-current-slide="1"] .os-navigation,[data-current-slide="2"] .os-navigation,[data-current-slide="3"] .os-navigation,[data-current-slide="5"] .os-navigation,[data-current-slide="6"] .os-navigation,[data-current-slide="7"] .os-navigation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}[data-current-slide="2"] .os-navigation .os-next,[data-current-slide="7"] .os-navigation .os-next{display:none}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:240px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{top:240px!important}}@media (min-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2w-33-31-2t-33-3b-32-2t-36-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:220px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-homeowner.os-hide)~.os-navigation{top:220px!important}}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-36-33-3a-2x-2s-2t-36-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist),.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-2w-33-32-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist){margin-top:24px!important}.swiper-slide-active:has(#estimate-provider)~.os-navigation,.swiper-slide-active:has(#estimate-phone)~.os-navigation{margin-top:24px!important}}';
  class $ {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="os-navigation">
        <button type="button" class="os-prev">Back</button>
        <button type="button" class="os-next">Next</button>
      </div>
    `
      ), t = i("#slider-block"), s = i(".swiper-wrapper");
      if (!s)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${B}</style>`), s.insertAdjacentHTML("beforeend", e);
      const a = i(".os-prev"), h = i(".os-next"), l = document.querySelector(".swiper-container"), c = l == null ? void 0 : l.swiper;
      a == null || a.addEventListener("click", () => {
        if ((c == null ? void 0 : c.realIndex) === 1) {
          const n = i("#estimate-bill"), f = i("#estimate-homeowner");
          if (f.classList.contains("os-hide")) {
            const u = i(".os-navigation").querySelector(".os-next"), g = i('#estimate-homeowner [data-step="1"]'), m = i('#estimate-homeowner [data-step="2"]');
            n.classList.add("os-hide"), f.classList.remove("os-hide"), u == null || u.classList.add("os-hide"), g.classList.remove("os-hide"), m.classList.add("os-hide");
            return;
          }
        }
        if ((c == null ? void 0 : c.realIndex) === 3) {
          const n = i(".os-navigation");
          n.classList.add("os-hide"), setTimeout(() => {
            n.classList.remove("os-hide");
          }, 400);
        }
        const d = t == null ? void 0 : t.querySelector("a:first-child");
        setTimeout(() => {
          d == null || d.click();
        }, 0);
      }), h == null || h.addEventListener("click", () => {
        const d = t == null ? void 0 : t.querySelector("a:last-child");
        if ((c == null ? void 0 : c.realIndex) === 1) {
          const n = i(".os-navigation");
          n.classList.add("os-hide"), setTimeout(() => {
            n.classList.remove("os-hide");
          }, 400);
        }
        setTimeout(() => {
          d == null || d.click();
        }, 0);
      });
    }
  }
  const I = '.site-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;height:56px;margin-top:12px;padding:0}@media (max-width: 768px){.site-header{margin-top:10px;padding:15px 0}}.wrapper{align-items:flex-start;padding-top:149px!important}.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:-webkit-calc(56px + 12px + 24px)!important;padding-top:-moz-calc(56px + 12px + 24px)!important;padding-top:92px!important}@media (max-width: 768px){.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:-webkit-calc(56px + 10px + 54px)!important;padding-top:-moz-calc(56px + 10px + 54px)!important;padding-top:120px!important}}@media (max-width: 768px){.wrapper{padding-top:136px!important}}.small-container,.medium-container{max-width:540px!important}.medium-container{margin-top:16px}.swiper-container{overflow:visible!important;overflow-x:clip!important}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}.swiper-slide{height:-moz-min-content!important;height:-webkit-min-content!important;height:min-content!important}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}input{font-size:16px!important}h2.hide-in-mobile{margin:0!important}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}#estimate-homeowner h5{margin-top:16px;margin-bottom:24px;font-size:16px}#estimate-homeowner h5 strong{font-weight:400}h4{margin-top:16px!important;margin-bottom:24px!important;font-size:16px!important;text-height:24px!important;font-weight:400!important}#estimate-notnet .small-container{margin-top:43px}#estimate-notnet .small-container p{font-size:12px;line-height:16px}.swiper-slide .title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px!important;font-weight:900!important;line-height:40px!important;letter-spacing:-1px;max-width:540px;margin-left:auto!important;margin-right:auto!important}.swiper-slide .title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px;max-width:100%!important}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip h1:not(.os-title){display:none!important}#estimate-zip .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px;font-weight:900;line-height:40px}#estimate-zip .form-list{gap:0}#estimate-homeowner h1{margin:0}#estimate-homeowner .form-list{margin-top:24px!important}#estimate-bill h2.hide-in-mobile{margin-bottom:24px!important}#estimate-bill .container{padding-bottom:20px}#estimate-bill #js-rangeslider-0:before{background:-webkit-gradient(linear,left top,right top,from(rgba(7,128,65,1)),color-stop(25%,rgba(95,170,25,1)),color-stop(50%,rgba(255,193,4,1)),color-stop(75%,rgba(251,115,6,1)),to(rgba(243,29,29,1)))!important;background:-webkit-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:-moz-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:linear-gradient(90deg,#078041,#5faa19,#ffc104,#fb7306,#f31d1d)!important}#estimate-name .form-list{margin-top:16px!important;gap:8px}#solarForm .wrapper[data-background=false]:before{background-image:none!important}@media (max-width: 768px){#solarForm .wrapper[data-background=opacity]:before{opacity:.1!important}}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{display:none!important;margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}#estimate-name .medium-container,#estimate-phone .medium-container{max-width:580px}#estimate-phone .final-btn{width:100%}#estimate-phone input{width:100%;max-width:100%;border-radius:5px}.js-has-pseudo [csstools-has-30-2x-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist):not(does-not-exist){flex-direction:column!important}li:has(#estimate-bill){flex-direction:column!important}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px}#autoaddress,#email,#phone{border-radius:8px}#bill-slider .rangeslider-tooltip{position:absolute;top:45px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{top:90px;left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{content:"";position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:10px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important;border:none!important}#companies>div:hover{background:#8fd26a;transition:background .3s}.status-indicator{display:none!important}.error-msg,.error-msg.vsmall-container.mb-20{margin:0!important;height:16px!important}.error-msg:not(:empty),.error-msg.vsmall-container.mb-20:not(:empty){margin:10px 0!important;height:auto!important}.final-btn{padding-top:8px!important}.header-right{display:none}';
  _({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" });
  class F {
    constructor() {
      this.slideManager = new M(), this.init();
    }
    init() {
      location.pathname === "/save/" && L(".swiper-slide-active").then(() => {
        L(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${I}</style>`), document.title = "Solar Incentive Program", new $(), this.slideManager.addSlides(), this.slideManager.changeSlides(), new q();
        });
      });
    }
  }
  new F();
})();
