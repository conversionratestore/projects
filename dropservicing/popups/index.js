(function() {
  "use strict";
  const u = `.crs_popup_wrapper {
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
}/*# sourceMappingURL=style.css.map */`, d = ({ name: e, dev: n }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class h {
    constructor(n) {
      this.elements = typeof n == "string" ? document.querySelectorAll(n) : n instanceof Element ? [n] : n;
    }
    on(n, s, t) {
      return typeof s == "function" && (t = s, s = ""), this.elements.forEach(function(o) {
        o.addEventListener(n, function(r) {
          var a;
          if (s !== "") {
            let l = (a = r.target) == null ? void 0 : a.closest(s);
            l && (t == null || t.call(l, r));
          } else
            t == null || t.call(o, r);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(s) {
        s.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(s) {
        s.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(s) {
        s.classList.toggle(n);
      }), this;
    }
    each(n) {
      return this.elements.forEach((s, t) => {
        n(s, t);
      }), this;
    }
    style(n, s) {
      const t = n.split("-").map((o, r) => r === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[t] = s;
      }), this;
    }
  }
  const i = (e) => new h(e), _ = (e) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, c = [
    {
      img: "christian.jpg",
      name: "Christian",
      text: '"From an unfulfilling job to running his own business, Christian transformed his life in just three months."'
    },
    {
      img: "ed.jpg",
      name: "Ed",
      text: '"Ed went from a busy father of two with limited time to running a thriving business on his own term."'
    },
    {
      img: "lauren.jpg",
      name: "Lauren",
      text: '"Lauren transitioned from managing physical stores to building her own automated Drop Servicing business."'
    },
    {
      img: "aleksa.jpg",
      name: "Aleksa",
      text: '"Aleksa transformed from a struggling student to a financially independent entrepreneur in just one year."'
    }
  ], f = [
    "Don’t miss your chance!",
    "Essential Tips Ahead",
    "Congratulations!",
    "TRY THE PROGRAM RISK-FREE"
  ], g = [
    "This webinar is packed with life-changing insights, but it’s only available for a limited time. Watch it while you still can!",
    "This webinar is only available for a limited time, so watch it while you still can!",
    "You've unlocked an exclusive <b>$2,000 discount</b> on our Drop Servicing Partner Program!"
  ], m = [
    "IN THE NEXT HOUR, YOU'LL DISCOVER:",
    "IN THE NEXT 30 MINUTES, YOU'LL DISCOVER:",
    "In addition, you will receive the following for FREE:",
    "We offer a market-leading guarantee:"
  ], x = [
    [
      "How to create passive, <b>recurring income</b> with Drop Servicing.",
      "<b>Real-life success stories</b> of people who achieved financial freedom with this method.",
      "<b>Get direct access</b> to Dylan's best freelancer teams and services.",
      "A step-by-step blueprint to <b>start earning $10,000+</b> per month from home."
    ],
    [
      "Inspiring success stories of <b>people who achieved financial freedom</b> and how you can too.",
      "<b>Inspiring success stories</b> of individuals who achieved financial freedom through Drop Servicing.",
      "A detailed blueprint <b>to start making $10,000+</b> per month from home."
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
  ], b = [
    "Stay until the end and receive a special bonus that could change your financial future!",
    "Watch the entire webinar, because we have a special surprise for you at the end!",
    "This offer is time limited so claim it while you can."
  ], p = "https://conversionratestore.github.io/projects/dropservicing", w = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
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
</svg>`, v = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15 8L9 15L5 11" stroke="#2F2F2F" stroke-width="2"/>
</svg>`, y = (e) => {
    const n = e === 0 || e === 1 ? "hat.png" : e === 2 ? "prize.png" : "top.png";
    return (
      /* HTML */
      `
    <div class="crs_popup interval_${e}">
      <span class="crs_close">${w}</span>
      <div class="crs_main_info">
        <h2>${f[e]}</h2>
        ${e !== 3 ? (
        /* HTML */
        `<p class="sub">${g[e]}</p>`
      ) : ""}
        <div class="crs_list_block">
          <h3>
            <img src="${p}/popups/img/${n}" alt="icon" />
            ${m[e]}
          </h3>
          <ul>
            ${x[e].map((s) => `<li>${v}<p>${s}</p></li>`).join("")}
          </ul>
          ${e !== 3 ? "<p><b>...and much more.</b></p>" : ""}
        </div>
        ${e !== 3 ? (
        /* HTML */
        `<div class="crs_note">
              <img src="${p}/popups/img/info-circle.png" alt="info" />
              <p><b>IMPORTANT NOTE:</b> ${b[e]}</p>
            </div>`
      ) : ""}
        ${e === 3 ? (
        /* HTML */
        `<div class="crs_guarantee">
              <h4>100% satisfaction</h4>
              <p>If you’re not completely satisfied after implementing our step-by-step plan, get a full refund!</p>
              <img src="${p}/popups/img/guaranteed.svg" alt="guaranteed" />
            </div>`
      ) : ""}
        ${e < 2 ? '<button class="crs_btn">Continue Watching</button>' : '<a class="crs_btn" href="https://start.dropservicing.com/partner" target="_blank">Access Special Offer Now</a>'}
      </div>
      <div class="crs_stories">
        <p>Our Success Stories</p>
        <div class="crs_stories_block">
          <div class="crs_stories_nav">
            ${c.map(
        (s, t) => `<span class="${t === 0 ? "active" : ""}">
                <img src="${p}/popups/img/avatar_${t}.jpg" alt="avatar" />
              </span>`
      ).join("")}
          </div>
          <div class="crs_stories_content">
            ${c.map(
        (s, t) => (
          /* HTML */
          `<div class="crs_story ${t === 0 ? "active" : ""}">
                    <div class="crs_story_head">
                      <span>
                        <img src="${p}/popups/img/avatar_${t}.jpg" alt="avatar" />
                      </span>
                      <p>
                        <b>${s.name}</b><br />
                        <span>Verified Customer ✅</span>
                      </p>
                    </div>
                    <img src="${p}/optin/img/rating_stars.png" alt="stars" />
                    <p>${s.text}</p>
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
  d({ name: "Webinar popups", dev: "YK" }), _("webinar_popups");
  class k {
    constructor() {
      this.init();
    }
    init() {
      document.body.insertAdjacentHTML("afterbegin", `<style>${u}</style>`), document.body.insertAdjacentHTML("beforeend", '<div class="crs_popup_wrapper"></div>'), this.setTriggers();
    }
    async showPopup() {
      const n = localStorage.getItem("popupShown"), s = i("video").elements[0].currentTime;
      let t = Math.floor(s / (20 * 60));
      t > 3 && (t = 3), !(n && +n === t) && (i(".crs_popup_wrapper").elements[0].innerHTML = y(2), i(".crs_popup_wrapper").addClass("active"), localStorage.setItem("popupShown", t.toString()), i(".crs_popup_wrapper .crs_close, button.crs_btn").on("click", () => {
        i(".crs_popup_wrapper").removeClass("active");
      }), i(".crs_popup_wrapper").on("click", (o) => {
        o.target.classList.contains("crs_popup_wrapper") && i(".crs_popup_wrapper").removeClass("active");
      }), this.setSlider());
    }
    setSlider() {
      i(".crs_stories_nav span").on("click", function(n) {
        if (this.classList.contains("active"))
          return;
        i(".crs_stories_nav span").removeClass("active"), this.classList.add("active");
        const s = Array.from(this.parentElement.children).indexOf(this), t = i(".crs_stories_content .crs_story").elements[s].getBoundingClientRect().left, r = i(".crs_stories_content").elements[0].getBoundingClientRect().left - t, a = i(".crs_stories_content").elements[0].scrollLeft;
        i(".crs_stories_content").elements[0].scrollTo({
          left: a - r,
          behavior: "smooth"
        });
      });
    }
    setTriggers() {
      if (document.addEventListener("mouseleave", async () => {
        this.showPopup();
      }), document.addEventListener("visibilitychange", async () => {
        document.visibilityState === "visible" && this.showPopup();
      }), window.innerWidth < 768) {
        let n = 0;
        i(".top_content_wrapper").on("touchend", async (s) => {
          const t = (/* @__PURE__ */ new Date()).getTime(), o = t - n;
          n = t, o < 500 && o > 0 && (s.preventDefault(), this.showPopup());
        });
      }
    }
  }
  new k();
})();
//# sourceMappingURL=index.js.map
