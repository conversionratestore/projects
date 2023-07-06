let dir = 'https://conversionratestore.github.io/projects/uplead';
// toggle active
let toggleActive = (selector) => selector.classList.toggle('active')

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
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    font-size: 22px;
}
h5 {
    font-size: 20px;
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
    border-radius: 50px;
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    width: 100%;
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
    margin
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
    padding-left: 39px;
    margin-left: -26px;
}
.progressbar_item {
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
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
    background: #00A2BB;
    border-radius: 60px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    width: 100%;
    padding: 0;
}
.tooltip {
    height: fit-content;
    display: flex;
    border: none;
    margin-left: 4px;
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
.w-45 {
    width: 45%;
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
.mx-auto {
    display: block;
    margin-left: auto;
    margin-right: auto;
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
            1. Contact info
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
            2. Calendar
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
        <button type="button" class="btn-get">Get a Free Demo</button>
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

if (window.location.href == '')  { // new team solution page
    let style = `
    ${styleBase}
    <style>
    /* offer-section */
    .offer-section {
        padding: 67px 6px 43px 0;
        margin: 0 auto;
        max-width: 1290px;
    }
    .offer-section h1 {
        margin: 0 0 15px -9px;
    }
    .offer-section .left {
        max-width: 710px;
        width: calc(100% - 574px);
        padding: 98px 40px 0 71px;
    }
    .offer-section .left img {
        margin: 34px auto 0;
    }
    .tab {
        background: #E4F9FD;
        border-radius: 4px;
        padding: 5px 16px;
        font-weight: 500;
        font-size: 17px;
        line-height: 28px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #00A2BB;
        width: fit-content;
        margin-bottom: 34px;
    }
    /* customised-section */
    .customised-section {
        max-width: 1040px;
        padding: 0 20px;
        margin: 0 auto 75px;
    }

    .customised-section h2 {
        font-size: 36px;
        margin-bottom: 67px;
    }
    .customised-section p {
        font-family: 'Nunito Sans', sans-serif;
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 27px;
        margin-top: 30px;
    }
    /* sales-oriented-section */
    .sales-oriented-section {
        max-width: 1040px;
        padding: 75px 20px;
        margin: 0 auto;
    }
    /* credit-section */
    .credit-section {
        margin: 0 auto;
        padding: 75px 20px;
        max-width: 837px;
    }
    .credit-section h4 {
        margin-bottom: 18px;
    }
    .credit-section div p {
        font-size: 15px;
        line-height: 26px;
        color: #7A7A7A;
        margin-bottom: 80px;
    }
    .credit-section svg {
        flex-shrink: 0;
        margin-right: 20px;
    }
    .credit-section p.rating {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #343434;
    }
    .credit-section p.text-footer {
        font-size: 16px;
        line-height: 27px;
        color: #69727A;
    }
    .credit-section button {
        max-width: 511px;
        margin: 12px auto 11px;
        display: block;
    }
    /*data-section*/
    .data-section {
        padding: 15px 20px 40px;
        max-width: 1220px;
        margin: 0 auto;
    }
    .data-section .w-25 {
        padding: 40px 12px 0 12px;
    }
    .data-section .w-25 > div {
        padding: 50px 50px 60px;
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
    .data-section > p {
        font-weight: 500;
        font-size: 26px;
        line-height: 27px;
        color: #69727A;
        max-width: 550px;
        margin: 65px auto;
    }
    /* review-section */
    .review-section {
        padding: 50px 20px;
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
        <div class="flex-wrap d-flex justify-between">
            <div class="left">
                <div class="tab">Team solution</div>
                <h1>Achieve 10X ROI by Dominating  Complex Sales Cycles</h1>
                <p>Uplead's lead intelligence solution speeds up sales efforts by providing precise verified direct dials, phone numbers, and emails, requiring less manual work</p>
                <img src="../img/medals.svg" alt="medals image">
            </div>
            ${htmlForm}
        </div>
    </section>

    <section class="customised-section">
        <h2 class="text-center">Customised Sales Solution for Your Entire Sales Team</h2>
        <div class="d-flex justify-between">
            <div class="w-45">
                <h5>Unlimited Prospects & User Seats</h5>
                <p>UpLead empowers sales leaders with unlimited prospects and user seats, which help optimise team performance and streamline credit usage</p>
            </div>
            <div class="w-45">
                <h5>Advanced Prospect Insight</h5>
                <p>Uncover the right people and valuable information about your prospects by utilizing UpLead's direct contact data. Leverage our Intent Data and Advanced filters to identify leads that align with your qualification criteria</p>
            </div>
        </div>
    </section>

    <section class="sales-oriented-section">
        <h2 class="text-center">Sales-oriented companies grow with UpLead</h2>
    </section>

    <section class="credit-section">
        <div class="d-flex">
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
        <p class="flex-center rating">G2
            <img src="../img/stars.png" alt="stars icons">
            4.7/5 (618 reviews) 
        </p>
        <button type="button" class="btn_submit">Contact Sales</button>
        <p class="text-footer text-center">Discover how Uplead connects you with ideal prospects. </p>
    </section>

    <section class="data-section text-center">
        <h2 class="">Get Access To The Highest Quality Data</h2>
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
        <p>UpLead is the preferred lead generation tool 
            for companies selling across the globe</p>
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
        if (document.querySelector('.site-content')) {
            clearInterval(initNewPage)

            //add fonts
            document.head.insertAdjacentHTML('beforeend',`
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Nunito+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
            `)
            //add style/html
            document.body.insertAdjacentHTML('afterbegin', style)
            document.querySelector('.site-content').insertAdjacentHTML('afterbegin', html)
            
        }
    })
} else { 
    let plansObj = [
        {
            'top': 'For Individuals',
            'title': 'Starter',
            'titleSpan': 'Ideal for individuals and entrepreneurs looking to connect with niche prospects',
            'nameBtn': 'Try For Free',
            'info': `
                <p>7 days with 5</p>
                <p class="flex-center"><span class="c-blue-dark">Then $99/mo</span>, with <span class="c-blue-dark fw-semi">170 Credits</span> <span class="tooltip">${tooltipIcon}</span></p>
                <p>Billed annually</p>
            `,
            'includes': [
                'Free includes:','Single User Account','135M Verified Emails, Phone Numbers and Direct Dials',
                'CRM Integration',
                'Data Enhancement',
                'Competitor Intelligence'
            ]
        },
        {
            'top': 'For Small Teams with 2-5 Users',
            'title': 'Professional',
            'titleSpan': 'For small teams with simple targets & sales processes',
            'nameBtn': 'Book a Demo',
            'info': `
                <p>Team account up to <span class="c-blue-dark fw-semi">5 seats</span></p>
                <p class="flex-center"><span class="c-blue-dark fw-semi">Custom</span> number of Credits <span class="tooltip">${tooltipIcon}</span></p>
            `,
            'includes': [
                'Everything in Starter and:','Up to 5 Users Seats','Intent Data','Advanced Search Filters',
                'Email Pattern Intel','Suppression List Uploads'
            ]
        },
        {
            'top': 'For Big Teams with 5+ users',
            'title': 'Enterprise',
            'titleSpan': 'Designed for sales-driven organisations that require unlimited customisation',
            'nameBtn': 'Contact Sales',
            'info': `
                <p><span class="c-blue-dark fw-semi">Custom</span> users seats</p>
                <p><span class="c-blue-dark fw-semi">Custom</span> team’s accounts</p>
                <p class="flex-center"><span class="c-blue-dark fw-semi">Custom</span> number of Credits <span class="tooltip">${tooltipIcon}</span></p>
            `,
            'includes': [
                'Everything in Professional and:','Intent Data','All Search Filters','Full API Access',
                'Prospector pro API','Competitor Intelligence'
            ]
        }
    ];
    
    let itemPlans = (topText, title, spanText, btnName, info, includes, selected, active) => {
        let list = '';
        for (let i = 0; i < includes.length; i++) {
    
            list += `<li class="d-flex items-center">
                        ${i != 0 ? 
                            `<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8158 0.601562L4.01735 7.40004L1.18466 4.56734" stroke="${title == 'Professional'? '#fff': '#00A2BB'}" stroke-miterlimit="10"/>
                            </svg>` : ''
                        }
                        ${includes[i]}
                        ${i != 0 ? `
                            <span class="tooltip">${tooltipIcon}
                            <span class="tooltiptext">text</span></span>` : ''
                        }
                    </li>`
            
        }
        return `
            <div class="item-plan ${selected} ${active}">
                <div class="item-plan_top text-center">${topText}</div>
                <div class="item-plan_container">
                    <div class="item-plan_head">
                        <h3 class="item-plan_title text-center">${title}</h3>
                        <p class="item-plan_span text-center">${spanText}</p>
                    </div>
                    <a href="#" class="btn-plan">${btnName}</a>
                    <div class="item-plan_info text-center">${info}</div>
                    <ul class="item-plan_includes"> ${list}</ul>
                    <a href="#" class="btn-plan">${btnName}</a>
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
    .book_demo .left ul {
        color: #69727A;
        list-style-type: none;
        font-size: 18px;
        line-height: 26px;
        margin-left: 0;
    }
    .book_demo .left ul li {
        margin-bottom: 16px;
        padding-left: 32px;
        position: relative;
    }
    .book_demo .left ul li:before {
        content: '';
        position: absolute;
        left: 8px;
        top: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #00A2BB;
    }
    .book_demo .left img {
        max-width: 400px;
        margin-top: 22px;
        display: block;
    }

    </style>
    <div class="book_demo active">
        <div class="container d-flex">
            <div class="left">
                <h2>Supercharge Your Team's Sales <span class="text-nowrap">Pipeline with</span> UpLead</h2>
                <p>Book a demo and experience UpLead's impact on your team</p>
                <ul>
                    <li><b>Team Account:</b> Accommodate up to 5 users and scale prospects to meet your team's objectives</li>
                    <li><b>Advanced Search & Intent Data:</b> Filter prospects precisely,  personalise and time your sales outreach effectively</li>
                    <li><b>Enriched Contact Data:</b> Enhance prospect insights for meaningful and efficient connections</li>
                    <li><b>Seamless Integrations:</b> Seamlessly integrate UpLead with your CRM for enhanced productivity</li>
                </ul>
                <p>Schedule a demo today and let UpLead transform your sales process to meet your unique goals.</p>
                <img src="${dir}/img/medals-2.svg" alt="medal image">
            </div>
            ${htmlForm}
        </div>
    </div>`
    
  
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
                        .elementor-element-30b36ac5, .elementor-element-7b3d7b13, .elementor-element-5e5a4a6, .elementor-element-437cc49, .elementor-element-b1aa2aa, .elementor-element-430cf234  {
                            display: none;
                        }
                        /* pricing-section */
                        .pricing-section {
                            max-width: 1030px;
                            margin: 40px auto 100px;
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
                document.body.insertAdjacentHTML('beforeend', bookDemoHtml)
            }

            document.body.insertAdjacentHTML('afterbegin',`
            
            <style>
            .accountPlans__monthlyPlans-link {
                display: none;
            }
            .plans {
                max-width: 1085px;
                margin: 25px auto;
            }
            .item-plan {
                margin: 25px 36px 25px 0;
                width: calc(33.33% - 24px);
                border-radius: 16px;
                border: 1px solid #E1EBEE;
                background: #FFF;
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
            for (let i = 0; i < plansObj.length; i++) {
                let active = ''
                let selected = '';
                if (window.location.href == 'https://www.uplead.com/pricing/') {
                    active = i == 1 ? 'active' : '';
                } else {
                    active = i == 1  ? 'active' : ''; 
                    selected = i == 0  ? 'selected' : ''; 
                }
               
                    
                document.querySelector('.plans').insertAdjacentHTML('beforeend', 
                    itemPlans(plansObj[i].top, plansObj[i].title, plansObj[i].titleSpan, plansObj[i].nameBtn, plansObj[i].info, plansObj[i].includes, selected, active))
                
            
                document.querySelectorAll('.btn-show-list')[i].addEventListener('click', (e) => {
                    e.preventDefault()
                    document.querySelector('html').scrollTop = document.querySelector(`.feature-list-section`).offsetTop + window.innerHeight;
                })
            }
        }
    })
    
    //Complete Feature List section
    let dataListObj = {
        'Plan Details': [
            ['Amount of Credits','test tooltip','170 credits/ month','Custom','Custom'],
            ['Amount of Users Seats','','1 user','Up to 5 users','Custom'],
            ['Additional Credits','','$0.6/ credit','Custom','Custom']
        ],
        'Business data': [
            ['Verified Emails','','','',''],
            ['Verified Phone Numbers','','','',''],
            ['Mobile Direct Dials','','','','']
        ],
        'Contacts Management': [
            ['Data Enhancement','','','',''],
            ['Technographics','','','',''],
            ['Data Enrichment','','empty','',''],
            ['Intent Data','','empty','','']
        ],
        'Competitor Analysis': [
            ['Competitor Intelligence','','','',''],
        ],
        'Prospecting Platform': [
            ['Advanced Search Filters','','empty','',''],
            ['Suppression List Uploads','','empty','',''],
            ['Email Pattern Intel','','empty','',''],
            ['All Search Filters','','empty','empty','']
        ],
        'CRM Integrations ': [
            ['Salesforce','','','',''],
            ['HubSpot','','','',''],
            ['Pipedrive','','','','']
        ],
        'UpLead Extension': [
            ['Chrome','','','','']
        ],
        'News': [
            ['Company News','','','','']
        ],
        'API': [
            ['Enrichment API','','empty','',''],
            ['Prospector pro API','','empty','empty',''],
            ['Full API Access','','empty','empty','']
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
    }
    .sticky-head_item:first-child {
        border: none;
    }
    .feature-list .sticky-head_item:last-child {
        border-right: 1px solid #CFE9EE;
    }
    .sticky-head {
        border: 1px solid #CFE9EE;
        border-radius: 16px 16px 0 0;
        margin-left: auto;
        width: fit-content;
        background: #fff;
        z-index: 2;
        position: sticky;
        top: 0;
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
    .feature-list [data-name] {
        background: rgba(1, 141, 163, 0.19);
        padding: 12px 10px;
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
        padding: 11px 0;
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
        let scriptCalendly = document.createElement('script');
        scriptCalendly.type = 'text/javascript';
        scriptCalendly.async = true;
        scriptCalendly.src = 'https://assets.calendly.com/assets/external/widget.js';
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
                    document.querySelector('.country-list li.active').classList.remove('active');
                    e.currentTarget.classList.add('active');

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
        document.querySelector('.home__wrapper').insertAdjacentHTML('afterbegin', `
        <style>
            ${styleBase}
            .home_tab {
                background: #E9F5F3;
                border-radius: 20px;
                padding: 20px;
            }
        </style>
        <div class="mx-auto d-flex items-center home_tab">
            <p class="text-center">Supercharge Prospect Finding with 
                <b> Advanced Filters & Intent Data</b>
            </p>
            <div>
                <p>Talk to a sales expert</p>
                <button type="button" class="btn_submit btn_book">Book a Demo</button>
            </div>
        <div>`)
    }   
});