if (window.location.pathname === "/enroll/") {
  let startEnroll = setInterval(() => {
    if (document.querySelector(".payment_inform_box")) {
      clearInterval(startEnroll);

      let eventVar = "desktop";

      if (window.innerWidth <= 768) {
        eventVar = "mobile";
      }
      function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
          });
        }
      }

      let scriptPopper = document.createElement("script");
      scriptPopper.src = "https://unpkg.com/popper.js@1";
      scriptPopper.async = false;
      document.body.appendChild(scriptPopper);

      let scriptTippy = document.createElement("script");
      scriptTippy.src = "https://unpkg.com/tippy.js@5";
      scriptTippy.async = false;
      document.body.appendChild(scriptTippy);

      let styleVar = /*html */ `
    <style>
        .paymen_method{
           width: 100% !important;
        }
        .payment_inform_box li > div#limitedTimeOffer{
            border: none;
            border-radius: unset;
            padding: 0 0 20px;
        }
        .payment_inform_box li.payment_order > div{
            padding: 16px 0;
        }
        .payment_inform_box li > div table tbody tr td{
            font-size: 14px !important;
            line-height: 21px !important;
        }
        .payment_inform_box li > div table tbody tr td:nth-child(1),
        .payment_inform_box li > div table tfoot tr td:nth-child(1){
            padding-left: 16px !important;
        }
        .payment_inform_box li > div table tbody tr td:nth-child(3),
        .payment_inform_box li > div table tfoot tr td:nth-child(3){
            padding-right: 16px !important;
        }
        .payment_inform_box li > div table thead tr th:nth-child(3){
            padding-right: 8px;
            text-align: left;
        }
        .payment_inform_box li > div > p.discount_row{
            font-weight: 600 !important;
            font-size: 12px !important;
            line-height: 16px !important;
            text-transform: uppercase;
            color: #734F22 !important;
            margin-top: 8px !important;
            padding: 0 16px;
        }
        .payment_inform_box li > div > p.saved_box{
            line-height: 12px !important;
            padding: 6px 8px !important;
            margin: 10px 16px 0 auto !important;
        }
        .payment_inform_box li > div table tfoot tr td{
            line-height: 21px !important;
        }
        .premium_coaching_tr{
            background: #DDE8F1;
            position: relative;
            transition: all 300ms cubic-bezier(0.4, 0, 1, 1);
            display: none;
            animation-duration: 1s;
            animation-name: slidein;
        }
        .open{
            display: table-row;
        }
        
        @keyframes slidein {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
      
        .premium_coaching_tr td span:nth-child(1){
            display: block;
            margin-bottom: 16px;
            font-weight: 700;
            font-size: 14px;
            line-height: 21px;
            color: #734F22;
            text-transform: uppercase;
        }
        .premium_coaching_tr td:nth-child(2),
        .premium_coaching_tr td:nth-child(3){
            padding-top: 47px;
        }
        .not_basic_main,
        .payment_inform_box p.usd_msg_row{
            display: none !important;
        }
        #limitedTimeOffer > h2.new_title{
            text-align: left;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            color: #734F22;
            margin: 0 !important;
        }
        #limitedTimeOffer > h2.new_title span{
            position: relative;
        }
        #limitedTimeOffer > h2.new_title span::before{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            content: '';
            width: 100%;
            height: 0.5px;
            background: #734F22;
        }
        #limitedTimeOffer > p.new_txt{
            text-align: left;
            font-weight: 400;
            font-size: 14px;
            line-height: 26px;
            color: #734F22 !important;
            margin: 0 !important;
            text-transform: initial;
        }
        .personalized_coaching_wrap{
            background: #FFFFFF;
            border: 1px solid #DDE8F1;
            border-radius: 10px;
            margin-top: 12px;
        }
        .full_info_block{
            padding: 12px 18px 16px;
        }
        .full_info_block > p{
            font-weight: 600;
            font-size: 14px !important;
            line-height: 20px;
            text-decoration-line: underline;
            color: #734F22 !important;
            margin: 0 !important;
            width: max-content;
        }
        .full_info_block > ul{
            display: none;
        }
        .mobile_var{
            display: none;
        }
        .custom_checkbox_wrap{
            border-bottom: 1px solid #DDE8F1;
            background: #DDE8F1;
            border-radius: 10px 10px 0 0;
            padding: 13px 16px;
        }
        .custom_checkbox_wrap input.custom_checkbox {
            position: absolute;
            z-index: -1;
            opacity: 0;
            margin: 0 !important;
            padding: 0 !important;
            width: 0;
            }
        .custom_checkbox_wrap label{
            display: flex;
            padding-left: 30px;
            cursor: pointer;
            position: relative;
            user-select: none;
            margin: 0;
        }
        .custom_checkbox_wrap .custom_checkbox + label::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            display: inline-block;
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #193973;
            border-radius: 2px;
            margin-right: 15px;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }
        .custom_checkbox_wrap .custom_checkbox:checked + label::before {
            background-image: url(https://conversionratestore.github.io/projects/knineti/img/check_mark_enroll.svg);
            background-size: 12px 12px;
            background-repeat: no-repeat;
            background-position: center;
        }
        p.title_label{
            font-weight: 400;
            font-size: 14px !important;
            line-height: 21px !important;
            color: #193973 !important;
            margin: 0 !important;
        }
        .new_price_wrap{
            display: flex;
            margin: 0 0 0 auto;
        }
        p.full_price{
            font-weight: 400;
            font-size: 14px !important;
            line-height: 21px;
            text-align: right;
            text-decoration-line: line-through;
            color: #808080 !important;
            margin: 0 10px 0 !important;
        }
        p.your_price{
            font-weight: 700;
            font-size: 14px !important;
            line-height: 21px;
            text-align: right;
            color: #193973 !important;
            margin: 0 !important;
        }
        /* tooltip*/
        .personalized_coaching_wrap .tippy-tooltip{
            max-width: 460px !important;
            left: 160px !important;
        }
        .personalized_coaching_wrap .tippy-tooltip ul li{
            position: relative;
            width: 100%;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #193973 !important;
            margin: 0;
            padding-left: 35px;
        }
        .personalized_coaching_wrap .tippy-tooltip ul li::before{
            content: "";
            position: absolute;
            width: 24px;
            height: 24px;
            top: 0;
            left: 0;
            background: url(https://conversionratestore.github.io/projects/knineti/img/footprint.svg) no-repeat center center;
            background-size: contain;
        }
        .personalized_coaching_wrap .tippy-tooltip ul li + li{
            margin-top: 12px !important;
        }
        .personalized_coaching_wrap .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
            left: 107px !important;
        }
        .list_dropdawn{
            display: none;
        }
        @media (min-width: 768px) {
            .payment_order .payment_plan_wrapp.payment_plan{
                width: 100%;
                margin-top: 20px !important;
            }
            ul.payment_inform_box{
                margin-bottom: 0 !important;
            }
            .payment_inform_box li:nth-child(1), .payment_inform_box li:nth-child(2){
                margin-bottom: 5px !important;
            }
        }
        @media (max-width: 768px) {
            [data-checkstep="1"],
            #limitedTimeOffer > h2.new_title > br,
            .desk_var{
                display: none !important;
            }
            .mobile_var {
                display: inline-block;
            }
            #limitedTimeOffer > h2.new_title{
                font-size: 16px !important;
            }
            .custom_checkbox_wrap{
                padding: 12px 16px;
            }
            p.full_price{
                margin: 0 4px 0 !important;
            }
            .full_info_block > p{
                display: flex !important;
                align-items: center;
            }
            .full_info_block > p > svg{
                margin-left: 8px;
                transform: rotateX(180deg);
                max-width: 8px;
                transition: all 300ms cubic-bezier(0.4, 0, 1, 1);
            }
            .full_info_block > p.show > svg{
                transform: rotateX(0deg);
            }
            ul.list_dropdawn{
                margin-top: 12px;
            }
            ul.list_dropdawn li{
                position: relative;
                width: 100%;
                font-weight: 400;
                font-size: 14px;
                line-height: 21px;
                color: #193973 !important;
                margin: 0 !important;
                padding-left: 35px;
            }
            ul.list_dropdawn li::before{
                content: "";
                position: absolute;
                width: 24px;
                height: 24px;
                top: 0;
                left: 0;
                background: url(https://conversionratestore.github.io/projects/knineti/img/footprint.svg) no-repeat center center;
                background-size: contain;
            }
            ul.list_dropdawn li + li{
                margin-top: 12px !important;
            }
            .payment_inform_box li > div#limitedTimeOffer{
                padding-bottom: 24px;
            }
            .payment_inform_box li > div#limitedTimeOffer + .subtitle_text{
                display: block;
                font-size: 18px;
                line-height: 24px;
                color: #754E0C !important;
            }
            .payment_inform_box li > div table tfoot tr td{
                border: none !important;
                padding-top: 2px !important;
            }
            .payment_inform_box li > div table tbody tr td:nth-child(1){
                max-width: 175px;
            }
            .premium_coaching_tr td:nth-child(1){
                padding-top: 16px !important;
                padding-bottom: 16px !important;
            }
            .premium_coaching_tr td:nth-child(2),
            .premium_coaching_tr td:nth-child(3){
                padding-bottom: 16px !important;
                padding-top: 56px !important;
            }
            .payment_inform_box li > div table tbody tr td:nth-child(2),
            .payment_inform_box li > div table tbody tr td:nth-child(3){
                vertical-align: baseline;
            }
            .payment_inform_box .payment_plan_wrapp.payment_plan p.subtitle_text{
                margin-bottom: 20px !important;
            }
            .payment_inform_box .payment_plan_wrapp.payment_plan{
                padding-bottom: 20px !important;
            }
            .new_text_radio_btn{
                font-size: 14px !important;
                line-height: 21px !important;
            }
            .block_back_guarantee_mob_var{
                padding: 0 16px !important;
            }
            .learn_more_box.mob_var{
                margin: 17px 16px 21px !important;
            }
        }
        @media (max-width: 360px) {
            .premium_coaching_tr td span:nth-child(1){
                font-size: 12px;
            }
        }
    </style>
    `;

      let html = /*html */ `
    <div id="limitedTimeOffer">
      <h2 class="new_title">Limited Time Offer:<br/> add Personal Coaching for just $90 more (usually <span>$398</span>)!</h2>
      <p class="new_txt">Check the box below to take advantage of this offer.</p>
      <div class="personalized_coaching_wrap">
        <div class="custom_checkbox_wrap">
          <input class="custom_checkbox" id="personalCoaching" type="checkbox" name="personalCoaching" value="personalCoaching" />
          <label for="personalCoaching" tabindex="0">
            <p class="title_label">10 weeks of <b>personalized coaching & support</b></p>
            <div class="new_price_wrap">
                <p class="full_price">$398</p>
                <p class="your_price">$90.00</p>
            </div>
          </label>
        </div>
        <div class="full_info_block">
            <p data-mytitle>
              <span>View full info</span>
              <svg class="mobile_var" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L5 2L1 6" stroke="#734F22" stroke-width="2" stroke-linecap="round" />
              </svg>
              <svg class="desk_var" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8 6C10.8 8.65097 8.65097 10.8 6 10.8C3.34903 10.8 1.2 8.65097 1.2 6C1.2 3.34903 3.34903 1.2 6 1.2C8.65097 1.2 10.8 3.34903 10.8 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.39961 3.6C5.39961 3.26863 5.66824 3 5.99961 3C6.33098 3 6.59961 3.26863 6.59961 3.6C6.59961 3.93137 6.33098 4.2 5.99961 4.2C5.66824 4.2 5.39961 3.93137 5.39961 3.6ZM5.39961 5.4C5.39961 5.06863 5.66824 4.8 5.99961 4.8C6.33098 4.8 6.59961 5.06863 6.59961 5.4V8.4C6.59961 8.73137 6.33098 9 5.99961 9C5.66824 9 5.39961 8.73137 5.39961 8.4V5.4Z" fill="#734F22"/>
              </svg>
            </p>
            <ul class="list_dropdawn">
                <li>Live weekly Q&A group calls with personal coaching <br/> (10-week access)</li>
                <li>Email your questions - answered in separate downloadable weekly call (10-week access)</li>
            </ul>
        </div>
      </div>
    </div>
      `;
      let arrTooltipTable = {
        1: [
          `<ul>
            <li>Live weekly Q&A group calls with personal coaching <br/> (10-week access)</li>
            <li>Email your questions - answered in separate downloadable weekly call (10-week access)</li>
          </ul>`,
        ],
      };

      document.head.insertAdjacentHTML("beforeend", styleVar);
      document.querySelector(".payment_order").insertAdjacentHTML("afterbegin", html);

      document.querySelectorAll(".main_version")[0].insertAdjacentHTML(
        "afterend",
        `<tr class="premium_coaching_tr">
			<td><span>+ PREMIUM COACHING</span> <span>10 weeks of <b>personalized coaching & support</b></span></td>
			<td class="actual_price">$398.00</td>
			<td class="pay_price">$90.00</td>
		</tr>`
      );

      if (document.querySelector(".premium_coaching_tr")) {
        document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(6) td:nth-child(1)").textContent = "BONUS class ‘How to housetrain your dog’";
        document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(7) td:nth-child(1)").textContent = "BONUS class ‘Cure your dog’s separation anxiety’";
        document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(8) td:nth-child(1)").textContent = "BONUS class ‘How to manage your dog's interactions with children’";
      }
      if (localStorage.getItem("personalCoaching")) {
        document.querySelector(".custom_checkbox_wrap .custom_checkbox").checked = true;
        if (document.querySelector(".premium_coaching_tr")) {
          document.querySelector(".premium_coaching_tr").classList.add("open");
        }
      }

      if (document.querySelector("#limitedTimeOffer")) {
        document.querySelector(".custom_checkbox_wrap label").addEventListener("click", (e) => {
          if (!e.currentTarget.previousElementSibling.checked) {
            localStorage.setItem("personalCoaching", true);
            pushDataLayer("exp_upsell_option_", "10 weeks", "Checkbox ON", "Limited time offer ... Order summary");
            document.querySelector(".premium_coaching_tr").classList.add("open");
          } else {
            if (localStorage.getItem("personalCoaching")) {
              localStorage.removeItem("personalCoaching");
              pushDataLayer("exp_upsell_option_", "10 weeks", "Checkbox OFF", "Limited time offer ... Order summary");
              if (document.querySelector(".premium_coaching_tr").classList.contains("open")) {
                document.querySelector(".premium_coaching_tr").classList.remove("open");
              }
            }
          }
          changePrice();
        });

        if (window.innerWidth <= 768) {
          document.querySelectorAll("[data-mytitle]").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              jQuery("ul.list_dropdawn").slideToggle();
              e.currentTarget.classList.toggle("show");
              if (e.currentTarget.classList.contains("show")) {
                console.log(e.target);
                e.currentTarget.querySelector("span").textContent = "View less info";
                pushDataLayer("exp_upsell_option_", "View full info - open", "Link", "Limited time offer ... Order summary");
              } else {
                e.currentTarget.querySelector("span").textContent = "View full info";
                pushDataLayer("exp_upsell_option_", "View less info - close", "Link", "Limited time offer ... Order summary");
              }
            });
          });
        } else {
          document.querySelector(".payment_inform_wrapp .customer_information_wrapper").after(document.querySelector(".paymen_method"));
          document.querySelector(".payment_order .subtitle_text + div").after(document.querySelector(".payment_plan_wrapp.payment_plan"));
          document.querySelector(".payment_order").insertAdjacentHTML("afterend", `<li></li>`);
          for (let key in arrTooltipTable) {
            document.querySelectorAll("[data-mytitle]").forEach((el) => {
              el.setAttribute("data-tooltip", arrTooltipTable[key][0]);
            });
          }
          let tippyRun = setInterval(() => {
            if (typeof tippy === "function" && document.querySelector("p[data-mytitle]")) {
              clearInterval(tippyRun);

              document.querySelectorAll("[data-mytitle]").forEach((el) => {
                tippy(el, {
                  content: el.getAttribute("data-tooltip"),
                  placement: "bottom",
                  // trigger: "click",
                  appendTo: function () {
                    return document.querySelector(".personalized_coaching_wrap");
                  },
                  onTrigger(e) {
                    pushDataLayer("exp_upsell_option_", "View full info - open", "Link", "Limited time offer ... Order summary");
                  },
                  onUntrigger(e) {
                    pushDataLayer("exp_upsell_option_", "View less info - close", "Link", "Limited time offer ... Order summary");
                  },
                });
              });
            }
          }, 500);

          document.querySelector("#submit").addEventListener("click", () => {
            document.querySelectorAll(".payment_inform_box .payment_plan_wrapp .input_wrapper>div> input:checked").forEach((i) => {
              if (i.getAttribute("id") === "onetime_pay") {
                pushDataLayer("exp_upsell_option_", "Enroll Now - one-time payment", "Button", "Choose payment plan");
              } else {
                pushDataLayer("exp_upsell_option_", "Enroll Now - 3 interest-free", "Button", "Choose payment plan");
              }
            });
          });
        }
      }
      changePrice();
      // Choose payment plan Click
      document.querySelectorAll(".payment_inform_box .payment_plan_wrapp .input_wrapper>div>label").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget.getAttribute("for") === "onetime_pay") {
            pushDataLayer("exp_upsell_option_", "one-time payment", "Radio button", "Choose payment plan");
          } else {
            pushDataLayer("exp_upsell_option_", "3 interest-free", "Radio button", "Choose payment plan");
          }

          changePrice();
        });
      });
      // btn_continue 2 Click
      document.querySelectorAll(".btn_continue")?.forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.target.getAttribute("data-count") === "1") {
            document.querySelectorAll(".payment_inform_box .payment_plan_wrapp .input_wrapper>div> input:checked").forEach((i) => {
              if (i.getAttribute("id") === "onetime_pay") {
                pushDataLayer("exp_upsell_option_", "Continue - one-time payment", "Button", "Choose payment plan");
              } else {
                pushDataLayer("exp_upsell_option_", "Continue - 3 interest-free", "Button", "Choose payment plan");
              }
            });
          }
          if (e.target.getAttribute("data-count") === "2") {
            if ($("#submit").is(":visible")) {
              changePrice();
            }
          }
        });
      });
      // learn_more_box Click
      document.querySelectorAll(".learn_more_box").forEach((el) => {
        el.addEventListener("click", (e) => {
          changePrice();
        });
      });

      function changePrice() {
        let prAct1 = +document.querySelector("#org_main_priceid.actual_price").textContent.split("$")[1],
          prAct2 = +document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(6) .actual_price").textContent.split("$")[1],
          prAct3 = +document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(7) .actual_price").textContent.split("$")[1],
          prAct4 = +document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(8) .actual_price").textContent.split("$")[1],
          premiumCoachPrAct = +document.querySelector(".premium_coaching_tr .actual_price").textContent.split("$")[1],
          prPay1 = +document.querySelector(".ac_price.pay_price").textContent.split("$")[1],
          prPay2 = +document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(6) .pay_price").textContent.split("$")[1],
          prPay3 = +document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(7) .pay_price").textContent.split("$")[1],
          prPay4 = +document.querySelector(".payment_inform_box li.payment_order > div tbody tr:nth-child(8) .pay_price").textContent.split("$")[1],
          premiumCoachPrPay = +document.querySelector(".premium_coaching_tr .pay_price").textContent.split("$")[1],
          totalAct,
          totalPay;

        if (!localStorage.getItem("personalCoaching")) {
          totalAct = prAct1 + prAct2 + prAct3 + prAct4;
          totalPay = prPay1 + prPay2 + prPay3 + prPay4;
        } else {
          totalAct = prAct1 + prAct2 + prAct3 + prAct4 + premiumCoachPrAct;
          totalPay = prPay1 + prPay2 + prPay3 + prPay4 + premiumCoachPrPay;
        }

        document.querySelectorAll(".total_actual").forEach((el) => {
          el.textContent = "$" + totalAct.toFixed(2);
        });
        document.querySelectorAll(".onetime_sec .new_full_price").forEach((el) => {
          el.textContent = "$" + totalAct.toFixed(2);
        });
        document.querySelectorAll(".monthly_sec .new_full_price").forEach((el) => {
          el.textContent = "$" + (totalAct / 3).toFixed(1);
        });
        document.querySelectorAll(".total_price").forEach((el) => {
          el.textContent = "$" + totalPay.toFixed(2);
        });
        document.querySelectorAll(".onetime_sec .new_your_price").forEach((el) => {
          el.textContent = "$" + totalPay.toFixed(2);
        });
        document.querySelectorAll(".monthly_sec .new_your_price").forEach((el) => {
          el.textContent = "$" + (totalPay / 3).toFixed(0);
        });
        document.querySelectorAll(".new_text_label .new_text_label_list .new_text_label_link > span > b").forEach((el) => {
          if (el.textContent === "Immediate access") return;

          el.textContent = "$" + (totalPay / 3).toFixed(0);
        });
        document.querySelectorAll(".onetime_pay_var b").forEach((el) => {
          el.textContent = "$" + totalPay.toFixed(0) + " " + "one-time payment";
        });
        document.querySelectorAll(".monthly_pay_var b").forEach((el) => {
          el.textContent = "3 interest-free monthly installments of " + "$" + (totalPay / 3).toFixed(0);
        });

        let s = setInterval(() => {
          if (document.querySelector(".content_popup h2")) {
            clearInterval(s);
            document.querySelectorAll(".content_popup h2").forEach((el) => {
              el.textContent = "3 interest-free monthly installments of " + "$" + (totalPay / 3).toFixed(0);
            });
          }
        }, 10);
        document.querySelectorAll(".diff_price").forEach((el) => {
          el.textContent = (totalAct - totalPay).toFixed(2);
        });
        document.querySelectorAll(".percent_var").forEach((el) => {
          el.textContent = (100 - (totalPay * 100) / totalAct).toFixed(0);
        });
        //

        console.log(totalAct.toFixed(2), totalPay.toFixed(2));
      }

      //visibility elem
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      });

      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      });

      obs.observe(document.querySelector(".personalized_coaching_wrap"));

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target);
            }, 5000);
          }
        });
      }
      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("personalized_coaching_wrap")) {
              pushDataLayer("exp_upsell_option_", "Visibility", "Additional block", "Limited time offer ... Order summary");
            }

            obs.unobserve(i.target);
          }
          obs2.unobserve(i.target);
        });
      }

      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);
          clarity("set", `upsell_option_${eventVar}`, "variant_1");
        }
      }, 200);
    }
  }, 100);
}

if (window.location.pathname === "/mc/") {
  let startMC = setInterval(() => {
    if (document.querySelector("#unlimited_personal_coaching")) {
      clearInterval(startMC);

      let eventVar = "desktop";

      if (window.innerWidth <= 768) {
        eventVar = "mobile";
      }

      function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
          });
        }
      }

      let newStyle = /*html */ `
        <style>
            #unlimited_personal_coaching .content > .col-md-4,
            #unlimited_personal_coaching .content > .col-md-8,
            #unlimited_personal_coaching .img_wrap,
            #unlimited_personal_coaching .desk_var{
                display: none;
            }
            #unlimited_personal_coaching .container{
                padding: 0 30px !important;
            }
            #unlimited_personal_coaching .all_content .row1030 > .col-md-12{
                padding: 0 !important;
            }
            #unlimited_personal_coaching .all_content{
                padding-bottom: 54px !important;
            }
            #unlimited_personal_coaching h2{
                font-weight: 400;
                font-size: 18px !important;
                line-height: 22px;
                color: #794E15;
                margin: 0 0 20px !important;
            }
            #unlimited_personal_coaching .content .descr_wrap > p{
                font-weight: 400;
                font-size: 16px;
                line-height: 25px;
                color: #808080 !important;
                margin: 0 !important;
            }
            #unlimited_personal_coaching .content .descr_wrap > p + p{
                margin: 8px 0 0 !important;
             }
            #unlimited_personal_coaching .content .descr_wrap > h3{
                font-weight: 700;
                font-size: 16px !important;
                line-height: 25px;
                color: #808080 !important;
                text-align: left !important;
                margin: 8px 0 !important;
                max-width: 300px;
            }
            #unlimited_personal_coaching .custom_checkbox_wrap{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 8px -10px 0;
            }
            #unlimited_personal_coaching .custom_checkbox_wrap input.custom_checkbox {
                position: absolute;
                z-index: -1;
                opacity: 0;
            }
            #unlimited_personal_coaching .custom_checkbox_wrap label{
                margin: 0;
                padding-left: 30px;
                font-weight: 700;
                font-size: 14px;
                line-height: 19px;
                color: #173775;
                cursor: pointer;
                position: relative;
                user-select: none;
            }
            #unlimited_personal_coaching .custom_checkbox_wrap .custom_checkbox + label::before {
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                display: inline-block;
                width: 18px;
                height: 18px;
                flex-shrink: 0;
                flex-grow: 0;
                border: 1px solid #193973;
                border-radius: 2px;
                margin-right: 15px;
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 50% 50%;
            }
            #unlimited_personal_coaching .custom_checkbox_wrap .custom_checkbox:checked + label::before {
                background-image: url(https://conversionratestore.github.io/projects/knineti/img/check_mark.svg);
                background-size: auto;
                background-repeat: no-repeat;
                background-position: center center;
            }
            #unlimited_personal_coaching .enroll_now_btn.new_btn_var{
                display: flex;
                align-items: center;
                justify-content: center;
                max-width: 235px !important;
                text-align: center !important;
                margin: 16px auto 0 !important;
            }
            @media (min-width: 768px) {
                #unlimited_personal_coaching .desk_var{
                    display: block;
                }
                #unlimited_personal_coaching .mobile_var{
                    display: none;
                }
                #unlimited_personal_coaching .content .descr_wrap > p.desk_var{
                    margin: 0 !important;
                }
                .new_first_box{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    gap: 15px;
                    max-width: 966px;
                    margin: 0 auto;
                }
                #unlimited_personal_coaching .img_wrap{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                #unlimited_personal_coaching .img_wrap img{
                    max-width: 313px;
                }
                #unlimited_personal_coaching h2{
                    font-size: 32px !important;
                    line-height: 40px;
                    padding: 0;
                }
                #unlimited_personal_coaching .content .descr_wrap > h3{
                    max-width: unset;
                }
                #unlimited_personal_coaching .custom_checkbox_wrap{
                    margin: 8px 0 0;
                }
                #unlimited_personal_coaching .custom_checkbox_wrap label{
                    padding-left: 26px;
                }
                #unlimited_personal_coaching .enroll_now_btn.new_btn_var{
                    margin: 20px auto 0 !important;
                    max-width: 151px !important;
                }
            }
        </style>
        `;

      let newHtml = /*html */ `
        <div class="new_first_box">
            <div class="img_wrap">
                <img src="https://conversionratestore.github.io/projects/knineti/img/personal-coaching-testing.jpg" alt="personal coaching" />
                <img src="https://conversionratestore.github.io/projects/knineti/img/lowsection-view-woman-walking-with-her-dog-park.jpg" alt="woman walking with her dog park" />
            </div>
            <div class="descr_wrap">
                <p class="mobile_var">Are you ready to take your learning experience to the next level? We have an exclusive offer for our valued clients who want to receive unparalleled support and guidance throughout our 10-week masterclass. Introducing our Personal Coaching package, designed to provide you with the ultimate level of assistance and expertise to achieve exceptional results with your beloved four-legged companion.</p>
                <p class="desk_var">Are you ready to take your learning experience to the next level?</p>
                <p class="desk_var">We have an exclusive offer for our valued clients who want to receive unparalleled support and guidance throughout our 10-week masterclass. Introducing our Personal Coaching package, designed to provide you with the ultimate level of assistance and expertise to achieve exceptional results with your beloved four-legged companion.</p>
                <h3>What's included in the Personal Coaching package?</h3>
                <p>Every Saturday at 3pm Eastern time, we’ll have a live Q&A call for all our masterclass participants where you can ask our trainers any questions you have about that week’s class, or about any problems you are having with your dog.</p>
                <p>The Q&A calls will happen each week during the 10-week masterclass.</p>
                <p>If you can’t attend one of the live calls, just email us your question before it, and we’ll answer it during the Q&A session. We’ll upload a recording of each Q&A call, so you can listen to the recording when convenient to you.</p>
                <p>With the Personal Coaching package, you'll receive undivided attention and guidance from our experienced trainers, ensuring that no obstacle stands in the way of your dog's progress. Whether you're a novice owner or an experienced handler, this advanced level of support will empower you to overcome challenges, achieve breakthroughs, and foster a deeper bond with your furry friend.</p>
                <p data-visib='1'>The regular price for the Personal Coaching is <b>$398</b>, but for a limited time, you can get it with a <b>77% discount.</b> To add the Personal Coaching package <b>for only $90,</b> simply check the box below and enroll to the Total Transformation Masterclass now.</p>
                <div class="custom_checkbox_wrap">
                    <input class="custom_checkbox" id="personalCoaching" type="checkbox" name="personalCoaching" value="personalCoaching">
                    <label for="personalCoaching" tabIndex="0">Yes, I would like to add Personal Coaching to my Total Transformation Masterclass.</label>
                </div>
            </div>
        </div>
        <a href="#" class="button-blue-large showModal grab_butn enroll_now_btn new_btn_var">Enroll Now &nbsp; <i class="fa fa-angle-right" style="font-size: 17px" aria-hidden="true"></i></a>
        `;

      document.head.insertAdjacentHTML("beforeend", newStyle);

      if (window.innerWidth <= 768) {
        document.querySelector("#unlimited_personal_coaching h2").innerHTML = "<b>Limited Time Offer:</b> add Personal Coaching for <b>only</b> $398 <b>$90 more!</b>";
      } else {
        document.querySelector("#unlimited_personal_coaching h2").innerHTML = "<b>Limited Time Offer:</b><br/> add Personal Coaching for <b>only</b> $398 <b>$90 more!</b>";
      }
      document.querySelector("#unlimited_personal_coaching .content").insertAdjacentHTML("afterbegin", newHtml);
      if (localStorage.getItem("personalCoaching")) {
        document.querySelector("#unlimited_personal_coaching .custom_checkbox_wrap .custom_checkbox").checked = true;
      }
      if (document.querySelector("#unlimited_personal_coaching .enroll_now_btn.new_btn_var")) {
        document.querySelector("#unlimited_personal_coaching .enroll_now_btn.new_btn_var").addEventListener("click", (e) => {
          e.preventDefault();
          if (localStorage.getItem("personalCoaching")) {
            pushDataLayer("exp_upsell_option_", "Enroll now - YES", "Button", "Limited time offer ... Free workshop");
          } else {
            pushDataLayer("exp_upsell_option_", "Enroll now - NO", "Button", "Limited time offer ... Free workshop");
          }
          document.querySelector("#SpecialOffer a.enroll_now_btn").click();
        });

        document.querySelector("#unlimited_personal_coaching .custom_checkbox_wrap label").addEventListener("click", (e) => {
          if (!e.target.previousElementSibling.checked) {
            pushDataLayer("exp_upsell_option_", "Yes i would like to add personal coaching", "Checkbox ON", "Limited time offer ... Free workshop");
            localStorage.setItem("personalCoaching", true);
          } else {
            if (localStorage.getItem("personalCoaching")) {
              localStorage.removeItem("personalCoaching");
              pushDataLayer("exp_upsell_option_", "Yes i would like to add personal coaching", "Checkbox OFF", "Limited time offer ... Free workshop");
            }
          }
        });

        //visibility elem
        let obs = new IntersectionObserver(visibility, {
          threshold: 1,
        });

        let obs2 = new IntersectionObserver(visibility2, {
          threshold: 1,
        });

        obs.observe(document.querySelector("#unlimited_personal_coaching [data-visib='1']"));

        function visibility(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              setTimeout(function () {
                obs2.observe(i.target);
              }, 5000);
            }
          });
        }
        function visibility2(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              if (i.target.getAttribute("data-visib")) {
                pushDataLayer("exp_upsell_option_", "Visibility - 5 sec", "Text area", "Limited time offer ... Free workshop");
              }

              obs.unobserve(i.target);
            }
            obs2.unobserve(i.target);
          });
        }

        //
        let obs3 = new IntersectionObserver(visibility3, {
          threshold: 1,
        });

        let obs4 = new IntersectionObserver(visibility4, {
          threshold: 1,
        });

        obs3.observe(document.querySelector("#unlimited_personal_coaching .custom_checkbox_wrap"));

        function visibility3(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              setTimeout(function () {
                obs4.observe(i.target);
              }, 100);
            }
          });
        }
        function visibility4(entries) {
          entries.forEach((i) => {
            if (i.isIntersecting) {
              if (i.target.classList.contains("custom_checkbox_wrap")) {
                pushDataLayer("exp_upsell_option_", "Visibility", "Checkbox", "Limited time offer ... Free workshop");
              }

              obs3.unobserve(i.target);
            }
            obs4.unobserve(i.target);
          });
        }

        const record = setInterval(() => {
          if (typeof clarity === "function") {
            clearInterval(record);
            clarity("set", `upsell_option_${eventVar}`, "variant_1");
          }
        }, 200);
      }
    }
  }, 100);
}

if (window.location.pathname === "/thanks-for-ordering/") {
  let startThanks = setInterval(() => {
    if (localStorage.getItem("personalCoaching")) {
      clearInterval(startThanks);

      let eventVar = "desktop";

      if (window.innerWidth <= 768) {
        eventVar = "mobile";
      }

      function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
        window.dataLayer = window.dataLayer || [];
        if (labelDataLayer) {
          console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          });
        } else {
          console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
          dataLayer.push({
            event: "event-to-ga4",
            event_name: `${nameDataLayer} ${eventVar}`,
            event_desc: `${deskDataLayer}`,
            event_type: `${typeDataLayer}`,
            event_loc: `${actionDataLayer}`,
          });
        }
      }

      let newStyle = /*html */ `
        <style>
            .present_box{
                margin-bottom: 16px !important;
            }
            body .col-md-8 > .present_box h3,
            .present_box span{
                font-weight: 700 !important;
                font-size: 14px !important;
                line-height: 23px !important;
                color: #808080 !important;
                margin: 0 !important;
                text-align: left;
            }
            .present_box span{
                font-weight: 400 !important;
            }
            .white-block{
                padding: 57px 0 0;
            }
            .white-block .col-md-8 > p{
                margin-bottom: 16px;
                line-height: 23px;
                color: #808080 !important;
            }
            .product_list ~ br{
                display: none;
            }
            table.product_list tr td{
                padding-bottom: 16px !important;
            }
            table.product_list tr td:nth-child(1){
                width: 63%;
                max-width: 404px;
            }
            table.product_list tr td:nth-child(2){
                width: 10%;
                max-width: 40px;
                text-align: right;
            }
            table.product_list th{
                font-size: 16px !important;
                line-height: 16px !important;
                color: #808080 !important;
                padding-bottom: 8px;
            }
            table.product_list{
                max-width: 448px;
                width: 100%;
            }
            table.product_list th:nth-child(2){
                text-align: right;
            }
            @media (max-width: 768px) {
                .white-block {
                    padding: 59px 0 12px !important;
                }
                .present_box {
                    margin-bottom: 27px !important;
                }
                table.product_list th{
                    padding-bottom: 13px;
                }
                table.product_list tr td:nth-child(1){
                    width: 50%;
                }
                .product_list tr.premium_coaching_tr td{
                    padding-bottom: 35px !important;
                }
                .white-block > .row1030:nth-child(2) .content > .col-md-8{
                    padding: 0 29px;
                }
                .white-block > .row1030 .col-md-12 h2{
                    margin-bottom: 22px;
                }
            }
        
        </style>
        `;

      document.head.insertAdjacentHTML("beforeend", newStyle);
      document.querySelector(".product_list1:nth-child(1)").textContent = "Product:";
      document.querySelector(".product_list1:nth-child(2)").textContent = "Price:";
      document.querySelector(".white-block p:first-child").insertAdjacentHTML(
        "beforebegin",
        `
            <div class="present_box">
            <h3>We have an important update just for you!</h3>
            <span>To show our gratitude, we want to inform you that we haven't billed you $90 for 10 weeks of personalized coaching and support.</span>
            </div>
        `
      );

      document.querySelector(".product_list tr:nth-child(2)").insertAdjacentHTML(
        "afterend",
        `<tr class="premium_coaching_tr">
			<td>10 weeks of personalized coaching and support</td>
			<td class="actual_price">$0</td>
		</tr>`
      );

      //visibility elem
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      });

      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      });

      obs.observe(document.querySelector(".present_box"));

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target);
            }, 100);
          }
        });
      }
      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("present_box")) {
              pushDataLayer("exp_upsell_option_", "Visibility", "Text area", "Thank you for your purchase");
            }

            obs.unobserve(i.target);
          }
          obs2.unobserve(i.target);
        });
      }

      //
      let obs3 = new IntersectionObserver(visibility3, {
        threshold: 1,
      });

      let obs4 = new IntersectionObserver(visibility4, {
        threshold: 1,
      });

      obs3.observe(document.querySelector(".present_box"));

      function visibility3(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs4.observe(i.target);
            }, 3000);
          }
        });
      }
      function visibility4(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("present_box")) {
              pushDataLayer("exp_upsell_option_", "Visibility - 3 sec", "Text area", "Thank you for your purchase");
            }

            obs3.unobserve(i.target);
          }
          obs4.unobserve(i.target);
        });
      }

      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);
          clarity("set", `upsell_option_${eventVar}`, "variant_1");
        }
      }, 200);
    }
  }, 100);
}
