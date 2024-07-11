(function() {
  "use strict";
  const s = (i, n, t, o = "") => {
    window.dataLayer = window.dataLayer || [];
    const a = {
      event: "event-to-ga4",
      event_name: i,
      event_desc: n,
      event_type: t,
      event_loc: o.replace(/  +/g, " ")
    };
    window.dataLayer.push(a), console.log("Event obj: ", a);
  }, l = ({ name: i, dev: n }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, m = (i) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, h = (i, n, t, o, a = 3e3, u = 1) => {
    let p, d;
    if (p = new IntersectionObserver(
      function(r) {
        r[0].isIntersecting === !0 ? d = setTimeout(() => {
          s(
            n,
            r[0].target.dataset.visible || o || "",
            "Visibility",
            t
          ), p.disconnect();
        }, a) : (console.log("Element is not fully visible"), clearTimeout(d));
      },
      { threshold: [u] }
    ), typeof i == "string") {
      const r = document.querySelector(i);
      r && p.observe(r);
    } else
      p.observe(i);
  }, c = (i) => new Promise((n) => {
    const t = document.querySelector(i);
    if (t)
      return n(t);
    const o = new MutationObserver(() => {
      const a = document.querySelector(i);
      a && (n(a), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), e = "https://conversionratestore.github.io/projects/buzzpatch/stuffypatch/img", g = `body header .navbar {
  padding: 18px 2% 10px;
  background: #1CADE6;
  box-shadow: 0px 1px 10px 0px rgba(72, 67, 69, 0.21);
}
@media (max-width: 768px) {
  body header .navbar {
    padding: 12px 16px !important;
    background: #81D0EF !important;
  }
}
body header .navbar .nav-item {
  padding: 0 10px;
}
body .container.js-heading.js-desktop,
body header .abs.top-right,
body #children-safe,
body section.scientific,
body section.c-yellow {
  display: none;
}
body .js-heading.js-mobile.header-shipping,
body .shipping-noti.js-mobile,
body #flowers,
body header .js-mobile.wave-bg img {
  display: none;
}
@media (max-width: 768px) {
  body header .navbar .row.no-gutters {
    align-items: center;
  }
  body.zenpatch-template header nav .js-btn.btn-primary {
    margin-top: 0 !important;
  }
}

.custom-container {
  --padding-inline: 16px;
  max-width: calc(1136px + var(--padding-inline) * 2);
  margin: 0 auto;
  padding: 0 var(--padding-inline);
}

section.breathe {
  position: relative;
  background: #81D0EF;
  padding: 0 0 117px 0;
  text-align: center;
}
@media (max-width: 768px) {
  section.breathe {
    padding: 0 0 63px 0;
  }
}
@media (max-width: 550px) {
  section.breathe {
    padding: 0 0 43px 0;
  }
}
section.breathe .custom-container {
  z-index: 1;
  position: relative;
}
section.breathe .trustpilot {
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 8px 19px;
  border-radius: 0px 0px 15px 15px;
  background: #FFF;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 56px;
}
section.breathe .trustpilot > div {
  text-align: center;
}
section.breathe .trustpilot > div p:first-child {
  color: var(--Text, #212529);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 18px !important;
  margin: 0;
  letter-spacing: 0;
  /* 128.571% */
}
section.breathe .trustpilot > div p:last-child {
  color: var(--Text, #212529);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 18px !important;
  margin: 0;
  letter-spacing: 0;
  /* 150% */
}
@media (max-width: 768px) {
  section.breathe .trustpilot {
    border-radius: 0;
    width: auto;
    margin: 0 -16px 24px;
    padding: 2px 12px;
  }
}
section.breathe .heading-1 {
  color: var(--Midnight, #1F1F5B);
  text-align: center;
  font-family: "Din Condensed", "Roboto", sans-serif;
  font-size: 72px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 80px !important;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  max-width: 800px;
  margin: 0 auto 24px;
}
@media (max-width: 991px) {
  section.breathe .heading-1 {
    font-size: 32px !important;
    font-style: normal;
    font-weight: 400;
    line-height: 40px !important;
    /* 125% */
    letter-spacing: 0.16px;
    margin: 0 auto 16px;
  }
}
@media (max-width: 768px) {
  section.breathe .heading-1 {
    margin: 0 -5px 16px;
  }
}
section.breathe .properties {
  padding: 0;
  list-style: none;
  margin: 0 auto 56px;
  width: -moz-fit-content;
  width: fit-content;
}
section.breathe .properties li {
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
section.breathe .properties li:last-child {
  margin-bottom: 0;
}
section.breathe .properties li p {
  color: var(--Midnight, #1F1F5B);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600;
  line-height: 24px !important;
  margin: 0;
  letter-spacing: 0;
  /* 150% */
}
@media (max-width: 768px) {
  section.breathe .properties {
    margin: 0 auto 0;
  }
}
section.breathe .cta {
  position: relative;
  z-index: 1;
  color: #000;
  font-size: 36px !important;
  padding: 13px 44px;
  font-weight: 400;
  line-height: 36px !important;
  /* 100% */
  letter-spacing: 1.8px;
  text-transform: uppercase;
  margin: 0 auto 24px;
}
@media (max-width: 991px) {
  section.breathe .cta {
    font-size: 24px !important;
    line-height: 40px !important;
    /* 166.667% */
    margin: 0 auto 16px;
    padding: 12px 39px;
  }
}
section.breathe .learn-more {
  cursor: pointer;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto;
}
section.breathe .learn-more p {
  color: var(--Black, #0C0B0B);
  text-align: center;
  font-family: "Din Condensed", "Roboto", sans-serif;
  font-size: 22px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 28px !important;
  text-transform: uppercase;
  margin: 0 auto 4px;
  letter-spacing: 0;
}
section.breathe .bottom-wave-tablet {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  display: none;
}
@media (max-width: 768px) {
  section.breathe .bottom-wave-tablet {
    display: block;
  }
}
section.breathe .bottom-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  z-index: 2;
}
@media (max-width: 768px) {
  section.breathe .bottom-wave {
    display: none;
  }
}
section.breathe .top-hand,
section.breathe .bottom-hand {
  width: 450px;
  height: 435.47px;
}
@media (max-width: 1280px) {
  section.breathe .top-hand,
  section.breathe .bottom-hand {
    max-width: 300px;
    height: auto;
    width: auto;
  }
}
@media (max-width: 768px) {
  section.breathe .top-hand,
  section.breathe .bottom-hand {
    display: none;
  }
}
section.breathe .top-hand {
  position: absolute;
  top: -89px;
  right: -103px;
}
@media (max-width: 1280px) {
  section.breathe .top-hand {
    top: 0;
  }
}
section.breathe .bottom-hand {
  position: absolute;
  bottom: 0;
  left: 0;
}
section.breathe .chamomile {
  position: absolute;
  bottom: -5px;
  right: 176px;
  width: 185px;
  height: 185px;
  z-index: 2;
}
@media (max-width: 1280px) {
  section.breathe .chamomile {
    transform: scale(0.75);
    bottom: -30px;
  }
}
@media (max-width: 768px) {
  section.breathe .chamomile {
    display: none;
  }
}

.hand-tablet {
  display: none;
  width: 265px;
  height: 213px;
  -o-object-fit: contain;
     object-fit: contain;
  position: relative;
  margin: 12px auto -51px;
}
@media (max-width: 768px) {
  .hand-tablet {
    display: block;
  }
}

section.top-features {
  padding: 0;
  margin: 0;
  background: #FFF;
}

.product-feature {
  padding: 24px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-feature .heading-2 {
  color: #1CADE6;
  font-family: "Din Condensed", "Roboto", sans-serif;
  font-size: 72px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 80px !important;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
@media (max-width: 991px) {
  .product-feature .heading-2 {
    font-size: 30px !important;
    line-height: 32px !important;
    /* 106.667% */
    letter-spacing: 0.15px;
  }
}
.product-feature .product-feature__text {
  width: 54.57%;
}
@media (max-width: 550px) {
  .product-feature .product-feature__text {
    width: 57.1%;
  }
}
.product-feature .product-feature__img {
  width: 40.49%;
}
@media (max-width: 550px) {
  .product-feature .product-feature__img {
    width: 180px;
    height: 180px;
  }
}
.product-feature p {
  color: var(--NATPAT-BLUE, #515151);
  font-family: "Roboto", sans-serif;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 32px !important;
  letter-spacing: 0;
  margin: 0;
}
.product-feature p b {
  color: var(--NATPAT-BLUE, #1F4FC9);
  font-weight: 700;
}
@media (max-width: 991px) {
  .product-feature p {
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: 0.08px;
  }
}
.product-feature img {
  max-width: 100% !important;
  height: auto;
  display: block;
}
@media (max-width: 550px) {
  .product-feature {
    align-items: flex-start;
  }
  .product-feature:nth-child(odd) .product-feature__img {
    margin-right: -45px;
  }
  .product-feature:nth-child(even) .product-feature__img {
    margin-left: -45px;
  }
}

body .itch-problems {
  padding-top: 20px;
  padding-bottom: 0;
  background: #fff;
}
body .itch-problems #accordion-MP {
  max-width: 858px;
  margin: 0 auto;
  padding-top: 60px;
}
@media (max-width: 991px) {
  body .itch-problems #accordion-MP {
    padding-top: 28px;
  }
}
body .itch-problems .accordion-MP-title {
  color: var(--Text, #212529);
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 30px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 32px !important;
  margin: 0;
  /* 106.667% */
}
@media (max-width: 991px) {
  body .itch-problems .accordion-MP-title {
    font-size: 22px !important;
    line-height: 26.4px !important;
    /* 120% */
  }
}
body .itch-problems .title-container {
  margin-bottom: 0;
}
body .itch-problems .title-container h2 {
  background: #1CADE6;
  margin: 16px 0;
  padding: 6px 0;
}
@media (max-width: 991px) {
  body .itch-problems .title-container h2 {
    margin: 8px 0;
  }
}
body .itch-problems .title-container h2 .title-highlight {
  color: var(--Sleepy-White, #FFF) !important;
  font-size: 48px !important;
  font-weight: 400;
  line-height: 68px !important;
  text-transform: uppercase;
}
@media (max-width: 991px) {
  body .itch-problems .title-container h2 .title-highlight {
    font-size: 40px !important;
    line-height: 48px !important;
    /* 120% */
  }
}
body .itch-problems + .c-white.js-desktop {
  padding: 0 0 100px;
}
body .itch-problems .card-MP {
  padding: 0 40px;
  margin-bottom: 15.5px;
}
@media (max-width: 991px) {
  body .itch-problems .card-MP {
    padding: 0 20px;
    margin-bottom: 18px;
  }
}
body .itch-problems .card-MP:before {
  background: #2B489B;
  top: 30px;
}
body .itch-problems .arrow-down {
  top: 20px !important;
}
body .itch-problems .card-MP-link,
body .itch-problems .card-MP-body p {
  color: var(--Text, #212529);
  font-family: "Roboto", sans-serif;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 32px !important;
  /* 160% */
  letter-spacing: 0;
}
@media (max-width: 991px) {
  body .itch-problems .card-MP-link,
  body .itch-problems .card-MP-body p {
    font-size: 16px !important;
    line-height: 20px !important;
    /* 150% */
  }
}
body .itch-problems .card-MP-body {
  padding-top: 15px;
}
body .itch-problems .btn-accordion-MP {
  color: var(--Sleepy-Black, #0C0B0B);
  font-size: 24px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  padding: 25px 50px;
  border-radius: 52px;
  background: #FFE401;
  box-shadow: 0px 2px 4px 0px rgba(12, 11, 11, 0.1), 0px 12px 32px 0px rgba(0, 0, 0, 0.05);
  width: -moz-fit-content;
  width: fit-content;
  margin: 18px 0 30px;
}
@media (max-width: 991px) {
  body .itch-problems .btn-accordion-MP {
    margin: 18px 0 20px;
  }
}

html body .effectiveness .js-heading .js-btn.btn-primary {
  background: #FFE401 !important;
  color: #000 !important;
}
@media (max-width: 991px) {
  html body .effectiveness .js-heading .js-btn.btn-primary {
    font-size: 24px !important;
    margin-bottom: 28px;
  }
}/*# sourceMappingURL=styles.css.map */`, x = (
    /* HTML */
    `
    <section class="top-features" id="top-features">
      <div class="custom-container">
        <div class="product-features-wrapper">
          <div class="product-feature">
            <div class="product-feature__text">
              <h2 class="heading-2">Clear Breathing with Confidence</h2>
              <p>The natural sticker-patch that clears your child's congestion, providing fresh air and <b>fighting stuffiness</b> effortlessly!</p>
            </div>
            <div class="product-feature__img">
              <img src="${e}/kid-breathing.png" alt="kid breathing">
            </div>
          </div>
          <div class="product-feature">
          <div class="product-feature__img">
          <img src="${e}/pacifier.png" alt="pacifier">
            </div>
            <div class="product-feature__text">
              <h2 class="heading-2">Purely Natural and Safe</h2>
              <p>StuffyPatch is crafted from a special blend of natural herbs and oils: <b>eucalyptus, essential oils,</b> and <b>menthol.</b></p>
            </div>
          </div>
          <div class="product-feature">
            <div class="product-feature__text">
              <h2 class="heading-2">Fast Relief, Long-Lasting Comfort</h2>
              <p>Feel relief instantly after application and, with our unique nanomaterial, enjoy the effects for up to <b>8 hours</b>!</p>
            </div>
            <div class="product-feature__img">
            <img src="${e}/kid-sleeping.png" alt="kid sleeping">
            </div>
          </div>
        </div>
      </div>
    </section>
`
  ), b = (
    /* HTML */
    `
  <section class="breathe">
    <style>
      ${g}
    </style>
    <div class="custom-container">
      <div class="trustpilot">
        <div>
          <p>Excellent</p>
          <p>1,273 Reviews</p>
        </div>
        <img src="${e}/green-stars.svg" alt="5 stars">
        <img src="${e}/trustpilot.svg" alt="trustpilot">
      </div>
      <h1 class="heading-1">Breathe Easy with StuffyPatch – Fast Relief from Congestion!</h1>
      <ul class="properties">
        <li>
          <img src="${e}/kid.svg" alt="kid">
          <p>Safe for kids (0+)</sp>
        </li>
        <li>
          <img src="${e}/leaves.svg" alt="leaves">
          <p>All natural content & chemical free</p>
        </li>
        <li>
          <img src="${e}/8h.svg" alt="8 hours">
          <p>Effective for up to 8 hours</p>
        </li>
      </ul>
      <img class="hand-tablet" src="${e}/patches.png" alt="">
      <button class="cta js-btn btn-primary">Get Instant Relief Now!</button>
      <div class="learn-more">
        <p>Learn more</p>
        <img src="${e}/arrows-down.svg" alt="scroll to the next section">
      </div>
    </div>

    <img class="bottom-wave" src="${e}/wabe-white-desktop.svg" alt="">
    <img class="bottom-wave-tablet" src="${e}/wave-white-mobile.svg" alt="">
    <img class="top-hand" src="https://www.natpat.com/cdn/shop/files/stuffypatch-hand-top_large.png" alt="">
    <img class="bottom-hand" src="https://www.natpat.com/cdn/shop/files/stuffypatch-hand-bottom_large.png" alt="">
    <img class="chamomile" src="${e}/chamomile.svg" alt="">
    
  </section>

  ${x}
`
  );
  m(""), l({ name: "Stuffypatch homepage", dev: "AK" });
  class f {
    constructor() {
      this.initializePage();
    }
    initializePage() {
      this.drawTopSection(), this.moveBlockHigher();
    }
    drawTopSection() {
      c(".c-white.js-desktop").then((n) => {
        n.insertAdjacentHTML("beforebegin", b);
        const t = setInterval(() => {
          document.querySelector(".hand-banner #open") && document.querySelector(".cta") && (clearInterval(t), document.querySelector(".cta").addEventListener("click", () => {
            document.querySelector(".hand-banner #open").click();
          }));
        }, 100);
        this.handleLogicOnLearnMoreAndVisibilty();
      });
    }
    changeAccordionBtnText() {
      const n = setInterval(() => {
        document.querySelectorAll(".itch-problems .btn-accordion-MP")[4] && (clearInterval(n), document.querySelectorAll(".itch-problems .btn-accordion-MP").forEach((t) => {
          t.textContent = "Get it now!", console.log(t.textContent);
        }));
      }, 100);
    }
    changeSubtitleText() {
      c("body .itch-problems h2 + .accordion-MP-title").then((n) => n.textContent = "are you looking to solve?");
    }
    moveBlockHigher() {
      const n = setInterval(() => {
        if (document.querySelector(".top-features") && document.querySelector(".itch-problems")) {
          clearInterval(n);
          const t = document.querySelector(".top-features"), o = document.querySelector(".itch-problems");
          t.insertAdjacentElement("afterend", o), this.changeSubtitleText(), this.changeAccordionBtnText();
        }
      }, 100);
    }
    handleLogicOnLearnMoreAndVisibilty() {
      const n = setInterval(() => {
        document.querySelector("#top-features") && document.querySelector(".learn-more") && (clearInterval(n), document.querySelector(".learn-more").addEventListener("click", () => {
          s("exp_stuffypatch_button_01", "Learn more", "Button", "First screen");
          const t = document.querySelector("#top-features");
          if (t) {
            const a = t.getBoundingClientRect().top + window.pageYOffset + -200;
            window.scrollTo({ top: a, behavior: "smooth" });
          }
        }), h(".top-features", "exp_stuffypatch_element_01", "Under first screen", "New info block", 0, 0.5));
      }, 100);
    }
  }
  new f();
})();
//# sourceMappingURL=index.js.map
