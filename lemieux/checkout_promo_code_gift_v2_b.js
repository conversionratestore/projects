(function() {
  "use strict";
  const m = (r, n, t, c = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: n,
      event_type: t,
      event_loc: c
    }), console.log(`Event: ${r} | ${n} | ${t} | ${c}`);
  }, L = ({ name: r, dev: n }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, o = (r) => document.querySelector(r);
  function e(r) {
    return new Promise((n) => {
      if (document.querySelector(r))
        return n(document.querySelector(r));
      const t = new MutationObserver(() => {
        document.querySelector(r) && (n(document.querySelector(r)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const S = `[zippyname='basketTab'] coupon-form,
[zippyname='basketTab'] giftcards-form {
  background: #fff;
  padding: 0 !important;
  margin: 0 !important;
}

[zippyname='basketTab'] coupon-form {
  margin-bottom: 12px;
}
[zippyname='basketTab'] coupon-form {
  margin-bottom: 12px !important;
  padding-bottom: 0 !important;
}
[zippyname='basketTab'] coupon-form .ng-star-inserted:nth-child(1) {
  margin: 0 !important;
}
@media (max-width: 1100px) {
  [zippyname='basketTab'] coupon-form {
    margin-bottom: 8px !important;
  }
}
[zippyname='basketTab'] #mmWrapper {
  padding: 0 !important;
  margin-bottom: 1rem;
  visibility: initial !important;
}

[zippyname='basketTab'] #mmWrapper a {
  text-decoration: underline;
}
[zippyname='basketTab'] + div {
  margin-top: 8px !important;
}
@media (max-width: 1100px) {
  [zippyname='basketTab'] + div {
    margin-top: 15px !important;
  }
}
checkout-form checkout-minibasket {
  width: 100%;
}

checkout-form checkout-minibasket > div {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
checkout-form [zippyname='basketTab'] > div > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

checkout-form h4 {
  display: flex;
  align-items: center;
  gap: 12px;
}
checkout-form h4 > span {
  display: none;
}
checkout-form h4 + div {
  margin: 0 !important;
}
checkout-form h4 + div > span {
  display: none;
}
checkout-form h4 + div > button {
  margin-right: 0 !important;
  white-space: nowrap;
}

checkout-form h4 + div > button > span {
  text-decoration: underline;
}
checkout-form h4 + div > span {
  display: none;
}
checkout-form coupon-form form > .m-t-2-s[zippyname='gift'],
checkout-form coupon-form form > [zippyname='tab'],
checkout-form giftcards-form form > .m-t-2-s[zippyname='gift'],
checkout-form giftcards-form form > [zippyname='tab'] {
  /* border: 1px solid #cecdcd; */
  background: #fafafa;
  margin: 0 !important;
}
checkout-form coupon-form form [zippyclass='is-open'],
checkout-form giftcards-form form [zippyclass='is-open'] {
  position: relative;
  padding: 8px !important;
}
@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass='is-open'],
  checkout-form giftcards-form form [zippyclass='is-open'] {
    padding: 8px !important;
  }
}
checkout-form coupon-form form [zippyclass='is-open']::before,
checkout-form giftcards-form form [zippyclass='is-open']::before {
  display: none;
  content: '';
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url('https://conversionratestore.github.io/projects/lemieux/img/gift_card_icon.svg') no-repeat;
  background-size: contain;
}
checkout-form coupon-form form [zippyclass='is-open'] > span,
checkout-form giftcards-form form [zippyclass='is-open'] > span {
  color: #212121;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
}
checkout-form :is(coupon-form, giftcards-form) form [zippyclass='is-open'] + div > div > div {
  position: relative;
  display: flex;
  gap: 16px;
  padding: 8px !important;
}

checkout-form
  :is(coupon-form, giftcards-form)
  form
  [zippyclass='is-open']
  + div
  > div
  > div:has(result p:not(:empty)):not(:has(validation:not(:empty))) {
  padding-bottom: 30px !important;
}

checkout-form
  :is(coupon-form, giftcards-form)
  form
  [zippyclass='is-open']
  + div
  > div
  > div:has(validation:not(:empty))
  result {
  display: none !important;
}

@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass='is-open'] + div > div > div,
  checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div {
    flex-direction: column;
  }
}
checkout-form :is(coupon-form, giftcards-form) form [zippyclass='is-open'] + div > div > div input-wrap {
  flex: 1;
  max-width: 232px;
}

@media (max-width: 1100px) {
  checkout-form :is(coupon-form, giftcards-form) form [zippyclass='is-open'] + div > div > div input-wrap {
    max-width: 100%;
  }
}

checkout-form :is(giftcards-form, coupon-form) form input-wrap + div > div {
  display: flex !important;
  gap: 16px;
}
checkout-form :is(giftcards-form, coupon-form) form div :has(> :is(button, .button, .button-1)) {
  padding: 0 !important;
  width: fit-content;
}

checkout-form coupon-form form :is(button, .button, .button-1) {
  width: 110px !important;
}

checkout-form giftcards-form form div :has(> .button) {
  width: 82px !important;
}

checkout-form giftcards-form form div :has(> .button-1) {
  width: 137px !important;
}

@media (max-width: 1100px) {
  checkout-form :is(giftcards-form, coupon-form) form div :has(> :is(button, .button, .button-1)) {
    padding: 0 !important;
    width: 50% !important;
  }

  checkout-form :is(coupon-form, giftcards-form) form :is(button, .button, .button-1) {
    width: 100% !important;
  }
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap input,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap input {
  padding-left: 16px;
  padding-right: 16px;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap label,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap label {
  color: #212121;
  font-size: 18px !important;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 1px;
  left: 16px;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div {
  position: static !important;
  margin-top: 0 !important;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1 {
  padding: 0 !important;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div {
  position: relative;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div:has(result),
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div > result {
  margin-top: 0 !important;
  position: absolute !important;
  top: 62px;
  left: 8px;
  z-index: 7;
}

@media (max-width: 1100px) {
  checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div > div:has(result),
  checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div > result {
    top: 125px;
  }
}
checkout-form :is(giftcards-form, coupon-form) form [zippyclass='is-open'] + div > div > div input-wrap + div result p {
  font-size: 0.9375rem !important;
  font-style: italic;
  letter-spacing: 0.0625rem !important;
  line-height: 1.3125rem !important;
  font-weight: 400 !important;
}
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button > span,
checkout-form coupon-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1 > span,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button > span,
checkout-form giftcards-form form [zippyclass='is-open'] + div > div > div input-wrap + div .button-1 > span {
  line-height: 28px;
  letter-spacing: 1px;
}
checkout-form coupon-form form [zippyclass='is-open']::before {
  display: none;
  background: url('https://conversionratestore.github.io/projects/lemieux/img/promo_code_icon.svg') no-repeat;
  background-size: contain;
}

checkout-step[name='account'] h4 span {
  padding: 0 !important;
  display: block !important;
}

/* checkout-step[name='payment'] :is(coupon-form, giftcards-form) {
  display: none !important;
} */

checkout-account social-login > div p {
  grid-column: 1 / -1;
  grid-row: 1;
  font-weight: 500;
  font-size: 15px;
}

/* C TEST */

/* checkout-account social-login {
  width: 100%;
}
checkout-account social-login > div {
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  column-gap: 24px;
}

checkout-account social-login > div p {
  grid-column: 1 / -1;
  grid-row: 1;
  font-weight: 500;
  font-size: 15px;
}

checkout-account social-login > *:not(p) {
  grid-row: 2;
  grid-column: span 1;
}

checkout-account social-login .button {
  width: 100% !important;
}
checkout-account social-login .button__body span {
  display: none !important;
}

checkout-account social-login .button__body i {
  margin: 0 !important;
} */
`;
  (function(r, n, t, c, p, a) {
    r.hj = r.hj || function() {
      (r.hj.q = r.hj.q || []).push(arguments);
    }, r._hjSettings = { hjid: 2667925, hjsv: 6 }, p = n.getElementsByTagName("head")[0], a = n.createElement("script"), a.async = !0, a.src = t + r._hjSettings.hjid + c + r._hjSettings.hjsv, p && p.appendChild(a);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_cart_page_step");
  class F {
    constructor() {
      this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.observerNew = null, this.lastPath = window.location.pathname, this.initFunc(), this.observePageChange();
    }
    initFunc() {
      L({
        name: "Adding promo code and gift card options to the checkout (Second iteration B)",
        dev: "OS"
      }), o(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${S}</style>`), this.initAllFunc();
    }
    initAllFunc() {
      this.checkPage() === "checkout" && (setTimeout(() => {
        o('[zippyname="basketTab"] #mmWrapper > div') || e("#mmWrapper > div").then((n) => {
          e('[zippyname="basketTab"]').then((t) => {
            e("mention-me-wrapper").then((c) => {
              this.toggleElementBetweenContainers(
                "#mmWrapper",
                "mention-me-wrapper",
                "checkout-minibasket ul",
                "beforeend"
              );
            });
          });
        });
      }, 1e3), o('[zippyname="basketTab"] giftcards-form') || e("giftcards-form").then((n) => {
        e('[zippyname="basketTab"]').then((t) => {
          e("checkout-minibasket coupon-form").then(() => {
            this.toggleElementBetweenContainers(
              "giftcards-form",
              "mention-me-wrapper",
              "checkout-minibasket coupon-form",
              "afterend"
            );
          });
        });
      }), o('[zippyname="basketTab"] coupon-form') || e("coupon-form").then((n) => {
        e('[zippyname="basketTab"]').then((t) => {
          e("mention-me-wrapper").then((c) => {
            this.toggleElementBetweenContainers("coupon-form", "mention-me-wrapper", "basket-view-totals");
          });
        });
      }), o("checkout-form h4 price") || setTimeout(() => {
        e("checkout-form h4 + div > span price").then((n) => {
          this.toggleElementBetweenContainers(
            "checkout-form h4 + div > span price",
            "checkout-form h4 + div",
            "checkout-form h4",
            "beforeend"
          );
        });
      }, 1e3), this.changeCopy(), this.changeCopyContact(), this.observer());
    }
    async observer() {
      window.addEventListener("click", (n) => {
        const t = n.target;
        t.closest("button") && (this.changeCopyContact(), setTimeout(() => {
          this.changeCopyContact();
        }, 2e3)), t.closest("checkout-step action") && (this.changeCopyContact(), setTimeout(() => {
          this.changeCopyContact();
        }, 2e3));
      });
    }
    changeCopyContact() {
      e("checkout-account ng-form h1 span").then((p) => {
        const a = p;
        a.textContent = "Contact";
      });
      const n = document.querySelector("checkout-account ng-form h1 span");
      n && (n.innerHTML = "Contact"), e("checkout-account ng-form h3 > span").then((p) => {
        const a = p;
        a.innerHTML = "Contact";
      });
      const t = document.querySelector("checkout-account ng-form h3 > span");
      t && (t.innerHTML = "Contact"), e("checkout-step h4 span").then((p) => {
        const a = p;
        a.innerHTML = "Contact";
      });
      const c = document.querySelector("checkout-step h4 span");
      c && (c.innerHTML = "Contact");
    }
    changeCopy() {
      e('[zippyclass="!ng-hide"]').then((n) => {
        const t = n.querySelector("span");
        t.innerHTML = "Hide bag summary";
      }), e('[zippyclass="ng-hide"]').then((n) => {
        const t = n;
        t.innerHTML = "Show bag summary";
        const c = t.closest("button"), p = setTimeout(() => {
          c == null || c.click(), t.classList.contains("ng-hide") && clearTimeout(p);
        }, 1e3);
      });
    }
    toggleElementBetweenContainers(n, t, c, p = "beforebegin") {
      var B;
      const a = o(n), d = o(t), u = o(c), h = o('[zippyname="basketTab"] h4'), l = (B = o("#checkout-step-payment .bg-col-w.p-a-6")) == null ? void 0 : B.nextElementSibling;
      if (!a || !d || !u)
        return;
      function j() {
        e('[zippyname="basketTab"] #mmWrapper').then((i) => {
          o('[zippyname="basketTab"] #mmWrapper').addEventListener("click", v);
        });
      }
      function M() {
        e("[zippyname=basketTab] coupon-form [zippyclass='is-open']").then((i) => {
          o("[zippyname=basketTab] coupon-form [zippyclass='is-open']").addEventListener("click", k);
        }), e("[zippyname=basketTab] coupon-form input").then((i) => {
          o("[zippyname=basketTab] coupon-form input").addEventListener("change", b);
        }), e("[zippyname=basketTab] coupon-form action.button").then((i) => {
          o("[zippyname=basketTab] coupon-form action.button").addEventListener("click", y);
        }), e("[zippyname=basketTab] coupon-form button").then((i) => {
          o("[zippyname=basketTab] coupon-form button").addEventListener("click", w);
        });
      }
      function W() {
        e('[zippyname="basketTab"] giftcards-form').then((i) => {
          o(`[zippyname="basketTab"] giftcards-form [zippyclass='is-open']`).addEventListener("click", z), e("[zippyname=basketTab] giftcards-form input").then((f) => {
            o("[zippyname=basketTab] giftcards-form input").addEventListener("change", x);
          }), e("[zippyname=basketTab] giftcards-form action.button").then((f) => {
            o("[zippyname=basketTab] giftcards-form action.button").addEventListener("click", _);
          }), e("[zippyname=basketTab] giftcards-form action.button-1").then((f) => {
            o("[zippyname=basketTab] giftcards-form action.button-1").addEventListener("click", C);
          });
        });
      }
      function v(i) {
        m("exp_cart_page_cart_link_referred", "Been referred by a friend?", "click", "Bag summary");
      }
      function k(i) {
        i.currentTarget.classList.contains("is-open") ? m("exp_cart_page_cart_promocode_open", "Have you got a promo code", "click", "Bag summary") : m("exp_cart_page_cart_promocode_close", "Have you got a promo code", "click", "Bag summary");
      }
      function b(i) {
        m("exp_cart_page_cart_promocode_input", "Enter offer code", "input", "Bag summary");
      }
      function y(i) {
        m("exp_cart_page_cart_promocode_apply", "Apply", "click", "Bag summary");
      }
      function w(i) {
        m("exp_cart_page_cart_promocode_close", "Cancel", "click", "Bag summary");
      }
      function z(i) {
        i.currentTarget.classList.contains("is-open") ? m("exp_cart_page_cart_giftcode_open", "Have you got a gift card", "click", "Bag summary") : m("exp_cart_page_cart_giftcode_close", "Have you got a gift card", "click", "Bag summary");
      }
      function x(i) {
        m("exp_cart_page_cart_giftcode_input", "Enter a gift card", "input", "Bag summary");
      }
      function _(i) {
        m("exp_cart_page_cart_giftcode_apply", "Apply", "click", "Bag summary");
      }
      function C(i) {
        m("exp_cart_page_cart_giftcode_check", "Check balance", "click", "Bag summary");
      }
      function q() {
        o("#mmWrapper").removeEventListener("click", v);
      }
      function P() {
        e("coupon-form [zippyclass='is-open']").then((i) => {
          o("coupon-form [zippyclass='is-open']").removeEventListener("click", k);
        }), e("coupon-form input").then((i) => {
          const s = o("coupon-form input");
          s == null || s.removeEventListener("change", b);
        }), e("coupon-form action.button").then((i) => {
          o("coupon-form action.button").removeEventListener("click", y);
        }), e("coupon-form button").then((i) => {
          o("coupon-form button").removeEventListener("click", w);
        });
      }
      function A() {
        o("giftcards-form [zippyclass='is-open']").removeEventListener("click", z), o("giftcards-form input").removeEventListener("change", x), o("giftcards-form action.button").removeEventListener("click", _), o("giftcards-form action.button-1").removeEventListener("click", C);
      }
      function T(i) {
        if (i.contains(a))
          return;
        i.insertAdjacentElement(p, a), i === u ? (n === "#mmWrapper" && j(), n === "coupon-form" && M(), n === "giftcards-form" && W()) : (n === "#mmWrapper" && q(), n === "coupon-form" && P(), n === "giftcards-form" && A());
        const s = document.querySelector("#checkout-step-payment mention-me-wrapper"), f = document.querySelector("#checkout-step-payment coupon-form");
        s && f && s.after(f);
      }
      const E = new IntersectionObserver((i) => {
        i.forEach((s) => {
          s.isIntersecting && (s.target === l ? T(d) : s.target === h && T(u));
        });
      });
      E.observe(l), E.observe(h);
    }
    observePageChange() {
      this.observerNew = new MutationObserver((t) => {
        t.forEach((c) => {
          window.location.pathname !== this.lastPath && (this.device === "mobile" ? setTimeout(() => {
            this.initAllFunc();
          }, 2800) : this.initAllFunc(), this.lastPath = window.location.pathname);
        });
      });
      const n = { childList: !0, subtree: !0 };
      this.observerNew.observe(document.body, n);
    }
    checkPage() {
      const n = window.location.href;
      switch (!0) {
        case o("product-view-layout") !== null:
          return "product";
        case o("category-view-layout") !== null:
          return "listing";
        case n.includes("/basket"):
          return "basket";
        case n.includes("/checkout"):
          return "checkout";
        default:
          return "other";
      }
    }
  }
  new F();
  class H {
    constructor() {
      var n, t;
      this.observer = null, this.countryCode = (t = (n = window == null ? void 0 : window.autoInitData) == null ? void 0 : n.website) == null ? void 0 : t.websiteCode, this.basketButtonHandler = () => {
        const c = () => {
          this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.waitForElementCustom('minibasket a[href*="/basket"]', (p) => {
            var u;
            const d = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${this.country === "us" ? "/us/checkout" : "/checkout"}"
            ><span class="p1 col-w">Checkout securely</span></a
          >`
            );
            p.outerHTML = d, (u = o('minibasket a[href*="/checkout"]')) == null || u.addEventListener("click", (h) => {
              const l = document.querySelector('minibasket [aria-label="Close"]');
              localStorage.setItem("lastPdpHref", location.href), l && l.click();
            });
          });
        };
        c(), this.pageChangeHandler(c);
      }, this.country = this.countryCode === "base" ? "uk" : this.countryCode === "us" ? "us" : "other", this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.init();
    }
    init() {
      this.basketButtonHandler(), this.updateDevice(), this.checkBasketPage();
    }
    updateDevice() {
      window.addEventListener("resize", () => {
        const n = this.device;
        this.device = window.innerWidth > 1024 ? "desktop" : "mobile", n !== this.device && this.init();
      });
    }
    checkBasketPage() {
      function n() {
        const c = setInterval(function() {
          document.querySelectorAll("button").forEach((a) => {
            var d;
            if (a && ((d = a.textContent) != null && d.includes("Continue shopping"))) {
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
      function t() {
        location.href.includes("basket") && n();
      }
      this.pageChangeHandler(t), t();
    }
    pageChangeHandler(n) {
      (function(t) {
        const c = t.pushState, p = t.replaceState;
        t.pushState = function(a) {
          c.apply(t, arguments), n();
        }, t.replaceState = function(a) {
          p.apply(t, arguments), n();
        }, window.addEventListener("popstate", function(a) {
          n();
        });
      })(window.history);
    }
    waitForElementCustom(n, t) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((c, p) => {
        const a = document.querySelector(n);
        a && t(a);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new H();
})();
