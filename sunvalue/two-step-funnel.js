(function() {
  "use strict";
  const S = (d, t, o, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: d,
      event_desc: t,
      event_type: o,
      event_loc: s
    }), console.log(`Event: ${d} | ${t} | ${o} | ${s}`);
  }, E = ({ name: d, dev: t }) => {
    console.log(
      `%c EXP: ${d} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, L = (d, t, o, s, a = 1, b) => {
    let p = new IntersectionObserver(
      (h) => {
        h.forEach((r) => {
          r.isIntersecting && (p.unobserve(r.target), setTimeout(function() {
            c.observe(r.target);
          }, 1e3 * a));
        });
      },
      {
        threshold: 0.5
      }
    ), c = new IntersectionObserver((h) => {
      h.forEach((r) => {
        r.isIntersecting ? (S(
          t || `view_element_${r.target.id}`,
          o || `View element on screen (${a} sec or more)`,
          "view",
          s || r.target.id
        ), b && b(), p.unobserve(r.target)) : p.observe(r.target), c.unobserve(r.target);
      });
    });
    document.querySelectorAll(d).forEach((h) => {
      p.observe(h);
    });
  };
  function q(d) {
    return new Promise((t) => {
      if (document.querySelector(d))
        return t(document.querySelector(d));
      const o = new MutationObserver(() => {
        document.querySelector(d) && (t(document.querySelector(d)), o.disconnect());
      });
      o.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const i = (d) => document.querySelector(d), T = (d) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", d, "variant_1"));
    }, 1e3);
  };
  (function(d = {}) {
    let t, o, s, a, b = d.delay || 50;
    function p() {
      t = null, a = 0;
    }
    return p(), function() {
      return o = window.scrollY, t !== null && (a = o - t), t = o, clearTimeout(s), s = setTimeout(p, b), a;
    };
  })();
  class j {
    constructor() {
      this.init();
    }
    init() {
      this.setEvents();
    }
    setEvents() {
      const t = document.querySelector(".swiper-container"), o = t == null ? void 0 : t.swiper;
      i(".os-navigation").querySelector(".os-next");
      const a = document.querySelector(".os-prev"), b = () => {
        S("exp_2_step_funnel_survey_1_1_back", "Back", "button", "Step 1.1");
      };
      o == null || o.on("transitionEnd", () => {
        const r = o.realIndex;
        r === 1 && i("#estimate-bill").classList.contains("os-hide") && (i('#estimate-homeowner [data-step="2"]').classList.contains("os-hide") && L("#estimate-homeowner", "exp_2_step_funnel_survey_1_1_view", "Full page view", "Step 1.1"), a.addEventListener("click", b)), r === 4 && L("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
      });
      const p = i("#homeowner-yes"), c = i("#homeowner-no"), h = i("#homeowner-back");
      p.addEventListener("click", () => {
        S("exp_2_step_funnel_survey_1_1_yes", "Yes", "button", "Step 1.1"), a.removeEventListener("click", b);
      }), c.addEventListener("click", () => {
        S("exp_2_step_funnel_survey_1_1_no", "No", "button", "Step 1.1"), i('#estimate-homeowner [data-step="1"]').classList.contains("os-hide") && L(
          '#estimate-homeowner [data-step="2"]',
          "exp_2_step_funnel_survey_1_2_view",
          "Full page view",
          "Step 1.2"
        );
      }), h.addEventListener("click", () => {
        S("exp_2_step_funnel_survey_1_2_back", "Back to previous step", "button", "Step 1.2");
      });
    }
  }
  const C = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  preserveAspectRatio="xMidYMid"
  width="349"
  height="349"
  style="shape-rendering: auto; display: block; background: transparent;"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g>
    <g transform="rotate(0 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-1.5624999999999998s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(45 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-1.3392857142857142s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(90 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-1.1160714285714284s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(135 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-0.8928571428571428s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-0.6696428571428571s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(225 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-0.4464285714285714s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(270 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="-0.2232142857142857s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(315 50 50)">
      <rect fill="#83be63" height="16" width="7" ry="2.56" rx="2.56" y="22" x="46.5">
        <animate
          repeatCount="indefinite"
          begin="0s"
          dur="1.7857142857142856s"
          keyTimes="0;1"
          values="1;0"
          attributeName="opacity"
        ></animate>
      </rect>
    </g>
    <g></g>
  </g>
  <!-- [ldio] generated by https://loading.io -->
</svg>`
  ), N = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), A = `.os-secure {
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
      document.head.insertAdjacentHTML("beforeend", `<style>${A}</style>`), this.render();
    }
    render() {
      var o;
      const t = (
        /* HTML */
        `<div class="os-secure"><span>${N}</span>Your data is safe and secure</div>`
      );
      (o = this.container) == null || o.insertAdjacentHTML("beforeend", t);
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
  ), M = (
    /* HTML */
    `
  <div class="v-center" id="estimate-notnet">
    <div class="container text-center" data-os="result">
      <div class="os-spinner">${C}</div>

      <h1 class="title htitle">
        Our research indicates <br class="desktop" />
        that you are a great candidate for <br />
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
  ), I = ".os-progress-block{position:absolute;top:100px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;z-index:1}@media (max-width: 768px){.os-progress-block{top:88px;padding:0 20px}}.os-progress-block .os-progress{width:100%;height:8px;max-width:540px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:100%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class $ {
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
      document.head.insertAdjacentHTML("beforeend", `<style>${I}</style>`), o == null || o.insertAdjacentHTML("beforeend", t);
    }
    update(t) {
      if (t < 1 || t > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const o = (t - 1) * 25 + (t === 1 ? 1 : 0), s = document.querySelector(".os-progress-bar"), a = document.querySelector(".os-steps");
      s && (s.style.width = `${o}%`, s.setAttribute("aria-valuenow", o.toString())), a && (a.style.left = t === 1 ? `${o}%` : `calc(${o}% - 31px)`, a.querySelector("span").textContent = t.toString());
    }
  }
  class B {
    constructor() {
      var t;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (t = this.swiperElement) == null ? void 0 : t.swiper, this.progressBar = new $();
    }
    changeSlides() {
      const t = document.querySelector(".swiper-container"), o = document.querySelectorAll(".swiper-slide"), s = t == null ? void 0 : t.swiper, a = i("#solarForm .wrapper"), p = i(".os-navigation").querySelector(".os-next"), c = document.querySelector(".os-prev"), h = () => {
        this.progressBar.update(2);
      };
      s == null || s.on("transitionEnd", () => {
        const e = s.realIndex;
        a.dataset.currentSlide = e.toString();
        const w = i(".swiper-slide-active"), f = (w == null ? void 0 : w.clientHeight) || 0;
        if (p.style.top = `${f}px`, e === 1 && (i("#estimate-bill").classList.contains("os-hide") || (p.style.top = `${f + 40}px`)), t && (t.dataset.currentSlide = e.toString()), e === 0 && this.progressBar.update(1), e === 1 && (c == null || c.removeEventListener("click", h), i("#estimate-homeowner").classList.contains("os-hide") ? (this.progressBar.update(3), p == null || p.classList.remove("os-hide"), c == null || c.addEventListener("click", h)) : this.progressBar.update(2)), e === 2 && (c == null || c.removeEventListener("click", h), this.progressBar.update(4)), e === 3 && this.progressBar.update(5), e === 3 ? a.dataset.background = "false" : a.dataset.background = "", e === 7 ? a.dataset.background = "opacity" : a.dataset.background = "", e > 3 ? i(".os-progress-block").classList.add("os-hide") : i(".os-progress-block").classList.remove("os-hide"), e === 4) {
          const l = i('input[value="no_shade"]'), x = l.parentElement;
          l.checked = !0;
          const n = i('[data-os="result"]'), m = setTimeout(() => {
            x && x.click(), n.classList.add("os-hide"), n.classList.add("os-passed");
          }, 8e3), k = i("#slider-block .prevSlide");
          n.classList.contains("os-passed") && (clearTimeout(m), n.classList.remove("os-passed"), n.classList.remove("os-hide"), k == null || k.click());
        }
      }), o.forEach((e) => {
        var w, f;
        if (e.querySelector("#estimate-zip")) {
          const l = e.querySelector(".title"), x = e.querySelector("h5"), n = e.querySelector("#calculateYourSavings"), m = e.querySelector("#zip"), k = e.querySelector("#zip-error");
          k && (k.textContent = ""), l && l.insertAdjacentHTML("afterend", '<h1 class="os-title">Enter your zip code</h1>'), x && (x.style.display = "none"), n && (n.textContent = "Continue"), m && m.setAttribute("placeholder", "Enter Your Zip Code"), n == null || n.addEventListener("click", () => {
            p == null || p.classList.add("os-hide");
          });
        }
        if (e.querySelector("#estimate-bill")) {
          const l = e.querySelectorAll(".title:not([data-custom])"), x = e.querySelectorAll(".sub-title"), n = (f = (w = e.closest(".swiper-container")) == null ? void 0 : w.nextElementSibling) == null ? void 0 : f.querySelector(".nextSlide");
          l.forEach((m) => {
            m && (m.innerHTML = /* HTML */
            `How much is your <br class="desktop" />
              average monthly energy bill?`);
          }), x.forEach((m) => {
            m && m.classList.add("os-hide");
          }), n && n.classList.add("os-hide"), this.estimateHomeownerHandler();
        }
        if (e.querySelector("#estimate-shade")) {
          const l = e.querySelector("#estimate-shade");
          l.style.display = "none";
        }
        if (e.querySelector("#estimate-map")) {
          i("#estimate-map");
          const l = e.querySelectorAll(".title"), x = e.querySelectorAll(".sub-title");
          l.forEach((n) => {
            n && (n.textContent = "Find your house location");
          }), x.forEach((n) => {
            n && (n.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new z("#estimate-map .container");
        }
        if (e.querySelector("#estimate-email")) {
          const l = e.querySelectorAll(".sub-title.banner"), x = e.querySelectorAll(".title"), n = e.querySelectorAll(".sub-title");
          x.forEach((m) => {
            m && (m.innerHTML = /* HTML */
            `What is your <br class="mobile" />
              email address?`);
          }), n.forEach((m) => {
            m && (m.textContent = "We'll send you participation details");
          }), l.forEach((m) => {
            m && m.classList.add("os-hide");
          }), new z("#estimate-email .container");
        }
        if (e.querySelector("#estimate-phone")) {
          const l = e.querySelector("#phone"), x = e.querySelectorAll(".title");
          x && x.forEach((n) => {
            n && (n.innerHTML = /* HTML */
            `What is the best number <br class="desktop" />
                to reach you at if you qualify?`);
          }), l && l.setAttribute("placeholder", "Enter your phone number");
        }
        if (e.querySelector("#estimate-name")) {
          const l = e.querySelectorAll(".title"), x = e.querySelector("#fname"), n = e.querySelector("#lname");
          l && l.forEach((m) => {
            m && (m.innerHTML = /* HTML */
            "What is your name?");
          }), x && x.setAttribute("placeholder", "First Name"), n && n.setAttribute("placeholder", "Family Name"), new z("#estimate-name .container");
        }
      });
      const r = i("#bill-slider .rangeslider-tooltip");
      r.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        ' <div class="rangeslider-tooltip__arrow"></div>'
      );
      const u = document.querySelector(".rangeslider__handle"), y = i(".rangeslider-tooltip__arrow"), v = parseInt(u.style.left);
      r.style.left = v - 18 + "px", y && (y.style.left = v + 5 + "px"), new MutationObserver(function(e) {
        e.forEach(function(w) {
          if (w.type === "attributes" && w.attributeName === "style") {
            const f = parseInt(u.style.left);
            r.style.left = f - 18 + "px", y && (y.style.left = f + 5 + "px");
            const l = r.getBoundingClientRect(), x = window.innerWidth || document.documentElement.clientWidth;
            l.right >= x - 20 && (r.style.left = x - l.width - 40 + "px"), l.left <= 20 && (r.style.left = "-1px");
          }
        });
      }).observe(u, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    estimateHomeownerHandler() {
      const t = i("#estimate-homeowner"), o = i("#estimate-bill"), s = i(".os-navigation"), a = s.querySelector(".os-next"), b = document.querySelector(".os-prev");
      o.classList.add("os-hide");
      const p = i("#homeowner-yes"), c = i("#homeowner-no"), h = i("#homeowner-back"), r = i("#solarForm .wrapper"), g = i('#estimate-homeowner [data-step="1"]'), u = i('#estimate-homeowner [data-step="2"]'), y = i(".os-progress-block");
      p == null || p.addEventListener("click", () => {
        o.classList.remove("os-hide"), t.classList.add("os-hide"), s.classList.remove("os-hide"), a == null || a.classList.remove("os-hide");
        const v = i(".swiper-slide-active"), _ = (v == null ? void 0 : v.clientHeight) || 0;
        a && (a.style.top = `${_ + 50}px`), this.progressBar.update(3);
      }), c == null || c.addEventListener("click", () => {
        g.classList.add("os-hide"), u.classList.remove("os-hide"), y.classList.add("os-hide"), b == null || b.classList.add("os-hide"), r.dataset.background = "false", s == null || s.classList.add("os-hide");
      }), h == null || h.addEventListener("click", () => {
        g.classList.remove("os-hide"), u.classList.add("os-hide"), y.classList.remove("os-hide"), b == null || b.classList.remove("os-hide"), r.dataset.background = "", s == null || s.classList.remove("os-hide");
      });
    }
    addSlides() {
      var o, s, a;
      const t = document.querySelectorAll(".swiper-slide");
      (s = (o = t[1]) == null ? void 0 : o.querySelector("#estimate-bill")) == null || s.insertAdjacentHTML("afterend", H), (a = t[4]) == null || a.insertAdjacentHTML("beforeend", M);
    }
  }
  const F = '@media (min-width: 768px){.swiper-container-android .swiper-slide,.swiper-wrapper{transform:none!important}}.os-navigation{display:none;font-family:Noto Sans SC,sans-serif}@media (max-width: 768px){.os-navigation{max-width:100%;margin-top:62px;padding:0 20px}}.os-navigation .os-next{width:100%;position:absolute;justify-content:space-between;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);left:50%;transform:translate(-50%);bottom:50px;max-width:550px!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-top:40px;z-index:50;height:56px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#83be63;font-family:inherit;border:none;border-radius:5px;min-height:56px;color:#fff;font-size:16px;font-weight:700;line-height:24px;min-width:333px;cursor:pointer;text-transform:uppercase}@media (max-width: 768px){.os-navigation .os-next{min-width:200px;max-width:-webkit-calc(100% - 40px)!important;max-width:-moz-calc(100% - 40px)!important;max-width:calc(100% - 40px)!important;margin-top:60px}}.os-navigation .os-next:hover{background:#8fd26a;transition:background .3s}.os-prev{font-family:Noto Sans SC,sans-serif;position:absolute;bottom:60px;left:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px;align-items:center;border:none;background:none;color:#2b3d50;font-weight:700;font-size:16px;padding:0;cursor:pointer;text-transform:uppercase;z-index:50}@media (max-width: 768px){.os-prev{bottom:20px;left:20px}}.os-prev:before{content:"";display:block;width:25px;height:20px;background-image:url(/images/back.svg);background-repeat:no-repeat;background-position:left center;background-size:20px}.os-prev:before:hover{opacity:.8;transition:opacity .3s}.wrapper:not([data-current-slide]) .os-prev,[data-current-slide="0"] .os-prev{display:none}.js-has-pseudo [csstools-has-1a-33-37-19-34-36-2t-3a-1m-2w-2p-37-14-w-3i-w-1a-37-3b-2x-34-2t-36-19-2r-33-32-38-2p-2x-32-2t-36-1a-2s-19-32-33-32-2t-15]:not(.does-not-exist):not(.does-not-exist){display:none}.os-prev:has(~.swiper-container.d-none){display:none}[data-current-slide="4"] .os-prev{display:none}[data-current-slide="1"] .os-next{margin-top:20px}@media (max-width: 768px){[data-current-slide="1"] .os-next{margin-top:0!important}}[data-current-slide="1"] .os-navigation,[data-current-slide="2"] .os-navigation,[data-current-slide="3"] .os-navigation,[data-current-slide="5"] .os-navigation,[data-current-slide="6"] .os-navigation,[data-current-slide="7"] .os-navigation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}[data-current-slide="2"] .os-navigation .os-next,[data-current-slide="7"] .os-navigation .os-next{display:none}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){height:24px}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{height:24px}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32-w-1a-33-37-19-34-36-2t-3a]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){padding:0}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation .os-prev{padding:0}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:240px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{top:240px!important}}@media (min-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2w-33-31-2t-33-3b-32-2t-36-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:220px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-homeowner.os-hide)~.os-navigation{top:220px!important}}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-36-33-3a-2x-2s-2t-36-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist),.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-2w-33-32-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist){margin-top:24px!important}.swiper-slide-active:has(#estimate-provider)~.os-navigation,.swiper-slide-active:has(#estimate-phone)~.os-navigation{margin-top:24px!important}}';
  class O {
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
      ), s = i("#slider-block"), a = i(".swiper-wrapper"), b = i(".wrapper");
      if (!a || !b)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${F}</style>`), a.insertAdjacentHTML("beforeend", t), b.insertAdjacentHTML("afterbegin", o);
      const p = i(".os-prev"), c = i(".os-next"), h = document.querySelector(".swiper-container"), r = h == null ? void 0 : h.swiper;
      p == null || p.addEventListener("click", () => {
        if ((r == null ? void 0 : r.realIndex) === 1) {
          const y = i("#estimate-bill"), v = i("#estimate-homeowner");
          if (v.classList.contains("os-hide")) {
            const e = i(".os-navigation").querySelector(".os-next"), w = i('#estimate-homeowner [data-step="1"]'), f = i('#estimate-homeowner [data-step="2"]');
            y.classList.add("os-hide"), v.classList.remove("os-hide"), e == null || e.classList.add("os-hide"), w.classList.remove("os-hide"), f.classList.add("os-hide");
            return;
          }
        }
        const g = i(".os-navigation");
        g.classList.add("os-hide"), setTimeout(() => {
          g.classList.remove("os-hide");
        }, 400);
        const u = s == null ? void 0 : s.querySelector("a:first-child");
        setTimeout(() => {
          u == null || u.click();
        }, 0);
      }), c == null || c.addEventListener("click", () => {
        const g = s == null ? void 0 : s.querySelector("a:last-child"), u = i(".os-navigation");
        u.classList.add("os-hide"), setTimeout(() => {
          u.classList.remove("os-hide");
        }, 400), setTimeout(() => {
          g == null || g.click();
        }, 0);
      });
    }
  }
  const W = '.site-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;height:56px;margin-top:12px;padding:0}@media (max-width: 768px){.site-header{margin-top:10px;padding:15px 0}}.wrapper{align-items:flex-start;padding-top:200px!important;min-height:100dvh!important;max-height:100dvh!important}.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:150px!important}@media (max-width: 768px){.wrapper[data-current-slide="4"],.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:78px!important}}@media (max-width: 768px){.wrapper{padding-top:105px!important}}.wrapper h1,.wrapper h2.title{margin:0 auto 40px!important}@media (max-width: 768px){.wrapper h1,.wrapper h2.title{margin-bottom:24px!important}.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1d-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1e-1a-38-2x-38-30-2t-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){margin-bottom:16px!important}.wrapper h1:has(~h4:not(.os-hide):not(:empty)),.wrapper h2.title:has(~h4:not(.os-hide):not(:empty)){margin-bottom:16px!important}}.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1d-1m-2w-2p-37-14-17-w-1a-33-37-19-2q-2v-19-38-2x-38-30-2t-15]:not(.does-not-exist):not(does-not-exist){margin-bottom:10px!important}.wrapper h1:has(+.os-bg-title){margin-bottom:10px!important}.small-container,.medium-container{max-width:540px!important}.medium-container{margin-top:16px}.swiper-container{overflow:visible!important;overflow-x:clip!important}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}.swiper-slide{height:-moz-min-content!important;height:-webkit-min-content!important;height:min-content!important}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}input{font-size:16px!important}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}#estimate-homeowner [data-step="2"] h1{margin-bottom:16px!important}@media (max-width: 768px){#estimate-homeowner [data-step="2"] h1{margin-bottom:16px!important}}#estimate-homeowner h5{margin-top:16px;margin-bottom:40px;font-size:16px}@media (max-width: 768px){#estimate-homeowner h5{margin-bottom:24px}}#estimate-homeowner h5 strong{font-weight:400}h4{margin-bottom:24px!important;font-size:16px!important;text-height:24px!important;font-weight:400!important}#estimate-notnet .small-container{margin-top:43px}#estimate-notnet .small-container p{font-size:12px;line-height:16px}.swiper-slide .title{color:#2b3d50;font-family:Noto Sans SC;font-size:48px!important;font-weight:700!important;line-height:58px!important;letter-spacing:-1px;margin-left:auto!important;margin-right:auto!important}@media (max-width: 768px){.swiper-slide .title{font-size:32px!important;line-height:40px!important}}.swiper-slide .title.os-bg-title{overflow:hidden}.swiper-slide .title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px;max-width:100%!important;margin-top:0!important}@media (max-width: 768px){ul.form-list{gap:16px}}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip h1:not(.os-title){display:none!important}#estimate-zip .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:48px;font-weight:700;line-height:58px}@media (max-width: 768px){#estimate-zip .os-title{font-size:32px;line-height:40px}}#estimate-zip #zip{height:56px}#estimate-zip #zip-error:empty{display:none}#estimate-zip .form-list{gap:40px}@media (max-width: 768px){#estimate-zip .form-list{gap:16px}}#estimate-bill h2.hide-in-mobile{margin-bottom:40px!important}#estimate-bill .container{padding-bottom:20px}#estimate-bill .custom-radio{display:none}#estimate-bill #js-rangeslider-0:before{background:-webkit-gradient(linear,left top,right top,from(rgba(7,128,65,1)),color-stop(25%,rgba(95,170,25,1)),color-stop(50%,rgba(255,193,4,1)),color-stop(75%,rgba(251,115,6,1)),to(rgba(243,29,29,1)))!important;background:-webkit-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:-moz-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:linear-gradient(90deg,#078041,#5faa19,#ffc104,#fb7306,#f31d1d)!important}#estimate-name .form-list{gap:8px}@media (max-width: 768px){#estimate-name .form-list{gap:0}}#solarForm .wrapper:before{opacity:.6}@media (min-width: 768px){#solarForm .wrapper:before{opacity:1;background-image:url(https://conversionratestore.github.io/projects/sunvalue/img/desktop-bg.webp)}}@media (max-width: 768px){#solarForm .wrapper[data-background=opacity]:before{opacity:.1!important}}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{display:none!important;margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}#estimate-name .medium-container,#estimate-phone .medium-container{max-width:580px}#estimate-phone h2{margin-bottom:24px!important}@media (max-width: 768px){#estimate-phone h2{margin-bottom:16px!important}}#estimate-phone h4.hide-in-mobile{font-size:18px!important;margin-bottom:40px!important}#estimate-phone h4show-in-mobile{margin-bottom:16px!important}#estimate-phone #phone-error:empty{display:none}#estimate-phone .final-btn{margin-top:40px!important;padding:0!important;width:100%}@media (max-width: 768px){#estimate-phone .final-btn{margin-top:16px!important}}#estimate-phone input{width:100%;max-width:100%;border-radius:5px}.js-has-pseudo [csstools-has-30-2x-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist):not(does-not-exist){flex-direction:column!important}li:has(#estimate-bill){flex-direction:column!important}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;padding-top:0!important;gap:24px}@media (max-width: 768px){#estimate-provider .custom-radio{gap:16px}}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px;line-height:24px!important;font-size:16px!important;text-transform:uppercase!important;font-weight:700!important;font-family:Noto Sans SC,sans-serif!important}#autoaddress,#email,#phone{border-radius:8px}#bill-slider{margin:0 auto;padding-top:20px}#bill-slider .rangeslider-tooltip__arrow{position:absolute;top:56px;left:166px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255);z-index:20}@media (max-width: 768px){#bill-slider .rangeslider-tooltip__arrow{left:100px}}#bill-slider .rangeslider-tooltip{position:absolute;top:64px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-8px;height:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:-5px}#bill-slider .sliderLegend .sliderLegendItem--start,#bill-slider .sliderLegend .sliderLegendItem--end{margin-bottom:14px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;transition:opacity .3s;margin-bottom:19px}.os-spinner svg{width:50px;height:50px}@media (max-width: 768px){.os-spinner{margin-bottom:50px}}.os-spinner.os-hide-o{visibility:collapse;height:0;opacity:0}[data-os=result].os-hide-o{opacity:0;visibility:collapse;height:0}[data-os=result]{opacity:1;transition:opacity .3s}[data-os=result] .os-spinner{width:50px;height:50px;margin-left:auto;margin-right:auto}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important;border:none!important}#companies>div:hover{background:#8fd26a;transition:background .3s}.status-indicator{display:none!important}.error-msg,.error-msg.vsmall-container.mb-20{margin:0!important;height:16px!important}.error-msg:not(:empty),.error-msg.vsmall-container.mb-20:not(:empty){margin:10px 0!important;height:auto!important}.header-right{display:none}.site-header{margin-top:0!important;padding-top:27px;min-height:56px;height:auto}.site-header.fixed{padding-top:27px}@media (max-width: 768px){.site-header,.site-header.fixed{padding-top:15px}}.site-footer{border-top:none!important}@media screen and (max-width: 575px){.banner-slider .swiper-slide,.banner-slider .swiper-slide.one{padding:25px 0 0!important}}';
  E({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" }), T("exp_2_step_funnel");
  class P {
    constructor() {
      this.slideManager = new B(), this.init();
    }
    init() {
      location.pathname === "/save/" && q(".swiper-slide-active").then(() => {
        q(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${W}</style>`), document.title = "Solar Incentive Program", new O(), this.slideManager.addSlides(), this.slideManager.changeSlides(), new j();
        });
      });
    }
  }
  new P();
})();
