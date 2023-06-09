let startFunkPopupV2 = setInterval(() => {
  if (document.querySelector("#shopify-section-template--15241309945900__zenpatch") && document.cookie.indexOf("_ga") !== -1) {
    clearInterval(startFunkPopupV2);

    function pushDataLayer(actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Changing First order discount`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Changing First order discount`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    let popupTimerId;
    let active = false;
    // getNewUser("_ga");

    if (document.cookie.indexOf("_ga") !== -1) {
      console.log("Куки есть");
    } else {
      console.log("Куки нет");
    }

    if (!localStorage.getItem("newUser")) {
      popupTimerId = setInterval(() => {
        if (document.querySelector("html body .ju_Con")) {
          clearInterval(popupTimerId);
          console.log(`New User`);
          active = true;
          localStorage.setItem("newUser", "true");
          openPopup();
          if (document.querySelector(".overlay_popup .content_popup")) {
            countTimer();
          }
        }
      }, 10);
    }
    // function getNewUser(name) {
    //   const value = `; ${document.cookie}`;
    //   const parts = value.split(`; ${name}=`);
    //   let valueCookie;
    //   let timeNewUser;
    //   console.log(`timeNewUser`, new Date(timeNewUser));
    //   if (parts.length === 2 && !localStorage.getItem("newUser")) {
    //     valueCookie = parts.pop().split(";").shift();
    //     timeNewUser = +(valueCookie.split(".").pop() + "000");
    //     console.log(`timeNewUser`, new Date(timeNewUser));
    //     if (+new Date() - +new Date(timeNewUser) <= 5 * 60 * 1000) {
    //       console.log(`New User`);
    //       active = true;
    //       localStorage.setItem("newUser", "true");
    //       popupTimerId = setInterval(() => {
    //         if (document.querySelector("html body .ju_Con")) {
    //           clearInterval(popupTimerId);
    //           openPopup();
    //           if (document.querySelector(".overlay_popup .content_popup")) {
    //             countTimer();
    //           }
    //         }
    //       }, 10);
    //     }
    //   }
    // }

    let scriptCustomTimer = document.createElement("script");
    scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js";
    scriptCustomTimer.async = false;
    document.head.appendChild(scriptCustomTimer);

    let scriptCustomTimerStyle = document.createElement("link");
    scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css";
    scriptCustomTimerStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomTimerStyle);

    let popupStyle = /*html */ `
        <style>
          #getNow .days{
            display: none !important;
          }
          #getNow img.new_img_reviews{
            max-width: 182px !important;
            margin-top: 16px;
            display: block;
          }
          .reviews-slide{
            border-top: unset !important;
          }
          #getNow .free-shipping-checkout{
            margin-top: 0;
            margin-bottom: 0;
          }
          #purchase .prices .js-total{
            font-weight: 700;
            font-size: 24px;
            line-height: 130%;
            color: #0C0B0B;
          }
          #purchase .prices .js-regular{
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            text-align: center;
            color: #6F6F6F;
          }
          .package .js-heading #addToCart.js-btn.btn-primary{
            margin: 16px auto 8px;
            padding: 18px 10px;
            max-width: 321px;
            font-size: 22px;
            line-height: 24px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            filter: none;
            background: #427972;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
            border-radius: 52px;
            color: #FFFFFF;
          }
          section.sidebar .title-logo{
            margin-top: 0px!important;
            margin-bottom: 12px!important;
          }
          section.sidebar .list-packs {
              padding: 8px!important;
          }
          .sidebar .title-logo .slide-logo{
            font-weight: 400;
            font-size: 26px;
            line-height: 110%;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #212529;
          }
          #cons{
            height: 100vh !important;
            width: 100% !important;
    max-width: 337px !important;
    padding: 16px !important;
    overflow-y: auto;
          }
          section.sidebar .view-prices{
            margin-top: 12px !important;
            display: block !important;
          }
          .sidebar .view-prices h3{
                line-height: 130%;
                margin-bottom: 4px;
                text-align:center;
          }
          .sidebar .view-prices > p{
    line-height: 130% !important;
    margin-bottom: 8px !important;
    text-align:center;
    color: #6F6F6F !important;
          }
          .slide-packs ul{
            gap: 4px;
          }
          .sidebar .buttons-sticker p{
            padding: 0 5px !important;
          }
          .sidebar .info .pack-price{
            letter-spacing: 0.02em !important;
            line-height: 110% !important;
          }
          .sidebar .info .pcs{
            line-height: 130% !important;
          }
          .sidebar .info .strikethrough{
            line-height: 130% !important;
          }
          .sidebar .stickers-prices .sticker-image img{
            min-width: 53px !important;
    max-width: 53px !important;
          }
            html body .ju_Con,
            html body #ju_Con_907501,
            html body #ju_Con_907502,
            html body #ju_overlay,
            html body #ju_Con_908884,
            #zenpatch-mood-calming-stickers-the-natural-patch-co #ju_overlay{
                display: none !important;
            }
        .overlay_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(255 255 255 / 75%);
            display: flex;
            overflow-y: auto;
            z-index: 1000000000;
            transition: all 0.5s ease;
        }
        .overlay_popup.is_hidden{
            opacity: 0;
            pointer-events: none;
        }
        .overlay_popup .container_popup {
            display: block;
            position: relative;
            max-width: 335px;
            width: 100%;
            margin: auto;
            transition: all 0.5s ease 0s;
        }
        .overlay_popup .container_popup > .btn_close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 24px;
            height: 24px;
            outline: none;
            cursor: pointer;
            background: rgba(55, 63, 71, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 1111;
        }
        .overlay_popup .container_popup > .btn_close span{
          background: url(https://conversionratestore.github.io/projects/zenpatch/img/btn_close.svg) center center no-repeat;
          background-size: contain;
          width: 14px;
          height: 14px;
          display: block;
        }
        .content_popup{
            background: #FFFFFF;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
        }
        .header_popup{
            padding: 10px 24px 18px;
            background: #4CAF50;
            position: relative;
            border-radius: 10px 10px 0 0;
        }
        .header_popup::after{
            position: absolute;
                content: '';
                top: 3px;
                right: 11px;
                width: 103px;
                height: 100px;
                background: url(https://conversionratestore.github.io/projects/zenpatch/img/zen_putch.png) no-repeat center center;
                background-size: contain;
        }
        .header_popup::before{
            position: absolute;
                content: '';
                bottom: -10px;
                right: 0;
                width: 100%;
                height: 28px;
                z-index: 1;
                background: url(https://conversionratestore.github.io/projects/zenpatch/img/bgr.svg) no-repeat center center;
                background-size: contain;
        }
        .header_popup p{
            font-family: 'Din Condensed',Roboto,sans-serif !important;
            font-weight: 400;
            font-size: 40px !important;
            line-height: 50px !important;
            color: #FFFFFF;
            margin: 0;
            position: relative;
            z-index: 1110;
            width: max-content;
        }
        .header_popup p:nth-child(2){
            font-size: 36px !important;
            line-height: 43px !important;
        }
        .header_popup p:nth-child(2)::after{
            position: absolute;
            content: '';
            top: -10px;
            right: -25px;
            width: 21px;
            height: 21px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/text_cross.svg) no-repeat center center;
            background-size: contain;
        }
        .content_popup h2{
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #010101 !important;
            margin: 0 !important;
        }
        .email_opt_in{
            padding: 5px 20px 30px;
            text-align: center;
        }
        .email_opt_in.is_hidden{
            display: none;
        }
        .email_opt_in p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.5px;
            color: #515151;
            margin: 8px 0 16px;
        }
        .email_opt_in label{
            margin: 0 0 16px !important;
            position: relative;
            width: 100%;
            outline: none !important;
            border: none !important;
        }
        .email_opt_in label::before{
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: 24px;
            width: 16px;
            height: 12px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/email.svg) no-repeat center center;
            background-size: contain;
        }
        .email_opt_in label input{
            height: 50px !important;
            width: 100% !important;
            border: 1px solid #D3D3D3 !important;
            border-radius: 31px !important;
            background: unset !important;
            box-shadow: unset !important;
            padding: 0 24px 0 50px !important;
            outline: none !important;
        }
        .email_opt_in label input::placeholder{
          font-weight: 400;
          color: #9C9C9C;
        }
        .email_opt_in label:focus-visible{
            outline-offset: unset !important;
            box-shadow: unset !important;
            outline: none !important;
            border: none !important;
        }
        .email_opt_in label input:focus-visible{
          outline:1px solid #D3D3D3 !important;
          outline-offset: unset !important;
          border-radius: 31px !important;
        }
        .no_thanks_btn{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            text-decoration-line: underline;
            color: #2C7D73;
            margin-top: 20px;
            outline: none;
            border: none;
            background: none;
        }
        .success_block{
            padding: 5px 20px 20px;
            text-align: center;
        }
        .success_block.is_hidden{
            display: none;
        }
        .content_popup .success_block h2{
            margin-bottom: 6px !important;
        }
        .success_block p{
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 16px !important;
            line-height: 24px !important;
            letter-spacing: 0.5px;
            color: #515151;
            margin: 0 -5px 16px;
        }
        .success_block p span{
            font-weight: 800;
            color: #2C7D73;
        }
        .voucher_block{
            border: 2px dashed #D9D9D9;
            border-radius: 31px;
            margin-bottom: 16px;
            padding: 17px;
            height: 58px;
        }
        .voucher_block span{
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.5px;
            color: #2C7D73;
        }
        .content_popup .green_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 60px;
            background: #2C7D73;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
            border-radius: 52px;
            font-family: 'Din Condensed',Roboto,sans-serif !important;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            color: #FFFFFF;
            border: none;
            outline: none;
        }
        /*countdown */
        .countdown-wrapper{
            padding: 0px 0 50px;
        }
        .countdown.flip-clock-wrapper{
            margin: 0 !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .countdown.flip-clock-wrapper ul{
            width: 30px;
            height: 48px;
            font-size: 2rem;
            font-weight: 400;
            line-height: 1.5;
            border-radius: 0.0625em 0.0625em 0 0;
            background: #2e2e2e;
            margin: 0;
            padding: 0;
        }
        .countdown.flip-clock-wrapper ul li a div div.inn,
        .countdown.flip-clock-wrapper ul li a div.down,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-active .down .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-active .up .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-before .down .shadow,
        .countdown.flip-clock-wrapper ul.play li.flip-clock-before .up .shadow{
            background-color: #2e2e2e;
            border-radius: unset;
            background: #2e2e2e;
            max-width: 30px;
        }
        .countdown .flip-clock-divider{
            height: 48px !important;
        }
        .countdown  .flip-clock-dot{
            opacity: 0;
        }
        .countdown.flip-clock-wrapper .flip:first-of-type{
            display: none;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(3),
        .countdown.flip-clock-wrapper .flip:nth-of-type(5),
        .countdown.flip-clock-wrapper .flip:nth-of-type(7){
            border-radius: 0.0625em 0 0 0.0625em;
            width: 24px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(4),
        .countdown.flip-clock-wrapper .flip:nth-of-type(6),
        .countdown.flip-clock-wrapper .flip:nth-of-type(8){
            border-radius: 0 0.0625em 0.0625em 0;
            width: 24px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(3) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(5) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(7) a div div.inn{
            left: 5px !important;
        }
        .countdown.flip-clock-wrapper .flip:nth-of-type(4) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(6) a div div.inn,
        .countdown.flip-clock-wrapper .flip:nth-of-type(8) a div div.inn{
            left: -5px !important;
        }
        .countdown.flip-clock-wrapper ul li{
            line-height: 2;
        }
        .countdown.flip-clock-wrapper ul li a div,
        .countdown.flip-clock-wrapper ul li a div div.inn{
            font-size: 2.5rem;
            color: #ededed;
        }
        .countdown .flip-clock-divider .flip-clock-label{
            top: unset !important;
            bottom: -27px !important;
            right: -28px !important;
            color: rgb(156, 156, 156) !important;
        }
        .countdown .flip-clock-divider.seconds .flip-clock-label{
            right: -48px !important;
        }
        .countdown .flip-clock-divider.minutes .flip-clock-label {
            right: -46px !important;
        }        
        .countdown .flip-clock-divider.hours .flip-clock-label {
            right: -40px !important;
        }
        /*btn_trigger_popup */
        .btn_trigger_popup{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 321px;
            margin: 8px auto 0;
            padding: 11px 14px 11px 56px;
            position: relative;
            border: 2px solid #ECF2F1;
            border-radius: 100px;
        }
        .sidebar .btn_trigger_popup,
        .sidebar .btn_trigger_popup.applied_discount{
          border: unset;
          background: #ECF2F1;
          border-radius: unset;
          padding-bottom: 7px;
          padding-top: 7px;
              margin: 0 -16px;
    max-width: 110%;
    width: 120%;
        }
        body .sidebar .btn_trigger_popup.applied_discount > p {
            font-size: 14px !important;
        }
        .btn_trigger_popup::before{
            position: absolute;
            content: '';
            top: 50%;
            transform: translateY(-50%);
            left: 30px;
            width: 27px;
            height: 18px;
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/discount_v2.svg) no-repeat center center;
            background-size: contain;
        }
        body .btn_trigger_popup > p{
            font-family: "Roboto", sans-serif;
            font-weight: 600;
            font-size: 14px !important;
            line-height: 18px !important;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #0C0B0B;
            margin: 0;
            position: relative;
        }
        body .btn_trigger_popup > p::after{
          content: '';
          position: absolute;
          border-bottom: 1px solid#0C0B0B;
          bottom: 0;
          left: 0;
        }
        .btn_trigger_popup svg{
            margin: 0 0 0 7px;
        }
        .btn_trigger_popup.applied_discount::before{
            background: url(https://conversionratestore.github.io/projects/zenpatch/img/checked_discount_v2.svg) no-repeat center center;
            background-size: contain;
            left: 24px;
            width: 18px;
            height: 18px;
        }
        body .btn_trigger_popup.applied_discount > p{
            font-size: 13px !important;
        }
        body .btn_trigger_popup.applied_discount > p::after{
          content: unset;
        }
        .btn_trigger_popup.applied_discount{
            background: #ECF2F1;
            border: none;
            padding: 11px 10px 11px 34px;
        }
        .btn_trigger_popup.applied_discount.is_hidden,
        .btn_trigger_popup.not_applied_discount.is_hidden{
            display: none;
        }
        input.error{
        border: 2px solid #ef4836 !important;
        }
        .input_validation_email {
            position: absolute;
            width: 100%;
            padding: 2px 0 0 8px;
            color: #ef4836;
            text-align: center;
            font-size: 10px;
            line-height: 1.25;
            display: none;
        }
        @media (max-width: 320px) {
            .header_popup::before{
                width: 102%;
            }
            .header_popup p{
                font-size: 39px !important;
            }
            .header_popup p:nth-child(2) {
                font-size: 33px !important;
            }
            .success_block p{
                font-size: 15px !important;
            }
            body .btn_trigger_popup > p{
                font-size: 14px !important;
            }
            #cons{
                  max-width: 310px !important;
    padding: 10px !important;
            }
            .buttons-sticker p {
    font-size: 10px!important;
}
body .sidebar .btn_trigger_popup.applied_discount > p {
    font-size: 13px !important;
}
.sidebar .btn_trigger_popup, .sidebar .btn_trigger_popup.applied_discount{
      margin: 0 -10px;
    max-width: 107%;
    width: 111%;
}
.btn_trigger_popup.applied_discount::before{
  width: 14px;
    height: 15px;
}
        }

        </style>
        `;

    let popUp = /*html */ `
                <div class="overlay_popup is_hidden">
                    <div class="container_popup">
                        <div class="btn_close" data-close="Close extra 10 percent popup">
                          <span></span>
                        </div>
                    </div>
                </div>
        `;

    let contentPopup = /*html */ `
          <div class="content_popup">
                <div class="header_popup">
                    <p>EXTRA 10% OFF</p>
                    <p>FREE SHIPPING</p>
                </div>
                <div class="email_opt_in">
                    <h2>UNLOCK BONUS OFFER</h2>
                    <p>Your bonus offer will be available for:</p>
                    <div class="countdown-wrapper">
                        <div id="countdown" class="countdown"></div>
                    </div>
                    <form action="#">
                        <label>
                            <input type="email" name="myEmail" id="myEmail" placeholder="Enter your email to claim">
                            <div class="input_validation_email">Your email doesn't seem to be valid</div>
                        </label>
                        <button type="submit" class="green_btn">Claim Bonus Offer</button>
                    </form>
                    <button class="no_thanks_btn" data-close="No thanks">No thanks, I don't want extra savings</button>
                </div>
                <div class="success_block is_hidden">
                    <h2>Congratulations!</h2>
                    <p>You've unlocked an additional <span>10% OFF + FREE SHIPPING</span> for your first order</p>
                    <div class="voucher_block">
                        <span>NATURAL10</span>
                    </div>
                    <p>Discount code will be automatically applied at checkout</p>
                    <button class="green_btn" data-close="Continue shopping button">Continue shopping</button>
                </div>
            </div>
        `;

    let triggerPopup = /*html */ `
        <div class="btn_trigger_popup not_applied_discount" data-popup>
            <p>Get aDDITIONAL 10% OFF </p>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.64657 6L0 1.13389L1.2707 0L7 6L1.2707 12L0 10.8661L4.64657 6Z" fill="#427972"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64657 6L5 1.13389L6.2707 0L12 6L6.2707 12L5 10.8661L9.64657 6Z" fill="#427972"/>
            </svg>
        </div>
        <div class="btn_trigger_popup applied_discount is_hidden">
            <p>aDDITIONAL 10% OFF applied next</p>
        </div>
        `;

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`);
    document.head.insertAdjacentHTML("beforeend", popupStyle);
    document.querySelector("#addToCart")?.after(document.querySelector("#getNow .free-shipping-checkout"));
    if (!document.querySelector("#getNow .new_img_reviews")) {
      document.querySelector("#getNow .days")?.insertAdjacentHTML("afterend", `<img src="https://conversionratestore.github.io/projects/zenpatch/img/new_img_shipping.png" alt="Reviews 1273" class="new_img_reviews">`);
    }
    if (!localStorage.getItem("restartFunc")) {
      document.querySelector("#addToCart")?.insertAdjacentHTML("beforebegin", triggerPopup);
      document.querySelector(".button-proceed")?.insertAdjacentHTML("beforebegin", triggerPopup);
      if (document.querySelector("#getNow .not_applied_discount")) {
        document.querySelector("#getNow .not_applied_discount").classList.add("getnow_visab_not_applied");
      }
      if (document.querySelector("#getNow .applied_discount")) {
        document.querySelector("#getNow .applied_discount").classList.add("getnow_visab_applied");
      }
      if (document.querySelector(".sidebar .not_applied_discount")) {
        document.querySelector(".sidebar .not_applied_discount").classList.add("sidebar_visab_not_applied");
      }
      if (document.querySelector(".sidebar .applied_discount")) {
        document.querySelector(".sidebar .applied_discount").classList.add("sidebar_visab_applied");
      }
      document.body.insertAdjacentHTML("afterbegin", popUp);
      let countdown;

      if (localStorage.getItem("appliedDiscount") && !localStorage.getItem("restartFunc")) {
        changeVisabilityApplieddiscount();
      }

      const popupTrigger = document.querySelectorAll("[data-popup]"),
        popup = document.querySelector(".overlay_popup"),
        notClickElem = document.querySelectorAll(".applied_discount");

      function closePopup() {
        popup.classList.add("is_hidden");
        document.body.style.overflow = "";
      }

      function openPopup() {
        if (!document.querySelector(".overlay_popup .container_popup .content_popup")) {
          document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup);
        }
        popup.classList.remove("is_hidden");
        document.body.style.overflow = "hidden";

        clearInterval(popupTimerId);
        active = false;

        if (!document.querySelector(".countdown.flip-clock-wrapper") && active === false) {
          console.log(`active`, active);
          countTimer();
        }

        if (document.querySelector(".overlay_popup .content_popup")) {
          document.querySelectorAll("[data-close]").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                let step;
                if ($(".email_opt_in").is(":visible") && el.getAttribute("data-close") === "Close extra 10 percent popup") {
                  step = "step_1";
                }
                if ($(".success_block ").is(":visible") && el.getAttribute("data-close") === "Close extra 10 percent popup") {
                  step = "step_2";
                }
                pushDataLayer(`${el.getAttribute("data-close")}`, step);
                closePopup();
              }
              e.target.setAttribute("data-test", "1");

              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 200);
            });
          });

          // click pn btn Claim Bonus Offer
          document.querySelector("form .green_btn")?.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              e.preventDefault();
              pushDataLayer("Claim bonus offer button");
              validationForm();
              if (document.querySelector(".input_validation_email").textContent === "You've already given us that email address before") {
                document.querySelector(".input_validation_email").textContent = "Your email doesn't seem to be valid";
                validationForm();
              }
            }
            e.target.setAttribute("data-test", "1");

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 200);
          });

          document.querySelector(`input[name='myEmail']`)?.addEventListener("focus", (e) => {
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("Email input");
            }
            e.target.setAttribute("data-test", "1");

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 300);
          });
          document.querySelector(`.voucher_block`)?.addEventListener("click", (e) => {
            if (!e.target.getAttribute("data-test")) {
              pushDataLayer("Discount number");
            }
            e.target.setAttribute("data-test", "1");

            setTimeout(() => {
              if (e.target.getAttribute("data-test")) {
                e.target.removeAttribute("data-test");
              }
            }, 300);
          });
        }
      }
      popupTrigger.forEach((btn) => {
        if (!btn.classList.contains("applied_discount")) {
          btn.addEventListener("click", () => {
            if (btn.closest(".sidebar")) {
              pushDataLayer("Click Get additional 10 off", "Slide in cart");
            }
            if (btn.closest("#getNow")) {
              pushDataLayer("Click Get additional 10 off", "Shopping block on the page");
            }
            openPopup();
          });
        }
      });
      notClickElem.forEach((btn) => {
        if (!btn.classList.contains("not_applied_discount")) {
          btn.addEventListener("click", () => {
            if (btn.closest(".sidebar")) {
              pushDataLayer("'Click Additional 10 off applied next", "Slide in cart");
            }
            if (btn.closest("#getNow")) {
              pushDataLayer("Click Additional 10 off applied next", "Shopping block on the page");
            }
          });
        }
      });

      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          pushDataLayer("Сlick on overlay close");
          closePopup();
        }
      });

      function countTimer() {
        let clock = setInterval(() => {
          if (typeof FlipClock === "function" && typeof jQuery === "function" && document.querySelector("#countdown")) {
            clearInterval(clock);
            let init_countdown, set_countdown;
            countdown = init_countdown = function () {
              countdown = new FlipClock($(".countdown"), {
                language: "en",
                clockFace: "DailyCounter",
                countdown: true,
                autoStart: false,
                showSeconds: true,
                callbacks: {
                  start: function () {
                    console.log(`start countdown`);
                  },
                  stop: function () {
                    console.log(`stop countdown`);
                  },
                },
              });

              return countdown;
            };

            document.querySelector("#countdown").addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
            });

            set_countdown = function (minutes, start) {
              let elapsed, end, left_secs, now, seconds;
              if (countdown.running) {
                return;
              }
              seconds = minutes * 60;
              now = new Date();
              start = new Date(start);
              end = start.getTime() + seconds * 1000;
              left_secs = Math.round((end - now.getTime()) / 1000);
              elapsed = false;
              if (left_secs < 0) {
                left_secs *= -1;
                elapsed = true;
              }
              countdown.setTime(left_secs);
              return countdown.start();
            };
            init_countdown();
            set_countdown(15, new Date());
          }
        }, 500);
      }
      // change EVENT btn addToCart and setDiscountCheckout
      function setDiscountCheckout() {
        let idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value;
        let idValueCart = document.querySelector("#cons .button-proceed").href.split("/")[4].split(":")[0];
        // observer
        let observer = new MutationObserver(() => {
          if (document) {
            observer.disconnect();
            idValue = document.querySelector(".js-packs input[type=radio]:checked+label").previousElementSibling.value;
            idValueCart = document.querySelector("#cons .button-proceed").href.split("/")[4].split(":")[0];
            observer.observe(document, {
              childList: true,
              subtree: true,
            });
          }
        });

        observer.observe(document, {
          childList: true,
          subtree: true,
        });

        document.querySelector("#addToCart")?.addEventListener("click", function (e) {
          e.preventDefault();
          pushDataLayer("Click on addToCart");
          addToCartCheckout(idValue);
        });
        document.querySelector("#cons .button-proceed")?.addEventListener("click", function (e) {
          e.preventDefault();
          pushDataLayer("Click on Proceed to checkout");
          addToCartCheckout(idValueCart);
        });

        async function addToCartCheckout(idValue) {
          // clearCart
          await fetch("/cart/clear.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .catch((error) => {
              console.error("Error:", error);
            });

          formData = {
            items: [
              {
                id: idValue,
                quantity: 1,
              },
            ],
          };

          await fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => {
              return response.json();
            })
            .catch((error) => {
              console.error("Error:", error);
            });

          setTimeout(() => {
            if (!localStorage.getItem("restartFunc")) {
              window.location.href = "/checkout?discount=NATURAL10";
              localStorage.setItem("restartFunc", "true");
            } else {
              window.location.pathname = "/checkout";
            }
          }, 300);
        }
      }

      document.querySelector("#purchase .slide-packs>ul>li.active-slide").setAttribute("test", "test");
      onClickPacks();
      function onClickPacks() {
        if (localStorage.getItem("appliedDiscount") && !localStorage.getItem("restartFunc")) {
          document.querySelectorAll("#purchase .slide-packs>ul>li").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (e.target.classList.contains("active-slide") && !e.target.getAttribute("test")) {
                setTimeout(() => {
                  e.target.setAttribute("test", "test");
                }, 4);
              }
              if (e.target.classList.contains("active-slide") && e.target.getAttribute("test")) {
                document.querySelector("#addToCart").click();
                e.target.removeAttribute("test");
              }
              document.querySelectorAll("#purchase .slide-packs>ul>li").forEach((i) => {
                if (e.target !== i) {
                  i.removeAttribute("test");
                }
              });
            });
          });

          document.querySelectorAll(".sidebar .list-packs").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (e.target.classList.contains("active-slide") && !e.target.getAttribute("test")) {
                setTimeout(() => {
                  e.target.setAttribute("test", "test");
                }, 4);
              }
              if (e.target.classList.contains("active-slide") && e.target.getAttribute("test")) {
                document.querySelector(".button-proceed").click();
                e.target.removeAttribute("test");
              }
              document.querySelectorAll(".sidebar .list-packs").forEach((i) => {
                if (e.target !== i) {
                  i.removeAttribute("test");
                }
              });
            });
          });
        }
      }

      function changeVisabilityApplieddiscount() {
        document.querySelectorAll(".btn_trigger_popup.not_applied_discount")?.forEach((el) => {
          el.classList.add("is_hidden");
        });
        document.querySelectorAll(".btn_trigger_popup.applied_discount")?.forEach((el) => {
          el.classList.remove("is_hidden");
        });
        setDiscountCheckout();

        if (document.querySelector(".success_block")?.classList.contains("is_hidden")) {
          document.querySelector(".success_block")?.classList.remove("is_hidden");
        }
        if (!document.querySelector(".email_opt_in")?.classList.contains("is_hidden")) {
          document.querySelector(".email_opt_in")?.classList.add("is_hidden");
        }
      }
      // Visability
      let obs = new IntersectionObserver(visibility, {
        threshold: 1,
      });
      let obs2 = new IntersectionObserver(visibility2, {
        threshold: 1,
      });
      let int = setInterval(() => {
        if (document.querySelector(".email_opt_in")) {
          clearInterval(int);
          obs.observe(document.querySelector(".email_opt_in"));
        }
      }, 100);
      let int2 = setInterval(() => {
        if (document.querySelector(".success_block")) {
          clearInterval(int2);
          obs.observe(document.querySelector(".success_block"));
        }
      }, 100);
      let int3 = setInterval(() => {
        if (document.querySelector("#getNow .not_applied_discount.getnow_visab_not_applied")) {
          clearInterval(int3);
          obs.observe(document.querySelector("#getNow .not_applied_discount.getnow_visab_not_applied"));
        }
      }, 100);
      let int4 = setInterval(() => {
        if (document.querySelector("#getNow .applied_discount.getnow_visab_applied") && document.querySelector(".overlay_popup").classList.contains("is_hidden")) {
          clearInterval(int4);
          obs.observe(document.querySelector("#getNow .applied_discount.getnow_visab_applied"));
        }
      }, 100);
      let int5 = setInterval(() => {
        if (document.querySelector(".sidebar .not_applied_discount.sidebar_visab_not_applied")) {
          clearInterval(int5);
          obs.observe(document.querySelector(".sidebar .not_applied_discount.sidebar_visab_not_applied"));
        }
      }, 100);
      let int6 = setInterval(() => {
        if (document.querySelector(".sidebar .applied_discount.sidebar_visab_applied") && document.querySelector(".overlay_popup").classList.contains("is_hidden")) {
          clearInterval(int6);
          obs.observe(document.querySelector(".sidebar .applied_discount.sidebar_visab_applied"));
        }
      }, 100);

      function visibility(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obs2.observe(i.target);
            }, 2000);
          }
        });
      }
      function visibility2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("email_opt_in")) {
              pushDataLayer("Visibility extra 10 percent popup", "step_1");
            }
            if (i.target.classList.contains("success_block")) {
              pushDataLayer("Visibility extra 10 percent popup", "step_2");
            }
            if (i.target.classList.contains("getnow_visab_not_applied")) {
              pushDataLayer("Visibility Get additional 10 off", "Shopping block on the page");
            }
            if (i.target.classList.contains("getnow_visab_applied") && document.querySelector(".overlay_popup").classList.contains("is_hidden")) {
              pushDataLayer("Visibility Additional 10 off applied next", "Shopping block on the page");
            }
            if (i.target.classList.contains("sidebar_visab_not_applied")) {
              pushDataLayer("Visibility Get additional 10 off. Slide in cart", "Slide in cart");
            }
            if (i.target.classList.contains("sidebar_visab_applied") && document.querySelector(".overlay_popup").classList.contains("is_hidden")) {
              document.querySelector(".sidebar .list-packs.active-slide").setAttribute("test", "test");
              pushDataLayer("Visibility Additional 10 off applied next'", "Slide in cart");
            }
            obs.unobserve(i.target);
          }
          obs2.unobserve(i.target);
        });
      }
      // validationForm
      function validationForm() {
        let inputValueEmail = document.querySelector(`input[name='myEmail']`).value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
        if (inputValueEmail === null) {
          document.querySelector(`input[name='email']`).classList.add("error");
          document.querySelector(`.input_validation_email`).style.display = "block";
        } else {
          document.querySelector(`input[name='email']`).classList.remove("error");
          document.querySelector(`.input_validation_email`).style.display = "none";
        }

        if (inputValueEmail !== null) {
          mailToKlavio(document.querySelector(`input[name='myEmail']`).value);

          async function mailToKlavio(email) {
            formData = {
              email: email,
              listId: "Rn9LMT",
            };
            await fetch("https://conversionrate.top/api/naturalpatch/klavio/emailsend", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                if (data.status === "error") {
                  document.querySelector(".input_validation_email").textContent = "You've already given us that email address before";
                  document.querySelector(`.input_validation_email`).style.display = "block";
                  document.querySelector(`input[name='email']`).classList.remove("error");
                } else {
                  document.querySelector(`.input_validation_email`).style.display = "none";
                  document.querySelector(`input[name='email']`).classList.remove("error");
                  document.querySelector(".input_validation_email").textContent = "Your email doesn't seem to be valid";

                  countdown.stop();
                  localStorage.setItem("appliedDiscount", "yes");
                  top.fbq("track", "Lead");
                  changeVisabilityApplieddiscount();
                  onClickPacks();
                }
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }
        }
      }
    }

    pushDataLayer("loaded");
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "changing_first_order_discount", "variant_1");
      }
    }, 200);
  }
}, 600);
