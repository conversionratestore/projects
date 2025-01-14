(function() {
  "use strict";
  const m = (a, n, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: t,
      event_loc: i
    }), c(`Event: ${a} | ${n} | ${t} | ${i}`, "success");
  }, o = (a) => new Promise((n) => {
    const t = document.querySelector(a);
    t && n(t);
    const i = new MutationObserver(() => {
      const p = document.querySelector(a);
      p && (n(p), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class x {
    constructor(n) {
      this.elements = typeof n == "string" ? document.querySelectorAll(n) : n instanceof Element ? [n] : n;
    }
    on(n, t, i) {
      return typeof t == "function" && (i = t, t = ""), this.elements.forEach(function(p) {
        p.addEventListener(n, function(s) {
          var l;
          if (t !== "") {
            let _ = (l = s.target) == null ? void 0 : l.closest(t);
            _ && (i == null || i.call(_, s));
          } else
            i == null || i.call(p, s);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(n);
      }), this;
    }
    each(n) {
      return this.elements.forEach((t, i) => {
        n(t, i);
      }), this;
    }
    style(n, t) {
      const i = n.split("-").map((p, s) => s === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)).join("");
      return this.elements.forEach(function(p) {
        p.style[i] = t;
      }), this;
    }
  }
  const e = (a) => new x(a), c = (a, n = "info") => {
    let t;
    switch (n) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${a}`, `${t} font-size: 16px; font-weight: 600`);
  }, w = `.crs_block {
  display: none;
}

.crs_price_block {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
  border-radius: 12px;
  background: #dbfae8;
}
@media (max-width: 768px) {
  .crs_price_block {
    width: calc(100% - 36px);
    margin: 0 auto;
    align-items: center;
  }
}
.crs_price_block p {
  margin: 0;
  font-size: 18px;
  line-height: 1;
}
.crs_price_block p:first-of-type {
  color: #007922;
  font-weight: 600;
}
.crs_price_block p:nth-child(2) {
  padding-top: 4px;
  font-size: 16px;
}

.sfc-pricingTable__col:nth-child(1) .sfc-price__amt {
  color: #000 !important;
}

.sfc-pricingTableLevel {
  height: 318px;
}
@media (max-width: 768px) {
  .sfc-pricingTableLevel {
    height: auto;
  }
}

.sfc-pricingTable__col:nth-child(2) .sfc-pricingTableLevel {
  height: 349px;
}
@media (max-width: 768px) {
  .sfc-pricingTable__col:nth-child(2) .sfc-pricingTableLevel {
    height: auto;
  }
}

.sfc-pricingTableLevel__primary {
  height: auto !important;
}
@media (max-width: 768px) {
  .sfc-pricingTableLevel__primary {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}

@media (max-width: 768px) {
  .sfc-pricingTableLevelAnnual__duration--mobile,
  .sfc-pricingTableLevelMonthly__duration--mobile,
  .sfc-registrationProgress__progressFraction,
  .sfc-registrationProgress__back--hide,
  .sfc-pricingTableLevelAnnual__primaryFooter {
    display: none;
  }
  .sfc-pricingTableLevel__levelHeader {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .sfc-pricingTableLevelAnnual__duration--desktop,
  .sfc-pricingTableLevelMonthly__duration--desktop {
    display: block;
    color: #272727 !important;
    font-size: 16px;
  }
  .sfc-pricingTableLevel__derisk {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    margin-top: 16px;
    gap: 40px;
  }
}
.sfc-pricingTable__col:not(:nth-child(1)) [data-sfc-id=button],
.sfc-pricingTablePremium__col [data-sfc-id=button] {
  padding: 0.35em 55px;
  margin-top: 24px;
  margin-bottom: 0;
}

.sfc-pricingTablePremium__col:nth-child(2) .sfc-pricingTableLevel {
  height: 349px;
}
@media (max-width: 768px) {
  .sfc-pricingTablePremium__col:nth-child(2) .sfc-pricingTableLevel {
    height: auto;
  }
}

.popup_wrapper {
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: none;
  justify-content: center;
  align-items: center;
}
.popup_wrapper.active {
  display: flex;
}
@media (max-width: 768px) {
  .popup_wrapper.active {
    display: block;
  }
}
@media (max-width: 768px) {
  .popup_wrapper {
    overflow: auto;
    height: 100vh;
  }
}

.trial_popup {
  display: flex;
  align-items: stretch;
  height: 670px;
  gap: 88px;
}
@media (max-width: 768px) {
  .trial_popup {
    flex-direction: column;
    height: auto;
    gap: 24px;
  }
}
.trial_popup > div {
  max-width: 550px;
  width: calc(50% - 44px);
}
@media (max-width: 768px) {
  .trial_popup > div {
    width: 100%;
    max-width: unset;
    padding: 0 18px;
  }
}
.trial_popup * {
  font-family: "Manrope", sans-serif;
  box-sizing: border-box;
}
.trial_popup ul {
  padding: 0;
}
.trial_popup li {
  list-style: none;
}
.trial_popup .step1,
.trial_popup .step2 {
  display: none;
}
.trial_popup .step1 h2,
.trial_popup .step2 h2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 12px;
}
.trial_popup .step1 h2 + p,
.trial_popup .step2 h2 + p {
  font-size: 16px;
  color: #555;
  font-weight: 500;
}
@media (max-width: 768px) {
  .trial_popup .step1 h2 + p,
  .trial_popup .step2 h2 + p {
    margin-top: 12px;
  }
}
.trial_popup .step1 ul,
.trial_popup .step2 ul {
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (max-width: 768px) {
  .trial_popup .step1 ul,
  .trial_popup .step2 ul {
    margin: 20px 0;
  }
}
.trial_popup .step1 ul li,
.trial_popup .step2 ul li {
  display: flex;
  gap: 13px;
  align-items: flex-start;
  font-size: 16px;
}
@media (max-width: 768px) {
  .trial_popup .step1 ul li > span,
  .trial_popup .step2 ul li > span {
    position: relative;
    top: 5px;
  }
}
.trial_popup .step1.active,
.trial_popup .step2.active {
  display: block;
}
.trial_popup .step1 button,
.trial_popup .step1 a,
.trial_popup .step2 button,
.trial_popup .step2 a {
  display: flex !important;
  justify-content: center !important;
  width: 100% !important;
  border-radius: 40px !important;
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 1 !important;
  padding: 12px !important;
}
.trial_popup .step1 button + p,
.trial_popup .step1 a + p,
.trial_popup .step2 button + p,
.trial_popup .step2 a + p {
  width: 100%;
  max-width: unset;
  line-height: 24px !important;
  font-size: 14px !important;
  text-align: center;
}
.trial_popup .step1 button + p b,
.trial_popup .step1 a + p b,
.trial_popup .step2 button + p b,
.trial_popup .step2 a + p b {
  display: flex;
  justify-content: center;
  gap: 6px;
  color: #007db8;
  font-weight: 700;
}
.trial_popup .step1 .select_plan,
.trial_popup .step2 .select_plan {
  display: flex;
  margin-top: 24px;
  margin-bottom: 12px;
  padding-bottom: 70px;
  border-bottom: 1px solid #ececec;
}
@media (max-width: 768px) {
  .trial_popup .step1 .select_plan,
  .trial_popup .step2 .select_plan {
    flex-direction: column;
    padding-bottom: 20px;
    gap: 24px;
  }
}
.trial_popup .step1 .select_plan label,
.trial_popup .step2 .select_plan label {
  width: 50%;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .trial_popup .step1 .select_plan label,
  .trial_popup .step2 .select_plan label {
    width: 100%;
  }
}
.trial_popup .step1 .select_plan label > span,
.trial_popup .step2 .select_plan label > span {
  display: block;
  width: 22px;
  height: 22px;
  border: 1px solid #c7c7c7;
  border-radius: 50%;
}
.trial_popup .step1 .select_plan label input,
.trial_popup .step2 .select_plan label input {
  display: none;
}
.trial_popup .step1 .select_plan label input:checked + span,
.trial_popup .step2 .select_plan label input:checked + span {
  border: 6px solid #007db8;
  background: #fff;
}
.trial_popup .step1 .select_plan label .plan_block p,
.trial_popup .step2 .select_plan label .plan_block p {
  margin: 3px 0;
  font-size: 16px;
  line-height: 1;
}
.trial_popup .step1 .select_plan label .plan_block p:first-of-type,
.trial_popup .step2 .select_plan label .plan_block p:first-of-type {
  font-weight: 700;
  margin-bottom: 8px;
}
.trial_popup .step1 .select_plan label .plan_block p span,
.trial_popup .step2 .select_plan label .plan_block p span {
  display: inline-flex;
  align-items: center;
  padding: 6px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  background: #e9f6fc;
  color: #007db8;
  margin-left: 12px;
}
.trial_popup .steps_wrapper {
  display: flex;
  gap: 16px;
  margin-bottom: 55px;
}
@media (max-width: 768px) {
  .trial_popup .steps_wrapper {
    padding: 20px 0;
    margin-bottom: 12px;
  }
}
.trial_popup .steps_wrapper .back,
.trial_popup .steps_wrapper .skip {
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #007db8;
  display: flex;
  gap: 10px;
  align-items: center;
}
.trial_popup .steps_wrapper .back.hide {
  display: none;
}
.trial_popup .steps_wrapper .step_block {
  width: 100%;
  display: flex;
  gap: 6px;
  align-items: center;
}
.trial_popup .steps_wrapper .step_block span {
  display: block;
  width: calc((100% - 12px) / 3);
  height: 8px;
  background: #e6eff3;
  border-radius: 10px;
}
.trial_popup .steps_wrapper .step_block span.active {
  background: #007db8;
}
.trial_popup .total_now,
.trial_popup .total_after {
  display: flex;
  justify-content: space-between;
}
.trial_popup .right_part {
  border-radius: 36px 36px 36px 160px;
  background: #e6eff3;
  overflow: hidden;
  padding: 75px 112px 0 68px;
  position: relative;
}
@media (max-width: 768px) {
  .trial_popup .right_part {
    padding: 24px 12px 300px;
    border-radius: 0;
  }
}
.trial_popup .right_part > * {
  position: relative;
  z-index: 3;
}
.trial_popup .right_part::before {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("https://conversionratestore.github.io/projects/doyogawithme/img/woman.png") right bottom no-repeat;
  background-size: auto 100%;
  z-index: 2;
}
@media (max-width: 768px) {
  .trial_popup .right_part::before {
    background: url("https://conversionratestore.github.io/projects/doyogawithme/img/woman_mob.png") center bottom no-repeat;
    background-size: 100% auto;
  }
}
.trial_popup .right_part::after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("https://conversionratestore.github.io/projects/doyogawithme/img/vector.svg") right bottom no-repeat;
  background-size: auto 100%;
  z-index: 1;
}
@media (max-width: 768px) {
  .trial_popup .right_part::after {
    background: url("https://conversionratestore.github.io/projects/doyogawithme/img/vector_mob.svg") right bottom no-repeat;
    background-size: auto 100%;
  }
}
.trial_popup .right_part .logo {
  display: flex;
  justify-content: center;
}
.trial_popup .right_part h3 {
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  text-transform: capitalize;
  margin: 30px 0;
}
@media (max-width: 768px) {
  .trial_popup .right_part h3 {
    font-size: 25px;
    margin: 20px 0;
  }
}
.trial_popup .right_part ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.trial_popup .right_part li {
  display: flex;
  gap: 20px;
}
@media (max-width: 768px) {
  .trial_popup .right_part li {
    gap: 16px;
  }
}
.trial_popup .right_part li > span {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #a8ccdc;
  background: #dfebef;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  position: relative;
}
.trial_popup .right_part li p {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #555;
  margin: 0;
  text-transform: capitalize;
}
.trial_popup .right_part li p b {
  font-weight: 700;
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}
.trial_popup .right_part li p span {
  font-weight: 700;
  color: #007db8;
}
.trial_popup .right_part li:first-of-type > span {
  border: 1px solid #e6eff3;
  background: #c8dee8;
}
.trial_popup .right_part li:first-of-type > span::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #c8dee8;
}
.trial_popup .right_part li:not(:last-child) > span::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 200%;
  background: #a8ccdc;
  top: 100%;
  left: 50%;
}

.checkout_steps_wrapper {
  width: 45%;
  display: flex;
  gap: 6px;
  align-items: center;
  margin-right: auto;
  margin-left: 16px;
}
@media (max-width: 768px) {
  .checkout_steps_wrapper {
    width: 100%;
  }
}
.checkout_steps_wrapper span {
  display: block;
  width: calc((100% - 12px) / 3);
  height: 8px;
  background: #007db8;
  border-radius: 10px;
}

@media (max-width: 768px) {
  #block-registrationprogressblock {
    margin-bottom: 0;
  }
}
.trial_works {
  padding: 24px 40px;
  border-radius: 8px;
  border: 1px dashed #d6d6d6;
  margin-top: 30px;
}
@media (max-width: 768px) {
  .trial_works {
    margin-top: 0;
  }
}
.trial_works h3 {
  font-size: 25px;
  font-weight: 600;
  line-height: 1;
  text-transform: capitalize;
  margin: 0 0 20px;
}
.trial_works ul {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
  padding: 0;
}
.trial_works li {
  display: flex;
  gap: 20px;
}
@media (max-width: 768px) {
  .trial_works li {
    gap: 16px;
  }
}
.trial_works li > span {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #a8ccdc;
  background: #f5f5f5;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  position: relative;
}
.trial_works li p {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #555;
  margin: 0;
  text-transform: capitalize;
}
.trial_works li p b {
  font-weight: 700;
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
}
.trial_works li p span {
  font-weight: 700;
  color: #007db8;
}
.trial_works li:not(:last-child) > span::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 200%;
  background: #a8ccdc;
  top: 100%;
  left: 50%;
}

.trial_video {
  color: #007922;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 700;
}/*# sourceMappingURL=style.css.map */`, y = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path d="M-0.000556731 6.00002C-0.000556725 5.86052 0.0527608 5.72089 0.159261 5.61439L5.6138 0.159852C5.82693 -0.053284 6.17207 -0.053284 6.38507 0.159852C6.59807 0.372988 6.59821 0.718124 6.38507 0.931123L1.31617 6.00002L6.38507 11.0689C6.59821 11.2821 6.59821 11.6272 6.38507 11.8402C6.17193 12.0532 5.8268 12.0533 5.6138 11.8402L0.15926 6.38566C0.0527608 6.27916 -0.000556737 6.13952 -0.000556731 6.00002Z" fill="#007DB8"/>
</svg>`, v = `<svg xmlns="http://www.w3.org/2000/svg" width="181" height="28" viewBox="0 0 181 28" fill="none">
<path d="M12.3933 0.0955925C10.4255 0.400814 7.80712 1.6217 5.96632 3.08676C4.87135 3.95664 4.63332 4.18555 3.68117 5.33013C1.47538 7.93977 0.174113 12.2739 0.57084 15.6008C0.90409 18.5157 2.17361 21.6137 3.63357 23.1398C4.9983 24.5438 7.14062 24.849 11.0761 24.1928C13.8374 23.735 16.2336 23.735 19.4391 24.1928C22.5019 24.6354 23.9618 24.5896 25.2313 23.9944C26.0407 23.6129 27.3895 22.4835 27.3895 22.1783C27.3895 22.102 27.5323 21.8426 27.7069 21.5984C28.2147 20.9269 28.9606 19.0803 29.3256 17.5695C30.1507 14.2426 29.4842 9.69479 27.7863 7.10041C27.5641 6.77993 27.3895 6.47471 27.3895 6.42893C27.3895 6.26105 26.3898 5.07069 25.4852 4.17029C23.7873 2.44579 21.8036 1.27069 19.1376 0.400814C18.2807 0.110853 17.6935 0.0498085 15.6464 0.00402641C14.2976 -0.0112343 12.8376 0.0192871 12.3933 0.0955925ZM16.1701 0.873905C17.3286 1.17913 18.9789 3.0715 18.9789 4.09399C18.9789 4.33816 19.0583 4.5213 19.1535 4.5213C19.455 4.5213 21.2323 5.33013 22.0734 5.83375C25.4694 7.92451 27.6276 12.2281 27.3419 16.2876C27.2308 17.6305 26.4056 20.5454 26.12 20.5454C26.0565 20.5454 25.7868 20.3317 25.5328 20.0876C25.2948 19.8281 24.8505 19.5534 24.5807 19.4619C24.0094 19.2787 23.9459 19.1566 24.2951 18.8667C24.5966 18.6225 24.5966 18.1952 24.2951 17.89C24.1046 17.7068 23.7873 17.6763 22.7082 17.7526L21.3593 17.8442L20.8039 17.2795C20.1056 16.5623 19.7724 15.494 19.7724 13.9221C19.7565 11.4651 19.2487 9.5727 18.4711 9.11487C18.2648 8.99278 17.6777 8.77913 17.154 8.64178C15.9956 8.35182 15.8686 8.03134 16.551 7.17672C16.9636 6.65784 16.9953 6.47471 17.0429 5.147C17.0905 3.48355 16.8683 2.93415 15.9321 2.38475C13.4406 0.93495 11.6157 5.2233 13.7739 7.45142C14.3928 8.09238 14.2341 8.33656 12.9963 8.65704C11.6474 9.00804 11.4411 9.16065 11.0285 9.96949C10.7588 10.5189 10.6318 11.1904 10.4731 12.8996C10.0764 17.0811 9.52098 17.89 7.09302 17.7831C5.91871 17.7221 5.90284 17.7221 5.74415 18.1341C5.6172 18.4546 5.64893 18.6225 5.85523 18.8362C6.22022 19.2329 6.20435 19.2787 5.55372 19.4771C5.17286 19.5992 4.91896 19.8129 4.7444 20.1791C4.60158 20.4691 4.39528 20.698 4.2842 20.698C4.0779 20.698 3.57009 19.4466 3.17336 17.951C2.76077 16.3639 2.91946 13.5406 3.53835 11.7703C4.68092 8.50443 6.9502 6.1237 10.1557 4.81125C11.0761 4.42973 11.1079 4.39921 11.2824 3.65142C11.5681 2.46105 12.7583 1.17913 13.8691 0.858644C14.488 0.675512 15.4719 0.675512 16.1701 0.873905Z" fill="#272727"/>
<path d="M114.542 5.84929C114.447 6.09347 114.273 6.58182 114.146 6.96335C114.003 7.34487 113.606 8.44367 113.241 9.40512C112.876 10.3666 112.527 11.3585 112.448 11.618C112.384 11.8621 111.987 12.9609 111.591 14.0445C111.194 15.128 110.861 16.0437 110.861 16.0742C110.861 16.1047 110.797 16.12 110.734 16.12C110.591 16.12 109.702 13.1441 108.242 7.7264C108.004 6.84126 107.766 6.01716 107.687 5.89508C107.56 5.62038 105.989 5.48303 105.735 5.7272C105.56 5.89508 105.751 6.79548 106.417 8.94728C106.671 9.74086 107.084 11.1296 107.354 12.0453C107.623 12.9457 108.052 14.4107 108.322 15.3264C108.877 17.1577 109.464 19.1722 109.782 20.3168C109.94 20.8814 110.083 21.0951 110.321 21.1256C110.781 21.1866 110.94 20.9577 111.48 19.4011C111.733 18.638 112.241 17.234 112.606 16.2726C112.955 15.3111 113.431 14.0292 113.638 13.4493C114.717 10.4429 114.923 9.95451 115.066 9.90873C115.225 9.86295 115.494 10.4886 116.653 13.6019C116.97 14.4413 117.446 15.7079 117.716 16.4252C118.224 17.7834 118.779 19.279 119.144 20.3015C119.398 21.0035 119.779 21.2935 120.112 21.034C120.223 20.9425 120.461 20.4236 120.604 19.9047C121.001 18.5617 122.017 15.128 123.239 11.0075C123.524 10.0766 123.953 8.67259 124.207 7.86375C124.46 7.05491 124.667 6.21556 124.667 5.98664C124.667 5.60512 124.635 5.58985 123.715 5.58985C122.985 5.58985 122.747 5.6509 122.636 5.84929C122.493 6.12399 122.255 6.94809 121.318 10.3971C121.049 11.4043 120.636 12.8389 120.414 13.6019C120.192 14.3497 119.97 15.2043 119.922 15.4943C119.763 16.3184 119.509 16.2115 119.144 15.1738C118.954 14.6397 118.51 13.4188 118.145 12.4573C117.78 11.4959 117.399 10.3971 117.288 10.0156C117.161 9.63403 116.891 8.9015 116.669 8.38263C116.447 7.84849 116.256 7.34487 116.256 7.23805C116.256 7.13122 116.097 6.68865 115.907 6.24608C115.606 5.55933 115.494 5.43724 115.129 5.43724C114.812 5.43724 114.669 5.54407 114.542 5.84929Z" fill="#272727"/>
<path d="M154.803 5.84844C154.724 6.07736 154.613 6.56571 154.565 6.94724C154.518 7.32876 154.312 8.50387 154.105 9.55688C153.899 10.6099 153.518 12.5633 153.248 13.9063C152.994 15.2492 152.598 17.279 152.375 18.4083C152.137 19.5376 151.963 20.5601 151.963 20.6517C151.963 20.9416 153.962 20.9264 154.073 20.6517C154.121 20.5296 154.248 19.9039 154.343 19.2324C154.454 18.5762 154.74 16.8517 154.994 15.4324C155.232 13.9978 155.486 12.487 155.533 12.075C155.756 10.381 155.962 10.2436 156.406 11.4798C156.565 11.8918 156.851 12.6091 157.041 13.0669C157.247 13.5248 157.612 14.4252 157.882 15.0509C158.136 15.6766 158.564 16.7143 158.834 17.34C159.945 20.026 160.199 20.6364 160.278 20.8806C160.326 21.0484 160.516 21.1553 160.738 21.1553C161.135 21.1553 161.373 20.7585 162.135 18.8661C162.31 18.4083 162.674 17.5384 162.913 16.9585C163.151 16.3633 163.643 15.2035 163.976 14.3641C165.356 11.0067 165.531 10.6252 165.626 10.6252C165.674 10.6252 165.944 11.8766 166.229 13.4027C167.324 19.4918 167.546 20.6059 167.61 20.728C167.657 20.789 168.118 20.8501 168.641 20.8501H169.578V20.377C169.578 20.1175 169.371 18.8966 169.117 17.6758C168.863 16.4396 168.451 14.3031 168.181 12.9143C167.34 8.56491 166.848 6.1384 166.769 5.77214C166.705 5.52796 166.578 5.4364 166.229 5.4364C165.975 5.4364 165.769 5.5127 165.769 5.61953C165.769 5.71109 165.563 6.24523 165.309 6.79463C165.071 7.34403 164.626 8.35126 164.341 9.02274C164.071 9.69423 163.674 10.6252 163.468 11.083C163.278 11.5408 162.881 12.4717 162.595 13.1432C162.31 13.8147 161.881 14.8067 161.643 15.3561C161.389 15.9055 161.151 16.4701 161.103 16.6075C160.961 17.0501 160.707 16.928 160.437 16.3023C159.802 14.8982 159.405 13.9673 158.866 12.6854C158.549 11.9223 158.072 10.8541 157.819 10.3047C157.565 9.75527 157.358 9.25166 157.358 9.19061C157.358 9.12957 157.152 8.62595 156.882 8.07656C156.628 7.54242 156.406 7.03881 156.406 6.9625C156.406 6.8862 156.248 6.50467 156.057 6.12314C155.645 5.29905 155.073 5.1617 154.803 5.84844Z" fill="#272727"/>
<path d="M38.8954 5.77243C38.8477 5.87926 38.8319 9.29773 38.8477 13.3724L38.8954 20.774L42.0692 20.8198C44.0687 20.8503 45.5604 20.8046 46.1158 20.6977C50.7971 19.7363 53.6694 14.9748 52.0667 10.7781C51.0669 8.18367 48.9246 6.38287 46.1316 5.81821C44.6399 5.51299 39.0064 5.48247 38.8954 5.77243ZM47.0838 8.15315C47.9724 8.6415 49.0833 9.64873 49.4483 10.3355C50.083 11.4648 50.2735 13.7692 49.845 15.1274C49.4959 16.211 48.5913 17.4013 47.6392 17.9965C46.4649 18.7596 45.0208 19.0495 42.7833 18.9885L40.9583 18.9427L40.9107 13.2351L40.879 7.54271L43.5291 7.60375C46.1951 7.64954 46.1951 7.6648 47.0838 8.15315Z" fill="#272727"/>
<path d="M62.8575 5.74215C62.7306 5.94054 62.9686 6.35259 63.9525 7.64978C64.4127 8.2297 65.0316 9.09958 65.3648 9.55741C66.3646 10.9767 67.6341 12.7164 67.9832 13.1438C68.3165 13.5558 68.3323 13.7084 68.3323 17.2032V20.8506H69.3638H70.3953V17.1269C70.3953 13.4642 70.3953 13.3879 70.7603 12.9606C71.1094 12.5638 74.315 8.26022 74.8386 7.52769C74.9656 7.3293 75.283 6.93251 75.5369 6.61203C76.1716 5.81846 76.0288 5.58954 74.8386 5.58954C73.7278 5.58954 73.7913 5.54376 72.3313 7.52769C70.2366 10.3815 69.4432 11.3887 69.3162 11.3887C69.2527 11.3887 68.983 11.0835 68.7291 10.7173C67.9197 9.55741 65.4442 6.29155 65.1109 5.92528C64.8411 5.65058 64.619 5.58954 63.8731 5.58954C63.3653 5.58954 62.9051 5.65058 62.8575 5.74215Z" fill="#272727"/>
<path d="M140.646 5.68049C140.583 5.74154 140.535 9.17527 140.535 13.3263V20.85H141.487H142.439V18.0267V15.1881L142.963 14.6692C143.899 13.7536 144.963 13.4789 146.01 13.8909C147.01 14.303 147.105 14.6235 147.2 17.8741L147.28 20.7737L148.2 20.8195L149.104 20.8652V17.9962C149.104 16.4243 149.041 14.8676 148.962 14.5472C148.628 13.1584 147.311 12.1664 145.661 12.0291C144.978 11.968 144.645 12.0443 143.772 12.4411C143.201 12.7006 142.662 12.9142 142.582 12.9142C142.503 12.9142 142.424 11.2813 142.408 9.2821L142.36 5.66523L141.567 5.61945C141.122 5.58893 140.71 5.61945 140.646 5.68049Z" fill="#272727"/>
<path d="M127.381 6.44406C126.762 7.20712 127.096 8.21435 128.032 8.428C128.381 8.50431 128.571 8.428 128.968 8.04647C129.381 7.63443 129.444 7.48182 129.365 7.06977C129.159 6.06254 127.984 5.69627 127.381 6.44406Z" fill="#272727"/>
<path d="M133.046 10.8097L132.998 12.229L132.363 12.3053L131.729 12.3816V13.0683V13.7551L132.395 13.8009L133.062 13.8466L133.109 16.8531C133.157 19.5695 133.188 19.9053 133.474 20.2715C133.966 20.9125 134.744 21.2025 135.68 21.1109C136.537 21.0193 138.155 20.4394 138.155 20.2258C138.155 20.1342 137.727 19.1575 137.584 18.8981C137.568 18.8675 137.33 18.9591 137.061 19.0812C136.378 19.4322 135.347 19.4017 135.14 19.0354C135.045 18.8675 134.982 17.6772 134.982 16.2884V13.8466L136.378 13.8009L137.759 13.7551V13.0683V12.3816L136.41 12.3053L135.061 12.229L135.013 10.8097L134.966 9.40568H134.03H133.093L133.046 10.8097Z" fill="#272727"/>
<path d="M58.1746 12.1365C56.7146 12.5944 55.7149 13.449 55.0642 14.7919C54.7151 15.5397 54.6517 15.845 54.7151 16.6996C54.8738 19.2329 56.8098 21.0948 59.2854 21.0795C60.9834 21.0642 62.5386 20.057 63.3638 18.4393C64.0144 17.1574 63.9827 15.7687 63.2844 14.5172C62.7607 13.5558 62.1577 13.0064 61.0151 12.4265C60.2852 12.0755 58.857 11.9229 58.1746 12.1365ZM60.7295 14.1968C61.8245 14.8988 62.3005 16.4859 61.761 17.6915C61.269 18.8514 59.9043 19.6297 58.7459 19.416C57.6192 19.2024 56.4449 17.7831 56.429 16.608C56.429 15.5855 57.2542 14.3341 58.2539 13.8915C58.9204 13.5863 59.9678 13.7237 60.7295 14.1968Z" fill="#272727"/>
<path d="M78.1064 12.2433C77.1384 12.579 75.9641 13.5252 75.4563 14.3798C75.0437 15.0819 74.9961 15.2955 74.9961 16.5011C74.9961 18.0425 75.1865 18.5156 76.2021 19.6144C77.1225 20.6064 78.519 21.2168 79.6616 21.1252C81.2961 20.9879 82.8671 19.9349 83.5812 18.4698C84.1367 17.3405 84.1049 15.7228 83.5178 14.563C82.5022 12.579 80.0901 11.5413 78.1064 12.2433ZM80.5503 13.9831C81.6452 14.5172 82.4545 15.9823 82.2006 16.9895C81.7563 18.7598 80.2329 19.7975 78.7729 19.3397C77.3765 18.8971 76.6147 17.5847 76.821 16.0128C76.9004 15.3413 77.0273 15.0819 77.4875 14.6393C78.519 13.6626 79.4712 13.4489 80.5503 13.9831Z" fill="#272727"/>
<path d="M89.2146 12.2281C87.834 12.7012 86.8501 13.9221 86.6279 15.4329C86.5645 15.9365 86.6279 16.3638 86.8977 17.0658L87.2627 18.012L86.7866 18.4088C86.1836 18.9124 85.8345 19.4618 85.7075 20.1333C85.5488 20.8964 86.0884 21.9341 86.8184 22.3156C87.1199 22.4683 87.3738 22.6514 87.3738 22.6972C87.3738 22.7582 87.104 23.0329 86.7866 23.3076C86.1995 23.796 86.1836 23.8418 86.1836 24.8337C86.1836 25.7646 86.2312 25.9173 86.6438 26.3293C87.6166 27.2961 89.0708 27.4823 90.7064 27.3806C92.5076 27.2685 94.2768 26.7871 94.9433 25.5357C95.7209 24.0554 95.2131 22.4683 93.7373 21.751C93.0866 21.4458 92.7375 21.3847 90.7063 21.3389C89.4368 21.3237 88.2148 21.2169 87.9609 21.1253C87.1992 20.8353 87.1992 19.8739 87.9609 19.3855C88.3259 19.1566 88.4846 19.1566 89.0718 19.294C89.4526 19.4008 90.135 19.4771 90.5952 19.4771C93.4199 19.4618 95.2766 16.4096 93.7849 14.2426C93.5627 13.9221 93.404 13.6168 93.4516 13.5863C93.4834 13.5558 93.7849 13.4337 94.134 13.3269C94.6894 13.1285 94.7529 13.0675 94.7529 12.5944V12.0755L92.2932 12.045C90.5159 12.0144 89.6589 12.0602 89.2146 12.2281ZM91.3886 13.8458C92.9597 14.6393 93.0232 17.0201 91.4997 17.7526C90.5317 18.2257 89.1194 17.7984 88.6116 16.8827C88.072 15.8907 88.3101 14.8683 89.2781 14.0747C89.8335 13.6321 90.7698 13.5405 91.3886 13.8458ZM92.7851 23.4144C93.4199 24.1012 93.404 24.6964 92.7216 25.3526C91.1982 26.8177 88.0085 26.2072 88.0085 24.4522C88.0085 23.2924 88.8972 22.8193 90.9126 22.865C92.2773 22.9108 92.3408 22.9261 92.7851 23.4144Z" fill="#272727"/>
<path d="M98.6417 12.2732C97.642 12.5326 97.6102 12.5479 97.5626 13.0668C97.4991 13.8909 97.7054 14.074 98.4354 13.8604C99.6256 13.5246 100.927 13.4788 101.451 13.7383C102.022 14.013 102.133 14.2419 102.133 15.1423C102.133 15.8138 102.133 15.8138 101.704 15.7069C101.451 15.6306 100.721 15.5849 100.07 15.5849C98.721 15.6001 97.8482 15.9359 97.1659 16.7294C96.0868 17.9656 96.5946 20.0106 98.1815 20.7736C99.2606 21.3078 99.9906 21.262 101.292 20.621C102.292 20.1174 102.371 20.0869 102.561 20.331C102.672 20.4837 102.768 20.6668 102.768 20.7431C102.768 20.8041 103.037 20.8499 103.371 20.8194L103.958 20.7736L104.005 17.874C104.053 14.776 103.91 13.7688 103.371 13.0363C102.641 12.029 100.8 11.7391 98.6417 12.2732ZM101.942 16.9431C102.054 17.0041 102.133 17.4162 102.133 17.8588C102.133 18.5302 102.069 18.7134 101.704 19.0491C101.07 19.629 100.07 19.8732 99.4352 19.629C98.6576 19.3238 98.483 19.0644 98.483 18.2708C98.483 17.0499 99.0067 16.6989 100.641 16.7752C101.26 16.8057 101.847 16.882 101.942 16.9431Z" fill="#272727"/>
<path d="M175.291 12.136C173.736 12.6243 172.593 13.6773 172.196 14.9898C171.673 16.7448 172.022 18.5761 173.117 19.6749C174.783 21.3689 177.132 21.5978 179.29 20.3006C179.972 19.8886 179.988 19.736 179.385 19.034L179.036 18.6372L178.163 19.0645C177.433 19.4155 177.116 19.4918 176.449 19.446C175.402 19.3544 174.434 18.7593 174.101 18.0115C173.593 16.8364 173.466 16.8974 177.163 16.8516L180.448 16.8058L180.496 15.997C180.575 14.5472 179.718 13.189 178.226 12.4259C177.544 12.0902 175.957 11.9223 175.291 12.136ZM177.671 13.9215C178.179 14.3488 178.623 15.0356 178.623 15.4323C178.623 15.6307 178.29 15.6613 176.243 15.6613C174.942 15.6613 173.862 15.6307 173.862 15.585C173.862 15.5544 173.974 15.234 174.116 14.8982C174.656 13.6163 176.624 13.0821 177.671 13.9215Z" fill="#272727"/>
<path d="M127.363 16.5769V20.8652L128.284 20.8195L129.188 20.7737V16.5769V12.3801L128.284 12.3343L127.363 12.2885V16.5769Z" fill="#272727"/>
</svg>`, d = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
<path d="M1.41406 17.4515C1.41406 18.0239 1.79565 18.4055 2.36805 18.4055H9.40609V9.45947H1.41406V17.4515Z" fill="#039AE1"/>
<path d="M10.5938 18.4055H17.6317C18.2041 18.4055 18.5857 18.0239 18.5857 17.4515V9.45947H10.5938V18.4055Z" fill="#039AE1"/>
<path d="M0.458984 5.04823V7.31624C0.458984 7.88865 0.84057 8.27023 1.41297 8.27023H9.765V4.09424H1.41297C0.84057 4.09424 0.458984 4.47582 0.458984 5.04823Z" fill="#039AE1"/>
<path d="M18.5857 4.09424H9.51367V8.27023H18.5857C19.1581 8.27023 19.5397 7.88865 19.5397 7.31624V5.04823C19.5397 4.47582 19.1581 4.09424 18.5857 4.09424Z" fill="#039AE1"/>
<path d="M5.80166 4.22073L5.51546 3.93453C5.13388 3.55295 5.13388 2.98055 5.51546 2.59891C5.70628 2.4081 5.99248 2.31271 6.18325 2.31271C6.46945 2.31271 6.66026 2.4081 6.85103 2.59891L8.47285 4.22073H8.75905H11.144H11.4302L13.0521 2.59896C13.4336 2.21737 14.006 2.21737 14.3877 2.59896C14.7693 2.98055 14.7693 3.55295 14.3877 3.93458L14.1969 4.22078H16.4865C16.8681 3.17136 16.5819 2.02656 15.8187 1.26339C14.6739 0.118585 12.8613 0.118585 11.8119 1.26339L9.99929 2.98059L8.28208 1.26339C7.13728 0.118585 5.32469 0.118585 4.17989 1.26339C3.41663 2.02656 3.13043 3.17136 3.51206 4.22073H5.80166Z" fill="#039AE1"/>
</svg>`, h = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<g clip-path="url(#clip0_82_408)">
<path d="M17.838 14.1603C17.7673 14.0714 17.6979 13.9824 17.6298 13.8966C16.6931 12.7132 16.1264 11.9991 16.1264 8.64913C16.1264 6.9148 15.7291 5.49176 14.9461 4.42447C14.3688 3.63602 13.5883 3.0379 12.5596 2.59587C12.5464 2.58818 12.5346 2.57809 12.5247 2.56607C12.1547 1.27199 11.1422 0.405273 10.0003 0.405273C8.85835 0.405273 7.84628 1.27199 7.47628 2.56474C7.4664 2.57631 7.45474 2.58608 7.44179 2.59364C5.04126 3.62579 3.87463 5.60604 3.87463 8.64779C3.87463 11.9991 3.30877 12.7132 2.37121 13.8953C2.30308 13.9811 2.23368 14.0682 2.163 14.159C1.98043 14.3889 1.86475 14.6687 1.82967 14.9652C1.79458 15.2617 1.84155 15.5625 1.96502 15.8319C2.22772 16.41 2.78762 16.7689 3.42671 16.7689H16.5785C17.2147 16.7689 17.7707 16.4105 18.0343 15.835C18.1583 15.5655 18.2057 15.2645 18.1709 14.9677C18.1361 14.6708 18.0206 14.3906 17.838 14.1603Z" fill="#A8CCDC"/>
<path d="M10.0005 20.4051C10.5564 20.4047 11.1018 20.2561 11.5788 19.9751C12.0559 19.6942 12.4468 19.2913 12.7101 18.8093C12.7225 18.7862 12.7287 18.7603 12.7279 18.7342C12.7272 18.7081 12.7196 18.6826 12.7059 18.6602C12.6922 18.6378 12.6728 18.6193 12.6497 18.6065C12.6266 18.5936 12.6005 18.5869 12.574 18.5869H7.42785C7.40127 18.5868 7.37513 18.5935 7.35196 18.6063C7.3288 18.6191 7.30939 18.6376 7.29564 18.66C7.28189 18.6824 7.27426 18.7079 7.2735 18.7341C7.27274 18.7602 7.27887 18.7861 7.29129 18.8093C7.55461 19.2912 7.94548 19.6941 8.42245 19.975C8.89943 20.256 9.44472 20.4046 10.0005 20.4051Z" fill="#A8CCDC"/>
</g>
<defs>
<clipPath id="clip0_82_408">
<rect width="20" height="20" fill="white" transform="translate(0 0.405273)"/>
</clipPath>
</defs>
</svg>`, u = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
<path d="M1.89076 11.8502C1.46974 9.11357 1.04872 6.37699 0.627704 3.64034C0.534337 3.03369 1.22459 2.61994 1.71558 2.98822C3.02729 3.972 4.33893 4.95571 5.65064 5.93949C6.08252 6.26341 6.69782 6.158 6.99723 5.70881L10.2732 0.794748C10.6194 0.275449 11.3824 0.275449 11.7286 0.794748L15.0047 5.70881C15.3041 6.158 15.9194 6.26334 16.3513 5.93949C17.663 4.95571 18.9746 3.972 20.2863 2.98822C20.7773 2.61994 21.4676 3.03369 21.3743 3.64034C20.9532 6.37699 20.5322 9.11357 20.1112 11.8502H1.89076Z" fill="#A8CCDC"/>
<path d="M19.1611 16.4053H2.84056C2.31593 16.4053 1.89062 15.98 1.89062 15.4554V13.3687H20.1111V15.4554C20.111 15.98 19.6857 16.4053 19.1611 16.4053Z" fill="#A8CCDC"/>
</svg>`, r = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
<path d="M5.4411 14.2283L0.234598 9.02178C-0.0781992 8.70898 -0.0781992 8.20182 0.234598 7.88899L1.36736 6.7562C1.68015 6.44337 2.18735 6.44337 2.50014 6.7562L6.00749 10.2635L13.5198 2.7512C13.8326 2.4384 14.3398 2.4384 14.6526 2.7512L15.7854 3.88399C16.0982 4.19679 16.0982 4.70395 15.7854 5.01678L6.57389 14.2283C6.26106 14.5411 5.75389 14.5411 5.4411 14.2283Z" fill="#007DB8"/>
</svg>`, k = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
<path d="M4.73987 20.4056H11.1321C11.5463 20.4056 11.8821 20.0698 11.8821 19.6556C11.8821 19.2415 11.5463 18.9056 11.1321 18.9056H4.73987C3.7804 18.9056 3 18.1285 3 17.1731V9.19702H17.666V10.4539C17.666 10.868 18.0018 11.2039 18.416 11.2039C18.8302 11.2039 19.166 10.868 19.166 10.4539V7.19824C19.166 5.41187 17.7125 3.95837 15.9261 3.95837H15.123V3.49219C15.123 3.078 14.7872 2.74219 14.373 2.74219C13.9589 2.74219 13.623 3.078 13.623 3.49219V3.95837H7.04114V3.49219C7.04114 3.078 6.70532 2.74219 6.29114 2.74219C5.87695 2.74219 5.54114 3.078 5.54114 3.49219V3.95837H4.73987C3.62311 3.95837 2.63649 4.52646 2.05376 5.38875C1.7043 5.90552 1.5 6.52808 1.5 7.19751V17.1731C1.5 18.9554 2.95349 20.4056 4.73987 20.4056ZM17.6642 7.69702H3V7.19824C3 6.95851 3.04871 6.73 3.13678 6.52203C3.40086 5.89893 4.01875 5.46057 4.73694 5.46057H5.54114V5.92896C5.54114 6.34314 5.87695 6.67896 6.29114 6.67896C6.70532 6.67896 7.04114 6.34314 7.04114 5.92896V5.46057H13.623V5.92896C13.623 6.34314 13.9589 6.67896 14.373 6.67896C14.7872 6.67896 15.123 6.34314 15.123 5.92896V5.46057H15.9276C16.8853 5.46057 17.6642 6.23987 17.6642 7.19751V7.69702Z" fill="#027DB8"/>
<path d="M17.2933 11.8438C14.4208 11.8438 12.084 14.1805 12.084 17.0531C12.084 19.9257 14.4208 22.2628 17.2933 22.2628C20.1659 22.2628 22.5031 19.9257 22.5031 17.0531C22.5031 14.1805 20.1659 11.8438 17.2933 11.8438ZM13.584 17.0531C13.584 15.0078 15.248 13.3438 17.2933 13.3438C19.339 13.3438 21.0031 15.0078 21.0031 17.0531C21.0031 19.0988 19.339 20.7628 17.2933 20.7628C15.248 20.7628 13.584 19.0988 13.584 17.0531Z" fill="#027DB8"/>
<path d="M18.9969 15.3447C18.704 15.0518 18.2294 15.0518 17.9364 15.3447L17.291 15.9902L16.6455 15.3447C16.3525 15.0518 15.8779 15.0518 15.585 15.3447C15.292 15.6377 15.292 16.1123 15.585 16.4053L16.2304 17.0507L15.585 17.6962C15.292 17.9891 15.292 18.4637 15.585 18.7567C15.7314 18.9032 15.9233 18.9764 16.1152 18.9764C16.3071 18.9764 16.499 18.9032 16.6455 18.7567L17.291 18.1113L17.9364 18.7567C18.0829 18.9032 18.2748 18.9764 18.4667 18.9764C18.6586 18.9764 18.8505 18.9032 18.9969 18.7567C19.2899 18.4637 19.2899 17.9891 18.9969 17.6962L18.3515 17.0507L18.9969 16.4053C19.2899 16.1123 19.2899 15.6377 18.9969 15.3447Z" fill="#027DB8"/>
</svg>`, C = (a) => (
    /* HTML */
    `
    <div class="crs_price_block">
      <p>Free for the next 7 days</p>
      <p>then</p>
      <p><b>${a}</b>/month</p>
    </div>
  `
  ), L = (
    /* HTML */
    `
  <style>
    ${w}
  </style>
`
  ), T = (
    /* HTML */
    `
  <div class="step1 active">
    <h2>Your ultimate Yoga journey starts here</h2>
    <p>Try Premium for free for 7 days and discover all the power of yoga and mindfulness.</p>
    <ul>
      <li><span>${r}</span>1000s of AD-FREE yoga, meditation and movement classes</li>
      <li><span>${r}</span>Exclusive access to all new releases and premium content</li>
      <li><span>${r}</span>Large collection of curated programs & challenges</li>
      <li><span>${r}</span>25% off livestream events</li>
      <li><span>${r}</span>Follow your favorite teachers</li>
      <li><span>${r}</span>Watch on Mobile and TV app in HD video quality</li>
    </ul>
    <button class="start_trial">Start My 7-Day Free Trial</button>
    <p><b>${k}Cancel any time</b> We’ll send you reminder 3 days before your trial ends.</p>
  </div>
`
  ), M = (
    /* HTML */
    `
  <div class="step2">
    <h2>Start your free trial</h2>
    <ul>
    <li><span>${r}</span>Free 7 day trial. Cancel anytime with access to basic plan.</li>
    <li><span>${r}</span>We’ll remind you  3 days before your trial ends</li>
    <li><span>${r}</span>30-Day Money-Back Guarantee</li>
    </ul>
    <p>Choose your plan after 7 days free trial:</p>
    <div class="select_plan">
      <label>
        <input type="radio" name="plan" value="yearly" checked>
        <span></span>
        <div class="plan_block">
          <p>Yearly</p>
          <p>$ 9.08 / mo<span>save $59</span></p>
        </div>
      </label>
      <label>
        <input type="radio" name="plan" value="monthly">
        <span></span>
        <div class="plan_block">
          <p>Monthly</p>
          <p>$ 13.99 / mo</p>
        </div>
    </div>
    <p class="total_now">Today you pay:<b>$ 0</b></p>
    <p class="total_after">After 7 days: <span>$ 108.99</span></p>
    <a href='/yogi/register?destination=/express-checkout/139' class="btn">Next</a>
  </div>
`
  ), g = (a) => {
    const n = (/* @__PURE__ */ new Date()).getTime(), t = new Date(n + 4 * 24 * 60 * 60 * 1e3).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }), i = new Date(n + 7 * 24 * 60 * 60 * 1e3).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    return (
      /* HTML */
      `
    <div class="popup_wrapper">
      <div class="trial_popup">
        <div class="left_part">
          <div class="steps_wrapper">
            <span class="back ${a ? "hide" : ""}">${y} back</span>
            <div class="step_block">
              <span class="active"></span>
              <span></span>
              <span></span>
            </div>
            ${a ? '<span class="skip">skip</span>' : ""}
          </div>
          <div className="content_wrapper">${T} ${M}</div>
        </div>
        <div class="right_part">
          <div class="logo">${v}</div>
          <h3>How our trial works</h3>
          <ul>
            <li>
              <span>${d}</span>
              <p><b>Today</b><span>Start your 7-Day free trial</span>. Enjoy the Premium experience. Cancel anytime!</p>
            </li>
            <li>
              <span>${h}</span>
              <p><b>${t}</b>Get reminder 3 days before your trial ends. Cancel to switch to the free plan</p>
            </li>
            <li>
              <span>${u}</span>
              <p><b>${i}</b>Your subscription starts unless<br />you cancel it.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
    );
  }, f = () => {
    const a = (/* @__PURE__ */ new Date()).getTime(), n = new Date(a + 4 * 24 * 60 * 60 * 1e3).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }), t = new Date(a + 7 * 24 * 60 * 60 * 1e3).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    return (
      /* HTML */
      `
    <div class="trial_works">
      <h3>How Our Trial Works</h3>
      <ul>
        <li>
          <span>${d}</span>
          <p><b>Today</b><span>Start your 7-Day free trial</span>. Enjoy the Premium experience. Cancel anytime!</p>
        </li>
        <li>
          <span>${h}</span>
          <p><b>${n}</b>Get reminder 3 days before your trial ends. Cancel to switch to the free plan</p>
        </li>
        <li>
          <span>${u}</span>
          <p><b>${t}</b>Your subscription starts unless<br />you cancel it.</p>
        </li>
      </ul>
    </div>
  `
    );
  }, H = (
    /* HTML */
    `
  <div class="checkout_steps_wrapper">
    <span></span>
    <span></span>
    <span></span>
  </div>
`
  ), A = (
    /* HTML */
    ' <span class="trial_video">starting free 7-day trial</span> '
  );
  b({ name: "Reverse trial flow", dev: "YK" }), m("reverse_trial", "Start experiment", "loaded");
  class $ {
    constructor() {
      this.isAuth = !1, this.isFree = !0, this.init();
    }
    async init() {
      this.checkSignup();
      const n = window.location.pathname;
      switch (await o("body"), document.body.insertAdjacentHTML("afterbegin", L), await this.addPopup(), n) {
        case "/":
          this.home();
          break;
        case "/become-a-subscriber":
          this.bas();
          break;
      }
      (n === "/yoga-classes" || n === "/yoga-challenges" || n === "/yoga-programs" || n === "/yoga-meditation") && this.listing(), n.includes("/content/") && this.videoPage(), n.includes("/checkout") && this.checkout(), window.location.search.includes("freetrial") && !window.location.search.includes("destination") && this.showPopup();
    }
    async home() {
      const n = await this.checkAuth();
      this.isAuth = n, this.isAuth || this.unauthorizedPlanUpdate();
    }
    async bas() {
      const n = await this.checkAuth();
      this.isAuth = n, this.isAuth ? this.authorizedPlanUpdate() : this.unauthorizedPlanUpdate();
    }
    async listing() {
      await o(".sfc-upgradeBanner__heading"), e(".sfc-upgradeBanner__heading").elements[0].innerHTML = 'Start Your Free 7-Day Trial for <span style="color:#007922">Unlimited Access</span>', e(".sfc-upgradeBanner__cta").elements[0].innerHTML = "Start Free Trial";
      const n = await this.checkAuth();
      this.isAuth = n, e(".sfc-upgradeBanner__cta").on("click", (t) => {
        if (t.preventDefault(), this.isAuth) {
          e(".popup_wrapper").addClass("active");
          return;
        } else
          window.location.href = "/yogi/register?destination=" + window.location.pathname + "?freetrial";
      });
    }
    async videoPage() {
      const n = await this.checkAuth();
      this.isAuth = n, (await o(".sfc-playablePreviewFunnel__overlay--actions h2")).innerHTML.includes("Premium") && (this.isFree = !1), !this.isFree && this.isAuth && (e(".sfc-playablePreviewOverlayUpsell__upsellLink").style("display", "none"), e(".sfc-playablePreviewOverlayUpsell__upsellLink").elements[0].insertAdjacentHTML("afterend", A), e(".trial_video").on("click", () => {
        this.showPopup();
      })), e(".sfc-playablePreviewFunnel__overlay .sfc-playablePreviewFunnel__button--google").on("click", (i) => {
        localStorage.setItem("signup", window.location.pathname + "?freetrial");
      }), await o(".sfc-playablePreviewFunnel__overlay .sfc-playablePreviewFunnel__button--register"), e(".sfc-playablePreviewFunnel__overlay .sfc-playablePreviewFunnel__button--register").on("click", (i) => {
        c("test"), localStorage.setItem("signup", window.location.pathname + "?freetrial");
      });
    }
    async checkout() {
      o(".sfc-registrationProgress__steps").then((n) => {
        n.style.display = "none";
      }), await o(".sfc-registrationProgress__back"), e(".sfc-registrationProgress__back").elements[0].insertAdjacentHTML("afterend", H), window.innerWidth > 768 ? e(".layout-region-checkout-derisk").elements[0].insertAdjacentHTML("afterend", f()) : e(".layout-region.layout-region-checkout-main").elements[0].insertAdjacentHTML("beforebegin", f());
    }
    async checkAuth() {
      const n = await o(".c-button--cta.c-dropdownMenu__link");
      return !!(n && n.innerHTML.includes("Subscribe"));
    }
    async unauthorizedPlanUpdate() {
      await o(".sfc-pricingTable__col:nth-child(3) .sfc-pricingTableLevel__pricing--paid");
      const n = e(".sfc-pricingTableLevel__pricing--paid").elements;
      n.length > 1 && n.forEach((t, i) => {
        var s, l;
        const p = ((l = (s = t.querySelector(".sfc-price__amt")) == null ? void 0 : s.textContent) == null ? void 0 : l.trim()) || "";
        t.style.display = "none", t.insertAdjacentHTML("afterend", C(p));
      }), e('.sfc-pricingTable__col [data-sfc-id="button"]').elements.forEach((t, i) => {
        i !== 0 && (t.innerText = "Start Free Trial", t.setAttribute("href", `/yogi/register?destination=/express-checkout/13${i === 1 ? 9 : 8}`));
      });
    }
    async authorizedPlanUpdate() {
      await o(".sfc-pricingTablePremium__col:nth-child(2) .sfc-pricingTableLevel__pricing--paid"), e(".sfc-pricingTableLevel__pricing--paid").elements.forEach((t) => {
        var p, s;
        const i = ((s = (p = t.querySelector(".sfc-price__amt")) == null ? void 0 : p.textContent) == null ? void 0 : s.trim()) || "";
        t.style.display = "none", t.insertAdjacentHTML("afterend", C(i));
      }), e('.sfc-pricingTablePremium__col [data-sfc-id="button"]').elements.forEach((t, i) => {
        t.innerText = "Start Free Trial", t.setAttribute("href", `/yogi/register?destination=/express-checkout/13${i === 0 ? 8 : 9}`);
      });
    }
    async addPopup() {
      const n = await o(".c-button--cta.c-dropdownMenu__link");
      n && n.innerHTML.includes("Subscribe") && (n.innerHTML = "Start Free Trial"), n && n.innerHTML.includes("Sign Up") && n.addEventListener("click", (t) => {
        t.preventDefault(), window.location.href = "/yogi/register?destination=" + window.location.pathname + "?freetrial";
      }), window.location.search.includes("freetrial") && window.location.pathname.includes("/content/") && !document.querySelector(".sfc-playablePreviewFunnel__overlay--actions h2") ? document.body.insertAdjacentHTML("beforeend", g(!0)) : document.body.insertAdjacentHTML("beforeend", g()), e(".skip").on("click", () => {
        e(".popup_wrapper").removeClass("active");
      }), e(".trial_popup .start_trial").on("click", () => {
        e(".trial_popup .step1").removeClass("active"), e(".trial_popup .step2").addClass("active"), e(".step_block span:nth-child(2)").addClass("active"), e(".skip") && e(".back").removeClass("hide");
      }), e(".trial_popup .back").on("click", () => {
        e(".trial_popup .step1.active").elements.length > 0 ? e(".popup_wrapper").removeClass("active") : (e(".trial_popup .step2").removeClass("active"), e(".trial_popup .step1").addClass("active"), e(".step_block span:nth-child(2)").removeClass("active"), e(".skip") && e(".back").addClass("hide"));
      }), e(".trial_popup .select_plan input").on("change", (t) => {
        t.target.value === "monthly" ? e(".total_after span").elements[0].innerText = "$ 13.99" : e(".total_after span").elements[0].innerText = "$ 108.99";
      });
    }
    showPopup() {
      e(".popup_wrapper").addClass("active");
    }
    async checkSignup() {
      const n = await this.checkAuth();
      this.isAuth = n;
      const t = localStorage.getItem("signup");
      n && t && !window.location.pathname.includes("/yogi/intake-survey") && (localStorage.removeItem("signup"), window.location.href = t);
    }
  }
  new $();
})();
//# sourceMappingURL=index.js.map
