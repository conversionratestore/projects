(function() {
  "use strict";
  const u = `#root {
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
.crs_footer button.disabled {
  background: #d3d3d3;
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
  display: none;
}
.crs_plans_v1 .plans .price.active {
  display: block;
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
}/*# sourceMappingURL=style.css.map */`, p = (i) => new Promise((e) => {
    const n = document.querySelector(i);
    n && e(n);
    const s = new MutationObserver(() => {
      const o = document.querySelector(i);
      o && (e(o), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class c {
    constructor(e) {
      this.elements = e instanceof c ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, s) {
      return typeof n == "function" && (s = n, n = ""), this.elements.forEach((o) => {
        o.addEventListener(e, function(r) {
          var l;
          if (n !== "") {
            let d = (l = r.target) == null ? void 0 : l.closest(n);
            d && (s == null || s.call(d, r));
          } else
            s == null || s.call(o, r);
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
      for (let n of this.elements)
        e(new c(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const s = e.split("-").map((o, r) => r === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[s] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new c(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(s) {
        s.setAttribute(e, n);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(n) {
        n.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(n) {
        n.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const t = (i) => new c(i), g = (i, e) => {
    i.style.transition = "height 500ms", i.style.height = "0", setTimeout(() => {
      i.style.display = "none";
    }, 500);
  }, h = (i, e) => {
    i.style.transition = "height 500ms", i.style.overflow = "hidden", i.style.display = "block", i.style.height = "auto";
    const s = i.clientHeight;
    i.style.height = "0", setTimeout(() => {
      i.style.height = s + "px";
    }, 0);
  }, a = "https://conversionratestore.github.io/projects/merkury/img", m = (
    /* HTML */
    `
  <div class="crs_header">
    <img src="${a}/head-img.png" alt="head img" />
    <h1>Choose your plan and start your 30-day free trial</h1>
    <ul>
      <li>
        <p>
          <img src="${a}/msg.svg" alt="message" />
          <b>Capture every moment that matters</b>
        </p>
        <p>Capture and review key events with up to 30-days video history</p>
      </li>
      <li>
        <p>
          <img src="${a}/vide.svg" alt="video" />
          <b>Real-time alerts, smarter security</b>
        </p>
        <p>Be the first to know with AI-powered detection and smart notifications for motion, people, and pets.</p>
      </li>
    </ul>
  </div>
`
  ), y = (
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
        <p class="old_price">$3.99/mo</p>
        <p class="price yearly active">$3.33/mo</p>
        <p class="price monthly">$3.99/mo</p>
        <p class="save">Save 20%</p>
      </li>
      <li class="active">
        <p class="title">Plus</p>
        <p class="old_price">$5.99/mo</p>
        <p class="price yearly active">$5.00/mo</p>
        <p class="price monthly">$5.99/mo</p>
        <p class="save">Save 20%</p>
      </li>
      <li>
        <p class="title">
          <img src="${a}/fire.svg" alt="fire" />
          Premium
        </p>
        <p class="old_price">$12.99/mo</p>
        <p class="price yearly active">$10.83/mo</p>
        <p class="price monthly">$12.99/mo</p>
        <p class="save">Save 20%</p>
      </li>
    </ul>
    <div class="features" data-plan="plus">
      <ul class="plan_features">
        <li data-popup="cameras">
          <img src="${a}/camera.svg" alt="camera" />
          <p>Support up to: <b>2 cameras</b></p>
        </li>
        <li data-popup="storage">
          <img src="${a}/video-file.svg" alt="video-file" />
          <p>Store video history <b>for 14 days</b></p>
        </li>
        <li data-popup="download">
          <img src="${a}/load.svg" alt="download" />
          <p>Download and share recordings</p>
        </li>
        <li class="plus" data-popup="detect">
          <img src="${a}/detect.svg" alt="detect" />
          <p>Person/pet/vehicle detection</p>
        </li>
        <li class="plus" data-popup="notify">
          <img src="${a}/notify.svg" alt="notify" />
          <p>Enhanced notifications</p>
        </li>
        <li class="premium" data-popup="help">
          <img src="${a}/help.svg" alt="help" />
          <p>Send help</p>
        </li>
      </ul>
      <div class="basic_features">
        <p>Available in free and paid plans</p>
        <ul>
          <li data-popup="motion">
            <img src="${a}/motion.svg" alt="motion" />
            <p>Motion notifications</p>
          </li>
          <li data-popup="zones">
            <img src="${a}/zones.svg" alt="zones" />
            <p>Active motion zones</p>
          </li>
          <li data-popup="stream">
            <img src="${a}/stream.svg" alt="stream" />
            <p>Live stream</p>
          </li>
          <li data-popup="talk">
            <img src="${a}/talk.svg" alt="talk" />
            <p>Two way talk</p>
          </li>
          <li data-popup="schedules">
            <img src="${a}/schedules.svg" alt="schedules" />
            <p>Rules and schedules</p>
          </li>
        </ul>
      </div>
      <p class="see_all">+ see all features</p>
    </div>
  </div>
`
  ), x = (
    /* HTML */
    `
  <div class="crs_reviews">
    <div class="top">
      <img src="${a}/left-l.svg" alt="l" />
      <p>
        <img src="${a}/stars.svg" alt="satrs" />
        <span><b>Rated 4.75</b> from <b>19,750</b> reviews</span>
      </p>
      <img src="${a}/right-l.svg" alt="r" />
    </div>
    <div class="review">
      <div>
        <img src="${a}/user.svg" alt="user" />
        <img src="${a}/quotes.svg" alt="quotes" />
      </div>
      <p>
        Having a home security system gives me real peace of mind! With the subscription, I can check live footage
        anytime, store important video clips, and get instant alerts when motion is detected. It’s easy to use, and
        knowing I can always look back at recordings makes me feel safer. Whether I’m watching over my pets, keeping an
        eye on my home while traveling, or making sure my family is protected, this service is totally worth it!
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
          <b>Day 30</b><br />Love what you see? Your subscription will continue seamlessly for uninterrupted safety.
          Cancel anytime.
        </p>
      </li>
    </ul>
  </div>
`
  ), b = (
    /* HTML */
    `
  <div class="crs_footer">
    <button>Start 30-day free trial</button>
    <p>2 taps to start, super easy to cancel</p>
  </div>
`
  ), _ = (
    /* HTML */
    ' <div class="crs_popup"></div> '
  ), w = (i) => (
    /* HTML */
    `
    <div class="indicator"></div>
    <div class="title">
      <img src="${a}/${i.img}" alt="video-file" />
      <p>${i.title}</p>
    </div>
    <ul>
      <li>
        <p>
          <b>${i.subTitle}</b>
        </p>
        <p>${i.text}</p>
      </li>
    </ul>
  `
  ), k = {
    cameras: {
      img: "camera.svg",
      title: "Support up to <b><span></span> Cameras</b>",
      subTitle: "Total Coverage, One App",
      text: "Manage all your cameras from one place, keeping every angle of your home secure without the hassle."
    },
    storage: {
      img: "video-file.svg",
      title: "Store video history for <b><span></span> days</b>",
      subTitle: "Never Miss a Moment",
      text: "Access a full <span></span> days of past recordings to review key events, keep an eye on your home, and have proof when you need it most"
    },
    download: {
      img: "load.svg",
      title: "Download and share recordings",
      subTitle: "Save & Share Instantly",
      text: " Easily download clips and share them with family, neighbors, or authorities to stay informed and protected."
    },
    detect: {
      img: "detect.svg",
      title: "Person/pet/vehicle detection",
      subTitle: "Get Alerts That Matter to You",
      text: "Customize your notifications to focus on what's important. Choose to receive alerts for people, pets, or vehicles—so you're only notified about the activity that matters most to you. Stay informed without unnecessary distractions."
    },
    notify: {
      img: "notify.svg",
      title: "Enhanced Notifications with Previews",
      subTitle: "See Before You Tap",
      text: "Get a snapshot and video preview in your alerts, so you know what's happening at a glance—without opening the app."
    },
    help: {
      img: "help.svg",
      title: "Send help. Quick Emergency Assistance",
      subTitle: "Help, Just a Tap Away",
      text: "Instantly request police, fire, or medical assistance for ultimate peace of mind, no matter where you are."
    },
    motion: {
      img: "motion.svg",
      title: "Motion Notifications",
      subTitle: "Stay Alert, Instantly",
      text: "Get real-time alerts whenever motion is detected, so you never miss a moment that matters. Whether it's a visitor at your door or unexpected movement while you're away, instant notifications keep you informed and in control."
    },
    zones: {
      img: "zones.svg",
      title: "Active Motion Zones",
      subTitle: "Focus on What Matters",
      text: "Customize your motion detection zones to reduce unnecessary alerts. Highlight areas that need monitoring—like your front door or driveway—while ignoring others, so you only get notified about what truly matters."
    },
    stream: {
      img: "stream.svg",
      title: "Live Stream",
      subTitle: "Check In Anytime, Anywhere",
      text: "See what's happening at home in real time with a high-quality live stream. Whether you're at work or on vacation, stay connected and ensure everything is safe with just a tap."
    },
    talk: {
      img: "talk.svg",
      title: "Two-way Talk",
      subTitle: "Hear and Be Heard",
      text: "Communicate directly through your camera with built-in two-way talk. Greet guests, give instructions to delivery drivers, or even deter unwanted visitors—no matter where you are."
    },
    schedules: {
      img: "schedules.svg",
      title: "Rules and Schedules",
      subTitle: "Automate for Peace of Mind",
      text: "Set custom rules and schedules to match your routine. Turn motion detection on or off at specific times or create automations that fit your schedule for a smarter, hassle-free experience."
    }
  };
  f({ name: "Exp - Plans Page", dev: "YK" });
  class C {
    constructor() {
      this._selection = !1, this.init();
    }
    async init() {
      this.observer(), this.render();
    }
    async render() {
      var s;
      await p("#root");
      const e = t("body").elements[0];
      e.insertAdjacentHTML("afterbegin", `<style class="crs_style">${u}</style>`), (s = e.querySelector("#root")) == null || s.insertAdjacentHTML("afterend", '<div id="crs_plans_page"></div>'), await p("#crs_plans_page");
      const n = t("#crs_plans_page").elements[0];
      n.insertAdjacentHTML("beforeend", m), n.insertAdjacentHTML("beforeend", y), n.insertAdjacentHTML("beforeend", x), n.insertAdjacentHTML("beforeend", v), n.insertAdjacentHTML("beforeend", b), n.insertAdjacentHTML("beforeend", _), n.insertAdjacentHTML("beforeend", '<div class="dark_bg"></div>'), this.addEvents(), p(".MuiTab-wrapper").then(() => {
        t(".MuiTab-wrapper").elements[1].click(), this.selectPlan("plus");
      });
    }
    addEvents() {
      t(".crs_tabs span").on("click", (e) => {
        const n = e.target, s = n.getAttribute("data-type");
        t(".crs_tabs span").removeClass("active"), n.classList.add("active"), t(".crs_tabs").attr("data-active", s || ""), t(".plans").attr("data-active", s || ""), s === "monthly" ? (t(".price.active").removeClass("active"), t(".price.monthly").addClass("active")) : (t(".price.active").removeClass("active"), t(".price.yearly").addClass("active")), t(".MuiTab-wrapper").elements[s === "monthly" ? 0 : 1].click(), this.selectPlan(t(".plans li.active .title").text().toLowerCase().trim());
      }), t(".plans li").on("click", (e) => {
        var o, r;
        if (this.selection) return;
        const n = e.target.closest("li");
        t(".plans li").removeClass("active"), n.classList.add("active");
        const s = ((r = (o = n.querySelector(".title")) == null ? void 0 : o.textContent) == null ? void 0 : r.toLowerCase().trim()) || "";
        t(".features").attr("data-plan", s), t(".features > ul li:first-of-type b").text(
          s === "basic" ? "1 camera" : s === "plus" ? "2 cameras" : "10 cameras"
        ), t(".features > ul li:nth-of-type(2) b").text(
          s === "basic" ? " for 2 days" : s === "plus" ? "for 14 days" : "for 30 days"
        ), this.selectPlan(s);
      }), t(".see_all").on("click", () => {
        t(".see_all").text().includes("+") ? (h(t(".basic_features").elements[0]), t(".see_all").text("- hide all features")) : (g(t(".basic_features").elements[0]), t(".see_all").text("+ see all features"));
      }), t(".features li").on("click", (e) => {
        var r;
        const n = ((r = e.target.closest("li")) == null ? void 0 : r.getAttribute("data-popup")) || "cameras";
        t(".crs_popup").html(w(k[n]));
        const s = t(".features").attr("data-plan") || "basic";
        let o = 0;
        n === "cameras" && (o = s === "basic" ? 1 : s === "plus" ? 2 : 10), n === "storage" && (o = s === "basic" ? 2 : s === "plus" ? 14 : 30), t(".crs_popup p span").each((l, d) => {
          l.text(o.toString());
        }), t(".dark_bg").addClass("active"), t(".crs_popup").addClass("active");
      }), t(".dark_bg, .crs_popup .indicator").on("click", (e) => {
        t(".dark_bg").removeClass("active"), t(".crs_popup").removeClass("active");
      }), t(".crs_footer button").on("click", () => {
        this.selection || (t(".MuiCardActions-root button").elements[0].click(), t("#geeni-next-btn").elements[0] && t("#geeni-next-btn").elements[0].click());
      });
    }
    async selectPlan(e) {
      var s, o, r, l;
      await p('button[aria-label="Next"]');
      let n = ((o = (s = t(".MuiCardContent-root>p").elements[0]) == null ? void 0 : s.textContent) == null ? void 0 : o.toLowerCase().trim()) || "";
      for (; n !== e.trim(); )
        this.selection = !0, t('button[aria-label="Next"]').elements[0].click(), await p(".MuiCardContent-root>p"), await new Promise((d) => setTimeout(d, 700)), n = ((l = (r = t(".MuiCardContent-root>p").elements[0]) == null ? void 0 : r.textContent) == null ? void 0 : l.toLowerCase().trim()) || "";
      this.selection = !1;
    }
    observer() {
      const e = new MutationObserver(() => {
        window.location.pathname === "/plans" ? t(".crs_style").elements[0] || (console.log("plans page"), e.disconnect(), t("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${u}</style>`), t("#crs_plans_page").style("display", "block")) : t(".crs_style").elements[0] && (console.log("not plans page"), e.disconnect(), t("#crs_plans_page").style("display", "none"), t(".crs_style").elements[0].remove()), e.observe(document.body, { childList: !0, subtree: !0 });
      });
      e.observe(document.body, { childList: !0, subtree: !0 });
    }
    set selection(e) {
      this._selection = e, e ? t(".crs_footer button").addClass("disabled") : t(".crs_footer button").removeClass("disabled");
    }
    get selection() {
      return this._selection;
    }
  }
  window.innerWidth < 768 && new C();
})();
//# sourceMappingURL=index.js.map
