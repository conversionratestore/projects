(function() {
  "use strict";
  const m = (o, t, e, c = "") => {
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
    let t, e, c, r, a = (o == null ? void 0 : o.delay) || 50;
    function s() {
      t = null, r = 0;
    }
    return s(), function() {
      return e = window.scrollY, t != null && (r = e - t), t = e, clearTimeout(c), c = setTimeout(s, a), r;
    };
  })();
  const L = `[zippyname=basketTab] coupon-form,
[zippyname=basketTab] giftcards-form {
  background: #fff;
  padding: 0 24px 24px !important;
  margin: 0 !important;
}
[zippyname=basketTab] coupon-form {
  margin-bottom: 12px !important;
  padding-bottom: 0 !important;
}
[zippyname=basketTab] coupon-form .ng-star-inserted:nth-child(1) {
  margin: 0 !important;
}
@media (max-width: 1100px) {
  [zippyname=basketTab] coupon-form {
    margin-bottom: 8px !important;
  }
}
[zippyname=basketTab] #mmWrapper {
  padding: 0 24px 0 !important;
  margin-bottom: 1rem;
  visibility: initial !important;
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
  (function(o, t, e, c, r, a) {
    o.hj = o.hj || function() {
      (o.hj.q = o.hj.q || []).push(arguments);
    }, o._hjSettings = { hjid: 2667925, hjsv: 6 }, r = t.getElementsByTagName("head")[0], a = t.createElement("script"), a.async = !0, a.src = e + o._hjSettings.hjid + c + o._hjSettings.hjsv, r && r.appendChild(a);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_cart_page_step");
  class S {
    constructor() {
      this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.observerNew = null, this.lastPath = window.location.pathname, this.initFunc(), this.observePageChange();
    }
    initFunc() {
      v({
        name: "Adding promo code and gift card options to the checkout",
        dev: "SKh"
      }), n(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${L}</style>`), this.initAllFunc();
    }
    initAllFunc() {
      this.checkPage() === "checkout" && (n('[zippyname="basketTab"] #mmWrapper > div') || p("#mmWrapper > div").then((t) => {
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
      const r = n(t), a = n(e), s = n(c), u = n('[zippyname="basketTab"] h4'), h = n("#checkout-step-payment .bg-col-w.p-a-6 + div.bg-col-w.p-a-6");
      if (!r || !a || !s) {
        console.log(r, a, s), console.error("Element or containers not found");
        return;
      }
      function g() {
        p('[zippyname="basketTab"] #mmWrapper').then((i) => {
          n('[zippyname="basketTab"] #mmWrapper').addEventListener("click", b);
        });
      }
      function j() {
        p('[zippyname="basketTab"] coupon-form').then((i) => {
          n("[zippyname=basketTab] coupon-form [zippyclass='is-open']").addEventListener("click", k), p("[zippyname=basketTab] coupon-form input").then((f) => {
            n("[zippyname=basketTab] coupon-form input").addEventListener("change", y);
          }), p("[zippyname=basketTab] coupon-form action.button").then((f) => {
            n("[zippyname=basketTab] coupon-form action.button").addEventListener("click", w);
          }), p("[zippyname=basketTab] coupon-form button").then((f) => {
            n("[zippyname=basketTab] coupon-form button").addEventListener("click", z);
          });
        });
      }
      function I() {
        p('[zippyname="basketTab"] giftcards-form').then((i) => {
          n(`[zippyname="basketTab"] giftcards-form [zippyclass='is-open']`).addEventListener("click", _), p("[zippyname=basketTab] giftcards-form input").then((f) => {
            n("[zippyname=basketTab] giftcards-form input").addEventListener("change", x);
          }), p("[zippyname=basketTab] giftcards-form action.button").then((f) => {
            n("[zippyname=basketTab] giftcards-form action.button").addEventListener("click", C);
          }), p("[zippyname=basketTab] giftcards-form action.button-1").then((f) => {
            n("[zippyname=basketTab] giftcards-form action.button-1").addEventListener("click", E);
          });
        });
      }
      function b(i) {
        m("exp_cart_page_cart_link_referred", "Been referred by a friend?", "Click", "Bag summary");
      }
      function k(i) {
        i.currentTarget.classList.contains("is-open") ? m("exp_cart_page_cart_promocode_open", "Have you got a promo code", "Click", "Bag summary") : m("exp_cart_page_cart_promocode_close", "Have you got a promo code", "Click", "Bag summary");
      }
      function y(i) {
        m("exp_cart_page_cart_promocode_input", "Enter offer code", "Input", "Bag summary");
      }
      function w(i) {
        m("exp_cart_page_cart_promocode_apply", "Apply", "Click", "Bag summary");
      }
      function z(i) {
        m("exp_cart_page_cart_promocode_close", "Cancel", "Click", "Bag summary");
      }
      function _(i) {
        i.currentTarget.classList.contains("is-open") ? m("exp_cart_page_cart_giftcode_open", "Have you got a gift card", "Click", "Bag summary") : m("exp_cart_page_cart_giftcode_close", "Have you got a gift card", "Click", "Bag summary");
      }
      function x(i) {
        m("exp_cart_page_cart_giftcode_input", "Enter a gift card", "Input", "Bag summary");
      }
      function C(i) {
        m("exp_cart_page_cart_giftcode_apply", "Apply", "Click", "Bag summary");
      }
      function E(i) {
        m("exp_cart_page_cart_giftcode_check", "Check balance", "Click", "Bag summary");
      }
      function P() {
        n("#mmWrapper").removeEventListener("click", b);
      }
      function H() {
        n("coupon-form [zippyclass='is-open']").removeEventListener("click", k), n("coupon-form input").removeEventListener("change", y), n("coupon-form action.button").removeEventListener("click", w), n("coupon-form button").removeEventListener("click", z);
      }
      function W() {
        n("giftcards-form [zippyclass='is-open']").removeEventListener("click", _), n("giftcards-form input").removeEventListener("change", x), n("giftcards-form action.button").removeEventListener("click", C), n("giftcards-form action.button-1").removeEventListener("click", E);
      }
      function T(i) {
        i.contains(r) || (t === "coupon-form" ? i.insertAdjacentElement("afterend", r) : i.insertAdjacentElement("beforeend", r), i === s ? (t === "#mmWrapper" && g(), t === "coupon-form" && j(), t === "giftcards-form" && I()) : (t === "#mmWrapper" && P(), t === "coupon-form" && H(), t === "giftcards-form" && W()));
      }
      console.log("toggleElementBetweenContainers", t);
      const B = new IntersectionObserver((i) => {
        i.forEach((d) => {
          d.isIntersecting && (d.target === h ? (console.log("container1"), T(a)) : d.target === u && (console.log("container3"), T(s)));
        });
      });
      B.observe(h), B.observe(u);
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
  new S();
  class F {
    constructor() {
      var t, e;
      this.observer = null, this.countryCode = (e = (t = window == null ? void 0 : window.autoInitData) == null ? void 0 : t.website) == null ? void 0 : e.websiteCode, this.basketButtonHandler = () => {
        const c = () => {
          this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.waitForElementCustom('minibasket a[href*="/basket"]', (r) => {
            var u;
            const s = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${this.country === "us" ? "/us/checkout" : "/checkout"}"
            ><span class="p1 col-w">Checkout securely</span></a
          >`
            );
            r.outerHTML = s, (u = n('minibasket a[href*="/checkout"]')) == null || u.addEventListener("click", (h) => {
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
          document.querySelectorAll("button").forEach((a) => {
            var s;
            if (a && ((s = a.textContent) != null && s.includes("Continue shopping"))) {
              const u = localStorage.getItem("lastPdpHref"), h = (
                /* HTML */
                ` <a class="w-12 button-1 m-b m-t-2" href="${u}"
              ><span class="button__body">Continue shopping</span></a
            >`
              );
              u && (a.outerHTML = h), clearInterval(c);
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
        e.pushState = function(a) {
          c.apply(e, arguments), t();
        }, e.replaceState = function(a) {
          r.apply(e, arguments), t();
        }, window.addEventListener("popstate", function(a) {
          t();
        });
      })(window.history);
    }
    waitForElementCustom(t, e) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((c, r) => {
        const a = document.querySelector(t);
        a && e(a);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new F();
})();
//# sourceMappingURL=index.js.map
