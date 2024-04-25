(function() {
  "use strict";
  const Pe = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, Ie = (i) => document.querySelectorAll(i), M = (i) => document.querySelector(i), Ae = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, Oe = "https://keenethics.com/wp-json/contact-form-7/v1/contact-forms";
  async function De({ id: i, data: e }) {
    const t = `${Oe}/${i}/feedback`;
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
  const $e = 22433, pe = "ourformSubmitted", fe = "noPhone", ue = `#contact-us{padding:96px 0 68px}#contact-us:before{content:"";background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='579' height='579' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='289.5' cy='289.5' r='229.5' stroke='%23F2F7FF' stroke-width='120'/%3E%3C/svg%3E");height:579px;left:-289px;position:absolute;top:-289px;width:579px;z-index:-1}.section-form-result__text{line-height:28px}.section-form-result__data .btn-primary:first-of-type{display:none;width:377px;max-width:100%}.form-row div:first-child{flex:0 0 100%;max-width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center}.form-row div:last-child{display:none!important}.form-row form.form>*{display:none}.form-row form.form>button{background-color:#2969cc;border:none;width:380px}section.contact-nav{display:none}.section-form-result__title{font-weight:700!important}.thanks-section{position:relative}.thanks-section h1{margin-bottom:24px;text-transform:none;color:#12233d;font-size:54px;font-weight:800;line-height:64px;text-align:center}.thanks-section .section-form-result__text{margin-bottom:32px;text-align:center}.thanks-section .section-form-result__img{bottom:-68px;position:absolute;right:-270px}.js-has-pseudo [csstools-has-37-2t-2r-38-2x-33-32-1m-2w-2p-37-14-1a-37-2t-2r-38-2x-33-32-19-2u-33-36-31-19-36-2t-37-39-30-38-2n-2n-2x-31-2v-15]:not(does-not-exist){position:relative}section:has(.section-form-result__img){position:relative}.crs-thform{font-family:Raleway;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px}.crs-thform form{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11px;width:380px}.crs-thform form input{border-radius:10px;border:solid 1px #e3e3e3;background-color:#fff;padding:12px;width:100%;font-size:16px;font-weight:600;text-align:left;color:#6f7a88;height:62px;color:#12233d}.crs-thform form .error{visibility:hidden;height:11px;line-height:11px;font-size:14px;color:#d62c2c}.crs-thform form button{padding:12px;width:100%;border:none;border-radius:8px;background-color:#2969cc;font-size:16px;font-weight:600;color:#fff;text-transform:uppercase;cursor:pointer;height:48px}@media (max-width: 768px){#contact-us{padding-top:48px}.section-form-result__title{font-size:42px!important;line-height:54px!important}.section-form-result__text br{display:none}.section-form-result__data{margin-bottom:0}.crs-thform{padding-left:15px;padding-right:15px;padding-bottom:25px}.crs-thform form{width:100%}.crs-thform form input{height:52px}}`;
  class Ge {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      var r;
      const e = (
        /* HTML */
        `
      <div class="crs-thform">
        <form>
          <input type="tel" name="phone" placeholder="Phone number" required />
          <div class="error">Please enter a valid phone</div>
          <button type="submit">send</button>
        </form>
      </div>
    `
      ), t = JSON.parse(localStorage.getItem(fe) || "false");
      if (!JSON.parse(localStorage.getItem(pe) || "false"))
        return;
      if (localStorage.removeItem(pe), t) {
        localStorage.removeItem(fe), document.head.insertAdjacentHTML("beforeend", `<style>${ue}</style>`);
        const p = M(".btn-primary");
        p.style.display = "inline-block";
        return;
      }
      const o = M(".section-form-result__data");
      o && (document.head.insertAdjacentHTML("beforeend", `<style>${ue}</style>`), o.insertAdjacentHTML("beforeend", e));
      const n = /^\+?[0-9\s]+$/, a = M(".h1.section-form-result__title");
      a && (a.textContent = "Thank you for your request!");
      const l = M(".text-2.section-form-result__text");
      l && (l.innerHTML = "We will get back to you within 1 business day. <br> Please provide your phone number to enable us to call you."), M(".crs-thform form").addEventListener("submit", async (p) => {
        p.preventDefault();
        const c = p.currentTarget, u = new FormData(c), w = Object.fromEntries(u.entries());
        if (!(!w.phone || !n.test(w.phone))) {
          try {
            await De({ id: $e, data: u });
          } catch (h) {
            const m = c.querySelector(".action .error");
            m && m.classList.add("show"), console.log("error", h);
          }
          M(".crs-thform").style.display = "none", M(".text-2.section-form-result__text").innerHTML = "We will get back to you within 1 business day.", M(".btn-primary").style.display = "inline-block";
        }
      }), (r = M(".crs-thform input")) == null || r.addEventListener("input", (p) => {
        const c = p.target.value, u = M(".crs-thform form .error");
        n.test(c) ? u.style.visibility = "" : u.style.visibility = "visible";
      });
    }
  }
  const Be = ".os-wrapper{position:relative}.os-article-info{position:absolute;max-width:430px;bottom:0;padding-left:85px}.os-article-info .article__categories{margin:0}.d-block.d-xl-none .article__share{margin-bottom:24px}";
  class je {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Be}</style>`), this.mobileChanges();
    }
    headerChanges() {
      const e = M(".article__img"), t = M(".article__authors"), s = M(".publish-times.article__times"), o = M(".article__categories"), n = document.createElement("div");
      n.classList.add("os-wrapper"), e.replaceWith(n);
      const a = document.createElement("div");
      a.classList.add("os-article-info"), a.appendChild(t), a.appendChild(s), a.appendChild(o), n.appendChild(e), n.appendChild(a);
    }
    mobileChanges() {
      const e = M(".d-block.d-xl-none .article__share"), t = M(".d-block.d-xl-none .article__toc");
      console.log(t, e), t && e && (t == null || t.before(e));
    }
  }
  const Fe = ".os-share-btns{position:absolute;top:1040px;left:-webkit-calc(50% - 650px);left:-moz-calc(50% - 650px);left:calc(50% - 650px);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:8px}";
  class He {
    constructor() {
      this.init();
    }
    init() {
      console.log("Share buttons are initialized"), document.head.insertAdjacentHTML("beforeend", `<style>${Fe}</style>`), this.render();
    }
    render() {
      const e = location.href, t = (
        /* HTML */
        `<div class="os-share-btns">
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=${e}"
        target="_blank"
        class="share-social__item share-social__item_facebook d-inline-block"
      ></a>
      <a
        href="https://www.linkedin.com/shareArticle?mini=true&amp;url=${e}"
        target="_blank"
        class="share-social__item share-social__item_linkedin d-inline-block"
      ></a>
      <a
        href="https://twitter.com/intent/tweet?url=${e}&amp;text="
        target="_blank"
        class="share-social__item share-social__item_twitter d-inline-block"
      ></a>
    </div>`
      );
      document.body.insertAdjacentHTML("beforeend", t);
    }
  }
  const Ne = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
  <path d="M0 16 16 0M0 0l16 16" stroke="#12233D" stroke-width="1.5" />
</svg>`
  ), Ve = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
  <path
    d="M29.24 42.16c-.11 0-.25-.02-.36-.06-3.85-1.09-7.9-1.09-11.75 0-.71.2-1.46-.21-1.65-.92-.21-.7.21-1.45.92-1.64 4.33-1.23 8.89-1.23 13.23 0 .71.21 1.13.94.92 1.64-.2.6-.73.98-1.31.98ZM36.81 12.18c-1.99-4.02-5.84-6.99-10.31-7.97-4.67-1.03-9.47.08-13.13 3.03-3.68 2.93-5.77 7.32-5.77 12.02 0 4.96 2.98 10.16 7.46 13.16v1.6c-.02.53-.04 1.36.61 2.03.67.69 1.67.76 2.46.76h9.83c1.03 0 1.82-.28 2.36-.82.73-.75.71-1.71.69-2.22v-1.35c5.94-4 9.68-12.45 5.8-20.24ZM26.29 22.27l-2.05 3.56c-.27.46-.75.73-1.24.73-.25 0-.5-.06-.71-.19-.69-.4-.92-1.29-.54-1.96l1.63-2.83h-1.61c-.96 0-1.75-.42-2.17-1.13-.42-.73-.38-1.61.1-2.46l2.05-3.56c.4-.69 1.28-.92 1.95-.54.69.4.92 1.28.54 1.96l-1.63 2.83h1.61c.96 0 1.75.42 2.17 1.13.42.73.38 1.63-.1 2.46Z"
    fill="#D62C2C"
  />
</svg>`
  ), me = (
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
  ), Re = ".os-sticky{position:fixed;bottom:10px;box-shadow:0 -4px 8px #00000012;border:none;background:#fff;padding:0;width:100vw;max-width:100vw;font-family:Raleway;z-index:999}@media (max-width: 1200px){.os-sticky{bottom:auto;top:50%;transform:translateY(-50%)}}.os-sticky .os-content{padding:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;cursor:pointer}@media (max-width: 768px){.os-sticky .os-content{flex-direction:column;align-items:flex-start;padding:10px 16px;gap:6px}}.os-sticky .os-content .os-close{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;top:29px;right:53px;border:none;background:none;width:25px;height:25px;cursor:pointer}@media (max-width: 768px){.os-sticky .os-content .os-close{top:16px;right:16px}}.os-sticky .os-content .os-close:focus{outline:none}.os-sticky .os-content span{color:#12233d;font-size:22px;font-weight:700;line-height:32px;text-transform:uppercase;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:14px}@media (max-width: 768px){.os-sticky .os-content span{font-size:14px;line-height:27px}}.os-sticky .os-content span svg{width:46px;height:46px}@media (max-width: 768px){.os-sticky .os-content span svg{display:none}}.os-sticky .os-wrap{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:12px;margin-right:70px}@media (max-width: 768px){.os-sticky .os-wrap{margin-right:0}}.os-sticky .os-wrap a{padding:12px 20px;text-align:center}@media (max-width: 768px){.os-sticky .os-wrap a{padding:14px 6px;font-size:12px}}.os-sticky::backdrop{display:none}";
  class qe {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Re}</style>`), console.log("Sticky is initialized"), this.render(), this.actions();
    }
    render() {
      const e = (
        /* HTML */
        `<dialog class="os-sticky">
      <div class="os-content">
        <button class="os-close" data-popup="close">${Ne}</button>
        <span>${Ve} What software solution are you looking for?</span>
        <div class="os-wrap">
          <a class="contacts-btn" href="/services-business-analysis#choose">Develop My Idea</a>
          <a class="contacts-btn" href="https://keenethics.com/services-ui-ux-design">Optimize My Business</a>
          <a class="contacts-btn" href="https://keenethics.com/services-dedicated-development-team#services">Scale My Project</a>
        </div>
      </div>
    </dialog> `
      );
      document.body.insertAdjacentHTML("beforeend", e);
    }
    actions() {
      const e = document.querySelector("dialog"), t = e.querySelector("[data-popup=close]"), o = document.querySelectorAll("h2:has(span[id])")[1];
      let n = window.scrollY, a = !1, l = !1;
      o.getBoundingClientRect().top < window.innerHeight && e.show(), window.addEventListener("scroll", () => {
        const p = window.scrollY;
        a = p > n, n = p, o.getBoundingClientRect().top < window.innerHeight && !l ? e.show() : a || e.close();
      }), t && t.addEventListener("click", () => {
        e.close(), l = !0;
      });
    }
  }
  const We = ".article__sticky{max-height:100vh!important}.article__sticky .book-call-banner,.article__sticky .article__share{display:none!important}.ux-audit-banner{--main-color: #12233d;top:196px;border-radius:20px;background:#12233d;background:var(--main-color);padding:24px;font-family:Raleway}.ux-audit-banner .os-content{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:20px}.ux-audit-banner .os-content .os-title{color:#fff;font-size:32px;font-weight:700;line-height:40px}.ux-audit-banner .os-content .os-subbanner{background:#fff;border-radius:8px;height:144px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}.ux-audit-banner .os-content .os-subbanner .os-subtitle{color:var(--main-color);font-size:54px;font-weight:900;line-height:30px}.ux-audit-banner .os-content .os-subbanner p{color:#d62c2c;font-size:14px;font-weight:700;line-height:24px}.ux-audit-banner .os-content .os-text{color:#fff;font-family:Raleway;font-size:18px;font-weight:500;line-height:150%}.article__sticky+.ux-audit-banner{position:-webkit-sticky;position:sticky}";
  class Ye {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${We}</style>`), console.log("Table of content is initialized"), this.uxAuditBanner();
    }
    uxAuditBanner() {
      const e = (
        /* HTML */
        `
      <div class="ux-audit-banner" style="top: 196px">
        <div class="os-content">
          <h3 class="os-title">Get Free UX Audit Guide</h3>
          <div class="os-subbanner">
            <h4 class="os-subtitle">UX AUDIT</h4>
            <p>Expert review & Heuristic evaluation</p>
          </div>
          <p class="os-text">Discover how a UX audit can cut development costs and enhance your ROI over time.</p>
          <a href="/estimate?target=audit" class="btn-primary btn-primary_accent"
            >Download Free Guide</a
          >
        </div>
      </div>
    `
      ), t = M(".article__sticky"), s = M(".d-block.d-xl-none .article__toc");
      t.insertAdjacentHTML("afterend", e), s && s.insertAdjacentHTML("afterend", e);
      const o = document.querySelector(".d-none .ux-audit-banner"), n = document.querySelector(".article__sticky");
      o.offsetHeight;
      let a = n.getBoundingClientRect().top;
      const l = n.scrollHeight, r = 100;
      n.style.height = `${Math.max(
        r,
        Math.min(window.innerHeight - 170 - l - a, l)
      )}px`, n.style.overflowY = "auto";
      let p = n.offsetHeight;
      if (o.style.top = `${p}px`, o && n) {
        const c = n.scrollHeight;
        window.addEventListener("scroll", () => {
          o.offsetHeight, p = n.offsetHeight, a = n.getBoundingClientRect().top;
          const u = 100;
          n.style.height = `${Math.max(
            u,
            Math.min(window.innerHeight - 170 - c - a, c)
          )}px`, n.style.overflowY = "auto", o.style.top = `${p + 100}px`;
        });
      }
    }
  }
  const Xe = "https://keenethics.com/wp-json/contact-form-7/v1/contact-forms";
  async function he({ id: i, data: e }) {
    const t = `${Xe}/${i}/feedback`;
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
  const Ue = 22435, Ke = 22436;
  function ge(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
  }
  function ee(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
      typeof i[t] > "u" ? i[t] = e[t] : ge(e[t]) && ge(i[t]) && Object.keys(e[t]).length > 0 && ee(i[t], e[t]);
    });
  }
  const we = {
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
  function N() {
    const i = typeof document < "u" ? document : {};
    return ee(i, we), i;
  }
  const Ze = {
    document: we,
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
  function $() {
    const i = typeof window < "u" ? window : {};
    return ee(i, Ze), i;
  }
  function Je(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
  }
  function Qe(i) {
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
  function te(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function W() {
    return Date.now();
  }
  function et(i) {
    const e = $();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
  }
  function tt(i, e) {
    e === void 0 && (e = "x");
    const t = $();
    let s, o, n;
    const a = et(i);
    return t.WebKitCSSMatrix ? (o = a.transform || a.webkitTransform, o.split(",").length > 6 && (o = o.split(", ").map((l) => l.replace(",", ".")).join(", ")), n = new t.WebKitCSSMatrix(o === "none" ? "" : o)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? o = n.m41 : s.length === 16 ? o = parseFloat(s[12]) : o = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? o = n.m42 : s.length === 16 ? o = parseFloat(s[13]) : o = parseFloat(s[5])), o || 0;
  }
  function Y(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
  }
  function it(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
  }
  function G() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (s != null && !it(s)) {
        const o = Object.keys(Object(s)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, a = o.length; n < a; n += 1) {
          const l = o[n], r = Object.getOwnPropertyDescriptor(s, l);
          r !== void 0 && r.enumerable && (Y(i[l]) && Y(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : G(i[l], s[l]) : !Y(i[l]) && Y(s[l]) ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : G(i[l], s[l])) : i[l] = s[l]);
        }
      }
    }
    return i;
  }
  function X(i, e, t) {
    i.style.setProperty(e, t);
  }
  function xe(i) {
    let {
      swiper: e,
      targetPosition: t,
      side: s
    } = i;
    const o = $(), n = -e.translate;
    let a = null, l;
    const r = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(e.cssModeFrameID);
    const p = t > n ? "next" : "prev", c = (w, h) => p === "next" && w >= h || p === "prev" && w <= h, u = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), a === null && (a = l);
      const w = Math.max(Math.min((l - a) / r, 1), 0), h = 0.5 - Math.cos(w * Math.PI) / 2;
      let m = n + h * (t - n);
      if (c(m, t) && (m = t), e.wrapperEl.scrollTo({
        [s]: m
      }), c(m, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [s]: m
          });
        }), o.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = o.requestAnimationFrame(u);
    };
    u();
  }
  function F(i, e) {
    return e === void 0 && (e = ""), [...i.children].filter((t) => t.matches(e));
  }
  function U(i) {
    try {
      console.warn(i);
      return;
    } catch {
    }
  }
  function K(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Je(e)), t;
  }
  function st(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
      const s = i.previousElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function nt(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
      const s = i.nextElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function V(i, e) {
    return $().getComputedStyle(i, null).getPropertyValue(e);
  }
  function Z(i) {
    let e = i, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function ve(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
      e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
    return t;
  }
  function ie(i, e, t) {
    const s = $();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
  }
  function A(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  let se;
  function ot() {
    const i = $(), e = N();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    };
  }
  function ye() {
    return se || (se = ot()), se;
  }
  let ne;
  function rt(i) {
    let {
      userAgent: e
    } = i === void 0 ? {} : i;
    const t = ye(), s = $(), o = s.navigator.platform, n = e || s.navigator.userAgent, a = {
      ios: !1,
      android: !1
    }, l = s.screen.width, r = s.screen.height, p = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), w = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = o === "Win32";
    let m = o === "MacIntel";
    const x = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !c && m && t.touch && x.indexOf(`${l}x${r}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), p && !h && (a.os = "android", a.android = !0), (c || w || u) && (a.os = "ios", a.ios = !0), a;
  }
  function be(i) {
    return i === void 0 && (i = {}), ne || (ne = rt(i)), ne;
  }
  let oe;
  function at() {
    const i = $(), e = be();
    let t = !1;
    function s() {
      const l = i.navigator.userAgent.toLowerCase();
      return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
    }
    if (s()) {
      const l = String(i.navigator.userAgent);
      if (l.includes("Version/")) {
        const [r, p] = l.split("Version/")[1].split(" ")[0].split(".").map((c) => Number(c));
        t = r < 16 || r === 16 && p < 2;
      }
    }
    const o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), n = s(), a = n || o && e.ios;
    return {
      isSafari: t || n,
      needPerspectiveFix: t,
      need3dFix: a,
      isWebView: o
    };
  }
  function lt() {
    return oe || (oe = at()), oe;
  }
  function dt(i) {
    let {
      swiper: e,
      on: t,
      emit: s
    } = i;
    const o = $();
    let n = null, a = null;
    const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    }, r = () => {
      !e || e.destroyed || !e.initialized || (n = new ResizeObserver((u) => {
        a = o.requestAnimationFrame(() => {
          const {
            width: w,
            height: h
          } = e;
          let m = w, x = h;
          u.forEach((b) => {
            let {
              contentBoxSize: d,
              contentRect: f,
              target: g
            } = b;
            g && g !== e.el || (m = f ? f.width : (d[0] || d).inlineSize, x = f ? f.height : (d[0] || d).blockSize);
          }), (m !== w || x !== h) && l();
        });
      }), n.observe(e.el));
    }, p = () => {
      a && o.cancelAnimationFrame(a), n && n.unobserve && e.el && (n.unobserve(e.el), n = null);
    }, c = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof o.ResizeObserver < "u") {
        r();
        return;
      }
      o.addEventListener("resize", l), o.addEventListener("orientationchange", c);
    }), t("destroy", () => {
      p(), o.removeEventListener("resize", l), o.removeEventListener("orientationchange", c);
    });
  }
  function ct(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: o
    } = i;
    const n = [], a = $(), l = function(c, u) {
      u === void 0 && (u = {});
      const w = a.MutationObserver || a.WebkitMutationObserver, h = new w((m) => {
        if (e.__preventObserver__)
          return;
        if (m.length === 1) {
          o("observerUpdate", m[0]);
          return;
        }
        const x = function() {
          o("observerUpdate", m[0]);
        };
        a.requestAnimationFrame ? a.requestAnimationFrame(x) : a.setTimeout(x, 0);
      });
      h.observe(c, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData
      }), n.push(h);
    }, r = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = ve(e.hostEl);
          for (let u = 0; u < c.length; u += 1)
            l(c[u]);
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        });
      }
    }, p = () => {
      n.forEach((c) => {
        c.disconnect();
      }), n.splice(0, n.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", r), s("destroy", p);
  }
  var pt = {
    on(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function")
        return s;
      const o = t ? "unshift" : "push";
      return i.split(" ").forEach((n) => {
        s.eventsListeners[n] || (s.eventsListeners[n] = []), s.eventsListeners[n][o](e);
      }), s;
    },
    once(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function")
        return s;
      function o() {
        s.off(i, o), o.__emitterProxy && delete o.__emitterProxy;
        for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
          a[l] = arguments[l];
        e.apply(s, a);
      }
      return o.__emitterProxy = e, s.on(i, o, t);
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
        typeof e > "u" ? t.eventsListeners[s] = [] : t.eventsListeners[s] && t.eventsListeners[s].forEach((o, n) => {
          (o === e || o.__emitterProxy && o.__emitterProxy === e) && t.eventsListeners[s].splice(n, 1);
        });
      }), t;
    },
    emit() {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners)
        return i;
      let e, t, s;
      for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++)
        n[a] = arguments[a];
      return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), s = i) : (e = n[0].events, t = n[0].data, s = n[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((r) => {
        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((p) => {
          p.apply(s, [r, ...t]);
        }), i.eventsListeners && i.eventsListeners[r] && i.eventsListeners[r].forEach((p) => {
          p.apply(s, t);
        });
      }), i;
    }
  };
  function ft() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(V(s, "padding-left") || 0, 10) - parseInt(V(s, "padding-right") || 0, 10), t = t - parseInt(V(s, "padding-top") || 0, 10) - parseInt(V(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
      width: e,
      height: t,
      size: i.isHorizontal() ? e : t
    }));
  }
  function ut() {
    const i = this;
    function e(y, E) {
      return parseFloat(y.getPropertyValue(i.getDirectionLabel(E)) || 0);
    }
    const t = i.params, {
      wrapperEl: s,
      slidesEl: o,
      size: n,
      rtlTranslate: a,
      wrongRTL: l
    } = i, r = i.virtual && t.virtual.enabled, p = r ? i.virtual.slides.length : i.slides.length, c = F(o, `.${i.params.slideClass}, swiper-slide`), u = r ? i.virtual.slides.length : c.length;
    let w = [];
    const h = [], m = [];
    let x = t.slidesOffsetBefore;
    typeof x == "function" && (x = t.slidesOffsetBefore.call(i));
    let b = t.slidesOffsetAfter;
    typeof b == "function" && (b = t.slidesOffsetAfter.call(i));
    const d = i.snapGrid.length, f = i.slidesGrid.length;
    let g = t.spaceBetween, v = -x, T = 0, _ = 0;
    if (typeof n > "u")
      return;
    typeof g == "string" && g.indexOf("%") >= 0 ? g = parseFloat(g.replace("%", "")) / 100 * n : typeof g == "string" && (g = parseFloat(g)), i.virtualSize = -g, c.forEach((y) => {
      a ? y.style.marginLeft = "" : y.style.marginRight = "", y.style.marginBottom = "", y.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (X(s, "--swiper-centered-offset-before", ""), X(s, "--swiper-centered-offset-after", ""));
    const D = t.grid && t.grid.rows > 1 && i.grid;
    D ? i.grid.initSlides(c) : i.grid && i.grid.unsetSlides();
    let C;
    const P = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((y) => typeof t.breakpoints[y].slidesPerView < "u").length > 0;
    for (let y = 0; y < u; y += 1) {
      C = 0;
      let E;
      if (c[y] && (E = c[y]), D && i.grid.updateSlide(y, E, c), !(c[y] && V(E, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          P && (c[y].style[i.getDirectionLabel("width")] = "");
          const k = getComputedStyle(E), S = E.style.transform, L = E.style.webkitTransform;
          if (S && (E.style.transform = "none"), L && (E.style.webkitTransform = "none"), t.roundLengths)
            C = i.isHorizontal() ? ie(E, "width", !0) : ie(E, "height", !0);
          else {
            const I = e(k, "width"), H = e(k, "padding-left"), ce = e(k, "padding-right"), z = e(k, "margin-left"), j = e(k, "margin-right"), O = k.getPropertyValue("box-sizing");
            if (O && O === "border-box")
              C = I + z + j;
            else {
              const {
                clientWidth: R,
                offsetWidth: Q
              } = E;
              C = I + H + ce + z + j + (Q - R);
            }
          }
          S && (E.style.transform = S), L && (E.style.webkitTransform = L), t.roundLengths && (C = Math.floor(C));
        } else
          C = (n - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), c[y] && (c[y].style[i.getDirectionLabel("width")] = `${C}px`);
        c[y] && (c[y].swiperSlideSize = C), m.push(C), t.centeredSlides ? (v = v + C / 2 + T / 2 + g, T === 0 && y !== 0 && (v = v - n / 2 - g), y === 0 && (v = v - n / 2 - g), Math.abs(v) < 1 / 1e3 && (v = 0), t.roundLengths && (v = Math.floor(v)), _ % t.slidesPerGroup === 0 && w.push(v), h.push(v)) : (t.roundLengths && (v = Math.floor(v)), (_ - Math.min(i.params.slidesPerGroupSkip, _)) % i.params.slidesPerGroup === 0 && w.push(v), h.push(v), v = v + C + g), i.virtualSize += C + g, T = C, _ += 1;
      }
    }
    if (i.virtualSize = Math.max(i.virtualSize, n) + b, a && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + g}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + g}px`), D && i.grid.updateWrapperSize(C, w), !t.centeredSlides) {
      const y = [];
      for (let E = 0; E < w.length; E += 1) {
        let k = w[E];
        t.roundLengths && (k = Math.floor(k)), w[E] <= i.virtualSize - n && y.push(k);
      }
      w = y, Math.floor(i.virtualSize - n) - Math.floor(w[w.length - 1]) > 1 && w.push(i.virtualSize - n);
    }
    if (r && t.loop) {
      const y = m[0] + g;
      if (t.slidesPerGroup > 1) {
        const E = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), k = y * t.slidesPerGroup;
        for (let S = 0; S < E; S += 1)
          w.push(w[w.length - 1] + k);
      }
      for (let E = 0; E < i.virtual.slidesBefore + i.virtual.slidesAfter; E += 1)
        t.slidesPerGroup === 1 && w.push(w[w.length - 1] + y), h.push(h[h.length - 1] + y), i.virtualSize += y;
    }
    if (w.length === 0 && (w = [0]), g !== 0) {
      const y = i.isHorizontal() && a ? "marginLeft" : i.getDirectionLabel("marginRight");
      c.filter((E, k) => !t.cssMode || t.loop ? !0 : k !== c.length - 1).forEach((E) => {
        E.style[y] = `${g}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let y = 0;
      m.forEach((k) => {
        y += k + (g || 0);
      }), y -= g;
      const E = y - n;
      w = w.map((k) => k <= 0 ? -x : k > E ? E + b : k);
    }
    if (t.centerInsufficientSlides) {
      let y = 0;
      if (m.forEach((E) => {
        y += E + (g || 0);
      }), y -= g, y < n) {
        const E = (n - y) / 2;
        w.forEach((k, S) => {
          w[S] = k - E;
        }), h.forEach((k, S) => {
          h[S] = k + E;
        });
      }
    }
    if (Object.assign(i, {
      slides: c,
      snapGrid: w,
      slidesGrid: h,
      slidesSizesGrid: m
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      X(s, "--swiper-centered-offset-before", `${-w[0]}px`), X(s, "--swiper-centered-offset-after", `${i.size / 2 - m[m.length - 1] / 2}px`);
      const y = -i.snapGrid[0], E = -i.slidesGrid[0];
      i.snapGrid = i.snapGrid.map((k) => k + y), i.slidesGrid = i.slidesGrid.map((k) => k + E);
    }
    if (u !== p && i.emit("slidesLengthChange"), w.length !== d && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== f && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !r && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const y = `${t.containerModifierClass}backface-hidden`, E = i.el.classList.contains(y);
      u <= t.maxBackfaceHiddenSlides ? E || i.el.classList.add(y) : E && i.el.classList.remove(y);
    }
  }
  function mt(i) {
    const e = this, t = [], s = e.virtual && e.params.virtual.enabled;
    let o = 0, n;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const a = (l) => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((l) => {
          t.push(l);
        });
      else
        for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
          const l = e.activeIndex + n;
          if (l > e.slides.length && !s)
            break;
          t.push(a(l));
        }
    else
      t.push(a(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
      if (typeof t[n] < "u") {
        const l = t[n].offsetHeight;
        o = l > o ? l : o;
      }
    (o || o === 0) && (e.wrapperEl.style.height = `${o}px`);
  }
  function ht() {
    const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
      e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
  }
  function gt(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: s,
      rtlTranslate: o,
      snapGrid: n
    } = e;
    if (s.length === 0)
      return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let a = -i;
    o && (a = i), s.forEach((r) => {
      r.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let r = 0; r < s.length; r += 1) {
      const p = s[r];
      let c = p.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (c -= s[0].swiperSlideOffset);
      const u = (a + (t.centeredSlides ? e.minTranslate() : 0) - c) / (p.swiperSlideSize + l), w = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - c) / (p.swiperSlideSize + l), h = -(a - c), m = h + e.slidesSizesGrid[r], x = h >= 0 && h <= e.size - e.slidesSizesGrid[r];
      (h >= 0 && h < e.size - 1 || m > 1 && m <= e.size || h <= 0 && m >= e.size) && (e.visibleSlides.push(p), e.visibleSlidesIndexes.push(r), s[r].classList.add(t.slideVisibleClass)), x && s[r].classList.add(t.slideFullyVisibleClass), p.progress = o ? -u : u, p.originalProgress = o ? -w : w;
    }
  }
  function wt(i) {
    const e = this;
    if (typeof i > "u") {
      const c = e.rtlTranslate ? -1 : 1;
      i = e && e.translate && e.translate * c || 0;
    }
    const t = e.params, s = e.maxTranslate() - e.minTranslate();
    let {
      progress: o,
      isBeginning: n,
      isEnd: a,
      progressLoop: l
    } = e;
    const r = n, p = a;
    if (s === 0)
      o = 0, n = !0, a = !0;
    else {
      o = (i - e.minTranslate()) / s;
      const c = Math.abs(i - e.minTranslate()) < 1, u = Math.abs(i - e.maxTranslate()) < 1;
      n = c || o <= 0, a = u || o >= 1, c && (o = 0), u && (o = 1);
    }
    if (t.loop) {
      const c = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), w = e.slidesGrid[c], h = e.slidesGrid[u], m = e.slidesGrid[e.slidesGrid.length - 1], x = Math.abs(i);
      x >= w ? l = (x - w) / m : l = (x + m - h) / m, l > 1 && (l -= 1);
    }
    Object.assign(e, {
      progress: o,
      progressLoop: l,
      isBeginning: n,
      isEnd: a
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), n && !r && e.emit("reachBeginning toEdge"), a && !p && e.emit("reachEnd toEdge"), (r && !n || p && !a) && e.emit("fromEdge"), e.emit("progress", o);
  }
  function xt() {
    const i = this, {
      slides: e,
      params: t,
      slidesEl: s,
      activeIndex: o
    } = i, n = i.virtual && t.virtual.enabled, a = i.grid && t.grid && t.grid.rows > 1, l = (u) => F(s, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    e.forEach((u) => {
      u.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
    });
    let r, p, c;
    if (n)
      if (t.loop) {
        let u = o - i.virtual.slidesBefore;
        u < 0 && (u = i.virtual.slides.length + u), u >= i.virtual.slides.length && (u -= i.virtual.slides.length), r = l(`[data-swiper-slide-index="${u}"]`);
      } else
        r = l(`[data-swiper-slide-index="${o}"]`);
    else
      a ? (r = e.filter((u) => u.column === o)[0], c = e.filter((u) => u.column === o + 1)[0], p = e.filter((u) => u.column === o - 1)[0]) : r = e[o];
    r && (r.classList.add(t.slideActiveClass), a ? (c && c.classList.add(t.slideNextClass), p && p.classList.add(t.slidePrevClass)) : (c = nt(r, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c && (c = e[0]), c && c.classList.add(t.slideNextClass), p = st(r, `.${t.slideClass}, swiper-slide`)[0], t.loop && !p === 0 && (p = e[e.length - 1]), p && p.classList.add(t.slidePrevClass))), i.emitSlidesClasses();
  }
  const J = (i, e) => {
    if (!i || i.destroyed || !i.params)
      return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, s = e.closest(t());
    if (s) {
      let o = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !o && i.isElement && (s.shadowRoot ? o = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (o = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), o && o.remove());
      })), o && o.remove();
    }
  }, re = (i, e) => {
    if (!i.slides[e])
      return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, ae = (i) => {
    if (!i || i.destroyed || !i.params)
      return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
      return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), o = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const a = o, l = [a - e];
      l.push(...Array.from({
        length: e
      }).map((r, p) => a + s + p)), i.slides.forEach((r, p) => {
        l.includes(r.column) && re(i, p);
      });
      return;
    }
    const n = o + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let a = o - e; a <= n + e; a += 1) {
        const l = (a % t + t) % t;
        (l < o || l > n) && re(i, l);
      }
    else
      for (let a = Math.max(o - e, 0); a <= Math.min(n + e, t - 1); a += 1)
        a !== o && (a > n || a < o) && re(i, a);
  };
  function vt(i) {
    const {
      slidesGrid: e,
      params: t
    } = i, s = i.rtlTranslate ? i.translate : -i.translate;
    let o;
    for (let n = 0; n < e.length; n += 1)
      typeof e[n + 1] < "u" ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2 ? o = n : s >= e[n] && s < e[n + 1] && (o = n + 1) : s >= e[n] && (o = n);
    return t.normalizeSlideIndex && (o < 0 || typeof o > "u") && (o = 0), o;
  }
  function yt(i) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: s,
      params: o,
      activeIndex: n,
      realIndex: a,
      snapIndex: l
    } = e;
    let r = i, p;
    const c = (h) => {
      let m = h - e.virtual.slidesBefore;
      return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m;
    };
    if (typeof r > "u" && (r = vt(e)), s.indexOf(t) >= 0)
      p = s.indexOf(t);
    else {
      const h = Math.min(o.slidesPerGroupSkip, r);
      p = h + Math.floor((r - h) / o.slidesPerGroup);
    }
    if (p >= s.length && (p = s.length - 1), r === n && !e.params.loop) {
      p !== l && (e.snapIndex = p, e.emit("snapIndexChange"));
      return;
    }
    if (r === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = c(r);
      return;
    }
    const u = e.grid && o.grid && o.grid.rows > 1;
    let w;
    if (e.virtual && o.virtual.enabled && o.loop)
      w = c(r);
    else if (u) {
      const h = e.slides.filter((x) => x.column === r)[0];
      let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(m) && (m = Math.max(e.slides.indexOf(h), 0)), w = Math.floor(m / o.grid.rows);
    } else if (e.slides[r]) {
      const h = e.slides[r].getAttribute("data-swiper-slide-index");
      h ? w = parseInt(h, 10) : w = r;
    } else
      w = r;
    Object.assign(e, {
      previousSnapIndex: l,
      snapIndex: p,
      previousRealIndex: a,
      realIndex: w,
      previousIndex: n,
      activeIndex: r
    }), e.initialized && ae(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (a !== w && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function bt(i, e) {
    const t = this, s = t.params;
    let o = i.closest(`.${s.slideClass}, swiper-slide`);
    !o && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((l) => {
      !o && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (o = l);
    });
    let n = !1, a;
    if (o) {
      for (let l = 0; l < t.slides.length; l += 1)
        if (t.slides[l] === o) {
          n = !0, a = l;
          break;
        }
    }
    if (o && n)
      t.clickedSlide = o, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(o.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var St = {
    updateSize: ft,
    updateSlides: ut,
    updateAutoHeight: mt,
    updateSlidesOffset: ht,
    updateSlidesProgress: gt,
    updateProgress: wt,
    updateSlidesClasses: xt,
    updateActiveIndex: yt,
    updateClickedSlide: bt
  };
  function Tt(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this, {
      params: t,
      rtlTranslate: s,
      translate: o,
      wrapperEl: n
    } = e;
    if (t.virtualTranslate)
      return s ? -o : o;
    if (t.cssMode)
      return o;
    let a = tt(n, i);
    return a += e.cssOverflowAdjustment(), s && (a = -a), a || 0;
  }
  function kt(i, e) {
    const t = this, {
      rtlTranslate: s,
      params: o,
      wrapperEl: n,
      progress: a
    } = t;
    let l = 0, r = 0;
    const p = 0;
    t.isHorizontal() ? l = s ? -i : i : r = i, o.roundLengths && (l = Math.floor(l), r = Math.floor(r)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : r, o.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -r : o.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : r -= t.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${r}px, ${p}px)`);
    let c;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? c = 0 : c = (i - t.minTranslate()) / u, c !== a && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
  }
  function Et() {
    return -this.snapGrid[0];
  }
  function Ct() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function _t(i, e, t, s, o) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
    const n = this, {
      params: a,
      wrapperEl: l
    } = n;
    if (n.animating && a.preventInteractionOnTransition)
      return !1;
    const r = n.minTranslate(), p = n.maxTranslate();
    let c;
    if (s && i > r ? c = r : s && i < p ? c = p : c = i, n.updateProgress(c), a.cssMode) {
      const u = n.isHorizontal();
      if (e === 0)
        l[u ? "scrollLeft" : "scrollTop"] = -c;
      else {
        if (!n.support.smoothScroll)
          return xe({
            swiper: n,
            targetPosition: -c,
            side: u ? "left" : "top"
          }), !0;
        l.scrollTo({
          [u ? "left" : "top"]: -c,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (n.setTransition(0), n.setTranslate(c), t && (n.emit("beforeTransitionStart", e, o), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(c), t && (n.emit("beforeTransitionStart", e, o), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(w) {
      !n || n.destroyed || w.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, t && n.emit("transitionEnd"));
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Lt = {
    getTranslate: Tt,
    setTranslate: kt,
    minTranslate: Et,
    maxTranslate: Ct,
    translateTo: _t
  };
  function Mt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
  }
  function Se(i) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: s,
      step: o
    } = i;
    const {
      activeIndex: n,
      previousIndex: a
    } = e;
    let l = s;
    if (l || (n > a ? l = "next" : n < a ? l = "prev" : l = "reset"), e.emit(`transition${o}`), t && n !== a) {
      if (l === "reset") {
        e.emit(`slideResetTransition${o}`);
        return;
      }
      e.emit(`slideChangeTransition${o}`), l === "next" ? e.emit(`slideNextTransition${o}`) : e.emit(`slidePrevTransition${o}`);
    }
  }
  function zt(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(), Se({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "Start"
    }));
  }
  function Pt(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    t.animating = !1, !s.cssMode && (t.setTransition(0), Se({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "End"
    }));
  }
  var It = {
    setTransition: Mt,
    transitionStart: zt,
    transitionEnd: Pt
  };
  function At(i, e, t, s, o) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    let a = i;
    a < 0 && (a = 0);
    const {
      params: l,
      snapGrid: r,
      slidesGrid: p,
      previousIndex: c,
      activeIndex: u,
      rtlTranslate: w,
      wrapperEl: h,
      enabled: m
    } = n;
    if (n.animating && l.preventInteractionOnTransition || !m && !s && !o || n.destroyed)
      return !1;
    const x = Math.min(n.params.slidesPerGroupSkip, a);
    let b = x + Math.floor((a - x) / n.params.slidesPerGroup);
    b >= r.length && (b = r.length - 1);
    const d = -r[b];
    if (l.normalizeSlideIndex)
      for (let g = 0; g < p.length; g += 1) {
        const v = -Math.floor(d * 100), T = Math.floor(p[g] * 100), _ = Math.floor(p[g + 1] * 100);
        typeof p[g + 1] < "u" ? v >= T && v < _ - (_ - T) / 2 ? a = g : v >= T && v < _ && (a = g + 1) : v >= T && (a = g);
      }
    if (n.initialized && a !== u && (!n.allowSlideNext && (w ? d > n.translate && d > n.minTranslate() : d < n.translate && d < n.minTranslate()) || !n.allowSlidePrev && d > n.translate && d > n.maxTranslate() && (u || 0) !== a))
      return !1;
    a !== (c || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(d);
    let f;
    if (a > u ? f = "next" : a < u ? f = "prev" : f = "reset", w && -d === n.translate || !w && d === n.translate)
      return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(d), f !== "reset" && (n.transitionStart(t, f), n.transitionEnd(t, f)), !1;
    if (l.cssMode) {
      const g = n.isHorizontal(), v = w ? d : -d;
      if (e === 0) {
        const T = n.virtual && n.params.virtual.enabled;
        T && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), T && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          h[g ? "scrollLeft" : "scrollTop"] = v;
        })) : h[g ? "scrollLeft" : "scrollTop"] = v, T && requestAnimationFrame(() => {
          n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
        });
      } else {
        if (!n.support.smoothScroll)
          return xe({
            swiper: n,
            targetPosition: v,
            side: g ? "left" : "top"
          }), !0;
        h.scrollTo({
          [g ? "left" : "top"]: v,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return n.setTransition(e), n.setTranslate(d), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, s), n.transitionStart(t, f), e === 0 ? n.transitionEnd(t, f) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(v) {
      !n || n.destroyed || v.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(t, f));
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
  }
  function Ot(i, e, t, s) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const o = this;
    if (o.destroyed)
      return;
    const n = o.grid && o.params.grid && o.params.grid.rows > 1;
    let a = i;
    if (o.params.loop)
      if (o.virtual && o.params.virtual.enabled)
        a = a + o.virtual.slidesBefore;
      else {
        let l;
        if (n) {
          const w = a * o.params.grid.rows;
          l = o.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === w)[0].column;
        } else
          l = o.getSlideIndexByData(a);
        const r = n ? Math.ceil(o.slides.length / o.params.grid.rows) : o.slides.length, {
          centeredSlides: p
        } = o.params;
        let c = o.params.slidesPerView;
        c === "auto" ? c = o.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(o.params.slidesPerView, 10)), p && c % 2 === 0 && (c = c + 1));
        let u = r - l < c;
        if (p && (u = u || l < Math.ceil(c / 2)), u) {
          const w = p ? l < o.activeIndex ? "prev" : "next" : l - o.activeIndex - 1 < o.params.slidesPerView ? "next" : "prev";
          o.loopFix({
            direction: w,
            slideTo: !0,
            activeSlideIndex: w === "next" ? l + 1 : l - r + 1,
            slideRealIndex: w === "next" ? o.realIndex : void 0
          });
        }
        if (n) {
          const w = a * o.params.grid.rows;
          a = o.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === w)[0].column;
        } else
          a = o.getSlideIndexByData(a);
      }
    return requestAnimationFrame(() => {
      o.slideTo(a, e, t, s);
    }), o;
  }
  function Dt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      enabled: o,
      params: n,
      animating: a
    } = s;
    if (!o || s.destroyed)
      return s;
    let l = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const r = s.activeIndex < n.slidesPerGroupSkip ? 1 : l, p = s.virtual && n.virtual.enabled;
    if (n.loop) {
      if (a && !p && n.loopPreventsSliding)
        return !1;
      if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && n.cssMode)
        return requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + r, i, e, t);
        }), !0;
    }
    return n.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + r, i, e, t);
  }
  function $t(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      params: o,
      snapGrid: n,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: r,
      animating: p
    } = s;
    if (!r || s.destroyed)
      return s;
    const c = s.virtual && o.virtual.enabled;
    if (o.loop) {
      if (p && !c && o.loopPreventsSliding)
        return !1;
      s.loopFix({
        direction: "prev"
      }), s._clientLeft = s.wrapperEl.clientLeft;
    }
    const u = l ? s.translate : -s.translate;
    function w(d) {
      return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
    }
    const h = w(u), m = n.map((d) => w(d));
    let x = n[m.indexOf(h) - 1];
    if (typeof x > "u" && o.cssMode) {
      let d;
      n.forEach((f, g) => {
        h >= f && (d = g);
      }), typeof d < "u" && (x = n[d > 0 ? d - 1 : d]);
    }
    let b = 0;
    if (typeof x < "u" && (b = a.indexOf(x), b < 0 && (b = s.activeIndex - 1), o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (b = b - s.slidesPerViewDynamic("previous", !0) + 1, b = Math.max(b, 0))), o.rewind && s.isBeginning) {
      const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
      return s.slideTo(d, i, e, t);
    } else if (o.loop && s.activeIndex === 0 && o.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(b, i, e, t);
      }), !0;
    return s.slideTo(b, i, e, t);
  }
  function Gt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
      return s.slideTo(s.activeIndex, i, e, t);
  }
  function Bt(i, e, t, s) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
    const o = this;
    if (o.destroyed)
      return;
    let n = o.activeIndex;
    const a = Math.min(o.params.slidesPerGroupSkip, n), l = a + Math.floor((n - a) / o.params.slidesPerGroup), r = o.rtlTranslate ? o.translate : -o.translate;
    if (r >= o.snapGrid[l]) {
      const p = o.snapGrid[l], c = o.snapGrid[l + 1];
      r - p > (c - p) * s && (n += o.params.slidesPerGroup);
    } else {
      const p = o.snapGrid[l - 1], c = o.snapGrid[l];
      r - p <= (c - p) * s && (n -= o.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, o.slidesGrid.length - 1), o.slideTo(n, i, e, t);
  }
  function jt() {
    const i = this;
    if (i.destroyed)
      return;
    const {
      params: e,
      slidesEl: t
    } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let o = i.clickedIndex, n;
    const a = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (i.animating)
        return;
      n = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? o < i.loopedSlides - s / 2 || o > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), o = i.getSlideIndex(F(t, `${a}[data-swiper-slide-index="${n}"]`)[0]), te(() => {
        i.slideTo(o);
      })) : i.slideTo(o) : o > i.slides.length - s ? (i.loopFix(), o = i.getSlideIndex(F(t, `${a}[data-swiper-slide-index="${n}"]`)[0]), te(() => {
        i.slideTo(o);
      })) : i.slideTo(o);
    } else
      i.slideTo(o);
  }
  var Ft = {
    slideTo: At,
    slideToLoop: Ot,
    slideNext: Dt,
    slidePrev: $t,
    slideReset: Gt,
    slideToClosest: Bt,
    slideToClickedSlide: jt
  };
  function Ht(i) {
    const e = this, {
      params: t,
      slidesEl: s
    } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
      return;
    const o = () => {
      F(s, `.${t.slideClass}, swiper-slide`).forEach((u, w) => {
        u.setAttribute("data-swiper-slide-index", w);
      });
    }, n = e.grid && t.grid && t.grid.rows > 1, a = t.slidesPerGroup * (n ? t.grid.rows : 1), l = e.slides.length % a !== 0, r = n && e.slides.length % t.grid.rows !== 0, p = (c) => {
      for (let u = 0; u < c; u += 1) {
        const w = e.isElement ? K("swiper-slide", [t.slideBlankClass]) : K("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(w);
      }
    };
    if (l) {
      if (t.loopAddBlankSlides) {
        const c = a - e.slides.length % a;
        p(c), e.recalcSlides(), e.updateSlides();
      } else
        U("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      o();
    } else if (r) {
      if (t.loopAddBlankSlides) {
        const c = t.grid.rows - e.slides.length % t.grid.rows;
        p(c), e.recalcSlides(), e.updateSlides();
      } else
        U("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      o();
    } else
      o();
    e.loopFix({
      slideRealIndex: i,
      direction: t.centeredSlides ? void 0 : "next"
    });
  }
  function Nt(i) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: o,
      activeSlideIndex: n,
      byController: a,
      byMousewheel: l
    } = i === void 0 ? {} : i;
    const r = this;
    if (!r.params.loop)
      return;
    r.emit("beforeLoopFix");
    const {
      slides: p,
      allowSlidePrev: c,
      allowSlideNext: u,
      slidesEl: w,
      params: h
    } = r, {
      centeredSlides: m
    } = h;
    if (r.allowSlidePrev = !0, r.allowSlideNext = !0, r.virtual && h.virtual.enabled) {
      t && (!h.centeredSlides && r.snapIndex === 0 ? r.slideTo(r.virtual.slides.length, 0, !1, !0) : h.centeredSlides && r.snapIndex < h.slidesPerView ? r.slideTo(r.virtual.slides.length + r.snapIndex, 0, !1, !0) : r.snapIndex === r.snapGrid.length - 1 && r.slideTo(r.virtual.slidesBefore, 0, !1, !0)), r.allowSlidePrev = c, r.allowSlideNext = u, r.emit("loopFix");
      return;
    }
    let x = h.slidesPerView;
    x === "auto" ? x = r.slidesPerViewDynamic() : (x = Math.ceil(parseFloat(h.slidesPerView, 10)), m && x % 2 === 0 && (x = x + 1));
    const b = h.slidesPerGroupAuto ? x : h.slidesPerGroup;
    let d = b;
    d % b !== 0 && (d += b - d % b), d += h.loopAdditionalSlides, r.loopedSlides = d;
    const f = r.grid && h.grid && h.grid.rows > 1;
    p.length < x + d ? U("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : f && h.grid.fill === "row" && U("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const g = [], v = [];
    let T = r.activeIndex;
    typeof n > "u" ? n = r.getSlideIndex(p.filter((S) => S.classList.contains(h.slideActiveClass))[0]) : T = n;
    const _ = s === "next" || !s, D = s === "prev" || !s;
    let C = 0, P = 0;
    const y = f ? Math.ceil(p.length / h.grid.rows) : p.length, k = (f ? p[n].column : n) + (m && typeof o > "u" ? -x / 2 + 0.5 : 0);
    if (k < d) {
      C = Math.max(d - k, b);
      for (let S = 0; S < d - k; S += 1) {
        const L = S - Math.floor(S / y) * y;
        if (f) {
          const I = y - L - 1;
          for (let H = p.length - 1; H >= 0; H -= 1)
            p[H].column === I && g.push(H);
        } else
          g.push(y - L - 1);
      }
    } else if (k + x > y - d) {
      P = Math.max(k - (y - d * 2), b);
      for (let S = 0; S < P; S += 1) {
        const L = S - Math.floor(S / y) * y;
        f ? p.forEach((I, H) => {
          I.column === L && v.push(H);
        }) : v.push(L);
      }
    }
    if (r.__preventObserver__ = !0, requestAnimationFrame(() => {
      r.__preventObserver__ = !1;
    }), D && g.forEach((S) => {
      p[S].swiperLoopMoveDOM = !0, w.prepend(p[S]), p[S].swiperLoopMoveDOM = !1;
    }), _ && v.forEach((S) => {
      p[S].swiperLoopMoveDOM = !0, w.append(p[S]), p[S].swiperLoopMoveDOM = !1;
    }), r.recalcSlides(), h.slidesPerView === "auto" ? r.updateSlides() : f && (g.length > 0 && D || v.length > 0 && _) && r.slides.forEach((S, L) => {
      r.grid.updateSlide(L, S, r.slides);
    }), h.watchSlidesProgress && r.updateSlidesOffset(), t) {
      if (g.length > 0 && D) {
        if (typeof e > "u") {
          const S = r.slidesGrid[T], I = r.slidesGrid[T + C] - S;
          l ? r.setTranslate(r.translate - I) : (r.slideTo(T + Math.ceil(C), 0, !1, !0), o && (r.touchEventsData.startTranslate = r.touchEventsData.startTranslate - I, r.touchEventsData.currentTranslate = r.touchEventsData.currentTranslate - I));
        } else if (o) {
          const S = f ? g.length / h.grid.rows : g.length;
          r.slideTo(r.activeIndex + S, 0, !1, !0), r.touchEventsData.currentTranslate = r.translate;
        }
      } else if (v.length > 0 && _)
        if (typeof e > "u") {
          const S = r.slidesGrid[T], I = r.slidesGrid[T - P] - S;
          l ? r.setTranslate(r.translate - I) : (r.slideTo(T - P, 0, !1, !0), o && (r.touchEventsData.startTranslate = r.touchEventsData.startTranslate - I, r.touchEventsData.currentTranslate = r.touchEventsData.currentTranslate - I));
        } else {
          const S = f ? v.length / h.grid.rows : v.length;
          r.slideTo(r.activeIndex - S, 0, !1, !0);
        }
    }
    if (r.allowSlidePrev = c, r.allowSlideNext = u, r.controller && r.controller.control && !a) {
      const S = {
        slideRealIndex: e,
        direction: s,
        setTranslate: o,
        activeSlideIndex: n,
        byController: !0
      };
      Array.isArray(r.controller.control) ? r.controller.control.forEach((L) => {
        !L.destroyed && L.params.loop && L.loopFix({
          ...S,
          slideTo: L.params.slidesPerView === h.slidesPerView ? t : !1
        });
      }) : r.controller.control instanceof r.constructor && r.controller.control.params.loop && r.controller.control.loopFix({
        ...S,
        slideTo: r.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
      });
    }
    r.emit("loopFix");
  }
  function Vt() {
    const i = this, {
      params: e,
      slidesEl: t
    } = i;
    if (!e.loop || i.virtual && i.params.virtual.enabled)
      return;
    i.recalcSlides();
    const s = [];
    i.slides.forEach((o) => {
      const n = typeof o.swiperSlideIndex > "u" ? o.getAttribute("data-swiper-slide-index") * 1 : o.swiperSlideIndex;
      s[n] = o;
    }), i.slides.forEach((o) => {
      o.removeAttribute("data-swiper-slide-index");
    }), s.forEach((o) => {
      t.append(o);
    }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
  }
  var Rt = {
    loopCreate: Ht,
    loopFix: Nt,
    loopDestroy: Vt
  };
  function qt(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function Wt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
      i.__preventObserver__ = !1;
    }));
  }
  var Yt = {
    setGrabCursor: qt,
    unsetGrabCursor: Wt
  };
  function Xt(i, e) {
    e === void 0 && (e = this);
    function t(s) {
      if (!s || s === N() || s === $())
        return null;
      s.assignedSlot && (s = s.assignedSlot);
      const o = s.closest(i);
      return !o && !s.getRootNode ? null : o || t(s.getRootNode().host);
    }
    return t(e);
  }
  function Te(i, e, t) {
    const s = $(), {
      params: o
    } = i, n = o.edgeSwipeDetection, a = o.edgeSwipeThreshold;
    return n && (t <= a || t >= s.innerWidth - a) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function Ut(i) {
    const e = this, t = N();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const o = e.touchEventsData;
    if (s.type === "pointerdown") {
      if (o.pointerId !== null && o.pointerId !== s.pointerId)
        return;
      o.pointerId = s.pointerId;
    } else
      s.type === "touchstart" && s.targetTouches.length === 1 && (o.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") {
      Te(e, s, s.targetTouches[0].pageX);
      return;
    }
    const {
      params: n,
      touches: a,
      enabled: l
    } = e;
    if (!l || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
      return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let r = s.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(r) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || o.isTouched && o.isMoved)
      return;
    const p = !!n.noSwipingClass && n.noSwipingClass !== "", c = s.composedPath ? s.composedPath() : s.path;
    p && s.target && s.target.shadowRoot && c && (r = c[0]);
    const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, w = !!(s.target && s.target.shadowRoot);
    if (n.noSwiping && (w ? Xt(u, r) : r.closest(u))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !r.closest(n.swipeHandler))
      return;
    a.currentX = s.pageX, a.currentY = s.pageY;
    const h = a.currentX, m = a.currentY;
    if (!Te(e, s, h))
      return;
    Object.assign(o, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), a.startX = h, a.startY = m, o.touchStartTime = W(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (o.allowThresholdMove = !1);
    let x = !0;
    r.matches(o.focusableElements) && (x = !1, r.nodeName === "SELECT" && (o.isTouched = !1)), t.activeElement && t.activeElement.matches(o.focusableElements) && t.activeElement !== r && t.activeElement.blur();
    const b = x && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || b) && !r.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
  }
  function Kt(i) {
    const e = N(), t = this, s = t.touchEventsData, {
      params: o,
      touches: n,
      rtlTranslate: a,
      enabled: l
    } = t;
    if (!l || !o.simulateTouch && i.pointerType === "mouse")
      return;
    let r = i;
    if (r.originalEvent && (r = r.originalEvent), r.type === "pointermove" && (s.touchId !== null || r.pointerId !== s.pointerId))
      return;
    let p;
    if (r.type === "touchmove") {
      if (p = [...r.changedTouches].filter((_) => _.identifier === s.touchId)[0], !p || p.identifier !== s.touchId)
        return;
    } else
      p = r;
    if (!s.isTouched) {
      s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", r);
      return;
    }
    const c = p.pageX, u = p.pageY;
    if (r.preventedByNestedSwiper) {
      n.startX = c, n.startY = u;
      return;
    }
    if (!t.allowTouchMove) {
      r.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(n, {
        startX: c,
        startY: u,
        currentX: c,
        currentY: u
      }), s.touchStartTime = W());
      return;
    }
    if (o.touchReleaseOnEdges && !o.loop) {
      if (t.isVertical()) {
        if (u < n.startY && t.translate <= t.maxTranslate() || u > n.startY && t.translate >= t.minTranslate()) {
          s.isTouched = !1, s.isMoved = !1;
          return;
        }
      } else if (c < n.startX && t.translate <= t.maxTranslate() || c > n.startX && t.translate >= t.minTranslate())
        return;
    }
    if (e.activeElement && r.target === e.activeElement && r.target.matches(s.focusableElements)) {
      s.isMoved = !0, t.allowClick = !1;
      return;
    }
    s.allowTouchCallbacks && t.emit("touchMove", r), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = u;
    const w = n.currentX - n.startX, h = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(w ** 2 + h ** 2) < t.params.threshold)
      return;
    if (typeof s.isScrolling > "u") {
      let _;
      t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : w * w + h * h >= 25 && (_ = Math.atan2(Math.abs(h), Math.abs(w)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? _ > o.touchAngle : 90 - _ > o.touchAngle);
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", r), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling) {
      s.isTouched = !1;
      return;
    }
    if (!s.startMoving)
      return;
    t.allowClick = !1, !o.cssMode && r.cancelable && r.preventDefault(), o.touchMoveStopPropagation && !o.nested && r.stopPropagation();
    let m = t.isHorizontal() ? w : h, x = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    o.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), x = Math.abs(x) * (a ? 1 : -1)), n.diff = m, m *= o.touchRatio, a && (m = -m, x = -x);
    const b = t.touchesDirection;
    t.swipeDirection = m > 0 ? "prev" : "next", t.touchesDirection = x > 0 ? "prev" : "next";
    const d = t.params.loop && !o.cssMode, f = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
      if (d && f && t.loopFix({
        direction: t.swipeDirection
      }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const _ = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(_);
      }
      s.allowMomentumBounce = !1, o.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", r);
    }
    let g;
    if ((/* @__PURE__ */ new Date()).getTime(), s.isMoved && s.allowThresholdMove && b !== t.touchesDirection && d && f && Math.abs(m) >= 1) {
      Object.assign(n, {
        startX: c,
        startY: u,
        currentX: c,
        currentY: u,
        startTranslate: s.currentTranslate
      }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
      return;
    }
    t.emit("sliderMove", r), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
    let v = !0, T = o.resistanceRatio;
    if (o.touchReleaseOnEdges && (T = 0), m > 0 ? (d && f && !g && s.allowThresholdMove && s.currentTranslate > (o.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > t.minTranslate() && (v = !1, o.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** T))) : m < 0 && (d && f && !g && s.allowThresholdMove && s.currentTranslate < (o.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (o.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(o.slidesPerView, 10)))
    }), s.currentTranslate < t.maxTranslate() && (v = !1, o.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** T))), v && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), o.threshold > 0)
      if (Math.abs(m) > o.threshold || s.allowThresholdMove) {
        if (!s.allowThresholdMove) {
          s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
          return;
        }
      } else {
        s.currentTranslate = s.startTranslate;
        return;
      }
    !o.followFinger || o.cssMode || ((o.freeMode && o.freeMode.enabled && t.freeMode || o.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), o.freeMode && o.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
  }
  function Zt(i) {
    const e = this, t = e.touchEventsData;
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    let o;
    if (s.type === "touchend" || s.type === "touchcancel") {
      if (o = [...s.changedTouches].filter((T) => T.identifier === t.touchId)[0], !o || o.identifier !== t.touchId)
        return;
    } else {
      if (t.touchId !== null || s.pointerId !== t.pointerId)
        return;
      o = s;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    t.pointerId = null, t.touchId = null;
    const {
      params: a,
      touches: l,
      rtlTranslate: r,
      slidesGrid: p,
      enabled: c
    } = e;
    if (!c || !a.simulateTouch && s.pointerType === "mouse")
      return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && a.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = W(), w = u - t.touchStartTime;
    if (e.allowClick) {
      const T = s.path || s.composedPath && s.composedPath();
      e.updateClickedSlide(T && T[0] || s.target, T), e.emit("tap click", s), w < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
    }
    if (t.lastClickTime = W(), te(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let h;
    if (a.followFinger ? h = r ? e.translate : -e.translate : h = -t.currentTranslate, a.cssMode)
      return;
    if (a.freeMode && a.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: h
      });
      return;
    }
    const m = h >= -e.maxTranslate() && !e.params.loop;
    let x = 0, b = e.slidesSizesGrid[0];
    for (let T = 0; T < p.length; T += T < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      const _ = T < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      typeof p[T + _] < "u" ? (m || h >= p[T] && h < p[T + _]) && (x = T, b = p[T + _] - p[T]) : (m || h >= p[T]) && (x = T, b = p[p.length - 1] - p[p.length - 2]);
    }
    let d = null, f = null;
    a.rewind && (e.isBeginning ? f = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (d = 0));
    const g = (h - p[x]) / b, v = x < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (w > a.longSwipesMs) {
      if (!a.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (g >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? d : x + v) : e.slideTo(x)), e.swipeDirection === "prev" && (g > 1 - a.longSwipesRatio ? e.slideTo(x + v) : f !== null && g < 0 && Math.abs(g) > a.longSwipesRatio ? e.slideTo(f) : e.slideTo(x));
    } else {
      if (!a.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(x + v) : e.slideTo(x) : (e.swipeDirection === "next" && e.slideTo(d !== null ? d : x + v), e.swipeDirection === "prev" && e.slideTo(f !== null ? f : x));
    }
  }
  function ke() {
    const i = this, {
      params: e,
      el: t
    } = i;
    if (t && t.offsetWidth === 0)
      return;
    e.breakpoints && i.setBreakpoint();
    const {
      allowSlideNext: s,
      allowSlidePrev: o,
      snapGrid: n
    } = i, a = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const l = a && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !a ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
      i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
    }, 500)), i.allowSlidePrev = o, i.allowSlideNext = s, i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow();
  }
  function Jt(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function Qt() {
    const i = this, {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: s
    } = i;
    if (!s)
      return;
    i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
    let o;
    const n = i.maxTranslate() - i.minTranslate();
    n === 0 ? o = 0 : o = (i.translate - i.minTranslate()) / n, o !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
  }
  function ei(i) {
    const e = this;
    J(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function ti() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const Ee = (i, e) => {
    const t = N(), {
      params: s,
      el: o,
      wrapperEl: n,
      device: a
    } = i, l = !!s.nested, r = e === "on" ? "addEventListener" : "removeEventListener", p = e;
    t[r]("touchstart", i.onDocumentTouchStart, {
      passive: !1,
      capture: l
    }), o[r]("touchstart", i.onTouchStart, {
      passive: !1
    }), o[r]("pointerdown", i.onTouchStart, {
      passive: !1
    }), t[r]("touchmove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[r]("pointermove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[r]("touchend", i.onTouchEnd, {
      passive: !0
    }), t[r]("pointerup", i.onTouchEnd, {
      passive: !0
    }), t[r]("pointercancel", i.onTouchEnd, {
      passive: !0
    }), t[r]("touchcancel", i.onTouchEnd, {
      passive: !0
    }), t[r]("pointerout", i.onTouchEnd, {
      passive: !0
    }), t[r]("pointerleave", i.onTouchEnd, {
      passive: !0
    }), t[r]("contextmenu", i.onTouchEnd, {
      passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && o[r]("click", i.onClick, !0), s.cssMode && n[r]("scroll", i.onScroll), s.updateOnWindowResize ? i[p](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ke, !0) : i[p]("observerUpdate", ke, !0), o[r]("load", i.onLoad, {
      capture: !0
    });
  };
  function ii() {
    const i = this, {
      params: e
    } = i;
    i.onTouchStart = Ut.bind(i), i.onTouchMove = Kt.bind(i), i.onTouchEnd = Zt.bind(i), i.onDocumentTouchStart = ti.bind(i), e.cssMode && (i.onScroll = Qt.bind(i)), i.onClick = Jt.bind(i), i.onLoad = ei.bind(i), Ee(i, "on");
  }
  function si() {
    Ee(this, "off");
  }
  var ni = {
    attachEvents: ii,
    detachEvents: si
  };
  const Ce = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  function oi() {
    const i = this, {
      realIndex: e,
      initialized: t,
      params: s,
      el: o
    } = i, n = s.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
      return;
    const a = i.getBreakpoint(n, i.params.breakpointsBase, i.el);
    if (!a || i.currentBreakpoint === a)
      return;
    const r = (a in n ? n[a] : void 0) || i.originalParams, p = Ce(i, s), c = Ce(i, r), u = s.enabled;
    p && !c ? (o.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !p && c && (o.classList.add(`${s.containerModifierClass}grid`), (r.grid.fill && r.grid.fill === "column" || !r.grid.fill && s.grid.fill === "column") && o.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((d) => {
      if (typeof r[d] > "u")
        return;
      const f = s[d] && s[d].enabled, g = r[d] && r[d].enabled;
      f && !g && i[d].disable(), !f && g && i[d].enable();
    });
    const w = r.direction && r.direction !== s.direction, h = s.loop && (r.slidesPerView !== s.slidesPerView || w), m = s.loop;
    w && t && i.changeDirection(), G(i.params, r);
    const x = i.params.enabled, b = i.params.loop;
    Object.assign(i, {
      allowTouchMove: i.params.allowTouchMove,
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev
    }), u && !x ? i.disable() : !u && x && i.enable(), i.currentBreakpoint = a, i.emit("_beforeBreakpoint", r), t && (h ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !m && b ? (i.loopCreate(e), i.updateSlides()) : m && !b && i.loopDestroy()), i.emit("breakpoint", r);
  }
  function ri(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t)
      return;
    let s = !1;
    const o = $(), n = e === "window" ? o.innerHeight : t.clientHeight, a = Object.keys(i).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const r = parseFloat(l.substr(1));
        return {
          value: n * r,
          point: l
        };
      }
      return {
        value: l,
        point: l
      };
    });
    a.sort((l, r) => parseInt(l.value, 10) - parseInt(r.value, 10));
    for (let l = 0; l < a.length; l += 1) {
      const {
        point: r,
        value: p
      } = a[l];
      e === "window" ? o.matchMedia(`(min-width: ${p}px)`).matches && (s = r) : p <= t.clientWidth && (s = r);
    }
    return s || "max";
  }
  var ai = {
    setBreakpoint: oi,
    getBreakpoint: ri
  };
  function li(i, e) {
    const t = [];
    return i.forEach((s) => {
      typeof s == "object" ? Object.keys(s).forEach((o) => {
        s[o] && t.push(e + o);
      }) : typeof s == "string" && t.push(e + s);
    }), t;
  }
  function di() {
    const i = this, {
      classNames: e,
      params: t,
      rtl: s,
      el: o,
      device: n
    } = i, a = li(["initialized", t.direction, {
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
      android: n.android
    }, {
      ios: n.ios
    }, {
      "css-mode": t.cssMode
    }, {
      centered: t.cssMode && t.centeredSlides
    }, {
      "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...a), o.classList.add(...e), i.emitContainerClasses();
  }
  function ci() {
    const i = this, {
      el: e,
      classNames: t
    } = i;
    e.classList.remove(...t), i.emitContainerClasses();
  }
  var pi = {
    addClasses: di,
    removeClasses: ci
  };
  function fi() {
    const i = this, {
      isLocked: e,
      params: t
    } = i, {
      slidesOffsetBefore: s
    } = t;
    if (s) {
      const o = i.slides.length - 1, n = i.slidesGrid[o] + i.slidesSizesGrid[o] + s * 2;
      i.isLocked = i.size > n;
    } else
      i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
  }
  var ui = {
    checkOverflow: fi
  }, _e = {
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
  function mi(i, e) {
    return function(s) {
      s === void 0 && (s = {});
      const o = Object.keys(s)[0], n = s[o];
      if (typeof n != "object" || n === null) {
        G(e, s);
        return;
      }
      if (i[o] === !0 && (i[o] = {
        enabled: !0
      }), o === "navigation" && i[o] && i[o].enabled && !i[o].prevEl && !i[o].nextEl && (i[o].auto = !0), ["pagination", "scrollbar"].indexOf(o) >= 0 && i[o] && i[o].enabled && !i[o].el && (i[o].auto = !0), !(o in i && "enabled" in n)) {
        G(e, s);
        return;
      }
      typeof i[o] == "object" && !("enabled" in i[o]) && (i[o].enabled = !0), i[o] || (i[o] = {
        enabled: !1
      }), G(e, s);
    };
  }
  const le = {
    eventsEmitter: pt,
    update: St,
    translate: Lt,
    transition: It,
    slide: Ft,
    loop: Rt,
    grabCursor: Yt,
    events: ni,
    breakpoints: ai,
    checkOverflow: ui,
    classes: pi
  }, de = {};
  class B {
    constructor() {
      let e, t;
      for (var s = arguments.length, o = new Array(s), n = 0; n < s; n++)
        o[n] = arguments[n];
      o.length === 1 && o[0].constructor && Object.prototype.toString.call(o[0]).slice(8, -1) === "Object" ? t = o[0] : [e, t] = o, t || (t = {}), t = G({}, t), e && !t.el && (t.el = e);
      const a = N();
      if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
        const c = [];
        return a.querySelectorAll(t.el).forEach((u) => {
          const w = G({}, t, {
            el: u
          });
          c.push(new B(w));
        }), c;
      }
      const l = this;
      l.__swiper__ = !0, l.support = ye(), l.device = be({
        userAgent: t.userAgent
      }), l.browser = lt(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const r = {};
      l.modules.forEach((c) => {
        c({
          params: t,
          swiper: l,
          extendParams: mi(t, r),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const p = G({}, _e, r);
      return l.params = G({}, p, de, t), l.originalParams = G({}, l.params), l.passedParams = G({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((c) => {
        l.on(c, l.params.on[c]);
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
      } = this, o = F(t, `.${s.slideClass}, swiper-slide`), n = Z(o[0]);
      return Z(e) - n;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: s
      } = e;
      e.slides = F(t, `.${s.slideClass}, swiper-slide`);
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
      const o = s.minTranslate(), a = (s.maxTranslate() - o) * e + o;
      s.translateTo(a, typeof t > "u" ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
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
        const o = e.getSlideClasses(s);
        t.push({
          slideEl: s,
          classNames: o
        }), e.emit("_slideClass", s, o);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const s = this, {
        params: o,
        slides: n,
        slidesGrid: a,
        slidesSizesGrid: l,
        size: r,
        activeIndex: p
      } = s;
      let c = 1;
      if (typeof o.slidesPerView == "number")
        return o.slidesPerView;
      if (o.centeredSlides) {
        let u = n[p] ? Math.ceil(n[p].swiperSlideSize) : 0, w;
        for (let h = p + 1; h < n.length; h += 1)
          n[h] && !w && (u += Math.ceil(n[h].swiperSlideSize), c += 1, u > r && (w = !0));
        for (let h = p - 1; h >= 0; h -= 1)
          n[h] && !w && (u += n[h].swiperSlideSize, c += 1, u > r && (w = !0));
      } else if (e === "current")
        for (let u = p + 1; u < n.length; u += 1)
          (t ? a[u] + l[u] - a[p] < r : a[u] - a[p] < r) && (c += 1);
      else
        for (let u = p - 1; u >= 0; u -= 1)
          a[p] - a[u] < r && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed)
        return;
      const {
        snapGrid: t,
        params: s
      } = e;
      s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && J(e, a);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function o() {
        const a = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
        e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (s.freeMode && s.freeMode.enabled && !s.cssMode)
        o(), s.autoHeight && e.updateAutoHeight();
      else {
        if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const a = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(a.length - 1, 0, !1, !0);
        } else
          n = e.slideTo(e.activeIndex, 0, !1, !0);
        n || o();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const s = this, o = s.params.direction;
      return e || (e = o === "horizontal" ? "vertical" : "horizontal"), e === o || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${o}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((n) => {
        e === "vertical" ? n.style.width = "" : n.style.height = "";
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
      const o = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(o()) : F(s, o())[0];
      return !a && t.params.createElements && (a = K("div", t.params.wrapperClass), s.append(a), F(s, `.${t.params.slideClass}`).forEach((l) => {
        a.append(l);
      })), Object.assign(t, {
        el: s,
        wrapperEl: a,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        // RTL
        rtl: s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl"),
        wrongRTL: V(a, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1)
        return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
      const o = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && o.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), o.forEach((n) => {
        n.complete ? J(t, n) : n.addEventListener("load", (a) => {
          J(t, a.target);
        });
      }), ae(t), t.initialized = !0, ae(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const s = this, {
        params: o,
        el: n,
        wrapperEl: a,
        slides: l
      } = s;
      return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), o.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttribute("style"), a.removeAttribute("style"), l && l.length && l.forEach((r) => {
        r.classList.remove(o.slideVisibleClass, o.slideFullyVisibleClass, o.slideActiveClass, o.slideNextClass, o.slidePrevClass), r.removeAttribute("style"), r.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((r) => {
        s.off(r);
      }), e !== !1 && (s.el.swiper = null, Qe(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      G(de, e);
    }
    static get extendedDefaults() {
      return de;
    }
    static get defaults() {
      return _e;
    }
    static installModule(e) {
      B.prototype.__modules__ || (B.prototype.__modules__ = []);
      const t = B.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => B.installModule(t)), B) : (B.installModule(e), B);
    }
  }
  Object.keys(le).forEach((i) => {
    Object.keys(le[i]).forEach((e) => {
      B.prototype[e] = le[i][e];
    });
  }), B.use([dt, ct]);
  function Le(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach((o) => {
      if (!t[o] && t.auto === !0) {
        let n = F(i.el, `.${s[o]}`)[0];
        n || (n = K("div", s[o]), n.className = s[o], i.el.append(n)), t[o] = n, e[o] = n;
      }
    }), t;
  }
  function hi(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: o
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
    function n(m) {
      let x;
      return m && typeof m == "string" && e.isElement && (x = e.el.querySelector(m), x) ? x : (m && (typeof m == "string" && (x = [...document.querySelectorAll(m)]), e.params.uniqueNavElements && typeof m == "string" && x.length > 1 && e.el.querySelectorAll(m).length === 1 && (x = e.el.querySelector(m))), m && !x ? m : x);
    }
    function a(m, x) {
      const b = e.params.navigation;
      m = A(m), m.forEach((d) => {
        d && (d.classList[x ? "add" : "remove"](...b.disabledClass.split(" ")), d.tagName === "BUTTON" && (d.disabled = x), e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](b.lockClass));
      });
    }
    function l() {
      const {
        nextEl: m,
        prevEl: x
      } = e.navigation;
      if (e.params.loop) {
        a(x, !1), a(m, !1);
        return;
      }
      a(x, e.isBeginning && !e.params.rewind), a(m, e.isEnd && !e.params.rewind);
    }
    function r(m) {
      m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), o("navigationPrev"));
    }
    function p(m) {
      m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), o("navigationNext"));
    }
    function c() {
      const m = e.params.navigation;
      if (e.params.navigation = Le(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(m.nextEl || m.prevEl))
        return;
      let x = n(m.nextEl), b = n(m.prevEl);
      Object.assign(e.navigation, {
        nextEl: x,
        prevEl: b
      }), x = A(x), b = A(b);
      const d = (f, g) => {
        f && f.addEventListener("click", g === "next" ? p : r), !e.enabled && f && f.classList.add(...m.lockClass.split(" "));
      };
      x.forEach((f) => d(f, "next")), b.forEach((f) => d(f, "prev"));
    }
    function u() {
      let {
        nextEl: m,
        prevEl: x
      } = e.navigation;
      m = A(m), x = A(x);
      const b = (d, f) => {
        d.removeEventListener("click", f === "next" ? p : r), d.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      m.forEach((d) => b(d, "next")), x.forEach((d) => b(d, "prev"));
    }
    s("init", () => {
      e.params.navigation.enabled === !1 ? h() : (c(), l());
    }), s("toEdge fromEdge lock unlock", () => {
      l();
    }), s("destroy", () => {
      u();
    }), s("enable disable", () => {
      let {
        nextEl: m,
        prevEl: x
      } = e.navigation;
      if (m = A(m), x = A(x), e.enabled) {
        l();
        return;
      }
      [...m, ...x].filter((b) => !!b).forEach((b) => b.classList.add(e.params.navigation.lockClass));
    }), s("click", (m, x) => {
      let {
        nextEl: b,
        prevEl: d
      } = e.navigation;
      b = A(b), d = A(d);
      const f = x.target;
      if (e.params.navigation.hideOnClick && !d.includes(f) && !b.includes(f)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === f || e.pagination.el.contains(f)))
          return;
        let g;
        b.length ? g = b[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (g = d[0].classList.contains(e.params.navigation.hiddenClass)), o(g === !0 ? "navigationShow" : "navigationHide"), [...b, ...d].filter((v) => !!v).forEach((v) => v.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const w = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), l();
    }, h = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
    };
    Object.assign(e.navigation, {
      enable: w,
      disable: h,
      update: l,
      init: c,
      destroy: u
    });
  }
  function q(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function gi(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: o
    } = i;
    const n = "swiper-pagination";
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
        formatFractionCurrent: (d) => d,
        formatFractionTotal: (d) => d,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
        paginationDisabledClass: `${n}-disabled`
      }
    }), e.pagination = {
      el: null,
      bullets: []
    };
    let a, l = 0;
    function r() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function p(d, f) {
      const {
        bulletActiveClass: g
      } = e.params.pagination;
      d && (d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`], d && (d.classList.add(`${g}-${f}`), d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`], d && d.classList.add(`${g}-${f}-${f}`)));
    }
    function c(d) {
      const f = d.target.closest(q(e.params.pagination.bulletClass));
      if (!f)
        return;
      d.preventDefault();
      const g = Z(f) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === g)
          return;
        e.slideToLoop(g);
      } else
        e.slideTo(g);
    }
    function u() {
      const d = e.rtl, f = e.params.pagination;
      if (r())
        return;
      let g = e.pagination.el;
      g = A(g);
      let v, T;
      const _ = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, D = e.params.loop ? Math.ceil(_ / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (T = e.previousRealIndex || 0, v = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (v = e.snapIndex, T = e.previousSnapIndex) : (T = e.previousIndex || 0, v = e.activeIndex || 0), f.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const C = e.pagination.bullets;
        let P, y, E;
        if (f.dynamicBullets && (a = ie(C[0], e.isHorizontal() ? "width" : "height", !0), g.forEach((k) => {
          k.style[e.isHorizontal() ? "width" : "height"] = `${a * (f.dynamicMainBullets + 4)}px`;
        }), f.dynamicMainBullets > 1 && T !== void 0 && (l += v - (T || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), P = Math.max(v - l, 0), y = P + (Math.min(C.length, f.dynamicMainBullets) - 1), E = (y + P) / 2), C.forEach((k) => {
          const S = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((L) => `${f.bulletActiveClass}${L}`)].map((L) => typeof L == "string" && L.includes(" ") ? L.split(" ") : L).flat();
          k.classList.remove(...S);
        }), g.length > 1)
          C.forEach((k) => {
            const S = Z(k);
            S === v ? k.classList.add(...f.bulletActiveClass.split(" ")) : e.isElement && k.setAttribute("part", "bullet"), f.dynamicBullets && (S >= P && S <= y && k.classList.add(...`${f.bulletActiveClass}-main`.split(" ")), S === P && p(k, "prev"), S === y && p(k, "next"));
          });
        else {
          const k = C[v];
          if (k && k.classList.add(...f.bulletActiveClass.split(" ")), e.isElement && C.forEach((S, L) => {
            S.setAttribute("part", L === v ? "bullet-active" : "bullet");
          }), f.dynamicBullets) {
            const S = C[P], L = C[y];
            for (let I = P; I <= y; I += 1)
              C[I] && C[I].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
            p(S, "prev"), p(L, "next");
          }
        }
        if (f.dynamicBullets) {
          const k = Math.min(C.length, f.dynamicMainBullets + 4), S = (a * k - a) / 2 - E * a, L = d ? "right" : "left";
          C.forEach((I) => {
            I.style[e.isHorizontal() ? L : "top"] = `${S}px`;
          });
        }
      }
      g.forEach((C, P) => {
        if (f.type === "fraction" && (C.querySelectorAll(q(f.currentClass)).forEach((y) => {
          y.textContent = f.formatFractionCurrent(v + 1);
        }), C.querySelectorAll(q(f.totalClass)).forEach((y) => {
          y.textContent = f.formatFractionTotal(D);
        })), f.type === "progressbar") {
          let y;
          f.progressbarOpposite ? y = e.isHorizontal() ? "vertical" : "horizontal" : y = e.isHorizontal() ? "horizontal" : "vertical";
          const E = (v + 1) / D;
          let k = 1, S = 1;
          y === "horizontal" ? k = E : S = E, C.querySelectorAll(q(f.progressbarFillClass)).forEach((L) => {
            L.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${S})`, L.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        f.type === "custom" && f.renderCustom ? (C.innerHTML = f.renderCustom(e, v + 1, D), P === 0 && o("paginationRender", C)) : (P === 0 && o("paginationRender", C), o("paginationUpdate", C)), e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? "add" : "remove"](f.lockClass);
      });
    }
    function w() {
      const d = e.params.pagination;
      if (r())
        return;
      const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let g = e.pagination.el;
      g = A(g);
      let v = "";
      if (d.type === "bullets") {
        let T = e.params.loop ? Math.ceil(f / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && T > f && (T = f);
        for (let _ = 0; _ < T; _ += 1)
          d.renderBullet ? v += d.renderBullet.call(e, _, d.bulletClass) : v += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`;
      }
      d.type === "fraction" && (d.renderFraction ? v = d.renderFraction.call(e, d.currentClass, d.totalClass) : v = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`), d.type === "progressbar" && (d.renderProgressbar ? v = d.renderProgressbar.call(e, d.progressbarFillClass) : v = `<span class="${d.progressbarFillClass}"></span>`), e.pagination.bullets = [], g.forEach((T) => {
        d.type !== "custom" && (T.innerHTML = v || ""), d.type === "bullets" && e.pagination.bullets.push(...T.querySelectorAll(q(d.bulletClass)));
      }), d.type !== "custom" && o("paginationRender", g[0]);
    }
    function h() {
      e.params.pagination = Le(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const d = e.params.pagination;
      if (!d.el)
        return;
      let f;
      typeof d.el == "string" && e.isElement && (f = e.el.querySelector(d.el)), !f && typeof d.el == "string" && (f = [...document.querySelectorAll(d.el)]), f || (f = d.el), !(!f || f.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...e.el.querySelectorAll(d.el)], f.length > 1 && (f = f.filter((g) => ve(g, ".swiper")[0] === e.el)[0])), Array.isArray(f) && f.length === 1 && (f = f[0]), Object.assign(e.pagination, {
        el: f
      }), f = A(f), f.forEach((g) => {
        d.type === "bullets" && d.clickable && g.classList.add(...(d.clickableClass || "").split(" ")), g.classList.add(d.modifierClass + d.type), g.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.type === "bullets" && d.dynamicBullets && (g.classList.add(`${d.modifierClass}${d.type}-dynamic`), l = 0, d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)), d.type === "progressbar" && d.progressbarOpposite && g.classList.add(d.progressbarOppositeClass), d.clickable && g.addEventListener("click", c), e.enabled || g.classList.add(d.lockClass);
      }));
    }
    function m() {
      const d = e.params.pagination;
      if (r())
        return;
      let f = e.pagination.el;
      f && (f = A(f), f.forEach((g) => {
        g.classList.remove(d.hiddenClass), g.classList.remove(d.modifierClass + d.type), g.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.clickable && (g.classList.remove(...(d.clickableClass || "").split(" ")), g.removeEventListener("click", c));
      })), e.pagination.bullets && e.pagination.bullets.forEach((g) => g.classList.remove(...d.bulletActiveClass.split(" ")));
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el)
        return;
      const d = e.params.pagination;
      let {
        el: f
      } = e.pagination;
      f = A(f), f.forEach((g) => {
        g.classList.remove(d.horizontalClass, d.verticalClass), g.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
      });
    }), s("init", () => {
      e.params.pagination.enabled === !1 ? b() : (h(), w(), u());
    }), s("activeIndexChange", () => {
      typeof e.snapIndex > "u" && u();
    }), s("snapIndexChange", () => {
      u();
    }), s("snapGridLengthChange", () => {
      w(), u();
    }), s("destroy", () => {
      m();
    }), s("enable disable", () => {
      let {
        el: d
      } = e.pagination;
      d && (d = A(d), d.forEach((f) => f.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), s("lock unlock", () => {
      u();
    }), s("click", (d, f) => {
      const g = f.target, v = A(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && v && v.length > 0 && !g.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && g === e.navigation.nextEl || e.navigation.prevEl && g === e.navigation.prevEl))
          return;
        const T = v[0].classList.contains(e.params.pagination.hiddenClass);
        o(T === !0 ? "paginationShow" : "paginationHide"), v.forEach((_) => _.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const x = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: d
      } = e.pagination;
      d && (d = A(d), d.forEach((f) => f.classList.remove(e.params.pagination.paginationDisabledClass))), h(), w(), u();
    }, b = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: d
      } = e.pagination;
      d && (d = A(d), d.forEach((f) => f.classList.add(e.params.pagination.paginationDisabledClass))), m();
    };
    Object.assign(e.pagination, {
      enable: x,
      disable: b,
      render: w,
      update: u,
      init: h,
      destroy: m
    });
  }
  function wi(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: o,
      params: n
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
    let a, l, r = n && n.autoplay ? n.autoplay.delay : 3e3, p = n && n.autoplay ? n.autoplay.delay : 3e3, c, u = (/* @__PURE__ */ new Date()).getTime(), w, h, m, x, b, d, f;
    function g(z) {
      !e || e.destroyed || !e.wrapperEl || z.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", g), !f && y());
    }
    const v = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      e.autoplay.paused ? w = !0 : w && (p = c, w = !1);
      const z = e.autoplay.paused ? c : u + p - (/* @__PURE__ */ new Date()).getTime();
      e.autoplay.timeLeft = z, o("autoplayTimeLeft", z, z / r), l = requestAnimationFrame(() => {
        v();
      });
    }, T = () => {
      let z;
      return e.virtual && e.params.virtual.enabled ? z = e.slides.filter((O) => O.classList.contains("swiper-slide-active"))[0] : z = e.slides[e.activeIndex], z ? parseInt(z.getAttribute("data-swiper-autoplay"), 10) : void 0;
    }, _ = (z) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      cancelAnimationFrame(l), v();
      let j = typeof z > "u" ? e.params.autoplay.delay : z;
      r = e.params.autoplay.delay, p = e.params.autoplay.delay;
      const O = T();
      !Number.isNaN(O) && O > 0 && typeof z > "u" && (j = O, r = O, p = O), c = j;
      const R = e.params.speed, Q = () => {
        !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(R, !0, !0), o("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, R, !0, !0), o("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(R, !0, !0), o("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, R, !0, !0), o("autoplay")), e.params.cssMode && (u = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          _();
        })));
      };
      return j > 0 ? (clearTimeout(a), a = setTimeout(() => {
        Q();
      }, j)) : requestAnimationFrame(() => {
        Q();
      }), j;
    }, D = () => {
      u = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, _(), o("autoplayStart");
    }, C = () => {
      e.autoplay.running = !1, clearTimeout(a), cancelAnimationFrame(l), o("autoplayStop");
    }, P = (z, j) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      clearTimeout(a), z || (d = !0);
      const O = () => {
        o("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", g) : y();
      };
      if (e.autoplay.paused = !0, j) {
        b && (c = e.params.autoplay.delay), b = !1, O();
        return;
      }
      c = (c || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - u), !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), O());
    }, y = () => {
      e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (u = (/* @__PURE__ */ new Date()).getTime(), d ? (d = !1, _(c)) : _(), e.autoplay.paused = !1, o("autoplayResume"));
    }, E = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      const z = N();
      z.visibilityState === "hidden" && (d = !0, P(!0)), z.visibilityState === "visible" && y();
    }, k = (z) => {
      z.pointerType === "mouse" && (d = !0, f = !0, !(e.animating || e.autoplay.paused) && P(!0));
    }, S = (z) => {
      z.pointerType === "mouse" && (f = !1, e.autoplay.paused && y());
    }, L = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", k), e.el.addEventListener("pointerleave", S));
    }, I = () => {
      e.el.removeEventListener("pointerenter", k), e.el.removeEventListener("pointerleave", S);
    }, H = () => {
      N().addEventListener("visibilitychange", E);
    }, ce = () => {
      N().removeEventListener("visibilitychange", E);
    };
    s("init", () => {
      e.params.autoplay.enabled && (L(), H(), D());
    }), s("destroy", () => {
      I(), ce(), e.autoplay.running && C();
    }), s("_freeModeStaticRelease", () => {
      (m || d) && y();
    }), s("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? C() : P(!0, !0);
    }), s("beforeTransitionStart", (z, j, O) => {
      e.destroyed || !e.autoplay.running || (O || !e.params.autoplay.disableOnInteraction ? P(!0, !0) : C());
    }), s("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          C();
          return;
        }
        h = !0, m = !1, d = !1, x = setTimeout(() => {
          d = !0, m = !0, P(!0);
        }, 200);
      }
    }), s("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !h)) {
        if (clearTimeout(x), clearTimeout(a), e.params.autoplay.disableOnInteraction) {
          m = !1, h = !1;
          return;
        }
        m && e.params.cssMode && y(), m = !1, h = !1;
      }
    }), s("slideChange", () => {
      e.destroyed || !e.autoplay.running || (b = !0);
    }), Object.assign(e.autoplay, {
      start: D,
      stop: C,
      pause: P,
      resume: y
    });
  }
  const xi = ".aa-awards{padding-left:60px}.awards-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:60px;margin-bottom:-webkit-calc(111px - 30px);margin-bottom:-moz-calc(111px - 30px);margin-bottom:81px}@media (max-width: 768px){.awards-container{flex-direction:column;align-items:flex-start;gap:12px;padding-left:0}}.awards-container .heading-3{width:180px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}@media (max-width: 768px){.awards-container .heading-3{width:100%;font-size:16px;font-weight:700;line-height:24px}}@media (min-width: 1200px){.awards-container .swiper{height:200px}}.awards-swiper{width:100%}.awards-swiper .swiper-wrapper{gap:60px}@media (max-width: 768px){.awards-swiper .swiper-wrapper{flex-wrap:wrap;gap:29px;pointer-events:none}}.awards-swiper .swiper-wrapper .swiper-slide{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}@media (max-width: 768px){.awards-swiper .swiper-wrapper .swiper-slide{width:64px;height:64px}}.awards-swiper .swiper-wrapper .swiper-slide img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}", vi = {
    modules: [hi, gi, wi],
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
  }, yi = [
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
  class bi {
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
            ${yi.map((t) => (
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
      this.container && (document.head.insertAdjacentHTML("beforeend", `<style>${xi}</style>`), this.container.innerHTML = e, new B(".awards-swiper", vi));
    }
    init() {
      this.render();
    }
  }
  const Si = "https://conversionratestore.github.io/projects/keenethics/", Me = "ourformSubmitted", ze = "noPhone", Ti = `section.contact-nav,.container .form-row{display:none}.crs-contact{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;max-width:100%;margin:0 auto;grid-gap:0 40px;gap:0 40px;font-family:Raleway}@media (max-width: 768px){.crs-contact{margin-top:24px;grid-template-columns:1fr;gap:18px}}.crs-contact>*{font-family:inherit}.crs-contact header{grid-column:1 / 2;grid-row:1 / 2}@media (max-width: 768px){.crs-contact header{grid-column:1 / 2}}.crs-contact header .title{font-size:32px;font-weight:700;line-height:1.25;color:#12233d}.crs-contact .left{flex:1;width:100%;grid-column:1 / 2;grid-row:2 / 3;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}@media (max-width: 768px){.crs-contact .left{grid-row:3 / 4}}.crs-contact .descr{font-size:18px;font-weight:700;color:#12233d;margin-top:32px;margin-bottom:32px}@media (max-width: 768px){.crs-contact .descr{display:none}}.crs-contact .list{display:grid;grid-gap:24px;gap:24px;list-style:none}.crs-contact .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:12px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:18px;font-weight:500;line-height:27px}.crs-contact .list li:before{content:"";display:block;width:24px;height:24px;aspect-ratio:1;border-radius:50%;background:url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0C4.48 0 0 4.49 0 10c0 5.5 4.48 10 10 10 5.51 0 10-4.5 10-10 0-5.51-4.49-10-10-10Zm4.78 7.7L9.1 13.37c-.14.13-.32.21-.52.21s-.4-.08-.54-.21l-2.83-2.83c-.29-.29-.29-.78 0-1.06.3-.29.77-.29 1.07 0l2.3 2.3 5.14-5.15c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.07Z" fill="%23D62C2C" /></svg>')}.crs-contact .info-block{margin-top:32px;border:1px dashed rgb(31,79,153);border-radius:8px;background:#fafcff;padding:20px 32px}.crs-contact .info-block .os-title{font-size:18px;font-weight:700}.crs-contact .info-block .os-title span{color:#d62c2c}.crs-contact .info-block .os-descr{margin-top:8px;color:#12233d;font-size:14px;font-weight:400}.crs-contact .form-container{border-radius:8px;background-color:#12233d;padding:40px;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}@media (max-width: 768px){.crs-contact .form-container{grid-row:2 / 3!important;grid-column:1 / 2!important;padding:24px 16px}}.crs-contact .form-container .form{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px}.crs-contact .form-container .form .title{font-family:Raleway;font-size:32px;font-weight:700;line-height:40px;text-align:left;color:#fff}@media (max-width: 768px){.crs-contact .form-container .form .title{font-size:24px;line-height:32px}}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){position:relative}.crs-contact .form-container .form label:has(.placeholder){position:relative}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){position:absolute;top:50%;left:21px;transform:translateY(-50%);font-size:16px;color:#6f7a88}.crs-contact .form-container .form label:has(.placeholder) .placeholder{position:absolute;top:50%;left:21px;transform:translateY(-50%);font-size:16px;color:#6f7a88}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){width:100%;color:#12233d;font-weight:700;font-size:16px}.crs-contact .form-container .form label:has(.placeholder) input{width:100%;color:#12233d;font-weight:700;font-size:16px}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){display:none}.crs-contact .form-container .form label:has(.placeholder) .placeholder{display:none}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){display:block}.crs-contact .form-container .form label:has(.placeholder) input+.placeholder{display:block}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-2j-2s-2p-38-2p-19-36-2t-35-39-2x-36-2t-2s-2l-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist):after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.crs-contact .form-container .form label:has(.placeholder) input[data-required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){border:2px solid #d62c2c}.crs-contact .form-container .form label:has(.placeholder) input.invalid{border:2px solid #d62c2c}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s-w-3i-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){visibility:visible}.crs-contact .form-container .form label:has(.placeholder) input.invalid~.error{visibility:visible}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.crs-contact .form-container .form label:has(.placeholder) .error{color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.crs-contact .form-container .form .actions{margin-top:12px}.crs-contact .form-container .form .actions .error{color:#d62c2c;font-weight:600;display:none}.crs-contact .form-container .form .actions .error.show{display:block;margin-bottom:10px}.crs-contact .form-container .form .actions button{height:48px;border:none;width:100%;font-size:16px;line-height:24px;font-weight:700;text-align:center;color:#fff;text-transform:uppercase;cursor:pointer}.crs-contact .form-container .form .privacy{margin-top:24px;font-size:14px;color:#dae4f2}.crs-contact .form-container .form .privacy *{line-height:24px;font-size:14px;color:#dae4f2}.crs-contact .form-container .form .privacy a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline}.crs-contact .form-container .form .privacy-descr{font-size:14px;margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.crs-contact .form-container .form .privacy-descr p{font-size:inherit}.crs-contact .form-container .form input{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600!important;line-height:22px}.crs-contact .form-container .form input,.crs-contact .form-container .form summary{padding-left:21px;padding-right:21px;border:none}.crs-contact .form-container .form input,.crs-contact .form-container .form details{height:48px;border-radius:10px}.crs-contact .form-container .form details{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center}.crs-contact .form-container .form .select{position:relative}.crs-contact .form-container .form input::-csstools-invalid-placeholder{font-size:16px;color:#6f7a88;font-family:inherit}.crs-contact .form-container .form summary:not(does-not-exist),.crs-contact .form-container .form input:not(does-not-exist){font-size:16px;color:#6f7a88;font-family:inherit}.crs-contact .form-container .form summary{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;height:100%;padding-right:10px}.crs-contact .form-container .form summary.selected{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:22px}.crs-contact .form-container .form summary[data-choosen]{color:#12233d;font-size:16px;font-weight:700}.crs-contact .form-container .form details{width:100%;background:#fff;cursor:pointer}.crs-contact .form-container .form details summary::marker{content:none;display:none}.crs-contact .form-container .form details summary::-webkit-details-marker{content:none;display:none}.crs-contact .form-container .form details summary:after{content:"";background-image:url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');background-size:contain;width:24px;height:24px;position:absolute;top:50%;right:15px;transform:rotate(180deg) translateY(50%)}.crs-contact .form-container .form details[open] summary:after{transform:rotate(0) translateY(-50%)}.crs-contact .form-container .form details[open] ul,.crs-contact .form-container .form details[open] label{cursor:pointer}.crs-contact .form-container .form details[open] ul{position:absolute;top:61px;border-radius:8px;box-shadow:0 4px 4px #00000040;left:0;display:grid;grid-gap:8px;gap:8px;background:#fff;width:100%;overflow:hidden;z-index:100;padding-top:12px}.crs-contact .form-container .form details[open] ul li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.crs-contact .form-container .form details[open] ul li label:hover{background-color:#f2f7ff}.crs-contact .form-container .form details[open] ul li label.selected{background-color:#f2f7ff}.crs-contact .form-container .form details[open] ul li label.selected:after{content:"";width:24px;height:24px;display:block;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L9.66118 17L19 7" stroke="%23D62C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.crs-contact .form-container .form details[open] input{position:absolute;left:0;opacity:0}.crs-contact .right{width:100%;grid-column:2 / 3;grid-row:1 / 3;flex:1}.crs-contact .estimate-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:32px}@media (max-width: 768px){.crs-contact .estimate-container{grid-column:1 / 2;grid-row:3 / 4}}.crs-contact .estimate-container .title{color:#0e1154;font-family:Raleway;font-size:42px;font-style:normal;font-weight:700;line-height:55px}@media (max-width: 768px){.crs-contact .estimate-container .title{display:none}}.crs-contact .estimate-container .descr{color:#12233d;font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}.crs-contact .contacts-container{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:flex-end;background:#f7f7f7;border-radius:8px;overflow:hidden}@media (max-width: 768px){.crs-contact .contacts-container{display:none}}.crs-contact .contacts-container .info{font-family:Raleway;position:absolute;bottom:0;left:0;border-radius:0 8px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);padding:21px 36px;width:312px;z-index:3}.crs-contact .contacts-container .info .name{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:18px;font-weight:700;line-height:24px}.crs-contact .contacts-container .info .position{margin-top:6px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:16px;font-weight:400;line-height:24px}.crs-contact .contacts-container img{height:100%;width:auto;-o-object-fit:cover;object-fit:cover;position:relative;z-index:2}.crs-contact .with-hero:after{content:"";position:absolute;top:50%;left:23%;width:680px;height:680px;border:162.29px solid #d62c2c;border:162.29px solid var(--red-600-valencia, #d62c2c);border-radius:50%;z-index:1}.crs-contact .mobile{display:none;flex-direction:column;gap:18px}.crs-contact .mobile .hero{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:8px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);gap:16px;height:96px;padding:16px}.crs-contact .mobile .hero img{width:68px;height:68px}.crs-contact .mobile .hero .info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:6px}.crs-contact .mobile .hero .info .name{font-size:18px;line-height:24px;font-weight:700;color:#12233d}.crs-contact .mobile .hero .info .position{font-size:16px;line-height:24px;font-weight:400;color:#12233d}.crs-contact .mobile .descr{font-size:18px;font-weight:700;color:#12233d;line-height:27px}.crs-contact .mobile .list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-wrap:wrap;gap:16px;list-style:none}.crs-contact .mobile .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:8px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:400;line-height:24px}.crs-contact .mobile .list li:before{content:"";display:block;width:12px;height:12px;border-radius:50%;background:#d62c2c}@media (max-width: 768px){.crs-contact .mobile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;grid-row:3 / 4}}`;
  class ki {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Ti}</style>`), this.render(), new bi(".awards"), this.submit();
    }
    submit() {
      const e = M(".crs-contact .form");
      e && (e.querySelectorAll("input").forEach((t) => {
        t.addEventListener("input", (s) => {
          var a;
          const o = s.target, n = (a = o.parentNode) == null ? void 0 : a.querySelector(".placeholder");
          n && (o.value ? n.style.display = "none" : n.style.display = "block");
        });
      }), e.addEventListener("submit", async (t) => {
        t.preventDefault();
        const s = e.querySelectorAll("input");
        let o = !0;
        if (s.forEach((l) => {
          let r = !0;
          const p = l.value.trim();
          if (l.id === "os-firstname" || l.id === "os-lastname") {
            if (l.id === "os-lastname" && p === "")
              return;
            r = /^[A-Za-z\s]+$/.test(p);
          } else
            l.id === "os-email" && (r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p));
          console.log("isValid", r), r ? l.classList.remove("invalid") : (l.classList.add("invalid"), o = !1), l.addEventListener("input", () => {
            l.classList.remove("invalid");
          });
        }), !o)
          return;
        const n = new FormData(e), a = Object.fromEntries(n.entries());
        console.log(a);
        try {
          await he({
            id: Ue,
            data: n
          }) && (localStorage.setItem(Me, "true"), localStorage.setItem(ze, "false"), window.location.href = "/success");
        } catch (l) {
          const r = e.querySelector(".actions .error");
          r && r.classList.add("show"), console.log(l);
        }
      }));
    }
    render() {
      const e = (
        /* HTML */
        `
      <div class="crs-contact">
        <header>
          <h2 class="title">
            Elevate Your Business <br class="mobile" with />
            with Custom Software<br class="mobile" />
            Development
          </h2>
        </header>
        <div class="left">
          <p class="descr">Discover how you can launch your projects up to 40% faster.</p>

          <ul class="list">
            <li>How our web development expertise accelerates your project launch and enhances efficiency</li>
            <li>How our custom solutions optimize your business processes and user experience</li>
            <li>How our tech innovation turns your web presence into a competitive advantage</li>
          </ul>

          <div class="info-block">
            <p class="os-title">Software development <span>starting at $5000 per project.</span></p>
            <p class="os-descr">A precise tailored quote for you business is available via consultation call.</p>
          </div>
        </div>
        <div class="right form-container">
          <form class="form" action="">
            <label>
              <input type="text" name="firstname" id="os-firstname" placeholder="" data-required />
              <span class="placeholder">First name</span>
              <div class="error">Please enter a valid name</div>
            </label>
            <label>
              <input type="text" name="lastname" id="os-lastname" placeholder="" />
              <span class="placeholder">Last name</span>
            </label>
            <label>
              <input type="email" name="email" id="os-email" placeholder="" data-required />
              <span class="placeholder"> Business email</span>
              <div class="error">Please enter a valid email</div>
            </label>
            <div class="actions">
              <div class="error">There was an error trying to send your message. Please try again later.</div>

              <button type="submit" class="btn-primary btn-primary_accent">Contact US</button>
              <div class="privacy">
                <div class="privacy-link">
                  By submitting, I agree to Keenethics’ <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                </div>
                <div class="privacy-descr">
                  <span>${me}</span>
                  <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="awards"></div>
    `
      ), t = M("section#contact-us .container");
      console.log("container", t), t && t.insertAdjacentHTML("afterbegin", e);
    }
  }
  const Ei = `section#contact-us .container>.row{display:none}section.contact-nav{display:none}.contact-us-form{display:none}.crs-auform{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;max-width:1110px;margin:64px auto;grid-gap:0 40px;gap:0 40px;font-family:Raleway}@media (max-width: 768px){.crs-auform{margin-top:34px;margin-bottom:34px}}.crs-auform>*{font-family:inherit}.crs-auform__title{font-size:54px;line-height:64px;font-weight:800;color:#12233d}.crs-auform__title--mobile{font-size:32px;line-height:40px;font-weight:800;color:#12233d}.crs-auform__title--mobile{display:none}.crs-auform__left{width:100%;grid-column:1 / 2;grid-row:1 / 3}.crs-auform__descr{font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:24px;letter-spacing:normal;text-align:left;color:#12233d}.crs-auform__descr span{font-weight:700}.crs-auform__descr:first-of-type{margin-top:32px}.crs-auform__descr:last-of-type{margin-top:24px}.crs-auform__lists{margin-top:24px;line-height:24px!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;padding-left:24px;padding-right:24px;gap:40px}.crs-auform__list{display:grid;grid-gap:16px;gap:16px;list-style:circle;font-size:16px;font-weight:400;line-height:24px}.crs-auform__list li::marker{color:#d62c2c}.crs-auform__right{flex:1;width:100%;border-radius:8px;background-color:#12233d;padding:40px;grid-column:2 / 3;grid-row:1 / 3}.crs-auform[data-action=download-step-2] .crs-auform__right{height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2p-39-2u-33-36-31-2n-2n-36-2x-2v-2w-38-1m-2w-2p-37-14-1a-2r-36-37-19-2p-39-2u-33-36-31-2n-2n-36-2x-2v-2w-38-19-2x-31-2v-1m-32-33-38-14-2j-2s-2p-38-2p-19-2p-2r-38-2x-33-32-1p-13-2s-33-3b-32-30-33-2p-2s-19-37-38-2t-34-19-1e-13-2l-15-15]:not(.does-not-exist):not(.does-not-exist){background-color:transparent;padding:0}.crs-auform__right:has(.crs-auform__right-img:not([data-action=download-step-2])){background-color:transparent;padding:0}.crs-auform__right .crs-auform__right-img{overflow:hidden;width:auto;height:100%;background-image:url(https://conversionratestore.github.io/projects/keenethics/img/h-woman.webp);background-position:right;border-radius:8px}.crs-auform__at{font-size:12px;color:#dae4f2}.form{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px}.form .title{font-family:Raleway;font-size:32px;font-weight:700;line-height:40px;text-align:left;color:#fff}@media (max-width: 768px){.form .title{font-size:24px;line-height:32px}}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15]:not(.does-not-exist):not(does-not-exist){position:relative}.form label:has(.placeholder){position:relative}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist){position:absolute;top:50%;left:21px;transform:translateY(-50%);color:#6f7a88;font-size:16px;line-height:24px;font-weight:600}.form label:has(.placeholder) .placeholder{position:absolute;top:50%;left:21px;transform:translateY(-50%);color:#6f7a88;font-size:16px;line-height:24px;font-weight:600}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38]:not(.does-not-exist):not(does-not-exist):not(does-not-exist){width:100%;color:#12233d;font-weight:700;font-size:16px}.form label:has(.placeholder) input{width:100%;color:#12233d;font-weight:700;font-size:16px}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist){display:none}.form label:has(.placeholder) .placeholder{display:none}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){display:block}.form label:has(.placeholder) input+.placeholder{display:block}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-2j-2s-2p-38-2p-19-36-2t-35-39-2x-36-2t-2s-2l-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist):after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.form label:has(.placeholder) input[data-required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){border:2px solid #d62c2c}.form label:has(.placeholder) input.invalid{border:2px solid #d62c2c}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s-w-3i-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){visibility:visible}.form label:has(.placeholder) input.invalid~.error{visibility:visible}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist){color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.form label:has(.placeholder) .error{color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.form .actions{margin-top:12px}.form .actions .error{color:#d62c2c;font-weight:600;display:none}.form .actions .error.show{display:block;margin-bottom:10px}.form .actions button{height:48px;border:none;width:100%;font-size:16px;line-height:24px;font-weight:700;text-align:center;color:#fff;text-transform:uppercase;cursor:pointer}.form .privacy{margin-top:24px;font-size:14px;color:#dae4f2}.form .privacy *{line-height:24px;font-size:14px;color:#dae4f2}.form .privacy a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline}.form .privacy-descr{font-size:14px;margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.form .privacy-descr p{font-size:inherit}.form input{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600!important;line-height:22px}.form input,.form summary{padding-left:21px;padding-right:21px;border:none}.form input,.form details{height:48px;border-radius:10px}.form details{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center}.form .select{position:relative}.form input::-csstools-invalid-placeholder{font-size:16px;color:#6f7a88;font-family:inherit}.form summary:not(does-not-exist),.form input:not(does-not-exist){font-size:16px;color:#6f7a88;font-family:inherit}.form summary{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;height:100%;color:#6f7a88;font-size:16px;line-height:24px;font-weight:600;padding-right:40px}.form summary.selected{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:22px}.form summary[data-choosen]{color:#12233d;font-size:16px;font-weight:700}.form details{width:100%;background:#fff;cursor:pointer}.form details summary::marker{content:none;display:none}.form details summary::-webkit-details-marker{content:none;display:none}.form details summary:after{content:"";background-image:url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');background-size:contain;width:24px;height:24px;position:absolute;top:50%;right:15px;transform:rotate(180deg) translateY(50%)}.form details[open] summary:after{transform:rotate(0) translateY(-50%)}.form details[open] ul,.form details[open] label{cursor:pointer}.form details[open] ul{position:absolute;top:61px;border-radius:8px;box-shadow:0 4px 4px #00000040;left:0;display:grid;grid-gap:8px;gap:8px;background:#fff;width:100%;overflow:hidden;z-index:100;padding-top:12px}.form details[open] ul li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.form details[open] ul li label:hover{background-color:#f2f7ff}.form details[open] ul li label.selected{background-color:#f2f7ff}.form details[open] ul li label.selected:after{content:"";width:24px;height:24px;display:block;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L9.66118 17L19 7" stroke="%23D62C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.form details[open] input{position:absolute;left:0;opacity:0}.form{display:none}[data-actions=download-step-2] .form{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}.crs-auform__actions{position:relative;margin-top:24px}.crs-auform__actions button{height:48px;padding:12px 20px;border-radius:8px;border:none;width:320px;font-size:16px;font-weight:600;text-align:center;cursor:pointer}.crs-auform[data-action=download-step-2] .crs-auform__actions button{width:100%}.crs-auform__privacy{font-size:14px;margin-top:24px;color:#dae4f2}.crs-auform__privacy *{font-size:inherit;line-height:24px}.crs-auform__privacy a{color:inherit}.crs-auform__privacy-descr{margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.crs-auform__download,[data-phone=hidden]{display:none}[data-phone=visible]{display:block}@media (max-width: 768px){#contact-us{padding:20px 0}.crs-auform{grid-template-columns:1fr;grid-template-rows:auto;max-width:100%;gap:16px;padding:0}.crs-auform__title{display:none}.crs-auform__title--mobile{display:block;grid-column:1 / 2;grid-row:1 / 2;font-size:32px}.crs-auform__right{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;padding:20px}.crs-auform__right .crs-auform__right-img{max-width:345px;width:100%;height:200px;-o-object-fit:cover;background-repeat:no-repeat;background-position:center;object-fit:cover;border-radius:8px;background-image:url(https://conversionratestore.github.io/projects/keenethics/img/h-woman-mob.webp)}.crs-auform[data-action=download-step-2] .crs-auform__download{display:block;grid-row:2 / 3}.crs-auform[data-action=download-step-2] .crs-auform__download span{font-weight:700}.crs-auform__left{grid-column:1 / 2;grid-row:4 / 5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column}.crs-auform__left .crs-auform__actions{order:2}.crs-auform__left .crs-auform__actions button{width:100%}.crs-auform__left .crs-auform__descr{margin:0}.crs-auform__left .crs-auform__descr:last-of-type{margin-top:24px;order:3}.crs-auform[data-action=download-step-2] .crs-auform__left .crs-auform__descr:last-of-type{order:2}.crs-auform__left .crs-auform__lists{line-height:24px;order:3}.crs-auform__form summary{padding-right:50px}.crs-auform[data-action=download-step-2] .crs-auform__desc{margin:0}.crs-auform[data-action=download-step-2] .crs-auform__descr:first-of-type{display:none}.crs-auform[data-action=download-step-2] .crs-auform__actions{margin:0}.crs-auform[data-action=download-step-2] .crs-auform__actions button{width:100%}.crs-auform__right{grid-column:1 / 2;grid-row:3 / 4}}`;
  class Ci {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Ei}</style>`), console.log("Estimate form is initialized"), this.render(), this.changeStep(), this.submit(), this.select();
    }
    submit() {
      const e = M(".crs-auform .form");
      e && (e.querySelectorAll("input").forEach((t) => {
        t.addEventListener("input", (s) => {
          var a;
          const o = s.target, n = (a = o.parentNode) == null ? void 0 : a.querySelector(".placeholder");
          n && (o.value ? n.style.display = "none" : n.style.display = "block");
        });
      }), e.addEventListener("submit", async (t) => {
        let s = !0;
        t.preventDefault(), Ie(".crs-auform input").forEach((a) => {
          let l = !0;
          const r = a.value.trim();
          if (a.id === "os-firstname" || a.id === "os-lastname") {
            if (a.id === "os-lastname" && r === "")
              return;
            l = /^[A-Za-z\s]+$/.test(r);
          } else
            a.id === "os-email" ? l = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r) : a.id === "os-phone" && r !== "" && (l = /^\+?[0-9\s]+$/.test(r));
          l ? a.classList.remove("invalid") : (a.classList.add("invalid"), s = !1), a.addEventListener("input", () => {
            a.classList.remove("invalid");
          });
        });
        const n = new FormData(e);
        if (s)
          try {
            if (await he({
              id: Ke,
              data: n
            })) {
              const l = Object.fromEntries(n.entries());
              fetch(`${Si}/files/uxaudit_keenethics.pdf`, {
                method: "GET"
              }).then((r) => r.blob()).then((r) => {
                const p = window.URL.createObjectURL(r), c = document.createElement("a");
                c.style.display = "none", c.href = p, c.target = "_blank", c.download = "uxaudit_keenethics", document.body.appendChild(c), c.click(), window.URL.revokeObjectURL(p);
              }), localStorage.setItem(Me, "true"), localStorage.setItem(ze, l.phone ? "true" : "false"), setTimeout(() => {
                window.location.href = "/success";
              }, 100);
            }
          } catch (a) {
            const l = e.querySelector(".actions .error");
            l && l.classList.add("show"), console.log(a);
          }
      }));
    }
    select() {
      var n;
      const e = M(".crs-auform .select details"), t = M(".crs-auform .select details summary"), s = M(".crs-auform .select details ul"), o = (n = M('.crs-auform input[name="phone"]')) == null ? void 0 : n.parentNode;
      !s || !e || !t || (s.addEventListener("click", (a) => {
        var p, c;
        const r = a.target.closest("li");
        r && (e.querySelectorAll("label").forEach((u) => {
          u.classList.remove("selected");
        }), (p = r.querySelector("label")) == null || p.classList.add("selected"), t && (t.textContent = r.textContent, t.classList.add("selected")), e.removeAttribute("open"), ((c = r.textContent) == null ? void 0 : c.trim().toLowerCase()) === "yes" ? o.style.display = "block" : o.style.display = "none");
      }), window.addEventListener("click", (a) => {
        a.target.closest(".select") || e.removeAttribute("open");
      }));
    }
    changeStep() {
      const e = M('button[data-action="download-step-1"]'), t = M(".form"), s = M(".crs-auform__right-img"), o = M(".crs-auform");
      e == null || e.addEventListener("click", () => {
        t.style.display = "flex", e.style.display = "none", s.style.display = "none", o.dataset.action = "download-step-2", s.dataset.action = "download-step-2";
      });
    }
    render() {
      const e = (
        /* HTML */
        `<div class="crs-auform">
      <h2 class="crs-auform__title--mobile">
        Get Our Free <br />
        UX Audit Guide
      </h2>
      <p class="crs-auform__download">
        Download our free report to find out how you can <span>launch your projects up to 40% faster</span>.
      </p>
      <div class="crs-auform__left">
        <h2 class="crs-auform__title">
          Get Our Free <br />
          UX Audit Guide
        </h2>
        <p class="crs-auform__descr">
          Download our free report to find out how you can <span>launch your projects up to 40% faster</span>.
        </p>
        <p class="crs-auform__descr"><span>In this report you will discover:</span>.</p>
        <div class="crs-auform__lists">
          <ul class="crs-auform__list">
            <li>The essentials of UX audits, their benefits, and our methodology.</li>
            <li>Success stories from our detailed UX case studies.</li>
            <li>Insights into our expert team and our comprehensive design services.</li>
          </ul>
        </div>
        <div class="crs-auform__actions">
          <button data-action="download-step-1" class="btn-primary btn-primary_accent">Download free guide</button>
        </div>
      </div>

      <div class="crs-auform__right">
        <div class="crs-auform__right-img"></div>
        <form class="form" action="">
          <label>
            <input type="text" name="firstname" id="os-firstname" placeholder="" data-required />
            <span class="placeholder">First name</span>
            <div class="error">Please enter a valid name</div>
          </label>
          <label>
            <input type="text" name="lastname" id="os-lastname" placeholder="" />
            <span class="placeholder">Last name</span>
          </label>
          <label>
            <input type="email" name="email" id="os-email" placeholder="" data-required />
            <span class="placeholder"> Business email</span>
            <div class="error">Please enter a valid email</div>
          </label>
          <div class="select">
            <details>
              <summary>How about request a consultation call?</summary>
              <ul>
                <li>
                  <label><input type="radio" value="No" />Yes</label>
                </li>
                <li>
                  <label><input type="radio" value="No" />No</label>
                </li>
              </ul>
            </details>
          </div>
          <label style="display:none">
            <input type="tel" name="phone" id="os-phone" placeholder="" />
            <span class="placeholder">Phone</span>
            <div class="error">Please enter a valid phone</div>
          </label>
          <div class="actions">
            <div class="error">There was an error trying to send your message. Please try again later.</div>

            <button type="submit" class="btn-primary btn-primary_accent">Download now</button>
            <div class="privacy">
              <div class="privacy-link">
                By submitting, I agree to Keenethics’ <a href="/privacy-policy" target="_blank">Privacy Policy</a>
              </div>
              <div class="privacy-descr">
                <span>${me}</span>
                <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>`
      ), t = M("#contacts-page");
      t && t.insertAdjacentHTML("afterbegin", `<div class="container">${e}</div>`);
    }
  }
  const _i = "@media (max-width: 780px){#site-header .navigation-inner{grid-template-columns:auto 1fr}}@media (max-width: 780px){#site-header .right-side{padding:0;display:block;justify-self:end}}@media (max-width: 780px){#site-header .right-side .contacts-btn{padding:12px 20px;background:#d62c2c;color:#fff}}";
  Pe({ name: "Improve user navigation on the blog pages and introduce new conversion mechanism", dev: "OS" }), Ae("");
  class Li {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${_i}</style>`), location.href.includes("blog") && (new Ye(), new qe(), new je(), new He()), location.pathname === "/success" && new Ge(), location.href.includes("estimate?target=audit") && new Ci(), location.href.includes("contacts?target=dev") && new ki();
    }
  }
  new Li();
})();
//# sourceMappingURL=index.js.map
