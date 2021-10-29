document.body.insertAdjacentHTML('afterbegin', `
<style>
@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-Regular.woff) format("woff"), url(../fonts/Gilroy/Gilroy-Regular.woff2) format("woff2"), url(../fonts/Gilroy/Gilroy-Regular.ttf) format("truetype");
  font-weight: 400;
  font-style: "normal"; }

@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-Medium.woff) format("woff"), url(../fonts/Gilroy/Gilroy-Medium.woff2) format("woff2"), url(../fonts/Gilroy/Gilroy-Medium.ttf) format("truetype");
  font-weight: 500;
  font-style: "normal"; }

@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-Bold.woff) format("woff"), url(../fonts/Gilroy/Gilroy-Bold.woff2) format("woff2"), url(../fonts/Gilroy/Gilroy-Bold.ttf) format("truetype");
  font-weight: 700;
  font-style: "normal"; }

@font-face {
  font-family: "Gilroy";
  src: url(https://conversionratestore.github.io/projects/samcart/fonts/Gilroy/Gilroy-ExtraBold.woff) format("woff"), url(../fonts/Gilroy/Gilroy-ExtraBold.woff2) format("woff2"), url(../fonts/Gilroy/Gilroy-ExtraBold.ttf) format("truetype");
  font-weight: 800;
  font-style: "normal"; }
*, *::before, *::after {
  padding: 0;
  margin: 0; }
.landing-wrap *::-webkit-input-placeholder {
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #D3D8DB; }

.landing-wrap *:-moz-placeholder {
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #D3D8DB; }

.landing-wrap *::-moz-placeholder {
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #D3D8DB; }

.landing-wrap *:-ms-input-placeholder {
  font-family: 'Gilroy', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #D3D8DB; }

ul {
  list-style: none; }

img {
  display: block;
  object-fit: contain; }

textarea {
  resize: none;
  width: 100%;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; }

button {
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  border: none; }
.elementor-6586 .elementor-element.elementor-element-8dee3e0 {
    display: none;}
.elementor-6586 .elementor-element.elementor-element-a87ddb6 > .elementor-widget-container {
    padding-right: 0;}
.landing-wrap {
  font-family: 'Gilroy', sans-serif;}
.landing-wrap button.btn-orange:active {
    box-shadow: inset 0 3px 5px rgba(200, 109, 56, 0.9);}
.landing-wrap button.btn-orange:hover {
    border-color: transparent;
    color: #fff;
    background: #F2813F;}
.landing-wrap button.btn-orange:hover {
    border-color: transparent;
    color: #fff;
    background: #F2813F;}
b {
  font-weight: 700; }
.landing-wrap p {
    margin-bottom: 0;}
.landing-wrap input{
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #D3D8DB;
  border-radius: 5px;
  background-color: transparent;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  padding: 8px 12px;
  height: auto;
  outline: none; }
  .landing-wrap input.error{
    border-color: red; }
.select {
    position: relative;
    margin-bottom: 25px;}
.select select {
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #D3D8DB;
  width: 100%;
  background: url("https://conversionratestore.github.io/projects/samcart/img/arrow-down.svg") no-repeat right 15px center/12px;
  border-radius: 5px;
  padding: 7.5px 12px;
  font-size: 18px;
  line-height: 25px;
  color: #5A7386;}
.landing-wrap select.error{
  border-color: red;}
.container {
  max-width: 1172px;
  padding: 0 30px; }
.s-first {
  background: linear-gradient(139.61deg, #1D96F3 12.88%, #4B17E6 67.72%);
  padding: 40px 0 120px; }
  .s-first .logo {
    display: block;
    margin: 0 auto 52px;
    width: 146px;
    height: 25px;
    object-fit: contain; }
  .s-first h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 72px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #fff;
    margin-bottom: 41px; }
    .s-first h1 span {
      margin-top: 23px;
      display: block;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      color: #EEF1F3; }

.get-started {
  max-width: 540px;
  width: 100%;
  margin: 0 auto 97px;
  display: flex; }
  .get-started button {
    margin-left: 16px; }

.webinar {
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  display: flex; }
  .webinar h2 {
    padding-right: 10px;
    font-weight: 800;
    font-size: 36px;
    line-height: 45px;
    color: #EEF1F3;
    margin-bottom: 31px;
    max-width: 542px; }
  .webinar .icon {
    width: 25px;
    height: 25px;
    margin-right: 12px; }
  .webinar-list {
    white-space: nowrap;
    margin-left: auto;
    display: block;
    padding-top: 9px; }
    .webinar-list li {
      margin-top: 15px;
      font-size: 18px;
      line-height: 24px;
      position: relative; }
      .webinar-list li:before {
        flex-shrink: 0;
        content: '';
        margin-right: 12px;
        width: 24px;
        height: 24px;
        background: url("https://conversionratestore.github.io/projects/samcart/img/check.svg") no-repeat center/24px; }

.webinar img.avatar {
  border-radius: 50%;
  object-fit: cover;
  width: 195px;
  height: 195px;
  margin-right: 32px; }

hr.line-vertical {
  width: 1px;
  height: 25px;
  background-color: #fff;
  padding: 0;
  margin: 0 28px; }

.s-second {
  padding: 118px 0; }
  .s-second h2 {
    font-weight: 800;
    font-size: 48px;
    line-height: 54px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #183B56;
    margin-bottom: 51px; }

.card {
  width: calc(25% - 23px);
  margin-right: 30px;
  background: #fff;
  border: 1px solid #EEF1F3;
  box-shadow: 0 2px 4px rgba(24, 59, 86, 0.1), 0 12px 32px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 39px; }
  .card:last-child {
    margin-right: 0; }
  .card-img {
    width: 100%;
    height: 175px;
    margin-bottom: 18px; }
  .card p {
    font-size: 16px;
    line-height: 24px;
    color: #183B56; }
  .card .btn-blue {
    margin-top: 28px; }
   
.s-third {
  padding: 113px 0;
  background: linear-gradient(139.61deg, #1D96F3 12.88%, #4B17E6 67.72%); }
  .s-third h2 {
    font-weight: 800;
    font-size: 48px;
    line-height: 54px;
    text-align: center;
    letter-spacing: -0.01em;
    color: #fff;
    max-width: 800px;
    margin: 0 auto 35px; }

.text-big {
  font-weight: 800;
  font-size: 64px;
  line-height: 72px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #F2813F; }

.date {
  font-size: 24px;
  line-height: 24px;
  color: #fff; }

.register-now {
  max-width: 344px;
  margin: 0 auto;
  padding-top: 20px; }
  .register-now label {
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #EEF1F3;
    margin-bottom: 4px;
    margin-top: 20px;
    display: block; }
  .register-now .btn-orange {
    margin: 40px auto 0; }

.popup {
    overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 9;
  display: inline-flex; }
  .popup.active {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0); }
  .popup-wrapper {
    background: #fff;
    border: 1px solid #EEF1F3;
    box-shadow: 0 2px 4px rgba(24, 59, 86, 0.1), 0 12px 32px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    padding: 40px;
    position: relative;
    margin: auto;
    max-width: 990px;
    width: 100%; }
  .popup-content {
    padding: 60px; }
    .popup-content .popup-col {
      width: calc(100% - 300px); }
      .popup-content .popup-col:first-child {
        max-width: 420px; }
      .popup-content .popup-col:last-child {
        max-width: 300px;
        display: flex;
        flex-direction: column; }
  .popup-interested.popup .popup-wrapper {
    max-width: 1060px; }
  .popup-interested.popup .popup-content .popup-col:first-child {
    max-width: 400px; }
  .popup-interested.popup .popup-content .popup-col:last-child {
    max-width: 400px; }
  .popup-interested.popup .btn-orange {
    max-width: 225px;
    margin: 50px auto 0; }
  .popup-interested.popup .form .field-name, .popup-interested.popup .form .select, .popup-interested.popup .form .field-email {
    margin-bottom: 20px; }
  .popup-interested.popup .block-message p {
    font-size: 18px;
    line-height: 27px; }
  .popup h2 {
    font-weight: 800;
    font-size: 36px;
    line-height: 45px;
    color: #122F45;
    margin-bottom: 4px; }
  .popup p {
    font-size: 16px;
    line-height: 24px;
    color: #183B56; }
  .popup .form label {
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #8C9294;
    padding-bottom: 4px; }
  .popup .form .btn-orange {
    padding: 0 15px 0 24px;
    margin-top: auto; }
  .popup .form input {
    color: #5A7386;
    padding: 7.5px 12px; }
  .popup .form .field-name {
    margin-bottom: 25px;}
.field-name, .field-email {
    line-height: 1;}
.btn-close {
  position: absolute;
  right: 40px;
  top: 40px;
  width: 24px;
  height: 24px; }

.icon-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 7px;
  fill: #36B37E;
  background-color: rgba(54, 179, 126, 0.15);
  margin-right: 12px; }

.advantage-list {
  margin: 20px 0 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%; }
  .advantage-list li {
    padding-top: 20px;
    position: relative; }
    .advantage-list li:nth-child(odd) {
      width: 44%; }
    .advantage-list li:before {
      content: '';
      width: 24px;
      height: 24px;
      margin-right: 12px;
      border-radius: 50%;
      background: rgba(54, 179, 126, 0.15) url("https://conversionratestore.github.io/projects/samcart/img/check2.svg") no-repeat center/10px; }

.block-message {
  display: flex;
  background: #F7FAFD;
  border: 1px solid #EEF1F3;
  border-radius: 8px;
  padding: 11px 20px;
  margin-top: 35px; }
  .block-message img {
    margin-right: 20px;
    width: 40px;
    height: auto; }
    .block-message img.small {
      width: 25px;
      height: 27px; }

.list-info {
  margin-top: 30px;
  list-style-type: disc;
  padding-left: 24px; }
  .list-info li {
    font-size: 16px;
    line-height: 24px;
    color: #5A7386; }

[data-popup="register-now"] .popup-content .popup-col:last-child {
  padding-top: 55px; }

.error-message {
  position: absolute;
  left: 0;
  line-height: 1!important;
  top: calc(100% + 2px);
  font-size: 10px!important;
  color: red!important; }

.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center; }

.btn-orange, .btn-blue {
  border-radius: 7px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 46px;
  max-width: 175px;
  width: 100%; }
  .btn-orange img, .btn-blue img {
    width: 24px;
    height: 24px; }

.btn-orange {
  background: #F2813F;
  color: #fff; }
  .btn-orange img {
    margin-left: 24px; }

.btn-blue {
  border: 2px solid #046BD9;
  color: #046BD9;
  line-height: 42px; }
  .btn-blue:active{
   box-shadow: inset 0 3px 5px rgba(206, 219, 233, 0.9);}
  .btn-blue img {
    margin-left: 16px; }

.fw-extraBold {
  font-weight: 800; }

.fs-18 {
  font-size: 18px;
  line-height: 32px; }

p.text-caption {
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #5A7386;
  margin-bottom: 15px;
  text-align: center; }

.relative {
  position: relative; }

.max-w-100 {
  max-width: 100%; }

.w-100 {
  width: 100%; }

.d-block {
  display: block; }

@media only screen and (min-width: 992px) {
    .d-lg-flex {
        display: flex;}
  .ml-lg-auto {
    margin-left: auto; } }

@media only screen and (max-width: 1179px) {
  .s-first {
    padding: 20px 0 55px; }
    .s-first h1 {
      font-size: 48px;
      line-height: 54px; }
      .s-first h1 span {
        font-size: 14px;
        line-height: 20px;
        margin-top: 8px; }
    .s-first .logo {
      margin-bottom: 35px; }
  .webinar img.avatar {
    width: 120px;
    height: 120px; }
  .webinar h2 {
    font-size: 30px;
    line-height: 37px; }
  .webinar-list {
    padding: 0; }
  .card {
    width: calc(50% - 15px);
    margin-bottom: 30px; }
    .card:nth-child(2n+2) {
      margin-right: 0; }
  .card-img {
    width: 80px;
    height: 80px;
    margin-right: 16px;
    margin-bottom: 0; }
  .card-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 16px; }
  .card .btn-blue {
    max-width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 13px 0 24px;
    margin-top: 0; } }

@media only screen and (max-width: 991px) {
.popup-interested.popup .btn-orange {
    max-width: 100%;
    margin: 0 auto;
}
.block-message {
    padding: 11px 18px;
}
    .popup .form label {
        margin-bottom: 0;
    }
    .popup .form .field-name, .select {
        margin-bottom: 16px;
    }
    .popup-text {
        text-align: center; }
    .block-message, .list-info {
        margin-top: 20px; }
    .popup-content .popup-col:last-child {
       padding-top: 20px;}
    .popup h2 {
        text-align: center;
        font-size: 24px;
        line-height: 32px; }
    .advantage-list li {
        font-size: 13px;
        line-height: 20px;
        padding-top: 8px;}
   .popup {
      padding-top: 80px;}
   .popup .popup-wrapper {
      max-width: 460px!important; }
   .popup .popup-content .popup-col {
      max-width: 100%!important;
      width: 100%!important;}
   .popup-interested.popup .block-message p {
   font-size: 14px;
line-height: 20px;
   }
   .advantage-list li:before {
    background-color: transparent;
    margin-right: 0;
   }
  .s-second, .s-third {
    padding: 56px 0; }
  .s-second h2, .s-third h2 {
    font-size: 36px;
    line-height: 45px; }
  .card {
    padding: 22px; }
  .text-big {
    font-size: 48px;
    line-height: 54px;
    margin-bottom: 8px; } 
  .webinar {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap; }
   .btn-close {
   right: 20px;
   top: 20px;
    width: 20px;
    height: 20px; }
    .popup-wrapper {
        padding: 20px; }
   .popup-content {
    padding: 20px 10px 0;}
  .webinar-col {
    padding-bottom: 40px;
    width: calc(100% - 120px - 32px); }
  .webinar-list li {
    white-space: normal; }}
@media only screen and (max-width: 767px) {
  .s-first h1 span {
    margin-top: 8px; }
  .webinar img.avatar {
    width: 69px;
    height: 69px;
    margin-right: 16px; }
  .webinar h2 {
    padding-right: 0;
    font-size: 20px;
    line-height: 24px; }
  .register-now .btn-orange {
    max-width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 14px 0 24px; }
  .webinar-col {
    width: calc(100% - 85px); }
  .webinar-col .align-items-center {
    margin-left: -85px; }
  .card {
    width: 100%;
    max-width: 400px;
    margin: 0 auto 28px !important; }}

@media only screen and (max-width: 575px) {
.s-second h2 {
    margin-bottom: 40px;
}
p.text-caption {
    margin-bottom: 8px;
}
  .get-started {
    display: block; }
  .get-started button {
    margin: 16px 0 0 0;
    max-width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 14px 0 24px; } }
@media only screen and (max-width: 360px) {
    .popup-wrapper {
        padding: 10px; }
    .block-message {
        padding: 11px 10px;}
    .popup-content {
        padding: 20px 0 0 0;
    }
    .container {
        padding: 0 10px;
    }
    .s-first h1 {
        font-size: 44px;
    }
    hr.line-vertical {
        margin: 0 20px;
    }
    .webinar .icon {
        width: 22px;
        height: 22px;
    }
    .s-second h2, .s-third h2 {
        font-size: 33px;
        line-height: 43px;
    }
    .card {
        padding: 15px;
    }
    .card-img {
        width: 75px;
    }
    p.text-caption {
        font-size: 13px;
    }
}
</style>`);

let options = { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' },
    optionsDate = {weekday: 'short', day: 'numeric', month: 'short'},
    optionsTime = {hour: 'numeric', minute: 'numeric' };

let today  = new Date();

let getRoundedDate = (minutes, d=new Date()) => {
    let ms = 1000 * 60 * minutes; // convert minutes to ms
    let roundedDate = new Date(Math.ceil(d.getTime() / ms) * ms);
    return roundedDate
}
let date = getRoundedDate(5, today).toJSON(),
    dateTwo =  getRoundedDate(5, today);

let dayDate = today.toLocaleDateString("en-US", optionsDate).split(' ')[2],
    dateNew = today.toLocaleDateString("en-US", optionsDate).replace(dayDate,'').replace(',', ` ${dayDate}`);

document.querySelector('.elementor-element-42e7721').remove();
document.querySelector('.elementor-section-wrap').insertAdjacentHTML('afterbegin', `
    <div class="landing-wrap">
        <section class="s-first">
          <div class="container"><img class="logo" src="https://conversionratestore.github.io/projects/samcart/img/logo.svg">
            <h1>Create Passive Income with a Simple Online Course [FREE Workshop]<span>Discover how 21,382 normal people are creating real passive income with online courses.</span></h1>
            <div class="form get-started">
              <div class="relative w-100">
                <input type="email" placeholder="Enter email address">
                <p class="error-message"></p>
              </div>
              <button class="btn-orange" type="button" data-button="started">Get Started<img src="https://conversionratestore.github.io/projects/samcart/img/arrow.svg" alt="lamp"></button>
            </div>
            <div class="webinar"><img class="avatar" src="${document.querySelector('.elementor-image img').getAttribute('src')}" alt="avatar">
              <div class="webinar-col">
                <h2>100% Free Online <br> Webinar from SamCart <br> Founder — Brian Moran</h2>
                <div class="align-items-center d-flex"><img class="icon" src="https://conversionratestore.github.io/projects/samcart/img/date.svg" alt="date">
                  <p>On demand</p>
                  <hr class="line-vertical"><img class="icon" src="https://conversionratestore.github.io/projects/samcart/img/clock.svg" alt="clock">
                  <p>45+ Minutes</p>
                </div>
              </div>
              <div class="ml-lg-auto">
                <p class="fs-18 fw-extraBold">Learn during the webinar:</p>
                <ul class="webinar-list">
                  <li class="align-items-center d-flex">How to launch your online course quickly</li>
                  <li class="align-items-center d-flex">What to make your course about</li>
                  <li class="align-items-center d-flex">The secret to get traffic to your course page</li>
                  <li class="align-items-center d-flex">How to generate more sales and revenue</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section class="s-second">
          <div class="container">
            <p class="text-caption">Let’s discover more.</p>
            <h2>After the Workshop You Will be Able to:</h2>
            <div class="flex-wrap d-flex">
              <div class="card">
                <div class="card-top"><img class="card-img" src="https://conversionratestore.github.io/projects/samcart/img/icon-1.svg">
                  <p><b>Become a trusted expert</b> in a niche using the "1 Step Rule"</p>
                </div>
                <button class="btn-blue" type="button" data-button="expert">I’m Interested<img src="https://conversionratestore.github.io/projects/samcart/img/arrow-blue.svg"></button>
              </div>
              <div class="card">
                <div class="card-top"><img class="card-img" src="https://conversionratestore.github.io/projects/samcart/img/icon-2.svg">
                  <p><b>Generate sales around the clock</b> using a simple "1 page funnel"</p>
                </div>
                <button class="btn-blue" type="button" data-button="sales">I’m Interested<img src="https://conversionratestore.github.io/projects/samcart/img/arrow-blue.svg"></button>
              </div>
              <div class="card">
                <div class="card-top"><img class="card-img" src="https://conversionratestore.github.io/projects/samcart/img/icon-3.svg">
                  <p><b>Get</b> (virtually)<b> unlimited</b> traffic from today's #1 traffic source</p>
                </div>
                <button class="btn-blue" type="button" data-button="bar-chart">I’m Interested<img src="https://conversionratestore.github.io/projects/samcart/img/arrow-blue.svg"></button>
              </div>
              <div class="card">
                <div class="card-top"><img class="card-img" src="https://conversionratestore.github.io/projects/samcart/img/icon-4.svg">
                  <p><b>Launch in 7 days</b> (from scratch) without a team or complicated tech</p>
                </div>
                <button class="btn-blue" type="button" data-button="much-more">I’m Interested<img src="https://conversionratestore.github.io/projects/samcart/img/arrow-blue.svg"></button>
              </div>
            </div>
          </div>
        </section>
        <section class="s-third">
          <div class="container">
            <p class="text-big">134</p>
            <h2>People are Already Registered for the Next Webinar</h2>
            <div class="flex-center-center date">
              <p>${dateNew}</p>
              <hr class="line-vertical">
              <p>${getRoundedDate(5,today).toLocaleTimeString("it-IT", optionsTime)}</p>
            </div>
            <div class="form register-now">
              <div class="relative">
                <label>Your name*</label>
                <input type="text" required>
                <p class="error-message"></p>
              </div>
              <div class="relative">
                <label>Your contact email*</label>
                <input type="email" required>
                <p class="error-message"></p>
              </div>
              <button class="btn-orange" type="button" data-button="register-now">Register Now<img src="https://conversionratestore.github.io/projects/samcart/img/arrow.svg"></button>
            </div>
          </div>
        </section>
        <div class="popup" data-popup>
          <div class="form popup-wrapper">
            <button class="btn-close" type="reset" data-close><img src="https://conversionratestore.github.io/projects/samcart/img/close.svg"></button>
            <div class="popup-content">
              <div class="justify-content-between d-lg-flex">
                <div class="popup-col">
                  <h2>Save Your Spot</h2>
                  <p class="popup-text">Finish registration filling up the fields on the right<b class="d-block">and learn how to</b></p>
                  <div class="content"></div>
                </div>
                <div class="popup-col">
                  <label>Your current monthly sales *</label>
                  <div class="select">
                    <select name="monthly_sales" data-label>
                        <option value="">Select an option</option>
                        <option value="No Sales Yet">No Sales Yet</option>
                        <option value="$1 - $1,000">$1 - $1,000</option>
                        <option value="$1,001 - $10,000">$1,001 - $10,000</option>
                        <option value="$10,001 - $25,000">$10,001 - $25,000</option>
                        <option value="Greater than $25,000 a month">Greater than $25,000 a month</option>
                    </select>
                     <p class="error-message"></p>
                  </div>
                  <label>data and time of attendance</label>
                  <div class="select">
                        <select name="start_time" data-label>
                            <option value="${date}">${dateTwo.toLocaleDateString("en-US", options).split(',').join(" @").replace(' @','')} EEST</option>
                        </select>
                       <p class="error-message"></p>
                   </div>
                  <button class="btn-orange max-w-100 justify-content-between d-flex" type="button" data-button>Finish Registration<img src="https://conversionratestore.github.io/projects/samcart/img/arrow.svg" alt="lamp"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>`);

let btnClose = document.querySelector('.btn-close'),
    popup = document.querySelector('.popup'),
    btn = document.querySelectorAll('[data-button]');

let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

let createElementFirst = `
<div class="justify-content-between d-flex">
  <ul class="advantage-list">
    <li class="align-items-center d-flex">Earn more money</li>
    <li class="align-items-center d-flex">Start your own business</li>
    <li class="align-items-center d-flex">Sell online</li>
    <li class="align-items-center d-flex">Increase your sales easily</li>
  </ul>
</div>`;

function createlistInfo(a,b,c) {
    return `
    <ul class="list-info">
        <li>${a}</li>
        <li>${b}</li>
        <li>${c}</li>
    </ul>`;
}

let createElementEmail = `<div class="field-email"><label>Your contact email*</label><div class="relative"><input type="email" required><p class="error-message"></p></div></div>`;
let createElementName = `<div class="field-name"><label>Your name *</label><div class="relative"><input type="text" required><p class="error-message"></p></div></div>`;

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
detectMob()

function creatBlock(iconName,text,classNameImg) {
    return `<div class="block-message">
        <img src="https://conversionratestore.github.io/projects/samcart/img/${iconName}.svg" class="${classNameImg}" alt="lamp"/>
        <p>${text}</p>
   </div>`;
}

function dataLayerPush(action,label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Passive income landing page',
        'eventAction': action,
        'eventLabel': label
    });
}

function showFieldName() {
    if (!document.querySelector('.popup .field-name')) {
        document.querySelector('.popup .popup-col:last-child').insertAdjacentHTML('afterbegin', createElementName);
    }
}

function showPopup() {
    setTimeout(() => {
        document.body.style = 'overflow-y: hidden;';
        if (!document.querySelector('.popup').classList.contains('active')) {
            popup.classList.add('active');
        }
    },100)
}

function postForm(name,email,time,sales) {
    console.log(name,email,time,sales)
    fetch('https://api.joinnow.live/webinars/0e7aJr/registration', {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "POST",
        body:  JSON.stringify({
            "start_time": `${time}`,
            "email": `${email}`,
            "timezone": "Europe/Kiev",
            "gdprConsentReceived": false,
            "customFields": {
                "Monthly_Sales": `${sales}`,
                "hubspotutk": "27ae00ca6cbfa88154c1f312ccc0674f"
            },
            "name": `${name}`,
            "linkParams":{}
        })
    }).then(res => res.json()).then(data => {
        console.log(data)
        window.location.href = `https://webclass.samcart.com/t/0e7aJr?id=Pfm1WE`
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
}

document.querySelector('.get-started input').addEventListener('keyup' , (e) => {
    if (e.keyCode == 13) {
        document.querySelector('.get-started button').click();
    }
})

btn.forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        e.stopImmediatePropagation()
        let getAttr = btn.getAttribute('data-button')
        popup.setAttribute('data-popup', getAttr);

        if (btn.closest('.get-started')) {
            dataLayerPush('Click on Get Started button','Form: Create Passive Income');
            let emailValue = btn.closest('.form').querySelector('input[type="email"]').value;
            if (emailValue != '' && patternEmail.test(emailValue)) {
                if (detectMob() == true) {
                    document.querySelector('.popup .content').innerHTML = createElementFirst + creatBlock('lamp','Indicate your current sales below to let us customize the onboarding process for you.' , 'small');
                } else {
                    document.querySelector('.popup .content').innerHTML = createElementFirst + creatBlock('lamp','Indicate your current sales on the right to let us customize the onboarding process for you.' , 'small');
                }
                document.querySelectorAll('.popup .popup-col:last-child .select')[1].after(document.querySelector('.popup .btn-orange'))
                showFieldName()
                showPopup()
                dataLayerPush('View popup','Popup: Save Your Spot (first screen)');
                document.querySelector('.popup .btn-orange').setAttribute('data-email',btn.closest('.get-started').querySelector('input').value)
                document.querySelector('[name="monthly_sales"]').setAttribute('data-label', 'first screen');
                document.querySelector('[name="start_time"]').setAttribute('data-label', 'first screen');
                btnClose.setAttribute('data-close', 'first screen');
            }
        }

        if (getAttr == 'much-more' && btn.closest('.card')) {
            dataLayerPush('Click on I`m interested button','Launch in 7 days')
            dataLayerPush('View popup','Popup: Save Your Spot (Launch in 7 days)');
            document.querySelector('.popup .content').innerHTML = creatBlock('much-more','Launch in 7 days (from scratch) without a team or complicated tech') + createlistInfo('The secret to building the "laptop lifestyle"','Simplify your sales process for better results','Rapidly increase your conversions, sales, and revenue');
            document.querySelector('[name="monthly_sales"]').setAttribute('data-label', 'Launch in 7 days')
            document.querySelector('[name="start_time"]').setAttribute('data-label', 'Launch in 7 days');
        } else if (getAttr == 'bar-chart' && btn.closest('.card')) {
            dataLayerPush('Click on I`m interested button','Get (virtually) unlimited traffic')
            dataLayerPush('View popup','Popup: Save Your Spot (Get (virtually) unlimited traffic)');
            document.querySelector('.popup .content').innerHTML = creatBlock('bar-chart',`Get (virtually) unlimited traffic from today's #1 traffic source`) + createlistInfo('How to get more people to your course page','Generate dozens of new sales every day',`Secret tool to ethically steal your competitors' ads`);
            document.querySelector('[name="monthly_sales"]').setAttribute('data-label', 'Get (virtually) unlimited traffic')
            document.querySelector('[name="start_time"]').setAttribute('data-label', 'Get (virtually) unlimited traffic')
        } else if (getAttr == 'sales' && btn.closest('.card')) {
            dataLayerPush('Click on I`m interested button','Generate sales around the clock')
            dataLayerPush('View popup','Popup: Save Your Spot (Generate sales around the clock)');
            document.querySelector('.popup .content').innerHTML = creatBlock('sales','Generate sales around the clock using a simple "1 page funnel"') + createlistInfo('Convince anyone to buy your product','Best way to start your online business','Core 4 elements your page needs to sell');
            document.querySelector('[name="monthly_sales"]').setAttribute('data-label', 'Generate sales around the clock')
            document.querySelector('[name="start_time"]').setAttribute('data-label', 'Generate sales around the clock')
        } else if (getAttr == 'expert' && btn.closest('.card')) {
            dataLayerPush('Click on I`m interested button','Become a trusted expert')
            dataLayerPush('View popup','Popup: Save Your Spot (Become a trusted expert)');
            document.querySelector('.popup .content').innerHTML = creatBlock('expert','Become a trusted expert in a niche using the "1 Step Rule"') + createlistInfo('How to get people to listen to you','Discover what to make your course about','The secret to creating a course people want to buy');
            document.querySelector('[name="monthly_sales"]').setAttribute('data-label', 'Become a trusted expert')
            document.querySelector('[name="start_time"]').setAttribute('data-label', 'Become a trusted expert')
        }
        if (getAttr == 'much-more' || getAttr == 'bar-chart' || getAttr == 'sales' || getAttr == 'expert') {
            if (!document.querySelector('.popup-interested')) {
                document.querySelector('.popup').classList.add('popup-interested');
                showFieldName()
                document.querySelector('.popup-interested .field-name').insertAdjacentHTML('afterend', createElementEmail)
                document.querySelector('.popup-interested .justify-content-between').after(document.querySelector('.popup-interested .btn-orange'))
                showPopup();
            }
        }

        if (btn.closest('[data-popup="started"]')) {
            dataLayerPush('Click on Finish Registration button','Popup: Save Your Spot (first screen)');
        } else if (btn.closest('[data-popup="register-now"]')) {
            dataLayerPush('Click on Finish Registration button','Popup: Save Your Spot (footer)');
        } else if (btn.closest('[data-popup="expert"]')) {
            dataLayerPush('Click on Finish Registration button',`Popup: Save Your Spot (Become a trusted expert)`);
        } else if (btn.closest('[data-popup="sales"]')) {
            dataLayerPush('Click on Finish Registration button',`Popup: Save Your Spot (Generate sales around the clock)`);
        } else if (btn.closest('[data-popup="bar-chart"]')) {
            dataLayerPush('Click on Finish Registration button',`Popup: Save Your Spot (Get (virtually) unlimited traffic)`);
        } else if (btn.closest('[data-popup="much-more"]')) {
            dataLayerPush('Click on Finish Registration button',`Popup: Save Your Spot (Launch in 7 days)`);
        }

        if(btn.closest('.register-now')) {
            dataLayerPush('Click on Register Now button','Form: People are Already Registered for the Next Webinar')
            let emailValue = btn.closest('.form').querySelector('input[type="email"]').value;
            if (emailValue != '' && patternEmail.test(emailValue)) {
                if (detectMob() == true) {
                    document.querySelector('.popup .content').innerHTML = createElementFirst + creatBlock('lamp','Indicate your current sales below to let us customize the onboarding process for you.' , 'small');
                } else {
                    document.querySelector('.popup .content').innerHTML = createElementFirst + creatBlock('lamp','Indicate your current sales on the right to let us customize the onboarding process for you.' , 'small');
                }
                document.querySelectorAll('.popup .popup-col:last-child .select')[1].after(document.querySelector('.popup .btn-orange'))

                if (document.querySelector('.field-name')) {
                    document.querySelector('.field-name').remove();
                }
                showPopup()
                dataLayerPush('View popup','Popup: Save Your Spot (footer)');
                document.querySelector('.popup .btn-orange').setAttribute('data-name',btn.closest('.register-now').querySelector('input[type="text"]').value)
                document.querySelector('.popup .btn-orange').setAttribute('data-email',btn.closest('.register-now').querySelector('input[type="email"]').value)
                document.querySelector('[name="monthly_sales"]').setAttribute('data-label', 'footer')
                document.querySelector('[name="start_time"]').setAttribute('data-label', 'footer')
            }
        }
        if (btn.closest('.form')) {
            btn.closest('.form').querySelectorAll('input').forEach((input) => {
                let value = input.value;
                input.setAttribute('class', '')
                if (value == '') {
                    input.classList.add('error');
                    if (input.getAttribute('type') == 'email') {
                        input.nextElementSibling.innerHTML = `Please enter your email address`;
                    } else {
                        input.nextElementSibling.innerHTML = `Please enter a name`;
                    }
                } else if (input.getAttribute('type') == 'email' && !patternEmail.test(value)) {
                    input.classList.add('error');
                    input.nextElementSibling.innerHTML = "Must be a valid email address";
                } else {
                    input.nextElementSibling.innerHTML = "";
                }
            })
            btn.closest('.form').querySelectorAll('select').forEach((select) => {
                if (select.value == '') {
                    select.classList.add('error');
                    select.nextElementSibling.innerHTML = "This field is required";
                } else {
                    select.classList.remove('error');
                    select.nextElementSibling.innerHTML = "";
                }
            });
        }
        popup.querySelector('.btn-orange').setAttribute('data-button', getAttr);

        if (document.querySelector('.popup.active') && document.querySelector('.popup .error') == null) {
            console.log('not error')
            let sales = document.querySelector('[name="monthly_sales"]')[document.querySelector('[name="monthly_sales"]').selectedIndex].value;
            if (btn.getAttribute('data-button') == 'started') {
                let name = document.querySelector('.popup input').value,
                    email = btn.getAttribute('data-email');
                postForm(name,email,date,sales)
            } else if (btn.getAttribute('data-button') == 'register-now') {
                let name = btn.getAttribute('data-name'),
                    email = btn.getAttribute('data-email');
                postForm(name,email,date,sales)
            } else {
                let name = document.querySelector('.popup .field-name input').value,
                    email = document.querySelector('.popup .field-email input').value;
                postForm(name,email,date,sales)
            }
        }
        return false
    })
})

btnClose.addEventListener('click', (e) => {
    document.body.style = 'overflow-y: auto;'
    popup.classList.remove('active');
    document.querySelectorAll('.popup-content .error').forEach((elError) => {
        elError.classList.remove('error');
        elError.nextElementSibling.innerHTML = '';
    })
    setTimeout(() => {
        if(!document.querySelector('popup-interested')) {
            popup.classList.remove('popup-interested');
            if (document.querySelector('.field-email')) {
                document.querySelector('.field-email').remove();
            }
        }
    },300)
})

if (detectMob() == false) {
    document.querySelector('.popup-text').innerHTML = `Finish registration filling up the fields on the right <b class="d-block">and learn how to</b>`
} else {
    document.querySelector('.popup-text').innerHTML = `Finish registration filling up the fields below <b class="d-block">and learn how to</b>`
}

//email (first screen)
document.querySelector('.get-started input').addEventListener('click' , () => {
    dataLayerPush('Click on Email input','Form: Create Passive Income');
})
//name (footer)
document.querySelector('.register-now input[type="text"]').addEventListener('click' , () => {
    dataLayerPush('Click on Your name input','Form: People are Already Registered for the Next Webinar');
})
//email (footer)
document.querySelector('.register-now input[type="email"]').addEventListener('click' , () => {
    dataLayerPush('Click on Your contact email input','Form: People are Already Registered for the Next Webinar');
})
//monthly_sales click
document.querySelector('.popup [name="monthly_sales"]').addEventListener('click' , (event) => {
    let label = event.target.getAttribute('data-label');
    dataLayerPush('Click on Your current monthly sales select',`Popup: Save Your Spot (${label})`);
})
//monthly_sales change
document.querySelector('.popup [name="monthly_sales"]').addEventListener('change' , (event) => {
    let label = event.target.getAttribute('data-label');
    dataLayerPush(`Click on option ${event.target.value} in Your current monthly sales select`,`Popup: Save Your Spot (${label})`);
})
//start_time
document.querySelector('.popup [name="start_time"]').addEventListener('click' , (event) => {
    let label = event.target.getAttribute('data-label');
    dataLayerPush('Click on Data and time of attendance select',`Popup: Save Your Spot (${label})`);
})
function addEvent(label,action) {
    if (label == "started") {
        dataLayerPush(`${action}`,'Popup: Save Your Spot (first screen)');
    } else if (label == "register-now") {
        dataLayerPush(`${action}`,'Popup: Save Your Spot (footer)');
    } else if (label == "expert") {
        dataLayerPush(`${action}`,`Popup: Save Your Spot (Become a trusted expert)`);
    } else if (label == "sales") {
        dataLayerPush(`${action}`,`Popup: Save Your Spot (Generate sales around the clock)`);
    } else if (label == "bar-chart") {
        dataLayerPush(`${action}`,`Popup: Save Your Spot (Get (virtually) unlimited traffic)`);
    } else if (label == "much-more") {
        dataLayerPush(`${action}`,`Popup: Save Your Spot (Launch in 7 days)`);
    }
}
let optionsMut = {
    childList: true,
    subtree: true,
    attributes: true
};
let mut = new MutationObserver(function (muts) {
    if (document.querySelector('.popup .field-name input')) {
        mut.disconnect();
        document.querySelector('.popup .field-name input').addEventListener('click' , (event) => {
            event.stopImmediatePropagation()
            let label = popup.getAttribute('data-popup');
            addEvent(label,'Click on Your name input')
        })
    }
    mut.observe(document, optionsMut);

    if (document.querySelector('.popup .field-email input')) {
        mut.disconnect();
        document.querySelector('.popup .field-email input').addEventListener('click' , (event) => {
            event.stopImmediatePropagation()
            let label = popup.getAttribute('data-popup');
            addEvent(label,'Click on Your contact email input')
        })
    }
    mut.observe(document, optionsMut);

    if (document.querySelector('.popup .btn-close')) {
        mut.disconnect();
        document.querySelector('.popup .btn-close').addEventListener('click' , (event) => {
            event.stopImmediatePropagation()
            let label = popup.getAttribute('data-popup');
            addEvent(label,'Close popup')
        })
    }
    mut.observe(document, optionsMut);
})
mut.observe(document, optionsMut);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2078786,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'passive_income_video');
hj('event', 'passive_income_heat');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Passive income landing page',
    'eventAction': 'loaded'
});
