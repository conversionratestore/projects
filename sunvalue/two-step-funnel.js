(function() {
  "use strict";
  const v = (m, t, e, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: m,
      event_desc: t,
      event_type: e,
      event_loc: s
    }), console.log(`Event: ${m} | ${t} | ${e} | ${s}`);
  }, j = ({ name: m, dev: t }) => {
    console.log(
      `%c EXP: ${m} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, L = (m, t, e, s, a = 1, h) => {
    let p = new IntersectionObserver(
      (x) => {
        x.forEach((n) => {
          n.isIntersecting && (p.unobserve(n.target), setTimeout(function() {
            d.observe(n.target);
          }, 1e3 * a));
        });
      },
      {
        threshold: 0.5
      }
    ), d = new IntersectionObserver((x) => {
      x.forEach((n) => {
        n.isIntersecting ? (v(
          t || `view_element_${n.target.id}`,
          e || `View element on screen (${a} sec or more)`,
          "view",
          s || n.target.id
        ), h && h(), p.unobserve(n.target)) : p.observe(n.target), d.unobserve(n.target);
      });
    });
    document.querySelectorAll(m).forEach((x) => {
      p.observe(x);
    });
  };
  function q(m) {
    return new Promise((t) => {
      if (document.querySelector(m))
        return t(document.querySelector(m));
      const e = new MutationObserver(() => {
        document.querySelector(m) && (t(document.querySelector(m)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const i = (m) => document.querySelector(m);
  (function(m = {}) {
    let t, e, s, a, h = m.delay || 50;
    function p() {
      t = null, a = 0;
    }
    return p(), function() {
      return e = window.scrollY, t !== null && (a = e - t), t = e, clearTimeout(s), s = setTimeout(p, h), a;
    };
  })();
  class C {
    constructor() {
      this.init();
    }
    init() {
      this.setEvents();
    }
    setEvents() {
      const t = document.querySelector(".swiper-container"), e = t == null ? void 0 : t.swiper, s = i(".os-navigation");
      s.querySelector(".os-next");
      const a = s.querySelector(".os-prev"), h = () => {
        v("exp_2_step_funnel_survey_1_1_back", "Back", "button", "Step 1.1");
      };
      e == null || e.on("transitionEnd", () => {
        const n = e.realIndex;
        n === 1 && i("#estimate-bill").classList.contains("os-hide") && (i('#estimate-homeowner [data-step="2"]').classList.contains("os-hide") && L("#estimate-homeowner", "exp_2_step_funnel_survey_1_1_view", "Full page view", "Step 1.1"), a.addEventListener("click", h)), n === 4 && L("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
      });
      const p = i("#homeowner-yes"), d = i("#homeowner-no"), x = i("#homeowner-back");
      p.addEventListener("click", () => {
        v("exp_2_step_funnel_survey_1_1_yes", "Yes", "button", "Step 1.1"), a.removeEventListener("click", h);
      }), d.addEventListener("click", () => {
        v("exp_2_step_funnel_survey_1_1_no", "No", "button", "Step 1.1"), i('#estimate-homeowner [data-step="1"]').classList.contains("os-hide") && L(
          '#estimate-homeowner [data-step="2"]',
          "exp_2_step_funnel_survey_1_2_view",
          "Full page view",
          "Step 1.2"
        );
      }), x.addEventListener("click", () => {
        v("exp_2_step_funnel_survey_1_2_back", "Back to previous step", "button", "Step 1.2");
      });
    }
  }
  const N = (
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
  ), A = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), H = ".os-secure{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;margin-top:2px;justify-content:center;align-items:center;gap:13px;font-family:Noto Sans SC;font-size:14px;font-weight:700}.os-secure span{width:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.os-secure span svg{width:20px;height:20px}";
  class z {
    constructor(t) {
      this.container = document.querySelector(t), this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container not found");
        return;
      }
      document.head.insertAdjacentHTML("beforeend", `<style>${H}</style>`), this.render();
    }
    render() {
      var e;
      const t = (
        /* HTML */
        `<div class="os-secure"><span>${A}</span>Your data is safe and secure</div>`
      );
      (e = this.container) == null || e.insertAdjacentHTML("beforeend", t);
    }
  }
  const M = (
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
  ), $ = (
    /* HTML */
    `
  <div class="v-center" id="estimate-notnet">
  <div class="os-spinner">${N}</div>
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
  ), B = ".os-progress-block{position:absolute;top:114px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;z-index:1}@media (max-width: 768px){.os-progress-block{top:88px;padding:0 20px}}.os-progress-block .os-progress{width:100%;height:8px;max-width:540px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:100%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class I {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      const t = (
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
      ), e = document.querySelector("#header-with-id");
      document.head.insertAdjacentHTML("beforeend", `<style>${B}</style>`), e == null || e.insertAdjacentHTML("beforeend", t);
    }
    update(t) {
      if (t < 1 || t > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const e = (t - 1) * 25 + (t === 1 ? 1 : 0), s = document.querySelector(".os-progress-bar"), a = document.querySelector(".os-steps");
      s && (s.style.width = `${e}%`, s.setAttribute("aria-valuenow", e.toString())), a && (a.style.left = t === 1 ? `${e}%` : `calc(${e}% - 31px)`, a.querySelector("span").textContent = t.toString());
    }
  }
  class F {
    constructor() {
      var t;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (t = this.swiperElement) == null ? void 0 : t.swiper, this.progressBar = new I();
    }
    changeSlides() {
      const t = document.querySelector(".swiper-container"), e = document.querySelectorAll(".swiper-slide"), s = t == null ? void 0 : t.swiper, a = i("#solarForm .wrapper"), h = i(".os-navigation"), p = h.querySelector(".os-next"), d = h.querySelector(".os-prev"), x = () => {
        this.progressBar.update(2);
      };
      s == null || s.on("transitionEnd", () => {
        const o = s.realIndex;
        a.dataset.currentSlide = o.toString();
        const g = i(".swiper-slide-active"), f = g == null ? void 0 : g.clientHeight;
        if (h.style.top = `${f}px`, t && (t.dataset.currentSlide = o.toString()), o === 0 && this.progressBar.update(1), o === 1 && (d == null || d.removeEventListener("click", x), i("#estimate-homeowner").classList.contains("os-hide") ? (this.progressBar.update(3), p == null || p.classList.remove("os-hide"), d == null || d.addEventListener("click", x)) : this.progressBar.update(2)), o === 2 && (d == null || d.removeEventListener("click", x), this.progressBar.update(4)), o === 3 && this.progressBar.update(5), o === 3 ? a.dataset.background = "false" : a.dataset.background = "", o === 7 ? a.dataset.background = "opacity" : a.dataset.background = "", o > 3 ? i(".os-progress-block").classList.add("os-hide") : i(".os-progress-block").classList.remove("os-hide"), o === 4) {
          const r = i('input[value="unknown"]'), u = r.parentElement;
          r.checked = !0;
          const c = i(".os-spinner"), l = i('[data-os="result"]'), S = setTimeout(() => {
            c.classList.add("os-hide"), l.classList.remove("os-hide");
          }, 1e3), T = setTimeout(() => {
            u && u.click(), c.classList.remove("os-hide"), l.classList.add("os-hide"), l.classList.add("os-passed");
          }, 4e3), _ = i("#slider-block .prevSlide");
          l.classList.contains("os-passed") && (clearTimeout(S), clearTimeout(T), l.classList.remove("os-passed"), _ == null || _.click());
        }
      }), e.forEach((o) => {
        var g, f;
        if (o.querySelector("#estimate-zip")) {
          const r = o.querySelector(".title"), u = o.querySelector("h5"), c = o.querySelector("#calculateYourSavings"), l = o.querySelector("#zip"), S = o.querySelector("#zip-error");
          S && (S.textContent = ""), r && r.insertAdjacentHTML("afterend", '<h1 class="os-title">Enter your zip code</h1>'), u && (u.style.display = "none"), c && (c.textContent = "Continue"), l && l.setAttribute("placeholder", "Enter Your Zip Code"), c == null || c.addEventListener("click", () => {
            p == null || p.classList.add("os-hide");
          });
        }
        if (o.querySelector("#estimate-bill")) {
          const r = o.querySelectorAll(".title:not([data-custom])"), u = o.querySelectorAll(".sub-title"), c = (f = (g = o.closest(".swiper-container")) == null ? void 0 : g.nextElementSibling) == null ? void 0 : f.querySelector(".nextSlide");
          r.forEach((l) => {
            l && (l.innerHTML = /* HTML */
            `How much is<br class="desktop" />
              your average monthly energy bill?`);
          }), u.forEach((l) => {
            l && l.classList.add("os-hide");
          }), c && c.classList.add("os-hide"), this.estimateHomeownerHandler();
        }
        if (o.querySelector("#estimate-shade")) {
          const r = o.querySelector("#estimate-shade");
          r.style.display = "none";
        }
        if (o.querySelector("#estimate-map")) {
          i("#estimate-map");
          const r = o.querySelectorAll(".title"), u = o.querySelectorAll(".sub-title");
          r.forEach((c) => {
            c && (c.textContent = "Find your house location");
          }), u.forEach((c) => {
            c && (c.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new z("#estimate-map .container");
        }
        if (o.querySelector("#estimate-email")) {
          const r = o.querySelectorAll(".sub-title.banner"), u = o.querySelectorAll(".title"), c = o.querySelectorAll(".sub-title");
          u.forEach((l) => {
            l && (l.innerHTML = /* HTML */
            `What is your <br class="mobile" />
              email address?`);
          }), c.forEach((l) => {
            l && (l.textContent = "We'll send you participation details");
          }), r.forEach((l) => {
            l && l.classList.add("os-hide");
          }), new z("#estimate-email .container");
        }
        if (o.querySelector("#estimate-phone")) {
          const r = o.querySelector("#phone");
          r && r.setAttribute("placeholder", "Enter your mobile phone number");
        }
        if (o.querySelector("#estimate-name")) {
          const r = o.querySelectorAll(".title"), u = o.querySelector("#fname"), c = o.querySelector("#lname");
          r && r.forEach((l) => {
            l && (l.innerHTML = /* HTML */
            "What is your name?");
          }), u && u.setAttribute("placeholder", "First Name"), c && c.setAttribute("placeholder", "Family Name"), new z("#estimate-name .container");
        }
      });
      const n = i("#bill-slider .rangeslider-tooltip");
      n.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        ' <div class="rangeslider-tooltip__arrow"></div>'
      );
      const b = document.querySelector(".rangeslider__handle"), k = i(".rangeslider-tooltip__arrow"), y = parseInt(b.style.left);
      n.style.left = y - 18 + "px", k && (k.style.left = y + 5 + "px"), new MutationObserver(function(o) {
        o.forEach(function(g) {
          if (g.type === "attributes" && g.attributeName === "style") {
            const f = parseInt(b.style.left);
            n.style.left = f - 18 + "px", k && (k.style.left = f + 5 + "px");
            const r = n.getBoundingClientRect(), u = window.innerWidth || document.documentElement.clientWidth;
            r.right >= u - 20 && (n.style.left = u - r.width - 40 + "px"), console.log(r.left), r.left <= 20 && (n.style.left = "-1px");
          }
        });
      }).observe(b, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    estimateHomeownerHandler() {
      const t = i("#estimate-homeowner"), e = i("#estimate-bill"), s = i(".os-navigation"), a = s.querySelector(".os-next");
      s.querySelector(".os-back"), e.classList.add("os-hide");
      const h = i("#homeowner-yes"), p = i("#homeowner-no"), d = i("#homeowner-back"), x = i("#solarForm .wrapper"), n = i('#estimate-homeowner [data-step="1"]'), w = i('#estimate-homeowner [data-step="2"]'), b = i(".os-progress-block");
      h == null || h.addEventListener("click", () => {
        e.classList.remove("os-hide"), t.classList.add("os-hide"), s.classList.remove("os-hide"), a == null || a.classList.remove("os-hide"), this.progressBar.update(3);
      }), p == null || p.addEventListener("click", () => {
        n.classList.add("os-hide"), w.classList.remove("os-hide"), b.classList.add("os-hide"), x.dataset.background = "false", s == null || s.classList.add("os-hide");
      }), d == null || d.addEventListener("click", () => {
        n.classList.remove("os-hide"), w.classList.add("os-hide"), b.classList.remove("os-hide"), x.dataset.background = "", s == null || s.classList.remove("os-hide");
      });
    }
    addSlides() {
      var e, s, a;
      const t = document.querySelectorAll(".swiper-slide");
      (s = (e = t[1]) == null ? void 0 : e.querySelector("#estimate-bill")) == null || s.insertAdjacentHTML("afterend", M), (a = t[4]) == null || a.insertAdjacentHTML("beforeend", $);
    }
  }
  const O = '.os-navigation{display:none;font-family:Noto Sans SC,sans-serif;width:100%;position:absolute;justify-content:space-between;align-items:center;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);left:50%;transform:translate(-50%);bottom:50px;max-width:540px!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-top:24px;z-index:50;height:56px}@media (max-width: 768px){.os-navigation{max-width:100%;margin-top:62px;padding:0 20px}}.os-navigation .os-next{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#83be63;font-family:inherit;border:none;border-radius:5px;min-height:56px;color:#fff;font-size:16px;font-weight:700;line-height:24px;min-width:333px;cursor:pointer;text-transform:uppercase}@media (max-width: 768px){.os-navigation .os-next{min-width:200px}}.os-navigation .os-next:hover{background:#8fd26a;transition:background .3s}.os-navigation .os-prev{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;font-family:inherit;gap:8px;align-items:center;border:none;background:none;color:#2b3d50;font-weight:700;font-size:16px;padding-left:0;padding-right:0;cursor:pointer;text-transform:uppercase}.os-navigation .os-prev:before{content:"";display:block;width:25px;height:20px;background-image:url(/images/back.svg);background-repeat:no-repeat;background-position:left center;background-size:20px}.os-navigation .os-prev:before:hover{opacity:.8;transition:opacity .3s}[data-current-slide="1"] .os-navigation,[data-current-slide="2"] .os-navigation,[data-current-slide="3"] .os-navigation,[data-current-slide="5"] .os-navigation,[data-current-slide="6"] .os-navigation,[data-current-slide="7"] .os-navigation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}[data-current-slide="2"] .os-navigation .os-next,[data-current-slide="7"] .os-navigation .os-next{display:none}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){height:24px}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{height:24px}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32-w-1a-33-37-19-34-36-2t-3a]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){padding:0}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation .os-prev{padding:0}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:240px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{top:240px!important}}@media (min-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2w-33-31-2t-33-3b-32-2t-36-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:220px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-homeowner.os-hide)~.os-navigation{top:220px!important}}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-36-33-3a-2x-2s-2t-36-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist),.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-2w-33-32-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist){margin-top:24px!important}.swiper-slide-active:has(#estimate-provider)~.os-navigation,.swiper-slide-active:has(#estimate-phone)~.os-navigation{margin-top:24px!important}}';
  class W {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      const t = (
        /* HTML */
        `
      <div class="os-navigation">
        <button type="button" class="os-prev">Back</button>
        <button type="button" class="os-next">Next</button>
      </div>
    `
      ), e = i("#slider-block"), s = i(".swiper-wrapper");
      if (!s)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${O}</style>`), s.insertAdjacentHTML("beforeend", t);
      const a = i(".os-prev"), h = i(".os-next"), p = document.querySelector(".swiper-container"), d = p == null ? void 0 : p.swiper;
      a == null || a.addEventListener("click", () => {
        if ((d == null ? void 0 : d.realIndex) === 1) {
          const w = i("#estimate-bill"), b = i("#estimate-homeowner");
          if (b.classList.contains("os-hide")) {
            const y = i(".os-navigation").querySelector(".os-next"), E = i('#estimate-homeowner [data-step="1"]'), o = i('#estimate-homeowner [data-step="2"]');
            w.classList.add("os-hide"), b.classList.remove("os-hide"), y == null || y.classList.add("os-hide"), E.classList.remove("os-hide"), o.classList.add("os-hide");
            return;
          }
        }
        const x = i(".os-navigation");
        x.classList.add("os-hide"), setTimeout(() => {
          x.classList.remove("os-hide");
        }, 400);
        const n = e == null ? void 0 : e.querySelector("a:first-child");
        setTimeout(() => {
          n == null || n.click();
        }, 0);
      }), h == null || h.addEventListener("click", () => {
        const x = e == null ? void 0 : e.querySelector("a:last-child"), n = i(".os-navigation");
        n.classList.add("os-hide"), setTimeout(() => {
          n.classList.remove("os-hide");
        }, 400), setTimeout(() => {
          x == null || x.click();
        }, 0);
      });
    }
  }
  const P = '.site-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;height:56px;margin-top:12px;padding:0}@media (max-width: 768px){.site-header{margin-top:10px;padding:15px 0}}.wrapper{align-items:flex-start;padding-top:188px!important}.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:-webkit-calc(56px + 12px + 24px)!important;padding-top:-moz-calc(56px + 12px + 24px)!important;padding-top:92px!important}@media (max-width: 768px){.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:-webkit-calc(56px + 10px + 54px)!important;padding-top:-moz-calc(56px + 10px + 54px)!important;padding-top:120px!important}}@media (max-width: 768px){.wrapper{padding-top:105px!important}}.wrapper h1,.wrapper h2.title{margin:0 auto 24px!important}.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1d-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1e-1a-38-2x-38-30-2t-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){margin-bottom:16px!important}.wrapper h1:has(~h4:not(.os-hide):not(:empty)),.wrapper h2.title:has(~h4:not(.os-hide):not(:empty)){margin-bottom:16px!important}.small-container,.medium-container{max-width:540px!important}.medium-container{margin-top:16px}.swiper-container{overflow:visible!important;overflow-x:clip!important}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}.swiper-slide{height:-moz-min-content!important;height:-webkit-min-content!important;height:min-content!important}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}input{font-size:16px!important}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}#estimate-homeowner h5{margin-top:16px;margin-bottom:24px;font-size:16px}#estimate-homeowner h5 strong{font-weight:400}h4{margin-bottom:24px!important;font-size:16px!important;text-height:24px!important;font-weight:400!important}#estimate-notnet .small-container{margin-top:43px}#estimate-notnet .small-container p{font-size:12px;line-height:16px}.swiper-slide .title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px!important;font-weight:900!important;line-height:40px!important;letter-spacing:-1px;max-width:540px;margin-left:auto!important;margin-right:auto!important}.swiper-slide .title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px;max-width:100%!important;margin-top:0!important}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip h1:not(.os-title){display:none!important}#estimate-zip .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px;font-weight:900;line-height:40px}#estimate-zip .form-list{gap:0}#estimate-bill h2.hide-in-mobile{margin-bottom:24px!important}#estimate-bill .container{padding-bottom:20px}#estimate-bill #js-rangeslider-0:before{background:-webkit-gradient(linear,left top,right top,from(rgba(7,128,65,1)),color-stop(25%,rgba(95,170,25,1)),color-stop(50%,rgba(255,193,4,1)),color-stop(75%,rgba(251,115,6,1)),to(rgba(243,29,29,1)))!important;background:-webkit-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:-moz-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:linear-gradient(90deg,#078041,#5faa19,#ffc104,#fb7306,#f31d1d)!important}#estimate-name .form-list{gap:8px}@media (max-width: 768px){#estimate-name .form-list{gap:0}}#solarForm .wrapper:before{opacity:.6}@media (min-width: 768px){#solarForm .wrapper:before{opacity:1;background-image:url(https://conversionratestore.github.io/projects/sunvalue/img/desktop-bg.webp)}}#solarForm .wrapper[data-background=false]:before{background-image:none!important}@media (max-width: 768px){#solarForm .wrapper[data-background=opacity]:before{opacity:.1!important}}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{display:none!important;margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}#estimate-name .medium-container,#estimate-phone .medium-container{max-width:580px}#estimate-phone .final-btn{padding:0!important;width:100%}#estimate-phone input{width:100%;max-width:100%;border-radius:5px}.js-has-pseudo [csstools-has-30-2x-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist):not(does-not-exist){flex-direction:column!important}li:has(#estimate-bill){flex-direction:column!important}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;padding-top:0!important}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px;line-height:24px!important;font-size:16px!important;text-transform:uppercase!important;font-weight:700!important;font-family:Noto Sans SC,sans-serif!important}#autoaddress,#email,#phone{border-radius:8px}#bill-slider .rangeslider-tooltip__arrow{position:absolute;top:39px;left:166px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255);z-index:20}@media (max-width: 768px){#bill-slider .rangeslider-tooltip__arrow{top:83px;left:100px}}#bill-slider .rangeslider-tooltip{position:absolute;top:45px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{top:90px;left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:10px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important;border:none!important}#companies>div:hover{background:#8fd26a;transition:background .3s}.status-indicator{display:none!important}.error-msg,.error-msg.vsmall-container.mb-20{margin:0!important;height:16px!important}.error-msg:not(:empty),.error-msg.vsmall-container.mb-20:not(:empty){margin:10px 0!important;height:auto!important}.final-btn{padding-top:8px!important}.header-right{display:none}.site-header{margin-top:0!important;padding-top:27px;min-height:56px;height:auto}.site-header.fixed{padding-top:27px}@media (max-width: 768px){.site-header,.site-header.fixed{padding-top:15px}}.site-footer{border-top:none!important}@media screen and (max-width: 575px){.banner-slider .swiper-slide,.banner-slider .swiper-slide.one{padding:25px 0 0!important}}';
  j({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" });
  class V {
    constructor() {
      this.slideManager = new F(), this.init();
    }
    init() {
      location.pathname === "/save/" && q(".swiper-slide-active").then(() => {
        q(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${P}</style>`), document.title = "Solar Incentive Program", new W(), this.slideManager.addSlides(), this.slideManager.changeSlides(), new C();
        });
      });
    }
  }
  new V();
})();
