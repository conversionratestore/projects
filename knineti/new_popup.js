let startFunk = setInterval(() => {
  if (document.querySelector(".entry-content")) {
    clearInterval(startFunk)

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || []
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Reg pop up improvements`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Reg pop up improvements`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let popupStyle = /*html */ `
    <style>
.vis-ver-2_1.modal-header.modal-header-style.modal-of-header.style-border.modal-header1,
.vis-ver-0_0.modal-header.modal-header-style.modal-of-header.style-border.modal-header1,
.for-spacing,
#openModal .modal-header.modal-header-style.modal-of-header.style-border,
#openModal .row-md-12.style-of-row-free-workshop > div:first-child {
  display: none !important;
}

.border-of-modal .modal-header{
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

#adultContent,
#puppyContent {
  padding: 0;
  margin: 0;
  border-radius: 10px;
}

.border-of-modal .vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1 {
  display: none;
}

.popup_second {
  display: none;
}

.popup_third {
  display: none;
}

#openModal .popup_third {
  display: block;
}

.border-of-modal {
  margin: 0;
}

.modal-dialog {
  max-width: 740px;
  width: 100% !important;
}

.popup-first-body {
  max-width: 100% !important;
}

.modal-content {
  background: unset !important;
  border-radius: 10px;
  background-color: unset !important;
}

.modal-body {
  background: unset !important;

  padding: 0 15px;
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

.inform_wrap > p {
  font-weight: 600 !important;
  font-size: 16px !important;
  line-height: 20px !important;
  text-align: center;
  color: #77777d !important;
  margin-bottom: 28px !important;
}

.inform_wrap > ul {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 455px;
  width: 100%;
  gap: 18px;
}

.inform_wrap > ul li {
  width: 46%;
  display: flex;
  align-items: center;
}

.inform_wrap > ul li > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-align: start;
  color: #808080 !important;
  margin: 0 0 0 4px;
}

.btn_wrapp {
  margin-top: 46px;
}

.btn_wrapp p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080 !important;
  margin-bottom: 24px;
  text-align: center;
}

.btn_wrapp > div {
  display: flex;
  justify-content: space-between;
}

.btn_wrapp > div a {
  padding: 10px 0;
  background: #193973;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff !important;
  width: 48%;
}

.popup_second .body_popup > h2 {
  margin-bottom: 20px !important;
}

.popup_second .body_popup {
  padding: 28px 56px 24px;
}

.popup_second .body_popup > div {
  display: flex;
  flex-direction: column;
}

.first_block_checkbox,
.second_block_checkbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 18px;
}

.second_block_checkbox {
  margin: 18px 0 38px;
  display: none;
}

.popup_second .body_popup .show_more {
  margin: 58px auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.popup_second .body_popup .show_more p {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #193973 !important;
  margin: 0;
  cursor: pointer;
}

.popup_second .body_popup .btn_continue,
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

.first_block_checkbox input.custom_checkbox,
.second_block_checkbox input.custom_checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.first_block_checkbox label,
.second_block_checkbox label {
  width: 48%;
  border: 1px solid #dee8f1;
  border-radius: 10px;
  padding: 10px 40px;
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

span.top-levels,
.fa {
  display: none !important;
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
  margin: 20px auto 20px 195px;
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
  align-items: center;
  margin: 0 auto;
  max-width: 440px;
  justify-content: center;
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
  top: 50%;
  right: 18px;
  color: #f8f8ff;
  opacity: 1;
  transform: translateY(-50%);
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

    let popup_first = /*html*/ `
    <div class="popup_first">
        <div class="header_popup">
            <p>FREE ONLINE DOG TRAINING WORKSHOP</p>
        </div>
        <div class="body_popup">
            <h2>Learn how to train your dog to become as obedient as a  service dog</h2>
    
            <div class="inform_wrap">
                <p>The workshop will teach you to deal with:</p>
                <ul>
                    <li>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
                        </svg>
                        <p>Barking</p>
                    </li>
                    <li>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
    </svg>
                        <p>Jumping</p>
                    </li>
                    <li>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
    </svg>
                        <p>Pulling on leash</p>
                    </li>
                    <li>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
    </svg>
                        <p>Housebreaking</p>
                    </li>
                    <li>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
    </svg>
                        <p>Nipping/biting </p>
                    </li>
                    <li>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.945 10.2056C6.78774 10.8574 7.19208 11.8045 6.84848 12.3216C6.50486 12.8387 5.54327 12.7296 4.70066 12.078C3.85801 11.4263 3.4536 10.4792 3.79724 9.96214C4.14092 9.44518 5.10249 9.55423 5.945 10.2056Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7056 7.45716C10.8487 8.51291 11.4667 9.33664 12.0863 9.29757C12.7059 9.25851 13.0922 8.37128 12.9493 7.31568C12.8062 6.26014 12.1881 5.43633 11.5686 5.47541C10.9491 5.51454 10.5627 6.40183 10.7056 7.45716Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0041 7.31266C7.7118 8.12433 7.92411 9.12328 7.47841 9.544C7.03265 9.96453 6.09757 9.64747 5.38994 8.83587C4.68228 8.0242 4.46994 7.02522 4.9157 6.60462C5.36143 6.18398 6.29643 6.50097 7.0041 7.31266Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65813 6.93589C8.00735 7.9545 8.76617 8.63804 9.35324 8.46226C9.94044 8.28664 10.1334 7.31832 9.78428 6.29965C9.43519 5.28094 8.67624 4.59754 8.08909 4.7733C7.50194 4.94903 7.30895 5.91722 7.65813 6.93589Z" fill="#699CD0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.12404 10.7452C8.13628 11.0575 8.00993 12.1875 7.7621 12.6912C7.51431 13.195 7.24241 13.88 7.85149 14.741C8.46062 15.6022 9.5334 15.5019 10.0717 15.145C10.6102 14.7883 11.5974 14.0676 12.4151 13.7483C13.2327 13.4291 14.131 12.7947 13.8503 11.7956C13.5696 10.7965 12.7525 10.5284 12.1831 10.4374C11.6138 10.3465 10.4231 9.77891 9.97419 9.46191C9.5254 9.14507 8.05371 8.93989 8.12404 10.7452Z" fill="#699CD0"/>
    </svg>
                        <p>Not coming when called</p>
                    </li>
                </ul>
            </div>
    
            <div class="btn_wrapp">            
                <p>To get started, please indicate your dog's age:</p>
                
                <div class="">
                    <a href="">I have a puppy (up to 1 year)</a>
                    <a href="">I have an adult dog (1+ year)</a>
                </div>
            </div>
    
        </div>
    </div>
    `

    let popup_third = /*html*/ `
    <div class="popup_third">
        <div class="popup_name">
            <div class="header_popup">
                <p>FREE ONLINE DOG TRAINING WORKSHOP</p>
                <button type="button" class="close" id="closestepthree" data-dismiss="modal" style="display: block;" data-original-title="" title="">
                <spam class="btn_space" data-original-title="" title="">×</spam>
          </button>
            </div>
            <div class="body_popup">
                <h2>How should we address you and your <br> dog?</h2>
            </div>
        </div>
    
        <div class="popup_adress">
            <div class="header_popup">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0625 8.99991C20.063 7.63754 19.7183 6.29726 19.0605 5.1042C18.4028 3.91114 17.4534 2.90421 16.3011 2.17742C15.1488 1.45064 13.8311 1.0277 12.4711 0.948102C11.111 0.868501 9.75301 1.13483 8.52378 1.72223C7.29455 2.30962 6.23421 3.19893 5.44177 4.30711C4.64932 5.41529 4.15061 6.70621 3.99219 8.05934C3.83378 9.41246 4.02083 10.7837 4.53588 12.0449C5.05093 13.3062 5.87719 14.4163 6.9375 15.2718V22.4999C6.93797 22.5952 6.96223 22.6888 7.00807 22.7723C7.05392 22.8558 7.11989 22.9265 7.2 22.978C7.28258 23.0284 7.37641 23.0573 7.473 23.0622C7.56958 23.0671 7.66587 23.0479 7.75313 23.0062L12 20.878L16.2469 23.0062C16.3263 23.0426 16.4126 23.0618 16.5 23.0624C16.6058 23.0621 16.7095 23.0329 16.8 22.978C16.8801 22.9265 16.9461 22.8558 16.9919 22.7723C17.0378 22.6888 17.062 22.5952 17.0625 22.4999V15.2718C17.9993 14.5169 18.755 13.5616 19.2742 12.4763C19.7933 11.3909 20.0627 10.203 20.0625 8.99991ZM5.0625 8.99991C5.0625 7.6278 5.46938 6.2865 6.23168 5.14564C6.99398 4.00477 8.07747 3.11557 9.34513 2.59049C10.6128 2.06541 12.0077 1.92802 13.3534 2.19571C14.6992 2.46339 15.9353 3.12412 16.9056 4.09435C17.8758 5.06458 18.5365 6.30072 18.8042 7.64647C19.0719 8.99221 18.9345 10.3871 18.4094 11.6548C17.8843 12.9224 16.9951 14.0059 15.8543 14.7682C14.7134 15.5305 13.3721 15.9374 12 15.9374C10.1608 15.9349 8.39768 15.2032 7.09719 13.9027C5.79669 12.6022 5.06498 10.8391 5.0625 8.99991ZM15.9375 21.5905L12.2531 19.7437C12.1738 19.7068 12.0874 19.6877 12 19.6877C11.9126 19.6877 11.8262 19.7068 11.7469 19.7437L8.0625 21.5905V16.0312C9.26475 16.7071 10.6208 17.0622 12 17.0622C13.3792 17.0622 14.7352 16.7071 15.9375 16.0312V21.5905ZM12 14.0624C13.0013 14.0624 13.98 13.7655 14.8126 13.2092C15.6451 12.6529 16.294 11.8623 16.6771 10.9372C17.0603 10.0122 17.1606 8.99429 16.9652 8.01226C16.7699 7.03023 16.2877 6.12818 15.5797 5.42018C14.8717 4.71217 13.9697 4.23002 12.9876 4.03468C12.0056 3.83934 10.9877 3.93959 10.0627 4.32276C9.13761 4.70593 8.34696 5.35481 7.79069 6.18733C7.23441 7.01986 6.9375 7.99864 6.9375 8.99991C6.9375 10.3426 7.47087 11.6302 8.42027 12.5796C9.36967 13.529 10.6573 14.0624 12 14.0624ZM12 5.0624C12.7788 5.0624 13.54 5.29333 14.1876 5.72599C14.8351 6.15865 15.3398 6.77361 15.6378 7.49309C15.9358 8.21257 16.0138 9.00427 15.8618 9.76807C15.7099 10.5319 15.3349 11.2335 14.7842 11.7841C14.2336 12.3348 13.532 12.7098 12.7682 12.8617C12.0044 13.0137 11.2127 12.9357 10.4932 12.6377C9.7737 12.3397 9.15875 11.835 8.72609 11.1875C8.29343 10.5399 8.0625 9.77867 8.0625 8.99991C8.0625 7.95562 8.47734 6.9541 9.21577 6.21567C9.95419 5.47725 10.9557 5.0624 12 5.0624Z" fill="white"/>
                </svg>
                <p>FREE ONLINE DOG TRAINING WORKSHOP</p>
                <button type="button" class="close" id="closestepthree" data-dismiss="modal" style="display: block;" data-original-title="" title="">
                <spam class="btn_space" data-original-title="" title="">×</spam>
          </button>
            </div>
            <div class="body_popup">
                <p>The workshop will be conducted by Dr. Alexa Diaz, PhD (one of the foremost service dog trainers in the U.S.) and Eric Presnall (host of the Animal Planet TV show "Who Let the Dogs Out").</p>
                <h2>Enter your email and mobile number to access this FREE online workshop now</h2>
            </div>
        </div>
    </div>
    `

    let popup_second = /*html*/ `
    <div class="popup_second">
        <div class="header_popup">
            <p>FREE ONLINE DOG TRAINING WORKSHOP</p>
        </div>
        <div class="body_popup">
            <h2>Choose the behavior you want to <br> address</h2>
    
            <div>
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
                    <label for="called">Not coming when called
                    </label>
                </div>
                <div class="second_block_checkbox">
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
                </div>
                <div class="show_more">
                    <p>Show More</p>
                    <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 16C12.2664 16.0005 12.0399 15.9191 11.86 15.77L5.86003 10.77C5.65581 10.6003 5.52739 10.3564 5.50301 10.092C5.47863 9.82753 5.56029 9.56425 5.73003 9.36003C5.89977 9.15581 6.14368 9.02739 6.40811 9.00301C6.67253 8.97863 6.93581 9.06029 7.14003 9.23003L12.5 13.71L17.86 9.39003C17.9623 9.30697 18.08 9.24493 18.2064 9.2075C18.3327 9.17007 18.4652 9.15798 18.5962 9.17192C18.7272 9.18586 18.8542 9.22555 18.9699 9.28873C19.0855 9.3519 19.1875 9.4373 19.27 9.54003C19.3616 9.64285 19.431 9.76348 19.4738 9.89435C19.5166 10.0252 19.5319 10.1635 19.5187 10.3006C19.5056 10.4377 19.4643 10.5705 19.3974 10.6909C19.3305 10.8112 19.2395 10.9165 19.13 11L13.13 15.83C12.9449 15.9555 12.7231 16.0154 12.5 16Z" fill="#193973"/>
                    </svg>
                </div>
            </div>
            <div class="btn_continue">Continue</div>
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

    let textForWorkShop = /*html */ `
    <p class="text_for_work_shop">We’ll email and text you the link for the workshop and tips to train your dog.</p>
    `

    document.head.insertAdjacentHTML("beforeend", popupStyle)

    // #firstModal
    // document.querySelectorAll('#firstModal') -> auto popup
    if (document.querySelector("#firstModal .vis-ver-0_0.modal-header.modal-header-style.modal-of-header.style-border.modal-header1")) {
      document.querySelector("#firstModal .vis-ver-0_0.modal-header.modal-header-style.modal-of-header.style-border.modal-header1").insertAdjacentHTML("beforebegin", popup_first)

      document.querySelector("#firstModal #subs-name").placeholder = "Your name"
      document.querySelector("#firstModal #dog-name").placeholder = "Dog’s name"
      document.querySelector("#firstModal #subs-email").placeholder = "Enter your email"
      document.querySelector("#firstModal #subs-mobile").placeholder = "Enter your phone number"
      document.querySelector("#firstModal #contact-submit").textContent = "Get workshop link"
      document.querySelector("#firstModal #subs-name").tabIndex = "0"
      document.querySelector("#firstModal #dog-name").tabIndex = "0"
      document.querySelector("#firstModal #subs-email").tabIndex = "0"
      document.querySelector("#firstModal #subs-mobile").tabIndex = "0"
      document.querySelector("#firstModal #contact-submit").tabIndex = "0"

      document
        .querySelector(`#firstModal input[name='dog_name']`)
        .insertAdjacentHTML("afterend", `<span class="input_error_text">Please enter Your Dog’s name without spaces, numbers or special characters</span>`)

      document
        .querySelector(`#firstModal input[name='first_name']`)
        .insertAdjacentHTML("afterend", `<span class="input_error_text">Please enter Your name without spaces, numbers or special characters</span>`)

      document.querySelector("#firstModal #contact-submit").insertAdjacentHTML("beforebegin", textForWorkShop)

      // click on btn My dog is a puppy (aged less than 1 year)
      document.querySelector("#firstModal .popup_first .btn_wrapp > div a:first-child").addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector("#firstModal .sec .puppy-popup-link #puppyCheck").click()
        document.querySelector("#firstModal .popup_first").style.display = "none"
        document.querySelector("#firstModal #puppyContent").insertAdjacentHTML("afterbegin", popup_second)

        onShowMore()
        document.querySelector("#firstModal #puppyContent .popup_second").style.display = "block"
        console.log(`click on btn My dog is a puppy (aged less than 1 year)`)
      })

      // click on btn My dog is a young or adult dog (aged 1 year or more)
      document.querySelector("#firstModal .popup_first .btn_wrapp > div a:last-child").addEventListener("click", function (e) {
        e.preventDefault()

        document.querySelector("#firstModal .sec .popup_link:last-child #puppyCheck").click()
        document.querySelector("#firstModal .popup_first").style.display = "none"
        document.querySelector("#firstModal #adultContent").insertAdjacentHTML("afterbegin", popup_second)

        onShowMore()
        document.querySelector("#firstModal #adultContent .popup_second").style.display = "block"
        console.log(`click on btn My dog is a young or adult dog (aged 1 year or more)`)
      })

      // create new element popup finalForm -> input name, email, number
      if (document.querySelector("#firstModal #finalForm")) {
        document.querySelector("#firstModal #finalForm").insertAdjacentHTML("afterbegin", popup_third)

        //   value btn main submit
        document.querySelector("#firstModal #contact-submit").value = "Get workshop link"

        document.querySelector("#firstModal #contact-submit").addEventListener("click", function () {
          pushDataLayer("Get workshop link clicked #firstModal")
        })

        //   create btn last continue
        document.querySelector("#firstModal form .form-group > div:last-child").insertAdjacentHTML("beforebegin", buttonInputName)
      }

      function onShowMore() {
        // click on btn #puppyContent show_more
        if (document.querySelector("#firstModal #puppyContent .popup_second .body_popup .show_more")) {
          document.querySelector("#firstModal #puppyContent .popup_second .body_popup .show_more").addEventListener("click", () => {
            pushDataLayer("Show_more #puppyContent")

            document.querySelector("#firstModal #puppyContent .second_block_checkbox").style.display = "flex"
            document.querySelector("#firstModal #puppyContent .popup_second .body_popup .show_more").style.display = "none"
          })
        }

        // click on btn #adultContent show_more
        if (document.querySelector("#firstModal #adultContent .popup_second .body_popup .show_more")) {
          document.querySelector("#firstModal #adultContent .popup_second .body_popup .show_more").addEventListener("click", () => {
            pushDataLayer("Show_more #adultContent")

            document.querySelector("#firstModal #adultContent .second_block_checkbox").style.display = "flex"
            document.querySelector("#firstModal #adultContent .popup_second .body_popup .show_more").style.display = "none"
          })
        }

        // click on btn checkbox continue #puppyContent
        if (document.querySelector("#firstModal #puppyContent  .popup_second .body_popup .btn_continue")) {
          document.querySelector("#firstModal #puppyContent  .popup_second .body_popup .btn_continue").addEventListener("click", function () {
            pushDataLayer(`Step 2 Continue #puppyContent`)

            document.querySelector("#firstModal #puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
            document.querySelector("#firstModal #puppyContent  .popup_second").style.display = "none"
            document.querySelector("#firstModal .popup_third").style.display = "block"
          })
        }

        // click on btn checkbox continue #adultContent
        if (document.querySelector("#firstModal #adultContent .popup_second .body_popup .btn_continue")) {
          document.querySelector("#firstModal #adultContent .popup_second .body_popup .btn_continue").addEventListener("click", function () {
            pushDataLayer(`Step 2 Continue #adultContent`)

            document.querySelector("#firstModal #adultContent .yesno .ysn.popup_link:nth-child(1) a").click()
            document.querySelector("#firstModal #adultContent .popup_second").style.display = "none"
            document.querySelector("#firstModal .popup_third").style.display = "block"
          })
        }

        // click on label checkbox
        document.querySelectorAll("#firstModal .custom_checkbox + label").forEach((el) => {
          el.addEventListener("click", function () {
            pushDataLayer(`${this.getAttribute("for")} selected`)
          })
        })
      }

      document.querySelector("#firstModal .button_input_name").addEventListener("click", () => {
        validationForm("#firstModal")
      })

      // click on button.close
      if (document.querySelector("#firstModal .popup_name button.close")) {
        document.querySelector("#firstModal .popup_name button.close").addEventListener("click", () => {
          pushDataLayer("#firstModal Step 3 closed")
        })
      }

      if (document.querySelector("#firstModal .popup_adress button.close")) {
        document.querySelector("#firstModal .popup_adress button.close").addEventListener("click", () => {
          pushDataLayer("#firstModal Step 4 closed")
        })
      }
    }

    // #openModal
    // document.querySelectorAll('#openModal') -> click on btn popup
    let a = setInterval(() => {
      if (document.querySelector("#openModal .modal-content.modal-of-content.popup-first-body.landscape-popup-width")) {
        clearInterval(a)
        document.querySelector("#openModal #subs-name2").placeholder = "Your name"
        document.querySelector("#openModal #dog-name2").placeholder = "Dog’s name"
        document.querySelector("#openModal #subs-email2").placeholder = "Enter your email"
        document.querySelector("#openModal #subs-mobile2").placeholder = "Enter your phone number"
        document.querySelector("#openModal #contact-submit").textContent = "Get workshop link"
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

          document.querySelector("#openModal #contact-submit").addEventListener("click", function () {
            pushDataLayer("Get workshop link clicked #openModal")
          })

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
            pushDataLayer("#openModal Step 3 closed")
          })
        }

        if (document.querySelector("#openModal .popup_adress button.close")) {
          document.querySelector("#openModal .popup_adress button.close").addEventListener("click", () => {
            pushDataLayer("#openModal Step 4 closed")
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
        pushDataLayer(`Step 3 Continue ${parent}`)
        document.querySelector("#openModal .button_input_name").style.display = "none"
        document.querySelector("#openModal #subs-name2").style.display = "none"
        document.querySelector("#openModal #dog-name2").style.display = "none"

        document.querySelector("#openModal #subs-email2").style.display = "flex"
        document.querySelector("#openModal #subs-mobile2").style.display = "flex"
        document.querySelector("#openModal #contact-submit").style.display = "flex"

        document.querySelector("#openModal .text_for_work_shop").style.display = "block"
        document.querySelector("#openModal .benefits").style.display = "block"
        document.querySelector("#openModal .popup_adress").style.display = "block"
        document.querySelector("#openModal .popup_name").style.display = "none"
      }

      if (document.querySelector(`${parent} input.input_error`) === null && parent === `#firstModal`) {
        pushDataLayer(`Step 3 Continue ${parent}`)
        document.querySelector("#firstModal .button_input_name").style.display = "none"
        document.querySelector("#firstModal #subs-name").style.display = "none"
        document.querySelector("#firstModal #dog-name").style.display = "none"

        document.querySelector("#firstModal #subs-email").style.display = "flex"
        document.querySelector("#firstModal #subs-mobile").style.display = "flex"
        document.querySelector("#firstModal #contact-submit").style.display = "flex"

        document.querySelector("#firstModal .text_for_work_shop").style.display = "block"
        document.querySelector("#firstModal .benefits").style.display = "block"
        document.querySelector("#firstModal .popup_adress").style.display = "block"
        document.querySelector("#firstModal .popup_name").style.display = "none"
      }
    }

    pushDataLayer("loaded")
    clarity("set", "reg_popup_impr", "variant_1")
    document.querySelector(".exp")?.remove()
  }
}, 10)
