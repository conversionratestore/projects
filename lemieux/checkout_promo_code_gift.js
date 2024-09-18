(function() {
  "use strict";
  const u = (i, t, e, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: e,
      event_loc: r
    }), console.dir(`Event: ${i} | ${t} | ${e} | ${r}`);
  }, v = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, n = (i) => document.querySelector(i);
  function a(i) {
    return new Promise((t) => {
      if (document.querySelector(i))
        return t(document.querySelector(i));
      const e = new MutationObserver(() => {
        document.querySelector(i) && (t(document.querySelector(i)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(i) {
    i = i === void 0 ? {} : i;
    let t, e, r, p, c = (i == null ? void 0 : i.delay) || 50;
    function m() {
      t = null, p = 0;
    }
    return m(), function() {
      return e = window.scrollY, t != null && (p = e - t), t = e, clearTimeout(r), r = setTimeout(m, c), p;
    };
  })();
  const S = `[zippyname=basketTab] coupon-form,
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
  (function(i, t, e, r, p, c) {
    i.hj = i.hj || function() {
      (i.hj.q = i.hj.q || []).push(arguments);
    }, i._hjSettings = { hjid: 2667925, hjsv: 6 }, p = t.getElementsByTagName("head")[0], c = t.createElement("script"), c.async = !0, c.src = e + i._hjSettings.hjid + r + i._hjSettings.hjsv, p && p.appendChild(c);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_cart_page_step");
  class F {
    constructor() {
      this.device = window.innerWidth > 1100 ? "desktop" : "mobile", this.observerNew = null, this.lastPath = window.location.pathname, this.initFunc(), this.observePageChange();
    }
    initFunc() {
      v({
        name: "Adding promo code and gift card options to the checkout",
        dev: "SKh"
      }), n(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${S}</style>`), this.initAllFunc();
    }
    initAllFunc() {
      this.checkPage() === "checkout" && (setTimeout(() => {
        n('[zippyname="basketTab"] #mmWrapper > div') || a("#mmWrapper > div").then((t) => {
          a('[zippyname="basketTab"]').then((e) => {
            a("mention-me-wrapper").then((r) => {
              console.log("mmWrapper>>>>"), this.toggleElementBetweenContainers(
                "#mmWrapper",
                "mention-me-wrapper",
                '[zippyname="basketTab"] > div.zippy-hide-up'
              );
            });
          });
        });
      }, 1e3), n('[zippyname="basketTab"] coupon-form') || a("coupon-form").then((t) => {
        a('[zippyname="basketTab"]').then((e) => {
          a("mention-me-wrapper").then((r) => {
            console.log("coupon>>>>"), this.toggleElementBetweenContainers(
              "coupon-form",
              "mention-me-wrapper",
              '[zippyname="basketTab"] > div.zippy-hide-up'
            );
          });
        });
      }), n('[zippyname="basketTab"] giftcards-form') || a("giftcards-form").then((t) => {
        a('[zippyname="basketTab"]').then((e) => {
          this.toggleElementBetweenContainers(
            "giftcards-form",
            "#checkout-step-payment .bg-col-w:nth-child(1)",
            '[zippyname="basketTab"]'
          );
        });
      }));
    }
    toggleElementBetweenContainers(t, e, r) {
      var L;
      const p = n(t), c = n(e), m = n(r), d = n('[zippyname="basketTab"] h4'), f = (L = n("#checkout-step-payment .bg-col-w.p-a-6")) == null ? void 0 : L.nextElementSibling;
      if (!p || !c || !m) {
        console.log(p, c, m);
        return;
      }
      function l() {
        a('[zippyname="basketTab"] #mmWrapper').then((o) => {
          n('[zippyname="basketTab"] #mmWrapper').addEventListener("click", b);
        });
      }
      function P() {
        a("[zippyname=basketTab] coupon-form [zippyclass='is-open']").then((o) => {
          n("[zippyname=basketTab] coupon-form [zippyclass='is-open']").addEventListener("click", k);
        }), a("[zippyname=basketTab] coupon-form input").then((o) => {
          n("[zippyname=basketTab] coupon-form input").addEventListener("change", y);
        }), a("[zippyname=basketTab] coupon-form action.button").then((o) => {
          n("[zippyname=basketTab] coupon-form action.button").addEventListener("click", w);
        }), a("[zippyname=basketTab] coupon-form button").then((o) => {
          n("[zippyname=basketTab] coupon-form button").addEventListener("click", z);
        });
      }
      function A() {
        a('[zippyname="basketTab"] giftcards-form').then((o) => {
          n(`[zippyname="basketTab"] giftcards-form [zippyclass='is-open']`).addEventListener("click", _), a("[zippyname=basketTab] giftcards-form input").then((h) => {
            n("[zippyname=basketTab] giftcards-form input").addEventListener("change", x);
          }), a("[zippyname=basketTab] giftcards-form action.button").then((h) => {
            n("[zippyname=basketTab] giftcards-form action.button").addEventListener("click", C);
          }), a("[zippyname=basketTab] giftcards-form action.button-1").then((h) => {
            n("[zippyname=basketTab] giftcards-form action.button-1").addEventListener("click", E);
          });
        });
      }
      function b(o) {
        u("exp_cart_page_cart_link_referred", "Been referred by a friend?", "Click", "Bag summary");
      }
      function k(o) {
        o.currentTarget.classList.contains("is-open") ? u("exp_cart_page_cart_promocode_open", "Have you got a promo code", "Click", "Bag summary") : u("exp_cart_page_cart_promocode_close", "Have you got a promo code", "Click", "Bag summary");
      }
      function y(o) {
        u("exp_cart_page_cart_promocode_input", "Enter offer code", "Input", "Bag summary");
      }
      function w(o) {
        u("exp_cart_page_cart_promocode_apply", "Apply", "Click", "Bag summary");
      }
      function z(o) {
        u("exp_cart_page_cart_promocode_close", "Cancel", "Click", "Bag summary");
      }
      function _(o) {
        o.currentTarget.classList.contains("is-open") ? u("exp_cart_page_cart_giftcode_open", "Have you got a gift card", "Click", "Bag summary") : u("exp_cart_page_cart_giftcode_close", "Have you got a gift card", "Click", "Bag summary");
      }
      function x(o) {
        u("exp_cart_page_cart_giftcode_input", "Enter a gift card", "Input", "Bag summary");
      }
      function C(o) {
        u("exp_cart_page_cart_giftcode_apply", "Apply", "Click", "Bag summary");
      }
      function E(o) {
        u("exp_cart_page_cart_giftcode_check", "Check balance", "Click", "Bag summary");
      }
      function H() {
        n("#mmWrapper").removeEventListener("click", b);
      }
      function I() {
        a("coupon-form [zippyclass='is-open']").then((o) => {
          n("coupon-form [zippyclass='is-open']").removeEventListener("click", k);
        }), a("coupon-form input").then((o) => {
          const s = n("coupon-form input");
          s == null || s.removeEventListener("change", y);
        }), a("coupon-form action.button").then((o) => {
          n("coupon-form action.button").removeEventListener("click", w);
        }), a("coupon-form button").then((o) => {
          n("coupon-form button").removeEventListener("click", z);
        });
      }
      function W() {
        n("giftcards-form [zippyclass='is-open']").removeEventListener("click", _), n("giftcards-form input").removeEventListener("change", x), n("giftcards-form action.button").removeEventListener("click", C), n("giftcards-form action.button-1").removeEventListener("click", E);
      }
      function T(o) {
        o.contains(p) || (t === "coupon-form" ? o.insertAdjacentElement("afterend", p) : o.insertAdjacentElement("beforeend", p), o === m ? (t === "#mmWrapper" && l(), t === "coupon-form" && P(), t === "giftcards-form" && A()) : (t === "#mmWrapper" && H(), t === "coupon-form" && I(), t === "giftcards-form" && W()));
      }
      console.log("toggleElementBetweenContainers", t);
      const B = new IntersectionObserver((o) => {
        o.forEach((s) => {
          s.isIntersecting && (s.target === f ? (console.log("container1"), T(c)) : s.target === d && (console.log("container3"), T(m)));
        });
      });
      B.observe(f), B.observe(d);
    }
    observePageChange() {
      this.observerNew = new MutationObserver((e) => {
        e.forEach((r) => {
          window.location.pathname !== this.lastPath && (this.device === "mobile" ? setTimeout(() => {
            this.initAllFunc();
          }, 2800) : this.initAllFunc(), this.lastPath = window.location.pathname);
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
  new F();
  class j {
    constructor() {
      var t, e;
      this.observer = null, this.countryCode = (e = (t = window == null ? void 0 : window.autoInitData) == null ? void 0 : t.website) == null ? void 0 : e.websiteCode, this.basketButtonHandler = () => {
        const r = () => {
          this.country !== "other" && this.device === "desktop" && !location.href.includes("basket") && !location.href.includes("checkout") && this.waitForElementCustom('minibasket a[href*="/basket"]', (p) => {
            var d;
            const m = (
              /* HTML */
              `<a class="w-12 p-r-0 p-l-0 button" href="${this.country === "us" ? "/us/checkout" : "/checkout"}"
            ><span class="p1 col-w">Checkout securely</span></a
          >`
            );
            p.outerHTML = m, (d = n('minibasket a[href*="/checkout"]')) == null || d.addEventListener("click", (f) => {
              const l = document.querySelector('minibasket [aria-label="Close"]');
              localStorage.setItem("lastPdpHref", location.href), l && l.click();
            });
          });
        };
        r(), this.pageChangeHandler(r);
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
        const r = setInterval(function() {
          document.querySelectorAll("button").forEach((c) => {
            var m;
            if (c && ((m = c.textContent) != null && m.includes("Continue shopping"))) {
              const d = localStorage.getItem("lastPdpHref"), f = (
                /* HTML */
                ` <a class="w-12 button-1 m-b m-t-2" href="${d}"
              ><span class="button__body">Continue shopping</span></a
            >`
              );
              d && (c.outerHTML = f), clearInterval(r);
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
        const r = e.pushState, p = e.replaceState;
        e.pushState = function(c) {
          r.apply(e, arguments), t();
        }, e.replaceState = function(c) {
          p.apply(e, arguments), t();
        }, window.addEventListener("popstate", function(c) {
          t();
        });
      })(window.history);
    }
    waitForElementCustom(t, e) {
      this.observer && this.observer.disconnect(), this.observer = new MutationObserver((r, p) => {
        const c = document.querySelector(t);
        c && e(c);
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["href"]
      });
    }
  }
  new j();
})();
//# sourceMappingURL=index.js.map
