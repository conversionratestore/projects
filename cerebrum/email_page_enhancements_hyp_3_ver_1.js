(function() {
  "use strict";
  const c = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (e) => document.querySelectorAll(e), n = (e) => document.querySelector(e);
  function o(e) {
    return new Promise((t) => {
      if (document.querySelector(e))
        return t(document.querySelector(e));
      const i = new MutationObserver(() => {
        document.querySelector(e) && (t(document.querySelector(e)), i.disconnect());
      });
      i.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(e) {
    e = e === void 0 ? {} : e;
    let t, i, l, a, g = (e == null ? void 0 : e.delay) || 50;
    function d() {
      t = null, a = 0;
    }
    return d(), function() {
      return i = window.scrollY, t != null && (a = i - t), t = i, clearTimeout(l), l = setTimeout(d, g), a;
    };
  })();
  const r = {
    safeAndSecureIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6.875 11.25V13.6875C6.8737 14.5866 7.18457 15.4582 7.75452 16.1536C8.32448 16.8489 9.11815 17.3248 10 17.5C10.8819 17.3248 11.6755 16.8489 12.2455 16.1536C12.8154 15.4582 13.1263 14.5866 13.125 13.6875V11.25L10 10L6.875 11.25ZM11.3813 12.6813C11.4398 12.7394 11.4863 12.8085 11.5181 12.8846C11.5498 12.9608 11.5661 13.0425 11.5661 13.125C11.5661 13.2075 11.5498 13.2892 11.5181 13.3654C11.4863 13.4415 11.4398 13.5106 11.3813 13.5687L10.1313 14.8187C10.0732 14.8773 10.004 14.9238 9.92786 14.9556C9.8517 14.9873 9.77001 15.0036 9.6875 15.0036C9.605 15.0036 9.52331 14.9873 9.44714 14.9556C9.37098 14.9238 9.30186 14.8773 9.24375 14.8187L8.61875 14.1937C8.56048 14.1355 8.51425 14.0663 8.48272 13.9902C8.45118 13.914 8.43495 13.8324 8.43495 13.75C8.43495 13.6676 8.45118 13.586 8.48272 13.5098C8.51425 13.4337 8.56048 13.3645 8.61875 13.3063C8.73644 13.1886 8.89607 13.1224 9.0625 13.1224C9.14492 13.1224 9.22652 13.1387 9.30266 13.1702C9.3788 13.2018 9.44798 13.248 9.50625 13.3063L9.6875 13.4938L10.4938 12.6813C10.5519 12.6227 10.621 12.5762 10.6971 12.5444C10.7733 12.5127 10.855 12.4964 10.9375 12.4964C11.02 12.4964 11.1017 12.5127 11.1779 12.5444C11.254 12.5762 11.3232 12.6227 11.3813 12.6813Z"
        fill="#0D766E"
      />
      <path
        d="M15.3125 7.5H15C15 6.17392 14.4732 4.90215 13.5355 3.96447C12.5979 3.02678 11.3261 2.5 10 2.5C8.67392 2.5 7.40215 3.02678 6.46447 3.96447C5.52678 4.90215 5 6.17392 5 7.5H4.6875C3.77582 7.5 2.90148 7.86216 2.25682 8.50682C1.61216 9.15148 1.25 10.0258 1.25 10.9375C1.25 11.8492 1.61216 12.7235 2.25682 13.3682C2.90148 14.0128 3.77582 14.375 4.6875 14.375H5.675C5.64254 14.1473 5.62583 13.9175 5.625 13.6875V11.25C5.62476 10.9997 5.69969 10.755 5.8401 10.5477C5.98051 10.3405 6.17992 10.1801 6.4125 10.0875L9.5375 8.8375C9.83449 8.71922 10.1655 8.71922 10.4625 8.8375L13.5875 10.0875C13.8201 10.1801 14.0195 10.3405 14.1599 10.5477C14.3003 10.755 14.3752 10.9997 14.375 11.25V13.6875C14.3742 13.9175 14.3575 14.1473 14.325 14.375H15.3125C16.2242 14.375 17.0985 14.0128 17.7432 13.3682C18.3878 12.7235 18.75 11.8492 18.75 10.9375C18.75 10.0258 18.3878 9.15148 17.7432 8.50682C17.0985 7.86216 16.2242 7.5 15.3125 7.5Z"
        fill="#0D766E"
      />
    </svg>
  `
    ),
    continueIcon: (
      /* HTML */
      `
    <svg
      class="continue_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
    >
      <g clip-path="url(#clip0_72_921)">
        <path
          d="M10.0538 12.6461C9.84831 12.4406 9.74969 12.1923 9.75791 11.9013C9.76612 11.6102 9.8733 11.3619 10.0794 11.1565L12.9815 8.25441H1.52729C1.23623 8.25441 0.992074 8.15579 0.794835 7.95855C0.597596 7.76131 0.499319 7.5175 0.500004 7.22712C0.500004 6.93606 0.598623 6.6919 0.795862 6.49466C0.993101 6.29743 1.23691 6.19915 1.52729 6.19983H12.9815L10.0538 3.27207C9.84831 3.06661 9.74558 2.82246 9.74558 2.53961C9.74558 2.25677 9.84831 2.01296 10.0538 1.80819C10.2592 1.60273 10.5034 1.5 10.7862 1.5C11.0691 1.5 11.3129 1.60273 11.5176 1.80819L16.2175 6.50802C16.3202 6.61075 16.3931 6.72204 16.4363 6.84189C16.4794 6.96174 16.5007 7.09015 16.5 7.22712C16.5 7.36409 16.4784 7.4925 16.4353 7.61235C16.3921 7.7322 16.3195 7.84349 16.2175 7.94622L11.492 12.6717C11.3036 12.8601 11.0684 12.9542 10.7862 12.9542C10.5041 12.9542 10.2599 12.8515 10.0538 12.6461Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_72_921">
          <rect width="18" height="13" fill="white" transform="translate(0.5 0.5)" />
        </clipPath>
      </defs>
    </svg>
  `
    )
  }, m = (
    /* HTML */
    `
  <div class="title_block">
    <h2>Find your <span class="accent_color_green">IQ Test</span> Insights right in your inbox</h2>
    <p>Create an account to save and access your results</p>
  </div>
`
  ), f = (
    /* HTML */
    ' <p class="new_label_txt">Enter your email</p> '
  ), u = (
    /* HTML */
    `
  <div class="safe_and_secure_block">
    ${r.safeAndSecureIcon}
    <p>Your data is safe and secure. No ads or spam</p>
  </div>
`
  ), h = (
    /* HTML */
    `
  <div class="terms_conditions_block">
    <p>
      By continuing you agree to CerebrumIQ’s
      <a href="/terms" class="terms">Terms & Conditions</a> and <a href="/terms" class="privacy">Privacy Policy</a>.
    </p>
  </div>
`
  ), s = `body.crs_dev main > div > div.gap-1,
body.crs_dev main p.text-default-600 {
  display: none !important;
}
body.crs_dev > div > div {
  height: 100vh;
}
body.crs_dev nav {
  border-bottom: 1px solid #d2d1d6 !important;
  background: #fff !important;
  -webkit-backdrop-filter: blur(8px) !important;
          backdrop-filter: blur(8px) !important;
  padding: 0 24px !important;
}
body.crs_dev nav header {
  padding: 0 !important;
}
body.crs_dev nav + div {
  height: 100%;
}
body.crs_dev main {
  padding: 24px 20px 20px !important;
  height: 100%;
}
body.crs_dev main > div {
  padding: 0 !important;
  height: 100%;
  display: flex;
  flex-direction: column;
}
body.crs_dev main .group[data-focus=true] [data-slot=input-wrapper] {
  background: #fff !important;
}
body.crs_dev main [data-slot=input-wrapper] {
  position: relative;
  border-radius: 8px;
  border: 1px solid #dee8f7;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.02), 0px 2px 10px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
  padding: 12px 20px 12px 46px;
}
body.crs_dev main [data-slot=input-wrapper]::before {
  position: absolute;
  content: "";
  width: 18px;
  height: 14px;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  background: url("https://conversionratestore.github.io/projects/cerebrum/img/email_icon.svg") no-repeat;
}
body.crs_dev main [data-slot=input-wrapper] label {
  display: none !important;
}
body.crs_dev main [data-slot=input-wrapper] [data-slot=inner-wrapper] {
  display: flex;
  align-items: center;
}
body.crs_dev main [data-slot=input-wrapper] input {
  height: 100%;
  width: 100%;
  color: #11181c !important;
  font-family: "Inter", sans-serif;
  font-size: 14px !important;
  font-weight: 400;
  line-height: 100%;
}
body.crs_dev main [data-slot=input-wrapper] input::-moz-placeholder {
  color: #bababb;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
}
body.crs_dev main [data-slot=input-wrapper] input::placeholder {
  color: #bababb;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
}
body.crs_dev main > div > .w-full {
  margin: 0;
}
body.crs_dev main > div > .mx-auto {
  margin: auto 0 0;
  padding: 0 20px;
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
}
body.crs_dev main > div > .mx-auto button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  height: 56px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 8px;
  background: #0d766e;
}
body.crs_dev main > div > .mx-auto button > div {
  display: none !important;
}
body.crs_dev main > div > .mx-auto button > svg {
  width: 18px;
  height: 13px;
}
.title_block h2 {
  color: #11181c;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  max-width: 350px;
}
.title_block h2 .accent_color_green {
  color: #0d766e;
}
.title_block p {
  max-width: 300px;
  color: #52525b;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 16px 0 32px;
}
.title_block ul {
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px dashed #dee8f7;
}
.title_block ul li {
  max-width: 319px;
  position: relative;
  padding-left: 16px;
}
.title_block ul li:before {
  content: "";
  position: absolute;
  top: 9px;
  left: 0;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #0d766e;
}
.title_block ul li + li {
  margin-top: 8px;
}
.title_block ul li p {
  max-width: 100%;
  margin: 0;
}

.new_label_txt {
  color: #52525b;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 8px;
}

.safe_and_secure_block {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  margin-top: 8px;
}
.safe_and_secure_block p {
  color: #52525b;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
}

.terms_conditions_block {
  max-width: 265px;
  margin: 12px auto 0;
}
.terms_conditions_block p {
  color: #505051;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.01px;
  margin: 0;
}
.terms_conditions_block p a {
  color: #00f;
}/*# sourceMappingURL=main.css.map */`, b = window.innerWidth < 768 ? "mobile" : "desktop";
  class x {
    constructor(t) {
      this.device = t, this.init();
    }
    init() {
      c({ name: "Email page enhancements", dev: "SKh" }), n("body").classList.contains("crs_dev") || n("body").classList.add("crs_dev"), n(".crs_style") || (document.head.insertAdjacentHTML(
        "afterbegin",
        '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
      ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${s}</style>`)), this.renderTitleBlock(), this.changeInputHandler(), this.renderNewLabelForInput(), this.renderSafeAndSecureBlock(), this.renderTermsConditionsBlock(), this.renderContinueIcon(), this.observeEmailPage();
    }
    renderTitleBlock() {
      o("main > div > div.gap-1").then(() => {
        n(".title_block") || (n("main > div").insertAdjacentHTML("afterbegin", m), n("body").classList.add("ver_c"));
      });
    }
    changeInputHandler() {
      o('[data-slot="input-wrapper"]').then(() => {
        n('[data-slot="input-wrapper"] input').placeholder !== "example@mail.com" && (n('[data-slot="input-wrapper"] input').placeholder = "example@mail.com");
      });
    }
    renderNewLabelForInput() {
      o('[data-slot="input-wrapper"]').then(() => {
        n(".new_label_txt") || n('[data-slot="input-wrapper"]').insertAdjacentHTML("beforebegin", f);
      });
    }
    renderSafeAndSecureBlock() {
      o("body main > div > .w-full").then(() => {
        n(".safe_and_secure_block") || n("body main > div > .w-full").insertAdjacentHTML("afterend", u);
      });
    }
    renderTermsConditionsBlock() {
      o("main > div > .mx-auto").then(() => {
        n(".terms_conditions_block") || n("main > div > .mx-auto").insertAdjacentHTML("beforeend", h), this.clickLinkTermsHandler();
      });
    }
    renderContinueIcon() {
      o("main > div > .mx-auto button").then(() => {
        n(".continue_icon") || n("main > div > .mx-auto button").insertAdjacentHTML("beforeend", `${r.continueIcon}`);
      });
    }
    clickLinkTermsHandler() {
      o(".terms_conditions_block").then(() => {
        p(".terms_conditions_block a").forEach((t) => {
          t.addEventListener("click", (i) => {
            i.preventDefault(), t.classList.contains("terms") && n("main p.text-default-600 a:nth-child(1)").click(), t.classList.contains("privacy") && n("main p.text-default-600 a:nth-child(2)").click(), console.log("Link clicked");
          });
        });
      });
    }
    observeEmailPage() {
      new MutationObserver(() => {
        location.pathname.match("/email") ? (n("body").classList.contains("crs_dev") || n("body").classList.add("crs_dev"), n(".crs_style") || (document.head.insertAdjacentHTML(
          "afterbegin",
          '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">'
        ), document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${s}</style>`)), n(".title_block") || this.renderTitleBlock(), n(".new_label_txt") || this.renderNewLabelForInput(), n(".safe_and_secure_block") || this.renderSafeAndSecureBlock(), n(".terms_conditions_block") || this.renderTermsConditionsBlock(), n(".continue_icon") || this.renderContinueIcon(), n('[data-slot="input-wrapper"] input').placeholder !== "example@mail.com" && this.changeInputHandler()) : n("body").classList.contains("crs_dev") && n("body").classList.remove("crs_dev");
      }).observe(n("body"), { childList: !0, subtree: !0 });
    }
  }
  new x(b);
})();
//# sourceMappingURL=index.js.map
