let myFunk = setInterval(() => {
  if (document.querySelector("#webform-submission-grantme-program-assessment-add-form")) {
    clearInterval(myFunk)

    // cdn slider
    let scriptCustomSlider = document.createElement("script")
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
    scriptCustomSlider.async = false
    document.head.appendChild(scriptCustomSlider)

    let scriptCustomSliderStyle = document.createElement("link")
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
    scriptCustomSliderStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomSliderStyle)

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
          eventCategory: `Exp: Exp: Remove barriers on quiz ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: Exp: Remove barriers on quiz ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let newStyle = /*html */ `
    <style>
        .program_assessment_var {
          font-weight: 700;
          font-size: 18px;
          line-height: 26px;
          color: #2b3d50;
          text-align: center;
          margin: 0 0 11px;
        }
        .form-group {
          position: relative;
        }
        .back_btn_var {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
          text-align: left;
          text-transform: uppercase;
          color: #3d78ba;
          margin-bottom: 16px;
        }
        .back_btn_var svg {
          margin-right: 9px;
        }
        #edit-are-you-a-current-student- .back_btn_var {
          opacity: 0;
          visibility: hidden;
        }
        .time-left {
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
          text-transform: uppercase;
          color: #8b8b8b;
          position: absolute;
          right: 0;
          top: 0;
        }
        .path-grantme-program-assessment .quiz-question {
          font-weight: 900 !important;
        }
        .quiz-section {
          font-weight: 700 !important;
          line-height: 14px !important;
          border-top: 1px solid #e6e6e6;
          padding-top: 16px;
        }
        .path-grantme-program-assessment .navbar .logo {
          padding: 16px 0;
        }
        .navbar-header .logo img {
          width: 100% !important;
          max-width: 90px !important;
        }
        .webform-progress ul {
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
        }
        .path-scholarship-eligibility-quiz .webform-progress ul li {
          background: #e9f3fa;
        }
        .path-scholarship-eligibility-quiz .webform-progress ul li + li {
          margin-left: 1px;
        }
        .path-scholarship-eligibility-quiz .webform-progress ul li:last-of-type,
        .path-scholarship-eligibility-quiz .webform-progress ul li:first-of-type {
          border-radius: 0;
        }
        .row {
          margin-left: 0 !important;
          margin-right: 0 !important;
        }
        .col-md-8,
        .col-md-4 {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        .panel-body {
          padding-left: 20px;
          padding-right: 20px;
        }
        #edit-qa13-wrap {
          margin-bottom: 16px !important;
          display: none;
        }
        .path-grantme-program-assessment .webform-card-wrapper .panel .panel-body {
          padding-bottom: 0;
        }
        #edit-q1,
        #edit-qa17-wrap {
          margin-bottom: 130px !important;
        }
        #edit-qa2-wrap,
        #edit-qa3-wrap,
        #edit-qa4-wrap,
        #edit-qa5-wrap,
        #edit-qa6-wrap,
        #edit-qa7-wrap,
        #edit-qa8-wrap,
        #edit-qa14-wrap,
        #edit-qa9-wrap,
        #edit-qa10-wrap,
        #edit-qa11-wrap,
        #edit-qa12-wrap {
          margin-bottom: 30px !important;
        }
        #edit-processed-text-10,
        #edit-processed-text-44 .scholarship-eligibility-quiz-quote,
        #edit-processed-text-12,
        .path-grantme-program-assessment h3.quiz-title,
        [for="edit-if-selected-for-our-program-30-minutes"],
        #edit-cards-next,
        #edit-cards-next--2,
        #edit-cards-next--3,
        #edit-cards-next--4,
        #edit-cards-next--5,
        #edit-cards-next--6,
        #edit-cards-next--7,
        #edit-cards-next--8,
        #edit-cards-next--9,
        #edit-cards-next--10,
        #edit-cards-next--13,
        #edit-cards-next--14,
        #edit-cards-prev--2,
        #edit-cards-prev--3,
        #edit-cards-prev--4,
        #edit-cards-prev--5,
        #edit-cards-prev--6,
        #edit-cards-prev--7,
        #edit-cards-prev--8,
        #edit-cards-prev--9,
        #edit-cards-prev--10,
        #edit-cards-prev--11,
        #edit-cards-prev--12,
        #edit-cards-prev--13,
        #edit-cards-prev--14,
        #edit-cards-prev--15,
        html.js .webform-cards .form-actions:not(#edit-actions-13, #edit-actions-14, #edit-actions-10),
        #edit-what-school-are-you-interested-in-attending-
          .js-form-type-select.form-item-what-school-are-you-interested-in-attending.js-form-item-what-school-are-you-interested-in-attending.form-no-label.form-group,
        #edit-what-field-of-study-are-you-looking-to-study-currently-studying-
          .js-form-type-select.form-item-what-field-of-study-are-you-looking-to-study-currently-studying.js-form-item-what-field-of-study-are-you-looking-to-study-currently-studying {
          display: none !important;
        }
        .path-scholarship-eligibility-quiz .webform-submission-form label {
          margin-bottom: 6px;
        }
        form #edit-actions-10-submit {
          width: 100%;
          font-size: 16px;
          line-height: 19px;
          height: 44px;
          margin: 0;
        }
        .skip_var label {
          background: unset !important;
          border: unset !important;
          font-weight: 700 !important;
          font-size: 14px !important;
          line-height: 17px !important;
          text-align: center !important;
          color: #8c8c8c !important;
          width: max-content;
          margin: 0 auto !important;
        }
        .skip_var.form-type-radio {
          margin: 22px auto 0 !important;
          text-align: center;
        }
        /*back_btn_wrap */
        .back_btn_wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid #e6e6e6;
        }
        .guarantee_block .scroll_var {
          margin-top: 16px;
          display: block;
        }
        .back_btn_wrap .back_btn_var {
          margin: 0;
        }
        .back_btn_wrap p {
          font-weight: 700;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          text-transform: uppercase;
          color: #8b8b8b;
        }
        /*loader_wrap */
        .loader_wrap .back_btn_wrap {
          padding: 16px 20px;
        }
        .loader_list {
          padding: 20px 20px 41px;
          margin: 0;
          list-style: none;
        }
        .loader_list li {
          position: relative;
          padding: 0 0 0 29px;
          transition: 0.3s;
        }
        .loader_list li::before {
          position: absolute;
          content: "";
          width: 16px;
          height: 16px;
          background: url(https://conversionratestore.github.io/projects/grantme/img/full_load.svg) no-repeat;
          background-size: contain;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        @-webkit-keyframes infinite-spinning {
          from {
            -webkit-transform: rotate(0deg);
            transform: translateY(-50%) rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            transform: translateY(-50%) rotate(360deg);
          }
        }
        @keyframes infinite-spinning {
          from {
            -webkit-transform: translateY(-50%) rotate(0deg);
            transform: translateY(-50%) rotate(0deg);
          }
          to {
            -webkit-transform: translateY(-50%) rotate(360deg);
            transform: translateY(-50%) rotate(360deg);
          }
        }
        .loader_list li.active::before {
          -webkit-animation: infinite-spinning 2s infinite linear;
          animation: infinite-spinning 2s infinite linear;
          background: url(https://conversionratestore.github.io/projects/grantme/img/part_load.svg) no-repeat;
          background-size: contain;
        }
        .loader_list li.finish::before {
          background: url(https://conversionratestore.github.io/projects/grantme/img/checked.svg) no-repeat;
          background-size: contain;
          height: 10px;
        }
        .loader_list li span {
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          color: #8b8b8b;
        }
        .loader_list li.finish span {
          color: #2b3d50;
        }
        .loader_list li + li {
          margin-top: 16px;
        }
        /*guarantee_block */
        .guarantee_block {
          margin-bottom: 24px;
        }
        .grant_me_wrap {
          background: #2b3d50;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        .grant_me_wrap p {
          font-weight: 400;
          font-size: 15px;
          line-height: 26px;
          color: #ffffff;
          margin: 0 0 0 16px;
        }
        .benefits_wrap > p {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #2b3d50;
          margin-bottom: 16px;
        }
        .benefits_wrap ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .benefits_wrap ul li {
          position: relative;
          padding-left: 52px;
        }
        .benefits_wrap ul li::before {
          position: absolute;
          content: "";
          width: 40px;
          height: 40px;
          background: url(https://conversionratestore.github.io/projects/grantme/img/graduation_hat.svg) no-repeat;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .benefits_wrap ul li:nth-child(2):before {
          background: url(https://conversionratestore.github.io/projects/grantme/img/scholarship.svg) no-repeat;
        }
        .benefits_wrap ul li:nth-child(3):before {
          background: url(https://conversionratestore.github.io/projects/grantme/img/product.svg) no-repeat;
        }
        .benefits_wrap ul li:nth-child(4):before {
          background: url(https://conversionratestore.github.io/projects/grantme/img/diploma.svg) no-repeat;
        }
        .benefits_wrap ul li + li {
          margin-top: 12px;
        }
        .benefits_wrap ul li span {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #2b3d50;
        }
        /*reviews_block */
        .reviews_block {
          padding: 20px 20px 40px;
        }
        .new_reviews {
          padding: 0;
          margin: 0;
          display: flex;
          gap: 20px;
          flex-direction: column;
          list-style: none;
        }
        .new_reviews .reviews_link {
          background: #ffffff;
          border-radius: 6px;
          padding: 20px;
        }
        .new_reviews .reviews_link > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #2b3d50;
          margin: 0;
        }
        .new_reviews .reviews_link > p.date_experience_var {
          margin-top: 16px;
        }
        .inform_box {
          display: flex;
          position: relative;
        }
        .inform_box .img_wrap {
          max-width: 50px;
          max-height: 50px;
          margin-right: 16px;
        }
        .inform_box .img_wrap img {
          width: 100%;
          height: 100%;
        }
        .name_var {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #2b3d50;
          margin: 0 0 6px;
        }
        .revw_var {
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          color: #8b8b8b;
          margin: 0;
        }
        .local_wrap {
          position: absolute;
          display: flex;
          align-items: center;
          right: 0;
          bottom: 8px;
        }
        .local_var {
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          color: #2b3d50;
          margin: 0 0 0 6px;
        }
        .stars_box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f3f3f3;
          margin: 16px -20px;
          padding: 16px 20px;
        }
        .stars_var {
          display: flex;
          align-items: center;
        }
        .stars_var img {
          max-width: 88px;
          max-height: 16px;
        }
        .stars_var span {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #2b3d50;
          margin: 0 0 0 4px;
        }
        .date_var {
          display: flex;
          align-items: center;
        }
        .date_var span {
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;
          color: #2b3d50;
          margin: 0 0 0 6px;
        }
        .load_more_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 44px;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.05em;
          text-align: center;
          color: #ffffff;
          margin-top: 20px;
          border: 2px solid #ffffff;
          border-radius: 6px;
        }
        [data-count="3"] {
          display: none;
        }
        .policy_var {
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #2b3d50;
        }
        .policy_var a {
          color: rgba(61, 120, 186, 1);
          text-decoration: underline;
        }
        .is_hidden {
          display: none;
        }

        .checkbox_block + .checkbox_block {
          margin-top: 12px;
        }
        .checkbox_block input.custom_checkbox {
          position: absolute;
          z-index: -1;
          opacity: 0;
        }
        .checkbox_block label {
          width: 100%;
          border: 2px solid #3d78ba;
          border-radius: 6px;
          padding: 12px;
          margin: 0 auto !important;
          font-weight: 700;
          font-size: 16px !important;
          line-height: 22px !important;
          color: #3d78ba !important;
          user-select: none;
          display: flex;
          align-items: center;
          cursor: pointer;
          text-align: left;
        }

        .checkbox_block .custom_checkbox + label::before {
          content: "";
          display: inline-block;
          width: 22px;
          height: 22px;
          flex-shrink: 0;
          flex-grow: 0;
          background: #ffffff;
          border: 2px solid #3d78ba;
          border-radius: 4px;
          margin-right: 12px;
        }

        .checkbox_block .custom_checkbox:checked + label::before {
          background-image: url(https://conversionratestore.github.io/projects/grantme/img/checkbox.svg);
          background-size: auto;
          background-repeat: no-repeat;
          background-position: center center;
        }
        #edit-cards-next--11,
        #edit-cards-next--12 {
          width: 100%;
        }
        #edit-cards-next--11.btn-default[disabled],
        #edit-cards-next--11.btn-default[disabled]:hover,
        #edit-cards-next--11.btn-default[disabled]:focus {
          background: #e0e0e0;
          border-radius: 6px;
          border: 1px solid #e0e0e0;
          color: #ffffff;
        }
        .checkbox_block label[for="skip_school_are_you_interested_in_attending_var"],
        .checkbox_block label[for="skip_study_are_you_looking_to_study_currently_studying_var"] {
          border: unset;
          text-align: center;
          color: #8c8c8c !important;
          font-size: 14px !important;
          line-height: 17px !important;
          display: block;
          padding: 0;
          width: max-content;
        }
        .checkbox_block label[for="skip_school_are_you_interested_in_attending_var"] {
          display: none;
        }
        .checkbox_block .custom_checkbox + label[for="skip_school_are_you_interested_in_attending_var"]::before,
        .checkbox_block .custom_checkbox + label[for="skip_study_are_you_looking_to_study_currently_studying_var"]::before {
          display: none;
        }
        #edit-actions-13,
        #edit-actions-14 {
          margin: 30px 0 !important;
        }
        textarea.other_textarea {
          resize: none;
          border-radius: 6px;
          border: 2px solid #3d78ba;
          border-top-left-radius: unset;
          border-top-right-radius: unset;
          width: 100%;
          margin-top: -4px;
          padding: 12px 16px;
          min-height: 74px;
          color: #3d78ba;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        textarea.other_textarea::placeholder {
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
          color: #999999;
        }
        @media (min-width: 991px) {
          .path-grantme-program-assessment #block-landingpageheaderquiz .col-md-4.bluebg {
            margin: 0;
          }
          .navbar-header .logo img {
            max-width: 240px !important;
          }
          .path-grantme-program-assessment .navbar .logo {
            padding: 35px 0 30px;
          }
          .program_assessment_var {
            margin: 0 0 16px;
          }
          .path-grantme-program-assessment .quiz-question {
            line-height: 26px;
            margin-bottom: 14px;
          }
          .webform-progress ul {
            margin: 16px 0;
          }
          #webform-submission-grantme-program-assessment-add-form .col.col-md-4.bluebg.hidden-xs.hidden-sm {
            height: 46px;
          }
          .program_assessment_wrap {
            display: flex;
          }
          .program_assessment_var {
            margin: 0 auto;
            float: left;
          }
          .program_assessment_wrap > div {
            width: 33.33333333%;
          }
          .path-grantme-program-assessment .seqq-img {
            border-top: 1px solid rgb(230 230 230 / 10%);
            padding-top: 40px;
          }
          .path-scholarship-eligibility-quiz .seqq-row {
            margin-top: 28px;
          }
          .back_btn_var {
            width: max-content;
            cursor: pointer;
          }
          .skip_var.form-type-radio {
            margin: 30px auto 0 !important;
          }
          #edit-qa13-wrap,
          #edit-processed-text-44 {
            width: 100%;
          }
          #edit-processed-text-44 {
            background: #f3f3f3;
          }
          #edit-qa13-wrap {
            margin-bottom: 40px !important;
          }
          .load_more_btn {
            display: none;
          }
          [data-count="3"] {
            display: block;
          }
          .new_reviews {
            display: block;
          }
          .grant_me_wrap {
            padding: 24px 30px;
            margin-bottom: 30px;
          }
          .grant_me_wrap div {
            max-width: 54px;
            max-height: 54px;
          }
          .grant_me_wrap p b {
            display: block;
          }
          .guarantee_block .scroll_var {
            margin-top: 30px;
          }
          .benefits_wrap ul li {
            min-height: 40px;
            display: flex;
            align-items: center;
            width: max-content;
          }
          .loader_wrap {
            max-width: 600px;
            margin: 0 auto;
          }
          .loader_list {
            padding: 50px 0 106px;
            max-width: 350px;
            margin: 0 auto;
          }
          form > .row > .col.col-md-8.last_step_var {
            width: 100%;
          }
          .path-grantme-program-assessment #block-landingpageheaderquiz .col-md-4.bluebg.last_step_var,
          #webform-submission-grantme-program-assessment-add-form .col.col-md-4.bluebg.hidden-xs.hidden-sm.last_step_var {
            display: none;
          }
          .program_assessment_wrap.last_step_var {
            display: block;
          }
          .program_assessment_var.last_step_var {
            float: unset;
          }
          #block-landingpageheaderquiz .row > .col.col-md-8.col-xs-12.last_step_var {
            width: 100%;
          }
          .policy_var {
            margin-bottom: 24px !important;
          }
          .new_reviews .slick-arrow {
            position: absolute;
            bottom: -80px;
            z-index: 2;
            cursor: pointer;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            border: 2px solid #3d78ba;
            line-height: 0;
            font-size: 0;
          }
          .new_reviews .slick-arrow.slick-prev {
            left: 45%;
          }
          .new_reviews .slick-arrow.slick-next {
            right: 45%;
          }
          .new_reviews .slick-arrow.slick-next::after,
          .new_reviews .slick-arrow.slick-prev::after {
            position: absolute;
            content: "";
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 16px;
            height: 16px;
          }
          .new_reviews .slick-arrow.slick-next::after {
            background-image: url(https://conversionratestore.github.io/projects/grantme/img/slick-next.svg);
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center center;
          }
          .new_reviews .slick-arrow.slick-prev::after {
            background-image: url(https://conversionratestore.github.io/projects/grantme/img/slick-prev.svg);
            background-size: auto;
            background-repeat: no-repeat;
            background-position: center center;
          }
          .slick-slide > div {
            padding: 0 10px;
          }
          .slider_wrapper {
            overflow: hidden;
            margin: 0 auto;
            padding: 0 0 80px;
          }
          .new_reviews .slick-list {
            overflow: visible;
          }
          .reviews_block {
            position: relative;
            padding: 40px 74px;
            opacity: 0;
            transition: all 0.35s ease;
          }
          .reviews_block.ative_right:after {
            position: absolute;
            content: "";
            right: 0;
            top: 0;
            background: linear-gradient(270deg, #f3f3f3 20%, rgba(243, 243, 243, 0) 100%);
            width: 390px;
            height: 100%;
          }
          .reviews_block.ative_left:before {
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            background: linear-gradient(90deg, #f3f3f3 20%, rgba(243, 243, 243, 0) 100%);
            width: 390px;
            height: 100%;
            z-index: 1;
          }
          #edit-actions-13,
          #edit-actions-14 {
            margin: 24px 0 !important;
          }
          .checkbox,
          .radio {
            margin-top: 16px;
            margin-bottom: 16px;
          }
          .form-group {
            margin-bottom: 14px;
          }
          .path-scholarship-eligibility-quiz .js-webform-radios label:not(.error) {
            height: 46px;
            border: 2px solid #3d78ba;
            border-radius: 6px;
            line-height: 22px;
          }
          .checkbox_block .custom_checkbox:checked + label::before {
            background-size: auto 73%;
          }
          #edit-what-field-of-study-are-you-looking-to-study-currently-studying- .quiz-right-wrap,
          #edit-what-school-are-you-interested-in-attending- .quiz-right-wrap,
          #edit-how-many-extracurricular-or-volunteer-activities-do-you-particip .quiz-right-wrap {
            min-height: 100vh;
          }
        }
    </style>
    `
    let text1 = ""
    let text2 = "you're"
    let text3 = "you"
    let text4 = ""

    let reviews = /*html */ `
    <div class="reviews_block ative_right">
      <div class="slider_wrapper">
        <div class="new_reviews"></div>
      </div>
        <span class="load_more_btn">LOAD MORE</span>
    </div>
    `

    let loaderWrap = /*html */ `
    <div class="loader_wrap">
      <div class="back_btn_wrap">
          <span class="back_btn_var"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 7L8 13" stroke="#3D78BA" stroke-width="2"/></svg>Back</span>
          <p>1 minute left</p>
      </div>
      <ul class="loader_list">
        <li><span>Reviewing your responses</span></li>
        <li><span>Calculating your <span class="text_first">${text1}</span> score</span></li>
        <li><span>Assessing admission chances</span></li>
        <li><span>Searching for scholarship opportunities</span></li>
        <li><span>Checking how much funding <span class="text_second">${text2}</span> eligible for</span></li>
        <li><span>Preparing your results</span></li>
      </ul>
    </div>
      `

    let guaranteeBlock = /*html */ `
    <div class="guarantee_block">
      <div class="back_btn_wrap">
        <span class="back_btn_var"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 7L8 13" stroke="#3D78BA" stroke-width="2"/></svg>Back</span>
        <p>1 minute left</p>
      </div>
      <span class="scroll_var"></span>
      <div class="grant_me_wrap">
        <div>
          <svg width="57" height="57" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4401 9.44336C18.9211 9.44336 12.0049 16.3596 12.0049 24.8786C12.0049 33.3977 18.9211 40.3139 27.4401 40.3139C35.9592 40.3139 42.8754 33.3977 42.8754 24.8786C42.8754 16.3596 35.9592 9.44336 27.4401 9.44336ZM27.4401 11.8186C34.6484 11.8186 40.5001 17.6703 40.5001 24.8786C40.5001 32.0869 34.6484 37.9386 27.4401 37.9386C20.2319 37.9386 14.3801 32.0869 14.3801 24.8786C14.3801 17.6703 20.2319 11.8186 27.4401 11.8186Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.5726 14.9281C28.3754 14.5136 27.9586 14.25 27.5002 14.25C27.0418 14.25 26.625 14.5136 26.4279 14.9281L23.9757 20.0866L18.3113 20.824C17.8577 20.8834 17.4777 21.1992 17.3352 21.6351C17.1939 22.0709 17.3162 22.5494 17.6487 22.8641L21.7978 26.79L20.7493 32.4057C20.665 32.8558 20.8478 33.3141 21.2183 33.5837C21.5888 33.8533 22.0817 33.8853 22.4842 33.6656L27.5002 30.9332L32.5162 33.6656C32.9188 33.8853 33.4116 33.8533 33.7821 33.5837C34.1526 33.3141 34.3355 32.8558 34.2512 32.4057L33.2026 26.79L37.3517 22.8641C37.6842 22.5494 37.8065 22.0709 37.6652 21.6351C37.5227 21.1992 37.1427 20.8834 36.6891 20.824L31.0247 20.0866L28.5726 14.9281ZM27.5002 18.2044L29.1568 21.6909C29.3301 22.0542 29.6769 22.306 30.0759 22.3583L33.9044 22.857L31.1007 25.5099C30.8074 25.7877 30.6756 26.1939 30.7492 26.5905L31.4582 30.3846L28.0678 28.538C27.714 28.3456 27.2865 28.3456 26.9326 28.538L23.5423 30.3846L24.2512 26.5905C24.3249 26.1939 24.193 25.7877 23.8997 25.5099L21.096 22.857L24.9245 22.3583C25.3235 22.306 25.6703 22.0542 25.8437 21.6909L27.5002 18.2044Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.7358 37.5085L1.33149 42.914C0.577426 43.6669 0.307859 44.7772 0.629671 45.7925C0.952672 46.8079 1.81478 47.5584 2.86453 47.7377L7.47204 48.5285L8.2629 53.136C8.44221 54.1858 9.19271 55.0479 10.208 55.3709C11.2233 55.6927 12.3337 55.4231 13.0865 54.6691L21.8669 45.8887C22.317 46.0063 22.7326 46.2545 23.0532 46.619C23.3335 46.9373 23.6327 47.2781 23.9344 47.6201C24.8357 48.6449 26.1348 49.2327 27.5004 49.2327C28.866 49.2327 30.1652 48.6449 31.0665 47.6201C31.3681 47.2781 31.6673 46.9373 31.9476 46.619C32.2682 46.2545 32.6838 46.0063 33.1339 45.8887L41.9143 54.6691C42.6672 55.4231 43.7775 55.6927 44.7928 55.3697C45.8081 55.0479 46.5586 54.1858 46.7379 53.136L47.5288 48.5285L52.1363 47.7377C53.186 47.5584 54.0482 46.8079 54.3712 45.7925C54.693 44.7772 54.4234 43.6669 53.6693 42.914L48.265 37.5085C48.3636 37.3732 48.455 37.2318 48.5405 37.0846C49.2222 35.903 49.3635 34.484 48.9265 33.1908C48.7816 32.7585 48.6367 32.3298 48.5002 31.9273C48.1938 31.02 48.4622 30.0166 49.1818 29.3848C49.5 29.1046 49.8409 28.8053 50.1829 28.5037C51.2077 27.6024 51.7955 26.3033 51.7955 24.9377C51.7955 23.572 51.2077 22.2729 50.1829 21.3716C49.8409 21.07 49.5 20.7707 49.1818 20.4905C48.4622 19.8587 48.1938 18.8553 48.5002 17.948C48.6367 17.5455 48.7816 17.1168 48.9265 16.6845C49.3635 15.3913 49.2222 13.9723 48.5405 12.7907C47.8577 11.608 46.6987 10.7767 45.3604 10.5083C44.9139 10.4181 44.4698 10.329 44.0542 10.2459C43.1149 10.0571 42.381 9.32322 42.1922 8.38391C42.1091 7.96828 42.02 7.52415 41.9297 7.07765C41.6614 5.73934 40.8301 4.58036 39.6474 3.89755C38.4658 3.21592 37.0467 3.0746 35.7536 3.5116C35.3213 3.65647 34.8926 3.80136 34.49 3.93792C33.5828 4.24429 32.5793 3.97591 31.9476 3.25629C31.6673 2.93804 31.3681 2.59721 31.0665 2.25521C30.1652 1.23039 28.866 0.642578 27.5004 0.642578C26.1348 0.642578 24.8357 1.23039 23.9344 2.25521C23.6327 2.59721 23.3335 2.93804 23.0532 3.25629C22.4215 3.97591 21.4181 4.24429 20.5108 3.93792C20.1082 3.80136 19.6795 3.65647 19.2473 3.5116C17.9541 3.0746 16.535 3.21592 15.3535 3.89755C14.1707 4.58036 13.3395 5.73934 13.0711 7.07765C12.9808 7.52415 12.8918 7.96828 12.8087 8.38391C12.6198 9.32322 11.886 10.0571 10.9467 10.2459C10.531 10.329 10.0869 10.4181 9.6404 10.5083C8.30209 10.7767 7.14311 11.608 6.4603 12.7907C5.77868 13.9723 5.63735 15.3913 6.07435 16.6845C6.21922 17.1168 6.36411 17.5455 6.50067 17.948C6.80705 18.8553 6.53867 19.8587 5.81904 20.4905C5.50079 20.7707 5.15996 21.07 4.81796 21.3716C3.79315 22.2729 3.20533 23.572 3.20533 24.9377C3.20533 26.3033 3.79315 27.6024 4.81796 28.5037C5.15996 28.8053 5.50079 29.1046 5.81904 29.3848C6.53867 30.0166 6.80705 31.02 6.50067 31.9273C6.36411 32.3298 6.21922 32.7585 6.07435 33.1908C5.63735 34.484 5.77868 35.903 6.4603 37.0846C6.5458 37.2318 6.63723 37.3732 6.7358 37.5085ZM46.4185 39.0214C46.0836 39.177 45.7297 39.2933 45.3604 39.367C44.9139 39.4572 44.4698 39.5463 44.0542 39.6294C43.1149 39.8182 42.381 40.5521 42.1922 41.4914C42.1091 41.907 42.02 42.3512 41.9297 42.7977C41.6614 44.136 40.8301 45.295 39.6474 45.9778C38.9016 46.4088 38.0609 46.6238 37.2165 46.6131L43.5934 52.99C43.7193 53.1158 43.9045 53.161 44.0732 53.1064C44.243 53.0529 44.3677 52.9092 44.3974 52.7346L45.3296 47.2995C45.4151 46.8031 45.8033 46.4148 46.2997 46.3293L51.7349 45.3971C51.9095 45.3674 52.0532 45.2427 52.1066 45.0729C52.1612 44.9043 52.1161 44.719 51.9902 44.5932L46.4185 39.0214ZM8.58235 39.0214L3.01062 44.5932C2.88474 44.719 2.83959 44.9043 2.89421 45.0729C2.94765 45.2427 3.09136 45.3674 3.26592 45.3971L8.70111 46.3293C9.19748 46.4148 9.58578 46.8031 9.67128 47.2995L10.6035 52.7346C10.6332 52.9092 10.7579 53.0529 10.9277 53.1064C11.0963 53.161 11.2815 53.1158 11.4074 52.99L17.7843 46.6131C16.94 46.6238 16.0992 46.4088 15.3535 45.9778C14.1707 45.295 13.3395 44.136 13.0711 42.7977C12.9808 42.3512 12.8918 41.907 12.8087 41.4914C12.6198 40.5521 11.886 39.8182 10.9467 39.6294C10.531 39.5463 10.0869 39.4572 9.6404 39.367C9.27109 39.2933 8.91722 39.177 8.58235 39.0214ZM25.7168 3.82391C26.168 3.3121 26.8176 3.01758 27.5004 3.01758C28.1832 3.01758 28.8328 3.3121 29.2841 3.82391C29.5845 4.1671 29.8837 4.50671 30.164 4.82496C31.4299 6.26302 33.4344 6.80097 35.25 6.18822C35.6514 6.05166 36.0813 5.90677 36.5135 5.7619C37.1595 5.5434 37.8685 5.61348 38.4599 5.95429C39.0512 6.29629 39.4669 6.87459 39.601 7.54434C39.6913 7.99203 39.7804 8.43617 39.8635 8.8518C40.2399 10.7292 41.7088 12.1981 43.5863 12.5746C44.0019 12.6577 44.446 12.7468 44.8937 12.837C45.5635 12.9712 46.1418 13.3868 46.4838 13.9782C46.8246 14.5696 46.8947 15.2785 46.6762 15.9245C46.5313 16.3568 46.3864 16.7867 46.2499 17.188C45.6371 19.0037 46.1751 21.0082 47.6131 22.2741C47.9314 22.5543 48.271 22.8536 48.6142 23.154C49.126 23.6053 49.4205 24.2548 49.4205 24.9377C49.4205 25.6205 49.126 26.2701 48.6142 26.7213C48.271 27.0217 47.9314 27.321 47.6131 27.6012C46.1751 28.8671 45.6371 30.8716 46.2499 32.6873C46.3864 33.0887 46.5313 33.5185 46.6762 33.9508C46.8947 34.5968 46.8246 35.3057 46.4838 35.8971C46.1418 36.4885 45.5635 36.9041 44.8937 37.0383C44.446 37.1285 44.0019 37.2176 43.5863 37.3007C41.7088 37.6772 40.2399 39.1461 39.8635 41.0235C39.7804 41.4391 39.6913 41.8833 39.601 42.331C39.4669 43.0007 39.0512 43.579 38.4599 43.921C37.8685 44.2618 37.1595 44.3319 36.5135 44.1134C36.0813 43.9685 35.6514 43.8237 35.25 43.6871C33.4344 43.0743 31.4299 43.6123 30.164 45.0504C29.8837 45.3686 29.5845 45.7082 29.2841 46.0514C28.8328 46.5632 28.1832 46.8577 27.5004 46.8577C26.8176 46.8577 26.168 46.5632 25.7168 46.0514C25.4163 45.7082 25.1171 45.3686 24.8368 45.0504C23.571 43.6123 21.5665 43.0743 19.7508 43.6871C19.3494 43.8237 18.9195 43.9685 18.4873 44.1134C17.8413 44.3319 17.1323 44.2618 16.541 43.921C15.9496 43.579 15.534 43.0007 15.3998 42.331C15.3095 41.8833 15.2205 41.4391 15.1373 41.0235C14.7609 39.1461 13.292 37.6772 11.4145 37.3007C10.9989 37.2176 10.5548 37.1285 10.1071 37.0383C9.43735 36.9041 8.85905 36.4885 8.51705 35.8971C8.17623 35.3057 8.10615 34.5968 8.32465 33.9508C8.46952 33.5185 8.61441 33.0887 8.75097 32.6873C9.36372 30.8716 8.82577 28.8671 7.38771 27.6012C7.06946 27.321 6.72985 27.0217 6.38666 26.7213C5.87485 26.2701 5.58033 25.6205 5.58033 24.9377C5.58033 24.2548 5.87485 23.6053 6.38666 23.154C6.72985 22.8536 7.06946 22.5543 7.38771 22.2741C8.82577 21.0082 9.36372 19.0037 8.75097 17.188C8.61441 16.7867 8.46952 16.3568 8.32465 15.9245C8.10615 15.2785 8.17623 14.5696 8.51705 13.9782C8.85905 13.3868 9.43735 12.9712 10.1071 12.837C10.5548 12.7468 10.9989 12.6577 11.4145 12.5746C13.292 12.1981 14.7609 10.7292 15.1373 8.8518C15.2205 8.43617 15.3095 7.99203 15.3998 7.54434C15.534 6.87459 15.9496 6.29629 16.541 5.95429C17.1323 5.61348 17.8413 5.5434 18.4873 5.7619C18.9195 5.90677 19.3494 6.05166 19.7508 6.18822C21.5665 6.80097 23.571 6.26302 24.8368 4.82496C25.1171 4.50671 25.4163 4.1671 25.7168 3.82391Z"
              fill="white"
            />
          </svg>
        </div>
        <p><b>GrantMe students are guaranteed admission to their top universities.</b> See if <span class="text_third">${text3}</span> qualify.</p>
      </div>
      <div class="benefits_wrap">
        <p>Your results are ready. You’ll get:</p>
        <ul>
          <li><span>Your <span class="text_first">${text1}</span> current chances of getting into your ideal university</span></li>
          <li><span>An estimate of how much funding <span class="text_third">${text3}</span> qualify for</span></li>
          <li><span>A roadmap for maximizing your <span class="text_fourth">${text4}</span> acceptance chances</span></li>
          <li><span>Strategic tools that will help <span class="text_third">${text3}</span> graduate debt-free</span></li>
        </ul>
      </div>
    </div>
    `

    let arrReviews = {
      "Thomas Satosek": [
        `https://conversionratestore.github.io/projects/grantme/img/review1.png`,
        "2 reviews",
        `US`,
        5,
        `Feb 17, 2023`,
        `<b>One of the best decisions I have made</b> I think that this program has been one of the best decisions I have ever made. GrantMe and the everyone on the team, from the editors to the advisors really try their hardest to make you succeed. They are all very friendly and extremely helpful. Amy my advisor, was extremely helpful, and she really tried her hardest and pushed me to be successful. At our meetings she would always put on a friendly smile and worked with me rather than for or directing me.To the rest of the team, just keep up the great work!`,
        `Date of experience: February 16, 2023`,
        "1",
      ],
      "Tula quian sarsons": [
        `https://conversionratestore.github.io/projects/grantme/img/review2.png`,
        "2 reviews",
        `US`,
        5,
        `Feb 21, 2023`,
        `<b>My experience so far with Grant Me Canada.</b> My Grant Me helper has been so wonderful to work with. Staring out with Grant Me, I knew so little about applying for scholarships and grants, at school I had only been told that there were very few I could apply for. But with their help, I've already learned so much in just the past two weeks! I'm super lucky to be working with Grant Me Canada and my helper and I believe that I'll have a super bright future continuing with them.`,
        `Date of experience: February 24, 2023`,
        "2",
      ],
      "Thomas Satosek ": [
        `https://conversionratestore.github.io/projects/grantme/img/review1.png`,
        "2 reviews",
        `US`,
        5,
        `Jan 5, 2023`,
        `<b>Great for helping students with applications</b> GrantMe is a great tool for any student that wants help with University or Scholarship applications. They give it to you on one easy to use website and all the resources that you will ever need to succeed. My only complaint is the three or four texts and emails I get for my appointments.`,
        `Date of experience: January 04, 2023`,
        "3",
      ],
    }

    function setReviews(name, img, revw, local, star, date, descr, dateExperience, count) {
      return `<div class="reviews_link" data-count="${count}">
                <div class="inform_box">
                    <div class="img_wrap">
                        <img src="${img}" alt=" img ${name}" />
                    </div>
                    <div class="name_wrap">
                        <p class="name_var">${name}</p>
                        <span class="revw_var">${revw}</span>
                    </div>
                    <div class="local_wrap">
                        <svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.95312 14.4766C5.19922 14.8594 5.77344 14.8594 6.01953 14.4766C10.0117 8.73438 10.75 8.13281 10.75 6C10.75 3.10156 8.39844 0.75 5.5 0.75C2.57422 0.75 0.25 3.10156 0.25 6C0.25 8.13281 0.960938 8.73438 4.95312 14.4766ZM5.5 8.1875C4.26953 8.1875 3.3125 7.23047 3.3125 6C3.3125 4.79688 4.26953 3.8125 5.5 3.8125C6.70312 3.8125 7.6875 4.79688 7.6875 6C7.6875 7.23047 6.70312 8.1875 5.5 8.1875Z"
                            fill="#2B3D50"
                        />
                        </svg>
                        <span class="local_var">${local}</span>
                    </div>
                </div>
                <div class="stars_box">
                    <div class="stars_var">
                        <img src="https://conversionratestore.github.io/projects/grantme/img/stars.png" alt="stars" />
                        <span>${star}</span>
                    </div>
                    <div class="date_var">
                        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.375 13.4375C0.375 14.1758 0.949219 14.75 1.6875 14.75H11.3125C12.0234 14.75 12.625 14.1758 12.625 13.4375V6H0.375V13.4375ZM9.125 8.07812C9.125 7.91406 9.26172 7.75 9.45312 7.75H10.5469C10.7109 7.75 10.875 7.91406 10.875 8.07812V9.17188C10.875 9.36328 10.7109 9.5 10.5469 9.5H9.45312C9.26172 9.5 9.125 9.36328 9.125 9.17188V8.07812ZM9.125 11.5781C9.125 11.4141 9.26172 11.25 9.45312 11.25H10.5469C10.7109 11.25 10.875 11.4141 10.875 11.5781V12.6719C10.875 12.8633 10.7109 13 10.5469 13H9.45312C9.26172 13 9.125 12.8633 9.125 12.6719V11.5781ZM5.625 8.07812C5.625 7.91406 5.76172 7.75 5.95312 7.75H7.04688C7.21094 7.75 7.375 7.91406 7.375 8.07812V9.17188C7.375 9.36328 7.21094 9.5 7.04688 9.5H5.95312C5.76172 9.5 5.625 9.36328 5.625 9.17188V8.07812ZM5.625 11.5781C5.625 11.4141 5.76172 11.25 5.95312 11.25H7.04688C7.21094 11.25 7.375 11.4141 7.375 11.5781V12.6719C7.375 12.8633 7.21094 13 7.04688 13H5.95312C5.76172 13 5.625 12.8633 5.625 12.6719V11.5781ZM2.125 8.07812C2.125 7.91406 2.26172 7.75 2.45312 7.75H3.54688C3.71094 7.75 3.875 7.91406 3.875 8.07812V9.17188C3.875 9.36328 3.71094 9.5 3.54688 9.5H2.45312C2.26172 9.5 2.125 9.36328 2.125 9.17188V8.07812ZM2.125 11.5781C2.125 11.4141 2.26172 11.25 2.45312 11.25H3.54688C3.71094 11.25 3.875 11.4141 3.875 11.5781V12.6719C3.875 12.8633 3.71094 13 3.54688 13H2.45312C2.26172 13 2.125 12.8633 2.125 12.6719V11.5781ZM11.3125 2.5H10V1.1875C10 0.96875 9.78125 0.75 9.5625 0.75H8.6875C8.44141 0.75 8.25 0.96875 8.25 1.1875V2.5H4.75V1.1875C4.75 0.96875 4.53125 0.75 4.3125 0.75H3.4375C3.19141 0.75 3 0.96875 3 1.1875V2.5H1.6875C0.949219 2.5 0.375 3.10156 0.375 3.8125V5.125H12.625V3.8125C12.625 3.10156 12.0234 2.5 11.3125 2.5Z"
                            fill="#2B3D50"
                        />
                        </svg>
                        <span>${date}</span>
                    </div>
                </div>
                <p class="descr_var">${descr}</p>
                <p class="date_experience_var"><b>${dateExperience}</b></p>
            </div>`
    }

    function renderLabel(text, class_f, class_s, name, id, msg, once = "", err = "") {
      return `<div class="form-item js-form-item form-type-radio js-form-type-radio ${class_f} ${class_s} radio">
      <label for="${id}" class="control-label option"
        ><input
          data-drupal-selector="${id}"
          class="form-radio"
          type="radio"
          id="${id}"
          name="${name}"
          value="${id}"
          required="required"
          data-msg-required="${msg}"
          data-once="${once}"
          data-webform-required-error="${err}"
        />${text}</label
      >
    </div>`
    }

    function renderLabelCheckBox(selector, text, id, value) {
      return `<div class="checkbox_block ${selector}">
               <input class="custom_checkbox" id="${id}" type="radio" name="${selector}" value="${value}" />
                <label for="${id}" tabindex="0">${text}</label>
              </div>`
    }

    let arrLabel = {
      "University of British Columbia (UBC)": ["ubc", "984"],
      "University of Toronto": ["toronto", "907"],
      "University of Waterloo": ["waterloo", "1006"],
      "McMaster University": ["mcmaster", "819"],
      "University of Alberta": ["alberta", "983"],
      "Queen's University": ["queens", "889"],
      Other: ["other", "2913"],
    }

    let arrLabel2 = {
      "Psychology (BA)": ["psychology", "497"],
      "Law (BA)": ["law", "489"],
      "Accounting and Finance": ["finance", "2413"],
      "Business (Bcom)": ["business", "442"],
      "Kinesiology (BKin)": ["kinesiology", "517"],
      Other: ["other2", "521"],
    }

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap" rel="stylesheet">`)
    document.head.insertAdjacentHTML("beforeend", newStyle)

    document.querySelectorAll("#edit-actions-13").forEach((el) => {
      for (let key in arrLabel) {
        el.insertAdjacentHTML("beforebegin", renderLabelCheckBox("school_are_you_interested_in_attending_var", key, arrLabel[key][0], arrLabel[key][1]))
      }
    })

    document.querySelectorAll("#edit-actions-14").forEach((el) => {
      for (let key in arrLabel2) {
        el.insertAdjacentHTML("beforebegin", renderLabelCheckBox("study_are_you_looking_to_study_currently_studying_var", key, arrLabel2[key][0], arrLabel2[key][1]))
      }
    })

    document.querySelector("#edit-actions-14").insertAdjacentHTML("beforebegin", `<textarea class="other_textarea" placeholder="Description"></textarea>`)

    if (document.querySelector("#edit-what-school-are-you-interested-in-attending").value === "") {
      document.querySelector("#edit-cards-next--11").disabled = true
    }
    // if (document.querySelector("#edit-what-field-of-study-are-you-looking-to-study-currently-studying").value === "") {
    //   document.querySelector("#edit-cards-next--12").disabled = true
    // }

    document
      .querySelector("#edit-actions-13")
      .insertAdjacentHTML("afterend", renderLabelCheckBox("school_are_you_interested_in_attending_var", "Skip", "skip_school_are_you_interested_in_attending_var", "2913"))

    document
      .querySelector("#edit-actions-14")
      .insertAdjacentHTML(
        "afterend",
        renderLabelCheckBox("study_are_you_looking_to_study_currently_studying_var", "Skip", "skip_study_are_you_looking_to_study_currently_studying_var", "521")
      )

    // render text Program Assessment
    if (!document.querySelector(".program_assessment_var")) {
      document
        .querySelector(".navbar")
        .insertAdjacentHTML("afterend", `<div class='program_assessment_wrap'><p class="program_assessment_var">Program Assessment</p><div></div></div>`)
    }
    // render back_btn_var
    document.querySelectorAll(".time-left").forEach((el) => {
      if (!el.closest("#edit-processed-text-10")) {
        el.insertAdjacentHTML(
          "beforebegin",
          `<span class="back_btn_var"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1L2 7L8 13" stroke="#3D78BA" stroke-width="2"/></svg>Back</span>`
        )
      }
    })
    // render btn Skip and I don’t know
    document
      .querySelector("#edit-what-is-your-citizenship")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "form-item-what-is-your-citizenship skip_var",
          "js-form-item-what-is-your-citizenship",
          "what_is_your_citizenship",
          "skip-what-is-your-citizenship",
          "What is your citizenship? field is required."
        )
      )
    document
      .querySelector("#edit-what-year-of-study-are-you-currently-in")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "form-item-what-year-of-study-are-you-currently-in skip_var",
          "js-form-item-what-year-of-study-are-you-currently-in",
          "what_year_of_study_are_you_currently_in",
          "skip-what-year-of-study-are-you-currently-in",
          "Please choose a year of study",
          "webform-required-error",
          "Please choose a year of study"
        )
      )
    document
      .querySelector("#edit-what-is-your-gpa")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "I don’t know",
          "js-form-type-radio form-item-what-is-your-gpa i_dont_know_var",
          "js-form-item-what-is-your-gpa",
          "what_is_your_gpa",
          "i-dont-know-what-is-your-gpa",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-what-is-your-gpa")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "js-form-type-radio form-item-what-is-your-gpa skip_var",
          "js-form-item-what-is-your-gpa",
          "what_is_your_gpa",
          "skip-what-is-your-gpa",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-what-program-are-you-looking-to-study-currently-studying")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "I don’t know",
          "form-item-what-program-are-you-looking-to-study-currently-studying i_dont_know_var",
          "js-form-item-what-program-are-you-looking-to-study-currently-studying",
          "what_program_are_you_looking_to_study_currently_studying",
          "i-dont-know-what-program-are-you-looking-to-study-currently-studying",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-what-program-are-you-looking-to-study-currently-studying")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "form-item-what-program-are-you-looking-to-study-currently-studying skip_var",
          "js-form-item-what-program-are-you-looking-to-study-currently-studying",
          "what_program_are_you_looking_to_study_currently_studying",
          "skip-what-program-are-you-looking-to-study-currently-studying",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-how-many-extracurricular-or-volunteer-activities-do-you-partici")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "I don’t know",
          "form-item-how-many-extracurricular-or-volunteer-activities-do-you-partici i_dont_know_var",
          "js-form-item-how-many-extracurricular-or-volunteer-activities-do-you-partici",
          "how_many_extracurricular_or_volunteer_activities_do_you_partici",
          "i-dont-know-how-many-extracurricular-or-volunteer-activities-do-you-partici",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-how-many-extracurricular-or-volunteer-activities-do-you-partici")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "form-item-how-many-extracurricular-or-volunteer-activities-do-you-partici skip_var",
          "js-form-item-how-many-extracurricular-or-volunteer-activities-do-you-partici",
          "how_many_extracurricular_or_volunteer_activities_do_you_partici",
          "skip-how-many-extracurricular-or-volunteer-activities-do-you-partici",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-if-selected-for-our-program-")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "I don’t know",
          "js-form-type-radio form-item-if-selected-for-our-program- i_dont_know_var",
          "js-form-item-if-selected-for-our-program-",
          "if_selected_for_our_program_",
          "i-dont-know-if-selected-for-our-program",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-if-selected-for-our-program-")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "js-form-type-radio form-item-if-selected-for-our-program- skip_var",
          "js-form-item-if-selected-for-our-program-",
          "if_selected_for_our_program_",
          "skip-if-selected-for-our-program",
          "This field is required.",
          "webform-required-error",
          "This field is required."
        )
      )
    document
      .querySelector("#edit-what-is-your-family-s-approximate-yearly-household-income")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "js-form-type-radio form-item-what-is-your-family-s-approximate-yearly-household-income skip_var",
          "js-form-item-what-is-your-family-s-approximate-yearly-household-income",
          "what_is_your_family_s_approximate_yearly_household_income",
          "skip-what-is-your-family-s-approximate-yearly-household-income",
          "Please indicate your yearly household income.",
          "webform-required-error",
          "Please indicate your yearly household income."
        )
      )
    document
      .querySelector("#edit-are-you-currently-studying-in-canada")
      .insertAdjacentHTML(
        "beforeend",
        renderLabel(
          "Skip",
          "form-item-are-you-currently-studying-in-canada skip_var",
          "js-form-item-are-you-currently-studying-in-canada",
          "are_you_currently_studying_in_canada",
          "skip-are-you-currently-studying-in-canada"
        )
      )

    //last step
    document.querySelector("#edit-processed-text-44").insertAdjacentHTML("afterbegin", reviews)
    if (document.querySelector(".new_reviews")) {
      for (let key in arrReviews) {
        document
          .querySelector(".new_reviews")
          .insertAdjacentHTML(
            "beforeend",
            setReviews(
              key,
              arrReviews[key][0],
              arrReviews[key][1],
              arrReviews[key][2],
              arrReviews[key][3],
              arrReviews[key][4],
              arrReviews[key][5],
              arrReviews[key][6],
              arrReviews[key][7]
            )
          )
      }

      // click on load more btn
      if (document.querySelector(".load_more_btn")) {
        document.querySelector(".load_more_btn").addEventListener("click", (e) => {
          pushDataLayer("Load more")
          e.target.style.display = "none"
          document.querySelector('[data-count="3"]').style.display = "block"
          document.querySelector('[data-count="3"]')?.scrollIntoView({ block: "start", behavior: "smooth" })
        })
      }
    }

    // input on textarea
    if (document.querySelector(".other_textarea")) {
      document.querySelector(".other_textarea").addEventListener("blur", () => {
        pushDataLayer("event blur on textarea 'Description'")
      })
    }

    document.querySelector("#edit-processed-text-10").insertAdjacentHTML("beforebegin", guaranteeBlock)
    document.querySelector("form #edit-actions-10-submit").textContent = "Get results"
    document.querySelector(".form-item-email-address").after(document.querySelector(".form-item-mobile-number"))

    document.querySelector("#edit-processed-text-12")?.insertAdjacentHTML(
      "afterend",
      `<p class="policy_var">By clicking, “Submit” I Agree to GrantMe’s 
        <a href="https://grantme.ca/privacy-policy/?__hstc=166450401.d0807ef5d572f44bbd6f27a9bad53784.1677748614911.1677748614911.1677754299636.2&amp;__hssc=166450401.4.1677754299636&amp;__hsfp=2335833925" target="_blank">Privacy Policy</a>,
        <a href="https://grantme.ca/terms-of-use/?__hstc=166450401.d0807ef5d572f44bbd6f27a9bad53784.1677748614911.1677748614911.1677754299636.2&amp;__hssc=166450401.4.1677754299636&amp;__hsfp=2335833925" target="_blank">Terms of Use</a> 
        and consent to receiving promotional messages.<br />A copy of your assessment results will be sent to you by email.
    </p>`
    )
    //click input
    document.querySelectorAll("input[type=radio]").forEach((el) => {
      el.addEventListener("click", (i) => {
        if (!i.currentTarget.getAttribute("data-test")) {
          if (i.currentTarget.closest("div").classList.contains("skip_var") || i.currentTarget.closest("div").classList.contains("i_dont_know_var")) {
            pushDataLayer(`checked ${i.currentTarget.closest("label").textContent}`, i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          document.querySelectorAll(".webform-progress ul li").forEach((el) => {
            let int = setInterval(() => {
              if (
                (el.classList.contains("is-active") && el.getAttribute("data-webform-card") !== "what_is_your_contact_info_") ||
                (el.classList.contains("is-complete") && el.getAttribute("data-webform-card") !== "what_is_your_contact_info_")
              ) {
                clearInterval(int)
                el.style.background = "#3e78ba"
              }
            }, 10)
          })

          if (i.currentTarget.closest("#edit-are-you-a-current-student-")) {
            document.querySelector("#edit-cards-next").click()
            i.currentTarget.closest("section").querySelector(".back_btn_var").style.opacity = "1"
            i.currentTarget.closest("section").querySelector(".back_btn_var").style.visibility = "unset"
            localStorage.setItem("name", i.currentTarget.getAttribute("value"))
            if (localStorage.getItem("name") === "Parent of Student") {
              document.querySelectorAll(".guarantee_block .text_first").forEach((el) => {
                el.textContent = "child’s"
              })
              document.querySelectorAll(".guarantee_block .text_second").forEach((el) => {
                el.textContent = "you child is"
              })
              document.querySelectorAll(".guarantee_block .text_third").forEach((el) => {
                el.textContent = "your child"
              })
              document.querySelectorAll(".guarantee_block .text_fourth").forEach((el) => {
                el.textContent = "child"
              })
            } else {
              document.querySelectorAll(".guarantee_block .text_first").forEach((el) => {
                el.textContent = ""
              })
              document.querySelectorAll(".guarantee_block .text_second").forEach((el) => {
                el.textContent = "you're"
              })
              document.querySelectorAll(".guarantee_block .text_third").forEach((el) => {
                el.textContent = "you"
              })
              document.querySelectorAll(".guarantee_block .text_fourth").forEach((el) => {
                el.textContent = ""
              })
            }
          }
          if (i.currentTarget.closest("#edit-what-were-you-looking-for-today-")) {
            document.querySelector("#edit-cards-next--2").click()
          }
          if (i.currentTarget.closest("#edit-what-is-your-citizenship-")) {
            document.querySelector("#edit-cards-next--3").click()
            i.currentTarget
              .closest("#edit-what-is-your-citizenship-")
              .querySelectorAll(".radio label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label").classList.add("active")
          }
          if (i.currentTarget.closest("#edit-what-year-of-university-are-you-currently-in-") || i.currentTarget.closest("#edit-what-year-of-study-are-you-currently-in-")) {
            document.querySelector("#edit-cards-next--4").click()
            if (i.currentTarget.closest("#edit-what-year-of-university-are-you-currently-in-")) {
              i.currentTarget
                .closest("#edit-what-year-of-university-are-you-currently-in-")
                .querySelectorAll(".radio label")
                .forEach((r) => {
                  if (r.classList.contains("active")) {
                    r.classList.remove("active")
                  }
                })
              i.currentTarget.closest("label").classList.add("active")
            }
            if (i.currentTarget.closest("#edit-what-year-of-study-are-you-currently-in-")) {
              i.currentTarget
                .closest("#edit-what-year-of-study-are-you-currently-in-")
                .querySelectorAll(".radio label")
                .forEach((r) => {
                  if (r.classList.contains("active")) {
                    r.classList.remove("active")
                  }
                })
              i.currentTarget.closest("label").classList.add("active")
            }
          }
          if (i.currentTarget.closest("#edit-are-you-currently-studying-in-canada-")) {
            document.querySelector("#edit-cards-next--5").click()
            i.currentTarget
              .closest("#edit-are-you-currently-studying-in-canada-")
              .querySelectorAll(".radio label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label").classList.add("active")
          }
          if (i.currentTarget.closest("#edit-what-year-of-university-are-you-currently-in-")) {
            document.querySelector("#edit-cards-next--6").click()
          }
          if (i.currentTarget.closest("#edit-how-old-are-you-")) {
            document.querySelector("#edit-cards-next--7").click()
          }
          if (i.currentTarget.closest("#edit-what-is-your-gpa-")) {
            document.querySelector("#edit-cards-next--8").click()
            i.currentTarget
              .closest("#edit-what-is-your-gpa-")
              .querySelectorAll(".radio label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label").classList.add("active")
          }
          if (i.currentTarget.closest("#edit-what-program-are-you-looking-to-study-currently-studying-")) {
            document.querySelector("#edit-cards-next--9").click()
            i.currentTarget
              .closest("#edit-what-program-are-you-looking-to-study-currently-studying-")
              .querySelectorAll(".radio label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label").classList.add("active")
          }
          if (i.currentTarget.closest("#edit-how-many-extracurricular-or-volunteer-activities-do-you-particip")) {
            document.querySelector("#edit-cards-next--10").click()
            i.currentTarget
              .closest("#edit-how-many-extracurricular-or-volunteer-activities-do-you-particip")
              .querySelectorAll(".radio label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label").classList.add("active")
          }
          if (i.currentTarget.closest("#edit-qa9-wrap")) {
            document.querySelector("#edit-what-school-are-you-interested-in-attending").value = i.target.getAttribute("value")
            if (document.querySelector("#edit-what-school-are-you-interested-in-attending").value !== "") {
              document.querySelector("#edit-cards-next--11").disabled = false
            }
            pushDataLayer(`checked ${i.currentTarget.nextElementSibling.textContent}`, i.currentTarget.closest("section").querySelector("h4").textContent)
            if (i.target.getAttribute("id") === "skip_school_are_you_interested_in_attending_var") {
              document.querySelector("#edit-what-school-are-you-interested-in-attending").setAttribute("skip", true)
              document.querySelector("#edit-cards-next--11").click()
            }
          }
          if (i.currentTarget.closest("#edit-qa10-wrap")) {
            document.querySelector("#edit-what-field-of-study-are-you-looking-to-study-currently-studying").value = i.target.getAttribute("value")
            pushDataLayer(`checked ${i.currentTarget.nextElementSibling.textContent}`, i.currentTarget.closest("section").querySelector("h4").textContent)
            // if (document.querySelector("#edit-what-field-of-study-are-you-looking-to-study-currently-studying").value !== "") {
            //   document.querySelector("#edit-cards-next--12").disabled = false
            // }
            if (i.target.getAttribute("id") === "skip_study_are_you_looking_to_study_currently_studying_var") {
              document.querySelector("#edit-cards-next--12").click()
            }
          }
          if (i.currentTarget.closest("#edit-if-selected-for-our-program")) {
            document.querySelector("#edit-cards-next--13").click()
            i.currentTarget
              .closest("#edit-if-selected-for-our-program")
              .querySelectorAll(".radio label.control-label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label.control-label").classList.add("active")
          }
          if (i.currentTarget.closest("#edit-what-is-your-family-s-approximate-yearly-household-income-")) {
            document.querySelector("#edit-cards-next--14").click()
            // slider mob
            if (window.innerWidth >= 991) {
              setTimeout(() => {
                document.querySelector(".reviews_block").style.opacity = "1"
              }, 200)
              let slickInterval = setInterval(() => {
                if (typeof jQuery(".new_reviews").slick === "function" && document.querySelector(".new_reviews .reviews_link")) {
                  clearInterval(slickInterval)

                  //  slider
                  let slider = $(".new_reviews").slick({
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    adaptiveHeight: true,
                    infinite: false,
                  })
                  slider.on("swipe", function () {
                    pushDataLayer("swipe slider")
                    if (document.querySelector(".slick-slide:last-child").classList.contains("slick-active")) {
                      document.querySelector(".reviews_block").classList.add("ative_left")
                      document.querySelector(".reviews_block").classList.remove("ative_right")
                    }
                    if (document.querySelector(".slick-slide:first-child").classList.contains("slick-active")) {
                      document.querySelector(".reviews_block").classList.remove("ative_left")
                      document.querySelector(".reviews_block").classList.add("ative_right")
                    }
                  })

                  document.querySelectorAll(".new_reviews .slick-arrow").forEach((el) => {
                    el.addEventListener("click", () => {
                      pushDataLayer("click on btn slider")
                      if (document.querySelector(".slick-slide:last-child").classList.contains("slick-active")) {
                        document.querySelector(".reviews_block").classList.add("ative_left")
                        document.querySelector(".reviews_block").classList.remove("ative_right")
                      }
                      if (document.querySelector(".slick-slide:first-child").classList.contains("slick-active")) {
                        document.querySelector(".reviews_block").classList.remove("ative_left")
                        document.querySelector(".reviews_block").classList.add("ative_right")
                      }
                    })
                  })
                }
              }, 100)
            }
            document.querySelector("form > .row > .col.col-md-8").classList.add("last_step_var")
            document.querySelector(".path-grantme-program-assessment #block-landingpageheaderquiz .col-md-4.bluebg").classList.add("last_step_var")
            document.querySelector("#webform-submission-grantme-program-assessment-add-form .col.col-md-4.bluebg.hidden-xs.hidden-sm").classList.add("last_step_var")
            document.querySelector("#block-landingpageheaderquiz .row > .col.col-md-8.col-xs-12").classList.add("last_step_var")
            document.querySelector(".program_assessment_var").classList.add("last_step_var")
            document.querySelector(".program_assessment_wrap").classList.add("last_step_var")

            i.currentTarget
              .closest("#edit-what-is-your-family-s-approximate-yearly-household-income-")
              .querySelectorAll(".radio label")
              .forEach((r) => {
                if (r.classList.contains("active")) {
                  r.classList.remove("active")
                }
              })
            i.currentTarget.closest("label").classList.add("active")
            if (!document.querySelector(".loader_wrap")) {
              document.querySelector("#edit-what-is-your-contact-info- .webform-card-wrapper").insertAdjacentHTML("afterbegin", loaderWrap)
            }
            if (document.querySelector(".loader_wrap")) {
              if (localStorage.getItem("name") === "Parent of Student") {
                document.querySelectorAll(".loader_wrap .text_first")?.forEach((el) => {
                  el.textContent = "child’s"
                })
                document.querySelectorAll(".loader_wrap .text_second")?.forEach((el) => {
                  el.textContent = "you child is"
                })
                document.querySelectorAll(".loader_wrap .text_third")?.forEach((el) => {
                  el.textContent = "your child"
                })
                document.querySelectorAll(".loader_wrap .text_fourth")?.forEach((el) => {
                  el.textContent = "child"
                })
              }
              document.querySelector(".loader_list")?.scrollIntoView({ block: "start", behavior: "smooth" })
              startPreloader()
              function startPreloader() {
                console.log("startPreloader")
                let idx = 0
                var delay = 0.7

                for (let item of document.querySelectorAll(".loader_list li")) {
                  setTimeout(() => {
                    let el = document.querySelector(".loader_list li.active")
                    if (el) {
                      el.classList.remove("active")
                      el.classList.add("finish")
                    }

                    item.classList.add("active")
                  }, idx * delay * 1000)

                  idx++

                  if (idx == 3) {
                    setTimeout(() => {
                      let el = document.querySelector(".loader_list li.active")

                      if (el) {
                        el.classList.remove("active")
                        el.classList.add("finish")
                      }
                      setTimeout(() => {
                        if (document.querySelectorAll(".loader_list li.finish").length === 6) {
                          document.querySelector(".loader_wrap").style.display = "none"
                          document.querySelector("#edit-qa13-wrap").style.display = "block"
                          document.querySelector(".path-scholarship-eligibility-quiz .webform-progress ul li:last-child").style.background = "#3e78ba"
                          document.querySelector(".scroll_var")?.scrollIntoView({ block: "start", behavior: "smooth" })
                        }
                      }, 300)
                    }, idx * delay * 1000 + 3000)
                  }
                }
              }
            }
            document.querySelector(".loader_wrap .back_btn_var")?.addEventListener("click", (i) => {
              if (i.currentTarget.closest(".loader_wrap")) {
                document.querySelector("form > .row > .col.col-md-8").classList.remove("last_step_var")
                document.querySelector(".path-grantme-program-assessment #block-landingpageheaderquiz .col-md-4.bluebg").classList.remove("last_step_var")
                document.querySelector("#webform-submission-grantme-program-assessment-add-form .col.col-md-4.bluebg.hidden-xs.hidden-sm").classList.remove("last_step_var")
                document.querySelector("#block-landingpageheaderquiz .row > .col.col-md-8.col-xs-12").classList.remove("last_step_var")
                document.querySelector(".program_assessment_var").classList.remove("last_step_var")
                document.querySelector(".program_assessment_wrap").classList.remove("last_step_var")

                document.querySelector(".path-scholarship-eligibility-quiz .webform-progress ul li:last-child").style.background = "rgb(233, 243, 250)"
                document.querySelector("#edit-cards-prev--15").click()
                pushDataLayer(`Back`, i.currentTarget.closest("section").querySelector("h4").textContent)
                document.querySelector("#edit-qa13-wrap").style.display = "none"
                if (document.querySelector(".loader_wrap")) {
                  document.querySelector(".loader_wrap").remove()
                }
              }
            })
          }
          if (i.currentTarget.closest("#edit-what-is-your-contact-info-")) {
            document.querySelector("#edit-cards-next--15").click()
          }
        }
        i.currentTarget.setAttribute("data-test", "1")

        setTimeout(() => {
          if (el.getAttribute("data-test")) {
            el.removeAttribute("data-test")
          }
        }, 500)
      })
    })

    // click on back_btn_var
    document.querySelectorAll(".back_btn_var").forEach((el) => {
      el.addEventListener("click", (i) => {
        if (!i.currentTarget.getAttribute("data-test")) {
          document.querySelectorAll(".webform-progress ul li").forEach((el) => {
            let int = setInterval(() => {
              if (!el.classList.contains("is-active") && !el.classList.contains("is-complete")) {
                clearInterval(int)
                el.style.background = "#e9f3fa"
              }
            }, 100)
          })
          if (i.currentTarget.closest("#edit-are-you-a-current-student-")) {
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
            i.currentTarget.closest("section").querySelector(".back_btn_var").style.opacity = "0"
            i.currentTarget.closest("section").querySelector(".back_btn_var").style.visibility = "hidden"
            document.querySelectorAll("#edit-are-you-a-current-student.js-webform-radios input[type=radio]").forEach((input) => {
              if (input.checked === true) {
                input.checked = false
                if (localStorage.getItem("name")) {
                  localStorage.removeItem("name")
                }
                if (input.closest("label").classList.contains("active")) {
                  input.closest("label").classList.remove("active")
                }
              }
            })
            if (
              document.querySelector(".path-scholarship-eligibility-quiz .webform-progress ul li:nth-child(1)").classList.contains("is-complete") ||
              document.querySelector(".path-scholarship-eligibility-quiz .webform-progress ul li:nth-child(1)").classList.contains("is-active")
            ) {
              document.querySelector(".path-scholarship-eligibility-quiz .webform-progress ul li:nth-child(1)").classList.remove("is-complete")
              document.querySelector(".path-scholarship-eligibility-quiz .webform-progress ul li:nth-child(1)").classList.remove("is-active")
            }
          }
          if (i.currentTarget.closest("#edit-what-were-you-looking-for-today-")) {
            document.querySelector("#edit-cards-prev--2").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-is-your-citizenship-")) {
            document.querySelector("#edit-cards-prev--3").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-year-of-university-are-you-currently-in-") || i.currentTarget.closest("#edit-what-year-of-study-are-you-currently-in-")) {
            document.querySelector("#edit-cards-prev--4").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-are-you-currently-studying-in-canada-")) {
            document.querySelector("#edit-cards-prev--5").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-year-of-university-are-you-currently-in-")) {
            document.querySelector("#edit-cards-prev--6").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-how-old-are-you-")) {
            document.querySelector("#edit-cards-prev--7").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-is-your-gpa-")) {
            document.querySelector("#edit-cards-prev--8").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-program-are-you-looking-to-study-currently-studying-")) {
            document.querySelector("#edit-cards-prev--9").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-how-many-extracurricular-or-volunteer-activities-do-you-particip")) {
            document.querySelector("#edit-cards-prev--10").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-school-are-you-interested-in-attending-")) {
            document.querySelector("#edit-cards-prev--11").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-field-of-study-are-you-looking-to-study-currently-studying-")) {
            document.querySelector("#edit-cards-prev--12").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
            if (document.querySelector("#edit-what-school-are-you-interested-in-attending").getAttribute("skip") === "true") {
              document.querySelector("#edit-what-school-are-you-interested-in-attending").value = ""
              document.querySelector("#edit-cards-next--11").disabled = true
              document.querySelector("#edit-what-school-are-you-interested-in-attending").removeAttribute("skip")
            }
          }
          if (i.currentTarget.closest("#edit-if-selected-for-our-program")) {
            document.querySelector("#edit-cards-prev--13").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest("#edit-what-is-your-family-s-approximate-yearly-household-income-")) {
            document.querySelector("#edit-cards-prev--14").click()
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
          }
          if (i.currentTarget.closest(".guarantee_block")) {
            pushDataLayer("Back", i.currentTarget.closest("section").querySelector("h4").textContent)
            document.querySelector("#edit-cards-prev--15").click()

            document.querySelector("form > .row > .col.col-md-8").classList.remove("last_step_var")
            document.querySelector(".path-grantme-program-assessment #block-landingpageheaderquiz .col-md-4.bluebg").classList.remove("last_step_var")
            document.querySelector("#webform-submission-grantme-program-assessment-add-form .col.col-md-4.bluebg.hidden-xs.hidden-sm").classList.remove("last_step_var")
            document.querySelector("#block-landingpageheaderquiz .row > .col.col-md-8.col-xs-12").classList.remove("last_step_var")
            document.querySelector(".program_assessment_var").classList.remove("last_step_var")
            document.querySelector(".program_assessment_wrap").classList.remove("last_step_var")
            document.querySelector("#edit-qa13-wrap").style.display = "none"
            if (document.querySelector(".loader_wrap")) {
              document.querySelector(".loader_wrap").remove()
            }
          }
        }
        i.currentTarget.setAttribute("data-test", "1")

        setTimeout(() => {
          if (el.getAttribute("data-test")) {
            el.removeAttribute("data-test")
          }
        }, 500)
      })
    })

    // Hover or click on bullets
    let evTxt = "Hover"
    let ev = "mouseenter"

    if (window.innerWidth <= 991) {
      evTxt = "Click"
      ev = "click"
    }

    document.querySelectorAll(".benefits_wrap ul li").forEach((el) => {
      el.addEventListener(`${ev}`, (e) => {
        pushDataLayer(e.currentTarget.querySelector("span").textContent, evTxt)
      })
    })

    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    })

    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 1,
    })

    obs.observe(document.querySelector(".policy_var"))
    obs.observe(document.querySelector(".guarantee_block"))

    let int = setInterval(() => {
      if (document.querySelector('.reviews_link[data-count="1"]')) {
        clearInterval(int)
        obs.observe(document.querySelector('.reviews_link[data-count="1"]'))
      }
    }, 100)
    let int2 = setInterval(() => {
      if (document.querySelector('.reviews_link[data-count="2"]')) {
        clearInterval(int2)
        obs.observe(document.querySelector('.reviews_link[data-count="2"]'))
      }
    }, 100)
    let int3 = setInterval(() => {
      if (document.querySelector('.reviews_link[data-count="3"]')) {
        clearInterval(int3)
        obs.observe(document.querySelector('.reviews_link[data-count="3"]'))
      }
    }, 100)

    function visibility(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(function () {
            obs2.observe(i.target)
          }, 100)
        }
      })
    }

    function visibility2(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          if (i.target.classList.contains("policy_var")) {
            pushDataLayer(`Visibility new text under CTA button`)
          }
          if (i.target.classList.contains("reviews_block")) {
            pushDataLayer(`Visibility reviews section`)
          }
          if (i.target.classList.contains("guarantee_block")) {
            pushDataLayer(`Visibility summary flow`)
          }
          switch (i.target.getAttribute("data-count")) {
            case "1":
              pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-count")}`)
              break
            case "2":
              pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-count")}`)
              break
            case "3":
              pushDataLayer(`Visibility on reviews`, `${i.target.getAttribute("data-count")}`)
              break
            default:
              break
          }

          obs.unobserve(i.target)
        }
        obs2.unobserve(i.target)
      })
    }

    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)
        clarity("set", "remove_barriers_on_quiz", "variant_1")
      }
    }, 200)
  }
}, 300)
