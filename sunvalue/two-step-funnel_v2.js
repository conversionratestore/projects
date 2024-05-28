(function() {
  "use strict";
  const E = (a, t, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: t,
      event_type: e,
      event_loc: o
    }), console.log(`Event: ${a} | ${t} | ${e} | ${o}`);
  }, j = ({ name: a, dev: t }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, N = (a, t, e, o, r = 1, f) => {
    let h = new IntersectionObserver(
      (b) => {
        b.forEach((p) => {
          p.isIntersecting && (h.unobserve(p.target), setTimeout(function() {
            l.observe(p.target);
          }, 1e3 * r));
        });
      },
      {
        threshold: 0.5
      }
    ), l = new IntersectionObserver((b) => {
      b.forEach((p) => {
        p.isIntersecting ? (E(
          t || `view_element_${p.target.id}`,
          e || `View element on screen (${r} sec or more)`,
          "view",
          o || p.target.id
        ), f && f(), h.unobserve(p.target)) : h.observe(p.target), l.unobserve(p.target);
      });
    });
    document.querySelectorAll(a).forEach((b) => {
      h.observe(b);
    });
  };
  function L(a) {
    return new Promise((t) => {
      if (document.querySelector(a))
        return t(document.querySelector(a));
      const e = new MutationObserver(() => {
        document.querySelector(a) && (t(document.querySelector(a)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const s = (a) => document.querySelector(a), A = (a) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", a, "variant_1"));
    }, 1e3);
  };
  (function(a = {}) {
    let t, e, o, r, f = a.delay || 50;
    function h() {
      t = null, r = 0;
    }
    return h(), function() {
      return e = window.scrollY, t !== null && (r = e - t), t = e, clearTimeout(o), o = setTimeout(h, f), r;
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
      const t = document.querySelector(".swiper-container"), e = t == null ? void 0 : t.swiper;
      s(".os-navigation"), e == null || e.on("transitionEnd", () => {
        e.realIndex === 4 && N("#estimate-notnet", "exp_2_step_funnel_survey_4_1_view", "Full page view", "Step 4.1");
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
  ), _ = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19">
  <path
    d="M16.9 8.12V3.73c0-.82-.61-1.75-1.38-2.07L9.94-.61c-1.25-.52-2.65-.52-3.9 0L.46 1.66C-.3 1.98-.92 2.91-.92 3.73v4.39c0 4.89 3.55 9.46 8.4 10.81.33.09.69.09 1.02 0 4.85-1.35 8.4-5.92 8.4-10.81ZM8.75 9.87v2.63c0 .41-.35.75-.75.75-.42 0-.75-.34-.75-.75V9.87C6.23 9.55 5.5 8.61 5.5 7.5 5.5 6.12 6.61 5 8 5c1.37 0 2.5 1.12 2.5 2.5 0 1.12-.75 2.05-1.75 2.37Z"
    fill="#FB7306"
  />
</svg>`
  ), $ = `.os-secure {
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
  class k {
    constructor(t) {
      this.container = document.querySelector(t), this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container not found");
        return;
      }
      document.head.insertAdjacentHTML("beforeend", `<style>${$}</style>`), this.render();
    }
    render() {
      var e;
      const t = (
        /* HTML */
        `<div class="os-secure"><span>${_}</span>Your data is safe and secure</div>`
      );
      (e = this.container) == null || e.insertAdjacentHTML("beforeend", t);
    }
  }
  const H = (
    /* HTML */
    `
  <div class="v-center" id="estimate-notnet">
  <div class="os-spinner">${M}</div>
    <div class="container text-center os-hide" data-os="result">
      <h1 class="os-title">
      Our research indicates <br class="desktop"> that you are <br class="mobile"> a great candidate for <br>
      </h1>
      <h2 class="os-title"><span>No Net Cost Solar*</span></h2>
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
  ), I = ".os-progress-block{position:absolute;top:114px;left:0;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;z-index:1}@media (max-width: 768px){.os-progress-block{top:88px;padding:0 20px}}.os-progress-block .os-progress{width:100%;height:8px;max-width:540px;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:5px;z-index:9999;box-shadow:inset 0 2px 1px #0000000f;background:#dce0e2}@media (max-width: 768px){.os-progress-block .os-progress{width:100%}}.os-progress-block .os-progress-bar{height:8px;border-radius:5px;background-color:#fb7306;transition:width .3s ease-in-out}.os-progress-block .os-steps{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:31px;height:25px;border-radius:28px;background:#fff;color:#2b3d50;font-family:Noto Sans SC;font-size:16px;font-weight:900;line-height:16px;transition:left .3s ease-in-out}";
  class B {
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
      document.head.insertAdjacentHTML("beforeend", `<style>${I}</style>`), e == null || e.insertAdjacentHTML("beforeend", t);
    }
    update(t) {
      if (t < 1 || t > 5) {
        console.error("Step must be between 1 and 5");
        return;
      }
      const e = (t - 1) * 25 + (t === 1 ? 1 : 0), o = document.querySelector(".os-progress-bar"), r = document.querySelector(".os-steps");
      o && (o.style.width = `${e}%`, o.setAttribute("aria-valuenow", e.toString())), r && (r.style.left = t === 1 ? `${e}%` : `calc(${e}% - 31px)`, r.querySelector("span").textContent = t.toString());
    }
  }
  const F = '.os-stepper{position:absolute;top:114px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;width:100%;height:44px;font-family:Noto Sans SC,sans-serif;z-index:1}@media (max-width: 768px){.os-stepper{top:88px;padding:0 20px}}.os-stepper .os-stepper-wrap{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}.os-stepper .os-step{--background: #e0e6e9;position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;border-radius:5px;width:160px;border:solid 1px #edf2f5;background-color:#e0e6e9;background-color:var(--background);font-size:16px;font-weight:500;line-height:14px;color:#2b3d50;opacity:.6}.os-stepper .os-step:first-child{position:relative;z-index:2}.os-stepper .os-step:first-child:after{content:"";position:absolute;right:-14px;transform:translateY(-50%);width:32px;height:32px;background:var(--background);border:solid 1px #edf2f5;border-width:1px 1px 0 0;border-radius:5px;transform:rotate(45deg)}.os-stepper .os-step:last-child{margin-left:-10px;width:192px;z-index:1}.os-stepper .os-step.active{--background: #fff;border:solid 1px rgba(66,117,150,.16);opacity:1;font-weight:600}';
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
      <div class="os-stepper">
        <div class="os-stepper-wrap">
          <div class="os-step active">About You</div>
          <div class="os-step">Qualification</div>
        </div>
      </div>
    `
      ), e = document.querySelector("#header-with-id");
      document.head.insertAdjacentHTML("beforeend", `<style>${F}</style>`), e == null || e.insertAdjacentHTML("beforeend", t);
    }
    updateStep(t) {
      document.querySelectorAll(".os-stepper .os-step").forEach((o, r) => {
        r < t ? o.classList.add("active") : o.classList.remove("active");
      });
    }
  }
  class P {
    constructor() {
      var t;
      this.swiperElement = document.querySelector(".swiper-container"), this.swiper = (t = this.swiperElement) == null ? void 0 : t.swiper, this.progressBar = new B(), this.stepper = new W();
    }
    changeSlides() {
      const t = document.querySelector(".swiper-container"), e = document.querySelectorAll(".swiper-slide"), o = t == null ? void 0 : t.swiper, r = s("#solarForm .wrapper"), h = s(".os-navigation").querySelector(".os-next"), l = document.querySelector(".os-prev"), b = s(".os-stepper"), p = s(".os-progress-block");
      b.classList.add("os-hide");
      const u = () => {
        this.progressBar.update(2);
      };
      o == null || o.on("transitionEnd", () => {
        const i = o.realIndex;
        r.dataset.currentSlide = i.toString();
        const g = s(".swiper-slide-active"), w = (g == null ? void 0 : g.clientHeight) || 0;
        if (h.style.top = `${w}px`, i === 1 && (s("#estimate-bill").classList.contains("os-hide") || (h.style.top = `${w + 50}px`)), t && (t.dataset.currentSlide = i.toString()), i === 0 && this.progressBar.update(1), i === 1 && (l == null || l.removeEventListener("click", u), this.progressBar.update(2)), i === 2 && (l == null || l.removeEventListener("click", u), this.progressBar.update(3)), i === 3 && this.progressBar.update(4), i === 4 && this.progressBar.update(5), i === 3 ? r.dataset.background = "false" : r.dataset.background = "", i === 7 ? r.dataset.background = "opacity" : r.dataset.background = "", i > 4 ? (p.classList.add("os-hide"), b.classList.remove("os-hide")) : (p.classList.remove("os-hide"), b.classList.add("os-hide")), i === 4) {
          const n = s("#estimate-notnet"), c = s("#estimate-email");
          n.classList.contains("os-hide") && (n.classList.remove("os-hide"), c.classList.add("os-hide"));
        }
        if (i === 5) {
          const n = s(".os-navigation"), c = s("#estimate-email"), d = s("#estimate-notnet"), x = s(".os-spinner"), m = s('[data-os="result"]');
          n.classList.add("os-hide"), d.classList.contains("os-hide") || (b.classList.add("os-hide"), l == null || l.classList.add("os-hide"));
          const T = setTimeout(() => {
            x.classList.add("os-hide"), m.classList.remove("os-hide");
          }, 1e3), R = setTimeout(() => {
            x.classList.remove("os-hide"), m.classList.add("os-hide"), m.classList.add("os-passed"), c.classList.remove("os-hide"), d.classList.add("os-hide"), n.classList.remove("os-hide"), b.classList.remove("os-hide"), l == null || l.classList.remove("os-hide");
            const z = s(".swiper-slide-active"), Z = (z == null ? void 0 : z.clientHeight) || 0;
            h.style.top = `${Z}px`;
          }, 4e3);
          m.classList.contains("os-passed") && (clearTimeout(T), clearTimeout(R), m.classList.remove("os-passed"));
        }
        i === 7 ? this.stepper.updateStep(2) : this.stepper.updateStep(1);
      }), e.forEach((i) => {
        var g, w;
        if (i.querySelector("#estimate-zip")) {
          const n = i.querySelector(".title"), c = i.querySelector("h5"), d = i.querySelector("#calculateYourSavings"), x = i.querySelector("#zip"), m = i.querySelector("#zip-error");
          m && (m.textContent = ""), n && n.insertAdjacentHTML("afterend", '<h1 class="os-title">Enter your zip code</h1>'), c && (c.style.display = "none"), d && (d.textContent = "Continue"), x && x.setAttribute("placeholder", "Enter Your Zip Code");
        }
        if (i.querySelector("#estimate-bill")) {
          const n = i.querySelectorAll(".title:not([data-custom])"), c = i.querySelectorAll(".sub-title"), d = (w = (g = i.closest(".swiper-container")) == null ? void 0 : g.nextElementSibling) == null ? void 0 : w.querySelector(".nextSlide");
          n.forEach((x) => {
            x && (x.innerHTML = /* HTML */
            `How much is<br class="desktop" />
              your average monthly energy bill?`);
          }), c.forEach((x) => {
            x && x.classList.add("os-hide");
          }), d && d.classList.add("os-hide");
        }
        if (i.querySelector("#estimate-map")) {
          s("#estimate-map");
          const n = i.querySelectorAll(".title"), c = i.querySelectorAll(".sub-title");
          n.forEach((d) => {
            d && (d.textContent = "Find your house location");
          }), c.forEach((d) => {
            d && (d.textContent = "Enter your house address to verify your eligibility for No Net Cost Solar");
          }), new k("#estimate-map .container");
        }
        if (i.querySelector("#estimate-email")) {
          s("#estimate-email").classList.add("os-hide");
          const c = i.querySelectorAll(".sub-title.banner"), d = i.querySelectorAll(".title"), x = i.querySelectorAll(".sub-title");
          d.forEach((m) => {
            m && (m.innerHTML = /* HTML */
            `What is your <br class="mobile" />
              email address?`);
          }), x.forEach((m) => {
            m && (m.textContent = "We'll send you participation details");
          }), c.forEach((m) => {
            m && m.classList.add("os-hide");
          }), new k("#estimate-email .container");
        }
        if (i.querySelector("#estimate-phone")) {
          const n = i.querySelector("#phone");
          n && n.setAttribute("placeholder", "Enter your mobile phone number");
        }
        if (i.querySelector("#estimate-name")) {
          const n = i.querySelectorAll(".title"), c = i.querySelector("#fname"), d = i.querySelector("#lname");
          n && n.forEach((x) => {
            x && (x.innerHTML = /* HTML */
            "What is your name?");
          }), c && c.setAttribute("placeholder", "First Name"), d && d.setAttribute("placeholder", "Family Name"), new k("#estimate-name .container");
        }
      });
      const y = s("#bill-slider .rangeslider-tooltip");
      y.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        ' <div class="rangeslider-tooltip__arrow"></div>'
      );
      const S = document.querySelector(".rangeslider__handle"), v = s(".rangeslider-tooltip__arrow"), q = parseInt(S.style.left);
      y.style.left = q - 18 + "px", v && (v.style.left = q + 5 + "px"), new MutationObserver(function(i) {
        i.forEach(function(g) {
          if (g.type === "attributes" && g.attributeName === "style") {
            const w = parseInt(S.style.left);
            y.style.left = w - 18 + "px", v && (v.style.left = w + 5 + "px");
            const n = y.getBoundingClientRect(), c = window.innerWidth || document.documentElement.clientWidth;
            n.right >= c - 20 && (y.style.left = c - n.width - 40 + "px"), n.left <= 20 && (y.style.left = "-1px");
          }
        });
      }).observe(S, {
        attributes: !0,
        attributeFilter: ["style"]
      });
    }
    addSlides() {
      var e;
      (e = document.querySelectorAll(".swiper-slide")[5]) == null || e.insertAdjacentHTML("beforeend", H);
    }
  }
  const V = '.swiper-container-android .swiper-slide,.swiper-wrapper{transform:none!important}.os-navigation{display:none;font-family:Noto Sans SC,sans-serif}@media (max-width: 768px){.os-navigation{max-width:100%;margin-top:62px;padding:0 20px}}.os-navigation .os-next{width:100%;position:absolute;justify-content:space-between;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);left:50%;transform:translate(-50%);bottom:50px;max-width:550px!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-top:24px;z-index:50;height:56px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;background:#83be63;font-family:inherit;border:none;border-radius:5px;min-height:56px;color:#fff;font-size:16px;font-weight:700;line-height:24px;min-width:333px;cursor:pointer;text-transform:uppercase}@media (max-width: 768px){.os-navigation .os-next{min-width:200px;max-width:-webkit-calc(100% - 40px)!important;max-width:-moz-calc(100% - 40px)!important;max-width:calc(100% - 40px)!important}}.os-navigation .os-next:hover{background:#8fd26a;transition:background .3s}.os-prev{position:absolute;bottom:60px;left:60px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;font-family:inherit;gap:8px;align-items:center;border:none;background:none;color:#2b3d50;font-weight:700;font-size:16px;padding:0;cursor:pointer;text-transform:uppercase;z-index:20}@media (max-width: 768px){.os-prev{bottom:20px;left:20px}}.os-prev:before{content:"";display:block;width:25px;height:20px;background-image:url(/images/back.svg);background-repeat:no-repeat;background-position:left center;background-size:20px}.os-prev:before:hover{opacity:.8;transition:opacity .3s}.wrapper:not([data-current-slide]) .os-prev{display:none}[data-current-slide="1"] .os-navigation,[data-current-slide="2"] .os-navigation,[data-current-slide="3"] .os-navigation,[data-current-slide="4"] .os-navigation,[data-current-slide="5"] .os-navigation,[data-current-slide="6"] .os-navigation,[data-current-slide="7"] .os-navigation{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}[data-current-slide="2"] .os-navigation .os-next,[data-current-slide="4"] .os-navigation .os-next,[data-current-slide="7"] .os-navigation .os-next{display:none}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){height:24px}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{height:24px}.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32-w-1a-33-37-19-34-36-2t-3a]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){padding:0}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation .os-prev{padding:0}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:240px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-bill.os-hide)~.os-navigation{top:240px!important}}@media (min-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1a-38-2w-36-2t-2t-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2w-33-31-2t-33-3b-32-2t-36-1a-33-37-19-2w-2x-2s-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist){top:220px!important}.swiper-slide.three.swiper-slide-active:has(#estimate-homeowner.os-hide)~.os-navigation{top:220px!important}}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-36-33-3a-2x-2s-2t-36-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist),.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-19-2p-2r-38-2x-3a-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-34-2w-33-32-2t-15-w-3i-w-1a-33-37-19-32-2p-3a-2x-2v-2p-38-2x-33-32]:not(#does-not-exist):not(.does-not-exist){margin-top:24px!important}.swiper-slide-active:has(#estimate-provider)~.os-navigation,.swiper-slide-active:has(#estimate-phone)~.os-navigation{margin-top:24px!important}}';
  class Y {
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
      ), e = (
        /* HTML */
        '<button type="button" class="os-prev">Back</button>'
      ), o = s("#slider-block"), r = s(".swiper-wrapper"), f = s(".wrapper");
      if (!r || !f)
        return;
      document.head.insertAdjacentHTML("beforeend", `<style>${V}</style>`), r.insertAdjacentHTML("beforeend", t), f.insertAdjacentHTML("afterbegin", e);
      const h = s(".os-prev"), l = s(".os-next"), b = document.querySelector(".swiper-container");
      b == null || b.swiper, h == null || h.addEventListener("click", () => {
        const p = s(".os-navigation");
        p.classList.add("os-hide"), setTimeout(() => {
          p.classList.remove("os-hide");
        }, 400);
        const u = o == null ? void 0 : o.querySelector("a:first-child");
        setTimeout(() => {
          u == null || u.click();
        }, 0);
      }), l == null || l.addEventListener("click", () => {
        const p = o == null ? void 0 : o.querySelector("a:last-child"), u = s(".os-navigation");
        u.classList.add("os-hide"), setTimeout(() => {
          u.classList.remove("os-hide");
        }, 400), setTimeout(() => {
          p == null || p.click();
        }, 0);
      });
    }
  }
  const O = '.site-header{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;height:56px;margin-top:12px;padding:0}@media (max-width: 768px){.site-header{margin-top:10px;padding:15px 0}}.wrapper{align-items:flex-start;padding-top:188px!important}@media (max-width: 768px){.wrapper{padding-top:105px!important}}@media (max-width: 768px){.wrapper[data-current-slide="5"],.wrapper[data-current-slide="6"],.wrapper[data-current-slide="7"]{padding-top:137px!important}}.wrapper h1,.wrapper h2.title{margin:0 auto 40px!important}@media (max-width: 768px){.wrapper h1,.wrapper h2.title{margin-bottom:24px!important}}.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1d-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist),.js-has-pseudo [csstools-has-1a-3b-36-2p-34-34-2t-36-w-2w-1e-1a-38-2x-38-30-2t-1m-2w-2p-37-14-3i-w-2w-1g-1m-32-33-38-14-1a-33-37-19-2w-2x-2s-2t-15-1m-32-33-38-14-1m-2t-31-34-38-3d-15-15]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){margin-bottom:16px!important}.wrapper h1:has(~h4:not(.os-hide):not(:empty)),.wrapper h2.title:has(~h4:not(.os-hide):not(:empty)){margin-bottom:16px!important}.small-container,.medium-container{max-width:540px!important}.medium-container{margin-top:16px}.swiper-container{overflow:visible!important;overflow-x:clip!important}@media (max-width: 768px){.js-has-pseudo [csstools-has-1a-37-3b-2x-34-2t-36-19-37-30-2x-2s-2t-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist){display:block!important;height:300px!important}.swiper-slide:has(#estimate-bill){display:block!important;height:300px!important}}.swiper-slide{height:-moz-min-content!important;height:-webkit-min-content!important;height:min-content!important}@media (min-width: 768px){br.mobile{display:none}}@media (max-width: 768px){br.desktop{display:none}}input{font-size:16px!important}@media (max-width: 768px){#estimate-homeowner{height:400px!important}}#estimate-homeowner h5{margin-top:16px;margin-bottom:24px;font-size:16px}#estimate-homeowner h5 strong{font-weight:400}h4{margin-bottom:24px!important;font-size:16px!important;text-height:24px!important;font-weight:400!important}#estimate-notnet .small-container{margin-top:43px}#estimate-notnet .small-container p{font-size:12px;line-height:16px}.swiper-slide .title,.swiper-slide .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:48px!important;font-weight:900!important;line-height:58px!important;letter-spacing:-1px;max-width:540px;margin-left:auto!important;margin-right:auto!important}@media (max-width: 768px){.swiper-slide .title,.swiper-slide .os-title{font-size:32px!important;line-height:40px!important}}.swiper-slide .title span,.swiper-slide .os-title span{color:#fb7306;background:#fff}ul.form-list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:16px;max-width:100%!important;margin-top:0!important}ul.form-list li{margin:0!important}ul.form-list li,ul.form-list button{width:100%!important}ul.form-list input,ul.form-list a,ul.form-list button{border-radius:5px!important}ul.form-list button{border:none!important}#estimate-zip h1:not(.os-title){display:none!important}#estimate-zip .os-title{color:#2b3d50;font-family:Noto Sans SC;font-size:48px;font-weight:900;line-height:58px}@media (max-width: 768px){#estimate-zip .os-title{font-size:32px;line-height:40px}}#estimate-zip .form-list{gap:0}#estimate-bill h2.hide-in-mobile{margin-bottom:40px!important}#estimate-bill .container{padding-bottom:20px}#estimate-bill #js-rangeslider-0:before{background:-webkit-gradient(linear,left top,right top,from(rgba(7,128,65,1)),color-stop(25%,rgba(95,170,25,1)),color-stop(50%,rgba(255,193,4,1)),color-stop(75%,rgba(251,115,6,1)),to(rgba(243,29,29,1)))!important;background:-webkit-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:-moz-linear-gradient(left,rgba(7,128,65,1) 0%,rgba(95,170,25,1) 25%,rgba(255,193,4,1) 50%,rgba(251,115,6,1) 75%,rgba(243,29,29,1) 100%)!important;background:linear-gradient(90deg,#078041,#5faa19,#ffc104,#fb7306,#f31d1d)!important}#estimate-shade .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;gap:20px;flex-wrap:wrap;max-width:550px;margin-left:auto;margin-right:auto}#estimate-shade .custom-radio .custom-radio-item{width:250px;height:158px;margin:0!important;font-size:18px;line-height:26px}@media (max-width: 768px){#estimate-shade .custom-radio .custom-radio-item{width:157px}}#estimate-name .form-list{gap:8px}@media (max-width: 768px){#estimate-name .form-list{gap:0}}#solarForm .wrapper:before{opacity:.6}@media (min-width: 768px){#solarForm .wrapper:before{opacity:1;background-image:url(https://conversionratestore.github.io/projects/sunvalue/img/desktop-bg.webp)}}#solarForm .wrapper[data-background=false]:before{background-image:none!important}@media (max-width: 768px){#solarForm .wrapper[data-background=opacity]:before{opacity:.1!important}}.swiper-container[data-current-slide="2"]+#slider-block{display:none}@media (min-width: 768px){.swiper-wrapper{height:100%!important}}#next-block{display:none}#slider-block{display:none!important;margin-top:20px}#slider-block .nextSlide{min-width:200px}@media (min-width: 768px){#slider-block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;width:100%;top:-webkit-calc(50% + 50px);top:-moz-calc(50% + 50px);top:calc(50% + 50px);max-width:580px;padding:0!important;height:-moz-min-content;height:-webkit-min-content;height:min-content;margin-left:auto;margin-right:auto}#slider-block a:not(.d-none){position:static!important;display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important;justify-content:center;align-items:center}#slider-block a:not(.d-none):last-child{width:333px;height:56px;border-radius:5px;background:#83be63;color:#fff;font-size:16px;font-weight:700;line-height:24px}[data-current-slide="6"]+#slider-block{top:-webkit-calc(50% + 150px);top:-moz-calc(50% + 150px);top:calc(50% + 150px)}}#estimate-name .medium-container,#estimate-phone .medium-container{max-width:580px}#estimate-phone .final-btn{padding:0!important;width:100%}#estimate-phone input{width:100%;max-width:100%;border-radius:5px}.js-has-pseudo [csstools-has-30-2x-1m-2w-2p-37-14-z-2t-37-38-2x-31-2p-38-2t-19-2q-2x-30-30-15]:not(#does-not-exist):not(does-not-exist){flex-direction:column!important}li:has(#estimate-bill){flex-direction:column!important}.os-visibility-hidden{visibility:hidden!important}.os-hide{display:none!important}.os-inline-block{display:inline-block!important}.os-block{display:block!important}.os-flex{display:-webkit-box!important;display:-webkit-flex!important;display:-moz-box!important;display:flex!important}#estimate-provider .custom-radio{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;padding-top:0!important}#estimate-provider .custom-radio .custom-radio-item{width:100%;max-width:100%;border-radius:8px;padding-top:16px;padding-bottom:16px;line-height:24px!important;font-size:16px!important;text-transform:uppercase!important;font-weight:700!important;font-family:Noto Sans SC,sans-serif!important}#autoaddress,#email,#phone{border-radius:8px}#bill-slider .rangeslider-tooltip__arrow{position:absolute;top:39px;left:166px;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255);z-index:20}@media (max-width: 768px){#bill-slider .rangeslider-tooltip__arrow{top:83px;left:100px}}#bill-slider .rangeslider-tooltip{position:absolute;top:45px;left:-webkit-calc(160.687px - 15px);left:-moz-calc(160.687px - 15px);left:145.687px;box-sizing:border-box;border:1px solid rgba(66,117,150,.16);border-radius:5px;padding:4px 10px;background:#fff;font-size:20px}@media (max-width: 768px){#bill-slider .rangeslider-tooltip{top:90px;left:-webkit-calc(98.8841px - 15px);left:-moz-calc(98.8841px - 15px);left:83.8841px}}#bill-slider .rangeslider-tooltip:before{position:absolute;top:-8px;left:50%;transform:translate(-50%);border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid rgb(255,255,255)}#bill-slider .rangeslider{z-index:9999}#bill-slider .sliderLegend{position:absolute;top:-30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;width:100%}@media (max-width: 768px){#bill-slider .sliderLegend{top:10px}}#bill-slider .sliderLegend p{position:static!important}.os-spinner{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}.progress-block{display:none!important}#companies{display:grid;grid-gap:16px;gap:16px}#companies>div{margin:0!important;border:none!important}#companies>div:hover{background:#8fd26a;transition:background .3s}.status-indicator{display:none!important}.error-msg,.error-msg.vsmall-container.mb-20{margin:0!important;height:16px!important}.error-msg:not(:empty),.error-msg.vsmall-container.mb-20:not(:empty){margin:10px 0!important;height:auto!important}.final-btn{padding-top:8px!important}.header-right{display:none}.site-header{margin-top:0!important;padding-top:27px;min-height:56px;height:auto}.site-header.fixed{padding-top:27px}@media (max-width: 768px){.site-header,.site-header.fixed{padding-top:15px}}.site-footer{border-top:none!important}@media screen and (max-width: 575px){.banner-slider .swiper-slide,.banner-slider .swiper-slide.one{padding:25px 0 0!important}}';
  j({ name: "Two-step funnel with generic copy and homeowner step", dev: "OS" }), A("exp_2_step_funnel_v2");
  class D {
    constructor() {
      this.slideManager = new P(), this.init();
    }
    init() {
      location.pathname === "/save/" && L(".swiper-slide-active").then(() => {
        L(".wrapper #slider-block .default").then(() => {
          document.head.insertAdjacentHTML("beforeend", `<style>${O}</style>`), document.title = "Solar Incentive Program", new Y(), this.slideManager.addSlides(), this.slideManager.changeSlides(), new C();
        });
      });
    }
  }
  new D();
})();
