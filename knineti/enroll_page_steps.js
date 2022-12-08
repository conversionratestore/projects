let newFunk = setInterval(() => {
    if (document.querySelector(".payment_inform_box")) {
        clearInterval(newFunk)


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
                    eventCategory: `Exp: Enroll Improvements ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: Enroll Improvements ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let newStyle =/*html */  `
        <style>
            .payment_inform_wrapp p.subtitle_text,
            .payment_inform_wrapp .cus_info,
            .payment_order p.subtitle_text,
            .paymen_method p.subtitle_text,
            .payment_inform_wrapp,
            .paymen_method{
                display: none;
            }
            .text_mobile,
            .customer_information_wrapper > .row:nth-child(9){
                display: none !important;
            }
            .payment_order{
                margin-bottom: 30px !important;
            }
            .payment_inform_box .payment_plan_wrapp p.subtitle_text{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-transform: uppercase;
                color: #754E0C !important;
                margin-bottom: 15px;
            }
            .payment_plan_wrapp.payment_plan .input_wrapper{
                padding: 16px;
            }
            .payment_plan_wrapp.payment_plan .input_wrapper .onetime_sec{
                margin-bottom: 13px;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div label{
                font-size: 14px;
                line-height: 19px;
                color: #16377B !important;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label{
                color: #808080 !important;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div >input:checked + label .radio_style .ellipse{
                width: 8.4px;
                height: 8.4px;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label > span:nth-child(2) > span:nth-child(1){
                margin-left: 2px;
            }
            section .reviews_box{
                margin-top: 60px !important;
            }
            .tooltip_box{
                width: 14px;
                height: 14px;
                margin-left: 4px;
                cursor: pointer;
            }
            .tippy-tooltip{
                max-width: 424px !important;
                background: #FFFFFF;
                border-radius: 8px;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #808080;
                box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.15);
                filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
            }
            .new_guarantee_mob .tippy-tooltip{
                left: 55px !important;
            }
            .new_guarantee_mob .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                left: 343px !important;
                }
            .new_guarantee_mob .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
                left: 262px !important;
            }
            @media (min-width: 768px) {
                .tippy-tooltip{
                    left: 55px !important;
                }
                .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                left: 343px !important;
                }
                .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
                    left: 343px !important;
                }
            }
            .tippy-content{
                padding: 16px;
            }
            .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                border-bottom-color: #FFFFFF;
            }
            .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
                border-top-color: #ffffff;
            }
            .payment_inform_wrapp{
                margin: 19px 0px -30px !important;
            }
            .first_block span.top-level{
                font-weight: 400;
                font-size: 14px;
                line-height: 20px !important;
                top: -12px !important;
                left: 12px !important;
                padding: 0 6px !important;
            }
            body .first_block form input, 
            body form select, 
            body form #email, 
            body form input#cvv, 
            body .contact-form input[type=text], 
            body .contact-form input[type=email], 
            body .contact-form textarea, 
            body form select.checkout-address,
            body select.mm, 
            body input#cvv {
                border: 1px solid #E7E7E7 !important;
                border-radius: 4px !important;
                padding-top: 11px !important;
                padding-bottom: 11px !important;
                margin: 0 !important;
                padding-right: 35px !important;
            }
            .customer_information_wrapper > .row:nth-child(7) > .col-md-12,
            .customer_information_wrapper > .row:nth-child(8) > .col-md-12,
            .paypament-details > .row:nth-child(3) > .col-md-6{
                position: relative;
            }
            .customer_information_wrapper > .row:nth-child(7) > .col-md-12::after,
            .customer_information_wrapper > .row:nth-child(8) > .col-md-12::after,
            .paypament-details > .row:nth-child(3) > .col-md-6::after{
                content: '';
                position: absolute;
                right: 10px;
                top: 12px;
                width: 20px;
                height: 20px;
                background: url(https://conversionratestore.github.io/projects/knineti/img/expand_more_black.svg) no-repeat center center;
                pointer-events: none;
                transition: all 0.3s ease;
            }
            .customer_information_wrapper > .row:nth-child(7) > .col-md-12.is_open::after,
            .customer_information_wrapper > .row:nth-child(8) > .col-md-12.is_open::after,
            .paypament-details > .row:nth-child(3) > .col-md-6.is_open::after{
                transform: rotateX(180deg);

            }
            .customer_information_wrapper p.email-form-error,
            .customer_information_wrapper p.form-error, 
            .customer_information_wrapper span.form-error,
            .paypament-details p.form-error, 
            .paypament-details span.form-error{
                margin-top: 10px !important;
                margin-bottom: 0 !important;
                display: none;
            }
            .customer_information_wrapper > .row{
                margin-bottom: 22px;
                width: 100%;
                padding: 0;
                margin-left: 0;
                margin-right: 0;
            }
            .payment_inform_box li > div.paypament-details .row{
                margin-bottom: 22px !important;
            }
            .customer_information_wrapper{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin: 0;
            }
            .customer_information_wrapper > .row:nth-child(7),
            .customer_information_wrapper > .row:nth-child(8){
                width: 48.6%;
            }
            .customer_information_wrapper > .row:nth-child(8){
                margin-left: 15px;
            }
            .customer_information_wrapper > .row:nth-child(2),
            .customer_information_wrapper > .row:nth-child(5){
                display: flex;
                justify-content: space-between;
            }
            .customer_information_wrapper > .row:nth-child(2) > .col-md-6:nth-child(2),
            .customer_information_wrapper > .row:nth-child(5) > .col-md-6:nth-child(2){
                margin-left: 15px;
            }
            .customer_information_wrapper > .row:nth-child(2) > .col-md-6,
            .customer_information_wrapper > .row:nth-child(5) > .col-md-6{
                width: 48.6%;
            }
            .customer_information_wrapper > .row > .col-md-6,
            .customer_information_wrapper > .row > .col-md-12{
                padding: 0;
            }
            .paymen_method{
                margin-top: 10px;
            }
            img.ssl-logo{
                top: 0 !important;
            }
            body .payment_inform_box li > div.paypament-details .row:nth-child(1), 
            body .payment_inform_box li > div.paypament-details .row:nth-child(2){
                margin-top: 110px !important;
                margin-bottom: 22px !important;
                width: 48.6% !important;
            }
            body form .payment_inform_box li > div.paypament-details .row:nth-child(3) > div.col-md-6{
                margin-right: 15px !important;
            }
            body .first_block .submit_btn input#submit{
                margin: 0 auto !important;
                background: #233973;
                max-width: 260px;
                height: 58px;
                font-weight: 600;
                font-size: 16px !important;
                line-height: 22px;
                text-align: center;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                border-radius: 10px !important;
                color: #FFFFFF !important;
            }
            body .first_block .submit_btn input#submit_disabled{
                margin: 0 auto !important;
            }
            .payment_inform_box li.paymen_method p.support_text{
                color: #808080 !important;
                margin: 9px 0 0 !important;
            }
            body .scroll_bar{
                margin-bottom: 20px !important;
            }
            .payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label > span:nth-child(2){
                display: flex;
                align-items: center;
            }
            .steps{
                margin-bottom: 30px;
                padding-top: 15px;
            }
            .steps ul{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
            }
            .steps ul li{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .steps ul li + li{
                margin-left: 10px;
            }
            .steps ul li > span{
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E7E7E7;
                border-radius: 8px;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                color: #808080;
                width: 32px;
                height: 32px;
                margin-right: 10px;
                position: relative;
            }
            .steps ul li.active_step > span{
                background: #16377B;
                color: #FFFFFF;
            }
            .steps ul li.visited_step > span{
                background: #E9F1F9;
                border: 1px solid #DFE8F0;
                line-height: 0;
                font-size: 0;
            }
            .steps ul li.visited_step > span::after{
                position: absolute;
                content: '';
                background: url(https://conversionratestore.github.io/projects/knineti/img/check_step.svg) no-repeat;
                z-index: 1111;
                width: 12px;
                height: 9px;
                background-repeat: no-repeat;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .steps p + p{
                margin-left: 4px;
            }
            .steps p > span{
                width: 4px;
                height: 4px;
                border-radius: 50%;
                display: inline-block;
                background: #E7E7E7;
            }
            .steps p > span + span{
                margin-left: 4px;
            }
            .steps p.active_step > span{
                background: #16377B;
            }
            /*check_step */
            .check_step{
                margin: 0 auto 15px;
                max-width: 536px;
            }
            .check_step ul {
                padding: 0;
            }
            .check_step ul li{
                display: none;
                align-items: center;
                max-width: fit-content;
            }
            [data-checkstep="2"],
            [data-checkstep="3"]{
                cursor: pointer;
            }
            .check_step ul li.active_step{
                display: flex;
            }
            .check_step span{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                text-transform: uppercase;
                color: #754E0C;
            }
            .check_step svg{
                margin-right: 16px;
            }
            /*btn_continue */
            .btn_continue_wrap{
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
            }
            .btn_continue{
                display: flex;
                align-items: center;
                justify-content: center;
                background: #233973;
                border-radius: 10px;
                outline: none;
                border: none;
                height: 58px;
                max-width: 260px;
                width: 100%;
                font-weight: 600;
                font-size: 16px;
                line-height: 22px;
                letter-spacing: -0.01em;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .is_hidden{
                display: none !important;
            }
            .payment_inform_box{
                max-width: 536px;
                width: 100%;
                flex-direction: column;
                margin: 0 auto !important;
            }
            .payment_inform_box li{
                width: 100% !important;  
            }
                #address-form > .row{
                    display: none;
                }
                .scroll_test{
                    padding: 10px 0 0;
                }
                .new_guarantee_mob{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 18px 22px;
                    background: #E9F1F9;
                    border-radius: 8px;
                    margin: 0 0 15px;
                }
                .new_guarantee_mob svg:nth-child(1){
                    flex: 0 0 40px;
                    width: 100%;
                    height: 100%;
                }
                .new_guarantee_mob p{
                    max-width: 185px;
                    margin: 0 0 0 20px;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 22px;
                    color: #16377B !important;
                }
                .new_guarantee_mob .tooltip_box{
                    flex: 0 0 20px;
                    height: 100%;
                    width: 100%;
                    margin: 0 0 0 auto !important;
                }
                @media (max-width: 768px) {
                    .payment_inform_box .payment_plan_wrapp.payment_plan  .input_wrapper > div label{
                        align-items: flex-start;
                    }
                    .payment_inform_box .input_wrapper .radio_style{
                        margin-top: 4px;
                    }
                    .tooltip_box{
                        display: inline-block;
                        width: 30px;
                        height: 18px;
                        padding: 4px;
                        position: relative;
                    }
                    .tooltip_box svg{
                        position: absolute;
                        top: 8px;
                        left: 0;
                    }
                    .new_guarantee_mob .tooltip_box{
                        display: unset;
                        padding: 0;
                        position: unset;
                    }
                    .tippy-popper{
                        padding: 0 15px;
                    }
                    body .scroll_bar {
                        margin-bottom: 0px !important;
                    }
                    .tippy-popper{
                        padding: 0 !important;
                    }
                    .tippy-tooltip{
                        max-width: 320px !important;
                    }
                    .tippy-content{
                        padding: 11px 12px;
                    }
                    .new_guarantee_mob .tippy-tooltip{
                        left: -10px !important;
                        top: -15px !important;
                    }
                    .new_guarantee_mob .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                        left: 287px !important;
                    }
                    .monthly_sec .tippy-tooltip{
                        top: -30px !important;
                        left: -11px !important;
                    }
                    .monthly_sec .tippy-tooltip[data-placement^="top"] > .tippy-arrow{
                        left: 82px !important;
                    }
                    .monthly_sec .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                        left: 82px !important;
                    }
                    body .payment_inform_box p.subtitle_text{
                        margin-bottom: 15px !important;
                    }
                    .payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label > span:nth-child(2){
                        display: block;
                    }
                    body .payment_inform_box {
                        margin-bottom: 30px !important;
                    }
                    .btn_continue{
                        max-width: unset;
                    }
                    .customer_information_wrapper > .row:nth-child(2),
                    .customer_information_wrapper > .row:nth-child(5){
                        flex-direction: column;
                    }
                    .customer_information_wrapper > .row:nth-child(2) > .col-md-6,
                    .customer_information_wrapper > .row:nth-child(5) > .col-md-6{
                        width: 100%;
                    }
                    .customer_information_wrapper > .row:nth-child(2) > .col-md-6:nth-child(2),
                    .customer_information_wrapper > .row:nth-child(5) > .col-md-6:nth-child(2){
                        margin-top: 22px;
                        margin-left: 0;
                    }
                    .customer_information_wrapper > .row:nth-child(7),
                    .customer_information_wrapper > .row:nth-child(8){
                        width: 100%;
                    }
                    .customer_information_wrapper > .row:nth-child(8){
                        margin-left: 0;
                    }
                    body .first_block form input, 
                    body form select, 
                    body form #email, 
                    body form input#cvv, 
                    body .contact-form input[type=text], 
                    body .contact-form input[type=email], 
                    body .contact-form textarea, 
                    body form select.checkout-address,
                    body select.mm, 
                    body input#cvv {
                        height: 42px !important;
                    }
                    .payment_inform_wrapp {
                        margin: 19px 0px -20px !important;
                    }
                    .payment_inform_box li.paymen_method{
                        margin: 0 !important;
                    }
                    body .first_block .submit_btn input#submit{
                        max-width: unset;
                        height: 58px !important;
                    }
                    body .payment_inform_box li > div.paypament-details .row:nth-child(1),
                    body .payment_inform_box li > div.paypament-details .row:nth-child(2){
                        width: 100% !important;   
                    }
                    body .payment_inform_box li > div.paypament-details .row:nth-child(1){
                        margin-top: 70px !important;
                        margin-bottom: 0 !important;
                    }
                    body .payment_inform_box li > div.paypament-details .row:nth-child(2){
                        margin-top: 22px !important;
                    }
                }
                @media (max-width: 320px) {
                    .new_guarantee_mob{
                        padding: 12px 17px;
                    }
                    .new_guarantee_mob p{
                        font-size: 13px;
                    }
                    .new_guarantee_mob .tippy-tooltip{
                        left: 0px !important;
                    }
                    .new_guarantee_mob .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                        left: 261px !important;
                    }
                }
                @media (max-width: 280px) {
                    .new_guarantee_mob p{
                        font-size: 11px;
                    }
                    .check_step span{
                        font-size: 17px;
                    }
                    .tippy-tooltip{
                        font-size: 10px;
                    }
                    .payment_inform_box li > div > p{
                        font-size: 9px !important;
                    }
                    .new_guarantee_mob .tippy-tooltip[data-placement^=bottom]>.tippy-arrow{
                        left: 221px !important;
                    }
                    .monthly_sec .tippy-tooltip {
                        top: -47px !important;
                        left: 30px !important;
                    }
                }
            
        </style>
        `

        let books = /*html */ `
            <div class="scene_box">
                <div class="card_box">
                    <ul class="first_step">
                        <li class="test"></li>
                    </ul>
                    <ul class="second_step">
                        <li class="test"></li>
                    </ul>
                    <ul class="third_step">
                        <li class="test"></li>
                    </ul>
                </div>
            </div>
        `

        let steps = /*html */ `
            <div class="steps">
                <ul>
                    <li data-step="1" class="active_step">
                        <span>1</span>
                        <p class="active_step">
                            <span></span><span></span><span></span>
                        </p>
                        <p>
                            <span></span><span></span><span></span>
                        </p>
                    </li>
                    <li data-step="2">
                        <span>2</span>
                        <p>
                            <span></span><span></span><span></span>
                        </p>
                        <p>
                            <span></span><span></span><span></span>
                        </p>
                    </li>
                    <li data-step="3">
                        <span>3</span>
                    </li>
                </ul>
            </div>
        `

        let checkStep = /*html */`
            <div class="check_step">
                <ul>
                    <li class="active_step"  data-checkStep="1">
                        <span>Order summary</span>
                    </li>
                    <li data-checkStep="2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15.1L7.3493 10L12.5 4.90004L10.9143 3.33337L4.16667 10L10.9143 16.6667L12.5 15.1Z"
                            fill="#16377B" />
                        </svg>
                        <span>Contact information</span>
                    </li>
                    <li data-checkStep="3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 15.1L7.3493 10L12.5 4.90004L10.9143 3.33337L4.16667 10L10.9143 16.6667L12.5 15.1Z"
                            fill="#16377B" />
                        </svg>
                        <span>Payment method</span>
                    </li>
                </ul>
            </div>
        `

        let newBtnContinue =  /*html */`
            <div class="btn_continue_wrap">
                <button class="btn_continue" data-count="1">Continue</button>
            </div>
        `


        document.head.insertAdjacentHTML("beforeend", newStyle)
        document.querySelector('form#address-form')?.insertAdjacentHTML('beforebegin', steps)
        document.querySelector('form#address-form')?.insertAdjacentHTML('afterbegin', checkStep)
        document.querySelector('form#address-form')?.insertAdjacentHTML('afterend', newBtnContinue)


        if (document.querySelector('.payment_plan_wrapp #payment_plan_id')) {
            document.querySelector('.payment_plan_wrapp #payment_plan_id').textContent = 'Choose Payment plan'
        }
        if (document.querySelector("#selected-state-us option:last-child")) {
            document.querySelector("#selected-state-us option:last-child").textContent = 'Select State'
        }

        let intNumber = setInterval(() => {
            if (document.querySelector('#phone')) {
                clearInterval(intNumber)
                document.querySelector('#phone').value = '00000000000'
                console.log(`>>>>>>>>>>>>>TEL`,document.querySelector('#phone').value)
            }
        }, 100)

        document.querySelector('.payment_inform_box .payment_plan_wrapp .input_wrapper > div.monthly_sec label span:nth-child(2)')?.insertAdjacentHTML('beforeend', `<span class="tooltip_box" data-tolltip
                data-title="If you choose the 3 month installment payment plan when you purchase, your card will automatically be charged the same amount as your initial installment payment 30 days and 60 days after your initial installment payment.">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12.6 7C12.6 10.0928 10.0928 12.6 7 12.6C3.90721 12.6 1.4 10.0928 1.4 7C1.4 3.90721 3.90721 1.4 7 1.4C10.0928 1.4 12.6 3.90721 12.6 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM6.29954 4.2C6.29954 3.8134 6.61295 3.5 6.99954 3.5C7.38614 3.5 7.69954 3.8134 7.69954 4.2C7.69954 4.5866 7.38614 4.9 6.99954 4.9C6.61295 4.9 6.29954 4.5866 6.29954 4.2ZM6.29954 6.3C6.29954 5.9134 6.61295 5.6 6.99954 5.6C7.38614 5.6 7.69954 5.9134 7.69954 6.3V9.8C7.69954 10.1866 7.38614 10.5 6.99954 10.5C6.61295 10.5 6.29954 10.1866 6.29954 9.8V6.3Z"
                    fill="#16377B" />
                </svg>
            </span>`)


        if (window.innerWidth <= 768) {
            document.querySelector('.text_mobile')?.insertAdjacentHTML('afterend', `<div class="scroll_test"></div><div data-tolltipMob  data-titlemob="If you are not satisfied with the masterclass, please contact us within 90 days of your enrollment to get a full refund" class="new_guarantee_mob">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_181_3455)">
                            <path
                              d="M39.6565 30.8994L35.3623 26.6047C34.9195 27.5367 34.0725 28.2528 32.9979 28.5081L32.4129 28.647L32.2739 29.2325C32.0365 30.2324 30.9198 32.1154 28.5692 31.9243L27.9691 31.8755L27.6562 32.3892C27.1293 33.2538 26.2449 33.8447 25.2617 34.02L30.8991 39.6568C31.1863 39.944 31.6017 40.062 31.997 39.9686C32.3923 39.8754 32.7111 39.584 32.8395 39.1987L34.4291 34.4293L39.1985 32.8397C39.5838 32.7113 39.8752 32.3925 39.9684 31.9972C40.0617 31.602 39.9437 31.1865 39.6565 30.8994Z"
                              fill="#16377B" />
                            <path
                              d="M12.3436 32.3892L12.0306 31.8755L11.4305 31.9243C9.07999 32.1154 7.96327 30.2324 7.72584 29.2325L7.58686 28.647L7.00186 28.5081C5.92725 28.2528 5.0803 27.5367 4.63749 26.6047L0.343267 30.8993C0.0560797 31.1865 -0.0619672 31.6019 0.0313922 31.9972C0.124673 32.3925 0.41608 32.7113 0.801314 32.8397L5.57069 34.4293L7.1603 39.1987C7.28874 39.584 7.60749 39.8754 8.0028 39.9686C8.39811 40.0619 8.8135 39.944 9.10069 39.6568L14.7381 34.02C13.7548 33.8447 12.8705 33.2538 12.3436 32.3892Z"
                              fill="#16377B" />
                            <path
                              d="M25.6548 31.1695L26.7194 29.4227L28.7585 29.5883C29.3341 29.6349 29.8598 29.2541 29.9934 28.691L30.4662 26.7005L32.4561 26.2279C33.019 26.0942 33.4001 25.5695 33.3533 24.9928L33.1876 22.9542L34.9344 21.8897C35.4285 21.5886 35.6289 20.972 35.4062 20.438L34.6191 18.55L35.9512 16.9978C36.328 16.5588 36.3281 15.9105 35.9514 15.4714L34.6191 13.9187L35.4062 12.0306C35.6289 11.4966 35.4285 10.8799 34.9344 10.5788L33.1876 9.51432L33.3533 7.47572C33.4001 6.899 33.019 6.37439 32.4561 6.24064L30.4662 5.76807L29.9934 3.77752C29.8598 3.21447 29.3341 2.83361 28.7585 2.88025L26.7194 3.04588L25.6548 1.299C25.3537 0.804785 24.7367 0.604707 24.2029 0.827285L22.3151 1.61494L20.763 0.282598C20.324 -0.0941992 19.6755 -0.0941992 19.2365 0.282598L17.6844 1.61479L15.7966 0.827129C15.2625 0.604394 14.6459 0.804707 14.3448 1.29885L13.2801 3.04572L11.241 2.8801C10.6643 2.83393 10.1398 3.21432 10.0061 3.77736L9.53335 5.76791L7.54343 6.24064C6.98054 6.37439 6.59936 6.899 6.64624 7.47572L6.81187 9.51432L5.06507 10.5788C4.57101 10.8799 4.37062 11.4965 4.59327 12.0306L5.38046 13.9187L4.04812 15.4714C3.6714 15.9105 3.67147 16.5588 4.04827 16.9978L5.38046 18.55L4.59343 20.438C4.37077 20.972 4.57116 21.5886 5.06522 21.8897L6.81202 22.9542L6.6464 24.9928C6.5996 25.5695 6.98069 26.0942 7.54358 26.2279L9.53351 26.7005L10.0062 28.691C10.14 29.2541 10.6645 29.6345 11.2412 29.5883L13.2803 29.4227L14.3449 31.1695C14.646 31.6637 15.2626 31.864 15.7968 31.6413L17.6846 30.8536L19.2366 32.1857C19.6756 32.5625 20.3241 32.5625 20.7631 32.1857L22.3151 30.8536L24.203 31.6413C24.7367 31.8638 25.3537 31.6637 25.6548 31.1695ZM19.5732 24.5943C19.1157 25.0519 18.3736 25.0521 17.9159 24.5943L11.0123 17.6906C10.5546 17.2331 10.5546 16.491 11.0123 16.0334L14.5626 12.483C15.0201 12.0253 15.7622 12.0253 16.2198 12.483L18.7445 15.0076L24.4072 9.34494C24.8648 8.88729 25.6068 8.88729 26.0644 9.34494L29.6148 12.8953C30.0724 13.3529 30.0724 14.0949 29.6148 14.5525L19.5732 24.5943Z"
                              fill="#629DD9" />
                            <path
                              d="M19.573 17.4935C19.1155 17.9511 18.3734 17.9511 17.9158 17.4935L15.3911 14.9689L13.498 16.8619L18.7445 22.1082L27.1288 13.7239L25.2358 11.8308L19.573 17.4935Z"
                              fill="#16377B" />
                          </g>
                          <defs>
                            <clipPath id="clip0_181_3455">
                              <rect width="40" height="40" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <p>90 days unconditional money-back guarantee</p>
                        <svg class="tooltip_box"
                          width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM8.99935 6C8.99935 5.44772 9.44706 5 9.99935 5C10.5516 5 10.9993 5.44772 10.9993 6C10.9993 6.55228 10.5516 7 9.99935 7C9.44706 7 8.99935 6.55228 8.99935 6ZM8.99935 9C8.99935 8.44772 9.44706 8 9.99935 8C10.5516 8 10.9993 8.44772 10.9993 9V14C10.9993 14.5523 10.5516 15 9.99935 15C9.44706 15 8.99935 14.5523 8.99935 14V9Z"
                            fill="#16377B" />
                        </svg>
                      </div>`)
        }

        if (document.querySelector('.btn_continue')) {
            document.querySelector('.btn_continue').addEventListener('click', (e) => {
                e.preventDefault()
                document.querySelectorAll('.steps ul li').forEach(el => {
                    document.querySelectorAll('.check_step ul li').forEach(item => {
                        if (e.target.getAttribute('data-count') === `1`) {
                            if (!e.currentTarget.getAttribute("data-test")) {
                                pushDataLayer('Click on btn Continue step "Order summary')
                            }
                            e.currentTarget.setAttribute("data-test", "1")
                            if (el.getAttribute('data-step') === '1') {
                                el.classList.add('visited_step')
                                el.classList.remove('active_step')
                                el.querySelector('p:nth-of-type(2)').classList.add('active_step')
                            }
                            if (el.getAttribute('data-step') === '2') {
                                el.classList.add('active_step')
                                el.querySelector('p:nth-of-type(1)').classList.add('active_step')
                            }

                            if (item.getAttribute('data-checkStep') === `1`) {
                                item.classList.remove('active_step')
                            }
                            if (item.getAttribute('data-checkStep') === `2`) {
                                item.classList.add('active_step')
                            }

                            document.querySelector('.payment_order').classList.add('is_hidden')
                            document.querySelector('.payment_plan_wrapp.payment_plan').classList.add('is_hidden')
                            document.querySelector('.payment_inform_wrapp').style.display = 'block'

                            onScrollTop()

                            setTimeout(() => {
                                e.target.setAttribute('data-count', `2`)
                                if (!document.querySelector('.testik')) {
                                    e.target.insertAdjacentHTML('afterend', `<span class="testik"></span>`)
                                }
                            }, 600)
                        }
                        if (e.target.getAttribute('data-count') === `2`) {
                            if (!e.currentTarget.getAttribute("data-test")) {
                                pushDataLayer('Click on btn Continue step "Contact information')
                            }
                            e.currentTarget.setAttribute("data-test", "1")
                            validateBtnStepSecond(el, item, e.target)
                        }
                    })

                })

                setTimeout(() => {
                    if (e.target.getAttribute("data-test")) {
                        e.target.removeAttribute("data-test")
                    }
                }, 500)
            })
        }

        if (document.querySelector('.check_step')) {
            document.querySelectorAll('.check_step ul li').forEach(e => {
                e.addEventListener('click', el => {
                    if (el.currentTarget.getAttribute('data-checkStep') === `2` && el.currentTarget.classList.contains('active_step')) {
                        document.querySelectorAll('.steps ul li').forEach(i => {
                            if (!el.currentTarget.getAttribute("data-test")) {
                                pushDataLayer('Click on btn Back step "Contact information')
                            }
                            el.currentTarget.setAttribute("data-test", "1")
                            if (i.getAttribute('data-step') === '1') {
                                i.classList.remove('visited_step')
                                i.classList.add('active_step')
                                i.querySelector('p:nth-of-type(2)').classList.remove('active_step')
                            }
                            if (i.getAttribute('data-step') === '2') {
                                i.classList.remove('active_step')
                                i.querySelector('p:nth-of-type(1)').classList.remove('active_step')
                            }
                            el.currentTarget.classList.remove('active_step')
                            el.currentTarget.previousElementSibling.classList.add('active_step')

                            document.querySelector('.payment_order').classList.remove('is_hidden')
                            document.querySelector('.payment_plan_wrapp.payment_plan').classList.remove('is_hidden')
                            document.querySelector('.payment_inform_wrapp').style.display = 'none'


                            if (document.querySelector('.btn_continue').getAttribute('data-count') === `2`) {
                                document.querySelector('.btn_continue').setAttribute('data-count', `1`)
                            }

                            onScrollTop()
                        })
                    }

                    if (el.currentTarget.getAttribute('data-checkStep') === `3` && el.currentTarget.classList.contains('active_step')) {
                        document.querySelectorAll('.steps ul li').forEach(i => {
                            if (!el.currentTarget.getAttribute("data-test")) {
                                pushDataLayer('Click on btn Back step "Payment method"')
                            }
                            el.currentTarget.setAttribute("data-test", "1")
                            if (i.getAttribute('data-step') === '2' && i.classList.contains('visited_step')) {
                                i.classList.remove('visited_step')
                                i.classList.add('active_step')
                                i.querySelector('p:nth-of-type(2)').classList.remove('active_step')
                            }
                            if (i.getAttribute('data-step') === '3' && i.classList.contains('active_step')) {
                                i.classList.remove('active_step')
                            }

                            el.currentTarget.classList.remove('active_step')
                            el.currentTarget.previousElementSibling.classList.add('active_step')

                            document.querySelector('.payment_inform_wrapp').classList.remove('is_hidden')
                            document.querySelector('.paymen_method').style.display = 'none'
                            document.querySelector('#address-form > .row').style.display = 'none'

                            if (document.querySelector('.btn_continue').getAttribute('data-count') === `3`) {
                                document.querySelector('.btn_continue').setAttribute('data-count', `2`)
                                document.querySelector('.btn_continue_wrap').classList.remove('is_hidden')
                            }

                            onScrollTop()
                        })
                    }

                    setTimeout(() => {
                        if (e.getAttribute("data-test")) {
                            e.removeAttribute("data-test")
                        }
                    }, 500)

                })
            })
        }


        if (document.querySelector('#submit')) {
            document.querySelector('#submit').addEventListener('click', (e) => {
                window.alert = function () { };
                if (!e.target.classList.contains("on_click")) {
                    pushDataLayer('Click on btn Enroll now')
                }
            })
        }

        document.querySelectorAll('form select').forEach(el => {
            el.addEventListener('click', (e) => {
                if (e.target.closest('.col-md-12')) {
                    e.target.closest('.col-md-12').classList.toggle('is_open')
                }
                if (e.target.closest('.col-md-6')) {
                    e.target.closest('.col-md-6').classList.toggle('is_open')
                }
            })
        })

        document.addEventListener("click", (e) => {
            if (!e.target.matches('form select')) {
                document.querySelectorAll('form .col-md-12').forEach(el => {
                    if (el.classList.contains('is_open')) {
                        el.classList.remove('is_open')
                    }
                })
                document.querySelectorAll('form .col-md-6').forEach(el => {
                    if (el.classList.contains('is_open')) {
                        el.classList.remove('is_open')
                    }
                })
            }
        })

        function onScrollTop() {
            if (window.innerWidth <= 768) {
                document.querySelector(".scroll_test")?.scrollIntoView({ block: "start", behavior: "smooth" })
            } else {
                document.querySelector(".steps")?.scrollIntoView({ block: "start", behavior: "smooth" })
            }
        }

        function validateBtnStepSecond(el, item, e) {
            document.querySelector('#submit').classList.add("on_click")
            document.querySelector('#submit').click()

            setTimeout(() => {
                if (document.querySelector('#submit').classList.contains("on_click")) {
                    document.querySelector('#submit').classList.remove("on_click")
                }
            }, 7000)

            let fName = $('#first-name').next().is(':visible')
            let lName = $('#last-name').next().is(':visible')
            let email = $('#email').next().is(':visible')
            let address = $('#address1').next().is(':visible')
            let city = $('#city').next().is(':visible')
            let zipCode = $('#zip').next().is(':visible')
            let selectCountry = $('#selected-country').next().is(':visible')
            let selectState = $('#selected-state-us').next().is(':visible')
            let number = $('#phone').next().is(':visible')
            let cardNumber = $('#cardno').next()[0]
            let nameCard = $('#cardname').next()[0]
            let month = $('#month').next()[0]
            let year = $('#year1').next()[0]
            let cvv = $('#cvv').next().next()[0]

            if (!fName && !lName && !email && !address && !city && !zipCode && !selectCountry && !selectState && !number) {
                if (el.getAttribute('data-step') === '2') {
                    el.classList.add('visited_step')
                    el.classList.remove('active_step')
                    el.querySelector('p:nth-of-type(2)').classList.add('active_step')
                }
                if (el.getAttribute('data-step') === '3') {
                    el.classList.add('active_step')
                }
                if (item.getAttribute('data-checkStep') === `2`) {
                    item.classList.remove('active_step')
                }
                if (item.getAttribute('data-checkStep') === `3`) {
                    item.classList.add('active_step')
                }

                document.querySelector('.payment_inform_wrapp').classList.add('is_hidden')
                document.querySelector('.paymen_method').style.display = 'block'

                cardNumber.style.display = 'none'
                nameCard.style.display = 'none'
                month.style.display = 'none'
                year.style.display = 'none'
                cvv.style.display = 'none'

                document.querySelector('#address-form > .row').style.display = 'block'
                e.closest('.btn_continue_wrap').classList.add('is_hidden')

                onScrollTop()

                setTimeout(() => {
                    e.setAttribute('data-count', `3`)
                }, 600)
            }
        }


        let tippyRunMob = setInterval(() => {
            if (typeof tippy === "function" && document.querySelector("[data-titlemob]")) {
                clearInterval(tippyRunMob)
                document.querySelectorAll("[data-titlemob]").forEach((el) => {
                    if (innerWidth <= 768) {
                        tippy(el, {
                            content: el.getAttribute("data-titlemob"),
                            trigger: "click",
                            placement: "bottom-end",
                            appendTo: function () {
                                return el
                            },
                            onTrigger(inst, e) {
                                e.stopPropagation()
                                e.preventDefault()
                                pushDataLayer(`Clicks on hints '90 days unconditional money-back guarantee'`)
                            },
                            onShown(e) {
                                pushDataLayer(`Shown 'If you are not satisfied with the masterclass, please contact us within 90 days of your enrollment to get a full refund'`)
                            },
                        })
                    }
                })
            }
        }, 500)

        let tippyRun = setInterval(() => {
            if (typeof tippy === "function" && document.querySelector("[data-tolltip]")) {
                clearInterval(tippyRun)
                document.querySelectorAll("[data-title]").forEach((el) => {
                    if (innerWidth <= 768) {
                        tippy(el, {
                            content: el.getAttribute("data-title"),
                            trigger: "click",
                            placement: "top",
                            appendTo: function () {
                                return el.parentElement
                            },
                            onTrigger(inst, e) {
                                e.stopPropagation()
                                e.preventDefault()
                                pushDataLayer(`Clicks on hints '3 monthly payments'`)
                            },
                            onShown(e) {
                                pushDataLayer(`Shown '3 monthly payments'`)
                            },
                        })
                    } else {
                        tippy(el, {
                            content: el.getAttribute("data-title"),
                            placement: "top-end",
                            // trigger: "click",
                            appendTo: function () {
                                return document.querySelector(".tooltip_box")
                            },
                            onTrigger(e) {
                                pushDataLayer(`Hover on hints '3 monthly payments'`)
                            },
                            onShown(e) {
                                pushDataLayer(`Shown '3 monthly payments'`)
                            },
                        })
                    }
                })
            }
        }, 500)


        if (document.querySelector(".steps")) {
            let obs = new IntersectionObserver(visibility, {
                threshold: 1
            })

            obs.observe(document.querySelector('.payment_plan_wrapp.payment_plan'))
            obs.observe(document.querySelector('.btn_continue[data-count="1"]'))

            let int = setInterval(() => {
                if (document.querySelector('.testik')) {
                    clearInterval(int)
                    obs.observe(document.querySelector('.testik'))
                }
            }, 100)



            obs.observe(document.querySelector('.submit_btn input#submit'))

            function visibility(entries) {
                entries.forEach(i => {
                    if (i.isIntersecting) {
                        if (i.target.classList.contains('payment_plan_wrapp')) {
                            pushDataLayer('Visibility block Choose Payment plan')
                        }
                        if (i.target.getAttribute('data-count') === "1") {
                            pushDataLayer(`Visibility btn Continue 1 ${i.target.getAttribute('data-count')}`)
                        }
                        if (i.target.classList.contains('testik')) {
                            pushDataLayer(`Visibility btn Continue 2`)
                        }
                        if (i.target.getAttribute('id') === "submit") {
                            pushDataLayer('Visibility btn Enroll now')
                        }

                        obs.unobserve(i.target)
                    }
                })
            }
        }


        pushDataLayer("loaded")

        const record = setInterval(() => {
            if (typeof clarity === "function") {
                clearInterval(record)
                clarity("set", "enroll_improvements", "variant_1")
            }
        }, 200)
        document.querySelector(".exp")?.remove()
    }
}, 10)
