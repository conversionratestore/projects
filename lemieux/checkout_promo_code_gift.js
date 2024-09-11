(function() {
  "use strict";
  const u = (o, t, e, c = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: t,
      event_type: e,
      event_loc: c
    }), console.dir(`Event: ${o} | ${t} | ${e} | ${c}`);
  }, v = ({ name: o, dev: t }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, n = (o) => document.querySelector(o);
  function p(o) {
    return new Promise((t) => {
      if (document.querySelector(o))
        return t(document.querySelector(o));
      const e = new MutationObserver(() => {
        document.querySelector(o) && (t(document.querySelector(o)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(o) {
    o = o === void 0 ? {} : o;
    let t, e, c, r, i = (o == null ? void 0 : o.delay) || 50;
    function s() {
      t = null, r = 0;
    }
    return s(), function() {
      return e = window.scrollY, t != null && (r = e - t), t = e, clearTimeout(c), c = setTimeout(s, i), r;
    };
  })();
  const T = `[zippyname=basketTab] coupon-form,
[zippyname=basketTab] giftcards-form {
  background: #fff;
  padding: 0 24px 24px !important;
  margin: 0 !important;
}
[zippyname=basketTab] coupon-form {
  margin-bottom: 12px !important;
  padding-bottom: 0 !important;
}
@media (max-width: 1100px) {
  [zippyname=basketTab] coupon-form {
    margin-bottom: 8px !important;
  }
}
[zippyname=basketTab] #mmWrapper {
  padding: 0 24px 0 !important;
  margin-bottom: 1rem;
}
[zippyname=basketTab] + div {
  margin-top: 8px !important;
}
@media (max-width: 1100px) {
  [zippyname=basketTab] + div {
    margin-top: 15px !important;
  }
}

checkout-form coupon-form form > .m-t-2-s[zippyname=gift], checkout-form coupon-form form > [zippyname=tab],
checkout-form giftcards-form form > .m-t-2-s[zippyname=gift],
checkout-form giftcards-form form > [zippyname=tab] {
  border: 1px solid #cecdcd;
  background: #fafafa;
  margin: 0 !important;
}
checkout-form coupon-form form [zippyclass=is-open],
checkout-form giftcards-form form [zippyclass=is-open] {
  position: relative;
  padding: 6px 12px 6px 40px !important;
}
@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass=is-open],
  checkout-form giftcards-form form [zippyclass=is-open] {
    padding: 8px 12px 8px 40px !important;
  }
}
checkout-form coupon-form form [zippyclass=is-open]::before,
checkout-form giftcards-form form [zippyclass=is-open]::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url("https://conversionratestore.github.io/projects/lemieux/img/gift_card_icon.svg") no-repeat;
  background-size: contain;
}
checkout-form coupon-form form [zippyclass=is-open] > span,
checkout-form giftcards-form form [zippyclass=is-open] > span {
  color: #212121;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div {
  padding: 6px 12px 4px !important;
}
@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass=is-open] + div > div > div,
  checkout-form giftcards-form form [zippyclass=is-open] + div > div > div {
    padding: 4px 12px 4px !important;
  }
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap input,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap input {
  padding-left: 16px;
  padding-right: 16px;
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap label,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap label {
  color: #212121;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.5px;
  left: 16px;
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap + div,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap + div {
  margin-top: 12px !important;
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap + div .button-1,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap + div .button-1 {
  padding: 0 !important;
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap + div > div, checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap + div > result,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap + div > div,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap + div > result {
  position: relative;
}
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap + div .button > span,
checkout-form coupon-form form [zippyclass=is-open] + div > div > div input-wrap + div .button-1 > span,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap + div .button > span,
checkout-form giftcards-form form [zippyclass=is-open] + div > div > div input-wrap + div .button-1 > span {
  line-height: 28px;
  letter-spacing: 1px;
}
checkout-form coupon-form form [zippyclass=is-open]::before {
  background: url("https://conversionratestore.github.io/projects/lemieux/img/promo_code_icon.svg") no-repeat;
  background-size: contain;
}/*# sourceMappingURL=main.css.map */`;
  (function(o, t, e, c, r, i) {
    o.hj = o.hj || function() {
      (o.hj.q = o.hj.q || []).push(arguments);
    }, o._hjSettings = { hjid: 2667925, hjsv: 6 }, r = t.getElementsByTagName("head")[0], i = t.createElement("script"), i.async = !0, i.src = e + o._hjSettings.hjid + c + o._hjSettings.hjsv, r && r.appendChild(i);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_cart_page_step");
  class L {
    constructor() {
      this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.observerNew = null, this.lastPath = window.location.pathname, this.initFunc(), this.observePageChange();
    }
    initFunc() {
      v({
        name: "Adding promo code and gift card options to the checkout",
        dev: "SKh"
      }), n(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${T}</style>`), this.initAllFunc();
    }
    initAllFunc() {
      this.checkPage() === "checkout" && (n('[zippyname="basketTab"] #mmWrapper') || p("#mmWrapper").then((t) => {
        p('[zippyname="basketTab"]').then((e) => {
          p("mention-me-wrapper").then((c) => {
            console.log("mmWrapper>>>>"), this.toggleElementBetweenContainers(
              "#mmWrapper",
              "mention-me-wrapper",
              '[zippyname="basketTab"] > div.zippy-hide-up'
            );
          });
        });
      }), n('[zippyname="basketTab"] coupon-form') || p("coupon-form").then((t) => {
        p('[zippyname="basketTab"]').then((e) => {
          p("mention-me-wrapper").then((c) => {
            console.log("coupon>>>>"), this.toggleElementBetweenContainers(
              "coupon-form",
              "mention-me-wrapper",
              '[zippyname="basketTab"] > div.zippy-hide-up'
            );
          });
        });
      }), n('[zippyname="basketTab"] giftcards-form') || p("giftcards-form").then((t) => {
        p('[zippyname="basketTab"]').then((e) => {
          console.log("giftcards>>>>"), this.toggleElementBetweenContainers(
            "giftcards-form",
            "#checkout-step-payment .bg-col-w:nth-child(1)",
            '[zippyname="basketTab"]'
          );
        });
      }));
    }
    toggleElementBetweenContainers(t, e, c) {
      const r = n(t), i = n(e), s = n(c), m = n('[zippyname="basketTab"] h4'), h = n("#checkout-step-payment .bg-col-w.p-a-6 + div.bg-col-w.p-a-6");
      if (!r || !i || !s) {
        console.log(r, i, s), console.error("Element or containers not found");
        return;
      }
      function g() {
        p('[zippyname="basketTab"] coupon-form').then((a) => {
          n("[zippyname=basketTab] coupon-form [zippyclass='is-open']").addEventListener("click", b), p("[zippyname=basketTab] coupon-form input").then((f) => {
            n("[zippyname=basketTab] coupon-form input").addEventListener("change", k);
          }), p("[zippyname=basketTab] coupon-form action.button").then((f) => {
            n("[zippyname=basketTab] coupon-form action.button").addEventListener("click", y);
          }), p("[zippyname=basketTab] coupon-form button").then((f) => {
            n("[zippyname=basketTab] coupon-form button").addEventListener("click", w);
          });
        });
      }
      function j() {
        p('[zippyname="basketTab"] giftcards-form').then((a) => {
          n(`[zippyname="basketTab"] giftcards-form [zippyclass='is-open']`).addEventListener("click", z), p("[zippyname=basketTab] giftcards-form input").then((f) => {
            n("[zippyname=basketTab] giftcards-form input").addEventListener("change", _);
          }), p("[zippyname=basketTab] giftcards-form action.button").then((f) => {
            n("[zippyname=basketTab] giftcards-form action.button").addEventListener("click", x);
          }), p("[zippyname=basketTab] giftcards-form action.button-1").then((f) => {
            n("[zippyname=basketTab] giftcards-form action.button-1").addEventListener("click", C);
          });
        });
      }
      function b(a) {
        a.currentTarget.classList.contains("is-open") ? u("exp_cart_page_cart_promocode_open", "Have you got a promo code", "Click", "Bag summary") : u("exp_cart_page_cart_promocode_close", "Have you got a promo code", "Click", "Bag summary");
      }
      function k(a) {
        u("exp_cart_page_cart_promocode_input", "Enter offer code", "Input", "Bag summary");
      }
      function y(a) {
        u("exp_cart_page_cart_promocode_apply", "Apply", "Click", "Bag summary");
      }
      function w(a) {
        u("exp_cart_page_cart_promocode_close", "Cancel", "Click", "Bag summary");
      }
      function z(a) {
        a.currentTarget.classList.contains("is-open") ? u("exp_cart_page_cart_giftcode_open", "Have you got a gift card", "Click", "Bag summary") : u("exp_cart_page_cart_giftcode_close", "Have you got a gift card", "Click", "Bag summary");
      }
      function _(a) {
        u("exp_cart_page_cart_giftcode_input", "Enter a gift card", "Input", "Bag summary");
      }
      function x(a) {
        u("exp_cart_page_cart_giftcode_apply", "Apply", "Click", "Bag summary");
      }
      function C(a) {
        u("exp_cart_page_cart_giftcode_check", "Check balance", "Click", "Bag summary");
      }
      function F() {
        n("coupon-form [zippyclass='is-open']").removeEventListener("click", b), n("coupon-form input").removeEventListener("change", k), n("coupon-form action.button").removeEventListener("click", y), n("coupon-form button").removeEventListener("click", w);
      }
      function I() {
        n("giftcards-form [zippyclass='is-open']").removeEventListener("click", z), n("giftcards-form input").removeEventListener("change", _), n("giftcards-form action.button").removeEventListener("click", x), n("giftcards-form action.button-1").removeEventListener("click", C);
      }
      function E(a) {
        a.contains(r) || (t === "coupon-form" ? a.insertAdjacentElement("afterend", r) : a.insertAdjacentElement("beforeend", r), a === s ? (t === "coupon-form" && g(), t === "giftcards-form" && j()) : (t === "coupon-form" && F(), t === "giftcards-form" && I()));
      }
      console.log("toggleElementBetweenContainers", t);
      const B = new IntersectionObserver((a) => {
        a.forEach((d) => {
          d.isIntersecting && (d.target === h ? (console.log("container1"), E(i)) : d.target === m && (console.log("container3"), E(s)));
        });
      });
      B.observe(h), B.observe(m);
    }
    observePageChange() {
      this.observerNew = new MutationObserver((e) => {
        e.forEach((c) => {
          window.location.pathname !== this.lastPath && (this.initAllFunc(), this.lastPath = window.location.pathname);
        });
      });
      const t = { childList: !0, subtree: !0 };
      this.observerNew.observe(document.body, t);
    }
    checkPage() {
      const t = window.location.href;
      switch (!0) {
        case n("product-view-layout") !== null:
          return "product";
        case n("category-view-layout") !== null:
          return "listing";
        case t.includes("/basket"):
          return "basket";
        case t.includes("/checkout"):
          return "checkout";
        default:
          return "other";
      }
    }
  }
  new L();
  class S {
    constructor() {
      var t, e;
      this.observer = null, this.countryCode = (e = (t = window == null ? void 0 : window.autoInitData) == null ? void 0 : t.website) == null ? void 0 : e.websiteCode, this.basketButtonHandler = () => {
        const c = () => {
          this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.waitForElementCustom('minibasket a[href*="/basket"]', (r) => {
            var m;
            const s = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${this.country === "us" ? "/us/checkout" : "/checkout"}"
            ><span class="p1 col-w">Checkout securely</span></a
          >`
            );
            r.outerHTML = s, (m = n('minibasket a[href*="/checkout"]')) == null || m.addEventListener("click", (h) => {
              const g = document.querySelector('minibasket [aria-label="Close"]');
              localStorage.setItem("lastPdpHref", location.href), g && g.click();
            });
          });
        };
        c(), this.pageChangeHandler(c);
      }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.init();
    }
    init() {
      v({ name: "Eliminate cart page step on Desktop", dev: "OS (SKh)" }), this.basketButtonHandler(), this.updateDevice(), this.checkBasketPage();
    }
    updateDevice() {
      window.addEventListener("resize", () => {
        const t = this.device;
        this.device = window.innerWidth > 1024 ? "desktop" : "mobile", t !== this.device && this.init();
      });
    }
    checkBasketPage() {
      function t() {
        const c = setInterval(function() {
          document.querySelectorAll("button").forEach((i) => {
            var s;
            if (i && ((s = i.textContent) != null && s.includes("Continue shopping"))) {
              const m = localStorage.getItem("lastPdpHref"), h = (
                /* HTML */
                ` <a class="w-12 button-1 m-b m-t-2" href="${m}"
              ><span class="button__body">Continue shopping</span></a
            >`
              );
              m && (i.outerHTML = h), clearInterval(c);
            }
          });
        }, 100);
      }
      function e() {
        location.href.includes("basket") && t();
      }
      this.pageChangeHandler(e), e();
    }
    pageChangeHandler(t) {
      (function(e) {
        const c = e.pushState, r = e.replaceState;
        e.pushState = function(i) {
          c.apply(e, arguments), t();
        }, e.replaceState = function(i) {
          r.apply(e, arguments), t();
        }, window.addEventListener("popstate", function(i) {
          t();
        });
      })(window.history);
    }
    waitForElementCustom(t, e) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((c, r) => {
        const i = document.querySelector(t);
        i && e(i);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new S();
})();
//# sourceMappingURL=index.js.map
