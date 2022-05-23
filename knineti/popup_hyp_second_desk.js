let startFunkDesk = setInterval(() => {
  if (document.querySelector(".entry-content")) {
    clearInterval(startFunkDesk)
    let scriptCustomSliderStyle = document.createElement("link")
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.min.css"
    scriptCustomSliderStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomSliderStyle)

    let scriptCustomSlider = document.createElement("script")
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/chosen/1.5.1/chosen.jquery.min.js"
    scriptCustomSlider.async = false
    document.head.appendChild(scriptCustomSlider)

    let popupStyle = /*html */ `
    <style>
        header,
.main section .desktop-view,
.main section .mobile-view {
  display: none !important;
}

.container_var {
  width: 95%;
  max-width: 1276px;
  margin: 0 auto;
}

.img_wrap {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img_wrap img {
  width: 100%;
  height: 100%;
}

.btn_continue {
  background: #193973;
  border-radius: 10px;
  margin: 0 0 0 auto;
  max-width: 304px;
  width: 100%;
  height: 45px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff !important;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  text-transform: none;
}

/*join_text */
.join_text {
  background: #193973;
  padding: 20px 10px;
  text-align: center;
}

.join_text p {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #ffffff !important;
}

/*enroll_box */
.enroll_box .container_var {
  padding: 24px 0 90px;
}

.enroll_box .img_wrap {
  max-width: 450px;
  text-align: left;
}

.enroll_box .info_box {
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  gap: 127px;
}

.enroll_box .info_box > div:first-child > div {
  max-width: 360px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #193973;
  border-radius: 10px;
  padding: 6px 10px;
}

.enroll_box .info_box > div:first-child > div span {
  font-weight: 400;
  font-size: 16px;
  line-height: 188%;
  color: #193973;
  margin-left: 16px;
  text-align: left;
}

.enroll_box .info_box > div:first-child > h1 {
  margin: 40px 0 24px;
  font-weight: 800;
  font-size: 32px;
  line-height: 138%;
  color: #193973;
  text-align: left;
}

.enroll_box .info_box > div:first-child > h1 span {
  color: #6fb3fa;
}

.enroll_box .info_box > div:first-child > p {
  margin: 0 0 40px;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #757e93 !important;
  text-align: left;
}

.enroll_box .info_box > div:first-child > p b {
  color: #193973;
  font-weight: 600;
}

.enroll_box .info_box > div:first-child > ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 50px;
  gap: 14px;
}

.enroll_box .info_box > div:first-child > ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.enroll_box .info_box > div:first-child > ul li span {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080;
  text-align: left;
  margin-left: 16px;
}

.enroll_box .info_box > div:first-child > a {
  background: #193973;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 431px;
  height: 80px;
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  line-height: 250%;
  outline: none;
  border: none;
}

.enroll_box .info_box > div:first-child > a:hover {
  box-shadow: 5px 5px 10px #272020;
}

.enroll_box .info_box > div.img_wrap {
  max-width: 413px;
}

/*dog_list */
.dog_list {
  background: #e8f1f9;
}

.dog_list .container_var {
  padding: 48px 0 92px;
}

.dog_list h2 {
  font-weight: 600 !important;
  font-size: 32px !important;
  line-height: 94% !important;
  text-align: center;
  color: #193973 !important;
  margin-bottom: 65px !important;
}

.dog_list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  padding: 0;
}

.dog_list ul li {
  width: 23%;
  position: relative;
  border-radius: 10px;
  transition: all 350ms ease-in-out;
}

.dog_list ul li:hover {
  box-shadow: 10px 4px 15px 1px rgb(39 32 32 / 50%);
}

.dog_list ul li a {
  width: 100%;
  height: 100%;
  display: block;
}

.dog_list ul li a img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.dog_list ul li a span {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #f2f6ff;
}

@media (max-width: 1286px) {
  .dog_list ul li {
    width: 22%;
  }

  .dog_list ul li a span {
    font-size: 15px;
  }
}

@media (max-width: 1050px) {
  .dog_list ul li a span {
    font-size: 12px;
  }
}

/*popup_first */
.popup_new {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  max-width: 1358px;
  width: 90%;
  margin: 0 auto;
}

.popup_new .img_wrap {
  max-width: 440px;
  width: 40%;
}

.popup_new .img_wrap img {
  border-radius: 10px;
}

.popup_new > div:last-child {
  width: 70%;
}

.popup_new > div:last-child .popup_first {
  display: none;
}

.popup_new > div:last-child .popup_first > h2 {
  font-weight: 700;
  font-size: 22px;
  line-height: 182%;
  text-align: center;
  color: #734f22;
  margin: 10px 0 12px;
}

.popup_new > div:last-child .popup_first > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  color: #808080 !important;
  margin: 0 0 30px;
}

.popup_new > div:last-child .progress_bar > ul {
  display: flex;
  background: #d1deee;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  padding: 0;
  margin: 0 0 10px;
  border-radius: 10px;
}

.popup_new > div:last-child .progress_bar > ul li {
  width: 33.2%;
}

.popup_new > div:last-child .progress_bar > ul li.active_step {
  background: #193973;
}

.popup_new > div:last-child .progress_bar > ul li:nth-child(1) {
  border-radius: 10px 0px 0px 10px;
}

.popup_new > div:last-child .progress_bar > ul li:nth-child(2) {
  border-radius: 0px;
}

.popup_new > div:last-child .progress_bar > ul li:nth-child(3) {
  border-radius: 0px 10px 10px 0px;
}

.popup_new > div:last-child .progress_bar > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup_new > div:last-child .progress_bar > div p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080 !important;
  margin: 0;
  display: flex;
  align-items: center;
}

.popup_new > div:last-child .progress_bar > div p.active_btn_second{
    display: none;
}

.popup_new > div:last-child .progress_bar > div p:nth-child(2),
.popup_new > div:last-child .progress_bar > div p:nth-child(1) {
  cursor: pointer;
}

.popup_new > div:last-child .progress_bar > div p:nth-child(1) span {
  display: none;
}

.popup_new > div:last-child .progress_bar > div p:nth-child(2) span{
    margin-left: 10px;
}

.first_block_checkbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  margin: 0 auto 50px;
  max-width: 628px;
}

.first_block_checkbox input.custom_checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.first_block_checkbox label {
  width: 48%;
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  padding: 10px 22px;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #193973;
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.custom_checkbox + label::before {
  content: "";
  display: inline-block;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #808080;
  border-radius: 2px;
  margin-right: 15px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom_checkbox:checked + label::before {
  background-image: url(https://conversionratestore.github.io/projects/knineti/img/dark_blue_check_mark.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-color: #193973;
}

/*popup_second */
.popup_new > div:last-child .popup_second,
.popup_new > div:last-child .popup_third_box {
  display: none;
}

.popup_new > div:last-child .popup_second > h2,
.popup_new > div:last-child .popup_third_box > h2 {
  font-weight: 700;
  font-size: 24px;
  line-height: 125%;
  text-align: center;
  color: #734f22;
  margin: 40px 0 56px;
}

.popup_new > div:last-child .popup_second ul {
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 0;
  margin: 0 0 77px;
}

.popup_new > div:last-child .popup_second ul li {
  width: 100%;
}

.popup_new > div:last-child .popup_second ul li .radio_box {
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}

.popup_new > div:last-child .popup_second ul li label {
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  max-height: 78px;
  padding: 10px 18px;
  margin: 0;
  cursor: pointer;
  text-align: left;
}

.popup_new > div:last-child .popup_second ul li label span:nth-child(2) {
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #193973;
  margin-bottom: 8px;
}

.popup_new > div:last-child .popup_second ul li label span:nth-child(3) {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080;
}

.popup_new > div:last-child .popup_second ul li .radio_box:checked + label {
  border: 3px solid #193973;
}

.popup_new > div:last-child .popup_first.active_popup,
.popup_new > div:last-child .popup_second.active_popup,
.popup_new > div:last-child .popup_third_box.active_popup {
  display: block;
}

.dog_second,
.dog_third {
  display: none;
}

/*choosen */
.popup_new .chosen-container .chosen-drop {
  max-height: 240px;
}

.chosen-container .chosen-results li {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #193973;
}

.chosen-container .chosen-results li em {
  font-weight: 700;
  text-decoration: unset;
}

/* */

.fade.in {
    background-color: #FFFFFF;
}

.vis-ver-0_0.modal-header.modal-header-style.modal-of-header.style-border.modal-header1,
.for-spacing,
#openModal .modal-header.modal-header-style.modal-of-header.style-border,
#openModal .row-md-12.style-of-row-free-workshop > div:first-child {
  display: none !important;
}

.border-of-modal .modal-header {
  border: unset !important;
}

#steptwoadult,
#steppuppies,
.yesno,
#puppyContent > p:last-child,
#adultContent > p:last-child,
#subs-email2,
#subs-mobile2 {
  display: none;
}

#openModal .form-group {
  background: white;
}

.border-of-modal .vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1 {
  display: none;
}

.popup_third,
.active_btn_fourth {
  display: none;
}

#openModal .popup_third {
  display: block;
}


.border-of-modal {
  margin: 0;
}

.modal-dialog {
  width: 95% !important;
  margin: 10px auto;
}

.modal-dialog > .img_wrap{
    max-width: 200px;
    margin-bottom: 10px;
}

#openModal .modal-content {
  background: unset !important;
  border-radius: 10px;
  background-color: unset !important;
  box-shadow: unset !important;
  border: unset !important;
  max-height: unset !important;
  max-width: unset !important;
}

.modal-body {
    display: none;
    background: unset !important;
    padding: 0 15px;
    border: 2px solid #E8F1F9;
    border-radius: 10px;
    max-width: 75vh;
    margin: 0 auto;
}

.header_popup {
  background: #193973;
  border-radius: 0px;
  padding: 22px 0;
  text-align: center;
  position: relative;
}

.header_popup > p {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #ffffff !important;
}

.body_popup {
  background: #ffffff;
  padding: 25px 56px 28px;
}

.body_popup > h2 {
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 30px !important;
  text-align: center;
  color: #193973 !important;
  margin-bottom: 24px !important;
}

.button_input_name,
#contact-submit {
  background: #193973;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 304px;
  width: 100%;
  height: 45px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff !important;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  text-transform: none;
}

#contact-submit {
  margin: 0 !important;
}

.button_input_name {
  margin: 65px auto 0;
}

.button_input_name:focus,
#contact-submit:focus {
  box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}

#finalForm .style-text,
form .form-group > div:last-child,
form .form-group img,
.fst_icon.fa-user:before,
.fa-envelope:before,
#subs-email,
#subs-mobile,
#contact-submit,
.benefits,
.popup_adress {
  display: none;
}

#subs-email,
#subs-mobile,
#contact-submit,
#subs-email2,
#subs-mobile2 {
  max-width: 331px;
  width: 100% !important;
  margin: 0 auto 16px !important;
}

.fa {
  display: none !important;
}

form span.top-levels {
  right: 226px !important;
}

form span.top-levels#subs-email2-top-levels,
form span.top-levels#subs-mobile2-top-levels,
form span.top-levels#subs-email-top-levels,
form span.top-levels#subs-mobile-top-levels {
  right: 211px !important;
}

@media (max-width: 939px) {
  form span.top-levels {
    right: 203px !important;
  }
}

@media only screen and (min-width: 896px) and (max-width: 920px) {
  form span.top-levels {
    right: 203px !important;
  }
}

@media only screen and (min-width: 947px) and (max-width: 981px) {
  form span.top-levels#subs-email2-top-levels,
  form span.top-levels#subs-mobile2-top-levels,
  form span.top-levels#subs-email-top-levels,
  form span.top-levels#subs-mobile-top-levels {
    right: 203px !important;
  }
}

@media only screen and (min-width: 932px) and (max-width: 946px) {
  form span.top-levels#subs-email2-top-levels,
  form span.top-levels#subs-mobile2-top-levels,
  form span.top-levels#subs-email-top-levels,
  form span.top-levels#subs-mobile-top-levels {
    right: 190px !important;
  }
}

@media only screen and (min-width: 870px) and (max-width: 931px) {
  form span.top-levels#subs-email2-top-levels,
  form span.top-levels#subs-mobile2-top-levels,
  form span.top-levels#subs-email-top-levels,
  form span.top-levels#subs-mobile-top-levels {
    right: 182px !important;
  }
}

@media only screen and (min-width: 858px) and (max-width: 895px) {
  form span.top-levels {
    right: 187px !important;
  }
}

@media only screen and (min-width: 821px) and (max-width: 857px) {
  form span.top-levels {
    right: 175px !important;
  }
}

@media only screen and (min-width: 795px) and (max-width: 821px) {
  form span.top-levels {
    right: 160px !important;
  }
}

#finalForm {
  display: block;
  background: #ffffff;
  border-radius: 10px;
}

.form-group {
  margin: 0;
  padding: 0 0 24px;
}

#finalForm .popup_third .body_popup > h2 {
  margin: 0 auto !important;
}

#finalForm .popup_third .body_popup {
  padding: 28px 164px 0;
  margin-bottom: 56px;
}

.form-control {
  width: 100% !important;
  margin: 0 auto 16px !important;
  padding: 10px 18px;
  border: 1px solid #dee8f1;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  text-align: left;
  color: #a0a1a8 !important;
  max-width: 304px;
  box-shadow: none;
}

.benefits ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 15px auto 15px 195px;
  gap: 10px;
  max-width: 415px;
}

.benefits ul li {
  display: flex;
  align-items: center;
}

.benefits ul li > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080 !important;
  margin: 0 0 0 16px;
  text-align: left;
}

.security_box {
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 440px;
  justify-content: center;
}

.security_box > svg {
  margin-top: 5px;
}

.security_box > p {
  font-weight: 400;
  font-size: 12px;
  line-height: 167%;
  color: #9da1aa !important;
  text-align: left;
  margin: 0 0 0 14px;
}

#subs-name,
#dog-name,
#subs-name2,
#dog-name2 {
  display: flex;
}

.popup_adress .header_popup {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.popup_adress .header_popup > p {
  margin-left: 10px;
}

#finalForm .popup_third .popup_adress .body_popup {
  padding: 24px 0 0;
  margin-bottom: 16px;
}

.popup_adress .body_popup > p {
  margin: 0 auto 15px;
  padding: 10px;
  border: 1px solid #6fb3fa;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  max-width: 560px;
  color: #808080 !important;
}

#finalForm .popup_third .popup_adress .body_popup > h2 {
  max-width: 560px;
}

button.close {
  display: block;
  position: absolute;
  top: 13px;
  right: 18px;
  color: black;
  opacity: 1;
  text-shadow: unset;
}

.close:hover,
.close:focus {
  color: #a0a1a8;
  opacity: 1;
}

.input_error_text {
  font-size: 10px;
  line-height: 20px;
  color: #f15050;
  margin: -12px auto 10px;
  display: none;
  max-width: 304px;
  text-align: left;
}

.popup_adress .body_popup > h2 {
  margin-bottom: 0px !important;
}

form .text_for_work_shop {
  font-weight: 400;
  font-size: 12px !important;
  line-height: 20px;
  text-align: center;
  color: #808080 !important;
  margin-bottom: 23px !important;
  display: none;
}


    </style>
    `
    let newBlock = /*html */ `
    <section class="new_block">
        <div class="join_text">
            <p>Join free online workshop </p>
        </div>
        <div class="enroll_box">
            <div class="container_var">
                <div class="img_wrap">
                    <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                </div>
                <div class="info_box">
                    <div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/knineti/img/medal.svg" alt="medal">
                            <span>First workshop from service dog trainer </span>
                        </div>
                        <h1>Learn how to train your dog to be as <br> <span>obedient</span> as a service dog</h1>
                        <p>Take 1-minute quiz about your dog to access <b>free online workshop</b> and learn how to deal with barking, housebreaking, nipping and other unwanted behavior</p>
                        <ul>
                            <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bi_play-circle-fill.svg" alt="play circle">
                                <span>Workshop durarion: 56 minutes</span>
                            </li>
                             <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bx_time-five.svg" alt="time five">
                                <span>Starts immediately</span>
                            </li>
                            <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bi_person-fill.svg" alt="person">
                                <span>Viewed by 500,000 dog owners</span>
                            </li>
                        </ul>
                        <a href="#">Enroll to free online workshop</a>
                    </div>
                    <div class="img_wrap">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/enroll_box_dog.jpg" alt="dog">
                    </div>                
                </div>
            </div>
        </div>

        <div class="dog_list">
            <div class="container_var">
                <h2>Choose the behavior you want to address</h2>
                <ul></ul>
            </div>
        </div>

    </section>
    `

    let arrayDog = {
      "Reactivity to the other dogs": ["https://conversionratestore.github.io/projects/knineti/img/dog_list12.jpg"],
      "Anxiety ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list11.jpg"],
      "Aggression ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list10.jpg"],
      "Extremely excited": ["https://conversionratestore.github.io/projects/knineti/img/dog_list9.jpg"],
      "Chewing ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list8.jpg"],
      "Don’t listen": ["https://conversionratestore.github.io/projects/knineti/img/dog_list7.jpg"],
      "Don’t come when you call": ["https://conversionratestore.github.io/projects/knineti/img/dog_list6.jpg"],
      "Nipping or Biting": ["https://conversionratestore.github.io/projects/knineti/img/dog_list5.jpg"],
      "Housebreaking ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list4.jpg"],
      "Pulling the leash": ["https://conversionratestore.github.io/projects/knineti/img/dog_list3.jpg"],
      "Jumping ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list2.jpg"],
      "Barking ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list1.jpg"],
    }

    let arrayBreedDog = [
      "Affenpinscher",
      "Afghan Hound",
      "Airedale Terrier",
      "Akbash",
      "Akita",
      "Alaskan Husky",
      "Alaskan Klee Kai",
      "Alaskan Malamute",
      "American BullDog",
      "American Eskimo",
      "American Foxhound",
      "Mexican Hairless Terrier",
      "American Hairless Terrier",
      "American Pit Bull Terrier",
      "American Staffordshire Terrier",
      "Anatolian Shepherd",
      "Argentine Dogo",
      "Armant",
      "Australian Cattle Dog",
      "Australian Kelpie",
      "Australian Shepherd",
      "Australian Terrier",
      "Barbet",
      "Basenji",
      "Basset Griffon",
      "Basset Hound",
      "Beagle",
      "Bearded Collie",
      "Beauceron",
      "Bedlington Terrier",
      "Belgian Sheepdog",
      "Belgian Tervuren",
      "Bergamasco",
      "Berger Picard",
      "Berger Pyrenees",
      "Bernese Mountain Dog",
      "Bichon Frise",
      "Biewer",
      "Redbone Coonhound",
      "Black and Tan Coonhound",
      "Black Russian Terrier",
      "Bloodhound",
      "Blue Heeler",
      "Boerboel",
      "Border Collie",
      "Border Terrier",
      "Borzoi",
      "Boston Terrier",
      "Boxer",
      "Boykin Spaniel",
      "Brandlbracke",
      "Briard",
      "Briquet",
      "Brittany Dog",
      "Brussels Griffon",
      "Bull Mastiff",
      "Staffordshire Bull Terrier",
      "Bull Terrier",
      "Cairn Terrier",
      "Canaan Dog",
      "Cane Corso",
      "Cardigan Welsh Corgi",
      "Carolina Dog",
      "Catahoula",
      "Caucasian Mountain Dog",
      "Cavalier King Charles Spaniel",
      "Chesapeake Bay Retriever",
      "Chihuahua",
      "Chinese Crested",
      "Chinese Shar-Pei",
      "Chow Chow",
      "Clumber Spaniel",
      "English Cocker Spaniel",
      "Cocker Spaniel",
      "Coton De Tulear",
      "Curly-Coated Retriever",
      "Dachshund",
      "Dalmatian",
      "Dingo",
      "Doberman Pinscher",
      "Drever",
      "Dutch Shepherd",
      "French BullDog",
      "Olde English BullDogge",
      "English BullDog",
      "English Foxhound",
      "English Setter",
      "English Springer Spaniel",
      "English Toy Spaniel",
      "Entlebucher",
      "Eurasier",
      "Field Spaniel",
      "Finnish Spitz",
      "Flat-Coated Retriever",
      "German Pinscher",
      "German Shepherd",
      "German Shorthaired Pointer",
      "German Spitz",
      "German Wirehaired Pointer",
      "Giant Schnauzer",
      "Glen of Imaal Terrier",
      "Golden Retriever",
      "Gordon Setter",
      "Great Dane",
      "Greater Swiss Mountain Dog",
      "Italian Greyhound",
      "Greyhound",
      "Havanese",
      "Hovawart",
      "Ibizan Hound",
      "Irish Setter",
      "Irish Terrier",
      "Irish Water Spaniel",
      "Irish Wolfhound",
      "Italian Spinone",
      "Parson Russell Terrier",
      "Jack Russell Terrier",
      "Japanese Chin",
      "Japanese Spitz",
      "Jindo",
      "Keeshond",
      "Kerry Blue Terrier",
      "King Shepherd",
      "Komondor",
      "Kuvasz",
      "Labrador Retriever",
      "Lakeland Terrier",
      "Landseer",
      "Lapphund",
      "Leonberger",
      "Lhasa Apso",
      "Lowchen",
      "Malinois",
      "Maltese",
      "Manchester Terrier",
      "Neapolitan Mastiff",
      "Tibetan Mastiff",
      "Mastiff",
      "Miniature Pinscher",
      "Miniature Schnauzer",
      "Mountain Cur",
      "Mudi",
      "Munsterlander",
      "Newfoundland",
      "Norfolk Terrier",
      "Norwegian Elkhound",
      "Norwich Terrier",
      "Nova Scotia Duck Tolling Retriever",
      "Old English Sheepdog",
      "Otterhound",
      "Papillon",
      "Patterdale Terrier",
      "Pekingese",
      "Pembroke Welsh Corgi",
      "Pharaoh Hound",
      "Pit Bull",
      "Plott Hound",
      "Pudelpointer",
      "Pointer",
      "Pomeranian",
      "Toy Poodle",
      "Poodle",
      "Portuguese Water Dog",
      "Presa Canario",
      "Pug",
      "Puli",
      "Pumi",
      "Rat Terrier",
      "Thai Ridgeback",
      "Rhodesian Ridgeback",
      "Rottweiler",
      "Saint Bernard",
      "Saluki",
      "Samoyed",
      "Schipperke",
      "Scottish Terrier",
      "Shetland Sheepdog",
      "Shiba Inu",
      "Shih Tzu",
      "Shiloh Shepherd",
      "Siberian Husky",
      "Skye Terrier",
      "Smooth Fox Terrier",
      "Smoushond",
      "Soft Coated Wheaten Terrier",
      "Spanish Water Dog",
      "Tasy",
      "Tibetan Spaniel",
      "Tibetan Terrier",
      "Tosa Inu",
      "Vizsla",
      "Weimaraner",
      "Welsh Springer Spaniel",
      "Welsh Terrier",
      "West Highland White Terrier",
      "Whippet",
      "White German Shepherd",
      "Wire Fox Terrier",
      "Wolfdog",
      "Yorkshire Terrier",
    ]

    let popupNew = /*html*/ `
    <div class="popup_new">
        <div class="img_wrap">
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog_select_problem.jpg" alt="dog" class="dog_first">
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog_age_block.jpg" alt="dog" class="dog_second">
            <img src="https://conversionratestore.github.io/projects/knineti/img/dog_breed_block.jpg" alt="dog" class="dog_third">
        </div>

        <div>
            <div class="progress_bar">
                <ul>
                    <li class="active_step"></li>
                    <li></li>
                    <li></li>
                </ul>
                <div>
                   <p class="active_btn_first" class="close" id="closestepthree" data-dismiss="modal" style="display: block;" data-original-title="" title="">
                       <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                   </p>
                    <p class="active_btn_second">
                       <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                       <span>Previous</span>
                   </p>
                   <p><span>1</span>/<span>3</span></p>
                </div>
            </div>

            <div class="popup_first active_popup">
                <h2>What unwanted behavior you want to address?</h2>
                <p>Select all problems you’ve experienced in the last 2 months</p>
                <div class="first_block_checkbox">
                    <input class="custom_checkbox" id="barking" type="checkbox" name="barking" value="barking">
                    <label for="barking">Barking
                    </label>
    
                    <input class="custom_checkbox" id="jumping" type="checkbox" name="jumping" value="jumping">
                    <label for="jumping">Jumping
                    </label>
    
                    <input class="custom_checkbox" id="pulling" type="checkbox" name="pulling" value="pulling">
                    <label for="pulling">Pulling on leash
                    </label>
    
                    <input class="custom_checkbox" id="housebreaking" type="checkbox" name="housebreaking" value="housebreaking">
                    <label for="housebreaking">Housebreaking
                    </label>
    
                    <input class="custom_checkbox" id="nipping" type="checkbox" name="nipping" value="nipping">
                    <label for="nipping">Nipping or biting
                    </label>
    
                    <input class="custom_checkbox" id="called" type="checkbox" name="called" value="called">
                    <label for="called">Don’t come when you call
                    </label>
    
                    <input class="custom_checkbox" id="listen" type="checkbox" name="listen" value="listen">
                    <label for="listen">Doesn't listen</label>
    
                    <input class="custom_checkbox" id="chewing" type="checkbox" name="chewing" value="chewing">
                    <label for="chewing">Chewing</label>
    
                    <input class="custom_checkbox" id="excitable" type="checkbox" name="excitable" value="excitable">
                    <label for="excitable">Extremely excitable</label>
    
                    <input class="custom_checkbox" id="aggression" type="checkbox" name="aggression" value="aggression">
                    <label for="aggression">Aggression</label>
    
                    <input class="custom_checkbox" id="anxiety" type="checkbox" name="anxiety" value="anxiety">
                    <label for="anxiety">Anxiety</label>
    
                    <input class="custom_checkbox" type="checkbox" id="reacting" name="reacting" value="reacting">
                    <label for="reacting">Reacting to other dogs</label>
    
                    <input class="custom_checkbox" type="checkbox" id="other" name="other" value="other">
                    <label for="other">Other</label>
                </div>
                <div class="btn_continue">Continue</div>
            </div>


            <div class="popup_second">
                <h2>What’s your dog’s age?</h2>
                <ul>
                    <li>
                        <input class="radio_box" name="ageDog" id="puppy" type="radio">
                        <label for="puppy">
                            <span class="radio_style"></span>
                            <span>Puppy</span>
                            <span>Up to 12 months</span>
                        </label>
                    </li>
                    <li>
                        <input class="radio_box" name="ageDog" id="adult" type="radio">
                        <label for="adult">
                            <span class="radio_style"></span>
                            <span>Adult</span>
                            <span>From 1 to 7 years</span>
                        </label>
                    </li>
                    <li>
                        <input class="radio_box" name="ageDog" id="senior" type="radio">
                        <label for="senior">
                            <span class="radio_style"></span>
                            <span>Older Adult/Senior</span>
                            <span>More than 7 years</span>
                        </label>
                    </li>
                </ul>
                <div class="btn_continue">Continue</div>
            </div> 

            <div class="popup_third_box">
                <h2>
                    What breed is your dog?
                </h2>

                        <select data-placeholder="Enter your dog’s breed" multiple class="chosen-select">
                            <option value=""></option>
                        </select>
                

                <div class="btn_continue">Continue</div>
            </div>

        </div>
    </div>
   
    `

    let buttonInputName = /*html*/ `
        <div class="button_input_name" tabindex="0">Continue</div>
        <div class="benefits">
            <ul>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.25 24.5C5.25 24.5 3.5 24.5 3.5 22.75C3.5 21 5.25 15.75 14 15.75C22.75 15.75 24.5 21 24.5 22.75C24.5 24.5 22.75 24.5 22.75 24.5H5.25ZM14 14C15.3924 14 16.7277 13.4469 17.7123 12.4623C18.6969 11.4777 19.25 10.1424 19.25 8.75C19.25 7.35761 18.6969 6.02226 17.7123 5.03769C16.7277 4.05312 15.3924 3.5 14 3.5C12.6076 3.5 11.2723 4.05312 10.2877 5.03769C9.30312 6.02226 8.75 7.35761 8.75 8.75C8.75 10.1424 9.30312 11.4777 10.2877 12.4623C11.2723 13.4469 12.6076 14 14 14Z" fill="#699CD0"/>
                    </svg>
                    <p>This workshop has helped train 2.7 million dogs</p>
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9997 2.3335C7.56667 2.3335 2.33301 7.56716 2.33301 14.0002C2.33301 20.4332 7.56667 25.6668 13.9997 25.6668C20.4327 25.6668 25.6663 20.4332 25.6663 14.0002C25.6663 7.56716 20.4327 2.3335 13.9997 2.3335ZM13.9997 23.3335C8.85351 23.3335 4.66634 19.1463 4.66634 14.0002C4.66634 8.854 8.85351 4.66683 13.9997 4.66683C19.1458 4.66683 23.333 8.854 23.333 14.0002C23.333 19.1463 19.1458 23.3335 13.9997 23.3335Z" fill="#699CD0"/>
                        <path d="M15.1663 8.1665H12.833V14.4828L16.6748 18.3247L18.3245 16.675L15.1663 13.5168V8.1665Z" fill="#699CD0"/>
                    </svg>
                    <p>Watch on demand at your convenience</p>
                </li>
                <li>
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.75C7.23516 1.75 1.75 7.23516 1.75 14C1.75 20.7648 7.23516 26.25 14 26.25C20.7648 26.25 26.25 20.7648 26.25 14C26.25 7.23516 20.7648 1.75 14 1.75ZM17.9402 14.1887L11.9684 18.5336C11.9356 18.5571 11.897 18.5712 11.8568 18.5742C11.8166 18.5772 11.7764 18.5691 11.7405 18.5507C11.7046 18.5324 11.6745 18.5044 11.6534 18.4701C11.6323 18.4357 11.6212 18.3962 11.6211 18.3559V9.67148C11.621 9.63109 11.632 9.59144 11.653 9.55695C11.6741 9.52245 11.7042 9.49444 11.7402 9.47604C11.7761 9.45763 11.8165 9.44955 11.8568 9.45267C11.897 9.4558 11.9357 9.47002 11.9684 9.49375L17.9402 13.8359C17.9684 13.8559 17.9915 13.8823 18.0073 13.913C18.0232 13.9437 18.0315 13.9777 18.0315 14.0123C18.0315 14.0469 18.0232 14.0809 18.0073 14.1116C17.9915 14.1423 17.9684 14.1687 17.9402 14.1887Z" fill="#699CD0"/>
                    </svg>
                    <p>Workshop duration: 56 minutes</p>
                </li>
            </ul>
    
            <div class="security_box">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83801 1.59C4.88559 1.85248 3.93965 2.1379 3.00101 2.446C2.91529 2.47376 2.8391 2.52504 2.78111 2.59399C2.72312 2.66295 2.68567 2.7468 2.67301 2.836C2.11901 6.993 3.39901 10.026 4.92601 12.024C5.57252 12.8784 6.34341 13.6311 7.21301 14.257C7.55901 14.501 7.86501 14.677 8.10601 14.79C8.22601 14.847 8.32401 14.885 8.39901 14.908C8.43181 14.9195 8.46562 14.9279 8.50001 14.933C8.53398 14.9275 8.56743 14.9191 8.60001 14.908C8.67601 14.885 8.77401 14.847 8.89401 14.79C9.13401 14.677 9.44101 14.5 9.78701 14.257C10.6566 13.6311 11.4275 12.8784 12.074 12.024C13.601 10.027 14.881 6.993 14.327 2.836C14.3145 2.74676 14.277 2.66285 14.219 2.59388C14.161 2.52491 14.0848 2.47366 13.999 2.446C13.348 2.233 12.249 1.886 11.162 1.591C10.052 1.29 9.03101 1.067 8.50001 1.067C7.97001 1.067 6.94801 1.29 5.83801 1.591V1.59ZM5.57201 0.56C6.65701 0.265 7.81001 0 8.50001 0C9.19001 0 10.343 0.265 11.428 0.56C12.538 0.86 13.657 1.215 14.315 1.43C14.5901 1.52085 14.834 1.68747 15.0187 1.9107C15.2034 2.13394 15.3213 2.40474 15.359 2.692C15.955 7.169 14.572 10.487 12.894 12.682C12.1824 13.621 11.334 14.4479 10.377 15.135C10.0461 15.3728 9.69549 15.5819 9.32901 15.76C9.04901 15.892 8.74801 16 8.50001 16C8.25201 16 7.95201 15.892 7.67101 15.76C7.30452 15.5819 6.95391 15.3728 6.62301 15.135C5.66603 14.4478 4.81759 13.621 4.10601 12.682C2.42801 10.487 1.04501 7.169 1.64101 2.692C1.67869 2.40474 1.79665 2.13394 1.98132 1.9107C2.166 1.68747 2.4099 1.52085 2.68501 1.43C3.6402 1.11681 4.60281 0.826725 5.57201 0.56Z" fill="#9DA1AA"/>
                    <path d="M10 6.49995C10.0002 6.81027 9.90407 7.11301 9.72497 7.36644C9.54587 7.61986 9.29258 7.8115 9 7.91495L9.385 9.90495C9.39901 9.97732 9.39684 10.0519 9.37864 10.1233C9.36045 10.1948 9.32668 10.2613 9.27976 10.3182C9.23283 10.375 9.17392 10.4208 9.10723 10.4523C9.04054 10.4837 8.96772 10.5 8.894 10.4999H8.106C8.03236 10.4998 7.95966 10.4834 7.8931 10.4519C7.82653 10.4204 7.76774 10.3746 7.72093 10.3178C7.67412 10.261 7.64044 10.1945 7.6223 10.1231C7.60416 10.0517 7.60201 9.97724 7.616 9.90495L8 7.91495C7.74076 7.82329 7.5117 7.66214 7.33786 7.44911C7.16401 7.23608 7.05206 6.97936 7.01425 6.70701C6.97644 6.43465 7.01422 6.15715 7.12345 5.90481C7.23269 5.65248 7.40919 5.43502 7.63365 5.27621C7.85812 5.1174 8.12192 5.02335 8.39623 5.00433C8.67053 4.9853 8.94479 5.04205 9.18903 5.16835C9.43327 5.29466 9.63809 5.48567 9.78111 5.72051C9.92414 5.95535 9.99986 6.22498 10 6.49995Z" fill="#9DA1AA"/>
                </svg>
                <p>Your email address and mobile number won't be shared with anyone. <br> Please review our privacy policy for more information.</p>
            </div>
        </div>
    `

    let popup_third = /*html*/ `
    <div class="popup_third">       
        <div class="popup_name">
            <button type="button" class="close" id="closestepthree" data-dismiss="modal" style="display: block;" data-original-title="" title="">
                <spam class="btn_space" data-original-title="" title="">×</spam>
            </button>
            <div class="body_popup">
                <h2>How should we address you and your <br> dog?</h2>
            </div>
        </div>
    
        <div class="popup_adress">
            <button type="button" class="close" id="closestepthree" data-dismiss="modal" style="display: block;" data-original-title="" title="">
                <spam class="btn_space" data-original-title="" title="">×</spam>
            </button>
            <div class="body_popup">
                <p>The workshop will be conducted by Dr. Alexa Diaz, PhD (one of the foremost service dog trainers in the U.S.) and Eric Presnall (host of the Animal Planet TV show "Who Let the Dogs Out").</p>
                <h2>Enter your email and mobile number to access this FREE online workshop now</h2>
            </div>
        </div>
    </div>
    `

    let textForWorkShop = /*html */ `
    <p class="text_for_work_shop">We’ll email and text you the link for the workshop and tips to train your dog.</p>
    `

    document.head.insertAdjacentHTML("beforeend", popupStyle)
    document.querySelector(".want-to-obey").insertAdjacentHTML("beforebegin", newBlock)

    function setListDog(title, photo) {
      return `  <li>
                    <a href="#">
                        <img src="${photo}" alt="${title}">
                        <span>${title}</span>
                    </a>
                </li>`
    }

    function setListBreedDog(title) {
      return `  <option value="${title}">${title}</option>`
    }

    for (let key in arrayDog) {
      document.querySelector(".dog_list ul").insertAdjacentHTML("afterbegin", setListDog(key, arrayDog[key][0]))
    }

    //   click on btn
    document.querySelector(".enroll_box .info_box > div:first-child > a").addEventListener("click", function (e) {
      e.preventDefault()

      document.querySelector(".desktop-view .button-header a.button-blue-large:link").click()
    })

    //
    let slickInterval = setInterval(() => {
      if (typeof jQuery(".chosen-select").chosen === "function" && document.querySelector(".chosen-select")) {
        clearInterval(slickInterval)

        $(document).ready(function () {
          $(".chosen-select").chosen({
            //   max_selected_options: 1,
            no_results_text: "Oops, nothing found!",
            width: "55%",
          })
        })
      }
    }, 100)

    //       // #openModal
    // document.querySelectorAll('#openModal') -> click on btn popup
    let a = setInterval(() => {
      if (document.querySelector("#openModal .modal-content.modal-of-content.popup-first-body.landscape-popup-width")) {
        clearInterval(a)
        if (document.querySelector(".modal.in .modal-dialog")) {
          document.querySelector(".modal.in .modal-dialog").insertAdjacentHTML(
            "afterbegin",
            `     <div class="img_wrap">
                          <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                      </div>`
          )

          document.querySelector(".modal.in .modal-dialog > .img_wrap").insertAdjacentHTML(
            "afterend",
            `        <p class="active_btn_fourth">
            <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
            <span>Previous</span>
        </p>`
          )
        }

        document.querySelector("#openModal .border-of-modal").insertAdjacentHTML("afterbegin", popupNew)

        arrayBreedDog.forEach((el) => {
          document.querySelector(".chosen-select").insertAdjacentHTML("afterbegin", setListBreedDog(el))
        })

        //   click on first btn Continue
        document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").addEventListener("click", function (el) {
          console.log(this)
          this.closest(".popup_first").classList.remove("active_popup")

          document.querySelector(".popup_new > div:last-child .progress_bar > div p:first-child.active_btn_first").style.display = "none"
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2).active_btn_second").style.display = "flex"
          document.querySelector(".popup_new > div:last-child .popup_second").classList.add("active_popup")
          document.querySelector(".popup_new .img_wrap .dog_first").style.display = "none"
          document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
          document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)").classList.add("active_step")
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"
        })

        //   click on second btn Continue
        document.querySelector(".popup_new > div:last-child .popup_second .btn_continue").addEventListener("click", function (el) {
          console.log(this)
          this.closest(".popup_second").classList.remove("active_popup")

          document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2).active_btn_second").classList.remove("active_btn_second")
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.add("active_btn_third")
          document.querySelector(".popup_new > div:last-child .popup_third_box").classList.add("active_popup")
          document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
          document.querySelector(".popup_new .img_wrap .dog_third").style.display = "block"
          document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(3)").classList.add("active_step")
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "3"
        })

        //   click on third btn Continue
        document.querySelector(".popup_new > div:last-child .popup_third_box .btn_continue").addEventListener("click", function () {
          document.querySelector(".popup_new").style.display = "none"
          document.querySelector("#openModal .modal-body").style.display = "block"
          document.querySelector(".active_btn_fourth").style.display = "flex"
        })

        // //   btn back first
        if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)")) {
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").addEventListener("click", function (el) {
            console.log(this)
            if (this.classList.contains("active_btn_first")) {
              console.log("popup_first")
              // document.querySelector(".popup_new").style.display = "none"
            }

            //   btn back active_btn_second
            if (this.classList.contains("active_btn_second")) {
              this.style.display = "none"
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)").style.display = "flex"
              console.log("popup_second")
              document.querySelector(".popup_new > div:last-child .popup_first").classList.add("active_popup")
              document.querySelector(".popup_new > div:last-child .popup_second").classList.remove("active_popup")
              document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
              document.querySelector(".popup_new .img_wrap .dog_first").style.display = "block"
              document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)").classList.remove("active_step")
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "1"
            }

            //   btn back active_btn_third
            if (this.classList.contains("active_btn_third")) {
              console.log("popup_third_box")
              this.classList.remove("active_btn_third")
              this.classList.add("active_btn_second")
              document.querySelector(".popup_new > div:last-child .popup_third_box").classList.remove("active_popup")
              document.querySelector(".popup_new > div:last-child .popup_second").classList.add("active_popup")
              document.querySelector(".popup_new .img_wrap .dog_third").style.display = "none"
              document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
              document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(3)").classList.remove("active_step")
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"
            }
          })
        }

        //FORM
        document.querySelector("#openModal #subs-name2").placeholder = "Your name"
        document.querySelector("#openModal #dog-name2").placeholder = "Dog’s name"
        document.querySelector("#openModal #subs-email2").placeholder = "Enter your email"
        document.querySelector("#openModal #subs-mobile2").placeholder = "Enter your phone number"
        document.querySelector("#openModal #contact-submit").textContent = "Get workshop link"
        document.querySelector("#openModal #dog-name2-top-levels").textContent = "Dog’s name"
        document.querySelector("#openModal #subs-name2-top-levels").textContent = "Your name"
        document.querySelector("#openModal #subs-name2").tabIndex = "0"
        document.querySelector("#openModal #dog-name2").tabIndex = "0"
        document.querySelector("#openModal #subs-email2").tabIndex = "0"
        document.querySelector("#openModal #subs-mobile2").tabIndex = "0"
        document.querySelector("#openModal #contact-submit").tabIndex = "0"
        console.log(`#openModal`)

        document
          .querySelector(`#openModal input[name='dog_name']`)
          .insertAdjacentHTML("afterend", `<span class="input_error_text">Please enter Your Dog’s name without spaces, numbers or special characters</span>`)

        document
          .querySelector(`#openModal input[name='first_name']`)
          .insertAdjacentHTML("afterend", `<span class="input_error_text">Please enter Your name without spaces, numbers or special characters</span>`)

        document.querySelector("#openModal #contact-submit").insertAdjacentHTML("beforebegin", textForWorkShop)

        // create new element popup finalForm -> input name, email, number
        document.querySelector("#openModal .row-md-12.style-of-row-free-workshop > div:first-child").insertAdjacentHTML("afterend", popup_third)

        if (document.querySelector("#openModal form .form-group")) {
          //   value btn main submit
          document.querySelector("#openModal #contact-submit").value = "Get workshop link"

          //   document.querySelector("#openModal #contact-submit").addEventListener("click", function () {
          //     pushDataLayer("Get workshop link clicked #openModal")
          //   })

          //   create btn last continue
          document.querySelector("#openModal form .form-group > div:last-child").insertAdjacentHTML("beforebegin", buttonInputName)
        }

        if (document.querySelector("#openModal .button_input_name")) {
          document.querySelector("#openModal .button_input_name").addEventListener("click", () => {
            validationForm("#openModal")
          })
        }

        // click on button.close
        if (document.querySelector("#openModal .popup_name button.close")) {
          document.querySelector("#openModal .popup_name button.close").addEventListener("click", () => {
            document.querySelector(".popup_new").style.display = "flex"
            // pushDataLayer(`Click on Closed on step "How should we address you and your dog?" #openModal`)
          })
        }

        if (document.querySelector("#openModal .popup_adress button.close")) {
          document.querySelector("#openModal .popup_adress button.close").addEventListener("click", () => {
            document.querySelector(".popup_new").style.display = "flex"
            // pushDataLayer(`Click on Closed on step "Enter your email and mobile number to access" #openModal`)
          })
        }
      }
    }, 10)

    // validate formu
    function validationForm(parent) {
      let inputValueName = document.querySelector(`${parent} input[name='first_name']`).value.match(/^[a-zA-Z]+$/)
      let inputDogName = document.querySelector(`${parent} input[name='dog_name']`).value.match(/^[a-zA-Z]+$/)

      // first_name
      if (inputValueName === null) {
        document.querySelector(`${parent} input[name='first_name']`).classList.add("input_error")
        document.querySelector(`${parent} .input_error_text`).style.display = "block"
      } else {
        document.querySelector(`${parent} input[name='first_name']`).classList.remove("input_error")
        document.querySelector(`${parent} .input_error_text`).style.display = "none"
      }

      // dog_name
      if (inputDogName === null) {
        document.querySelector(`${parent} input[name='dog_name']`).classList.add("input_error")
        document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "block"
      } else {
        document.querySelector(`${parent} input[name='dog_name']`).classList.remove("input_error")
        document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "none"
      }

      if (document.querySelector(`${parent} input.input_error`) === null && parent === `#openModal`) {
        // pushDataLayer(`Click on Continue on step "How should we address you and your dog?"`)
        document.querySelector("#openModal .button_input_name").style.display = "none"
        document.querySelector("#openModal #subs-name2").style.display = "none"
        document.querySelector("#openModal #dog-name2").style.display = "none"
        document.querySelector("#openModal #dog-name2-top-levels").style.display = "none"
        document.querySelector("#openModal #subs-name2-top-levels").style.display = "none"

        document.querySelector("#openModal #subs-email2").style.display = "flex"
        document.querySelector("#openModal #subs-mobile2").style.display = "flex"
        document.querySelector("#openModal #contact-submit").style.display = "flex"

        document.querySelector("#openModal .text_for_work_shop").style.display = "block"
        document.querySelector("#openModal .benefits").style.display = "block"
        document.querySelector("#openModal .popup_adress").style.display = "block"
        document.querySelector("#openModal .popup_name").style.display = "none"
      }
    }
  }
}, 10)
