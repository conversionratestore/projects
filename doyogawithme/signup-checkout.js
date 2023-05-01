//login
// https://www.doyogawithme.com/yogi/login?destination=/checkout/23348/order_information
// https://www.doyogawithme.com/yogi/login?destination=/yogi/login
// https://www.doyogawithme.com/checkout/23406/login

//register
//https://www.doyogawithme.com/yogi/register


//checkout
//https://www.doyogawithme.com/checkout/23348/order_information

let dir = 'https://conversionratestore.github.io/projects/doyogawithme/img/';

let style = `
<style>
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
    transform: translateY(-50%);
}
.btn-back svg {
    margin-right: 12px;
}
.progressbar {
    margin-bottom: 30px;
    font-family: 'Manrope', sans-serif;
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
.progressbar .step.checked:before  {
    background: #027DB8;
}
.progressbar .step.active > div:before {
    background: #027DB8;
}
.progressbar .step.checked > div:before {
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
    padding: 42px 24px 0;
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
    margin-bottom: 6px;
}
.form-required:after {
    content: none;
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
    padding: 14px;
    color: #555555;
}
.social-auth.auth-link span {
    margin-left: 15px;
}
.social-auth__container {
    padding: 24px 0;
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
form input {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    border: 1px solid #E0E0E0;
    border-radius: 8px!important;
    padding: 12px 16px!important;
    outline: none!important;
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
.form-actions .button, #edit-login-returning-customer-submit {
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
}
#edit-login-returning-customer-submit {
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

.text-center {
    text-align: center;
}
.c-red {
    color: #FF0000;
}
</style>`

let headHTML = `
<div class="topbar">
    <a href="/" class="btn-back flex items-center">
        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.255198 7.39519C-0.0850662 7.72509 -0.0850662 8.27491 0.255198 8.60481L7.58979 15.7526C7.96786 16.0825 8.53497 16.0825 8.87524 15.7526L9.7448 14.9095C10.0851 14.5796 10.0851 14.0298 9.7448 13.6632L3.9225 7.98167L9.7448 2.33677C10.0851 1.97022 10.0851 1.42039 9.7448 1.09049L8.87524 0.247423C8.53497 -0.0824742 7.96786 -0.0824742 7.58979 0.247423L0.255198 7.39519Z" fill="#027DB8"/>
        </svg>
        <span>Back</span>
    </a>
    <div class="progressbar flex justify-center">
        <div class="step checked active"><div class="flex items-center" data-step="">Choose a plan</div></div>
        <div class="step active"><div class="flex items-center" data-step="2">Create your account</div></div>
        <div class="step"><div class="flex items-center" data-step="3">Payment</div></div>
    </div>
</div>`

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
</div>`

let logInGoogle = `
<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.06 11.2485C22.06 10.4685 21.99 9.71854 21.86 8.99854H11.5V13.2535H17.42C17.165 14.6285 16.39 15.7935 15.225 16.5735V19.3335H18.78C20.86 17.4185 22.06 14.5985 22.06 11.2485Z" fill="#4285F4"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4994 21.9998C14.4694 21.9998 16.9594 21.0148 18.7794 19.3348L15.2244 16.5748C14.2394 17.2348 12.9794 17.6248 11.4994 17.6248C8.63443 17.6248 6.20943 15.6898 5.34443 13.0898H1.66943V15.9398C3.47943 19.5348 7.19943 21.9998 11.4994 21.9998Z" fill="#34A853"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.345 13.0901C5.125 12.4301 5 11.7251 5 11.0001C5 10.2751 5.125 9.57006 5.345 8.91006V6.06006H1.67C0.925 7.54506 0.5 9.22506 0.5 11.0001C0.5 12.7751 0.925 14.4551 1.67 15.9401L5.345 13.0901Z" fill="#FBBC05"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4994 4.37451C13.1144 4.37451 14.5644 4.92951 15.7044 6.01951L18.8594 2.86451C16.9544 1.08951 14.4644 -0.000488281 11.4994 -0.000488281C7.19943 -0.000488281 3.47943 2.46451 1.66943 6.05951L5.34443 8.90951C6.20943 6.30951 8.63443 4.37451 11.4994 4.37451Z" fill="#EA4335"/>
</svg>
<span>Login with Google</span>`

let init = setInterval(() => {
    if (document.querySelector('.o-page--simpleCard .o-page__mainContentWrapper') != null && document.querySelector('form') != null) {
        clearInterval(init)

        document.body.insertAdjacentHTML('afterbegin', style) //add style
        document.querySelector('.o-page--simpleCard .o-page__mainContentWrapper').insertAdjacentHTML('afterbegin', headHTML) //add topbar

        if (window.location.href.includes('/yogi/login') || window.location.href.includes('/yogi/register')) {
            document.querySelector('form h1').after(document.querySelector('.social-auth__container'))
            document.querySelector('form h1').after(document.querySelector('.social-auth__networks'))
            document.querySelector('.social-auth__networks a').innerHTML = logInGoogle;
        }
        if (window.location.href.includes('/yogi/login')) {
           
            document.querySelector('label[for="edit-name"]').innerHTML = 'Email address';
            document.querySelector('#edit-name').placeholder = 'Email';
            document.querySelector('#edit-pass').placeholder = 'Password';
            document.querySelector('form [href="/yogi/password"]').insertAdjacentHTML('beforebegin', rememberMeHTML)

            document.querySelector('.remember-me').after(document.querySelector('form [href="/yogi/password"]'))
            document.querySelector('form [href="/yogi/password"]').innerHTML = 'Forgot Password?';
            document.querySelector('.form-actions .button').insertAdjacentHTML('afterend', `<p class="text-center singup">Don’t have an account? <a href="/yogi/register">Sing up</a></p>`)

            document.querySelector('.form-actions .button').addEventListener('click', () => {
                lsRememberMe('.remember-me input', '#edit-name')
            })
        }
        if (window.location.href.includes('/checkout') && window.location.href.includes('/login')) {
            document.body.insertAdjacentHTML('afterbegin',`
            <style>
                .messages--status, .c-jsTabs__tabList, #id_second {
                    display: none;
                }
                #id_first h2 {
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
            </style>`)

            document.querySelector('#id_first h2').insertAdjacentHTML('afterend', `
            <div class="social-auth__networks">
                <a class="social-auth auth-link" href="/yogi/login/google?destination=%2Fcheckout%2F23414%2Flogin">${logInGoogle}</a>
            </div>
            <div class="social-auth__container">
                <div class="social-auth__divider">
                    <span class="social-auth__divider__text">
                    or
                    </span>
                </div>
            </div>`)
           
            document.querySelector('label[for="edit-login-returning-customer-name"]').innerHTML = 'Email address';
            document.querySelector('#edit-login-returning-customer-name').placeholder = 'Email';
            document.querySelector('#edit-login-returning-customer-password').placeholder = 'Password';
            document.querySelector('form #edit-login-returning-customer-submit').insertAdjacentHTML('beforebegin', rememberMeHTML)

            document.querySelector('.remember-me').after(document.querySelector('#edit-login-returning-customer-forgot-password'))

            document.querySelector('#edit-login-returning-customer-submit').insertAdjacentHTML('afterend', `<p class="text-center singup">Don’t have an account? <a href="#">Sing up</a></p>`)


            
            document.querySelector('#id_first .singup a').addEventListener('click', (e) => {
                document.querySelector('#id_first').style.display = 'none!important'
                document.querySelector('#id_second').style.display = 'block!important'
            })
            document.querySelector('#edit-login-returning-customer-submit').addEventListener('click', () => {
                lsRememberMe('.remember-me input', '#edit-name')
            })
        }
        if (window.location.href.includes('/yogi/register') || window.location.href.includes('yogi/intake-survey')) {
            document.body.insertAdjacentHTML('afterbegin', `
            <style>
                #main-content {
                    min-height: auto!important;
                }
                .password-suggestions, .user-register-form .ac-newsletter-reg-suffix, .user-register-form .form-type-checkbox, header.o-page__header, .js-form-item-pass-pass2, .user-register-form .password-strength__title, .user-register-form .password-strength {
                    display: none!important;
                }
                .header-logo {
                    border-bottom: 1px solid #E0E0E0;
                    padding: 8px 20px;
                    width: 100%;
                    height: fit-content;
                }
                .header-logo img {
                    height: 52px;
                }
                .check-accept {
                    margin-bottom: 16px;
                }
                
            </style>`)
            document.querySelector('.o-page__mainContentWrapper').insertAdjacentHTML('beforebegin',`
            <div class="header-logo text-center"> <a href="/" class="logo"><img src="/themes/custom/lotus/logo.png" alt="image"></a></div>`);

        }
    
        if (window.location.href.includes('/yogi/register')) {
            document.querySelector('form h1').innerHTML = 'Create your account';

            document.querySelector('#edit-pass').insertAdjacentHTML('afterend',`
                <label class="check-accept flex items-center">
                    <input type="checkbox" style="display: none;" >
                    <span class="check"></span>
                    <span>Accept <a href="/legal">Terms & Conditions</a> of Use & <a href="/privacy">Privacy Policy</a><span class="c-red">*</span></span>
                </label>
                <label class="check-accept flex ">
                    <input type="checkbox" style="display: none;" >
                    <span class="check"></span>
                    <span>Subscribe to our newsletter highlighting new classes, blog articles, programs and challenges. No spam - we promise!</span>
                </label>`)

            document.querySelector('.form-actions .button').insertAdjacentHTML('afterend', `<p class="text-center singup">Already have an account? <a href="/yogi/login">Log in</a></p>`)

            //passwords
            document.querySelector('#edit-pass-pass1').addEventListener('input', (e) => {
                document.querySelector('#edit-pass-pass2').value = e.target.value;
            })

            //checkbox
            document.querySelectorAll('.check-accept input').forEach((item, index) => {
                item.addEventListener('change', (e) => {
                    if (index == 0) {
                        if (item.checked) {
                            document.querySelector('#edit-extras-1').checked = true
                            document.querySelector('#edit-legal-accept').checked = true
                            item.nextElementSibling.style = '';
                        } else {
                            document.querySelector('#edit-extras-1').checked = false
                            document.querySelector('#edit-legal-accept').checked = false
                        }
                    }

                    if (index == 1) {
                        if (item.checked) {
                            document.querySelector('#edit-field-ac-newsletter-reg-value').checked = true
                        } else {
                            document.querySelector('#edit-field-ac-newsletter-reg-value').checked = false
                        }
                    }
                })
            })

            document.querySelector('#edit-actions').addEventListener('click', (e) => {
                if (!document.querySelectorAll('.check-accept input')[0].checked) {
                    document.querySelectorAll('.check-accept input')[0].nextElementSibling.style = 'border-color: #FF0000'
                } else {
                    document.querySelectorAll('.check-accept input')[0].nextElementSibling.style = '';
                }

                if (document.querySelector('.password-strength__indicator.is-weak') != null) {
                    document.querySelector('.password-strength').style = 'dusplay: block!important'
                } else {
                    document.querySelector('.password-strength').style = ''
                }
               
            })
        }

        if (window.location.href.includes('yogi/intake-survey')) {
            document.body.insertAdjacentHTML('afterbegin',`<style>
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
                }
                .messages--status svg {
                    margin-right: 8px;
                }
                .path-yogi .block-system-main-block {
                    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
                    border-radius: 0px 0px 12px 12px;
                }
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
                input[type="checkbox"], input[type="radio"] {
                    display: none;
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
                input[type="checkbox"]:checked ~ label:before {
                    background: #027DB8 url(${dir}checked.svg) no-repeat center / 12px 10px;
                    border-color: #027DB8;
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
                .profile-student-form .form-actions {
                    padding-top: 2px;
                }
            </style>`)

            if (document.querySelector('.messages--status') != null) {
                document.querySelector('.messages--status').innerHTML = `
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.42188 11.7644C5.73438 12.0785 6.26562 12.0785 6.57812 11.7644L15.7656 2.5288C16.0781 2.21466 16.0781 1.68063 15.7656 1.36649L14.6406 0.235602C14.3281 -0.078534 13.8281 -0.078534 13.5156 0.235602L6.01562 7.77487L2.48438 4.25654C2.17188 3.94241 1.67188 3.94241 1.35938 4.25654L0.234375 5.38743C-0.078125 5.70157 -0.078125 6.2356 0.234375 6.54974L5.42188 11.7644Z" fill="#017922"/>
                    </svg>
                    <span>Registration successful. You are now logged in.</span>
                `
            }
        }
    
        if (window.location.href.includes('/checkout') && !window.location.href.includes('/login')) {
            document.querySelector('.progressbar .step:nth-child(2)').classList.add('checked')
            document.querySelector('.progressbar .step:last-child').classList.add('active')
        }
    }
});
