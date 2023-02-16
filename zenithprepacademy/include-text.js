let dir = 'https://conversionratestore.github.io/projects/zenithprepacademy/img/';
let href = window.location.href;

let html1 = `
<section class="offer-section">
    <div class="container">
        <h1 class="fw-bold">Free 'Roadmap To College' Call</h1>
        <div class="d-lg-flex">
            <div class="col-lg-6">
                <p class="fw-bold fs-18">A FREE 45-minute college admission strategy call where you’ll get:</p>
                <ul class="list">
                    <li class="d-flex items-center">
                        <img src="${dir}search-user.svg">
                        <span>A detailed breakdown of your child's profile & suitability for our program</span>
                    </li>
                    <li class="d-flex items-center">
                        <img src="${dir}check-list.svg">
                        <span>A personalized year-by-year plan for your child to follow to gain entrance to their dream college</span>
                    </li>
                    <li class="d-flex items-center">
                        <img src="${dir}goal.svg">
                        <span>The milestones your child needs to achieve to become attractive to top universities</span>
                    </li>
                </ul>
                <p class="fw-bold">Additionally, we'll debunk rumours & myths, clear up any confusion, and answer all your questions.</p>
                <div class="d-flex items-center block_no-free">
                    <img src="${dir}no-fee.svg">
                    <p>No prior commitments, no hidden fees</p>
                </div>
                
                <iframe src="https://calendly.com/d/g6c-sbg-ync/meeting-w-admissions-counselor-zoom?hide_event_type_details=1&hide_gdpr_banner=1" width="100%" height="100%" class="calendly-iframe d-lg-none"></iframe>

                <div class="block_please-note">
                    <p><span class="fw-bold">Please note:</span> Due to high demand and limited availability, these meetings are first come, first serve and are not guaranteed throughout the year as we provide these meetings based on our Admissions Counselors’ schedule and bandwidth.</p>
                    <p>The only requirement is that you do not miss your scheduled appointment time and take an availability away from another parent, like you, who is waiting to meet with us. If you need to reschedule, please do so no less than 24 hours before your scheduled meeting.</p>
                </div>  
            </div>
            <div class="col-lg-6">
                <iframe src="https://calendly.com/d/g6c-sbg-ync/meeting-w-admissions-counselor-zoom?hide_event_type_details=1&hide_gdpr_banner=1" width="100%" height="100%" class="calendly-iframe d-lg-block d-none"></iframe>
            </div>
        </div>  
    </div>
</section>`;

let html2 = `
<section class="select-section">
    <div class="container">
        <h2 class="fw-bold">We select only 1000 students per year</h2>
        <div class="pb-8">
            <p>We invest heavily into each of our student's futures, which is why we're highly selective about who is allowed into Zenith Prep Academy.</p>
            <p>Our process requires us to establish a close and long-term partnership with the student's family. That way, there are multiple support and accountability systems for your child to rely on.</p>
            <p>The reason why this is important is because even the best plan will fail if people aren't willing to stick with it. </p>
            <p>So while we're confident that we can reverse-engineer your child into a top university, we first need to see that both the child and family are committed to the process and a good fit.</p>
        </div>
        <p class="text-center fw-bold">Discover whether your child is suitable for Zenith Prep Academy</p>
        <button type="button" class="btn-orange">Book a consultation call</button>
    </div>
</section>`;

function pushDatalayer(action, label = '') {
    console.log(action + ' : ' + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Include text',
        'eventAction': action,
        'eventLabel': label
    });
}

//scroll to
function scrollToElement(targetScroll, offsetTop) {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    seamless.polyfill();
    seamless.scrollBy(window, { behavior: "smooth", top: offsetPosition, left: 0 });
}
//comes into view
function isScrolledIntoView(el) {
    let rect = document.querySelector(el).getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight) ;

    return isVisible;
}


let start = setInterval(() => {
    if ( document.querySelector('.containerWrapper') != null && document.querySelector('#section--75088') != null) {
        clearInterval(start)
    
        //add style
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            #row--80328 {
                max-width: 725px;
                margin: 0 auto!important;
            }
            .calendly-iframe {
                width: 100%;
                height: fit-content;
                min-height: 605px;
                border: 2px solid #D2DFED;
                border-radius: 16px;
                margin-bottom: 10px;
            }
            #section-1852710000 {
                display: none;
            }
            .offer-section {
                background-color: #F7F7F7;
            }
            .offer-section, .select-section {
                padding: 24px 5px 14px;
                color: #2D2D2D;
                font-family: 'Oxygen', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
            .offer-section p, .select-section p {
                margin: 0;
            }
            .offer-section h1 {
                font-size: 30px;
                line-height: 38px;
                margin-bottom: 16px;
            }
            .list {
                padding: 20px 0 0 0;
            }
            .list li {
                margin-bottom: 16px;
                color: #505050;
            }
            .list img, .block_no-free img {
                width: 40px;
                height: 40px;
                margin-right: 12px;
                flex-shrink: 0;
            }
            .block_no-free {
                margin: 16px 0 4px;
                padding: 12px 0;
                border-top: 2px solid #D2DFED;
            }
            /* select-section */
            .select-section h2 {
                font-size: 24px;
                line-height: 32px;
                text-align: center;
                margin-bottom: 24px;
            }
            .select-section p, .block_please-note p {
                color: #505050;
                margin-bottom: 16px;
            }
            .btn-orange {
                font-weight: 700;
                font-size: 16px;
                line-height: 54px;
                text-align: center;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: #2D2D2D;
                width: 100%;
                background: #F29B38;
                border: 2px solid #C27C2D;
                box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.3);
                border-radius: 35px;
                margin: 8px auto 0;
                max-width: 350px;
                display: block;
            }
            .offer-section .container {
                max-width: 970px;
                width: 100%;
            }
            .select-section .container {
                max-width: 685px;
                width: 100%;
            }
            .pb-8 {
                padding-bottom: 8px;
            }
            /* flex */
            .d-flex {
                display: flex;
            }
            .items-center {
                align-items: center;
            }
            /* fonts */
            .fs-18 {
                font-size: 18px;
                line-height: 26px;
            }
            .fw-bold {
                font-weight: 700;
            }
            .text-center {
                text-align: center;
            }
            .col-lg-6 {
                padding: 0!important;
            }
            .d-none {
                display: none;
            }
            @media (min-width: 992px) {
                .d-lg-none {
                    display: none;
                }
                .d-lg-block {
                    display: block;
                }
                .d-lg-flex {
                    display: flex;
                }
                .col-lg-6 {
                    width: calc(50% - 19px);
                    margin-right: 38px;
                }
                .col-lg-6:nth-child(2n+2) {
                    margin-right: 0;
                }
                .offer-section h1 {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .list {
                    padding-top: 24px;
                }
                .list li {
                    margin-bottom: 20px;
                }
                .block_no-free {
                    margin: 20px 0;
                    border-bottom: 2px solid #D2DFED;
                }
                .offer-section, .select-section {
                    padding: 30px 5px 34px;
                } 
            }
            @media (max-width: 991px) {
                .offer-section .container {
                    max-width: 680px;
                }
            }
        </style>`)

        document.querySelector('.containerWrapper').insertAdjacentHTML('beforebegin', html1)
        document.querySelector('#section--75088').insertAdjacentHTML('afterend', html2)

        document.querySelector('.btn-orange').addEventListener('click', (e) => {
            if (window.matchMedia("(min-width: 992px)").matches) {
                scrollToElement(document.querySelector('.offer-section .col-lg-6'), e.target)
            } else {
                scrollToElement(document.querySelector('.calendly-iframe.d-lg-none'), e.target)
            }
        })
        
        //events
        document.querySelector('.list').addEventListener('click', (e) => {
            if (e.target.closest('li')) {
                pushDatalayer('Click or Tap on new bullets', e.target.closest('li').innerText)
            }
        })
        document.querySelector('.block_no-free').addEventListener('click', (e) => {
        pushDatalayer('Click or Tap on new bullets', e.target.innerText)
        })
        document.querySelector('.btn-orange').addEventListener('click', (e) => {
            pushDatalayer('Click on book a consultation call button')
        })
        if (window.matchMedia("(min-width: 992px)").matches) {
            document.querySelector('.list').addEventListener('mouseover', (e) => {
                if (e.target.closest('li')) {
                    pushDatalayer('Hover on new bullets', e.target.closest('li').innerText)
                }
            })
            document.querySelector('.block_no-free').addEventListener('mouseover', (e) => {
            pushDatalayer('Hover on new bullets', e.target.innerText)
            })
        }

        let viewedBullets = false, 
            viewedSelect = false,
            viewedBtn = false;

        if ((isScrolledIntoView('.list') == true && viewedBullets == false) || (isScrolledIntoView('.select-section h2') == true && viewedSelect == false)) {
            setTimeout(() => {
                if (isScrolledIntoView('.list') == true && viewedBullets == false) {
                    viewedBullets = true;
                    pushDatalayer('Visibility new bullets')
                }
                if (isScrolledIntoView('.select-section h2') == true && viewedSelect == false) {
                    viewedSelect = true;
                    pushDatalayer('Visibility select only 1000 text')
                }
            }, 5000)
        }
        window.addEventListener('scroll', (e) => {
            if ((isScrolledIntoView('.list') == true && viewedBullets == false) || (isScrolledIntoView('.select-section h2') == true && viewedSelect == false)) {
                setTimeout(() => {
                    if (isScrolledIntoView('.list') == true && viewedBullets == false) {
                        viewedBullets = true;
                        pushDatalayer('Visibility new bullets')
                    }
                    if (isScrolledIntoView('.select-section h2') == true && viewedSelect == false) {
                        viewedSelect = true;
                        pushDatalayer('Visibility select only 1000 text')
                    }
                }, 5000)
            }
            if (isScrolledIntoView('.btn-orange') == true && viewedBtn == false) {
                viewedBtn = true;
                pushDatalayer('Visibility book a consultation call button')
            }
        })
        if (document.querySelector('.exp-loading') != null) {
            document.querySelector('.exp-loading').remove()
        }
        pushDatalayer('loaded')
    }
});
