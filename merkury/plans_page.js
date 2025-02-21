(function() {
  "use strict";
  const d = `#root {
  display: none;
}

.body-bg,
.main-layout {
  position: unset;
}

#crs_plans_page {
  padding-bottom: 110px;
}

#crs_plans_page * {
  box-sizing: border-box;
}

#crs_plans_page li {
  list-style: none;
}

.dark_bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 50;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  pointer-events: none;
}
.dark_bg.active {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.crs_header {
  padding: 20px;
}
.crs_header > img {
  width: calc(100% - 40px);
  margin: 0 auto 12px;
  display: block;
}
.crs_header h1 {
  color: #333;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
}
.crs_header ul {
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
}
.crs_header ul li:first-child {
  padding-bottom: 12px;
  border-bottom: 1px solid #eff0f2;
}
.crs_header ul li p:first-of-type {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #333;
  margin: 0 0 4px;
}
.crs_header ul li p:last-of-type {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5c687c;
  margin: 0;
}

.crs_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 16px 20px 8px;
  background-color: #fff;
  box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
.crs_footer button {
  border: none;
  width: 100%;
  padding: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border-radius: 40px;
  background: #37766e;
  margin-bottom: 8px;
}
.crs_footer p {
  text-align: center;
  font-size: 14px;
  color: #333;
  font-weight: 600;
}

.crs_plans_v1 {
  padding: 24px 20px;
  background: #eff0f2;
}
.crs_plans_v1 h2 {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: #333;
  margin: 0 auto 24px;
}
.crs_plans_v1 .crs_tabs {
  display: flex;
  border-radius: 100px;
  border: 1px solid #d3d3d3;
  background: #fff;
  margin-bottom: 12px;
  position: relative;
  padding: 8px 0;
}
.crs_plans_v1 .crs_tabs span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
  font-size: 14px;
  font-weight: 700;
  color: #5c687c;
  transition: all 0.3s;
  line-height: 22px;
  z-index: 2;
  height: 100%;
}
.crs_plans_v1 .crs_tabs span.active {
  color: #fff;
}
.crs_plans_v1 .crs_tabs span:last-of-type::after {
  position: absolute;
  content: "Save 20%";
  background: url("https://conversionratestore.github.io/projects/merkury/img/sale-bg.png") no-repeat center center;
  background-size: contain;
  padding: 0 4px 0 8px;
  color: #37766e;
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -18px;
  right: 20px;
}
.crs_plans_v1 .crs_tabs::after {
  position: absolute;
  content: "";
  width: 50%;
  height: 100%;
  background: #37766e;
  border-radius: 100px;
  top: 0;
  transition: all 0.3s;
  z-index: 1;
}
.crs_plans_v1 .crs_tabs[data-active=yearly]::after {
  left: 50%;
}
.crs_plans_v1 .crs_tabs[data-active=monthly]::after {
  left: 0;
}
.crs_plans_v1 .plans {
  display: flex;
  gap: 8px;
  padding: 0;
}
.crs_plans_v1 .plans p {
  margin: 0;
}
.crs_plans_v1 .plans li {
  width: calc((100% - 16px) / 3);
  padding: 12px 18px;
  border-radius: 16px;
  border: 1px solid #d3d3d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
}
.crs_plans_v1 .plans li.active {
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
}
.crs_plans_v1 .plans .title {
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: #37766e;
  margin-bottom: 6px;
}
.crs_plans_v1 .plans .old_price {
  font-size: 11px;
  font-weight: 400;
  color: #5c687c;
  line-height: 22px;
  text-decoration: line-through;
}
.crs_plans_v1 .plans .price {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  line-height: 24px;
}
.crs_plans_v1 .plans .save {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #37766e;
  background: #fff;
  border: 1px solid #37766e;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 12px;
}
.crs_plans_v1 .plans[data-active=monthly] .save {
  display: none;
}
.crs_plans_v1 .plans[data-active=monthly] .old_price {
  display: none;
}
.crs_plans_v1 .features {
  border-radius: 16px;
  border: 1px solid #d3d3d3;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 16px 0;
}
.crs_plans_v1 .features ul {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
}
.crs_plans_v1 .features ul li {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #dee1e5;
  position: relative;
}
.crs_plans_v1 .features ul li::after {
  content: "";
  position: absolute;
  width: 8px;
  height: 12px;
  display: flex;
  right: 0;
  top: calc(50% - 6px);
  transform: translateY(-50%);
  background: url("https://conversionratestore.github.io/projects/merkury/img/arrow.svg") no-repeat center center;
  background-size: contain;
}
.crs_plans_v1 .features ul li p {
  color: #38404c;
  font-size: 14px;
  padding-right: 12px;
  margin: 0;
}
.crs_plans_v1 .features .basic_features {
  display: none;
}
.crs_plans_v1 .features .basic_features > p {
  border-bottom: 1px solid #dee1e5;
  background: #eff0f2;
  color: #37766e;
  padding: 6px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  margin: 20px 0 12px;
}
.crs_plans_v1 .features .basic_features + p {
  display: flex;
  justify-content: center;
  font-size: 14px;
  padding-bottom: 16px;
  font-weight: 600;
  margin: 16px 0 0;
}
.crs_plans_v1 .features[data-plan=basic] li.plus, .crs_plans_v1 .features[data-plan=basic] li.premium, .crs_plans_v1 .features[data-plan=plus] li.premium {
  display: none;
}

.crs_reviews {
  width: calc(100% - 40px);
  padding: 16px;
  margin: 24px auto;
  border-radius: 16px;
  border: 1px solid #eff0f2;
}
.crs_reviews > div {
  display: flex;
}
.crs_reviews .top {
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.crs_reviews .top p {
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.crs_reviews .top p img {
  display: inline-block;
  margin-bottom: 4px;
}
.crs_reviews .review {
  gap: 12px;
}
.crs_reviews .review > div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.crs_reviews .review p {
  font-size: 14px;
  color: #5c687c;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}

.crs_trial {
  padding: 0 20px;
  margin: 24px 0;
}
.crs_trial h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #333;
  margin: 0 0 20px;
}
.crs_trial ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  position: relative;
}
.crs_trial ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 7px;
  width: 4px;
  height: 100%;
  background-color: #eff0f2;
  border-radius: 5px;
}
.crs_trial li {
  display: flex;
  gap: 16px;
  position: relative;
}
.crs_trial li span {
  position: relative;
  display: flex;
  border: 4px solid #eff0f2;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: #fff;
  flex-shrink: 0;
  z-index: 2;
}
.crs_trial li:first-of-type span {
  border: 4px solid #37766e;
}
.crs_trial li:first-of-type::after {
  position: absolute;
  display: block;
  content: "";
  top: 16px;
  left: 7px;
  width: 4px;
  height: calc((100% - 4px) / 2);
  background-color: #37766e;
  border-radius: 5px;
  z-index: 1;
}
.crs_trial li p {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #5c687c;
  margin: 0;
}
.crs_trial li p b {
  font-size: 16px;
  line-height: 24px;
  color: #333;
}

.crs_popup {
  position: fixed;
  height: auto;
  max-height: 70dvh;
  width: 100%;
  background: #fff;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.1);
  padding-bottom: 110px;
  bottom: 0;
  z-index: 51;
  transform: translateY(100%);
  transition: all 0.5s;
}
.crs_popup.active {
  transform: translateY(0);
}
.crs_popup .indicator {
  width: 100%;
  height: 37px;
  position: relative;
}
.crs_popup .indicator::after {
  position: absolute;
  content: "";
  width: 80px;
  height: 5px;
  background: #000;
  border-radius: 5px;
  top: 16px;
  left: calc(50% - 40px);
}
.crs_popup .title {
  display: flex;
  padding: 12px 20px;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #dee1e5;
  background: #eff0f2;
}
.crs_popup .title p {
  font-size: 14px;
  line-height: 1px;
  color: #38404c;
  margin: 0;
}
.crs_popup ul {
  margin: 16px 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs_popup ul li {
  padding-bottom: 12px;
  border-bottom: 1px solid #dee1e5;
}
.crs_popup ul li p:first-of-type {
  display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 12px;
  align-items: center;
  line-height: 24px;
  color: #333;
  margin: 0;
}
.crs_popup ul li p:last-of-type {
  font-size: 16px;
  line-height: 20px;
  color: #5c687c;
  margin: 4px 0 0;
}/*# sourceMappingURL=style.css.map */`, l = (a) => new Promise((n) => {
    const e = document.querySelector(a);
    e && n(e);
    const s = new MutationObserver(() => {
      const r = document.querySelector(a);
      r && (n(r), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class p {
    constructor(n) {
      this.elements = n instanceof p ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, s) {
      return typeof e == "function" && (s = e, e = ""), this.elements.forEach(function(r) {
        r.addEventListener(n, function(o) {
          var c;
          if (e !== "") {
            let f = (c = o.target) == null ? void 0 : c.closest(e);
            f && (s == null || s.call(f, o));
          } else
            s == null || s.call(r, o);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let e of this.elements)
        n(new p(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const s = n.split("-").map((r, o) => o === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[s] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((s) => Array.from(s.querySelectorAll(n)));
      return new p(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(s) {
        s.setAttribute(n, e);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(e) {
        e.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(e) {
        e.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const t = (a) => new p(a), u = (a, n) => {
    a.style.transition = "height 500ms", a.style.height = "0", setTimeout(() => {
      a.style.display = "none";
    }, 500);
  }, x = (a, n) => {
    a.style.transition = "height 500ms", a.style.overflow = "hidden", a.style.display = "block", a.style.height = "auto";
    const s = a.clientHeight;
    a.style.height = "0", setTimeout(() => {
      a.style.height = s + "px";
    }, 0);
  }, i = "https://conversionratestore.github.io/projects/merkury/img", h = (
    /* HTML */
    `
  <div class="crs_header">
    <img src="${i}/head-img.png" alt="head img" />
    <h1>Choose your plan and start your 30-day free trial</h1>
    <ul>
      <li>
        <p>
          <img src="${i}/msg.svg" alt="message" />
          <b>Capture every moment that matters</b>
        </p>
        <p>Capture and review key events with up to 30-days video history</p>
      </li>
      <li>
        <p>
          <img src="${i}/vide.svg" alt="video" />
          <b>Always On. Always Watching.</b>
        </p>
        <p>Be the first to know with AI-powered detection and smart notifications for motion, people, and pets.</p>
      </li>
    </ul>
  </div>
`
  ), m = (
    /* HTML */
    `
  <div class="crs_plans_v1">
    <h2>Choose your perfect plan</h2>
    <div class="crs_tabs" data-active="yearly">
      <span data-type="monthly">Billed monthly</span>
      <span data-type="yearly" class="active">Billed yearly</span>
    </div>
    <ul class="plans" data-active="yearly">
      <li>
        <p class="title">Basic</p>
        <p class="old_price">$4.99/mon</p>
        <p class="price">$2.99/mo</p>
        <p class="save">Save 20%</p>
      </li>
      <li class="active">
        <p class="title">Plus</p>
        <p class="old_price">$5.99/mon</p>
        <p class="price">$4.99/mo</p>
        <p class="save">Save 20%</p>
      </li>
      <li>
        <p class="title">
          <img src="${i}/fire.svg" alt="fire" />
          Premium
        </p>
        <p class="old_price">$12.99/mon</p>
        <p class="price">$10.69/mo</p>
        <p class="save">Save 20%</p>
      </li>
    </ul>
    <div class="features" data-plan="plus">
      <ul class="plan_features">
        <li>
          <img src="${i}/camera.svg" alt="camera" />
          <p>Support up to: <b>2 cameras</b></p>
        </li>
        <li>
          <img src="${i}/video-file.svg" alt="video-file" />
          <p>Store video history <b>for 14 days</b></p>
        </li>
        <li>
          <img src="${i}/load.svg" alt="download" />
          <p>Download and share recordings</p>
        </li>
        <li class="plus">
          <img src="${i}/detect.svg" alt="detect" />
          <p>Person/pet/vehicle detection</p>
        </li>
        <li class="plus">
          <img src="${i}/notify.svg" alt="notify" />
          <p>Enhanced notifications</p>
        </li>
        <li class="premium">
          <img src="${i}/help.svg" alt="help" />
          <p>Send help</p>
        </li>
      </ul>
      <div class="basic_features">
        <p>Available on free plans</p>
        <ul>
          <li>
            <img src="${i}/motion.svg" alt="motion" />
            <p>Motion notifications</p>
          </li>
          <li>
            <img src="${i}/zones.svg" alt="zones" />
            <p>Active motion zones</p>
          </li>
          <li>
            <img src="${i}/stream.svg" alt="stream" />
            <p>Live stream</p>
          </li>
          <li>
            <img src="${i}/talk.svg" alt="talk" />
            <p>Two way talk</p>
          </li>
          <li>
            <img src="${i}/schedules.svg" alt="schedules" />
            <p>Rules and schedules</p>
          </li>
        </ul>
      </div>
      <p class="see_all">+ see all features</p>
    </div>
  </div>
`
  ), b = (
    /* HTML */
    `
  <div class="crs_reviews">
    <div class="top">
      <img src="${i}/left-l.svg" alt="l" />
      <p>
        <img src="${i}/stars.svg" alt="satrs" />
        <span><b>Rated 4.85</b> from <b>285</b> reviews</span>
      </p>
      <img src="${i}/right-l.svg" alt="r" />
    </div>
    <div class="review">
      <div>
        <img src="${i}/user.svg" alt="user" />
        <img src="${i}/quotes.svg" alt="quotes" />
      </div>
      <p>
        A smart house makes life so easy! I can control lights, temperature, and security from my phone. Automation
        saves time, and energy-efficient features are great.
      </p>
    </div>
  </div>
`
  ), v = (
    /* HTML */
    `
  <div class="crs_trial">
    <h2>How your free trial works</h2>
    <ul>
      <li>
        <span></span>
        <p><b>Today</b><br />Activate your trial instantly and start enjoying advanced features.</p>
      </li>
      <li>
        <span></span>
        <p><b>Day 27</b><br />We’ll remind you that your trial is ending soon, so you’re always in control.</p>
      </li>
      <li>
        <span></span>
        <p>
          <b>Day 30</b><br />Love what you see? 29 December your subscription will continue seamlessly for uninterrupted
          safety. Cancel anytime.
        </p>
      </li>
    </ul>
  </div>
`
  ), y = (
    /* HTML */
    `
  <div class="crs_footer">
    <button>Start 30-day free trial</button>
    <p>2 taps to start, super easy to cancel</p>
  </div>
`
  ), _ = (
    /* HTML */
    `
  <div class="crs_popup">
    <div class="indicator"></div>
    <div class="title">
      <img src="${i}/video-file.svg" alt="video-file" />
      <p>Store video history <b>for 14 days</b></p>
    </div>
    <ul>
      <li>
        <p>
          <img src="${i}/load.svg" alt="load" />
          <b>Download and share recordings</b>
        </p>
        <p>Video history for quick reviews. Download and share recordings anytime.</p>
      </li>
    </ul>
  </div>
`
  );
  g({ name: "Exp - Plans Page", dev: "YK" });
  class w {
    constructor() {
      this.init();
    }
    async init() {
      this.observer(), this.render();
    }
    async render() {
      var s;
      await l("#root");
      const n = t("body").elements[0];
      n.insertAdjacentHTML("afterbegin", `<style class="crs_style">${d}</style>`), (s = n.querySelector("#root")) == null || s.insertAdjacentHTML("afterend", '<div id="crs_plans_page"></div>'), await l("#crs_plans_page");
      const e = t("#crs_plans_page").elements[0];
      e.insertAdjacentHTML("beforeend", h), e.insertAdjacentHTML("beforeend", m), e.insertAdjacentHTML("beforeend", b), e.insertAdjacentHTML("beforeend", v), e.insertAdjacentHTML("beforeend", y), e.insertAdjacentHTML("beforeend", _), e.insertAdjacentHTML("beforeend", '<div class="dark_bg"></div>'), this.addEvents(), l(".MuiTab-wrapper").then(() => {
        t(".MuiTab-wrapper").elements[1].click(), t(".dash-carousel .jss39").elements[0].click();
      });
    }
    addEvents() {
      t(".crs_tabs span").on("click", (n) => {
        const e = n.target, s = e.getAttribute("data-type");
        t(".crs_tabs span").removeClass("active"), e.classList.add("active"), t(".crs_tabs").attr("data-active", s || ""), t(".plans").attr("data-active", s || ""), t(".MuiTab-wrapper").elements[s === "monthly" ? 0 : 1].click();
      }), t(".plans li").on("click", (n) => {
        var r, o;
        const e = n.target.closest("li");
        t(".plans li").removeClass("active"), e.classList.add("active");
        const s = ((o = (r = e.querySelector(".title")) == null ? void 0 : r.textContent) == null ? void 0 : o.toLowerCase()) || "";
        t(".features").attr("data-plan", s), t(".features > ul li:first-of-type b").text(
          s === "basic" ? "1 camera" : s === "plus" ? "2 cameras" : "10 cameras"
        ), t(".features > ul li:nth-of-type(2) b").text(
          s === "basic" ? " for 2 days" : s === "plus" ? "for 14 days" : "for 30 days"
        ), this.selectPlan(s);
      }), t(".see_all").on("click", () => {
        t(".see_all").text().includes("+") ? (x(t(".basic_features").elements[0]), t(".see_all").text("- hide all features")) : (u(t(".basic_features").elements[0]), t(".see_all").text("+ see all features"));
      }), t(".features li").on("click", (n) => {
        t(".dark_bg").addClass("active"), t(".crs_popup").addClass("active");
      }), t(".dark_bg, .crs_popup .indicator").on("click", (n) => {
        t(".dark_bg").removeClass("active"), t(".crs_popup").removeClass("active");
      }), t(".crs_footer button").on("click", () => {
        t(".MuiCardActions-root button").elements[0].click(), t("#geeni-next-btn").elements[0] && t("#geeni-next-btn").elements[0].click();
      });
    }
    async selectPlan(n) {
      var s, r, o;
      console.log("selectPlan", n), await l('button[aria-label="Next"]');
      let e = ((s = t(".MuiCardContent-root>p").elements[0].textContent) == null ? void 0 : s.toLowerCase().trim()) || "";
      for (; e !== n.trim(); )
        t('button[aria-label="Next"]').elements[0].click(), await l(".MuiCardContent-root>p"), await new Promise((c) => setTimeout(c, 700)), e = ((o = (r = t(".MuiCardContent-root>p").elements[0]) == null ? void 0 : r.textContent) == null ? void 0 : o.toLowerCase().trim()) || "", console.log(e);
    }
    observer() {
      const n = new MutationObserver(() => {
        window.location.pathname === "/plans" ? t(".crs_style").elements[0] || (console.log("plans page"), n.disconnect(), t("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${d}</style>`), t("#crs_plans_page").style("display", "block")) : t(".crs_style").elements[0] && (console.log("not plans page"), n.disconnect(), t("#crs_plans_page").style("display", "none"), t(".crs_style").elements[0].remove()), n.observe(document.body, { childList: !0, subtree: !0 });
      });
      n.observe(document.body, { childList: !0, subtree: !0 });
    }
  }
  window.innerWidth < 768 && new w();
})();
//# sourceMappingURL=index.js.map
