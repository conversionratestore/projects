let styles = `
<style>
    .watch-page {
        overflow-x: hidden;
    }
    .timeline {
        border: 1px solid #C5D3D9;
        background: #FFFFFF;
        opacity: 0;
        padding: 0 45px;
        border-radius: 2px;
        margin: 30px 0 60px;
        position: relative;
    }
    .timeline_container {
        display: flex;
    }
     .timeline button {
        height: 100%;
        width: 30px;
        background: #fff no-repeat center / 10px;
        border: none;
        flex-shrink: 0;
        display: block;
        cursor: pointer;
        position: absolute;
        top: 0; 
        z-index: 2;
        border-right: 1px solid #C5D3D9;
        border-left: 1px solid #C5D3D9;
     }
      
     .timeline button.button-next:before {
        content: '';
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(255, 254, 254, 0) 80%);
        position: absolute;
        top: 0;
        width: 130px;
        height: 100%;
        pointer-events: none;
        right: calc(100% + 1px);
        transform: matrix(-1, 0, 0, 1, 0, 0);
     }
     .timeline button[disabled] {
        opacity: 0;
        pointer-events: none;
     }
     .timeline button.button-prev {
        left: -1px;
        border-radius: 2px 0 0 2px;
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-left-double.svg");
     }
     .timeline button.button-next {
        right: -1px;
        border-radius: 0 2px 2px 0;
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-right-double.svg");
     }
     .tns-outer {
        width: 100%;
     }
    .slide {
        position: relative;
        padding-top: 6px;
        padding-bottom: 30px;
        padding-left: 2px;
    }
    .slide:first-child {
        padding-left: 38px!important;
    }
    .slide:first-child:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 20px;
        height: 23px;
        width: 29px;
        background: url("https://conversionratestore.github.io/projects/samcart/img/play.svg") no-repeat center / contain;
    }
    .line {
        height: 4px;
        width: 100%;
        background-color: #046BD9;
        border-radius: 21px;
        display: block;
        margin-top: 10px;
    }
    .slide:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 30px;
        height: 4px;
        background: no-repeat center / contain;
    }

    .slide[data-point="5"] {
        padding-right: 110px;
    }
    .slide[data-point="5"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_5.svg");
        width: 110px;
    }
     .slide[data-point="2"] {
        padding-right: 54px;
    }
    .slide[data-point="2"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_2.svg");
        width: 54px;
    }
     .slide[data-point="6"] {
        padding-right: 130px;
    }
    .slide[data-point="6"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_6.svg");
        width: 130px;
    }
     .slide[data-point="1"] {
        padding-right: 34px;
    }
     .slide[data-point="1"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_1.svg");
        width: 34px;
    }
     .slide[data-point="0"]:before {
        content: none;
    }
    .timeline_clock {
        /*font-family: Gilroy;*/
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.1em;
        color: #183B56;
        margin-bottom: 5px;
    }
    .timeline_title {
        max-width: 159px;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #183B56;
    }
    .relative {
        position: relative;
    }
    .tippy-tooltip {
        background: #EEEEEE;
        box-shadow: 0 0.688073px 4.06px rgba(0, 0, 0, 0.07), 6px 7.26px 20.4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        max-width: 230px!important;
    }
    .tippy-popper {
        top: -3px;
    }
    .tippy-tooltip[data-placement="bottom-end"] {
        margin-right: -30px;
    }
    .tippy-tooltip[data-placement^=top]>.tippy-arrow {
        border-top-color: #eee;
        border-width: 10px 20px 0!important;
        bottom: -10px!important;
    }
    .tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
        border-bottom-color: #eee;
        border-width: 0 20px 10px!important;
        top: -10px!important;
    }
    .tippy-tooltip[data-placement="bottom-start"]>.tippy-arrow:before {
        left: 13px!important;
    }
    .tippy-tooltip[data-placement="bottom-end"]>.tippy-arrow:before {
        left: auto!important;
        right: 13px!important;
    }
    .tippy-content {
        font-weight: 400;
        text-transform: initial;
        font-style: normal;
        font-family: 'Roboto', sans-serif;
        padding: 15px!important;
        font-size: 12px;
        line-height: 17px;
        color: #5A7386;
    }
    .tippy-arrow {
        color: #EEEEEE;
        width: 40px;
        height: 10px;
    }
    .w-bold {
        font-weight: 900;
        color: #F2813F;
    }
    
    @media only screen and (min-width: 993px) {
        .stage__player {
            width: calc(100% - 280px)
        }
        .stage__sidebar {
            flex: 0 0 280px;
        }
        .react-player__wrapper video {
            max-height: calc(100vh - 49px - 24px - 170px);
        }
    }
    @media only screen and (max-width: 992px) {
        .timeline_title {
            font-size: 10px;
            max-width: 140px;
        }
        .slide[data-point="6"] {
            padding-right: 68px;
        }
        .slide[data-point="6"]:before {
            background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_5_mob.svg");
            width: 68px;
        }
        .slide[data-point="5"] {
            padding-right: 57px;
        }
        .slide[data-point="5"]:before {
            background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_4_mob.svg");
            width: 57px;
        }
        .slide[data-point="0"] {
            padding-right: 32px;
        }
        .slide[data-point="2"] {
            padding-right: 32px;
        }
        .slide[data-point="2"]:before {
            background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_2_mob.svg");
            width: 32px;
        }
         .slide[data-point="1"] {
            padding-right: 18px;
        }
         .slide[data-point="1"]:before {
            width: 18px;
        }
        .timeline {
            padding: 0 5px 0 20px!important;
        }
        .tippy-tooltip {
            max-width: 146px!important;
        }
        .tippy-content {
            padding: 10px!important;
        }
        .timeline button {
            width: 26px;
            background-size: 9px;
        }
        .timeline button.button-next:before {
            width: 65px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 7%, rgba(255, 254, 254, 0) 90%);
        }
    }
</style>`;
let arrTooltip = {
    '2:44': [`The biggest <br>mistake & <br>how to avoid it`, `The Biggest Mistake I Made When Launching My First Online Course, and How You Can Avoid It`, 5],
    '11:50': [`Become an expert <br>in the field with the '1 Step Rule'`, `The '1 Step Rule' that instantly turns you into an expert...with a course people will line up to buy`, 2],
    '17:34': [`The "1 Page Funnel" that sells your course for you`, `The simple '1 Page Funnel' that sells your course for you around the clock (even if you suck at selling, lol)`, 5],
    '26:22': [`Today's #1 Traffic Source that you can tap in`, `Today's #1 Traffic Source, and how to quickly tap into it & get dozens of new sales each day`,2],
    '33:02': [`How to Launch <br>Your Course <br>in 72 Hours`, `The secret to launching your online course business in less than 72 hours (even if you hate technology or don't have a team helping you!)`,6],
    '45:50': [`What you get with <br>today's special <br>offer`, `Discover how many awesome and helpful things you will get with today's special offer`,2],
    '48:29': [`<span class="w-bold">Masterclass:</span> Launch <br>an Online Business <br>With 1 Page`, `The '1 Page Masterclass' Bonus where you'll discover how to launch an online business with 1 page`,2],
    '51:47': [`The Secret <br>to Unlimited <br>Traffic`, `The secret to unlimited traffic (and more bonuses you get with our offer)`,1],
    '52:55': [`<span class="w-bold">Guide:</span> Set up Your <br>Course seamlessly <br>through SamCart`, `The help you get to set up your course seamlessly through SamCart`,2],
    '54:32': [`Reach the <br>Community of <br>20,000+ Creators`, `Find out the way how to reach the community of 20,000+ creators`,0]
};

let createTimeline = `
    <div class="timeline">
        <div class="timeline_container">
            <button class="button-prev"></button>
            <div class="slider"></div>
            <button class="button-next"></button>
        </div>
    </div>
`;

function setSlide(time, title, tooltip, countPoint) {
    return ` 
        <div class="slide" data-point="${countPoint}">
            <p class="timeline_clock">${time}</p>
            <p class="timeline_title">${title}
                <span class="tooltip_wrapper relative" data-title="${tooltip}">
                    <img src="https://conversionratestore.github.io/projects/samcart/img/alert-circle.svg" alt="icon">
                </span>
            </p>
            <div class="line"></div>
        </div>`
}

let action, label;

function pushDataLayer(action, label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    if (label) {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add a timeline',
            'eventAction': action,
            'eventLabel': label
        });
    } else {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add a timeline',
            'eventAction': action
        });
    }
}

let optionMut = {
    childList: true,
    subtree: true
}

let countI = 0;

let mut = new MutationObserver(function (muts) {
    if (document.querySelector('.audience-experience') && document.querySelector('.audience-experience') != null && !document.querySelector('.timeline')) {
        mut.disconnect();
        let linkCustom = document.createElement('link');
        linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
        linkCustom.rel = 'stylesheet';
        document.head.appendChild(linkCustom);

        let scriptCustom = document.createElement('script');
        scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
        scriptCustom.async = false;
        document.body.appendChild(scriptCustom);

        let scriptPopper = document.createElement('script');
        scriptPopper.src = 'https://unpkg.com/popper.js@1';
        scriptPopper.async = false;
        document.body.appendChild(scriptPopper);

        let scriptTippy = document.createElement('script');
        scriptTippy.src = 'https://unpkg.com/tippy.js@5';
        scriptTippy.async = false;
        document.body.appendChild(scriptTippy);

        document.body.insertAdjacentHTML('afterbegin', styles);
        document.querySelector('.audience-experience').insertAdjacentHTML('beforebegin', createTimeline);

        for (let key in arrTooltip) {
            document.querySelector('.slider').insertAdjacentHTML('beforeend', setSlide(key, arrTooltip[key][0], arrTooltip[key][1], arrTooltip[key][2]))
        }
        document.querySelector('.slider').addEventListener('click', () => {
            action = 'Click on timeline slider';
            pushDataLayer(action)
        })
        countI = 1;
    }
    mut.observe(document, optionMut);
    if(document.querySelectorAll('.tooltip_wrapper') && document.querySelectorAll('.tooltip_wrapper') != null && document.querySelectorAll('.tooltip_wrapper').length > 9 && countI == 1 && !document.querySelector('.tns-outer')) {
        mut.disconnect();
        let run = setInterval(() => {
            if (document.querySelector('.tns-outer') && document.querySelector('.tns-outer') != null) {
                clearInterval(run)
                console.log('stopRun')
              
                document.querySelector('.timeline').style.opacity = '1';
                pushDataLayer('loaded')
              
                if (window.matchMedia('(max-width: 992px)').matches) {
                    document.querySelector('.button-next').addEventListener('click', () => {
                        document.querySelector('#tns1-mw').style.paddingLeft = '20px';
                    })
                    document.querySelector('.button-prev').addEventListener('click', (e) => {
                        setTimeout(() => {
                            if (e.target.disabled === true) {
                                document.querySelector('#tns1-mw').style.paddingLeft = '0';
                            }
                        }, 100)
                    })
                }
                document.querySelector('.button-next').addEventListener('click', () => {
                    action = 'Click on right arrow button'
                    pushDataLayer(action)
                })
                document.querySelector('.button-prev').addEventListener('click', () => {
                    action =  'Click on left arrow button'
                    pushDataLayer(action)
                })
                let tippyRun = setInterval(() => {
                    clearInterval(tippyRun)
                    document.querySelectorAll('.tooltip_wrapper').forEach((el,index) => {
                        tippy(el, {
                            content: el.getAttribute('data-title'),
                            placement: 'bottom-start'
                        });
                        el.addEventListener('mouseover', () => {
                            action = 'hover on tooltipe';
                            label = el.closest('.timeline_title').innerText;
                            pushDataLayer(action, label)
                        })
                    });
                }, 200);
                countI = 0;
            } else {
                let sliderCategories = tns({
                    container: document.querySelector('.slider'),
                    autoWidth: true,
                    autoplay: false,
                    axis: 'horizontal',
                    controls: true,
                    loop: false,
                    prevButton: document.querySelector('.button-prev'),
                    nextButton: document.querySelector('.button-next'),
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    mouseDrag: true,
                    nav: false,
                    preventScrollOnTouch: 'auto',
                    swipeAngle: false,
                });
            }
        }, 300)
    }
});
mut.observe(document, optionMut);

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2592989,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'add_a_timeline_passive_income_video');
    hj('event', 'add_a_timeline_passive_income_heatmap');
