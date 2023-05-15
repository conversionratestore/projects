let startPopup = setInterval(() => {
  if (document.querySelector("#player")) {
    clearInterval(startPopup);
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
          eventCategory: `Exp: Exit intent popup ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Exit intent popup ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    let popupStyle = /*html */ `
    <style>
      .mobile_var{
        display: none;
      }
    body.open_var{
        overflow: hidden;
    }
    .overlay_popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(0 0 0 / 60%);
        display: flex;
        overflow-y: auto;
        z-index: 1000000000;
        transition: opacity 0.5s ease;
    }
    .overlay_popup.is_close{
        opacity: 0;
        pointer-events: none;
    }
    .overlay_popup .container_popup {
        display: block;
        position: relative;
        max-width: 870px;
        width: 100%;
        margin: auto;
        transition: all 0.5s ease 0s;
    }
    .overlay_popup .container_popup > .btn_close {
        position: absolute;
        top: 12px;
        right: 12px;
        width: 40px;
        height: 40px;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid #E8F1F9;
    }
    .content_popup{
        display: flex;
        box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.5);
        border-radius: 16px;
    }
    .img_wrapper{
        width: 46%;
    }
    .img_wrapper > img{
        border-radius: 16px 0 0 16px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    .main_txt_wrapper{
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        width: 54%;
        padding: 28px;
        border-radius: 0 16px 16px 0;
    }
    .title_var{
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: #734F22 !important;
        margin: 0 0 4px;
        text-align: left;
    }
    .descr_var{
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #4B4B4B !important;
        margin: 0;
    }
    .txt_list_box{
        background: #DDE8F1;
        border: 2px solid #DDE8F1;
        border-radius: 8px;
        padding: 16px;
        margin: 12px 0;
    }
    .txt_list{
        margin: 0;
        padding: 0;
    }
    .txt_link{
        position: relative;
        padding: 0 0 0 28px;
    }
    .txt_link::before{
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        background: url(https://conversionratestore.github.io/projects/knineti/img/footprint.svg) no-repeat center center;
        background-size: contain;
    }
    .txt_link + li{
        margin-top: 8px;
    }
    .txt_link p,
    .much_more_txt{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #4B4B4B !important;
        margin: 0;
    }
    .much_more_txt{
        display: block;
        margin-top: 8px;
    }
    .subtitle_var{
        font-weight: 700;
        font-size: 16px !important;
        line-height: 22px;
        color: #193973 !important;
        margin: 0 0 12px;
        text-align: left;
    }
    .important_note_wrapper{
        display: flex;
        margin-bottom: 20px;
    }
    .important_note_wrapper svg{
        width: 20px;
        height: 20px;
        display: block;
        flex: 1 0 20px;
    }
    .important_note_wrapper > p{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #734F22 !important;
        margin: 0 0 0 8px;
    }
    .btn_wrapper{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: auto 0 0;
    }
    .blue_accept_btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 48px;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #193973;
        box-shadow: 5px 5px 10px rgba(39, 32, 32, 0.8);
        border-radius: 10px;
        outline: none;
        border: none;
    }
    .blue_accept_btn:hover{
      box-shadow: unset;
      transition: all 0.2s ease-in-out;
    }
    .blue_accept_btn:disabled{
        background: #CCCCCC;
        box-shadow: unset;
    }
    .blue_accept_btn > svg{
        margin-left: 8px;
    }
    .do_not_want_btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: max-content;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #193973;
        outline: none;
        border: none;
        background: unset;
    }
    .reviews_wrap{
        padding: 24px;
    }
    .reviews_wrap h4{
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #193973 !important;
        margin: 0 auto;
        text-align: center;
        max-width: 262px;
    }
    .stars_block{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px 0 8px;
    }
    .stars_block > span{
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #4B4B4B;
        margin-left: 4px;
    }
    .stars_wrapper{
        display: flex;
        margin: 0;
    }
    .stars_wrapper span{
        width: 24px;
        height: 24px;
        position: relative;
    }
    .stars_wrapper span::after{
        content: '';
        position: absolute;
        left: 0px;
        top: 0px;
        width: 24px;
        height: 24px;
        background: url(https://conversionratestore.github.io/projects/knineti/img/five_stars.svg) no-repeat center center;
        background-size: contain;
    }
    .reviews_block{
        background: #FFFFFF;
        border: 2px solid #193973;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
    }
    .reviews_txt{
        font-weight: 700;
        font-size: 14px;
        line-height: 21px;
        color: #4B4B4B !important;
        margin: 0;
        text-align: center;
    }
    .test_email_label{
        position: relative;
        width: 100%;
        margin: 23px 0 0;
    }
    .name_test_email_label{
        position: absolute;
        top: -10px;
        left: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #808080;
        padding: 0 4px;
        z-index: 1;
        background: #FFFFFF;
    }
    .input_test_email{
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        border-radius: 4px;
        width: 100%;
        height: 42px;
        padding: 10px 10px 10px 16px;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        color: #4B4B4B;
    }
    .text_validation {
        color: red !important;
        font-size: 13px !important;
        margin: 1px 0 0 16px;
    }
    [data-popup="5"] {
      background: #FFFFFF;
    }
    [data-popup="5"] .img_wrapper{
        display: flex;
        align-items: center;
        border-right: 2px solid #DDE8F1;
        width: 43%;
    }
    [data-popup="5"] .main_txt_wrapper {
        width: 57%;
        padding: 28px 28px 57px;
    }
    .container_popup.email_step .main_txt_wrapper{
        padding-top: 60px;
    }
    [data-popup="5"] .container_popup{
        max-width: 820px;
    }
    .is_hidden{
        display: none;
    }

    @media (max-width: 768px) {
            .mobile_var{
        display: block;
      }
      .overlay_popup .container_popup{
            margin: 16px auto auto;
      }
        .img_wrapper,
        [data-popup="5"] .img_wrapper{
            display: none;
        }
        .main_txt_wrapper,
        [data-popup="5"] .main_txt_wrapper{
            width: 100%;
            border-radius: 16px;
            padding: 20px;
        }
        .overlay_popup .container_popup{
            max-width: 343px;
        }
        .title_var {
            font-size: 20px !important;
            line-height: 27px;
            margin: 0 0 10px;
        }
        .important_note_wrapper{
            margin-bottom: 16px;
        }
        .important_note_wrapper > p{
            margin: 0 0 0 6px;
            color: #734F22 !important;
        }
        [data-popup="1"] .txt_link::before{
          content: unset;
        }
        [data-popup="1"] .txt_link{
          padding: 0;
        }
        .subtitle_var{
          position: relative;
          padding-left: 60px;
        }
        .subtitle_var::before{
          content: '';
          position: absolute;
          left: 0px;
          top: 0px;
          width: 48px;
          height: 48px;
          background: url(https://conversionratestore.github.io/projects/knineti/img/dog_training1.svg) no-repeat center center;
          background-size: contain;
        }
        [data-popup="2"] .subtitle_var::before{
          background: url(https://conversionratestore.github.io/projects/knineti/img/dog_training2.svg) no-repeat center center;
        }
        [data-popup="3"] .subtitle_var::before{
          background: url(https://conversionratestore.github.io/projects/knineti/img/dog_training3.svg) no-repeat center center;
        }
        [data-popup="4"] .subtitle_var::before{
          background: url(https://conversionratestore.github.io/projects/knineti/img/dog_training4.svg) no-repeat center center;
        }
        [data-popup="5"] .subtitle_var::before{
          background: url(https://conversionratestore.github.io/projects/knineti/img/dog_training5.svg) no-repeat center center;
        }
        [data-popup="5"] .title_var{
          max-width: 259px;
        }
        [data-popup="5"] .txt_list_box{
          margin: 0;
          padding: 18px 16px 12px;
          border: none;
        }
        [data-popup="5"] .guaranted_wrapper.mobile_var{
          margin: 12px 0;
        }
        .container_popup.email_step .main_txt_wrapper {
          padding-top: 144px;
        }
        .container_popup.email_step .title_var{
          position: relative;
          text-align: center;
        }
        .container_popup.email_step .title_var::before{
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -80px;
          width: 72px;
          height: 72px;
          background: url(https://conversionratestore.github.io/projects/knineti/img/dog_training6.svg) no-repeat center center;
          background-size: contain;
        }
        .container_popup.email_step .descr_var{
          text-align: center;
        }
        .container_popup.email_step .test_email_label{
          margin-bottom: 20px;
        }
    }
    @media (max-width: 320px) {
        .overlay_popup .container_popup {
            max-width: 305px;
        }
        .subtitle_var{
            font-size: 14px !important;
        }
        .main_txt_wrapper, [data-popup="5"] .main_txt_wrapper{
          padding: 15px;
        }
        .title_var{
              font-size: 18px !important;
        }
        .txt_list_box {
          padding: 10px;
        }
        .txt_link p, .much_more_txt{
              font-size: 13px;
        }
        .do_not_want_btn{
              font-size: 10px;
        }
    }
    </style>
    `;

    let popUp = /*html */ `
        <div class="overlay_popup is_hidden">
          <div class="container_popup">
            <div class="btn_close">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black"/>
                </svg>
            </div>
          </div>
        </div>
`;
    let contentPopupFirst = /*html */ `
        <div class="content_popup" data-popup="1">
            <div class="img_wrapper">
                <img src="https://conversionratestore.github.io/projects/knineti/img/not_click_img_opt.png" alt="" />
            </div>
            <div class="main_txt_wrapper">
                <h2 class="title_var">Did you know?</h2>
                <p class="descr_var">Dogs learn via a behavioral psychology principle called <b>Operant Conditioning</b>, and are best trained using body language rather than verbal commands.</p>
                <div class="txt_list_box">
                    <h3 class="subtitle_var">Start watching our FREE Workshop</h3>
                    <ul class="txt_list">
                        <li class="txt_link">
                            <p>To learn about the <b>4 quadrants</b> of operant conditioning, <b>body language</b> and a <b>secret 6-step process</b> that’s usually only known to people in the service dog training industry.</p>
                        </li>
                    </ul>
                </div>
                <div class="important_note_wrapper">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99984 1.91699C5.39984 1.91699 1.6665 5.65033 1.6665 10.2503C1.6665 14.8503 5.39984 18.5837 9.99984 18.5837C14.5998 18.5837 18.3332 14.8503 18.3332 10.2503C18.3332 5.65033 14.5998 1.91699 9.99984 1.91699ZM9.99984 11.0837C9.5415 11.0837 9.1665 10.7087 9.1665 10.2503V6.91699C9.1665 6.45866 9.5415 6.08366 9.99984 6.08366C10.4582 6.08366 10.8332 6.45866 10.8332 6.91699V10.2503C10.8332 10.7087 10.4582 11.0837 9.99984 11.0837ZM10.8332 14.417H9.1665V12.7503H10.8332V14.417Z" fill="#734F22" />
                    </svg>
                    <p><b>IMPORTANT NOTE:</b> This workshop <b>won't be up for ever</b>, so please watch it while you can.</p>
                </div>
                <div class="btn_wrapper">
                    <button class="blue_accept_btn continue_watch_btn">
                    <span>START WATCHING NOW</span>
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.2418 8.73307L4.47513 5.49974L1.2418 2.26641C0.916797 1.94141 0.916797 1.41641 1.2418 1.09141C1.5668 0.766406 2.0918 0.766406 2.4168 1.09141L6.2418 4.91641C6.5668 5.24141 6.5668 5.76641 6.2418 6.09141L2.4168 9.9164C2.0918 10.2414 1.5668 10.2414 1.2418 9.9164C0.92513 9.5914 0.916797 9.05807 1.2418 8.73307Z" fill="white" />
                    </svg>
                    </button>
                    <button  class="do_not_want_btn no_train_btn">I don’t want to train my dog</button>
                </div>
            </div>
        </div>
    `;
    let contentPopupSecond = /*html */ `
        <div class="content_popup" data-popup="2">
            <div class="img_wrapper">
                <img src="https://conversionratestore.github.io/projects/knineti/img/watched_less_than_5_img_opt.png" alt="" />
            </div>
            <div class="main_txt_wrapper">
                <h2 class="title_var">Don’t miss your chance!</h2>
                <p class="descr_var">This workshop won't be up forever, so please watch it while you can.</p>
                <div class="txt_list_box">
                    <h3 class="subtitle_var">During the next 30 minutes, you will learn:</h3>
                    <ul class="txt_list">
                        <li class="txt_link">
                            <p><b>3 key rules</b> involved in training a service dog, or training your dog to be as well-behaved as a service dog</p>
                        </li>
                        <li class="txt_link">
                            <p>a <b>secret 6-step process</b> that’s usually only known to people in the service dog training industry</p>
                        </li>
                        <li class="txt_link">
                            <p><b>step-by-step</b> solutions for solving any behavioral problem</p>
                        </li>
                    </ul>
                    <span class="much_more_txt">...and much more.</span>
                </div>
                <div class="important_note_wrapper">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99984 1.91699C5.39984 1.91699 1.6665 5.65033 1.6665 10.2503C1.6665 14.8503 5.39984 18.5837 9.99984 18.5837C14.5998 18.5837 18.3332 14.8503 18.3332 10.2503C18.3332 5.65033 14.5998 1.91699 9.99984 1.91699ZM9.99984 11.0837C9.5415 11.0837 9.1665 10.7087 9.1665 10.2503V6.91699C9.1665 6.45866 9.5415 6.08366 9.99984 6.08366C10.4582 6.08366 10.8332 6.45866 10.8332 6.91699V10.2503C10.8332 10.7087 10.4582 11.0837 9.99984 11.0837ZM10.8332 14.417H9.1665V12.7503H10.8332V14.417Z" fill="#734F22" />
                    </svg>
                    <p><b>IMPORTANT NOTE:</b> Watch the entire workshop, because we have a <b>special surprise</b> for you at the end!</p>
                </div>
                <div class="btn_wrapper">
                    <button class="blue_accept_btn continue_watch_btn">
                        <span>Continue WATCHING</span>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2418 8.73307L4.47513 5.49974L1.2418 2.26641C0.916797 1.94141 0.916797 1.41641 1.2418 1.09141C1.5668 0.766406 2.0918 0.766406 2.4168 1.09141L6.2418 4.91641C6.5668 5.24141 6.5668 5.76641 6.2418 6.09141L2.4168 9.9164C2.0918 10.2414 1.5668 10.2414 1.2418 9.9164C0.92513 9.5914 0.916797 9.05807 1.2418 8.73307Z" fill="white" />
                        </svg>
                    </button>
                    <button data-email="1" class="do_not_want_btn have_no_time_btn">I don't have time now. Remind me later.</button>
                </div>
            </div>
        </div>
    `;

    let contentPopupThird = /*html */ `
        <div class="content_popup" data-popup='3'>
            <div class="img_wrapper">
                <img src="https://conversionratestore.github.io/projects/knineti/img/watched_less_than_30_img_opt.png" alt="" />
            </div>
            <div class="main_txt_wrapper">
                <h2 class="title_var">Don’t miss your chance!</h2>
                <p class="descr_var">This workshop won't be up forever, so please watch it while you can.</p>
                <div class="txt_list_box">
                    <h3 class="subtitle_var">In the next few minutes, you'll discover:</h3>
                    <ul class="txt_list">
                        <li class="txt_link">
                            <p>how to train your dog to <b>stop it pulling on its leash</b></p>
                        </li>
                        <li class="txt_link">
                            <p>how to use body language to get your dog to <b>stop jumping</b></p>
                        </li>
                        <li class="txt_link">
                            <p>how to make your dog go to its bed <b>instead of barking at the door.</b></p>
                        </li>
                    </ul>
                </div>
                <div class="important_note_wrapper">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99984 1.91699C5.39984 1.91699 1.6665 5.65033 1.6665 10.2503C1.6665 14.8503 5.39984 18.5837 9.99984 18.5837C14.5998 18.5837 18.3332 14.8503 18.3332 10.2503C18.3332 5.65033 14.5998 1.91699 9.99984 1.91699ZM9.99984 11.0837C9.5415 11.0837 9.1665 10.7087 9.1665 10.2503V6.91699C9.1665 6.45866 9.5415 6.08366 9.99984 6.08366C10.4582 6.08366 10.8332 6.45866 10.8332 6.91699V10.2503C10.8332 10.7087 10.4582 11.0837 9.99984 11.0837ZM10.8332 14.417H9.1665V12.7503H10.8332V14.417Z" fill="#734F22" />
                    </svg>
                    <p><b>IMPORTANT NOTE:</b>  Watch the entire workshop, because we have a <b>special surprise</b> for you at the end!</p>
                </div>
                <div class="btn_wrapper">
                    <button class="blue_accept_btn continue_watch_btn">
                        <span>Continue WATCHING </span>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2418 8.73307L4.47513 5.49974L1.2418 2.26641C0.916797 1.94141 0.916797 1.41641 1.2418 1.09141C1.5668 0.766406 2.0918 0.766406 2.4168 1.09141L6.2418 4.91641C6.5668 5.24141 6.5668 5.76641 6.2418 6.09141L2.4168 9.9164C2.0918 10.2414 1.5668 10.2414 1.2418 9.9164C0.92513 9.5914 0.916797 9.05807 1.2418 8.73307Z" fill="white" />
                        </svg>
                    </button>
                    <button data-email="2" class="do_not_want_btn have_no_time_btn">I don't have time now. Remind me later.</button>
                </div>
            </div>
        </div>
    `;
    let contentPopupFourth = /*html */ `
        <div class="content_popup" data-popup='4'>
            <div class="img_wrapper">
                <img src="https://conversionratestore.github.io/projects/knineti/img/watched_less_than_35_img_opt.png" alt="" />
            </div>
            <div class="main_txt_wrapper">
                <h2 class="title_var">CONGRATULATIONS!</h2>
                <p class="descr_var">You've unlocked a <b>40% discount ($200)</b> for UNLIMITED ACCESS to our 10-week Total Transformation Masterclass!</p>
                <div class="txt_list_box">
                    <h3 class="subtitle_var">In addition, you will receive the following for FREE:</h3>
                    <ul class="txt_list">
                        <li class="txt_link">
                            <p>10 weeks of <b>personal coaching</b> from our training experts</p>
                        </li>
                        <li class="txt_link">
                            <p><b>Bonus class</b> 'How to Housetrain Your Dog'</p>
                        </li>
                        <li class="txt_link">
                            <p><b>Bonus class</b> 'Cure Your Dog's Separation Anxiety'</p>
                        </li>
                        <li class="txt_link">
                            <p><b>Bonus class</b> 'How to Get Kids to Interact with Your Dog'</p>
                        </li>
                    </ul>
                </div>
                <div class="important_note_wrapper">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.99984 1.91699C5.39984 1.91699 1.6665 5.65033 1.6665 10.2503C1.6665 14.8503 5.39984 18.5837 9.99984 18.5837C14.5998 18.5837 18.3332 14.8503 18.3332 10.2503C18.3332 5.65033 14.5998 1.91699 9.99984 1.91699ZM9.99984 11.0837C9.5415 11.0837 9.1665 10.7087 9.1665 10.2503V6.91699C9.1665 6.45866 9.5415 6.08366 9.99984 6.08366C10.4582 6.08366 10.8332 6.45866 10.8332 6.91699V10.2503C10.8332 10.7087 10.4582 11.0837 9.99984 11.0837ZM10.8332 14.417H9.1665V12.7503H10.8332V14.417Z" fill="#734F22" />
                    </svg>
                    <p><b>IMPORTANT NOTE: </b> This offer is <b>time limited</b>, so please use it while you can.</p>
                </div>
                <div class="btn_wrapper">
                    <button class="blue_accept_btn special_offer_btn">
                        <span>GET MY SPECIAL OFFER</span>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2418 8.73307L4.47513 5.49974L1.2418 2.26641C0.916797 1.94141 0.916797 1.41641 1.2418 1.09141C1.5668 0.766406 2.0918 0.766406 2.4168 1.09141L6.2418 4.91641C6.5668 5.24141 6.5668 5.76641 6.2418 6.09141L2.4168 9.9164C2.0918 10.2414 1.5668 10.2414 1.2418 9.9164C0.92513 9.5914 0.916797 9.05807 1.2418 8.73307Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    let contentPopupFifth = /*html */ `
        <div class="content_popup" data-popup="5">
            <div class="img_wrapper">
                <div class="reviews_wrap">
                    <div class="reviews_block">
                        <h4>50,000+ dog owners have already trained their dogs with The Total Transformation Masterclass</h4>
                        <div class="stars_block">
                            <p class="stars_wrapper">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                            <span>4.9</span>
                        </div>
                        <p class="reviews_txt">1597 Sitejabber & Trustpilot reviews</p>
                    </div>
                    <div class="guaranted_wrapper">
                        <img src="https://conversionratestore.github.io/projects/knineti/img/watched_more_than_35_img.png" alt="guaranted img" />
                    </div>
                </div>
            </div>
            <div class="main_txt_wrapper">
                <h2 class="title_var">Give the program a try – RISK-FREE</h2>
                <div class="txt_list_box">
                  <h3 class="subtitle_var">We offer a market-leading guarantee:</h3>
                  <ul class="txt_list">
                          <li class="txt_link">
                              <p>Your dog WILL TOTALLY transform in 10 weeks with the help of <b>personal coaching</b> from our training experts</p>
                          </li>
                          <li class="txt_link">
                              <p>You can pay in <b>3 interest-free installments</b></p>
                          </li>
                          <li class="txt_link">
                              <p>You can claim your <b>money back</b> within <b>90 days</b> if in any way dissatisfied.</p>
                          </li>
                  </ul>
                </div>
                <div class="guaranted_wrapper mobile_var">
                  <img src="https://conversionratestore.github.io/projects/knineti/img/watched_more_than_35_img.png" alt="guaranted img" />
                </div>
                <div class="important_note_wrapper">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99984 1.91699C5.39984 1.91699 1.6665 5.65033 1.6665 10.2503C1.6665 14.8503 5.39984 18.5837 9.99984 18.5837C14.5998 18.5837 18.3332 14.8503 18.3332 10.2503C18.3332 5.65033 14.5998 1.91699 9.99984 1.91699ZM9.99984 11.0837C9.5415 11.0837 9.1665 10.7087 9.1665 10.2503V6.91699C9.1665 6.45866 9.5415 6.08366 9.99984 6.08366C10.4582 6.08366 10.8332 6.45866 10.8332 6.91699V10.2503C10.8332 10.7087 10.4582 11.0837 9.99984 11.0837ZM10.8332 14.417H9.1665V12.7503H10.8332V14.417Z" fill="#734F22" />
                        </svg>
                        <p><b>IMPORTANT NOTE: </b> This offer is <b>time limited</b>, so please use it while you can.</p>
                </div>
                <div class="btn_wrapper">
                        <button class="blue_accept_btn new_enroll_now_btn">
                            <span>ENROLL NOW</span>
                            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.2418 8.73307L4.47513 5.49974L1.2418 2.26641C0.916797 1.94141 0.916797 1.41641 1.2418 1.09141C1.5668 0.766406 2.0918 0.766406 2.4168 1.09141L6.2418 4.91641C6.5668 5.24141 6.5668 5.76641 6.2418 6.09141L2.4168 9.9164C2.0918 10.2414 1.5668 10.2414 1.2418 9.9164C0.92513 9.5914 0.916797 9.05807 1.2418 8.73307Z" fill="white" />
                            </svg>
                        </button>
                </div>
            </div>
            </div>
        </div>
    `;

    document.head.insertAdjacentHTML("beforeend", popupStyle);
    document.body.insertAdjacentHTML("afterbegin", popUp);

    document.querySelectorAll(".enroll_now_btn ").forEach((el) => {
      el.addEventListener("click", () => {
        sessionStorage.setItem("exit_popup_loaded", "true");
      });
    });

    window.onunload = unloadPage;
    function unloadPage() {
      console.log("unload event detected!");
      if (sessionStorage.getItem("special_offer") && sessionStorage.getItem("exit_popup_loaded") && !sessionStorage.getItem("special_offer_end")) {
        let start = setInterval(() => {
          if (document.querySelector(".fp-play.fp-visible")) {
            clearInterval(start);
            sessionStorage.setItem("special_offer_end", "true");
            startVideo();
            let v = setInterval(() => {
              if (document.querySelector("video")) {
                clearInterval(v);
                document.querySelector("video").currentTime = 60 * 35;
                console.log(document.querySelector("video").currentTime, `document.querySelector("video").currentTime`);
              }
            }, 10);
          }
        }, 10);
      }
    }

    exitIntentPopup();
    function exitIntentPopup() {
      //   EXIT INTENT popup
      if (document.querySelector(".overlay_popup")) {
        let overlay = document.querySelector(".overlay_popup"),
          containerPopup = overlay.querySelector(".container_popup"),
          btnClose = overlay.querySelector(".btn_close"),
          scroll = calcScroll();

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
          setTimeout(() => {
            if (sessionStorage.getItem("exit_popup_loaded") == null && !document.querySelector("video")) {
              sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
              onOpenPopup(); //show popup
            }
          }, 10000);

          let p = setInterval(() => {
            if (sessionStorage.getItem("exit_popup_loaded") == null && document.querySelector("video") && !document.querySelector(".fp-play.fp-visible")) {
              clearInterval(p);
              let o = setInterval(() => {
                if (document.querySelector(".fp-play.fp-visible")) {
                  clearInterval(o);
                  sessionStorage.setItem("exit_popup_loaded", "true"); //refresh status popup
                  onOpenPopup(); //show popup
                }
              }, 10);
            }
          }, 10);

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
          pausedVideo();
          overlay.classList.remove("is_hidden");
          document.querySelector("body").classList.add("open_var");
          document.body.style.marginRight = `${scroll}px`;

          if (!document.querySelector(".overlay_popup .content_popup") && !document.querySelector("video")) {
            containerPopup?.insertAdjacentHTML("beforeend", contentPopupFirst);
            onClickBlueBtn();
            onClickDoNotWantBtn();
          }

          let intevalVideo = setInterval(() => {
            if (document.querySelector("video")) {
              clearInterval(intevalVideo);
              document.querySelector(".overlay_popup .content_popup")?.remove();
              timerVideo();

              onClickBlueBtn();
              onClickDoNotWantBtn();

              let t = setInterval(() => {
                if (document.querySelector(".input_test_email")) {
                  clearInterval(t);
                  onInput();
                }
              }, 10);
            }
          }, 10);
        }

        btnClose.addEventListener("click", (e) => {
          pushDataLayer("Close popup (Cross icon)", `${e.target.closest(".container_popup").querySelector(".title_var").textContent}`);
          onClosePopup(); // click on btn close popup
        });
        overlay.addEventListener("click", (e) => {
          if (e.target.matches(".overlay_popup")) {
            pushDataLayer("Close popup (Out of popup)", `${e.target.querySelector(".title_var").textContent}`);
            onClosePopup(); // click on overlay popup
          }
        });
        function onClosePopup() {
          overlay.classList.add("is_close");
          if (document.querySelector("body").classList.contains("open_var")) {
            document.querySelector("body").classList.remove("open_var");
          }
        }

        function onClickBlueBtn() {
          document.querySelectorAll(".blue_accept_btn").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (e.currentTarget.classList.contains("new_enroll_now_btn")) {
                pushDataLayer("Enroll now", 'Popup 4: Encourage to click "Enroll"');
                document.querySelector(".top_menu_box .showModal").click();
              }
              if (e.currentTarget.classList.contains("special_offer_btn")) {
                pushDataLayer("Get my special offer", "Popup 3: Mahe the user to get special offer after minute 30 till 35 ($297 instead of $497)");
                sessionStorage.setItem("special_offer", "true");
                window.location.reload();
              }
              if (e.currentTarget.classList.contains("continue_watch_btn")) {
                switch (e.currentTarget.closest(".content_popup").getAttribute("data-popup")) {
                  case "1":
                    pushDataLayer("Start Watching Now", "Popup 1: Encourage to start watching the video");
                    break;
                  case "2":
                    pushDataLayer("Continue watching", "Popup 2.1: Encourage to watch more than 5 minutes of the video.");
                    break;
                  case "3":
                    pushDataLayer("Continue watching", "Popup 2.2: Encourage to watch more than 30 minutes of the video.");
                    break;
                  default:
                    break;
                }
                onClosePopup();
                startVideo();
              }
              if (e.currentTarget.getAttribute("data-validation")) {
                pushDataLayer("Get a reminder", "Popup 2.3: Encourage to watch more than 30 minutes of the video. Email");
                onClosePopup();
                startVideo();
              }
            });
          });
        }

        function onClickDoNotWantBtn() {
          document.querySelectorAll(".do_not_want_btn").forEach((el) => {
            el.addEventListener("click", (e) => {
              if (e.currentTarget.classList.contains("no_train_btn")) {
                pushDataLayer("I don’t want to train my dog", "Popup 1: Encourage to start watching the video");
                onClosePopup();
              }
              if (e.currentTarget.getAttribute("data-email")) {
                switch (e.currentTarget.closest(".content_popup").getAttribute("data-popup")) {
                  case "2":
                    pushDataLayer("I don't have time now. Remind me later.", "Popup 2.1: Encourage to watch more than 5 minutes of the video.");
                    break;
                  case "3":
                    pushDataLayer("I don't have time now. Remind me later.', 'Popup 2.2: Encourage to watch more than 30 minutes of the video.");
                    break;
                  default:
                    break;
                }

                e.currentTarget.closest(".container_popup").classList.add("email_step");
                e.currentTarget.closest(".container_popup").querySelector(".blue_accept_btn span").textContent = "GET A REMINDER";
                e.currentTarget.closest(".container_popup").querySelector(".blue_accept_btn").setAttribute("data-validation", `true`);
                e.currentTarget.closest(".container_popup").querySelector(".blue_accept_btn").disabled = true;
                e.currentTarget.closest(".container_popup").querySelector(".img_wrapper img").src = "https://conversionratestore.github.io/projects/knineti/img/email_address_img_opt.png";
                e.currentTarget.closest(".container_popup").querySelector(".title_var").textContent = "Enter your email address to receive a reminder";
                e.currentTarget.closest(".container_popup").querySelector(".descr_var").textContent = "We'll email you a link to access the FREE workshop at your convenience.";
                e.currentTarget
                  .closest(".container_popup")
                  .querySelector(".descr_var")
                  .insertAdjacentHTML(
                    "afterend",
                    `<label class="test_email_label">
                    <span class="name_test_email_label">Email</span>
                    <input class="input_test_email" type="email" name="emailTest" id="emailTest" />
                    </label>`
                  );

                e.currentTarget.closest(".container_popup").querySelector(".subtitle_var")?.classList.add("is_hidden");
                e.currentTarget.closest(".container_popup").querySelector(".txt_list_box")?.classList.add("is_hidden");
                e.currentTarget.closest(".container_popup").querySelector(".important_note_wrapper")?.classList.add("is_hidden");
                e.currentTarget.closest(".container_popup").querySelector("much_more_txt")?.classList.add("is_hidden");
                e.currentTarget.classList.add("is_hidden");
              }
            });
          });
        }
      }
    }

    function timerVideo() {
      if (document.querySelector("video")) {
        const videoItem = document.querySelector("video");
        // document.querySelector("video").currentTime=4*60

        if (videoItem.currentTime < 5 * 60) {
          console.log(`Users who watched less than 5 minutes of video`);
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupSecond);
          }
        } else if (videoItem.currentTime >= 5 * 60 && videoItem.currentTime < 30 * 60) {
          console.log(`Users who watched less than 30 minutes of video but more than 5 minutes of video`);
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupThird);
          }
        } else if (videoItem.currentTime >= 30 * 60 && videoItem.currentTime < 35 * 60) {
          console.log(`Users who watched less than 35 minutes of video but more than 30 minutes of video`);
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupFourth);
          }
        } else if (videoItem.currentTime >= 35 * 60) {
          console.log(`Users who watched more than 35 minutes of video`);
          if (!document.querySelector(".overlay_popup .content_popup")) {
            document.querySelector(".overlay_popup .container_popup")?.insertAdjacentHTML("beforeend", contentPopupFifth);
          }
        }
      }
    }

    function onInput() {
      document.querySelector(".input_test_email").addEventListener("input", () => {
        validationForm();
      });
      document.querySelector(".test_email_label").addEventListener("click", () => {
        pushDataLayer("Input. Email", "Popup 2.3: Encourage to watch more than 30 minutes of the video. Email");
      });
    }

    function validationForm() {
      let inputValueEmail = document.querySelector(`input[name='emailTest']`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

      if (inputValueEmail === null) {
        document.querySelector(`input[name='emailTest']`)?.closest("label").classList.add("label_error");
        if (!document.querySelector(`.text_validation.email_var`)) {
          document.querySelector(`input[name='emailTest']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation email_var">Please enter a valid email address.</p>`);
        }
        document.querySelector(".blue_accept_btn").disabled = true;
      } else {
        document.querySelector(`input[name='emailTest']`)?.closest("label").classList.remove("label_error");
        document.querySelector(`.text_validation.email_var`)?.remove();
        document.querySelector(".blue_accept_btn").disabled = false;
      }
    }

    function pausedVideo() {
      if (!document.querySelector(".flowplayer.is-paused .fp-ui")) {
        document.querySelector(".flowplayer .fp-ui").click();
      }
    }
    function startVideo() {
      if (document.querySelector(".flowplayer.is-paused .fp-ui")) {
        document.querySelector(".flowplayer.is-paused .fp-ui")?.click();
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

    // IntersectionObserver
    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    });
    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 1,
    });
    let int = setInterval(() => {
      if (document.querySelector('[data-popup="1"]')) {
        clearInterval(int);
        obs.observe(document.querySelector('[data-popup="1"]'));
      }
    }, 100);
    let int2 = setInterval(() => {
      if (document.querySelector('[data-popup="2"]')) {
        clearInterval(int2);
        obs.observe(document.querySelector('[data-popup="2"]'));
      }
    }, 100);
    let int3 = setInterval(() => {
      if (document.querySelector('[data-popup="3"]')) {
        clearInterval(int3);
        obs.observe(document.querySelector('[data-popup="3"]'));
      }
    }, 100);
    let int4 = setInterval(() => {
      if (document.querySelector('[data-popup="4"]')) {
        clearInterval(int4);
        obs.observe(document.querySelector('[data-popup="4"]'));
      }
    }, 100);
    let int5 = setInterval(() => {
      if (document.querySelector('[data-popup="5"]')) {
        clearInterval(int5);
        obs.observe(document.querySelector('[data-popup="5"]'));
      }
    }, 100);
    let int6 = setInterval(() => {
      if (document.querySelector(".container_popup.email_step")) {
        clearInterval(int6);
        obs.observe(document.querySelector(".container_popup.email_step"));
      }
    }, 100);
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
          if (i.target.classList.contains("email_step")) {
            pushDataLayer("View element on screen", "Popup 2.3: Encourage to watch more than 30 minutes of the video. Email");
          }
          switch (i.target.getAttribute("data-popup")) {
            case "1":
              pushDataLayer("View element on screen", "Popup 1: Encourage to start watching the video");
              break;
            case "2":
              pushDataLayer("View element on screen", "Popup 2.1: Encourage to watch more than 5 minutes of the video.");
              break;
            case "3":
              pushDataLayer("View element on screen", "Popup 2.2: Encourage to watch more than 30 minutes of the video.");
              break;
            case "4":
              pushDataLayer("View element on screen", "Popup 3: Mahe the user to get special offer after minute 30 till 35 ($297 instead of $497)");
              break;
            case "5":
              pushDataLayer("View element on screen", 'Popup 4: Encourage to click "Enroll"');
              break;
            default:
              break;
          }
          obs.unobserve(i.target);
        }
        obs2.unobserve(i.target);
      });
    }

    pushDataLayer("loaded");
    const recordMF = setInterval(() => {
      if (typeof window._mfq === "object") {
        clearInterval(recordMF);
        window._mfq.push(["setVariable", "exp_exit_intent_popup", "var1"]);
      }
    }, 200);
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "exp_exit_intent_popup", "variant_1");
      }
    }, 200);
    document.querySelector(".exp")?.remove();
  }
}, 100);
