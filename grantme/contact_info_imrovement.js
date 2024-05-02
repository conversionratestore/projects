(function() {
  "use strict";
  const ge = (Q, H, U, K = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: Q,
      event_desc: H,
      event_type: U,
      event_loc: K
    }), console.log(`Event: ${Q} | ${H} | ${U} | ${K}`);
  }, Oe = ({ name: Q, dev: H }) => {
    console.log(
      `%c EXP: ${Q} (DEV: ${H})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, ke = (Q) => document.querySelectorAll(Q), j = (Q) => document.querySelector(Q), Te = async (Q) => {
    const H = (U) => new Promise((K, X) => {
      const re = U.split(".").pop();
      if (re === "js") {
        if (Array.from(document.scripts).map((w) => w.src.toLowerCase()).includes(U.toLowerCase()))
          return console.log(`Script ${U} allready downloaded!`), K("");
        const k = document.createElement("script");
        k.src = U, k.onload = K, k.onerror = X, document.head.appendChild(k);
      } else if (re === "css") {
        if (Array.from(document.styleSheets).map((w) => {
          var p;
          return (p = w.href) == null ? void 0 : p.toLowerCase();
        }).includes(U.toLowerCase()))
          return console.log(`Style ${U} allready downloaded!`), K("");
        const k = document.createElement("link");
        k.rel = "stylesheet", k.href = U, k.onload = K, k.onerror = X, document.head.appendChild(k);
      }
    });
    for (const U of Q)
      await H(U), console.log(`Loaded librari ${U}`);
    console.log("All libraries loaded!");
  }, Ae = (Q) => {
    let H = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(H), window.clarity("set", Q, "variant_1"));
    }, 1e3);
  }, ye = (Q, H, U, K, X = 3e3, re = 0.5) => {
    let G, k;
    if (G = new IntersectionObserver(
      function(w) {
        w[0].isIntersecting === !0 ? k = setTimeout(() => {
          ge(
            H,
            w[0].target.dataset.visible || K || "",
            "Visibility",
            U
          ), G.disconnect();
        }, X) : clearTimeout(k);
      },
      { threshold: [re] }
    ), typeof Q == "string") {
      const w = document.querySelector(Q);
      w && G.observe(w);
    } else
      G.observe(Q);
  };
  function fe(Q) {
    return new Promise((H) => {
      if (document.querySelector(Q))
        return H(document.querySelector(Q));
      const U = new MutationObserver(() => {
        document.querySelector(Q) && (H(document.querySelector(Q)), U.disconnect());
      });
      U.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  (function(Q) {
    Q = Q === void 0 ? {} : Q;
    let H, U, K, X, re = (Q == null ? void 0 : Q.delay) || 50;
    function G() {
      H = null, X = 0;
    }
    return G(), function() {
      return U = window.scrollY, H != null && (X = U - H), H = U, clearTimeout(K), K = setTimeout(G, re), X;
    };
  })();
  const Be = `.new_loader_block {
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
  font-family: "Lato", sans-serif;
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
  font-family: "Lato", sans-serif;
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
  font-family: "Lato", sans-serif;
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
  font-family: "Lato", sans-serif;
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
  font-family: "Lato", sans-serif;
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
}/*# sourceMappingURL=main.css.map */`, ae = {
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
  }, je = [
    {
      svgIcon: `${ae.star}${ae.star}${ae.star}${ae.star}${ae.star}`,
      title: "Leyton",
      subTitle: "University of Alberta",
      txt: `"After enrolling, I no longer had to worry about my next steps. GrantMe's team was always there to guide me."`,
      receivedTxt: "Received",
      price: "$140,500"
    },
    {
      svgIcon: `${ae.star}${ae.star}${ae.star}${ae.star}${ae.star}`,
      title: "Lauren",
      subTitle: "Western University",
      txt: '"GrantMe did not just improve my writing abilities and applications but also equipped me with the skills to be a successful student"',
      receivedTxt: "Received",
      price: "$65,000"
    },
    {
      title: "Ashleigh",
      subTitle: "Queen’s University",
      svgIcon: `${ae.star}${ae.star}${ae.star}${ae.star}${ae.star}`,
      txt: "“Everything that I could possibly be worrying about with university and saving money ... have been answered ... it’s been tons of fun!”",
      receivedTxt: "Received",
      price: "$30,000"
    },
    {
      svgIcon: `${ae.star}${ae.star}${ae.star}${ae.star}${ae.star}`,
      title: "Salwa",
      subTitle: "UBC",
      txt: '"I have realized financially that I do have the ability to control my future. I can take responsibility for my finances"',
      receivedTxt: "Received",
      price: "$75,000"
    }
  ], De = (
    /* HTML */
    `
  <div class="guarantee_block">
    <div class="guarantee_block_container">
      ${ae.guaranteeIcon}
      <p>
        Qualified GrantMe students are guaranteed scholarship winnings and admission to their top-choice universities.
      </p>
    </div>
  </div>
`
  ), Fe = (Q) => (
    /* HTML */
    `
    <section class="new_loader_block">
      ${De}
      <div class="loader_timing_box">
        ${ae.loaderIcon} ${ae.loaderRotating}
        <div class="percentage"></div>
      </div>
      <div class="loading_txt_wrapper">
        ${Q.map((H) => `<p>${H}<span>.</span><span>.</span><span>.</span></p>`).join("")}
      </div>
    </section>
  `
  ), Ie = (
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
        ${ae.secureIcon}
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
  ), Re = (
    /* HTML */
    `
  <div class="new_reviews_block">
    <h2 class="new_reviews_main_title">Trusted by over 20,000 students</h2>
    <p class="new_reviews_main_txt">who've secured funding and applied to the university of their dreams.</p>
    <div class="new_reviews_list">
      ${je.map((Q, H) => (
      /* HTML */
      `
            <div class="new_reviews_item ${Q.title.toLocaleLowerCase()}">
              <div class="stars_wrapper">${Q.svgIcon}</div>
              <h3 class="new_reviews_item_title">${Q.title}</h3>
              <h4 class="new_reviews_item_subtitle">${Q.subTitle}</h4>
              <p class="new_reviews_item_txt">${Q.txt}</p>
              <div class="received_box">
                <span class="received_box_txt">${Q.receivedTxt}</span>
                <span class="received_box_price">${Q.price}</span>
              </div>
            </div>
          `
    )).join("")}
    </div>
  </div>
`
  );
  var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Ve(Q) {
    return Q && Q.__esModule && Object.prototype.hasOwnProperty.call(Q, "default") ? Q.default : Q;
  }
  var Ce = { exports: {} };
  /*!
   * dist/inputmask
   * https://github.com/RobinHerbots/Inputmask
   * Copyright (c) 2010 - 2023 Robin Herbots
   * Licensed under the MIT license
   * Version: 5.0.8
   */
  (function(Q, H) {
    (function(U, K) {
      Q.exports = K();
    })(typeof self < "u" ? self : Ne, function() {
      return function() {
        var U = {
          8741: function(G, k) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = void 0;
            var w = !(typeof window > "u" || !window.document || !window.document.createElement);
            k.default = w;
          },
          3976: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = void 0;
            var p = w(2839), _ = {
              _maxTestPos: 500,
              placeholder: "_",
              optionalmarker: ["[", "]"],
              quantifiermarker: ["{", "}"],
              groupmarker: ["(", ")"],
              alternatormarker: "|",
              escapeChar: "\\",
              mask: null,
              regex: null,
              oncomplete: function() {
              },
              onincomplete: function() {
              },
              oncleared: function() {
              },
              repeat: 0,
              greedy: !1,
              autoUnmask: !1,
              removeMaskOnSubmit: !1,
              clearMaskOnLostFocus: !0,
              insertMode: !0,
              insertModeVisual: !0,
              clearIncomplete: !1,
              alias: null,
              onKeyDown: function() {
              },
              onBeforeMask: null,
              onBeforePaste: function(L, B) {
                return typeof B.onBeforeMask == "function" ? B.onBeforeMask.call(this, L, B) : L;
              },
              onBeforeWrite: null,
              onUnMask: null,
              showMaskOnFocus: !0,
              showMaskOnHover: !0,
              onKeyValidation: function() {
              },
              skipOptionalPartCharacter: " ",
              numericInput: !1,
              rightAlign: !1,
              undoOnEscape: !0,
              radixPoint: "",
              _radixDance: !1,
              groupSeparator: "",
              keepStatic: null,
              positionCaretOnTab: !0,
              tabThrough: !1,
              supportsInputType: ["text", "tel", "url", "password", "search"],
              ignorables: [p.keys.Backspace, p.keys.Tab, p.keys.Pause, p.keys.Escape, p.keys.PageUp, p.keys.PageDown, p.keys.End, p.keys.Home, p.keys.ArrowLeft, p.keys.ArrowUp, p.keys.ArrowRight, p.keys.ArrowDown, p.keys.Insert, p.keys.Delete, p.keys.ContextMenu, p.keys.F1, p.keys.F2, p.keys.F3, p.keys.F4, p.keys.F5, p.keys.F6, p.keys.F7, p.keys.F8, p.keys.F9, p.keys.F10, p.keys.F11, p.keys.F12, p.keys.Process, p.keys.Unidentified, p.keys.Shift, p.keys.Control, p.keys.Alt, p.keys.Tab, p.keys.AltGraph, p.keys.CapsLock],
              isComplete: null,
              preValidation: null,
              postValidation: null,
              staticDefinitionSymbol: void 0,
              jitMasking: !1,
              nullable: !0,
              inputEventOnly: !1,
              noValuePatching: !1,
              positionCaretOnClick: "lvp",
              casing: null,
              inputmode: "text",
              importDataAttributes: !0,
              shiftPositions: !0,
              usePrototypeDefinitions: !0,
              validationEventTimeOut: 3e3,
              substitutes: {}
            };
            k.default = _;
          },
          7392: function(G, k) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = void 0, k.default = {
              9: {
                validator: "[0-9０-９]",
                definitionSymbol: "*"
              },
              a: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                definitionSymbol: "*"
              },
              "*": {
                validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
              }
            };
          },
          253: function(G, k) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = function(w, p, _) {
              if (_ === void 0)
                return w.__data ? w.__data[p] : null;
              w.__data = w.__data || {}, w.__data[p] = _;
            };
          },
          3776: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.Event = void 0, k.off = function(c, a) {
              var e, o;
              return m(this[0]) && c && (e = this[0].eventRegistry, o = this[0], c.split(" ").forEach(function(n) {
                var t = R(n.split("."), 2);
                (function(i, l) {
                  var s, d, r = [];
                  if (i.length > 0)
                    if (a === void 0)
                      for (s = 0, d = e[i][l].length; s < d; s++)
                        r.push({
                          ev: i,
                          namespace: l && l.length > 0 ? l : "global",
                          handler: e[i][l][s]
                        });
                    else
                      r.push({
                        ev: i,
                        namespace: l && l.length > 0 ? l : "global",
                        handler: a
                      });
                  else if (l.length > 0) {
                    for (var u in e)
                      for (var g in e[u])
                        if (g === l)
                          if (a === void 0)
                            for (s = 0, d = e[u][g].length; s < d; s++)
                              r.push({
                                ev: u,
                                namespace: g,
                                handler: e[u][g][s]
                              });
                          else
                            r.push({
                              ev: u,
                              namespace: g,
                              handler: a
                            });
                  }
                  return r;
                })(t[0], t[1]).forEach(function(i) {
                  var l = i.ev, s = i.handler;
                  (function(d, r, u) {
                    if (d in e == 1)
                      if (o.removeEventListener ? o.removeEventListener(d, u, !1) : o.detachEvent && o.detachEvent("on".concat(d), u), r === "global")
                        for (var g in e[d])
                          e[d][g].splice(e[d][g].indexOf(u), 1);
                      else
                        e[d][r].splice(e[d][r].indexOf(u), 1);
                  })(l, i.namespace, s);
                });
              })), this;
            }, k.on = function(c, a) {
              if (m(this[0])) {
                var e = this[0].eventRegistry, o = this[0];
                c.split(" ").forEach(function(n) {
                  var t = R(n.split("."), 2), i = t[0], l = t[1];
                  (function(s, d) {
                    o.addEventListener ? o.addEventListener(s, a, !1) : o.attachEvent && o.attachEvent("on".concat(s), a), e[s] = e[s] || {}, e[s][d] = e[s][d] || [], e[s][d].push(a);
                  })(i, l === void 0 ? "global" : l);
                });
              }
              return this;
            }, k.trigger = function(c) {
              var a = arguments;
              if (m(this[0]))
                for (var e = this[0].eventRegistry, o = this[0], n = typeof c == "string" ? c.split(" ") : [c.type], t = 0; t < n.length; t++) {
                  var i = n[t].split("."), l = i[0], s = i[1] || "global";
                  if (document !== void 0 && s === "global") {
                    var d, r = {
                      bubbles: !0,
                      cancelable: !0,
                      composed: !0,
                      detail: arguments[1]
                    };
                    if (document.createEvent) {
                      try {
                        l === "input" ? (r.inputType = "insertText", d = new InputEvent(l, r)) : d = new CustomEvent(l, r);
                      } catch {
                        (d = document.createEvent("CustomEvent")).initCustomEvent(l, r.bubbles, r.cancelable, r.detail);
                      }
                      c.type && (0, _.default)(d, c), o.dispatchEvent(d);
                    } else
                      (d = document.createEventObject()).eventType = l, d.detail = arguments[1], c.type && (0, _.default)(d, c), o.fireEvent("on" + d.eventType, d);
                  } else if (e[l] !== void 0) {
                    arguments[0] = arguments[0].type ? arguments[0] : B.default.Event(arguments[0]), arguments[0].detail = arguments.slice(1);
                    var u = e[l];
                    (s === "global" ? Object.values(u).flat() : u[s]).forEach(function(g) {
                      return g.apply(o, a);
                    });
                  }
                }
              return this;
            };
            var p, _ = h(w(600)), L = h(w(9380)), B = h(w(4963)), D = h(w(8741));
            function R(c, a) {
              return function(e) {
                if (Array.isArray(e))
                  return e;
              }(c) || function(e, o) {
                var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
                if (n != null) {
                  var t, i, l, s, d = [], r = !0, u = !1;
                  try {
                    if (l = (n = n.call(e)).next, o === 0) {
                      if (Object(n) !== n)
                        return;
                      r = !1;
                    } else
                      for (; !(r = (t = l.call(n)).done) && (d.push(t.value), d.length !== o); r = !0)
                        ;
                  } catch (g) {
                    u = !0, i = g;
                  } finally {
                    try {
                      if (!r && n.return != null && (s = n.return(), Object(s) !== s))
                        return;
                    } finally {
                      if (u)
                        throw i;
                    }
                  }
                  return d;
                }
              }(c, a) || function(e, o) {
                if (e) {
                  if (typeof e == "string")
                    return b(e, o);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
                    return Array.from(e);
                  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return b(e, o);
                }
              }(c, a) || function() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }();
            }
            function b(c, a) {
              (a == null || a > c.length) && (a = c.length);
              for (var e = 0, o = new Array(a); e < a; e++)
                o[e] = c[e];
              return o;
            }
            function h(c) {
              return c && c.__esModule ? c : {
                default: c
              };
            }
            function m(c) {
              return c instanceof Element;
            }
            k.Event = p, typeof L.default.CustomEvent == "function" ? k.Event = p = L.default.CustomEvent : D.default && (k.Event = p = function(c, a) {
              a = a || {
                bubbles: !1,
                cancelable: !1,
                composed: !0,
                detail: void 0
              };
              var e = document.createEvent("CustomEvent");
              return e.initCustomEvent(c, a.bubbles, a.cancelable, a.detail), e;
            }, p.prototype = L.default.Event.prototype);
          },
          600: function(G, k) {
            function w(p) {
              return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
                return typeof _;
              } : function(_) {
                return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
              }, w(p);
            }
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = function p() {
              var _, L, B, D, R, b, h = arguments[0] || {}, m = 1, c = arguments.length, a = !1;
              for (typeof h == "boolean" && (a = h, h = arguments[m] || {}, m++), w(h) !== "object" && typeof h != "function" && (h = {}); m < c; m++)
                if ((_ = arguments[m]) != null)
                  for (L in _)
                    B = h[L], h !== (D = _[L]) && (a && D && (Object.prototype.toString.call(D) === "[object Object]" || (R = Array.isArray(D))) ? (R ? (R = !1, b = B && Array.isArray(B) ? B : []) : b = B && Object.prototype.toString.call(B) === "[object Object]" ? B : {}, h[L] = p(a, b, D)) : D !== void 0 && (h[L] = D));
              return h;
            };
          },
          4963: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = void 0;
            var p = D(w(600)), _ = D(w(9380)), L = D(w(253)), B = w(3776);
            function D(m) {
              return m && m.__esModule ? m : {
                default: m
              };
            }
            var R = _.default.document;
            function b(m) {
              return m instanceof b ? m : this instanceof b ? void (m != null && m !== _.default && (this[0] = m.nodeName ? m : m[0] !== void 0 && m[0].nodeName ? m[0] : R.querySelector(m), this[0] !== void 0 && this[0] !== null && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new b(m);
            }
            b.prototype = {
              on: B.on,
              off: B.off,
              trigger: B.trigger
            }, b.extend = p.default, b.data = L.default, b.Event = B.Event;
            var h = b;
            k.default = h;
          },
          9845: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.mobile = k.iphone = k.ie = void 0;
            var p, _ = (p = w(9380)) && p.__esModule ? p : {
              default: p
            }, L = _.default.navigator && _.default.navigator.userAgent || "", B = L.indexOf("MSIE ") > 0 || L.indexOf("Trident/") > 0, D = navigator.userAgentData && navigator.userAgentData.mobile || _.default.navigator && _.default.navigator.maxTouchPoints || "ontouchstart" in _.default, R = /iphone/i.test(L);
            k.iphone = R, k.mobile = D, k.ie = B;
          },
          7184: function(G, k) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = function(p) {
              return p.replace(w, "\\$1");
            };
            var w = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim");
          },
          6030: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.EventHandlers = void 0;
            var p = w(8711), _ = w(2839), L = w(9845), B = w(7215), D = w(7760), R = w(4713);
            function b(c, a) {
              var e = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
              if (!e) {
                if (Array.isArray(c) || (e = function(s, d) {
                  if (s) {
                    if (typeof s == "string")
                      return h(s, d);
                    var r = Object.prototype.toString.call(s).slice(8, -1);
                    if (r === "Object" && s.constructor && (r = s.constructor.name), r === "Map" || r === "Set")
                      return Array.from(s);
                    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                      return h(s, d);
                  }
                }(c)) || a && c && typeof c.length == "number") {
                  e && (c = e);
                  var o = 0, n = function() {
                  };
                  return {
                    s: n,
                    n: function() {
                      return o >= c.length ? {
                        done: !0
                      } : {
                        done: !1,
                        value: c[o++]
                      };
                    },
                    e: function(s) {
                      throw s;
                    },
                    f: n
                  };
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }
              var t, i = !0, l = !1;
              return {
                s: function() {
                  e = e.call(c);
                },
                n: function() {
                  var s = e.next();
                  return i = s.done, s;
                },
                e: function(s) {
                  l = !0, t = s;
                },
                f: function() {
                  try {
                    i || e.return == null || e.return();
                  } finally {
                    if (l)
                      throw t;
                  }
                }
              };
            }
            function h(c, a) {
              (a == null || a > c.length) && (a = c.length);
              for (var e = 0, o = new Array(a); e < a; e++)
                o[e] = c[e];
              return o;
            }
            var m = {
              keyEvent: function(c, a, e, o, n) {
                var t = this.inputmask, i = t.opts, l = t.dependencyLib, s = t.maskset, d = this, r = l(d), u = c.key, g = p.caret.call(t, d), M = i.onKeyDown.call(this, c, p.getBuffer.call(t), g, i);
                if (M !== void 0)
                  return M;
                if (u === _.keys.Backspace || u === _.keys.Delete || L.iphone && u === _.keys.BACKSPACE_SAFARI || c.ctrlKey && u === _.keys.x && !("oncut" in d))
                  c.preventDefault(), B.handleRemove.call(t, d, u, g), (0, D.writeBuffer)(d, p.getBuffer.call(t, !0), s.p, c, d.inputmask._valueGet() !== p.getBuffer.call(t).join(""));
                else if (u === _.keys.End || u === _.keys.PageDown) {
                  c.preventDefault();
                  var y = p.seekNext.call(t, p.getLastValidPosition.call(t));
                  p.caret.call(t, d, c.shiftKey ? g.begin : y, y, !0);
                } else
                  u === _.keys.Home && !c.shiftKey || u === _.keys.PageUp ? (c.preventDefault(), p.caret.call(t, d, 0, c.shiftKey ? g.begin : 0, !0)) : i.undoOnEscape && u === _.keys.Escape && c.altKey !== !0 ? ((0, D.checkVal)(d, !0, !1, t.undoValue.split("")), r.trigger("click")) : u !== _.keys.Insert || c.shiftKey || c.ctrlKey || t.userOptions.insertMode !== void 0 ? i.tabThrough === !0 && u === _.keys.Tab ? c.shiftKey === !0 ? (g.end = p.seekPrevious.call(t, g.end, !0), R.getTest.call(t, g.end - 1).match.static === !0 && g.end--, g.begin = p.seekPrevious.call(t, g.end, !0), g.begin >= 0 && g.end > 0 && (c.preventDefault(), p.caret.call(t, d, g.begin, g.end))) : (g.begin = p.seekNext.call(t, g.begin, !0), g.end = p.seekNext.call(t, g.begin, !0), g.end < s.maskLength && g.end--, g.begin <= s.maskLength && (c.preventDefault(), p.caret.call(t, d, g.begin, g.end))) : c.shiftKey || i.insertModeVisual && i.insertMode === !1 && (u === _.keys.ArrowRight ? setTimeout(function() {
                    var x = p.caret.call(t, d);
                    p.caret.call(t, d, x.begin);
                  }, 0) : u === _.keys.ArrowLeft && setTimeout(function() {
                    var x = p.translatePosition.call(t, d.inputmask.caretPos.begin);
                    p.translatePosition.call(t, d.inputmask.caretPos.end), t.isRTL ? p.caret.call(t, d, x + (x === s.maskLength ? 0 : 1)) : p.caret.call(t, d, x - (x === 0 ? 0 : 1));
                  }, 0)) : B.isSelection.call(t, g) ? i.insertMode = !i.insertMode : (i.insertMode = !i.insertMode, p.caret.call(t, d, g.begin, g.begin));
                return t.isComposing = u == _.keys.Process || u == _.keys.Unidentified, t.ignorable = i.ignorables.includes(u), m.keypressEvent.call(this, c, a, e, o, n);
              },
              keypressEvent: function(c, a, e, o, n) {
                var t = this.inputmask || this, i = t.opts, l = t.dependencyLib, s = t.maskset, d = t.el, r = l(d), u = c.key;
                if (a === !0 || c.ctrlKey && c.altKey || !(c.ctrlKey || c.metaKey || t.ignorable)) {
                  if (u) {
                    var g, M = a ? {
                      begin: n,
                      end: n
                    } : p.caret.call(t, d);
                    u = i.substitutes[u] || u, s.writeOutBuffer = !0;
                    var y = B.isValid.call(t, M, u, o, void 0, void 0, void 0, a);
                    if (y !== !1 && (p.resetMaskSet.call(t, !0), g = y.caret !== void 0 ? y.caret : p.seekNext.call(t, y.pos.begin ? y.pos.begin : y.pos), s.p = g), g = i.numericInput && y.caret === void 0 ? p.seekPrevious.call(t, g) : g, e !== !1 && (setTimeout(function() {
                      i.onKeyValidation.call(d, u, y);
                    }, 0), s.writeOutBuffer && y !== !1)) {
                      var x = p.getBuffer.call(t);
                      (0, D.writeBuffer)(d, x, g, c, a !== !0);
                    }
                    if (c.preventDefault(), a)
                      return y !== !1 && (y.forwardPosition = g), y;
                  }
                } else
                  u === _.keys.Enter && t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), setTimeout(function() {
                    r.trigger("change");
                  }, 0));
              },
              pasteEvent: function(c) {
                var a, e = this.inputmask, o = e.opts, n = e._valueGet(!0), t = p.caret.call(e, this);
                e.isRTL && (a = t.end, t.end = p.translatePosition.call(e, t.begin), t.begin = p.translatePosition.call(e, a));
                var i = n.substr(0, t.begin), l = n.substr(t.end, n.length);
                if (i == (e.isRTL ? p.getBufferTemplate.call(e).slice().reverse() : p.getBufferTemplate.call(e)).slice(0, t.begin).join("") && (i = ""), l == (e.isRTL ? p.getBufferTemplate.call(e).slice().reverse() : p.getBufferTemplate.call(e)).slice(t.end).join("") && (l = ""), window.clipboardData && window.clipboardData.getData)
                  n = i + window.clipboardData.getData("Text") + l;
                else {
                  if (!c.clipboardData || !c.clipboardData.getData)
                    return !0;
                  n = i + c.clipboardData.getData("text/plain") + l;
                }
                var s = n;
                if (e.isRTL) {
                  s = s.split("");
                  var d, r = b(p.getBufferTemplate.call(e));
                  try {
                    for (r.s(); !(d = r.n()).done; ) {
                      var u = d.value;
                      s[0] === u && s.shift();
                    }
                  } catch (g) {
                    r.e(g);
                  } finally {
                    r.f();
                  }
                  s = s.join("");
                }
                if (typeof o.onBeforePaste == "function") {
                  if ((s = o.onBeforePaste.call(e, s, o)) === !1)
                    return !1;
                  s || (s = n);
                }
                (0, D.checkVal)(this, !0, !1, s.toString().split(""), c), c.preventDefault();
              },
              inputFallBackEvent: function(c) {
                var a = this.inputmask, e = a.opts, o = a.dependencyLib, n, t = this, i = t.inputmask._valueGet(!0), l = (a.isRTL ? p.getBuffer.call(a).slice().reverse() : p.getBuffer.call(a)).join(""), s = p.caret.call(a, t, void 0, void 0, !0);
                if (l !== i) {
                  if (n = function(r, u, g) {
                    for (var M, y, x, E = r.substr(0, g.begin).split(""), f = r.substr(g.begin).split(""), v = u.substr(0, g.begin).split(""), C = u.substr(g.begin).split(""), S = E.length >= v.length ? E.length : v.length, T = f.length >= C.length ? f.length : C.length, F = "", A = [], I = "~"; E.length < S; )
                      E.push(I);
                    for (; v.length < S; )
                      v.push(I);
                    for (; f.length < T; )
                      f.unshift(I);
                    for (; C.length < T; )
                      C.unshift(I);
                    var O = E.concat(f), N = v.concat(C);
                    for (y = 0, M = O.length; y < M; y++)
                      switch (x = R.getPlaceholder.call(a, p.translatePosition.call(a, y)), F) {
                        case "insertText":
                          N[y - 1] === O[y] && g.begin == O.length - 1 && A.push(O[y]), y = M;
                          break;
                        case "insertReplacementText":
                        case "deleteContentBackward":
                          O[y] === I ? g.end++ : y = M;
                          break;
                        default:
                          O[y] !== N[y] && (O[y + 1] !== I && O[y + 1] !== x && O[y + 1] !== void 0 || (N[y] !== x || N[y + 1] !== I) && N[y] !== I ? N[y + 1] === I && N[y] === O[y + 1] ? (F = "insertText", A.push(O[y]), g.begin--, g.end--) : O[y] !== x && O[y] !== I && (O[y + 1] === I || N[y] !== O[y] && N[y + 1] === O[y + 1]) ? (F = "insertReplacementText", A.push(O[y]), g.begin--) : O[y] === I ? (F = "deleteContentBackward", (p.isMask.call(a, p.translatePosition.call(a, y), !0) || N[y] === e.radixPoint) && g.end++) : y = M : (F = "insertText", A.push(O[y]), g.begin--, g.end--));
                      }
                    return {
                      action: F,
                      data: A,
                      caret: g
                    };
                  }(i, l, s), (t.inputmask.shadowRoot || t.ownerDocument).activeElement !== t && t.focus(), (0, D.writeBuffer)(t, p.getBuffer.call(a)), p.caret.call(a, t, s.begin, s.end, !0), !L.mobile && a.skipNextInsert && c.inputType === "insertText" && n.action === "insertText" && a.isComposing)
                    return !1;
                  switch (c.inputType === "insertCompositionText" && n.action === "insertText" && a.isComposing ? a.skipNextInsert = !0 : a.skipNextInsert = !1, n.action) {
                    case "insertText":
                    case "insertReplacementText":
                      n.data.forEach(function(r, u) {
                        var g = new o.Event("keypress");
                        g.key = r, a.ignorable = !1, m.keypressEvent.call(t, g);
                      }), setTimeout(function() {
                        a.$el.trigger("keyup");
                      }, 0);
                      break;
                    case "deleteContentBackward":
                      var d = new o.Event("keydown");
                      d.key = _.keys.Backspace, m.keyEvent.call(t, d);
                      break;
                    default:
                      (0, D.applyInputValue)(t, i), p.caret.call(a, t, s.begin, s.end, !0);
                  }
                  c.preventDefault();
                }
              },
              setValueEvent: function(c) {
                var a = this.inputmask, e = this, o = c && c.detail ? c.detail[0] : arguments[1];
                o === void 0 && (o = e.inputmask._valueGet(!0)), (0, D.applyInputValue)(e, o), (c.detail && c.detail[1] !== void 0 || arguments[2] !== void 0) && p.caret.call(a, e, c.detail ? c.detail[1] : arguments[2]);
              },
              focusEvent: function(c) {
                var a = this.inputmask, e = a.opts, o = a == null ? void 0 : a._valueGet();
                e.showMaskOnFocus && o !== p.getBuffer.call(a).join("") && (0, D.writeBuffer)(this, p.getBuffer.call(a), p.seekNext.call(a, p.getLastValidPosition.call(a))), e.positionCaretOnTab !== !0 || a.mouseEnter !== !1 || B.isComplete.call(a, p.getBuffer.call(a)) && p.getLastValidPosition.call(a) !== -1 || m.clickEvent.apply(this, [c, !0]), a.undoValue = a == null ? void 0 : a._valueGet(!0);
              },
              invalidEvent: function(c) {
                this.inputmask.validationEvent = !0;
              },
              mouseleaveEvent: function() {
                var c = this.inputmask, a = c.opts, e = this;
                c.mouseEnter = !1, a.clearMaskOnLostFocus && (e.inputmask.shadowRoot || e.ownerDocument).activeElement !== e && (0, D.HandleNativePlaceholder)(e, c.originalPlaceholder);
              },
              clickEvent: function(c, a) {
                var e = this.inputmask;
                e.clicked++;
                var o = this;
                if ((o.inputmask.shadowRoot || o.ownerDocument).activeElement === o) {
                  var n = p.determineNewCaretPosition.call(e, p.caret.call(e, o), a);
                  n !== void 0 && p.caret.call(e, o, n);
                }
              },
              cutEvent: function(c) {
                var a = this.inputmask, e = a.maskset, o = this, n = p.caret.call(a, o), t = a.isRTL ? p.getBuffer.call(a).slice(n.end, n.begin) : p.getBuffer.call(a).slice(n.begin, n.end), i = a.isRTL ? t.reverse().join("") : t.join("");
                window.navigator.clipboard ? window.navigator.clipboard.writeText(i) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", i), B.handleRemove.call(a, o, _.keys.Delete, n), (0, D.writeBuffer)(o, p.getBuffer.call(a), e.p, c, a.undoValue !== a._valueGet(!0));
              },
              blurEvent: function(c) {
                var a = this.inputmask, e = a.opts, o = a.dependencyLib;
                a.clicked = 0;
                var n = o(this), t = this;
                if (t.inputmask) {
                  (0, D.HandleNativePlaceholder)(t, a.originalPlaceholder);
                  var i = t.inputmask._valueGet(), l = p.getBuffer.call(a).slice();
                  i !== "" && (e.clearMaskOnLostFocus && (p.getLastValidPosition.call(a) === -1 && i === p.getBufferTemplate.call(a).join("") ? l = [] : D.clearOptionalTail.call(a, l)), B.isComplete.call(a, l) === !1 && (setTimeout(function() {
                    n.trigger("incomplete");
                  }, 0), e.clearIncomplete && (p.resetMaskSet.call(a), l = e.clearMaskOnLostFocus ? [] : p.getBufferTemplate.call(a).slice())), (0, D.writeBuffer)(t, l, void 0, c)), a.undoValue !== a._valueGet(!0) && (a.undoValue = a._valueGet(!0), n.trigger("change"));
                }
              },
              mouseenterEvent: function() {
                var c = this.inputmask, a = c.opts.showMaskOnHover, e = this;
                if (c.mouseEnter = !0, (e.inputmask.shadowRoot || e.ownerDocument).activeElement !== e) {
                  var o = (c.isRTL ? p.getBufferTemplate.call(c).slice().reverse() : p.getBufferTemplate.call(c)).join("");
                  a && (0, D.HandleNativePlaceholder)(e, o);
                }
              },
              submitEvent: function() {
                var c = this.inputmask, a = c.opts;
                c.undoValue !== c._valueGet(!0) && c.$el.trigger("change"), p.getLastValidPosition.call(c) === -1 && c._valueGet && c._valueGet() === p.getBufferTemplate.call(c).join("") && c._valueSet(""), a.clearIncomplete && B.isComplete.call(c, p.getBuffer.call(c)) === !1 && c._valueSet(""), a.removeMaskOnSubmit && (c._valueSet(c.unmaskedvalue(), !0), setTimeout(function() {
                  (0, D.writeBuffer)(c.el, p.getBuffer.call(c));
                }, 0));
              },
              resetEvent: function() {
                var c = this.inputmask;
                c.refreshValue = !0, setTimeout(function() {
                  (0, D.applyInputValue)(c.el, c._valueGet(!0));
                }, 0);
              }
            };
            k.EventHandlers = m;
          },
          9716: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.EventRuler = void 0;
            var p, _ = (p = w(2394)) && p.__esModule ? p : {
              default: p
            }, L = w(2839), B = w(8711), D = w(7760), R = {
              on: function(b, h, m) {
                var c = b.inputmask.dependencyLib, a = function(e) {
                  e.originalEvent && (e = e.originalEvent || e, arguments[0] = e);
                  var o, n = this, t = n.inputmask, i = t ? t.opts : void 0;
                  if (t === void 0 && this.nodeName !== "FORM") {
                    var l = c.data(n, "_inputmask_opts");
                    c(n).off(), l && new _.default(l).mask(n);
                  } else {
                    if (["submit", "reset", "setvalue"].includes(e.type) || this.nodeName === "FORM" || !(n.disabled || n.readOnly && !(e.type === "keydown" && e.ctrlKey && e.key === L.keys.c || i.tabThrough === !1 && e.key === L.keys.Tab))) {
                      switch (e.type) {
                        case "input":
                          if (t.skipInputEvent === !0)
                            return t.skipInputEvent = !1, e.preventDefault();
                          break;
                        case "click":
                        case "focus":
                          return t.validationEvent ? (t.validationEvent = !1, b.blur(), (0, D.HandleNativePlaceholder)(b, (t.isRTL ? B.getBufferTemplate.call(t).slice().reverse() : B.getBufferTemplate.call(t)).join("")), setTimeout(function() {
                            b.focus();
                          }, i.validationEventTimeOut), !1) : (o = arguments, void setTimeout(function() {
                            b.inputmask && m.apply(n, o);
                          }, 0));
                      }
                      var s = m.apply(n, arguments);
                      return s === !1 && (e.preventDefault(), e.stopPropagation()), s;
                    }
                    e.preventDefault();
                  }
                };
                ["submit", "reset"].includes(h) ? (a = a.bind(b), b.form !== null && c(b.form).on(h, a)) : c(b).on(h, a), b.inputmask.events[h] = b.inputmask.events[h] || [], b.inputmask.events[h].push(a);
              },
              off: function(b, h) {
                if (b.inputmask && b.inputmask.events) {
                  var m = b.inputmask.dependencyLib, c = b.inputmask.events;
                  for (var a in h && ((c = [])[h] = b.inputmask.events[h]), c) {
                    for (var e = c[a]; e.length > 0; ) {
                      var o = e.pop();
                      ["submit", "reset"].includes(a) ? b.form !== null && m(b.form).off(a, o) : m(b).off(a, o);
                    }
                    delete b.inputmask.events[a];
                  }
                }
              }
            };
            k.EventRuler = R;
          },
          219: function(G, k, w) {
            var p = c(w(2394)), _ = w(2839), L = c(w(7184)), B = w(8711), D = w(4713);
            function R(f, v) {
              return function(C) {
                if (Array.isArray(C))
                  return C;
              }(f) || function(C, S) {
                var T = C == null ? null : typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
                if (T != null) {
                  var F, A, I, O, N = [], V = !0, z = !1;
                  try {
                    if (I = (T = T.call(C)).next, S === 0) {
                      if (Object(T) !== T)
                        return;
                      V = !1;
                    } else
                      for (; !(V = (F = I.call(T)).done) && (N.push(F.value), N.length !== S); V = !0)
                        ;
                  } catch (P) {
                    z = !0, A = P;
                  } finally {
                    try {
                      if (!V && T.return != null && (O = T.return(), Object(O) !== O))
                        return;
                    } finally {
                      if (z)
                        throw A;
                    }
                  }
                  return N;
                }
              }(f, v) || function(C, S) {
                if (C) {
                  if (typeof C == "string")
                    return b(C, S);
                  var T = Object.prototype.toString.call(C).slice(8, -1);
                  if (T === "Object" && C.constructor && (T = C.constructor.name), T === "Map" || T === "Set")
                    return Array.from(C);
                  if (T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))
                    return b(C, S);
                }
              }(f, v) || function() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }();
            }
            function b(f, v) {
              (v == null || v > f.length) && (v = f.length);
              for (var C = 0, S = new Array(v); C < v; C++)
                S[C] = f[C];
              return S;
            }
            function h(f) {
              return h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                return typeof v;
              } : function(v) {
                return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
              }, h(f);
            }
            function m(f, v) {
              for (var C = 0; C < v.length; C++) {
                var S = v[C];
                S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(f, (T = S.key, F = void 0, F = function(A, I) {
                  if (h(A) !== "object" || A === null)
                    return A;
                  var O = A[Symbol.toPrimitive];
                  if (O !== void 0) {
                    var N = O.call(A, I || "default");
                    if (h(N) !== "object")
                      return N;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return (I === "string" ? String : Number)(A);
                }(T, "string"), h(F) === "symbol" ? F : String(F)), S);
              }
              var T, F;
            }
            function c(f) {
              return f && f.__esModule ? f : {
                default: f
              };
            }
            var a = p.default.dependencyLib, e = function() {
              function f(S, T, F) {
                (function(A, I) {
                  if (!(A instanceof I))
                    throw new TypeError("Cannot call a class as a function");
                })(this, f), this.mask = S, this.format = T, this.opts = F, this._date = new Date(1, 0, 1), this.initDateObject(S, this.opts);
              }
              var v, C;
              return v = f, (C = [{
                key: "date",
                get: function() {
                  return this._date === void 0 && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), this._date;
                }
              }, {
                key: "initDateObject",
                value: function(S, T) {
                  var F;
                  for (r(T).lastIndex = 0; F = r(T).exec(this.format); ) {
                    var A = new RegExp("\\d+$").exec(F[0]), I = A ? F[0][0] + "x" : F[0], O = void 0;
                    if (S !== void 0) {
                      if (A) {
                        var N = r(T).lastIndex, V = E(F.index, T);
                        r(T).lastIndex = N, O = S.slice(0, S.indexOf(V.nextMatch[0]));
                      } else
                        O = S.slice(0, t[I] && t[I][4] || I.length);
                      S = S.slice(O.length);
                    }
                    Object.prototype.hasOwnProperty.call(t, I) && this.setValue(this, O, I, t[I][2], t[I][1]);
                  }
                }
              }, {
                key: "setValue",
                value: function(S, T, F, A, I) {
                  if (T !== void 0 && (S[A] = A === "ampm" ? T : T.replace(/[^0-9]/g, "0"), S["raw" + A] = T.replace(/\s/g, "_")), I !== void 0) {
                    var O = S[A];
                    (A === "day" && parseInt(O) === 29 || A === "month" && parseInt(O) === 2) && (parseInt(S.day) !== 29 || parseInt(S.month) !== 2 || S.year !== "" && S.year !== void 0 || S._date.setFullYear(2012, 1, 29)), A === "day" && (n = !0, parseInt(O) === 0 && (O = 1)), A === "month" && (n = !0), A === "year" && (n = !0, O.length < 4 && (O = M(O, 4, !0))), O === "" || isNaN(O) || I.call(S._date, O), A === "ampm" && I.call(S._date, O);
                  }
                }
              }, {
                key: "reset",
                value: function() {
                  this._date = new Date(1, 0, 1);
                }
              }, {
                key: "reInit",
                value: function() {
                  this._date = void 0, this.date;
                }
              }]) && m(v.prototype, C), Object.defineProperty(v, "prototype", {
                writable: !1
              }), f;
            }(), o = (/* @__PURE__ */ new Date()).getFullYear(), n = !1, t = {
              d: ["[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate],
              dd: ["0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                return M(Date.prototype.getDate.call(this), 2);
              }],
              ddd: [""],
              dddd: [""],
              m: ["[1-9]|1[012]", function(f) {
                var v = f ? parseInt(f) : 0;
                return v > 0 && v--, Date.prototype.setMonth.call(this, v);
              }, "month", function() {
                return Date.prototype.getMonth.call(this) + 1;
              }],
              mm: ["0[1-9]|1[012]", function(f) {
                var v = f ? parseInt(f) : 0;
                return v > 0 && v--, Date.prototype.setMonth.call(this, v);
              }, "month", function() {
                return M(Date.prototype.getMonth.call(this) + 1, 2);
              }],
              mmm: [""],
              mmmm: [""],
              yy: ["[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                return M(Date.prototype.getFullYear.call(this), 2);
              }],
              yyyy: ["[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                return M(Date.prototype.getFullYear.call(this), 4);
              }],
              h: ["[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              hh: ["0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                return M(Date.prototype.getHours.call(this), 2);
              }],
              hx: [function(f) {
                return "[0-9]{".concat(f, "}");
              }, Date.prototype.setHours, "hours", function(f) {
                return Date.prototype.getHours;
              }],
              H: ["1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours],
              HH: ["0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                return M(Date.prototype.getHours.call(this), 2);
              }],
              Hx: [function(f) {
                return "[0-9]{".concat(f, "}");
              }, Date.prototype.setHours, "hours", function(f) {
                return function() {
                  return M(Date.prototype.getHours.call(this), f);
                };
              }],
              M: ["[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes],
              MM: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                return M(Date.prototype.getMinutes.call(this), 2);
              }],
              s: ["[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds],
              ss: ["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                return M(Date.prototype.getSeconds.call(this), 2);
              }],
              l: ["[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return M(Date.prototype.getMilliseconds.call(this), 3);
              }, 3],
              L: ["[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                return M(Date.prototype.getMilliseconds.call(this), 2);
              }, 2],
              t: ["[ap]", l, "ampm", s, 1],
              tt: ["[ap]m", l, "ampm", s, 2],
              T: ["[AP]", l, "ampm", s, 1],
              TT: ["[AP]M", l, "ampm", s, 2],
              Z: [".*", void 0, "Z", function() {
                var f = this.toString().match(/\((.+)\)/)[1];
                return f.includes(" ") && (f = (f = f.replace("-", " ").toUpperCase()).split(" ").map(function(v) {
                  return R(v, 1)[0];
                }).join("")), f;
              }],
              o: [""],
              S: [""]
            }, i = {
              isoDate: "yyyy-mm-dd",
              isoTime: "HH:MM:ss",
              isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
              isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };
            function l(f) {
              var v = this.getHours();
              f.toLowerCase().includes("p") ? this.setHours(v + 12) : f.toLowerCase().includes("a") && v >= 12 && this.setHours(v - 12);
            }
            function s() {
              var f = this.getHours();
              return (f = f || 12) >= 12 ? "PM" : "AM";
            }
            function d(f) {
              var v = new RegExp("\\d+$").exec(f[0]);
              if (v && v[0] !== void 0) {
                var C = t[f[0][0] + "x"].slice("");
                return C[0] = C[0](v[0]), C[3] = C[3](v[0]), C;
              }
              if (t[f[0]])
                return t[f[0]];
            }
            function r(f) {
              if (!f.tokenizer) {
                var v = [], C = [];
                for (var S in t)
                  if (/\.*x$/.test(S)) {
                    var T = S[0] + "\\d+";
                    C.indexOf(T) === -1 && C.push(T);
                  } else
                    v.indexOf(S[0]) === -1 && v.push(S[0]);
                f.tokenizer = "(" + (C.length > 0 ? C.join("|") + "|" : "") + v.join("+|") + ")+?|.", f.tokenizer = new RegExp(f.tokenizer, "g");
              }
              return f.tokenizer;
            }
            function u(f, v, C) {
              if (!n)
                return !0;
              if (f.rawday === void 0 || !isFinite(f.rawday) && new Date(f.date.getFullYear(), isFinite(f.rawmonth) ? f.month : f.date.getMonth() + 1, 0).getDate() >= f.day || f.day == "29" && (!isFinite(f.rawyear) || f.rawyear === void 0 || f.rawyear === "") || new Date(f.date.getFullYear(), isFinite(f.rawmonth) ? f.month : f.date.getMonth() + 1, 0).getDate() >= f.day)
                return v;
              if (f.day == "29") {
                var S = E(v.pos, C);
                if (S.targetMatch[0] === "yyyy" && v.pos - S.targetMatchIndex == 2)
                  return v.remove = v.pos + 1, v;
              } else if (f.month == "02" && f.day == "30" && v.c !== void 0)
                return f.day = "03", f.date.setDate(3), f.date.setMonth(1), v.insert = [{
                  pos: v.pos,
                  c: "0"
                }, {
                  pos: v.pos + 1,
                  c: v.c
                }], v.caret = B.seekNext.call(this, v.pos + 1), v;
              return !1;
            }
            function g(f, v, C, S) {
              var T, F, A = "";
              for (r(C).lastIndex = 0; T = r(C).exec(f); )
                if (v === void 0)
                  if (F = d(T))
                    A += "(" + F[0] + ")";
                  else
                    switch (T[0]) {
                      case "[":
                        A += "(";
                        break;
                      case "]":
                        A += ")?";
                        break;
                      default:
                        A += (0, L.default)(T[0]);
                    }
                else
                  (F = d(T)) ? S !== !0 && F[3] ? A += F[3].call(v.date) : F[2] ? A += v["raw" + F[2]] : A += T[0] : A += T[0];
              return A;
            }
            function M(f, v, C) {
              for (f = String(f), v = v || 2; f.length < v; )
                f = C ? f + "0" : "0" + f;
              return f;
            }
            function y(f, v, C) {
              return typeof f == "string" ? new e(f, v, C) : f && h(f) === "object" && Object.prototype.hasOwnProperty.call(f, "date") ? f : void 0;
            }
            function x(f, v) {
              return g(v.inputFormat, {
                date: f
              }, v);
            }
            function E(f, v) {
              var C, S, T = 0, F = 0;
              for (r(v).lastIndex = 0; S = r(v).exec(v.inputFormat); ) {
                var A = new RegExp("\\d+$").exec(S[0]);
                if ((T += F = A ? parseInt(A[0]) : S[0].length) >= f + 1) {
                  C = S, S = r(v).exec(v.inputFormat);
                  break;
                }
              }
              return {
                targetMatchIndex: T - F,
                nextMatch: S,
                targetMatch: C
              };
            }
            p.default.extendAliases({
              datetime: {
                mask: function(f) {
                  return f.numericInput = !1, t.S = f.i18n.ordinalSuffix.join("|"), f.inputFormat = i[f.inputFormat] || f.inputFormat, f.displayFormat = i[f.displayFormat] || f.displayFormat || f.inputFormat, f.outputFormat = i[f.outputFormat] || f.outputFormat || f.inputFormat, f.placeholder = f.placeholder !== "" ? f.placeholder : f.inputFormat.replace(/[[\]]/, ""), f.regex = g(f.inputFormat, void 0, f), f.min = y(f.min, f.inputFormat, f), f.max = y(f.max, f.inputFormat, f), null;
                },
                placeholder: "",
                inputFormat: "isoDateTime",
                displayFormat: null,
                outputFormat: null,
                min: null,
                max: null,
                skipOptionalPartCharacter: "",
                i18n: {
                  dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                  ordinalSuffix: ["st", "nd", "rd", "th"]
                },
                preValidation: function(f, v, C, S, T, F, A, I) {
                  if (I)
                    return !0;
                  if (isNaN(C) && f[v] !== C) {
                    var O = E(v, T);
                    if (O.nextMatch && O.nextMatch[0] === C && O.targetMatch[0].length > 1) {
                      var N = t[O.targetMatch[0]][0];
                      if (new RegExp(N).test("0" + f[v - 1]))
                        return f[v] = f[v - 1], f[v - 1] = "0", {
                          fuzzy: !0,
                          buffer: f,
                          refreshFromBuffer: {
                            start: v - 1,
                            end: v + 1
                          },
                          pos: v + 1
                        };
                    }
                  }
                  return !0;
                },
                postValidation: function(f, v, C, S, T, F, A, I) {
                  var O, N;
                  if (A)
                    return !0;
                  if (S === !1 && (((O = E(v + 1, T)).targetMatch && O.targetMatchIndex === v && O.targetMatch[0].length > 1 && t[O.targetMatch[0]] !== void 0 || (O = E(v + 2, T)).targetMatch && O.targetMatchIndex === v + 1 && O.targetMatch[0].length > 1 && t[O.targetMatch[0]] !== void 0) && (N = t[O.targetMatch[0]][0]), N !== void 0 && (F.validPositions[v + 1] !== void 0 && new RegExp(N).test(C + "0") ? (f[v] = C, f[v + 1] = "0", S = {
                    pos: v + 2,
                    caret: v
                  }) : new RegExp(N).test("0" + C) && (f[v] = "0", f[v + 1] = C, S = {
                    pos: v + 2
                  })), S === !1))
                    return S;
                  if (S.fuzzy && (f = S.buffer, v = S.pos), (O = E(v, T)).targetMatch && O.targetMatch[0] && t[O.targetMatch[0]] !== void 0) {
                    var V = t[O.targetMatch[0]];
                    N = V[0];
                    var z = f.slice(O.targetMatchIndex, O.targetMatchIndex + O.targetMatch[0].length);
                    if (new RegExp(N).test(z.join("")) === !1 && O.targetMatch[0].length === 2 && F.validPositions[O.targetMatchIndex] && F.validPositions[O.targetMatchIndex + 1] && (F.validPositions[O.targetMatchIndex + 1].input = "0"), V[2] == "year")
                      for (var P = D.getMaskTemplate.call(this, !1, 1, void 0, !0), Z = v + 1; Z < f.length; Z++)
                        f[Z] = P[Z], delete F.validPositions[Z];
                  }
                  var Y = S, oe = y(f.join(""), T.inputFormat, T);
                  return Y && !isNaN(oe.date.getTime()) && (T.prefillYear && (Y = function(q, ne, se) {
                    if (q.year !== q.rawyear) {
                      var W = o.toString(), te = q.rawyear.replace(/[^0-9]/g, ""), J = W.slice(0, te.length), ee = W.slice(te.length);
                      if (te.length === 2 && te === J) {
                        var ie = new Date(o, q.month - 1, q.day);
                        q.day == ie.getDate() && (!se.max || se.max.date.getTime() >= ie.getTime()) && (q.date.setFullYear(o), q.year = W, ne.insert = [{
                          pos: ne.pos + 1,
                          c: ee[0]
                        }, {
                          pos: ne.pos + 2,
                          c: ee[1]
                        }]);
                      }
                    }
                    return ne;
                  }(oe, Y, T)), Y = function(q, ne, se, W, te) {
                    if (!ne)
                      return ne;
                    if (ne && se.min && !isNaN(se.min.date.getTime())) {
                      var J;
                      for (q.reset(), r(se).lastIndex = 0; J = r(se).exec(se.inputFormat); ) {
                        var ee;
                        if ((ee = d(J)) && ee[3]) {
                          for (var ie = ee[1], pe = q[ee[2]], le = se.min[ee[2]], be = se.max ? se.max[ee[2]] : le, ue = [], de = !1, me = 0; me < le.length; me++)
                            W.validPositions[me + J.index] !== void 0 || de ? (ue[me] = pe[me], de = de || pe[me] > le[me]) : (ue[me] = le[me], ee[2] === "year" && pe.length - 1 == me && le != be && (ue = (parseInt(ue.join("")) + 1).toString().split("")), ee[2] === "ampm" && le != be && se.min.date.getTime() > q.date.getTime() && (ue[me] = be[me]));
                          ie.call(q._date, ue.join(""));
                        }
                      }
                      ne = se.min.date.getTime() <= q.date.getTime(), q.reInit();
                    }
                    return ne && se.max && (isNaN(se.max.date.getTime()) || (ne = se.max.date.getTime() >= q.date.getTime())), ne;
                  }(oe, Y = u.call(this, oe, Y, T), T, F)), v !== void 0 && Y && S.pos !== v ? {
                    buffer: g(T.inputFormat, oe, T).split(""),
                    refreshFromBuffer: {
                      start: v,
                      end: S.pos
                    },
                    pos: S.caret || S.pos
                  } : Y;
                },
                onKeyDown: function(f, v, C, S) {
                  f.ctrlKey && f.key === _.keys.ArrowRight && (this.inputmask._valueSet(x(/* @__PURE__ */ new Date(), S)), a(this).trigger("setvalue"));
                },
                onUnMask: function(f, v, C) {
                  return v && g(C.outputFormat, y(f, C.inputFormat, C), C, !0);
                },
                casing: function(f, v, C, S) {
                  return v.nativeDef.indexOf("[ap]") == 0 ? f.toLowerCase() : v.nativeDef.indexOf("[AP]") == 0 ? f.toUpperCase() : f;
                },
                onBeforeMask: function(f, v) {
                  return Object.prototype.toString.call(f) === "[object Date]" && (f = x(f, v)), f;
                },
                insertMode: !1,
                insertModeVisual: !1,
                shiftPositions: !1,
                keepStatic: !1,
                inputmode: "numeric",
                prefillYear: !0
              }
            });
          },
          3851: function(G, k, w) {
            var p, _ = (p = w(2394)) && p.__esModule ? p : {
              default: p
            }, L = w(8711), B = w(4713);
            _.default.extendDefinitions({
              A: {
                validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
              },
              "&": {
                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                casing: "upper"
              },
              "#": {
                validator: "[0-9A-Fa-f]",
                casing: "upper"
              }
            });
            var D = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
            function R(b, h, m, c, a) {
              return m - 1 > -1 && h.buffer[m - 1] !== "." ? (b = h.buffer[m - 1] + b, b = m - 2 > -1 && h.buffer[m - 2] !== "." ? h.buffer[m - 2] + b : "0" + b) : b = "00" + b, D.test(b);
            }
            _.default.extendAliases({
              cssunit: {
                regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
              },
              url: {
                regex: "(https?|ftp)://.*",
                autoUnmask: !1,
                keepStatic: !1,
                tabThrough: !0
              },
              ip: {
                mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                definitions: {
                  i: {
                    validator: R
                  },
                  j: {
                    validator: R
                  },
                  k: {
                    validator: R
                  },
                  l: {
                    validator: R
                  }
                },
                onUnMask: function(b, h, m) {
                  return b;
                },
                inputmode: "decimal",
                substitutes: {
                  ",": "."
                }
              },
              email: {
                mask: function(b) {
                  var h = b.separator, m = b.quantifier, c = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = c;
                  if (h)
                    for (var e = 0; e < m; e++)
                      a += "[".concat(h).concat(c, "]");
                  return a;
                },
                greedy: !1,
                casing: "lower",
                separator: null,
                quantifier: 5,
                skipOptionalPartCharacter: "",
                onBeforePaste: function(b, h) {
                  return (b = b.toLowerCase()).replace("mailto:", "");
                },
                definitions: {
                  "*": {
                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                  },
                  "-": {
                    validator: "[0-9A-Za-z-]"
                  }
                },
                onUnMask: function(b, h, m) {
                  return b;
                },
                inputmode: "email"
              },
              mac: {
                mask: "##:##:##:##:##:##"
              },
              vin: {
                mask: "V{13}9{4}",
                definitions: {
                  V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    casing: "upper"
                  }
                },
                clearIncomplete: !0,
                autoUnmask: !0
              },
              ssn: {
                mask: "999-99-9999",
                postValidation: function(b, h, m, c, a, e, o) {
                  var n = B.getMaskTemplate.call(this, !0, L.getLastValidPosition.call(this), !0, !0);
                  return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(n.join(""));
                }
              }
            });
          },
          207: function(G, k, w) {
            var p = D(w(2394)), _ = D(w(7184)), L = w(8711), B = w(2839);
            function D(e) {
              return e && e.__esModule ? e : {
                default: e
              };
            }
            var R = p.default.dependencyLib;
            function b(e, o) {
              for (var n = "", t = 0; t < e.length; t++)
                p.default.prototype.definitions[e.charAt(t)] || o.definitions[e.charAt(t)] || o.optionalmarker[0] === e.charAt(t) || o.optionalmarker[1] === e.charAt(t) || o.quantifiermarker[0] === e.charAt(t) || o.quantifiermarker[1] === e.charAt(t) || o.groupmarker[0] === e.charAt(t) || o.groupmarker[1] === e.charAt(t) || o.alternatormarker === e.charAt(t) ? n += "\\" + e.charAt(t) : n += e.charAt(t);
              return n;
            }
            function h(e, o, n, t) {
              if (e.length > 0 && o > 0 && (!n.digitsOptional || t)) {
                var i = e.indexOf(n.radixPoint), l = !1;
                n.negationSymbol.back === e[e.length - 1] && (l = !0, e.length--), i === -1 && (e.push(n.radixPoint), i = e.length - 1);
                for (var s = 1; s <= o; s++)
                  isFinite(e[i + s]) || (e[i + s] = "0");
              }
              return l && e.push(n.negationSymbol.back), e;
            }
            function m(e, o) {
              var n = 0;
              for (var t in e === "+" && (n = L.seekNext.call(this, o.validPositions.length - 1)), o.tests)
                if ((t = parseInt(t)) >= n) {
                  for (var i = 0, l = o.tests[t].length; i < l; i++)
                    if ((o.validPositions[t] === void 0 || e === "-") && o.tests[t][i].match.def === e)
                      return t + (o.validPositions[t] !== void 0 && e !== "-" ? 1 : 0);
                }
              return n;
            }
            function c(e, o) {
              for (var n = -1, t = 0, i = o.validPositions.length; t < i; t++) {
                var l = o.validPositions[t];
                if (l && l.match.def === e) {
                  n = t;
                  break;
                }
              }
              return n;
            }
            function a(e, o, n, t, i) {
              var l = o.buffer ? o.buffer.indexOf(i.radixPoint) : -1, s = (l !== -1 || t && i.jitMasking) && new RegExp(i.definitions[9].validator).test(e);
              return i._radixDance && l !== -1 && s && o.validPositions[l] == null ? {
                insert: {
                  pos: l === n ? l + 1 : l,
                  c: i.radixPoint
                },
                pos: n
              } : s;
            }
            p.default.extendAliases({
              numeric: {
                mask: function(e) {
                  e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && e.digits !== "0" && (e.radixPoint === "." ? e.groupSeparator = "," : e.radixPoint === "," ? e.groupSeparator = "." : e.groupSeparator = ""), e.groupSeparator === " " && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), e.positionCaretOnClick === "radixFocus" && e.placeholder === "" && (e.positionCaretOnClick = "lvp");
                  var o = "0", n = e.radixPoint;
                  e.numericInput === !0 && e.__financeInput === void 0 ? (o = "1", e.positionCaretOnClick = e.positionCaretOnClick === "radixFocus" ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = e.radixPoint === "," ? "?" : "!", e.radixPoint !== "" && e.definitions[n] === void 0 && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, e.numericInput = !0);
                  var t, i = "[+]";
                  if (i += b(e.prefix, e), e.groupSeparator !== "" ? (e.definitions[e.groupSeparator] === void 0 && (e.definitions[e.groupSeparator] = {}, e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), i += e._mask(e)) : i += "9{+}", e.digits !== void 0 && e.digits !== 0) {
                    var l = e.digits.toString().split(",");
                    isFinite(l[0]) && l[1] && isFinite(l[1]) ? i += n + o + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (t = i + n + o + "{0," + e.digits + "}", e.keepStatic = !0) : i += n + o + "{" + e.digits + "}");
                  } else
                    e.inputmode = "numeric";
                  return i += b(e.suffix, e), i += "[-]", t && (i = [t + b(e.suffix, e) + "[-]", i]), e.greedy = !1, function(s) {
                    s.parseMinMaxOptions === void 0 && (s.min !== null && (s.min = s.min.toString().replace(new RegExp((0, _.default)(s.groupSeparator), "g"), ""), s.radixPoint === "," && (s.min = s.min.replace(s.radixPoint, ".")), s.min = isFinite(s.min) ? parseFloat(s.min) : NaN, isNaN(s.min) && (s.min = Number.MIN_VALUE)), s.max !== null && (s.max = s.max.toString().replace(new RegExp((0, _.default)(s.groupSeparator), "g"), ""), s.radixPoint === "," && (s.max = s.max.replace(s.radixPoint, ".")), s.max = isFinite(s.max) ? parseFloat(s.max) : NaN, isNaN(s.max) && (s.max = Number.MAX_VALUE)), s.parseMinMaxOptions = "done");
                  }(e), e.radixPoint !== "" && e.substituteRadixPoint && (e.substitutes[e.radixPoint == "." ? "," : "."] = e.radixPoint), i;
                },
                _mask: function(e) {
                  return "(" + e.groupSeparator + "999){+|1}";
                },
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                _radixDance: !0,
                groupSeparator: "",
                allowMinus: !0,
                negationSymbol: {
                  front: "-",
                  back: ""
                },
                prefix: "",
                suffix: "",
                min: null,
                max: null,
                SetMaxOnOverflow: !1,
                step: 1,
                inputType: "text",
                unmaskAsNumber: !1,
                roundingFN: Math.round,
                inputmode: "decimal",
                shortcuts: {
                  k: "1000",
                  m: "1000000"
                },
                placeholder: "0",
                greedy: !1,
                rightAlign: !0,
                insertMode: !0,
                autoUnmask: !1,
                skipOptionalPartCharacter: "",
                usePrototypeDefinitions: !1,
                stripLeadingZeroes: !0,
                substituteRadixPoint: !0,
                definitions: {
                  0: {
                    validator: a
                  },
                  1: {
                    validator: a,
                    definitionSymbol: "9"
                  },
                  9: {
                    validator: "[0-9０-９٠-٩۰-۹]",
                    definitionSymbol: "*"
                  },
                  "+": {
                    validator: function(e, o, n, t, i) {
                      return i.allowMinus && (e === "-" || e === i.negationSymbol.front);
                    }
                  },
                  "-": {
                    validator: function(e, o, n, t, i) {
                      return i.allowMinus && e === i.negationSymbol.back;
                    }
                  }
                },
                preValidation: function(e, o, n, t, i, l, s, d) {
                  if (i.__financeInput !== !1 && n === i.radixPoint)
                    return !1;
                  var r = e.indexOf(i.radixPoint), u = o;
                  if (o = function(x, E, f, v, C) {
                    return C._radixDance && C.numericInput && E !== C.negationSymbol.back && x <= f && (f > 0 || E == C.radixPoint) && (v.validPositions[x - 1] === void 0 || v.validPositions[x - 1].input !== C.negationSymbol.back) && (x -= 1), x;
                  }(o, n, r, l, i), n === "-" || n === i.negationSymbol.front) {
                    if (i.allowMinus !== !0)
                      return !1;
                    var g = !1, M = c("+", l), y = c("-", l);
                    return M !== -1 && (g = [M, y]), g !== !1 ? {
                      remove: g,
                      caret: u - i.negationSymbol.back.length
                    } : {
                      insert: [{
                        pos: m.call(this, "+", l),
                        c: i.negationSymbol.front,
                        fromIsValid: !0
                      }, {
                        pos: m.call(this, "-", l),
                        c: i.negationSymbol.back,
                        fromIsValid: void 0
                      }],
                      caret: u + i.negationSymbol.back.length
                    };
                  }
                  if (n === i.groupSeparator)
                    return {
                      caret: u
                    };
                  if (d)
                    return !0;
                  if (r !== -1 && i._radixDance === !0 && t === !1 && n === i.radixPoint && i.digits !== void 0 && (isNaN(i.digits) || parseInt(i.digits) > 0) && r !== o)
                    return {
                      caret: i._radixDance && o === r - 1 ? r + 1 : r
                    };
                  if (i.__financeInput === !1) {
                    if (t) {
                      if (i.digitsOptional)
                        return {
                          rewritePosition: s.end
                        };
                      if (!i.digitsOptional) {
                        if (s.begin > r && s.end <= r)
                          return n === i.radixPoint ? {
                            insert: {
                              pos: r + 1,
                              c: "0",
                              fromIsValid: !0
                            },
                            rewritePosition: r
                          } : {
                            rewritePosition: r + 1
                          };
                        if (s.begin < r)
                          return {
                            rewritePosition: s.begin - 1
                          };
                      }
                    } else if (!i.showMaskOnHover && !i.showMaskOnFocus && !i.digitsOptional && i.digits > 0 && this.__valueGet.call(this.el) === "")
                      return {
                        rewritePosition: r
                      };
                  }
                  return {
                    rewritePosition: o
                  };
                },
                postValidation: function(e, o, n, t, i, l, s) {
                  if (t === !1)
                    return t;
                  if (s)
                    return !0;
                  if (i.min !== null || i.max !== null) {
                    var d = i.onUnMask(e.slice().reverse().join(""), void 0, R.extend({}, i, {
                      unmaskAsNumber: !0
                    }));
                    if (i.min !== null && d < i.min && (d.toString().length > i.min.toString().length || d < 0))
                      return !1;
                    if (i.max !== null && d > i.max)
                      return !!i.SetMaxOnOverflow && {
                        refreshFromBuffer: !0,
                        buffer: h(i.max.toString().replace(".", i.radixPoint).split(""), i.digits, i).reverse()
                      };
                  }
                  return t;
                },
                onUnMask: function(e, o, n) {
                  if (o === "" && n.nullable === !0)
                    return o;
                  var t = e.replace(n.prefix, "");
                  return t = (t = t.replace(n.suffix, "")).replace(new RegExp((0, _.default)(n.groupSeparator), "g"), ""), n.placeholder.charAt(0) !== "" && (t = t.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), n.unmaskAsNumber ? (n.radixPoint !== "" && t.indexOf(n.radixPoint) !== -1 && (t = t.replace(_.default.call(this, n.radixPoint), ".")), t = (t = t.replace(new RegExp("^" + (0, _.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0, _.default)(n.negationSymbol.back) + "$"), ""), Number(t)) : t;
                },
                isComplete: function(e, o) {
                  var n = (o.numericInput ? e.slice().reverse() : e).join("");
                  return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, _.default)(o.negationSymbol.front)), "-")).replace(new RegExp((0, _.default)(o.negationSymbol.back) + "$"), "")).replace(o.prefix, "")).replace(o.suffix, "")).replace(new RegExp((0, _.default)(o.groupSeparator) + "([0-9]{3})", "g"), "$1"), o.radixPoint === "," && (n = n.replace((0, _.default)(o.radixPoint), ".")), isFinite(n);
                },
                onBeforeMask: function(e, o) {
                  var n = o.radixPoint || ",";
                  isFinite(o.digits) && (o.digits = parseInt(o.digits)), typeof e != "number" && o.inputType !== "number" || n === "" || (e = e.toString().replace(".", n));
                  var t = e.charAt(0) === "-" || e.charAt(0) === o.negationSymbol.front, i = e.split(n), l = i[0].replace(/[^\-0-9]/g, ""), s = i.length > 1 ? i[1].replace(/[^0-9]/g, "") : "", d = i.length > 1;
                  e = l + (s !== "" ? n + s : s);
                  var r = 0;
                  if (n !== "" && (r = o.digitsOptional ? o.digits < s.length ? o.digits : s.length : o.digits, s !== "" || !o.digitsOptional)) {
                    var u = Math.pow(10, r || 1);
                    e = e.replace((0, _.default)(n), "."), isNaN(parseFloat(e)) || (e = (o.roundingFN(parseFloat(e) * u) / u).toFixed(r)), e = e.toString().replace(".", n);
                  }
                  if (o.digits === 0 && e.indexOf(n) !== -1 && (e = e.substring(0, e.indexOf(n))), o.min !== null || o.max !== null) {
                    var g = e.toString().replace(n, ".");
                    o.min !== null && g < o.min ? e = o.min.toString().replace(".", n) : o.max !== null && g > o.max && (e = o.max.toString().replace(".", n));
                  }
                  return t && e.charAt(0) !== "-" && (e = "-" + e), h(e.toString().split(""), r, o, d).join("");
                },
                onBeforeWrite: function(e, o, n, t) {
                  function i(x, E) {
                    if (t.__financeInput !== !1 || E) {
                      var f = x.indexOf(t.radixPoint);
                      f !== -1 && x.splice(f, 1);
                    }
                    if (t.groupSeparator !== "")
                      for (; (f = x.indexOf(t.groupSeparator)) !== -1; )
                        x.splice(f, 1);
                    return x;
                  }
                  var l, s;
                  if (t.stripLeadingZeroes && (s = function(x, E) {
                    var f = new RegExp("(^" + (E.negationSymbol.front !== "" ? (0, _.default)(E.negationSymbol.front) + "?" : "") + (0, _.default)(E.prefix) + ")(.*)(" + (0, _.default)(E.suffix) + (E.negationSymbol.back != "" ? (0, _.default)(E.negationSymbol.back) + "?" : "") + "$)").exec(x.slice().reverse().join("")), v = f ? f[2] : "", C = !1;
                    return v && (v = v.split(E.radixPoint.charAt(0))[0], C = new RegExp("^[0" + E.groupSeparator + "]*").exec(v)), !(!C || !(C[0].length > 1 || C[0].length > 0 && C[0].length < v.length)) && C;
                  }(o, t)))
                    for (var d = o.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), r = s[0] == s.input ? 1 : 0, u = s[0].length - r; u > 0; u--)
                      delete this.maskset.validPositions[d + u], delete o[d + u];
                  if (e)
                    switch (e.type) {
                      case "blur":
                      case "checkval":
                        if (t.min !== null) {
                          var g = t.onUnMask(o.slice().reverse().join(""), void 0, R.extend({}, t, {
                            unmaskAsNumber: !0
                          }));
                          if (t.min !== null && g < t.min)
                            return {
                              refreshFromBuffer: !0,
                              buffer: h(t.min.toString().replace(".", t.radixPoint).split(""), t.digits, t).reverse()
                            };
                        }
                        if (o[o.length - 1] === t.negationSymbol.front) {
                          var M = new RegExp("(^" + (t.negationSymbol.front != "" ? (0, _.default)(t.negationSymbol.front) + "?" : "") + (0, _.default)(t.prefix) + ")(.*)(" + (0, _.default)(t.suffix) + (t.negationSymbol.back != "" ? (0, _.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(i(o.slice(), !0).reverse().join(""));
                          (M ? M[2] : "") == 0 && (l = {
                            refreshFromBuffer: !0,
                            buffer: [0]
                          });
                        } else
                          t.radixPoint !== "" && o.indexOf(t.radixPoint) === t.suffix.length && (l && l.buffer ? l.buffer.splice(0, 1 + t.suffix.length) : (o.splice(0, 1 + t.suffix.length), l = {
                            refreshFromBuffer: !0,
                            buffer: i(o)
                          }));
                        if (t.enforceDigitsOnBlur) {
                          var y = (l = l || {}) && l.buffer || o.slice().reverse();
                          l.refreshFromBuffer = !0, l.buffer = h(y, t.digits, t, !0).reverse();
                        }
                    }
                  return l;
                },
                onKeyDown: function(e, o, n, t) {
                  var i, l = R(this);
                  if (e.location != 3) {
                    var s, d = e.key;
                    if ((s = t.shortcuts && t.shortcuts[d]) && s.length > 1)
                      return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), l.trigger("setvalue"), !1;
                  }
                  if (e.ctrlKey)
                    switch (e.key) {
                      case B.keys.ArrowUp:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(t.step)), l.trigger("setvalue"), !1;
                      case B.keys.ArrowDown:
                        return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(t.step)), l.trigger("setvalue"), !1;
                    }
                  if (!e.shiftKey && (e.key === B.keys.Delete || e.key === B.keys.Backspace || e.key === B.keys.BACKSPACE_SAFARI) && n.begin !== o.length) {
                    if (o[e.key === B.keys.Delete ? n.begin - 1 : n.end] === t.negationSymbol.front)
                      return i = o.slice().reverse(), t.negationSymbol.front !== "" && i.shift(), t.negationSymbol.back !== "" && i.pop(), l.trigger("setvalue", [i.join(""), n.begin]), !1;
                    if (t._radixDance === !0) {
                      var r = o.indexOf(t.radixPoint);
                      if (t.digitsOptional) {
                        if (r === 0)
                          return (i = o.slice().reverse()).pop(), l.trigger("setvalue", [i.join(""), n.begin >= i.length ? i.length : n.begin]), !1;
                      } else if (r !== -1 && (n.begin < r || n.end < r || e.key === B.keys.Delete && (n.begin === r || n.begin - 1 === r))) {
                        var u = void 0;
                        return n.begin === n.end && (e.key === B.keys.Backspace || e.key === B.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === B.keys.Delete && n.begin - 1 === r && (u = R.extend({}, n), n.begin--, n.end--)), (i = o.slice().reverse()).splice(i.length - n.begin, n.begin - n.end + 1), i = h(i, t.digits, t).join(""), u && (n = u), l.trigger("setvalue", [i, n.begin >= i.length ? r + 1 : n.begin]), !1;
                      }
                    }
                  }
                }
              },
              currency: {
                prefix: "",
                groupSeparator: ",",
                alias: "numeric",
                digits: 2,
                digitsOptional: !1
              },
              decimal: {
                alias: "numeric"
              },
              integer: {
                alias: "numeric",
                inputmode: "numeric",
                digits: 0
              },
              percentage: {
                alias: "numeric",
                min: 0,
                max: 100,
                suffix: " %",
                digits: 0,
                allowMinus: !1
              },
              indianns: {
                alias: "numeric",
                _mask: function(e) {
                  return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                },
                groupSeparator: ",",
                radixPoint: ".",
                placeholder: "0",
                digits: 2,
                digitsOptional: !1
              }
            });
          },
          9380: function(G, k, w) {
            var p;
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = void 0;
            var _ = ((p = w(8741)) && p.__esModule ? p : {
              default: p
            }).default ? window : {};
            k.default = _;
          },
          7760: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.HandleNativePlaceholder = function(a, e) {
              var o = a ? a.inputmask : this;
              if (D.ie) {
                if (a.inputmask._valueGet() !== e && (a.placeholder !== e || a.placeholder === "")) {
                  var n = L.getBuffer.call(o).slice(), t = a.inputmask._valueGet();
                  if (t !== e) {
                    var i = L.getLastValidPosition.call(o);
                    i === -1 && t === L.getBufferTemplate.call(o).join("") ? n = [] : i !== -1 && h.call(o, n), c(a, n);
                  }
                }
              } else
                a.placeholder !== e && (a.placeholder = e, a.placeholder === "" && a.removeAttribute("placeholder"));
            }, k.applyInputValue = b, k.checkVal = m, k.clearOptionalTail = h, k.unmaskedvalue = function(a) {
              var e = a ? a.inputmask : this, o = e.opts, n = e.maskset;
              if (a) {
                if (a.inputmask === void 0)
                  return a.value;
                a.inputmask && a.inputmask.refreshValue && b(a, a.inputmask._valueGet(!0));
              }
              for (var t = [], i = n.validPositions, l = 0, s = i.length; l < s; l++)
                i[l] && i[l].match && (i[l].match.static != 1 || Array.isArray(n.metadata) && i[l].generatedInput !== !0) && t.push(i[l].input);
              var d = t.length === 0 ? "" : (e.isRTL ? t.reverse() : t).join("");
              if (typeof o.onUnMask == "function") {
                var r = (e.isRTL ? L.getBuffer.call(e).slice().reverse() : L.getBuffer.call(e)).join("");
                d = o.onUnMask.call(e, r, d, o);
              }
              return d;
            }, k.writeBuffer = c;
            var p = w(2839), _ = w(4713), L = w(8711), B = w(7215), D = w(9845), R = w(6030);
            function b(a, e) {
              var o = a ? a.inputmask : this, n = o.opts;
              a.inputmask.refreshValue = !1, typeof n.onBeforeMask == "function" && (e = n.onBeforeMask.call(o, e, n) || e), m(a, !0, !1, e = (e || "").toString().split("")), o.undoValue = o._valueGet(!0), (n.clearMaskOnLostFocus || n.clearIncomplete) && a.inputmask._valueGet() === L.getBufferTemplate.call(o).join("") && L.getLastValidPosition.call(o) === -1 && a.inputmask._valueSet("");
            }
            function h(a) {
              a.length = 0;
              for (var e, o = _.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); (e = o.shift()) !== void 0; )
                a.push(e);
              return a;
            }
            function m(a, e, o, n, t) {
              var i = a ? a.inputmask : this, l = i.maskset, s = i.opts, d = i.dependencyLib, r = n.slice(), u = "", g = -1, M = void 0, y = s.skipOptionalPartCharacter;
              s.skipOptionalPartCharacter = "", L.resetMaskSet.call(i), l.tests = {}, g = s.radixPoint ? L.determineNewCaretPosition.call(i, {
                begin: 0,
                end: 0
              }, !1, s.__financeInput === !1 ? "radixFocus" : void 0).begin : 0, l.p = g, i.caretPos = {
                begin: g
              };
              var x = [], E = i.caretPos;
              if (r.forEach(function(F, A) {
                if (F !== void 0) {
                  var I = new d.Event("_checkval");
                  I.key = F, u += F;
                  var O = L.getLastValidPosition.call(i, void 0, !0);
                  (function(N, V) {
                    for (var z = _.getMaskTemplate.call(i, !0, 0).slice(N, L.seekNext.call(i, N, !1, !1)).join("").replace(/'/g, ""), P = z.indexOf(V); P > 0 && z[P - 1] === " "; )
                      P--;
                    var Z = P === 0 && !L.isMask.call(i, N) && (_.getTest.call(i, N).match.nativeDef === V.charAt(0) || _.getTest.call(i, N).match.static === !0 && _.getTest.call(i, N).match.nativeDef === "'" + V.charAt(0) || _.getTest.call(i, N).match.nativeDef === " " && (_.getTest.call(i, N + 1).match.nativeDef === V.charAt(0) || _.getTest.call(i, N + 1).match.static === !0 && _.getTest.call(i, N + 1).match.nativeDef === "'" + V.charAt(0)));
                    if (!Z && P > 0 && !L.isMask.call(i, N, !1, !0)) {
                      var Y = L.seekNext.call(i, N);
                      i.caretPos.begin < Y && (i.caretPos = {
                        begin: Y
                      });
                    }
                    return Z;
                  })(g, u) ? M = R.EventHandlers.keypressEvent.call(i, I, !0, !1, o, O + 1) : (M = R.EventHandlers.keypressEvent.call(i, I, !0, !1, o, i.caretPos.begin)) && (g = i.caretPos.begin + 1, u = ""), M ? (M.pos !== void 0 && l.validPositions[M.pos] && l.validPositions[M.pos].match.static === !0 && l.validPositions[M.pos].alternation === void 0 && (x.push(M.pos), i.isRTL || (M.forwardPosition = M.pos + 1)), c.call(i, void 0, L.getBuffer.call(i), M.forwardPosition, I, !1), i.caretPos = {
                    begin: M.forwardPosition,
                    end: M.forwardPosition
                  }, E = i.caretPos) : l.validPositions[A] === void 0 && r[A] === _.getPlaceholder.call(i, A) && L.isMask.call(i, A, !0) ? i.caretPos.begin++ : i.caretPos = E;
                }
              }), x.length > 0) {
                var f, v, C = L.seekNext.call(i, -1, void 0, !1);
                if (!B.isComplete.call(i, L.getBuffer.call(i)) && x.length <= C || B.isComplete.call(i, L.getBuffer.call(i)) && x.length > 0 && x.length !== C && x[0] === 0)
                  for (var S = C; (f = x.shift()) !== void 0; ) {
                    var T = new d.Event("_checkval");
                    if ((v = l.validPositions[f]).generatedInput = !0, T.key = v.input, (M = R.EventHandlers.keypressEvent.call(i, T, !0, !1, o, S)) && M.pos !== void 0 && M.pos !== f && l.validPositions[M.pos] && l.validPositions[M.pos].match.static === !0)
                      x.push(M.pos);
                    else if (!M)
                      break;
                    S++;
                  }
              }
              e && c.call(i, a, L.getBuffer.call(i), M ? M.forwardPosition : i.caretPos.begin, t || new d.Event("checkval"), t && (t.type === "input" && i.undoValue !== L.getBuffer.call(i).join("") || t.type === "paste")), s.skipOptionalPartCharacter = y;
            }
            function c(a, e, o, n, t) {
              var i = a ? a.inputmask : this, l = i.opts, s = i.dependencyLib;
              if (n && typeof l.onBeforeWrite == "function") {
                var d = l.onBeforeWrite.call(i, n, e, o, l);
                if (d) {
                  if (d.refreshFromBuffer) {
                    var r = d.refreshFromBuffer;
                    B.refreshFromBuffer.call(i, r === !0 ? r : r.start, r.end, d.buffer || e), e = L.getBuffer.call(i, !0);
                  }
                  o !== void 0 && (o = d.caret !== void 0 ? d.caret : o);
                }
              }
              if (a !== void 0 && (a.inputmask._valueSet(e.join("")), o === void 0 || n !== void 0 && n.type === "blur" || L.caret.call(i, a, o, void 0, void 0, n !== void 0 && n.type === "keydown" && (n.key === p.keys.Delete || n.key === p.keys.Backspace)), t === !0)) {
                var u = s(a), g = a.inputmask._valueGet();
                a.inputmask.skipInputEvent = !0, u.trigger("input"), setTimeout(function() {
                  g === L.getBufferTemplate.call(i).join("") ? u.trigger("cleared") : B.isComplete.call(i, e) === !0 && u.trigger("complete");
                }, 0);
              }
            }
          },
          2394: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = void 0;
            var p = w(157), _ = n(w(4963)), L = n(w(9380)), B = w(2391), D = w(4713), R = w(8711), b = w(7215), h = w(7760), m = w(9716), c = n(w(7392)), a = n(w(3976)), e = n(w(8741));
            function o(r) {
              return o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                return typeof u;
              } : function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
              }, o(r);
            }
            function n(r) {
              return r && r.__esModule ? r : {
                default: r
              };
            }
            var t = L.default.document, i = "_inputmask_opts";
            function l(r, u, g) {
              if (e.default) {
                if (!(this instanceof l))
                  return new l(r, u, g);
                this.dependencyLib = _.default, this.el = void 0, this.events = {}, this.maskset = void 0, g !== !0 && (Object.prototype.toString.call(r) === "[object Object]" ? u = r : (u = u || {}, r && (u.alias = r)), this.opts = _.default.extend(!0, {}, this.defaults, u), this.noMasksCache = u && u.definitions !== void 0, this.userOptions = u || {}, s(this.opts.alias, u, this.opts)), this.refreshValue = !1, this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, this.isComposing = !1, this.hasAlternator = !1;
              }
            }
            function s(r, u, g) {
              var M = l.prototype.aliases[r];
              return M ? (M.alias && s(M.alias, void 0, g), _.default.extend(!0, g, M), _.default.extend(!0, g, u), !0) : (g.mask === null && (g.mask = r), !1);
            }
            l.prototype = {
              dataAttribute: "data-inputmask",
              defaults: a.default,
              definitions: c.default,
              aliases: {},
              masksCache: {},
              get isRTL() {
                return this.opts.isRTL || this.opts.numericInput;
              },
              mask: function(r) {
                var u = this;
                return typeof r == "string" && (r = t.getElementById(r) || t.querySelectorAll(r)), (r = r.nodeName ? [r] : Array.isArray(r) ? r : [].slice.call(r)).forEach(function(g, M) {
                  var y = _.default.extend(!0, {}, u.opts);
                  if (function(E, f, v, C) {
                    function S(N, V) {
                      var z = C === "" ? N : C + "-" + N;
                      (V = V !== void 0 ? V : E.getAttribute(z)) !== null && (typeof V == "string" && (N.indexOf("on") === 0 ? V = L.default[V] : V === "false" ? V = !1 : V === "true" && (V = !0)), v[N] = V);
                    }
                    if (f.importDataAttributes === !0) {
                      var T, F, A, I, O = E.getAttribute(C);
                      if (O && O !== "" && (O = O.replace(/'/g, '"'), F = JSON.parse("{" + O + "}")), F) {
                        for (I in A = void 0, F)
                          if (I.toLowerCase() === "alias") {
                            A = F[I];
                            break;
                          }
                      }
                      for (T in S("alias", A), v.alias && s(v.alias, v, f), f) {
                        if (F) {
                          for (I in A = void 0, F)
                            if (I.toLowerCase() === T.toLowerCase()) {
                              A = F[I];
                              break;
                            }
                        }
                        S(T, A);
                      }
                    }
                    return _.default.extend(!0, f, v), (E.dir === "rtl" || f.rightAlign) && (E.style.textAlign = "right"), (E.dir === "rtl" || f.numericInput) && (E.dir = "ltr", E.removeAttribute("dir"), f.isRTL = !0), Object.keys(v).length;
                  }(g, y, _.default.extend(!0, {}, u.userOptions), u.dataAttribute)) {
                    var x = (0, B.generateMaskSet)(y, u.noMasksCache);
                    x !== void 0 && (g.inputmask !== void 0 && (g.inputmask.opts.autoUnmask = !0, g.inputmask.remove()), g.inputmask = new l(void 0, void 0, !0), g.inputmask.opts = y, g.inputmask.noMasksCache = u.noMasksCache, g.inputmask.userOptions = _.default.extend(!0, {}, u.userOptions), g.inputmask.el = g, g.inputmask.$el = (0, _.default)(g), g.inputmask.maskset = x, _.default.data(g, i, u.userOptions), p.mask.call(g.inputmask));
                  }
                }), r && r[0] && r[0].inputmask || this;
              },
              option: function(r, u) {
                return typeof r == "string" ? this.opts[r] : o(r) === "object" ? (_.default.extend(this.userOptions, r), this.el && u !== !0 && this.mask(this.el), this) : void 0;
              },
              unmaskedvalue: function(r) {
                if (this.maskset = this.maskset || (0, B.generateMaskSet)(this.opts, this.noMasksCache), this.el === void 0 || r !== void 0) {
                  var u = (typeof this.opts.onBeforeMask == "function" && this.opts.onBeforeMask.call(this, r, this.opts) || r).split("");
                  h.checkVal.call(this, void 0, !1, !1, u), typeof this.opts.onBeforeWrite == "function" && this.opts.onBeforeWrite.call(this, void 0, R.getBuffer.call(this), 0, this.opts);
                }
                return h.unmaskedvalue.call(this, this.el);
              },
              remove: function() {
                if (this.el) {
                  _.default.data(this.el, i, null);
                  var r = this.opts.autoUnmask ? (0, h.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                  r !== R.getBufferTemplate.call(this).join("") ? this._valueSet(r, this.opts.autoUnmask) : this._valueSet(""), m.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                    get: this.__valueGet,
                    set: this.__valueSet,
                    configurable: !0
                  }) : t.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                }
                return this.el;
              },
              getemptymask: function() {
                return this.maskset = this.maskset || (0, B.generateMaskSet)(this.opts, this.noMasksCache), (this.isRTL ? R.getBufferTemplate.call(this).reverse() : R.getBufferTemplate.call(this)).join("");
              },
              hasMaskedValue: function() {
                return !this.opts.autoUnmask;
              },
              isComplete: function() {
                return this.maskset = this.maskset || (0, B.generateMaskSet)(this.opts, this.noMasksCache), b.isComplete.call(this, R.getBuffer.call(this));
              },
              getmetadata: function() {
                if (this.maskset = this.maskset || (0, B.generateMaskSet)(this.opts, this.noMasksCache), Array.isArray(this.maskset.metadata)) {
                  var r = D.getMaskTemplate.call(this, !0, 0, !1).join("");
                  return this.maskset.metadata.forEach(function(u) {
                    return u.mask !== r || (r = u, !1);
                  }), r;
                }
                return this.maskset.metadata;
              },
              isValid: function(r) {
                if (this.maskset = this.maskset || (0, B.generateMaskSet)(this.opts, this.noMasksCache), r) {
                  var u = (typeof this.opts.onBeforeMask == "function" && this.opts.onBeforeMask.call(this, r, this.opts) || r).split("");
                  h.checkVal.call(this, void 0, !0, !1, u);
                } else
                  r = this.isRTL ? R.getBuffer.call(this).slice().reverse().join("") : R.getBuffer.call(this).join("");
                for (var g = R.getBuffer.call(this), M = R.determineLastRequiredPosition.call(this), y = g.length - 1; y > M && !R.isMask.call(this, y); y--)
                  ;
                return g.splice(M, y + 1 - M), b.isComplete.call(this, g) && r === (this.isRTL ? R.getBuffer.call(this).slice().reverse().join("") : R.getBuffer.call(this).join(""));
              },
              format: function(r, u) {
                this.maskset = this.maskset || (0, B.generateMaskSet)(this.opts, this.noMasksCache);
                var g = (typeof this.opts.onBeforeMask == "function" && this.opts.onBeforeMask.call(this, r, this.opts) || r).split("");
                h.checkVal.call(this, void 0, !0, !1, g);
                var M = this.isRTL ? R.getBuffer.call(this).slice().reverse().join("") : R.getBuffer.call(this).join("");
                return u ? {
                  value: M,
                  metadata: this.getmetadata()
                } : M;
              },
              setValue: function(r) {
                this.el && (0, _.default)(this.el).trigger("setvalue", [r]);
              },
              analyseMask: B.analyseMask
            }, l.extendDefaults = function(r) {
              _.default.extend(!0, l.prototype.defaults, r);
            }, l.extendDefinitions = function(r) {
              _.default.extend(!0, l.prototype.definitions, r);
            }, l.extendAliases = function(r) {
              _.default.extend(!0, l.prototype.aliases, r);
            }, l.format = function(r, u, g) {
              return l(u).format(r, g);
            }, l.unmask = function(r, u) {
              return l(u).unmaskedvalue(r);
            }, l.isValid = function(r, u) {
              return l(u).isValid(r);
            }, l.remove = function(r) {
              typeof r == "string" && (r = t.getElementById(r) || t.querySelectorAll(r)), (r = r.nodeName ? [r] : r).forEach(function(u) {
                u.inputmask && u.inputmask.remove();
              });
            }, l.setValue = function(r, u) {
              typeof r == "string" && (r = t.getElementById(r) || t.querySelectorAll(r)), (r = r.nodeName ? [r] : r).forEach(function(g) {
                g.inputmask ? g.inputmask.setValue(u) : (0, _.default)(g).trigger("setvalue", [u]);
              });
            }, l.dependencyLib = _.default, L.default.Inputmask = l;
            var d = l;
            k.default = d;
          },
          5296: function(G, k, w) {
            function p(n) {
              return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t;
              } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
              }, p(n);
            }
            var _ = a(w(9380)), L = a(w(2394)), B = a(w(8741));
            function D(n) {
              var t = h();
              return function() {
                var i, l = c(n);
                if (t) {
                  var s = c(this).constructor;
                  i = Reflect.construct(l, arguments, s);
                } else
                  i = l.apply(this, arguments);
                return function(d, r) {
                  if (r && (p(r) === "object" || typeof r == "function"))
                    return r;
                  if (r !== void 0)
                    throw new TypeError("Derived constructors may only return object or undefined");
                  return function(u) {
                    if (u === void 0)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return u;
                  }(d);
                }(this, i);
              };
            }
            function R(n) {
              var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
              return R = function(i) {
                if (i === null || (l = i, Function.toString.call(l).indexOf("[native code]") === -1))
                  return i;
                var l;
                if (typeof i != "function")
                  throw new TypeError("Super expression must either be null or a function");
                if (t !== void 0) {
                  if (t.has(i))
                    return t.get(i);
                  t.set(i, s);
                }
                function s() {
                  return b(i, arguments, c(this).constructor);
                }
                return s.prototype = Object.create(i.prototype, {
                  constructor: {
                    value: s,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                  }
                }), m(s, i);
              }, R(n);
            }
            function b(n, t, i) {
              return b = h() ? Reflect.construct.bind() : function(l, s, d) {
                var r = [null];
                r.push.apply(r, s);
                var u = new (Function.bind.apply(l, r))();
                return d && m(u, d.prototype), u;
              }, b.apply(null, arguments);
            }
            function h() {
              if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
                return !1;
              if (typeof Proxy == "function")
                return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), !0;
              } catch {
                return !1;
              }
            }
            function m(n, t) {
              return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, l) {
                return i.__proto__ = l, i;
              }, m(n, t);
            }
            function c(n) {
              return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }, c(n);
            }
            function a(n) {
              return n && n.__esModule ? n : {
                default: n
              };
            }
            var e = _.default.document;
            if (B.default && e && e.head && e.head.attachShadow && _.default.customElements && _.default.customElements.get("input-mask") === void 0) {
              var o = function(n) {
                (function(s, d) {
                  if (typeof d != "function" && d !== null)
                    throw new TypeError("Super expression must either be null or a function");
                  s.prototype = Object.create(d && d.prototype, {
                    constructor: {
                      value: s,
                      writable: !0,
                      configurable: !0
                    }
                  }), Object.defineProperty(s, "prototype", {
                    writable: !1
                  }), d && m(s, d);
                })(l, n);
                var t, i = D(l);
                function l() {
                  var s;
                  (function(y, x) {
                    if (!(y instanceof x))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, l);
                  var d = (s = i.call(this)).getAttributeNames(), r = s.attachShadow({
                    mode: "closed"
                  }), u = e.createElement("input");
                  for (var g in u.type = "text", r.appendChild(u), d)
                    Object.prototype.hasOwnProperty.call(d, g) && u.setAttribute(d[g], s.getAttribute(d[g]));
                  var M = new L.default();
                  return M.dataAttribute = "", M.mask(u), u.inputmask.shadowRoot = r, s;
                }
                return t = l, Object.defineProperty(t, "prototype", {
                  writable: !1
                }), t;
              }(R(HTMLElement));
              _.default.customElements.define("input-mask", o);
            }
          },
          2839: function(G, k) {
            function w(D, R) {
              return function(b) {
                if (Array.isArray(b))
                  return b;
              }(D) || function(b, h) {
                var m = b == null ? null : typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
                if (m != null) {
                  var c, a, e, o, n = [], t = !0, i = !1;
                  try {
                    if (e = (m = m.call(b)).next, h === 0) {
                      if (Object(m) !== m)
                        return;
                      t = !1;
                    } else
                      for (; !(t = (c = e.call(m)).done) && (n.push(c.value), n.length !== h); t = !0)
                        ;
                  } catch (l) {
                    i = !0, a = l;
                  } finally {
                    try {
                      if (!t && m.return != null && (o = m.return(), Object(o) !== o))
                        return;
                    } finally {
                      if (i)
                        throw a;
                    }
                  }
                  return n;
                }
              }(D, R) || function(b, h) {
                if (b) {
                  if (typeof b == "string")
                    return p(b, h);
                  var m = Object.prototype.toString.call(b).slice(8, -1);
                  if (m === "Object" && b.constructor && (m = b.constructor.name), m === "Map" || m === "Set")
                    return Array.from(b);
                  if (m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m))
                    return p(b, h);
                }
              }(D, R) || function() {
                throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
              }();
            }
            function p(D, R) {
              (R == null || R > D.length) && (R = D.length);
              for (var b = 0, h = new Array(R); b < R; b++)
                h[b] = D[b];
              return h;
            }
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.keys = k.keyCode = void 0, k.toKey = function(D, R) {
              return L[D] || (R ? String.fromCharCode(D) : String.fromCharCode(D).toLowerCase());
            }, k.toKeyCode = function(D) {
              return _[D];
            };
            var _ = {
              AltGraph: 18,
              ArrowDown: 40,
              ArrowLeft: 37,
              ArrowRight: 39,
              ArrowUp: 38,
              Backspace: 8,
              BACKSPACE_SAFARI: 127,
              CapsLock: 20,
              Delete: 46,
              End: 35,
              Enter: 13,
              Escape: 27,
              Home: 36,
              Insert: 45,
              PageDown: 34,
              PageUp: 33,
              Space: 32,
              Tab: 9,
              c: 67,
              x: 88,
              z: 90,
              Shift: 16,
              Control: 17,
              Alt: 18,
              Pause: 19,
              Meta_LEFT: 91,
              Meta_RIGHT: 92,
              ContextMenu: 93,
              Process: 229,
              Unidentified: 229,
              F1: 112,
              F2: 113,
              F3: 114,
              F4: 115,
              F5: 116,
              F6: 117,
              F7: 118,
              F8: 119,
              F9: 120,
              F10: 121,
              F11: 122,
              F12: 123
            };
            k.keyCode = _;
            var L = Object.entries(_).reduce(function(D, R) {
              var b = w(R, 2), h = b[0], m = b[1];
              return D[m] = D[m] === void 0 ? h : D[m], D;
            }, {}), B = Object.entries(_).reduce(function(D, R) {
              var b = w(R, 2), h = b[0];
              return b[1], D[h] = h === "Space" ? " " : h, D;
            }, {});
            k.keys = B;
          },
          2391: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.analyseMask = function(b, h, m) {
              var c, a, e, o, n, t, i = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, l = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, s = !1, d = new _.default(), r = [], u = [], g = !1;
              function M(z, P, Z) {
                Z = Z !== void 0 ? Z : z.matches.length;
                var Y = z.matches[Z - 1];
                if (h) {
                  if (P.indexOf("[") === 0 || s && /\\d|\\s|\\w|\\p/i.test(P) || P === ".") {
                    var oe = m.casing ? "i" : "";
                    /^\\p\{.*}$/i.test(P) && (oe += "u"), z.matches.splice(Z++, 0, {
                      fn: new RegExp(P, oe),
                      static: !1,
                      optionality: !1,
                      newBlockMarker: Y === void 0 ? "master" : Y.def !== P,
                      casing: null,
                      def: P,
                      placeholder: void 0,
                      nativeDef: P
                    });
                  } else
                    s && (P = P[P.length - 1]), P.split("").forEach(function(ne, se) {
                      Y = z.matches[Z - 1], z.matches.splice(Z++, 0, {
                        fn: /[a-z]/i.test(m.staticDefinitionSymbol || ne) ? new RegExp("[" + (m.staticDefinitionSymbol || ne) + "]", m.casing ? "i" : "") : null,
                        static: !0,
                        optionality: !1,
                        newBlockMarker: Y === void 0 ? "master" : Y.def !== ne && Y.static !== !0,
                        casing: null,
                        def: m.staticDefinitionSymbol || ne,
                        placeholder: m.staticDefinitionSymbol !== void 0 ? ne : void 0,
                        nativeDef: (s ? "'" : "") + ne
                      });
                    });
                  s = !1;
                } else {
                  var q = m.definitions && m.definitions[P] || m.usePrototypeDefinitions && L.default.prototype.definitions[P];
                  q && !s ? z.matches.splice(Z++, 0, {
                    fn: q.validator ? typeof q.validator == "string" ? new RegExp(q.validator, m.casing ? "i" : "") : new function() {
                      this.test = q.validator;
                    }() : new RegExp("."),
                    static: q.static || !1,
                    optionality: q.optional || !1,
                    defOptionality: q.optional || !1,
                    newBlockMarker: Y === void 0 || q.optional ? "master" : Y.def !== (q.definitionSymbol || P),
                    casing: q.casing,
                    def: q.definitionSymbol || P,
                    placeholder: q.placeholder,
                    nativeDef: P,
                    generated: q.generated
                  }) : (z.matches.splice(Z++, 0, {
                    fn: /[a-z]/i.test(m.staticDefinitionSymbol || P) ? new RegExp("[" + (m.staticDefinitionSymbol || P) + "]", m.casing ? "i" : "") : null,
                    static: !0,
                    optionality: !1,
                    newBlockMarker: Y === void 0 ? "master" : Y.def !== P && Y.static !== !0,
                    casing: null,
                    def: m.staticDefinitionSymbol || P,
                    placeholder: m.staticDefinitionSymbol !== void 0 ? P : void 0,
                    nativeDef: (s ? "'" : "") + P
                  }), s = !1);
                }
              }
              function y() {
                if (r.length > 0) {
                  if (M(o = r[r.length - 1], a), o.isAlternator) {
                    n = r.pop();
                    for (var z = 0; z < n.matches.length; z++)
                      n.matches[z].isGroup && (n.matches[z].isGroup = !1);
                    r.length > 0 ? (o = r[r.length - 1]).matches.push(n) : d.matches.push(n);
                  }
                } else
                  M(d, a);
              }
              function x(z) {
                var P = new _.default(!0);
                return P.openGroup = !1, P.matches = z, P;
              }
              function E() {
                if ((e = r.pop()).openGroup = !1, e !== void 0)
                  if (r.length > 0) {
                    if ((o = r[r.length - 1]).matches.push(e), o.isAlternator) {
                      for (var z = (n = r.pop()).matches[0].matches ? n.matches[0].matches.length : 1, P = 0; P < n.matches.length; P++)
                        n.matches[P].isGroup = !1, n.matches[P].alternatorGroup = !1, m.keepStatic === null && z < (n.matches[P].matches ? n.matches[P].matches.length : 1) && (m.keepStatic = !0), z = n.matches[P].matches ? n.matches[P].matches.length : 1;
                      r.length > 0 ? (o = r[r.length - 1]).matches.push(n) : d.matches.push(n);
                    }
                  } else
                    d.matches.push(e);
                else
                  y();
              }
              function f(z) {
                var P = z.pop();
                return P.isQuantifier && (P = x([z.pop(), P])), P;
              }
              for (h && (m.optionalmarker[0] = void 0, m.optionalmarker[1] = void 0); c = h ? l.exec(b) : i.exec(b); ) {
                if (a = c[0], h) {
                  switch (a.charAt(0)) {
                    case "?":
                      a = "{0,1}";
                      break;
                    case "+":
                    case "*":
                      a = "{" + a + "}";
                      break;
                    case "|":
                      if (r.length === 0) {
                        var v = x(d.matches);
                        v.openGroup = !0, r.push(v), d.matches = [], g = !0;
                      }
                  }
                  switch (a) {
                    case "\\d":
                      a = "[0-9]";
                      break;
                    case "\\p":
                      a += l.exec(b)[0], a += l.exec(b)[0];
                  }
                }
                if (s)
                  y();
                else
                  switch (a.charAt(0)) {
                    case "$":
                    case "^":
                      h || y();
                      break;
                    case m.escapeChar:
                      s = !0, h && y();
                      break;
                    case m.optionalmarker[1]:
                    case m.groupmarker[1]:
                      E();
                      break;
                    case m.optionalmarker[0]:
                      r.push(new _.default(!1, !0));
                      break;
                    case m.groupmarker[0]:
                      r.push(new _.default(!0));
                      break;
                    case m.quantifiermarker[0]:
                      var C = new _.default(!1, !1, !0), S = (a = a.replace(/[{}?]/g, "")).split("|"), T = S[0].split(","), F = isNaN(T[0]) ? T[0] : parseInt(T[0]), A = T.length === 1 ? F : isNaN(T[1]) ? T[1] : parseInt(T[1]), I = isNaN(S[1]) ? S[1] : parseInt(S[1]);
                      F !== "*" && F !== "+" || (F = A === "*" ? 0 : 1), C.quantifier = {
                        min: F,
                        max: A,
                        jit: I
                      };
                      var O = r.length > 0 ? r[r.length - 1].matches : d.matches;
                      (c = O.pop()).isGroup || (c = x([c])), O.push(c), O.push(C);
                      break;
                    case m.alternatormarker:
                      if (r.length > 0) {
                        var N = (o = r[r.length - 1]).matches[o.matches.length - 1];
                        t = o.openGroup && (N.matches === void 0 || N.isGroup === !1 && N.isAlternator === !1) ? r.pop() : f(o.matches);
                      } else
                        t = f(d.matches);
                      if (t.isAlternator)
                        r.push(t);
                      else if (t.alternatorGroup ? (n = r.pop(), t.alternatorGroup = !1) : n = new _.default(!1, !1, !1, !0), n.matches.push(t), r.push(n), t.openGroup) {
                        t.openGroup = !1;
                        var V = new _.default(!0);
                        V.alternatorGroup = !0, r.push(V);
                      }
                      break;
                    default:
                      y();
                  }
              }
              for (g && E(); r.length > 0; )
                e = r.pop(), d.matches.push(e);
              return d.matches.length > 0 && (function z(P) {
                P && P.matches && P.matches.forEach(function(Z, Y) {
                  var oe = P.matches[Y + 1];
                  (oe === void 0 || oe.matches === void 0 || oe.isQuantifier === !1) && Z && Z.isGroup && (Z.isGroup = !1, h || (M(Z, m.groupmarker[0], 0), Z.openGroup !== !0 && M(Z, m.groupmarker[1]))), z(Z);
                });
              }(d), u.push(d)), (m.numericInput || m.isRTL) && function z(P) {
                for (var Z in P.matches = P.matches.reverse(), P.matches)
                  if (Object.prototype.hasOwnProperty.call(P.matches, Z)) {
                    var Y = parseInt(Z);
                    if (P.matches[Z].isQuantifier && P.matches[Y + 1] && P.matches[Y + 1].isGroup) {
                      var oe = P.matches[Z];
                      P.matches.splice(Z, 1), P.matches.splice(Y + 1, 0, oe);
                    }
                    P.matches[Z].matches !== void 0 ? P.matches[Z] = z(P.matches[Z]) : P.matches[Z] = ((q = P.matches[Z]) === m.optionalmarker[0] ? q = m.optionalmarker[1] : q === m.optionalmarker[1] ? q = m.optionalmarker[0] : q === m.groupmarker[0] ? q = m.groupmarker[1] : q === m.groupmarker[1] && (q = m.groupmarker[0]), q);
                  }
                var q;
                return P;
              }(u[0]), u;
            }, k.generateMaskSet = function(b, h) {
              var m;
              function c(o, n) {
                var t = n.repeat, i = n.groupmarker, l = n.quantifiermarker, s = n.keepStatic;
                if (t > 0 || t === "*" || t === "+") {
                  var d = t === "*" ? 0 : t === "+" ? 1 : t;
                  o = i[0] + o + i[1] + l[0] + d + "," + t + l[1];
                }
                if (s === !0) {
                  var r = o.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                  r && r.forEach(function(u, g) {
                    var M = function(E, f) {
                      return function(v) {
                        if (Array.isArray(v))
                          return v;
                      }(E) || function(v, C) {
                        var S = v == null ? null : typeof Symbol < "u" && v[Symbol.iterator] || v["@@iterator"];
                        if (S != null) {
                          var T, F, A, I, O = [], N = !0, V = !1;
                          try {
                            if (A = (S = S.call(v)).next, C === 0) {
                              if (Object(S) !== S)
                                return;
                              N = !1;
                            } else
                              for (; !(N = (T = A.call(S)).done) && (O.push(T.value), O.length !== C); N = !0)
                                ;
                          } catch (z) {
                            V = !0, F = z;
                          } finally {
                            try {
                              if (!N && S.return != null && (I = S.return(), Object(I) !== I))
                                return;
                            } finally {
                              if (V)
                                throw F;
                            }
                          }
                          return O;
                        }
                      }(E, f) || function(v, C) {
                        if (v) {
                          if (typeof v == "string")
                            return D(v, C);
                          var S = Object.prototype.toString.call(v).slice(8, -1);
                          if (S === "Object" && v.constructor && (S = v.constructor.name), S === "Map" || S === "Set")
                            return Array.from(v);
                          if (S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
                            return D(v, C);
                        }
                      }(E, f) || function() {
                        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                      }();
                    }(u.split("["), 2), y = M[0], x = M[1];
                    x = x.replace("]", ""), o = o.replace(new RegExp("".concat((0, B.default)(y), "\\[").concat((0, B.default)(x), "\\]")), y.charAt(0) === x.charAt(0) ? "(".concat(y, "|").concat(y).concat(x, ")") : "".concat(y, "[").concat(x, "]"));
                  });
                }
                return o;
              }
              function a(o, n, t) {
                var i, l, s = !1;
                return o !== null && o !== "" || ((s = t.regex !== null) ? o = (o = t.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, o = ".*")), o.length === 1 && t.greedy === !1 && t.repeat !== 0 && (t.placeholder = ""), o = c(o, t), l = s ? "regex_" + t.regex : t.numericInput ? o.split("").reverse().join("") : o, t.keepStatic !== null && (l = "ks_" + t.keepStatic + l), L.default.prototype.masksCache[l] === void 0 || h === !0 ? (i = {
                  mask: o,
                  maskToken: L.default.prototype.analyseMask(o, s, t),
                  validPositions: [],
                  _buffer: void 0,
                  buffer: void 0,
                  tests: {},
                  excludes: {},
                  metadata: n,
                  maskLength: void 0,
                  jitOffset: {}
                }, h !== !0 && (L.default.prototype.masksCache[l] = i, i = p.default.extend(!0, {}, L.default.prototype.masksCache[l]))) : i = p.default.extend(!0, {}, L.default.prototype.masksCache[l]), i;
              }
              if (typeof b.mask == "function" && (b.mask = b.mask(b)), Array.isArray(b.mask)) {
                if (b.mask.length > 1) {
                  b.keepStatic === null && (b.keepStatic = !0);
                  var e = b.groupmarker[0];
                  return (b.isRTL ? b.mask.reverse() : b.mask).forEach(function(o) {
                    e.length > 1 && (e += b.alternatormarker), o.mask !== void 0 && typeof o.mask != "function" ? e += o.mask : e += o;
                  }), a(e += b.groupmarker[1], b.mask, b);
                }
                b.mask = b.mask.pop();
              }
              return m = b.mask && b.mask.mask !== void 0 && typeof b.mask.mask != "function" ? a(b.mask.mask, b.mask, b) : a(b.mask, b.mask, b), b.keepStatic === null && (b.keepStatic = !1), m;
            };
            var p = R(w(4963)), _ = R(w(9695)), L = R(w(2394)), B = R(w(7184));
            function D(b, h) {
              (h == null || h > b.length) && (h = b.length);
              for (var m = 0, c = new Array(h); m < h; m++)
                c[m] = b[m];
              return c;
            }
            function R(b) {
              return b && b.__esModule ? b : {
                default: b
              };
            }
          },
          157: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.mask = function() {
              var h = this, m = this.opts, c = this.el, a = this.dependencyLib;
              B.EventRuler.off(c);
              var e = function(t, i) {
                t.tagName.toLowerCase() !== "textarea" && i.ignorables.push(p.keys.Enter);
                var l = t.getAttribute("type"), s = t.tagName.toLowerCase() === "input" && i.supportsInputType.includes(l) || t.isContentEditable || t.tagName.toLowerCase() === "textarea";
                if (!s)
                  if (t.tagName.toLowerCase() === "input") {
                    var d = document.createElement("input");
                    d.setAttribute("type", l), s = d.type === "text", d = null;
                  } else
                    s = "partial";
                return s !== !1 ? function(r) {
                  var u, g;
                  function M() {
                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : _.getLastValidPosition.call(h) !== -1 || i.nullable !== !0 ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (h.isRTL ? L.clearOptionalTail.call(h, _.getBuffer.call(h).slice()).reverse() : L.clearOptionalTail.call(h, _.getBuffer.call(h).slice())).join("") : u.call(this) : "" : u.call(this);
                  }
                  function y(E) {
                    g.call(this, E), this.inputmask && (0, L.applyInputValue)(this, E);
                  }
                  if (!r.inputmask.__valueGet) {
                    if (i.noValuePatching !== !0) {
                      if (Object.getOwnPropertyDescriptor) {
                        var x = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), "value") : void 0;
                        x && x.get && x.set ? (u = x.get, g = x.set, Object.defineProperty(r, "value", {
                          get: M,
                          set: y,
                          configurable: !0
                        })) : r.tagName.toLowerCase() !== "input" && (u = function() {
                          return this.textContent;
                        }, g = function(E) {
                          this.textContent = E;
                        }, Object.defineProperty(r, "value", {
                          get: M,
                          set: y,
                          configurable: !0
                        }));
                      } else
                        document.__lookupGetter__ && r.__lookupGetter__("value") && (u = r.__lookupGetter__("value"), g = r.__lookupSetter__("value"), r.__defineGetter__("value", M), r.__defineSetter__("value", y));
                      r.inputmask.__valueGet = u, r.inputmask.__valueSet = g;
                    }
                    r.inputmask._valueGet = function(E) {
                      return h.isRTL && E !== !0 ? u.call(this.el).split("").reverse().join("") : u.call(this.el);
                    }, r.inputmask._valueSet = function(E, f) {
                      g.call(this.el, E == null ? "" : f !== !0 && h.isRTL ? E.split("").reverse().join("") : E);
                    }, u === void 0 && (u = function() {
                      return this.value;
                    }, g = function(E) {
                      this.value = E;
                    }, function(E) {
                      if (a.valHooks && (a.valHooks[E] === void 0 || a.valHooks[E].inputmaskpatch !== !0)) {
                        var f = a.valHooks[E] && a.valHooks[E].get ? a.valHooks[E].get : function(C) {
                          return C.value;
                        }, v = a.valHooks[E] && a.valHooks[E].set ? a.valHooks[E].set : function(C, S) {
                          return C.value = S, C;
                        };
                        a.valHooks[E] = {
                          get: function(C) {
                            if (C.inputmask) {
                              if (C.inputmask.opts.autoUnmask)
                                return C.inputmask.unmaskedvalue();
                              var S = f(C);
                              return _.getLastValidPosition.call(h, void 0, void 0, C.inputmask.maskset.validPositions) !== -1 || i.nullable !== !0 ? S : "";
                            }
                            return f(C);
                          },
                          set: function(C, S) {
                            var T = v(C, S);
                            return C.inputmask && (0, L.applyInputValue)(C, S), T;
                          },
                          inputmaskpatch: !0
                        };
                      }
                    }(r.type), function(E) {
                      B.EventRuler.on(E, "mouseenter", function() {
                        var f = this, v = f.inputmask._valueGet(!0);
                        v != (f.inputmask.isRTL ? _.getBuffer.call(f.inputmask).slice().reverse() : _.getBuffer.call(f.inputmask)).join("") && (0, L.applyInputValue)(f, v);
                      });
                    }(r));
                  }
                }(t) : t.inputmask = void 0, s;
              }(c, m);
              if (e !== !1) {
                h.originalPlaceholder = c.placeholder, h.maxLength = c !== void 0 ? c.maxLength : void 0, h.maxLength === -1 && (h.maxLength = void 0), "inputMode" in c && c.getAttribute("inputmode") === null && (c.inputMode = m.inputmode, c.setAttribute("inputmode", m.inputmode)), e === !0 && (m.showMaskOnFocus = m.showMaskOnFocus && ["cc-number", "cc-exp"].indexOf(c.autocomplete) === -1, D.iphone && (m.insertModeVisual = !1, c.setAttribute("autocorrect", "off")), B.EventRuler.on(c, "submit", b.EventHandlers.submitEvent), B.EventRuler.on(c, "reset", b.EventHandlers.resetEvent), B.EventRuler.on(c, "blur", b.EventHandlers.blurEvent), B.EventRuler.on(c, "focus", b.EventHandlers.focusEvent), B.EventRuler.on(c, "invalid", b.EventHandlers.invalidEvent), B.EventRuler.on(c, "click", b.EventHandlers.clickEvent), B.EventRuler.on(c, "mouseleave", b.EventHandlers.mouseleaveEvent), B.EventRuler.on(c, "mouseenter", b.EventHandlers.mouseenterEvent), B.EventRuler.on(c, "paste", b.EventHandlers.pasteEvent), B.EventRuler.on(c, "cut", b.EventHandlers.cutEvent), B.EventRuler.on(c, "complete", m.oncomplete), B.EventRuler.on(c, "incomplete", m.onincomplete), B.EventRuler.on(c, "cleared", m.oncleared), m.inputEventOnly !== !0 && B.EventRuler.on(c, "keydown", b.EventHandlers.keyEvent), (D.mobile || m.inputEventOnly) && c.removeAttribute("maxLength"), B.EventRuler.on(c, "input", b.EventHandlers.inputFallBackEvent)), B.EventRuler.on(c, "setvalue", b.EventHandlers.setValueEvent), _.getBufferTemplate.call(h).join(""), h.undoValue = h._valueGet(!0);
                var o = (c.inputmask.shadowRoot || c.ownerDocument).activeElement;
                if (c.inputmask._valueGet(!0) !== "" || m.clearMaskOnLostFocus === !1 || o === c) {
                  (0, L.applyInputValue)(c, c.inputmask._valueGet(!0), m);
                  var n = _.getBuffer.call(h).slice();
                  R.isComplete.call(h, n) === !1 && m.clearIncomplete && _.resetMaskSet.call(h), m.clearMaskOnLostFocus && o !== c && (_.getLastValidPosition.call(h) === -1 ? n = [] : L.clearOptionalTail.call(h, n)), (m.clearMaskOnLostFocus === !1 || m.showMaskOnFocus && o === c || c.inputmask._valueGet(!0) !== "") && (0, L.writeBuffer)(c, n), o === c && _.caret.call(h, c, _.seekNext.call(h, _.getLastValidPosition.call(h)));
                }
              }
            };
            var p = w(2839), _ = w(8711), L = w(7760), B = w(9716), D = w(9845), R = w(7215), b = w(6030);
          },
          9695: function(G, k) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.default = function(w, p, _, L) {
              this.matches = [], this.openGroup = w || !1, this.alternatorGroup = !1, this.isGroup = w || !1, this.isOptional = p || !1, this.isQuantifier = _ || !1, this.isAlternator = L || !1, this.quantifier = {
                min: 1,
                max: 1
              };
            };
          },
          3194: function() {
            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
              value: function(G, k) {
                if (this == null)
                  throw new TypeError('"this" is null or not defined');
                var w = Object(this), p = w.length >>> 0;
                if (p === 0)
                  return !1;
                for (var _ = 0 | k, L = Math.max(_ >= 0 ? _ : p - Math.abs(_), 0); L < p; ) {
                  if (w[L] === G)
                    return !0;
                  L++;
                }
                return !1;
              }
            });
          },
          9302: function() {
            var G = Function.bind.call(Function.call, Array.prototype.reduce), k = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), w = Function.bind.call(Function.call, Array.prototype.concat), p = Object.keys;
            Object.entries || (Object.entries = function(_) {
              return G(p(_), function(L, B) {
                return w(L, typeof B == "string" && k(_, B) ? [[B, _[B]]] : []);
              }, []);
            });
          },
          7149: function() {
            function G(k) {
              return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                return typeof w;
              } : function(w) {
                return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w;
              }, G(k);
            }
            typeof Object.getPrototypeOf != "function" && (Object.getPrototypeOf = G("test".__proto__) === "object" ? function(k) {
              return k.__proto__;
            } : function(k) {
              return k.constructor.prototype;
            });
          },
          4013: function() {
            String.prototype.includes || (String.prototype.includes = function(G, k) {
              return typeof k != "number" && (k = 0), !(k + G.length > this.length) && this.indexOf(G, k) !== -1;
            });
          },
          8711: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.caret = function(h, m, c, a, e) {
              var o, n = this, t = this.opts;
              if (m === void 0)
                return "selectionStart" in h && "selectionEnd" in h ? (m = h.selectionStart, c = h.selectionEnd) : window.getSelection ? (o = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== h && o.commonAncestorContainer !== h || (m = o.startOffset, c = o.endOffset) : document.selection && document.selection.createRange && (c = (m = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -h.inputmask._valueGet().length)) + o.text.length), {
                  begin: a ? m : b.call(n, m),
                  end: a ? c : b.call(n, c)
                };
              if (Array.isArray(m) && (c = n.isRTL ? m[0] : m[1], m = n.isRTL ? m[1] : m[0]), m.begin !== void 0 && (c = n.isRTL ? m.begin : m.end, m = n.isRTL ? m.end : m.begin), typeof m == "number") {
                m = a ? m : b.call(n, m), c = typeof (c = a ? c : b.call(n, c)) == "number" ? c : m;
                var i = parseInt(((h.ownerDocument.defaultView || window).getComputedStyle ? (h.ownerDocument.defaultView || window).getComputedStyle(h, null) : h.currentStyle).fontSize) * c;
                if (h.scrollLeft = i > h.scrollWidth ? i : 0, h.inputmask.caretPos = {
                  begin: m,
                  end: c
                }, t.insertModeVisual && t.insertMode === !1 && m === c && (e || c++), h === (h.inputmask.shadowRoot || h.ownerDocument).activeElement)
                  if ("setSelectionRange" in h)
                    h.setSelectionRange(m, c);
                  else if (window.getSelection) {
                    if (o = document.createRange(), h.firstChild === void 0 || h.firstChild === null) {
                      var l = document.createTextNode("");
                      h.appendChild(l);
                    }
                    o.setStart(h.firstChild, m < h.inputmask._valueGet().length ? m : h.inputmask._valueGet().length), o.setEnd(h.firstChild, c < h.inputmask._valueGet().length ? c : h.inputmask._valueGet().length), o.collapse(!0);
                    var s = window.getSelection();
                    s.removeAllRanges(), s.addRange(o);
                  } else
                    h.createTextRange && ((o = h.createTextRange()).collapse(!0), o.moveEnd("character", c), o.moveStart("character", m), o.select());
              }
            }, k.determineLastRequiredPosition = function(h) {
              var m, c, a = this, e = a.maskset, o = a.dependencyLib, n = p.getMaskTemplate.call(a, !0, B.call(a), !0, !0), t = n.length, i = B.call(a), l = {}, s = e.validPositions[i], d = s !== void 0 ? s.locator.slice() : void 0;
              for (m = i + 1; m < n.length; m++)
                d = (c = p.getTestTemplate.call(a, m, d, m - 1)).locator.slice(), l[m] = o.extend(!0, {}, c);
              var r = s && s.alternation !== void 0 ? s.locator[s.alternation] : void 0;
              for (m = t - 1; m > i && ((c = l[m]).match.optionality || c.match.optionalQuantifier && c.match.newBlockMarker || r && (r !== l[m].locator[s.alternation] && c.match.static != 1 || c.match.static === !0 && c.locator[s.alternation] && _.checkAlternationMatch.call(a, c.locator[s.alternation].toString().split(","), r.toString().split(",")) && p.getTests.call(a, m)[0].def !== "")) && n[m] === p.getPlaceholder.call(a, m, c.match); m--)
                t--;
              return h ? {
                l: t,
                def: l[t] ? l[t].match : void 0
              } : t;
            }, k.determineNewCaretPosition = function(h, m, c) {
              var a = this, e = a.maskset, o = a.opts;
              if (m && (a.isRTL ? h.end = h.begin : h.begin = h.end), h.begin === h.end) {
                switch (c = c || o.positionCaretOnClick) {
                  case "none":
                    break;
                  case "select":
                    h = {
                      begin: 0,
                      end: L.call(a).length
                    };
                    break;
                  case "ignore":
                    h.end = h.begin = R.call(a, B.call(a));
                    break;
                  case "radixFocus":
                    if (a.clicked > 1 && e.validPositions.length == 0)
                      break;
                    if (function(g) {
                      if (o.radixPoint !== "" && o.digits !== 0) {
                        var M = e.validPositions;
                        if (M[g] === void 0 || M[g].input === p.getPlaceholder.call(a, g)) {
                          if (g < R.call(a, -1))
                            return !0;
                          var y = L.call(a).indexOf(o.radixPoint);
                          if (y !== -1) {
                            for (var x = 0, E = M.length; x < E; x++)
                              if (M[x] && y < x && M[x].input !== p.getPlaceholder.call(a, x))
                                return !1;
                            return !0;
                          }
                        }
                      }
                      return !1;
                    }(h.begin)) {
                      var n = L.call(a).join("").indexOf(o.radixPoint);
                      h.end = h.begin = o.numericInput ? R.call(a, n) : n;
                      break;
                    }
                  default:
                    var t = h.begin, i = B.call(a, t, !0), l = R.call(a, i !== -1 || D.call(a, 0) ? i : -1);
                    if (t <= l)
                      h.end = h.begin = D.call(a, t, !1, !0) ? t : R.call(a, t);
                    else {
                      var s = e.validPositions[i], d = p.getTestTemplate.call(a, l, s ? s.match.locator : void 0, s), r = p.getPlaceholder.call(a, l, d.match);
                      if (r !== "" && L.call(a)[l] !== r && d.match.optionalQuantifier !== !0 && d.match.newBlockMarker !== !0 || !D.call(a, l, o.keepStatic, !0) && d.match.def === r) {
                        var u = R.call(a, l);
                        (t >= u || t === l) && (l = u);
                      }
                      h.end = h.begin = l;
                    }
                }
                return h;
              }
            }, k.getBuffer = L, k.getBufferTemplate = function() {
              var h = this.maskset;
              return h._buffer === void 0 && (h._buffer = p.getMaskTemplate.call(this, !1, 1), h.buffer === void 0 && (h.buffer = h._buffer.slice())), h._buffer;
            }, k.getLastValidPosition = B, k.isMask = D, k.resetMaskSet = function(h) {
              var m = this.maskset;
              m.buffer = void 0, h !== !0 && (m.validPositions = [], m.p = 0);
            }, k.seekNext = R, k.seekPrevious = function(h, m) {
              var c = this, a = h - 1;
              if (h <= 0)
                return 0;
              for (; a > 0 && (m === !0 && (p.getTest.call(c, a).match.newBlockMarker !== !0 || !D.call(c, a, void 0, !0)) || m !== !0 && !D.call(c, a, void 0, !0)); )
                a--;
              return a;
            }, k.translatePosition = b;
            var p = w(4713), _ = w(7215);
            function L(h) {
              var m = this, c = m.maskset;
              return c.buffer !== void 0 && h !== !0 || (c.buffer = p.getMaskTemplate.call(m, !0, B.call(m), !0), c._buffer === void 0 && (c._buffer = c.buffer.slice())), c.buffer;
            }
            function B(h, m, c) {
              var a = this.maskset, e = -1, o = -1, n = c || a.validPositions;
              h === void 0 && (h = -1);
              for (var t = 0, i = n.length; t < i; t++)
                n[t] && (m || n[t].generatedInput !== !0) && (t <= h && (e = t), t >= h && (o = t));
              return e === -1 || e == h ? o : o == -1 || h - e < o - h ? e : o;
            }
            function D(h, m, c) {
              var a = this, e = this.maskset, o = p.getTestTemplate.call(a, h).match;
              if (o.def === "" && (o = p.getTest.call(a, h).match), o.static !== !0)
                return o.fn;
              if (c === !0 && e.validPositions[h] !== void 0 && e.validPositions[h].generatedInput !== !0)
                return !0;
              if (m !== !0 && h > -1) {
                if (c) {
                  var n = p.getTests.call(a, h);
                  return n.length > 1 + (n[n.length - 1].match.def === "" ? 1 : 0);
                }
                var t = p.determineTestTemplate.call(a, h, p.getTests.call(a, h)), i = p.getPlaceholder.call(a, h, t.match);
                return t.match.def !== i;
              }
              return !1;
            }
            function R(h, m, c) {
              var a = this;
              c === void 0 && (c = !0);
              for (var e = h + 1; p.getTest.call(a, e).match.def !== "" && (m === !0 && (p.getTest.call(a, e).match.newBlockMarker !== !0 || !D.call(a, e, void 0, !0)) || m !== !0 && !D.call(a, e, void 0, c)); )
                e++;
              return e;
            }
            function b(h) {
              var m = this.opts, c = this.el;
              return !this.isRTL || typeof h != "number" || m.greedy && m.placeholder === "" || !c || (h = this._valueGet().length - h) < 0 && (h = 0), h;
            }
          },
          4713: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.determineTestTemplate = b, k.getDecisionTaker = B, k.getMaskTemplate = function(a, e, o, n, t) {
              var i = this, l = this.opts, s = this.maskset, d = l.greedy;
              t && l.greedy && (l.greedy = !1, i.maskset.tests = {}), e = e || 0;
              var r, u, g, M, y = [], x = 0;
              do {
                if (a === !0 && s.validPositions[x])
                  u = (g = t && s.validPositions[x].match.optionality && s.validPositions[x + 1] === void 0 && (s.validPositions[x].generatedInput === !0 || s.validPositions[x].input == l.skipOptionalPartCharacter && x > 0) ? b.call(i, x, c.call(i, x, r, x - 1)) : s.validPositions[x]).match, r = g.locator.slice(), y.push(o === !0 ? g.input : o === !1 ? u.nativeDef : D.call(i, x, u));
                else {
                  u = (g = R.call(i, x, r, x - 1)).match, r = g.locator.slice();
                  var E = n !== !0 && (l.jitMasking !== !1 ? l.jitMasking : u.jit);
                  (M = (M && u.static && u.def !== l.groupSeparator && u.fn === null || s.validPositions[x - 1] && u.static && u.def !== l.groupSeparator && u.fn === null) && s.tests[x]) || E === !1 || E === void 0 || typeof E == "number" && isFinite(E) && E > x ? y.push(o === !1 ? u.nativeDef : D.call(i, y.length, u)) : M = !1;
                }
                x++;
              } while (u.static !== !0 || u.def !== "" || e > x);
              return y[y.length - 1] === "" && y.pop(), o === !1 && s.maskLength !== void 0 || (s.maskLength = x - 1), l.greedy = d, y;
            }, k.getPlaceholder = D, k.getTest = h, k.getTestTemplate = R, k.getTests = c, k.isSubsetOf = m;
            var p, _ = (p = w(2394)) && p.__esModule ? p : {
              default: p
            };
            function L(a, e) {
              var o = (a.alternation != null ? a.mloc[B(a)] : a.locator).join("");
              if (o !== "")
                for (; o.length < e; )
                  o += "0";
              return o;
            }
            function B(a) {
              var e = a.locator[a.alternation];
              return typeof e == "string" && e.length > 0 && (e = e.split(",")[0]), e !== void 0 ? e.toString() : "";
            }
            function D(a, e, o) {
              var n = this.opts, t = this.maskset;
              if ((e = e || h.call(this, a).match).placeholder !== void 0 || o === !0)
                return typeof e.placeholder == "function" ? e.placeholder(n) : e.placeholder;
              if (e.static === !0) {
                if (a > -1 && t.validPositions[a] === void 0) {
                  var i, l = c.call(this, a), s = [];
                  if (l.length > 1 + (l[l.length - 1].match.def === "" ? 1 : 0)) {
                    for (var d = 0; d < l.length; d++)
                      if (l[d].match.def !== "" && l[d].match.optionality !== !0 && l[d].match.optionalQuantifier !== !0 && (l[d].match.static === !0 || i === void 0 || l[d].match.fn.test(i.match.def, t, a, !0, n) !== !1) && (s.push(l[d]), l[d].match.static === !0 && (i = l[d]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def)))
                        return n.placeholder.charAt(a % n.placeholder.length);
                  }
                }
                return e.def;
              }
              return n.placeholder.charAt(a % n.placeholder.length);
            }
            function R(a, e, o) {
              return this.maskset.validPositions[a] || b.call(this, a, c.call(this, a, e && e.slice(), o));
            }
            function b(a, e) {
              var o = this.opts, n = 0, t = function(M, y) {
                var x = 0, E = !1;
                return y.forEach(function(f) {
                  f.match.optionality && (x !== 0 && x !== f.match.optionality && (E = !0), (x === 0 || x > f.match.optionality) && (x = f.match.optionality));
                }), x && (M == 0 || y.length == 1 ? x = 0 : E || (x = 0)), x;
              }(a, e);
              a = a > 0 ? a - 1 : 0;
              var i, l, s, d = L(h.call(this, a));
              o.greedy && e.length > 1 && e[e.length - 1].match.def === "" && (n = 1);
              for (var r = 0; r < e.length - n; r++) {
                var u = e[r];
                i = L(u, d.length);
                var g = Math.abs(i - d);
                (l === void 0 || i !== "" && g < l || s && !o.greedy && s.match.optionality && s.match.optionality - t > 0 && s.match.newBlockMarker === "master" && (!u.match.optionality || u.match.optionality - t < 1 || !u.match.newBlockMarker) || s && !o.greedy && s.match.optionalQuantifier && !u.match.optionalQuantifier) && (l = g, s = u);
              }
              return s;
            }
            function h(a, e) {
              var o = this.maskset;
              return o.validPositions[a] ? o.validPositions[a] : (e || c.call(this, a))[0];
            }
            function m(a, e, o) {
              function n(t) {
                for (var i, l = [], s = -1, d = 0, r = t.length; d < r; d++)
                  if (t.charAt(d) === "-")
                    for (i = t.charCodeAt(d + 1); ++s < i; )
                      l.push(String.fromCharCode(s));
                  else
                    s = t.charCodeAt(d), l.push(t.charAt(d));
                return l.join("");
              }
              return a.match.def === e.match.nativeDef || !(!(o.regex || a.match.fn instanceof RegExp && e.match.fn instanceof RegExp) || a.match.static === !0 || e.match.static === !0) && n(e.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(a.match.fn.toString().replace(/[[\]/]/g, ""))) !== -1;
            }
            function c(a, e, o) {
              var n, t, i = this, l = this.dependencyLib, s = this.maskset, d = this.opts, r = this.el, u = s.maskToken, g = e ? o : 0, M = e ? e.slice() : [0], y = [], x = !1, E = e ? e.join("") : "";
              function f(F, A, I, O) {
                function N(P, Z, Y) {
                  function oe(W, te) {
                    var J = te.matches.indexOf(W) === 0;
                    return J || te.matches.every(function(ee, ie) {
                      return ee.isQuantifier === !0 ? J = oe(W, te.matches[ie - 1]) : Object.prototype.hasOwnProperty.call(ee, "matches") && (J = oe(W, ee)), !J;
                    }), J;
                  }
                  function q(W, te, J) {
                    var ee, ie;
                    if ((s.tests[W] || s.validPositions[W]) && (s.tests[W] || [s.validPositions[W]]).every(function(le, be) {
                      if (le.mloc[te])
                        return ee = le, !1;
                      var ue = J !== void 0 ? J : le.alternation, de = le.locator[ue] !== void 0 ? le.locator[ue].toString().indexOf(te) : -1;
                      return (ie === void 0 || de < ie) && de !== -1 && (ee = le, ie = de), !0;
                    }), ee) {
                      var pe = ee.locator[ee.alternation];
                      return (ee.mloc[te] || ee.mloc[pe] || ee.locator).slice((J !== void 0 ? J : ee.alternation) + 1);
                    }
                    return J !== void 0 ? q(W, te) : void 0;
                  }
                  function ne(W, te) {
                    var J = W.alternation, ee = te === void 0 || J === te.alternation && W.locator[J].toString().indexOf(te.locator[J]) === -1;
                    if (!ee && J > te.alternation) {
                      for (var ie = te.alternation; ie < J; ie++)
                        if (W.locator[ie] !== te.locator[ie]) {
                          J = ie, ee = !0;
                          break;
                        }
                    }
                    if (ee) {
                      W.mloc = W.mloc || {};
                      var pe = W.locator[J];
                      if (pe !== void 0) {
                        if (typeof pe == "string" && (pe = pe.split(",")[0]), W.mloc[pe] === void 0 && (W.mloc[pe] = W.locator.slice()), te !== void 0) {
                          for (var le in te.mloc)
                            typeof le == "string" && (le = le.split(",")[0]), W.mloc[le] === void 0 && (W.mloc[le] = te.mloc[le]);
                          W.locator[J] = Object.keys(W.mloc).join(",");
                        }
                        return !0;
                      }
                      W.alternation = void 0;
                    }
                    return !1;
                  }
                  function se(W, te) {
                    if (W.locator.length !== te.locator.length)
                      return !1;
                    for (var J = W.alternation + 1; J < W.locator.length; J++)
                      if (W.locator[J] !== te.locator[J])
                        return !1;
                    return !0;
                  }
                  if (g > a + d._maxTestPos)
                    throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + s.mask;
                  if (g === a && P.matches === void 0) {
                    if (y.push({
                      match: P,
                      locator: Z.reverse(),
                      cd: E,
                      mloc: {}
                    }), !P.optionality || Y !== void 0 || !(d.definitions && d.definitions[P.nativeDef] && d.definitions[P.nativeDef].optional || _.default.prototype.definitions[P.nativeDef] && _.default.prototype.definitions[P.nativeDef].optional))
                      return !0;
                    x = !0, g = a;
                  } else if (P.matches !== void 0) {
                    if (P.isGroup && Y !== P)
                      return function() {
                        if (P = N(F.matches[F.matches.indexOf(P) + 1], Z, Y))
                          return !0;
                      }();
                    if (P.isOptional)
                      return function() {
                        var W = P, te = y.length;
                        if (P = f(P, A, Z, Y), y.length > 0) {
                          if (y.forEach(function(J, ee) {
                            ee >= te && (J.match.optionality = J.match.optionality ? J.match.optionality + 1 : 1);
                          }), n = y[y.length - 1].match, Y !== void 0 || !oe(n, W))
                            return P;
                          x = !0, g = a;
                        }
                      }();
                    if (P.isAlternator)
                      return function() {
                        i.hasAlternator = !0;
                        var W, te, J, ee = P, ie = [], pe = y.slice(), le = Z.length, be = !1, ue = A.length > 0 ? A.shift() : -1;
                        if (ue === -1 || typeof ue == "string") {
                          var de, me = g, Pe = A.slice(), he = [];
                          if (typeof ue == "string")
                            he = ue.split(",");
                          else
                            for (de = 0; de < ee.matches.length; de++)
                              he.push(de.toString());
                          if (s.excludes[a] !== void 0) {
                            for (var Ue = he.slice(), Le = 0, ze = s.excludes[a].length; Le < ze; Le++) {
                              var Ee = s.excludes[a][Le].toString().split(":");
                              Z.length == Ee[1] && he.splice(he.indexOf(Ee[0]), 1);
                            }
                            he.length === 0 && (delete s.excludes[a], he = Ue);
                          }
                          (d.keepStatic === !0 || isFinite(parseInt(d.keepStatic)) && me >= d.keepStatic) && (he = he.slice(0, 1));
                          for (var xe = 0; xe < he.length; xe++) {
                            de = parseInt(he[xe]), y = [], A = typeof ue == "string" && q(g, de, le) || Pe.slice();
                            var _e = ee.matches[de];
                            if (_e && N(_e, [de].concat(Z), Y))
                              P = !0;
                            else if (xe === 0 && (be = !0), _e && _e.matches && _e.matches.length > ee.matches[0].matches.length)
                              break;
                            W = y.slice(), g = me, y = [];
                            for (var Me = 0; Me < W.length; Me++) {
                              var ce = W[Me], we = !1;
                              ce.match.jit = ce.match.jit || be, ce.alternation = ce.alternation || le, ne(ce);
                              for (var Se = 0; Se < ie.length; Se++) {
                                var ve = ie[Se];
                                if (typeof ue != "string" || ce.alternation !== void 0 && he.includes(ce.locator[ce.alternation].toString())) {
                                  if (ce.match.nativeDef === ve.match.nativeDef) {
                                    we = !0, ne(ve, ce);
                                    break;
                                  }
                                  if (m(ce, ve, d)) {
                                    ne(ce, ve) && (we = !0, ie.splice(ie.indexOf(ve), 0, ce));
                                    break;
                                  }
                                  if (m(ve, ce, d)) {
                                    ne(ve, ce);
                                    break;
                                  }
                                  if (J = ve, (te = ce).match.static === !0 && J.match.static !== !0 && J.match.fn.test(te.match.def, s, a, !1, d, !1)) {
                                    se(ce, ve) || r.inputmask.userOptions.keepStatic !== void 0 ? ne(ce, ve) && (we = !0, ie.splice(ie.indexOf(ve), 0, ce)) : d.keepStatic = !0;
                                    break;
                                  }
                                }
                              }
                              we || ie.push(ce);
                            }
                          }
                          y = pe.concat(ie), g = a, x = y.length > 0, P = ie.length > 0, A = Pe.slice();
                        } else
                          P = N(ee.matches[ue] || F.matches[ue], [ue].concat(Z), Y);
                        if (P)
                          return !0;
                      }();
                    if (P.isQuantifier && Y !== F.matches[F.matches.indexOf(P) - 1])
                      return function() {
                        for (var W = P, te = !1, J = A.length > 0 ? A.shift() : 0; J < (isNaN(W.quantifier.max) ? J + 1 : W.quantifier.max) && g <= a; J++) {
                          var ee = F.matches[F.matches.indexOf(W) - 1];
                          if (P = N(ee, [J].concat(Z), ee)) {
                            if (y.forEach(function(ie, pe) {
                              (n = v(ee, ie.match) ? ie.match : y[y.length - 1].match).optionalQuantifier = J >= W.quantifier.min, n.jit = (J + 1) * (ee.matches.indexOf(n) + 1) > W.quantifier.jit, n.optionalQuantifier && oe(n, ee) && (x = !0, g = a, d.greedy && s.validPositions[a - 1] == null && J > W.quantifier.min && ["*", "+"].indexOf(W.quantifier.max) != -1 && (y.pop(), E = void 0), te = !0, P = !1), !te && n.jit && (s.jitOffset[a] = ee.matches.length - ee.matches.indexOf(n));
                            }), te)
                              break;
                            return !0;
                          }
                        }
                      }();
                    if (P = f(P, A, Z, Y))
                      return !0;
                  } else
                    g++;
                }
                for (var V = A.length > 0 ? A.shift() : 0; V < F.matches.length; V++)
                  if (F.matches[V].isQuantifier !== !0) {
                    var z = N(F.matches[V], [V].concat(I), O);
                    if (z && g === a)
                      return z;
                    if (g > a)
                      break;
                  }
              }
              function v(F, A) {
                var I = F.matches.indexOf(A) != -1;
                return I || F.matches.forEach(function(O, N) {
                  O.matches === void 0 || I || (I = v(O, A));
                }), I;
              }
              if (a > -1) {
                if (e === void 0) {
                  for (var C, S = a - 1; (C = s.validPositions[S] || s.tests[S]) === void 0 && S > -1; )
                    S--;
                  C !== void 0 && S > -1 && (M = function(F, A) {
                    var I, O = [];
                    return Array.isArray(A) || (A = [A]), A.length > 0 && (A[0].alternation === void 0 || d.keepStatic === !0 ? (O = b.call(i, F, A.slice()).locator.slice()).length === 0 && (O = A[0].locator.slice()) : A.forEach(function(N) {
                      N.def !== "" && (O.length === 0 ? (I = N.alternation, O = N.locator.slice()) : N.locator[I] && O[I].toString().indexOf(N.locator[I]) === -1 && (O[I] += "," + N.locator[I]));
                    })), O;
                  }(S, C), E = M.join(""), g = S);
                }
                if (s.tests[a] && s.tests[a][0].cd === E)
                  return s.tests[a];
                for (var T = M.shift(); T < u.length && !(f(u[T], M, [T]) && g === a || g > a); T++)
                  ;
              }
              return (y.length === 0 || x) && y.push({
                match: {
                  fn: null,
                  static: !0,
                  optionality: !1,
                  casing: null,
                  def: "",
                  placeholder: ""
                },
                locator: [],
                mloc: {},
                cd: E
              }), e !== void 0 && s.tests[a] ? t = l.extend(!0, [], y) : (s.tests[a] = l.extend(!0, [], y), t = s.tests[a]), y.forEach(function(F) {
                F.match.optionality = F.match.defOptionality || !1;
              }), t;
            }
          },
          7215: function(G, k, w) {
            Object.defineProperty(k, "__esModule", {
              value: !0
            }), k.alternate = D, k.checkAlternationMatch = function(n, t, i) {
              for (var l, s = this.opts.greedy ? t : t.slice(0, 1), d = !1, r = i !== void 0 ? i.split(",") : [], u = 0; u < r.length; u++)
                (l = n.indexOf(r[u])) !== -1 && n.splice(l, 1);
              for (var g = 0; g < n.length; g++)
                if (s.includes(n[g])) {
                  d = !0;
                  break;
                }
              return d;
            }, k.handleRemove = function(n, t, i, l, s) {
              var d = this, r = this.maskset, u = this.opts;
              if ((u.numericInput || d.isRTL) && (t === _.keys.Backspace ? t = _.keys.Delete : t === _.keys.Delete && (t = _.keys.Backspace), d.isRTL)) {
                var g = i.end;
                i.end = i.begin, i.begin = g;
              }
              var M, y = L.getLastValidPosition.call(d, void 0, !0);
              if (i.end >= L.getBuffer.call(d).length && y >= i.end && (i.end = y + 1), t === _.keys.Backspace ? i.end - i.begin < 1 && (i.begin = L.seekPrevious.call(d, i.begin)) : t === _.keys.Delete && i.begin === i.end && (i.end = L.isMask.call(d, i.end, !0, !0) ? i.end + 1 : L.seekNext.call(d, i.end) + 1), (M = o.call(d, i)) !== !1) {
                if (l !== !0 && u.keepStatic !== !1 || u.regex !== null && p.getTest.call(d, i.begin).match.def.indexOf("|") !== -1) {
                  var x = D.call(d, !0);
                  if (x) {
                    var E = x.caret !== void 0 ? x.caret : x.pos ? L.seekNext.call(d, x.pos.begin ? x.pos.begin : x.pos) : L.getLastValidPosition.call(d, -1, !0);
                    (t !== _.keys.Delete || i.begin > E) && i.begin;
                  }
                }
                l !== !0 && (r.p = t === _.keys.Delete ? i.begin + M : i.begin, r.p = L.determineNewCaretPosition.call(d, {
                  begin: r.p,
                  end: r.p
                }, !1, u.insertMode === !1 && t === _.keys.Backspace ? "none" : void 0).begin);
              }
            }, k.isComplete = b, k.isSelection = h, k.isValid = m, k.refreshFromBuffer = a, k.revalidateMask = o;
            var p = w(4713), _ = w(2839), L = w(8711), B = w(6030);
            function D(n, t, i, l, s, d) {
              var r, u, g, M, y, x, E, f, v, C, S, T = this, F = this.dependencyLib, A = this.opts, I = T.maskset, O = F.extend(!0, [], I.validPositions), N = F.extend(!0, {}, I.tests), V = !1, z = !1, P = s !== void 0 ? s : L.getLastValidPosition.call(T);
              if (d && (C = d.begin, S = d.end, d.begin > d.end && (C = d.end, S = d.begin)), P === -1 && s === void 0)
                r = 0, u = (M = p.getTest.call(T, r)).alternation;
              else
                for (; P >= 0; P--)
                  if ((g = I.validPositions[P]) && g.alternation !== void 0) {
                    if (P <= (n || 0) && M && M.locator[g.alternation] !== g.locator[g.alternation])
                      break;
                    r = P, u = I.validPositions[r].alternation, M = g;
                  }
              if (u !== void 0) {
                E = parseInt(r), I.excludes[E] = I.excludes[E] || [], n !== !0 && I.excludes[E].push((0, p.getDecisionTaker)(M) + ":" + M.alternation);
                var Z = [], Y = -1;
                for (y = E; y < L.getLastValidPosition.call(T, void 0, !0) + 1; y++)
                  Y === -1 && n <= y && t !== void 0 && (Z.push(t), Y = Z.length - 1), (x = I.validPositions[y]) && x.generatedInput !== !0 && (d === void 0 || y < C || y >= S) && Z.push(x.input), delete I.validPositions[y];
                for (Y === -1 && t !== void 0 && (Z.push(t), Y = Z.length - 1); I.excludes[E] !== void 0 && I.excludes[E].length < 10; ) {
                  for (I.tests = {}, L.resetMaskSet.call(T, !0), V = !0, y = 0; y < Z.length && (f = V.caret || L.getLastValidPosition.call(T, void 0, !0) + 1, v = Z[y], V = m.call(T, f, v, !1, l, !0)); y++)
                    y === Y && (z = V), n == 1 && V && (z = {
                      caretPos: y
                    });
                  if (V)
                    break;
                  if (L.resetMaskSet.call(T), M = p.getTest.call(T, E), I.validPositions = F.extend(!0, [], O), I.tests = F.extend(!0, {}, N), !I.excludes[E]) {
                    z = D.call(T, n, t, i, l, E - 1, d);
                    break;
                  }
                  var oe = (0, p.getDecisionTaker)(M);
                  if (I.excludes[E].indexOf(oe + ":" + M.alternation) !== -1) {
                    z = D.call(T, n, t, i, l, E - 1, d);
                    break;
                  }
                  for (I.excludes[E].push(oe + ":" + M.alternation), y = E; y < L.getLastValidPosition.call(T, void 0, !0) + 1; y++)
                    delete I.validPositions[y];
                }
              }
              return z && A.keepStatic === !1 || delete I.excludes[E], z;
            }
            function R(n, t, i) {
              var l = this.opts, s = this.maskset;
              switch (l.casing || t.casing) {
                case "upper":
                  n = n.toUpperCase();
                  break;
                case "lower":
                  n = n.toLowerCase();
                  break;
                case "title":
                  var d = s.validPositions[i - 1];
                  n = i === 0 || d && d.input === String.fromCharCode(_.keyCode.Space) ? n.toUpperCase() : n.toLowerCase();
                  break;
                default:
                  if (typeof l.casing == "function") {
                    var r = Array.prototype.slice.call(arguments);
                    r.push(s.validPositions), n = l.casing.apply(this, r);
                  }
              }
              return n;
            }
            function b(n) {
              var t = this, i = this.opts, l = this.maskset;
              if (typeof i.isComplete == "function")
                return i.isComplete(n, i);
              if (i.repeat !== "*") {
                var s = !1, d = L.determineLastRequiredPosition.call(t, !0), r = L.seekPrevious.call(t, d.l);
                if (d.def === void 0 || d.def.newBlockMarker || d.def.optionality || d.def.optionalQuantifier) {
                  s = !0;
                  for (var u = 0; u <= r; u++) {
                    var g = p.getTestTemplate.call(t, u).match;
                    if (g.static !== !0 && l.validPositions[u] === void 0 && g.optionality !== !0 && g.optionalQuantifier !== !0 || g.static === !0 && n[u] !== p.getPlaceholder.call(t, u, g)) {
                      s = !1;
                      break;
                    }
                  }
                }
                return s;
              }
            }
            function h(n) {
              var t = this.opts.insertMode ? 0 : 1;
              return this.isRTL ? n.begin - n.end > t : n.end - n.begin > t;
            }
            function m(n, t, i, l, s, d, r) {
              var u = this, g = this.dependencyLib, M = this.opts, y = u.maskset;
              i = i === !0;
              var x = n;
              function E(V) {
                if (V !== void 0) {
                  if (V.remove !== void 0 && (Array.isArray(V.remove) || (V.remove = [V.remove]), V.remove.sort(function(P, Z) {
                    return u.isRTL ? P.pos - Z.pos : Z.pos - P.pos;
                  }).forEach(function(P) {
                    o.call(u, {
                      begin: P,
                      end: P + 1
                    });
                  }), V.remove = void 0), V.insert !== void 0 && (Array.isArray(V.insert) || (V.insert = [V.insert]), V.insert.sort(function(P, Z) {
                    return u.isRTL ? Z.pos - P.pos : P.pos - Z.pos;
                  }).forEach(function(P) {
                    P.c !== "" && m.call(u, P.pos, P.c, P.strict === void 0 || P.strict, P.fromIsValid !== void 0 ? P.fromIsValid : l);
                  }), V.insert = void 0), V.refreshFromBuffer && V.buffer) {
                    var z = V.refreshFromBuffer;
                    a.call(u, z === !0 ? z : z.start, z.end, V.buffer), V.refreshFromBuffer = void 0;
                  }
                  V.rewritePosition !== void 0 && (x = V.rewritePosition, V = !0);
                }
                return V;
              }
              function f(V, z, P) {
                var Z = !1;
                return p.getTests.call(u, V).every(function(Y, oe) {
                  var q = Y.match;
                  if (L.getBuffer.call(u, !0), (Z = (!q.jit || y.validPositions[L.seekPrevious.call(u, V)] !== void 0) && (q.fn != null ? q.fn.test(z, y, V, P, M, h.call(u, n)) : (z === q.def || z === M.skipOptionalPartCharacter) && q.def !== "" && {
                    c: p.getPlaceholder.call(u, V, q, !0) || q.def,
                    pos: V
                  })) !== !1) {
                    var ne = Z.c !== void 0 ? Z.c : z, se = V;
                    return ne = ne === M.skipOptionalPartCharacter && q.static === !0 ? p.getPlaceholder.call(u, V, q, !0) || q.def : ne, (Z = E(Z)) !== !0 && Z.pos !== void 0 && Z.pos !== V && (se = Z.pos), Z !== !0 && Z.pos === void 0 && Z.c === void 0 || o.call(u, n, g.extend({}, Y, {
                      input: R.call(u, ne, q, se)
                    }), l, se) === !1 && (Z = !1), !1;
                  }
                  return !0;
                }), Z;
              }
              n.begin !== void 0 && (x = u.isRTL ? n.end : n.begin);
              var v = !0, C = g.extend(!0, {}, y.validPositions);
              if (M.keepStatic === !1 && y.excludes[x] !== void 0 && s !== !0 && l !== !0)
                for (var S = x; S < (u.isRTL ? n.begin : n.end); S++)
                  y.excludes[S] !== void 0 && (y.excludes[S] = void 0, delete y.tests[S]);
              if (typeof M.preValidation == "function" && l !== !0 && d !== !0 && (v = E(v = M.preValidation.call(u, L.getBuffer.call(u), x, t, h.call(u, n), M, y, n, i || s))), v === !0) {
                if (v = f(x, t, i), (!i || l === !0) && v === !1 && d !== !0) {
                  var T = y.validPositions[x];
                  if (!T || T.match.static !== !0 || T.match.def !== t && t !== M.skipOptionalPartCharacter) {
                    if (M.insertMode || y.validPositions[L.seekNext.call(u, x)] === void 0 || n.end > x) {
                      var F = !1;
                      if (y.jitOffset[x] && y.validPositions[L.seekNext.call(u, x)] === void 0 && (v = m.call(u, x + y.jitOffset[x], t, !0, !0)) !== !1 && (s !== !0 && (v.caret = x), F = !0), n.end > x && (y.validPositions[x] = void 0), !F && !L.isMask.call(u, x, M.keepStatic && x === 0)) {
                        for (var A = x + 1, I = L.seekNext.call(u, x, !1, x !== 0); A <= I; A++)
                          if ((v = f(A, t, i)) !== !1) {
                            v = e.call(u, x, v.pos !== void 0 ? v.pos : A) || v, x = A;
                            break;
                          }
                      }
                    }
                  } else
                    v = {
                      caret: L.seekNext.call(u, x)
                    };
                }
                u.hasAlternator && s !== !0 && !i && (v === !1 && M.keepStatic && (b.call(u, L.getBuffer.call(u)) || x === 0) ? v = D.call(u, x, t, i, l, void 0, n) : (h.call(u, n) && y.tests[x] && y.tests[x].length > 1 && M.keepStatic || v == 1 && M.numericInput !== !0 && y.tests[x] && y.tests[x].length > 1 && L.getLastValidPosition.call(u, void 0, !0) > x) && (v = D.call(u, !0))), v === !0 && (v = {
                  pos: x
                });
              }
              if (typeof M.postValidation == "function" && l !== !0 && d !== !0) {
                var O = M.postValidation.call(u, L.getBuffer.call(u, !0), n.begin !== void 0 ? u.isRTL ? n.end : n.begin : n, t, v, M, y, i, r);
                O !== void 0 && (v = O === !0 ? v : O);
              }
              v && v.pos === void 0 && (v.pos = x), v === !1 || d === !0 ? (L.resetMaskSet.call(u, !0), y.validPositions = g.extend(!0, [], C)) : e.call(u, void 0, x, !0);
              var N = E(v);
              return u.maxLength !== void 0 && L.getBuffer.call(u).length > u.maxLength && !l && (L.resetMaskSet.call(u, !0), y.validPositions = g.extend(!0, [], C), N = !1), N;
            }
            function c(n, t, i) {
              for (var l = this.maskset, s = !1, d = p.getTests.call(this, n), r = 0; r < d.length; r++) {
                if (d[r].match && (d[r].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || d[r].match.nativeDef === t.match.nativeDef || i.regex && !d[r].match.static && d[r].match.fn.test(t.input, l, n, !1, i))) {
                  s = !0;
                  break;
                }
                if (d[r].match && d[r].match.def === t.match.nativeDef) {
                  s = void 0;
                  break;
                }
              }
              return s === !1 && l.jitOffset[n] !== void 0 && (s = c.call(this, n + l.jitOffset[n], t, i)), s;
            }
            function a(n, t, i) {
              var l, s, d = this, r = this.maskset, u = this.opts, g = this.dependencyLib, M = u.skipOptionalPartCharacter, y = d.isRTL ? i.slice().reverse() : i;
              if (u.skipOptionalPartCharacter = "", n === !0)
                L.resetMaskSet.call(d), r.tests = {}, n = 0, t = i.length, s = L.determineNewCaretPosition.call(d, {
                  begin: 0,
                  end: 0
                }, !1).begin;
              else {
                for (l = n; l < t; l++)
                  delete r.validPositions[l];
                s = n;
              }
              var x = new g.Event("keypress");
              for (l = n; l < t; l++) {
                x.key = y[l].toString(), d.ignorable = !1;
                var E = B.EventHandlers.keypressEvent.call(d, x, !0, !1, !1, s);
                E !== !1 && E !== void 0 && (s = E.forwardPosition);
              }
              u.skipOptionalPartCharacter = M;
            }
            function e(n, t, i) {
              var l = this, s = this.maskset, d = this.dependencyLib;
              if (n === void 0)
                for (n = t - 1; n > 0 && !s.validPositions[n]; n--)
                  ;
              for (var r = n; r < t; r++)
                if (s.validPositions[r] === void 0 && !L.isMask.call(l, r, !1) && (r == 0 ? p.getTest.call(l, r) : s.validPositions[r - 1])) {
                  var u = p.getTests.call(l, r).slice();
                  u[u.length - 1].match.def === "" && u.pop();
                  var g, M = p.determineTestTemplate.call(l, r, u);
                  if (M && (M.match.jit !== !0 || M.match.newBlockMarker === "master" && (g = s.validPositions[r + 1]) && g.match.optionalQuantifier === !0) && ((M = d.extend({}, M, {
                    input: p.getPlaceholder.call(l, r, M.match, !0) || M.match.def
                  })).generatedInput = !0, o.call(l, r, M, !0), i !== !0)) {
                    var y = s.validPositions[t].input;
                    return s.validPositions[t] = void 0, m.call(l, t, y, !0, !0);
                  }
                }
            }
            function o(n, t, i, l) {
              var s = this, d = this.maskset, r = this.opts, u = this.dependencyLib;
              function g(O, N, V) {
                var z = N[O];
                if (z !== void 0 && z.match.static === !0 && z.match.optionality !== !0 && (N[0] === void 0 || N[0].alternation === void 0)) {
                  var P = V.begin <= O - 1 ? N[O - 1] && N[O - 1].match.static === !0 && N[O - 1] : N[O - 1], Z = V.end > O + 1 ? N[O + 1] && N[O + 1].match.static === !0 && N[O + 1] : N[O + 1];
                  return P && Z;
                }
                return !1;
              }
              var M = 0, y = n.begin !== void 0 ? n.begin : n, x = n.end !== void 0 ? n.end : n, E = !0;
              if (n.begin > n.end && (y = n.end, x = n.begin), l = l !== void 0 ? l : y, i === void 0 && (y !== x || r.insertMode && d.validPositions[l] !== void 0 || t === void 0 || t.match.optionalQuantifier || t.match.optionality)) {
                var f, v = u.extend(!0, {}, d.validPositions), C = L.getLastValidPosition.call(s, void 0, !0);
                for (d.p = y, f = C; f >= y; f--)
                  delete d.validPositions[f], t === void 0 && delete d.tests[f + 1];
                var S, T, F = l, A = F;
                for (t && (d.validPositions[l] = u.extend(!0, {}, t), A++, F++), f = t ? x : x - 1; f <= C; f++) {
                  if ((S = v[f]) !== void 0 && S.generatedInput !== !0 && (f >= x || f >= y && g(f, v, {
                    begin: y,
                    end: x
                  }))) {
                    for (; p.getTest.call(s, A).match.def !== ""; ) {
                      if ((T = c.call(s, A, S, r)) !== !1 || S.match.def === "+") {
                        S.match.def === "+" && L.getBuffer.call(s, !0);
                        var I = m.call(s, A, S.input, S.match.def !== "+", !0);
                        if (E = I !== !1, F = (I.pos || A) + 1, !E && T)
                          break;
                      } else
                        E = !1;
                      if (E) {
                        t === void 0 && S.match.static && f === n.begin && M++;
                        break;
                      }
                      if (!E && L.getBuffer.call(s), A > d.maskLength)
                        break;
                      A++;
                    }
                    p.getTest.call(s, A).match.def == "" && (E = !1), A = F;
                  }
                  if (!E)
                    break;
                }
                if (!E)
                  return d.validPositions = u.extend(!0, [], v), L.resetMaskSet.call(s, !0), !1;
              } else
                t && p.getTest.call(s, l).match.cd === t.match.cd && (d.validPositions[l] = u.extend(!0, {}, t));
              return L.resetMaskSet.call(s, !0), M;
            }
          }
        }, K = {};
        function X(G) {
          var k = K[G];
          if (k !== void 0)
            return k.exports;
          var w = K[G] = {
            exports: {}
          };
          return U[G](w, w.exports, X), w.exports;
        }
        var re = {};
        return function() {
          var G, k = re;
          Object.defineProperty(k, "__esModule", {
            value: !0
          }), k.default = void 0, X(7149), X(3194), X(9302), X(4013), X(3851), X(219), X(207), X(5296);
          var w = ((G = X(2394)) && G.__esModule ? G : {
            default: G
          }).default;
          k.default = w;
        }(), re;
      }();
    });
  })(Ce);
  var Ze = Ce.exports;
  const $e = /* @__PURE__ */ Ve(Ze);
  Oe({ name: "Contact info imrovement", dev: "SKh" }), Ae("exp_improve_contact");
  const He = window.innerWidth < 768 ? "mobile" : "desktop";
  class Ge {
    constructor(H) {
      this.device = H, this.observer = null, this.init();
    }
    init() {
      document.head.insertAdjacentHTML("beforeend", `<style>${Be}</style>`), this.observerBagControlVersion(), this.renderNewFormStep(), this.initLoaderStep(), this.initSliderReviews(), this.clickInputs(), this.clickContinueBtn(), this.clickSeeMyResultsBtn(), this.clickGoogleSignInBtn(), this.visibleHandler();
      const H = document.createElement("script");
      H.src = "https://accounts.google.com/gsi/client", H.async = !0, document.head.appendChild(H);
    }
    initLoaderStep() {
      ke("#edit-what-is-your-family-s-approximate-yearly-household-income- label").forEach((H) => {
        H.addEventListener("click", (U) => {
          setTimeout(() => {
            var K, X, re;
            (K = j(".dialog-off-canvas-main-canvas")) == null || K.classList.add("is_loader"), (X = j(".dialog-off-canvas-main-canvas")) == null || X.classList.add("is_loader_active"), (re = j('section.form-wrapper.webform-card[data-title="What is your contact info?"]')) == null || re.classList.add("is_loader"), this.renderNewLoaderBlock(), this.createLoader(), this.renderReviewsBlock(), this.changeLogoImg();
          }, 300);
        });
      });
    }
    renderNewFormStep() {
      fe('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then((H) => {
        j(".last_steps_wrapper") || j(
          'section.form-wrapper.webform-card[data-title="What is your contact info?"] .webform-card-wrapper'
        ).insertAdjacentHTML("afterbegin", Ie);
      }), fe(".email_name_box").then((H) => {
        const U = j(".form-item-email-address"), K = j(".form-item-email-address label:not(.error)"), X = j(".form-item-first-name"), re = j(".form-item-first-name label:not(.error)"), G = j("#edit-first-name"), k = j(".form-item-last-name"), w = j(".form-item-last-name label:not(.error)"), p = j(".form-item-last-name #edit-last-name");
        re.textContent !== "First Name" && (re.textContent = "First Name"), w.textContent !== "Last Name" && (w.textContent = "Last Name"), K.textContent !== "Email" && (K.textContent = "Email"), G.placeholder !== "John" && (G.placeholder = "John"), p.placeholder !== "Doe" && (p.placeholder = "Doe"), j("#continueValidationBtn").insertAdjacentElement("beforebegin", X), j("#continueValidationBtn").insertAdjacentElement("beforebegin", k), j("#continueValidationBtn").insertAdjacentElement("beforebegin", U);
        let _ = j(".benefits"), L = j(".benefits > div > p");
        L.textContent !== "What you’ll get:" && (L.textContent = "What you’ll get:"), j(".email_name_box").insertAdjacentElement("beforeend", _);
      }), fe(".phone_box").then((H) => {
        let U = j(".form-type-tel"), K = j(".form-type-tel label:not(.error)"), X = j("#edit-mobile-number");
        K.textContent !== "Mobile phone number" && (K.textContent = "Mobile phone number"), X.placeholder !== "(___) ___-____" && (X.placeholder = "(___) ___-____"), this.observePhoneNumberPlaceholderChange(), j(".phone_box #seeMyResultsBtn").insertAdjacentElement("beforebegin", U);
      });
    }
    renderNewLoaderBlock() {
      fe('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then((H) => {
        const U = ke(".loading-data li"), K = Array.from(U, (X) => X.textContent);
        j(".new_loader_block") || j('section.form-wrapper.webform-card[data-title="What is your contact info?"]').insertAdjacentHTML(
          "beforebegin",
          Fe(K)
        );
      });
    }
    createLoader() {
      const K = Math.round(12e3 / 16.666666666666668);
      let X = 0;
      fe(".new_loader_block").then((re) => {
        const G = j(".new_loader_block"), k = j(".loader_cover"), w = j(".loader_cover_fill"), p = j(".percentage"), L = k.r.baseVal.value * 2 * Math.PI;
        w.style.strokeDasharray = `${L} ${L}`, w.style.strokeDashoffset = `${L}`;
        const B = (b) => {
          const h = L - b / 100 * L;
          w.style.strokeDashoffset = h, p.textContent = `${Math.round(b)}%`;
        }, D = () => {
          var h, m;
          const b = X / K * 100;
          B(b), b >= 100 ? (G.style.display = "none", j('section.form-wrapper.webform-card[data-title="What is your contact info?"]') && j('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.contains(
            "is_loader"
          ) && j('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.remove(
            "is_loader"
          ), (h = j(".dialog-off-canvas-main-canvas")) != null && h.classList.contains("is_loader_active") && ((m = j(".dialog-off-canvas-main-canvas")) == null || m.classList.remove("is_loader_active")), j(".dialog-off-canvas-main-canvas") && !j(".dialog-off-canvas-main-canvas").classList.contains("is_loader") && j(".dialog-off-canvas-main-canvas").classList.add("is_loader"), this.renderReviewsBlock()) : X < K && (X++, requestAnimationFrame(D));
        };
        D();
        const R = Array.from(ke(".loading_txt_wrapper p"));
        this.animateLoadingText(R);
      });
    }
    animateLoadingText(H) {
      let U = 0, K = null;
      (() => {
        H[U].style.display = "block", U++, K = setInterval(() => {
          H[U - 1].style.display = "none", U < H.length && (H[U].style.display = "block"), U >= H.length && (H[U - 1].style.display = "block", clearInterval(K)), U++;
        }, 12e3 / H.length);
      })();
    }
    changeLogoImg() {
      j(".dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img") && j(".dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img").src !== "/sites/default/files/inline-images/GrantMe_Colour_Full_Logo_2X_0.png" && (j(".dialog-off-canvas-main-canvas.is_loader .navbar-header .logo img").src = "/sites/default/files/inline-images/GrantMe_Colour_Full_Logo_2X_0.png");
    }
    // SliderReviews
    renderReviewsBlock() {
      !j(".new_reviews_block") && j(".testimonials") && j(".testimonials").insertAdjacentHTML("afterbegin", Re);
    }
    initSliderReviews() {
      Te([
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      ]).then(async () => {
        let H = setInterval(() => {
          if (typeof jQuery(".new_reviews_list").slick == "function" && j(".new_reviews_list")) {
            clearInterval(H);
            let X = jQuery(".new_reviews_list").on("init", function() {
              jQuery(this).css("visibility", "visible");
            }).slick({
              slidesToShow: 3.92,
              slidesToScroll: 1,
              initialSlide: 0,
              adaptiveHeight: !0,
              autoplay: !0,
              autoplaySpeed: 4e3,
              prevArrow: `<div class="prev_btn slider_arrow">${ae.arrPrev}</div>`,
              nextArrow: `<div class="next_btn slider_arrow">${ae.arrNext}</div>`,
              responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
            }), re = setInterval(() => {
              if (typeof $ == "function") {
                clearInterval(re);
                let G = $(".new_reviews_list").find(".slick-slide").last().clone();
                $(".new_reviews_list").slick("slickAdd", G);
              }
            }, 300);
            X.on("swipe", function(G, k, w) {
              ge("exp_improve_contact_swipe_01", w, "Swipe slider", "Contact info Step 1 Review");
            }), ke(".slider_arrow").forEach((G) => {
              G.addEventListener("click", (k) => {
                let w = null;
                k.currentTarget.classList.contains("prev_btn") ? w = "left" : k.currentTarget.classList.contains("next_btn") && (w = "right"), ge("exp_improve_contact_arrows_01", w || "", "Arrows", "Contact info Step 1 Review");
              });
            });
          }
        }, 400);
      });
    }
    // GoogleSignIn
    clickGoogleSignInBtn() {
      window.onSignIn = function(H) {
        ge("exp_improve_contact_button_03", "Google", "Button", "Your results are ready! Step 2");
        let U = H.credential.split("."), K = JSON.parse(atob(U[1]));
        console.log(K, "user_info");
        let X = K.given_name, re = K.email, G = K.family_name;
        j("#edit-first-name") && X && (j("#edit-first-name").value = X), j("#edit-email-address") && re && (j("#edit-email-address").value = re), j("#edit-last-name") && G && (j("#edit-last-name").value = G), setTimeout(() => {
          j("#edit-first-name").value !== "" && j("#edit-last-name").value !== "" && j("#edit-email-address").value !== "" && (j(".email_name_box").classList.add("is_hidden"), j(".phone_box").classList.contains("is_hidden") && j(".phone_box").classList.remove("is_hidden"), j(".new_reviews_block").classList.contains("is_hidden") || j(".new_reviews_block").classList.add("is_hidden"));
        }, 500);
      };
    }
    //click on ----> Continue | SeeMyResults | input edit-first-name | input edit-last-name | input edit-email-address | input edit-mobile-number
    clickContinueBtn() {
      fe("#continueValidationBtn").then((H) => {
        j("#continueValidationBtn").addEventListener("click", (U) => {
          U.preventDefault(), this.validationFormEmailNameBox(j("#edit-first-name"), !0), this.validationFormEmailNameBox(j("#edit-last-name"), !0), this.validationFormEmailNameBox(j("#edit-email-address"), !0), ge("exp_improve_contact_button_01", "Continue", "Button", "Your results are ready! Step 2");
        });
      });
    }
    clickInputs() {
      fe('section.form-wrapper.webform-card[data-title="What is your contact info?"]').then((H) => {
        ke('section.form-wrapper.webform-card[data-title="What is your contact info?"] input').forEach((U) => {
          U.addEventListener("input", (K) => {
            K.target.getAttribute("name") !== "mobile_number" ? this.validationFormEmailNameBox(K.target) : setTimeout(() => {
              this.validationFormPhoneBox(K.target);
            }, 400);
          }), U.addEventListener("blur", (K) => {
            K.target.getAttribute("name") === "mobile_number" && ge("exp_improve_contact_input_01", "Mobile phone number", "Input", "Almost done! Step 3");
          });
        });
      });
    }
    clickSeeMyResultsBtn() {
      fe("#seeMyResultsBtn").then((H) => {
        j("#seeMyResultsBtn").addEventListener("click", (U) => {
          U.preventDefault(), ge("exp_improve_contact_button_04", "See My Results", "Button", "Almost done! Step 3"), this.validationFormPhoneBox(j("#edit-mobile-number"), !0);
        });
      });
    }
    validationFormEmailNameBox(H, U = !1) {
      var G, k, w;
      let K = j("#edit-first-name").value.match(/\S+/), X = j("#edit-last-name").value.match(/\S+/), re = j("#edit-email-address").value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/);
      if (H.getAttribute("name") === "first_name")
        if (K == null) {
          j("#edit-first-name-error") || H.insertAdjacentHTML(
            "afterend",
            '<label id="edit-first-name-error" class="error" for="edit-first-name">Please Enter First Name</label>'
          );
          let p = setInterval(() => {
            j("#edit-first-name-error") && j("#edit-first-name-error").textContent !== "Please Enter First Name" && (clearInterval(p), j("#edit-first-name-error").textContent = "Please Enter First Name");
          }, 100);
        } else
          (G = j("#edit-first-name-error")) == null || G.remove();
      if (H.getAttribute("name") === "last_name")
        if (X == null) {
          j("#edit-last-name-error") || H.insertAdjacentHTML(
            "afterend",
            '<label id="edit-last-name-error" class="error" for="edit-last-name">Please Enter Last Name</label>'
          );
          let p = setInterval(() => {
            j("#edit-last-name-error") && j("#edit-last-name-error").textContent !== "Please Enter Last Name" && (clearInterval(p), j("#edit-last-name-error").textContent = "Please Enter Last Name");
          }, 100);
        } else
          (k = j("#edit-last-name-error")) == null || k.remove();
      if (H.getAttribute("name") === "email_address")
        if (re === null) {
          j("#edit-email-address-error") || H.insertAdjacentHTML(
            "afterend",
            '<label id="edit-email-address-error" class="error" for="edit-email-address">Please Enter Valid Email Address</label>'
          );
          let p = setInterval(() => {
            j("#edit-email-address-error") && j("#edit-email-address-error").textContent !== "Please Enter Valid Email Address" && (clearInterval(p), j("#edit-email-address-error").textContent = "Please Enter Valid Email Address");
          }, 100);
        } else
          (w = j("#edit-email-address-error")) == null || w.remove();
      if (re !== null && K !== null && X !== null && U) {
        j(".email_name_box").classList.add("is_hidden"), j(".phone_box").classList.contains("is_hidden") && j(".phone_box").classList.remove("is_hidden"), j(".new_reviews_block").classList.contains("is_hidden") || j(".new_reviews_block").classList.add("is_hidden");
        let p = j("#edit-mobile-number");
        p && p.placeholder !== "(___) ___-____" && (p.placeholder = "(___) ___-____");
      }
    }
    validationFormPhoneBox(H, U = !1) {
      var X;
      let K = j("#edit-mobile-number").value.match(/^\(\d{3}\) \d{3}-\d{4}$/);
      if (H.getAttribute("name") === "mobile_number")
        if (K == null) {
          j("#edit-mobile-number-error") || H.insertAdjacentHTML(
            "afterend",
            '<label id="edit-mobile-number-error" class="error" for="edit-mobile-number">Please Enter Mobile Number</label>'
          );
          let re = setInterval(() => {
            j("#edit-mobile-number-error") && j("#edit-mobile-number-error").textContent !== "Please Enter Mobile Number" && (clearInterval(re), j("#edit-mobile-number-error").textContent = "Please Enter Mobile Number");
          }, 100);
        } else
          (X = j("#edit-mobile-number-error")) == null || X.remove(), U && j(".webform-button--submit").click();
    }
    visibleHandler() {
      fe(".guarantee_block").then((H) => {
        ye(
          ".guarantee_block",
          "exp_improve_contact_banner_01",
          "Contact info Step 1 Qualified GrantMe students are guaranteed scholarship winnings",
          "Banner"
        );
      }), fe(".loader_timing_box").then((H) => {
        ye(
          ".loader_timing_box",
          "exp_improve_contact_block_01",
          "Contact infoStep 1 Searching for scholarship opportunities",
          "Block"
        );
      }), fe(".leyton").then((H) => {
        ye(".leyton", "exp_improve_contact_review_01", "Contact info Step 1", "Leyton - Review");
      }), fe(".lauren").then((H) => {
        ye(".lauren", "exp_improve_contact_review_01", "Contact info Step 1", "Lauren - Review");
      }), fe(".ashleigh").then((H) => {
        ye(".ashleigh", "exp_improve_contact_review_01", "Contact info Step 1", "Ashleigh - Review");
      }), fe(".salwa").then((H) => {
        ye(".salwa", "exp_improve_contact_review_01", "Contact info Step 1", "Salwa- Review");
      });
    }
    observePhoneNumberPlaceholderChange() {
      const H = new MutationObserver(() => {
        if (j("#edit-mobile-number") && j("#edit-mobile-number").placeholder !== "(___) ___-____") {
          let U = j("#edit-mobile-number");
          new $e("(999) 999-9999").mask(U), U.placeholder = "(___) ___-____", H.disconnect();
        }
      });
      H.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }
    observerBagControlVersion() {
      const H = new MutationObserver(() => {
        j('section.form-wrapper.webform-card[data-title="What is your contact info?"]').classList.contains("webform-card--active") && !j(".dialog-off-canvas-main-canvas").classList.contains("is_loader") && (j(".dialog-off-canvas-main-canvas").classList.add("is_loader"), this.renderReviewsBlock(), H.disconnect());
      });
      H.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }
  }
  fe("#edit-loading-screen").then((Q) => {
    new Ge(He);
  });
})();
//# sourceMappingURL=index.js.map
