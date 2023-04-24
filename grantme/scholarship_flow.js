let startFunk = setInterval(() => {
  if (document.querySelector("#block-scheduleconsulationheaderblock")) {
    clearInterval(startFunk);

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

    let newStyle = /*html */ `
    <style>
 .accent_var {
  color: #ebbd45;
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
}
.new_schedule_box{
    background: #e9f3fa;
    padding: 40px 16px;
}
.new_schedule_box h2 {
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
  max-width: 358px;
  width: 100%;
  height: 484px;
  background: #ffffff;
  border-radius: 6px;
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
  margin-top: 8px;
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
.sticky_box{
    position: fixed;
    bottom: 0;
    z-index: 999;
    background: #2B3E51;
    width: 100%;
    margin: 0;
    padding: 16px;
    display: none;
    justify-content: space-between;
}
.sticky_box .reviews_btn_wrapper{
    display: block;
}
.sticky_box .book_free_call_btn{
    max-width: 156px;
    margin: 0 0 0 10px;
    height: 48px;
    font-size: 16px;
    line-height: 16px;
    color: #2B3E51;
}
.sticky_box .reviews_btn_wrapper svg{
    display: block;
    margin-bottom: 6px;
}
.sticky_box .reviews_btn_wrapper p{
    display: inline-block;
}
.sticky_box .reviews_btn_wrapper p:last-child{
    margin-left: 1px !important;
}
@media (min-width: 768px) {
    .navbar-default.is_fixed{
    position: sticky;
    top: 0;
    left: 0;
    z-index: 111111111;
}
    .navbar-default .region.region-navigation{
display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .sticky_header{
width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
    }
    .sticky_header .book_free_call_btn{
height: 48px;
    max-width: 196px;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    margin: 0;
    display: none;
    }
    .navbar-default.is_fixed .sticky_header .book_free_call_btn{
        display: flex;
    }
    .sticky_header .reviews_btn_wrapper p:nth-of-type(1){
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
    color: #2DAF6B;
}
    .navbar-default {
    border-bottom: unset;
    background: #3E5062;
    padding: 4px 0;
}
.navbar-default .container {
    width: 100%;
    max-width: 1202px;
    padding: 0 16px;
}
#block-landingpageheader{
    flex: 0 0 141px;
}
.navbar-header .logo img {
    width: 141px;
}
    .path-schedule-consultation #scholarshipListContent .academy-waiting{
        display: flex !important;
            align-items: stretch !important;
    justify-content: center !important;
    }
    .reviews_btn_box{
        display: none;
    }
    .consultation_descr_box{
        padding: 24px 38px 24px 24px;
        margin: 42px 0 0;
    }
    .consultation_descr_box h2{
        font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: inherit;
    position: relative;
    }
    .consultation_descr_box h2::before{
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
    body .consultation_descr_box > div ul li{
        color: #CCCCCC;
    }
    body .consultation_descr_box > div ul li span{
        color: white;
    }
    body .consultation_descr_box > div + div {
    margin-top: 20px;
}
body .consultation_descr_box > div.no_commitments_wrapper p{
    font-weight: 600 !important;
}
.new_schedule{
    max-width: 100%;
    margin: 0 24px;
    height: 386px;
    width: auto;
}
    .greetings_box .win_scholarships_txt{
        font-weight: 400 !important;
    }
    .greetings_box .name_txt{
        font-size: 18px !important;
    line-height: 25px !important;
    color: #CCCCCC;
    }
    .greetings_box .name_txt span:last-child {
    display: inline-block;
    }
    .greetings_box .tooltip_wrapper{
        font-size: 36px !important;
            margin: 16px 0;
            max-width: 460px;
    }
    .path-schedule-consultation .block-schedule-consulation-header #scholarshipListContent .col-lg-5{
        padding: 0;
        width: 50%;
    }
    .path-schedule-consultation #scholarshipListContent, .path-book-call.path-start-free-trial.path-schedule-consultation #scholarshipListContent {
    padding: 60px 16px;
}
.path-start-free-trial #scholarshipListContent .academy-waiting{
    align-items: flex-start;
    justify-content: center;
}
.path-start-free-trial.path-schedule-consultation #scholarshipListContent .col-lg-7.center {
  padding: 0;
  width: 50%;
  margin-left: -6px;
}
.new_schedule_box {
    background: #FFFFFF;
    padding: 24px 0 0;
    border-radius: 6px;
}
.our_consultants_wrapper{
    background: #E9F3FA;
    padding: 24px 32px;
    text-align: left;
    border-radius: 0 0 6px 6px;
}
.new_schedule_box .new_schedule_descr {
    align-items: center;
    justify-content: center;
    margin: 16px 24px 24px;
    max-width: unset;
    padding: 0 0 16px;
    border-bottom: 1px solid #F2F2F2;
    gap: 28px;
}
.new_schedule_box h2{
        margin: 0 24px;
    max-width: unset;
}
body .our_consultants_wrapper h3{
        font-size: 16px !important;
            margin: 0 16px 16px 0 !important;
            display: inline-block;
}
.our_consultants_wrapper > div p{
    max-width: unset;
}
.our_consultants_wrapper > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.our_consultants_wrapper > p{
        font-size: 16px !important;
    line-height: 24px;
        margin-bottom: 0;
        display: inline-block;
}
    .as_seen_on_box {
    padding: 100px 16px;
}
.as_seen_on_box h2{
    font-weight: 600 !important;
font-size: 48px !important;
line-height: 72px !important;
margin-bottom: 56px !important;
}
.as_seen_on_box .img_wrapper{
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
.as_seen_on_box .count_txt_wrapper{
    padding: 40px;
    align-items: center;
        justify-content: center;
    gap: 120px;
}
.as_seen_on_box .count_txt_wrapper > div span{
    font-weight: 600;
font-size: 36px;
line-height: 36px;
}
.as_seen_on_box .count_txt_wrapper > div p{
    font-size: 18px;
line-height: 25px;
}
.what_users_say_box {
    padding: 50px 16px 0;
}
.what_users_say_box h2{
    font-weight: 600;
font-size: 48px;
line-height: 72px;
margin-bottom: 56px;
}
    .persuasive_comparison_table_box{
        padding: 100px 16px;
    }
    .persuasive_comparison_table_box h2{
            font-weight: 600;
        font-size: 48px;
line-height: 72px;
    max-width: 813px;
    margin: 0 auto 56px;
    }
    .persuasive_comparison_table_box .table .thead{
        padding: 20px 40px;
    }
    .persuasive_comparison_table_box .table .tbody {
    padding: 0 40px 20px;
}
.persuasive_comparison_table_box .table .tbody .tr .td:nth-child(2), .persuasive_comparison_table_box .table .tbody .tr .td:nth-child(3), .persuasive_comparison_table_box .table .thead .th:nth-child(2), .persuasive_comparison_table_box .table .thead .th:nth-child(3) {
    flex: 0 0 150px;
}
.persuasive_comparison_table_box .table .tbody .tr .td:nth-child(1), .persuasive_comparison_table_box .table .thead .th:nth-child(1) {
    flex: 0 0 302px;
}
.persuasive_comparison_table_box .table .tbody .tr .td{
    padding: 20px 0;
}
    .persuasive_comparison_table_box .table .thead .th span{
        font-family: 'Bitter', serif;
        font-weight: 600;
font-size: 18px;
line-height: 24px;
    }
    .persuasive_comparison_table_box .table .tbody .td span{
        font-family: 'Bitter', serif;
        font-weight: 700;
font-size: 18px;
line-height: 25px;
    }
    .persuasive_comparison_table_box .odds_txt_wrapper{
        margin-top: 20px;
    align-items: flex-start;
    justify-content: center;
    }
    .persuasive_comparison_table_box .odds_txt_wrapper p{
        font-family: 'Bitter', serif;
        font-weight: 700;
font-size: 18px;
line-height: 24px;
margin: 0 0 0 12px;
    }
    .competition-section{
        position: relative;
        padding: 260px 0 0;
    }
    .competition-section::before{
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
.competition_item{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.competition_item img{
    width: 53%;
    margin: -55px 0 0;
}
.competition_item > div{
    flex: 0 0 45%;
}
.competition_item#competition_step3{
    border-top: unset;
}
}
@media (min-width: 1200px) {
    .competition_item#competition_step1 > div{
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
        <span class="your_person_var">Your Child Is</span> Eligible For <span class="accent_var funding_price">$96,250</span> <span class="txt_relative">In Funding <svg data-title='Atlas cedarwood oil has natural sedative properties that can help reduce stress and anxiety. Its calming effects on the nervous system can promote relaxation and improve sleep quality, which can be beneficial for children with anxiety or sleep disturbances.' data-tolltip class="tooltip_btn" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C11 5.71667 10.904 5.479 10.712 5.287C10.52 5.095 10.2827 4.99933 10 5C9.71667 5 9.479 5.096 9.287 5.288C9.095 5.48 8.99933 5.71733 9 6C9 6.28333 9.096 6.521 9.288 6.713C9.48 6.905 9.71733 7.00067 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
            fill="white"
          />
        </svg></span>
      </p>
      <p class="win_scholarships_txt"><span class="accent_var">Grade 9 - 10</span> students can win 5x as many scholarships.</p>
    </section>
    <section class="reviews_btn_box">
      <h2>Book a <span class="accent_var">Free</span> call to find out how to get this scolarship</h2>
      <a class="book_free_call_btn" href="#newScheduleBox">Book a Free Call</a>
      <div class="reviews_btn_wrapper" data-reviews>
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
        <p>(879 reviews)</p>
      </div>
    </section>
    <section class="consultation_descr_box">
      <h2>Book a Free Grade 12 Scolarship Consultation</h2>
      <div>
        <h3>What you’ll learn on the call:</h3>
        <ul>
          <li>How to win <span>at least $3,600</span> in grants per year - guaranteed.</li>
          <li>Which scholarships and <span>funding opportunities</span> your child is eligible for based on their profile.</li>
          <li>How to <span>double your odds</span> of winning funding by creating a plan with our expert.</li>
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
      <div class="new_schedule"></div>
      <div class="our_consultants_wrapper">
        <h3>No suitable times for you?</h3>
        <p>Call us <a href="tel:+8004934084">(800) 493-4084</a></p>
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
      <h2>What Our Users Say</h2>
      <div class="users_say_slider">
            <div class="testimonials_video section_grey_radius">
      <div class="container container_video">
        <div class="testimonials_slider">
          <div class="testimonials_item"></div>
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
            <script src="https://fast.wistia.com/embed/medias/ytvyjkpqml.jsonp" async="" defer=""></script>
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
          <div class="competition_imgs">
            <ul class="competition_media_list">
              <li class="competition_img">
                <figure class="competiton_img_figure"><img src="https://grantme.ca/wp-content/uploads/2022/08/Graph-3-1.png" alt="step1" class="step1 img_hidden" /></figure>
              </li>
            </ul>
          </div>
          <div class="clear"></div>
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
      <div class="reviews_btn_wrapper">
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
        <p>(879 reviews)</p>
      </div>
      <a class="book_free_call_btn" href="#newScheduleBox">Book a Free Call</a>
    </div>
    `;

    let stickyHeader = /*html */ `
    <div class="sticky_header">
      <div class="reviews_btn_wrapper" data-reviews>
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
        <p>(879 reviews)</p>
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
      if (document.querySelector(".academy-waiting-left-inside h2.marketing ").textContent.includes("You Are")) {
        document.querySelector(".your_person_var").textContent = "You Are";
      }
      if (document.querySelector(".academy-waiting-left-inside h2.marketing ").textContent.includes("Your Child")) {
        document.querySelector(".your_person_var").textContent = "Your Child Is";
      }
      // tooltip
      let tippyRun = setInterval(() => {
        if (typeof tippy === "function") {
          clearInterval(tippyRun);
          console.log(`tippyRun`);

          document.querySelectorAll("[data-title]").forEach((el) => {
            tippy(el, {
              content: el.getAttribute("data-title"),
              //   trigger: "click",
              placement: "bottom",
              appendTo: function () {
                return document.querySelector(".tooltip_wrapper");
              },
              onTrigger(e) {
                console.log(`clicked`);
              },
            });
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
        console.log(el);
        el.addEventListener("click", () => {
          if (!el.closest(".navbar-default")?.classList.contains("is_fixed")) {
            document.querySelector(".report_card_section").scrollIntoView({ block: "center", behavior: "smooth" });
          }
        });
      });
    }

    let slickInterval = setInterval(() => {
      if (typeof jQuery(".testimonials_slider").slick === "function") {
        clearInterval(slickInterval);

        //  slider
        let slider = jQuery(".testimonials_slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: ".testimonials_arrow_prev",
          nextArrow: ".testimonials_arrow_next",
          dots: false,
          infinite: false,
        });
        slider.on("swipe", function () {});
      }
    }, 100);
  }
}, 500);
