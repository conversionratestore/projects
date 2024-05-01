(function() {
  "use strict";
  const O = (i, e, t, s = "") => {
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
  }, W = (i, e, t, s, o = 1, n) => {
    let r = new IntersectionObserver(
      (a) => {
        a.forEach((c) => {
          c.isIntersecting && (r.unobserve(c.target), setTimeout(function() {
            l.observe(c.target);
          }, 1e3 * o));
        });
      },
      {
        threshold: 0.5
      }
    ), l = new IntersectionObserver((a) => {
      a.forEach((c) => {
        c.isIntersecting ? (O(
          e || `view_element_${c.target.id}`,
          t || `View element on screen (${o} sec or more)`,
          "view",
          s || c.target.id
        ), n && n(), r.unobserve(c.target)) : r.observe(c.target), l.unobserve(c.target);
      });
    });
    document.querySelectorAll(i).forEach((a) => {
      r.observe(a);
    });
  }, ie = (i) => document.querySelectorAll(i), C = (i) => document.querySelector(i), De = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, Ge = (i, e, t = "") => {
    let s = 0;
    function o() {
      const n = window.scrollY, r = window.innerHeight, l = document.documentElement.scrollHeight, a = (n + r) / l * 100;
      a >= s + 10 && (s = Math.round(a / 10) * 10, O(i, `${s}`, e, t)), a >= 100 && window.removeEventListener("scroll", o);
    }
    window.addEventListener("scroll", o);
  }, $e = "https://keenethics.com/wp-json/contact-form-7/v1/contact-forms";
  async function Be({ id: i, data: e }) {
    const t = `${$e}/${i}/feedback`;
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
  const Fe = 22433, me = "ourformSubmitted", he = "noPhone", ge = `#contact-us{padding:96px 0 68px}#contact-us:before{content:"";background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='579' height='579' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='289.5' cy='289.5' r='229.5' stroke='%23F2F7FF' stroke-width='120'/%3E%3C/svg%3E");height:579px;left:-289px;position:absolute;top:-289px;width:579px;z-index:-1}.section-form-result__text{line-height:28px}.section-form-result__data .btn-primary:first-of-type{display:none;width:377px;max-width:100%}.form-row div:first-child{flex:0 0 100%;max-width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center}.form-row div:last-child{display:none!important}.form-row form.form>*{display:none}.form-row form.form>button{background-color:#2969cc;border:none;width:380px}section.contact-nav{display:none}.section-form-result__title{font-weight:700!important}.thanks-section{position:relative}.thanks-section h1{margin-bottom:24px;text-transform:none;color:#12233d;font-size:54px;font-weight:800;line-height:64px;text-align:center}.thanks-section .section-form-result__text{margin-bottom:32px;text-align:center}.thanks-section .section-form-result__img{bottom:-68px;position:absolute;right:-270px}.js-has-pseudo [csstools-has-37-2t-2r-38-2x-33-32-1m-2w-2p-37-14-1a-37-2t-2r-38-2x-33-32-19-2u-33-36-31-19-36-2t-37-39-30-38-2n-2n-2x-31-2v-15]:not(does-not-exist){position:relative}section:has(.section-form-result__img){position:relative}.crs-thform{font-family:Raleway;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px}.crs-thform form{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:11px;width:380px}.crs-thform form input{border-radius:10px;border:solid 1px #e3e3e3;background-color:#fff;padding:12px;width:100%;font-size:16px;font-weight:600;text-align:left;color:#6f7a88;height:62px;color:#12233d}.crs-thform form .error{visibility:hidden;height:11px;line-height:11px;font-size:14px;color:#d62c2c}.crs-thform form button{padding:12px;width:100%;border:none;border-radius:8px;background-color:#2969cc;font-size:16px;font-weight:600;color:#fff;text-transform:uppercase;cursor:pointer;height:48px}@media (max-width: 768px){#contact-us{padding-top:48px}.section-form-result__title{font-size:42px!important;line-height:54px!important}.section-form-result__text br{display:none}.section-form-result__data{margin-bottom:0}.crs-thform{padding-left:15px;padding-right:15px;padding-bottom:25px}.crs-thform form{width:100%}.crs-thform form input{height:52px}}`;
  class je {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    render() {
      var a;
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
      ), t = JSON.parse(localStorage.getItem(he) || "false");
      if (!JSON.parse(localStorage.getItem(me) || "false"))
        return;
      if (localStorage.removeItem(me), t) {
        localStorage.removeItem(he), document.head.insertAdjacentHTML("beforeend", `<style>${ge}</style>`);
        const c = C(".btn-primary");
        c.style.display = "inline-block";
        return;
      }
      const o = C(".section-form-result__data");
      o && (document.head.insertAdjacentHTML("beforeend", `<style>${ge}</style>`), o.insertAdjacentHTML("beforeend", e));
      const n = /^\+?[0-9\s]+$/, r = C(".h1.section-form-result__title");
      r && (r.textContent = "Thank you for your request!");
      const l = C(".text-2.section-form-result__text");
      l && (l.innerHTML = "We will get back to you within 1 business day. <br> Please provide your phone number to enable us to call you."), C(".crs-thform form").addEventListener("submit", async (c) => {
        c.preventDefault();
        const p = c.currentTarget, f = new FormData(p), g = Object.fromEntries(f.entries());
        if (!(!g.phone || !n.test(g.phone))) {
          try {
            await Be({ id: Fe, data: f });
          } catch (h) {
            const m = p.querySelector(".action .error");
            m && m.classList.add("show"), console.log("error", h);
          }
          C(".crs-thform").style.display = "none", C(".text-2.section-form-result__text").innerHTML = "We will get back to you within 1 business day.", C(".btn-primary").style.display = "inline-block";
        }
      }), (a = C(".crs-thform input")) == null || a.addEventListener("input", (c) => {
        const p = c.target.value, f = C(".crs-thform form .error");
        n.test(p) ? f.style.visibility = "" : f.style.visibility = "visible";
      });
    }
  }
  class He {
    constructor() {
      this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.globalEvents(), this.blogEvents(), this.servicesPageEvents(), this.formsEvents();
    }
    globalEvents() {
      if (this.device === "mobile") {
        const e = C("#site-header .contacts-btn");
        e && e.addEventListener("click", () => {
          O("exp_improve_navigation_button_01", "Contact us", "click", "First screen Mobile");
        });
      }
    }
    blogEvents() {
      var e;
      location.pathname.includes("blog") && (W(
        ".article__sticky + .ux-audit-banner",
        "exp_improve_navigation_section_01",
        "Section",
        "Banner Get Free UX Audit Guide"
      ), Ge("exp_improve_navigation_button_02", "other", "Sticky banner Get Free UX Audit Guide"), W(
        "dialog.os-sticky",
        "exp_improve_navigation_section_02",
        "Section",
        "Banner What software solution are you looking for?"
      ), C("dialog.os-sticky").addEventListener("click", (s) => {
        var r;
        const o = s.target, n = (r = o.textContent) == null ? void 0 : r.toLowerCase();
        o.tagName === "A" && (n != null && n.includes("develop")) && O(
          "exp_improve_navigation_button_03",
          "Develop My Idea",
          "click",
          "Banner What software solution are you looking for?"
        ), o.tagName === "A" && (n != null && n.includes("optimize")) && O(
          "exp_improve_navigation_button_04",
          "Develop My Idea",
          "click",
          "Banner What software solution are you looking for?"
        ), o.tagName === "A" && (n != null && n.includes("scale")) && O(
          "exp_improve_navigation_button_05",
          "Develop My Idea",
          "click",
          "Banner What software solution are you looking for?"
        ), o.closest(".os-close") && O(
          "exp_improve_navigation_button_06",
          "Close",
          "click",
          "Banner What software solution are you looking for?"
        );
      }), W(
        ".article__sticky .article__share",
        "exp_improve_navigation_section_03",
        "Section",
        "Share this post"
      ), (e = C(".article__sticky .article__share")) == null || e.addEventListener("mousedown", (s) => {
        const o = s.target, n = {
          ".share-social__item_facebook": "Facebook",
          ".share-social__item_linkedin": "Linkedin",
          ".share-social__item_twitter": "Twitter"
        };
        for (const [r, l] of Object.entries(n))
          o.closest(r) && O("exp_improve_navigation_button_08", l, "click", "Social Media Share this post");
      }));
    }
    servicesPageEvents() {
      const e = C(".contacts-btn.os-new-cta"), t = e == null ? void 0 : e.nextElementSibling;
      e && e.addEventListener("mousedown", () => {
        O(
          "exp_improve_navigation_button_09",
          "Get tailored quote",
          "click",
          "Service page Web Development Services"
        );
      }), t && t.addEventListener("mousedown", () => {
        O(
          "exp_improve_navigation_button_10",
          "Check the case studies",
          "click",
          "Service page Web Development Services"
        );
      });
    }
    formsEvents() {
      var e, t, s, o;
      location.pathname.includes("contacts") && (W(".crs-contact .form", "exp_improve_navigation_section_04", "Section", "Contacts Get a Quote Now"), ie(".crs-contact .form input").forEach((n) => {
        n.addEventListener("change", (r) => {
          const l = r.target, a = {
            "os-firstname": { name: "First Name", id: "1" },
            "os-lastname": { name: "Last Name", id: "2" },
            "os-email": { name: "Email", id: "3" }
          };
          a[l.id] && O(
            `exp_improve_navigation_input_0${a[l.id].id}`,
            a[l.id].name,
            "input",
            "Contacts Get a Quote Now"
          );
        });
      }), (e = C('.crs-contact .form button[type="submit"]')) == null || e.addEventListener("click", () => {
        O("exp_improve_navigation_button_11", "GET A GUOTE", "click", "Contacts Get a Quote Now");
      })), location.pathname.includes("estimate") && ((t = C('button[data-action="download-step-1"]')) == null || t.addEventListener("click", () => {
        O(
          "exp_improve_navigation_button_12",
          "Download free guide",
          "click",
          "Estimate Get Our Free UX Audit Guide"
        );
      }), W(
        ".crs-auform form",
        "exp_improve_navigation_section_05",
        "Section",
        "Estimate Get Our Free UX Audit Guide"
      ), ie(".crs-auform .form input").forEach((n) => {
        n.addEventListener("change", (r) => {
          const l = r.target, a = {
            "os-firstname": { name: "First Name", id: "4" },
            "os-lastname": { name: "Last Name", id: "5" },
            "os-email": { name: "Email", id: "6" }
          };
          a[l.id] && O(
            `exp_improve_navigation_input_0${a[l.id].id}`,
            a[l.id].name,
            "input",
            "Estimate Get Our Free UX Audit Guide"
          );
        });
      }), (s = C(".crs-auform .form summary")) == null || s.addEventListener("click", (n) => {
        O(
          "exp_improve_navigation_dropdown_01",
          "How about request a consultation call?",
          "click",
          "Estimate Get Our Free UX Audit Guide"
        );
      }), (o = C('.crs-auform .form button[type="submit"]')) == null || o.addEventListener("click", (n) => {
        O("exp_improve_navigation_button_13", "Download now", "click", "Estimate Get Our Free UX Audit Guide");
      }));
    }
  }
  const Ne = ".os-wrapper{position:relative}.os-article-info{position:absolute;max-width:430px;bottom:0;padding-left:85px}.os-article-info .article__categories{margin:0}.d-block.d-xl-none .article__share{margin-bottom:24px}";
  class Ve {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Ne}</style>`), this.mobileChanges();
    }
    headerChanges() {
      const e = C(".article__img"), t = C(".article__authors"), s = C(".publish-times.article__times"), o = C(".article__categories"), n = document.createElement("div");
      n.classList.add("os-wrapper"), e.replaceWith(n);
      const r = document.createElement("div");
      r.classList.add("os-article-info"), r.appendChild(t), r.appendChild(s), r.appendChild(o), n.appendChild(e), n.appendChild(r);
    }
    mobileChanges() {
      const e = C(".d-block.d-xl-none .article__share"), t = C(".d-block.d-xl-none .article__toc");
      t && e && (t == null || t.before(e));
    }
  }
  const Re = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
  <path d="M0 16 16 0M0 0l16 16" stroke="#12233D" stroke-width="1.5" />
</svg>`
  ), qe = (
    /* HTML */
    `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
  <path
    d="M29.24 42.16c-.11 0-.25-.02-.36-.06-3.85-1.09-7.9-1.09-11.75 0-.71.2-1.46-.21-1.65-.92-.21-.7.21-1.45.92-1.64 4.33-1.23 8.89-1.23 13.23 0 .71.21 1.13.94.92 1.64-.2.6-.73.98-1.31.98ZM36.81 12.18c-1.99-4.02-5.84-6.99-10.31-7.97-4.67-1.03-9.47.08-13.13 3.03-3.68 2.93-5.77 7.32-5.77 12.02 0 4.96 2.98 10.16 7.46 13.16v1.6c-.02.53-.04 1.36.61 2.03.67.69 1.67.76 2.46.76h9.83c1.03 0 1.82-.28 2.36-.82.73-.75.71-1.71.69-2.22v-1.35c5.94-4 9.68-12.45 5.8-20.24ZM26.29 22.27l-2.05 3.56c-.27.46-.75.73-1.24.73-.25 0-.5-.06-.71-.19-.69-.4-.92-1.29-.54-1.96l1.63-2.83h-1.61c-.96 0-1.75-.42-2.17-1.13-.42-.73-.38-1.61.1-2.46l2.05-3.56c.4-.69 1.28-.92 1.95-.54.69.4.92 1.28.54 1.96l-1.63 2.83h1.61c.96 0 1.75.42 2.17 1.13.42.73.38 1.63-.1 2.46Z"
    fill="#D62C2C"
  />
</svg>`
  ), we = (
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
  ), We = ".os-sticky{position:fixed;bottom:0;box-shadow:0 -4px 8px #00000012;border:none;background:#fff;padding:0;width:100vw;max-width:100vw;font-family:Raleway;z-index:999}.os-sticky .os-content{padding:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:space-between;align-items:center;cursor:pointer}@media (max-width: 768px){.os-sticky .os-content{flex-direction:column;align-items:flex-start;padding:10px 16px;gap:6px}}.os-sticky .os-content .os-close{position:absolute;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center;top:29px;right:53px;border:none;background:none;width:25px;height:25px;cursor:pointer;z-index:999;padding:0}.os-sticky .os-content .os-close svg{height:16px;width:16px}@media (max-width: 768px){.os-sticky .os-content .os-close svg{height:12px;width:12px}}@media (max-width: 768px){.os-sticky .os-content .os-close{top:10px;right:16px}}.os-sticky .os-content .os-close:focus{outline:none}.os-sticky .os-content span{color:#12233d;font-size:22px;font-weight:700;line-height:32px;text-transform:uppercase;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:14px}@media (max-width: 768px){.os-sticky .os-content span{font-size:14px;line-height:27px;padding-right:25px}}.os-sticky .os-content span svg{width:46px;height:46px}@media (max-width: 768px){.os-sticky .os-content span svg{display:none}}.os-sticky .os-wrap{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:12px;margin-right:70px}@media (max-width: 768px){.os-sticky .os-wrap{margin-right:0}}.os-sticky .os-wrap a{padding:12px 20px;text-align:center}@media (max-width: 768px){.os-sticky .os-wrap a{padding:14px 6px;font-size:12px}}.os-sticky::backdrop{display:none}";
  class Ye {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${We}</style>`), this.render(), this.actions();
    }
    render() {
      const e = (
        /* HTML */
        `<dialog class="os-sticky">
      <div class="os-content">
        <button class="os-close" data-popup="close">${Re}</button>
        <span>${qe} What software solution are you looking for?</span>
        <div class="os-wrap">
          <a class="contacts-btn" href="/services-business-analysis#choose">Develop My Idea</a>
          <a class="contacts-btn" href="https://keenethics.com/services-ui-ux-design">Optimize My Business</a>
          <a class="contacts-btn" href="https://keenethics.com/services-dedicated-development-team#services"
            >Scale My Project</a
          >
        </div>
      </div>
    </dialog> `
      );
      document.body.insertAdjacentHTML("beforeend", e);
    }
    actions() {
      const e = document.querySelector("dialog"), t = e.querySelector("[data-popup=close]"), o = document.querySelectorAll("h2:has(span[id])")[0], n = document.querySelector(".d-none .ux-audit-banner");
      let r = window.scrollY, l = !1, a = !1;
      o.getBoundingClientRect().top + 300 < window.innerHeight && e.show(), window.addEventListener("scroll", () => {
        const p = window.scrollY;
        l = p > r, r = p;
        const f = o.getBoundingClientRect(), g = n.getBoundingClientRect();
        f.top + 300 < window.innerHeight && !a ? e.show() : l || e.close(), g.bottom > e.getBoundingClientRect().top && e.close();
      }), t && t.addEventListener("click", () => {
        e.close(), a = !0;
      });
    }
  }
  const Xe = ".article__sticky{max-height:100vh!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px}.article__sticky .book-call-banner{display:none!important}.article__sticky .article__toc{order:1}.article__sticky .article__share{order:0}.ux-audit-banner{--main-color: #12233d;top:196px;border-radius:20px;background:#12233d;background:var(--main-color);padding:24px;font-family:Raleway}.ux-audit-banner .os-content{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:20px}.ux-audit-banner .os-content .os-title{color:#fff;font-size:32px;font-weight:700;line-height:40px}.ux-audit-banner .os-content .os-subbanner{background:#fff;border-radius:8px;height:144px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}.ux-audit-banner .os-content .os-subbanner .os-subtitle{color:var(--main-color);font-size:54px;font-weight:900;line-height:30px}.ux-audit-banner .os-content .os-subbanner p{color:#d62c2c;font-size:14px;font-weight:700;line-height:24px}.ux-audit-banner .os-content .os-text{color:#fff;font-family:Raleway;font-size:18px;font-weight:500;line-height:150%}.d-block.d-xl-none .ux-audit-banner{margin-top:32px;margin-bottom:32px}.article__sticky+.ux-audit-banner{position:-webkit-sticky;position:sticky}";
  class Ue {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Xe}</style>`), this.uxAuditBanner();
    }
    uxAuditBanner() {
      const e = (
        /* HTML */
        `
      <div class="ux-audit-banner" style="top: 196px">
        <div class="os-content">
          <h3 class="os-title">
            Get Free <br />
            UX Audit Guide
          </h3>
          <div class="os-subbanner">
            <h4 class="os-subtitle">UX AUDIT</h4>
            <p>Expert review & Heuristic evaluation</p>
          </div>
          <p class="os-text">Discover how a UX audit can cut development costs and enhance your ROI over time.</p>
          <a href="/estimate?target=audit" class="btn-primary btn-primary_accent">Download Free Guide</a>
        </div>
      </div>
    `
      ), t = C(".article__sticky"), s = C(".d-block.d-xl-none .article__toc");
      t.insertAdjacentHTML("afterend", e), s && s.insertAdjacentHTML("afterend", e);
      const o = document.querySelector(".d-none .ux-audit-banner"), n = document.querySelector(".article__sticky");
      o.offsetHeight;
      let r = n.getBoundingClientRect().top;
      const l = n.scrollHeight, c = Math.max(200, Math.min(window.innerHeight - l - r, l)) - 50;
      if (n.style.height = `${c}px`, n.style.overflowY = "auto", n.offsetHeight, o.style.top = `${c}px`, o && n) {
        const p = n.scrollHeight;
        window.addEventListener("scroll", () => {
          o.offsetHeight, n.offsetHeight, r = n.getBoundingClientRect().top;
          const g = Math.max(200, Math.min(window.innerHeight - p - r, p)) - 100;
          n.style.height = `${g}px`, n.style.overflowY = "auto", o.style.top = `${g + 100}px`;
        });
      }
    }
  }
  const Ke = "https://keenethics.com/wp-json/contact-form-7/v1/contact-forms";
  async function xe({ id: i, data: e }) {
    const t = `${Ke}/${i}/feedback`;
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
  const Ze = 22435, Qe = 22436;
  function ve(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
  }
  function se(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {}), Object.keys(e).forEach((t) => {
      typeof i[t] > "u" ? i[t] = e[t] : ve(e[t]) && ve(i[t]) && Object.keys(e[t]).length > 0 && se(i[t], e[t]);
    });
  }
  const be = {
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
  function V() {
    const i = typeof document < "u" ? document : {};
    return se(i, be), i;
  }
  const Je = {
    document: be,
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
    return se(i, Je), i;
  }
  function et(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
  }
  function tt(i) {
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
  function ne(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function X() {
    return Date.now();
  }
  function it(i) {
    const e = $();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
  }
  function st(i, e) {
    e === void 0 && (e = "x");
    const t = $();
    let s, o, n;
    const r = it(i);
    return t.WebKitCSSMatrix ? (o = r.transform || r.webkitTransform, o.split(",").length > 6 && (o = o.split(", ").map((l) => l.replace(",", ".")).join(", ")), n = new t.WebKitCSSMatrix(o === "none" ? "" : o)) : (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = n.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? o = n.m41 : s.length === 16 ? o = parseFloat(s[12]) : o = parseFloat(s[4])), e === "y" && (t.WebKitCSSMatrix ? o = n.m42 : s.length === 16 ? o = parseFloat(s[13]) : o = parseFloat(s[5])), o || 0;
  }
  function U(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
  }
  function nt(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
  }
  function B() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const s = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (s != null && !nt(s)) {
        const o = Object.keys(Object(s)).filter((n) => e.indexOf(n) < 0);
        for (let n = 0, r = o.length; n < r; n += 1) {
          const l = o[n], a = Object.getOwnPropertyDescriptor(s, l);
          a !== void 0 && a.enumerable && (U(i[l]) && U(s[l]) ? s[l].__swiper__ ? i[l] = s[l] : B(i[l], s[l]) : !U(i[l]) && U(s[l]) ? (i[l] = {}, s[l].__swiper__ ? i[l] = s[l] : B(i[l], s[l])) : i[l] = s[l]);
        }
      }
    }
    return i;
  }
  function K(i, e, t) {
    i.style.setProperty(e, t);
  }
  function ye(i) {
    let {
      swiper: e,
      targetPosition: t,
      side: s
    } = i;
    const o = $(), n = -e.translate;
    let r = null, l;
    const a = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > n ? "next" : "prev", p = (g, h) => c === "next" && g >= h || c === "prev" && g <= h, f = () => {
      l = (/* @__PURE__ */ new Date()).getTime(), r === null && (r = l);
      const g = Math.max(Math.min((l - r) / a, 1), 0), h = 0.5 - Math.cos(g * Math.PI) / 2;
      let m = n + h * (t - n);
      if (p(m, t) && (m = t), e.wrapperEl.scrollTo({
        [s]: m
      }), p(m, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [s]: m
          });
        }), o.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = o.requestAnimationFrame(f);
    };
    f();
  }
  function H(i, e) {
    return e === void 0 && (e = ""), [...i.children].filter((t) => t.matches(e));
  }
  function Z(i) {
    try {
      console.warn(i);
      return;
    } catch {
    }
  }
  function Q(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : et(e)), t;
  }
  function ot(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
      const s = i.previousElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function rt(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
      const s = i.nextElementSibling;
      e ? s.matches(e) && t.push(s) : t.push(s), i = s;
    }
    return t;
  }
  function R(i, e) {
    return $().getComputedStyle(i, null).getPropertyValue(e);
  }
  function J(i) {
    let e = i, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function Se(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
      e ? s.matches(e) && t.push(s) : t.push(s), s = s.parentElement;
    return t;
  }
  function oe(i, e, t) {
    const s = $();
    return t ? i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : i.offsetWidth;
  }
  function A(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  let re;
  function at() {
    const i = $(), e = V();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    };
  }
  function Te() {
    return re || (re = at()), re;
  }
  let ae;
  function lt(i) {
    let {
      userAgent: e
    } = i === void 0 ? {} : i;
    const t = Te(), s = $(), o = s.navigator.platform, n = e || s.navigator.userAgent, r = {
      ios: !1,
      android: !1
    }, l = s.screen.width, a = s.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = n.match(/(iPad).*OS\s([\d_]+)/);
    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/), g = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = o === "Win32";
    let m = o === "MacIntel";
    const x = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !p && m && t.touch && x.indexOf(`${l}x${a}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !h && (r.os = "android", r.android = !0), (p || g || f) && (r.os = "ios", r.ios = !0), r;
  }
  function ke(i) {
    return i === void 0 && (i = {}), ae || (ae = lt(i)), ae;
  }
  let le;
  function dt() {
    const i = $(), e = ke();
    let t = !1;
    function s() {
      const l = i.navigator.userAgent.toLowerCase();
      return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
    }
    if (s()) {
      const l = String(i.navigator.userAgent);
      if (l.includes("Version/")) {
        const [a, c] = l.split("Version/")[1].split(" ")[0].split(".").map((p) => Number(p));
        t = a < 16 || a === 16 && c < 2;
      }
    }
    const o = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), n = s(), r = n || o && e.ios;
    return {
      isSafari: t || n,
      needPerspectiveFix: t,
      need3dFix: r,
      isWebView: o
    };
  }
  function ct() {
    return le || (le = dt()), le;
  }
  function pt(i) {
    let {
      swiper: e,
      on: t,
      emit: s
    } = i;
    const o = $();
    let n = null, r = null;
    const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    }, a = () => {
      !e || e.destroyed || !e.initialized || (n = new ResizeObserver((f) => {
        r = o.requestAnimationFrame(() => {
          const {
            width: g,
            height: h
          } = e;
          let m = g, x = h;
          f.forEach((y) => {
            let {
              contentBoxSize: d,
              contentRect: u,
              target: w
            } = y;
            w && w !== e.el || (m = u ? u.width : (d[0] || d).inlineSize, x = u ? u.height : (d[0] || d).blockSize);
          }), (m !== g || x !== h) && l();
        });
      }), n.observe(e.el));
    }, c = () => {
      r && o.cancelAnimationFrame(r), n && n.unobserve && e.el && (n.unobserve(e.el), n = null);
    }, p = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof o.ResizeObserver < "u") {
        a();
        return;
      }
      o.addEventListener("resize", l), o.addEventListener("orientationchange", p);
    }), t("destroy", () => {
      c(), o.removeEventListener("resize", l), o.removeEventListener("orientationchange", p);
    });
  }
  function ft(i) {
    let {
      swiper: e,
      extendParams: t,
      on: s,
      emit: o
    } = i;
    const n = [], r = $(), l = function(p, f) {
      f === void 0 && (f = {});
      const g = r.MutationObserver || r.WebkitMutationObserver, h = new g((m) => {
        if (e.__preventObserver__)
          return;
        if (m.length === 1) {
          o("observerUpdate", m[0]);
          return;
        }
        const x = function() {
          o("observerUpdate", m[0]);
        };
        r.requestAnimationFrame ? r.requestAnimationFrame(x) : r.setTimeout(x, 0);
      });
      h.observe(p, {
        attributes: typeof f.attributes > "u" ? !0 : f.attributes,
        childList: typeof f.childList > "u" ? !0 : f.childList,
        characterData: typeof f.characterData > "u" ? !0 : f.characterData
      }), n.push(h);
    }, a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const p = Se(e.hostEl);
          for (let f = 0; f < p.length; f += 1)
            l(p[f]);
        }
        l(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), l(e.wrapperEl, {
          attributes: !1
        });
      }
    }, c = () => {
      n.forEach((p) => {
        p.disconnect();
      }), n.splice(0, n.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), s("init", a), s("destroy", c);
  }
  var ut = {
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
        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
          r[l] = arguments[l];
        e.apply(s, r);
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
      for (var o = arguments.length, n = new Array(o), r = 0; r < o; r++)
        n[r] = arguments[r];
      return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), s = i) : (e = n[0].events, t = n[0].data, s = n[0].context || i), t.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((c) => {
          c.apply(s, [a, ...t]);
        }), i.eventsListeners && i.eventsListeners[a] && i.eventsListeners[a].forEach((c) => {
          c.apply(s, t);
        });
      }), i;
    }
  };
  function mt() {
    const i = this;
    let e, t;
    const s = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = s.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = s.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(R(s, "padding-left") || 0, 10) - parseInt(R(s, "padding-right") || 0, 10), t = t - parseInt(R(s, "padding-top") || 0, 10) - parseInt(R(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
      width: e,
      height: t,
      size: i.isHorizontal() ? e : t
    }));
  }
  function ht() {
    const i = this;
    function e(b, E) {
      return parseFloat(b.getPropertyValue(i.getDirectionLabel(E)) || 0);
    }
    const t = i.params, {
      wrapperEl: s,
      slidesEl: o,
      size: n,
      rtlTranslate: r,
      wrongRTL: l
    } = i, a = i.virtual && t.virtual.enabled, c = a ? i.virtual.slides.length : i.slides.length, p = H(o, `.${i.params.slideClass}, swiper-slide`), f = a ? i.virtual.slides.length : p.length;
    let g = [];
    const h = [], m = [];
    let x = t.slidesOffsetBefore;
    typeof x == "function" && (x = t.slidesOffsetBefore.call(i));
    let y = t.slidesOffsetAfter;
    typeof y == "function" && (y = t.slidesOffsetAfter.call(i));
    const d = i.snapGrid.length, u = i.slidesGrid.length;
    let w = t.spaceBetween, v = -x, T = 0, L = 0;
    if (typeof n > "u")
      return;
    typeof w == "string" && w.indexOf("%") >= 0 ? w = parseFloat(w.replace("%", "")) / 100 * n : typeof w == "string" && (w = parseFloat(w)), i.virtualSize = -w, p.forEach((b) => {
      r ? b.style.marginLeft = "" : b.style.marginRight = "", b.style.marginBottom = "", b.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (K(s, "--swiper-centered-offset-before", ""), K(s, "--swiper-centered-offset-after", ""));
    const G = t.grid && t.grid.rows > 1 && i.grid;
    G ? i.grid.initSlides(p) : i.grid && i.grid.unsetSlides();
    let _;
    const P = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((b) => typeof t.breakpoints[b].slidesPerView < "u").length > 0;
    for (let b = 0; b < f; b += 1) {
      _ = 0;
      let E;
      if (p[b] && (E = p[b]), G && i.grid.updateSlide(b, E, p), !(p[b] && R(E, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          P && (p[b].style[i.getDirectionLabel("width")] = "");
          const k = getComputedStyle(E), S = E.style.transform, M = E.style.webkitTransform;
          if (S && (E.style.transform = "none"), M && (E.style.webkitTransform = "none"), t.roundLengths)
            _ = i.isHorizontal() ? oe(E, "width", !0) : oe(E, "height", !0);
          else {
            const I = e(k, "width"), N = e(k, "padding-left"), ue = e(k, "padding-right"), z = e(k, "margin-left"), j = e(k, "margin-right"), D = k.getPropertyValue("box-sizing");
            if (D && D === "border-box")
              _ = I + z + j;
            else {
              const {
                clientWidth: q,
                offsetWidth: te
              } = E;
              _ = I + N + ue + z + j + (te - q);
            }
          }
          S && (E.style.transform = S), M && (E.style.webkitTransform = M), t.roundLengths && (_ = Math.floor(_));
        } else
          _ = (n - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (_ = Math.floor(_)), p[b] && (p[b].style[i.getDirectionLabel("width")] = `${_}px`);
        p[b] && (p[b].swiperSlideSize = _), m.push(_), t.centeredSlides ? (v = v + _ / 2 + T / 2 + w, T === 0 && b !== 0 && (v = v - n / 2 - w), b === 0 && (v = v - n / 2 - w), Math.abs(v) < 1 / 1e3 && (v = 0), t.roundLengths && (v = Math.floor(v)), L % t.slidesPerGroup === 0 && g.push(v), h.push(v)) : (t.roundLengths && (v = Math.floor(v)), (L - Math.min(i.params.slidesPerGroupSkip, L)) % i.params.slidesPerGroup === 0 && g.push(v), h.push(v), v = v + _ + w), i.virtualSize += _ + w, T = _, L += 1;
      }
    }
    if (i.virtualSize = Math.max(i.virtualSize, n) + y, r && l && (t.effect === "slide" || t.effect === "coverflow") && (s.style.width = `${i.virtualSize + w}px`), t.setWrapperSize && (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + w}px`), G && i.grid.updateWrapperSize(_, g), !t.centeredSlides) {
      const b = [];
      for (let E = 0; E < g.length; E += 1) {
        let k = g[E];
        t.roundLengths && (k = Math.floor(k)), g[E] <= i.virtualSize - n && b.push(k);
      }
      g = b, Math.floor(i.virtualSize - n) - Math.floor(g[g.length - 1]) > 1 && g.push(i.virtualSize - n);
    }
    if (a && t.loop) {
      const b = m[0] + w;
      if (t.slidesPerGroup > 1) {
        const E = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), k = b * t.slidesPerGroup;
        for (let S = 0; S < E; S += 1)
          g.push(g[g.length - 1] + k);
      }
      for (let E = 0; E < i.virtual.slidesBefore + i.virtual.slidesAfter; E += 1)
        t.slidesPerGroup === 1 && g.push(g[g.length - 1] + b), h.push(h[h.length - 1] + b), i.virtualSize += b;
    }
    if (g.length === 0 && (g = [0]), w !== 0) {
      const b = i.isHorizontal() && r ? "marginLeft" : i.getDirectionLabel("marginRight");
      p.filter((E, k) => !t.cssMode || t.loop ? !0 : k !== p.length - 1).forEach((E) => {
        E.style[b] = `${w}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let b = 0;
      m.forEach((k) => {
        b += k + (w || 0);
      }), b -= w;
      const E = b - n;
      g = g.map((k) => k <= 0 ? -x : k > E ? E + y : k);
    }
    if (t.centerInsufficientSlides) {
      let b = 0;
      if (m.forEach((E) => {
        b += E + (w || 0);
      }), b -= w, b < n) {
        const E = (n - b) / 2;
        g.forEach((k, S) => {
          g[S] = k - E;
        }), h.forEach((k, S) => {
          h[S] = k + E;
        });
      }
    }
    if (Object.assign(i, {
      slides: p,
      snapGrid: g,
      slidesGrid: h,
      slidesSizesGrid: m
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      K(s, "--swiper-centered-offset-before", `${-g[0]}px`), K(s, "--swiper-centered-offset-after", `${i.size / 2 - m[m.length - 1] / 2}px`);
      const b = -i.snapGrid[0], E = -i.slidesGrid[0];
      i.snapGrid = i.snapGrid.map((k) => k + b), i.slidesGrid = i.slidesGrid.map((k) => k + E);
    }
    if (f !== c && i.emit("slidesLengthChange"), g.length !== d && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), h.length !== u && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const b = `${t.containerModifierClass}backface-hidden`, E = i.el.classList.contains(b);
      f <= t.maxBackfaceHiddenSlides ? E || i.el.classList.add(b) : E && i.el.classList.remove(b);
    }
  }
  function gt(i) {
    const e = this, t = [], s = e.virtual && e.params.virtual.enabled;
    let o = 0, n;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const r = (l) => s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
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
          t.push(r(l));
        }
    else
      t.push(r(e.activeIndex));
    for (n = 0; n < t.length; n += 1)
      if (typeof t[n] < "u") {
        const l = t[n].offsetHeight;
        o = l > o ? l : o;
      }
    (o || o === 0) && (e.wrapperEl.style.height = `${o}px`);
  }
  function wt() {
    const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let s = 0; s < e.length; s += 1)
      e[s].swiperSlideOffset = (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - t - i.cssOverflowAdjustment();
  }
  function xt(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: s,
      rtlTranslate: o,
      snapGrid: n
    } = e;
    if (s.length === 0)
      return;
    typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let r = -i;
    o && (r = i), s.forEach((a) => {
      a.classList.remove(t.slideVisibleClass, t.slideFullyVisibleClass);
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let l = t.spaceBetween;
    typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
    for (let a = 0; a < s.length; a += 1) {
      const c = s[a];
      let p = c.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (p -= s[0].swiperSlideOffset);
      const f = (r + (t.centeredSlides ? e.minTranslate() : 0) - p) / (c.swiperSlideSize + l), g = (r - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - p) / (c.swiperSlideSize + l), h = -(r - p), m = h + e.slidesSizesGrid[a], x = h >= 0 && h <= e.size - e.slidesSizesGrid[a];
      (h >= 0 && h < e.size - 1 || m > 1 && m <= e.size || h <= 0 && m >= e.size) && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(a), s[a].classList.add(t.slideVisibleClass)), x && s[a].classList.add(t.slideFullyVisibleClass), c.progress = o ? -f : f, c.originalProgress = o ? -g : g;
    }
  }
  function vt(i) {
    const e = this;
    if (typeof i > "u") {
      const p = e.rtlTranslate ? -1 : 1;
      i = e && e.translate && e.translate * p || 0;
    }
    const t = e.params, s = e.maxTranslate() - e.minTranslate();
    let {
      progress: o,
      isBeginning: n,
      isEnd: r,
      progressLoop: l
    } = e;
    const a = n, c = r;
    if (s === 0)
      o = 0, n = !0, r = !0;
    else {
      o = (i - e.minTranslate()) / s;
      const p = Math.abs(i - e.minTranslate()) < 1, f = Math.abs(i - e.maxTranslate()) < 1;
      n = p || o <= 0, r = f || o >= 1, p && (o = 0), f && (o = 1);
    }
    if (t.loop) {
      const p = e.getSlideIndexByData(0), f = e.getSlideIndexByData(e.slides.length - 1), g = e.slidesGrid[p], h = e.slidesGrid[f], m = e.slidesGrid[e.slidesGrid.length - 1], x = Math.abs(i);
      x >= g ? l = (x - g) / m : l = (x + m - h) / m, l > 1 && (l -= 1);
    }
    Object.assign(e, {
      progress: o,
      progressLoop: l,
      isBeginning: n,
      isEnd: r
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), n && !a && e.emit("reachBeginning toEdge"), r && !c && e.emit("reachEnd toEdge"), (a && !n || c && !r) && e.emit("fromEdge"), e.emit("progress", o);
  }
  function bt() {
    const i = this, {
      slides: e,
      params: t,
      slidesEl: s,
      activeIndex: o
    } = i, n = i.virtual && t.virtual.enabled, r = i.grid && t.grid && t.grid.rows > 1, l = (f) => H(s, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
    e.forEach((f) => {
      f.classList.remove(t.slideActiveClass, t.slideNextClass, t.slidePrevClass);
    });
    let a, c, p;
    if (n)
      if (t.loop) {
        let f = o - i.virtual.slidesBefore;
        f < 0 && (f = i.virtual.slides.length + f), f >= i.virtual.slides.length && (f -= i.virtual.slides.length), a = l(`[data-swiper-slide-index="${f}"]`);
      } else
        a = l(`[data-swiper-slide-index="${o}"]`);
    else
      r ? (a = e.filter((f) => f.column === o)[0], p = e.filter((f) => f.column === o + 1)[0], c = e.filter((f) => f.column === o - 1)[0]) : a = e[o];
    a && (a.classList.add(t.slideActiveClass), r ? (p && p.classList.add(t.slideNextClass), c && c.classList.add(t.slidePrevClass)) : (p = rt(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !p && (p = e[0]), p && p.classList.add(t.slideNextClass), c = ot(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(t.slidePrevClass))), i.emitSlidesClasses();
  }
  const ee = (i, e) => {
    if (!i || i.destroyed || !i.params)
      return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, s = e.closest(t());
    if (s) {
      let o = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !o && i.isElement && (s.shadowRoot ? o = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        s.shadowRoot && (o = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), o && o.remove());
      })), o && o.remove();
    }
  }, de = (i, e) => {
    if (!i.slides[e])
      return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, ce = (i) => {
    if (!i || i.destroyed || !i.params)
      return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0)
      return;
    e = Math.min(e, t);
    const s = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), o = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const r = o, l = [r - e];
      l.push(...Array.from({
        length: e
      }).map((a, c) => r + s + c)), i.slides.forEach((a, c) => {
        l.includes(a.column) && de(i, c);
      });
      return;
    }
    const n = o + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let r = o - e; r <= n + e; r += 1) {
        const l = (r % t + t) % t;
        (l < o || l > n) && de(i, l);
      }
    else
      for (let r = Math.max(o - e, 0); r <= Math.min(n + e, t - 1); r += 1)
        r !== o && (r > n || r < o) && de(i, r);
  };
  function yt(i) {
    const {
      slidesGrid: e,
      params: t
    } = i, s = i.rtlTranslate ? i.translate : -i.translate;
    let o;
    for (let n = 0; n < e.length; n += 1)
      typeof e[n + 1] < "u" ? s >= e[n] && s < e[n + 1] - (e[n + 1] - e[n]) / 2 ? o = n : s >= e[n] && s < e[n + 1] && (o = n + 1) : s >= e[n] && (o = n);
    return t.normalizeSlideIndex && (o < 0 || typeof o > "u") && (o = 0), o;
  }
  function St(i) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: s,
      params: o,
      activeIndex: n,
      realIndex: r,
      snapIndex: l
    } = e;
    let a = i, c;
    const p = (h) => {
      let m = h - e.virtual.slidesBefore;
      return m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m;
    };
    if (typeof a > "u" && (a = yt(e)), s.indexOf(t) >= 0)
      c = s.indexOf(t);
    else {
      const h = Math.min(o.slidesPerGroupSkip, a);
      c = h + Math.floor((a - h) / o.slidesPerGroup);
    }
    if (c >= s.length && (c = s.length - 1), a === n && !e.params.loop) {
      c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
      return;
    }
    if (a === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = p(a);
      return;
    }
    const f = e.grid && o.grid && o.grid.rows > 1;
    let g;
    if (e.virtual && o.virtual.enabled && o.loop)
      g = p(a);
    else if (f) {
      const h = e.slides.filter((x) => x.column === a)[0];
      let m = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(m) && (m = Math.max(e.slides.indexOf(h), 0)), g = Math.floor(m / o.grid.rows);
    } else if (e.slides[a]) {
      const h = e.slides[a].getAttribute("data-swiper-slide-index");
      h ? g = parseInt(h, 10) : g = a;
    } else
      g = a;
    Object.assign(e, {
      previousSnapIndex: l,
      snapIndex: c,
      previousRealIndex: r,
      realIndex: g,
      previousIndex: n,
      activeIndex: a
    }), e.initialized && ce(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (r !== g && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function Tt(i, e) {
    const t = this, s = t.params;
    let o = i.closest(`.${s.slideClass}, swiper-slide`);
    !o && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((l) => {
      !o && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (o = l);
    });
    let n = !1, r;
    if (o) {
      for (let l = 0; l < t.slides.length; l += 1)
        if (t.slides[l] === o) {
          n = !0, r = l;
          break;
        }
    }
    if (o && n)
      t.clickedSlide = o, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(o.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = r;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var kt = {
    updateSize: mt,
    updateSlides: ht,
    updateAutoHeight: gt,
    updateSlidesOffset: wt,
    updateSlidesProgress: xt,
    updateProgress: vt,
    updateSlidesClasses: bt,
    updateActiveIndex: St,
    updateClickedSlide: Tt
  };
  function Et(i) {
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
    let r = st(n, i);
    return r += e.cssOverflowAdjustment(), s && (r = -r), r || 0;
  }
  function _t(i, e) {
    const t = this, {
      rtlTranslate: s,
      params: o,
      wrapperEl: n,
      progress: r
    } = t;
    let l = 0, a = 0;
    const c = 0;
    t.isHorizontal() ? l = s ? -i : i : a = i, o.roundLengths && (l = Math.floor(l), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : a, o.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : o.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`);
    let p;
    const f = t.maxTranslate() - t.minTranslate();
    f === 0 ? p = 0 : p = (i - t.minTranslate()) / f, p !== r && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
  }
  function Ct() {
    return -this.snapGrid[0];
  }
  function Lt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Mt(i, e, t, s, o) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), s === void 0 && (s = !0);
    const n = this, {
      params: r,
      wrapperEl: l
    } = n;
    if (n.animating && r.preventInteractionOnTransition)
      return !1;
    const a = n.minTranslate(), c = n.maxTranslate();
    let p;
    if (s && i > a ? p = a : s && i < c ? p = c : p = i, n.updateProgress(p), r.cssMode) {
      const f = n.isHorizontal();
      if (e === 0)
        l[f ? "scrollLeft" : "scrollTop"] = -p;
      else {
        if (!n.support.smoothScroll)
          return ye({
            swiper: n,
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
    return e === 0 ? (n.setTransition(0), n.setTranslate(p), t && (n.emit("beforeTransitionStart", e, o), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(p), t && (n.emit("beforeTransitionStart", e, o), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(g) {
      !n || n.destroyed || g.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, t && n.emit("transitionEnd"));
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
  }
  var zt = {
    getTranslate: Et,
    setTranslate: _t,
    minTranslate: Ct,
    maxTranslate: Lt,
    translateTo: Mt
  };
  function Pt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
  }
  function Ee(i) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: s,
      step: o
    } = i;
    const {
      activeIndex: n,
      previousIndex: r
    } = e;
    let l = s;
    if (l || (n > r ? l = "next" : n < r ? l = "prev" : l = "reset"), e.emit(`transition${o}`), t && n !== r) {
      if (l === "reset") {
        e.emit(`slideResetTransition${o}`);
        return;
      }
      e.emit(`slideChangeTransition${o}`), l === "next" ? e.emit(`slideNextTransition${o}`) : e.emit(`slidePrevTransition${o}`);
    }
  }
  function It(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    s.cssMode || (s.autoHeight && t.updateAutoHeight(), Ee({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "Start"
    }));
  }
  function At(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: s
    } = t;
    t.animating = !1, !s.cssMode && (t.setTransition(0), Ee({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "End"
    }));
  }
  var Ot = {
    setTransition: Pt,
    transitionStart: It,
    transitionEnd: At
  };
  function Dt(i, e, t, s, o) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const n = this;
    let r = i;
    r < 0 && (r = 0);
    const {
      params: l,
      snapGrid: a,
      slidesGrid: c,
      previousIndex: p,
      activeIndex: f,
      rtlTranslate: g,
      wrapperEl: h,
      enabled: m
    } = n;
    if (n.animating && l.preventInteractionOnTransition || !m && !s && !o || n.destroyed)
      return !1;
    const x = Math.min(n.params.slidesPerGroupSkip, r);
    let y = x + Math.floor((r - x) / n.params.slidesPerGroup);
    y >= a.length && (y = a.length - 1);
    const d = -a[y];
    if (l.normalizeSlideIndex)
      for (let w = 0; w < c.length; w += 1) {
        const v = -Math.floor(d * 100), T = Math.floor(c[w] * 100), L = Math.floor(c[w + 1] * 100);
        typeof c[w + 1] < "u" ? v >= T && v < L - (L - T) / 2 ? r = w : v >= T && v < L && (r = w + 1) : v >= T && (r = w);
      }
    if (n.initialized && r !== f && (!n.allowSlideNext && (g ? d > n.translate && d > n.minTranslate() : d < n.translate && d < n.minTranslate()) || !n.allowSlidePrev && d > n.translate && d > n.maxTranslate() && (f || 0) !== r))
      return !1;
    r !== (p || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(d);
    let u;
    if (r > f ? u = "next" : r < f ? u = "prev" : u = "reset", g && -d === n.translate || !g && d === n.translate)
      return n.updateActiveIndex(r), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(d), u !== "reset" && (n.transitionStart(t, u), n.transitionEnd(t, u)), !1;
    if (l.cssMode) {
      const w = n.isHorizontal(), v = g ? d : -d;
      if (e === 0) {
        const T = n.virtual && n.params.virtual.enabled;
        T && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), T && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          h[w ? "scrollLeft" : "scrollTop"] = v;
        })) : h[w ? "scrollLeft" : "scrollTop"] = v, T && requestAnimationFrame(() => {
          n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
        });
      } else {
        if (!n.support.smoothScroll)
          return ye({
            swiper: n,
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
    return n.setTransition(e), n.setTranslate(d), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, s), n.transitionStart(t, u), e === 0 ? n.transitionEnd(t, u) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(v) {
      !n || n.destroyed || v.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(t, u));
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
  }
  function Gt(i, e, t, s) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const o = this;
    if (o.destroyed)
      return;
    const n = o.grid && o.params.grid && o.params.grid.rows > 1;
    let r = i;
    if (o.params.loop)
      if (o.virtual && o.params.virtual.enabled)
        r = r + o.virtual.slidesBefore;
      else {
        let l;
        if (n) {
          const g = r * o.params.grid.rows;
          l = o.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === g)[0].column;
        } else
          l = o.getSlideIndexByData(r);
        const a = n ? Math.ceil(o.slides.length / o.params.grid.rows) : o.slides.length, {
          centeredSlides: c
        } = o.params;
        let p = o.params.slidesPerView;
        p === "auto" ? p = o.slidesPerViewDynamic() : (p = Math.ceil(parseFloat(o.params.slidesPerView, 10)), c && p % 2 === 0 && (p = p + 1));
        let f = a - l < p;
        if (c && (f = f || l < Math.ceil(p / 2)), f) {
          const g = c ? l < o.activeIndex ? "prev" : "next" : l - o.activeIndex - 1 < o.params.slidesPerView ? "next" : "prev";
          o.loopFix({
            direction: g,
            slideTo: !0,
            activeSlideIndex: g === "next" ? l + 1 : l - a + 1,
            slideRealIndex: g === "next" ? o.realIndex : void 0
          });
        }
        if (n) {
          const g = r * o.params.grid.rows;
          r = o.slides.filter((h) => h.getAttribute("data-swiper-slide-index") * 1 === g)[0].column;
        } else
          r = o.getSlideIndexByData(r);
      }
    return requestAnimationFrame(() => {
      o.slideTo(r, e, t, s);
    }), o;
  }
  function $t(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      enabled: o,
      params: n,
      animating: r
    } = s;
    if (!o || s.destroyed)
      return s;
    let l = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : l, c = s.virtual && n.virtual.enabled;
    if (n.loop) {
      if (r && !c && n.loopPreventsSliding)
        return !1;
      if (s.loopFix({
        direction: "next"
      }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && n.cssMode)
        return requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, i, e, t);
        }), !0;
    }
    return n.rewind && s.isEnd ? s.slideTo(0, i, e, t) : s.slideTo(s.activeIndex + a, i, e, t);
  }
  function Bt(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this, {
      params: o,
      snapGrid: n,
      slidesGrid: r,
      rtlTranslate: l,
      enabled: a,
      animating: c
    } = s;
    if (!a || s.destroyed)
      return s;
    const p = s.virtual && o.virtual.enabled;
    if (o.loop) {
      if (c && !p && o.loopPreventsSliding)
        return !1;
      s.loopFix({
        direction: "prev"
      }), s._clientLeft = s.wrapperEl.clientLeft;
    }
    const f = l ? s.translate : -s.translate;
    function g(d) {
      return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
    }
    const h = g(f), m = n.map((d) => g(d));
    let x = n[m.indexOf(h) - 1];
    if (typeof x > "u" && o.cssMode) {
      let d;
      n.forEach((u, w) => {
        h >= u && (d = w);
      }), typeof d < "u" && (x = n[d > 0 ? d - 1 : d]);
    }
    let y = 0;
    if (typeof x < "u" && (y = r.indexOf(x), y < 0 && (y = s.activeIndex - 1), o.slidesPerView === "auto" && o.slidesPerGroup === 1 && o.slidesPerGroupAuto && (y = y - s.slidesPerViewDynamic("previous", !0) + 1, y = Math.max(y, 0))), o.rewind && s.isBeginning) {
      const d = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
      return s.slideTo(d, i, e, t);
    } else if (o.loop && s.activeIndex === 0 && o.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(y, i, e, t);
      }), !0;
    return s.slideTo(y, i, e, t);
  }
  function Ft(i, e, t) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0);
    const s = this;
    if (!s.destroyed)
      return s.slideTo(s.activeIndex, i, e, t);
  }
  function jt(i, e, t, s) {
    i === void 0 && (i = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
    const o = this;
    if (o.destroyed)
      return;
    let n = o.activeIndex;
    const r = Math.min(o.params.slidesPerGroupSkip, n), l = r + Math.floor((n - r) / o.params.slidesPerGroup), a = o.rtlTranslate ? o.translate : -o.translate;
    if (a >= o.snapGrid[l]) {
      const c = o.snapGrid[l], p = o.snapGrid[l + 1];
      a - c > (p - c) * s && (n += o.params.slidesPerGroup);
    } else {
      const c = o.snapGrid[l - 1], p = o.snapGrid[l];
      a - c <= (p - c) * s && (n -= o.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, o.slidesGrid.length - 1), o.slideTo(n, i, e, t);
  }
  function Ht() {
    const i = this;
    if (i.destroyed)
      return;
    const {
      params: e,
      slidesEl: t
    } = i, s = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let o = i.clickedIndex, n;
    const r = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (i.animating)
        return;
      n = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? o < i.loopedSlides - s / 2 || o > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), o = i.getSlideIndex(H(t, `${r}[data-swiper-slide-index="${n}"]`)[0]), ne(() => {
        i.slideTo(o);
      })) : i.slideTo(o) : o > i.slides.length - s ? (i.loopFix(), o = i.getSlideIndex(H(t, `${r}[data-swiper-slide-index="${n}"]`)[0]), ne(() => {
        i.slideTo(o);
      })) : i.slideTo(o);
    } else
      i.slideTo(o);
  }
  var Nt = {
    slideTo: Dt,
    slideToLoop: Gt,
    slideNext: $t,
    slidePrev: Bt,
    slideReset: Ft,
    slideToClosest: jt,
    slideToClickedSlide: Ht
  };
  function Vt(i) {
    const e = this, {
      params: t,
      slidesEl: s
    } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
      return;
    const o = () => {
      H(s, `.${t.slideClass}, swiper-slide`).forEach((f, g) => {
        f.setAttribute("data-swiper-slide-index", g);
      });
    }, n = e.grid && t.grid && t.grid.rows > 1, r = t.slidesPerGroup * (n ? t.grid.rows : 1), l = e.slides.length % r !== 0, a = n && e.slides.length % t.grid.rows !== 0, c = (p) => {
      for (let f = 0; f < p; f += 1) {
        const g = e.isElement ? Q("swiper-slide", [t.slideBlankClass]) : Q("div", [t.slideClass, t.slideBlankClass]);
        e.slidesEl.append(g);
      }
    };
    if (l) {
      if (t.loopAddBlankSlides) {
        const p = r - e.slides.length % r;
        c(p), e.recalcSlides(), e.updateSlides();
      } else
        Z("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      o();
    } else if (a) {
      if (t.loopAddBlankSlides) {
        const p = t.grid.rows - e.slides.length % t.grid.rows;
        c(p), e.recalcSlides(), e.updateSlides();
      } else
        Z("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      o();
    } else
      o();
    e.loopFix({
      slideRealIndex: i,
      direction: t.centeredSlides ? void 0 : "next"
    });
  }
  function Rt(i) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: o,
      activeSlideIndex: n,
      byController: r,
      byMousewheel: l
    } = i === void 0 ? {} : i;
    const a = this;
    if (!a.params.loop)
      return;
    a.emit("beforeLoopFix");
    const {
      slides: c,
      allowSlidePrev: p,
      allowSlideNext: f,
      slidesEl: g,
      params: h
    } = a, {
      centeredSlides: m
    } = h;
    if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && h.virtual.enabled) {
      t && (!h.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : h.centeredSlides && a.snapIndex < h.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = p, a.allowSlideNext = f, a.emit("loopFix");
      return;
    }
    let x = h.slidesPerView;
    x === "auto" ? x = a.slidesPerViewDynamic() : (x = Math.ceil(parseFloat(h.slidesPerView, 10)), m && x % 2 === 0 && (x = x + 1));
    const y = h.slidesPerGroupAuto ? x : h.slidesPerGroup;
    let d = y;
    d % y !== 0 && (d += y - d % y), d += h.loopAdditionalSlides, a.loopedSlides = d;
    const u = a.grid && h.grid && h.grid.rows > 1;
    c.length < x + d ? Z("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : u && h.grid.fill === "row" && Z("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const w = [], v = [];
    let T = a.activeIndex;
    typeof n > "u" ? n = a.getSlideIndex(c.filter((S) => S.classList.contains(h.slideActiveClass))[0]) : T = n;
    const L = s === "next" || !s, G = s === "prev" || !s;
    let _ = 0, P = 0;
    const b = u ? Math.ceil(c.length / h.grid.rows) : c.length, k = (u ? c[n].column : n) + (m && typeof o > "u" ? -x / 2 + 0.5 : 0);
    if (k < d) {
      _ = Math.max(d - k, y);
      for (let S = 0; S < d - k; S += 1) {
        const M = S - Math.floor(S / b) * b;
        if (u) {
          const I = b - M - 1;
          for (let N = c.length - 1; N >= 0; N -= 1)
            c[N].column === I && w.push(N);
        } else
          w.push(b - M - 1);
      }
    } else if (k + x > b - d) {
      P = Math.max(k - (b - d * 2), y);
      for (let S = 0; S < P; S += 1) {
        const M = S - Math.floor(S / b) * b;
        u ? c.forEach((I, N) => {
          I.column === M && v.push(N);
        }) : v.push(M);
      }
    }
    if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }), G && w.forEach((S) => {
      c[S].swiperLoopMoveDOM = !0, g.prepend(c[S]), c[S].swiperLoopMoveDOM = !1;
    }), L && v.forEach((S) => {
      c[S].swiperLoopMoveDOM = !0, g.append(c[S]), c[S].swiperLoopMoveDOM = !1;
    }), a.recalcSlides(), h.slidesPerView === "auto" ? a.updateSlides() : u && (w.length > 0 && G || v.length > 0 && L) && a.slides.forEach((S, M) => {
      a.grid.updateSlide(M, S, a.slides);
    }), h.watchSlidesProgress && a.updateSlidesOffset(), t) {
      if (w.length > 0 && G) {
        if (typeof e > "u") {
          const S = a.slidesGrid[T], I = a.slidesGrid[T + _] - S;
          l ? a.setTranslate(a.translate - I) : (a.slideTo(T + Math.ceil(_), 0, !1, !0), o && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I));
        } else if (o) {
          const S = u ? w.length / h.grid.rows : w.length;
          a.slideTo(a.activeIndex + S, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
        }
      } else if (v.length > 0 && L)
        if (typeof e > "u") {
          const S = a.slidesGrid[T], I = a.slidesGrid[T - P] - S;
          l ? a.setTranslate(a.translate - I) : (a.slideTo(T - P, 0, !1, !0), o && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - I, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - I));
        } else {
          const S = u ? v.length / h.grid.rows : v.length;
          a.slideTo(a.activeIndex - S, 0, !1, !0);
        }
    }
    if (a.allowSlidePrev = p, a.allowSlideNext = f, a.controller && a.controller.control && !r) {
      const S = {
        slideRealIndex: e,
        direction: s,
        setTranslate: o,
        activeSlideIndex: n,
        byController: !0
      };
      Array.isArray(a.controller.control) ? a.controller.control.forEach((M) => {
        !M.destroyed && M.params.loop && M.loopFix({
          ...S,
          slideTo: M.params.slidesPerView === h.slidesPerView ? t : !1
        });
      }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
        ...S,
        slideTo: a.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
      });
    }
    a.emit("loopFix");
  }
  function qt() {
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
  var Wt = {
    loopCreate: Vt,
    loopFix: Rt,
    loopDestroy: qt
  };
  function Yt(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
      return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function Xt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
      i.__preventObserver__ = !1;
    }));
  }
  var Ut = {
    setGrabCursor: Yt,
    unsetGrabCursor: Xt
  };
  function Kt(i, e) {
    e === void 0 && (e = this);
    function t(s) {
      if (!s || s === V() || s === $())
        return null;
      s.assignedSlot && (s = s.assignedSlot);
      const o = s.closest(i);
      return !o && !s.getRootNode ? null : o || t(s.getRootNode().host);
    }
    return t(e);
  }
  function _e(i, e, t) {
    const s = $(), {
      params: o
    } = i, n = o.edgeSwipeDetection, r = o.edgeSwipeThreshold;
    return n && (t <= r || t >= s.innerWidth - r) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function Zt(i) {
    const e = this, t = V();
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
      _e(e, s, s.targetTouches[0].pageX);
      return;
    }
    const {
      params: n,
      touches: r,
      enabled: l
    } = e;
    if (!l || !n.simulateTouch && s.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
      return;
    !e.animating && n.cssMode && n.loop && e.loopFix();
    let a = s.target;
    if (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || o.isTouched && o.isMoved)
      return;
    const c = !!n.noSwipingClass && n.noSwipingClass !== "", p = s.composedPath ? s.composedPath() : s.path;
    c && s.target && s.target.shadowRoot && p && (a = p[0]);
    const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, g = !!(s.target && s.target.shadowRoot);
    if (n.noSwiping && (g ? Kt(f, a) : a.closest(f))) {
      e.allowClick = !0;
      return;
    }
    if (n.swipeHandler && !a.closest(n.swipeHandler))
      return;
    r.currentX = s.pageX, r.currentY = s.pageY;
    const h = r.currentX, m = r.currentY;
    if (!_e(e, s, h))
      return;
    Object.assign(o, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), r.startX = h, r.startY = m, o.touchStartTime = X(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (o.allowThresholdMove = !1);
    let x = !0;
    a.matches(o.focusableElements) && (x = !1, a.nodeName === "SELECT" && (o.isTouched = !1)), t.activeElement && t.activeElement.matches(o.focusableElements) && t.activeElement !== a && t.activeElement.blur();
    const y = x && e.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || y) && !a.isContentEditable && s.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
  }
  function Qt(i) {
    const e = V(), t = this, s = t.touchEventsData, {
      params: o,
      touches: n,
      rtlTranslate: r,
      enabled: l
    } = t;
    if (!l || !o.simulateTouch && i.pointerType === "mouse")
      return;
    let a = i;
    if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
      return;
    let c;
    if (a.type === "touchmove") {
      if (c = [...a.changedTouches].filter((L) => L.identifier === s.touchId)[0], !c || c.identifier !== s.touchId)
        return;
    } else
      c = a;
    if (!s.isTouched) {
      s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", a);
      return;
    }
    const p = c.pageX, f = c.pageY;
    if (a.preventedByNestedSwiper) {
      n.startX = p, n.startY = f;
      return;
    }
    if (!t.allowTouchMove) {
      a.target.matches(s.focusableElements) || (t.allowClick = !1), s.isTouched && (Object.assign(n, {
        startX: p,
        startY: f,
        currentX: p,
        currentY: f
      }), s.touchStartTime = X());
      return;
    }
    if (o.touchReleaseOnEdges && !o.loop) {
      if (t.isVertical()) {
        if (f < n.startY && t.translate <= t.maxTranslate() || f > n.startY && t.translate >= t.minTranslate()) {
          s.isTouched = !1, s.isMoved = !1;
          return;
        }
      } else if (p < n.startX && t.translate <= t.maxTranslate() || p > n.startX && t.translate >= t.minTranslate())
        return;
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
      s.isMoved = !0, t.allowClick = !1;
      return;
    }
    s.allowTouchCallbacks && t.emit("touchMove", a), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = p, n.currentY = f;
    const g = n.currentX - n.startX, h = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(g ** 2 + h ** 2) < t.params.threshold)
      return;
    if (typeof s.isScrolling > "u") {
      let L;
      t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : g * g + h * h >= 25 && (L = Math.atan2(Math.abs(h), Math.abs(g)) * 180 / Math.PI, s.isScrolling = t.isHorizontal() ? L > o.touchAngle : 90 - L > o.touchAngle);
    }
    if (s.isScrolling && t.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0), s.isScrolling) {
      s.isTouched = !1;
      return;
    }
    if (!s.startMoving)
      return;
    t.allowClick = !1, !o.cssMode && a.cancelable && a.preventDefault(), o.touchMoveStopPropagation && !o.nested && a.stopPropagation();
    let m = t.isHorizontal() ? g : h, x = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    o.oneWayMovement && (m = Math.abs(m) * (r ? 1 : -1), x = Math.abs(x) * (r ? 1 : -1)), n.diff = m, m *= o.touchRatio, r && (m = -m, x = -x);
    const y = t.touchesDirection;
    t.swipeDirection = m > 0 ? "prev" : "next", t.touchesDirection = x > 0 ? "prev" : "next";
    const d = t.params.loop && !o.cssMode, u = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!s.isMoved) {
      if (d && u && t.loopFix({
        direction: t.swipeDirection
      }), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const L = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        t.wrapperEl.dispatchEvent(L);
      }
      s.allowMomentumBounce = !1, o.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a);
    }
    let w;
    if ((/* @__PURE__ */ new Date()).getTime(), s.isMoved && s.allowThresholdMove && y !== t.touchesDirection && d && u && Math.abs(m) >= 1) {
      Object.assign(n, {
        startX: p,
        startY: f,
        currentX: p,
        currentY: f,
        startTranslate: s.currentTranslate
      }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
      return;
    }
    t.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = m + s.startTranslate;
    let v = !0, T = o.resistanceRatio;
    if (o.touchReleaseOnEdges && (T = 0), m > 0 ? (d && u && !w && s.allowThresholdMove && s.currentTranslate > (o.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), s.currentTranslate > t.minTranslate() && (v = !1, o.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + m) ** T))) : m < 0 && (d && u && !w && s.allowThresholdMove && s.currentTranslate < (o.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (o.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(o.slidesPerView, 10)))
    }), s.currentTranslate < t.maxTranslate() && (v = !1, o.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - m) ** T))), v && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (s.currentTranslate = s.startTranslate), o.threshold > 0)
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
  function Jt(i) {
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
      params: r,
      touches: l,
      rtlTranslate: a,
      slidesGrid: c,
      enabled: p
    } = e;
    if (!p || !r.simulateTouch && s.pointerType === "mouse")
      return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", s), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && r.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    r.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const f = X(), g = f - t.touchStartTime;
    if (e.allowClick) {
      const T = s.path || s.composedPath && s.composedPath();
      e.updateClickedSlide(T && T[0] || s.target, T), e.emit("tap click", s), g < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
    }
    if (t.lastClickTime = X(), ne(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let h;
    if (r.followFinger ? h = a ? e.translate : -e.translate : h = -t.currentTranslate, r.cssMode)
      return;
    if (r.freeMode && r.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: h
      });
      return;
    }
    const m = h >= -e.maxTranslate() && !e.params.loop;
    let x = 0, y = e.slidesSizesGrid[0];
    for (let T = 0; T < c.length; T += T < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
      const L = T < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      typeof c[T + L] < "u" ? (m || h >= c[T] && h < c[T + L]) && (x = T, y = c[T + L] - c[T]) : (m || h >= c[T]) && (x = T, y = c[c.length - 1] - c[c.length - 2]);
    }
    let d = null, u = null;
    r.rewind && (e.isBeginning ? u = r.virtual && r.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (d = 0));
    const w = (h - c[x]) / y, v = x < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (g > r.longSwipesMs) {
      if (!r.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (w >= r.longSwipesRatio ? e.slideTo(r.rewind && e.isEnd ? d : x + v) : e.slideTo(x)), e.swipeDirection === "prev" && (w > 1 - r.longSwipesRatio ? e.slideTo(x + v) : u !== null && w < 0 && Math.abs(w) > r.longSwipesRatio ? e.slideTo(u) : e.slideTo(x));
    } else {
      if (!r.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(x + v) : e.slideTo(x) : (e.swipeDirection === "next" && e.slideTo(d !== null ? d : x + v), e.swipeDirection === "prev" && e.slideTo(u !== null ? u : x));
    }
  }
  function Ce() {
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
    } = i, r = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const l = r && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !l ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !r ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
      i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
    }, 500)), i.allowSlidePrev = o, i.allowSlideNext = s, i.params.watchOverflow && n !== i.snapGrid && i.checkOverflow();
  }
  function ei(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function ti() {
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
  function ii(i) {
    const e = this;
    ee(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function si() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const Le = (i, e) => {
    const t = V(), {
      params: s,
      el: o,
      wrapperEl: n,
      device: r
    } = i, l = !!s.nested, a = e === "on" ? "addEventListener" : "removeEventListener", c = e;
    t[a]("touchstart", i.onDocumentTouchStart, {
      passive: !1,
      capture: l
    }), o[a]("touchstart", i.onTouchStart, {
      passive: !1
    }), o[a]("pointerdown", i.onTouchStart, {
      passive: !1
    }), t[a]("touchmove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[a]("pointermove", i.onTouchMove, {
      passive: !1,
      capture: l
    }), t[a]("touchend", i.onTouchEnd, {
      passive: !0
    }), t[a]("pointerup", i.onTouchEnd, {
      passive: !0
    }), t[a]("pointercancel", i.onTouchEnd, {
      passive: !0
    }), t[a]("touchcancel", i.onTouchEnd, {
      passive: !0
    }), t[a]("pointerout", i.onTouchEnd, {
      passive: !0
    }), t[a]("pointerleave", i.onTouchEnd, {
      passive: !0
    }), t[a]("contextmenu", i.onTouchEnd, {
      passive: !0
    }), (s.preventClicks || s.preventClicksPropagation) && o[a]("click", i.onClick, !0), s.cssMode && n[a]("scroll", i.onScroll), s.updateOnWindowResize ? i[c](r.ios || r.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ce, !0) : i[c]("observerUpdate", Ce, !0), o[a]("load", i.onLoad, {
      capture: !0
    });
  };
  function ni() {
    const i = this, {
      params: e
    } = i;
    i.onTouchStart = Zt.bind(i), i.onTouchMove = Qt.bind(i), i.onTouchEnd = Jt.bind(i), i.onDocumentTouchStart = si.bind(i), e.cssMode && (i.onScroll = ti.bind(i)), i.onClick = ei.bind(i), i.onLoad = ii.bind(i), Le(i, "on");
  }
  function oi() {
    Le(this, "off");
  }
  var ri = {
    attachEvents: ni,
    detachEvents: oi
  };
  const Me = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  function ai() {
    const i = this, {
      realIndex: e,
      initialized: t,
      params: s,
      el: o
    } = i, n = s.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
      return;
    const r = i.getBreakpoint(n, i.params.breakpointsBase, i.el);
    if (!r || i.currentBreakpoint === r)
      return;
    const a = (r in n ? n[r] : void 0) || i.originalParams, c = Me(i, s), p = Me(i, a), f = s.enabled;
    c && !p ? (o.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), i.emitContainerClasses()) : !c && p && (o.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && o.classList.add(`${s.containerModifierClass}grid-column`), i.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((d) => {
      if (typeof a[d] > "u")
        return;
      const u = s[d] && s[d].enabled, w = a[d] && a[d].enabled;
      u && !w && i[d].disable(), !u && w && i[d].enable();
    });
    const g = a.direction && a.direction !== s.direction, h = s.loop && (a.slidesPerView !== s.slidesPerView || g), m = s.loop;
    g && t && i.changeDirection(), B(i.params, a);
    const x = i.params.enabled, y = i.params.loop;
    Object.assign(i, {
      allowTouchMove: i.params.allowTouchMove,
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev
    }), f && !x ? i.disable() : !f && x && i.enable(), i.currentBreakpoint = r, i.emit("_beforeBreakpoint", a), t && (h ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !m && y ? (i.loopCreate(e), i.updateSlides()) : m && !y && i.loopDestroy()), i.emit("breakpoint", a);
  }
  function li(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t)
      return;
    let s = !1;
    const o = $(), n = e === "window" ? o.innerHeight : t.clientHeight, r = Object.keys(i).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return {
          value: n * a,
          point: l
        };
      }
      return {
        value: l,
        point: l
      };
    });
    r.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
    for (let l = 0; l < r.length; l += 1) {
      const {
        point: a,
        value: c
      } = r[l];
      e === "window" ? o.matchMedia(`(min-width: ${c}px)`).matches && (s = a) : c <= t.clientWidth && (s = a);
    }
    return s || "max";
  }
  var di = {
    setBreakpoint: ai,
    getBreakpoint: li
  };
  function ci(i, e) {
    const t = [];
    return i.forEach((s) => {
      typeof s == "object" ? Object.keys(s).forEach((o) => {
        s[o] && t.push(e + o);
      }) : typeof s == "string" && t.push(e + s);
    }), t;
  }
  function pi() {
    const i = this, {
      classNames: e,
      params: t,
      rtl: s,
      el: o,
      device: n
    } = i, r = ci(["initialized", t.direction, {
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
    e.push(...r), o.classList.add(...e), i.emitContainerClasses();
  }
  function fi() {
    const i = this, {
      el: e,
      classNames: t
    } = i;
    e.classList.remove(...t), i.emitContainerClasses();
  }
  var ui = {
    addClasses: pi,
    removeClasses: fi
  };
  function mi() {
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
  var hi = {
    checkOverflow: mi
  }, ze = {
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
  function gi(i, e) {
    return function(s) {
      s === void 0 && (s = {});
      const o = Object.keys(s)[0], n = s[o];
      if (typeof n != "object" || n === null) {
        B(e, s);
        return;
      }
      if (i[o] === !0 && (i[o] = {
        enabled: !0
      }), o === "navigation" && i[o] && i[o].enabled && !i[o].prevEl && !i[o].nextEl && (i[o].auto = !0), ["pagination", "scrollbar"].indexOf(o) >= 0 && i[o] && i[o].enabled && !i[o].el && (i[o].auto = !0), !(o in i && "enabled" in n)) {
        B(e, s);
        return;
      }
      typeof i[o] == "object" && !("enabled" in i[o]) && (i[o].enabled = !0), i[o] || (i[o] = {
        enabled: !1
      }), B(e, s);
    };
  }
  const pe = {
    eventsEmitter: ut,
    update: kt,
    translate: zt,
    transition: Ot,
    slide: Nt,
    loop: Wt,
    grabCursor: Ut,
    events: ri,
    breakpoints: di,
    checkOverflow: hi,
    classes: ui
  }, fe = {};
  class F {
    constructor() {
      let e, t;
      for (var s = arguments.length, o = new Array(s), n = 0; n < s; n++)
        o[n] = arguments[n];
      o.length === 1 && o[0].constructor && Object.prototype.toString.call(o[0]).slice(8, -1) === "Object" ? t = o[0] : [e, t] = o, t || (t = {}), t = B({}, t), e && !t.el && (t.el = e);
      const r = V();
      if (t.el && typeof t.el == "string" && r.querySelectorAll(t.el).length > 1) {
        const p = [];
        return r.querySelectorAll(t.el).forEach((f) => {
          const g = B({}, t, {
            el: f
          });
          p.push(new F(g));
        }), p;
      }
      const l = this;
      l.__swiper__ = !0, l.support = Te(), l.device = ke({
        userAgent: t.userAgent
      }), l.browser = ct(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
      const a = {};
      l.modules.forEach((p) => {
        p({
          params: t,
          swiper: l,
          extendParams: gi(t, a),
          on: l.on.bind(l),
          once: l.once.bind(l),
          off: l.off.bind(l),
          emit: l.emit.bind(l)
        });
      });
      const c = B({}, ze, a);
      return l.params = B({}, c, fe, t), l.originalParams = B({}, l.params), l.passedParams = B({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((p) => {
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
      } = this, o = H(t, `.${s.slideClass}, swiper-slide`), n = J(o[0]);
      return J(e) - n;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.filter((t) => t.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: s
      } = e;
      e.slides = H(t, `.${s.slideClass}, swiper-slide`);
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
      const o = s.minTranslate(), r = (s.maxTranslate() - o) * e + o;
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
        slidesGrid: r,
        slidesSizesGrid: l,
        size: a,
        activeIndex: c
      } = s;
      let p = 1;
      if (typeof o.slidesPerView == "number")
        return o.slidesPerView;
      if (o.centeredSlides) {
        let f = n[c] ? Math.ceil(n[c].swiperSlideSize) : 0, g;
        for (let h = c + 1; h < n.length; h += 1)
          n[h] && !g && (f += Math.ceil(n[h].swiperSlideSize), p += 1, f > a && (g = !0));
        for (let h = c - 1; h >= 0; h -= 1)
          n[h] && !g && (f += n[h].swiperSlideSize, p += 1, f > a && (g = !0));
      } else if (e === "current")
        for (let f = c + 1; f < n.length; f += 1)
          (t ? r[f] + l[f] - r[c] < a : r[f] - r[c] < a) && (p += 1);
      else
        for (let f = c - 1; f >= 0; f -= 1)
          r[c] - r[f] < a && (p += 1);
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
        r.complete && ee(e, r);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function o() {
        const r = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(r, e.maxTranslate()), e.minTranslate());
        e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      if (s.freeMode && s.freeMode.enabled && !s.cssMode)
        o(), s.autoHeight && e.updateAutoHeight();
      else {
        if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
          const r = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          n = e.slideTo(r.length - 1, 0, !1, !0);
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
      let r = s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(o()) : H(s, o())[0];
      return !r && t.params.createElements && (r = Q("div", t.params.wrapperClass), s.append(r), H(s, `.${t.params.slideClass}`).forEach((l) => {
        r.append(l);
      })), Object.assign(t, {
        el: s,
        wrapperEl: r,
        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
        hostEl: t.isElement ? s.parentNode.host : s,
        mounted: !0,
        // RTL
        rtl: s.dir.toLowerCase() === "rtl" || R(s, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || R(s, "direction") === "rtl"),
        wrongRTL: R(r, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1)
        return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
      const o = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && o.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), o.forEach((n) => {
        n.complete ? ee(t, n) : n.addEventListener("load", (r) => {
          ee(t, r.target);
        });
      }), ce(t), t.initialized = !0, ce(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const s = this, {
        params: o,
        el: n,
        wrapperEl: r,
        slides: l
      } = s;
      return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), o.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttribute("style"), r.removeAttribute("style"), l && l.length && l.forEach((a) => {
        a.classList.remove(o.slideVisibleClass, o.slideFullyVisibleClass, o.slideActiveClass, o.slideNextClass, o.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
      })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((a) => {
        s.off(a);
      }), e !== !1 && (s.el.swiper = null, tt(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
      B(fe, e);
    }
    static get extendedDefaults() {
      return fe;
    }
    static get defaults() {
      return ze;
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
  Object.keys(pe).forEach((i) => {
    Object.keys(pe[i]).forEach((e) => {
      F.prototype[e] = pe[i][e];
    });
  }), F.use([pt, ft]);
  function Pe(i, e, t, s) {
    return i.params.createElements && Object.keys(s).forEach((o) => {
      if (!t[o] && t.auto === !0) {
        let n = H(i.el, `.${s[o]}`)[0];
        n || (n = Q("div", s[o]), n.className = s[o], i.el.append(n)), t[o] = n, e[o] = n;
      }
    }), t;
  }
  function wi(i) {
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
    function r(m, x) {
      const y = e.params.navigation;
      m = A(m), m.forEach((d) => {
        d && (d.classList[x ? "add" : "remove"](...y.disabledClass.split(" ")), d.tagName === "BUTTON" && (d.disabled = x), e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](y.lockClass));
      });
    }
    function l() {
      const {
        nextEl: m,
        prevEl: x
      } = e.navigation;
      if (e.params.loop) {
        r(x, !1), r(m, !1);
        return;
      }
      r(x, e.isBeginning && !e.params.rewind), r(m, e.isEnd && !e.params.rewind);
    }
    function a(m) {
      m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), o("navigationPrev"));
    }
    function c(m) {
      m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), o("navigationNext"));
    }
    function p() {
      const m = e.params.navigation;
      if (e.params.navigation = Pe(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(m.nextEl || m.prevEl))
        return;
      let x = n(m.nextEl), y = n(m.prevEl);
      Object.assign(e.navigation, {
        nextEl: x,
        prevEl: y
      }), x = A(x), y = A(y);
      const d = (u, w) => {
        u && u.addEventListener("click", w === "next" ? c : a), !e.enabled && u && u.classList.add(...m.lockClass.split(" "));
      };
      x.forEach((u) => d(u, "next")), y.forEach((u) => d(u, "prev"));
    }
    function f() {
      let {
        nextEl: m,
        prevEl: x
      } = e.navigation;
      m = A(m), x = A(x);
      const y = (d, u) => {
        d.removeEventListener("click", u === "next" ? c : a), d.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      m.forEach((d) => y(d, "next")), x.forEach((d) => y(d, "prev"));
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
        prevEl: x
      } = e.navigation;
      if (m = A(m), x = A(x), e.enabled) {
        l();
        return;
      }
      [...m, ...x].filter((y) => !!y).forEach((y) => y.classList.add(e.params.navigation.lockClass));
    }), s("click", (m, x) => {
      let {
        nextEl: y,
        prevEl: d
      } = e.navigation;
      y = A(y), d = A(d);
      const u = x.target;
      if (e.params.navigation.hideOnClick && !d.includes(u) && !y.includes(u)) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === u || e.pagination.el.contains(u)))
          return;
        let w;
        y.length ? w = y[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (w = d[0].classList.contains(e.params.navigation.hiddenClass)), o(w === !0 ? "navigationShow" : "navigationHide"), [...y, ...d].filter((v) => !!v).forEach((v) => v.classList.toggle(e.params.navigation.hiddenClass));
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
  function Y(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function xi(i) {
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
    let r, l = 0;
    function a() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function c(d, u) {
      const {
        bulletActiveClass: w
      } = e.params.pagination;
      d && (d = d[`${u === "prev" ? "previous" : "next"}ElementSibling`], d && (d.classList.add(`${w}-${u}`), d = d[`${u === "prev" ? "previous" : "next"}ElementSibling`], d && d.classList.add(`${w}-${u}-${u}`)));
    }
    function p(d) {
      const u = d.target.closest(Y(e.params.pagination.bulletClass));
      if (!u)
        return;
      d.preventDefault();
      const w = J(u) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === w)
          return;
        e.slideToLoop(w);
      } else
        e.slideTo(w);
    }
    function f() {
      const d = e.rtl, u = e.params.pagination;
      if (a())
        return;
      let w = e.pagination.el;
      w = A(w);
      let v, T;
      const L = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, G = e.params.loop ? Math.ceil(L / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (T = e.previousRealIndex || 0, v = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (v = e.snapIndex, T = e.previousSnapIndex) : (T = e.previousIndex || 0, v = e.activeIndex || 0), u.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const _ = e.pagination.bullets;
        let P, b, E;
        if (u.dynamicBullets && (r = oe(_[0], e.isHorizontal() ? "width" : "height", !0), w.forEach((k) => {
          k.style[e.isHorizontal() ? "width" : "height"] = `${r * (u.dynamicMainBullets + 4)}px`;
        }), u.dynamicMainBullets > 1 && T !== void 0 && (l += v - (T || 0), l > u.dynamicMainBullets - 1 ? l = u.dynamicMainBullets - 1 : l < 0 && (l = 0)), P = Math.max(v - l, 0), b = P + (Math.min(_.length, u.dynamicMainBullets) - 1), E = (b + P) / 2), _.forEach((k) => {
          const S = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((M) => `${u.bulletActiveClass}${M}`)].map((M) => typeof M == "string" && M.includes(" ") ? M.split(" ") : M).flat();
          k.classList.remove(...S);
        }), w.length > 1)
          _.forEach((k) => {
            const S = J(k);
            S === v ? k.classList.add(...u.bulletActiveClass.split(" ")) : e.isElement && k.setAttribute("part", "bullet"), u.dynamicBullets && (S >= P && S <= b && k.classList.add(...`${u.bulletActiveClass}-main`.split(" ")), S === P && c(k, "prev"), S === b && c(k, "next"));
          });
        else {
          const k = _[v];
          if (k && k.classList.add(...u.bulletActiveClass.split(" ")), e.isElement && _.forEach((S, M) => {
            S.setAttribute("part", M === v ? "bullet-active" : "bullet");
          }), u.dynamicBullets) {
            const S = _[P], M = _[b];
            for (let I = P; I <= b; I += 1)
              _[I] && _[I].classList.add(...`${u.bulletActiveClass}-main`.split(" "));
            c(S, "prev"), c(M, "next");
          }
        }
        if (u.dynamicBullets) {
          const k = Math.min(_.length, u.dynamicMainBullets + 4), S = (r * k - r) / 2 - E * r, M = d ? "right" : "left";
          _.forEach((I) => {
            I.style[e.isHorizontal() ? M : "top"] = `${S}px`;
          });
        }
      }
      w.forEach((_, P) => {
        if (u.type === "fraction" && (_.querySelectorAll(Y(u.currentClass)).forEach((b) => {
          b.textContent = u.formatFractionCurrent(v + 1);
        }), _.querySelectorAll(Y(u.totalClass)).forEach((b) => {
          b.textContent = u.formatFractionTotal(G);
        })), u.type === "progressbar") {
          let b;
          u.progressbarOpposite ? b = e.isHorizontal() ? "vertical" : "horizontal" : b = e.isHorizontal() ? "horizontal" : "vertical";
          const E = (v + 1) / G;
          let k = 1, S = 1;
          b === "horizontal" ? k = E : S = E, _.querySelectorAll(Y(u.progressbarFillClass)).forEach((M) => {
            M.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${S})`, M.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        u.type === "custom" && u.renderCustom ? (_.innerHTML = u.renderCustom(e, v + 1, G), P === 0 && o("paginationRender", _)) : (P === 0 && o("paginationRender", _), o("paginationUpdate", _)), e.params.watchOverflow && e.enabled && _.classList[e.isLocked ? "add" : "remove"](u.lockClass);
      });
    }
    function g() {
      const d = e.params.pagination;
      if (a())
        return;
      const u = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let w = e.pagination.el;
      w = A(w);
      let v = "";
      if (d.type === "bullets") {
        let T = e.params.loop ? Math.ceil(u / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && T > u && (T = u);
        for (let L = 0; L < T; L += 1)
          d.renderBullet ? v += d.renderBullet.call(e, L, d.bulletClass) : v += `<${d.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${d.bulletClass}"></${d.bulletElement}>`;
      }
      d.type === "fraction" && (d.renderFraction ? v = d.renderFraction.call(e, d.currentClass, d.totalClass) : v = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`), d.type === "progressbar" && (d.renderProgressbar ? v = d.renderProgressbar.call(e, d.progressbarFillClass) : v = `<span class="${d.progressbarFillClass}"></span>`), e.pagination.bullets = [], w.forEach((T) => {
        d.type !== "custom" && (T.innerHTML = v || ""), d.type === "bullets" && e.pagination.bullets.push(...T.querySelectorAll(Y(d.bulletClass)));
      }), d.type !== "custom" && o("paginationRender", w[0]);
    }
    function h() {
      e.params.pagination = Pe(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const d = e.params.pagination;
      if (!d.el)
        return;
      let u;
      typeof d.el == "string" && e.isElement && (u = e.el.querySelector(d.el)), !u && typeof d.el == "string" && (u = [...document.querySelectorAll(d.el)]), u || (u = d.el), !(!u || u.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(u) && u.length > 1 && (u = [...e.el.querySelectorAll(d.el)], u.length > 1 && (u = u.filter((w) => Se(w, ".swiper")[0] === e.el)[0])), Array.isArray(u) && u.length === 1 && (u = u[0]), Object.assign(e.pagination, {
        el: u
      }), u = A(u), u.forEach((w) => {
        d.type === "bullets" && d.clickable && w.classList.add(...(d.clickableClass || "").split(" ")), w.classList.add(d.modifierClass + d.type), w.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.type === "bullets" && d.dynamicBullets && (w.classList.add(`${d.modifierClass}${d.type}-dynamic`), l = 0, d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)), d.type === "progressbar" && d.progressbarOpposite && w.classList.add(d.progressbarOppositeClass), d.clickable && w.addEventListener("click", p), e.enabled || w.classList.add(d.lockClass);
      }));
    }
    function m() {
      const d = e.params.pagination;
      if (a())
        return;
      let u = e.pagination.el;
      u && (u = A(u), u.forEach((w) => {
        w.classList.remove(d.hiddenClass), w.classList.remove(d.modifierClass + d.type), w.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.clickable && (w.classList.remove(...(d.clickableClass || "").split(" ")), w.removeEventListener("click", p));
      })), e.pagination.bullets && e.pagination.bullets.forEach((w) => w.classList.remove(...d.bulletActiveClass.split(" ")));
    }
    s("changeDirection", () => {
      if (!e.pagination || !e.pagination.el)
        return;
      const d = e.params.pagination;
      let {
        el: u
      } = e.pagination;
      u = A(u), u.forEach((w) => {
        w.classList.remove(d.horizontalClass, d.verticalClass), w.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
      });
    }), s("init", () => {
      e.params.pagination.enabled === !1 ? y() : (h(), g(), f());
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
        el: d
      } = e.pagination;
      d && (d = A(d), d.forEach((u) => u.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), s("lock unlock", () => {
      f();
    }), s("click", (d, u) => {
      const w = u.target, v = A(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && v && v.length > 0 && !w.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && w === e.navigation.nextEl || e.navigation.prevEl && w === e.navigation.prevEl))
          return;
        const T = v[0].classList.contains(e.params.pagination.hiddenClass);
        o(T === !0 ? "paginationShow" : "paginationHide"), v.forEach((L) => L.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const x = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: d
      } = e.pagination;
      d && (d = A(d), d.forEach((u) => u.classList.remove(e.params.pagination.paginationDisabledClass))), h(), g(), f();
    }, y = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: d
      } = e.pagination;
      d && (d = A(d), d.forEach((u) => u.classList.add(e.params.pagination.paginationDisabledClass))), m();
    };
    Object.assign(e.pagination, {
      enable: x,
      disable: y,
      render: g,
      update: f,
      init: h,
      destroy: m
    });
  }
  function vi(i) {
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
    let r, l, a = n && n.autoplay ? n.autoplay.delay : 3e3, c = n && n.autoplay ? n.autoplay.delay : 3e3, p, f = (/* @__PURE__ */ new Date()).getTime(), g, h, m, x, y, d, u;
    function w(z) {
      !e || e.destroyed || !e.wrapperEl || z.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", w), !u && b());
    }
    const v = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      e.autoplay.paused ? g = !0 : g && (c = p, g = !1);
      const z = e.autoplay.paused ? p : f + c - (/* @__PURE__ */ new Date()).getTime();
      e.autoplay.timeLeft = z, o("autoplayTimeLeft", z, z / a), l = requestAnimationFrame(() => {
        v();
      });
    }, T = () => {
      let z;
      return e.virtual && e.params.virtual.enabled ? z = e.slides.filter((D) => D.classList.contains("swiper-slide-active"))[0] : z = e.slides[e.activeIndex], z ? parseInt(z.getAttribute("data-swiper-autoplay"), 10) : void 0;
    }, L = (z) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      cancelAnimationFrame(l), v();
      let j = typeof z > "u" ? e.params.autoplay.delay : z;
      a = e.params.autoplay.delay, c = e.params.autoplay.delay;
      const D = T();
      !Number.isNaN(D) && D > 0 && typeof z > "u" && (j = D, a = D, c = D), p = j;
      const q = e.params.speed, te = () => {
        !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(q, !0, !0), o("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, q, !0, !0), o("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(q, !0, !0), o("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, q, !0, !0), o("autoplay")), e.params.cssMode && (f = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          L();
        })));
      };
      return j > 0 ? (clearTimeout(r), r = setTimeout(() => {
        te();
      }, j)) : requestAnimationFrame(() => {
        te();
      }), j;
    }, G = () => {
      f = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, L(), o("autoplayStart");
    }, _ = () => {
      e.autoplay.running = !1, clearTimeout(r), cancelAnimationFrame(l), o("autoplayStop");
    }, P = (z, j) => {
      if (e.destroyed || !e.autoplay.running)
        return;
      clearTimeout(r), z || (d = !0);
      const D = () => {
        o("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", w) : b();
      };
      if (e.autoplay.paused = !0, j) {
        y && (p = e.params.autoplay.delay), y = !1, D();
        return;
      }
      p = (p || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - f), !(e.isEnd && p < 0 && !e.params.loop) && (p < 0 && (p = 0), D());
    }, b = () => {
      e.isEnd && p < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = (/* @__PURE__ */ new Date()).getTime(), d ? (d = !1, L(p)) : L(), e.autoplay.paused = !1, o("autoplayResume"));
    }, E = () => {
      if (e.destroyed || !e.autoplay.running)
        return;
      const z = V();
      z.visibilityState === "hidden" && (d = !0, P(!0)), z.visibilityState === "visible" && b();
    }, k = (z) => {
      z.pointerType === "mouse" && (d = !0, u = !0, !(e.animating || e.autoplay.paused) && P(!0));
    }, S = (z) => {
      z.pointerType === "mouse" && (u = !1, e.autoplay.paused && b());
    }, M = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", k), e.el.addEventListener("pointerleave", S));
    }, I = () => {
      e.el.removeEventListener("pointerenter", k), e.el.removeEventListener("pointerleave", S);
    }, N = () => {
      V().addEventListener("visibilitychange", E);
    }, ue = () => {
      V().removeEventListener("visibilitychange", E);
    };
    s("init", () => {
      e.params.autoplay.enabled && (M(), N(), G());
    }), s("destroy", () => {
      I(), ue(), e.autoplay.running && _();
    }), s("_freeModeStaticRelease", () => {
      (m || d) && b();
    }), s("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? _() : P(!0, !0);
    }), s("beforeTransitionStart", (z, j, D) => {
      e.destroyed || !e.autoplay.running || (D || !e.params.autoplay.disableOnInteraction ? P(!0, !0) : _());
    }), s("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          _();
          return;
        }
        h = !0, m = !1, d = !1, x = setTimeout(() => {
          d = !0, m = !0, P(!0);
        }, 200);
      }
    }), s("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !h)) {
        if (clearTimeout(x), clearTimeout(r), e.params.autoplay.disableOnInteraction) {
          m = !1, h = !1;
          return;
        }
        m && e.params.cssMode && b(), m = !1, h = !1;
      }
    }), s("slideChange", () => {
      e.destroyed || !e.autoplay.running || (y = !0);
    }), Object.assign(e.autoplay, {
      start: G,
      stop: _,
      pause: P,
      resume: b
    });
  }
  const bi = ".aa-awards{padding-left:60px}.awards-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:60px;margin-bottom:-webkit-calc(111px - 30px);margin-bottom:-moz-calc(111px - 30px);margin-bottom:81px}@media (max-width: 768px){.awards-container{flex-direction:column;align-items:flex-start;gap:12px;padding-left:0}}.awards-container .heading-3{width:180px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}@media (max-width: 768px){.awards-container .heading-3{width:100%;font-size:16px;font-weight:700;line-height:24px}}@media (min-width: 1200px){.awards-container .swiper{height:200px}}.awards-swiper{width:100%}.awards-swiper .swiper-wrapper{gap:60px}@media (max-width: 768px){.awards-swiper .swiper-wrapper{flex-wrap:wrap;gap:29px;pointer-events:none}}.awards-swiper .swiper-wrapper .swiper-slide{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:center}@media (max-width: 768px){.awards-swiper .swiper-wrapper .swiper-slide{width:64px;height:64px}}.awards-swiper .swiper-wrapper .swiper-slide img{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}", yi = {
    modules: [wi, xi, vi],
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
  }, Si = [
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
  class Ti {
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
            ${Si.map((t) => (
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
      this.container && (document.head.insertAdjacentHTML("beforeend", `<style>${bi}</style>`), this.container.innerHTML = e, new F(".awards-swiper", yi));
    }
    init() {
      this.render();
    }
  }
  const ki = "https://conversionratestore.github.io/projects/keenethics/", Ie = "ourformSubmitted", Ae = "noPhone", Ei = `section.contact-nav,.container .form-row{display:none}#contact-us{padding:56px 0}@media (max-width: 768px){#contact-us{padding:0}}.crs-contact{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr;max-width:100%;margin:0 auto;grid-gap:0 40px;gap:0 40px;font-family:Raleway}@media (max-width: 768px){.crs-contact{margin-top:24px;grid-template-columns:1fr;gap:18px}}.crs-contact>*{font-family:inherit}.crs-contact header{grid-column:1 / 2;grid-row:1 / 2}@media (max-width: 768px){.crs-contact header{grid-column:1 / 2}}.crs-contact header .title{font-size:32px;font-weight:700;line-height:1.25;color:#12233d}.crs-contact .left{flex:1;width:100%;grid-column:1 / 2;grid-row:2 / 3;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}@media (max-width: 768px){.crs-contact .left{grid-row:3 / 4}}.crs-contact .descr{font-size:18px;font-weight:700;color:#12233d;margin-top:32px;margin-bottom:32px}@media (max-width: 768px){.crs-contact .descr{display:none}}.crs-contact .list{display:grid;grid-gap:24px;gap:24px;list-style:none}.crs-contact .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:12px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:18px;font-weight:500;line-height:27px}.crs-contact .list li:before{content:"";display:block;width:24px;height:24px;aspect-ratio:1;border-radius:50%;background:url('data:image/svg+xml,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0C4.48 0 0 4.49 0 10c0 5.5 4.48 10 10 10 5.51 0 10-4.5 10-10 0-5.51-4.49-10-10-10Zm4.78 7.7L9.1 13.37c-.14.13-.32.21-.52.21s-.4-.08-.54-.21l-2.83-2.83c-.29-.29-.29-.78 0-1.06.3-.29.77-.29 1.07 0l2.3 2.3 5.14-5.15c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.07Z" fill="%23D62C2C" /></svg>')}.crs-contact .info-block{margin-top:32px;border:1px dashed rgb(31,79,153);border-radius:8px;background:#fafcff;padding:20px 10px}.crs-contact .info-block .os-title{font-size:18px;font-weight:700;text-align:center}@media (max-width: 768px){.crs-contact .info-block .os-title{text-align:left}}.crs-contact .info-block .os-title span{color:#d62c2c}.crs-contact .info-block .os-title span .old{-webkit-text-decoration:line-through;text-decoration:line-through}.crs-contact .info-block .os-descr{margin-top:8px;color:#12233d;font-size:14px;font-weight:400;text-align:center}@media (max-width: 768px){.crs-contact .info-block .os-descr{text-align:left}}.crs-contact .form-container{border-radius:8px;background-color:#12233d;padding:40px;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}@media (max-width: 768px){.crs-contact .form-container{grid-row:2 / 3!important;grid-column:1 / 2!important;padding:24px 16px}}.crs-contact .form-container .form{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px}.crs-contact .form-container .form .title{font-family:Raleway;font-size:32px;font-weight:700;line-height:40px;text-align:left;color:#fff}@media (max-width: 768px){.crs-contact .form-container .form .title{font-size:24px;line-height:32px}}.crs-contact .form-container .form .subtitle{font-family:Raleway;font-size:18px;font-weight:700;line-height:24px;color:#fff}@media (max-width: 768px){.crs-contact .form-container .form .subtitle{font-size:14px;font-weight:600;line-height:24px}}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){position:relative}.crs-contact .form-container .form label:has(.placeholder){position:relative}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){position:absolute;top:50%;left:21px;transform:translateY(-50%);font-size:16px;color:#6f7a88}.crs-contact .form-container .form label:has(.placeholder) .placeholder{position:absolute;top:50%;left:21px;transform:translateY(-50%);font-size:16px;color:#6f7a88}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){width:100%;color:#12233d;font-weight:700;font-size:16px}.crs-contact .form-container .form label:has(.placeholder) input{width:100%;color:#12233d;font-weight:700;font-size:16px}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){display:none}.crs-contact .form-container .form label:has(.placeholder) .placeholder{display:none}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){display:block}.crs-contact .form-container .form label:has(.placeholder) input+.placeholder{display:block}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-2j-2s-2p-38-2p-19-36-2t-35-39-2x-36-2t-2s-2l-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist):after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.crs-contact .form-container .form label:has(.placeholder) input[data-required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){border:2px solid #d62c2c}.crs-contact .form-container .form label:has(.placeholder) input.invalid{border:2px solid #d62c2c}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s-w-3i-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){visibility:visible}.crs-contact .form-container .form label:has(.placeholder) input.invalid~.error{visibility:visible}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2r-33-32-38-2p-2r-38-w-1a-2u-33-36-31-19-2r-33-32-38-2p-2x-32-2t-36-w-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist){color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.crs-contact .form-container .form label:has(.placeholder) .error{color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.crs-contact .form-container .form .actions{margin-top:12px}.crs-contact .form-container .form .actions .error{color:#d62c2c;font-weight:600;display:none}.crs-contact .form-container .form .actions .error.show{display:block;margin-bottom:10px}.crs-contact .form-container .form .actions button{height:48px;border:none;width:100%;font-size:16px;line-height:24px;font-weight:700;text-align:center;color:#fff;text-transform:uppercase;cursor:pointer}.crs-contact .form-container .form .privacy{margin-top:24px;font-size:14px;color:#dae4f2}.crs-contact .form-container .form .privacy *{line-height:24px;font-size:14px;color:#dae4f2}.crs-contact .form-container .form .privacy a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline}.crs-contact .form-container .form .privacy-descr{font-size:14px;margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.crs-contact .form-container .form .privacy-descr p{font-size:inherit}.crs-contact .form-container .form input{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600!important;line-height:22px}.crs-contact .form-container .form input,.crs-contact .form-container .form summary{padding-left:21px;padding-right:21px;border:none}.crs-contact .form-container .form input,.crs-contact .form-container .form details{height:48px;border-radius:10px}.crs-contact .form-container .form details{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center}.crs-contact .form-container .form .select{position:relative}.crs-contact .form-container .form input::-csstools-invalid-placeholder{font-size:16px;color:#6f7a88;font-family:inherit}.crs-contact .form-container .form summary:not(does-not-exist),.crs-contact .form-container .form input:not(does-not-exist){font-size:16px;color:#6f7a88;font-family:inherit}.crs-contact .form-container .form summary{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;height:100%;padding-right:10px}.crs-contact .form-container .form summary.selected{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:22px}.crs-contact .form-container .form summary[data-choosen]{color:#12233d;font-size:16px;font-weight:700}.crs-contact .form-container .form details{width:100%;background:#fff;cursor:pointer}.crs-contact .form-container .form details summary::marker{content:none;display:none}.crs-contact .form-container .form details summary::-webkit-details-marker{content:none;display:none}.crs-contact .form-container .form details summary:after{content:"";background-image:url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');background-size:contain;width:24px;height:24px;position:absolute;top:50%;right:15px;transform:rotate(180deg) translateY(50%)}.crs-contact .form-container .form details[open] summary:after{transform:rotate(0) translateY(-50%)}.crs-contact .form-container .form details[open] ul,.crs-contact .form-container .form details[open] label{cursor:pointer}.crs-contact .form-container .form details[open] ul{position:absolute;top:61px;border-radius:8px;box-shadow:0 4px 4px #00000040;left:0;display:grid;grid-gap:8px;gap:8px;background:#fff;width:100%;overflow:hidden;z-index:100;padding-top:12px}.crs-contact .form-container .form details[open] ul li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.crs-contact .form-container .form details[open] ul li label:hover{background-color:#f2f7ff}.crs-contact .form-container .form details[open] ul li label.selected{background-color:#f2f7ff}.crs-contact .form-container .form details[open] ul li label.selected:after{content:"";width:24px;height:24px;display:block;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L9.66118 17L19 7" stroke="%23D62C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.crs-contact .form-container .form details[open] input{position:absolute;left:0;opacity:0}.crs-contact .right{width:100%;grid-column:2 / 3;grid-row:1 / 3;flex:1}.crs-contact .estimate-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:32px}@media (max-width: 768px){.crs-contact .estimate-container{grid-column:1 / 2;grid-row:3 / 4}}.crs-contact .estimate-container .title{color:#0e1154;font-family:Raleway;font-size:42px;font-style:normal;font-weight:700;line-height:55px}@media (max-width: 768px){.crs-contact .estimate-container .title{display:none}}.crs-contact .estimate-container .descr{color:#12233d;font-family:Raleway;font-size:24px;font-weight:700;line-height:32px}.crs-contact .contacts-container{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;align-items:flex-end;background:#f7f7f7;border-radius:8px;overflow:hidden}@media (max-width: 768px){.crs-contact .contacts-container{display:none}}.crs-contact .contacts-container .info{font-family:Raleway;position:absolute;bottom:0;left:0;border-radius:0 8px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);padding:21px 36px;width:312px;z-index:3}.crs-contact .contacts-container .info .name{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:18px;font-weight:700;line-height:24px}.crs-contact .contacts-container .info .position{margin-top:6px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-size:16px;font-weight:400;line-height:24px}.crs-contact .contacts-container img{height:100%;width:auto;-o-object-fit:cover;object-fit:cover;position:relative;z-index:2}.crs-contact .with-hero:after{content:"";position:absolute;top:50%;left:23%;width:680px;height:680px;border:162.29px solid #d62c2c;border:162.29px solid var(--red-600-valencia, #d62c2c);border-radius:50%;z-index:1}.crs-contact .mobile{display:none;flex-direction:column;gap:18px}.crs-contact .mobile .hero{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;border-radius:8px;border:1px solid #e3e3e3;border:1px solid var(--gray-250-light-gray, #e3e3e3);background:#fff;background:var(--gray-0-white, #fff);gap:16px;height:96px;padding:16px}.crs-contact .mobile .hero img{width:68px;height:68px}.crs-contact .mobile .hero .info{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:6px}.crs-contact .mobile .hero .info .name{font-size:18px;line-height:24px;font-weight:700;color:#12233d}.crs-contact .mobile .hero .info .position{font-size:16px;line-height:24px;font-weight:400;color:#12233d}.crs-contact .mobile .descr{font-size:18px;font-weight:700;color:#12233d;line-height:27px}.crs-contact .mobile .list{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-wrap:wrap;gap:16px;list-style:none}.crs-contact .mobile .list li{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;gap:8px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:400;line-height:24px}.crs-contact .mobile .list li:before{content:"";display:block;width:12px;height:12px;border-radius:50%;background:#d62c2c}@media (max-width: 768px){.crs-contact .mobile{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;grid-row:3 / 4}}.awards{margin-top:60px}@media (max-width: 768px){.awards{margin-top:30px}}.awards .awards-container{margin-bottom:0}@media (max-width: 768px){.awards .awards-container{margin-bottom:20px}}`;
  class _i {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Ei}</style>`), this.render(), new Ti(".awards"), this.submit();
    }
    submit() {
      const e = C(".crs-contact .form");
      e && (e.querySelectorAll("input").forEach((t) => {
        t.addEventListener("input", (s) => {
          var r;
          const o = s.target, n = (r = o.parentNode) == null ? void 0 : r.querySelector(".placeholder");
          n && (o.value ? n.style.display = "none" : n.style.display = "block");
        });
      }), e.addEventListener("submit", async (t) => {
        t.preventDefault();
        const s = e.querySelectorAll("input");
        let o = !0;
        if (s.forEach((r) => {
          let l = !0;
          const a = r.value.trim();
          if (r.id === "os-firstname" || r.id === "os-lastname") {
            if (r.id === "os-lastname" && a === "")
              return;
            l = /^[A-Za-z\s]+$/.test(a);
          } else
            r.id === "os-email" && (l = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a));
          l ? r.classList.remove("invalid") : (r.classList.add("invalid"), o = !1), r.addEventListener("input", () => {
            r.classList.remove("invalid");
          });
        }), !o)
          return;
        const n = new FormData(e);
        Object.fromEntries(n.entries());
        try {
          await xe({
            id: Ze,
            data: n
          }) && (localStorage.setItem(Ie, "true"), localStorage.setItem(Ae, "false"), window.location.href = "/success");
        } catch (r) {
          const l = e.querySelector(".actions .error");
          l && l.classList.add("show"), console.log(r);
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
            <p class="os-title">
              Software development <span><span class="old">from USD 10000</span> USD 6000 for MVP.</span>
            </p>
            <p class="os-descr">A precise tailored quote for you business is available via consultation call.</p>
          </div>
        </div>
        <div class="right form-container">
          <form class="form" action="">
            <h2 class="title">Get a Quote Now</h2>
            <p class="subtitle">Get a plan tailored specifically to your needs</p>
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

              <button type="submit" class="btn-primary btn-primary_accent">GET A GUOTE</button>
              <div class="privacy">
                <div class="privacy-link">
                  By submitting, I agree to Keenethics’ <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                </div>
                <div class="privacy-descr">
                  <span>${we}</span>
                  <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="awards"></div>
    `
      ), t = C("section#contact-us .container");
      t && t.insertAdjacentHTML("afterbegin", e);
    }
  }
  const Ci = `section#contact-us .container>.row{display:none}section.contact-nav{display:none}.contact-us-form{display:none}.crs-auform{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;max-width:1110px;margin:64px auto;grid-gap:0 40px;gap:0 40px;font-family:Raleway}@media (max-width: 768px){.crs-auform{margin-top:34px;margin-bottom:34px}}.crs-auform>*{font-family:inherit}.crs-auform__title{font-size:54px;line-height:64px;font-weight:800;color:#12233d}.crs-auform__title--mobile{font-size:32px;line-height:40px;font-weight:800;color:#12233d}.crs-auform__title--mobile{display:none}.crs-auform__left{width:100%;grid-column:1 / 2;grid-row:1 / 3}.crs-auform__descr{font-size:18px;font-weight:400;font-stretch:normal;font-style:normal;line-height:24px;letter-spacing:normal;text-align:left;color:#12233d}.crs-auform__descr span{font-weight:700}.crs-auform__descr:first-of-type{margin-top:32px}.crs-auform__descr:last-of-type{margin-top:24px}.crs-auform__lists{margin-top:24px;line-height:24px!important;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;padding-left:24px;padding-right:24px;gap:40px}.crs-auform__list{display:grid;grid-gap:16px;gap:16px;list-style:circle;font-size:16px;font-weight:400;line-height:24px}.crs-auform__list li::marker{color:#d62c2c}.crs-auform__right{flex:1;width:100%;border-radius:8px;background-color:#12233d;padding:40px;grid-column:2 / 3;grid-row:1 / 3}.crs-auform[data-action=download-step-2] .crs-auform__right{height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}.js-has-pseudo [csstools-has-1a-2r-36-37-19-2p-39-2u-33-36-31-2n-2n-36-2x-2v-2w-38-1m-2w-2p-37-14-1a-2r-36-37-19-2p-39-2u-33-36-31-2n-2n-36-2x-2v-2w-38-19-2x-31-2v-1m-32-33-38-14-2j-2s-2p-38-2p-19-2p-2r-38-2x-33-32-1p-13-2s-33-3b-32-30-33-2p-2s-19-37-38-2t-34-19-1e-13-2l-15-15]:not(.does-not-exist):not(.does-not-exist){background-color:transparent;padding:0}.crs-auform__right:has(.crs-auform__right-img:not([data-action=download-step-2])){background-color:transparent;padding:0}.crs-auform__right .crs-auform__right-img{overflow:hidden;width:auto;height:100%;background-image:url(https://conversionratestore.github.io/projects/keenethics/img/h-woman.webp);background-position:right;border-radius:8px}.crs-auform__at{font-size:12px;color:#dae4f2}.form{width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column;gap:24px}.form .title{font-family:Raleway;font-size:32px;font-weight:700;line-height:40px;text-align:left;color:#fff}@media (max-width: 768px){.form .title{font-size:24px;line-height:32px}}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15]:not(.does-not-exist):not(does-not-exist){position:relative}.form label:has(.placeholder){position:relative}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist){position:absolute;top:50%;left:21px;transform:translateY(-50%);color:#6f7a88;font-size:16px;line-height:24px;font-weight:600}.form label:has(.placeholder) .placeholder{position:absolute;top:50%;left:21px;transform:translateY(-50%);color:#6f7a88;font-size:16px;line-height:24px;font-weight:600}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38]:not(.does-not-exist):not(does-not-exist):not(does-not-exist){width:100%;color:#12233d;font-weight:700;font-size:16px}.form label:has(.placeholder) input{width:100%;color:#12233d;font-weight:700;font-size:16px}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist){display:none}.form label:has(.placeholder) .placeholder{display:none}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){display:block}.form label:has(.placeholder) input+.placeholder{display:block}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-2j-2s-2p-38-2p-19-36-2t-35-39-2x-36-2t-2s-2l-w-17-w-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist):after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.form label:has(.placeholder) input[data-required]+.placeholder:after{content:"*";top:-2px;position:absolute;font-size:25px;color:#d62c2c}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){border:2px solid #d62c2c}.form label:has(.placeholder) input.invalid{border:2px solid #d62c2c}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-2x-32-34-39-38-1a-2x-32-3a-2p-30-2x-2s-w-3i-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(.does-not-exist):not(does-not-exist):not(does-not-exist){visibility:visible}.form label:has(.placeholder) input.invalid~.error{visibility:visible}.js-has-pseudo [csstools-has-1a-2u-33-36-31-w-30-2p-2q-2t-30-1m-2w-2p-37-14-1a-34-30-2p-2r-2t-2w-33-30-2s-2t-36-15-w-1a-2t-36-36-33-36]:not(.does-not-exist):not(.does-not-exist):not(does-not-exist){color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.form label:has(.placeholder) .error{color:#d62c2c;position:absolute;font-size:12px;bottom:-17px;visibility:hidden}.form .actions{margin-top:12px}.form .actions .error{color:#d62c2c;font-weight:600;display:none}.form .actions .error.show{display:block;margin-bottom:10px}.form .actions button{height:48px;border:none;width:100%;font-size:16px;line-height:24px;font-weight:700;text-align:center;color:#fff;text-transform:uppercase;cursor:pointer}.form .privacy{margin-top:24px;font-size:14px;color:#dae4f2}.form .privacy *{line-height:24px;font-size:14px;color:#dae4f2}.form .privacy a{color:inherit;-webkit-text-decoration:underline;text-decoration:underline}.form .privacy-descr{font-size:14px;margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.form .privacy-descr p{font-size:inherit}.form input{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600!important;line-height:22px}.form input,.form summary{padding-left:21px;padding-right:21px;border:none}.form input,.form details{height:48px;border-radius:10px}.form details{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center}.form .select{position:relative}.form input::-csstools-invalid-placeholder{font-size:16px;color:#6f7a88;font-family:inherit}.form summary:not(does-not-exist),.form input:not(does-not-exist){font-size:16px;color:#6f7a88;font-family:inherit}.form summary{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;height:100%;color:#6f7a88;font-size:16px;line-height:24px;font-weight:600;padding-right:40px}.form summary.selected{color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:22px}.form summary[data-choosen]{color:#12233d;font-size:16px;font-weight:700}.form details{width:100%;background:#fff;cursor:pointer}.form details summary::marker{content:none;display:none}.form details summary::-webkit-details-marker{content:none;display:none}.form details summary:after{content:"";background-image:url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');background-size:contain;width:24px;height:24px;position:absolute;top:50%;right:15px;transform:rotate(180deg) translateY(50%)}.form details[open] summary:after{transform:rotate(0) translateY(-50%)}.form details[open] ul,.form details[open] label{cursor:pointer}.form details[open] ul{position:absolute;top:61px;border-radius:8px;box-shadow:0 4px 4px #00000040;left:0;display:grid;grid-gap:8px;gap:8px;background:#fff;width:100%;overflow:hidden;z-index:100;padding-top:12px}.form details[open] ul li label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 16px;color:#12233d;color:var(--blue-800-tangaroa, #12233d);font-family:Raleway;font-size:16px;font-weight:600;line-height:24px}.form details[open] ul li label:hover{background-color:#f2f7ff}.form details[open] ul li label.selected{background-color:#f2f7ff}.form details[open] ul li label.selected:after{content:"";width:24px;height:24px;display:block;background-image:url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12L9.66118 17L19 7" stroke="%23D62C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')}.form details[open] input{position:absolute;left:0;opacity:0}.form{display:none}[data-actions=download-step-2] .form{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex}.crs-auform__actions{position:relative;margin-top:24px}.crs-auform__actions button{height:48px;padding:12px 20px;border-radius:8px;border:none;width:320px;font-size:16px;font-weight:600;text-align:center;cursor:pointer}.crs-auform[data-action=download-step-2] .crs-auform__actions button{width:100%}.crs-auform__privacy{font-size:14px;margin-top:24px;color:#dae4f2}.crs-auform__privacy *{font-size:inherit;line-height:24px}.crs-auform__privacy a{color:inherit}.crs-auform__privacy-descr{margin-top:8px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:8px}.crs-auform__download,[data-phone=hidden]{display:none}[data-phone=visible]{display:block}@media (max-width: 768px){#contact-us{padding:20px 0}.crs-auform{grid-template-columns:1fr;grid-template-rows:auto;max-width:100%;gap:16px;padding:0}.crs-auform__title{display:none}.crs-auform__title--mobile{display:block;grid-column:1 / 2;grid-row:1 / 2;font-size:32px}.crs-auform__right{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;justify-content:center;padding:20px}.crs-auform__right .crs-auform__right-img{max-width:345px;width:100%;height:200px;-o-object-fit:cover;background-repeat:no-repeat;background-position:center;object-fit:cover;border-radius:8px;background-image:url(https://conversionratestore.github.io/projects/keenethics/img/h-woman-mob.webp)}.crs-auform[data-action=download-step-2] .crs-auform__download{display:block;grid-row:2 / 3}.crs-auform[data-action=download-step-2] .crs-auform__download span{font-weight:700}.crs-auform__left{grid-column:1 / 2;grid-row:4 / 5;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;flex-direction:column}.crs-auform__left .crs-auform__actions{order:2}.crs-auform__left .crs-auform__actions button{width:100%}.crs-auform__left .crs-auform__descr{margin:0}.crs-auform__left .crs-auform__descr:last-of-type{margin-top:24px;order:3}.crs-auform[data-action=download-step-2] .crs-auform__left .crs-auform__descr:last-of-type{order:2}.crs-auform__left .crs-auform__lists{line-height:24px;order:3}.crs-auform__form summary{padding-right:50px}.crs-auform[data-action=download-step-2] .crs-auform__desc{margin:0}.crs-auform[data-action=download-step-2] .crs-auform__descr:first-of-type{display:none}.crs-auform[data-action=download-step-2] .crs-auform__actions{margin:0}.crs-auform[data-action=download-step-2] .crs-auform__actions button{width:100%}.crs-auform__right{grid-column:1 / 2;grid-row:3 / 4}}`;
  class Li {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Ci}</style>`), console.log("Estimate form is initialized"), this.render(), this.changeStep(), this.submit(), this.select();
    }
    submit() {
      const e = C(".crs-auform .form");
      e && (e.querySelectorAll("input").forEach((t) => {
        t.addEventListener("input", (s) => {
          var r;
          const o = s.target, n = (r = o.parentNode) == null ? void 0 : r.querySelector(".placeholder");
          n && (o.value ? n.style.display = "none" : n.style.display = "block");
        });
      }), e.addEventListener("submit", async (t) => {
        let s = !0;
        t.preventDefault(), ie(".crs-auform input").forEach((r) => {
          let l = !0;
          const a = r.value.trim();
          if (r.id === "os-firstname" || r.id === "os-lastname") {
            if (r.id === "os-lastname" && a === "")
              return;
            l = /^[A-Za-z\s]+$/.test(a);
          } else
            r.id === "os-email" ? l = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a) : r.id === "os-phone" && a !== "" && (l = /^\+?[0-9\s]+$/.test(a));
          l ? r.classList.remove("invalid") : (r.classList.add("invalid"), s = !1), r.addEventListener("input", () => {
            r.classList.remove("invalid");
          });
        });
        const n = new FormData(e);
        if (s)
          try {
            if (await xe({
              id: Qe,
              data: n
            })) {
              const l = Object.fromEntries(n.entries());
              fetch(`${ki}/files/uxaudit_keenethics.pdf`, {
                method: "GET"
              }).then((a) => a.blob()).then((a) => {
                const c = window.URL.createObjectURL(a), p = document.createElement("a");
                p.style.display = "none", p.href = c, p.target = "_blank", p.download = "uxaudit_keenethics", document.body.appendChild(p), p.click(), window.URL.revokeObjectURL(c);
              }), localStorage.setItem(Ie, "true"), localStorage.setItem(Ae, l.phone ? "true" : "false"), setTimeout(() => {
                window.location.href = "/success";
              }, 100);
            }
          } catch (r) {
            const l = e.querySelector(".actions .error");
            l && l.classList.add("show"), console.log(r);
          }
      }));
    }
    select() {
      var n;
      const e = C(".crs-auform .select details"), t = C(".crs-auform .select details summary"), s = C(".crs-auform .select details ul"), o = (n = C('.crs-auform input[name="phone"]')) == null ? void 0 : n.parentNode;
      !s || !e || !t || (s.addEventListener("click", (r) => {
        var c, p;
        const a = r.target.closest("li");
        a && (e.querySelectorAll("label").forEach((f) => {
          f.classList.remove("selected");
        }), (c = a.querySelector("label")) == null || c.classList.add("selected"), t && (t.textContent = a.textContent, t.classList.add("selected")), e.removeAttribute("open"), ((p = a.textContent) == null ? void 0 : p.trim().toLowerCase()) === "yes" ? o.style.display = "block" : o.style.display = "none");
      }), window.addEventListener("click", (r) => {
        r.target.closest(".select") || e.removeAttribute("open");
      }));
    }
    changeStep() {
      const e = C('button[data-action="download-step-1"]'), t = C(".form"), s = C(".crs-auform__right-img"), o = C(".crs-auform");
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
                <span>${we}</span>
                <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>`
      ), t = C("#contacts-page");
      t && t.insertAdjacentHTML("afterbegin", `<div class="container">${e}</div>`);
    }
  }
  const Mi = ".os-link-wrap{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:flex;gap:16px}@media (max-width: 768px){.os-link-wrap{flex-direction:column}}.os-link-wrap .os-new-cta{border-color:#d62c2c!important;background:#d62c2c!important}.main-heading a{border-radius:8px!important;padding-top:12px!important;padding-bottom:12px!important;font-size:16px!important;line-height:24px!important;text-transform:uppercase;width:280px!important;max-width:100%!important;text-align:center}@media (max-width: 768px){.main-heading a{width:100%!important}}";
  class zi {
    constructor(e) {
      this.servicePages = e, this.init();
    }
    init() {
      this.servicePages.includes(location.pathname) && (document.head.insertAdjacentHTML("beforeend", `<style>${Mi}</style>`), this.addNewCTAButton());
    }
    addNewCTAButton() {
      const e = (
        /* HTML */
        ` <div class="os-link-wrap">
      <a href="/contacts?target=dev" class="contacts-btn os-new-cta">Get tailored quote</a>
    </div>`
      ), t = C(".main-heading"), s = t.querySelector("a");
      if (t) {
        t.insertAdjacentHTML("beforeend", e);
        const o = t.querySelector(".os-link-wrap");
        s && o.append(s);
      }
    }
  }
  const Pi = "@media (max-width: 780px){#site-header .navigation-inner{grid-template-columns:auto 1fr}}@media (max-width: 780px){#site-header .right-side{padding:0;display:block;justify-self:end}}@media (max-width: 780px){#site-header .right-side .contacts-btn{padding:12px 20px;background:#d62c2c;color:#fff}}";
  Oe({ name: "Improve user navigation on the blog pages and introduce new conversion mechanism", dev: "OS" }), De("exp_improve_navigation");
  const Ii = [
    "/services-development-and-quality-assurance",
    "/services-ui-ux-design",
    "/services-business-analysis",
    "/services-maintenance-support",
    "/services-web-development",
    "/services-dedicated-development-team",
    "/tech-apps-progressive-web-apps",
    "/services-al-ml",
    "/services-chatbots-artificial-intelligence",
    "/services-mobile-development",
    "/approach-minimum-viable-product",
    "/services-cloud-application-development",
    "/services-low-code-no-code",
    "/services-internet-of-things"
  ];
  class Ai {
    constructor() {
      this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Pi}</style>`), location.href.includes("blog") && location.pathname !== "/blog" && (new Ue(), new Ye(), new Ve()), location.pathname === "/success" && new je(), location.href.includes("estimate?target=audit") && new Li(), location.href.includes("contacts?target=dev") && new _i(), new zi(Ii), new He();
    }
  }
  new Ai();
})();
//# sourceMappingURL=index.js.map
