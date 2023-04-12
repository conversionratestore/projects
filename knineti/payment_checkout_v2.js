let paymentCheckout = setInterval(() => {
  if (document.querySelector(".payment_inform_box")) {
    clearInterval(paymentCheckout);

    let eventVar = "desktop";

    if (window.innerWidth <= 768) {
      eventVar = "mobile";
    }

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Installment payment v2 ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Installment payment v2 ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    let paymentCheckoutStyle = /*html */ `
        <style>
          .payment_inform_box .payment_plan_wrapp .input_wrapper > div >input:checked + label .radio_style .ellipse{
            width: 8.2px;
            height: 8.2px;
          }
          .overlay_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(0 0 0 / 50%);
            display: flex;
            overflow-y: auto;
            z-index: 1000000000;
            transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
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
            padding: 24px;
            margin: auto;
            background: #ffffff;
            transition: all 0.5s ease 0s;
            border-radius: 6px;
          }
          .overlay_popup .container_popup > svg {
            position: absolute;
            top: 12px;
            right: 12px;
            outline: none;
            cursor: pointer;
          }
          .content_popup h2 {
            font-weight: 700;
            font-size: 18px !important;
            line-height: 24px;
            color: #193973;
            margin: 0 0 12px !important;
            text-align: left;
          }
          .content_popup > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #4b4b4b !important;
            margin: 12px 0 24px !important;
          }
          .content_popup button {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.01em;
            text-transform: uppercase;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #193973;
            box-shadow: 5px 5px 10px #272020;
            border-radius: 6px;
            max-width: 303px;
            height: 52px;
            width: 100%;
            margin: 24px auto 0;
            outline: unset;
            border: unset;
            transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
          }
          .content_popup button:hover {
            box-shadow: unset;
          }
          .list_guarantee {
            background: #e9f1f9;
            border-radius: 4px;
            padding: 12px 12px 12px 22px;
            list-style: none;
            margin: 0 !important;
          }
          .list_guarantee li {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #193973;
            position: relative;
          }
          .list_guarantee li + li {
            margin-top: 6px;
          }
          .list_guarantee li::before {
            content: "";
            position: absolute;
            width: 4px;
            height: 4px;
            background: #193973;
            border-radius: 50%;
            left: -12px;
            top: 50%;
            transform: translateY(-50%);
          }
          .list_payment {
            margin: 0 !important;
            list-style: none;
            padding: 0 0 0 52px;
          }
          .list_payment li {
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            color: #193973 !important;
            position: relative;
            min-height: 40px;
            display: flex;
            align-items: center;
          }
          .list_payment li::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            background: url(https://conversionratestore.github.io/projects/knineti/img/list_payment_img1.svg) no-repeat center center;
            border-radius: 50%;
            left: -52px;
            top: 50%;
            transform: translateY(-50%);
          }
          .list_payment li:nth-child(2):before {
            background: url(https://conversionratestore.github.io/projects/knineti/img/list_payment_img2.svg) no-repeat center center;
          }
          .list_payment li:nth-child(3):before {
            background: url(https://conversionratestore.github.io/projects/knineti/img/list_payment_img3.svg) no-repeat center center;
          }
          .list_payment li:nth-child(4):before {
            background: url(https://conversionratestore.github.io/projects/knineti/img/list_payment_img4.svg) no-repeat center center;
          }
          .list_payment li + li {
            margin-top: 20px;
          }
          .list_payment li p {
            position: absolute;
            display: flex;
            flex-direction: column;
            bottom: -24px;
            left: -33px;
          }
          .list_payment li:last-child p {
            display: none;
          }
          .list_payment li p span {
            width: 2.5px;
            height: 2.5px;
            background: #734f22;
            border-radius: 50%;
          }
          .list_payment li p span + span {
            margin-top: 4px;
          }

          .payment_inform_box .input_wrapper > div label .radio_style + span {
            display: none !important;
          }
          .payment_plan_wrapp.payment_plan .input_wrapper {
            display: flex !important;
            flex-direction: column-reverse;
            padding: 0;
            border: unset;
          }
          .payment_inform_box li > div.input_wrapper > div:not(:last-child) {
            margin: 12px 0 0 !important;
          }
          .payment_inform_box .payment_plan_wrapp .input_wrapper > div label {
            background: #ffffff;
            border: 1px solid #dfe8f0;
            border-radius: 10px;
            padding: 16px;
          }
          .payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label {
            border-bottom: unset !important;
            border-radius: 10px 10px 0 0;
            padding-bottom: 13px;
          }
          .payment_inform_box .payment_plan_wrapp .input_wrapper > div > input:checked + label,
          .payment_inform_box .payment_plan_wrapp .input_wrapper > div > input:checked ~ .new_text_label {
            border: 1px solid #16377b;
          }
          .payment_var {
            background: #ffffff;
            border-radius: 10px 10px 0 0;
            margin: 0 auto -8px;
            padding: 12px 12px 20px;
            text-align: center;
            max-width: 345px !important;
            width: 100%;
          }
          .first_block .submit_btn input#submit {
            max-width: 345px !important;
          }
          .first_block .submit_btn input#submit_disabled{
            margin-bottom: 12px !important;
          }
          form > div.row:last-child > .col-md-12 .submit_btn{
            border: 1px dashed #DDE8F1;
            border-radius: 10px;
            max-width: 345px;
            margin: 0 auto !important;
            text-align: center;
            float: unset;
            padding: 0;
          }
          .payment_var p {
            margin: 0 !important;
            color: #16377b !important;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
          }
          .new_text_radio_btn {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #16377b;
          }
          .new_full_price {
            color: rgba(128, 128, 128, 1);
            text-decoration: line-through;
          }
          .new_your_price,
          .accent_var {
            font-weight: 700;
          }
          .text_var {
            display: flex;
            align-items: center;
          }
          .payment_inform_box li > div > p.discount_row {
            margin: 4px 0 0 !important;
            line-height: 167% !important;
          }
          .payment_inform_box li > div > p.saved_box {
            margin: 5px 0 0 auto !important;
            max-width: max-content;
            background: #992337;
            border-radius: 4px;
            padding: 3px 6px;
            font-weight: 700 !important;
            font-size: 12px !important;
            line-height: 16px !important;
            color: #ffffff !important;
            text-transform: unset !important;
          }
          .new_text_label {
            border: 1px solid #dfe8f0;
            border-top: unset !important;
            border-radius: 0 0 10px 10px;
          }
          .new_text_label .new_text_label_list {
            display: flex;
            justify-content: space-between;
            margin-bottom: 14px;
            padding: 0 21px !important;
          }
          .new_text_label .new_text_label_list .new_text_label_link {
            margin: 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
          }
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(1) {
            width: 10%;
          }
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(2) {
            width: 26%;
          }
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(3),
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(4) {
            width: 17%;
          }
          .new_text_label .new_text_label_list .new_text_label_link:not(:last-child)::after {
            content: "";
            position: absolute;
          }
          .new_text_label .new_text_label_list .new_text_label_link > span {
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #193973;
            margin-top: 8px;
          }
          .new_text_label .new_text_label_list .new_text_label_link .circle_wrapp {
            position: absolute;
            right: 0;
            top: 20px;
            display: flex;
          }
          .new_text_label .new_text_label_list .new_text_label_link .circle_wrapp span {
            width: 3.2px;
            height: 3px;
            background: #734f22;
            border-radius: 50%;
          }
          .new_text_label .new_text_label_list .new_text_label_link .circle_wrapp span + span {
            margin-left: 10px;
          }
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(1) .circle_wrapp {
            right: -70px;
          }
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(2) .circle_wrapp {
            right: -40px;
          }
          .new_text_label .new_text_label_list .new_text_label_link:nth-child(3) .circle_wrapp {
            right: -53px;
          }
          .new_text_label .block_back_guarantee_var {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #e9f1f9;
            padding: 11px 20px;
            gap: 8px;
            border-radius: 0 0 10px 10px;
          }
          .new_text_label .block_back_guarantee_var p {
            margin: 0 !important;
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            color: #193973 !important;
            position: relative;
          }
          .new_text_label .block_back_guarantee_var p:nth-child(1)::after {
            content: "";
            position: absolute;
            width: 4px;
            height: 4px;
            background: #193973;
            border-radius: 50%;
            right: -18px;
            top: 50%;
            transform: translateY(-50%);
          }
          .learn_more_box {
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-decoration-line: underline;
            color: #794e15;
            display: inline-flex;
            align-items: center;
          }
          .learn_more_box svg {
            margin-left: 4px;
          }
          .learn_more_box.mob_var,
          .block_back_guarantee_mob_var {
            display: none;
          }
          @media (max-width: 1175px) {
            .new_text_label .block_back_guarantee_var p:nth-child(1) {
              width: 43%;
            }
          }
          @media (min-width: 1150px) {
            .payment_plan_wrapp.payment_plan {
              margin-top: -85px;
            }
          }
          @media (max-width: 1080px) {
            .new_text_label .block_back_guarantee_var p:nth-child(1)::after {
              right: -2px;
            }
          }
          @media (max-width: 980px) {
            .new_text_label .block_back_guarantee_var p,
            .new_text_radio_btn {
              font-size: 13px;
            }
          }
          @media (max-width: 915px) {
            .new_text_label .block_back_guarantee_var p,
            .new_text_radio_btn {
              font-size: 12px;
            }
          }
          @media only screen and (min-width: 1111px) and (max-width: 1150px) {
            .payment_plan_wrapp.payment_plan {
              margin-top: -34px;
            }
            .new_text_radio_btn {
              font-size: 13px;
            }
          }
          @media (max-width: 1066px) {
            .text_var {
              display: unset;
            }
          }
          @media only screen and (min-width: 988px) and (max-width: 1111px) {
            .payment_plan_wrapp.payment_plan {
              margin-top: -85px;
            }
          }
          @media only screen and (min-width: 786px) and (max-width: 988px) {
            .payment_plan_wrapp.payment_plan {
              margin-top: -185px;
            }
          }
          @media (max-width: 768px) {
            .overlay_popup {
              padding: 20px 0;
            }
            .overlay_popup .container_popup {
              padding: 20px;
              max-width: 343px;
            }
            .content_popup > p {
              margin-bottom: 20px !important;
            }
            .list_payment li::before {
              top: 0;
              transform: unset;
            }
            .list_payment li p {
              bottom: -21px;
            }
            .list_payment li + li {
              margin-top: 16px;
            }
            .learn_more_box.mob_var {
              display: flex;
              margin: 5px 0 21px 37px;
              width: fit-content;
            }
            .new_text_label .new_text_label_list {
              padding-left: 38px !important;
              justify-content: flex-start;
            }
            .new_text_label .new_text_label_list .new_text_label_link .circle_wrapp span:nth-child(3),
            .new_text_label .new_text_label_list .new_text_label_link .circle_wrapp span:nth-child(4) {
              display: none;
            }
            .learn_more_box.desk_var,
            .new_text_label .block_back_guarantee_var,
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(2) {
              display: none;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(1) {
              width: 15%;
              margin-right: 54px !important;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(3){
              margin-right: 41px !important;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(3),
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(4) {
              width: 30%;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(1) .circle_wrapp {
              right: -52px;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(3) .circle_wrapp {
              right: -35px;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(4) .circle_wrapp {
              display: none;
            }
            body .payment_inform_box {
              margin-bottom: -6px !important;
            }
            .payment_inform_box li.paymen_method p.support_text {
              margin: 9px 0 23px !important;
            }
            .block_back_guarantee_mob_var {
              display: block;
              padding: 0 16px 0 38px;
            }
            .block_back_guarantee_mob_var > div {
              background: #e9f1f9;
              border-radius: 4px;
              padding: 10px 12px 10px 20px;
            }
            .block_back_guarantee_mob_var > div p {
              font-weight: 700;
              font-size: 14px;
              line-height: 24px;
              color: #193973 !important;
              margin: 0 !important;
              position: relative;
            }
            .block_back_guarantee_mob_var > div p::before {
              content: "";
              position: absolute;
              width: 4px;
              height: 4px;
              background: #193973;
              border-radius: 50%;
              top: 10px;
              left: -10px;
            }
            .block_back_guarantee_mob_var > div p + p {
              margin-top: 4px;
            }
            .block_back_guarantee_mob_var > div p span {
              font-weight: 400;
            }
            .payment_var {
              width: 100%;
              max-width: 100%;
            }
            .payment_inform_box .payment_plan_wrapp p.subtitle_text {
              margin-bottom: 12px !important;
            }
          }
          @media (max-width: 320px) {
            .overlay_popup .container_popup {
              max-width: 302px;
            }
            .list_guarantee li {
              font-size: 15px;
            }
            .new_text_radio_btn,
            .new_text_label .new_text_label_list .new_text_label_link > span,
            .block_back_guarantee_mob_var > div p,
            .payment_var p {
              font-size: 11px;
            }
            .new_text_label .new_text_label_list .new_text_label_link .circle_wrapp span + span {
              margin-left: 4px;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(1) .circle_wrapp {
              right: -35px;
            }
            .new_text_label .new_text_label_list .new_text_label_link:nth-child(3) .circle_wrapp {
              right: -24px;
            }
          }
        </style>
        `;

    // popup
    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="15.5" fill="white" stroke="#E8F1F9"/>
          <path d="M21 12.0071L19.9929 11L16 14.9929L12.0071 11L11 12.0071L14.9929 16L11 19.9929L12.0071 21L16 17.0071L19.9929 21L21 19.9929L17.0071 16L21 12.0071Z" fill="black"/>
          </svg>
          </div>
        </div>
`;

    let contentPopup = /*html */ `
        <div class="content_popup">
            <h2>3 interest-free monthly installments of $99</h2>
            <ul class="list_guarantee">
              <li>90 days unconditional money-back guarantee</li>
              <li>No credit agreement required</li>
              <li>No interest or borrowing fees</li>
              <li>No impact on your credit score</li>
            </ul>
            <p class="text_payment_visab">Pay by credit or debit card in 3 smaller payment amounts. Your card will be automatically charged the same as your initial installment amount after 30 and 60 days.</p>
            <ul class="list_payment">
              <li>Select the 3-month installment payment plan <p><span></span><span></span></p></li>
              <li>Enter your credit or debit card details <p><span></span><span></span></p></li>
              <li>Make your first payment <p><span></span><span></span></p></li>
              <li>Get immediate access to the Total Transformation Masterclass <p><span></span><span></span></p></li>
            </ul>
            <button class="complete_purchase_btn">Complete purchase</button>
        </div>
    `;

    document.head.insertAdjacentHTML("beforeend", paymentCheckoutStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);
    // document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup);

    if (document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec >input:checked") == null && !sessionStorage.getItem("data-checked")) {
      document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec >input").checked = true;
    }

    let price = +document.querySelector(".total_price").textContent.split("$")[1];
    let oldPrice = +document.querySelector(".total_actual").textContent.split("$")[1];
    let diffPrice = (oldPrice - price).toFixed(2);
    let percent = Math.floor(100 - (price * 100) / oldPrice);

    if (diffPrice) {
      document.querySelector(".discount_row").insertAdjacentHTML("beforebegin", `<p class="saved_box">You just saved $<span class="diff_price">${diffPrice}</span> (<span class="percent_var">${percent}</span>% off)</p>`);
    }

    document.querySelector("#payment_plan_id").textContent = "Choose Payment plan";
    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label span:nth-child(2)").textContent = "";
    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.onetime_sec label span:nth-child(2)").textContent = "";

    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label span:nth-child(2)")?.insertAdjacentHTML(
      "afterend",
      ` <div class="new_text_radio_btn">
      <span class="accent_var">3 interest-free monthly installments of</span>
      <span class="new_full_price">$${(oldPrice / 3).toFixed(2)}</span>
      <span class="new_your_price">$${(price / 3).toFixed(0)}</span>
      <span class="learn_more_box desk_var"
        >Learn more
        <svg class="svg_visab" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="svg_visab" fill-rule="evenodd" clip-rule="evenodd" d="M10.8 6C10.8 8.65097 8.65097 10.8 6 10.8C3.34903 10.8 1.2 8.65097 1.2 6C1.2 3.34903 3.34903 1.2 6 1.2C8.65097 1.2 10.8 3.34903 10.8 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.39961 3.6C5.39961 3.26863 5.66824 3 5.99961 3C6.33098 3 6.59961 3.26863 6.59961 3.6C6.59961 3.93137 6.33098 4.2 5.99961 4.2C5.66824 4.2 5.39961 3.93137 5.39961 3.6ZM5.39961 5.4C5.39961 5.06863 5.66824 4.8 5.99961 4.8C6.33098 4.8 6.59961 5.06863 6.59961 5.4V8.4C6.59961 8.73137 6.33098 9 5.99961 9C5.66824 9 5.39961 8.73137 5.39961 8.4V5.4Z" fill="#794E15" /></svg
      ></span>
    </div>`
    );

    if (!document.querySelector(".new_text_label")) {
      document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label")?.insertAdjacentHTML(
        "afterend",
        `<div class="new_text_label">
      <div class="new_text_label_list">
        <div class="new_text_label_link">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="18" fill="#DDE8F1" />
            <path d="M39.3205 32C40.2771 32.5523 41.5094 32.2276 41.9725 31.2249C43.3049 28.3402 44 25.1933 44 22C44 18.1382 42.9835 14.3444 41.0526 11C39.1217 7.65558 36.3444 4.87834 33 2.94744C30.2345 1.35077 27.1617 0.379313 23.9973 0.0908423C22.8973 -0.00943508 22 0.89543 22 2L22 20.8453C22 21.5598 22.3812 22.2201 23 22.5773L39.3205 32Z" fill="#193973" />
          </svg>
          <span><b>$99</b><br />Today</span>
          <p class="circle_wrapp"><span></span><span></span><span></span><span></span><span></span></p>
        </div>
        <div class="new_text_label_link">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="17" fill="#DDE8F1" />
            <path d="M6.84825 9.1694C8.60036 9.1694 10.0207 7.74904 10.0207 5.99693C10.0207 4.24483 8.60036 2.82446 6.84825 2.82446C5.09614 2.82446 3.67578 4.24483 3.67578 5.99693C3.67578 7.74904 5.09614 9.1694 6.84825 9.1694Z" fill="#193973" />
            <path
              d="M20.6103 12.5354C19.9922 11.9587 19.0235 11.9923 18.4467 12.6105L17.8272 13.2744L10.8486 12.0505C10.7389 10.9738 9.83191 10.1316 8.72556 10.1271L4.90382 10.1116C3.72027 10.1068 2.7569 11.0623 2.75206 12.246L2.74763 13.3418L4.63065 11.792L0.802015 16.8463C0.497762 17.2596 0.421063 17.7969 0.596609 18.2782L2.73122 24.1398C3.02424 24.9434 3.91149 25.3388 4.69373 25.0536C5.48763 24.7641 5.89729 23.8858 5.60748 23.0911L3.79369 18.1165L7.24539 13.4284C6.85903 14.3971 5.75243 17.172 5.36639 18.1401C6.11123 20.1829 6.22132 20.4847 6.98806 22.5878C7.25704 23.3253 7.23276 24.1442 6.88921 24.8819C6.55092 25.6084 5.94996 26.1597 5.19708 26.4342C4.68233 26.6219 4.12747 26.6678 3.57114 26.5554L3.14261 29.2363L0.135266 36.6475C-0.246178 37.5876 0.206715 38.6588 1.14679 39.0403C2.08695 39.4218 3.15811 38.9687 3.53956 38.0287L6.62557 30.4236C6.67782 30.2947 6.71531 30.1602 6.73729 30.0228L7.51987 25.1262L8.79685 30.0947L8.94869 37.3762C8.9696 38.3775 9.7877 39.1749 10.7844 39.1748C10.7973 39.1748 10.8105 39.1747 10.8234 39.1745C11.8377 39.1533 12.6427 38.314 12.6216 37.2997L12.4654 29.8054C12.4625 29.6639 12.4431 29.5234 12.408 29.3864L10.8157 23.191L10.8483 15.1586L18.1159 16.4332C18.6216 16.5219 19.1435 16.3512 19.4995 15.9697L20.6852 14.6989C21.2619 14.0807 21.2284 13.1121 20.6103 12.5354Z"
              fill="#193973"
            />
            <path d="M29.7342 24.2651C29.1384 24.0546 28.5351 24.2234 28.4269 24.5299C28.3186 24.8363 28.1342 26.8968 28.7302 27.1073C29.3262 27.3178 30.4769 25.5986 30.5852 25.2922C30.6934 24.9858 30.3303 24.4756 29.7342 24.2651Z" fill="#193973" />
            <path
              d="M41.7982 32.4544C41.6508 32.4006 41.4695 32.4605 41.3986 32.6548C41.184 33.2426 40.8516 33.8187 40.5095 34.2609C40.1237 34.7699 39.5448 35.3011 38.9516 35.5788C38.8815 34.7628 38.6716 33.4799 36.1731 31.6389C32.1493 28.9765 31.181 27.6691 31.181 27.6691C31.181 27.6691 30.9499 27.2644 30.6604 26.7654C30.0912 27.4857 29.3047 28.2331 28.44 27.9277C27.4879 27.5913 27.4548 26.3007 27.444 25.8765C27.4352 25.5303 27.4554 25.0942 27.5023 24.7368L27.4811 24.7418C26.6866 24.9306 26.0635 25.5465 25.8655 26.3386L24.9669 26.8887C24.8033 26.9888 24.6908 27.1546 24.6582 27.3434C24.6255 27.5324 24.6758 27.7262 24.7962 27.8754L25.3317 28.5392C25.7686 29.0808 26.5089 29.2722 27.1536 29.0101C27.4312 28.8974 27.7434 28.9053 28.0155 29.0307C28.2876 29.156 28.4958 29.3881 28.5908 29.6724C28.9579 30.772 29.551 32.445 30.0889 33.5L29.0933 38.0834C28.9877 38.5693 29.2961 39.0488 29.7819 39.1543C30.2669 39.2598 30.7471 38.9522 30.8528 38.4656L31.5944 35.0514C32.0312 35.2 32.5996 35.3174 33.2161 35.4333C33.3818 34.9447 33.6585 34.4856 34.0475 34.0967C34.2247 33.9195 34.512 33.9195 34.6893 34.0967C34.8725 34.28 34.8566 34.5712 34.6893 34.7385C33.9882 35.4396 33.7786 36.4481 34.0588 37.3338C33.0597 37.3338 33.3302 37.3338 33.0112 37.3338C32.514 37.3338 32.1109 37.7369 32.1109 38.2341C32.1109 38.7313 32.514 39.1344 33.0112 39.1344C36.8532 39.1344 36.746 39.1406 36.9979 39.0617C37.9256 38.771 38.6012 38.168 38.8609 37.2441C39.9462 36.7315 40.8044 35.8009 41.3266 34.7723C41.6247 34.1975 41.8773 33.4902 41.995 32.7929C42.0196 32.6504 41.9393 32.506 41.7982 32.4544Z"
              fill="#193973"
            />
          </svg>
          <span><b>Immediate access</b> <br />to the masterclass</span>
          <p class="circle_wrapp"><span></span><span></span><span></span><span></span><span></span></p>
        </div>
        <div class="new_text_label_link">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="18" fill="#DDE8F1" />
            <path d="M7.85786 36.1421C7.07682 36.9232 7.07144 38.1975 7.92017 38.9044C10.1762 40.7835 12.7912 42.1965 15.6137 43.0527C19.0759 44.1029 22.7436 44.2831 26.292 43.5773C29.8404 42.8715 33.16 41.3014 35.9567 39.0062C38.7533 36.711 40.9408 33.7616 42.3253 30.419C43.7099 27.0765 44.2487 23.4441 43.8941 19.8436C43.5394 16.2431 42.3023 12.7856 40.2923 9.77746C38.2823 6.76926 35.5615 4.30321 32.3707 2.59773C29.7694 1.2073 26.9213 0.357397 23.9973 0.0908438C22.8973 -0.00943373 22 0.895431 22 2L22 21.1716C22 21.702 21.7893 22.2107 21.4142 22.5858L7.85786 36.1421Z" fill="#193973" />
          </svg>
          <span><b>$99</b><br />in 30 days</span>
          <p class="circle_wrapp"><span></span><span></span><span></span><span></span><span></span></p>
        </div>
        <div class="new_text_label_link">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="21" fill="#E9F1F9" />
            <circle cx="22" cy="22" r="22" fill="#193973" />
            <path d="M13 22.5L19 27.5L30.5 16" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span><b>$99</b><br />in 60 days</span>
        </div>
      </div>
      <div class="block_back_guarantee_var">
        <p>Unconditional money-back guarantee</p>
        <p>No impact on your credit score</p>
      </div>
      <div class="block_back_guarantee_mob_var">
        <div>
          <p>Immediate access <span>to the masterclass</span></p>
          <p>Unconditional money-back guarantee</p>
          <p>No impact on your credit score</p>
        </div>
      </div>
      <span class="learn_more_box mob_var"
        >Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 6C10.8 8.65097 8.65097 10.8 6 10.8C3.34903 10.8 1.2 8.65097 1.2 6C1.2 3.34903 3.34903 1.2 6 1.2C8.65097 1.2 10.8 3.34903 10.8 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.39961 3.6C5.39961 3.26863 5.66824 3 5.99961 3C6.33098 3 6.59961 3.26863 6.59961 3.6C6.59961 3.93137 6.33098 4.2 5.99961 4.2C5.66824 4.2 5.39961 3.93137 5.39961 3.6ZM5.39961 5.4C5.39961 5.06863 5.66824 4.8 5.99961 4.8C6.33098 4.8 6.59961 5.06863 6.59961 5.4V8.4C6.59961 8.73137 6.33098 9 5.99961 9C5.66824 9 5.39961 8.73137 5.39961 8.4V5.4Z" fill="#794E15" /></svg
      ></span>
    </div>
      `
      );
    }

    document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper > div.onetime_sec label span:nth-child(2)")?.insertAdjacentHTML("afterend", `<div class="new_text_radio_btn onetime_var"><span class="new_full_price">$${oldPrice.toFixed(2)}</span> <span class="new_your_price">$${price.toFixed(0)}</span> <span>one-time payment</span></div>`);

    if ($("#submit").is(":visible")) {
      getLocalStor();
    }
    if (window.innerWidth <= 768) {
      if (document.querySelector(".check_step")) {
        document.querySelectorAll(".check_step ul li").forEach((e) => {
          e.addEventListener("click", (el) => {
            document.querySelector(".payment_var")?.remove();
          });
        });
      }

      arr = [];
      document.querySelectorAll(".btn_continue")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target.getAttribute("data-count") === "2") {
            if ($("#submit").is(":visible")) {
              getLocalStor();
            }
          }
        });
      });
    }

    function getLocalStor(el = "") {
      document.querySelector(".payment_var")?.remove();
      let class_var = "";
      let text = "";
      let textContent = "";
      if (window.innerWidth <= 768) {
        if (document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>input:checked+label[for='monthly_pay']")) {
          text = "monthly_pay";
        }
        if (document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>input:checked+label[for='onetime_pay']")) {
          text = "onetime_pay";
        }
      } else {
        if (el === "monthly_pay") {
          text = "monthly_pay";
        }
        if (el === "onetime_pay") {
          text = "onetime_pay";
        }
      }

      if (sessionStorage.getItem("data-payment")) {
        sessionStorage.removeItem("data-payment");
        sessionStorage.setItem("data-payment", text);
      } else {
        sessionStorage.setItem("data-payment", text);
      }

      if (sessionStorage.getItem("data-payment").includes("onetime_pay")) {
        textContent = `<b>$${price.toFixed(0)} one-time payment</b>`;
        class_var = "onetime_pay_var";
      } else {
        textContent = `<b>3 interest-free monthly installments of $${(price / 3).toFixed(0)}</b><br>(immediate access today, pay the rest later)`;
        class_var = "monthly_pay_var";
      }

      document.querySelector("body .submit_btn")?.insertAdjacentHTML("afterbegin", `<div class="payment_var"><p class=${class_var}>${textContent}</p></div>`);

      // visibility
      if (document.querySelector(".payment_var")) {
        let obs = new IntersectionObserver(visibility1, {
          threshold: 1,
        });

        let int = setInterval(() => {
          if (document.querySelector(".onetime_pay_var")) {
            clearInterval(int);
            obs.observe(document.querySelector(".onetime_pay_var"));
          }
        }, 100);

        let int2 = setInterval(() => {
          if (document.querySelector(".monthly_pay_var")) {
            clearInterval(int2);
            obs.observe(document.querySelector(".monthly_pay_var"));
          }
        }, 100);

        function visibility1(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              if (i.target.classList.contains("onetime_pay_var") && sessionStorage.getItem("data-plan") !== "onetime_pay") {
                pushDataLayer("Selected plan visibility", `${price.toFixed(0)}`);
                sessionStorage.setItem("data-plan", "onetime_pay");
              }

              if (i.target.classList.contains("monthly_pay_var") && sessionStorage.getItem("data-plan") !== "monthly_pay") {
                pushDataLayer("Selected plan visibility", `${(price / 3).toFixed(0)}`);
                sessionStorage.setItem("data-plan", "monthly_pay");
              }

              obs.unobserve(i.target);
            }
          });
        }
      }
    }

    // Choose payment plan Click
    document.querySelectorAll(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>label").forEach((el) => {
      el.addEventListener("click", (e) => {
        sessionStorage.setItem("data-checked", "onetime_pay");
        if (e.currentTarget.getAttribute("for") === "onetime_pay") {
          pushDataLayer("Choose payment plan Click", `${price.toFixed(0)}`);
          getLocalStor("onetime_pay");
        }
        if (e.currentTarget.getAttribute("for") === "monthly_pay" && !e.target.classList.contains("learn_more_box") && !e.target.classList.contains("svg_visab")) {
          pushDataLayer("Choose payment plan Click", `${(price / 3).toFixed(0)}`);
          getLocalStor("monthly_pay");
        }
      });
    });

    // visibility
    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    });

    obs.observe(document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>label[for='onetime_pay']"));
    obs.observe(document.querySelector(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>label[for='monthly_pay']"));
    obs.observe(document.querySelector(".saved_box"));

    let int3 = setInterval(() => {
      if (document.querySelector(".text_payment_visab")) {
        clearInterval(int3);
        obs.observe(document.querySelector(".text_payment_visab"));
      }
    }, 100);

    let int4 = setInterval(() => {
      if (document.querySelector(".complete_purchase_btn")) {
        clearInterval(int4);
        obs.observe(document.querySelector(".complete_purchase_btn"));
      }
    }, 100);

    function visibility(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          if (i.target.classList.contains("saved_box")) {
            pushDataLayer("Visibility info 'You just saved..'");
          }
          if (i.target.classList.contains("complete_purchase_btn")) {
            pushDataLayer("View second half of popup", "Popup: 3 interest-free monthly installments of $99");
          }
          if (i.target.classList.contains("text_payment_visab")) {
            pushDataLayer("View first half of popup", "Popup: 3 interest-free monthly installments of $99");
          }
          if (i.target.getAttribute("for") === "onetime_pay") {
            pushDataLayer("Choose payment plan visibility", `${price.toFixed(0)}`);
          }
          if (i.target.getAttribute("for") === "monthly_pay") {
            pushDataLayer("Choose payment plan visibility", `${(price / 3).toFixed(0)}`);
          }

          obs.unobserve(i.target);
        }
      });
    }

    if (document.querySelector(".overlay_popup")) {
      document.querySelectorAll(".learn_more_box").forEach((el) => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          pushDataLayer("Learn more", "3 interest-free monthly installments of $99");
          onOpenPopup();
        });
      });

      let overlay = document.querySelector(".overlay_popup"),
        containerPopup = overlay.querySelector(".container_popup"),
        btnClose = overlay.querySelector("svg"),
        scroll = calcScroll();

      btnClose.addEventListener("click", (e) => {
        pushDataLayer("Close popup", "Popup: 3 interest-free monthly installments of $99");
        onClosePopup();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target.matches(".overlay_popup")) {
          pushDataLayer("Close popup overlay", "Popup: 3 interest-free monthly installments of $99");
          onClosePopup();
        }
      });

      function onClosePopup() {
        overlay.classList.add("is_hidden");
        document.body.style.overflow = "unset";
        document.body.style.marginRight = `0px`;
        setTimeout(() => {
          document.querySelector(".content_popup")?.remove();
        }, 400);
      }
      function onOpenPopup() {
        overlay.classList.remove("is_hidden");
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
        if (!document.querySelector(".overlay_popup .content_popup")) {
          containerPopup?.insertAdjacentHTML("beforeend", contentPopup);
        }

        if (document.querySelector(".overlay_popup .content_popup")) {
          document.querySelector(".content_popup button").addEventListener("click", () => {
            pushDataLayer("Complete purchase", "Popup: 3 interest-free monthly installments of $99");
            onClosePopup();
          });
        }
      }
    }

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

    pushDataLayer("loaded");
    const recordMF = setInterval(() => {
      if (typeof window._mfq === "object") {
        clearInterval(recordMF);
        window._mfq.push(["setVariable", "installment_payment_v2", "var1"]);
      }
    }, 200);
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "installment_payment_v2", "variant_1");
      }
    }, 200);
    document.querySelector(".exp")?.remove();
  }
}, 500);
