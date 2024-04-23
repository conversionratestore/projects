(function() {
  "use strict";
  const m = (a, n, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: t,
      event_loc: i
    }), console.log(`Event: ${a} | ${n} | ${t} | ${i}`);
  }, v = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, h = (a) => document.querySelectorAll(a), e = (a) => document.querySelector(a), L = async (a) => {
    const n = (t) => new Promise((i, o) => {
      const d = t.split(".").pop();
      if (d === "js") {
        if (Array.from(document.scripts).map((l) => l.src.toLowerCase()).includes(t.toLowerCase()))
          return console.log(`Script ${t} allready downloaded!`), i("");
        const s = document.createElement("script");
        s.src = t, s.onload = i, s.onerror = o, document.head.appendChild(s);
      } else if (d === "css") {
        if (Array.from(document.styleSheets).map((l) => {
          var _;
          return (_ = l.href) == null ? void 0 : _.toLowerCase();
        }).includes(t.toLowerCase()))
          return console.log(`Style ${t} allready downloaded!`), i("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = t, s.onload = i, s.onerror = o, document.head.appendChild(s);
      }
    });
    for (const t of a)
      await n(t), console.log(`Loaded librari ${t}`);
    console.log("All libraries loaded!");
  }, y = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, f = (a, n, t, i, o = 3e3, d = 0.5) => {
    let p, s;
    if (p = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? s = setTimeout(() => {
          m(
            n,
            l[0].target.dataset.visible || i || "",
            "Visibility",
            t
          ), p.disconnect();
        }, o) : clearTimeout(s);
      },
      { threshold: [d] }
    ), typeof a == "string") {
      const l = document.querySelector(a);
      l && p.observe(l);
    } else
      p.observe(a);
  };
  function c(a) {
    return new Promise((n) => {
      if (document.querySelector(a))
        return n(document.querySelector(a));
      const t = new MutationObserver(() => {
        document.querySelector(a) && (n(document.querySelector(a)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const C = `.new_loader_block {
  margin: 0 auto 40px;
}
@media (max-width: 768px) {
  .new_loader_block {
    margin: 0 auto 36px;
  }
}

.loader_timing_box {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto;
}
.loader_timing_box svg.rotating {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-90deg);
  width: 100%;
  height: 100%;
}
.loader_timing_box svg.loader_bgr {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader_timing_box .percentage {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 1em;
  width: 2em;
  text-align: center;
  line-height: 1;
  color: #3e78ba;
  text-align: center;
  text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.3), 0px 1px 0px rgba(255, 255, 255, 0.5);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
}
@keyframes fill {
  0% {
    fill: #f2f2f2;
  }
  100% {
    fill: #3e78ba;
  }
}
@media (max-width: 768px) {
  .loader_timing_box {
    width: 166px;
    height: 166px;
  }
  .loader_timing_box svg.loader_bgr {
    width: 150px;
    height: 150px;
  }
}

.loading_txt_wrapper {
  text-align: center;
  margin: 40px auto 0;
}
.loading_txt_wrapper p {
  display: none;
  color: #3e78ba;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  margin: 0;
}
.loading_txt_wrapper p:first-child {
  display: block;
}
.loading_txt_wrapper p span:nth-child(1) {
  animation: blink 1s linear infinite;
}
.loading_txt_wrapper p span:nth-child(2) {
  animation: blink 1s linear infinite;
  animation-delay: 0.2s;
}
.loading_txt_wrapper p span:nth-child(3) {
  animation: blink 1s linear infinite;
  animation-delay: 0.4s;
}
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
@media (max-width: 768px) {
  .loading_txt_wrapper {
    margin-top: 24px;
  }
  .loading_txt_wrapper p {
    font-size: 18px;
    line-height: 25px;
    max-width: 305px;
    margin: 0 auto;
  }
}

.guarantee_block {
  padding: 0 0 40px;
}
.guarantee_block .guarantee_block_container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 6px;
  border: 1px solid #e1e1e1;
  background: linear-gradient(180deg, #fff 84%, #f7f7f8 100%);
  padding: 16px;
  margin: 0 auto;
  max-width: 558px;
}
.guarantee_block .guarantee_block_container svg {
  max-width: 44px;
  height: 44px;
  width: 100%;
}
.guarantee_block .guarantee_block_container p {
  color: #2b3e51;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
}
@media (max-width: 768px) {
  .guarantee_block {
    padding: 0 16px 24px;
    border-bottom: 1px solid #e1e1e1;
    background: #f7f7f8;
    margin-bottom: 36px;
  }
  .guarantee_block .guarantee_block_container {
    border: none;
    background: #fff;
  }
}

.new_reviews_block {
  width: 100%;
  padding: 40px 0;
  margin: 0 auto;
  border-top: 1px solid #e1e1e1;
  background: #f7f7f8;
}
.new_reviews_block.is_hidden {
  display: none;
}
.new_reviews_block .new_reviews_main_title {
  color: #2b3e51;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 2px;
}
.new_reviews_block .new_reviews_main_txt {
  color: #2b3e51;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
.new_reviews_block .new_reviews_list {
  position: relative;
  margin: 24px 0 0 56px;
  padding-bottom: 56px;
  visibility: hidden;
}
.new_reviews_block .new_reviews_item {
  position: relative;
  border-radius: 6px;
  background: #fff;
  padding: 24px;
}
.new_reviews_block .received_box {
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
}
.new_reviews_block .stars_wrapper {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}
.new_reviews_block .new_reviews_item_title {
  display: block;
  width: -moz-max-content;
  width: max-content;
  color: #2b3e51;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  margin: 0;
}
.new_reviews_block .new_reviews_item_subtitle {
  color: #3e78ba;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 8px 0 12px;
}
.new_reviews_block .new_reviews_item_txt {
  color: #676767;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
}
.new_reviews_block .received_box_txt {
  color: #2b3e51;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}
.new_reviews_block .received_box_price {
  color: #ebbd45;
  font-size: 16px;
  font-weight: 700;
  line-height: 21px;
}
.new_reviews_block .slick-track {
  margin-left: -15px;
}
.new_reviews_block .slick-slide {
  margin: 0 16px 0 0;
  height: 100%;
}
.new_reviews_block .slick-slide > div {
  height: 100%;
}
.new_reviews_block .slider_arrow {
  position: absolute;
  bottom: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  max-height: 32px;
}
.new_reviews_block .slider_arrow svg {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 32px;
  min-height: 32px;
}
.new_reviews_block .prev_btn.slider_arrow {
  left: 47%;
}
.new_reviews_block .next_btn.slider_arrow {
  right: 47%;
}
@media (min-width: 912px) and (max-width: 1300px) {
  .new_reviews_block .prev_btn.slider_arrow {
    left: 46%;
  }
  .new_reviews_block .next_btn.slider_arrow {
    right: 46%;
  }
}
@media (min-width: 769px) and (max-width: 911px) {
  .new_reviews_block .prev_btn.slider_arrow {
    left: 44%;
  }
  .new_reviews_block .next_btn.slider_arrow {
    right: 44%;
  }
}
@media (max-width: 768px) {
  .new_reviews_block {
    padding: 24px 16px;
  }
  .new_reviews_block .new_reviews_main_title {
    font-size: 16px;
  }
  .new_reviews_block .new_reviews_list {
    margin: 16px 0 0;
  }
  .new_reviews_block .slick-track {
    margin: 0;
  }
  .new_reviews_block .slick-slide {
    margin: 0 4px;
  }
  .new_reviews_block .prev_btn.slider_arrow {
    left: 38%;
  }
  .new_reviews_block .next_btn.slider_arrow {
    right: 38%;
  }
}

.last_steps_wrapper {
  max-width: 552px;
  margin: 0 auto 40px;
}
.last_steps_wrapper .phone_box.is_hidden, .last_steps_wrapper .email_name_box.is_hidden {
  display: none;
}
.last_steps_wrapper .last_steps_main_title {
  color: #2b3e51;
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.48px;
  margin: 0 0 8px;
  text-transform: initial;
}
.last_steps_wrapper .last_steps_main_txt {
  color: #676767;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 24px;
}
.last_steps_wrapper #continueValidationBtn, .last_steps_wrapper #seeMyResultsBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 6px;
  background: #3d78ba;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  margin: 16px 0;
  outline: none;
  border: none;
}
.last_steps_wrapper .safe_and_secure_box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.last_steps_wrapper .safe_and_secure_box span {
  color: #2b3e51;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
.last_steps_wrapper .or_txt {
  position: relative;
  margin: 16px 0;
}
.last_steps_wrapper .or_txt span {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: -moz-max-content;
  width: max-content;
  color: #676767;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  background: #fff;
  padding: 0 23px;
  z-index: 1111;
  margin: 0 auto;
}
.last_steps_wrapper .or_txt::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 1px;
  background: #e9e9e9;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.last_steps_wrapper #btnSignInBlock {
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
}
.last_steps_wrapper #btnSignInBlock #googleSignInBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  gap: 10px;
  width: 100%;
  border-radius: 6px;
  background: #f2f2f2;
  color: #2b3e51;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  cursor: pointer;
}
.last_steps_wrapper .new_footnote {
  color: #676767;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
}
.last_steps_wrapper .new_footnote a {
  color: #3e78ba;
  cursor: pointer;
}
.last_steps_wrapper .benefits {
  margin: 24px 0 0;
  padding-top: 24px;
  border-top: 1px solid #e9e9e9;
}
.last_steps_wrapper .benefits > div > p {
  color: #2b3e51;
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  margin: 0 0 16px;
}
.last_steps_wrapper .benefits ul {
  margin: 0;
}
.last_steps_wrapper .benefits ul li {
  color: #2b3e51;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  padding-bottom: 8px;
}
.last_steps_wrapper .benefits ul li:last-child {
  padding: 0;
}
.last_steps_wrapper .benefits ul li img {
  max-width: 40px;
  max-height: 40px;
  -o-object-fit: contain;
     object-fit: contain;
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
  .last_steps_wrapper {
    margin: -8px 16px 0;
  }
  .last_steps_wrapper .last_steps_main_title {
    font-size: 24px;
    line-height: 36px;
  }
  .last_steps_wrapper #continueValidationBtn {
    margin: 12px 0;
  }
  .last_steps_wrapper .safe_and_secure_box span {
    font-size: 14px;
  }
  .last_steps_wrapper .or_txt {
    margin: 12px 0;
  }
  .last_steps_wrapper #btnSignInBlock {
    margin-bottom: 12px;
  }
  .last_steps_wrapper .new_footnote {
    font-size: 12px;
    line-height: 16px;
  }
  .last_steps_wrapper .benefits {
    margin-top: 16px;
    padding-top: 16px;
  }
  .last_steps_wrapper .benefits ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
  }
  .last_steps_wrapper .benefits ul li:last-child {
    padding-bottom: 16px;
  }
  .last_steps_wrapper .benefits .hidden-xs {
    display: block !important;
  }
  .last_steps_wrapper .benefits .hidden-xs ul {
    display: none;
  }
  .last_steps_wrapper .benefits .visible-xs > p {
    display: none !important;
  }
  .last_steps_wrapper .benefits > div > p {
    line-height: 24px;
  }
}

.g_id_signin > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.g_id_signin iframe {
  margin: 0 !important;
}

#edit-processed-text-73 .card-dark-blue,
.testimonials .container-fluid,
#edit-loading-screen.webform-card--active,
html.js .webform-card.webform-card--active.is_loader,
.form-item-last-name,
#edit-what-is-your-contact-info- .js-form-type-processed-text,
#edit-what-is-your-contact-info-2 .js-form-type-processed-text,
.webform-button--submit,
.is_loader .webform-progress-wrapper,
.is_loader .webform-progress,
.is_loader .back-button-wrapper,
.is_loader .quiz-title {
  display: none !important;
}

.is_loader form {
  padding: 0 !important;
}

.is_loader .navbar-top .navbar-header {
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.is_loader .navbar-default {
  background: none;
}

.is_loader .navbar .logo {
  padding: 40px 0;
}

#webform-submission-grantme-program-assessment-add-form {
  min-height: 100% !important;
}

.path-scholarship-eligibility-quiz .is_loader .form-wrapper {
  padding: 0;
  margin: 0;
}

.testimonials,
.path-scholarship-eligibility-quiz .main-container {
  background: none;
  padding: 0;
}

.navbar-header .logo img {
  width: 236px !important;
  max-height: 71px;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}

body .form-type-textfield .form-text,
body .form-type-tel .form-tel {
  height: 56px;
  border-radius: 6px;
  border: 1px solid #3d78ba;
  background: #fafafb;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
body .form-type-textfield .form-text::-moz-placeholder, body .form-type-tel .form-tel::-moz-placeholder {
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}
body .form-type-textfield .form-text::placeholder,
body .form-type-tel .form-tel::placeholder {
  color: #8b8b8b;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

body .form-group {
  margin-bottom: 12px;
}
body .form-group.form-item-email-address {
  margin: 0;
}
body .form-group.form-item-mobile-number {
  margin-bottom: 16px;
}

body .form-item-email-address label:not(.error),
body .form-item-first-name label:not(.error),
body .form-item.form-type-tel label:not(.error) {
  display: inline-block !important;
  color: #2b3e51 !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  margin: 0 0 8px !important;
}

.last_steps_wrapper .error {
  display: block !important;
  text-align: left !important;
}

.last_steps_wrapper strong.error {
  display: none !important;
}

#edit-qa13-wrap.panel .panel-body {
  padding: 0;
}

.is_loader .navbar-top .navbar-header .col-md-offset-2 {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
}

@media (max-width: 768px) {
  .dialog-off-canvas-main-canvas.is_loader_active .navbar-default {
    background: #f7f7f8;
  }
  .dialog-off-canvas-main-canvas.is_loader .navbar-header .logo {
    padding: 24px 0;
  }
  .dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img {
    width: 90px !important;
    min-width: 100% !important;
  }
  .is_loader .main-container .row,
  .is_loader .main-container .row > .col-sm-12 {
    margin: 0 !important;
    padding: 0 !important;
  }
}/*# sourceMappingURL=main.css.map */`, r = {
    guaranteeIcon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
  <g clip-path="url(#clip0_4895_2988)">
    <mask id="mask0_4895_2988" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="45">
      <path d="M0 0.799992H44V44.8H0V0.799992Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_4895_2988)">
      <path d="M20.2709 33.2655L20.7176 32.3707L20.7153 32.3696L20.2709 33.2655ZM15.8761 43.5109L14.9475 43.882C15.0976 44.2576 15.4592 44.5058 15.8636 44.5108C16.268 44.5159 16.6357 44.2768 16.7951 43.9051L15.8761 43.5109ZM13.1587 36.7116L14.0873 36.3404C13.8824 35.8276 13.3006 35.578 12.7877 35.7829L13.1587 36.7116ZM6.35938 39.428L5.44038 39.0338C5.28092 39.4055 5.36105 39.8366 5.64343 40.1262C5.9258 40.4158 6.35479 40.5067 6.73038 40.3567L6.35938 39.428ZM11.8499 29.9766L12.4931 29.2109L12.4921 29.21L11.8499 29.9766ZM14.4934 30.8824L15.3778 30.4157C15.1983 30.0756 14.8397 29.8686 14.4555 29.8831L14.4934 30.8824ZM16.5988 32.7189L16.2563 33.6584L16.2573 33.6588L16.5988 32.7189ZM19.3927 32.6656L20.065 31.9253C19.7798 31.6664 19.3713 31.5942 19.0147 31.7398L19.3927 32.6656ZM37.6406 39.428L37.2696 40.3567C37.6452 40.5067 38.0742 40.4158 38.3566 40.1262C38.6389 39.8366 38.7191 39.4055 38.5596 39.0338L37.6406 39.428ZM30.8412 36.7116L31.2123 35.7829C30.6994 35.578 30.1176 35.8276 29.9127 36.3404L30.8412 36.7116ZM28.1239 43.5109L27.2049 43.9051C27.3643 44.2768 27.732 44.5159 28.1364 44.5108C28.5408 44.5058 28.9024 44.2576 29.0525 43.882L28.1239 43.5109ZM23.7291 33.2655L23.2847 32.3696L23.2824 32.3707L23.7291 33.2655ZM24.6073 32.6656L24.9853 31.7398C24.6287 31.5942 24.2202 31.6664 23.935 31.9253L24.6073 32.6656ZM27.4012 32.7189L27.7427 33.6588L27.7437 33.6584L27.4012 32.7189ZM29.5066 30.8824L29.5445 29.8831C29.1602 29.8686 28.8017 30.0756 28.6222 30.4157L29.5066 30.8824ZM32.1501 29.9766L31.5079 29.21L31.5069 29.2109L32.1501 29.9766ZM37.0133 17.8801L36.1672 17.3471C35.962 17.6728 35.962 18.0873 36.1672 18.4131L37.0133 17.8801ZM36.1084 23.0148L35.4956 22.2246C35.1916 22.4603 35.0498 22.8495 35.1308 23.2255L36.1084 23.0148ZM35.6752 25.776L36.5411 26.2762L36.5414 26.2758L35.6752 25.776ZM33.501 27.5308L33.1953 26.5787C32.8288 26.6964 32.5624 27.0139 32.5102 27.3953L33.501 27.5308ZM10.499 27.5308L11.4898 27.3953C11.4376 27.0139 11.1712 26.6964 10.8047 26.5787L10.499 27.5308ZM8.32477 25.776L7.45864 26.2758L7.45885 26.2762L8.32477 25.776ZM7.89164 23.0148L8.8692 23.2255C8.95023 22.8495 8.80841 22.4603 8.50443 22.2246L7.89164 23.0148ZM6.98672 17.8801L7.83285 18.4131C8.03801 18.0873 8.03801 17.6728 7.83285 17.3471L6.98672 17.8801ZM7.89164 12.7453L8.50443 13.5355C8.80841 13.2998 8.95023 12.9107 8.8692 12.5346L7.89164 12.7453ZM8.32477 9.98499L9.19068 10.4852L9.1909 10.4848L8.32477 9.98499ZM10.499 8.22929L10.8047 9.18142C11.171 9.06379 11.4374 8.74638 11.4897 8.36514L10.499 8.22929ZM11.8499 5.7835L12.4922 6.54997L12.4931 6.54919L11.8499 5.7835ZM14.4934 4.87772L14.4555 5.87701C14.8398 5.89157 15.1983 5.68451 15.3778 5.34442L14.4934 4.87772ZM16.5988 3.04124L16.2573 2.10137L16.2563 2.10175L16.5988 3.04124ZM19.3927 3.09452L19.0147 4.02036C19.371 4.16579 19.7792 4.09387 20.0643 3.83542L19.3927 3.09452ZM24.6073 3.09452L23.9357 3.83542C24.2208 4.09387 24.629 4.16579 24.9853 4.02036L24.6073 3.09452ZM27.4012 3.04124L27.7437 2.10175L27.7427 2.10137L27.4012 3.04124ZM29.5066 4.87772L28.6222 5.34442C28.8017 5.68451 29.1603 5.89157 29.5445 5.87701L29.5066 4.87772ZM32.1501 5.7835L31.5069 6.54919L31.5078 6.54997L32.1501 5.7835ZM33.501 8.22929L32.5103 8.36514C32.5626 8.74638 32.829 9.06379 33.1953 9.18142L33.501 8.22929ZM35.6752 9.98499L34.8091 10.4848L34.8093 10.4852L35.6752 9.98499ZM36.1084 12.7453L35.1308 12.5346C35.0498 12.9107 35.1916 13.2998 35.4956 13.5355L36.1084 12.7453ZM19.3519 32.8712L14.9571 43.1167L16.7951 43.9051L21.19 33.6597L19.3519 32.8712ZM16.8047 43.1398L14.0873 36.3404L12.2302 37.0827L14.9475 43.882L16.8047 43.1398ZM12.7877 35.7829L5.98837 38.4994L6.73038 40.3567L13.5298 37.6402L12.7877 35.7829ZM7.27837 39.8223L11.8305 29.2116L9.99249 28.4231L5.44038 39.0338L7.27837 39.8223ZM10.0271 29.2842C10.3144 29.8284 10.7097 30.326 11.2078 30.7432L12.4921 29.21C12.1961 28.9621 11.964 28.6691 11.7958 28.3505L10.0271 29.2842ZM11.2067 30.7423C12.1731 31.5541 13.3638 31.9259 14.5312 31.8817L14.4555 29.8831C13.7632 29.9094 13.0633 29.6899 12.4931 29.2109L11.2067 30.7423ZM13.6089 31.3491C14.1541 32.3823 15.0716 33.2264 16.2563 33.6584L16.9414 31.7794C16.2406 31.5239 15.7005 31.0274 15.3778 30.4157L13.6089 31.3491ZM16.2573 33.6588C17.4427 34.0895 18.6882 34.0332 19.7706 33.5915L19.0147 31.7398C18.3749 32.001 17.6422 32.0341 16.9404 31.779L16.2573 33.6588ZM18.7203 33.4059C19.05 33.7053 19.4222 33.9607 19.8266 34.1613L20.7153 32.3696C20.4786 32.2522 20.2595 32.102 20.065 31.9253L18.7203 33.4059ZM38.0116 38.4994L31.2123 35.7829L30.4702 37.6402L37.2696 40.3567L38.0116 38.4994ZM29.9127 36.3404L27.1953 43.1398L29.0525 43.882L31.7698 37.0827L29.9127 36.3404ZM29.0429 43.1167L24.6481 32.8712L22.81 33.6597L27.2049 43.9051L29.0429 43.1167ZM24.1734 34.1613C24.5778 33.9607 24.95 33.7053 25.2796 33.4059L23.935 31.9253C23.7405 32.102 23.5214 32.2522 23.2847 32.3696L24.1734 34.1613ZM24.2294 33.5915C25.3118 34.0332 26.5573 34.0895 27.7427 33.6588L27.0596 31.779C26.3578 32.0341 25.6251 32.001 24.9853 31.7398L24.2294 33.5915ZM27.7437 33.6584C28.9284 33.2264 29.8459 32.3823 30.3911 31.3491L28.6222 30.4157C28.2995 31.0274 27.7594 31.5239 27.0586 31.7794L27.7437 33.6584ZM29.4688 31.8817C30.6362 31.9259 31.8269 31.5541 32.7933 30.7423L31.5069 29.2109C30.9367 29.6899 30.2368 29.9094 29.5445 29.8831L29.4688 31.8817ZM32.7922 30.7432C33.2903 30.326 33.6856 29.8284 33.9729 29.2842L32.2042 28.3505C32.036 28.6691 31.8039 28.9621 31.5079 29.21L32.7922 30.7432ZM32.1695 29.2116L36.7216 39.8223L38.5596 39.0338L34.0075 28.4231L32.1695 29.2116ZM36.1672 18.4131C36.536 18.9986 36.696 19.7146 36.5665 20.4485L38.536 20.7962C38.7554 19.5535 38.4823 18.3359 37.8594 17.3471L36.1672 18.4131ZM36.5665 20.4485C36.4368 21.183 36.0416 21.8011 35.4956 22.2246L36.7211 23.8051C37.6446 23.089 38.3168 22.0382 38.536 20.7962L36.5665 20.4485ZM35.1308 23.2255C35.2766 23.9021 35.1821 24.6299 34.8091 25.2762L36.5414 26.2758C37.1722 25.1827 37.332 23.946 37.0859 22.8042L35.1308 23.2255ZM34.8093 25.2758C34.4363 25.9216 33.854 26.3673 33.1953 26.5787L33.8067 28.483C34.9201 28.1255 35.9105 27.368 36.5411 26.2762L34.8093 25.2758ZM32.5102 27.3953C32.4649 27.7268 32.3621 28.0506 32.2037 28.3514L33.9733 29.2832C34.2412 28.7745 34.4151 28.2269 34.4918 27.6664L32.5102 27.3953ZM23.2824 32.3707C22.8984 32.5624 22.4632 32.6711 22 32.6711V34.6711C22.7795 34.6711 23.5199 34.4875 24.1757 34.1602L23.2824 32.3707ZM22 32.6711C21.5368 32.6711 21.1016 32.5624 20.7176 32.3707L19.8243 34.1602C20.4801 34.4875 21.2205 34.6711 22 34.6711V32.6711ZM11.7963 28.3514C11.6379 28.0506 11.5351 27.7269 11.4898 27.3953L9.50821 27.6664C9.58489 28.2269 9.75877 28.7745 10.0266 29.2832L11.7963 28.3514ZM10.8047 26.5787C10.146 26.3673 9.56374 25.9216 9.19068 25.2758L7.45885 26.2762C8.08955 27.368 9.07992 28.1255 10.1933 28.483L10.8047 26.5787ZM9.1909 25.2762C8.81794 24.6299 8.72339 23.9021 8.8692 23.2255L6.91408 22.8042C6.66802 23.946 6.82785 25.1827 7.45864 26.2758L9.1909 25.2762ZM8.50443 22.2246C7.95837 21.8011 7.56319 21.183 7.43353 20.4485L5.46398 20.7962C5.68322 22.0382 6.35539 23.089 7.27885 23.8051L8.50443 22.2246ZM7.43353 20.4485C7.30398 19.7146 7.46402 18.9986 7.83285 18.4131L6.1406 17.3471C5.5177 18.3359 5.24462 19.5535 5.46398 20.7962L7.43353 20.4485ZM7.83285 17.3471C7.46402 16.7616 7.30398 16.0455 7.43353 15.3116L5.46398 14.964C5.24462 16.2066 5.5177 17.4242 6.1406 18.4131L7.83285 17.3471ZM7.43353 15.3116C7.56319 14.5771 7.95837 13.959 8.50443 13.5355L7.27885 11.9551C6.35539 12.6711 5.68322 13.7219 5.46398 14.964L7.43353 15.3116ZM8.8692 12.5346C8.72336 11.8579 8.81802 11.1303 9.19068 10.4852L7.45885 9.4848C6.82777 10.5773 6.66805 11.8143 6.91408 12.956L8.8692 12.5346ZM9.1909 10.4848C9.56395 9.83836 10.1461 9.39285 10.8047 9.18142L10.1933 7.27715C9.07983 7.63463 8.08934 8.39224 7.45864 9.48517L9.1909 10.4848ZM11.4897 8.36514C11.5837 7.67976 11.9214 7.02832 12.4922 6.54997L11.2076 5.01704C10.2402 5.82775 9.66693 6.93631 9.50826 8.09343L11.4897 8.36514ZM12.4931 6.54919C13.0633 6.07024 13.7632 5.85077 14.4555 5.87701L14.5312 3.87844C13.3638 3.83421 12.1731 4.20599 11.2067 5.01781L12.4931 6.54919ZM15.3778 5.34442C15.7005 4.73276 16.2406 4.23626 16.9414 3.98073L16.2563 2.10175C15.0716 2.53372 14.1541 3.37784 13.6089 4.41102L15.3778 5.34442ZM16.9404 3.98111C17.6422 3.72607 18.3749 3.75918 19.0147 4.02036L19.7706 2.16868C18.6882 1.72689 17.4427 1.67062 16.2573 2.10137L16.9404 3.98111ZM20.0643 3.83542C20.5768 3.37082 21.2541 3.08905 22 3.08905V1.08905C20.7384 1.08905 19.587 1.56868 18.721 2.35362L20.0643 3.83542ZM22 3.08905C22.7459 3.08905 23.4232 3.37082 23.9357 3.83542L25.279 2.35362C24.413 1.56868 23.2616 1.08905 22 1.08905V3.08905ZM24.9853 4.02036C25.6251 3.75918 26.3578 3.72607 27.0596 3.98111L27.7427 2.10137C26.5573 1.67062 25.3118 1.72689 24.2294 2.16868L24.9853 4.02036ZM27.0586 3.98073C27.7594 4.23626 28.2995 4.73276 28.6222 5.34442L30.3911 4.41102C29.8459 3.37784 28.9284 2.53372 27.7437 2.10175L27.0586 3.98073ZM29.5445 5.87701C30.2368 5.85077 30.9367 6.07024 31.5069 6.54919L32.7933 5.01781C31.8269 4.20599 30.6362 3.83421 29.4688 3.87844L29.5445 5.87701ZM31.5078 6.54997C32.0786 7.02832 32.4163 7.67976 32.5103 8.36514L34.4917 8.09343C34.3331 6.93631 33.7598 5.82775 32.7924 5.01704L31.5078 6.54997ZM33.1953 9.18142C33.8539 9.39285 34.4361 9.83836 34.8091 10.4848L36.5414 9.48517C35.9107 8.39224 34.9202 7.63463 33.8067 7.27715L33.1953 9.18142ZM34.8093 10.4852C35.182 11.1303 35.2766 11.8579 35.1308 12.5346L37.0859 12.956C37.332 11.8143 37.1722 10.5773 36.5411 9.4848L34.8093 10.4852ZM35.4956 13.5355C36.0416 13.959 36.4368 14.5771 36.5665 15.3116L38.536 14.964C38.3168 13.7219 37.6446 12.6711 36.7211 11.9551L35.4956 13.5355ZM36.5665 15.3116C36.696 16.0455 36.536 16.7616 36.1672 17.3471L37.8594 18.4131C38.4823 17.4242 38.7554 16.2066 38.536 14.964L36.5665 15.3116Z" fill="url(#paint0_linear_4895_2988)"/>
      <path d="M31.444 17.6223C31.444 22.8382 27.2157 27.0665 21.9998 27.0665C16.784 27.0665 12.5557 22.8382 12.5557 17.6223C12.5557 12.4064 16.784 8.17809 21.9998 8.17809C27.2157 8.17809 31.444 12.4064 31.444 17.6223Z" stroke="url(#paint1_linear_4895_2988)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.5068 17.7261L20.8805 20.0998L25.4928 15.1447" stroke="url(#paint2_linear_4895_2988)" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  <defs>
    <linearGradient id="paint0_linear_4895_2988" x1="22.1099" y1="32.7439" x2="11.8454" y2="29.6118" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1F72DA"/>
      <stop offset="0.515625" stop-color="#A25BB6"/>
      <stop offset="1" stop-color="#E6AD19"/>
    </linearGradient>
    <linearGradient id="paint1_linear_4895_2988" x1="22.0663" y1="26.5119" x2="15.8688" y2="24.599" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1F72DA"/>
      <stop offset="0.515625" stop-color="#A25BB6"/>
      <stop offset="1" stop-color="#E6AD19"/>
    </linearGradient>
    <linearGradient id="paint2_linear_4895_2988" x1="22.0244" y1="19.9543" x2="19.9136" y2="19.0358" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1F72DA"/>
      <stop offset="0.515625" stop-color="#A25BB6"/>
      <stop offset="1" stop-color="#E6AD19"/>
    </linearGradient>
    <clipPath id="clip0_4895_2988">
      <rect width="44" height="44" fill="white" transform="translate(0 0.799988)"/>
    </clipPath>
  </defs>
</svg>
    `,
    star: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path
        d="M10.713 4.57848C10.6443 4.36718 10.4568 4.21759 10.236 4.1976L7.2237 3.92413L6.03322 1.13698C5.94532 0.932209 5.74533 0.800049 5.52273 0.800049C5.30013 0.800049 5.10006 0.932209 5.01272 1.13698L3.82224 3.92413L0.809461 4.1976C0.58861 4.21799 0.401595 4.36758 0.33249 4.57848C0.263782 4.78978 0.327235 5.02154 0.494267 5.16803L2.77133 7.16468L2.09994 10.1217C2.05081 10.3392 2.1352 10.564 2.31561 10.6944C2.41258 10.7649 2.52651 10.8 2.64084 10.8C2.73908 10.8 2.83741 10.7739 2.92522 10.7214L5.52273 9.16827L8.11976 10.7214C8.31028 10.8352 8.54984 10.8248 8.72985 10.6944C8.91025 10.564 8.99465 10.3392 8.94552 10.1217L8.27413 7.16468L10.5512 5.16803C10.7181 5.02154 10.7817 4.79026 10.713 4.57848Z"
        fill="#2B3E51"
      />
    </svg>
  `
    ),
    loaderIcon: (
      /* HTML */
      `
    <svg
      class="loader_bgr"
      xmlns="http://www.w3.org/2000/svg"
      width="196"
      height="196"
      viewBox="0 0 196 196"
      fill="none"
    >
      <circle cx="98" cy="98.0002" r="94" fill="url(#paint0_linear_4895_3006)" stroke="white" stroke-width="8" />
      <defs>
        <linearGradient
          id="paint0_linear_4895_3006"
          x1="98"
          y1="8.00018"
          x2="98"
          y2="188"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.575" stop-color="white" />
          <stop offset="0.785" stop-color="#F7F7F8" />
        </linearGradient>
      </defs>
    </svg>
  `
    ),
    loaderRotating: (
      /* HTML */
      `
    <svg class="rotating" xmlns="http://www.w3.org/2000/svg" width="149" height="148" viewBox="0 0 149 148" fill="none">
      <circle class="loader_cover" cx="74.5" cy="74" r="71" stroke="#F2F2F2" stroke-width="6" />
      <circle class="loader_cover_fill" cx="74.5" cy="74" r="71" stroke="#3E78BA" stroke-width="6" />
    </svg>
  `
    ),
    arrNext: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
      <path
        d="M17.0002 1.6C8.60546 1.6 1.80019 8.40527 1.80019 16.8C1.8002 25.1947 8.60547 32 17.0002 32C25.3949 32 32.2002 25.1947 32.2002 16.8C32.2002 8.40527 25.3949 1.6 17.0002 1.6Z"
        stroke="#3D78BA"
        stroke-width="2"
      />
      <path
        d="M10.5999 16.8001L23.3999 16.8001M23.3999 16.8001L17.3199 23.2001M23.3999 16.8001L17.3199 10.4001"
        stroke="#3D78BA"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  `
    ),
    arrPrev: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
      <path
        d="M16.9998 32.0001C25.3945 32.0001 32.1998 25.1948 32.1998 16.8001C32.1998 8.40537 25.3945 1.6001 16.9998 1.6001C8.60508 1.6001 1.7998 8.40537 1.7998 16.8001C1.7998 25.1948 8.60508 32.0001 16.9998 32.0001Z"
        stroke="#3D78BA"
        stroke-width="2"
      />
      <path
        d="M23.4001 16.8H10.6001M10.6001 16.8L16.6801 10.4M10.6001 16.8L16.6801 23.2"
        stroke="#3D78BA"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  `
    ),
    secureIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
      <g clip-path="url(#clip0_4895_3128)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.0728 1.62819L15.7888 3.03733C16.0858 3.09831 16.35 3.25251 16.5239 3.49266C16.6937 3.727 16.7572 4.01575 16.7081 4.31261V9.85185C16.7081 12.3224 15.4544 14.6213 13.3026 15.9475L13.3017 15.948L10.1624 17.8724L10.1449 17.8811C9.71214 18.0944 9.20979 18.125 8.79992 17.8591L5.68137 15.9475C3.52955 14.6213 2.27588 12.3224 2.27588 9.85185V4.27551C2.27588 3.63719 2.77784 3.16103 3.27072 3.03951L8.99552 1.62819C9.32702 1.52368 9.74132 1.52368 10.0728 1.62819ZM12.7473 8.19351C13.0769 7.86848 13.0769 7.34151 12.7473 7.01648C12.4177 6.69145 11.8833 6.69145 11.5537 7.01648L8.77457 9.75713L7.68336 8.68103C7.35376 8.35598 6.81938 8.35598 6.48978 8.68103C6.16018 9.00608 6.16018 9.53303 6.48978 9.85808L8.17779 11.5226C8.50734 11.8477 9.04172 11.8477 9.37134 11.5226L12.7473 8.19351Z"
          fill="#2A3653"
        />
      </g>
      <defs>
        <clipPath id="clip0_4895_3128">
          <rect width="18" height="18" fill="white" transform="translate(0.5 0.799805)" />
        </clipPath>
      </defs>
    </svg>
  `
    ),
    googleIcon: (
      /* HTML */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path
        d="M16.8458 9.60604C16.8458 9.07096 16.8017 8.53787 16.7094 8.01074H9.25439V11.0303H13.5233C13.3468 12.005 12.7774 12.8663 11.9453 13.4133V15.3746H14.4938C15.9856 14.012 16.8458 11.993 16.8458 9.60604Z"
        fill="#4285F4"
      />
      <path
        d="M9.25489 17.2701C11.3883 17.2701 13.1849 16.5759 14.4943 15.3764L11.9458 13.4151C11.2359 13.8925 10.3236 14.1651 9.25489 14.1651C7.19363 14.1651 5.44316 12.7866 4.81757 10.9287H2.19287V12.9497C3.53429 15.5992 6.26727 17.2701 9.25489 17.2701Z"
        fill="#34A853"
      />
      <path
        d="M4.81938 10.929C4.48854 9.95628 4.48854 8.90004 4.81938 7.92735V5.90637H2.19469C1.07182 8.12229 1.07182 10.734 2.19469 12.95L4.81938 10.929Z"
        fill="#FBBC04"
      />
      <path
        d="M9.25489 4.69111C10.3818 4.67321 11.4705 5.09491 12.2866 5.8667L14.5444 3.62891C13.1127 2.29617 11.2179 1.56417 9.25489 1.58605C6.26727 1.58605 3.53429 3.25892 2.19287 5.90648L4.81757 7.92746C5.44316 6.06959 7.19363 4.69111 9.25489 4.69111Z"
        fill="#EA4335"
      />
    </svg>
  `
    )
  }, k = [
    {
      svgIcon: `${r.star}${r.star}${r.star}${r.star}${r.star}`,
      title: "Leyton",
      subTitle: "University of Alberta",
      txt: `"After enrolling, I no longer had to worry about my next steps. GrantMe's team was always there to guide me."`,
      receivedTxt: "Received",
      price: "$140,500"
    },
    {
      svgIcon: `${r.star}${r.star}${r.star}${r.star}${r.star}`,
      title: "Lauren",
      subTitle: "Western University",
      txt: '"GrantMe did not just improve my writing abilities and applications but also equipped me with the skills to be a successful student"',
      receivedTxt: "Received",
      price: "$65,000"
    },
    {
      title: "Ashleigh",
      subTitle: "Queen’s University",
      svgIcon: `${r.star}${r.star}${r.star}${r.star}${r.star}`,
      txt: "“Everything that I could possibly be worrying about with university and saving money ... have been answered ... it’s been tons of fun!”",
      receivedTxt: "Received",
      price: "$30,000"
    },
    {
      svgIcon: `${r.star}${r.star}${r.star}${r.star}${r.star}`,
      title: "Salwa",
      subTitle: "UBC",
      txt: '"I have realized financially that I do have the ability to control my future. I can take responsibility for my finances"',
      receivedTxt: "Received",
      price: "$75,000"
    }
  ], M = (
    /* HTML */
    `
  <div class="guarantee_block">
    <div class="guarantee_block_container">
      ${r.guaranteeIcon}
      <p>
        Qualified GrantMe students are guaranteed scholarship winnings and admission to their top-choice universities.
      </p>
    </div>
  </div>
`
  ), Z = (a) => (
    /* HTML */
    `
    <section class="new_loader_block">
      ${M}
      <div class="loader_timing_box">
        ${r.loaderIcon} ${r.loaderRotating}
        <div class="percentage"></div>
      </div>
      <div class="loading_txt_wrapper">
        ${a.map((n) => `<p>${n}<span>.</span><span>.</span><span>.</span></p>`).join("")}
      </div>
    </section>
  `
  ), S = (
    /* HTML */
    `
  <div class="last_steps_wrapper">
    <div class="email_name_box">
      <h2 class="last_steps_main_title">Your results are ready!</h2>
      <p class="last_steps_main_txt">
        ${window.innerWidth < 768 ? "Unlock your chances of admission and scholarship funding by providing the information below." : "Unlock your chances of admission and scholarship funding by signing in below."}
      </p>
      <button id="continueValidationBtn">Continue</button>
      <div class="safe_and_secure_box">
        ${r.secureIcon}
        <span>Your data is safe and secure. No ads or spam</span>
      </div>
      <p class="or_txt"><span>OR</span></p>
      <div id="btnSignInBlock">
        <div
          id="g_id_onload"
          data-client_id="569574819297-i3o28u5doob33c39p0aqd8slo5jg4rc0.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="onSignIn"
          data-auto_prompt="false"
        ></div>

        <div
          class="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-locale="en-US"
          data-logo_alignment="center"
          data-width="${window.innerWidth < 768 ? "300" : "900"}"
        ></div>
      </div>
      <p class="new_footnote">
        By clicking, “Continue”, “Sign in with Google” I Agree to GrantMe’s
        <a
          href="https://grantme.ca/privacy-policy/?__hstc=166450401.8cd64e907f4dabce6c645e168a8c017d.1713536092845.1713536092845.1713536092845.1&amp;__hssc=166450401.9.1713536092846&amp;__hsfp=1735953969"
          style="color:#3e78ba"
          target="_blank"
          >Privacy Policy</a
        >,
        <a
          href="https://grantme.ca/terms-of-use/?__hstc=166450401.8cd64e907f4dabce6c645e168a8c017d.1713536092845.1713536092845.1713536092845.1&amp;__hssc=166450401.9.1713536092846&amp;__hsfp=1735953969"
          style="color:#3e78ba"
          target="_blank"
          >Terms of Use</a
        >
        and consent to receiving promotional messages.
      </p>
    </div>
    <div class="phone_box is_hidden">
      <h2 class="last_steps_main_title">Almost done!</h2>
      <p class="last_steps_main_txt">
        Please provide your mobile phone number below to receive personalised content and offers based on your
        assessment results, totally free.
      </p>
      <button id="seeMyResultsBtn" class="">See My Results</button>
    </div>
  </div>
`
  ), B = (
    /* HTML */
    `
  <div class="new_reviews_block">
    <h2 class="new_reviews_main_title">Trusted by over 20,000 students</h2>
    <p class="new_reviews_main_txt">who've secured funding and applied to the university of their dreams.</p>
    <div class="new_reviews_list">
      ${k.map((a, n) => (
      /* HTML */
      `
            <div class="new_reviews_item ${a.title.toLocaleLowerCase()}">
              <div class="stars_wrapper">${a.svgIcon}</div>
              <h3 class="new_reviews_item_title">${a.title}</h3>
              <h4 class="new_reviews_item_subtitle">${a.subTitle}</h4>
              <p class="new_reviews_item_txt">${a.txt}</p>
              <div class="received_box">
                <span class="received_box_txt">${a.receivedTxt}</span>
                <span class="received_box_price">${a.price}</span>
              </div>
            </div>
          `
    )).join("")}
    </div>
  </div>
`
  );
  v({ name: "Contact info imrovement", dev: "SKh" }), y("exp_improve_contact");
  const I = window.innerWidth < 768 ? "mobile" : "desktop";
  class A {
    constructor(n) {
      this.device = n, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${C}</style>`), this.renderNewFormStep(), this.initLoaderStep(), this.initSliderReviews(), this.clickInputs(), this.clickContinueBtn(), this.clickSeeMyResultsBtn(), this.clickGoogleSignInBtn(), this.visibleHandler();
      const n = document.createElement("script");
      n.src = "https://accounts.google.com/gsi/client", n.async = !0, document.head.appendChild(n);
    }
    initLoaderStep() {
      h("#edit-what-is-your-family-s-approximate-yearly-household-income- label").forEach((n) => {
        n.addEventListener("click", (t) => {
          console.log("#edit-what-is-your-family-s-approximate-yearly-household-income- label", t.target), setTimeout(() => {
            var i, o, d;
            (i = e(".dialog-off-canvas-main-canvas")) == null || i.classList.add("is_loader"), (o = e(".dialog-off-canvas-main-canvas")) == null || o.classList.add("is_loader_active"), (d = e('section.form-wrapper.webform-card[data-title="What is your contact info?"]')) == null || d.classList.add("is_loader"), this.renderNewLoaderBlock(), this.createLoader(), this.renderReviewsBlock(), this.changeLogoImg();
          }, 300);
        });
      });
    }
    renderNewFormStep() {
      c('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then((n) => {
        e(".last_steps_wrapper") || e(
          'section.form-wrapper.webform-card[data-title="What is your contact info?"] .webform-card-wrapper'
        ).insertAdjacentHTML("afterbegin", S);
      }), c(".email_name_box").then((n) => {
        const t = e(".form-item-email-address"), i = e(".form-item-email-address label:not(.error)"), o = e(".form-item-first-name"), d = e(".form-item-first-name label:not(.error)"), p = e("#edit-first-name");
        let s = e(".form-item-last-name #edit-last-name");
        d.textContent !== "First Name" && (d.textContent = "First Name"), i.textContent !== "Email" && (i.textContent = "Email"), s.value !== "CRO test" && (s.value = "CRO test"), p.placeholder !== "John" && (p.placeholder = "John"), e("#continueValidationBtn").insertAdjacentElement("beforebegin", o), e("#continueValidationBtn").insertAdjacentElement("beforebegin", t);
        let l = e(".benefits"), _ = e(".benefits > div > p");
        _.textContent !== "What you’ll get:" && (_.textContent = "What you’ll get:"), e(".email_name_box").insertAdjacentElement("beforeend", l);
      }), c(".phone_box").then((n) => {
        let t = e(".form-type-tel"), i = e(".form-type-tel label:not(.error)"), o = e("#edit-mobile-number");
        i.textContent !== "Mobile phone number" && (i.textContent = "Mobile phone number"), o.placeholder !== "(___) ___-____" && (o.placeholder = "(___) ___-____"), e(".phone_box #seeMyResultsBtn").insertAdjacentElement("beforebegin", t);
      });
    }
    renderNewLoaderBlock() {
      c('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then((n) => {
        const t = h(".loading-data li"), i = Array.from(t, (o) => o.textContent);
        e(".new_loader_block") || e('section.form-wrapper.webform-card[data-title="What is your contact info?"]').insertAdjacentHTML(
          "beforebegin",
          Z(i)
        );
      });
    }
    createLoader() {
      const i = Math.round(12e3 / 16.666666666666668);
      let o = 0;
      c(".new_loader_block").then((d) => {
        const p = e(".new_loader_block"), s = e(".loader_cover"), l = e(".loader_cover_fill"), _ = e(".percentage"), g = s.r.baseVal.value * 2 * Math.PI;
        l.style.strokeDasharray = `${g} ${g}`, l.style.strokeDashoffset = `${g}`;
        const j = (w) => {
          const b = g - w / 100 * g;
          l.style.strokeDashoffset = b, _.textContent = `${Math.round(w)}%`;
        }, u = () => {
          var b, x;
          const w = o / i * 100;
          j(w), w >= 100 ? (p.style.display = "none", e('section.form-wrapper.webform-card[data-title="What is your contact info?"]') && e('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.contains(
            "is_loader"
          ) && e('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.remove(
            "is_loader"
          ), (b = e(".dialog-off-canvas-main-canvas")) != null && b.classList.contains("is_loader_active") && ((x = e(".dialog-off-canvas-main-canvas")) == null || x.classList.remove("is_loader_active")), e(".dialog-off-canvas-main-canvas") && !e(".dialog-off-canvas-main-canvas").classList.contains("is_loader") && e(".dialog-off-canvas-main-canvas").classList.add("is_loader"), this.renderReviewsBlock()) : o < i && (o++, requestAnimationFrame(u));
        };
        u();
        const F = Array.from(h(".loading_txt_wrapper p"));
        this.animateLoadingText(F);
      });
    }
    animateLoadingText(n) {
      let t = 0, i = null;
      (() => {
        n[t].style.display = "block", t++, i = setInterval(() => {
          n[t - 1].style.display = "none", t < n.length && (n[t].style.display = "block"), t >= n.length && (n[t - 1].style.display = "block", clearInterval(i)), t++;
        }, 12e3 / n.length);
      })();
    }
    changeLogoImg() {
      e(".dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img") && e(".dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img").src !== "/sites/default/files/inline-images/GrantMe_Colour_Full_Logo_2X_0.png" && (e(".dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img").src = "/sites/default/files/inline-images/GrantMe_Colour_Full_Logo_2X_0.png");
    }
    // SliderReviews
    renderReviewsBlock() {
      !e(".new_reviews_block") && e(".testimonials") && e(".testimonials").insertAdjacentHTML("afterbegin", B);
    }
    initSliderReviews() {
      L([
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      ]).then(async () => {
        let n = setInterval(() => {
          if (typeof jQuery(".new_reviews_list").slick == "function" && e(".new_reviews_list")) {
            clearInterval(n);
            let o = jQuery(".new_reviews_list").on("init", function() {
              jQuery(this).css("visibility", "visible");
            }).slick({
              slidesToShow: 3.92,
              slidesToScroll: 1,
              initialSlide: 0,
              adaptiveHeight: !0,
              autoplay: !0,
              autoplaySpeed: 2e3,
              prevArrow: `<div class="prev_btn slider_arrow">${r.arrPrev}</div>`,
              nextArrow: `<div class="next_btn slider_arrow">${r.arrNext}</div>`,
              responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            }), d = setInterval(() => {
              if (typeof $ == "function") {
                clearInterval(d);
                let p = $(".new_reviews_list").find(".slick-slide").last().clone();
                $(".new_reviews_list").slick("slickAdd", p);
              }
            }, 300);
            o.on("swipe", function(p, s, l) {
              m("exp_improve_contact_swipe_01", l, "Swipe slider", "Contact info Step 1 Review");
            }), h(".slider_arrow").forEach((p) => {
              p.addEventListener("click", (s) => {
                let l = null;
                s.currentTarget.classList.contains("prev_btn") ? l = "left" : s.currentTarget.classList.contains("next_btn") && (l = "right"), m("exp_improve_contact_arrows_01", l || "", "Arrows", "Contact info Step 1 Review");
              });
            });
          }
        }, 400);
      });
    }
    // GoogleSignIn
    clickGoogleSignInBtn() {
      window.onSignIn = function(n) {
        m("exp_improve_contact_button_03", "Google", "Button", "Your results are ready! Step 2");
        let t = n.credential.split("."), i = JSON.parse(atob(t[1]));
        console.log(i);
        let o = i.given_name, d = i.email;
        e("#edit-first-name") && (e("#edit-first-name").value = o), e("#edit-email-address") && (e("#edit-email-address").value = d), setTimeout(() => {
          e("#edit-first-name").value !== "" && e("#edit-email-address").value !== "" && (e(".email_name_box").classList.add("is_hidden"), e(".phone_box").classList.contains("is_hidden") && e(".phone_box").classList.remove("is_hidden"), e(".new_reviews_block").classList.contains("is_hidden") || e(".new_reviews_block").classList.add("is_hidden"));
        }, 500);
      };
    }
    //click on ----> Continue | SeeMyResults | input edit-first-name | input edit-email-address | input edit-mobile-number
    clickContinueBtn() {
      c("#continueValidationBtn").then((n) => {
        e("#continueValidationBtn").addEventListener("click", (t) => {
          t.preventDefault(), this.validationFormEmailNameBox(e("#edit-first-name"), !0), this.validationFormEmailNameBox(e("#edit-email-address"), !0), m("exp_improve_contact_button_01", "Continue", "Button", "Your results are ready! Step 2");
        });
      });
    }
    clickInputs() {
      c('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then((n) => {
        h('section.form-wrapper.webform-card[data-title="What is your contact info?"] input').forEach((t) => {
          t.addEventListener("input", (i) => {
            i.target.getAttribute("name") !== "mobile_number" ? this.validationFormEmailNameBox(i.target) : setTimeout(() => {
              this.validationFormPhoneBox(i.target);
            }, 400);
          }), t.addEventListener("change", (i) => {
            i.target.getAttribute("name") === "mobile_number" && m("exp_improve_contact_input_01", "Mobile phone number", "Input", "Almost done! Step 3");
          });
        });
      });
    }
    clickSeeMyResultsBtn() {
      c("#seeMyResultsBtn").then((n) => {
        e("#seeMyResultsBtn").addEventListener("click", (t) => {
          t.preventDefault(), m("exp_improve_contact_button_04", "See My Results", "Button", "Almost done! Step 3"), this.validationFormPhoneBox(e("#edit-mobile-number"), !0);
        });
      });
    }
    validationFormEmailNameBox(n, t = !1) {
      var d, p;
      let i = e("#edit-first-name").value.match(/\S+/), o = e("#edit-email-address").value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
      if (n.getAttribute("name") === "first_name")
        if (i == null) {
          e("#edit-first-name-error") || n.insertAdjacentHTML(
            "afterend",
            '<label id="edit-first-name-error" class="error" for="edit-first-name">Please Enter First Name</label>'
          );
          let s = setInterval(() => {
            e("#edit-first-name-error") && e("#edit-first-name-error").textContent !== "Please Enter First Name" && (clearInterval(s), e("#edit-first-name-error").textContent = "Please Enter First Name");
          }, 100);
        } else
          (d = e("#edit-first-name-error")) == null || d.remove();
      if (n.getAttribute("name") === "email_address")
        if (o === null) {
          console.log("inputValueEmail === null"), e("#edit-email-address-error") || n.insertAdjacentHTML(
            "afterend",
            '<label id="edit-email-address-error" class="error" for="edit-email-address">Please Enter Valid Email Address</label>'
          );
          let s = setInterval(() => {
            e("#edit-email-address-error") && e("#edit-email-address-error").textContent !== "Please Enter Valid Email Address" && (clearInterval(s), e("#edit-email-address-error").textContent = "Please Enter Valid Email Address");
          }, 100);
        } else
          console.log("$el(`#edit-email-address-error`)?.remove()"), (p = e("#edit-email-address-error")) == null || p.remove();
      o !== null && i !== null && t && (e(".email_name_box").classList.add("is_hidden"), e(".phone_box").classList.contains("is_hidden") && e(".phone_box").classList.remove("is_hidden"), e(".new_reviews_block").classList.contains("is_hidden") || e(".new_reviews_block").classList.add("is_hidden"));
    }
    validationFormPhoneBox(n, t = !1) {
      var o;
      let i = e("#edit-mobile-number").value.match(/^\(\d{3}\) \d{3}-\d{4}$/);
      if (n.getAttribute("name") === "mobile_number")
        if (i == null) {
          e("#edit-mobile-number-error") || n.insertAdjacentHTML(
            "afterend",
            '<label id="edit-mobile-number-error" class="error" for="edit-mobile-number">Please Enter Mobile Number</label>'
          );
          let d = setInterval(() => {
            e("#edit-mobile-number-error") && e("#edit-mobile-number-error").textContent !== "Please Enter Mobile Number" && (clearInterval(d), e("#edit-mobile-number-error").textContent = "Please Enter Mobile Number");
          }, 100);
        } else
          (o = e("#edit-mobile-number-error")) == null || o.remove(), t && e(".webform-button--submit").click();
    }
    visibleHandler() {
      c(".guarantee_block").then((n) => {
        f(
          ".guarantee_block",
          "exp_improve_contact_banner_01",
          "Banner",
          "Contact info Step 1 Qualified GrantMe students are guaranteed scholarship winnings"
        );
      }), c(".loader_timing_box").then((n) => {
        f(
          ".loader_timing_box",
          "exp_improve_contact_block_01",
          "Block",
          "Contact infoStep 1 Searching for scholarship opportunities"
        );
      }), c(".leyton").then((n) => {
        f(".leyton", "exp_improve_contact_review_01", "Leyton - Review", "Contact info Step 1");
      }), c(".lauren").then((n) => {
        f(".lauren", "exp_improve_contact_review_01", "Lauren - Review", "Contact info Step 1");
      }), c(".ashleigh").then((n) => {
        f(".ashleigh", "exp_improve_contact_review_01", "Ashleigh - Review", "Contact info Step 1");
      }), c(".salwa").then((n) => {
        f(".salwa", "exp_improve_contact_review_01", "Salwa- Review", "Contact info Step 1");
      });
    }
  }
  c("#edit-loading-screen").then((a) => {
    new A(I);
  });
  let E = setTimeout(() => {
    location.pathname.match("assessment-results") && (clearInterval(E), c("#newLastName").then((a) => {
      e("#newLastName").value === "CRO test" && (e("#newLastName").value = "");
    }));
  }, 1e3);
})();
//# sourceMappingURL=index.js.map
