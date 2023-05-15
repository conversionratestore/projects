let dir = `https://conversionratestore.github.io/projects/creditsage/img/`;

let styles = `
<style>
    .sct_rich-first > .sct__cnt_template > .rich-cta-wrp .trustpilot-widget iframe {
        pointer-events: none;
    }
    .inactive-popup, .inactive-popup-content_close, [hidden] {
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
    .sct_template-hero img.arrow-dashed {
        max-width: 244px;
        height: fit-content;
        margin: 0;
    }
    .sct_template-hero img.arrow-dashed {
        width: 38.55px;
        height: 51.62px;  
        margin-right: 8px;
    }
    .btn-description.btn-description_cta-hero {
        display: none;
    }
    .sct_template-hero .tustpilot-wrp.tustpilot-wrp_hero {
        margin: 0 0 4px 0!important;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .sct_template-hero .trustpilot-widget {
        width: 80px;
        height: 27px;
        overflow: hidden;
        margin-left: 12px;
    }
    .sct_template-hero .btn.btn_green {
        order: 2;
    }
    .sct_template-hero .trustpilot-widget iframe {
        position: absolute!important;
        bottom: 0;
        left: 0;
        pointer-events: none;
    }
    .ic {
        width: 22px;
        height: 22px;
    }
    .sct_template-hero .btn {
        margin-top: 4px;
    }
    .btn-txt {
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
        top: 0;
        left: 0;
        width: 100%;
        background: #174172;
        border-bottom: 1px solid #DBDBDB;
        z-index: 99;
        padding: 20px;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
        transform: translateY(-100px);
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
        display: block!important;
    }
    .sticky_btn .btn .ic {
        width: 19px;
    }
    /* brand section */
    .brands_section {
        padding: 14px 0;
        background: #E8ECF1;
    }
    .brands_section img {
        display: block;
        margin: 0 auto;
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
        margin: -1px -1px 18px -1px;
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
        padding: 36px 0;
        overflow: hidden;
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
    .feedback_section .swiper-slide {
        margin-bottom: 42px;
    }
    .swiper-slide {
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.08);
        border-radius: 14px;
        padding: 16px;
        font-family: 'Circe';
        font-style: normal;
        font-weight: 400;
        margin-bottom: 16px;
    }
    .swiper-slide .author {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #1E2F44;
        margin: 0;
    }
    .verified {
        background: #DBF5ED;
        border-radius: 999px;
        padding: 5.5px 6.5px;
        font-size: 12px;
        line-height: 18px;
        color: #2DAF6B;
        margin: 4px 0 14px;
        width: fit-content;
    }
    .verified svg {
        margin-right: 6px;
    }
    .swiper-slide .theme {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #1E2F44;
        margin-bottom: 8px;
    }
    .swiper-slide .review_text {
        font-family: 'Circularstd', sans-serif;
        font-size: 14px;
        line-height: 22px;
        color: #5F6B7A;
        margin-bottom: 8px;
    }
    .feedback_section .swiper-slide .review_text {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
    }
    .swiper-slide .date {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #1E2F44;
        margin: 0;
    }

    .swiper-slider {
        position: relative;
    }
    ul.splide__pagination li:before, ul.splide__list li:before {
        content: none;
    }
    .splide__slide {
        padding: 0;
    }
    .splide__track {
        overflow: visible!important;
    }
    .splide__pagination {
        padding: 0;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);
        height: 12px;
      }
      .splide__pagination li {
        display: flex;
        transition: 0.3s;
      }
      .splide__pagination li + li {
        margin-left: 6px;
        padding: 0;
      }
      .splide__pagination__page {
        height: 10px;
        width: 10px;
        border: 0;
        padding: 0;
        border-radius: 50%;
        background: #E0E0E0;
        transition: 0.3s;
      }
      .lav-pag-next button {
        width: 7px;
        height: 7px;
      }
      .lav-pag-prev button {
        width: 7px;
        height: 7px;
      }
      .lav-pag-prev-l button {
        width: 4px;
        height: 4px;
      }
      .splide__pagination-prev li:not(.lav-pag-prev-l ~ li):not(.lav-pag-prev-l) {
        opacity: 0;
      }
      .lav-pag-next + li button {
        width: 4px;
        height: 4px;
      }
      .lav-pag-next + li ~ li {
        opacity: 0;
      }
      .splide__pagination__page.is-active {
        background-color: #1E2F44;
      }
    
    /* about_section */
    .about_section {
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
        padding: 30px 19.5px;
        color: #E8ECF1;
    }
    .did-you-now p {
        font-family: 'Circularstd';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        margin: 0;
    }
    .did-you-now h2 {
        color: #fff;
        font-size: 28px;
        line-height: 32px;
    }
    .did-you-now img.graph {
        margin: 16px auto 12px;
        display: block;
    }
    .did-you-now .green_div {
        text-align: center;
        background: #27548B;
        border-radius: 14px;
        padding: 6px 14px;
        color: #FFFFFF;
        margin-bottom: 12px;
    }
    .did-you-now .call_to_fix {
        text-align: center;
        padding: 0 10px;
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
    .review_section .head {
        font-family: 'Circe';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        color: #5F6B7A;
        border-bottom: 1px solid #E2E2E2;
        padding-bottom: 13px;
    }
    .review_section .head .title, .review_section .head .rating {
        font-size: 22px;
        margin-right: 6px;
    }
    .review_section .head svg {
        margin-rught: 2px;
    }
    .content_reviews {
        margin-top: 24px;
    }
    .content_reviews.show .swiper-slide {
        display: block!important;
    }
    .btn_more {
        background: rgba(255, 255, 255, 0.16);
        border: 2px solid #2DAF6B;
        border-radius: 630px;
        width: 100%;
        margin-top: 12px;
        font-family: 'Circe';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 54px;
        text-align: center;
        color: #2DAF6B;
        display: block;
    }
    .btn_more.btn_more_load {
        margin-top: 20px;
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


let objReview = [
    {
        'author': 'Hunter Rossi',
        'theme': 'Zach Richardson is the man!',
        'review': `Zach Richardson is the man!! There was the call I made, and he explain everything throughout the whole process and breaking down all the information I needed to know. My goal is to go get things off my record and improve my credit score and credit Sage company will do their best to get me where I want to be! I’m actually excited to see where this goes and looks like I’m going the right direction to the top! Thank you 🙏🏻`,
        'date': 'May 08, 2023'
    },
    {
        'author': 'Tracy Singletary',
        'theme': 'Excellent people skills',
        'review': `Mrs Mary G was very helpful and very knowledgeable to the point I accepted your company. I never really cared about credit. I've been paying high interest rates since since day one in my adult life. Let it be clear I only accepted your company because of Mrs Mary G`,
        'date': 'May 08, 2023'
    },
    {
        'author': 'Shell Mose',
        'theme': 'My experience with Credit Sage has been…',
        'review': `My experience with Credit Sage has been excellent. Kris was informative and knowledgeable about the process. The matter was cleared on my report. The service was cancelled by Credit Sage after it was resolved! I am pleased, I was dealing with this for over a year and half with no good results! Except my score decreasing..The process took about 30 days...which is excellent... ofcourse a fee is involved with the service.....I would be dishonest if I didn't let you know upfront. I wrote all the letters to dispute the charge before I reached out to Credit Sage...for me it was worth the money I paid! Thank you Kris and Credit Sage! Rochelle`,
        'date': 'May 08, 2023'
    },
    {
        'author': 'Braelyn Dixon',
        'theme': 'Wow wow wow Chelsea is absolutely…',
        'review': 'Wow wow wow Chelsea is absolutely amazing. She was so incredibly kind, and extremely knowledgeable and beyond helpful. Honestly, I miss chatting with her already and we just hung up 5 mins ago. Thank you so much, Chelsea!!',
        'date': 'May 06, 2023'
    },
    {
        'author': 'Will Mabe',
        'theme': 'Noelle was very helpful and friendly…',
        'review': 'Noelle was very helpful and friendly during our phone conversation, She gave me the best of two options and helped me get set up. I hope the rest of my dispute process goes as smooth with Credit Sage as all my headaches are from a horrible divorce from a golddigger.',
        'date': 'May 05, 2023'
    },
    {
        'author': 'Wayne',
        'theme': 'Johnny explained how easy it would be…',
        'review': 'Johnny explained how easy it would be to up my credit score and it would take less than 3 months or I will be refunded my monthly payments. He does have poor taste in football teams though,but other than that he explained my options well and made sense 😛.',
        'date': 'April 17, 2023'
    },
    {
        'author': 'Jacob Todd',
        'theme': 'Sam Wender is a very knowledgeable…',
        'review': 'Sam Wender is a very knowledgeable person he answered all the questions I had. He explained to me what he can do to help my credit score. He walked me the the process and making it easy to get the paper work done. Very polite and has a great sense of humor. Thanks for all the help',
        'date': 'May 08, 2023'
    },
    {
        'author': 'T BJ',
        'theme': 'Im very happy with the treatment.',
        'review': `Im very happy with the treatment and the customer service provided to me.Tonya,was so helpful, she explained the process to me and explained how and how long the process will be. I'm extremely satisfied and I thank her very much for being so upfront. Amazing customer service. This company should look at her calls for training purpose. She's amazing.`,
        'date': 'May 04, 2023'
    },
    {
        'author': 'Moe Dollas',
        'theme': 'I talked to a wonderful women named…',
        'review': `I talked to a wonderful women named Chelsea who broke down the whole process & explained what to expect during the 90 days. It was a pleasure talking to her she was very helpful & in all honesty fun to talk to. That being said I’m hoping credit sage pulls through for me like she said they will .`,
        'date': 'May 03, 2023'
    },
    {
        'author': 'Casey White',
        'theme': 'Rep was amazing',
        'review': 'The rep that assisted me was very professional, friendly, and knowledgeable. Seems genuine and trustworthy. Only reason for not giving 5 stars (which the rep should get) is the fact that I mistakenly called your firm during a Google search for a creditor so left a bad taste in my mouth. If all that the rep promised comes through it definitely will be an happy accident. Once again 5 stars for the rep -1 foe feeling leary about how I fell into the service',
        'date': 'May 04, 2023'
    },
    {
        'author': 'Ali Finn',
        'theme': 'Michael VanDyke is an EARTH ANGEL',
        'review': 'Michael VanDyke is an EARTH ANGEL! I am feeling a new sense of hope, when it comes to my credit, because this rep took the time to answer every question with kindness and professionalism. I am looking forward to the process of trying to fix my credit, instead of dreading it…finally! Thank you so much!',
        'date': 'May 02, 2023'
    },
    {
        'author': 'Robert Philyaw',
        'theme': 'Lisa Willieford',
        'review': 'Lisa Willieford. I believe she is an under appreciated agent working for you! Lisa was an absolute professional and extremely knowledgeable in her field of expertise. Lisa should be promoted immediately! I do not know the hierarchy for your organization, however, if you knew who your best agent was - Lisa should be in charge of that person and everyone else! Lisa is an absolute direct reflection of the goals of your organization!!',
        'date': 'May 01, 2023'
    },
    {
        'author': 'Cheryl Kreider',
        'theme': 'I called into credit sage to get help…',
        'review': `I called into credit sage to get help with a collection acct Lisa Willeford was my contact person and I'm extremely pleased she was! Not only was she very professional, knowledgeable and friendly, but was able to explain my reports and what's going on with them. I am excited to have this company and Lisa working to help me. It was a very positive and pivotal turning point for my future. Thank you Lisa for your expertise, I will definitely refer you to people needing help getting their credit reports cleaned up.`,
        'date': 'May 02, 2023'
    },
    {
        'author': 'Ken Carrico',
        'theme': 'He was very kind honest and explained…',
        'review': 'He was very kind honest and explained everything well so I could understand my options going forward.',
        'date': 'May 08, 2023'
    },
    {
        'author': 'Lee Trawick',
        'theme': 'Mr Basil',
        'review': 'Mr. Basil was amazing and understanding to my situation. He walked me through a realistic timeline and expectations.',
        'date': 'May 08, 2023'
    },
    {
        'author': 'Jennifer N',
        'theme': 'Katrina English Rocks',
        'review': `Katrina English, thank you for taking the time today to explain how the process will work, and reassuring me on how the removal of items on my credit will move forward. I'm very hopeful, and you provided excellent customer service today!`,
        'date': 'May 06, 2023'
    },
    {
        'author': 'Mark',
        'theme': 'I am convinced this is a good move!',
        'review': `I have had the pleasure of doing credit repair through Sage, and specifically with Jeff! His expertise was evident from the start, and that really is southing for those in need of help in this area. It's the dawn of a new day for me and I'll even do a couple of cartwheels when their job is complete.`,
        'date': 'May 04, 2023'
    },
    {
        'author': 'Alex Coffin',
        'theme': 'Lucas was so helpful every question I…',
        'review': 'Lucas was so helpful every question I had he answered with great detail and helped me completely understand what was going on and how they can help!',
        'date': 'May 06, 2023'
    },
    {
        'author': 'Laura Best',
        'theme': 'I spoke with Hannah Fadler today about…',
        'review': `I spoke with Hannah Fadler today about disputing some things on my credit report and she's exceeded my expectations during our call. She shared with me options I had available to myself I was unaware of prior to calling. She's very thorough with what the company does to assist it's clients and offered other helpful tips I can do to approve my credit score. I will absolutely be mentioning my experience and the company to my friends after today's call with her.`,
        'date': 'May 02, 2023'
    }
]

let slide = (author, theme, review, date, index, parent = '') => `
    <div class="swiper-slide " style="display: ${parent == 'content_reviews' && index > 3  ? 'none;' : 'block;' }" data-index="${index}">
        <div class="flex justify-between">
            <p class="author">${author}</p>
            <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.68386 5.18237C9.75079 5.38838 9.94277 5.52786 10.1594 5.52786H14.0696C14.554 5.52786 14.7554 6.14767 14.3635 6.43237L11.2001 8.73075C11.0248 8.85807 10.9515 9.08375 11.0184 9.28976L12.2268 13.0086C12.3764 13.4693 11.8492 13.8523 11.4573 13.5676L8.29389 11.2693C8.11865 11.1419 7.88135 11.1419 7.70611 11.2693L4.54267 13.5676C4.15081 13.8523 3.62357 13.4693 3.77325 13.0086L4.98157 9.28976C5.04851 9.08375 4.97518 8.85807 4.79994 8.73075L1.6365 6.43237C1.24464 6.14767 1.44603 5.52786 1.93039 5.52786H5.84062C6.05723 5.52786 6.24921 5.38838 6.31614 5.18237L7.52447 1.46352Z" fill="#FFB900"/>
                <path d="M25.5245 1.46352C25.6741 1.00287 26.3259 1.00287 26.4755 1.46353L27.6839 5.18237C27.7508 5.38838 27.9428 5.52786 28.1594 5.52786H32.0696C32.554 5.52786 32.7554 6.14767 32.3635 6.43237L29.2001 8.73075C29.0248 8.85807 28.9515 9.08375 29.0184 9.28976L30.2268 13.0086C30.3764 13.4693 29.8492 13.8523 29.4573 13.5676L26.2939 11.2693C26.1186 11.1419 25.8814 11.1419 25.7061 11.2693L22.5427 13.5676C22.1508 13.8523 21.6236 13.4693 21.7732 13.0086L22.9816 9.28976C23.0485 9.08375 22.9752 8.85807 22.7999 8.73075L19.6365 6.43237C19.2446 6.14767 19.446 5.52786 19.9304 5.52786H23.8406C24.0572 5.52786 24.2492 5.38838 24.3161 5.18237L25.5245 1.46352Z" fill="#FFB900"/>
                <path d="M43.5245 1.46352C43.6741 1.00287 44.3259 1.00287 44.4755 1.46353L45.6839 5.18237C45.7508 5.38838 45.9428 5.52786 46.1594 5.52786H50.0696C50.554 5.52786 50.7554 6.14767 50.3635 6.43237L47.2001 8.73075C47.0248 8.85807 46.9515 9.08375 47.0184 9.28976L48.2268 13.0086C48.3764 13.4693 47.8492 13.8523 47.4573 13.5676L44.2939 11.2693C44.1186 11.1419 43.8814 11.1419 43.7061 11.2693L40.5427 13.5676C40.1508 13.8523 39.6236 13.4693 39.7732 13.0086L40.9816 9.28976C41.0485 9.08375 40.9752 8.85807 40.7999 8.73075L37.6365 6.43237C37.2446 6.14767 37.446 5.52786 37.9304 5.52786H41.8406C42.0572 5.52786 42.2492 5.38838 42.3161 5.18237L43.5245 1.46352Z" fill="#FFB900"/>
                <path d="M61.5245 1.46352C61.6741 1.00287 62.3259 1.00287 62.4755 1.46353L63.6839 5.18237C63.7508 5.38838 63.9428 5.52786 64.1594 5.52786H68.0696C68.554 5.52786 68.7554 6.14767 68.3635 6.43237L65.2001 8.73075C65.0248 8.85807 64.9515 9.08375 65.0184 9.28976L66.2268 13.0086C66.3764 13.4693 65.8492 13.8523 65.4573 13.5676L62.2939 11.2693C62.1186 11.1419 61.8814 11.1419 61.7061 11.2693L58.5427 13.5676C58.1508 13.8523 57.6236 13.4693 57.7732 13.0086L58.9816 9.28976C59.0485 9.08375 58.9752 8.85807 58.7999 8.73075L55.6365 6.43237C55.2446 6.14767 55.446 5.52786 55.9304 5.52786H59.8406C60.0572 5.52786 60.2492 5.38838 60.3161 5.18237L61.5245 1.46352Z" fill="#FFB900"/>
                <path d="M79.5245 1.46352C79.6741 1.00287 80.3259 1.00287 80.4755 1.46353L81.6839 5.18237C81.7508 5.38838 81.9428 5.52786 82.1594 5.52786H86.0696C86.554 5.52786 86.7554 6.14767 86.3635 6.43237L83.2001 8.73075C83.0248 8.85807 82.9515 9.08375 83.0184 9.28976L84.2268 13.0086C84.3764 13.4693 83.8492 13.8523 83.4573 13.5676L80.2939 11.2693C80.1186 11.1419 79.8814 11.1419 79.7061 11.2693L76.5427 13.5676C76.1508 13.8523 75.6236 13.4693 75.7732 13.0086L76.9816 9.28976C77.0485 9.08375 76.9752 8.85807 76.7999 8.73075L73.6365 6.43237C73.2446 6.14767 73.446 5.52786 73.9304 5.52786H77.8406C78.0572 5.52786 78.2492 5.38838 78.3161 5.18237L79.5245 1.46352Z" fill="#FFB900"/>
            </svg>
        </div>
        <div class="verified flex items-center">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2013 5.90374L6.98214 10.0967L4.97363 8.10068" stroke="#2DAF6B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <mask id="mask0_101_897" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="16">
                <path d="M0.0371094 9.53674e-07H16.1371V16H0.0371094V9.53674e-07Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_101_897)">
                <path d="M15.5082 8C15.5082 12.0731 12.1857 15.375 8.08711 15.375C3.98856 15.375 0.666016 12.0731 0.666016 8C0.666016 3.92691 3.98856 0.625001 8.08711 0.625001C12.1857 0.625001 15.5082 3.92691 15.5082 8Z" stroke="#2DAF6B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
            Verified User
        </div>
        <p class="theme">${theme}</p>
        <p class="review_text">${review}</p>
        <p class="date">${date}</p>
    </div>`;

//comes into view
let isScrolledIntoView = (el) => {
    if(document.querySelector(el) == null) return false;
    let rect = document.querySelector(el).getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;
    let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVisible;
};

let pushDataLayer = (name, desc, type, loc) => {
    console.log(name, desc, type, loc)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga4',
        'event_name': name,
        'event_desc': desc,
        'event_type': type,
        'event_loc': loc
    });
}

let scrollToElement = (event) => {
    event.preventDefault()
    let target = event.currentTarget;
    let arrSpt = target.href.split('/'),
        path = arrSpt[arrSpt.length - 1].split('%20').join(' ');

    let elementTo = document.querySelector(path);
    if (target.dataset.index) {
        elementTo = document.querySelectorAll(path)[target.dataset.index];
    }
    
    let top = elementTo.getBoundingClientRect().top - 82;

    seamless.polyfill();
    seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });

    if (target.classList.contains('btn_learn_more')) {
        pushDataLayer('exp_reviews_lp_sticky_header_reviews','Learn more','Text link','First screen')
    } else if (path.includes('.rich-templete h2')) {
        pushDataLayer('exp_reviews_lp_essential_info', 'Item block', `Item name ${target.innerText}`, 'Essential info about ...')
    }
}

function initSlider() {
	const slider = new Splide('.lav-gallery', {
		rewind: true,
		pagination: true,
		arrows: false,
		autoplay: true,
		interval: 5000,
		gap: 6,
	});
	slider.on('autoplay:playing', function(rate) {
		if(rate === 1) {
			const num = parseInt(
				document.querySelector('.splide__slide.is-next')?.ariaLabel || 1
			);
		}
	});
	slider.on('dragged', function() {
		setTimeout(() => {
			const num = parseInt(
				document.querySelector('.splide__slide.is-active')?.ariaLabel || 1
			);
		}, 500);
	});
	slider.on('pagination:mounted', function(data) {
		data.items[3].li.classList.add('lav-pag-next');
		let num = 1;
		for(let item of data.items) {
			let i = num;
			num++;
		}
	});
	slider.on('move', function(newIndex, prevIndex, destIndex) {
		if(document.querySelector('.lav-pag-prev')) {
			document.querySelector('.lav-pag-prev').classList.remove('lav-pag-prev');
		}
		if(document.querySelector('.lav-pag-prev-l')) {
			document
				.querySelector('.lav-pag-prev-l')
				.classList.remove('lav-pag-prev-l');
		}
		if(newIndex > 2) {
			document
				.querySelector(
					'.splide__pagination li:nth-child(' + (newIndex - 2) + ')'
				)
				.classList.add('lav-pag-prev');
		}
		if(newIndex > 3) {
			document
				.querySelector('.splide__pagination')
				.classList.add('splide__pagination-prev');
			document
				.querySelector(
					'.splide__pagination li:nth-child(' + (newIndex - 3) + ')'
				)
				.classList.add('lav-pag-prev-l');
		} else {
			document
				.querySelector('.splide__pagination')
				.classList.remove('splide__pagination-prev');
		}
		if(newIndex > 1) {
			if(document.querySelector('.lav-pag-next')) {
				document
					.querySelector('.lav-pag-next')
					.classList.remove('lav-pag-next');
			}
			if(
				document.querySelector(
					'.splide__pagination li:nth-child(' + (newIndex + 2) + ')'
				)
			) {
				document
					.querySelector(
						'.splide__pagination li:nth-child(' + (newIndex + 2) + ')'
					)
					.classList.add('lav-pag-next');
			}
		} else if(prevIndex === 8 && newIndex >= 0 && newIndex <= 3) {
			document
				.querySelector('.splide__pagination li:nth-child(4)')
				.classList.add('lav-pag-next');
		}
	});
	slider.mount();
}

window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styles);

    document.head.insertAdjacentHTML('beforeend', `
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`);

    //add scroll polyfill
    let scriptScroll = document.createElement('script');
    scriptScroll.src = 'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
    document.head.appendChild(scriptScroll)


    // section 1
    document.querySelector('.h1-small').innerHTML = `Why is ` + document.querySelector('.h1-small').innerHTML; // title
    document.querySelector('.tustpilot-wrp.tustpilot-wrp_hero').insertAdjacentHTML('afterbegin',`<img src="${dir}arrow-dashed.svg" class="arrow-dashed" alt="arrow dashed"><img src="${dir}trustpilot-stars.svg" alt="transtpilot">`); // transtpilot

    document.querySelector('.tustpilot-wrp.tustpilot-wrp_hero').href = ".feedback_section";
    document.querySelector('.tustpilot-wrp.tustpilot-wrp_hero').addEventListener('click', (event) => {
        scrollToElement(event)
    })
    

    let title = document.querySelector('.h1-small').innerHTML.split('Why is ').join('').split('?').join('').split('On Your Report').join('');

    document.querySelector('.sct.sct_template-hero > div').insertAdjacentHTML('beforeend', `
    <a href=".about_section" class="btn_learn_more flex items-center justify-center" onclick="scrollToElement(event)">Learn more about ${title}
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
            <div class="btn-txt">Tap To Call</div>
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
                <p><span class="c-green">4,505</span> Reviews</p>
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
            <div class="splide lav-gallery swiper-slider">
            <div class="splide__track">
              <ul class="splide__list swiper-wrapper"> </ul>
            </div>
          </div>
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
        <h2>Essential information about ${title} <span class="text-nowrap">you need</span> to know</h2>
        <ul></ul>
    </section>`);

    //slider review
	const sliderStyles = document.createElement('link');
	sliderStyles.rel = 'stylesheet';
	sliderStyles.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/css/splide-core.min.css';
	document.body.appendChild(sliderStyles);

	let sliderScript = document.createElement('script');
	sliderScript.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.1/dist/js/splide.min.js';
    document.body.append(sliderScript);

    for (let i = 0; i < objReview.length; i++) {
        document.querySelector('.feedback_section .swiper-wrapper').insertAdjacentHTML('beforeend', `<li class="splide__slide">${slide(objReview[i].author, objReview[i].theme, objReview[i].review, objReview[i].date, i, 'feedback_section')}</li>`)
    }

	let initSplideInterval = setInterval(() => {
		if(typeof Splide == 'function') {
			clearInterval(initSplideInterval);
			initSlider();
		}
	}, 200);

    //sticky button 
    let offsetTopBrands = document.querySelector('.brands_section').offsetTop,
        offsetTopFeedback = document.querySelector('.feedback_section').offsetTop;

    let stickyBtn = document.querySelector('.sticky_btn');

    let viewedStickyBtn = false,
        viewedHelpSection = false,
        viewedFeedbackSection = false,
        viewedAboutSection = false,
        viewedDidYouNow = false,
        viewedGuarantee = false;

    let isVisible = () => {
        setTimeout(() => {
            if (isScrolledIntoView('.help_section h2') == true && viewedHelpSection == false) {
                viewedHelpSection = true;
                pushDataLayer('exp_reviews_lp_we_help_visibility','Text block','Visibility','We help repair yuor credit ...')
            }
            if (isScrolledIntoView('.feedback_section h2') == true && viewedFeedbackSection == false) {
                viewedFeedbackSection = true;
                pushDataLayer('exp_reviews_lp_we_proud_visibility','Text block','Visibility','We are proud to showcase ...')
            }
            if (isScrolledIntoView('.about_section h2') == true && viewedAboutSection == false) {
                viewedAboutSection = true;
                pushDataLayer('exp_reviews_lp_essential_info_visibility','Item block','Visibility','Essential info about ...')
            }
            if (isScrolledIntoView('.did-you-now h2') == true && viewedDidYouNow == false) {
                viewedDidYouNow = true;
                pushDataLayer('exp_reviews_lp_did_you_know_visibility','Timeline block','Visibility','Did you know?')
            } 
            if (isScrolledIntoView('.rich-cta-wrp.guarantee') == true && viewedGuarantee == false) {
                viewedGuarantee = true;
                pushDataLayer('exp_reviews_lp_industry_visibility','Guarantee block','Visibility','Industry Leading ...')
            }
        }, 5000)
    }

    window.addEventListener('scroll', (e) => {
        if (window.pageYOffset >= offsetTopBrands) {
            stickyBtn.classList.add('active')
            if (window.pageYOffset >= offsetTopFeedback) {
                stickyBtn.querySelector('a:not(.btn)').href = '.review_section'
            } else {
                stickyBtn.querySelector('a:not(.btn)').href = '.feedback_section'
            }
            if (viewedStickyBtn == false) {
                viewedStickyBtn = true
                pushDataLayer('exp_reviews_lp_sticky_header_vis', window.pageYOffset, 'Visibility', 'Sticky Header')
            }
            
        } else {
            viewedStickyBtn = false
            stickyBtn.classList.remove('active')
        }
        if (
            isScrolledIntoView('.help_section h2') == true && viewedHelpSection == false ||
            isScrolledIntoView('.feedback_section h2') == true && viewedFeedbackSection == false ||
            isScrolledIntoView('.about_section h2') == true && viewedAboutSection == false  || 
            isScrolledIntoView('.did-you-now h2') == true && viewedDidYouNow == false ||
            isScrolledIntoView('.rich-cta-wrp.guarantee') == true && viewedGuarantee == false
        ) {
            isVisible()
        }
    })
    //event: Button. Sticky Header
    document.querySelector('.sticky_btn .btn.btn_green').addEventListener('click', () => {
        pushDataLayer('exp_reviews_lp_sticky_header_tap_to_call','Tap to call','Button','Sticky Header')
    })
    //event: Reviews. Sticky Header
    document.querySelector('.sticky_btn a:not(.btn_green)').addEventListener('click', () => {
        pushDataLayer('exp_reviews_lp_sticky_header_reviews','TrustScore','Reviews','Sticky Header')
    })
    //event: Text link. We help repair yuor credit ...
    document.querySelector('.help_section > div > p .c-green').addEventListener('click', () => {
        pushDataLayer('exp_reviews_lp_we_help_call_now','Call now','Text link','We help repair yuor credit ...')
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
        <h2 class="title">Did you know?</h2>
        <p>A collection account can remain on your credit reports <span class="c-green"> for up to 7 years</span>, negatively impacting your credit score,<span class="c-green"> even if you pay the debt.</span></p>
        <img class="graph" src="${dir}/graph_2.svg" alt="graph">
        <p class="green_div">* CreditSage's experts  <span class="c-green">can potentially remove </span>negative items from your report or provide a full refund (minus setup fee) if none are removed <span class="c-green"> within the first 100 days.</span></p>
        <p class="call_to_fix">Call now to fix your credit report and reclaim financial freedom today!</p>
    </div>`)

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
    document.querySelectorAll('.rich-cta-wrp')[document.querySelectorAll('.rich-cta-wrp').length - 1].hidden = true;

    //section "Trusted customer reviews"
    document.querySelector('.sct.sct_cta').insertAdjacentHTML('beforebegin',`
    <section class="review_section">
        <div class="sct__cnt sct__cnt_template">
            <h2>Trusted customer reviews</h2>
            <p class="head">
                <span class="title">Reviews</span>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z" fill="#FFB900"/>
                </svg>
                <span class="rating">4.9</span>
                <span><span class="c-green">3,746 </span>Total</span>
            </p>
            <img src="${dir}trustpilot-divider.svg" alt="stars">
            <div class="content_reviews"> </div>
            <button type="button" class="btn_more btn_more_load">Load more</button>
            <a href="https://www.trustpilot.com/review/creditsage.com" class="btn_more btn_more_trustpilot" hidden target="_blank">Read more on Trustpilot</a>
        </div>
    </section>`)

    for (let i = 0; i < objReview.length ; i++) {
        document.querySelector('.content_reviews').insertAdjacentHTML('beforeend', slide(objReview[i].author, objReview[i].theme, objReview[i].review, objReview[i].date, i, 'content_reviews'))
    }

    // section "Looking for help with "
    document.querySelectorAll('.rich-cta-wrp')[document.querySelectorAll('.rich-cta-wrp').length - 2].querySelector('.trustpilot-widget').addEventListener('click', (e) => {
        e.preventDefault()
        let top = document.querySelector('.review_section').getBoundingClientRect().top - 82;

        seamless.polyfill();
        seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });
    })

    //event: Visibility. Trusted customer reviews
    let viwedElements = [];

    let slideReviews = document.querySelectorAll('.content_reviews .swiper-slide');
    slideReviews.forEach((element, index) => {
        viwedElements.push({
            'viewed': false
        })
    });

    window.addEventListener('scroll', (e) => {
        for (let i = 0; i < slideReviews.length; i++) {
            if (document.querySelector(`.content_reviews .swiper-slide[data-index="${i}"]`).style.display == 'block' && isScrolledIntoView(`.content_reviews .swiper-slide[data-index="${i}"]`) == true && viwedElements[i].viewed == false) {
                setTimeout(() => {
                    if (document.querySelector(`.content_reviews .swiper-slide[data-index="${i}"]`).style.display == 'block' && isScrolledIntoView(`.content_reviews .swiper-slide[data-index="${i}"]`) == true && viwedElements[i].viewed == false) {
                        viwedElements[i].viewed = true;
                        pushDataLayer('exp_reviews_lp_review_block', document.querySelectorAll('.author')[i].innerHTML, 'Visibility', 'Trusted customer reviews')
                    }
                }, 5000)
            }
        }
    })
    //event: Stars. Stars images
    document.querySelector('.review_section > div > img').addEventListener('click', (e) => {
        pushDataLayer('exp_reviews_lp_review_stars','Stars images', 'Stars', 'Trusted customer reviews')
    })
    //event: Button. Tap to load more
    document.querySelector('.btn_more_load').addEventListener('click', (e) => {
        let reviewLast = document.querySelectorAll('.content_reviews > div[style="display: block;"]')[document.querySelectorAll('.content_reviews > div[style="display: block;"]').length - 1];
        let countShow = +reviewLast.dataset.index + 4;

        document.querySelectorAll('.content_reviews > div').forEach((element, i) => {
            if (i <= countShow) {
                element.style.display = 'block';
            }
            if (countShow >= 18) {
                e.currentTarget.hidden = true;
                document.querySelector('.btn_more_trustpilot').hidden = false;
            }
        });

        pushDataLayer('exp_reviews_lp_load_more','Tap to load more','Button','Trusted customer reviews')
    })
    //event: Button. Tap to Read more on Trustpilot
    document.querySelector('.btn_more_trustpilot').addEventListener('click', (e) => {
        pushDataLayer('exp_reviews_lp_read_more_on_trustpilot','Tap to Read more on Trustpilot','Button','Trusted customer reviews')
    })

    document.querySelector('.exp-loading') != null ? document.querySelector('.exp-loading').remove() : '';
};

const isClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(isClarity)
        clarity("set", "Exp; Reviews LP", "variant_1");
    }
}, 200)