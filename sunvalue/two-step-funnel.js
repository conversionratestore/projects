(function() {
  "use strict";
  const k = (c, t, o, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: t,
      event_type: o,
      event_loc: s
    }), console.log(`Event: ${c} | ${t} | ${o} | ${s}`);
  }, j = ({ name: c, dev: t }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, L = (c, t, o, s, n = 1, b) => {
    let l = new IntersectionObserver(
      (h) => {
        h.forEach((a) => {
          a.isIntersecting && (l.unobserve(a.target), setTimeout(function() {
            m.observe(a.target);
          }, 1e3 * n));
        });
      },
      {
        threshold: 0.5
      }
    ), m = new IntersectionObserver((h) => {
      h.forEach((a) => {
        a.isIntersecting ? (k(
          t || `view_element_${a.target.id}`,
          o || `View element on screen (${n} sec or more)`,
          "view",
          s || a.target.id
        ), b && b(), l.unobserve(a.target)) : l.observe(a.target), m.unobserve(a.target);
      });
    });
    document.querySelectorAll(c).forEach((h) => {
      l.observe(h);
    });
  };
  function E(c) {
    return new Promise((t) => {
      if (document.querySelector(c))
        return t(document.querySelector(c));
      const o = new MutationObserver(() => {
        document.querySelector(c) && (t(document.querySelector(c)), o.disconnect());
      });
      o.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const e = (c) => document.querySelector(c), C = (c) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", c, "variant_1"));
    }, 1e3);
  };
  (function(c = {}) {
    let t, o, s, n, b = c.delay || 50;
    function l() {
      t = null, n = 0;
    }
    return l(), function() {
      return o = window.scrollY, t !== null && (n = o - t), t = o, clearTimeout(s), s = setTimeout(l, b), n;
    };
  })();
  class N {
    constructor() {
      this.init();
    }
    init() {
      this.setEvents();
    }
    setEvents() {
      const t = document.querySelector(".swiper-container"), o = t == null ? void 0 : t.swiper;
      e(".os-navigation").querySelector(".os-next");
      const n = document.querySelector(".os-prev"), b = () => {
        k("exp_2_step_funnel_survey_1_1_back", "Back", "button", "Step 1.1");
      };
      o == null || o.on("transitionEnd", () => {
        const a = o.realIndex;
        a === 1 && e("#estimate-bill").classList.contains("os-hide") && (e('#estimate-homeowner [data-step="2"]').classList.contains("os-hide") && L("#estimate-homeowner", "exp_2_step_funnel_survey_1_1_view", "Full page view", "Step 1.1"), n.addEventListener("click", b)), a === 4 && L("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
      });
      const l = e("#homeowner-yes"), m = e("#homeowner-no"), h = e("#homeowner-back");
      l.addEventListener("click", () => {
        k("exp_2_step_funnel_survey_1_1_yes", "Yes", "button", "Step 1.1"), n.removeEventListener("click", b);
      }), m.addEventListener("click", () => {
        k("exp_2_step_funnel_survey_1_1_no", "No", "button", "Step 1.1"), e('#estimate-homeowner [data-step="1"]').classList.contains("os-hide") && L(
          '#estimate-homeowner [data-step="2"]',
          "exp_2_step_funnel_survey_1_2_view",
          "Full page view",
          "Step 1.2"
        );
      }), h.addEventListener("click", () => {
        k("exp_2_step_funnel_survey_1_2_back", "Back to previous step", "button", "Step 1.2");
      });
    }
  }
  const A = (
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
  ), H = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), M = `.os-secure {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 2px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 13px;
  font-family: Noto Sans SC;
  font-size: 14px;
  font-weight: 700;
}
.os-secure span {
  width: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.os-secure span svg {
  width: 20px;
  height: 20px;
}`;
  class z {
    constructor(t) {
      this.container = document.querySelector(t), this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container not found");
        return;
      }
      document.head.insertAdjacentHTML("beforeend", `<style>${M}</style>`), this.render();
    }
    render() {
      var o;
      const t = (
        /* HTML */
        `<div class="os-secure"><span>${H}</span>Your data is safe and secure</div>`
      );
      (o = this.container) == null || o.insertAdjacentHTML("beforeend", t);
    }
  }
  const I = (
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
      <h1 class="title htitle" data-custom>To explore solar options, <br class="desktop"> you must be a homeowner</h1>
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
  <div class="os-spinner">${A}</div>
    <div class="container text-center os-hide" data-os="result">
      <h1 class="title htitle">
      Our research indicates <br class="desktop"> that you are a great candidate for <br>
      </h1>
      <h2 class="title htitle os-bg-title"><span>No Net Cost Solar*</span></h2>
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
  ), B = ".os-progress-block{position:absolute;top:100px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;z-index:1}@media (max-width: 768px){.os-progress-block{top:88px;padding:0 20px}}.os-progress-block .os-progress{width:100%;height:8px;max-width:540px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:100%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class F {
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
      ), o = document.querySelector("#header-with-id");
      document.head.insertAdjacentHTML("beforeend", `<style>${B}</style>`), o == null || o.insertAdjacentHTML("beforeend", t);
    }
    update(t) {
      if (t < 1 || t > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const o = (t - 1) * 25 + (t === 1 ? 1 : 0), s = document.querySelector(".os-progress-bar"), n = document.querySelector(".os-steps");
      s && (s.style.width = `${o}%`, s.setAttribute("aria-valuenow", o.toString())), n && (n.style.left = t === 1 ? `${o}%` : `calc(${o}% - 31px)`, n.querySelector("span").textContent = t.toString());
    }
  }
  class O {
    constructor() {
      var t;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (t = this.swiperElement) == null ? void 0 : t.swiper, this.progressBar = new F();
    }
    changeSlides() {
      const t = document.querySelector(".swiper-container"), o = document.querySelectorAll(".swiper-slide"), s = t == null ? void 0 : t.swiper, n = e("#solarForm .wrapper"), l = e(".os-navigation").querySelector(".os-next"), m = document.querySelector(".os-prev"), h = () => {
        this.progressBar.update(2);
      };
      s == null || s.on("transitionEnd", () => {
        const i = s.realIndex;
        n.dataset.currentSlide = i.toString();
        const w = e(".swiper-slide-active"), f = (w == null ? void 0 : w.clientHeight) || 0;
        if (l.style.top = `${f}px`, i === 1 && (e("#estimate-bill").classList.contains("os-hide") || (l.style.top = `${f + 50}px`)), t && (t.dataset.currentSlide = i.toString()), i === 0 && this.progressBar.update(1), i === 1 && (m == null || m.removeEventListener("click", h), e("#estimate-homeowner").classList.contains("os-hide") ? (this.progressBar.update(3), l == null || l.classList.remove("os-hide"), m == null || m.addEventListener("click", h)) : this.progressBar.update(2)), i === 2 && (m == null || m.removeEventListener("click", h), this.progressBar.update(4)), i === 3 && this.progressBar.update(5), i === 3 ? n.dataset.background = "false" : n.dataset.background = "", i === 7 ? n.dataset.background = "opacity" : n.dataset.background = "", i > 3 ? e(".os-progress-block").classList.add("os-hide") : e(".os-progress-block").classList.remove("os-hide"), i === 4) {
          const r = e('input[value="unknown"]'), x = r.parentElement;
          r.checked = !0;
          const d = e(".os-spinner"), p = e('[data-os="result"]'), S = setTimeout(() => {
            d.classList.add("os-hide"), p.classList.remove("os-hide");
          }, 1e3), T = setTimeout(() => {
            x && x.click(), d.classList.remove("os-hide"), p.classList.add("os-hide"), p.classList.add("os-passed");
          }, 4e3), q = e("#slider-block .prevSlide");
          p.classList.contains("os-passed") && (clearTimeout(S), clearTimeout(T), p.classList.remove("os-passed"), q == null || q.click());
        }
      }), o.forEach((i) => {
        var w, f;
        if (i.querySelector("#estimate-zip")) {
          const r = i.querySelector(".title"), x = i.querySelector("h5"), d = i.querySelector("#calculateYourSavings"), p = i.querySelector("#zip"), S = i.querySelector("#zip-error");
          S && (S.textContent = ""), r && r.insertAdjacentHTML("afterend", '<h1 class="os-title">Enter your zip code</h1>'), x && (x.style.display = "none"), d && (d.textContent = "Continue"), p && p.setAttribute("placeholder", "Enter Your Zip Code"), d == null || d.addEventListener("click", () => {
            l == null || l.classList.add("os-hide");
          });
        }
        if (i.querySelector("#estimate-bill")) {
          const r = i.querySelectorAll(".title:not([data-custom])"), x = i.querySelectorAll(".sub-title"), d = (f = (w = i.closest(".swiper-container")) == null ? void 0 : w.nextElementSibling) == null ? void 0 : f.querySelector(".nextSlide");
          r.forEach((p) => {
            p && (p.innerHTML = /* HTML */
            `How much is your <br class="desktop" />
              average monthly energy bill?`);
          }), x.forEach((p) => {
            p && p.classList.add("os-hide");
          }), d && d.classList.add("os-hide"), this.estimateHomeownerHandler();
        }
        if (i.querySelector("#estimate-shade")) {
          const r = i.querySelector("#estimate-shade");
          r.style.display = "none";
        }
        if (i.querySelector("#estimate-map")) {
          e("#estimate-map");
          const r = i.querySelectorAll(".title"), x = i.querySelectorAll(".sub-title");
          r.forEach((d) => {
            d && (d.textContent = "Find your house location");
          }), x.forEach((d) => {
            d && (d.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new z("#estimate-map .container");
        }
        if (i.querySelector("#estimate-email")) {
          const r = i.querySelectorAll(".sub-title.banner"), x = i.querySelectorAll(".title"), d = i.querySelectorAll(".sub-title");
          x.forEach((p) => {
            p && (p.innerHTML = /* HTML */
            `What is your <br class="mobile" />
              email address?`);
          }), d.forEach((p) => {
            p && (p.textContent = "We'll send you participation details");
          }), r.forEach((p) => {
            p && p.classList.add("os-hide");
          }), new z("#estimate-email .container");
        }
        if (i.querySelector("#estimate-phone")) {
          const r = i.querySelector("#phone"), x = i.querySelectorAll(".title");
          x && x.forEach((d) => {
            d && (d.innerHTML = /* HTML */
            'What is the best number  <br class="desktop"> to reach you at if you qualify?');
          }), r && r.setAttribute("placeholder", "Enter your mobile phone number");
        }
        if (i.querySelector("#estimate-name")) {
          const r = i.querySelectorAll(".title"), x = i.querySelector("#fname"), d = i.querySelector("#lname");
          r && r.forEach((p) => {
            p && (p.innerHTML = /* HTML */
            "What is your name?");
          }), x && x.setAttribute("placeholder", "First Name"), d && d.setAttribute("placeholder", "Family Name"), new z("#estimate-name .container");
        }
      });
      const a = e("#bill-slider .rangeslider-tooltip");
      a.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        ' <div class="rangeslider-tooltip__arrow"></div>'
      );
      const u = document.querySelector(".rangeslider__handle"), y = e(".rangeslider-tooltip__arrow"), v = parseInt(u.style.left);
      a.style.left = v - 18 + "px", y && (y.style.left = v + 5 + "px"), new MutationObserver(function(i) {
        i.forEach(function(w) {
          if (w.type === "attributes" && w.attributeName === "style") {
            const f = parseInt(u.style.left);
            a.style.left = f - 18 + "px", y && (y.style.left = f + 5 + "px");
            const r = a.getBoundingClientRect(), x = window.innerWidth || document.documentElement.clientWidth;
            r.right >= x - 20 && (a.style.left = x - r.width - 40 + "px"), r.left <= 20 && (a.style.left = "-1px");
          }
        });
      }).observe(u, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    estimateHomeownerHandler() {
      const t = e("#estimate-homeowner"), o = e("#estimate-bill"), s = e(".os-navigation"), n = s.querySelector(".os-next"), b = document.querySelector(".os-prev");
      o.classList.add("os-hide");
      const l = e("#homeowner-yes"), m = e("#homeowner-no"), h = e("#homeowner-back"), a = e("#solarForm .wrapper"), g = e('#estimate-homeowner [data-step="1"]'), u = e('#estimate-homeowner [data-step="2"]'), y = e(".os-progress-block");
      l == null || l.addEventListener("click", () => {
        o.classList.remove("os-hide"), t.classList.add("os-hide"), s.classList.remove("os-hide"), n == null || n.classList.remove("os-hide");
        const v = e(".swiper-slide-active"), _ = (v == null ? void 0 : v.clientHeight) || 0;
        n && (n.style.top = `${_ + 50}px`), this.progressBar.update(3);
      }), m == null || m.addEventListener("click", () => {
        g.classList.add("os-hide"), u.classList.remove("os-hide"), y.classList.add("os-hide"), b == null || b.classList.add("os-hide"), a.dataset.background = "false", s == null || s.classList.add("os-hide");
      }), h == null || h.addEventListener("click", () => {
        g.classList.remove("os-hide"), u.classList.add("os-hide"), y.classList.remove("os-hide"), b == null || b.classList.remove("os-hide"), a.dataset.background = "", s == null || s.classList.remove("os-hide");
      });
    }
    addSlides() {
      var o, s, n;
      const t = document.querySelectorAll(".swiper-slide");
      (s = (o = t[1]) == null ? void 0 : o.querySelector("#estimate-bill")) == null || s.insertAdjacentHTML("afterend", I), (n = t[4]) == null || n.insertAdjacentHTML("beforeend", $);
    }
  }
  const W = '.swiper-container-android .swiper-slide,.swiper-wrapper{transform:none!important}.os-navigation{display:none;font-family:Noto Sans SC,sans-serif}@media (max-width: 768px){.os-navigation{max-width:100%;margin-top:62px;padding:0 20px}}.os-navigation .os-next{width:100%;position:absolute;justify-content:space-between;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);left:50%;transform:translate(-50%);bottom:50px;max-width:550px!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-top:40px;z-index:50;height:56px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#83be63;font-family:inherit;border:none;border-radius:5px;min-height:56px;color:#fff;font-size:16px;font-weight:700;line-height:24px;min-width:333px;cursor:pointer;text-transform:uppercase}@media (max-width: 768px){.os-navigation .os-next{min-width:200px;max-width:-webkit-calc(100% - 40px)!important;max-width:-moz-calc(100% - 40px)!important;max-width:calc(100% - 40px)!important;margin-top:60px}}.os-navigation .os-next:hover{background:#8fd26a;transition:background .3s}.os-prev{font-family:Noto Sans SC,sans-serif;position:absolute;bottom:60px;left:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px;align-items:center;border:none;background:none;color:#2b3d50;font-weight:700;font-size:16px;padding:0;cursor:pointer;text-transform:uppercase;z-index:50}@media (max-width: 768px){.os-prev{bottom:20px;left:20px}}.os-prev:before{content:"";display:block;width:25px;height:20px;background-image:url(/images/back.svg);background-repeat:no-repeat;background-position:left center;background-size:20px}.os-prev:before:hover{opacity:.8;transition:opacity .3s}.wrapper:not([data-current-slide]) .os-prev,[data-current-slide="0"] .os-prev{display:none}[data-current-slide="4"] .os-prev{display:none}[data-current-slide="1"] .os-navigation,[data-current-slide="2"] .os-navigation,[data-current-slide="3"] .os-navigation,[data-current-slide="5"] .os-navigation,[data-current-slide="6"] .os-navigation,[data-current-slide="7"] .os-navigation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}[data-current-slide="2"] .os-navigation .os-next,[data-current-slide="7"] .os-navigation .os-next{display:none}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){height:24px}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{height:24px}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32-w-1a-33-37-19-34-36-2t-3a]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){padding:0}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation .os-prev{padding:0}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:240px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{top:240px!important}}@media (min-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2w-33-31-2t-33-3b-32-2t-36-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:220px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-homeowner.os-hide)~.os-navigation{top:220px!important}}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-36-33-3a-2x-2s-2t-36-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist),.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-2w-33-32-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist){margin-top:24px!important}.swiper-slide-active:has(#estimate-provider)~.os-navigation,.swiper-slide-active:has(#estimate-phone)~.os-navigation{margin-top:24px!important}}';
  class P {
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
        <button type="button" class="os-next">Next</button>
      </div>
    `
      ), o = (
        /* HTML */
        '<button type="button" class="os-prev">Back</button>'
      ), s = e("#slider-block"), n = e(".swiper-wrapper"), b = e(".wrapper");
      if (!n || !b)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${W}</style>`), n.insertAdjacentHTML("beforeend", t), b.insertAdjacentHTML("afterbegin", o);
      const l = e(".os-prev"), m = e(".os-next"), h = document.querySelector(".swiper-container"), a = h == null ? void 0 : h.swiper;
      l == null || l.addEventListener("click", () => {
        if ((a == null ? void 0 : a.realIndex) === 1) {
          const y = e("#estimate-bill"), v = e("#estimate-homeowner");
          if (v.classList.contains("os-hide")) {
            const i = e(".os-navigation").querySelector(".os-next"), w = e('#estimate-homeowner [data-step="1"]'), f = e('#estimate-homeowner [data-step="2"]');
            y.classList.add("os-hide"), v.classList.remove("os-hide"), i == null || i.classList.add("os-hide"), w.classList.remove("os-hide"), f.classList.add("os-hide");
            return;
          }
        }
        const g = e(".os-navigation");
        g.classList.add("os-hide"), setTimeout(() => {
          g.classList.remove("os-hide");
        }, 400);
        const u = s == null ? void 0 : s.querySelector("a:first-child");
        setTimeout(() => {
          u == null || u.click();
        }, 0);
      }), m == null || m.addEventListener("click", () => {
        const g = s == null ? void 0 : s.querySelector("a:last-child"), u = e(".os-navigation");
        u.classList.add("os-hide"), setTimeout(() => {
          u.classList.remove("os-hide");
        }, 400), setTimeout(() => {
          g == null || g.click();
        }, 0);
      });
    }
  }
  const V = '.site-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;height:56px;margin-top:12px;padding:0}@media (max-width: 768px){.site-header{margin-top:10px;padding:15px 0}}.wrapper{align-items:flex-start;padding-top:200px!important}.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:150px!important}@media (max-width: 768px){.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:78px!important}}@media (max-width: 768px){.wrapper{padding-top:105px!important}}.wrapper h1,.wrapper h2.title{margin:0 auto 40px!important}@media (max-width: 768px){.wrapper h1,.wrapper h2.title{margin-bottom:24px!important}.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1d-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1e-1a-38-2x-38-30-2t-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){margin-bottom:16px!important}.wrapper h1:has(~h4:not(.os-hide):not(:empty)),.wrapper h2.title:has(~h4:not(.os-hide):not(:empty)){margin-bottom:16px!important}}.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1d-1m-2w-2p-37-14-17-w-1a-33-37-19-2q-2v-19-38-2x-38-30-2t-15]:not(.does-not-exist):not(does-not-exist){margin-bottom:10px!important}.wrapper h1:has(+.os-bg-title){margin-bottom:10px!important}.small-container,.medium-container{max-width:540px!important}.medium-container{margin-top:16px}.swiper-container{overflow:visible!important;overflow-x:clip!important}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}.swiper-slide{height:-moz-min-content!important;height:-webkit-min-content!important;height:min-content!important}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}input{font-size:16px!important}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}#estimate-homeowner [data-step="2"] h1{margin-bottom:16px!important}@media (max-width: 768px){#estimate-homeowner [data-step="2"] h1{margin-bottom:16px!important}}#estimate-homeowner h5{margin-top:16px;margin-bottom:40px;font-size:16px}@media (max-width: 768px){#estimate-homeowner h5{margin-bottom:24px}}#estimate-homeowner h5 strong{font-weight:400}h4{margin-bottom:24px!important;font-size:16px!important;text-height:24px!important;font-weight:400!important}#estimate-notnet .small-container{margin-top:43px}#estimate-notnet .small-container p{font-size:12px;line-height:16px}.swiper-slide .title{color:#2b3d50;font-family:Noto Sans SC;font-size:48px!important;font-weight:700!important;line-height:58px!important;letter-spacing:-1px;margin-left:auto!important;margin-right:auto!important}@media (max-width: 768px){.swiper-slide .title{font-size:32px!important;line-height:40px!important}}.swiper-slide .title.os-bg-title{overflow:hidden}.swiper-slide .title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px;max-width:100%!important;margin-top:0!important}@media (max-width: 768px){ul.form-list{gap:16px}}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip h1:not(.os-title){display:none!important}#estimate-zip .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:48px;font-weight:700;line-height:58px}@media (max-width: 768px){#estimate-zip .os-title{font-size:32px;line-height:40px}}#estimate-zip #zip{height:56px}#estimate-zip #zip-error:empty{display:none}#estimate-zip .form-list{gap:40px}@media (max-width: 768px){#estimate-zip .form-list{gap:16px}}#estimate-bill h2.hide-in-mobile{margin-bottom:40px!important}#estimate-bill .container{padding-bottom:20px}#estimate-bill .custom-radio{display:none}#estimate-bill #js-rangeslider-0:before{background:-webkit-gradient(linear,left top,right top,from(rgba(7,128,65,1)),color-stop(25%,rgba(95,170,25,1)),color-stop(50%,rgba(255,193,4,1)),color-stop(75%,rgba(251,115,6,1)),to(rgba(243,29,29,1)))!important;background:-webkit-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:-moz-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:linear-gradient(90deg,#078041,#5faa19,#ffc104,#fb7306,#f31d1d)!important}#estimate-name .form-list{gap:8px}@media (max-width: 768px){#estimate-name .form-list{gap:0}}#solarForm .wrapper:before{opacity:.6}@media (min-width: 768px){#solarForm .wrapper:before{opacity:1;background-image:url(https://conversionratestore.github.io/projects/sunvalue/img/desktop-bg.webp)}}@media (max-width: 768px){#solarForm .wrapper[data-background=opacity]:before{opacity:.1!important}}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{display:none!important;margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}#estimate-name .medium-container,#estimate-phone .medium-container{max-width:580px}#estimate-phone h2{margin-bottom:24px!important}@media (max-width: 768px){#estimate-phone h2{margin-bottom:16px!important}}#estimate-phone h4.hide-in-mobile{font-size:18px!important;margin-bottom:40px!important}#estimate-phone h4show-in-mobile{margin-bottom:16px!important}#estimate-phone #phone-error:empty{display:none}#estimate-phone .final-btn{margin-top:40px!important;padding:0!important;width:100%}@media (max-width: 768px){#estimate-phone .final-btn{margin-top:16px!important}}#estimate-phone input{width:100%;max-width:100%;border-radius:5px}.js-has-pseudo [csstools-has-30-2x-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist):not(does-not-exist){flex-direction:column!important}li:has(#estimate-bill){flex-direction:column!important}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;padding-top:0!important;gap:24px}@media (max-width: 768px){#estimate-provider .custom-radio{gap:16px}}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px;line-height:24px!important;font-size:16px!important;text-transform:uppercase!important;font-weight:700!important;font-family:Noto Sans SC,sans-serif!important}#autoaddress,#email,#phone{border-radius:8px}#bill-slider{margin:0 auto;padding-top:20px}#bill-slider .rangeslider-tooltip__arrow{position:absolute;top:56px;left:166px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255);z-index:20}@media (max-width: 768px){#bill-slider .rangeslider-tooltip__arrow{left:100px}}#bill-slider .rangeslider-tooltip{position:absolute;top:64px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-8px;height:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:-5px}#bill-slider .sliderLegend .sliderLegendItem--start,#bill-slider .sliderLegend .sliderLegendItem--end{margin-bottom:14px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important;border:none!important}#companies>div:hover{background:#8fd26a;transition:background .3s}.status-indicator{display:none!important}.error-msg,.error-msg.vsmall-container.mb-20{margin:0!important;height:16px!important}.error-msg:not(:empty),.error-msg.vsmall-container.mb-20:not(:empty){margin:10px 0!important;height:auto!important}.header-right{display:none}.site-header{margin-top:0!important;padding-top:27px;min-height:56px;height:auto}.site-header.fixed{padding-top:27px}@media (max-width: 768px){.site-header,.site-header.fixed{padding-top:15px}}.site-footer{border-top:none!important}@media screen and (max-width: 575px){.banner-slider .swiper-slide,.banner-slider .swiper-slide.one{padding:25px 0 0!important}}';
  j({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" }), C("exp_2_step_funnel");
  class Y {
    constructor() {
      this.slideManager = new O(), this.init();
    }
    init() {
      location.pathname === "/save/" && E(".swiper-slide-active").then(() => {
        E(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${V}</style>`), document.title = "Solar Incentive Program", new P(), this.slideManager.addSlides(), this.slideManager.changeSlides(), new N();
        });
      });
    }
  }
  new Y();
})();
