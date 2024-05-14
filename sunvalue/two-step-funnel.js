(function() {
  "use strict";
  const y = (r, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), console.log(`Event: ${r} | ${e} | ${t} | ${s}`);
  }, L = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (r, e, t, s, n = 1, a) => {
    let d = new IntersectionObserver(
      (u) => {
        u.forEach((c) => {
          c.isIntersecting && (d.unobserve(c.target), setTimeout(function() {
            h.observe(c.target);
          }, 1e3 * n));
        });
      },
      {
        threshold: 0.5
      }
    ), h = new IntersectionObserver((u) => {
      u.forEach((c) => {
        c.isIntersecting ? (y(
          e || `view_element_${c.target.id}`,
          t || `View element on screen (${n} sec or more)`,
          "view",
          s || c.target.id
        ), a && a(), d.unobserve(c.target)) : d.observe(c.target), h.unobserve(c.target);
      });
    });
    document.querySelectorAll(r).forEach((u) => {
      d.observe(u);
    });
  };
  function S(r) {
    return new Promise((e) => {
      if (document.querySelector(r))
        return e(document.querySelector(r));
      const t = new MutationObserver(() => {
        document.querySelector(r) && (e(document.querySelector(r)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const o = (r) => document.querySelector(r);
  (function(r = {}) {
    let e, t, s, n, a = r.delay || 50;
    function d() {
      e = null, n = 0;
    }
    return d(), function() {
      return t = window.scrollY, e !== null && (n = t - e), e = t, clearTimeout(s), s = setTimeout(d, a), n;
    };
  })();
  class _ {
    constructor() {
      this.init();
    }
    init() {
      this.setEvents();
    }
    setEvents() {
      const e = document.querySelector(".swiper-container"), t = e == null ? void 0 : e.swiper, s = o("#slider-block");
      s.querySelector(".nextSlide");
      const n = s.querySelector(".prevSlide"), a = () => {
        y("exp_2_step_funnel_survey_1_1_back", "Back", "click", "Step 1.1");
      };
      t == null || t.on("transitionEnd", () => {
        const c = t.realIndex;
        c === 1 ? (v("#estimate-homeowner", "exp_2_step_funnel_survey_1_1_view", "Full page view", "Step 1.1"), v('#estimate-homeowner [data-step="2"]', "exp_2_step_funnel_survey_1_2_view", "Full page view", "Step 1.2"), o("#estimate-bill .container").classList.contains("os-hide") && (console.log("here"), n.addEventListener("click", a))) : n.removeEventListener("click", a), c === 4 && v("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
      });
      const d = o("#homeowner-yes"), h = o("#homeowner-no"), u = o("#homeowner-back");
      d.addEventListener("click", () => {
        y("exp_2_step_funnel_survey_1_1_yes", "Yes", "click", "Step 1.1"), n.removeEventListener("click", a);
      }), h.addEventListener("click", () => {
        y("exp_2_step_funnel_survey_1_1_no", "No", "click", "Step 1.1"), n.removeEventListener("click", a);
      }), u.addEventListener("click", () => {
        y("exp_2_step_funnel_survey_1_2_back", "Back to previous step", "click", "Back to previous step");
      });
    }
  }
  const q = (
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
  ), z = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), E = ".os-secure{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;gap:13px;font-family:Noto Sans SC;font-size:14px;font-weight:700}.os-secure span{width:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}";
  class k {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container not found");
        return;
      }
      document.head.insertAdjacentHTML("beforeend", `<style>${E}</style>`), this.render();
    }
    render() {
      var t;
      const e = (
        /* HTML */
        `<div class="os-secure"><span>${z}</span>Your data is safe and secure</div>`
      );
      (t = this.container) == null || t.insertAdjacentHTML("beforeend", e);
    }
  }
  const T = (
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
    <div class="text-center" data-step="2" style="display:none">
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
  ), C = (
    /* HTML */
    `
  <div class="v-center" id="estimate-notnet">
  <div class="os-spinner">${q}</div>
    <div class="container text-center os-hide" data-os="result">
      <h1 class="title htitle">
        Our research indicates <br> that you are <br class="mobile"> a great candidate for <br> <span>No Net Cost Solar*</span>
      </h1>
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
  ), B = ".os-progress-block{position:absolute;top:70px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center}.os-progress-block .os-progress{width:100%;height:8px;max-width:500px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:80%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class A {
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
      document.head.insertAdjacentHTML("beforeend", `<style>${B}</style>`), t == null || t.insertAdjacentHTML("beforeend", e);
    }
    update(e) {
      if (e < 1 || e > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const t = (e - 1) * 25, s = document.querySelector(".os-progress-bar"), n = document.querySelector(".os-steps");
      s && (s.style.width = `${t}%`, s.setAttribute("aria-valuenow", t.toString())), n && (n.style.left = `${t}%`, n.querySelector("span").textContent = e.toString());
    }
  }
  class N {
    constructor() {
      var e;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (e = this.swiperElement) == null ? void 0 : e.swiper, this.progressBar = new A();
    }
    changeSlides() {
      const e = document.querySelector(".swiper-container"), t = document.querySelectorAll(".swiper-slide"), s = e == null ? void 0 : e.swiper, n = o("#solarForm .wrapper"), a = o(".os-navigation"), d = a.querySelector(".os-next");
      s == null || s.on("transitionEnd", () => {
        const i = s.realIndex;
        if (i === 6 && (a.style.marginTop = "80px"), e && (e.dataset.currentSlide = i.toString()), i === 0) {
          const b = o('#estimate-homeowner [data-step="1"]'), f = o('#estimate-homeowner [data-step="2"]'), m = o("#estimate-bill"), l = o("#estimate-homeowner");
          m.classList.add("os-hide"), l.classList.remove("os-hide"), b.style.display = "block", f.style.display = "none", this.progressBar.update(1);
        }
        if (i === 1 && this.progressBar.update(2), i === 2 && this.progressBar.update(4), i === 3 && this.progressBar.update(5), i === 3 ? n.dataset.background = "false" : n.dataset.background = "", i > 3 ? o(".os-progress-block").classList.add("os-hide") : o(".os-progress-block").classList.remove("os-hide"), i === 4) {
          const b = o('input[value="unknown"]'), f = b.parentElement;
          b.checked = !0;
          const m = o(".os-spinner"), l = o('[data-os="result"]'), p = setTimeout(() => {
            m.classList.add("os-hide"), l.classList.remove("os-hide");
          }, 1e3), x = setTimeout(() => {
            f && f.click(), m.classList.remove("os-hide"), l.classList.add("os-hide"), l.classList.add("os-passed");
          }, 4e3), w = o("#slider-block .prevSlide");
          l.classList.contains("os-passed") && (clearTimeout(p), clearTimeout(x), l.classList.remove("os-passed"), w == null || w.click());
        }
        i === 0 || i === 2 || i === 4 || i === 7 ? a.classList.add("os-hide") : a.classList.remove("os-hide");
      }), t.forEach((i) => {
        var b, f;
        if (i.querySelector("#estimate-zip")) {
          const m = i.querySelector(".title"), l = i.querySelector("h5"), p = i.querySelector("#calculateYourSavings"), x = i.querySelector("#zip");
          m && m.insertAdjacentHTML("afterend", '<h1 class="os-title">Enter your ZIP code</h1>'), l && (l.style.display = "none"), p && (p.textContent = "Continue"), x && x.setAttribute("placeholder", "Enter Your Zip Code"), p == null || p.addEventListener("click", () => {
            d == null || d.classList.add("os-hide");
          });
        }
        if (i.querySelector("#estimate-bill")) {
          const m = i.querySelectorAll(".title:not([data-custom])"), l = i.querySelectorAll(".sub-title"), p = (f = (b = i.closest(".swiper-container")) == null ? void 0 : b.nextElementSibling) == null ? void 0 : f.querySelector(".nextSlide");
          m.forEach((x) => {
            x && (x.textContent = "How much is your average monthly energy bill?");
          }), l.forEach((x) => {
            x && x.classList.add("os-hide");
          }), p && p.classList.add("os-hide"), this.estimateHomeownerHandler();
        }
        if (i.querySelector("#estimate-shade")) {
          const m = i.querySelector("#estimate-shade");
          m.style.display = "none";
        }
        if (i.querySelector("#estimate-map")) {
          o("#estimate-map");
          const m = i.querySelectorAll(".title"), l = i.querySelectorAll(".sub-title");
          m.forEach((p) => {
            p && (p.textContent = "Find your house location");
          }), l.forEach((p) => {
            p && (p.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new k("#estimate-map .container");
        }
        i.querySelector("#estimate-email") && (i.querySelectorAll(".sub-title.banner").forEach((l) => {
          l && l.classList.add("os-hide");
        }), new k("#estimate-email .container")), i.querySelector("#estimate-phone") && i.querySelectorAll(".sub-title").forEach((l) => {
          l && l.classList.add("os-hide");
        }), i.querySelector("#estimate-name") && new k("#estimate-name .container");
      });
      const h = o("#bill-slider .rangeslider-tooltip"), u = document.querySelector(".rangeslider__handle"), c = parseInt(u.style.left);
      h.style.left = c - 18 + "px", new MutationObserver(function(i) {
        i.forEach(function(b) {
          if (b.type === "attributes" && b.attributeName === "style") {
            const f = parseInt(u.style.left);
            h.style.left = f - 18 + "px";
          }
        });
      }).observe(u, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    estimateHomeownerHandler() {
      const e = o("#estimate-homeowner"), t = o("#estimate-bill"), s = o(".os-navigation"), n = s.querySelector(".os-next");
      t.classList.add("os-hide"), s.classList.add("os-hide");
      const a = o("#homeowner-yes"), d = o("#homeowner-no"), h = o("#homeowner-back"), u = o("#solarForm .wrapper"), c = o('#estimate-homeowner [data-step="1"]'), g = o('#estimate-homeowner [data-step="2"]'), i = o(".os-progress-block");
      a == null || a.addEventListener("click", () => {
        t.classList.remove("os-hide"), e.classList.add("os-hide"), s.classList.remove("os-hide"), n == null || n.classList.remove("os-hide"), this.progressBar.update(3);
      }), d == null || d.addEventListener("click", () => {
        c.style.display = "none", g.style.display = "block", i.classList.add("os-hide"), u.dataset.background = "false", s == null || s.classList.add("os-hide");
      }), h == null || h.addEventListener("click", () => {
        c.style.display = "block", g.style.display = "none", i.classList.remove("os-hide"), u.dataset.background = "", s == null || s.classList.remove("os-hide");
      });
    }
    addSlides() {
      var t, s, n;
      const e = document.querySelectorAll(".swiper-slide");
      (s = (t = e[1]) == null ? void 0 : t.querySelector("#estimate-bill")) == null || s.insertAdjacentHTML("afterend", T), (n = e[4]) == null || n.insertAdjacentHTML("beforeend", C);
    }
  }
  const j = '.os-navigation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;width:100%;position:absolute;justify-content:space-between;align-items:center;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);left:50%;transform:translate(-50%);bottom:50px;max-width:580px;height:-moz-min-content;height:-webkit-min-content;height:min-content;min-height:60px;max-width:580px!important;z-index:50;margin-top:26px}@media (max-width: 768px){.os-navigation{bottom:0;max-width:100%;padding:0 20px}}.os-navigation .os-next{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#83be63;border:none;border-radius:5px;min-height:56px;color:#fff;font-size:16px;font-weight:700;line-height:24px;min-width:333px;cursor:pointer}@media (max-width: 768px){.os-navigation .os-next{min-width:200px}}.os-navigation .os-next:hover{background:#8fd26a;transition:background .3s}.os-navigation .os-prev{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px;align-items:center;border:none;background:none;color:#2b3d50;text-transform:uppercase;font-weight:700;font-size:16px;padding-left:0;padding-right:0;cursor:pointer}.os-navigation .os-prev:before{content:"";display:block;width:25px;height:20px;background-image:url(/images/back.svg);background-repeat:no-repeat;background-position:left center;background-size:20px}.os-navigation .os-prev:before:hover{opacity:.8;transition:opacity .3s}';
  class M {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      const e = (
        /* HTML */
        ` <div class="os-navigation os-hide">
      <button class="os-prev">Back</button>
      <button class="os-next">Next</button>
    </div> `
      ), t = o("#slider-block");
      if (!t)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${j}</style>`), t.insertAdjacentHTML("afterend", e);
      const s = o(".os-prev"), n = o(".os-next");
      s == null || s.addEventListener("click", () => {
        const a = t.querySelector("a:first-child");
        a == null || a.click();
      }), n == null || n.addEventListener("click", () => {
        const a = t.querySelector("a:last-child");
        console.log("next", a), a == null || a.click();
      });
    }
  }
  const H = '@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}.title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px!important;font-weight:900!important;line-height:40px!important}.title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px;max-width:100%!important}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip h1:not(.os-title){display:none!important}#estimate-zip .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px;font-weight:900;line-height:40px}#estimate-zip .form-list{gap:0}#solarForm .wrapper[data-background=false]:before{background-image:none!important}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{display:none!important;margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}#estimate-name .medium-container,#estimate-phone .medium-container{max-width:580px}#estimate-phone .final-btn{width:100%}#estimate-phone input{width:100%;max-width:100%;border-radius:5px}.js-has-pseudo [csstools-has-30-2x-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist):not(does-not-exist){flex-direction:column!important}li:has(#estimate-bill){flex-direction:column!important}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px}#autoaddress,#email,#phone{border-radius:8px}#bill-slider .rangeslider-tooltip{position:absolute;top:45px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{top:90px;left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{content:"";position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:10px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important}.status-indicator{display:none!important}';
  L({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" });
  class $ {
    constructor() {
      console.log("Experiment constructor"), this.slideManager = new N(), this.init();
    }
    init() {
      location.pathname === "/save/" && S(".swiper-slide-active").then(() => {
        S(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${H}</style>`), new M(), this.slideManager.addSlides(), this.slideManager.changeSlides(), new _();
        });
      });
    }
  }
  new $();
})();
