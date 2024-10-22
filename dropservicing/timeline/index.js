(function() {
  "use strict";
  const u = `@charset "UTF-8";
.top_content_wrapper {
  max-width: calc(100% - 405px);
}

@media (max-width: 991px) {
  .top_content_wrapper {
    max-width: 100%;
  }
}
.points_block {
  width: 99%;
  background: #100119;
  padding: 20px 20px;
  position: relative;
  z-index: 200;
  overflow: hidden;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .points_block {
    width: 100%;
    padding: 20px 16px;
  }
}
@media (min-width: 769px) {
  .points_block {
    padding-top: 10px;
  }
}
.points_block p {
  margin: 0;
}

.points_block::-webkit-scrollbar {
  height: 1px;
  width: 1px;
  background: rgba(177, 183, 188, 0.3);
}

.points_block::-webkit-scrollbar-thumb {
  background: rgb(164, 107, 245);
}

.live_content_wrapper-working-area_attendee {
  flex-direction: column;
  overflow: auto;
}
@media (max-width: 768px) {
  .live_content_wrapper-working-area_attendee {
    overflow: unset;
  }
}

.live_content_wrapper_generic {
  flex-shrink: 0;
  width: 90% !important;
}
@media (max-width: 768px) {
  .live_content_wrapper_generic {
    width: 100% !important;
  }
}

.live_content_wrapper-working-area_attendee {
  justify-content: flex-start;
}

.header_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
}
.header_wrap .title {
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  font-weight: 700;
}
.header_wrap .btns_desktop {
  display: flex;
  align-items: center;
  gap: 14px;
}
@media (max-width: 768px) {
  .header_wrap .btns_desktop {
    display: none;
  }
}
.header_wrap .btns_desktop span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}
.header_wrap .btns_desktop span.disabled {
  opacity: 0.5;
  cursor: unset;
}
.header_wrap .btns_desktop span.next {
  transform: rotate(180deg);
}

.shadows {
  width: 100%;
  position: relative;
}
.shadows::before, .shadows::after {
  content: "";
  width: 105px;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  transition: opacity 0.3s;
}
@media (max-width: 768px) {
  .shadows::before, .shadows::after {
    display: none;
  }
}
.shadows::before {
  background: linear-gradient(90deg, rgb(16, 1, 25), rgba(16, 1, 25, 0));
  left: 0;
}
.shadows::after {
  background: linear-gradient(90deg, rgba(16, 1, 25, 0), rgb(16, 1, 25));
  right: 0;
}
.shadows.left::before {
  opacity: 0;
}
.shadows.right::after {
  opacity: 0;
}

.point_block_wrapper {
  display: flex;
  width: 100%;
  gap: 36px;
  overflow-x: auto;
  counter-reset: point;
}
.point_block_wrapper::-webkit-scrollbar {
  height: 1px;
  background: rgba(177, 183, 188, 0.3);
}
.point_block_wrapper::-webkit-scrollbar-thumb {
  background: #a46bf5;
}
@media (max-width: 768px) {
  .point_block_wrapper {
    flex-direction: column;
    overflow-x: unset;
  }
}
.point_block_wrapper .point_block {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
  counter-increment: point;
}
.point_block_wrapper .point_block.hidden {
  display: none;
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block {
    width: 100%;
    flex-direction: row;
  }
}
.point_block_wrapper .point_block .mob_right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block .mob_right {
    margin-top: 12px;
  }
}
.point_block_wrapper .point_block .progress_step {
  position: relative;
  padding-top: 4px;
}
.point_block_wrapper .point_block .progress_step span {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(177, 183, 188, 0.14);
  border-radius: 50%;
}
.point_block_wrapper .point_block .progress_step span::after {
  content: counter(point);
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-weight: 500;
}
.point_block_wrapper .point_block .progress_step span .progress_border {
  opacity: 0;
}
.point_block_wrapper .point_block .progress_step span .progress_border circle {
  stroke-dashoffset: 106.8;
}
.point_block_wrapper .point_block .progress_step::after {
  content: "";
  width: 90%;
  height: 1px;
  background: rgba(177, 183, 188, 0.5);
  position: absolute;
  top: 50%;
  left: 20%;
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block .progress_step::after {
    height: 90%;
    width: 1px;
    top: 43px;
    left: 50%;
  }
}
.point_block_wrapper .point_block:last-child .progress_step span {
  border: 1px solid #a46bf5;
}
.point_block_wrapper .point_block:last-child .progress_step span::after {
  content: "✓";
  color: #a46bf5;
}
.point_block_wrapper .point_block:last-child .progress_step::after {
  display: none;
}
.point_block_wrapper .point_block:last-child {
  width: 203px;
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block:last-child {
    width: 100%;
  }
}
.point_block_wrapper .point_block:first-child {
  padding-left: 4px;
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block:first-child {
    padding-left: 0;
  }
}
.point_block_wrapper .point_block [class*=badge_] {
  display: flex;
  padding: 2px 8px;
  align-items: center;
  border-radius: 20px;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 20px;
  color: #fff;
  width: -moz-fit-content;
  width: fit-content;
  font-weight: 700;
}
.point_block_wrapper .point_block [class*=badge_].badge_critical {
  background: #ec6b5e;
  gap: 11px;
}
.point_block_wrapper .point_block [class*=badge_].badge_final {
  background: #a46bf5;
}
.point_block_wrapper .point_block .point_time {
  display: flex;
  align-items: center;
  gap: 6px;
}
.point_block_wrapper .point_block .point_time span:first-of-type {
  font-size: 12px;
  line-height: 14px;
  color: #fbfcff;
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block .point_time span:first-of-type {
    font-size: 14px;
  }
}
.point_block_wrapper .point_block .point_time .status {
  font-size: 12px;
  line-height: 14px;
  color: #fbfcff;
  opacity: 0.4;
}
.point_block_wrapper .point_block .point_time .status::after {
  content: "(Approx.)";
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block .point_time svg {
    display: none;
  }
}
.point_block_wrapper .point_block p {
  font-size: 14px;
  line-height: 20px;
  color: #fff;
}
.point_block_wrapper .point_block ul {
  padding-left: 20px;
  margin-top: -6px;
}
.point_block_wrapper .point_block ul li {
  font-size: 14px;
  line-height: 20px;
  color: #fff;
  margin-bottom: 6px;
}
.point_block_wrapper .point_block.viewed .progress_step span {
  background: #a46bf5;
}
.point_block_wrapper .point_block.viewed .progress_step span::after {
  content: "✓";
  font-weight: 700;
  color: #fff;
}
.point_block_wrapper .point_block.viewed .progress_step::after {
  background: #a46bf5;
}
.point_block_wrapper .point_block.viewed .point_time .status::after {
  content: "viewed";
}
@media (max-width: 768px) {
  .point_block_wrapper .point_block.viewed .point_time span:first-of-type {
    color: #a2a2a3;
  }
}
.point_block_wrapper .point_block.active .progress_step span {
  background: #fff;
  border: 3px solid #100119;
  position: relative;
}
.point_block_wrapper .point_block.active .progress_step span::after {
  color: #a46bf5;
}
.point_block_wrapper .point_block.active .progress_step span .progress_border {
  width: 34px;
  height: 34px;
  position: absolute;
  top: -5px;
  left: -5px;
  z-index: -1;
  opacity: 1;
}
.point_block_wrapper .point_block.active .progress_step span .progress_border svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}
.point_block_wrapper .point_block.active .progress_step span .progress_border circle {
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 106.8; /* Длина окружности */
  stroke-dashoffset: 106.8; /* Начальное смещение */
  transition: stroke-dashoffset 1s linear;
}
.point_block_wrapper .point_block.active .point_time .status::after {
  content: "happening now";
}

.mobile_info_block {
  background: #100119;
  gap: 7px;
  padding: 16px;
  width: 100%;
  display: none;
}
.mobile_info_block p {
  font-size: 14px;
  line-height: 1;
  color: #fff;
}
.mobile_info_block .text {
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  margin-bottom: 16px;
}
.mobile_info_block button {
  width: -moz-fit-content;
  width: fit-content;
  background: none;
  font-size: 14px;
  line-height: 1;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: underline;
  border: none;
  padding: 0;
}

@media (max-width: 768px) {
  .sidebar-container {
    flex-grow: 0;
  }
  .layout-renderer-container-attendee,
  .live_content_wrapper-working-area_attendee {
    height: auto !important;
  }
  .tab-content-underlined {
    min-height: 200px;
  }
}
@media (min-width: 769px) {
  .top_content_wrapper {
    background: #100119;
    transition: all 0.3s;
  }
  .top_content_wrapper.expanded {
    max-width: calc(100% - 35px);
  }
  .layout-renderer-container-attendee {
    padding-top: 10px;
  }
  .live_content_wrapper-working-area_attendee {
    height: calc(100vh - 55px);
  }
}/*# sourceMappingURL=style.css.map */`, p = (o, e) => {
    const n = setInterval(() => {
      const s = document.querySelector(o);
      s && (clearInterval(n), e(s));
    }, 100);
  }, k = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class x {
    constructor(e) {
      this.elements = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e;
    }
    on(e, n, s) {
      return typeof n == "function" && (s = n, n = ""), this.elements.forEach(function(a) {
        a.addEventListener(e, function(i) {
          var r;
          if (n !== "") {
            let l = (r = i.target) == null ? void 0 : r.closest(n);
            l && (s == null || s.call(l, i));
          } else
            s == null || s.call(a, i);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      return this.elements.forEach((n, s) => {
        e(n, s);
      }), this;
    }
    style(e, n) {
      const s = e.split("-").map((a, i) => i === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[s] = n;
      }), this;
    }
  }
  const t = (o) => new x(o), v = (o) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, y = (o, e = "info") => {
    let n;
    switch (e) {
      case "info":
        n = "color: #3498db;";
        break;
      case "warn":
        n = "color: #f39c12;";
        break;
      case "error":
        n = "color: #e74c3c;";
        break;
      case "success":
        n = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${o}`, `${n} font-size: 16px; font-weight: 600`);
  }, h = [
    {
      start: "0",
      time: "3",
      text: "<b>How to Create Recurring Passive Income with Drop Servicing</b> - Learn the simple steps to achieving financial freedom with no skills, experience, or knowledge required"
    },
    {
      start: "3",
      time: "4",
      text: "<b>Real-Life Success Stories: Why Drop Servicing Works</b> - Inspiring stories of ordinary people who have achieved substantial income through Drop Servicing"
    },
    {
      start: "4",
      time: "5",
      text: "The 2 things holding you back from financial freedom",
      type: "critical"
    },
    {
      start: "5",
      time: "10",
      text: "<b>How Dylan went from -$60K to $4M+ with Drop Servicing</b> - Discover the method he used to take control of his life, quit his job, and achieve financial freedom"
    },
    {
      start: "10",
      time: "13",
      text: "<b>Stay to the End and Get These Bonuses:</b> <ul><li>$12,000 Sale Tutorial (+ Free Copy Paste Template)</li><li>A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)</li></ul>"
    },
    {
      start: "13",
      time: "15",
      text: "<b>The High-Profit Service System</b> - Discover a proven system that enables you to start a highly profitable online business quickly with no startup costs"
    },
    {
      start: "15",
      time: "18",
      text: "<b>Why Drop Servicing Is the New Best Way to Make Money Online</b> - Learn how we get sales for free and fast then create multiple passive income streams",
      type: "critical"
    },
    {
      start: "18",
      time: "19",
      text: "A specific example of how Drop Servicing works"
    },
    {
      start: "19",
      time: "21",
      text: "Why Drop Servicing works and how to start for FREE with the Partnership method"
    },
    {
      start: "21",
      time: "23",
      text: "<b>How Much Can You Make With Drop Servicing?</b> - The realistic income potential of Drop Servicing and what you can expect as your business grows"
    },
    {
      start: "23",
      time: "28",
      text: "<b>How to Find Simple, High-Profit Services to Sell</b> - A detailed guide on finding high-demand, profitable digital services, sourcing freelancers, and pricing effectively to generate substantial recurring income"
    },
    {
      start: "28",
      time: "30",
      text: "The best high profit services you can make the most money with today",
      type: "critical"
    },
    {
      start: "30",
      time: "32",
      text: "The Automated Sales System: 3 simple steps to $10,000 per month"
    },
    {
      start: "32",
      time: "33",
      text: "<b>Scaling & Automating Your Drop Servicing Business</b> - Learn how to use automated systems to build and scale your business, secure recurring clients, and achieve financial freedom with minimal effort"
    },
    {
      start: "33",
      time: "34",
      text: "How to instantly get more sales in your Drop Servicing business"
    },
    {
      start: "34",
      time: "35",
      text: "Why freelancers badly want to work with you (use my template)"
    },
    {
      start: "35",
      time: "38",
      text: "How to automate and scale your business fast to achieve your freedom lifestyle"
    },
    {
      start: "38",
      time: "41",
      text: "<b>How to Turn a Single Sale into Multiple Passive Income Streams</b> - Learn the secret to turning one service into recurring revenue, repeat clients, and referral business",
      type: "critical"
    },
    {
      start: "41",
      time: "44",
      text: "How much we can sell our Drop Servicing businesses for (and achieve a massive pay day)"
    },
    {
      start: "44",
      time: "45",
      text: "Get the Done For You partnership with our top freelancers, resources, community and support to fast track your success",
      type: "final"
    },
    {
      start: "45",
      time: "48",
      text: "he Done For You Partner Program where we do the heavy lifting for you"
    },
    {
      start: "48",
      time: "50",
      text: "Get VIP access to our best service and freelancer team"
    },
    {
      start: "50",
      time: "51",
      text: "Drop Servicing Partner Program Course"
    },
    {
      start: "51",
      time: "52",
      text: "Unlimited access to coaching calls 3 times every week"
    },
    {
      start: "52",
      time: "59",
      text: "Special discounted access to the entire program today!"
    },
    {
      start: "59",
      time: "60",
      text: "<b>Bonus #1</b>: $200 Cash Back to you"
    },
    {
      start: "60",
      time: "61",
      text: "<b>Bonus #2</b>: Everything inside one of my fully automated Drop Servicing Businesses – So you can literally copy and paste my business"
    },
    {
      start: "61",
      time: "62",
      text: "<b>Bonus #3</b>: Drop Servicing Blueprint 3.0 video course"
    },
    {
      start: "62",
      time: "63",
      text: "<b>Bonus #4</b>: 200+ Done For You Templates"
    },
    {
      start: "63",
      time: "64",
      text: "<b>Bonus #5</b>: Done For You Website Template"
    },
    {
      start: "64",
      time: "65",
      text: "<b>Bonus #6</b>: Quality Stamp of Approval"
    },
    {
      start: "65",
      time: "66",
      text: "<b>Bonus #7</b>: 10 Highest Demand Services"
    },
    {
      start: "66",
      time: "68",
      text: "<b>Bonus #8</b>: Extra Full Membership Account"
    },
    {
      start: "68",
      time: "71",
      text: "Our 100% Money Back Guarantee (that puts all the risk on us)"
    },
    {
      start: "71",
      time: "73",
      text: "The simple & easy way to get a refund"
    },
    {
      start: "73",
      time: "92",
      text: "Hear from our members themselves! Personal testimonials and in-depth interviews"
    },
    {
      start: "92",
      time: "92",
      text: "<b>Q&A Session</b> - Addressing all of your common questions"
    }
  ], S = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<g clip-path="url(#clip0_2066_824)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03755 0.5 11.5 2.96243 11.5 6C11.5 9.03755 9.03755 11.5 6 11.5C2.96243 11.5 0.5 9.03755 0.5 6ZM6.5 2.5V5.5H8.5V6.5H6C5.72385 6.5 5.5 6.27615 5.5 6V2.5H6.5Z" fill="#382941"/>
</g>
<defs>
<clipPath id="clip0_2066_824">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>`, L = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
<g clip-path="url(#clip0_2066_846)">
<path d="M7.5 0.5C3.35476 0.5 0 3.85438 0 8C0 12.1452 3.35438 15.5 7.5 15.5C11.6452 15.5 15 12.1456 15 8C15 3.85481 11.6456 0.5 7.5 0.5ZM8.27019 10.9772C8.27019 11.2141 7.92466 11.451 7.50015 11.451C7.05589 11.451 6.74001 11.2141 6.74001 10.9772V7.21584C6.74001 6.93942 7.05592 6.75181 7.50015 6.75181C7.92466 6.75181 8.27019 6.93942 8.27019 7.21584V10.9772ZM7.50018 5.84363C7.04605 5.84363 6.69067 5.50798 6.69067 5.1328C6.69067 4.75766 7.04607 4.43187 7.50018 4.43187C7.94443 4.43187 8.29986 4.75766 8.29986 5.1328C8.29986 5.50798 7.9444 5.84363 7.50018 5.84363Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2066_846">
<rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>`, f = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M6.5 1L1.5 6L6.5 11" stroke="#100119" stroke-width="1.4" stroke-linecap="round"/>
</svg>`, T = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M1 1.06543L6 6.06543L1 11.0654" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>`, C = (o) => (
    /* HTML */
    `<div class="point_block ${+o.start > 44 ? "hidden" : ""}" data-time="${+o.time * 60}">
    <div class="progress_step">
      <span>
        <div class="progress_border">
          <svg viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="17"></circle>
          </svg>
        </div>
      </span>
    </div>
    <div class="mob_right">
      <div class="point_time">
        ${S}
        <span>${+o.start > 9 ? o.start : "0" + o.start}:00</span>
        <span class="status"></span>
      </div>
      ${o.type ? (
      /* HTML */
      `
            <span class="badge_${o.type}"
              >${o.type === "critical" ? `${L} Critical information` : "Achieve Financial Freedom"}</span
            >
          `
    ) : ""}
      <p>${o.text}</p>
    </div>
  </div>`
  ), m = (
    /* HTML */
    ` <div class="points_block">
  <div class="header_wrap">
    <p class="title">What you’ll learn in the live training:</p>
    <div class="btns_desktop">
      <span class="prev disabled">${f}</span>
      <span class="next">${f}</span>
    </div>
  </div>
  <div class="shadows left">
    <div class="point_block_wrapper">${h.map((o) => C(o)).join("")}</div>
  </div>
</div>`
  ), B = (
    /* HTML */
    `<div class="mobile_info_block">
  <p class="text">${h[0].text}</p>
  <button>See full training plan ${T}</button>
</div>`
  );
  k({ name: "Webinar Timeline", dev: "YK" }), v("webinar_timeline");
  class E {
    constructor() {
      this.init();
    }
    async init() {
      p("body", async () => {
        t("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${u}</style>`);
      }), p("#vjs_video_3", async () => {
        window.innerWidth > 768 ? t(".live_content_wrapper-working-area_attendee").elements[0].insertAdjacentHTML("beforeend", m) : (t(".live_content_wrapper-working-area_attendee").elements[0].insertAdjacentHTML("beforeend", B), t(".main-container").elements[0].insertAdjacentHTML("beforeend", m), t(".mobile_info_block button").elements[0].addEventListener("click", () => {
          t(".points_block").elements[0].scrollIntoView({ behavior: "smooth" });
        }));
      }), p(".point_block", async () => {
        this.checkTime(), this.setScroll();
      }), p(".btn-expander-left", async () => {
        t(".btn-expander-left").elements[0].addEventListener("click", () => {
          t(".top_content_wrapper").elements[0].classList.toggle("expanded");
        });
      });
    }
    async checkTime() {
      const e = 2 * Math.PI * 17, n = t(".point_block_wrapper").elements[0];
      let s = !1;
      const a = setInterval(() => {
        var _, w, g;
        const i = t("video").elements[0].currentTime;
        if (i === 0)
          return;
        s || (this.startPosition(), s = !0), i > 44 * 60 && t(".point_block.hidden").elements.forEach((b) => b.classList.remove("hidden"));
        const r = t(".point_block.active").elements[0];
        if (i > 55 * 60 && window.innerWidth < 768 && (t(".mobile_info_block").elements[0].remove(), t(".points_block").elements[0].remove(), t(".crs_style").elements[0].remove(), clearInterval(a)), !r)
          return;
        const l = ((_ = r.previousElementSibling) == null ? void 0 : _.dataset.time) || 0, c = r.querySelector(".progress_step circle"), d = (i - +l) / (+r.dataset.time - +l) * 100;
        if (c.style.strokeDashoffset = (e - d / 100 * e).toString(), d > 100) {
          r.classList.remove("active"), r.classList.add("viewed"), (w = r.nextElementSibling) == null || w.classList.add("active");
          const b = (g = r.nextElementSibling) == null ? void 0 : g.getBoundingClientRect().left, P = n.scrollLeft, D = n.clientWidth / 2 - 100;
          if (n.scrollTo({
            left: P + (b - D),
            behavior: "smooth"
          }), window.innerWidth < 768) {
            const M = t(".mobile_info_block").elements[0], $ = t(".point_block.active").elements[0];
            M.querySelector(".text").innerHTML = $.querySelector("p").innerHTML;
          }
        }
      }, 1e3);
    }
    async startPosition() {
      const e = t("video").elements[0].currentTime, n = t(".point_block").elements, s = 2 * Math.PI * 17;
      let a = null;
      if (n.forEach((i, r) => {
        if (i.dataset.time && +i.dataset.time < e)
          i.classList.add("viewed"), a = r;
        else {
          if (a === null && r === 0) {
            i.classList.add("active");
            return;
          }
          if (i.dataset.time && a !== null && r === a + 1) {
            i.classList.add("active");
            const l = i.querySelector(".progress_step circle"), c = +n[r - 1].dataset.time, d = (e - c) / (+i.dataset.time - c) * 100;
            l.style.strokeDashoffset = (s - d / 100 * s).toString();
          }
        }
      }), window.innerWidth < 768) {
        const i = t(".mobile_info_block").elements[0], r = t(".point_block.active").elements[0];
        if (!r) {
          i.querySelector(".text").textContent = "Get the done for you partnership with our top freelancers, resources, community and support to fast track your success.”";
          return;
        }
        i.querySelector(".text").innerHTML = r.querySelector("p").innerHTML;
      }
    }
    setScroll() {
      const e = t(".point_block_wrapper").elements[0];
      t(".btns_desktop .next").elements[0].addEventListener("click", () => {
        e.scrollTo({
          left: e.scrollLeft + 200,
          behavior: "smooth"
        });
      }), t(".btns_desktop .prev").elements[0].addEventListener("click", () => {
        e.scrollTo({
          left: e.scrollLeft - 200,
          behavior: "smooth"
        });
      }), e.addEventListener("scroll", () => {
        y("scroll"), e.scrollLeft === 0 ? (t(".btns_desktop .prev").elements[0].classList.add("disabled"), t(".shadows").elements[0].classList.add("left")) : (t(".btns_desktop .prev").elements[0].classList.remove("disabled"), t(".shadows").elements[0].classList.remove("left")), e.scrollLeft <= e.scrollWidth - e.clientWidth && e.scrollLeft > e.scrollWidth - e.clientWidth - 2 ? (t(".btns_desktop .next").elements[0].classList.add("disabled"), t(".shadows").elements[0].classList.add("right")) : (t(".btns_desktop .next").elements[0].classList.remove("disabled"), t(".shadows").elements[0].classList.remove("right"));
      });
    }
  }
  new E();
})();
//# sourceMappingURL=index.js.map
