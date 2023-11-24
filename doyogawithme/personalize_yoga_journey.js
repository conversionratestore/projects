let startFunkPersonalization = setInterval(() => {
  if (window.location.pathname === "/personalization") {
    clearInterval(startFunkPersonalization);

    let stylePersonalization = /*html */ `
      <style>
        body > .dialog-off-canvas-main-canvas,
        body > .visually-hidden.focusable.skip-link,
        body > .hc-nav-1{
            display: none !important;
        }
img {
  display: block;
  height: auto;
}
.accent_green {
  color: #017922;
}
#quizForYou {
  display: flex;
  border-radius: 0px 0px 8px 8px;
  background: #fff;
  justify-content: space-between;
  height: 100vh;
}
.img_wrapp {
  max-width: 620px;
  width: 100%;
}
.img_wrapp > img {
  width: 100%;
  height: 100%;
  display: none;
  object-fit: cover;
}
.quiz_wrapp {
  width: 60%;
  padding: 40px 100px;
  display: flex;
  flex-direction: column;
}
.top_part {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.btn_back {
  color: #027db8;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
}
.btn_back svg {
  margin-right: 4px;
}
.count_steps {
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}
.steps_list {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 24px 0 0;
  padding: 0;
}
.steps_link {
  width: 25%;
  border-radius: 30px;
  background: #e0e0e0;
  height: 6px;
}
.steps_link.active {
  background: #027db8;
}
.footer_quiz {
  margin: auto 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn_skip_question,
.btn_skip_personalization {
  color: #a5a5a5;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  text-decoration-line: underline;
  text-transform: capitalize;
  cursor: pointer;
}
.btn_next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  max-width: 329px;
  border-radius: 30px;
  background: #027db8;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  cursor: pointer;
}
.btn_next[disabled="1"] {
  background: #a5a5a5;
  cursor: unset;
}
.body_quiz {
  margin-top: 40px;
}
.body_quiz > div {
  display: none;
}
.body_quiz > div.active_page {
  display: block;
}
.start_page {
  padding-top: 110px;
  max-width: 480px;
}
.start_page h1 {
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 54px;
  margin: 0 0 24px;
  max-width: 450px;
}
.start_page > p {
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  max-width: 480px;
  margin: 0;
}
.btn_personalize_my_exp {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  width: 100%;
  height: 60px;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  text-transform: capitalize;
  margin: 40px auto 26px;
  cursor: pointer;
  border-radius: 30px;
  background: #027db8;
}
.btn_skip_personalization {
  text-align: center;
}
[count="start"] .btn_back,
[count="start"] .count_steps,
[count="start"] .steps_list,
[count="start"] .footer_quiz,
[count="finish"] .btn_back,
[count="finish"] .count_steps,
[count="finish"] .steps_list,
[count="finish"] .footer_quiz {
  display: none;
}
[count="start"] .top_part {
  justify-content: center;
}
[count="start"] .count_start,
[count="1"] .count_first,
[count="2"] .count_second,
[count="3"] .count_third,
[count="4"] .count_fourth,
[count="finish"] .count_finish {
  display: block;
}
.title_page {
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  margin: 0;
}
.third_page .title_page{
max-width: 620px;
}
.fourth_page .title_page{
max-width: 480px;
}
.option_txt {
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 38px;
  margin: 0;
}
.first_page .option_txt{
margin-top: 5px;
}
.choose_option_wrapp {
  margin-top: 30px;
  width: 100%;
}
.choose_option_wrapp input.custom_checkbox {
  z-index: -1;
  opacity: 0;
  height: 0;
  margin: 0;
  padding: 0;
  display: none;
}
.choose_option_wrapp label:not(:last-child) {
  margin-bottom: 16px;
}
.choose_option_wrapp label {
  position: relative;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
  padding: 10px 12px 10px 65px;
  margin: 0;
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
}
.choose_option_wrapp label:focus{
    outline: none !important;
}
.choose_option_wrapp label::before {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/beginner_icon.svg) no-repeat;
  background-size: contain;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
}
.choose_option_wrapp label[for="intermediate"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/intermediate_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="advanced"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/advanced_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="vinyasaFlow"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/vinyasa_flow_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="hatha"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/hatha_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="powerYoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/power_yoga_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="restorativeYin"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/restorative_yin_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="kundaliniYoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="yogaMeditationMindfulness"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="noneStylesYoga"]::before {
  content: unset;
}
.choose_option_wrapp label[for="noneStylesYoga"] {
  padding-left: 16px;
width: 100%;
}
.choose_option_wrapp label[for="coreStrengthStability"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/core_strength_stability_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="backStrengthPainRelief"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/back_strength_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="upperBodyStrengthToning"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/upper_body_strength_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="flexibilityJointMobility"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/flexibility_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="relaxationSleepImprovement"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/relaxation_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="mindfulnessMeditationTechniques"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="womensHealthPrenatalPostnatalPractices"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/health_prenatal_postnatal_practices_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="morningTravelVigorousEnergy"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/techniques_increase_energy_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="twenty"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/twenty_minutes_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="fortyFive"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/forty_five_minutes_icon.svg) no-repeat;
}
.choose_option_wrapp label[for="sixty"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/sixty_minutes_icon.svg) no-repeat;
}
.choose_option_wrapp label .choose_option_txt {
  max-width: 328px;
margin-right: 21px;
}
.choose_option_wrapp label .choose_option_txt b {
  font-size: 16px;
    margin-bottom: 5px;
    display: inline-block;
}
.choose_option_wrapp .checked_box {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 100px;
  border: 2px solid #e0e0e0;
  right: 12px;
}

.choose_option_wrapp .custom_checkbox:checked + label,
.choose_option_wrapp .custom_checkbox:checked + label .checked_box {
  border: 2px solid #027db8;
}
.choose_option_wrapp .custom_checkbox:checked + label .checked_box::after {
  content: "";
  position: absolute;
  width: 12.5px;
  height: 12.5px;
  border-radius: 100px;
  background: #027db8;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.choose_option_wrapp .custom_checkbox[type="checkbox"] + label .checked_box,
.choose_option_wrapp .custom_checkbox[type="checkbox"]:checked + label .checked_box {
  border-radius: 4px;
}
.choose_option_wrapp .custom_checkbox[type="checkbox"]:checked + label .checked_box::after {
  border-radius: unset;
}
.second_page .choose_option_wrapp,
.third_page .choose_option_wrapp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
}
.second_page .choose_option_wrapp label:not(:last-child),
.third_page .choose_option_wrapp label {
  width: 37%;
  margin: 0;
}
.second_page .choose_option_wrapp label:last-child .choose_option_txt {
  max-width: unset;
}
.third_page .choose_option_wrapp label .choose_option_txt {
  max-width: 192px;
  font-size: 16px;
}
#quizForYou[count="finish"] {
  flex-direction: row-reverse;
}
#quizForYou[count="finish"] .body_quiz {
  margin-top: 12px;
}
#quizForYou[count="finish"] .img_wrapp {
  position: relative;
  max-width: 690px;
}
#quizForYou[count="finish"] .img_wrapp::after {
  position: absolute;
  content: "";
  background: #027db8;
  max-width: 620px;
  width: 100%;
  height: 100%;
  right: 0;
}
#quizForYou[count="finish"] .img_wrapp > img.count_finish {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  max-height: 640px;
}
#quizForYou[count="finish"] .quiz_wrapp {
  padding: 66px 60px;
  width: 49%;
}
.finish_page > p {
  color: #555;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-transform: capitalize;
  margin: 0;
}
.finish_page .title_page {
  margin-bottom: 12px;
}
.finish_page > div > p{
    color: #555;
    font-family: "Manrope", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    text-transform: capitalize;
    max-width: 100%;
    margin: 0;
}
.finish_page > div > p:last-child{
    max-width: 600px;
}
.btn_explore_your_yoga_journey {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 480px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: #027db8;
  color: #fff;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  margin: 24px 0 0;
  padding: 5px;
  text-align: center;
  cursor: pointer;
}
.personalized_box {
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.personalized_list {
  width: 40%;
}
[data-name="preferredDuration"]{
    width: 57%;
}
[data-name="preferredDuration"] .personalized_txt_wrapp{
        display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 100%;
    flex-wrap: wrap;
}
.personalized_list[data-name="areasOfFocus"],
.personalized_list[data-name="yogaType"] {
  width: 100%;
}
.personalized_list_title {
  position: relative;
  color: #272727;
  font-family: "Manrope", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  margin: 0 0 6px;
  padding-left: 28px;
}
.personalized_list_title::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/lotus_icon.svg) no-repeat;
  background-size: contain;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.personalized_list_tag {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #f6f6f6;
  padding: 5px 12px 5px 42px;
  max-width: max-content;
  min-height: 34px;
  margin: 0;
}
.personalized_list_tag::before {
  position: absolute;
  content: "";
  width: 24px;
  height: 24px;
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/beginner_icon.svg) no-repeat;
  background-size: contain;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
}
.personalized_list_tag[data-tag="Beginner"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/beginner_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Intermediate"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/intermediate_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Advanced"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/advanced_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Vinyasa Flow"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/vinyasa_flow_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Hatha"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/hatha_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Power Yoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/power_yoga_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Restorative/Yin"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/restorative_yin_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Kundalini Yoga"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Yoga for Meditation and Mindfulness"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Core strength and stability"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/core_strength_stability_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Back strength and pain relief"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/back_strength_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Upper body strength and toning"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/upper_body_strength_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Flexibility and joint mobility"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/flexibility_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Relaxation and sleep improvement"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/relaxation_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Mindfulness and meditation techniques"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/yoga_meditation_mindfulness_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Women’s health, Prenatal and Postnatal practices"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/health_prenatal_postnatal_practices_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Techniques to increase energy"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/techniques_increase_energy_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="10-20 minutes"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/twenty_minutes_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="30-45 minutes"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/forty_five_minutes_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="60 minutes or more"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/sixty_minutes_icon.svg) no-repeat;
  background-size: contain;
}
.personalized_list_tag[data-tag="Different styles"]::before {
  background: url(https://conversionratestore.github.io/projects/doyogawithme/img/kundalini_yoga_icon.svg) no-repeat;
  background-size: contain;
}

.personalized_list[data-name="yogaType"] .personalized_txt_wrapp,
.personalized_list[data-name="areasOfFocus"] .personalized_txt_wrapp {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
/* new_list_yoga_classes */
.new_list_yoga_classes {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.33rem;
}

.new_list_yoga_classes li {
  display: none;
}
.field_media_img {
  display: block;
  transition: 0.1s ease-in-out;
  width: 100%;
  height: auto;
}

      </style>
      `;

    let htmlPersonalization = `
        <section id="quizForYou" count="start">
      <div class="img_wrapp">
        <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img_start.png" alt="yoga" class="count_start" />
        <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img1.png" alt="yoga" class="count_first" />
        <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img2.png" alt="yoga" class="count_second" />
        <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img3.png" alt="yoga" class="count_third" />
        <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img4.png" alt="yoga" class="count_fourth" />
        <img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_img_finish.png" alt="yoga" class="count_finish" />
      </div>
      <div class="quiz_wrapp">
        <div class="header_quiz">
          <div class="top_part">
            <div class="btn_back">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <g clip-path="url(#clip0_1925_30292)">
                  <path d="M2.99951 5.99997C2.99951 5.7849 3.08162 5.56987 3.24551 5.4059L8.40529 0.24617C8.73352 -0.0820566 9.26568 -0.0820566 9.59377 0.24617C9.92187 0.574263 9.92187 1.10632 9.59377 1.43457L5.02811 5.99997L9.59361 10.5654C9.92171 10.8936 9.92171 11.4256 9.59361 11.7537C9.26552 12.0821 8.73336 12.0821 8.40513 11.7537L3.24535 6.59404C3.08144 6.42999 2.99951 6.21495 2.99951 5.99997Z" fill="#027DB8" />
                </g>
                <defs>
                  <clipPath id="clip0_1925_30292">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs></svg
              >Back
            </div>
            <a href="/" class="logo_btn"><img src="https://conversionratestore.github.io/projects/doyogawithme/img/quiz_logo.svg" alt="logo" /></a>
            <div class="count_steps"><span class="active_step">1</span>/<span>4</span></div>
          </div>
          <ul class="steps_list">
            <li class="steps_link active"></li>
            <li class="steps_link"></li>
            <li class="steps_link"></li>
            <li class="steps_link"></li>
          </ul>
        </div>
        <div class="body_quiz">
          <div class="start_page active_page">
            <h1 class="main_title_page">Let’s Find Your Perfect Yoga Journey</h1>
            <p>Please take a moment to answer the following questions so we can curate the perfect yoga content for you.</p>
            <div class="btn_personalize_my_exp">Personalize my experience</div>
            <div class="btn_skip_personalization">Skip personalization</div>
          </div>
          <div class="first_page">
            <h2 class="title_page">Which best describes your current yoga experience level?</h2>
            <p class="option_txt">(Choose one option)</p>
            <div class="choose_option_wrapp">
              <input class="custom_checkbox" id="beginner" type="radio" name="level" value="beginner" />
              <label for="beginner" tabindex="0" data-name="Beginner"
                ><span class="choose_option_txt"
                  ><b>Beginner</b><br />
                  (New to yoga or have limited experience)</span
                >
                <span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="intermediate" type="radio" name="level" value="intermediate" />
              <label for="intermediate" tabindex="0" data-name="Intermediate"
                ><span class="choose_option_txt"
                  ><b>Intermediate</b><br />
                  (Have some experience and comfortable with basic poses)</span
                >
                <span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="advanced" type="radio" name="level" value="advanced" />
              <label for="advanced" tabindex="0" data-name="Advanced">
                <span class="choose_option_txt"
                  ><b>Advanced</b><br />
                  (Experienced yogi looking for challenging practices)</span
                >
                <span class="checked_box"></span
              ></label>
            </div>
          </div>
          <div class="second_page">
            <h2 class="title_page">What type of yoga classes are you most interested in?</h2>
            <div class="choose_option_wrapp">
              <input class="custom_checkbox" id="vinyasaFlow" type="checkbox" name="vinyasaFlow" value="vinyasaFlow" />
              <label for="vinyasaFlow" tabindex="0" data-name="Vinyasa Flow"
                ><span class="choose_option_txt"
                  ><b>Vinyasa Flow</b><br />
                  (Dynamic and fluid sequences)</span
                ><span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="hatha" type="checkbox" name="hatha" value="hatha" />
              <label for="hatha" tabindex="0" data-name="Hatha"
                ><span class="choose_option_txt"><b>Hatha</b> <br />(Gentle and foundational poses)</span><span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="powerYoga" type="checkbox" name="powerYoga" value="powerYoga" />
              <label for="powerYoga" tabindex="0" data-name="Power Yoga"
                ><span class="choose_option_txt"
                  ><b>Power Yoga</b><br />
                  (Energetic and strength-focused)</span
                ><span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="restorativeYin" type="checkbox" name="restorativeYin" value="restorativeYin" />
              <label for="restorativeYin" tabindex="0" data-name="Restorative/Yin"
                ><span class="choose_option_txt"
                  ><b>Restorative/Yin</b><br />
                  (Relaxing and deep stretching)</span
                ><span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="kundaliniYoga" type="checkbox" name="kundaliniYoga" value="kundaliniYoga" />
              <label for="kundaliniYoga" tabindex="0" data-name="Kundalini Yoga"
                ><span class="choose_option_txt"
                  ><b>Kundalini Yoga</b><br />
                  (Spiritual energy-focused yoga)</span
                ><span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="yogaMeditationMindfulness" type="checkbox" name="yogaMeditationMindfulness" value="yogaMeditationMindfulness" />
              <label for="yogaMeditationMindfulness" tabindex="0" data-name="Yoga for Meditation and Mindfulness"
                ><span class="choose_option_txt"><b>Yoga for Meditation and Mindfulness</b></span
                ><span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="noneStylesYoga" type="checkbox" name="noneStylesYoga" value="noneStylesYoga" />
              <label for="noneStylesYoga" tabindex="0" data-name="Different styles"><span class="choose_option_txt">I don’t have preferences and want to practice different styles</span><span class="checked_box"></span></label>
            </div>
          </div>
          <div class="third_page">
            <h2 class="title_page">Are there any specific areas you'd like to focus on?</h2>
            <div class="choose_option_wrapp">
              <input class="custom_checkbox" id="coreStrengthStability" type="checkbox" name="coreStrengthStability" value="coreStrengthStability" />
              <label for="coreStrengthStability" tabindex="0" data-name="Core strength and stability"><span class="choose_option_txt">Core strength and stability</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="backStrengthPainRelief" type="checkbox" name="backStrengthPainRelief" value="backStrengthPainRelief" />
              <label for="backStrengthPainRelief" tabindex="0" data-name="Back strength and pain relief"><span class="choose_option_txt">Back strength and pain relief</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="upperBodyStrengthToning" type="checkbox" name="upperBodyStrengthToning" value="upperBodyStrengthToning" />
              <label for="upperBodyStrengthToning" tabindex="0" data-name="Upper body strength and toning"><span class="choose_option_txt">Upper body strength and toning</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="flexibilityJointMobility" type="checkbox" name="flexibilityJointMobility" value="flexibilityJointMobility" />
              <label for="flexibilityJointMobility" tabindex="0" data-name="Flexibility and joint mobility"><span class="choose_option_txt">Flexibility and joint mobility</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="relaxationSleepImprovement" type="checkbox" name="relaxationSleepImprovement" value="relaxationSleepImprovement" />
              <label for="relaxationSleepImprovement" tabindex="0" data-name="Relaxation and sleep improvement"><span class="choose_option_txt">Relaxation and sleep improvement</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="mindfulnessMeditationTechniques" type="checkbox" name="mindfulnessMeditationTechniques" value="mindfulnessMeditationTechniques" />
              <label for="mindfulnessMeditationTechniques" tabindex="0" data-name="Mindfulness and meditation techniques"><span class="choose_option_txt">Mindfulness and meditation techniques</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="womensHealthPrenatalPostnatalPractices" type="checkbox" name="womensHealthPrenatalPostnatalPractices" value="womensHealthPrenatalPostnatalPractices" />
              <label for="womensHealthPrenatalPostnatalPractices" tabindex="0" data-name="Women’s health, Prenatal and Postnatal practices"><span class="choose_option_txt">Women’s health, Prenatal and Postnatal practices</span><span class="checked_box"></span></label>

              <input class="custom_checkbox" id="morningTravelVigorousEnergy" type="checkbox" name="morningTravelVigorousEnergy" value="morningTravelVigorousEnergy" />
              <label for="morningTravelVigorousEnergy" tabindex="0" data-name="Techniques to increase energy"><span class="choose_option_txt">Techniques to increase energy</span><span class="checked_box"></span></label>
            </div>
          </div>
          <div class="fourth_page">
            <h2 class="title_page">How much time can you allocate for your yoga practice?</h2>
            <div class="choose_option_wrapp">
              <input class="custom_checkbox" id="twenty" type="checkbox" name="twenty" value="20" />
              <label for="twenty" tabindex="0" data-name="10-20 minutes"
                ><span class="choose_option_txt"
                  ><b>10-20 minutes</b><br />
                  (Quick sessions to fit into a busy schedule)</span
                >
                <span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="fortyFive" type="checkbox" name="fortyFive" value="45" />
              <label for="fortyFive" tabindex="0" data-name="30-45 minutes"
                ><span class="choose_option_txt"
                  ><b>30-45 minutes</b><br />
                  (Moderate sessions for a comprehensive practice)</span
                >
                <span class="checked_box"></span
              ></label>

              <input class="custom_checkbox" id="sixty" type="checkbox" name="sixty" value="60" />
              <label for="sixty" tabindex="0" data-name="60 minutes or more">
                <span class="choose_option_txt"
                  ><b>60 minutes or more</b><br />
                  (Extended sessions for a deep dive into yoga)</span
                >
                <span class="checked_box"></span
              ></label>
            </div>
          </div>
          <div class="finish_page">
            <div>
              <h2 class="title_page">Congratulations! We've Personalized Your <span class="accent_green">Perfect Yoga Journey!</span></h2>
              <p>Get ready to embark on a transformative and fulfilling yoga practice designed just for you.</p>
              <div class="personalized_box">
                <div class="personalized_list" data-name="experienceLevel">
                  <h3 class="personalized_list_title">Experience Level:</h3>
                  <div class="personalized_txt_wrapp"></div>
                </div>
                <div class="personalized_list" data-name="preferredDuration">
                  <h3 class="personalized_list_title">Preferred Duration</h3>
                  <div class="personalized_txt_wrapp"></div>
                </div>
                <div class="personalized_list" data-name="yogaType">
                  <h3 class="personalized_list_title">Yoga Type:</h3>
                  <div class="personalized_txt_wrapp"></div>
                </div>
                <div class="personalized_list" data-name="areasOfFocus">
                  <h3 class="personalized_list_title">Areas of Focus:</h3>
                  <div class="personalized_txt_wrapp"></div>
                </div>
              </div>
              <p>Access a curated selection of yoga classes specifically designed to meet your goals and preferences.</p>
            </div>
            <div class="btn_explore_your_yoga_journey">Explore Your Personalized Yoga Journey Now!</div>
          </div>
        </div>
        <div class="footer_quiz">
          <div class="btn_skip_question">Skip this question</div>
          <div class="btn_next" disabled="1">Next</div>
        </div>
      </div>
    </section>
    `;
    document.head.insertAdjacentHTML("beforeend", stylePersonalization);

    renderHtml();
    onClickBtnOfQuiz();

    function renderHtml() {
      if (document.querySelector("body") && !document.querySelector("#quizForYou")) {
        document.querySelector("body").insertAdjacentHTML("afterbegin", htmlPersonalization);
      }
    }

    function onClickBtnOfQuiz() {
      let btnStart = setInterval(() => {
        let arr = [];
        let text;
        let experienceLevel = [],
          preferredDuration = [],
          yogaType = [],
          areasOfFocus = [];
        if (document.querySelector(".quiz_wrapp")) {
          clearInterval(btnStart);
          // btn start quiz
          document.querySelector(".btn_personalize_my_exp").addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.currentTarget);

            if (e.currentTarget.closest("#quizForYou").getAttribute("count") === "start") {
              e.currentTarget.closest("#quizForYou").setAttribute("count", "1");
            }
            if (e.currentTarget.closest(".start_page").classList.contains("active_page")) {
              e.currentTarget.closest(".start_page").classList.remove("active_page");
            }
            document.querySelector(".first_page").classList.add("active_page");
          });
          // btn Skip personalization
          document.querySelector(".btn_skip_personalization").addEventListener("click", (e) => {
            e.preventDefault();
            console.log(e.currentTarget);
            if (document.querySelector('.menu--account [data-drupal-link-system-path="yogi/login"]')) {
              window.location.href = "https://www.doyogawithme.com/yogi/register?destination=/become-a-subscriber";
            } else {
              window.location.href = "https://www.doyogawithme.com/yoga-classes";
            }
          });
          //btn Back
          document.querySelectorAll(".btn_back").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              if (!e.target.getAttribute("data-test")) {
                console.log(e.target.closest("#quizForYou").getAttribute("count"));
                if (e.target.closest("#quizForYou").querySelector(".first_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "1") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".first_page").classList.remove("active_page");
                    document.querySelector(".start_page").classList.add("active_page");
                    e.target.closest("#quizForYou").setAttribute("count", "start");
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".second_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "2") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".second_page").classList.remove("active_page");
                    document.querySelector(".first_page").classList.add("active_page");
                    if (document.querySelectorAll(".steps_link")[1].classList.contains("active")) {
                      document.querySelectorAll(".steps_link")[1].classList.remove("active");
                    }
                    document.querySelector(".active_step").textContent = "1";
                    e.target.closest("#quizForYou").setAttribute("count", "1");

                    if (document.querySelector(".first_page .custom_checkbox:checked + label")) {
                      e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                    }
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".third_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "3") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".third_page").classList.remove("active_page");
                    document.querySelector(".second_page").classList.add("active_page");
                    if (document.querySelectorAll(".steps_link")[2].classList.contains("active")) {
                      document.querySelectorAll(".steps_link")[2].classList.remove("active");
                    }
                    document.querySelector(".active_step").textContent = "2";
                    e.target.closest("#quizForYou").setAttribute("count", "2");
                    if (document.querySelector(".second_page .custom_checkbox:checked + label")) {
                      e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                    }
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".fourth_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "4") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".fourth_page").classList.remove("active_page");
                    document.querySelector(".third_page").classList.add("active_page");
                    if (document.querySelectorAll(".steps_link")[3].classList.contains("active")) {
                      document.querySelectorAll(".steps_link")[3].classList.remove("active");
                    }
                    document.querySelector(".active_step").textContent = "3";
                    e.target.closest("#quizForYou").setAttribute("count", "3");
                    if (document.querySelector(".third_page .custom_checkbox:checked + label")) {
                      e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                    }
                  }, 200);
                }
              }

              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 300);
            });
          });
          // btn Skip this question
          document.querySelectorAll(".btn_skip_question").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              if (!e.target.getAttribute("data-test")) {
                console.log(e.target);

                if (e.target.closest("#quizForYou").querySelector(".first_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "1") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".first_page").classList.remove("active_page");
                    document.querySelector(".second_page").classList.add("active_page");
                    document.querySelectorAll(".steps_link")[1].classList.add("active");
                    document.querySelector(".active_step").textContent = "2";
                    e.target.closest("#quizForYou").setAttribute("count", "2");
                    experienceLevel = [];
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".second_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "2") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".second_page").classList.remove("active_page");
                    document.querySelector(".third_page").classList.add("active_page");
                    document.querySelectorAll(".steps_link")[2].classList.add("active");
                    document.querySelector(".active_step").textContent = "3";
                    e.target.closest("#quizForYou").setAttribute("count", "3");
                    yogaType = [];
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".third_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "3") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".third_page").classList.remove("active_page");
                    document.querySelector(".fourth_page").classList.add("active_page");
                    document.querySelectorAll(".steps_link")[3].classList.add("active");
                    document.querySelector(".active_step").textContent = "4";
                    e.target.closest("#quizForYou").setAttribute("count", "4");
                    areasOfFocus = [];
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".fourth_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "4") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".fourth_page").classList.remove("active_page");
                    document.querySelector(".finish_page").classList.add("active_page");
                    e.target.closest("#quizForYou").setAttribute("count", "finish");
                    preferredDuration = [];
                    arr.push({
                      experienceLevel: experienceLevel,
                      preferredDuration: preferredDuration,
                      yogaType: yogaType,
                      areasOfFocus: areasOfFocus,
                    });

                    if (localStorage.getItem("perfectYogaJourney")) {
                      localStorage.removeItem("perfectYogaJourney");
                      localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                    } else {
                      localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                    }

                    setPersonalizedBox();
                  }, 200);
                }
              }

              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 300);
            });
          });
          // btn Next
          document.querySelectorAll(".btn_next").forEach((el) => {
            el.addEventListener("click", (e) => {
              e.preventDefault();
              if (!e.target.getAttribute("data-test")) {
                console.log(e.target);
                if (e.target.closest("#quizForYou").querySelector(".first_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "1" && e.target.getAttribute("disabled") !== "1") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".first_page").classList.remove("active_page");
                    document.querySelector(".second_page").classList.add("active_page");
                    document.querySelectorAll(".steps_link")[1].classList.add("active");
                    document.querySelector(".active_step").textContent = "2";
                    e.target.closest("#quizForYou").setAttribute("count", "2");
                    if (!document.querySelector(".second_page .custom_checkbox:checked + label")) {
                      e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                    }

                    experienceLevel = [];
                    document.querySelectorAll(".first_page .custom_checkbox:checked + label").forEach((el) => {
                      console.log(el.getAttribute("for"));
                      text = el.getAttribute("data-name");
                      experienceLevel.push(text);
                    });
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".second_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "2" && e.target.getAttribute("disabled") !== "1") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".second_page").classList.remove("active_page");
                    document.querySelector(".third_page").classList.add("active_page");
                    document.querySelectorAll(".steps_link")[2].classList.add("active");
                    document.querySelector(".active_step").textContent = "3";
                    e.target.closest("#quizForYou").setAttribute("count", "3");
                    if (!document.querySelector(".third_page .custom_checkbox:checked + label")) {
                      e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                    }

                    yogaType = [];
                    document.querySelectorAll(".second_page .custom_checkbox:checked + label").forEach((el) => {
                      text = el.getAttribute("data-name");
                      yogaType.push(text);
                    });
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".third_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "3" && e.target.getAttribute("disabled") !== "1") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".third_page").classList.remove("active_page");
                    document.querySelector(".fourth_page").classList.add("active_page");
                    document.querySelectorAll(".steps_link")[3].classList.add("active");
                    document.querySelector(".active_step").textContent = "4";
                    e.target.closest("#quizForYou").setAttribute("count", "4");
                    if (!document.querySelector(".fourth_page .custom_checkbox:checked + label")) {
                      e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                    }
                    areasOfFocus = [];
                    document.querySelectorAll(".third_page .custom_checkbox:checked + label").forEach((el) => {
                      text = el.getAttribute("data-name");
                      areasOfFocus.push(text);
                    });
                  }, 200);
                }
                if (e.target.closest("#quizForYou").querySelector(".fourth_page").classList.contains("active_page") && e.target.closest("#quizForYou").getAttribute("count") === "4" && e.target.getAttribute("disabled") !== "1") {
                  setTimeout(() => {
                    e.target.closest("#quizForYou").querySelector(".fourth_page").classList.remove("active_page");
                    document.querySelector(".finish_page").classList.add("active_page");
                    e.target.closest("#quizForYou").setAttribute("count", "finish");
                    preferredDuration = [];
                    document.querySelectorAll(".fourth_page .custom_checkbox:checked + label").forEach((el) => {
                      text = el.getAttribute("data-name");
                      preferredDuration.push(text);
                    });

                    arr.push({
                      experienceLevel: experienceLevel,
                      preferredDuration: preferredDuration,
                      yogaType: yogaType,
                      areasOfFocus: areasOfFocus,
                    });

                    if (localStorage.getItem("perfectYogaJourney")) {
                      localStorage.removeItem("perfectYogaJourney");
                      localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                    } else {
                      localStorage.setItem("perfectYogaJourney", JSON.stringify(arr));
                    }

                    if (!localStorage.getItem("createdPersonalizedList")) {
                      localStorage.setItem("createdPersonalizedList", "yes");
                    }

                    setPersonalizedBox();
                  }, 200);
                }
              }

              e.target.setAttribute("data-test", "1");
              setTimeout(() => {
                if (e.target.getAttribute("data-test")) {
                  e.target.removeAttribute("data-test");
                }
              }, 300);
            });
          });

          //click on custom_checkbox
          document.querySelectorAll(".custom_checkbox + label").forEach((el) => {
            el.addEventListener("click", (e) => {
              setTimeout(() => {
                if (e.target.closest(".choose_option_wrapp").querySelectorAll(".custom_checkbox:checked").length <= 0) {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "1");
                } else {
                  e.target.closest("#quizForYou").querySelector(".btn_next").setAttribute("disabled", "0");
                }
              }, 100);

              if (e.currentTarget.getAttribute("for") === "noneStylesYoga" && e.currentTarget.closest(".second_page")) {
                console.log(`noneStylesYoga`);
                document.querySelectorAll(".second_page .custom_checkbox").forEach((i) => {
                  if (i.getAttribute("for") !== "noneStylesYoga") {
                    i.checked = false;
                  }
                });
              }
              if (e.currentTarget.getAttribute("for") !== "noneStylesYoga" && e.currentTarget.closest(".second_page")) {
                document.querySelectorAll(".second_page .custom_checkbox").forEach((i) => {
                  console.log(i);
                  if (i.getAttribute("name") === "noneStylesYoga") {
                    console.log(`object`);
                    i.checked = false;
                  }
                });
              }
            });
          });
        }
      }, 100);
    }

    //set personalized_box
    function setPersonalizedBox() {
      if (localStorage.getItem("perfectYogaJourney")) {
        temp = JSON.parse(localStorage.getItem("perfectYogaJourney"));
        temp.forEach((list) => {
          for (var key in list) {
            document.querySelectorAll(".personalized_list").forEach((i) => {
              if (i.getAttribute("data-name") === key) {
                let arrList = list[key];
                arrList.forEach((link) => {
                  i.querySelector(".personalized_txt_wrapp").insertAdjacentHTML("beforeend", `<p class="personalized_list_tag" data-tag='${link}'>${link}</p>`);
                  console.log(link);
                });
                // console.log(list[key]);
              }
            });
          }
        });

        // document.querySelectorAll(".personalized_list .personalized_txt_wrapp").forEach((el) => {
        //   if (el.children.length === 0) {
        //     el.closest(".personalized_list").style.display = "none";
        //   }
        // });
      }
    }
  }
}, 100);
