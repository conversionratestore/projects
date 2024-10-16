/* CSS: Common */

const color_black = '#303133'
const transition = 'transition: all 0.2s ease-out;'

const imgFolderLink = `https://conversionratestore.github.io/projects/upshift/img`

const jobsCSS = `
.slide {
    background: #FFFFFF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
    border-radius: 10px;
}

.slide_header {
    display: flex;
    justify-content: space-between;
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
    flex-direction: column;
}

.slide_header div:last-child {
    text-align: right;
}

.slide_header div p:first-child {
    font-weight: 700;
    font-size: 14px;
    color: ${color_black};
}

.slide_header div p {
    font-size: 12px;
    font-weight: 400;
    color: ${color_black};
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
    display: inline-flex;
    color: ${color_black};
    letter-spacing: 0.01em;
    font-size: 12px;
    padding-left: 2px;
}

.work_time img {
    margin-right: 8px;
    display: inline-block;
}
`

/* JS: Common */

// Check what page we are on
let isShifts = window.location.pathname.includes('shifts-near-you')
let isForPeople = window.location.pathname.includes('for-people')

// Get random items from array
const getRandomItems = (arr, num) => arr.sort(() => Math.random() - 0.5).slice(0, num)

const intervalTimeout = 200

// dataLayer
const callEvent = (eventAction, eventLabel = '') => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Landing page optimization',
        eventAction,
        eventLabel
    });
}

// initial relative page scripts 
if (!isShifts) { /* 'For People' && 'Findshifts1' Pages */

    /* Load Tiny Slider  */

    let scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)

    let scriptCustom = document.createElement("script")
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    /* Get user location from URL */

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const campaign = urlParams.get('utm_campaign')?.toLowerCase()

    let userLocation = ''

    if (campaign) {
        if (campaign.includes('cincinnati')) {
            userLocation = 'Cincinnati, OH'

        } else if (campaign.includes('miami')) {
            userLocation = 'Miami, FL'
        }
    }

    /* Data Objects */

    const cities = [
        "Akron/Canton, OH",
        "Ann Arbor, MI",
        "Atlanta, GA",
        "Austin, TX",
        "Charlotte Metro Area, SC",
        "Charlotte, NC",
        "Cincinnati, OH",
        "Cleveland, OH",
        "Columbus, OH",
        "Dallas/Fort Worth, TX",
        "Dayton, OH",
        "Detroit, MI",
        "Fort Lauderdale, FL",
        "Houston, TX",
        "Indianapolis, IN",
        "Kansas City, KS",
        "Kansas City, MO",
        "Lakeland, FL",
        "Las Vegas, NV",
        "Miami, FL",
        "Minneapolis/St.Paul, MN",
        "Nashville, TN",
        "Northern Kentucky, KY",
        "Orlando, FL",
        "Phoenix, AZ",
        "Pittsburgh, PA",
        "San Antonio, TX",
        "Sandusky, OH",
        "St. Louis, IL",
        "St. Louis, MO",
        "St. Petersburg, FL",
        "Tampa, FL"
    ]

    const popularJobs = [
        [
            'Concessions',
            'EST $80',
            'Orlando, FL',
            '$16/hr', '2:00 p.m. - 7:00 p.m.',
            `
                This role involves a variety of tasks, from customer service and taking orders to preparing food and handling transactions. Concession stand workers are a vital part of the sports stadium experience. They are the friendly faces that deliver much-needed refreshments and occasional banter.
            `,
            'Sports Arena',
            ['star', 'star', 'star', 'star', 'star-half'],
            '4.9'
        ],
        [
            'Banquet Attendant',
            'EST $144',
            'Atlanta, GA',
            '$18/hr', '10:00 a.m. - 6:00 p.m.',
            `
                Help serve plated dinner and bus, pass appetizers, and clean stations. What to wear: black dress pants, black button long sleeve dress shirt… 
            `,
            'Art Museum',
            ['star', 'star', 'star', 'star', 'star-half'],
            '4.83'
        ],
        [
            'Packer',
            'EST $120',
            'Phoenix, AZ',
            '$15/hr', '8:00 a.m. - 4:00 p.m.',
            `
            As a Packer you’ll be playing an instrumental role in manufacturing operations  success. Some of the responsibilities may include handling inventory with care and attention to detail, ensuring product orders are packed and moved carefully, inspecting weighing, and packaging products, and monitoring the flow of product into processing machinery.
            `,
            'Distribution Center',
            ['star', 'star', 'star', 'star', 'star-half'],
            '4.5'
        ],
        [
            'Housekeeper',
            'EST $80',
            'Detroit, MI',
            '$16/hr', '2:00 p.m. - 7:00 p.m.',
            `
            As a housekeeper, you will be playing an instrumental role in the hotel’s operations success by taking care of a building’s general cleanliness to provide tidy and sanitary amenities to guests and residents. Some of the responsibilities might include cleaning floors, making beds, dusting surfaces.
            `,
            'Hotel',
            ['star', 'star', 'star', 'star', 'star-half'],
            '4.75'
        ],
        [
            'Server',
            'EST $80',
            'Dayton, OH',
            '$16/hr', '2:00 p.m. - 7:00 p.m.',
            `
                Provide excellent guest service while working in a very fast paced environment while serving food and beverages to customers. Proper cash handling, great and service guests at the registers, taking orders, and accepting payments…
            `,
            'University Cafeteria',
            ['star', 'star', 'star', 'star', 'star-half'],
            '4.73'
        ],
        [
            'Warehouse Associate',
            'EST $128',
            'Nashville, TN',
            '$16/hr', '8:00 a.m. - 4:00 p.m.',
            `
                As a Warehouse Associate / Crew Member, you will be playing an instrumental role in the warehouse operations by performing an array of duties such as receiving and processing incoming stock and materials, packing or shipping orders, picking and filling orders.
            `,
            'Manufacturer',
            ['star', 'star', 'star', 'star', 'star-half'],
            '4.8'
        ],
    ]

    const uploadsURL = `https://www.upshift.work/wp-content/uploads/`

    const locationsObj = [
        {
            state: 'Arizona',
            cities: [
                ['Phoenix', 'Phoenix, AZ', uploadsURL + '2021/12/Phoenix-small-photo-1-2.jpg']
            ]
        },
        {
            state: 'Florida',
            cities: [
                ["Fort Lauderdale", 'Fort Lauderdale, FL', uploadsURL + "2022/04/fort-lauderdale-2.jpg"],
                ["Lakeland", "Lakeland, FL", uploadsURL + "2021/10/Lakeland-thb-1.jpg"],
                ["Orlando", "Orlando, FL", uploadsURL + "2021/09/mick-haupt-Tyn3-Cljx-A-unsplash-1-1-e1632475827586.jpg"],
                ["Miami", "Miami, FL", uploadsURL + "2022/01/025-Depositphotos_198880700_L-1-1.jpg"],
                ["St. Petersburg", "St. Petersburg, FL", uploadsURL + "2021/10/St.-Petersburg-thb-1.jpg"],
                ["Tampa", "Tampa, FL", uploadsURL + "2021/09/tampa-2519396_1920-1-1-e1632418091236.jpg"]
            ]
        },
        {
            state: 'Georgia',
            cities: [
                ['Atlanta', "Atlanta, GA", uploadsURL + '2021/07/Depositphotos_51662971_l-2015-1-1-2-e1625926826674.jpg']
            ]
        },
        {
            state: 'Illinois',
            cities: [
                ['St. Louis', "St. Louis, IL", uploadsURL + '2022/02/St.louis-square-2-1.png']
            ]
        },
        {
            state: 'Indiana',
            cities: [
                ['Indianapolis', "Indianapolis, IN", uploadsURL + '2021/03/Indy-3-uai-365x365-1.jpg']
            ]
        },
        {
            state: 'Kansas',
            cities: [
                ['Kansas City', "Kansas City, KS", uploadsURL + '2022/02/Kansas-City-square-2-1.png']
            ]
        },
        {
            state: 'Kentucky',
            cities: [
                ['Northern Kentucky', "Northern Kentucky, KY", uploadsURL + '2021/03/covington-uai-533x533-1.jpg']
            ]
        },
        {
            state: 'Michigan',
            cities: [
                ['Ann Arbor', "Ann Arbor, MI", uploadsURL + '2022/04/brad-west-0G3Kj9L2JH0-unsplash-2.jpg'],
                ['Detroit', "Detroit, MI", uploadsURL + '2022/01/Detroit-square.png'],
            ]
        },
        {
            state: 'Minnesota',
            cities: [
                [`Minneapolis/<br>St.Paul`, "Minneapolis/St.Paul, MN", uploadsURL + '2022/01/Minneapolis-square.png'],
            ]
        },
        {
            state: 'Missouri',
            cities: [
                ['Kansas City', "Kansas City, MO", uploadsURL + '2022/02/Kansas-City-square-2-1.png'],
                ['St. Louis', "St. Louis, MO", uploadsURL + '2022/02/St.louis-square-2-1.png'],
            ]
        },
        {
            state: 'Nevada',
            cities: [
                ['Las Vegas', "Las Vegas, NV", uploadsURL + '2021/12/Las-Vegas-small-photo-1-1.jpg'],
            ]
        },
        {
            state: 'North Carolina',
            cities: [
                ['Charlotte', "Charlotte, NC", uploadsURL + '2021/03/Charlote-uai-456x456-1.jpg'],
            ]
        },
        {
            state: 'Ohio',
            cities: [
                ['Akron/Canton', "Akron/Canton, OH", uploadsURL + "2022/04/fort-lauderdale-2.jpg"],
                ['Cincinnati', "Cincinnati, OH", uploadsURL + "2021/10/Lakeland-thb-1.jpg"],
                ['Cleveland', "Cleveland, OH", uploadsURL + "2021/09/mick-haupt-Tyn3-Cljx-A-unsplash-1-1-e1632475827586.jpg"],
                ['Columbus', "Columbus, OH", uploadsURL + "2022/01/025-Depositphotos_198880700_L-1-1.jpg"],
                ['Dayton', "Dayton, OH", uploadsURL + "2021/10/St.-Petersburg-thb-1.jpg"],
                ['Sandusky', "Sandusky, OH", uploadsURL + "2021/09/tampa-2519396_1920-1-1-e1632418091236.jpg"],
            ]
        },
        {
            state: 'Pennsilvania',
            cities: [
                ['Pittsburgh', "Pittsburgh, PA", uploadsURL + "2021/03/pittsburg-uai-456x456-1.jpg"]
            ]
        },
        {
            state: 'South Carolina',
            cities: [
                ['Charlotte Metro Area', "Charlotte Metro Area, SC", uploadsURL + "2021/03/fortmill-uai-520x520-1.jpg"]
            ]
        },
        {
            state: 'Tennessee',
            cities: [
                ['Nashville', "Nashville, TN", uploadsURL + "2021/03/nashville-725986_1280-uai-960x960-1.jpg"]
            ]
        },
        {
            state: 'Texas',
            cities: [
                ["Austin", "Austin, TX", uploadsURL + "2021/03/austin2-uai-456x456-1.jpg"],
                [`Dallas/<br>Fort Worth`, "Dallas/Fort Worth, TX", uploadsURL + "2021/03/Dallas-uai-456x456-1.jpg"],
                ["Houston", "Houston, TX", uploadsURL + "2021/03/Huston-uai-456x456-1.jpg"],
                ["San Antonio", "San Antonio, TX", uploadsURL + "2021/03/san-antonio-uai-456x456-1.jpg"]
            ]
        },
    ]

    const faqArray = [
        [
            'How long does the application process take?',
            `
            <p>It’s easy to get started with Upshift:</p>
            <ol>
                <li>Apply online and tell a little about yourself.</li>
                <li>Show up at one of our offices for the document check/onboarding to activate your account.</li>
                <li>Then download our Upshift app and start applying for available positions in your area.</li>
            </ol>
            <p>Processing time may vary by city, but most Upshifters are able to start working within a week or less after the online application.</p>
        `
        ],
        [
            'How do I get paid?',
            `<p>Upshifters get paid weekly. Our pay period runs from Monday through Sunday with pay going out the following Friday!</p>
        <p>As an Upshifter you may also be able to qualify for same day pay through our partnership with Earnin. After you have received two direct deposits through Upshift you will be able to apply for same day pay through Earnin!</p>`
        ],
        [
            'How often do I need to take shifts?',
            `
            <p>Upshift allows people to choose where and when they want to work.</p>
            <p>There are no minimums. You can work as little as you want to and up to 40 hours per week without client approval and over 40 hours if a client approves.</p>
        `
        ],
        [
            'Is there a minimum amount of hours I need to work?',
            `<p>With Upshift, there are no minimums. You can work as little as you want to and up to 40 hours per week without client approval and over 40 hours if a client approves.</p>`
        ],
        [
            'Would I be a 1099 or W2?',
            `<p>All Upshifters are W2 employees of Upshift. This means that we pay the employer portion of FICA taxes for you and that you have access to traditional employee benefits even while working flexibly.</p>`
        ],
        [
            'Does Upshift charge people any fees?',
            `<p>Upshift is 100% free for people to use. We never take any fees out of your pay for connecting you with shifts.</p>`
        ]
    ]

    /* HTML  */

    const cityOptions = cities.map(city =>
        `<option value="${city}" ${city === userLocation ? 'selected' : ''}>${city}</option>`
    ).join('')

    const locationsHTML = locationsObj.map(location => `
    <div class="accordion_item">
        <div class="accordion_item_header">
            <p>${location.state}</p>
        </div>
        <div class="accordion_item-body">            
            ${location.cities.map(city => `
                <div class="accordion_item_body_element">
                    <img loading="lazy" src="${city[2]}" alt="${city[0]}">
                    <div class="text">
                        <p class="city" data-city="${city[1]}">${city[0]}</p>
                        <p class="sign">Sign up<img src="https://conversionratestore.github.io/projects/upshift/img/arrow_right_blue.svg" alt="arrow right"></p>
                    </div>        
                </div>
            `).join('')}
        </div>
    </div>`
    ).join('')

    const slides = popularJobs.map(job => `
    <div>
<div class="slide">
                <div class="slide_header">
                    <div>
                        <p>${job[0]}</p>                        
                    </div>
                    <div>
                        <p style="white-space: nowrap;">${job[1]}</p>                        
                        <p>${job[3]}</p>
                    </div>
                </div>
                <div class="slide_body">
                    <p class="work_time"><img src="${imgFolderLink}/time.svg" alt="time"><b>Shift:&nbsp;</b>${job[4]}</p>
                    <p class="work_description">${job[5]}</p>
                    <p class="work_place">${job[6]}</p>
                    <div class="work_rating">
                        <div>
                            ${job[7].map(star => `<img src="${imgFolderLink}/${star}.svg" alt="${star}"/>`).join('')}
                        </div>
                        <span>${job[8]}</span>
                    </div>
                </div>               
            </div></div>
    `).join('')

    const faqHTML = faqArray.map(faq => `
            <div class="accordion_item">
                <div class="accordion_item_header">
                    <p>${faq[0]}</p>
                </div>
                <div class="accordion_item-body">
                    <div class="accordion_item_body_element">
                        ${faq[1]}                        
                    </div>
                </div>
            </div> 
    `).join('')

    const pdpTemplate = /*html*/`
<div class="template">
    <section class="area">
        <h1>Find flexible shifts near you</h1>
        <h4>Pick up shifts, work when you want<br>and get paid daily!</h4>
        <form id="area_form" name="area_form">
            <p class="area_title">Your area</p>
            <div class="select_wrapper">
                <select id="area_select" name="area_select" required>
                    <option value="" disabled selected hidden>Select your location</option>
                    ${cityOptions}
                </select>
            </div>
            <span class="area_error">Please, choose a location so we can get started</span>
            <button type="button">Get started</button>            
        </form>
    </section>
    <section class="reviews">
        <p>TRUSTED BY OVER 70,000 PEOPLE TO FIND WORK OPPORTUNITIES</p>
        <img src="${imgFolderLink}/websites.svg" alt="websites">
    </section>
    <section class="industries">
        <h2>Find Hourly Work in Various Industries</h2>
        <div class="industry">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/hotel-4-1.svg" alt="hotel">
            </div>
            <div class="desribe">
                <p>Hotels/Food Service</p>
                <p>Housekeepers, Kitchen Staff, Front Desk, Cooks, Bartenders</p>
            </div>
        </div>
        <div class="industry">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/food-1-1.svg" alt="food">
            </div>
            <div class="desribe">
                <p>Catering/Events</p>
                <p>Banquet Servers, Kitchen Staff, Bartenders, Dishwashers, Crew</p>
            </div>
        </div>
        <div class="industry">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/box-1-1.svg" alt="box">
            </div>
            <div class="desribe">           
                <p>Warehouse/<br>Manufacturing</p>
                <p>Pickers, Packers, Equipment Operators, Janitorial, Customer Service</p>
            </div>
        </div>
    </section>
    <section class="popular_shifts">
        <h2>Some of the shifts<br>you can find in<br>our app</h2>
        <div class="slider" id="slider">
            ${slides}
        </div>
        <button data-sign>Apply now</button>
    </section>
    <section class="locations">
        <h2>Upshift Locations</h2>
        <div class="accordion">
            ${locationsHTML}
        </div>
    </section>
    <section class="three_steps">
        <div class="steps">
            <h2>Become an Upshifter in 3 Easy Steps</h2>
            <div class="step">
                <p class="title">Step 1</p>
                <p class="subtitle">Sign up online</p>
                <p class="txt">Fill out a registration form and complete our quick online assessment.</p>
            </div>
            <div class="step">
                <p class="title">Step 2</p>
                <p class="subtitle">Activate your account</p>
                <p class="txt">For the final step, we will ask you to attend our in-person document check/onboarding in order to activate your account and officially become an Upshifter!</p>
            </div>
            <div class="step">
                <p class="title">Step 3</p>
                <p class="subtitle">Start picking up shifts</p>
                <p class="txt">Download the Upshift app and start applying for available shifts in your area. Once you are accepted for a shift, just confirm the shift and it’s yours! You can apply for multiple shifts based on your availability and interests!</p>
            </div>
            <button class="btn_green" data-sign>Join Upshift</button>
        </div>
    </section>
    <section class="faq">
        <h2>Frequently asked questions</h2>
        <div class="accordion">
            ${faqHTML}    
        </div>
        <button data-sign>Join Upshift</button>
    </section>
    <section class="chooses">
        <h2>Why choose<br>Upshift?</h2>
        <div class="choose">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/calendar.png" alt="calendar">
            </div>
            <div class="text">
                <p>Work When You Want</p>
                <p>Create your own schedule with flexible hours by applying to as many or as few shifts as you want. Whether you want a full-time job, part-time job, or flexible shifts, we have it all available!</p>
            </div>
        </div>
        <div class="choose">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/Bez-nazwy5.png" alt="better shifts">
            </div>
            <div class="text">
                <p>Find Better Shifts</p>
                <p>Build your reputation through your profile with great reviews, certifications and other achievements. As your profile improves, you’ll be more likely to be selected for higher-paying shifts.</p>
            </div>
        </div>
        <div class="choose">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/Bez-nazwy.png" alt="easy use app">
            </div>
            <div class="text">
                <p>Easy-to-use Upshift App</p>
                <p>Easily keep track of all your shifts in one place. We offer a web and mobile platform so that you can pick up shifts at the click of a button.</p>
            </div>
        </div>
        <div class="choose">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/Bez-nazwy2.png" alt="income">
            </div>
            <div class="text">
                <p>Supplement Your Income</p>
                <p>Whether you need a steady income or you’re just wanting some extra spending money, you can pick up shifts and get paid weekly.</p>
            </div>
        </div>
        <div class="choose">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/Bez-nazwy3.png" alt="network">
            </div>
            <div class="text">
                <p>Build Your Network and Skills</p>
                <p>Get exposed to different types of jobs and meet new people along the way. Learn new skills from each shift you work and add them to your profile.</p>
            </div>
        </div>
        <div class="choose">
            <div>
                <img src="https://www.upshift.work/wp-content/uploads/2021/03/Bez-nazwy4.png" alt="benefits">
            </div>
            <div class="text">
                <p>Get Benefits</p>
                <p>You will be a W-2 employee of Upshift, which means that taxes are taken out of your paycheck and you will receive a W-2 after the year has ended. You’re also able to get benefits after your first paycheck including dental, medical, vision, and more!</p>
            </div>
        </div>
        <div class="find_work">
            <button class="btn_green" data-sign>Join Upshift</button>    
            <span>to find work</span>
        </div>    
    </section>
</div>
    `

    /* CSS */

    const pdpStyle = /*html*/`
    <style>
        #ipmb-industries-we-serve {
            margin-top: 25px;
        }

        #ipmb-industries-we-serve h2 {
            width: 80%;
        }

        
        #ipmb-industries-we-serve h2 p {
            margin-bottom: -55px;
        }

        .ipmb-areas-content, .ipmb-areas-txt {
            line-height: 128.7% !important;
        }

        .ipmb-areas-col p:first-child {
            margin-bottom: 5px !important;
        }

        #ipmb-duble-bg-green,
        #ipmb-for-people-second-section,
                #row-unique-0,
        #row-unique-1,
        #row-unique-2,
        #row-unique-3,
        #row-unique-4,
        #row-unique-5,
        #row-unique-6,
        #ipmb-steps-header,
        #ipmb-8-btn-section,
        #ipmb-industries-we-serve,
        .wpb_column.pos-middle.pos-left.align_left.column_parent.col-lg-6.ipmb-mobile-padding-0.spcmobiletop.single-internal-gutter
        {
            display: none !important;
        }

        ${isForPeople ? '' : `#row-unique-7, #signup {display: none !important;}`}

        .template h1, 
        .template h2,
        .template h4,
        .template p,
        .template span,
        .template a, 
        .template button,
        .template li {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            line-height: normal;
        }

        .isotope-wrapper .isotope-container > div {
            width: auto !important;
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
        #row-unique-1 button,
        #row-unique-8 button.btn_white {            
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

        #row-unique-8 .btn-container,
        #row-unique-9 .btn-container {
            display: none;
        }

        #row-unique-8 button.btn_white,
        #row-unique-9 button.btn_white {
            background: #fff !important;
            color: #43c597!important;
            width: 170px;
            margin-bottom: 10px;
            margin-left: calc(50% - 84px);
            border-radius: 8px;
            font-weight: 600;
            padding: 13px 0;
            text-transform: capitalize;
            font-size: 16px!important;
            font-family: 'Poppins', sans-serif;
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
            margin: 8px 0 0;
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
            display: block;
            visibility: hidden;
            margin: 5px 0;
            font-weight: 400;
            font-size: 10px;
            line-height: 18px;
            text-align: center;
            color: #D94E48;
        }

        .show_error .area_error {
            visibility: visible;
        }

        .show_error #area_select {
            border: 1px solid #D94E48;
        }

        section.reviews  {
            padding: 40px 0 0;
            text-align: center;
        }

        section.reviews {
            width: 100%;
        }

        .reviews p {
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            color: ${color_black};
            margin-bottom: 10px;
            padding: 0 25px;
        }

        .industries img {
            max-width: 50px;
            height: 50px;
            margin: 0 30px 0 20px;
        } 

        .industries h2 {
            font-size: 24px;
            font-weight: 600;
            line-height: 32px;
            text-align: center;
            margin-bottom: 38px;
        }

        .industry {
            display: flex;
            padding: 20px 10px;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
            border-radius: 13px;
            margin-bottom: 25px;
        }

        .desribe p:first-child {
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 5px;
            font-weight: 600;
        }

        .desribe p:last-child {
            font-size: 14px;
            line-height: 128.7%;
            font-weight: 400;
            color: #303133;
            opacity: .8;
        }

        ${jobsCSS}

        /* accordion */

        .accordion_item {
            border-bottom: 1px solid rgba(119, 119, 119, 0.15);
        }

        .accordion_item:last-child {
            border-bottom: none;
        }

        .accordion_item_header {
            padding: 14px 0;            
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
            text-transform: capitalize;
        }

        .accordion_item_header.active p {
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
            margin: 0 -20px 0;
            padding: 0 20px;
            ${transition}
        }

        .accordion_item_body_element {
            display: flex;
            margin-bottom: 20px;
            overflow: hidden;
            background: #FFFFFF;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
            border-radius: 13px;
        }

        .accordion_item_body_element img {
            width: 130px;
            height: 124px;
        }

        .accordion_item_body_element .city {
            font-weight: 600;
            font-size: 20px;
            color: ${color_black};
            margin-bottom: 10px;
        }

        .accordion_item_body_element .sign {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #00A8F4;
        }

        .accordion_item_body_element .sign img {
            width: auto;
            height: auto;
            margin-left: 10px;
        }

        .accordion_item_body_element .text {
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
            margin-bottom: 45px;
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

        .faq .accordion_item_body_element {
            flex-direction: column;
            border-radius: 0;
            overflow: auto;
            box-shadow: none;
            color: #777777;
        }

        .faq .accordion_item_body_element ol {
            margin-top: 0;
        }
        
        .faq .accordion_item_body_element p,
        .faq .accordion_item_body_element li {
            font-size: 14px;
            line-height: 24px;
        }

        .tns-outer {
            margin: 0 -25px;
        }

        .tns-item {
            margin: 30px 0;            
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
            padding-bottom: 25px;
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

        section.faq a, 
        section.faq span[data-sign] {
            color: #00A8F4;
            text-decoration: underline;
            font-weight: 600;
        }

        .slider {
            margin-top: -20px;
        }

        .popular_shifts button {
            margin-bottom: 10px;
        }

        #row-unique-0 p {
            font-weight: 700 !important;
            font-size: 33px;
            color: #303133;
            line-height: 50px;
            text-align: center !important;
        }

        .chooses h2 {
            text-align: center;
            margin: 10px 0 45px;
        }

        .choose {
            display: flex;
            flex-direction: row;
            margin-bottom: 15px;
        }

        .choose img {
            max-width: 60px;
            max-height: 60px;
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
            border-radius: 50%;
            margin-right: 30px;
        }

        .chooses .text p:first-child {
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 23px;
        }

        .chooses .text p:last-child {            
            font-size: 15px;            
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            opacity: .75;
        }
    </style>
    `

    /* JS */

    // parse text as CSS
    document.head.insertAdjacentHTML('beforeend', pdpStyle)

    const playSlider = (mySlider) => {
        const observer = new IntersectionObserver(callbackFunction, {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        });

        function callbackFunction(entries) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    observer.disconnect()

                    mySlider.play()
                }
            });
        }

        observer.observe(document.getElementById('slider-ow'));
    }

    /* Interval 0: run scripts */
    let waitForPeopleSection = setInterval(() => {
        if (document.querySelector('.post-content')) {
            clearInterval(waitForPeopleSection)

            // Parse my text as HTML
            document.querySelector('.post-content').insertAdjacentHTML('afterbegin', pdpTemplate)

            /* Interval 1: Move 'Industries' section behind my 'Reviews' section */
            const waitForIndustriesSection = setInterval(() => {
                if (document.getElementById('ipmb-industries-we-serve') && document.querySelector('.reviews')) {
                    clearInterval(waitForIndustriesSection)

                    document.querySelector('.reviews').insertAdjacentElement('afterend', document.getElementById('ipmb-industries-we-serve'))
                }
            }, intervalTimeout);

            /* Interval 2: Initialize Tiny Slider script after Slider appearence in the DOM */
            const waitForSlider = setInterval(() => {
                if (document.getElementById('slider') && typeof tns === 'function') {
                    clearInterval(waitForSlider)

                    const slider = tns({
                        container: '#slider',
                        items: 1,
                        center: true,
                        edgePadding: 60,
                        gutter: 20,
                        mouseDrag: true,
                        swipeAngle: 30,
                        controls: false,
                        nav: true,
                        navPosition: 'bottom',
                        loop: true,
                        autoplay: true,
                        autoplayButton: false,
                        autoplayButtonOutput: false,
                        autoplayHoverPause: true,
                        autoplayTimeout: 5000,
                    })

                    // start autoplay, when slider is visible
                    slider.pause()
                    playSlider(slider)

                    // add dataLayer events
                    slider.events.on('touchEnd', () => {
                        callEvent('Swipe Slider', 'Dragging')
                    })

                    let waitForBullets = setInterval(() => {
                        if (document.querySelector('.tns-nav')) {
                            clearInterval(waitForBullets)

                            document.querySelector('.tns-nav').addEventListener('click', (e) => {
                                if (e.target.closest('.tns-nav button')) {
                                    callEvent('Swipe Slider', 'Click on a bullet')
                                }
                            })
                        }
                    }, intervalTimeout);
                }
            }, intervalTimeout);

            /* Interval 3: Initialize Form script after Form appearence in the DOM */
            const waitForForm = setInterval(() => {
                if (document.querySelector('#area_form button')) {
                    clearInterval(waitForForm)

                    const form = document.getElementById('area_form')
                    const select = document.getElementById('area_select')

                    // This defines what happens when the user tries to submit the data
                    document.querySelector('#area_form button').addEventListener('click', () => {
                        callEvent('Click on Get Started button')

                        if (select.value !== '') {
                            signLogic()
                        } else {
                            form.classList.add('show_error')

                            callEvent('Validation failed')
                        }
                    });

                    select.addEventListener('change', () => {
                        callEvent('Select a city from Area dropdown', select.value)
                    })

                    document.querySelector('#area_form').addEventListener('change', () => {
                        form.classList.remove('show_error')
                    }, { once: true });
                }
            }, intervalTimeout);

            /* Interval 4: Initialize Accordion script after Accordions appearence in the DOM */
            const waitForAccordions = setInterval(() => {
                if (document.querySelectorAll('.accordion')[1]) {
                    clearInterval(waitForAccordions)

                    document.querySelectorAll('.accordion').forEach(accordion => {
                        accordion.addEventListener('click', (e) => {
                            if (e.target.closest('.accordion_item_header')) {
                                const accordionHeader = e.target.closest('.accordion_item_header')
                                const accordionBody = accordionHeader.nextElementSibling

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

                                if (e.target.closest('.faq')) {
                                    callEvent('Click on FAQ', accordionHeader.innerText)
                                }
                                if (e.target.closest('.locations')) {
                                    callEvent('Click on State. Locations', accordionHeader.innerText)
                                }
                            }

                            if (e.target.closest('.accordion_item_body_element .sign')) {
                                const clickedCity = e.target.closest('.accordion_item_body_element .sign')?.previousElementSibling.dataset.city

                                callEvent('Click on City. Locations', `${clickedCity}`)

                                localStorage.setItem('city', clickedCity)

                                window.open("https://www.upshift.work/shifts-near-you/", "_self")
                            }
                        })
                    });
                }
            }, intervalTimeout);


            // set last row depends on the page
            let row = ''

            if (isForPeople) {
                row = '#row-unique-8'
            } else {
                row = '#row-unique-9'
            }

            /* Interval 5: Initialize Sign Up script after Buttons appearence in the DOM */
            const waitForBtns = setInterval(() => {
                if (document.querySelectorAll('[data-sign]')[4]) {
                    clearInterval(waitForBtns)

                    const form = document.getElementById('area_form')
                    const select = document.getElementById('area_select')

                    // add logic to Sign Up buttons
                    document.querySelectorAll('[data-sign]').forEach(btn => {
                        btn.addEventListener('click', () => {
                            // logic
                            if (select.value !== '') { // Sign Up                            
                                signLogic()
                            } else { // Scroll to Sign Form                            
                                form.classList.add('show_error')

                                callEvent('Validation failed')

                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }

                            // call event
                            if (btn.closest('section')) {
                                const sectionName = btn.closest('section').className.replace('_', ' ')

                                callEvent('Click on Apply/Join', sectionName)
                            } else if (btn.closest(row)) {
                                callEvent('Click on Apply/Join', 'flexible work')
                            }
                        })
                    })
                }
            }, intervalTimeout);

            /* Interval 6: Change btn logic */
            const waitForLastBtn = setInterval(() => {
                if (document.querySelector(`${row} p`)) {
                    clearInterval(waitForLastBtn)

                    document.querySelector(`${row} .btn-container`).insertAdjacentHTML('afterend', `<button class="btn_white" data-sign>Apply now</button>`)
                }
            }, intervalTimeout);
        }
    }, intervalTimeout);

    // set location and open Shifts page
    const signLogic = () => {
        const select = document.getElementById('area_select')

        document.querySelector('.show_error')?.classList.remove('show_error')

        localStorage.setItem('city', select.value)

        window.open("https://www.upshift.work/shifts-near-you/", "_self")
    }
} else { /* 'Shifts near you' Page  */

    /* HTML */

    const nearJobs = {
        'Cincinnati, OH': [
            [
                'Prep cook',
                'EST $136',
                '$17/hr', '9:00 a.m. - 5:00 p.m.',
                'The Phoenix',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.89'
            ],
            [
                'Stadium Attendant',
                'EST $126',
                '$18/hr', '3:00 p.m. - 10:00 p.m.',
                'FC Cincinnati Stadium',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.76'
            ],
            [
                'Banquet Attendant',
                'EST $144',
                '$18/hr', '10:00 a.m. - 6:00 p.m.',
                'Cincinnati Museum Center',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.83'
            ],
            [
                'Concession Cashier',
                'EST $70',
                '$14/hr', '2:00 p.m. - 7:00 p.m.',
                'Duke Energy Convention Center',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.73'
            ],

        ],
        'Miami, FL': [
            [
                'Bartender',
                'EST $133',
                '$19/hr', '3:00 p.m. - 10:00 p.m.',
                'LoanDepot Park',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.89'
            ],
            [
                'Concessions',
                'EST $80',
                '$16/hr', '2:00 p.m. - 7:00 p.m.',
                'FLA Live Arena',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.76'
            ],
            [
                'Suite Runner',
                'EST $126',
                '$18/hr', '4:00 p.m. - 11:00 p.m.',
                'FTX Arena',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.83'
            ],
            [
                'Concession Cashier',
                'EST $120',
                '$15/hr', '10:00 a.m. - 6:00 p.m.',
                'Miami Beach Convention Center',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.73'
            ],
        ],
        'others': [
            [
                'Prep cook',
                'EST $136',
                '$17/hr', '9:00 a.m. - 5:00 p.m.',
                'Restaurant',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.89'
            ],
            [
                'Stadium Attendant',
                'EST $126',
                '$18/hr', '3:00 p.m. - 10:00 p.m.',
                'Stadium',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.76'
            ],
            [
                'Banquet Attendant',
                'EST $144',
                '$18/hr', '10:00 a.m. - 6:00 p.m.',
                'Museum Center',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.83'
            ],
            [
                'Concession Cashier',
                'EST $70',
                '$14/hr', '2:00 p.m. - 7:00 p.m.',
                'Convention Center',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.73'
            ],
            [
                'Bartender',
                'EST $133',
                '$19/hr', '3:00 p.m. - 10:00 p.m.',
                'Park',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.89'
            ],
            [
                'Concessions',
                'EST $80',
                '$16/hr', '2:00 p.m. - 7:00 p.m.',
                'Sports Arena',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.76'
            ],
            [
                'Suite Runner',
                'EST $126',
                '$18/hr', '4:00 p.m. - 11:00 p.m.',
                'Hotel',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.83'
            ],
            [
                'Concession Cashier',
                'EST $120',
                '$15/hr', '10:00 a.m. - 6:00 p.m.',
                'Convention Center',
                ['star', 'star', 'star', 'star', 'star-half'],
                '4.75'
            ]
        ]
    }

    const currentCity = localStorage.getItem('city') || 'Miami, FL'

    const nearJobsHTML = getRandomItems(nearJobs[currentCity] || nearJobs['others'], 3).map(job => `
<div class="slide">
                <div class="slide_header">
                    <div>
                        <p>${job[0]}</p>                        
                    </div>
                    <div>
                        <p>${job[1]}</p>
                        <p>${job[2]}</p>
                    </div>
                </div>
                <div class="slide_body">      
                    <div class="place_wrapper">
                        <p class="work_place">${job[4]}</p>
                        <div class="work_rating">
                            <div>
                                ${job[5].map(star => `<img src="${imgFolderLink}/${star}.svg" alt="${star}"/>`).join('')}
                            </div>
                            <span>${job[6]}</span>
                        </div>                        
                    </div>    
                    <div>
                        <p class="work_time"><img src="${imgFolderLink}/time.svg" alt="time">${job[3]}</p>
                    </div>                              
                </div>               
            </div>
    `).join('')

    const nearTemplate = `
    <section>
        <h2>We’ve found flexible shifts in <span>${currentCity}</span></h2>
        <p class="subtitle">Here’s a sneak peek for you. Become Upshifter and apply for them! It’s absolutely free!</p>
        <div class="wrapper">
            ${nearJobsHTML}
        </div>
        <div class="btn_wrapper">
            <a href="/for-people/sign-up/">Get started</a>
        </div>        
    </section>
    `

    /* CSS */
    const nearStyle = /*html*/`
    <style>
        section {
            padding: 30px 25px 0;
        }

        section p,
        section span,
        section h2 {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            line-height: normal;
        }

        section h2 {            
            font-weight: 800;
            font-size: 33px !important;
            line-height: 40px;
            color: #303133;
        }

        section h2 span {
            color: #00A8F4;
            line-height: inherit;
        }

        section p.subtitle {
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            letter-spacing: 0.01em;
            color: #777777;
            margin: 15px 0 20px;
        }

        ${jobsCSS}

        .slide {
            margin-bottom: 20px;
        }

        .slide_body {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .slide_body .place_wrapper {
            width: 47%;
        }

        .wrapper {
            position: relative;
            margin: 0px -25px;    
            padding: 0 25px;
            overflow: hidden;
        }

        .wrapper::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: linear-gradient(0.24deg, #FFFFFF 21%, rgba(255, 255, 255, 0) 40%);
        }
        
        .btn_wrapper {
            position: fixed;
            bottom: 40px;
            left: 0;
            width: 100%;
            text-align: center;
            padding: 0 20px;
            z-index: 2;
        }

        .btn_wrapper a {           
            display: block;                        
            padding: 13px;
            background: #00A8F4;
            color: #fff !important;
            border-radius: 8px;
            font-weight: 600;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;            
            line-height: normal;          
            text-transform: capitalize;              
        }

        .work_rating div {
            white-space: nowrap;
        }

        .work_rating img {
            width: 12px;
            height: 12px;
        }

        .slide_header {
            padding: 20px 20px 15px;
        }

        .slide_body {
            padding: 15px 20px 20px;
        }

        p.work_place {
            margin-bottom: 0;
        }

        #row-unique-1, 
        #row-unique-2 {
            padding-right: 10px;
            padding-left: 10px;
        }

        .footer-scroll-top {
            display: none !important;
        }

        #colophon {            
            display: none !important;            
        }

        .acsb-trigger {
            bottom: 115px !important;            
        }
    </style>
    `

    /* JS */

    // parse text as CSS
    document.head.insertAdjacentHTML('beforeend', nearStyle)

    // parse text as HTML
    const waitForContent = setInterval(() => {
        if (document.querySelector('.post-content')) {
            clearInterval(waitForContent)

            document.querySelector('.post-content').insertAdjacentHTML('afterbegin', nearTemplate)
        }
    }, intervalTimeout);

    // call event 
    const waitForBtn = setInterval(() => {
        if (document.querySelector('.btn_wrapper a')) {
            clearInterval(waitForBtn)

            document.querySelector('.btn_wrapper a').addEventListener('click', () => {
                callEvent('Click on Get Started on the Shifts page')
            })
        }
    }, intervalTimeout);
}

callEvent('loaded')

// initial clarity
let waitForClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(waitForClarity)

        clarity('set', 'landing_page_optimization', 'variant_1');
    }
}, intervalTimeout);