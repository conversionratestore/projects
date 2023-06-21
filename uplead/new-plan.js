
// toggle active
let toggleActive = (selector) => selector.classList.toggle('active')

let styleBase = `
<style>
/* base */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
}
.fs-17 {
    font-size: 17px!important;
}
h1, h2, h3, h4, h5 {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #000000;
    line-height: 27px;
}
h1, h2 {
    text-transform: capitalize;
}
h1 {
    font-size: 48px;
    line-height: 58px;
}
h2 {
    font-size: 40px;
    line-height: 46px;
}
h4 {
    font-size: 22px;
}
h5 {
    font-size: 20px;
}
p {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #5C7882;
    margin: 0;
}
b {
    font-weight: 700;
}
/* form */
.steps > div {
    background: #D9D9D9;
    border: 1px solid #D9D9D9;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    border-radius: 50%;
    margin-left: 7px;
    width: 30px;
    height: 30px;
}
.steps > div.active {
    background: #00A2BB;
    border-color: #00A2BB;
}
.form_contact-sales label {
    font-size: 18px;
    line-height: 30px;
    color: #69727A;
    margin-top: 18px;
    display: block;
}
.form_contact-sales input {
    background: #FFFFFF;
    border-bottom: 1px solid #F1F3FA;
    padding: 6px 12px;
    color: #48A0B8;
    font-size: 18px;
    line-height: 27px;
    border: none;
    width: 100%;
    margin: 4px 0;
}
.block_call {
    background: #E4F9FD;
    border-radius: 5px;
    padding: 12px 21px;
    font-family: 'Gilroy', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    margin: 30px auto;
    min-width: 402px;
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
/* select */

.select-current {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #69727A;
    background: #FFFFFF;
    border-bottom: 1px solid #F1F3FA;
    padding: 6px 12px;
    cursor: pointer;
    margin: 4px 0;
}
.select-drop {
    /* position: absolute;
    left: 0;
    top: calc(100% + 4px); */
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #DEE8EB;
    border-radius: 8px;
    z-index: 3;
    display: none;
    list-style-type: none;
    font-size: 14px;
    line-height: 17px;
    color: #69727A;
    margin: 0;
}
.select-drop li {
    padding: 8px 24px;
    cursor: pointer;
}
.select-drop li.active {
    color: #00A2BB;
}
.select.active .select-current svg {
    transform: scaleY(-1);
}
.select.active .select-current {
    color: #48A0B8;
}
.select.active .select-drop{
    display: block;
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
.line-text {
    border-bottom: 13px solid #9ED9E5;
    display: inline-block;
    line-height: 0.3;
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
</style>`;

let htmlForm = `
<div class="form_contact-sales">
    <div class="form_container">
        <div class="flex-between-center">
            <h4>Contact Sales</h4>
            <div class="steps d-flex">
                <div class="active">1</div>
                <div class="">2</div>
            </div>
        </div>
        <div class="form_one">
            <div class="relative">
                <label>First Name*</label>
                <input type="text" name="first-name">
                <p class="error-message">First Name cannot be empty</p>
            </div>
            <div class="relative">
                <label>Last Name*</label>
                <input type="text" name="last-name">
                <p class="error-message">Last Name cannot be empty</p>
            </div>
            <div class="relative">
                <label>Work Email Address*</label>
                <input type="text" name="email">
                <p class="error-message"></p>
            </div>
            
            <label>Phone number</label>
            <input type="number">
            <div class="relative">
                <label>Number of prospects you would like to reach monthly?*</label>
                <div class="select relative">
                    <div class="select-current flex-between-center">
                        <span data-current="" >Number of prospects</span>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.723 2.08525L7.51715 8.29722C7.44327 8.37096 7.36324 8.42331 7.27704 8.45427C7.19085 8.48524 7.0985 8.50048 7 8.49999C6.90149 8.49999 6.80915 8.48475 6.72295 8.45427C6.63676 8.4238 6.55673 8.37145 6.48285 8.29722L0.258575 2.08525C0.0861917 1.91321 0 1.69815 0 1.44009C0 1.18203 0.0923483 0.960829 0.277045 0.776497C0.461741 0.592165 0.677221 0.5 0.923483 0.5C1.16974 0.5 1.38522 0.592165 1.56992 0.776497L7 6.19584L12.4301 0.776497C12.6025 0.604455 12.815 0.518433 13.0677 0.518433C13.3203 0.518433 13.5388 0.610599 13.723 0.79493C13.9077 0.979261 14 1.19431 14 1.44009C14 1.68587 13.9077 1.90092 13.723 2.08525Z" fill="#AAAAAA"/>
                        </svg>
                    </div>
                    <ul class="select-drop">
                        <li>Up to 170</li>
                        <li>170-399</li>
                        <li>400-999</li>
                        <li>1000+</li>
                    </ul>
                </div>
                <p class="error-message">Number of prospects cannot be empty</p>
            </div>
            <button type="button" class="btn_submit">Submit</button>
        
        </div>
        <div class="block_calendly"></div>
        <div class="block_call" style="display: none;">No suitable times for you? Call us (800) 493-4084</div>
    </div>
</div>`;

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
    .form_contact-sales {
        max-width: 574px;
        background: #01A2BC;
        padding: 22px 54px;
    }
    .form_contact-sales .btn_submit {
        margin-top: 10px;
    }
    .form_container {
        background: #F3F6F8;
        border: 1px solid #69727A;
        border-radius: 8px;
        padding: 24px;
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
        color: #091D30;
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
        font-family: 'Gilroy', sans-serif;
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
        font-family: "Gilroy", Sans-serif;
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
            'titleSpan': 'For entrepreneurs who need to find ideal prospects within a chosen niche',
            'nameBtn': 'Try For Free',
            'info': `
                <p>7 days with 5 <span class="underline">credits</span></p>
                <p>Then $99/mo, with <span class="fs-17">170 <span class="underline">Credits</span></span> Monthly</p>
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
                <p>Team account up to <span class="c-blue-dark">5 seats</span></p>
                <p>Custom number of <span class="c-blue-dark underline">Credits</span></p>
            `,
            'includes': [
                'Everything in Starter and:','Up to 5 Users Seats','Intent Data','Advanced Search Filters',
                'Email Pattern Intel','Suppression List Uploads'
            ]
        },
        {
            'top': 'For Big Teams with 5+ users',
            'title': 'Enterprise',
            'titleSpan': 'Made for sales driven organisations that need unlimited customisation options ',
            'nameBtn': 'Contact Sales',
            'info': `
                <p class="c-blue-dark">Custom users seats</p>
                <p>Custom <span class="c-blue-dark">team’s accounts</span></p>
                <p>Custom number of <span class="c-blue-dark underline">Credits</span></p>
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
                                <path d="M10.8158 0.601562L4.01735 7.40004L1.18466 4.56734" stroke="${title == 'Starter'? '#00A2BB': '#fff'}" stroke-miterlimit="10"/>
                            </svg>` : ''
                        }
                        ${includes[i]}
                    </li>`
            
        }
        return `
            <div class="item-plan ${selected} ${active}">
                <div class="item-plan_top text-center">${topText}</div>
                <div class="item-plan_container">
                    <h2 class="item-plan_title">${title}</h2>
                    <p class="item-plan_span">${spanText}</p>
                    <a href="#" class="btn-plan">${btnName}</a>
                    <div class="item-plan_info">${info}</div>
                    <ul class="item-plan_includes"> ${list}</ul>
                    <a href="#" class="btn-plan">${btnName}</a>
                    <a href="Complete Feature List" class="btn-show-list flex-center">Show Complete Feature List 
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.27978 14.2998L0.328735 7.2998L1.54517 6.05293L6.4109 10.9529V0.299805H8.14867V10.9529L13.0144 6.05293L14.2308 7.2998L7.27978 14.2998Z" fill="${title == 'Starter'? '#fff': '#091D30'}"/>
                        </svg>
                    </a>
                </div>
            </div>
        `
    }
    
    let dataPopup = [
        {
            'title': 'Achieve 10X ROI by Dominating Complex Sales Cycles',
            'titleSpan': 'Discover how UpLead can revolutionize your sales efforts',
            'list': {
                'Limitless:': ' Tailor your sales pipeline to capture leads from the ideal customer profile with unlimited prospects and user seats',
                'Advanced Search & Intent Data:': 'Identify prospects actively seeking solutions similar to yours with powerful filters for personalised sales',
                'Accurate Contact Data:': 'Ensure up-to-date and accurate contact information for meaningful connections',
                'Dedicated Support and Mentoring:': 'Receive ongoing guidance to optimise sales efforts'
            }
        },
        {
            'title': 'Boost Your Sales Pipeline for Enhanced Performance',
            'titleSpan': 'See what UpLead can do for you team',
            'list': {
                'Team Account:': 'Up to 5 seats and a custom number of prospects to meet the goals of your sales team',
                'Advanced Search & Intent Data:': 'Identify prospects actively seeking solutions similar to yours with powerful filters for personalised sales',
                'Enhance Contact Data:': 'Gain deeper insights into prospects with enriched information',
                'Seamless Integrations:': 'Integrate UpLead effortlessly with your CRM for streamlined workflows'
            }
        }
    ]
     
    let htmlPopup = `
    <style>
    .popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 999999;
        background-color: rgba(0,0,0,0.6);
        display: flex;
        padding: 10px;
        overflow-y: auto;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
    }
    .popup.active {
        opacity: 1;
        pointer-events: auto;
    }
    .popup.active .popup_container {
        transform: translateY(0);
    }
    .popup_container {
        margin: auto;
        max-width: 1290px;
        width: 100%;
        padding: 95px 90px 15px;
        background: #F8FBFB;
        position: relative;
        transform: translateY(100px);
        transition: all 0.2s ease;
    }
    .btn-close {
        position: absolute;
        padding: 15px;
        top: 40px;
        right: 40px;
        cursor: pointer;
    }
    .popup .left {
        width: calc(100% - 446px);
        padding-right: 105px;
    }
    .popup h3 {
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        text-transform: capitalize;
        color: #091D30;
        margin-bottom: 14px;
        max-width: 500px;
    }
    .popup_container p:not(.error-message) {
        font-family: 'Gilroy', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
        color: #091D30;
        margin-bottom: 22px;
    }
    .popup_container ul:not(.select-drop) {
        padding-left: 20px;
        font-size: 20px;
        line-height: 26px;
        color: #69727A;
        margin: 0 0 22px;
    }
    .popup_container ul:not(.select-drop) li {
        margin-bottom: 15px;
    }
    .popup .left img {
        max-width: 400px;
        margin-top: 22px;
        display: block;
    }
    .popup .form_contact-sales {
        width: 446px;
    }
    .popup .form_container {
        border: 1px solid #D6D6D6;
        border-radius: 8px;
        padding: 26px 16px;
    }
    .popup .form_contact-sales img+p {
        font-size: 16px;
        line-height: 19px;
        color: #A4A4A4;
        margin: 30px 0 30px 15px;
    }
    .popup .btn_submit {
        margin-top: 10px;
    }
    </style>
    <div class="popup">
        <div class="popup_container d-flex ">
            <svg class="btn-close" width="48" height="48" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 17.5L0 15.75L7 8.75L0 1.75L1.75 0L8.75 7L15.75 0L17.5 1.75L10.5 8.75L17.5 15.75L15.75 17.5L8.75 10.5L1.75 17.5Z" fill="#69727A"/>
            </svg>
                
            <div class="left">
                <div class="left-info"></div>
                <p>We'll also help you narrow down on the most cost-effective solutions for your unique & specific needs.</p>
                <img src="../img/medal-64.svg" alt="medal image">
                <img src="https://www.uplead.com/wp-content/uploads/2021/01/good-company-logos-desktop.svg" alt="logos">
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
                        .elementor-element-5e5a4a6, .elementor-element-437cc49, .elementor-element-b1aa2aa, .elementor-element-430cf234  {
                            display: none;
                        }
                        /* pricing-section */
                        .pricing-section {
                            max-width: 1030px;
                            margin: 30px auto;
                        }
                        .pricing-section h1 {
                            font-family: 'Inter', sans-serif;
                            font-style: normal;
                            font-weight: 800;
                            font-size: 39px;
                            line-height: 50px;
                            text-transform: capitalize;
                            color: #091D30;
                            margin-bottom: 12px;
                        }
                        .pricing-section > p {
                            font-weight: 500;
                            font-size: 21px;
                            line-height: 41px;
                            color: #69727A;
                        }
                    
                    </style>
                    
                    <section class="pricing-section">
                        <h1 class="text-center">Smash Sales Targets and ensure maximum ROI</h1>
                        <p class="text-center">Reach millions of decision makers and their teams.</p>
                        <div class="d-flex flex-wrap plans justify-between"></div>
                    </section>
                    ${htmlPopup}
                `)
            }
            if (window.location.href.includes('https://app.uplead.com/plans')) {
                document.querySelector('.accountPlans__plans-list').innerHTML = '';
                document.querySelector('.accountPlans__plans-list').classList.add('plans', 'd-flex', 'flex-wrap', 'justify-between');
                document.body.insertAdjacentHTML('beforeend', htmlPopup)
            }

            document.body.insertAdjacentHTML('afterbegin',`
            
            <style>
            .accountPlans__monthlyPlans-link {
                display: none;
            }
            .item-plan {
                margin: 19px 0;
                max-width: 302px;
                width: 100%;
            }
            .item-plan_top {
                background: #D9D9D9;
                border-radius: 10px;
                font-family: 'Gilroy', sans-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 42px;
            }
            .item-plan .item-plan_container {
                border-radius: 16px;
                background: #00A2BB;
                box-shadow: 0px 8px 24px rgba(1, 141, 163, 0.19);
                padding: 31px 20px 19px;
            }
            .item-plan.selected  {
                pointer-events: none;
            }
            .item-plan.active .item-plan_container * {
                color: #fff;
            }
            .item-plan:not(.active) .item-plan_container {
                border: 1px solid #DEE8EB;
                background: #fff;
                box-shadow: none;
                color: #091D30;
            }

            .item-plan_title {
                font-weight: 800;
                font-size: 22px;
                line-height: 31px;
                margin-bottom: 15px;
            }
            .item-plan_span {
                font-size: 12px;
                line-height: 22px;
                margin-bottom: 36px;
                color: #69727A;
            }
            .btn-plan {
                font-weight: 700;
                font-size: 16px;
                line-height: 51px;
                text-align: center;
                background: #FFFFFF;
                border: 1px solid #00A2BB;
                border-radius: 100px;
                color: #00A2BB!important;
                margin-bottom: 12px;
                display: block;
                text-decoration-line: none;
            }
            .item-plan.active .item-plan_container .btn-plan {
                border: 1px solid #FFFFFF;
            }
            .item-plan_info {
                padding-bottom: 20px;
                margin-bottom: 27px;
                border-bottom: 1px solid #75C9D7;
                min-height: 87px;
            }
            .item-plan_info p {
                font-family: 'Gilroy', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                color: #959595;
            }
            .item-plan_includes {
                list-style-type: none;
                font-size: 15px;
                line-height: 22px;
                min-height: 218px;
                margin: 0 0 24px 0;
            }
            .item-plan_includes li:not(:first-child) {
                color: #69727A;
                margin-bottom: 9px;
            }
            .item-plan_includes li svg {
                background: #00A2BB;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                margin-right: 15px;
                padding: 6px 5px;
                flex-shrink: 0;
            }
            .item-plan_includes li:first-child {
                font-weight: 800;
                margin-bottom: 18px;
            }
            .item-plan.active .item-plan_includes li svg {
                background: #fff;
            }
            .btn-show-list {
                font-size: 15px;
                line-height: 20px;
            }
            .btn-show-list svg {
                margin-left: 10px;
            }
            .item-plan:not(.active) .btn-show-list {
                color: #091D30;
            }
            </style>`)
            for (let i = 0; i < plansObj.length; i++) {
                let active = ''
                let selected = '';
                if (window.location.href == 'https://www.uplead.com/pricing/') {
                    active = i == 0 ? 'active' : '';
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
                document.querySelectorAll('.item-plan')[i].querySelectorAll('.btn-plan').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.preventDefault()

                        if (i != 0) {
                            document.querySelector('.left-info').innerHTML = `
                                <h3>${dataPopup[i - 1].title}</h3>
                                <p class="fw-semi">${dataPopup[i - 1].titleSpan}</p>
                                <ul></ul>`
                                

                            let list = dataPopup[i - 1].list;
                            for (const key in list) {
                                document.querySelector('.left-info ul').insertAdjacentHTML('beforeend',`
                                <li><b>${key}</b> ${list[key]}</li>`)
                            }
                            toggleActive(document.querySelector('.popup'))
                        }
                    })
                })
                
                document.querySelector('.btn-close').addEventListener('click', (e) => {
                    toggleActive(document.querySelector('.popup'))
                })
                
                document.addEventListener('click', (e) => {
                    if (document.querySelector('.popup.active') != null && !e.target.closest('.popup_container') && !e.target.classList.contains('btn-plan')) {
                        toggleActive(document.querySelector('.popup'))
                    }
                })
            }
        }
    })
    
    //Complete Feature List section
    let dataListObj = {
        'Plan Details': [
            ['Amount of Credits','170 credits/ month','Custom','Custom'],
            ['Amount of Users Seats','1 user','Up to 5 users','Custom'],
            ['Additional Credits','$0.6/ credit','Custom','Custom']
        ],
        'Business data': [
            ['Verified Emails','','',''],
            ['Verified Phone Numbers','','',''],
            ['Mobile Direct Dials','','','']
        ],
        'Contacts Management': [
            ['Data Enhancement','','',''],
            ['Technographics','','',''],
            ['Data Enrichment','empty','',''],
            ['Intent Data','empty','','']
        ],
        'Competitor Analysis': [
            ['Competitor Intelligence','','',''],
        ],
        'Prospecting Platform': [
            ['Advanced Search Filters','empty','',''],
            ['Suppression List Uploads','empty','',''],
            ['Email Pattern Intel','empty','',''],
            ['All Search Filters','empty','empty','']
        ],
        'CRM Integrations ': [
            ['Salesforce','','',''],
            ['HubSpot','','',''],
            ['Pipedrive','','','']
        ],
        'UpLead Extension': [
            ['Chrome','','','']
        ],
        'News': [
            ['Company News','','','']
        ],
        'API': [
            ['Enrichment API','empty','','']
            ['Prospector pro API','empty','empty','']
            ['Full API Access','empty','empty','']
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
        padding: 70px 20px;
        max-width: 1180px;
        margin: 0 auto;
    }
    .feature-list-section h2 {
        font-size: 38px;
        line-height: 68px;
        color: #091D30;
        margin-bottom: 110px;
    }
    .feature-list-section * {
        color: #000000;
    }
    .sticky-head_item {
        width: 170px;
        margin: 0 0 0 16px!important;
        text-align: center;
    }
    .sticky-head .sticky-head_item {
        background: #F3F6F8;
        border-radius: 20px;
        padding: 12px 5px 5px;
        display: grid;
    }
    .sticky-head_item .tab {
        background: #FFFFFF;
        border: 1px solid #FFFFFF;
        border-radius: 100px;
        font-weight: 700;
        font-size: 14px;
        line-height: 48px;
        color: #00A2BB;
        margin-top: auto;
    }
    .sticky-head {
        position: sticky;
        top: 0;
        padding-bottom: 4px;
    }
    .feature-list [data-name] {
        background: rgba(1, 141, 163, 0.19);
        padding: 12px 10px;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
    }
    .feature-list div:not([data-name]) {
        padding: 12px 0;
        font-size: 18px;
        line-height: 21px;
    }
    </style>
    <section class="feature-list-section">
        <h2 class="text-center">Complete Feature List</h2>
        <div class="d-flex justify-end sticky-head">
            <div class="sticky-head_item">
                <p class="fw-extrabold">Starter</p>
                <p>$99/ mo</p>
                <p>billed annually</p> 
                <p class="tab">Start Free 7 Day Trial</p>
            </div>
            <div class="sticky-head_item">
                <p class="fw-extrabold">Professional</p>
                <p class="tab">Book a Demo</p>
            </div>
            <div class="sticky-head_item">
                <p class="fw-extrabold">Enterprise</p>
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

        if (document.querySelector('.feature-list')) {
            clearInterval(list)
            for (const key in dataListObj) {
                document.querySelector('.feature-list').insertAdjacentHTML('beforeend',`<div data-name="${key}">${key}</div>`)

                let details = dataListObj[key]

                for (let i = 0; i < details.length; i++) {
                    document.querySelector(`[data-name="${key}"]`).insertAdjacentHTML('afterend',`
                    <div class="d-flex">
                        <p class="mr-auto">${details[i][0]}</p>
                        <p class="sticky-head_item">${details[i][1] == '' ? checkIcon : details[i][1] != 'empty' ? details[i][1] : ''}</p>
                        <p class="sticky-head_item">${details[i][2] == '' ? checkIcon : details[i][2] != 'empty' ? details[i][2] : ''}</p>
                        <p class="sticky-head_item">${details[i][3] == '' ? checkIcon : details[i][3] != 'empty' ? details[i][3] : ''}</p>
                    </div>`)
                    
                }
            }
        }
    })
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
//submit form
let submitForm = setInterval(() => {
    if (document.querySelector('.form_contact-sales .btn_submit')) {
        clearInterval(submitForm)

        //add calendly script
        let scriptCalendly = document.createElement('script');
        scriptCalendly.type = 'text/javascript';
        scriptCalendly.async = true;
        scriptCalendly.src = 'https://assets.calendly.com/assets/external/widget.js';
        document.body.appendChild(scriptCalendly)
        
        //select
        let select= document.querySelector('.select'),
            selectCurrent = document.querySelector('.select-current span');
        
        select.addEventListener('click', (e) => toggleActive(e.currentTarget))
        
        select.querySelectorAll('.select-drop li').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (select.querySelector('.select-drop li.active')) {
                    select.querySelector('.select-drop li.active').classList.remove('active');
                }
                toggleActive(e.currentTarget);
                item.classList.add('active');
                selectCurrent.dataset.current = index;
                selectCurrent.innerHTML = item.innerHTML;
            })
        })
        
        
        let inputFirstName = document.querySelector('[name="first-name"]'),
            inputEmail = document.querySelector('[name="email"]');
        
        //submit
        document.querySelector('.btn_submit').addEventListener('click', (e) => {
            document.querySelectorAll('.form_one [name]').forEach((element, index) => {
                if (element.value == '' || element.value.length < 2) {
                    element.parentElement.classList.add('error')
                } else {
                    element.parentElement.classList.remove('error')
                }
            })
        
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
        
            if (selectCurrent.dataset.current == '') {
                select.parentElement.classList.add('error')
            } else {
                select.parentElement.classList.remove('error')
            }
            if (document.querySelector('.error') == null) {
        
                document.querySelector('.steps .active').classList.remove('active')
                document.querySelectorAll('.steps > div')[1].classList.add('active')
            
                document.querySelector('.form_one').style.display = 'none';
                document.querySelector('.block_call').style = '';
                document.querySelector('.block_calendly').style = `position:initial; opacity:1;pointer-events:auto;height:540px;margin-top:16px`;
                document.querySelector('.form_contact-sales').style = 'padding: 22px 40px';
        
                window.Calendly.initInlineWidget({
                    url: `https://calendly.com/upleadhq/phone-call/?name=${inputFirstName.value}&email=${inputEmail.value}&hide_event_type_details=1&hide_gdpr_banner=1`,
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