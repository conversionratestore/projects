//login
// https://www.doyogawithme.com/yogi/login?destination=/checkout/23348/order_information
// https://www.doyogawithme.com/yogi/login?destination=/yogi/login
// https://www.doyogawithme.com/checkout/23406/login
// https://www.doyogawithme.com/yogi/login?destination=/

//register
//https://www.doyogawithme.com/yogi/register

//checkout
//https://www.doyogawithme.com/checkout/23348/order_information

let dir = "https://conversionratestore.github.io/projects/doyogawithme/img/";

let style = `
<style>
.checkout-pane-payment-information #edit-payment-information-add-payment-method {
    margin-bottom: 0;
}
.c-tabs, input[type="checkbox"], input[type="radio"], .form-item-payment-information-add-payment-method-billing-information-address-0-address-organization, .form-item-payment-information-billing-information-address-0-address-organization {
    display: none;
}
.block-single-file-component-blockuser-login-register-tabs-block ~ * h1 {
    position: initial!important;
}
.o-page--simpleCard .o-page__main {
    background-color: #F6F6F6;
}
.o-page__mainContentWrapper * {
    box-sizing: border-box;
}
.o-page__mainContentWrapper {
    display: block;
}
.o-page--simpleCard .o-page__mainContent {
    min-width: auto;
    width: 494px;
    margin: 0 auto;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
}
.topbar {
    max-width: 1264px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto 30px;
}
.btn-back {
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #027DB8;
    position: absolute;
    left: 20px;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
}
.btn-back svg {
    margin-right: 12px;
}
.progressbar {
    margin-bottom: 30px;
    font-family: 'Manrope', sans-serif;
}
.progressbar.hidden {
    display: none!important;
}
.progressbar .step {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #027DB8;
    margin: 0 8px;
    padding: 7px 0;
}
.progressbar .step:not(.active) {
    color: #A5A5A5;
}
.progressbar .step.checked:before  {
    background: #027DB8;
}
.progressbar .step.active > div:before {
    background: #027DB8;
}
.progressbar .step.checked > div:before {
    content: '';
    background: #027DB8 url(${dir}checked.svg) no-repeat center / 14px 10px;
}
.progressbar .step > div:before {
    content: attr(data-step);
    background: #E0E0E0;
    border-radius: 8px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
    margin-right: 6px;
    display: block;
}

.user-login-form, .user-register-form, .user-pass {
    padding: 0 6px 0;
}
form h1 {
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    text-align: center;
    color: #272727;
    margin-bottom: 22px;
}
form label {
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #555555;
    margin-bottom: 4px;
}
.social-auth__networks {
    padding: 0;
}
.social-auth.auth-link {
    width: 100%;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E0E0E0;
    border-radius: 50px;
    padding: 13px;
    color: #555555;
}
.social-auth.auth-link span {
    margin-left: 15px;
}
.social-auth__container {
    margin: 24px 0;
    padding: 0;
}
.social-auth__divider {
    margin: 0;
}
.social-auth__divider__text {
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #555555;
    padding: 0 24.5px;
}
[data-drupal-selector="edit-login-returning-customer"] .social-auth__divider__text {
    padding: 0 12px; 
}
form input:not([data-drupal-selector="edit-search-api-fulltext"]), .select2-container--default .select2-selection--single, input:not([type="submit"]):not([type=checkbox]):not([type=radio]):not([type=button]):not([data-drupal-selector="edit-search-api-fulltext"]) {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    border: 1px solid #E0E0E0;
    border-radius: 8px!important;
    padding: 11px 16px!important;
    outline: none!important;
    width: 100%;
    box-sizing: border-box!important;
    max-width: none;
    height: auto!important;
}
.select2-container--default .select2-selection--single {
    background: none;
}
form input:not([data-drupal-selector="edit-search-api-fulltext"])::-webkit-input-placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #A5A5A5;
}

form input:not([data-drupal-selector="edit-search-api-fulltext"]):-moz-placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #A5A5A5;
 }
form input:not([data-drupal-selector="edit-search-api-fulltext"])::-moz-placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #A5A5A5;
}
form input:not([data-drupal-selector="edit-search-api-fulltext"]):-ms-input-placeholder {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #A5A5A5;
}
.select2, .select2-container[data-select2-id] {
    width: 100%!important;
}
.select2-selection {
    background: none;
}
.select2-selection label {
    display: none;
}
.select2-container--default .select2-selection--single .select2-selection__rendered {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding-left: 0;
    margin: 0;
}
.select2-container--default .select2-selection--single .select2-selection__rendered[title="- Select -"] {
    color: #A5A5A5;
}
.select2-container--default .select2-selection--single .select2-selection__arrow {
    right: 16px;
    height: 100%;
    display: block;
    margin: 0;
}
.select2-container--default .select2-selection--single .select2-selection__arrow b {
    border: none;
    height: 100%;
    width: 12px;
    background: url(${dir}arrow-down.svg) no-repeat center / contain;
    left: 0;
    top: 0;
    margin: 0;
}
.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    transform: scaleY(-1);
}
.shwpd {
    margin-top: 48px;
}
.remember-me {
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    color: #555555;
}
.check {
    border: 1px solid #A5A5A5;
    border-radius: 4px;
    display: block;
    margin-right: 8px;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}
.check + span {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #555555;
}
input[type="checkbox"]:checked ~ .check {
    border-color: #027DB8;
    background: #027DB8 url(${dir}checked.svg) no-repeat center / 12px 10px;
}
.remember-me + a {
    font-family: 'Manrope', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #555555;
}
.form-actions {
    margin: 0;
    display: block;
    padding: 24px 0 42px;
}
.form-actions .button, #edit-login-returning-customer-submit, .btn-reg, .btn_start_membership {
    background: #027DB8;
    border-radius: 30px!important;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: capitalize;
    color: #FFFFFF;
    width: 100%;
    outline: none;
    justify-content: center;
    display: flex;
    align-items: center;
    min-height: 50px;
}
.samsara .user-register-form .form-actions {
    margin: 0;
}
.samsara .form-actions {
    padding-bottom: 15px;
}
.samsara .user-register-form .form-actions {
    padding: 0 0 15px 0;
}
.form-actions .button[value="Create new account"], #edit-actions .form-submit {
    display: none;
}
.profile-student-form #edit-actions .form-submit {
    display: block;
}
.btn_start_membership.disabled, .btn_start_membership[disabled]{
    background-color: #A5A5A5!important;
    border-color: #A5A5A5!important;
    cursor: no-drop!important;
}
.btn-reg {
    line-height: 48px!important;
    outline: none;
    position: relative;
    margin-left: 0!important;
    margin-right: 0!important;
}
.btn-reg.loading:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    background: url(https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif) no-repeat center / contain;
    width: 20px;
    height: 20px;
}
#edit-login-register-register {
    display: none;
}
#edit-login-returning-customer-submit, .btn-reg {
    margin-top: 24px;
}
.singup {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #555555;
    margin: 24px 0 0 0!important;
}
.singup a {
    text-decoration-line: underline;
    color: #027DB8;
}
.form-actions .form-item {
    display: none!important;
}

.header-logo {
    border-bottom: 1px solid #E0E0E0;
    padding: 8px 20px;
    width: 100%;
    height: fit-content;
    box-sizing: border-box;
}
.header-logo img {
    height: 52px;
}
.check-accept {
    margin-bottom: 16px;
}

/* flex */
.flex {
    display: flex;
}
.items-center {
    align-items: center;
}
.justify-center {
    justify-content: center;
}
.justify-between {
    justify-content: space-between;
}
.justify-end {
    justify-content: flex-end;
}
.text-center {
    text-align: center;
}
.c-red {
    color: #FF0000;
}

@media only screen and (min-width: 768px) {
    .justify-md-center {
        justify-content: center;
    }
    .progressbar .step:before, .progressbar .step.active:after {
        content: '';
        background: #E0E0E0;
        border-radius: 40px;
        height: 2px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .progressbar .step.active:after {
        background: #027DB8;
        width: 50%;
    }
}
@media only screen and (max-width: 767px) {
    .progressbar, .topbar {
        margin-bottom: 16px;
    }
    .progressbar .step.checked, .progressbar .step:not(.active) {
        display: none;
    }
    .progressbar .step {
        padding: 0;
    }
    .progressbar .step.active > div:before {
        background-color: transparent;
        color: #027DB8;
        margin: 0;
    }
    .progressbar .step.active > div {
        color: #555555;
        width: 10px;
    }
    .header-logo img {
        height: 32px;
    }
    .header-logo {
        padding: 6px 20px 2px;
    }
    .btn-back {
        font-size: 14px;
        line-height: 24px;
    }
    .btn-back svg {
        width: 8px;
        margin-right: 8px;
    }
    .o-page--simpleCard .o-page__mainContent {
        width: calc(100% - 40px);
        margin: 0 auto;
    }
    .path-yogi .block-system-main-block {
        padding: 0;
    }
    .user-login-form, .user-register-form, .user-pass {
        padding: 2px;
    }
    form h1, .sfc-tabs__tabcontent.tabs__content h2 {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 20px;
    }
    .form-actions {
        padding: 20px 0 0 0;
    }
    .social-auth__container {
        margin: 20px 0;
    }
    #block-userloginregistertabs--2, #block-userloginregistertabs {
        margin: 0!important;
    }
}
@media only screen and (max-width: 360px) {
    .o-page--simpleCard .o-page__mainContent {
        width: calc(100% - 20px);
    }
}
</style>`;

let headHTML = `
<div class="topbar">
    <a href="/become-a-subscriber" class="btn-back flex items-center" onclick="pushDataLayer('exp_ch_pl_page_back_'+getLoc(event)[0], 'Back', 'Button', getLoc(event)[1]);">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.255198 7.39519C-0.0850662 7.72509 -0.0850662 8.27491 0.255198 8.60481L7.58979 15.7526C7.96786 16.0825 8.53497 16.0825 8.87524 15.7526L9.7448 14.9095C10.0851 14.5796 10.0851 14.0298 9.7448 13.6632L3.9225 7.98167L9.7448 2.33677C10.0851 1.97022 10.0851 1.42039 9.7448 1.09049L8.87524 0.247423C8.53497 -0.0824742 7.96786 -0.0824742 7.58979 0.247423L0.255198 7.39519Z" fill="#027DB8"/>
        </svg>
        <span>Back</span>
    </a>
    <div class="progressbar flex justify-md-center justify-end ${window.location.href.includes("?destination=/become-a-subscriber") || window.location.href.includes("yogi/login") ? "hidden" : ""}">
        <div class="step checked active"><div class="flex items-center" data-step="">Choose a plan</div></div>
        <div class="step active"><div class="flex items-center" data-step="2">Create your account</div></div>
        <div class="step"><div class="flex items-center" data-step="3">Payment</div></div>
    </div>
</div>`;

function getLoc(event) {
  let target = event.target;
  let loc = "";
  let name = "";
  let href = window.location.href;

  if (href.includes("yogi/register") || (href.includes("/checkout") && href.includes("/login"))) {
    if (target.closest(".o-page__main").querySelector(".sfc-tabs__tabcontent:not([aria-hidden=true]) h2") != null && target.closest(".o-page__main").querySelector(".sfc-tabs__tabcontent:not([aria-hidden=true]) h2").innerHTML.includes("Log In")) {
      loc = "Log in form";
      name = "login";
    } else {
      loc = "Create your account";
      name = "create";
    }
  } else if (href.includes("yogi/login")) {
    loc = "Log in form";
    name = "login";
  } else if (href.includes("yogi/intake-survey")) {
    loc = "Lets find classes that work best for you";
    name = "lets";
  } else if (href.includes("/checkout") && !href.includes("/login")) {
    loc = "Card information";
    name = "card";
  }
  return [name, loc];
}

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

function lsRememberMe(checkbox, email) {
  const rmCheck = document.querySelector(checkbox),
    emailInput = document.querySelector(email);

  if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
  } else {
    rmCheck.removeAttribute("checked");
  }

  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}
let rememberMeHTML = `
<div class="flex items-center justify-between">
    <label class="remember-me flex items-center">
        <input type="checkbox" style="display: none;">
        <span class="check"></span>
        <span>Remember me</span>
    </label>
</div>`;

let logInGoogle = (name) => `
<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.06 11.2485C22.06 10.4685 21.99 9.71854 21.86 8.99854H11.5V13.2535H17.42C17.165 14.6285 16.39 15.7935 15.225 16.5735V19.3335H18.78C20.86 17.4185 22.06 14.5985 22.06 11.2485Z" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4994 21.9998C14.4694 21.9998 16.9594 21.0148 18.7794 19.3348L15.2244 16.5748C14.2394 17.2348 12.9794 17.6248 11.4994 17.6248C8.63443 17.6248 6.20943 15.6898 5.34443 13.0898H1.66943V15.9398C3.47943 19.5348 7.19943 21.9998 11.4994 21.9998Z" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.345 13.0901C5.125 12.4301 5 11.7251 5 11.0001C5 10.2751 5.125 9.57006 5.345 8.91006V6.06006H1.67C0.925 7.54506 0.5 9.22506 0.5 11.0001C0.5 12.7751 0.925 14.4551 1.67 15.9401L5.345 13.0901Z" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4994 4.37451C13.1144 4.37451 14.5644 4.92951 15.7044 6.01951L18.8594 2.86451C16.9544 1.08951 14.4644 -0.000488281 11.4994 -0.000488281C7.19943 -0.000488281 3.47943 2.46451 1.66943 6.05951L5.34443 8.90951C6.20943 6.30951 8.63443 4.37451 11.4994 4.37451Z" fill="#EA4335"/>
</svg>
<span>${name} with Google</span>`;

let subscribeHTML = `
<label class="check-accept flex ">
    <input type="checkbox" style="display: none;" >
    <span class="check"></span>
    <span>Subscribe to our newsletter highlighting new classes, blog articles, programs and challenges. No spam - we promise!</span>
</label>`;

let error = false;

let clickApplyCoupon = false;

function init() {
  let init = setInterval(() => {
    if (document.querySelector(".o-page--simpleCard .o-page__mainContentWrapper") != null && document.querySelector("form") != null) {
      clearInterval(init);

      let loc = "";
      document.body.insertAdjacentHTML("afterbegin", style); //add style
      document.querySelector(".o-page--simpleCard .o-page__mainContentWrapper").insertAdjacentHTML("afterbegin", headHTML); //add topbar

      if (window.matchMedia("(max-width: 767px)").matches) {
        document.querySelector(".progressbar .step.active:not(.checked) > div").innerHTML = "/3";
      }

      if ((window.location.href.includes("/yogi/login") || window.location.href.includes("/yogi/register")) && document.querySelector("form h1")) {
        document.querySelector("form h1").after(document.querySelector(".social-auth__container"));
        document.querySelector("form h1").after(document.querySelector(".social-auth__networks"));

        if (document.querySelector(".messages.messages--status") && document.querySelector(".messages.messages--status").innerHTML.includes("if you are having trouble logging in to your account.")) {
          document.querySelector(".messages.messages--status").remove();
        }
      }
      if (window.location.href.includes("/yogi/login") && document.querySelector(".social-auth__networks a")) {
        loc = "Log in form";

        document.querySelector(".social-auth__networks a").innerHTML = logInGoogle("Login");
        document.querySelector('label[for="edit-name"]').innerHTML = "Email address";
        document.querySelector("#edit-name").placeholder = "Email";
        document.querySelector("#edit-pass").placeholder = "Password";
        document.querySelector('form [href="/yogi/password"]').insertAdjacentHTML("beforebegin", rememberMeHTML);

        if (localStorage.username != null && localStorage.username != "") {
          document.querySelector("#edit-name").value = localStorage.username;
        }
        document.querySelector(".remember-me").after(document.querySelector('form [href="/yogi/password"]'));
        document.querySelector('form [href="/yogi/password"]').innerHTML = "Forgot Password?";

        document.querySelector("#edit-actions .form-submit").style = `
                    display: block;
                    width: 100%;    
                    text-align: center;
                    justify-content: center;
                    display: flex;
                    font-weight: 700;
                `;

        document.querySelector("#edit-actions .form-submit").insertAdjacentHTML("afterend", `<p class="text-center singup">Don’t have an account? <a href="/yogi/register">Sign Up</a></p>`);
        if (window.innerWidth <= 768) {
          if (document.querySelector(".singup")) {
            document.querySelector(".singup").before(document.querySelector(".social-auth__container"));
          }
          if (document.querySelector(".social-auth__container + .singup")) {
            document.querySelector(".social-auth__container").after(document.querySelector(".social-auth__networks"));
          }
        }

        document.querySelector("#edit-actions .form-submit").addEventListener("click", () => {
          pushDataLayer("exp_ch_pl_page_login_b", "Log in button", "Button", loc);
          lsRememberMe(".remember-me input", "#edit-name");
        });

        document.querySelector(".singup a").href = document.querySelector(".singup a").href + window.location.search;

        pushDataLayer("exp_ch_pl_page_login", loc, "Visibility", loc);

        document.querySelector(".social-auth.auth-link").addEventListener("click", () => {
          pushDataLayer("exp_ch_pl_page_login_g", "Login with google button", "Button", loc);
        });
        document.querySelector(".remember-me + a").addEventListener("click", (e) => {
          pushDataLayer("exp_ch_pl_page_forg", "Forgot password", "Link", loc);
        });
        document.querySelector(".singup a").addEventListener("click", (e) => {
          pushDataLayer("exp_ch_pl_page_login_link", "Sign up", "Link", loc);
        });
      }
      //all register pages
      if (window.location.href.includes("/yogi/register") || window.location.href.includes("yogi/intake-survey") || (window.location.href.includes("/checkout") && window.location.href.includes("/login"))) {
        document.body.insertAdjacentHTML(
          "afterbegin",
          `
                <style>
                    #main-content {
                        min-height: auto!important;
                    }
                    .password-suggestions, .user-register-form .ac-newsletter-reg-suffix, .user-register-form .form-type-checkbox, header.o-page__header, .js-form-item-pass-pass2, .user-register-form .password-strength__title, .user-register-form .password-strength {
                        display: none!important;
                    }
                    @media only screen and (max-width: 767px) {
                        .o-page--simpleCard .o-page__mainContentWrapper {
                            margin-top: 16px;
                        }
                    }
                </style>`
        );
        document.querySelector(".o-page__mainContentWrapper").insertAdjacentHTML(
          "beforebegin",
          `
                <div class="header-logo text-center"> <a href="/" class="logo"><img src="/themes/custom/lotus/logo.png" alt="image"></a></div>`
        );
      }

      if (window.location.href.includes("/checkout") && window.location.href.includes("/login") && document.querySelectorAll(".sfc-tabs__tablistItem > a").length > 1) {
        document.body.insertAdjacentHTML(
          "afterbegin",
          `
                <style>
                    .sfc-tabs__tablist, .password-suggestions, #edit-login-register-password-pass2, #edit-login-register-password-pass2, .form-item-login-register-legal-legal-accept, .form-item-login-register-legal-extras-1, .ac-newsletter-reg-suffix, #edit-login-register-field-ac-newsletter-reg-wrapper, #edit-login-register-password .password-strength, .form-item-login-register-password-pass2, .messages--status, .c-jsTabs__tabList {
                        display: none!important;
                    }

                    body.show-header .header-logo{
                        display: none!important;
                    }
                    body.show-header header.o-page__header{
                        display: block!important;
                    }
                    .sfc-tabs__tabcontent {
                        margin: 0;
                    }
                    .sfc-tabs__tabcontent.tabs__content h2 {
                        position: initial!important;
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 30px;
                        line-height: 42px;
                        margin-bottom: 22px;
                        text-align: center;
                        color: #272727;
                    }
                    .commerce-checkout-flow {
                        margin: 0;
                    }
                    .layout-checkout-form {
                        padding: 42px;
                    }
                    .check-accept {
                        margin-bottom: 16px;
                    }
                    .form-item-payment-information-add-payment-method-billing-information-address-0-address-postal-code + .form-item-payment-information-add-payment-method-billing-information-address-0-address-locality, .form-item-payment-information-add-payment-method-billing-information-address-0-address-locality + .form-item-payment-information-add-payment-method-billing-information-address-0-address-postal-code {
                        width: calc(50% - 8px);
                    }

                    @media only screen and (min-width: 768px) {
                        .o-page--simpleCard .o-page__mainContent.active:before {
                            content: '';
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                            background: url(${dir}bg.svg) no-repeat center / contain;
                            height: 732.5px;
                            width: 942px;
                        }
                    }
                    @media only screen and (max-width: 767px) {
                        .layout-checkout-form {
                            padding: 20px;
                        }
                    }
                    
                </style>`
        );

        document.querySelectorAll(".sfc-tabs__tablistItem > a")[1].click();
        document.querySelector("#edit-login-register-mail").focus();
        document.querySelector(".o-page--simpleCard .o-page__mainContent").classList.add("active");

        pushDataLayer("exp_ch_pl_page_create_v", "Create your account", "Visibility", "Create your account");

        document.querySelector('[data-drupal-selector="edit-login-returning-customer"]').insertAdjacentHTML(
          "afterbegin",
          `
                <h2>Log In</h2>`
        );
        document.querySelector('[data-drupal-selector="edit-login-register"]').insertAdjacentHTML(
          "afterbegin",
          `
                <h2>Create your account</h2>`
        );

        document.querySelector('[data-drupal-selector="edit-login-register"] h2').innerHTML = "Create your account";

        document.querySelector('label[for="edit-login-returning-customer-name"]').innerHTML = "Email address";
        document.querySelector("#edit-login-returning-customer-name").placeholder = "Email";
        document.querySelector("#edit-login-returning-customer-password").placeholder = "Password";
        document.querySelector("form #edit-login-returning-customer-submit").insertAdjacentHTML("beforebegin", rememberMeHTML);

        document.querySelector(".remember-me").after(document.querySelector("#edit-login-returning-customer-forgot-password"));

        document.querySelector("#edit-login-returning-customer-submit").insertAdjacentHTML("afterend", `<p class="text-center singup">Don’t have an account? <a href="#">Sing up</a></p>`);
        document.querySelector("#edit-login-register-register").insertAdjacentHTML("afterend", `<p class="text-center singup">Already have an account? <a href="#">Log in</a></p>`);

        document.querySelector("#edit-login-register-register").insertAdjacentHTML(
          "beforebegin",
          `${subscribeHTML}
                <button type="button" class="btn-reg">Sign Up</button>`
        );

        document.querySelector('[data-drupal-selector="edit-login-returning-customer"] .singup a').addEventListener("click", (e) => {
          document.querySelectorAll(".sfc-tabs__tablistItem > a")[1].click();
          document.querySelector(".o-page--simpleCard .o-page__mainContent").classList.add("active");
          document.querySelector("#edit-login-register-mail").focus();
          document.body.classList.remove("show-header");
          pushDataLayer("exp_ch_pl_page_login_link", "Sign up", "Link", "Log in form");
          pushDataLayer("exp_ch_pl_page_create_v", "Create your account", "Visibility", "Create your account");
        });
        document.querySelector('[data-drupal-selector="edit-login-register"] .singup a').addEventListener("click", (e) => {
          document.querySelectorAll(".sfc-tabs__tablistItem > a")[0].click();
          document.querySelector(".o-page--simpleCard .o-page__mainContent").classList.remove("active");
          document.querySelector("#edit-login-returning-customer-name").focus();
          document.body.classList.add("show-header");
          pushDataLayer("exp_ch_pl_page_create_link", "Log in", "Link", "Create your account");
          pushDataLayer("exp_ch_pl_page_login_v", "Log in form", "Visibility", "Log in form");
        });

        if (localStorage.username != null && localStorage.username != "") {
          document.querySelector("#edit-login-returning-customer-name").value = localStorage.username;
        }
        document.querySelector("#edit-login-returning-customer-submit").addEventListener("click", () => {
          localStorage.setItem("email", document.querySelector("#edit-login-returning-customer-name").value);
          pushDataLayer("exp_ch_pl_page_login_b", "Log in button", "Button", "Log in form");
          lsRememberMe(".remember-me input", "#edit-login-returning-customer-name");
        });

        //passwords
        document.querySelector("#edit-login-register-password-pass1").addEventListener("input", (e) => {
          document.querySelector("#edit-login-register-password-pass2").value = e.target.value;
        });

        //checkbox
        document.querySelectorAll(".check-accept input").forEach((item, index) => {
          item.addEventListener("change", (e) => {
            if (item.checked) {
              document.querySelector("#edit-login-register-field-ac-newsletter-reg-value").checked = true;
            } else {
              document.querySelector("#edit-login-register-field-ac-newsletter-reg-value").checked = false;
            }
          });
        });

        document.querySelector(".btn-reg").addEventListener("click", (e) => {
          if (document.querySelector(".js-password-strength__text") != null && (document.querySelector(".js-password-strength__text").innerHTML == "" || document.querySelector(".js-password-strength__text").innerHTML.includes("Weak"))) {
            document.querySelector(".password-strength").style = "dusplay: block!important";
          } else {
            document.querySelector(".password-strength").style = "";
          }

          localStorage.setItem("email", document.querySelector("#edit-login-register-mail").value);
          document.querySelector("#edit-login-register-register").click();

          if (document.querySelector("#edit-login-register-name").value != "" && document.querySelector("#edit-login-register-password-pass1").value != "") {
            e.currentTarget.classList.add("loading");
          }

          pushDataLayer("exp_ch_pl_page_create_b", "Create an account button", "Button", "Create your account");
        });
        document.querySelectorAll("form .form-item label").forEach((item) => {
          item.classList.add("form-required");
        });
        document.querySelector(".remember-me + a").addEventListener("click", (e) => {
          pushDataLayer("exp_ch_pl_page_forg", "Forgot password", "Link", "Log in form");
        });
      }

      if (window.location.href.includes("/yogi/register") && document.querySelector("form h1")) {
        loc = "Create your account";

        document.body.insertAdjacentHTML(
          "afterbegin",
          `
                <style>
                    @media only screen and (min-width: 768px) {
                        .o-page--simpleCard .o-page__mainContent:before {
                            content: '';
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                            background: url(${dir}bg.svg) no-repeat center / contain;
                            height: 732.5px;
                            width: 942px;
                        }
                    }
                </style>`
        );
        document.querySelector("form h1").innerHTML = "Create your account";
        document.querySelector(".social-auth__networks a").innerHTML = logInGoogle("Sing Up");
        document.querySelector(".social-auth__container .social-auth__divider__text").innerHTML = "or create an account";
        document.querySelector("#edit-pass").insertAdjacentHTML("afterend", subscribeHTML);

        document.querySelector("#edit-actions .form-submit").insertAdjacentHTML("afterend", `<button type="button" class="btn-reg">Create an account</button><p class="text-center singup">Already have an account? <a href="/yogi/login">Log in</a></p>`);

        document.querySelector(".singup a").href = document.querySelector(".singup a").href + window.location.search;

        document.querySelector(".btn-reg").addEventListener("click", (e) => {
          if (document.querySelector(".form-email").value != "" && document.querySelector(".username").value != "" && document.querySelector("#edit-pass-pass1").value != "") {
            e.currentTarget.classList.add("loading");
            pushDataLayer("exp_ch_pl_page_create_b", "Create an account button", "Button", loc);
          }
          document.querySelector("#edit-actions .form-submit").click();
        });

        if (window.innerWidth <= 768) {
          if (document.querySelector(".singup")) {
            document.querySelector(".singup").before(document.querySelector(".social-auth__container"));
          }
          if (document.querySelector(".social-auth__container + .singup")) {
            document.querySelector(".social-auth__container").after(document.querySelector(".social-auth__networks"));
          }
          document.querySelector(".social-auth__container .social-auth__divider__text").innerHTML = "or";
        }

        document.querySelector(".social-auth.auth-link span").innerHTML = "Sign up with Google";
        document.querySelector('[data-drupal-selector="user-register-form"] .social-auth').addEventListener("click", (e) => {
          pushDataLayer("exp_ch_pl_page_sign_create", "Sign up with google", "Button", loc);
        });
        //passwords
        document.querySelector("#edit-pass-pass1").addEventListener("input", (e) => {
          document.querySelector("#edit-pass-pass2").value = e.target.value;
        });

        //checkbox
        document.querySelectorAll(".check-accept input").forEach((item, index) => {
          item.addEventListener("change", (e) => {
            if (item.checked) {
              document.querySelector("#edit-field-ac-newsletter-reg-value").checked = true;
            } else {
              document.querySelector("#edit-field-ac-newsletter-reg-value").checked = false;
            }
          });
        });

        document.querySelector("#edit-mail").focus();

        document.querySelector("#edit-actions").addEventListener("click", (e) => {
          if (document.querySelector(".password-strength__indicator.is-weak") != null) {
            document.querySelector(".password-strength").style = "dusplay: block!important";
          } else {
            document.querySelector(".password-strength").style = "";
          }
        });

        document.querySelector(".singup a").addEventListener("click", () => {
          pushDataLayer("exp_ch_pl_page_create_login", "Log in", "Link", loc);
        });
        pushDataLayer("exp_ch_pl_page_create_v", loc, "Visibility", loc);
      }

      if (window.location.href.includes("/yogi/register") || window.location.href.includes("/yogi/login") || (window.location.href.includes("/checkout") && window.location.href.includes("/login"))) {
        document.querySelectorAll("form input").forEach((item) => {
          item.addEventListener("click", (e) => {
            let parent = e.currentTarget.parentElement;

            if (parent.querySelector("label")) {
              pushDataLayer(`exp_ch_pl_page_input_${getLoc(e)[0]}`, `Click on ${parent.querySelector("label").innerText}`, "Input", getLoc(e)[1]);
            } else if (parent.tagName == "LABEL" && item.type != "checkbox") {
              pushDataLayer(`exp_ch_pl_page_input_${getLoc(e)[0]}`, `Click on ${parent.innerText}`, "Input", getLoc(e)[1]);
            } else if (parent.classList.contains("remember-me")) {
              pushDataLayer("exp_ch_pl_page_rem_ch", "Remember me", "Checkbox", "Log in form");
            } else if (parent.classList.contains("check-accept")) {
              pushDataLayer("exp_ch_pl_page_create_chs", "Checkbox subscribe", "Checkbox", "Create your account");
            } else {
              pushDataLayer(`exp_ch_pl_page_input_${getLoc(e)[0]}`, `Click on ${e.currentTarget.value == "Create new account" ? "Sign up" : e.currentTarget.value}`, "Input", getLoc(e)[1]);
            }
          });
        });
      }

      if (window.location.href.includes("yogi/intake-survey")) {
        document.body.insertAdjacentHTML(
          "afterbegin",
          `<style>
                    .messages--status[role="contentinfo"] {
                        display: none!important;
                    }
                    form.profile-student-form h1 {
                        text-align: left;
                        margin-bottom: 0;
                    }
                    .profile-student-form {
                        padding: 42px 24px 0;
                    }
                    .profile-student-form > p {
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 24px;
                        color: #555555;
                        margin: 12px 0 24px;
                    }
                    .messages--status {
                        box-shadow: none;
                        background: rgba(1, 121, 34, 0.1);
                        border-radius: 12px 12px 0px 0px;
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 24px;
                        color: #017922;
                        padding: 8px;
                        border: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .messages--status svg {
                        margin-right: 8px;
                    }
                    // .path-yogi .block-system-main-block {
                    //     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
                    //     border-radius: 0px 0px 12px 12px;
                    // }
                    .fieldset-legend {
                        font-family: 'Manrope';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 27px;
                        text-transform: capitalize;
                        color: #272727;
                        margin-bottom: 16px;
                    }
                    .form-checkboxes .form-item, .form-radios .form-item {
                        margin: 0 0 8px 0;
                    }
                    input[type="checkbox"]+label, input[type="radio"]+label {
                        padding-left: 30px;
                        margin-left: 0;
                    }
                    input[type="checkbox"]+label:before, input[type="radio"]+label:before, input[type="radio"]+label:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        border: 1px solid #A5A5A5;
                        border-radius: 4px;
                        width: 18px;
                        height: 18px;
                    }
                    input[type="radio"]+label:after {
                        width: 12px;
                        height: 12px;
                        left: 3px;
                        border-color: transparent;
                        border-radius: 50%;
                    }

                    input[type="radio"]+label:before {
                        border-radius: 50%;
                    }
                    input[type="radio"]:checked ~ label:before {
                        border-color: #027DB8;
                    }
                    input[type="radio"]:checked ~ label:after {
                        background: #027DB8;
                    }
                    input[type="checkbox"]:checked ~ label:before {
                        background: #027DB8 url(${dir}checked.svg) no-repeat center / 12px 10px;
                        border-color: #027DB8;
                    }
                    .profile-student-form .form-actions {
                        padding-top: 2px;
                    }

                    @media only screen and (min-width: 768px) {
                        // .messages--status {
                        //     margin-left: -18px;
                        //     margin-right: -18px;
                        // }
                    }
                    @media only screen and (max-width: 767px) {
                        .profile-student-form .form-actions {
                            padding-bottom: 42px
                        }
                        .messages--status {
                            font-size: 12px;
                        }
                        .messages--status svg {
                            width: 12px;
                        }
                    }
                </style>`
        );

        let messHtml = `
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.42188 11.7644C5.73438 12.0785 6.26562 12.0785 6.57812 11.7644L15.7656 2.5288C16.0781 2.21466 16.0781 1.68063 15.7656 1.36649L14.6406 0.235602C14.3281 -0.078534 13.8281 -0.078534 13.5156 0.235602L6.01562 7.77487L2.48438 4.25654C2.17188 3.94241 1.67188 3.94241 1.35938 4.25654L0.234375 5.38743C-0.078125 5.70157 -0.078125 6.2356 0.234375 6.54974L5.42188 11.7644Z" fill="#017922"/>
                    </svg>
                    <span>Registration successful. You are now logged in.</span>`;

        document.querySelector(".profile-student-form").insertAdjacentHTML(
          "beforebegin",
          `
                    <div class="messages--status" style="margin-bottom: -22px;">${messHtml}</div>`
        );

        document.querySelectorAll(".form-item input").forEach((item) => {
          item.addEventListener("change", (e) => {
            if (item.type == "checkbox" || item.type == "radio") {
              if (item.checked) {
                let name = item.closest("fieldset").querySelector("legend > .fieldset-legend").innerText.trim().split(" ")[0].toLowerCase(),
                  type = item.type == "radio" ? "_r" : "_ch",
                  desk = `${item.closest(".fieldset-wrapper").previousElementSibling.innerText.replace("?", "")} - ${item.parentElement.innerText}`;

                pushDataLayer(`exp_ch_pl_page_${name}` + type, desk, item.type, "Lets find classes that work best for you");
              }
            }
          });
        });

        document.querySelector("#edit-submit").addEventListener("click", () => {
          pushDataLayer("exp_ch_pl_page_save_b", "Save button", "Button", "Lets find classes that work best for you");
        });
        pushDataLayer("exp_ch_pl_page_lets_v", "Lets find classes that work best for you", "Visibility", "Lets find classes that work best for you");
      }

      document.querySelectorAll("#block-legalacceptcopy a").forEach((item) => {
        item.addEventListener("click", (e) => {
          let name = item.pathname == "/legal" ? "term_l" : item.pathname == "/privacy" ? "priv_l" : "";
          pushDataLayer("exp_ch_pl_page_" + name, item.innerText, "Link", loc);
        });
      });
    }

    if (document.querySelector(".form-item-commerce-donation-pane-donation-toggler label") != null && document.querySelector(".views-field.views-field-total-price__number") != null && document.querySelector(".o-page__mainContent") != null && window.location.href.includes("/checkout") && !window.location.href.includes("/login") && document.querySelector('[data-drupal-selector="edit-actions-next"]') != null) {
      clearInterval(init);
      let loc = "Card information";

      document.body.insertAdjacentHTML("afterbegin", style); //add style

      if (document.querySelector(".topbar") == null) {
        document.querySelector(".o-page__mainContent").insertAdjacentHTML("afterbegin", headHTML); //add topbar
      }

      document.body.insertAdjacentHTML(
        "afterbegin",
        `
            <style>
                .commerce-checkout-flow {
                    margin-bottom: 5em;
                }
                [data-drupal-selector="edit-commerce-donation-pane"] [data-drupal-messages], #edit-coupon-redemption, .order-total-line.order-total-line__subtotal, .form-item-payment-information-add-payment-method-billing-information-copy-to-address-book, .layout-region.layout-region-checkout-footer, #edit-commerce-donation-pane > legend > .fieldset-legend, #edit-commerce-donation-pane > .fieldset-wrapper > p, .form-item-payment-information-add-payment-method-billing-information-copy-to-address-book, .o-page__header, .address-line2, .form-item-payment-information-add-payment-method-billing-information-address-0-address-address-line2 {
                    display: none!important;
                }
                #edit-coupon-redemption.active {
                    display: block!important;
                    margin-top: 24px;
                    border-bottom: 1px solid #E0E0E0;
                    padding-bottom: 16px;
                }
                #edit-sidebar-coupon-redemption-form {
                    display: flex;
                }
                .coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                        gap: 12px;
                        width: 100%;
                }
                 .coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var h3{
                    color: #272727;
                    font-family: 'Manrope';
                    font-size: 16px;
                    font-weight: 600;
                    line-height: normal;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    width: inherit;
                    max-width: max-content;
                 }
                 .coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var tr{
                      border: none;
                      display: flex;
                      align-items: center;
                      gap: 6px;
                      z-index: 11;
                 }
                 .coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var td{
                  color: #027DB8;
                  font-family: 'Manrope';
                  font-size: 16px;
                  font-weight: 600;
                  line-height: normal;
                      padding: 0;
                 }
                 .coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var td button{
                  background: none;
                      outline: none;
                      border: none;
                      width: max-content;
                      padding: 5px;
                 }
                [data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"] {
                    height: fit-content;
                    margin: 28px 0 0 16px!important;
                    flex-shrink: 0;
                    padding: 12px 20px;
                    line-height: 20px;
                    border-radius: 8px!important;
                }
                [data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"] * {
                    pointer-events: none;
                }
                .layout-region-checkout-main, .layout-region-checkout-secondary {
                    margin-top: 0;
                    background: #FFFFFF;
                    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;
                    padding: 42px;
                    flex: inherit;
                    max-width: none;
                    overflow: visible;
                }
                .o-page--checkout .o-page__main {
                    background-color: #F6F6F6;
                }
                .layout-checkout-form {
                    max-width: 1264px;
                    width: 100%;
                    padding: 0 20px;
                    margin: 0 auto;
                }
                .layout-region-checkout-main {
                    width: calc(100% - 554px - 30px);
                }
                .layout-region-checkout-secondary  {
                    width: 554px;
                    margin-left: 30px;
                }
                .fieldset-legend, .layout-region.layout-region-checkout-secondary h3 {
                    font-family: 'Manrope';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: normal;
                    text-transform: capitalize;
                    color: #272727;
                }
                .layout-region layout-region-checkout-secondary h3{
                  margin-bottom: 13px;
                }
                .free_trial_box{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding-bottom: 17px;
                  border-bottom: 2px dashed #E0E0E0;
                  margin-bottom: 12px;
                }
                .free_trial_box > p{
                  color: #272727;
                  font-family: 'Manrope';
                  font-size: 16px;
                  font-weight: 700;
                  line-height: normal;
                  text-transform: capitalize;
                  margin: 0;
                }
                .due_on_block{
                  margin-bottom: 12px;
                }
                .due_on_block p{
                  color: #272727;
                  font-family: 'Manrope';
                  font-size: 16px;
                  font-weight: 700;
                  line-height: normal;
                  text-transform: capitalize;
                  margin: 0;
                }
                .free_trial_box > p:last-child{
                  font-size: 18px;
                }
                .views-field.views-field-title span:last-child{
                  color: #A5A5A5;
                  font-family: 'Manrope';
                  font-size: 12px;
                  font-weight: 600;
                  line-height: 20px;
                  display: block;
                  margin-top: 6px;
                      max-width: 280px;
    width: 100%;
                }
                .views-field.views-field-title span:last-child.current_price{
                  display: inline;
                }
                .checkout-pane-payment-information .fieldset-wrapper {
                        padding-top: 2.5em;
                }
                #edit-payment-information-payment-method--wrapper span.fieldset-legend,
                [data-drupal-selector="edit-payment-information-payment-method"] span.fieldset-legend{
                    color: #4A4A4A;
                    font-family: 'Manrope';
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                }
                .layout-region  > #edit-payment-information > legend span.fieldset-legend{
                  font-size: 23px;
                }
                .recurly-hosted-field {
                    margin-top: 4px;
                    margin-bottom: 16px;
                    border: 1px solid #E0E0E0;
                    border-radius: 8px;
                    height: 48px;
                    padding: 0;
                }
                .recurly-hosted-field.recurly-element-invalid, .recurly-hosted-field.recurly-hosted-field-invalid {
                    border-color: #e62600;
                }
                .form-item {
                    margin-bottom: 16px;
                }
                [data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address"], [data-drupal-selector="edit-payment-information-billing-information-address-0-address"] {
                    display: flex;
                    flex-direction: column;
                }
                .address-container-inline.js-form-wrapper.form-wrapper, #edit-payment-information-add-payment-method-billing-information-address-0-address-container0, #edit-payment-information-add-payment-method-billing-information-address-0-address-container4 {
                    display: flex;
                    flex-wrap: wrap;
                }
                [data-drupal-selector="edit-payment-information-billing-information-address-0-address-country-code"], .form-item-payment-information-billing-information-address-0-address-country-code, .form-item-payment-information-add-payment-method-billing-information-address-0-address-address-line1, #edit-payment-information-add-payment-method-billing-information-address-0-address-container0, .form-item-payment-information-add-payment-method-billing-information-select-address {
                    order: 4;
                }
                #edit-payment-information-add-payment-method-billing-information-address-0-address-country-code, [data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-country-code"] {
                    order: 5;
                }
                #edit-payment-information-add-payment-method-billing-information-address-0-address-container4, [data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-container4"] {
                    order: 6;
                }
                .address-container-inline > .form-item {
                    width: calc(50% - 8px);
                    margin-right: 16px;
                }
                .address-container-inline > .form-item:nth-child(2n+2),  .address-container-inline > .form-item:last-child {
                    margin-right: 0;
                }
                .address-container-inline > .form-item.form-item-payment-information-add-payment-method-billing-information-address-0-address-locality,
                .address-container-inline > .form-item-payment-information-billing-information-address-0-address-locality {
                    width: 100%;
                    margin-right: 0;
                }
                .form-item-payment-information-billing-information-address-0-address-address-line2 {
                    margin: 0;
                }
                .address-container-inline > .form-item.form-item-payment-information-add-payment-method-billing-information-address-0-address-administrative-area,
                .address-container-inline > .form-item-payment-information-billing-information-address-0-address-administrative-area {
                    margin-right: 16px!important;
                }
                #edit-commerce-donation-pane {
                    border: none;
                    background: #F6F6F6;
                    border-radius: 8px;
                    padding: 14px ;
                }
                .btn_start_membership {
                    line-height: 48px!important;
                }
                label.option, .form-item-commerce-donation-pane-donation-toggler {
                    margin: 0;
                }
                .form-item-commerce-donation-pane-donation-toggler label {
                    font-weight: 600;
                    color: #555555;
                }
                .form-checkboxes label, .form-radios label, .form-item-commerce-donation-pane-donation-toggler label {
                    padding-left: 28px;
                    margin-left: 0!important;
                }
                .check, .form-radio+label:before {
                    transform: translateY(-50%);
                    position: absolute;
                    left: 0;
                    top: 50%;
                }
                .form-radio+label:before {
                    content: '';
                    border-radius: 50%;
                    width: 18px;
                    height: 18px;
                    border: 1px solid #A5A5A5;
                    background: #FFFFFF;
                }
                .form-radio+label:after {
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 4px;
                    transform: translateY(-50%);
                    width: 12px;
                    height: 12px;
                    background: #027DB8;
                }
                .form-radio:checked+label:after {
                    content: '';
                }
                #edit-commerce-donation-pane .fieldset-legend {
                    font-size: 16px;
                    line-height: 24px;
                }
                [data-drupal-selector="edit-commerce-donation-pane-field-gift-type"] .fieldset-legend {
                    border-top: 1px solid #E0E0E0;
                    padding: 16px 0 0 0;
                    margin-top: 12px;
                }
                .form-composite > legend, .label {
                    width: 100%;
                }
                [data-drupal-selector="edit-commerce-donation-pane-field-gift-type"], [data-drupal-selector="edit-commerce-donation-pane-field-donation-amount-0-donation-level"] {
                    border: none;
                    padding: 0;
                    margin: 0;
                }
                [data-drupal-selector="edit-commerce-donation-pane-field-donation-amount-0-donation-level"] .fieldset-legend {
                    padding: 8px 0 0 0;
                }
                [data-drupal-selector="edit-commerce-donation-pane-field-donation-amount-0-donation-level-amount"] {
                    width: 230px!important;
                }
                .tablesaw th, .tablesaw td {
                    padding: 0 0 16px 0;
                }
                .views-field.views-field-total-price__number {
                    text-align: right;
                    font-family: 'Manrope';
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    color: #272727;
                    vertical-align: top;
                    padding: 0;
                }
                .checkout-pane .tablesaw-stack tr{
                      border-bottom: 1px solid #E0E0E0;
                }
                .views-field.views-field-title {
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #272727;
                    vertical-align: initial;
                    padding-bottom: 12px;
                }
                tr {
                    border-bottom-style: dashed;
                }
                .views-field.views-field-total-price__number p {
                    margin: 0;
                }
                .views-field.views-field-total-price__number p span.old_price_var {
                    text-decoration-line: line-through;
                    color: #A5A5A5;
                }
                .views-field.views-field-total-price__number p.c-green {
                    font-size: 14px;
                    line-height: normal;
                    color: #017922;
                    padding-top: 6px;
                }
                .order-total-line__total {
                    padding: 16px 0;
                    display: flex;
                    justify-content: space-between;
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 27px;
                    text-transform: capitalize;
                    color: #272727;
                }
                .saved_block {
                    margin: 8px 0 0 auto;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 20px;
                    color: #272727;
                    padding: 4px 8px;
                    background: #F3A83C;
                    border-radius: 8px;
                    width: fit-content;
                    display: none;
                }
                .field--name-total-price--recurly {
                    border-bottom: 1px solid #E0E0E0;
                }
                .btn_got_coupon {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: normal;
                    text-decoration-line: underline;
                    color: #027DB8;
                    margin-top: 16px;
                    outline: none;
                    border-bottom: 1px solid #E0E0E0;
                    padding-bottom: 16px;
                }
                input[readonly] {
                    background: #F6F6F6;
                }
                [data-drupal-messages] {
                    margin: 10px 0;
                }
                .info_dashed {
                    background: #F9F9F9;
                    border: 1px dashed #D6D6D6;
                    border-radius: 12px;
                    padding: 10px 30px;
                    font-family: 'Manrope';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #555555;
                }
                .info_dashed svg {
                    margin-right: 8px;
                }
                .infos_dashed {
                    position: absolute;
                    bottom: -74px;
                    left: 0;
                    width: 100%;
                }
                .views-element-container.js-form-wrapper.form-wrapper footer{
                  display: none;
                }
                @media only screen and (max-width: 1260px) {
                  .layout-region > #edit-payment-information > legend span.fieldset-legend,
                  .layout-region.layout-region-checkout-secondary h3{
                    font-size: 20px;
                  }
                }
                @media only screen and (max-width: 1080px) {
                  .layout-region > #edit-payment-information > legend span.fieldset-legend,
                  .layout-region.layout-region-checkout-secondary h3{
                        font-size: 17px;
                  }
                }

                @media only screen and (max-width: 1200px) {
                    .layout-region-checkout-main, .layout-region-checkout-secondary {
                        padding: 20px;
                    }
                    .infos_dashed {
                        bottom: -66px;
                    }
                    .info_dashed {
                        padding: 6px 10px;
                        line-height: 18px;
                        min-height: 50px;
                    }
                    .info_dashed:first-child {
                        margin-right: 16px;
                        flex-shrink: 0;
                        min-width: 167px;
                    }
                    .layout-region-checkout-secondary {
                        width: 500px;
                        margin-left: 20px;
                    }
                    .layout-region-checkout-main {
                        width: calc(100% - 500px - 20px);
                    }
                }
                @media only screen and (max-width: 767px) {
                    .layout-region-checkout-main, .layout-region-checkout-secondary {
                        width: 100%;
                        margin: 0;
                    }
                    .layout-region-checkout-secondary {
                        margin-bottom: 82px;
                    }
                    .fieldset-legend, .layout-region.layout-region-checkout-secondary h3 {
                        font-size: 22px;
                    }
                    .free_trial_box{
                          padding-bottom: 13px;
                    }
                    .subscr_txt_mob{
                      color: #A5A5A5;
                      font-family: 'Manrope';
                      font-size: 12px;
                      font-weight: 600;
                      line-height: 20px;
                      border-bottom: 1px solid #E0E0E0;
                      padding-bottom: 12px;
                      margin: 0;
                    }
                    .checkout-pane .tablesaw-stack tr {
    border-bottom: none;
}
.coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var h3{
  min-width: max-content;
}
                    .info_dashed {
                        font-size: 14px;
                    }
                    .info_dashed svg {
                        max-height: 20px;
                        max-width: 17px;
                    }
                    #edit-commerce-donation-pane {
                        padding: 10px 13px 10px 15px;
                        margin-top: -16px;
                    }
                    .tablesaw-stack tbody tr {
                        display: flex;
                        border-bottom-style: dashed;
                    }
                    .views-field.views-field-title {
                     font-size: 14px;
                  line-height: 20px;
                  font-weight: 600;
                    }
                    .views-field.views-field-total-price__number {
                        width: inherit;;
                        font-size: 12px;
                        line-height: 24px;          
                    }
                    .btn_got_coupon {
                        font-size: 14px;
                        line-height: normal;
                        border-bottom: none;
                        padding-bottom: 0;
                        margin: 20px 0 0;
                    }
                    .views-field.views-field-title span:last-child{
                      margin-top: 0;
                          font-size: 14px;
                          color: #272727;
                              display: none;
                    }
                    .layout-region > #edit-payment-information > legend span.fieldset-legend, .layout-region.layout-region-checkout-secondary h3{
                          font-size: 21px;
                    }
                    #edit-payment-information-payment-method--wrapper span.fieldset-legend, [data-drupal-selector="edit-payment-information-payment-method"] span.fieldset-legend{
                      font-size: 11px;
                      font-weight: 600;
                      line-height: 20px;
                    }
                    .checkout-pane-payment-information .fieldset-wrapper {
                      padding-top: 3.5em;
                    }
                    .saved_block{
                          display: none !important;
                    }
                    #edit-coupon-redemption.active {
                        margin-top: 12px;
                            border-bottom: none;
    padding-bottom: 0;
                    }
                    .samsara .form-type-checkbox .check {
                        top: 12px;
                    }
                }
                @media only screen and (max-width: 360px) {
                    .info_dashed:first-child {
                        min-width: 48%;
                        flex-shrink: 1;
                        margin-right: 10px;
                    }
                    .layout-region-checkout-main, .layout-region-checkout-secondary {
                        padding: 20px 11px;
                    }
                    .fieldset-legend, .layout-region.layout-region-checkout-secondary h3 {
                        font-size: 21px;
                    }
                }
            </style>`
      );

      if (document.querySelector(".header-logo") == null) {
        document.querySelector(".o-page__header").insertAdjacentHTML(
          "afterend",
          `
                <div class="header-logo text-center"> <a href="/" class="logo"><img src="/themes/custom/lotus/logo.png" alt="image"></a></div>`
        );
      }

      document.querySelector(".progressbar .step:nth-child(2)").classList.add("checked");
      document.querySelector(".progressbar .step:last-child").classList.add("active");
      if (window.matchMedia("(max-width: 767px)").matches) {
        document.querySelector(".progressbar .step.active:not(.checked) > div").innerHTML = "/3";
      }

      document.querySelector(".checkout-pane .fieldset-legend").innerHTML = "Enter your card information to start a free trial";
      document.querySelector(".checkout-pane-payment-information fieldset:first-of-type .fieldset-legend").textContent = "We will automatically charge this card after the Trial period ends to ensure smooth product experience";

      if (document.querySelector(".btn_start_membership") == null) {
        const isDonation = document.querySelector('[data-drupal-selector="edit-sidebar-order-summary-summary"] .views-field-title')?.textContent.toLowerCase().trim() === "donation";
        document.querySelector(".layout-region.layout-region-checkout-main").insertAdjacentHTML("beforeend", `<button type="button" class="btn_start_membership">${isDonation ? "Continue to review" : "Start membership"}</button>`);
      }

      // Continue to review

      let waitEmail = setInterval(() => {
        if (document.querySelector(".recurly-hosted-field") != null && document.querySelector(".form-radios") == null) {
          clearInterval(waitEmail);
          if (localStorage.getItem("email")) {
            let email = localStorage.getItem("email");

            document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-payment-details"]').insertAdjacentHTML(
              "beforebegin",
              `
                        <div class="field-email form-item">
                            <label>Email</label>
                            <input type="email" readonly value="${email}">
                        </div>`
            );
          }

          document.querySelector(".recurly-hosted-field").insertAdjacentHTML("beforebegin", `<label>Card Information</label>`);
          document.querySelector(".btn_start_membership").disabled = true;
        }
      });

      if (document.querySelector(".samsara .form-type-checkbox .check") == null) {
        document.querySelector('[data-drupal-selector="edit-commerce-donation-pane-donation-toggler"]').insertAdjacentHTML("afterend", `<span class="check"></span>`);
        document.querySelector('[data-drupal-selector="edit-commerce-donation-pane-donation-toggler"]').addEventListener("change", (e) => {
          pushDataLayer("exp_ch_pl_page_would_ch", `I'd like to make ...`, "Checkbox", loc);
        });
      }
      document.querySelector(".form-item-commerce-donation-pane-donation-toggler label").innerHTML = `I'd like to make a donation to support instructors and free content creation `;
      const months = {
        Jan: "January",
        Feb: "February",
        Mar: "March",
        Apr: "April",
        May: "May",
        Jun: "June",
        Jul: "July",
        Aug: "August",
        Sep: "September",
        Oct: "October",
        Nov: "November",
        Dec: "December",
      };
      let newDateArr = new Date(new Date().setDate(new Date().getDate() + 7)).toDateString().split(" ");
      let newMonthTxt = months[newDateArr[1]];
      let newDateTxt = newDateArr[2];
      console.log(newMonthTxt, newDateTxt);
      if (!document.querySelector(".free_trial_box")) {
        document.querySelector(".layout-region.layout-region-checkout-secondary > h3").insertAdjacentHTML("afterend", `<div class="free_trial_box"><p>7-day free trial</p><p>$0.00</p></div><div class="due_on_block"><p>Due on <span class="due_on_txt">${newMonthTxt}, ${newDateTxt}</span>:</p></div>`);
      }

      let diffValue = "";
      let percentVar = "";
      let price = "";
      let value = "";
      if (document.querySelector(".views-field.views-field-title").innerHTML.match("Yearly Subscription w/ 7 Day Trial")) {
        price = document.querySelector(".views-field.views-field-total-price__number");
        value = 108.99;
        diffValue = 167.88 - value;
        percentVar = (diffValue * 100) / 167.88;
        console.log(percentVar, `percentVar`);
        console.log(diffValue, `diffValue`);
        if (!document.querySelector(".c-green")) {
          price.innerHTML = `
                      <p><span class="old_price_var">$167.88</span> $<span class="current_price">${value}</span></p>
                      <p class="c-green">Just $<span class="green_price">${(value / 12).toFixed(2)}</span>/month!</p>`;
        }

        document.querySelector(".views-field.views-field-title").innerHTML = `<span>12-month DYWM Subscription</span><span>After the 7-day trial period, the annual fee will be $<span class='current_price'>${value}</span>.</span>`;
        if (window.innerWidth <= 768) {
          if (!document.querySelector(".subscr_txt_mob")) {
            document.querySelector(".checkout-pane.checkout-pane-order-summary.js-form-wrapper.form-wrapper").insertAdjacentHTML("afterend", `<p class="subscr_txt_mob">After the 7-day trial period, the annual fee will be $${value}.</p>`);
          }
        }
        if (!document.querySelector(".saved_block") && document.querySelector(".c-green")) {
          document.querySelector(".c-green").insertAdjacentHTML("afterend", ` <div class="saved_block">You saved <span class="saved_var">$${diffValue}</span> (<span class="percent_var">${percentVar.toFixed(0)}%</span> off)</div>`);
        }
      } else if (document.querySelector(".views-field.views-field-title").innerHTML.match("Monthly Subscription w/ 7 Day Trial")) {
        console.log(`object`);
        value = 13.99;
        document.querySelector(".views-field.views-field-title").innerHTML = `<span>1-Month DYWM Subscription</span><span>After the 7-day trial period, the monthly fee will be $<span class='current_price'>${value}</span>.</span>`;
        document.querySelector(".views-field.views-field-total-price__number").textContent = `$${value}`;
        if (window.innerWidth <= 768) {
          if (!document.querySelector(".subscr_txt_mob")) {
            document.querySelector(".checkout-pane.checkout-pane-order-summary.js-form-wrapper.form-wrapper").insertAdjacentHTML("afterend", `<p class="subscr_txt_mob">After the 7-day trial period, the annual fee will be $${value}.</p>`);
          }
        }
      }

      let findInputNullСoupon1 = setInterval(() => {
        if (!document.querySelector("[name='sidebar[coupon_redemption][form][code]']") && document.querySelector(".coupon-redemption-form__coupons td").textContent.includes("yoga40bf")) {
          clearInterval(findInputNullСoupon1);
          console.log(`findInput`);
          if (document.querySelector(".saved_block")) {
            document.querySelector(".saved_block").style.display = "block";
            document.querySelector(".views-field.views-field-total-price__number").style.paddingBottom = "17px";
          }
          document.querySelectorAll(".current_price").forEach((el) => {
            el.textContent = "65.39";
          });
          value = 65.39;
          diffValue = 108.99 - value;
          percentVar = (diffValue * 100) / 108.99;
          if (document.querySelector(".green_price")) {
            console.log(value, `value`);
            document.querySelector(".green_price").textContent = `${(value / 12).toFixed(2)}`;
          }

          if (document.querySelector(".saved_var")) {
            document.querySelector(".old_price_var").textContent = `$108.99`;
            document.querySelector(".saved_var").textContent = `${diffValue.toFixed(2)}`;
            document.querySelector(".percent_var").textContent = `${percentVar.toFixed(0)}%`;
          }
          if (document.querySelector(".btn_got_coupon")) {
            document.querySelector(".btn_got_coupon").style.display = "none";
          }
          document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple")?.classList.add("active_var");
          if (document.querySelector(".views-field.views-field-title span:last-child")) {
            document.querySelector(".views-field.views-field-title span:last-child").style.maxWidth = "235px";
          }
          document.querySelector("#edit-coupon-redemption").classList.add("active");
          document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var > h3").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g clip-path="url(#clip0_232_24337)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.93281 0 0 4.93281 0 11C0 17.0672 4.93281 22 11 22C17.0672 22 22 17.0672 22 11C22 4.93281 17.0672 0 11 0Z" fill="#017922"/>
    <path d="M9.35695 14.9073C8.26686 13.8154 7.18343 12.7135 6.09001 11.6215C5.97 11.5013 5.97 11.3009 6.09001 11.1807L7.34678 9.92184C7.46679 9.80163 7.66681 9.80163 7.78682 9.92184L9.58363 11.7217L14.204 7.09016C14.3274 6.96995 14.524 6.96995 14.6474 7.09016L15.9075 8.35239C16.0308 8.47595 16.0308 8.67296 15.9075 8.79318L9.79698 14.9073C9.67697 15.0309 9.48029 15.0309 9.35695 14.9073Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_232_24337">
      <rect width="22" height="22" fill="white"/>
    </clipPath>
  </defs>
</svg> Coupon Applied: `;
          document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var td button").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M11.6654 11.6673L2.33203 2.33398M11.6654 2.33398L2.33203 11.6673" stroke="#027DB8" stroke-width="2" stroke-linecap="round"/>
</svg>`;
        }
      }, 100);
      let findInputNullСoupon1Month = setInterval(() => {
        if (!document.querySelector("[name='sidebar[coupon_redemption][form][code]']") && document.querySelector(".views-field.views-field-title").innerHTML.match("1-Month") && document.querySelector(".coupon-redemption-form__coupons td").textContent.includes("yoga3ny")) {
          clearInterval(findInputNullСoupon1Month);
          console.log(`findInput`);
          value = 8.33;

          document.querySelectorAll(".current_price").forEach((el) => {
            el.textContent = "8.33";
          });
          document.querySelector(".views-field.views-field-total-price__number").textContent = `$${value}`;
        }
      }, 100);

      let findInputNull = setInterval(() => {
        if (!document.querySelector("[name='sidebar[coupon_redemption][form][code]']") && document.querySelector(".coupon-redemption-form__coupons td").textContent.includes("yoga_45")) {
          clearInterval(findInputNull);
          console.log(`findInput`);
          if (document.querySelector(".saved_block")) {
            document.querySelector(".saved_block").style.display = "block";
            document.querySelector(".views-field.views-field-total-price__number").style.paddingBottom = "17px";
          }
          document.querySelectorAll(".current_price").forEach((el) => {
            el.textContent = "92.64";
          });
          value = 92.64;
          diffValue = 167.88 - value;
          percentVar = (diffValue * 100) / 167.88;
          if (document.querySelector(".green_price")) {
            console.log(value, `value`);
            document.querySelector(".green_price").textContent = `${(value / 12).toFixed(2)}`;
          }

          if (document.querySelector(".saved_var")) {
            document.querySelector(".saved_var").textContent = `${diffValue}`;
            document.querySelector(".percent_var").textContent = `${percentVar.toFixed(0)}%`;
          }
          if (document.querySelector(".btn_got_coupon")) {
            document.querySelector(".btn_got_coupon").style.display = "none";
          }
          document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple")?.classList.add("active_var");
          if (document.querySelector(".views-field.views-field-title span:last-child")) {
            document.querySelector(".views-field.views-field-title span:last-child").style.maxWidth = "235px";
          }
          document.querySelector("#edit-coupon-redemption").classList.add("active");
          document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var > h3").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g clip-path="url(#clip0_232_24337)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C4.93281 0 0 4.93281 0 11C0 17.0672 4.93281 22 11 22C17.0672 22 22 17.0672 22 11C22 4.93281 17.0672 0 11 0Z" fill="#017922"/>
    <path d="M9.35695 14.9073C8.26686 13.8154 7.18343 12.7135 6.09001 11.6215C5.97 11.5013 5.97 11.3009 6.09001 11.1807L7.34678 9.92184C7.46679 9.80163 7.66681 9.80163 7.78682 9.92184L9.58363 11.7217L14.204 7.09016C14.3274 6.96995 14.524 6.96995 14.6474 7.09016L15.9075 8.35239C16.0308 8.47595 16.0308 8.67296 15.9075 8.79318L9.79698 14.9073C9.67697 15.0309 9.48029 15.0309 9.35695 14.9073Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_232_24337">
      <rect width="22" height="22" fill="white"/>
    </clipPath>
  </defs>
</svg> Coupon Applied: `;
          document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple.active_var td button").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M11.6654 11.6673L2.33203 2.33398M11.6654 2.33398L2.33203 11.6673" stroke="#027DB8" stroke-width="2" stroke-linecap="round"/>
</svg>`;
        }
      }, 100);

      let findInput = setInterval(() => {
        if (document.querySelector("[name='sidebar[coupon_redemption][form][code]") && document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple")?.classList.contains("active_var")) {
          clearInterval(findInput);
          console.log(`findInput`);
          if (document.querySelector(".saved_block")) {
            document.querySelector(".saved_block").style.display = "none";
          }
          document.querySelector(".btn_got_coupon").style.display = "block";
          if (document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple")?.classList.contains("active_var")) {
            document.querySelector(".coupon-redemption-form__coupons.coupon-redemption-form__coupons--multiple").classList.remove("active_var");
          }
          if (document.querySelector(".views-field.views-field-title span:last-child")) {
            document.querySelector(".views-field.views-field-title span:last-child").style.maxWidth = "280px";
          }
        }
      }, 100);

      if (document.querySelector("#edit-coupon-redemption") != null && document.querySelector(".btn_got_coupon") == null) {
        document.querySelector("#edit-coupon-redemption").insertAdjacentHTML(
          "beforebegin",
          `
                <a href="#" class="btn_got_coupon">Got a Coupon?</a>`
        );
        if (document.querySelector('[data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"]')) {
          document.querySelector('[data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"]').innerHTML = "Apply";
        }

        document.querySelector(".btn_got_coupon").addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector("#edit-coupon-redemption").classList.toggle("active");
          clickApplyCoupon = false;
          pushDataLayer("exp_ch_pl_page_coupon_link", "Got a Coupon?", "Link", loc);
        });
      }

      document.querySelector(".layout-region-checkout-secondary").insertAdjacentHTML(
        "beforeend",
        `
            <div class="flex items-center justify-between infos_dashed">
                <div class="info_dashed flex items-center justify-center">
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0009 29.0625C12.912 29.0613 13.8029 28.7947 14.5648 28.2952C15.3267 27.7957 15.9265 27.085 16.2909 26.25H7.71094C8.07535 27.085 8.67518 27.7957 9.43707 28.2952C10.199 28.7947 11.0899 29.0613 12.0009 29.0625Z" fill="#027DB8"/>
                        <path d="M21.3826 16.6882V16.632C19.5155 17.1306 17.528 16.8883 15.8354 15.9558C14.1428 15.0234 12.876 13.4728 12.2999 11.6282C11.7237 9.78357 11.8828 7.78767 12.7438 6.05759C13.6048 4.32751 15.1011 2.99713 16.9201 2.34448C15.5018 1.46489 13.8741 0.980652 12.2057 0.941968C10.5373 0.903283 8.88886 1.31156 7.43136 2.12447C5.97386 2.93738 4.76032 4.12533 3.91654 5.56518C3.07276 7.00503 2.62945 8.64436 2.63258 10.3132V16.6882L0.976014 20.5479C0.796978 20.9656 0.724393 21.4211 0.764766 21.8738C0.80514 22.3264 0.95721 22.7619 1.20734 23.1413C1.45747 23.5207 1.79785 23.832 2.19794 24.0475C2.59804 24.2629 3.04535 24.3757 3.49976 24.3757H20.5154C20.9698 24.3758 21.4171 24.263 21.8172 24.0476C22.2173 23.8321 22.5577 23.5207 22.8078 23.1413C23.0578 22.7619 23.2098 22.3263 23.25 21.8737C23.2902 21.421 23.2175 20.9655 23.0382 20.5479L21.3826 16.6882Z" fill="#027DB8"/>
                        <path d="M19.5 3.75C18.3875 3.75 17.2999 4.0799 16.3749 4.69798C15.4499 5.31607 14.7289 6.19457 14.3032 7.22241C13.8774 8.25024 13.766 9.38124 13.9831 10.4724C14.2001 11.5635 14.7359 12.5658 15.5225 13.3525C16.3092 14.1391 17.3115 14.6749 18.4026 14.8919C19.4938 15.109 20.6248 14.9976 21.6526 14.5718C22.6804 14.1461 23.5589 13.4251 24.177 12.5001C24.7951 11.5751 25.125 10.4875 25.125 9.375C25.1233 7.88369 24.5301 6.45396 23.4756 5.39944C22.421 4.34493 20.9913 3.75174 19.5 3.75ZM21.4884 10.0378C21.578 10.1243 21.6494 10.2277 21.6985 10.3421C21.7477 10.4565 21.7735 10.5795 21.7746 10.704C21.7757 10.8285 21.752 10.9519 21.7048 11.0671C21.6577 11.1824 21.5881 11.287 21.5001 11.3751C21.412 11.4631 21.3074 11.5327 21.1921 11.5798C21.0769 11.627 20.9535 11.6507 20.829 11.6496C20.7045 11.6485 20.5815 11.6227 20.4671 11.5735C20.3527 11.5244 20.2493 11.453 20.1628 11.3634L19.5 10.7006L18.8372 11.3634C18.7507 11.453 18.6473 11.5244 18.5329 11.5735C18.4185 11.6227 18.2955 11.6485 18.171 11.6496C18.0465 11.6507 17.9231 11.627 17.8079 11.5798C17.6926 11.5327 17.588 11.4631 17.4999 11.3751C17.4119 11.287 17.3423 11.1824 17.2952 11.0671C17.248 10.9519 17.2243 10.8285 17.2254 10.704C17.2265 10.5795 17.2523 10.4565 17.3015 10.3421C17.3506 10.2277 17.422 10.1243 17.5116 10.0378L18.1744 9.375L17.5116 8.71219C17.422 8.62571 17.3506 8.52226 17.3015 8.40788C17.2523 8.2935 17.2265 8.17048 17.2254 8.046C17.2243 7.92152 17.248 7.79807 17.2952 7.68286C17.3423 7.56764 17.4119 7.46297 17.4999 7.37494C17.588 7.28692 17.6926 7.21731 17.8079 7.17017C17.9231 7.12303 18.0465 7.09931 18.171 7.10039C18.2955 7.10147 18.4185 7.12733 18.5329 7.17647C18.6473 7.2256 18.7507 7.29702 18.8372 7.38656L19.5 8.04938L20.1628 7.38656C20.2493 7.29702 20.3527 7.2256 20.4671 7.17647C20.5815 7.12733 20.7045 7.10147 20.829 7.10039C20.9535 7.09931 21.0769 7.12303 21.1921 7.17017C21.3074 7.21731 21.412 7.28692 21.5001 7.37494C21.5881 7.46297 21.6577 7.56764 21.7048 7.68286C21.752 7.79807 21.7757 7.92152 21.7746 8.046C21.7735 8.17048 21.7477 8.2935 21.6985 8.40788C21.6494 8.52226 21.578 8.62571 21.4884 8.71219L20.8256 9.375L21.4884 10.0378Z" fill="#027DB8"/>
                    </svg>
                    Cancel anytime
                </div>
                <div class="info_dashed flex items-center justify-center">
                    <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0012 9.28516C9.84931 9.28516 7.28516 11.8493 7.28516 15.001C7.28516 18.1529 9.84931 20.7171 13.0012 20.7171C16.1529 20.7171 18.7171 18.1529 18.7171 15.001C18.7171 11.8493 16.1529 9.28516 13.0012 9.28516ZM16.3949 13.9246L12.2999 18.0195C12.1281 18.1914 11.9026 18.2774 11.6774 18.2774C11.4522 18.2774 11.2269 18.1916 11.0551 18.0195L9.4902 16.4546C9.14642 16.1111 9.14642 15.5538 9.4902 15.21C9.83375 14.8662 10.3911 14.8662 10.7349 15.21L11.6774 16.1525L15.1502 12.6799C15.4938 12.3361 16.0511 12.3361 16.3949 12.6799C16.7386 13.0235 16.7386 13.5808 16.3949 13.9246Z" fill="#027DB8"/>
                        <path d="M25.7434 8.13976L25.7425 8.11641C25.7294 7.82825 25.7207 7.52338 25.7154 7.18418C25.691 5.53006 24.376 4.1618 22.7217 4.06934C19.2724 3.87685 16.6041 2.75212 14.3243 0.529917L14.3048 0.511378C13.5612 -0.170459 12.4394 -0.170459 11.6956 0.511378L11.6761 0.529917C9.39622 2.75212 6.72792 3.87685 3.27868 4.06956C1.62456 4.1618 0.309407 5.53006 0.284917 7.18441C0.279881 7.52132 0.270955 7.82619 0.257909 8.11641L0.256535 8.17066C0.189473 11.6879 0.10616 16.0652 1.57054 20.0384C2.37575 22.2233 3.59523 24.1225 5.19488 25.6837C7.01677 27.4617 9.40309 28.8732 12.2874 29.8789C12.3813 29.9116 12.4788 29.9382 12.5781 29.9581C12.7182 29.986 12.8592 30 13.0002 30C13.1412 30 13.2824 29.986 13.4222 29.9581C13.5216 29.9382 13.6198 29.9114 13.7141 29.8784C16.595 28.8709 18.9788 27.4587 20.7991 25.681C22.398 24.1193 23.6175 22.2196 24.4234 20.0343C25.8933 16.0492 25.8102 11.6636 25.7434 8.13976ZM12.9997 22.4769C8.87712 22.4769 5.52332 19.1231 5.52332 15.0005C5.52332 10.8779 8.87712 7.52407 12.9997 7.52407C17.1221 7.52407 20.4761 10.8779 20.4761 15.0005C20.4761 19.1231 17.1221 22.4769 12.9997 22.4769Z" fill="#027DB8"/>
                    </svg>
                    100% money back guarantee
                </div>
            </div>`
      );

      document.querySelectorAll('form #edit-payment-information input:not([type="hidden"],[type="checkbox"],[type="radio"])').forEach((item) => {
        item.addEventListener("input", () => {
          disabledBtnFun();
        });
      });

      document.querySelector(".btn_start_membership").addEventListener("click", (e) => {
        document.querySelector('[data-drupal-selector="edit-actions-next"]').click();
        pushDataLayer("exp_ch_pl_page_start_b", "Start membership button", "Button", loc);

        let invalidCard = setInterval(() => {
          if (document.querySelector(".recurly-hosted-field.recurly-hosted-field-invalid")) {
            clearInterval(invalidCard);
            window.scrollTo(0, 0);
          }
        });
      });

      let waitRadios = setInterval(() => {
        if (document.querySelectorAll(".form-item-payment-information-payment-method input").length > 1 && document.querySelector('[data-drupal-selector="edit-commerce-donation-pane-donation-toggler"]') != null) {
          clearInterval(waitRadios);
          setTimeout(() => {
            disabledBtnFun();
          }, 200);
        }
      });
      let waitFormEdit = setInterval(() => {
        if (document.querySelector(".address-book-edit-button") == null && document.querySelectorAll(".form-item-payment-information-payment-method").length > 1 && document.querySelectorAll('form #edit-payment-information input:not([type="hidden"],[type="checkbox"],[type="radio"])').length > 1) {
          clearInterval(waitFormEdit);

          document.querySelectorAll('form #edit-payment-information input:not([type="hidden"],[type="checkbox"],[type="radio"])').forEach((item) => {
            item.addEventListener("input", (e) => {
              setTimeout(() => {
                disabledBtnFun();
              }, 200);
            });
          });

          document.querySelector(".country").addEventListener("change", (e) => {
            setTimeout(() => {
              disabledBtnFun();
            }, 200);
          });
        }
      });

      pushDataLayer("exp_ch_pl_page_card_v", loc, "Visibility", loc);
    }
  }, 100);
}
init();

let setLabelCountry = setInterval(() => {
  if (document.querySelector(".form-item-payment-information-add-payment-method-billing-information-address-0-address-country-code") != null && document.querySelector(".form-item-payment-information-add-payment-method-billing-information-address-0-address-country-code > label") == null) {
    document.querySelector(".form-item-payment-information-add-payment-method-billing-information-address-0-address-country-code").insertAdjacentHTML("afterbegin", `<label class="form-required">Country</label>`);
  }
});

let setLabelState = setInterval(() => {
  if (document.querySelector(".form-item-payment-information-add-payment-method-billing-information-address-0-address-administrative-area") && document.querySelector(".form-item-payment-information-add-payment-method-billing-information-address-0-address-administrative-area > label") == null) {
    document.querySelector(".form-item-payment-information-add-payment-method-billing-information-address-0-address-administrative-area").insertAdjacentHTML("afterbegin", `<label class="form-required">State</label>`);
  }
});

let setLabelCountryPaypal = setInterval(() => {
  if (document.querySelector(".form-item-payment-information-billing-information-address-0-address-country-code") && document.querySelector(".form-item-payment-information-billing-information-address-0-address-country-code > label") == null) {
    document.querySelector(".form-item-payment-information-billing-information-address-0-address-country-code").insertAdjacentHTML("afterbegin", `<label class="form-required">Country</label>`);
  }
});

let setLabelAddressPaypal = setInterval(() => {
  if (document.querySelector(".form-item-payment-information-billing-information-select-address") && document.querySelector(".form-item-payment-information-billing-information-select-address > label") == null) {
    document.querySelector(".form-item-payment-information-billing-information-select-address").insertAdjacentHTML("afterbegin", `<label class="form-required">Select an address</label>`);
  }
});

let setLabelObls = setInterval(() => {
  if (document.querySelector(".form-item-payment-information-billing-information-address-0-address-administrative-area") && document.querySelector(".form-item-payment-information-billing-information-address-0-address-administrative-area > label") == null) {
    let label = document.querySelector(".form-item-payment-information-billing-information-address-0-address-administrative-area > .select2 label").innerText;
    document.querySelector(".form-item-payment-information-billing-information-address-0-address-administrative-area").insertAdjacentHTML("afterbegin", `<label class="form-required">${label}</label>`);
  }
});

let applyCoupon = setInterval(() => {
  if (document.querySelector('[data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"]') != null && document.querySelector(".field-email") == null && document.querySelector(".btn_got_coupon") == null) {
    init();
  }
}, 200);

//remove Message "DYWM Subscription, Yearly added to "
let findMessageSubscription = setInterval(() => {
  if (document.querySelector(".messages--status") != null && document.querySelector(".messages--status").innerHTML.includes("your cart")) {
    document.querySelector(".messages--status").remove();
  }
});

let disabledBtnFun = () => {
  let disabledBtn = setInterval(() => {
    if (document.querySelectorAll("form #edit-payment-information input") && document.querySelector('[data-drupal-selector="edit-actions-next"]') != null && document.querySelector(".btn_start_membership") != null) {
      error = false;
      error = document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-administrative-area"]') != null && document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-administrative-area"] + .select2 .select2-selection__rendered') != null && document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-administrative-area"] + .select2 .select2-selection__rendered').innerHTML.includes("Select");

      clearInterval(disabledBtn);

      let inputs = document.querySelectorAll('form #edit-payment-information input:not([type="hidden"],[type="checkbox"],[type="radio"],.address-line2)');
      let inputsAll = document.querySelectorAll("form input");

      let loc = "Card information";

      let selects = document.querySelectorAll("form .select2");
      selects.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopImmediatePropagation();
          let name = item.parentElement.querySelector("label").innerText.replace("*", "").toLowerCase();
          pushDataLayer("exp_ch_pl_page_select_" + name, e.currentTarget.closest(".form-item").querySelector("label").innerText, "Select", loc);
        });
      });

      inputsAll.forEach((item) => {
        item.addEventListener("click", (e) => {
          e.stopImmediatePropagation();
          let parent = e.currentTarget.parentElement;
          if (parent.querySelector("label")) {
            if (parent.closest('[data-drupal-selector="edit-commerce-donation-pane-field-gift-type"]')) {
              pushDataLayer("exp_ch_pl_page_sel_card", `Select Donation Type - ${parent.innerText}`, "Radio", loc);
            } else if (parent.closest('[data-drupal-selector="edit-commerce-donation-pane-field-donation-amount-0-donation-level"]')) {
              pushDataLayer("exp_ch_pl_page_amount_r", `Amount - ${parent.innerText}`, "Radio", loc);
            } else if (item.type != "checkbox") {
              pushDataLayer("exp_ch_pl_page_input_card", `Click on ${parent.querySelector("label").innerText}`, "Input", loc);
            }
          }
        });
      });

      if (error == false) {
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].value == "") {
            if (inputs[i].id.includes("edit-payment-information-add-payment-method-billing-information-address-0-address-given-name") || inputs[i].id.includes("edit-payment-information-add-payment-method-billing-information-address-0-address-family-name") || inputs[i].id.includes("edit-payment-information-add-payment-method-billing-information-address-0-address-address-line1") || inputs[i].id.includes("edit-payment-information-add-payment-method-billing-information-address-0-address-locality") || inputs[i].id.includes("edit-payment-information-add-payment-method-billing-information-address-0-address-postal-code") || inputs[i].classList.contains("locality") || inputs[i].classList.contains("postal-code")) {
              error = true;
            }
          }
        }
      }

      document.querySelector(".btn_start_membership").disabled = error;
      console.log("Start membership = " + error);
    }
  });
};
let optionMut = {
  childList: true,
  subtree: true,
};

let mut = new MutationObserver(function (muts) {
  if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")?.value !== "" && !document.querySelector(".saved_block") && window.location.pathname.includes("checkout/")) {
    mut.disconnect();
    init();
  }
  mut.observe(document, optionMut);

  //
  if (document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-country-code"]') != null) {
    mut.disconnect();

    disabledBtnFun();
  }
  mut.observe(document, optionMut);
  if (document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-administrative-area"]') != null) {
    mut.disconnect();

    error = document.querySelector('[data-drupal-selector="edit-payment-information-add-payment-method-billing-information-address-0-address-administrative-area"]').innerHTML.includes("Select");
    disabledBtnFun();
  }
  mut.observe(document, optionMut);
  if (document.querySelectorAll(".form-item-payment-information-payment-method ").length > 1 && document.querySelector('[data-drupal-selector="edit-commerce-donation-pane-donation-toggler"]') != null) {
    mut.disconnect();

    disabledBtnFun();
  }
  mut.observe(document, optionMut);

  if (clickApplyCoupon == false && document.querySelector('[data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"]') != null && document.querySelector('[data-drupal-selector="edit-sidebar-coupon-redemption-form-apply"]').nextElementSibling != null) {
    mut.disconnect();
    clickApplyCoupon = true;
    pushDataLayer("exp_ch_pl_page_apply", "Apply (Coupon)", "Button", "Card information");
  }
  mut.observe(document, optionMut);
  if (document.querySelectorAll("[data-drupal-messages]") && document.querySelector('[data-drupal-selector="edit-coupon-redemption"]') != null) {
    mut.disconnect();
    document.querySelectorAll("[data-drupal-messages]").forEach((item) => {
      if (item.innerHTML.includes("coupon code")) {
        document.querySelector('[data-drupal-selector="edit-coupon-redemption"]').after(item);
      }
    });
  }
  mut.observe(document, optionMut);

  // if (document.querySelector("#edit-sidebar-coupon-redemption-form-code")) {
  //   mut.disconnect();
  //   console.log(`object`);
  // }
  // mut.observe(document, optionMut);
});
mut.observe(document, optionMut);

let isClarify = setInterval(() => {
  if (typeof clarity == "function") {
    clearInterval(isClarify);
    clarity("set", "exp_trial", "variant_1");
  }
}, 100);

document.querySelector(".exp")?.remove();
