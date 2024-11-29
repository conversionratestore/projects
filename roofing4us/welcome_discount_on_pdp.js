(function() {
  "use strict";
  const r = (t, n, e, p = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: p
    }), console.dir(`Event: ${t} | ${n} | ${e} | ${p}`);
  }, _ = ({ name: t, dev: n }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, c = (t) => document.querySelectorAll(t), o = (t) => document.querySelector(t), h = (t, n = "variant_1") => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, n), console.log("set", t, n));
    }, 1e3);
  };
  function s(t) {
    return new Promise((n) => {
      if (document.querySelector(t))
        return n(document.querySelector(t));
      const e = new MutationObserver(() => {
        document.querySelector(t) && (n(document.querySelector(t)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(t) {
    t = t === void 0 ? {} : t;
    let n, e, p, i, a = (t == null ? void 0 : t.delay) || 50;
    function u() {
      n = null, i = 0;
    }
    return u(), function() {
      return e = window.scrollY, n != null && (i = e - n), n = e, clearTimeout(p), p = setTimeout(u, a), i;
    };
  })();
  const l = "https://conversionratestore.github.io/projects/roofing4us/img/", d = {
    closeIcon: (
      /* HTML */
      `
    <svg class="close_icon" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path
        d="M17.6007 0.683966C17.0683 0.151542 16.2082 0.151542 15.6758 0.683966L9 7.34608L2.32423 0.670314C1.79181 0.13789 0.931741 0.13789 0.399317 0.670314C-0.133106 1.20274 -0.133106 2.06281 0.399317 2.59523L7.07509 9.271L0.399317 15.9468C-0.133106 16.4792 -0.133106 17.3393 0.399317 17.8717C0.931741 18.4041 1.79181 18.4041 2.32423 17.8717L9 11.1959L15.6758 17.8717C16.2082 18.4041 17.0683 18.4041 17.6007 17.8717C18.1331 17.3393 18.1331 16.4792 17.6007 15.9468L10.9249 9.271L17.6007 2.59523C18.1195 2.07646 18.1195 1.20274 17.6007 0.683966Z"
        fill="white"
      />
    </svg>
  `
    ),
    closeIconMob: (
      /* HTML */
      ` <svg
    class="close_icon"
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      d="M10.75 10.7251L24.75 24.7251M10.75 24.7251L24.75 10.7251"
      stroke="#101010"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`
    ),
    btnIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <g clip-path="url(#clip0_2010_381)">
        <mask
          id="mask0_2010_381"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="21"
        >
          <path d="M0 0.279175H20V20.2792H0V0.279175Z" fill="white" />
        </mask>
        <g mask="url(#mask0_2010_381)">
          <path
            d="M17.9167 0.279175H12.6667C11.6667 0.279175 10.6667 0.695841 10 1.36251L0.75 10.6125C0.25 11.1125 0 11.6958 0 12.3625C0 13.0292 0.25 13.6125 0.75 14.1125L6.25 19.6125C6.66667 20.0292 7.25 20.2792 7.91667 20.2792C8.58333 20.2792 9.16667 20.0292 9.66667 19.5292L18.9167 10.2792C19.5833 9.61251 20 8.61251 20 7.61251V2.36251C20 1.19584 19.0833 0.279175 17.9167 0.279175ZM6.25 11.9458C5.58333 11.9458 5 11.3625 5 10.6958C5 10.0292 5.58333 9.44584 6.25 9.44584C6.91667 9.44584 7.5 10.0292 7.5 10.6958C7.5 11.3625 6.91667 11.9458 6.25 11.9458ZM9.16667 14.8625C9.16667 15.1125 9 15.2792 8.75 15.2792C8.5 15.2792 8.33333 15.1125 8.33333 14.8625V8.19584C8.33333 7.94584 8.5 7.77917 8.75 7.77917C9 7.77917 9.16667 7.94584 9.16667 8.19584V14.8625ZM11.25 13.6125C10.5833 13.6125 10 13.0292 10 12.3625C10 11.6958 10.5833 11.1125 11.25 11.1125C11.9167 11.1125 12.5 11.6958 12.5 12.3625C12.5 13.0292 11.9167 13.6125 11.25 13.6125ZM15.4167 6.94584C14.25 6.94584 13.3333 6.02917 13.3333 4.86251C13.3333 3.69584 14.25 2.77917 15.4167 2.77917C16.5833 2.77917 17.5 3.69584 17.5 4.86251C17.5 6.02917 16.5833 6.94584 15.4167 6.94584Z"
            fill="#E0162B"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_2010_381">
          <rect width="20" height="20" fill="white" transform="translate(0 0.279175)" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    copyIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M14.3877 0H5.30462C4.8775 0.00162093 4.46835 0.172009 4.16633 0.474025C3.86432 0.77604 3.69393 1.1852 3.69231 1.61231V3.69231H1.61231C1.1852 3.69393 0.77604 3.86432 0.474025 4.16633C0.172009 4.46835 0.00162093 4.8775 0 5.30462V14.3877C0.00162093 14.8148 0.172009 15.224 0.474025 15.526C0.77604 15.828 1.1852 15.9984 1.61231 16H10.6954C11.1225 15.9984 11.5317 15.828 11.8337 15.526C12.1357 15.224 12.3061 14.8148 12.3077 14.3877V12.3077H14.3877C14.8148 12.3061 15.224 12.1357 15.526 11.8337C15.828 11.5317 15.9984 11.1225 16 10.6954V1.61231C15.9984 1.1852 15.828 0.77604 15.526 0.474025C15.224 0.172009 14.8148 0.00162093 14.3877 0ZM11.0769 14.3877C11.0769 14.4889 11.0367 14.5859 10.9652 14.6575C10.8936 14.729 10.7966 14.7692 10.6954 14.7692H1.61231C1.51112 14.7692 1.41407 14.729 1.34252 14.6575C1.27097 14.5859 1.23077 14.4889 1.23077 14.3877V5.30462C1.23077 5.20343 1.27097 5.10638 1.34252 5.03483C1.41407 4.96327 1.51112 4.92308 1.61231 4.92308H10.6954C10.7966 4.92308 10.8936 4.96327 10.9652 5.03483C11.0367 5.10638 11.0769 5.20343 11.0769 5.30462V14.3877ZM14.7692 10.6954C14.7692 10.7966 14.729 10.8936 14.6575 10.9652C14.5859 11.0367 14.4889 11.0769 14.3877 11.0769H12.3077V5.30462C12.3061 4.8775 12.1357 4.46835 11.8337 4.16633C11.5317 3.86432 11.1225 3.69393 10.6954 3.69231H4.92308V1.61231C4.92308 1.51112 4.96327 1.41407 5.03483 1.34252C5.10638 1.27097 5.20343 1.23077 5.30462 1.23077H14.3877C14.4889 1.23077 14.5859 1.27097 14.6575 1.34252C14.729 1.41407 14.7692 1.51112 14.7692 1.61231V10.6954Z"
        fill="#E0162B"
      />
    </svg>
  `
    ),
    checkIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="151" height="152" viewBox="0 0 151 152" fill="none">
      <path
        d="M129.607 34.7359C127.919 33.0448 125.18 33.0419 123.492 34.7288L71.6046 86.4788L52.8839 66.1463C51.2663 64.3904 48.5313 64.2765 46.7725 65.8939C45.015 67.5116 44.9025 70.2479 46.5201 72.0054L68.29 95.6479C69.0873 96.5145 70.203 97.0177 71.3796 97.0421C71.4112 97.0434 71.4417 97.0434 71.4719 97.0434C72.6152 97.0434 73.7151 96.5893 74.5254 95.782L129.599 40.8529C131.291 39.1663 131.294 36.4271 129.607 34.7359Z"
        fill="#E0162B"
      />
      <path
        d="M128.554 72.0994C126.165 72.0994 124.229 74.0356 124.229 76.4247C124.229 103.295 102.37 125.154 75.4991 125.154C48.6301 125.154 26.7694 103.295 26.7694 76.4247C26.7694 49.5556 48.6301 27.6949 75.4991 27.6949C77.888 27.6949 79.8244 25.7588 79.8244 23.3699C79.8244 20.9808 77.888 19.0447 75.4991 19.0447C43.8594 19.0447 18.1191 44.785 18.1191 76.4247C18.1191 108.063 43.8594 133.805 75.4991 133.805C107.137 133.805 132.879 108.063 132.879 76.4247C132.879 74.0358 130.943 72.0994 128.554 72.0994Z"
        fill="#E0162B"
      />
    </svg>
  `
    )
  }, m = () => (
    /* HTML */
    `
    <div class="get_discount_btn_pdp">
      ${d.btnIcon}
      <span>Get a 5% Discount</span>
    </div>
  `
  ), w = (
    /* HTML */
    `
  <div class="discount_popup">
    <div class="first_screen ">
      <div class="info_wrapper">
        <div class="header_popup">
          <p>Join the Roofing4US Family and</p>
          <h2 class="main_title">
            <span>Save 5%</span> on <br />
            Your Next Order!
          </h2>
          <p class="accent_txt">Applies to any order over $300</p>
        </div>
        <div class="body_popup">
          <h3 class="sub_title">Sign up today and be the first to hear about exclusive offers and updates!</h3>
          <div class="email_wrapper">
            <label for="emailNew">
              <input type="email" name="emailNew" id="emailNew" placeholder="Email" />
            </label>
          </div>
          <div class="btn_wrapper">
            <div class="main_red_btn step_email">Continue</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${l}discount_popup_img.webp" alt="photo" class="desk_var" />
      </div>
    </div>
    <div class="second_screen is_hidden">
      <div class="info_wrapper">
        <div class="header_popup">
          ${d.checkIcon}
          <h2 class="check_title">
            Your <span>5%</span> Discount <br />
            Code is Ready!
          </h2>
          <p class="check_txt">Use this code at checkout to get a discount on any order over $300.</p>
        </div>
        <div class="body_popup">
          <div class="discount_code_wrapper">
            <div class="discount_code_container">
              <span class="discount_code_txt">0AN8XT0VRWD1</span>
              <span data-discount="0AN8XT0VRWD1">${d.copyIcon}</span>
            </div>
          </div>
          <div class="btn_wrapper">
            <div class="main_red_btn step_coupon">Got it, Let’s Shop!</div>
          </div>
        </div>
      </div>
      <div class="img_wrapper">
        <img src="${l}discount_popup_img.webp" alt="photo" class="desk_var" />
      </div>
    </div>
  </div>
`
  ), g = (
    /* HTML */
    `
  <div class="new_popup_backdrop is_hidden">
    <div class="new_popup">
      <button class="new_popup_close" data-popup="close">
        ${window.innerWidth > 768 ? `${d.closeIcon}` : `${d.closeIconMob}`}
      </button>
      <div class="new_popup_content">${w}</div>
    </div>
  </div>
`
  ), f = `.new_popup_backdrop {
  background: rgba(20, 20, 20, 0.6);
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000000000000;
  transition: all 0.8s ease 0s;
}
.new_popup_backdrop.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.new_popup_backdrop .new_popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 890px;
  width: calc(100% - 32px);
  border-radius: 8px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.03), 0px 2px 30px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
}
@media (max-width: 768px) {
  .new_popup_backdrop .new_popup {
    max-width: 100%;
    width: 100%;
    border-radius: 0;
    top: 70px;
    transform: translateX(-50%);
  }
}
@media (max-width: 768px) {
  .new_popup_backdrop.step_coupon_wrapper .new_popup {
    top: 46px;
  }
}
.new_popup_backdrop .new_popup_close {
  position: absolute;
  background: none;
  padding: 0;
  top: 14px;
  right: 16px;
  width: 14px;
  height: 14px;
  z-index: 1;
  border: none;
  transition: all 0.8s ease 0s;
}
.new_popup_backdrop .new_popup_close:hover, .new_popup_backdrop .new_popup_close:focus {
  background: none;
  transform: scale(0.8);
}
@media (max-width: 768px) {
  .new_popup_backdrop .new_popup_close {
    top: 24px;
    right: 21px;
    width: 35px;
    height: 35px;
  }
}

.discount_popup {
  background: #fff;
}
.discount_popup .first_screen,
.discount_popup .second_screen {
  display: flex;
  align-items: center;
  justify-content: center;
}
.discount_popup .first_screen > div,
.discount_popup .second_screen > div {
  width: 50%;
}
@media (max-width: 768px) {
  .discount_popup .first_screen > div,
  .discount_popup .second_screen > div {
    width: 100%;
  }
}
.discount_popup .is_hidden {
  display: none;
}
.discount_popup .info_wrapper {
  padding: 10px 36px;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper {
    padding: 71px 21px 48px;
  }
}
.discount_popup .info_wrapper .header_popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .header_popup {
    margin-bottom: 32px;
    gap: 12px;
  }
}
.discount_popup .info_wrapper .header_popup p {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  color: #101010;
  margin: 0;
  padding: 0;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .header_popup p {
    font-size: 16px;
    line-height: normal;
  }
}
.discount_popup .info_wrapper .header_popup p.accent_txt {
  font-weight: 600;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .header_popup p.accent_txt {
    font-size: 18px;
    font-weight: 700;
    line-height: 23.8px;
  }
}
.discount_popup .info_wrapper .header_popup .main_title {
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 38px;
  font-weight: 700;
  line-height: 46px;
  text-transform: initial;
  letter-spacing: normal;
  color: #101010;
  margin: 0;
  padding: 0;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .header_popup .main_title {
    font-size: 36px;
    line-height: 44px;
  }
}
.discount_popup .info_wrapper .header_popup .main_title span {
  color: #e0162b;
}
.discount_popup .info_wrapper .header_popup > svg {
  max-width: 151px;
  max-height: 151px;
  flex-shrink: 0;
}
.discount_popup .info_wrapper .header_popup .check_title {
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: normal;
  color: #101010;
  text-transform: initial;
  text-align: center;
  margin: 0;
}
.discount_popup .info_wrapper .header_popup .check_title span {
  color: #e0162b;
}
.discount_popup .info_wrapper .header_popup .check_txt {
  color: #212121;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: normal;
  text-transform: initial;
  text-align: center;
  margin: 0;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .header_popup .check_txt {
    max-width: 300px;
    margin: 0 auto;
  }
}
.discount_popup .info_wrapper .body_popup .sub_title {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  letter-spacing: normal;
  color: #212121;
  max-width: 350px;
  margin: 0 auto 18px;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .sub_title {
    margin-bottom: 15px;
    line-height: normal;
  }
}
.discount_popup .info_wrapper .body_popup .email_wrapper {
  margin-bottom: 18px;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .email_wrapper {
    margin-bottom: 15px;
  }
}
.discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] {
  height: 54px;
  width: 100%;
  margin: 0;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] {
    height: 58px;
  }
}
.discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] input {
  border: 1px solid #cecdcd;
  background: #fff;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10px 16px;
  color: #101010;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  border-radius: 0;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] input {
    padding: 17px;
  }
}
.discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] input::-moz-placeholder {
  color: #949596;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
}
.discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] input::placeholder {
  color: #949596;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
}
.discount_popup .info_wrapper .body_popup .email_wrapper [for=emailNew] input:focus-visible {
  border-radius: 0;
}
.discount_popup .info_wrapper .body_popup .email_wrapper #emailAddressError {
  display: block;
  color: #e0162b;
  margin-top: 8px;
}
.discount_popup .info_wrapper .body_popup .discount_code_wrapper {
  margin-bottom: 18px;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .discount_code_wrapper {
    margin-bottom: 15px;
  }
}
.discount_popup .info_wrapper .body_popup .discount_code_wrapper .discount_code_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 54px;
  gap: 8px;
  border: 1px solid #cecdcd;
  background: #fff;
  padding: 10px 16px;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .discount_code_wrapper .discount_code_container {
    height: 58px;
  }
}
.discount_popup .info_wrapper .body_popup .discount_code_wrapper .discount_code_container .discount_code_txt {
  color: #e0162b;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.96px;
  text-transform: uppercase;
}
.discount_popup .info_wrapper .body_popup .discount_code_wrapper .discount_code_container [data-discount] {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.discount_popup .info_wrapper .body_popup .main_red_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: normal;
  color: #fff;
  background: #e0162b;
  cursor: pointer;
}
@media (max-width: 768px) {
  .discount_popup .info_wrapper .body_popup .main_red_btn {
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  }
}
.discount_popup .img_wrapper {
  height: 100%;
  max-height: 546px;
}
.discount_popup .img_wrapper > img {
  display: block;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .discount_popup .img_wrapper {
    display: none;
  }
}
@media (max-width: 768px) {
  .discount_popup .second_screen .info_wrapper .header_popup {
    gap: 8px;
  }
}

.get_discount_btn_pdp {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: -moz-max-content;
  width: max-content;
  background: #f1f1f1;
  padding: 6px 12px 6px 8px;
  margin: 14px 0 8px;
  cursor: pointer;
}
.get_discount_btn_pdp.is_hidden {
  display: none;
}
@media only screen and (max-width: 1200px) {
  .get_discount_btn_pdp {
    margin: 0;
  }
}
@media only screen and (max-width: 768px) {
  .get_discount_btn_pdp {
    display: inline-flex;
    padding: 6px 12px 6px 10px;
  }
}
.get_discount_btn_pdp svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.get_discount_btn_pdp span {
  color: #003068;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
  text-decoration: underline;
  margin: 0;
}

.page-container .call_F_P_tag2.cfp_note {
  margin-bottom: 10px !important;
}
.page-container .product-single__meta:not(.callforprice_meta) {
  position: relative;
}
@media only screen and (max-width: 1200px) {
  .page-container .product-single__meta:not(.callforprice_meta) .product__price {
    display: inline-flex;
    margin-bottom: 14px;
    width: -moz-max-content;
    width: max-content;
  }
}
@media only screen and (max-width: 768px) {
  .page-container .product-single__meta:not(.callforprice_meta) .product__price .price-item {
    color: #101010;
    font-family: "Poppins", sans-serif;
    font-size: 29px;
    font-weight: 700;
    line-height: 37.13px;
  }
}

.needsclick.kl-private-reset-css-Xuajs1.is_hidden {
  display: none !important;
}/*# sourceMappingURL=main.css.map */`, x = window.innerWidth < 768 ? "mobile" : "desktop";
  class b {
    constructor(n) {
      this.isPopupEventHandlersAdded = !1, this.device = n, this.init(), this.observeLocalStorage();
    }
    init() {
      _({ name: "Welcome discount on PDP", dev: "SKh" }), h("exp_01_welcome"), o(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${f}</style>`), this.renderButtonTriggerForPopup(), this.addClickOnButtonTriggerToOpenPopup(), this.createPopup(), this.addClickOnEmailInput(), this.addClickOnStepEmailButton(), this.addClickOnStepCouponButton(), this.copyDiscount(), this.observeControlPopup();
    }
    renderButtonTriggerForPopup() {
      s(".page-container .product__price").then((n) => {
        const e = o(".page-container .product__price");
        !o(".get_discount_btn_pdp") && !localStorage.getItem("pushowl_email") && !sessionStorage.getItem("sentEmail") && e.insertAdjacentHTML("afterend", m());
      });
    }
    observeLocalStorage() {
      const n = localStorage.setItem;
      localStorage.setItem = function(e, p) {
        const i = new Event("itemInserted");
        document.dispatchEvent(i), n.apply(this, arguments);
      }, document.addEventListener("itemInserted", () => {
        if (localStorage.getItem("pushowl_email")) {
          const e = o(".get_discount_btn_pdp");
          e && e.classList.add("is_hidden");
        }
      });
    }
    addClickOnButtonTriggerToOpenPopup() {
      s(".get_discount_btn_pdp").then((n) => {
        o(".get_discount_btn_pdp").addEventListener("click", () => {
          r("exp_01_welcome__get_discount", "Get a 5% discount", "click", "Product description"), this.showPopup("getDiscount", "Click on the btn");
        });
      });
    }
    createPopup() {
      s(".page-container .product__price").then((n) => {
        console.log("createPopup !!!"), o(".new_popup_backdrop") || o("body").insertAdjacentHTML("afterbegin", g);
      });
    }
    showPopup(n, e) {
      if (sessionStorage.getItem(n))
        return;
      const i = o("body"), a = o(".new_popup_backdrop");
      a.classList.contains("is_hidden") && a.classList.remove("is_hidden"), i.style.overflow = "hidden", r("exp_01_welcome__popup_1__view", "Step 1, Email form", "view", "Popup Save 5% on Your next order"), this.closePopup();
    }
    closePopup() {
      const n = o(".new_popup_backdrop"), p = o(".new_popup").querySelectorAll('[data-popup="close"]');
      this.isPopupEventHandlersAdded || (p.forEach((i) => {
        i.addEventListener("click", this.handleBtnClosePopupClick.bind(this));
      }), n.addEventListener("click", this.handleBackdropClick.bind(this)), this.isPopupEventHandlersAdded = !0);
    }
    handleBtnClosePopupClick(n) {
      n.currentTarget && n.currentTarget.closest(".step_coupon_wrapper") ? (console.log("step_coupon_wrapper close_btn"), this.applyCoupon("0AN8XT0VRWD1")) : this.hidePopup(), r("exp_01_welcome__close_btn", "Close", "click", "Popup Save 5% on Your next order");
    }
    handleBackdropClick(n) {
      n.target.matches(".new_popup_backdrop") && (n.target.closest(".step_coupon_wrapper") ? (console.log("new_popup_backdrop step_coupon_wrapper"), this.applyCoupon("0AN8XT0VRWD1")) : this.hidePopup(), r("exp_01_welcome__backdrop", "Сlick behind the pop-up area", "click", "Popup Save 5% on Your next order"));
    }
    hidePopup() {
      const n = o("body");
      o(".new_popup_backdrop").classList.add("is_hidden"), n.style.overflow = "initial";
    }
    addClickOnEmailInput() {
      s("#emailNew").then((n) => {
        c("#emailNew").forEach((e) => {
          e.addEventListener("input", (p) => {
            this.validateEmailForm(p.target);
          }), e.addEventListener("keyup", (p) => {
            p.key === "Enter" && this.validateEmailForm(p.target, !0);
          }), e.addEventListener("blur", (p) => {
            r("exp_01_welcome__popup_1__email", "Email", "click", "Popup Save 5% on Your next order");
          });
        });
      });
    }
    addClickOnStepEmailButton() {
      s(".main_red_btn.step_email").then((n) => {
        const e = o(".main_red_btn.step_email"), p = o("#emailNew");
        e.addEventListener("click", () => {
          r("exp_01_welcome__popup_1__continue", "Continue", "click", "Popup Save 5% on Your next order"), this.validateEmailForm(p, !0);
        });
      });
    }
    validateEmailForm(n, e = !1) {
      var a;
      const p = o("#emailNew").value, i = p.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
      n.getAttribute("name") === "emailNew" && (i === null ? o("#emailAddressError") || n.closest("label").insertAdjacentHTML(
        "afterend",
        '<span id="emailAddressError" class="error">Please Enter Valid Email Address</span>'
      ) : (a = o("#emailAddressError")) == null || a.remove()), i !== null && e && this.handleEmailSubmission(p);
    }
    handleEmailSubmission(n) {
      this.sendEmailToGoogleSheet(n), o(".new_popup_backdrop").classList.add("step_coupon_wrapper"), o(".get_discount_btn_pdp").classList.add("is_hidden"), o(".first_screen") && o(".first_screen").classList.add("is_hidden"), o(".second_screen").classList.contains("is_hidden") && o(".second_screen").classList.remove("is_hidden"), r("exp_01_welcome__popup_2__view", "Step 2. Coupon code", "view", "Popup Save 5% on Your next order");
    }
    sendEmailToGoogleSheet(n) {
      fetch("https://script.google.com/macros/s/AKfycbyA8NPDk20WCSWow0TDtKORatekqwFNliI74uv8h4Cb3woquUnCID-NA6OpGssJAG6iOw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ email: n })
      }).then((p) => {
        if (!p.ok)
          throw new Error("Network response was not ok");
        return sessionStorage.setItem("sentEmail", "yes"), p.json();
      }).then((p) => {
        console.log("Success:", p);
      }).catch((p) => {
        console.error("Error:", p);
      });
    }
    addClickOnStepCouponButton() {
      s(".main_red_btn.step_coupon").then((n) => {
        o(".main_red_btn.step_coupon").addEventListener("click", () => {
          r("exp_01_welcome__popup_2__got_it", "Got it, Let`s Shop!", "click", "Popup Save 5% on Your next order"), this.applyCoupon("0AN8XT0VRWD1");
        });
      });
    }
    applyCoupon(n) {
      const e = window.location.pathname;
      window.location.href = `/discount/${n}?redirect=${e}`;
    }
    copyDiscount() {
      s("[data-discount]").then((n) => {
        c("[data-discount]").forEach((e) => {
          e.addEventListener("click", (p) => {
            r("exp_01_welcome__popup_2__copy", "Copy code", "click", "Popup Save 5% on Your next order");
            let i = p.currentTarget.dataset.discount;
            navigator.clipboard.writeText(i), p.currentTarget.textContent = "Copied!", setTimeout(() => {
              e.innerHTML = `${d.copyIcon}`;
            }, 600);
          });
        });
      });
    }
    observeControlPopup() {
      new MutationObserver((e) => {
        for (const p of e)
          if (p.type === "childList") {
            const i = o(".new_popup_backdrop");
            if (i && !i.classList.contains("is_hidden")) {
              const a = o("body > div> div.needsclick.kl-private-reset-css-Xuajs1");
              a && (console.log("popup"), a.classList.add("is_hidden"));
            }
          }
      }).observe(document.body, { childList: !0, subtree: !0 });
    }
  }
  new b(x);
})();
//# sourceMappingURL=index.js.map
