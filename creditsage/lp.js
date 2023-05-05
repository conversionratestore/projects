let dir = `https://conversionratestore.github.io/projects/creditsage/img/`;

let styles = `
<style>
    .inactive-popup, .inactive-popup-content_close {
        display: none!important;
    }
    h2, h4 {
        font-family: 'Circe';
        font-style: normal;
        font-weight: 700;
        margin: 0;
    }
    h2 {
        font-size: 28px;
        line-height: 32px;
        color: #1E2F44;
        margin: 0 0 12px 0;
    }
    h4 {
        font-size: 16px;
        line-height: 22px;
        color: #1E2F44;
    }

    ul {
        padding: 0!important;
        list-style-type: none;
    }
    ul li {
        font-weight: 700;
        margin-bottom: 8px;
        position: relative;
        padding-left: 10px;
    }
    ul li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        border-radius: 50%;
        width: 4px;
        height: 4px;
        background-color: #2DAF6B;
    }
    .rich-templete h2 {
        font-size: 16px;
        line-height: 22px;   
        color: #1E2F44;   
    }
    .rich-templete p {
        line-height: 22px;
    }
    .rich-templete h2:first-child {
        font-size: 28px;
        line-height: 32px;
    }
    .tustpilot-wrp.tustpilot-wrp_hero {
        display: none;
    }
    .h1-small {
        font-weight: 700;
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 12px;
    }
    .sct.sct_template-hero {
        padding: 30px 0;
    }
    .rich-templete.rich-templete_hero ul {
        margin: 0 0 25px 0!important;
    }
    .rich-templete.rich-templete_hero li {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 14px;
        padding-left: 24px!important;
        font-weight: 400;
    }
    .rich-templete.rich-templete_hero ul li:before {
        width: 16px!important;
        height: 16px!important;
        margin-top: 0!important;
        background-color: transparent;
        top: 3px;
    }
    .rich-templete_transtpilot img {
        max-width: 244px;
        height: fit-content;
        margin: 0;
    }
    .rich-templete_transtpilot > img {
        width: 38.55px;
        height: 51.62px;  
        margin-right: 8px;
    }
    .btn-description.btn-description_cta-hero {
        display: none;
    }
    .ic {
        width: 22px;
        height: 22px;
    }
    .sct_template-hero .btn {
        margin-top: 4px;
    }
    .btn-txt.mobile {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
    }
    .btn.btn_green {
        padding: 13px;
    }
    .btn_learn_more {
        font-family: 'Circe';
        background: rgba(255, 255, 255, 0.16);
        border: 2px solid #2DAF6B;
        border-radius: 630px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        padding: 11px 10px;
        margin-top: 20px;
    }
    .btn_learn_more svg {
        margin-left: 8px;
    }
    /* sticky_btn */
    .sticky_btn {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #174172;
        border-bottom: 1px solid #DBDBDB;
        z-index: 99;
        padding: 20px;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
        transform: translateY(100px);
    }
    .sticky_btn.active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }
    .sticky_btn .btn.btn_green {
        width: fit-content;
        min-width: 158px;
        padding: 4px 10px;
    }
    .sticky_btn .btn-txt {
        font-size: 16px;
        line-height: 32px;
    }
    .sticky_btn .btn .ic {
        width: 19px;
    }
    /* brand section */
    .brands_section {
        padding: 14px 0;
        background: #E8ECF1;
    }
    /* help_section */
    .help_section {
        padding-top: 36px;
        font-family: 'Circularstd', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
    .help_section p {
        font-size: 16px;
        line-height: 24px;
        margin: 0;
        display: inline;
    }
    .help_section h2 {
        margin: 0 0 12px 0;
    }
    .box-shadow {
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
        border-radius: 14px;
        line-height: 24px;
        padding: 12px;
        text-align: center;
        color: #5F6B7A;
        margin-bottom: 18px;
    }
    ul.help_section_list {
        padding: 0 0 18px 30px!important;
        margin: 0;
    }
    .help_section_list li {
        font-size: 14px;
        line-height: 22px;
        color: #1E2F44;
        margin: 18px 0 0 0;
        width: 50%;
        list-style-type: none;
        cursor: pointer;
        padding: 0;
     }
    .help_section_list li:before {
        content: '';
        width: 24px;
        height: 24px;
        display: block;
        position: initial;
        margin-right: 10px;
        border-radius: 50%;
        background: #E8ECF1 url(${dir}check.svg) no-repeat center / 12px auto;
    }
    .help_section > div > p {
        color: #5F6B7A;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        margin-top: 18px;
        letter-spacing: -0.5px;
        display: block;
    }
    .help_section > div > p .c-green {
        font-family: 'Circularstd', sans-serif;
    }
    .feedback_section {
        padding-top: 36px;
    }
    .feedback_section > div > p {
        font-family: 'Circularstd';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #5F6B7A;
        margin: 12px 0 24px;
    }
    .feedback_section_head p {
        font-family: 'Circe';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1E2F44;
    }
    .feedback_section_head p:first-child {
        font-size: 18px;
        line-height: 27px;      
    }
    /* about_section */
    .about_section {
        margin-top: 36px;
        padding: 18px 18px 7px;
        box-shadow: 0px 0px 63.18px rgba(0, 0, 0, 0.16);
        border-radius: 14px;
    }
    .about_section h2 {
        font-size: 22px;
        line-height: 30px;
        margin: 0;
    }
    .about_section ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
    .about_section li {
        border-bottom: 1px solid #ECECEC;
        margin: 0;
        padding: 0;
    }
    .about_section li a {
        padding: 11px 0;
        font-size: 16px;
        line-height: 22px;
        font-family: 'Circularstd', sans-serif;
        font-style: normal;
        font-weight: 400;
    }
    .about_section li:before {
        content: none;
    }
    .about_section li:last-child {
        border: none;
    }
    .about_section li svg {
        flex-shrink: 0;
        margin-left: 24px;
    }
    /* did-you-now */
    .did-you-now {
        margin-left: -19.5px;
        margin-right: -19.5px;
        background: #174172;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
        border-radius: 14px;
        color: #E8ECF1;
        padding: 30px 19.5px;
    }
    .did-you-now .inactive-popup-content_title {
        color: #fff;
        font-size: 28px;
        line-height: 32px;
    }
    .did-you-now .inactive-popup-content_paragraph {
        font-family: 'Circularstd';
        font-style: normal;
        /* font-weight: 450; */
        font-size: 14px;
        line-height: 22px;
    }
    .did-you-now .inactive-popup-content_img {
        margin: 16px 0 12px;
    }
    .did-you-now .inactive-popup-content_paragraph.is--alert {
        text-align: center;
        padding: 6px 14px;
        margin-bottom: 12px;
    }
    .did-you-now .inactive-popup-content_text {
        line-htight: 22px;
        margin-bottom: 16px;
    }
    /* guarantee */
    .rich-cta-wrp.guarantee {
        padding: 18px;
        background-image: none;
    }
    .rich-cta-wrp.guarantee h2 {
        font-size: 22px;
        color: #FFFFFF;
        margin: 8px 0 12px;
    }
    .rich-cta-wrp.guarantee p {
        font-size: 14px;
        line-height: 22px;
        color: #E8ECF1;
    }
    .btn-wrp.btn-wrp_cta .btn.btn_green {
        padding: 20px 13px;
    }
    .btn-wrp.btn-wrp_cta .btn.btn_green .ic {
        width: 30px;
        height: 30px;
    }
    /* review_section */
    .review_section {
        padding-top: 36px;
    }
    .review_section > div > p {
        font-family: 'Circe';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 30px;
        color: #5F6B7A;
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
    .flex-wrap {
        flex-wrap: wrap;
    }
    .text-nowrap {
        white-space: nowrap;
    }
    .underline {
        text-decoration: underline;
    }
    .c-green {
        color: #2DAF6B;
    }
    .text-center {
        text-align: center;
    }
    .b-1 {
        border: 1px dashed #E8ECF1
    }
    .br-14 {
        border-radius: 14px;
    }

    @media screen and (max-width: 375px) {
        .sct__cnt {
            width: 92%;
        }
    }
</style>`;

window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styles);

    document.head.insertAdjacentHTML('beforeend', `
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`);

    //add scroll polyfill
    let scriptScroll = document.createElement('script');
    scriptScroll.src = 'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
    document.head.appendChild(scriptScroll)

    function scrollToElement(event) {
        event.preventDefault()
        let target = event.currentTarget;
        let arrSpt = target.href.split('/'),
            path = arrSpt[arrSpt.length - 1].split('%20').join(' ');

        let elementTo = document.querySelector(path);
        if (target.dataset.index) {
            elementTo = document.querySelectorAll(path)[target.dataset.index];
        }
        
        let top = elementTo.getBoundingClientRect().top - 52;

        seamless.polyfill();
        seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });
    }

    // section 1
    document.querySelector('.h1-small').innerHTML = `Why is ` + document.querySelector('.h1-small').innerHTML; // title
    document.querySelector('.rich-templete.rich-templete_hero').insertAdjacentHTML('afterend',` 
    <div class="rich-templete_transtpilot flex justify-center ">
        <img src="${dir}arrow-dashed.svg" alt="arrow dashed">
        <a href=".feedback_section" onclick="scrollToElement(event)">
            <img src="${dir}transtpilot.svg" alt="transtpilot">
        </a>
    </div>`); // transtpilot
    document.querySelector('.sct.sct_template-hero > div').insertAdjacentHTML('beforeend', `
    <a href=".about_section" class="btn_learn_more flex items-center justify-center" onclick="scrollToElement(event)">Learn more about Radius Global Solutions 
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="20" height="20" rx="10" transform="rotate(180 20 20)" fill="#DBF5ED"/>
            <path d="M9 7L12 10L9 13" stroke="#2DAF6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </a>`); //learn more button

    //section 2
    document.querySelector('.sct.sct_template-hero').insertAdjacentHTML('afterend',`
    <div class="brands_section">
        <div class="sct__cnt sct__cnt_template"><img src="${dir}partner-logos.svg" alt="logos"></div>
    </div>`);

    //section 3 "We help repair your credit by fixing inaccuracies",
    //section 4 "We're proud to showcase our customer feedback!",
    //section 5 "Essential information about Radius Global Solutionsyou need to know"
    document.querySelector('.brands_section').insertAdjacentHTML('afterend',`
    <div class="sticky_btn flex items-center justify-between">
        <a href=".feedback_section" onclick="scrollToElement(event)">
            <img src="${dir}trustpilot.svg" alt="trustpilot">
        </a>
        <a href="tel:(855)685-2090" class="btn btn_green w-inline-block">
            <div class="ic ic_btn w-embed">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.83333 14.3933C10.7533 18.1667 13.84 21.2533 17.62 23.1733L20.5533 20.2333C20.92 19.8667 21.4467 19.76 21.9067 19.9067C23.4 20.4 25.0067 20.6667 26.6667 20.6667C27.4067 20.6667 28 21.26 28 22V26.6667C28 27.4067 27.4067 28 26.6667 28C14.1467 28 4 17.8533 4 5.33333C4 4.59333 4.6 4 5.33333 4H10C10.74 4 11.3333 4.59333 11.3333 5.33333C11.3333 6.99333 11.6 8.6 12.0933 10.0933C12.24 10.5533 12.1333 11.08 11.7667 11.4467L8.83333 14.3933Z" fill="currentColor"></path>
                </svg>
            </div>
            <div class="btn-txt mobile">Tap To Call</div>
        </a>
    </div>
    <section class="help_section">
        <div class="sct__cnt sct__cnt_template">
            <h2>We help repair your credit by fixing inaccuracies</h2>
            <div class="b-1 br-14">
                <div class="box-shadow">
                    A U.S. PIRGs study showed <p class="c-green">79% of credit reports contain mistakes </p>or serious errors.
                </div>
                <h4 class="text-center">Are any of the below on your credit report?</h4>
                <ul class="flex flex-wrap help_section_list">
                    <li class="flex">Collections</li>
                    <li class="flex">Inquiries</li>
                    <li class="flex">Names</li>
                    <li class="flex">Balances</li>
                    <li class="flex">Charge-offs</li>
                    <li class="flex">Bankruptcies</li>
                    <li class="flex">Addresses</li>
                    <li class="flex">Late Payments</li>
                </ul>
            </div>
            <p>If yes, <a href="tel:(855)685-2090" class="c-green underline">call now</a> and find out how we can help you.</p>
        </div>
    </section>
    <section class="feedback_section">
        <div class="sct__cnt sct__cnt_template">
            <h2>We're proud to showcase our customer feedback!</h2>
            <p>Here's what our users say about us.</p>
            <a href=".review_section" class="flex justify-between feedback_section_head" onclick="scrollToElement(event)">
                <p><span class="c-green">3,746</span> Reviews</p>
                <p class="flex items-center">
                    4.9 
                    <svg style="margin-left: 4px;" width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#FFB900"/>
                        <path d="M25.5245 1.46352C25.6741 1.00287 26.3259 1.00287 26.4755 1.46353L27.6839 5.18237C27.7508 5.38838 27.9428 5.52786 28.1594 5.52786H32.0696C32.554 5.52786 32.7554 6.14767 32.3635 6.43237L29.2001 8.73075C29.0248 8.85807 28.9515 9.08375 29.0184 9.28976L30.2268 13.0086C30.3764 13.4693 29.8492 13.8523 29.4573 13.5676L26.2939 11.2693C26.1186 11.1419 25.8814 11.1419 25.7061 11.2693L22.5427 13.5676C22.1508 13.8523 21.6236 13.4693 21.7732 13.0086L22.9816 9.28976C23.0485 9.08375 22.9752 8.85807 22.7999 8.73075L19.6365 6.43237C19.2446 6.14767 19.446 5.52786 19.9304 5.52786H23.8406C24.0572 5.52786 24.2492 5.38838 24.3161 5.18237L25.5245 1.46352Z" fill="#FFB900"/>
                        <path d="M43.5245 1.46352C43.6741 1.00287 44.3259 1.00287 44.4755 1.46353L45.6839 5.18237C45.7508 5.38838 45.9428 5.52786 46.1594 5.52786H50.0696C50.554 5.52786 50.7554 6.14767 50.3635 6.43237L47.2001 8.73075C47.0248 8.85807 46.9515 9.08375 47.0184 9.28976L48.2268 13.0086C48.3764 13.4693 47.8492 13.8523 47.4573 13.5676L44.2939 11.2693C44.1186 11.1419 43.8814 11.1419 43.7061 11.2693L40.5427 13.5676C40.1508 13.8523 39.6236 13.4693 39.7732 13.0086L40.9816 9.28976C41.0485 9.08375 40.9752 8.85807 40.7999 8.73075L37.6365 6.43237C37.2446 6.14767 37.446 5.52786 37.9304 5.52786H41.8406C42.0572 5.52786 42.2492 5.38838 42.3161 5.18237L43.5245 1.46352Z" fill="#FFB900"/>
                        <path d="M61.5245 1.46352C61.6741 1.00287 62.3259 1.00287 62.4755 1.46353L63.6839 5.18237C63.7508 5.38838 63.9428 5.52786 64.1594 5.52786H68.0696C68.554 5.52786 68.7554 6.14767 68.3635 6.43237L65.2001 8.73075C65.0248 8.85807 64.9515 9.08375 65.0184 9.28976L66.2268 13.0086C66.3764 13.4693 65.8492 13.8523 65.4573 13.5676L62.2939 11.2693C62.1186 11.1419 61.8814 11.1419 61.7061 11.2693L58.5427 13.5676C58.1508 13.8523 57.6236 13.4693 57.7732 13.0086L58.9816 9.28976C59.0485 9.08375 58.9752 8.85807 58.7999 8.73075L55.6365 6.43237C55.2446 6.14767 55.446 5.52786 55.9304 5.52786H59.8406C60.0572 5.52786 60.2492 5.38838 60.3161 5.18237L61.5245 1.46352Z" fill="#FFB900"/>
                        <path d="M79.5245 1.46352C79.6741 1.00287 80.3259 1.00287 80.4755 1.46353L81.6839 5.18237C81.7508 5.38838 81.9428 5.52786 82.1594 5.52786H86.0696C86.554 5.52786 86.7554 6.14767 86.3635 6.43237L83.2001 8.73075C83.0248 8.85807 82.9515 9.08375 83.0184 9.28976L84.2268 13.0086C84.3764 13.4693 83.8492 13.8523 83.4573 13.5676L80.2939 11.2693C80.1186 11.1419 79.8814 11.1419 79.7061 11.2693L76.5427 13.5676C76.1508 13.8523 75.6236 13.4693 75.7732 13.0086L76.9816 9.28976C77.0485 9.08375 76.9752 8.85807 76.7999 8.73075L73.6365 6.43237C73.2446 6.14767 73.446 5.52786 73.9304 5.52786H77.8406C78.0572 5.52786 78.2492 5.38838 78.3161 5.18237L79.5245 1.46352Z" fill="#FFB900"/>
                    </svg>
                </p>
            </a>
            <a href="tel:(855)685-2090" class="btn btn_green w-inline-block">
                <div class="ic ic_btn w-embed">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.83333 14.3933C10.7533 18.1667 13.84 21.2533 17.62 23.1733L20.5533 20.2333C20.92 19.8667 21.4467 19.76 21.9067 19.9067C23.4 20.4 25.0067 20.6667 26.6667 20.6667C27.4067 20.6667 28 21.26 28 22V26.6667C28 27.4067 27.4067 28 26.6667 28C14.1467 28 4 17.8533 4 5.33333C4 4.59333 4.6 4 5.33333 4H10C10.74 4 11.3333 4.59333 11.3333 5.33333C11.3333 6.99333 11.6 8.6 12.0933 10.0933C12.24 10.5533 12.1333 11.08 11.7667 11.4467L8.83333 14.3933Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div class="btn-txt mobile">Tap To Call</div>
                <div class="w-embed">
                    <p class="btn-txt">Call (855) 685-2090</p>
                </div>
            </a>
        </div>
    </section>
    <section class="about_section sct__cnt sct__cnt_template">
        <h2>Essential information about Radius Global Solutions <span class="text-nowrap">you need</span> to know</h2>
        <ul></ul>
    </section>`);

    //sticky button 
    let offsetTopBrands = document.querySelector('.brands_section').offsetTop / 2,
        offsetTopFeedback = document.querySelector('.feedback_section').offsetTop;

    let stickyBtn = document.querySelector('.sticky_btn');

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= offsetTopBrands) {
            stickyBtn.classList.add('active')
            if (window.pageYOffset >= offsetTopFeedback) {
                stickyBtn.querySelector('a:not(.btn)').href = '.review_section'
            } else {
                stickyBtn.querySelector('a:not(.btn)').href = '.feedback_section'
            }
        } else {
            stickyBtn.classList.remove('active')
        }
    })

    // section 5 "Essential information about Radius Global Solutions you need to know"
    let titleTemplates = document.querySelectorAll('.rich-templete h2');

    for (let i = 0; i < titleTemplates.length; i+=4) {
        document.querySelector('.about_section ul').insertAdjacentHTML('beforeend',`
        <li>
            <a href=".rich-templete h2" class="flex items-center justify-between" data-index="${i}" onclick="scrollToElement(event)">
                ${titleTemplates[i].innerHTML}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="22" height="22" rx="11" fill="#DBF5ED"/>
                    <path d="M9 7L13 11L9 15" stroke="#2DAF6B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </li>`);
    }

    // "Did you know?"
    document.querySelectorAll('.rich-cta-wrp')[0].style.display = 'none'
    document.querySelectorAll('.rich-cta-wrp')[0].insertAdjacentHTML('afterend', `
    <div class="did-you-now">
        ${document.querySelector('.inactive-popup-content').innerHTML}
    </div>`)

    document.querySelector('.did-you-now .inactive-popup-content_img').src = dir + 'graph_2.svg';
    document.querySelector('.did-you-now .inactive-popup-content_paragraph.is--alert').innerHTML = `CreditSage's experts <span class="inactive-popup-content_span">can potentially remove</span> negative items from your report or provide a full refund (minus setup fee) if none are removed <span class="inactive-popup-content_span">within the first 100 days.</span>`


    //"Industry Leading, Risk-Free Guarantee"
    document.querySelectorAll('.rich-cta-wrp')[1].classList.add('guarantee');
    document.querySelectorAll('.rich-cta-wrp')[1].innerHTML = `
    <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.5" cy="23" r="23" fill="#2DAF6B"/>
        <path d="M36.2024 11.8046C29.8255 11.8046 24.3547 7.58217 24.2973 7.53701C24.0948 7.3795 23.8443 7.29382 23.5862 7.29382C23.3282 7.29382 23.0776 7.3795 22.8751 7.53701C22.8178 7.58217 17.3699 11.8046 10.97 11.8046C10.6659 11.8046 10.3741 11.9235 10.159 12.1353C9.94396 12.347 9.82312 12.6342 9.82312 12.9336V23.0945C9.82312 30.67 12.9313 34.3844 23.116 38.7988C23.2639 38.8642 23.4241 38.898 23.5862 38.898C23.7483 38.898 23.9086 38.8642 24.0565 38.7988C34.2412 34.3844 37.3494 30.67 37.3494 23.0945V12.9336C37.3494 12.6342 37.2285 12.347 37.0134 12.1353C36.7983 11.9235 36.5066 11.8046 36.2024 11.8046ZM35.0555 23.0945C35.0555 28.9427 33.4498 32.1264 23.5862 36.5295C13.7227 32.1264 12.117 28.9427 12.117 23.0945V14.0626C16.2486 13.6475 20.2003 12.1849 23.5862 9.81757C26.9722 12.1849 30.9239 13.6475 35.0555 14.0626V23.0945Z" fill="white"/>
        <path d="M20.3794 21.6215C20.2488 21.4949 20.0938 21.3945 19.9232 21.3261C19.7526 21.2576 19.5698 21.2223 19.3851 21.2223C19.2004 21.2223 19.0176 21.2576 18.847 21.3261C18.6764 21.3945 18.5214 21.4949 18.3908 21.6215C18.2603 21.748 18.1567 21.8982 18.086 22.0635C18.0154 22.2288 17.979 22.406 17.979 22.585C17.979 22.7639 18.0154 22.9411 18.086 23.1064C18.1567 23.2718 18.2603 23.422 18.3908 23.5485L21.1916 26.2627C21.3218 26.3899 21.4766 26.4908 21.6473 26.5597C21.8179 26.6286 22.001 26.6641 22.1858 26.6641C22.3707 26.6641 22.5537 26.6286 22.7244 26.5597C22.895 26.4908 23.0499 26.3899 23.1801 26.2627L28.7816 20.8343C28.9121 20.7078 29.0157 20.5576 29.0864 20.3923C29.157 20.227 29.1934 20.0498 29.1934 19.8708C29.1934 19.6919 29.157 19.5147 29.0864 19.3494C29.0157 19.184 28.9121 19.0338 28.7816 18.9073C28.651 18.7808 28.496 18.6804 28.3254 18.6119C28.1548 18.5434 27.972 18.5082 27.7873 18.5082C27.6026 18.5082 27.4198 18.5434 27.2492 18.6119C27.0786 18.6804 26.9236 18.7808 26.793 18.9073L22.1858 23.3857L20.3794 21.6215Z" fill="white"/>
    </svg>
    <h2>Industry Leading,<br> <span class="c-green">Risk-Free</span> Guarantee</h2>
    <p>Today, we're offering you an industry leading guarantee that if no inaccurate and/or negative information is removed in your first 100 days, we'll give you a full refund (less the setup fee). No questions asked.</p>`;

    // last block hidden "Looking for help with Radius Global Solutions?"
    document.querySelectorAll('.rich-cta-wrp')[document.querySelectorAll('.rich-cta-wrp').length - 1].style.display = 'none!important'

    //section "Trusted customer reviews"
    document.querySelector('.sct.sct_cta').insertAdjacentHTML('beforebegin',`
    <section class="review_section">
        <div class="sct__cnt sct__cnt_template">
            <h2>Trusted customer reviews</h2>
            <p>Reviews</p>
        </div>
    </section>`)
};
