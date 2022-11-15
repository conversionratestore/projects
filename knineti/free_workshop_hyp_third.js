if (window.location.pathname === "/free-workshop/") {
  let startFunkDesk = setInterval(() => {
    if (document.querySelector(".entry-content")) {
      clearInterval(startFunkDesk)

      let scriptPopper = document.createElement("script")
      scriptPopper.src = "https://unpkg.com/popper.js@1"
      scriptPopper.async = false
      document.body.appendChild(scriptPopper)

      let scriptTippy = document.createElement("script")
      scriptTippy.src = "https://unpkg.com/tippy.js@5"
      scriptTippy.async = false
      document.body.appendChild(scriptTippy)

      let eventVar = "desktop"

      if (window.innerWidth <= 768) {
        eventVar = "mobile"
      }

      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || []
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: New reg Hyp3 ${eventVar}`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: New reg Hyp3 ${eventVar}`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      let popupStyle = /*html */ `
    <style>
      body {
        overflow: hidden;
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
        border-radius: 10px;
      }
      .btn_continue {
        background: #173775;
        border-radius: 10px;
        margin: 0 0 15px auto;
        max-width: 304px;
        width: 100%;
        height: 48px;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #ffffff !important;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
        text-transform: uppercase;
        transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
      .btn_continue svg {
        margin-left: 8px;
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
      .email_text {
        background: #e8f1f9;
        border-radius: 4px;
        padding: 4px 11px;
        display: none;
        margin: 4px auto 24px;
        max-width: 304px;
        text-align: center;
      }
      .email_text p {
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #193973 !important;
        margin: 0;
      }
      #contact-submit:hover,
      .btn_continue:hover,
      .button_input_name:hover {
        box-shadow: unset !important;
      }
      .enroll_box .info_box > div.img_wrap {
        max-width: 413px;
      }
      .tooltip_mob {
        display: none;
        align-items: center;
        justify-content: center;
        margin: 12px 0 -5px;
      }
      .last_step_title .tooltip_mob p {
        font-weight: 400 !important;
        font-size: 14px !important;
        line-height: 20px !important;
        color: #193973 !important;
        margin: 0 4px 0 0 !important;
      }
      .tooltip_box {
        display: none;
        background: #e8f1f9;
        border-radius: 4px;
        padding: 4px 16px;
        max-width: 304px;
        width: 100%;
        margin: -8px auto 0;
        text-align: left;
        cursor: pointer;
      }
      .tooltip_box p {
        display: inline;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        color: #193973 !important;
        margin: 0;
      }
      .tooltip_box svg {
        margin: 0 0 -4px 0;
      }
      /*start_step */
      .start_step {
        display: none;
      }
      .start_step h2 {
        max-width: 844px;
        font-weight: 800 !important;
        font-size: 32px !important;
        line-height: 40px !important;
        color: #193973 !important;
        margin: 0 auto 24px !important;
      }
      .start_step h2 span {
        color: #6fb3fa !important;
      }
      .start_step > p {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #747474 !important;
        margin: 0 auto 32px;
        max-width: 844px;
        text-align: center;
      }
      .start_step > p span {
        color: #193973 !important;
      }
      .start_step ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 844px;
        margin: 0 auto;
        padding: 0 0 20px;
      }
      .start_step ul li {
        width: 49%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        cursor: pointer;
        transition: all 350ms ease-in-out;
      }
      .start_step ul li:hover {
        box-shadow: 10px 4px 15px 1px rgb(39 32 32 / 50%);
      }
      .start_step ul li + li {
        margin-left: 20px;
      }
      .start_step ul li > div:nth-child(2) {
        background: #193973;
        padding: 17px 5px;
        border-radius: 0px 0px 10px 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
      .start_step ul li p {
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: -0.01em;
        color: #ffffff !important;
        margin: 0;
      }
      /*popup_first */
      .popup_new {
        display: none;
        gap: 20px;
        justify-content: space-between;
        max-width: 1358px;
        width: 90%;
        margin: 0 auto;
      }
      .popup_new .img_wrap {
        width: 40%;
      }
      .popup_new .img_wrap img {
        border-radius: 10px;
      }
      .popup_new .img_wrap img:nth-child(1) {
        max-width: 445px;
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
        color: #747474 !important;
        margin: 0 0 24px;
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
        width: 24.9%;
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
      .popup_new > div:last-child .progress_bar > ul li:nth-child(4) {
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
        color: #747474 !important;
        margin: 0;
        display: flex;
        align-items: center;
      }
      .popup_new > div:last-child .progress_bar > div p.active_btn_second {
        display: none;
      }
      .popup_new > div:last-child .progress_bar > div p:nth-child(2),
      .popup_new > div:last-child .progress_bar > div p:nth-child(1) {
        cursor: pointer;
      }
      .popup_new > div:last-child .progress_bar > div p:nth-child(1) span {
        margin-left: 10px;
      }
      .popup_new > div:last-child .progress_bar > div p:nth-child(2) span {
        margin-left: 10px;
      }
      .first_block_checkbox {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 15px;
        margin: 0 auto 27px;
        max-width: 628px;
      }
      .first_block_checkbox input.custom_checkbox {
        z-index: -1;
        opacity: 0;
        height: 0;
        margin: 0;
        padding: 0;
        position: absolute;
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
        text-align: left;
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
      .popup_new > div:last-child .popup_second {
        display: none;
      }
      .popup_new > div:last-child .popup_second > h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 125%;
        text-align: center;
        color: #734f22;
        margin: 40px auto 10px;
        max-width: 603px;
      }
      .popup_new > div:last-child .popup_second > h2.step_three {
        max-width: 435px;
      }
      .popup_new > div:last-child .popup_second > h2 span {
        color: #193973;
        text-transform: capitalize;
      }
      .last_step_title {
        display: none;
        margin: 40px 0;
        text-align: center;
      }
      .last_step_title h2 {
        font-weight: 700 !important;
        font-size: 26px !important;
        line-height: 32px !important;
        color: #734f22 !important;
        margin: 0 auto 12px !important;
        max-width: 715px;
      }
      .last_step_title h2 .your_dog_name {
        color: #193973;
        text-transform: capitalize;
      }
      .last_step_title p {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #734f22 !important;
        max-width: 591px;
        margin: 0 auto;
        text-align: center;
      }
      .popup_new > div:last-child .popup_first.active_popup,
      .popup_new > div:last-child .popup_second.active_popup,
      .start_step.active_popup {
        display: block;
      }
      .popup_new.active_popup {
        display: flex;
      }
      .dog_second,
      .dog_third,
      .mobile_descr {
        display: none;
      }
      .dog_third {
        position: relative;
      }
      .dog_third p,
      p.mobile_descr {
        position: absolute;
        bottom: 10px;
        left: 0;
        max-width: 426px;
        background: #ffffff;
        border-radius: 10px;
        padding: 10px;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        color: #747474 !important;
        margin: 0 10px;
        text-align: center;
      }
      p.mobile_descr {
        position: unset;
        border: 1px solid #6fb3fa;
        margin: 24px 0 0;
        font-weight: 400;
        font-size: 14px !important;
        line-height: 20px !important;
        color: #747474 !important;
      }
      .dog_third p span,
      p.mobile_descr span {
        font-weight: 700;
      }
      /*choosen */
      .popup_new .chosen-container .chosen-drop {
        max-height: 240px;
      }
      .chosen-container .chosen-results li {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #193973 !important;
      }
      .chosen-container .chosen-results li em {
        font-weight: 700;
        text-decoration: unset;
      }
      /*chosen_select */
      .chosen_select {
        position: relative;
        max-width: 304px;
        margin: 0 auto 16px;
        display: none;
      }
      .chosen_select label {
        border: 1px solid #e8f1f9;
        border-radius: 10px;
        outline: unset;
        display: flex;
        width: 100%;
        height: 44px;
        max-width: 520px;
        margin: 0 0 8px;
        align-items: center;
        padding: 5px 18px;
        transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
      .chosen_select label.on_focus {
        border: 1px solid #6fb3fa;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
      }
      .chosen_select label:hover {
        border: 1px solid #6fb3fa;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
      }
      .chosen_select p.hover_text {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: -30px;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: #808080 !important;
        left: 6px;
        margin: 0;
        transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
      .chosen_select p.hover_text svg {
        margin-right: 8px;
      }
      .chosen_select label svg {
        max-width: 24px;
        height: 24px;
        width: 100%;
      }
      .chosen_select label svg#removeTextInput {
        cursor: pointer;
        display: none;
      }
      .chosen_select label > input {
        width: 100% !important;
        outline: unset;
        border-radius: 10px;
        border: none;
        padding: 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        color: #193973 !important;
        height: 100%;
        margin: 0 0 0 8px !important;
      }
      .chosen_select label > input::placeholder {
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: #a9b4b8;
      }
      .chosen_select label > input:focus {
        box-shadow: unset;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
        color: #000000;
      }
      .chosen_select div {
        border: 1px solid #e8f1f9;
        border-radius: 10px;
        padding: 10px 19px 0px 16px;
        max-width: 520px;
      }
      .chosen_select div ul {
        overflow-x: auto;
        max-height: 240px;
      }
      .chosen_select ul::-webkit-scrollbar {
        width: 2px;
      }
      .chosen_select ul::-webkit-scrollbar-thumb {
        background: #6f767b;
        border-radius: 10px;
      }
      .chosen_select ul li {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #193973 !important;
        padding: 6px 10px;
        text-align: left;
        cursor: pointer;
      }
      .chosen_select ul li:hover {
        background: #e8f1f9;
      }
      #firstModal {
        background-color: #ffffff;
        overflow: auto;
      }
      #firstModal .for-spacing,
      #firstModal .modal-header.modal-header-style.modal-of-header.style-border,
      #firstModal .row-md-12.style-of-row-free-workshop > div:first-child {
        display: none !important;
      }
      #firstModal .border-of-modal .modal-header {
        border: unset !important;
      }
      #firstModal #subs-email2,
      #firstModal #subs-mobile2,
      #firstModal #subs-name {
        display: none;
      }
      #firstModal #firstModal .form-group {
        background: white;
        border-radius: 10px;
      }

      #firstModal .border-of-modal .vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1 {
        display: none;
      }
      #firstModal .popup_third {
        display: none;
      }
      #firstModal .btn_wrapp {
        display: none;
        max-width: 844px;
        width: 100%;
        margin: 20px auto;
        position: relative;
      }
      #firstModal .btn_wrapp > p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #808080 !important;
        margin: 0;
        cursor: pointer;
      }
      .btn_wrapp > p span {
        margin-left: 8px;
      }
      #firstModal .btn_wrapp button.close {
        top: 0;
        right: -5px;
        color: #808080;
        display: none !important;
      }
      #firstModal .btn_wrapp > p.active_btn_fifth {
        opacity: 0;
        pointer-events: none;
      }

      #firstModal .popup_third {
        display: block;
      }
      #firstModal .border-of-modal {
        margin: 0;
      }
      #firstModal .modal-dialog {
        width: 95% !important;
        margin: 10px auto !important;
      }
      #firstModal .modal-dialog > .img_wrap {
        margin: 0 auto 10px;
        max-width: 1358px;
        width: 90%;
      }
      #firstModal .modal-dialog > .img_wrap img {
        max-width: 200px;
      }
      #firstModal .modal-content {
        background: unset !important;
        border-radius: 10px;
        background-color: unset !important;
        box-shadow: unset !important;
        border: unset !important;
        max-height: unset !important;
        max-width: unset !important;
      }
      #firstModal .modal-body {
        display: none;
        background: unset !important;
        padding: 24px;
        max-width: 448px;
        width: 100%;
        margin: 0 auto;
      }
      #firstModal .modal-body.is_active {
        border: 1px solid #e8f1f9;
        border-radius: 10px;
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
      }
      .body_popup > h2,
      .new_block_breed > h2 {
        font-weight: 600 !important;
        font-size: 18px !important;
        line-height: 30px !important;
        text-align: center;
        color: #193973 !important;
        margin-bottom: 10px !important;
      }
      .button_input_name,
      #firstModal #contact-submit {
        background: #173775;
        border-radius: 10px;
        margin: 0 auto;
        max-width: 304px;
        width: 100%;
        height: 48px;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        text-transform: uppercase;
        color: #ffffff !important;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
        transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
      }
      .button_input_name svg {
        margin-left: 8px;
      }
      .button_input_name {
        margin: 24px auto 0;
      }
      .button_input_name:focus,
      #contact-submit:focus,
      .btn_continue:focus {
        box-shadow: unset;
      }
      #firstModal #finalForm .style-text,
      #firstModal form .form-group > div:last-child,
      #firstModal form .form-group img,
      #firstModal .fst_icon.fa-user:before,
      #firstModal .fa-envelope:before,
      #firstModal #subs-email,
      #firstModal #subs-mobile,
      #firstModal #contact-submit,
      .benefits,
      .popup_adress {
        display: none;
      }
      .benefits {
        margin-top: 40px;
      }
      .benefits ul {
        display: flex;
        justify-content: space-between;
      }
      .benefits ul li {
        display: flex;
        justify-content: flex-start;
        width: 26%;
      }
      .benefits ul li:nth-child(2) {
        width: 32%;
      }
      .benefits ul li + li {
        margin-left: 20px;
      }
      .benefits ul li svg {
        max-width: 24px;
        width: 100%;
      }
      .benefits ul li p {
        margin: 0 0 0 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #747474 !important;
      }
      @media (max-width: 1340px) {
        .benefits ul li p{
              font-size: 13px;
        }
        .benefits ul li{
          width: 30%;
        }
      }
      .privacy_policy_wrap {
        max-width: 400px;
        margin: 16px auto 0;
        text-align: center;
      }
      .privacy_policy_wrap p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #747474 !important;
        margin: 0 !important;
      }
      .privacy_policy_wrap p a {
        text-decoration: underline;
        color: inherit;
      }
      #firstModal #subs-email,
      #firstModal #contact-submit {
        max-width: 304px;
        width: 100% !important;
        margin: 0 auto !important;
      }
      #firstModal .fa {
        display: none !important;
      }
      #firstModal form span.top-levels {
        right: 81px !important;
      }
      #firstModal #finalForm {
        display: block;
        background: #ffffff;
        border-radius: 10px;
      }
      #firstModal .form-group {
        margin: 0;
      }
      #firstModal #finalForm .popup_third .body_popup > h2 {
        margin: 0 auto !important;
      }
      #firstModal #finalForm .popup_third .body_popup {
        padding: 28px 164px 0;
        margin-bottom: 56px;
      }
      #firstModal .form-control,
      .new_block_breed input,
      #firstModal #subs-mobile {
        width: 100% !important;
        margin: 0 auto 12px !important;
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
      .new_block_breed input::placeholder{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #A0A1A8;
      }
      .new_block_breed {
        position: relative;
        max-width: 304px;
        margin: 0 auto;
      }
      .label_breed {
        display: none;
        position: absolute;
        right: 12px;
        top: 0;
        font-size: 10px;
        color: #808080;
      }
      .security_box {
        display: flex;
        align-items: flex-start;
        margin: 0 auto;
        max-width: 440px;
        justify-content: flex-start;
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

      #firstModal #dog-name,
      #firstModal #dog-name2 {
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
      #firstModal #finalForm .popup_third .popup_adress .body_popup {
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
      #firstModal button.close {
        display: block;
        position: absolute;
        top: 13px;
        right: 18px;
        color: black;
        opacity: 1;
        text-shadow: unset;
      }
      #firstModal .close:hover,
      #firstModal .close:focus {
        color: #a0a1a8;
        opacity: 1;
      }
      .input_error_text {
        font-size: 12px;
        line-height: 16px;
        color: #f15050;
        margin: -12px auto 10px;
        display: none;
        max-width: 304px;
        text-align: left;
      }
      .popup_adress .body_popup > h2 {
        margin: 0px auto 20px !important;
        max-width: 508px;
      }
      #firstModal form .text_for_work_shop {
        font-weight: 400;
        font-size: 12px !important;
        line-height: 20px;
        text-align: center;
        color: #808080 !important;
        margin-bottom: 23px !important;
        display: none;
      }
      .hide {
        visibility: hidden;
        position: absolute;
      }
      .show {
        visibility: visible;
      }
      /*backdrop_popup */
      .backdrop_popup {
        position: fixed !important;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        opacity: 1;
        background: rgb(0 0 0 / 70%);
        transition: all 0.5s ease 0s;
        z-index: 9005;
        display: block;
        max-height: 100%;
      }
      .backdrop_popup.is_hidden {
        opacity: 0;
        pointer-events: none;
      }
      .backdrop_popup .container_popup {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        top: 0;
        max-width: 628px;
        height: max-content;
        padding: 32px 13px 24px;
        margin: 40px auto;
        background: #fdfdfd;
        border-radius: 10px;
        transition: all 0.5s ease 0s;
      }
      .backdrop_popup .container_popup > svg {
        position: absolute;
        top: 24px;
        right: 24px;
        outline: none;
        cursor: pointer;
      }
      .content_popup div {
        padding: 0 11px;
        overflow-y: scroll;
        height: 500px;
      }
      .content_popup div::-webkit-scrollbar-thumb {
        background: #6f767b;
        border-radius: 10px;
        border: 2px solid #6f767b;
      }
      .content_popup div::-webkit-scrollbar {
        width: 2px;
      }
      .content_popup div::-webkit-scrollbar-track {
        background: transparent;
      }
      .content_popup h2 {
        font-weight: 400;
        font-size: 19px;
        line-height: 20px;
        color: #734f22;
        margin: 0 0 24px;
        padding: 0 0 18px;
        border-bottom: 1px solid rgb(119 119 125 / 30%);
      }
      .content_popup p {
        font-weight: 400;
        font-size: 14px !important;
        line-height: 24px;
        color: #77777d !important;
        margin: 0;
      }
      .content_popup p + p {
        margin-top: 20px;
      }
      .tippy-tooltip {
        box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
        filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
        background: #ffffff;
        border-radius: 8px;
        color: #747474;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
      }
      .tippy-content {
        padding: 8px 16px;
      }
      .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
        border-bottom-color: #ffffff;
      }
      .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
        border-top-color: #ffffff;
      }

      @media (max-width: 768px) {
        .backdrop_popup .container_popup{
          max-width: 350px;
        }
        #firstModal .modal-content {
          width: 100% !important;
          padding: 0 15px !important;
        }
        .popup_new > div:last-child .progress_bar > ul {
          margin: 0 0 12px;
          height: 17px;
        }
        .popup_new > div:last-child .progress_bar > ul li {
          width: 24.64%;
        }
        .popup_new > div:last-child .progress_bar > div p:nth-child(2) span,
        .popup_new > div:last-child .progress_bar > div p:nth-child(1) span,
        .dog_third p {
          display: none !important;
        }
        #firstModal .modal-dialog {
          width: 100% !important;
          margin: 10px 0 !important;
        }
        #firstModal .modal-body {
          padding: 0;
        }
        #firstModal .modal-body > .row {
          margin: 0;
        }
        .popup-first-body {
          width: 95% !important;
        }
        #firstModal .modal-body.is_active {
          border: unset;
          border-radius: unset;
        }
        #firstModal #subs-email,
        #firstModal #contact-submit {
          max-width: unset;
        }
        .content_popup div {
          height: 400px;
        }
        .email_text {
          max-width: unset;
          padding: 4px 18px;
          text-align: left;
        }
        .last_step_title {
          margin: 24px 0 0;
        }
        .last_step_title h2 {
          font-size: 22px !important;
          line-height: 28px !important;
        }
        .last_step_title p {
          font-size: 16px;
          line-height: 28px;
        }
        #firstModal .form-control,
        .new_block_breed input,
        #firstModal #subs-mobile {
          padding: 10px 18px;
        }
        #firstModal .modal-dialog > .img_wrap {
          margin: 20px 0;
        }
        .start_step h2 {
          font-size: 22px !important;
          line-height: 26px !important;
          margin: 0 auto 12px !important;
        }
        .start_step > p {
          font-size: 16px;
          line-height: 24px;
          margin: 0 auto 24px;
        }
        .start_step ul {
          flex-wrap: wrap;
          padding: 0 0 46px;
        }
        .start_step ul li {
          width: 100%;
        }
        .start_step ul li + li {
          margin: 24px 0 0;
        }
        .popup_new {
          width: 100%;
        }
        .popup_new.active_popup {
          flex-direction: column;
        }
        .popup_new > div:last-child {
          width: 100%;
        }
        .popup_new .img_wrap {
          width: 100%;
          margin-top: 20px;
        }
        .button_input_name {
          margin: 24px auto 0;
          max-width: unset;
        }
        #firstModal .form-control,
        .new_block_breed input,
        #firstModal #subs-mobile {
          padding: 10px 16px !important;
          max-width: unset;
        }
        .new_block_breed {
          max-width: unset;
        }
        /*.benefits */
        .benefits {
          margin-top: 24px;
        }
        .benefits ul {
          flex-direction: column;
          padding: 0 0 50px;
        }

        .benefits ul li {
          width: 100% !important;
          align-items: center;
        }
        .benefits ul li + li {
          margin: 24px 0 0;
        }
        .first_block_checkbox input.custom_checkbox{
          position: unset;
        }
        .first_block_checkbox label {
          width: 100%;
        }
        .first_block_checkbox {
          gap: 12px;
        }
        .first_block_checkbox {
          margin: 0 auto 24px;
        }
        .btn_continue {
          max-width: unset;
          margin: 0 0 46px;
        }
        .popup_new > div:last-child .popup_first > p {
          line-height: 129%;
        }
        .popup_new > div:last-child .popup_first > h2 {
          font-size: 22px !important;
          line-height: 28px;
          margin: 32px 0 12px;
        }
        .popup_new > div:last-child .popup_second > h2 {
          margin: 24px 0 0;
          font-size: 22px !important;
          line-height: 28px;
        }
        .privacy_policy_wrap {
          margin: 16px auto 60px;
        }
        .tooltip_box {
          max-width: unset;
        }
        #firstModal form span.top-levels {
          right: 15px !important;
        }
        p.mobile_descr {
          margin: -36px 0 0;
        }
        .content_popup h2 {
          font-size: 17px !important;
          max-width: 355px;
          margin-left: auto;
          margin-right: auto;
        }
        .backdrop_popup .container_popup > svg {
          right: 15px;
        }
        .tippy-content .tooltip_mob_box > p {
          font-weight: 400 !important;
          font-size: 16px !important;
          line-height: 24px !important;
          color: #747474 !important;
          margin: 0 0 16px !important;
          text-align: left !important;
        }
        .tippy-content .tooltip_mob_box > p span {
          font-weight: 700 !important;
        }
        .benefits_mob ul {
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .benefits_mob ul li {
          display: flex;
          align-items: center;
        }
        .benefits_mob ul li + li {
          margin-top: 16px;
        }
        .tooltip_mob .benefits_mob ul p {
          font-weight: 400 !important;
          font-size: 16px !important;
          line-height: 20px !important;
          color: #747474 !important;
          margin: 0 0 0 8px !important;
          text-align: left;
        }
        .tooltip_mob .benefits_mob ul svg {
          flex: 1 0 24px;
        }
        .tooltip_mob .tippy-content {
          padding: 16px;
        }
        .tooltip_mob .tippy-tooltip {
          max-width: 328px !important;
        }
      }
      @media (max-width: 320px) {
        .backdrop_popup .container_popup{
          max-width: 295px;
        }
        .content_popup h2{
          font-size: 13px !important;
        }
        .content_popup p{
          font-size: 10px !important;
        }
        .content_popup p + p {
            margin-top: 10px;
        }
        .start_step ul li p{
          font-size: 15px;
        }
        .start_step h2{
          font-size: 19px !important;
        }
        .popup_new > div:last-child .popup_first > h2{
          font-size: 20px !important;
        }
        .popup_new > div:last-child .popup_second > h2{
          font-size: 18px !important;
        }
        .tooltip_box p{
          font-size: 12px;
        }
        .privacy_policy_wrap p{
          font-size: 11px;
        }
        .last_step_title p{
          font-size: 13px;
        }
        p.mobile_descr{
          font-size: 11px !important;
        }
        .benefits ul li p{
          font-size: 14px;
        }
        .email_text p{
          font-size: 12px;
        }
      }
      @media (max-width: 280px) {
        .start_step ul li p{
          font-size: 13px;
        }
        .start_step > p{
          font-size: 14px;
        }
        .start_step h2{
          font-size: 18px !important;
        }
        .popup_new > div:last-child .popup_first > h2{
          font-size: 19px !important;
        }
        .popup_new > div:last-child .popup_second > h2{
          font-size: 17px !important;
        }
        .tooltip_box p{
          font-size: 11px;
        }
      }

    </style>
    `

      // popup
      let popUpPrivacy = /*html */ `
        <div class="backdrop_popup is_hidden" data-modal>
          <div class="container_popup">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_303_473)">
                <path d="M20 6.41L18.59 5L13 10.59L7.41 5L6 6.41L11.59 12L6 17.59L7.41 19L13 13.41L18.59 19L20 17.59L14.41 12L20 6.41Z" fill="#989898" />
              </g>
              <defs>
                <clipPath id="clip0_303_473">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
`

      let tooltipMobBox = /*html */ `
      <div class="tooltip_mob_box">

        <p>Your hosts for the workshop will be  <span>Dr. Alexa Diaz PhD</span> (one of the United States' greatest dog trainers) and <span>Eric Presnall</span> (Host of the hit Animal Planet TV show "Who Let the Dogs Out").</p>
                               <div class="benefits_mob">
                           <ul>
                             <li>
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                   d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM12.8333 12C12.8333 12.2975 12.675 12.5733 12.4167 12.7217C12.2875 12.7958 12.1442 12.8333 12 12.8333C11.8558 12.8333 11.7125 12.7958 11.5833 12.7217L8.69667 11.055C8.2975 10.825 8.16167 10.315 8.39167 9.91667C8.62167 9.51833 9.13167 9.38 9.53 9.61167L11.1667 10.5567V7C11.1667 6.53917 11.54 6.16667 12 6.16667C12.46 6.16667 12.8333 6.53917 12.8333 7V12Z"
                                   fill="#699CD0"
                                 />
                               </svg>
 
                               <p>Watch on demand at your convenience</p>
                             </li>
                             <li>
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                   d="M4.5 21C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5C21 21 19.5 21 19.5 21H4.5ZM12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12Z"
                                   fill="#699CD0"
                                 />
                               </svg>
 
                               <p>This workshop has helped train 2.7 million dogs</p>
                             </li>
                             <li>
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                   d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM15.3773 12.1617L10.2586 15.8859C10.2305 15.9061 10.1975 15.9181 10.163 15.9207C10.1285 15.9233 10.094 15.9164 10.0633 15.9006C10.0325 15.8849 10.0067 15.861 9.98863 15.8315C9.97057 15.802 9.96099 15.7681 9.96094 15.7336V8.28984C9.96082 8.25522 9.9703 8.22124 9.98832 8.19167C10.0063 8.1621 10.0322 8.1381 10.063 8.12232C10.0938 8.10654 10.1284 8.09961 10.1629 8.10229C10.1975 8.10497 10.2306 8.11716 10.2586 8.1375L15.3773 11.8594C15.4015 11.8765 15.4213 11.8991 15.4349 11.9254C15.4485 11.9517 15.4556 11.9809 15.4556 12.0105C15.4556 12.0402 15.4485 12.0694 15.4349 12.0957C15.4213 12.122 15.4015 12.1446 15.3773 12.1617Z"
                                   fill="#699CD0"
                                 />
                               </svg>
                               <p>Workshop duration: 56 minutes</p>
                             </li>
                           </ul>
                         </div>
      </div>
      `

      let popupNew = /*html*/ `
        <div class="popup_new_wrap">
          <div class="start_step active_popup">
            <h2>Learn how to train your dog to become as <span>obedient</span> as a service dog</h2>
            <p>Take a <span>1-minute quiz</span> about your dog and know how to deal with barking, housebreaking, nipping and more.</p>
            <ul>
              <li>
                <div class="img_wrap">
                  <img src="https://conversionratestore.github.io/projects/knineti/img/puppy_dog.jpg" alt="dog" />
                </div>
                <div>
                  <p>I have a puppy (up to 1 year old)</p>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="https://conversionratestore.github.io/projects/knineti/img/adult_dog.jpg" alt="dog" />
                </div>
                <div>
                  <p>I have an adult dog (over 1 year old)</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="popup_new">
            <div class="img_wrap">
              <img src="https://conversionratestore.github.io/projects/knineti/img/dog_select_problem.jpg" alt="dog" class="dog_first" />
              <img src="https://conversionratestore.github.io/projects/knineti/img/dog_breed_block.jpg" alt="dog" class="dog_second" />
              <div class="dog_third">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_last_block.jpg" alt="dog" />
                <p>
                  Your hosts for the workshop will be <span>Dr. Alexa Diaz PhD</span> (one of the United States' greatest dog trainers) and <span>Eric Presnall</span> (Host of the hit
                  Animal Planet TV show "Who Let the Dogs Out").
                </p>
              </div>
            </div>

            <div>
              <div class="progress_bar">
                <ul>
                  <li class="active_step"></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div>
                  <p class="active_btn_first" class="close" id="closestepthree" data-dismiss="modal" style="display: block" data-original-title="" title="" tabindex="0">
                    <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button" />
                    <span>Back</span>
                  </p>
                  <p class="active_btn_second" tabindex="0">
                    <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button" />
                    <span>Back</span>
                  </p>
                  <p><span>1</span>/<span>4</span></p>
                </div>
              </div>

              <div class="popup_first active_popup">
                <h2>What unwanted behavior do you want to address?</h2>
                <p>Select the problems you've experienced in the past 2 months</p>
                <div class="first_block_checkbox">
                  <input class="custom_checkbox" id="barking" type="checkbox" name="barking" value="barking" />
                  <label for="barking" tabindex="0">Barking </label>

                  <input class="custom_checkbox" id="jumping" type="checkbox" name="jumping" value="jumping" />
                  <label for="jumping" tabindex="0">Jumping </label>

                  <input class="custom_checkbox" id="pulling" type="checkbox" name="pulling" value="pulling" />
                  <label for="pulling" tabindex="0">Leash Pulling </label>

                  <input class="custom_checkbox" id="housebreaking" type="checkbox" name="housebreaking" value="housebreaking" />
                  <label for="housebreaking" tabindex="0">Housebreaking </label>

                  <input class="custom_checkbox" id="nipping" type="checkbox" name="nipping" value="nipping" />
                  <label for="nipping" tabindex="0">Nipping or biting </label>

                  <input class="custom_checkbox" id="called" type="checkbox" name="called" value="called" />
                  <label for="called" tabindex="0">Ignoring calls </label>

                  <input class="custom_checkbox" id="listen" type="checkbox" name="listen" value="listen" />
                  <label for="listen" tabindex="0">Ignoring Commands</label>

                  <input class="custom_checkbox" id="chewing" type="checkbox" name="chewing" value="chewing" />
                  <label for="chewing" tabindex="0">Chewing</label>

                  <input class="custom_checkbox" id="excitable" type="checkbox" name="excitable" value="excitable" />
                  <label for="excitable" tabindex="0">Extremely excited</label>

                  <input class="custom_checkbox" id="aggression" type="checkbox" name="aggression" value="aggression" />
                  <label for="aggression" tabindex="0">Aggression</label>

                  <input class="custom_checkbox" id="anxiety" type="checkbox" name="anxiety" value="anxiety" />
                  <label for="anxiety" tabindex="0">Anxiety</label>

                  <input class="custom_checkbox" type="checkbox" id="reacting" name="reacting" value="reacting" />
                  <label for="reacting" tabindex="0">Reacting to other dogs</label>

                  <input class="custom_checkbox" type="checkbox" id="other" name="other" value="other" />
                  <label for="other" tabindex="0">Other</label>
                </div>
                <div class="btn_continue" tabindex="0">
                  Continue
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2433_7192)">
                      <path d="M2.66683 7.83464H10.7802L7.0535 4.10797L8.00016 3.16797L13.3335 8.5013L8.00016 13.8346L7.06016 12.8946L10.7802 9.16797H2.66683V7.83464Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_2433_7192">
                        <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span class="visability_btn_continue"></span>
              </div>

              <div class="popup_second">
                <div class="last_step_title">
                  <h2>Discover how to eliminate <span class="your_dog_name">[dog’s name]</span> behavior problems today!</h2>
                  <p>Access the workshop that has helped transform the behavior of 2.7 million dogs, for FREE, today:</p>
                  <div class="tooltip_mob" data-tolltipMob>
                    <p>View workshop details</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_2433_7202)">
                        <path
                          d="M7.99479 1.33463C11.6767 1.33463 14.6615 4.3194 14.6615 8.0013C14.6615 11.6832 11.6767 14.668 7.99479 14.668C4.31289 14.668 1.32812 11.6832 1.32812 8.0013C1.32812 4.3194 4.31289 1.33463 7.99479 1.33463Z"
                          stroke="#193973"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M8 10.668V8.0013" stroke="#193973" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 5.33203H8.016" stroke="#193973" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_2433_7202">
                          <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h2>We'd love to know more about your dog. Introduce us!</h2>
                <p class="mobile_descr">
                  Your hosts for the workshop will be <span>Dr. Alexa Diaz PhD</span> (one of the United States' greatest dog trainers) and <span>Eric Presnall</span> (Host of the hit
                  Animal Planet TV show "Who Let the Dogs Out").
                </p>
                <div class="benefits">
                  <ul>
                    <li>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM12.8333 12C12.8333 12.2975 12.675 12.5733 12.4167 12.7217C12.2875 12.7958 12.1442 12.8333 12 12.8333C11.8558 12.8333 11.7125 12.7958 11.5833 12.7217L8.69667 11.055C8.2975 10.825 8.16167 10.315 8.39167 9.91667C8.62167 9.51833 9.13167 9.38 9.53 9.61167L11.1667 10.5567V7C11.1667 6.53917 11.54 6.16667 12 6.16667C12.46 6.16667 12.8333 6.53917 12.8333 7V12Z"
                          fill="#699CD0"
                        />
                      </svg>

                      <p>Watch on demand at your convenience</p>
                    </li>
                    <li>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.5 21C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5C21 21 19.5 21 19.5 21H4.5ZM12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12Z"
                          fill="#699CD0"
                        />
                      </svg>

                      <p>This workshop has helped train 2.7 million dogs</p>
                    </li>
                    <li>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM15.3773 12.1617L10.2586 15.8859C10.2305 15.9061 10.1975 15.9181 10.163 15.9207C10.1285 15.9233 10.094 15.9164 10.0633 15.9006C10.0325 15.8849 10.0067 15.861 9.98863 15.8315C9.97057 15.802 9.96099 15.7681 9.96094 15.7336V8.28984C9.96082 8.25522 9.9703 8.22124 9.98832 8.19167C10.0063 8.1621 10.0322 8.1381 10.063 8.12232C10.0938 8.10654 10.1284 8.09961 10.1629 8.10229C10.1975 8.10497 10.2306 8.11716 10.2586 8.1375L15.3773 11.8594C15.4015 11.8765 15.4213 11.8991 15.4349 11.9254C15.4485 11.9517 15.4556 11.9809 15.4556 12.0105C15.4556 12.0402 15.4485 12.0694 15.4349 12.0957C15.4213 12.122 15.4015 12.1446 15.3773 12.1617Z"
                          fill="#699CD0"
                        />
                      </svg>
                      <p>Workshop duration: 56 minutes</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
   
    `

      let arrayBreedDog = [
        "Yorkshire Terrier",
        "Wolfdog",
        "Wire Fox Terrier",
        "White German Shepherd",
        "Whippet",
        "West Highland White Terrier",
        "Welsh Terrier",
        "Welsh Springer Spaniel",
        "Weimaraner",
        "Vizsla",
        "Tosa Inu",
        "Tibetan Terrier",
        "Tibetan Spaniel",
        "Tasy",
        "Spanish Water Dog",
        "Soft Coated Wheaten Terrier",
        "Smoushond",
        "Smooth Fox Terrier",
        "Skye Terrier",
        "Siberian Husky",
        "Shiloh Shepherd",
        "Shih Tzu",
        "Shiba Inu",
        "Shetland Sheepdog",
        "Scottish Terrier",
        "Schipperke",
        "Samoyed",
        "Saluki",
        "Saint Bernard",
        "Rottweiler",
        "Rhodesian Ridgeback",
        "Thai Ridgeback",
        "Rat Terrier",
        "Pumi",
        "Puli",
        "Pug",
        "Presa Canario",
        "Portuguese Water Dog",
        "Poodle",
        "Toy Poodle",
        "Pomeranian",
        "Pointer",
        "Pudelpointer",
        "Plott Hound",
        "Pit Bull",
        "Pharaoh Hound",
        "Pembroke Welsh Corgi",
        "Pekingese",
        "Patterdale Terrier",
        "Papillon",
        "Otterhound",
        "Old English Sheepdog",
        "Nova Scotia Duck Tolling Retriever",
        "Norwich Terrier",
        "Norwegian Elkhound",
        "Norfolk Terrier",
        "Newfoundland",
        "Munsterlander",
        "Mudi",
        "Mountain Cur",
        "Miniature Schnauzer",
        "Miniature Pinscher",
        "Mastiff",
        "Tibetan Mastiff",
        "Neapolitan Mastiff",
        "Manchester Terrier",
        "Maltese",
        "Malinois",
        "Lowchen",
        "Lhasa Apso",
        "Leonberger",
        "Lapphund",
        "Landseer",
        "Lakeland Terrier",
        "Labrador Retriever",
        "Kuvasz",
        "Komondor",
        "King Shepherd",
        "Kerry Blue Terrier",
        "Keeshond",
        "Jindo",
        "Japanese Spitz",
        "Japanese Chin",
        "Jack Russell Terrier",
        "Parson Russell Terrier",
        "Italian Spinone",
        "Irish Wolfhound",
        "Irish Water Spaniel",
        "Irish Terrier",
        "Irish Setter",
        "Ibizan Hound",
        "Hovawart",
        "Havanese",
        "Greyhound",
        "Italian Greyhound",
        "Greater Swiss Mountain Dog",
        "Great Dane",
        "Gordon Setter",
        "Golden Retriever",
        "Glen of Imaal Terrier",
        "Giant Schnauzer",
        "German Wirehaired Pointer",
        "German Spitz",
        "German Shorthaired Pointer",
        "German Shepherd",
        "German Pinscher",
        "Flat-Coated Retriever",
        "Finnish Spitz",
        "Field Spaniel",
        "Eurasier",
        "Entlebucher",
        "English Toy Spaniel",
        "English Springer Spaniel",
        "English Setter",
        "English Foxhound",
        "English BullDog",
        "Olde English BullDogge",
        "French BullDog",
        "Dutch Shepherd",
        "Drever",
        "Doberman Pinscher",
        "Dingo",
        "Dalmatian",
        "Dachshund",
        "Curly-Coated Retriever",
        "Coton De Tulear",
        "Cocker Spaniel",
        "English Cocker Spaniel",
        "Clumber Spaniel",
        "Chow Chow",
        "Chinese Shar-Pei",
        "Chinese Crested",
        "Chihuahua",
        "Chesapeake Bay Retriever",
        "Cavalier King Charles Spaniel",
        "Caucasian Mountain Dog",
        "Catahoula",
        "Carolina Dog",
        "Cardigan Welsh Corgi",
        "Cane Corso",
        "Canaan Dog",
        "Cairn Terrier",
        "Bull Terrier",
        "Staffordshire Bull Terrier",
        "Bull Mastiff",
        "Brussels Griffon",
        "Brittany Dog",
        "Briquet",
        "Briard",
        "Brandlbracke",
        "Boykin Spaniel",
        "Boxer",
        "Boston Terrier",
        "Borzoi",
        "Border Terrier",
        "Border Collie",
        "Boerboel",
        "Blue Heeler",
        "Bloodhound",
        "Black Russian Terrier",
        "Black and Tan Coonhound",
        "Redbone Coonhound",
        "Biewer",
        "Bichon Frise",
        "Bernese Mountain Dog",
        "Berger Pyrenees",
        "Berger Picard",
        "Bergamasco",
        "Belgian Tervuren",
        "Belgian Sheepdog",
        "Bedlington Terrier",
        "Beauceron",
        "Bearded Collie",
        "Beagle",
        "Basset Hound",
        "Basset Griffon",
        "Basenji",
        "Barbet",
        "Australian Terrier",
        "Australian Shepherd",
        "Australian Kelpie",
        "Australian Cattle Dog",
        "Armant",
        "Argentine Dogo",
        "Anatolian Shepherd",
        "American Staffordshire Terrier",
        "American Pit Bull Terrier",
        "American Hairless Terrier",
        "Mexican Hairless Terrier",
        "American Foxhound",
        "American Eskimo",
        "American BullDog",
        "Alaskan Malamute",
        "Alaskan Klee Kai",
        "Alaskan Husky",
        "Akita",
        "Akbash",
        "Airedale Terrier",
        "Afghan Hound",
        "Affenpinscher",
      ]

      let buttonInputName = /*html*/ `
        <div class="new_block_breed">
          <input type="text" class="" data-html="true" name="breed" id="breedDog" placeholder="Enter your dog’s breed" tabindex="0" />
          <span class="label_breed">Dog’s breed</span>
          <div class="chosen_select">
            <label>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.04 17.2798C7.58405 17.2798 4.80005 14.4958 4.80005 11.0398C4.80005 7.5838 7.58405 4.7998 11.04 4.7998C14.496 4.7998 17.28 7.5838 17.28 11.0398C17.28 14.4958 14.496 17.2798 11.04 17.2798ZM11.04 5.7598C8.11205 5.7598 5.76005 8.1118 5.76005 11.0398C5.76005 13.9678 8.11205 16.3198 11.04 16.3198C13.968 16.3198 16.32 13.9678 16.32 11.0398C16.32 8.1118 13.968 5.7598 11.04 5.7598Z"
                  fill="#A9B4B8"
                />
                <path d="M15.6873 15.0078L19.9977 19.3182L19.3189 19.9969L15.0085 15.6865L15.6873 15.0078Z" fill="#A9B4B8" />
              </svg>
              <input type="text" placeholder="Enter your dog’s breed" />

              <svg id="removeTextInput" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.0604 11.9996L17.7802 7.27982C17.9168 7.13837 17.9924 6.94892 17.9907 6.75227C17.989 6.55562 17.9101 6.36751 17.7711 6.22846C17.632 6.0894 17.4439 6.01053 17.2472 6.00882C17.0506 6.00711 16.8611 6.0827 16.7197 6.21932L11.9999 10.9391L7.28019 6.21932C7.13874 6.0827 6.94929 6.00711 6.75264 6.00882C6.55599 6.01053 6.36788 6.0894 6.22882 6.22846C6.08977 6.36751 6.01089 6.55562 6.00918 6.75227C6.00747 6.94892 6.08307 7.13837 6.21969 7.27982L10.9394 11.9996L6.21969 16.7193C6.14806 16.7885 6.09092 16.8713 6.05161 16.9628C6.01231 17.0543 5.99162 17.1527 5.99075 17.2523C5.98989 17.3519 6.00886 17.4506 6.04657 17.5428C6.08428 17.635 6.13997 17.7187 6.21039 17.7891C6.28081 17.8595 6.36455 17.9152 6.45672 17.9529C6.5489 17.9907 6.64765 18.0096 6.74724 18.0088C6.84682 18.0079 6.94524 17.9872 7.03674 17.9479C7.12825 17.9086 7.211 17.8515 7.28019 17.7798L11.9999 13.0601L16.7197 17.7798C16.8611 17.9164 17.0506 17.992 17.2472 17.9903C17.4439 17.9886 17.632 17.9097 17.7711 17.7707C17.9101 17.6316 17.989 17.4435 17.9907 17.2469C17.9924 17.0502 17.9168 16.8608 17.7802 16.7193L13.0604 11.9996Z"
                  fill="#808080"
                />
              </svg>
            </label>
            <div>
              <ul></ul>
            </div>
          </div>
        </div>
        <div
          data-tolltip
          data-title="Receive key insights for dealing with housebreaking issues, barking, jumping, biting, and other forms of disobedience and unwanted behavior."
          class="tooltip_box"
        >
          <p>You'll receive the workshop link as well as other key training materials</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2433_7202)">
              <path
                d="M7.99479 1.33463C11.6767 1.33463 14.6615 4.3194 14.6615 8.0013C14.6615 11.6832 11.6767 14.668 7.99479 14.668C4.31289 14.668 1.32812 11.6832 1.32812 8.0013C1.32812 4.3194 4.31289 1.33463 7.99479 1.33463Z"
                stroke="#193973"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M8 10.668V8.0013" stroke="#193973" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 5.33203H8.016" stroke="#193973" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_2433_7202">
                <rect width="16" height="16" fill="white" transform="matrix(1 0 0 -1 0 16)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="button_input_name step_second" tabindex="0">
          Continue
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2433_7192)">
              <path d="M2.66683 7.83464H10.7802L7.0535 4.10797L8.00016 3.16797L13.3335 8.5013L8.00016 13.8346L7.06016 12.8946L10.7802 9.16797H2.66683V7.83464Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_2433_7192">
                <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="privacy_policy_wrap">
          <p>
            Your personal information won't be shared with anyone. <br />
            Please review our <a href="#" class="privacy_policy">Privacy policy</a> for more information.
          </p>
        </div>
    `

      function setListBreedDog(title) {
        return `  <li data-breed="${title}">${title}</li>`
      }

      document.head.insertAdjacentHTML("beforeend", popupStyle)
      document.body.insertAdjacentHTML("afterbegin", popUpPrivacy)

      if (localStorage.getItem("is_visited")) {
        document.body.style.overflow = "unset"
      }

      // #firstModal
      let a = setInterval(() => {
        if (document.querySelector("#firstModal .vis-ver-0_0.modal-header.modal-header-style.modal-of-header.style-border.modal-header1")) {
          clearInterval(a)

          document.querySelector("#firstModal .border-of-modal").insertAdjacentHTML("afterbegin", popupNew)

          let b = setInterval(() => {
            if (document.querySelector("#firstModal.modal .modal-dialog")) {
              clearInterval(b)

              document.querySelector("#firstModal.modal .modal-dialog").insertAdjacentHTML(
                "afterbegin",
                `<div class="img_wrap">
                  <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                 </div>`
              )

              document.querySelector(".popup_new > div:last-child .popup_second > h2")?.after(document.querySelector("#firstModal .modal-body"))

              if (document.querySelector(".start_step")) {
                visability("Dog`s Age", document.querySelector(".start_step"))
              }
              if (document.querySelector(".btn_continue")) {
                visability("btn Continue on step 'What unwanted behavior do you want to address?'", document.querySelector(".visability_btn_continue"))
              }
              if (document.querySelector(".button_input_name").classList.contains("step_second")) {
                visability("btn Continue on step 'We'd love to know more about your dog. Introduce us!'", document.querySelector(".button_input_name.step_second"))
              }
              if (document.querySelector(".benefits")) {
                visability("block 'Watch on-demand at your convenience...' on step 4", document.querySelector(".benefits ul li:last-child"))
              }
              if (document.querySelector(".dog_third p")) {
                visability("text 'Your hosts..' on step 4", document.querySelector(".dog_third p span:nth-child(2)"))
              }
              if (document.querySelector("p.mobile_descr")) {
                visability("text 'Your hosts..' on step 4", document.querySelector("p.mobile_descr span:nth-child(2)"))
              }
              let findBtn = setInterval(() => {
                if (document.querySelector(".button_input_name").classList.contains("step_third")) {
                  clearInterval(findBtn)
                  visability("btn Continue on step 'Enter your details to receive help for Dog’s behavior'", document.querySelector(".privacy_policy_wrap"))
                }
              }, 100)
              let findBtn2 = setInterval(() => {
                if (document.querySelector("#firstModal .visability_subs_submit")) {
                  clearInterval(findBtn2)
                  visability("btn Get workshop link", document.querySelector(".visability_subs_submit"))
                }
              }, 100)

              // click on btn My dog is a puppy (aged less than 1 year)
              document.querySelector(".start_step ul li:first-child").addEventListener("click", function (e) {
                e.preventDefault()

                document.querySelector("#firstModal .sec .puppy-popup-link #puppyCheck").click()
                pushDataLayer("click on btn My dog is a puppy (aged less than 1 year)")
                document.querySelector("#firstModal #puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
                document.querySelector("#firstModal .modal-dialog > .img_wrap").scrollIntoView({ block: "center", behavior: "smooth" })
                document.querySelector(".start_step")?.classList.remove("active_popup")
                document.querySelector(".popup_new")?.classList.add("active_popup")
                document.querySelector(".popup_new").style.display = "flex"
                if (!localStorage.getItem("is_visited")) {
                  localStorage.setItem("is_visited", true)
                }
              })

              // click on btn My dog is a young or adult dog (aged 1 year or more)
              document.querySelector(".start_step ul li:last-child").addEventListener("click", function (e) {
                e.preventDefault()

                document.querySelector("#firstModal .sec .popup_link:last-child #puppyCheck").click()
                pushDataLayer("click on btn My dog is a young or adult dog (aged 1 year or more)")
                document.querySelector("#firstModal #puppyContent .yesno .ysn.popup_link:nth-child(1) a").click()
                document.querySelector("#firstModal .modal-dialog > .img_wrap").scrollIntoView({ block: "center", behavior: "smooth" })
                document.querySelector(".start_step")?.classList.remove("active_popup")
                document.querySelector(".popup_new")?.classList.add("active_popup")
                document.querySelector(".popup_new").style.display = "flex"
                if (!localStorage.getItem("is_visited")) {
                  localStorage.setItem("is_visited", true)
                }
              })

              if (document.querySelector(".privacy_policy_wrap p a")) {
                if (innerWidth <= 768) {
                  document.querySelector(".privacy_policy_wrap br").remove()
                }
                let overlay = document.querySelector(".backdrop_popup")

                document.querySelector(".privacy_policy_wrap p a").addEventListener("click", (e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  pushDataLayer(`lick on Privacy policy ${e.target.getAttribute("step")}`)
                  onOpenPopup()
                })

                // click on btn close popup
                document.querySelector(".backdrop_popup .container_popup > svg")?.addEventListener("click", (e) => {
                  pushDataLayer("Click on btn close pop-up")
                  onClosePopup()
                })

                // click on overlay popup
                overlay.addEventListener("click", (e) => {
                  if (e.target.matches(".backdrop_popup")) {
                    pushDataLayer("Click on overlay pop-up")
                    onClosePopup()
                  }
                })

                function onOpenPopup() {
                  overlay.classList.remove("is_hidden")
                  document.querySelector(".backdrop_popup .container_popup").insertAdjacentHTML(
                    "beforeend",
                    `
                      <div class="content_popup">
                        <h2>Usage and Disclosure of Personal Information</h2>
                        <div>
                          <p>
                            We may use your Personal Information, and/or transfer your Personal Information for any legal purpose including, without limitation: (1) to deliver the Program and/or the
                            Products to you that you have requested; (2) to validate your compliance with the Terms & Conditions; (3) for content improvement and feedback purposes; (4) to reach you,
                            when necessary, regarding your use of our Website, our Program or our Products; and (5) to bring retail opportunities and promotional offers to you by email, direct mail,
                            telemarketing, and/or online banner advertising.
                          </p>
                          <p>
                            We will not disclose Personal Information collected from customers of our Website to third parties, except to companies with which we are actively affiliated, to
                            contractors we use to support our business (such as technical support, delivery services, and financial institutions) whereby we will require such third parties to treat
                            such Personal Information in accordance with this Privacy Policy, and in connection with the sale, assignment, or other transfer of the business of our Website to which
                            the information relates. We may hire third parties to review certain Personal Information to advise us on demographic and marketing related issues, but only after such
                            third parties have agreed to maintain the confidentiality, security, and integrity of any Personal Information contained in accordance with this Privacy Policy.
                          </p>
                          <p>
                            When your information is provided to third parties, these third parties may include providers of direct marketing services and applications. We or these third parties may
                            supplement the information we collect online with outside records to enhance our ability to serve you, to tailor our Website, our Program and our Products to you, and/or
                            to offer you targeted advertising and other opportunities to purchase products and services that we believe may be of interest to you.
                          </p>
                          <p>
                            We will NEVER share your credit card information with third parties unless you have given us explicit permission to do so, such as in order to fulfill a third party offer
                            that you have accepted from us. By permitting us to collect this information, you will be able to receive free information on products and services that may be of
                            interest to you. You also enable us to personalize your experience with us so that we can provide you with the highest quality of service. By submitting your email
                            address on our Website, you agree to receive email from us and our third party advertisers. We, and our third party advertisers, may maintain separate email lists for
                            different purposes. You may cancel your participation in any of these email lists at any time by clicking the opt out link or other unsubscribe option that is included in
                            the email. We only send emails to people who have voluntarily provided us with such contact information, either directly, or through a third party. We do not send
                            unsolicited commercial emails.
                          </p>
                          <span class="visability_last_text"></span>
                        </div>
                      </div>
                  `
                  )

                  if (document.querySelector(".content_popup")) {
                    pushDataLayer(`Shown pop-up`)
                  }

                  let findBtn3 = setInterval(() => {
                    if (document.querySelector(".visability_last_text")) {
                      clearInterval(clearInterval(findBtn3))
                      visability("Scroll pop-up", document.querySelector(".visability_last_text"))
                    }
                  }, 100)
                }

                function onClosePopup() {
                  overlay.classList.add("is_hidden")
                  setTimeout(() => {
                    document.querySelector(".content_popup").remove()
                  }, 400)
                }
              }
            }
          }, 10)

          // click on label checkbox
          document.querySelectorAll("#firstModal .custom_checkbox + label").forEach((el) => {
            el.addEventListener("click", function () {
              pushDataLayer(`${this.getAttribute("for")} selected`)
            })
          })

          let arr = []
          //   click on first btn Continue
          if (document.querySelector(".popup_new > div:last-child .popup_first .btn_continue")) {
            document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").addEventListener("click", function (el) {
              pushDataLayer(`Click on Continue on step "What unwanted behavior do you want to address?`)
              if (document.querySelector(".privacy_policy_wrap p a")) {
                document.querySelector(".privacy_policy_wrap p a").setAttribute("step", "2")
              }
              this.closest(".popup_first")?.classList.remove("active_popup")
              document.querySelector("#firstModal .modal-dialog > .img_wrap").scrollIntoView({ block: "center", behavior: "smooth" })

              document.querySelector(".popup_new > div:last-child .progress_bar > div p:first-child.active_btn_first").style.display = "none"
              document.querySelector("#firstModal .modal-body").style.display = "block"
              if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)")?.classList.contains("active_btn_first")) {
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)")?.classList.remove("active_btn_first")
              }
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2).active_btn_second").style.display = "flex"
              document.querySelector(".popup_new > div:last-child .popup_second")?.classList.add("active_popup")
              document.querySelector(".popup_new .img_wrap .dog_first").style.display = "none"
              document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
              document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)")?.classList.add("active_step")
              document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"

              document.querySelectorAll("#firstModal .custom_checkbox:checked + label").forEach((el) => {
                let text = el.textContent
                arr.push(text)
              })

              console.log(arr)

              if (localStorage.getItem("data-behavior")) {
                localStorage.removeItem("data-behavior")
                localStorage.setItem("data-behavior", arr)
              } else {
                localStorage.setItem("data-behavior", arr)
              }
            })
          }

          // //   btn back first
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)").addEventListener("click", function () {
            pushDataLayer(`Click on Previous on step "What unwanted behavior do you want to address?"`)

            document.querySelector(".start_step").classList.add("active_popup")
            document.querySelector(".popup_new").classList.remove("active_popup")
            document.querySelector(".popup_new").style.display = "none"

            if (document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").getAttribute("data-lst-dog")) {
              document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").removeAttribute("data-lst-dog", "2")
            }
          })

          if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)")) {
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").addEventListener("click", function (el) {
              //   btn back active_btn_second
              if (this?.classList.contains("active_btn_second")) {
                arr = []
                pushDataLayer(`Click on Previous on step "We'd love to know more about your dog. Introduce us!"`)
                this.style.display = "none"
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)").style.display = "flex"
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(1)")?.classList.add("active_btn_first")
                document.querySelector(".popup_new > div:last-child .popup_first")?.classList.add("active_popup")
                document.querySelector(".popup_new > div:last-child .popup_second")?.classList.remove("active_popup")
                document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
                document.querySelector(".popup_new .img_wrap .dog_first").style.display = "block"
                document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(2)")?.classList.remove("active_step")
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "1"
              }

              //   btn back active_btn_third
              if (this?.classList.contains("active_btn_third")) {
                pushDataLayer(`Click on Previous on step "Enter your details to receive help for Dod’s behavior"`)
                if (document.querySelector(".privacy_policy_wrap p a")) {
                  document.querySelector(".privacy_policy_wrap p a").setAttribute("step", "2")
                }
                this?.classList.remove("active_btn_third")
                this?.classList.add("active_btn_second")

                document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").setAttribute("data-lst-dog", "2")

                document.querySelector(".popup_new .img_wrap .dog_third").style.display = "none"
                document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"

                if (document.querySelector(".popup_new > div:last-child .popup_second > h2").classList.contains("step_three")) {
                  document.querySelector(".popup_new > div:last-child .popup_second > h2").classList.remove("step_three")
                }
                document.querySelector(".popup_new > div:last-child .popup_second > h2").textContent = "We'd love to know more about your dog. Introduce us!"
                document.querySelector("#firstModal .button_input_name").classList.remove("step_third")
                document.querySelector("#firstModal .button_input_name").classList.add("step_second")
                document.querySelector("#firstModal #dog-name").style.display = "flex"
                document.querySelector("#firstModal #subs-name-top-levels").style.display = "none"
                document.querySelector("#firstModal #subs-mobile-top-levels").style.display = "none"
                document.querySelector(".new_block_breed input").style.display = "block"
                if (document.querySelector("#firstModal #dog-name").value !== "") {
                  document.querySelector("#firstModal #dog-name-top-levels").style.display = "block"
                }
                if (document.querySelector(".new_block_breed input").value !== "") {
                  document.querySelector(".new_block_breed .label_breed").style.display = "block"
                }

                document.querySelector(".tooltip_box").style.display = "none"
                document.querySelector("#firstModal #subs-name").style.display = "none"
                document.querySelector("#firstModal #subs-mobile").style.display = "none"
                document.querySelector(`#firstModal .input_error_text.name`).style.display = "none"

                document.querySelector("#firstModal .modal-body").classList.remove("is_active")

                document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(3)")?.classList.remove("active_step")
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"
              }

              if (this?.classList.contains("active_btn_fourth")) {
                pushDataLayer(`Click on Previous on step "Discover how to eliminate Dog’s behavior problems today!"`)
                if (document.querySelector(".privacy_policy_wrap p a")) {
                  document.querySelector(".privacy_policy_wrap p a").setAttribute("step", "3")
                }
                this?.classList.remove("active_btn_fourth")
                this?.classList.add("active_btn_third")

                document.querySelector(".popup_new > div:last-child .popup_first .btn_continue").setAttribute("data-lst-dog", "2")

                document.querySelector("#firstModal .button_input_name.step_third").style.display = "flex"
                document.querySelector(".tooltip_box").style.display = "block"
                document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
                document.querySelector(".popup_new > div:last-child .popup_second > h2").style.display = "block"
                document.querySelector("#firstModal #subs-name").style.display = "flex"
                document.querySelector("#firstModal #subs-mobile").style.display = "flex"
                document.querySelector("#firstModal #subs-email").style.display = "none"
                document.querySelector("#firstModal #subs-email-top-levels").style.display = "none"
                document.querySelector("#firstModal #contact-submit").style.display = "none"
                document.querySelector(".last_step_title").style.display = "none"
                document.querySelector(".popup_new .img_wrap .dog_third").style.display = "none"
                if (document.querySelector("#firstModal #subs-mobile").value !== "") {
                  document.querySelector("#firstModal #subs-mobile-top-levels").style.display = "block"
                }
                document.querySelector("#firstModal #subs-name-top-levels").style.display = "block"
                document.querySelector(".benefits").style.display = "none"
                document.querySelector(".email_text").style.display = "none"
                document.querySelector("#firstModal .modal-body").classList.remove("is_active")

                if (innerWidth <= 768) {
                  document.querySelector(".mobile_descr").style.display = "none"
                  document.querySelector(".tooltip_mob").style.display = "none"
                }

                document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(4)")?.classList.remove("active_step")
                document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "3"
              }
            })
          }

          if (innerWidth <= 768) {
            document.querySelector(".start_step ul li:nth-child(1) img").src = "https://conversionratestore.github.io/projects/knineti/img/puppy_dog_mob.jpg"
            document.querySelector(".start_step ul li:nth-child(2) img").src = "https://conversionratestore.github.io/projects/knineti/img/adult_dog_mob.jpg"

            let s = setInterval(() => {
              if (document.querySelector(".progress_bar")) {
                clearInterval(s)
                document.querySelector(".progress_bar")?.after(document.querySelector(".popup_new .img_wrap"))

                document.querySelector("img.dog_first").src = "https://conversionratestore.github.io/projects/knineti/img/dog_select_problem_mob.jpg"
                document.querySelector("img.dog_second").src = "https://conversionratestore.github.io/projects/knineti/img/dog_breed_block_mob.jpg"
                document.querySelector(".dog_third img").src = "https://conversionratestore.github.io/projects/knineti/img/dog_last_block_mob.jpg"
              }
            }, 10)
          }

          //FORM
          document.querySelector("#firstModal #subs-name").placeholder = "Enter your name"
          document.querySelector("#firstModal #dog-name").placeholder = "Enter your dog’s name"
          document.querySelector("#firstModal #subs-email").placeholder = "Enter your email"
          document.querySelector("#firstModal #subs-mobile").placeholder = "Enter your сontact number"
          document.querySelector("#firstModal #contact-submit").textContent = "Get workshop link"
          document.querySelector("#firstModal #dog-name-top-levels").textContent = "Dog’s name"
          document.querySelector("#firstModal #subs-name-top-levels").textContent = "Your name"
          document.querySelector("#firstModal #subs-name").tabIndex = "0"
          document.querySelector("#firstModal #dog-name").tabIndex = "0"
          document.querySelector("#firstModal #subs-email").tabIndex = "0"
          document.querySelector("#firstModal #subs-mobile").tabIndex = "0"
          document.querySelector("#firstModal #contact-submit").tabIndex = "0"

          document
            .querySelector(`#firstModal input[name='dog_name']`)
            .insertAdjacentHTML("afterend", `<span class="input_error_text dog_name">Please enter Your Dog’s name without spaces, numbers or special characters</span>`)

          document
            .querySelector(`#firstModal input[name='first_name']`)
            .insertAdjacentHTML("afterend", `<span class="input_error_text name">Please enter Your name without spaces, numbers or special characters</span>`)

          document.querySelector("#firstModal #subs-email")?.insertAdjacentHTML("afterend", `<div class="email_text"><p>We’ll email you the link for the workshop</p></div>`)
          // create new element popup finalForm -> input name, email, number

          if (document.querySelector("#firstModal form .form-group")) {
            //   value btn main submit
            document.querySelector("#firstModal #contact-submit").value = "Get workshop link"

            //   create btn last continue
            document.querySelector("#firstModal form .form-group > div:last-child").insertAdjacentHTML("beforebegin", buttonInputName)
          }

          if (document.querySelector("#firstModal .button_input_name")) {
            document.querySelector("#firstModal .button_input_name").addEventListener("click", (e) => {
              if (e.target.classList.contains("step_second")) {
                document.querySelector("#firstModal .modal-dialog > .img_wrap").scrollIntoView({ block: "center", behavior: "smooth" })
                validationDogNameForm("#firstModal")
              }

              if (e.target.classList.contains("step_third")) {
                document.querySelector("#firstModal .modal-dialog > .img_wrap").scrollIntoView({ block: "center", behavior: "smooth" })
                validationNameForm("#firstModal")
              }
            })
          }

          // click on btn Get workshop link clicked
          if (document.querySelector("#firstModal #contact-submit")) {
            document.querySelector("#firstModal #contact-submit").addEventListener("click", function () {
              pushDataLayer("Get workshop link clicked")
            })
          }

          if (document.querySelector("#firstModal #dog-name")) {
            getEventInput("#dog-name")
          }
          if (document.querySelector(".new_block_breed input")) {
            getEventInput(".new_block_breed input")
          }
          if (document.querySelector("#firstModal #subs-name")) {
            getEventInput("#subs-name")
          }
          if (document.querySelector("#firstModal #subs-mobile")) {
            getEventInput("#subs-mobile")
          }
          if (document.querySelector("#firstModal #subs-email")) {
            getEventInput("#subs-email")
          }

          function getEventInput(name) {
            document.querySelector(`#firstModal ${name}`).addEventListener("click", (el) => {
              pushDataLayer(`Click input ${el.target.getAttribute("name")}`)
            })
          }

          if (document.querySelector(".new_block_breed")) {
            document.querySelector(".new_block_breed input#breedDog").addEventListener("input", (e) => {
              console.log(e)
              if (e.target.value !== "") {
                document.querySelector(".label_breed").style.display = "block"
              } else {
                document.querySelector(".label_breed").style.display = "none"
              }
            })
          }
        }
      }, 10)

      function scrollMistakeVar() {
        if (document.querySelector(".input_error_text")) {
          document.querySelectorAll(".input_error_text").forEach((el) => {
            el.scrollIntoView({ block: "center", behavior: "smooth" })
          })
        }
      }

      // validate formu
      function validationDogNameForm(parent) {
        let inputDogName = document.querySelector(`${parent} input[name='dog_name']`).value.match(/^[a-zA-Z]+$/)
        pushDataLayer(`Click on Continue on step "We'd love to know more about your dog. Introduce us!"`)
        if (document.querySelector(".privacy_policy_wrap p a")) {
          document.querySelector(".privacy_policy_wrap p a").setAttribute("step", "3")
        }

        // dog_name
        if (inputDogName === null) {
          document.querySelector(`${parent} input[name='dog_name']`)?.classList.add("input_error")
          document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "block"
          scrollMistakeVar()
        } else {
          document.querySelector(`${parent} input[name='dog_name']`)?.classList.remove("input_error")
          document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "none"
        }

        if (document.querySelector(`${parent} input[name='dog_name'].input_error`) === null && parent === `#firstModal`) {
          if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.contains("active_btn_second")) {
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.remove("active_btn_second")
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.add("active_btn_third")
          }
          document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(3)")?.classList.add("active_step")
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "3"

          document.querySelector(".new_block_breed input").style.display = "none"
          document.querySelector("#firstModal #dog-name").style.display = "none"
          document.querySelector("#firstModal #dog-name-top-levels").style.display = "none"

          if (document.querySelector("#firstModal #subs-name").value !== "") {
            document.querySelector("#firstModal #subs-name-top-levels").style.display = "block"
          }
          if (document.querySelector("#firstModal #subs-mobile").value !== "") {
            document.querySelector("#firstModal #subs-mobile-top-levels").style.display = "block"
          }
          document.querySelector(".new_block_breed .label_breed").style.display = "none"

          document.querySelector("#firstModal #subs-name").style.display = "flex"
          document.querySelector("#firstModal #subs-mobile").style.display = "flex"
          document.querySelector(".tooltip_box").style.display = "block"

          setTimeout(() => {
            document.querySelector("#firstModal .button_input_name").classList.remove("step_second")
            document.querySelector("#firstModal .button_input_name").classList.add("step_third")
          }, 100)

          localStorage.setItem("dogName", document.querySelector("#firstModal #dog-name").value)
          document.querySelector(".popup_new > div:last-child .popup_second > h2").classList.add("step_three")

          if (localStorage.getItem("dogName")) {
            document.querySelector(".popup_new > div:last-child .popup_second > h2").innerHTML = `Enter your details to receive help for <span>${localStorage.getItem(
              "dogName"
            )}’s</span> behavior`
            if (document.querySelector(".last_step_title h2 .your_dog_name")) {
              document.querySelector(".last_step_title h2 .your_dog_name").textContent = `${localStorage.getItem("dogName")}’s`
            }
          }
        }
      }

      function validationNameForm(parent) {
        let inputValueName = document.querySelector(`${parent} input[name='first_name']`).value.match(/^[a-zA-Z]+$/)
        pushDataLayer(`Click on Continue on step "Enter your details to receive help for Dog’s behavior"`)
        if (document.querySelector(".privacy_policy_wrap p a")) {
          document.querySelector(".privacy_policy_wrap p a").setAttribute("step", "4")
        }

        // first_name
        if (inputValueName === null) {
          document.querySelector(`${parent} input[name='first_name']`)?.classList.add("input_error")
          document.querySelector(`${parent} .input_error_text`).style.display = "block"
          scrollMistakeVar()
        } else {
          document.querySelector(`${parent} input[name='first_name']`)?.classList.remove("input_error")
          document.querySelector(`${parent} .input_error_text`).style.display = "none"
        }

        if (document.querySelector(`${parent} input[name='first_name'].input_error`) === null && parent === `#firstModal`) {
          if (document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.contains("active_btn_third")) {
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.remove("active_btn_third")
            document.querySelector(".popup_new > div:last-child .progress_bar > div p:nth-child(2)").classList.add("active_btn_fourth")
          }
          document.querySelector(".popup_new > div:last-child .progress_bar > ul li:nth-child(4)")?.classList.add("active_step")
          document.querySelector(".popup_new > div:last-child .progress_bar > div p:last-child span:nth-child(1)").textContent = "4"

          document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
          document.querySelector(".popup_new > div:last-child .popup_second > h2").style.display = "none"
          document.querySelector("#firstModal .button_input_name.step_third").style.display = "none"
          document.querySelector("#firstModal #subs-name").style.display = "none"
          document.querySelector("#firstModal #subs-mobile").style.display = "none"
          document.querySelector("#firstModal #subs-name-top-levels").style.display = "none"
          document.querySelector("#firstModal #subs-mobile-top-levels").style.display = "none"
          document.querySelector(".tooltip_box").style.display = "none"
          document.querySelector("#firstModal .modal-body").classList.add("is_active")
          document.querySelector(".last_step_title").style.display = "block"
          document.querySelector(".popup_new .img_wrap .dog_third").style.display = "block"
          document.querySelector("#firstModal #subs-email").style.display = "flex"
          document.querySelector("#firstModal #contact-submit").style.display = "flex"
          document.querySelector("#firstModal #contact-submit").insertAdjacentHTML("afterend", `<span class="visability_subs_submit"></span>`)
          document.querySelector(".email_text").style.display = "block"
          document.querySelector(".benefits").style.display = "block"

          if (innerWidth <= 768) {
            document.querySelector("p.mobile_descr").style.display = "block"
            document.querySelector(".tooltip_mob").style.display = "flex"
          }

          if (document.querySelector("#firstModal #subs-email").value !== "") {
            document.querySelector("#firstModal #subs-email-top-levels").style.display = "block"
          }
        }
      }

      let tippyRun = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
          clearInterval(tippyRun)
          document.querySelectorAll("[data-title]").forEach((el) => {
            if (innerWidth <= 768) {
              tippy(el, {
                content: el.getAttribute("data-title"),
                trigger: "click",
                placement: "bottom",
                appendTo: function () {
                  return document.querySelector(".tooltip_box")
                },
                onTrigger(e) {
                  pushDataLayer(`Clicks on hints 'You'll receive the workshop link as well as other key training materials'`)
                },
                onShown(e) {
                  pushDataLayer(`Shown 'You'll receive the workshop link as well as other key training materials'`)
                },
              })
            } else {
              tippy(el, {
                content: el.getAttribute("data-title"),
                placement: "bottom",
                appendTo: function () {
                  return document.querySelector(".tooltip_box")
                },
                onTrigger(e) {
                  pushDataLayer(`Hover on hints 'You'll receive the workshop link as well as other key training materials'`)
                },
                onShown(e) {
                  pushDataLayer(`Shown 'You'll receive the workshop link as well as other key training materials'`)
                },
              })
            }
          })
        }
      }, 500)

      let tippyRun2 = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("[data-tolltipMob]")) {
          clearInterval(tippyRun2)
          document.querySelectorAll("[data-tolltipMob]").forEach((el) => {
            tippy(el, {
              content: tooltipMobBox,
              trigger: "click",
              placement: "bottom",
              appendTo: function () {
                return document.querySelector(".tooltip_mob")
              },
              onTrigger(e) {
                pushDataLayer(`Clicks on hints 'View workshop details'`)
              },
              onShown(e) {
                pushDataLayer(`Shown 'View workshop details'`)
              },
            })
          })
        }
      }, 500)

      function visability(event, elem) {
        const options = {
          root: null,
          threshold: 1.0,
        }

        let observerNewHeader = new IntersectionObserver((entries) => {
          if (!entries[0].isIntersecting) return
          pushDataLayer(`${event} visability`)

          observerNewHeader.disconnect()
        })

        observerNewHeader.observe(elem, options)
      }

      pushDataLayer("loaded")
      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record)

          clarity("set", "new_reg_hyp3", "variant_1")
        }
      }, 200)
      document.querySelector(".exp")?.remove()
    }
  }, 800)
}

//
if (window.location.pathname === "/mc/") {
  let startFuncMc = setInterval(() => {
    if (document.querySelector("#player")) {
      clearInterval(startFuncMc)

      let eventVar = "desktop"

      if (window.innerWidth <= 768) {
        eventVar = "mobile"
      }

      function pushDataLayer(actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || []
        if (labelDataLayer) {
          console.log(actionDataLayer + " : " + labelDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: New reg Hyp3 ${eventVar}`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: New reg Hyp3 ${eventVar}`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      let style = /*html */ `
      <style>
        #myHeaderr .top_menu_box{
            display: none !important;
        }
        #myHeaderr{
            padding: 0 !important;
        }
        /* sticky_new_header*/
        .sticky_new_header{
            background: #FFFFFF;
            border-bottom: 3px solid #794E15;
            text-align: center;
        }
        .sticky_new_header p.special_offer_text{
            background: #794E15;
            padding: 8px;
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF !important;
            margin: 0;
        }
        .sticky_new_header > div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
        .sticky_new_header .last_price_text{
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-decoration-line: line-through;
            color: rgb(128 128 128 / 75%) !important;
            margin: 0;
        }
        .sticky_new_header .new_price_text{
            font-weight: 700;
            font-size: 32px;
            line-height: 24px;
            color: #173775 !important;
            margin: 0 16px 0 8px;
        }
        .sticky_new_header .you_save_text{
            display: flex;
            align-items: center;
            text-align: center;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            padding: 4px 8px;
            margin: 0;
            background: #794E15;
            border-radius: 4px;
        }
        .sticky_new_header button.new_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 48px;
            max-width: 235px;
            width: 100%;
            outline: none;
            border: none;
            background: #173775;
            box-shadow: 5px 5px 10px rgb(39 32 32 / 80%);
            border-radius: 10px;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF !important;
            transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
            margin: 0 0 0 24px;
        }
        [data-enrollbtn] svg{
            margin-left: 8px;
        }
        .sticky_new_header button.new_btn:hover,
        .sticky_new_header button.new_btn:focus{
            box-shadow: unset;
        }
         @media (max-width: 768px) {
            .sticky_new_header{
                border-bottom: 2px solid #794E15;
            }
            .sticky_new_header p.special_offer_text{
              padding: 6px;
              font-size: 14px;
            }
            .sticky_new_header > div{
                flex-wrap: wrap;
            }
            .sticky_new_header .new_price_text{
              font-size: 28px;
              line-height: 24px;
              margin: 0 8px;
            }
            .sticky_new_header .last_price_text{
                margin: 0 0 0 35px;
            }
            p.special_offer_text{
                padding: 6px;
                font-weight: 700;
                font-size: 14px;
            }
            .sticky_new_header button.new_btn{
              margin: 16px 0 0;
            }
         }
          @media (max-width: 280px) {
            .sticky_new_header .last_price_text{
                margin: 0;
            }
          }
      </style>
      `

      let notFirstVisitStickyBlock = /*html */ ` 
        <div class="sticky_new_header">
          <p class="special_offer_text">Special Offer - Ends <span class="count_days">7</span> <span class="text_days">days</span></p>
          <div>
              <span class="last_price_text">$497</span>
              <span class="new_price_text">$297</span>
              <span class="you_save_text">You save $200</span>
              <button data-enrollbtn='(sticky header)' class="new_btn enroll_now_btn_new">EnRoll now 
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.741797 8.23307L3.97513 4.99974L0.741797 1.76641C0.416797 1.44141 0.416797 0.916406 0.741797 0.591406C1.0668 0.266406 1.5918 0.266406 1.9168 0.591406L5.7418 4.41641C6.0668 4.74141 6.0668 5.26641 5.7418 5.59141L1.9168 9.4164C1.5918 9.7414 1.0668 9.7414 0.741797 9.4164C0.42513 9.0914 0.416797 8.55807 0.741797 8.23307Z" fill="white"/>
                </svg>
              </button>
          </div>
        </div>
    `
      document.head.insertAdjacentHTML("beforeend", style)
      document.querySelector("#myHeaderr").insertAdjacentHTML("beforeend", notFirstVisitStickyBlock)

      getEndsDays()

      //getEndsDays
      function getEndsDays() {
        if (document.querySelector("#myHeaderr h4.box_text")) {
          let paramsLocation = new URLSearchParams(window.location.search)
          let dQueryDate = atob(paramsLocation.get("d"))
          let dsp = dQueryDate.split("-")

          let today = new Date(new Date().setDate(new Date().getDate())).toDateString().split(" ")
          let dayStart = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate())).toDateString().split(" ")
          let dayFirst = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 1)).toDateString().split(" ")
          let daySecond = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 2)).toDateString().split(" ")
          let dayThird = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 3)).toDateString().split(" ")
          let dayFourth = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 4)).toDateString().split(" ")
          let dayFifth = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 5)).toDateString().split(" ")
          let daySixth = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 6)).toDateString().split(" ")
          let daySeventh = new Date(new Date(dsp[0], dsp[1] - 1, dsp[2]).setDate(new Date(dsp[0], dsp[1] - 1, dsp[2]).getDate() + 7)).toDateString().split(" ")
          let todayFormat = `${today[0]}${today[1]}${today[2]}${today[3]}`
          let dayStartFormat = `${dayStart[0]}${dayStart[1]}${dayStart[2]}${dayStart[3]}`
          let dayFirstFormat = `${dayFirst[0]}${dayFirst[1]}${dayFirst[2]}${dayFirst[3]}`
          let daySecondFormat = `${daySecond[0]}${daySecond[1]}${daySecond[2]}${daySecond[3]}`
          let dayThirdFormat = `${dayThird[0]}${dayThird[1]}${dayThird[2]}${dayThird[3]}`
          let dayFourthFormat = `${dayFourth[0]}${dayFourth[1]}${dayFourth[2]}${dayFourth[3]}`
          let dayFifthFormat = `${dayFifth[0]}${dayFifth[1]}${dayFifth[2]}${dayFifth[3]}`
          let daySixthFormat = `${daySixth[0]}${daySixth[1]}${daySixth[2]}${daySixth[3]}`
          let daySeventhFormat = `${daySeventh[0]}${daySeventh[1]}${daySeventh[2]}${daySeventh[3]}`

          if (todayFormat === dayStartFormat) {
            days = "in 7"
            textDays = "days"
          } else if (todayFormat === dayFirstFormat) {
            days = "in 6"
            textDays = "days"
          } else if (todayFormat === daySecondFormat) {
            days = "in 5"
            textDays = "days"
          } else if (todayFormat === dayThirdFormat) {
            days = "in 4"
            textDays = "days"
          } else if (todayFormat === dayFourthFormat) {
            days = "in 3"
            textDays = "days"
          } else if (todayFormat === dayFifthFormat) {
            days = "in 2"
            textDays = "days"
          } else if (todayFormat === daySixthFormat) {
            days = "tomorrow"
            textDays = ""
          } else if (todayFormat === daySeventhFormat) {
            days = "today"
            textDays = ""
          }
          //

          if (document.querySelector(".sticky_new_header")) {
            document.querySelectorAll(".count_days").forEach((el) => {
              el.textContent = days
            })
            document.querySelectorAll(".text_days").forEach((el) => {
              el.textContent = textDays
            })

            document.querySelectorAll("[data-enrollbtn]").forEach((el) => {
              el.addEventListener("click", (e) => {
                e.preventDefault()
                pushDataLayer(`Enroll now ${el.getAttribute("data-enrollbtn")} clicked`)
                document.querySelector("#myHeaderr a.enroll_now_btn").click()
              })
            })

            //observer
            const options = {
              root: null,
              threshold: 0.5,
            }

            let observerNewHeader = new IntersectionObserver((entries) => {
              if (!entries[0].isIntersecting) return
              pushDataLayer(`View element on screen`, `Special offer - ends ${days} ${textDays} (header)`)
              observerNewHeader.disconnect()
            })

            observerNewHeader.observe(document.querySelector(".sticky_new_header"), options)
          }
        }
      }

      pushDataLayer("loaded")
      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record)

          clarity("set", "new_reg_hyp3", "variant_2")
        }
      }, 200)
      document.querySelector(".exp")?.remove()
    }
  })
}
