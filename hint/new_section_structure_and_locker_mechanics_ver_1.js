(function() {
  "use strict";
  const m = (n, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), console.dir(`Event: ${n} | ${e} | ${t} | ${i}`);
  }, g = ({ name: n, dev: e }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, x = (n) => document.querySelectorAll(n), a = (n) => document.querySelector(n), y = (n, e = "variant_1") => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", n, e), console.log("set", n, e));
    }, 1e3);
  }, u = (n, e, t, i, l = "Visibility", c = 600, r = 0.5) => {
    let s, _;
    if (s = new IntersectionObserver(
      function(p) {
        p[0].isIntersecting === !0 ? _ = setTimeout(() => {
          m(
            e,
            p[0].target.dataset.visible || i || "",
            l,
            t
          ), s.disconnect();
        }, c) : clearTimeout(_);
      },
      { threshold: [r] }
    ), typeof n == "string") {
      const p = document.querySelector(n);
      p && s.observe(p);
    } else
      s.observe(n);
  };
  function o(n) {
    return new Promise((e) => {
      if (document.querySelector(n))
        return e(document.querySelector(n));
      const t = new MutationObserver(() => {
        document.querySelector(n) && (e(document.querySelector(n)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(n) {
    n = n === void 0 ? {} : n;
    let e, t, i, l, c = (n == null ? void 0 : n.delay) || 50;
    function r() {
      e = null, l = 0;
    }
    return r(), function() {
      return t = window.scrollY, e != null && (l = t - e), e = t, clearTimeout(i), i = setTimeout(r, c), l;
    };
  })();
  const d = "https://conversionratestore.github.io/projects/hint/img/", h = {
    lockerIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
      <rect x="0.5" width="42" height="42" rx="4" fill="" />
      <path
        d="M16.3571 18.125V16.3438C16.3571 13.4121 18.6429 11 21.5 11C24.3214 11 26.6429 13.4121 26.6429 16.3438V18.125H27.2143C28.4643 18.125 29.5 19.2012 29.5 20.5V27.625C29.5 28.9609 28.4643 30 27.2143 30H15.7857C14.5 30 13.5 28.9609 13.5 27.625V20.5C13.5 19.2012 14.5 18.125 15.7857 18.125H16.3571ZM18.6429 18.125H24.3571V16.3438C24.3571 14.7109 23.0714 13.375 21.5 13.375C19.8929 13.375 18.6429 14.7109 18.6429 16.3438V18.125Z"
        fill="white"
      />
    </svg>
  `
    ),
    moneyBackGuaranteeIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
      <g clip-path="url(#clip0_4116_329)">
        <path
          d="M43.3079 11.2003C39.5569 7.32021 34.7022 4.85296 29.4335 4.10241L30.9352 2.60071C31.5302 2.00575 31.5302 1.04121 30.9352 0.446261C30.3404 -0.148591 29.3757 -0.148591 28.7808 0.446261L24.9227 4.30421C24.3278 4.89907 24.3278 5.86371 24.9227 6.45866L28.7807 10.3166C29.0782 10.6141 29.4681 10.7629 29.8579 10.7629C30.2477 10.7629 30.6377 10.6141 30.935 10.3166C31.53 9.72176 31.53 8.75712 30.935 8.16217L30.0723 7.29939C34.258 8.11849 38.0969 10.1938 41.1171 13.3179C44.9262 17.2581 47.024 22.4471 47.024 27.929C47.0242 39.5217 37.5927 48.9531 26 48.9531C14.4074 48.9531 4.97586 39.5217 4.97586 27.9291C4.97586 23.5055 6.33345 19.274 8.90196 15.6921C11.4172 12.1844 14.8845 9.56708 18.9294 8.12307C19.7218 7.84011 20.1348 6.9685 19.8519 6.17601C19.5691 5.38362 18.6973 4.97067 17.9049 5.25352C13.2733 6.90706 9.30395 9.90274 6.42577 13.9166C3.48391 18.0193 1.92899 22.8648 1.92899 27.9292C1.92899 34.3588 4.43281 40.4035 8.97925 44.9499C13.5257 49.4961 19.5704 52 26 52C32.4296 52 38.4743 49.4962 43.0208 44.9498C47.5672 40.4034 50.071 34.3587 50.071 27.9291C50.071 21.6527 47.6691 15.7116 43.3079 11.2003Z"
          fill="#04A777"
        />
        <path
          d="M10.3476 27.9291C10.3476 36.5598 17.3692 43.5814 26 43.5814C34.6307 43.5814 41.6523 36.5598 41.6523 27.9291C41.6523 19.2984 34.6307 12.2766 26 12.2766C17.3691 12.2766 10.3476 19.2983 10.3476 27.9291ZM26.9352 29.2851C24.7423 28.5099 23.4717 27.8989 22.5499 27.1758C21.4155 26.286 20.8962 24.7493 21.1946 23.1654C21.5184 21.4472 22.7166 20.0794 24.3218 19.5958C24.344 19.5891 24.3659 19.5837 24.388 19.5772V18.9638C24.388 18.1224 25.0701 17.4404 25.9114 17.4404C26.7528 17.4404 27.4349 18.1224 27.4349 18.9638V19.4802C28.4985 19.7294 29.241 20.2155 29.5411 20.4399C30.2149 20.9438 30.3529 21.8983 29.8491 22.5723C29.3453 23.2463 28.3909 23.384 27.7167 22.8803C27.3942 22.6392 26.5039 22.1205 25.2006 22.5131C24.4307 22.7451 24.2315 23.5028 24.1887 23.7296C24.1043 24.1775 24.2013 24.5991 24.4301 24.7784C25.2271 25.4034 26.6569 25.9552 27.9505 26.4124C30.3169 27.2489 31.6328 29.4411 31.2249 31.8673C31.0246 33.0585 30.4254 34.1638 29.5373 34.9798C28.9266 35.5408 28.215 35.9398 27.4349 36.1648V36.8942C27.4349 37.7356 26.7528 38.4177 25.9114 38.4177C25.0701 38.4177 24.388 37.7356 24.388 36.8942V36.3146C23.3745 36.1955 22.5288 35.8834 21.3914 35.1393C20.6873 34.6788 20.4899 33.7345 20.9505 33.0304C21.4111 32.3262 22.3554 32.1289 23.0595 32.5895C24.114 33.2794 24.5127 33.3428 25.9013 33.3332C27.2684 33.324 28.0616 32.305 28.2202 31.3621C28.2978 30.9016 28.3275 29.7773 26.9352 29.2851Z"
          fill="#04A777"
        />
      </g>
      <defs>
        <clipPath id="clip0_4116_329">
          <rect width="52" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `
    )
  }, f = (
    /* HTML */
    `
  <div class="palm_reading_is_ready">
    <h2 class="palm_reading_is_ready_title">Your Palm Reading <span>is Ready</span></h2>
    <div class="palm_reading_is_ready_img_wrapper">
      <img src="${d}palm_reading_is_ready.webp" alt="Palm" class="img_initial" />
      <img src="${d}children.webp" alt="Сhildren" class="img_first_absolute" data-tocheckout />
      <img src="${d}big_love_at.webp" alt="Big love at" class="img_second_absolute" data-tocheckout />
      <img src="${d}money_success_at.webp" alt="Money success at" class="img_third_absolute" data-tocheckout />
      <img src="${d}big_change_at.webp" alt="Big change at" class="img_fourth_absolute" data-tocheckout />
    </div>
  </div>
`
  ), b = (n) => (
    /* HTML */
    `
    <div class="locker_mechanics" data-tocheckout>
      <h2 class="locker_mechanics_title">Content</h2>
      <div>
        <ol>
          <li>${n}</li>
        </ol>
        <div class="is_locker">
          <ol>
            <li>We analyze your palm lines to get hin tsab out your future</li>
            <li>We analyze your palm lines to get hin tsab out your future</li>
            <li>We analyze your palm lines to get hin tsab out your future</li>
            <li>We analyze your palm lines to get hin tsab out your future</li>
          </ol>
          <div class="access_required_absolute">
            ${h.lockerIcon}
            <span>To read the full report, you need to get access</span>
          </div>
        </div>
      </div>
    </div>
  `
  ), w = (
    /* HTML */
    `
  <div class="money_back_guarantee">
    <div class="money_back_guarantee_container">
      <div class="money_back_guarantee_header">
        ${h.moneyBackGuaranteeIcon}
        <h3 class="money_back_guarantee_title">100% money-back guarantee</h3>
      </div>
      <div class="money_back_guarantee_description">
        We are convinced that this report will provide you with a deeper understanding of your partner and suggest ways
        to enhance your relationship. With a track record of stellar customer reviews, we are fully prepared to refund
        your money if you find that this report does not deliver any value.
      </div>
    </div>
  </div>
`
  ), k = `.crs_paywall main .mx-auto.pb-6 {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  max-width: 100%;
}
.crs_paywall main .mx-auto.pb-6 > div.mx-auto {
  width: 100%;
  margin: 0;
}
.crs_paywall main .mx-auto.pb-6 > div.mx-auto > .mr-auto,
.crs_paywall main .mx-auto.pb-6 > div.mx-auto > .aspect-square {
  display: none;
}
.crs_paywall .mx-auto > .flex.gap-4 {
  gap: 0;
}
.crs_paywall .mx-auto > .flex.gap-4 > ul.flex-col:last-child {
  padding: 0 16px;
}
.crs_paywall .mx-auto > .flex.gap-4 > div.w-full {
  padding: 0 16px;
  margin: 0 0 32px;
}
.crs_paywall footer + .bg-violet-50 {
  padding: 16px;
  background: white;
}

.palm_reading_is_ready {
  margin: 20px 0 16px;
  padding: 0 16px;
}
.palm_reading_is_ready_title {
  max-width: 294px;
  color: #121620;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  margin: 0 auto 16px;
}
.palm_reading_is_ready_title span {
  color: #8a2be2;
}
.palm_reading_is_ready_img_wrapper {
  position: relative;
  max-width: 343px;
  margin: 0 auto;
}
.palm_reading_is_ready_img_wrapper .img_initial {
  width: 100%;
  height: 100%;
}
.palm_reading_is_ready_img_wrapper img:not(.img_initial) {
  position: absolute;
  border-radius: 8px;
  opacity: 0;
}
.palm_reading_is_ready_img_wrapper .img_first_absolute {
  top: 7px;
  left: 0;
  max-width: 180px;
  transform: translateY(-20px) scale(0.9);
  animation: fadeInUp 1s forwards 0.5s;
}
.palm_reading_is_ready_img_wrapper .img_second_absolute {
  top: 68px;
  right: 0;
  max-width: 180px;
  transform: translateY(-20px) scale(0.9);
  animation: fadeInUp 1s forwards 1s;
}
.palm_reading_is_ready_img_wrapper .img_third_absolute {
  bottom: 60px;
  left: 0;
  max-width: 239px;
  transform: translateY(-20px) scale(0.9);
  animation: fadeInUp 1s forwards 1.5s;
}
.palm_reading_is_ready_img_wrapper .img_fourth_absolute {
  bottom: 4px;
  right: 0;
  max-width: 202px;
  transform: translateY(-20px) scale(0.9);
  animation: fadeInUp 1s forwards 2s;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.locker_mechanics {
  padding: 0 0;
  margin-bottom: 20px;
}
.locker_mechanics_title {
  color: #1d2939;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 12px;
  letter-spacing: normal;
  padding: 0 16px;
}
.locker_mechanics ol {
  list-style: auto;
  margin-left: 16px;
  padding: 0 16px;
}
.locker_mechanics ol li {
  max-width: 305px;
  color: #1d2939;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
}
@media (max-width: 376px) {
  .locker_mechanics ol li {
    max-width: 296px;
  }
}
.locker_mechanics .is_locker {
  position: relative;
  border: 2px dashed #dee5f9;
  margin: 12px 0 0;
  padding: 0 0px 7px;
}
.locker_mechanics .is_locker ol {
  filter: blur(4.5px);
}
.locker_mechanics .is_locker ol li {
  max-width: 100%;
}
.locker_mechanics .is_locker ol li + li {
  margin-top: 12px;
}
.locker_mechanics .is_locker .access_required_absolute {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 257px;
  width: 100%;
  border-radius: 14px;
  border: 2px solid #dee5f9;
  background: rgb(250, 245, 255);
  padding: 33px 24px 29px;
  margin: 0 auto;
}
.locker_mechanics .is_locker .access_required_absolute svg {
  position: absolute;
  top: -23px;
  left: 50%;
  transform: translateX(-50%);
  fill: #04a777;
}
.locker_mechanics .is_locker .access_required_absolute span {
  max-width: 192px;
  display: block;
  color: #121620;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: normal;
}

.money_back_guarantee {
  width: 100%;
  padding: 32px 16px;
  background: #f2f4f7;
  margin-bottom: 32px;
}
.money_back_guarantee_container {
  border-radius: 14px;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
  padding: 24px;
}
.money_back_guarantee_header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
}
.money_back_guarantee_header svg {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}
.money_back_guarantee_title {
  max-width: 158px;
  color: #11181c;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: normal;
  margin: 0;
}
.money_back_guarantee_description {
  color: #202b47;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: normal;
}
@media (max-width: 376px) {
  .money_back_guarantee_description {
    max-width: 273px;
  }
}/*# sourceMappingURL=main.css.map */`, v = window.innerWidth < 768 ? "mobile" : "desktop";
  class C {
    constructor(e) {
      this.device = e, this.lastPath = window.location.pathname, this.goal = null, this.init();
    }
    init() {
      g({ name: "Improvements on the paywall screen (new section structure + Locker mechanics)", dev: "SKh" }), y("exp_6", "variant_1"), this.observeMain(), this.allFunctionsInitHandler();
    }
    observeMain() {
      new MutationObserver((t) => {
        for (let i of t)
          window.location.pathname !== this.lastPath && (this.lastPath = window.location.pathname, this.allFunctionsInitHandler());
      }).observe(a("body"), { childList: !0, subtree: !0 });
    }
    loadFontsAndStyles() {
      a(".crs_inter") || document.head.insertAdjacentHTML(
        "afterbegin",
        '<link class="crs_inter" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), a(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${k}</style>`);
    }
    // allFunctions
    allFunctionsInitHandler() {
      var e, t, i;
      this.checkPage() === "paywall" ? (console.log("paywall"), this.loadFontsAndStyles(), this.addClassToBody(), this.renderPalmReadingIsReady(), this.renderLockerMechanics(), this.addClickForImgProceedToCheckout(), this.addClickForGetMyPrediction(), this.renderMoneyBackGuarantee(), this.visibleHandler()) : (console.log(this.checkPage()), this.removeClassFromBody(), (e = a(".palmReadingIsReady")) == null || e.remove(), (t = a(".locker_mechanics")) == null || t.remove(), (i = a("money_back_guarantee")) == null || i.remove());
    }
    checkPage() {
      const e = window.location.href;
      return e.includes("paywall") ? "paywall" : e.includes("subscription-plan") ? "subscriptionPlan" : e.includes("email") ? "email" : "other";
    }
    addClassToBody() {
      o("main .gap-3.flex.aspect-square").then((e) => {
        a("body").classList.add("crs_paywall");
      });
    }
    removeClassFromBody() {
      const e = a("body");
      e.classList.contains("crs_paywall") && e.classList.remove("crs_paywall");
    }
    renderPalmReadingIsReady() {
      o("main .mx-auto.pb-6 > div.mx-auto").then((e) => {
        const t = a("main .mx-auto.pb-6 > div.mx-auto");
        a(".palm_reading_is_ready") || t.insertAdjacentHTML("afterbegin", f);
      });
    }
    renderLockerMechanics() {
      o(".mx-auto > .flex.gap-4").then((e) => {
        const t = a(".mx-auto > .flex.gap-4"), i = this.getGoalHandler();
        a(".locker_mechanics") || t.insertAdjacentHTML("beforebegin", b(i));
      });
    }
    addClickForImgProceedToCheckout() {
      o(".mx-auto > .flex.gap-4 > div.w-full button").then((e) => {
        o("[data-tocheckout]").then((t) => {
          x("[data-tocheckout]").forEach((l) => {
            l.addEventListener("click", (c) => {
              var s;
              let r = c.currentTarget.getAttribute("alt");
              c.currentTarget && r ? m(`exp_6__${r.toLocaleLowerCase().split(" ").join("_")}`, r, "Click", "Palm hand with icons") : m(
                "exp_6__locker_mechanics",
                "Locker mechanics",
                "Click",
                "To read the full report, you need to get access"
              ), (s = a("footer + .bg-violet-50 button")) == null || s.click();
            });
          });
        });
      });
    }
    addClickForGetMyPrediction() {
      o(".mx-auto > .flex.gap-4 > div.w-full button").then((e) => {
        a(".mx-auto > .flex.gap-4 > div.w-full button").addEventListener("click", (i) => {
          m("exp_6__get_my_prediction", "Get My Prediction", "Click", "Content");
        });
      });
    }
    getGoalHandler() {
      const e = this.getParsedHintState();
      if (!e)
        return "";
      switch (e.wish) {
        case "1":
          this.goal = "Deep analysis of the relationships with your partner based on a unique birth chart";
          break;
        case "2":
          this.goal = "In-depth analysis of your health and vitality based on the unique patterns in your palm lines.";
          break;
        case "3":
          this.goal = "In-depth analysis of your career and destiny based on the unique patterns in your palm lines.";
          break;
        default:
          this.goal = "Deep analysis of the relationships with your partner based on a unique birth chart";
          break;
      }
      return this.goal;
    }
    getParsedHintState() {
      const e = localStorage.getItem("hint-state");
      if (e)
        try {
          return JSON.parse(e).state;
        } catch (t) {
          return console.error("Error parsing hint-state from localStorage", t), null;
        }
      return null;
    }
    renderMoneyBackGuarantee() {
      o("main .mx-auto > .flex.gap-4 > ul.flex").then((e) => {
        const t = a("main .mx-auto > .flex.gap-4 > ul.flex");
        a(".money_back_guarantee") || t.insertAdjacentHTML("beforebegin", w);
      });
    }
    visibleHandler() {
      o(".palm_reading_is_ready").then((e) => {
        u(".palm_reading_is_ready", "exp_6__view__hand", "Content", "Palm hand with icons", "View");
      }), o(".locker_mechanics").then((e) => {
        u(".locker_mechanics", "exp_6__view__content", "Content", "Content", "View");
      }), o(".money_back_guarantee").then((e) => {
        u(
          ".money_back_guarantee",
          "exp_6__view__money_back",
          "Content",
          "100% money-back guarantee",
          "View"
        );
      });
    }
  }
  o("body").then((n) => {
    new C(v);
  });
})();
//# sourceMappingURL=index.js.map
