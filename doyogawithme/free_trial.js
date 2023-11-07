let freeTrial = setInterval(() => {
  if (document && !window.location.pathname.match("subscription") && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
    clearInterval(freeTrial);

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: "event-to-ga4",
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    // script tooltip
    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);
    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    //cdn flipclock
    let scriptCustomTimer = document.createElement("script");
    scriptCustomTimer.src = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.min.js";
    scriptCustomTimer.async = false;
    document.head.appendChild(scriptCustomTimer);
    let scriptCustomTimerStyle = document.createElement("link");
    scriptCustomTimerStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/flipclock/0.7.0/flipclock.css";
    scriptCustomTimerStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomTimerStyle);

    let freeTrialStyle = /*html */ `
      <style>
      /* Unauthorized user hero main*/
      [aria-label="Promotions"] .sfc-hero__heading.sfc-heading {
        color: #fff;
        font-size: 68px;
        font-weight: 500;
        line-height: 74px;
      }
      [aria-label="Promotions"] .sfc-hero__body.sfc-hero__body--limit > p {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
      }
      [aria-label="Promotions"] .sfc-hero__body.sfc-hero__body--limit {
        margin: 24px 0 48px;
      }
      [aria-label="Promotions"] .sfc-hero__button {
        border-radius: 30px;
        border: 2px solid #e0e0e0;
        opacity: 0.9;
        background: #fff;
        backdrop-filter: blur(2px);
        padding: 16px 40px;
      }
      [aria-label="Promotions"] .sfc-hero__button .sfc-button__text {
        color: #017922;
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
      }
      /*change Text btn Sign Up*/
      .o-region--header {
        padding: 7px 0.5em 5px 0;
      }
      .c-dropdownMenu__link:not(.c-button),
      .c-dropdownMenu__button:not(.c-button) {
        font-size: 16.5px;
      }
      .block-system-menu-block--header.block.block-menu.navigation.menu--account {
        width: unset !important;
      }
      .c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"] {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-transform: capitalize;
        padding: 7px 16px;
      }
      /**promoteSubscriptionWrap */
      .o-page__banner + #promoteSubscriptionWrap {
        padding: 25px 0 40px;
      }
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
      /*banner video blockers */
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
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header {
        margin-bottom: 24px;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline {
        color: #272727;
        font-family: "Manrope", sans-serif !important;
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
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
        margin: 0 auto;
        max-width: 407px;
      }
      .sfc-nodePlayable__lockContainerInner .sfc-item__prefix .sfc-iconRestricted {
        display: none;
      }
      /* Hypothesis #6 - Add exit-intent popup with limited-time offer*/
      body.open_var {
        overflow: hidden !important;
      }
      .overlay_popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
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
      .content_popup {
        display: flex;
        background: #fff;
        border-radius: 12px;
      }
      .content_popup > div {
        width: 50%;
      }
      .content_popup > div img {
        height: 100%;
      }
      .info_block {
        padding: 30px;
      }
      .info_block > h2 {
        color: #272727;
        font-family: "Manrope", sans-serif !important;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        margin: 0 0 10px;
        max-width: 287px;
      }
      .info_block > p {
        color: #555;
        font-family: "Manrope", sans-serif !important;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-transform: capitalize;
        margin: 0 0 16px;
      }
      .info_block > ul {
        margin: 0;
        padding: 0;
        list-style: none;
        text-align: left;
      }
      .info_block > ul li {
        position: relative;
        padding-left: 28px;
      }
      .info_block > ul li::before {
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
      .info_block > ul li + li {
        margin-top: 12px;
      }
      .info_block > ul li p {
        color: #272727;
        font-family: "Manrope", sans-serif !important;
        font-size: 14px;
        font-weight: 600;
        line-height: 24px;
      }
      .voucher_block {
        border-radius: 12px;
        border: 1px dashed #a5a5a5;
        background: #f6f6f6;
        color: #555;
        font-family: "Manrope", sans-serif !important;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        padding: 12px 30px;
        margin-top: 16px;
        text-align: center;
      }
      .voucher_block span {
        font-weight: 700;
        color: #017922;
        text-decoration-line: underline;
      }
      #subscribeSaveLink {
        max-width: unset;
        height: 50px;
        margin-top: 24px;
        color: #fff;
        font-family: "Manrope", sans-serif !important;
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        text-transform: capitalize;
      }
      .discount_expires_wrap {
        display: flex;
        border-radius: 4px;
        border: 1px solid #e0e0e0;
        background: #f6f6f6;
        padding: 4px 4px 4px 12px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .discount_expires_wrap > p {
        margin: 0;
        color: #272727;
        font-family: "Manrope", sans-serif !important;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding-left: 32px;
        position: relative;
      }
      .discount_expires_wrap > p::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background: url(https://conversionratestore.github.io/projects/doyogawithme/img/tag.svg) no-repeat center center;
        top: 0;
        left: 0;
        background-size: contain;
      }
      .flip-clock-wrapper {
        margin: 0;
        display: flex;
        align-items: center;
      }
      .flip-clock-divider .flip-clock-label,
      .flip-clock-divider:first-child {
        display: none;
      }
      .flip-clock-dot {
        background: #121620;
        width: 3px;
        height: 3px;
        box-shadow: none;
        left: 0;
      }
      .flip-clock-dot.bottom {
        bottom: 0;
      }
      .flip-clock-dot.top {
        top: 0;
      }
      .flip-clock-divider {
        height: 13px;
        width: 3px;
        margin: 0 2px;
      }
      .flip-clock-wrapper ul {
        color: #272727;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        min-width: unset;
        padding: 0;
        margin: 0 2px;
        width: 24px;
        height: 36px;
        background: #fff;
        box-shadow: unset;
        border: 1px solid #e0e0e0;
      }
      .flip-clock-wrapper .flip {
        box-shadow: unset;
      }
      .flip-clock-wrapper ul li a div div.inn {
        font-size: 16px;
        background-color: #fff;
        color: #272727;
        text-shadow: unset;
      }
      .flip-clock-wrapper ul li a div {
        font-size: 16px;
      }
      .flip-clock-wrapper a {
        color: #272727;
      }
      .flip-clock-wrapper ul li {
        line-height: 22px;
        top: 0;
      }
      .flip-clock-wrapper ul li a div.up div.inn {
        top: 8px;
      }
      .flip-clock-wrapper ul li a div div.inn,
      .flip-clock-wrapper ul li a div {
        height: 75%;
      }
      .flip-clock-wrapper ul li a div div.inn,
      .flip-clock-wrapper ul li a div {
        height: 90%;
      }
      .flip-clock-wrapper ul.play li.flip-clock-before,
      .flip-clock-wrapper ul li a div.down,
      .flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {
        display: none;
      }
      /**recommend_us_block */
      .recommend_us_block {
        background: #f6f6f6;
        padding: 10px 30px;
        margin-top: 16px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .recommend_us_block > p {
        margin: 0;
        color: #555;
        font-family: "Manrope";
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        display: inline-block;
      }
      .recommend_us_block > p span {
        color: #027db8;
      }
      .recommend_us_block .tippy-tooltip {
        color: #555;
        border-radius: 12px;
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
        background-color: #fff;
        max-width: 414px !important;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
        top: -4px !important;
      }
      .recommend_us_block .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
        border-bottom-color: #fff;
        left: unset !important;
        right: 29px !important;
      }
      .recommend_us_block .tippy-content {
        padding: 8px;
      }
      @media only screen and (max-width: 1200px) {
        .recommend_us_block > p {
          font-size: 13px;
        }
        .recommend_us_block .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
          right: 39px !important;
        }
      }
      @media (max-width: 768px) {
        /* Unauthorized user hero main*/
        [aria-label="Promotions"] .sfc-hero__heading.sfc-heading {
          font-size: 36px;
        }
        [aria-label="Promotions"] .sfc-hero__button {
          margin-bottom: 31px;
        }
        /*change Text btn Sign Up*/
        .o-region--header {
          padding: 6px 0.5em 6px 0;
        }
        .c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"] {
          font-size: 14px;
          padding: 5px 10px;
        }
        /**promoteSubscriptionWrap */
        .o-page__banner + #promoteSubscriptionWrap {
          padding: 5px 0;
        }
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
          gap: 12px;
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
          margin: 0 0 12px;
          max-width: 278px;
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
          max-width: 253px;
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
        /*banner video blockers */
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline {
          font-size: 18px;
          line-height: 26px;
          margin-bottom: 6px;
          flex-direction: unset;
          gap: 8px;
          justify-content: center;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline svg {
          width: 16px;
          height: 26px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline {
          font-size: 14px;
          line-height: 22px;
          max-width: 275px;
        }
        .sfc-nodePlayable__lockContainerInner .sfc-copy__header {
          margin-bottom: 12px;
        }
        .sfc-nodePlayable__lockContainerInner {
          max-width: 316px;
          min-height: unset;
          padding: 20px 0;
        }
        /** overlay_popup*/
        .overlay_popup .container_popup {
          max-width: 339px;
        }
        .content_popup > div {
          width: 100%;
        }
        .content_popup > div.img_wrap {
          display: none;
        }
        .info_block {
          padding: 24px 13px;
        }
        .discount_expires_wrap {
          margin-bottom: 16px;
        }
        .info_block > h2 {
          font-size: 22px;
          line-height: 30px;
          margin: 0 0 12px;
        }
        .info_block > p br {
          display: none;
        }
        .info_block > ul li + li {
          margin-top: 16px;
        }
        .voucher_block {
          padding: 12px;
          font-size: 13px;
        }
        #subscribeSaveLink {
          height: 48px;
        }
        .overlay_popup .container_popup > .btn_close svg path {
          stroke: #272727;
        }
        /**recommend_us_block */
        .recommend_us_block {
          display: none;
        }
      }
      @media (max-width: 320px) {
        .overlay_popup .container_popup {
          max-width: 304px;
        }
        .info_block {
          padding: 20px 10px;
        }
        .info_block > ul li p {
          font-size: 12px;
        }
        .info_block > ul li + li {
          margin-top: 4px;
        }
        .info_block > p {
          font-size: 12px;
          margin: 0 0 10px;
        }
        #subscribeSaveLink {
          margin-top: 10px;
          height: 46px;
        }
        .voucher_block {
          padding: 12px 10px;
          font-size: 12px;
        }
        .discount_expires_wrap > p {
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
          <h2>Get <span class="accent_color">Free Unlimited Access</span> for 7 days</h2>
          <a href="https://www.doyogawithme.com/become-a-subscriber" id="UnlockPremiumContentLink"><span>Start Free Trial</span></a>
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
        <div class="content_popup discount_popup">
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
                  Use code <span data-clipboard-text="YOGA_45">YOGA_45</span> at checkout to claim your discount. But hurry, this offer won't last long!
                </div>
                <a id="subscribeSaveLink" href="https://www.doyogawithme.com//become-a-subscriber">Subscribe and Save 45% Now!</a>

            </div>
            <div class="img_wrap">
                <img class="desk_var" src="https://conversionratestore.github.io/projects/doyogawithme/img/popup_img.png" alt="woman">
            </div>
        </div>
    `;

    document.head.insertAdjacentHTML("beforeend", freeTrialStyle);

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
                      // pushDataLayer("exp_sub_premium_enjoy_close", "Close", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");

                      countdown.stop();
                      timerEventDesk(document.querySelector(".info_block"), "stop");
                      onClosePopup();
                    });
                    overlay.addEventListener("click", (e) => {
                      // click on overlay popup
                      if (e.target.matches(".overlay_popup")) {
                        // pushDataLayer("exp_sub_premium_enjoy_close", "Close", "Banner - Enjoy DoYogaWithMe", "Enjoy DoYogaWithMe");
                        countdown.stop();
                        timerEventDesk(document.querySelector(".info_block"), "stop");
                        onClosePopup();
                      }
                    });
                    document.querySelector("#subscribeSaveLink")?.addEventListener("click", () => {
                      pushDataLayer(["exp_trial_popupenjoy_but_start", "Start Free Trial And Save ", "Button", "Pop up did you now Enjoy DoYogaWithMe?"]);
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
        }
      }
    }
    //to redirect from https://www.doyogawithme.com/become-a-subscriber to https://www.doyogawithme.com/checkout/________?__/order_information after exit intent popup
    let becomeSubscriber = setInterval(() => {
      if (sessionStorage.getItem("becomeSubscriber") && window.location.pathname === "/become-a-subscriber" && !sessionStorage.getItem("checkoutPremium")) {
        clearInterval(becomeSubscriber);
        sessionStorage.removeItem("becomeSubscriber");
        sessionStorage.setItem("checkoutPremium", "true");
        document.querySelector('[href="/express-checkout/139"]').click();
      }
    }, 100);
    //to apply the discount code automatically on the checkout after exit intent popup
    let checkoutPremium = setInterval(() => {
      if (window.location.pathname.includes("checkout") && sessionStorage.getItem("checkoutPremium") && document.querySelector("#edit-sidebar-order-summary-summary .views-field.views-field-title")?.textContent.includes("12-month")) {
        clearInterval(checkoutPremium);
        // sessionStorage.removeItem("checkoutPremium");
        if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")?.value === "") {
          document.querySelector("#edit-sidebar-coupon-redemption-form-code").value = "YOGA_45";
        }

        if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")?.value === "YOGA_45") {
          const element = document.querySelector("#edit-sidebar-coupon-redemption-form-apply");
          const events = ["mousedown", "focusin"];
          events.forEach((eventType) => element.dispatchEvent(new MouseEvent(eventType, { bubbles: true })));
          // setTimeout(() => {
          //   window.location.reload();
          // }, 100);
        }
      }
    }, 100);

    // btn Sign Up ->>> textContent
    changeTextBtn();
    // unlockClassBanner
    unlockClassBanner();
    // if user is free
    if (document.querySelector('[data-drupal-selector="drupal-settings-json"]') && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false && window.location.pathname !== "/become-a-subscriber") {
      isNotSubscriber();
    }

    onClickBtn();
    //
    if (window.innerWidth > 768) {
      tooltipOnCheckout();
    }

    //   isNotSubscriber
    function isNotSubscriber() {
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
      if (window.innerWidth > 768) {
        if (window.location.pathname.match("/content/") || window.location.pathname.match("/programs/")) {
          let contentFind = setInterval(() => {
            if (document.querySelector(".o-page__header")) {
              clearInterval(contentFind);
              localStorage.setItem("newBannerVisib", "withBtn");
              document.querySelector(".o-page__header")?.insertAdjacentHTML("afterend", newBoxFeatures);
            }
          }, 100);
        }
      }

      let findToggleBtn = setInterval(() => {
        if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features") && window.location.pathname !== "/become-a-subscriber") {
          clearInterval(findToggleBtn);
          jQuery(".toggle_btn_features")?.click(function () {
            if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
              pushDataLayer(["exp_trial_payment_link_seepage", "See all Premium features - not registered", "Link", "Payment page"]);
            } else {
              pushDataLayer(["exp_trial_payment_link_seepage", "See all Premium features - registered", "Link", "Payment page"]);
            }
            jQuery(".hidden_inform_box").slideToggle();
            setTimeout(() => {
              document.querySelector("#promoteSubscriptionWrap").scrollIntoView({ block: "start", behavior: "smooth" });
            }, 400);
            if (!jQuery(this).hasClass("open_var")) {
              localStorage.setItem("newBanner", "expanded_info");
              jQuery(this).addClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "Less all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.add("open_var");
                });
              }
            } else {
              localStorage.setItem("newBanner", "compressed_info");
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
        if (document.querySelector("#UnlockPremiumContentLink") && window.location.pathname !== "/become-a-subscriber") {
          clearInterval(findBtnUnlock);
          localStorage.setItem("newBanner", "compressed_info");

          document.querySelectorAll("#UnlockPremiumContentLink").forEach((el) => {
            el.addEventListener("click", () => {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                if (window.innerWidth <= 768) {
                  pushDataLayer(["exp_trial_premban_but_starpag", `Start Free Trial - ${window.location.href} - mobile - not registered`, "Button", "Universal premium banner"]);
                } else {
                  pushDataLayer(["exp_trial_premban_but_starpag", `Start Free Trial - ${window.location.href} - desktop - not registered`, "Button", "Universal premium banner"]);
                }
              } else {
                if (window.innerWidth <= 768) {
                  pushDataLayer(["exp_trial_premban_but_starpag", `Start Free Trial - ${window.location.href} - mobile - registered`, "Button", "Universal premium banner"]);
                } else {
                  pushDataLayer(["exp_trial_premban_but_starpag", `Start Free Trial - ${window.location.href} - desktop - registered`, "Button", "Universal premium banner"]);
                }
              }
            });
          });
        }
      }, 100);
    }

    //   Create Free Account || Start Free Trial
    function changeTextBtn() {
      if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
        let btnSignUpFind = setInterval(() => {
          if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
            clearInterval(btnSignUpFind);
            if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent !== "Create Free Account") {
              document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent = "Create Free Account";
            }
          }
        }, 100);
      }
      if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
        let btnSignUpFind = setInterval(() => {
          if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
            clearInterval(btnSignUpFind);
            if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent !== "Start Free Trial") {
              document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').textContent = "Start Free Trial";
            }
          }
        }, 100);
      }
      if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button')) {
        let btnSignUpFind = setInterval(() => {
          if (document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button')) {
            clearInterval(btnSignUpFind);
            document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button .sfc-button__text').forEach((el) => {
              if (el.textContent !== "Create Free Account" && el.closest('a[href="/become-a-subscriber"]')) {
                el.textContent = "Create Free Account";
              }
            });
          }
        }, 100);
      }
    }

    function unlockClassBanner() {
      let findTriggerHypothesis = setInterval(() => {
        if (document.querySelector(".sfc-nodePlayable__lockContainerInner")) {
          clearInterval(findTriggerHypothesis);

          let findBtn = setInterval(() => {
            if (document.querySelector(".sfc-nodePlayable__lockCta")) {
              clearInterval(findBtn);
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free class") || document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free meditation")) {
                  if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Create Free Account") {
                    document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Create Free Account";
                  }
                } else {
                  if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Start Free Trial") {
                    document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Start Free Trial";
                  }
                }
              } else {
                if (document.querySelector(".sfc-nodePlayable__lockCta").textContent !== "Start Free Trial") {
                  document.querySelector(".sfc-nodePlayable__lockCta").textContent = "Start Free Trial";
                }
              }
            }
          }, 100);

          let changeTitle = setInterval(() => {
            if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline")) {
              clearInterval(changeTitle);
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free class")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Free class</span>`;
                } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free meditation")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Free meditation</span>`;
                } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this premium meditation")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium meditation</span>`;
                } else {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium class</span>`;
                }
              } else {
                if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this premium meditation")) {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium meditation</span>`;
                } else {
                  document.querySelector(
                    ".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline"
                  ).innerHTML = `<svg class="new_icon_prefix" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.3198 17.2981H12.418V12.4297C12.418 10.3806 13.2537 8.51648 14.6056 7.16844C15.9576 5.81648 17.8179 4.97687 19.8669 4.97687C21.916 4.97687 23.7801 5.81656 25.1282 7.16844C26.4801 8.51648 27.3198 10.3807 27.3198 12.4297V17.2981ZM33.671 18.3227C33.2781 17.9337 32.7967 17.6332 32.2575 17.4637V12.4297C32.2575 9.02102 30.8632 5.92047 28.6177 3.675C26.3723 1.42953 23.2755 0.0390625 19.8669 0.0390625C16.4583 0.0390625 13.3616 1.42953 11.1161 3.675C8.87061 5.92047 7.47632 9.02102 7.47632 12.4297V17.4484C6.92171 17.6178 6.42483 17.922 6.02429 18.3227C5.39265 18.9582 4.99976 19.8287 4.99976 20.7915V36.4675C4.99976 37.4304 5.39265 38.3009 6.02429 38.9363C6.65976 39.568 7.5303 39.9609 8.49312 39.9609H31.2022C32.1651 39.9609 33.0355 39.568 33.671 38.9363C34.3026 38.3009 34.6955 37.4304 34.6955 36.4675V20.7915C34.6956 19.8286 34.3027 18.9582 33.671 18.3227ZM17.4288 24.8357C18.0489 24.2195 18.904 23.8343 19.8476 23.8343C20.7913 23.8343 21.6463 24.2195 22.2665 24.8357C22.8866 25.4559 23.2679 26.3109 23.2679 27.2545C23.2679 27.9902 23.0368 28.668 22.6439 29.2266C22.3165 29.6888 21.8774 30.0662 21.3651 30.3205V31.9073C21.3651 32.3233 21.1957 32.7046 20.9183 32.978C20.6448 33.2515 20.2674 33.4248 19.8476 33.4248C19.4316 33.4248 19.0503 33.2515 18.7768 32.978C18.5034 32.7046 18.33 32.3233 18.33 31.9073V30.3205C17.8216 30.0662 17.3825 29.6888 17.0551 29.2266C16.6584 28.6681 16.4273 27.9902 16.4273 27.2545C16.4274 26.3109 16.8126 25.4558 17.4288 24.8357Z" fill="#027DB8"/></svg><span>Unlock this Premium class</span>`;
                }
              }
            }
          }, 100);

          let renderTxt = setInterval(() => {
            if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline")) {
              clearInterval(renderTxt);
              if (!document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .txt_headline")) {
                if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                  if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free class") || document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Free class")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Create an account to get access to this and 500+ other Free classes</p>`);
                  } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Access this free meditation") || document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Free meditation")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Create an account to get access to this and 500+ other Free meditations</p>`);
                  } else if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Premium meditation")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 1000+ other meditations</p>`);
                  } else {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 1000+ other classes</p>`);
                  }
                } else {
                  if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Unlock this Premium meditation")) {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 500+ other Premium meditations</p>`);
                  } else {
                    document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").insertAdjacentHTML("afterend", `<p class="txt_headline">Start your 7-day Free Trial and get access to this and 500+ other Premium classes</p>`);
                  }
                }
              }
            }
          }, 100);

          document.querySelectorAll(".sfc-nodePlayable__lockContainerInner a").forEach((el) => {
            el.addEventListener("click", () => {});
          });
        }
      }, 100);
    }

    function tooltipOnCheckout() {
      let f = setInterval(() => {
        if (document.querySelector(".infos_dashed") && !document.querySelector(".recommend_us_block") && window.location.pathname.includes("checkout")) {
          clearInterval(f);

          document.querySelector(".infos_dashed").insertAdjacentHTML(
            "beforebegin",
            `<div data-tolltipMob data-titlemob='*According to subscribers NPS survey, conducted March 17-20, N=807' class="recommend_us_block"><p><span>95%*</span> of our subscribers would recommend us to a friend</p> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 0C10.8555 0 14 3.14453 14 7C14 10.8828 10.8555 14 7 14C3.11719 14 0 10.8828 0 7C0 3.14453 3.11719 0 7 0ZM7 3.5C6.50781 3.5 6.125 3.91016 6.125 4.375C6.125 4.86719 6.50781 5.25 7 5.25C7.46484 5.25 7.875 4.86719 7.875 4.375C7.875 3.91016 7.46484 3.5 7 3.5ZM8.09375 10.5C8.44922 10.5 8.75 10.2266 8.75 9.84375C8.75 9.48828 8.44922 9.1875 8.09375 9.1875H7.65625V6.78125C7.65625 6.42578 7.35547 6.125 7 6.125H6.125C5.74219 6.125 5.46875 6.42578 5.46875 6.78125C5.46875 7.16406 5.74219 7.4375 6.125 7.4375H6.34375V9.1875H5.90625C5.52344 9.1875 5.25 9.48828 5.25 9.84375C5.25 10.2266 5.52344 10.5 5.90625 10.5H8.09375Z" fill="#027DB8"/>
  </svg></div>`
          );

          let tippyTxt = setInterval(() => {
            if (typeof tippy === "function" && document.querySelector("[data-titlemob]")) {
              clearInterval(tippyTxt);
              document.querySelectorAll("[data-titlemob]").forEach((el) => {
                tippy(el, {
                  content: el.getAttribute("data-titlemob"),
                  // trigger: "click",
                  placement: "bottom-end",
                  appendTo: function () {
                    return el.closest(".recommend_us_block");
                  },
                  onTrigger(inst, e) {
                    e.stopPropagation();
                    e.preventDefault();
                  },
                  onShown(e) {},
                });
              });
            }
          }, 500);
        }
      }, 100);
    }

    function onClickBtn() {
      if (document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]')) {
        document.querySelector('.c-dropdownMenu__item a[data-drupal-link-system-path="become-a-subscriber"]').addEventListener("click", () => {
          if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
            pushDataLayer(["exp_trial_header_but_create", "Create Free Account", "Button", "First Header"]);
          } else {
            pushDataLayer(["exp_trial_header_but_start", "Start Free Trial", "Button", "First Header"]);
          }
        });
      }

      if (document.querySelector('[aria-label="Promotions"] .sfc-hero__button')) {
        document.querySelectorAll('[aria-label="Promotions"] .sfc-hero__button').forEach((el) => {
          el.addEventListener("click", () => {
            if (el.closest('a[href="/become-a-subscriber"]')) {
              pushDataLayer(["exp_trial_page_but_create", "Create Free Account", "Button", "First Page"]);
            }
          });
        });
      }

      if (document.querySelector(".sfc-nodePlayable__lockCta")) {
        document.querySelectorAll(".sfc-nodePlayable__lockCta").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Premium")) {
              pushDataLayer(["exp_trial_video_but_startpag", `Start Free Trial - ${e.currentTarget.closest("article").querySelector(".sfc-contentHeader__heading").innerText}`, "Button", "Video content"]);
            }
            if (document.querySelector(".sfc-nodePlayable__lockContainerInner .sfc-copy__header .sfc-item__headline").textContent.includes("Free")) {
              pushDataLayer(["exp_trial_video_but_createpag", `Create Free Account - ${e.currentTarget.closest("article").querySelector(".sfc-contentHeader__heading").innerText}`, "Button", "Video content"]);
            }
          });
        });
      }
      //
    }

    visibElem();
    function visibElem() {
      waitForElement(".discount_popup").then((el) => {
        handleVisibility(el, ["exp_trial_popupenjoy_vis_focus", "{{focusTime}}", "Visibility", "Pop up did you now Enjoy DoYogaWithMe?"]);
      });
    }

    function handleVisibility(el, eventParams) {
      let isVisible = false;
      let entryTime;
      const config = {
        root: null,
        threshold: 0, // Trigger when any part of the element is out of viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              // The element has become visible
              isVisible = true;
              entryTime = new Date().getTime();
            }
          } else if (isVisible) {
            // The element is out of the viewport, calculate visibility duration
            isVisible = false;
            const exitTime = new Date().getTime();
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
            const roundedDuration = Math.round(visibilityDuration);

            if (roundedDuration) {
              const eventData = eventParams;
              eventData[1] = roundedDuration;
              pushDataLayer(eventData);
              observer.disconnect();
            }
          }
        });
      }, config);

      observer.observe(el);
    }

    function waitForElement(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_trial", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 100);

let cancelTrial = setInterval(() => {
  if (window.location.pathname.match("subscription") && !document.querySelector(".reactivate") && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === true) {
    clearInterval(cancelTrial);

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: "event-to-ga4",
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    //swipe
    let script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    script.async = false;
    document.head.appendChild(script);
    let scriptCustom = document.createElement("script");
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.19/jquery.touchSwipe.min.js";
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    let cancelTrialStyle = /*html */ `
      <style>
        #block-tabs + #block-lotus-content.your_trial_lotus{
          display: none;
        }
        .o-page--user .o-page__mainContent{
          margin-left: auto;
          margin-right:  auto;
        }
        /*your_trial_new_block */
        .your_trial_new_block{
          margin: 10px 0 165px;
        }
        .your_trial_new_title{
          color: #000;
          font-family: 'Source Serif Pro';
          font-size: 36px;
          font-weight: 700;
          line-height: normal;
          margin: 0 0 12px;
        }
        .your_trial_new_txt{
          color: #272727;
          font-family: 'Manrope';
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          margin: 0 0 18px;
          max-width: 540px;
        }
        .your_trial_new_descr > p{
          margin: 0;
          color: #272727;
          font-family: 'Manrope';
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          max-width: unset;
        }
        .your_trial_new_descr > p + p{
          margin-top: 10px;
        }
/*cancel_trial_btn */
.cancel_trial_btn {
  display: block;
  font-family: "Manrope", sans-serif !important;
  color: #027db8;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
  margin: 18px 0 0;
}
/*popup */
.overlay_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
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
  width: 100%;
  max-width: 440px;
  margin: auto;
  transition: all 0.5s ease 0s;
  border-radius: 12px;
  background: #fff;
  height: max-content;
}
.overlay_popup .container_popup > .btn_close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.content_popup {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
}
.content_popup .popup_title {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0 0 12px;
}
.content_popup .popup_subtitle {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 12px;
  max-width: 330px;
}
.content_popup .popup_descr {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 12px;
  max-width: 355px;
}
.content_popup .popup_descr a {
  color: inherit;
  text-decoration: underline;
}
.popup_list_txt {
  margin: 0;
  padding: 0;
  list-style: none;
}
.popup_list_txt li + li {
  margin-top: 12px;
}
.popup_list_txt li {
  position: relative;
  padding-left: 28px;
}
.popup_list_txt li::before {
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
.popup_list_txt li p {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
}
.content_popup .btn_wrapp {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}
.content_popup .popup_cancel_trial_btn,
.skip_btn {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  border-radius: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 116px;
  width: 100%;
  margin: 0;
  cursor: pointer;
}
.content_popup .keep_my_trial_btn,
.close_btn,
#helpUsBecomeBetter .submit_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: #017922;
  max-width: 240px;
  width: 100%;
  height: 50px;
  color: #fff;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
  cursor: pointer;
  outline: unset;
  border: none;
}
#yourTrialWasCancelled .popup_subtitle {
  max-width: unset;
  margin-bottom: 24px;
}
#yourTrialWasCancelled .close_btn {
  max-width: unset;
  display: none !important;
}
.overlay_popup.last_step .btn_close{
  display: none !important;
}
#helpUsBecomeBetter .popup_subtitle {
  max-width: unset;
  margin: 0 0 16px;
}
#helpUsBecomeBetter ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
#helpUsBecomeBetter ol > li + li {
  margin-top: 16px;
}
#helpUsBecomeBetter .form_title {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 5px 4px;
  display: block;
}
#helpUsBecomeBetter .form_descr {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
#helpUsBecomeBetter .grade_list {
  display: flex;
  gap: 4px;
  margin-top: 12px;
}
#helpUsBecomeBetter label {
  margin: 0;
}
#helpUsBecomeBetter input.custom_radio_btn {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
#helpUsBecomeBetter .choose_option_txt {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
  background: #fff;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .choose_option_txt {
  background: #017922;
  color: #fff;
  border: 2px solid #017922;
}
#helpUsBecomeBetter .submit_btn:disabled {
  border-radius: 30px;
  background: #a5a5a5;
  border: none;
  color: #fff;
  cursor: initial;
}
.questions_list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 12px;
}
.questions_label {
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  background: #fff;
  padding: 12px;
}
.choose_option_box {
  position: absolute;
  display: inline-block;
  flex-shrink: 0;
  flex-grow: 0;
  width: 20px;
  left: 12px;
  height: 20px;
  border-radius: 4px;
  border: 2px solid #e0e0e0;
}
.choose_option_txt_quest {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-left: 32px;
}
#helpUsBecomeBetter .descr_text_input {
  display: none;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 12px 0 8px;
}
#helpUsBecomeBetter textarea.text_textarea {
  width: 100%;
  max-height: 94px;
  min-height: 94px;
  height: 100%;
  display: none;
  resize: none;
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 12px;
  border-width: inherit;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
}
#helpUsBecomeBetter textarea.text_textarea:focus {
  outline: none;
  outline-offset: unset;
  border: 2px solid #027db8;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label {
  background: #f2fbff;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_box {
  border: 2px solid #027db8;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_box::after {
  content: "";
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background: #027db8;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .choose_option_txt_quest {
  color: #272727;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label textarea.text_textarea {
  display: block;
}
#helpUsBecomeBetter input.custom_radio_btn:checked + .questions_label .descr_text_input {
  display: block;
}
html.open_var {
  overflow: hidden !important;
}
.content_popup .is_hidden,
.border_bottom_span,
.content_popup .btn_wrapp.mob_fixed {
  display: none;
}
@media (max-width: 768px) {
  /*your_trial_new_block */
  .your_trial_new_block {
    margin: 10px 20px 165px;
}
  .overlay_popup .container_popup {
    max-width: 350px;
    margin: auto auto 0;
    border-radius: 12px 12px 0 0;
  }
  .content_popup{
    padding: 32px 16px 16px;
        border-radius: 12px 12px 0 0;
        position: relative;
  }
  .overlay_popup .container_popup.mob_var {
    margin: auto auto 89px;
  }
  .overlay_popup.is_hidden .container_popup {
    transform: translateY(100%);
    transition: all 0.8s ease 0s;
  }
  .border_bottom_span {
    border-radius: 10px;
    background: var(--Green-main, #017922);
    position: absolute;
    left: 50%;
    width: 80px;
    height: 4px;
    top: 12px;
    z-index: 3;
    transform: translateX(-50%);
    display: block;
  }
  .overlay_popup .container_popup > .btn_close {
    display: none;
  }
  .content_popup .popup_title{
    font-size: 22px;
    line-height: 30px;
  }
  .content_popup .popup_descr{
    margin: 0 0 16px;
  }
  .popup_list_txt li + li {
    margin-top: 16px;
}
.content_popup .keep_my_trial_btn, .close_btn, #helpUsBecomeBetter .submit_btn{
      max-width: 179px;
}
#helpUsBecomeBetter .choose_option_txt{
  width: 23px;
    height: 23px;
}
#helpUsBecomeBetter ol > li + li {
    margin-top: 12px;
}
.questions_label{
  padding: 10px 12px;
}
#helpUsBecomeBetter form{
  position: inherit;
}
.help_us_become_better_form .btn_wrapp{
display: none;
}
.content_popup .btn_wrapp.mob_fixed{
  display: flex;
  background: #FFF;
box-shadow: 0px -2px 8px 0px rgba(0, 0, 0, 0.10);
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0 -16px -16px;
    padding: 12px 16px;
}
.help_us_become_better_wrapp{
    overflow-y: scroll;
    max-height: 611px;
    padding-bottom: 70px;
}
}
@media (max-width: 376px) {
  .help_us_become_better_wrapp{
    max-height: 526px;
  }
}

      </style>
    `;

    let popUp = /*html */ `
        <div class="overlay_popup is_hidden first_step">
          <div class="container_popup">
            <span class="border_bottom_span"></span>
            <div class="btn_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 20L4 4M20 4L4 20" stroke="#272727" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
          </div>
        </div>
    `;

    let contentPopupHtml = /*html */ `
     <div class="content_popup" id="test">
    <div id="confirmTrialCancellation" class="parent_wrapp">
      <h2 class="popup_title">Confirm Trial Cancellation</h2>
      <h3 class="popup_subtitle">Are you sure you want to cancel your trial access to DoYogaWithMe?</h3>
      <p class="popup_descr">We'd love to know if there's anything we can improve or assist you with. If you're facing any issues or have feedback, please reach out to our support team at <a href="mailto:info@doyogawithme.com">info@doyogawithme.com.</a></p>
      <ul class="popup_list_txt">
        <li>
          <p>Your trial will end on <span class="after_trial_txt_popup">October 5th, 2023</span>.</p>
        </li>
        <li><p>Access to our premium content will be suspended.</p></li>
        <li><p>You won't be charged for the trial cancellation.</p></li>
      </ul>
      <div class="btn_wrapp">
        <p class="popup_cancel_trial_btn">Cancel Trial</p>
        <p class="keep_my_trial_btn">Keep My Trial</p>
      </div>
    </div>
    <div id="helpUsBecomeBetter" class="is_hidden parent_wrapp">
      <div class="help_us_become_better_wrapp">
        <h2 class="popup_title">Help Us Become Better</h2>
        <h3 class="popup_subtitle">Please answer a couple of questions to help us understand how we should improve our product</h3>
        <form action="#" class="help_us_become_better_form">
          <ol>
            <li>
              <span class="form_title">1. Overall Satisfaction:</span>
              <p class="form_descr">On a scale of 1 to 10, how satisfied were you with DoYogaWithMe during the trial?</p>
              <div class="grade_list">
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="1" />
                  <span class="choose_option_txt">1</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="2" />
                  <span class="choose_option_txt">2</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="3" />
                  <span class="choose_option_txt">3</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="4" />
                  <span class="choose_option_txt">4</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="5" />
                  <span class="choose_option_txt">5</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="6" />
                  <span class="choose_option_txt">6</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="7" />
                  <span class="choose_option_txt">7</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="8" />
                  <span class="choose_option_txt">8</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="9" />
                  <span class="choose_option_txt">9</span>
                </label>
                <label class="grade_label">
                  <input class="custom_radio_btn" type="radio" name="grade" value="10" />
                  <span class="choose_option_txt">10</span>
                </label>
              </div>
            </li>
            <li>
              <span class="form_title">2. Reason for Cancellation:</span>
              <p class="form_descr">Please select the primary reason for cancelling your trial:</p>
              <div class="questions_list">
                <input id="questions1" class="custom_radio_btn" type="radio" name="questions" value="contentQuality" />
                <label for="questions1" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Content Quality</span>
                  <p class="descr_text_input">Please provide more details about what aspects of the content you found lacking or unsatisfactory.</p>
                   <textarea name="" id="questions1" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions2" class="custom_radio_btn" type="radio" name="questions" value="pricing" />
                <label  for="questions2" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Pricing</span>
                  <p class="descr_text_input">What pricing model or plan would have been more suitable for you?</p>
                   <textarea name="" id="questions2" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions3" class="custom_radio_btn" type="radio" name="questions" value="personalReasons" />
                <label  for="questions3" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Lack of Time / Personal reasons</span>
                  <p class="descr_text_input">Is there anything we could have done to make it more convenient for you to continue using our product?</p>
                  <textarea name="" id="questions3" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions4" class="custom_radio_btn" type="radio" name="questions" value="technicalIssues" />
                <label  for="questions4" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Technical Issues</span>
                  <p class="descr_text_input">If you experienced technical issues, please describe the problems you encountered and any suggestions for improvement.</p>
                   <textarea name="" id="questions4" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions5" class="custom_radio_btn" type="radio" name="questions" value="foundABetterAlternative" />
                <label  for="questions5" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Found a Better Alternative</span>
                  <p class="descr_text_input">If you found a better alternative, could you share the name or details of the alternative, and what features or benefits it offered that attracted you?</p>
                  <textarea name="" id="questions5" class="text_textarea"></textarea>
                </label>
  
                <input  id="questions6" class="custom_radio_btn" type="radio" name="questions" value="other" />
                <label  for="questions6" class="questions_label">
                  <span class="choose_option_box"></span>
                  <span class="choose_option_txt_quest">Other (please specify)</span>
                  <p class="descr_text_input">Please provide any comments or suggestions you have for us to enhance our product and service.</p>
                  <textarea name="" id="questions6" class="text_textarea"></textarea>
                </label>
              </div>
            </li>
          </ol>
          <div class="btn_wrapp">
            <p class="skip_btn">Skip</p>
            <button disabled class="submit_btn">Submit</button>
          </div>
        </form>
      </div>
      <div class="btn_wrapp mob_fixed">
            <p class="skip_btn">Skip</p>
            <button disabled class="submit_btn">Submit</button>
      </div>
    </div>
    <div id="yourTrialWasCancelled" class="is_hidden parent_wrapp">
      <h2 class="popup_title">Your Trial Was Cancelled</h2>
      <h3 class="popup_subtitle">Your Trial was successfully cancelled. You will still have full access till <span class="after_trial_txt_popup">October 5th, 2023</span>.</h3>
      <p class="close_btn">Close</p>
    </div>
     </div>
    `;

    document.head.insertAdjacentHTML("beforeend", cancelTrialStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    if (!document.querySelector(".your_trial_new_block") && document.querySelectorAll(".in_trial.active li")[0]?.textContent.match("Currently in trial")) {
      document.querySelector("#block-lotus-content").classList.add("your_trial_lotus");
      document.querySelector("#block-lotus-content").insertAdjacentHTML(
        "afterend",
        `<div class="your_trial_new_block">
          <h2 class="your_trial_new_title">Your Trial</h2>
          <p class="your_trial_new_txt">Your Trial gives you free 7-day access to our catalog of over 1000 yoga classes and challenges.</p>
          <div class="your_trial_new_descr">
            <p><b>Trial end date:</b> <span class="end_date_txt">October 5th, 2023</span></p>
            <p><b>Subscription after trial:</b> <span class="after_trial_txt">Yearly Subscription at $108.99 USD per year</span></p>
          </div>
          <span class="cancel_trial_btn">Cancel trial</span>
        </div>`
      );
    }

    if (document.querySelector(".your_trial_new_block")) {
      document.querySelector(".your_trial_new_block .end_date_txt").textContent = document.querySelectorAll(".in_trial.active li")[3].textContent.split("Invoice: ")[1];
      if (JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.currentSubscription.subscriptionTypeKey === "Monthly Subscription") {
        document.querySelector(".your_trial_new_block .after_trial_txt").textContent = "Monthly Subscription at $13.99 USD per month";
      } else {
        document.querySelector(".your_trial_new_block .after_trial_txt").textContent = "Yearly Subscription at $108.99 USD per year";
      }

      if (document.querySelector(".cancel_trial_btn")) {
        document.querySelector(".cancel_trial_btn").addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-test")) {
            pushDataLayer(["exp_trial_account_but_cencel", "Cancel trial", "Button", "Account page"]);
            document.querySelector(".cancel a")?.click();
          }
          e.target.setAttribute("data-test", "1");
          setTimeout(() => {
            if (e.target.getAttribute("data-test")) {
              e.target.removeAttribute("data-test");
            }
          }, 1000);
        });
      }
    }

    let subscriptionIdPage = setInterval(() => {
      if (window.location.pathname.match("subscription/id/")) {
        clearInterval(subscriptionIdPage);
        createConfirmTrialCancellationPopup();
      }
    }, 100);

    function createConfirmTrialCancellationPopup() {
      if (document.querySelector(".overlay_popup")) {
        console.log(`POPUP`);
        onOpenPopup();
        // if (document.querySelector(".cancel_trial_btn")) {
        //   document.querySelector(".cancel_trial_btn").addEventListener("click", (e) => {
        //     if (!e.target.getAttribute("data-test")) {
        //       console.log(`cancel_trial_btn openPopup`);
        //     }
        //     e.target.setAttribute("data-test", "1");
        //     setTimeout(() => {
        //       if (e.target.getAttribute("data-test")) {
        //         e.target.removeAttribute("data-test");
        //       }
        //     }, 1000);
        //   });
        // }

        function onOpenPopup() {
          document.querySelector("html").classList.add("open_var");
          document.querySelector(".overlay_popup").classList.remove("is_hidden");
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupHtml);
          }

          document.querySelectorAll(".overlay_popup .btn_close").forEach((i) => {
            i.addEventListener("click", (e) => {
              if (e.currentTarget.closest(".overlay_popup").classList.contains("first_step")) {
                document.querySelector("#edit-cancel--3").click();
              }
              if (e.currentTarget.closest(".overlay_popup").classList.contains("last_step")) {
                window.location = "/";
              }
              // click on btn close popup
              // onClosePopup();
            });
          });
          document.querySelectorAll(".overlay_popup").forEach((i) => {
            i.addEventListener("click", (e) => {
              // click on overlay popup
              if (e.target.matches(".overlay_popup") && e.currentTarget.classList.contains("first_step")) {
                document.querySelector("#edit-cancel--3").click();
                // onClosePopup();
              }
              // if (e.target.matches(".overlay_popup") && e.currentTarget.classList.contains("last_step")) {
              //   window.location = "/";
              //   // onClosePopup();
              // }
            });
          });

          if (document.querySelector(".overlay_popup .content_popup")) {
            document.querySelectorAll(".after_trial_txt_popup").forEach((el) => {
              el.textContent = document.querySelector("#recurly-subscription-cancel-confirm-form > p > strong").textContent;
            });
            document.querySelectorAll("#helpUsBecomeBetter .grade_list input.custom_radio_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_rating", `Overall Satisfaction - ${el.getAttribute("value")}`, "Radio button", "Pop up did you now Help Us Become Better"]);
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            document.querySelectorAll("#helpUsBecomeBetter .questions_list input.custom_radio_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_selection", `Reason for Cancellation - ${el.nextElementSibling.querySelector(".choose_option_txt_quest").textContent}`, "Radio button", "Pop up did you now Help Us Become Better"]);
                  el.nextElementSibling.querySelector("textarea").focus();
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            document.querySelectorAll("#helpUsBecomeBetter .questions_list textarea").forEach((el) => {
              el.addEventListener("blur", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_input_answer", `${el.value}`, "Input", "Pop up did you now Help Us Become Better"]);
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            //Cancel Trial ->>>>> Confirm Trial Cancellation
            document.querySelectorAll(".content_popup .popup_cancel_trial_btn").forEach((i) => {
              i.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_cancel", "Cancel Trial", "Button", "Pop up did you now Confirm Trial Cancellation"]);
                  i.closest("div.parent_wrapp").classList.add("is_hidden");
                  if (document.querySelector("#helpUsBecomeBetter").classList.contains("is_hidden")) {
                    document.querySelector("#helpUsBecomeBetter").classList.remove("is_hidden");
                  }
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // Keep My Trial ->>>>> Confirm Trial Cancellation
            document.querySelector(".content_popup .keep_my_trial_btn").addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                // onClosePopup();
                pushDataLayer(["exp_trial_popup_but_keep", "Keep My Trial", "Button", "Pop up did you now Confirm Trial Cancellation"]);
                document.querySelector("#edit-cancel--3").click();
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });
            //submit_btn ->>>>>>>> Help Us Become Better
            document.querySelectorAll("#helpUsBecomeBetter .submit_btn").forEach((el) => {
              el.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  e.preventDefault();
                  if (el.closest(".overlay_popup").classList.contains("first_step")) {
                    el.closest(".overlay_popup").classList.remove("first_step");
                    el.closest(".overlay_popup").classList.add("last_step");
                  }
                  let value1 = document.querySelector("#helpUsBecomeBetter .grade_list input.custom_radio_btn:checked").value;
                  let value2 = document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked + label .choose_option_txt_quest").textContent;
                  let value3 = document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked").nextElementSibling.querySelector("textarea").value;

                  pushDataLayer(["exp_trial_popup_but_submit", `Submit - ${value2} ${value3} - ${value1}", "Button`, "Pop up did you now Help Us Become Better"]);
                  if (window.innerWidth <= 768) {
                    document.querySelector(".overlay_popup .container_popup").classList.add("mob_var");
                  }
                  document.querySelector("#helpUsBecomeBetter").classList.add("is_hidden");
                  if (document.querySelector("#yourTrialWasCancelled").classList.contains("is_hidden")) {
                    document.querySelector("#yourTrialWasCancelled").classList.remove("is_hidden");
                  }

                  document.querySelector('input[value="Cancel at Renewal"]').click();
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // skip_btn ->>>>> Help Us Become Better
            document.querySelectorAll(".content_popup .skip_btn").forEach((i) => {
              i.addEventListener("click", (e) => {
                if (!e.target.getAttribute("data-test")) {
                  pushDataLayer(["exp_trial_popup_but_skip", "Skip", "Button", "Pop up did you now Help Us Become Better"]);
                  if (window.innerWidth <= 768) {
                    document.querySelector(".overlay_popup .container_popup").classList.add("mob_var");
                  }
                  i.closest("div.parent_wrapp").classList.add("is_hidden");
                  if (i.closest(".overlay_popup").classList.contains("first_step")) {
                    i.closest(".overlay_popup").classList.remove("first_step");
                    i.closest(".overlay_popup").classList.add("last_step");
                  }
                  if (document.querySelector("#yourTrialWasCancelled").classList.contains("is_hidden")) {
                    document.querySelector("#yourTrialWasCancelled").classList.remove("is_hidden");
                  }
                  document.querySelector('input[value="Cancel at Renewal"]').click();
                  // ОТМЕНИТЬ ПОДПИСКУ
                }
                e.target.setAttribute("data-test", "1");
                setTimeout(() => {
                  if (e.target.getAttribute("data-test")) {
                    e.target.removeAttribute("data-test");
                  }
                }, 1000);
              });
            });
            // close_btn ->>>>> Your Trial Was Cancelled
            document.querySelector("#yourTrialWasCancelled .close_btn").addEventListener("click", (e) => {
              if (!e.target.getAttribute("data-test")) {
                console.log(`close_btn ->>>>> Your Trial Was Cancelled`);
                pushDataLayer(["exp_trial_popup_but_close", "Close", "Button", "Pop up did you now Your Trial Was Cancelled"]);
                // onClosePopup();
                if (e.currentTarget.closest(".overlay_popup").classList.contains("last_step")) {
                  window.location = "/";
                }
              }
              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 1000);
            });
            // remove disabled ->>>> submit_btn
            let disabledBtn = setInterval(() => {
              if (document.querySelector("#helpUsBecomeBetter .questions_list input.custom_radio_btn:checked") && document.querySelector("#helpUsBecomeBetter .grade_list input.custom_radio_btn:checked")) {
                clearInterval(disabledBtn);
                document.querySelectorAll("#helpUsBecomeBetter .submit_btn").forEach((el) => {
                  el.disabled = false;
                });
              }
            }, 100);

            if (window.innerWidth <= 768) {
              let f = setInterval(() => {
                if (typeof $ === "function" && typeof $("#test").swipe === "function") {
                  clearInterval(f);
                  $("#test").swipe({
                    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                      if (direction === "down") {
                        // onClosePopup();
                        document.querySelector("#edit-cancel--3").click();
                      }
                    },
                  });
                }
              }, 100);
            }
          }
        }

        function onClosePopup() {
          document.querySelectorAll(".overlay_popup").forEach((el) => {
            el.classList.add("is_hidden");
          });

          if (document.querySelector("html").classList.contains("open_var")) {
            document.querySelector("html").classList.remove("open_var");
          }
        }
      }
    }

    visibElem();
    function visibElem() {
      waitForElement("#confirmTrialCancellation").then((el) => {
        handleVisibility(el, ["exp_trial_popup_visib_focus", "{{focusTime}}", "Visibility", "Pop up did you now Confirm Trial Cancellation"]);
      });
      waitForElement("#yourTrialWasCancelled").then((el) => {
        handleVisibility(el, ["exp_trial_popupcancel_vis_focus", "{{focusTime}}", "Visibility", "Pop up did you now Your Trial Was Cancelled"]);
      });
    }

    function handleVisibility(el, eventParams) {
      let isVisible = false;
      let entryTime;
      const config = {
        root: null,
        threshold: 0, // Trigger when any part of the element is out of viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              // The element has become visible
              isVisible = true;
              entryTime = new Date().getTime();
            }
          } else if (isVisible) {
            // The element is out of the viewport, calculate visibility duration
            isVisible = false;
            const exitTime = new Date().getTime();
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
            const roundedDuration = Math.round(visibilityDuration);

            if (roundedDuration) {
              const eventData = eventParams;
              eventData[1] = roundedDuration;
              pushDataLayer(eventData);
              observer.disconnect();
            }
          }
        });
      }, config);

      observer.observe(el);
    }

    function waitForElement(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_trial", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 100);

let becomeASubscriber = setInterval(() => {
  if (window.location.pathname === "/become-a-subscriber" && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
    clearInterval(becomeASubscriber);

    function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
      console.log(event_name + " / " + event_desc + " / " + event_type + " / " + event_loc);

      // Send a Google Analytics event
      const eventData = {
        event: "event-to-ga4",
        event_name,
        event_desc,
        event_type,
        event_loc,
      };

      window.dataLayer = window.dataLayer || [];
      dataLayer.push(eventData);
    }

    const instructorsArr = [
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06112.jpg",
        name: "Fiji McAlpine",
        link: "/yoga-classes?field_instructor_target_id=8",
        caption: "Vinyasa, Power, Meditation, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/satiya-channer.jpg",
        name: "Satiya Channer",
        link: "/yoga-classes?field_instructor_target_id=123147",
        caption: "Yin, Restorative, Hatha, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/David%20headshot%20cropped%20Jan-23.jpg",
        name: "David Procyshyn",
        link: "/yoga-classes?field_instructor_target_id=4",
        caption: "Hatha, Pain Care, Meditation, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/tracy.jpg",
        name: "Tracey Noseworthy",
        link: "/yoga-classes?field_instructor_target_id=7041",
        caption: "Vinyasa, Power, Meditation, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/10/DSC04949%20copy.jpg",
        name: "Josh Chen",
        link: "/yoga-classes?field_instructor_target_id=313027",
        caption: "Hatha, Yin, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/02/PROFILE_MELISSA%20web%20size.jpg",
        name: "Melissa Krieger",
        link: "/yoga-classes?field_instructor_target_id=467",
        caption: "Hatha, Slow Flow, Restorative",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC01881.jpg",
        name: "Helen Camisa",
        link: "/yoga-classes?field_instructor_target_id=244583",
        caption: "Hatha, Yin, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06138%20%282%29.jpg",
        name: "Andrea Ting-Luz",
        link: "/yoga-classes?field_instructor_target_id=196672",
        caption: "Vinyasa, Hatha, Yin",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2020/04/Screenshot%202020-04-07%2013.11.01.jpg",
        name: "Rachel Scott",
        link: "/yoga-classes?field_instructor_target_id=16854",
        caption: "Vinyasa, Power, Hatha, YTT",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2016/05/yoga%20profile%20picture.jpg",
        name: "Crista Shillington",
        link: "/yoga-classes?field_instructor_target_id=133906",
        caption: "Vinyasa, Power",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/04/Doyoga.jpeg",
        name: "Sarada Jagannath",
        link: "/yoga-classes?field_instructor_target_id=326548",
        caption: "Hatha, Pranayama",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/DSC01661-2_0.jpg",
        name: "Araba Adjaye",
        link: "/yoga-classes?field_instructor_target_id=357388",
        caption: "Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/Tara%20Heal%20HEADSHOT%202021%20Photo-68.jpg",
        name: "Tara Heal",
        link: "/yoga-classes?field_instructor_target_id=350658",
        caption: "Vinyasa, Power, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/Photo%204.jpg",
        name: "Guy Friswell",
        link: "/yoga-classes?field_instructor_target_id=266604",
        caption: "Slow Flow, Hatha, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/unnamed%20%282%29.jpg",
        name: "Jonni-Lyn Friel",
        link: "/yoga-classes?field_instructor_target_id=269801",
        caption: "Jivamukti, Vinyasa, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/11/julia-web.jpg",
        name: "Julia Crouch",
        link: "/yoga-classes?field_instructor_target_id=317249",
        caption: "Pilates, Pre/Post Natal, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/sarah-jane-profile.jpg",
        name: "Sarah Jane Steele",
        link: "/yoga-classes?field_instructor_target_id=90321",
        caption: "Prenatal/Postnatal, Hatha, Yin, Restorative",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kathi.png",
        name: "Kathi Ells",
        link: "/yoga-classes?field_instructor_target_id=218644",
        caption: "Pilates",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/08/nicky_jones.jpg",
        name: "Nicky Jones",
        link: "/yoga-classes?field_instructor_target_id=4134",
        caption: "Restorative, Therapy, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/04/sarah-holmes.jpg",
        name: "Sarah Holmes de Castro",
        link: "/yoga-classes?field_instructor_target_id=189907",
        caption: "Hatha, Restorative, Gentle",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/ron_stewart_yoga_0_0.jpg",
        name: "Ron Stewart",
        link: "/yoga-classes?field_instructor_target_id=15517",
        caption: "Vinyasa, Power, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kim_wilson.jpg",
        name: "Kim Wilson",
        link: "/yoga-classes?field_instructor_target_id=877",
        caption: "Pilates",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/anastasia-thumb2.jpg",
        name: "Anastasia Hangemanole",
        link: "/yoga-classes?field_instructor_target_id=134",
        caption: "Yin, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/11/IMG_5004.jpg",
        name: "Dawn Rabey",
        link: "/yoga-classes?field_instructor_target_id=15521",
        caption: "Kundalini, Pranayama, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2015/04/Screen%20shot%202015-04-15%20at%2011.00.26%20AM.png",
        name: "Tianne Allan",
        link: "/yoga-classes?field_instructor_target_id=834",
        caption: "Restorative, Pain Care",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/10/alyssa_jean.jpg",
        name: "Alyssa Jean Klazek",
        link: "/yoga-classes?field_instructor_target_id=215411",
        caption: "Yoga for Kids",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/IMG_2223_RETOUCH_V2.jpg",
        name: "Nyk Danu",
        link: "/yoga-classes?field_instructor_target_id=266789",
        caption: "Yin, Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/12/Jeff%20with%20son.jpg",
        name: "Jeff Lichty",
        link: "/yoga-classes?field_instructor_target_id=224862",
        caption: "Ashtanga",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/michelle_rubin.jpg",
        name: "Michelle Rubin",
        link: "/yoga-classes?field_instructor_target_id=50832",
        caption: "Hatha, Gentle, Seniors",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/04/jennylisa%20%282%29.jpg",
        name: "Jennifer Piercy",
        link: "/yoga-meditation?field_instructor_target_id=253426",
        caption: "Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/09/Screen%20Shot%202018-09-12%20at%203.32.21%20PM.png",
        name: "Peter Renner",
        link: "/yoga-meditation?field_instructor_target_id=189052",
        caption: "Meditation",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/erica_fitch.jpg",
        name: "Erica Fritch",
        link: "/yoga-classes?field_instructor_target_id=8733",
        caption: "Hatha, Therapy, Gentle",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/Shivani_1.jpg",
        name: "Shivani Wells",
        link: "/yoga-classes?field_instructor_target_id=1047",
        caption: "Vinyasa/Power, Hatha",
      },
      {
        img: "https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/jenni-ashtanga-yoga_1.jpg",
        name: "Jenni Pritchard",
        link: "/yoga-classes?field_instructor_target_id=28537",
        caption: "Ashtanga",
      },
    ];

    let becomeASubscriberStyle = /*html */ `
      <style>
/**promoteSubscriptionWrap */
.o-page__banner + #promoteSubscriptionWrap {
  padding: 25px 0 40px;
}
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
/*https://www.doyogawithme.com/become-a-subscriber ->>>>> promoteSubscriptionWrap */
.path-become-a-subscriber .new_box_subscriber {
  background: linear-gradient(45deg, #003a67 0%, #007db8 100%);
  padding: 40px 10px 142px;
}
.path-become-a-subscriber #promoteSubscriptionWrap {
  background: #faf8f6;
  padding: 15px 0;
}
.path-become-a-subscriber .bgr_gray,
.path-become-a-subscriber #UnlockPremiumContentLink {
  display: none;
}
.path-become-a-subscriber .btn_wrapper {
  justify-content: center;
  margin-bottom: 10px;
}
.path-become-a-subscriber .new_container {
  margin-bottom: -73px;
  z-index: 2;
  margin-top: -119px;
}
.path-become-a-subscriber .new_title_subscriber {
  color: #fff;
  text-align: center;
  font-family: "Manrope", sans-serif !important;
  font-size: 44px;
  font-weight: 700;
  line-height: 52px;
  max-width: 1040px;
  margin: 0 auto;
}
/*new_sect_choose_your_plan */
.new_sect_choose_your_plan {
  margin: 0 0 0;
}
.container_choose_your_plan {
  max-width: 1006px;
  width: 90%;
  margin: 0 auto;
  border-radius: 12px;
  background: linear-gradient(87deg, #003a67 0%, #007db8 100%);
  padding: 12px;
}
.border_choose_your_plan {
  border-radius: 12px;
  border: 2px dashed rgb(246 246 246 / 50%);
  padding: 70px 12px 12px;
}
.border_choose_your_plan > h2 {
  color: #fff;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin: 0 0 24px;
  text-align: center;
}
.your_plan_list {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.your_plan_link {
  backdrop-filter: blur(3px);
  background: #fff;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.25));
  min-height: 349px;
  max-width: 320px;
  width: 100%;
  position: relative;
}
.your_plan_list .your_plan_link:nth-child(2) {
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  overflow: hidden;
}
.your_plan_link:nth-child(2)::before {
  content: "Save 35%";
  position: absolute;
  z-index: 99;
  top: 54px;
  right: -4px;
  transform: rotate(45deg);
  transform-origin: bottom right;
  padding: 6px 28px;
  background: #f3a83c;
  font-family: "Manrope", sans-serif !important;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  color: #272727;
  text-transform: uppercase;
}
.container_choose_your_plan.not_free {
  max-width: 688px;
}
.container_choose_your_plan.not_free .your_plan_link:nth-child(1) {
  display: none !important;
}
.your_plan_link:nth-child(1) {
  border-top-left-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.your_plan_list .your_plan_link:nth-child(3) {
  border-top-right-radius: 12px;
}
.your_plan_body_free {
  padding: 40px;
  text-align: center;
  width: 100%;
}
.your_plan_body_free .your_plan_name {
  color: #027db8;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  margin: 16px 0 20px;
}
section.new_sect_choose_your_plan .your_plan_body_free a.your_plan_btn {
  border-radius: 30px !important;
  border: 2px solid #017922 !important;
  background: none !important;
  color: #017922 !important;
}
.your_plan_header {
  text-align: center;
  padding: 30px 12px 12px;
}
.your_plan_period {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 8px;
}
.your_plan_name {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
.your_plan_body {
  background: linear-gradient(180deg, #f6f6f6 0%, rgba(246, 246, 246, 0) 63.21%);
  padding: 12px 40px 30px;
  text-align: center;
}
.your_plan_free {
  color: #027db8;
  font-family: "Manrope", sans-serif !important;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin: 0 0 12px;
}
.your_plan_price {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 4px;
}
.your_plan_price > span {
  color: #027db8;
  font-family: "Manrope", sans-serif !important;
  font-size: 23px;
  font-weight: 800;
  line-height: 24px;
}
.your_plan_usd {
  color: #a5a5a5;
  font-family: "Manrope", sans-serif !important;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin: 4px 0 12px;
}
section.new_sect_choose_your_plan a.your_plan_btn {
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 30px !important;
  background: #017922 !important;
  outline: none !important;
  border: none !important;
  max-width: 240px;
  width: 100%;
  height: 52px;
  margin: 0 auto;
  color: #fff !important;
  font-family: "Manrope", sans-serif !important;
  font-size: 18px !important;
  font-weight: 700;
  line-height: 32px !important;
  text-transform: capitalize;
  text-decoration: none !important;
}
.your_plan_options_wrapp {
  margin-top: 16px;
}
.your_plan_options_wrapp .your_plan_options {
  color: #555;
  font-family: "Manrope", sans-serif !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.your_plan_options_wrapp .your_plan_options + div {
  margin-top: 12px;
}
.your_plan_options_wrapp .your_plan_options img {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.your_plan_year {
  color: #272727;
  font-family: "Manrope", sans-serif !important;
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
}
.your_plan_year_old {
  color: #a5a5a5;
  text-decoration-line: line-through;
}
.your_plan_year_new {
}
.your_plan_year_caption {
  font-size: 14px;
  font-weight: 400;
}
.your_plan_list_mob,
.new_title_subscriber_mob {
  display: none;
}
/** lav-classes */
.lav-container {
    z-index: 2;
    margin: 0 auto;
    width: 68em;
    max-width: 100%;
    padding: 0 1em;
    box-sizing: border-box;
}
.lav-classes {
    padding-top: 80px;
    padding-bottom: 72px;
    color: #272727;
  }
  .lav-classes__title {
    font-weight: 700;
    font-size: 44px;
    line-height: 1;
    text-align: center;
  }
  .lav-classes__list {
    margin: 50px -4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  .lav-classes__list li {
    margin: 4px 8px;
    background: #F9F9F9;
    border: 1px dashed #D6D6D6;
    border-radius: 12px;
    padding: 7.5px 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 31px;
    color: #555555;
    transition: 0.35s;
    cursor: pointer;
  }

  .lav-classes__list li:hover {
    background-color: #027DB8;
    color: #fff;
    border-style: solid;
  }
  .lav-pers {
    padding: 108px 0;
    color: #fff;
    background: #003A67;
    text-align: center;
  }
  .lav-pers__title {
    font-size: 44px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__list {
    margin: 50px 0 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em;
    list-style: none;
    padding: 0;
  }
  .lav-pers__item-title {
    margin-top: 12px;
    font-size: 21px;
    font-weight: 500;
    line-height: 1;
  }
  .lav-pers__item-caption {
    margin-top: 14px;
    font-size: 18px;
    line-height: 30px;
  }
  .lav-pers__item-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    font-weight: 500;
    padding: 18px;
    border-radius: 100px;
    border: solid 1px #027DB8;
    min-height: 1.5em;
    min-width: 1.5em;
  }

  .lav-instructors {
    color: #272727;
    padding-top: 110px;
    padding-bottom: 110px;
  }
  .lav-instructors__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
  }
  .lav-instructors__title {
    font-size: 44px;
    line-height: 1;
    font-weight: 500;
  }
  .lav-instructors .splide__track {
    overflow: visible;
  }
  .lav-instructors .splide__arrow {
    position: static;
    transform: none;
    background: white;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
  }
  .lav-instructors .splide__arrow--prev:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
    transform: scale(-1,1);
  }
  .lav-instructors .splide__arrow--next:before {
    color: #003A67;
    content: "➔";
    font-size: 1.2em;
  }
  .lav-instructors .splide__arrow svg {
    display: none;
  }
  .lav-instructors .splide__arrow + .splide__arrow {
    margin-left: 10px;
  }
  .lav-instructors .splide__arrows {
    display: flex;
    align-items: center;
  }

  .lav-instr {
    border-radius: 8px;
    max-width: 280px;
    transition: 0.35s;
    width: 21.7em;
    background: #fefefe;
    overflow: hidden;
    box-shadow: 2px 2px 4px 1px rgb(0 0 0 / 5%);
    display: flex;
    flex-direction: column;
  }
  .lav-instr:hover {
    text-decoration: none;
  }
  .lav-instr:hover .lav-instr__img {
    filter: brightness(65%);
  }
  .lav-instr:hover .lav-instr__name {
    text-decoration: underline;
  }
  .lav-instr__img {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 282px;
    transition: 0.35s;
  }
  .lav-instr__info {
    padding: 28px;
    color: #000;
  }
  .lav-instr__name {
    font-size: 19px;
  }
  .lav-instr__caption {
    margin-top: 12px;
    border-top: 1px solid #000;
    padding-top: 12px;
    font-size: 16px;
    line-height: 28px;
  }
  .splide__progress {
    display: none;
    background: #d6d6d6;
    border-radius: 100em;
    margin-top: 1.33rem;
    overflow: hidden;
  }
  .splide__progressBar {
    background: #027DB8;
    height: 0.25em;
    transition: width 400ms ease;
    width: 0;
  }
  .lav-mob,
  .sfc-becomeASubscriber__section.sfc-becomeASubscriber__section--banner.sfc-section.sfc-section--lavender,
  .sfc-becomeASubscriber__section.sfc-becomeASubscriber__section--feature.sfc-section,
  #plans {
    display: none;
  }
  
@media (max-width: 1070px) {
  /**new_sect_choose_your_plan */
  section.new_sect_choose_your_plan a.your_plan_btn {
    font-size: 15px !important;
  }
  .your_plan_options_wrapp .your_plan_options {
    font-size: 12px;
  }
}
@media(max-width: 992px) {
  .lav-desk {
    display: none;
}
.lav-mob {
    display: block;
}
.lav-container {
    max-width: 100%;
    width: 100%;
}
      .lav-classes {
      padding-top: 42px;
      padding-bottom: 42px;
    }
    .lav-classes__title {
      font-size: 22px;
    }
    .lav-classes__list {
      margin: 24px -4px 0;
    }
    .lav-classes__list.lav-mob {
      display: flex;
    }
    .lav-classes__list li {
      margin: 4px;
      font-size: 16px;
      padding: 4px 24px;
    }
    .lav-classes__toggle {
      font-weight: 700;
      font-size: 18px;
      line-height: 32px;
      margin: 16px auto 0;
      min-height: 52px;
      border-radius: 30px;
      border: 2px solid #017922;
      background: none;
      color: #017922;
      max-width: 156px;
      padding: 0;
      width: 100%;
    }
    .lav-classes__list li:nth-child(1n + 11) {
      display: none;
    }
    .lav-classes__list.active li:nth-child(1n + 11) {
      display: block;
    }

    .lav-pers {
      padding: 54px 0;
    }
    .lav-pers__title {
      font-size: 22px;
    }

    .lav-pers__list {
      display: block;
      margin-top: 28px;
    }
    .lav-pers__item + .lav-pers__item {
      margin-top: 36px;
    }
    .lav-pers__item-caption {
      font-size: 18px;
      line-height: 30px;
    }

    .lav-instructors {
      padding-top: 42px;
      padding-bottom: 60px;
    }
    .lav-instructors__title {
      font-size: 22px;
    }
    .lav-instructors__head {
      margin-bottom: 22px;
    }
}
@media (max-width: 768px) {
  /**promoteSubscriptionWrap */
  .path-become-a-subscriber .new_box_subscriber {
    padding: 24px 18px 168px;
    display: none;
  }
  .path-become-a-subscriber #promoteSubscriptionWrap {
    display: none;
  }
  .path-become-a-subscriber .new_title_subscriber {
    font-size: 24px;
    line-height: 32px;
  }
  .path-become-a-subscriber .new_container {
    margin-top: -160px;
    padding: 18px 20px;
  }
  .path-become-a-subscriber .btn_wrapper h2 {
    font-size: 18px;
    margin: 0;
    max-width: unset;
  }
  .path-become-a-subscriber .btn_wrapper {
    margin-bottom: 20px;
  }
  .path-become-a-subscriber .new_features_list,
  .path-become-a-subscriber .hidden_new_features_list {
    gap: 16px;
  }
  .path-become-a-subscriber .list_main_title {
  }
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
    gap: 12px;
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
    margin: 0 0 12px;
    max-width: 278px;
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
    max-width: 253px;
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
  /**new_sect_choose_your_plan */
  .new_sect_choose_your_plan {
    margin: 0;
    background: radial-gradient(50% 50% at 50% 50%, #027db8 0%, #003a67 100%);
    mix-blend-mode: darken;
  }
  .container_choose_your_plan {
    margin: 0 auto;
    width: 91%;
    max-width: unset;
    padding: 30px 18px 9px;
    border: none;
    border-radius: unset;
    background: none;
  }
  .border_choose_your_plan {
    padding: 0;
    border-radius: unset;
    border: none;
  }
  .border_choose_your_plan > h2.new_title_subscriber_mob{
    display: block;
color: #FFF;
text-align: center;
font-family: 'Manrope';
font-size: 34px;
font-weight: 700;
line-height: 34px;
margin: 0 0 8px;
  }
  .border_choose_your_plan > h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 31px;
  }
  .your_plan_list {
    display: none;
  }
  .your_plan_list_mob {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .your_plan_link {
    max-width: 100%;
    min-height: unset;
    border-radius: 12px;
    background: unset;
  }
  .your_plan_link:nth-child(1) {
    display: block;
    border-top-left-radius: unset;
  }
  .your_plan_txt_free {
    display: flex;
    justify-content: space-between;
    margin-bottom: 19px;
        align-items: center;
  }
  .your_plan_body_free_mob {
    padding: 16px;
    text-align: unset;
    background: white;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .your_plan_txt_free .your_plan_period {
    color: #272727;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
    margin: 0;
  }
  .your_plan_txt_free .your_plan_name {
    margin: 0;
    color: #027DB8;
font-family: 'Manrope';
font-size: 22px;
font-weight: 700;
line-height: 32px;
  }
  .your_plan_header {
    text-align: unset;
    padding: 16px 16px 6px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 14px;
    background: #fff;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .your_plan_period {
    color: #017922;
    font-family: "Manrope", sans-serif !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin: 0 0 6px;
  }
  .your_plan_name {
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  }
  .your_plan_price {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 0;
  }
  .your_plan_price > span {
    font-size: 22px;
    font-weight: 700;
    line-height: 32px;
  }
  .your_plan_block_right {
    text-align: right;
  }
  .your_plan_block_right .your_plan_free {
    line-height: normal;
    margin: 0;
  }
  .your_plan_block_right .your_plan_free span:nth-child(2) {
    color: #272727;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
   .your_plan_link:nth-child(2){
    margin-top: 16px;
   }
  .your_plan_link:nth-child(2)::before{
    border-radius: 12px;
        font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    top: -12px;
    left: 50%;
    right: unset;
    transform: translateX(-50%);
    transform-origin: unset;
    padding: 2px 8px;
  }
  .your_plan_body {
    padding: 0 16px 16px;
    background: #fff;
  }
  section.new_sect_choose_your_plan a.your_plan_btn {
    font-size: 18px !important;
    width: 100%;
    max-width: unset;
  }
  .your_plan_usd {
    margin: 0 0 16px;
    text-align: right;
    line-height: 18px;
  }
  .your_plan_options_wrapp {
    display: flex;
    justify-content: space-between;
  }
  .your_plan_options_wrapp .your_plan_options + div {
    margin-top: 0;
  }
  .your_plan_options_wrapp .your_plan_options {
    font-weight: 600;
    line-height: 16px;
  }
  .your_plan_options_wrapp .your_plan_options img {
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }
  .your_plan_footer {
    border-top: 2px solid #e0e0e0;
    background: #f6f6f6;
    padding: 13px 16px 16px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .your_plan_footer ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .your_plan_footer ul li {
    position: relative;
    color: #555;
    font-family: "Manrope";
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    padding-left: 23px;
  }
  .your_plan_footer ul li::before{
      position: absolute;
      content: "";
      width: 14px;
      height: 10px;
      background: url(https://conversionratestore.github.io/projects/doyogawithme/img/arrow_acc.svg) no-repeat center center;
      top: 7px;
      left: 0;
      background-size: contain;
  }
  .your_plan_footer ul li + li {
    margin-top: 12px;
  }
  .your_plan_year_new {
    color: #272727;
    font-family: "Manrope";
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
  }
  .your_plan_year_caption {
    color: #272727;
    font-family: "Manrope";
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
}
  @media(max-width: 385px) {
    .lav-instructors {
      padding-bottom: 90px;
    }
    .lav-journey .splide__arrows {
      margin-top: -5.2em!important;
    }
  }
@media (max-width: 360px) {
.your_plan_name{
  font-size: 16px;
}
.your_plan_header{
  gap: 0;
}
.your_plan_options_wrapp .your_plan_options{
  font-size: 11px;
}
.your_plan_footer ul li{
  font-size: 12px;
}
}

      </style>
      `;

    let newBoxFeatures = /*html */ `
    <section id="promoteSubscriptionWrap" class="promote_subscription_wrap">
      <div class="bgr_gray"></div>
      <div class="new_container">
        <div class="btn_wrapper">
          <h2>Start Free Trial for <span class="accent_color">Unlimited Access</span></h2>
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

    let newBoxSubscriber = /*html */ `
    <div class="new_box_subscriber"><h2 class="new_title_subscriber">Begin Your Transformation with a Free Trial of our Premium Yoga Classes</h2></div>
<section class="new_sect_choose_your_plan">
  <div class="container_choose_your_plan">
    <div class="border_choose_your_plan">
      <h2 class="new_title_subscriber_mob">Your ultimate Yoga journey starts here</h2>
      <h2>Choose your plan</h2>
      <ul class="your_plan_list">
        <li class="your_plan_link">
          <div class="your_plan_body_free">
            <div class="your_plan_period">Basic access</div>
            <div class="your_plan_name">Free</div>
            <a href="#" class="your_plan_btn btn_free">Create Free Account</a>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_period">Yearly</div>
            <div class="your_plan_name">Unlimited access</div>
          </div>
          <div class="your_plan_body">
            <p class="your_plan_free">Free for the next 7 days</p>
            <div class="your_plan_price">Then <span>$9.08</span>/ month</div>

            <div class="your_plan_year">
              <span class="your_plan_year_old">$167.88</span>
              <span class="your_plan_year_new">$108.99</span><span class="your_plan_year_caption">/year</span>
            </div>

            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_year">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_period">Monthly</div>
            <div class="your_plan_name">Unlimited access</div>
          </div>
          <div class="your_plan_body">
            <p class="your_plan_free">Free for the next 7 days</p>
            <div class="your_plan_price">Then <span>$13.99</span>/ month</div>

            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_month">Start Trial now</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="your_plan_list_mob">
        <li class="your_plan_link">
          <div class="your_plan_body_free_mob">
            <div class="your_plan_txt_free">
              <div class="your_plan_period">Basic access</div>
              <div class="your_plan_name">Free</div>
            </div>
            <a href="#" class="your_plan_btn btn_free">Create Free Account</a>
          </div>
          <div class="your_plan_footer">
            <ul>
              <li>Access 500+ yoga, meditation and movement classes from our extensive library</li>
            </ul>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_block_left">
              <div class="your_plan_period">Yearly</div>
              <div class="your_plan_name">Unlimited access</div>
            </div>
            <div class="your_plan_block_right">
              <p class="your_plan_free"><span>Free</span> <span>/7 days</span></p>
              <div class="your_plan_price">then <span>$9.08</span>/ month</div>
            </div>
          </div>
          <div class="your_plan_body">
            <div class="your_plan_usd">All prices in USD, billed as <span class="your_plan_year_old">$167.88</span> <span class="your_plan_year_new">$108.99</span><span class="your_plan_year_caption">/year</span></div>
            <a href="#" class="your_plan_btn btn_year">Start Free 7-day Trial</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div class="your_plan_footer">
            <ul>
              <li>Access 1000s of AD-FREE yoga, meditation and movement classes</li>
              <li>Exclusive access to all new releases and premium content</li>
              <li>Access our complete collection of curated programs & challenges</li>
              <li>25% off livestream events</li>
              <li>Follow your favorite teachers</li>
              <li>Curate your own collection of favorite classes</li>
              <li>Access to our Mobile and TV app</li>
            </ul>
          </div>
        </li>
        <li class="your_plan_link">
          <div class="your_plan_header">
            <div class="your_plan_block_left">
              <div class="your_plan_period">Monthly</div>
              <div class="your_plan_name">Unlimited access</div>
            </div>
            <div class="your_plan_block_right">
              <p class="your_plan_free"><span>Free</span> <span>/7 days</span></p>
              <div class="your_plan_price">then <span>$13.99</span>/ month</div>
            </div>
          </div>
          <div class="your_plan_body">
            <div class="your_plan_usd">*All prices in USD</div>
            <a href="#" class="your_plan_btn btn_month">Start Free 7-day Trial</a>
            <div class="your_plan_options_wrapp">
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/calendar.svg" />
                Cancel anytime
              </div>
              <div class="your_plan_options">
                <img src="https://flopsi69.github.io/crs/doYogaWithMe/subscribe/img/guarantee.svg" />
                30-Day Money-Back Guarantee
              </div>
            </div>
          </div>
          <div class="your_plan_footer">
            <ul>
              <li>Access 1000s of AD-FREE yoga, meditation and movement classes</li>
              <li>Exclusive access to all new releases and premium content</li>
              <li>Access our complete collection of curated programs & challenges</li>
              <li>25% off livestream events</li>
              <li>Follow your favorite teachers</li>
              <li>Curate your own collection of favorite classes</li>
              <li>Access to our Mobile and TV app</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
<section class='lav-classes'>
  <div class='lav-container'>
    <div class='lav-classes__title'>Explore 1000+ Yoga classes</div>

    <ul class='lav-classes__list lav-desk'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>

    <ul class='lav-classes__list lav-mob'>
      <li data-id='30'>Ashtanga Yoga</li>
      <li data-id='213'>Chair Yoga</li>
      <li data-id='31'>Gentle Yoga</li>
      <li data-id='32'>Guided Meditation</li>
      <li data-id='36'>Mom and Baby Yoga</li>
      <li data-id='34'>Jivamukti</li>
      <li data-id='33'>Hatha Yoga</li>
      <li data-id='35'>Kundalini Yoga</li>
      <li data-id='37'>Pilates</li>
      <li data-id='38'>Plus Size Yoga</li>
      <li data-id='126'>Prenatal/Postnatal Yoga</li>
      <li data-id='39'>PNF</li>
      <li data-id='42'>Pranayama Yoga</li>
      <li data-id='44'>Restorative Yoga</li>
      <li data-id='125'>Slow Flow</li>
      <li data-id='127'>Values-based Education</li>
      <li data-id='46'>Yin and Yin/Yang Yoga</li>
      <li data-id='47'>Yoga at Work</li>
      <li data-id='45'>Vinyasa/Power Yoga</li>
      <li data-id='53'>Yoga Therapy</li>
      <li data-id='49'>Yoga for Athletes</li>
      <li data-id='50'>Yoga for Runners</li>
      <li data-id='51'>Yoga for Seniors</li>
      <li data-id='54'>Yoga for Back Care</li>
      <li data-id='55'>Yoga for Kids</li>
    </ul>

    <button class='lav-classes__toggle lav-btn lav-btn_trans sfc-button lav-mob'>
      Show More
    </button>
  </div>
</section>

<section class='lav-pers'>
  <div class='lav-container'>
    <div class='lav-pers__title'>Count the ways you can <br/> personalize your practice</div>

    <ul class='lav-pers__list'>
      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>25+</div>
        <div class='lav-pers__item-title'>Styles</div>
        <div class='lav-pers__item-caption'>Keep your mind and body guessing or deepen your practice.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>20+</div>
        <div class='lav-pers__item-title'>Programs</div>
        <div class='lav-pers__item-caption'>Created for beginner, intermediate, and advanced practices.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>35+</div>
        <div class='lav-pers__item-title'>Challenges</div>
        <div class='lav-pers__item-caption'>Carefully designed series of classes that help you get healthier, stronger, and more flexible.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>90+</div>
        <div class='lav-pers__item-title'>Guided Meditations</div>
        <div class='lav-pers__item-caption'>Sleep better, build mindfulness, enhance performance or let go of anxiety.</div>
      </li>

      <li class='lav-pers__item'>
        <div class='lav-pers__item-num'>2-90</div>
        <div class='lav-pers__item-title'>Minute Classes</div>
        <div class='lav-pers__item-caption'>To get you on your mat with whatever time you have.</div>
      </li>
    </ul>
  </div>
</section>

<section class='lav-instructors splide'>
  <div class='lav-container'>
    <div class='lav-instructors__head'>
      <div class='lav-instructors__title'>Our Instructors</div>

      <div class="splide__arrows">
        <button class="splide__arrow splide__arrow--prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
        <button class="splide__arrow splide__arrow--next">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </button>
      </div>
    </div>

    <div class="splide__track">
      <div class='lav-instructors__list splide__list'></div>
    </div>

    <div class="splide__progress">
      <div class="splide__progressBar" />
    </div>
  </div>
</section>
    `;

    document.head.insertAdjacentHTML("beforeend", becomeASubscriberStyle);

    renderNewBoxSubscriber();
    // if user is free
    if (document.querySelector('[data-drupal-selector="drupal-settings-json"]') && JSON.parse(document.querySelector('[data-drupal-selector="drupal-settings-json"]')?.textContent).dywm.gtm.customer_info.user.isSubscriber === false) {
      isNotSubscriber();
    }

    //
    function renderNewBoxSubscriber() {
      if (document.querySelector(".o-page__main") && !document.querySelector(".new_box_subscriber")) {
        document.querySelector(".o-page__main").insertAdjacentHTML("beforebegin", newBoxSubscriber);
      }

      if (document.querySelector(".new_box_subscriber")) {
        document.querySelectorAll(".your_plan_btn.btn_free").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
              pushDataLayer(["exp_trial_paymobil_but_getstar", "Get started now", "Button", "Payment page mobile"]);
            } else {
              pushDataLayer(["exp_trial_payment_but_create", "Create Free Account", "Button", "Payment page"]);
            }
            document.querySelector('[href="/yogi/register"]').click();
          });
        });
        document.querySelectorAll(".your_plan_btn.btn_year").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Yearly - not registered", "Button", "Payment page mobile"]);
              } else {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Yearly - registered", "Button", "Payment page mobile"]);
              }
            } else {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Yearly - not registered", "Button", "Payment page"]);
              } else {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Yearly - registered", "Button", "Payment page"]);
              }
            }
            document.querySelector('[href="/express-checkout/139"]').click();
          });
        });
        document.querySelectorAll(".your_plan_btn.btn_month").forEach((el) => {
          el.addEventListener("click", (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Monthly - not registered", "Button", "Payment page mobile"]);
              } else {
                pushDataLayer(["exp_trial_paymobi_but_planpage", "Start Free 7-day Trial - Monthly - registered", "Button", "Payment page mobile"]);
              }
            } else {
              if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Monthly - not registered", "Button", "Payment page"]);
              } else {
                pushDataLayer(["exp_trial_payment_but_planpage", "Start Trial now - Monthly - registered", "Button", "Payment page"]);
              }
            }
            document.querySelector('[href="/express-checkout/138"]').click();
          });
        });
        let auth = setInterval(() => {
          if (!document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]') && !document.querySelector(".container_choose_your_plan").classList.contains("not_free")) {
            clearInterval(auth);
            document.querySelector(".container_choose_your_plan").classList.add("not_free");
          }
        }, 100);
        initClasses();
        initInstructions();
      }

      function initClasses() {
        for (let el of document.querySelectorAll(".lav-classes__list li")) {
          el.addEventListener("click", function (e) {
            e.preventDefault();
            const id = el.dataset.id;
            // gaEvent("exp_ch_pl_page_yoga", `yoga class button - ${el.innerText.trim()}`, "Button", "Explore 1000+ Yoga classes section");

            location.href = `https://www.doyogawithme.com/yoga-classes?field_instructor_target_id=&style[${id}]=${id}&field_subscribers_only_value=All&sort_by=created`;
          });
        }

        document.querySelector(".lav-classes__toggle").addEventListener("click", function (e) {
          e.preventDefault();
          // gaEvent("exp_ch_pl_page_show", "Show now button", "Button", "Explore 1000+ Yoga classes section");
          this.remove();
          document.querySelector(".lav-classes__list.lav-mob").classList.add("active");
        });
      }

      function initInstructions() {
        let parentEl = document.querySelector(".lav-instructors__list");

        for (let person of instructorsArr) {
          const slide = `
      <a href='${person.link}' class='lav-instr splide__slide'>
        <div class='lav-instr__img' style='background-image: url("${person.img}")'></div>
        <div class='lav-instr__info'>
          <div class='lav-instr__name'>${person.name}</div>
          <div class='lav-instr__caption'>${person.caption}</div>
        </div>
      </a>
    `;

          parentEl.insertAdjacentHTML("beforeend", slide);
        }

        const waitingSplide = setInterval(() => {
          if (typeof Splide === "function") {
            clearInterval(waitingSplide);

            const splide = new Splide(".splide", {
              autoWidth: true,
              pagination: false,
              gap: "1em",
            });

            splide.on("mounted", function () {
              splide.root.querySelector(".splide__progress").style.display = "block";
              var progressBar = splide.root.querySelector(".splide__progressBar");

              console.log(progressBar);

              if (progressBar) {
                var fillProgressBar = function fillProgressBar() {
                  var end = splide.Components.Controller.getEnd() + 1;
                  var rate = Math.min((splide.index + 1) / end, 1);
                  progressBar.style.width = String(100 * rate) + "%";
                };

                fillProgressBar();
                splide.on("mounted move", fillProgressBar);
              }
              // $sfc.find('.sfc-slider__progress').show();
            });

            splide.mount();
          }
        });
      }
    }

    //   isNotSubscriber
    function isNotSubscriber() {
      let becomeSubscriberFind = setInterval(() => {
        if (document.querySelector(".new_box_subscriber")) {
          clearInterval(becomeSubscriberFind);
          localStorage.setItem("newBannerVisib", "withoutBtn");
          document.querySelector(".new_box_subscriber")?.insertAdjacentHTML("afterend", newBoxFeatures);
        }
      }, 100);

      let findToggleBtn = setInterval(() => {
        if (typeof jQuery === "function" && document.querySelector(".toggle_btn_features")) {
          clearInterval(findToggleBtn);
          jQuery(".toggle_btn_features")?.click(function () {
            if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
              pushDataLayer(["exp_trial_payment_link_seepage", "See all Premium features - not registered", "Link", "Payment page"]);
            } else {
              pushDataLayer(["exp_trial_payment_link_seepage", "See all Premium features - registered", "Link", "Payment page"]);
            }
            jQuery(".hidden_inform_box").slideToggle();
            setTimeout(() => {
              document.querySelector(".new_box_subscriber").scrollIntoView({ block: "start", behavior: "smooth" });
            }, 400);
            if (!jQuery(this).hasClass("open_var")) {
              jQuery(this).addClass("open_var");
              document.querySelector(".toggle_btn_features span").textContent = "Less all Premium features";
              if (window.innerWidth <= 768) {
                document.querySelectorAll("[data-openmobvar]").forEach((el) => {
                  el.classList.add("open_var");
                });
              }
            } else {
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
    }

    visibElem();
    function visibElem() {
      waitForElement(".new_sect_choose_your_plan").then((el) => {
        handleVisibility(el, ["exp_trial_payment_visib_focus", "{{focusTime}", "Visibility", "Payment page"]);
      });
    }

    function handleVisibility(el, eventParams) {
      let isVisible = false;
      let entryTime;
      const config = {
        root: null,
        threshold: 0, // Trigger when any part of the element is out of viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isVisible) {
              // The element has become visible
              isVisible = true;
              entryTime = new Date().getTime();
            }
          } else if (isVisible) {
            // The element is out of the viewport, calculate visibility duration
            isVisible = false;
            const exitTime = new Date().getTime();
            const visibilityDuration = exitTime - entryTime; // / 1000 Convert to seconds
            const roundedDuration = Math.round(visibilityDuration);

            if (roundedDuration) {
              const eventData = eventParams;
              eventData[1] = roundedDuration;
              pushDataLayer(eventData);
              observer.disconnect();
            }
          }
        });
      }, config);

      observer.observe(el);
    }

    function waitForElement(selector) {
      return new Promise((resolve) => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
            observer.disconnect();
          }
        });

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true,
        });
      });
    }

    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_trial", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 100);
