let treblehealthCalendar = setInterval(() => {
  if (document) {
    clearInterval(treblehealthCalendar);

    console.log("%c EXP: Trial Selection (DEV: SKh)", "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");

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

    // jquery
    let script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    script.async = false;
    document.head.appendChild(script);
    // cdn slider
    let scriptCustomSlider = document.createElement("script");
    scriptCustomSlider.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    scriptCustomSlider.async = false;
    document.head.appendChild(scriptCustomSlider);

    let scriptCustomSliderStyle = document.createElement("link");
    scriptCustomSliderStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    scriptCustomSliderStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomSliderStyle);
    // script tooltip
    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);
    // scriptTrustpilot
    let scriptTrustpilot = document.createElement("script");
    scriptTrustpilot.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    scriptTrustpilot.async = false;
    document.head.appendChild(scriptTrustpilot);

    let newStyle = /*html */ `
    <style>
body {
  font-family: "Plus Jakarta Sans", sans-serif !important;
}
html,
body {
  overflow: initial;
}
/*main */
#lp-pom-root,
#learnMobBlock,
#bookCalendarMob,
.learn_from_call_box_mob,
button.grab_your_free_btn.mob_var,
p.mob_txt,
.mob_img,
.ti-column.mob_var,
.new_header_wrapp .tel_link span.mob_var,
._2eZHnh_PMhyzt7w_zi7 #root,
[data-elementor-type="header"],
main#content {
  display: none;
}
/* */
.new_body {
  background: #fff;
}
.new_body p {
  color: #202b47;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin: 0;
}
.container_var {
  max-width: 1136px;
  width: 90%;
  margin: 0 auto;
}
h2.main_title {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #2e168d;
  font-size: 40px;
  font-weight: 800;
  line-height: 50px;
  margin: 0;
}
.sub_title {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #2e168d !important;
  font-size: 30px !important;
  font-weight: 800 !important;
  line-height: 40px !important;
  margin: 0;
}
button.grab_your_free_btn {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 310px;
  height: 62px;
  color: #fff !important;
  font-size: 18px !important;
  font-weight: 800 !important;
  line-height: 28px !important;
  margin: 28px 0 0;
  border-radius: 5px !important;
  border: 2px solid #ff2e1f !important;
  background: #ff2e1f !important;
  cursor: pointer !important;
  outline: none;
}
/*new_header */
.new_header {
  border-bottom: 1px solid #e6e6e6;
  background: #efecfb;
  padding: 20px 0;
}
.new_header_wrapp {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tel_link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2e168d !important;
  font-size: 18px;
  font-weight: 800;
  line-height: 28px;
  text-decoration: none;
}
.tel_link img {
  width: 24px;
}
/* sticky_header */
.sticky_header {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  background: #efecfb;
  height: 0;
  opacity: 0;
  transition: opacity 0.7s;
  padding: 0;
  overflow: hidden;
}
.sticky_header.is_fixed {
  padding: 20px 0;
  opacity: 1;
  position: fixed;
  top: -1px;
  left: 0;
  z-index: 111111111;
  overflow: initial;
  height: max-content;
}
.sticky_header .container_var {
  max-width: 1280px;
}
.sticky_header .logo_link {
  max-width: 211px;
}
.sticky_btn_wrapp {
  display: flex;
  justify-content: flex-end;
  gap: 28px;
  width: 33%;
}
.sticky_header .trust_score_wrapp p {
  color: #2e168d;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
.sticky_header .trust_score_wrapp p.reviews_txt {
  margin: 0 2px 0 8px;
}
.sticky_header .trust_score_wrapp p.reviews_mark {
  color: #2e168d;
  font-weight: 600;
  margin: 0 4px 0 2px;
  font-size: 14px;
}
.sticky_header button.grab_your_free_btn {
  margin: 0;
  max-width: 148px;
  height: 48px;
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 25px !important;
}
/*heroBlock */
#heroBlock {
  background: #2e168d;
  padding: 60px 0 80px;
}
.hero_wrapper {
  position: relative;
  display: flex;
  align-items: flex-start;
}
.hero_wrapper > div {
  width: 47%;
}
.hero_wrapper > div.main_descr_wrapp {
  width: 53%;
  position: sticky;
  top: 0;
}
h1.hero_main_title {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #fff !important;
  font-size: 55px !important;
  font-weight: 800 !important;
  line-height: 65px !important;
  margin: 20px 0;
}
#heroBlock p.hero_txt {
  color: #efecfb;
  margin-bottom: 28px;
  max-width: 552px;
}
.learn_wrapp {
  border-radius: 8px 0 0 8px;
  background: #efecfb;
  padding: 28px;
  margin-bottom: 28px;
}
h2.hero_sub_title {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #2e168d;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  margin: 0 0 20px;
}
#heroBlock .learn_list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.learn_list .learn_item {
  position: relative;
  padding-left: 32px;
}
.learn_list .learn_item + .learn_item {
  margin-top: 12px;
}
.learn_list .learn_item::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/hero_check_icon.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 3px;
  left: 0;
}
.learn_list .learn_item p {
  color: #0a0a0a;
}
.learn_list .learn_item p .accent_color_black {
  font-weight: 700;
}
.featured_box {
  max-width: 552px;
}
.featured_box h2.hero_sub_title {
  color: #fff;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(239 236 251 / 30%);
}
.featured_img_wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trust_score_wrapp {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  cursor: pointer;
}
.trust_score_wrapp > div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.trust_score_wrapp p {
  color: #fff;
}
.trust_score_wrapp p.reviews_txt {
  margin: 0 4px 0 12px;
}
.trust_score_wrapp p.reviews_mark {
  color: #00b67a;
  font-weight: 700;
  margin: 0 12px 0 2px;
}
.trust_score_wrapp p.reviews_count span {
  text-decoration-line: underline;
}
.book_calendar_wrapp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 35px 0px rgba(153, 133, 235, 0.2);
}
.calendar_header {
  padding: 28px 0 12px;
  border-bottom: 1px solid #e5e5e5;
  margin: 0 32px;
}
.calendar_header h2 {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #2e168d;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  margin: 0 auto 12px;
  max-width: 270px;
  text-align: center;
}
ul.calendar_header_list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}
ul.calendar_header_list li {
  position: relative;
  padding-left: 28px;
}
ul.calendar_header_list li::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/dollar.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
ul.calendar_header_list li:nth-child(2):before {
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/clock.svg) center no-repeat;
}
ul.calendar_header_list li:nth-child(3):before {
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/zoom.svg) center no-repeat;
}
ul.calendar_header_list li p {
  color: #2e168d;
  font-size: 14px;
  font-weight: 700;
  line-height: 30px;
}
.calendar_body {
  height: 100%;
}
.calendar_body iframe {
  height: 100%;
  min-height: 600px;
}
.calendar_footer {
  padding: 20px 32px;
  background: #efecfb;
  border-radius: 0 0 16px 16px;
}
.calendar_contacts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  gap: 20px;
}
h3.calendar_footer_title {
  color: #2e168d;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  margin: 0;
}
.calendar_contacts .tel_link {
  gap: 6px;
}
.calendar_contacts .tel_link img {
  width: 20px;
}
.calendar_contacts .tel_link span:nth-child(3) {
  font-weight: 700;
  text-decoration-line: underline;
}
.calendar_contacts .tel_link span {
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
}
.calendar_footer_members {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
}
.calendar_footer_members img {
  max-width: 104px;
}
.calendar_footer p.calendar_footer_txt {
  color: #0a0a0a;
}
/*exclusiveBonusBlock */
#exclusiveBonusBlock {
  padding: 80px 0 0;
}
.exclusive_bonus_wrapp {
  display: flex;
  align-items: center;
  max-width: 944px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
}
.exclusive_bonus_wrapp li:nth-child(1) {
  padding: 28px;
}
.exclusive_bonus_wrapp li:nth-child(2) {
  width: 63%;
  background: var(--bg-2, #b5a6f2);
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 12px;
  border-radius: 0 8px 8px 0;
}
.exclusive_bonus_wrapp li:nth-child(2) .img_wrapp {
  max-height: 341px;
  height: 305px;
  max-width: 269px;
}
.exclusive_bonus_wrapp li:nth-child(2) .img_wrapp img {
  width: 100%;
  height: 100%;
  display: block;
}
.exclusive_bonus_wrapp .sub_title {
  margin-bottom: 12px;
}
.exclusive_bonus_wrapp .accent_color {
  font-weight: 700;
  color: #2e168d;
  margin-bottom: 20px;
}
.exclusive_bonus_wrapp img {
  display: block;
  width: 100%;
  height: 100%;
}
/*ourPatientsLoveTrebleHealthBlock */
#ourPatientsLoveTrebleHealthBlock {
  padding: 80px 0;
}
.our_patients_treble_health_wrapp h2.main_title {
  max-width: max-content;
  margin: 0 auto 8px;
}
.our_patients_treble_health_wrapp > p {
  max-width: 559px;
  margin: 0 auto 48px;
  text-align: center;
}
#ourPatientsLoveTrebleHealthBlock .video_item {
  display: block !important;
}
#ourPatientsLoveTrebleHealthBlock p.video_descr {
  background: #efecfb;
  color: #2e168d;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  padding: 20px;
  border-radius: 32px 32px 0 0;
}
#ourPatientsLoveTrebleHealthBlock .slick-list {
  max-width: 944px;
  width: 100%;
  margin: 0 auto;
  padding: 7px 0;
}
#ourPatientsLoveTrebleHealthBlock .slick-slide {
  margin: 0 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  border-radius: 32px;
  border: 1px solid #e5e5e5;
}
#ourPatientsLoveTrebleHealthBlock .slick-slide > div {
  border-radius: 32px;
}
#ourPatientsLoveTrebleHealthBlock .slick-arrow {
  position: absolute;
  height: 48px;
  width: 48px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 5;
}
#ourPatientsLoveTrebleHealthBlock .slick-arrow.slick-disabled {
  opacity: 0.2;
  pointer-events: none;
}
#ourPatientsLoveTrebleHealthBlock .next_btn.slick-arrow {
  right: 0;
  left: unset;
}
#ourPatientsLoveTrebleHealthBlock .slick-arrow svg {
  width: 100%;
  height: 100%;
}
#ourPatientsLoveTrebleHealthBlock .slick-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0;
  list-style: none;
  padding: 0;
}
#ourPatientsLoveTrebleHealthBlock .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 10px;
  height: 10px;
  cursor: pointer;
  color: transparent;
  border: 0;
  outline: none;
  background: #efecfb;
  border-radius: 50%;
  border: none;
  margin: 0 4px;
  padding: 0;
}
#ourPatientsLoveTrebleHealthBlock .slick-dots li.slick-active button {
  background: #2e168d;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp {
  height: 467px;
  position: relative;
  cursor: pointer;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp::before {
  position: absolute;
  content: "";
  width: 80px;
  height: 80px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/icon_youtube.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  transition: all 0.5s ease 0.5s;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease 0.5s;
  border-radius: 0 0 32px 32px;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp iframe {
  width: 100%;
  height: 100%;
  border-radius: 0 0 32px 32px;
}
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp.is_clicked img,
#ourPatientsLoveTrebleHealthBlock .video_link_wrapp.is_clicked::before {
  opacity: 0;
  pointer-events: none;
  overflow: hidden;
}
/*whoShouldAttendBlock */
#whoShouldAttendBlock {
  padding: 40px 0 80px;
}
.who_should_attend_wrapp {
  display: flex;
  gap: 36px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.who_should_attend_descr h2.main_title {
  margin-bottom: 8px;
}
.who_should_attend_descr_list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  list-style: none;
}
.who_should_attend_item:nth-child(1) {
  display: flex;
  max-width: 560px;
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
}
.who_should_attend_item:nth-child(1) > div:nth-child(2) {
  padding: 28px;
  position: relative;
}
.who_should_attend_item:nth-child(1) > div:nth-child(2)::after {
  position: absolute;
  content: "";
  width: 73px;
  height: 48px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/arrow_icon.svg) center no-repeat;
  background-size: contain;
  bottom: 59px;
  right: -19px;
}
.who_should_attend_item:nth-child(1) > div > p {
  margin-top: 20px;
}
.who_should_attend_descr_link {
  position: relative;
  padding-left: 32px;
}
.who_should_attend_descr_link::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/treblehealth/img/check_icon.svg) center no-repeat;
  background-size: contain;
  border-radius: 0;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.who_should_attend_descr_link p {
  color: #2e168d;
}
.who_should_attend_item:nth-child(1) .img_wrapp {
  position: relative;
  max-width: 251px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px 0 0 8px;
}
.who_should_attend_item:nth-child(1) .img_wrapp img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.who_should_attend_item:nth-child(1) .img_wrapp p.name_founder {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  background: rgba(139, 139, 139, 0.5);
  padding: 12px;
  width: 100%;
}
.who_should_attend_item:nth-child(1) .img_wrapp p.name_founder span {
  max-width: 165px;
  display: inline-block;
}
/*yourHostsBlock */
#yourHostsBlock {
  padding: 0 0 80px;
}
.your_hosts_wrapp h2.main_title {
  max-width: max-content;
  margin: 0 auto 48px;
}
.your_hosts_list {
  display: flex;
  gap: 36px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.your_hosts_list > li {
  border-radius: 8px;
  border: 1px solid #e5e5e5;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 40px;
}
.host_full_info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.host_full_info img {
  max-width: 90px;
}
h3.host_name {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #2e168d;
  font-size: 18px;
  font-weight: 800;
  line-height: 26px;
  margin: 0 0 8px;
}
.your_hosts_list p.host_doctor_of {
  color: #0a0a0a;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.your_hosts_list p.host_descr {
  color: #0a0a0a;
}
#yourHostsBlock .tippy-tooltip {
  border-radius: 8px;
  background: #fff;
  color: #2e168d;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  box-shadow: 0px 0px 23px 7px rgba(0, 0, 0, 0.12);
}
#yourHostsBlock .tippy-popper {
  max-width: 167px !important;
  top: -12px !important;
}
#yourHostsBlock .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
  border-bottom-color: #fff;
}
#yourHostsBlock .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
  border-top-color: #fff;
}
#yourHostsBlock .tippy-tooltip[data-placement^="top"] .tippy-arrow {
  border-width: 22px 29px 0;
  bottom: -17px;
}
#yourHostsBlock .tippy-content {
  padding: 16px;
}
/*clinicallyProvenResultsBlock */
#clinicallyProvenResultsBlock {
  background: #efecfb;
  padding: 80px 0;
}
.clinically_proven_results_box {
  max-width: 944px;
  margin: 0 auto;
  border-radius: 32px;
  background: #fff;
  box-shadow: 0px 4px 35px 0px rgba(153, 133, 235, 0.2);
  padding: 40px;
  box-sizing: initial;
}
.clinically_proven_results_box h2.main_title {
  text-align: center;
  margin-bottom: 40px;
}
.clinically_proven_results_box > p {
  color: #2e168d;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 40px;
}
.clinically_proven_results_wrapp button.grab_your_free_btn {
  margin: 28px auto 0;
}
.circular_chart_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.circular_chart_item {
  position: relative;
  width: 100%;
  max-width: 231px;
}
.circular_chart_item:nth-child(2)::before,
.circular_chart_item:nth-child(2)::after {
  position: absolute;
  content: "";
  width: 3px;
  height: 49px;
  border-radius: 3px;
  background: #2e168d;
  top: 50%;
  transform: translateY(-50%);
}
.circular_chart_item:nth-child(2)::before {
  left: -64px;
}
.circular_chart_item:nth-child(2)::after {
  right: -64px;
}
.circular_chart_info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.circular_chart_item_title {
  font-family: "Plus Jakarta Sans", sans-serif !important;
  color: #2e168d !important;
  font-size: 36px !important;
  font-weight: 800 !important;
  line-height: 45px !important;
  margin: 0 0 8px;
  text-align: center;
}
#clinicallyProvenResultsBlock p.circular_chart_item_txt {
  color: #2e168d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  width: 100%;
  min-width: 151px;
  text-align: center;
  min-height: 100px;
}
#clinicallyProvenResultsBlock .circular_chart_item:nth-child(1) p.circular_chart_item_txt {
  min-width: 118px;
}
.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
/*trustpilotBlock */
#trustpilotBlock {
  background: #efecfb;
  padding: 40px 0 80px;
}
#trustpilotBlock .container_var .trustpilot_link {
  display: block;
  max-width: 180px;
  margin: 0 auto 20px;
  text-align: center;
}
#trustpilotBlock h2.main_title {
  text-align: center;
  max-width: 530px;
  margin: 0 auto 67px;
}

/*frequentlyAskedQuestionsBlock */
#frequentlyAskedQuestionsBlock {
  padding: 80px 0;
}
.frequently_asked_questions_wrapp h2.main_title {
  text-align: center;
  margin-bottom: 48px;
}
.questions_accordion {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
.questions_accordion_link {
  padding: 20px;
  cursor: pointer;
}
#frequentlyAskedQuestionsBlock .questions_accordion_link p {
  color: #2e168d;
  font-weight: 800;
  line-height: 28px;
  font-size: 18px;
}
.questions_accordion_lists {
  padding: 15px 40px 20px 40px;
  display: none;
}
.accordion_icon_wrapp {
  margin-right: 10px;
  display: inline-block;
  float: left;
}
.accordion_icon_closed,
.accordion_icon_opened {
  display: inline-block;
  width: 100%;
  max-width: 24px;
  max-height: 17px;
  height: 100%;
}
.accordion_icon_closed svg,
.accordion_icon_opened svg {
  width: 100%;
  height: 100%;
}
.accordion_icon_opened,
.questions_accordion_block.active .accordion_icon_closed {
  display: none;
}
.questions_accordion_block.active .accordion_icon_opened {
  display: block;
}
.frequently_asked_questions_wrapp button.grab_your_free_btn {
  margin: 28px auto 0;
}
/*verifiedReviewsOnGoogleBlock */
#verifiedReviewsOnGoogleBlock {
  background: #fbfafe;
  padding: 80px 0;
}
.verified_reviews_on_google_wrapp h2.main_title {
  max-width: max-content;
  margin: 0 auto 48px;
}
.ti-reviews-container-wrapper {
  overflow: visible;
  display: flex;
  flex-wrap: nowrap;
}
.ti-column {
  flex: 0 0 23%;
  max-width: 25%;
}
.ti-review-item {
  padding: 8px !important;
  transition: transform 300ms ease-out;
}
.ti-review-item > .ti-inner {
  border-top-width: 2px !important;
  border-bottom-width: 2px !important;
  border-left-width: 2px !important;
  border-right-width: 2px !important;
  background-color: white !important;
  backdrop-filter: blur(0px);
  border-style: solid !important;
  border-color: #ffffff !important;
  background: #ffffff !important;
  border-radius: 4px !important;
  padding: 20px !important;
  margin: 0 !important;
  display: block;
}
.ti-review-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  position: relative;
  font-size: 14px;
  line-height: 1.4em;
}
.ti-profile-img {
  margin: 0 15px 0 0 !important;
}
.ti-profile-img img {
  width: 40px !important;
  height: 40px !important;
  padding: 0px !important;
  display: block;
  border-radius: 30px;
  min-width: initial !important;
  max-width: initial !important;
  object-fit: cover;
  object-position: top;
}
.ti-profile-details {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.ti-review-header:after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://cdn.trustindex.io/assets/platform/Google/icon.svg);
  background-size: 100% 100%;
}
.ti-name {
  font-size: 18px !important;
  line-height: 28px !important;
  font-weight: 800 !important;
  overflow: hidden;
  padding-right: 25px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000000;
  margin-bottom: 2px;
}
.ti-stars {
  margin-bottom: 6px;
  margin-top: 15px;
  text-align: left;
  white-space: nowrap;
  display: block;
}
.ti-star {
  width: 17px;
  height: 17px;
  display: inline-block;
  margin: 0 !important;
  margin-right: 1px !important;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(https://cdn.trustindex.io/assets/platform/Google/star/f.svg) !important;
}
.ti-review-content {
  padding: 0;
  overflow: inherit !important;
  height: unset;
  text-align: left;
  transition: all 300ms ease-out;
  font-style: normal;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.ti-review-content .ti-inner {
  line-height: 21.75px;
  height: 77px;
  font-size: 15px;
  text-align: left;
  transition: all 700ms ease-out;
  overflow: hidden;
  padding-right: 0;
}
.ti-review-content .ti-inner.active {
  height: max-content;
}
.ti-highlight {
  padding: 1px 2px;
  margin: 0;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  border-radius: 1px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  background-color: transparent !important;
  background-image: linear-gradient(#fbe049, #fbe049);
  background-size: 100% 19px;
  background-position: bottom;
  background-repeat: no-repeat;
  color: #000 !important;
  font-size: inherit !important;
}
.ti-read-more {
  font-size: 16px !important;
  line-height: 25px !important;
  font-weight: 800 !important;
  display: block;
  padding: 5px 0 0;
  text-align: left;
}
.ti-read-more span {
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  font-size: 13.5px;
  color: #000000;
  opacity: 0.5;
  transition: all 300ms ease-out;
  cursor: pointer;
}
.ti-review-item:hover {
  -webkit-transform: translate(0, -5px);
  -ms-transform: translate(0, -5px);
  transform: translate(0, -5px);
}
.ti-read-more span:hover {
  text-decoration: underline;
  opacity: 1;
}
/*completeRecoveryBlock */
#completeRecoveryBlock {
  padding: 80px 0;
}
#completeRecoveryBlock .complete_recovery_wrapp {
  display: flex;
  align-items: center;
  gap: 36px;
}
.complete_recovery_wrapp .img_wrapp {
  border-radius: 16px;
}
.complete_recovery_wrapp .img_wrapp .desk_img {
  max-width: 560px;
}
.complete_recovery_wrapp h2.main_title {
  margin-bottom: 12px;
}
/*new_footer */
.new_footer {
  background: #b5a6f2;
  padding: 20px 0;
}
.new_footer_wrapp {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.copyright_wrapp p {
  color: #2e168d;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  margin: 0;
}
.policy_conditions_wrapp a {
  color: #4622da;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
}
.policy_conditions_wrapp {
  display: flex;
  gap: 22px;
}
@media only screen and (min-width: 900px) and (max-width: 1194px) {
  .who_should_attend_descr_link p {
    font-size: 14px;
  }
  .who_should_attend_descr_list {
    gap: 5px;
  }
  .who_should_attend_descr_list + p {
    font-size: 14px;
  }
  h2.main_title {
    font-size: 39px;
  }
  .featured_img_wrapp {
    margin-right: 30px;
  }
  .sticky_header .tel_link {
    font-size: 14px;
  }
  #ourPatientsLoveTrebleHealthBlock .slick-list {
    max-width: 820px;
  }
  h1.hero_main_title {
    font-size: 50px !important;
  }
  .new_body p {
    font-size: 15px;
  }
  .calendar_contacts .tel_link span {
    font-size: 13px;
  }
  #ourPatientsLoveTrebleHealthBlock p.video_descr {
    font-size: 15px;
  }
}
@media only screen and (min-width: 900px) and (max-width: 1090px) {
  .sticky_header .tel_link {
    font-size: 12px;
  }
  .who_should_attend_descr_list + p {
    font-size: 13px;
  }
  .who_should_attend_descr h2.main_title + p {
    font-size: 14px;
  }
  .sticky_header button.grab_your_free_btn {
    max-width: 133px;
  }
  #ourPatientsLoveTrebleHealthBlock .slick-list {
    max-width: 792px;
  }
  h2.main_title {
    font-size: 31px;
  }
  .new_body p {
    font-size: 14px;
  }
  #ourPatientsLoveTrebleHealthBlock p.video_descr {
    font-size: 14px;
  }
  .circular_chart_item:nth-child(2)::after {
    right: -42px;
  }
  .circular_chart_item:nth-child(2)::before {
    left: -42px;
  }
}

@media (max-width: 768px) {
  h2.main_title {
    font-size: 28px;
    line-height: 36px;
  }
  .sub_title {
    font-size: 20px !important;
    line-height: 28px !important;
  }
  button.grab_your_free_btn {
    margin: 20px auto 0;
    max-width: unset;
  }
  #exclusiveBonusBlock,
  #heroBlock .book_calendar_wrapp,
  #heroBlock .learn_wrapp,
  .sticky_header .logo_link,
  .sticky_btn_wrapp .tel_link,
  p.desk_txt,
  .desk_img,
  .ti-column.firts_var,
  .ti-column.second_var,
  .ti-column.third_var,
  .ti-column.fourth_var,
  .new_header_wrapp .tel_link span.desk_var {
    display: none;
  }
  /*new_header */
  .new_header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 5;
    padding: 8px 0;
  }
  .new_header_wrapp .logo_link {
    max-width: 150px;
    max-height: 28px;
  }
  .new_header_wrapp .logo_link img {
    width: 100%;
    height: 100%;
  }
  .new_header_wrapp .tel_link span.mob_var {
    display: block;
  }
  .new_header_wrapp .tel_link {
    color: #333;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    flex-direction: column;
    gap: 0;
  }
  .new_header_wrapp .tel_link img {
    width: 26px;
  }
  /*.sticky_header */
  .sticky_header.is_fixed_mob.is_intersecting {
    padding: 20px 0;
    opacity: 1;
    position: fixed;
    left: 0;
    z-index: 111111111;
    overflow: initial;
    height: max-content;
    bottom: 0;
    border-top: 1px solid #e5e5e5;
    background: #efecfb;
    box-shadow: 0px -4px 35px 0px rgba(153, 133, 235, 0.2);
  }
  .sticky_header .new_header_wrapp {
    gap: 9px;
  }
  .sticky_header .trust_score_wrapp {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .sticky_btn_wrapp {
    width: 100%;
    max-width: 148px;
  }
  .sticky_header .trust_score_wrapp p.reviews_txt {
    margin-left: 0;
  }
  .trust_score_wrapp > div {
    width: 100%;
    display: flex;
  }
  /*new_body */
  .new_body {
    padding-top: 60px;
    background: #fff;
  }
  /* heroBlock */
  #heroBlock {
    padding: 20px 0 40px;
  }
  .hero_wrapper {
    flex-direction: column;
  }
  .hero_wrapper > div.main_descr_wrapp {
    width: 100%;
  }
  h1.hero_main_title {
    font-size: 34px !important;
    line-height: 48px !important;
    margin: 28px auto 16px;
    text-align: center;
  }
  h2.hero_sub_title {
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
  }
  #heroBlock p.hero_txt {
    text-align: center;
  }
  .learn_from_call_box_mob {
    display: block;
    border-radius: 8px;
    background: var(--bg-1, #efecfb);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 20px;
    margin-bottom: 28px;
  }
  .learn_from_call_box_mob button.grab_your_free_btn {
    margin: 16px 0;
  }
  .learn_from_call_btn {
    color: #2e168d;
    font-size: 16px;
    font-weight: 700;
    line-height: 25px;
    text-decoration-line: underline;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    display: block;
    width: max-content;
  }
  .trust_score_wrapp p {
    font-size: 14px;
    line-height: 20px;
  }
  .trust_score_wrapp p span {
    font-weight: 600;
  }
  .featured_img_wrapp img:nth-child(1) {
    max-width: 69px;
  }
  .featured_img_wrapp img:nth-child(2) {
    max-width: 141px;
  }
  .featured_img_wrapp img:nth-child(3) {
    max-width: 78px;
  }
  /*learnMobBlock */
  #learnMobBlock {
    display: block;
    padding: 40px 0;
  }
  .learn_wrapp {
    border-radius: 0;
    background: none;
    padding: 0;
    margin-bottom: 20px;
  }
  .learn_wrapp h2.hero_sub_title {
    font-size: 28px;
    font-weight: 800;
    line-height: 36px;
    max-width: 350px;
  }
  .learn_list {
    list-style: none;
    padding: 0;
  }
  .learn_list .learn_item p {
    color: #2e168d;
  }
  .learn_list .learn_item + .learn_item {
    margin-top: 8px;
  }
  .learn_list .learn_item::before {
    background: url(https://conversionratestore.github.io/projects/treblehealth/img/check_icon.svg) center no-repeat;
    background-size: contain;
  }
  .exclusive_bonus_wrapp {
    border-radius: 0;
    border: none;
    background: none;
    box-shadow: none;
    flex-direction: column;
  }
  .exclusive_bonus_wrapp li:nth-child(1) {
    border-radius: 8px;
    border: 1px solid var(--borders, #e5e5e5);
    background: var(--white, #fff);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
    padding: 12px;
    display: flex;
    gap: 4px;
  }
  .exclusive_bonus_wrapp li:nth-child(2) {
    width: 100%;
    padding: 0;
    width: 100%;
    border-radius: 0;
    background: unset;
  }
  .exclusive_bonus_wrapp .sub_title {
    margin-bottom: 2px;
  }
  .exclusive_bonus_wrapp .accent_color {
    font-weight: 400;
    margin-bottom: 8px;
    color: #2e168d;
    font-size: 14px;
    line-height: 20px;
  }
  .exclusive_bonus_wrapp p:last-child {
    color: #0a0a0a;
    font-size: 14px;
    line-height: 20px;
  }
  .exclusive_bonus_wrapp .img_wrapp {
    max-width: 104px;
    width: 100%;
    min-width: 104px;
  }
  /*bookCalendarMob */
  #bookCalendarMob {
    display: block;
    background: #efecfb;
    padding: 40px 0;
  }
  #bookCalendarMob .book_calendar_wrapp {
    border-radius: 0;
    background: unset;
    box-shadow: none;
  }
  #bookCalendarMob .calendar_header {
    padding: 0 0 20px;
    border-bottom: none;
    margin: 0;
  }
  #bookCalendarMob .calendar_header h2 {
    font-size: 20px;
    line-height: 28px;
    max-width: 304px;
  }
  #bookCalendarMob iframe {
    border-radius: 8px;
    background: #fff;
  }
  #bookCalendarMob .calendar_footer {
    padding: 20px 0 0;
    background: none;
    border-radius: 0;
  }
  #bookCalendarMob .calendar_footer p.calendar_footer_txt {
    font-size: 14px;
    line-height: 20px;
  }
  #bookCalendarMob .calendar_contacts {
    gap: 12px;
    flex-direction: column;
    align-items: flex-start;
  }
  #bookCalendarMob h3.calendar_footer_title {
    line-height: 28px;
  }
  #bookCalendarMob .calendar_footer p.calendar_footer_txt br {
    display: none;
  }
  #bookCalendarMob .calendar_contacts .tel_link span {
    font-size: 14px;
    line-height: 20px;
  }
  #bookCalendarMob .calendar_contacts .tel_link span:nth-child(3) {
    font-weight: 600;
  }
  /* ourPatientsLoveTrebleHealthBlock */
  #ourPatientsLoveTrebleHealthBlock {
    padding: 40px 0;
  }
  .our_patients_treble_health_wrapp h2.main_title {
    text-align: center;
  }
  .our_patients_treble_health_wrapp > p {
    margin: 0 auto 20px;
  }
  #ourPatientsLoveTrebleHealthBlock .slick-slide > div {
    border-radius: 8px;
  }
  #ourPatientsLoveTrebleHealthBlock p.video_descr {
    padding: 12px;
    border-radius: 8px 8px 0 0;
  }
  #ourPatientsLoveTrebleHealthBlock .video_link_wrapp {
    height: 197px;
  }
  #ourPatientsLoveTrebleHealthBlock .video_link_wrapp::before {
    height: 48px;
    width: 48px;
  }
  #ourPatientsLoveTrebleHealthBlock .video_link_wrapp iframe {
    border-radius: 0 0 8px 8px;
  }
  #ourPatientsLoveTrebleHealthBlock .slick-slide {
    margin: 0 4px;
    border-radius: 8px;
  }
  #ourPatientsLoveTrebleHealthBlock .video_link_wrapp img {
    border-radius: 0 0 8px 8px;
  }
  #ourPatientsLoveTrebleHealthBlock .slick-arrow {
    top: unset;
    transform: unset;
    bottom: -5px;
    height: 24px;
    width: 24px;
  }

  /* whoShouldAttendBlock */
  #whoShouldAttendBlock {
    padding: 0 0 40px;
  }
  .who_should_attend_wrapp {
    gap: 20px;
    flex-direction: column-reverse;
  }
  .who_should_attend_descr h2.main_title {
    text-align: center;
  }
  .who_should_attend_descr h2.main_title + p {
    text-align: center;
    max-width: 317px;
    margin: 0 auto;
  }
  .who_should_attend_descr_list {
    gap: 8px;
  }
  .who_should_attend_descr_list + p {
    text-align: center;
  }
  .who_should_attend_item:nth-child(1) > div:nth-child(2) {
    padding: 12px;
  }
  .who_should_attend_item:nth-child(1) > div > p {
    margin-top: 8px;
  }
  p.mob_txt {
    display: block;
  }
  .who_should_attend_item:nth-child(1) .img_wrapp {
    max-width: 100px;
  }
  .who_should_attend_item:nth-child(1) .img_wrapp p.name_founder {
    padding: 4px;
  }
  .who_should_attend_item:nth-child(1) .img_wrapp p.name_founder span {
    max-width: 88px;
  }
  .who_should_attend_item button.grab_your_free_btn {
    display: none;
  }
  button.grab_your_free_btn.mob_var {
    display: flex;
  }
  .who_should_attend_item:nth-child(1) > div:nth-child(2)::after {
    width: 41px;
    height: 57px;
    background: url(https://conversionratestore.github.io/projects/treblehealth/img/arrow_icon_mob.svg) center no-repeat;
    background-size: contain;
    bottom: -20px;
    right: 50px;
  }
  /* yourHostsBlock */
  #yourHostsBlock {
    padding: 0 0 40px;
  }
  .your_hosts_wrapp h2.main_title {
    margin: 0 auto 77px;
  }
  .your_hosts_list {
    gap: 77px;
    flex-direction: column;
  }
  .your_hosts_list > li {
    padding: 73px 20px 20px;
  }
  .host_full_info {
    flex-direction: column;
    gap: 0;
  }
  h3.host_name {
    font-size: 20px;
    line-height: 28px;
  }
  .your_hosts_list p.host_doctor_of {
    text-align: center;
  }
  .host_full_info .img_wrapp {
    margin-top: -133px;
  }
  /* #clinicallyProvenResultsBlock */
  #clinicallyProvenResultsBlock {
    padding: 40px 0;
  }
  .clinically_proven_results_box h2.main_title {
    margin-bottom: 20px;
  }
  .circular_chart_list {
    flex-direction: column;
    gap: 43px;
  }
  .circular_chart_item:nth-child(2)::before,
  .circular_chart_item:nth-child(2)::after {
    left: 50%;
    top: -49px;
    transform: translateX(-50%) rotate(90deg);
  }
  .circular_chart_item:nth-child(2)::after {
    right: 50%;
    top: unset;
    bottom: -45px;
  }
  .clinically_proven_results_box > p {
    margin-top: 20px;
  }
  #clinicallyProvenResultsBlock p.circular_chart_item_txt {
    min-height: unset;
  }
  #clinicallyProvenResultsBlock .circular_chart_item:nth-child(1) p.circular_chart_item_txt {
    min-width: 110px;
  }
  .clinically_proven_results_wrapp button.grab_your_free_btn {
    margin: 20px 0 0;
  }
  .clinically_proven_results_box {
    padding: 28px 20px;
  }
  /* trustpilotBlock */
  #trustpilotBlock {
    padding: 0 0 40px;
  }
  #trustpilotBlock h2.main_title {
    margin: 0 auto 12px;
  }
  /* frequentlyAskedQuestionsBlock */
  #frequentlyAskedQuestionsBlock {
    padding: 40px 0;
  }
  .frequently_asked_questions_wrapp button.grab_your_free_btn {
    margin: 0;
  }
  #frequentlyAskedQuestionsBlock .questions_accordion_link p {
    font-size: 17px;
  }
  /* verifiedReviewsOnGoogleBlock */
  #verifiedReviewsOnGoogleBlock {
    padding: 40px 0 59px;
  }
  .verified_reviews_on_google_wrapp h2.main_title {
    margin: 0 auto 20px;
    text-align: center;
  }
  .ti-reviews-container-wrapper {
    flex-direction: column;
  }
  .ti-column {
    flex: unset;
    max-width: 100%;
  }
  .ti-column.mob_var {
    display: block;
  }
  /*#completeRecoveryBlock */
  #completeRecoveryBlock {
    background: #fbfafe;
    padding: 0 0 40px;
  }
  #completeRecoveryBlock .complete_recovery_wrapp {
    flex-direction: column;
    justify-content: center;
    gap: 19px;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.12);
  }
  .complete_recovery_wrapp h2.main_title {
    margin-bottom: 8px;
    text-align: center;
  }
  #completeRecoveryBlock p {
    text-align: center;
  }
  .complete_recovery_wrapp .img_wrapp {
    border-radius: 0;
  }
  .complete_recovery_wrapp .img_wrapp img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }
  .mob_img {
    display: block;
  }
  /*new_footer_wrapp */
  .new_footer_wrapp {
    flex-direction: column-reverse;
  }
  .new_footer {
    padding: 20px 0 109px;
  }
}
@media (max-width: 376px) {
  .sticky_header .trust_score_wrapp p {
    font-size: 11px;
  }
  #ourPatientsLoveTrebleHealthBlock p.video_descr {
    font-size: 15px;
  }
  .learn_list .learn_item p {
    font-size: 15px;
  }
}
@media (max-width: 361px) {
  ul.calendar_header_list li p {
    color: #2e168d;
    font-size: 13px;
    font-weight: 700;
    line-height: 30px;
  }
  h2.main_title {
    font-size: 27px;
  }
  .new_body p {
    font-size: 15px;
  }
  .exclusive_bonus_wrapp .accent_color,
  #bookCalendarMob .calendar_footer p.calendar_footer_txt {
    font-size: 13px;
  }
  .exclusive_bonus_wrapp p:last-child {
    font-size: 12px;
  }
  #ourPatientsLoveTrebleHealthBlock p.video_descr {
    font-size: 14px;
  }
  #frequentlyAskedQuestionsBlock .questions_accordion_link p {
    font-size: 15px;
  }
  .sticky_header .trust_score_wrapp p {
    font-size: 10px;
  }
  .sticky_header button.grab_your_free_btn {
    font-size: 15px !important;
  }
  button.grab_your_free_btn {
    font-size: 16px !important;
  }
}

    </style>
    `;

    let newHtml = /*html */ `
<div class="new_header">
  <div class="container_var">
    <div class="new_header_wrapp">
      <a class="logo_link" href="https://treblehealth.com">
        <img width="211" height="40" src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" data-src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" class="attachment-full size-full wp-image-13 ls-is-cached lazyloaded" alt="TrebleHealth Site Logo" />
      </a>
      <a class="tel_link" href="tel:+8558732531">
        <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
        <span class="desk_var">(855) 873-2531</span><span class="mob_var">Call Us</span></a>
    </div>
  </div>
</div>
<div class="sticky_header">
  <div class="container_var">
    <div class="new_header_wrapp">
      <a class="logo_link" href="https://treblehealth.com">
        <img width="211" height="40" src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" data-src="https://treblehealth.com/wp-content/uploads/2021/09/site-logo.svg" class="attachment-full size-full wp-image-13 ls-is-cached lazyloaded" alt="TrebleHealth Site Logo" />
      </a>
      <div class="trust_score_wrapp">
          <img class="trust_score_stars" src="https://conversionratestore.github.io/projects/treblehealth/img/trust_score_stars.svg" alt="stars" />
          <div>
            <p class="reviews_txt">TrustScore</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M14.001 5.4958L2.67338 13.374L4.32601 8.50498L-0.000976562 5.4958H5.3474L7.00002 0.626465L8.65265 5.4958H14.001ZM7.00044 10.3651L10.0941 9.74213L11.3267 13.374L7.00044 10.3651Z" fill="#2E168D"/>
            </svg>
            <p class="reviews_mark">4.9</p>
            <p class="reviews_count">(<span><b>432</b> reviews</span>)</p>
          </div>
        </div>
      <div class="sticky_btn_wrapp">
        <a class="tel_link" href="tel:+8558732531">
          <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
          (855) 873-2531</a>
          <button class="grab_your_free_btn">Grab a Free Seat</button>
      </div>
    </div>
  </div>
</div>
<div class="new_body">
  <section id="heroBlock">
  <div class="container_var">
    <div class="hero_wrapper">
      <div class="main_descr_wrapp">
        <div class="trust_score_wrapp">
          <img class="trust_score_stars" src="https://conversionratestore.github.io/projects/treblehealth/img/trust_score_stars.svg" alt="stars" />
          <p class="reviews_txt">TrustScore</p>
          <svg class="reviews_star" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M16 6.61172L3.05597 16.5L4.94442 10.3887L0 6.61172H6.11155L8 0.5L9.88844 6.61172H16ZM8.00047 12.7235L11.5356 11.9415L12.9441 16.5L8.00047 12.7235Z" fill="#00B67A" />
          </svg>
          <p class="reviews_mark">4.9</p>
          <p class="reviews_count">(<span><b>432</b> reviews</span>)</p>
        </div>
        <h1 class="hero_main_title">Unlock Relief from Tinnitus Today!</h1>
        <p class="hero_txt">Book your spot in our discovery call and take your first step towards quieter days - <b>absolutely FREE!</b></p>
<div class="learn_from_call_box_mob">
  <ul class="calendar_header_list">
    <li><p>Free</p></li>
    <li><p>20 minutes</p></li>
    <li><p>Zoom call</p></li>
  </ul>
  <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
  <span class="learn_from_call_btn">What will I learn from the call?</span>
</div>
        <div class="learn_wrapp">
          <h2 class="hero_sub_title">In this FREE discovery call, you’ll learn:</h2>
          <ul class="learn_list">
            <li class="learn_item">
              <p>Effective <span class="accent_color_black">treatment options</span> from licensed doctors of audiology.</p>
            </li>
            <li class="learn_item">
              <p>Our science-backed approach to tinnitus relief with an <span class="accent_color_black">80% success rate*</span>.</p>
            </li>
            <li class="learn_item">
              <p>Techniques to dramatically reduce symptoms.</p>
            </li>
            <li class="learn_item">
              <p>Success stories of individuals reducing their tinnitus and reclaiming their lives.</p>
            </li>
            <li class="learn_item">
              <p>How anyone seeking tinnitus relief can integrate these habits into their daily life.</p>
            </li>
          </ul>
        </div>
        <div class="featured_box">
          <h2 class="hero_sub_title">Featured on :</h2>
          <div class="featured_img_wrapp">
            <img class="featured_img" src="https://conversionratestore.github.io/projects/treblehealth/img/forbes.svg" alt="logo forbes" />
            <img class="featured_img" src="https://conversionratestore.github.io/projects/treblehealth/img/healthy_hearing.svg" alt="logo healthy hearing" />
            <img class="featured_img" src="https://conversionratestore.github.io/projects/treblehealth/img/cnet.svg" alt="logo cnet" />
          </div>
        </div>
      </div>
      <div class="book_calendar_wrapp">
        <div class="calendar_header">
  <h2>Book Your Spot in a Free Tinnitus Relief Discovery Call</h2>
  <ul class="calendar_header_list">
    <li><p>Free</p></li>
    <li><p>20 minutes</p></li>
    <li><p>Zoom call</p></li>
  </ul>
</div>
<div class="calendar_body">
 <iframe class="new_iframe_calendly" src="https://calendly.com/treble-health-audiologists/tinnitus-relief-discovery?embed_domain=treblehealth.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4622da&month=2023-11&utm_content=funnel_1" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly" data-gtm-yt-inspected-14="true" data-gtm-yt-inspected-60173040_75="true"></iframe>
</div>
<div class="calendar_footer">
  <div class="calendar_contacts">
    <h3 class="calendar_footer_title">Can’t find a time?</h3>
    <a class="tel_link" href="tel:+8558732531">
      <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
      <span>Call us</span> <span>(855) 873-2531</span>
    </a>
  </div>
  <div class="calendar_footer_members">
    <img src="https://conversionratestore.github.io/projects/treblehealth/img/team members.png" alt="Our consultants" />
    <p class="calendar_footer_txt">We’re ready to support you.<br>Team members are standing by 24/7.</p>
  </div>
</div>
      </div>
    </div>
  </div>
</section>
  <section id="exclusiveBonusBlock">
    <div class="container_var">
      <ul class="exclusive_bonus_wrapp">
        <li>
          <h3 class="sub_title">Exclusive Bonus!</h3>
          <p class="accent_color">You will receive the “Tinnitus Guide: 2023 Edition” for FREE.</p>
          <p>This guide covers today's leading tinnitus treatments, how to find the root cause, and the newest research. It's an in-depth overview for managing tinnitus.</p>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </li>
        <li>
          <div class="img_wrapp">
            <img src="https://conversionratestore.github.io/projects/treblehealth/img/tinnitus_guide_img_new.png" alt="book" />
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section id="learnMobBlock">
  <div class="container_var">
    <div class="learn_mob_wrapp">
      <div class="learn_wrapp">
        <h2 class="hero_sub_title">In this FREE discovery call, you’ll learn:</h2>
        <ul class="learn_list">
          <li class="learn_item">
            <p>Effective <span class="accent_color_black">treatment options</span> from licensed doctors of audiology.</p>
          </li>
          <li class="learn_item">
            <p>Our science-backed approach to tinnitus relief with an <span class="accent_color_black">80% success rate*</span>.</p>
          </li>
          <li class="learn_item">
            <p>Techniques to dramatically reduce symptoms.</p>
          </li>
          <li class="learn_item">
            <p>Success stories of individuals reducing their tinnitus and reclaiming their lives.</p>
          </li>
          <li class="learn_item">
            <p>How anyone seeking tinnitus relief can integrate these habits into their daily life.</p>
          </li>
        </ul>
      </div>
      <ul class="exclusive_bonus_wrapp">
        <li>
          <div>
            <h3 class="sub_title">Exclusive Bonus!</h3>
            <p class="accent_color">You will receive the “Tinnitus Guide: 2023 Edition” for <b>FREE.</b></p>
            <p>This guide covers today's leading tinnitus treatments, how to find the root cause, and the newest research. It's an in-depth overview for managing tinnitus.</p>
          </div>
          <div class="img_wrapp">
            <img src="https://conversionratestore.github.io/projects/treblehealth/img/tinnitus_guide_img_new.png" alt="book" />
          </div>
        </li>
        <li>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </li>
      </ul>
    </div>
  </div>
</section>
<section id="bookCalendarMob">
  <div class="container_var">
    <div class="book_calendar_mob_wrapp">
      <div class="book_calendar_wrapp">
        <div class="calendar_header">
          <h2>Book Your Spot in a Free Tinnitus Relief Discovery Call</h2>
          <ul class="calendar_header_list">
            <li><p>Free</p></li>
            <li><p>20 minutes</p></li>
            <li><p>Zoom call</p></li>
          </ul>
        </div>
        <div class="calendar_body no_sticky">
          <iframe class="new_iframe_calendly" src="https://calendly.com/treble-health-audiologists/tinnitus-relief-discovery?embed_domain=treblehealth.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4622da&month=2023-11&utm_content=funnel_1" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly" data-gtm-yt-inspected-14="true" data-gtm-yt-inspected-60173040_75="true"></iframe>
        </div>
        <div class="calendar_footer">
          <div class="calendar_contacts">
            <h3 class="calendar_footer_title">Can’t find a time?</h3>
            <a class="tel_link" href="tel:+8558732531">
              <img src="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" alt="" data-src-desktop-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" data-src-mobile-1x="//d9hhrg4mnvzow.cloudfront.net/try.treblehealth.com/tinnitus-relief-discovery-call-v1-1/4c38b6a3-header-phone-icon.svg" />
              <span>Call us</span> <span>(855) 873-2531</span>
            </a>
          </div>
          <div class="calendar_footer_members">
            <img src="https://conversionratestore.github.io/projects/treblehealth/img/team members.png" alt="Our consultants" />
            <p class="calendar_footer_txt">We’re ready to support you.<br />Team members are standing by 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <section id="ourPatientsLoveTrebleHealthBlock">
    <div class="container_var">
      <div class="our_patients_treble_health_wrapp">
        <h2 class="main_title">Why Our Patients Love Treble Health</h2>
        <p>We're proud of all the patients our solution has helped, and we're confident it will work for you too:</p>
        <div class="video_list">
          <div class="video_item">
            <p class="video_descr" data-name="Melinda">Melinda had a <b>serious level of tinnitus</b>. She worked with Treble Health and found relief in just <b>47 Days</b>.</p>
            <div class="video_link_wrapp">
              <img src="https://conversionratestore.github.io/projects/treblehealth/img/melinda.png" alt="woman" />
             <iframe width="560" height="315" src="https://www.youtube.com/embed/NMEISemQYcU?si=apKbuTqO7fQzd_eR&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div class="video_item">
            <p class="video_descr" data-name="Randy">Randy <b>lowered his tinnitus and got his life back</b> working with Treble Health over a <b>three-month</b> time period.</p>
            <div class="video_link_wrapp">
              <img src="https://conversionratestore.github.io/projects/treblehealth/img/randy.png" alt="man" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/PaJhaIUSSfQ?si=-LEXqse9UgrVqPtO&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div class="video_item">
            <p class="video_descr" data-name="James">James had severe tinnitus. He worked with Treble Health and <b>improved his condition by 75%.</b></p>
            <div class="video_link_wrapp">
              <img src="https://conversionratestore.github.io/projects/treblehealth/img/james.png" alt="man" />
              <iframe width="560" height="315" src="https://www.youtube.com/embed/8EwDVQ0gKVY?si=MmoerJmfnQog73GA&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="whoShouldAttendBlock">
    <div class="container_var">
      <ul class="who_should_attend_wrapp">
        <li class="who_should_attend_item">
          <div class="img_wrapp">
            <img src="https://conversionratestore.github.io/projects/treblehealth/img/ben_thompson_img.png" alt="man" />
            <p class="name_founder"><span>Dr. Ben Thompson, AuD Founder of Treble Health</span></p>
          </div>
          <div>
            <h3 class="sub_title">Spaces are limited and filling up fast</h3>
            <p>Grab this limited time offer to transform your life today.</p>
            <p class="desk_txt">Click the button to secure your spot!</p>
            <p class="mob_txt">Click the button below to secure your spot!</p>
          </div>
        </li>
        <li class="who_should_attend_item">
          <div class="who_should_attend_descr">
            <h2 class="main_title">Who Should Attend?</h2>
            <p>The discovery call is designed for individuals who:</p>
            <ul class="who_should_attend_descr_list">
              <li class="who_should_attend_descr_link"><p>Struggle with tinnitus</p></li>
              <li class="who_should_attend_descr_link"><p>Have been told nothing can be done for their tinnitus</p></li>
              <li class="who_should_attend_descr_link"><p>Have wasted money on ineffective supplements or treatments</p></li>
              <li class="who_should_attend_descr_link"><p>Are near a point of desperation and just need help with their tinnitus</p></li>
            </ul>
            <p>If any of the above apply to you, you're in the right place!</p>
          </div>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </li>
      </ul>
       <button class="grab_your_free_btn mob_var">Grab Your FREE Seat Now!</button>
    </div>
  </section>
  <section id="yourHostsBlock">
    <div class="container_var">
      <div class="your_hosts_wrapp">
        <h2 class="main_title">Your hosts:</h2>
        <ul class="your_hosts_list">
          <li>
            <div class="host_full_info">
              <div class="img_wrapp">
                <img src="https://conversionratestore.github.io/projects/treblehealth/img/tatyana_kennedy_img.png" alt="woman" />
              </div>
              <div>
                <h3 class="host_name">
                  Tatyana Kennedy, AuD
                  <svg class="tooltip_toggle" data-tooltip data-title="Doctor of Audiology" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 0C3.13428 0 0 3.13541 0 7C0 10.8668 3.13428 14 7 14C10.8657 14 14 10.8668 14 7C14 3.13541 10.8657 0 7 0ZM7 3.10484C7.65473 3.10484 8.18548 3.6356 8.18548 4.29032C8.18548 4.94505 7.65473 5.47581 7 5.47581C6.34527 5.47581 5.81452 4.94505 5.81452 4.29032C5.81452 3.6356 6.34527 3.10484 7 3.10484ZM8.58064 10.2742C8.58064 10.4612 8.42899 10.6129 8.24193 10.6129H5.75806C5.57101 10.6129 5.41935 10.4612 5.41935 10.2742V9.59677C5.41935 9.40972 5.57101 9.25806 5.75806 9.25806H6.09677V7.45161H5.75806C5.57101 7.45161 5.41935 7.29996 5.41935 7.1129V6.43548C5.41935 6.24843 5.57101 6.09677 5.75806 6.09677H7.56452C7.75157 6.09677 7.90323 6.24843 7.90323 6.43548V9.25806H8.24193C8.42899 9.25806 8.58064 9.40972 8.58064 9.59677V10.2742Z" fill="#2E168D" />
                  </svg>
                </h3>
                <p class="host_doctor_of">Doctor of Audiology</p>
              </div>
            </div>
            <p class="host_descr">Dr. Kennedy is an Audiologist with over 15 years of experience in creating tailored tinnitus solutions for patients who are looking to get back to living productive and fulfilling lives. She is a mother of two, a wife, an athlete and an avid traveler. She loves all things technology and tells unnecessarily long stories. Most importantly, Dr. Kennedy is committed to helping people make informed decisions about achieving better hearing health and well-being. She graduated with her Doctor of Audiology degree at the University of Florida.</p>
          </li>
          <li>
            <div class="host_full_info">
              <div class="img_wrapp">
                <img src="https://conversionratestore.github.io/projects/treblehealth/img/jackie_smith_img.png" alt="woman" />
              </div>
              <div>
                <h3 class="host_name">
                  Jackie Smith, AuD
                  <svg class="tooltip_toggle" data-tooltip data-title="Doctor of Audiology" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 0C3.13428 0 0 3.13541 0 7C0 10.8668 3.13428 14 7 14C10.8657 14 14 10.8668 14 7C14 3.13541 10.8657 0 7 0ZM7 3.10484C7.65473 3.10484 8.18548 3.6356 8.18548 4.29032C8.18548 4.94505 7.65473 5.47581 7 5.47581C6.34527 5.47581 5.81452 4.94505 5.81452 4.29032C5.81452 3.6356 6.34527 3.10484 7 3.10484ZM8.58064 10.2742C8.58064 10.4612 8.42899 10.6129 8.24193 10.6129H5.75806C5.57101 10.6129 5.41935 10.4612 5.41935 10.2742V9.59677C5.41935 9.40972 5.57101 9.25806 5.75806 9.25806H6.09677V7.45161H5.75806C5.57101 7.45161 5.41935 7.29996 5.41935 7.1129V6.43548C5.41935 6.24843 5.57101 6.09677 5.75806 6.09677H7.56452C7.75157 6.09677 7.90323 6.24843 7.90323 6.43548V9.25806H8.24193C8.42899 9.25806 8.58064 9.40972 8.58064 9.59677V10.2742Z" fill="#2E168D" />
                  </svg>
                </h3>
                <p class="host_doctor_of">Doctor of Audiology</p>
              </div>
            </div>
            <p class="host_descr">Dr. Smith prides herself on providing excellent patient care and improving the quality of each patient’s life through comprehensive tinnitus treatment. She graduated with her bachelor’s degree in Speech, Language, and Hearing Sciences from the University of Colorado and earned her Doctorate of Audiology at the University of Northern Colorado. Dr. Smith has worked in a variety of clinical settings including private practice, Ear Nose and Throat (ENT), and the Department of Veteran’s Affairs.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
<section id="clinicallyProvenResultsBlock">
  <div class="container_var">
    <div class="clinically_proven_results_wrapp">
      <div class="clinically_proven_results_box">
        <h2 class="main_title">Clinically Proven Results</h2>
        <div class="circular_chart_list">
          <div class="circular_chart_item animation-none1 animated">
            <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
              <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
              <circle id="circle1" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="552, 20000"></circle>
            </svg>
            <div class="circular_chart_info">
              <h3 class="circular_chart_item_title"><span class="count-number1">85</span>%</h3>
              <p class="circular_chart_item_txt">of patients report reduced tinnitus</p>
            </div>
          </div>
          <div class="circular_chart_item animation-none2 animated">
            <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
              <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
              <circle id="circle2" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="492, 20000"></circle>
            </svg>
            <div class="circular_chart_info">
              <h3 class="circular_chart_item_title"><span class="count-number2">75</span>%</h3>
              <p class="circular_chart_item_txt">of patients showed clinically significant improvements in their tinnitus within six months*</p>
            </div>
          </div>
          <div class="circular_chart_item animation-none3 animated">
            <svg width="231" height="230" viewBox="0 0 231 230" fill="none" xmlns="http://www.w3.org/2000/svg" class="circular-chart">
              <path class="circle-bg" d="M230.629 115C230.629 178.513 179.142 230 115.629 230C52.1163 230 0.629028 178.513 0.629028 115C0.629028 51.4873 52.1163 0 115.629 0C179.142 0 230.629 51.4873 230.629 115ZM21.6398 115C21.6398 166.909 63.7202 208.989 115.629 208.989C167.538 208.989 209.618 166.909 209.618 115C209.618 63.0912 167.538 21.0108 115.629 21.0108C63.7202 21.0108 21.6398 63.0912 21.6398 115Z" fill="#B5A6F2" fill-opacity="0.2"></path>
              <circle id="circle3" class="circle" cx="115" cy="115" r="105" stroke="#B5A6F2" stroke-width="20" stroke-linecap="round" stroke-dasharray="630, 20000"></circle>
            </svg>
            <div class="circular_chart_info">
              <h3 class="circular_chart_item_title"><span class="count-number3">98</span>%</h3>
              <p class="circular_chart_item_txt">of patients can have their initial video visit within 3 days of signing up</p>
            </div>
          </div>
        </div>
        <p>*This data comes from our 2023 results using the Tinnitus Functional Index (TFI), out of 247 patients.</p>
      </div>
      <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
    </div>
  </div>
</section>
  <section id="trustpilotBlock">
    <div class="container_var">
      <a href="https://uk.trustpilot.com/review/treblehealth.com" class="trustpilot_link" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="44" viewBox="0 0 180 44" fill="none">
    <g clip-path="url(#clip0_193_1701)">
      <path d="M47.295 15.4906H65.5175V18.8514H58.3535V37.7481H54.4115V18.8514H47.2783V15.4893H47.2938L47.295 15.4906ZM64.7396 21.6311H68.1082V24.7422H68.1712C68.283 24.3022 68.4888 23.8777 68.7909 23.4688C69.4369 22.5923 70.3113 21.9128 71.3173 21.5056C71.8283 21.3018 72.3723 21.1952 72.9219 21.1911C73.3333 21.1911 73.6367 21.2067 73.7962 21.2235C73.9543 21.239 74.1125 21.2701 74.2873 21.2856V24.7098C74.0293 24.6644 73.7699 24.6277 73.5095 24.5998C73.2509 24.5691 72.9907 24.5535 72.7303 24.5533C72.126 24.5533 71.5552 24.6788 71.0152 24.9156C70.4752 25.1498 70.0136 25.5109 69.6176 25.9677C69.1951 26.4785 68.8715 27.0645 68.6636 27.6954C68.4257 28.3864 68.3139 29.1707 68.3139 30.0675V37.7325H64.7242V21.6311H64.7396ZM90.7946 37.7494H87.2679V35.5028H87.2036C86.7587 36.3207 86.1082 36.9651 85.2339 37.4517C84.3596 37.9383 83.4699 38.1894 82.5648 38.1894C80.4202 38.1894 78.8619 37.6717 77.9105 36.6183C76.9565 35.5662 76.4795 33.9796 76.4795 31.8586V21.6324H80.0705V31.513C80.0705 32.9275 80.3405 33.933 80.8972 34.5141C81.4372 35.0951 82.215 35.3941 83.1999 35.3941C83.9623 35.3941 84.582 35.2841 85.0899 35.0473C85.599 34.8117 86.0118 34.5141 86.3139 34.1207C86.6315 33.7441 86.8539 33.273 86.9979 32.7386C87.1393 32.2041 87.2036 31.623 87.2036 30.9954V21.648H90.7946V37.7494ZM96.9107 32.582C97.0226 33.6173 97.4186 34.342 98.1026 34.7651C98.8008 35.1741 99.6275 35.3941 100.597 35.3941C100.931 35.3941 101.312 35.3617 101.741 35.3151C102.169 35.2673 102.582 35.1573 102.948 35.0175C103.329 34.8751 103.63 34.6551 103.884 34.373C104.124 34.0883 104.234 33.7286 104.219 33.273C104.217 33.0616 104.17 32.853 104.083 32.6608C103.995 32.4686 103.869 32.2971 103.711 32.1575C103.392 31.8598 102.996 31.6398 102.502 31.4509C101.952 31.2591 101.389 31.1069 100.818 30.9954C100.183 30.8698 99.5477 30.7275 98.8972 30.5864C98.2418 30.4437 97.5945 30.2653 96.9583 30.052C96.3616 29.8595 95.7988 29.5734 95.2907 29.2043C94.7956 28.8565 94.3919 28.3929 94.1143 27.8533C93.8135 27.3033 93.6695 26.6277 93.6695 25.8111C93.6695 24.9311 93.8919 24.209 94.3213 23.6111C94.7545 23.0182 95.3136 22.5301 95.958 22.1824C96.6506 21.8139 97.395 21.5543 98.1656 21.4124C98.9756 21.2714 99.7547 21.1924 100.485 21.1924C101.327 21.1924 102.137 21.2869 102.901 21.4603C103.64 21.6197 104.345 21.9121 104.981 22.3235C105.601 22.7169 106.109 23.2346 106.523 23.8635C106.935 24.4911 107.19 25.2611 107.301 26.1567H103.551C103.377 25.309 102.995 24.728 102.376 24.4446C101.757 24.1469 101.042 24.0046 100.247 24.0046C99.9926 24.0046 99.6905 24.0201 99.342 24.068C99.0063 24.1129 98.6759 24.1918 98.3559 24.3035C98.0634 24.4119 97.7979 24.5833 97.578 24.8056C97.4713 24.9216 97.3883 25.0577 97.3338 25.206C97.2793 25.3544 97.2544 25.5121 97.2605 25.6701C97.2605 26.1101 97.4186 26.4556 97.7207 26.7222C98.0229 26.9888 98.4202 27.2088 98.9126 27.3977C99.405 27.5711 99.9617 27.7277 100.597 27.8533C101.232 27.9788 101.883 28.1198 102.551 28.2622C103.202 28.4033 103.837 28.5922 104.473 28.7954C105.108 28.9998 105.664 29.2833 106.158 29.6443C106.65 30.0054 107.047 30.4454 107.348 30.9798C107.65 31.513 107.81 32.1886 107.81 32.9741C107.81 33.9317 107.587 34.7341 107.141 35.4096C106.698 36.0696 106.125 36.6183 105.426 37.0273C104.694 37.4518 103.9 37.7591 103.074 37.9383C102.234 38.1244 101.376 38.219 100.516 38.2204C99.5523 38.2313 98.5914 38.1152 97.6577 37.8749C96.7835 37.6394 96.021 37.2938 95.3859 36.8396C94.7582 36.3805 94.2421 35.784 93.8765 35.0951C93.5113 34.4041 93.3197 33.5707 93.2889 32.613H96.9107V32.582ZM108.762 21.6337H111.479V16.7937H115.07V21.6337H118.31V24.2867H115.071V32.8964C115.071 33.2717 115.087 33.5875 115.119 33.8696C115.15 34.1375 115.23 34.373 115.341 34.5607C115.463 34.7578 115.648 34.9075 115.865 34.9851C116.104 35.0796 116.405 35.1275 116.819 35.1275C117.072 35.1275 117.327 35.1275 117.581 35.1107C117.836 35.0951 118.089 35.0641 118.344 35.0007V37.7494C117.946 37.7973 117.549 37.8283 117.184 37.8749C116.799 37.9199 116.412 37.9411 116.024 37.9383C115.071 37.9383 114.309 37.8438 113.736 37.6717C113.165 37.4983 112.703 37.2317 112.386 36.8862C112.051 36.5407 111.846 36.1162 111.718 35.5973C111.595 35.0137 111.526 34.4196 111.513 33.823V24.3164H108.796V21.6298H108.764L108.762 21.6337ZM120.852 21.6337H124.253V23.8156H124.317C124.824 22.8735 125.523 22.2135 126.428 21.8058C127.353 21.3918 128.356 21.1826 129.369 21.1924C130.654 21.1924 131.766 21.4124 132.72 21.868C133.673 22.308 134.468 22.9214 135.103 23.7056C135.738 24.4911 136.2 25.4022 136.517 26.4401C136.841 27.5197 137.002 28.6422 136.994 29.7698C136.994 30.853 136.851 31.9051 136.565 32.912C136.301 33.8831 135.865 34.7982 135.278 35.6128C134.7 36.3981 133.95 37.0381 133.086 37.4828C132.196 37.9538 131.163 38.1894 129.956 38.1894C129.428 38.1888 128.902 38.1412 128.382 38.047C127.864 37.9531 127.359 37.8007 126.874 37.5928C126.393 37.3908 125.943 37.1206 125.538 36.7904C125.139 36.4695 124.79 36.0884 124.506 35.6607H124.442V43.7036H120.852V21.6311V21.6337ZM133.403 29.7064C133.404 28.9901 133.308 28.277 133.118 27.5867C132.942 26.9326 132.651 26.3155 132.259 25.7646C131.887 25.2404 131.404 24.8055 130.846 24.4911C130.246 24.1649 129.573 23.9974 128.892 24.0046C127.382 24.0046 126.238 24.5222 125.475 25.5601C124.713 26.5967 124.331 27.9801 124.331 29.7064C124.331 30.523 124.428 31.2775 124.633 31.9685C124.839 32.6596 125.126 33.2575 125.538 33.7596C125.937 34.263 126.413 34.6551 126.969 34.9373C127.525 35.2362 128.177 35.3773 128.907 35.3773C129.734 35.3773 130.416 35.2051 130.989 34.8751C131.543 34.5543 132.02 34.1147 132.386 33.5875C132.751 33.053 133.023 32.4551 133.181 31.7809C133.327 31.0992 133.402 30.4039 133.403 29.7064ZM139.742 15.4906H143.333V18.8527H139.742V15.4906ZM139.742 21.6324H143.333V37.7494H139.742V21.6324ZM146.542 15.4906H150.133V37.7494H146.542V15.4906ZM161.142 38.1894C159.839 38.1894 158.679 37.9694 157.663 37.5462C156.69 37.1442 155.808 36.5452 155.074 35.7862C154.36 35.0119 153.813 34.0972 153.468 33.0996C153.09 31.9985 152.902 30.8403 152.913 29.6754C152.913 28.4498 153.103 27.3201 153.468 26.2822C153.813 25.2851 154.36 24.3708 155.074 23.5969C155.772 22.8424 156.646 22.2614 157.663 21.8369C158.679 21.4124 159.839 21.1924 161.142 21.1924C162.445 21.1924 163.605 21.4124 164.622 21.8369C165.639 22.2614 166.496 22.8593 167.211 23.5969C167.925 24.3706 168.471 25.285 168.816 26.2822C169.181 27.3188 169.371 28.4498 169.371 29.6754C169.371 30.9177 169.181 32.063 168.816 33.0996C168.471 34.0973 167.925 35.0122 167.211 35.7862C166.512 36.5407 165.639 37.1217 164.622 37.5462C163.605 37.9694 162.445 38.1894 161.142 38.1894ZM161.142 35.3773C161.937 35.3773 162.635 35.2051 163.223 34.8751C163.795 34.5543 164.29 34.1086 164.669 33.5707C165.05 33.0375 165.32 32.4241 165.511 31.7486C165.686 31.073 165.781 30.382 165.781 29.6754C165.781 28.9843 165.686 28.3088 165.511 27.6177C165.348 26.9622 165.062 26.3439 164.669 25.7956C164.289 25.2628 163.795 24.8228 163.223 24.508C162.635 24.178 161.937 24.0046 161.142 24.0046C160.348 24.0046 159.648 24.178 159.061 24.508C158.493 24.8276 158 25.2668 157.616 25.7956C157.229 26.3472 156.943 26.9644 156.774 27.6177C156.598 28.2894 156.506 28.9807 156.502 29.6754C156.502 30.382 156.599 31.073 156.774 31.7486C156.948 32.4241 157.234 33.0375 157.616 33.5707C157.996 34.1051 158.473 34.5451 159.061 34.8751C159.648 35.2207 160.348 35.3773 161.142 35.3773ZM170.42 21.6337H173.137V16.7937H176.728V21.6337H179.968V24.2867H176.728V32.8964C176.728 33.2717 176.743 33.5875 176.774 33.8696C176.806 34.1375 176.886 34.373 176.998 34.5607C177.119 34.758 177.304 34.9078 177.521 34.9851C177.76 35.0796 178.061 35.1275 178.475 35.1275C178.728 35.1275 178.983 35.1275 179.238 35.1107C179.492 35.0951 179.745 35.0641 180 35.0007V37.7494C179.603 37.7973 179.205 37.8283 178.84 37.8749C178.455 37.9199 178.068 37.9411 177.681 37.9383C176.728 37.9383 175.964 37.8438 175.392 37.6717C174.821 37.4983 174.36 37.2317 174.042 36.8862C173.709 36.5407 173.502 36.1162 173.375 35.5973C173.251 35.0136 173.182 34.4196 173.169 33.823V24.3164H170.452V21.6298H170.42V21.6337Z" fill="#0A0A0A"/>
      <path d="M43.101 15.4893H26.6426L21.5589 0L16.4571 15.4906L0 15.4738L13.329 25.0554L8.22986 40.5279L21.5589 30.9618L34.8724 40.5279L29.7887 25.0554L43.101 15.4893Z" fill="#04DA8D"/>
      <path d="M30.9319 28.5599L29.7877 25.0568L21.5591 30.9631L30.9319 28.5599Z" fill="#126849"/>
    </g>
    <defs>
      <clipPath id="clip0_193_1701">
        <rect width="180" height="44" fill="white"/>
      </clipPath>
    </defs>
  </svg>
      </a>
       <h2 class="main_title">People just like you achieve great results</h2>
<!-- TrustBox widget - Slider -->
<div class="trustpilot-widget" data-locale="en-GB" data-template-id="54ad5defc6454f065c28af8b" data-businessunit-id="6397ccb1f1b97c8d18a77a5d" data-style-height="240px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-review-languages="en">
  <a href="https://uk.trustpilot.com/review/treblehealth.com" target="_blank" rel="noopener">Trustpilot</a>
</div>
<!-- End TrustBox widget -->
    </div>
  </section>
  <section id="frequentlyAskedQuestionsBlock">
    <div class="container_var">
      <div class="frequently_asked_questions_wrapp">
        <h2 class="main_title">Frequently Asked Questions</h2>
        <ul class="questions_accordion"></ul>
        <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
      </div>
    </div>
  </section>
  <section id="verifiedReviewsOnGoogleBlock">
    <div class="container_var">
      <div class="verified_reviews_on_google_wrapp">
        <h2 class="main_title">Verified Reviews on Google</h2>
        <div class="ti-reviews-container-wrapper">
          <div class="ti-column firts_var"></div>
          <div class="ti-column second_var"></div>
          <div class="ti-column third_var"></div>
          <div class="ti-column fourth_var"></div>
          <div class="ti-column mob_var"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="completeRecoveryBlock">
    <div class="container_var">
      <div class="complete_recovery_wrapp">
        <div class="img_wrapp">
          <img class="desk_img" src="https://conversionratestore.github.io/projects/treblehealth/img/complete_recovery_img.png" alt="man" />
          <img class="mob_img" src="https://conversionratestore.github.io/projects/treblehealth/img/complete_recovery_img_mob.png" alt="man" />
        </div>
        <div class="complete_recovery_descr">
          <h2 class="main_title">A complete recovery from tinnitus is possible</h2>
          <p>Learn how in under an hour. </p>
          <button class="grab_your_free_btn">Grab Your FREE Seat Now!</button>
        </div>
      </div>
    </div>
  </section>
</div>
<div class="new_footer">
  <div class="container_var">
    <div class="new_footer_wrapp">
      <div class="copyright_wrapp">
        <p>© Copyright 2023 Treble Health, LLC</p>
      </div>
      <div class="policy_conditions_wrapp">
        <a target="_blank" class="policy_link" href="https://treblehealth.com/privacy-policy/">Privacy Policy</a>
        <a target="_blank" class="condition_link" href="https://treblehealth.com/terms-of-service/">Terms Conditions</a>
      </div>
    </div>
  </div>
</div>
      `;

    let arrQuestions = {
      1: [`"I was told that tinnitus is permanent and I just have to “learn to live with it.” Can your services actually lower tinnitus?"`, `<p>Many doctors do not know that there are treatments for tinnitus. It’s true, there is no surgery or medication to <a href="https://treblehealth.com/tinnitus-cure/">cure tinnitus</a>, but research has shown that about 80% of patients can reduce the perception of tinnitus using tinnitus retraining techniques. Oftentimes, the volume gets softer too.</p>`],
      2: [`"Tinnitus retraining therapy takes too long. I’m looking for the fastest way to lower my tinnitus. Are you aware of any cures for tinnitus?"`, `<p><span style="font-weight: 400;">For a majority of tinnitus cases, there is no “quick-fix” solution. As part of our new patient onboarding, we help our patients identify any possible medical cause to tinnitus and refer them to the appropriate medical tests when applicable. Usually, habituation-based protocols (like the system we follow) are the only way to improve tinnitus.</span></p>`],
      3: [`"Can’t I just go to my local audiologist for this kind of service?"`, `<p><span style="font-weight: 400;">Most audiologists are not experts in tinnitus management. While you can certainly search your local area for tinnitus experts, research has shown that receiving care via telehealth can be performed at the same level of clinical efficacy. Your Treble Health audiologist may identify that you could benefit from in-person medical tests. In that case, we will refer you to the appropriate local clinic.</span></p>`],
      4: [`"I already have hearing aids for tinnitus. Isn’t that enough?"`, `<p><span style="font-weight: 400;">Hearing aids can help, but are not always enough. A comprehensive approach to managing tinnitus will focus on the whole person. This includes professional counseling, calming the central nervous system, and a comprehensive sound therapy plan.</span></p>`],
      5: [`“Do you take insurance?”`, `<p>While most insurance companies do not cover tinnitus treatment, if your insurance does offer this, typically called a benefit for hearing aids, we can provide the necessary documentation and codes for you to submit for reimbursement.</p>`],
      6: [`"I have an appointment with an ENT next week, so let me wait to meet with my doctor”`, `<p>Yes, definitely keep your ENT appointment. Our telehealth consultation is completely free, so you don’t need to wait until your ENT appt. We recommend scheduling the free consultation with us as soon as possible so that you can learn about options for tinnitus relief.</p>`],
      7: [`“I’m already scheduled to see a local audiologist. Why should I work with you instead of them?”`, `<p>You’re welcome to work with anyone that you choose, just make sure that you’re working with an audiologist who specializes in Tinnitus Retraining Therapy. Most audiologists are great for hearing loss, but few are specialized in tinnitus. We have an 85% success rate, and most patients that work with us see a significant tinnitus reduction within three months. Plus, our telehealth model allows us to have better prices and significantly shorter wait times for appointments.</p>`],
      8: [`“What do you do? How can you help?”`, `<p>We use the gold-standard method for reducing tinnitus, which is called Tinnitus Retraining Therapy. It includes medical devices worn on the ears and one-on-one appointments with an audiologist to reduce the anxiety-stress-tinnitus response. We have an 85% success rate, and most patients that work with us see a significant tinnitus reduction within three months.</p>`],
      9: [`“I’ve never used Zoom”`, `<p>No problem, it’s quite simple. You can download Zoom for your computer or mobile phone for free.</p>`],
      10: [`“Where are you located?”`, `<p>We operate via telehealth, allowing us to serve customers across all 50 states. We only see patients who live in the United States.</p>`],
      11: [`“How can you do a hearing test over the internet?”`, `<p>We do not perform hearing tests. We require that our patients have a full diagnostic hearing test performed locally and send it to us via email. This is not required before the free Zoom consultation.</p>`],
      12: [`“Are you doctors?”`, `<p>Our team is made up of licensed doctors of audiology who specialize in tinnitus treatment.</p>`],
      13: [`“How long does it take for the program to work?”`, `<p>We expect that you would see some level of improvement within 3 to 4 weeks, with the benefits increasing by month 2, 3, 6, and beyond. 82% of people who try the Bundle choose to keep it beyond the 45 day trial period, because they are experiencing improvements.</p>`],
      14: [`“Can you really help my tinnitus?”`, `<p>Yes! Based on our internal data, over 80% of our patients report tinnitus reduction using our Tinnitus Relief Bundle. We also offer a 45-day trial period, so if you’re not satisfied within that time period you can return them and be refunded 100%.</p>`],
      15: [`“Won’t my tinnitus go away on its own?”`, `<p>Tinnitus may resolve on its own but this is not guaranteed and research suggests it can take 18 months or longer. We prefer to be proactive, we believe people with tinnitus should not suffer unnecessarily while waiting and hoping it decreases on its own. The “wait-and-see” approach is not recommended.</p>`],
      16: [`“My doctor said there’s nothing that can be done for tinnitus, is that the case?”`, `<p dir="ltr" role="presentation">No, that is not the case. Our program uses Tinnitus Retraining Therapy, which is based on decades of research and has been shown to significantly reduce tinnitus in more than 80% of cases. In most cases, there is no surgery or medication that cures tinnitus, bringing it to zero, but there are legitimate approaches that reduce it and improve quality of life. Our goal is to significantly reduce tinnitus, which is absolutely possible.</p>`],
    };

    let arrGoogleReviews1 = {
      "Krista Keleher": ["https://lh3.googleusercontent.com/a-/AFdZucrEI6CcP1Pvnp3JYChAfrMZj8Yybr-3P0MVGbxllCk=s120-c-c-rp-w64-h64-mo-br100", '<mark class="ti-highlight">I am so glad I found Treble Health!</mark> I have been suffering with a major tinnitus spike for the last two months and now I have resources to help mitigate the intrusiveness of the noise in my head. Dr. Ramsay has been great to work with! She got me set up with hearing aids and a sound therapy plan. I now have hope that I will habituate to the tinnitus. Thank you!!'],
      "Tom Shell": ["https://lh3.googleusercontent.com/a-/AFdZucop5i96XVE1RojzBG-Hu2RUFxKYH1NgtFrwWrBz5g=s120-c-c-rp-w64-h64-mo-br100", `Tracy had <mark class="ti-highlight">excellent input and really listened to my particular case</mark>. I was very impressed and will be working more with Treble Health in the future.`],
      "Robbie Wigley": ["https://lh3.googleusercontent.com/a-/AFdZucrSsAAMBWRQo-Wg0vhm7j76sFgftjQ1FgUpgdfvXpY=s120-c-c-rp-w64-h64-mo-br100", `My audiologist was <mark class="ti-highlight">extremely professional very knowledgeable and respectful</mark>. She addressed all my questions and made me feel comfortable in sharing my situation. I am very grateful that I had the opportunity to speak with her and I recommend her highly to anyone else that is having difficulties.`],
    };
    let arrGoogleReviews2 = {
      "David Anderson": ["https://lh3.googleusercontent.com/a/AItbvmnda_W86_SEFT3Xw7EVJnk1rBRxnsVQfH1MqctC=s120-c-c-rp-w64-h64-mo-br100", `I think <mark class="ti-highlight">Treble Health is the most AWESOME team available for tinnitus</mark>. Your team truly cares. I think you all deserve more than an EXCELLENT. You all are beyond EXCELLENT. THANK YOU SO MUCH.`],
      "B. B.": ["https://lh3.googleusercontent.com/a/AItbvmmbY39YsL7j5_s4-ltoF77ZZ6YTcOEyY28mEgtx=s120-c-c-rp-w64-h64-mo-br100", `A life saver... <mark class="ti-highlight">I can't recommend this service enough to everyone struggling with tinnitus</mark> at the beginning, when it can as scary as hell. Suzanne has been helping me practically from the first minutes... I've seen great improvements in less than a month. Thank you Treble Health...`],
      "Pierre Alauzet": ["https://lh3.googleusercontent.com/a-/AFdZucpBgVz4iH5NW4EB8Tu6NW8QdX_WOj2C_5DnPoCB3Dg=s120-c-c-rp-w64-h64-mo-br100", `<mark class="ti-highlight">Love the services offered by Treble Health!</mark> It's helping me so much to quickly jump into the issue and doing it remotely. Thank you guys!`],
    };
    let arrGoogleReviews3 = {
      "Naf Steinmetz": ["https://lh3.googleusercontent.com/a-/AFdZucrTUcw2LtbZJP4NDf2gx89PuqC3Hgv4wZ1OsQ4BHw=s120-c-c-rp-w64-h64-mo-ba2-br100", `These are some studious, <mark class="ti-highlight">extremely well-informed professionals</mark>. That matters a lot.`],
      "Robert Berry": ["https://lh3.googleusercontent.com/a-/AFdZucqA4HdVs7owPyGh7_YKmx9aOFmYIi9oqDHgNDmYYQ=s120-c-c-rp-w64-h64-mo-ba2-br100", `<mark class="ti-highlight">The best.</mark><br><br>If you're struggling with Tinnitus stop what you are doing and give them a call.<br><br>Treble Health can help.<br><br>I am deeply appreciative for their care and efforts as without a doubt it had a huge positive impact on my life.  Thank you Dr. May.`],
    };
    let arrGoogleReviews4 = {
      "Preston D": ["https://lh3.googleusercontent.com/a/AItbvmk-58HU2kUx7f2PsN7-yRcyI0i3y0ELTlmrp7bZyg=s120-c-c-rp-w64-h64-mo-br100", 'From my experience, <mark class="ti-highlight">they are very knowledgeable</mark>. I feel better about the fact that they use proven science and methods that have been successful using techniques that were pioneered by a respected scientist.'],
      "Mark Button": [
        "https://lh3.googleusercontent.com/a-/AFdZucrdT3FgeRWu-e-Q4-zghzQ2Gv4-8DLsW75Vh0ODjQ=s120-c-c-rp-w64-h64-mo-br100",
        `Treble Health has <mark class="ti-highlight">helped me enormously in a fairly short amount of time when other doctors couldn’t</mark>. My audiologist (Dr May) has 18 years of experience in dealing with tinnitus and has suffered with and habituated to tinnitus herself.<br><br>My story…<br>I lived and dealt with tinnitus on my own for 8. years until one week when it really spiked. I couldn’t sleep, couldn’t focus and I became extremely anxious about my condition. I had very loud ringing 24/7 and was wondering if I was going to be able to live with it.  I saw my GP who referred me to an audiologist who basically I said that this is the way it’s going to be for you, and then wanted to sell me a generic hearing aid.<br><br>I did my own research into the latest and most effective tinnitus treatments, and into who could provide them. Two months later… my anxiety is nearly gone and I am sleeping well. At the moment I can go hours without noticing my tinnitus and I am hopeful that will even improve to most of my day.<br><br>Treble Health provided real solutions and gave me hope.  They deserve 10 STARS!`,
      ],
    };
    let arrGoogleReviewsMob = {
      "Randy Spear": ['https://lh3.googleusercontent.com/a/AItbvmkkr8HFUQFUSbIpierOi_tssRDrUkx-hUDdpVdp=s120-c-c-rp-w64-h64-mo-br100"', '<mark class="ti-highlight">Treble Health gave me hope for my tinnitus</mark> when no one else could.  My medical provider told me there was no cure (true) and gave me some pills.  But Treble Health provided expert counseling and therapy.  Their methods provided great relief and gave me back my life.  Dr. Tracy at Treble Health was fantastic!'],
      "Alicia Toole": ["https://lh3.googleusercontent.com/a-/AFdZucpN_mxnE8ZkgQeGNeRszBAciUSbOXMwQHGguYMTVGU=s120-c-c-rp-w64-h64-mo-br100", `<mark class="ti-highlight">Excellent source of help for those of us suffering with tinnitus</mark>!  I have a plan and I have hope!  Dr. Holcomb was great!  So thankful to have found this resource.`],
      "Douglas Le Comte": ["https://lh3.googleusercontent.com/a/AItbvmlhBMa78iqBpJV1E04-LQumMFBojt4qyFYLAFA=s120-c-c-rp-w64-h64-mo-br100", `Can't praise the audiologists at Treble Health enough</mark>. Smart, caring, helpful...all you could ask for.`],
      "Victor Marquez": ["https://lh3.googleusercontent.com/a/AItbvmnH8U9v2RyRMEX9Dtz520XVU6bqHZcv4lDrel8I=s120-c-c-rp-w64-h64-mo-br100", `<mark class="ti-highlight">They helped me with my hyperacusis</mark>. I would recommended to anyone who has been struggling to find help with their hyperacusis.`],
      "Bubba Saul": ["https://lh3.googleusercontent.com/a-/AFdZucoeBRbx1X33g-kn3GbESgqkNpYVu-Qk2aeQiMdmLA=s120-c-c-rp-w64-h64-mo-br100", `<mark class="ti-highlight">Treble Health has done wonders for me</mark>. Thank God I found them very soon after my tinnitus started. Earlier in my treatment I started tinnitus maskers (Tranquil II) and the Jasterboff protocol with Dr. Jen, who is great to work with. Within 3 months I basically habituated. I love my maskers and plan to wear them as long as I have tinnitus. I wish everyone the same success that I have had with Treble Health.`],
      "Jordan Marie": [
        "https://lh3.googleusercontent.com/a-/AFdZucrlfUVXg6qygbaayWvgd5mlfmpj6RQuxi9WUuzl=s120-c-c-rp-w64-h64-mo-br100",
        `<mark class="ti-highlight">Treble Health has been the only thing that has truly helped with my tinnitus</mark>. After seeing an ENT and a couple of audiologists who offered me no help, having someone who actually understood and gave me tools, made things so much better - even after the first visit. I'm a few weeks into treatment, and I no longer have any suicidal thoughts, my tinnitus is less noticeable, and less annoying. It's really true what they say - don't look at message boards!!! I finally see a road to habituation when I NEVER thought it was possible, and I'm really looking forward to having my normal life back. I work with Dr. Poindexter, and she has been nothing but kind, supportive, and thoughtful. I feel really comfortable with her and shes always available! Highly recommend Treble Health, as I've found it the only place with knowledgeable experts.`,
      ],
    };

    document.head.insertAdjacentHTML("beforeend", `<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">`);
    document.head.insertAdjacentHTML("beforeend", newStyle);
    renderNewElem();
    if (document.querySelector(".new_body")) {
      slickSliderInit();
      onClickVideoSlider();
      tooltipInit();
      stickyHeaderInit();
      accordionInit();
      onCircularInit();
      onClickReviewsGoogle();
      onClickBtnGrabYourFREE();
      onClickBtnLearnFromTheCall();
      onClickTrustScoreWrapp();
      onClickBtnContactsTel();
      onClickBtnTrustpilotLink();
    }

    function renderNewElem() {
      // newHtml
      if (document.querySelector("#lp-pom-root") && !document.querySelector(".new_body") && window.location.pathname === "/tinnitus-relief-discovery-call-v1-1/") {
        document.querySelector("#lp-pom-root").insertAdjacentHTML("beforebegin", newHtml);
      }

      let maskersBundleLink = setInterval(() => {
        if (window.location.pathname === "/product/maskers-bundle/" && document.querySelector(".elementor-12891 .elementor-element.elementor-element-3816e4b .elementor-button")?.href !== "https://treblehealth.com/aud-consult-sign-up-calendly-v2/") {
          clearInterval(maskersBundleLink);
          document.querySelector(".elementor-12891 .elementor-element.elementor-element-3816e4b .elementor-button").href = "https://treblehealth.com/aud-consult-sign-up-calendly-v2/";
        }
      }, 100);

      if (document.querySelector("#content") && !document.querySelector(".new_body") && window.location.pathname === "/aud-consult-sign-up-calendly-v2/") {
        document.querySelector("#content").insertAdjacentHTML("beforebegin", newHtml);
      }
      // new_iframe_calendly
      if (document.querySelector("#content") && document.querySelector(".new_body") && window.location.pathname === "/aud-consult-sign-up-calendly-v2/" && document.querySelectorAll(".new_iframe_calendly") && !document.querySelector(".new_iframe_calendly_second")) {
        document.querySelectorAll(".new_iframe_calendly").forEach((el) => {
          el.insertAdjacentHTML("beforebegin", `<div class="new_iframe_calendly_second"><iframe src="https://calendly.com/treble-health-audiologists/treble-health-consultation?embed_domain=treblehealth.com&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;primary_color=4622da&amp;utm_term=1261762004.1699950023&utm_content=funnel_1" width="100%" height="100%" frameborder="0" title="Select a Date &amp; Time - Calendly" data-gtm-yt-inspected-60173040_75="true" data-gtm-yt-inspected-15="true"></iframe></div>`);
          el.remove();
        });
      }
      //change text ->>>>>>>>>>>> /aud-consult-sign-up-calendly-v2/
      if (document.querySelector(".new_body") && window.location.pathname === "/aud-consult-sign-up-calendly-v2/") {
        if (document.querySelectorAll(".hero_txt")) {
          document.querySelectorAll(".hero_txt").forEach((el) => {
            el.innerHTML = `Book your discovery call and take your first step towards quieter days - <b>absolutely FREE!</b>`;
          });
        }
        if (document.querySelectorAll(".calendar_header h2")) {
          document.querySelectorAll(".calendar_header h2").forEach((el) => {
            el.innerHTML = `Book Your Free Tinnitus Relief Discovery Call`;
          });
        }
        if (document.querySelectorAll(".grab_your_free_btn")) {
          document.querySelectorAll(".grab_your_free_btn").forEach((el) => {
            if (el.closest(".sticky_header")) {
              el.innerText = `Book a Free Call`;
            } else {
              el.innerText = `Book Your FREE Call Now!`;
            }
          });
        }
      }

      //Verified Reviews on Google items
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.firts_var").children.length !== arrGoogleReviews1.length) {
        for (let key in arrGoogleReviews1) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.firts_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews1[key][0], arrGoogleReviews1[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.second_var").children.length !== arrGoogleReviews2.length) {
        for (let key in arrGoogleReviews2) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.second_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews2[key][0], arrGoogleReviews2[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.third_var").children.length !== arrGoogleReviews4.length) {
        for (let key in arrGoogleReviews4) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.third_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews4[key][0], arrGoogleReviews4[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.fourth_var").children.length !== arrGoogleReviews3.length) {
        for (let key in arrGoogleReviews3) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.fourth_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviews3[key][0], arrGoogleReviews3[key][1]));
        }
      }
      if (document.querySelector(".verified_reviews_on_google_wrapp") && document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.mob_var").children.length !== arrGoogleReviewsMob.length) {
        for (let key in arrGoogleReviewsMob) {
          document.querySelector(".verified_reviews_on_google_wrapp .ti-reviews-container-wrapper .ti-column.mob_var").insertAdjacentHTML("beforeend", setGoogleReviews(key, arrGoogleReviewsMob[key][0], arrGoogleReviewsMob[key][1]));
        }
      }
      // questions_accordion
      if (document.querySelector(".questions_accordion") && document.querySelector(".questions_accordion").children.length !== arrQuestions.length) {
        for (let key in arrQuestions) {
          document.querySelector(".questions_accordion").insertAdjacentHTML("beforeend", setAccordionItem(key, arrQuestions[key][0], arrQuestions[key][1]));
        }
      }
    }

    function slickSliderInit() {
      console.log(`Hello slickSliderInit`);
      let slickInterval = setInterval(() => {
        if (typeof jQuery === "function" && typeof jQuery("#ourPatientsLoveTrebleHealthBlock .video_list").slick === "function" && document.querySelector("#ourPatientsLoveTrebleHealthBlock .video_list")) {
          clearInterval(slickInterval);

          //  slider
          let slider = jQuery("#ourPatientsLoveTrebleHealthBlock .video_list").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: false,
            prevArrow: `
             <div class="prev_btn"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#clip0_301_6003)">
    <path d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z" stroke="#2E168D"/>
    <path d="M21.0178 24L27.6339 17.951C28.122 17.5047 28.122 16.781 27.6339 16.3347C27.1457 15.8884 26.3543 15.8884 25.8661 16.3347L18.3661 23.1919C17.878 23.6382 17.878 24.3618 18.3661 24.8081L25.8661 31.6653C26.3543 32.1116 27.1457 32.1116 27.6339 31.6653C28.122 31.2189 28.122 30.4953 27.6339 30.049L21.0178 24Z" fill="#2E168D"/>
  </g>
  <defs>
    <clipPath id="clip0_301_6003">
      <rect width="48" height="48" fill="white"/>
    </clipPath>
  </defs>
</svg></div>`,
            nextArrow: `
              <div class="next_btn"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <g clip-path="url(#clip0_301_6013)">
    <path d="M24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1Z" stroke="#2E168D"/>
    <path d="M26.9822 24L20.3661 30.049C19.878 30.4953 19.878 31.219 20.3661 31.6653C20.8543 32.1116 21.6457 32.1116 22.1339 31.6653L29.6339 24.8081C30.122 24.3618 30.122 23.6382 29.6339 23.1919L22.1339 16.3347C21.6457 15.8884 20.8543 15.8884 20.3661 16.3347C19.878 16.7811 19.878 17.5047 20.3661 17.951L26.9822 24Z" fill="#2E168D"/>
  </g>
  <defs>
    <clipPath id="clip0_301_6013">
      <rect width="48" height="48" fill="white" transform="matrix(-1 0 0 -1 48 48)"/>
    </clipPath>
  </defs>
</svg></div>`,
            responsive: [
              {
                breakpoint: 768,
                settings: {},
              },
            ],
          });
          slider.on("afterChange", function () {
            document.querySelectorAll("iframe").forEach((el) => {
              el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            });
          });
          document.querySelectorAll("#ourPatientsLoveTrebleHealthBlock .slick-dots li").forEach((el) => {
            el.addEventListener("click", (i, idx) => {
              pushDataLayer(["exp_call_book_page_pagin_video_click", "Click ", "Pagination  ", "Why Our Patients Love Treble Health"]);
            });
          });

          document.querySelectorAll("#ourPatientsLoveTrebleHealthBlock .slick-arrow").forEach((el) => {
            el.addEventListener("click", (i) => {
              if (i.currentTarget.classList.contains("prev_btn")) {
                pushDataLayer(["exp_call_book_page_butt_video_lefrig", "Left", "Button", "Why Our Patients Love Treble Health"]);
              }
              if (i.currentTarget.classList.contains("next_btn")) {
                pushDataLayer(["exp_call_book_page_butt_video_lefrig", "Right", "Button", "Why Our Patients Love Treble Health"]);
              }
            });
          });

          // document.querySelectorAll('iframe').forEach(el => {
          //   el.addEventListener('click', i => {
          //     console.log(i.target, `i`);
          //     if (!i.target) {
          //       el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          //     }
          //   });
          // });
        }
      }, 100);
    }

    function onClickVideoSlider() {
      console.log(`Hello onClickVideoSlider`);
      if (document.querySelectorAll(".video_link_wrapp")) {
        document.querySelectorAll(".video_link_wrapp").forEach((video) => {
          video.addEventListener("click", (e) => {
            pushDataLayer(["exp_call_book_page_butt_patient_name", `${e.currentTarget.previousElementSibling.getAttribute("data-name")} - Click`, "Button", "Why Our Patients Love Treble Health"]);
            video.querySelector("iframe").src += "&autoplay=1";
            if (!e.currentTarget.classList.contains("is_clicked")) {
              e.currentTarget.classList.add("is_clicked");
            }
          });
        });
      }
    }

    function tooltipInit() {
      console.log(`Hello tooltipInit`);
      let tippyRunYourHosts = setInterval(() => {
        if (typeof tippy === "function" && document.querySelector("#yourHostsBlock [data-tooltip]")) {
          clearInterval(tippyRunYourHosts);
          document.querySelectorAll("#yourHostsBlock [data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              // trigger: 'click',
              placement: "top-end",
              appendTo: function () {
                return el.closest(".host_name");
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

    function stickyHeaderInit() {
      console.log(`Hello stickyHeaderInit`);
      if (document.querySelector(".new_body")) {
        let element = document.querySelector(".sticky_header");
        const elemClose = document.querySelector("#heroBlock");
        if (window.innerWidth <= 768) {
          window.addEventListener("scroll", () => {
            const options = {
              root: null,
              threshold: 1,
            };
            let containerHint = document.querySelector(".calendar_body.no_sticky");
            let observer = new IntersectionObserver((entries) => {
              entries.forEach((i) => {
                if (i.isIntersecting) {
                  element.classList.remove("is_intersecting");
                } else {
                  element.classList.add("is_intersecting");
                }

                observer.unobserve(i.target);
              });

              observer.disconnect();
            });

            observer.observe(containerHint, options);
          });
        }

        function visible(target) {
          if (window.innerWidth > 768) {
            if (target.getBoundingClientRect().bottom < 0) {
              element.classList.add("is_fixed");
              element.style.top = "-1px";
            } else {
              if (element.classList.contains("is_fixed")) {
                element.classList.remove("is_fixed");
                element.style.top = "-1px";
              }
            }
          } else {
            if (target.getBoundingClientRect().bottom < 0) {
              element.classList.add("is_fixed_mob");
              element.style.bottom = "-1px";
            } else {
              if (element.classList.contains("is_fixed_mob")) {
                element.classList.remove("is_fixed_mob");
                element.style.bottom = "-1px";
              }
            }
          }
        }
        window.addEventListener("scroll", function () {
          visible(elemClose);
        });
        visible(elemClose);
      }
    }

    function accordionInit() {
      console.log(`Hello accordionInit`);
      let lookForJquery = setInterval(() => {
        if (typeof $ === "function" && document.querySelector(".new_body")) {
          clearInterval(lookForJquery);
          document.querySelectorAll(".questions_accordion_block")[0].classList.add("active");
          document.querySelectorAll(".questions_accordion_block .questions_accordion_link")[0].classList.add("active");
          document.querySelectorAll(".questions_accordion_block .questions_accordion_lists")[0].style.display = "block";
          // questions_accordion_lists
          $(".questions_accordion_link").click(function (e) {
            $(this).toggleClass("active");
            $(this).closest("li").toggleClass("active");
            $(this).next(".questions_accordion_lists").slideToggle();
            if ($(".questions_accordion_link").not(this)) {
              $(".questions_accordion_link").not(this).next(".questions_accordion_lists").css("display", "none");
              $(".questions_accordion_link").not(this).removeClass("active");
              $(".questions_accordion_link").not(this).closest("li").removeClass("active");
            }

            if (e.currentTarget.classList.contains("active")) {
              // pushDataLayer('Open block', `${e.currentTarget.querySelector('p').textContent}`);
            } else {
              // pushDataLayer('Close block', `${e.currentTarget.querySelector('p').textContent}`);
            }

            // const headerOffset = 100;
            // const elementPosition = this.getBoundingClientRect().top;
            // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            // window.scrollTo({
            //   top: offsetPosition,
            //   behavior: 'smooth',
            // });
          });
        }
      }, 100);
    }

    function setAccordionItem(count, title, text) {
      return `
<li class="questions_accordion_block" data-visability="${count}">
  <div class="questions_accordion_link">
    <span class="accordion_icon_wrapp">
      <span class="accordion_icon_closed"
        ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <g id="icon_plus" data-name="icon plus" transform="translate(-1210 -3068)">
            <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(1210 3068)" fill="#f8fbf9" stroke="#4521d9" stroke-width="2">
              <circle cx="15" cy="15" r="15" stroke="none"></circle>
              <circle cx="15" cy="15" r="14" fill="none"></circle>
            </g>
            <rect id="Rectangle_2395" data-name="Rectangle 2395" width="2" height="12" transform="translate(1224 3077)" fill="#4521d9"></rect>
            <rect id="Rectangle_2396" data-name="Rectangle 2396" width="2" height="12" transform="translate(1231 3082) rotate(90)" fill="#4521d9"></rect>
          </g></svg
      ></span>
      <span class="accordion_icon_opened"
        ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <g id="icon_minus" data-name="icon minus" transform="translate(-1210 -3068)">
            <g id="Ellipse_13" data-name="Ellipse 13" transform="translate(1210 3068)" fill="#f8fbf9" stroke="#4521d9" stroke-width="2">
              <circle cx="15" cy="15" r="15" stroke="none"></circle>
              <circle cx="15" cy="15" r="14" fill="none"></circle>
            </g>
            <rect id="Rectangle_2395" data-name="Rectangle 2395" width="2" height="12" transform="translate(1231 3082) rotate(90)" fill="#6ed097"></rect>
            <rect id="Rectangle_2396" data-name="Rectangle 2396" width="2" height="12" transform="translate(1231 3082) rotate(90)" fill="#4521d9"></rect>
          </g></svg
      ></span>
    </span>
    <p>${title}</p>
  </div>
  <div class="questions_accordion_lists" data-visability-open="${count}">
    <div>${text}</div>
  </div>
</li>
        `;
    }

    function setGoogleReviews(name, img, text) {
      return `
        <div class="ti-review-item source-Google">
          <div class="ti-inner">
            <div class="ti-review-header">
              <div class="ti-profile-img"><img src="${img}" alt="${name}" /></div>
              <div class="ti-profile-details">
                <div class="ti-name">${name}</div>
              </div>
            </div>
            <span class="ti-stars"><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span><span class="ti-star f"></span></span>
            <div class="ti-review-content">
            <div class="ti-inner">${text}</div>
              <span class="ti-read-more"><span class="ti-read-more-active">Read more</span></span>
            </div>
          </div>
        </div>
        `;
    }

    function onCircularInit() {
      console.log(`Hello onCircularInit`);
      let s = setInterval(() => {
        if (typeof jQuery === "function") {
          clearInterval(s);
          const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
            const target = document.querySelector(qSelector);
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              target.innerText = Math.floor(progress * (end - start) + start);
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            window.requestAnimationFrame(step);
          };
          let counter1 = 0;
          let counter2 = 0;
          let counter3 = 0;

          jQuery(document).scroll(function () {
            if (jQuery(".animation-none1").hasClass("animated")) {
              counter1 += 1;
            } else {
            }
            if (counter1 == 1) {
              circle1();
              counterAnim(".count-number1", 0, 85, 1800);
            }

            if (jQuery(".animation-none2").hasClass("animated")) {
              counter2 += 1;
            } else {
            }
            if (counter2 == 1) {
              circle2();
              counterAnim(".count-number2", 0, 75, 1350);
            }

            if (jQuery(".animation-none3").hasClass("animated")) {
              counter3 += 1;
            } else {
            }
            if (counter3 == 1) {
              circle3();
              counterAnim(".count-number3", 0, 98, 2000);
            }
          });

          function circle1() {
            var circle1 = document.getElementById("circle1");
            var interval1 = 18;
            var angle1 = 0;
            var angle_increment1 = 6;

            window.timer1 = window.setInterval(
              function () {
                circle1.setAttribute("stroke-dasharray", angle1 + ", 20000");

                if (angle1 >= 550) {
                  window.clearInterval(window.timer1);
                }
                angle1 += angle_increment1;
              }.bind(this),
              interval1
            );
          }
          function circle2() {
            var circle2 = document.getElementById("circle2");
            var interval2 = 15;
            var angle2 = 0;
            var angle_increment2 = 6;

            window.timer2 = window.setInterval(
              function () {
                circle2.setAttribute("stroke-dasharray", angle2 + ", 20000");

                if (angle2 >= 490) {
                  window.clearInterval(window.timer2);
                }
                angle2 += angle_increment2;
              }.bind(this),
              interval2
            );
          }
          function circle3() {
            var circle3 = document.getElementById("circle3");
            var interval3 = 18;
            var angle3 = 0;
            var angle_increment3 = 6;

            window.timer3 = window.setInterval(
              function () {
                circle3.setAttribute("stroke-dasharray", angle3 + ", 20000");

                if (angle3 >= 630) {
                  window.clearInterval(window.timer3);
                }
                angle3 += angle_increment3;
              }.bind(this),
              interval3
            );
          }
        }
      }, 10);
    }

    function onClickReviewsGoogle() {
      console.log(`Hello onClickReviewsGoogle`);
      let lookForJqueryReviews = setInterval(() => {
        if (document.querySelector(".ti-read-more")) {
          clearInterval(lookForJqueryReviews);
          document.querySelectorAll(".ti-read-more-active").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.currentTarget.classList.toggle("active");
              e.currentTarget.closest(".ti-read-more").previousElementSibling.classList.toggle("active");
              if (e.currentTarget.classList.contains("active")) {
                e.currentTarget.textContent = "Hide";
              } else {
                e.currentTarget.scrollIntoView({ block: "center", behavior: "smooth" });
                e.currentTarget.textContent = "Read more";
              }
            });
          });
        }
      }, 100);
    }

    function onClickBtnGrabYourFREE() {
      console.log(`Hello onClickBtnGrabYourFREE`);
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".grab_your_free_btn").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (e.currentTarget.closest("#heroBlock")) {
              pushDataLayer(["exp_call_book_page_butt_first_grab", "Grab Your FREE Seat Now!", "Button", "First screen"]);
            }
            if (e.currentTarget.closest("#learnMobBlock") || e.currentTarget.closest("#exclusiveBonusBlock")) {
              pushDataLayer(["exp_call_book_page_butt_discov_grab", "Grab Your FREE Seat Now!", "Button", "In this FREE discovery call, you’ll learn"]);
            }
            if (e.currentTarget.closest("#whoShouldAttendBlock")) {
              pushDataLayer(["exp_call_book_page_butt_attend_grab", "Grab Your FREE Seat Now!", "Button", "Who Should Attend?"]);
            }
            if (e.currentTarget.closest("#clinicallyProvenResultsBlock")) {
              pushDataLayer(["exp_call_book_page_butt_clinic_grab", "Grab Your FREE Seat Now!", "Button", "Under Clinically Proven Results"]);
            }
            if (e.currentTarget.closest("#frequentlyAskedQuestionsBlock")) {
              pushDataLayer(["exp_call_book_page_butt_quest_grab", "Grab Your FREE Seat Now!", "Button", "Frequently Asked Questions"]);
            }
            if (e.currentTarget.closest("#completeRecoveryBlock")) {
              pushDataLayer(["exp_call_book_page_butt_possible_grab", "Grab Your FREE Seat Now!", "Button", "A complete recovery from tinnitus is possible"]);
            }
            if (e.currentTarget.closest(".sticky_header")) {
              let maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              let currentScrollHeight = window.pageYOffset.toFixed(0);

              pushDataLayer(["exp_call_book_page_sticbut_sitewi_book", `${((currentScrollHeight / maxScrollHeight) * 100).toFixed(0)}% - Book a Free Call`, "Sticky button", "Sitewide"]);
            }
            //
            document.querySelectorAll(".calendar_header").forEach((el) => {
              el.scrollIntoView({ block: "start", behavior: "smooth" });
            });
          });
        });
      }
    }

    function onClickBtnContactsTel() {
      console.log(`Hello onClickBtnContactsTel`);
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".tel_link").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (e.currentTarget.closest(".calendar_contacts")) {
              pushDataLayer(["exp_call_book_page_link_find_namber", "Click number", "Link", "Under calendar Can’t find a time?"]);
            }
          });
        });
      }
    }

    function onClickBtnTrustpilotLink() {
      console.log(`Hello onClickBtnTrustpilotLink`);
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".trustpilot_link").forEach((el) => {
          el.addEventListener("click", (e) => {
            pushDataLayer(["exp_call_book_page_link_trustpil_click", "Click ", "Link", "Trustpilot People just like you achieve great results"]);
          });
        });
      }
    }

    function onClickBtnLearnFromTheCall() {
      console.log(`Hello onClickBtnLearnFromTheCall`);
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".learn_from_call_btn").forEach((el) => {
          el.addEventListener("click", () => {
            pushDataLayer(["exp_call_book_page_link_first_learn", "What will I learn from the call?", "Link", "First screen"]);
            document.querySelectorAll(".calendar_header").forEach((el) => {
              const headerOffset = 50;
              const elementPosition = document.querySelector("#learnMobBlock").getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            });
          });
        });
      }
    }

    function onClickTrustScoreWrapp() {
      console.log(`Hello onClickTrustScoreWrapp`);
      if (document.querySelector(".new_body")) {
        document.querySelectorAll(".trust_score_wrapp").forEach((el) => {
          el.addEventListener("click", (e) => {
            if (e.currentTarget.closest("#heroBlock")) {
              pushDataLayer(["exp_call_book_page_link_reviews_click", "Click reviews", "Link", "First screen"]);
            }
            const headerOffset = 60;
            const elementPosition = document.querySelector("#trustpilotBlock").getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          });
        });
      }
    }

    visibElem();
    function visibElem() {
      waitForElement("#heroBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_first_focu", " {{focusTime}} ", "Visibility ", "First screen"]);
      });
      waitForElement("#yourHostsBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_hosts_focu", " {{focusTime}} ", "Visibility ", "Your hosts"]);
      });
      waitForElement("#exclusiveBonusBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_discov_focu", " {{focusTime}} ", "Visibility ", "In this FREE discovery call, you'll learn"]);
      });
      waitForElement("#learnMobBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_discov_focu", " {{focusTime}} ", "Visibility ", "In this FREE discovery call, you'll learn"]);
      });
      waitForElement("#bookCalendarMob").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_calend_focu", " {{focusTime}} ", "Visibility ", "Book Your Spot in Tinnitus Relief Discovery Call"]);
      });
      waitForElement("#whoShouldAttendBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_should_focu", " {{focusTime}} ", "Visibility ", "Who Should Attend?"]);
      });
      waitForElement("#clinicallyProvenResultsBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_results_focu", " {{focusTime}} ", "Visibility ", "Clinically Proven Results"]);
      });
      waitForElement("#trustpilotBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_achieve_focu", " {{focusTime}} ", "Visibility ", "People just like you achieve great results"]);
      });
      waitForElement("#frequentlyAskedQuestionsBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_question_focu", " {{focusTime}} ", "Visibility ", "Frequently Asked Questions"]);
      });
      waitForElement("#verifiedReviewsOnGoogleBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_reviews_focu", " {{focusTime}} ", "Visibility ", "Why Our Patients Love Treble Health"]);
      });
      waitForElement("#completeRecoveryBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_recovery_focu", " {{focusTime}} ", "Visibility ", "A complete recovery from tinnitus is possible"]);
      });
      waitForElement("#ourPatientsLoveTrebleHealthBlock").then((el) => {
        handleVisibility(el, ["exp_call_book_page_visib_video_focu", " {{focusTime}} ", "Visibility ", "Why Our Patients Love Treble Health"]);
      });
      //"pushDataLayer();"
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
        clarity("set", "exp_call_book_page", "variant_1");
      }
    }, 200);
  }
}, 100);
