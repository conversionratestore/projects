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
.messages--status {
    display: none!important;
}
.o-page__mainContentWrapper {
    display: block;
}
.o-page--simpleCard .o-page__mainContent {
    min-width: auto;
    width: 494px;
    margin: 0 auto;
    height: fit-content;
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

let init = setInterval(() => {
    if (document.querySelector('.o-page--simpleCard .o-page__mainContentWrapper') != null) {
        clearInterval(init)

        document.body.insertAdjacentHTML('afterbegin', style) //add style
        document.querySelector('.o-page--simpleCard .o-page__mainContentWrapper').insertAdjacentHTML('afterbegin', headHTML) //add topbar

        if (window.location.href.includes('/yogi/login')) {
            
        }
    
        if (window.location.href.includes('/yogi/register')) {
       
            document.body.insertAdjacentHTML('afterbegin', `
            <style>
                header.o-page__header {
                    display: none;
                }
            </style>`)
        }
    
        if (window.location.href.includes('/checkout') && !window.location.href.includes('/login')) {
            document.querySelector('.progressbar .step:nth-child(2)').classList.add('checked')
            document.querySelector('.progressbar .step:last-child').classList.add('active')
        }
    }
});
