let videoReviews = setInterval(() => {
  if (document.querySelector(".timeline")) {
    clearInterval(videoReviews)
    if (window.innerWidth > 768) {
      // cdn slider
      let scriptCustomSlider = document.createElement("script")
      scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      scriptCustomSlider.async = false
      document.head.appendChild(scriptCustomSlider)

      let scriptCustomSliderStyle = document.createElement("link")
      scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      scriptCustomSliderStyle.rel = "stylesheet"
      document.head.appendChild(scriptCustomSliderStyle)
    }

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
          eventCategory: `Exp: New video and reviews ${eventVar}`,
          eventAction: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        })
      } else {
        console.log(actionDataLayer)
        dataLayer.push({
          event: "event-to-ga",
          eventCategory: `Exp: New video and reviews ${eventVar}`,
          eventAction: `${actionDataLayer}`,
        })
      }
    }

    let styleNew = /*html */ `
    <style>
 .timeline,
 .mobile-iframe:not(.new_iframe) {
  display: none !important;
}
#col-full-100-165-114 .elHeadline.hsSize3 {
  font-family: "Oxygen", sans-serif;
  font-size: 30px !important;
  line-height: 38px;
  color: #2d2d2d;
}
#headline-94582-131-125 .elHeadline {
  font-family: "Oxygen", sans-serif;
  font-size: 14px !important;
  line-height: 24px;
  color: #9e0031;
}
#tmp_headline1-29319-159-179 {
  margin-top: 8px;
}
#tmp_headline1-29319-159-179 h1 {
  font-family: "Oxygen", sans-serif;
  font-weight: 400;
  font-size: 14px !important;
  line-height: 24px;
  color: #505050;
}
#tmp_customjs-62482-167-102 {
  margin-top: 20px !important;
}
.timeline_new {
  width: 100%;
  border: none;
  padding: 0;
  border-radius: 0;
  background: none;
  overflow: initial;
  margin: 0 0 16px !important;
}
.timeline_new_title_new {
  font-family: "Oxygen", sans-serif;
  font-weight: 700;
  font-size: 24px !important;
  line-height: 32px !important;
  color: #2d2d2d;
}
.timeline_list_new {
  position: relative;
  margin-top: 28px !important;
}
.timeline_item_new {
  position: relative;
  padding-left: 36px;
  color: #505050;
}
.timeline_item_new + .timeline_item_new {
  margin-top: 16px;
}
.timeline_list_new::before {
  content: "";
  position: absolute;
  left: 11px;
  top: 0;
  bottom: 0;
  background: #d2dfed;
  width: 2px;
  height: 95%;
}
.timeline_item_new:before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #d2dfed;
  transition: 0.35s;
}
.timeline_item_new:after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #d2dfed;
  left: 9px;
  top: 9px;
  transition: 0.35s;
}
.timeline_item_new_note:not(.active):not(.done):before {
  border-color: #9e0031;
}
.timeline_item_new_note:not(.active):not(.done):after {
  width: 4px;
  height: 13px;
  background: url(https://flopsi69.github.io/crs/zenithprepacademy/webinar/img/icon-note.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 6px;
  left: 10px;
}
.timeline_new_note {
  background: #ffffff;
  border: 1px solid #505050;
  border-radius: 8px;
  padding: 8px 16px;
}
.timeline_item_new_title {
  font-family: "Oxygen", sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505050;
}
.timeline_item_new_time {
  font-family: "Oxygen", sans-serif !important;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #505050;
  margin-top: 4px;
}
.timeline_new_note .timeline_item_new_title {
  font-weight: 700;
  color: #2d2d2d;
}
.timeline_new_note .timeline_item_new_time {
  color: #9e0031;
}
.timeline_item_new_caption {
  font-weight: 700;
  font-size: 12px;
  line-height: 21px;
  color: #9e0031;
  margin-top: 4px;
}
.timeline_item_new_note:not(.active):not(.done):before {
  border-color: #9e0031;
}
.timeline_item_new_note:not(.active):not(.done):after {
  width: 4px;
  height: 13px;
  background: url("https://flopsi69.github.io/crs/zenithprepacademy/webinar/img/icon-note.svg") center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 6px;
  left: 10px;
}
.active .timeline_new_note {
  border-color: #f29b38;
}
.active .timeline_new_note .timeline_item_new_title {
  font-weight: 700;
  color: #f29b38;
}
.active .timeline_new_note .timeline_item_new_time {
  color: #5b5b5b;
}
.active .timeline_new_note .timeline_item_new_caption {
  color: #5b5b5b;
}
.timeline_item_new.active:before {
  background-color: #f29b38;
  border-color: #f29b38;
}
.timeline_item_new.active:after {
  background-color: #fff;
}
.timeline_item_new.active .timeline_item_new_title {
  color: #f29b38;
  font-weight: 700;
}
.timeline_item_new.active .timeline_item_new_title:before {
  content: "";
  position: absolute;
  left: 11px;
  top: 24px;
  bottom: 0;
  background-color: #f29b38;
  width: 2px;
}
.timeline_item_new.done .timeline_item_new_title,
.timeline_item_new.done .timeline_item_new_time,
.timeline_item_new.done .timeline_item_new_caption {
  color: #888;
}
.timeline_item_new.done:before {
  border-color: #f29b38;
}
.timeline_item_new.done:after {
  width: 12px;
  height: 9px;
  background: url(https://conversionratestore.github.io/projects/zenithprepacademy/img/checked_icon.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 7.5px;
  left: 6px;
}
.timeline_item_new.done .timeline_item_new_title:before {
  content: "";
  position: absolute;
  left: 11px;
  top: 24px;
  bottom: 0;
  width: 2px;
  height: 100%;
  background-color: #f29b38;
}
.timeline_item_new:last-child .timeline_item_new_title:before {
  background-color: #f7f7f7 !important;
}

#container-60629 {
  padding: 40px 20px 28px !important;
  background: #f7f7f7 !important;
}
#col-full-117-165-113 > div,
#col-full-157-185-130 > div {
  padding: 0 !important;
}
#row-186 {
  display: none;
}
#row-165 {
  padding: 32px 0 0 !important;
}
a.schedule_new_btn {
  background: #f29b38;
  border: 2px solid #c27c2d;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2d2d2d;
  font-family: "Oxygen", sans-serif;
  text-decoration: unset;
  padding: 10px;
  outline: unset;
}
.is_sticky_box {
  padding: 20px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #f7f7f7;
  display: none;
}
#reviewsBlock {
  margin: 0 20px;
  padding: 32px 0;
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
}
.review_card_descr p + p {
  margin-top: 15px;
}
@media (max-width: 360px) {
  #headline-94582-131-125 .elHeadline,
  a.schedule_new_btn {
    font-size: 12px !important;
  }
  .timeline_item_new .timeline_new_note .timeline_item_new_caption {
    font-size: 11px;
  }
}
@media (max-width: 320px) {
  #headline-94582-131-125 .elHeadline,
  a.schedule_new_btn,
  .review_card .review_card_title {
    font-size: 14px !important;
  }
  .timeline_item_new .timeline_new_note .timeline_item_new_caption {
    font-size: 10px;
  }
  .fullContainer .containerInner {
    min-width: unset !important;
  }
  .review_card_info span.review_card_email {
    font-size: 11px;
  }
  #reviewsBlock > h2 {
    font-size: 18px;
  }
}
@media (min-width: 768px) {
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

  .containerWrapper #container-60629 {
    padding: 56px 20px 72px !important;
  }
  .fullContainer {
    min-height: unset !important;
  }
  #headline-94582-131-125 .elHeadline {
    font-family: "Open Sans", sans-serif;
    font-size: 14px !important;
    line-height: 21px;
  }
  #row-165 {
    padding: 0 !important;
  }
  #col-full-157-185-130 {
    padding: 0 5px !important;
  }
  .schedule_new_btn.first_var {
    margin-top: 56px;
    max-width: 420px;
    padding: 15px;
  }
  div.timeline_new {
    background: #f7f7f7;
    border: 2px solid #d2dfed;
    border-radius: 16px;
    margin: 0 4px 0 12px !important;
    padding: 20px 8px 10px 20px;
    overflow: hidden;
    width: 335px;
  }
  .timeline_list_new {
    margin-top: 12px !important;
    overflow: auto;
    height: 70%;
    padding-right: 9px;
  }
  .timeline_item_new:last-child .timeline_item_new_title:before {
    background-color: #f7f7f7 !important;
  }

  .timeline_new .timeline_list_new:before {
    height: 380%;
  }
  .timeline_list_new::-webkit-scrollbar {
    width: 3px;
    height: 8px;
  }
  .timeline_list_new::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 100px;
  }
}
@media (min-width: 950px) {
  .timeline_list_new {
    height: 79%;
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
@media (min-width: 1220px) {
  .timeline_list_new {
    height: 83%;
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
@media (min-width: 773px){
      .timeline_new .timeline_list_new:before {
        height: 369%;
  }
}
@media (min-width: 784px){
      .timeline_new .timeline_list_new:before {
        height: 364%;
  }
}
@media (min-width: 797px){
      .timeline_new .timeline_list_new:before {
        height: 358%;
  }
}
@media (min-width: 813px){
      .timeline_new .timeline_list_new:before {
        height: 350%;
  }
}
@media (min-width: 823px){
      .timeline_new .timeline_list_new:before {
        height: 345%;
  }
}
@media (min-width: 835px){
      .timeline_new .timeline_list_new:before {
        height: 339%;
  }
}
@media (min-width: 849px){
      .timeline_new .timeline_list_new:before {
        height: 334%;
  }
}
@media (min-width: 862px){
      .timeline_new .timeline_list_new:before {
        height: 328%;
  }
}
@media (min-width: 871px){
      .timeline_new .timeline_list_new:before {
        height: 324%;
  }
}
@media (min-width: 889px){
      .timeline_new .timeline_list_new:before {
        height: 317%;
  }
}
@media (min-width: 910px){
      .timeline_new .timeline_list_new:before {
        height: 312%;
  }
}
@media (min-width: 930px){
      .timeline_new .timeline_list_new:before {
        height: 306%;
  }
}
@media (min-width: 950px){
      .timeline_new .timeline_list_new:before {
        height: 267%;
  }
}
@media (min-width: 957px){
      .timeline_new .timeline_list_new:before {
        height: 262%;
  }
}
@media (min-width: 967px){
      .timeline_new .timeline_list_new:before {
        height: 256%;
  }
}
@media (min-width: 982px){
      .timeline_new .timeline_list_new:before {
        height: 252%;
  }
}
@media (min-width: 1000px){
      .timeline_new .timeline_list_new:before {
        height: 248%;
  }
}
@media (min-width: 1010px){
      .timeline_new .timeline_list_new:before {
        height: 245%;
  }
}
@media (min-width: 1027px){
      .timeline_new .timeline_list_new:before {
        height: 240%;
  }
}
@media (min-width: 1037px){
      .timeline_new .timeline_list_new:before {
        height: 238%;
  }
}
@media (min-width: 1047px){
      .timeline_new .timeline_list_new:before {
        height: 235%;
  }
}
@media (min-width: 1068px){
      .timeline_new .timeline_list_new:before {
        height: 230%;
  }
}
@media (min-width: 1095px){
      .timeline_new .timeline_list_new:before {
        height: 225%;
  }
}
@media (min-width: 1117px){
      .timeline_new .timeline_list_new:before {
        height: 219%;
  }
}
@media (min-width: 1136px){
      .timeline_new .timeline_list_new:before {
        height: 215%;
  }
}
@media (min-width: 1161px){
      .timeline_new .timeline_list_new:before {
        height: 210%;
  }
}
@media (min-width: 1180px){
      .timeline_new .timeline_list_new:before {
        height: 206%;
  }
}
@media (min-width: 1220px){
      .timeline_new .timeline_list_new:before {
        height: 190%;
  }
}
@media (min-width: 1225px){
      .timeline_new .timeline_list_new:before {
        height: 188%;
  }
}
@media (min-width: 1250px){
      .timeline_new .timeline_list_new:before {
        height: 185%;
  }
}
@media (min-width: 1275px){
      .timeline_new .timeline_list_new:before {
        height: 182%;
  }
}
    </style>
    `
    let arrR = {
      CL: [
        `Re: Your upcoming appointment is starting in approximately 10 minutes`,
        `<p>Hi Kevin;</p><p>Thank you very much for the conference on Friday. It was really eye-opening and very useful for us!!! We would really like to have the conference with our son. Unfortunately we cannot make it this Tuesday, as we ve discussed, he have a commitment I forgot about it. I apologize about that.</p><p>Since this week is the MEA week in Minnesota and we ll be away, we are wondering if we can reschedule the conference for the following week, maybe the 19th or 20th October, or whenever it is convenient for you.</p><p>We are looking forward to working with you.</p><p>All the best,</p><p>********</p>`,
        `1`,
      ],
      N: [
        `Re: College lecture - video recording / appointments`,
        `<p>Hello Kevin,</p><p>Thank you for taking time today to walk us through the college prep path. We found the conversation very informative and helped us understand the importance of counselor’s role in our kids education. Your thoughtfulness in building a strong offense of story telling per kid was inspirational and stayed with us even after the meet.</p><p>Please help schedule time with William on Nov 1st @9;00PM so we can take this path forward with Zenith.</p><p>Thanks,</p><p>********</p>`,
        `2`,
      ],
      R: [
        `Re: Interview confirmation w/ Zenith Prep Academy`,
        `<p>Hello Kevin,</p><p>Thank you for the email and for your time, Friday. It was a great pleasure talking to you, gaining valuable insights into college applications.</p>`,
        `3`,
      ],
      KJ: [
        `Re: Interview confirmation (today)`,
        `<p>Thanks Kevin!</p><p>We went slightly over the hour but definitely enjoyed our meeting with Will. Really appreciate the time that both of you extended in meeting with us and explaining your process and learning about our needs and expectations. Look forward to an update from you.</p><p>Thanks,</p><p>******</p>`,
        `4`,
      ],
      SG: [
        `Re: College lecture - video recording / appointments`,
        `<p>Hi Kevin,</p><p>I thoroughly enjoyed your lecture, it was super informative and we (my husband and I) would like to meet with you and our son (*** - 8th grader) to talk through our goals and your college counseling services as well as classes.</p><p>Thanks,</p><p>******</p>`,
        `5`,
      ],
      "S-": [`Re: Confirmation / Zenith Prep Academy`, `<p>Hi Kevin - got your email. Btw - Thanks a lot for the fantastic info today. Much appreciated.</p>`, `6`],
      RK: [
        `Re: Interview confirmation`,
        `<p>Thanks Kevin. Nice meeting you. Will see you on 11/25.</p><p>Have a great week.</p><p>BTW. ******* was impressed by your knowledge anf the program. She is not someone who is easily impressed.</p>`,
        `7`,
      ],
      AG: [
        `Thank You!`,
        `<p>Hello Mr. Kevin,</p><p>Thank you for all your help and time. The zoom sessions really confirmed my interest about enrolling in a program like yours. I really appreciate all of the insight and knowledge that you went out of your way to give me and hopefully I will get to work with Zenith in the future.</p><p>Best,</p><p>********</p>`,
        `8`,
      ],
    }
    let timelineEl = /*html */ `
    <div class='timeline_new'>
      <div class='timeline_new_title_new'>What you will discover in this free webinar:</div>

      <div class='timeline_list_new'>
        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>Intro</div>
          <div class='timeline_item_new_time'>(0:58)</div>
        </div>

        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>What kind of students we can help to be accepted to top universities</div>
          <div class='timeline_item_new_time'>(3:56)</div>
        </div>

        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>Strategies and five factors that affect the college application process</div>
          <div class='timeline_item_new_time'>(10:52)</div>
        </div>

        <div class='timeline_item_new timeline_item_new_note'>
          <div class='timeline_new_note'>
            <div class='timeline_item_new_title'>3 factors that prevent 6th - 12th graders from getting into the colleges they deserve</div>
            <div class='timeline_item_new_time'>(15:49) — Critical information.</div>
            <div class='timeline_item_new_caption'>If there is one thing you need to know, this is it.</div>
          </div>
        </div>

        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>Understanding what universities really want, their KPIs, and what they look for in future students</div>
          <div class='timeline_item_new_time'>(19:52)</div>
        </div>

        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>How does Zenith Prep Academy help students</div>
          <div class='timeline_item_new_time'>(32:48)</div>
        </div>

        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>How to play a strong offense </div>
          <div class='timeline_item_new_time'>(44:50)</div>
        </div>

        <div class='timeline_item_new'>
          <div class='timeline_item_new_title'>How to get into Zenith Prep Academy</div>
          <div class='timeline_item_new_time'>(1:02:13)</div>
        </div>
      </div>
    </div>
  `
    let reviewsHtml = /*html */ `
    <div id="reviewsBlock">
      <h2>Hear what parents just like you think of Zenith after their college planning session with us</h2>
      <div class="reviews_wrap">
        <div class="review_nav"></div>
      </div>
    </div>
      `
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
        `
    }

    document.head.insertAdjacentHTML("beforeend", styleNew)
    // if (window.innerWidth <= 768) {
    //   let intTimeSrc = setInterval(() => {
    //     if (document.querySelector(".mobile-iframe")) {
    //       clearInterval(intTimeSrc)
    //       if (document.querySelector(".mobile-iframe").src !== "https://player.vimeo.com/video/790201146?h=eda73cb7b6&loop=1&title=0&byline=0&portrait=0") {
    //         document.querySelector(".mobile-iframe").src = "https://player.vimeo.com/video/790201146?h=eda73cb7b6&loop=1&title=0&byline=0&portrait=0"
    //       }
    //       console.log(`changed src`)
    //     }
    //   }, 10)
    // }
    if (window.innerWidth <= 768) {
      let intTimeSrc = setInterval(() => {
        if (document.querySelector(".elCustomJS_code > div")) {
          clearInterval(intTimeSrc)
          if (!document.querySelector(".new_iframe")) {
            document
              .querySelector(".elCustomJS_code > div")
              .insertAdjacentHTML(
                "beforeend",
                `<iframe class="mobile-iframe new_iframe" src="https://player.vimeo.com/video/790201146?h=eda73cb7b6&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ZPA - National Webinar (August 2022)" data-ready="true"></iframe>`
              )
          }
          console.log(`render new iframe`)
        }
      }, 10)
    }

    document.querySelector("#row-165 iframe").src = "https://player.vimeo.com/video/790201146?h=eda73cb7b6&loop=1&title=0&byline=0&portrait=0"
    document.querySelector(".timeline")?.insertAdjacentHTML("afterend", timelineEl)
    if (!document.querySelector("#reviewsBlock")) {
      document.querySelector("#container-60629")?.insertAdjacentHTML("afterend", reviewsHtml)
    }
    if (document.querySelector("#reviewsBlock")) {
      for (let key in arrR) {
        document.querySelector(".review_nav").insertAdjacentHTML("beforeend", setList(key, arrR[key][0], arrR[key][1], arrR[key][2]))
      }
    }
    if (window.innerWidth <= 768) {
      if (!document.querySelector(".first_var")) {
        document.querySelector("#row-165")?.insertAdjacentHTML(
          "beforebegin",
          `<a target="_blank" class="schedule_new_btn first_var" data-count="1" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a>`
        )
      }
      if (!document.querySelector(".second_var")) {
        document.querySelector("#row-165")?.insertAdjacentHTML(
          "afterend",
          `<a target="_blank" class="schedule_new_btn second_var" data-count="2" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a>`
        )
      }
      if (document.querySelector("#reviewsBlock")) {
        document.querySelector("#reviewsBlock").insertAdjacentHTML(
          "afterend",
          `<div class="is_sticky_box"><a target="_blank" class="schedule_new_btn second_var" data-count="2" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a></div>`
        )
      }
      const element = document.querySelectorAll(".timeline_item_new")[7]
      function visible(target) {
        if (target.getBoundingClientRect().y < window.innerHeight - target.clientHeight - 110) {
          if (document.querySelector(".is_sticky_box")) {
            document.querySelector(".schedule_new_btn.second_var").style.display = "none"
            document.querySelector(".is_sticky_box").style.display = "block"
            document.querySelector("#reviewsBlock").style.paddingBottom = "130px"
          }
        } else {
          if (document.querySelector(".is_sticky_box")) {
            document.querySelector(".schedule_new_btn.second_var").style.display = "block"
            document.querySelector(".is_sticky_box").style.display = "none"
            document.querySelector("#reviewsBlock").style.paddingBottom = "32px"
          }
        }
      }
      window.addEventListener("scroll", function () {
        visible(element)
      })
      visible(element)
    } else {
      if (!document.querySelector(".first_var")) {
        document.querySelector("#row-165")?.insertAdjacentHTML(
          "afterend",
          `<a target="_blank" class="schedule_new_btn first_var" data-count="1" rel="noopener noreferrer" href="https://webinar.zenithprepacademy.com/booking-page1666161342817"
          >Schedule A Free<br/>College Planning Session Now</a>`
        )
      }
    }
    if (window.innerWidth > 768) {
      let slickInterval = setInterval(() => {
        if (typeof jQuery(".review_nav").slick === "function" && document.querySelector(".review_nav .review_card")) {
          clearInterval(slickInterval)
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
          })
          slider.on("swipe", function () {
            pushDataLayer("Swipe slider")
          })

          document.querySelectorAll(".slick-dots li").forEach((el) => {
            el.addEventListener("click", (i, idx) => {
              pushDataLayer(`Click ${i.target.getAttribute("id")}`)
            })
          })

          document.querySelectorAll(".review_nav .slick-arrow").forEach((el) => {
            el.addEventListener("click", (i) => {
              if (i.target.classList.contains("slick-prev")) {
                pushDataLayer("Arrow click", `left`)
              }
              if (i.target.classList.contains("slick-next")) {
                pushDataLayer("Arrow click", `right`)
              }
            })
          })
        }
      }, 100)
    }
    if (window.innerWidth > 768) {
      let waitVideo = setInterval(() => {
        if (document.querySelector(".start-session")) {
          clearInterval(waitVideo)
          document.querySelector(".start-session").addEventListener("click", function (e) {
            console.log(`click`)
            console.log(this)
            handleTimeline()
            if (!this.classList.contains("active")) {
              e.preventDefault()
              e.stopPropagation()

              this.classList.add("active")
              this.click()
              return false
            }
          })
        }
      }, 100)
    } else {
      let intervalVimeo = setInterval(() => {
        if (typeof Vimeo == "object") {
          clearInterval(intervalVimeo)
          const iframe = document.querySelector(".new_iframe")
          const player = new Vimeo.Player(iframe)
          console.log(player, `player`)
          console.log(document.querySelector(".new_iframe").src, `src`)

          if (player.setVolume) {
            player.setVolume(1)
          }
          player.on("play", function () {
            console.log("played the video!")
            handleTimeline()
          })
        }
      }, 100)
    }
    function handleTimeline() {
      // if (!document.querySelector(".timeline_item_new.active")) {
      //   document.querySelector(".timeline_item_new").classList.add("active")
      // }
      let iframe = document.querySelector(".fluid-width-video-wrapper iframe")
      if (window.innerWidth < 768) {
        iframe = document.querySelector(".new_iframe")
      }
      let playerEl = new Vimeo.Player(iframe)
      setInterval(() => {
        playerEl.getCurrentTime().then(function (time) {
          // if (!document.querySelector(".timeline_item_new.active")) return false

          if (time >= 58 && time < 3 * 60 + 56) {
            document.querySelector(".timeline_item_new:nth-child(1)").classList.add("active")
          } else if (time >= 3 * 60 + 56 && time < 10 * 60 + 52) {
            if (time >= 3 * 60 + 56) {
              console.log(`TIME>>>>>`)
              console.log(time, `time!!!!!!!!!!!!!!!!!!!!!!`)
            }
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(2)").classList.add("active")
          } else if (time >= 10 * 60 + 52 && time < 15 * 60 + 49) {
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(3)").classList.add("active")
          } else if (time >= 15 * 60 + 49 && time < 19 * 60 + 52) {
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(4)").classList.add("active")
          } else if (time >= 19 * 60 + 52 && time < 32 * 60 + 48) {
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(5)").classList.add("active")
          } else if (time >= 32 * 60 + 48 && time < 44 * 60 + 50) {
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(6)").classList.add("active")
          } else if (time >= 44 * 60 + 50 && time < 60 * 60 + 2.13) {
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(7)").classList.add("active")
          } else if (time > 60 * 60 + 2.13 && time < 3957) {
            document.querySelector(".timeline_item_new.active").classList.remove("active")
            document.querySelector(".timeline_item_new:nth-child(8)").classList.add("active")
          } else if (time >= 3957) {
            document.querySelector(".timeline_item_new:nth-child(8)").classList.add("done")
            document.querySelector(".timeline_item_new.active").classList.remove("active")
          }
          clearOtherTimelines()
        })
      }, 2000)
    }

    function clearOtherTimelines() {
      if (document.querySelector(".timeline_item_new.active")) {
        document.querySelector(".timeline_item_new.active").classList.remove("done")
        let nextEl = document.querySelector(".timeline_item_new.active").nextElementSibling
        let prevEl = document.querySelector(".timeline_item_new.active").previousElementSibling
        while (nextEl) {
          nextEl.classList.remove("done", "active")
          nextEl = nextEl.nextElementSibling
        }
        while (prevEl) {
          prevEl.classList.remove("active")
          prevEl.classList.add("done")
          prevEl = prevEl.previousElementSibling
        }
      }
    }
    document.querySelector("#container-60629 .schedule_new_btn.first_var")?.addEventListener("click", () => {
      pushDataLayer(`Schedule a free button first screen`, `btn 1`)
    })
    document.querySelector("#container-60629 .schedule_new_btn.second_var")?.addEventListener("click", () => {
      pushDataLayer(`Schedule a free button first screen`, `btn 2`)
    })
    document.querySelector(".is_sticky_box .schedule_new_btn.second_var")?.addEventListener("click", () => {
      let maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      let currentScrollHeight = window.pageYOffset.toFixed(0)
      pushDataLayer(`Schedule a free sticky button`, `${((currentScrollHeight / maxScrollHeight) * 100).toFixed(0)}%`)
    })
    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    })
    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 1,
    })

    let int = setInterval(() => {
      if (document.querySelector('[data-visab="1"]')) {
        clearInterval(int)
        obs.observe(document.querySelector('[data-visab="1"]'))
      }
    }, 100)
    let int2 = setInterval(() => {
      if (document.querySelector('[data-visab="2"]')) {
        clearInterval(int2)
        obs.observe(document.querySelector('[data-visab="2"]'))
      }
    }, 100)
    let int3 = setInterval(() => {
      if (document.querySelector('[data-visab="3"]')) {
        clearInterval(int3)
        obs.observe(document.querySelector('[data-visab="3"]'))
      }
    }, 100)
    let int4 = setInterval(() => {
      if (document.querySelector('[data-visab="4"]')) {
        clearInterval(int4)
        obs.observe(document.querySelector('[data-visab="4"]'))
      }
    }, 100)
    let int5 = setInterval(() => {
      if (document.querySelector('[data-visab="5"]')) {
        clearInterval(int5)
        obs.observe(document.querySelector('[data-visab="5"]'))
      }
    }, 100)
    let int6 = setInterval(() => {
      if (document.querySelector('[data-visab="6"]')) {
        clearInterval(int6)
        obs.observe(document.querySelector('[data-visab="6"]'))
      }
    }, 100)
    let int7 = setInterval(() => {
      if (document.querySelector('[data-visab="7"]')) {
        clearInterval(int7)
        obs.observe(document.querySelector('[data-visab="7"]'))
      }
    }, 100)
    let int8 = setInterval(() => {
      if (document.querySelector('[data-visab="8"]')) {
        clearInterval(int8)
        obs.observe(document.querySelector('[data-visab="8"]'))
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
          if (i.target.classList.contains("timeline_new")) {
            pushDataLayer(`Timeline section (visibility)`)
          }
          switch (i.target.getAttribute("data-visab")) {
            case "1":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "2":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "3":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "4":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "5":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "6":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "7":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            case "8":
              pushDataLayer("Reviews section (visibility)", `Reviews block ${i.target.querySelector(".review_card_title").textContent}`)
              break
            default:
              break
          }
          obs.unobserve(i.target)
        }
        obs2.unobserve(i.target)
      })
    }

    //
    let obs3 = new IntersectionObserver(visibility3, {
      threshold: 1,
    })
    let obs4 = new IntersectionObserver(visibility4, {
      threshold: 1,
    })

    let intTime = setInterval(() => {
      if (document.querySelector(".timeline_new_note")) {
        clearInterval(intTime)
        obs3.observe(document.querySelector(".timeline_new_note"))
      }
    }, 100)

    function visibility3(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          setTimeout(function () {
            obs4.observe(i.target)
          }, 3000)
        }
      })
    }
    function visibility4(entries) {
      entries.forEach((i) => {
        if (i.isIntersecting) {
          if (i.target.classList.contains("timeline_new_note")) {
            pushDataLayer(`Timeline section (visibility)`)
          }

          obs3.unobserve(i.target)
        }
        obs4.unobserve(i.target)
      })
    }
    //   document.querySelector("video").currentTime
    pushDataLayer("loaded")
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record)
        clarity("set", "new_video_and_reviews", "variant_1")
      }
    }, 200)

    document.querySelector(".exp")?.remove()
  }
}, 400)
