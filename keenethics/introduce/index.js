(function() {
  "use strict";
  const P = (i, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), console.log(`Event: ${i} | ${e} | ${t} | ${s}`);
  }, Oe = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, N = (i, e, t, s, a = 3, o) => {
    let r = new IntersectionObserver(
      (n) => {
        n.forEach((d) => {
          d.isIntersecting && (r.unobserve(d.target), setTimeout(function() {
            l.observe(d.target);
          }, 1e3 * a));
        });
      },
      {
        threshold: 0.5
      }
    ), l = new IntersectionObserver((n) => {
      n.forEach((d) => {
        d.isIntersecting ? (P(
          e || `view_element_${d.target.id}`,
          t || `View element on screen (${a} sec or more)`,
          "view",
          s || d.target.id
        ), o && o(), r.unobserve(d.target)) : r.observe(d.target), l.unobserve(d.target);
      });
    });
    document.querySelectorAll(i).forEach((n) => {
      r.observe(n);
    });
  };
  function O(i) {
    return new Promise((e) => {
      if (document.querySelector(i))
        return e(document.querySelector(i));
      const t = new MutationObserver(() => {
        document.querySelector(i) && (e(document.querySelector(i)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const $ = (i) => document.querySelectorAll(i), T = (i) => document.querySelector(i), Ve = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  };
  class Ge {
    constructor() {
      this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.init();
    }
    changes() {
      var a, o;
      const e = document.querySelector("section#tech-stack"), t = document.querySelector("section#industries");
      e && t && t.after(e);
      const s = T("section#testimonials .swiper");
      if (s && (s != null && s.swiper) && (s.swiper.params.touchStartPreventDefault = !1), (a = T("section#testimonials")) == null || a.addEventListener("mousedown", (r) => {
        r.target.closest("a.btn-primary") && P("exp_content_based_button_18", "Show more on Clutch", "click", "Home Page Our Partner Testimonials");
      }), $("section#testimonials a.btn-primary").forEach((r) => {
        r.classList.contains("btn-primary_outline") && r.classList.remove("btn-primary_outline");
      }), this.device === "mobile") {
        const r = T("section#industries"), l = r == null ? void 0 : r.querySelector(".card__row"), n = Array.from((l == null ? void 0 : l.querySelectorAll("div:has(.card)")) || []);
        (o = r == null ? void 0 : r.querySelector(".container")) == null || o.insertAdjacentHTML(
          "beforeend",
          /* HTML */
          `
        <button class="btn-primary btn-primary_outline show-more">Show more</button>
      `
        );
        const p = T("section#industries .show-more");
        let f = !1;
        const g = () => {
          n.forEach((h, m) => {
            h.style.display = f || m < 3 ? "block" : "none";
          }), p.textContent = f ? "Show less" : "Show more";
        };
        p == null || p.addEventListener("click", () => {
          f = !f, g(), f || p.scrollIntoView({ behavior: "smooth" });
        }), g();
      }
    }
    init() {
      this.render(), this.changes();
    }
    render() {
      const e = (
        /* HTML */
        `
      <section class="aa-hero">
        <div class="aa-hero__wrapper">
          <div class="aa-content"></div>

          <div class="aa-awards"></div>

          <div class="aa-dash-line"></div>
        </div>
      </section>
      <section class="software">
        <div class="aa-container">
          <h2 class="heading-2">Which software service best fits your needs?</h2>
          <div class="tabs"></div>
        </div>
      </section>
      <section class="trusted">
        <div class="aa-container">
          <h2 class="heading-2">Trusted by Leading Organizations:</h2>
          <div class="carousel"></div>
        </div>
      </section>
      <section class="calculator">
        <div class="aa-container">
          <div class="form"></div>
        </div>
      </section>
      <section class="envision">
        <div class="aa-container">
          <div class="form"></div>
        </div>
      </section>
      <section class="partners">
        <div class="aa-container">
          <h2 class="heading-2">Why Partner with KeenEthics?</h2>
          <div class="blocks"></div>
        </div>
      </section>
      <section class="team">
        <div class="aa-container">
          <div class="block"></div>
        </div>
      </section>
      <section class="full-circle">
        <div class="aa-container">
          <h2 class="heading-2">Our Full Circle Method</h2>
          <p class="under-heading">
            We guide businesses through every stage of software development while delivering effective and elegantly
            designed solutions to improve your daily business processes.
          </p>
          <div class="block"></div>
        </div>
      </section>
    `
      );
      O(".hero").then((t) => {
        t && t.insertAdjacentHTML("afterend", e);
      });
    }
  }
  const Fe = '.os-tab{display:none}.os-tab.os-active{display:block}.os-tabs-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column}.os-tab-content-container{border-radius:10px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff)}@media (max-width: 768px){.os-tab-content-container{border-radius:0;border:none;border-top:1px solid #e3e3e3;border-top:1px solid var(--gray-250-light-gray, #e3e3e3)}}.os-tab-button-container{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:10px;justify-content:center}@media (max-width: 768px){.os-tab-button-container{gap:1px;padding-bottom:24px}}.os-tab-button-container button{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:flex-start;justify-content:center;border:none;background:none;width:328px;height:52px;cursor:pointer;color:#2969cc;color:var(--blue-500-clasic-blue, #2969cc);color:#6f7a88;color:var(--gray-550-clasic-gray, #6f7a88);text-align:center;font-family:Raleway;font-size:18px;font-weight:700;line-height:24px;text-transform:uppercase}@media (max-width: 768px){.os-tab-button-container button{font-size:16px;width:auto}}.os-tab-button-container button.os-active{color:#2969cc;color:var(--blue-500-clasic-blue, #2969cc)}.os-tab-button-container:after{content:"";position:absolute;bottom:0;display:block;left:0;left:var(--after-left, 0);width:auto;width:var(--after-width, auto);transition:left .3s ease-in-out;height:2px;background:#2969cc}', Ne = `.os-content{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;font-family:Raleway}@media (max-width: 768px){.os-content{flex-direction:column}}.os-content .links{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:30px;padding:50px 40px;width:50%}@media (max-width: 768px){.os-content .links{width:100%;padding:30px 0}}.os-content .links h4{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:24px;font-weight:700;line-height:32px}.os-content .links .icon{width:48px;height:48px;margin-right:20px}.os-content .os-details{width:50%;padding:50px 40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:30px;font-family:Raleway;background:#f7f7f7}@media (max-width: 768px){.os-content .os-details{width:100%;padding:20px 16px}}.os-content .os-details .title{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:24px;font-weight:700;line-height:32px}.os-content .os-details ul{list-style-type:none;display:grid;grid-gap:20px;gap:20px}.os-content .os-details ul li{position:relative;display:grid;grid-gap:4px;gap:4px}.os-content .os-details ul li:before{content:"";position:absolute;top:0;left:0;width:24px;height:24px;margin-right:10px;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 12.5105L9.97907 18L20.4999 7.48955L18.9895 6L9.97907 14.9999L5.98952 11.0104L4.5 12.5105Z" fill="%232969CC"/></svg>');background-repeat:no-repeat;background-size:24px}.os-content .os-details ul li h5,.os-content .os-details ul li p{padding-left:41px}.os-content .os-details ul li h5{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:16px;font-weight:700;line-height:24px}.os-content .os-details ul li p{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:14px;font-weight:400;line-height:180%}.os-content .os-details .descr{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:18px;font-weight:700;line-height:150%}.os-content .os-details .actions{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;margin-top:22px;gap:16px;height:-moz-min-content;height:-webkit-min-content;height:min-content}@media (max-width: 768px){.os-content .os-details .actions{flex-direction:column;gap:16px}}.os-content .os-details .actions a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:50%;border-radius:8px;border:2px solid #2969cc;border:2px solid var(--blue-500-clasic-blue, #2969cc);padding:12px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;font-size:16px;font-weight:700;line-height:24px;text-transform:uppercase;transition:.4s}@media (max-width: 768px){.os-content .os-details .actions a{width:100%}}.os-content .os-details .actions a:first-child{color:#fff;color:var(--gray-0-white, #fff);background:#2969cc;background:var(--blue-500-clasic-blue, #2969cc)}.os-content .os-details .actions a:first-child:hover{background:#508be5;border-color:#508be5;box-shadow:0 8px 8px #00000029}.os-content .os-details .actions a:last-child{color:#2969cc;color:var(--blue-500-clasic-blue, #2969cc);background:transparent}.os-content .os-details .actions a:last-child:hover{border-color:#508be5;box-shadow:0 8px 8px #00000029}`;
  class Ye {
    constructor(e) {
      this.tabsContainer = document.querySelector(e), this.tabsContainer.classList.add("os-tabs-container"), this.tabContentContainer = document.createElement("div"), this.tabContentContainer.classList.add("os-tab-content-container"), this.tabButtonContainer = document.createElement("div"), this.tabButtonContainer.classList.add("os-tab-button-container"), this.tabsContainer.appendChild(this.tabContentContainer), this.tabsContainer.appendChild(this.tabButtonContainer), this.tabButtons = [], this.tabElements = [], document.head.insertAdjacentHTML("beforeend", `<style>${Fe} ${Ne}</style>`), this.events();
    }
    addTab({ content: e, title: t }) {
      const s = `tab-${this.tabElements.length + 1}`, a = document.createElement("div");
      a.id = s, a.classList.add("os-tab"), a.innerHTML = e, this.tabElements.push(a), this.tabContentContainer.appendChild(a);
      const o = document.createElement("button");
      o.innerText = `${t}`, o.addEventListener("click", () => {
        this.switchTab(s);
      }), this.tabButtons.push(o), this.tabsContainer.appendChild(this.tabContentContainer), this.tabButtonContainer.appendChild(o), this.tabElements.length === 1 && setTimeout(() => this.switchTab(s), 0);
    }
    switchTab(e) {
      this.tabElements.forEach((t, s) => {
        const a = this.tabButtons[s];
        if (t.id === e) {
          t.classList.add("os-active"), a.classList.add("os-active");
          const o = a.getBoundingClientRect(), r = this.tabsContainer.getBoundingClientRect(), l = o.left - r.left, n = o.width;
          this.tabsContainer.style.setProperty("--after-left", `${l}px`), this.tabsContainer.style.setProperty("--after-width", `${n}px`);
        } else
          t.classList.remove("os-active"), a.classList.remove("os-active");
      });
    }
    events() {
      var e, t;
      N(
        ".os-tabs-container",
        "exp_content_based_section_02",
        "Section",
        "Home Page  Which software service best fits your needs?"
      ), (e = T(".os-tab-button-container")) == null || e.addEventListener("click", (s) => {
        const a = s.target;
        a.tagName === "BUTTON" && P(
          "exp_content_based_button_06",
          `${a.textContent}`,
          "click",
          "Home Page Which software service best fits your needs?"
        );
      }), (t = T(".os-tabs-container")) == null || t.addEventListener("mousedown", (s) => {
        var d, p;
        const a = s.target, o = (d = T(".os-tab-button-container .os-active")) == null ? void 0 : d.textContent, r = a.closest(".aa-solutions a"), l = a.closest(".actions a:first-child"), n = a.closest(".actions a:last-child");
        if (r) {
          const f = (p = r.textContent) == null ? void 0 : p.trim();
          P(
            "exp_content_based_button_05",
            `${f}`,
            "click",
            `Home Page Which software service best fits your needs? ${o}`
          );
        }
        l && P(
          "exp_content_based_button_04",
          " Get a free assessment",
          "click",
          `Home Page Which software service best fits your needs? ${o}`
        ), n && P(
          "exp_content_based_button_05",
          `${n.textContent} - Choice`,
          "click",
          `Home Page Which software service best fits your needs? ${o}`
        );
      });
    }
  }
  const We = (
    /* HTML */
    `
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
    <path
      d="M2.25 9.04104V4.5C2.25 3.94772 2.69771 3.5 3.25 3.5H44.75C45.3023 3.5 45.75 3.94772 45.75 4.5V9.04104M2.25 9.04104V43.75C2.25 44.3023 2.69772 44.75 3.25 44.75H44.75C45.3023 44.75 45.75 44.3023 45.75 43.75V9.04104M2.25 9.04104H45.75"
      stroke="#12233D"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.8 19.25L21.45 33.5M28.1727 21.625L34.5 26.375L28.1727 31.125M19.4727 31.125L12.75 26.375L19.4727 21.625"
      stroke="#2969CC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="5.625" cy="6.125" r="1.125" fill="#12233D" />
    <circle cx="13.125" cy="6.125" r="1.125" fill="#12233D" />
    <circle cx="9.375" cy="6.125" r="1.125" fill="#12233D" />
  </svg>
`
  ), Re = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="49"
  viewBox="0 0 48 49"
  fill="none"
>
  <path
    d="M26.7654 35.9919L11.4408 20.8865M26.7654 35.9919C29.4705 34.7465 31.8177 33.3031 33.8495 31.7229M26.7654 35.9919C25.0754 37.2077 23.5064 37.8139 22.2006 38.071M11.4408 20.8865C12.3104 18.8806 13.7259 16.4227 15.6795 13.9474M11.4408 20.8865C10.9646 21.6058 10.1408 23.3755 9.7309 25.8121M33.8495 31.7229C45.5327 22.6365 46.7877 9.02437 45.6767 2.49734C31.3562 -0.426135 21.295 6.83226 15.6795 13.9474M33.8495 31.7229L32.9605 40.2607L23.8309 46.5L22.2006 38.071M22.2006 38.071C20.6849 38.3694 19.5239 38.1974 18.9401 37.9622L9.48443 28.7676C9.48443 27.7042 9.5794 26.7126 9.7309 25.8121M15.6795 13.9474L7.20203 14.6473L1.33301 24.1702L9.7309 25.8121"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M14.6663 41.2907L9.46309 46.5M10.7639 36.7326L1.33301 46.1744M6.53626 32.5L1.33301 37.7093"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle
    cx="32.667"
    cy="15.1667"
    r="5.25"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), Ze = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="49"
  viewBox="0 0 48 49"
  fill="none"
>
  <path
    d="M26.484 15.2609L25.4716 14.9602C25.1311 14.859 24.8783 14.5758 24.8198 14.2297L24.6574 13.2696C24.5803 12.8139 24.1729 12.485 23.7048 12.5005L22.8372 12.5293C22.369 12.5449 21.985 12.9001 21.9392 13.36L21.7958 14.8006C21.7685 15.0747 21.6184 15.3223 21.3865 15.4757L20.5462 16.0316C20.2323 16.2393 19.8225 16.2398 19.508 16.033L18.3946 15.3008C18.0139 15.0504 17.5054 15.109 17.1935 15.4391L16.69 15.9719C16.3602 16.3208 16.3551 16.8603 16.6781 17.2154L17.8187 18.4691C18.0363 18.7084 18.1118 19.0423 18.0179 19.3501L17.7805 20.1276C17.6865 20.4354 17.4367 20.6727 17.1213 20.7535L15.4685 21.1775C15.0005 21.2975 14.7028 21.7501 14.7824 22.2207L14.916 23.0108C14.9858 23.4235 15.3288 23.738 15.7511 23.7765L17.2628 23.9145C17.5473 23.9405 17.8041 24.0935 17.9598 24.3298L18.5102 25.1651C18.712 25.4714 18.7113 25.8664 18.5083 26.172L17.7396 27.3294C17.4927 27.7012 17.5501 28.1939 17.8761 28.5007L18.4633 29.0536C18.7887 29.3598 19.2891 29.3939 19.6539 29.1346L21.1121 28.0983C21.3478 27.9308 21.6491 27.881 21.9273 27.9637L22.5594 28.1515C22.8376 28.2341 23.0609 28.4397 23.1637 28.7078L23.7992 30.366C23.9583 30.781 24.3945 31.0252 24.8372 30.9471L25.6363 30.8061C26.0798 30.7278 26.4034 30.3483 26.4057 29.9039L26.4131 28.4622C26.4148 28.127 26.6009 27.8192 26.8991 27.6585L27.6199 27.2698C27.8969 27.1205 28.2315 27.1193 28.5095 27.2666L29.8 27.95C30.1737 28.1479 30.6356 28.0726 30.9248 27.7665L31.4786 27.1806C31.8083 26.8317 31.8135 26.2921 31.4905 25.9371L30.3499 24.6834C30.1322 24.4441 30.0567 24.1102 30.1507 23.8024L30.3964 22.9975C30.4858 22.7046 30.7167 22.4747 31.0126 22.3836L32.5752 21.903C32.9857 21.7768 33.2557 21.3903 33.2293 20.9669L33.1868 20.2867C33.157 19.8088 32.761 19.4331 32.2758 19.4223L30.7328 19.388C30.3637 19.3798 30.0341 19.1578 29.8919 18.8216L29.4959 17.8848C29.3885 17.6306 29.402 17.3424 29.5326 17.099L30.2508 15.7615C30.4562 15.379 30.364 14.907 30.0291 14.6273L29.6341 14.2972C29.3021 14.0198 28.8199 14.0053 28.4715 14.2622L27.3123 15.1168C27.075 15.2917 26.7676 15.3452 26.484 15.2609Z"
    stroke="#2969CC"
    stroke-width="1.5"
  />
  <path
    d="M27.6888 22.8845C27.094 24.8332 25.0103 25.9372 23.0349 25.3504C21.0595 24.7635 19.9403 22.7081 20.5352 20.7594C21.1301 18.8107 23.2137 17.7067 25.1892 18.2935C27.1646 18.8804 28.2837 20.9358 27.6888 22.8845Z"
    stroke="#2969CC"
    stroke-width="1.5"
  />
  <path
    d="M24.2118 43.8847H37.313C40.6268 43.8847 43.313 41.1984 43.313 37.8847V34.1924M24.2118 43.8847V45.7308H19.8464V42.0385H24.2118V43.8847ZM4.65527 26.8077H8.30796V34.1924H4.65527V20.3462C4.65597 13.4231 10.1534 3.26929 24.2118 3.26929C38.7695 3.26929 43.313 14.3462 43.313 23.7998V26.8077M43.313 26.8077H39.6926V34.1924H43.313M43.313 26.8077V34.1924"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), qe = (
    /* HTML */
    `<svg
  width="48"
  height="49"
  viewBox="0 0 48 49"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21.5218 36.6022V39.901C21.5218 40.9592 21.1024 41.9742 20.3557 42.7239L19.2506 43.8333M21.5218 36.6022H29.8494M21.5218 36.6022H14.0001M19.2506 43.8333H17.2317M19.2506 43.8333H31.3636M34.1395 43.8333H31.3636M31.3636 43.8333L30.5173 42.5589C30.0817 41.9031 29.8494 41.1334 29.8494 40.3461V36.6022M29.8494 36.6022H44.0001C45.1047 36.6022 46.0001 35.7068 46.0001 34.6022V30.2688V7.16663C46.0001 6.06206 45.1047 5.16663 44.0001 5.16663H7.37109C6.26652 5.16663 5.37109 6.06206 5.37109 7.16663V22.5"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M5.37067 22.6467H11.9507C13.0553 22.6467 13.9507 23.5422 13.9507 24.6467V30.269V36.6023V41.8334C13.9507 42.938 13.0553 43.8334 11.9507 43.8334H3.33301C2.22844 43.8334 1.33301 42.938 1.33301 41.8334V24.6467C1.33301 23.5422 2.22844 22.6467 3.33301 22.6467H5.37067Z"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <ellipse cx="7.66602" cy="40.1667" rx="1" ry="1" stroke="#2969CC" stroke-width="1.5" />
  <circle cx="25.667" cy="33.5" r="1" stroke="#2969CC" stroke-width="1.5" />
</svg> `
  ), xe = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="49"
  viewBox="0 0 48 49"
  fill="none"
>
  <path
    d="M8.15445 44H2.26461C2.2644 42.4513 1.97024 39.9735 4.03157 38.1152C6.09289 36.2569 9.92119 34.3985 10.8049 32.8499V29.7526C9.39132 28.7615 8.44894 26.2424 8.15445 25.1068C7.44767 24.6112 7.27098 23.042 7.27098 22.3193C7.27098 19.8415 7.85996 19.222 8.15445 19.222C7.21208 13.7709 9.52875 11.3757 10.8049 10.8595C12.5399 9.64296 14.1043 9.34423 15.75 9.56878"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M40.2273 44H45.7346C45.7348 42.4493 46.0453 39.9682 43.8694 38.1074C41.6935 36.2467 37.6523 34.3858 36.7195 32.8352V29.7338C38.2117 28.7414 39.2064 26.219 39.5173 25.0818C40.2634 24.5856 40.4499 23.0143 40.4499 22.2906C40.4499 19.8096 39.8282 19.1893 39.5173 19.1893C40.5121 13.7309 38.0666 11.3326 36.7195 10.8157C35.2112 9.81251 33.6669 9.47387 32.25 9.50155"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M37.3861 36.5469C40.5 38.458 40.5 40.8945 40.5 44H7.80363C6.80717 39.2797 8.42642 37.789 10.2948 36.5469C12.1631 35.3047 16.8341 33.4414 18.7024 30.957V27.541C17.4568 26.2988 16.2113 23.8145 15.8999 21.9512C14.6543 20.709 14.9657 20.0879 14.9657 18.8457C14.9657 17.3345 14.9657 15.7402 15.8999 15.1192C15.6858 13.5714 15.6281 12.2346 15.7062 11.082C16.0825 5.52788 19.6122 4.25002 23.9961 4.25C33.6493 4.25 32.4038 11.7031 32.0924 15.1192C32.7152 15.7402 33.0266 16.3614 33.0266 18.8457C33.0266 21.33 31.9886 22.2617 31.4696 22.2617C30.5354 24.7461 29.186 26.6094 28.3556 27.541V30.957C28.667 32.5097 33.3379 34.0625 37.3861 36.5469Z"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), Ue = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path
    d="M2.25 13.9554V9.25C2.25 7.04086 4.04086 5.25 6.25 5.25H34.3731M2.25 13.9554V38.75C2.25 40.9591 4.04086 42.75 6.25 42.75H41.75C43.9591 42.75 45.75 40.9591 45.75 38.75V9.25C45.75 7.04086 43.9591 5.25 41.75 5.25H34.3731M2.25 13.9554H24.0155C25.0768 13.9554 26.0946 13.5336 26.8448 12.7829L34.3731 5.25M6.6 9.60268H8.60769M12.2885 9.60268H14.2962M17.6423 9.60268H19.9846"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M8.25 24V28.6429C8.25 30.2208 9.42525 31.5 10.875 31.5C12.3247 31.5 13.5 30.2208 13.5 28.6429V24M16.4531 24V31.5M26.9531 24V28.6429C26.9531 30.2208 28.1284 31.5 29.5781 31.5C31.0279 31.5 32.2031 30.2208 32.2031 28.6429V24M24.3281 24L19.0781 31.5M39.75 24L37.125 27.9286M37.125 27.9286L34.5 31.5M37.125 27.9286L34.5 24M37.125 27.9286L39.75 31.5"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), Xe = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path
    d="M34.4455 30L45.0453 40.5999C45.4349 40.9894 45.436 41.6205 45.0479 42.0115L42.0412 45.0404C41.6521 45.4323 41.0191 45.4347 40.6271 45.0457L30 34.5"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle cx="19.875" cy="19.875" r="17.625" stroke="#12233D" stroke-width="1.5" />
</svg>`
  ), $e = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <g clip-path="url(#clip0_2080_36796)">
    <path
      d="M26.4407 1.33331H2.33301C1.78072 1.33331 1.33301 1.78103 1.33301 2.33331V45.6666C1.33301 46.2189 1.78072 46.6666 2.33301 46.6666H26.4407M26.4407 1.33331L36.5535 11.685M26.4407 1.33331V10.685C26.4407 11.2373 26.8884 11.685 27.4407 11.685H36.5535M36.5535 11.685V31.3176M36.5535 31.3176L26.7254 41.3779C26.5429 41.5647 26.4407 41.8155 26.4407 42.0767V46.6666M36.5535 31.3176L41.4356 36.6719M36.5535 31.3176L41.0692 27.0033C41.4654 26.6248 42.0924 26.6356 42.4753 27.0276L45.9837 30.6188C46.3632 31.0073 46.3632 31.6278 45.9837 32.0164L41.4356 36.6719M26.4407 46.6666H31.2504C31.5197 46.6666 31.7775 46.5581 31.9657 46.3655L41.4356 36.6719"
      stroke="#12233D"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.33301 17.1795L8.74615 18.6118C9.13774 19.0087 9.77828 19.0087 10.1699 18.6118L14.0622 14.6667M19.0205 17.1795H29.9997"
      stroke="#2969CC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.33301 29.1795L8.74615 30.6118C9.13774 31.0087 9.77828 31.0087 10.1699 30.6118L14.0622 26.6667M19.0205 29.1795H29.9997"
      stroke="#2969CC"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_2080_36796">
      <rect width="48" height="48" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), Qe = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path
    d="M24.7508 17.0079L29.1626 12.2904C28.3155 9.2152 29.5155 6.58268 30.2214 5.65082C33.1861 1.03808 38.2802 2.09808 40.4567 3.20467L36.3096 7.13598V10.8926H40.4567L44.339 7.13598C45.4684 10.281 44.4567 13.3387 43.8096 14.4744C41.0567 18.5979 36.7802 18.5805 34.9861 18.0563L29.6255 22.875M16.8755 24.75L12.4861 29.1513C10.3096 28.7727 5.46263 28.8893 3.48609 32.3837C1.58765 35.7401 2.40928 40.3881 4.63315 42.4304C7.68809 45.236 13.1256 45.236 16.192 42.4304C17.246 41.466 18.9272 38.3943 18.2214 34.8299L22.9861 29.8502"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle cx="10.4062" cy="36.6876" r="1.8125" stroke="#12233D" stroke-width="1.5" />
  <path
    d="M20.6912 16.7454L12.75 8.97017V5.38831L4.19118 2.59271L2.25 4.33996L4.98529 12.7268H8.69117L16.8088 20.4146M20.6912 16.7454L22.5441 14.9108L25.3676 17.9685C25.3382 18.9295 25.5794 21.0437 26.7794 21.8124C27.9794 22.5812 30.0441 23.3558 30.9265 23.6471L43.6218 36.0672C44.7997 37.2196 44.8276 39.1065 43.6841 40.2932L42.0882 41.9495M20.6912 16.7454L16.8088 20.4146M16.8088 20.4146L14.6912 22.424L17.6029 25.1322C18.4265 25.2196 20.4088 25.6564 21.75 26.7047C23.0912 27.7531 23.1912 29.6459 23.0735 30.4613L36.2654 43.5978C37.4531 44.7805 39.3795 44.7606 40.5426 43.5536L42.0882 41.9495M42.0882 41.9495L29.1617 28.9762"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), Ke = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path
    d="M2.25 8.54104V4C2.25 3.44772 2.69771 3 3.25 3H44.75C45.3023 3 45.75 3.44772 45.75 4V8.54104M2.25 8.54104V43.25C2.25 43.8023 2.69772 44.25 3.25 44.25H44.75C45.3023 44.25 45.75 43.8023 45.75 43.25V8.54104M2.25 8.54104H45.75"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M25.8 18.75L21.45 33M28.1727 21.125L34.5 25.875L28.1727 30.625M19.4727 30.625L12.75 25.875L19.4727 21.125"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle cx="5.625" cy="5.625" r="1.125" fill="#12233D" />
  <circle cx="13.125" cy="5.625" r="1.125" fill="#12233D" />
  <circle cx="9.375" cy="5.625" r="1.125" fill="#12233D" />
</svg> `
  ), Je = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path
    d="M16.6461 13.8673C18.9554 9.50995 25.5534 6.82853 31.4915 8.50443C37.4297 10.1803 39.739 16.6176 39.4091 20.6741C42.8914 21.2214 46.6668 24.5894 46.6668 28.9502C46.6668 36.3241 42.818 37.7765 41.0586 38H9.0585C6.96915 38 2.52654 36.4582 1.47085 30.291C0.552848 24.9281 4.4399 21.2411 7.0791 19.5652C7.7389 12.5265 14.007 11.5211 16.6461 13.8673ZM16.6461 13.8673C17.6358 14.5377 19.6152 16.5487 19.6152 19.2302"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M25.3125 12.8264C28.0377 12.3026 34.1726 13.4827 35.4852 20.0457"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), et = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path d="M29.4374 9L18.5625 39" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path
    d="M11.3124 14.5101L2.25 23.6938L11.3124 32.8775"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M36.6875 14.5101L45.75 23.6938L36.6875 32.8775"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), tt = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path
    d="M27.0871 21.7368L24.6779 19.125M25.5738 17.1972C25.5738 18.59 24.4446 19.7192 23.0518 19.7192C21.6589 19.7192 20.5298 18.59 20.5298 17.1972C20.5298 15.8043 21.6589 14.6752 23.0518 14.6752C24.4446 14.6752 25.5738 15.8043 25.5738 17.1972Z"
    stroke="#2969CC"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M24.0608 4.58722L24.5409 4.01104L24.0608 3.61096L23.5806 4.01104L24.0608 4.58722ZM45.2698 23.2368C45.5881 23.502 46.061 23.459 46.3261 23.1408C46.5913 22.8226 46.5483 22.3496 46.2301 22.0845L45.2698 23.2368ZM38.2059 41.9128V42.6628C38.6201 42.6628 38.9559 42.327 38.9559 41.9128H38.2059ZM1.89146 22.0845C1.57324 22.3496 1.53024 22.8226 1.7954 23.1408C2.06057 23.459 2.53349 23.502 2.85171 23.2368L1.89146 22.0845ZM9.8964 41.9128H9.1464C9.1464 42.327 9.48219 42.6628 9.8964 42.6628V41.9128ZM17.8639 35.2335H18.6139C18.6139 34.9989 18.5041 34.7779 18.3173 34.6361L17.8639 35.2335ZM16.4586 33.2253C16.1287 32.9748 15.6582 33.0393 15.4077 33.3692C15.1573 33.6992 15.2218 34.1696 15.5517 34.4201L16.4586 33.2253ZM21.8476 25.8039H22.5976C22.5976 25.5394 22.4583 25.2945 22.2311 25.1593L21.8476 25.8039ZM18.5064 22.943C18.1505 22.7312 17.6902 22.8481 17.4784 23.2041C17.2666 23.56 17.3834 24.0203 17.7394 24.2321L18.5064 22.943ZM27.1592 21.8749L26.7537 21.244C26.539 21.382 26.4092 21.6196 26.4092 21.8749H27.1592ZM31.3475 20.0742C31.6959 19.8503 31.7968 19.3862 31.5728 19.0378C31.3488 18.6894 30.8848 18.5885 30.5364 18.8124L31.3475 20.0742ZM30.7003 31.6974L30.2571 31.0923C30.0643 31.2336 29.9503 31.4583 29.9503 31.6974H30.7003ZM32.4966 31.3113C32.8307 31.0665 32.9032 30.5972 32.6584 30.263C32.4137 29.9289 31.9443 29.8564 31.6102 30.1012L32.4966 31.3113ZM23.5806 5.1634L37.7258 16.9504L38.686 15.7981L24.5409 4.01104L23.5806 5.1634ZM37.7258 16.9504L45.2698 23.2368L46.2301 22.0845L38.686 15.7981L37.7258 16.9504ZM37.4559 16.3742V41.9128H38.9559V16.3742H37.4559ZM2.85171 23.2368L10.3765 16.9665L9.41628 15.8141L1.89146 22.0845L2.85171 23.2368ZM10.3765 16.9665L24.5409 5.1634L23.5806 4.01104L9.41628 15.8141L10.3765 16.9665ZM10.6464 41.9128V16.3903H9.1464V41.9128H10.6464ZM17.8639 41.1628H9.8964V42.6628H17.8639V41.1628ZM18.6139 41.9128V35.2335H17.1139V41.9128H18.6139ZM18.3173 34.6361L16.4586 33.2253L15.5517 34.4201L17.4104 35.8309L18.3173 34.6361ZM21.8476 41.1628H17.8639V42.6628H21.8476V41.1628ZM22.5976 41.9128V25.8039H21.0976V41.9128H22.5976ZM22.2311 25.1593L18.5064 22.943L17.7394 24.2321L21.4641 26.4484L22.2311 25.1593ZM27.1592 41.1628H21.8476V42.6628H27.1592V41.1628ZM27.9092 41.9128V21.8749H26.4092V41.9128H27.9092ZM27.5648 22.5058L31.3475 20.0742L30.5364 18.8124L26.7537 21.244L27.5648 22.5058ZM38.2059 41.1628H30.7003V42.6628H38.2059V41.1628ZM30.7003 41.1628H27.1592V42.6628H30.7003V41.1628ZM31.4503 41.9128V31.6974H29.9503V41.9128H31.4503ZM31.1435 32.3024L32.4966 31.3113L31.6102 30.1012L30.2571 31.0923L31.1435 32.3024ZM34.912 18.206C34.912 19.1847 34.1187 19.978 33.14 19.978V21.478C34.9471 21.478 36.412 20.0131 36.412 18.206H34.912ZM33.14 19.978C32.1614 19.978 31.368 19.1847 31.368 18.206H29.868C29.868 20.0131 31.333 21.478 33.14 21.478V19.978ZM31.368 18.206C31.368 17.2274 32.1614 16.434 33.14 16.434V14.934C31.333 14.934 29.868 16.3989 29.868 18.206H31.368ZM33.14 16.434C34.1187 16.434 34.912 17.2274 34.912 18.206H36.412C36.412 16.3989 34.9471 14.934 33.14 14.934V16.434ZM35.9212 29.3028C35.9212 30.2815 35.1278 31.0748 34.1492 31.0748V32.5748C35.9562 32.5748 37.4212 31.1099 37.4212 29.3028H35.9212ZM34.1492 31.0748C33.1705 31.0748 32.3772 30.2815 32.3772 29.3028H30.8772C30.8772 31.1099 32.3421 32.5748 34.1492 32.5748V31.0748ZM32.3772 29.3028C32.3772 28.3242 33.1705 27.5308 34.1492 27.5308V26.0308C32.3421 26.0308 30.8772 27.4957 30.8772 29.3028H32.3772ZM34.1492 27.5308C35.1278 27.5308 35.9212 28.3242 35.9212 29.3028H37.4212C37.4212 27.4957 35.9562 26.0308 34.1492 26.0308V27.5308ZM17.762 22.2412C17.762 23.2199 16.9686 24.0132 15.99 24.0132V25.5132C17.797 25.5132 19.262 24.0483 19.262 22.2412H17.762ZM15.99 24.0132C15.0113 24.0132 14.218 23.2199 14.218 22.2412H12.718C12.718 24.0483 14.1829 25.5132 15.99 25.5132V24.0132ZM14.218 22.2412C14.218 21.2626 15.0113 20.4692 15.99 20.4692V18.9692C14.1829 18.9692 12.718 20.4341 12.718 22.2412H14.218ZM15.99 20.4692C16.9686 20.4692 17.762 21.2626 17.762 22.2412H19.262C19.262 20.4341 17.797 18.9692 15.99 18.9692V20.4692ZM15.7447 32.3292C15.7447 33.3078 14.9513 34.1012 13.9727 34.1012V35.6012C15.7798 35.6012 17.2447 34.1363 17.2447 32.3292H15.7447ZM13.9727 34.1012C12.9941 34.1012 12.2007 33.3078 12.2007 32.3292H10.7007C10.7007 34.1363 12.1656 35.6012 13.9727 35.6012V34.1012ZM12.2007 32.3292C12.2007 31.3505 12.9941 30.5572 13.9727 30.5572V29.0572C12.1656 29.0572 10.7007 30.5221 10.7007 32.3292H12.2007ZM13.9727 30.5572C14.9513 30.5572 15.7447 31.3505 15.7447 32.3292H17.2447C17.2447 30.5221 15.7798 29.0572 13.9727 29.0572V30.5572Z"
    fill="#12233D"
  />
</svg>`
  ), it = (
    /* HTML */
    `<svg
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M28.0278 14.7361L32.8612 9.09723H39.3056" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" />
  <path d="M19.9722 14.7361L15.1388 9.09723H8.69439" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" />
  <path d="M8.69434 24H12.3193" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" />
  <path d="M36.0835 24H39.3057" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" />
  <path d="M28.0278 33.6667L32.8612 39.3055H39.3056" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" />
  <path d="M19.9722 33.6667L15.1388 39.3055H8.69439" stroke="#12233D" stroke-width="1.5" stroke-linecap="round" />
  <path
    d="M24.6471 14.3333H23.3532C22.801 14.3333 22.3532 14.781 22.3532 15.3333V15.8815C22.3532 16.2592 22.1404 16.6047 21.8031 16.7746L20.7102 17.3252C20.3235 17.5199 19.8555 17.4438 19.5505 17.1366L19.1533 16.7364C18.7793 16.3596 18.176 16.3407 17.7792 16.6935L16.8417 17.5269C16.4128 17.9081 16.3921 18.5714 16.7963 18.9787L17.2663 19.4522C17.5678 19.756 17.6426 20.2179 17.4524 20.6013L16.9005 21.7132C16.7317 22.0534 16.3846 22.2686 16.0048 22.2686H15.3335C14.7812 22.2686 14.3335 22.7164 14.3335 23.2686V24.587C14.3335 25.1393 14.7812 25.587 15.3335 25.587H15.9882C16.3766 25.587 16.7299 25.8119 16.8943 26.1638L17.4613 27.3777C17.6455 27.7721 17.5534 28.2403 17.2337 28.5356L16.8628 28.8781C16.4285 29.2791 16.4351 29.9674 16.8769 30.3601L17.8122 31.1915C18.1953 31.5321 18.774 31.5278 19.152 31.1816L19.5805 30.7891C19.873 30.5212 20.2963 30.4515 20.6592 30.6115L21.7566 31.0952C22.1192 31.255 22.3532 31.614 22.3532 32.0103V32.6666C22.3532 33.2189 22.801 33.6666 23.3532 33.6666H24.6471C25.1994 33.6666 25.6471 33.2189 25.6471 32.6666V32.026C25.6471 31.6217 25.8905 31.2572 26.2639 31.1023L27.493 30.5924C27.8521 30.4435 28.2649 30.5161 28.5516 30.7787L28.9711 31.1628C29.3576 31.5169 29.952 31.5123 30.3331 31.1524L31.203 30.3307C31.6116 29.9449 31.6221 29.2982 31.2261 28.8993L30.8394 28.5097C30.5567 28.2248 30.4716 27.7985 30.6235 27.4269L31.1214 26.2087C31.2751 25.8327 31.6409 25.587 32.0471 25.587H32.6668C33.2191 25.587 33.6668 25.1393 33.6668 24.587V23.2686C33.6668 22.7164 33.2191 22.2686 32.6668 22.2686H32.0314C31.6331 22.2686 31.2728 22.0323 31.1142 21.667L30.6306 20.5533C30.4738 20.1923 30.5433 19.773 30.8081 19.4819L31.2877 18.9548C31.6545 18.5517 31.631 17.9291 31.2347 17.5549L30.3661 16.7345C29.9716 16.3619 29.352 16.3719 28.9698 16.757L28.5802 17.1494C28.2815 17.4504 27.8253 17.5302 27.4421 17.3485L26.2187 16.7685C25.8696 16.603 25.6471 16.2512 25.6471 15.8649V15.3333C25.6471 14.781 25.1994 14.3333 24.6471 14.3333Z"
    stroke="#12233D"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <circle cx="23.9999" cy="24" r="3.27778" stroke="#12233D" stroke-width="1.5" />
  <ellipse cx="5.47222" cy="8.69445" rx="3.22222" ry="3.22222" stroke="#2969CC" stroke-width="1.5" />
  <ellipse cx="42.5279" cy="8.69445" rx="3.22222" ry="3.22222" stroke="#2969CC" stroke-width="1.5" />
  <circle cx="42.5279" cy="39.3055" r="3.22222" stroke="#2969CC" stroke-width="1.5" />
  <ellipse cx="5.47222" cy="39.3055" rx="3.22222" ry="3.22222" stroke="#2969CC" stroke-width="1.5" />
  <circle cx="5.47222" cy="24" r="3.22222" stroke="#2969CC" stroke-width="1.5" />
  <ellipse cx="42.5279" cy="24" rx="3.22222" ry="3.22222" stroke="#2969CC" stroke-width="1.5" />
</svg> `
  ), Q = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="17"
  height="16"
  viewBox="0 0 17 16"
  fill="none"
>
  <path d="M5.5 12.59L10.1356 8L5.5 3.41L6.92713 2L13 8L6.92713 14L5.5 12.59Z" fill="#2969CC" />
</svg>`
  ), st = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 30 30"
  fill="none"
>
  <path
    d="M20.3169 17.4849L27.9435 25.0363C28.416 25.5043 28.418 26.2673 27.9477 26.7376L26.7282 27.957C26.2613 28.4239 25.5047 28.4259 25.0354 27.9612L17.4004 20.4013"
    stroke="#DE4F4F"
    stroke-width="1.25"
  />
  <path
    d="M11.6662 22.432C17.612 22.432 22.432 17.612 22.432 11.6662C22.432 5.72041 17.612 0.900391 11.6662 0.900391C5.72041 0.900391 0.900391 5.72041 0.900391 11.6662C0.900391 17.612 5.72041 22.432 11.6662 22.432Z"
    stroke="#12233D"
    stroke-width="1.25"
  />
</svg>`
  ), ot = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="30"
  viewBox="0 0 30 30"
  fill="none"
>
  <path
    d="M15.4776 10.5482L18.2861 7.54499C17.7469 5.58733 18.5108 3.91145 18.9602 3.31822C20.8476 0.381728 24.0904 1.05653 25.4761 1.76099L22.836 4.26369V6.65515H25.4761L27.9475 4.26369C28.6666 6.26584 28.0225 8.21238 27.6106 8.93538C25.858 11.5604 23.1356 11.5494 21.9934 11.2156L18.9602 13.9964M10.029 15.8874L7.66981 18.2788C6.28426 18.0378 3.19863 18.112 1.94036 20.3366C0.731798 22.4733 1.25485 25.4322 2.67058 26.7324C4.61537 28.5184 8.07693 28.5184 10.029 26.7324C10.7 26.1184 11.7703 24.1629 11.3209 21.8938L14.3542 18.7237"
    stroke="#12233D"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M6.34623 24.2305C6.98348 24.2305 7.50008 23.7139 7.50008 23.0767C7.50008 22.4394 6.98348 21.9229 6.34623 21.9229C5.70898 21.9229 5.19238 22.4394 5.19238 23.0767C5.19238 23.7139 5.70898 24.2305 6.34623 24.2305Z"
    fill="#12233D"
  />
  <path
    d="M12.8941 10.3818L7.83865 5.43199V3.15176L2.39007 1.37207L1.1543 2.48438L2.8956 7.82345H5.25479L10.4225 12.7176M12.8941 10.3818L14.0737 9.21384L15.8711 11.1604C15.8525 11.7721 16.0059 13.1181 16.7699 13.6074C17.5338 14.0969 18.8482 14.59 19.4099 14.7753L26.4451 21.6582C27.7744 22.9585 27.8058 25.0877 26.5155 26.4269M12.8941 10.3818L10.4225 12.7176M10.4225 12.7176L9.07442 13.9967L10.9281 15.7208C11.4523 15.7764 12.7143 16.0545 13.5681 16.7219C14.4219 17.3893 14.4856 18.5943 14.4107 19.1133L21.8039 26.4755C23.1122 27.7784 25.2344 27.7565 26.5155 26.4269M26.5155 26.4269L18.2865 18.1679"
    stroke="#DE4F4F"
    stroke-width="1.66667"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), at = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="26"
  viewBox="0 0 30 26"
  fill="none"
>
  <g clip-path="url(#clip0_2092_25912)">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.96703 2.12157C2.42082 2.12157 1.97802 2.56437 1.97802 3.11059V5.62612H15.5473C15.8309 5.62612 16.1007 5.50445 16.2885 5.29198L19.0899 2.12157H2.96703ZM21.7295 2.12157L17.7707 6.60174C17.2076 7.23911 16.3979 7.60414 15.5473 7.60414H1.97802V22.8908C1.97802 23.4371 2.42082 23.8798 2.96703 23.8798H26.7033C27.2495 23.8798 27.6924 23.4371 27.6924 22.8908V3.11059C27.6924 2.56437 27.2495 2.12157 26.7033 2.12157H21.7295ZM0 3.11059C0 1.47194 1.32839 0.143555 2.96703 0.143555H26.7033C28.342 0.143555 29.6703 1.47194 29.6703 3.11059V22.8908C29.6703 24.5295 28.342 25.8578 26.7033 25.8578H2.96703C1.32839 25.8578 0 24.5295 0 22.8908V3.11059Z"
      fill="#12233D"
    />
    <path
      d="M5.9331 4.10034C5.9331 3.55412 5.4903 3.11133 4.94409 3.11133C4.39787 3.11133 3.95508 3.55412 3.95508 4.10034C3.95508 4.64655 4.39787 5.08935 4.94409 5.08935C5.4903 5.08935 5.9331 4.64655 5.9331 4.10034Z"
      fill="#12233D"
    />
    <path
      d="M8.90087 4.10034C8.90087 3.55412 8.45807 3.11133 7.91186 3.11133C7.36565 3.11133 6.92285 3.55412 6.92285 4.10034C6.92285 4.64655 7.36565 5.08935 7.91186 5.08935C8.45807 5.08935 8.90087 4.64655 8.90087 4.10034Z"
      fill="#12233D"
    />
    <path
      d="M11.8677 4.10034C11.8677 3.55412 11.4249 3.11133 10.8787 3.11133C10.3324 3.11133 9.88965 3.55412 9.88965 4.10034C9.88965 4.64655 10.3324 5.08935 10.8787 5.08935C11.4249 5.08935 11.8677 4.64655 11.8677 4.10034Z"
      fill="#12233D"
    />
    <path
      d="M6.55152 17.9803C6.1592 17.9803 5.82458 17.9157 5.54766 17.7863C5.27536 17.6525 5.05382 17.4703 4.88304 17.2395C4.7169 17.0087 4.59458 16.7479 4.51612 16.4571C4.43766 16.1617 4.39844 15.8549 4.39844 15.5363V13.0303H5.35382V15.5363C5.35382 15.8087 5.39074 16.0671 5.46458 16.3117C5.53844 16.5563 5.66304 16.7549 5.83844 16.9071C6.01382 17.0595 6.2492 17.1357 6.54458 17.1357C6.8492 17.1357 7.0892 17.0595 7.26458 16.9071C7.43998 16.7503 7.56458 16.5495 7.63844 16.3049C7.71228 16.0603 7.7492 15.8041 7.7492 15.5363V13.0303H8.69766V15.5363C8.69766 15.8733 8.65612 16.1895 8.57306 16.4849C8.49458 16.7803 8.36766 17.0411 8.19228 17.2671C8.02152 17.4887 7.79998 17.6641 7.52766 17.7933C7.25536 17.9179 6.92998 17.9803 6.55152 17.9803Z"
      fill="#DE4F4F"
    />
    <path d="M9.65918 17.9457V13.0303H10.6146V17.9457H9.65918Z" fill="#DE4F4F" />
    <path d="M15.7758 13.0303L12.342 17.9457H11.3174L14.7443 13.0303H15.7758Z" fill="#DE4F4F" />
    <path
      d="M18.5593 17.9803C18.167 17.9803 17.8324 17.9157 17.5555 17.7863C17.2831 17.6525 17.0616 17.4703 16.8909 17.2395C16.7247 17.0087 16.6024 16.7479 16.5239 16.4571C16.4455 16.1617 16.4062 15.8549 16.4062 15.5363V13.0303H17.3616V15.5363C17.3616 15.8087 17.3985 16.0671 17.4724 16.3117C17.5463 16.5563 17.6709 16.7549 17.8462 16.9071C18.0216 17.0595 18.257 17.1357 18.5524 17.1357C18.857 17.1357 19.097 17.0595 19.2724 16.9071C19.4478 16.7503 19.5724 16.5495 19.6463 16.3049C19.7201 16.0603 19.757 15.8041 19.757 15.5363V13.0303H20.7055V15.5363C20.7055 15.8733 20.6639 16.1895 20.5809 16.4849C20.5024 16.7803 20.3755 17.0411 20.2001 17.2671C20.0293 17.4887 19.8078 17.6641 19.5355 17.7933C19.2631 17.9179 18.9378 17.9803 18.5593 17.9803Z"
      fill="#DE4F4F"
    />
    <path
      d="M22.1811 13.0303L23.3996 14.8441L24.6111 13.0303H25.6496L23.9465 15.5225L25.5942 17.9457H24.5557L23.3996 16.2011L22.2365 17.9457H21.1911L22.8389 15.5225L21.1357 13.0303H22.1811Z"
      fill="#DE4F4F"
    />
  </g>
  <defs>
    <clipPath id="clip0_2092_25912">
      <rect width="30" height="25.7143" fill="white" transform="translate(0 0.143066)" />
    </clipPath>
  </defs>
</svg>`
  ), rt = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30"
  height="22"
  viewBox="0 0 30 22"
  fill="none"
>
  <g clip-path="url(#clip0_2092_25933)">
    <path
      d="M18.5413 1L11.458 20.2823"
      stroke="#12233D"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.73575 4.54199L0.833008 10.4447L6.73575 16.3475"
      stroke="#DE4F4F"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.2646 4.54199L29.1674 10.4447L23.2646 16.3475"
      stroke="#DE4F4F"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_2092_25933">
      <rect width="30" height="21.6667" fill="white" transform="translate(0 0.166992)" />
    </clipPath>
  </defs>
</svg>`
  ), ye = (
    /* HTML */
    `<svg
  width="19"
  height="22"
  viewBox="0 0 19 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M18.4769 6.01568C18.4659 5.43732 18.4554 4.89096 18.4554 4.36239C18.4554 3.94829 18.1198 3.61258 17.7056 3.61258C14.4989 3.61258 12.0574 2.69101 10.0223 0.712309C9.7312 0.42918 9.26791 0.42928 8.97689 0.712309C6.942 2.69101 4.50091 3.61258 1.29442 3.61258C0.880322 3.61258 0.544606 3.94829 0.544606 4.36239C0.544606 4.89106 0.534209 5.43762 0.523112 6.01607C0.420338 11.3983 0.279574 18.7696 9.25402 21.8803C9.3336 21.9079 9.41657 21.9217 9.49955 21.9217C9.58253 21.9217 9.66561 21.9079 9.74509 21.8803C18.7202 18.7695 18.5797 11.398 18.4769 6.01568ZM9.49965 20.3762C1.80289 17.5802 1.91926 11.4552 2.02253 6.04467C2.02873 5.71995 2.03473 5.40523 2.03893 5.09671C5.04218 4.96994 7.44377 4.05987 9.49965 2.26892C11.5557 4.05987 13.9577 4.97004 16.9612 5.09671C16.9654 5.40513 16.9714 5.71965 16.9776 6.04417C17.0807 11.4549 17.197 17.5801 9.49965 20.3762Z"
    fill="#2969CC"
  />
  <path
    d="M12.0809 8.60598L8.46196 12.2248L6.91765 10.6805C6.62482 10.3877 6.15004 10.3877 5.85732 10.6805C5.56449 10.9734 5.56449 11.4481 5.85732 11.7409L7.93179 13.8154C8.07816 13.9617 8.27011 14.0349 8.46196 14.0349C8.65381 14.0349 8.84576 13.9617 8.99213 13.8154L13.1412 9.66642C13.4341 9.37359 13.4341 8.89881 13.1413 8.60608C12.8486 8.31326 12.3738 8.31316 12.0809 8.60598Z"
    fill="#2969CC"
  />
</svg> `
  ), K = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
  <path
    d="M6.328 9.578V5h1.344v4.578H6.328Zm.686-5.082c-.21467 0-.392-.05133-.532-.154s-.21-.266-.21-.49c0-.252.07-.42.21-.504.14-.09333.31733-.14.532-.14.18667 0 .35.04667.49.14.14933.084.224.252.224.504 0 .23333-.07467.40133-.224.504-.14.09333-.30333.14-.49.14ZM7 13.064c-.84 0-1.62867-.1587-2.366-.476-.728-.308-1.372-.7373-1.932-1.288-.55067-.56-.98467-1.204-1.302-1.932-.308-.73733-.462-1.526-.462-2.366 0-.84.154-1.624.462-2.352.31733-.73733.75133-1.38133 1.302-1.932.56-.56 1.204-.994 1.932-1.302C5.37133 1.09867 6.16.94 7 .94c.84 0 1.624.15867 2.352.476.7373.308 1.3813.742 1.932 1.302.56.55067.994 1.19467 1.302 1.932.3173.728.476 1.512.476 2.352 0 .84-.1587 1.62867-.476 2.366-.308.728-.742 1.372-1.302 1.932-.5507.5507-1.1947.98-1.932 1.288-.728.3173-1.512.476-2.352.476Zm0-1.246c.672 0 1.29733-.1213 1.876-.364.57867-.252 1.08733-.5973 1.526-1.036.448-.448.7933-.96133 1.036-1.54.252-.588.378-1.21333.378-1.876 0-.672-.126-1.29733-.378-1.876-.2427-.57867-.588-1.08733-1.036-1.526-.43867-.448-.952-.79333-1.54-1.036-.57867-.252-1.19933-.378-1.862-.378-.672 0-1.29733.126-1.876.378-.57867.24267-1.092.588-1.54 1.036-.43867.43867-.784.952-1.036 1.54-.24267.57867-.364 1.19933-.364 1.862 0 .672.12133 1.29733.364 1.876.252.57867.59733 1.092 1.036 1.54.448.4387.96133.784 1.54 1.036.588.2427 1.21333.364 1.876.364Z"
    fill="#fff"
  />
</svg>`
  ), nt = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path d="M32 8L16 23.746L32 40" stroke="#6F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
  ), lt = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
>
  <path d="M16 40L32 24.254L16 8" stroke="#6F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`
  ), D = "https://conversionratestore.github.io/projects/keenethics/introduce/img/", ct = {
    title: "Develop My Idea",
    content: (
      /* HTML */
      ` <div class="os-content">
    <div class="links">
      <h4 class="title">Services we offer</h4>
      <ul class="aa-solutions">
        <li>
          <a href="/services-web-development" target="__blank">
            <i class="icon">${We}</i>
            <span>Web & Mobile App Development</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/approach-minimum-viable-product" target="__blank">
            <i class="icon">${Re}</i>
            <span>Minimum Viable Product (MVP) Strategy</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-maintenance-support" target="__blank">
            <i class="icon">${Ze}</i>
            <span>Tech & Innovation Consultancy</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>

        <li>
          <a href="/tech-apps-progressive-web-apps" target="__blank">
            <i class="icon">${qe}</i>
            <span>Cross-Platform Solutions</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-dedicated-development-team" target="__blank">
            <i class="icon">${xe}</i>
            <span>Dedicated Development Team</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
      </ul>
    </div>
    <div class="os-details">
      <h4 class="title">Let's turn your vision into a viable product.</h4>
      <ul class="list">
        <li>
          <h5>Industry-Specific Services</h5>
          <p>
            Developing tailor-made solutions that offer the quality and user experience needed to appeal to your
            specific industry or sector.
          </p>
        </li>
        <li>
          <h5>Client-Centric Approach</h5>
          <p>
            Our team offers the communication and soft skills necessary to help you bring your idea to life, exactly the
            way you envision it.
          </p>
        </li>
        <li>
          <h5>Quality Assured by our Strike Force Approach</h5>
          <p>
            You’ll be backed by a team of our best software developers, Strike Force, with the expertise needed to drive
            even the most difficult projects to a successful launch.
          </p>
        </li>
        <li>
          <h5>2-Week Trial Period</h5>
          <p>We, as a web development company, offer a 2-week trial period.</p>
        </li>
      </ul>
      <div class="os-footer">
        <p class="descr">You dream it, we engineer it.</p>
        <div class="actions">
          <a href="/estimate">Get a free assessment</a>
          <a href="/services-business-analysis#choose">Check step-by-step guide</a>
        </div>
      </div>
    </div>
  </div>`
    )
  }, dt = {
    title: "Scale My Project",
    content: (
      /* HTML */
      ` <div class="os-content">
    <div class="links">
      <h4 class="title">Services we offer</h4>
      <ul class="aa-solutions">
        <li>
          <a href="/services-cloud-application-development" target="__blank">
            <i class="icon">${Je}</i>
            <span>Cloud Application Development</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-low-code-no-code" target="__blank">
            <i class="icon">${et}</i>
            <span>Low-Code/No-Code Solutions</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-internet-of-things" target="__blank">
            <i class="icon">${tt}</i>
            <span>Internet of Things (IoT) Integration</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>

        <li>
          <a href="/services-al-ml" target="__blank">
            <i class="icon">${it}</i>
            <span>AI & Machine Learning Implementation</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-dedicated-development-team" target="__blank">
            <i class="icon">${xe}</i>
            <span>Dedicated Development Team</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
      </ul>
    </div>
    <div class="os-details">
      <h4 class="title">Take your projects to the next level with our scalable solutions.</h4>
      <ul class="list">
        <li>
          <h5>Industry-Specific Services</h5>
          <p>
            Developing tailor-made solutions that offer the quality and user experience needed to appeal to your
            specific industry or sector.
          </p>
        </li>
        <li>
          <h5>Client-Centric Approach</h5>
          <p>
            Our team offers the communication and soft skills necessary to help you bring your idea to life, exactly the
            way you envision it.
          </p>
        </li>
        <li>
          <h5>Quality Assured by our Strike Force Approach</h5>
          <p>
            You’ll be backed by a team of our best software developers, Strike Force, with the expertise needed to drive
            even the most difficult projects to a successful launch.
          </p>
        </li>
        <li>
          <h5>2-Week Trial Period</h5>
          <p>We, as a web development company, offer a 2-week trial period.</p>
        </li>
      </ul>
      <div class="os-footer">
        <p class="descr">Multiply success by implementing robust & scalable technology</p>
        <div class="actions">
          <a href="/estimate">Get a free assessment</a>
          <a href="/services-dedicated-development-team#services">CHECK Project’s ROADMAP</a>
        </div>
      </div>
    </div>
  </div>`
    )
  }, pt = {
    title: "Optimize My Business",
    content: (
      /* HTML */
      ` <div class="os-content">
    <div class="links">
      <h4 class="title">Services we offer</h4>
      <ul class="aa-solutions">
        <li>
          <a href="/services-ui-ux-design" target="__blank">
            <i class="icon">${Ue}</i>
            <span>UI/UX Design Improvements</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-business-analysis" target="__blank">
            <i class="icon">${Xe}</i>
            <span>Business Analysis & Strategy Formulation</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/services-development-and-quality-assurance" target="__blank">
            <i class="icon">${$e}</i>
            <span>Quality Assurance & Testing</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>

        <li>
          <a href="/services-maintenance-support" target="__blank">
            <i class="icon">${Qe}</i>
            <span>Maintenance & Support Services</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
        <li>
          <a href="/tech-apps-progressive-web-apps" target="__blank">
            <i class="icon">${Ke}</i>
            <span>Progressive Web App Development</span>
            <img src="${D}/arrow-right.svg" alt="arrow right" />
          </a>
        </li>
      </ul>
    </div>
    <div class="os-details">
      <h4 class="title">Transform your enterprise’s performance using smarter technology and leaner processes.</h4>
      <ul class="list">
        <li>
          <h5>Industry-Specific Services</h5>
          <p>
            Developing tailor-made solutions that offer the quality and user experience needed to appeal to your
            specific industry or sector.
          </p>
        </li>
        <li>
          <h5>Client-Centric Approach</h5>
          <p>
            Our team offers the communication and soft skills necessary to help you bring your idea to life, exactly the
            way you envision it.
          </p>
        </li>
        <li>
          <h5>Quality Assured by our Strike Force Approach</h5>
          <p>
            You’ll be backed by a team of our best software developers, Strike Force, with the expertise needed to drive
            even the most difficult projects to a successful launch.
          </p>
        </li>
        <li>
          <h5>2-Week Trial Period</h5>
          <p>We, as a web development company, offer a 2-week trial period.</p>
        </li>
      </ul>
      <div class="os-footer">
        <p class="descr">Unlock the full potential of your business.</p>
        <div class="actions">
          <a href="/estimate">Get a free assessment</a>
          <a href="/services-ui-ux-design">Check UI/UX AUDIT GUIDE</a>
        </div>
      </div>
    </div>
  </div>`
    )
  };
  function ke(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
  }
  function le(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
      typeof i[t] > "u" ? i[t] = e[t] : ke(e[t]) && ke(i[t]) && Object.keys(e[t]).length > 0 && le(i[t], e[t]);
    });
  }
  const Ce = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function Z() {
    const i = typeof document < "u" ? document : {};
    return le(i, Ce), i;
  }
  const ft = {
    document: Ce,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(i) {
      return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
    },
    cancelAnimationFrame(i) {
      typeof setTimeout > "u" || clearTimeout(i);
    }
  };
  function V() {
    const i = typeof window < "u" ? window : {};
    return le(i, ft), i;
  }
  function ut(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
  }
  function mt(i) {
    const e = i;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {
      }
      try {
        delete e[t];
      } catch {
      }
    });
  }
  function ce(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function J() {
    return Date.now();
  }
  function ht(i) {
    const e = V();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
  }
  function gt(i, e) {
    e === void 0 && (e = "x");
    const t = V();
    let s, a, o;
    const r = ht(i);
    return t.WebKitCSSMatrix ? (a = r.transform || r.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((l) => l.replace(",", ".")).join(", ")), o = new t.WebKitCSSMatrix(a === "none" ? "" : a)) : (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = o.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? a = o.m41 : s.length === 16 ? a = parseFloat(s[12]) : a = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? a = o.m42 : s.length === 16 ? a = parseFloat(s[13]) : a = parseFloat(s[5])), a || 0;
  }
  function ee(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
  }
  function wt(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
  }
  function G() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (s != null && !wt(s)) {
        const a = Object.keys(Object(s)).filter((o) => e.indexOf(o) < 0);
        for (let o = 0, r = a.length; o < r; o += 1) {
          const l = a[o], n = Object.getOwnPropertyDescriptor(s, l);
          n !== void 0 && n.enumerable && (ee(i[l]) && ee(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : G(i[l], s[l]) : !ee(i[l]) && ee(s[l]) ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : G(i[l], s[l])) : i[l] = s[l]);
        }
      }
    }
    return i;
  }
  function te(i, e, t) {
    i.style.setProperty(e, t);
  }
  function Se(i) {
    let {
      swiper: e,
      targetPosition: t,
      side: s
    } = i;
    const a = V(), o = -e.translate;
    let r = null, l;
    const n = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
    const d = t > o ? "next" : "prev", p = (g, h) => d === "next" && g >= h || d === "prev" && g <= h, f = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), r === null && (r = l);
      const g = Math.max(Math.min((l - r) / n, 1), 0), h = 0.5 - Math.cos(g * Math.PI) / 2;
      let m = o + h * (t - o);
      if (p(m, t) && (m = t), e.wrapperEl.scrollTo({
        [s]: m
      }), p(m, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [s]: m
          });
        }), a.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = a.requestAnimationFrame(f);
    };
    f();
  }
  function W(i, e) {
    return e === void 0 && (e = ""), [...i.children].filter((t) => t.matches(e));
  }
  function ie(i) {
    try {
      console.warn(i);
      return;
    } catch {
    }
  }
  function se(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : ut(e)), t;
  }
  function bt(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
      const s = i.previousElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function vt(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
      const s = i.nextElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function q(i, e) {
    return V().getComputedStyle(i, null).getPropertyValue(e);
  }
  function oe(i) {
    let e = i, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Ae(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
      e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
    return t;
  }
  function de(i, e, t) {
    const s = V();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
  }
  function H(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  let pe;
  function xt() {
    const i = V(), e = Z();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    };
  }
  function Le() {
    return pe || (pe = xt()), pe;
  }
  let fe;
  function yt(i) {
    let {
      userAgent: e
    } = i === void 0 ? {} : i;
    const t = Le(), s = V(), a = s.navigator.platform, o = e || s.navigator.userAgent, r = {
      ios: !1,
      android: !1
    }, l = s.screen.width, n = s.screen.height, d = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = o.match(/(iPad).*OS\s([\d_]+)/);
    const f = o.match(/(iPod)(.*OS\s([\d_]+))?/), g = !p && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = a === "Win32";
    let m = a === "MacIntel";
    const b = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !p && m && t.touch && b.indexOf(`${l}x${n}`) >= 0 && (p = o.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), d && !h && (r.os = "android", r.android = !0), (p || g || f) && (r.os = "ios", r.ios = !0), r;
  }
  function Me(i) {
    return i === void 0 && (i = {}), fe || (fe = yt(i)), fe;
  }
  let ue;
  function kt() {
    const i = V(), e = Me();
    let t = !1;
    function s() {
      const l = i.navigator.userAgent.toLowerCase();
      return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
    }
    if (s()) {
      const l = String(i.navigator.userAgent);
      if (l.includes("Version/")) {
        const [n, d] = l.split("Version/")[1].split(" ")[0].split(".").map((p) => Number(p));
        t = n < 16 || n === 16 && d < 2;
      }
    }
    const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), o = s(), r = o || a && e.ios;
    return {
      isSafari: t || o,
      needPerspectiveFix: t,
      need3dFix: r,
      isWebView: a
    };
  }
  function Ct() {
    return ue || (ue = kt()), ue;
  }
  function St(i) {
    let {
      swiper: e,
      on: t,
      emit: s
    } = i;
    const a = V();
    let o = null, r = null;
    const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    }, n = () => {
      !e || e.destroyed || !e.initialized || (o = new ResizeObserver((f) => {
        r = a.requestAnimationFrame(() => {
          const {
            width: g,
            height: h
          } = e;
          let m = g, b = h;
          f.forEach((x) => {
            let {
              contentBoxSize: c,
              contentRect: u,
              target: w
            } = x;
            w && w !== e.el || (m = u ? u.width : (c[0] || c).inlineSize, b = u ? u.height : (c[0] || c).blockSize);
          }), (m !== g || b !== h) && l();
        });
      }), o.observe(e.el));
    }, d = () => {
      r && a.cancelAnimationFrame(r), o && o.unobserve && e.el && (o.unobserve(e.el), o = null);
    }, p = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof a.ResizeObserver < "u") {
        n();
        return;
      }
      a.addEventListener("resize", l), a.addEventListener("orientationchange", p);
    }), t("destroy", () => {
      d(), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", p);
    });
  }
  function At(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: a
    } = i;
    const o = [], r = V(), l = function(p, f) {
      f === void 0 && (f = {});
      const g = r.MutationObserver || r.WebkitMutationObserver, h = new g((m) => {
        if (e.__preventObserver__)
          return;
        if (m.length === 1) {
          a("observerUpdate", m[0]);
          return;
        }
        const b = function() {
          a("observerUpdate", m[0]);
        };
        r.requestAnimationFrame ? r.requestAnimationFrame(b) : r.setTimeout(b, 0);
      });
      h.observe(p, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData
      }), o.push(h);
    }, n = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const p = Ae(e.hostEl);
          for (let f = 0; f < p.length; f += 1)
            l(p[f]);
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        });
      }
    }, d = () => {
      o.forEach((p) => {
        p.disconnect();
      }), o.splice(0, o.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", n), s("destroy", d);
  }
  var Lt = {
    on(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function")
        return s;
      const a = t ? "unshift" : "push";
      return i.split(" ").forEach((o) => {
        s.eventsListeners[o] || (s.eventsListeners[o] = []), s.eventsListeners[o][a](e);
      }), s;
    },
    once(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function")
        return s;
      function a() {
        s.off(i, a), a.__emitterProxy && delete a.__emitterProxy;
        for (var o = arguments.length, r = new Array(o), l = 0; l < o; l++)
          r[l] = arguments[l];
        e.apply(s, r);
      }
      return a.__emitterProxy = e, s.on(i, a, t);
    },
    onAny(i, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof i != "function")
        return t;
      const s = e ? "unshift" : "push";
      return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t;
    },
    offAny(i) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
        return e;
      const t = e.eventsAnyListeners.indexOf(i);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(i, e) {
      const t = this;
      return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach((s) => {
        typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((a, o) => {
          (a === e || a.__emitterProxy && a.__emitterProxy === e) && t.eventsListeners[s].splice(o, 1);
        });
      }), t;
    },
    emit() {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
        return i;
      let e, t, s;
      for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
        o[r] = arguments[r];
      return typeof o[0] == "string" || Array.isArray(o[0]) ? (e = o[0], t = o.slice(1, o.length), s = i) : (e = o[0].events, t = o[0].data, s = o[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((n) => {
        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((d) => {
          d.apply(s, [n, ...t]);
        }), i.eventsListeners && i.eventsListeners[n] && i.eventsListeners[n].forEach((d) => {
          d.apply(s, t);
        });
      }), i;
    }
  };
  function Mt() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(q(s, "padding-left") || 0, 10) - parseInt(q(s, "padding-right") || 0, 10), t = t - parseInt(q(s, "padding-top") || 0, 10) - parseInt(q(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
      width: e,
      height: t,
      size: i.isHorizontal() ? e : t
    }));
  }
  function Tt() {
    const i = this;
    function e(y, A) {
      return parseFloat(y.getPropertyValue(i.getDirectionLabel(A)) || 0);
    }
    const t = i.params, {
      wrapperEl: s,
      slidesEl: a,
      size: o,
      rtlTranslate: r,
      wrongRTL: l
    } = i, n = i.virtual && t.virtual.enabled, d = n ? i.virtual.slides.length : i.slides.length, p = W(a, `.${i.params.slideClass}, swiper-slide`), f = n ? i.virtual.slides.length : p.length;
    let g = [];
    const h = [], m = [];
    let b = t.slidesOffsetBefore;
    typeof b == "function" && (b = t.slidesOffsetBefore.call(i));
    let x = t.slidesOffsetAfter;
    typeof x == "function" && (x = t.slidesOffsetAfter.call(i));
    const c = i.snapGrid.length, u = i.slidesGrid.length;
    let w = t.spaceBetween, v = -b, C = 0, M = 0;
    if (typeof o > "u")
      return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * o : typeof w == "string" && (w = parseFloat(w)), i.virtualSize = -w, p.forEach((y) => {
      r ? y.style.marginLeft = "" : y.style.marginRight = "", y.style.marginBottom = "", y.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (te(s, "--swiper-centered-offset-before", ""), te(s, "--swiper-centered-offset-after", ""));
    const j = t.grid && t.grid.rows > 1 && i.grid;
    j ? i.grid.initSlides(p) : i.grid && i.grid.unsetSlides();
    let L;
    const I = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((y) => typeof t.breakpoints[y].slidesPerView < "u").length > 0;
    for (let y = 0; y < f; y += 1) {
      L = 0;
      let A;
      if (p[y] && (A = p[y]), j && i.grid.updateSlide(y, A, p), !(p[y] && q(A, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          I && (p[y].style[i.getDirectionLabel("width")] = "");
          const S = getComputedStyle(A), k = A.style.transform, E = A.style.webkitTransform;
          if (k && (A.style.transform = "none"), E && (A.style.webkitTransform = "none"), t.roundLengths)
            L = i.isHorizontal() ? de(A, "width", !0) : de(A, "height", !0);
          else {
            const _ = e(S, "width"), R = e(S, "padding-left"), ve = e(S, "padding-right"), z = e(S, "margin-left"), Y = e(S, "margin-right"), B = S.getPropertyValue("box-sizing");
            if (B && B === "border-box")
              L = _ + z + Y;
            else {
              const {
                clientWidth: U,
                offsetWidth: ne
              } = A;
              L = _ + R + ve + z + Y + (ne - U);
            }
          }
          k && (A.style.transform = k), E && (A.style.webkitTransform = E), t.roundLengths && (L = Math.floor(L));
        } else
          L = (o - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (L = Math.floor(L)), p[y] && (p[y].style[i.getDirectionLabel("width")] = `${L}px`);
        p[y] && (p[y].swiperSlideSize = L), m.push(L), t.centeredSlides ? (v = v + L / 2 + C / 2 + w, C === 0 && y !== 0 && (v = v - o / 2 - w), y === 0 && (v = v - o / 2 - w), Math.abs(v) < 1 / 1e3 && (v = 0), t.roundLengths && (v = Math.floor(v)), M % t.slidesPerGroup === 0 && g.push(v), h.push(v)) : (t.roundLengths && (v = Math.floor(v)), (M - Math.min(i.params.slidesPerGroupSkip, M)) % i.params.slidesPerGroup === 0 && g.push(v), h.push(v), v = v + L + w), i.virtualSize += L + w, C = L, M += 1;
      }
    }
    if (i.virtualSize = Math.max(i.virtualSize, o) + x, r && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + w}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + w}px`), j && i.grid.updateWrapperSize(L, g), !t.centeredSlides) {
      const y = [];
      for (let A = 0; A < g.length; A += 1) {
        let S = g[A];
        t.roundLengths && (S = Math.floor(S)), g[A] <= i.virtualSize - o && y.push(S);
      }
      g = y, Math.floor(i.virtualSize - o) - Math.floor(g[g.length - 1]) > 1 && g.push(i.virtualSize - o);
    }
    if (n && t.loop) {
      const y = m[0] + w;
      if (t.slidesPerGroup > 1) {
        const A = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), S = y * t.slidesPerGroup;
        for (let k = 0; k < A; k += 1)
          g.push(g[g.length - 1] + S);
      }
      for (let A = 0; A < i.virtual.slidesBefore + i.virtual.slidesAfter; A += 1)
        t.slidesPerGroup === 1 && g.push(g[g.length - 1] + y), h.push(h[h.length - 1] + y), i.virtualSize += y;
    }
    if (g.length === 0 && (g = [0]), w !== 0) {
      const y = i.isHorizontal() && r ? "marginLeft" : i.getDirectionLabel("marginRight");
      p.filter((A, S) => !t.cssMode || t.loop ? !0 : S !== p.length - 1).forEach((A) => {
        A.style[y] = `${w}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let y = 0;
      m.forEach((S) => {
        y += S + (w || 0);
      }), y -= w;
      const A = y - o;
      g = g.map((S) => S <= 0 ? -b : S > A ? A + x : S);
    }
    if (t.centerInsufficientSlides) {
      let y = 0;
      if (m.forEach((A) => {
        y += A + (w || 0);
      }), y -= w, y < o) {
        const A = (o - y) / 2;
        g.forEach((S, k) => {
          g[k] = S - A;
        }), h.forEach((S, k) => {
          h[k] = S + A;
        });
      }
    }
    if (Object.assign(i, {
      slides: p,
      snapGrid: g,
      slidesGrid: h,
      slidesSizesGrid: m
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      te(s, "--swiper-centered-offset-before", `${-g[0]}px`), te(s, "--swiper-centered-offset-after", `${i.size / 2 - m[m.length - 1] / 2}px`);
      const y = -i.snapGrid[0], A = -i.slidesGrid[0];
      i.snapGrid = i.snapGrid.map((S) => S + y), i.slidesGrid = i.slidesGrid.map((S) => S + A);
    }
    if (f !== d && i.emit("slidesLengthChange"), g.length !== c && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== u && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !n && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const y = `${t.containerModifierClass}backface-hidden`, A = i.el.classList.contains(y);
      f <= t.maxBackfaceHiddenSlides ? A || i.el.classList.add(y) : A && i.el.classList.remove(y);
    }
  }
  function Et(i) {
    const e = this, t = [], s = e.virtual && e.params.virtual.enabled;
    let a = 0, o;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const r = (l) => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((l) => {
          t.push(l);
        });
      else
        for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
          const l = e.activeIndex + o;
          if (l > e.slides.length && !s)
            break;
          t.push(r(l));
        }
    else
      t.push(r(e.activeIndex));
    for (o = 0; o < t.length; o += 1)
      if (typeof t[o] < "u") {
        const l = t[o].offsetHeight;
        a = l > a ? l : a;
      }
    (a || a === 0) && (e.wrapperEl.style.height = `${a}px`);
  }
  function Pt() {
    const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
      e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
  }
  function zt(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: s,
      rtlTranslate: a,
      snapGrid: o
    } = e;
    if (s.length === 0)
      return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let r = -i;
    a && (r = i), s.forEach((n) => {
      n.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let n = 0; n < s.length; n += 1) {
      const d = s[n];
      let p = d.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (p -= s[0].swiperSlideOffset);
      const f = (r + (t.centeredSlides ? e.minTranslate() : 0) - p) / (d.swiperSlideSize + l), g = (r - o[0] + (t.centeredSlides ? e.minTranslate() : 0) - p) / (d.swiperSlideSize + l), h = -(r - p), m = h + e.slidesSizesGrid[n], b = h >= 0 && h <= e.size - e.slidesSizesGrid[n];
      (h >= 0 && h < e.size - 1 || m > 1 && m <= e.size || h <= 0 && m >= e.size) && (e.visibleSlides.push(d), e.visibleSlidesIndexes.push(n), s[n].classList.add(t.slideVisibleClass)), b && s[n].classList.add(t.slideFullyVisibleClass), d.progress = a ? -f : f, d.originalProgress = a ? -g : g;
    }
  }
  function Dt(i) {
    const e = this;
    if (typeof i > "u") {
      const p = e.rtlTranslate ? -1 : 1;
      i = e && e.translate && e.translate * p || 0;
    }
    const t = e.params, s = e.maxTranslate() - e.minTranslate();
    let {
      progress: a,
      isBeginning: o,
      isEnd: r,
      progressLoop: l
    } = e;
    const n = o, d = r;
    if (s === 0)
      a = 0, o = !0, r = !0;
    else {
      a = (i - e.minTranslate()) / s;
      const p = Math.abs(i - e.minTranslate()) < 1, f = Math.abs(i - e.maxTranslate()) < 1;
      o = p || a <= 0, r = f || a >= 1, p && (a = 0), f && (a = 1);
    }
    if (t.loop) {
      const p = e.getSlideIndexByData(0), f = e.getSlideIndexByData(e.slides.length - 1), g = e.slidesGrid[p], h = e.slidesGrid[f], m = e.slidesGrid[e.slidesGrid.length - 1], b = Math.abs(i);
      b >= g ? l = (b - g) / m : l = (b + m - h) / m, l > 1 && (l -= 1);
    }
    Object.assign(e, {
      progress: a,
      progressLoop: l,
      isBeginning: o,
      isEnd: r
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), o && !n && e.emit("reachBeginning toEdge"), r && !d && e.emit("reachEnd toEdge"), (n && !o || d && !r) && e.emit("fromEdge"), e.emit("progress", a);
  }
  function It() {
    const i = this, {
      slides: e,
      params: t,
      slidesEl: s,
      activeIndex: a
    } = i, o = i.virtual && t.virtual.enabled, r = i.grid && t.grid && t.grid.rows > 1, l = (f) => W(s, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach((f) => {
      f.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
    });
    let n, d, p;
    if (o)
      if (t.loop) {
        let f = a - i.virtual.slidesBefore;
        f < 0 && (f = i.virtual.slides.length + f), f >= i.virtual.slides.length && (f -= i.virtual.slides.length), n = l(`[data-swiper-slide-index="${f}"]`);
      } else
        n = l(`[data-swiper-slide-index="${a}"]`);
    else
      r ? (n = e.filter((f) => f.column === a)[0], p = e.filter((f) => f.column === a + 1)[0], d = e.filter((f) => f.column === a - 1)[0]) : n = e[a];
    n && (n.classList.add(t.slideActiveClass), r ? (p && p.classList.add(t.slideNextClass), d && d.classList.add(t.slidePrevClass)) : (p = vt(n, `.${t.slideClass}, swiper-slide`)[0], t.loop && !p && (p = e[0]), p && p.classList.add(t.slideNextClass), d = bt(n, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d === 0 && (d = e[e.length - 1]), d && d.classList.add(t.slidePrevClass))), i.emitSlidesClasses();
  }
  const ae = (i, e) => {
    if (!i || i.destroyed || !i.params)
      return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, s = e.closest(t());
    if (s) {
      let a = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !a && i.isElement && (s.shadowRoot ? a = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (a = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), a && a.remove());
      })), a && a.remove();
    }
  }, me = (i, e) => {
    if (!i.slides[e])
      return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, he = (i) => {
    if (!i || i.destroyed || !i.params)
      return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
      return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), a = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const r = a, l = [r - e];
      l.push(...Array.from({
        length: e
      }).map((n, d) => r + s + d)), i.slides.forEach((n, d) => {
        l.includes(n.column) && me(i, d);
      });
      return;
    }
    const o = a + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let r = a - e; r <= o + e; r += 1) {
        const l = (r % t + t) % t;
        (l < a || l > o) && me(i, l);
      }
    else
      for (let r = Math.max(a - e, 0); r <= Math.min(o + e, t - 1); r += 1)
        r !== a && (r > o || r < a) && me(i, r);
  };
  function _t(i) {
    const {
      slidesGrid: e,
      params: t
    } = i, s = i.rtlTranslate ? i.translate : -i.translate;
    let a;
    for (let o = 0; o < e.length; o += 1)
      typeof e[o + 1] < "u" ? s >= e[o] && s < e[o + 1] - (e[o + 1] - e[o]) / 2 ? a = o : s >= e[o] && s < e[o + 1] && (a = o + 1) : s >= e[o] && (a = o);
    return t.normalizeSlideIndex && (a < 0 || typeof a > "u") && (a = 0), a;
  }
  function Ht(i) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: s,
      params: a,
      activeIndex: o,
      realIndex: r,
      snapIndex: l
    } = e;
    let n = i, d;
    const p = (h) => {
      let m = h - e.virtual.slidesBefore;
      return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m;
    };
    if (typeof n > "u" && (n = _t(e)), s.indexOf(t) >= 0)
      d = s.indexOf(t);
    else {
      const h = Math.min(a.slidesPerGroupSkip, n);
      d = h + Math.floor((n - h) / a.slidesPerGroup);
    }
    if (d >= s.length && (d = s.length - 1), n === o && !e.params.loop) {
      d !== l && (e.snapIndex = d, e.emit("snapIndexChange"));
      return;
    }
    if (n === o && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = p(n);
      return;
    }
    const f = e.grid && a.grid && a.grid.rows > 1;
    let g;
    if (e.virtual && a.virtual.enabled && a.loop)
      g = p(n);
    else if (f) {
      const h = e.slides.filter((b) => b.column === n)[0];
      let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(m) && (m = Math.max(e.slides.indexOf(h), 0)), g = Math.floor(m / a.grid.rows);
    } else if (e.slides[n]) {
      const h = e.slides[n].getAttribute("data-swiper-slide-index");
      h ? g = parseInt(h, 10) : g = n;
    } else
      g = n;
    Object.assign(e, {
      previousSnapIndex: l,
      snapIndex: d,
      previousRealIndex: r,
      realIndex: g,
      previousIndex: o,
      activeIndex: n
    }), e.initialized && he(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (r !== g && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Bt(i, e) {
    const t = this, s = t.params;
    let a = i.closest(`.${s.slideClass}, swiper-slide`);
    !a && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((l) => {
      !a && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (a = l);
    });
    let o = !1, r;
    if (a) {
      for (let l = 0; l < t.slides.length; l += 1)
        if (t.slides[l] === a) {
          o = !0, r = l;
          break;
        }
    }
    if (a && o)
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var jt = {
    updateSize: Mt,
    updateSlides: Tt,
    updateAutoHeight: Et,
    updateSlidesOffset: Pt,
    updateSlidesProgress: zt,
    updateProgress: Dt,
    updateSlidesClasses: It,
    updateActiveIndex: Ht,
    updateClickedSlide: Bt
  };
  function Ot(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this, {
      params: t,
      rtlTranslate: s,
      translate: a,
      wrapperEl: o
    } = e;
    if (t.virtualTranslate)
      return s ? -a : a;
    if (t.cssMode)
      return a;
    let r = gt(o, i);
    return r += e.cssOverflowAdjustment(), s && (r = -r), r || 0;
  }
  function Vt(i, e) {
    const t = this, {
      rtlTranslate: s,
      params: a,
      wrapperEl: o,
      progress: r
    } = t;
    let l = 0, n = 0;
    const d = 0;
    t.isHorizontal() ? l = s ? -i : i : n = i, a.roundLengths && (l = Math.floor(l), n = Math.floor(n)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : n, a.cssMode ? o[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -n : a.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : n -= t.cssOverflowAdjustment(), o.style.transform = `translate3d(${l}px, ${n}px, ${d}px)`);
    let p;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? p = 0 : p = (i - t.minTranslate()) / f, p !== r && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
  }
  function Gt() {
    return -this.snapGrid[0];
  }
  function Ft() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Nt(i, e, t, s, a) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
    const o = this, {
      params: r,
      wrapperEl: l
    } = o;
    if (o.animating && r.preventInteractionOnTransition)
      return !1;
    const n = o.minTranslate(), d = o.maxTranslate();
    let p;
    if (s && i > n ? p = n : s && i < d ? p = d : p = i, o.updateProgress(p), r.cssMode) {
      const f = o.isHorizontal();
      if (e === 0)
        l[f ? "scrollLeft" : "scrollTop"] = -p;
      else {
        if (!o.support.smoothScroll)
          return Se({
            swiper: o,
            targetPosition: -p,
            side: f ? "left" : "top"
          }), !0;
        l.scrollTo({
          [f ? "left" : "top"]: -p,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (o.setTransition(0), o.setTranslate(p), t && (o.emit("beforeTransitionStart", e, a), o.emit("transitionEnd"))) : (o.setTransition(e), o.setTranslate(p), t && (o.emit("beforeTransitionStart", e, a), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(g) {
      !o || o.destroyed || g.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, t && o.emit("transitionEnd"));
    }), o.wrapperEl.addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Yt = {
    getTranslate: Ot,
    setTranslate: Vt,
    minTranslate: Gt,
    maxTranslate: Ft,
    translateTo: Nt
  };
  function Wt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
  }
  function Te(i) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: s,
      step: a
    } = i;
    const {
      activeIndex: o,
      previousIndex: r
    } = e;
    let l = s;
    if (l || (o > r ? l = "next" : o < r ? l = "prev" : l = "reset"), e.emit(`transition${a}`), t && o !== r) {
      if (l === "reset") {
        e.emit(`slideResetTransition${a}`);
        return;
      }
      e.emit(`slideChangeTransition${a}`), l === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`);
    }
  }
  function Rt(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(), Te({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "Start"
    }));
  }
  function Zt(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    t.animating = !1, !s.cssMode && (t.setTransition(0), Te({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "End"
    }));
  }
  var qt = {
    setTransition: Wt,
    transitionStart: Rt,
    transitionEnd: Zt
  };
  function Ut(i, e, t, s, a) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const o = this;
    let r = i;
    r < 0 && (r = 0);
    const {
      params: l,
      snapGrid: n,
      slidesGrid: d,
      previousIndex: p,
      activeIndex: f,
      rtlTranslate: g,
      wrapperEl: h,
      enabled: m
    } = o;
    if (o.animating && l.preventInteractionOnTransition || !m && !s && !a || o.destroyed)
      return !1;
    const b = Math.min(o.params.slidesPerGroupSkip, r);
    let x = b + Math.floor((r - b) / o.params.slidesPerGroup);
    x >= n.length && (x = n.length - 1);
    const c = -n[x];
    if (l.normalizeSlideIndex)
      for (let w = 0; w < d.length; w += 1) {
        const v = -Math.floor(c * 100), C = Math.floor(d[w] * 100), M = Math.floor(d[w + 1] * 100);
        typeof d[w + 1] < "u" ? v >= C && v < M - (M - C) / 2 ? r = w : v >= C && v < M && (r = w + 1) : v >= C && (r = w);
      }
    if (o.initialized && r !== f && (!o.allowSlideNext && (g ? c > o.translate && c > o.minTranslate() : c < o.translate && c < o.minTranslate()) || !o.allowSlidePrev && c > o.translate && c > o.maxTranslate() && (f || 0) !== r))
      return !1;
    r !== (p || 0) && t && o.emit("beforeSlideChangeStart"), o.updateProgress(c);
    let u;
    if (r > f ? u = "next" : r < f ? u = "prev" : u = "reset", g && -c === o.translate || !g && c === o.translate)
      return o.updateActiveIndex(r), l.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), l.effect !== "slide" && o.setTranslate(c), u !== "reset" && (o.transitionStart(t, u), o.transitionEnd(t, u)), !1;
    if (l.cssMode) {
      const w = o.isHorizontal(), v = g ? c : -c;
      if (e === 0) {
        const C = o.virtual && o.params.virtual.enabled;
        C && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), C && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0 ? (o._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          h[w ? "scrollLeft" : "scrollTop"] = v;
        })) : h[w ? "scrollLeft" : "scrollTop"] = v, C && requestAnimationFrame(() => {
          o.wrapperEl.style.scrollSnapType = "", o._immediateVirtual = !1;
        });
      } else {
        if (!o.support.smoothScroll)
          return Se({
            swiper: o,
            targetPosition: v,
            side: w ? "left" : "top"
          }), !0;
        h.scrollTo({
          [w ? "left" : "top"]: v,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return o.setTransition(e), o.setTranslate(c), o.updateActiveIndex(r), o.updateSlidesClasses(), o.emit("beforeTransitionStart", e, s), o.transitionStart(t, u), e === 0 ? o.transitionEnd(t, u) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(v) {
      !o || o.destroyed || v.target === this && (o.wrapperEl.removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(t, u));
    }), o.wrapperEl.addEventListener("transitionend", o.onSlideToWrapperTransitionEnd)), !0;
  }
  function Xt(i, e, t, s) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const a = this;
    if (a.destroyed)
      return;
    const o = a.grid && a.params.grid && a.params.grid.rows > 1;
    let r = i;
    if (a.params.loop)
      if (a.virtual && a.params.virtual.enabled)
        r = r + a.virtual.slidesBefore;
      else {
        let l;
        if (o) {
          const g = r * a.params.grid.rows;
          l = a.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === g)[0].column;
        } else
          l = a.getSlideIndexByData(r);
        const n = o ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length, {
          centeredSlides: d
        } = a.params;
        let p = a.params.slidesPerView;
        p === "auto" ? p = a.slidesPerViewDynamic() : (p = Math.ceil(parseFloat(a.params.slidesPerView, 10)), d && p % 2 === 0 && (p = p + 1));
        let f = n - l < p;
        if (d && (f = f || l < Math.ceil(p / 2)), f) {
          const g = d ? l < a.activeIndex ? "prev" : "next" : l - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
          a.loopFix({
            direction: g,
            slideTo: !0,
            activeSlideIndex: g === "next" ? l + 1 : l - n + 1,
            slideRealIndex: g === "next" ? a.realIndex : void 0
          });
        }
        if (o) {
          const g = r * a.params.grid.rows;
          r = a.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === g)[0].column;
        } else
          r = a.getSlideIndexByData(r);
      }
    return requestAnimationFrame(() => {
      a.slideTo(r, e, t, s);
    }), a;
  }
  function $t(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      enabled: a,
      params: o,
      animating: r
    } = s;
    if (!a || s.destroyed)
      return s;
    let l = o.slidesPerGroup;
    o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const n = s.activeIndex < o.slidesPerGroupSkip ? 1 : l, d = s.virtual && o.virtual.enabled;
    if (o.loop) {
      if (r && !d && o.loopPreventsSliding)
        return !1;
      if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && o.cssMode)
        return requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + n, i, e, t);
        }), !0;
    }
    return o.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + n, i, e, t);
  }
  function Qt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      params: a,
      snapGrid: o,
      slidesGrid: r,
      rtlTranslate: l,
      enabled: n,
      animating: d
    } = s;
    if (!n || s.destroyed)
      return s;
    const p = s.virtual && a.virtual.enabled;
    if (a.loop) {
      if (d && !p && a.loopPreventsSliding)
        return !1;
      s.loopFix({
        direction: "prev"
      }), s._clientLeft = s.wrapperEl.clientLeft;
    }
    const f = l ? s.translate : -s.translate;
    function g(c) {
      return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c);
    }
    const h = g(f), m = o.map((c) => g(c));
    let b = o[m.indexOf(h) - 1];
    if (typeof b > "u" && a.cssMode) {
      let c;
      o.forEach((u, w) => {
        h >= u && (c = w);
      }), typeof c < "u" && (b = o[c > 0 ? c - 1 : c]);
    }
    let x = 0;
    if (typeof b < "u" && (x = r.indexOf(b), x < 0 && (x = s.activeIndex - 1), a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (x = x - s.slidesPerViewDynamic("previous", !0) + 1, x = Math.max(x, 0))), a.rewind && s.isBeginning) {
      const c = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
      return s.slideTo(c, i, e, t);
    } else if (a.loop && s.activeIndex === 0 && a.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(x, i, e, t);
      }), !0;
    return s.slideTo(x, i, e, t);
  }
  function Kt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
      return s.slideTo(s.activeIndex, i, e, t);
  }
  function Jt(i, e, t, s) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
    const a = this;
    if (a.destroyed)
      return;
    let o = a.activeIndex;
    const r = Math.min(a.params.slidesPerGroupSkip, o), l = r + Math.floor((o - r) / a.params.slidesPerGroup), n = a.rtlTranslate ? a.translate : -a.translate;
    if (n >= a.snapGrid[l]) {
      const d = a.snapGrid[l], p = a.snapGrid[l + 1];
      n - d > (p - d) * s && (o += a.params.slidesPerGroup);
    } else {
      const d = a.snapGrid[l - 1], p = a.snapGrid[l];
      n - d <= (p - d) * s && (o -= a.params.slidesPerGroup);
    }
    return o = Math.max(o, 0), o = Math.min(o, a.slidesGrid.length - 1), a.slideTo(o, i, e, t);
  }
  function ei() {
    const i = this;
    if (i.destroyed)
      return;
    const {
      params: e,
      slidesEl: t
    } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let a = i.clickedIndex, o;
    const r = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (i.animating)
        return;
      o = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? a < i.loopedSlides - s / 2 || a > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), a = i.getSlideIndex(W(t, `${r}[data-swiper-slide-index="${o}"]`)[0]), ce(() => {
        i.slideTo(a);
      })) : i.slideTo(a) : a > i.slides.length - s ? (i.loopFix(), a = i.getSlideIndex(W(t, `${r}[data-swiper-slide-index="${o}"]`)[0]), ce(() => {
        i.slideTo(a);
      })) : i.slideTo(a);
    } else
      i.slideTo(a);
  }
  var ti = {
    slideTo: Ut,
    slideToLoop: Xt,
    slideNext: $t,
    slidePrev: Qt,
    slideReset: Kt,
    slideToClosest: Jt,
    slideToClickedSlide: ei
  };
  function ii(i) {
    const e = this, {
      params: t,
      slidesEl: s
    } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
      return;
    const a = () => {
      W(s, `.${t.slideClass}, swiper-slide`).forEach((f, g) => {
        f.setAttribute("data-swiper-slide-index", g);
      });
    }, o = e.grid && t.grid && t.grid.rows > 1, r = t.slidesPerGroup * (o ? t.grid.rows : 1), l = e.slides.length % r !== 0, n = o && e.slides.length % t.grid.rows !== 0, d = (p) => {
      for (let f = 0; f < p; f += 1) {
        const g = e.isElement ? se("swiper-slide", [t.slideBlankClass]) : se("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(g);
      }
    };
    if (l) {
      if (t.loopAddBlankSlides) {
        const p = r - e.slides.length % r;
        d(p), e.recalcSlides(), e.updateSlides();
      } else
        ie("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      a();
    } else if (n) {
      if (t.loopAddBlankSlides) {
        const p = t.grid.rows - e.slides.length % t.grid.rows;
        d(p), e.recalcSlides(), e.updateSlides();
      } else
        ie("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      a();
    } else
      a();
    e.loopFix({
      slideRealIndex: i,
      direction: t.centeredSlides ? void 0 : "next"
    });
  }
  function si(i) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: a,
      activeSlideIndex: o,
      byController: r,
      byMousewheel: l
    } = i === void 0 ? {} : i;
    const n = this;
    if (!n.params.loop)
      return;
    n.emit("beforeLoopFix");
    const {
      slides: d,
      allowSlidePrev: p,
      allowSlideNext: f,
      slidesEl: g,
      params: h
    } = n, {
      centeredSlides: m
    } = h;
    if (n.allowSlidePrev = !0, n.allowSlideNext = !0, n.virtual && h.virtual.enabled) {
      t && (!h.centeredSlides && n.snapIndex === 0 ? n.slideTo(n.virtual.slides.length, 0, !1, !0) : h.centeredSlides && n.snapIndex < h.slidesPerView ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0) : n.snapIndex === n.snapGrid.length - 1 && n.slideTo(n.virtual.slidesBefore, 0, !1, !0)), n.allowSlidePrev = p, n.allowSlideNext = f, n.emit("loopFix");
      return;
    }
    let b = h.slidesPerView;
    b === "auto" ? b = n.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(h.slidesPerView, 10)), m && b % 2 === 0 && (b = b + 1));
    const x = h.slidesPerGroupAuto ? b : h.slidesPerGroup;
    let c = x;
    c % x !== 0 && (c += x - c % x), c += h.loopAdditionalSlides, n.loopedSlides = c;
    const u = n.grid && h.grid && h.grid.rows > 1;
    d.length < b + c ? ie("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : u && h.grid.fill === "row" && ie("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const w = [], v = [];
    let C = n.activeIndex;
    typeof o > "u" ? o = n.getSlideIndex(d.filter((k) => k.classList.contains(h.slideActiveClass))[0]) : C = o;
    const M = s === "next" || !s, j = s === "prev" || !s;
    let L = 0, I = 0;
    const y = u ? Math.ceil(d.length / h.grid.rows) : d.length, S = (u ? d[o].column : o) + (m && typeof a > "u" ? -b / 2 + 0.5 : 0);
    if (S < c) {
      L = Math.max(c - S, x);
      for (let k = 0; k < c - S; k += 1) {
        const E = k - Math.floor(k / y) * y;
        if (u) {
          const _ = y - E - 1;
          for (let R = d.length - 1; R >= 0; R -= 1)
            d[R].column === _ && w.push(R);
        } else
          w.push(y - E - 1);
      }
    } else if (S + b > y - c) {
      I = Math.max(S - (y - c * 2), x);
      for (let k = 0; k < I; k += 1) {
        const E = k - Math.floor(k / y) * y;
        u ? d.forEach((_, R) => {
          _.column === E && v.push(R);
        }) : v.push(E);
      }
    }
    if (n.__preventObserver__ = !0, requestAnimationFrame(() => {
      n.__preventObserver__ = !1;
    }), j && w.forEach((k) => {
      d[k].swiperLoopMoveDOM = !0, g.prepend(d[k]), d[k].swiperLoopMoveDOM = !1;
    }), M && v.forEach((k) => {
      d[k].swiperLoopMoveDOM = !0, g.append(d[k]), d[k].swiperLoopMoveDOM = !1;
    }), n.recalcSlides(), h.slidesPerView === "auto" ? n.updateSlides() : u && (w.length > 0 && j || v.length > 0 && M) && n.slides.forEach((k, E) => {
      n.grid.updateSlide(E, k, n.slides);
    }), h.watchSlidesProgress && n.updateSlidesOffset(), t) {
      if (w.length > 0 && j) {
        if (typeof e > "u") {
          const k = n.slidesGrid[C], _ = n.slidesGrid[C + L] - k;
          l ? n.setTranslate(n.translate - _) : (n.slideTo(C + Math.ceil(L), 0, !1, !0), a && (n.touchEventsData.startTranslate = n.touchEventsData.startTranslate - _, n.touchEventsData.currentTranslate = n.touchEventsData.currentTranslate - _));
        } else if (a) {
          const k = u ? w.length / h.grid.rows : w.length;
          n.slideTo(n.activeIndex + k, 0, !1, !0), n.touchEventsData.currentTranslate = n.translate;
        }
      } else if (v.length > 0 && M)
        if (typeof e > "u") {
          const k = n.slidesGrid[C], _ = n.slidesGrid[C - I] - k;
          l ? n.setTranslate(n.translate - _) : (n.slideTo(C - I, 0, !1, !0), a && (n.touchEventsData.startTranslate = n.touchEventsData.startTranslate - _, n.touchEventsData.currentTranslate = n.touchEventsData.currentTranslate - _));
        } else {
          const k = u ? v.length / h.grid.rows : v.length;
          n.slideTo(n.activeIndex - k, 0, !1, !0);
        }
    }
    if (n.allowSlidePrev = p, n.allowSlideNext = f, n.controller && n.controller.control && !r) {
      const k = {
        slideRealIndex: e,
        direction: s,
        setTranslate: a,
        activeSlideIndex: o,
        byController: !0
      };
      Array.isArray(n.controller.control) ? n.controller.control.forEach((E) => {
        !E.destroyed && E.params.loop && E.loopFix({
          ...k,
          slideTo: E.params.slidesPerView === h.slidesPerView ? t : !1
        });
      }) : n.controller.control instanceof n.constructor && n.controller.control.params.loop && n.controller.control.loopFix({
        ...k,
        slideTo: n.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
      });
    }
    n.emit("loopFix");
  }
  function oi() {
    const i = this, {
      params: e,
      slidesEl: t
    } = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
      return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach((a) => {
      const o = typeof a.swiperSlideIndex > "u" ? a.getAttribute("data-swiper-slide-index") * 1 : a.swiperSlideIndex;
      s[o] = a;
    }), i.slides.forEach((a) => {
      a.removeAttribute("data-swiper-slide-index");
    }), s.forEach((a) => {
      t.append(a);
    }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
  }
  var ai = {
    loopCreate: ii,
    loopFix: si,
    loopDestroy: oi
  };
  function ri(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function ni() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
      i.__preventObserver__ = !1;
    }));
  }
  var li = {
    setGrabCursor: ri,
    unsetGrabCursor: ni
  };
  function ci(i, e) {
    e === void 0 && (e = this);
    function t(s) {
      if (!s || s === Z() || s === V())
        return null;
      s.assignedSlot && (s = s.assignedSlot);
      const a = s.closest(i);
      return !a && !s.getRootNode ? null : a || t(s.getRootNode().host);
    }
    return t(e);
  }
  function Ee(i, e, t) {
    const s = V(), {
      params: a
    } = i, o = a.edgeSwipeDetection, r = a.edgeSwipeThreshold;
    return o && (t <= r || t >= s.innerWidth - r) ? o === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function di(i) {
    const e = this, t = Z();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const a = e.touchEventsData;
    if (s.type === "pointerdown") {
      if (a.pointerId !== null && a.pointerId !== s.pointerId)
        return;
      a.pointerId = s.pointerId;
    } else
      s.type === "touchstart" && s.targetTouches.length === 1 && (a.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
      Ee(e, s, s.targetTouches[0].pageX);
      return;
    }
    const {
      params: o,
      touches: r,
      enabled: l
    } = e;
    if (!l || !o.simulateTouch && s.pointerType === "mouse" || e.animating && o.preventInteractionOnTransition)
      return;
    !e.animating && o.cssMode && o.loop && e.loopFix();
    let n = s.target;
    if (o.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(n) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || a.isTouched && a.isMoved)
      return;
    const d = !!o.noSwipingClass && o.noSwipingClass !== "", p = s.composedPath ? s.composedPath() : s.path;
    d && s.target && s.target.shadowRoot && p && (n = p[0]);
    const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`, g = !!(s.target && s.target.shadowRoot);
    if (o.noSwiping && (g ? ci(f, n) : n.closest(f))) {
      e.allowClick = !0;
      return;
    }
    if (o.swipeHandler && !n.closest(o.swipeHandler))
      return;
    r.currentX = s.pageX, r.currentY = s.pageY;
    const h = r.currentX, m = r.currentY;
    if (!Ee(e, s, h))
      return;
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), r.startX = h, r.startY = m, a.touchStartTime = J(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
    let b = !0;
    n.matches(a.focusableElements) && (b = !1, n.nodeName === "SELECT" && (a.isTouched = !1)), t.activeElement && t.activeElement.matches(a.focusableElements) && t.activeElement !== n && t.activeElement.blur();
    const x = b && e.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || x) && !n.isContentEditable && s.preventDefault(), o.freeMode && o.freeMode.enabled && e.freeMode && e.animating && !o.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
  }
  function pi(i) {
    const e = Z(), t = this, s = t.touchEventsData, {
      params: a,
      touches: o,
      rtlTranslate: r,
      enabled: l
    } = t;
    if (!l || !a.simulateTouch && i.pointerType === "mouse")
      return;
    let n = i;
    if (n.originalEvent && (n = n.originalEvent), n.type === "pointermove" && (s.touchId !== null || n.pointerId !== s.pointerId))
      return;
    let d;
    if (n.type === "touchmove") {
      if (d = [...n.changedTouches].filter((M) => M.identifier === s.touchId)[0], !d || d.identifier !== s.touchId)
        return;
    } else
      d = n;
    if (!s.isTouched) {
      s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", n);
      return;
    }
    const p = d.pageX, f = d.pageY;
    if (n.preventedByNestedSwiper) {
      o.startX = p, o.startY = f;
      return;
    }
    if (!t.allowTouchMove) {
      n.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(o, {
        startX: p,
        startY: f,
        currentX: p,
        currentY: f
      }), s.touchStartTime = J());
      return;
    }
    if (a.touchReleaseOnEdges && !a.loop) {
      if (t.isVertical()) {
        if (f < o.startY && t.translate <= t.maxTranslate() || f > o.startY && t.translate >= t.minTranslate()) {
          s.isTouched = !1, s.isMoved = !1;
          return;
        }
      } else if (p < o.startX && t.translate <= t.maxTranslate() || p > o.startX && t.translate >= t.minTranslate())
        return;
    }
    if (e.activeElement && n.target === e.activeElement && n.target.matches(s.focusableElements)) {
      s.isMoved = !0, t.allowClick = !1;
      return;
    }
    s.allowTouchCallbacks && t.emit("touchMove", n), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = f;
    const g = o.currentX - o.startX, h = o.currentY - o.startY;
    if (t.params.threshold && Math.sqrt(g ** 2 + h ** 2) < t.params.threshold)
      return;
    if (typeof s.isScrolling > "u") {
      let M;
      t.isHorizontal() && o.currentY === o.startY || t.isVertical() && o.currentX === o.startX ? s.isScrolling = !1 : g * g + h * h >= 25 && (M = Math.atan2(Math.abs(h), Math.abs(g)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? M > a.touchAngle : 90 - M > a.touchAngle);
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", n), typeof s.startMoving > "u" && (o.currentX !== o.startX || o.currentY !== o.startY) && (s.startMoving = !0), s.isScrolling) {
      s.isTouched = !1;
      return;
    }
    if (!s.startMoving)
      return;
    t.allowClick = !1, !a.cssMode && n.cancelable && n.preventDefault(), a.touchMoveStopPropagation && !a.nested && n.stopPropagation();
    let m = t.isHorizontal() ? g : h, b = t.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    a.oneWayMovement && (m = Math.abs(m) * (r ? 1 : -1), b = Math.abs(b) * (r ? 1 : -1)), o.diff = m, m *= a.touchRatio, r && (m = -m, b = -b);
    const x = t.touchesDirection;
    t.swipeDirection = m > 0 ? "prev" : "next", t.touchesDirection = b > 0 ? "prev" : "next";
    const c = t.params.loop && !a.cssMode, u = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
      if (c && u && t.loopFix({
        direction: t.swipeDirection
      }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const M = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(M);
      }
      s.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", n);
    }
    let w;
    if ((/* @__PURE__ */ new Date()).getTime(), s.isMoved && s.allowThresholdMove && x !== t.touchesDirection && c && u && Math.abs(m) >= 1) {
      Object.assign(o, {
        startX: p,
        startY: f,
        currentX: p,
        currentY: f,
        startTranslate: s.currentTranslate
      }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
      return;
    }
    t.emit("sliderMove", n), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
    let v = !0, C = a.resistanceRatio;
    if (a.touchReleaseOnEdges && (C = 0), m > 0 ? (c && u && !w && s.allowThresholdMove && s.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > t.minTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** C))) : m < 0 && (c && u && !w && s.allowThresholdMove && s.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
    }), s.currentTranslate < t.maxTranslate() && (v = !1, a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** C))), v && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), a.threshold > 0)
      if (Math.abs(m) > a.threshold || s.allowThresholdMove) {
        if (!s.allowThresholdMove) {
          s.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, s.currentTranslate = s.startTranslate, o.diff = t.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
          return;
        }
      } else {
        s.currentTranslate = s.startTranslate;
        return;
      }
    !a.followFinger || a.cssMode || ((a.freeMode && a.freeMode.enabled && t.freeMode || a.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
  }
  function fi(i) {
    const e = this, t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let a;
    if (s.type === "touchend" || s.type === "touchcancel") {
      if (a = [...s.changedTouches].filter((C) => C.identifier === t.touchId)[0], !a || a.identifier !== t.touchId)
        return;
    } else {
      if (t.touchId !== null || s.pointerId !== t.pointerId)
        return;
      a = s;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    t.pointerId = null, t.touchId = null;
    const {
      params: r,
      touches: l,
      rtlTranslate: n,
      slidesGrid: d,
      enabled: p
    } = e;
    if (!p || !r.simulateTouch && s.pointerType === "mouse")
      return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && r.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = J(), g = f - t.touchStartTime;
    if (e.allowClick) {
      const C = s.path || s.composedPath && s.composedPath();
      e.updateClickedSlide(C && C[0] || s.target, C), e.emit("tap click", s), g < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
    }
    if (t.lastClickTime = J(), ce(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let h;
    if (r.followFinger ? h = n ? e.translate : -e.translate : h = -t.currentTranslate, r.cssMode)
      return;
    if (r.freeMode && r.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: h
      });
      return;
    }
    const m = h >= -e.maxTranslate() && !e.params.loop;
    let b = 0, x = e.slidesSizesGrid[0];
    for (let C = 0; C < d.length; C += C < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const M = C < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof d[C + M] < "u" ? (m || h >= d[C] && h < d[C + M]) && (b = C, x = d[C + M] - d[C]) : (m || h >= d[C]) && (b = C, x = d[d.length - 1] - d[d.length - 2]);
    }
    let c = null, u = null;
    r.rewind && (e.isBeginning ? u = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (c = 0));
    const w = (h - d[b]) / x, v = b < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (g > r.longSwipesMs) {
      if (!r.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (w >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? c : b + v) : e.slideTo(b)), e.swipeDirection === "prev" && (w > 1 - r.longSwipesRatio ? e.slideTo(b + v) : u !== null && w < 0 && Math.abs(w) > r.longSwipesRatio ? e.slideTo(u) : e.slideTo(b));
    } else {
      if (!r.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(b + v) : e.slideTo(b) : (e.swipeDirection === "next" && e.slideTo(c !== null ? c : b + v), e.swipeDirection === "prev" && e.slideTo(u !== null ? u : b));
    }
  }
  function Pe() {
    const i = this, {
      params: e,
      el: t
    } = i;
    if (t && t.offsetWidth === 0)
      return;
    e.breakpoints && i.setBreakpoint();
    const {
      allowSlideNext: s,
      allowSlidePrev: a,
      snapGrid: o
    } = i, r = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const l = r && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !r ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
      i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
    }, 500)), i.allowSlidePrev = a, i.allowSlideNext = s, i.params.watchOverflow && o !== i.snapGrid && i.checkOverflow();
  }
  function ui(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function mi() {
    const i = this, {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: s
    } = i;
    if (!s)
      return;
    i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
    let a;
    const o = i.maxTranslate() - i.minTranslate();
    o === 0 ? a = 0 : a = (i.translate - i.minTranslate()) / o, a !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
  }
  function hi(i) {
    const e = this;
    ae(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function gi() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const ze = (i, e) => {
    const t = Z(), {
      params: s,
      el: a,
      wrapperEl: o,
      device: r
    } = i, l = !!s.nested, n = e === "on" ? "addEventListener" : "removeEventListener", d = e;
    t[n]("touchstart", i.onDocumentTouchStart, {
      passive: !1,
      capture: l
    }), a[n]("touchstart", i.onTouchStart, {
      passive: !1
    }), a[n]("pointerdown", i.onTouchStart, {
      passive: !1
    }), t[n]("touchmove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[n]("pointermove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[n]("touchend", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointerup", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointercancel", i.onTouchEnd, {
      passive: !0
    }), t[n]("touchcancel", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointerout", i.onTouchEnd, {
      passive: !0
    }), t[n]("pointerleave", i.onTouchEnd, {
      passive: !0
    }), t[n]("contextmenu", i.onTouchEnd, {
      passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && a[n]("click", i.onClick, !0), s.cssMode && o[n]("scroll", i.onScroll), s.updateOnWindowResize ? i[d](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Pe, !0) : i[d]("observerUpdate", Pe, !0), a[n]("load", i.onLoad, {
      capture: !0
    });
  };
  function wi() {
    const i = this, {
      params: e
    } = i;
    i.onTouchStart = di.bind(i), i.onTouchMove = pi.bind(i), i.onTouchEnd = fi.bind(i), i.onDocumentTouchStart = gi.bind(i), e.cssMode && (i.onScroll = mi.bind(i)), i.onClick = ui.bind(i), i.onLoad = hi.bind(i), ze(i, "on");
  }
  function bi() {
    ze(this, "off");
  }
  var vi = {
    attachEvents: wi,
    detachEvents: bi
  };
  const De = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  function xi() {
    const i = this, {
      realIndex: e,
      initialized: t,
      params: s,
      el: a
    } = i, o = s.breakpoints;
    if (!o || o && Object.keys(o).length === 0)
      return;
    const r = i.getBreakpoint(o, i.params.breakpointsBase, i.el);
    if (!r || i.currentBreakpoint === r)
      return;
    const n = (r in o ? o[r] : void 0) || i.originalParams, d = De(i, s), p = De(i, n), f = s.enabled;
    d && !p ? (a.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !d && p && (a.classList.add(`${s.containerModifierClass}grid`), (n.grid.fill && n.grid.fill === "column" || !n.grid.fill && s.grid.fill === "column") && a.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((c) => {
      if (typeof n[c] > "u")
        return;
      const u = s[c] && s[c].enabled, w = n[c] && n[c].enabled;
      u && !w && i[c].disable(), !u && w && i[c].enable();
    });
    const g = n.direction && n.direction !== s.direction, h = s.loop && (n.slidesPerView !== s.slidesPerView || g), m = s.loop;
    g && t && i.changeDirection(), G(i.params, n);
    const b = i.params.enabled, x = i.params.loop;
    Object.assign(i, {
      allowTouchMove: i.params.allowTouchMove,
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev
    }), f && !b ? i.disable() : !f && b && i.enable(), i.currentBreakpoint = r, i.emit("_beforeBreakpoint", n), t && (h ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !m && x ? (i.loopCreate(e), i.updateSlides()) : m && !x && i.loopDestroy()), i.emit("breakpoint", n);
  }
  function yi(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t)
      return;
    let s = !1;
    const a = V(), o = e === "window" ? a.innerHeight : t.clientHeight, r = Object.keys(i).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const n = parseFloat(l.substr(1));
        return {
          value: o * n,
          point: l
        };
      }
      return {
        value: l,
        point: l
      };
    });
    r.sort((l, n) => parseInt(l.value, 10) - parseInt(n.value, 10));
    for (let l = 0; l < r.length; l += 1) {
      const {
        point: n,
        value: d
      } = r[l];
      e === "window" ? a.matchMedia(`(min-width: ${d}px)`).matches && (s = n) : d <= t.clientWidth && (s = n);
    }
    return s || "max";
  }
  var ki = {
    setBreakpoint: xi,
    getBreakpoint: yi
  };
  function Ci(i, e) {
    const t = [];
    return i.forEach((s) => {
      typeof s == "object" ? Object.keys(s).forEach((a) => {
        s[a] && t.push(e + a);
      }) : typeof s == "string" && t.push(e + s);
    }), t;
  }
  function Si() {
    const i = this, {
      classNames: e,
      params: t,
      rtl: s,
      el: a,
      device: o
    } = i, r = Ci(["initialized", t.direction, {
      "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
      autoheight: t.autoHeight
    }, {
      rtl: s
    }, {
      grid: t.grid && t.grid.rows > 1
    }, {
      "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
      android: o.android
    }, {
      ios: o.ios
    }, {
      "css-mode": t.cssMode
    }, {
      centered: t.cssMode && t.centeredSlides
    }, {
      "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...r), a.classList.add(...e), i.emitContainerClasses();
  }
  function Ai() {
    const i = this, {
      el: e,
      classNames: t
    } = i;
    e.classList.remove(...t), i.emitContainerClasses();
  }
  var Li = {
    addClasses: Si,
    removeClasses: Ai
  };
  function Mi() {
    const i = this, {
      isLocked: e,
      params: t
    } = i, {
      slidesOffsetBefore: s
    } = t;
    if (s) {
      const a = i.slides.length - 1, o = i.slidesGrid[a] + i.slidesSizesGrid[a] + s * 2;
      i.isLocked = i.size > o;
    } else
      i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
  }
  var Ti = {
    checkOverflow: Mi
  }, Ie = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: !1,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: !1,
    // Set wrapper width
    setWrapperSize: !1,
    // Virtual Translate
    virtualTranslate: !1,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: !0,
    // Round length
    roundLengths: !1,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    // Unique Navigation Elements
    uniqueNavElements: !0,
    // Resistance
    resistance: !0,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: !1,
    // Cursor
    grabCursor: !1,
    // Clicks
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    // loop
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    // rewind
    rewind: !1,
    // Swiping/no swiping
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: !0,
    // Internals
    _emitClasses: !1
  };
  function Ei(i, e) {
    return function(s) {
      s === void 0 && (s = {});
      const a = Object.keys(s)[0], o = s[a];
      if (typeof o != "object" || o === null) {
        G(e, s);
        return;
      }
      if (i[a] === !0 && (i[a] = {
        enabled: !0
      }), a === "navigation" && i[a] && i[a].enabled && !i[a].prevEl && !i[a].nextEl && (i[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && i[a] && i[a].enabled && !i[a].el && (i[a].auto = !0), !(a in i && "enabled" in o)) {
        G(e, s);
        return;
      }
      typeof i[a] == "object" && !("enabled" in i[a]) && (i[a].enabled = !0), i[a] || (i[a] = {
        enabled: !1
      }), G(e, s);
    };
  }
  const ge = {
    eventsEmitter: Lt,
    update: jt,
    translate: Yt,
    transition: qt,
    slide: ti,
    loop: ai,
    grabCursor: li,
    events: vi,
    breakpoints: ki,
    checkOverflow: Ti,
    classes: Li
  }, we = {};
  class F {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), o = 0; o < s; o++)
        a[o] = arguments[o];
      a.length === 1 && a[0].constructor && Object.prototype.toString.call(a[0]).slice(8, -1) === "Object" ? t = a[0] : [e, t] = a, t || (t = {}), t = G({}, t), e && !t.el && (t.el = e);
      const r = Z();
      if (t.el && typeof t.el == "string" && r.querySelectorAll(t.el).length > 1) {
        const p = [];
        return r.querySelectorAll(t.el).forEach((f) => {
          const g = G({}, t, {
            el: f
          });
          p.push(new F(g));
        }), p;
      }
      const l = this;
      l.__swiper__ = !0, l.support = Le(), l.device = Me({
        userAgent: t.userAgent
      }), l.browser = Ct(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const n = {};
      l.modules.forEach((p) => {
        p({
          params: t,
          swiper: l,
          extendParams: Ei(t, n),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const d = G({}, Ie, n);
      return l.params = G({}, d, we, t), l.originalParams = G({}, l.params), l.passedParams = G({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((p) => {
        l.on(p, l.params.on[p]);
      }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: !0,
        isEnd: !1,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: l.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: !0,
        // Touches
        allowTouchMove: l.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }), l.emit("_swiper"), l.params.init && l.init(), l;
    }
    getDirectionLabel(e) {
      return this.isHorizontal() ? e : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[e];
    }
    getSlideIndex(e) {
      const {
        slidesEl: t,
        params: s
      } = this, a = W(t, `.${s.slideClass}, swiper-slide`), o = oe(a[0]);
      return oe(e) - o;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: s
      } = e;
      e.slides = W(t, `.${s.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(), r = (s.maxTranslate() - a) * e + a;
      s.translateTo(r, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el)
        return;
      const t = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(t.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el)
        return;
      const t = [];
      e.slides.forEach((s) => {
        const a = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: a
        }), e.emit("_slideClass", s, a);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const s = this, {
        params: a,
        slides: o,
        slidesGrid: r,
        slidesSizesGrid: l,
        size: n,
        activeIndex: d
      } = s;
      let p = 1;
      if (typeof a.slidesPerView == "number")
        return a.slidesPerView;
      if (a.centeredSlides) {
        let f = o[d] ? Math.ceil(o[d].swiperSlideSize) : 0, g;
        for (let h = d + 1; h < o.length; h += 1)
          o[h] && !g && (f += Math.ceil(o[h].swiperSlideSize), p += 1, f > n && (g = !0));
        for (let h = d - 1; h >= 0; h -= 1)
          o[h] && !g && (f += o[h].swiperSlideSize, p += 1, f > n && (g = !0));
      } else if (e === "current")
        for (let f = d + 1; f < o.length; f += 1)
          (t ? r[f] + l[f] - r[d] < n : r[f] - r[d] < n) && (p += 1);
      else
        for (let f = d - 1; f >= 0; f -= 1)
          r[d] - r[f] < n && (p += 1);
      return p;
    }
    update() {
      const e = this;
      if (!e || e.destroyed)
        return;
      const {
        snapGrid: t,
        params: s
      } = e;
      s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
        r.complete && ae(e, r);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function a() {
        const r = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(r, e.maxTranslate()), e.minTranslate());
        e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let o;
      if (s.freeMode && s.freeMode.enabled && !s.cssMode)
        a(), s.autoHeight && e.updateAutoHeight();
      else {
        if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const r = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          o = e.slideTo(r.length - 1, 0, !1, !0);
        } else
          o = e.slideTo(e.activeIndex, 0, !1, !0);
        o || a();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const s = this, a = s.params.direction;
      return e || (e = a === "horizontal" ? "vertical" : "horizontal"), e === a || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((o) => {
        e === "vertical" ? o.style.width = "" : o.style.height = "";
      }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted)
        return !0;
      let s = e || t.params.el;
      if (typeof s == "string" && (s = document.querySelector(s)), !s)
        return !1;
      s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
      const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(a()) : W(s, a())[0];
      return !r && t.params.createElements && (r = se("div", t.params.wrapperClass), s.append(r), W(s, `.${t.params.slideClass}`).forEach((l) => {
        r.append(l);
      })), Object.assign(t, {
        el: s,
        wrapperEl: r,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        // RTL
        rtl: s.dir.toLowerCase() === "rtl" || q(s, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || q(s, "direction") === "rtl"),
        wrongRTL: q(r, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1)
        return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
      const a = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), a.forEach((o) => {
        o.complete ? ae(t, o) : o.addEventListener("load", (r) => {
          ae(t, r.target);
        });
      }), he(t), t.initialized = !0, he(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const s = this, {
        params: a,
        el: o,
        wrapperEl: r,
        slides: l
      } = s;
      return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), o.removeAttribute("style"), r.removeAttribute("style"), l && l.length && l.forEach((n) => {
        n.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), n.removeAttribute("style"), n.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((n) => {
        s.off(n);
      }), e !== !1 && (s.el.swiper = null, mt(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      G(we, e);
    }
    static get extendedDefaults() {
      return we;
    }
    static get defaults() {
      return Ie;
    }
    static installModule(e) {
      F.prototype.__modules__ || (F.prototype.__modules__ = []);
      const t = F.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => F.installModule(t)), F) : (F.installModule(e), F);
    }
  }
  Object.keys(ge).forEach((i) => {
    Object.keys(ge[i]).forEach((e) => {
      F.prototype[e] = ge[i][e];
    });
  }), F.use([St, At]);
  function _e(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach((a) => {
      if (!t[a] && t.auto === !0) {
        let o = W(i.el, `.${s[a]}`)[0];
        o || (o = se("div", s[a]), o.className = s[a], i.el.append(o)), t[a] = o, e[a] = o;
      }
    }), t;
  }
  function He(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: a
    } = i;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), e.navigation = {
      nextEl: null,
      prevEl: null
    };
    function o(m) {
      let b;
      return m && typeof m == "string" && e.isElement && (b = e.el.querySelector(m), b) ? b : (m && (typeof m == "string" && (b = [...document.querySelectorAll(m)]), e.params.uniqueNavElements && typeof m == "string" && b.length > 1 && e.el.querySelectorAll(m).length === 1 && (b = e.el.querySelector(m))), m && !b ? m : b);
    }
    function r(m, b) {
      const x = e.params.navigation;
      m = H(m), m.forEach((c) => {
        c && (c.classList[b ? "add" : "remove"](...x.disabledClass.split(" ")), c.tagName === "BUTTON" && (c.disabled = b), e.params.watchOverflow && e.enabled && c.classList[e.isLocked ? "add" : "remove"](x.lockClass));
      });
    }
    function l() {
      const {
        nextEl: m,
        prevEl: b
      } = e.navigation;
      if (e.params.loop) {
        r(b, !1), r(m, !1);
        return;
      }
      r(b, e.isBeginning && !e.params.rewind), r(m, e.isEnd && !e.params.rewind);
    }
    function n(m) {
      m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), a("navigationPrev"));
    }
    function d(m) {
      m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a("navigationNext"));
    }
    function p() {
      const m = e.params.navigation;
      if (e.params.navigation = _e(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(m.nextEl || m.prevEl))
        return;
      let b = o(m.nextEl), x = o(m.prevEl);
      Object.assign(e.navigation, {
        nextEl: b,
        prevEl: x
      }), b = H(b), x = H(x);
      const c = (u, w) => {
        u && u.addEventListener("click", w === "next" ? d : n), !e.enabled && u && u.classList.add(...m.lockClass.split(" "));
      };
      b.forEach((u) => c(u, "next")), x.forEach((u) => c(u, "prev"));
    }
    function f() {
      let {
        nextEl: m,
        prevEl: b
      } = e.navigation;
      m = H(m), b = H(b);
      const x = (c, u) => {
        c.removeEventListener("click", u === "next" ? d : n), c.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      m.forEach((c) => x(c, "next")), b.forEach((c) => x(c, "prev"));
    }
    s("init", () => {
      e.params.navigation.enabled === !1 ? h() : (p(), l());
    }), s("toEdge fromEdge lock unlock", () => {
      l();
    }), s("destroy", () => {
      f();
    }), s("enable disable", () => {
      let {
        nextEl: m,
        prevEl: b
      } = e.navigation;
      if (m = H(m), b = H(b), e.enabled) {
        l();
        return;
      }
      [...m, ...b].filter((x) => !!x).forEach((x) => x.classList.add(e.params.navigation.lockClass));
    }), s("click", (m, b) => {
      let {
        nextEl: x,
        prevEl: c
      } = e.navigation;
      x = H(x), c = H(c);
      const u = b.target;
      if (e.params.navigation.hideOnClick && !c.includes(u) && !x.includes(u)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === u || e.pagination.el.contains(u)))
          return;
        let w;
        x.length ? w = x[0].classList.contains(e.params.navigation.hiddenClass) : c.length && (w = c[0].classList.contains(e.params.navigation.hiddenClass)), a(w === !0 ? "navigationShow" : "navigationHide"), [...x, ...c].filter((v) => !!v).forEach((v) => v.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const g = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), p(), l();
    }, h = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f();
    };
    Object.assign(e.navigation, {
      enable: g,
      disable: h,
      update: l,
      init: p,
      destroy: f
    });
  }
  function X(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function Be(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: a
    } = i;
    const o = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (c) => c,
        formatFractionTotal: (c) => c,
        bulletClass: `${o}-bullet`,
        bulletActiveClass: `${o}-bullet-active`,
        modifierClass: `${o}-`,
        currentClass: `${o}-current`,
        totalClass: `${o}-total`,
        hiddenClass: `${o}-hidden`,
        progressbarFillClass: `${o}-progressbar-fill`,
        progressbarOppositeClass: `${o}-progressbar-opposite`,
        clickableClass: `${o}-clickable`,
        lockClass: `${o}-lock`,
        horizontalClass: `${o}-horizontal`,
        verticalClass: `${o}-vertical`,
        paginationDisabledClass: `${o}-disabled`
      }
    }), e.pagination = {
      el: null,
      bullets: []
    };
    let r, l = 0;
    function n() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function d(c, u) {
      const {
        bulletActiveClass: w
      } = e.params.pagination;
      c && (c = c[`${u === "prev" ? "previous" : "next"}ElementSibling`], c && (c.classList.add(`${w}-${u}`), c = c[`${u === "prev" ? "previous" : "next"}ElementSibling`], c && c.classList.add(`${w}-${u}-${u}`)));
    }
    function p(c) {
      const u = c.target.closest(X(e.params.pagination.bulletClass));
      if (!u)
        return;
      c.preventDefault();
      const w = oe(u) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === w)
          return;
        e.slideToLoop(w);
      } else
        e.slideTo(w);
    }
    function f() {
      const c = e.rtl, u = e.params.pagination;
      if (n())
        return;
      let w = e.pagination.el;
      w = H(w);
      let v, C;
      const M = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, j = e.params.loop ? Math.ceil(M / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (C = e.previousRealIndex || 0, v = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (v = e.snapIndex, C = e.previousSnapIndex) : (C = e.previousIndex || 0, v = e.activeIndex || 0), u.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const L = e.pagination.bullets;
        let I, y, A;
        if (u.dynamicBullets && (r = de(L[0], e.isHorizontal() ? "width" : "height", !0), w.forEach((S) => {
          S.style[e.isHorizontal() ? "width" : "height"] = `${r * (u.dynamicMainBullets + 4)}px`;
        }), u.dynamicMainBullets > 1 && C !== void 0 && (l += v - (C || 0), l > u.dynamicMainBullets - 1 ? l = u.dynamicMainBullets - 1 : l < 0 && (l = 0)), I = Math.max(v - l, 0), y = I + (Math.min(L.length, u.dynamicMainBullets) - 1), A = (y + I) / 2), L.forEach((S) => {
          const k = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((E) => `${u.bulletActiveClass}${E}`)].map((E) => typeof E == "string" && E.includes(" ") ? E.split(" ") : E).flat();
          S.classList.remove(...k);
        }), w.length > 1)
          L.forEach((S) => {
            const k = oe(S);
            k === v ? S.classList.add(...u.bulletActiveClass.split(" ")) : e.isElement && S.setAttribute("part", "bullet"), u.dynamicBullets && (k >= I && k <= y && S.classList.add(...`${u.bulletActiveClass}-main`.split(" ")), k === I && d(S, "prev"), k === y && d(S, "next"));
          });
        else {
          const S = L[v];
          if (S && S.classList.add(...u.bulletActiveClass.split(" ")), e.isElement && L.forEach((k, E) => {
            k.setAttribute("part", E === v ? "bullet-active" : "bullet");
          }), u.dynamicBullets) {
            const k = L[I], E = L[y];
            for (let _ = I; _ <= y; _ += 1)
              L[_] && L[_].classList.add(...`${u.bulletActiveClass}-main`.split(" "));
            d(k, "prev"), d(E, "next");
          }
        }
        if (u.dynamicBullets) {
          const S = Math.min(L.length, u.dynamicMainBullets + 4), k = (r * S - r) / 2 - A * r, E = c ? "right" : "left";
          L.forEach((_) => {
            _.style[e.isHorizontal() ? E : "top"] = `${k}px`;
          });
        }
      }
      w.forEach((L, I) => {
        if (u.type === "fraction" && (L.querySelectorAll(X(u.currentClass)).forEach((y) => {
          y.textContent = u.formatFractionCurrent(v + 1);
        }), L.querySelectorAll(X(u.totalClass)).forEach((y) => {
          y.textContent = u.formatFractionTotal(j);
        })), u.type === "progressbar") {
          let y;
          u.progressbarOpposite ? y = e.isHorizontal() ? "vertical" : "horizontal" : y = e.isHorizontal() ? "horizontal" : "vertical";
          const A = (v + 1) / j;
          let S = 1, k = 1;
          y === "horizontal" ? S = A : k = A, L.querySelectorAll(X(u.progressbarFillClass)).forEach((E) => {
            E.style.transform = `translate3d(0,0,0) scaleX(${S}) scaleY(${k})`, E.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        u.type === "custom" && u.renderCustom ? (L.innerHTML = u.renderCustom(e, v + 1, j), I === 0 && a("paginationRender", L)) : (I === 0 && a("paginationRender", L), a("paginationUpdate", L)), e.params.watchOverflow && e.enabled && L.classList[e.isLocked ? "add" : "remove"](u.lockClass);
      });
    }
    function g() {
      const c = e.params.pagination;
      if (n())
        return;
      const u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let w = e.pagination.el;
      w = H(w);
      let v = "";
      if (c.type === "bullets") {
        let C = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && C > u && (C = u);
        for (let M = 0; M < C; M += 1)
          c.renderBullet ? v += c.renderBullet.call(e, M, c.bulletClass) : v += `<${c.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${c.bulletClass}"></${c.bulletElement}>`;
      }
      c.type === "fraction" && (c.renderFraction ? v = c.renderFraction.call(e, c.currentClass, c.totalClass) : v = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`), c.type === "progressbar" && (c.renderProgressbar ? v = c.renderProgressbar.call(e, c.progressbarFillClass) : v = `<span class="${c.progressbarFillClass}"></span>`), e.pagination.bullets = [], w.forEach((C) => {
        c.type !== "custom" && (C.innerHTML = v || ""), c.type === "bullets" && e.pagination.bullets.push(...C.querySelectorAll(X(c.bulletClass)));
      }), c.type !== "custom" && a("paginationRender", w[0]);
    }
    function h() {
      e.params.pagination = _e(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const c = e.params.pagination;
      if (!c.el)
        return;
      let u;
      typeof c.el == "string" && e.isElement && (u = e.el.querySelector(c.el)), !u && typeof c.el == "string" && (u = [...document.querySelectorAll(c.el)]), u || (u = c.el), !(!u || u.length === 0) && (e.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(u) && u.length > 1 && (u = [...e.el.querySelectorAll(c.el)], u.length > 1 && (u = u.filter((w) => Ae(w, ".swiper")[0] === e.el)[0])), Array.isArray(u) && u.length === 1 && (u = u[0]), Object.assign(e.pagination, {
        el: u
      }), u = H(u), u.forEach((w) => {
        c.type === "bullets" && c.clickable && w.classList.add(...(c.clickableClass || "").split(" ")), w.classList.add(c.modifierClass + c.type), w.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.type === "bullets" && c.dynamicBullets && (w.classList.add(`${c.modifierClass}${c.type}-dynamic`), l = 0, c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)), c.type === "progressbar" && c.progressbarOpposite && w.classList.add(c.progressbarOppositeClass), c.clickable && w.addEventListener("click", p), e.enabled || w.classList.add(c.lockClass);
      }));
    }
    function m() {
      const c = e.params.pagination;
      if (n())
        return;
      let u = e.pagination.el;
      u && (u = H(u), u.forEach((w) => {
        w.classList.remove(c.hiddenClass), w.classList.remove(c.modifierClass + c.type), w.classList.remove(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.clickable && (w.classList.remove(...(c.clickableClass || "").split(" ")), w.removeEventListener("click", p));
      })), e.pagination.bullets && e.pagination.bullets.forEach((w) => w.classList.remove(...c.bulletActiveClass.split(" ")));
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el)
        return;
      const c = e.params.pagination;
      let {
        el: u
      } = e.pagination;
      u = H(u), u.forEach((w) => {
        w.classList.remove(c.horizontalClass, c.verticalClass), w.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass);
      });
    }), s("init", () => {
      e.params.pagination.enabled === !1 ? x() : (h(), g(), f());
    }), s("activeIndexChange", () => {
      typeof e.snapIndex > "u" && f();
    }), s("snapIndexChange", () => {
      f();
    }), s("snapGridLengthChange", () => {
      g(), f();
    }), s("destroy", () => {
      m();
    }), s("enable disable", () => {
      let {
        el: c
      } = e.pagination;
      c && (c = H(c), c.forEach((u) => u.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), s("lock unlock", () => {
      f();
    }), s("click", (c, u) => {
      const w = u.target, v = H(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && v && v.length > 0 && !w.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && w === e.navigation.nextEl || e.navigation.prevEl && w === e.navigation.prevEl))
          return;
        const C = v[0].classList.contains(e.params.pagination.hiddenClass);
        a(C === !0 ? "paginationShow" : "paginationHide"), v.forEach((M) => M.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const b = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = e.pagination;
      c && (c = H(c), c.forEach((u) => u.classList.remove(e.params.pagination.paginationDisabledClass))), h(), g(), f();
    }, x = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = e.pagination;
      c && (c = H(c), c.forEach((u) => u.classList.add(e.params.pagination.paginationDisabledClass))), m();
    };
    Object.assign(e.pagination, {
      enable: b,
      disable: x,
      render: g,
      update: f,
      init: h,
      destroy: m
    });
  }
  function Pi(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: a,
      params: o
    } = i;
    e.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    let r, l, n = o && o.autoplay ? o.autoplay.delay : 3e3, d = o && o.autoplay ? o.autoplay.delay : 3e3, p, f = (/* @__PURE__ */ new Date()).getTime(), g, h, m, b, x, c, u;
    function w(z) {
      !e || e.destroyed || !e.wrapperEl || z.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", w), !u && y());
    }
    const v = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      e.autoplay.paused ? g = !0 : g && (d = p, g = !1);
      const z = e.autoplay.paused ? p : f + d - (/* @__PURE__ */ new Date()).getTime();
      e.autoplay.timeLeft = z, a("autoplayTimeLeft", z, z / n), l = requestAnimationFrame(() => {
        v();
      });
    }, C = () => {
      let z;
      return e.virtual && e.params.virtual.enabled ? z = e.slides.filter((B) => B.classList.contains("swiper-slide-active"))[0] : z = e.slides[e.activeIndex], z ? parseInt(z.getAttribute("data-swiper-autoplay"), 10) : void 0;
    }, M = (z) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      cancelAnimationFrame(l), v();
      let Y = typeof z > "u" ? e.params.autoplay.delay : z;
      n = e.params.autoplay.delay, d = e.params.autoplay.delay;
      const B = C();
      !Number.isNaN(B) && B > 0 && typeof z > "u" && (Y = B, n = B, d = B), p = Y;
      const U = e.params.speed, ne = () => {
        !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(U, !0, !0), a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, U, !0, !0), a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(U, !0, !0), a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, U, !0, !0), a("autoplay")), e.params.cssMode && (f = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          M();
        })));
      };
      return Y > 0 ? (clearTimeout(r), r = setTimeout(() => {
        ne();
      }, Y)) : requestAnimationFrame(() => {
        ne();
      }), Y;
    }, j = () => {
      f = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, M(), a("autoplayStart");
    }, L = () => {
      e.autoplay.running = !1, clearTimeout(r), cancelAnimationFrame(l), a("autoplayStop");
    }, I = (z, Y) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      clearTimeout(r), z || (c = !0);
      const B = () => {
        a("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", w) : y();
      };
      if (e.autoplay.paused = !0, Y) {
        x && (p = e.params.autoplay.delay), x = !1, B();
        return;
      }
      p = (p || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - f), !(e.isEnd && p < 0 && !e.params.loop) && (p < 0 && (p = 0), B());
    }, y = () => {
      e.isEnd && p < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = (/* @__PURE__ */ new Date()).getTime(), c ? (c = !1, M(p)) : M(), e.autoplay.paused = !1, a("autoplayResume"));
    }, A = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      const z = Z();
      z.visibilityState === "hidden" && (c = !0, I(!0)), z.visibilityState === "visible" && y();
    }, S = (z) => {
      z.pointerType === "mouse" && (c = !0, u = !0, !(e.animating || e.autoplay.paused) && I(!0));
    }, k = (z) => {
      z.pointerType === "mouse" && (u = !1, e.autoplay.paused && y());
    }, E = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", S), e.el.addEventListener("pointerleave", k));
    }, _ = () => {
      e.el.removeEventListener("pointerenter", S), e.el.removeEventListener("pointerleave", k);
    }, R = () => {
      Z().addEventListener("visibilitychange", A);
    }, ve = () => {
      Z().removeEventListener("visibilitychange", A);
    };
    s("init", () => {
      e.params.autoplay.enabled && (E(), R(), j());
    }), s("destroy", () => {
      _(), ve(), e.autoplay.running && L();
    }), s("_freeModeStaticRelease", () => {
      (m || c) && y();
    }), s("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? L() : I(!0, !0);
    }), s("beforeTransitionStart", (z, Y, B) => {
      e.destroyed || !e.autoplay.running || (B || !e.params.autoplay.disableOnInteraction ? I(!0, !0) : L());
    }), s("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          L();
          return;
        }
        h = !0, m = !1, c = !1, b = setTimeout(() => {
          c = !0, m = !0, I(!0);
        }, 200);
      }
    }), s("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !h)) {
        if (clearTimeout(b), clearTimeout(r), e.params.autoplay.disableOnInteraction) {
          m = !1, h = !1;
          return;
        }
        m && e.params.cssMode && y(), m = !1, h = !1;
      }
    }), s("slideChange", () => {
      e.destroyed || !e.autoplay.running || (x = !0);
    }), Object.assign(e.autoplay, {
      start: j,
      stop: L,
      pause: I,
      resume: y
    });
  }
  const zi = '@font-face{font-family:swiper-icons;src:url(data:application/font-woff;charset=utf-8;base64,\\ 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);font-weight:400;font-style:normal}:root{--swiper-theme-color: #007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;transition-property:transform;transition-timing-function:ease;transition-timing-function:initial;transition-timing-function:var(--swiper-wrapper-transition-timing-function, initial);box-sizing:content-box}.swiper-android .swiper-slide,.swiper-ios .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight .swiper-slide{height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden .swiper-slide{transform:translateZ(0);backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-slide,.swiper-3d .swiper-cube-shadow{transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper:before{content:"";flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered>.swiper-wrapper>.swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper>.swiper-slide:first-child{margin-left:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper:before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper>.swiper-slide:first-child{margin-top:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper:before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d .swiper-slide-shadow-bottom{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:#00000026}.swiper-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to left,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to right,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to top,#00000080,#0000)}.swiper-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:-moz-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));background-image:linear-gradient(to bottom,#00000080,#0000)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid #007aff;border:4px solid var(--swiper-preloader-color, var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color: #fff}.swiper-lazy-preloader-black{--swiper-preloader-color: #000}@keyframes swiper-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}', Di = ':root{--swiper-navigation-size: 44px}.swiper-button-prev,.swiper-button-next{position:absolute;top:50%;top:var(--swiper-navigation-top-offset, 50%);width:-webkit-calc(44px / 44 * 27);width:-moz-calc(44px / 44 * 27);width:27px;width:-webkit-calc(var(--swiper-navigation-size) / 44 * 27);width:-moz-calc(var(--swiper-navigation-size) / 44 * 27);width:calc(var(--swiper-navigation-size) / 44 * 27);height:44px;height:var(--swiper-navigation-size);margin-top:-webkit-calc(0px - (44px / 2));margin-top:-moz-calc(0px - (44px / 2));margin-top:-22px;margin-top:-webkit-calc(0px - (var(--swiper-navigation-size) / 2));margin-top:-moz-calc(0px - (var(--swiper-navigation-size) / 2));margin-top:calc(0px - (var(--swiper-navigation-size) / 2));z-index:10;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color, var(--swiper-theme-color))}.swiper-button-prev.swiper-button-disabled,.swiper-button-next.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev.swiper-button-hidden,.swiper-button-next.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-prev,.swiper-navigation-disabled .swiper-button-next{display:none!important}.swiper-button-prev svg,.swiper-button-next svg{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-prev svg,.swiper-rtl .swiper-button-next svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:10px;left:var(--swiper-navigation-sides-offset, 10px);right:auto}.swiper-button-lock{display:none}.swiper-button-prev:after,.swiper-button-next:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-feature-settings:;font-variant:normal;font-variant:initial;line-height:1}.swiper-button-prev:after,.swiper-rtl .swiper-button-next:after{content:"prev"}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:10px;right:var(--swiper-navigation-sides-offset, 10px);left:auto}.swiper-button-next:after,.swiper-rtl .swiper-button-prev:after{content:"next"}', Ii = ".os-trusted{--swiper-pagination-bullet-width: 35px;--swiper-pagination-bullet-height: 2px;--swiper-pagination-color: #2969cc}.os-trusted .swiper-container{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;justify-content:center;height:180px}@media (max-width: 768px){.os-trusted .swiper-container{height:130px}}.os-trusted .swiper-container .swiper-slides-container{position:relative;width:100%}.os-trusted .swiper-container .swiper-slides-container .os-swiper{overflow:hidden;position:relative;width:90%;max-width:1100px}.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper{gap:20px}@media (max-width: 768px){.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper{gap:16px}}.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper .swiper-slide{width:350px;height:140px}@media (max-width: 768px){.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper .swiper-slide{width:225px;height:90px}}.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper .swiper-slide a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:350px;height:140px;padding:20px 0;border-radius:10px;border:1px solid #e3e3e3;background:#f7f7f7;-webkit-text-decoration:none;text-decoration:none;font-family:Raleway,sans-serif;font-size:32px;font-style:normal;font-weight:700;line-height:40px;color:#12233d}@media (max-width: 768px){.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper .swiper-slide a{width:225px;height:90px}}.os-trusted .swiper-container .swiper-slides-container .os-swiper .swiper-wrapper .swiper-slide a img{height:40px;mix-blend-mode:multiply}.os-trusted .swiper-container .swiper-slides-container .swiper-button-prev,.os-trusted .swiper-container .swiper-slides-container .swiper-button-next{width:48px;height:48px}@media (max-width: 768px){.os-trusted .swiper-container .swiper-slides-container .swiper-button-prev,.os-trusted .swiper-container .swiper-slides-container .swiper-button-next{display:none}}.os-trusted .swiper-container .swiper-pagination-container{width:90%;overflow:hidden;position:relative;height:30px}.os-trusted .swiper-container .swiper-pagination-container .swiper-pagination{margin-top:50px}.os-trusted .swiper-container .swiper-pagination-container .swiper-pagination .swiper-pagination-bullet{height:2px;width:82px}.os-trusted .action{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;margin-top:50px}@media (max-width: 768px){.os-trusted .action{margin-top:30px}}.os-trusted .action a{display:block}", _i = [
    {
      name: "Optimus Planto",
      link: "/oplanto",
      logo: "https://keenethics.com/wp-content/uploads/2023/10/Oplanto.svg"
    },
    {
      name: "Brainable",
      link: "/brainable",
      logo: "https://keenethics.com/wp-content/uploads/2022/01/Brainable_logo.svg"
    },
    {
      name: "Epson",
      link: null,
      logo: "data:image/png;base64,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"
    },
    {
      name: "ADS",
      link: "/ads",
      logo: "https://keenethics.com/wp-content/uploads/2024/02/Project-nameEdstrument-Type-of-logoColor.svg"
    },
    {
      name: "Community Connect",
      link: "/community-connect",
      logo: "https://keenethics.com/wp-content/uploads/2023/10/Community-Connect.svg"
    },
    {
      name: "Sportresurs Website",
      link: "/sportresurs-website",
      logo: "https://keenethics.com/wp-content/uploads/2023/08/Vector.svg"
    },
    {
      name: "CryptoMarketCap",
      link: "/cryptomarketcap",
      logo: "https://keenethics.com/wp-content/uploads/2023/07/Logo.png"
    },
    {
      name: "Paystub",
      link: "/project-paystub",
      logo: "https://keenethics.com/wp-content/uploads/2023/04/Paysub_logo.svg"
    },
    {
      name: "GetPart",
      link: "/project-getpart",
      logo: "https://keenethics.com/wp-content/uploads/2023/03/getpart-original-logo-colorful-1.png"
    },
    {
      name: "Cordian",
      link: "/project-cordian",
      logo: null
    },
    {
      name: "Bookmaker",
      link: "/bookmaker",
      logo: "https://keenethics.com/wp-content/uploads/2021/12/Group-34-1.png"
    },
    {
      name: "Ruuster",
      link: "/ruuster",
      logo: "https://keenethics.com/wp-content/uploads/2021/11/logo-ruuster-blue-e1637066738964.png"
    },
    {
      name: "WorldLabs - Online Business Incubator",
      link: "/project-worldlabs",
      logo: "https://keenethics.com/wp-content/uploads/2022/04/logo-color-2-1-1.svg"
    },
    {
      name: "uMore",
      link: "/umore",
      logo: "https://cdn.healthtechalpha.com/static/startup_data_images/103641.png"
    },
    {
      name: "Tetrami",
      link: "/project-tetrami",
      logo: null
    },
    {
      name: "Pace Revenue",
      link: "/project-paceup",
      logo: null
    },
    {
      name: "My Grass Growth",
      link: "/project-my-grass-growth",
      logo: null
    },
    {
      name: "BankerAdvisor",
      link: "/project-banker-advisor",
      logo: "data:image/png;base64,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"
    },
    {
      name: "Pree",
      link: "/project-pree",
      logo: null
    },
    {
      name: "Attendance",
      link: "/attendance",
      logo: null
    },
    {
      name: "SelfLeaders",
      link: "/project-self-leaders",
      logo: "https://keenethics.com/wp-content/uploads/2021/01/image-1.png"
    },
    {
      name: "OneRemission",
      link: "/project-one-remission",
      logo: "https://keenethics.com/wp-content/uploads/2021/02/Screen_Shot_2019-09-18_at_3.07.17_PM.webp"
    },
    {
      name: "Let’s Start Coding",
      link: "/project-lets-start-coding",
      logo: "https://images.squarespace-cdn.com/content/v1/55ef80c4e4b004b1f53a6af4/1442325596285-U6QHVEYSTCB7M0A5XKCI/lets-start-coding_75X432.png?format=1500w"
    },
    {
      name: "Blood Test Application",
      link: "/project-blood-test-application",
      logo: null
    },
    {
      name: "ParkQX",
      link: "/parkqx-c2c-e-commerce",
      logo: null
    },
    {
      name: "The Check Network",
      link: "/project-the-check-network",
      logo: null
    },
    {
      name: "WorkBooking",
      link: "/project-workbooking",
      logo: null
    }
  ], Hi = {
    modules: [He, Be],
    direction: "horizontal",
    touchStartPreventDefault: !1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: !0
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        pagination: {
          dynamicMainBullets: 7
        }
      },
      768: {
        slidesPerView: "auto",
        pagination: {
          dynamicMainBullets: 12
        }
      }
    }
  };
  class Bi {
    constructor(e) {
      this.container = document.querySelector(e);
    }
    render() {
      document.head.insertAdjacentHTML("beforeend", `<style>${zi}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${Di}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${Ii}</style>`);
      const e = (
        /* HTML */
        `
      <div class="os-trusted">
        <div class="swiper-container">
          <div class="swiper-slides-container">
            <div class="swiper os-swiper">
              <div class="swiper-wrapper">
                ${_i.map((t) => (
          /* HTML */
          `<div class="swiper-slide">
                      <a href="${t.link}" target="__blank">
                        ${t != null && t.logo ? `<img src="${t.logo}" alt="${t.name}" />` : t.name}
                      </a>
                    </div>`
        )).join("")}
              </div>
            </div>
            <div class="swiper-button-prev">${nt}</div>
            <div class="swiper-button-next">${lt}</div>
          </div>
          <div class="swiper-pagination-container">
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="action">
          <a class="btn-primary" href="/portfolio" target="blank">See all project cases</a>
        </div>
      </div>
    `
      );
      this.container && (this.container.innerHTML = e, new F(".os-swiper", Hi));
    }
    events() {
      var e;
      (e = T(".os-trusted")) == null || e.addEventListener("mousedown", (t) => {
        const s = t.target, a = s.closest(".os-trusted .swiper a"), o = s.closest(".os-trusted .action a");
        a && P(
          "exp_content_based_icon_01",
          `${a.href}`,
          "click",
          "Home Page Trusted by Leading Organizations:"
        ), o && P(
          "exp_content_based_button_07",
          "See all project cases",
          "click",
          "Home Page Trusted by Leading Organizations:"
        );
      });
    }
    init() {
      this.render(), this.events();
    }
  }
  const ji = '@import"https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap";.contacts-btn{border-radius:8px;border:1px solid #d62c2c;border:1px solid var(--red-600-valencia, #d62c2c);background:#d62c2c;background:var(--red-600-valencia, #d62c2c);color:#fff}.contacts-btn:hover{background:#f33;border-color:#f33;box-shadow:0 8px 8px #00000029}.contacts-btn:active{background:#991f1f;border-color:#991f1f}.aa-container{max-width:1272px;padding:0 16px;margin:0 auto}.heading-1{color:#12233d;font-family:Raleway,sans-serif;font-size:42px;font-style:normal;font-weight:700;line-height:130%;margin-bottom:24px}.heading-2{font-family:Raleway,sans-serif;font-size:32px;font-style:normal;font-weight:700;line-height:40px}.heading-3{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway,sans-serif;font-size:24px;font-style:normal;font-weight:700;line-height:32px}.aa-dash-line{background:-webkit-gradient(linear,left top,right top,color-stop(.65%,rgba(216,216,216,0)),color-stop(16.29%,#d8d8d8),color-stop(84.03%,#d8d8d8),to(rgba(216,216,216,0)));background:-webkit-linear-gradient(left,rgba(216,216,216,0) .65%,#d8d8d8 16.29%,#d8d8d8 84.03%,rgba(216,216,216,0) 100%);background:-moz-linear-gradient(left,rgba(216,216,216,0) .65%,#d8d8d8 16.29%,#d8d8d8 84.03%,rgba(216,216,216,0) 100%);background:linear-gradient(90deg,#d8d8d800 .65%,#d8d8d8 16.29%,#d8d8d8 84.03%,#d8d8d800);margin:70px 6.94% 0 0;height:1px}.software,.trusted,.calculator,.envision,.partners,.team,.full-circle{padding:30px 0}.team{overflow-x:clip}.software .heading-2,.trusted .heading-2,.partners .heading-2{text-align:center;margin-bottom:44px}@media (max-width: 768px){.software .heading-2,.trusted .heading-2,.partners .heading-2{text-align:left;margin-bottom:30px}}.full-circle .heading-2{text-align:center;margin-bottom:24px}@media (max-width: 768px){.full-circle .heading-2{text-align:left;margin-bottom:14px}}.full-circle .heading-2+.under-heading{color:#414f64;color:var(--gray-650-dark-gray, #414f64);text-align:center;font-family:Raleway;font-size:16px;font-style:normal;font-weight:400;line-height:24px}@media (max-width: 768px){.full-circle .heading-2+.under-heading{text-align:left}}@media (max-width: 768px){.trusted .heading-2,.partners .heading-2{font-size:24px}}section#services,section#founders,section#our-awards{display:none}#testimonials{border-top:none!important}#industries .show-more{width:100%;height:48px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;max-width:376px;margin-left:auto;margin-right:auto;margin-top:32px;border-radius:8px;border:none;background:#ffffff1a;color:#fff;text-align:center;font-family:Raleway;font-size:16px;font-weight:600;line-height:24px;text-transform:uppercase}', Oi = "https://keenethics.com/wp-json/contact-form-7/v1/contact-forms";
  async function re({ id: i, data: e }) {
    const t = `${Oi}/${i}/feedback`;
    try {
      if (!(await fetch(t, {
        method: "POST",
        body: e
      })).ok)
        throw new Error("Network response was not ok");
      return !0;
    } catch {
      return !1;
    }
  }
  const Vi = 21960, Gi = 21962, Fi = 21963, Ni = 21964, Yi = '.os-envision{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:center}@media (max-width: 768px){.os-envision{flex-direction:column}}.os-envision form{display:none;border-radius:16px;border:1px solid #e3e3e3;background:#fff;box-shadow:0 4px 4px #00000040;padding:40px 122px}@media (max-width: 768px){.os-envision form{padding:22px 16px}}.os-envision form .title{color:#12233d;color:var(--blue-800-tangaroa, #12233d);text-align:center;font-family:Open Sans;font-size:24px;font-style:normal;font-weight:700;line-height:32px}.os-envision form .descr{color:#414f64;color:var(--gray-650-dark-gray, #414f64);text-align:center;font-family:Raleway;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.os-envision form .form-controls{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px;margin-top:30px}.os-envision form .form-controls .form-control{position:relative}.os-envision form .form-controls .form-control input{width:100%;border-radius:10px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);height:48px;padding-left:24px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.os-envision form .form-controls .form-control input::-moz-placeholder{visibility:hidden}.os-envision form .form-controls .form-control input::placeholder{visibility:hidden}.os-envision form .form-controls .form-control input:-moz-placeholder-shown+.placeholder{display:block}.os-envision form .form-controls .form-control input:placeholder-shown+.placeholder{display:block}.os-envision form .form-controls .form-control input[required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.os-envision form .form-controls .form-control input:user-invalid{border-color:#d62c2c;border-color:var(--red-600-valencia, #d62c2c)}.os-envision form .form-controls .form-control input.invalid{border-color:#d62c2c;border-color:var(--red-600-valencia, #d62c2c)}.os-envision form .form-controls .form-control input:user-invalid~.error{display:block}.os-envision form .form-controls .form-control input.invalid~.error{display:block}.os-envision form .form-controls .form-control .placeholder{display:none;position:absolute;top:50%;left:24px;transform:translateY(-50%);pointer-events:none;color:#6f7a88;color:var(--gray-550-clasic-gray, #6f7a88);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.os-envision form .form-controls .form-control .error{display:none;position:absolute;color:#d62c2c;color:var(--red-600-valencia, #d62c2c);font-feature-settings:lining-nums proportional-nums;font-variant-numeric:lining-nums proportional-nums;font-family:Raleway;font-size:12px;font-weight:400;line-height:16px}.os-envision form .privacy{margin-top:30px;color:#414f64;color:var(--gray-650-dark-gray, #414f64);text-align:center;font-family:Raleway;font-size:14px;font-weight:400;line-height:25px}.os-envision form .privacy a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline}.os-envision .left{border-radius:8px 0 0 8px;background:#f2f7ff;background:var(--Blue---100, #f2f7ff);padding:30px;flex:1 1 35%;display:grid;grid-gap:16px;gap:16px}@media (max-width: 768px){.os-envision .left{background:transparent}}.os-envision .left .title{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Open Sans,sans-serif;font-size:24px;font-weight:700;line-height:32px}.os-envision .left .descr{color:#414f64;color:var(--gray-650-dark-gray, #414f64);font-family:Raleway;font-size:16px;font-weight:400;line-height:24px}.os-envision .right{flex:1 1 65%;border-radius:16px;border:1px solid #e3e3e3;background:#fff;padding:40px}@media (max-width: 768px){.os-envision .right{border-radius:10px;border:1px solid #e3e3e3;background:#f7f7f7;padding:22px 16px}}.os-envision .right .title{color:#12233d;color:var(--blue-800-tangaroa, #12233d);text-align:center;font-family:Open Sans;font-size:24px;font-weight:700;line-height:32px}.os-envision .right .descr{color:#414f64;color:var(--gray-650-dark-gray, #414f64);margin-top:4px;text-align:center;font-family:Raleway;font-size:16px;font-style:normal;font-weight:400;line-height:24px}.os-envision .right .action{margin-top:24px;display:grid;justify-items:center;grid-gap:24px;gap:24px}.os-envision .right .action .descr{color:#414f64;color:var(--gray-650-dark-gray, #414f64);font-family:Raleway;font-size:18px;font-weight:500;line-height:24px;text-align:center}.os-envision .right .action button{width:-moz-max-content;width:-webkit-max-content;width:max-content;padding:0 40px}.os-range{position:relative;height:100px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;justify-content:flex-end}.os-range .info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;margin-top:14px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:18px;font-weight:700;line-height:24px}@media (max-width: 768px){.os-range .info{font-size:16px}}.os-range .tooltip{top:0;visibility:hidden;position:absolute;border-radius:2px;border:1px solid #eee;border:1px solid var(--Gray-200, #eee);background:#fff;background:var(--gray-0-white, #fff);box-shadow:0 6px 8px #00000014;padding:5px 7px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);text-align:justify;font-family:Raleway;font-size:14px;font-weight:700;line-height:14px}.os-range .tooltip:has(+.range:focus){visibility:visible}.os-range .tooltip:has(+.range:hover){visibility:visible}.os-range .tooltip:has(+.range:active){visibility:visible}.os-range .tooltip:after{content:"";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent transparent;border-color:var(--gray-0-white, #fff) transparent transparent transparent}.os-range .range{--slider-progress: 0%;position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:12px;cursor:pointer;outline:none;border-radius:20px;border:1px solid #eee;border:1px solid var(--Gray-200, #eee);margin:0;padding:0}.os-range .range:before{content:"";position:absolute;top:0;height:100%;border-radius:5px;z-index:1}.os-range .range:before{left:0;background:-webkit-repeating-linear-gradient(315deg,#2969cc,#2969cc 10px,#5d8dd8 10px,#5d8dd8 20px) #2969cc;background:-moz-repeating-linear-gradient(315deg,#2969cc,#2969cc 10px,#5d8dd8 10px,#5d8dd8 20px) #2969cc;background:repeating-linear-gradient(135deg,#2969cc,#2969cc 10px,#5d8dd8 10px,#5d8dd8 20px) #2969cc;width:var(--slider-progress)}.os-range .range::-webkit-slider-thumb{position:relative;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:24px;height:24px;background-color:#2969cc;background-color:var(--blue-500-clasic-blue, #2969cc);border-radius:50%;border:none;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;z-index:2}.os-range .range::-moz-range-thumb{width:24px;height:24px;background-color:#2969cc;background-color:var(--blue-500-clasic-blue, #2969cc);border-radius:50%;border:none;-moz-transition:.2s ease-in-out;transition:.2s ease-in-out}.os-range .range::-webkit-slider-thumb:hover{box-shadow:0 0 0 10px #00000010;background-color:#508be5}.os-range .range:active::-webkit-slider-thumb{box-shadow:0 0 0 10px #00000010;background-color:#508be5}.os-range .range:focus::-webkit-slider-thumb{box-shadow:0 0 0 10px #00000010;background-color:#508be5}.os-range .range::-moz-range-thumb:hover{box-shadow:0 0 0 10px #ff55001a}.os-range .range:active::-moz-range-thumb{box-shadow:0 0 0 13px #f503}.os-range .range:focus::-moz-range-thumb{box-shadow:0 0 0 13px #f503}';
  class Wi {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    init() {
      this.render(), this.events();
    }
    events() {
      var e, t, s, a;
      N(
        ".os-envision",
        "exp_content_based_section_07",
        "Section",
        "Home Page When do you envision your project going live?"
      ), (e = T(".os-envision input[type=range]")) == null || e.addEventListener("change", (o) => {
        P("exp_content_based_slider_01", "Start date", "change", "Home Page When do you envision your project going live?");
      }), (t = T(".os-envision button[data-showform]")) == null || t.addEventListener("click", (o) => {
        P("exp_content_based_button_15", "Check my roadmap", "click", "Home Page When do you envision your project going live?");
      }), N(".os-envision form", "exp_content_based_section_08", "Section", "Pop up Let’s Build Your Project Roadmap Together"), (s = T(".os-envision form")) == null || s.addEventListener("change", (o) => {
        const r = o.target, l = {
          "#os-firstname": { event: "exp_content_based_input_05", label: "First Name" },
          "#os-lastname": { event: "exp_content_based_input_06", label: "Last Name" },
          "#os-email": { event: "exp_content_based_input_07", label: "Business email" }
        };
        for (const n in l)
          if (r.closest(n)) {
            const { event: p, label: f } = l[n];
            P(p, f, "input", "Pop up Let’s Build Your Project Roadmap Together");
            break;
          }
      }), (a = T(".os-envision form button[type=submit]")) == null || a.addEventListener("mousedown", (o) => {
        P("exp_content_based_button_16", "Get My Project Roadmap", "click", "Pop up Let’s Build Your Project Roadmap Together");
      });
    }
    render() {
      const e = /* @__PURE__ */ new Date(), t = /* @__PURE__ */ new Date();
      t.setFullYear(e.getFullYear() + 1);
      const s = e.getTime();
      let a = t.getTime();
      const o = 1e3 * 60 * 60 * 24 * 30, r = (a - s) % o;
      r !== 0 && (a += o - r);
      const l = (
        /* HTML */
        `
      <div class="os-envision">
        <form>
          <h4 class="title">Let’s Build Your Project Roadmap Together</h4>
          <p class="descr">Complete this form and we’ll contact you to discuss your project's roadmap.</p>
          <div class="form-controls">
            <div class="form-control">
              <input type="text" id="os-firstname" name="firstname" placeholder="First name" required />
              <div class="placeholder">First name</div>
              <div class="error">Please enter a valid first name</div>
            </div>
            <div class="form-control">
              <input type="text" id="os-lastname" name="last name" placeholder="Last name" />
              <div class="placeholder">Last name</div>
              <div class="error">Please enter a valid last name</div>
            </div>
            <div class="form-control">
              <input type="email" id="os-email" name="email" placeholder="Bussiness email" required />
              <div class="placeholder">Business email</div>
              <div class="error">Please enter a valid email</div>
            </div>
            <input type="hidden" name="launch date" />
            <button class="btn-primary" type="submit">Get My Project Roadmap</button>
          </div>
          <div class="privacy">
            By submitting, I agree to Keenethics’ <a href="/privacy-policy" target="__blank">Privacy Policy</a>
          </div>
        </form>
        <div class="left">
          <h4 class="title">Compare your current process with our streamlined development workflow</h4>
          <p class="descr">
            Use our Time-to-Market Estimator to align your development roadmap with your budget constraints. Get a clear
            picture of how soon you can launch, and at what cost.
          </p>
        </div>
        <div class="right">
          <h4 class="title">When do you envision your project going live?</h4>
          <p class="descr">Adjust the slider to pinpoint your preferred launch window</p>
          <div class="os-range">
            <div class="tooltip">${e.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
            <input class="range" type="range" min="${s}" max="${a}" step="${o}" value="${s}" />
            <div class="info">
              <div>Start date</div>
              <div>${t.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
            </div>
          </div>
          <div class="action">
            <p class="descr">
              Discover a strategic plan to achieve your market entry swiftly while managing costs effectively.
            </p>
            <button class="btn-primary" data-showform>Check my roadmap</button>
          </div>
        </div>
      </div>
    `
      );
      this.container ? (document.head.insertAdjacentHTML("beforeend", `<style>${Yi}</style>`), this.container.innerHTML = l) : console.error(`Container with selector "${this.container}" not found`), O(".range").then((n) => {
        const d = n;
        if (!d)
          return;
        const p = document.querySelector(".os-range .tooltip");
        if (!p)
          return;
        d.addEventListener("input", (h) => {
          const m = h.target, b = Number(m.value), x = (b - s) / (a - s) * 100;
          d.style.setProperty("--slider-progress", `${x}%`);
          const c = new Date(b);
          if (p) {
            p.textContent = c.toLocaleDateString("en-US", { month: "long", year: "numeric" });
            const u = d.getBoundingClientRect(), w = p.getBoundingClientRect(), v = u.width * x / 100 - w.width / 2;
            p.style.left = `${v}px`;
          }
        });
        const f = document.querySelector("[data-showform]"), g = document.querySelector(".os-envision form");
        f && f.addEventListener("click", () => {
          const h = new Date(Number(d.value)), m = document.querySelector(".os-envision .left"), b = document.querySelector(".os-envision .right"), x = g.querySelector('[name="launch date"]');
          x && (x.value = h.toLocaleDateString("en-US", { month: "long", year: "numeric" })), g.style.display = "block", m.style.display = "none", b.style.display = "none";
        }), g.addEventListener("submit", async (h) => {
          h.preventDefault();
          const m = $(".os-envision input");
          let b = !0;
          if (m.forEach((c) => {
            let u = !0;
            const w = c.value.trim();
            if (c.id === "os-firstname" || c.id === "os-lastname") {
              if (c.id === "os-lastname" && w === "")
                return;
              u = /^[A-Za-z\s]+$/.test(w);
            } else
              c.id === "os-email" && (u = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w));
            u ? c.classList.remove("invalid") : (c.classList.add("invalid"), b = !1), c.addEventListener("input", () => {
              c.classList.remove("invalid");
            });
          }), !b)
            return;
          const x = new FormData(g);
          Object.fromEntries(x.entries());
          try {
            await re({
              id: Vi,
              data: x
            }) && (window.location.href = "/success");
          } catch (c) {
            console.log(c);
          }
        });
      });
    }
  }
  const Ri = ".os-blocks-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;flex-wrap:wrap;gap:24px}@media (max-width: 768px){.os-blocks-container{gap:12px}}.os-blocks-container .block{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;justify-content:center;width:245px;height:159px;padding:0 32px;border-radius:8px;background:#fff;background:var(--gray-0-white, #fff);box-shadow:0 8px 8px #00000014}@media (max-width: 768px){.os-blocks-container .block{width:165px;height:101px;padding:0 16px}}.os-blocks-container .block .title{color:#d62c2c;color:var(--red-600-valencia, #d62c2c);font-feature-settings:lining-nums proportional-nums;font-variant-numeric:lining-nums proportional-nums;font-family:Raleway;font-size:54px;font-weight:800;line-height:64px;text-transform:uppercase}@media (max-width: 768px){.os-blocks-container .block .title{font-size:32px;line-height:40px;font-weight:700}}.os-blocks-container .block .descr{margin-top:4px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:18px;font-style:normal;font-weight:500;line-height:27px}@media (max-width: 768px){.os-blocks-container .block .descr{font-size:14px;font-weight:400;line-height:25px}}";
  class Zi {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    render() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Ri}</style>`);
      const e = (
        /* HTML */
        ` <div class="os-blocks-container">
      <div class="block">
        <div class="title">20+</div>
        <div class="descr">Active Clients</div>
      </div>
      <div class="block">
        <div class="title">90</div>
        <div class="descr">Net Promoter Score</div>
      </div>
      <div class="block">
        <div class="title">60</div>
        <div class="descr">Happy customers</div>
      </div>
      <div class="block">
        <div class="title">70+</div>
        <div class="descr">Skilled professionals</div>
      </div>
    </div>`
      );
      this.container ? this.container.innerHTML = e : console.error("Container is not found");
    }
    events() {
      N(".partners", "exp_content_based_section_09", "Section", "Home Page Why Partner with KeenEthics?");
    }
    init() {
      this.render(), this.events();
    }
  }
  const qi = '.os-team{position:relative;padding:185px 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}@media (max-width: 768px){.os-team{flex-direction:column;padding:0}}.os-team .os-content{width:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:30px}@media (max-width: 768px){.os-team .os-content{width:100%;padding:0 20px}}.os-team .os-content .title{color:#12233d;font-family:Raleway;font-size:32px;font-style:normal;font-weight:700;line-height:40px}.os-team .os-content .descr{color:#1f2733;color:var(--Gray---800, #1f2733);font-family:Raleway;font-size:18px;font-weight:500;line-height:27px}.os-team .os-content a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:376px;height:48px;padding:0 98px}@media (max-width: 768px){.os-team .os-content a{max-width:100%;padding:0}}.os-team .bg{position:relative;width:50%}.os-team .bg:after{content:"";display:block;position:absolute;top:-100%;right:-60%;width:1178px;height:1178px;background-image:url(https://conversionratestore.github.io/projects/keenethics/introduce/img/hero_bg.webp);background-repeat:no-repeat;z-index:-1}@media (max-width: 1000px){.os-team .bg:after{top:-40%;right:-120%;background-size:70%}}@media (max-width: 900px){.os-team .bg:after{top:-10%;right:-165%;background-size:50%}}@media (max-width: 768px){.os-team .bg:after{width:100%;height:383px;top:0;right:0;background-size:750px;background-position:center}}@media (max-width: 768px){.os-team .bg{width:100vw;height:380px}}';
  class Ui {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    render() {
      document.head.insertAdjacentHTML("beforeend", `<style>${qi}</style>`);
      const e = (
        /* HTML */
        `<div class="os-team">
      <div class="os-content">
        <h4 class="title">We founded Keenethics because we knew that the tech world could do better.</h4>
        <p class="descr">
          We are the leaders at Keenethics: Max Savonin, the CEO, and Alex Pletnov, the CTO. Back in 2015, we co-founded
          Keenethics because we believed that we can make an important contribution to the industry. We strive to make
          the tech world play ethically.
        </p>
        <a href="/about-us" target="__blank" class="btn-primary">Meet our team</a>
      </div>
      <div class="bg"></div>
    </div>`
      );
      this.container ? this.container.innerHTML = e : console.error("Container is not found");
    }
    events() {
      var e;
      (e = T("section.team")) == null || e.addEventListener("mousedown", (t) => {
        t.target.closest("a.btn-primary") && P(
          "exp_content_based_button_20",
          "Meet our team",
          "click",
          "Home Page We founded Keenethics because we knew that the tech world could do better."
        );
      });
    }
    init() {
      this.render(), this.events();
    }
  }
  const Xi = ".full_circle{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:50px;-moz-column-gap:50px;column-gap:50px;grid-row-gap:84px;row-gap:84px;max-height:430px;margin-top:80px}@media (max-width: 768px){.full_circle{grid-template-columns:1fr;grid-template-rows:auto;row-gap:24px;-moz-column-gap:0;column-gap:0;max-height:100%;margin-top:30px}}.full_circle [data-circle=analysis]{grid-column:1 / 2;grid-row:1 / 2}@media (max-width: 768px){.full_circle [data-circle=analysis]{grid-column:1 / 2;grid-row:1 / 2}}.full_circle [data-circle=design]{grid-column:3 / 4;grid-row:1 / 2}@media (max-width: 768px){.full_circle [data-circle=design]{grid-column:1 / 2;grid-row:3 / 4}}.full_circle [data-circle=development]{grid-column:1 / 2;grid-row:2 / 3}@media (max-width: 768px){.full_circle [data-circle=development]{grid-column:1 / 2;grid-row:2 / 3}}.full_circle [data-circle=meintenance]{grid-column:3 / 4;grid-row:2 / 3}@media (max-width: 768px){.full_circle [data-circle=meintenance]{grid-column:1 / 2;grid-row:3 / 4}}.full_circle .circle{grid-column:2 / 3;grid-row:1 / 3}.full_circle .circle img{width:100%;height:100%}@media (max-width: 768px){.full_circle .circle{display:none}}.full_circle .circle_block{display:grid;justify-items:center}@media (max-width: 768px){.full_circle .circle_block{border-radius:10px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);padding:16px;justify-items:start}}.full_circle .circle_block .title{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:100%;color:#12233d;text-align:center;font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}@media (max-width: 768px){.full_circle .circle_block .title{justify-content:space-between}}.full_circle .circle_block .title .icon{display:none;justify-content:center;align-items:center;width:50px;height:50px;border-radius:25px;background:#fff;background:var(--gray-0-white, #fff);box-shadow:0 6.667px 6.667px #00000012}@media (max-width: 768px){.full_circle .circle_block .title .icon{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}}.full_circle .circle_block .descr{color:#414f64;color:var(--gray-650-dark-gray, #414f64);text-align:center;font-family:Raleway;font-size:16px;font-weight:400;line-height:24px;margin-top:12px}.full_circle .circle_block a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;gap:10px;padding:0 33px;width:-moz-max-content;width:-webkit-max-content;width:max-content;background:transparent;height:40px;color:#2969cc;color:var(--blue-500-clasic-blue, #2969cc);text-align:center;font-family:Open Sans;font-size:16px;font-weight:700;line-height:24px;text-transform:uppercase;margin-top:30px}";
  class $i {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="full_circle">
        <div class="circle_block" data-circle="analysis">
          <h4 class="title">Business Analysis <span class="icon">${st}</span></h4>
          <p class="descr">The goal of business analysis is to test the project idea.</p>
          <a class="btn-primary" href="/services-business-analysis" target="__blank">Learn more ${Q}</a>
        </div>
        <div class="circle_block" data-circle="design">
          <h4 class="title">UI/UX design <span class="icon">${at}</span></h4>
          <p class="descr">The goal of a discovery stage is to test and develop the project idea.</p>
          <a class="btn-primary" href="/services-ui-ux-design" target="__blank">Learn more ${Q}</a>
        </div>
        <div class="circle_block" data-circle="dev">
          <h4 class="title">Development and testing <span class="icon">${ot}</span></h4>
          <p class="descr">
            Through continuous testing, we make sure the code we develop is clean, effective, and free of bugs.
          </p>
          <a class="btn-primary" href="/services-development-and-quality-assurance" target="__blank"
            >Learn more ${Q}</a
          >
        </div>
        <div class="circle_block" data-circle="maintenance">
          <h4 class="title">Maintenance <span class="icon">${rt}</span></h4>
          <p class="descr">Software grows outdated, technical errors occur, and the project idea undergoes changes.</p>
          <a class="btn-primary" href="/services-maintenance-support" target="__blank">Learn more ${Q}</a>
        </div>
        <div class="circle"><img src="${D}/full_circle_method.svg" alt="" /></div>
      </div>
    `
      );
      this.container && (document.head.insertAdjacentHTML("beforeend", `<style>${Xi}</style>`), this.container.innerHTML = e);
    }
    events() {
      var e;
      N(".full-circle", "exp_content_based_section_10", "Section", "Home Page Our Full Circle Method"), (e = T(".full_circle")) == null || e.addEventListener("mousedown", (t) => {
        var o, r, l;
        const a = t.target.closest("a.btn-primary");
        if (a) {
          const n = (l = (r = (o = a.closest(".circle_block")) == null ? void 0 : o.querySelector(".title")) == null ? void 0 : r.textContent) == null ? void 0 : l.trim();
          P("exp_content_based_button_17", `${n} - Learn more `, "click", "Home Page Our Full Circle Method");
        }
      });
    }
    init() {
      this.render(), this.events();
    }
  }
  const Qi = '.hero{display:none}.aa-hero{padding:25px 0 30px}.aa-hero__wrapper{padding-left:6.94%}.aa-content{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;padding-bottom:80px}@media (max-width: 768px){.aa-content{flex-direction:column}}@media (max-width: 768px){.aa-content .heading-1{color:#12233d;font-size:32px;font-weight:700;line-height:40px}}.aa-content>div:first-of-type{width:46.2%;margin-top:auto}@media (max-width: 768px){.aa-content>div:first-of-type{order:2;width:100%}}.aa-content>div:last-of-type{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:flex-start;align-items:flex-end;padding-right:30px;position:relative;z-index:1;overflow:hidden}@media (max-width: 768px){.aa-content>div:last-of-type{order:1;height:147px;justify-content:center}}.aa-content>div:last-of-type img{-o-object-fit:contain;object-fit:contain}@media (max-width: 768px){.aa-content>div:last-of-type img{height:100%}}.aa-content>div:last-of-type:after{content:"";position:absolute;top:50%;left:40%;width:680px;height:680px;border:162.29px solid #2969cc;border:162.29px solid var(--blue-500-clasic-blue, #2969cc);border-radius:50%;z-index:-1}@media (max-width: 768px){.aa-content>div:last-of-type:after{top:-16%;left:14%;width:561px;height:680px;border:59.29px solid #2969cc;border:59.29px solid var(--blue-500-clasic-blue, #2969cc)}}.aa-content .btn-primary{max-width:376px;width:100%}.description{color:#414f64;color:var(--gray-650-dark-gray, #414f64);font-family:Raleway;font-size:16px;font-style:normal;font-weight:400;line-height:24px;margin-bottom:32px}@media (max-width: 768px){.description{margin-bottom:24px}}.under-description{width:83.7%}@media (max-width: 768px){.under-description{width:100%}}.under-description>a{width:100%}@media (max-width: 960px){.under-description>a{font-size:14px}}@media (max-width: 768px){.under-description>a{font-size:16px}}.solutions-title{margin:32px 0 20px;color:#12233d;font-family:Raleway;font-size:18px;font-style:normal;font-weight:700;line-height:150%}.aa-solutions{padding:0}.aa-solutions li{list-style:none;border-radius:8px;background:#f7f7f7;margin-bottom:10px}.aa-solutions li:last-of-type{margin-bottom:0}.aa-solutions li a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;color:#12233d;color:var(--blue-800-tangaroa, #12233d);padding:10px 18px;font-family:Raleway;font-size:14px;font-style:normal;font-weight:700;line-height:100%;-webkit-text-decoration:none;text-decoration:none;align-items:center}.aa-solutions li a img:first-of-type{margin-right:20px}.aa-solutions li a span{margin-right:auto}.aa-solutions li a img:last-of-type{margin-left:5px}';
  class Ki {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    render() {
      const e = (
        /* HTML */
        `<div>
        <h1 class="heading-1">Empower Your Business with Ethical Software Solutions</h1>
        <p class="description">
          Experience the velocity of KeenEthics' unique blend of no-code platforms and custom JavaScript development –
          <strong>launch your projects up to 40% faster</strong> without sacrificing quality or ethics.
        </p>

        <div class="under-description">
          <a href="/estimate" class="btn-primary btn-primary_accent">Get free project estimate</a>
          <p class="solutions-title">What software solution are you looking for?</p>
          <ul class="aa-solutions">
            <li>
              <a href="#" data-tab="develop">
                <img src="${D}/develop.svg" alt="" />
                <span>Develop My Idea</span>
                <img src="${D}/arrow-right.svg" alt="arrow right" />
              </a>
            </li>
            <li>
              <a href="#" data-tab="optimize">
                <img src="${D}/puzzle.svg" alt="" />
                <span>Optimize My Business</span>
                <img src="${D}/arrow-right.svg" alt="arrow right" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="${D}/scale.svg" alt="" data-tab="scale" />
                <span>Scale My Project</span>
                <img src="${D}/arrow-right.svg" alt="arrow right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="${D}/hero-image.png" alt="" />
      </div>`
      );
      this.container && (document.head.insertAdjacentHTML("beforeend", `<style>${Qi}</style>`), this.container.innerHTML = e);
    }
    toTab() {
      var e;
      (e = T(".aa-solutions")) == null || e.addEventListener("click", (t) => {
        const s = t.target;
        console.log(s);
        const a = s.closest("a"), o = T(".os-tab-button-container");
        a && (t.preventDefault(), o == null || o.querySelectorAll("button").forEach((r) => {
          var l, n;
          ((l = r.textContent) == null ? void 0 : l.trim().toLowerCase()) === ((n = a == null ? void 0 : a.textContent) == null ? void 0 : n.trim().toLowerCase()) && (r.click(), o == null || o.scrollIntoView({ behavior: "smooth" }));
        }));
      });
    }
    init() {
      this.render(), this.toTab(), this.events();
    }
    events() {
      var e;
      N(
        "section.aa-hero",
        "exp_content_based_section_01",
        "Section",
        '"Home Page Empower Your Business with Ethical Software Solutions'
      ), (e = T(".aa-solutions")) == null || e.addEventListener("click", (t) => {
        var o, r, l;
        const a = t.target.closest("a");
        (o = a == null ? void 0 : a.textContent) != null && o.includes("Develop My Idea") && P(
          "exp_content_based_button_01",
          "Develop My Idea",
          "click",
          "Home Page Empower Your Business with Ethical Software Solutions"
        ), (r = a == null ? void 0 : a.textContent) != null && r.includes("Optimize My Business") && P(
          "exp_content_based_button_02",
          "Optimize My Business",
          "click",
          "Home Page Empower Your Business with Ethical Software Solutions"
        ), (l = a == null ? void 0 : a.textContent) != null && l.includes("Scale My Project") && P(
          "exp_content_based_button_03",
          "Scale My Project",
          "click",
          "Home Page Empower Your Business with Ethical Software Solutions"
        );
      });
    }
  }
  const Ji = ".awards-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:60px}@media (max-width: 768px){.awards-container{flex-direction:column;align-items:flex-start;gap:12px}}.awards-container .heading-3{width:180px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}@media (max-width: 768px){.awards-container .heading-3{width:100%;font-size:16px;font-weight:700;line-height:24px}}.awards-swiper{width:100%}.awards-swiper .swiper-wrapper{gap:60px}@media (max-width: 768px){.awards-swiper .swiper-wrapper{flex-wrap:wrap;gap:29px}}.awards-swiper .swiper-wrapper .swiper-slide{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}@media (max-width: 768px){.awards-swiper .swiper-wrapper .swiper-slide{width:64px;height:64px}}.awards-swiper .swiper-wrapper .swiper-slide img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}", es = {
    modules: [He, Be, Pi],
    direction: "horizontal",
    loop: !0,
    autoplay: {
      delay: 5e3,
      disableOnInteraction: !1
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: !0
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        autoplay: !1
      },
      768: {
        slidesPerView: 7,
        slidesPerGroup: 1
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }, ts = [
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/Aciety.svg",
      alt: "Aciety Nodejs Development top-10 2023"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardGDPR.svg",
      alt: "GDPR"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardBest_Software_Developments_company_in_Education.svg",
      alt: "Best Software Development Company in Education"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardClutch_2023.svg",
      alt: "Clutch Top Software Developers Munich 2023"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardExpertise.com_2023.svg",
      alt: "Expertise.com Best Web Developers in New York City 2023"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardAciety_React_Development.svg",
      alt: "Aciety React Development top-10 2023"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardGoodFirms.svg",
      alt: "GoodFirms Best Company to Work With"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardAmplifier.svg",
      alt: "Amplifyre"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardTOP_10_Best_web_development.svg",
      alt: "Top 10 Best Web Development"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardSelectFirms_TOP_website_development_company.svg",
      alt: "Top website development company"
    },
    {
      src: "https://keenethics.com/wp-content/uploads/2023/08/AwardMost_reviewed.svg",
      alt: "Most reviewed social media app agencies"
    }
  ];
  class be {
    constructor(e) {
      this.container = document.querySelector(e), this.init();
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="awards-container">
        <h2 class="heading-3">Our Awards:</h2>
        <div class="swiper awards-swiper">
          <div class="swiper-wrapper">
            ${ts.map((t) => (
          /* HTML */
          `<div class="swiper-slide">
                  <img class="award" src="${t.src}" alt="${t.alt}" loading="lazy" />
                </div>`
        )).join("")}
          </div>
        </div>
      </div>
    `
      );
      this.container && (document.head.insertAdjacentHTML("beforeend", `<style>${Ji}</style>`), this.container.innerHTML = e, new F(".awards-swiper", es));
    }
    init() {
      this.render();
    }
  }
  const je = `section#contact-us .container>.row{display:none}#contacts-page .contact-us-form{display:none}section.contact-nav{display:none}.crs-contact{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;max-width:1110px;margin:0 auto;grid-gap:40px;gap:40px;font-family:Raleway}@media (max-width: 768px){.crs-contact{grid-template-columns:1fr}}.crs-contact>*{font-family:inherit}.crs-contact.estimate header{display:none}@media (max-width: 768px){.crs-contact.estimate header{display:block}}.crs-contact header{grid-column:1 / 3;grid-row:1 / 2;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:20px}@media (max-width: 768px){.crs-contact header{grid-column:1 / 2}}.crs-contact header .title{font-size:32px;font-weight:700;line-height:1.25;color:#12233d}.crs-contact header .descr{font-size:18px;font-weight:700;color:#12233d}@media (max-width: 768px){.crs-contact header .descr{display:none}}.crs-contact header .list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px;list-style:none}@media (max-width: 768px){.crs-contact header .list{display:none}}.crs-contact header .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:12px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:18px;font-style:normal;font-weight:500;line-height:27px}.crs-contact header .list li:before{content:"";display:block;width:24px;height:24px;border-radius:50%;background:#d62c2c}.crs-contact .left{flex:1;width:100%;grid-column:1 / 2;grid-row:2 / 3;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}.crs-contact .form-container{border-radius:8px;background-color:#12233d;padding:40px}@media (max-width: 768px){.crs-contact .form-container{grid-row:2 / 3!important;grid-column:1 / 2!important;padding:24px 16px}}.crs-contact .form-container .form{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px}.crs-contact .form-container .form label:has(.placeholder){position:relative}.crs-contact .form-container .form label:has(.placeholder) .placeholder{position:absolute;top:50%;left:21px;transform:translateY(-50%);font-size:16px;color:#6f7a88}.crs-contact .form-container .form label:has(.placeholder) input{width:100%;color:#12233d;font-weight:700;font-size:16px}.crs-contact .form-container .form label:has(.placeholder) .placeholder{display:none}.crs-contact .form-container .form label:has(.placeholder) input:-moz-placeholder-shown+.placeholder{display:block}.crs-contact .form-container .form label:has(.placeholder) input:placeholder-shown+.placeholder{display:block}.crs-contact .form-container .form label:has(.placeholder) input[data-required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.crs-contact .form-container .form label:has(.placeholder) input.invalid{border:2px solid #d62c2c}.crs-contact .form-container .form label:has(.placeholder) input.invalid~.error{visibility:visible}.crs-contact .form-container .form label:has(.placeholder) .error{color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.crs-contact .form-container .form .actions{margin-top:12px}.crs-contact .form-container .form .actions button{height:48px;padding:12px 20px;border-radius:8px;background-color:#d62c2c;border:none;width:100%;font-size:16px;line-height:24px;font-weight:700;text-align:center;color:#fff;text-transform:uppercase;cursor:pointer}.crs-contact .form-container .form .privacy{margin-top:24px;font-size:14px;color:#dae4f2}.crs-contact .form-container .form .privacy *{line-height:24px;font-size:14px;color:#dae4f2}.crs-contact .form-container .form .privacy a{color:inherit}.crs-contact .form-container .form .privacy-descr{font-size:14px;margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.crs-contact .form-container .form .privacy-descr p{font-size:inherit}.crs-contact .form-container .form input{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600!important;line-height:22px}.crs-contact .form-container .form input,.crs-contact .form-container .form details{padding:16px 21px;height:48px;border-radius:10px;border:none}.crs-contact .form-container .form .select{position:relative}.crs-contact .form-container .form input::-csstools-invalid-placeholder{font-size:16px;color:#6f7a88;font-family:inherit}.crs-contact .form-container .form summary:not(does-not-exist),.crs-contact .form-container .form input:not(does-not-exist){font-size:16px;color:#6f7a88;font-family:inherit}.crs-contact .form-container .form summary{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;height:100%;padding-right:10px}.crs-contact .form-container .form summary.selected{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:22px}.crs-contact .form-container .form summary[data-choosen]{color:#12233d;font-size:16px;font-weight:700}.crs-contact .form-container .form details{width:100%;background:#fff;cursor:pointer}.crs-contact .form-container .form details summary::marker{content:none;display:none}.crs-contact .form-container .form details summary::-webkit-details-marker{content:none;display:none}.crs-contact .form-container .form details summary:after{content:"";background-image:url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');background-size:contain;width:24px;height:24px;position:absolute;top:50%;right:15px;transform:rotate(180deg) translateY(50%)}.crs-contact .form-container .form details[open] summary:after{transform:rotate(0) translateY(-50%)}.crs-contact .form-container .form details[open] ul,.crs-contact .form-container .form details[open] label{cursor:pointer}.crs-contact .form-container .form details[open] ul{position:absolute;top:61px;border-radius:8px;box-shadow:0 4px 4px #00000040;left:0;display:grid;grid-gap:8px;gap:8px;background:#fff;width:100%;overflow:hidden;z-index:100;padding-top:12px}.crs-contact .form-container .form details[open] ul li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.crs-contact .form-container .form details[open] ul li label:hover{background-color:#f2f7ff}.crs-contact .form-container .form details[open] ul li label.selected{background-color:#f2f7ff}.crs-contact .form-container .form details[open] ul li label.selected:after{content:"";width:24px;height:24px;display:block;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L9.66118 17L19 7" stroke="%23D62C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.crs-contact .form-container .form details[open] input{position:absolute;left:0;opacity:0}.crs-contact .right{width:100%;grid-column:2 / 3;grid-row:2 / 3;flex:1}.crs-contact .estimate-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:32px}@media (max-width: 768px){.crs-contact .estimate-container{grid-column:1 / 2;grid-row:3 / 4}}.crs-contact .estimate-container .title{color:#0e1154;font-family:Raleway;font-size:42px;font-style:normal;font-weight:700;line-height:55px}@media (max-width: 768px){.crs-contact .estimate-container .title{display:none}}.crs-contact .estimate-container .descr{color:#12233d;font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}.crs-contact .estimate-container .list{display:grid;grid-gap:24px;gap:24px}.crs-contact .estimate-container .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:12px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:18px;font-weight:500;line-height:27px}.crs-contact .estimate-container .list li:before{content:"";display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;width:24px;height:24px;aspect-ratio:1;border-radius:50%;background-color:#d62c2c;background-repeat:no-repeat;background-size:contain;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.34031L6.65272 12L13.6666 4.99304L12.6597 4L6.65272 9.99996L3.99301 7.34028L3 8.34031Z" fill="white"/></svg>')}.crs-contact .contacts-container{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:flex-end;background:#f7f7f7;border-radius:8px;overflow:hidden}@media (max-width: 768px){.crs-contact .contacts-container{display:none}}.crs-contact .contacts-container .info{font-family:Raleway;position:absolute;bottom:0;left:0;border-radius:0 8px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);padding:21px 36px;width:312px;z-index:3}.crs-contact .contacts-container .info .name{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:18px;font-weight:700;line-height:24px}.crs-contact .contacts-container .info .position{margin-top:6px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:16px;font-weight:400;line-height:24px}.crs-contact .contacts-container img{height:100%;width:auto;-o-object-fit:cover;object-fit:cover;position:relative;z-index:2}.crs-contact .with-hero:after{content:"";position:absolute;top:50%;left:23%;width:680px;height:680px;border:162.29px solid #d62c2c;border:162.29px solid var(--red-600-valencia, #d62c2c);border-radius:50%;z-index:1}.crs-contact .mobile{display:none;flex-direction:column;gap:18px}.crs-contact .mobile .hero{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:8px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);gap:16px;height:96px;padding:16px}.crs-contact .mobile .hero img{width:68px;height:68px}.crs-contact .mobile .hero .info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:6px}.crs-contact .mobile .hero .info .name{font-size:18px;line-height:24px;font-weight:700;color:#12233d}.crs-contact .mobile .hero .info .position{font-size:16px;line-height:24px;font-weight:400;color:#12233d}.crs-contact .mobile .descr{font-size:18px;font-weight:700;color:#12233d;line-height:27px}.crs-contact .mobile .list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-wrap:wrap;gap:16px;list-style:none}.crs-contact .mobile .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:8px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:400;line-height:24px}.crs-contact .mobile .list li:before{content:"";display:block;width:12px;height:12px;border-radius:50%;background:#d62c2c}@media (max-width: 768px){.crs-contact .mobile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;grid-row:3 / 4}}.awards{margin-top:60px;margin-bottom:60px}@media (max-width: 768px){.awards{margin-top:30px;margin-bottom:30px}}`;
  class is {
    constructor() {
      this.init();
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="crs-contact">
        <header>
          <h2 class="title">Tech Solutions for Next-Level Business Growth</h2>
          <p class="descr">Contact us to learn about our solutions:</p>

          <ul class="list">
            <li>General inquiry</li>
            <li>Price quote</li>
            <li>Project evaluation</li>
            <li>Questions on tools we use</li>
          </ul>
        </header>
        <div class="left form-container">
          <form class="form" action="">
            <div class="select">
              <details>
                <summary>I need help with</summary>
                <ul>
                  <li>
                    <label
                      ><input type="radio" name="appeal" value="Bringing my vision to life" />Bringing my vision to
                      life</label
                    >
                  </li>
                  <li>
                    <label
                      ><input type="radio" name="appeal" value="Optimizing my business" />Optimizing my business</label
                    >
                  </li>
                  <li>
                    <label
                      ><input type="radio" name="appeal" value="Scaling up for growth" />Scaling up for growth</label
                    >
                  </li>
                  <li>
                    <label><input type="radio" name="appeal" value="General inquiry" />General inquiry</label>
                  </li>
                  <li>
                    <label><input type="radio" name="appeal" value="Other" />Other</label>
                  </li>
                </ul>
              </details>
            </div>
            <label>
              <input type="text" name="firstname" id="os-firstname" placeholder="" data-required />
              <span class="placeholder">First Name</span>
              <div class="error">Please enter a valid name</div>
            </label>
            <label>
              <input type="text" name="lastname" id="os-lastname" placeholder="" />
              <span class="placeholder">Last Name</span>
            </label>
            <label>
              <input type="email" name="email" id="os-email" placeholder="" data-required />
              <span class="placeholder"> Business Email</span>
              <div class="error">Please enter a valid email</div>
            </label>
            <div class="actions">
              <button type="submit">Contact US</button>
              <div class="privacy">
                <div class="privacy-link">
                  By submitting, I agree to Keenethics’ <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div class="privacy-descr">
                  <span>${ye}</span>
                  <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="right contacts-container with-hero">
          <img src="${D}/daria.webp" alt="Daria Hlavcheva" />
          <div class="info">
            <p class="name">Daria Hlavcheva</p>
            <p class="position">Head of Partner Engagement</p>
          </div>
        </div>
        <div class="mobile">
          <div class="hero">
            <img src="https://keenethics.com/wp-content/uploads/2023/10/Daria-Hlavcehva.webp" alt="Daria Hlavcheva" />
            <div class="info">
              <p class="name">Daria Hlavcheva</p>
              <p class="position">Head of Partner Engagement</p>
            </div>
          </div>
          <p class="descr">Contact us to learn about our solutions:</p>

          <ul class="list">
            <li>General inquiry</li>
            <li>Price quote</li>
            <li>Project evaluation</li>
            <li>Questions on tools we use</li>
          </ul>
        </div>
      </div>
      <div class="awards"></div>
    `
      ), t = T("section#contact-us .container");
      t && (document.head.insertAdjacentHTML("beforeend", `<style>${je}</style>`), t.insertAdjacentHTML("afterbegin", e), this.select(), this.submit());
    }
    submit() {
      const e = T(".crs-contact .form");
      e && e.addEventListener("submit", async (t) => {
        t.preventDefault();
        const s = e.querySelectorAll("inputs");
        let a = !0;
        if (s.forEach((r) => {
          let l = !0;
          const n = r.value.trim();
          if (r.id === "os-firstname" || r.id === "os-lastname") {
            if (r.id === "os-lastname" && n === "")
              return;
            l = /^[A-Za-z\s]+$/.test(n);
          } else
            r.id === "os-email" && (l = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n));
          l ? r.classList.remove("invalid") : (r.classList.add("invalid"), a = !1), r.addEventListener("input", () => {
            r.classList.remove("invalid");
          });
        }), !a)
          return;
        const o = new FormData(e);
        try {
          await re({
            id: Fi,
            data: o
          }) && (window.location.href = "/success");
        } catch (r) {
          console.log(r);
        }
      });
    }
    select() {
      const e = T(".crs-contact .select details"), t = T(".crs-contact .select details summary"), s = T(".crs-contact .select details ul");
      !s || !e || !t || (s.addEventListener("click", (a) => {
        var l;
        const r = a.target.closest("li");
        r && (e.querySelectorAll("label").forEach((n) => {
          n.classList.remove("selected");
        }), (l = r.querySelector("label")) == null || l.classList.add("selected"), t && (t.textContent = r.textContent, t.classList.add("selected")), e.removeAttribute("open"));
      }), window.addEventListener("click", (a) => {
        a.target.closest(".select") || e.removeAttribute("open");
      }));
    }
    events() {
      var e, t;
      N(".crs-contact", "exp_content_based_section_11", "Section", "Web form Contacts"), (e = T(".crs-contact")) == null || e.addEventListener("mousedown", (s) => {
        const a = s.target, o = a.closest(".select"), r = a.closest("button[type=submit]"), l = a.closest(".privacy-link a");
        o && P("exp_content_based_dropdown_01", "I need help with", "click", "Web form Contacts"), r && P("exp_content_based_button_21", "Contact US", "click", "Web form Contacts"), l && P("exp_content_based_link_02", "Privacy Policy", "click", "Web form Contacts");
      }), (t = T(".crs-contact form")) == null || t.addEventListener("change", (s) => {
        const a = s.target, o = {
          "#os-firstname": { event: "exp_content_based_input_08", label: "First Name" },
          "#os-lastname": { event: "exp_content_based_input_09", label: "Last Name" },
          "#os-email": { event: "exp_content_based_input_10", label: "Email" }
        };
        for (const r in o)
          if (a.closest(r)) {
            const { event: n, label: d } = o[r];
            P(n, d, "input", "Web form Contacts");
            break;
          }
      });
    }
    init() {
      this.render(), this.events();
    }
  }
  class ss {
    constructor() {
      this.init();
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="crs-contact estimate">
        <header>
          <h2 class="title">Transform Your Business with Our Custom Tech Solutions</h2>
        </header>
        <div class="form-container right">
          <form class="form" action="">
            <div class="select">
              <details>
                <summary>I need help with</summary>
                <ul>
                  <li>
                    <label
                      ><input type="radio" name="appeal" value="Bringing my vision to life" />Bringing my vision to
                      life</label
                    >
                  </li>
                  <li>
                    <label
                      ><input type="radio" name="appeal" value="Optimizing my business" />Optimizing my business</label
                    >
                  </li>
                  <li>
                    <label
                      ><input type="radio" name="appeal" value="Scaling up for growth" />Scaling up for growth</label
                    >
                  </li>
                  <li>
                    <label><input type="radio" name="appeal" value="General inquiry" />General inquiry</label>
                  </li>
                  <li>
                    <label><input type="radio" name="appeal" value="Other" />Other</label>
                  </li>
                </ul>
              </details>
            </div>
            <label>
              <input type="text" name="firstname" id="os-firstname" placeholder="" data-required />
              <span class="placeholder">First Name</span>
              <div class="error">Please enter a valid name</div>
            </label>
            <label>
              <input type="text" name="lastname" id="os-lastname" placeholder="" />
              <span class="placeholder">Last Name</span>
            </label>
            <label>
              <input type="email" name="email" id="os-email" placeholder="" data-required />
              <span class="placeholder"> Business Email</span>
              <div class="error">Please enter a valid email</div>
            </label>
            <label>
              <input type="tel" name="phone" id="os-phone" placeholder="" />
              <span class="placeholder">Phone number</span>
              <div class="error">Please enter a valid phone number</div>
            </label>
            <div class="actions">
              <button type="submit">Book a free call now</button>
              <div class="privacy">
                <div class="privacy-link">
                  By submitting, I agree to Keenethics’ <a href="/privacy-policy">Privacy Policy</a>
                </div>
                <div class="privacy-descr">
                  <span>${ye}</span>
                  <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="estimate-container left">
          <h2 class="title">Transform Your Business with Our Custom Tech Solutions</h2>
          <p class="descr">Schedule a free consultation to discover how Keenethics team can:</p>

          <ul class="list">
            <li>Enhance your web/app presence with state-of-the-art development</li>
            <li>Personalize your project with our comprehensive tech stack</li>
            <li>Deliver high-quality, scalable software tailored to your industry</li>
            <li>Commit to clear communication and project transparency</li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="awards"></div>
      </div>
    `
      ), t = T("#contacts-page");
      t && (document.head.insertAdjacentHTML("beforeend", `<style>${je}</style>`), t.insertAdjacentHTML("afterbegin", `<div class="container">${e}</div>`), this.select(), this.submit());
    }
    submit() {
      const e = T(".crs-contact .form");
      e && e.addEventListener("submit", async (t) => {
        let s = !0;
        t.preventDefault(), $(".crs-contact input").forEach((r) => {
          let l = !0;
          const n = r.value.trim();
          if (r.id === "os-firstname" || r.id === "os-lastname") {
            if (r.id === "os-lastname" && n === "")
              return;
            l = /^[A-Za-z\s]+$/.test(n);
          } else
            r.id === "os-email" ? l = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n) : r.id === "os-phone" && n !== "" && (l = /^\+?[0-9\s]+$/.test(n));
          l ? r.classList.remove("invalid") : (r.classList.add("invalid"), s = !1), r.addEventListener("input", () => {
            r.classList.remove("invalid");
          });
        });
        const o = new FormData(e);
        if (s)
          try {
            await re({
              id: Ni,
              data: o
            }) && (window.location.href = "/success");
          } catch (r) {
            console.log(r);
          }
      });
    }
    select() {
      const e = T(".crs-contact .select details"), t = T(".crs-contact .select details summary"), s = T(".crs-contact .select details ul");
      !s || !e || !t || (s.addEventListener("click", (a) => {
        var l;
        const r = a.target.closest("li");
        r && (e.querySelectorAll("label").forEach((n) => {
          n.classList.remove("selected");
        }), (l = r.querySelector("label")) == null || l.classList.add("selected"), t && (t.textContent = r.textContent, t.classList.add("selected")), e.removeAttribute("open"));
      }), window.addEventListener("click", (a) => {
        a.target.closest(".select") || e.removeAttribute("open");
      }));
    }
    events() {
      var e, t;
      N(".crs-contact.estimate", "exp_content_based_section_12", "Section", "Web form Estimate"), (e = T(".crs-contact")) == null || e.addEventListener("mousedown", (s) => {
        const a = s.target, o = a.closest(".select"), r = a.closest("button[type=submit]"), l = a.closest(".privacy-link a");
        o && P("exp_content_based_dropdown_02", "I need help with", "click", "Web form Estimate"), r && P("exp_content_based_button_22", "Book a free call now", "click", "Web form Estimate"), l && P("exp_content_based_link_03", "Privacy Policy", "click", "Web form Estimate");
      }), (t = T(".crs-contact form")) == null || t.addEventListener("change", (s) => {
        const a = s.target, o = {
          "#os-firstname": { event: "exp_content_based_input_11", label: "First Name" },
          "#os-lastname": { event: "exp_content_based_input_12", label: "Last Name" },
          "#os-email": { event: "exp_content_based_input_13", label: "Email" },
          "#os-phone": { event: "exp_content_based_input_14", label: "Phone number" }
        };
        for (const r in o)
          if (a.closest(r)) {
            const { event: n, label: d } = o[r];
            P(n, d, "input", "Web form Estimate");
            break;
          }
      });
    }
    init() {
      this.render(), this.events();
    }
  }
  const os = (
    /* HTML */
    `
  <div class="step-container">
    <div class="left contacts">
      <div class="block">
        <h5>Let’s Connect</h5>
        <p>Share your contact details so we can tailor your estimate and assist you further.</p>
        <div class="form-control name">
          <label>
            <input type="text" name="firstname" id="os-firstname" placeholder="" data-required />
            <span class="placeholder">First Name</span>
            <div class="error">Please enter a valid name</div>
          </label>
          <label>
            <input type="text" name="lastname" id="os-lastname" placeholder="" />
            <span class="placeholder">Last Name</span>
          </label>
        </div>
        <div class="form-control">
          <label>
            <input type="email" name="email" id="os-email" placeholder="" data-required />
            <span class="placeholder"> Business Email</span>
            <div class="error">Please enter a valid email</div>
          </label>
        </div>
        <div class="form-control">
          <textarea name="details" id="details" placeholder="Share your details here"></textarea>
          <button type="submit" class="btn-primary btn-primary_accent">Get My Estimate</button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="block with-hero">
        <img src="${D}/daria.webp" alt="Daria Hlavcheva" />
        <div class="info">
          <p class="name">Daria Hlavcheva</p>
          <p class="position">Head of Partner Engagement</p>
        </div>
      </div>
    </div>
  </div>
`
  ), as = (
    /* HTML */
    `
  <div class="step-container">
    <div class="left">
      <div class="block">
        <h5>Rate the Complexity of Your Project</h5>
        <p>Pick what suits your project best.</p>
        <div class="form-control desktop">
          <label for="complexity-simple">
            <input type="radio" name="complexity" id="complexity-simple" value="Simple Website" />
            Simple Website
          </label>

          <label for="complexity-3">
            <input type="radio" name="complexity" id="complexity-3" value="Web or Mobile App with 3+ Features" />
            Web or Mobile App with 3+ Features
          </label>

          <label for="complexity-complex">
            <input type="radio" name="complexity" id="complexity-complex" value="Complex Digital Solution" />
            Complex Digital Solution
          </label>

          <label for="complexity-platform">
            <input type="radio" name="complexity" id="complexity-platform" value="Highly Complex Platform (like SAP or Netflix)" />
            Highly Complex Platform (like SAP or Netflix)
          </label>
        </div>
        <div class="form-control mobile select">
          <details>
            <summary>Pick what suits your project best</summary>
            <ul>
              <li>
                <label>
                  <input type="radio" name="complexity" value="Simple Website" />
                  Simple Website
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="complexity" value="Web or Mobile App with 3+ Features" />
                  Web or Mobile App with 3+ Features
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="complexity" value="Complex Digital Solution" />
                  Complex Digital Solution
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="complexity" value="Highly Complex Platform (like SAP or Netflix)" />
                  Highly Complex Platform (like SAP or Netflix)
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="block">
        <h5>Choose Your Project's Goal</h5>
        <p>Each goal includes the previous ones' features</p>
        <div class="form-control desktop">
          <label for="goal-discovery">
            <input type="radio" name="goal" id="goal-discovery" value="Discovery (2-3 weeks)" />
            Discovery (2-3 weeks)
          </label>

          <label for="goal-prototype">
            <input type="radio" name="goal" id="goal-prototype" value="Clickable Prototype (2-3 weeks)" />
            Clickable Prototype (2-3 weeks)
          </label>

          <label for="goal-concept">
            <input type="radio" name="goal" id="goal-concept" value="Proof of Concept (PoC) (1.5-2 months)" />
            Proof of Concept (PoC) (1.5-2 months)
          </label>

          <label for="goal-mvp">
            <input type="radio" name="goal" id="goal-mvp" value="Minimum Viable Product (MVP) (3-4 months)" />
            Minimum Viable Product (MVP) (3-4 months)
          </label>

          <label for="goal-complete">
            <input type="radio" name="goal" id="goal-complete" value="Complete Solution (4+ months)" />
            Complete Solution (4+ months)
          </label>
        </div>
        <div class="form-control mobile select">
          <details>
            <summary>Pick what suits your project best</summary>
            <ul>
              <li>
                <label>
                  <input type="radio" name="goal" value="Discovery (2-3 weeks)" />
                  Discovery (2-3 weeks)
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="goal" value="Clickable Prototype (2-3 weeks)" />
                  Clickable Prototype (2-3 weeks)
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="goal" value="Proof of Concept (PoC) (1.5-2 months)" />
                  Proof of Concept (PoC) (1.5-2 months)
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="goal" value="Minimum Viable Product (MVP) (3-4 months)" />
                  Minimum Viable Product (MVP) (3-4 months)
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="goal" value="Complete Solution (4+ months)" />
                  Complete Solution (4+ months)
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
`
  ), rs = (
    /* HTML */
    `
  <div class="step-container">
    <div class="left">
      <div class="block">
        <h5>Do You Require Payment/Subscription Integration?</h5>
        <div class="form-control">
          <label for="payment-integration-yes">
            <input type="radio" name="payment-integration" id="payment-integration-yes" value="Yes" />
            Yes
          </label>
          <label for="payment-integration-no">
            <input type="radio" name="payment-integration" id="payment-integration-no" value="No" />
            No
          </label>
          <label for="payment-integration-not-sure">
            <input type="radio" name="payment-integration" id="payment-integration-not-sure" value="Not Sure" />
            Not Sure
          </label>
        </div>
      </div>
      <div class="block">
        <h5>Will Your Project Include AI Integration?</h5>
        <div class="form-control">
          <label for="ai-integration-yes">
            <input type="radio" name="ai-integration" id="ai-integration-yes" value="Yes" />
            Yes
          </label>
          <label for="ai-integration-no">
            <input type="radio" name="ai-integration" id="ai-integration-no" value="No" />
            No
          </label>
          <label for="ai-integration-not-sure">
            <input type="radio" name="ai-integration" id="ai-integration-not-sure" value="No Sure" />
            Not Sure
          </label>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="block">
        <h5>How Many Integrations with Third-Party Services Do You Need?</h5>
        <div class="form-control">
          <label for="third-party-integrations-1-3">
            <input type="radio" name="third-party-integrations" id="third-party-integrations-1-3" value="1 to 3" />
            1 to 3
          </label>
          <label for="third-party-integrations-3-5">
            <input type="radio" name="third-party-integrations" id="third-party-integrations-3-5" value="3 to 5" />
            3 to 5
          </label>
          <label for="third-party-integrations-more-than-5">
            <input type="radio" name="third-party-integrations" id="third-party-integrations-more-than-5" value="More than 5" />
            More than 5
          </label>
        </div>
      </div>
      <div class="block">
        <h5>Do You Need an Admin Panel?</h5>
        <div class="form-control">
          <label for="admin-panel-yes">
            <input type="radio" name="admin-panel" id="admin-panel-yes" value="Yes" />
            Yes
          </label>
          <label for="admin-panel-no">
            <input type="radio" name="admin-panel" id="admin-panel-no" value="No" />
            No
          </label>
          <label for="admin-panel-not-sure">
            <input type="radio" name="admin-panel" id="admin-panel-not-sure" value="Not Sure" />
            Not Sure
          </label>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="block flex">
        <h5>Which Compliance Standards Does Your Project Need to Meet? (Select all that apply)</h5>
        <div class="form-control checkboxes">
          <label for="compliance-standards-gdpr">
            <input type="checkbox" name="compliance-standards" id="compliance-standards-gdpr" value="GDPR" />
            <span></span>
            GDPR
          </label>
          <label for="compliance-standards-hipaa">
            <input type="checkbox" name="compliance-standards" id="compliance-standards-hipaa" value="HIPAA" />
            <span></span>
            HIPAA
          </label>
        </div>
      </div>
    </div>
  </div>
`
  ), ns = (
    /* HTML */
    `
  <div class="step-container">
    <div class="left">
      <div class="block">
        <h5>What's Your Project Development Path?</h5>
        <p>Choose the option that best describes your initial focus</p>
        <div class="form-control desktop">
          <label for="dev_path-design">
            <input type="radio" name="dev_path" id="dev_path-design" value="Design Only" />
            Design Only
          </label>

          <label for="dev_path-mob">
            <input type="radio" name="dev_path" id="dev_path-mob" value="Mobile App Only" />
            Mobile App Only
          </label>

          <label for="dev_path-web">
            <input type="radio" name="dev_path" id="dev_path-web" value="Web App Only" />
            Web App Only
          </label>

          <label for="dev_path-web_mob">
            <input type="radio" name="dev_path" id="dev_path-web_mob" value="Mobile & Web" />
            Mobile & Web
          </label>
        </div>
        <div class="form-control mobile select">
          <details>
            <summary>Pick what suits your project best</summary>
            <ul>
              <li>
                <label for="dev_path-design-mob">
                  <input type="radio" name="dev_path" id="dev_path-design-mob" value="Design Only" />
                  Design Only
                </label>
              </li>
              <li>
                <label for="dev_path-mob-mob">
                  <input type="radio" name="dev_path" id="dev_path-mob-mob" value="Mobile App Only" />
                  Mobile App Only
                </label>
              </li>
              <li>
                <label for="dev_path-web-mob">
                  <input type="radio" name="dev_path" id="dev_path-web-mob" value="Web App Only" />
                  Web App Only
                </label>
              </li>
              <li>
                <label for="dev_path-web_mob-mob">
                  <input type="radio" name="dev_path" id="dev_path-web_mob-mob" value="Mobile & Web" />
                  Mobile & Web
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div class="block">
        <h5>What's Your Current Design Stage?</h5>
        <p>Inform us about the design assets you already have.</p>
        <div class="form-control desktop">
          <label for="design_stage-need">
            <input type="radio" name="design_stage" id="design_stage-need" value="We Need a Design" />
            We Need a Design
          </label>

          <label for="design_stage-have">
            <input type="radio" name="design_stage" id="design_stage-have" value="We Already Have a Design" />
            We Already Have a Design
          </label>

          <label for="design_stage-sketches">
            <input type="radio" name="design_stage" id="design_stage-sketches" value="We Have Some Sketches" />
            We Have Some Sketches
          </label>
        </div>
        <div class="form-control select mobile">
          <details>
            <summary>Select a design stage</summary>
            <ul>
              <li>
                <label for="design_stage-need-mob">
                  <input type="radio" name="design_stage" id="design_stage-need-mob" value="We Need a Design" />
                  We Need a Design
                </label>
              </li>
              <li>
                <label for="design_stage-have-mob">
                  <input type="radio" name="design_stage" id="design_stage-have-mob" value="We Already Have a Design" />
                  We Already Have a Design
                </label>
              </li>
              <li>
                <label for="design_stage-sketches-mob">
                  <input
                    type="radio"
                    name="design_stage"
                    id="design_stage-sketches-mob"
                    value="We Have Some Sketches"
                  />
                  We Have Some Sketches
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="block">
        <h5>Which Technology Framework Suits Your Project?</h5>
        <p>Select the technology that aligns with your development strategy.</p>
        <div class="form-control desktop">
          <label for="framework-custom">
            <input type="radio" name="framework" id="framework-custom" value="Custom Development" />
            Custom Development
          </label>
          <label for="framework-no-code">
            <input type="radio" name="framework" id="framework-no-code" value="No-Code" />
            No-Code
          </label>
          <label for="framework-not-sure">
            <input type="radio" name="framework" id="framework-not-sure" value="Not Sure" />
            Not Sure
          </label>
        </div>
        <div class="form-control mobile select">
          <details>
            <summary>Select a framework</summary>
            <ul>
              <li>
                <label for="framework-custom-mob">
                  <input type="radio" name="framework" id="framework-custom-mob" value="Custom Development" />
                  Custom Development
                </label>
              </li>
              <li>
                <label for="framework-no-code-mob">
                  <input type="radio" name="framework" id="framework-no-code-mob" value="No-Code" />
                  No-Code
                </label>
              </li>
              <li>
                <label for="framework-not-sure-mob">
                  <input type="radio" name="framework" id="framework-not-sure-mob" value="Not Sure" />
                  Not Sure
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div class="block">
        <h5>Anticipated Monthly User Base</h5>
        <p>Estimate your expected user engagement to help us tailor our services.</p>
        <div class="form-control desktop">
          <label for="userbase-up-to-100">
            <input type="radio" name="userbase" id="userbase-up-to-100" value="Up to 100 Users" />
            Up to 100 Users <span class="os-tooltip" data-tooltip="For projects expecting a modest audience."> ${K}</span>
          </label>
          <label for="userbase-100-to-1000">
            <input type="radio" name="userbase" id="userbase-100-to-1000" value="100-1,000 Users" />
            100-1,000 Users <span class="os-tooltip" data-tooltip="If you anticipate a growing user base."> ${K}</span>
          </label>
          <label for="userbase-1000-to-10000">
            <input type="radio" name="userbase" id="userbase-1000-to-10000" value="1,000-10,000 Users" />
            1,000-10,000 Users <span class="os-tooltip" data-tooltip="Suitable for projects with significant user engagement."> ${K}</span>
          </label>
          <label for="userbase-10000-plus">
            <input type="radio" name="userbase" id="userbase-10000-plus" value="10,000+ Users" />
            10,000+ Users <span class="os-tooltip" data-tooltip="For projects aiming for a large scale audience."> ${K}</span>
          </label>
        </div>
        <div class="form-control mobile select">
          <details>
            <summary>Select a userbase</summary>
            <ul>
              <li>
                <label for="userbase-up-to-100-mob">
                  <input type="radio" name="userbase" id="userbase-up-to-100-mob" value="Up to 100 Users" />
                  Up to 100 Users
                </label>
              </li>
              <li>
                <label for="userbase-100-to-1000-mob">
                  <input type="radio" name="userbase" id="userbase-100-to-1000-mob" value="100-1,000 Users" />
                  100-1,000 Users
                </label>
              </li>
              <li>
                <label for="userbase-1000-to-10000-mob">
                  <input type="radio" name="userbase" id="userbase-1000-to-10000-mob" value="1,000-10,000 Users" />
                  1,000-10,000 Users
                </label>
              </li>
              <li>
                <label for="userbase-10000-plus-mob">
                  <input type="radio" name="userbase" id="userbase-10000-plus-mob" value="10,000+ Users" />
                  10,000+ Users
                </label>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  </div>
`
  ), ls = `.calculator-form{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:40px;padding:60px;border-radius:20px;background:#12233d;background:var(--blue-800-tangaroa, #12233d);font-family:Raleway}@media (max-width: 768px){.calculator-form{padding:30px 16px;gap:24px}}.calculator-form header{display:grid;grid-gap:12px;gap:12px}.calculator-form header .title{color:#fff;color:var(--White, #fff);font-size:32px;font-weight:700;line-height:40px;font-feature-settings:lining-nums proportional-nums;font-variant-numeric:lining-nums proportional-nums}.calculator-form header .description{color:#fff;color:var(--gray-0-white, #fff);font-size:16px;font-weight:400;line-height:24px;margin:0}.calculator-form header .step-visualization{display:grid;grid-gap:12px;gap:12px}.calculator-form header .step-visualization .current{color:#fff;color:var(--White, #fff);font-size:32px;font-weight:700;line-height:40px;font-variant-numeric:lining-nums proportional-nums;font-feature-settings:"clig" off,"liga" off,lining-nums proportional-nums,lining-nums proportional-nums}.calculator-form header .step-visualization .step-progress{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:18px}.calculator-form header .step-visualization .step-progress .item{border-radius:8px;height:4px;width:100%;background:#d9d9d91a}.calculator-form header .step-visualization .step-progress .item.active{background:#d62c2c;background:var(--red-600-valencia, #d62c2c)}.calculator-form fieldset{width:100%}.calculator-form .step-container{display:grid;grid-template-columns:1fr 1fr;grid-gap:40px;gap:40px}@media (max-width: 768px){.calculator-form .step-container{grid-template-columns:1fr;gap:24px}}.calculator-form .step-container .left{grid-column:1 / 2;grid-row:1 / 2;display:grid;grid-gap:40px;gap:40px}@media (max-width: 768px){.calculator-form .step-container .left{grid-column:1 / 2;grid-row:1 / 2}}.calculator-form .step-container .right{grid-column:2 / 3;grid-row:1 / 2;display:grid;grid-gap:40px;gap:40px}@media (max-width: 768px){.calculator-form .step-container .right{grid-column:1 / 2;grid-row:2 / 3}}.calculator-form .step-container .bottom{grid-column:1 / 3;grid-row:2 / 3}.calculator-form .step-container .block{padding:40px;border-radius:8px;background:#26354d}@media (max-width: 768px){.calculator-form .step-container .block{padding:22px 16px}}.calculator-form .step-container .block.flex{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:54px}.calculator-form .step-container .block.flex h5{flex:1 1 60%}.calculator-form .step-container .block h5{color:#fff;color:var(--gray-0-white, #fff);font-size:24px;font-weight:700;line-height:32px}.calculator-form .step-container .block p{color:#fff;color:var(--gray-0-white, #fff);font-family:Raleway;font-size:14px;font-weight:400;line-height:25px;margin-top:8px}.calculator-form .step-container .block .form-control{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-wrap:wrap;gap:14px;margin-top:24px}@media (max-width: 768px){.calculator-form .step-container .block .form-control.desktop{display:none}}.calculator-form .step-container .block .form-control.mobile{display:none}@media (max-width: 768px){.calculator-form .step-container .block .form-control.mobile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}}.calculator-form .step-container .block .form-control.select{position:relative}.calculator-form .step-container .block .form-control.select details{border-radius:8px;width:100%;background:#fff;cursor:pointer}.calculator-form .step-container .block .form-control.select details summary{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:8px;background:#fff;background:var(--gray-0-white, #fff);height:100%;padding:12px 25px 12px 16px;color:#6f7a88;color:var(--gray-550-clasic-gray, #6f7a88);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.calculator-form .step-container .block .form-control.select details summary.selected{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:22px}.calculator-form .step-container .block .form-control.select details summary[data-choosen]{color:#12233d;font-size:16px;font-weight:700}.calculator-form .step-container .block .form-control.select details summary::marker{content:none;display:none}.calculator-form .step-container .block .form-control.select details summary::-webkit-details-marker{content:none;display:none}.calculator-form .step-container .block .form-control.select details summary:after{content:"";background-image:url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');background-size:contain;width:24px;height:24px;position:absolute;top:50%;right:15px;transform:rotate(180deg) translateY(50%)}.calculator-form .step-container .block .form-control.select details[open] summary:after{transform:rotate(0) translateY(-50%)}.calculator-form .step-container .block .form-control.select details[open] ul,.calculator-form .step-container .block .form-control.select details[open] label{cursor:pointer}.calculator-form .step-container .block .form-control.select details[open] ul{position:absolute;top:61px;border-radius:8px;box-shadow:0 4px 4px #00000040;left:0;display:grid;grid-gap:8px;gap:8px;background:#fff;width:100%;overflow:hidden;z-index:100;padding-top:12px}.calculator-form .step-container .block .form-control.select details[open] ul li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.calculator-form .step-container .block .form-control.select details[open] ul li label:hover{background-color:#f2f7ff}.calculator-form .step-container .block .form-control.select details[open] ul li label.selected{background-color:#f2f7ff}.calculator-form .step-container .block .form-control.select details[open] ul li label.selected:after{content:"";width:24px;height:24px;display:block;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L9.66118 17L19 7" stroke="%23D62C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.calculator-form .step-container .block .form-control.select details[open] input{position:absolute;left:0;opacity:0}.calculator-form .step-container .block .form-control.name{gap:24px;flex-wrap:nowrap}.calculator-form .step-container .block .form-control.checkboxes{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;margin:0;-moz-column-gap:115px;column-gap:115px;flex:1 1 40%}.calculator-form .step-container .block .form-control label:has(input[type=radio]):not(details label){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:flex-start;border-radius:31px;font-feature-settings:"clig" off,"liga" off;border:1px solid #6f7a88;border:1px solid var(--gray-550-clasic-gray, #6f7a88);padding:9px 16px;color:#fff;color:var(--gray-0-white, #fff);font-size:14px;font-weight:600;line-height:14px;cursor:pointer}@media (max-width: 768px){.calculator-form .step-container .block .form-control label:has(input[type=radio]):not(details label){justify-content:flex-start;line-height:22px}}.calculator-form .step-container .block .form-control label:has(input[type=radio]):not(details label) input[type=radio]{display:none}.calculator-form .step-container .block .form-control label:has(input[type=radio]):not(details label):has(input[type=radio]:checked){background:#fff;padding:9px 16px;color:#1f2733;color:var(--Gray---800, #1f2733)}.calculator-form .step-container .block .form-control label:has(input[type=checkbox]){display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:center;gap:20px;color:#fff;color:var(--gray-0-white, #fff);font-size:14px;font-weight:600;line-height:100%;text-transform:uppercase}.calculator-form .step-container .block .form-control label:has(input[type=checkbox]) input[type=checkbox]{width:30px;height:30px;accent-color:#d62c2c;border-radius:8px;display:none}.calculator-form .step-container .block .form-control label:has(input[type=checkbox]) span{width:30px;height:30px;border-radius:4px;border:1px solid #6f7a88;border:1px solid var(--gray-550-clasic-gray, #6f7a88)}.calculator-form .step-container .block .form-control label:has(input[type=checkbox]) input[type=checkbox]:checked+span{background:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 31 30" fill="none"><rect x="0.5" width="30" height="30" rx="4" fill="%23D62C2C"/><path d="M9 16.25L12.8182 20L23 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.calculator-form .step-container .block .form-control label:has(.placeholder){position:relative;width:100%}.calculator-form .step-container .block .form-control label:has(.placeholder) .placeholder{position:absolute;top:50%;left:21px;transform:translateY(-50%);font-size:16px;font-weight:600;color:#6f7a88;line-height:24px}.calculator-form .step-container .block .form-control label:has(.placeholder) input{width:100%;height:48px;color:#12233d;font-weight:700;font-size:16px;border:none;border-radius:8px;padding:12px 24px}.calculator-form .step-container .block .form-control label:has(.placeholder) .placeholder{display:none}.calculator-form .step-container .block .form-control label:has(.placeholder) input:-moz-placeholder-shown+.placeholder{display:block}.calculator-form .step-container .block .form-control label:has(.placeholder) input:placeholder-shown+.placeholder{display:block}.calculator-form .step-container .block .form-control label:has(.placeholder) input[data-required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.calculator-form .step-container .block .form-control label:has(.placeholder) input.invalid{border:2px solid #d62c2c}.calculator-form .step-container .block .form-control label:has(.placeholder) input.invalid~.error{visibility:visible}.calculator-form .step-container .block .form-control label:has(.placeholder) .error{color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.calculator-form .step-container .block .form-control textarea{width:100%;height:120px;color:#12233d;font-weight:700;font-size:16px;padding:12px 24px;border-radius:8px}.calculator-form .step-container .block .form-control textarea::-moz-placeholder{color:#6f7a88;font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.calculator-form .step-container .block .form-control textarea::placeholder{color:#6f7a88;font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.calculator-form .step-container .block .form-control button[type=submit]{margin-top:24px}.calculator-form #next-button,.calculator-form button[type=submit]{width:376px;max-width:100%;height:48px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;font-size:16px;font-weight:700;line-height:24px}.calculator-form button[type=submit]{width:100%}.calculator-form #step1 .form-control{flex-direction:column;flex-wrap:nowrap}.calculator-form .with-hero{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:flex-end;padding:0!important;overflow:hidden}.calculator-form .with-hero img{position:relative;z-index:2;height:100%;-o-object-fit:cover;object-fit:cover}.calculator-form .with-hero .info{position:absolute;bottom:0;left:0;border-radius:0 8px;background:#3a4961e6;-webkit-backdrop-filter:blur(5.5px);backdrop-filter:blur(5.5px);width:312px;padding:21px 36px;z-index:3}.calculator-form .with-hero .info .name{color:#fff;color:var(--gray-0-white, #fff);font-size:18px;font-weight:700;line-height:24px}.calculator-form .with-hero .info .position{color:#fff;color:var(--gray-0-white, #fff);font-family:Raleway;font-size:16px;font-weight:400;line-height:24px;margin-top:6px}.calculator-form .with-hero:after{content:"";position:absolute;top:50%;left:32%;width:680px;height:680px;border:136px solid #d62c2c;border:136px solid var(--red-600-valencia, #d62c2c);border-radius:50%;z-index:1}.calculator-form .with-hero:before{content:"";position:absolute;top:-85%;left:-60%;width:680px;height:680px;border:136px solid #38455c;border:136px solid var(--red-600-valencia, #38455c);border-radius:50%;z-index:1}.os-tooltip{position:relative;width:20px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:inline-flex;justify-content:center;align-items:center;margin-left:5px;isolation:isolate}.os-tooltip:before,.os-tooltip:after{display:none;position:absolute;left:50%;transform:translate(-50%);z-index:100}.os-tooltip:before{content:attr(data-tooltip);top:-75px;width:210px;padding:12px;border-radius:8px;background:#fff;background:var(--gray-0-white, #fff);color:#1f2733;color:var(--Gray---800, #1f2733);font-feature-settings:lining-nums proportional-nums;font-variant-numeric:lining-nums proportional-nums;font-family:Raleway;font-size:12px;font-style:normal;font-weight:600;line-height:16px}.os-tooltip:after{content:"";top:-20px;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid #fff;border-top:10px solid var(--gray-0-white, #fff)}.os-tooltip:hover:before,.os-tooltip:hover:after{display:block}`;
  class cs {
    constructor(e) {
      this.currentStep = 0, this.state = [], this.container = document.querySelector(e), this.renderForm(), this.events();
    }
    events() {
      var e, t;
      N(
        "#calculator-form #step1",
        "exp_content_based_section_03",
        "Section",
        "Home PageSoftware Project Cost Estimator Steps 1/4"
      ), N(
        "#calculator-form #step2",
        "exp_content_based_section_04",
        "Section",
        "Home PageSoftware Project Cost Estimator Steps 2/4"
      ), N(
        "#calculator-form #step3",
        "exp_content_based_section_05",
        "Section",
        "Home PageSoftware Project Cost Estimator Steps 3/4"
      ), N(
        "#calculator-form #step4",
        "exp_content_based_section_06",
        "Section",
        "Home PageSoftware Project Cost Estimator Steps 4/4"
      ), (e = T("#calculator-form")) == null || e.addEventListener("click", (s) => {
        var m, b;
        s.stopPropagation();
        const a = T("#calculator-form"), o = Number(a.dataset.step);
        if (!o)
          return;
        console.log(o);
        const r = {
          1: "exp_content_based_button_08",
          2: "exp_content_based_button_10",
          3: "exp_content_based_button_12"
        }, l = {
          1: "Home PageSoftware Project Cost Estimator Steps 1/4",
          2: "Home PageSoftware Project Cost Estimator Steps 2/4",
          3: "Home PageSoftware Project Cost Estimator Steps 3/4"
        }, n = {
          1: "exp_content_based_button_09",
          2: "exp_content_based_button_11",
          3: "exp_content_based_button_13"
        }, d = s.target, p = d.closest('input[type="radio"]'), f = d.closest('input[type="checkbox"]'), g = d.closest("#next-button"), h = d.closest('button[type="submit"]');
        if (p || f) {
          const x = (b = (m = d.closest("label")) == null ? void 0 : m.textContent) == null ? void 0 : b.trim();
          P(r[o], `${x} Choice answers`, "click", l[o]);
        }
        g && P(n[o - 1], "Next", "click", l[o - 1]), h && P("exp_content_based_button_14", "Get My Estimate", "click", "Home PageSoftware Project Cost Estimator Steps 4/4");
      }), (t = T("#calculator-form")) == null || t.addEventListener("change", (s) => {
        const a = s.target, o = {
          "#os-firstname": { event: "exp_content_based_input_01", label: "First Name" },
          "#os-lastname": { event: "exp_content_based_input_02", label: "Last Name" },
          "#os-email": { event: "exp_content_based_input_03", label: "Email" },
          "#details": { event: "exp_content_based_input_04", label: "Details" }
        };
        for (const r in o)
          if (a.closest(r)) {
            const { event: n, label: d } = o[r];
            P(n, d, "input", "Home PageSoftware Project Cost Estimator Steps 4/4");
            break;
          }
      });
    }
    renderForm() {
      const e = document.createElement("form");
      e.id = "calculator-form", e.classList.add("calculator-form"), e.dataset.step = "1";
      const t = document.createElement("header");
      t.innerHTML = /* HTML */
      `
      <h2 class="title">Software Project Cost Estimator</h2>
      <p class="description">
        Embarking on a new software project? Our intuitive Cost Estimator is your first step towards turning your vision
        into reality. Receive a personalized cost range that aligns with your project’s objectives and ensures value for
        your investment.
      </p>

      <div class="step-visualization">
        <div class="current">${this.currentStep + 1}/4</div>

        <div class="step-progress">
          <span class="item active"></span>
          <span class="item"></span>
          <span class="item"></span>
          <span class="item"></span>
        </div>
      </div>
    `, e.prepend(t);
      for (let a = 0; a < 4; a++) {
        const o = this.renderStepForm(a);
        e.appendChild(o);
      }
      const s = document.createElement("button");
      s.id = "next-button", s.classList.add("btn-primary", "btn-primary_accent"), s.textContent = "Next", e.appendChild(s), this.container && (document.head.insertAdjacentHTML("beforeend", `<style>${ls}</style>`), this.container.appendChild(e), this.addNextButtonListener(e), this.select(), this.submitForm(e));
    }
    select() {
      window.addEventListener("click", (e) => {
        var r;
        const t = e.target, s = t.closest("#calculator-form .select details"), a = t.closest("#calculator-form .select li"), o = s == null ? void 0 : s.querySelector("#calculator-form .select summary");
        a && s && o ? (s.querySelectorAll("label").forEach((l) => {
          l.classList.remove("selected");
        }), (r = a.querySelector("label")) == null || r.classList.add("selected"), o.textContent = a.textContent, o.classList.add("selected"), s.removeAttribute("open")) : t.closest(".select") || $("#calculator-form .select details").forEach((n) => {
          n.removeAttribute("open");
        });
      });
    }
    submitForm(e) {
      e.addEventListener("submit", async (t) => {
        t.preventDefault();
        const s = e.querySelectorAll("#step4 input");
        let a = !0;
        if (s.forEach((n) => {
          let d = !0;
          const p = n.value.trim();
          if (n.id === "os-firstname" || n.id === "os-lastname") {
            if (n.id === "os-lastname" && p === "")
              return;
            d = /^[A-Za-z\s]+$/.test(p);
          } else
            n.id === "os-email" && (d = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p));
          d ? n.classList.remove("invalid") : (n.classList.add("invalid"), a = !1), n.addEventListener("input", () => {
            n.classList.remove("invalid");
          });
        }), !a)
          return;
        const o = [];
        e.querySelectorAll('input[name="compliance-standards"]:checked').forEach((n) => {
          const d = n.value;
          o.push(d);
        });
        const r = new FormData(e);
        r.append("compliance-standards", o.join(", "));
        const l = Object.fromEntries(r.entries());
        console.log(l);
        try {
          await re({ id: Gi, data: r }) && (window.location.href = "/success");
        } catch (n) {
          console.log("error", n);
        }
      });
    }
    renderStepForm(e) {
      const t = document.createElement("fieldset");
      switch (t.id = `step${e + 1}`, t.style.display = e === 0 ? "block" : "none", e) {
        case 0:
          t.innerHTML = as;
          break;
        case 1:
          t.innerHTML = ns;
          break;
        case 2:
          t.innerHTML = rs;
          break;
        case 3:
          t.innerHTML = os;
          break;
      }
      return t;
    }
    addNextButtonListener(e) {
      document.getElementById("next-button").addEventListener("click", (s) => {
        s.preventDefault(), this.currentStep < 3 && (document.querySelectorAll(
          `#step${this.currentStep + 1} input:checked`
        ).forEach((o) => {
          o.type === "checkbox" ? (this.state[o.name] || (this.state[o.name] = []), o.checked && this.state[o.name].push(o.value)) : this.state[o.name] = o.value;
        }), this.currentStep === 0 && this.shouldSkipSecondStep() ? this.currentStep += 2 : this.currentStep++, e.dataset.step = `${this.currentStep + 1}`, this.updateForm());
      });
    }
    calculatePrice() {
      let e = 0;
      const t = {
        "Simple Website": 2,
        "Web or Mobile App with 3+ Features": 5,
        "Complex Digital Solution": 7,
        "Highly Complex Platform (like SAP or Netflix)": 10
      }, s = {
        "Discovery (2-3 weeks)": 1e3,
        "Clickable Prototype (2-3 weeks)": 2e3,
        "Proof of Concept (PoC) (1.5-2 months)": 4e3,
        "Minimum Viable Product (MVP) (3-4 months)": 8e3,
        "Complete Solution (4+ months)": 12e3
      }, a = {
        "Design Only": 0.3,
        "Mobile App Only": 1,
        "Web App Only": 1,
        "Mobile & Web": 1.3
      }, o = {
        "Custom Development": 1,
        "No-Code": 0.6,
        "Not Sure": 1
      }, r = {
        "We Need a Design": 1,
        "We Already Have a Design": 0.7,
        "We Have Some Sketches": 0.3
      }, l = {
        "Up to 100 Users": 1,
        "100-1,000 Users": 1,
        "1,000-10,000 Users": 1,
        "10,000+ Users": 1.1
      }, n = {
        "payment-integration": 5,
        "ai-integration": 5,
        "third-party-integrations": {
          "1 to 3": 5,
          "3 to 5": 10,
          "More than 5": 15
        },
        "admin-panel": 5,
        "compliance-standards": {
          HIPAA: 15,
          GDPR: 15
        }
      }, d = t[this.state.complexity] || 1;
      this.state.goal && (this.state.goal.includes("Discovery") || this.state.goal.includes("Clickable Prototype")) ? e = (s[this.state.goal] || 0) + d * (this.state.goal.includes("Discovery") ? 200 : 500) : e = d * (s[this.state.goal] || 0), e *= a[this.state.dev_path] || 1, e *= o[this.state.framework] || 1, e *= r[this.state.design_stage] || 1, e *= l[this.state.userbase] || 1;
      let p = 0;
      for (const f in n) {
        const g = this.state[f];
        typeof n[f] == "object" ? p += n[f][g] || 0 : p += g === "Yes" ? n[f] : 0;
      }
      return e += e * (p / 100), e;
    }
    shouldSkipSecondStep() {
      return this.state.goal === "Discovery (2-3 weeks)" || this.state.goal === "Clickable Prototype (2-3 weeks)";
    }
    updateForm() {
      if (this.currentStep === 3) {
        const a = this.calculatePrice(), o = Math.max(a, 5e3 / 0.8), r = Math.round(o * 0.8), l = Math.round(o * 1.1), n = T("#calculator-form .title"), d = T("#calculator-form .description");
        n && d && (n.textContent = `Based on the details you've shared, we estimate  your project investment to be in the range of  $${r} to $${l}`, d.textContent = "What's next? This estimate is a starting point. Let’s refine it together and align it perfectly with your vision and resources.");
      }
      for (let a = 0; a < 4; a++) {
        const o = document.getElementById(`step${a + 1}`);
        o.style.display = a === this.currentStep ? "block" : "none";
      }
      const e = document.getElementById("next-button");
      e.style.display = this.currentStep === 3 ? "none" : "block";
      const t = document.querySelector(".step-visualization div");
      t && (t.textContent = `${this.currentStep + 1}/4`), document.querySelectorAll(".step-progress .item").forEach((a, o) => {
        o <= this.currentStep ? a.classList.add("active") : a.classList.remove("active");
      });
    }
  }
  Oe({ name: 'Keenethics: "Introduce content based on JBTD on HP"', dev: "OS" }), Ve("exp_content_based");
  class ds {
    constructor() {
      this.init();
    }
    init() {
      location.pathname === "/" && (document.head.insertAdjacentHTML("beforeend", `<style>${ji}</style>`), new Ge(), O(".aa-container .tabs").then(() => {
        const e = new Ye(".aa-container .tabs");
        e.addTab(ct), e.addTab(pt), e.addTab(dt);
      }), O(".aa-hero .aa-content").then(() => {
        new Ki(".aa-hero .aa-content");
      }), O(".aa-awards").then(() => {
        new be(".aa-awards");
      }), O(".aa-container .carousel").then(() => {
        new Bi(".aa-container .carousel").init();
      }), O(".calculator .form").then(() => {
        new cs(".calculator .form");
      }), O(".envision .form").then(() => {
        new Wi(".envision .form");
      }), O(".partners .blocks").then(() => {
        new Zi(".partners .blocks");
      }), O(".team .block").then(() => {
        new Ui(".team .block");
      }), O(".full-circle .block").then(() => {
        new $i(".full-circle .block");
      })), location.pathname === "/contacts" && O("section#contact-us .container").then(() => {
        new is(), new be("section#contact-us .awards");
      }), location.pathname === "/estimate" && O("#contacts-page .contact-us-form").then(() => {
        new ss(), new be("#contacts-page .awards");
      });
    }
  }
  new ds();
})();
