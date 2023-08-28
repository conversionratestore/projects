let startFunk = setInterval(() => {
  // user.isSubscriber === false
  if (JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false && document.body) {
    clearInterval(startFunk);

    //cdn jquery
    // let script = document.createElement("script");
    // script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    // script.async = false;
    // document.head.appendChild(script);
    //cdn clipboard
    let scriptCustomSlider = document.createElement("script");
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js";
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);
    //cdn flipclock
    let scriptCustomTimer = document.createElement("script");
    scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js";
    scriptCustomTimer.async = false;
    document.head.appendChild(scriptCustomTimer);
    let scriptCustomTimerStyle = document.createElement("link");
    scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css";
    scriptCustomTimerStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomTimerStyle);

    function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        // alert(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
        console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        // alert(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
        console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
        });
      }
    }

    let newStyle = /*html */ `
        <style>
      #promoteSubscriptionWrap {
        position: relative;
        background: #fff;
        width: 100%;
        padding: 42px 0 40px;
      }
      .bgr_gray {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #f6f6f6;
        min-height: 95px;
        max-height: 95px;
        height: 100%;
        width: 100%;
      }
      .new_container {
        max-width: 1040px;
        margin: 0 auto;
        width: 90%;
        padding: 30px;
        border-radius: 12px;
        background: #fff;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
      }
      .btn_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        margin-bottom: 16px;
        border-bottom: 2px solid #f6f6f6;
      }
      .btn_wrapper h2 {
        font-family: "Manrope", sans-serif;
        color: #272727;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        margin: 0;
      }
      .accent_color {
        color: #017922;
      }
      #UnlockPremiumContentLink,
      #subscribeSaveLink {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: 302px;
        width: 100%;
        height: 48px;
        border-radius: 30px;
        background: #017922;
        transition: all 0.3s ease;
      }
      #UnlockPremiumContentLink:hover,
      #subscribeSaveLink:hover {
        color: #ffffff;
        background: #00601b;
        border-color: #007922;
        text-decoration: unset;
      }
      #UnlockPremiumContentLink span {
        font-family: "Manrope", sans-serif;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        text-transform: capitalize;
      }
      .toggle_btn_features {
        display: flex;
        gap: 8px;
        cursor: pointer;
        margin: 18px auto 0;
        align-items: center;
        justify-content: center;
        width: max-content;
      }
      .toggle_btn_features span {
        font-family: "Manrope", sans-serif;
        color: #027db8;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        text-decoration-line: underline;
        text-transform: capitalize;
      }
      .toggle_btn_features > svg {
        transition: all 0.3s ease;
      }
      .toggle_btn_features.open_var > svg {
        transform: rotateX(180deg);
      }
      .new_features_list,
      .hidden_new_features_list {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .new_features_list > li,
      .hidden_new_features_list > li {
        width: 30%;
      }
      .mini_block {
        margin-top: 24px;
      }
      .mini_block > li {
        width: 100%;
      }
      .mini_block > li .list_main_title {
        margin-bottom: 12px;
      }
      .hidden_inform_box {
        display: none;
        margin-top: 12px;
      }
      .list_main_title {
        position: relative;
        color: #272727;
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin: 0;
        padding-left: 52px;
      }
      .list_main_title[data-title]::before {
        position: absolute;
        content: "";
        width: 40px;
        height: 40px;
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/premium.svg) no-repeat center center;
        top: 0;
        left: 0;
        background-size: contain;
      }
      .list_main_title[data-title="yoga_person"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_person.svg) no-repeat center center;
        background-size: contain;
      }
      .list_main_title[data-title="yoga"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga.svg) no-repeat center center;
        background-size: contain;
      }
      .list_main_title[data-title="devices"]::before {
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/devices.svg) no-repeat center center;
        background-size: contain;
      }
      .list_txt {
        color: #555;
        font-family: "Manrope", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        margin: 0;
        max-width: 300px;
      }
      .your_store_wrap {
        margin-top: 48px;
      }
      .your_store_wrap .list_main_title {
        padding: 0;
        margin-bottom: 12px;
      }
      .professional_classes_list {
        list-style: disc;
        color: #555;
        font-size: 12px;
        margin-top: 12px;
        padding: 0 0 0 23px;
      }
      .professional_classes_list > li + li {
        margin-top: 10px;
      }
      .store_icon {
        display: flex;
        justify-content: flex-start;
        gap: 24px;
        flex-wrap: wrap;
      }
      .store_icon img {
        max-width: 140px;
        width: 100%;
      }
      [data-mob],
      [data-openmobvar] {
        display: none;
      }
      .sfc-nodePlayable__lockContainerInner {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(3px);
        max-width: 702px;
        width: 100%;
        min-height: 378px;
        background: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 0;
        overflow: hidden;
      }
      .sfc-nodePlayable__lockContainerInner::before {
        position: absolute;
        content: "Premium";
        right: -34px;
        top: 15px;
        background: #f3a83c;
        color: #272727;
        font-size: 16px;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 134px;
        width: 100%;
        transform: rotate(45deg);
        font-family: "Inter", sans-serif;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header {
        margin-bottom: 24px;
      }
      .sfc-nodePlayable__lockContainerInner > div {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline {
        color: #272727;
        font-family: "Manrope", sans-serif !important;
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
        margin-bottom: 16px;
      }
      .sfc-nodePlayable__lockCta {
        border-radius: 30px;
        background: #017922;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-family: "Manrope", sans-serif !important;
        font-size: 18px;
        font-weight: 700;
        line-height: 32px;
        text-transform: capitalize;
        height: 52px;
        text-decoration: unset;
        max-width: 276px;
        width: 100%;
        margin: 0 auto;
        transition: all 0.3s ease;
      }
      .sfc-nodePlayable__lockCta:hover {
        color: #ffffff;
        background: #00601b;
        border-color: #007922;
        text-decoration: unset;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline {
        color: #555;
        font-family: "Manrope", sans-serif !important;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        margin: 0;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-item__prefix .sfc-iconRestricted,
      .lav-features {
        display: none;
      }
      /*https://www.doyogawithme.com/become-a-subscriber */
      .path-become-a-subscriber .new_box_subscriber {
        background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
        padding: 40px 10px 142px;
      }
      .path-become-a-subscriber #promoteSubscriptionWrap {
        background: #faf8f6;
        padding: 15px 0;
      }
      .path-become-a-subscriber .bgr_gray,
      .path-become-a-subscriber #UnlockPremiumContentLink,
      .path-become-a-subscriber .lav-jumb__title {
        display: none;
      }
      .path-become-a-subscriber .lav-jumb_auth {
        border-radius: 12px;
        background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
        max-width: 960px;
        margin: 0 auto;
        padding: 13px;
        min-height: unset;
      }
      .path-become-a-subscriber .lav-jumb.lav-jumb_auth .lav-container {
        max-width: 935px;
        padding: 69px 0 28px;
        border: 2px dashed hwb(0deg 96% 4% / 50%);
        border-radius: 12px;
      }
      .path-become-a-subscriber .btn_wrapper {
        justify-content: center;
        margin-bottom: 10px;
      }
      .path-become-a-subscriber .lav-jumb__plans {
        margin-top: 20px;
      }
      .path-become-a-subscriber .lav-jumb__caption {
        margin: 0;
        font-weight: 700;
        line-height: 30px;
      }
      .path-become-a-subscriber .lav-classes {
        padding-top: 90px;
      }
      .path-become-a-subscriber .new_container {
        margin-bottom: -73px;
        z-index: 4;
        margin-top: -119px;
      }
      .path-become-a-subscriber .new_title_subscriber {
        color: #fff;
        text-align: center;
        font-family: "Manrope", sans-serif !important;
        font-size: 44px;
        font-weight: 700;
        line-height: 52px;
        max-width: 636px;
        margin: 0 auto 40px;
      }
      /* Hypothesis #6 - Add exit-intent popup with limited-time offer*/
      body.open_var{
            overflow: hidden !important;
        }
      .overlay_popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.60);
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
        max-width: 840px;
        width: 100%;
        margin: auto;
        transition: all 0.5s ease 0s;
        border-radius: 12px;
    }
    .overlay_popup .container_popup > .btn_close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 24px;
        height: 24px;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }
    .content_popup{
        display: flex;
        background: #FFF;
        border-radius: 12px;
    }
    .content_popup > div{
        width: 50%;
    }
    .content_popup > div img{
          height: 100%;
    }
    .info_block{
        padding: 30px;
    }
    .info_block > h2{
      color: #272727;
font-family: "Manrope", sans-serif !important;
font-size: 24px;
font-weight: 700;
line-height: 32px;
margin: 0 0 10px;
max-width: 287px;
    }
    .info_block > p{
      color: #555;
font-family: "Manrope", sans-serif !important;
font-size: 14px;
font-weight: 600;
line-height: 22px;
text-transform: capitalize;
margin: 0 0 16px;
    }
    .info_block > ul{
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;
    }
    .info_block > ul li{
      position: relative;
      padding-left: 28px;
    }
    .info_block > ul li::before{
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/lotus.svg) no-repeat center center;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        background-size: contain;
    }
    .info_block > ul li +li{
      margin-top: 12px;
    }
    .info_block > ul li p{
      color: #272727;
font-family: "Manrope", sans-serif !important;
font-size: 14px;
font-weight: 600;
line-height: 24px;
    }
    .voucher_block{
border-radius: 12px;
border: 1px dashed #A5A5A5;
background: #F6F6F6;
color: #555;
 font-family: "Manrope", sans-serif !important;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 22px;
padding: 12px 30px;
margin-top: 16px;
text-align:center;
    }
    .voucher_block span{
      font-weight: 700;
      color: #017922;
      text-decoration-line: underline;
    }
    #subscribeSaveLink{
max-width: unset;
height: 50px;
margin-top: 24px;
color: #FFF;
font-family: "Manrope", sans-serif !important;
font-size: 16px;
font-weight: 700;
line-height: 32px;
text-transform: capitalize;
    }
.discount_expires_wrap {
    display: flex;
    border-radius: 4px;
    border: 1px solid #E0E0E0;
    background: #F6F6F6;
    padding: 4px 4px 4px 12px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    }
    .discount_expires_wrap > p{
      margin: 0;
      color: #272727;
font-family: "Manrope", sans-serif !important;
font-size: 14px;
font-weight: 600;
line-height: 20px;
padding-left: 32px;
position: relative;
    }
    .discount_expires_wrap > p::before{
              position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/tag.svg) no-repeat center center;
        top: 0;
        left: 0;
        background-size: contain;
    }
    .flip-clock-wrapper{
      margin: 0;
      display: flex;
      align-items: center;
    }
    .flip-clock-divider .flip-clock-label,
    .flip-clock-divider:first-child{
      display: none;
    }
    .flip-clock-dot{
      background: #121620;
      width: 3px;
      height: 3px;
      box-shadow: none;
      left: 0;
    }
    .flip-clock-dot.bottom{
      bottom: 0;
    }
    .flip-clock-dot.top{
      top: 0;
    }
    .flip-clock-divider{
      height: 13px;
       width: 3px;
       margin: 0 2px;
    }
    .flip-clock-wrapper ul{
      color: #272727;
font-size: 16px;
font-weight: 700;
line-height: 22px;
min-width: unset;
padding: 0;
margin: 0 2px;
width: 24px;
height: 36px;
background:#FFF;
box-shadow: unset;
border: 1px solid #E0E0E0;
    }
    .flip-clock-wrapper .flip{
      box-shadow: unset;
    }
    .flip-clock-wrapper ul li a div div.inn{
      font-size: 16px;
      background-color:#FFF;
      color: #272727;
      text-shadow: unset;
    }
    .flip-clock-wrapper ul li a div{
      font-size: 16px;
    }
    .flip-clock-wrapper a{
      color: #272727;
    }
    .flip-clock-wrapper ul li{
      line-height: 22px;
      top: 0;
    }
    .flip-clock-wrapper ul li a div.up div.inn{
      top: 8px;
    }
    .flip-clock-wrapper ul li a div div.inn, .flip-clock-wrapper ul li a div{
      height: 75%;
    }
    .flip-clock-wrapper ul li a div div.inn,
    .flip-clock-wrapper ul li a div{
      height: 90%;
    }
    .flip-clock-wrapper ul.play li.flip-clock-before,
    .flip-clock-wrapper ul li a div.down,
    .flip-clock-wrapper ul.play li.flip-clock-active .up .shadow{
      display: none;
    }
      @media (max-width: 800px) {
        .list_txt {
          font-size: 12px;
        }
      }
      @media (max-width: 768px) {
        #promoteSubscriptionWrap {
          padding: 24px 0;
        }
        [data-mob] {
          display: flex;
        }
        .open_var[data-openmobvar] {
          display: block;
        }
        .bgr_gray,
        [data-desk] {
          display: none;
        }
        .new_features_list,
        .hidden_new_features_list {
          flex-direction: column;
          gap: 16px;
          margin: 0;
        }
        .new_features_list > li,
        .hidden_new_features_list > li {
          width: 100%;
        }
        .new_container {
          padding: 16px;
          max-width: 335px;
          width: 81%;
        }
        .btn_wrapper {
          flex-direction: column;
          align-items: flex-start;
          border-bottom: none;
          padding: 0;
          margin-bottom: 12px;
        }
        .btn_wrapper h2 {
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          margin: 0 0 12px;
          max-width: 300px;
        }
        #UnlockPremiumContentLink {
          max-width: unset;
          width: 100%;
          height: 42px;
        }
        #UnlockPremiumContentLink span {
          font-size: 14px;
          font-weight: 700;
          line-height: 32px;
        }
        .toggle_btn_features {
          margin: 10px auto 0;
        }
        .list_main_title {
          font-size: 12px;
          padding-left: 38px;
          max-width: 249px;
        }
        .list_main_title[data-title="devices"] {
          max-width: 227px;
        }
        .your_store_wrap {
          margin-top: 12px;
        }
        .your_store_wrap .list_main_title {
          margin-bottom: 6px;
        }
        .store_icon {
          gap: 16px;
        }
        .store_icon img {
          max-width: 120px;
        }
        .mini_block > li .list_main_title {
          margin: 0;
        }
        .list_txt {
          margin-top: 2px;
          line-height: 20px;
        }
        .list_main_title[data-title]::before {
          width: 26px;
          height: 26px;
        }
        .hidden_inform_box {
          margin-top: 16px;
        }
        .professional_classes_list > li + li,
        .professional_classes_list {
          margin-top: 5px;
        }
        .professional_classes_list .list_txt {
          font-weight: 600;
        }
        .new_features_list .list_main_title[data-title="yoga_person"] + p {
          font-weight: 500;
        }
        .sfc-nodePlayable__lockContainerInner {
          max-width: 316px;
          min-height: unset;
          overflow: unset;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline {
          position: relative;
          font-size: 18px;
          line-height: 26px;
          margin-bottom: 6px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline::before {
          position: absolute;
          content: "";
          width: 16px;
          height: 21px;
          background: url(https://conversionratestore.github.io/projects/doyogawithme/img/unlock_icon.svg) no-repeat center center;
          top: 0;
          left: 0;
          background-size: contain;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline {
          font-size: 14px;
          line-height: 22px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header {
          margin-bottom: 12px;
        }
        .sfc-nodePlayable__lockCta {
          height: 44px;
        }
        .sfc-nodePlayable__lockContainerInner > div {
          padding: 26px 20px 20px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-item__prefix {
          display: none;
        }
        .sfc-nodePlayable__lockContainerInner::before {
          font-size: 12px;
          line-height: 20px;
          font-family: "Manrope", sans-serif !important;
          font-weight: 700;
          height: 24px;
          max-width: 76px;
          transform: unset;
          left: 50%;
          top: -4px;
          transform: translateX(-50%);
          border-radius: 12px;
        }
        /*https://www.doyogawithme.com/become-a-subscriber */
        .path-become-a-subscriber #promoteSubscriptionWrap {
          background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
        }
        .path-become-a-subscriber .new_title_subscriber {
          font-size: 24px;
          line-height: 32px;
          margin-bottom: 24px;
        }
        .path-become-a-subscriber .new_container {
          margin-top: 0;
          margin-bottom: -52px;
        }
        .path-become-a-subscriber .lav-jumb_auth {
          background: #fff;
          padding: 74px 0 24px;
        }
        .path-become-a-subscriber .lav-jumb__caption {
          color: #272727;
          font-size: 22px;
          line-height: 21px;
        }
        .path-become-a-subscriber .lav-jumb__plans {
          margin-top: 24px;
        }
        .path-become-a-subscriber .lav-plan__option {
          color: #272727;
          font-size: 12px;
          font-weight: 600;
          line-height: 16px;
        }
        .path-become-a-subscriber .lav-jumb_auth {
          padding: 64px 1em 24px;
        }
        .path-become-a-subscriber .lav-jumb.lav-jumb_auth .lav-container {
          padding: 0;
          border: none;
        }
        .path-become-a-subscriber .lav-classes {
          padding-top: 40px;
        }
        .path-become-a-subscriber .lav-plan + .lav-plan {
          margin-top: 30px;
        }
        body:not(.lav-auth) .lav-plan.active:after {
          border-color: #017922 !important;
        }
        body:not(.lav-auth) .lav-plan .lav-mob:before {
          background-color: #017922 !important;
        }
        .path-become-a-subscriber .lav-plan__started {
          margin-top: 8px;
        }
        .path-become-a-subscriber .btn_wrapper h2 {
          margin: 0;
        }
        .path-become-a-subscriber .btn_wrapper {
          margin-bottom: 20px;
        }
        .overlay_popup .container_popup{
          max-width: 339px;
        }
        .content_popup > div{
          width: 100%;
        }
        .content_popup > div.img_wrap{
          display: none;
        }
        .info_block{
          padding: 24px 13px;
        }
        .discount_expires_wrap{
          margin-bottom: 16px;
        }
        .info_block > h2{
          font-size: 22px;
line-height: 30px;
margin: 0 0 12px;
        }
        .info_block > p br{
          display: none;
        }
        .info_block > ul li +li{
          margin-top: 16px;
        }
        .voucher_block{
          padding: 12px;
        }
        #subscribeSaveLink{
          height: 48px;
        }
        .overlay_popup .container_popup > .btn_close svg path{
          stroke: #272727;
        }
      }
      @media (max-width: 320px) {
        .sfc-nodePlayable__lockContainerInner {
          max-width: 260px;
        }
        .sfc-nodePlayable__lockContainerInner > div {
          padding: 24px 14px 15px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline {
          font-size: 15px;
          line-height: 20px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline {
          font-size: 12px;
          line-height: 18px;
        }
        .sfc-nodePlayable__lockCta {
          font-size: 15px;
          line-height: 29px;
          height: 35px;
        }
        .overlay_popup .container_popup{
          max-width: 304px;
        }
        .info_block{
          padding: 20px 10px;
        }
        .info_block > ul li p{
          font-size: 12px;
        }
        .info_block > ul li +li{
          margin-top: 4px;
        }
        .info_block > p{
          font-size: 12px;
          margin: 0 0 10px;
        }
        #subscribeSaveLink{
          margin-top: 10px;
          height: 46px;
        }
        .voucher_block{
          padding: 12px 10px;
          font-size: 12px;
        }
        .discount_expires_wrap > p{
          font-size: 11px;
        }
      }
        </style>
    `;
    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Upgrade to Premium for <span class="accent_color">Unlimited Access</span></h2>
          <a href="https://www.doyogawithme.com/become-a-subscriber" id="UnlockPremiumContentLink">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.0411 0H11.9557C8.88948 0 6.40234 2.48713 6.40234 5.55607V9.23989C7.04756 8.71875 7.75896 8.29136 8.52826 7.96599C8.73506 7.87776 8.94738 7.79779 9.1597 7.7261V5.55331C9.1597 4.00919 10.4115 2.7546 11.9584 2.7546H12.0439C13.588 2.7546 14.8426 4.00643 14.8426 5.55331C14.8426 6.20404 15.3693 6.7307 16.02 6.7307H16.4226C17.0733 6.7307 17.6 6.20404 17.6 5.55331C17.5972 2.48713 15.11 0 12.0411 0Z" fill="white" />
              <path d="M11.9999 8.36719C10.999 8.36719 10.0394 8.55469 9.15981 8.89936C8.11202 9.30744 7.17452 9.93612 6.40246 10.7302C5.0293 12.1392 4.18555 14.0611 4.18555 16.1843C4.18555 20.4995 7.68463 23.9986 11.9999 23.9986C16.3151 23.9986 19.8143 20.4995 19.8143 16.1843C19.8143 11.869 16.3151 8.36719 11.9999 8.36719ZM12.8244 16.9398L13.4227 19.7771C13.4586 19.9481 13.3289 20.1108 13.1524 20.1108H11.9999H10.8473C10.6708 20.1108 10.5412 19.9509 10.5771 19.7771L11.1754 16.9398C11.2223 16.7164 11.1286 16.4848 10.9355 16.3635C10.3537 15.9995 9.97047 15.3461 9.98975 14.6043C10.0173 13.5372 10.8859 12.6687 11.953 12.6438C13.0863 12.6163 14.0155 13.529 14.0155 14.6567C14.0155 15.3764 13.6378 16.0078 13.0697 16.3635C12.8739 16.4821 12.7774 16.7137 12.8244 16.9398Z" fill="white" />
            </svg>
            <span>Unlock Premium Content</span></a
          >
        </div>
        <ul class="new_features_list">
          <li>
            <h3 class="list_main_title" data-title="yoga_person">Unlimited access to 1000+ yoga, meditation and movement classes</h3>
        <p class="list_txt" data-openmobvar>You can enjoy one of the biggest collection of professional classes, including:</p>
        <ul class="professional_classes_list" data-openmobvar>
          <li>
            <p class="list_txt">400+ Vinyasa yoga classes</p>
          </li>
          <li>
            <p class="list_txt">350+ Hatha yoga classes</p>
          </li>
          <li>
            <p class="list_txt">250+ Gentle yoga classes</p>
          </li>
          <li>
            <p class="list_txt">170+ Yoga after workout classes</p>
          </li>
          <li>
            <p class="list_txt">100+ Yoga for back classes</p>
          </li>
          <li>
            <p class="list_txt">And much more!</p>
          </li>
        </ul>
          </li>
          <li>
            <h3 class="list_main_title" data-title="yoga">Complete collection of 30 curated programs & 50 challenges</h3>
            <p class="list_txt" data-openmobvar>Enhance your practice with our comprehensive collection of courses and special challenges.</p>
          </li>
          <li data-desk>
            <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
          </li>
        </ul>
        <div class="hidden_inform_box">
          <ul data-desk class="hidden_new_features_list">
            <li>
              <p class="list_txt">You can enjoy one of the biggest collection of professional classes, including:</p>
              <ul class="professional_classes_list">
                <li>
                  <p class="list_txt">400+ Vinyasa yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">350+ Hatha yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">250+ Gentle yoga classes</p>
                </li>
                <li>
                  <p class="list_txt">170+ Yoga after workout classes</p>
                </li>
                <li>
                  <p class="list_txt">100+ Yoga for back classes</p>
                </li>
                <li>
                  <p class="list_txt">And much more!</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enhance your practice with our comprehensive collection of courses and special challenges.</p>
              <ul class="new_features_list mini_block">
                <li>
                  <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
                  <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
                </li>
              </ul>
            </li>
            <li>
              <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
              <div class="your_store_wrap">
                <h3 class="list_main_title">Use our App</h3>
                <div class="store_icon">
                    <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon">
                    <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon">
                </div>
              </div>
            </li>
          </ul>
              <ul data-mob class="hidden_new_features_list">
      <li>
        <h3 class="list_main_title" data-title="premium">Exclusive access to all new releases and livestream events</h3>
        <p class="list_txt">Enjoy new classes and get 25% discount on livestream events.</p>
      </li>
      <li>
        <ul class="new_features_list mini_block">
          <li>
            <h3 class="list_main_title" data-title="devices">Watch classes from your laptop, TV, phone or tablet</h3>
            <p class="list_txt">Take your yoga practice anywhere, anytime using our website or mobile app.</p>
          </li>
        </ul>
        <div class="your_store_wrap">
          <h3 class="list_main_title">Use our App</h3>
          <div class="store_icon">
            <img class="apple_store_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/apple_store_icon.svg" alt="apple store icon" />
            <img class="google_play_icon" src="https://conversionratestore.github.io/projects/doyogawithme/img/google_play_icon.svg" alt="google play icon" />
          </div>
        </div>
      </li>
    </ul>
        </div>
        <p class="toggle_btn_features">
          <span>See all Premium features</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="9" viewBox="0 0 15 9" fill="none">
            <path d="M1.5 1L7.5 7L13.5 1" stroke="#027DB8" stroke-width="2" />
          </svg>
        </p>
      </div>
    </section>
    `;
    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <div class="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
    `;
    let contentPopup = /*html */ `
        <div class="content_popup">
            <div class="info_block">
              <div class="discount_expires_wrap">
                <p>Discount expires in:</p>
                <div class="countdown-wrapper">
                    <div id="countdown" class="countdown"></div>
                </div>
              </div>
                <h2>Enjoy DoYogaWithMe? Claim your <span class="accent_color">45%</span> discount</h2>
                <p>Don't miss out on this exclusive offer to unlock <br> a world of premium yoga content and take your practice to new heights.</p>
                <ul>
                  <li>
                    <p>Access 500+ Premium Classes</p>
                  </li>
                  <li>
                    <p>Personalized Programs for All Levels</p>
                  </li>
                  <li>
                    <p>Expert Instructors and Guided Sessions</p>
                  </li>
                  <li>
                    <p>Ad-Free Experience</p>
                  </li>
                  <li>
                    <p>Community Support and Exclusive Content</p>
                  </li>
                </ul>
                <div  class="voucher_block">
                  Use code <span data-clipboard-text="BOOK10">YOGA45</span> at checkout to claim your discount. But hurry, this offer won't last long!
                </div>
                <a id="subscribeSaveLink" href="https://www.doyogawithme.com//become-a-subscriber">Subscribe and Save 45% Now!</a>

            </div>
            <div class="img_wrap">
                <img class="desk_var" src="https://conversionratestore.github.io/projects/doyogawithme/img/popup_img.png" alt="woman">
            </div>
        </div>
    `;

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet">`);
    document.head.insertAdjacentHTML("beforeend", newStyle);

    console.log(`Promote subscription + Exit intent pop-up`);

    //Hypothesis #6 - Add exit-intent popup with limited-time offer
    // Show exit intent popups for users who are logged in but have not bought a paid plan (free users) on pages:
    if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && (window.location.pathname === "/" || window.location.pathname === "/yoga-classes" || window.location.pathname === "/yoga-meditation" || window.location.pathname === "/yoga-challenges" || window.location.pathname === "/yoga-programs" || window.location.pathname.match("/content/"))) {
      document.body.insertAdjacentHTML("afterbegin", popUp);
      document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopup);

      exitIntentPopup();
      // trigger for click on video
      let findVideo = setInterval(() => {
        if (document.querySelector("video.fp-engine")) {
          clearInterval(findVideo);
          document.querySelector(".sfc-nodePlayable__primaryContentContainer").addEventListener("click", (e) => {
            console.log(`object`, e.currentTarget);
            sessionStorage.setItem("click_on_video", "true");
          });
        }
      }, 100);

      function pausedVideo() {
        if (document.querySelector("video.fp-engine")) {
          document.querySelector("video.fp-engine").pause();
        }
      }
      function startVideo() {
        if (document.querySelector("video.fp-engine")) {
          document.querySelector("video.fp-engine").play();
        }
      }

      function exitIntentPopup() {
        //   EXIT INTENT popup
        if (document.querySelector(".overlay_popup")) {
          let overlay = document.querySelector(".overlay_popup"),
            containerPopup = overlay.querySelector(".container_popup"),
            btnClose = overlay.querySelector(".btn_close");

          setTimeout(() => {
            if (sessionStorage.getItem("click_on_video") == null && sessionStorage.getItem("exit_popup_loaded") == null && document.querySelector("video.fp-engine")) {
              sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
              console.log(`60000 exit_popup_loaded`);
              onOpenPopup(); //show popup
            }
          }, 60000);

          addEvent(document, "mouseout", function (e) {
            //show EXIT INTENT popup desktop
            if (e.toElement == null && e.relatedTarget == null && sessionStorage.getItem("exit_popup_loaded") == null) {
              sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
              onOpenPopup(); //show popup
            }
          });
          function addEvent(obj, evt, fn) {
            //exit intent
            if (obj.addEventListener) {
              obj.addEventListener(evt, fn, false);
            } else if (obj.attachEvent) {
              obj.attachEvent("on" + evt, fn);
            }
          }
          if (window.innerWidth <= 768) {
            //show EXIT INTENT popup mobile
            let lastPosition = 0,
              newPosition = 0,
              currentSpeed = 0;
            let scrollSpeed = () => {
              lastPosition = window.scrollY;
              setTimeout(() => {
                newPosition = window.scrollY;
              }, 70);
              currentSpeed = newPosition - lastPosition;
              if (currentSpeed > 70 && sessionStorage.getItem("exit_popup_loaded") == null) {
                sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
                onOpenPopup(); //show popup
                document.removeEventListener("scroll", scrollSpeed);
              }
            };
            document.addEventListener("scroll", scrollSpeed);
          }
          function onOpenPopup() {
            // pausedVideo();
            sessionStorage.setItem("openPopupVisib", "yes");
            overlay.classList.remove("is_hidden");
            document.querySelector("body").classList.add("open_var");
            if (!document.querySelector(".overlay_popup .content_popup")) {
              containerPopup?.insertAdjacentHTML("beforeend", contentPopup);
            }

            if (document.querySelector(".overlay_popup .content_popup")) {
              if (window.innerWidth <= 768) {
                document.querySelector(".info_block > h2").after(document.querySelector(".discount_expires_wrap"));
              }
              let clock = setInterval(() => {
                if (typeof FlipClock === "function" && document.querySelector("#countdown")) {
                  clearInterval(clock);
                  let countdown, init_countdown, set_countdown;
                  countdown = init_countdown = function () {
                    countdown = new FlipClock(document.querySelector(".countdown"), {
                      clockFace: "MinuteCounter",
                      language: "en",
                      autoStart: false,
                      countdown: true,
                      showSeconds: true,
                      callbacks: {
                        start: function () {
                          timerEventDesk(document.querySelector(".info_block"), "start");
                        },
                        stop: function () {
                          if (this.factory.getTime().time === 0) {
                            document.querySelector(".discount_expires_wrap")?.remove();
                          }
                        },
                      },
                    });
                    function timerEventDesk(el, trigger) {
                      let time = 0;
                      let currentTime = 0;
                      let s = setInterval(() => {
                        if (trigger === "start") {
                          currentTime = ++time;
                          el.setAttribute("data-time", currentTime);
                        }
                        if (trigger === "stop") {
                          clearInterval(s);
                          currentTime = el.getAttribute("data-time");
                        }
                      }, 1000);
                    }
                    btnClose.addEventListener("click", (e) => {
                      // click on btn close popup
                      pushDataLayer("exp_sub_premium_enjoy_close", "Close", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");

                      countdown.stop();
                      timerEventDesk(document.querySelector(".info_block"), "stop");
                      onClosePopup();
                    });
                    overlay.addEventListener("click", (e) => {
                      // click on overlay popup
                      if (e.target.matches(".overlay_popup")) {
                        pushDataLayer("exp_sub_premium_enjoy_close", "Close", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
                        countdown.stop();
                        timerEventDesk(document.querySelector(".info_block"), "stop");
                        onClosePopup();
                      }
                    });
                    document.querySelector("#subscribeSaveLink")?.addEventListener("click", () => {
                      pushDataLayer("exp_sub_premium_enjoy_sub", "Subscribe and Save 45% Now!", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
                      countdown.stop();
                      sessionStorage.setItem("becomeSubscriber", "true");

                      timerEventDesk(document.querySelector(".info_block"), "stop");

                      onClosePopup();
                    });
                    return countdown;
                  };
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
                      console.log(`left_secs`, left_secs);
                      left_secs *= -1;
                      elapsed = true;
                    }
                    countdown.setTime(left_secs);
                    return countdown.start();
                  };
                  init_countdown();
                  set_countdown(30, new Date());
                }
              }, 500);
            }
          }
          function onClosePopup() {
            // startVideo();
            overlay.classList.add("is_hidden");
            if (document.querySelector("body").classList.contains("open_var")) {
              document.querySelector("body").classList.remove("open_var");
            }
            setTimeout(() => {
              document.querySelector(".content_popup")?.remove();
            }, 400);
          }
          // let a = setInterval(() => {
          //   if (typeof ClipboardJS === "function") {
          //     clearInterval(a);
          //     let clipboard = new ClipboardJS(".voucher_block span");
          //     clipboard.on("success", function (e) {
          //       document.querySelector(".copied")?.remove();
          //       document.querySelector(".voucher_block").insertAdjacentHTML("beforeend", `<span class="copied">copied!</span>`);
          //       e.clearSelection();
          //       setTimeout(() => {
          //         document.querySelector(".copied")?.remove();
          //       }, 3000);
          //     });
          //   }
          // }, 1000);
        }
      }
    }
    //to redirect from https://www.doyogawithme.com/become-a-subscriber to https://www.doyogawithme.com/checkout/________?__/order_information after exit intent popup
    let becomeSubscriber = setInterval(() => {
      if (sessionStorage.getItem("becomeSubscriber") && window.location.pathname === "/become-a-subscriber") {
        clearInterval(becomeSubscriber);
        sessionStorage.removeItem("becomeSubscriber");
        sessionStorage.setItem("checkoutPremium", "true");
        document.querySelectorAll(".lav-jumb__plan .lav-plan__btn.lav-plan__btn-year").forEach((el) => {
          el.click();
        });
      }
    }, 100);
    //to apply the discount code automatically on the checkout after exit intent popup
    let checkoutPremium = setInterval(() => {
      if ((window.location.pathname.includes("checkout") && sessionStorage.getItem("checkoutPremium") && document.querySelector("#edit-sidebar-order-summary-summary .views-field.views-field-title")?.textContent.includes("1-Year")) || document.querySelector("#edit-sidebar-order-summary-summary .views-field.views-field-title")?.textContent.includes("Yearly")) {
        clearInterval(checkoutPremium);
        // sessionStorage.removeItem("checkoutPremium");
        if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")?.value === "") {
          document.querySelector("#edit-sidebar-coupon-redemption-form-code").value = "YOGA45";
        }

        if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")?.value === "YOGA45") {
          const element = document.querySelector("#edit-sidebar-coupon-redemption-form-apply");
          const events = ["mousedown", "focusin"];
          events.forEach((eventType) => element.dispatchEvent(new MouseEvent(eventType, { bubbles: true })));
        }
      }
    }, 100);

    // Hypothesis #4 - Promote Subscription on content pages
    switch (window.location.pathname) {
      case "/yoga-classes":
        let yogaClassesFind = setInterval(() => {
          if (document.querySelector(".o-page__header")) {
            clearInterval(yogaClassesFind);
            localStorage.setItem("newBannerVisib", "withBtn");
            document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
          }
        }, 100);
        break;
      case "/yoga-meditation":
        let yogaMeditationFind = setInterval(() => {
          if (document.querySelector(".o-page__header")) {
            clearInterval(yogaMeditationFind);
            localStorage.setItem("newBannerVisib", "withBtn");
            document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
          }
        }, 100);
        break;
      case "/yoga-challenges":
        let yogaChallengesFind = setInterval(() => {
          if (document.querySelector(".o-page__banner")) {
            clearInterval(yogaChallengesFind);
            localStorage.setItem("newBannerVisib", "withBtn");
            document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
          }
        }, 100);
        break;
      case "/yoga-programs":
        let yogaProgramsFind = setInterval(() => {
          if (document.querySelector(".o-page__banner")) {
            clearInterval(yogaProgramsFind);
            localStorage.setItem("newBannerVisib", "withBtn");
            document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
          }
        }, 100);

        break;
      case "/become-a-subscriber":
        // Hypothesis #5 - Promote Subscription on Premium content pages
        // logged-in user - to a page with two plans, on which a block with premium benefits appears at the top + in comparison with the old page - a different header
        if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
          let becomeSubscriberFind = setInterval(() => {
            if (document.querySelector(".o-page__header")) {
              clearInterval(becomeSubscriberFind);
              localStorage.setItem("newBannerVisib", "withoutBtn");
              document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);

              if (window.innerWidth <= 768) {
                if (document.querySelector("#promoteSubscriptionWrap") && !document.querySelector(".new_title_subscriber")) {
                  document.querySelector("#promoteSubscriptionWrap").insertAdjacentHTML("afterbegin", `<h2 class="new_title_subscriber">Unlock Premium Classes for a Transformative Yoga Journey</h2>`);
                  document.querySelector(".btn_wrapper h2").innerHTML = `What’s included in <span class="accent_color">Premium</span>`;
                }
              } else {
                if (document.querySelector("#promoteSubscriptionWrap") && !document.querySelector(".new_box_subscriber")) {
                  document.querySelector("#promoteSubscriptionWrap").insertAdjacentHTML("beforebegin", `<div class="new_box_subscriber"><h2 class="new_title_subscriber">Unlock Premium Classes for a Transformative Yoga Journey</h2></div>`);
                }
              }
            }
          }, 100);
        }
        break;

      default:
        break;
    }
    if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && window.location.pathname === "/") {
      let mainPagesFind = setInterval(() => {
        if (document.querySelector(".o-page__banner")) {
          clearInterval(mainPagesFind);
          localStorage.setItem("newBannerVisib", "withBtn");
          document.querySelector(".o-page__banner")?.insertAdjacentHTML("afterend", newBoxFeatures);
        }
      }, 100);
    }
    if (window.location.pathname.match("/content/")) {
      if (sessionStorage.getItem("survi::7e5b485118252bfdd1f1e031d8a5f743::visitReferrerUrl") !== '"https://www.doyogawithme.com/yoga-challenges"' && sessionStorage.getItem("survi::7e5b485118252bfdd1f1e031d8a5f743::visitReferrerUrl") !== '"https://www.doyogawithme.com/yoga-programs"') {
        let contentFind = setInterval(() => {
          if (document.querySelector(".o-page__header")) {
            clearInterval(contentFind);
            localStorage.setItem("newBannerVisib", "withBtn");
            document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
          }
        }, 100);
      }
    }

    let findSvg = setInterval(() => {
      if (document.querySelector(".lav-plan__options.lav-mob .lav-plan__option img")) {
        clearInterval(findSvg);
        if (document.querySelectorAll(".lav-plan__options.lav-mob .lav-plan__option img")[0].src !== "https://conversionratestore.github.io/projects/doyogawithme/img/delete_icon.svg") {
          document.querySelectorAll(".lav-plan__options.lav-mob .lav-plan__option img")[0].src = "https://conversionratestore.github.io/projects/doyogawithme/img/delete_icon.svg";
        }
        if (document.querySelectorAll(".lav-plan__options.lav-mob .lav-plan__option img")[1].src !== "https://conversionratestore.github.io/projects/doyogawithme/img/guarantee_icon.svg") {
          document.querySelectorAll(".lav-plan__options.lav-mob .lav-plan__option img")[1].src = "https://conversionratestore.github.io/projects/doyogawithme/img/guarantee_icon.svg";
        }
      }
    }, 100);

    let findToggleBtn = setInterval(() => {
      if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features")) {
        clearInterval(findToggleBtn);
        jQuery(".toggle_btn_features")?.click(function () {
          jQuery(".hidden_inform_box").slideToggle();
          setTimeout(() => {
            if (window.location.pathname === "/become-a-subscriber") {
              // Hypothesis #5 - Promote Subscription on Premium content pages
              if (window.innerWidth <= 768) {
                document.querySelector("#promoteSubscriptionWrap").scrollIntoView({ block: "start", behavior: "smooth" });
              } else {
                document.querySelector(".path-become-a-subscriber .new_box_subscriber").scrollIntoView({ block: "nearest", behavior: "smooth" });
              }
            } else {
              document.querySelector("#promoteSubscriptionWrap").scrollIntoView({ block: "start", behavior: "smooth" });
            }
          }, 400);
          if (!jQuery(this).hasClass("open_var")) {
            localStorage.setItem("newBanner", "expanded_info");
            pushDataLayer("exp_sub_premium_c_sapf_ci", "See all Premium features", "Banner - Compressed information", "Sub premium offer");
            jQuery(this).addClass("open_var");
            document.querySelector(".toggle_btn_features span").textContent = "Less all Premium features";
            if (window.innerWidth <= 768) {
              document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                el.classList.add("open_var");
              });
            }
          } else {
            localStorage.setItem("newBanner", "compressed_info");
            pushDataLayer("exp_sub_premium_less_unlock", "Less all Premium features", "Banner - Expanded information", "Sub premium offer");
            jQuery(this).removeClass("open_var");
            document.querySelector(".toggle_btn_features span").textContent = "See all Premium features";
            if (window.innerWidth <= 768) {
              document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                el.classList.remove("open_var");
              });
            }
          }
        });
      }
    }, 100);

    let findBtnUnlock = setInterval(() => {
      if (document.querySelector("#UnlockPremiumContentLink")) {
        clearInterval(findBtnUnlock);
        localStorage.setItem("newBanner", "compressed_info");

        document.querySelectorAll("#UnlockPremiumContentLink").forEach((el) => {
          el.addEventListener("click", () => {
            if (localStorage.getItem("newBanner") && localStorage.getItem("newBanner") === "compressed_info") {
              pushDataLayer("exp_sub_premium_c_upc_ei", "Unlock Premium Content", "Banner - Compressed information", "Sub premium offer");
            }
            if (localStorage.getItem("newBanner") && localStorage.getItem("newBanner") === "expanded_info") {
              pushDataLayer("exp_sub_premium_c_upc_ei", "Unlock Premium Content", "Banner - Expanded information", "Sub premium offer");
            }
          });
        });
      }
    }, 100);

    let findImgOnClick = setInterval(() => {
      if (document.querySelectorAll(".store_icon")) {
        clearInterval(findImgOnClick);
        document.querySelectorAll(".store_icon img.google_play_icon").forEach((el) => {
          el.addEventListener("click", (e) => {
            pushDataLayer("exp_sub_premium_c_gp_ei", "Google pay", "Banner - Expanded information", "Sub premium offer");
          });
        });
        document.querySelectorAll(".store_icon img.apple_store_icon").forEach((el) => {
          el.addEventListener("click", (e) => {
            pushDataLayer("exp_sub_premium_c_as_ei", "Apple store", "Banner - Expanded information", "Sub premium offer");
          });
        });
      }
    }, 100);

    // Hypothesis #5 - Promote Subscription on Premium content pages
    let findTriggerHypothesis = setInterval(() => {
      if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
        clearInterval(findTriggerHypothesis);
        let findBtn = setInterval(() => {
          if (document.querySelector(".sfc-nodePlayable__lockCta")) {
            clearInterval(findBtn);
            if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Get Full Access Now") {
              document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Get Full Access Now";
            }
          }
        }, 100);

        let renderTxt = setInterval(() => {
          if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline")) {
            clearInterval(renderTxt);
            if (!document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline")) {
              document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Get access to this and 1000+ other premium classes</p>`);
            }
          }
        }, 100);

        let renderIcon = setInterval(() => {
          if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-item__prefix")) {
            clearInterval(renderIcon);
            if (!document.querySelector(".new_icon_prefix")) {
              if (window.innerWidth > 768) {
                document
                  .querySelector(".sfc-nodePlayable__lockContainerInner .sfc-item__prefix")
                  .insertAdjacentHTML(
                    "afterbegin",
                    `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg>`
                  );
              }
            }
          }
        }, 100);

        document.querySelectorAll(".sfc-nodePlayable__lockContainerInner a").forEach((el) => {
          el.addEventListener("click", () => {
            pushDataLayer("exp_sub_premium_c_gfan_bga", "Get Full Access Now", "Banner - Get access", "Foto");
          });
        });
      }
    }, 100);

    visibElem3();
    visibElem5();
    visibElem7();
    visibElem10();
    //visibility elem
    function visibElem3() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let timeV = 3000;

      let intV1 = setInterval(() => {
        if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
          clearInterval(intV1);
          obsV.observe(document.querySelector(".sfc-nodePlayable__lockContainerInner"));
        }
      }, 100);

      let intV2 = setInterval(() => {
        if (document.querySelector(".info_block") && sessionStorage.getItem("exit_popup_loaded") && sessionStorage.getItem("openPopupVisib3") == null) {
          clearInterval(intV2);
          obsV.observe(document.querySelector(".info_block"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV3);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV4);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV5);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV6);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, timeV);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("sfc-nodePlayable__lockContainerInner")) {
              pushDataLayer("exp_sub_premium_v_unlock", "Visibility Unlock - 3s", "Banner - Get access", "Foto");
            }
            if (i.target.classList.contains("info_block")) {
              sessionStorage.setItem("openPopupVisib3", "3");
              pushDataLayer("exp_sub_premium_v_enjoy", "Visibility Enjoy - 3s", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ci", "Visibility Unlock - 3s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ei", "Visibility Unlock - 3s", "Banner - Expanded information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_v_spoup_ci", "Visibility Upgrade - 3s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_e_spoup_ei", "Visibility Upgrade - 3s", "Banner - Expanded information", "Sub premium offer");
            }

            obsV.unobserve(i.target);
          }
          obsV2.unobserve(i.target);
        });
      }
    }

    function visibElem5() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let timeV = 5000;

      let intV1 = setInterval(() => {
        if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
          clearInterval(intV1);
          obsV.observe(document.querySelector(".sfc-nodePlayable__lockContainerInner"));
        }
      }, 100);
      let intV2 = setInterval(() => {
        if (document.querySelector(".info_block") && sessionStorage.getItem("exit_popup_loaded") && sessionStorage.getItem("openPopupVisib5") == null) {
          clearInterval(intV2);
          obsV.observe(document.querySelector(".info_block"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV3);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV4);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV5);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV6);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, timeV);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("sfc-nodePlayable__lockContainerInner")) {
              pushDataLayer("exp_sub_premium_v_unlock", "Visibility Unlock - 5s", "Banner - Get access", "Foto");
            }
            if (i.target.classList.contains("info_block")) {
              sessionStorage.setItem("openPopupVisib5", "5");
              pushDataLayer("exp_sub_premium_v_enjoy", "Visibility Enjoy - 5s", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ci", "Visibility Unlock - 5s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ei", "Visibility Unlock - 5s", "Banner - Expanded information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_v_spoup_ci", "Visibility Upgrade - 5s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_e_spoup_ei", "Visibility Upgrade - 5s", "Banner - Expanded information", "Sub premium offer");
            }

            obsV.unobserve(i.target);
          }
          obsV2.unobserve(i.target);
        });
      }
    }

    function visibElem7() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let timeV = 7000;

      let intV1 = setInterval(() => {
        if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
          clearInterval(intV1);
          obsV.observe(document.querySelector(".sfc-nodePlayable__lockContainerInner"));
        }
      }, 100);
      let intV2 = setInterval(() => {
        if (document.querySelector(".info_block") && sessionStorage.getItem("exit_popup_loaded") && sessionStorage.getItem("openPopupVisib7") == null) {
          clearInterval(intV2);
          obsV.observe(document.querySelector(".info_block"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV3);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV4);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV5);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV6);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, timeV);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("sfc-nodePlayable__lockContainerInner")) {
              pushDataLayer("exp_sub_premium_v_unlock", "Visibility Unlock - 7s", "Banner - Get access", "Foto");
            }
            if (i.target.classList.contains("info_block")) {
              sessionStorage.setItem("openPopupVisib7", "7");
              pushDataLayer("exp_sub_premium_v_enjoy", "Visibility Enjoy - 7s", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ci", "Visibility Unlock - 7s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ei", "Visibility Unlock - 7s", "Banner - Expanded information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_v_spoup_ci", "Visibility Upgrade - 7s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_e_spoup_ei", "Visibility Upgrade - 7s", "Banner - Expanded information", "Sub premium offer");
            }
            obsV.unobserve(i.target);
          }
          obsV2.unobserve(i.target);
        });
      }
    }

    function visibElem10() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let timeV = 10000;

      let intV1 = setInterval(() => {
        if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
          clearInterval(intV1);
          obsV.observe(document.querySelector(".sfc-nodePlayable__lockContainerInner"));
        }
      }, 100);
      let intV2 = setInterval(() => {
        if (document.querySelector(".info_block") && sessionStorage.getItem("exit_popup_loaded") && sessionStorage.getItem("openPopupVisib10") == null) {
          clearInterval(intV2);
          obsV.observe(document.querySelector(".info_block"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV3);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
          clearInterval(intV4);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV5);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
          clearInterval(intV6);
          obsV.observe(document.querySelector("#promoteSubscriptionWrap .new_container .toggle_btn_features"));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, timeV);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("sfc-nodePlayable__lockContainerInner")) {
              pushDataLayer("exp_sub_premium_v_unlock", "Visibility Unlock - 10s", "Banner - Get access", "Foto");
            }
            if (i.target.classList.contains("info_block")) {
              sessionStorage.setItem("openPopupVisib10", "10");
              pushDataLayer("exp_sub_premium_v_enjoy", "Visibility Enjoy - 10s", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ci", "Visibility Unlock - 10s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withBtn") {
              pushDataLayer("exp_sub_premium_v_spoun_ei", "Visibility Unlock - 10s", "Banner - Expanded information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "compressed_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_v_spoup_ci", "Visibility Upgrade - 10s", "Banner - Compressed information", "Sub premium offer");
            }
            if (i.target.classList.contains("toggle_btn_features") && localStorage.getItem("newBanner") === "expanded_info" && localStorage.getItem("newBannerVisib") === "withoutBtn") {
              pushDataLayer("exp_sub_premium_e_spoup_ei", "Visibility Upgrade - 10s", "Banner - Expanded information", "Sub premium offer");
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
        clarity("set", "sub_premiumt", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 100);
