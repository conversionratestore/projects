let dir = 'https://conversionratestore.github.io/projects/uplead';
// toggle active
let toggleActive = (selector) => selector.classList.toggle('active')

//calendly widget
let scriptCalendly = document.createElement('script');
scriptCalendly.type = 'text/javascript';
scriptCalendly.async = true;
scriptCalendly.src = 'https://assets.calendly.com/assets/external/widget.js';

//get state
const state = new Promise((resolve, reject) => {
    fetch(`${dir}/state.json`).then(res => res.json()).then(data => {
        resolve(data)
    }).catch((error) => {
        console.error('Error:', error);
    });
})

let styleBase = `
<style>
/* base */
@media (min-width: 768px) {
    .elementor-10072 .elementor-column.elementor-col-20.elementor-element-67ea24f {
        width: 15%!important;
    }
    .elementor-10072 .elementor-element.elementor-element-ce88a86 {
        width: 51%!important;
    }
}
.elementor-10072 .elementor-element.elementor-element-64a3398 .jet-menu .jet-menu-item .top-level-link {
    font-size: 16px!important;
}
body {
    font-family: 'gilroy', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #091D30;
}
.fs-17 {
    font-size: 17px!important;
}
h1, h2, h3, h4, h5 {
    font-family: 'gilroy', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #091D30;
    line-height: 27px;
}
h1, h2 {
    text-transform: capitalize;
}
h1 {
    font-size: 40px;
    line-height: 48px;
}
h2 {
    font-size: 36px;
    line-height: 42px;
}
h3 {
    font-size: 28px;
    line-height: 36px;
}
h4 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
}
p {
    font-family: 'gilroy', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #69727A;
    margin: 0;
}
b {
    font-weight: 700;
}
/* form */
.form_contact {
    border-radius: 16px;
    border: 1px solid #E1EBEE;
    padding: 40px 50px;
    background: #FFF;
    min-width: 528px;
    box-shadow: 0px 14px 44px 0px rgba(0, 162, 187, 0.04), 0px -2px 4px 0px rgba(9, 29, 48, 0.02), 0px 2px 8px 0px rgba(9, 29, 48, 0.02), 0px 19px 44px 0px rgba(9, 29, 48, 0.02);
}
.form_contact h2{
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #091D30;
    margin-bottom: 25px;
}
.formBook {
    max-width: 400px;
    margin: 0 auto;
}
.formBook label {
    display: block;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #091D30;
    margin-bottom: 6px;
}
.formBook input {
    background: #FFFFFF;
    border: 1px solid #E1EBEE;
    border-radius: 50px;
    padding: 14px 24px;
    color: #69727a;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 28px;
    width: 100%;
    // outline: none;
}
.formBook input#phoneCode {
    padding-left: 61px
}
.flag-dropdown {
    position: absolute;
    left: 1px;
    top: 1px;
    height: calc(100% - 30px);
    width: 47px;
    background: #FFFFFF;
    border-right: 1px solid #E1EBEE;
    border-radius: 50px 0 0 50px ;
    z-index: 1;
}
.selected-flag {
    margin-left: 8px;
}
.selected-flag span {
    display: block;
    width: 15px;
    height: 10px;
}
.country-list {
    position: absolute;
    left: 12px;
    top: 100%;
    outline: none;
    z-index: 1;
    list-style: none;
    box-shadow: 1px 2px 10px rgba(0,0,0,.35);
    background-color: #fff;
    width: 300px;
    max-height: 200px;
    overflow-y: scroll;
    border-radius: 0 0 3px 3px;
    display: none;
    margin: 0;
}
.flag-dropdown.active .country-list {
    display: block;
}
.flag-dropdown.active .arrow-drop {
    transform: scaleY(-1);
}
.country-list li {
    padding: 3.5px 9px;
}
.country-list li.active, .country-list li:hover {
    background-color: #f1f1f1;
}
.country-list .fi {
    margin-right: 7px;
    width: 16px;
    height: 11px;
}
.country-list .country-name {
    margin-right: 6px;
}
.country-list .country .dial-code {
    color: #6b6b6b;
}
.arrow-drop {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 3px 0 3px;
    border-color: #091D30 transparent transparent transparent;
    margin-left: 4px;
}
.btn-get {
    max-width: 100%!important;
    margin-bottom: 22px;
}
.block_consultants > span {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    margin-left: 8px;
    color: #69727A;
}
.block_consultants {
    margin: 0 -20px;
}
p.error-message {
    position: absolute;
    left: 0;
    bottom: 9px;
    font-size: 12px;
    line-height: 1;
    color: red;
    display: none;
    pointer-events: none;
    font-weight: 400;
    margin-bottom: 0;
}
.error p.error-message {
    display: block;
}
.block_calendly {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}
.block_call {
    background: #E4F9FD;
    padding: 12px 14px;
    width: 100%;
    margin: 0 -55px 22px;
    width: calc(100% + 110px);
}
.block_call span {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding-left: 14px;
    color: #091D30;
}
.block_call a {
    color: #00A2BB;
    font-weight: 700;
}
.text-mob {
    display: none;
}
.error-message {
    /* position: absolute;
    left: 0;
    top: 100%; */
    font-size: 12px;
    line-height: 1;
    color: red;
    display: none;
    pointer-events: none;
    font-weight: 400;
    margin-bottom: 0;
}
.error .error-message {
    display: block;
}
/* progressbar */
.progressbar {
    margin-bottom: 24px;
}
.progressbar_item:first-child {
    z-index: 2;
}
.progressbar_item:last-child {
    padding-left: 31px;
    margin-left: -26px;
}
.progressbar_item {
    font-family: 'Gilroy';
    font-style: normal;
    font-size: 14px;
    line-height: 30px;
    color: #00A2BB;
    padding-left: 20px;
    min-width: 209px;
    position: relative;
    z-index: 1;
}
.progressbar_item .check {
    display: none;
    margin-left: 8px;
}
.progressbar_item.active {
    color: #FFFFFF;
    font-weight: 600;
}
.progressbar_item.done .check{
    display: block;
}
.progressbar_item.active svg.bg path {
    fill: #00A2BB
}
.progressbar_item svg.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.progressbar_item svg.bg path {
    fill: #fff;
}

@media (max-width: 768px) {
    .progressbar {
        margin-bottom: 18px;
    }
    .progressbar_item {
        min-width: 158px;
        font-size: 12px;
        line-height: 32px;
        padding-left: 18px;
    }
    .progressbar_item:last-child {
        padding-left: 34px;
        margin-left: -10px;
    }
}
/* select */
.select-current {
    background: #FFFFFF;
    border: 1px solid #E1EBEE;
    border-radius: 50px;
    padding: 14px 24px;
    color: #69727a;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 28px;
    width: 100%;
    outline: none;
}
.select-drop {
    position: absolute;
    left: 0;
    top: calc(100% + 11px);
    background: #FFFFFF;
    border: 1px solid #00A2BB;
    border-radius: 8px;
    margin: 0;
    list-style: none;
    padding: 7px 0;
    width: 100%;
    display: none;
    z-index: 2;
}
.select-drop li {
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #69727A;
    padding: 8px 24px;
}
.select-current, .select-drop li, .country-list li {
    cursor: pointer;
}
.select-drop li:hover, .select-drop li.active {
    color: #00A2BB;
}
.select.active .select-current {
    border-color: #00A2BB;
}
.select.active .select-drop {
    display: block;
}
.select.active .select-current svg {
    transform: scaleY(-1);
}
.q5UmgJHGuXZFCyzhcPAu .select-current {
    padding: 20px 24px;
    margin-bottom: 20px;
}

@media (max-width: 600px) {
    .select-current {
        font-size: 12px;
        line-height: 14px;
    }
}
/* button */
.btn_submit {
    border-radius: 100px;
    background: #00A2BB;
    border: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 58px;
    text-align: center;
    color: #FFFFFF;
    width: 100%;
    padding: 0;
    max-width: 250px;
}
.btn_submit.btn_book {
    line-height: 40px;
    max-width: 220px;
}
.tooltip {
    height: fit-content;
    display: inline-flex;
    border: none;
    margin-left: 4px;
    position: relative;
}
.tooltip .tooltiptext {
    position: absolute;
    left: -4px;
    bottom: calc(100% + 10px);
    border-radius: 8px;
    background: #00A2BB;
    padding: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    width: 226px;
    text-align: left;
    z-index: 3;
    visibility: hidden;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}
.tooltip .tooltiptext:after {
    content: '';
    position: absolute;
    left: 9.5px;
    top: 100%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 7.5px 0 7.5px;
    border-color: #00A2BB transparent transparent transparent;
}
/* popup */
.overflow-bg {
    background: rgba(38, 41, 44, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
}
.popup {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -30%);
    overflow-y: auto;
    padding: 56px 55px 40px;
    background: #fff;
    z-index: 99999;
    border-radius: 16px;
    border: 1px solid #E1EBEE;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    width: 500px;
    box-shadow: 0px 14px 44px 0px rgba(0, 162, 187, 0.04), 0px -2px 4px 0px rgba(9, 29, 48, 0.02), 0px 2px 8px 0px rgba(9, 29, 48, 0.02), 0px 19px 44px 0px rgba(9, 29, 48, 0.02);
}
.popup.active, .overflow-bg.active {
    opacity: 1;
    pointer-events: auto;
}
.popup.active {
    transform: translate(-50%,-50%);
}
.btn-close {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 5px;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
/* left section*/
ul.list-customer {
    color: #69727A;
    list-style-type: none;
    font-size: 18px;
    line-height: 26px;
    margin-left: 0;
}
ul.list-customer li {
    margin-bottom: 16px;
    padding-left: 32px;
    position: relative;
}
ul.list-customer li:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00A2BB;
}
.left img {
    max-width: 400px;
    margin-top: 22px;
    display: block;
}
/* flex */
.d-flex {
    display: flex;
}
.flex-wrap {
    flex-wrap: wrap;
}
.justify-between {
    justify-content: space-between;
}
.justify-end {
    justify-content: flex-end;
}
.items-center {
    align-items: center;
}
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex-between-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-between {
    display: flex;
    justify-content: space-between;
}
.relative {
    position: relative;
}
.w-50 {
    width: 50%;
}
.w-33 {
    width: 33.33%;
}
.w-25 {
    width: 25%;
}
.text-center {
    text-align: center;
}
.text-nowrap {
    white-space: nowrap;
}
.line-text {
    border-bottom: 13px solid #9ED9E5;
    display: inline-block;
    line-height: 0.3;
}
.c-gray {
    color: #69727A!important;
}
.c-blue-dark {
    color: #00A2BB!important;
}
.fw-semi {
    font-weight: 600;
}
.fw-extrabold {
    font-weight: 800;
}
.fs-12 {
    font-size: 12px;
}
.underline {
    text-decoration: underline;
}
.mr-auto {
    margin-right: auto!important;
}
@media (min-width: 1025px) {
    .d-xl-none {
        display: none!important;
    }
}
@media (min-width: 769px) {
    .mobile {
        display: none;
    }
}
@media (max-width: 768px) {
    .desk {
        display: none;
    }
}
@media (max-width: 1024px) {
    .form_contact {
        padding: 25px 15px;
    }
    .block_call {
        margin: 0 -15px 22px;
        width: calc(100% + 30px);
        justify-content: flex-start!important;
        padding: 12px 28px;
    }
}
</style>`;

let htmlForm = `
<div class="form_contact">
    <div class="progressbar flex-center">
        <div class="progressbar_item active d-flex items-center">
            <svg class="bg desk" width="209" height="32" viewBox="0 0 209 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H190.194C190.546 0.5 190.888 0.624154 191.158 0.850671L207.851 14.8507C208.566 15.4502 208.566 16.5498 207.851 17.1493L191.158 31.1493C190.887 31.3758 190.546 31.5 190.194 31.5H5C2.51472 31.5 0.5 29.4853 0.5 27V5Z" fill="#00A2BB" stroke="#00A2BB"></path>
            </svg>
            <svg class="bg mobile" width="158" height="33" viewBox="0 0 158 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H142.753C143.179 0.5 143.585 0.681181 143.87 0.99831L156.43 14.9983C156.941 15.5682 156.941 16.4318 156.43 17.0017L143.87 31.0017C143.585 31.3188 143.179 31.5 142.753 31.5H5C2.51472 31.5 0.5 29.4853 0.5 27V5Z" fill="#00A2BB" stroke="#00A2BB"></path>
            </svg>
            1. Contact Sales
            <svg class="check" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.5C3.58154 0.5 0 4.08154 0 8.5C0 12.9185 3.58154 16.5 8 16.5C12.4185 16.5 16 12.9185 16 8.5C16 4.08154 12.4185 0.5 8 0.5ZM11.7122 5.48556C12.0517 5.76842 12.0975 6.27294 11.8146 6.6123L7.81445 11.4124C7.6749 11.5801 7.4728 11.6833 7.25518 11.6983C7.03754 11.7134 6.82324 11.639 6.66172 11.4922L4.26182 9.31032C3.93489 9.01313 3.9108 8.50714 4.20798 8.18022C4.50517 7.85329 5.01117 7.82919 5.33809 8.12638L7.12018 9.7464L10.5855 5.58783C10.8683 5.24845 11.3727 5.20252 11.7121 5.48537L11.7122 5.48556Z" fill="#00A2BB"></path>
            </svg>
        </div>
        <div class="progressbar_item">
            <svg class="bg desk" width="209" height="32" viewBox="0 0 209 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.48991 1.38731C1.12571 1.08998 1.33596 0.5 1.80612 0.5H204C206.485 0.5 208.5 2.51472 208.5 5V16V27C208.5 29.4853 206.485 31.5 204 31.5H1.80612C1.33596 31.5 1.12571 30.91 1.48991 30.6127L17.9654 17.1619C18.7006 16.5617 18.7006 15.4383 17.9654 14.8381L1.48991 1.38731Z" fill="#fff" stroke="#00A2BB"></path>
            </svg>
            <svg class="bg mobile" width="157" height="32" viewBox="0 0 157 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.28146 0.5H152C154.485 0.5 156.5 2.51472 156.5 5V16V27C156.5 29.4853 154.485 31.5 152 31.5H1.28146C0.845778 31.5 0.61853 30.9815 0.913786 30.6612L13.4883 17.0165C14.0176 16.4422 14.0176 15.5578 13.4883 14.9835L0.913786 1.33884C0.61853 1.01846 0.845778 0.5 1.28146 0.5Z" fill="white" stroke="#00A2BB"></path>
            </svg>
            2. UpLead Product Demo
        </div>
    </div>
    <h2>Contact Sales</h2>
    <div class="formBook">
        <div class="relative">
            <label>Full Name*</label>
            <input type="text" placeholder="John Carter" id="full-name">
            <p class="error-message">Full Name cannot be empty</p>
        </div>
        <div class="relative">
            <label>Work Email Address*</label>
            <input type="email" placeholder="youremail@business.com" id="input-email">
            <p class="error-message">Not a valid e-mail address</p>
        </div>
        <label>Phone</label>
        <div class="relative">
            <div class="flag-dropdown flex-center">
                <span class="selected-flag">
                    <span class="fi fi-us"></span>
                </span>
                <span class="arrow-drop"></span>
                <ul class="country-list"></ul>
            </div>
            <input type="text" id="phoneCode" placeholder="+1" data-mask="+1 (000) 000 0000" value="+1 ">
        </div>
        <label>Number of prospects you would like to reach monthly</label>                   
        <div class="select relative">
            <div class="select-current flex-between-center">
                <span data-current="">Number of prospects</span>
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.723 2.08525L7.51715 8.29722C7.44327 8.37096 7.36324 8.42331 7.27704 8.45427C7.19085 8.48524 7.0985 8.50048 7 8.49999C6.90149 8.49999 6.80915 8.48475 6.72295 8.45427C6.63676 8.4238 6.55673 8.37145 6.48285 8.29722L0.258575 2.08525C0.0861917 1.91321 0 1.69815 0 1.44009C0 1.18203 0.0923483 0.960829 0.277045 0.776497C0.461741 0.592165 0.677221 0.5 0.923483 0.5C1.16974 0.5 1.38522 0.592165 1.56992 0.776497L7 6.19584L12.4301 0.776497C12.6025 0.604455 12.815 0.518433 13.0677 0.518433C13.3203 0.518433 13.5388 0.610599 13.723 0.79493C13.9077 0.979261 14 1.19431 14 1.44009C14 1.68587 13.9077 1.90092 13.723 2.08525Z" fill="#AAAAAA"></path>
                </svg>
            </div>
            <ul class="select-drop">
                <li>Up to 170</li>
                <li>170-399</li>
                <li>400-999</li>
                <li>1000+</li>
            </ul>
        </div>
        <button type="button" class="btn-get btn_submit">Get a Free Demo</button>
    </div>
    <div class="block_calendly"></div>
    <div class="flex-center block_call" style="display: none;">
        <svg style="flex-shrink:0;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C9.62664 0 7.30656 0.7038 5.33316 2.02236C3.35976 3.34092 1.82172 5.21508 0.913436 7.40778C0.005216 9.60054 -0.232444 12.0133 0.230576 14.3411C0.693596 16.6688 1.83648 18.8071 3.51474 20.4853C5.19294 22.1635 7.33116 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81844 22.7312 5.76822 20.4815 3.51852C18.2318 1.26882 15.1816 0.00342 12 0ZM12 19C11.7034 19 11.4133 18.912 11.1667 18.7472C10.92 18.5824 10.7277 18.3481 10.6142 18.074C10.5007 17.8 10.471 17.4983 10.5288 17.2073C10.5867 16.9164 10.7296 16.6491 10.9393 16.4393C11.1491 16.2296 11.4164 16.0867 11.7074 16.0288C11.9983 15.9709 12.2999 16.0006 12.574 16.1142C12.8481 16.2277 13.0824 16.42 13.2472 16.6666C13.412 16.9133 13.5 17.2033 13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5606C12.7793 18.842 12.3978 19 12 19ZM13.6 12.92C13.4216 12.9979 13.2698 13.1261 13.1632 13.289C13.0567 13.4519 12.9999 13.6423 13 13.837C13 14.1022 12.8947 14.3566 12.7071 14.5441C12.5196 14.7316 12.2652 14.837 12 14.837C11.7348 14.837 11.4805 14.7316 11.2929 14.5441C11.1053 14.3566 11 14.1022 11 13.837C10.9999 13.2532 11.1702 12.682 11.4899 12.1936C11.8096 11.7051 12.265 11.3205 12.8 11.087C13.1305 10.9427 13.4159 10.7118 13.6259 10.4186C13.8359 10.1255 13.9627 9.78096 13.993 9.42162C14.0232 9.06228 13.9557 8.70144 13.7977 8.37732C13.6396 8.0532 13.3968 7.7778 13.095 7.58034C12.7933 7.38294 12.4437 7.27074 12.0834 7.25568C11.7231 7.24068 11.3654 7.32336 11.0482 7.49496C10.7311 7.66656 10.4662 7.92072 10.2817 8.23056C10.0972 8.5404 9.99984 8.8944 10 9.255C10 9.5202 9.89466 9.77454 9.7071 9.9621C9.5196 10.1497 9.2652 10.255 9 10.255C8.7348 10.255 8.48046 10.1497 8.2929 9.9621C8.10534 9.77454 7.99998 9.5202 7.99998 9.255C7.99998 8.53386 8.19492 7.8261 8.56422 7.20666C8.93352 6.58722 9.46338 6.07914 10.0978 5.73618C10.7322 5.39322 11.4475 5.22816 12.1681 5.25846C12.8885 5.28876 13.5875 5.51328 14.1908 5.90826C14.7943 6.3033 15.2796 6.85404 15.5956 7.50228C15.9116 8.15052 16.0464 8.87214 15.9859 9.59076C15.9253 10.3094 15.6716 10.9982 15.2516 11.5845C14.8316 12.1708 14.261 12.6325 13.6 12.921V12.92Z" fill="#00A2BB"></path>
        </svg>
        <span>Need a demo sooner? <br class="d-xl-none d-flex">Call Jeremy Perez: <a href="tel:8106237427">(810) 623-7427</a></span>
    </div>
    <div class="flex-center block_consultants">
        <img src="${dir}/img/group-consultants-2.svg" alt="image">
        <span>Our product consultants are ready <span class="text-nowrap">to help you</span></span>
    </div>
</div>`;

let tooltipIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 3C7.53711 3 3.5 7.03711 3.5 12C3.5 16.9629 7.53711 21 12.5 21C17.4629 21 21.5 16.9629 21.5 12C21.5 7.03711 17.4629 3 12.5 3Z" fill="#E1EBEE"/>
<path d="M9.5 10C9.5 8.35059 10.8506 7 12.5 7C14.1494 7 15.5 8.35059 15.5 10C15.5 11.2158 14.709 12.3115 13.5547 12.6953L13.25 12.7891V13.75H11.75V12.7891C11.75 12.1475 12.1689 11.5615 12.7812 11.3594L13.0859 11.2656C13.6309 11.084 14 10.5742 14 10C14 9.16211 13.3379 8.5 12.5 8.5C11.6621 8.5 11 9.16211 11 10H9.5Z" fill="#0098B0"/>
<path d="M11.75 16V14.5H13.25V16H11.75Z" fill="#0098B0"/>
</svg>`;

if (window.location.href.includes('https://www.uplead.com/pricing-2/team-solution-page/'))  { // new team solution page
  
    document.head.insertAdjacentHTML('beforeend',`
        <link rel="stylesheet" id="elementor-global-css" href="https://www.uplead.com/wp-content/uploads/elementor/css/global.css" media="all">
        <link rel="stylesheet" id="elementor-post-6232-css" href="https://www.uplead.com/wp-content/uploads/elementor/css/post-6232.css" media="all">
        <link rel="stylesheet" id="elementor-post-10072-css" href="https://www.uplead.com/wp-content/uploads/elementor/css/post-10072.css" media="all"></link>
    `)
  
    let style = `
    ${styleBase}
    <style>
    /* offer-section */
    .offer-section {
        background: #F8FBFB;
    }
    .offer-section h1 {
        margin: 0 0 24px 0;
    }
    .offer-section .left {
        max-width: 610px;
    }
    .offer-section  .container {
        padding: 64px 20px;
        margin: 0 auto;
        max-width: 1232px;
    }
    .offer-section p {
        margin-bottom: 24px;
    }
    .tab {
        background: #E4F9FD;
        padding: 8px 16px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #00A2BB;
        width: fit-content;
        margin-bottom: 20px;
    }
    /* customised-section */
    .customised-section {
        border-bottom: 1px solid #E1EBEE;
    }
    .customised-section .container {
        max-width: 1010px;
        padding: 96px 20px 100px;
        margin: 0 auto;
    }
    .customised-section p {
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
    }
    .customised-section svg {
        margin-bottom: 24px;
    }
    .customised-section .w-50 {
        width: calc(50% - 20px);
        margin-right: 40px;
        margin-top: 64px;
        border-radius: 16px;
        padding: 40px 32px;
        background: #FFF;
        box-shadow: 0px 14px 44px 0px rgba(0, 162, 187, 0.04), 0px -2px 4px 0px rgba(9, 29, 48, 0.02), 0px 2px 8px 0px rgba(9, 29, 48, 0.02), 0px 19px 44px 0px rgba(9, 29, 48, 0.02);
    }
    .customised-section .w-50:last-child {
        margin-right: 0;
    }
    /* sales-oriented-section */
    .sales-oriented-section {
        border-bottom: 1px solid #E1EBEE;
        margin-bottom: 76px;
    }
    .sales-oriented-section .container {
        max-width: 1180px;
        padding: 100px 20px;
        margin: 0 auto;
    }
    .sales-oriented-section .w-33 {
        width: calc(33.33% - 16px);
        margin-right: 24px;
        margin-top: 64px;
        border-radius: 16px;
        border: 1px solid var(--e-1-ebee, #E1EBEE);
        background: #FFF;
        padding: 32px;
    }
    .sales-oriented-section .w-33:last-child {
        margin-right: 0;
    }
    .sales-oriented-section svg {
        margin-bottom: 16px;
    }
    .sales-oriented-section p {
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
    }
    .sales-oriented-section ul.list-customer {
        padding-top: 4px;
        font-size: 16px;
        line-height: 24px;
    }
    .sales-oriented-section ul.list-customer li {
        margin: 4px 0 0 0;
    }
    /* credit-section */
    .credit-section {
        margin: 0 auto;
        padding: 100px 20px 0;
        max-width: 770px;
    }
    .credit-section h4 {
        margin-bottom: 18px;
    }
    .credit-section div p {
        font-size: 15px;
        line-height: 26px;
        color: #7A7A7A;
    }
    .credit-section svg {
        flex-shrink: 0;
        margin-right: 20px;
    }
    /* rating-block */
    .rating-block {
        border-radius: 16px;
        border: 1px solid var(--dee-0-e-6, #DEE0E6);
        max-width: 636px;
        margin: 0 auto 100px;
        padding: 40px;
    }
    .rating-block p.rating {
        font-weight: 700;
        font-size: 14px;
        color: #343434;
    }
    .rating-block p.text-footer {
        font-size: 16px;
        line-height: 24px;
    }
    .rating-block button {
        margin: 21px auto 18px;
        display: block;
    }
    /*data-section*/
    .data-section {
        padding: 15px 20px 60px;
        max-width: 1220px;
        margin: 0 auto;
    }
    .data-section .w-25 {
        padding: 56px 12px 0 12px;
    }
    .data-section .w-25 > div {
        padding: 50px 53px 60px;
        border: 1px solid #dee8eb;
        border-radius: 8px;
    }
    .data-section .w-25 p {
        font-family: 'gilroy', sans-serif;
    }
    .data-section .head {
        color: #00a2bb;
        font-size: 54px;
        font-weight: 800;
        line-height: 54px;
        margin-bottom: 20px;
    }
    .data-section .w-25 p:not(.head) {
        color: #69727a;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
    }
    .data-section > h2.trusted-title {
        margin: 174px auto 56px;
    }
    /* review-section */
    .review-section {
        padding: 60px 20px;
        max-width: 1300px;
        margin: 0 auto;
    }
    .review-section > p {
        font-family: "gilroy", Sans-serif;
        color: #69727A;
        font-weight: 500;
        line-height: 27px;
        max-width: 650px;
        margin: 20px auto 0;
    }
    .review-section img {
        width: calc(50% - 15px);
        margin-right: 30px;
        margin-top: 60px;
        object-fit: contain;
        height: fit-content;
    }
    .review-section img:nth-child(2n+2) {
        margin-right: 0;
    } 
    .review-section h2 {
        max-width: 784px;
        margin: 0 auto;
    }
    </style>`

    let html = `
    <section class="offer-section">
        <div class="container flex-between-center">
            <div class="left">
                <div class="tab">Team solution</div>
                <h1>10X Your ROI: Master Complex Sales Cycles with UpLead</h1>
                <p class="c-gray">Schedule a demo and see how UpLead can grow your sales efforts</p>
                <ul class="list-customer">
                    <li><b>Unlimited Potential:</b> Customise your sales pipeline with unlimited prospects and users for targeting ideal customers</li>
                    <li><b>Dedicated Support and Mentoring:</b> Maximise ROI with ongoing guidance for sales optimisation</li>
                    <li><b>Advanced Search & Intent Data:</b> Filter prospects actively seeking solutions like yours for effective sales approaches </li>
                    <li><b>Accurate Contact Data:</b> Rely on our verified contact information for meaningful connections </li>
                </ul>
                <img src="${dir}/img/medals-2.svg" alt="medals image">
            </div>
            ${htmlForm}
        </div>
    </section>
    <section class="customised-section">
        <div class="container">
            <h2 class="text-center">Tailored <span class="line-text">Sales Solutions</span> for <br> Your Entire Team</h2>
            <div class="d-flex">
                <div class="w-50">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_616_4796)">
                        <path d="M58.237 0H21.7191C9.72398 0 0 9.72398 0 21.7191V58.237C0 70.2322 9.72398 79.9561 21.7191 79.9561H58.237C70.2322 79.9561 79.9561 70.2322 79.9561 58.237V21.7191C79.9561 9.72398 70.2322 0 58.237 0Z" fill="#E4F9FD"/>
                        <path d="M51.0656 39.2601C56.77 39.2601 61.3944 34.6358 61.3944 28.9313C61.3944 23.2269 56.77 18.6025 51.0656 18.6025C45.3612 18.6025 40.7368 23.2269 40.7368 28.9313C40.7368 34.6358 45.3612 39.2601 51.0656 39.2601Z" fill="#10BBD6"/>
                        <path d="M19.8428 51.4343L18.749 61.123V61.8653H33.868V59.7165C33.5686 58.4664 33.0164 55.8801 33.2039 55.5364C33.3914 55.1926 32.1621 52.5282 31.524 51.2389L30.6255 48.8167H49.1044V49.52L45.393 54.8722L44.8851 61.8653H59.848V56.4349C59.848 55.6848 57.9727 52.1635 57.0351 50.4966L55.9412 47.5275L58.129 44.0896L57.0351 40.1828L52.972 38.4639H49.5341L46.0962 40.1828L44.2209 35.4947L41.5643 33.932L44.2209 29.5564V26.1185L40.783 23.4619H36.8762L34.5322 26.1185V31.7442L36.8762 33.932L32.9695 38.4639L30.6255 41.2767L28.4376 38.4639H24.2184L22.0306 40.1828L21.0929 45.1835L22.8119 49.7153L19.8428 51.4343Z" fill="white"/>
                        <path d="M39.2428 34.1516C42.3484 34.1516 44.8659 31.634 44.8659 28.5284C44.8659 25.4228 42.3484 22.9053 39.2428 22.9053C36.1373 22.9053 33.6196 25.4228 33.6196 28.5284C33.6196 31.634 36.1373 34.1516 39.2428 34.1516Z" stroke="#0B2537" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M26.1222 49.1467C29.2278 49.1467 31.7453 46.6291 31.7453 43.5235C31.7453 40.4179 29.2278 37.9004 26.1222 37.9004C23.0167 37.9004 20.499 40.4179 20.499 43.5235C20.499 46.6291 23.0167 49.1467 26.1222 49.1467Z" stroke="#0B2537" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M52.3634 49.1467C55.469 49.1467 57.9866 46.6291 57.9866 43.5235C57.9866 40.4179 55.469 37.9004 52.3634 37.9004C49.2579 37.9004 46.7402 40.4179 46.7402 43.5235C46.7402 46.6291 49.2579 49.1467 52.3634 49.1467Z" stroke="#0B2537" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M46.7402 43.5243C46.7402 37.3088 43.3863 34.1523 39.2426 34.1523C35.099 34.1523 31.7451 37.3088 31.7451 43.5243" stroke="#0B2537" stroke-width="3" stroke-miterlimit="10"/>
                        <path d="M33.6196 60.3928V58.5184C33.6196 52.3029 30.2657 49.1465 26.1221 49.1465C21.9784 49.1465 18.6245 52.3029 18.6245 58.5184V60.3928" stroke="#0B2537" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"/>
                        <path d="M59.8613 60.3928V58.5184C59.8613 52.3029 56.5074 49.1465 52.3637 49.1465C48.2201 49.1465 44.8662 52.3029 44.8662 58.5184V60.3928" stroke="#0B2537" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_616_4796">
                        <rect width="80" height="80" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <h4>Unlimited Prospects & User Seats</h4>
                    <p>Optimize team performance and streamline credit usage with UpLead's unlimited prospects and user seats, empowering sales leaders to reach their targets more efficiently</p>
                </div>
                <div class="w-50">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_616_4806)">
                        <path d="M58.237 0H21.7191C9.72398 0 0 9.72398 0 21.7191V58.237C0 70.2322 9.72398 79.9561 21.7191 79.9561H58.237C70.2322 79.9561 79.9561 70.2322 79.9561 58.237V21.7191C79.9561 9.72398 70.2322 0 58.237 0Z" fill="#E4F9FD"/>
                        <path d="M52.8425 36.6019C58.5469 36.6019 63.1713 31.9776 63.1713 26.2731C63.1713 20.5687 58.5469 15.9443 52.8425 15.9443C47.138 15.9443 42.5137 20.5687 42.5137 26.2731C42.5137 31.9776 47.138 36.6019 52.8425 36.6019Z" fill="#10BBD6"/>
                        <path d="M43.1372 32.2617C45.6378 32.2617 47.665 30.2345 47.665 27.7339C47.665 25.2332 45.6378 23.2061 43.1372 23.2061C40.6365 23.2061 38.6094 25.2332 38.6094 27.7339C38.6094 30.2345 40.6365 32.2617 43.1372 32.2617Z" fill="white"/>
                        <path d="M52.8432 51.3056C55.3439 51.3056 57.371 49.2784 57.371 46.7778C57.371 44.2772 55.3439 42.25 52.8432 42.25C50.3426 42.25 48.3154 44.2772 48.3154 46.7778C48.3154 49.2784 50.3426 51.3056 52.8432 51.3056Z" fill="white"/>
                        <path d="M21.313 32.2617C23.8136 32.2617 25.8408 30.2345 25.8408 27.7339C25.8408 25.2332 23.8136 23.2061 21.313 23.2061C18.8123 23.2061 16.7852 25.2332 16.7852 27.7339C16.7852 30.2345 18.8123 32.2617 21.313 32.2617Z" fill="white"/>
                        <path d="M21.313 61.1025C23.8136 61.1025 25.8408 59.0753 25.8408 56.5747C25.8408 54.074 23.8136 52.0469 21.313 52.0469C18.8123 52.0469 16.7852 54.074 16.7852 56.5747C16.7852 59.0753 18.8123 61.1025 21.313 61.1025Z" fill="white"/>
                        <path d="M45.436 64.0117C47.9366 64.0117 49.9638 61.9845 49.9638 59.4839C49.9638 56.9832 47.9366 54.9561 45.436 54.9561C42.9354 54.9561 40.9082 56.9832 40.9082 59.4839C40.9082 61.9845 42.9354 64.0117 45.436 64.0117Z" fill="white"/>
                        <path d="M37.2937 51.3062C41.5447 51.3062 44.9908 47.8601 44.9908 43.6092C44.9908 39.3582 41.5447 35.9121 37.2937 35.9121C33.0428 35.9121 29.5967 39.3582 29.5967 43.6092C29.5967 47.8601 33.0428 51.3062 37.2937 51.3062Z" fill="white"/>
                        <path d="M31.1745 48.4397L24.7482 53.5134M39.9307 36.4503L41.685 31.6887M44.8915 45.209L48.6567 46.0021M40.8668 50.3998L43.6684 55.7219M31.9617 38.2781L24.4645 30.7809M44.822 43.6095C44.822 47.7697 41.4533 51.1384 37.2931 51.1384C33.1345 51.1384 29.7641 47.7697 29.7641 43.6095C29.7641 39.4535 33.1345 36.0805 37.2931 36.0805C41.4533 36.0805 44.822 39.4535 44.822 43.6095ZM53.1875 42.7729C52.0781 42.7729 51.0142 43.2136 50.2298 43.998C49.4455 44.7824 49.0048 45.8463 49.0048 46.9556C49.0048 48.065 49.4455 49.1289 50.2298 49.9134C51.0142 50.6978 52.0781 51.1384 53.1875 51.1384C54.2968 51.1384 55.3607 50.6978 56.1452 49.9134C56.9296 49.1289 57.3703 48.065 57.3703 46.9556C57.3703 45.8463 56.9296 44.7824 56.1452 43.998C55.3607 43.2136 54.2968 42.7729 53.1875 42.7729ZM43.1489 23.5322C42.0395 23.5322 40.9756 23.9729 40.1912 24.7573C39.4068 25.5418 38.9661 26.6057 38.9661 27.715C38.9661 28.8244 39.4068 29.8883 40.1912 30.6727C40.9756 31.4571 42.0395 31.8978 43.1489 31.8978C44.2582 31.8978 45.3221 31.4571 46.1066 30.6727C46.891 29.8883 47.3317 28.8244 47.3317 27.715C47.3317 26.6057 46.891 25.5418 46.1066 24.7573C45.3221 23.9729 44.2582 23.5322 43.1489 23.5322ZM21.3985 23.5322C20.2892 23.5322 19.2253 23.9729 18.4409 24.7573C17.6565 25.5418 17.2158 26.6057 17.2158 27.715C17.2158 28.8244 17.6565 29.8883 18.4409 30.6727C19.2253 31.4571 20.2892 31.8978 21.3985 31.8978C22.5079 31.8978 23.5718 31.4571 24.3563 30.6727C25.1407 29.8883 25.5814 28.8244 25.5814 27.715C25.5814 26.6057 25.1407 25.5418 24.3563 24.7573C23.5718 23.9729 22.5079 23.5322 21.3985 23.5322ZM21.3985 51.975C20.2892 51.975 19.2253 52.4157 18.4409 53.2001C17.6565 53.9845 17.2158 55.0484 17.2158 56.1577C17.2158 57.267 17.6565 58.3309 18.4409 59.1154C19.2253 59.8998 20.2892 60.3405 21.3985 60.3405C22.5079 60.3405 23.5718 59.8998 24.3563 59.1154C25.1407 58.3309 25.5814 57.267 25.5814 56.1577C25.5814 55.0484 25.1407 53.9845 24.3563 53.2001C23.5718 52.4157 22.5079 51.975 21.3985 51.975ZM45.6586 55.3212C44.5493 55.3212 43.4854 55.7619 42.7009 56.5463C41.9165 57.3307 41.4758 58.3946 41.4758 59.504C41.4758 60.6133 41.9165 61.6772 42.7009 62.4616C43.4854 63.246 44.5493 63.6867 45.6586 63.6867C46.7679 63.6867 47.8318 63.246 48.6162 62.4616C49.4006 61.6772 49.8413 60.6133 49.8413 59.504C49.8413 58.3946 49.4006 57.3307 48.6162 56.5463C47.8318 55.7619 46.7679 55.3212 45.6586 55.3212Z" stroke="#0B2537" stroke-width="2.35259" stroke-linecap="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_616_4806">
                        <rect width="80" height="80" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <h4>Advanced Prospect Insights</h4>
                    <p>Use UpLead's direct contact data to uncover the right people and valuable information about your prospects. Leverage our Intent Data and Advanced filters to identify leads that align with your qualification criteria</p>
                </div>
            </div>
        </div>
    </section>

    <section class="sales-oriented-section">
        <div class="container">
            <h2 class="text-center">Sales-oriented   <span class="line-text">Companies Grow</span> <br> with UpLead</h2>
            <div class="d-flex">
                <div class="w-33">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_617_5014)">
                        <path d="M57.1428 0H22.8572C10.2335 0 0 10.2335 0 22.8572V57.1428C0 69.7665 10.2335 80 22.8572 80H57.1428C69.7665 80 80 69.7665 80 57.1428V22.8572C80 10.2335 69.7665 0 57.1428 0Z" fill="#E4F9FD"/>
                        <path d="M25.531 41.1382C32.2001 41.1382 37.6065 35.7319 37.6065 29.0628C37.6065 22.3937 32.2001 16.9873 25.531 16.9873C18.8619 16.9873 13.4556 22.3937 13.4556 29.0628C13.4556 35.7319 18.8619 41.1382 25.531 41.1382Z" fill="#10BBD6"/>
                        <path d="M59.4063 29.4922H48.543V27.2098C48.543 25.4036 47.0888 23.9346 45.3012 23.9346H35.4014C33.6137 23.9346 32.1595 25.4036 32.1595 27.2098V29.4922H21.2962C19.5457 29.4922 18.1211 30.9241 18.1211 32.6841V56.8686C18.1211 58.6285 19.5457 60.0605 21.2962 60.0605H59.4081C61.1587 60.0605 62.5833 58.6285 62.5833 56.8686V32.6841C62.5814 30.9241 61.1569 29.4922 59.4063 29.4922Z" fill="#0B2537"/>
                        <path d="M52.3929 32.2705H28.3101V57.2795H52.3929V32.2705Z" fill="white"/>
                        <path d="M34.9385 27.2105C34.9385 26.9362 35.1459 26.7139 35.4016 26.7139H45.3014C45.557 26.7139 45.7646 26.9362 45.7646 27.2105V29.4927H34.9385V27.2105Z" fill="white"/>
                        <path d="M20.8999 56.8664V32.6837C20.8999 32.4558 21.0777 32.2705 21.2963 32.2705H25.5312V57.2795H21.2963C21.0777 57.2795 20.8999 57.0942 20.8999 56.8664Z" fill="white"/>
                        <path d="M59.8022 56.8664C59.8022 57.0942 59.6244 57.2795 59.4057 57.2795H55.1709V32.2705H59.4057C59.6244 32.2705 59.8022 32.4558 59.8022 32.6837V56.8664Z" fill="white"/>
                        <path d="M66.5049 42.2334H48.7271C47.0908 42.2334 45.7642 43.5601 45.7642 45.1964V62.9741C45.7642 64.6106 47.0908 65.9371 48.7271 65.9371H66.5049C68.1413 65.9371 69.4679 64.6106 69.4679 62.9741V45.1964C69.4679 43.5601 68.1413 42.2334 66.5049 42.2334Z" fill="white" stroke="#0B2537" stroke-width="2.10038" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M60.0366 50.4531L63.6683 54.0848L60.0366 57.7165" stroke="#091D30" stroke-width="1.68031" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M55.1952 50.4531L51.5635 54.0848L55.1952 57.7165" stroke="#091D30" stroke-width="1.68031" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_617_5014">
                        <rect width="80" height="80" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                        
                    <h4>Customise your team 
                        without limits </h4>
                    <p>Get a detailed overview of companies including size, location, phone number, social links, and more.</p>
                    <ul class="list-customer">
                        <li>Better results using domain names</li>
                        <li>Access 30+ attributes for any company</li>
                        <li>1 company result = 1 credit</li>
                    </ul>
                </div>
                <div class="w-33">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_859_584)">
                        <path d="M56.4706 0H23.5294C10.5345 0 0 10.5345 0 23.5294V56.4706C0 69.4655 10.5345 80 23.5294 80H56.4706C69.4655 80 80 69.4655 80 56.4706V23.5294C80 10.5345 69.4655 0 56.4706 0Z" fill="#E4F9FD"/>
                        <path d="M53.6115 39.1313C59.8691 39.1313 64.9418 34.0585 64.9418 27.801C64.9418 21.5434 59.8691 16.4707 53.6115 16.4707C47.354 16.4707 42.2812 21.5434 42.2812 27.801C42.2812 34.0585 47.354 39.1313 53.6115 39.1313Z" fill="#10BBD6"/>
                        <path d="M56.7358 25.7207H16.8252V54.9638H56.7358V25.7207Z" fill="white"/>
                        <path d="M16.4707 52.2466C16.4707 53.7494 17.6839 54.9628 19.1869 54.9628H54.4979C56.001 54.9628 57.2142 53.7494 57.2142 52.2466V27.8002C57.2142 26.2974 56.001 25.084 54.4979 25.084H19.1869C17.6839 25.084 16.4707 26.2974 16.4707 27.8002V52.2466Z" stroke="#091D30" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M56.4703 28.2354L36.835 41.3591" stroke="#091D30" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.4707 27.8008L36.8425 41.382" stroke="#091D30" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M53.9223 63.5291C59.3925 63.5291 63.8269 59.0946 63.8269 53.6244C63.8269 48.1542 59.3925 43.7197 53.9223 43.7197C48.4521 43.7197 44.0176 48.1542 44.0176 53.6244C44.0176 59.0946 48.4521 63.5291 53.9223 63.5291Z" fill="white"/>
                        <path d="M57.5028 50.8926L52.8061 56.8053C52.7391 56.9015 52.6501 56.9806 52.5463 57.0359C52.4428 57.0909 52.3275 57.1208 52.2101 57.1227C52.0929 57.1248 51.9767 57.0987 51.8713 57.0469C51.7659 56.9952 51.6743 56.9192 51.6042 56.825L50.3115 55.1015" stroke="#0B2537" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M53.9218 63.5291C59.3237 63.5291 63.7027 59.1499 63.7027 53.748C63.7027 48.3461 59.3237 43.9668 53.9218 43.9668C48.5197 43.9668 44.1406 48.3461 44.1406 53.748C44.1406 59.1499 48.5197 63.5291 53.9218 63.5291Z" stroke="#0B2537" stroke-width="1.6" stroke-miterlimit="10" stroke-linecap="square"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_859_584">
                        <rect width="80" height="80" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <h4>Close more deals faster </h4>
                    <p>Improve the quality of your leads, optimize your messaging, and time your emails perfectly with Intent Data. Understand what potential customers want to know before making a purchase, and use that information to enhance your marketing efforts. With Intent Data, you can quickly improve your metrics, resource utilization, and bottom line.</p>
                </div>
                <div class="w-33">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_859_599)">
                        <path d="M57.1428 0H22.8572C10.2335 0 0 10.2335 0 22.8572V57.1428C0 69.7665 10.2335 80 22.8572 80H57.1428C69.7665 80 80 69.7665 80 57.1428V22.8572C80 10.2335 69.7665 0 57.1428 0Z" fill="#E4F9FD"/>
                        <path d="M48.5716 45.5757C56.6133 45.5757 63.1324 39.0566 63.1324 31.0149C63.1324 22.9732 56.6133 16.4541 48.5716 16.4541C40.5298 16.4541 34.0107 22.9732 34.0107 31.0149C34.0107 39.0566 40.5298 45.5757 48.5716 45.5757Z" fill="#10BBD6"/>
                        <path d="M45.9604 37.168L42.6835 41.1003L41.2088 43.7766C43.4663 44.8871 48.0469 47.1846 48.309 47.4904C48.5712 47.7963 52.5691 50.7492 54.5352 52.1874V56.4476L51.149 59.069L37.3857 60.5984L24.4962 59.7791L17.5601 59.069C17.123 58.2862 16.3038 56.6659 16.5223 56.4476C16.7953 56.1744 16.3585 53.0613 16.5223 52.679C16.6862 52.2967 17.6693 50.8766 18.1608 50.4397C18.6522 50.0028 21.11 47.7635 21.3285 47.4904C21.5469 47.2173 24.8786 46.125 26.2986 45.4696C27.4346 44.9453 28.5925 43.8311 29.0294 43.3396C28.465 42.5022 27.2817 40.7181 27.0632 40.281C26.7902 39.735 25.2063 36.7856 24.8786 36.5126C24.6164 36.2941 24.5145 33.1081 24.4962 31.5425L25.2063 27.6101L26.6808 23.8961L29.4116 21.2747C30.7771 20.8196 33.7045 19.9092 34.491 19.9092C35.4742 19.9092 39.4065 20.7284 40.0073 21.2747C40.6081 21.8207 43.3934 23.6231 43.5573 23.8961C43.6884 24.1147 45.214 26.2083 45.9604 27.2278C46.4156 28.9209 47.3476 32.4819 47.435 33.181C47.5225 33.88 46.4884 36.1302 45.9604 37.168Z" fill="white"/>
                        <path d="M43.7336 42.8965C47.1198 40.3405 49.3263 36.3426 49.3263 31.7984C49.3263 24.1085 43.0564 17.8604 35.3663 17.8604C27.6764 17.8604 21.4064 24.1085 21.4064 31.7984C21.4064 36.3426 23.6347 40.3405 26.9992 42.8965C19.1344 45.0374 13.7383 50.1058 13.7383 56.1792C13.7383 62.9079 33.1598 63.1045 35.3663 63.1045C37.5728 63.1045 56.9944 62.9079 56.9944 56.1792C56.9944 50.1058 51.5983 45.0374 43.7336 42.8965ZM25.3387 31.7984C25.3387 26.2713 29.8392 21.7928 35.3663 21.7928C40.8936 21.7928 45.3939 26.2931 45.3939 31.7984C45.3939 37.3038 40.8936 41.8042 35.3663 41.8042C29.8392 41.8042 25.3387 37.3257 25.3387 31.7984ZM35.3663 45.7584C44.8696 45.7584 52.8872 50.4335 53.0402 56.0263C52.0571 57.206 45.5904 59.194 35.3663 59.194C25.1422 59.194 18.6756 57.206 17.6925 56.0263C17.8454 50.4335 25.863 45.7584 35.3663 45.7584Z" fill="#0B2537"/>
                        <path d="M65.5073 42.0498H47.7296C46.0933 42.0498 44.7666 43.3763 44.7666 45.0128V62.7905C44.7666 64.427 46.0933 65.7535 47.7296 65.7535H65.5073C67.1438 65.7535 68.4703 64.427 68.4703 62.7905V45.0128C68.4703 43.3763 67.1438 42.0498 65.5073 42.0498Z" fill="white" stroke="#0B2537" stroke-width="2.17279" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M59.0391 50.2705L62.6708 53.9022L59.0391 57.5339" stroke="#091D30" stroke-width="1.73823" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M54.197 50.2705L50.5654 53.9022L54.197 57.5339" stroke="#091D30" stroke-width="1.73823" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_859_599">
                        <rect width="80" height="80" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <h4>Integrate with your 
                        team’s tools</h4>
                    <p>Push leads directly to your favorite CRM, outreach tool, or a CSV file to feed your campaigns. Eliminate data entry for you and your team.</p>
                    <ul class="list-customer">
                        <li>Zapier</li>
                        <li>CRMs like Salesforce, HubSpot, Pipedrive and more</li>
                        <li>Sales tools like Mailshake, Outreach, Reply and more</li>
                    </ul>
                </div>
            </div>

            <div class="d-flex credit-section">
                <svg class="flex-shrink-0" width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_308_6101)">
                    <path d="M68.1213 0H25.8787C11.5863 0 0 11.5863 0 25.8787V68.1213C0 82.4137 11.5863 94 25.8787 94H68.1213C82.4137 94 94 82.4137 94 68.1213V25.8787C94 11.5863 82.4137 0 68.1213 0Z" fill="#E4F9FD"/>
                    <path d="M59.5 49C66.9558 49 73 42.9558 73 35.5C73 28.0442 66.9558 22 59.5 22C52.0442 22 46 28.0442 46 35.5C46 42.9558 52.0442 49 59.5 49Z" fill="#10BBD6"/>
                    <path d="M43 21H27C23.6863 21 21 23.6863 21 27V66C21 69.3137 23.6863 72 27 72H43C46.3137 72 49 69.3137 49 66V27C49 23.6863 46.3137 21 43 21Z" fill="white"/>
                    <path d="M34.6667 34.6667C42.7668 34.6667 49.3333 31.3834 49.3333 27.3333C49.3333 23.2832 42.7668 20 34.6667 20C26.5665 20 20 23.2832 20 27.3333C20 31.3834 26.5665 34.6667 34.6667 34.6667Z" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M49.3333 34.667C49.3333 38.7175 42.7676 42.0004 34.6667 42.0004C26.5658 42.0004 20 38.7175 20 34.667" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M49.3335 41.9996V27.333" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 27.333V63.9996C20 68.0501 26.5658 71.333 34.6667 71.333C36.5136 71.3359 38.3562 71.1532 40.1667 70.7878" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 56.667C20 60.7175 26.5658 64.0004 34.6667 64.0004C36.5136 64.0033 38.3562 63.8207 40.1667 63.4553" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 49.333C20 53.3834 26.5658 56.6663 34.6667 56.6663C36.5136 56.6692 38.3562 56.4866 40.1667 56.1212" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20 42C20 46.0504 26.5658 49.3333 34.6667 49.3333C36.5136 49.3362 38.3562 49.1536 40.1667 48.7882" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M69 47H53C49.6863 47 47 49.6863 47 53V68C47 71.3137 49.6863 74 53 74H69C72.3137 74 75 71.3137 75 68V53C75 49.6863 72.3137 47 69 47Z" fill="white"/>
                    <path d="M60.3332 60.3337C68.4333 60.3337 74.9998 57.0505 74.9998 53.0004C74.9998 48.9503 68.4333 45.667 60.3332 45.667C52.233 45.667 45.6665 48.9503 45.6665 53.0004C45.6665 57.0505 52.233 60.3337 60.3332 60.3337Z" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.6665 53V67.6667C45.6665 71.7171 52.2323 75 60.3332 75C68.4341 75 74.9998 71.7171 74.9998 67.6667V53" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M74.9998 60.333C74.9998 64.3834 68.4341 67.6663 60.3332 67.6663C52.2323 67.6663 45.6665 64.3834 45.6665 60.333" stroke="#0B2537" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_308_6101">
                    <rect width="94" height="94" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <div>
                    <h4>What’s a credit?</h4>
                    <p>A credit is a contact that you download to excel or export to your CRM. You can also use a credit to unlock a contact’s email address or mobile direct dial. Unlocking the same contact’s email and mobile direct line is one total credit charged. One credit equals one contact.</p>
                </div>
            </div>
        </div>
    </section>

    <div class="rating-block">
        <p class="flex-center rating">G2
            <img src="${dir}/img/stars.png" alt="stars icons">
            4.7/5 (618 reviews) 
        </p>
        <button type="button" class="btn_submit">Contact Sales</button>
        <p class="text-footer text-center">Discover how Uplead connects you with ideal prospects. </p>
    </div>

    <section class="data-section text-center">
        <h2> <span class="line-text">Get Access </span> To The Highest<br> Quality Data</h2>
    
        <div class="d-flex flex-wrap">
            <div class="w-25">
                <div class="">
                    <p class="head">+135M</p>
                    <p>B2B Contacts with
                        Email Addresses</p>
                </div>
            </div>
            <div class="w-25">
                <div class="">
                    <p class="head">+16M</p>
                    <p>Global Company
                        Profiles</p>
                </div>
            </div>
            <div class="w-25">
                <div class="">
                    <p class="head">+16K</p>
                    <p>Technologies
                        Tracked</p>
                </div>
            </div>
            <div class="w-25">
                <div class="">
                    <p class="head">95%</p>
                    <p>Accuracy
                        Guarantee</p>
                </div>
            </div>
        </div>
        <h2 class="trusted-title ">Trusted by Companies<br> Commited to Sales</h2>
        <img src="https://www.uplead.com/wp-content/uploads/2021/01/good-company-logos-desktop.svg" alt="logos">
    </section>

    <section class="review-section text-center">
        <h2 class="">Hear What Our Enterprise Customers <span class="line-text">Say About</span> UpLead</h2>
        <p> Want to know more about people’s experiences? Here’s how UpLead has helped users and companies like yours, all around the world: </p>
        <div class="d-flex flex-wrap">
            <img width="929" height="627" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image-300x202.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image-768x518.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image-300x202.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-agata-krysztofik-image-768x518.png 768w">
            <img width="929" height="627" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image-300x202.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image-768x518.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image-300x202.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-jack-copeland-image-768x518.png 768w">
            <img width="929" height="646" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min-300x209.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min-768x534.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min-300x209.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-raphael-chabound-image-min-768x534.png 768w">
            <img width="929" height="646" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min-300x209.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min-768x534.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min-300x209.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-philipp-wolf-image-min-768x534.png 768w">
            <img width="929" height="674" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image-300x218.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image-768x557.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image-300x218.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-karl-woolfenden-image-768x557.png 768w">
            <img width="929" height="674" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image-300x218.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image-768x557.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image-300x218.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dariyka-sharovarova-image-768x557.png 768w">
            <img width="929" height="672" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min-300x217.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min-768x556.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min-300x217.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-sabe-anderson-image-min-768x556.png 768w">
            <img width="929" height="672" alt="" data-srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image-300x217.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image-768x556.png 768w" data-src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image.png" data-sizes="(max-width: 929px) 100vw, 929px" class="attachment-full size-full ls-is-cached lazyloaded" src="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image.png" sizes="(max-width: 929px) 100vw, 929px" srcset="https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image.png 929w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image-300x217.png 300w, https://www.uplead.com/wp-content/uploads/2020/05/uplead-reviews-dave-parkerson-image-768x556.png 768w">
        </div>
    </section>`


    let initNewPage = setInterval(() => {
        if (document.querySelector('.entry-content')) {
            clearInterval(initNewPage)

            //add fonts
            document.head.insertAdjacentHTML('beforeend',`
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
            `)
            //add style/html
            document.body.insertAdjacentHTML('afterbegin', style)
            document.querySelector('.entry-content').insertAdjacentHTML('afterbegin', html)
            
        }
    })
} else { 
    let plansObj = [
        {
            'top': 'For Individuals',
            'title': 'Starter',
            'titleSpan': 'Ideal for individuals and entrepreneurs looking to connect with niche prospects',
            'nameBtn': 'Try For Free',
            'hrefBtn': 'https://app.uplead.com/trial-signup',
            'info': `
                <p class="flex-center">7 days & <span class="c-blue-dark fw-semi">5 Credits</span> <span class="tooltip">${tooltipIcon}<span class="tooltiptext">Credit unlocks a contact for download or CRM export and gives access to their email and mobile or direct dial. One credit = one contact.</span></span></p>
                <p class="flex-center"><span class="c-blue-dark fw-semi">Then $99/mo</span> & <span class="c-blue-dark fw-semi"> 170 Credits</span> <span class="tooltip">${tooltipIcon}<span class="tooltiptext">Credit unlocks a contact for download or CRM export and gives access to their email and mobile or direct dial. One credit = one contact.</span></span></p>
                <p>Billed annually</p>
            `,
            'includes': {
                'Free includes:': '',
                'Single User Account' : 'Individual user account',
                '135M Verified Emails, Phone Numbers and Direct Dials' : 'Verified email addresses and phone numbers with a data accuracy rate of 95%',
                'CRM Integration' : 'Connect to Salesforce, Hubspot, Zoho, Pipedrive, Microsoft Dynamics 365, Outreach, SalesLoft, Reply.io, Woodpecker, Copper, Nimble, Mailshake, Lemlist, Close and Insightly. Also 1,500+ other apps by using Zapier',
                'Data Enhancement' : 'Enhance your leads with contact information by uploading a list of names and companies and adding key details such as email addresses, phone numbers and social links',
                'Competitor Intelligence' : 'Find competitors to your ideal prospects'
            }
            
        },
        {
            'top': 'For Small Teams with 2-5 Users',
            'title': 'Professional',
            'titleSpan': 'For small teams with simple targets & sales processes',
            'nameBtn': 'Book a Demo',
            'hrefBtn': '#',
            'info': `
                <p>Number of seats:  <span class="c-blue-dark fw-semi">Up to 5</span></p>
                <p>Number of Credits: <span class="c-blue-dark fw-semi">Custom</span></p>
            `,
            'includes': {
                'Everything in Starter and:': '',
                'Up to 5 Users Seats': 'Team account with up to 5 total users maximum',
                'Intent Data': 'Find out which prospects are looking for the solution you offer',
                'Advanced Search Filters': 'Hone your ICP (Ideal Customer Profile) with advanced search filters that allow you to find the perfect prospects based on the technologies they use, industry, revenue and more',
                'Email Pattern Intel': 'See the most common email format for companies. <br> (e.g. first.last@domain.com)',
                'Suppression List Uploads: ': 'Upload lists of contacts/companies to exclude from your search results'
            }
        },
        {
            'top': 'For Big Teams with 5+ users',
            'title': 'Enterprise',
            'titleSpan': 'Designed for sales-driven organisations that require unlimited customisation',
            'nameBtn': 'Contact Sales',
            'hrefBtn': 'https://www.uplead.com/findleadsnow/',
            'info': `
                <p>Number of seats: <span class="c-blue-dark fw-semi">Custom</span></p>
                <p>Number of team's account: <span class="c-blue-dark fw-semi">Custom</span> </p>
                <p>Number of Credits: <span class="c-blue-dark fw-semi">Custom</span></p>
            `,
            'includes': {
                'Everything in Professional and:': '',
                'Intent Data': 'Find out which prospects are looking for the solution you offer',
                'All Search Filters': 'Hone your ICP (Ideal Customer Profile) with all the search filters available, allowing you to find the perfect prospects based on all available data',
                'Full API Access': `Use UpLead's API to access all API calls and seamlessly enrich company and contact information for your product`,
                'Prospector pro API': `Use UpLead's API to access all UpLead's search functionality`,
                'Competitor Intelligence': 'Find competitors to your ideal prospects'
            }
        }
    ];
    
    let itemPlans = (href, topText, title, spanText, btnName, info, includes, selected, active) => {
        let list = '';
        for (const key in includes) {
            list += `<li class="d-flex items-center">
                        ${i != 0 ? 
                            `<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8158 0.601562L4.01735 7.40004L1.18466 4.56734" stroke="${title == 'Professional'? '#fff': '#00A2BB'}" stroke-miterlimit="10"/>
                            </svg>` : ''
                        }
                        ${key}
                        ${includes[key] != '' ? `
                            <span class="tooltip">${tooltipIcon}
                            <span class="tooltiptext">${includes[key]}</span></span>` : ''
                        }
                    </li>`
                
        }
        
        return `
            <div class="item-plan ${selected} ${active}" >
                ${active != '' ? '<div class="item-plan_popular">Most Popular</div>': ''}
                <div class="item-plan_top text-center">${topText}</div>
                <div class="item-plan_container">
                    <div class="item-plan_head">
                        <h3 class="item-plan_title text-center">${title}</h3>
                        <p class="item-plan_span text-center">${spanText}</p>
                    </div>
                    <a href="${href}" class="btn-plan">${selected != '' ? 'Current Plan' : btnName}</a>
                    <div class="item-plan_info text-center">${info}</div>
                    <ul class="item-plan_includes"> ${list}</ul>
                    <a href="${href}" class="btn-plan">${selected != '' ? 'Current Plan' : btnName}</a>
                    <a href="Complete Feature List" class="btn-show-list flex-center">Show Complete Feature List 
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.27978 14.2998L0.328735 7.2998L1.54517 6.05293L6.4109 10.9529V0.299805H8.14867V10.9529L13.0144 6.05293L14.2308 7.2998L7.27978 14.2998Z" fill="#091D30"/>
                        </svg>
                    </a>
                </div>
            </div>
        `
    } 
     
    let bookDemoHtml = `
    <style>
    .book_demo {
       display: none;
       background: #F8FBFB;
    }
    .book_demo.active {
        display: block;
    }
    .book_demo .container {
        max-width: 1232px;
        width: 100%;
        margin: 0 auto;
        padding: 64px 20px;
    }
    .book_demo .left {
        width: calc(100% - 446px);
        padding-right: 105px;
    }
    .book_demo h2 {
        font-size: 32px;
        line-height: 40px;
        text-transform: capitalize;
        margin-bottom: 24px;
    }
    .book_demo .left p {
        margin-bottom: 24px;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        color: #091D30;
    }
    .book_demo+.data-section {
        display: none;
        padding: 100px 20px 60px;
    }
    .book_demo.active+.data-section  {
        display: block;
    }
    .book_demo+.data-section p {
        margin: 24px 0 30px;
    }

    </style>
    <div class="book_demo">
        <div class="container d-flex items-center">
            <div class="left">
                <h2>Grow Your Team's Sales Pipeline with UpLead</h2>
                <p>Book a demo to see how UpLead can be effective for your team</p>
                <ul class="list-customer">
                    <li><b>Team Account:</b> Add up to 5 users and scale perspectives to meet team goals</li>
                    <li><b>Advanced Search & Intent Data:</b> Precisely filter prospects, personalise and target your sales outreach effectively</li>
                    <li><b>Enriched Contact Data:</b> Enhance prospect insight for more efficient and profitable connections</li>
                    <li><b>Seamless Integrations:</b> Seamlessly integrate UpLead with your CRM for enhanced productivity</li>
                </ul>
                <p>Schedule a demo today and let UpLead transform your sales process to meet your unique goals.</p>
                <img src="${dir}/img/medals-2.svg" alt="medal image">
            </div>
            ${htmlForm}
        </div>
    </div>
    <section class="data-section text-center">
        <h2 class="trusted-title ">Trusted by Companies<br> Commited to Sales</h2>
        <p class="c-gray">Uplead is the preferred lead generation tool for companies selling<br> across the globe.</p>
        <img src="https://www.uplead.com/wp-content/uploads/2021/01/good-company-logos-desktop.svg" alt="logos">
    </section>`
  
    let initPlan = setInterval(() => {
        if (
            (document.querySelector('.site-content') && 
                window.location.href.includes('https://www.uplead.com/pricing/')) || 
            (document.querySelector('.accountPlans__plans-list') && 
                window.location.href.includes('https://app.uplead.com/plans')) && 
            document.querySelector(`.feature-list-section`)) {
                clearInterval(initPlan)

            document.body.insertAdjacentHTML('afterbegin', styleBase)
            
            //add fonts
            document.head.insertAdjacentHTML('beforeend',`
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
            `)

            if (window.location.href.includes('https://www.uplead.com/pricing/')) {
                document.querySelector('.site-content').insertAdjacentHTML('afterbegin',`
                    <style>
                        .elementor-element-714be3e, .elementor-element-30b36ac5, .elementor-element-7b3d7b13, .elementor-element-5e5a4a6, .elementor-element-437cc49, .elementor-element-b1aa2aa, .elementor-element-430cf234  {
                            display: none;
                        }
                        /* pricing-section */
                        .pricing-section {
                            max-width: 1127px;
                            margin: 40px auto 100px;
                            padding: 0 20px;
                        }
                        .pricing-section h1 {
                            margin-bottom: 24px;
                        }
                        .pricing-section > p {
                            color: #69727A;
                            font-size: 20px;
                            font-family: 'gilroy';
                            font-style: normal;
                            font-weight: 400;
                            line-height: 28px;
                        }
                        .sticky-head {
                            background: #fff!important;
                        }
                    
                    </style>
                    
                    <section class="pricing-section">
                        <h1 class="text-center">Smash Sales Targets and ensure maximum ROI</h1>
                        <p class="text-center">Reach millions of decision makers and their teams.</p>
                        <div class="d-flex flex-wrap plans justify-between"></div>
                    </section>
                    ${bookDemoHtml}
                `)

            }
            if (window.location.href.includes('https://app.uplead.com/plans')) {
                document.querySelector('.accountPlans__plans-list').innerHTML = '';
                document.querySelector('.accountPlans__plans-list').classList.add('plans', 'd-flex', 'flex-wrap', 'justify-between');
              
                document.body.insertAdjacentHTML('beforeend', `
                <div class="overflow-bg"></div>
                <div class="popup">
                    <svg class="btn-close" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 13L1 1M13 1L1 13" stroke="#091D30" stroke-width="2" stroke-linejoin="round"/>
                    </svg>
                    <h2>UpLead Product Demo</h2>
                    <div class="block_calendly"></div>
                    <div class="flex-center block_call">
                        <svg style="flex-shrink:0;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C9.62664 0 7.30656 0.7038 5.33316 2.02236C3.35976 3.34092 1.82172 5.21508 0.913436 7.40778C0.005216 9.60054 -0.232444 12.0133 0.230576 14.3411C0.693596 16.6688 1.83648 18.8071 3.51474 20.4853C5.19294 22.1635 7.33116 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81844 22.7312 5.76822 20.4815 3.51852C18.2318 1.26882 15.1816 0.00342 12 0ZM12 19C11.7034 19 11.4133 18.912 11.1667 18.7472C10.92 18.5824 10.7277 18.3481 10.6142 18.074C10.5007 17.8 10.471 17.4983 10.5288 17.2073C10.5867 16.9164 10.7296 16.6491 10.9393 16.4393C11.1491 16.2296 11.4164 16.0867 11.7074 16.0288C11.9983 15.9709 12.2999 16.0006 12.574 16.1142C12.8481 16.2277 13.0824 16.42 13.2472 16.6666C13.412 16.9133 13.5 17.2033 13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5606C12.7793 18.842 12.3978 19 12 19ZM13.6 12.92C13.4216 12.9979 13.2698 13.1261 13.1632 13.289C13.0567 13.4519 12.9999 13.6423 13 13.837C13 14.1022 12.8947 14.3566 12.7071 14.5441C12.5196 14.7316 12.2652 14.837 12 14.837C11.7348 14.837 11.4805 14.7316 11.2929 14.5441C11.1053 14.3566 11 14.1022 11 13.837C10.9999 13.2532 11.1702 12.682 11.4899 12.1936C11.8096 11.7051 12.265 11.3205 12.8 11.087C13.1305 10.9427 13.4159 10.7118 13.6259 10.4186C13.8359 10.1255 13.9627 9.78096 13.993 9.42162C14.0232 9.06228 13.9557 8.70144 13.7977 8.37732C13.6396 8.0532 13.3968 7.7778 13.095 7.58034C12.7933 7.38294 12.4437 7.27074 12.0834 7.25568C11.7231 7.24068 11.3654 7.32336 11.0482 7.49496C10.7311 7.66656 10.4662 7.92072 10.2817 8.23056C10.0972 8.5404 9.99984 8.8944 10 9.255C10 9.5202 9.89466 9.77454 9.7071 9.9621C9.5196 10.1497 9.2652 10.255 9 10.255C8.7348 10.255 8.48046 10.1497 8.2929 9.9621C8.10534 9.77454 7.99998 9.5202 7.99998 9.255C7.99998 8.53386 8.19492 7.8261 8.56422 7.20666C8.93352 6.58722 9.46338 6.07914 10.0978 5.73618C10.7322 5.39322 11.4475 5.22816 12.1681 5.25846C12.8885 5.28876 13.5875 5.51328 14.1908 5.90826C14.7943 6.3033 15.2796 6.85404 15.5956 7.50228C15.9116 8.15052 16.0464 8.87214 15.9859 9.59076C15.9253 10.3094 15.6716 10.9982 15.2516 11.5845C14.8316 12.1708 14.261 12.6325 13.6 12.921V12.92Z" fill="#00A2BB"></path>
                        </svg>
                        <span>Need a demo sooner? <br class="d-xl-none d-flex">Call Jeremy Perez: <a href="tel:8106237427">(810) 623-7427</a></span>
                    </div>
                    <div class="flex-center block_consultants">
                        <img src="${dir}/img/group-consultants-2.svg" alt="image">
                        <span>Our product consultants are ready <span class="text-nowrap">to help you</span></span>
                    </div>
                </div>`)
                document.querySelector('.overflow-bg', '.btn-close').addEventListener('click', (e) => {
                    toggleActive(document.querySelector('.popup'));
                    toggleActive(document.querySelector('.overflow-bg'));
                })
            }

            document.body.insertAdjacentHTML('afterbegin',`
            
            <style>
            .accountPlans__monthlyPlans-link, .accountPlans__plans-list .item-plan_top {
                display: none;
            }
            .plans {
                max-width: 1087px;
                margin: 25px auto;
                gap: initial;
            }
            .item-plan {
                margin: 25px 32px 25px 0;
                width: calc(33.33% - 22px);
                border-radius: 16px;
                border: 1px solid #E1EBEE;
                background: #FFF;
                position: relative;
            }
            .item-plan:last-child {
                margin-right: 0;
            }
            .item-plan_top {
                border-radius: 14px 14px 2px 2px;
                background: #F3F6F8;
                padding: 6px;
                color: #26292C;
                font-size: 14px;
                font-style: normal;
                font-weight: 600;
                line-height: 24px;
            }
            .item-plan_container {
                padding: 40px 16px;
            }
            .item-plan_head {
                position: relative;
                z-index: 1;
                margin: -40px -16px 0;
                padding: 40px 16px 0;
            }
            .item-plan.selected  {
                pointer-events: none;
            }
            .item-plan.selected {
                background: transparent;
            }
            .item-plan.selected .btn-plan {
                background: #DEE0E6;
                border-color: #DEE0E6;
                color: #69727A;
            }
            .item-plan_popular {
                border-radius: 40px;
                border: 1px solid #00A2BB;
                background: #F0FBF8;
                padding: 8px 24px;
                font-size: 14px;
                line-height: 24px;
                position: absolute;
                z-index: 2;
                top: -14px;
                left: 50%;
                transform: translateX(-50%);
                display: none;
            }
            .accountPlans__plans-list .item-plan_popular {
                display: block;
            }
            .item-plan.active .item-plan_title,  .item-plan.active .item-plan_span {
                color: #fff;
            }
            .item-plan_span {
                font-size: 15px;
                line-height: 20px;
                margin: 8px 0 32px;
                padding-bottom: 32px;
                border-bottom: 1px solid #D5D9DD;
            }
            .btn-plan {
                line-height: 56px;
                text-align: center;
                background: #FFFFFF;
                border: 1px solid #0098B0;
                border-radius: 100px;
                color: #00A2BB;
                margin-bottom: 24px;
                display: block;
                text-decoration-line: none;
                font-size: 18px;
                font-style: normal;
                font-weight: 600;
            }
            .item-plan.active {
                border: 1px solid #00A2BB;
                background: #FFF;
                box-shadow: 0px 16px 40px 0px rgba(1, 141, 163, 0.15);
            }
            .item-plan.active .btn-plan {
                background: #00A2BB;
                color: #FFF;
            }
            .item-plan.active .item-plan_top {
                background: #22AFC6;
                color: #FFF;
            }
            .item-plan.active .item-plan_head:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background: #00A2BB;
                height: 156px;
                z-index: -1;
            }
            .accountPlans__plans-list .item-plan.active .item-plan_head:before {
                border-radius: 16px 16px 0 0;
            }
            .item-plan_info {
                padding-bottom: 20px;
                margin-bottom: 32px;
                border-bottom: 1px solid #D5D9DD;
                min-height: 110px;
            }
            .item-plan_info p {
                line-height: 26px;
                margin-bottom: 4px;
            }
            .item-plan_info p span {
                margin: 0 4px;
            }
            .item-plan_includes {
                list-style-type: none;
                font-size: 16px;
                line-height: 24px;
                min-height: 226px;
                margin: 0 0 24px 0;
                display: flex;
                flex-direction: column;
            }
            .item-plan_includes li:not(:first-child) {
                color: #69727A;
                margin: auto 0 8px;
            }
            .item-plan_includes li:nth-child(2) {
                margin-top: 0;
            }
            .item-plan_includes li > svg {
                background: #fff;
                border: 1px solid #00A2BB;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 15px;
                padding: 3px;
                flex-shrink: 0;
            }
            .item-plan_includes li:first-child {
                font-weight: 600;
                margin-bottom: 16px;
                font-size: 18px;
                line-height: 26px;
            }
            .item-plan.active .item-plan_includes li > svg {
                background: #00A2BB;
            }
            .btn-show-list {
                font-size: 16px;
                line-height: 24px;
                text-decoration-line: underline;
                color: #091D30;
            }
            .btn-show-list svg {
                margin-left: 10px;
            }
          
            </style>`)

            //add calendly script
            document.body.appendChild(scriptCalendly)

            for (let i = 0; i < plansObj.length; i++) {
                let active = ''
                let selected = '';
                if (window.location.href.includes('https://www.uplead.com/pricing/')) {
                    active = i == 1 ? 'active' : '';
                } else {
                    active = i == 1  ? 'active' : ''; 
                    selected = i == 0  ? 'selected' : ''; 
                }
               
                document.querySelector('.plans').insertAdjacentHTML('beforeend', 
                    itemPlans(plansObj[i].hrefBtn, plansObj[i].top, plansObj[i].title, plansObj[i].titleSpan, plansObj[i].nameBtn, plansObj[i].info, plansObj[i].includes, selected, active)
                )
                
                //scroll to feature list section
                document.querySelectorAll('.btn-show-list')[i].addEventListener('click', (e) => {
                    e.preventDefault()

                    let scrollTarget = document.querySelector(`.feature-list-section`);
                    let elementPosition = scrollTarget.getBoundingClientRect().top;
                    let offsetPosition =  elementPosition + window.innerHeight / 2;

                    document.querySelector('html').scrollTop = offsetPosition;
                })

                document.querySelectorAll('.item-plan')[i].querySelectorAll('.btn-plan').forEach(item => {
                    item.addEventListener('click', (e) => {
                        if (i == 1 && window.location.href.includes('https://www.uplead.com/pricing/')) {
                            toggleActive(document.querySelector('.book_demo'));
                            
                            document.querySelector('.pricing-section').style.display = 'none';
                            document.querySelector('.ast-container').style.display = 'none';
                        } else if ((i == 1 || i == 2) && window.location.href.includes('https://app.uplead.com/plans')) {
                            toggleActive(document.querySelector('.popup'));
                            toggleActive(document.querySelector('.overflow-bg'));
                            document.querySelector('.block_calendly').style = `position:initial; opacity:1;pointer-events:auto;height:510px;`;
               
                            window.Calendly.initInlineWidget({
                                url: `https://calendly.com/upleadhq/phone-call/?hide_event_type_details=1&hide_gdpr_banner=1`,
                                parentElement: document.querySelector(".block_calendly")
                            })
                        }
                    })
                })
            }
        }
    })
    
    //Complete Feature List section
    let dataListObj = {
        'Plan Details': [
            ['Amount of Credits','Each plan has a unique number of credits. A credit unlocks a contact for download or CRM export and gives access to their email and mobile / direct dial. One credit = one contact.','170 credits/ month','Custom','Custom'],
            ['Amount of Users Seats','Each plan has a unique number of users','1 user','Up to 5 users','Custom'],
            ['Additional Credits','Buy additional credits if you run out. Each plan offers a custom price for additional credits.','$0.6/ credit','Custom','Custom']
        ],
        'Business data': [
            ['Verified Emails','We verify email addresses with a data accuracy rate of 95%','','',''],
            ['Verified Phone Numbers','We verify phone numbers with a data accuracy rate of 95%','','',''],
            ['Mobile Direct Dials','Access mobile numbers or direct dials','','','']
        ],
        'Contacts Management': [
            ['Data Enhancement','Enhance your leads with conta/ct information by uploading a list of names and companies and adding key details such as email addresses, phone numbers and social links','','',''],
            ['Technographics','Find companies using competitive or complementary technologies. Search over 16,000 technologies.','','',''],
            ['Data Enrichment','Enrich your business or disconnected contact list with over 50 accurate data points such as email, phone, social and more','empty','',''],
            ['Intent Data','Find out which prospects are looking for the solution you offer','empty','','']
        ],
        'Competitor Analysis': [
            ['Competitor Intelligence','Upload lists of contacts/companies to exclude from your search results','','',''],
        ],
        'Prospecting Platform': [
            ['Advanced Search Filters','Hone your ICP (Ideal Customer Profile) with advanced search filters that allow you to find the perfect prospects based on the technologies they use, industry, revenue and more','empty','',''],
            ['Suppression List Uploads','Upload lists of contacts/companies to exclude from your search results','empty','',''],
            ['Email Pattern Intel','See the most common email format for companies. <br>(e.g. first.last@domain.com)','empty','',''],
            ['All Search Filters','Hone your ICP (Ideal Customer Profile) with all the search filters available, allowing you to find the perfect prospects based on all available data','empty','empty','']
        ],
        'Integrations': [
            ['Zapier','Export your contacts and accounts, along with their contact information and demographics, directly to a CSV file','','',''],
            ['CRMs','Integration with CRMs Salesforce, HubSpot, Pipedrive, Microsoft Dynamics 365, Copper, Nimble, Close, Insightly and more','','',''],
            ['Sales Tools','Integration with sales tools Mailshake, Outreach, Reply, Zoho, SalesLoft, Woodpecker, Lemlist and more','','','']
        ],
        'UpLead Extension': [
            ['Chrome','Find sales information for prospects and companies by visiting their website or LinkedIn profile','','','']
        ],
        'News': [
            ['Company News','See news events for companies and get alerts for companies you should be speaking with','','','']
        ],
        'API': [
            ['Enrichment API',`Use UpLead's API to enrich your leads in real time `,'empty','',''],
            ['Prospector pro API',`Use UpLead's API to access all UpLead's search functionality`,'empty','empty',''],
            ['Full API Access',`Use UpLead's API to access all API calls and seamlessly enrich company and contact information for your product`,'empty','empty','']
        ]
    }

    let checkIcon = `<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.0035 2.15566L8.32574 17.5857L0.0164795 10.2946L1.62362 8.48028L8.15477 14.1606L20.2083 0.595703L22.0035 2.15566Z" fill="#00A2BB"/>
    </svg>`;

    let listHtml = `
    <style>
    .entry-content .feature-list-section p {
        margin-bottom: 0;
    }
    /* feature-list-section */
    .feature-list-section {
        padding: 140px 20px 100px;
        max-width: 1180px;
        margin: 0 auto;
    }
    .feature-list-section h2 {
        font-size: 38px;
        line-height: 68px;
        color: #091D30;
        margin-bottom: 70px;
    }
    .feature-list-section * {
        color: #000000;
    }
    .sticky-head_item {
        width: 209px;
        margin: 0!important;
        text-align: center;
        border-left: 1px solid #CFE9EE;
        background: #fff;
    }
    .sticky-head_item:first-child {
        border: none;
    }
    .feature-list .sticky-head_item:last-child {
        border-right: 1px solid #CFE9EE;
    }
    .sticky-head .sticky-head_item:last-child {
        border-radius: 0 16px 0 0;
        border: 1px solid #CFE9EE;
    }
    .sticky-head .sticky-head_item:first-child {
        border-radius: 16px 0 0 0;
        margin-left: auto!important;
        border: 1px solid #CFE9EE;
        border-bottom: none;
    }
    .sticky-head .sticky-head_item:nth-child(2) {
        border: none;
        border-top: 1px solid #CFE9EE;
    }
    .sticky-head {
        z-index: 2;
        position: sticky;
        top: 0;
        background: #F8FBFB;
        border-bottom: 1px solid #CFE9EE;
    }
    .sticky-head .sticky-head_item {
        padding: 16px 16px 8px;
    }
    .sticky-head_item p {
        line-height: 25px;
    }
    .sticky-head_item .tab {
        background: #00A2BB;
        border-radius: 100px;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        color: #fff;
        padding: 8px;
        margin: 12px 0 8px!important;
        height: fit-content;
    }
    .feature-list {
        background: #fff;
    }
    .feature-list [data-name] {
        background: rgba(1, 141, 163, 0.19);
        padding: 12px 16px;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }
    .feature-list div:not([data-name]) {
        border-bottom: 1px solid #D5D9DD;
    }
    .feature-list p {
        font-size: 18px;
        line-height: 26px;
        padding: 11px 16px;
    }
    </style>
    <section class="feature-list-section">
        <h2 class="text-center">Complete Feature List</h2>
        <div class="d-flex sticky-head">
            <div class="sticky-head_item">
                <p class="">Starter</p>
                <p><span class="fw-semi">$99</span>/ mo</p>
                <p class="tab">Start Free Trial</p>
                <p class="fs-14 c-gray">billed annually</p> 
            </div>
            <div class="sticky-head_item">
                <p class="">Professional</p>
                <p class="c-gray">Let’s talk</p>
                <p class="tab">Book a Demo</p>
            </div>
            <div class="sticky-head_item">
                <p class="">Enterprise</p>
                <p class="c-gray">Let’s talk</p>
                <p class="tab">Contact Sales</p>
            </div>
        </div>
        <div class="feature-list"></div> 
    </section>`;

   
    let list = setInterval(() => {
        if (document.querySelector('.feature-list') == null) {
            if (document.querySelector('.accountPlans__wrapper')) {
                document.querySelector('.accountPlans__wrapper').insertAdjacentHTML('beforeend', listHtml)
            }
            if (document.querySelector('.elementor-element-52d0c7c0') && document.querySelector('.elementor-element-757ca018')) {
                document.querySelector('.elementor-element-52d0c7c0').insertAdjacentHTML('afterend', listHtml)
                document.querySelector('.feature-list-section').after(document.querySelector('.elementor-element-757ca018'))
            } 
        }

        if (document.querySelector('.feature-list') != null) {
            clearInterval(list)
            for (const key in dataListObj) {
                document.querySelector('.feature-list').insertAdjacentHTML('beforeend',`<div data-name="${key}">${key}</div>`)

                let details = dataListObj[key]

                for (let i = details.length - 1; i >= 0; i--) {
                    document.querySelector(`[data-name="${key}"]`).insertAdjacentHTML('afterend',`
                    <div class="d-flex">
                        <p class="mr-auto d-flex items-center">${details[i][0]} ${details[i][1] != '' ? ' <span class="tooltip">' + tooltipIcon + '<span class="tooltiptext">' + details[i][1] + '</span></span>' : ''}</p>
                        <p class="sticky-head_item">${details[i][2] == '' ? checkIcon : details[i][2] != 'empty' ? details[i][2] : ''}</p>
                        <p class="sticky-head_item">${details[i][3] == '' ? checkIcon : details[i][3] != 'empty' ? details[i][3] : ''}</p>
                        <p class="sticky-head_item">${details[i][4] == '' ? checkIcon : details[i][4] != 'empty' ? details[i][4] : ''}</p>
                    </div>`)
                    
                }
            }
        }
    })
}


let addItemHeader = setInterval(() => {
    if (window.location.href.includes('https://www.uplead.com/') && document.querySelector('.jet-desktop-menu-active .elementor-10072 .elementor-element.elementor-element-64a3398 .jet-menu>.jet-menu-item:last-child')) {
        clearInterval(addItemHeader)
        document.querySelector('.jet-desktop-menu-active .elementor-10072 .elementor-element.elementor-element-64a3398 .jet-menu>.jet-menu-item:last-child').insertAdjacentHTML('afterend',`<li id="jet-menu-item-10058" class="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-current-menu-item jet-has-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-10058"><a href="https://www.uplead.com/pricing-2/team-solution-page/" class="top-level-link menu-link" data-wpel-link="internal"><div class="jet-menu-item-wrapper"><div class="jet-menu-title">Team Solution</div></div></a></li>`);
    }
});

//mask phome
const mask = (inputName, mask, evt) => {
    try {
      var text = document.getElementById(inputName);
      var value = text.value;

      // If user pressed DEL or BACK SPACE, clean the value
      try {
        var e = (evt.which) ? evt.which : event.keyCode;
        if ( e == 46 || e == 8 ) {
          text.value = "";
          return;
        }
      } catch (e1) {}

      var literalPattern=/[0\*]/;
      var numberPattern=/[0-9]/;
      var newValue = "";

      for (var vId = 0, mId = 0 ; mId < mask.length ; ) {
        if (mId >= value.length)
          break;

        // Number expected but got a different value, store only the valid portion
        if (mask[mId] == '0' && value[vId].match(numberPattern) == null) {
          break;
        }

        // Found a literal
        while (mask[mId].match(literalPattern) == null) {
          if (value[vId] == mask[mId])
            break;

        newValue += mask[mId++];
      }

      newValue += value[vId++];
      mId++;
    }

    text.value = newValue;
  } catch(e) {}
}

//valid email
const isUrlValid = (userInput) => {
    let url = userInput.value;
    let res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null)
        return false;
    else
        return true;
}
//valid domen email
const isValidDomen = (userInput) => {
    let url = userInput.value;
    let res = url.match(/(http(s)?:\/\/.)?(www\.)?([\w.-]+)@(\[(\d{1,3}\.){3}|(?!outlook|gmail|yahoo|aol|ymail|titan|icloud|proton|zoho|yandex|gmx|hubspot|mail|tutanota|10minutemail)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,15}|\d{1,3})(\]?)$/);
    if(res == null)
        return false;
    else
        return true;
}

const selectChange = (select, selectCurrent) => {
    select.addEventListener('click', (e) => {
        toggleActive(e.currentTarget);
        
        if (select.querySelector(`.select-drop li.active`)) {
            select.querySelector(`.select-drop li.active`).classList.remove('active');
        }
        if (e.currentTarget.classList.contains('active')) {
            selectCurrent.innerHTML = 'Select number of prospects';
            selectCurrent.dataset.current = ''
        } else {
            if (selectCurrent.dataset.current == '') {
                selectCurrent.innerHTML = 'Number of prospects'
            }
        }
    })
    select.querySelectorAll('.select-drop li').forEach((item, index) => {
        item.addEventListener('click', () => {
            if (select.querySelector('.select-drop li.active')) {
                select.querySelector('.select-drop li.active').classList.remove('active');
            }
            item.classList.add('active');
            selectCurrent.dataset.current = index;
            selectCurrent.innerHTML = item.innerHTML;

        })
    })
}

//submit form
let submitForm = setInterval(() => {
    if (document.querySelector('.form_contact .btn-get')) {
        clearInterval(submitForm)

        //add calendly script
        document.body.appendChild(scriptCalendly)
        
        //flag-icons
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css'
        document.head.appendChild(link)

        //select

        let newBlock = document.querySelector('.book_demo'),
            inputPhone = document.querySelector('#phoneCode'),
            inputName = document.querySelector('#full-name'),
            inputEmail = document.querySelector('#input-email'),
            flagCurrent = document.querySelector('.selected-flag'),
            selectCurrent = document.querySelector('.select-current span');
  
        //mask phone
        inputPhone.addEventListener('keyup', (event) => {
            mask('phoneCode', event.currentTarget.dataset.mask, event);
        })

        //open dropdown flag
        document.querySelector('.flag-dropdown').addEventListener('click', (e) => toggleActive(e.currentTarget))

        selectChange(document.querySelector('.select'), selectCurrent) 

        document.addEventListener('click', (e) => {
            if (document.querySelector('.flag-dropdown.active') && !e.target.closest('.flag-dropdown')) {
                toggleActive(document.querySelector('.flag-dropdown'))
            }
        })

        //state events
        state.then(state => {
            for (let i = 0; i < state.length; i++) {
                document.querySelector('.country-list').insertAdjacentHTML('beforeend',`
                <li class="country d-flex items-center ${state[i].abbr == 'us' ? 'active' : ''}" data-country-code="${state[i].abbr}" data-mask="${state[i].mask}" role="option">
                    <span class="fi fi-${state[i].abbr}"></span>
                    <span class="country-name">${state[i].name}</span>
                    <span class="dial-code">${state[i].code}</span>
                </li>`)

                document.querySelectorAll('.country-list li')[i].addEventListener('click', (e) => {
                    toggleActive(document.querySelector('.country-list li.active'))
                    toggleActive(e.currentTarget);

                    flagCurrent.innerHTML = ` <span class="fi fi-${e.currentTarget.dataset.countryCode}"></span>`;
                    inputPhone.placeholder = e.currentTarget.querySelector('.dial-code').innerHTML;
                    inputPhone.dataset.mask = e.currentTarget.dataset.mask;
                    inputPhone.value = e.currentTarget.querySelector('.dial-code').innerHTML + ' ';
                })
            } 
        })

        document.querySelector('.btn-get').addEventListener('click', (e) => {
            if (inputName.value == '' || inputName.value.length < 2) {
                inputName.parentElement.classList.add('error')
            }  else {
                inputName.parentElement.classList.remove('error')
            }
            if (isUrlValid(inputEmail) != true) {
                inputEmail.parentElement.classList.add('error')
                inputEmail.nextElementSibling.innerHTML = 'Not a valid e-mail address'
            } else {
                if (isValidDomen(inputEmail) != true) {
                    inputEmail.parentElement.classList.add('error')
                    inputEmail.nextElementSibling.innerHTML = 'Please enter a business email'
                } else {
                    inputEmail.parentElement.classList.remove('error')
                }
            }
          
            if (document.querySelector('.error') == null) {

                document.querySelector('.progressbar_item.active').classList.add('done')
                document.querySelector('.progressbar_item.done').classList.remove('active')
                document.querySelector('.progressbar_item:not(.done)').classList.add('active')
                newBlock.querySelector('.formBook').style.display = 'none';
                newBlock.querySelector('.block_call').style = '';
                document.querySelector('.block_calendly').style = `position:initial; opacity:1;pointer-events:auto;height:510px;margin-top: -30px;`;
                document.querySelector('.form_contact h2').innerHTML = 'UpLead Product Demo';

                window.Calendly.initInlineWidget({
                    url: `https://calendly.com/upleadhq/phone-call/?name=${inputName.value}&email=${inputEmail.value}&hide_event_type_details=1&hide_gdpr_banner=1`,
                    parentElement: document.querySelector(".block_calendly")
                })
            } 
        })
    }
});


let tabBookDemo = setInterval(() => {
    if (window.location.href.includes('https://app.uplead.com/') && document.querySelectorAll('.sidebar__menu-item')[0].classList.contains('sidebar__menu-item--open') && document.querySelector('.home__wrapper') && document.querySelector('.home_tab') == null) {
        document.querySelector('.home__wrapper').insertAdjacentHTML('beforebegin', `
        ${styleBase}
        <style>
            .home_tab {
                padding: 11px 40px 11px 32px;
                background: rgba(117, 201, 215, 0.10);
                color: #091D30;
            }
            .home_tab_left, .home_tab_right {
                width: 100%;
            }
            .home_tab_left svg {
                margin-right: 18px;
            }
            .home_tab_right svg {
                margin: 0 21px;
            }
            .home_tab_left p, .home_tab_right p {
                color: #091D30;
            }
            .home_tab_right p {
                font-size: 16px;
            }
        </style>
        <div class="flex-between-center home_tab">
            <div class="home_tab_left d-flex items-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 10.5V15.5" stroke="#00A2BB" stroke-width="1.63616" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 6.51087L11.0108 6.49902" stroke="#00A2BB" stroke-width="1.63616" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 21C16.523 21 21 16.523 21 11C21 5.477 16.523 1 11 1C5.477 1 1 5.477 1 11C1 16.523 5.477 21 11 21Z" stroke="#00A2BB" stroke-width="1.63616" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p class="fw-semi">Supercharge Prospect Finding with Advanced Filters & Intent Data</p>
            </div>
            <div class="home_tab_right d-flex items-center justify-end">
                <p>Talk to a sales expert </p>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7.04895L7 14L5.75313 12.7836L10.6531 7.91783L-2.6586e-07 7.91783L-3.4182e-07 6.18007L10.6531 6.18007L5.75312 1.31434L7 0.097902L14 7.04895Z" fill="#00A2BB"/>
                </svg>
                <a href="#" class="btn_submit btn_book">Book a Demo</a>
            </div>
        <div>`)
    }   
});