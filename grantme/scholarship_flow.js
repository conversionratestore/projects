let startFunk = setInterval(() => {
  if (document.querySelector(".block-schedule-consulation #available-slots-wrapper ul.nav.nav-tabs")) {
    clearInterval(startFunk);

    let scriptCalendar = document.createElement("script");
    scriptCalendar.src = "https://conversionratestore.github.io/projects/jquery.simple-calendar.js";
    scriptCalendar.async = false;
    document.head.appendChild(scriptCalendar);

    let scriptCalendarStyle = document.createElement("link");
    scriptCalendarStyle.href = "https://conversionratestore.github.io/projects/simple-calendar.scss";
    scriptCalendarStyle.rel = "stylesheet";
    document.head.appendChild(scriptCalendarStyle);

    let scriptPopper = document.createElement("script");
    scriptPopper.src = "https://unpkg.com/popper.js@1";
    scriptPopper.async = false;
    document.body.appendChild(scriptPopper);

    let scriptTippy = document.createElement("script");
    scriptTippy.src = "https://unpkg.com/tippy.js@5";
    scriptTippy.async = false;
    document.body.appendChild(scriptTippy);

    let scriptCustom = document.createElement("script");
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js";
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    let scriptCustomStyle = document.createElement("link");
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css";
    scriptCustomStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomStyle);

    let scriptCustomMask = document.createElement("script");
    scriptCustomMask.src = "https://cdnjs.cloudflare.com/ajax/libs/imask/6.6.0/imask.min.js";
    scriptCustomMask.async = false;
    document.head.appendChild(scriptCustomMask);

    let eventVar = "desktop";

    if (window.innerWidth <= 768) {
      eventVar = "mobile";
    }

    function pushDataLayer(nameDataLayer, deskDataLayer, typeDataLayer, actionDataLayer, labelDataLayer) {
      window.dataLayer = window.dataLayer || [];
      if (labelDataLayer) {
        console.log(nameDataLayer + " " + deskDataLayer + typeDataLayer + actionDataLayer + " : " + labelDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer} ${eventVar}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
          eventLabel: `${labelDataLayer}`,
        });
      } else {
        console.log(nameDataLayer + " " + deskDataLayer + " " + typeDataLayer + " " + actionDataLayer);
        dataLayer.push({
          event: "event-to-ga4",
          event_name: `${nameDataLayer} ${eventVar}`,
          event_desc: `${deskDataLayer}`,
          event_type: `${typeDataLayer}`,
          event_loc: `${actionDataLayer}`,
        });
      }
    }

    let newStyle = /*html */ `
    <style>
.accent_var {
  color: #ebbd45;
}
.our-scholars {
  margin: 0 !important;
}
.path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center {
  padding: 0 !important;
}
.navbar-default {
  border-bottom: 1px solid #294c6d;
  background: #2f3d4f;
  transition: top 0.7s;
}
.path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent {
  background: #2b3e51;
}
.row.academy-waiting > .col-lg-5.academy-waiting-left {
  padding: 40px 16px;
}
.row.academy-waiting > .col-lg-5.academy-waiting-left .academy-waiting-left-inside,
#block-whattoexpectonthecallscheduleconsultation,
.block-grantme-acuity.block-schedule-consulation {
  display: none;
}
.path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent .academy-waiting-left {
  display: block;
}
.greetings_box .name_txt {
  font-family: "Lato", sans-serif;
  font-weight: 400 !important;
  font-size: 17px !important;
  line-height: 25px !important;
  color: #ffffff;
  margin: 0;
  text-align: left !important;
}
.greetings_box .name_txt span:last-child {
  display: block;
  text-align: left !important;
}
.greetings_box .win_scholarships_txt {
  font-family: "Lato", sans-serif;
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 25px !important;
  color: #ffffff;
  text-align: left !important;
  margin: 0;
}
.greetings_box .tooltip_wrapper {
  font-weight: 700 !important;
  font-size: 32px !important;
  line-height: 48px !important;
  letter-spacing: -0.96px !important;
  text-align: left !important;
  color: #ffffff;
  margin: 12px 0 16px;
}
.greetings_box .tooltip_wrapper .funding_price {
  text-decoration: underline;
  margin-right: 6px;
}
.txt_relative {
  position: relative;
}
.greetings_box .tooltip_wrapper svg {
  position: absolute;
  top: 14px;
  right: -28px;
  display: none !important;
}
.new_schedule_box {
  background: #e9f3fa;
  padding: 40px 16px;
  margin: 0 auto;
  width: 100%;
}
.new_schedule_box > h2 {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #2b3e51;
  margin: 0 auto;
  max-width: 358px;
}
.new_schedule_box .new_schedule_descr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto 20px;
  max-width: 318px;
}
.new_schedule_box .new_schedule_descr span {
  font-family: "Lato", sans-serif;
  position: relative;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2b3e51;
  padding-left: 28px;
}
.new_schedule_box .new_schedule_descr span::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/grantme/img/dollar.svg) no-repeat center center;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.new_schedule_box .new_schedule_descr span:nth-child(2):before {
  background: url(https://conversionratestore.github.io/projects/grantme/img/clock.svg) no-repeat center center;
}
.new_schedule_box .new_schedule_descr span:nth-child(3):before {
  background: url(https://conversionratestore.github.io/projects/grantme/img/zoom.svg) no-repeat center center;
}
.new_schedule {
  position: relative;
  max-width: 358px;
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  padding: 20px;
  margin: 0 auto;
}
.new_schedule .nav_steps {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.new_schedule .nav_steps svg {
  cursor: pointer;
  max-width: 16px;
  width: 100%;
  margin-top: 4px;
}
.new_schedule .nav_steps svg[data-navsteps="3"],
.new_schedule .nav_steps svg[data-navsteps="2"] {
  margin-top: 5px;
}
svg.svg_is_hidden {
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
}
.new_schedule .nav_steps > p:nth-of-type(1) {
  font-family: "Bitter", serif;
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 25px !important;
  color: #2b3e51 !important;
  margin: 0 auto !important;
  text-align: center !important;
  max-width: 224px;
}
.new_schedule .nav_steps > p:nth-of-type(2) {
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 24px !important;
  color: #676767 !important;
  margin: 0 !important;
}
.time_zone_wrapper {
  text-align: left;
  margin-top: 24px;
}
.time_zone_wrapper > span {
  display: block;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  color: #3e78ba;
  margin: 0 0 8px;
}
.select_dropdown_wrapper {
  padding-left: 24px;
  position: relative;
}
#selectDropdown {
  border: unset;
  outline: unset;
  display: none;
}
.time_zone_wrapper .timezone {
  width: 220px;
}
.time_zone_wrapper .timezone > label {
  display: none;
}
body .select2-container.select2-container--open {
  max-width: 220px !important;
}

.select2-container--default .select2-selection--single .select2-selection__arrow {
  top: 0 !important;
}
.select2-container--default .select2-selection--single {
  border: 1px solid #aaa !important;
  padding: 4px 16px;
  height: 25px;
}
.select2-dropdown {
  border: 1px solid #aaa !important;
}
.time_zone_wrapper .timezone > label {
  display: none;
}
.select_dropdown_wrapper::before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  background: url(https://conversionratestore.github.io/projects/grantme/img/planet.svg) no-repeat center center;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.our_consultants_wrapper {
  margin-top: 24px;
}
body .our_consultants_wrapper h3 {
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  text-align: left !important;
  color: #2b3e51 !important;
  margin: 0 0 12px !important;
  padding: 0 !important;
}
.our_consultants_wrapper > p {
  font-family: "Lato", sans-serif;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 21px;
  color: #2b3e51;
  position: relative;
  padding-left: 32px;
  margin-bottom: 12px;
  text-align: left !important;
}
.our_consultants_wrapper > p::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/grantme/img/telephone.svg) no-repeat center center;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
}
.our_consultants_wrapper > p a {
  font-weight: 700;
  color: #2b3e51 !important;
  text-decoration: underline;
}
.our_consultants_wrapper > div {
  display: flex;
}
.our_consultants_wrapper > div img {
  max-width: 104px !important;
  width: 100% !important;
  margin: 0 12px 0 0 !important;
}
.our_consultants_wrapper > div p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2b4f6a;
  margin: 0;
  max-width: 196px;
}
.reviews_btn_box {
  background: rgba(233, 243, 250, 0.1);
  border-radius: 6px;
  padding: 28px;
  margin: 16px 0 24px;
  z-index: 1;
  position: relative;
}
.reviews_btn_box h2 {
  font-weight: 700;
  font-size: 18px !important;
  line-height: 24px;
  color: #ffffff;
  margin: 0 auto;
  text-transform: unset;
  max-width: 270px;
  position: relative;
}
.reviews_btn_box h2::after {
  position: absolute;
  content: "";
  background: url(https://conversionratestore.github.io/projects/grantme/img/arrow.png) no-repeat center center;
  width: 37px;
  height: 90px;
  top: 26px;
  right: -22px;
  z-index: 10;
}
.book_free_call_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ebbd45;
  font-family: "Lato", sans-serif;
  border-radius: 6px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #2b3e51;
  cursor: pointer;
  max-width: 224px;
  width: 100%;
  height: 62px;
  margin: 20px auto 28px;
}
.reviews_btn_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navbar .reviews_btn_wrapper {
  cursor: pointer;
}
.reviews_btn_wrapper p {
  font-family: "Lato", sans-serif;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 21px !important;
  color: #ffffff;
  text-align: left !important;
  margin: 0 !important;
}
.reviews_btn_wrapper p:last-child {
  font-weight: 700 !important;
  text-decoration-line: underline;
}
.as_seen_on_box {
  padding: 40px 16px;
}
.as_seen_on_box h2 {
  font-weight: 700 !important;
  font-size: 25px !important;
  line-height: 37px !important;
  letter-spacing: -0.48px !important;
  color: #2b3e51 !important;
  margin: 0 0 16px;
  text-align: center;
}
.as_seen_on_box > div {
  border: 1px solid #f2f2f2;
  border-radius: 6px;
  max-width: 998px;
  margin: 0 auto;
}
.as_seen_on_box .img_wrapper {
  background: #f2f2f2;
  padding: 28px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.as_seen_on_box .img_wrapper img:nth-child(1) {
  max-width: 68px;
}
.as_seen_on_box .img_wrapper img:nth-child(2) {
  max-width: 53px;
}
.as_seen_on_box .img_wrapper img:nth-child(3) {
  max-width: 76px;
}
.as_seen_on_box .count_txt_wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px 35px;
}
.as_seen_on_box .count_txt_wrapper > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.as_seen_on_box .count_txt_wrapper > div + div {
  margin-left: 20px;
}
.as_seen_on_box .count_txt_wrapper > div span {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #2b3e51;
  margin: 0;
}
.as_seen_on_box .count_txt_wrapper > div p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2b4f6a;
  margin: 0;
  text-align: center;
}
.what_users_say_box {
  padding: 0 16px 40px;
}
.what_users_say_box h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: -0.48px;
  color: #2b3e51;
  text-align: center;
  margin: 0 0 20px;
}
.persuasive_comparison_table_box {
  padding: 40px 16px 30px;
  display: none;
}
#block-trustpilotwidgetstartfreetrial{
  padding-top: 40px;
}
.persuasive_comparison_table_box h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;
  text-align: center;
  letter-spacing: -0.48px;
  color: #2b3e51;
  margin: 0 auto 20px;
  max-width: 334px;
}
.persuasive_comparison_table_box .table {
  margin: 0 auto;
  max-width: 794px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 6px;
}
.persuasive_comparison_table_box .table .thead {
  background: #e9f3fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}
.persuasive_comparison_table_box .table .thead .th span {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #2b3e51;
}
.persuasive_comparison_table_box .table .tbody {
  padding: 8px 20px;
}
.persuasive_comparison_table_box .table .tbody .tr:not(:last-child) {
  border-bottom: 1px solid #f2f2f2;
}
.persuasive_comparison_table_box .table .tbody .tr {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.persuasive_comparison_table_box .table .tbody .tr .td {
  padding: 12px 0;
}
.persuasive_comparison_table_box .table .tbody .tr .td:nth-child(1),
.persuasive_comparison_table_box .table .thead .th:nth-child(1) {
  flex: 0 0 123px;
}
.persuasive_comparison_table_box .table .tbody .tr .td:nth-child(2),
.persuasive_comparison_table_box .table .tbody .tr .td:nth-child(3),
.persuasive_comparison_table_box .table .thead .th:nth-child(2),
.persuasive_comparison_table_box .table .thead .th:nth-child(3) {
  flex: 0 0 80px;
  text-align: center;
}
.persuasive_comparison_table_box .table .tbody .td span {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #2b4f6a;
}
.persuasive_comparison_table_box .table .tbody .td span.name_tr {
  font-weight: 400;
}
.persuasive_comparison_table_box .odds_txt_wrapper {
  margin: 16px auto 0;
  max-width: 794px;
  padding: 16px;
  background: #e9f3fa;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}
.persuasive_comparison_table_box .odds_txt_wrapper p {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #2b3e51;
  margin: 0 0 -6px 12px;
}
.persuasive_comparison_table_box .odds_txt_wrapper svg {
  width: 100%;
  height: 24px;
  max-width: 24px;
}
.consultation_descr_box {
  background: rgba(233, 243, 250, 0.1);
  border-radius: 6px;
  padding: 24px 16px 24px 24px;
  text-align: left !important;
}
.consultation_descr_box h2 {
  font-weight: 700;
  font-size: 25px;
  line-height: 37px;
  letter-spacing: -0.48px;
  color: #ebbd45;
  margin: 0 0 20px;
  text-align: left !important;
}
body .consultation_descr_box > div + div {
  margin-top: 16px;
}
body .consultation_descr_box > div h3 {
  font-weight: 700 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  color: #ffffff !important;
  margin: 0 0 12px !important;
  padding: 0 !important;
  text-align: left !important;
}
body .consultation_descr_box > div ul {
  margin: 0 !important;
  text-align: left !important;
}
body .consultation_descr_box > div ul li {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left !important;
}
body .consultation_descr_box > div ul li span {
  font-weight: 700;
}
body .consultation_descr_box > div ul li + li {
  margin-top: 3px;
}
body .consultation_descr_box > div.no_commitments_wrapper {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
body .consultation_descr_box > div.no_commitments_wrapper p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px !important;
  line-height: 24px !important;
  margin-left: 8px;
  text-align: left !important;
}
.tooltip_wrapper .tippy-tooltip {
  font-family: "Lato", sans-serif;
  color: #2b4f6a;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #ffffff;
  text-align: left !important;
  max-width: 300px !important;
}
.tooltip_wrapper .tippy-content {
  padding: 16px;
  text-align: left !important;
}
.tooltip_wrapper .tippy-tooltip[data-placement^="bottom"] > .tippy-arrow {
  border-bottom-color: #ffffff;
}
.tooltip_wrapper .tippy-tooltip[data-placement^="top"] > .tippy-arrow {
  border-top-color: #ffffff;
}
.competition-section {
  padding: 40px 0 0;
  background-color: #2b3e51;
  color: #fff;
  position: relative;
}
.competition_wrapper {
  display: flex;
  flex-wrap: wrap;
}
.competition_items {
  width: 100%;
  padding: 0;
  float: left;
  display: flex;
  flex-wrap: wrap;
}
.competition_item {
  padding: 0 16px;
}
.competition_item#competition_step3 {
  width: 100%;
  padding: 32px 16px;
  border-top: 1px solid #fff;
}
.competition_item img {
  display: block;
  margin: 0 auto;
  border-style: none;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.competition_item h2 {
  margin: 0;
  font-size: 26px;
  line-height: 39px;
  color: #fff;
}
.competition_item p {
  margin-bottom: 27px;
  line-height: 24px;
}
.competition_imgs {
  display: none;
}
.report_card_section {
  padding: 0 16px;
  display: none;
}
.report_card_section > h2 {
  font-size: 30px;
  line-height: 40px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 10px;
}
.report_card_frame {
  background-color: #fff;
  border-radius: 12px;
}
.path-start-free-trial .faqstartfreetrial {
  padding-bottom: 20px;
}
.footer-start-free-trial h2,
.footer-start-free-trial {
  margin: 0 !important;
}
.sticky_box {
  position: fixed;
  bottom: 0;
  z-index: 999;
  background: #2b3e51;
  width: 100%;
  margin: 0;
  padding: 16px;
  display: none;
  justify-content: space-between;
}
.sticky_box .reviews_btn_wrapper {
  display: block;
}
.sticky_box .book_free_call_btn {
  max-width: 156px;
  margin: 0 0 0 10px;
  height: 48px;
  font-size: 16px;
  line-height: 16px;
  color: #2b3e51;
}
.sticky_box .reviews_btn_wrapper svg {
  display: block;
  margin-bottom: 6px;
}
.sticky_box .reviews_btn_wrapper p {
  display: inline-block;
}
.sticky_box .reviews_btn_wrapper p:last-child {
  margin-left: 1px !important;
}
.calendar_container {
  margin-top: 30px;
  min-height: 298px;
}
.calendar {
  position: relative;
  overflow: hidden;
  text-transform: capitalize;
  text-align: center;
  max-width: 325px;
  margin: 0 auto;
}
.calendar a {
  text-decoration: none;
  color: inherit;
}
.calendar header {
  margin-bottom: 12px;
}
.calendar header .simple-calendar-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 20px;
  height: 20px;
  text-align: center;
  color: #3e78ba;
  border-radius: 50%;
}

.calendar header .simple-calendar-btn:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 16px;
  background: url(https://conversionratestore.github.io/projects/grantme/img/btn_next_calendar.svg) no-repeat center center;
}
.calendar header .simple-calendar-btn.btn-prev:before {
  background: url(https://conversionratestore.github.io/projects/grantme/img/btn_prev_calendar.svg) no-repeat center center;
}

.calendar header .btn-prev {
  top: 0;
  right: 54px;
}

.calendar header .btn-next {
  top: 0;
  right: 0;
}

.calendar header .month {
  font-family: "Lato", sans-serif;
  padding: 0;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #3e78ba;
}
.calendar header .month .year {
  margin-left: 10px;
}
.calendar table {
  width: 100%;
  border-spacing: 0px;
}

.calendar thead {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #2b4f6a;
  text-transform: uppercase;
}
.calendar thead td {
  width: 42px;
  height: 42px;
}
.calendar td {
  padding: 2px;
}
.calendar .day {
  font-family: "Lato", sans-serif;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 37px;
  height: 37px;
  font-weight: 400;
  font-size: 16px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  color: #676767;
}
.calendar .day:hover {
  border: 2px solid #6691cc;
}
.calendar .day.wrong-month {
  display: none;
}
.calendar .day.has-event {
  background: #e9f3fa;
  color: #2b4f6a;
}
.calendar .day.disabled {
  cursor: default;
}
.calendar .day.disabled:hover {
  border: 2px solid transparent;
}
.calendar .event-container {
  display: none !important;
}
.chosen_select.is_hidden,
.calc_step_third.is_hidden,
#calendarContainer.is_hidden,
.time_zone_wrapper.is_hidden,
.your_parent_information_wrapper.is_hidden,
.add_guests_btn.is_hidden,
label.is_hidden {
  display: none;
}
/*chosen_select */
.chosen_select {
  position: relative;
  max-width: 304px;
  margin: 24px auto 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 309px;
}
.confirm_time_btn {
  margin: auto 0 0;
  background: #3e78ba;
  border-radius: 6px;
  height: 62px;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
}
.confirm_time_btn:disabled {
  background: #cccccc;
}
.chosen_select div.select_custom {
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 17px 20px;
  cursor: pointer;
  position: relative;
  height: 48px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 14px;
  color: #676767;
  text-align: left;
}
.chosen_select div.select_custom::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url(https://conversionratestore.github.io/projects/grantme/img/arr_select.svg) no-repeat center center;
  transition: all 300ms cubic-bezier(0.4, 0, 1, 1);
}
.chosen_select div.select_custom.is_visit::after {
  transform: translateY(-50%) rotate(180deg);
}
.chosen_select div.select_custom[data-selected] {
  color: #3e78ba;
}
.chosen_select div.select_custom.is_active {
  border-color: #3e78ba;
}
.chosen_select div.options_custom {
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 2px rgba(28, 5, 77, 0.05), 0px 12px 8px rgba(0, 0, 0, 0.02);
  border-radius: 6px;
  margin-top: 4px;
  display: block;
}
/*
.chosen_select div.options_custom {
  display: none;
}
*/
.chosen_select div.options_custom ul {
  overflow-x: auto;
  max-height: 184px;
  min-height: 184px;
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 6px;
}
.chosen_select ul::-webkit-scrollbar {
  width: 4px;
}
.chosen_select ul::-webkit-scrollbar-thumb {
  background: #6f767b;
  border-radius: 10px;
}
.chosen_select ul li {
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #2b4f6a;
  padding: 12px;
  text-align: center;
  cursor: pointer;
}
.chosen_select ul li:hover {
  background: rgb(204 204 204 / 30%);
}
.chosen_select ul li.is_active {
  background: #e9f3fa;
  color: #3e78ba;
}
.calc_step_third {
  display: block;
  margin-top: 16px;
}
.calc_step_third > p {
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  font-weight: 400;
  font-size: 16px !important;
  line-height: 24px !important;
  color: #2b4f6a;
}
.calc_step_third > p > span {
  padding-left: 24px;
  position: relative;
}
.calc_step_third > p > span + span {
  margin-top: 12px;
}
.calc_step_third > p > span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url(https://conversionratestore.github.io/projects/grantme/img/mini_clock.svg) no-repeat center center;
}
.calc_step_third > p > span:nth-child(2):before {
  background: url(https://conversionratestore.github.io/projects/grantme/img/mini_calendar.svg) no-repeat center center;
}
.calc_step_third > p > span:nth-child(3):before {
  background: url(https://conversionratestore.github.io/projects/grantme/img/mini_planet.svg) no-repeat center center;
}
.calc_step_third > h3 {
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 25px !important;
  text-align: center !important;
  color: #2b3e51 !important;
  margin: 16px 0 !important;
  padding: 0 !important;
}
#yourInformationForm{
  position: relative;
}
#yourInformationForm .schedule_call_btn {
  font-family: "Lato", sans-serif;
  height: 62px;
  background: #ebbd45;
  border-radius: 6px;
  width: 100%;
  outline: none;
  border: none;
  color: #2b3e51;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}
.your_parent_information_wrapper {
  margin: 12px 0 24px;
}
#yourInformationForm .schedule_call_btn:disabled {
  background: #cccccc;
  color: #ffffff;
}
.add_guests_btn {
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3e78ba;
  margin: 24px auto 16px;
  text-align: center;
  display: block;
  text-decoration-line: underline;
  max-width: max-content;
}
#yourInformationForm label {
  width: 100%;
  height: 48px;
  padding: 20px 12px 4px;
  border: 1px solid #3e78ba;
  border-radius: 6px;
  margin: 0;
  position: relative;
}
#yourInformationForm label.no_content {
  border: 1px solid #cccccc;
}
#yourInformationForm label:focus {
  border: 1px solid #3e78ba;
}
#yourInformationForm label > span {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8b8b8b;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
}
#yourInformationForm label > span b {
  color: rgba(235, 62, 68, 1);
}

#yourInformationForm .your_information_wrapper > div + div,
#yourInformationForm .your_parent_information_wrapper > div + div,
#yourInformationForm .your_information_wrapper > div > div + div,
#yourInformationForm .your_parent_information_wrapper > div > div + div {
  margin-top: 12px;
}
#yourInformationForm input {
  font-family: "Lato", sans-serif;
  width: 100%;
  outline: none;
  border: none;
  height: 100%;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  color: #2b3e51;
}
#yourInformationForm label > span.is_active {
  top: 4px;
  left: 12px;
  transform: unset;
  font-size: 12px;
  line-height: 16px;
}
.text_validation {
  color: red;
  font-size: 13px !important;
  margin-top: 1px;
}
.ajax-progress.ajax-progress-fullscreen {
  width: 100%;
  left: 0;
}
.ajax-progress.ajax-progress-fullscreen {
  background-color: #fff;
  opacity: 0.5;
  background-image: none;
  z-index: 11000;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.ajax-throbber {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 50%;
  bottom: 0;
  right: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.ajax-throbber.sk-circle {
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1;
}
.ajax-throbber .sk-circle-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.loader_form_var{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 11;
  left: 0;
  top: 0;
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(1) {
  transform: rotate(30deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(2) {
  transform: rotate(60deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(3) {
  transform: rotate(90deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(4) {
  transform: rotate(120deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(5) {
  transform: rotate(150deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(6) {
  transform: rotate(180deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(7) {
  transform: rotate(210deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(8) {
  transform: rotate(240deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(9) {
  transform: rotate(270deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(10) {
  transform: rotate(300deg);
}
#calendarContainer .ajax-throbber .sk-circle-dot:nth-child(11) {
  transform: rotate(330deg);
}
.testimonials_video {
  position: relative;
}
.container_video.container {
  margin: 0 auto;
  padding: 0;
}
.testimonials_item {
  width: 100%;
  padding: 0;
  background: #e9f3fa;
  border-radius: 12px;
  min-height: 392px;
  display: block;
}
.testimonials_content {
  height: 463px;
  align-items: center;
  overflow: hidden;
  justify-content: center;
  display: flex;
  margin: 0;
}
.testimonials_content_text {
  padding: 24px 16px;
  font-size: 18px;
  line-height: 27px;
}
.testimonials_man {
  width: 100%;
  min-height: 80px;
  padding: 16px;
  display: flex;
}
.testimonials_img {
  width: 80px;
  height: 80px;
  margin-right: 16px;
}
.testimonials_img img {
  border-radius: 50%;
}
.testimonials_name {
  flex-direction: column;
  width: calc(100% - 96px);
  display: flex;
  align-self: flex-end;
}
.testimonials_name h3 {
  width: 100%;
  margin: -4px 0 0;
  font-size: 20px;
  line-height: 30px;
  font-family: Bitter, serif;
  font-weight: 600;
}
.testimonials_name .testimonials_school {
  font-size: 18px;
  line-height: 27px;
  width: 100%;
}
.testimonials_arrows {
  display: flex;
  margin: 10px 20px;
  align-items: center;
  justify-content: center;
}
.testimonials_arrow_next,
.testimonials_arrow_prev {
  border: 0;
  background: 0 0;
  padding: 0;
  margin: 5px 16px;
}
.slick-initialized .slick-slide {
  margin: 0 10px;
}
.w-chrome, .wistia_swatch{
border-radius: 12px
}
.testimonials_item_last {
  min-height: 575px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  text-align: center;
  justify-content: center;
}
.testimonials_item_last .btn {
  max-width: 159px;
  margin: 0 auto 16px;
  padding: 16px 28px;
  display: inline-block;
  border-radius: 6px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  background-color: #ebbd45;
  color: #2b3e51;
  outline: none;
  border: none;
}
@media (min-width: 768px) {
  .chosen_select div.options_custom ul {
    max-height: 222px;
    min-height: 222px;
  }
  .navbar-default.is_fixed {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 111111111;
  }
  .navbar-default .region.region-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sticky_header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
  }
  .sticky_header .book_free_call_btn {
    height: 48px;
    max-width: 196px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    margin: 0;
    display: none;
  }
  .navbar-default.is_fixed .sticky_header .book_free_call_btn {
    display: flex;
  }
  .sticky_header .reviews_btn_wrapper p:nth-of-type(1) {
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 25px !important;
    margin: 0 8px 0 12px !important;
  }
  .sticky_header .reviews_btn_wrapper p:last-child {
    font-weight: 400 !important;
    text-decoration-line: unset;
    margin: 0 !important;
  }
  .sticky_header .reviews_btn_wrapper .accent_var {
    color: #2daf6b;
  }
  .navbar-default {
    border-bottom: unset;
    background: #3e5062;
    padding: 4px 0;
  }
  .navbar-default .container {
    width: 100%;
    max-width: 1202px;
    padding: 0 16px;
  }
  #block-landingpageheader {
    flex: 0 0 141px;
  }
  .navbar-header .logo img {
    width: 141px;
  }
  .path-schedule-consultation #scholarshipListContent .academy-waiting {
    display: flex !important;
    justify-content: center !important;
    min-height: unset !important;
  }
  .reviews_btn_box {
    display: none;
  }
  .consultation_descr_box {
    padding: 24px 38px 24px 24px;
    margin: 42px 0 0;
  }
  .consultation_descr_box h2 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: inherit;
    position: relative;
  }
  .consultation_descr_box h2::before {
    position: absolute;
    content: "";
    background: url(https://conversionratestore.github.io/projects/grantme/img/title_arrow.svg) no-repeat center center;
    width: 24px;
    height: 24px;
    top: 0;
    right: 0;
  }
  body .consultation_descr_box > div h3 {
    margin: 0 0 8px !important;
  }
  body .consultation_descr_box > div ul li {
    color: #cccccc;
  }
  body .consultation_descr_box > div ul li span {
    color: white;
  }
  body .consultation_descr_box > div + div {
    margin-top: 20px;
  }
  body .consultation_descr_box > div.no_commitments_wrapper p {
    font-weight: 600 !important;
  }
  .new_schedule {
    max-width: 100%;
    margin: 23px 24px 0;
    width: auto;
    padding: 24px 0;
    border-top: 1px solid #f2f2f2;
    border-radius: 0;
  }
  .greetings_box .win_scholarships_txt {
    font-weight: 400 !important;
  }
  .greetings_box .name_txt {
    font-size: 18px !important;
    line-height: 25px !important;
    color: #cccccc;
  }
  .greetings_box .name_txt span:last-child {
    display: inline-block;
  }
  .greetings_box .tooltip_wrapper {
    font-size: 36px !important;
    margin: 16px 0;
    max-width: 460px;
  }
  .path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent .col-lg-5 {
    padding: 0;
    width: 50%;
    position: sticky;
    top: 0;
  }
  .path-schedule-consultation #scholarshipListContent,
  .path-book-call.path-start-free-trial.path-schedule-consultation #scholarshipListContent {
    padding: 60px 16px;
  }
  .path-start-free-trial #scholarshipListContent .academy-waiting {
    align-items: flex-start;
    justify-content: center;
  }
  .path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center {
    padding: 0;
    width: 50%;
    margin-left: -6px;
  }
  .new_schedule_box {
    background: #ffffff;
    padding: 24px 0 0;
    border-radius: 6px;
    margin: 0;
  }
  .our_consultants_wrapper {
    background: #e9f3fa;
    padding: 24px 32px;
    text-align: left;
    border-radius: 0 0 6px 6px;
    margin: 0;
  }
  .new_schedule_box .new_schedule_descr {
    align-items: center;
    justify-content: center;
    margin: 8px 24px 0;
    max-width: unset;
    gap: 28px;
  }
  .new_schedule_box > h2 {
    margin: 0 24px;
    max-width: unset;
  }
  body .our_consultants_wrapper h3 {
    font-size: 16px !important;
    margin: 0 16px 16px 0 !important;
    display: inline-block;
  }
  .our_consultants_wrapper > div p {
    max-width: unset;
  }
  .our_consultants_wrapper > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .our_consultants_wrapper > p {
    font-size: 16px !important;
    line-height: 24px;
    margin-bottom: 0;
    display: inline-block;
  }
  .as_seen_on_box {
    padding: 100px 16px;
  }
  .as_seen_on_box h2 {
    font-weight: 600 !important;
    font-size: 48px !important;
    line-height: 72px !important;
    margin-bottom: 56px !important;
  }
  .as_seen_on_box .img_wrapper {
    padding: 40px;
    gap: 140px;
    justify-content: center;
    align-items: center;
  }
  .as_seen_on_box .img_wrapper img:nth-child(1) {
    max-width: 121px;
  }
  .as_seen_on_box .img_wrapper img:nth-child(2) {
    max-width: 120px;
  }
  .as_seen_on_box .img_wrapper img:nth-child(3) {
    max-width: 135px;
  }
  .as_seen_on_box .count_txt_wrapper {
    padding: 40px;
    align-items: center;
    justify-content: center;
    gap: 120px;
  }
  .as_seen_on_box .count_txt_wrapper > div span {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }
  .as_seen_on_box .count_txt_wrapper > div p {
    font-size: 18px;
    line-height: 25px;
  }
  .what_users_say_box {
    padding: 50px 16px 0;
  }
  .what_users_say_box h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    margin-bottom: 56px;
  }
  .persuasive_comparison_table_box {
    padding: 100px 16px;
  }
  #block-trustpilotwidgetstartfreetrial{
    padding-top: 100px;
  }
  .persuasive_comparison_table_box h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    max-width: 813px;
    margin: 0 auto 56px;
  }
  .persuasive_comparison_table_box .table .thead {
    padding: 20px 40px;
  }
  .persuasive_comparison_table_box .table .tbody {
    padding: 0 40px 20px;
  }
  .persuasive_comparison_table_box .table .tbody .tr .td:nth-child(2),
  .persuasive_comparison_table_box .table .tbody .tr .td:nth-child(3),
  .persuasive_comparison_table_box .table .thead .th:nth-child(2),
  .persuasive_comparison_table_box .table .thead .th:nth-child(3) {
    flex: 0 0 150px;
  }
  .persuasive_comparison_table_box .table .tbody .tr .td:nth-child(1),
  .persuasive_comparison_table_box .table .thead .th:nth-child(1) {
    flex: 0 0 302px;
  }
  .persuasive_comparison_table_box .table .tbody .tr .td {
    padding: 20px 0;
  }
  .persuasive_comparison_table_box .table .thead .th span {
    font-family: "Bitter", serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  }
  .persuasive_comparison_table_box .table .tbody .td span {
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }
  .persuasive_comparison_table_box .odds_txt_wrapper {
    margin-top: 20px;
    align-items: flex-start;
    justify-content: center;
  }
  .persuasive_comparison_table_box .odds_txt_wrapper p {
    font-family: "Bitter", serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 0 12px;
  }
  .competition-section {
    position: relative;
    padding: 260px 0 0;
  }
  .competition-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 124px;
    background-color: #fff;
    z-index: 0;
    border-radius: 0 0 180px 180px;
  }
  .competition_item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .competition_item img {
    width: 53%;
    margin: -55px 0 0;
  }
  .competition_item > div {
    flex: 0 0 45%;
  }
  .competition_item#competition_step3 > div {
    margin-top: 54px;
  }
  .competition_item#competition_step3 {
    border-top: unset;
    padding-top: 0;
  }
  .calc_step_third > p {
    flex-direction: unset;
    align-items: center;
    max-width: 452px;
    margin: 0 auto 24px;
    justify-content: space-between;
  }
  .calc_step_third > p > span + span {
    margin: 0;
  }
  .calc_step_third > h3 {
    margin: 0 0 24px !important;
    border-top: 1px solid #f2f2f2;
    padding-top: 16px !important;
  }
  .calc_step_third {
    margin: 24px 0 0;
  }
  #yourInformationForm {
    max-width: 486px;
    margin: 0 auto;
  }
  #yourInformationForm .your_information_wrapper > div,
  #yourInformationForm .your_parent_information_wrapper > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }
  #yourInformationForm .your_information_wrapper > div + div,
  #yourInformationForm .your_parent_information_wrapper > div + div,
  #yourInformationForm .your_information_wrapper > div > div + div,
  #yourInformationForm .your_parent_information_wrapper > div > div + div {
    margin: 0 !important;
  }
  #yourInformationForm .your_information_wrapper > div > div,
  #yourInformationForm .your_parent_information_wrapper > div > div {
    width: 48%;
    margin: 0;
  }
  #yourInformationForm .your_information_wrapper > div:nth-child(2) > div,
  #yourInformationForm .your_parent_information_wrapper > div:nth-child(2) > div {
    width: 100%;
  }
  #yourInformationForm .your_information_wrapper > div:nth-child(2) > div:nth-child(2),
  #yourInformationForm .your_parent_information_wrapper > div:nth-child(2) > div:nth-child(2) {
    display: none;
  }
  .your_parent_information_wrapper {
    margin: 16px 0 24px;
  }
  .chosen_select {
    margin: 24px auto 0;
  }
  .time_zone_wrapper {
    text-align: center;
    margin: 24px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .time_zone_wrapper > span {
    display: inline;
    margin: 0;
  }
  .select_dropdown_wrapper {
    display: flex;
    margin-left: 12px;
    align-items: center;
    justify-content: center;
  }
  .select_custom {
    padding: 16px 20px;
  }
  .chosen_select {
    min-height: 345px;
    max-width: 486px;
  }
  .calendar {
    padding-bottom: 15px;
  }
  .new_schedule .nav_steps > p:nth-of-type(1) {
    max-width: unset;
  }
  .container_video.container{
    width: 912px;
  }
  .testimonials_content{
    height: 351px;
  }
  .testimonials_man{
    padding: 32px;
  }
  .testimonials_name h3{
    font-size: 26px;
    line-height: 39px;
  }
  .testimonials_content_text {
    padding: 32px;
    font-size: 22px;
    line-height: 33px;
}
.testimonials_item_last{
    min-height: 495px;
}
.testimonials_item_last .btn + div{
    font-size: 18px;
    max-width: 208px;
}
.testimonials_arrows{
    justify-content: flex-end;
}
.path-start-free-trial .main-container{
  overflow: initial;
}
.path-start-free-trial .main-container > .row{
  margin: 0 !important;
}
.path-start-free-trial .main-container > .row > .col-sm-12{
padding: 0;
}
}
@media (min-width: 1200px) {
  .competition_item#competition_step1 > div {
    margin-top: 162px;
  }
}
    </style>
    `;

    let competitionNextSteps = /*html */ `
        <section class="competition-section">
            <div class="container">
                <div class="competition_wrapper">
                    <div class="competition_items">
                        <div class="competition_item" id="competition_step2">
                            <div>
                                <h2>Stand Out &amp; Get In</h2>
                                <p>Don’t spend hours starting from scratch. Learn firsthand from over 43,000 edited applications and be guided by our experts, workshops, and support resources to know exactly what you need to do, and how to do it, to get in.</p>
                                <p>Apply to top schools &amp; major awards with more conviction than ever.</p>
                            </div>
                            <img src="https://grantme.ca/wp-content/uploads/2022/08/Student-Advantage_L-1-1.png" alt="step 2" />
                        </div>
                        <div class="competition_item" id="competition_step3">
                            <div>
                                <h2>Discover Your Dreams, Then Turn Them Into Reality</h2>
                                <p>Whether you want to be an astronaut, doctor, entrepreneur or TikTok Star – our Student Success System helps you decide, then helps you get there. You’ll know exactly what you need to do 1 week, 1 month, or 5 years down the road to succeed with your goals. We ensure you find the perfect university program, and get you accepted.</p>
                            </div>
                            <img src="https://grantme.ca/wp-content/uploads/2022/08/Student-Journey-3-1.png" alt="step 3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      `;

    let slider = `
    <section class="report_card_section">
        <h2>Hear From Our Scholars</h2>
        <div class="report_card_frame">
            <div class="trustpilot-widget" data-locale="en-US" data-template-id="54ad5defc6454f065c28af8b" data-businessunit-id="5efe956b4acfb90001faa80d" data-style-height="240px" data-style-width="100%" data-theme="light" data-stars="4,5" data-review-languages="en" data-font-family="Lato" data-text-color="#2B3F51" style="position: relative"><iframe title="Customer reviews powered by Trustpilot" loading="auto" src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&amp;businessunitId=5efe956b4acfb90001faa80d#locale=en-US&amp;styleHeight=240px&amp;styleWidth=100%25&amp;theme=light&amp;stars=4%2C5&amp;reviewLanguages=en&amp;fontFamily=Lato&amp;textColor=%232B3F51" style="position: relative; height: 240px; width: 100%; border-style: none; display: block; overflow: hidden"></iframe></div>
        </div>
    </section>
      `;

    let firstSection = /*html */ `
    <section class="greetings_box">
      <p class="name_txt">Awesome, <span class="person_name_var">Name</span>! <span>Based on the information you have provided,</span></p>
      <p class="tooltip_wrapper">
        <span class="your_person_var">You Are</span> Eligible For <span class="accent_var funding_price">$96,250</span> <span class="txt_relative">In Funding <svg data-title='Atlas cedarwood oil has natural sedative properties that can help reduce stress and anxiety. Its calming effects on the nervous system can promote relaxation and improve sleep quality, which can be beneficial for children with anxiety or sleep disturbances.' data-tolltip class="tooltip_btn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C11 5.71667 10.904 5.479 10.712 5.287C10.52 5.095 10.2827 4.99933 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6C9 6.28333 9.096 6.521 9.288 6.713C9.48 6.905 9.71733 7.00067 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
            fill="white"
          />
        </svg></span>
      </p>
      <p class="win_scholarships_txt"><span class="accent_var grade_var">Grade 9 - 10</span> students can win 5x as many scholarships.</p>
    </section>
    <section class="reviews_btn_box">
      <h2>Book a <span class="accent_var">Free</span> call to find out how to get this scolarship</h2>
      <a class="book_free_call_btn" href="#newScheduleBox">Book a Free Call</a>
      <div class="reviews_btn_wrapper" data-reviews data-count='1'>
        <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
          <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
          <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
          <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
          <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
          <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
        </svg>

        <p>TrustScore <span class="accent_var">4.8</span></p>
        <p>(920+ reviews)</p>
      </div>
    </section>
    <section class="consultation_descr_box">
      <h2>Book a Free <span class="grade_var">Grade 12</span> Scolarship Consultation</h2>
      <div>
        <h3>What you’ll learn on the call:</h3>
        <ul>
          <li>How to win <span>at least $3,600</span> in grants per year - guaranteed.</li>
          <li>Which scholarships and <span>funding opportunities</span> your child is eligible for based on their profile.</li>
          <li>How to <span>double your odds</span> of winning funding by creating a plan with our expert.</li>
          <li>You’ll learn if your child <span>will be offered a spot</span> into GrantMe’s programs</li>
        </ul>
      </div>
      <div>
        <h3>After call you’ll get:</h3>
        <ul>
          <li>List with <span>personalized scholarship</span>, grant, and bursary matches.</li>
          <li>Examples of <span>real scholarship essays</span> from past students who won major awards.</li>
          <li><span>Action plan</span> to get your child started with scholarship preparation!</li>
        </ul>
      </div>
      <div class="no_commitments_wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_235_4779)">
            <path d="M20.2031 1.40625V7.5H22.3125C22.7008 7.5 23.0156 7.18519 23.0156 6.79688V1.40625C23.0156 0.629578 22.386 0 21.6094 0C20.8327 0 20.2031 0.629578 20.2031 1.40625Z" fill="#EBBD45" />
            <path d="M13.1719 7.5C14.078 7.5 14.8125 6.76547 14.8125 5.85938C14.8125 4.95328 14.078 4.21875 13.1719 4.21875C12.2658 4.21875 11.5312 4.95328 11.5312 5.85938C11.5312 6.76547 12.2658 7.5 13.1719 7.5Z" fill="#EBBD45" />
            <path
              d="M3.09375 0C1.92877 0 0.984375 0.944391 0.984375 2.10938V23.2969C0.984375 23.6852 1.29919 24 1.6875 24H18.0938C18.4821 24 18.7969 23.6852 18.7969 23.2969V1.40625C18.7969 0.894141 18.9351 0.414047 19.1752 0H3.09375ZM13.1719 2.8125C14.8519 2.8125 16.2188 4.17933 16.2188 5.85938C16.2188 7.53942 14.8519 8.90625 13.1719 8.90625C11.4918 8.90625 10.125 7.53942 10.125 5.85938C10.125 4.17933 11.4918 2.8125 13.1719 2.8125ZM10.7826 12.6562C11.1709 12.6562 11.4857 12.9711 11.4857 13.3594C11.4857 13.7477 11.1709 14.0625 10.7826 14.0625H9.65625V15H10.9283C11.3166 15 11.6314 15.3148 11.6314 15.7031C11.6314 16.0914 11.3166 16.4062 10.9283 16.4062H8.95312C8.56481 16.4062 8.25 16.0914 8.25 15.7031V11.0156C8.25 10.6273 8.56481 10.3125 8.95312 10.3125H10.9283C11.3166 10.3125 11.6314 10.6273 11.6314 11.0156C11.6314 11.4039 11.3166 11.7188 10.9283 11.7188H9.65625V12.6562H10.7826ZM4.5 3.52439C4.5 2.83462 5.38973 2.55727 5.7817 3.12483L7.76489 5.99662L7.74094 3.52242C7.73719 3.13411 8.04895 2.8163 8.43722 2.8125H8.44416C8.82933 2.8125 9.14339 3.12281 9.14714 3.50883L9.19097 8.04516C9.19097 8.41331 8.97914 8.71739 8.6513 8.81981C8.32908 8.9205 7.99031 8.79698 7.78833 8.50533L5.90625 5.77992V8.20312C5.90625 8.59144 5.59144 8.90625 5.20312 8.90625C4.81481 8.90625 4.5 8.59144 4.5 8.20312V3.52439ZM3.5625 11.0156C3.5625 10.6273 3.87731 10.3125 4.26562 10.3125H6.16547C6.55378 10.3125 6.86859 10.6273 6.86859 11.0156C6.86859 11.4039 6.55378 11.7188 6.16547 11.7188H4.96875V12.6119H6.01458C6.40289 12.6119 6.7177 12.9267 6.7177 13.315C6.7177 13.7033 6.40289 14.0181 6.01458 14.0181H4.96875V15.7031C4.96875 16.0914 4.65394 16.4062 4.26562 16.4062C3.87731 16.4062 3.5625 16.0914 3.5625 15.7031V11.0156ZM15.5156 19.6875H4.26562C3.87731 19.6875 3.5625 19.3727 3.5625 18.9844C3.5625 18.5961 3.87731 18.2812 4.26562 18.2812H15.5156C15.9039 18.2812 16.2188 18.5961 16.2188 18.9844C16.2188 19.3727 15.9039 19.6875 15.5156 19.6875ZM15.4701 12.6562C15.8584 12.6562 16.1732 12.9711 16.1732 13.3594C16.1732 13.7477 15.8584 14.0625 15.4701 14.0625H14.3438V15H15.6157C16.0041 15 16.3189 15.3148 16.3189 15.7031C16.3189 16.0914 16.0041 16.4062 15.6157 16.4062H13.6406C13.2523 16.4062 12.9375 16.0914 12.9375 15.7031V11.0156C12.9375 10.6273 13.2523 10.3125 13.6406 10.3125H15.6157C16.0041 10.3125 16.3189 10.6273 16.3189 11.0156C16.3189 11.4039 16.0041 11.7188 15.6157 11.7188H14.3438V12.6562H15.4701Z"
              fill="#EBBD45"
            />
          </g>
          <defs>
            <clipPath id="clip0_235_4779">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="accent_var">No prior commitments, no hidden fees</p>
      </div>
    </section>
    `;

    let secondSection = /*html */ `
    <section class="new_schedule_box" id="newScheduleBox">
      <h2>Schedule a Free Scholarship Consultation</h2>
      <div class="new_schedule_descr">
          <span>Free</span>
          <span>30 minutes</span>
          <span>Zoom call</span>
      </div>
      <div class="new_schedule">
            <div class="nav_steps">
                <svg data-navsteps='1' class="svg_is_hidden" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_245_77182)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3981 6.57776C15.1836 6.57776 15.8203 7.21449 15.8203 7.99999C15.8203 8.78545 15.1836 9.42221 14.3981 9.42221H4.76517L8.34995 13.4551C8.8718 14.0422 8.81893 14.9411 8.23187 15.463C7.64477 15.9848 6.74582 15.9319 6.22401 15.3448L0.535121 8.94484C0.0561161 8.406 0.0561161 7.59394 0.535121 7.0551L6.22401 0.655098C6.74582 0.0680303 7.64477 0.0151507 8.23187 0.53699C8.81893 1.05883 8.8718 1.95778 8.34995 2.54484L4.76517 6.57776H14.3981Z" fill="#2B4F6A" />
                </g>
                <defs>
                    <clipPath id="clip0_245_77182">
                    <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)" />
                    </clipPath>
                </defs>
                </svg>
                <p>Select a Day</p>
                <p><span class="step_active">1</span>/3</p>
            </div>
            <div class="calendar_container" id="calendarContainer">
                      <div class="ajax-throbber sk-circle">
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
        <div class="sk-circle-dot"></div>
      </div>
            </div>
            <div class="chosen_select is_hidden">
                <div class="select_custom">Select a time</div>
                <div class="options_custom"><ul></ul></div>
                <button class="confirm_time_btn" disabled>Confirm</button>
            </div>
                <div class="calc_step_third is_hidden">
                    <p>
                        <span>30 min</span> <span class="new_selected_datetime"><span class="full_date_time">Friday, May 25, 2023</span></span> <span>EET</span>
                    </p>
                    <h3>Enter Details</h3>
                    <form id="yourInformationForm">
                        <div class="your_information_wrapper">
                        <div>
                            <div>
                                <label class="no_content">
                                    <span>First name <b>*</b></span>
                                    <input size="60" maxlength="128" required="required" aria-required="true" type="text" name="firstName" id="newFirstName" />
                                </label>
                            </div>
                            <div>
                                <label class="no_content">
                                    <span>Last Name <b>*</b></span>
                                    <input size="60" maxlength="128" required="required" aria-required="true" type="text" name="lastName" id="newLastName" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label class="no_content">
                                    <span>Phone number <b>*</b></span>
                                    <input inputmode="numeric" size="60" maxlength="128" required="required" aria-required="true" type="phone" name="phoneNumber" id="newPhoneNumber" />
                                </label>
                            </div>
                            <div>
                                <label class="no_content is_hidden">
                                    <span>Email <b>*</b></span>
                                    <input value='test@test.com' size="60" maxlength="254" required="required" aria-required="true" type="email" name="email" id="newEmail" />
                                </label>
                            </div>
                        </div>
                        </div>
                        <span class="add_guests_btn">Add Guests</span>
                        <div class="your_parent_information_wrapper is_hidden">
                            <div>
                                <div>
                                    <label class="no_content">
                                        <span>Guest first name</span>
                                        <input size="60" maxlength="128" required="required" aria-required="true" type="text" name="newFirstNameGuest" id="newFirstNameGuest" />
                                    </label>
                                </div>
                                <div>
                                    <label class="no_content">
                                        <span>Guest last name</span>
                                        <input size="60" maxlength="128" required="required" aria-required="true" type="text" name="newLastNameGuest" id="newLastNameGuest" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label class="no_content">
                                        <span>Guest phone number</span>
                                        <input inputmode="numeric" size="60" maxlength="128" required="required" aria-required="true" type="text" name="newPhoneNumberGuest" id="newPhoneNumberGuest" />
                                    </label>
                                </div>
                                <div>
                                    <label class="no_content is_hidden">
                                        <span>Guest email</span>
                                        <input size="60" maxlength="254" required="required" aria-required="true" type="email" name="newEmailGuest" id="newEmailGuest" />
                                    </label>
                                </div>
                            </div>

                        </div>
                        <button class="schedule_call_btn" disabled type="submit">Schedule a Call</button>
                    </form>
                 </div>
            <div class="time_zone_wrapper">
                <span>Time Zone:</span>
                <div class="select_dropdown_wrapper">
                    <span></span>
                    <select name="select_dropdown" id="selectDropdown"></select>
                </div>
            </div>
      </div>
      <div class="our_consultants_wrapper">
        <h3>No suitable times for you?</h3>
        <p>Call or text us <a href="tel:+17787711847">(778) 771-1847</a></p>
        <div>
          <img src="https://conversionratestore.github.io/projects/grantme/img/our_consultants.png" alt="Our consultants" />
          <p>Our consultants are ready to help you</p>
        </div>
      </div>
    </section>
    `;

    let thirdSection = /*html */ `
        <section class="as_seen_on_box">
      <h2>As Seen On</h2>
      <div>
        <div class="img_wrapper">
          <img src="https://conversionratestore.github.io/projects/grantme/img/forbes.png" alt="Forbes" />
          <img src="https://conversionratestore.github.io/projects/grantme/img/cbc.png" alt="CBC" />
          <img src="https://conversionratestore.github.io/projects/grantme/img/macleans.png" alt='Macleans' />
        </div>
        <div class="count_txt_wrapper">
          <div>
            <span>20,000+</span>
            <p>Students Supported All Time</p>
          </div>
          <div>
            <span>43,000</span>
            <p>Applications Edited Last Year</p>
          </div>
        </div>
      </div>
    </section>
    <section class="what_users_say_box">
      <h2>What Our Students Say</h2>
      <div class="users_say_slider">
            <div class="testimonials_video section_grey_radius">
      <div class="container container_video">
        <div class="testimonials_slider">
          <div class="testimonials_item">
            <script src="https://fast.wistia.com/embed/medias/i6p6x44e4v.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:177.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_i6p6x44e4v videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/i6p6x44e4v/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
          </div>
          <div class="testimonials_item">
            <div class="testimonials_content">
              <div class="testimonials_content_text">... Short story long, GrantMe did not just improve my writing abilities and applications but also equipped me with the skills to be a successful student"</div>
            </div>
            <div class="testimonials_man">
              <div class="testimonials_img">
                <img src="https://grantme.ca/wp-content/uploads/2022/08/Lauren-1.jpeg" alt="testimonial" width="80" height="80" />
              </div>
              <div class="testimonials_name">
                <h3>Lauren</h3>
                <div class="testimonials_school">Western University</div>
              </div>
            </div>
          </div>
          <div class="testimonials_item">
          <script src="https://fast.wistia.com/embed/medias/jjxyh7vxsw.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:177.5% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_jjxyh7vxsw videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/jjxyh7vxsw/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
        </div>
          <div class="testimonials_item">
            <div class="testimonials_content">
              <div class="testimonials_content_text">“My favourite part of GrantMe was the wonderful essay editing, really helpful feedback, and great turnaround times”</div>
            </div>
            <div class="testimonials_man">
              <div class="testimonials_img">
                <img src="https://grantme.ca/wp-content/uploads/2022/08/Wesley.jpeg" alt="testimonial" width="80" height="80" />
              </div>
              <div class="testimonials_name">
                <h3>Wesley</h3>
                <div class="testimonials_school">Simon Fraser University</div>
              </div>
            </div>
          </div>
          <div class="testimonials_item">
            <script src="https://fast.wistia.com/embed/medias/6utt82y2dy.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:177.71% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_6utt82y2dy videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/6utt82y2dy/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>
          </div>
          <div class="testimonials_item">
            <div class="testimonials_item_last">
              <a class="btn btn_yellow" target="_self" href="https://grantme.ca/scholars/" tabindex="-1">See More</a>
              <div>View Success Stories From 20,000+ GrantMe Scholars</div>
            </div>
          </div>
        </div>
        <div class="testimonials_arrows">
          <button class="testimonials_arrow_prev">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29 21.4999C29.8284 21.4999 30.5 20.8283 30.5 19.9999C30.5 19.1715 29.8284 18.4999 29 18.4999H14.3403L20.1211 11.9964C20.6715 11.3773 20.6157 10.4292 19.9965 9.87878C19.3774 9.3284 18.4293 9.38417 17.8789 10.0033L9.87889 19.0033C9.3737 19.5717 9.3737 20.4281 9.87889 20.9964L17.8789 29.9964C18.4293 30.6156 19.3774 30.6714 19.9965 30.121C20.6157 29.5706 20.6715 28.6225 20.1211 28.0033L14.3403 21.4999H29Z" fill="#3E78BA"></path>
              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#3E78BA" stroke-width="2"></rect>
            </svg></button
          ><button class="testimonials_arrow_next">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 18.5C10.1716 18.5 9.5 19.1716 9.5 20C9.5 20.8284 10.1716 21.5 11 21.5H25.6597L19.8789 28.0034C19.3285 28.6226 19.3843 29.5707 20.0035 30.1211C20.6226 30.6715 21.5707 30.6157 22.1211 29.9965L30.1211 20.9965C30.6263 20.4282 30.6263 19.5718 30.1211 19.0034L22.1211 10.0034C21.5707 9.38426 20.6226 9.32849 20.0035 9.87887C19.3843 10.4292 19.3285 11.3774 19.8789 11.9965L25.6597 18.5H11Z" fill="#3E78BA"></path>
              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#3E78BA" stroke-width="2"></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>
      </div>
    </section>
    <section class="competition-section first_step">
      <div class="container">
        <div class="competition_wrapper">
          <div class="competition_items">
            <div class="competition_item" id="competition_step1">
                <div>
                    <h2>Leave Your Competition In The Dust</h2>
                    <p>The average student spends 2-4 hours per written application. GrantMe students apply up to 4x faster using our 24/7 writing support.</p>
                    <p>Buh-bye, “competition”.</p>
                </div>
              <img src="https://grantme.ca/wp-content/uploads/2022/08/Graph-3-1.png" alt="step 1" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="persuasive_comparison_table_box">
      <h2>Our 2022 University Admission Odds</h2>
      <div class="table">
        <div class="thead">
          <div class="th"><span class="name_tr">University</span></div>
          <div class="th"><span>National Acceptance Rate</span></div>
          <div class="th"><span>GrantMe Acceptance Ratee</span></div>
        </div>
        <div class="tbody">
          <div class="tr">
            <div class="td"><span class="name_tr">University of British Columbia (UBC)</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
          <div class="tr">
            <div class="td"><span class="name_tr">University of Toronto</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
          <div class="tr">
            <div class="td"><span class="name_tr">University of Waterloo</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
          <div class="tr">
            <div class="td"><span class="name_tr">McMaster University</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
          <div class="tr">
            <div class="td"><span class="name_tr">University of Alberta</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
          <div class="tr">
            <div class="td"><span class="name_tr">Queen's University</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
          <div class="tr">
            <div class="td"><span class="name_tr">University of Calgary</span></div>
            <div class="td"><span>3.7%</span></div>
            <div class="td"><span>7.4%</span></div>
          </div>
        </div>
      </div>
      <div class="odds_txt_wrapper">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_235_4862)">
            <path d="M23.899 5.97341L22.399 3.37541C22.299 3.20341 22.136 3.07741 21.944 3.02541C21.75 2.97441 21.548 3.00041 21.375 3.10141L18.777 4.60141C18.514 4.75241 18.369 5.04841 18.409 5.34941C18.448 5.64941 18.665 5.89741 18.958 5.97541L19.888 6.22441C15.426 17.8344 1.617 17.9994 1 18.0004C0.448 18.0004 0 18.4484 0 19.0004C0.001 19.5524 0.447 20.0004 0.999 20.0004C1.18 20.0004 16.931 19.8384 21.825 6.74341L23.055 7.07341C23.119 7.09041 23.185 7.09841 23.249 7.09841C23.478 7.09841 23.7 6.99341 23.844 6.80541C24.029 6.56441 24.051 6.23641 23.899 5.97341Z" fill="#2B3E51" />
            <path d="M22 24C21.447 24 21 23.552 21 23V11C21 10.448 21.447 10 22 10C22.553 10 23 10.448 23 11V23C23 23.552 22.553 24 22 24Z" fill="#2B3E51" />
            <path d="M16 24C15.447 24 15 23.552 15 23V18C15 17.448 15.447 17 16 17C16.553 17 17 17.448 17 18V23C17 23.552 16.553 24 16 24Z" fill="#2B3E51" />
            <path d="M10 24C9.447 24 9 23.552 9 23V21C9 20.448 9.447 20 10 20C10.553 20 11 20.448 11 21V23C11 23.552 10.553 24 10 24Z" fill="#2B3E51" />
            <path d="M4 24C3.447 24 3 23.552 3 23V22C3 21.448 3.447 21 4 21C4.553 21 5 21.448 5 22V23C5 23.552 4.553 24 4 24Z" fill="#2B3E51" />
            <path d="M11.491 1.82552L6.241 0.0395234C6.085 -0.0144766 5.915 -0.0144766 5.759 0.0395234L0.509 1.82552C0.204 1.92852 0 2.21452 0 2.53552V6.55352C0 11.4575 5.474 13.8415 5.707 13.9405C5.895 14.0195 6.105 14.0195 6.293 13.9405C6.526 13.8415 12 11.4575 12 6.55352V2.53552C12 2.21452 11.796 1.92852 11.491 1.82552ZM9.286 5.61752L6.536 9.11752C6.186 9.56452 5.53 9.62952 5.1 9.25952L3.35 7.75952C2.93 7.39952 2.881 6.76852 3.241 6.34852C3.601 5.92952 4.232 5.88152 4.65 6.24052L5.608 7.06152L7.713 4.38252C8.054 3.94852 8.682 3.87152 9.117 4.21452C9.552 4.55452 9.628 5.18352 9.286 5.61752Z" fill="#2B3E51" />
          </g>
          <defs>
            <clipPath id="clip0_235_4862">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Increase Your University Admission Odds by Up to 2x</p>
      </div>
    </section>
    `;

    let stickyBox = /*html */ `
    <div class="sticky_box">
      <div class="reviews_btn_wrapper" data-reviews data-count='2'>
        <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="htactp://www.w3.org/2000/svg">
          <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
          <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
          <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
          <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
          <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
          <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
        </svg>

        <p>TrustScore <span class="accent_var">4.8</span></p>
        <p>(920+ reviews)</p>
      </div>
      <a class="book_free_call_btn" href="#newScheduleBox">Book a Free Call</a>
    </div>
    `;

    let stickyHeader = /*html */ `
    <div class="sticky_header">
      <div class="reviews_btn_wrapper" data-reviews data-count='2'>
        <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 19.1283H19.9722V0.0078125H0V19.1283Z" fill="#2DAF6B" />
          <path d="M17.0255 8.14277L5.69745 16.021L7.35043 11.1519L3.02344 8.14277H8.37182L10.0244 3.27344L11.6771 8.14277H17.0255ZM10.0249 13.0121L13.1186 12.3891L14.3512 16.021L10.0249 13.0121Z" fill="white" />
          <path d="M22.2578 19.1283H42.23V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M22.2578 19.1283H32.2439V0.0078125H22.2578V19.1283Z" fill="#2DAF6B" />
          <path d="M32.4833 12.9379L35.1361 12.389L36.3631 16.1034L32.2028 13.1308L27.8803 16.1034L29.558 11.2167L25.1659 8.19658H30.5946L32.2716 3.30957L33.9493 8.19658H39.3777L32.4833 12.9379Z" fill="white" />
          <path d="M44.5139 19.1283H64.4861V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M44.5139 19.1283H54.5V0.0078125H44.5139V19.1283Z" fill="#2DAF6B" />
          <path d="M61.5394 8.14277L50.2114 16.021L51.8643 11.1519L47.5374 8.14277H52.8857L54.5384 3.27344L56.191 8.14277L61.5394 8.14277ZM54.5388 13.0121L57.6325 12.3891L58.8651 16.021L54.5388 13.0121Z" fill="white" />
          <path d="M66.7715 19.1283H86.7437V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M66.7715 19.1283H76.7576V0.0078125H66.7715V19.1283Z" fill="#2DAF6B" />
          <path d="M83.7969 8.14277L72.4693 16.021L74.1219 11.1519L69.7949 8.14277H75.1433L76.7959 3.27344L78.4486 8.14277L83.7969 8.14277ZM76.7963 13.0121L79.89 12.3891L81.1226 16.021L76.7963 13.0121Z" fill="white" />
          <path d="M89.0273 19.1283H109V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M89.0273 19.1283H99.0134V0.0078125H89.0273V19.1283Z" fill="#2DAF6B" />
          <path d="M106.053 8.14277L94.7251 16.021L96.3778 11.1519L92.0508 8.14277H97.3992L99.0518 3.27344L100.704 8.14277H106.053ZM99.0522 13.0121L102.146 12.3891L103.379 16.021L99.0522 13.0121Z" fill="white" />
        </svg>

        <p>TrustScore <span class="accent_var"><svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.002 4.9958L2.67436 12.874L4.32699 8.00498L0 4.9958H5.34837L7.001 0.126465L8.65363 4.9958H14.002ZM7.00142 9.86513L10.0951 9.24213L11.3277 12.874L7.00142 9.86513Z" fill="#2DAF6B"/>
</svg>4.8</span></p>
        <p>(920+ reviews)</p>
      </div>
      <a class="book_free_call_btn" href="#newScheduleBox">Book a Free Call</a>
    </div>
    `;

    document.head.insertAdjacentHTML("beforeend", newStyle);

    if (document.querySelector(".footer-start-free-trial a.btn.primary-solid-yellow")) {
      document.querySelector(".footer-start-free-trial a.btn.primary-solid-yellow").href = "#newScheduleBox";
    }

    if (!document.querySelector(".greetings_box")) {
      document.querySelector(".academy-waiting-left-inside").insertAdjacentHTML("beforebegin", firstSection);
    }
    if (!document.querySelector(".new_schedule_box")) {
      document.querySelector(".block-grantme-acuity.block-schedule-consulation").insertAdjacentHTML("beforebegin", secondSection);
    }
    if (!document.querySelector(".as_seen_on_box")) {
      document.querySelector("#block-scheduleconsulationheaderblock").insertAdjacentHTML("afterend", thirdSection);
    }
    document.querySelector("#block-faqstartfreetrialacademy-2").insertAdjacentHTML("afterend", competitionNextSteps);
    document.querySelector("#block-whattoexpectonthecallscheduleconsultation").insertAdjacentHTML("afterend", slider);

    if (document.querySelector(".greetings_box")) {
      document.querySelector(".funding_price").textContent = document.querySelector(".marketing b.clr-yellow").textContent;
      document.querySelectorAll(".grade_var").forEach((el) => {
        el.textContent = document.querySelector(".u_l")?.textContent;
      });
      let paramsLocation = new URLSearchParams(window.location.search);

      if (paramsLocation.get("user_type") === "parent") {
        document.querySelector(".person_name_var").textContent = document.querySelector("#edit-parent-first-name").value;
        document.querySelector(".your_person_var").textContent = "Your Child Is";
        if (document.querySelector("#edit-parent-first-name").value !== "") {
          document.querySelector(`#yourInformationForm input[name='firstName']`).value = document.querySelector("#edit-parent-first-name").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='firstName']`));
        }
        if (document.querySelector("#edit-parent-last-name").value !== "") {
          document.querySelector(`#yourInformationForm input[name='lastName']`).value = document.querySelector("#edit-parent-last-name").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='lastName']`));
        }
        if (document.querySelector("#edit-parent-email").value !== "") {
          document.querySelector(`#yourInformationForm input[name='email']`).value = document.querySelector("#edit-parent-email").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='email']`));
        }
        if (document.querySelector("#edit-parent-phone-number").value !== "") {
          document.querySelector(`#yourInformationForm input[name='phoneNumber']`).value = document.querySelector("#edit-parent-phone-number").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='phoneNumber']`));
        }
      } else {
        document.querySelector(".person_name_var").textContent = document.querySelector("#edit-first-name").value;
        document.querySelector(".your_person_var").textContent = "You Are";
        if (document.querySelector("#edit-first-name").value !== "") {
          document.querySelector(`#yourInformationForm input[name='firstName']`).value = document.querySelector("#edit-first-name").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='firstName']`));
        }
        if (document.querySelector("#edit-last-name").value !== "") {
          document.querySelector(`#yourInformationForm input[name='lastName']`).value = document.querySelector("#edit-last-name").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='lastName']`));
        }
        if (document.querySelector("#edit-email").value !== "") {
          document.querySelector(`#yourInformationForm input[name='email']`).value = document.querySelector("#edit-email").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='email']`));
        }
        if (document.querySelector("#edit-phone-number").value !== "") {
          document.querySelector(`#yourInformationForm input[name='phoneNumber']`).value = document.querySelector("#edit-phone-number").value;
          validationForm(document.querySelector(`#yourInformationForm input[name='phoneNumber']`));
        }
      }
      // tooltip
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function") {
          clearInterval(tippyRun);
          document.querySelectorAll("[data-title]").forEach((el) => {
            if (innerWidth <= 768) {
              tippy(el, {
                content: el.getAttribute("data-title"),
                trigger: "click",
                placement: "bottom",
                appendTo: function () {
                  return document.querySelector(".tooltip_wrapper");
                },
                onTrigger() {
                  pushDataLayer("exp_bookpage_fs_tooltip", "Interaction", "Tooltip", "First screen");
                },
              });
            } else {
              tippy(el, {
                content: el.getAttribute("data-title"),
                placement: "bottom",
                appendTo: function () {
                  return document.querySelector(".tooltip_wrapper");
                },
                onTrigger() {
                  pushDataLayer("exp_bookpage_fs_tooltip", "Interaction", "Tooltip", "First screen");
                },
              });
            }
          });
        }
      }, 700);
    }

    if (window.innerWidth <= 768) {
      document.body.insertAdjacentHTML("afterbegin", stickyBox);
      if (document.querySelector(".sticky_box")) {
        const element = document.querySelector(".sticky_box");
        const elemClose = document.querySelector("#block-scheduleconsulationheaderblock");

        function visible(target) {
          if (target.getBoundingClientRect().bottom < 0) {
            element.style.display = "flex";
          } else {
            element.style.display = "none";
          }
        }

        window.addEventListener("scroll", function () {
          visible(elemClose);
        });

        visible(elemClose);
      }
    } else {
      document.querySelector("#block-landingpageheader").insertAdjacentHTML("afterend", stickyHeader);
      if (document.querySelector(".sticky_header")) {
        const element = document.querySelector(".navbar-default");
        const elemClose = document.querySelector("#block-scheduleconsulationheaderblock");

        function visible(target) {
          if (document.querySelector(".our_consultants_wrapper")?.getBoundingClientRect().top < 0) {
            element.style.top = "-80px";
          } else {
            element.style.top = "0";
          }

          if (target.getBoundingClientRect().bottom < 0) {
            element.classList.add("is_fixed");
            element.style.top = "0";
          } else {
            if (element.classList.contains("is_fixed")) {
              element.classList.remove("is_fixed");
              element.style.top = "0";
            }
          }
        }
        window.addEventListener("scroll", function () {
          visible(elemClose);
        });
        visible(elemClose);
      }
    }
    if (document.querySelector("[data-reviews]")) {
      document.querySelectorAll("[data-reviews]").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget.getAttribute("data-count") === "1") {
            pushDataLayer("exp_bookpage_fs_reviews", "Reviews", "Link", "First screen");
          } else if (e.currentTarget.getAttribute("data-count") === "2") {
            pushDataLayer("exp_bookpage_sticky_review", "Reviews", "Link", "Sticky button");
          }
          if (window.innerWidth <= 768) {
            document.querySelector("#block-trustpilotwidgetstartfreetrial").scrollIntoView({ block: "start", behavior: "smooth" });
          } else {
            document.querySelector("#block-trustpilotwidgetstartfreetrial").scrollIntoView({ block: "center", behavior: "smooth" });
          }
          // if (!el.closest(".navbar-default")?.classList.contains("is_fixed")) {
          // }
        });
      });
    }

    if (window.innerWidth > 768) {
      document.querySelectorAll('[href="#newScheduleBox"]').forEach((el) => {
        el.href = "#block-scheduleconsulationheaderblock";
      });
    }

    let slickInterval = setInterval(() => {
      if (typeof jQuery(".testimonials_slider").slick === "function") {
        clearInterval(slickInterval);
        //  slider
        let slider = jQuery(".testimonials_slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: ".testimonials_arrow_prev",
          nextArrow: ".testimonials_arrow_next",
          dots: false,
          infinite: false,
          // adaptiveHeight: true,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
        slider.on("swipe", function () {});
        document.querySelectorAll(".slick-arrow").forEach((el) => {
          el.addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("testimonials_arrow_prev")) {
              pushDataLayer("exp_bookpage_userssay_prev", "Previous", "Button", "What Our Students Say");
            } else {
              pushDataLayer("exp_bookpage_userssay_next", "Next", "Button", "What Our Students Say");
            }
          });
        });
      }
    }, 100);

    //   calendar
    let calendar = setInterval(() => {
      if (typeof jQuery("#calendarContainer").simpleCalendar === "function") {
        clearInterval(calendar);
        document.querySelector("#calendarContainer .ajax-throbber.sk-circle").remove();
        setCalendar();
        setNewEvents();
        document.querySelectorAll(".calendar header .simple-calendar-btn").forEach((el) => {
          el.addEventListener("click", (i) => {
            if (i.target.classList.contains("btn-prev")) {
              pushDataLayer("exp_bookpage_calendar_prev_mon", "Previous month", "Button", "Calendar");
            }
            if (i.target.classList.contains("btn-next")) {
              pushDataLayer("exp_bookpage_calendar_next_mon", "Next month", "Button", "Calendar");
            }
          });
        });
      }
    }, 600);

    function setCalendar() {
      jQuery("#calendarContainer").simpleCalendar({
        months: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
        days: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
        displayYear: true,
        fixedStartDay: true,
        displayEvent: true,
        disableEventDetails: false,
        disableEmptyDetails: true,
        events: [],
        onInit: function (calendar) {},
        onDateSelect: function (date, events) {
          console.log(`events`, events);
          if (events.length > 0) {
            pushDataLayer("exp_bookpage_calendar_day", "Day", "Select", "Calendar");
            document.querySelectorAll(".block-schedule-consulation ul.nav.nav-tabs a span.date").forEach((span) => {
              if (span.textContent.includes(`${new Intl.DateTimeFormat("en-US", { month: "short" }).format(new Date(date))} ${new Date(date).getDate()}`)) {
                span.closest("a").click();
                setTimeout(() => {
                  setArrTimes();
                }, 200);
              }
            });
            document.querySelector(".chosen_select div.select_custom").textContent = "Select a time";
            document.querySelector(".chosen_select div.select_custom").removeAttribute("data-selected");
            document.querySelector(".chosen_select div.select_custom").classList?.remove("is_active");
            document.querySelector(".confirm_time_btn").disabled = true;

            document.querySelector(".path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center").scrollIntoView({ block: "start", behavior: "smooth" });
            document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "2");
            if (document.querySelector(".nav_steps svg").classList.contains("svg_is_hidden")) {
              document.querySelector(".nav_steps svg").classList.remove("svg_is_hidden");
            }
            document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = "Select a Time (30 min)";
            document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "2";
            document.querySelector("#calendarContainer").classList.add("is_hidden");
            document.querySelector(".chosen_select").classList.remove("is_hidden");
            document.querySelector(".time_zone_wrapper").classList.add("is_hidden");
          }
        },
      });
    }

    function getTimeEvents() {
      let newEvent = {};
      document.querySelectorAll("[data-fulldatetime]").forEach((date) => {
        const dateStr = date.value.substring(0, 10);
        const timeStr = date.value.substring(11, 19);
        if (!newEvent[dateStr]) {
          newEvent[dateStr] = [];
        }
        newEvent[dateStr].push(timeStr);
      });
      return newEvent;
    }
    function setNewEvents() {
      let newEvent = getTimeEvents();
      let dates;
      let finalEvents;
      dates = Object.keys(newEvent);
      finalEvents = dates.map((d) => {
        return { startDate: new Date(d).getTime(), endDate: new Date(d).getTime() + 2000, summary: d };
      });
      let container = jQuery("#calendarContainer").simpleCalendar();
      let jQuerycalendar = container.data("plugin_simpleCalendar");
      jQuerycalendar.setEvents(finalEvents);
    }

    document.querySelector(".select_dropdown_wrapper span").after(document.querySelector(".timezone"));
    let t = setInterval(() => {
      if (typeof Intl.DateTimeFormat === "function" && document.querySelector(".select2-selection__rendered")) {
        clearInterval(t);
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        console.log(timeZone, `timeZone`);
        if (document.querySelector(".select2-selection__rendered")) {
          console.log(`document.querySelector(".select2-selection__rendered")`, document.querySelector(".select2-selection__rendered"));
          document.querySelector(".select2-selection__rendered").textContent = timeZone;
          if (document.querySelector(".calc_step_third")) {
            document.querySelector(".calc_step_third > p > span:last-child").textContent = timeZone;
          }
        }
      }
    }, 10);

    jQuery(".select-wrapper select").on("change", (e) => {
      console.log(`ONCHANGE`, e);
      pushDataLayer("exp_bookpage_calendar_timezone", "Time Zone", "Select", "Calendar");
      let container = jQuery("#calendarContainer").simpleCalendar();
      let jQuerycalendar = container.data("plugin_simpleCalendar");
      jQuerycalendar.setEvents([]);

      if (document.querySelector(".ajax-progress.ajax-progress-fullscreen")) {
        let f = setInterval(() => {
          if (!document.querySelector(".ajax-progress.ajax-progress-fullscreen")) {
            clearInterval(f);
            document.querySelector(".path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center").scrollIntoView({ block: "start", behavior: "smooth" });
            setNewEvents();
          }
        }, 10);
      }
    });
    //   click on svg Back
    if (document.querySelector(".new_schedule")) {
      document.querySelector(".new_schedule .nav_steps svg").addEventListener("click", (el) => {
        document.querySelector(".path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center").scrollIntoView({ block: "start", behavior: "smooth" });
        if (el.currentTarget.getAttribute("data-navsteps") === "2") {
          pushDataLayer("exp_bookpage_calendar_back_2", "Back step 2", "Button", "Calendar");
          document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "1");
          el.currentTarget.classList.add("svg_is_hidden");
          document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = "Select a Day";
          document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "1";
          if (document.querySelector("#calendarContainer").classList.contains("is_hidden")) {
            document.querySelector("#calendarContainer").classList.remove("is_hidden");
          }
          document.querySelector(".chosen_select").classList.add("is_hidden");
          document.querySelector(".time_zone_wrapper").classList.remove("is_hidden");
        }
        if (el.currentTarget.getAttribute("data-navsteps") === "3") {
          pushDataLayer("exp_bookpage_calendar_back_3", "Back step 3", "Button", "Calendar");
          document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "2");
          document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = "Select a Time (30 min)";
          document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "2";
          document.querySelector(".chosen_select").classList.remove("is_hidden");
          document.querySelector(".calc_step_third").classList.add("is_hidden");
        }
      });
    }
    // choose select
    function setListTimes(title, val) {
      return `  <li data-time="${val}">${title}</li>`;
    }

    function setArrTimes(id) {
      document.querySelector(".chosen_select ul").innerHTML = "";
      let arrayTime = [];

      document.querySelectorAll(".block-schedule-consulation .tab-content>.active label").forEach((time) => {
        arrayTime.push({ t: time.querySelector("span").textContent, val: time.querySelector("input").getAttribute("data-fulldatetime") });
      });

      arrayTime.forEach((el) => {
        let time = el.t;
        let value = el.val;

        document.querySelector(".chosen_select ul").insertAdjacentHTML("beforeend", setListTimes(time, value));
      });
      document.querySelectorAll(".chosen_select ul li").forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.stopPropagation();
          pushDataLayer("exp_bookpage_calendar_selecttime_opt", "Select a time", "Selected option", "Calendar");
          document.querySelectorAll(".block-schedule-consulation .tab-content>.active label").forEach((time) => {
            if (e.target.getAttribute("data-time") === time.querySelector("input").getAttribute("data-fulldatetime")) {
              time.querySelector("input").click();
              setTimeout(() => {
                time.nextElementSibling.click();
              }, 500);
            }
          });
          jQuery(".chosen_select div.options_custom").toggleClass("active");
          if (jQuery(".chosen_select div.options_custom").hasClass("active")) {
            jQuery(".chosen_select div.options_custom").slideDown();
          } else {
            jQuery(".chosen_select div.options_custom").slideUp();
          }
          document.querySelector(".chosen_select div.select_custom").textContent = e.target.textContent;
          document.querySelector(".chosen_select div.select_custom").setAttribute("data-selected", e.target.getAttribute("data-time"));
          document.querySelector(".chosen_select div.select_custom").classList?.toggle("is_visit");
          document.querySelector(".chosen_select div.select_custom").classList?.add("is_active");
          document.querySelector(".calc_step_third > p .full_date_time").textContent = e.target.getAttribute("data-time");

          document.querySelectorAll(".chosen_select ul li").forEach((i) => {
            i.classList?.remove("is_active");
          });
          e.target.classList.add("is_active");

          if (document.querySelector(".chosen_select div.select_custom").getAttribute("data-selected") && document.querySelector(".confirm_time_btn:disabled")) {
            document.querySelector(".confirm_time_btn:disabled").disabled = false;
          }
        });
      });
    }

    let hamburger = jQuery(".chosen_select div.select_custom");
    let menu = jQuery(".chosen_select div.options_custom");

    jQuery(document).on("click", (e) => {
      let target = e.target;
      let its_menu = target == menu || menu.hasClass(target);
      let its_hamburger = target == hamburger;
      let menu_is_active = menu.hasClass("active");

      if (!its_menu && !its_hamburger && menu_is_active && menu.has(e.target).length === 0 && e.target.getAttribute("type") !== "checkbox" && !e.target.getAttribute("data-checkboxid")) {
        menu.toggleClass("active");
        if (jQuery(".chosen_select div.options_custom").hasClass("active")) {
          jQuery(".chosen_select div.options_custom").slideDown();
        } else {
          jQuery(".chosen_select div.options_custom").slideUp();
        }
        hamburger.toggleClass("is_visit");
      }
    });

    if (document.querySelector(".options_custom")) {
      //   setArrTimes();

      jQuery(".chosen_select div.select_custom").on("click", (e) => {
        e.stopPropagation();
        pushDataLayer("exp_bookpage_calendar_selecttime_sel", "Select a time", "Select", "Calendar");
        if (!hamburger.has(e.target).length === 0) return;
        if (hamburger.has(e.target).length === 0) {
          e.target.classList.toggle("is_visit");
          jQuery(".chosen_select div.options_custom").toggleClass("active");
          if (jQuery(".chosen_select div.options_custom").hasClass("active")) {
            jQuery(".chosen_select div.options_custom").slideDown();
          } else {
            jQuery(".chosen_select div.options_custom").slideUp();
          }
        }
      });

      // Click on confirm_time_btn
      document.querySelector(".confirm_time_btn").addEventListener("click", (e) => {
        e.preventDefault();
        pushDataLayer("exp_bookpage_calendar_confirm", "Confirm", "Button", "Calendar");
        document.querySelector(".path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center").scrollIntoView({ block: "start", behavior: "smooth" });
        document.querySelector(".nav_steps svg").setAttribute("data-navsteps", "3");
        if (document.querySelector(".select-wrapper select").value === "") {
          document.querySelector(".calc_step_third > p > span:last-child").textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
        } else {
          document.querySelector(".calc_step_third > p > span:last-child").textContent = document.querySelector(".select-wrapper select").value;
        }
        document.querySelector(".new_schedule .nav_steps > p:nth-of-type(1)").textContent = `Free Call with a Student  Success Specialist`;
        document.querySelector(".new_schedule .nav_steps > p .step_active").textContent = "3";
        document.querySelector(".chosen_select").classList.add("is_hidden");
        document.querySelector(".time_zone_wrapper").classList.add("is_hidden");
        document.querySelector(".calc_step_third").classList.remove("is_hidden");
      });
    }

    if (document.querySelectorAll("#yourInformationForm")) {
      document.querySelectorAll("#yourInformationForm label").forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.currentTarget.querySelector("input").getAttribute("name") === "firstName") {
            if (!e.currentTarget.getAttribute("data-test")) {
              pushDataLayer("exp_bookpage_calendar_fname", "Enter details. First name", "Input", "Calendar");
            }
            e.currentTarget.setAttribute("data-test", "1");
          }
          if (e.currentTarget.querySelector("input").getAttribute("name") === "lastName") {
            if (!e.currentTarget.getAttribute("data-test")) {
              pushDataLayer("exp_bookpage_calendar_lname", "Enter details. Last Name", "Input", "Calendar");
            }
            e.currentTarget.setAttribute("data-test", "1");
          }

          if (e.currentTarget.querySelector("input").getAttribute("name") === "phoneNumber") {
            if (!e.currentTarget.getAttribute("data-test")) {
              pushDataLayer("exp_bookpage_calendar_phone", "Enter details. Phone number", "Input", "Calendar");
            }
            e.currentTarget.setAttribute("data-test", "1");
          }
          if (e.currentTarget.querySelector("input").getAttribute("name") === "newFirstNameGuest") {
            if (!e.currentTarget.getAttribute("data-test")) {
              pushDataLayer("exp_bookpage_calendar_fname_guest", "Enter details. First name Guest", "Input", "Calendar");
            }
            e.currentTarget.setAttribute("data-test", "1");
          }
          if (e.currentTarget.querySelector("input").getAttribute("name") === "newLastNameGuest") {
            if (!e.currentTarget.getAttribute("data-test")) {
              pushDataLayer("exp_bookpage_calendar_lname_guest", "Enter details. Last Name Guest", "Input", "Calendar");
            }
            e.currentTarget.setAttribute("data-test", "1");
          }
          if (e.currentTarget.querySelector("input").getAttribute("name") === "newPhoneNumberGuest") {
            if (!e.currentTarget.getAttribute("data-test")) {
              pushDataLayer("exp_bookpage_calendar_phone_guest", "Enter details. Phone number Guest", "Input", "Calendar");
            }
            e.currentTarget.setAttribute("data-test", "1");
          }
          setTimeout(() => {
            if (el.getAttribute("data-test")) {
              el.removeAttribute("data-test");
            }
          }, 300);
        });
      });
      document.querySelectorAll("#yourInformationForm input").forEach((i) => {
        if (i.value !== "") {
          i.previousElementSibling.classList.add("is_active");
        }
        setTimeout(() => {
          if (document.querySelector(`.text_validation.phone_number_var`) !== null) {
            console.log(`<<<<<<<<<<<<<<<<<,`);
            document.querySelector("#yourInformationForm .schedule_call_btn").disabled = true;
          }
        }, 500);

        i.addEventListener("input", (e) => {
          validationForm(e.target);

          let paramsLocation = new URLSearchParams(window.location.search);
          if (paramsLocation.get("user_type") === "parent") {
            if (e.target.getAttribute("name") === "firstName") {
              document.querySelector("#edit-parent-first-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "lastName") {
              document.querySelector("#edit-parent-last-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "email") {
              document.querySelector("#edit-parent-email").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "phoneNumber") {
              document.querySelector("#edit-parent-phone-number").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newFirstNameGuest") {
              document.querySelector("#edit-first-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newLastNameGuest") {
              document.querySelector("#edit-last-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newEmailGuest") {
              document.querySelector("#edit-email").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newPhoneNumberGuest") {
              document.querySelector("#edit-phone-number").value = e.target.value;
            }
          } else {
            if (e.target.getAttribute("name") === "firstName") {
              document.querySelector("#edit-first-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "lastName") {
              document.querySelector("#edit-last-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "email") {
              document.querySelector("#edit-email").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "phoneNumber") {
              document.querySelector("#edit-phone-number").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newFirstNameGuest") {
              document.querySelector("#edit-parent-first-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newLastNameGuest") {
              document.querySelector("#edit-parent-last-name").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newEmailGuest") {
              document.querySelector("#edit-parent-email").value = e.target.value;
            }
            if (e.target.getAttribute("name") === "newPhoneNumberGuest") {
              document.querySelector("#edit-parent-phone-number").value = e.target.value;
            }
          }
          if (!e.target.previousElementSibling.classList.contains("is_active")) {
            e.target.previousElementSibling.classList.add("is_active");
          }
          if (e.target.closest(".your_parent_information_wrapper")) {
            if (e.target.value === "") {
              e.target.closest("label").nextElementSibling?.remove();
            }
          }
        });
        i.addEventListener("blur", (e) => {
          if (e.target.previousElementSibling.classList.contains("is_active") && e.target.value === "") {
            e.target.previousElementSibling.classList.remove("is_active");
          }
          if (e.target.closest(".your_parent_information_wrapper")) {
            if (e.target.value === "") {
              e.target.closest("label").nextElementSibling?.remove();
            }
          }
        });
        i.addEventListener("focus", (e) => {
          if (!e.target.previousElementSibling.classList.contains("is_active")) {
            e.target.previousElementSibling.classList.add("is_active");
          }
        });
      });

      //Click on add_guests_btn
      document.querySelector(".add_guests_btn").addEventListener("click", (e) => {
        pushDataLayer("exp_bookpage_calendar_addguest", "Enter details. Add Guests", "Link", "Calendar");
        e.target.classList.add("is_hidden");
        document.querySelector(".your_parent_information_wrapper").classList.remove("is_hidden");
      });

      //
      window.onunload = unloadPage;
      function unloadPage() {
        console.log("unload event detected!");
        document.querySelector(".loader_form_var")?.remove();
      }
      document.querySelector("#yourInformationForm .schedule_call_btn").addEventListener("click", (e) => {
        e.preventDefault();
        pushDataLayer("exp_bookpage_calendar_schedule", "Schedule a Call", "Button", "Calendar");
        if (!document.querySelector(".loader_form_var")) {
          document.querySelector(".new_schedule").insertAdjacentHTML(
            "afterbegin",
            `<div class="loader_form_var"><div class="ajax-throbber sk-circle">
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
          <div class="sk-circle-dot"></div>
        </div></div>`
          );
        }

        let paramsLocation = new URLSearchParams(window.location.search);
        if (paramsLocation.get("user_type") === "parent") {
          if (document.querySelector(`#yourInformationForm input[name='newFirstNameGuest']`).value === "") {
            document.querySelector("#edit-first-name").value = "test";
          }
          if (document.querySelector(`#yourInformationForm input[name='newLastNameGuest']`).value === "") {
            document.querySelector("#edit-last-name").value = "test";
          }
          if (document.querySelector(`#yourInformationForm input[name='newEmailGuest']`).value === "") {
            document.querySelector("#edit-email").value = "test@test.com";
          }
          if (document.querySelector(`#yourInformationForm input[name='newPhoneNumberGuest']`).value === "") {
            document.querySelector("#edit-phone-number").value = "(000) 000-0000";
          }
        } else {
          if (document.querySelector(`#yourInformationForm input[name='newFirstNameGuest']`).value === "") {
            document.querySelector("#edit-parent-first-name").value = "test";
          }
          if (document.querySelector(`#yourInformationForm input[name='newLastNameGuest']`).value === "") {
            document.querySelector("#edit-parent-last-name").value = "test";
          }
          if (document.querySelector(`#yourInformationForm input[name='newEmailGuest']`).value === "") {
            document.querySelector("#edit-parent-email").value = "test@test.com";
          }
          if (document.querySelector(`#yourInformationForm input[name='newPhoneNumberGuest']`).value === "") {
            document.querySelector("#edit-parent-phone-number").value = "(000) 000-0000";
          }
        }

        document.querySelector("#edit-book-call")?.click();
      });
    }

    function validationForm(target) {
      let inputValueFirstName = document.querySelector(`#yourInformationForm input[name='firstName']`).value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$/);
      let inputValueLastName = document.querySelector(`#yourInformationForm input[name='lastName']`).value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$/);
      let inputValueEmail = document.querySelector(`#yourInformationForm input[name='email']`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      let mask;

      let inputValueFirstNameGuest = document.querySelector(`#yourInformationForm input[name='newFirstNameGuest']`).value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$/);
      let inputValueLastNameGuest = document.querySelector(`#yourInformationForm input[name='newLastNameGuest']`).value.match(/^[а-яА-ЯёЁa-zA-Z0-9]+$/);
      let inputValueEmailGuest = document.querySelector(`#yourInformationForm input[name='newEmailGuest']`).value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      let maskGuest;

      if (target.getAttribute("name") === "firstName") {
        if (inputValueFirstName == null) {
          document.querySelector(`#yourInformationForm input[name='firstName']`)?.closest("label").classList.add("label_error");
          if (!document.querySelector(`.text_validation.name_var`)) {
            document.querySelector(`#yourInformationForm input[name='firstName']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation name_var">Please enter First name without spaces or special characters.</p>`);
          }
        } else {
          document.querySelector(`#yourInformationForm input[name='firstName']`)?.closest("label").classList.remove("label_error");
          document.querySelector(`.text_validation.name_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
      if (target.getAttribute("name") === "lastName") {
        if (inputValueLastName === null) {
          document.querySelector(`#yourInformationForm input[name='lastName']`)?.closest("label").classList.add("label_error");
          if (!document.querySelector(`.text_validation.lastName_var`)) {
            document.querySelector(`#yourInformationForm input[name='lastName']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation lastName_var">Please enter Last name without spaces or special characters.</p>`);
          }
        } else {
          document.querySelector(`#yourInformationForm input[name='lastName']`)?.closest("label").classList.remove("label_error");
          document.querySelector(`.text_validation.lastName_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
      if (target.getAttribute("name") === "email") {
        if (inputValueEmail === null) {
          document.querySelector(`#yourInformationForm input[name='email']`)?.closest("label").classList.add("label_error");
          if (!document.querySelector(`.text_validation.email_var`)) {
            document.querySelector(`#yourInformationForm input[name='email']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation email_var">Email does not contain a valid email.</p>`);
          }
        } else {
          document.querySelector(`#yourInformationForm input[name='email']`)?.closest("label").classList.remove("label_error");
          document.querySelector(`.text_validation.email_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
      if (target.getAttribute("name") === "phoneNumber" || document.querySelector(`#yourInformationForm input[name='phoneNumber']`).value === "") {
        let element = document.querySelector(`#yourInformationForm input[name='phoneNumber']`);
        let maskOptions = {
          mask: "(000) 000-0000",
          lazy: true,
        };
        let s = setInterval(() => {
          if (typeof IMask === "function") {
            clearInterval(s);
            mask = new IMask(element, maskOptions);
            if (mask._unmaskedValue.length !== 10) {
              if (!document.querySelector(`.text_validation.phone_number_var`)) {
                document.querySelector(`#yourInformationForm input[name='phoneNumber']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation phone_number_var">Phone Number does not contain a valid phone number.</p>`);
              }
            }
            if (mask._unmaskedValue.length === 10) {
              document.querySelector(`.text_validation.phone_number_var`)?.remove();
              target.previousElementSibling.classList.add("is_active");
              if (target.closest("label").classList.contains("no_content")) {
                target.closest("label").classList.remove("no_content");
              }
            }
          }
        }, 100);
      }

      if (inputValueFirstName !== null && inputValueLastName !== null && inputValueEmail !== null) {
        setTimeout(() => {
          if (document.querySelector(`.text_validation.phone_number_var`) == null && document.querySelector(`.text_validation.name_guest_var`) == null && document.querySelector(`.text_validation.last_name_guest_var`) == null && document.querySelector(`.text_validation.phone_number_guest_var`) == null) {
            if (document.querySelector("#yourInformationForm .schedule_call_btn:disabled")) {
              document.querySelector("#yourInformationForm .schedule_call_btn:disabled").disabled = false;
            }
          } else {
            document.querySelector("#yourInformationForm .schedule_call_btn").disabled = true;
          }
        }, 100);
      } else {
        document.querySelector("#yourInformationForm .schedule_call_btn").disabled = true;
      }

      if (target.getAttribute("name") === "newFirstNameGuest") {
        if (inputValueFirstNameGuest === null) {
          document.querySelector(`#yourInformationForm input[name='newFirstNameGuest']`)?.closest("label").classList.add("label_error");
          if (!document.querySelector(`.text_validation.name_guest_var`)) {
            document.querySelector(`#yourInformationForm input[name='newFirstNameGuest']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation name_guest_var">Please enter First name without spaces or special characters.</p>`);
          }
        } else {
          document.querySelector(`#yourInformationForm input[name='newFirstNameGuest']`)?.closest("label").classList.remove("label_error");
          document.querySelector(`.text_validation.name_guest_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
      if (target.getAttribute("name") === "newLastNameGuest") {
        if (inputValueLastNameGuest === null) {
          document.querySelector(`#yourInformationForm input[name='newLastNameGuest']`)?.closest("label").classList.add("label_error");
          if (!document.querySelector(`.text_validation.last_name_guest_var`)) {
            document.querySelector(`#yourInformationForm input[name='newLastNameGuest']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation last_name_guest_var">Please enter Last name without spaces or special characters.</p>`);
          }
        } else {
          document.querySelector(`#yourInformationForm input[name='newLastNameGuest']`)?.closest("label").classList.remove("label_error");
          document.querySelector(`.text_validation.last_name_guest_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
      if (target.getAttribute("name") === "newEmailGuest") {
        if (inputValueEmailGuest === null) {
          document.querySelector(`#yourInformationForm input[name='newEmailGuest']`)?.closest("label").classList.add("label_error");
          if (!document.querySelector(`.text_validation.email_guest_var`)) {
            document.querySelector(`#yourInformationForm input[name='newEmailGuest']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation email_guest_var">Email does not contain a valid email.</p>`);
          }
        } else {
          document.querySelector(`#yourInformationForm input[name='newEmailGuest']`)?.closest("label").classList.remove("label_error");
          document.querySelector(`.text_validation.email_guest_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
      if (target.getAttribute("name") === "newPhoneNumberGuest") {
        let element = document.querySelector(`#yourInformationForm input[name='newPhoneNumberGuest']`);
        let maskOptions = {
          mask: "(000) 000-0000",
          lazy: true,
        };
        maskGuest = new IMask(element, maskOptions);
        if (maskGuest._unmaskedValue.length !== 10) {
          if (!document.querySelector(`.text_validation.phone_number_guest_var`)) {
            document.querySelector(`#yourInformationForm input[name='newPhoneNumberGuest']`)?.closest("label").insertAdjacentHTML("afterend", `<p class="text_validation phone_number_guest_var">Phone Number does not contain a valid phone number.</p>`);
          }
        }
        if (maskGuest._unmaskedValue.length === 10) {
          document.querySelector(`.text_validation.phone_number_guest_var`)?.remove();
          target.previousElementSibling.classList.add("is_active");
          if (target.closest("label").classList.contains("no_content")) {
            target.closest("label").classList.remove("no_content");
          }
        }
      }
    }
    document.querySelector(".reviews_btn_box .book_free_call_btn")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_fs_book", "Book a Free Call", "Button", "First screen");
    });
    document.querySelector("[href='tel:+18004934084']")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_notimes_phone", "Phone", "Link", "No suitable times for you");
    });
    document.querySelector(".testimonials_item_last .btn")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_userssay_see", "See More", "Button", "What Our Students Say");
    });
    document.querySelector(".footer-start-free-trial a.btn.primary-solid-yellow")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_ready_book", "Book A Call", "Button", "Ready To Get Started");
    });
    document.querySelector(".sticky_box .book_free_call_btn")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_sticky_book", "Book a Free Call", "Button", "Sticky button");
    });
    document.querySelector(".navbar-default .sticky_header .book_free_call_btn")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_sticky_book", "Book a Free Call", "Button", "Sticky button");
    });
    document.querySelector(".hs-faq-beacon-open")?.addEventListener("click", () => {
      pushDataLayer("exp_bookpage_faq_speak", "Speak With an Educator", "Link", "Frequently Asked Questions");
    });
    document.querySelectorAll(".wistia_responsive_padding").forEach((el) => {
      el.addEventListener("click", () => {
        pushDataLayer("exp_bookpage_userssay_int", "Interaction", "Video", "What Our Students Say");
      });
    });
    //
    document.querySelectorAll("#block-faqstartfreetrialacademy-2 #accordion .panel .panel-heading a").forEach((el) => {
      el.addEventListener("click", (link) => {
        if (link.currentTarget.closest(".panel-heading").nextElementSibling.classList.contains("in")) {
          pushDataLayer("exp_bookpage_faq_close", `${link.currentTarget.textContent}`, "Close question", "Frequently Asked Questions");
        } else {
          pushDataLayer("exp_bookpage_faq_open", `${link.currentTarget.textContent}`, "Open question", "Frequently Asked Questions");
        }
      });
    });
    //visibility elem
    let obs = new IntersectionObserver(visibility, {
      threshold: 1,
    });

    let obs2 = new IntersectionObserver(visibility2, {
      threshold: 1,
    });
    obs.observe(document.querySelector(".path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent .academy-waiting-left > .reviews_btn_box"));
    obs.observe(document.querySelector("body .consultation_descr_box > div.no_commitments_wrapper"));
    obs.observe(document.querySelector(".our_consultants_wrapper"));
    obs.observe(document.querySelector(".as_seen_on_box .count_txt_wrapper"));
    obs.observe(document.querySelector(".testimonials_arrows"));
    obs.observe(document.querySelector("#competition_step1 img"));
    obs.observe(document.querySelector(".persuasive_comparison_table_box .odds_txt_wrapper"));
    if (document.querySelector(".path-start-free-trial .our-scholars")) {
      obs.observe(document.querySelector(".path-start-free-trial .our-scholars"));
    }
    obs.observe(document.querySelector(".faq-help-text-wrapper"));
    obs.observe(document.querySelector("#competition_step2 img"));
    obs.observe(document.querySelector("#competition_step3 img"));
    obs.observe(document.querySelector(".footer-start-free-trial a.btn.primary-solid-yellow"));
    //
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
          if (i.target.classList.contains("reviews_btn_box")) {
            pushDataLayer("exp_bookpage_viewel_01", "Interaction", "View element on screen", "Your Child Is Eligible");
          }
          if (i.target.classList.contains("no_commitments_wrapper")) {
            pushDataLayer("exp_bookpage_viewel_02", "Interaction", "View element on screen", "Book a Free Grade");
          }
          if (i.target.classList.contains("our_consultants_wrapper")) {
            pushDataLayer("exp_bookpage_viewel_03", "Interaction", "View element on screen", "Schedule a Free Scholarship");
          }
          if (i.target.classList.contains("count_txt_wrapper")) {
            pushDataLayer("exp_bookpage_viewel_04", "Interaction", "View element on screen", "As Seen On");
          }
          if (i.target.classList.contains("testimonials_arrows")) {
            pushDataLayer("exp_bookpage_viewel_05", "Interaction", "View element on screen", "What Our Students Say");
          }
          if (i.target.getAttribute("alt") === "step 1") {
            pushDataLayer("exp_bookpage_viewel_06", "Interaction", "View element on screen", "Leave Your Competition In The Dust");
          }
          if (i.target.classList.contains("odds_txt_wrapper")) {
            pushDataLayer("exp_bookpage_viewel_07", "Interaction", "View element on screen", "Our 2022 University Admission Odds");
          }
          if (i.target.classList.contains("our-scholars")) {
            pushDataLayer("exp_bookpage_viewel_08", "Interaction", "View element on screen", "Hear From Our Scholars");
          }
          if (i.target.classList.contains("faq-help-text-wrapper")) {
            pushDataLayer("exp_bookpage_viewel_09", "Interaction", "View element on screen", "Frequently Asked Questions");
          }
          if (i.target.getAttribute("alt") === "step 2") {
            pushDataLayer("exp_bookpage_viewel_10", "Interaction", "View element on screen", "Stand Out & Get In");
          }
          if (i.target.getAttribute("alt") === "step 3") {
            pushDataLayer("exp_bookpage_viewel_11", "Interaction", "View element on screen", "Discover Your Dreams");
          }
          if (i.target.classList.contains("btn")) {
            pushDataLayer("exp_bookpage_viewel_12", "Interaction", "View element on screen", "Ready To Get Started");
          }

          obs.unobserve(i.target);
        }
        obs2.unobserve(i.target);
      });
    }
    pushDataLayer("exp_bookpage_loaded", " ", " ", " ");
    const record = setInterval(() => {
      if (typeof clarity === "function") {
        clearInterval(record);
        clarity("set", `booking_page_exp${eventVar}`, "variant_1");
      }
    }, 200);
    document.querySelector(".exp")?.remove();
  }
}, 500);
