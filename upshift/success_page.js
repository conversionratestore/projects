console.log('script loaded!!');

if (window.location.hostname.includes('typeform')) {
    console.log('typeform');
    const target = document

    const config = {
        childList: true,
        subtree: true
    }

    const callback = function (mutationsList) {
        for (let mutation of mutationsList) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue

                if (node.matches('.jTQElb')) {
                    const waitForEl = setInterval(() => {
                        if (document.querySelector('[data-qa="thank-you-button"] .hZUeEQ')) {
                            clearInterval(waitForEl)

                            if (document.querySelector('[data-qa="thank-you-button"] .hZUeEQ').innerText === 'Exit the survey') {
                                const url = window.location.href
                                let execName = /fname=([^&]+)/.exec(url)
                                let capturedName = execName ? execName[1] : ''

                                localStorage.setItem('userName', capturedName.replace('%20', ' '))

                                window.location.href = 'https://www.upshift.work/for-people/success-page/';

                                console.log('MATCHES >>>>>>>>>');
                                console.log(node);
                            }
                        }
                    }, 100)
                }
            }
        }
    }

    const observer = new MutationObserver(callback)
    observer.observe(target, config)
}
if (window.location.pathname.includes('success')) {
    console.log('success');
    runSuccessPage()
}

function runSuccessPage() {
    const successCSS = /*html*/`
<style>
    section .content {
        padding: 25px;
    }

    section p {
        color: #303133;
        margin: 0;
        font-family: 'Poppins', sans-serif;
    }

    /* message_section */

    .message_section .title {
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;
    }

    .message_section .title span {
        color: #3DA454;
        text-decoration: underline;
    }

    .subtitle {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        margin: 12px 0;
    }

    .box {
        border: 1px solid #0D99FF;
        border-radius: 10px;
        padding: 12px;
    }

    p.box_title {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
    }

    .time {
        font-weight: 700;
        font-size: 28px;
        line-height: 22px;
        text-align: center;
        color: #0D99FF;
        margin: 25px 0 12px;
    }

    .check_mail {
        margin: 12px 0;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #1EABF1
    }

    .info {
        background: #F1F9FE;
        border-radius: 8px;
        padding: 20px;
        display: flex;
        flex-direction: row;
    }

    .info img {
        margin-right: 12px;
    }

    .info p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
    }

    /* video_section */

    .video_section {
        background-color: rgba(198, 226, 247, 0.35);
    }

    .video_section .title {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        color: #000000;
    }

    .video_wrapper {
        margin: 24px 0;
        height: 185px;
        width: 100%;
    }

    .video_wrapper iframe {
        height: 100%;
        width: 100%;
    }

    .video_section p {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
    }

    /* shifts_section */

    .shifts_section .title {
        margin: 18px 0 24px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
    }

    .wrapper {
            position: relative;
            margin: 0px -25px -70px;    
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

    .slide {
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.03), 0px 4px 20px #E8EBF3;
        border-radius: 10px;
        margin-bottom: 20px;
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
    }

    .slide_header div p {
        font-size: 12px;
        font-weight: 400;    
    }

    .slide_body {
        display: flex;
        justify-content: space-between;
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

    .work_rating > div {
        white-space: nowrap;
    }

    .work_rating img {
        margin-right: 4px;
    }

    .slide_header {
        padding: 20px 20px 15px;
    }

    .slide_body {
        padding: 15px 20px 20px;
    }

    .work_rating span {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #303133;
        margin-left: 3px;
    }

    .work_time {
        display: inline-flex;
        letter-spacing: 0.01em;
        font-size: 12px;
        padding-left: 2px;
        line-height: 18px;
    }

    .work_time img {
        margin-right: 8px;
        display: inline-block;
    }

    #colophon {
        display: none !important;
    }
    </style>
`

    const shifts = [
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

    /* parse URL */
    let countdownTime = 120;

    if (!localStorage.getItem('startDate')) { // check Date
        localStorage.setItem('startDate', Date.now().toString());
    } else {
        let currentDate = Date.now();

        countdownTime = 120 - (currentDate.toString() - localStorage.startDate) / 1000
    }

    /* html and etc */

    const getRandomItems = (arr, num) => arr.sort(() => Math.random() - 0.5).slice(0, num)

    const imgFolderLink = `https://conversionratestore.github.io/projects/upshift/img`

    const shiftsHTML = getRandomItems(shifts, 3).map(job => `
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

    const htmlName = localStorage.getItem('userName') || ''

    const successTemplate = /*html*/`
    <main class="main_wrapper">
        <section class="message_section">
            <div class="content">
                <p class="title">Congratulations${htmlName ? ', ' + htmlName : ''}! 🎉<br>You have been <span>approved</span> to join Upshift.</p>
                <p class="subtitle">Next you just need to <b>complete your onboarding</b> to start making extra money!
                </p>
                <div class="box timer">
                    <p class="box_title">We’ll email and SMS you with suggested times in:</p>
                    <p class="time"></p>
                </div>
                <div class="box message" hidden>
                    <p class="box_title">SMS and email with suggested times have been sent!</p>
                    <p class="check_mail">Please check your email</p>
                    <div class="info">
                        <img src="${imgFolderLink}/info_blue.svg" alt="info">
                        <p>In case you cannot find the email,<br>check your spam folder</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="video_section">
            <div class="content">
                <p class="title">Watch this short video to see what to expect during the onboarding</p>
                <div class="video_wrapper">
                    <iframe src="https://www.youtube.com/embed/TY3rh8xfvO8" frameborder="0" allowfullscreen>
                    </iframe>
                </div>
                <p><b>In-person Onboarding</b> is a short informational session in our office.<br>
                    During this onboarding, you will complete tax paperwork and you’ll receive a brief orientation on
                    how to
                    use Upshift.<br>
                    You’ll be able to pick up shifts through our app as soon as the meeting is finished!</p>
            </div>
        </section>
        <section class="shifts_section">
            <div class="content">
                <p class="title">Some of the shifts you can find<br>in our App</p>
                <div class="wrapper">
                    ${shiftsHTML}
                </div>
            </div>
        </section>
    </main>
`

    const intervalTimeout = 200

    document.head.insertAdjacentHTML('beforeend', successCSS)

    const waitForBody = setInterval(() => {
        if (document.querySelector('.post-content')) {
            clearInterval(waitForBody)

            document.querySelector('.post-content').insertAdjacentHTML('afterbegin', successTemplate)
        }
    }, intervalTimeout)

    const startTimer = (duration, display) => {
        let timer = duration

        let minutes, seconds

        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < -1) {
                timer = duration;

                document.querySelector('.box.message').hidden = false;
                document.querySelector('.box.timer').hidden = true;
            }
        }, 1000);
    }

    const waitForTimer = setInterval(() => {
        if (document.querySelector('.time')) {
            clearInterval(waitForTimer)

            startTimer(countdownTime, document.querySelector('.time'))
        }
    }, intervalTimeout)

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Success Page',
        'eventAction': 'loaded'
    })

    let isSuccessClarity = setInterval(() => {
        if (typeof clarity === 'function') {
            clearInterval(isSuccessClarity)

            clarity('set', 'success_page', 'variant_1')
        }
    }, 100)
}