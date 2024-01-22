console.log(
  "%c EXP: Introduce value proposition and increase engagement during the flow (DEV: Olha)",
  "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
);

const dir = "https://conversionratestore.github.io/projects/sunvalue/img/";

const clarityInterval = setInterval(function () {
  if (typeof clarity == "function") {
    clearInterval(clarityInterval);
    clarity("set", "exp_valu_prop", "variant_1");
  }
}, 200);

const device = window.innerWidth < 769 ? "mobile" : "desktop";

const dataIcons = {
  chieldCheck: `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.5356 4.61766L15.1506 5.51608L15.5356 4.61766L10.7879 2.58293C10.2848 2.36732 9.71534 2.36732 9.21224 2.58293L4.46453 4.61766C3.64529 4.96877 3.15726 5.8196 3.26781 6.70402L3.71413 10.2746C3.93428 12.0358 4.81526 13.6476 6.17879 14.7839L8.71971 16.9013C9.46141 17.5194 10.5388 17.5194 11.2805 16.9013L13.8214 14.7839C15.1849 13.6476 16.0659 12.0358 16.286 10.2746L16.7324 6.70402C16.8429 5.8196 16.3549 4.96877 15.5356 4.61766Z" stroke="#066FDE" stroke-width="2" stroke-linecap="round"/>
            <path d="M7.49992 10L9.56865 12.0687C9.79176 12.2918 10.1632 12.2551 10.3382 11.9925L13.3333 7.5" stroke="#066FDE" stroke-width="2" stroke-linecap="round"/>
        </svg>`,
  location: `
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
            <path d="M5 0.5C3.67935 0.517477 2.41771 1.04987 1.48379 1.98379C0.549873 2.91771 0.0174772 4.17935 0 5.5C0 7.657 1.173 8.763 2.3075 9.8325C3.442 10.902 4.5 11.9 4.5 14C4.5 14.1326 4.55268 14.2598 4.64645 14.3536C4.74021 14.4473 4.86739 14.5 5 14.5C5.13261 14.5 5.25979 14.4473 5.35355 14.3536C5.44732 14.2598 5.5 14.1326 5.5 14C5.5 11.9 6.565 10.8955 7.6925 9.8325C8.82 8.7695 10 7.657 10 5.5C9.98252 4.17935 9.45013 2.91771 8.51621 1.98379C7.58229 1.04987 6.32065 0.517477 5 0.5ZM5 7C4.70333 7 4.41332 6.91203 4.16664 6.7472C3.91997 6.58238 3.72771 6.34811 3.61418 6.07403C3.50065 5.79994 3.47094 5.49834 3.52882 5.20736C3.5867 4.91639 3.72956 4.64912 3.93934 4.43934C4.14912 4.22956 4.41639 4.0867 4.70736 4.02882C4.99834 3.97094 5.29994 4.00065 5.57403 4.11418C5.84811 4.22771 6.08238 4.41997 6.2472 4.66664C6.41203 4.91332 6.5 5.20333 6.5 5.5C6.5 5.89782 6.34196 6.27936 6.06066 6.56066C5.77936 6.84196 5.39782 7 5 7Z" fill="#757575"/>
        </svg>`,
};

function handleVisibility(el, eventParams) {
  let isVisible = false;
  let entryTime;
  let visibilityTimer; // Timer to track visibility duration
  const visibilityThreshold = 3000; // 3 seconds in milliseconds
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
          // Set a timer to check visibility duration
          visibilityTimer = setTimeout(
            () => checkVisibilityDuration(),
            visibilityThreshold
          );
        }
      } else if (isVisible) {
        // The element is out of the viewport, clear the timer
        isVisible = false;
        clearTimeout(visibilityTimer);
      }
    });
  }, config);

  const checkVisibilityDuration = () => {
    const exitTime = new Date().getTime();
    const visibilityDuration = exitTime - entryTime;

    if (visibilityDuration >= visibilityThreshold) {
      // The element was visible for more than 3 seconds
      const eventData = eventParams;
      eventData[1] = visibilityDuration / 1000; // Convert to seconds
      pushDataLayer(eventData);
      observer.disconnect();
    }
  };

  observer.observe(el);
}

function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
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
  console.log(
    event_name + " / " + event_desc + " / " + event_type + " / " + event_loc
  );
}

let clickCount = 0;

class changeFlow {
  constructor(device) {
    this.device = device;
    this.init();
  }

  init() {
    if (this.checkPageUrl() == "flow-bill") {
      this.styleAppend();
      this.changeSlides();

      document.body.insertAdjacentHTML(
        "afterbegin",
        `
        <style>
          .site-footer {
            display: none!important;
          }
        </style>`
      );
    } else if (this.checkPageUrl() == "thankyou") {
      this.styleAppend();
      this.addThankPage();
    } else {
      window.location.href = "https://go.sunvalue.com/bill/?bill=buttons";
    }

    const globalMutation = new MutationObserver((mutations) => {
      if (this.checkPageUrl() === "flow-bill") {
        if (
          $(".swiper-slide").eq(1).hasClass("swiper-slide-active") ||
          $(".swiper-slide").eq(2).hasClass("swiper-slide-active") ||
          $(".swiper-slide").eq(3).hasClass("swiper-slide-active") ||
          $(".swiper-slide").eq(6).hasClass("swiper-slide-active")
        ) {
          $(".nextSlide").attr("style", "display: none!important;");
          if (device === "mobile") return;
          $(".crs_next").attr("style", "display: none!important;");
        } else {
          $(".nextSlide").attr("style", "");
          if (device === "mobile") return;
          $(".crs_next").attr("style", "");
        }

        if ($(".swiper-slide").eq(6).hasClass("swiper-slide-active")) {
          $(".wrapper #slider-block").attr("style", "background: transparent");
          $(".wrapper:not(.show)").addClass("crs_final");
        } else {
          $(".wrapper #slider-block").attr("style", "");
          $(".wrapper:not(.show)").removeClass("crs_final");
        }
      }

      //hide error message 1 entry
      if (device == "desktop") {
        if (
          $(".swiper-wrapper .swiper-slide")
            .eq(5)
            .hasClass("swiper-slide-active") &&
          clickCount == 0
        ) {
          clickCount = 1;
          $(".swiper-wrapper .swiper-slide")
            .eq(5)
            .find(".input-error")
            .removeClass("input-error");

          $(".swiper-wrapper .swiper-slide").eq(5).find(".error-msg").html("");
        }

        if ($(".swiper-wrapper .swiper-slide").eq(6).hasClass("swiper-slide-active")) {
            $('#slider-block').attr("style", "display: none!important;");
        } else {
            $('#slider-block').attr("style", "");
        }
      }

      globalMutation.disconnect();

      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  checkPageUrl() {
    const pageUrl = window.location.href;

    if (pageUrl.includes("/bill")) {
      return "flow-bill";
    } else if (pageUrl.includes("/thankyou") || pageUrl.includes("/received")) {
      return "thankyou";
    } else {
      return "other";
    }
  }

  styleAppend() {
    const style = /* html    */ `
          <style class="crs-style">
              #estimate-bill div h4,
              #estimate-email .banner,
              #estimate-bill .form-list {
                  display: none!important;
              }
              .banner {
                border-radius: 5px;
                background: #628FAC;
                padding: 5px 0 6px;
                color: #FFF;
              }
              #estimate-map .small-container {
                position: relative;
              }
              #estimate-map .small-container svg {
                position: absolute;
                left: 16px;
                top: 20px;
                z-index: 9;
              }
              .text-nowrap {
                text-wrap: nowrap;
              }
              #estimate-map {
                transition: all 0.25s ease;
              }
              .crs_input {
                margin-top: -54px!important;
              }
              input {
                  font-size: 16px!important;
                  padding: 16px!important;
              }
              input#autoaddress {
                padding-left: 36px!important;
              }
              .form-list input {
                  line-height: 28px!important;
              }
              input::placeholder {
                color: #757575;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
  
              .btn.crs_submit {
                border-radius: 5px;
                color: #FFF;
                text-align: center;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 24px; /* 150% */
                letter-spacing: 0.5px;
                text-transform: uppercase;
                background: #83BE63;
                margin-left: auto;
              }
              .crs_text_s {
                color: #4A4A4A;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top: 6px;
              }
              .crs_text_s svg {
                margin-right: 8px;
              }
              .wrapper h5,
              #tcpa_label {
                  text-align: left;
              }
              #tcpa_label {
                  color: #5C5D61;
              }
              .wrapper .container h2 {
                  font-size: 28px!important;
                  margin-bottom: 14px!important;
                  line-height: 36px;
                  text-transform: lowercase;
              } 
              .wrapper .container h2::first-letter {
                text-transform: uppercase;
              }
              .wrapper .container h2 span {
                font-size: 16px;
                display: block;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin-top: 16px;
              }
             
              .wrapper .form-list {
                  margin-top: 16px;
                  max-width: 100%;
              }
              .wrapper .form-list li, 
              .wrapper .form-list li.full {
                  margin: 0 0 6px 0;
                  width: 100%;
              }
              .wrapper .form-list a.btn {
                  margin-top: 9px;
              }
              .swiper-wrapper {
                  height: auto!important;
              }
              .wrapper {
                  padding: 106px 0 0 0!important;
              }
              .banner-slider .swiper-slide.one {
                  margin-top: -54px;
              }
              .wrapper .banner-slider {
                  overflow: visible;
              }
              .wrapper .progress-block {
                  top: 60px!important;
              }
              .wrapper .progress-block p {
                  color: #393939;
                  margin-top: 6px;
              }
              #bill-buttons {
                  padding: 0!important;
              }
            
              .wrapper #slider-block {
                  position: fixed;
                  bottom: 0;
                  left: 0;
                  background: #EDF2F5;
                  padding: 8px 20px;
                  z-index: 3;
              }
              .wrapper #slider-block .btn {
                  width: 200px;
                  padding: 8px;
              }
              .wrapper .back-link::before {
                  top: 0;
                  width: 19px;
              }
              .wrapper .back-link {
                  padding: 8px 0 8px 27px;
              }
              #bill-buttons>div {
                  font-size: 16px;
                  line-height: 24px;
                  letter-spacing: 0.5px;
                  text-transform: uppercase;
                  padding: 12px;
                  min-height: 56px;
                  max-width: 100%;
                  font-weight: 700;
                  margin-bottom: 12px;
              }
              .underline {
                  text-decoration: underline;
              }
              .wrapper .vsmall-container {
                max-width: 100%;
              }
              .wrapper h1, .wrapper h2 {
                font-size: 24px!important; 
              }
              .final-btn {
                padding-top: 0!important;
              }
              @media (max-width: 769px) {
                .wrapper:not(.show, .crs_final)::before {
                  background-position: center bottom 60px;
                }
                #estimate-phone .sub-title {
                  max-width: 251px;
                  margin: 0 auto 16px;
                }
              }
              @media (min-width: 770px) {
                .d-md-none {
                  display: none!important;
                }
                #next-block {
                  opacity: 0;
                }
                .wrapper .banner-slider {
                  width: 100%;
                }
                .wrapper .sub-title,
                #estimate-phone .sub-title,
                .wrapper .container h2 {
                    margin-bottom: 24px!important;
                }
                .banner-slider .swiper-slide {
                  left: 50%;
                  width: 100%!important;
                  transform: translateX(-50%)!important;
                  position: absolute;
                }
                .wrapper {
                  align-items: flex-start;
                }
                .wrapper .container {
                  max-width: 660px;
                }
                .wrapper .form-list {
                  max-width: 100%;
                }
                .wrapper h1,
                .wrapper .container h2 {
                  font-size: 44px!important;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 52px; 
                }
                .wrapper .container h2 span,
                .wrapper h4:not(.banner),
                .wrapper h5 {
                  font-size: 20px!important;
                }
                .wrapper h4.banner {
                    font-size: 16px!important;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                    padding: 9px 0 8px 0;
                }
                .banner-slider .v-center {
                  padding-top: 60px;
                  top: 0;
                  -webkit-transform: translateY(0);
                  transform: translateY(0);
                }
                .banner-slider .swiper-slide.one .v-center {
                  padding-top: 128px
                }
                .banner-slider .swiper-slide.one {
                  width: 100%!important;
                }
                .site-header {
                  padding: 27px 0;
                }
                .wrapper .progress {
                    max-width: 600px;
                }
                .wrapper .progress-block {
                  top: 84px!important;
                }
                .wrapper #slider-block {
                    justify-content: flex-end;
                }
                .wrapper #slider-block a:not(.back-link) {
                  width: 300px!important;
                  border-radius: 5px;
                  padding: 16px;
                  background: #83BE63;
                  color: #FFF;
                  text-align: center;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 24px; /* 150% */
                  letter-spacing: 0.5px;
                  text-transform: uppercase;
                  margin-left: auto;
                }
                #slider-block {
                  max-width: 600px;
                  width: 100%!important;
                  left: 50%!important;
                  bottom: 5.83vh!important;
                  transform: translateX(-50%);
                  border-radius: 8px;
                  border-top: 1px solid #E0E4EB;
                  background: #EEF3F6!important;
                  padding: 12px 16px!important;
                  min-height: 80px;
                }
                .wrapper .sliderLegend .sliderLegendItem--start, .wrapper .footage .sliderLegend .sliderLegendItem--start {
                  left: 0;
                  font-size: 18px;
                }
                .wrapper .sliderLegend .sliderLegendItem--end, .wrapper .footage .sliderLegend .sliderLegendItem--end {
                  right: 0;
                  font-size: 18px;
                }
                .wrapper .rangeslider-block {
                  padding-top: 45px;
                  margin-top: 0;
                }
                #bill-buttons>div {
                  width: calc(50% - 6px);
                  max-width: 100%;
                  margin: 0 12px 12px 0;
                  border-radius: 5px;
                  border: 1px solid #FFF;
                  background: #83BE63;
                  padding: 15px 12px;
                  font-weight: 700;
                }
                #bill-buttons>div:nth-child(2n+2) {
                    margin-right: 0;
                }
                #companies > div {
                    width: 100%;
                    max-width: 100%;
                    border-radius: 5px;
                    margin: 0 0 12px 0;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 24px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    padding: 15px 6px;
                }
                .wrapper .text-field,
                .wrapper .form-list a.btn {
                  border-radius: 5px;
                }
                .wrapper .custom-radio.borderd.with-img .custom-radio-item {
                  margin: 0 20px 20px 0;
                  width: calc(50% - 10px);
                  display: block;
                }
                .wrapper .custom-radio.borderd.with-img .custom-radio-item:nth-child(2n+2) {
                  margin-right: 0;
                }
                .wrapper .custom-radio.borderd {
                  display: flex;
                  flex-wrap: wrap;
                }
                .wrapper .btn-block .back-link {
                  left: 16px!important;
                }
                .wrapper .form-list li {
                    margin-bottom: 14px;
                }
                .wrapper #slider-block .btn.crs_next {
                    color: #FFF;
                    text-align: center;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 24px; /* 150% */
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    border-radius: 5px;
                    background: #83BE63;
                    border: none;
                    width: 400px;
                    padding: 16px;
                }
                .banner-slider .swiper-slide:nth-child(4) h2 {
                    width: calc(100% + 3px);
                }
                #tcpa_label {
                    margin-top: 24px!important;
                }
                .final-btn {
                    border-radius: 8px;
                    border-top: 1px solid #E0E4EB;
                    background: #EEF3F6;
                    width: 100%;
                    padding: 12px 17.7px!important;
                    display: flex!important;
                    align-items: center;
                    justify-content: space-between;
                }
                .wrapper .btn.submitButton {
                    border-radius: 5px;
                    width: 400px;
                }
                .wrapper .btn.crs_back {
                    color: #4A4A4A;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 24px; /* 150% */
                    text-transform: uppercase;
                    border: none;
                    position: relative;
                }
                .crs_back::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 19px;
                    left: 0;
                    height: 100%;
                    background-image: url(/images/back.svg);
                    background-repeat: no-repeat;
                    background-position: left center;
                    background-size: 20px;
                }
                #estimate-phone h2 {
                    max-width: 578px;
                    margin: 0 auto 24px;
                }
              }
          </style>
      `;

    $("body").prepend(style);
  }

  changeSlides() {
    let city = $("title")
      .text()
      .split("City")[0]
      .split("Solar")[0]
      .split(":")[0]
      .replace("Enter", "")
      .replace("Zip", "")
      .trim();

    let dataObj = {};
    dataObj.city = city;

    localStorage.setItem("crs_data", JSON.stringify(dataObj));

    $(".swiper-wrapper .swiper-slide").each(function (index, element) {
      let _this = $(element);
      if (index == 0) {
        _this
          .find("h2")
          .html(
            `How much is your latest monthly energy bill?<span>This will help us find Incentive Programs in your ${city}</span>`
          );
      } else if (index == 1) {
        _this.find(".pac-target-input").before(dataIcons.location);
        _this
          .find(".pac-target-input")
          .attr("placeholder", "Enter your property address ");
      } else if (index == 2) {
        _this
          .find(".container")
          .prepend(
            `<h4 class="sub-title banner sub-headline">✅  Incentives are found in your area!</h4>`
          );
      } else if (index == 4) {
        _this
          .find(".container")
          .prepend(
            `<h4 class="sub-title banner sub-headline">✅  You're almost qualified for this limited-time program.</h4>`
          );

        _this.find("#fname").attr("placeholder", "First Name");
        _this.find("#lname").attr("placeholder", "Family Name");
      } else if (index == 5) {
        _this.find("#email").attr("placeholder", "Enter your email");
        _this
          .find(".small-container")
          .after(
            `<p class="crs_text_s">${dataIcons.chieldCheck} Your data is safe and secure. No ads or spam</p>`
          );
      }
    });

    $("#autoaddress")
      .on("input", function (e) {
        if (device === "mobile") {
          if ($(this).val() != "") {
            $(".progress-block").hide();
            $("#estimate-map").addClass("crs_input");
            $("#estimate-map .sub-title").hide();
          } else {
            $(".progress-block").show();
            $("#estimate-map").removeClass("crs_input");
            $("#estimate-map .sub-title").show();
          }
        }
      })
      .on("blur", function (e) {
        $(".btn-block .nextSlide").click();
        if (device === "mobile") {
          $(".progress-block").show();
          $("#estimate-map").removeClass("crs_input");
          $("#estimate-map .sub-title").show();
        }
      });

    if (device === "desktop") {
      $("#slider-block").append(
        `<button type="button" class="btn crs_next">Next</button>`
      );
      $(".crs_next").click(function () {
        $(".nextSlide").click();
      });

      $('.final-btn').prepend(
        `<button type="button" class="btn crs_back">Back</button>`
      );
    }
  }

  addThankPage() {
    const data = JSON.parse(localStorage.getItem("crs_data"));

    const page = `
      <style>
          .main-title {
              display: none;
          }
          .steps-wrapper:before {
            content: none;
          }
          .site-header .lock {
            width: 30px;
            height: 30px;
            background: #83be63 url(/images/lock-white.svg) no-repeat center / 11px;
            top: 50%;
            transform: translateY(-50%);
          }
          .step-page .site-header  {
            background: transparent;
            position: absolute;
            border: none!important;
          }
          .step-page .content-wrapper {
            padding-top: 0!important;
          }
          .steps-wrapper {
            min-height: auto;
            background: #EDF2F5;
          }
          .crs_thank {
              padding: 68px 0 17px;
              width: 100%;
          }
          .crs_thank h2 {
              color: #4A4A4A;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: 34px;
              font-family: 'Noto Sans SC', sans-serif;
              margin-bottom: 12px;
          }
          .crs_thank p,
          .crs_thank_list li,
          .crs_thank_list li:before  {
            color: #4A4A4A;
            font-family: 'Noto Sans SC', sans-serif;
            font-size: 16px;
            font-style: normal;
            line-height: 24px;
          }
          .crs_thank_list {
            list-style-type: none;
            padding: 0;
          }
          .crs_thank_list li {
            padding: 0 0 16px 48px;
            font-weight: 500;
            position: relative;
            min-height: 52px;
          }
          .crs_thank_list li:last-child {
            padding: 0 0 0 0 48px;
          }
          .crs_thank_list li:before {
            content: attr(data-num);
            font-weight: 500;
            line-height: 32px;
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            margin-right: 12px;
            border: 2px solid #83BE63;
            text-align: center;
            border-radius: 50%;
            position: absolute;
            left: 0;
            top: 0;
          }
          .crs_thank_list li:first-child:after {
            content: '';
            height: calc(100% - 40px);
            width: 0;
            border-right: 2px dashed #83BE63;
            left: 18px;
            bottom: 2px;
            position: absolute;
          }
          .site-footer {
            margin: 0 -15px;
          }
          p.crs_text {
            color: #757575;
            font-family: 'Noto Sans SC', sans-serif;
            font-size: 12px;
            font-style: normal;
            font-weight: 350;
            line-height: normal;
            padding: 10px 0;
          }
          p.crs_text a {
            text-decoration: underline;
            color: #757575;
            font-family: 'Noto Sans SC', sans-serif;
          }
          @media (min-width: 770px) {
            .crs_thank_list li:first-child  {
              display: flex;
              align-items: center;
              padding-bottom: 24px;
              min-height: 60px;
            }
            .steps-wrapper .container {
              max-width: 600px;
              padding: 0;
            }
            .crs_thank {
                padding: 110px 0 40px;
            }
            .crs_thank h2 {
                font-size: 36px;
                line-height: 52px;
                margin-bottom: 24px;
            }
            .crs_thank p {
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 28px;
            }
            .crs_thank_list li {
                font-size: 18px;
                font-style: normal;
                font-weight: 500;
                line-height: 26px; /* 144.444% */
            }
            .steps-wrapper {
                background: linear-gradient(180deg, #EDF2F5 12.81%, rgba(255, 255, 255, 0.00) 100%), url("${dir}pseudo.png") no-repeat center bottom / cover;
            }
            .site-footer {
                border-top: none;
            }
          }
      </style>
      <div class="crs_thank">
          <div class="container">
              <h2 class="title">You'll be contacted by a Solar Expert Partner in ${data.city} within a couple of hours</h2>
              <p><b>Next steps:</b></p>
              <ul class="crs_thank_list">
                  <li data-num="1">One of our Solar Expert Partners will call you shortly</li>
                  <li data-num="2">During the call, you will learn if your home qualifies for solar incentives, the suggested solar system size, and your predicted solar energy savings</li>
              </ul>
          </div>
      </div>
      `;

    $(".logo img").attr("src", "/images/logo-no-bg.svg");
    $(".steps-wrapper").prepend(page);
  }
}

new changeFlow(device);
