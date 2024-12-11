(function() {
  "use strict";
  const d = `.crs_popup_wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding: 40px 0;
  z-index: 1000;
  background: rgba(60, 60, 60, 0.4);
  display: none;
}
@media (max-width: 768px) {
  .crs_popup_wrapper {
    padding: 20px 0;
  }
}
.crs_popup_wrapper.active {
  display: block;
}
.crs_popup_wrapper * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.crs_popup {
  position: relative;
  margin: 0 auto;
  border-radius: 10px;
  background: #fff;
  max-width: 900px;
  display: flex;
  width: calc(100% - 32px);
  justify-content: space-between;
}
.crs_popup .crs_close {
  width: 30px;
  height: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
  cursor: pointer;
}
@media (max-width: 768px) {
  .crs_popup .crs_close {
    right: -5px;
  }
}
.crs_popup .crs_stories {
  width: 300px;
  padding: 30px 34px;
  background: linear-gradient(0deg, #000 0%, #000 100%);
  flex-shrink: 0;
  border-radius: 0 10px 10px 0;
}
@media (max-width: 768px) {
  .crs_popup .crs_stories {
    display: none;
  }
}
.crs_popup .crs_stories > p {
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
}
.crs_popup .crs_stories_nav {
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
  gap: 14px;
}
.crs_popup .crs_stories_nav span {
  width: 28px;
  height: 28px;
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  transition: all;
}
.crs_popup .crs_stories_nav span.active {
  border-color: #fff;
}
.crs_popup .crs_stories_nav span img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_popup .crs_stories_content {
  display: flex;
  width: 100%;
  overflow: auto;
  gap: 15px;
}
.crs_popup .crs_stories_content::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.crs_popup .crs_story {
  width: 100%;
  padding: 16px 18px;
  background: #fff;
  border-radius: 3px;
  flex-shrink: 0;
}
.crs_popup .crs_story .crs_story_head {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 17px;
}
.crs_popup .crs_story .crs_story_head span {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.crs_popup .crs_story .crs_story_head span img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_popup .crs_story .crs_story_head p b {
  font-size: 14px;
  line-height: 24px;
}
.crs_popup .crs_story .crs_story_head p span {
  font-size: 12px;
  line-height: 18px;
}
.crs_popup .crs_story .crs_story_head + img {
  margin-bottom: 9px;
  height: 14px;
  width: auto;
}
.crs_popup .crs_story > p {
  font-size: 14px;
  line-height: 21px;
}
.crs_popup .crs_main_info {
  padding: 30px 34px;
}
@media (max-width: 768px) {
  .crs_popup .crs_main_info {
    padding: 20px 16px;
    border-radius: 10px;
  }
}
.crs_popup .crs_main_info h2 {
  font-size: 30px;
  text-transform: uppercase;
  line-height: 40px;
  margin-bottom: 8px;
  font-weight: 700;
}
@media (max-width: 768px) {
  .crs_popup .crs_main_info h2 {
    font-size: 24px;
    line-height: 32px;
  }
}
.crs_popup .crs_main_info .sub {
  line-height: 21px;
  font-size: 14px;
}
@media (max-width: 768px) {
  .crs_popup .crs_main_info .sub {
    font-size: 12px;
  }
}
.crs_popup .crs_main_info .crs_list_block {
  margin-top: 22px;
  padding: 16px;
  background: #f2ebfc;
  border-radius: 3px;
  margin-bottom: 22px;
}
.crs_popup .crs_main_info .crs_list_block h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.crs_popup .crs_main_info .crs_list_block h3 img {
  width: 38px;
}
.crs_popup .crs_main_info .crs_list_block ul {
  padding-top: 14px;
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 8px;
}
.crs_popup .crs_main_info .crs_list_block ul li {
  list-style: none;
  display: flex;
  gap: 10px;
}
.crs_popup .crs_main_info .crs_list_block ul li svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.crs_popup .crs_main_info .crs_list_block ul li p {
  font-size: 14px;
  line-height: 21px;
}
.crs_popup .crs_main_info .crs_list_block ul + p {
  padding-left: 30px;
}
.crs_popup .crs_main_info .crs_note {
  display: flex;
  gap: 10px;
  margin-bottom: 18px;
}
.crs_popup .crs_main_info .crs_note img {
  width: 20px;
  height: 20px;
}
.crs_popup .crs_main_info .crs_note p {
  font-size: 14px;
  line-height: 21px;
}
.crs_popup .crs_main_info .crs_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 3px;
  background: #17aa1c;
  color: #fff;
  width: 100%;
  height: 62px;
  text-decoration: none;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
}
.crs_popup .crs_main_info .crs_btn:hover {
  background: #198f19;
}
.crs_popup .crs_main_info .crs_guarantee {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 14px;
  border-radius: 3px;
  border: 1px dashed #de1e00;
  background: rgba(222, 30, 0, 0.1);
  margin-bottom: 22px;
}
.crs_popup .crs_main_info .crs_guarantee h4 {
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 4px;
  text-transform: uppercase;
  font-weight: 700;
}
.crs_popup .crs_main_info .crs_guarantee p {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  max-width: 365px;
  margin: 0 auto 10px;
}/*# sourceMappingURL=style.css.map */`, p = (s, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), g(`Event: ${s} | ${n} | ${e} | ${t}`, "success");
  }, h = ({ name: s, dev: n }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class _ {
    constructor(n) {
      this.elements = typeof n == "string" ? document.querySelectorAll(n) : n instanceof Element ? [n] : n;
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach(function(o) {
        o.addEventListener(n, function(r) {
          var a;
          if (e !== "") {
            let u = (a = r.target) == null ? void 0 : a.closest(e);
            u && (t == null || t.call(u, r));
          } else
            t == null || t.call(o, r);
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
      return this.elements.forEach((e, t) => {
        n(e, t);
      }), this;
    }
    style(n, e) {
      const t = n.split("-").map((o, r) => r === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[t] = e;
      }), this;
    }
  }
  const i = (s) => new _(s), f = (s) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, g = (s, n = "info") => {
    let e;
    switch (n) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${s}`, `${e} font-size: 16px; font-weight: 600`);
  }, l = [
    {
      name: "Barend K.",
      text: '"Barend was working two stressful restaurant jobs and used this strategy to earn $69,650 in one sale, followed by $77,000 in the next."'
    },
    {
      name: "Derik J.",
      text: '"Derik left a stressful day job, now lands high-ticket sales like $23,400, and has clients paying him $162,000 yearly."'
    },
    {
      name: "Lauren G.",
      text: '"Lauren made $8,700 in 6 weeks, reached $100,000 in 6 months, and bought her first house."'
    },
    {
      name: "Stephen H.",
      text: '"Stephen lost his job, used this system to quickly earn $10,000 per month, and now travels the world in freedom."'
    }
  ], m = [
    "Don’t miss your chance!",
    "Essential Tips Ahead",
    "Congratulations!",
    "TRY THE PROGRAM RISK-FREE"
  ], x = [
    "This webinar is packed with life-changing insights, but it’s only available for a limited time. Watch it while you still can!",
    "This webinar is only available for a limited time, so watch it while you still can!",
    "You've unlocked an exclusive <b>$4,000 discount</b> on our Drop Servicing Partner Program!"
  ], b = [
    "IN THE NEXT 15 MINUTES, YOU'LL DISCOVER:",
    "IN THE NEXT 20 MINUTES, YOU’LL DISCOVER:",
    "In addition, you will receive the following for FREE:",
    "We offer a market-leading guarantee:"
  ], w = [
    [
      "How to create passive, <b>recurring income</b> with Drop Servicing.",
      "<b>Real-life success stories</b> of people who achieved financial freedom with this method.",
      "A step-by-step blueprint to <b>start earning $10,000+</b> per month from home."
    ],
    [
      "How to get <b>your first high value client</b> fast (step-by-step tutorials).",
      "<b>200+ copy-and-paste templates</b> to build your own Drop Servicing business and achieve financial freedom.",
      "<b>Get direct access</b> to Dylan's best freelancer teams and services."
    ],
    [
      "<b>Everything Inside My Business</b> including my entire system with all the resources you need to replicate my results.",
      "The Drop Servicing Blueprint 3.0 video course with over <b>30 hours of training</b>.",
      "<b>200+ ‘Done For You’ Templates</b>, the most effective templates from our businesses that you can copy and paste."
    ],
    [
      "Launch a <b>fully automated Drop Servicing business</b> with our proven system.",
      "Follow our step-by-step process to <b>get your first sales</b>."
    ]
  ], v = [
    "Stay until the end and receive a special bonus that could change your financial future!",
    "Watch the entire webinar, because we have a <b>special surprise</b> for you at the end!",
    "This offer is time limited so claim it while you can."
  ], c = "https://conversionratestore.github.io/projects/dropservicing", y = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
<g filter="url(#filter0_d_2047_2074)">
<circle cx="19" cy="15" r="15" fill="#222222"/>
<circle cx="19" cy="15" r="13.8" stroke="white" stroke-width="2.4"/>
</g>
<path d="M15.0002 19L23 11M22.9998 19L15 11" stroke="white" stroke-width="2.4" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_2047_2074" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2047_2074"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2047_2074" result="shape"/>
</filter>
</defs>
</svg>`, k = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15 8L9 15L5 11" stroke="#2F2F2F" stroke-width="2"/>
</svg>`, $ = (s) => {
    const n = s === 0 || s === 1 ? "hat.png" : s === 2 ? "prize.png" : "top.png";
    return (
      /* HTML */
      `
    <div class="crs_popup interval_${s}" data-interval="${s}">
      <span class="crs_close">${y}</span>
      <div class="crs_main_info">
        <h2>${m[s]}</h2>
        ${s !== 3 ? (
        /* HTML */
        `<p class="sub">${x[s]}</p>`
      ) : ""}
        <div class="crs_list_block">
          <h3>
            <img src="${c}/popups/img/${n}" alt="icon" />
            ${b[s]}
          </h3>
          <ul>
            ${w[s].map((e) => `<li>${k}<p>${e}</p></li>`).join("")}
          </ul>
          ${s !== 3 ? "<p><b>...and much more.</b></p>" : ""}
        </div>
        ${s !== 3 ? (
        /* HTML */
        `<div class="crs_note">
              <img src="${c}/popups/img/info-circle.png" alt="info" />
              <p><b>IMPORTANT NOTE:</b> ${v[s]}</p>
            </div>`
      ) : ""}
        ${s === 3 ? (
        /* HTML */
        `<div class="crs_guarantee">
              <h4>100% satisfaction</h4>
              <p>If you’re not completely satisfied after implementing our step-by-step plan, get a full refund!</p>
              <img src="${c}/popups/img/guaranteed.svg" alt="guaranteed" />
            </div>`
      ) : ""}
        ${s < 2 ? '<button class="crs_btn">Continue Watching</button>' : '<a class="crs_btn" href="https://start.dropservicing.com/partner30" target="_blank">Access Special Offer Now</a>'}
      </div>
      <div class="crs_stories">
        <p>Our Success Stories</p>
        <div class="crs_stories_block">
          <div class="crs_stories_nav">
            ${l.map(
        (e, t) => `<span class="${t === 0 ? "active" : ""}">
                <img src="${c}/popups/img/avatar_${t}.jpg" alt="avatar" />
              </span>`
      ).join("")}
          </div>
          <div class="crs_stories_content">
            ${l.map(
        (e, t) => (
          /* HTML */
          `<div class="crs_story ${t === 0 ? "active" : ""}">
                    <div class="crs_story_head">
                      <span>
                        <img src="${c}/popups/img/avatar_${t}.jpg" alt="avatar" />
                      </span>
                      <p>
                        <b>${e.name}</b><br />
                        <span>Verified Customer ✅</span>
                      </p>
                    </div>
                    <img src="${c}/optin/img/rating_stars.png" alt="stars" />
                    <p>${e.text}</p>
                  </div>`
        )
      ).join("")}
          </div>
        </div>
      </div>
    </div>
  `
    );
  };
  h({ name: "Webinar popups", dev: "YK" }), f("webinar_popups"), p("exp_exit_intent_loaded", "Loaded", "success", "Webinar popups");
  class T {
    constructor() {
      this.init();
    }
    init() {
      document.body.insertAdjacentHTML("afterbegin", `<style>${d}</style>`), document.body.insertAdjacentHTML("beforeend", '<div class="crs_popup_wrapper"></div>'), i(".crs_popup_wrapper").on("click", (n) => {
        n.target.classList.contains("crs_popup_wrapper") && (i(".crs_popup_wrapper").removeClass("active"), p(
          `exp_exit_intent_popup${this.checkPopup()}_close`,
          "Close popup through the background",
          "click",
          `Popup #${this.checkPopup()}`
        ));
      }), this.setTriggers();
    }
    async showPopup() {
      const n = localStorage.getItem("popupShown"), e = i("video").elements[0].currentTime;
      let t = e < 25 * 60 ? 0 : e < 50 * 60 ? 1 : e < 70 * 60 ? 2 : 3;
      n && +n === t || (i(".crs_popup_wrapper").elements[0].innerHTML = $(t), i(".crs_popup_wrapper").addClass("active"), localStorage.setItem("popupShown", t.toString()), i(".crs_popup_wrapper .crs_close").on("click", () => {
        i(".crs_popup_wrapper").removeClass("active"), p(`exp_exit_intent_popup${this.checkPopup()}_close`, "Close", "click", `Popup #${this.checkPopup()}`);
      }), i("button.crs_btn").on("click", () => {
        i(".crs_popup_wrapper").removeClass("active"), p(
          `exp_exit_intent_popup${this.checkPopup()}_click`,
          "Continue watching",
          "click",
          `Popup #${this.checkPopup()}`
        );
      }), i("a.crs_btn").on("click", () => {
        p(
          `exp_exit_intent_popup${this.checkPopup()}_click`,
          "Click on link",
          "click",
          `Popup #${this.checkPopup()}`
        );
      }), this.setSlider(), p(`exp_exit_intent_popup${this.checkPopup()}_view`, "View on screen", "view", `Popup #${this.checkPopup()}`));
    }
    setSlider() {
      i(".crs_stories_nav span").on("click", function(n) {
        if (this.classList.contains("active"))
          return;
        i(".crs_stories_nav span").removeClass("active"), this.classList.add("active");
        const e = Array.from(this.parentElement.children).indexOf(this), t = i(".crs_stories_content .crs_story").elements[e].getBoundingClientRect().left, r = i(".crs_stories_content").elements[0].getBoundingClientRect().left - t, a = i(".crs_stories_content").elements[0].scrollLeft;
        i(".crs_stories_content").elements[0].scrollTo({
          left: a - r,
          behavior: "smooth"
        });
      });
    }
    setTriggers() {
      if (document.addEventListener("mouseout", async (n) => {
        const e = n.relatedTarget || n.toElement;
        if (!e || e.nodeName === "HTML") {
          if (i("video").elements[0].currentTime === 0)
            return;
          this.showPopup();
        }
      }), document.addEventListener("visibilitychange", async () => {
        i("video").elements[0].currentTime !== 0 && document.visibilityState === "visible" && this.showPopup();
      }), window.innerWidth < 768) {
        let n = 0;
        i(".top_content_wrapper").on("touchend", async (e) => {
          const t = (/* @__PURE__ */ new Date()).getTime(), o = t - n;
          n = t, o < 500 && o > 0 && (e.preventDefault(), this.showPopup());
        });
      }
    }
    checkPopup() {
      if (i(".crs_popup").elements.length === 0)
        return 0;
      const n = i(".crs_popup").elements[0].dataset.interval;
      return n ? +n : 0;
    }
  }
  new T();
})();
//# sourceMappingURL=index.js.map
