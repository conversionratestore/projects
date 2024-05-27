(function() {
  "use strict";
  const g = (t, e, n, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: a
    }), console.log(`Event: ${t} | ${e} | ${n} | ${a.replace(/  +/g, " ")}`);
  }, w = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, u = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    if (n)
      return e(n);
    const a = new MutationObserver(() => {
      const i = document.querySelector(t);
      i && (e(i), a.disconnect());
    });
    a.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), x = "https://conversionratestore.github.io/projects/geeni/img/search";
  let f = !1, v = !1;
  const S = (
    /*html*/
    `
  <style>
    .shopify-section--marquee,
    [data-nav-search-open],
    #NavStandard  [aria-label="Search"] {
      display: none !important;
    }

    .nav-search {
      z-index: 9999999;
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
      height: auto;
    }

    /* .search-input input::selection {
      background: #DCEFFF !important;
    }

    .search-input input::-moz-selection {
      background: #DCEFFF !important;
    } */

    .search-input p {
      margin: 0;
    }

    .search-input__data {
      display: flex;
      width: 100%;
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
      min-height: 40px;
    }

    .search-input__hot p {
      color: var(--Black-900, #000);
      font-family: Manrope, var(--FONT-STACK-BODY);;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 1; /* 153.846% */
    }

    .search-input button {
      border-radius: 100px;
      background: var(--Light-blue-900, #00B0EE);
      display: inline-flex;
      padding: 8px 16px;
      min-height: 40px;
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
      line-height: 1; /* 123.077% */
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
      line-height: 1;
      width: 100%; 
      margin: 0 16px;
    }

    .search-input input::selection {
      background: #ccc;
    }

    .back-nav {
      display: none;
    }

    #PageContainer {
      padding-top: 0 !important;
    }

    #shopify-section-header {
      top: 0;
    }

    /* .opacity-0 {
      opacity: 0;
    } */

    .empty-space {
      display: none;
    }

    .search-input__data {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    .search-input__data.fade-out {
      opacity: 0;
    }

    @media (min-width: 1023px) {
      #MainContent .search-input-wrapper {
        display: none;
      }
      #PageContainer {
        padding-top: 202px !important;
      }
    }

    @media (max-width: 1023px) and (min-width: 769px) {
      #PageContainer {
        padding-top: 137px !important;
      }
 
      .has-scrolled .empty-space {
        display: block;
        height: 82px;
      }
    }

    @media (max-width: 1023px) {
      /* .has-scrolled .site-header--fixed {
        animation: none;
      } */

      .has-scrolled .empty-space {
        display: block;
      }

      .has-scrolled .search-input-wrapper {
        position: fixed;
        top: 60px;
        left: 0;
        z-index: 999;
        width: 100%;
        margin-top: 0;
        animation: showCompactHeader .3s ease;
      }

      [data-section-type="image-with-title"] .banner-inner.one-fifty-height.align--middle-center.bg-secondary {
        height: initial !important;
      }

      [data-section-type="image-with-title"] .banner-inner.one-fifty-height.align--middle-center.bg-secondary .banner-inner,
      [data-section-type="image-with-title"] .banner-inner.one-fifty-height.align--middle-center.bg-secondary .banner-content {
        padding: 0 !important;
      }
    }

    @media (max-width: 769px) {
      .search-input-wrapper {
        margin-top: 100px;
      }

      .has-scrolled  .empty-space {
        display: block;
        height: 174px;
      }
    }

    @media (max-width: 1023px) {
      .search-input-wrapper {
        /* padding: 16px var(--gutter-mobile); */
        padding: 16px;
        background: #F4F8F9;
        display: flex;
      }

      .new-nav {
        display: none;
      }
    }

    @media (min-width: 768px) {
        /* Pause on hover */
      .marquee--hover-pause:hover .marquee__content {
        animation-play-state: paused;
      }

      .transparent-header .item  .slide__text__container {
        align-items: flex-start !important;
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
        min-height: 32px;
      }

      .search-input__hot img {
        width: 16px;
        height: 16px;
      }

      .search-input input {
        color: var(--Grey-800, #4A4A4A);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        margin: 0 12px;
      }

      .search-input button {
        min-height: 32px;
        padding: 8px 10px;
        color: #FFF;
        font-size: 11px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  </style>
`
  );
  if (k("exp_search_feature"), w({ name: "Introduces personalized search", dev: "AK" }), document.head.insertAdjacentHTML("beforeend", S), u("body").then(() => T()), window.location.pathname.includes("/collections/") || window.location.pathname.includes("/search")) {
    const t = setInterval(() => {
      document.head.insertAdjacentHTML(
        "beforeend",
        /*html*/
        `
    <style>
      .site-header {
        position: relative !important;
      }

      .site-header.site-header--top-zero {
        top: 0 !important;
        position: fixed !important;
      }

       .collection__sticky-bar {
        top: 95px !important;
      }

      @media only screen and (min-width: 1024px) {
        .collection--breadcrumbs-disabled .collection__filters,
        .collection__sticky-bar {
          top: 161px !important;
        }
      } 

      @media only screen and (max-width: 768px) {
        .collection__sticky-bar {
          top: 60px !important;
        }
      }


    </style>
  
    `
      );
      const e = document.querySelector(".marquee"), n = document.querySelector(".site-header");
      e && n && (clearInterval(t), window.addEventListener("scroll", () => {
        const a = window.pageYOffset || document.documentElement.scrollTop, i = e.offsetTop + e.offsetHeight;
        a >= i ? n.classList.add("site-header--top-zero") : n.classList.remove("site-header--top-zero");
      }));
    }, 100);
  }
  function T() {
    window.location.pathname.includes("/search") && A();
    const t = setInterval(() => {
      document.getElementById("NavStandard") && document.getElementById("MainContent") && (clearInterval(t), F(), L(), window.addEventListener("pageshow", () => {
        E();
      }), I());
    }, 100);
    document.body.addEventListener("click", (e) => {
      e.target.closest('[data-element="about-us"]') ? g("exp_search_feature_button_04", "About us", "Button", "Slide menu") : e.target.closest(".back-nav__inner") ? (g("exp_search_feature_button_03", "Back", "Button", "Search result"), window.history.back()) : e.target.closest(".menu__item") && g("exp_search_feature_button_02", `${e.target.closest(".menu__item").querySelector("span").innerText}`, "Button", "Header");
    }), u(".marquee").then(() => {
      q(".marquee", "exp_search_feature_section_02", "Visibility", "Header");
    });
  }
  function F() {
    const t = [
      ["Millions of Users", "smile"],
      ["<b>4.8</b> Stars with over <b>400.000</b> reviews", "star"],
      ["1-Year Warranty on All Products", "check"],
      ["<b>FREE</b> Shipping orders over <b>$69</b>", "shipping"]
    ];
    let n = Array(4).fill(t).flat();
    const a = (
      /*html*/
      `
      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
        ${n.map(([i, s]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${x}/${s}.svg" alt="">
                    <p>${i}</p>
                  </div>
                `
      )).join("")}
        </ul>
  
        <ul aria-hidden="true" class="marquee__content">
          ${n.map(([i, s]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${x}/${s}.svg" alt="">
                    <p>${i}</p>
                  </div>
                `
      )).join("")}
        </ul>
    </div>  
  `
    );
    document.getElementById("SiteHeader").insertAdjacentHTML("beforebegin", a);
  }
  function L() {
    const t = setInterval(() => {
      if (document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)")[3]) {
        clearInterval(t);
        let e = document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)"), n = document.createElement("div");
        n.className = "new-nav", e.forEach((a) => {
          n.appendChild(a);
        }), document.getElementById("SiteHeader").insertAdjacentElement("beforeend", n), u(".new-nav .menu__item.child:last-child").then((a) => a.insertAdjacentHTML(
          "afterend",
          /*html*/
          `
    <div class="menu__item child" data-nav-item="" data-hover-disclosure-toggle="">
      <a href="/pages/about-us-and-contact-us" data-top-link="" class="navlink navlink--toplevel">
        <span class="navtext">About us</span>
      </a>
    </div>`
        )), u(".mobile-nav.mobile-nav--weight-bold").then((a) => a.insertAdjacentHTML(
          "beforeend",
          /*html*/
          `
      <li class="mobile-menu__item mobile-menu__item--level-1" data-element="about-us">
          <a href="/pages/about-us-and-contact-us" class="mobile-navlink mobile-navlink--level-1">
            About us
          </a>
        </li>
    `
        ));
      }
    }, 100);
  }
  function E() {
    const t = [
      ["Geeni Look Indoor Camera", !0],
      ["Geeni Hawk 3 Outdoor Camera", !0],
      ["Geeni Dot Smart Plug", !0],
      ["Geeni Glimpse 1080p Camera", !0],
      ["Smart 2k Auto-Follow Camera", !0],
      ["Geeni Lookout 2k Outdoor Camera", !0],
      ["Geeni Doorpeek Wired Doorbell", !0],
      ["Geeni Prisma Plus 800 Smart Bulb", !1],
      ["Geeni Freebird Wire-Free Battery Camera", !1],
      ["Geeni Sentinel 1080p Pan & Tilt Camera", !1],
      ["Geeni Scope 1080p Auto-Tracking Camera", !1],
      ["Geeni Lux A19 Smart Bulb - Warm White", !1],
      ["Geeni PetConnect Automatic Feeder with Camera", !1],
      ["Geeni Rise & Shine - Smart Wi-Fi Kid’s Training Light", !1],
      ["Geeni Indoor/Outdoor Weatherproof Plug", !1],
      ["Geeni Water Fountain Replacement Filters", !1]
    ], e = (r) => {
      const o = Math.floor(Math.random() * r.length);
      return r[o];
    }, n = (
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
      <div class="search-input__data">
        <div class="search-input__hot" style="display: none;">
          <img src="${x}/fire.svg" alt="">
          <p>HOT</p>
        </div>
        <input type="text" value="" data-search-title="">
      </div>
      <button class="search-btn">Search</button>
    </div>
  </div>
  `
    );
    let a = document.getElementById("NavStandard"), i = document.getElementById("MainContent");
    a.insertAdjacentHTML("beforeend", n), i.insertAdjacentHTML("afterbegin", n), i.insertAdjacentHTML("afterbegin", '<div class="empty-space"></div>');
    const s = (r) => {
      let o = r.value;
      const l = r.closest(".search-input").querySelector(".search-input__hot");
      function d() {
        if (f || v)
          clearInterval(y);
        else {
          let p;
          do
            p = e(t);
          while (p === o);
          const m = r.closest(".search-input__data");
          m && m.classList.add("fade-out"), m.addEventListener("transitionend", () => {
            r.value = p[0], l && (p[1] === !0 ? l.style.display = "flex" : l.style.display = "none"), o = p, m.classList.remove("fade-out");
          }, { once: !0 });
        }
      }
      d();
      const y = setInterval(d, 3500);
    }, b = setInterval(() => {
      const r = document.querySelector("#NavStandard .search-btn"), o = document.querySelector("#NavStandard [data-search-title]"), l = document.querySelector("#MainContent .search-btn"), d = document.querySelector("#MainContent [data-search-title]");
      if (r && o || l && d) {
        clearInterval(b);
        const y = (c) => {
          const h = c.value, _ = encodeURIComponent(h);
          window.location.href = `https://mygeeni.com/search?q=${_}&type=product`;
        }, p = (c) => {
          c.addEventListener("input", function(h) {
            if (this.style.color = "rgba(74, 74, 74)", !f) {
              const _ = h.data || "";
              this.value = _, f = !0, this.closest(".search-input").querySelector(".search-input__hot").style.display = "none";
            }
          }), c.addEventListener("keypress", function(h) {
            h.key === "Enter" && y(c);
          }), c.addEventListener("focus", function() {
            v = !0, this.closest(".search-input").querySelector(".search-input__hot").style.display = "none", g("exp_search_feature_input_01", "Search", "Input", "Header"), f || setTimeout(() => {
              this.setSelectionRange(0, 0), this.style.color = "rgba(74, 74, 74, 0.7)";
            }, 0);
          }), c.addEventListener("blur", function() {
            !f && v ? setTimeout(() => {
              v = !1, s(this);
            }, 3500) : setTimeout(() => {
              this.value.trim() === "" && (f = !1, v = !1, s(this));
            }, 5e3), this.style.color = "rgba(74, 74, 74)";
          });
        }, m = (c, h) => {
          c.addEventListener("click", () => {
            y(h), g("exp_search_feature_button_01", "Search", "Button", "Header");
          });
        };
        r && o && (p(o), m(r, o), s(o)), l && d && (p(d), m(l, d), s(d));
      }
    }, 100);
  }
  function A() {
    const e = new URLSearchParams(window.location.search).get("q");
    document.head.insertAdjacentHTML(
      "beforeend",
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
    /* margin-top: 49px; */
    margin-bottom: 20px;
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

  #SearchPage {
    padding-top: 0;
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

    .search-result {
      margin: 0;
      background: #fff;
      padding: 16px;
      border-bottom: 1px solid #F4F8F9;
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
  }
</style>
  `
    ), u("#SearchPage .collection__wrapper .pagination").then(() => {
      const a = (
        /*html*/
        `
    <div class="search-result">
      <p>${document.querySelectorAll("[data-collection-products] .product-grid-item").length || "0"} Search Results for: “${e}”</p>
    </div>`
      );
      document.querySelector("#SearchPage .collection__wrapper").insertAdjacentHTML("afterbegin", a);
    });
  }
  function I() {
    u('[href="/account"]').then((t) => t.insertAdjacentHTML(
      "beforeend",
      /*html*/
      '<span class="log">Login</span>'
    ));
  }
  function q(t, e, n, a) {
    let i = null;
    u(t).then((s) => {
      s && new IntersectionObserver((r) => {
        r.forEach((o) => {
          if (o.isIntersecting && o.intersectionRatio >= 0.5)
            i = performance.now();
          else if (i) {
            const l = ((performance.now() - i) / 1e3).toFixed(2);
            g(e, l, n, a), i = null;
          }
        });
      }, { threshold: 0.5 }).observe(s);
    });
  }
})();