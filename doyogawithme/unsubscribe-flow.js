; (function () {
  let dirProject =
  "https://conversionratestore.github.io/projects/doyogawithme/img/";

const dataRadio = [
  `I don't have the time for regular yoga`,
  `I've found a cheaper alternative`,
  `I feel like the classes aren't interactive or personalized enough`,
  `My health conditions stop me practicing yoga`,
  `I'm a beginner and I don't know how to make the best of my membership`,
  `My goals have changed and yoga no longer meets my needs`,
  `Other`,
];

const dataPopup = [
  {
    year: "1, 6",
    discount: "40% discount",
    title: "Keep your subscription at a reduced price! ",
    content: `Get an exclusive <b class="c-blue">40% discount</b> and continue taking care of your wellbeing for just <b class="c-blue">$65.40 on our annual plan.</b> <br>
        <b class="mt-2 d-block"> How's that for affordable well-being?  </b>`,
    btn: "Get my 40% off next year",
    img: "image-3",
  },
  {
    year: "0, 3",
    mounthly: "0, 3",
    discount: "",
    title: "Need a break?",
    content: `Pause for a month and resume later without losing any of your progress or membership activity`,
    btn: `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.5 0C19.1094 0 24.5 5.39062 24.5 12C24.5 18.6562 19.1094 24 12.5 24C5.84375 24 0.5 18.6562 0.5 12C0.5 5.39062 5.84375 0 12.5 0ZM11 9C11 8.20312 10.2031 7.5 9.45312 7.5C8.65625 7.5 8 8.20312 8 9V15C8 15.8438 8.65625 16.5 9.5 16.5C10.2969 16.5 11 15.8438 11 15V9ZM17 9C17 8.20312 16.2031 7.5 15.4531 7.5C14.6562 7.5 14 8.20312 14 9V15C14 15.8438 14.6562 16.5 15.5 16.5C16.2969 16.5 17 15.8438 17 15V9Z" fill="white"/>
            </svg>Pause Membership for 1 month`,
    img: "image-4",
  },
  {
    year: "4",
    discount: "40% discount",
    title: "We have something just for you!",
    content: `Our catalog is packed with over <b>350 beginner-friendly classes.</b> <br><span class="mt-3 d-block"></span>
        Starting today you can enjoy <b class="c-blue">40% discount</b> and continue taking care of your wellbeing for just <b class="c-blue">$65.40 on our annual plan. </b> <br>
        <br><b class="mt-2 d-block"> How's that for affordable well-being?</b> `,
    btn: "Get my 40% off next year",
    img: "image-5",
  },
  {
    year: "2, 5",
    discount: "40% discount",
    title: "Continue your practice with a special offer",
    content: `As a valued member, you can enjoy a <b class="c-blue">40% discount on the annual plan</b> and continue your wellness journey with all your favorite yoga classes for only <b class="c-blue">$65.40.</b><br><br><b> How's that for affordable well-being?</b> `,
    btn: "Get my 40% off next year",
    img: "image-6",
  },
  {
    mounthly: "1, 6",
    discount: "3 months for just $13.99",
    title: "Continue your practice with a special offer!",
    content: `Get the next <b class="c-blue">3 months for just $13.99</b> and continue on your wellness journey with our premier platform.<br><br><b class="mt-2 d-block">How's that for affordable well-being?</b>`,
    btn: "Get my 3 months for $13.99",
    img: "image-3",
  },
  {
    mounthly: "4",
    discount: "3 months for just $13.99",
    title: "We have something just for you!",
    content: `Our catalog is packed with over 350 beginner-friendly classes. Starting today you can enjoy <b class="c-blue">3 months of classes for just $13.99</b>. <br><br> <b class="mt-2 d-block">How's that for affordable well-being?</b>`,
    btn: "Get my 3 months for $13.99</b>",
    img: "image-5",
  },
  {
    mounthly: "2, 5",
    discount: "3 months for just $13.99",
    title: "Continue your practice with a special offer",
    content: `As a valued member, you can enjoy the next <b class="c-blue">3 months for just $13.99</b> and continue on your wellness journey with all your favorite yoga classes!<br><br><b class="mt-2 d-block">How's that for affordable well-being?</b>`,
    btn: "Get my 3 months for $13.99",
    img: "image-6",
  },
];

const styleUnsub = `
<style>
body.crs_fixed {
  overflow: hidden!important;
}
#main-content * {
    box-sizing: border-box;
}
.recurly-subscription-cancel-confirm-form,
.o-page__footer,
.crs_page,
.crs_questions,
.crs_radios input,
.o-page__mainContentWrapper {
    display: none;
}
.crs_popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    background: rgba(0, 0, 0, 0.60);
    font-family: 'Manrope';
    box-sizing: border-box;
    overflow-y: auto;
}
.crs_popup.active {
    opacity: 1;
    pointer-events: auto;
}
.crs_popup .crs_container {
    position: relative;
    margin: auto;
    max-width: 840px;
    width: 100%;
    background: var(--white, #FFF);
    border-radius: 12px;
    box-sizing: border-box;
}
.crs_popup[data-index="1"] .crs_container {
    max-width: 600px;
    padding: 40px;
}
.crs_popup[data-index="3"] .crs_container {
    padding: 40px 40px 28px;
    max-width: 600px;
}
.crs_popup[data-index="2"] .crs_container > div {
   display: flex;
   flex-direction: column;
   justify-content: center;
}
.crs_discount {
    color: var(--H1-Black, #272727);
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    text-transform: uppercase;
    background: url('${dirProject}discount-bg.svg') no-repeat left center / cover;
    padding: 6px 12px 6px 27px;
    width: fit-content;
    margin-bottom: 16px;
}
.crs_popup .crs_container > div {
    border-radius: 12px 0 0 12px;
    width: 100%;  
    padding: 30px 30px 21px 30px;
}
.crs_popup_close {
    position: absolute;
    right: 10px;
    top: 10px;
    padding: 10px!important;
    z-index: 2;
}
.crs_popup[data-index="3"] .crs_popup_close {
    right: 6px;
    top: 6px;
}
.crs_popup img {
    width: 400px;
    min-height: 100%;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 0 12px 12px 0;
}
.crs_popup h2 {
    color: var(--H1-Black, #272727);
    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
    text-transform: capitalize;
    margin-bottom: 12px;
    font-family: 'Manrope';
}
.crs_popup[data-index="1"] h2,
.crs_popup[data-index="3"] h2 {
    font-size: 24px;
    line-height: 28px;
}
.crs_popup[data-index="2"] h2 {
    font-size: 32px;
    line-height: 40px;
    text-transform: inherit;
    margin: 0 0 16px 0;
}
.crs_popup[data-index="1"] h2 {
  text-transform: inherit;
}
.crs_popup p,
.crs_popup ul li {
    color: var(--Body-color, #555);
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    margin: 0;
}
.crs_popup[data-index="1"] p {
    font-size: 18px;
    line-height: 28px;
}
.crs_popup[data-index="2"] p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
}
.crs_popup[data-index="3"] p.c-green {
    color: var(--Green-main, #017922);
    font-family: 'Manrope';
    line-height: 26px;
    margin-bottom: 12px;
}
.crs_popup[data-index="3"] p {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
}
.crs_popup ul {
    padding: 10px 0;
    margin: 0;
    list-style-type: none;
}
.crs_popup ul li {
    color: var(--H1-Black, #272727);        
    line-height: 24px; /* 171.429% */
    padding: 6px 0;
}
.crs_popup ul li svg {
    flex-shrink: 0;
    margin-right: 8px;
    margin-top: 2px;
}
.crs_gray_block {
    border-radius: 12px;
    background: var(--Gray-1, #F6F6F6);
    padding: 12px;
    margin-bottom: 12px;
}
.crs_gray_block p {
    font-weight: 400;
    text-align: center;
}
.crs_btn, 
.crs_btn_pause {
    width: 100%;
    border-radius: 30px!important;
    font-size: 18px!important;
    font-style: normal;
    font-weight: 700;
    line-height: 32px!important;
    text-transform: capitalize;
    padding: 9px!important;
    border: 1px solid transparent!important;
    display: block;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
}
.crs_btn svg {
    margin-right: 8px;
}
.crs_btn.green {
    background: var(--Green-main, #017922)!important;
    color: var(--white, #FFF);
    border-color: var(--Green-main, #017922)!important;
    margin-top: 24px;
}
.crs_btn.white {
    background: var(--Green-main, #fff)!important;
    color: var(--Body-color, #555)!important;
    border-color: var(--Body-100, #A5A5A5)!important;
    margin: 12px 0 3px;
} 
.crs_btn.blue {
    background: var(--Blue-Main, #027DB8);
    color: #FFFFFF;
    margin-top: 24px;
}
.crs_btn_pause {
    color: var(--Body-color, #555)!important;
}
.crs_btn_pause svg {
    margin-right: 8px;
}
.crs_page {
    width: 100%;
    font-family: 'Manrope';
}
.crs_page.active {
    display: block;
}
.crs_page * {
    box-sizing: border-box;
}
.crs_page p {
    margin: 0;
    max-width: 100%;
}
.crs_page .crs_container {
    max-width: 1265px;
    margin: 0 auto;
    width: 100%;
    padding: 40px 20px 140px;
}
.crs_page h1 {
    color: var(--H1-Black, #272727);
    font-family: 'Manrope', sans-serif;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 16px;
}
.crs_page h1 span {
    color: var(--Blue-Main, #027DB8);
}
.crs_page h1+p {
    color: var(--Blue-Main, #027DB8);
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px; /* 216.667% */
}
.crs_page .crs_container > div > div {
    width: calc(50% - 10px);
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
    padding: 30px;
    margin-top: 28px;
}
.crs_page .crs_container > div > div:not(:last-child) {
    margin-right: 20px;
}
.crs_page h2 {
    color: var(--H1-Black, #272727);
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    padding-bottom: 4px;
    margin: 0;
}
.crs_page h2 span {
    color: var(--Green-main, #017922);
}
.crs_page_item {
    width: calc(50% - 10px);
    margin-right: 20px;
    margin-top: 20px;
    border-radius: 12px;
    border: 1px dashed var(--Gray, #E0E0E0);
    background: var(--Gray-1, #F6F6F6);
    padding: 26px 0;
}
.crs_page_item p {
    color: var(--Body-color, #555);
    font-size: 18px;
    font-weight: 500;
}
.crs_page_item p:last-child {
    color: var(--Blue-Main, #027DB8);
    font-size: 24px;
    font-weight: 700;
    margin-top: 8px;
}
.crs_page_item:nth-child(2n+2) {
    margin-right: 0;
}
.crs_page ul {
    padding: 4px 0 0 0;
    border-top: 1px solid #E0E0E0;
    margin: 12px 0 0 0;
}
.crs_page ul li {
    padding: 0;
    margin: 12px 0 0 0;
    color: var(--H1-Black, #272727);
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 142.857% */
}
.crs_page ul li svg {
    flex-shrink: 0;
    margin-right: 12px;
}
.crs_page_footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 24px 60px;
    border-top: 1px solid #E0E0E0;
    z-index: 3;
    background: #fff;
}
.crs_page_footer .crs_btn {
    max-width: 330px;
    min-width: 310px;
    width: fit-content;
    margin: 0 6px;
    padding: 9px 27px!important;
}
.crs_questions.active {
    display: block;
}
.crs_questions > div > div:not(.crs_page_footer) {
    padding: 40px 60px 0px;
    font-family: 'Manrope', sans-serif;
    width: 57%;
    display: flex;
    flex-direction: column;
}
.crs_questions h2 {
    color: var(--H1-Black, #272727);
    font-family: 'Manrope', sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
    margin: 0 0 24px 0;
}
.crs_questions h4 {
    color: #000;
    font-family: 'Manrope', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; 
}
.crs_req {
    color: var(--Blue-Main, #027DB8);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    border-radius: 30px;
    background: var(--Gray-1, #F6F6F6);
    padding: 0 11.5px;
    margin-left: 13px;
}
.crs_radios {
    padding: 23px 0 5px;
}
.crs_questions textarea {
    border-radius: 8px!important;
    border: 1px solid var(--Gray, #E0E0E0);
    width: 100%;
    padding: 16px!important;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin: 24px 0;
    line-height: 24px;
}
.crs_questions_block {
    border-radius: 12px;
    border: 1px dashed #D6D6D6;
    background: var(--white, #FFF);
    padding: 16px;
    color: var(--H1-Black, #272727);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 144.444% */
    margin-bottom: 24px;
}

.crs_questions > div > img {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    width: 43%;
    object-fit: cover;
}
.crs_questions .crs_btn.white[disabled] {
    cursor: no-drop;
}
.crs_radios label {
    margin-bottom: 18px;
}
.crs_radio {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #A5A5A5;
    display: block;
    position: relative;
    margin-right: 13px;
    flex-shrink: 0;
}
.crs_radio:before {
    content: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #027DB8;
}
.crs_radios input:checked ~ .crs_radio:before {
    content: '';
}
.crs_radios input:checked ~ .crs_radio+span {
    content: '';
    color: var(--H1-Black, #272727);
}
.crs_radio+span {
    font-family: 'Manrope', san-serif;
    color: var(--Body-color, #555);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 144.444% */
}
/* base */
.d-flex {
    display: flex;
}
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.items-center {
    align-items: center;
}
.flex-wrap {
    flex-wrap: wrap;
}
.text-center {
    text-align: center;
}
.c-blue {
    color: var(--Blue-Main, #027DB8);
}
@media only screen and (min-width: 768px) {
    .flex-md-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .text-md-center {
        text-align: center;
    }
    .items-md-center {
        align-items: center;
    }
    .d-md-flex {
        display: flex;
    }
    .d-md-none {
      display: none!important;
    }
    .crs_questions .crs_page_footer {
        position: sticky;
        bottom: 0;
        box-shadow: 0px -2px 16px 0px rgba(0, 0, 0, 0.10);
        width: auto;
        margin: auto -60px 0 ;
    }
    .crs_popup:not([data-index="1"], [data-index="3"]) .crs_container {
        min-height: 624px;
    }
    
}
@media only screen and (max-width: 767px) {
    .crs_popup[data-index="0"] img,
    .crs_questions > div > img {
        display: none;
    }
    .crs_popup {
        padding: 12px 12px 0;
    }
    .crs_popup .crs_container {
        max-width: 340px;
        flex-direction: column-reverse;
        transition: all 0.2s ease;
    }
    .crs_popup.active:not([data-index="1"],[data-index="3"]) .crs_container {
       transform: translateY(0);
    }
    .crs_popup:not([data-index="1"],[data-index="3"]) .crs_container {
        margin: auto auto 0;
        border-radius: 12px 12px 0 0;
        height: fit-content;
        transform: translateY(100%);
    }
    .crs_popup[data-index="3"] .crs_container {
        padding: 16px 16px 24px;
    }
    .crs_popup[data-index="3"] h2 {
        font-size: 20px;
    }
    .crs_popup[data-index="3"] p {
        font-size: 14px;
        line-height: 22px;
    }
    .crs_popup[data-index="3"] p.c-green {
        font-size: 18px;
    }
    .crs_popup .crs_container > div {
        padding: 32px 16px 10px;
    }
    .crs_btn.blue {
        margin-top; 16px;
    }
    .crs_gray_block {
        padding: 12px 10px;
    }
    .crs_gray_block p {
        font-size: 12px;
        line-height: 20px;
    }
    .crs_popup_footer {
        border-top: 1px solid var(--Gray, #E0E0E0);
        background: #FFF;
        position: sticky;
        bottom: 0;
        z-index: 2;
        padding: 0 16px;
        margin: 3px -16px 0;
    }
    .crs_popup_footer .crs_btn {
        margin-top: 12px!important;
    }
    .crs_page .crs_container {
        padding: 24px 20px 170px;
    }
    .crs_page h1 {
        font-size: 24px;
        line-height: 32px;
        text-transform: capitalize;
        margin-bottom: 8px;
    }
    .crs_page h1+p {
        font-size: 18px;
        line-height: 26px;
    }
    .crs_page .crs_container > div > div {
        width: 100%;
        margin: 16px 0 0 0!important;
        padding: 20px 16px;
    }
    .crs_page h2 {
        font-size: 20px;
        line-height: 28px;
        padding: 0 4px 8px;
    }
    .crs_page_item {
        margin: 12px 0 0 0!important;
        width: 100%;
        padding: 12px;
    }
    .crs_page_footer {
        padding: 1px 16px 12px;
        box-shadow: none;
    }
    .crs_page_footer .crs_btn {
        margin: 12px 0 0 0!important;
        width: 100%;
        max-width: 100%;
    }
    .crs_page ul {
        margin: 8px -16px 0 -16px;
        padding: 4px 16px 0;
    }
    .crs_questions > div > div:not(.crs_page_footer),
    .crs_questions > div > img {
        width: 100%;
    }
    .crs_questions > div > div:not(.crs_page_footer) {
        padding: 24px 20px 170px;
    }
    .crs_questions h2 {
        font-size: 24px;
        line-height: 28px; 
        margin: 0 0 16px 0;
    }
    .crs_questions h4 {
        font-size: 18px;
        line-height: 26px; 
    }
    .crs_req {
        width: fit-content;
        margin: 12px 0 0 0; 
        padding: 0 12px;
    }
    .crs_radio+span {
        font-size: 16px;
        line-height: 24px;
    }
    .crs_shadow_mob {
        border-radius: 12px;
        background: #FFF;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
        padding: 24px 16px 16px;
    }
    .crs_questions textarea {
        margin: 14px 0 20px;
    }
    .crs_questions_block {
        border: 1px dashed var(--Gray, #E0E0E0);
        background: var(--Gray-1, #F6F6F6);
        padding: 12px;
        font-size: 16px;
        margin: 0;
    }
    .crs_popup[data-index="1"] .crs_container {
        padding: 24px 16px;
    }
    .crs_popup[data-index="1"] h2 {
        text-transform: none;
        padding-right: 15px;
    }
    .crs_popup[data-index="1"] p {
        font-size: 16px;
        line-height: 24px
        margin-top: 16px;
    }
    .crs_popup[data-index="1"] .crs_btn.green {
        margin-top: 16px;
    }
    .crs_popup img {
        width: 100%;
        height: 274px;
        border-radius: 12px;
    }
    .crs_popup[data-index="2"] {
        padding-bottom: 0;
    }
    .crs_popup[data-index="2"] .crs_container > div {
        padding: 16px 16px 24px;
    }
    .crs_discount {
        margin-bottom: 8px;
    }
    .crs_popup[data-index="2"] h2 {
        font-size: 20px;
        line-height: 26px;
        margin: 0 0 8px 0;
    }
    .crs_popup[data-index="2"] p {
        font-size: 14px;
        line-height: 22px;
    }
    .crs_btn, 
    .crs_btn_pause {
        font-size: 16px!important;
    }
    .crs_popup_close {
      top: 4px;
      right: 0;
    }
    .crs_popup .crs_container > div {
      padding-top: 12px;
    }
    .crs_popup[data-index="0"] h2 {
      padding-right: 24px;
    }
    .crs_popup[data-index="0"] .crs_popup_close svg path {
      stroke: #000;
    }
}
</style>`;

var startTime = 0;
let startTimeInterval;

function trackVisibility() {
  const questionsBlock = document.querySelector('.crs_questions_block');

  if (!questionsBlock) {
    console.error('Елемент .crs_questions_block не знайдено');
    return;
  }

  let previousFocusTime = 0;

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Почати заново при входженні в поле зору
        previousFocusTime = performance.now();
      } else {
        // При виході із поля зору, і якщо .crs_questions активний
        const isQuestionsActive = document.querySelector('.crs_questions.active');
        if (isQuestionsActive) {
          const exitTime = performance.now();
          const focusTime = (exitTime - previousFocusTime) / 1000; // Перевести мілісекунди в секунди
          // Додати до попереднього часу фокусування
          previousFocusTime = exitTime;
          pushDataLayer(['exp_impr_acc_v_sdc_info', focusTime.toFixed(0), 'Visibility', 'Still decided to cancel? If you proceed with the cancellation']);
        }
      }
    });
  }, options);

  observer.observe(questionsBlock);
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

const clarityInterval = setInterval(function () {
  if (typeof clarity == "function") {
    clearInterval(clarityInterval);
    clarity("set", " exp_impr_acc", "variant_1");
  }
}, 200);

const lotus = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.978 9.99933C8.978 9.99933 6.50973 7.42188 5.0689 7.42188C3.62808 7.42188 0 9.99933 0 9.99933C0 9.99933 3.62812 12.5768 5.06894 12.5768C6.50977 12.5768 8.978 9.99933 8.978 9.99933Z" fill="#027DB8"/>
    <path d="M9.99933 8.978C9.99933 8.978 12.5768 6.50973 12.5768 5.0689C12.5768 3.62808 9.99933 0 9.99933 0C9.99933 0 7.42188 3.62812 7.42188 5.06894C7.42188 6.50977 9.99933 8.978 9.99933 8.978Z" fill="#027DB8"/>
    <path d="M9.99933 11.0234C9.99933 11.0234 7.42188 13.4917 7.42188 14.9325C7.42188 16.3734 9.99933 20.0015 9.99933 20.0015C9.99933 20.0015 12.5768 16.3734 12.5768 14.9325C12.5768 13.4917 9.99933 11.0234 9.99933 11.0234Z" fill="#027DB8"/>
    <path d="M11.0234 9.99933C11.0234 9.99933 13.4917 12.5768 14.9325 12.5768C16.3734 12.5768 20.0015 9.99933 20.0015 9.99933C20.0015 9.99933 16.3734 7.42188 14.9325 7.42188C13.4917 7.42188 11.0234 9.99933 11.0234 9.99933Z" fill="#027DB8"/>
    <path d="M14.9311 6.24679C15.207 6.24679 15.6012 6.28867 16.2317 6.51718C16.7484 4.81741 17.0711 2.92969 17.0711 2.92969C15.9842 3.11306 14.5859 3.41659 13.4766 3.74933C13.7114 4.39157 13.7539 4.79086 13.7539 5.06965C13.7539 5.5649 13.5954 6.114 13.2734 6.72733C13.8868 6.40533 14.4359 6.24679 14.9311 6.24679Z" fill="#027DB8"/>
    <path d="M3.74933 6.5242C4.39157 6.2893 4.79086 6.24679 5.06965 6.24679C5.56494 6.24679 6.11388 6.40526 6.72733 6.72733C6.40526 6.11388 6.24679 5.5649 6.24679 5.06965C6.24679 4.79377 6.28867 4.39957 6.51718 3.76906C4.81741 3.25239 2.92969 2.92969 2.92969 2.92969C3.11047 4.00428 3.41588 5.41251 3.74933 6.5242Z" fill="#027DB8"/>
    <path d="M16.2514 13.4765C15.6092 13.7114 15.2099 13.7539 14.9311 13.7539C14.4358 13.7539 13.8868 13.5954 13.2734 13.2734C13.5954 13.8868 13.7539 14.4358 13.7539 14.9311C13.7539 15.207 13.712 15.6012 13.4835 16.2317C15.1833 16.7483 17.071 17.071 17.071 17.071C16.8888 15.9883 16.5834 14.5832 16.2514 13.4765Z" fill="#027DB8"/>
    <path d="M5.06965 13.7539C4.79377 13.7539 4.39957 13.7121 3.76906 13.4836C3.25239 15.1834 2.92969 17.071 2.92969 17.071C4.01243 16.8888 5.41757 16.5834 6.52424 16.2514C6.28933 15.6092 6.24682 15.2099 6.24682 14.9311C6.24682 14.4358 6.40537 13.8868 6.72733 13.2734C6.114 13.5954 5.56486 13.7539 5.06965 13.7539Z" fill="#027DB8"/>
</svg>`;

const html = ` 
    <div class="crs_questions">
        <div class="d-md-flex">
            <div>
                <h2>Still decided to cancel?</h2>
                <div class="crs_shadow_mob">
                    <div class="d-md-flex items-center">
                        <h4>We'd like to ask why you're leaving?</h4>
                        <div class="crs_req">*Required</div>
                    </div>
                    <div class="crs_radios">
                        ${dataRadio
                          .map(
                            (item) => `
                            <label class="d-flex items-md-center">
                                <input type="radio" name="radio">
                                <span class="crs_radio"></span>
                                <span>${item}</span>
                            </label>
                        `
                          )
                          .join("")}
                    </div>
                
                    <h4>Is there anything else you would like to add or share about your experience?</h4>
                    <textarea cols="5" rows="4" placeholder="Write here"></textarea>
                    <div class="crs_questions_block">If you proceed with the cancellation now, you will still be able 
                        to access premium content until 
                    </div>
                    <div class="crs_page_footer flex-md-center">
                        <div class="crs_btn green" type="button">i’d like to keep my membership</div>
                        <div class="crs_btn white" type="button" disabled>cancel subscription</div>
                    </div>
                </div>
            </div>

            <img src="${dirProject}image-2.png" alt="image">
        </div>
    </div>
    <div class="crs_page">
        <div class="crs_container">
            <h1 class="text-md-center"><span>${
              window.location.href.includes('/subscription') ? window.location.href.split("yogi/")[1].split("/subscription")[0] : ''
            }</span>,you can choose to cancel today or commit to a lifelong journey of self-care, love, and acceptance</h1>
            <p class="text-md-center">Before you leave, why not take a look at all the self-care progress you've made?</p>
            <div class="d-md-flex">
                <div class="">
                    <h2 class="text-md-center">Your journey with <span>DoYogaWithMe</span></h2>
                    <div class="d-flex flex-wrap text-center">
                        <div class="crs_page_item">
                            <p>Member  Since</p>
                            <p>Jul 18, 2022</p>
                        </div>
                        <div class="crs_page_item">
                            <p>Completed Practices</p>
                            <p>118</p>
                        </div>
                        <div class="crs_page_item">
                            <p>Active Days</p>
                            <p>209</p>
                        </div>
                        <div class="crs_page_item">
                            <p>Time Spent Practicing</p>
                            <p>52h 32 minutes</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-md-center">Are you sure you want to lose these features?</h2>
                    <ul>
                        <li class="d-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M16.1484 22.6484L11.25 23.6118C11.6866 25.3517 12.4206 27.003 13.4197 28.4929L17.5359 25.491L16.814 24.5286C16.4046 23.9849 16.1723 23.3286 16.1484 22.6484Z" fill="#027DB8"/>
                                <path d="M23.7109 10.5516L21.6673 8.50781L20.2932 10.798V11.4963C20.2948 13.0517 19.8451 14.5742 18.9988 15.8791L18.4375 18.125H19.5723C20.0938 18.1262 20.6088 18.0095 21.0788 17.7835C21.5488 17.5576 21.9616 17.2283 22.2864 16.8203C22.6147 16.4075 22.8454 15.9258 22.9611 15.4113C23.0769 14.8967 23.0747 14.3627 22.9548 13.8491C22.7286 13.2881 22.6798 12.6712 22.815 12.0816C22.9502 11.492 23.2629 10.958 23.7109 10.5516Z" fill="#027DB8"/>
                                <path d="M29.043 16.022C29.0419 17.0925 28.7866 18.1475 28.2982 19.1001L27.8617 19.9495C27.7758 20.1802 27.7703 20.4332 27.8461 20.6674C27.9219 20.9016 28.0747 21.1033 28.2795 21.2398L29.1596 21.8266L30.8237 21.4107L29.831 15.951C29.8133 15.8535 29.7597 15.7661 29.6808 15.7061C29.6019 15.6461 29.5035 15.6177 29.4047 15.6266C29.306 15.6355 29.2142 15.681 29.1473 15.7542C29.0804 15.8274 29.0434 15.9229 29.0434 16.022H29.043Z" fill="#027DB8"/>
                                <path d="M15.4825 18.7501H16.993L17.8121 15.4735C17.8294 15.404 17.8584 15.3379 17.898 15.2782C18.6458 14.1588 19.0443 12.8426 19.043 11.4964V10.6251C19.043 10.5118 19.0738 10.4007 19.1321 10.3035L21.0071 7.17853C21.056 7.09705 21.1228 7.02779 21.2024 6.976C21.2821 6.92421 21.3725 6.89126 21.4668 6.87965C21.561 6.86805 21.6567 6.87809 21.7466 6.90902C21.8364 6.93994 21.918 6.99094 21.9852 7.05814L25.1065 10.1794L25.1092 10.1822L25.1102 10.1831L25.1117 10.1849C25.1294 10.203 25.146 10.2222 25.1615 10.2423C25.1635 10.245 25.1662 10.2474 25.1682 10.2501L26.9897 12.6787L28.7658 14.0108L29.5407 12.0733L26.7778 9.8629C26.7342 9.82806 26.6955 9.78754 26.6627 9.74243L22.3162 3.76571C22.1568 3.54674 21.9431 3.37312 21.6962 3.26202C21.4492 3.15092 21.1775 3.10617 20.908 3.13221C20.6384 3.15825 20.3804 3.25416 20.1592 3.41048C19.9381 3.5668 19.7616 3.7781 19.6471 4.02353L16.2578 11.286C15.9535 11.9362 15.4998 12.5052 14.9336 12.9466L13.418 14.1252V16.6859C13.418 16.957 13.4714 17.2254 13.5751 17.4759C13.6789 17.7263 13.831 17.9539 14.0227 18.1456C14.2144 18.3373 14.442 18.4893 14.6925 18.593C14.9429 18.6967 15.2114 18.7501 15.4825 18.7501Z" fill="#027DB8"/>
                                <path d="M15.1475 9.205C15.2423 9.31769 15.2943 9.46027 15.2943 9.60758V10.3953L17.8814 4.85156L15.2889 5.78125C15.2543 5.7936 15.2251 5.81779 15.2065 5.84956C15.1879 5.88134 15.1811 5.91865 15.1874 5.95492L15.2436 6.28039C15.2716 6.4424 15.2346 6.6089 15.1407 6.74383L14.2741 7.98867C14.2545 8.01688 14.2447 8.05078 14.2463 8.08512C14.2478 8.11945 14.2607 8.15231 14.2828 8.17859L15.1475 9.205Z" fill="#027DB8"/>
                                <path d="M35.7278 32.9146L31.1831 22.6094L29.7181 22.9756L29.9837 25.6328C30.1769 27.5773 30.7246 29.4699 31.5996 31.2171L32.1014 32.2209C32.1567 32.3314 32.1779 32.4559 32.1625 32.5786C32.147 32.7012 32.0955 32.8165 32.0145 32.9099C31.9335 33.0033 31.8267 33.0705 31.7074 33.1032C31.5882 33.1358 31.462 33.1324 31.3447 33.0933L23.8447 30.5933C23.7668 30.5673 23.6948 30.5263 23.6328 30.4725C23.5708 30.4187 23.52 30.3532 23.4833 30.2798L22.9688 29.2506C22.5904 28.4967 22.0395 27.8426 21.361 27.3415C20.6824 26.8403 19.8953 26.5062 19.0634 26.3663L18.5734 26.2846L14.1602 29.5034C14.351 29.7425 14.5491 29.9763 14.7527 30.2025C16.196 31.8074 17.9017 33.1552 19.7969 34.1883L19.8003 34.1902C22.299 35.5484 25.0673 36.3367 27.9066 36.4985L33.0491 36.7841C33.4688 36.8087 33.8887 36.7365 34.2761 36.573C34.6635 36.4096 35.0082 36.1592 35.2834 35.8413C35.6266 35.4454 35.8505 34.9603 35.9292 34.4423C36.0078 33.9243 35.938 33.3946 35.7278 32.9146Z" fill="#027DB8"/>
                                <path d="M17.2093 35.1139C17.2085 35.1231 17.2072 35.1323 17.2063 35.1415C17.586 35.0632 17.9541 34.9366 18.3015 34.7647C17.8006 34.4574 17.3147 34.1296 16.8438 33.7812C17.1208 34.1676 17.2504 34.6403 17.2093 35.1139Z" fill="#027DB8"/>
                                <path d="M15.1228 34.1926L13.1775 34.4191C13.1534 34.4219 13.1293 34.4233 13.1051 34.4233H11.3018C11.0522 34.4234 10.8071 34.4905 10.5922 34.6176C10.3773 34.7447 10.2005 34.9271 10.0801 35.1459L9.85941 35.5467C9.82768 35.6044 9.81153 35.6693 9.81255 35.7351C9.81356 35.8009 9.83171 35.8654 9.8652 35.922C9.89869 35.9787 9.94637 36.0256 10.0035 36.0582C10.0607 36.0909 10.1254 36.108 10.1912 36.108H14.0946C14.6803 36.1077 15.2473 35.9019 15.6969 35.5266C15.822 35.4219 15.91 35.2797 15.9478 35.121C15.9856 34.9624 15.9713 34.7957 15.9068 34.6459C15.8424 34.4961 15.7313 34.371 15.5901 34.2893C15.4489 34.2077 15.2852 34.1737 15.1232 34.1926H15.1228Z" fill="#027DB8"/>
                                <path d="M10.7933 21.4964C10.8586 21.5834 10.9 21.686 10.9135 21.7939C10.9381 21.991 10.9668 22.1889 10.9994 22.3862L16.3458 21.3348L16.6806 19.9964H15.4826C14.6036 19.9964 13.7606 19.6472 13.1391 19.0257C12.5175 18.4042 12.1683 17.5612 12.1683 16.6822V15.0938L10.9163 16.0675C10.2095 16.6173 9.74676 17.4227 9.62789 18.3103C9.50902 19.1979 9.74349 20.0966 10.2808 20.813L10.7933 21.4964Z" fill="#027DB8"/>
                                <path d="M13.0671 33.1745L14.9765 32.952C15.3057 32.9136 15.6393 32.9573 15.9476 33.0791C15.1914 32.4511 14.4818 31.7691 13.8243 31.0385C13.5247 30.7057 13.2369 30.3571 12.9643 30H6.69497C6.41725 30.0006 6.14448 30.0735 5.90357 30.2117C5.66266 30.3499 5.46194 30.5485 5.32122 30.7879L5.21849 30.9635C5.01998 31.3019 4.95364 31.7017 5.03221 32.0861C5.11079 32.4704 5.32873 32.8121 5.64412 33.0455C6.62746 33.7758 7.72508 34.3381 8.89232 34.7095L8.98318 34.5445C9.21148 34.1297 9.54694 33.7838 9.95453 33.5429C10.3621 33.3019 10.8269 33.1749 11.3004 33.1748L13.0671 33.1745Z" fill="#027DB8"/>
                            </svg>
                            <p>Unlimited access to 1000+ yoga, meditation and movement classes</p>
                        </li>
                        <li class="d-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M5.21484 16.145C5.21484 16.7878 9.58632 19.3593 13.3149 19.3593C14.7522 19.4449 16.1835 19.1122 17.4357 18.4014C17.097 17.7691 16.8955 17.0726 16.8443 16.3571C16.825 16.2221 16.8121 16.0807 16.8057 15.9328C16.7928 15.7528 16.7864 15.5664 16.7864 15.3735C16.7864 15.2321 16.7928 15.0907 16.8057 14.9428C16.8404 14.5044 16.9135 14.0698 17.0243 13.6442C17.0178 13.6378 17.005 13.6378 16.9985 13.6314C16.6031 13.437 16.1868 13.2882 15.7578 13.1878C14.9565 13.0058 14.1365 12.9195 13.3149 12.9306C12.6777 12.934 12.0425 13.0007 11.4185 13.1299C8.24916 13.7342 5.21484 15.6114 5.21484 16.145Z" fill="#027DB8"/>
                                <path d="M9.16091 5.30936C8.78163 5.68865 9.60449 9.17297 11.4174 11.8473C12.0411 11.7179 12.6762 11.651 13.3132 11.6474C14.1348 11.6362 14.9548 11.7225 15.7561 11.9045C15.5741 11.1032 15.4878 10.2832 15.4989 9.46162C15.5023 8.82442 15.569 8.18914 15.6982 7.56517C13.0245 5.75293 9.5402 4.93007 9.16091 5.30936Z" fill="#027DB8"/>
                                <path d="M22.9576 11.9023C23.1396 11.1011 23.2259 10.2811 23.2148 9.45947C23.2114 8.82227 23.1447 8.18699 23.0155 7.56301C22.4112 4.39369 20.534 1.35938 20.0004 1.35938C19.4669 1.35938 17.5897 4.39369 16.9854 7.56301C16.8562 8.18699 16.7895 8.82227 16.7861 9.45947C16.775 10.2811 16.8613 11.1011 17.0433 11.9023C17.1975 11.9409 17.339 11.9795 17.4804 12.0245C17.9626 10.7773 18.824 9.07375 20.0004 9.07375C21.1769 9.07375 22.0383 10.7773 22.5205 12.0245C22.6619 11.9795 22.8033 11.9409 22.9576 11.9023Z" fill="#027DB8"/>
                                <path d="M24.2994 7.5664C24.4288 8.19014 24.4957 8.82521 24.4993 9.46221C24.5105 10.2838 24.4242 11.1038 24.2422 11.9051C25.0435 11.7231 25.8635 11.6368 26.6851 11.6479C27.3223 11.6513 27.9575 11.718 28.5815 11.8472C30.3944 9.17292 31.2173 5.6886 30.838 5.30931C30.4587 4.93002 26.9737 5.75353 24.2994 7.5664Z" fill="#027DB8"/>
                                <path d="M19.9989 10.3594C19.7096 10.3594 18.7582 11.8958 18.3082 13.6444C18.1598 14.2092 18.0799 14.7898 18.0703 15.3737C18.0703 16.8073 18.4046 17.7523 18.9125 18.2602C19.1986 18.5522 19.5901 18.7167 19.9989 18.7167C20.4077 18.7167 20.7993 18.5522 21.0853 18.2602C21.5932 17.7523 21.9275 16.8073 21.9275 15.3737C21.9183 14.7898 21.8385 14.2091 21.6896 13.6444C21.2396 11.8958 20.2882 10.3594 19.9989 10.3594Z" fill="#027DB8"/>
                                <path d="M28.5836 13.1299C27.9596 13.0007 27.3244 12.934 26.6872 12.9306C25.8656 12.9195 25.0455 13.0058 24.2443 13.1878C23.8182 13.2911 23.4044 13.4398 23.01 13.6314C22.9971 13.6314 22.9907 13.6378 22.9778 13.6442C23.0891 14.0697 23.1623 14.5043 23.1964 14.9428C23.2093 15.0842 23.2157 15.2321 23.2157 15.3735C23.2157 15.5728 23.2093 15.7592 23.1964 15.9328C23.19 16.0807 23.1707 16.2221 23.1578 16.3571C23.1066 17.0726 22.9051 17.7691 22.5664 18.4014C23.8186 19.1122 25.2499 19.4449 26.6872 19.3593C30.4158 19.3593 34.7873 16.7878 34.7873 16.145C34.7873 15.6114 31.7529 13.7342 28.5836 13.1299Z" fill="#027DB8"/>
                                <path d="M33.814 23.8363C33.041 22.0037 31.0835 20.97 29.1342 21.3649C27.1849 21.7597 25.7841 23.4738 25.7853 25.4627C25.7836 25.681 25.8017 25.8989 25.8393 26.1139L26.0276 26.8436V26.8539L26.0373 26.8828L27.4676 31.6638C28.0767 30.0368 29.3521 28.7477 30.9726 28.1213C32.593 27.4948 34.4039 27.5909 35.9489 28.3852L33.8275 23.862C33.8275 23.8555 33.8211 23.8465 33.814 23.8363Z" fill="#027DB8"/>
                                <path d="M2 36.7155C2 37.7806 2.86346 38.6441 3.92859 38.6441H29.4445C28.4309 37.8608 27.6888 36.779 27.3231 35.5513C27.2797 35.4885 27.2482 35.4184 27.2298 35.3443L27.1656 35.0814L24.9503 27.7154H7.78578C6.93475 27.7155 6.11834 27.3785 5.51518 26.7781C5.40698 26.6691 5.30645 26.5526 5.21432 26.4297L2 35.5397L2 36.7155ZM9.07151 36.0727H25.786C26.141 36.0727 26.4288 36.3605 26.4288 36.7155C26.4288 37.0706 26.141 37.3584 25.786 37.3584H9.07151C8.71646 37.3584 8.42864 37.0706 8.42864 36.7155C8.42864 36.3605 8.71646 36.0727 9.07151 36.0727ZM5.21432 36.0727H6.50005C6.85509 36.0727 7.14291 36.3605 7.14291 36.7155C7.14291 37.0706 6.85509 37.3584 6.50005 37.3584H5.21432C4.85928 37.3584 4.57146 37.0706 4.57146 36.7155C4.57146 36.3605 4.85928 36.0727 5.21432 36.0727Z" fill="#027DB8"/>
                                <path d="M38.0018 33.8211C38.0014 33.2142 37.8854 32.6129 37.6598 32.0494L37.602 31.9041C36.6167 29.6393 34.0782 28.4867 31.7247 29.2353C29.3711 29.984 27.9651 32.3915 28.4694 34.8092C28.9737 37.227 31.2249 38.8716 33.6815 38.617C36.1381 38.3623 38.0042 36.2909 38.0018 33.8211ZM29.6446 33.8211C29.6446 31.8684 31.2276 30.2854 33.1804 30.2854C35.1331 30.2854 36.7161 31.8684 36.7161 33.8211C36.7161 35.7739 35.1331 37.3569 33.1804 37.3569C31.2285 37.3548 29.6467 35.773 29.6446 33.8211Z" fill="#027DB8"/>
                                <path d="M33.1797 36.0782C34.4224 36.0782 35.4297 35.0708 35.4297 33.8281C35.4297 32.5855 34.4224 31.5781 33.1797 31.5781C31.9371 31.5781 30.9297 32.5855 30.9297 33.8281C30.9297 35.0708 31.9371 36.0782 33.1797 36.0782Z" fill="#027DB8"/>
                            </svg>
                            <p>Complete collection of 30 curated programs & 50 challenges</p>
                        </li>
                        <li class="d-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M32.0748 34.0026C32.0748 34.3693 31.7748 34.6693 31.4081 34.6693H3.99479C3.62813 34.6693 3.32812 34.3693 3.32812 34.0026C3.32812 33.6359 3.62813 33.3359 3.99479 33.3359H31.4081C31.7748 33.3359 32.0748 33.6359 32.0748 34.0026Z" fill="#027DB8"/>
                                <path d="M30.7075 26.6574V28.7974C30.7075 30.3307 29.4608 31.5774 27.9275 31.5774H7.4675C5.93417 31.5774 4.6875 30.3307 4.6875 28.7974V14.9441C4.6875 13.4107 5.93417 12.1641 7.4675 12.1641H22.0875V23.1174C22.0875 25.0707 23.6742 26.6574 25.6208 26.6574H30.7075Z" fill="#027DB8"/>
                                <path d="M34.4513 5.32031H25.618C24.4046 5.32031 23.418 6.30698 23.418 7.52698V23.1203C23.418 24.3336 24.4046 25.327 25.618 25.327H34.4513C35.6646 25.327 36.6513 24.3336 36.6513 23.1203V7.52698C36.6513 6.30031 35.6646 5.32031 34.4513 5.32031ZM32.1446 23.127H27.9313C27.5646 23.127 27.2646 22.827 27.2646 22.4603C27.2646 22.0936 27.5646 21.7936 27.9313 21.7936H32.1446C32.5113 21.7936 32.8113 22.0936 32.8113 22.4603C32.8113 22.827 32.5113 23.127 32.1446 23.127Z" fill="#027DB8"/>
                            </svg>
                            <p>Watch classes  from your laptop, TV, phone or tablet</p>
                        </li>
                        <li class="d-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M18.7847 6.52344H9.55469L14.1697 12.9522L18.7847 6.52344Z" fill="#027DB8"/>
                                <path d="M30.4494 6.52344H21.2188L25.8337 12.9522L30.4494 6.52344Z" fill="#027DB8"/>
                                <path d="M36.2547 13.395L31.6691 6.96875L27.0547 13.395H36.2547Z" fill="#027DB8"/>
                                <path d="M24.6167 13.3969L20.0017 6.96875L15.3867 13.3969H24.6167Z" fill="#027DB8"/>
                                <path d="M8.33625 6.96875L3.75 13.395H12.95L8.33625 6.96875Z" fill="#027DB8"/>
                                <path d="M21.3711 33.1928L36.2392 14.6484H26.3155L21.3711 33.1928Z" fill="#027DB8"/>
                                <path d="M14.9805 14.6484L20.0005 33.4734L25.0205 14.6484H14.9805Z" fill="#027DB8"/>
                                <path d="M3.76562 14.6484L18.6344 33.1928L13.6888 14.6484H3.76562Z" fill="#027DB8"/>
                            </svg>
                            <p>Exclusive access to all new releases and livestream events</p>
                        </li>
                        <li class="d-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                <path d="M25.3386 7H13.859C12.2822 7 11 8.28224 11 9.86771V30.1323C11 31.7091 12.2822 33 13.859 33H25.3386C26.9154 33 28.1976 31.7091 28.1976 30.1323V9.86771C28.1976 8.27358 26.9154 7 25.3386 7ZM22.3409 30.141H16.8654C16.3889 30.141 15.999 29.7511 15.999 29.2746C15.999 28.7981 16.3889 28.4082 16.8654 28.4082H22.3409C22.8174 28.4082 23.2073 28.7981 23.2073 29.2746C23.2073 29.7511 22.8174 30.141 22.3409 30.141Z" fill="#027DB8"/>
                            </svg>
                            <p>Full access to classes through our mobile application</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="crs_page_footer flex-md-center">
            <div class="crs_btn green" type="button">i’d like to keep my membership</div>
            <div class="crs_btn white" type="button">cancel subscription</div>
        </div>
    </div>
    <div class="crs_popup active" data-index="0">
        <div class="crs_container d-flex">
            <a href="https://www.doyogawithme.com/yogi/${
              window.location.href.includes('/subscription') ? window.location.href.split("yogi/")[1].split("/subscription")[0] : ''
            }/subscription" class="crs_popup_close" onclick="pushDataLayer(['exp_impr_acc_b_pdynym_c', 'Close', 'Button', 'Pop up did you now Your Membership Allows Us To Support Free Yoga'])">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </a>
            <div>
                <h2>Your Membership Allows Us To Support Free Yoga</h2>
                <p>Thanks to your membership we can:</p>
                <ul>
                    <li class="d-flex">${lotus} Deliver thousands of free hours of quality yoga content for those with limited financial means</li>
                    <li class="d-flex">${lotus} Build a diverse, authentic library by hiring top instructors to share their teachings</li>
                    <li class="d-flex">${lotus} Cover the costs of streaming free videos to those who cannot afford a subscription</li>
                </ul>
                <div class="crs_gray_block">
                    <p>By canceling your membership, you will lose access to <b>50% of Classes</b>, all Programs, and Challenges.</p>
                </div>
                <p>Still want to cancel your DoYogaWithMe membership?</p>
                <div class="crs_popup_footer">
                    <div class="crs_btn green" type="button">i’d like to keep my membership</div>
                    <div class="crs_btn white" type="button">cancel subscription</div>
                    <a class="crs_btn_pause flex-center" href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_827_14245)">
                            <path d="M8.00003 16C12.4183 16 16.0001 12.4183 16.0001 7.99997C16.0001 3.58168 12.4183 0 8.00003 0C3.5818 0 0 3.58174 0 8.00003C0 12.4183 3.58174 16 8.00003 16ZM8.00003 1.27999C11.7053 1.27999 14.72 4.29468 14.72 7.99997C14.72 11.7053 11.7053 14.72 8.00003 14.72C4.29474 14.72 1.28004 11.7053 1.28004 7.99997C1.28004 4.29468 4.29439 1.27999 8.00003 1.27999Z" fill="#555555"/>
                            <path d="M6.51486 11.7738C6.95676 11.7738 7.31488 11.4157 7.31488 10.9738V4.89377C7.31488 4.45187 6.95682 4.09375 6.51486 4.09375C6.07296 4.09375 5.71484 4.45181 5.71484 4.89377V10.9738C5.71484 11.4157 6.07291 11.7738 6.51486 11.7738Z" fill="#555555"/>
                            <path d="M9.71402 11.7738C10.1559 11.7738 10.514 11.4157 10.514 10.9738V4.89377C10.514 4.45187 10.156 4.09375 9.71402 4.09375C9.27207 4.09375 8.91406 4.45187 8.91406 4.89377V10.9738C8.91406 11.4157 9.27212 11.7738 9.71402 11.7738Z" fill="#555555"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_827_14245">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span>Pause subscription</span>
                    </a>
                </div>
            </div>
            <img src="${dirProject}image-1.png" alt="image 1">
        </div>
    </div>
    <div class="crs_popup" data-index="1">
        <div class="crs_container text-md-center">
            <h2>Thank you for staying <br class="d-md-none">with us</h2>
            <p>You're our yoga hero!</p>
            <a href="https://www.doyogawithme.com/yoga-classes" class="crs_btn green">Explore New Classes</a>
        </div>
    </div>
  `;

const media = window.matchMedia("(max-width: 767px)").matches;


function formatTimestamp(timestamp) {
  // Створення нового об'єкта Date на основі переданого мілісекундного таймстемпа
  var date = new Date(timestamp * 1000); // timestamp повинен бути у секундах, а не мілісекундах, тому помножимо на 1000

  // Масив назв місяців
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Отримання значень дня, місяця і року
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  // Форматування рядка
  var formattedDate = monthNames[monthIndex] + " " + day + ", " + year;

  return formattedDate;
}

function closeOutside(parent) {
  parent.querySelectorAll('.crs_popup').forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.closest('.crs_container')) {
        if (item.dataset.index == "2") {
          parent.querySelector(".crs_questions").classList.add("active");
          localStorage.removeItem("crsRoute");

          let plan = localStorage.getItem("crsPlan");
          let eventName = plan == "year" ? "yd" : "md";

          clearInterval(startTimeInterval);
          if (parent.innerText.includes("Pause Membership")) {
            pushDataLayer([
              `exp_impr_acc_b_pudnpm_co`,
              "Close Outside",
              "Button",
              "Pop up did you now Pause Membership for 1 month",
            ]);
            pushDataLayer([
              `exp_impr_acc_v_pudnpm_ft`,
              startTime,
              "Visibility",
              `Pop up did you now Pause Membership for 1 month`,
            ]);
          } else {
            pushDataLayer([
              `exp_impr_acc_b_pudn${eventName}_co`,
              "Close Outside",
              "Button",
              `Pop up did you now ${plan} discount`,
            ]);
            pushDataLayer([
              `exp_impr_acc_v_pudn${eventName}_ft`,
              startTime,
              "Visibility",
              `Pop up did you now ${plan} discount`,
            ]);
          }
        } else if (item.dataset.index == "3") {
          parent.querySelector('.crs_popup[data-index="2"]').classList.add("active");
          pushDataLayer([
            "exp_impr_acc_b_pudngs_co",
            "Close Outside",
            "Button",
            "Pop up did you now Gratitude for the support ",
          ]);

          clearInterval(startTimeInterval);
          pushDataLayer([
            "exp_impr_acc_v_pudngs_ft",
            startTime,
            "Visibility",
            "Pop up did you now Gratitude for the support",
          ]);
        } else {
          pushDataLayer(['exp_impr_acc_b_pdynym_co', 'Close Outside', 'Button', 'Pop up did you now Your Membership Allows Us To Support Free Yoga'])
          clearInterval(startTimeInterval);
          pushDataLayer([
            "exp_impr_acc_v_pdynym_ft",
            startTime,
            "Visibility",
            "Pop up did you now Your Membership Allows Us To Support Free Yoga",
          ]);

          window.location.href =
            "https://www.doyogawithme.com/yogi/exampleexample/subscription";

        }
        item.classList.remove("active");
        
        document.body.classList.remove('crs_fixed')
      }
    });
  });
}

function formatMinutes(minutes) {
  if (isNaN(minutes) || minutes < 0) {
    return "Invalid input";
  }

  if (minutes == 0) {
    return "0";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours}h ${remainingMinutes} minutes`;

  return formattedTime;
}

const popupDiscount = (parent, data, link) => {

  let date = document.querySelector('.recurly-subscription-cancel-confirm-form > p > strong').innerText.split('-')[0]
  let resultAfterAdding = date.split(', ')[1] + ', ' + date.split(', ')[2];

  let plan = localStorage.getItem("crsPlan");
  let eventName = plan == "year" ? "yd" : "md";

  parent.insertAdjacentHTML(
    "beforeend",
    ` 
    <div class="crs_popup" data-index="2">
        <div class="crs_container d-flex">
            <a href="#" class="crs_popup_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 20L4 4M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </a>
            <div>
               ${
                 data.discount != ""
                   ? '<div class="crs_discount">' + data.discount + "</div>"
                   : ""
               }
                
                <h2>${data.title}</h2>
                <p class="">${data.content}</p>
                <div class="crs_btn green flex-center" type="button">${
                  data.btn
                }</div>
            </div>
            <img src="${dirProject}${data.img}${
      media ? "_mob" : ""
    }.png" alt="image">
        </div>
    </div>
    <div class="crs_popup" data-index="3">
        <div class="crs_container">
            <a href="#" class="crs_popup_close">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 20L4 4M20 4L4 20" stroke="#555555" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </a>
            <h2>Thanks for being a DoYogaWithMe member!</h2>
            <p class="c-green"><b>${plan == "year" ? 'Annual membership' : '3 months membership'}</b></p>
            <p>The new discounted plan will be billed immediately and activated on your next renewal date on ${resultAfterAdding}</p>
            <a href="${link}" class="crs_btn blue">Submit</a>
        </div>
    </div>`
  );

  parent.querySelectorAll(".crs_popup .crs_popup_close").forEach((item) => {
    item.addEventListener("click", (e) => {

      document.body.classList.remove('crs_fixed')

      if (item.closest('[data-index="0"]')) {
        clearInterval(startTimeInterval);
        pushDataLayer([
          "exp_impr_acc_v_pdynym_ft",
          startTime,
          "Visibility",
          "Pop up did you now Your Membership Allows Us To Support Free Yoga",
        ]);
      } else if (item.closest('[data-index="2"]')) {
        e.preventDefault();
        item.closest('[data-index="2"]').classList.remove("active");
        parent.querySelector(".crs_questions").classList.add("active");
        localStorage.removeItem("crsRoute");

        clearInterval(startTimeInterval);
        if (parent.innerText.includes("Pause Membership")) {
          pushDataLayer([
            `exp_impr_acc_b_pudnpm_c`,
            "Close",
            "Button",
            "Pop up did you now Pause Membership for 1 month",
          ]);
          pushDataLayer([
            `exp_impr_acc_v_pudnpm_ft`,
            startTime,
            "Visibility",
            `Pop up did you now Pause Membership for 1 month`,
          ]);
        } else {
          pushDataLayer([
            `exp_impr_acc_b_pudn${eventName}_c`,
            "Close",
            "Button",
            `Pop up did you now ${plan} discount`,
          ]);
          pushDataLayer([
            `exp_impr_acc_v_pudn${eventName}_ft`,
            startTime,
            "Visibility",
            `Pop up did you now ${plan} discount`,
          ]);
        }
      } else if (item.closest('[data-index="3"]')) {
        e.preventDefault();
        parent
          .querySelector('.crs_popup[data-index="3"]')
          .classList.remove("active");
        parent
          .querySelector('.crs_popup[data-index="2"]')
          .classList.add("active");

        document.body.classList.add('crs_fixed')

        pushDataLayer([
          "exp_impr_acc_b_pudngs_c",
          "Close",
          "Button",
          "Pop up did you now Gratitude for the support ",
        ]);
        clearInterval(startTimeInterval);
        pushDataLayer([
          "exp_impr_acc_v_pudngs_ft",
          startTime,
          "Visibility",
          "Pop up did you now Gratitude for the support",
        ]);
      }

      startTime = 0;

      startTimeInterval = setInterval(() => {
        startTime += 1;
      }, 1000);
    });
  });

  parent.querySelectorAll(".crs_popup .crs_btn").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.closest('[data-index="2"]')) {
        clearInterval(startTimeInterval);
        if (e.target.innerText.includes("Pause Membership")) {
          document
            .querySelector(
              ".recurly-subscription-cancel-confirm-form .c-button--inlineBlock"
            )
            .click();
            pushDataLayer([
              `exp_impr_acc_b_pudnpm_p`,
              "Pause",
              "Button",
              "Pop up did you now Pause Membership for 1 month",
            ]);
        
            pushDataLayer([
              `exp_impr_acc_v_pudnpm_ft`,
              startTime,
              "Visibility",
              `Pop up did you now Pause Membership for 1 month`,
            ]);
        } else {
          parent
            .querySelector('.crs_popup[data-index="2"]')
            .classList.remove("active");
          parent
            .querySelector('.crs_popup[data-index="3"]')
            .classList.add("active");

            document.body.classList.add('crs_fixed')

            pushDataLayer([
              `exp_impr_acc_b_pudn${eventName}_gdy`,
              item.innerText,
              "Button",
              `Pop up did you now ${plan} discount`,
            ]);
        
            pushDataLayer([
              `exp_impr_acc_v_pudn${eventName}_ft`,
              startTime,
              "Visibility",
              `Pop up did you now ${plan} discount`,
            ]);
        }
      } else if (item.closest('[data-index="3"]')) {
        let obj = {};
        
        obj.dataPopup = data;
        obj.href = link;

        localStorage.setItem("crsRoute", JSON.stringify(obj));

        pushDataLayer([
          "exp_impr_acc_b_pudngs_s",
          "Submit",
          "Button",
          "Pop up did you now Gratitude for the support",
        ]);

        clearInterval(startTimeInterval);
        pushDataLayer([
          "exp_impr_acc_v_pudngs_ft",
          startTime,
          "Visibility",
          "Pop up did you now Gratitude for the support",
        ]);
      }

      startTime = 0;

      startTimeInterval = setInterval(() => {
        startTime += 1;
      }, 1000);
    });
  });
  if (media) {
    closeOutside(parent)
  }

};

const initUnSub = setInterval(() => {
  if (
    window.location.href.includes("/subscription/id/") &&
    document.querySelector(
      ".recurly-subscription-cancel-confirm-form .c-button--inlineBlock"
    )
  ) {
    clearInterval(initUnSub);

    let plan = localStorage.getItem("crsPlan");
    let eventName = plan == "year" ? "yd" : "md";

    startTime = 0;

    startTimeInterval = setInterval(() => {
      startTime += 1;
    }, 1000);

    document.head.insertAdjacentHTML("beforeend", styleUnsub);
    document.querySelector("#main-content")
      .insertAdjacentHTML("beforeend", html);

    if (media) {
      closeOutside(document.querySelector("#main-content"))
    }

    document.body.classList.add('crs_fixed')

    let metrics = JSON.parse(
      JSON.stringify(dataLayer).split('"metrics":')[1].split(',"user"')[0]
    );

    let date = document.querySelector('.recurly-subscription-cancel-confirm-form > p > strong').innerText.split(' -')[0]
    let resultAfterAdding = date.split(', ')[1] + ', ' + date.split(', ')[2];

    document.querySelector(
      ".crs_questions_block"
    ).innerHTML = `If you proceed with the cancellation now, you will still be able to access premium content until ${resultAfterAdding}`;
    
    document.querySelectorAll(".crs_page_item").forEach((item, index) => {
      if (index == 0) {
        item.querySelector("p:last-child").innerHTML = formatTimestamp(
          metrics["account_created"]
        );
      } else if (index == 1) {
        item.querySelector("p:last-child").innerHTML =
          metrics["videos_watched"];
      } else if (index == 2) {
        item.querySelector("p:last-child").innerHTML =
          metrics["estimated_active_days"];
      } else if (index == 3) {
        item.querySelector("p:last-child").innerHTML =
          formatMinutes(metrics["watchtime_minutes"]);
      }
    });

    if (localStorage.getItem("crsRoute")) {
      let data = JSON.parse(localStorage.getItem("crsRoute"));

      document.querySelectorAll(".crs_popup").forEach((item) => {
        item.classList.remove("active");
      });

      popupDiscount(
        document.querySelector("#main-content"),
        data.dataPopup,
        data.href
      );
      localStorage.removeItem("crsRoute");

      document
        .querySelector('.crs_popup[data-index="2"]')
        .classList.add("active");

        document.body.classList.add('crs_fixed')
    }

    document.querySelector(".crs_btn_pause").href = document.querySelector(
      ".recurly-subscription-cancel-confirm-form .c-button--inlineBlock"
    ).href;

    let radioIndex;
    document.querySelectorAll(".crs_radios input").forEach((check, index) => {
      check.addEventListener("change", () => {
        if (check.checked) {
          document
            .querySelector(".crs_questions .crs_btn.white")
            .removeAttribute("disabled");
          radioIndex = index;

          if (localStorage.getItem("crsPlan")) {
            const plan = localStorage.getItem("crsPlan");

            const link =
              "https://www.doyogawithme.com/express-checkout/" +
              (plan == "year" ? "142" : "141");

            for (let i = 0; i < dataPopup.length; i++) {
              if (dataPopup[i][plan]?.includes(radioIndex)) {
                console.log(dataPopup[i]);
                document.querySelector('.crs_popup[data-index="2"]')?.remove();
                document.querySelector('.crs_popup[data-index="3"]')?.remove();
                popupDiscount(
                  document.querySelector("#main-content"),
                  dataPopup[i],
                  link
                );
                document
                  .querySelector('.crs_popup[data-index="2"]')
                  .classList.add("active");


                document.body.classList.add('crs_fixed')
              }
            }
            pushDataLayer([
              "exp_impr_acc_r_sdc_ac",
              check.parentElement.innerText,
              "Radio button",
              "Still decided to cancel?",
            ]);

            clearInterval(startTimeInterval);
            pushDataLayer([
              "exp_impr_acc_v_sdc_ft",
              startTime,
              "Visibility",
              "Still decided to cancel?",
            ]);

            startTime = 0;

            startTimeInterval = setInterval(() => {
              startTime += 1;
            }, 1000);
          }
        }
      });
    });

    document.querySelector("textarea").addEventListener("change", () => {
      pushDataLayer([
        "exp_impr_acc_i_sdc_ya",
        "Your answer",
        "Input",
        "Still decided to cancel?",
      ]);
    });
    
    trackVisibility();
    

    document.querySelectorAll(".crs_btn").forEach((item) => {
      item.addEventListener("click", (e) => {
        if (item.className.includes("green")) {
          if (
            item.closest('.crs_popup[data-index="0"]') ||
            item.closest(".crs_page") ||
            item.closest(".crs_questions")
          ) {
            document
              .querySelector('.crs_popup[data-index="0"]')
              .classList.remove("active");

            if (item.closest('.crs_popup[data-index="0"]')) {
              //event
              clearInterval(startTimeInterval);
              console.log(startTime);
              pushDataLayer([
                "exp_impr_acc_v_pdynym_ft",
                startTime,
                "Visibility",
                "Pop up did you now Your Membership Allows Us To Support Free Yoga",
              ]);
              pushDataLayer([
                "exp_impr_acc_b_pdynym_like",
                "I’d like to keep my membership",
                "Button",
                "Pop up did you now Your Membership Allows Us To Support Free Yoga",
              ]);
            }

            document
              .querySelector('.crs_popup[data-index="1"]')
              .classList.add("active");

            document.body.classList.add('crs_fixed')

            setTimeout(() => {
              if (document.querySelector('.crs_popup.active[data-index="1"]')) {
                clearInterval(startTimeInterval);
                pushDataLayer([
                  "exp_impr_acc_v_pdynty_ft",
                  startTime,
                  "Visibility",
                  "Pop up did you now Thank you for staying with us",
                ]);

                window.location.href =
                  "https://www.doyogawithme.com/yoga-classes";
              }
            }, 3500);

            startTime = 0;

            startTimeInterval = setInterval(() => {
              startTime += 1;
            }, 1000);
          }

          if (item.closest('.crs_popup[data-index="1"]')) {
            clearInterval(startTimeInterval);
            pushDataLayer([
              "exp_impr_acc_v_pdynty_ft",
              startTime,
              "Visibility",
              "Pop up did you now Thank you for staying with us",
            ]);
            pushDataLayer([
              "exp_impr_acc_b_pdynty_c",
              "Explore New Classes",
              "Button",
              "Pop up did you now Thank you for staying with us",
            ]);
          } else if (item.closest(".crs_page")) {
            pushDataLayer([
              "exp_impr_acc_b_wps_like",
              "I’d like to keep my membership",
              "Button",
              "Website presence statistics",
            ]);
            clearInterval(startTimeInterval);
            pushDataLayer([
              "exp_impr_acc_v_wps_ft",
              startTime,
              "Visibility",
              "Website presence statistics",
            ]);
          } else if (item.closest(".crs_questions")) {
            pushDataLayer([
              "exp_impr_acc_b_sdc_like",
              `I’d like to keep my membership - ${document.querySelector('textarea').value} - ${document.querySelector('.crs_radios input:checked').parentElement.innerText}`,
              "Button",
              "Still decided to cancel?"
            ]);
          }
        } else if (item.className.includes("white")) {
          if (item.closest('.crs_popup[data-index="0"]')) {
            document
              .querySelector('.crs_popup[data-index="0"]')
              .classList.remove("active");
            document.querySelector(".crs_page").classList.add("active");

            document.body.classList.remove('crs_fixed')

            clearInterval(startTimeInterval);
            pushDataLayer([
              "exp_impr_acc_v_pdynym_ft",
              startTime,
              "Visibility",
              "Pop up did you now Your Membership Allows Us To Support Free Yoga",
            ]);
            pushDataLayer([
              "exp_impr_acc_b_pdynym_cs",
              "Cancel subscription",
              "Button",
              "Pop up did you now Your Membership Allows Us To Support Free Yoga",
            ]);
          } else if (item.closest(".crs_page")) {
            document.querySelector(".crs_page").classList.remove("active");
            document.querySelector(".crs_questions").classList.add("active");

            document.body.classList.remove('crs_fixed')

            clearInterval(startTimeInterval);
            pushDataLayer([
              "exp_impr_acc_v_wps_ft",
              startTime,
              "Visibility",
              "Website presence statistics",
            ]);
            pushDataLayer([
              "exp_impr_acc_b_wps_cs",
              "Cancel subscription",
              "Button",
              "Website presence statistics",
            ]);
          } else if (
            item.closest(".crs_questions") &&
            !item.hasAttribute("disabled")
          ) {
            console.log("click questions cancel");
            pushDataLayer([
              "exp_impr_acc_b_sdc_cs",
              "Cancel subscription",
              "Button",
              "Still decided to cancel?",
            ]);
            document.querySelector("#edit-cancel--2").click();
          }

          startTime = 0;

          startTimeInterval = setInterval(() => {
            startTime += 1;
          }, 1000);

          window.scrollTo(0, 0);
        }
      });
    });

    //events
    document.querySelector(".crs_btn_pause").addEventListener("click", () => {
      clearInterval(startTimeInterval);
      pushDataLayer([
        "exp_impr_acc_v_pdynym_ft",
        startTime,
        "Visibility",
        "Pop up did you now Your Membership Allows Us To Support Free Yoga",
      ]);
      pushDataLayer([
        "exp_impr_acc_b_pdynym_ps",
        "Pause subscription",
        "Button",
        "Pop up did you now Your Membership Allows Us To Support Free Yoga",
      ]);
    });
  }
});

const subscription = setInterval(() => {
  if (document.querySelector(".subscription-links li.cancel a")) {
    clearInterval(subscription);
    document.querySelectorAll(".subscription-links li").forEach((item) => {
      item.querySelector("a").addEventListener("click", () => {
        if (item.classList.contains("cancel")) {
          const title = item
            .closest(".subscription")
            .querySelector(".total").innerText;
          const plan =
            title.includes("108") || title.includes("65")
              ? "year"
              : title.includes("13.99")
              ? "mounthly"
              : "";
          console.log(plan);
          if (plan == "") return;
          localStorage.setItem("crsPlan", plan);

          pushDataLayer([
            "exp_impr_acc_b_ysrm_c",
            "Cancel",
            "Button",
            "Your Subscription Renews monthly",
          ]);
        } else if (item.classList.contains("pause")) {
          pushDataLayer([
            "exp_impr_acc_b_ysrm_p",
            "Pause",
            "Button",
            "Your Subscription Renews monthly",
          ]);
        } else if (item.classList.contains("change")) {
          pushDataLayer([
            "exp_impr_acc_b_ysrm_cp",
            "Change plan",
            "Button",
            "Your Subscription Renews monthly",
          ]);
        }
      });
    });
  }
});

//checkout
function changeCheckout() {
  const checkout = setInterval(() => {
    if (
      window.location.href.includes("/checkout/") &&
      document.querySelector('.topbar a') &&
      localStorage.getItem("crsPlan") &&
      document.referrer.includes('/subscription/')
    ) {
      clearInterval(checkout)
  
      document.querySelector('.topbar a').href = document.referrer;
  
      document.querySelector('.topbar a').addEventListener('click', (e) => {
        pushDataLayer(['exp_impr_acc_b_pudngs_b', 'Back', 'Button', 'Your card']);
      })

      let plan = localStorage.getItem("crsPlan");
  
      let price = document.querySelector(
        ".views-field.views-field-total-price__number"
      );
      if (!document.querySelector(".c-green")) {
        price.innerHTML = 
          `<p><span>${plan == 'year' ? '$108.99' : '$41.97'}</span> ${price.innerHTML}</p>
           <p class="c-green">${
              plan == "year"
                ? "Just $5.42/month!"
                : "enjoy 2 free months!"
            }</p>`;
      }
  
      document.querySelector(".views-field.views-field-title").innerHTML =
        plan == "year"
          ? `1-Year DYWM Subscription`
          : "3-month DYWM Subscription";
  
      if (!document.querySelector(".saved_block")) {
        document.querySelector(".order-total-line__total")
          .insertAdjacentHTML( "afterend",`
            <style> 
              .saved_block {
                margin: 0 0 16px auto;
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                color: #272727;
                padding: 4px 8px;
                background: #F3A83C;
                border-radius: 8px;
                width: fit-content;
              }
            </style> 
            <div class="saved_block"></div>` );
      }
  
      document.querySelector(".saved_block").innerHTML =
        plan == "year"
            ? "You just saved $43.59 (40% off)"
            : "You just saved $27.98 (67% off)";
    }
  });
}

changeCheckout();

let mutChangeCheckout = new MutationObserver(function (muts) {
  if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")?.value !== "" && 
    !document.querySelector(".saved_block") && 
    window.location.pathname.includes("checkout/") &&
    document.referrer.includes('/subscription/')
  ) {
    mutChangeCheckout.disconnect();
    console.log(`mut ChangeCheckout >>>>>>>>>>>>>>>>>>>>`);
    changeCheckout();
  }
  mutChangeCheckout.observe(document, {
    childList: true,
    subtree: true,
  });
})

mutChangeCheckout.observe(document, {
  childList: true,
  subtree: true,
});
})()