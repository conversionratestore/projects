if (window.location.pathname === "/mc/") {
  let startFunc = setInterval(() => {
    if (document.querySelector("#player")) {
      clearInterval(startFunc)

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
            eventCategory: `Exp: New reg/fw flow ${eventVar}`,
            eventAction: `${actionDataLayer}`,
            eventLabel: `${labelDataLayer}`,
          })
        } else {
          console.log(actionDataLayer)
          dataLayer.push({
            event: "event-to-ga",
            eventCategory: `Exp: New reg/fw flow ${eventVar}`,
            eventAction: `${actionDataLayer}`,
          })
        }
      }

      //is the first time
      if (!localStorage.getItem("firstTime")) {
        localStorage.setItem("firstTime", true)
      }

      // is NOT the first time
      window.onunload = unloadPage
      function unloadPage() {
        console.log("unload event detected!")

        if (localStorage.getItem("firstTime") && !localStorage.getItem("notFirstTime")) {
          localStorage.setItem("notFirstTime", true)
        }
      }

      /* other variables  */
      const imgFolderUrl = "https://conversionratestore.github.io/projects/knineti/img/"

      const objBadBehavior = {
        Barking: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>barking</b> and behavior problems today!`,
        },
        Jumping: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>jumping</b> and behavior problems today!`,
        },
        "Pulling leash": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>leash tugging</b> and behavior problems today!`,
        },
        Housebreaking: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>housebreaking issues</b> and behavior problems today!`,
        },
        "Nipping or biting": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>nipping & biting</b> and behavior problems today!`,
        },
        "Not coming when called": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>stubbornness</b> and behavior problems today!`,
        },
        "Doesn't listen": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>tendency to ignore commands</b> and behavior problems today!`,
        },
        Chewing: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>chewing & digging</b> and behavior problems today!`,
        },
        "Extremely excited": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>active disobedience</b> and behavior problems today!`,
        },
        Aggression: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>aggression</b> and behavior problems today!`,
        },
        Anxiety: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>anxiety</b> and behavior problems today!`,
        },
        "Reacting to other dogs": {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> <b>socialization issues</b> and behavior problems today!`,
        },
        Other: {
          text: `Discover how to eliminate <span class="dogs_name">[dog’s name]</span> behavior problems today!`,
        },
      }

      let style = /*html */ `
      <style>
        #myCarousel .item_mc {
            height: 600px !important;
        }
        body.override .site-inner {
            padding-bottom: 0;
        }
        .count_sec:nth-child(1) > .container,
        .count_sec:nth-child(2) > .container,
        .banner_txt .enroll_btn_txt,
        #myHeaderr .top_menu_box{
            display: none !important;
        }
        #myHeaderr{
            padding: 0 !important;
        }
        button.new_btn{
            display: flex;
            align-items: center;
            justify-content: center;
            outline: none;
            margin: 0;
            background: #173775;
            box-shadow: 5px 5px 10px rgb(39 32 32 / 80%);
            border-radius: 10px;
            height: 48px;
            border: none;
            max-width: 303px;
            width: 100%;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF !important;
            transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1)
        }
        button.new_btn:hover,
        button.new_btn:focus{
            box-shadow: unset;
        }
        .last_price_text{
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-decoration-line: line-through;
            color: rgb(128 128 128 / 75%) !important;
            margin: 0;
        }
        .new_price_text{
            font-weight: 700;
            font-size: 32px;
            line-height: 24px;
            color: #173775 !important;
            margin: 0 16px 0 8px;
        }
        .you_save_text{
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            padding: 4px 8px;
            margin: 0;
            background: #794E15;
            border-radius: 4px;
        }
        p.special_offer_text{
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
        /* sticky_new_header*/
        .sticky_new_header{
            background: #FFFFFF;
            border-bottom: 3px solid #794E15;
            text-align: center;
        }
        .sticky_new_header > div{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }
        button.new_btn.enroll_now_btn_new{
            max-width: 235px;
            margin-left: 24px;
        }
        /*new_header_logo */
        .new_header_logo{
            max-width: 1030px;
            width: 100%;
            padding: 16px 15px;
        }
        .new_header_logo div.img_wrap{
            max-width: 170px;
            width: 100%;
            max-height: 40px;
        }
        .main_section{
            padding-top: 32px;
            background: #DEE8F1;
        }
        .main_section .container{
            max-width: 970px;
            width: 100%;
            margin: 0 auto !important;
            padding: 48px 15px;
        }
        @media (min-width: 1200px){
            .main_section .container{
                max-width: 1030px;
            }
        }
        /*box_second */
        .box_second{
            background: #FFFFFF;
        }
        .box_second.is_hidden{
            display: none;
        }
        .box_second .container > .box_second_content{
            display: flex;
            justify-content: space-between;
        }
        .box_second .container > .box_second_content > div{
            width: 50%;
        }
        .box_second .container > .box_second_content > div + div{
            margin-left: 52px;
        }
        .box_second .container > .box_second_content h3{
            font-weight: 700;
            font-size: 22px;
            line-height: 130%;
            color: #193973 !important;
            margin-bottom: 24px;
            text-align: left;
        }
        .box_second .container > .box_second_content ul{
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
        }
        .box_second .container > .box_second_content ul li + li{
            margin-top: 24px;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul li p{
            font-size: 16px;
            line-height: 22px;
            color: #193973 !important;
            margin: 0;
            padding: 0 0 0 35px;
            position: relative;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul li p::before{
            position: absolute;
            content: "";
            width: 26px;
            height: 26px;   
            left: 0;
            top: 0;
            background: url(${imgFolderUrl}topics.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul:first-of-type{
            margin-bottom: 24px;
        }
        .box_second .container > .box_second_content .see_more_btn{
            font-size: 16px;
            line-height: 130%;
            text-decoration-line: underline;
            color: #173775 !important;
            cursor: pointer;
            margin: 28px 0;
            display: block;
        }
        .box_second .container > .box_second_content > div:nth-child(1) ul.see_hidden{
            display: none;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li {
            display: flex;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li p.name_text{
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            color: #173775 !important;
            margin: 0 0 4px;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li p.descrip_text{
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #506897 !important;
        }
        .box_second .container > .box_second_content > div:nth-child(2) ul li .img_wrap{
            max-width: 72px;
            max-height: 72px;
            width: 100%;
            height: 100%;
            margin-right: 12px;
        }
        /*box_third */
        .main_section .box_third h2{
            font-weight: 700;
            font-size: 28px;
            line-height: 130%;
            color: #173775 !important;
            text-align: left;
            margin-bottom: 24px;
        }
        .title_mob{
            display: none;
        }
        .main_section .box_third{
            background: #DEE8F1;
        }
        .main_section .box_third ul{
            display: flex;
            margin: 0;
        }
        .main_section .box_third ul li{
            width: 50%;
        }
        .main_section .box_third ul li + li{
            margin-left: 32px;
        }
        .main_section .box_third ul li p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #505050 !important;
            margin: 0;
        }
        .main_section .box_third ul li p + p{
            margin-top: 16px;
        }
        .main_section .box_third ul li:nth-child(2) > div{
            padding: 12px;
            background: #FFFFFF;
            display: flex;
            justify-content: space-between;
            margin: 16px 0;
        }
        .main_section .box_third ul li:nth-child(2) > div p{
            line-height: 21px;
        }
        .main_section .box_third ul li:nth-child(2) > div > span{
            margin-right: 4px;
        }
        .main_section .box_third ul li > div p > span{
            font-weight: 600;
        }
        /*more_thirty_mins_block */
        .more_thirty_mins_block{
            border-bottom: 3px solid #794E15;
            background: #FFFFFF;
            padding-bottom: 32px;
        }
        .more_thirty_mins_block > div > div:last-of-type{
            padding-top: 32px;
            position: relative;
        }
        .more_thirty_mins_block > div > div:last-of-type::after,
        .more_thirty_mins_block > div > div:last-of-type::before{
            position: absolute;
            content: '';
            width: 117px;
            height: 120px;
        }
        .more_thirty_mins_block > div > div:last-of-type::after{
            right: 45px;
            top: 25%;
            background: url(${imgFolderUrl}foot_dog_right.png) no-repeat;
            background-size: cover;
        }
        .more_thirty_mins_block > div > div:last-of-type::before{
            left: 45px;
            top: 30%;
            background: url(${imgFolderUrl}foot_dog_left.png) no-repeat;
            background-size: cover;
        }
        .more_thirty_mins_block .logo_wrap{
            display: flex;
            align-items: center;
            justify-content: center;
            background: #794E15;
            padding: 10px 0;
        }
        .more_thirty_mins_block .logo_wrap .img_wrap{
            max-width: 40px;
            max-height: 40px;
            width: 100%;
            height: 100%;
            margin-right: 24px;
        }
        .more_thirty_mins_block .logo_wrap p.special_offer_text{
            background: unset;
            padding: 0;
            font-size: 20px;
        }
        .more_thirty_mins_block .total_transformation_block{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .more_thirty_mins_block .total_transformation_block > p{
            font-weight: 700;
            font-size: 24px;
            line-height: 130%;
            color: #173775 !important;
            margin: 0 16px 0 0;
        }
        .more_thirty_mins_block .tooltip_bar{
            display: flex;
            align-items: flex-start;
            justify-content: center;
        }
        .more_thirty_mins_block .tooltip_bar > p{
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: #173775 !important;
            margin: 0 0 0 8px;
        }
        .tooltip_icon{
            position: relative;
            margin-left: 8px;
            cursor: pointer;
        }
        .tooltip_icon::before{
            position: absolute;
            content: '';
            top: 0;
            left: 50%;
            width: 11px;
            height: 11px;
            transform: translateX(-50%);
            background: url(${imgFolderUrl}new_tooltip_icon.svg);
            background-size: contain;
            background-repeat: no-repeat;
        }
        .tippy-popper{
            z-index: 998 !important;
        }
        .tippy-tooltip{
            width: 319px;
            background: #FFFFFF;
            border-radius: 8px;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            display: flex;
            align-items: center;
            color: #808080;
            box-shadow: 0px 2px 6px 2px rgb(0 0 0 / 15%);
            filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
            padding: 16px;
            text-align: left;
        }
        .tippy-content {
            padding: 0;
        }
        .tippy-tooltip[data-placement^=top]>.tippy-arrow{
            border-top-color: #FFFFFF;
        }
        .tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
            border-bottom-color: #FFFFFF;
        }
        .more_thirty_mins_block .enroll_now_btn_time{
            max-width: 152px;
            height: 62px;
            margin: 24px auto 19px;
        }
        .more_thirty_mins_block .join_now_descr{
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #173775 !important;
            max-width: 701px;
            text-align: center;
            margin: 35px auto 0;
        }
        .more_thirty_mins_block.is_hidden{
            display: none;
        }
        /*click_play */
        body .click_play{
            padding: 8px 0 0;
            background: #DEE8F1;
        }
        body .click_play > p{
            cursor: pointer;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: center;
            color: #173775 !important;
            max-width: 464px;
            margin: 0 auto;
        }
        body .dog_bad_behavior{
            background: #DEE8F1;
        }
        body .dog_bad_behavior > p{
            margin: 0 auto;
            font-weight: 800;
            font-size: 24px;
            line-height: 150%;
            text-align: center;
            color: #173775 !important;
        }
        body .dog_bad_behavior > p .dogs_name,
        body .dog_bad_behavior > p b{
            color: #679BD2 !important;
            font-weight: 800;
        }
        body .dog_bad_behavior > p .dogs_name{
            text-transform: capitalize;
        }
        [data-enrollbtn] svg{
            margin-left: 8px;
        }
        @media (max-width: 768px) {
            .main_section{
                padding: 0;
            }
            body .click_play{
                padding: 0 20px 20px;
            }
            /*sticky_new_header */
            .sticky_new_header{
                border-bottom: 2px solid #794E15;
            }
            .sticky_new_header .last_price_text{
                margin: 0 0 0 35px;
            }
            p.special_offer_text{
                padding: 6px;
                font-weight: 700;
                font-size: 14px;
            }
            .sticky_new_header > div{
                padding: 16px 20px;
                flex-wrap: wrap;
            }
            .new_price_text{
                font-size: 28px;
                margin: 0 8px;
            }
            button.new_btn.enroll_now_btn_new{
                max-width: 235px;
                margin: 16px 0 0;
                width: 100%;
            }
            /*new_header_logo */
            .new_header_logo{
                padding: 16px 20px;
            }
            .new_header_logo div.img_wrap {
                max-width: 119px;
                max-height: 28px;
            }
            body .click_play > p{
                font-size: 16px !important;
            }
            body .click_play > p strong{
                text-decoration: underline;
            }
            body .dog_bad_behavior {
                background: unset;
                margin: 0 0 16px;
                padding: 0 20px;
            }
            #myCarousel .item_mc {
                height: 230px !important;
            }
            body .dog_bad_behavior > p {
                font-weight: 700;
                font-size: 28px !important;
                line-height: 130%;
                text-align: left;
            }
            .footer-container{
                border-top: unset;
            }
            .main_section .container{
                padding: 32px 20px;
            }
            button.new_btn{
                max-width: unset;
            }
            /*box_second */
            .box_second .container > .box_second_content{
                flex-direction: column;
            }
            .box_second .container > .box_second_content > div {
                width: 100%;
                order: 2;
            }
            .box_second .container > .box_second_content > div + div {
                margin: 0 0 32px;
                order: 1;
            }
            .box_second .container > .box_second_content h3{
                font-size: 20px !important;
                margin-bottom: 16px;
            }
            .box_second .container > .box_second_content ul li + li {
                margin-top: 16px;
            }
            .box_second .container > .box_second_content > div:nth-child(2) ul li p.name_text{
                font-size: 16px;
            }
            .box_second .container > .box_second_content > div:nth-child(2) ul li p.descrip_text{
                margin: 0;
            }
            .box_second .container > .box_second_content > div:nth-child(1) ul li p{
                line-height: 130%;
            }
            .box_second .container > .box_second_content > div:nth-child(1) ul:first-of-type {
                margin-bottom: 16px;
            }
            /*box_third */
            .main_section .box_third h2.title_mob{
                font-size: 24px !important;
                margin-bottom: 16px;
                display: block;
            }
            .title_desk{
                display: none;
            }
            .main_section .box_third ul{
                flex-direction: column;
                padding: 0;
            }
            .main_section .box_third ul li {
                width: 100%;
            }
            .main_section .box_third ul li + li {
                margin: 16px 0 0;
            }
            .main_section .box_third ul li:nth-child(2) > div p {
                font-size: 14px;
            }
            /* more_thirty_mins_block */
            .more_thirty_mins_block{
                border-bottom: unset;
                padding: 20px;
                background: #794E15;
                z-index: 5;
            }
            .more_thirty_mins_block > div{
                background: #FFFFFF;
                padding: 16px;
            }
            .more_thirty_mins_block .logo_wrap{
                flex-direction: column;
                background: unset;
                padding: unset;
            }
            .more_thirty_mins_block .logo_wrap p.special_offer_text{
                background: #794E15;
                padding: 6px;
                font-size: 14px;
                order: 1;
                width: 100%;
                text-align: center;
                z-index: 5;
            }
            .more_thirty_mins_block .logo_wrap .img_wrap {
                max-width: 32px;
                max-height: 32px;
                margin: 24px 0 0;
                order: 2;
            }
            .more_thirty_mins_block > div > div:last-of-type {
                padding-top: 8px;
            }
            .more_thirty_mins_block .join_now_descr{
                margin: 16px auto 0;
            }
            .more_thirty_mins_block .enroll_now_btn_time {
                max-width: 235px;
                height: 48px;
                margin: 16px auto 20px;
            }
            .more_thirty_mins_block .total_transformation_block{
                flex-wrap: wrap;
            }
            .more_thirty_mins_block .total_transformation_block > p {
                font-weight: 800;
                font-size: 20px;
                line-height: 130%;
                color: #173775 !important;
                margin: 0 0 16px;
                text-align: center;
            }
            .more_thirty_mins_block > div > div:last-of-type::before{
                content: unset;
            }
            .you_save_wrap{
                width: 100%;
            }
            .you_save_wrap .you_save_text{
                margin: 16px auto 0;
                max-width: 113px;
            }
            .more_thirty_mins_block .total_transformation_block .new_price_text{
                margin: 0 0 0 8px;
            }
            .more_thirty_mins_block > div > div:last-of-type::after{
                background: url(${imgFolderUrl}foot_dog_right_mob.png) no-repeat;
                background-size: cover;
                top: -105px;
                right: -17px;
            }

        }
        @media (max-width: 320px) {
            body .dog_bad_behavior > p{
                font-size: 25px !important;
            }
            body .click_play > p {
                font-size: 14px !important;
            }
            .more_thirty_mins_block .logo_wrap p.special_offer_text{
                font-size: 12px;
            }
            .more_thirty_mins_block .join_now_descr{
                font-size: 12px;
            }
            .box_second .container > .box_second_content h3{
                font-size: 18px !important;
            }
            .box_second .container > .box_second_content > div:nth-child(2) ul li p.descrip_text{
                font-size: 13px;
            }
            .main_section .box_third h2.title_mob{
                font-size: 22px !important;
            }
        }
         @media (max-width: 280px) {
            body .dog_bad_behavior > p{
                font-size: 21px !important;
            }
            .more_thirty_mins_block .logo_wrap p.special_offer_text,
            .more_thirty_mins_block .join_now_descr{
                font-size: 11px;
            }
            .more_thirty_mins_block .total_transformation_block > p{
                font-size: 18px;
            }
            .box_second .container > .box_second_content h3{
                font-size: 16px !important;
            }
            .box_second .container > .box_second_content > div:nth-child(2) ul li p.descrip_text{
                font-size: 10px;
            }
            .box_second .container > .box_second_content > div:nth-child(1) ul li p{
                font-size: 12px;
                text-align: left;
            }
            .main_section .box_third h2.title_mob{
                font-size: 19px !important;
            }
            .main_section .box_third ul li p{
                font-size: 13px;
                text-align: left;
            }
            .main_section .box_third ul li:nth-child(2) > div p{
                font-size: 12px;
                text-align: left;
            }
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
              <button data-enrollbtn='(sticky header)' class="new_btn enroll_now_btn_new">EnRoll now <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.741797 8.23307L3.97513 4.99974L0.741797 1.76641C0.416797 1.44141 0.416797 0.916406 0.741797 0.591406C1.0668 0.266406 1.5918 0.266406 1.9168 0.591406L5.7418 4.41641C6.0668 4.74141 6.0668 5.26641 5.7418 5.59141L1.9168 9.4164C1.5918 9.7414 1.0668 9.7414 0.741797 9.4164C0.42513 9.0914 0.416797 8.55807 0.741797 8.23307Z" fill="white"/>
</svg></button>
          </div>
        </div>
    `

      let newHeaderLogo = /*html */ `
        <div class="new_header_logo container">
            <div class="img_wrap">
                <img src="${imgFolderUrl}logo_main.png" alt="logo k9ti" />
            </div>
        </div>
    `

      let dogBadBehavior = /*html */ `
        <div class="dog_bad_behavior">
        </div>
    `

      let onClickPlay = /*html */ `
        <div class="click_play">
          <p data-watch-free='"Click play"'>Click <strong>play</strong> to gain special access to training methods that will unlock your dog's best behavior</p>
        </div>
    `

      let firstVisitNewBlock = /*html */ `
        <section class="main_section">
          <div class="box_second">
            <div class="container">
                <div class="box_second_content">
                  <div>
                    <h3>Topics covered in this video:</h3>
                    <ul>
                      <li>
                        <span></span>
                        <p><strong>3 key rules</strong> that will make your dog as well-behaved as a service dog</p>
                      </li>
                      <li>
                        <span></span>
                        <p>A <strong>secret technique for relaxing walks</strong> - your dog will never tug on the leash again</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The non-verbal language that will make <strong>your dog listen to you</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to get your dog to calmly introduce themselves to your house-guests <strong>(No more jumping!)</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>Finally eliminate unnecessary <strong>barking</strong>!</p>
                      </li>
                      <li>
                        <span></span>
                        <p>Preventing <strong>dog-related accidents in your home</strong></p>
                      </li>
                    </ul>
                    <ul class="see_hidden">
                      <li>
                        <span></span>
                        <p>Why you should <strong>wean your dog away from treats</strong>, and how to do it</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The <strong>2 foundational commands</strong> that will make your dog obedient</p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to get <strong>your dog to come to you whenever you call</strong> - just by saying their name</p>
                      </li>
                      <li>
                        <span></span>
                        <p><strong>‘Puppy push-ups’</strong>, why your dog should do them</p>
                      </li>
                      <li>
                        <span></span>
                        <p>The easiest ways to get your dog to master <strong>impulse control</strong></p>
                      </li>
                      <li>
                        <span></span>
                        <p>How to make your dog 'popular' with other animals - (and get rid of their <strong>aggressive behavior</strong>!)</p>
                      </li>
                    </ul>
                    <span class="see_more_btn"><b>See more</b></span>
                  </div>
                  <div>
                    <h3>The workshop is conducted by:</h3>
                    <ul>
                      <li>
                        <div class="img_wrap">
                          <img src="${imgFolderUrl}mentor1.jpg" alt="woman" />
                        </div>
                        <div>
                          <p class="name_text">Dr. Alexa Diaz, PhD</p>
                          <p class="descrip_text">Nationally recognized as one of the best service dog trainers in the U.S.</p>
                        </div>
                      </li>
                      <li>
                        <div class="img_wrap">
                          <img src="${imgFolderUrl}mentor2.jpg" alt="men" />
                        </div>
                        <div>
                          <p class="name_text">Eric Presnall</p>
                          <p class="descrip_text">Judge & Host of Animal Planet's Hit Show "Who Let The Dogs Out"</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <button class="new_btn watch_free_workshop_btn" data-watch-free='1'>Watch free workshop</button>
            </div>
          </div>
          <div class="box_third">
            <div class="container">
                <h2 class="title_desk">There is a reason why service dogs always form extraordinarily strong bonds with their human partners...</h2>
                <ul>
                  <li>
                    <div class="img_wrap">
                      <img src="${imgFolderUrl}box_third_photo.jpg" alt="woman with dog" />
                    </div>
                  </li>
                  <li>
                    <h2 class="title_mob">There is a reason why service dogs always form extraordinarily strong bonds with their human partners...</h2>
                    <p>
                      <strong>YouTube and $9.99 dog training books</strong> will make you think that verbal commands such as "sit", "stay", etc. are all that you need....but if you follow
                      that advice you will be making one of the <strong>BIGGEST mistakes</strong> in dog training.
                    </p>
                    <p>
                      <strong>The above workshop will reveal the real</strong> way to get service-dog levels of obedience from your dog - as taught by REAL & nationally recognized
                      service-dog training professionals.
                    </p>
                    <div>
                      <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1873_10367)">
                        <path d="M9.16663 13.4998H10.8333V15.1665H9.16663V13.4998ZM9.16663 6.83317H10.8333V11.8332H9.16663V6.83317ZM9.99163 2.6665C5.39163 2.6665 1.66663 6.39984 1.66663 10.9998C1.66663 15.5998 5.39163 19.3332 9.99163 19.3332C14.6 19.3332 18.3333 15.5998 18.3333 10.9998C18.3333 6.39984 14.6 2.6665 9.99163 2.6665ZM9.99996 17.6665C6.31663 17.6665 3.33329 14.6832 3.33329 10.9998C3.33329 7.3165 6.31663 4.33317 9.99996 4.33317C13.6833 4.33317 16.6666 7.3165 16.6666 10.9998C16.6666 14.6832 13.6833 17.6665 9.99996 17.6665Z" fill="#794E15"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1873_10367">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                      </span>
                      <p>
                        <span>NOTE:</span> This workshop will not qualify your dog as an officially certified service dog. However, it will allow them to be as calm, well-behaved, and
                        well-trained as a service dog.
                      </p>
                    </div>
                    <button class="new_btn watch_free_workshop_btn" data-watch-free='2'>Watch free workshop</button>
                  </li>
                </ul>
            </div>
          </div>
        </section>
    `

      let moreThirtyMinsBlock = /*html */ `
        <div class="more_thirty_mins_block is_hidden">
            <div>
                <div class="logo_wrap">
                  <div class="img_wrap">
                      <img src="${imgFolderUrl}logo_time.png" alt="logo k9ti" />
                  </div>
                  <p class="special_offer_text">Special Offer - Ends <span class="count_days">7</span> <span class="text_days">days</span></p>
                </div>

                <div>
                  <div class="total_transformation_block">
                    <p>Total Transformation Masterclass</p>
                    <span class="last_price_text">$497</span>
                    <span class="new_price_text">$297</span>
                    <div class="you_save_wrap">
                        <span class="you_save_text">You save $200</span>
                    </div>
                  </div>
                  <button data-enrollbtn='(35 min block)' class="new_btn enroll_now_btn_time">EnRoll now <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.741797 8.23307L3.97513 4.99974L0.741797 1.76641C0.416797 1.44141 0.416797 0.916406 0.741797 0.591406C1.0668 0.266406 1.5918 0.266406 1.9168 0.591406L5.7418 4.41641C6.0668 4.74141 6.0668 5.26641 5.7418 5.59141L1.9168 9.4164C1.5918 9.7414 1.0668 9.7414 0.741797 9.4164C0.42513 9.0914 0.416797 8.55807 0.741797 8.23307Z" fill="white"/>
</svg></button>
                  <div class="tooltip_bar">
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1873_10796)">
                      <path d="M23.7941 18.5397L21.2176 15.9629C20.9519 16.5221 20.4437 16.9517 19.7989 17.1049L19.4479 17.1882L19.3645 17.5395C19.2221 18.1395 18.5521 19.2693 17.1417 19.1546L16.7817 19.1254L16.5939 19.4336C16.2778 19.9523 15.7471 20.3069 15.1572 20.412L18.5397 23.7941C18.712 23.9664 18.9612 24.0372 19.1984 23.9812C19.4356 23.9253 19.6269 23.7504 19.7039 23.5193L20.6577 20.6577L23.5193 19.7039C23.7505 19.6268 23.9253 19.4356 23.9813 19.1984C24.0372 18.9612 23.9664 18.712 23.7941 18.5397Z" fill="#173775"/>
                      <path d="M7.40615 19.4336L7.21837 19.1254L6.85832 19.1546C5.44799 19.2693 4.77796 18.1395 4.63551 17.5395L4.55212 17.1883L4.20112 17.1049C3.55635 16.9517 3.04818 16.5221 2.78249 15.9629L0.20596 18.5397C0.0336478 18.712 -0.0371803 18.9612 0.0188353 19.1984C0.0748041 19.4356 0.249648 19.6268 0.480788 19.7039L3.34241 20.6577L4.29618 23.5193C4.37324 23.7505 4.56449 23.9253 4.80168 23.9812C5.03887 24.0372 5.2881 23.9664 5.46041 23.7941L8.84287 20.412C8.2529 20.3068 7.72227 19.9523 7.40615 19.4336Z" fill="#173775"/>
                      <path d="M15.3932 18.7017L16.032 17.6536L17.2555 17.753C17.6008 17.781 17.9163 17.5524 17.9964 17.2146L18.2801 16.0203L19.474 15.7367C19.8118 15.6565 20.0405 15.3417 20.0124 14.9957L19.913 13.7725L20.9611 13.1338C21.2575 12.9532 21.3777 12.5832 21.2441 12.2628L20.7718 11.13L21.5711 10.1987C21.7972 9.93531 21.7973 9.54629 21.5712 9.28286L20.7718 8.35121L21.2441 7.21834C21.3777 6.89795 21.2575 6.52796 20.9611 6.34731L19.913 5.70859L20.0124 4.48543C20.0404 4.1394 19.8118 3.82464 19.474 3.74439L18.2801 3.46084L17.9964 2.26651C17.9162 1.92868 17.6008 1.70017 17.2555 1.72815L16.032 1.82753L15.3932 0.779402C15.2126 0.482871 14.8424 0.362824 14.5221 0.496371L13.3894 0.968965L12.4582 0.169559C12.1948 -0.0565195 11.8057 -0.0565195 11.5423 0.169559L10.6111 0.968871L9.47837 0.496277C9.15788 0.362637 8.78795 0.482824 8.60724 0.779309L7.96848 1.82743L6.74499 1.72806C6.39896 1.70036 6.08424 1.92859 6.00404 2.26642L5.7204 3.46075L4.52645 3.74439C4.18871 3.82464 3.96001 4.1394 3.98813 4.48543L4.08751 5.70859L3.03943 6.34731C2.74299 6.52796 2.62276 6.8979 2.75635 7.21834L3.22867 8.35121L2.42926 9.28286C2.20323 9.54629 2.20328 9.93531 2.42935 10.1987L3.22867 11.13L2.75645 12.2628C2.62285 12.5832 2.74309 12.9532 3.03953 13.1338L4.0876 13.7725L3.98823 14.9957C3.96015 15.3417 4.18881 15.6565 4.52654 15.7367L5.72049 16.0203L6.00413 17.2146C6.08438 17.5524 6.3991 17.7807 6.74509 17.753L7.96857 17.6536L8.60734 18.7017C8.78799 18.9982 9.15798 19.1184 9.47846 18.9848L10.6112 18.5122L11.5424 19.3114C11.8058 19.5375 12.1949 19.5375 12.4583 19.3114L13.3895 18.5122L14.5222 18.9848C14.8424 19.1183 15.2126 18.9982 15.3932 18.7017ZM11.7443 14.7566C11.4698 15.0311 11.0245 15.0312 10.7499 14.7566L6.60774 10.6144C6.33315 10.3398 6.33315 9.89462 6.60774 9.62003L8.73793 7.48979C9.01248 7.2152 9.4577 7.2152 9.73229 7.48979L11.2471 9.00456L14.6447 5.60697C14.9192 5.33237 15.3645 5.33237 15.6391 5.60697L17.7692 7.73715C18.0438 8.01175 18.0438 8.45692 17.7692 8.73151L11.7443 14.7566Z" fill="#679BD2"/>
                      <path d="M11.7436 10.4962C11.4691 10.7708 11.0239 10.7708 10.7493 10.4962L9.23446 8.98146L8.09863 10.1173L11.2465 13.2651L16.2771 8.23446L15.1413 7.09863L11.7436 10.4962Z" fill="#173775"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1873_10796">
                      <rect width="24" height="24" fill="white"/>
                      </clipPath>
                      </defs>
                      </svg>
                    </span>
                    <p data-tolltip>90-day refund policy <span class="tooltip_icon" data-title="We provide an unconditional 90-day refund policy and guarantee that you will get your money back if you are dissatisfied with the Total Transformation Masterclass"></span></p>
                  </div>
                  <p class="join_now_descr">
                    Join now to discover <strong>key techniques</strong> for addressing <strong>housebreaking issues</strong> as well as <strong>barking, jumping, bitings</strong>, and
                    <strong>other unwanted behavior</strong>. Your dog is only one masterclass away from being as obedient as a service dog.
                  </p>
                </div>
            </div>
        </div>
    `

      document.head.insertAdjacentHTML("beforeend", style)
      document.querySelector(".main > section")?.insertAdjacentHTML("beforebegin", newHeaderLogo)
      document.querySelector(".count_sec")?.insertAdjacentHTML("afterbegin", firstVisitNewBlock)
      document.querySelector("#myHeaderr").insertAdjacentHTML("beforeend", notFirstVisitStickyBlock)
      document.querySelector(".main_section")?.insertAdjacentHTML("afterbegin", moreThirtyMinsBlock)

      if (innerWidth <= 768) {
        document.querySelector(".new_header_logo")?.insertAdjacentHTML("afterend", dogBadBehavior)
        document.querySelector(".want-to-obey")?.insertAdjacentHTML("beforebegin", onClickPlay)
      } else {
        document.querySelector(".want-to-obey")?.insertAdjacentHTML("beforebegin", dogBadBehavior)
        document.querySelector(".dog_bad_behavior")?.insertAdjacentHTML("afterend", onClickPlay)
      }

      if (document.querySelector("#below_video_text")) {
        document.querySelector("#below_video_text").remove()
      }

      for (const badBehavior in objBadBehavior) {
        if (document.querySelector(".dog_bad_behavior")) {
          let bahavior
          let result = "Other"

          if (localStorage.getItem("data-behavior")) {
            bahavior = localStorage.getItem("data-behavior")
            result = bahavior.split(",")[0]
          }
          let cityObj = objBadBehavior[badBehavior]
          if (result.includes(badBehavior)) {
            if (!document.querySelector(".dog_bad_behavior > p")) {
              document.querySelector(".dog_bad_behavior").insertAdjacentHTML("afterbegin", `<p>${cityObj.text}</p>`)
            }
          }
          if (document.querySelector(".dogs_name")) {
            if (getURLParameter("dogname") === " " || getURLParameter("dogname").length > 10) {
              document.querySelector(".dogs_name").textContent = `your dog's`
            } else {
              document.querySelector(".dogs_name").textContent = `${getURLParameter("dogname")}'s`
            }
          }
        }
      }

      onClickSeeMore()
      getEndsDays()
      timerVideo()

      //getEndsDays
      function getEndsDays() {
        if (document.querySelector("#myHeaderr h4.box_text")) {
          //   let value = document.querySelector("#myHeaderr h4.box_text").textContent.split(".")[1].split(" ")
          //   let days = `in ${value[3]}`
          //   let textDays = value[4]
          let days = ""
          let textDays = "days"

          //   if (value[3] === "2") {
          //     days = "tomorrow"
          //     textDays = ""
          //   }
          //   if (value[3] === "1") {
          //     days = "today"
          //     textDays = ""
          //   }
          //
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
          }
        }
      }

      // tolltip
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("p[data-tolltip]")) {
          clearInterval(tippyRun)

          document.querySelectorAll("span[data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              //   trigger: "click",
              placement: "bottom",
              appendTo: function () {
                return document.querySelector(".tooltip_bar")
              },
              onTrigger(e) {
                pushDataLayer(`Refund policy (i) clicked`)
              },
            })
          })
        }
      }, 500)

      // on click on See more/less
      function onClickSeeMore() {
        document.querySelector(".see_more_btn")?.addEventListener("click", function (e) {
          console.log(e.currentTarget.previousElementSibling)
          pushDataLayer(`${e.target.textContent} link clicked`)
          e.currentTarget.previousElementSibling.classList.toggle("see_hidden")
          if (!e.currentTarget.previousElementSibling.classList.contains("see_hidden")) {
            e.currentTarget.previousElementSibling.scrollIntoView({ block: "center", behavior: "smooth" })
            e.target.textContent = "See less"
          } else {
            e.currentTarget.previousElementSibling.previousElementSibling.scrollIntoView({ block: "center", behavior: "smooth" })
            e.target.textContent = "See more"
          }
        })
      }

      // getURLParameter 'dogname'
      function getURLParameter(name) {
        return decodeURIComponent((RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [, null])[1] || "")
      }

      // saw more than 35 mins of video
      function timerVideo() {
        let intevalVideo = setInterval(() => {
          if (document.querySelector("video")) {
            clearInterval(intevalVideo)

            setTimeout(() => {
              // let counter
              const videoItem = document.querySelector("video")

              function timeUpdate() {
                console.log(videoItem.currentTime)
                let timer = 35 * 60
                // let timer = 1 * 60

                let currentTime = Math.floor(videoItem.currentTime)

                timer -= currentTime
                console.log(`>>>>timer`, timer)

                if (timer <= 0) {
                  document.querySelector(".more_thirty_mins_block.is_hidden")?.classList.remove("is_hidden")
                  if (document.querySelector("body .click_play")) {
                    document.querySelector("body .click_play").style.display = "none"
                  }
                  if (!localStorage.getItem("finishTime")) {
                    localStorage.setItem("finishTime", true)
                  }
                  let int = setInterval(() => {
                    if (!document.querySelector(".more_thirty_mins_block").classList.contains("is_hidden") && localStorage.getItem("finishTime")) {
                      clearInterval(int)

                      videoItem.removeEventListener("timeupdate", timeUpdate)
                      console.log(`>>>>>>>>>>finish`)
                    }
                  }, 10)
                }
              }

              videoItem.addEventListener("timeupdate", timeUpdate)
            }, 1000)
          }
        }, 100)
      }

      setTimeout(() => {
        if (document.querySelector(".flowplayer .fp-header .fp-fullscreen")) {
          document.querySelector(".flowplayer .fp-header .fp-fullscreen").addEventListener("click", () => {
            pushDataLayer("Expand video to full screen")
          })
        }
      }, 3300)

      document.querySelectorAll("[data-watch-free]")?.forEach((el) => {
        el.addEventListener("click", () => {
          scrollToVideo(el)
        })
      })

      // scrollToVideo
      function scrollToVideo(el) {
        console.log(`scrollToVideo`)
        pushDataLayer(`Watch Free Workshop ${el.getAttribute("data-watch-free")} clicked`)

        if (document.querySelector(".flowplayer.is-paused .fp-ui")) {
          if (innerWidth <= 768) {
            document.querySelector(".flowplayer .fp-header .fp-fullscreen").click()
          } else {
            document.querySelector(".flowplayer.is-paused .fp-ui").scrollIntoView({ block: "center", behavior: "smooth" })
          }

          if (!document.querySelector("video")) {
            document.querySelector(".flowplayer.is-paused .fp-ui").click()
          } else {
            if (document.querySelector("video").paused) {
              document.querySelector(".flowplayer.is-paused .fp-ui").click()
            }
          }
        }

        if (document.querySelector("video")) {
          if (innerWidth <= 768) {
            document.querySelector(".flowplayer .fp-header .fp-fullscreen").click()
          } else {
            document.querySelector("video").scrollIntoView({ block: "center", behavior: "smooth" })
          }
        }
      }

      if (localStorage.getItem("notFirstTime")) {
        document.querySelectorAll("body #myCarousel .item_mc")[0].style.height = "660px"
        if (document.querySelector("body .click_play")) {
          document.querySelector("body .click_play").style.display = "none"
        }

        if (document.querySelector(".box_second")) {
          document.querySelector(".box_second").classList.add("is_hidden")
        }
        if (document.querySelector(".box_third")) {
          document.querySelector(".box_third").style.display = "none"
        }
        if (document.querySelector(".after-refresh .Breed-Specific.count_sec")) {
          document.querySelector(".after-refresh .Breed-Specific.count_sec:nth-child(1)").style.display = "none"
        }
        if (localStorage.getItem("finishTime")) {
          document.querySelector(".more_thirty_mins_block.is_hidden")?.classList.remove("is_hidden")
        }
      }

      addOtherEvent()
      function addOtherEvent() {
        document.querySelectorAll(".panel-heading")?.forEach((el) => {
          el.addEventListener("click", (i) => {
            pushDataLayer(`'${el.querySelector(".ques-hd b").textContent}' in FAQ clicked`)
          })
        })
        document.querySelectorAll(".footer-container .footer-menu li")?.forEach((el) => {
          el.addEventListener("click", (i) => {
            pushDataLayer(`'${el.querySelector("a").textContent}' in footer clicked`)
          })
        })
        document.querySelectorAll(".enroll_now_main .button-blue-large.grab_butn.enroll_now_btn")?.forEach((el, idx) => {
          el.addEventListener("click", (i) => {
            pushDataLayer(`Enroll now ${idx + 1} clicked`)
          })
        })
      }

      pushDataLayer("loaded")
      clarity("set", `new_reg_fw_flow_${eventVar}`, "variant_1")
      document.querySelector(".exp")?.remove()
    }
  })
}

if (window.location.pathname === "/free-workshop/") {
  if (window.innerWidth <= 768) {
    let startFunkMob = setInterval(() => {
      if (document.querySelector(".entry-content")) {
        clearInterval(startFunkMob)

        function pushDataLayer(actionDataLayer, labelDataLayer) {
          window.dataLayer = window.dataLayer || []
          if (labelDataLayer) {
            console.log(actionDataLayer + " : " + labelDataLayer)
            dataLayer.push({
              event: "event-to-ga",
              eventCategory: `Exp: Improved registration flow mob`,
              eventAction: `${actionDataLayer}`,
              eventLabel: `${labelDataLayer}`,
            })
          } else {
            console.log(actionDataLayer)
            dataLayer.push({
              event: "event-to-ga",
              eventCategory: `Exp: Improved registration flow mob`,
              eventAction: `${actionDataLayer}`,
            })
          }
        }

        let popupStyle = /*html */ `
    <style>
      header,
.main section .desktop-view,
.main section .mobile-view {
  display: none !important;
}

.container_var {
  width: 85%;
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
  margin: 0 0 40px;
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
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.new_block {
  margin-bottom: 5px;
}

/*join_text */
.join_text {
  background: #193973;
  padding: 16px 10px;
  text-align: center;
}

.join_text p {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff !important;
}

/*enroll_box */
.enroll_box .container_var {
  padding: 16px 0 56px;
}

.enroll_box .img_wrap {
  max-width: 200px;
  text-align: left;
}

.enroll_box .info_box {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
}

.enroll_box .info_box > div:first-child {
  display: flex;
  align-items: center;
  border: 1px solid #193973;
  border-radius: 10px;
  padding: 6px 10px;
}

.enroll_box .info_box > div:first-child > span {
  font-weight: 400;
  font-size: 11px;
  line-height: 188%;
  color: #193973;
  margin-left: 6px;
  text-align: left;
}

.enroll_box .info_box > h1 {
  margin: 24px 0 !important;
  font-weight: 800;
  font-size: 22px !important;
  line-height: 130%;
  color: #193973;
  text-align: left;
}

.enroll_box .info_box > h1 span {
  color: #6fb3fa;
}

.enroll_box .info_box > p {
  margin: 24px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #757e93 !important;
  text-align: left;
}

.enroll_box .info_box > p b {
  font-weight: 800;
}

.enroll_box .info_box > ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 24px;
  gap: 14px;
}

.enroll_box .info_box > ul li {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.enroll_box .info_box > ul li img {
  max-width: 18px;
  max-height: 18px;
}

.enroll_box .info_box > ul li span {
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: #808080;
  text-align: left;
  margin-left: 16px;
}

.enroll_box .info_box > a {
  background: #193973;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 58px;
  width: 100%;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 112%;
  outline: none;
  border: none;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  text-align: center;
}

.enroll_box .info_box > div.img_wrap {
  max-width: unset;
}

.popup_new > .popup_third_box .btn_continue.disabled_var {
  background: #c0c5cd;
  cursor: inherit;
  pointer-events: none;
}

/*dog_list */
.dog_list h2 {
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 127% !important;
  text-align: center;
  color: #193973 !important;
  margin: 0 0 24px !important;
}

.dog_list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding: 0;
}

.dog_list ul li {
  width: 28%;
  position: relative;
  border-radius: 10px;
  transition: all 350ms ease-in-out;
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
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  font-weight: 700;
  font-size: 8px;
  line-height: 150%;
  color: #f2f6ff;
  padding: 2px;
}

/*popup_first */
.popup_new {
  display: flex;
  flex-direction: column;
  margin: 0;
}

.popup_new .img_wrap img {
  border-radius: 10px;
}

.popup_new > .popup_first {
  display: none;
}

.popup_new > .popup_first > h2 {
  font-weight: 700;
  font-size: 22px !important;
  line-height: 127%;
  text-align: center;
  color: #734f22;
  margin: 32px 0 12px;
}

.popup_new > .popup_first > p {
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  text-align: center;
  color: #808080 !important;
  margin: 0 0 24px;
}

.popup_new > .progress_bar {
  margin-bottom: 32px;
}

.popup_new > .progress_bar > ul {
  display: flex;
  background: #d1deee;
  width: 100%;
  height: 17px;
  justify-content: space-between;
  padding: 0;
  margin: 0 0 12px;
  border-radius: 10px;
}

.popup_new > .progress_bar > ul li {
  width: 33%;
}

.popup_new > .progress_bar > ul li.active_step {
  background: #193973;
}

.popup_new > .progress_bar > ul li:nth-child(1) {
  border-radius: 10px 0px 0px 10px;
}

.popup_new > .progress_bar > ul li:nth-child(2) {
  border-radius: 0px;
}

.popup_new > .progress_bar > ul li:nth-child(3) {
  border-radius: 0px 10px 10px 0px;
}

.popup_new > .progress_bar > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.popup_new > .progress_bar > div p {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  opacity: 1;
  color: #808080 !important;
  margin: 0;
  display: flex;
  align-items: center;
}

.popup_new > .progress_bar > div p.active_btn_second {
  display: none;
}

.popup_new > .progress_bar > div p:nth-child(2),
.popup_new > .progress_bar > div p:nth-child(1) {
  cursor: pointer;
}

.popup_new > .progress_bar > div p:nth-child(1) span {
  display: none;
}

.popup_new > .progress_bar > div p:nth-child(2) span {
  margin-left: 10px;
}

.first_block_checkbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  margin: 0 0 40px;
}

.first_block_checkbox input.custom_checkbox {
    z-index: -1;
    opacity: 0;
    height: 0;
    margin: 0;
    padding: 0;
}

.first_block_checkbox label {
  width: 100%;
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  padding: 10px 18px;
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
.popup_new > .popup_second,
.popup_new > .popup_third_box {
  display: none;
}

.popup_new > .popup_second > h2,
.popup_new > .popup_third_box > h2 {
  font-weight: 700;
  font-size: 22px !important;
  line-height: 127%;
  text-align: center;
  color: #734f22;
  margin: 32px 0 24px;
}

.popup_new > .popup_third_box > h2 {
  margin: 31px 0 31px;
}

.popup_new > .popup_second ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0 0 40px;
}

.popup_new > .popup_second ul li {
  width: 100%;
}

.popup_new > .popup_second ul li .radio_box {
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
}

.popup_new > .popup_second ul li label {
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

.popup_new > .popup_second ul li label span:nth-child(2) {
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #193973;
  margin-bottom: 8px;
}

.popup_new > .popup_second ul li label span:nth-child(3) {
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: #808080;
}

.popup_new > .popup_second ul li .radio_box:checked + label {
  border: 3px solid #193973;
}

.first_block_checkbox label:focus .popup_new > .popup_second ul li label:focus {
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
  outline: 0;
}

.popup_new > .popup_first.active_popup,
.popup_new > .popup_second.active_popup,
.popup_new > .popup_third_box.active_popup {
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
  color: #193973 !important;
}

.chosen-container .chosen-results li em {
  font-weight: 700;
  text-decoration: unset;
}

/*chosen_select */
.chosen_select {
  position: relative;
  margin: 0 0 40px;
}

.chosen_select label {
  border: 1px solid #e8f1f9;
  border-radius: 10px;
  outline: unset;
  display: flex;
  width: 100%;
  height: 44px;
  margin: 0 0 8px;
  align-items: center;
  padding: 5px 18px;
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

.chosen_select label.on_focus {
  border: 1px solid #6fb3fa;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
}

.chosen_select p.hover_text {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -20px;
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
  width: 100%;
  outline: unset;
  border-radius: 10px;
  border: none;
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #193973;
  height: 100%;
  margin: 0 0 0 8px;
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
  padding: 5px 10px;
  text-align: left;
  cursor: pointer;
}

/* */

#openModal.fade.in {
  background-color: #ffffff;
  padding-left: 24px !important;
}

#openModal.fade.in .join_text {
  margin: 0 -27px;
}

#openModal .for-spacing,
#openModal .modal-header.modal-header-style.modal-of-header.style-border,
#openModal .row-md-12.style-of-row-free-workshop > div:first-child {
  display: none !important;
}

#openModal .border-of-modal .modal-header {
  border: unset !important;
}

#openModal #subs-email2,
#openModal #subs-mobile2 {
  display: none;
}

#openModal #openModal .form-group {
  background: white;
  border-radius: 10px;
}

#openModal .border-of-modal .vis-ver-2_2.modal-header.modal-header-style.modal-of-header.style-border.modal-header1 {
  display: none;
}

#openModal .popup_third {
  display: none;
}

#openModal .btn_wrapp {
  display: none;
  width: 100%;
  margin: -25px 0 20px;
  position: relative;
}

#openModal .btn_wrapp > p {
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

#openModal .btn_wrapp button.close {
  display: block;
  position: absolute;
  opacity: 1;
  text-shadow: unset;
  top: 0;
  right: -5px;
  color: #808080;
}

#openModal .close:focus {
  color: #a0a1a8;
  opacity: 1;
}


#openModal .btn_wrapp > p.active_btn_fifth {
  opacity: 0;
  pointer-events: none;
}

#openModal .popup_third {
  display: block;
}

#openModal .border-of-modal {
  margin: 0;
}

#openModal .modal-dialog {
  width: 93% !important;
}

#openModal .modal-dialog > .img_wrap {
  margin: 16px 0 32px;
}

#openModal .modal-dialog > .img_wrap img {
  max-width: 200px;
}

#openModal .modal-content {
  background: unset !important;
  border-radius: 10px;
  background-color: unset !important;
  box-shadow: unset !important;
  border: unset !important;
  max-height: unset !important;
  max-width: unset !important;
  margin: 0 auto;
  height: unset !important;
  width: 100% !important;
}

#openModal .modal-body {
  display: none;
  background: unset !important;
  padding: 0 15px;
  width: 100%;
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
  border-radius: 10px;
}

.body_popup > h2 {
  font-weight: 600 !important;
  font-size: 22px !important;
  line-height: 30px !important;
  text-align: center;
  color: #193973 !important;
  margin-bottom: 0 !important;
}

.button_input_name,
#openModal #contact-submit {
  background: #193973;
  border-radius: 10px;
  margin: 0 auto;
  width: 100% !important;
  max-width: 100% !important;
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
  transition: all 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

#openModal #contact-submit {
  margin: 0 !important;
}

.button_input_name {
  margin: 65px auto 0;
}

.button_input_name:focus,
#contact-submit:focus,
.btn_continue:focus {
  box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
}

#openModal #finalForm .style-text,
#openModal form .form-group > div:last-child,
#openModal form .form-group img,
#openModal .fst_icon.fa-user:before,
#openModal .fa-envelope:before,
#openModal #subs-email,
#openModal #subs-mobile,
#openModal #contact-submit,
.benefits,
.popup_adress {
  display: none;
}

#openModal #subs-email,
#openModal #subs-mobile,
#openModal #contact-submit,
#openModal #subs-email2,
#openModal #subs-mobile2 {
  max-width: 331px;
  width: 100% !important;
  margin: 0 auto 16px !important;
}

#openModal .fa {
  display: none !important;
}

#openModal #finalForm {
  display: block;
  background: #ffffff;
  border-radius: 10px;
}

#openModal .form-group {
  margin: 0;
  padding: 0 0 24px;
}

#openModal #finalForm .popup_third .body_popup > h2 {
  margin: 0 auto !important;
}

#openModal #finalForm .popup_third .body_popup {
  padding: 28px 164px 0;
  margin-bottom: 56px;
}

#openModal .form-control {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 0 16px !important;
  padding: 10px 18px !important;
  border: 1px solid #dee8f1;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px !important;
  line-height: 20px;
  height: 40px;
  text-align: left;
  color: #a0a1a8 !important;
  box-shadow: none;
}

.benefits ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 40px 0 24px;
  gap: 16px;
}

.benefits ul li {
  display: flex;
  align-items: center;
}

.benefits ul li > p {
  font-weight: 400;
  font-size: 13px;
  line-height: 143%;
  color: #808080 !important;
  margin: 0 0 0 16px;
  text-align: left;
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
  font-size: 8px;
  line-height: 200%;
  color: #9da1aa !important;
  text-align: left;
  margin: 0 0 0 14px;
}

#openModal #subs-name,
#openModal #dog-name,
#openModal #subs-name2,
#openModal #dog-name2 {
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

#openModal #finalForm .popup_third .popup_adress .body_popup {
  padding: 24px 0 0;
  margin-bottom: 16px;
}

.popup_adress .body_popup > p {
  margin: 0 0 32px;
  padding: 10px;
  border: 1px solid #6fb3fa;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #808080 !important;
}



.input_error_text {
  font-size: 10px;
  line-height: 20px;
  color: #f15050;
  margin: -12px 0 10px;
  display: none;
  text-align: left;
}

.popup_adress .body_popup > h2 {
  margin: 0 0 40px !important;
}

#openModal form .text_for_work_shop {
  font-weight: 400;
  font-size: 12px !important;
  line-height: 20px;
  text-align: center;
  color: #808080 !important;
  margin: 32px 0 !important;
  display: none;
}

.hide {
  visibility: hidden;
  position: absolute;
}

.show {
  visibility: visible;
}

@media (max-width: 320px) {
  .join_text {
    font-size: 17px;
  }
  .enroll_box .info_box > div:first-child > span {
    font-size: 9px;
  }

  .enroll_box .info_box > h1 {
    font-size: 18px !important;
  }

  .enroll_box .info_box > p {
    font-size: 14px;
  }

  .enroll_box .info_box > ul li span {
    font-size: 13px;
  }

  .enroll_box .info_box > a {
    font-size: 13px;
  }

  .dog_list ul li {
    width: 46%;
  }

  .popup_new > .popup_first > h2,
  .popup_new > .popup_second > h2,
  .popup_new > .popup_third_box > h2 {
    font-size: 20px !important;
  }

  .popup_new > .popup_second ul li label span:nth-child(2) {
    font-size: 18px;
  }

  .popup_new > .popup_second ul li label span:nth-child(3) {
    font-size: 13px;
  }

  .popup_adress .body_popup > p {
    font-size: 8px;
  }

  .body_popup > h2 {
    font-size: 19px;
  }

  #openModal form .text_for_work_shop {
    font-size: 11px !important;
  }

  .benefits ul li > p {
    font-size: 12px;
  }

  .security_box > p {
    font-size: 7px;
  }
}



    </style>
    `

        let newBlock = /*html */ `
    <section class="new_block">
        <div class="join_text">
            <p>Join our free online workshop</p>
        </div>
        <div class="enroll_box">
            <div class="container_var">
                <div class="img_wrap">
                    <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                </div>
                <div class="info_box">

                        <div>
                            <img src="https://conversionratestore.github.io/projects/knineti/img/medal.svg" alt="medal">
                            <span>Exclusive and first ever online workshop by renowned service dog trainer Dr. Alexa Diaz, PhD</span>
                        </div>
                        <h1>Learn how to train your dog to be as <span>obedient</span> as a service dog</h1>
                        <div class="img_wrap">
                            <img src="https://conversionratestore.github.io/projects/knineti/img/enroll_box_dog.jpg" alt="dog">
                        </div>   
                        <p>Take a 1-minute quiz about your dog to access our <b>free online workshop</b> and learn how to deal with barking, housebreaking, nipping and other unwanted behaviors</p>
                        <ul>
                            <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bi_play-circle-fill.svg" alt="play circle">
                                <span>Workshop duration: 56 minutes</span>
                            </li>
                             <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bx_time-five.svg" alt="time five">
                                <span>Watch on demand at your convenience</span>
                            </li>
                            <li>
                                <img src="https://conversionratestore.github.io/projects/knineti/img/bi_person-fill.svg" alt="person">
                                <span>This workshop has helped train 2.7 million dogs</span>
                            </li>
                        </ul>
                        <a href="#">Sign up for the free online workshop</a>
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
          "Reacting to other dogs": ["https://conversionratestore.github.io/projects/knineti/img/dog_list12.jpg"],
          "Anxiety ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list11.jpg"],
          "Aggression ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list10.jpg"],
          "Extremely excited": ["https://conversionratestore.github.io/projects/knineti/img/dog_list9.jpg"],
          "Chewing ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list8.jpg"],
          "Doesn't listen": ["https://conversionratestore.github.io/projects/knineti/img/dog_list7.jpg"],
          "Not coming when called": ["https://conversionratestore.github.io/projects/knineti/img/dog_list6.jpg"],
          "Nipping or biting": ["https://conversionratestore.github.io/projects/knineti/img/dog_list5.jpg"],
          "Housebreaking ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list4.jpg"],
          "Pulling on leash": ["https://conversionratestore.github.io/projects/knineti/img/dog_list3.jpg"],
          "Jumping ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list2.jpg"],
          "Barking ": ["https://conversionratestore.github.io/projects/knineti/img/dog_list1.jpg"],
        }

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

        let popupNew = /*html*/ `
    <div class="popup_new">
            <div class="progress_bar">
                <ul>
                    <li class="active_step"></li>
                    <li></li>
                    <li></li>
                </ul>
                <div>
                   <p class="active_btn_first close" id="closestepthree" data-dismiss="modal" data-original-title="" title="" tabIndex="0">
                       <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                   </p>
                    <p class="active_btn_second" tabIndex="0">
                       <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button">
                   </p>
                   <p><span>1</span>/<span>3</span></p>
                </div>
            </div>

            <div class="img_wrap">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_select_problem.jpg" alt="dog" class="dog_first">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_age_block.jpg" alt="dog" class="dog_second">
                <img src="https://conversionratestore.github.io/projects/knineti/img/dog_breed_block.jpg" alt="dog" class="dog_third">
            </div>

            <div class="popup_first active_popup">
                <h2>What unwanted behavior do you want to address?</h2>
                <p>Select any problems you’ve experienced in the last 2 months</p>
                <div class="first_block_checkbox">
                    <input class="custom_checkbox" id="barking" type="checkbox" name="barking" value="barking">
                    <label for="barking" tabIndex="0">Barking
                    </label>
    
                    <input class="custom_checkbox" id="jumping" type="checkbox" name="jumping" value="jumping">
                    <label for="jumping" tabIndex="0">Jumping
                    </label>
    
                    <input class="custom_checkbox" id="pulling" type="checkbox" name="pulling" value="pulling">
                    <label for="pulling" tabIndex="0">Pulling leash
                    </label>
    
                    <input class="custom_checkbox" id="housebreaking" type="checkbox" name="housebreaking" value="housebreaking">
                    <label for="housebreaking" tabIndex="0">Housebreaking
                    </label>
    
                    <input class="custom_checkbox" id="nipping" type="checkbox" name="nipping" value="nipping">
                    <label for="nipping" tabIndex="0">Nipping or biting
                    </label>
    
                    <input class="custom_checkbox" id="called" type="checkbox" name="called" value="called">
                    <label for="called" tabIndex="0">Not coming when called
                    </label>
    
                    <input class="custom_checkbox" id="listen" type="checkbox" name="listen" value="listen">
                    <label for="listen" tabIndex="0">Doesn't listen</label>
    
                    <input class="custom_checkbox" id="chewing" type="checkbox" name="chewing" value="chewing">
                    <label for="chewing" tabIndex="0">Chewing</label>
    
                    <input class="custom_checkbox" id="excitable" type="checkbox" name="excitable" value="excitable">
                    <label for="excitable" tabIndex="0">Extremely excited</label>
    
                    <input class="custom_checkbox" id="aggression" type="checkbox" name="aggression" value="aggression">
                    <label for="aggression" tabIndex="0">Aggression</label>
    
                    <input class="custom_checkbox" id="anxiety" type="checkbox" name="anxiety" value="anxiety">
                    <label for="anxiety" tabIndex="0">Anxiety</label>
    
                    <input class="custom_checkbox" type="checkbox" id="reacting" name="reacting" value="reacting">
                    <label for="reacting" tabIndex="0">Reacting to other dogs</label>
    
                    <input class="custom_checkbox" type="checkbox" id="other" name="other" value="other">
                    <label for="other" tabIndex="0">Other</label>
                </div>
                <div class="btn_continue" tabIndex="0">Continue</div>
            </div>


            <div class="popup_second">
                <h2>What’s your dog’s age?</h2>
                <ul>
                    <li>
                        <input class="radio_box" name="ageDog" id="puppy" type="radio">
                        <label for="puppy" tabIndex="0">
                            <span class="radio_style"></span>
                            <span>Puppy</span>
                            <span>Up to 12 months</span>
                        </label>
                    </li>
                    <li>
                        <input class="radio_box" name="ageDog" id="adult" type="radio">
                        <label for="adult" tabIndex="0">
                            <span class="radio_style"></span>
                            <span>Adult</span>
                            <span>From 1 to 7 years</span>
                        </label>
                    </li>
                    <li>
                        <input class="radio_box" name="ageDog" id="senior" type="radio">
                        <label for="senior" tabIndex="0">
                            <span class="radio_style"></span>
                            <span>Older Adult/Senior</span>
                            <span>More than 7 years</span>
                        </label>
                    </li>
                </ul>
                <div class="btn_continue" tabIndex="0">Continue</div>
            </div> 

            <div class="popup_third_box">
                <h2>
                    What breed is your dog?
                </h2>

                <div class="chosen_select">
                  <label>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.04 17.2798C7.58405 17.2798 4.80005 14.4958 4.80005 11.0398C4.80005 7.5838 7.58405 4.7998 11.04 4.7998C14.496 4.7998 17.28 7.5838 17.28 11.0398C17.28 14.4958 14.496 17.2798 11.04 17.2798ZM11.04 5.7598C8.11205 5.7598 5.76005 8.1118 5.76005 11.0398C5.76005 13.9678 8.11205 16.3198 11.04 16.3198C13.968 16.3198 16.32 13.9678 16.32 11.0398C16.32 8.1118 13.968 5.7598 11.04 5.7598Z" fill="#A9B4B8"/>
                    <path d="M15.6873 15.0078L19.9977 19.3182L19.3189 19.9969L15.0085 15.6865L15.6873 15.0078Z" fill="#A9B4B8"/>
                    </svg>
                    <input type="text" placeholder='Enter your dog’s breed'>

                    <svg id="removeTextInput" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0604 11.9996L17.7802 7.27982C17.9168 7.13837 17.9924 6.94892 17.9907 6.75227C17.989 6.55562 17.9101 6.36751 17.7711 6.22846C17.632 6.0894 17.4439 6.01053 17.2472 6.00882C17.0506 6.00711 16.8611 6.0827 16.7197 6.21932L11.9999 10.9391L7.28019 6.21932C7.13874 6.0827 6.94929 6.00711 6.75264 6.00882C6.55599 6.01053 6.36788 6.0894 6.22882 6.22846C6.08977 6.36751 6.01089 6.55562 6.00918 6.75227C6.00747 6.94892 6.08307 7.13837 6.21969 7.27982L10.9394 11.9996L6.21969 16.7193C6.14806 16.7885 6.09092 16.8713 6.05161 16.9628C6.01231 17.0543 5.99162 17.1527 5.99075 17.2523C5.98989 17.3519 6.00886 17.4506 6.04657 17.5428C6.08428 17.635 6.13997 17.7187 6.21039 17.7891C6.28081 17.8595 6.36455 17.9152 6.45672 17.9529C6.5489 17.9907 6.64765 18.0096 6.74724 18.0088C6.84682 18.0079 6.94524 17.9872 7.03674 17.9479C7.12825 17.9086 7.211 17.8515 7.28019 17.7798L11.9999 13.0601L16.7197 17.7798C16.8611 17.9164 17.0506 17.992 17.2472 17.9903C17.4439 17.9886 17.632 17.9097 17.7711 17.7707C17.9101 17.6316 17.989 17.4435 17.9907 17.2469C17.9924 17.0502 17.9168 16.8608 17.7802 16.7193L13.0604 11.9996Z" fill="#808080"/>
                    </svg>
                  </label>
                  <div>
                    <ul></ul>
                  </div>
                </div>
                <div class="btn_continue disabled_var" tabIndex="0">Continue</div>
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
            <div class="body_popup">
                <h2>How should we address you and your dog?</h2>
            </div>
        </div>
    
        <div class="popup_adress">
            <div class="body_popup">
                <p>The workshop will be conducted by Dr. Alexa Diaz, PhD (one of the foremost service dog trainers in the U.S.) and Eric Presnall (host of the Animal Planet TV show "Who Let the Dogs Out").</p>
                <h2>Enter your email and mobile number to access this FREE online workshop now</h2>
            </div>
        </div>
    </div>
    `

        let textForWorkShop = /*html */ `
    <p class="text_for_work_shop">We’ll email and text you the link for the workshop <br> and tips to train your dog.</p>
    `

        document.head.insertAdjacentHTML("beforeend", popupStyle)
        document.querySelector(".want-to-obey").insertAdjacentHTML("beforebegin", newBlock)

        if (document.querySelector("#firstModal")) {
          document.querySelectorAll("#firstModal #puppyCheck").forEach((el) => {
            el.addEventListener("click", function () {
              document.querySelector("#firstModal .modal-header #closestepthree.close").style.display = "block"
            })
          })
        }

        function setListDog(title, photo) {
          return `  <li>
                    <a href="#">
                        <img src="${photo}" alt="${title}">
                        <span>${title}</span>
                    </a>
                </li>`
        }

        function setListBreedDog(title) {
          return `  <li data-breed="${title}">${title}</li>`
        }

        for (let key in arrayDog) {
          document.querySelector(".dog_list ul").insertAdjacentHTML("afterbegin", setListDog(key, arrayDog[key][0]))
        }

        //   click on btn
        document.querySelector(".enroll_box .info_box > a").addEventListener("click", function (e) {
          e.preventDefault()
          pushDataLayer("Step 1 Sign up for workshop (main)")

          document.querySelector(".desktop-view .button-header a.button-blue-large:link").click()
        })

        document.querySelector(".what a.grab_butn").addEventListener("click", () => {
          pushDataLayer("Step 1 Grab your free seat (any)")
        })

        document.querySelector(".Rapt a").addEventListener("click", () => {
          pushDataLayer("Step 1 Grab your free seat (any)")
        })

        document.querySelectorAll(".buttons a.grab_butn").forEach((el) => {
          el.addEventListener("click", () => {
            pushDataLayer("Step 1 Grab your free seat (any)")
          })
        })

        // #openModal
        // document.querySelectorAll('#openModal') -> click on btn popup
        let a = setInterval(() => {
          if (document.querySelector("#openModal .modal-content.modal-of-content.popup-first-body")) {
            clearInterval(a)

            document.querySelector("#openModal .border-of-modal").insertAdjacentHTML("afterbegin", popupNew)

            let b = setInterval(() => {
              if (document.querySelector("#openModal.modal.in .modal-dialog")) {
                clearInterval(b)

                document.querySelector("#openModal.modal.in .modal-dialog").insertAdjacentHTML(
                  "afterbegin",
                  `     
                <div class="join_text">
                    <p>Join our free online workshop</p>
                </div>
                <div class="img_wrap">
                              <img src="https://conversionratestore.github.io/projects/knineti/img/logo_dog.png" alt="logo dog">
                          </div>`
                )

                document.querySelector("#openModal.modal.in .modal-dialog > .img_wrap").insertAdjacentHTML(
                  "afterend",
                  `<div class="btn_wrapp">     
                 <p class="active_btn_fourth" tabIndex="0">
                <img src="https://conversionratestore.github.io/projects/knineti/img/previous_btn.svg" alt="previous button"></p>
                <button type="button" class="close" id="closestepthree" data-dismiss="modal" data-original-title="" title="">
                    <spam class="btn_space" data-original-title="" title="">×</spam>
                </button>
                </div>  `
                )

                // click on button.close
                if (document.querySelector("#openModal .btn_wrapp button.close")) {
                  document.querySelector("#openModal .btn_wrapp button.close").addEventListener("click", () => {
                    if (document.querySelector("#openModal .btn_wrapp > p").classList.contains("active_btn_fourth")) {
                      pushDataLayer(`Click on Closed on step "How should we address you and your dog?"`)
                    }

                    if (document.querySelector("#openModal .btn_wrapp > p").classList.contains("active_btn_fifth")) {
                      pushDataLayer(`Click on Closed on step "Enter your email and mobile number to access"`)
                    }
                  })
                }

                // btn back fourth
                if (document.querySelector("#openModal.modal.in .modal-dialog .btn_wrapp")) {
                  document.querySelector("#openModal.modal.in .modal-dialog .btn_wrapp > p").addEventListener("click", function () {
                    // btn back fourth
                    if (this?.classList.contains("active_btn_fourth")) {
                      pushDataLayer(`Click on Previous on step "How should we address you and yourdog?"`)
                      document.querySelector(".popup_new").style.display = "flex"
                      document.querySelector("#openModal .modal-body").style.display = "none"
                      document.querySelector("#openModal .btn_wrapp").style.display = "none"
                    }
                  })
                }
              }
            }, 10)

            arrayBreedDog.forEach((el) => {
              document.querySelector(".chosen_select ul").insertAdjacentHTML("afterbegin", setListBreedDog(el))
            })

            // click on label checkbox
            document.querySelectorAll("#openModal .custom_checkbox + label").forEach((el) => {
              el.addEventListener("click", function () {
                pushDataLayer(`${this.getAttribute("for")} selected`)
              })
            })

            let arr = []
            //   click on first btn Continue
            if (document.querySelector(".popup_new > .popup_first .btn_continue")) {
              document.querySelector(".popup_new > .popup_first .btn_continue").addEventListener("click", function (el) {
                pushDataLayer(`Click on Continue on step "What unwanted behavior do you want to address`)
                this.closest(".popup_first")?.classList.remove("active_popup")

                document.querySelector("#openModal .popup_new > .progress_bar > div p:nth-child(1).active_btn_first").style.display = "none"
                if (document.querySelector("#openModal .popup_new > .progress_bar > div p:nth-child(1)")?.classList.contains("active_btn_first")) {
                  document.querySelector("#openModal .popup_new > .progress_bar > div p:nth-child(1)")?.classList.remove("active_btn_first")
                }
                document.querySelector(".popup_new > .progress_bar > div p:nth-child(2).active_btn_second").style.display = "flex"
                document.querySelector(".popup_new > .popup_second")?.classList.add("active_popup")
                document.querySelector(".popup_new .img_wrap .dog_first").style.display = "none"
                document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
                document.querySelector(".popup_new > .progress_bar > ul li:nth-child(2)")?.classList.add("active_step")
                document.querySelector(".popup_new > .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"

                document.querySelectorAll("#openModal .custom_checkbox:checked + label").forEach((el) => {
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

            //   click on second btn Continue
            document.querySelector(".popup_new > .popup_second .btn_continue").addEventListener("click", function (el) {
              pushDataLayer(`Click on Continue on step "What’s your dog’s age?`)
              this.closest(".popup_second")?.classList.remove("active_popup")

              document.querySelector(".popup_new > .progress_bar > div p:nth-child(2).active_btn_second")?.classList.remove("active_btn_second")
              document.querySelector(".popup_new > .progress_bar > div p:nth-child(2)")?.classList.add("active_btn_third")
              document.querySelector(".popup_new > .popup_third_box")?.classList.add("active_popup")
              document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
              document.querySelector(".popup_new .img_wrap .dog_third").style.display = "block"
              document.querySelector(".popup_new > .progress_bar > ul li:nth-child(3)")?.classList.add("active_step")
              document.querySelector(".popup_new > .progress_bar > div p:last-child span:nth-child(1)").textContent = "3"
            })

            //   click on third btn Continue
            if (document.querySelector(".popup_new > .popup_third_box .btn_continue")) {
              document.querySelector(".popup_new > .popup_third_box .btn_continue").addEventListener("click", function () {
                if (document.querySelector(".chosen_select label > input")) {
                  let inputValue = document.querySelector(".chosen_select label > input").value
                  pushDataLayer(`Click on Continue on step "What breed is your dog? ${inputValue}`)
                }
                document.querySelector(".popup_new").style.display = "none"
                document.querySelector("#openModal .modal-body").style.display = "block"
                if (document.querySelector("#openModal .btn_wrapp")) {
                  document.querySelector("#openModal .btn_wrapp").style.display = "flex"
                }
              })
            }

            // //   btn back first
            document.querySelector("#openModal .popup_new > .progress_bar > div p:nth-child(1)").addEventListener("click", function () {
              pushDataLayer(`Click on Previous on step "What unwanted behavior do you want to address?"`)
              if (document.querySelector("#openModal .popup_new > .popup_first .btn_continue").getAttribute("data-lst-dog")) {
                document.querySelector("#openModal .popup_new > .popup_first .btn_continue").removeAttribute("data-lst-dog", "2")
              }
            })

            if (document.querySelector(".popup_new > .progress_bar > div p:nth-child(2)")) {
              document.querySelector(".popup_new > .progress_bar > div p:nth-child(2)").addEventListener("click", function (el) {
                //   btn back active_btn_second
                if (this?.classList.contains("active_btn_second")) {
                  arr = []
                  pushDataLayer(`Click on Previous on step "What’s your dog’s age?"`)
                  this.style.display = "none"
                  document.querySelector("#openModal .popup_new > .progress_bar > div p:nth-child(1)").style.display = "flex"
                  document.querySelector("#openModal .popup_new > .progress_bar > div p:nth-child(1)")?.classList.add("active_btn_first")
                  document.querySelector(".popup_new > .popup_first")?.classList.add("active_popup")
                  document.querySelector(".popup_new > .popup_second")?.classList.remove("active_popup")
                  document.querySelector(".popup_new .img_wrap .dog_second").style.display = "none"
                  document.querySelector(".popup_new .img_wrap .dog_first").style.display = "block"
                  document.querySelector(".popup_new > .progress_bar > ul li:nth-child(2)")?.classList.remove("active_step")
                  document.querySelector(".popup_new > .progress_bar > div p:last-child span:nth-child(1)").textContent = "1"
                }

                //   btn back active_btn_third
                if (this?.classList.contains("active_btn_third")) {
                  pushDataLayer(`Click on Previous on step "What breed is your dog?"`)
                  this?.classList.remove("active_btn_third")
                  this?.classList.add("active_btn_second")

                  document.querySelector(".popup_new > .popup_first .btn_continue").setAttribute("data-lst-dog", "2")
                  document.querySelector(".popup_new > .popup_third_box")?.classList.remove("active_popup")
                  document.querySelector(".popup_new > .popup_second")?.classList.add("active_popup")
                  document.querySelector(".popup_new .img_wrap .dog_third").style.display = "none"
                  document.querySelector(".popup_new .img_wrap .dog_second").style.display = "block"
                  document.querySelector(".popup_new > .progress_bar > ul li:nth-child(3)")?.classList.remove("active_step")
                  document.querySelector(".popup_new > .progress_bar > div p:last-child span:nth-child(1)").textContent = "2"
                }
              })
            }

            if (document.querySelector(".popup_new > .popup_second ul")) {
              document.querySelectorAll(".popup_new > .popup_second ul li label").forEach((el) => {
                el.addEventListener("click", function () {
                  pushDataLayer(`${this.getAttribute("for")} selected`)
                })
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

              //   create btn last continue
              document.querySelector("#openModal form .form-group > div:last-child").insertAdjacentHTML("beforebegin", buttonInputName)
            }

            if (document.querySelector("#openModal .button_input_name")) {
              document.querySelector("#openModal .button_input_name").addEventListener("click", () => {
                validationForm("#openModal")
              })
            }

            // click on btn Get workshop link clicked
            if (document.querySelector("#openModal #contact-submit")) {
              document.querySelector("#openModal #contact-submit").addEventListener("click", function () {
                pushDataLayer("Get workshop link clicked")
              })
            }

            // choose select
            if (document.querySelector(".chosen_select")) {
              filteInputText()
              // remove all text input
              document.querySelector("#removeTextInput").addEventListener("click", function (e) {
                pushDataLayer("Click on Closed on step 'What breed is your dog?'")
                document.querySelector(".chosen_select ul").innerHTML = ""
                arrayBreedDog.forEach((el) => {
                  document.querySelector(".chosen_select ul").insertAdjacentHTML("afterbegin", setListBreedDog(el))
                })
                this.previousElementSibling.value = ""
                document.querySelector(".chosen_select div").style.display = "block"
                document.querySelector(".popup_new > .popup_third_box .btn_continue")?.classList.add("disabled_var")
                filteInputText()
              })

              // filter
              document.querySelector(".chosen_select label > input").addEventListener("focus", () => {
                document.querySelector(".chosen_select label")?.classList.add("on_focus")
                document.querySelector(".chosen_select").insertAdjacentHTML(
                  "beforeend",
                  `<p class="hover_text"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_732_846)"><path d="M11.8087 9.26711L7.222 1.3227C6.96695 0.880953 6.51013 0.617188 5.99999 0.617188C5.48988 0.617188 5.03303 0.880953 4.77799 1.3227L0.191302 9.26708C-0.0637675 9.70888 -0.0637675 10.2364 0.191302 10.6781C0.446372 11.1199 0.903168 11.3837 1.41331 11.3837H10.5867C11.0968 11.3837 11.5536 11.1199 11.8087 10.6782C12.0638 10.2364 12.0638 9.70888 11.8087 9.26711ZM11.1999 10.3266C11.0719 10.5483 10.8426 10.6806 10.5867 10.6806H1.41331C1.15732 10.6806 0.928106 10.5483 0.800137 10.3266C0.672169 10.105 0.672169 9.84032 0.800137 9.61865L5.38687 1.67424C5.51484 1.45257 5.74406 1.32024 6.00002 1.32024C6.25595 1.32024 6.4852 1.45257 6.61316 1.67424L11.1999 9.61865C11.3278 9.84032 11.3278 10.105 11.1999 10.3266Z" fill="#808080"/><path d="M6.35147 4.125H5.64844V7.6402H6.35147V4.125Z" fill="#808080"/><path d="M5.99995 8.34375C5.74151 8.34375 5.53125 8.55401 5.53125 8.81245C5.53125 9.0709 5.74151 9.28115 5.99995 9.28115C6.25837 9.28115 6.46865 9.0709 6.46865 8.81245C6.46865 8.55401 6.2584 8.34375 5.99995 8.34375Z" fill="#808080"/></g><defs><clipPath id="clip0_732_846"><rect width="12" height="12" fill="white"/></clipPath></defs></svg>
              Choose your dog breed to continue</p>`
                )
              })

              document.querySelector(".chosen_select label > input").addEventListener("blur", () => {
                if (document.querySelector(".chosen_select label")?.classList.contains("on_focus")) {
                  document.querySelector(".chosen_select label")?.classList.remove("on_focus")

                  if (document.querySelector(".chosen_select > p")) {
                    document.querySelector(".chosen_select > p").remove()
                  }
                  if (document.querySelector(".chosen_select label > input").value === "") {
                    document.querySelector(".chosen_select label svg#removeTextInput").style.display = "none"
                  }
                }
              })

              document.querySelector(".chosen_select label > input").addEventListener("input", function (e) {
                if (e.value !== "") {
                  document.querySelector(".chosen_select label svg#removeTextInput").style.display = "block"
                }

                document.querySelector(".chosen_select ul").innerHTML = ""
                arrayBreedDog.forEach((el) => {
                  document.querySelector(".chosen_select ul").insertAdjacentHTML("afterbegin", setListBreedDog(el))
                })

                document.querySelector(".chosen_select div").style.display = "block"
                document.querySelector(".popup_new > .popup_third_box .btn_continue")?.classList.add("disabled_var")
                filteInputText()
              })

              function filteInputText() {
                let filterValue = document.querySelector(".chosen_select label > input").value.toUpperCase()
                let notFound = true

                document.querySelectorAll(".chosen_select ul li").forEach(function (el) {
                  el.addEventListener("click", function () {
                    document.querySelector(".chosen_select label > input").value = el.textContent
                    document.querySelector(".chosen_select div").style.display = "none"
                    document.querySelector(".popup_new > .popup_third_box .btn_continue.disabled_var")?.classList.remove("disabled_var")
                    if (document.querySelector(".chosen_select label > input").value !== "") {
                      document.querySelector(".chosen_select label svg#removeTextInput").style.display = "block"
                    }
                  })

                  let text = el.textContent.toUpperCase()
                  if (text.includes(filterValue)) {
                    el?.classList.add("show")
                    el?.classList.remove("hide")
                    notFound = false
                    includesSymb(filterValue, text, el.firstChild)
                  } else {
                    el?.classList.add("hide")
                    el?.classList.remove("show")
                  }
                })

                if (notFound) {
                  document.querySelector(".chosen_select ul").innerHTML = `<li>Oops, nothing found!</li>`
                }
              }
            }

            function includesSymb(text, cont, element) {
              let root = element
              let content = cont

              let rng = document.createRange()

              rng.setStart(root, content.indexOf(text))

              rng.setEnd(root, content.indexOf(text) + text.length)

              let highlightDiv = document.createElement("strong")

              rng.surroundContents(highlightDiv)
            }
          }
        }, 10)

        // validate formu
        function validationForm(parent) {
          let inputValueName = document.querySelector(`${parent} input[name='first_name']`).value.match(/^[a-zA-Z]+$/)
          let inputDogName = document.querySelector(`${parent} input[name='dog_name']`).value.match(/^[a-zA-Z]+$/)

          // first_name
          if (inputValueName === null) {
            document.querySelector(`${parent} input[name='first_name']`)?.classList.add("input_error")
            document.querySelector(`${parent} .input_error_text`).style.display = "block"
          } else {
            document.querySelector(`${parent} input[name='first_name']`)?.classList.remove("input_error")
            document.querySelector(`${parent} .input_error_text`).style.display = "none"
          }

          // dog_name
          if (inputDogName === null) {
            document.querySelector(`${parent} input[name='dog_name']`)?.classList.add("input_error")
            document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "block"
          } else {
            document.querySelector(`${parent} input[name='dog_name']`)?.classList.remove("input_error")
            document.querySelector(`${parent} input[name='dog_name'] + .input_error_text`).style.display = "none"
          }

          if (document.querySelector(`${parent} input.input_error`) === null && parent === `#openModal`) {
            pushDataLayer(`Click on Continue on step "How should we address you and your dog?"`)
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
            if (document.querySelector(".modal.in .modal-dialog .btn_wrapp > p")?.classList.contains("active_btn_fourth")) {
              document.querySelector(".modal.in .modal-dialog .btn_wrapp > p")?.classList.remove("active_btn_fourth")
              document.querySelector(".modal.in .modal-dialog .btn_wrapp > p")?.classList.add("active_btn_fifth")
            }
          }
        }

        // click on img list Dog
        document.querySelectorAll(".dog_list ul li a").forEach((el) => {
          el.addEventListener("click", function (e) {
            e.preventDefault()

            document.querySelector(".desktop-view .button-header a.button-blue-large:link").click()

            if (document.querySelector("#openModal .btn_wrapp")) {
              pushDataLayer(`Step 1 click on ${el.querySelector("span").textContent}`)
            }

            let a = setInterval(() => {
              if (document.querySelector(".popup_new > .progress_bar > div p:nth-child(1)")?.classList.contains("active_btn_first")) {
                clearInterval(a)

                if (document.querySelector(".popup_new > .popup_first .btn_continue")) {
                  if (!document.querySelector(".popup_new > .popup_first .btn_continue").getAttribute("data-lst-dog")) {
                    document.querySelector(".popup_new > .popup_first .btn_continue").click()
                    pushDataLayer(`Step 1 click on ${el.querySelector("span").textContent} (minus Continue on step "What unwanted behavior do you want to address)`)
                  }
                }
              }
            }, 20)
          })
        })

        pushDataLayer("loaded")
        clarity("set", "reg_popup_impr", "variant_1")
        document.querySelector(".exp")?.remove()
      }
    }, 10)
  }
}
