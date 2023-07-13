let videoReviews = setInterval(() => {
  if (document.querySelector(".timeline")) {
    clearInterval(videoReviews);
    if (window.innerWidth > 768) {
      // cdn slider
      let scriptCustomSlider = document.createElement("script");
      scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
      scriptCustomSlider.async = false;
      document.head.appendChild(scriptCustomSlider);

      let scriptCustomSliderStyle = document.createElement("link");
      scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
      scriptCustomSliderStyle.rel = "stylesheet";
      document.head.appendChild(scriptCustomSliderStyle);
    }

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
          eventCategory: `Exp: New video and reviews ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(actionDataLayer);
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: New video and reviews ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        });
      }
    }

    let styleNew = /*html */ `
      <style>
  #reviewsBlock {
    margin: 0 20px;
    padding: 32px 0 130px;
    background: #ffffff;
  }
  #reviewsBlock > h2 {
    font-family: "Oxygen", sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #2d2d2d;
    margin-bottom: 8px;
    max-width: 300px;
  }
  .btn_slider_wrap {
    display: none;
  }
  .review_nav {
    display: flex;
    flex-direction: column;
  }
  .review_card {
    background: #f4f4f4;
    border: 1px solid #2d2d2d;
    border-radius: 24px;
    padding: 16px 16px 35px;
    margin-top: 20px;
  }
  .review_card:nth-child(1) {
    order: 7;
  }
  .review_card:nth-child(2) {
    order: 1;
  }
  .review_card:nth-child(3) {
    order: 2;
  }
  .review_card:nth-child(4) {
    order: 3;
  }
  .review_card:nth-child(5) {
    order: 4;
  }
  .review_card:nth-child(6) {
    order: 5;
  }
  .review_card:nth-child(7) {
    order: 6;
  }
  .review_card:nth-child(8) {
    order: 8;
  }
  .review_card .review_card_title {
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    color: #2d2d2d;
    margin: 0;
  }
  .review_card_info {
    display: flex;
    align-items: center;
    margin: 12px 0 15px;
  }
  .review_card_info span:first-child {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #fcfcfe;
    background: #001250;
    border-radius: 42px;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 42px;
  }
  .review_card_info span.review_card_email {
    font-family: "Oxygen", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #2d2d2d;
    margin-left: 8px;
  }
  .review_card_descr {
    background: #ffffff;
    border-radius: 16px;
    padding: 32px 16px;
  }
  .review_card_descr p {
    font-family: "Oxygen", sans-serif;
    font-weight: 400;
    font-size: 13.5px;
    line-height: 21px;
    color: #505050;
    margin: 0;
  }
  .review_card_descr p + p {
    margin-top: 15px;
  }

  @media (max-width: 320px) {
    .review_card .review_card_title {
      font-size: 14px !important;
    }
    .review_card_info span.review_card_email {
      font-size: 11px;
    }
    #reviewsBlock > h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 768px){
    #container-60629{
      padding-bottom: 0 !important;
    }
    .timeline{
      margin: 0 !important;
    }
    #row-165{
      padding-bottom: 28px !important;
    }
  }
  @media (min-width: 768px) {
    #row-186{
      padding-bottom: 0 !important;
    }
    #container-60629{
      padding-bottom: 72px !important;
    }

    #reviewsBlock {
      margin: 0;
      padding: 72px 0;
    }
  
    .review_nav {
      padding: 0 135px;
    }
  
    #reviewsBlock > h2 {
      font-size: 42px;
      line-height: 50px;
      margin: 0 auto 48px;
      max-width: 678px;
      text-align: center;
    }
    .review_nav .slick-arrow {
      position: absolute;
      bottom: -18px;
      z-index: 2;
      cursor: pointer;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background: #f4f4f4;
      border: 1px solid #f29b38;
      border-radius: 100px;
      line-height: 0;
      font-size: 0;
    }
    .review_nav .slick-dots {
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin: 59px auto 0;
      padding: 0;
      list-style: none;
    }
    .review_card {
      padding: 20px 16px 16px;
      margin-top: 0;
    }
    .review_card_descr {
      min-height: 524px;
    }
    .review_card .review_card_title {
      min-height: 40px;
    }
    .review_nav .slick-arrow.slick-prev {
      left: 31%;
    }
    .review_nav .slick-arrow.slick-next {
      right: 31%;
    }
    .review_nav .slick-arrow.slick-next::after,
    .review_nav .slick-arrow.slick-prev::after {
      position: absolute;
      content: "";
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
    }
    .review_nav .slick-arrow.slick-next::after {
      background-image: url(https://conversionratestore.github.io/projects/zenithprepacademy/img/arr_next_slider.svg);
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .review_nav .slick-arrow.slick-prev::after {
      background-image: url(https://conversionratestore.github.io/projects/zenithprepacademy/img/arr_prev_slider.svg);
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .slick-slide > div {
      padding: 0 20px;
    }
    .reviews_wrap {
      overflow: hidden;
      margin: 0 auto;
      padding: 0 0 30px;
    }
    .review_nav .slick-list {
      overflow: visible;
    }
    .reviews_block {
      position: relative;
      padding: 40px 74px;
      opacity: 0;
      transition: all 0.35s ease;
    }
    .slick-dots li button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 10px;
      height: 10px;
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 0;
      outline: none;
      background: #f4f4f4;
      border-radius: 50%;
      border: 1px solid #f29b38;
      margin: 0 8px;
    }
    .slick-dots li.slick-active button {
      background: #f29b38;
    }
  }
  @media (min-width: 930px) {
  .review_nav .slick-arrow.slick-prev {
      left: 37%;
  }
  .review_nav .slick-arrow.slick-next {
      right: 37%;
  }
  }

  @media (min-width: 1010px){
  .review_card_descr {
       min-height: 515px;
    }
  }
  @media (min-width: 1020px){
  .review_card_descr {
       min-height: 506px;
    }
  }
  @media (min-width: 1037px){
  .review_card_descr {
       min-height: 484px;
    }
  }
  @media (min-width: 1085px){
  .review_card_descr {
       min-height: 483px;
    }
  }
  @media (min-width: 1086px){
  .review_card_descr {
       min-height: 592px;
    }
  }
  @media (min-width: 1100px){
  .review_card_descr {
       min-height: 566px;
    }
  }
  @media (min-width: 1110px){
  .review_card_descr {
       min-height: 569px;
    }
  }
  @media (min-width: 1139px){
        .review_card_descr {
      min-height: 545px;
    }
  }
  @media (min-width: 1230px){
        .review_card_descr {
      min-height: 505px;
    }
  }
  @media (min-width: 1249px){
        .review_card_descr {
      min-height: 485px;
    }
  }
  @media (min-width: 1342px){
        .review_card_descr {
      min-height: 464px;
    }
  }
  @media (min-width: 1370px){
        .review_card_descr {
      min-height: 443px;
    }
  }
  @media (min-width: 1451px){
        .review_card_descr {
      min-height: 422px;
    }
  }
      </style>
      `;
    let arrR = {
      CL: [`Re: Your upcoming appointment is starting in approximately 10 minutes`, `<p>Hi Kevin;</p><p>Thank you very much for the conference on Friday. It was really eye-opening and very useful for us!!! We would really like to have the conference with our son. Unfortunately we cannot make it this Tuesday, as we ve discussed, he have a commitment I forgot about it. I apologize about that.</p><p>Since this week is the MEA week in Minnesota and we ll be away, we are wondering if we can reschedule the conference for the following week, maybe the 19th or 20th October, or whenever it is convenient for you.</p><p>We are looking forward to working with you.</p><p>All the best,</p><p>********</p>`, `1`],
      N: [`Re: College lecture - video recording / appointments`, `<p>Hello Kevin,</p><p>Thank you for taking time today to walk us through the college prep path. We found the conversation very informative and helped us understand the importance of counselor’s role in our kids education. Your thoughtfulness in building a strong offense of story telling per kid was inspirational and stayed with us even after the meet.</p><p>Please help schedule time with William on Nov 1st @9;00PM so we can take this path forward with Zenith.</p><p>Thanks,</p><p>********</p>`, `2`],
      R: [`Re: Interview confirmation w/ Zenith Prep Academy`, `<p>Hello Kevin,</p><p>Thank you for the email and for your time, Friday. It was a great pleasure talking to you, gaining valuable insights into college applications.</p>`, `3`],
      KJ: [`Re: Interview confirmation (today)`, `<p>Thanks Kevin!</p><p>We went slightly over the hour but definitely enjoyed our meeting with Will. Really appreciate the time that both of you extended in meeting with us and explaining your process and learning about our needs and expectations. Look forward to an update from you.</p><p>Thanks,</p><p>******</p>`, `4`],
      SG: [`Re: College lecture - video recording / appointments`, `<p>Hi Kevin,</p><p>I thoroughly enjoyed your lecture, it was super informative and we (my husband and I) would like to meet with you and our son (*** - 8th grader) to talk through our goals and your college counseling services as well as classes.</p><p>Thanks,</p><p>******</p>`, `5`],
      "S-": [`Re: Confirmation / Zenith Prep Academy`, `<p>Hi Kevin - got your email. Btw - Thanks a lot for the fantastic info today. Much appreciated.</p>`, `6`],
      RK: [`Re: Interview confirmation`, `<p>Thanks Kevin. Nice meeting you. Will see you on 11/25.</p><p>Have a great week.</p><p>BTW. ******* was impressed by your knowledge anf the program. She is not someone who is easily impressed.</p>`, `7`],
      AG: [`Thank You!`, `<p>Hello Mr. Kevin,</p><p>Thank you for all your help and time. The zoom sessions really confirmed my interest about enrolling in a program like yours. I really appreciate all of the insight and knowledge that you went out of your way to give me and hopefully I will get to work with Zenith in the future.</p><p>Best,</p><p>********</p>`, `8`],
    };

    let reviewsHtml = /*html */ `
      <div id="reviewsBlock">
        <h2>Hear what parents just like you think of Zenith after their college planning session with us</h2>
        <div class="reviews_wrap">
          <div class="review_nav"></div>
        </div>
      </div>
        `;
    function setList(name, title, text, count) {
      return `
              <div class="review_card" data-visab="${count}">
                  <h3 class="review_card_title">${title}</h3>
                  <div class="review_card_info">
                      <span>${name}</span>
                      <span class="review_card_email">to Kevin Hong &#60;kevin@zenithprepacademy.com&#62;</span>
                  </div>
                  <div class="review_card_descr">${text}</div>
              </div>
          `;
    }

    document.head.insertAdjacentHTML("beforeend", styleNew);

    if (!document.querySelector("#reviewsBlock")) {
      document.querySelector("#container-60629")?.insertAdjacentHTML("afterend", reviewsHtml);
    }
    if (document.querySelector("#reviewsBlock")) {
      for (let key in arrR) {
        document.querySelector(".review_nav").insertAdjacentHTML("beforeend", setList(key, arrR[key][0], arrR[key][1], arrR[key][2]));
      }
    }

    if (window.innerWidth > 768) {
      let slickInterval = setInterval(() => {
        if (typeof jQuery(".review_nav").slick === "function" && document.querySelector(".review_nav .review_card")) {
          clearInterval(slickInterval);
          //  slider
          let slider = jQuery(".review_nav").slick({
            slidesToShow: 2.55,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            infinite: false,
            responsive: [
              {
                breakpoint: 1087,
                settings: {
                  slidesToShow: 2,
                },
              },
            ],
          });
          slider.on("swipe", function () {
            pushDataLayer("Swipe slider");
          });

          document.querySelectorAll(".slick-dots li").forEach((el) => {
            el.addEventListener("click", (i, idx) => {
              pushDataLayer(`Click ${i.target.getAttribute("id")}`);
            });
          });

          document.querySelectorAll(".review_nav .slick-arrow").forEach((el) => {
            el.addEventListener("click", (i) => {
              if (i.target.classList.contains("slick-prev")) {
                pushDataLayer("Arrow click", `left`);
              }
              if (i.target.classList.contains("slick-next")) {
                pushDataLayer("Arrow click", `right`);
              }
            });
          });
        }
      }, 100);
    }

    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    });
    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 1,
    });

    let int = setInterval(() => {
      if (document.querySelector('[data-visab="1"]')) {
        clearInterval(int);
        obs.observe(document.querySelector('[data-visab="1"]'));
      }
    }, 100);
    let int2 = setInterval(() => {
      if (document.querySelector('[data-visab="2"]')) {
        clearInterval(int2);
        obs.observe(document.querySelector('[data-visab="2"]'));
      }
    }, 100);
    let int3 = setInterval(() => {
      if (document.querySelector('[data-visab="3"]')) {
        clearInterval(int3);
        obs.observe(document.querySelector('[data-visab="3"]'));
      }
    }, 100);
    let int4 = setInterval(() => {
      if (document.querySelector('[data-visab="4"]')) {
        clearInterval(int4);
        obs.observe(document.querySelector('[data-visab="4"]'));
      }
    }, 100);
    let int5 = setInterval(() => {
      if (document.querySelector('[data-visab="5"]')) {
        clearInterval(int5);
        obs.observe(document.querySelector('[data-visab="5"]'));
      }
    }, 100);
    let int6 = setInterval(() => {
      if (document.querySelector('[data-visab="6"]')) {
        clearInterval(int6);
        obs.observe(document.querySelector('[data-visab="6"]'));
      }
    }, 100);
    let int7 = setInterval(() => {
      if (document.querySelector('[data-visab="7"]')) {
        clearInterval(int7);
        obs.observe(document.querySelector('[data-visab="7"]'));
      }
    }, 100);
    let int8 = setInterval(() => {
      if (document.querySelector('[data-visab="8"]')) {
        clearInterval(int8);
        obs.observe(document.querySelector('[data-visab="8"]'));
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
          switch (i.target.getAttribute("data-visab")) {
            case "1":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "2":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "3":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "4":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "5":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "6":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "7":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
              break;
            case "8":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`);
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
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", "new_video_and_reviews", "variant_1");
      }
    }, 200);

    document.querySelector(".exp")?.remove();
  }
}, 400);
