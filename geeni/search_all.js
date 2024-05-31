(function() {
  "use strict";
  const y = (e, a, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: a,
      event_type: n,
      event_loc: t
    }), console.log(`Event: ${e} | ${a} | ${n} | ${t.replace(/  +/g, " ")}`);
  }, S = ({ name: e, dev: a }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${a})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = (e) => {
    let a = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(a), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, m = (e) => new Promise((a) => {
    const n = document.querySelector(e);
    if (n)
      return a(n);
    const t = new MutationObserver(() => {
      const r = document.querySelector(e);
      r && (a(r), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = "https://conversionratestore.github.io/projects/geeni/img/search", l = window.location.pathname;
  let v = !1, _ = !1;
  const T = (
    /*html*/
    `
  <style>
    .shopify-section--marquee {
      display: none !important;
    }

    body .site-header {
      position: relative;
    }

    .nav-search {
      z-index: 9999999 !important;
    }

    /* .site-header__background {
      background: #fff !important;
    } */

    /* .site-header__background {
      top: 40px;
      display: none !important;
    } */

    /* .menu__item.is-visible .header__dropdown__wrapper {
      background: #fff !important;
    } */

    #NavStandard {
      z-index: 90 !important;
    }


    .logo {
      z-index: 100 !important;   
    }
  
    /* .header__dropdown__wrapper {
      transition-delay: 0s !important;
    } */

    #NavStandard {
      background: #F4F8F9;
    }
    
    #NavStandard {
      align-items: center !important;
    }

    /* .grandparent .header__dropdown {
      background: #F4F8F9 !important;
    }

    .new-nav .grandparent .header__dropdown {
      background: #FFF !important;
    }

    .grandparent .header__dropdown__wrapper {
      margin: calc(var(--header-height) + 0px) 0 0 !important;
      padding: 50px 0 !important;
      background: #fff;
    } */


    .search-page__title,
    .search__top {
      display: none !important;
    }

    .logo {
      margin: 20px 0 !important;
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
      font-weight: 500 !important;
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
      z-index: 1;
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
    .crs-search-input {
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

    /* .crs-search-input input::selection {
      background: #DCEFFF !important;
    }

    .crs-search-input input::-moz-selection {
      background: #DCEFFF !important;
    } */

    .crs-search-input p {
      margin: 0;
    }

    .crs-search-input__data {
      display: flex;
      width: 100%;
    }

   .crs-search-input__hot {
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

    .crs-search-input__hot p {
      color: var(--Black-900, #000);
      font-family: Manrope, var(--FONT-STACK-BODY);;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 1; /* 153.846% */
    }

    .crs-search-input button {
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

    .crs-search-input input {
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

    .crs-search-input input::selection {
      background: #ccc;
    }

    .back-nav {
      display: none;
    }

    /* #PageContainer {
      padding-top: 0 !important;
    } */

    #shopify-section-header {
      top: 0;
    }

    /* .opacity-0 {
      opacity: 0;
    } */

    .empty-space {
      display: none;
    }

    .crs-search-input__data {
      transition: opacity 0.3s ease-in-out;
      opacity: 1;
    }

    .crs-search-input__data.fade-out {
      opacity: 0;
    }

    body .collection__sticky-bar {
      top: 95px;
    }

    @media (min-width: 1023px) {
      #MainContent .crs-search-input-wrapper {
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

      .has-scrolled .crs-search-input-wrapper {
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
      .crs-search-input-wrapper {
        margin-top: 100px;
      }

      .has-scrolled  .empty-space {
        display: block;
        height: 174px;
      }

      body .collection__sticky-bar {
        top: 60px !important;
      }
    }

    @media (max-width: 1023px) {
      .crs-search-input-wrapper {
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
        margin: 8px 0 !important;
      }

      .logo, .logo a {
        width: 102.857px;
        height: 40px;
      }

      .crs-search-input {
        min-width: auto;
        width: 100%;
      }

      .crs-search-input__hot {
        padding: 6px 8px;
        gap: 4px;
        min-height: 32px;
      }

      .crs-search-input__hot img {
        width: 16px;
        height: 16px;
      }

      .crs-search-input input {
        color: var(--Grey-800, #4A4A4A);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        margin: 0 12px;
      }

      .crs-search-input button {
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
  k("exp_search_feature"), window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      const a = setInterval(() => {
        const n = document.querySelectorAll(".crs-search-input input"), t = document.querySelectorAll(".crs-search-input__hot");
        if ((n == null ? void 0 : n.length) > 1 && (t == null ? void 0 : t.length) > 1) {
          clearInterval(a);
          for (let r = 0; r < n.length; r++)
            n[r].value = "", t[r].style.display = "none";
        }
      }, 100);
    }
  }), S({ name: "Introduces personalized search", dev: "AK" }), document.head.insertAdjacentHTML("beforeend", T), m("body").then(() => F()), B(), M();
  function F() {
    l.includes("/search") && C();
    const e = setInterval(() => {
      document.getElementById("NavStandard") && document.getElementById("MainContent") && (clearInterval(e), q(), E(), (l.includes("/collections/all") || l.includes("/search") || l === "/" || l === "/index") && !l.includes("/products/") && (document.head.insertAdjacentHTML(
        "beforeend",
        /*html*/
        `
          <style>
            .header__dropdown {
              background: #fff !important;
            } 
            #PageContainer {
      padding-top: 0 !important;
    }

    @media (min-width: 1023px) {

      #PageContainer {
        padding-top: 202px !important;
      }
    }

    @media (max-width: 1023px) and (min-width: 769px) {
      #PageContainer {
        padding-top: 137px !important;
      }
    }
            
          </style>
        `
      ), L(), A()));
    }, 100);
    document.body.addEventListener("click", (a) => {
      a.target.closest('[data-element="about-us"]') ? y("exp_search_feature_button_04", "About us", "Button", "Slide menu") : a.target.closest(".back-nav__inner") ? (y("exp_search_feature_button_03", "Back", "Button", "Search result"), window.history.back()) : a.target.closest(".menu__item") && y("exp_search_feature_button_02", `${a.target.closest(".menu__item").querySelector("span").innerText}`, "Button", "Header");
    }), m(".marquee").then(() => {
      I(".marquee", "exp_search_feature_section_02", "Visibility", "Header");
    }), (l.includes("/products/") || l.includes("/about-us-and-contact-us")) && document.head.insertAdjacentHTML(
      "beforeend",
      /*html*/
      `
      <style>
        @media (max-width: 768px) {
          #MainContent {
            margin-top: 40px;
          }
        }
      </style>
    `
    );
  }
  function q() {
    const e = [
      ["Millions of Users", "smile"],
      ["<b>4.8</b> Stars with over <b>400.000</b> reviews", "star"],
      ["1-Year Warranty on All Products", "check"],
      ["<b>FREE</b> Shipping orders over <b>$69</b>", "shipping"]
    ];
    let n = Array(4).fill(e).flat();
    const t = (
      /*html*/
      `
      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
        ${n.map(([r, c]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${b}/${c}.svg" alt="">
                    <p>${r}</p>
                  </div>
                `
      )).join("")}
        </ul>
  
        <ul aria-hidden="true" class="marquee__content">
          ${n.map(([r, c]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${b}/${c}.svg" alt="">
                    <p>${r}</p>
                  </div>
                `
      )).join("")}
        </ul>
    </div>  
  `
    );
    document.getElementById("SiteHeader").insertAdjacentHTML("beforebegin", t);
  }
  function L() {
    const e = setInterval(() => {
      if (document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)")[3]) {
        clearInterval(e);
        let a = document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)"), n = document.createElement("div");
        n.className = "new-nav", a.forEach((t) => {
          n.appendChild(t);
        }), document.getElementById("SiteHeader").insertAdjacentElement("beforeend", n);
      }
    }, 100);
  }
  function A() {
    document.head.insertAdjacentHTML(
      "beforeend",
      /*html*/
      `
    <style>
      [data-nav-search-open],
      #NavStandard [aria-label="Search"] {
        display: none !important;
      }
    </style>
  `
    );
    const e = [
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
    ], a = (o) => {
      const i = Math.floor(Math.random() * o.length);
      return o[i];
    }, n = (
      /*html*/
      `
  <div class="crs-search-input-wrapper">
    <div class="back-nav">
      <div class="back-nav__inner">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11 14C11.1395 14 11.2792 13.9467 11.3857 13.8402C11.5988 13.627 11.5988 13.2819 11.3857 13.0689L6.31676 7.99999L11.3857 2.93107C11.5988 2.71794 11.5988 2.3728 11.3857 2.1598C11.1725 1.9468 10.8274 1.94666 10.6144 2.1598L5.15985 7.61435C4.94672 7.82749 4.94672 8.17263 5.15985 8.38563L10.6144 13.8402C10.7209 13.9467 10.8605 14 11 14Z" fill="black"/>
  </svg>
  <p>back</p>
      </div>
    </div>
    <div class="crs-search-input">
      <div class="crs-search-input__data">
        <div class="crs-search-input__hot" style="display: none;">
          <img src="${b}/fire.svg" alt="">
          <p>HOT</p>
        </div>
        <input type="text" value="" data-search-title="">
      </div>
      <button class="search-btn">Search</button>
    </div>
  </div>
  `
    );
    let t = document.getElementById("NavStandard"), r = document.getElementById("MainContent");
    t.insertAdjacentHTML("beforeend", n), r.insertAdjacentHTML("afterbegin", n), r.insertAdjacentHTML("afterbegin", '<div class="empty-space"></div>');
    const c = (o) => {
      let i = o.value;
      const s = o.closest(".crs-search-input").querySelector(".crs-search-input__hot");
      function d() {
        if (v || _)
          clearInterval(g);
        else {
          let u;
          do
            u = a(e);
          while (u === i);
          const x = o.closest(".crs-search-input__data");
          x && (x.classList.add("fade-out"), setTimeout(() => {
            o.value = u[0], s && (u[1] === !0 ? s.style.display = "flex" : s.style.display = "none"), i = u, x.classList.remove("fade-out");
          }, 300));
        }
      }
      d();
      const g = setInterval(d, 3500);
    }, h = setInterval(() => {
      const o = document.querySelector("#NavStandard .search-btn"), i = document.querySelector("#NavStandard [data-search-title]"), s = document.querySelector("#MainContent .search-btn"), d = document.querySelector("#MainContent [data-search-title]");
      if (o && i || s && d) {
        clearInterval(h);
        const g = (p) => {
          const f = p.value, w = encodeURIComponent(f);
          window.location.href = `https://mygeeni.com/search?q=${w}&type=product`;
        }, u = (p) => {
          p.addEventListener("input", function(f) {
            if (this.style.color = "rgba(74, 74, 74)", !v) {
              const w = f.data || "";
              this.value = w, v = !0, this.closest(".crs-search-input").querySelector(".crs-search-input__hot").style.display = "none";
            }
          }), p.addEventListener("keypress", function(f) {
            f.key === "Enter" && g(p);
          }), p.addEventListener("focus", function() {
            _ = !0, this.closest(".crs-search-input").querySelector(".crs-search-input__hot").style.display = "none", y("exp_search_feature_input_01", "Search", "Input", "Header"), v || setTimeout(() => {
              this.setSelectionRange(0, 0), this.style.color = "rgba(74, 74, 74, 0.7)";
            }, 100);
          }), p.addEventListener("blur", function() {
            !v && _ ? setTimeout(() => {
              _ = !1, c(this);
            }, 3500) : setTimeout(() => {
              this.value.trim() === "" && (v = !1, _ = !1, c(this));
            }, 5e3), this.style.color = "rgba(74, 74, 74)";
          });
        }, x = (p, f) => {
          p.addEventListener("click", () => {
            g(f), y("exp_search_feature_button_01", "Search", "Button", "Header");
          });
        };
        o && i && (u(i), x(o, i), c(i)), s && d && (u(d), x(s, d), c(d));
      }
    }, 100);
  }
  function C() {
    const a = new URLSearchParams(window.location.search).get("q");
    document.head.insertAdjacentHTML(
      "beforeend",
      /*html*/
      `
<style>
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
    padding-top: 0 !important;
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
    ), m("#SearchPage .collection__wrapper .pagination").then(() => {
      const t = (
        /*html*/
        `
    <div class="search-result">
      <p>${document.querySelectorAll("[data-collection-products] .product-grid-item").length || "0"} Search Results for: “${a}”</p>
    </div>`
      );
      document.querySelector("#SearchPage .collection__wrapper").insertAdjacentHTML("afterbegin", t);
    });
  }
  function E() {
    m('[href="/account"]').then((e) => e.insertAdjacentHTML(
      "beforeend",
      /*html*/
      '<span class="log">Login</span>'
    ));
  }
  function I(e, a, n, t) {
    let r = null;
    m(e).then((c) => {
      c && new IntersectionObserver((o) => {
        o.forEach((i) => {
          if (i.isIntersecting && i.intersectionRatio >= 0.5)
            r = performance.now();
          else if (r) {
            const s = ((performance.now() - r) / 1e3).toFixed(2);
            y(a, s, n, t), r = null;
          }
        });
      }, { threshold: 0.5 }).observe(c);
    });
  }
  function M() {
    if ((l.includes("/collections/") || l.includes("/search")) && !l.includes("/products/")) {
      document.head.insertAdjacentHTML(
        "beforeend",
        /*html*/
        `
    <style>

      .crs-search-input-wrapper--fixed {
        position: fixed;
        z-index: 999;
        width: 100%;
        margin-top: 0;
      }

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
    </style>

    `
      );
      let e = !1;
      const a = setInterval(() => {
        const n = document.querySelector(".marquee"), t = document.querySelector(".site-header"), r = document.querySelector(".collection__sticky-bar");
        if (n && t && r) {
          let c = function() {
            var h;
            e || (document.querySelector("#PageContainer .crs-search-input-wrapper") ? r.style.setProperty("top", t.offsetHeight + pageSearch.offsetHeight - 1 + "px", "important") : (r.style.setProperty("top", t.offsetHeight - 1 + "px", "important"), (h = document.querySelector(".collection__filters")) == null || h.style.setProperty("top", t.offsetHeight - 1 + "px", "important")));
          };
          clearInterval(a), window.addEventListener("scroll", () => {
            const h = window.scrollY || document.documentElement.scrollTop, o = n.offsetTop + n.offsetHeight;
            if (h >= o) {
              if (t.classList.contains("site-header--top-zero") || t.classList.add("site-header--top-zero"), !document.querySelector(".crs-search-input-wrapper--fixed") && document.querySelector("#PageContainer .crs-search-input-wrapper") && document.querySelector("#PageContainer .empty-space")) {
                const i = document.querySelector("#PageContainer .crs-search-input-wrapper"), s = document.querySelector("#PageContainer .empty-space");
                i.style.top = t.offsetHeight + "px";
                let d = window.getComputedStyle(i), g = parseFloat(d.getPropertyValue("margin-top"));
                console.log("marginTop", g), i.classList.add("crs-search-input-wrapper--fixed"), s.style.display = "block", s.style.height = i.offsetHeight + g + "px";
              }
            } else if (t.classList.remove("site-header--top-zero"), document.querySelector("#PageContainer .crs-search-input-wrapper") && document.querySelector("#PageContainer .empty-space")) {
              const i = document.querySelector("#PageContainer .crs-search-input-wrapper"), s = document.querySelector("#PageContainer .empty-space");
              i.style.top = "0px", i.classList.remove("crs-search-input-wrapper--fixed"), s.style.display = "none";
            }
            c();
          }), window.addEventListener("resize", () => {
            e = !0;
          });
        }
      }, 100);
    }
  }
  function B() {
    m(".mobile-nav.mobile-nav--weight-bold").then((e) => e.insertAdjacentHTML(
      "beforeend",
      /*html*/
      `
    <li class="mobile-menu__item mobile-menu__item--level-1" data-element="about-us">
        <a href="/pages/about-us-and-contact-us" class="mobile-navlink mobile-navlink--level-1">
          About us
        </a>
      </li>
  `
    )), m("#NavStandard .menu__item.menu__item--icons").then((e) => e.insertAdjacentHTML(
      "beforebegin",
      /*html*/
      `
    <div class="menu__item child" data-nav-item="" data-hover-disclosure-toggle="" data-custom-nav-item="">
      <a href="/pages/about-us-and-contact-us" data-top-link="" class="navlink navlink--toplevel">
        <span class="navtext">About us</span>
      </a></div>
  `
    ));
  }
})();
//# sourceMappingURL=index.js.map
