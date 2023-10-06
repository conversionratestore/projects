//https://vegasyacht.com/ pdp
let startPdp = setInterval(() => {
  if (document.querySelector(".fl-node-content iframe.rezdy") && window.location.hostname === "vegasyacht.com") {
    clearInterval(startPdp);

    // cdn slider
    let scriptCustomSlider = document.createElement("script");
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);

    let scriptCustomSliderStyle = document.createElement("link");
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    scriptCustomSliderStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomSliderStyle);
    //tooltip
    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    function pushDataLayer(name, desc, type, loc) {
      console.log(name + " / " + desc + " / " + type + " / " + loc);

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: "event-to-ga4",
        event_name: name,
        event_desc: desc,
        event_type: type,
        event_loc: loc,
      });
    }

    let stylePdp = /*html */ `
    <style>
.fl-module-video {
  margin-top: 40px;
}
.fl-row-content-wrap {
  padding: 36px 10px 0 !important;
}
.fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) {
  display: flex;
  justify-content: space-between;
  gap: 48px;
}
.fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div {
  float: unset;
}
.fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(1):not(.fl-node-5fbfca8d8a778) {
  max-width: 60%;
  width: 100%;
}
.fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(2) {
  max-width: 412px;
  width: 100%;
  /*
  flex: 1 0 412px;
  */
}
.fl-row-content.fl-row-fixed-width.fl-node-content {
  max-width: 1440px;
  margin: 0;
}
.fl-module-content.fl-node-content {
  margin: 0;
}
#custom-subheader {
  padding: 330px 0px 49px;
}
#custom-subheader h1 {
  color: #fff;
  font-family: "Playfair Display";
  font-size: 56px;
  font-weight: 400;
  line-height: 64px;
  margin-bottom: 20px !important;
}
.breadcrumbs {
  line-height: 24px;
}
.fl-col-small .fl-module-content.fl-node-content {
  border: 1px solid #e7e6de;
  padding: 10px 10px 0;
}
.fl-node-content iframe.rezdy {
  width: 100%;
}
/* */
h4.new_subtitle {
  color: #cfbe88;
  text-align: center;
  font-family: "Pinyon Script", cursive;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  margin: 0 0 8px;
}
h2.new_title {
  color: #28364b;
  text-align: center;
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 400;
  line-height: 56px;
  margin: 0 auto 74px;
  position: relative;
  max-width: 576px;
}
h2.new_title::after {
  content: "";
  background-image: url(https://vegasyacht.com/wp-content/uploads/2020/12/separator.png);
  position: absolute;
  width: 72px;
  height: 6px;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}
/*choice_and_icon_box */
.choice_and_icon_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e7e6de;
  padding: 59px 0 20px;
  margin-bottom: 40px;
}
.img_wrap_icon {
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
}
.img_wrap_icon > p.icon_share,
.img_wrap_icon > p.icon_how_to_find_us {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 !important;
  color: #4b4f58;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
  padding-bottom: 2px;
}
.img_wrap_icon > p.icon_share > span,
.img_wrap_icon > p.icon_how_to_find_us > span {
  border-bottom: 1px solid #4b4f58;
}
.img_wrap_choice {
  max-width: 173px;
}
.share {
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  right: -90px;
  top: 29px;
  border-radius: 100px;
  border: 1px solid #f1f0e8;
  background: #fff;
  box-shadow: 0px 6px 4px 0px rgba(52, 50, 41, 0.04);
  margin: 0 !important;
  padding: 4px 12px 4px 6px;
}
.share > span {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-transform: initial;
}
/*with_code_block */
#withCodeBlock {
  border-top: 1px solid #e7e6de;
  padding: 20px 0 40px;
  margin: 0 16px;
}
.with_code_block {
  max-width: 321px;
  border: 2px dashed #e7e6de;
  text-align: center;
  padding: 20px 24px;
  width: 100%;
  margin: 0 auto 26px;
}
.book_now_wrapp p {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 21px;
  font-weight: 400;
  line-height: 30px;
  text-transform: capitalize;
  margin: 0 0 8px !important;
}
.with_code_block .accent_color {
  color: #e60023;
  text-transform: uppercase;
}
.code_wrapp > p:nth-child(1) {
  position: relative;
  color: #28364b;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}
.code_wrapp > p:nth-child(2) {
  color: #28364b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 8px 0 0 !important;
}
.voucher_block {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #e60023;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
}
.copied {
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  right: -45px;
  top: 29px;
  border-radius: 100px;
  border: 1px solid #f1f0e8;
  background: #fff;
  box-shadow: 0px 6px 4px 0px rgba(52, 50, 41, 0.04);
  margin: 0 !important;
  padding: 4px 12px 4px 6px;
}
.copied > span {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-transform: initial;
}
.free_cancellationup_block {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 295px;
  margin: 0 auto;
  text-align: center;
}
.free_cancellationup_block p {
  color: #28364b;
  font-family: "Raleway";
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin: 0 8px !important;
}
.free_cancellationup_block p span {
  font-family: "Playfair Display";
  font-size: 20px;
  text-transform: uppercase;
}
.free_cancellationup_block svg {
  min-width: 24px;
  min-height: 24px;
}
.free_cancellationup_block svg:focus {
  outline: unset;
}
.free_cancellationup_block .tippy-tooltip {
  color: #28364b;
  font-family: "Raleway";
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  border: 1px solid #e7e6de;
  background: #fff;
  max-width: 190px !important;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
}
.free_cancellationup_block .tippy-content {
  padding: 12px;
  text-align: left !important;
}
.free_cancellationup_block .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
  border-bottom-color: #ffffff;
}
.free_cancellationup_block .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
  border-top-color: #ffffff;
}
/*mayAlsoLikeBlock */
#mayAlsoLikeBlock {
  background: #fff;
  padding: 90px 0 94px;
}
.may_also_like_block {
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
}
.may_also_like_list_first,
.may_also_like_list_second,
.may_also_like_list_third {
  list-style: none;
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  gap: 40px;
}
.may_also_like_link {
  width: 47%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
}
.may_also_like_link .img_wrapp {
  border: 16px solid #f1f0e8;
  max-width: 230px;
  min-width: 230px;
  width: 100%;
}
.may_also_like_title {
  font-family: "Playfair Display";
  color: #4b4f58;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  margin: 0 0 12px !important;
}
.may_also_like_price {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 0 24px !important;
}
.may_also_like_price span {
  color: #cab87e;
  font-family: "Playfair Display";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}
.learn_more_wrapp .learn_more_btn {
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 154px;
  height: 48px;
  gap: 8px;
  background: #cfbe88;
  color: #28364b;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  transition: all 200ms linear;
}
.learn_more_wrapp .learn_more_btn:hover {
  background: #3a3a3a;
  color: #ffffff;
  transition: all 200ms linear;
  opacity: 1;
}
#mayAlsoLikeBlock .slick-dots {
  display: flex;
  justify-content: center;
  margin: 48px 0 0;
  list-style: none;
}
#mayAlsoLikeBlock .slick-dots li button {
  position: relative;
  display: flex;
  width: 10px;
  height: 10px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background-color: transparent !important;
  border-color: transparent !important;
  padding: 5px;
}
#mayAlsoLikeBlock .slick-dots li button:before {
  position: absolute;
  content: "•";
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10px;
  height: 10px;
  text-align: center;
  border-radius: 50%;
  background-color: #e5e2d6;
}
#mayAlsoLikeBlock .slick-dots li + li {
  margin-left: 12px;
}
#mayAlsoLikeBlock .slick-dots li.slick-active button:before {
  background-color: #cfbe88;
}
/*reviewsBlock */
#reviewsBlock {
  background: #f1f0e8;
  padding: 72px 0px;
}
.reviews_block {
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
}
.reviews_slider {
  max-width: 1243px;
  margin: 0 auto;
  position: relative;
}
.reviews_link {
  position: relative;
  background: #fff;
  padding: 24px 24px 40px;
  min-height: 308px;
}
.reviews_service {
  position: absolute;
  right: 16px;
  top: 16px;
}
.reviews_service img {
  max-width: 95px;
  max-height: 20px;
}
.reviews_name {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 4px !important;
}
.reviews_verified {
  color: #07a64f;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Raleway";
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 20px !important;
  display: flex;
  align-items: center;
  gap: 4px;
}
.preview_text {
  white-space: pre-line;
  color: #28364b;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px !important;
  overflow: hidden;
  height: 120px;
}
.preview_text::-webkit-scrollbar {
  width: 4px;
}
.preview_text::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #788188;
}
.reviews_read_more_btn {
  color: #28364b;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  border-bottom: 1px solid #28364b;
  cursor: pointer;
}
.reviews_read_more_btn.disable {
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
}
#reviewsBlock .slick-slide {
  margin: 0 8px;
}
#reviewsBlock .slick-arrow {
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 135px;
  opacity: 0.8;
  background: #fff;
  width: 40px;
  height: 40px;
}
#reviewsBlock .slick-arrow.slick-disabled {
  opacity: 0.3;
}
#reviewsBlock .next_btn {
  right: -60px;
}
#reviewsBlock .prev_btn {
  left: -60px;
}
#reviewsBlock .slick-dots {
  display: flex;
  justify-content: center;
  margin: 48px 0 0;
  list-style: none;
}
#reviewsBlock .slick-dots li button {
  position: relative;
  display: flex;
  width: 10px;
  height: 10px;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background-color: transparent !important;
  border-color: transparent !important;
  padding: 5px;
}
#reviewsBlock .slick-dots li button:before {
  position: absolute;
  content: "•";
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 10px;
  height: 10px;
  text-align: center;
  border-radius: 50%;
  background-color: white;
}
#reviewsBlock .slick-dots li + li {
  margin-left: 12px;
}
#reviewsBlock .slick-dots li.slick-active button:before {
  background-color: #cfbe88;
}
/*howToFindUsBlock*/
#howToFindUsBlock {
  background: #fff;
  padding: 94px 0;
}
.how_to_find_us_block {
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
}
.how_to_find_us_contacts {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 71px;
}
.how_to_find_us_contacts .how_to_find_us_maps {
  width: 50%;
}
.how_to_find_us_contacts .how_to_find_us_info {
  width: 47%;
  margin-top: 20px;
}
.how_to_find_us_descr {
  color: #4b4f58;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0 0 32px;
}
.how_to_find_us_contacts #footer-social li a {
  color: inherit;
}
.how_to_find_us_contacts #footer-social li a:hover {
  color: #cebd88;
}
.how_to_find_accardion {
  list-style: none;
  max-width: 960px;
  margin: 56px auto 0;
}
.how_to_find_accardion_block {
  border: 1px solid #e7e6de;
}
.how_to_find_accardion_block:nth-child(2) {
  border-top: unset;
}
.how_to_find_accardion_block:nth-child(3) {
  border-top: unset;
}
.how_to_find_accardion_block:nth-child(4) {
  border-top: unset;
}
.how_to_find_accardion_link {
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.how_to_find_accardion_link h3 {
  color: #28364b;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0;
}
.how_to_find_accardion_lists {
  display: none;
}
.how_to_find_accardion_lists > div {
  padding: 0 16px 24px;
}
.how_to_find_accardion_lists p {
  position: relative;
  max-width: 815px;
  color: #4b4f58;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 0 5px;
  padding-left: 24px;
}
.how_to_find_accardion_lists p::before {
  position: absolute;
  content: "";
  background: #28364b;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  left: 0;
  top: 6px;
}
.how_to_find_accardion_lists p + p {
  margin-top: 6px;
}
.how_to_find_accardion_link > span svg {
  transition: all 0.3s ease;
}
.how_to_find_accardion_link.active_block > span svg {
  transform: rotate(90deg);
  transition: all 0.3s ease;
}
/*lakeLasvegasWaterSportsBlock */
#lakeLasvegasWaterSportsBlock {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #28364b;
}
.lake_lasvegas_water_sports_list {
  display: flex;
  list-style: none;
  align-items: flex-start;
  justify-content: center;
  max-width: 1500px;
  margin: 0 auto;
  gap: 50px;
}
.lake_lasvegas_water_sports_list li {
  max-width: 170px;
  width: 100%;
}
.how_to_find_accardion.mob_var,
.load_more_reviews.mob_var {
  display: none;
}
/*looking */
.looking {
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 26px 0 42px;
}
.looking > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.looking > div p {
  color: #28364b;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 0 0 4px !important;
}
/*accardion_all_inform_block */
.accardion_all_inform_block {
  list-style: none;
  margin: 20px 0 32px;
}
.fl-rich-text h3 {
  color: #28364b;
  font-family: "Playfair Display";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-transform: uppercase;
  margin-bottom: 20px !important;
}
.fl-rich-text p,
.fl-rich-text > ul > li,
.how_to_find_accardion_lists > div > ul > li {
  color: #4b4f58;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
.fl-rich-text > ul {
  margin: 0 0 20px 22px;
}
.how_to_find_accardion_lists > div > ul {
  margin: 0 0 0 20px;
}
.how_to_find_accardion_lists > div > ul > li {
  padding-left: 10px;
}
.how_to_find_accardion_lists > div > ul + p {
  position: unset;
  padding: 0;
  margin: 10px 0 0;
}
/* */
.fl-col-content .fl-module-photo,
.fl-module-slideshow {
  display: none !important;
}
.swiper_arrow {
  width: 40px !important;
  height: 40px !important;
  background: rgba(31, 27, 27, 0.5);
}
.swiper .swiper-button-next::after,
.swiper .swiper-button-prev::after {
  content: "";
}
/* MAIN SLIDER */
.main_slider {
  margin-bottom: 8px;
  display: block;
}
.main_slider .swiper-slide img {
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  max-height: 440px;
}
.swiper-slide img {
  object-fit: contain;
}
.main_slider .swiper-slide {
  text-align: center;
  height: auto;
}
.main_slider .swiper-pagination {
  display: none;
}
.main_slider_sync .swiper-slide {
  max-width: 120px;
  opacity: 0.8;
}
.main_slider_sync .swiper-slide.swiper-slide-thumb-active {
  opacity: 1;
}
.main_slider_sync .swiper-slide img {
  height: 120px;
  min-width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.35s;
  object-fit: cover;
}

@media (hover: hover) {
  .main_slider_sync .swiper-slide:not(.swiper-slide-thumb-active) img:hover {
    opacity: 0.6;
  }
}

@media (max-width: 1295px) {
  .reviews_slider {
    max-width: 1000px;
  }
  .fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(1):not(.fl-node-5fbfca8d8a778) {
    max-width: 55%;
  }
}
@media (max-width: 1200px) {
  .reviews_slider {
    max-width: 900px;
  }
}
@media (max-width: 1168px) {
  .book_now_wrapp p {
    font-size: 17px;
  }
  .with_code_block {
    padding: 20px 16px;
  }
  .free_cancellationup_block p span {
    font-size: 18px;
  }
}
@media (max-width: 1050px) {
  .reviews_slider {
    max-width: 800px;
  }
}
@media (max-width: 768px) {
  #lakeLasvegasWaterSportsBlock.desk_var,
  .may_also_like_list_first.desk_var,
  .may_also_like_list_second.desk_var,
  .may_also_like_list_third.desk_var {
    display: none;
  }
  .fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) {
    display: block;
  }
  .load_more_reviews.mob_var {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #28364b;
    height: 48px;
    max-width: 250px;
    width: 100%;
    gap: 8px;
    color: #fff;
    font-family: "Raleway";
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    margin: 32px auto 0;
  }
  .breadcrumbs {
    color: #28364b;
    font-family: "Raleway";
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 20px auto;
    width: 90%;
  }
  .ast-header-break-point .ast-mobile-header-inline .main-header-container,
  .ast-header-break-point .ast-mobile-header-stack .main-header-container {
    position: relative;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
  }
  .ast-header-break-point .site-header .main-header-bar-wrap .site-branding {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    padding: 0;
  }
  .ast-header-break-point .site-header .main-header-bar-wrap .site-branding > div {
    padding: 0;
  }
  #custom-subheader {
    padding: 163px 0px 40px;
  }
  #custom-subheader h1 {
    font-size: 36px;
    line-height: 44px;
    margin: 0 !important;
  }
  .fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(1):not(.fl-node-5fbfca8d8a778),
  .fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(2) {
    max-width: 100%;
  }
  .fl-row[data-node] .fl-row-content-wrap {
    padding: 0 !important;
    width: 90%;
    margin: 0 auto;
  }
  h4.new_subtitle {
    line-height: 40px;
  }
  h2.new_title {
    font-size: 30px !important;
    line-height: 36px !important;
    margin: 0 auto 54px;
  }
  h2.new_title::after {
    bottom: -15px;
  }
  .fl-col-small:not(.fl-col-small-full-width) {
    max-width: unset !important;
    margin: 0 -19px !important;
  }
  .fl-col-small .fl-module-content.fl-node-content {
    border: none;
  }
  /*advisor_and_icon_box */
  .advisor_and_icon_box {
    margin: 24px 0 4px;
    border: 1px solid #e7e6de;
  }
  .lav_advisor {
    padding: 16px 20px;
    border-bottom: 1px solid #e7e6de;
  }
  .lav_advisor > img {
    max-width: 183px;
  }
  .lav_advisor > p {
    color: #28364b;
    font-family: "Raleway";
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    margin: 4px 0 0 !important;
  }
  .lav_advisor_count {
    font-weight: 600;
  }
  .lav_advisor > p > a {
    border-bottom: 1px solid #0f0900;
    color: #28364b;
  }
  .img_wrap_icon {
    padding: 17px 20px;
    gap: 32px;
  }
  .share {
    right: 42px;
    top: 51px;
  }
  /*withCodeBlock */
  #withCodeBlock {
    border-top: none;
    margin: 10px 0 40px;
    padding: 0;
  }
  .with_code_block {
    padding: 24px;
    margin: 0 auto 24px;
  }
  .book_now_wrapp p {
    font-size: 21px;
  }
  .free_cancellationup_block p span {
    font-size: 20px;
  }
  .free_cancellationup_block {
    border-top: 1px solid #e7e6de;
    padding-top: 24px;
    max-width: unset;
  }
  .free_cancellationup_block p {
    max-width: 236px;
  }
  /*awards_block */
  .awards_block {
    padding: 8px 0 20px;
    margin: 0 0 20px;
    border-bottom: 1px solid #e7e6de;
  }
  .choice_caption {
    color: #28364b;
    font-family: "Playfair Display";
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-transform: uppercase;
    margin: 0 0 12px;
  }
  .awards_block > img {
    max-width: 173px;
  }
  /**#mayAlsoLikeBlock */
  #mayAlsoLikeBlock {
    padding: 72px 0;
  }
  .may_also_like_block {
    width: 100%;
  }
  .may_also_like_link .img_wrapp {
    border: 10px solid #f1f0e8;
    max-width: 180px;
  }
  #mayAlsoLikeBlock .slick-slide {
    margin: 0 12px;
  }
  #mayAlsoLikeBlock .slick-dots {
    margin-top: 70px;
  }
  .may_also_like_title {
    font-size: 22px;
    line-height: 30px;
    margin: 0 0 16px !important;
  }
  .may_also_like_price {
    margin: 0 !important;
  }
  .may_also_like_link {
    width: 100% !important;
    display: flex !important;
    flex-direction: column;
  }
  .learn_more_wrapp {
    text-align: center;
  }
  .learn_more_wrapp .learn_more_btn {
    display: none;
  }
  /*#reviewsBlock */
  #reviewsBlock {
    padding: 40px 0;
  }
  .reviews_link + .reviews_link {
    margin-top: 8px;
  }
  .reviews_link {
    padding: 16px 20px 32px;
    min-height: 240px;
  }
  .reviews_link:nth-child(n + 3).load_var {
    display: none;
  }
  /**logos */
  .logos.lav_mob {
    padding: 72px 0 0;
    width: 90%;
    margin: 0 auto;
  }
  .logos.lav_mob > img{
    width: 100%;
  }
  /*#howToFindUsBlock */
  #howToFindUsBlock {
    padding: 72px 0;
  }
  .how_to_find_us_contacts {
    flex-direction: column;
    gap: 32px;
  }
  .how_to_find_us_contacts .how_to_find_us_info {
    width: 100%;
    margin-top: 0;
  }
  .how_to_find_us_contacts .how_to_find_us_maps {
    width: 100%;
  }
  .how_to_find_us_descr {
    margin: 0 0 24px !important;
  }
  .how_to_find_accardion {
    margin: 40px auto 0;
  }
  .how_to_find_accardion_link h3 {
    font-size: 18px;
    line-height: 24px;
  }
  .how_to_find_accardion.mob_var {
    display: block;
  }
  /*.looking */
  .looking {
    align-items: flex-start;
    gap: 8px;
    margin: 0 0 14px;
    flex-direction: column;
    padding-top: 14px;
    border-top: 1px solid #e7e6de;
  }
  .fl-rich-text h3 {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px !important;
  }
  .accardion_all_inform_block {
    margin: 0;
  }
  .dress_code .how_to_find_accardion_lists p {
    position: unset;
    padding: 0;
    margin: 0;
  }
  .preview_text {
    height: 93px;
  }
  /*main_slider_sync  */
  .main_slider_sync {
    display: none !important;
  }
  .main_slider .swiper-pagination {
    display: flex;
    position: initial;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
  .main_slider {
    margin-bottom: 0;
  }
  .main_slider .swiper-slide img {
    max-height: 370px;
    object-fit: cover;
    min-height: 370px;
  }
  .swiper-pagination-bullet-active.swiper-pagination-bullet-active {
    background: #cfbe88;
    opacity: 1;
  }
  .swiper-pagination-bullet {
    background: #e5e2d6;
    opacity: 1;
  }
  .swiper_arrow {
    background: rgba(40, 54, 75, 0.5);
    border-radius: 50%;
    transform: translateY(-50%);
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    margin: 0 8px !important;
  }
  .fl-module-video {
    margin-top: 24px;
  }
}
    </style>
    `;
    let lookingHtml = `
    <div class="looking">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9.87143 11.982C9.87143 12.5271 10.088 13.0498 10.4734 13.4352C10.8588 13.8206 11.3815 14.0372 11.9266 14.0372C12.4717 14.0372 12.9944 13.8206 13.3798 13.4352C13.7652 13.0498 13.9818 12.5271 13.9818 11.982C13.9818 11.4369 13.7652 10.9142 13.3798 10.5288C12.9944 10.1434 12.4717 9.92683 11.9266 9.92683C11.3815 9.92683 10.8588 10.1434 10.4734 10.5288C10.088 10.9142 9.87143 11.4369 9.87143 11.982ZM19.894 11.5086C18.1545 7.84414 15.525 6 12 6C8.47319 6 5.84551 7.84414 4.10596 11.5104C4.03619 11.6582 4 11.8195 4 11.9829C4 12.1463 4.03619 12.3077 4.10596 12.4554C5.84551 16.1199 8.47502 17.964 12 17.964C15.5268 17.964 18.1545 16.1199 19.894 12.4536C20.0353 12.1563 20.0353 11.8113 19.894 11.5086ZM11.9266 15.2115C10.143 15.2115 8.69705 13.7656 8.69705 11.982C8.69705 10.1984 10.143 8.75245 11.9266 8.75245C13.7102 8.75245 15.1561 10.1984 15.1561 11.982C15.1561 13.7656 13.7102 15.2115 11.9266 15.2115Z" fill="#CFBE88"/>
            </svg>
            <p><span class="people_txt">4</span> people are looking at this at the moment</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 6H15.5V5.5C15.5 5.36739 15.4473 5.24021 15.3536 5.14645C15.2598 5.05268 15.1326 5 15 5C14.8674 5 14.7402 5.05268 14.6464 5.14645C14.5527 5.24021 14.5 5.36739 14.5 5.5V6H9.5V5.5C9.5 5.36739 9.44732 5.24021 9.35355 5.14645C9.25979 5.05268 9.13261 5 9 5C8.86739 5 8.74021 5.05268 8.64645 5.14645C8.55268 5.24021 8.5 5.36739 8.5 5.5V6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6ZM7 9V7H8.5V7.5C8.5 7.63261 8.55268 7.75979 8.64645 7.85355C8.74021 7.94732 8.86739 8 9 8C9.13261 8 9.25979 7.94732 9.35355 7.85355C9.44732 7.75979 9.5 7.63261 9.5 7.5V7H14.5V7.5C14.5 7.63261 14.5527 7.75979 14.6464 7.85355C14.7402 7.94732 14.8674 8 15 8C15.1326 8 15.2598 7.94732 15.3536 7.85355C15.4473 7.75979 15.5 7.63261 15.5 7.5V7H17V9H7Z" fill="#CFBE88"/>
              <path d="M11.7485 15L10 13.104L10.4371 12.6299L11.7485 14.052L14.5629 11L15 11.474L11.7485 15Z" fill="white"/>
            </svg>
            <p>Booked <span class="times_txt">3</span> times today</p>
          </div>
        </div>
    `;
    let swiperImg = /*html */ `
    <div class="swiper main_slider">
          <div class="swiper-wrapper"></div>
          <div class="swiper-button-prev swiper_arrow"><img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/slider_arr_l.svg"></div>
          <div class="swiper-button-next swiper_arrow"><img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/slider_arr_r.svg"></div>
          <div class="swiper-pagination"></div>
    </div>

    <div class="swiper main_slider_sync">
      <div class="swiper-wrapper"></div>
    </div>
    `;
    let advisorAndIconBox = /*html */ `
    <div class="advisor_and_icon_box">
      <div class="lav_advisor">
        <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/tripadvisor_points.png" />
        <p>based on <span class="lav_advisor_count">954 reviews</span> <span style="margin-inline: 8px">·</span> <a href="https://www.tripadvisor.ru/Attraction_Review-g45963-d7161682-Reviews-Lake_Las_Vegas_Water_Sports-Las_Vegas_Nevada.html" target="_blank">See all Reviews</a></p>
      </div>
      <div class="img_wrap_icon">
        <p class="icon_how_to_find_us">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M7.64773 0C3.43074 0 0 3.43074 0 7.64773C0 9.39039 1.22453 11.9768 3.63957 15.3349C5.40203 17.7856 7.19008 19.7838 7.20793 19.8037C7.32 19.9287 7.47992 20 7.64773 20C7.81555 20 7.97547 19.9287 8.08754 19.8038C8.10539 19.7839 9.89344 17.7857 11.6559 15.335C14.071 11.9768 15.2955 9.39043 15.2955 7.64777C15.2955 3.43074 11.8647 0 7.64773 0ZM7.64773 18.5141C5.50113 16.0289 1.18184 10.4494 1.18184 7.64773C1.18184 4.08242 4.08242 1.18184 7.64773 1.18184C11.213 1.18184 14.1136 4.08242 14.1136 7.64773C14.1136 10.4494 9.79434 16.0289 7.64773 18.5141Z" fill="#CFBE88" />
            <path d="M7.64773 3.96167C5.54698 3.96167 3.83792 5.67073 3.83792 7.77147C3.83792 9.87222 5.54698 11.5813 7.64773 11.5813C9.74847 11.5813 11.4575 9.87222 11.4575 7.77147C11.4575 5.67073 9.74847 3.96167 7.64773 3.96167ZM7.64773 10.3994C6.19866 10.3994 5.01976 9.22046 5.01976 7.7714C5.01976 6.32233 6.19866 5.14343 7.64773 5.14343C9.09679 5.14343 10.2757 6.32233 10.2757 7.7714C10.2757 9.22046 9.09679 10.3994 7.64773 10.3994Z" fill="#CFBE88" />
          </svg>
          <span>How to find us</span>
        </p>
        <p class="icon_share">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M19.3582 9.39624C18.9883 9.39624 18.7417 9.64285 18.7417 10.0127V14.8215C18.7417 17.1642 16.8306 19.0137 14.5495 19.0137H5.42524C3.08252 19.0137 1.23301 17.1642 1.23301 14.8215V5.69721C1.23301 3.3545 3.14417 1.50498 5.42524 1.50498H10.049C10.4189 1.50498 10.6655 1.25838 10.6655 0.888477C10.6655 0.518575 10.4189 0.271973 10.049 0.271973H5.42524C2.40437 0.271973 0 2.73799 0 5.69721V14.8215C0 17.8424 2.46602 20.2467 5.42524 20.2467H14.5495C17.5704 20.2467 19.9748 17.8424 19.9748 14.8215V10.0127C19.9748 9.7045 19.7282 9.39624 19.3582 9.39624Z" fill="#CFBE88" />
            <path d="M7.58301 11.1223C7.45971 11.4306 7.64466 11.8005 7.95291 11.9238H8.13786C8.38447 11.9238 8.63107 11.7388 8.75437 11.4922C10.2956 7.48496 13.8714 4.52573 18.1252 3.84758L16.6456 6.4369C16.4607 6.74515 16.584 7.11505 16.8922 7.3C16.9539 7.36166 17.0772 7.36166 17.2005 7.36166C17.4471 7.36166 17.632 7.23835 17.7553 7.0534L19.9131 3.16942C20.0981 2.86117 19.9748 2.49127 19.6665 2.30632L15.6592 0.0868988C15.351 -0.0980526 14.9811 0.0252484 14.7961 0.333501C14.6112 0.641753 14.7345 1.01166 15.0427 1.19661L17.6937 2.67622C13.0699 3.47767 9.24757 6.6835 7.58301 11.1223Z" fill="#CFBE88" />
          </svg>
          <span>Share</span>
        </p>
      </div>
    </div>
    `;
    let awardsBlock = /*html */ `
    <div class="awards_block">
        <div class="choice_caption">Awards</div>
        <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/choice.png">
    </div>
    `;
    let choiceAndIconBox = /*html */ `
    <div class="choice_and_icon_box">
      <div class="img_wrap_choice">
        <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/choice.png" />
      </div>
      <div class="img_wrap_icon">
        <p class="icon_how_to_find_us">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M7.64773 0C3.43074 0 0 3.43074 0 7.64773C0 9.39039 1.22453 11.9768 3.63957 15.3349C5.40203 17.7856 7.19008 19.7838 7.20793 19.8037C7.32 19.9287 7.47992 20 7.64773 20C7.81555 20 7.97547 19.9287 8.08754 19.8038C8.10539 19.7839 9.89344 17.7857 11.6559 15.335C14.071 11.9768 15.2955 9.39043 15.2955 7.64777C15.2955 3.43074 11.8647 0 7.64773 0ZM7.64773 18.5141C5.50113 16.0289 1.18184 10.4494 1.18184 7.64773C1.18184 4.08242 4.08242 1.18184 7.64773 1.18184C11.213 1.18184 14.1136 4.08242 14.1136 7.64773C14.1136 10.4494 9.79434 16.0289 7.64773 18.5141Z" fill="#CFBE88" />
            <path d="M7.64773 3.96167C5.54698 3.96167 3.83792 5.67073 3.83792 7.77147C3.83792 9.87222 5.54698 11.5813 7.64773 11.5813C9.74847 11.5813 11.4575 9.87222 11.4575 7.77147C11.4575 5.67073 9.74847 3.96167 7.64773 3.96167ZM7.64773 10.3994C6.19866 10.3994 5.01976 9.22046 5.01976 7.7714C5.01976 6.32233 6.19866 5.14343 7.64773 5.14343C9.09679 5.14343 10.2757 6.32233 10.2757 7.7714C10.2757 9.22046 9.09679 10.3994 7.64773 10.3994Z" fill="#CFBE88" /></svg>
          <span>How to find us</span>
        </p>
        <p class="icon_share">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <path d="M19.3582 9.39624C18.9883 9.39624 18.7417 9.64285 18.7417 10.0127V14.8215C18.7417 17.1642 16.8306 19.0137 14.5495 19.0137H5.42524C3.08252 19.0137 1.23301 17.1642 1.23301 14.8215V5.69721C1.23301 3.3545 3.14417 1.50498 5.42524 1.50498H10.049C10.4189 1.50498 10.6655 1.25838 10.6655 0.888477C10.6655 0.518575 10.4189 0.271973 10.049 0.271973H5.42524C2.40437 0.271973 0 2.73799 0 5.69721V14.8215C0 17.8424 2.46602 20.2467 5.42524 20.2467H14.5495C17.5704 20.2467 19.9748 17.8424 19.9748 14.8215V10.0127C19.9748 9.7045 19.7282 9.39624 19.3582 9.39624Z" fill="#CFBE88" />
            <path d="M7.58301 11.1223C7.45971 11.4306 7.64466 11.8005 7.95291 11.9238H8.13786C8.38447 11.9238 8.63107 11.7388 8.75437 11.4922C10.2956 7.48496 13.8714 4.52573 18.1252 3.84758L16.6456 6.4369C16.4607 6.74515 16.584 7.11505 16.8922 7.3C16.9539 7.36166 17.0772 7.36166 17.2005 7.36166C17.4471 7.36166 17.632 7.23835 17.7553 7.0534L19.9131 3.16942C20.0981 2.86117 19.9748 2.49127 19.6665 2.30632L15.6592 0.0868988C15.351 -0.0980526 14.9811 0.0252484 14.7961 0.333501C14.6112 0.641753 14.7345 1.01166 15.0427 1.19661L17.6937 2.67622C13.0699 3.47767 9.24757 6.6835 7.58301 11.1223Z" fill="#CFBE88" />
          </svg>
          <span>Share</span>
        </p>
      </div>
    </div>
    `;
    let logos = /*html */ `
    <div class="logos lav_desk">
          <img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/logos.png">
    </div>
    `;
    let logosMob = /*html */ `
    <div class="logos lav_mob">
      <img src="https://conversionratestore.github.io/projects/llvws/improvingPDP/images/logos_mob.png">
    </div>
    `;
    let withCodeBlock = /*html */ `
    <div id="withCodeBlock">
      <div class="with_code_block">
        <div class="book_now_wrapp">
          <p>Book now & enjoy <span class="accent_color">10% off</span></p>
        </div>
        <div class="code_wrapp">
          <p>
            <span>With code:</span>
            <span class="voucher_block" data-clipboard-text="BOOK10">BOOK10
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.598 3.63594H11.4163V1.41016C11.4163 1.18364 11.2363 1 11.0143 1H2.40202C2.18 1 2 1.18364 2 1.41016V11.9539C2 12.1804 2.18 12.3641 2.40202 12.3641H4.58368V14.5898C4.58368 14.8164 4.76368 15 4.9857 15H13.598C13.82 15 14 14.8164 14 14.5898V4.04609C14 3.81958 13.82 3.63594 13.598 3.63594ZM2.80405 11.5438V1.82031H10.6123V4.03923C10.6122 4.04153 10.6119 4.04377 10.6119 4.04609C10.6119 4.04842 10.6122 4.05066 10.6123 4.05298V11.5438H2.80405ZM13.196 14.1797H5.38773V12.3641H11.0143C11.2363 12.3641 11.4163 12.1804 11.4163 11.9539V4.45625H13.196V14.1797Z" fill="#CFBE88" />
              </svg>
            </span>
          </p>
          <p>Enter code when booking an event</p>
        </div>
      </div>
      <div class="free_cancellationup_block">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19.4281 2.73424C19.2867 2.593 19.095 2.51367 18.8951 2.51367C18.6952 2.51367 18.5035 2.593 18.3621 2.73424L9.31953 11.7514L6.05703 8.20807C5.92157 8.06106 5.73328 7.97383 5.53355 7.96555C5.33381 7.95728 5.13896 8.02863 4.9918 8.16393C4.919 8.23097 4.86011 8.31169 4.81852 8.40149C4.77692 8.49129 4.75341 8.5884 4.74935 8.68729C4.74529 8.78617 4.76074 8.88488 4.79484 8.97779C4.82893 9.0707 4.88099 9.15598 4.94805 9.22877L8.7418 13.3491C8.81043 13.4241 8.89354 13.4844 8.98612 13.5265C9.07869 13.5685 9.17882 13.5913 9.28047 13.5936H9.29648C9.49593 13.5935 9.68722 13.5145 9.82851 13.3737L19.4266 3.80026C19.5681 3.65908 19.6478 3.46748 19.6481 3.26757C19.6484 3.06766 19.5692 2.87582 19.4281 2.73424Z" fill="#CFBE88"/>
          <path d="M19.2461 9.24609C19.0462 9.2462 18.8546 9.32567 18.7133 9.46705C18.572 9.60842 18.4926 9.80012 18.4926 10C18.4926 14.6828 14.6828 18.4926 10 18.4926C5.31719 18.4926 1.50742 14.6828 1.50742 10C1.50742 5.31719 5.31719 1.50742 10 1.50742C10.1999 1.50742 10.3916 1.42805 10.533 1.28675C10.6743 1.14545 10.7538 0.953787 10.7539 0.753906C10.7539 0.553958 10.6745 0.362199 10.5331 0.220814C10.3917 0.0794292 10.1999 0 10 0C4.48594 0 0 4.48594 0 10C0 15.5141 4.48594 20 10 20C15.5141 20 20 15.5137 20 10C20 9.80005 19.9206 9.60829 19.7792 9.46691C19.6378 9.32552 19.446 9.24609 19.2461 9.24609Z" fill="#CFBE88"/>
        </svg>
        <p><span>Free cancellationup</span> to 24H before the event</p>
        <svg data-title="For cancellations, please send us an email or submit your request via chat or SMS" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <mask id="mask0_1539_1138" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path d="M20 0H0V20H20V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_1539_1138)">
            <path d="M9.99998 6.25C9.5027 6.25 9.02579 6.44754 8.67416 6.79917C8.32253 7.15081 8.12498 7.62772 8.12498 8.125V8.325C8.12498 8.40708 8.10882 8.48835 8.07741 8.56418C8.046 8.64001 7.99996 8.70891 7.94193 8.76694C7.88389 8.82498 7.81499 8.87102 7.73916 8.90242C7.66333 8.93383 7.58206 8.95 7.49998 8.95C7.33422 8.95 7.17525 8.88415 7.05804 8.76694C6.94083 8.64973 6.87498 8.49076 6.87498 8.325V8.125C6.87498 7.2962 7.20422 6.50134 7.79028 5.91529C8.37633 5.32924 9.17118 5 9.99998 5C10.8288 5 11.6236 5.32924 12.2097 5.91529C12.7957 6.50134 13.125 7.2962 13.125 8.125V8.29648C13.125 9.15095 12.8036 9.97417 12.2247 10.6026C11.6457 11.2311 10.8516 11.6187 9.99998 11.6887V13.125C9.99998 13.2908 9.93414 13.4497 9.81693 13.5669C9.69972 13.6842 9.54075 13.75 9.37498 13.75C9.20922 13.75 9.05025 13.6842 8.93304 13.5669C8.81583 13.4497 8.74998 13.2908 8.74998 13.125V11.298C8.74998 11.0731 8.83933 10.8574 8.99837 10.6984C9.15741 10.5393 9.37312 10.45 9.59803 10.45H9.72147C10.2926 10.45 10.8404 10.2231 11.2442 9.81925C11.6481 9.41539 11.875 8.86763 11.875 8.29648V8.125C11.875 7.62772 11.6774 7.15081 11.3258 6.79917C10.9742 6.44754 10.4973 6.25 9.99998 6.25Z" fill="#CFBE88"/>
            <path d="M9.37498 15.625C9.54075 15.625 9.69972 15.5592 9.81693 15.4419C9.93414 15.3247 9.99998 15.1658 9.99998 15C9.99998 14.8342 9.93414 14.6753 9.81693 14.5581C9.69972 14.4408 9.54075 14.375 9.37498 14.375C9.20922 14.375 9.05025 14.4408 8.93304 14.5581C8.81583 14.6753 8.74998 14.8342 8.74998 15C8.74998 15.1658 8.81583 15.3247 8.93304 15.4419C9.05025 15.5592 9.20922 15.625 9.37498 15.625Z" fill="#CFBE88"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.135155 18.9867L0.139452 18.9809L0.158202 18.9574C0.174608 18.9363 0.199217 18.9047 0.230467 18.8637C0.292967 18.7824 0.38242 18.6641 0.487889 18.5203C0.700389 18.2312 0.975389 17.8418 1.23281 17.4344C1.49336 17.0211 1.71953 16.6141 1.84883 16.284C1.89668 16.1724 1.93028 16.0552 1.94883 15.9352C0.679611 14.2169 -0.00360993 12.1362 -1.03496e-06 10C-1.03496e-06 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10C20 15.5227 15.523 20 10 20C8.51915 20.0019 7.05648 19.6738 5.71836 19.0395C5.68828 19.0375 5.64023 19.0367 5.57422 19.0395C5.42187 19.0453 5.21445 19.0668 4.96133 19.1027C4.45781 19.1738 3.82851 19.2941 3.20351 19.4254C2.57851 19.5566 1.97422 19.6953 1.52383 19.802C1.29805 19.8551 1.11133 19.9004 0.98164 19.932L0.831249 19.9688L0.792186 19.9785L0.779296 19.9816C0.652705 20.0132 0.519398 20.0044 0.398067 19.9564C0.276736 19.9085 0.173465 19.8237 0.102734 19.7141L0.135155 18.9867ZM10 1.25C5.16758 1.25 1.25 5.16758 1.25 10C1.24671 11.8938 1.86095 13.7371 2.99961 15.2504C3.20117 15.5184 3.21641 15.8293 3.19492 16.052C3.16615 16.2881 3.1053 16.5193 3.01406 16.7391C2.8418 17.1789 2.56601 17.6648 2.29141 18.1C2.23086 18.1961 2.16953 18.291 2.1082 18.3836C2.375 18.3238 2.65859 18.2617 2.9457 18.2016C3.57969 18.0688 4.24219 17.9414 4.78672 17.8645C5.05781 17.8254 5.31289 17.7984 5.52656 17.7902C5.63216 17.7852 5.73797 17.7869 5.84336 17.7953C5.96977 17.8044 6.09357 17.8359 6.20898 17.8883C7.39165 18.4573 8.68756 18.7519 10 18.75C14.8324 18.75 18.75 14.8324 18.75 10C18.75 5.16758 14.8324 1.25 10 1.25Z" fill="#CFBE88"/>
          </g>
        </svg>
      </div>
    </div>
      `;
    let newBlocks = /*html */ `
    <section id="mayAlsoLikeBlock">
      <div class="may_also_like_block">
        <h4 class="new_subtitle">Tours</h4>
        <h2 class="new_title">You may also like</h2>
        <div class="may_also_like_slider">
          <ul class="may_also_like_list_first desk_var"></ul>
          <ul class="may_also_like_list_second desk_var"></ul>
        </div>
        <span class="is_visib_may_also_like"></span>
      </div>
    </section>
    <section id="reviewsBlock">
      <div class="reviews_block">
        <h4 class="new_subtitle">1.56k Reviews</h4>
        <h2 class="new_title">Be inspired by our customers' stories</h2>
        <div class="reviews_slider"></div>
        <div class="load_more_reviews mob_var">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.3417 12.2377C18.9577 12.192 18.6194 12.4571 18.5737 12.832C18.1623 16.1417 15.3371 18.6286 11.9909 18.6286C8.33371 18.6286 5.36229 15.6571 5.36229 12C5.36229 8.34286 8.33371 5.37143 11.9909 5.37143C13.4811 5.37143 14.9166 5.88343 16.0686 6.78857H14.7337C14.3589 6.78857 14.048 7.09943 14.048 7.47429C14.048 7.84914 14.3589 8.16 14.7337 8.16H17.4766C17.8514 8.16 18.1623 7.84914 18.1623 7.47429V4.68571C18.1623 4.31086 17.8514 4 17.4766 4C17.1017 4 16.7909 4.31086 16.7909 4.68571V5.60914C15.4194 4.576 13.7371 4 11.9909 4C7.584 4 4 7.59314 4 12C4 16.4069 7.584 20 12 20C16.032 20 19.4423 16.992 19.936 12.9966C19.9817 12.6217 19.7166 12.2743 19.3417 12.2286V12.2377Z" fill="white"/>
          </svg>
          <span>Load more reviews</span>
        </div>
        <span class="is_visib_reviews"></span>
      </div>
    </section>
    <section id="howToFindUsBlock">
      <div class="how_to_find_us_block">
        <h4 class="new_subtitle">Our location</h4>
        <h2 class="new_title">How to find us</h2>
        <div class="how_to_find_us_contacts">
          <div class="how_to_find_us_info">
            <p class="how_to_find_us_descr">You can find us just 20 miles away from the renowned Las Vegas Strip. Here, the desert, lights, and gambling transform into a tranquil, picturesque getaway with Lake Mead National Park (Hoover Dam) and Valley of Fire State Park right around the corner!</p>
            <ul id="footer-social" class="cp">
              <li><i class="fas fa-map-marker-alt"></i> 20 Costa di Lago, Suite 130, Henderson, NV 89011, US</li>
              <li>
                <a href="tel:+39702-600-9860"><i class="fas fa-phone-alt"></i> 702-600-9860</a>
              </li>
              <li>
                <a href="mailto:lauren@llvws.com"><i class="fas fa-envelope"></i> lauren@llvws.com</a>
              </li>
              <li style="padding: 0; font-style: italic">*Texting will get the fastest response</li>
            </ul>
          </div>
          <div class="how_to_find_us_maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.604617837276!2d-114.931480984194!3d36.10312508009815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d79321801de5%3A0xd989c2619f8db520!2s20%20Costa%20Di%20Lago%20%23130%2C%20Henderson%2C%20NV%2089011%2C%20USA!5e0!3m2!1sen!2sph!4v1607349582906!5m2!1sen!2sph" width="100%" height="405" frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <ul class="how_to_find_accardion mob_var"></ul>
      </div>
    </section>
        <section id="lakeLasvegasWaterSportsBlock" class="desk_var">
      <div class="lake_lasvegas_water_sports_block">
        <ul class="lake_lasvegas_water_sports_list">
          <li>
            <img decoding="async" loading="lazy" width="150" height="86" class="fl-photo-img wp-image-193" src="https://vegasyacht.com/wp-content/uploads/2020/12/llvws-logo.png" alt="llvws-logo" itemprop="image" title="llvws-logo" />
          </li>
          <li>
            <img decoding="async" loading="lazy" width="230" height="165" class="fl-photo-img wp-image-207" src="https://vegasyacht.com/wp-content/uploads/2020/12/logo-white.png" alt="logo-white" itemprop="image" title="logo-white" />
          </li>
          <li>
            <img decoding="async" loading="lazy" width="250" height="166" class="fl-photo-img wp-image-576" src="https://vegasyacht.com/wp-content/uploads/2020/12/big-brunch-club_text-logo.png" alt="big-brunch-club_text-logo" itemprop="image" title="big-brunch-club_text-logo" />
          </li>
        </ul>
      </div>
    </section>
      `;

    function setListImgSwiper(img) {
      return `<div class="swiper-slide">
                <img src="${img}">
              </div>`;
    }
    function setListReviewsSlider(name, text, img) {
      return `
      <div class="reviews_link">
        <div class="reviews_service">
          ${img}
        </div>
        <p class="reviews_name">${name}</p>
        <p class="reviews_verified">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13.2854 2.1562C13.1911 2.06204 13.0633 2.00916 12.9301 2.00916C12.7968 2.00916 12.669 2.06204 12.5747 2.1562L6.54635 8.16766L4.37135 5.80542C4.28105 5.70741 4.15552 5.64926 4.02237 5.64374C3.88921 5.63822 3.75931 5.68579 3.6612 5.77599C3.61266 5.82069 3.57341 5.8745 3.54568 5.93437C3.51795 5.99423 3.50228 6.05898 3.49957 6.1249C3.49686 6.19082 3.50716 6.25663 3.52989 6.31857C3.55262 6.38051 3.58733 6.43736 3.63203 6.48589L6.1612 9.23276C6.20695 9.28277 6.26236 9.32299 6.32408 9.35101C6.3858 9.37903 6.45255 9.39426 6.52031 9.39578H6.53099C6.66395 9.39573 6.79148 9.34301 6.88568 9.24917L13.2844 2.86688C13.3787 2.77276 13.4319 2.64503 13.4321 2.51175C13.4322 2.37848 13.3795 2.25059 13.2854 2.1562Z" fill="#07A64F"/>
            <path d="M13.1641 6.49738C13.0308 6.49744 12.903 6.55043 12.8088 6.64468C12.7146 6.73893 12.6617 6.86673 12.6617 6.99998C12.6617 10.1219 10.1219 12.6617 7.00001 12.6617C3.87814 12.6617 1.33829 10.1219 1.33829 6.99998C1.33829 3.8781 3.87814 1.33826 7.00001 1.33826C7.13326 1.33826 7.26106 1.28534 7.35531 1.19114C7.44956 1.09694 7.50255 0.969171 7.50261 0.835917C7.50261 0.702618 7.44966 0.574779 7.35541 0.480522C7.26115 0.386266 7.13331 0.333313 7.00001 0.333313C3.32397 0.333313 0.333344 3.32394 0.333344 6.99998C0.333344 10.676 3.32397 13.6666 7.00001 13.6666C10.6761 13.6666 13.6667 10.6758 13.6667 6.99998C13.6667 6.86668 13.6137 6.73884 13.5195 6.64459C13.4252 6.55033 13.2974 6.49738 13.1641 6.49738Z" fill="#07A64F"/>
          </svg>
          <span>Verified customer</span>
        </p>
        <div class="reviews_read_more_block">
          <p class="preview_text">${text}</p>
          <span class="reviews_read_more_btn">Read more ></span>
        </div>
      </div>
          `;
    }
    function setListAlsoLikeSlider(title, price, img, link, count) {
      return `
            <li class="may_also_like_link" data-visib=${count}>
              <div class="img_wrapp">
                <img src="${img}" alt="${title}" />
              </div>
              <div class="learn_more_wrapp">
                <p class="may_also_like_title">${title}</p>
                <p class="may_also_like_price"><span>${price}</span> / person</p>
                <a href="${link}" target="_blank" class="learn_more_btn">Learn More</a>
              </div>
            </li>
          `;
    }
    function setListAlsoLikeSliderMob(title, price, img, link, count) {
      return `
      <a href="${link}" target="_blank">
      <div class="may_also_like_link" data-visib=${count}>
        <div class="img_wrapp">
          <img src="${img}" alt="${title}" />
        </div>
        <div class="learn_more_wrapp">
          <p class="may_also_like_title">${title}</p>
          <p class="may_also_like_price"><span>${price}</span> / person</p>
          <button class="learn_more_btn">Learn More</button>
        </div>
      </div>
      </a>
          `;
    }
    function setListAccardion(title, text, className, count) {
      return `
            <li class="how_to_find_accardion_block ${className}" data-visib=${count}>
                <div class="how_to_find_accardion_link">
                    <h3>${title}</h3>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.432 7.57172L6.03567 2.17714C5.79888 1.94095 5.41524 1.94095 5.17785 2.17714C4.94107 2.41334 4.94107 2.79697 5.17785 3.03316L10.1462 7.9997L5.17845 12.9662C4.94166 13.2024 4.94166 13.5861 5.17845 13.8229C5.41524 14.059 5.79948 14.059 6.03627 13.8229L11.4326 8.42833C11.6658 8.19458 11.6658 7.80492 11.432 7.57172Z" fill="#CFBE88"/>
                    </svg></span>
                </div>
                <div class="how_to_find_accardion_lists">
                    <div>
                        ${text}
                    </div>
                </div>
            </li>
          `;
    }

    let arrReviews = {
      1: ["Carrie G.", `We love it here! From the booking to the day we arrived, everything went smooth. Everyones friendly and welcoming! They have so much to offer from kayaking, paddle boarding, even brunch at their yacht. Such a fun & great getaway for all ages. We can't wait to go back!`, `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/yelp.svg">`],
      2: [`Shawanna S.`, `The warm greetings from the staff, the perfect views, great food, good music and one cool captain. This Yacht  Brunch was worth every penny. Most Definitely 5 stars!!`, `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/yelp.svg">`],
      3: [
        `Debbie G.`,
        `I saw a Facebook ad for the 4th of July yacht cruise and thought it looked fun, so I booked it! The online purchase process was super easy and there was a waiver I had to sign as well. I parked in the garage near the Lake Las Vegas shops and then walked over to the dock and was guided to the yacht where the check-in process was very simple and quick. They offered a glass of champagne and once inside, the appetizers were flowing very steadily out of the kitchen. I had multiple helpings because it was so yummy!!  Mostly, I stayed downstairs and enjoyed the cruise around the lake while taking in the view out of the many glass windows, in addition to being comfortable in the well air-conditioned cabin. Once it was time for fireworks, I proceeded upstairs to watch the show! It was great! Music was playing throughout the entire cruise and made it a blast!! Service was impeccable and the staff was so nice and friendly. They were also very attentive and were always cleaning and making sure the guests were well taken care of. I would highly recommend this yacht tour and am hoping they have others which are similar, coming up!!`,
        `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/yelp.svg">`,
      ],
      4: ["D. W.", `Had so much fun on the Haunted Cruise on the yacht!  Good mixed crowd and a wide variety of music played by the DJ. Drinks were good and adding on the VIP table and bottle service was so worth it! Something different and fun to do.`, `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/yelp.svg">`],
      5: [
        `Janet S.`,
        `REVIEW ON THE YACHT RIDE (includes pros, cons, other notes & if I would do it again) - 
        I would give this biz 4 stars - reservation process was easy, no issues, positive interactions with staff.
        I would give the experience 3 stars based on if I thought it was worth it & if I would do it again (see bottom).
        --
        I wanted to do something fun with my family while my sister was visiting for out of state. We decided to do the Sip & Sail on the yacht since some of us in the party wanted to drink.
        Pros:
        We got there early and the person who checked us in was friendly. No negative interactions with staff. 
        Our reservation included a champagne toast - it was decent in taste. Other drinks included beer & margaritas (probably the favorite since it wasn't too sweet & you could taste tequila). 
        Music was good (although not really diverse). 
        Bathrooms were clean. 
        We got to go around the lake and see the awesome mansions in the area. 
        Cons:
        I'd been to the area before so I knew where to go to check in. I feel like if it were my first time it would have been more confusing since the map they provide in the confirmation email isn't very clear in their directions. 
        Floor on the boat looked... a little worn. It looked as if it was lifting. Also, while leaning on the rail on the top deck, it came off. It easily went back on but it was surprising. 
        Other notes:
        There weren't too many people so folks were able to keep some distance. There was no signage or announcement about masks (not judging, just an observation).
        Overall:
        It was something to do outside of the house on a Sunday. It was cool to see the mansions in the area. Probably won't do it again since I don't think it's really worth the price for a 2nd time. 
        If I could do it again, I would reserve the smaller boat rental (almost $100 cheaper). I would have preferred it to just be my party.`,
        `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/yelp.svg">`,
      ],
      6: [
        `britney w.`,
        `Such a fun girls day! 
        My overall experience with Lake Las Vegas Water Sports was awesome! I booked three tickets for me and my girl friends about 2 weeks in advance and I accidentally booked them for the wrong day. The company was so helpful and got the tickets switched for me!!
        We arrived early in case we had a hard time locating the office. We parked in the free parking and followed the signs which was super easy to find. It was about a 5 minute walk from the parking garage to the office that is located right on the lake. 
        We got a free mimosa as soon as we boarded the boat and we ordered serval more following. We of course took so many pictures and enjoy the cruise from inside the boat and on the decks. The bartenders, dj, and staff were all awesome! 
        I definitely recommend checking this out!`,
        `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/yelp.svg">`,
      ],
      7: ["Kelly Wilson", `Got the pleasure of going on The Yatch cruise out if lake Las Vegas! Be prepared for some epic DJ's this way definitely a fun cruise to go on. Great vibes good people beautiful scenery it was so nice to be out on the water.`, `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/google.svg">`],
      8: ["Kenethia L", `Wine Wednesday Cruise was really fun! Great music, wine 🍷 and other drinks. Relaxing & met nice people. We'll go again!`, `<img src="https://flopsi69.github.io/crs/llvws/new_pdp/img/google.svg">`],
    };
    let arrAccardionAllInform = {
      1: [`Dress code`, `<span></span>`, `dress_code`],
      2: [
        `Checking in`,
        `<p>We suggest arriving 10-15 minutes prior to your scheduled boat reservation time.</p>
          <p>Please be sure everyone has a waiver completed prior to check-in, and also have your confirmation email ready to show the office receptionist.</p>
          <p>Once checked in, each guest will receive a wristband.</p>
          <p>Self-service lockers are available at our facility on the dock. (CARD PAYMENT ONLY)</p>
          <p>An authorization hold will be required for the security deposit, which will only be charged in case the rules outlined in the Driver Consent Form are violated.</p>
          <p>A credit card authorization hold will be needed at the time of check-in on the day of your rental. Please make sure you have the Credit Card / debit card you booked with present at time of check-in. The credit card hold will be for 7 days.</p>
          `,
        `checking_in`,
      ],
      3: [`Cancelation & refunds`, `<p>Our cancelation policy allows for free cancelation up to 24 hours before the event. For cancelations, please send us an email or submit your request via chat or SMS. Refunds will be processed according to our terms and conditions.</p>`, `cancelation_refunds`],
      4: [`Additional details`, `<span></span>`, `additional_details`],
    };
    let arrAccardion = {
      1: [
        `Post-booking & ARRIVAL`,
        `<p>Once you complete your booking online, you will receive a confirmation email with a map showing where to park when you arrive, and digital links to both the liability waiver, and the required boaters' contract. Anyone participating in activities must have a liability release completed prior to arrival.</p>
          <p>Upon arriving at Lake Las Vegas, you will be relieved that there are no parking fees! Parking can be found in the Monte Lago parking garage located at 8 Strada Di Villagio, Henderson NV, 89011.</p>
          <p>After parking, you can walk through the Village and stop at any restaurants on-site. When you are finished strolling, head toward the marina, and you will find our office located behind Seasons Grocery.</p>`,
        `post_booking_arrival`,
      ],
      // 2: [
      //   `Checking in`,
      //   `<p>We suggest arriving 10-15 minutes prior to your scheduled boat reservation time.</p>
      //     <p>Please be sure everyone has a waiver completed prior to check-in, and also have your confirmation email ready to show the office receptionist.</p>
      //     <p>Once checked in, each guest will receive a wristband.</p>
      //     <p>Self-service lockers are available at our facility on the dock. (CARD PAYMENT ONLY)</p>
      //     <p>An authorization hold will be required for the security deposit, which will only be charged in case the rules outlined in the Driver Consent Form are violated.</p>
      //     <p>A credit card authorization hold will be needed at the time of check-in on the day of your rental. Please make sure you have the Credit Card / debit card you booked with present at time of check-in. The credit card hold will be for 7 days.</p>
      //     `,
      // ],
      3: [
        `Requirements & regulations`,
        `<p>You must be at least 21 years of age to operate an electric boat rental and hold a valid ID and credit card.</p>
          <p>Children over the age of 3 are to be counted as a guest.</p>
          <p>No swimming from the boat at any time.</p>
          <p>You may not dock or beach the boat.</p>
          <p>Coolers and ice checks are prohibited at Lake Las Vegas, however food and drink can be brought onto the electric boats.</p>
          <p>All rules and regulations can be found in our boaters contract, here: https://form.jotform.com/230950539241050</p>`,
        `requirements_regulations`,
      ],
      // 4: [`Cancelation & refunds`, `<p>Our cancelation policy allows for free cancelation up to 24 hours before the event. For cancelations, please send us an email or submit your request via chat or SMS. Refunds will be processed according to our terms and conditions.</p>`],
    };
    let arrpMayAlsoLikeListFirst = {
      1: [`Yacht After Dark Neon Party`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-08-09_03-45-31-1024x1024.jpg`, `https://vegasyacht.com/yacht-after-dark-neon-party/`],
      2: [`Emo Night`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/emo-night.jpg`, `https://vegasyacht.com/emo-night/`],
      3: [`Latin Night Cruise at Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-10_02-02-53.jpg`, `https://vegasyacht.com/latin-night-cruise-at-lake-las-vegas/"`],
      4: [`Country Cruise at Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_03-52-16-300x300.jpg`, `https://vegasyacht.com/country-cruise-at-lake-las-vegas/`],
    };
    let arrpMayAlsoLikeListSecond = {
      1: [`Mimosa Cruise Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_04-10-16.jpg`, `https://vegasyacht.com/mimosa-cruise-lake-las-vegas/`],
      2: [`Sangria Sunday`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_03-53-29-300x300.jpg`, `https://vegasyacht.com/sangria-sunday/`],
      3: [`Throwback Cruise at Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-07_04-01-25.jpg`, `https://vegasyacht.com/throwback-cruise-at-lake-las-vegas/`],
      4: [`Sunset Sessions`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2022/06/sunset.jpg`, `https://vegasyacht.com/sunset-sessions-cruise/`],
    };
    let arrpMayAlsoLikeListMob = {
      1: [`Yacht After Dark Neon Party`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-08-09_03-45-31-1024x1024.jpg`, `https://vegasyacht.com/yacht-after-dark-neon-party/`],
      2: [`Emo Night`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/emo-night.jpg`, `https://vegasyacht.com/emo-night/`],
      3: [`Latin Night Cruise at Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-10_02-02-53.jpg`, `https://vegasyacht.com/latin-night-cruise-at-lake-las-vegas/"`],
      4: [`Country Cruise at Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_03-52-16-300x300.jpg`, `https://vegasyacht.com/country-cruise-at-lake-las-vegas/`],
      5: [`Mimosa Cruise Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_04-10-16.jpg`, `https://vegasyacht.com/mimosa-cruise-lake-las-vegas/`],
      6: [`Sangria Sunday`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_03-53-29-300x300.jpg`, `https://vegasyacht.com/sangria-sunday/`],
      7: [`Throwback Cruise at Lake Las Vegas`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-07_04-01-25.jpg`, `https://vegasyacht.com/throwback-cruise-at-lake-las-vegas/`],
      8: [`Sunset Sessions`, `$19.99`, `https://vegasyacht.com/wp-content/uploads/2022/06/sunset.jpg`, `https://vegasyacht.com/sunset-sessions-cruise/`],
    };
    let arrImgSwiperNeonParty = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/08/party_after_dark.png"],
      2: ["https://drive.google.com/uc?export=view&id=1pTk80rK7jRtDnZ-loCS-rxCSaYYGFZ6Y"],
      3: ["https://drive.google.com/uc?export=view&id=1rX5Ju9IGpTvewfZp_Y-6oUlE4CxcWAJG"],
      4: ["https://drive.google.com/uc?export=view&id=1zo15RcVPo3UaoKNP6X6_bBb1sN_FNvVK"],
      5: ["https://drive.google.com/uc?export=view&id=1lYa3AMHEjGgX64gYQNkgjNjdnoTRC6Tf"],
    };
    let arrImgSwiperMimosaCruise = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_04-17-48-1024x536.jpg"],
      2: ["https://vegasyacht.com/wp-content/uploads/2020/12/Brandon-Cox-1.jpg"],
      3: ["https://vegasyacht.com/wp-content/uploads/2020/12/Screenshot_257_lg-1024x684-1.jpg"],
      4: ["https://vegasyacht.com/wp-content/uploads/2020/12/Screenshot_254_lg-757x1024-1.jpg"],
      5: ["https://drive.google.com/uc?export=view&id=1tvVqyxrOcyI_5CgjY5s3Xpa3vY0P9iQg"],
    };
    let arrImgSwiperSunsetSessions = {
      1: ["https://vegasyacht.com/wp-content/uploads/2021/03/Sunset_Sessions.jpg"],
      2: ["https://vegasyacht.com/wp-content/uploads/2020/12/photo_2020_07_25_18_21_50_lg.jpg"],
      3: ["https://drive.google.com/uc?export=view&id=1QMR-ovgFvvU1y_FgRr62Cyq0fWgBr7rp"],
      4: ["https://drive.google.com/uc?export=view&id=1AXA-Q3dQRnk0KCQxJGAfbf1eWhX1hUf2"],
      5: ["https://drive.google.com/uc?export=view&id=12KieCMeooo_fAHC6xx7t9BBUGC-7RmcW"],
    };
    let arrImgSwiperCountryCruise = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/07/Brown_Vintage_Cowboy_Boot_and_Hat_Photo_Album_Cover__1_-1024x536.png"],
      2: ["https://drive.google.com/uc?export=view&id=1QMR-ovgFvvU1y_FgRr62Cyq0fWgBr7rp"],
      3: ["https://vegasyacht.com/wp-content/uploads/2023/07/IMAGE_2023_06_02_10_06_32_lg-832x1024.jpg"],
      4: ["https://vegasyacht.com/wp-content/uploads/2023/07/IMAGE_2023_06_02_10_06_37_lg-1024x729.jpg"],
      5: ["https://vegasyacht.com/wp-content/uploads/2023/07/f4a13cab4b854b55b75869c8834460d7IMAGE_2023_06_02_10_06_44_lg-1024x938.jpg"],
    };
    let arrImgSwiperSangriaSunday = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-06_04-08-32.jpg"],
      2: ["https://drive.google.com/uc?export=view&id=1VmXXkY7aQQMkF6EfSmBENo4T_tq6iUkG"],
      3: ["https://drive.google.com/uc?export=view&id=1zo15RcVPo3UaoKNP6X6_bBb1sN_FNvVK"],
      4: ["https://drive.google.com/uc?export=view&id=1qGxEjgbMGUTND9iCyqXe5w2i14wpRUme"],
      5: ["https://drive.google.com/uc?export=view&id=12KieCMeooo_fAHC6xx7t9BBUGC-7RmcW"],
    };
    let arrImgSwiperThrowbackCruise = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-07_03-53-50.jpg"],
      2: ["https://drive.google.com/uc?export=view&id=155YdEr8w33S-rCqj0mH6pquCvHfV8DWP"],
      3: ["https://drive.google.com/uc?export=view&id=1zo15RcVPo3UaoKNP6X6_bBb1sN_FNvVK"],
      4: ["https://drive.google.com/uc?export=view&id=1zrJc35KC5uii2Grui4CIommt_1EGHD0V"],
      5: ["https://drive.google.com/uc?export=view&id=1lYa3AMHEjGgX64gYQNkgjNjdnoTRC6Tf"],
    };
    let arrImgSwiperLatinNightCruise = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/07/photo_2023-07-10_01-29-13.jpg"],
      2: ["https://drive.google.com/uc?export=view&id=1QMR-ovgFvvU1y_FgRr62Cyq0fWgBr7rp"],
      3: ["https://drive.google.com/uc?export=view&id=1pTk80rK7jRtDnZ-loCS-rxCSaYYGFZ6Y"],
      4: ["https://drive.google.com/uc?export=view&id=1cR_ZGK4HHSI4bwaqs4P76ahNqCz4o7ul"],
      5: ["https://drive.google.com/uc?export=view&id=1YF31xaF7rbSH4f65fjxNqHsTuBKvdlsJ"],
    };
    let arrImgSwiperEmoNight = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/08/emo_night-1024x512.png"],
      2: ["https://drive.google.com/uc?export=view&id=1WvZr4ZXFkpxnp-qFvcFs9t7hXzhGrFgS"],
      3: ["https://drive.google.com/uc?export=view&id=1rX5Ju9IGpTvewfZp_Y-6oUlE4CxcWAJG"],
      4: ["https://drive.google.com/uc?export=view&id=1zo15RcVPo3UaoKNP6X6_bBb1sN_FNvVK"],
      5: ["https://drive.google.com/uc?export=view&id=12KieCMeooo_fAHC6xx7t9BBUGC-7RmcW"],
    };
    let arrImgSwiperHauntedCruise = {
      1: ["https://vegasyacht.com/wp-content/uploads/2023/09/Haunted-Cruise-at-Lake-Las-Vegas.jpg"],
      2: ["https://drive.google.com/uc?export=view&id=1WvZr4ZXFkpxnp-qFvcFs9t7hXzhGrFgS"],
      3: ["https://drive.google.com/uc?export=view&id=1rX5Ju9IGpTvewfZp_Y-6oUlE4CxcWAJG"],
      4: ["https://drive.google.com/uc?export=view&id=1zo15RcVPo3UaoKNP6X6_bBb1sN_FNvVK"],
      5: ["https://drive.google.com/uc?export=view&id=12KieCMeooo_fAHC6xx7t9BBUGC-7RmcW"],
    };

    addSwiper();
    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet">`);
    document.head.insertAdjacentHTML("beforeend", stylePdp);
    renderHtml();
    function renderHtml() {
      // swiper
      if (!document.querySelector(".main_slider")) {
        if (document.querySelector(".fl-col-content .fl-module-photo")) {
          document.querySelector(".fl-col-content .fl-module-photo").insertAdjacentHTML("beforebegin", swiperImg);
        }
        if (document.querySelector(".fl-module-slideshow")) {
          document.querySelector(".fl-module-slideshow").insertAdjacentHTML("beforebegin", swiperImg);
        }
      }

      if (document.querySelector(".main_slider")) {
        if (window.location.pathname === "/yacht-after-dark-neon-party/") {
          for (let key in arrImgSwiperNeonParty) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperNeonParty[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperNeonParty[key][0]));
          }
        }
        if (window.location.pathname === "/mimosa-cruise-lake-las-vegas/") {
          for (let key in arrImgSwiperMimosaCruise) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperMimosaCruise[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperMimosaCruise[key][0]));
          }
        }
        if (window.location.pathname === "/sunset-sessions-cruise/") {
          for (let key in arrImgSwiperSunsetSessions) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperSunsetSessions[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperSunsetSessions[key][0]));
          }
        }
        if (window.location.pathname === "/country-cruise-at-lake-las-vegas/") {
          for (let key in arrImgSwiperCountryCruise) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperCountryCruise[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperCountryCruise[key][0]));
          }
        }
        if (window.location.pathname === "/sangria-sunday/") {
          for (let key in arrImgSwiperSangriaSunday) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperSangriaSunday[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperSangriaSunday[key][0]));
          }
        }
        if (window.location.pathname === "/throwback-cruise-at-lake-las-vegas/") {
          for (let key in arrImgSwiperThrowbackCruise) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperThrowbackCruise[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperThrowbackCruise[key][0]));
          }
        }
        if (window.location.pathname === "/latin-night-cruise-at-lake-las-vegas/") {
          for (let key in arrImgSwiperLatinNightCruise) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperLatinNightCruise[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperLatinNightCruise[key][0]));
          }
        }
        if (window.location.pathname === "/emo-night/") {
          for (let key in arrImgSwiperEmoNight) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperEmoNight[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperEmoNight[key][0]));
          }
        }
        if (window.location.pathname === "/haunted-cruise-at-lake-las-vegas/") {
          for (let key in arrImgSwiperHauntedCruise) {
            document.querySelector(".main_slider .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperHauntedCruise[key][0]));
            document.querySelector(".main_slider_sync .swiper-wrapper").insertAdjacentHTML("beforeend", setListImgSwiper(arrImgSwiperHauntedCruise[key][0]));
          }
        }
      }
      if (window.innerWidth <= 768) {
        //change place breadcrumbs
        if (document.querySelector("#custom-subheader + .rope-separator") && !document.querySelector(".rope-separator + .breadcrumbs")) {
          document.querySelector("#custom-subheader + .rope-separator").after(document.querySelector(".breadcrumbs"));
        }
        //change place rezdy
        if (document.querySelector(".fl-module-rich-text") && document.querySelector(".fl-col-small:not(.fl-col-small-full-width)")) {
          document.querySelector(".fl-module-rich-text").before(document.querySelector(".fl-col-small:not(.fl-col-small-full-width)"));
        }
      }
      if (window.innerWidth > 768) {
        // choiceAndIconBox
        if (document.querySelectorAll(".fl-rich-text h3")[1] && !document.querySelector(".choice_and_icon_box")) {
          document.querySelectorAll(".fl-rich-text h3")[1].insertAdjacentHTML("beforebegin", choiceAndIconBox);
        }
      }
      // withCodeBlock
      if (window.innerWidth > 768) {
        if (document.querySelector(".fl-col-small .fl-module-content.fl-node-content") && !document.querySelector(".with_code_block")) {
          document.querySelector(".fl-col-small .fl-module-content.fl-node-content > div").insertAdjacentHTML("afterend", withCodeBlock);
        }
      } else {
        if (document.querySelector(".fl-col-small:not(.fl-col-small-full-width)") && !document.querySelector(".with_code_block")) {
          document.querySelector(".fl-col-small:not(.fl-col-small-full-width)").insertAdjacentHTML("afterend", withCodeBlock);
        }
        // advisorAndIconBox
        if (document.querySelector(".fl-col-small:not(.fl-col-small-full-width)") && !document.querySelector(".advisor_and_icon_box")) {
          document.querySelector(".fl-col-small:not(.fl-col-small-full-width)").insertAdjacentHTML("beforebegin", advisorAndIconBox);
        }
        // Awards
        if (!document.querySelector(".awards_block") && document.querySelector("#withCodeBlock")) {
          document.querySelector("#withCodeBlock").insertAdjacentHTML("afterend", awardsBlock);
        }
      }
      // newBlocks
      if (document.querySelector(".fl-row-content-wrap") && !document.querySelector(".may_also_like_block") && !document.querySelector(".reviews_block") && !document.querySelector(".how_to_find_us_block")) {
        document.querySelector(".fl-row-content-wrap").insertAdjacentHTML("afterend", newBlocks);
      }
      // MayAlsoLikeList
      if (window.innerWidth > 768) {
        if (window.location.pathname === "/emo-night/" || window.location.pathname === "/latin-night-cruise-at-lake-las-vegas/" || window.location.pathname === "/country-cruise-at-lake-las-vegas/" || window.location.pathname === "/yacht-after-dark-neon-party/") {
          if (document.querySelector(".may_also_like_block") && document.querySelector(".may_also_like_list_first").children.length !== arrpMayAlsoLikeListSecond.length) {
            for (let key in arrpMayAlsoLikeListSecond) {
              document.querySelector(".may_also_like_list_first").insertAdjacentHTML("beforeend", setListAlsoLikeSlider(arrpMayAlsoLikeListSecond[key][0], arrpMayAlsoLikeListSecond[key][1], arrpMayAlsoLikeListSecond[key][2], arrpMayAlsoLikeListSecond[key][3], key));
            }
          }
          if (document.querySelector(".may_also_like_block") && document.querySelector(".may_also_like_list_second").children.length !== arrpMayAlsoLikeListFirst.length) {
            for (let key in arrpMayAlsoLikeListFirst) {
              document.querySelector(".may_also_like_list_second").insertAdjacentHTML("beforeend", setListAlsoLikeSlider(arrpMayAlsoLikeListFirst[key][0], arrpMayAlsoLikeListFirst[key][1], arrpMayAlsoLikeListFirst[key][2], arrpMayAlsoLikeListFirst[key][3], key));
            }
          }
        } else {
          if (document.querySelector(".may_also_like_block") && document.querySelector(".may_also_like_list_first").children.length !== arrpMayAlsoLikeListFirst.length) {
            for (let key in arrpMayAlsoLikeListFirst) {
              document.querySelector(".may_also_like_list_first").insertAdjacentHTML("beforeend", setListAlsoLikeSlider(arrpMayAlsoLikeListFirst[key][0], arrpMayAlsoLikeListFirst[key][1], arrpMayAlsoLikeListFirst[key][2], arrpMayAlsoLikeListFirst[key][3], key));
            }
          }
          if (document.querySelector(".may_also_like_block") && document.querySelector(".may_also_like_list_second").children.length !== arrpMayAlsoLikeListSecond.length) {
            for (let key in arrpMayAlsoLikeListSecond) {
              document.querySelector(".may_also_like_list_second").insertAdjacentHTML("beforeend", setListAlsoLikeSlider(arrpMayAlsoLikeListSecond[key][0], arrpMayAlsoLikeListSecond[key][1], arrpMayAlsoLikeListSecond[key][2], arrpMayAlsoLikeListSecond[key][3], key));
            }
          }
        }

        document.querySelectorAll(".learn_more_wrapp .learn_more_btn").forEach((el) => {
          if (el.href === window.location.href) {
            el.closest(".may_also_like_link")?.remove();
          }
        });
      } else {
        document.querySelector(".may_also_like_list_first")?.remove();
        document.querySelector(".may_also_like_list_second")?.remove();

        if (document.querySelector(".may_also_like_block") && document.querySelector(".may_also_like_slider").children.length !== arrpMayAlsoLikeListMob.length) {
          for (let key in arrpMayAlsoLikeListMob) {
            document.querySelector(".may_also_like_slider").insertAdjacentHTML("beforeend", setListAlsoLikeSliderMob(arrpMayAlsoLikeListMob[key][0], arrpMayAlsoLikeListMob[key][1], arrpMayAlsoLikeListMob[key][2], arrpMayAlsoLikeListMob[key][3], key));
          }
        }
        document.querySelectorAll(".may_also_like_slider a").forEach((el) => {
          if (el.href === window.location.href) {
            el?.remove();
          }
        });
      }
      // lookingHtml
      if (window.innerWidth > 768) {
        if (document.querySelector(".fl-rich-text") && !document.querySelector(".looking")) {
          document.querySelector(".fl-rich-text")?.insertAdjacentHTML("beforebegin", lookingHtml);
        }
        if (document.querySelector(".looking")) {
          document.querySelector(".looking .people_txt").textContent = randomInteger(1, 10);
          document.querySelector(".looking .times_txt").textContent = randomInteger(1, 10);
        }
      } else {
        if (document.querySelector(".free_cancellationup_block") && !document.querySelector(".looking")) {
          document.querySelector(".free_cancellationup_block")?.insertAdjacentHTML("beforebegin", lookingHtml);
        }
        if (document.querySelector(".looking")) {
          document.querySelector(".looking .people_txt").textContent = randomInteger(1, 10);
          document.querySelector(".looking .times_txt").textContent = randomInteger(1, 10);
        }
      }
      // ReviewsSlider
      if (document.querySelector(".reviews_block") && document.querySelector(".reviews_slider").children.length !== arrReviews.length) {
        for (let key in arrReviews) {
          document.querySelector(".reviews_slider").insertAdjacentHTML("beforeend", setListReviewsSlider(arrReviews[key][0], arrReviews[key][1], arrReviews[key][2]));
        }
      }
      // logos
      if (window.innerWidth > 768) {
        if (document.querySelector(".fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(1):not(.fl-node-5fbfca8d8a778)") && !document.querySelector(".logos")) {
          document.querySelector(".fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(1):not(.fl-node-5fbfca8d8a778) > div").insertAdjacentHTML("afterend", logos);
        }
      } else {
        if (document.querySelector("#howToFindUsBlock") && !document.querySelector(".logos")) {
          document.querySelector("#howToFindUsBlock").insertAdjacentHTML("beforebegin", logosMob);
        }
      }
      // accardion all inform
      if (!document.querySelector(".accardion_all_inform_block")) {
        document.querySelector(".fl-node-content .fl-col-group:not(.fl-node-5fbfca8d8a736) > div:nth-child(1):not(.fl-node-5fbfca8d8a778) > div")?.insertAdjacentHTML("afterend", `<ul class="accardion_all_inform_block"></ul>`);
      }
      if (document.querySelector(".accardion_all_inform_block") && document.querySelector(".accardion_all_inform_block").children.length !== arrAccardionAllInform.length) {
        for (let key in arrAccardionAllInform) {
          document.querySelector(".accardion_all_inform_block").insertAdjacentHTML("beforeend", setListAccardion(arrAccardionAllInform[key][0], arrAccardionAllInform[key][1], arrAccardionAllInform[key][2], key));
        }
      }
      //accardion
      if (document.querySelector(".how_to_find_us_block") && document.querySelector(".how_to_find_accardion").children.length !== arrAccardion.length) {
        for (let key in arrAccardion) {
          document.querySelector(".how_to_find_accardion").insertAdjacentHTML("beforeend", setListAccardion(arrAccardion[key][0], arrAccardion[key][1], key));
        }
      }
    }

    initSlickSlider();
    onClickCode();
    tooltipInit();
    onClickShare();
    onClickIconHowToFindUs();
    initAccardionToggle();
    moveTxtToAccardion();
    if (window.innerWidth < 768) {
      onClickReadMoreBtn();
      onClickLoadMoreReviews();
    }

    function initSlickSlider() {
      if (window.innerWidth > 768) {
        let slickInterval = setInterval(() => {
          if (typeof jQuery(".reviews_slider").slick === "function" && document.querySelector(".reviews_block")) {
            clearInterval(slickInterval);
            //  slider
            let slider = jQuery(".reviews_slider").slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true,
              infinite: false,
              adaptiveHeight: true,
              speed: 300,
              prevArrow: `
                   <div class="prev_btn" >
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3.17539 6.57184L8.57175 1.17726C8.80854 0.941074 9.19218 0.941074 9.42957 1.17726C9.66635 1.41346 9.66635 1.79709 9.42957 2.03328L4.46123 6.99982L9.42897 11.9664C9.66576 12.2026 9.66576 12.5862 9.42897 12.823C9.19218 13.0592 8.80795 13.0592 8.57116 12.823L3.17479 7.42845C2.94164 7.19471 2.94164 6.80504 3.17539 6.57184Z" fill="#CFBE88"/>
  </svg>
                   </div>
                 `,
              nextArrow: `
                    <div class="next_btn" >
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M10.8246 6.57184L5.42825 1.17726C5.19146 0.941074 4.80782 0.941074 4.57043 1.17726C4.33365 1.41346 4.33365 1.79709 4.57043 2.03328L9.53877 6.99982L4.57103 11.9664C4.33424 12.2026 4.33424 12.5862 4.57103 12.823C4.80782 13.0592 5.19205 13.0592 5.42884 12.823L10.8252 7.42845C11.0584 7.19471 11.0584 6.80504 10.8246 6.57184Z" fill="#CFBE88"/>
  </svg>
                   </div>
                 `,
              responsive: [
                {
                  breakpoint: 778,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    focusOnSelect: true,
                  },
                },
              ],
            });
            slider.on("swipe", function () {
              pushDataLayer("exp_new_ui_s_r_vs", "Vertical", "Scroll", "Reviews");
            });

            slider.on("afterChange", animateHeightMultiElemental);
            slider.on("init", animateHeightMultiElemental);

            let b = setInterval(() => {
              if (document.querySelectorAll(".reviews_read_more_btn")) {
                clearInterval(b);
                let h = 120;
                if (window.innerWidth <= 768) {
                  h = 96;
                }

                for (let item of document.querySelectorAll(".reviews_read_more_block .preview_text")) {
                  if (item.scrollHeight <= h) {
                    item.nextElementSibling.innerHTML = "&nbsp";
                    item.nextElementSibling.classList.add("disable");
                  }
                }

                if (window.innerWidth <= 768) {
                  document.querySelectorAll(".reviews_link").forEach((el) => {
                    el.classList.add("load_var");
                  });
                }

                document.querySelectorAll(".reviews_read_more_btn").forEach((el) => {
                  el.addEventListener("click", (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    pushDataLayer("exp_im_pdp_l_r_rm", `Read more ${el.closest(".reviews_link").querySelector(".reviews_name").textContent}`, "Link", "Reviews");
                    e.currentTarget.style.display = "none";
                    e.currentTarget.previousElementSibling.style.overflowY = "scroll";
                    e.currentTarget.previousElementSibling.style.height = "168px";
                    slider.slick("refresh");
                  });
                });
              }
            }, 1000);
          }
        }, 100);

        let animateHeightMultiElemental = function (event, slick, currentSlide, nextSlide) {
          let _ = slick;
          let targetHeight = 0;
          let $activeSlides;
          if (_.options.adaptiveHeight === true && _.options.vertical === false) {
            $activeSlides = _.$slideTrack.find(".slick-active");
            // Находим наибольшую высоту у показываемых слайдов
            $activeSlides.each(function () {
              var height = $(this).outerHeight(true);
              if (targetHeight < height) {
                targetHeight = height;
              }
            });
            _.$list.animate(
              {
                height: targetHeight,
              },
              _.options.speed
            );
          }
        };
      }

      let slickIntervalMayAlsoLike = setInterval(() => {
        if (typeof jQuery(".may_also_like_slider").slick === "function" && document.querySelector(".may_also_like_slider")) {
          clearInterval(slickIntervalMayAlsoLike);
          //  slider
          let slider = jQuery(".may_also_like_slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
            autoplaySpeed: 7000,
            speed: 500,
            cssEase: "linear",
            responsive: [
              {
                breakpoint: 778,
                settings: {
                  slidesToShow: 1,
                  centerMode: true,
                  focusOnSelect: true,
                },
              },
            ],
          });
          slider.on("swipe", function () {
            pushDataLayer("exp_new_ui_v_t_vs", "Vertical", "Scroll", "Tours");
          });
        }
      }, 100);
    }
    function onClickCode() {
      let iconCode = setInterval(() => {
        if (document.querySelector(".with_code_block")) {
          clearInterval(iconCode);
          document.querySelector(".voucher_block").addEventListener("click", () => {
            pushDataLayer("exp_new_ui_b_bne_cc", "Copy code", "Button", "Book now enjoy");
            navigator.clipboard.writeText("BOOK10");

            document.querySelector(".copied")?.remove();
            document.querySelector(".voucher_block").insertAdjacentHTML(
              "beforeend",
              `<p class="copied">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.2854 2.15632C13.1911 2.06216 13.0633 2.00928 12.9301 2.00928C12.7968 2.00928 12.669 2.06216 12.5747 2.15632L6.54635 8.16778L4.37135 5.80554C4.28105 5.70753 4.15552 5.64938 4.02237 5.64386C3.88921 5.63835 3.75931 5.68591 3.6612 5.77611C3.61266 5.82081 3.57341 5.87462 3.54568 5.93449C3.51795 5.99436 3.50228 6.0591 3.49957 6.12502C3.49686 6.19094 3.50716 6.25675 3.52989 6.31869C3.55262 6.38063 3.58733 6.43749 3.63203 6.48601L6.1612 9.23289C6.20695 9.28289 6.26236 9.32311 6.32408 9.35113C6.3858 9.37915 6.45255 9.39438 6.52031 9.39591H6.53099C6.66395 9.39585 6.79148 9.34313 6.88568 9.24929L13.2844 2.867C13.3787 2.77289 13.4319 2.64515 13.4321 2.51188C13.4322 2.37861 13.3795 2.25071 13.2854 2.15632Z" fill="#CFBE88"/>
                    <path d="M13.1641 6.49756C13.0308 6.49763 12.903 6.55061 12.8088 6.64486C12.7146 6.73911 12.6617 6.86691 12.6617 7.00016C12.6617 10.122 10.1219 12.6619 7 12.6619C3.87812 12.6619 1.33828 10.122 1.33828 7.00016C1.33828 3.87829 3.87812 1.33844 7 1.33844C7.13325 1.33844 7.26105 1.28553 7.3553 1.19133C7.44955 1.09713 7.50253 0.969354 7.5026 0.8361C7.5026 0.702801 7.44965 0.574962 7.35539 0.480705C7.26113 0.386449 7.13329 0.333496 7 0.333496C3.32395 0.333496 0.333328 3.32412 0.333328 7.00016C0.333328 10.6762 3.32395 13.6668 7 13.6668C10.676 13.6668 13.6667 10.6759 13.6667 7.00016C13.6667 6.86686 13.6137 6.73903 13.5195 6.64477C13.4252 6.55051 13.2974 6.49756 13.1641 6.49756Z" fill="#CFBE88"/>
                  </svg>
                  <span>Code is copied</span>
                </p>`
            );
            setTimeout(() => {
              document.querySelector(".copied")?.remove();
            }, 3000);
          });
        }
      }, 100);
    }
    function onClickShare() {
      let iconShare = setInterval(() => {
        if (document.querySelector(".icon_share")) {
          clearInterval(iconShare);
          document.querySelector(".icon_share").addEventListener("click", () => {
            pushDataLayer("exp_new_ui_l_fsp_share", "Share", "Link", "First screen PDP");
            navigator.clipboard.writeText(window.location);

            document.querySelector(".share")?.remove();
            document.querySelector(".img_wrap_icon").insertAdjacentHTML(
              "beforeend",
              `<p class="share">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13.2854 2.15632C13.1911 2.06216 13.0633 2.00928 12.9301 2.00928C12.7968 2.00928 12.669 2.06216 12.5747 2.15632L6.54635 8.16778L4.37135 5.80554C4.28105 5.70753 4.15552 5.64938 4.02237 5.64386C3.88921 5.63835 3.75931 5.68591 3.6612 5.77611C3.61266 5.82081 3.57341 5.87462 3.54568 5.93449C3.51795 5.99436 3.50228 6.0591 3.49957 6.12502C3.49686 6.19094 3.50716 6.25675 3.52989 6.31869C3.55262 6.38063 3.58733 6.43749 3.63203 6.48601L6.1612 9.23289C6.20695 9.28289 6.26236 9.32311 6.32408 9.35113C6.3858 9.37915 6.45255 9.39438 6.52031 9.39591H6.53099C6.66395 9.39585 6.79148 9.34313 6.88568 9.24929L13.2844 2.867C13.3787 2.77289 13.4319 2.64515 13.4321 2.51188C13.4322 2.37861 13.3795 2.25071 13.2854 2.15632Z" fill="#CFBE88"/>
                    <path d="M13.1641 6.49756C13.0308 6.49763 12.903 6.55061 12.8088 6.64486C12.7146 6.73911 12.6617 6.86691 12.6617 7.00016C12.6617 10.122 10.1219 12.6619 7 12.6619C3.87812 12.6619 1.33828 10.122 1.33828 7.00016C1.33828 3.87829 3.87812 1.33844 7 1.33844C7.13325 1.33844 7.26105 1.28553 7.3553 1.19133C7.44955 1.09713 7.50253 0.969354 7.5026 0.8361C7.5026 0.702801 7.44965 0.574962 7.35539 0.480705C7.26113 0.386449 7.13329 0.333496 7 0.333496C3.32395 0.333496 0.333328 3.32412 0.333328 7.00016C0.333328 10.6762 3.32395 13.6668 7 13.6668C10.676 13.6668 13.6667 10.6759 13.6667 7.00016C13.6667 6.86686 13.6137 6.73903 13.5195 6.64477C13.4252 6.55051 13.2974 6.49756 13.1641 6.49756Z" fill="#CFBE88"/>
                  </svg>
                  <span>Link copied</span>
                </p>`
            );
            setTimeout(() => {
              document.querySelector(".share")?.remove();
            }, 3000);
          });
        }
      }, 100);
    }
    function tooltipInit() {
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector(".free_cancellationup_block")) {
          clearInterval(tippyRun);
          document.querySelectorAll("[data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              // trigger: "click",
              placement: "bottom-end",
              appendTo: function () {
                return document.querySelector(".free_cancellationup_block");
              },
              onTrigger() {},
            });
          });
        }
      }, 700);
    }
    function onClickIconHowToFindUs() {
      let srch = setInterval(() => {
        if (document.querySelector(".icon_how_to_find_us") && document.querySelector(".how_to_find_us_block")) {
          clearInterval(srch);
          document.querySelector(".icon_how_to_find_us").addEventListener("click", () => {
            pushDataLayer("exp_new_ui_l_fsp_hwu", "How to find us", "Link", "First screen PDP");
            document.querySelector(".how_to_find_us_block")?.scrollIntoView({ block: "start", behavior: "smooth" });
          });
        }
      }, 100);
    }
    function initAccardionToggle() {
      // accardionToggle
      if ($(".how_to_find_us_block .how_to_find_accardion_link")) {
        document.querySelectorAll(".how_to_find_us_block .how_to_find_accardion_link")[1].classList.add("active_block");
        document.querySelectorAll(".how_to_find_us_block .how_to_find_accardion_lists")[1].style.display = "block";
        $(".how_to_find_us_block .how_to_find_accardion_link").click(function (e) {
          $(this).toggleClass("active_block");
          $(this).closest("li").toggleClass("active_block");
          $(this).next(".how_to_find_accardion_lists").slideToggle();
          if ($(".how_to_find_us_block .how_to_find_accardion_link").not(this)) {
            $(".how_to_find_us_block .how_to_find_accardion_link").not(this).next(".how_to_find_accardion_lists").css("display", "none");
            $(".how_to_find_us_block .how_to_find_accardion_link").not(this).removeClass("active_block");
            $(".how_to_find_us_block .how_to_find_accardion_link").not(this).closest("li").removeClass("active_block");
          }
          pushDataLayer("exp_new_ui_li_ol_inpdp", `${e.currentTarget.querySelector("h3").textContent}`, "List item", "Our location PDP");

          const headerOffset = 10;
          const elementPosition = this.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      }

      if ($(".accardion_all_inform_block .how_to_find_accardion_link")) {
        document.querySelectorAll(".accardion_all_inform_block .how_to_find_accardion_link")[2].classList.add("active_block");
        document.querySelectorAll(".accardion_all_inform_block .how_to_find_accardion_lists")[2].style.display = "block";
        $(".accardion_all_inform_block .how_to_find_accardion_link").click(function (e) {
          $(this).toggleClass("active_block");
          $(this).closest("li").toggleClass("active_block");
          $(this).next(".how_to_find_accardion_lists").slideToggle();
          if ($(".accardion_all_inform_block .how_to_find_accardion_link").not(this)) {
            $(".accardion_all_inform_block .how_to_find_accardion_link").not(this).next(".how_to_find_accardion_lists").css("display", "none");
            $(".accardion_all_inform_block .how_to_find_accardion_link").not(this).removeClass("active_block");
            $(".accardion_all_inform_block .how_to_find_accardion_link").not(this).closest("li").removeClass("active_block");
          }
          pushDataLayer("exp_new_ui_d_ast_faq", "faq", `Dropdown ${e.currentTarget.querySelector("h3").textContent}`, "Above section Tours");

          const headerOffset = 10;
          const elementPosition = this.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        });
      }
    }
    function onClickReadMoreBtn() {
      let b = setInterval(() => {
        if (document.querySelectorAll(".reviews_read_more_btn")) {
          clearInterval(b);
          let h = 120;
          if (window.innerWidth <= 768) {
            h = 96;
          }

          for (let item of document.querySelectorAll(".reviews_read_more_block .preview_text")) {
            console.log(item, item.scrollHeight);
            if (item.scrollHeight <= h) {
              item.nextElementSibling.innerHTML = "&nbsp";
              item.nextElementSibling.classList.add("disable");
            }
          }

          if (window.innerWidth <= 768) {
            document.querySelectorAll(".reviews_link").forEach((el) => {
              el.classList.add("load_var");
            });
          }

          document.querySelectorAll(".reviews_read_more_btn").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              pushDataLayer("exp_new_ui_l_r_rm", `Read more ${el.closest(".reviews_link").querySelector(".reviews_name").textContent}`, "Link", "Reviews");
              e.currentTarget.style.display = "none";
              e.currentTarget.previousElementSibling.style.height = "auto";
            });
          });
        }
      }, 1000);
    }
    function onClickLoadMoreReviews() {
      let btnSearch = setInterval(() => {
        if (document.querySelector(".load_more_reviews")) {
          clearInterval(btnSearch);
          document.querySelector(".load_more_reviews").addEventListener("click", (e) => {
            pushDataLayer("exp_new_ui_b_r_lm", "Load more", "Button", "Reviews");
            e.currentTarget.remove();
            document.querySelectorAll(".reviews_link").forEach((el) => {
              el.style.display = "block";
            });
            document.querySelector(".reviews_link:nth-of-type(3)")?.scrollIntoView({ block: "start", behavior: "smooth" });
          });
        }
      }, 100);
    }
    function randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    function moveTxtToAccardion() {
      document.querySelectorAll(".fl-rich-text h3").forEach((el) => {
        if (el.textContent.toLocaleLowerCase().includes("dress code")) {
          document.querySelectorAll(".accardion_all_inform_block li").forEach((i) => {
            if (i.classList.contains("dress_code")) {
              el.style.display = "none";
              i.querySelector(".how_to_find_accardion_lists > div span").after(el.nextElementSibling);
            }
          });
        }
        if (el.textContent.toLocaleLowerCase().includes("additional details")) {
          document.querySelectorAll(".accardion_all_inform_block li").forEach((i) => {
            if (i.classList.contains("additional_details")) {
              el.style.display = "none";
              i.querySelector(".how_to_find_accardion_lists > div span").after(el.nextElementSibling);
              if (i.querySelector(".how_to_find_accardion_lists > div span + ul") && el.nextElementSibling?.tagName === "P") {
                i.querySelector(".how_to_find_accardion_lists > div span + ul").after(el.nextElementSibling);
              }
            }
          });
        }
      });
      document.querySelectorAll(".accardion_all_inform_block li").forEach((i) => {
        if (i.classList.contains("additional_details") || i.classList.contains("dress_code")) {
          if (i.querySelector(".how_to_find_accardion_lists > div").children.length <= 1) {
            i.style.display = "none";
          }
        }
      });
    }
    function addSwiper() {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
      script.async = false;
      document.head.appendChild(script);

      const style = document.createElement("link");
      style.href = "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
      style.rel = "stylesheet";
      document.head.appendChild(style);
    }
    initSwiper();
    function initSwiper() {
      // #1 Main slider
      let s = setInterval(() => {
        if (typeof Swiper === "function" && document.querySelector(".main_slider")) {
          clearInterval(s);
          const swiperMainSync = new Swiper(".main_slider_sync", {
            slidesPerView: 6,
            slideToClickedSlide: true,
            spaceBetween: 8,
            on: {
              init: () => {
                document.querySelectorAll(".main_slider_sync .swiper-slide").forEach((slide) => {
                  slide.addEventListener("click", () => {
                    pushDataLayer("exp_new_ui_b_fsp_ip", "Image pagination", "Button", "First screen PDP");
                  });
                });
              },
            },
          });

          let diff = 0;

          const swiperMain = new Swiper(".main_slider", {
            slidesPerView: 1,
            touchEventsTarget: "wrapper",
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            thumbs: {
              swiper: swiperMainSync,
            },
            spaceBetween: 10,
            breakpoints: {
              768: {},
            },
            on: {
              init: () => {},
              slideChange: (swiper) => {
                // pushDataLayer("exp_new_ui_b_fsp_ip", "Image pagination", "horizontal scroll", "First screen PDP");
                if (diff === swiper.touches.diff) return false;
                diff = swiper.touches.diff;
              },
            },
          });
          document.querySelectorAll(".swiper-pagination").forEach((el) => {
            el.addEventListener("click", () => {
              pushDataLayer("exp_new_ui_b_fsp_ip", "Image pagination", "Button", "First screen PDP");
            });
          });
        }
      }, 100);
      // #2
    }

    onClickForEvents();
    visibElem();
    function onClickForEvents() {
      let link = setInterval(() => {
        if (document.querySelector(".lav_advisor > p > a")) {
          clearInterval(link);
          document.querySelector(".lav_advisor > p > a").addEventListener("click", (e) => {
            e.preventDefault();
            pushDataLayer("exp_new_ui_l_fsp_sr", "See all reviews", "Link", "First screen PDP");
            document.querySelector("#reviewsBlock")?.scrollIntoView({ block: "start", behavior: "smooth" });
          });
        }
      }, 100);
    }
    function visibElem() {
      let obsV = new IntersectionObserver(visibilityV, {
        threshold: 1,
      });

      let obsV2 = new IntersectionObserver(visibilityV2, {
        threshold: 1,
      });

      let time;

      let intV1 = setInterval(() => {
        if (document.querySelector(".how_to_find_us_maps")) {
          clearInterval(intV1);
          time = 3000;
          obsV.observe(document.querySelector(".how_to_find_us_maps"));
        }
      }, 100);
      let intV2 = setInterval(() => {
        if (document.querySelector(".voucher_block")) {
          clearInterval(intV2);
          time = 2000;
          obsV.observe(document.querySelector(".voucher_block"));
        }
      }, 100);
      let intV3 = setInterval(() => {
        if (document.querySelector(".free_cancellationup_block")) {
          clearInterval(intV3);
          time = 2000;
          obsV.observe(document.querySelector(".free_cancellationup_block"));
        }
      }, 100);
      let intV4 = setInterval(() => {
        if (document.querySelector(".is_visib_may_also_like")) {
          clearInterval(intV4);
          time = 3000;
          obsV.observe(document.querySelector(".is_visib_may_also_like"));
        }
      }, 100);
      let intV5 = setInterval(() => {
        if (document.querySelector(".is_visib_reviews")) {
          clearInterval(intV5);
          time = 3000;
          obsV.observe(document.querySelector(".is_visib_reviews"));
        }
      }, 100);
      let intV6 = setInterval(() => {
        if (document.querySelector(".logos")) {
          clearInterval(intV6);
          time = 3000;
          obsV.observe(document.querySelector(".logos"));
        }
      }, 100);
      let intV7 = setInterval(() => {
        if (document.querySelector(".looking")) {
          clearInterval(intV7);
          time = 3000;
          obsV.observe(document.querySelector(".looking"));
        }
      }, 100);

      function visibilityV(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            setTimeout(function () {
              obsV2.observe(i.target);
            }, time);
          }
        });
      }
      function visibilityV2(entries) {
        entries.forEach((i) => {
          if (i.isIntersecting) {
            if (i.target.classList.contains("how_to_find_us_maps")) {
              pushDataLayer("exp_new_ui_v_olpdp", "Our location", "Visibility", "Our location PDP");
            }
            if (i.target.classList.contains("voucher_block")) {
              pushDataLayer("exp_new_ui_v_bne_cc", "Copy code", "Visibility", "Book now enjoy");
            }
            if (i.target.classList.contains("free_cancellationup_block")) {
              pushDataLayer("exp_new_ui_v_bne_fc", "Free cancelation", "Visibility", "Book now enjoy");
            }
            if (i.target.classList.contains("is_visib_may_also_like")) {
              pushDataLayer("exp_new_ui_v_t_ymal", "You may also like", "Visibility", "Tours");
            }
            if (i.target.classList.contains("is_visib_reviews")) {
              pushDataLayer("exp_new_ui_v_r_r", "Reviews", "Visibility", "Reviews");
            }
            if (i.target.classList.contains("logos")) {
              pushDataLayer("exp_new_ui_v_ast_sr", "Service reviews", "Visibility", "Above section Tours");
            }
            if (i.target.classList.contains("looking")) {
              pushDataLayer("exp_new_ui_v_mp_t", "Tips", "Visibility", "Main image");
            }

            obsV.unobserve(i.target);
          }
          obsV2.unobserve(i.target);
        });
      }
      const record = setInterval(() => {
        if (typeof clarity === "function") {
          clearInterval(record);
          clarity("set", "booking_page_exp", "variant_1");
        }
      }, 200);

      document.querySelector(".exp")?.remove();
    }
  }
}, 100);
