let scriptCustomStyle = document.createElement("link")
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
scriptCustomStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomStyle)

let scriptCustom = document.createElement("script")
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

let tenStepsStyle = /*html*/ `
<style>
@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-Bold.woff) format("woff"), url(../fonts/Gilroy/Gilroy-Bold.woff2) format("woff2"),
    url(../fonts/Gilroy/Gilroy-Bold.ttf) format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-ExtraBold.woff) format("woff"), url(../fonts/Gilroy/Gilroy-ExtraBold.woff2) format("woff2"),
    url(../fonts/Gilroy/Gilroy-ExtraBold.ttf) format("truetype");
  font-weight: 800;
  font-style: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-Medium.woff) format("woff"), url(../fonts/Gilroy/Gilroy-Medium.woff2) format("woff2"),
    url(../fonts/Gilroy/Gilroy-Medium.ttf) format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-Regular.woff) format("woff"), url(../fonts/Gilroy/Gilroy-Regular.woff2) format("woff2");
  font-weight: 400;
  font-style: normal;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

svg:not(:root) {
  vertical-align: unset;
}

body {
  font-family: "Gilroy", Sans-serif;
  background: #f7fafd;
}

ol,
ul {
  list-style: none;
}

img {
  border: 0;
  max-width: 100%;
}

a {
  text-decoration: none;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 7px;
  width: 185px;
  height: 46px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  border: none;
  margin: 40px auto 0;
}

input.error,
select.error {
  border: 2px solid #ef4836 !important;
}

input {
  background-color: inherit !important;
  border: 2px solid #d3d8db !important;
  border-radius: 5px !important;
  width: 100% !important;
  height: 44px !important;
  margin-top: 5px !important;
  padding: 0 10px !important;
}

.input_validation_name,
.input_validation_email,
.input_validation_select {
  width: 100%;
  padding: 2px 0 0 8px;
  color: #ef4836;
  text-align: left;
  font-size: 10px;
  line-height: 1.25;
  display: none;
}

select {
  background: url("https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/keyboard_arrow_down.svg") right 5px center no-repeat;
  background-color: inherit;
  border: 2px solid #d3d8db;
  border-radius: 5px;
  width: 100%;
  height: 44px;
  margin-top: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #5a7386;
  padding: 0 30px 0 10px;
  appearance: none;
}

label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #eef1f3;
  margin: auto;
}

/* header */
header {
  padding: 40px 60px 52px 60px;
}

header img {
  margin-bottom: 52px;
  display: block;
  margin: auto;
}

main {
  text-align: center;
  padding: 0 60px;
}

/* box-fist-about */

.first_mobile_btn {
  display: none;
}

.box_fist_about {
  padding: 0 0 120px;
}

.box_fist_about h1 {
  font-weight: 800;
  font-size: 64px;
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: #183b56;
  margin-bottom: 40px;
}

.box_fist_about h1 > span {
  color: #046bd9;
}

.box_fist_about > div {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.information_speaker {
  width: 50%;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: #183b56;
  text-align: start;
}

.information_speaker > div {
  display: flex;
  text-align: start;
  align-items: center;
}

.information_speaker > div img {
  margin-right: 20px;
}

.information_speaker > div > div > p {
  font-weight: 800;
  font-size: 24px;
  color: #183b56;
  margin-bottom: 28px;
}

.information_speaker > div > div > p > span {
  color: #f2813f;
}

.information_speaker > div > div > div {
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;
  color: #046bd9;
}

.information_speaker > div > div > div svg {
  margin-right: 12px;
  fill: #046bd9;
}

.information_speaker > div > div > div span:not(:last-child) {
  padding-right: 30px;
  margin-right: 30px;
  border-right: 1px solid #183b56;
}

.information_speaker > p {
  font-weight: 800;
  font-size: 24px;
  line-height: 45px;
  margin: 55px 0 20px;
}

.information_speaker ul {
  display: flex;
  flex-wrap: wrap;
}

.information_speaker ul li::before {
  position: absolute;
  content: "";
  left: 0;
  top: 10px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgb(54 179 126 / 15%) url("https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/check.svg") no-repeat center;
}

.information_speaker ul li {
  position: relative;
  padding-left: 36px;
  width: 50%;
  margin-bottom: 16px;
}

/* form 1 */
.box_fist_about > div > .scene_box form {
  background: #ffffff;
  border: 1px solid #eef1f3;
  box-shadow: 0px 2px 4px rgb(24 59 86 / 10%), 0px 12px 32px rgb(0 0 0 / 5%);
  border-radius: 16px;
  max-width: 424px;
  /* height: 423px; */
  padding: 40px;
  color: #183b56;

  /*  */
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
}

.front_form {
  position: unset !important;
}

.box_fist_about > div > .scene_box form > h2 {
  font-weight: 800;
  font-size: 36px;
  line-height: 1.25;
  margin-bottom: 5px;
}

.box_fist_about > div > .scene_box form > p {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.box_fist_about > div > .scene_box form > label {
  color: #8c9294;
  letter-spacing: 0.01em;
}

.box_fist_about > div > .scene_box form > *:not(:nth-child(4)) {
  margin-bottom: 20px;
}

.box_fist_about > div > .scene_box form > span {
  text-decoration: underline;
  color: #8c9294;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  margin-right: 25px;
  cursor: pointer;
}

.box_fist_about > div > .scene_box form > button {
  background: #046bd9;
}

.box_fist_about > div > .scene_box form > button:hover {
  background: #046bd9;
  color: #ffffff;
  outline: none;
}

.scene_box {
  perspective: 950px;
  margin-left: 50px;
  flex-shrink: 0;
}

.card_box {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.back_form {
  transform: rotateY(180deg);
}

.card_box.is-flipped {
  transform: rotateY(180deg);
}

/* box_second_training */
.box_second_training {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #5a7386;
  padding: 0 0 150px;
}

.box_second_training h2 {
  font-weight: 800;
  font-size: 48px;
  line-height: 1.12;
  text-align: center;
  letter-spacing: -0.01em;
  color: #183b56;
  margin-bottom: 12px;
}

.box_second_training .swipe_box {
  position: relative;
}

.box_second_training .swipe_box ul {
  display: flex;
  margin-top: 55px;
  transform: translateX(30px);
  justify-content: space-between;
}

.box_second_training ul li {
  font-weight: 700;
  color: #046bd9;
  position: relative;
  width: 10%;
  text-align: left;
}

.box_second_training .swipe_box ul li span {
  font-weight: 700;
  color: #183b56;
}

.box_second_training .swipe_box ul li div {
  width: 1px;
  height: 60px;
  background: #d3d8db;
  border-radius: 1px;
  margin: 8px 0 8px 15px;
}
.box_second_training .swipe_box ul li p {
  text-align: left;
  margin-bottom: 0;
}

.box_second_training .swipe_box ul li::after {
  display: block;
  position: absolute;
  text-align: start;
  width: 100%;
  left: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #5a7386;
  padding-right: 5px;
  filter: blur(5px);
  opacity: 0;
  transition: all 1s ease 0s;
}

.box_second_training .swipe_box ul li:first-child::after {
  filter: blur(0px);
  opacity: 1;
}

.box_second_training .swipe_box ul li:nth-child(2)::after {
  opacity: 1;
  transition: all 1s ease 0s;
}

.box_second_training .swipe_box ul li.none_text::after {
  opacity: 0;
  transition: all 1s ease 0s;
}

.box_second_training .swipe_box ul li.open_blur_text::after {
  opacity: 1;
  transition: all 1s ease 0s;
}

.box_second_training .swipe_box ul li.color_text::after {
  filter: blur(0px);
  opacity: 1;
  transition: all 1s ease 0s;
}

.box_second_training ul li:nth-child(1)::after {
  content: "The one reason most entrepreneurs don't make their first sale";
}
.box_second_training ul li:nth-child(2)::after {
  content: "The only type of product you should attempt to sell when you're just starting out";
}

.box_second_training ul li:nth-child(3)::after {
  content: "The real truth behind how much money the average drop-shipper, affiliate marketer, and funnel hack make.";
}

.box_second_training ul li:nth-child(4)::after {
  content: "How to pick a niche that could generate tons of sales";
}

.box_second_training ul li:nth-child(5)::after {
  content: "The 'problem test' and how it increases your chances of success";
}

.box_second_training ul li:nth-child(6)::after {
  content: "My secret 'bookshelf test' and why it can make even a struggling product to start flying off the shelf";
}

.box_second_training ul li:nth-child(7)::after {
  content: "The perfect price that is proven to boost conversions in every niche";
}

.box_second_training ul li:nth-child(8)::after {
  content: "The four reasons you must DITCH YOUR FUNNEL";
}

.box_second_training ul li:nth-child(9)::after {
  content: "The simple '1 Page Blueprint' and how over 19,284 people have used it to make their first sale";
}

.box_second_training .swipe_box > div {
  position: absolute;
  width: 100%;
  height: 28px;
  top: 47px;
  background: #ffffff;
  border: 1px solid #eef1f3;
  box-shadow: 0px 2px 2px rgb(24 59 86 / 5%), 0px 12px 8px rgb(0 0 0 / 2%);
  border-radius: 16px;
}

.box_second_training .swipe_box > div > svg {
  position: absolute;
  top: 8px;
  left: 45px;
  transform: translateX(-50%);
  opacity: 1;
  transition: all 1s ease 0s;
  z-index: 10;
}

.box_second_training .swipe_box > div > span {
  position: absolute;
  top: 8px;
  left: calc(11.2% + 45px);
  transform: translateX(-50%);
  z-index: 9;
  cursor: url("https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/cursor.svg"), default;
  width: 10%;
}

.box_second_training .swipe_box > div > span svg {
  opacity: 0.6;
  transition: all 1s ease 0s;
}

.scale_svg {
  opacity: 1;
  transform: scale(1.2);
}

.progress_line {
  position: relative;
  background: #f7fafd;
  border-radius: 16px 0px 0px 16px;
  width: 45px;
  height: 100%;
  opacity: 1;
  transition: all 1s ease 0s;
}

/* .progress_line::after {
  content: "";
  position: absolute;
  top: 30px;
  right: 15px;
  width: 24px;
  height: 24px;
  background: url(./samcart_svg/cursor_arrow.svg) center center no-repeat;
  opacity: 0;
  transition: all 1s ease 0s;
}

.progress_line.arrow::after {
  opacity: 1;
} */

/* box_slider */
.tns-outer .tns-liveregion.tns-visually-hidden {
  display: none;
}

.tns-nav {
  text-align: end;
}

.tns-nav button {
  background: #9cabb7;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.tns-nav button:hover {
  background: #9cabb7 !important;
  cursor: pointer;
}

.tns-nav button:not(:last-child) {
  margin-right: 20px;
}

.tns-nav button.tns-nav-active {
  background: #046bd9;
}

.tns-nav button.tns-nav-active:hover {
  background: #046bd9 !important;
  cursor: pointer;
}

.box_slider {
  margin: 120px 80px 0;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(24, 59, 86, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  padding: 50px;
}

.box_slider h2 {
  font-weight: 800;
  font-size: 48px;
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: #183b56;
  max-width: 658px;
  margin: auto;
}

.my_slider {
  max-height: 80vh;
}

.box_slider span {
  width: 64px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #eef1f3;
  box-sizing: border-box;
  box-shadow: 0px 2px 2px rgba(24, 59, 86, 0.05), 0px 12px 8px rgba(0, 0, 0, 0.02);
  border-radius: 64px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  padding: 20px;
  cursor: pointer;
}

.box_slider .arrow_left_btn {
  position: absolute;
  top: 50%;
  left: -89px;
  transform: translateY(-50%);
}

.box_slider .arrow_right_btn {
  position: absolute;
  top: 50%;
  right: -89px;
  transform: translateY(-50%);
}

.img img {
  height: 100%;
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
}

/* box_already_registered */
.box_already_registered {
  /* background: linear-gradient(139.61deg, #1d96f3 12.88%, #4b17e6 67.72%); */
  background: url("https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/background.png") center center no-repeat;
  background-size: cover;
  padding: 115px 0 120px 0;
  margin: 120px -60px 0;
}

.box_already_registered > span {
  font-weight: 800;
  font-size: 64px;
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: #f2813f;
}

.box_already_registered p {
  max-width: 670px;
  margin: 0 auto 32px auto;
  font-weight: 800;
  font-size: 48px;
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: #ffffff;
}

.box_already_registered form {
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.box_already_registered form > :not(:nth-child(3)) {
  margin-bottom: 20px;
}

.box_already_registered form label {
  max-width: 344px;
  width: 100%;
}

.box_already_registered form > div:first-child {
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 40px;
}

.box_already_registered form div span:first-child {
  border-right: 1px solid #ffffff;
  width: 100%;
  padding-right: 25px;
}

.box_already_registered form div span:last-child {
  padding-left: 25px;
}

.box_already_registered form button {
  background: #f2813f;
}

.box_already_registered form button:hover {
  background: #f2813f;
  color: #ffffff;
}

/* popup */
.backdrop_popup.is_hidden {
  opacity: 0;
  pointer-events: none;
  display: none;
}

.backdrop_popup {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  width: 100%;
  height: 100%;
  opacity: 1;
  overflow-y: scroll;
  background-color: rgb(0 0 0 / 60%);
  transition: all 0.8s ease 0s;
}

.backdrop_popup form {
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  transition: all 0.8s ease 0s;
}

.popup_form_content {
  position: relative;
  max-width: 870px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px;
  background: #ffffff;
  border: 1px solid #eef1f3;
  box-shadow: 0px 2px 4px rgba(24, 59, 86, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  transition: all 0.8s ease 0s;
}

.popup_form_content .close_popup {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  padding: 0;
  margin: 0;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: inherit;
}

.popup_form_content .close_popup svg {
  fill: #d3d8db;
}

.popup_form_content h2 {
  font-weight: 800;
  font-size: 36px;
  line-height: 1.25;
  color: #122f45;
  margin-bottom: 5px;
  text-align: left;
}

.popup_wrapper {
  color: #183b56;
  display: flex;
  text-align: start;
}

.popup_wrapper div:first-child {
  width: 50%;
  margin-right: 60px;
}

.popup_wrapper div:first-child p {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #183b56;
  margin-bottom: 32px;
}

.popup_wrapper div:first-child ul li::before {
  position: absolute;
  content: "";
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgb(54 179 126 / 15%) url("https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/check.svg") no-repeat center;
}

.popup_wrapper div:first-child ul li {
  position: relative;
  padding-left: 36px;
}

.popup_wrapper div:first-child ul li:not(:last-child) {
  margin-bottom: 16px;
}

.popup_wrapper div:first-child ul li span {
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: #183b56;
}

.popup_wrapper div:last-child label {
  color: #8c9294;
}

.popup_btn .popup_wrapper div:last-child label:not(:nth-child(2)) {
  margin-bottom: 24px;
}

.popup_wrapper div:last-child label input {
  width: 300px;
}

.popup_wrapper div:last-child button {
  background: #046bd9;
  width: 100%;
  justify-content: space-between;
  padding: 0 15px;
}

.popup_wrapper div:last-child button:hover {
  background: #046bd9;
  color: #ffffff;
}

/* popup_after_scroll  */
.popup_after_scroll button:last-child {
  background: #046bd9;
  margin-top: 72px;
}

.popup_after_scroll button:last-child:hover {
  background: #046bd9;
  color: #ffffff;
}

.popup_after_scroll .popup_wrapper label:not(:last-child) {
  margin-bottom: 24px;
}

.popup_after_scroll .popup_wrapper div:first-child ul li:not(:last-child) {
  margin-bottom: 24px;
}

@media (max-width: 767px) {
  header {
    padding: 20px 30px 35px;
  }

  main {
    padding: 0 30px;
  }

  .input_validation_name,
  .input_validation_email,
  .input_validation_select {
    font-size: 8px;
    line-height: 1;
    display: none;
  }

  .box_fist_about {
    padding: 0 0 80px;
  }

  .box_fist_about h1 {
    font-size: 40px;
  }

  .scene_box {
    display: none;
  }

  .information_speaker {
    width: unset;
  }

  .information_speaker > div {
    position: relative;
    align-items: flex-start;
  }

  .information_speaker > div img {
    width: 69px;
  }

  .information_speaker > div > div > div {
    position: absolute;
    left: 0;
    bottom: -30px;
    color: #183b56;
  }

  .information_speaker > div > div > div svg {
    fill: #183b56;
  }

  .first_mobile_btn {
    display: inline-flex;
    justify-content: space-between;
    padding: 0 17px;
    background: #046bd9;
    width: 100%;
    margin-top: 70px;
  }

  .information_speaker > div > div > p {
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 24px;
  }

  .information_speaker > p {
    font-size: 18px;
    line-height: 1.78;
    margin: 40px 0 16px;
  }

  .information_speaker ul {
    display: block;
  }

  .information_speaker ul li {
    width: unset;
  }

  .information_speaker ul li:last-child {
    margin-bottom: 0;
  }

  /*box_second_training  */
  .box_second_training {
    padding: 0 30px 65px;
    background: linear-gradient(180deg, #f7fafd 0%, #ffffff 100%);
    margin: 0 -30px;
  }

  .box_second_training h2 {
    font-size: 36px;
    line-height: 1.25;
    margin-bottom: 8px;
  }

  .box_second_training .swipe_box ul {
    display: block;
    transform: unset;
  }

  .box_second_training .swipe_box > div {
    width: 28px;
    height: 105%;
    top: -32px;
    left: 15%;
    transform: translateX(50%);
  }

  .progress_line {
    height: 45px;
    width: 100%;
    border-radius: 16px 16px 0 0;
  }

  .box_second_training .swipe_box > div > svg {
    top: 25px;
    right: 5px;
    left: 0;
  }

  .box_second_training .swipe_box > div > span {
    height: 10%;
    width: 100%;
    left: unset;
    top: calc(16% + 45px);
    right: 5px;
  }

  .box_second_training ul li {
    display: flex;
    margin-bottom: 40px;
    width: unset;
  }

  .box_second_training ul li:first-child,
  .box_second_training ul li:nth-child(2) {
    margin-bottom: 105px;
  }

  .box_second_training .swipe_box ul li div {
    transform: rotate(90deg);
    margin: -17px 35px;
  }

  .box_second_training .swipe_box ul li::after {
    right: 46px;
    top: 25px;
    left: unset;
    padding: unset;
    width: 50%;
  }

  .box_second_training .swipe_box ul li span {
    display: block;
    width: 40px;
    text-align: right;
  }

  /*box_slider  */
  .box_slider {
    margin: unset;
    background: unset;
    box-shadow: unset;
    border-radius: unset;
    padding: 56px 0;
  }

  .box_slider h2 {
    font-size: 36px;
    line-height: 1.25;
    letter-spacing: unset;
    max-width: 305px;
    margin-bottom: 28px;
  }

  .box_slider .arrow_left_btn,
  .box_slider .arrow_right_btn {
    display: none;
  }

  .tns-nav {
    text-align: center;
  }

  .tns-nav button {
    margin-top: 16px;
  }

  #tns1-mw {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(24, 59, 86, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
  }

  /* box_already_registered */
  .box_already_registered {
    padding: 56px 30px;
    margin: 0 -30px;
  }

  .box_already_registered > span {
    font-size: 48px;
  }

  .box_already_registered p {
    font-size: 36px;
    line-height: 1.25;
    letter-spacing: -1px;
    margin-bottom: 40px;
  }

  .box_already_registered form button {
    width: 100%;
    justify-content: space-between;
    padding: 0 17px;
    margin-top: 32px;
  }

  .box_second_training ul li.margin_unset {
    margin-bottom: 0;
  }

  /* popup_form_content */

  .backdrop_popup.is_hidden form {
    transform: translateY(100%);
    transition: all 0.8s ease 0s;
  }

  .backdrop_popup form {
    position: fixed;
    padding: 0;
    bottom: 0;
    min-height: unset;
  }

  .popup_form_content {
    padding: 40px 30px 20px;
    border-radius: 16px 16px 0px 0px;
  }

  .popup_form_content .close_popup {
    width: 20px;
    height: 20px;
    top: 20px;
    right: 20px;
  }

  .popup_wrapper {
    display: unset;
  }

  .popup_form_content h2 {
    text-align: center;
    font-size: 24px;
    line-height: 1.33;
  }

  .popup_wrapper div:first-child {
    width: unset;
    margin: 0;
  }

  .popup_wrapper div:first-child p {
    margin-bottom: 20px;
    text-align: center;
  }

  .popup_form_content ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 17px;
  }

  .popup_wrapper div:first-child ul li:not(:last-child),
  .popup_after_scroll .popup_wrapper div:first-child ul li:not(:last-child) {
    margin-bottom: 10px;
  }

  .popup_wrapper div:first-child ul li {
    padding-left: 25px;
    margin-bottom: 10px;
  }

  .popup_wrapper div:first-child ul li:nth-child(even) {
    margin-left: 15px;
  }

  .popup_wrapper div:first-child ul li span {
    font-size: 13px;
    line-height: 1.54;
  }

  .popup_wrapper div:first-child ul li::before {
    background: rgb(54 179 126 / 0) url(https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/check.svg) no-repeat center;
    width: 20px;
    height: 20px;
  }

  .popup_btn .popup_wrapper div:last-child label:not(:nth-child(2)),
  .popup_after_scroll .popup_wrapper label:not(:last-child) {
    margin-bottom: 16px;
  }

  .popup_wrapper div:last-child button {
    margin-top: 32px;
  }

  .popup_wrapper div:last-child label input {
    width: 100%;
  }

  .popup_after_scroll button:last-child {
    margin-top: 32px;
    width: 100%;
    justify-content: space-between;
    padding: 0 15px;
  }
}
/* 
@media (max-width: 320px) {
  .popup_form_content ul {
    display: block;
  }

  .popup_wrapper div:first-child ul li:not(:last-child),
  .popup_after_scroll .popup_wrapper div:first-child ul li:not(:last-child),
  .popup_wrapper div:first-child ul li:nth-child(even) {
    margin-left: 0;
  }
} */

@media (max-height: 666px) {
  .backdrop_popup .popup_after_scroll {
    position: unset;
  }

  .popup_form_content ul {
    display: block;
  }

  .popup_wrapper div:first-child ul li:not(:last-child),
  .popup_after_scroll .popup_wrapper div:first-child ul li:not(:last-child),
  .popup_wrapper div:first-child ul li:nth-child(even) {
    margin-left: 0;
  }

   .box_second_training .swipe_box ul li::after {
    right: -6px;
    width: 60%;
  }
}

.page button:hover,
input[type="submit"]:hover {
  background-image: unset;
  border-color: inherit;
  color: inherit;
  background: unset;
}

</style>
`

let tenStepHtml = /*html*/ `
<header>
      <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/logo.png" alt="logo samcart" />
    </header>

    <main>
      <div class="box_fist_about">
        <h1>My <span>10 Step System</span> for Building a <span>Six Figure Online Course</span> from Scratch</h1>

        <div>
          <div class="information_speaker">
            <div>
              <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/photo.png" alt="photo speaker" />
              <div>
                <p>100% Free Online Webinar from Samcart Founder — <span>Brian Moran</span></p>

                <div>
                  <svg width="25" height="25" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.3214 3.17857H19.6429V1.39287C19.6429 0.899745 19.2431 0.5 18.75 0.5C18.2569 0.5 17.8571 0.899745 17.8571 1.39287V3.17857H7.14284V1.39287C7.14284 0.899745 6.74309 0.5 6.25001 0.5C5.75694 0.5 5.35714 0.899745 5.35714 1.39287V3.17857H2.67857C1.19924 3.17857 0 4.3778 0 5.85714V22.8214C0 24.3008 1.19924 25.5 2.67857 25.5H22.3214C23.8008 25.5 25 24.3008 25 22.8214V5.85714C25 4.3778 23.8008 3.17857 22.3214 3.17857ZM23.2143 22.8214C23.2143 23.3146 22.8145 23.7143 22.3214 23.7143H2.67857C2.18544 23.7143 1.7857 23.3146 1.7857 22.8214V11.2143H23.2143V22.8214ZM23.2143 9.42858H1.7857V5.85714C1.7857 5.36401 2.18544 4.96427 2.67857 4.96427H5.35714V6.74996C5.35714 7.24309 5.75688 7.64284 6.25001 7.64284C6.74314 7.64284 7.14289 7.24309 7.14289 6.74996V4.96427H17.8572V6.74996C17.8572 7.24309 18.2569 7.64284 18.75 7.64284C19.2432 7.64284 19.6429 7.24309 19.6429 6.74996V4.96427H22.3215C22.8146 4.96427 23.2144 5.36401 23.2144 5.85714V9.42858H23.2143Z"
                    />
                    <path
                      d="M18.4665 13.2616C18.1205 12.9274 17.5719 12.9274 17.226 13.2616L10.7143 19.7732L7.77412 16.833C7.41942 16.4905 6.8542 16.5003 6.51163 16.8549C6.17744 17.201 6.17744 17.7495 6.51163 18.0955L10.0831 21.667C10.4318 22.0155 10.9969 22.0155 11.3456 21.667L18.4884 14.5241C18.831 14.1694 18.8211 13.6042 18.4665 13.2616Z"
                    />
                  </svg>
                  <span>On demand</span>
                  <svg width="25" height="25" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.3694 7.07806C21.8516 7.32856 21.6349 7.95163 21.8854 8.46916C22.5698 9.88288 22.9167 11.4067 22.9167 13C22.9167 18.7437 18.2437 23.4167 12.5 23.4167C6.75634 23.4167 2.08333 18.7437 2.08333 13C2.08333 7.25634 6.75634 2.58333 12.5 2.58333C14.8801 2.58333 17.116 3.36051 18.9667 4.8307C19.4155 5.18903 20.0719 5.114 20.4302 4.66361C20.7886 4.21348 20.7136 3.55786 20.2629 3.20004C18.072 1.45876 15.315 0.5 12.5 0.5C5.60786 0.5 0 6.10786 0 13C0 19.8921 5.60786 25.5 12.5 25.5C19.3921 25.5 25 19.8921 25 13C25 11.0901 24.5829 9.25982 23.7605 7.56202C23.5105 7.04322 22.8854 6.82706 22.3694 7.07806Z"
                    />
                    <path
                      d="M12 7.5C11.448 7.5 11 7.948 11 8.5V15.5C11 16.052 11.448 16.5 12 16.5H17C17.552 16.5 18 16.052 18 15.5C18 14.948 17.552 14.5 17 14.5H13V8.5C13 7.948 12.552 7.5 12 7.5Z"
                    />
                  </svg>
                  <span>45+ Minutes</span>
                </div>
              </div>
            </div>

            <button class="first_mobile_btn" type="button">
              Register Now
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7203 6.97034C12.79 6.9005 12.8728 6.84508 12.9639 6.80727C13.055 6.76946 13.1527 6.75 13.2513 6.75C13.35 6.75 13.4477 6.76946 13.5388 6.80727C13.6299 6.84508 13.7127 6.9005 13.7823 6.97034L18.2823 11.4703C18.3522 11.54 18.4076 11.6228 18.4454 11.7139C18.4832 11.805 18.5027 11.9027 18.5027 12.0013C18.5027 12.1 18.4832 12.1977 18.4454 12.2888C18.4076 12.3799 18.3522 12.4627 18.2823 12.5323L13.7823 17.0323C13.6415 17.1732 13.4505 17.2523 13.2513 17.2523C13.0522 17.2523 12.8612 17.1732 12.7203 17.0323C12.5795 16.8915 12.5004 16.7005 12.5004 16.5013C12.5004 16.3022 12.5795 16.1112 12.7203 15.9703L16.6908 12.0013L12.7203 8.03234C12.6505 7.96267 12.5951 7.87991 12.5573 7.78879C12.5195 7.69767 12.5 7.59999 12.5 7.50134C12.5 7.40269 12.5195 7.30501 12.5573 7.21389C12.5951 7.12277 12.6505 7.04001 12.7203 6.97034Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12Z"
                  fill="white"
                />
              </svg>
            </button>

            <p>Learn how to</p>
            <ul>
              <li><span>Earn more money</span></li>
              <li><span>Start your own business</span></li>
              <li><span>Sell online</span></li>
              <li><span>Increase your sales easily</span></li>
            </ul>
          </div>

          <div class="scene_box">
            <div class="card_box">
              <form class="front_form">
                <h2>Save Your Spot</h2>
                <p>Just enter your name & email to secure your spot on this webinar</p>
                <label for="">
                  <span>Your name*</span>
                  <input type="text" name="name" id="" maxlength="64" required />
                  <div class="input_validation_name">Please enter a name</div>
                </label>
                <label for="">
                  <span>Your work email*</span>
                  <input type="email" name="email" id="" maxlength="64" required />
                  <div class="input_validation_email">Please enter your email address</div>
                </label>
                <button type="button">
                  Register Now
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7203 6.97034C12.79 6.9005 12.8728 6.84508 12.9639 6.80727C13.055 6.76946 13.1527 6.75 13.2513 6.75C13.35 6.75 13.4477 6.76946 13.5388 6.80727C13.6299 6.84508 13.7127 6.9005 13.7823 6.97034L18.2823 11.4703C18.3522 11.54 18.4076 11.6228 18.4454 11.7139C18.4832 11.805 18.5027 11.9027 18.5027 12.0013C18.5027 12.1 18.4832 12.1977 18.4454 12.2888C18.4076 12.3799 18.3522 12.4627 18.2823 12.5323L13.7823 17.0323C13.6415 17.1732 13.4505 17.2523 13.2513 17.2523C13.0522 17.2523 12.8612 17.1732 12.7203 17.0323C12.5795 16.8915 12.5004 16.7005 12.5004 16.5013C12.5004 16.3022 12.5795 16.1112 12.7203 15.9703L16.6908 12.0013L12.7203 8.03234C12.6505 7.96267 12.5951 7.87991 12.5573 7.78879C12.5195 7.69767 12.5 7.59999 12.5 7.50134C12.5 7.40269 12.5195 7.30501 12.5573 7.21389C12.5951 7.12277 12.6505 7.04001 12.7203 6.97034Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>

              <form class="back_form">
                <h2>Save Your Spot</h2>
                <p>Choose date and time of attendance and Finish Registration to Save your Spot</p>
                <label for="">
                  <span>Your current monthly sales*</span>
                  <select class="" name="customFields" required>
                    <option value="">Select an option</option>
                    <option value="No Sales Yet">No Sales Yet</option>
                    <option value="$1 - $1,000">$1 - $1,000</option>
                    <option value="$1,001 - $10,000">$1,001 - $10,000</option>
                    <option value="$10,001 - $25,000">$10,001 - $25,000</option>
                    <option value="Greater than $25,000 a month">Greater than $25,000 a month</option>
                  </select>
                  <div class="input_validation_select">This field is required</div>
                </label>
                <label for="">
                  <span>data and time of attendance</span>
                  <select name="startTime" required>
                    <option value="2021-10-13T11:50:00.000Z">Wed Oct 13 @ 2:50PM EEST</option>
                  </select>
                </label>
                <span>Back</span>
                <button type="button">
                  Finish Registration!
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7203 6.97034C12.79 6.9005 12.8728 6.84508 12.9639 6.80727C13.055 6.76946 13.1527 6.75 13.2513 6.75C13.35 6.75 13.4477 6.76946 13.5388 6.80727C13.6299 6.84508 13.7127 6.9005 13.7823 6.97034L18.2823 11.4703C18.3522 11.54 18.4076 11.6228 18.4454 11.7139C18.4832 11.805 18.5027 11.9027 18.5027 12.0013C18.5027 12.1 18.4832 12.1977 18.4454 12.2888C18.4076 12.3799 18.3522 12.4627 18.2823 12.5323L13.7823 17.0323C13.6415 17.1732 13.4505 17.2523 13.2513 17.2523C13.0522 17.2523 12.8612 17.1732 12.7203 17.0323C12.5795 16.8915 12.5004 16.7005 12.5004 16.5013C12.5004 16.3022 12.5795 16.1112 12.7203 15.9703L16.6908 12.0013L12.7203 8.03234C12.6505 7.96267 12.5951 7.87991 12.5573 7.78879C12.5195 7.69767 12.5 7.59999 12.5 7.50134C12.5 7.40269 12.5195 7.30501 12.5573 7.21389C12.5951 7.12277 12.6505 7.04001 12.7203 6.97034Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="box_second_training">
        <h2>On This Training You Will Discover</h2>
        <p>
          Everything you need to know for growing your business in only 45+ minutes. <br />
          Click right trough the timeline to discover all the themes
        </p>
        <div class="swipe_box">
          <ul>
            <li>
              <span>5:58</span>
              <div></div>
              <p>Sales</p>
            </li>
            <li>
              <span>7:07</span>
              <div></div>
              <p>Product</p>
            </li>
            <li>
              <span>8:01</span>
              <div></div>
              <p>Competitors</p>
            </li>
            <li>
              <span>10:21</span>
              <div></div>
              <p>Pick a niche</p>
            </li>
            <li>
              <span>11:48</span>
              <div></div>
              <p>Success chance</p>
            </li>
            <li>
              <span>13:15</span>
              <div></div>
              <p>Growth</p>
            </li>
            <li>
              <span>15:18</span>
              <div></div>
              <p>Pricing</p>
            </li>
            <li>
              <span>16:33</span>
              <div></div>
              <p>Funnel</p>
            </li>
            <li class="margin_unset">
              <span>19:12</span>
              <div></div>
              <p>Making a sale</p>
            </li>
          </ul>
          <div data-swipe="2">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f)">
                <circle cx="18.5" cy="18.5" r="12.5" fill="#F08E38" fill-opacity="0.61" />
              </g>
              <circle cx="18.5" cy="18.5" r="12.5" fill="#F08E38" fill-opacity="0.38" />
              <circle cx="18.5" cy="18.4999" r="4.92424" fill="#F08E38" />
              <defs>
                <filter id="filter0_f" x="0" y="0" width="37" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                </filter>
              </defs>
            </svg>
            <span>
              <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f)">
                  <circle cx="18.5" cy="18.5" r="12.5" fill="#F08E38" fill-opacity="0.61" />
                </g>
                <circle cx="18.5" cy="18.5" r="12.5" fill="#F08E38" fill-opacity="0.38" />
                <circle cx="18.5" cy="18.4999" r="4.92424" fill="#F08E38" />
                <defs>
                  <filter id="filter0_f" x="0" y="0" width="37" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
                  </filter>
                </defs>
              </svg>
            </span>
            <div class="progress_line"></div>
          </div>
        </div>
      </div>

      <div class="box_slider">
        <h2>Real Results People Are Getting Using This System</h2>

        <span class="arrow_left_btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7797 6.97028C11.71 6.90043 11.6272 6.84502 11.5361 6.80721C11.445 6.7694 11.3473 6.74994 11.2487 6.74994C11.15 6.74994 11.0523 6.7694 10.9612 6.80721C10.8701 6.84502 10.7873 6.90043 10.7177 6.97028L6.21766 11.4703C6.14781 11.5399 6.0924 11.6227 6.05459 11.7138C6.01678 11.8049 5.99732 11.9026 5.99732 12.0013C5.99732 12.0999 6.01678 12.1976 6.05459 12.2887C6.0924 12.3798 6.14781 12.4626 6.21766 12.5323L10.7177 17.0323C10.8585 17.1731 11.0495 17.2522 11.2487 17.2522C11.4478 17.2522 11.6388 17.1731 11.7797 17.0323C11.9205 16.8914 11.9996 16.7004 11.9996 16.5013C11.9996 16.3021 11.9205 16.1111 11.7797 15.9703L7.80916 12.0013L11.7797 8.03228C11.8495 7.96261 11.9049 7.87985 11.9427 7.78873C11.9805 7.69761 12 7.59993 12 7.50128C12 7.40263 11.9805 7.30495 11.9427 7.21383C11.9049 7.12271 11.8495 7.03995 11.7797 6.97028Z"
              fill="#183B56"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 12C18 11.8011 17.921 11.6103 17.7803 11.4697C17.6397 11.329 17.4489 11.25 17.25 11.25H7.5C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H17.25C17.4489 12.75 17.6397 12.671 17.7803 12.5303C17.921 12.3897 18 12.1989 18 12Z"
              fill="#183B56"
            />
          </svg>
        </span>
        <div class="my_slider">
          <div class="img">
            <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/slider_photo1.png" alt="" width="910" />
          </div>
          <div class="img">
            <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/slider_photo2.png" alt="" width="910" />
          </div>
          <div class="img">
            <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/slider_photo1.png" alt="" width="910" />
          </div>
          <div class="img">
            <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/slider_photo1.png" alt="" width="910" />
          </div>
          <div class="img">
            <img src="https://conversionratestore.github.io/projects/samcart/img/ten_steps_img/slider_photo1.png" alt="" width="910" />
          </div>
        </div>
        <span class="arrow_right_btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2203 6.97028C12.29 6.90043 12.3728 6.84502 12.4639 6.80721C12.555 6.7694 12.6527 6.74994 12.7513 6.74994C12.85 6.74994 12.9477 6.7694 13.0388 6.80721C13.1299 6.84502 13.2127 6.90043 13.2823 6.97028L17.7823 11.4703C17.8522 11.5399 17.9076 11.6227 17.9454 11.7138C17.9832 11.8049 18.0027 11.9026 18.0027 12.0013C18.0027 12.0999 17.9832 12.1976 17.9454 12.2887C17.9076 12.3798 17.8522 12.4626 17.7823 12.5323L13.2823 17.0323C13.1415 17.1731 12.9505 17.2522 12.7513 17.2522C12.5522 17.2522 12.3612 17.1731 12.2203 17.0323C12.0795 16.8914 12.0004 16.7004 12.0004 16.5013C12.0004 16.3021 12.0795 16.1111 12.2203 15.9703L16.1908 12.0013L12.2203 8.03228C12.1505 7.96261 12.0951 7.87985 12.0573 7.78873C12.0195 7.69761 12 7.59993 12 7.50128C12 7.40263 12.0195 7.30495 12.0573 7.21383C12.0951 7.12271 12.1505 7.03995 12.2203 6.97028Z"
              fill="#183B56"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 12C6 11.8011 6.07902 11.6103 6.21967 11.4697C6.36032 11.329 6.55109 11.25 6.75 11.25H16.5C16.6989 11.25 16.8897 11.329 17.0303 11.4697C17.171 11.6103 17.25 11.8011 17.25 12C17.25 12.1989 17.171 12.3897 17.0303 12.5303C16.8897 12.671 16.6989 12.75 16.5 12.75H6.75C6.55109 12.75 6.36032 12.671 6.21967 12.5303C6.07902 12.3897 6 12.1989 6 12Z"
              fill="#183B56"
            />
          </svg>
        </span>
      </div>

      <div class="box_already_registered">
        <span>134</span>
        <p>People are Already Registered for the Next Webinar</p>
        <form>
          <div>
            <span>Tue 5 Oct</span>
            <span>19:00</span>
          </div>
          <label for="">
            <span>Your name*</span>
            <input type="text" name="name" id="" maxlength="64" required />
            <div class="input_validation_name">Please enter a name</div>
          </label>
          <label for="">
            <span>Your work email*</span>
            <input type="email" name="email" id="" maxlength="64" required />
            <div class="input_validation_email">Please enter your email address</div>
          </label>
          <button type="button">
            Register Now
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7203 6.97034C12.79 6.9005 12.8728 6.84508 12.9639 6.80727C13.055 6.76946 13.1527 6.75 13.2513 6.75C13.35 6.75 13.4477 6.76946 13.5388 6.80727C13.6299 6.84508 13.7127 6.9005 13.7823 6.97034L18.2823 11.4703C18.3522 11.54 18.4076 11.6228 18.4454 11.7139C18.4832 11.805 18.5027 11.9027 18.5027 12.0013C18.5027 12.1 18.4832 12.1977 18.4454 12.2888C18.4076 12.3799 18.3522 12.4627 18.2823 12.5323L13.7823 17.0323C13.6415 17.1732 13.4505 17.2523 13.2513 17.2523C13.0522 17.2523 12.8612 17.1732 12.7203 17.0323C12.5795 16.8915 12.5004 16.7005 12.5004 16.5013C12.5004 16.3022 12.5795 16.1112 12.7203 15.9703L16.6908 12.0013L12.7203 8.03234C12.6505 7.96267 12.5951 7.87991 12.5573 7.78879C12.5195 7.69767 12.5 7.59999 12.5 7.50134C12.5 7.40269 12.5195 7.30501 12.5573 7.21389C12.5951 7.12277 12.6505 7.04001 12.7203 6.97034Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>

      <div class="backdrop_popup is_hidden">
        <form class="popup_btn">
          <div class="popup_form_content">
            <div class="close_popup">
              <svg width="24" height="24" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.90473 1.12841L5.59556 4.43758L8.96715 7.80917L7.79109 8.98522L4.41951 5.61364L1.12656 8.90659L0.068036 7.84807L3.36099 4.55512L0.0129204 1.20705L1.18897 0.0309971L4.53704 3.37906L7.84621 0.0698909L8.90473 1.12841Z"
                />
              </svg>
            </div>

            <h2>Save Your Spot</h2>
            <div class="popup_wrapper">
              <div>
                <p>Enter your details on the right to save your spot. During the webinar <b>you will learn:</b></p>
                <ul>
                  <li><span>Earn more money</span></li>
                  <li><span>Start your own business</span></li>
                  <li><span>Sell online</span></li>
                  <li><span>Increase your sales easily</span></li>
                </ul>
              </div>

              <div>
                <label for="">
                  <span>Your current monthly sales *</span>
                  <select class="" name="customFields" required>
                    <option value="">Select an option</option>
                    <option value="No Sales Yet">No Sales Yet</option>
                    <option value="$1 - $1,000">$1 - $1,000</option>
                    <option value="$1,001 - $10,000">$1,001 - $10,000</option>
                    <option value="$10,001 - $25,000">$10,001 - $25,000</option>
                    <option value="Greater than $25,000 a month">Greater than $25,000 a month</option>
                  </select>
                  <div class="input_validation_select">This field is required</div>
                </label>
                <label for="">
                  <span>data and time of attendance</span>
                  <select name="startTime" required>
                    <option value="2021-10-13T11:50:00.000Z">Wed Oct 13 @ 2:50PM EEST</option>
                  </select>
                </label>
                <button type="button">
                  Register Now
                  <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7203 6.97034C12.79 6.9005 12.8728 6.84508 12.9639 6.80727C13.055 6.76946 13.1527 6.75 13.2513 6.75C13.35 6.75 13.4477 6.76946 13.5388 6.80727C13.6299 6.84508 13.7127 6.9005 13.7823 6.97034L18.2823 11.4703C18.3522 11.54 18.4076 11.6228 18.4454 11.7139C18.4832 11.805 18.5027 11.9027 18.5027 12.0013C18.5027 12.1 18.4832 12.1977 18.4454 12.2888C18.4076 12.3799 18.3522 12.4627 18.2823 12.5323L13.7823 17.0323C13.6415 17.1732 13.4505 17.2523 13.2513 17.2523C13.0522 17.2523 12.8612 17.1732 12.7203 17.0323C12.5795 16.8915 12.5004 16.7005 12.5004 16.5013C12.5004 16.3022 12.5795 16.1112 12.7203 15.9703L16.6908 12.0013L12.7203 8.03234C12.6505 7.96267 12.5951 7.87991 12.5573 7.78879C12.5195 7.69767 12.5 7.59999 12.5 7.50134C12.5 7.40269 12.5195 7.30501 12.5573 7.21389C12.5951 7.12277 12.6505 7.04001 12.7203 6.97034Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>

        <form class="popup_after_scroll">
          <div class="popup_form_content">
            <div class="close_popup">
              <svg width="24" height="24" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.90473 1.12841L5.59556 4.43758L8.96715 7.80917L7.79109 8.98522L4.41951 5.61364L1.12656 8.90659L0.068036 7.84807L3.36099 4.55512L0.0129204 1.20705L1.18897 0.0309971L4.53704 3.37906L7.84621 0.0698909L8.90473 1.12841Z"
                />
              </svg>
            </div>

            <div class="popup_wrapper">
              <div>
                <h2>Save Your Spot</h2>
                <p>Enter your details on the right to save your spot. During the webinar <b>you will learn:</b></p>
                <ul>
                  <li><span>Earn more money</span></li>
                  <li><span>Start your own business</span></li>
                  <li><span>Sell online</span></li>
                  <li><span>Increase your sales easily</span></li>
                </ul>
              </div>

              <div>
                <label for="">
                  <span>Your name*</span>
                  <input type="text" name="name" id="" maxlength="64" required />
                  <div class="input_validation_name">Please enter a name</div>
                </label>
                <label for="">
                  <span>Your contact email*</span>
                  <input type="email" name="email" id="" maxlength="64" required />
                  <div class="input_validation_email">Please enter your email address</div>
                </label>
                <label for="">
                  <span>Your current monthly sales *</span>
                  <select class="" name="customFields" required>
                    <option value="">Select an option</option>
                    <option value="No Sales Yet">No Sales Yet</option>
                    <option value="$1 - $1,000">$1 - $1,000</option>
                    <option value="$1,001 - $10,000">$1,001 - $10,000</option>
                    <option value="$10,001 - $25,000">$10,001 - $25,000</option>
                    <option value="Greater than $25,000 a month">Greater than $25,000 a month</option>
                  </select>
                  <div class="input_validation_select">This field is required</div>
                </label>
                <label for="">
                  <span>data and time of attendance</span>
                  <select name="startTime" required>
                    <option value="2021-10-13T11:50:00.000Z">Wed Oct 13 @ 2:50PM EEST</option>
                  </select>
                </label>
              </div>
            </div>

            <button type="button">
              Register Now
              <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.7203 6.97034C12.79 6.9005 12.8728 6.84508 12.9639 6.80727C13.055 6.76946 13.1527 6.75 13.2513 6.75C13.35 6.75 13.4477 6.76946 13.5388 6.80727C13.6299 6.84508 13.7127 6.9005 13.7823 6.97034L18.2823 11.4703C18.3522 11.54 18.4076 11.6228 18.4454 11.7139C18.4832 11.805 18.5027 11.9027 18.5027 12.0013C18.5027 12.1 18.4832 12.1977 18.4454 12.2888C18.4076 12.3799 18.3522 12.4627 18.2823 12.5323L13.7823 17.0323C13.6415 17.1732 13.4505 17.2523 13.2513 17.2523C13.0522 17.2523 12.8612 17.1732 12.7203 17.0323C12.5795 16.8915 12.5004 16.7005 12.5004 16.5013C12.5004 16.3022 12.5795 16.1112 12.7203 15.9703L16.6908 12.0013L12.7203 8.03234C12.6505 7.96267 12.5951 7.87991 12.5573 7.78879C12.5195 7.69767 12.5 7.59999 12.5 7.50134C12.5 7.40269 12.5195 7.30501 12.5573 7.21389C12.5951 7.12277 12.6505 7.04001 12.7203 6.97034Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.5 12C6.5 11.8011 6.57902 11.6103 6.71967 11.4697C6.86032 11.329 7.05109 11.25 7.25 11.25H17C17.1989 11.25 17.3897 11.329 17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303C17.3897 12.671 17.1989 12.75 17 12.75H7.25C7.05109 12.75 6.86032 12.671 6.71967 12.5303C6.57902 12.3897 6.5 12.1989 6.5 12Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </main>
`
document.querySelector(".elementor-section-wrap section:not(:last-child)")
document.querySelector('[data-id="6eb498f"]').remove()
document.querySelector('[data-id="b367b11"]').remove()
document.querySelector('[data-id="49efc9d"]').remove()
document.querySelector('[data-id="f101d95"]').remove()
document.querySelector('[data-id="1bdd115"]').remove()
document.querySelector('[data-id="10a636e"]').remove()
document.querySelector('[data-id="125c139"]').remove()
document.querySelector('[data-id="925c505"]').remove()

document.body.insertAdjacentHTML("afterbegin", tenStepsStyle)
document.querySelector(".elementor-section-wrap").insertAdjacentHTML("afterbegin", tenStepHtml)

// convert time round
let getRoundedDate = (minutes, d = new Date()) => {
  let ms = 1000 * 60 * minutes // convert minutes to ms
  let roundedDate = new Date(Math.ceil(d.getTime() / ms) * ms)
  return roundedDate
}

// dayNow and timeNow
let dayNow = new Date().toDateString().split(" ")
let timeNow = getRoundedDate(5, new Date())

document.querySelector(".box_already_registered form div span:first-child").textContent = `${dayNow[0]} ${dayNow[2]} ${dayNow[1]}`
document.querySelector(".box_already_registered form div span:last-child").textContent = `${timeNow.toTimeString().split(" ")[0].slice(0, 5)}`

// click on 3d cart
document.querySelector(".box_fist_about > div > .scene_box .front_form > button").addEventListener("click", function (e) {
  e.preventDefault()
  setLocalStorInform(".front_form")
  validationForm(".front_form")

  console.log(`button 1 front_form`)
})

document.querySelector(".box_fist_about > div > .scene_box form > span").addEventListener("click", function (e) {
  e.preventDefault()
  document.querySelector(".card_box").classList.toggle("is-flipped")
  console.log(`button 2 back to front_form`)
})

if (document.querySelector(".box_fist_about > div > .scene_box .back_form > button")) {
  document.querySelector(".box_fist_about > div > .scene_box .back_form > button").addEventListener("click", (e) => {
    e.preventDefault()
    validationForm(".back_form")
    console.log(`button 3 back_form`)
  })
}

// click btn for popup
document.querySelector(".box_already_registered button").addEventListener("click", function (e) {
  e.preventDefault()
  setLocalStorInform(".box_already_registered form")
  validationForm(".box_already_registered form")
  console.log(`button 4 already_registered block`)
})

if (document.querySelector(".popup_btn .popup_wrapper div:last-child button")) {
  document.querySelector(".popup_btn .popup_wrapper div:last-child button").addEventListener("click", (e) => {
    e.preventDefault()
    validationForm(".popup_btn .popup_wrapper")

    console.log(`button 6 already_registered form send`)
  })
}

document.querySelector(".first_mobile_btn").addEventListener("click", (e) => {
  e.preventDefault()
  document.querySelector(".backdrop_popup").classList.remove("is_hidden")
  document.body.style.overflow = "hidden"
  document.querySelector(".backdrop_popup .popup_btn").style.display = "none"
})

// click close popup
document.querySelectorAll(".close_popup").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".backdrop_popup").classList.add("is_hidden")
    document.body.style.overflow = ""

    setTimeout(() => {
      document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "flex"
      document.querySelector(".backdrop_popup .popup_btn").style.display = "flex"
    }, 100)
  })
})

setTimeout(() => {
  document.querySelector(".backdrop_popup.is_hidden").style.display = "block"
}, 100)

// slider
let sliderInterval = setInterval(() => {
  if (typeof tns === "function") {
    clearInterval(sliderInterval)

    let slider = tns({
      container: ".my_slider",
      items: 1,
      navPosition: "bottom",
      prevButton: ".arrow_left_btn",
      nextButton: ".arrow_right_btn",
    })
  }
}, 200)

// openSwipeText
function openSwipeText() {
  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")
  let progressLineWidth = document.querySelector(".progress_line").getBoundingClientRect().width
  let progressLineHeight = document.querySelector(".progress_line").getBoundingClientRect().height

  document.querySelectorAll(".box_second_training ul li").forEach((item, idx) => {
    if (idx < dataSwipe) {
      item.classList.add("color_text")
      if (window.innerWidth <= 768) {
        item.style.marginBottom = "105px"
      }
    } else if (idx === dataSwipe) {
      item.classList.add("open_blur_text")
      if (window.innerWidth <= 768) {
        item.style.marginBottom = "105px"
      }
    } else if (idx > dataSwipe) {
      item.classList.add("none_text")
    }
  })

  if (window.innerWidth > 768) {
    document.querySelector(".progress_line").style.width = `calc(11.3% + ${progressLineWidth}px)`

    document.querySelector(".box_second_training .swipe_box > div svg").style.left = `calc(11.3% + ${progressLineWidth}px)`
    if (dataSwipe < 9) {
      document.querySelector(".box_second_training .swipe_box > div > span").style.left = `calc(22.5% + ${progressLineWidth}px)`
    }
    document.querySelector(".box_second_training .swipe_box > div").setAttribute("data-swipe", `${dataSwipe + 1}`)
  }

  if (window.innerWidth <= 768) {
    document.querySelector(".progress_line").style.height = `calc(131px + ${progressLineHeight}px)`
    document.querySelector(".box_second_training .swipe_box > div svg").style.top = `calc(131px + ${progressLineHeight}px - 18px)`

    if (dataSwipe < 9) {
      document.querySelector(".box_second_training .swipe_box > div > span").style.top = `calc(262px + ${progressLineHeight}px - 20px)`
    }
    document.querySelector(".box_second_training .swipe_box > div").setAttribute("data-swipe", `${dataSwipe + 1}`)
  }
}

let scaleSvg = setInterval(() => {
  document.querySelector(".box_second_training .swipe_box > div > span > svg").classList.toggle("scale_svg")
}, 500)

// on click btn swipe
document.querySelector(".box_second_training .swipe_box > div > span").addEventListener("click", () => {
  let dataSwipe = +document.querySelector(".box_second_training .swipe_box > div").getAttribute("data-swipe")
  if (dataSwipe <= 9) {
    openSwipeText()
  }

  if (dataSwipe === 9) {
    clearInterval(scaleSvg)
    document.querySelector(".box_second_training .swipe_box > div > span").style.opacity = "0"
    document.querySelector(".box_second_training .swipe_box > div span").style.cursor = "unset"

    setTimeout(() => {
      let inputInform
      if (localStorage.getItem("inputInform")) {
        inputInform = JSON.parse(localStorage.getItem("inputInform"))
        inputInform.map((item) => {
          if (item.inputName !== "" || item.inputEmail !== "") {
            document.querySelector(`.backdrop_popup .popup_after_scroll input[name='name']`).value = item.inputName
            document.querySelector(`.backdrop_popup .popup_after_scroll input[name='email']`).value = item.inputEmail
          }
        })
      }

      document.querySelector(".backdrop_popup").classList.remove("is_hidden")
      document.body.style.overflow = "hidden"
      document.querySelector(".backdrop_popup .popup_btn").style.display = "none"
    }, 10000)
  }
})

// on click btn send form
if (document.querySelector(".backdrop_popup .popup_after_scroll button:last-child")) {
  document.querySelector(".backdrop_popup .popup_after_scroll button:last-child").addEventListener("click", (e) => {
    e.preventDefault()
    validationForm(".backdrop_popup .popup_after_scroll")

    console.log(`button 7 popup swipe`)
  })
}

if (document.querySelector(".back_form") || document.querySelector(".popup_btn .popup_wrapper") || document.querySelector(".backdrop_popup .popup_after_scroll")) {
  dataToday(".back_form")
  dataToday(".popup_btn .popup_wrapper")
  dataToday(".backdrop_popup .popup_after_scroll")
}

// validation form
function validationForm(parent) {
  if (parent === ".front_form" || parent === ".box_already_registered form" || parent === ".backdrop_popup .popup_after_scroll") {
    let inputValueName = document.querySelector(`${parent} input[name='name']`).value.match(/^[a-zA-Z-]{1,30}$/)
    // let inputValueEmail = document.querySelector(`${parent} input[name='email']`).value.match(/^\S+@\S+\.\S+$/)
    let inputValueEmail = document
      .querySelector(`${parent} input[name='email']`)
      .value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|ua)\b/
      )

    if (inputValueName === null) {
      document.querySelector(`${parent} input[name='name']`).classList.add("error")
      document.querySelector(`${parent} .input_validation_name`).style.display = "block"
    } else {
      document.querySelector(`${parent} input[name='name']`).classList.remove("error")
      document.querySelector(`${parent} .input_validation_name`).style.display = "none"
    }

    if (inputValueEmail === null) {
      document.querySelector(`${parent} input[name='email']`).classList.add("error")
      document.querySelector(`${parent} .input_validation_email`).style.display = "block"
      document.querySelector(`${parent} .input_validation_email`).textContent = "Must be a valid email address"
    } else {
      document.querySelector(`${parent} input[name='email']`).classList.remove("error")
      document.querySelector(`${parent} .input_validation_email`).style.display = "none"
    }

    if (inputValueName !== null && inputValueEmail !== null && document.querySelector(`${parent} .error`) == null) {
      if (parent === ".front_form") {
        document.querySelector(".card_box").classList.toggle("is-flipped")
      }
      if (parent === ".box_already_registered form") {
        document.querySelector(".backdrop_popup").classList.remove("is_hidden")
        document.body.style.overflow = "hidden"
        document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "none"

        setTimeout(() => {
          document.querySelector(".backdrop_popup .popup_btn").style.display = "flex"
        }, 100)
      }
    }
  }

  if (parent === ".back_form" || parent === ".popup_btn .popup_wrapper" || parent === ".backdrop_popup .popup_after_scroll") {
    let selectValue = document.querySelector(`${parent} select[name='customFields']`).value
    let selectValueTime = document.querySelector(`${parent} select[name='startTime']`).value
    let inputValueName
    let inputValueEmail
    let inputInform

    if (parent === ".backdrop_popup .popup_after_scroll") {
      inputValueName = document.querySelector(`.backdrop_popup .popup_after_scroll input[name='name']`).value
      inputValueEmail = document.querySelector(`.backdrop_popup .popup_after_scroll input[name='email']`).value
    } else {
      if (localStorage.getItem("inputInform")) {
        inputInform = JSON.parse(localStorage.getItem("inputInform"))

        inputInform.map((item) => {
          if (item.inputName !== "" || item.inputEmail !== "") {
            inputValueName = item.inputName
            inputValueEmail = item.inputEmail
          }
        })
      }
    }

    if (selectValue === "") {
      document.querySelector(`${parent} select[name='customFields']`).classList.add("error")
      document.querySelector(`${parent} .input_validation_select`).style.display = "block"
    } else if (selectValue !== "") {
      document.querySelector(`${parent} select[name='customFields']`).classList.remove("error")
      document.querySelector(`${parent} .input_validation_select`).style.display = "none"

      if (document.querySelector(`${parent} .error`) == null) {
        if (parent === ".back_form") {
          document.querySelector(".card_box").classList.toggle("is-flipped")
          document.querySelectorAll(`.front_form input`).forEach((item) => {
            item.value = ""
          })
        }

        if (parent === ".popup_btn .popup_wrapper" || parent === ".backdrop_popup .popup_after_scroll") {
          document.querySelector(".backdrop_popup").classList.add("is_hidden")
          document.body.style.overflow = ""

          setTimeout(() => {
            document.querySelector(".backdrop_popup .popup_after_scroll").style.display = "flex"
          }, 100)
        }

        if (parent === ".popup_btn .popup_wrapper") {
          document.querySelectorAll(`.box_already_registered form input`).forEach((item) => {
            item.value = ""
          })
        }

        postForm(inputValueName, inputValueEmail, selectValueTime, selectValue)

        // setTimeout(() => {
        //   document.location = "https://joinnow.live/t/TSa5s8?id=jyjVL6"
        // }, 300)
      }
    }
  }
}

// data today
function dataToday(parent) {
  const options = {
    month: "short",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  }

  let today = new Date()
  let date = getRoundedDate(5, today).toJSON()
  let dataNow = getRoundedDate(5, today)

  document.querySelector(`${parent} select[name='startTime'] option`).value = date
  document.querySelector(`${parent} select[name='startTime'] option`).textContent = dataNow.toLocaleString("en-US", options)
}

//set LocalStor Inform
function setLocalStorInform(parent) {
  let inputInform = []

  localStorage.removeItem("inputInform")
  inputInform.push({
    inputName: document.querySelector(`${parent} input[name='name']`).value,
    inputEmail: document.querySelector(`${parent} input[name='email']`).value,
  })

  localStorage.setItem("inputInform", JSON.stringify(inputInform))
}

if (window.innerWidth <= 768) {
  document.querySelector(".box_second_training p").textContent =
    "Everything you need to know for growing your business in only 45+ minutes. Tap down trough the timeline to discover all the themes"

  document.querySelector(".popup_wrapper div:first-child p").innerHTML = `<p>Enter your details below to save your spot. During the webinar <b>you will learn:</b></p>`
  document.querySelector(".box_already_registered form :nth-child(3) span").textContent = "Your contact email*"
}

// fetch submit form
function postForm(name, email, time, sales) {
  console.log(name, email, time, sales)
  fetch("https://api.joinnow.live/webinars/0e7aJr/registration", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      start_time: `${time}`,
      email: `${email}`,
      timezone: "Europe/Kiev",
      gdprConsentReceived: false,
      customFields: {
        Monthly_Sales: `${sales}`,
        hubspotutk: "27ae00ca6cbfa88154c1f312ccc0674f",
      },
      name: `${name}`,
      linkParams: {},
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      window.location.href = `https://joinnow.live/t/TSa5s8?id=jyjVL6`
    })
    .catch((err) => {
      console.log("Failed fetch ", err)
    })
}
//
