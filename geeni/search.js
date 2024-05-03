(function() {
  "use strict";
  const l = (e, t, n, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: n,
      event_loc: a
    }), console.log(`Event: ${e} | ${t} | ${n} | ${a.replace(/  +/g, " ")}`);
  }, k = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, F = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, s = (e) => new Promise((t) => {
    const n = document.querySelector(e);
    if (n)
      return t(n);
    const a = new MutationObserver(() => {
      const r = document.querySelector(e);
      r && (t(r), a.disconnect());
    });
    a.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), g = "https://conversionratestore.github.io/projects/geeni/img/search", S = (
    /*html*/
    `
  <style>
    #shopify-section-template--16970486120700__section-marquee,
    [data-nav-search-open]
     {
      display: none !important;
    }

    .site-header__background {
      top: 40px;       
      display: none;
    }

    .header__dropdown {
      background: #fff;
      /* margin-top: 0; */
    }

    #NavStandard {
      z-index: 90;
    }

    .logo {
      z-index: 100;   
    }
  
    .header__dropdown__wrapper {
      transition-delay: 0s !important;
    }

    #NavStandard {
      background: #F4F8F9;
    }

    #NavStandard  [aria-label="Search"] {
      display: none;
    }
    
    #NavStandard {
      align-items: center;
    }

    .search-page__title,
    .search__top {
      display: none;
    }

    .logo {
      margin: 20px 0;
    }

    .logo, .logo a {
      width: 144px;
      height: 56px;
      flex-shrink: 0;
      padding: 0;
    }

    [href="/account"] {
      margin-right: 4px;
    }

    [href="/account"] span.log {
      color: var(--Black-900, #000);
      text-align: center;
      font-family: Manrope, var(--FONT-STACK-BODY);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      margin: 0 8px 0 12px;
    }

   /* Marquee styles */
    .marquee {
      --gap: 48px;
      position: relative;
      display: flex;
      overflow: hidden;
      user-select: none;
      gap: var(--gap);
      background: #24201F;
      padding: 8px 0px;
    }

     .has-scrolled .marquee {
      display: none;
    }

    .marquee__content {
      flex-shrink: 0;
      display: flex;
      justify-content: normal;
      gap: var(--gap);
      min-width: 100%;
      animation: scroll 80s linear infinite; 
    }

    .marquee ul {
      margin: 0;
      padding: 0;
    }

    .marquee__item {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .marquee__item p {
      color: var(--Grey-200, #F7F7F7);
      text-align: center;
      font-family: Manrope, var(--FONT-STACK-BODY);
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 153.846% */
      margin: 0;
    }

    .marquee__item p b {
      font-weight: 700;
    }

    .new-nav {
      position: relative;
      display: flex;
      gap: 0;
      flex-wrap: wrap;
      justify-content: center;
      border-top: 1px solid var(--Grey-200, #F7F7F7);
      border-bottom: 1px solid var(--Grey-200, #F7F7F7);
      background: #FFF;
    }

    .new-nav .navlink.navlink--toplevel {
      color: var(--Black-900, #000);
      font-family: Manrope, var(--FONT-STACK-BODY);
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 150% */
    }

    .new-nav [data-nav-item]:first-child .navlink.navlink--toplevel{
      color: var(--Light-blue-900, #00B0EE);
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(calc(-100% - var(--gap)));
      }
    }

    /* Pause on hover */
    .marquee--hover-pause:hover .marquee__content {
      animation-play-state: paused;
    }

    /* Search input */
    .search-input {
      display: flex;
      align-items: center;
      padding: 4px;
      border-radius: 100px;
      border: 1px solid var(--Light-blue-900, #00B0EE);
      background: #FFF;
      max-width: 580px;
      min-width: 580px;
      margin: 0 auto;
    }

    .search-input p {
      margin: 0;
    }

   .search-input__hot {
      display: flex;
      padding: 8px 12px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 100px;
      background: #E7F7FD;
      flex-shrink: 0;
      height: 100%;
    }

    .search-input__hot p {
      color: var(--Black-900, #000);
      font-family: Manrope, var(--FONT-STACK-BODY);;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 153.846% */
      text-transform: capitalize;
    }

    .search-input button {
      border-radius: 100px;
      background: var(--Light-blue-900, #00B0EE);
      display: inline-flex;
      height: 40px;
      padding: 8px 16px;
      height: 100%;
      justify-content: center;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      color: #FFF;
      font-family: Manrope, var(--FONT-STACK-BODY);
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px; /* 123.077% */
      text-transform: uppercase;
      cursor: pointer;
      margin-left: auto;
    }

    .search-input input {
      padding: 0;
      border-radius: 0;
      border: 0;
      background: transparent;
      color: var(--Grey-800, #4A4A4A);
      font-family: Manrope, var(--FONT-STACK-BODY);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      width: 100%; 
      margin: 0 16px;
    }

  
    .back-nav {
      display: none;
    }

    @media (min-width: 1023px) {
      #MainContent .search-input-wrapper {
        display: none;
      }
    }

    @media (max-width: 1023px) and (min-width: 723px) {
      #MainContent .search-input-wrapper {
        margin-top: 41px;
      }
    }

    @media (max-width: 1023px) {
      .search-input-wrapper {
        padding: 16px var(--gutter-mobile);
        background: #F4F8F9;
        margin-top: 7px;
        display: flex;
      }

      .search-result {
        margin-top: 0;
        background: #fff;
        padding: 20px var(--gutter-mobile) 0;
      }

      .search-page {
        padding-top: 0;
      }

      .search-page p {
        color: var(--Black, #000);
        font-size: 20px;
        font-weight: 500;
        line-height: 28px; /* 140% */
      }

      .new-nav {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .marquee {
      --gap: 24px;
      }

      .logo {
        margin: 8px 0;
      }

      .logo, .logo a {
        width: 102.857px;
        height: 40px;
      }

      .search-input {
        min-width: auto;
      }

      .search-input__hot {
        padding: 6px 8px;
        gap: 4px;
      }

      .search-input input {
        color: var(--Grey-800, #4A4A4A);
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 153.846% */
        text-transform: capitalize;
        margin: 0 12px;
      }

      .search-input button {
        padding: 8px 10px;
        color: #FFF;
        font-size: 11px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px; /* 145.455% */
        text-transform: uppercase;
      }
    }

  </style>
`
  );
  F("exp_search_feature"), k({ name: "Introduces personalized search", dev: "AK" }), L();
  function L() {
    window.location.pathname.includes("/search") && M(), s("#NavStandard").then((e) => {
      document.head.insertAdjacentHTML("beforeend", S), q(), B(), T(), E();
    }), s(".search-input").then(() => {
      x(".search-input", "exp_search_feature_section_01", "Visibility", "Header");
    }), document.body.addEventListener("click", (e) => {
      e.target.closest('[data-element="about-us"]') ? l("exp_search_feature_button_02", "About us", "Button", "Header") : e.target.closest(".back-nav__inner") && (l("exp_search_feature_button_03", "Back", "Button", "Search result"), window.history.back());
    }), s(".marquee").then(() => {
      x(".marquee", "exp_search_feature_section_02", "Visibility", "Header");
    });
  }
  function q() {
    const e = [
      ["Millions of Users", "smile"],
      ["<b>4.8</b> Stars with over <b>400.000</b> reviews", "star"],
      ["1-Year Warranty on All Products", "check"],
      ["<b>FREE</b> Shipping orders over <b>$69</b>", "shipping"]
    ];
    let n = Array(4).fill(e).flat();
    const a = (
      /*html*/
      `
    <div>
      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
        ${n.map(([r, i]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${g}/${i}.svg" alt="">
                    <p>${r}</p>
                  </div>
                `
      )).join("")}
        </ul>
  
        <ul aria-hidden="true" class="marquee__content">
          ${n.map(([r, i]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${g}/${i}.svg" alt="">
                    <p>${r}</p>
                  </div>
                `
      )).join("")}
        </ul>
      </div>
    </div>  
  `
    );
    document.getElementById("SiteHeader").insertAdjacentHTML("beforebegin", a);
  }
  function B() {
    let e = document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)"), t = document.createElement("div");
    t.className = "new-nav", e.forEach((n) => {
      t.appendChild(n);
    }), document.getElementById("SiteHeader").insertAdjacentElement("beforeend", t), s(".new-nav .menu__item.child:last-child").then((n) => n.insertAdjacentHTML(
      "afterend",
      /*html*/
      `
    <div class="menu__item child" data-element="about-us" data-nav-item="" data-hover-disclosure-toggle="">
      <a href="/pages/about-us-and-contact-us" data-top-link="" class="navlink navlink--toplevel">
        <span class="navtext">About us</span>
      </a>
    </div>`
    ));
  }
  function T() {
    const e = [
      "Geeni Look Indoor Camera",
      "Geeni Hawk 3 Outdoor Camera",
      "Geeni Dot Smart Plug"
    ], t = [
      "Geeni Freebird Wire-Free Battery Camera",
      "Geeni Lookout 2k Outdoor Camera",
      "Geeni Doorpeek Wired Doorbell",
      "Geeni Prisma Plus 800 Smart Bulb"
    ], n = [...e, ...t], a = n[Math.floor(Math.random() * n.length)], i = (
      /*html*/
      `
  <div class="search-input-wrapper">
    <div class="back-nav">
      <div class="back-nav__inner">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11 14C11.1395 14 11.2792 13.9467 11.3857 13.8402C11.5988 13.627 11.5988 13.2819 11.3857 13.0689L6.31676 7.99999L11.3857 2.93107C11.5988 2.71794 11.5988 2.3728 11.3857 2.1598C11.1725 1.9468 10.8274 1.94666 10.6144 2.1598L5.15985 7.61435C4.94672 7.82749 4.94672 8.17263 5.15985 8.38563L10.6144 13.8402C10.7209 13.9467 10.8605 14 11 14Z" fill="black"/>
  </svg>
  <p>back</p>
      </div>
    </div>
    <div class="search-input">
      <div class="search-input__hot" ${e.includes(a) || Math.random() > 0.5 ? "" : 'style="display: none;"'}>
        <img src="${g}/fire.svg" alt="">
        <p>HOT</p>
      </div>
      <input type="text" value="${a}" data-search-title="">
      <button class="search-btn">Search</button>
    </div>
  </div>
  `
    );
    let f = document.getElementById("NavStandard"), p = document.getElementById("MainContent");
    f && f.insertAdjacentHTML("beforeend", i), p && p.insertAdjacentHTML("afterbegin", i);
    const u = setInterval(() => {
      const c = document.querySelector("#NavStandard .search-btn"), h = document.querySelector("#NavStandard [data-search-title]"), v = document.querySelector("#MainContent .search-btn"), m = document.querySelector("#MainContent [data-search-title]");
      if (c && h || v && m) {
        clearInterval(u);
        const y = (o) => {
          const d = o.value, A = encodeURIComponent(d);
          window.location.href = `https://mygeeni.com/search?q=${A}&type=product`;
        };
        let b = !1;
        const _ = (o) => {
          o.addEventListener("input", function() {
            b || (this.value = "", b = !0);
          }), o.addEventListener("keypress", function(d) {
            d.key === "Enter" && y(o);
          }), o.addEventListener("focus", function() {
            l("exp_search_feature_input_01", "Search", "Input", "Header");
          });
        }, w = (o, d) => {
          o.addEventListener("click", () => {
            y(d), l("exp_search_feature_button_01", "Search", "Button", "Header");
          });
        };
        c && h && (_(h), w(c, h)), v && m && (_(m), w(v, m));
      }
    }, 100);
  }
  function M() {
    const t = new URLSearchParams(window.location.search).get("q"), n = (
      /*html*/
      /*html*/
      `
<style>
  #NavStandard {
    background: #fff !important; 
  }
  

  .search-result {
    background: #F4F8F9;
    padding: 24px;
    text-align: center;
    margin-top: 49px;
  }

  .search-result p {
    color: var(--Black, #000);
    text-align: center;
    font-family: Manrope, var(--FONT-STACK-BODY);
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px; /* 125% */
    margin: 0;
  }

  @media (max-width: 1023px) {
    .back-nav {
      display: flex !important;
      align-items: center;
    }
    .back-nav__inner {
      display: flex !important;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .back-nav p {
      color: var(--Black-800, #1B1B1B);
      font-family: Manrope, var(--FONT-STACK-BODY);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      margin: 0 16px 0 0;
    }
  }
</style>
`
    ), a = (
      /*html*/
      `
    <div class="search-result">
      <p>${document.querySelectorAll(".product-grid-item").length || "0"} Search Results for: “${t}”</p>
    </div>
  `
    );
    document.head.insertAdjacentHTML("beforeend", n), s("#SearchPage .collection__wrapper").then((r) => r.insertAdjacentHTML("afterbegin", a));
  }
  function E() {
    s('[href="/account"]').then((e) => e.insertAdjacentHTML(
      "beforeend",
      /*html*/
      '<span class="log">Login</span>'
    ));
  }
  function x(e, t, n, a) {
    let r = null;
    s(e).then((i) => {
      i && new IntersectionObserver((p) => {
        p.forEach((u) => {
          if (u.isIntersecting && u.intersectionRatio >= 0.5)
            r = performance.now();
          else if (r) {
            const c = ((performance.now() - r) / 1e3).toFixed(2);
            l(t, c, n, a), r = null;
          }
        });
      }, { threshold: 0.5 }).observe(i);
    });
  }
})();
//# sourceMappingURL=index.js.map
