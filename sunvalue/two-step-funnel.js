(function() {
  "use strict";
  const g = (n, e, i, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: i,
      event_loc: o
    }), console.log(`Event: ${n} | ${e} | ${i} | ${o}`);
  }, A = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (n, e, i, o, r = 1, p) => {
    let u = new IntersectionObserver(
      (m) => {
        m.forEach((a) => {
          a.isIntersecting && (u.unobserve(a.target), setTimeout(function() {
            h.observe(a.target);
          }, 1e3 * r));
        });
      },
      {
        threshold: 0.5
      }
    ), h = new IntersectionObserver((m) => {
      m.forEach((a) => {
        a.isIntersecting ? (g(
          e || `view_element_${a.target.id}`,
          i || `View element on screen (${r} sec or more)`,
          "view",
          o || a.target.id
        ), p && p(), u.unobserve(a.target)) : u.observe(a.target), h.unobserve(a.target);
      });
    });
    document.querySelectorAll(n).forEach((m) => {
      u.observe(m);
    });
  };
  function k(n) {
    return new Promise((e) => {
      if (document.querySelector(n))
        return e(document.querySelector(n));
      const i = new MutationObserver(() => {
        document.querySelector(n) && (e(document.querySelector(n)), i.disconnect());
      });
      i.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const s = (n) => document.querySelector(n);
  class $ {
    constructor() {
      this.init();
    }
    init() {
      this.setEvents();
    }
    setEvents() {
      const e = document.querySelector(".swiper-container"), i = e == null ? void 0 : e.swiper, o = s("#slider-block");
      o.querySelector(".nextSlide");
      const r = o.querySelector(".prevSlide"), p = () => {
        g("exp_2_step_funnel_survey_1_1_back", "Back", "click", "Step 1.1");
      };
      i == null || i.on("transitionEnd", () => {
        const a = i.realIndex;
        a === 1 ? (v("#estimate-homeowner", "exp_2_step_funnel_survey_1_1_view", "Full page view", "Step 1.1"), v('#estimate-homeowner [data-step="2"]', "exp_2_step_funnel_survey_1_2_view", "Full page view", "Step 1.2"), s("#estimate-bill .container").classList.contains("os-hide") && (console.log("here"), r.addEventListener("click", p))) : r.removeEventListener("click", p), a === 4 && v("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
      });
      const u = s("#homeowner-yes"), h = s("#homeowner-no"), m = s("#homeowner-back");
      u.addEventListener("click", () => {
        g("exp_2_step_funnel_survey_1_1_yes", "Yes", "click", "Step 1.1"), r.removeEventListener("click", p);
      }), h.addEventListener("click", () => {
        g("exp_2_step_funnel_survey_1_1_no", "No", "click", "Step 1.1"), r.removeEventListener("click", p);
      }), m.addEventListener("click", () => {
        g("exp_2_step_funnel_survey_1_2_back", "Back to previous step", "click", "Back to previous step");
      });
    }
  }
  const M = (
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
  ), j = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), I = ".os-secure{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;gap:13px;font-family:Noto Sans SC;font-size:14px;font-weight:700}.os-secure span{width:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}";
  class S {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container not found");
        return;
      }
      document.head.insertAdjacentHTML("beforeend", `<style>${I}</style>`), this.render();
    }
    render() {
      var i;
      const e = (
        /* HTML */
        `<div class="os-secure"><span>${j}</span>Your data is safe and secure</div>`
      );
      (i = this.container) == null || i.insertAdjacentHTML("beforeend", e);
    }
  }
  const H = (
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
      <h1 class="title htitle" data-custom>
        To qualify for <br class="mobile"> <span>No Net Cost Solar</span>,<br />
        you must be a homeowner
      </h1>
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
  ), F = (
    /* HTML */
    `
  <div class="v-center" id="estimate-notnet">
  <div class="os-spinner">${M}</div>
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
  ), O = ".os-progress-block{position:absolute;top:70px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center}.os-progress-block .os-progress{width:100%;height:8px;max-width:500px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:80%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class P {
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
      ), i = document.querySelector("#header-with-id");
      document.head.insertAdjacentHTML("beforeend", `<style>${O}</style>`), i == null || i.insertAdjacentHTML("beforeend", e);
    }
    update(e) {
      if (e < 1 || e > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const i = (e - 1) * 25, o = document.querySelector(".os-progress-bar"), r = document.querySelector(".os-steps");
      o && (o.style.width = `${i}%`, o.setAttribute("aria-valuenow", i.toString())), r && (r.style.left = `${i}%`, r.querySelector("span").textContent = e.toString());
    }
  }
  class V {
    constructor() {
      var e;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (e = this.swiperElement) == null ? void 0 : e.swiper, this.progressBar = new P();
    }
    changeSlides() {
      const e = document.querySelector(".swiper-container"), i = document.querySelectorAll(".swiper-slide"), o = e == null ? void 0 : e.swiper, r = s("#solarForm .wrapper"), p = s("#slider-block"), u = p.querySelector(".nextSlide");
      o == null || o.on("transitionEnd", () => {
        const t = o.realIndex;
        if (console.log(t), e && (e.dataset.currentSlide = t.toString()), t === 0 && this.progressBar.update(1), t === 1 && this.progressBar.update(2), t === 2 && this.progressBar.update(4), t === 3 && this.progressBar.update(5), t === 3 ? r.dataset.background = "false" : r.dataset.background = "", t > 3 ? s(".os-progress-block").classList.add("os-hide") : s(".os-progress-block").classList.remove("os-hide"), t === 4) {
          const b = s('input[value="unknown"]'), f = b.parentElement;
          b.checked = !0;
          const d = s(".os-spinner"), l = s('[data-os="result"]');
          setTimeout(() => {
            d.classList.add("os-hide"), l.classList.remove("os-hide");
          }, 1e3), setTimeout(() => {
            f && f.click();
          }, 4e3);
        }
        t === 4 || t === 7 ? p.classList.add("os-hide") : (t === 1 ? u && u.classList.add("os-hide") : u && u.classList.remove("os-hide"), p.classList.remove("os-hide"));
      }), i.forEach((t) => {
        var b, f;
        if (t.querySelector("#estimate-zip")) {
          const d = t.querySelector(".title"), l = t.querySelector("h5"), c = t.querySelector("#calculateYourSavings"), x = t.querySelector("#zip");
          d && (d.textContent = "Enter your ZIP code"), l && (l.style.display = "none"), c && (c.textContent = "Continue"), x && x.setAttribute("placeholder", "Enter Your Zip Code");
        }
        if (t.querySelector("#estimate-bill")) {
          const d = t.querySelectorAll(".title:not([data-custom])"), l = t.querySelectorAll(".sub-title"), c = (f = (b = t.closest(".swiper-container")) == null ? void 0 : b.nextElementSibling) == null ? void 0 : f.querySelector(".nextSlide");
          d.forEach((y) => {
            y && (y.textContent = "How much is your average monthly energy bill?");
          }), l.forEach((y) => {
            y && y.classList.add("os-hide");
          }), c && c.classList.add("os-hide");
          const x = s("#estimate-bill .container:not(#estimate-homeowner)"), _ = s("#slider-block");
          k("#estimate-homeowner").then((y) => {
            const z = y;
            console.log(x), x.classList.add("os-hide"), _.classList.add("os-hide");
            const L = s("#homeowner-yes"), q = s("#homeowner-no"), E = s("#homeowner-back"), B = s("#solarForm .wrapper"), C = s('#estimate-homeowner [data-step="1"]'), N = s('#estimate-homeowner [data-step="2"]'), T = s(".os-progress-block");
            L == null || L.addEventListener("click", () => {
              console.log("click"), x.classList.remove("os-hide"), z.remove(), z.classList.add("os-hide"), _.classList.remove("os-hide");
              const w = _.querySelector(".default");
              w != null && w.classList.contains("d-none") && (w.classList.add("nextSlide"), w.classList.remove("d-none")), c == null || c.classList.remove("os-hide"), this.progressBar.update(3);
            }), q == null || q.addEventListener("click", () => {
              console.log("click"), C.style.display = "none", N.style.display = "block", T.classList.add("os-hide"), B.dataset.background = "false";
            }), E == null || E.addEventListener("click", () => {
              C.style.display = "block", N.style.display = "none", T.classList.remove("os-hide"), B.dataset.background = "";
            });
          });
        }
        if (t.querySelector("#estimate-shade")) {
          const d = t.querySelector("#estimate-shade");
          d.style.display = "none";
        }
        if (t.querySelector("#estimate-map")) {
          s("#estimate-map");
          const d = t.querySelectorAll(".title"), l = t.querySelectorAll(".sub-title");
          d.forEach((c) => {
            c && (c.textContent = "Find your house location");
          }), l.forEach((c) => {
            c && (c.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new S("#estimate-map .container");
        }
        t.querySelector("#estimate-email") && (t.querySelectorAll(".sub-title.banner").forEach((l) => {
          l && l.classList.add("os-hide");
        }), new S("#estimate-email .container")), t.querySelector("#estimate-phone") && t.querySelectorAll(".sub-title").forEach((l) => {
          l && l.classList.add("os-hide");
        }), t.querySelector("#estimate-name") && new S("#estimate-name .container");
      });
      const h = s("#bill-slider .rangeslider-tooltip"), m = document.querySelector(".rangeslider__handle"), a = parseInt(m.style.left);
      h.style.left = a - 18 + "px", new MutationObserver(function(t) {
        t.forEach(function(b) {
          if (b.type === "attributes" && b.attributeName === "style") {
            const f = parseInt(m.style.left);
            h.style.left = f - 18 + "px";
          }
        });
      }).observe(m, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    addSlides() {
      var i, o, r;
      const e = document.querySelectorAll(".swiper-slide");
      (o = (i = e[1]) == null ? void 0 : i.querySelector("#estimate-bill")) == null || o.insertAdjacentHTML("beforeend", H), (r = e[4]) == null || r.insertAdjacentHTML("beforeend", F);
    }
  }
  const Y = '@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}.title{color:#2b3d50;font-family:Noto Sans SC;font-size:32px!important;font-weight:900!important;line-height:40px!important}.title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px;max-width:100%!important}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip .form-list{gap:0}#solarForm .wrapper[data-background=false]:before{background-image:none!important}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important;visibility:hidden!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px}#autoaddress,#email,#phone{border-radius:8px}#bill-slider .rangeslider-tooltip{position:absolute;top:45px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{top:90px;left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{content:"";position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:10px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important}';
  A({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" });
  class D {
    constructor() {
      console.log("Experiment constructor"), this.slideManager = new V(), this.init();
    }
    init() {
      location.pathname === "/save/" && k(".swiper-slide-active").then(() => {
        k(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${Y}</style>`), this.slideManager.addSlides(), this.slideManager.changeSlides(), new $();
        });
      });
    }
  }
  new D();
})();
