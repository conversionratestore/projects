// https://vegasyacht.com/
if (window.location.pathname === "/") {
  let vegasYachtStart = setInterval(() => {
    if (document.querySelector(".fl-node-5fbe963db2e54")) {
      clearInterval(vegasYachtStart);

      //cdn clipboard
      let scriptClipBoard = document.createElement("script");
      scriptClipBoard.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js";
      scriptClipBoard.async = false;
      document.head.appendChild(scriptClipBoard);
      // cdn slider
      let scriptCustomSlider = document.createElement("script");
      scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
      scriptCustomSlider.async = false;
      document.head.appendChild(scriptCustomSlider);

      let scriptCustomSliderStyle = document.createElement("link");
      scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
      scriptCustomSliderStyle.rel = "stylesheet";
      document.head.appendChild(scriptCustomSliderStyle);

      function pushDataLayer(name, desc, type, loc) {
        console.log(name + " / " + desc + " / " + type + " / " + loc);

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
          event: "event-to-ga4",
          event_name: name,
          event_desc: desc,
          event_type: type,
          event_loc: loc,
        });
      }

      let vegasYachtStyle = /*html */ `
        <style>
          #rev_slider_1_1 .tp-revslider-mainul a.sg-popup-id-502,
          [data-popup-id="502"].fl-module.fl-module-button{
            display: none !important;
          }
          div.new_btn_inquire_now{
            font-family: 'Raleway',sans-serif;
    font-weight: bold !important;
    font-size: 16px !important;
    line-height: 20px !important;
    background: #cfbe88;
    padding: 5px !important;
    display: flex;
    color: #28364b !important;
    height: 56px;
    max-width: 182px;
    width: 100%;
    margin: 0 auto !important;
cursor: pointer;
align-items: center;
    justify-content: center;
          }
#sgpb-popup-dialog-main-div,
.sgpb-theme-1-overlay.sgpb-popup-overlay-502.sgpb-popup-overlay {
  display: none !important;
}
.overlay_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 27, 27, 0.5);
  display: flex;
  overflow-y: auto;
  z-index: 1000000000;
  transition: all 0.5s ease;
}
.overlay_popup.is_hidden {
  opacity: 0;
  pointer-events: none;
}
.overlay_popup .container_popup {
  display: block;
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: auto;
  transition: all 0.5s ease 0s;
}
.overlay_popup .container_popup > .btn_close {
  position: absolute;
  background: #f1f0e8;
  top: -10px;
  right: -7px;
  width: 48px;
  height: 48px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 50%;
}
.content_popup {
  background: #fff;
  padding: 50px 60px;
}
body.open_var {
  overflow: hidden !important;
}
.popup_header {
  margin: 0 0 20px;
}
.popup_header > h2,
.second_step h2,
.third_step h2 {
  color: #28364b;
  text-align: center;
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 400;
  line-height: 44px;
  margin: 0;
}
.second_step h2,
.third_step h2 {
  margin-bottom: 20px;
}
.my_date {
  font-weight: 600;
}
.private_event_request_form .continue_btn,
.private_event_request_form .submit_btn {
  display: flex;
  background: #cfbe88;
  color: #28364b;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  height: 56px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: 24px;
}
.private_event_request_form .first_step p,
.second_step p,
.third_step p {
  color: #4b4f58;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.14px;
  margin: 0 auto 25px !important;
  text-align: center;
  max-width: 300px;
}
.private_event_request_form label {
  display: block;
}
.private_event_request_form label + label {
  margin-top: 16px;
}
.private_event_request_form label > span {
  display: block;
  color: #28364b;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
}
.private_event_request_form label input::placeholder,
.private_event_request_form label textarea::placeholder {
  color: #838895;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
.private_event_request_form label input,
.private_event_request_form label textarea {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #e2e5eb !important;
  background: none;
  outline: inherit;
  resize: none;
}
.private_event_request_form label textarea {
  max-height: 51px;
}
.input_validation {
  display: none;
  color: #ef4836;
  text-align: left;
  font-size: 11px;
  line-height: 20px;
}
.first_step.is_hidden,
.second_step.is_hidden,
.third_step.is_hidden {
  display: none;
}
/*charter_services_request_block */
.charter_services_request_block {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  max-width: 816px;
  margin: 0 auto 82px;
  padding: 40px;
  gap: 32px;
}
.charter_services_request_block::after {
  content: "";
  background-image: url(https://vegasyacht.com/wp-content/uploads/2020/12/separator.png);
  position: absolute;
  width: 72px;
  height: 6px;
  bottom: -55px;
  left: 50%;
  transform: translateX(-50%);
}
.check_availability_wrapp > h2 {
  color: #cfbe88;
  font-family: "Pinyon Script", cursive;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  margin: 0 0 4px !important;
}
.check_availability_wrapp > p {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  text-transform: capitalize;
  margin-bottom: 32px !important;
}
.check_availability_btn {
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  background: #cfbe88;
  color: #28364b;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  transition: all 200ms linear;
}
/*private_event_block */
.private_event_block {
  padding: 94px 80px 24px;
}
.private_event_block > h4 {
  color: #cfbe88;
  text-align: center;
  font-family: "Pinyon Script", cursive;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 8px;
}
.private_event_block > h2 {
  position: relative;
  color: #28364b;
  text-align: center;
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;
  text-transform: capitalize;
  margin: 0 auto 82px;
  max-width: 711px;
}
.private_event_block > h2::after {
  content: "";
  background-image: url(https://vegasyacht.com/wp-content/uploads/2020/12/separator.png);
  position: absolute;
  width: 72px;
  height: 6px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
.private_event_list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  row-gap: 40px;
  margin: 0;
}
.private_event_link {
  width: 45%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
}
.get_a_quot_wrapp > p {
  color: #4b4f58;
  font-family: "Playfair Display";
  font-size: 27px;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 24px !important;
}
.get_a_quot_wrapp .get_a_quot_btn {
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 154px;
  height: 48px;
  gap: 8px;
  background: #cfbe88;
  color: #28364b;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  transition: all 200ms linear;
}
.get_a_quot_wrapp .get_a_quot_btn:hover,
.check_availability_btn:hover {
  background: #3a3a3a;
  color: #ffffff;
  transition: all 200ms linear;
  opacity: 1;
}
.private_event_link .img_wrapp {
  border: 15px solid #f1f0e8;
}
/*with_code_block */
.with_code_block {
  border: 2px dashed #e7e6de;
  background: #fff;
  max-width: 532px;
  margin: 30px auto 60px;
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
.with_code_block .accent_color {
  color: #e60023;
  text-transform: uppercase;
}
.book_now_wrapp p {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
}
.code_wrapp {
  padding-left: 32px;
  border-left: 2px dashed #e7e6de;
}
.code_wrapp p:nth-child(1) {
  position: relative;
  color: #28364b;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
.code_wrapp p:nth-child(2) {
  color: #28364b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0 0;
}
.voucher_block {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #e60023;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
}
.copied {
  position: absolute;
  right: -45px;
  top: 29px;
  border-radius: 100px;
  border: 1px solid #f1f0e8;
  background: #fff;
  box-shadow: 0px 6px 4px 0px rgba(52, 50, 41, 0.04);
  margin: 0 !important;
  padding: 4px 12px 4px 6px;
}
.copied > span {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-transform: initial;
}
/*how_to_find_us_block*/
.how_to_find_us_block {
  padding: 94px 40px;
}
.how_to_find_us_block h4.how_to_find_us_subtitle {
  color: #cfbe88;
  text-align: center;
  font-family: "Pinyon Script", cursive;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  margin: 0 0 8px;
}
.how_to_find_us_block h2.how_to_find_us_title {
  color: #28364b;
  text-align: center;
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;
  margin: 0 0 74px;
  position: relative;
}
.how_to_find_us_block h2.how_to_find_us_title::after {
  content: "";
  background-image: url(https://vegasyacht.com/wp-content/uploads/2020/12/separator.png);
  position: absolute;
  width: 72px;
  height: 6px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
.how_to_find_us_contacts {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 71px;
}
.how_to_find_us_contacts .how_to_find_us_maps {
  width: 50%;
}
.how_to_find_us_contacts .how_to_find_us_info {
  width: 47%;
  margin-top: 20px;
}
.how_to_find_us_descr {
  color: #4b4f58;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 32px;
}
.how_to_find_us_contacts #footer-social li a {
  color: inherit;
}
.how_to_find_us_contacts #footer-social li a:hover {
  color: #cebd88;
}
.how_to_find_accardion {
  list-style: none;
  max-width: 960px;
  margin: 56px auto 0;
}
.how_to_find_accardion_block {
  border: 1px solid #e7e6de;
}
.how_to_find_accardion_block:nth-child(2) {
  border-top: unset;
}
.how_to_find_accardion_block:nth-child(3) {
  border-top: unset;
  border-bottom: unset;
}
.how_to_find_accardion_link {
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.how_to_find_accardion_link h3 {
  color: #28364b;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
}
.how_to_find_accardion_lists {
  display: none;
}
.how_to_find_accardion_lists > div {
  padding: 0 16px 24px;
}
.how_to_find_accardion_lists p {
  position: relative;
  max-width: 815px;
  color: #4b4f58;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 0 5px;
  padding-left: 24px;
}
.how_to_find_accardion_lists p::before {
  position: absolute;
  content: "";
  background: #28364b;
  width: 6.5px;
  height: 6.5px;
  border-radius: 50%;
  left: 0;
  top: 5px;
}
.how_to_find_accardion_lists p + p {
  margin-top: 6px;
}
.how_to_find_accardion_link > span svg {
  transition: all 0.3s ease;
}
.how_to_find_accardion_link.active_block > span svg {
  transform: rotate(90deg);
  transition: all 0.3s ease;
}
/*What our clients say */
.custom-testimonials {
  display: none;
}
.our_clients_say_slider {
  background: #fff;
  padding: 46px 34px 37px 34px;
  margin-top: 16px;
}
.our_clients_say_list {
  margin: 0;
}
.our_clients_say_link {
  display: flex !important;
  gap: 24px;
  justify-content: space-between;
}
.our_clients_say_link .img_wrapp {
  flex: 1 0 200px;
  height: 230px;
}
.slick-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.our_clients_say_info > p {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  line-height: 26px;
  margin-bottom: 16px !important;
}
.our_clients_say_info > span {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
}
.our_clients_say_slider .slick-dots {
  display: flex;
  justify-content: center;
  margin: 32px 0 0;
  list-style: none;
}
.our_clients_say_slider .slick-dots li + li {
  margin-left: 12px;
}
.our_clients_say_slider .slick-dots li button {
  position: relative;
  display: flex;
  width: 10px;
  height: 10px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background-color: transparent !important;
  border-color: transparent !important;
  padding: 5px;
}
.our_clients_say_slider .slick-dots li button:before {
  position: absolute;
  content: "•";
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10px;
  height: 10px;
  text-align: center;
  border-radius: 50%;
  background-color: #e5e2d6;
}
.our_clients_say_slider .slick-dots li.slick-active button:before {
  background-color: #cfbe88;
}
.fl-node-5fc11f1bca086 > .fl-row-content-wrap {
  padding-right: 80px !important;
}
.our_clients_say_slider .slick-slide {
  margin: 0 1px;
}
@media (max-width: 1280px) {
  .private_event_list {
    gap: 50px;
  }
  .private_event_link {
    width: 47%;
  }
  .get_a_quot_wrapp > p {
    font-size: 21px;
  }
}
@media (max-width: 1050px) {
  .fl-node-5fc11f1bcaa37 {
    width: 65%;
    float: right;
  }
}
@media (max-width: 1015px) {
  .private_event_link {
    width: 45%;
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .overlay_popup .container_popup {
    max-width: 335px;
  }
  .content_popup {
    padding: 40px 20px;
  }
  .overlay_popup .container_popup > .btn_close {
    width: 40px;
    height: 40px;
  }
  .popup_header {
    margin: 0 0 16px;
  }
  .popup_header > h2,
  .second_step h2 {
    font-size: 30px !important;
    line-height: 36px !important;
  }
  .private_event_request_form .first_step p,
  .second_step p {
    margin: 0 auto 24px !important;
    max-width: 270px;
  }
  .private_event_request_form label + label {
    margin-top: 12px;
  }
  .private_event_request_form label > span {
    margin-bottom: 8px;
  }
  .private_event_request_form label input[name="date"]{
    min-height: 40px;
  }
  .private_event_request_form label input,
  .private_event_request_form label textarea {
    padding: 8px 16px;
  }
  .private_event_request_form .continue_btn,
  .private_event_request_form .submit_btn {
    margin-top: 20px;
  }
  .private_event_request_form label textarea {
    max-height: 42px;
  }
  .fl-node-5fc11f1bcaa37 {
    float: unset;
    margin: 0;
    max-width: unset !important;
  }
  /*charter_services_request_block */
  .charter_services_request_block {
    margin: 0 20px 78px;
    padding: 24px 32px 32px;
    gap: 20px;
    flex-direction: column;
  }
  .fl-node-5fbfc9ae93923 {
    display: none;
  }
  .fl-node-5fbfc7e848675.fl-row > .fl-row-content-wrap {
    padding-bottom: 0;
  }
  .charter_services_request_block::after {
    bottom: -51px;
  }
  .check_availability_wrapp > h2 {
    display: none;
  }
  .check_availability_wrapp > p {
    font-size: 30px;
    font-weight: 400;
    line-height: 36px;
    margin-bottom: 20px !important;
    text-align: center;
  }
  .fl-node-5fbe9552c11aa .fl-row-content-wrap {
    padding-bottom: 22px;
  }
  .private_event_block {
    padding: 72px 20px 24px;
  }
  .private_event_block > h4 {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 8px;
  }
  .private_event_block > h2 {
    font-size: 30px !important;
    line-height: 36px !important;
    margin: 0 auto 54px;
    max-width: 300px;
  }
  .private_event_block > h2::after {
    bottom: -17px;
  }
  .private_event_list {
    gap: 24px 16px;
  }
  .private_event_link {
    width: 47%;
    gap: 12px;
  }
  .private_event_link .img_wrapp {
    border: 10px solid #f1f0e8;
  }
  .get_a_quot_wrapp > p {
    font-size: 18px;
    line-height: 26px;
    margin-bottom: 16px !important;
    text-align: center;
    max-width: 160px;
  }
  .get_a_quot_wrapp .get_a_quot_btn {
    max-width: unset;
    height: 44px;
  }
  .fl-node-5fc11f1bca086.fl-row > .fl-row-content-wrap {
    padding: 40px 0 44px !important;
  }
  .fl-node-5fc11f1bca086.fl-row > .fl-row-content-wrap .fl-node-5fc11f1bca8fe .fl-module-content.fl-node-content {
    margin: 0 0 44px;
  }
  .fl-node-5fc11f1bca086.fl-row > .fl-row-content-wrap .fl-module-content.fl-node-content .uabb-infobox-title-prefix {
    font-size: 36px;
    line-height: 40px;
  }
  .fl-builder-content .fl-node-5fc11f1bca8fe .uabb-infobox-title {
    margin: 0;
    font-size: 30px;
    line-height: 36px;
  }
  .fl-node-5fc11f1bca086.fl-row .fl-node-5fd2066c22db6 .fl-module-content {
    margin: 32px 0 0;
  }
  .our_clients_say_slider {
    background: unset;
    padding: 0;
    margin-top: 0;
  }
  .our_clients_say_link {
    flex-direction: column;
    background: #fff;
    padding: 32px 24px;
    align-items: center;
    min-height: 778px;
    justify-content: flex-start;
  }
  .our_clients_say_link .img_wrapp {
    max-height: 230px;
  }
  .our_clients_say_slider .slick-slide {
    margin: 0 6px;
  }
  .our_clients_say_info > p {
    margin-bottom: 20px !important;
  }
  .our_clients_say_info > span {
    display: block;
    text-align: center;
  }
  /*with_code_block  */
  .with_code_block {
    gap: 8px;
    flex-direction: column;
    margin: 46px 27px 40px;
    padding: 22px;
  }
  .book_now_wrapp p {
    font-size: 22px;
    line-height: 30px;
  }
  .book_now_wrapp p br {
    display: none;
  }
  .code_wrapp {
    padding-left: unset;
    border-left: unset;
  }
  .code_wrapp p:nth-child(1) {
    text-align: center;
  }
  .fl-node-sx2fb7m13zdj > .fl-module-content {
    margin: 0;
  }
  .fl-node-sx2fb7m13zdj > .fl-module-content .uabb-infobox-title-prefix {
    font-size: 36px;
    font-weight: 400;
  }
  .fl-node-sx2fb7m13zdj > .fl-module-content .uabb-infobox-title {
    font-size: 30px !important;
    line-height: 36px !important;
    margin: 0;
  }
  /*how_to_find_us_block */
  .how_to_find_us_block {
    padding: 72px 16px 40px;
  }
  .how_to_find_us_block h4.how_to_find_us_subtitle {
    font-size: 36px;
    line-height: 40px;
  }
  .how_to_find_us_block h2.how_to_find_us_title {
    margin: 0 0 54px;
    font-size: 30px !important;
    line-height: 36px !important;
  }
  .how_to_find_us_block h2.how_to_find_us_title::after {
    bottom: -18px;
  }
  .how_to_find_us_contacts {
    gap: 32px;
    flex-direction: column;
  }
  .how_to_find_us_contacts .how_to_find_us_info {
    width: 100%;
    margin-top: unset;
  }
  .how_to_find_us_contacts .how_to_find_us_maps {
    width: 100%;
  }
  .how_to_find_accardion {
    margin: 40px auto 0;
  }
  .how_to_find_accardion_link h3 {
    font-size: 18px;
    line-height: 24px;
  }
  .fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(4) > div:last-child,
  .fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(5),
  .fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(6),
  .fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(7),
  .fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(8) {
    display: none;
  }
  .fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(4) > div:first-child .uabb-infobox-content > .uabb-infobox-text-wrap {
    overflow: hidden;
    height: 120px;
  }
  .fl-node-tp16blf7q3sz > .fl-col-content {
    position: relative;
  }
  .load_more_events_wrapp {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .load_more_events_bgr {
    filter: blur(11px);
    height: 42px;
    width: 100%;
    background: rgb(255 255 255 / 89%);
  }
  .load_more_events_wrapp > div:nth-child(2) {
    background: #fff;
    padding-top: 40px;
    width: 100%;
  }
  .load_more_events {
    max-width: 250px;
    margin: 0 auto;
    background: #28364b;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
  }
  #rev_slider_1_1_wrapper {
    height: 665px !important;
  }
  .tp-parallax-wrap {
    top: 170px !important;
  }
  .fl-row[data-node] .fl-row-content-wrap {
    padding-top: 40px !important;
  }
  .ast-header-break-point .ast-mobile-header-inline .main-header-container,
  .ast-header-break-point .ast-mobile-header-stack .main-header-container {
    position: relative;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .ast-header-break-point .site-header .main-header-bar-wrap .site-branding {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    padding: 0;
  }
  .ast-header-break-point .site-header .main-header-bar-wrap .site-branding > div {
    padding: 0;
  }
}
@media (max-width: 360px) {
  .with_code_block {
    padding: 15px;
  }
}
        </style>
      `;

      let privateEventBlock = /*html */ `
          <div class="private_event_block">
            <h4>Private Event</h4>
            <h2>Want to know how much a private event costs?</h2>
            <ul class="private_event_list"></ul>
          </div>
      `;
      let charterServicesRequestBlock = /*html */ `
            <div class="charter_services_request_block" data-visib='servicesRequest'>
              <div class="img_wrapp">
                <img src="https://conversionratestore.github.io/projects/llvws/improvingPDP/images/guests_dancing.jpg" alt="guests dancing" />
              </div>
              <div class="check_availability_wrapp">
                <h2>Unforgettable Experience Await</h2>
                <p>Want to charter a luxurious yacht?</p>
                <button class="check_availability_btn">Check Availability For Your Date</button>
              </div>
            </div>
      `;
      let withCodeBlock = /*html */ `
          <div class="with_code_block">
            <div class="book_now_wrapp">
              <p>Book now & <br> enjoy <span class="accent_color">10% off</span></p>
            </div>
            <div class="code_wrapp">
              <p>
                <span>With code:</span>
                <span class="voucher_block" data-clipboard-text="BOOK10">BOOK10
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.598 3.63594H11.4163V1.41016C11.4163 1.18364 11.2363 1 11.0143 1H2.40202C2.18 1 2 1.18364 2 1.41016V11.9539C2 12.1804 2.18 12.3641 2.40202 12.3641H4.58368V14.5898C4.58368 14.8164 4.76368 15 4.9857 15H13.598C13.82 15 14 14.8164 14 14.5898V4.04609C14 3.81958 13.82 3.63594 13.598 3.63594ZM2.80405 11.5438V1.82031H10.6123V4.03923C10.6122 4.04153 10.6119 4.04377 10.6119 4.04609C10.6119 4.04842 10.6122 4.05066 10.6123 4.05298V11.5438H2.80405ZM13.196 14.1797H5.38773V12.3641H11.0143C11.2363 12.3641 11.4163 12.1804 11.4163 11.9539V4.45625H13.196V14.1797Z" fill="#CFBE88" />
                  </svg>
                </span>
              </p>
              <p>Enter code when booking an event</p>
            </div>
          </div>
      `;
      let howToFindUsBlock = /*html */ `
      <div class="how_to_find_us_block">
        <h4 class="how_to_find_us_subtitle">Our location</h4>
        <h2 class="how_to_find_us_title">How to find us</h2>
        <div class="how_to_find_us_contacts">
          <div class="how_to_find_us_info">
            <p class="how_to_find_us_descr">You can find us just 20 miles away from the renowned Las Vegas Strip. Here, the desert, lights, and gambling transform into a tranquil, picturesque getaway with Lake Mead National Park (Hoover Dam) and Valley of Fire State Park right around the corner!</p>
            <ul id="footer-social" class="cp">
              <li><i class="fas fa-map-marker-alt"></i> 20 Costa di Lago, Suite 130, Henderson, NV 89011, US</li>
              <li><a href="tel:+39702-600-9860"><i class="fas fa-phone-alt"></i> 702-600-9860</a></li>
              <li><a href="mailto:lauren@llvws.com"><i class="fas fa-envelope"></i> lauren@llvws.com</a></li>
              <li style="padding: 0; font-style: italic">*Texting will get the fastest response</li>
            </ul>
          </div>
          <div class="how_to_find_us_maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.604617837276!2d-114.931480984194!3d36.10312508009815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d79321801de5%3A0xd989c2619f8db520!2s20%20Costa%20Di%20Lago%20%23130%2C%20Henderson%2C%20NV%2089011%2C%20USA!5e0!3m2!1sen!2sph!4v1607349582906!5m2!1sen!2sph" width="100%" height="405" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <ul class="how_to_find_accardion list_var"></ul>
      </div>
      `;
      let ourClientsSaySlider = /*html */ `
          <div class="our_clients_say_slider">
            <ul class="our_clients_say_list">
              <li class="our_clients_say_link">
                <div class="img_wrapp">
                  <img src="https://drive.google.com/uc?export=view&id=1VmXXkY7aQQMkF6EfSmBENo4T_tq6iUkG" alt="photo Jennifer K." />
                </div>
                <div class="our_clients_say_info">
                  <p>If you’re looking for one of the most unique experiences in Las Vegas THIS IS IT! I was looking for something fun to do for my husbands birthday and found The Yacht at Lake Las Vegas. The booking process as quick and easy, and the crew couldn’t have been more amazing! I planned everything from food, beverage and entertainment through Sarah and it was such an easy process. My husband and all our guests felt like celebrities for a night and it was a memory that we’ll cherish. Thank you Yacht Team!!</p>
                  <span>Jennifer K.</span>
                </div>
              </li>
              <li class="our_clients_say_link">
                <div class="img_wrapp">
                  <img src="https://conversionratestore.github.io/projects/llvws/improvingPDP/images/sliser_charles_l.png" alt="photo Sonya R." />
                </div>
                <div class="our_clients_say_info">
                  <p>I was looking for the perfect venue to elope in since all of our wedding plans got cancelled this year. The Yacht was the perfect option! We did our ceremony and reception here and the décor transformation was stunning! Our guests had the best time, the bartenders are the most kind and knowledgeable girls and the crew is so helpful! They did everything to make our day special and I can’t wait to come back to celebrate our anniversaries!</p>
                  <span>Sonya R.</span>
                </div>
              </li>
              <li class="our_clients_say_link">
                <div class="img_wrapp">
                  <img src="https://drive.google.com/uc?export=view&id=1zo15RcVPo3UaoKNP6X6_bBb1sN_FNvVK" alt="photo Charles L." />
                </div>
                <div class="our_clients_say_info">
                  <p>I loved every minute of my yacht experience! This was a bucket list moment for me, so I decided to go for it! All my interactions with the staff were great, they were king, helpful and made sure I had the night of my life! Can’t recommend this enough!</p>
                  <span>Charles L.</span>
                </div>
              </li>
            </ul>
          </div>
      `;
      let popUpPrivateEventReq1 = /*html */ `
        <div class="overlay_popup is_hidden private_event_req firts_get_a_quote" data-count='firts_get_a_quote' data-visibprivate='1'>
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.1454 14.8546C1.19184 14.9011 1.24699 14.938 1.30769 14.9631C1.36839 14.9883 1.43346 15.0012 1.49917 15.0012C1.56488 15.0012 1.62994 14.9883 1.69064 14.9631C1.75135 14.938 1.80649 14.9011 1.85293 14.8546L7.99818 8.70935L14.1459 14.8546C14.2398 14.9484 14.367 15.0011 14.4997 15.0011C14.6324 15.0011 14.7596 14.9484 14.8535 14.8546C14.9473 14.7608 15 14.6335 15 14.5008C15 14.3681 14.9473 14.2409 14.8535 14.1471L8.70571 8.00182L14.851 1.85406C14.9448 1.76024 14.9975 1.63299 14.9975 1.5003C14.9975 1.36761 14.9448 1.24036 14.851 1.14653C14.7571 1.05271 14.6299 1 14.4972 1C14.3645 1 14.2373 1.05271 14.1434 1.14653L7.99818 7.29429L1.85043 1.14903C1.75478 1.06712 1.63173 1.02431 1.50589 1.02917C1.38005 1.03403 1.26067 1.0862 1.17162 1.17525C1.08257 1.2643 1.0304 1.38368 1.02554 1.50952C1.02068 1.63537 1.06349 1.75841 1.1454 1.85406L7.29066 8.00182L1.1454 14.1496C1.05227 14.2433 1 14.37 1 14.5021C1 14.6342 1.05227 14.7609 1.1454 14.8546Z" fill="#28364B"/>
              </svg>
            </div>
          </div>
        </div>
    `;
      let popUpPrivateEventReq2 = /*html */ `
        <div class="overlay_popup is_hidden private_event_req second_get_a_quote" data-count='second_get_a_quote' data-visibprivate='2'>
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.1454 14.8546C1.19184 14.9011 1.24699 14.938 1.30769 14.9631C1.36839 14.9883 1.43346 15.0012 1.49917 15.0012C1.56488 15.0012 1.62994 14.9883 1.69064 14.9631C1.75135 14.938 1.80649 14.9011 1.85293 14.8546L7.99818 8.70935L14.1459 14.8546C14.2398 14.9484 14.367 15.0011 14.4997 15.0011C14.6324 15.0011 14.7596 14.9484 14.8535 14.8546C14.9473 14.7608 15 14.6335 15 14.5008C15 14.3681 14.9473 14.2409 14.8535 14.1471L8.70571 8.00182L14.851 1.85406C14.9448 1.76024 14.9975 1.63299 14.9975 1.5003C14.9975 1.36761 14.9448 1.24036 14.851 1.14653C14.7571 1.05271 14.6299 1 14.4972 1C14.3645 1 14.2373 1.05271 14.1434 1.14653L7.99818 7.29429L1.85043 1.14903C1.75478 1.06712 1.63173 1.02431 1.50589 1.02917C1.38005 1.03403 1.26067 1.0862 1.17162 1.17525C1.08257 1.2643 1.0304 1.38368 1.02554 1.50952C1.02068 1.63537 1.06349 1.75841 1.1454 1.85406L7.29066 8.00182L1.1454 14.1496C1.05227 14.2433 1 14.37 1 14.5021C1 14.6342 1.05227 14.7609 1.1454 14.8546Z" fill="#28364B"/>
              </svg>
            </div>
          </div>
        </div>
    `;
      let popUpPrivateEventReq3 = /*html */ `
        <div class="overlay_popup is_hidden private_event_req third_get_a_quote" data-count='third_get_a_quote' data-visibprivate='3'>
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.1454 14.8546C1.19184 14.9011 1.24699 14.938 1.30769 14.9631C1.36839 14.9883 1.43346 15.0012 1.49917 15.0012C1.56488 15.0012 1.62994 14.9883 1.69064 14.9631C1.75135 14.938 1.80649 14.9011 1.85293 14.8546L7.99818 8.70935L14.1459 14.8546C14.2398 14.9484 14.367 15.0011 14.4997 15.0011C14.6324 15.0011 14.7596 14.9484 14.8535 14.8546C14.9473 14.7608 15 14.6335 15 14.5008C15 14.3681 14.9473 14.2409 14.8535 14.1471L8.70571 8.00182L14.851 1.85406C14.9448 1.76024 14.9975 1.63299 14.9975 1.5003C14.9975 1.36761 14.9448 1.24036 14.851 1.14653C14.7571 1.05271 14.6299 1 14.4972 1C14.3645 1 14.2373 1.05271 14.1434 1.14653L7.99818 7.29429L1.85043 1.14903C1.75478 1.06712 1.63173 1.02431 1.50589 1.02917C1.38005 1.03403 1.26067 1.0862 1.17162 1.17525C1.08257 1.2643 1.0304 1.38368 1.02554 1.50952C1.02068 1.63537 1.06349 1.75841 1.1454 1.85406L7.29066 8.00182L1.1454 14.1496C1.05227 14.2433 1 14.37 1 14.5021C1 14.6342 1.05227 14.7609 1.1454 14.8546Z" fill="#28364B"/>
              </svg>
            </div>
          </div>
        </div>
    `;
      let popUpPrivateEventReq4 = /*html */ `
        <div class="overlay_popup is_hidden private_event_req fourth_get_a_quote"  data-count='fourth_get_a_quote' data-visibprivate='4'>
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.1454 14.8546C1.19184 14.9011 1.24699 14.938 1.30769 14.9631C1.36839 14.9883 1.43346 15.0012 1.49917 15.0012C1.56488 15.0012 1.62994 14.9883 1.69064 14.9631C1.75135 14.938 1.80649 14.9011 1.85293 14.8546L7.99818 8.70935L14.1459 14.8546C14.2398 14.9484 14.367 15.0011 14.4997 15.0011C14.6324 15.0011 14.7596 14.9484 14.8535 14.8546C14.9473 14.7608 15 14.6335 15 14.5008C15 14.3681 14.9473 14.2409 14.8535 14.1471L8.70571 8.00182L14.851 1.85406C14.9448 1.76024 14.9975 1.63299 14.9975 1.5003C14.9975 1.36761 14.9448 1.24036 14.851 1.14653C14.7571 1.05271 14.6299 1 14.4972 1C14.3645 1 14.2373 1.05271 14.1434 1.14653L7.99818 7.29429L1.85043 1.14903C1.75478 1.06712 1.63173 1.02431 1.50589 1.02917C1.38005 1.03403 1.26067 1.0862 1.17162 1.17525C1.08257 1.2643 1.0304 1.38368 1.02554 1.50952C1.02068 1.63537 1.06349 1.75841 1.1454 1.85406L7.29066 8.00182L1.1454 14.1496C1.05227 14.2433 1 14.37 1 14.5021C1 14.6342 1.05227 14.7609 1.1454 14.8546Z" fill="#28364B"/>
              </svg>
            </div>
          </div>
        </div>
    `;
      let popUpInquireNow = /*html */ `
        <div class="overlay_popup is_hidden private_event_req inquire_now"  data-count='inquire_now'>
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.1454 14.8546C1.19184 14.9011 1.24699 14.938 1.30769 14.9631C1.36839 14.9883 1.43346 15.0012 1.49917 15.0012C1.56488 15.0012 1.62994 14.9883 1.69064 14.9631C1.75135 14.938 1.80649 14.9011 1.85293 14.8546L7.99818 8.70935L14.1459 14.8546C14.2398 14.9484 14.367 15.0011 14.4997 15.0011C14.6324 15.0011 14.7596 14.9484 14.8535 14.8546C14.9473 14.7608 15 14.6335 15 14.5008C15 14.3681 14.9473 14.2409 14.8535 14.1471L8.70571 8.00182L14.851 1.85406C14.9448 1.76024 14.9975 1.63299 14.9975 1.5003C14.9975 1.36761 14.9448 1.24036 14.851 1.14653C14.7571 1.05271 14.6299 1 14.4972 1C14.3645 1 14.2373 1.05271 14.1434 1.14653L7.99818 7.29429L1.85043 1.14903C1.75478 1.06712 1.63173 1.02431 1.50589 1.02917C1.38005 1.03403 1.26067 1.0862 1.17162 1.17525C1.08257 1.2643 1.0304 1.38368 1.02554 1.50952C1.02068 1.63537 1.06349 1.75841 1.1454 1.85406L7.29066 8.00182L1.1454 14.1496C1.05227 14.2433 1 14.37 1 14.5021C1 14.6342 1.05227 14.7609 1.1454 14.8546Z" fill="#28364B"/>
              </svg>
            </div>
          </div>
        </div>
    `;
      let popUpCharterServicesReq = /*html */ `
        <div class="overlay_popup is_hidden charter_services_req" data-count="charter_services_req">
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1.1454 14.8546C1.19184 14.9011 1.24699 14.938 1.30769 14.9631C1.36839 14.9883 1.43346 15.0012 1.49917 15.0012C1.56488 15.0012 1.62994 14.9883 1.69064 14.9631C1.75135 14.938 1.80649 14.9011 1.85293 14.8546L7.99818 8.70935L14.1459 14.8546C14.2398 14.9484 14.367 15.0011 14.4997 15.0011C14.6324 15.0011 14.7596 14.9484 14.8535 14.8546C14.9473 14.7608 15 14.6335 15 14.5008C15 14.3681 14.9473 14.2409 14.8535 14.1471L8.70571 8.00182L14.851 1.85406C14.9448 1.76024 14.9975 1.63299 14.9975 1.5003C14.9975 1.36761 14.9448 1.24036 14.851 1.14653C14.7571 1.05271 14.6299 1 14.4972 1C14.3645 1 14.2373 1.05271 14.1434 1.14653L7.99818 7.29429L1.85043 1.14903C1.75478 1.06712 1.63173 1.02431 1.50589 1.02917C1.38005 1.03403 1.26067 1.0862 1.17162 1.17525C1.08257 1.2643 1.0304 1.38368 1.02554 1.50952C1.02068 1.63537 1.06349 1.75841 1.1454 1.85406L7.29066 8.00182L1.1454 14.1496C1.05227 14.2433 1 14.37 1 14.5021C1 14.6342 1.05227 14.7609 1.1454 14.8546Z" fill="#28364B"/>
              </svg>
            </div>
          </div>
        </div>
    `;

      let y = new Date().getFullYear();
      let m = new Date().getMonth() + 1;
      let d = new Date().getDate();
      let today = `${y < 10 ? "0" + y : y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;

      let contentPopup = /*html */ `
        <div class="content_popup private_event_req">
              <div class="popup_header">
      <h2>Charter Services Request</h2>
    </div>
    <div class="popup_body">
      <form action="" class="private_event_request_form">
        <div class="first_step">
          <p>By filling out the charter inquiry form below, you are one step closer to your dream event</p>
          <label for="">
            <span>Name</span>
            <input type="text" name="name" id="" maxlength="64" required placeholder="Name" />
            <div class="input_validation">Please enter your name</div>
          </label>
          <label for="">
            <span>Your email*</span>
            <input type="email" name="email" id="" maxlength="64" required placeholder="Enter email" />
            <div class="input_validation">Please enter your email address</div>
          </label>
          <label for="">
            <span>Date of the celebration*</span>
            <input type="date" name="date" required id="" placeholder="Date" value='${today}' min='${today}'/>
            <div class="input_validation">Please choose your desired rental date</div>
          </label>
          <button class="continue_btn">Continue</button>
        </div>
        <div class="second_step is_hidden">
          <label for="">
            <span>Duration of rental (in hours)*</span>
            <input type="number" name="hours" id="" min="1" max="24" required placeholder="Hours" />
            <div class="input_validation">Please enter duration of rental (in hours)</div>
          </label>
          <label for="">
            <span>Additional services needed (catering, DJ)?</span>
            <textarea name="services" id="" placeholder="Specify here"></textarea>
          </label>
          <label for="">
            <span>Any comments or special requests we should know about</span>
            <textarea name="comments" id="" placeholder="Type here"></textarea>
          </label>
          <button type="submit" class="submit_btn private_event_req_btn">Submit</button>
        </div>
        <div class="third_step is_hidden">
          <h2>Thank You!</h2>
          <p>Our booking team will process your request and we'll send you available slots for <span class="my_date">Thursday 15 June</span> and possible times for the following days.</p>
          <button class="submit_btn ok_btn">Ok</button>
        </div>
      </form>
    </div>
        </div>
    `;
      let contentPopupServicesRequest = /*html */ `
        <div class="content_popup charter_services_req">
              <div class="popup_header">
      <h2>Charter Services Request</h2>
    </div>
    <div class="popup_body">
      <form action="" class="private_event_request_form">
        <div class="first_step">
          <p>By filling out the charter inquiry form below, you are one step closer to your dream event</p>
          <label for="">
            <span>Desired rental date*</span>
            <input type="date" name="date" required id="" placeholder="Date" value='${today}' min='${today}'/>
            <div class="input_validation">Please choose your desired rental date</div>
          </label>
          <label for="">
            <span>Your email*</span>
            <input type="email" name="email" id="" maxlength="64" required placeholder="Enter email" />
            <div class="input_validation">Please enter your email address</div>
          </label>
          <button class="continue_btn charter_services_req_btn">Continue</button>
        </div>
        <div class="second_step is_hidden">
          <h2>Thank You!</h2>
          <p>Our booking team will process your request and we'll send you available slots for <span class="my_date">Thursday 15 June</span> and possible times for the following days.</p>
          <button class="submit_btn ok_btn">Ok</button>
        </div>
      </form>
    </div>
        </div>
    `;

      let arrpPrivateEvent = {
        1: [`Special Birthday Celebrations on a Yacht`, `https://conversionratestore.github.io/projects/llvws/improvingPDP/images/special_birthday.jpg`],
        2: [`Dream Wedding Celebrations on a Yacht`, `https://conversionratestore.github.io/projects/llvws/improvingPDP/images/dream_wedding.jpg`],
        3: [`Unforgettable Bachelor Parties on a Yacht`, `https://conversionratestore.github.io/projects/llvws/improvingPDP/images/unforgettable_bachelor.jpg`],
        4: [`Memorable Team Building Onboard a Yacht`, `https://conversionratestore.github.io/projects/llvws/improvingPDP/images/memorable team_building.jpg`],
      };

      let arrR = {
        1: [
          `Post-booking & arrival`,
          `<p>Once you complete your booking online, you will receive a confirmation email with a map showing where to park when you arrive, and digital links to both the liability waiver, and the required boaters' contract. Anyone participating in activities must have a liability release completed prior to arrival.</p>
          <p>Upon arriving at Lake Las Vegas, you will be relieved that there are no parking fees! Parking can be found in the Monte Lago parking garage located at 8 Strada Di Villagio, Henderson NV, 89011.</p>
          <p>After parking, you can walk through the Village and stop at any restaurants on-site. When you are finished strolling, head toward the marina, and you will find our office located behind Seasons Grocery.</p>`,
        ],
        2: [
          `Checking in`,
          `<p>We suggest arriving 10-15 minutes prior to your scheduled boat reservation time.</p>
          <p>Please be sure everyone has a waiver completed prior to check-in, and also have your confirmation email ready to show the office receptionist.</p>
          <p>Once checked in, each guest will receive a wristband.</p>
          <p>Self-service lockers are available at our facility on the dock. (CARD PAYMENT ONLY)</p>
          <p>An authorization hold will be required for the security deposit, which will only be charged in case the rules outlined in the Driver Consent Form are violated.</p>
          <p>A credit card authorization hold will be needed at the time of check-in on the day of your rental. Please make sure you have the Credit Card / debit card you booked with present at time of check-in. The credit card hold will be for 7 days.</p>
          `,
        ],
        3: [
          `Requirements & regulations`,
          `<p>You must be at least 21 years of age to operate an electric boat rental and hold a valid ID and credit card.</p>
          <p>Children over the age of 3 are to be counted as a guest.</p>
          <p>No swimming from the boat at any time.</p>
          <p>You may not dock or beach the boat.</p>
          <p>Coolers and ice checks are prohibited at Lake Las Vegas, however food and drink can be brought onto the electric boats.</p>
          <p>All rules and regulations can be found in our boaters contract, here: https://form.jotform.com/230950539241050</p>`,
        ],
        4: [`Cancelation & refunds`, `<p>Our cancelation policy allows for free cancelation up to 24 hours before the event. For cancelations, please send us an email or submit your request via chat or SMS. Refunds will be processed according to our terms and conditions.</p>`],
      };

      function setListPrivateEvent(title, img, count) {
        return `
            <li class="private_event_link" data-visib=${count}>
              <div class="img_wrapp">
                <img src="${img}" alt="${title}" />
              </div>
              <div class="get_a_quot_wrapp">
                <p>${title}</p>
                <button class="get_a_quot_btn">Get a Quote</button>
              </div>
            </li>
          `;
      }

      function setList(title, text, count) {
        return `
            <li class="how_to_find_accardion_block" data-visib=${count}>
                <div class="how_to_find_accardion_link">
                    <h3>${title}</h3>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.432 7.57172L6.03567 2.17714C5.79888 1.94095 5.41524 1.94095 5.17785 2.17714C4.94107 2.41334 4.94107 2.79697 5.17785 3.03316L10.1462 7.9997L5.17845 12.9662C4.94166 13.2024 4.94166 13.5861 5.17845 13.8229C5.41524 14.059 5.79948 14.059 6.03627 13.8229L11.4326 8.42833C11.6658 8.19458 11.6658 7.80492 11.432 7.57172Z" fill="#CFBE88"/>
                    </svg></span>
                </div>
                <div class="how_to_find_accardion_lists">
                    <div>
                        ${text}
                    </div>
                </div>
            </li>
          `;
      }

      document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet">`);
      document.head.insertAdjacentHTML("beforeend", vegasYachtStyle);
      document.body.insertAdjacentHTML("afterbegin", popUpPrivateEventReq1);
      document.body.insertAdjacentHTML("afterbegin", popUpPrivateEventReq2);
      document.body.insertAdjacentHTML("afterbegin", popUpPrivateEventReq3);
      document.body.insertAdjacentHTML("afterbegin", popUpPrivateEventReq4);
      document.body.insertAdjacentHTML("afterbegin", popUpInquireNow);

      document.body.insertAdjacentHTML("afterbegin", popUpCharterServicesReq);

      renderHtml();
      function renderHtml() {
        document.querySelectorAll(".sg-popup-id-502")?.forEach((el) => {
          el.insertAdjacentHTML("afterend", `<div class="new_btn_inquire_now">Inquire Now</div>`);
        });

        // document.querySelectorAll(".fl-button-wrap .fl-button").forEach((el) => {
        //   if (el.textContent.includes("Inquire Now") && !document.querySelector(".fl-button-wrap .fl-button + .new_btn_inquire_now")) {
        //     el.insertAdjacentHTML("afterend", `<div class="new_btn_inquire_now">Inquire Now</div>`);
        //   }
        // });

        if (document.querySelector(".fl-node-5fbe97b3793da") && !document.querySelector(".charter_services_request_block")) {
          document.querySelector(".fl-node-5fbe97b3793da").insertAdjacentHTML("beforebegin", charterServicesRequestBlock);
        }
        if (document.querySelector(".fl-node-5fbe9552c11aa") && !document.querySelector(".private_event_block")) {
          document.querySelector(".fl-node-5fbe9552c11aa").insertAdjacentHTML("afterend", privateEventBlock);
        }
        if (document.querySelector(".private_event_block") && document.querySelector(".private_event_list").children.length !== arrpPrivateEvent.length) {
          for (let key in arrpPrivateEvent) {
            document.querySelector(".private_event_list").insertAdjacentHTML("beforeend", setListPrivateEvent(arrpPrivateEvent[key][0], arrpPrivateEvent[key][1], key));
          }
        }
        if (document.querySelector(".fl-node-sx2fb7m13zdj") && !document.querySelector(".with_code_block")) {
          document.querySelector(".fl-node-sx2fb7m13zdj").insertAdjacentHTML("afterend", withCodeBlock);
        }
        if (!document.querySelector(".fl-node-5fbfca8d89fb3 + .fl-node-5fc11f1bca086")) {
          document.querySelector(".fl-node-5fbfca8d89fb3")?.after(document.querySelector(".fl-node-5fc11f1bca086"));
        }
        if (!document.querySelector(".how_to_find_us_block")) {
          document.querySelector("#what-you-get")?.insertAdjacentHTML("afterend", howToFindUsBlock);
        }
        if (document.querySelector(".how_to_find_us_block") && !document.querySelector(".how_to_find_us_block + .fl-node-5fc11d9865a4f")) {
          document.querySelector(".how_to_find_us_block")?.after(document.querySelector(".fl-node-5fc11d9865a4f"));
        }
        if (document.querySelector(".how_to_find_us_block + .fl-node-5fc11d9865a4f") && !document.querySelector(".fl-node-5fc11d9865a4f + .fl-node-5fc350efb5bc5")) {
          document.querySelector(".fl-node-5fc11d9865a4f")?.after(document.querySelector(".fl-node-5fc350efb5bc5"));
        }

        if (document.querySelector(".how_to_find_us_block") && document.querySelector(".how_to_find_accardion").children.length !== arrR.length) {
          for (let key in arrR) {
            document.querySelector(".how_to_find_accardion").insertAdjacentHTML("beforeend", setList(arrR[key][0], arrR[key][1], key));
          }
        }
        if (document.querySelector(".custom-testimonials") && !document.querySelector(".our_clients_say_slider")) {
          document.querySelector(".custom-testimonials").insertAdjacentHTML("afterend", ourClientsSaySlider);
        }
        if (window.innerWidth < 768) {
          if (!document.querySelector(".load_more_events") && document.querySelector(".fl-node-tp16blf7q3sz > .fl-col-content")) {
            document.querySelector(".fl-node-tp16blf7q3sz > .fl-col-content").insertAdjacentHTML(
              "beforeend",
              `<div class="load_more_events_wrapp">
                <div class="load_more_events_bgr"></div>
                <div>
                  <div class="load_more_events">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M19.3417 12.2377C18.9577 12.192 18.6194 12.4571 18.5737 12.832C18.1623 16.1417 15.3371 18.6286 11.9909 18.6286C8.33371 18.6286 5.36229 15.6571 5.36229 12C5.36229 8.34286 8.33371 5.37143 11.9909 5.37143C13.4811 5.37143 14.9166 5.88343 16.0686 6.78857H14.7337C14.3589 6.78857 14.048 7.09943 14.048 7.47429C14.048 7.84914 14.3589 8.16 14.7337 8.16H17.4766C17.8514 8.16 18.1623 7.84914 18.1623 7.47429V4.68571C18.1623 4.31086 17.8514 4 17.4766 4C17.1017 4 16.7909 4.31086 16.7909 4.68571V5.60914C15.4194 4.576 13.7371 4 11.9909 4C7.584 4 4 7.59314 4 12C4 16.4069 7.584 20 12 20C16.032 20 19.4423 16.992 19.936 12.9966C19.9817 12.6217 19.7166 12.2743 19.3417 12.2286V12.2377Z" fill="white"/>
                    </svg>
                    <span>Load more events</span>
                  </div>
                </div>
              </div>`
            );
          }
        }
      }

      initAccardionToggle();
      initClipboard();
      initSlickSlider();
      if (window.innerWidth < 768) {
        onClickLoadMore();
      }
      onClickDifBtn();
      visibElem();

      function initAccardionToggle() {
        // accardionToggle
        if ($(".how_to_find_accardion_link")) {
          document.querySelectorAll(".how_to_find_accardion_link")[1].classList.add("active_block");
          document.querySelectorAll(".how_to_find_accardion_lists")[1].style.display = "block";
          $(".how_to_find_accardion_link").click(function (e) {
            $(this).toggleClass("active_block");
            $(this).closest("li").toggleClass("active_block");
            $(this).next(".how_to_find_accardion_lists").slideToggle();
            if ($(".how_to_find_accardion_link").not(this)) {
              $(".how_to_find_accardion_link").not(this).next(".how_to_find_accardion_lists").css("display", "none");
              $(".how_to_find_accardion_link").not(this).removeClass("active_block");
              $(".how_to_find_accardion_link").not(this).closest("li").removeClass("active_block");
            }
            pushDataLayer("exp_new_ui_li_ol_inhp", `${e.currentTarget.querySelector("h3").textContent}`, "List item", "Our location HP");
            let w = e.currentTarget.querySelector("h3").textContent.split(" ");
            // if (e.currentTarget.classList.contains("active_block")) {
            //   pushDataLayer("exp_new_content_what_type_open", `Open - ${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Text area", "What type of college admissions assistance does your child require?");
            // } else {
            //   pushDataLayer("exp_new_content_what_type_close", `Close - ${w[0]} ${w[1]} ${w[2]} ${w[3]} ${w[4]}`, "Text area", "What type of college admissions assistance does your child require?");
            // }

            const headerOffset = 10;
            const elementPosition = this.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
        }
      }
      function initClipboard() {
        let a = setInterval(() => {
          if (typeof ClipboardJS === "function" && document.querySelector(".with_code_block")) {
            clearInterval(a);
            console.log(typeof ClipboardJS === "function");
            var clipboard = new ClipboardJS(".voucher_block");

            clipboard.on("success", function (e) {
              console.info("Action:", e.action);
              console.info("Text:", e.text);
              console.info("Trigger:", e.trigger);

              document.querySelector(".copied")?.remove();
              document.querySelector(".voucher_block").insertAdjacentHTML(
                "beforeend",
                `<p class="copied">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.2854 2.15632C13.1911 2.06216 13.0633 2.00928 12.9301 2.00928C12.7968 2.00928 12.669 2.06216 12.5747 2.15632L6.54635 8.16778L4.37135 5.80554C4.28105 5.70753 4.15552 5.64938 4.02237 5.64386C3.88921 5.63835 3.75931 5.68591 3.6612 5.77611C3.61266 5.82081 3.57341 5.87462 3.54568 5.93449C3.51795 5.99436 3.50228 6.0591 3.49957 6.12502C3.49686 6.19094 3.50716 6.25675 3.52989 6.31869C3.55262 6.38063 3.58733 6.43749 3.63203 6.48601L6.1612 9.23289C6.20695 9.28289 6.26236 9.32311 6.32408 9.35113C6.3858 9.37915 6.45255 9.39438 6.52031 9.39591H6.53099C6.66395 9.39585 6.79148 9.34313 6.88568 9.24929L13.2844 2.867C13.3787 2.77289 13.4319 2.64515 13.4321 2.51188C13.4322 2.37861 13.3795 2.25071 13.2854 2.15632Z" fill="#CFBE88"/>
                    <path d="M13.1641 6.49756C13.0308 6.49763 12.903 6.55061 12.8088 6.64486C12.7146 6.73911 12.6617 6.86691 12.6617 7.00016C12.6617 10.122 10.1219 12.6619 7 12.6619C3.87812 12.6619 1.33828 10.122 1.33828 7.00016C1.33828 3.87829 3.87812 1.33844 7 1.33844C7.13325 1.33844 7.26105 1.28553 7.3553 1.19133C7.44955 1.09713 7.50253 0.969354 7.5026 0.8361C7.5026 0.702801 7.44965 0.574962 7.35539 0.480705C7.26113 0.386449 7.13329 0.333496 7 0.333496C3.32395 0.333496 0.333328 3.32412 0.333328 7.00016C0.333328 10.6762 3.32395 13.6668 7 13.6668C10.676 13.6668 13.6667 10.6759 13.6667 7.00016C13.6667 6.86686 13.6137 6.73903 13.5195 6.64477C13.4252 6.55051 13.2974 6.49756 13.1641 6.49756Z" fill="#CFBE88"/>
                  </svg>
                  <span>Code is copied</span>
                </p>`
              );
              setTimeout(() => {
                document.querySelector(".copied")?.remove();
              }, 3000);

              e.clearSelection();
            });
          }
        }, 1000);
      }
      function onClickLoadMore() {
        let btnSearch = setInterval(() => {
          if (document.querySelector(".load_more_events")) {
            clearInterval(btnSearch);
            document.querySelector(".load_more_events").addEventListener("click", () => {
              pushDataLayer("exp_new_ui_b_twu_lm", "Load more", "Button", "Travel with us HP");
              document.querySelectorAll(".fl-node-tp16blf7q3sz .fl-col-group").forEach((el) => {
                el.style.display = "block";
              });

              document.querySelector(".fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(4) > div:first-child .uabb-infobox-content > .uabb-infobox-text-wrap").style.height = "unset";
              document.querySelector(".fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(4) > div:first-child .uabb-infobox-content > .uabb-infobox-text-wrap").style.overflow = "unset";
              document.querySelector(".fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(4) > div:last-child").style.display = "block";
              document.querySelector(".load_more_events_wrapp").style.display = "none";
              document.querySelector(".fl-node-tp16blf7q3sz .fl-col-group:nth-of-type(4)")?.scrollIntoView({ block: "start", behavior: "smooth" });
            });
          }
        }, 100);
      }
      function initSlickSlider() {
        let slickInterval = setInterval(() => {
          if (typeof jQuery(".our_clients_say_list").slick === "function" && document.querySelector(".our_clients_say_slider")) {
            clearInterval(slickInterval);
            //  slider
            let slider = jQuery(".our_clients_say_list").slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
              infinite: true,
              adaptiveHeight: true,
              // autoplay: true,
              autoplaySpeed: 7000,
              speed: 500,
              cssEase: "linear",
              responsive: [
                {
                  breakpoint: 778,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: true,
                  },
                },
              ],
            });
            slider.on("swipe", function () {});
          }
        }, 100);
      }
      function onClickDifBtn() {
        if (document.querySelector(".overlay_popup")) {
          let scroll = calcScroll();
          function onOpenPopup(contentPopupHtml, form, className) {
            document.querySelector("body").style.marginRight = `${scroll}px`;
            document.querySelector("body").classList.add("open_var");
            if (form === "charter_services_req") {
              document.querySelector(".overlay_popup.charter_services_req").classList.remove("is_hidden");
              if (!document.querySelector(".overlay_popup.charter_services_req .content_popup.charter_services_req")) {
                document.querySelector(".overlay_popup.charter_services_req .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
              }
            }
            if (form === "private_event_req") {
              if (className === "firts_get_a_quote") {
                document.querySelector(".overlay_popup.private_event_req.firts_get_a_quote").classList.remove("is_hidden");
                if (!document.querySelector(".overlay_popup.private_event_req.firts_get_a_quote .content_popup.private_event_req")) {
                  document.querySelector(".overlay_popup.private_event_req.firts_get_a_quote .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
                }
              }
              if (className === "second_get_a_quote") {
                document.querySelector(".overlay_popup.private_event_req.second_get_a_quote").classList.remove("is_hidden");
                if (!document.querySelector(".overlay_popup.private_event_req.second_get_a_quote .content_popup.private_event_req")) {
                  document.querySelector(".overlay_popup.private_event_req.second_get_a_quote .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
                }
              }
              if (className === "third_get_a_quote") {
                document.querySelector(".overlay_popup.private_event_req.third_get_a_quote").classList.remove("is_hidden");
                if (!document.querySelector(".overlay_popup.private_event_req.third_get_a_quote .content_popup.private_event_req")) {
                  document.querySelector(".overlay_popup.private_event_req.third_get_a_quote .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
                }
              }
              if (className === "fourth_get_a_quote") {
                document.querySelector(".overlay_popup.private_event_req.fourth_get_a_quote").classList.remove("is_hidden");
                if (!document.querySelector(".overlay_popup.private_event_req.fourth_get_a_quote .content_popup.private_event_req")) {
                  document.querySelector(".overlay_popup.private_event_req.fourth_get_a_quote .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
                }
              }
              if (className === "inquire_now") {
                document.querySelector(".overlay_popup.private_event_req.inquire_now").classList.remove("is_hidden");
                if (!document.querySelector(".overlay_popup.private_event_req.inquire_now .content_popup.private_event_req")) {
                  document.querySelector(".overlay_popup.private_event_req.inquire_now .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
                }
              }
            }

            document.querySelectorAll(".private_event_req .continue_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  e.preventDefault();
                  if (e.currentTarget.closest(".overlay_popup").classList.contains("inquire_now")) {
                    pushDataLayer("exp_new_ui_b_qcsrp_con_s1", "Continue", "Button", "Quiz Step 1 Chapter services request Pop up");
                  } else {
                    pushDataLayer("exp_new_ui_b_pecsrp_con_s1", `Continue ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Button", "Step 1 Private event  request Pop up");
                  }
                  validateForm(e.currentTarget.closest(".overlay_popup").getAttribute("data-count"), "");
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });

            document.querySelectorAll(".private_event_req_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  e.preventDefault();
                  if (e.currentTarget.closest(".overlay_popup.inquire_now")) {
                    pushDataLayer("exp_new_ui_b_qcsrp_sub_s2", "Submit", "Button", "Quiz Step 2 Chapter services request Pop up");
                  } else {
                    pushDataLayer("exp_new_ui_b_pecsrp_sub_s2", `Submit ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Button", "Step 2 Private event  request Pop up");
                  }
                  validateForm(e.currentTarget.closest(".overlay_popup").getAttribute("data-count"), "private_event_req_btn");
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });

            document.querySelectorAll(".overlay_popup .popup_body input")?.forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  if (e.currentTarget.closest(".overlay_popup.private_event_req")) {
                    if (e.currentTarget.closest(".overlay_popup.inquire_now.private_event_req")) {
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_qcsrp_i_s1", `${e.currentTarget.previousElementSibling.textContent}`, "Input", "Quiz Step 1 Chapter services request Pop up");
                      }
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_qcsrp_i_s2", `${e.currentTarget.previousElementSibling.textContent}`, "Input", "Quiz Step 2 Chapter services request Pop up");
                      }
                    } else {
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_pecsrp_i_s1", `${e.currentTarget.previousElementSibling.textContent} ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Input", "Step 1 Private event  request Pop up");
                      }
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_pecsrp_i_s2", `${e.currentTarget.previousElementSibling.textContent} ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Input", "Step 2 Private event  request Pop up");
                      }
                    }
                  }

                  if (e.currentTarget.closest(".overlay_popup.charter_services_req")) {
                    if (!e.currentTarget.closest(".overlay_popup.charter_services_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_in_csrp_i_s1", `${e.currentTarget.previousElementSibling.textContent}`, "Input", "Step 1 Chapter services request Pop up");
                    }
                  }
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });

            document.querySelectorAll(".popup_body textarea").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  if (e.currentTarget.closest(".overlay_popup.private_event_req")) {
                    if (e.currentTarget.closest(".overlay_popup.inquire_now")) {
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_qcsrp_i_s1", `${e.currentTarget.previousElementSibling.textContent}`, "Input", "Quiz Step 1 Chapter services request Pop up");
                      }
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_qcsrp_i_s2", `${e.currentTarget.previousElementSibling.textContent}`, "Input", "Quiz Step 2 Chapter services request Pop up");
                      }
                    } else {
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_pecsrp_i_s1", `${e.currentTarget.previousElementSibling.textContent} ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Input", "Step 1 Private event  request Pop up");
                      }
                      if (!e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                        pushDataLayer("exp_new_ui_in_pecsrp_i_s2", `${e.currentTarget.previousElementSibling.textContent} ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Input", "Step 2 Private event  request Pop up");
                      }
                    }
                  }
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });

            document.querySelectorAll(".overlay_popup .btn_close").forEach((i) => {
              i.addEventListener("click", (e) => {
                // click on btn close popup

                if (!e.target.getAttribute("data-test")) {
                  if (e.currentTarget.closest(".overlay_popup.private_event_req.inquire_now")) {
                    if ($(".first_step").is(":visible") && e.currentTarget.closest(".overlay_popup.private_event_req") && !e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_b_qcsrp_cl_s1", "Close", "Button", "Quiz Step 1 Chapter services request Pop up");
                    }
                    if ($(".second_step").is(":visible") && e.currentTarget.closest(".overlay_popup.private_event_req") && !e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_b_qcsrp_cl_s2", "Close", "Button", "Quiz Step 2 Chapter services request Pop up");
                    }
                    if ($(".third_step").is(":visible") && e.currentTarget.closest(".overlay_popup.private_event_req") && !e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".third_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_b_qcsrp_cl_s3", "Close", "Button", "Quiz Step 3 Chapter services request Pop up");
                    }
                  } else {
                    if ($(".first_step").is(":visible") && e.currentTarget.closest(".overlay_popup.private_event_req") && !e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_b_pecsrp_cl_s1", `Close ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Button", "Step 1 Private event  request Pop up");
                    }
                    if ($(".second_step").is(":visible") && e.currentTarget.closest(".overlay_popup.private_event_req") && !e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_b_pecsrp_cl_s2", `Close ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Button", "Step 2 Private event  request Pop up");
                    }
                    if ($(".third_step").is(":visible") && e.currentTarget.closest(".overlay_popup.private_event_req") && !e.currentTarget.closest(".overlay_popup.private_event_req")?.querySelector(".third_step").classList.contains("is_hidden")) {
                      pushDataLayer("exp_new_ui_b_pecsrp_cl_s3", `Close ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Button", "Step 3 Private event  request Pop up");
                    }
                  }

                  if ($(".first_step").is(":visible") && e.currentTarget.closest(".overlay_popup.charter_services_req") && !e.currentTarget.closest(".overlay_popup.charter_services_req")?.querySelector(".first_step").classList.contains("is_hidden")) {
                    pushDataLayer("exp_new_ui_b_csrp_cl_s1", `Close ${e.currentTarget.closest(".overlay_popup ").getAttribute("data-visibprivate")}`, "Button", "Step 1 Chapter services request Pop up");
                  }
                  if ($(".second_step").is(":visible") && e.currentTarget.closest(".overlay_popup.charter_services_req") && !e.currentTarget.closest(".overlay_popup.charter_services_req")?.querySelector(".second_step").classList.contains("is_hidden")) {
                    pushDataLayer("exp_new_ui_b_csrp_cl_s2", `Close ${e.currentTarget.closest(".overlay_popup").getAttribute("data-visibprivate")}`, "Button", "Step 2 Chapter services request Pop up");
                  }
                  onClosePopup();
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            document.querySelectorAll(".overlay_popup").forEach((i) => {
              i.addEventListener("click", (e) => {
                // click on overlay popup
                if (e.target.matches(".overlay_popup")) {
                  onClosePopup();
                }
              });
            });

            let okBtn = setInterval(() => {
              if (document.querySelector(".ok_btn")) {
                clearInterval(okBtn);
                document.querySelector(".ok_btn").addEventListener("click", (e) => {
                  e.preventDefault();
                  console.log(`ok_btn`);
                  onClosePopup();
                });
              }
            }, 100);
          }

          function onClosePopup() {
            // startVideo();
            document.querySelector("body").style.marginRight = `0px`;
            document.querySelectorAll(".overlay_popup").forEach((el) => {
              el.classList.add("is_hidden");
            });

            if (document.querySelector("body").classList.contains("open_var")) {
              document.querySelector("body").classList.remove("open_var");
            }

            // setTimeout(() => {
            //   document.querySelector(".content_popup")?.remove();
            // }, 400);
          }
          let f = setInterval(() => {
            if (document.querySelector(".check_availability_btn")) {
              clearInterval(f);
              document.querySelector(".check_availability_btn").addEventListener("click", () => {
                pushDataLayer("exp_new_ui_b_wwd_ca", "Check Availability For Your Date", "Button", "What we do HP");
                onOpenPopup(contentPopupServicesRequest, "charter_services_req");
              });
            }
          }, 100);
          let q = setInterval(() => {
            if (document.querySelector(".get_a_quot_btn")) {
              clearInterval(q);
              document.querySelectorAll(".get_a_quot_btn").forEach((el) => {
                el.addEventListener("click", (e) => {
                  pushDataLayer("exp_new_ui_b_pe_gq", `Get a quote ${el.previousElementSibling.textContent}`, "Button", "Private event HP");
                  console.log(el.closest(".private_event_link").getAttribute("data-visib"));
                  switch (el.closest(".private_event_link").getAttribute("data-visib")) {
                    case "1":
                      onOpenPopup(contentPopup, "private_event_req", "firts_get_a_quote");
                      break;
                    case "2":
                      onOpenPopup(contentPopup, "private_event_req", "second_get_a_quote");
                      break;
                    case "3":
                      onOpenPopup(contentPopup, "private_event_req", "third_get_a_quote");
                      break;
                    case "4":
                      onOpenPopup(contentPopup, "private_event_req", "fourth_get_a_quote");
                      break;

                    default:
                      break;
                  }
                });
              });
            }
          }, 100);

          document.querySelectorAll(".new_btn_inquire_now").forEach((el) => {
            // el.getAttribute("data-visib", "5");
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                e.preventDefault();
                e.stopPropagation();
                onOpenPopup(contentPopup, "private_event_req", "inquire_now");
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });
          });

          let charterServicesReqBtn = setInterval(() => {
            if (document.querySelector(".charter_services_req_btn")) {
              clearInterval(charterServicesReqBtn);
              document.querySelector(".charter_services_req_btn")?.addEventListener("click", (e) => {
                e.preventDefault();
                pushDataLayer("exp_new_ui_b_csrp_con_s1", "Continue", "Button", "Step 1 Chapter services request Pop up");
                validateForm("charter_services_req", "");
              });
            }
          }, 100);

          function calcScroll() {
            let div = document.createElement("div");
            div.style.width = "50px";
            div.style.height = "50px";
            div.style.overflowY = "scroll";
            div.style.visibility = "hidden";

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
          }
        }
      }
      function validateForm(parent, target) {
        let inputValueEmail = document.querySelector(`[data-count='${parent}'] input[name='email']`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        let inputValueDate = document.querySelector(`[data-count='${parent}'] [name="date"]`);
        let inputValueName = document.querySelector(`[data-count='${parent}'] input[name='name']`)?.value;
        let inputValueDuration = document.querySelector(`[data-count='${parent}'] input[name='hours']`)?.value.match(/^\d+$/);
        let inputValueServices = document.querySelector(`[data-count='${parent}'] textarea[name='services']`)?.value;
        let inputValueComments = document.querySelector(`[data-count='${parent}'] textarea[name='comments']`)?.value;
        let dateChecked;
        let evt;
        if (parent === "firts_get_a_quote") {
          evt = "Special Birthday Celebrations on a Yacht";
        }
        if (parent === "second_get_a_quote") {
          evt = "Dream Wedding Celebrations on a Yacht";
        }
        if (parent === "third_get_a_quote") {
          evt = "Unforgettable Bachelor Parties on a Yacht";
        }
        if (parent === "fourth_get_a_quote") {
          evt = "Memorable Team Building Onboard a Yacht";
        }
        if (parent === "inquire_now") {
          evt = "Inquire Now";
        }

        const months = {
          Jan: "January",
          Feb: "February",
          Mar: "March",
          Apr: "April",
          May: "May",
          Jun: "June",
          Jul: "July",
          Aug: "August",
          Sep: "September",
          Oct: "October",
          Nov: "November",
          Dec: "December",
        };
        const daysWeek = {
          Mon: "Monday",
          Tue: "Tuesday",
          Wed: "Wednesday",
          Thu: "Thursday",
          Fri: "Friday",
          Sat: "Saturday",
          Sun: "Sunday",
        };

        if (document.querySelector(`[data-count='${parent}'] input[name='name']`)) {
          if (inputValueName === "" || inputValueName === " ") {
            document.querySelector(`[data-count='${parent}'] input[name='name']`).classList.add("input_error");
            document.querySelector(`[data-count='${parent}'] input[name='name']`).nextElementSibling.style.display = "block";
          } else {
            document.querySelector(`[data-count='${parent}'] input[name='name']`).classList.remove("input_error");
            document.querySelector(`[data-count='${parent}'] input[name='name']`).nextElementSibling.style.display = "none";
          }
        }

        if (document.querySelector(`[data-count='${parent}'] input[name='hours']`) && target === "private_event_req_btn") {
          if (inputValueDuration === null) {
            document.querySelector(`[data-count='${parent}'] input[name='hours']`).classList.add("input_error");
            document.querySelector(`[data-count='${parent}'] input[name='hours']`).nextElementSibling.style.display = "block";
          } else {
            document.querySelector(`[data-count='${parent}'] input[name='hours']`).classList.remove("input_error");
            document.querySelector(`[data-count='${parent}'] input[name='hours']`).nextElementSibling.style.display = "none";
          }
        }

        if (inputValueEmail === null) {
          document.querySelector(`[data-count='${parent}'] input[name='email']`).classList.add("input_error");
          document.querySelector(`[data-count='${parent}'] input[name='email']`).nextElementSibling.style.display = "block";
        } else {
          document.querySelector(`[data-count='${parent}'] input[name='email']`).classList.remove("input_error");
          document.querySelector(`[data-count='${parent}'] input[name='email']`).nextElementSibling.style.display = "none";
        }

        if (inputValueDate.value === "") {
          inputValueDate.classList.add("input_error");
          inputValueDate.nextElementSibling.style.display = "block";
        } else {
          inputValueDate.classList.remove("input_error");
          inputValueDate.nextElementSibling.style.display = "none";
        }

        if (document.querySelector(`[data-count='${parent}'] .input_error`) == null) {
          console.log("charter_services_req", `Отправляй!`);
          dateChecked = new Date(new Date(document.querySelector(`[data-count='${parent}'] [name="date"]`).value)).toDateString().split(" ");

          if ((parent === "firts_get_a_quote" || parent === "second_get_a_quote" || parent === "third_get_a_quote" || parent === "fourth_get_a_quote" || parent === "inquire_now") && target === "") {
            document.querySelector(`[data-count='${parent}'] .private_event_req .second_step.is_hidden`)?.classList.remove("is_hidden");
            document.querySelector(`[data-count='${parent}'] .private_event_req .first_step`)?.classList.add("is_hidden");
          }

          if (parent === "charter_services_req") {
            evt = "Want To Charter A Luxurious Yacht?";
            document.querySelector(".charter_services_req .my_date").textContent = `${daysWeek[dateChecked[0]]} ${dateChecked[2]} ${months[dateChecked[1]]}`;
            ajaxEvents("Check Availability For Your Date", document.querySelector(`[data-count='${parent}'] input[name='email']`).value, document.querySelector('[name="date"]').value, "", `btn: ${evt}`, "charter_services_req");
          }
          if ((parent === "firts_get_a_quote" || parent === "second_get_a_quote" || parent === "third_get_a_quote" || parent === "fourth_get_a_quote" || parent === "inquire_now") && target === "private_event_req_btn") {
            document.querySelectorAll(`[data-count='${parent}'] .private_event_req .my_date`).forEach((el) => {
              el.textContent = `${daysWeek[dateChecked[0]]} ${dateChecked[2]} ${months[dateChecked[1]]}`;
            });
            ajaxEvents(document.querySelector(`[data-count='${parent}'] input[name='name']`).value, document.querySelector(`[data-count='${parent}'] input[name='email']`).value, document.querySelector('[name="date"]').value, inputValueServices, `${inputValueComments}, Duration of rental (in hours):${document.querySelector(`[data-count='${parent}'] input[name='hours']`)?.value}, btn: ${evt}`, parent);
          }
        }
      }

      function ajaxEvents(name, email, date, eventDescription, additionalInformation, parent) {
        let data = {
          lead: {
            first_name: name,
            last_name: "last_name",
            phone_number: "000-000-000",
            email_address: email,
            event_date: date,
            event_description: eventDescription,
            additional_information: additionalInformation,
          },
          lead_form_id: 32291,
        };
        $.ajax("https://api.tripleseat.com/v1/leads/create.js?lead_form_id=32291&public_key=a5b17036ec64ca3a1ee518df175e0dede392b261", {
          data: data,
          dataType: "JSONP",
          crossDomain: true,
          success: function (data) {
            console.log(data);
            if (data.errors != undefined) {
              // handle errors
            } else {
              // show data.success_message
              if (parent === "charter_services_req") {
                document.querySelector(".charter_services_req .second_step.is_hidden")?.classList.remove("is_hidden");
                document.querySelector(".charter_services_req .first_step")?.classList.add("is_hidden");
                pushDataLayer("exp_new_ui_chapter_sub_s2", `Chapter services request`, "Submit", "Step 1 Chapter services request Pop up");
              }
              if (parent === "firts_get_a_quote" || parent === "second_get_a_quote" || parent === "third_get_a_quote" || parent === "fourth_get_a_quote" || parent === "inquire_now") {
                document.querySelector(`[data-count='${parent}'] .private_event_req .third_step.is_hidden`)?.classList.remove("is_hidden");
                document.querySelector(`[data-count='${parent}'] .private_event_req .second_step`)?.classList.add("is_hidden");
                if (parent === "inquire_now") {
                  pushDataLayer("exp_new_ui_sub_qcsrp_s2", "Quiz Chapter services request", "Submit", "Quiz Step 2 Chapter services request Pop up");
                } else {
                  pushDataLayer("exp_new_ui_pecsrp_sub_s2", `Private event  request Pop up ${document.querySelector(`[data-count='${parent}']`).getAttribute("data-visibprivate")}`, "Submit", "Step 2 Private event request Pop up");
                }
              }
            }
          },
        });
      }

      function visibElem() {
        let obsV = new IntersectionObserver(visibilityV, {
          threshold: 1,
        });

        let obsV2 = new IntersectionObserver(visibilityV2, {
          threshold: 1,
        });

        let time;

        let intV1 = setInterval(() => {
          if (document.querySelector(".how_to_find_accardion")) {
            clearInterval(intV1);
            time = 3000;
            obsV.observe(document.querySelector(".how_to_find_accardion"));
          }
        }, 100);
        let intV2 = setInterval(() => {
          if (document.querySelector(".private_event_list")) {
            clearInterval(intV2);
            time = 2000;
            obsV.observe(document.querySelector(".private_event_list"));
          }
        }, 100);
        let intV3 = setInterval(() => {
          if (document.querySelector(".firts_get_a_quote .first_step")) {
            clearInterval(intV3);
            time = 0;
            obsV.observe(document.querySelector(".firts_get_a_quote .first_step"));
          }
        }, 100);
        let intV4 = setInterval(() => {
          if (document.querySelector(".second_get_a_quote .first_step")) {
            clearInterval(intV4);
            time = 0;
            obsV.observe(document.querySelector(".second_get_a_quote .first_step"));
          }
        }, 100);
        let intV5 = setInterval(() => {
          if (document.querySelector(".third_get_a_quote .first_step")) {
            clearInterval(intV5);
            time = 0;
            obsV.observe(document.querySelector(".third_get_a_quote .first_step"));
          }
        }, 100);
        let intV6 = setInterval(() => {
          if (document.querySelector(".fourth_get_a_quote .first_step")) {
            clearInterval(intV6);
            time = 0;
            obsV.observe(document.querySelector(".fourth_get_a_quote .first_step"));
          }
        }, 100);
        let intV7 = setInterval(() => {
          if (document.querySelector(".firts_get_a_quote .second_step")) {
            clearInterval(intV7);
            time = 0;
            obsV.observe(document.querySelector(".firts_get_a_quote .second_step"));
          }
        }, 100);
        let intV8 = setInterval(() => {
          if (document.querySelector(".second_get_a_quote .second_step")) {
            clearInterval(intV8);
            time = 0;
            obsV.observe(document.querySelector(".second_get_a_quote .second_step"));
          }
        }, 100);
        let intV9 = setInterval(() => {
          if (document.querySelector(".third_get_a_quote .second_step")) {
            clearInterval(intV9);
            time = 0;
            obsV.observe(document.querySelector(".third_get_a_quote .second_step"));
          }
        }, 100);
        let intV10 = setInterval(() => {
          if (document.querySelector(".fourth_get_a_quote .second_step")) {
            clearInterval(intV10);
            time = 0;
            obsV.observe(document.querySelector(".fourth_get_a_quote .second_step"));
          }
        }, 100);
        let intV11 = setInterval(() => {
          if (document.querySelector(".firts_get_a_quote .third_step")) {
            clearInterval(intV11);
            time = 0;
            obsV.observe(document.querySelector(".firts_get_a_quote .third_step"));
          }
        }, 100);
        let intV12 = setInterval(() => {
          if (document.querySelector(".second_get_a_quote .third_step")) {
            clearInterval(intV12);
            time = 0;
            obsV.observe(document.querySelector(".second_get_a_quote .third_step"));
          }
        }, 100);
        let intV13 = setInterval(() => {
          if (document.querySelector(".third_get_a_quote .third_step")) {
            clearInterval(intV13);
            time = 0;
            obsV.observe(document.querySelector(".third_get_a_quote .third_step"));
          }
        }, 100);
        let intV14 = setInterval(() => {
          if (document.querySelector(".fourth_get_a_quote .third_step")) {
            clearInterval(intV14);
            time = 0;
            obsV.observe(document.querySelector(".fourth_get_a_quote .third_step"));
          }
        }, 100);
        let intV15 = setInterval(() => {
          if (document.querySelector(".charter_services_req .first_step")) {
            clearInterval(intV15);
            time = 0;
            obsV.observe(document.querySelector(".charter_services_req .first_step"));
          }
        }, 100);
        let intV16 = setInterval(() => {
          if (document.querySelector(".charter_services_req .second_step")) {
            clearInterval(intV16);
            time = 0;
            obsV.observe(document.querySelector(".charter_services_req .second_step"));
          }
        }, 100);
        let intV17 = setInterval(() => {
          if (document.querySelector(".inquire_now .first_step")) {
            clearInterval(intV17);
            time = 0;
            obsV.observe(document.querySelector(".inquire_now .first_step"));
          }
        }, 100);
        let intV18 = setInterval(() => {
          if (document.querySelector(".inquire_now .second_step")) {
            clearInterval(intV18);
            time = 0;
            obsV.observe(document.querySelector(".inquire_now .second_step"));
          }
        }, 100);
        let intV19 = setInterval(() => {
          if (document.querySelector(".inquire_now .third_step")) {
            clearInterval(intV19);
            time = 0;
            obsV.observe(document.querySelector(".inquire_now .third_step"));
          }
        }, 100);

        function visibilityV(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              setTimeout(function () {
                obsV2.observe(i.target);
              }, time);
            }
          });
        }
        function visibilityV2(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              if (i.target.classList.contains("how_to_find_accardion")) {
                pushDataLayer("exp_new_ui_v_olhp", "Our location", "Visibility", "Our location HP");
              }
              if (i.target.classList.contains("private_event_list")) {
                pushDataLayer("exp_new_ui_v_pe", "Private event", "Visibility", "Private event HP");
              }
              if (i.target.closest(".firts_get_a_quote") && i.target.classList.contains("first_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s1", "Private event Chapter services request 1", "Visibility", "Step 1 Private event request Pop up");
              }
              if (i.target.closest(".second_get_a_quote") && i.target.classList.contains("first_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s1", "Private event Chapter services request 2", "Visibility", "Step 1 Private event request Pop up");
              }
              if (i.target.closest(".third_get_a_quote") && i.target.classList.contains("first_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s1", "Private event Chapter services request 3", "Visibility", "Step 1 Private event request Pop up");
              }
              if (i.target.closest(".fourth_get_a_quote") && i.target.classList.contains("first_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s1", "Private event Chapter services request 4", "Visibility", "Step 1 Private event request Pop up");
              }
              if (i.target.closest(".firts_get_a_quote") && i.target.classList.contains("second_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s2", "Private event Chapter services request 1", "Visibility", "Step 2 Private event request Pop up");
              }
              if (i.target.closest(".second_get_a_quote") && i.target.classList.contains("second_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s2", "Private event Chapter services request 2", "Visibility", "Step 2 Private event request Pop up");
              }
              if (i.target.closest(".third_get_a_quote") && i.target.classList.contains("second_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s2", "Private event Chapter services request 3", "Visibility", "Step 2 Private event request Pop up");
              }
              if (i.target.closest(".fourth_get_a_quote") && i.target.classList.contains("second_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s2", "Private event Chapter services request 4", "Visibility", "Step 2 Private event request Pop up");
              }
              if (i.target.closest(".firts_get_a_quote") && i.target.classList.contains("third_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s3", "Thank you 1", "Visibility", "Step 3 Private event request Pop up");
              }
              if (i.target.closest(".second_get_a_quote") && i.target.classList.contains("third_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s3", "Thank you 2", "Visibility", "Step 3 Private event request Pop up");
              }
              if (i.target.closest(".third_get_a_quote") && i.target.classList.contains("third_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s3", "Thank you 3", "Visibility", "Step 3 Private event request Pop up");
              }
              if (i.target.closest(".fourth_get_a_quote") && i.target.classList.contains("third_step")) {
                pushDataLayer("exp_new_ui_v_pecsrp_s3", "Thank you 4", "Visibility", "Step 3 Private event request Pop up");
              }

              if (i.target.closest(".charter_services_req") && i.target.classList.contains("first_step")) {
                pushDataLayer("exp_new_ui_v_csrp_s1", "Chapter services request", "Visibility", "Step 1 Chapter services request Pop up");
              }
              if (i.target.closest(".charter_services_req") && i.target.classList.contains("second_step")) {
                pushDataLayer("exp_new_ui_v_csrp_ty_s2", "Thank you", "Visibility", "Step 2 Chapter services request TY Pop up");
              }

              if (i.target.closest(".inquire_now") && i.target.classList.contains("first_step")) {
                pushDataLayer("exp_new_ui_v_qcsrp_s1", "Quiz Chapter services request", "Visibility", "Quiz Step 1 Chapter services request Pop up");
              }
              if (i.target.closest(".inquire_now") && i.target.classList.contains("second_step")) {
                pushDataLayer("exp_new_ui_v_qcsrp_s2", "Quiz Chapter services request", "Visibility", "Quiz Step 2 Chapter services request Pop up");
              }
              if (i.target.closest(".inquire_now") && i.target.classList.contains("third_step")) {
                pushDataLayer("exp_new_ui_v_qcsrp_s3", "Thank you Quiz Chapter services request", "Visibility", "Quiz Step 3 Chapter services request Pop up");
              }

              obsV.unobserve(i.target);
            }
            obsV2.unobserve(i.target);
          });
        }
      }
      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);
          clarity("set", "booking_page_exp", "variant_1");
        }
      }, 200);

      document.querySelector(".exp")?.remove();
    }
  }, 100);
}
