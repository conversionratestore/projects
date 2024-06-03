(function() {
  "use strict";
  const f = (a, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), console.log(`Event: ${a} | ${n} | ${e} | ${t.replace(/  +/g, " ")}`);
  }, S = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, T = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, m = (a) => new Promise((n) => {
    const e = document.querySelector(a);
    if (e)
      return n(e);
    const t = new MutationObserver(() => {
      const r = document.querySelector(a);
      r && (n(r), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = "https://conversionratestore.github.io/projects/geeni/img/search", c = window.location.pathname;
  let g = !1, v = !1;
  const k = (
    /*html*/
    `
  <style>



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

    .shopify-section--marquee {
      display: none !important;
    }

    .nav-search {
      z-index: 9999999 !important;
    }

    #NavStandard {
      z-index: 90 !important;
    }


    .logo {
      z-index: 100 !important;   
    }

    #NavStandard {
      background: #F4F8F9;
    }
    
    #NavStandard {
      align-items: center !important;
    }

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



    #shopify-section-header {
      top: 0;
    }

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
    }

    @media (max-width: 1023px) and (min-width: 769px) {

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
  T("exp_search_feature"), window.addEventListener("pageshow", (a) => {
    if (a.persisted) {
      const n = setInterval(() => {
        const e = document.querySelectorAll(".crs-search-input input"), t = document.querySelectorAll(".crs-search-input__hot");
        if ((e == null ? void 0 : e.length) > 1 && (t == null ? void 0 : t.length) > 1) {
          clearInterval(n);
          for (let r = 0; r < e.length; r++)
            e[r].value = "", t[r].style.display = "none";
        }
      }, 100);
    }
  }), S({ name: "Introduces personalized search", dev: "AK" }), document.head.insertAdjacentHTML("beforeend", k), m("body").then(() => F()), B(), C();
  function F() {
    c.includes("/search") && E();
    const a = setInterval(() => {
      if (document.getElementById("NavStandard") && document.getElementById("MainContent")) {
        clearInterval(a);
        let n = !1;
        if (c.includes("/collections/") && !c.includes("/products/") && c !== "/collections/all" || (L(), n = !0), q(), (c.includes("/collections/all") || c.includes("/search") || c === "/" || c === "/index") && !c.includes("/products/"))
          document.head.insertAdjacentHTML(
            "beforeend",
            /*html*/
            `
          <style>
            #PageContainer {
              padding-top: 0 !important;
            }

          .header__dropdown {
          background: #fff !important;
          } 

          .site-header__background {
          background: #fff !important;
          }

          .site-header__background {
          top: 40px;
          display: none !important;
          }

          .menu__item.is-visible .header__dropdown__wrapper {
          background: #fff !important;
          }

          .header__dropdown__wrapper {
          transition-delay: 0s !important;
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
          ), A(), I();
        else {
          const e = document.getElementById("SiteHeader");
          document.head.insertAdjacentHTML(
            "beforeend",
            /*html*/
            `
  <style>
    :root {
      --pt-crs: 0px;
    }

    #PageContainer {
      padding-top: var(--pt-crs) !important;
    }
  </style>
`
          );
          const t = () => {
            let r = e.offsetHeight;
            const i = document.querySelector(".marquee");
            i && (r += i.offsetHeight), c.includes("/products/") && window.matchMedia("(min-width: 1023px)").matches && (r += 30), document.documentElement.style.setProperty("--pt-crs", `${r}px`);
          };
          if (window.addEventListener("resize", t), n) {
            const r = setInterval(() => {
              document.querySelector(".marquee") && (clearInterval(r), t());
            }, 100);
          } else
            t();
        }
      }
    }, 100);
    document.body.addEventListener("click", (n) => {
      n.target.closest('[data-element="about-us"]') ? f("exp_search_feature_button_04", "About us", "Button", "Slide menu") : n.target.closest(".back-nav__inner") ? (f("exp_search_feature_button_03", "Back", "Button", "Search result"), window.history.back()) : n.target.closest(".menu__item") && f("exp_search_feature_button_02", `${n.target.closest(".menu__item").querySelector("span").innerText}`, "Button", "Header");
    }), m(".marquee").then(() => {
      M(".marquee", "exp_search_feature_section_02", "Visibility", "Header");
    });
  }
  function L() {
    const a = [
      ["Millions of Users", "smile"],
      ["<b>4.8</b> Stars with over <b>400.000</b> reviews", "star"],
      ["1-Year Warranty on All Products", "check"],
      ["<b>FREE</b> Shipping orders over <b>$69</b>", "shipping"]
    ];
    let e = Array(4).fill(a).flat();
    const t = (
      /*html*/
      `
      <div class="marquee marquee--hover-pause">
        <ul class="marquee__content">
        ${e.map(([r, i]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${b}/${i}.svg" alt="">
                    <p>${r}</p>
                  </div>
                `
      )).join("")}
        </ul>
  
        <ul aria-hidden="true" class="marquee__content">
          ${e.map(([r, i]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${b}/${i}.svg" alt="">
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
  function A() {
    const a = setInterval(() => {
      if (document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)")[3]) {
        clearInterval(a);
        let n = document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)"), e = document.createElement("div");
        e.className = "new-nav", n.forEach((t) => {
          e.appendChild(t);
        }), document.getElementById("SiteHeader").insertAdjacentElement("beforeend", e);
      }
    }, 100);
  }
  function I() {
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
    const a = [
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
    ], n = (o) => {
      const s = Math.floor(Math.random() * o.length);
      return o[s];
    }, e = (
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
    t.insertAdjacentHTML("beforeend", e), r.insertAdjacentHTML("afterbegin", e), r.insertAdjacentHTML("afterbegin", '<div class="empty-space"></div>');
    const i = (o) => {
      let s = o.value;
      const l = o.closest(".crs-search-input").querySelector(".crs-search-input__hot");
      function d() {
        if (g || v)
          clearInterval(x);
        else {
          let u;
          do
            u = n(a);
          while (u === s);
          const y = o.closest(".crs-search-input__data");
          y && (y.classList.add("fade-out"), setTimeout(() => {
            o.value = u[0], l && (u[1] === !0 ? l.style.display = "flex" : l.style.display = "none"), s = u, y.classList.remove("fade-out");
          }, 300));
        }
      }
      d();
      const x = setInterval(d, 3500);
    }, _ = setInterval(() => {
      const o = document.querySelector("#NavStandard .search-btn"), s = document.querySelector("#NavStandard [data-search-title]"), l = document.querySelector("#MainContent .search-btn"), d = document.querySelector("#MainContent [data-search-title]");
      if (o && s || l && d) {
        clearInterval(_);
        const x = (p) => {
          const h = p.value, w = encodeURIComponent(h);
          window.location.href = `https://mygeeni.com/search?q=${w}&type=product`;
        }, u = (p) => {
          p.addEventListener("input", function(h) {
            if (this.style.color = "rgba(74, 74, 74)", !g) {
              const w = h.data || "";
              this.value = w, g = !0, this.closest(".crs-search-input").querySelector(".crs-search-input__hot").style.display = "none";
            }
          }), p.addEventListener("keypress", function(h) {
            h.key === "Enter" && x(p);
          }), p.addEventListener("focus", function() {
            v = !0, this.closest(".crs-search-input").querySelector(".crs-search-input__hot").style.display = "none", f("exp_search_feature_input_01", "Search", "Input", "Header"), g || setTimeout(() => {
              this.setSelectionRange(0, 0), this.style.color = "rgba(74, 74, 74, 0.7)";
            }, 100);
          }), p.addEventListener("blur", function() {
            !g && v ? setTimeout(() => {
              v = !1, i(this);
            }, 3500) : setTimeout(() => {
              this.value.trim() === "" && (g = !1, v = !1, i(this));
            }, 5e3), this.style.color = "rgba(74, 74, 74)";
          });
        }, y = (p, h) => {
          p.addEventListener("click", () => {
            x(h), f("exp_search_feature_button_01", "Search", "Button", "Header");
          });
        };
        o && s && (u(s), y(o, s), i(s)), l && d && (u(d), y(l, d), i(d));
      }
    }, 100);
  }
  function E() {
    const n = new URLSearchParams(window.location.search).get("q");
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
      <p>${document.querySelectorAll("[data-collection-products] .product-grid-item").length || "0"} Search Results for: “${n}”</p>
    </div>`
      );
      document.querySelector("#SearchPage .collection__wrapper").insertAdjacentHTML("afterbegin", t);
    });
  }
  function q() {
    m('[href="/account"]').then((a) => a.insertAdjacentHTML(
      "beforeend",
      /*html*/
      '<span class="log">Login</span>'
    ));
  }
  function M(a, n, e, t) {
    let r = null;
    m(a).then((i) => {
      i && new IntersectionObserver((o) => {
        o.forEach((s) => {
          if (s.isIntersecting && s.intersectionRatio >= 0.5)
            r = performance.now();
          else if (r) {
            const l = ((performance.now() - r) / 1e3).toFixed(2);
            f(n, l, e, t), r = null;
          }
        });
      }, { threshold: 0.5 }).observe(i);
    });
  }
  function C() {
    if ((c.includes("/collections/all") || c.includes("/search")) && !c.includes("/products/")) {
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
      const a = setInterval(() => {
        const n = document.querySelector(".marquee"), e = document.querySelector(".site-header"), t = document.querySelector("#PageContainer .crs-search-input-wrapper"), r = document.querySelector("#PageContainer .empty-space"), i = document.querySelector(".collection__sticky-bar");
        if (n && e && t && r) {
          let _ = function() {
            i.style.setProperty("top", e.offsetHeight + t.offsetHeight - 1 + "px", "important");
          };
          clearInterval(a), window.addEventListener("scroll", () => {
            const o = window.scrollY || document.documentElement.scrollTop, s = n.offsetTop + n.offsetHeight;
            if (o >= s) {
              if (e.classList.contains("site-header--top-zero") || e.classList.add("site-header--top-zero"), !document.querySelector(".crs-search-input-wrapper--fixed")) {
                t.style.top = e.offsetHeight + "px";
                let l = window.getComputedStyle(t), d = parseFloat(l.getPropertyValue("margin-top"));
                console.log("marginTop", d), t.classList.add("crs-search-input-wrapper--fixed"), r.style.display = "block", r.style.height = t.offsetHeight + d + "px";
              }
            } else
              e.classList.remove("site-header--top-zero"), t.style.top = "0px", t.classList.remove("crs-search-input-wrapper--fixed"), r.style.display = "none";
          }), _(), window.addEventListener("resize", _);
        }
      }, 100);
    }
  }
  function B() {
    m(".mobile-nav.mobile-nav--weight-bold").then((a) => a.insertAdjacentHTML(
      "beforeend",
      /*html*/
      `
    <li class="mobile-menu__item mobile-menu__item--level-1" data-element="about-us">
      <a href="/pages/about-us-and-contact-us" class="mobile-navlink mobile-navlink--level-1">
        About us
      </a>
    </li>
  `
    )), m("#NavStandard .menu__item.menu__item--icons").then((a) => a.insertAdjacentHTML(
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