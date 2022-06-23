/* Load Tiny Slider  */

let scriptCustomStyle = document.createElement("link")
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
scriptCustomStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomStyle)

let scriptCustom = document.createElement("script")
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

/* Some variables  */

const imgFolderLink = `https://conversionratestore.github.io/projects/upshift/img`

/* CSS */

const color_black = '#303133'
const transition = 'transition: all 0.2s ease-out;'

const style = /*html*/`
    <style>
        #ipmb-industries-we-serve h2 {
            width: 80%;
        }

        .ipmb-areas-col p:first-child {
            margin-bottom: 5px !important;
        }

        #ipmb-duble-bg-green,
        #ipmb-for-people-second-section,
        #row-unique-2,
        #row-unique-3,
        #row-unique-4,
        #row-unique-5,
        #row-unique-6,
        #ipmb-steps-header,
        #ipmb-8-btn-section {
            display: none !important;
        }

        .template h1, 
        .template h2,
        .template h4,
        .template p,
        .template span,
        .template a, 
        .template button {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            line-height: normal;
        }

        .template section {
            padding: 40px 25px;
        }

        .template h2 {
            font-weight: 700;
            font-size: 33px;
            line-height: 50px;
            color: ${color_black};
            margin-bottom: 30px;
        }

        .template button,
        #row-unique-1 button {            
            width: 100%;
            background: #00A8F4;
            color: #fff;
            border-radius: 8px;
            padding: 13px;
            font-weight: 600;
            font-size: 18px;
            text-transform: capitalize;
        } 

        .template button.btn_green,
        #row-unique-1 button.btn_green {
            background: #6AC29A;
        }

        button[data-sign] {
            margin-top: 30px;
        }

        .area {
            background: url('${imgFolderLink}/headphones_girl.png') center center / cover no-repeat;
            text-align: center;
        }       

        .area h1 {
            font-weight: 800;
            font-size: 33px;
            line-height: 40px;       
            color: #fff;     
        }

        .area h4 {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            text-align: center;
            margin: 15px 0 30px;
            color: #fff;     
        }

        #area_form {
            padding: 30px;
            background: #FFFFFF;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 40px rgba(0, 0, 0, 0.4);
            border-radius: 10px;
        }

        .area_title {
            font-weight: 500;
            font-size: 16px;
            color: ${color_black};
            text-align: left;
        }

        .select_wrapper {
            position: relative;
        }

        .select_wrapper::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            height: 17px;
            width: 14px;
            background: url('${imgFolderLink}/marker.svg') center center / cover no-repeat;
            filter: invert(45%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(102%) contrast(91%);
            pointer-events: none;
        }

        .select_wrapper::after {
            content: '';
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            height: 6px;
            width: 14px;
            background: url('${imgFolderLink}/arrow_down.svg') center center / cover no-repeat;
            filter: invert(45%) sepia(0%) saturate(0%) hue-rotate(153deg) brightness(102%) contrast(91%);
            pointer-events: none;
        }

        #area_select { 
            font-family: 'Poppins', sans-serif;
            padding: 16px 45px;           
            margin: 8px 0 30px;
            font-weight: 400;
            font-size: 14px;
            border: 1px solid rgba(119, 119, 119, 0.05);
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3 !important;
            border-radius: 8px;
        }

        #area_select:required:invalid {
            color: #777777 !important;
        }

        #area_select option {
            color: ${color_black} !important;            
        }

        span.area_error {
            display: none;
            margin-top: 10px;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #D94E48;
        }

        .show_error .area_error {
            display: block;
        }

        .show_error #area_select {
            border: 1px solid #D94E48;
        }

        .reviews  {
            text-align: center;
        }

        .reviews p {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            color: ${color_black};
            margin-bottom: 20px;
        }

        #ipmb-industries-we-serve h2 p {
            margin-bottom: -20px;
        }

        .slide {
            background: #FFFFFF;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
            border-radius: 10px;
        }

        .slide_header {
            background: #F1F9FE;
            border-radius: 10px 10px 0px 0px;
            padding: 20px;
        }

        .slide_header img {
            width: 8px;
            height: 10px;
        }

        .slide_header div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .slide_header div:first-child {
            margin-bottom: 3px;
        }

        .slide_header div:first-child p {
            font-weight: 700;
            font-size: 14px;
            color: ${color_black};
        }

        .slide_header div p {
            font-weight: 400;
            color: ${color_black};
        }

        .slide_header div:last-child p {
            font-size: 12px;
        }

        .slide_body {
            padding: 20px;
        }

        p.work_description {
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.01em;
            color: #777777;
            margin: 20px 0;
        }

        p.work_place {
            font-weight: 700;
            font-size: 12px;
            line-height: 18px;
            text-transform: uppercase;
            color: #00A8F4;
            margin-bottom: 5px;
        }

        .work_rating {
            display: flex;
            flex-direction: row;
        }

        .work_rating img {
            margin-right: 7px;
        }

        .work_rating span {
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: ${color_black};
            margin-left: 3px;
        }

        .work_time {
            color: ${color_black};
            letter-spacing: 0.01em;
            font-size: 12px;
        }

        .work_time img {
            margin-right: 10px;
            width: 10px;
            height: 10px;
        }

        /* accordion */

        .accordion_item {
            border-bottom: 1px solid rgba(119, 119, 119, 0.15);
        }

        .accordion_item:last-child {
            border-bottom: none;
        }

        .accordion_item_header {
            padding: 15px 0;            
            display: flex;
            align-items: center;
            position: relative;
            cursor: pointer;
        }

        .accordion_item_header p {
            color: ${color_black};
            font-weight: 500;
            padding-right: 25px;
            font-size: 18px;
            line-height: 27px;
        }

        .accordion_item_header.active {
            font-weight: 700;
        }

        .accordion_item_header::after {             
            content: '';
            position: absolute;
            right: 0;
            width: 7px;
            height: 15px;
            background: url('https://conversionratestore.github.io/projects/upshift/img/arrow_right.svg') no-repeat;   
            ${transition};
        }

        .accordion_item_header.active::after {
            transform: rotate(90deg);
            filter: invert(49%) sepia(64%) saturate(1331%) hue-rotate(165deg) brightness(92%) contrast(109%);
        }

        .accordion_item-body {
            max-height: 0;
            overflow: hidden;
            ${transition}
        }

        .accordion_item_body_content {
            display: flex;
            margin-bottom: 20px;
            overflow: hidden;
            background: #FFFFFF;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
            border-radius: 13px;
        }

        .accordion_item_body_content img {
            width: 130px;
            height: 124px;
        }

        .accordion_item_body_content .city {
            font-weight: 600;
            font-size: 20px;
            color: ${color_black};
            margin-bottom: 10px;
        }

        .accordion_item_body_content .sign {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #00A8F4;
        }

        .accordion_item_body_content .sign img {
            width: auto;
            height: auto;
            margin-left: 10px;
        }

        .accordion_item_body_content .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 16px;
        }        

        .steps {
            background: #FFFFFF;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
            border-radius: 10px;
            padding: 25px;
        }

        .steps h2 {
            font-size: 24px;
            line-height: 36px;
        }

        .step {
            margin-bottom: 30px;
        }

        .step .title {
            font-weight: 700;
            font-size: 24px;
            text-transform: uppercase;
            color: #42C497;
            line-height: 36px;
        }

        .step .subtitle {
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            color: ${color_black};
            margin-bottom: 15px
        }

        .step .txt {
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.01em;
            color: #656565;
        }

        .faq .accordion_item_body_content {
            flex-direction: column;
            border-radius: 0;
            overflow: auto;
            box-shadow: none;
            color: #777777;
        }

        .faq .accordion_item_body_content ol {
            margin-top: 0;
        }
        
        .faq .accordion_item_body_content p,
        .faq .accordion_item_body_content li {
            font-size: 14px;
            line-height: 24px;
        }

        .tns-outer {
            margin: 0 -25px;
        }

        .tns-item {
            margin: 20px;
            margin-left: 0;
        }

        .tns-item:first-child {
            margin-left: 25px;
        }

        .tns-nav {
            text-align: center;
        }

        .tns-nav button {
            width: 7px;
            height: 7px;
            padding: 0;
            background: #D9D9D9;
            border-radius: 50%;
            margin-right: 10px;
        }

        .tns-nav button.tns-nav-active {
            background: #777777;
        }

        .find_work {
            font-family: 'Poppins', sans-serif;
            padding: 0 25px 70px;
        }

        .find_work span {
            text-align: center;
            display: block;
            margin-top: 10px;
            font-weight: 400;
            font-size: 12px;
            text-transform: lowercase;
            color: #777777;
        }
    </style>
`

/* Data Objects */

const cities = [
    "Akron/Canton",
    "Ann Arbor",
    "Atlanta",
    "Austin",
    "Charlotte",
    "Charlotte Metro Area",
    "Cincinnati",
    "Cleveland",
    "Columbus",
    "Dallas/Fort Worth",
    "Dayton",
    "Detroit",
    "Fort Lauderdale",
    "Houston",
    "Indianapolis",
    "Kansas City",
    "Kansas City",
    "Lakeland",
    "Las Vegas",
    "Miami",
    "Minneapolis/St.Paul",
    "Nashville",
    "Northern Kentucky",
    "Orlando",
    "Phoenix",
    "Pittsburgh",
    "San Antonio",
    "Sandusky",
    "St. Louis",
    "St. Louis",
    "St. Petersburg",
    "Tampa"
]
const cityOptions = cities.map(city => `<option value="${city}">${city}</option>`)

const popularJobs = [
    [
        'Housekeeping',
        'EST $128',
        'Tampa, FL',
        '$16/hr', '9.30 a.m. - 6.30 p.m',
        'As a housekeeper, you will be playing an instrumental role in the hotel’s operations success by taking care of a building’s ...',
        'Zoo and Aquarium',
        ['star', 'star', 'star', 'star', 'star-half'],
        '4.8'
    ],
    [
        'Housekeeping',
        'EST $128',
        'Tampa, FL',
        '$16/hr', '9.30 a.m. - 6.30 p.m',
        'As a housekeeper, you will be playing an instrumental role in the hotel’s operations success by taking care of a building’s ...',
        'Zoo and Aquarium',
        ['star', 'star', 'star', 'star', 'star-half'],
        '4.8'
    ],
]

/* HTML */

const slides = popularJobs.map(job => `
<div class="slide">
                <div class="slide_header">
                    <div>
                        <p>${job[0]}</p>
                        <p>${job[1]}</p>
                    </div>
                    <div>
                        <p><img src="${imgFolderLink}/marker.svg" alt="marker"> ${job[2]}</p>
                        <p>${job[3]}</p>
                    </div>
                </div>
                <div class="slide_body">
                    <p class="work_time"><img src="${imgFolderLink}/time.svg" alt="time"><b>Shift:</b> ${job[4]}</p>
                    <p class="work_description">${job[5]}</p>
                    <p class="work_place">${job[6]}</p>
                    <div class="work_rating">
                        <div>
                            ${job[7].map(star => `<img src="${imgFolderLink}/${star}.svg" alt="${star}"/>`).join('')}
                        </div>
                        <span>${job[8]}</span>
                    </div>
                </div>               
            </div>
`).join('')

const template = /*html*/`
<div class="template">
    <section class="area">
        <h1>Flexible shifts accross the US</h1>
        <h4>Pick up shifts, work when you want and get paid daily!</h4>
        <form id="area_form" name="area_form">
            <p class="area_title">Your area</p>
            <div class="select_wrapper">
                <select id="area_select" name="area_select" required>
                    <option value="" disabled selected hidden>Select your location</option>
                    ${cityOptions}
                </select>
            </div>
            <button type="button">Get started</button>
            <span class="area_error">Please, choose a location so we can get started</span>
        </form>
    </section>
    <section class="reviews">
        <p>Over 50,000 People have already found job on upshift</p>
        <img src="${imgFolderLink}/glassdoor.svg" alt="glassdoor">
    </section>
    <section>
        <h2>Popular jobs</h2>
        <div class="slider" id="slider">
            ${slides}
        </div>
        <button data-sign>Apply now</button>
    </section>
    <section>
        <h2>Upshift Locations</h2>
        <div class="accordion">
            <div class="accordion_item">
                <div class="accordion_item_header">
                    <p>Arizona</p>
                </div>
                <div class="accordion_item-body">
                    <div class="accordion_item_body_content">
                        <img loading="lazy" src="https://www.upshift.work/wp-content/uploads/2021/12/Phoenix-small-photo-1-2-300x300.jpg"
                            alt="city">
                        <div class="text">
                            <p class="city">Phoenix</p>
                            <p class="sign">Sign up<img
                                    src="https://conversionratestore.github.io/projects/upshift/img/arrow_right_blue.svg"
                                    alt="arrow right"></p>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="accordion_item">
                <div class="accordion_item_header">
                    <p>Arizona</p>
                </div>
                <div class="accordion_item-body">
                    <div class="accordion_item_body_content">
                        <img loading="lazy" src="https://www.upshift.work/wp-content/uploads/2021/12/Phoenix-small-photo-1-2-300x300.jpg"
                            alt="city">
                        <div class="text">
                            <p class="city">Phoenix</p>
                            <p class="sign">Sign up<img
                                    src="https://conversionratestore.github.io/projects/upshift/img/arrow_right_blue.svg"
                                    alt="arrow right"></p>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
    </section>
    <section>
        <div class="steps">
            <h2>Become an Upshifter in 3 Easy Steps</h2>
            <div class="step">
                <p class="title">Step 1</p>
                <p class="subtitle">Sign up online</p>
                <p class="txt">Create account and complete the quick online assessment.</p>
            </div>
            <div class="step">
                <p class="title">Step 2</p>
                <p class="subtitle">Activate your account</p>
                <p class="txt">Share some documents to verify your eligibility to work in the United States and visit our office to complete onboarding.</p>
            </div>
            <div class="step">
                <p class="title">Step 3</p>
                <p class="subtitle">Start getting jobs</p>
                <p class="txt">Download Upshift app and start applying for available positions in your area. Once you are accepted for a shift, just confirm the shift and it’s yours! 
                    You can apply for multiple shifts based on your availability and interests!</p>
            </div>
            <button class="btn_green" data-sign>Join Upshift</button>
        </div>
    </section>
    <section class="faq">
        <h2>Frequently asked questions</h2>
        <div class="accordion">
            <div class="accordion_item">
                <div class="accordion_item_header">
                    <p>How long does the application process take?</p>
                </div>
                <div class="accordion_item-body">
                    <div class="accordion_item_body_content">
                        <p>It’s easy to get started with Upshift:</p>
                        <ol>
                            <li>Apply online and tell a little about yourself.</li>
                            <li>Bring some documents to one of our offices and activate your account.</li>
                            <li>Download Upshift app and start applying for available positions in your area.</li>
                        </ol>
                        <p>Processing time may vary by city, but most Upshifters are able to start working within a week or less after online application.</p>
                    </div>
                </div>
            </div>    
            <div class="accordion_item">
                <div class="accordion_item_header">
                    <p>How long does the application process take?</p>
                </div>
                <div class="accordion_item-body">
                    <div class="accordion_item_body_content">
                        <p>It’s easy to get started with Upshift:</p>
                        <ol>
                            <li>Apply online and tell a little about yourself.</li>
                            <li>Bring some documents to one of our offices and activate your account.</li>
                            <li>Download Upshift app and start applying for available positions in your area.</li>
                        </ol>
                        <p>Processing time may vary by city, but most Upshifters are able to start working within a week or less after online application.</p>
                    </div>
                </div>
            </div>        
        </div>
        <button data-sign>Join Upshift</button>
    </section>
</div>
`

/* JS Scripts */

// parse text as CSS
document.head.insertAdjacentHTML('beforeend', style)

/* Interval 0: run scripts */
let waitForPeopleSection = setInterval(() => {
    if (document.getElementById('ipmb-for-people-second-section')) {
        clearInterval(waitForPeopleSection)

        // Parse my text as HTML
        document.getElementById('ipmb-for-people-second-section').insertAdjacentHTML('afterend', template)

        /* Interval 1: Move 'Industries' section behind my 'Reviews' section */
        const waitForIndustriesSection = setInterval(() => {
            if (document.getElementById('ipmb-industries-we-serve') && document.querySelector('.reviews')) {
                clearInterval(waitForIndustriesSection)

                document.querySelector('.reviews').insertAdjacentElement('afterend', document.getElementById('ipmb-industries-we-serve'))
            }
        }, 200);

        /* Interval 2: Initialize Tiny Slider script after Slider appearence in the DOM */
        const waitForSlider = setInterval(() => {
            if (document.getElementById('slider') && typeof tns === 'function') {
                clearInterval(waitForSlider)

                const slider = tns({
                    container: '#slider',
                    items: 1.4,
                    slideBy: 'page',
                    mouseDrag: true,
                    swipeAngle: 30,
                    controls: false,
                    nav: true,
                    navPosition: 'bottom',
                    loop: false,
                })

                slider.events.on('indexChanged', () => {
                    window.dataLayer = window.dataLayer || []
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': '',
                        'eventAction': 'Swipe slider',
                        'eventLabel': '',
                    })
                })
            }
        }, 200);

        /* Interval 3: Initialize Form script after Form appearence in the DOM */
        const waitForForm = setInterval(() => {
            if (document.querySelector('#area_form button')) {
                clearInterval(waitForForm)

                const form = document.getElementById('area_form')
                const select = document.getElementById('area_select')

                // This defines what happens when the user tries to submit the data
                document.querySelector('#area_form button').addEventListener('click', (e) => {
                    // e.preventDefault()

                    if (select.value === '') {
                        form.classList.add('show_error')
                    } else {
                        console.log(select.value);
                        form.classList.remove('show_error')
                    }
                });

                document.querySelector('#area_form').addEventListener('change', () => {
                    form.classList.remove('show_error')
                    console.log('ss');
                }, { once: true });
            }
        }, 200);

        /* Interval 4: Initialize Accordion script after Accordions appearence in the DOM */
        const waitForAccordions = setInterval(() => {
            if (document.querySelectorAll('.accordion')[1]) {
                clearInterval(waitForAccordions)

                document.querySelectorAll('.accordion').forEach(accordion => {
                    accordion.addEventListener('click', (e) => {
                        if (e.target.closest('.accordion_item_header')) {
                            const accordionHeader = e.target.closest('.accordion_item_header')
                            console.log(accordionHeader);
                            const accordionBody = accordionHeader.nextElementSibling

                            console.log(accordionBody);

                            const currentlyActiveAccordionHeader = document.querySelector(".accordion_item_header.active");
                            if (currentlyActiveAccordionHeader && currentlyActiveAccordionHeader !== accordionHeader) {
                                currentlyActiveAccordionHeader.classList.toggle("active");
                                currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
                            }

                            accordionHeader.classList.toggle("active");
                            if (accordionHeader.classList.contains("active")) {
                                accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
                            }
                            else {
                                accordionBody.style.maxHeight = 0;
                            }
                        }
                    })
                });
            }
        }, 200);

        /* Interval 5: Add button to the end of 'Why choose Upshift?' section */
        const waitForWhyChooseSection = setInterval(() => {
            if (document.getElementById('row-unique-1')) {
                clearInterval(waitForWhyChooseSection)

                document.getElementById('row-unique-1').insertAdjacentHTML('beforeend', /*html*/`
                    <div class="find_work">
                        <button class="btn_green" data-sign>Join Upshift</button>    
                        <span>to find work</span>
                    </div>                    
                `)
            }
        }, 200);
    }
}, 200);