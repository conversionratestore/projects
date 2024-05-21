(function() {
  "use strict";
  const h = (e, t, n, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: e,
      event_desc: t,
      event_type: n,
      event_loc: a
    }), console.log(`Event: ${e} | ${t} | ${n} | ${a.replace(/  +/g, " ")}`);
  }, T = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, S = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, m = (e) => new Promise((t) => {
    const n = document.querySelector(e);
    if (n)
      return t(n);
    const a = new MutationObserver(() => {
      const i = document.querySelector(e);
      i && (t(i), a.disconnect());
    });
    a.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), _ = "https://conversionratestore.github.io/projects/geeni/img/search";
  let v = !1;
  const F = (
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

  
    .back-nav {
      display: none;
    }

    #PageContainer {
      padding-top: 0 !important;
    }

    #shopify-section-header {
      top: 0;
    }

    .opacity-0 {
      opacity: 0;
    }

    .empty-space {
      display: none;
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
  S("exp_search_feature"), T({ name: "Introduces personalized search", dev: "AK" }), document.head.insertAdjacentHTML("beforeend", F), L();
  function L() {
    window.location.pathname.includes("/search") && E();
    const e = setInterval(() => {
      document.getElementById("NavStandard") && document.getElementById("MainContent") && (clearInterval(e), I(), A(), M(), q());
    }, 100);
    document.body.addEventListener("click", (t) => {
      t.target.closest('[data-element="about-us"]') ? h("exp_search_feature_button_04", "About us", "Button", "Slide menu") : t.target.closest(".back-nav__inner") ? (h("exp_search_feature_button_03", "Back", "Button", "Search result"), window.history.back()) : t.target.closest(".menu__item") && h("exp_search_feature_button_02", `${t.target.closest(".menu__item").querySelector("span").innerText}`, "Button", "Header");
    }), m(".marquee").then(() => {
      B(".marquee", "exp_search_feature_section_02", "Visibility", "Header");
    });
  }
  function I() {
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
        ${n.map(([i, o]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${_}/${o}.svg" alt="">
                    <p>${i}</p>
                  </div>
                `
      )).join("")}
        </ul>
  
        <ul aria-hidden="true" class="marquee__content">
          ${n.map(([i, o]) => (
        /*html*/
        `
                  <div class="marquee__item">
                    <img src="${_}/${o}.svg" alt="">
                    <p>${i}</p>
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
  function A() {
    const e = setInterval(() => {
      if (document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)")[3]) {
        clearInterval(e);
        let t = document.querySelectorAll("#NavStandard > .menu__item:not(.menu__item--compress):not(.menu__item--icons)"), n = document.createElement("div");
        n.className = "new-nav", t.forEach((a) => {
          n.appendChild(a);
        }), document.getElementById("SiteHeader").insertAdjacentElement("beforeend", n), m(".new-nav .menu__item.child:last-child").then((a) => a.insertAdjacentHTML(
          "afterend",
          /*html*/
          `
    <div class="menu__item child" data-nav-item="" data-hover-disclosure-toggle="">
      <a href="/pages/about-us-and-contact-us" data-top-link="" class="navlink navlink--toplevel">
        <span class="navtext">About us</span>
      </a>
    </div>`
        )), m(".mobile-nav.mobile-nav--weight-bold").then((a) => a.insertAdjacentHTML(
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
  function M() {
    const e = [
      "Geeni Look Indoor Camera",
      "Geeni Hawk 3 Outdoor Camera",
      "Geeni Dot Smart Plug"
    ], t = [
      "Geeni Freebird Wire-Free Battery Camera",
      "Geeni Lookout 2k Outdoor Camera",
      "Geeni Doorpeek Wired Doorbell",
      "Geeni Prisma Plus 800 Smart Bulb"
    ], n = [...e, ...t], a = n[Math.floor(Math.random() * n.length)], o = (
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
        <div class="search-input__hot" ${e.includes(a) || Math.random() > 0.5 ? "" : 'style="display: none;"'}>
          <img src="${_}/fire.svg" alt="">
          <p>HOT</p>
        </div>
        <input type="text" value="" data-search-title="">
      </div>
      <button class="search-btn">Search</button>
    </div>
  </div>
  `
    );
    let k = document.getElementById("NavStandard"), x = document.getElementById("MainContent");
    k.insertAdjacentHTML("beforeend", o), x.insertAdjacentHTML("afterbegin", o), x.insertAdjacentHTML("afterbegin", '<div class="empty-space"></div>');
    const g = (s) => {
      let l = s.value;
      const p = s.closest(".search-input").querySelector(".search-input__hot");
      function c() {
        var f;
        if (v)
          clearInterval(y);
        else {
          let d;
          do
            d = n[Math.floor(Math.random() * n.length)];
          while (d === l);
          s.value = d, (f = s.closest(".search-input__data")) == null || f.classList.add("opacity-0"), p && (e.includes(d) ? p.style.display = "flex" : p.style.display = Math.random() > 0.5 ? "" : "none"), l = d, setTimeout(() => {
            var r;
            (r = s.closest(".search-input__data")) == null || r.classList.remove("opacity-0");
          }, 200);
        }
      }
      c();
      const y = setInterval(c, 3500);
    }, b = setInterval(() => {
      const s = document.querySelector("#NavStandard .search-btn"), l = document.querySelector("#NavStandard [data-search-title]"), p = document.querySelector("#MainContent .search-btn"), c = document.querySelector("#MainContent [data-search-title]");
      if (s && l || p && c) {
        clearInterval(b);
        const y = (r) => {
          const u = r.value, w = encodeURIComponent(u);
          window.location.href = `https://mygeeni.com/search?q=${w}&type=product`;
        }, f = (r) => {
          r.addEventListener("input", function(u) {
            if (!v) {
              const w = u.data || "";
              this.value = w, v = !0, this.closest(".search-input").querySelector(".search-input__hot").style.display = "none";
            }
          }), r.addEventListener("keypress", function(u) {
            u.key === "Enter" && y(r);
          }), r.addEventListener("focus", function() {
            h("exp_search_feature_input_01", "Search", "Input", "Header");
          }), r.addEventListener("blur", function() {
            setTimeout(() => {
              this.value === "" && (console.log("Input has been empty for 5 seconds after losing focus"), v = !1, g(this));
            }, 5e3);
          });
        }, d = (r, u) => {
          r.addEventListener("click", () => {
            y(u), h("exp_search_feature_button_01", "Search", "Button", "Header");
          });
        };
        s && l && (f(l), d(s, l), g(l)), p && c && (f(c), d(p, c), g(c));
      }
    }, 100);
  }
  function E() {
    const t = new URLSearchParams(window.location.search).get("q");
    document.head.insertAdjacentHTML(
      "beforeend",
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
    ), m("#SearchPage .collection__wrapper .pagination").then(() => {
      const a = (
        /*html*/
        `
    <div class="search-result">
      <p>${document.querySelectorAll(".product-grid-item").length || "0"} Search Results for: “${t}”</p>
    </div>`
      );
      document.querySelector("#SearchPage .collection__wrapper").insertAdjacentHTML("afterbegin", a);
    });
  }
  function q() {
    m('[href="/account"]').then((e) => e.insertAdjacentHTML(
      "beforeend",
      /*html*/
      '<span class="log">Login</span>'
    ));
  }
  function B(e, t, n, a) {
    let i = null;
    m(e).then((o) => {
      o && new IntersectionObserver((x) => {
        x.forEach((g) => {
          if (g.isIntersecting && g.intersectionRatio >= 0.5)
            i = performance.now();
          else if (i) {
            const b = ((performance.now() - i) / 1e3).toFixed(2);
            h(t, b, n, a), i = null;
          }
        });
      }, { threshold: 0.5 }).observe(o);
    });
  }
})();
//# sourceMappingURL=index.js.map