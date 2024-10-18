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
  width: 100%;
  background: #100119;
  padding: 23px 32px;
  position: relative;
  z-index: 200;
  overflow: hidden;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .points_block {
    padding: 20px 16px;
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
  width: 80% !important;
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
@media (max-width: 768px) {
  .point_block_wrapper .point_block .point_time .status {
    display: none;
  }
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
  margin-top: 7px;
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
}/*# sourceMappingURL=style.css.map */`, d = (i, e) => {
    const t = setInterval(() => {
      const s = document.querySelector(i);
      s && (clearInterval(t), e(s));
    }, 100);
  }, x = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class v {
    constructor(e) {
      this.elements = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e;
    }
    on(e, t, s) {
      return typeof t == "function" && (s = t, t = ""), this.elements.forEach(function(a) {
        a.addEventListener(e, function(o) {
          var r;
          if (t !== "") {
            let l = (r = o.target) == null ? void 0 : r.closest(t);
            l && (s == null || s.call(l, o));
          } else
            s == null || s.call(a, o);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(e);
      }), this;
    }
    each(e) {
      return this.elements.forEach((t, s) => {
        e(t, s);
      }), this;
    }
    style(e, t) {
      const s = e.split("-").map((a, o) => o === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[s] = t;
      }), this;
    }
  }
  const n = (i) => new v(i), y = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, S = (i, e = "info") => {
    let t;
    switch (e) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${i}`, `${t} font-size: 16px; font-weight: 600`);
  }, f = [
    {
      start: "0",
      time: "3",
      text: "Discover the Simple Steps to Create a Recurring Passive Income Stream with Drop Servicing “Achieve Financial Freedom With No Skills, Experience or Knowledge”"
    },
    {
      start: "3",
      time: "4",
      text: "<b>Real-Life Success Stories and Why Drop Servicing Works</b> - Inspiring success stories of individuals from various backgrounds who achieved substantial income using Drop Servicing."
    },
    {
      start: "4",
      time: "5",
      text: "The 2 things holding you back from financial freedom",
      type: "critical"
    },
    {
      start: "5",
      time: "6",
      text: "How Dylan went from -$60K to $4M+ with Drop Servicing"
    },
    {
      start: "6",
      time: "10",
      text: "<b>Why This Life-Changing Method is Being Shared</b> - Discover the motivation behind sharing this system, and how it can help you create recurring income and gain control over your life with minimal effort."
    },
    {
      start: "10",
      time: "13",
      text: "STAY TO THE END & GET THESE BONUSES: $12,000 Sale Tutorial (+ Free Copy Paste Template) A Quick Guide to Drop Servicing (Get Selling FAST and for ZERO)"
    },
    {
      start: "13",
      time: "15",
      text: "Introduction to the High Profit Service System - An overview of the High Profit Service System, designed to help anyone start a profitable online business quickly and avoid common pitfalls. Learn how this system simplifies the process with no startup costs and fast results."
    },
    {
      start: "15",
      time: "18",
      text: "<b>Why Drop Servicing is the new best way to make money online</b> – How we get sales for free and fast then create multiple passive income streams",
      type: "critical"
    },
    {
      start: "18",
      time: "19",
      text: "Specific Example of How Drop Servicing Works"
    },
    {
      start: "19",
      time: "21",
      text: "Why Drop Servicing Works and How to Start for FREE with the Partnership method"
    },
    {
      start: "21",
      time: "23",
      text: "How much can you make with Drop Servicing?"
    },
    {
      start: "23",
      time: "28",
      text: "How to find high simple high profit services to sell - A detailed guide on how to select high-demand, profitable digital services, source freelancers, and price services effectively to generate substantial recurring income with Drop Servicing."
    },
    {
      start: "28",
      time: "30",
      text: "The Best High Profit Services You Can Make The Most Money With Today",
      type: "critical"
    },
    {
      start: "30",
      time: "32",
      text: "The Automated Sales System - Three Simple Steps to $10,000 Per Month"
    },
    {
      start: "32",
      time: "33",
      text: "<b>Scaling and Automating Your Drop Servicing Business</b> - Learn how to use automated systems to build and scale your business, secure recurring clients, and achieve financial freedom with minimal effort."
    },
    {
      start: "33",
      time: "34",
      text: "How to Instantly Get More Sales in Your Drop Servicing Business"
    },
    {
      start: "34",
      time: "35",
      text: "Why Freelancers Badly Want To Work With You (Use My Template)"
    },
    {
      start: "35",
      time: "38",
      text: "How to Automate and Scale Fast To Achieve Your Freedom Lifestyle"
    },
    {
      start: "38",
      time: "41",
      text: "<b>How To Turn A Single Sale Into Multiple Passive Income Streams</b> - Learn how one service can lead to recurring revenue, repeat clients, and referral business, creating multiple streams of passive income.",
      type: "critical"
    },
    {
      start: "41",
      time: "44",
      text: "How Much We Can Sell Our Drop Servicing Businesses For (And Achieve a MASSIVE Pay Day)"
    },
    {
      start: "44",
      time: "44",
      text: "Get the done for you partnership with our top freelancers, resources, community and support to fast track your success.” My opinion is it doesn’t indicate that we are selling something, and it would be interesting to learn more about this",
      type: "final"
    }
  ], L = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<g clip-path="url(#clip0_2066_824)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03755 0.5 11.5 2.96243 11.5 6C11.5 9.03755 9.03755 11.5 6 11.5C2.96243 11.5 0.5 9.03755 0.5 6ZM6.5 2.5V5.5H8.5V6.5H6C5.72385 6.5 5.5 6.27615 5.5 6V2.5H6.5Z" fill="#382941"/>
</g>
<defs>
<clipPath id="clip0_2066_824">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>`, C = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
<g clip-path="url(#clip0_2066_846)">
<path d="M7.5 0.5C3.35476 0.5 0 3.85438 0 8C0 12.1452 3.35438 15.5 7.5 15.5C11.6452 15.5 15 12.1456 15 8C15 3.85481 11.6456 0.5 7.5 0.5ZM8.27019 10.9772C8.27019 11.2141 7.92466 11.451 7.50015 11.451C7.05589 11.451 6.74001 11.2141 6.74001 10.9772V7.21584C6.74001 6.93942 7.05592 6.75181 7.50015 6.75181C7.92466 6.75181 8.27019 6.93942 8.27019 7.21584V10.9772ZM7.50018 5.84363C7.04605 5.84363 6.69067 5.50798 6.69067 5.1328C6.69067 4.75766 7.04607 4.43187 7.50018 4.43187C7.94443 4.43187 8.29986 4.75766 8.29986 5.1328C8.29986 5.50798 7.9444 5.84363 7.50018 5.84363Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_2066_846">
<rect width="15" height="15" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>`, h = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M6.5 1L1.5 6L6.5 11" stroke="#100119" stroke-width="1.4" stroke-linecap="round"/>
</svg>`, T = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M1 1.06543L6 6.06543L1 11.0654" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
</svg>`, E = (i) => (
    /* HTML */
    `<div class="point_block" data-time="${+i.time * 60}">
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
        ${L}
        <span>${+i.start > 9 ? i.start : "0" + i.start}:00</span>
        <span class="status"></span>
      </div>
      ${i.type ? (
      /* HTML */
      `
            <span class="badge_${i.type}"
              >${i.type === "critical" ? `${C} Critical information` : "Achieve Financial Freedom"}</span
            >
          `
    ) : ""}
      <p>${i.text}</p>
    </div>
  </div>`
  ), _ = (
    /* HTML */
    ` <div class="points_block">
  <div class="header_wrap">
    <p class="title">Topics we'll cover in the live training:</p>
    <div class="btns_desktop">
      <span class="prev disabled">${h}</span>
      <span class="next">${h}</span>
    </div>
  </div>
  <div class="shadows left">
    <div class="point_block_wrapper">${f.map((i) => E(i)).join("")}</div>
  </div>
</div>`
  ), M = (
    /* HTML */
    `<div class="mobile_info_block">
  <p class="time">00:00</p>
  <p class="info"></p>
  <p class="text">${f[0].text}</p>
  <button>See full training plan ${T}</button>
</div>`
  );
  x({ name: "Webinar Timeline", dev: "YK" }), y("webinar_timeline");
  class P {
    constructor() {
      this.init();
    }
    async init() {
      d("body", async () => {
        n("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${u}</style>`);
      }), d("#vjs_video_3", async () => {
        window.innerWidth > 768 ? n(".live_content_wrapper-working-area_attendee").elements[0].insertAdjacentHTML("beforeend", _) : (n(".live_content_wrapper-working-area_attendee").elements[0].insertAdjacentHTML("beforeend", M), n(".main-container").elements[0].insertAdjacentHTML("beforeend", _), n(".mobile_info_block button").elements[0].addEventListener("click", () => {
          n(".points_block").elements[0].scrollIntoView({ behavior: "smooth" });
        }));
      }), d(".point_block", async () => {
        this.checkTime(), this.setScroll();
      });
    }
    async checkTime() {
      const e = 2 * Math.PI * 17, t = n(".point_block_wrapper").elements[0];
      let s = !1;
      const a = setInterval(() => {
        var b, m, w;
        const o = n("video").elements[0].currentTime;
        if (o === 0)
          return;
        s || (this.startPosition(), s = !0);
        const r = n(".point_block.active").elements[0];
        if (o > 50 * 60 && window.innerWidth < 768 && (n(".mobile_info_block").elements[0].remove(), n(".points_block").elements[0].remove(), n(".crs_style").elements[0].remove(), clearInterval(a)), !r)
          return;
        const l = ((b = r.previousElementSibling) == null ? void 0 : b.dataset.time) || 0, c = r.querySelector(".progress_step circle"), p = (o - +l) / (+r.dataset.time - +l) * 100;
        if (c.style.strokeDashoffset = (e - p / 100 * e).toString(), p > 100) {
          r.classList.remove("active"), r.classList.add("viewed"), (m = r.nextElementSibling) == null || m.classList.add("active");
          const W = (w = r.nextElementSibling) == null ? void 0 : w.getBoundingClientRect().left, $ = t.scrollLeft, A = t.clientWidth / 2 - 100;
          if (t.scrollTo({
            left: $ + (W - A),
            behavior: "smooth"
          }), window.innerWidth < 768) {
            const g = n(".mobile_info_block").elements[0], k = n(".point_block.active").elements[0];
            g.querySelector(".time").textContent = k.querySelector(
              ".point_time span:first-of-type"
            ).textContent, g.querySelector(".text").textContent = k.querySelector("p").textContent;
          }
        }
      }, 1e3);
    }
    async startPosition() {
      const e = n("video").elements[0].currentTime, t = n(".point_block").elements, s = 2 * Math.PI * 17;
      let a = null;
      if (t.forEach((o, r) => {
        if (o.dataset.time && +o.dataset.time < e)
          o.classList.add("viewed"), a = r;
        else {
          if (a === null && r === 0) {
            o.classList.add("active");
            return;
          }
          if (o.dataset.time && a !== null && r === a + 1) {
            o.classList.add("active");
            const l = o.querySelector(".progress_step circle"), c = +t[r - 1].dataset.time, p = (e - c) / (+o.dataset.time - c) * 100;
            l.style.strokeDashoffset = (s - p / 100 * s).toString();
          }
        }
      }), window.innerWidth < 768) {
        const o = n(".mobile_info_block").elements[0], r = n(".point_block.active").elements[0];
        if (!r) {
          o.querySelector(".time").textContent = "44:00", o.querySelector(".text").textContent = "Get the done for you partnership with our top freelancers, resources, community and support to fast track your success.” My opinion is it doesn’t indicate that we are selling something, and it would be interesting to learn more about this";
          return;
        }
        o.querySelector(".time").textContent = r.querySelector(
          ".point_time span:first-of-type"
        ).textContent, o.querySelector(".text").textContent = r.querySelector("p").textContent;
      }
    }
    setScroll() {
      const e = n(".point_block_wrapper").elements[0];
      n(".btns_desktop .next").elements[0].addEventListener("click", () => {
        e.scrollTo({
          left: e.scrollLeft + 200,
          behavior: "smooth"
        });
      }), n(".btns_desktop .prev").elements[0].addEventListener("click", () => {
        e.scrollTo({
          left: e.scrollLeft - 200,
          behavior: "smooth"
        });
      }), e.addEventListener("scroll", () => {
        S("scroll"), e.scrollLeft === 0 ? (n(".btns_desktop .prev").elements[0].classList.add("disabled"), n(".shadows").elements[0].classList.add("left")) : (n(".btns_desktop .prev").elements[0].classList.remove("disabled"), n(".shadows").elements[0].classList.remove("left")), e.scrollLeft <= e.scrollWidth - e.clientWidth && e.scrollLeft > e.scrollWidth - e.clientWidth - 2 ? (n(".btns_desktop .next").elements[0].classList.add("disabled"), n(".shadows").elements[0].classList.add("right")) : (n(".btns_desktop .next").elements[0].classList.remove("disabled"), n(".shadows").elements[0].classList.remove("right"));
      });
    }
  }
  new P();
})();
//# sourceMappingURL=index.js.map
