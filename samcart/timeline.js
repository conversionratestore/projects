let styles = `
<style>
    .watch-page {
        overflow-x: hidden;
    }
    .stage__player {
        width: calc(100% - 280px)
    }
    .timeline {
        background: #FFFFFF;
        border: 1px solid #C5D3D9;
        border-radius: 2px;
        display: flex;
        margin-top: 30px;
    }
     .timeline button {
        min-height: 126px;
        height: 100%;
        width: 30px;
        background: transparent no-repeat center / 10px;
        border: none;
        flex-shrink: 0;
        display: block;
     }
     .timeline button[disabled] {
        opacity: 0;
        pointer-events: none;
     }
     .timeline button.button-prev {
        border-right: 1px solid #C5D3D9;
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-left-double.svg");
     }
     .timeline button.button-next {
        border-left: 1px solid #C5D3D9;
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-right-double.svg");
     }
     .tns-outer {
        width:  calc(100% - 60px);
        padding: 0 27px!important;
     }
    .slide {
        position: relative;
        padding-top: 6px;
        padding-bottom: 30px;
    }
    .slide:first-child {
        padding-left: 30px!important;
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
        padding: 0 15px;
        height: 4px;
        background: no-repeat center / contain;
    }
    .slide:nth-child(even) {
        padding-right: 110px;
    }
    .slide:nth-child(odd) {
        padding-right: 54px;
    }
    .slide:nth-child(even):before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_5.svg");
        width: 110px;
    }
    .slide:nth-child(odd):before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_2.svg");
        width: 54px;
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
    .tooltip {
        position: absolute;
        left: -10px;
        top: calc(100% + 10px);
    }
    .tooltip_wrapper:hover .tooltip {
        opacity: 1;
        pointer-events: auto;
    }
</style>`;

let arrTooltip = {
    '2:44': [`The biggest <br>mistake & <br>how to avoid it`,`The biggest mistake I made when launching my first online course, and how you can avoid it`],
    '11:50': [`The '1 step rule' <br>Every Expert <br>Must Follow`,`The "1 Step Rule" that instantly turns you into an expert...with a course people will line up to buy`],
    '17:34': [`Create Funnel <br>that Sells Your <br>Course Itself`,``],
    '26:22': [`The Top Traffic <br>Source that <br>generates sales `,``],
    '33:02': [`How to Launch <br>Your Course in <br>72 Hours`,``],
    '45:50': [`What you get with <br>today's special <br>offer`,`What you get with today's special offer`],
    '48:29': [`<span class="w-bold">Masterclass:<span> Launch <br>an Online Business <br>With 1 Page`,`The "1 Page Masterclass" Bonus where you'll discover how to launch an online business with 1 page`],
    '51:47': [`The Secret <br>to Unlimited <br>Traffic`,`The secret to unlimited traffic (and more bonuses you get with our offer)`],
    '52:55': [`<span class="w-bold"Guide:<span> Set up Your <br>Course Through <br>SamCart`,`The help you get to set up your course seamlessly through SamCart`],
    '52:55': [`Reach the <br>Community of <br>20,000+ Creators`,`How to reach the community of 20,000+ creators`,`How to reach the community of 20,000+ creators`]
};

let createTimeline = `
<div class="timeline">
    <button class="button-prev"></button>
    <div class="slider"></div>
    <button class="button-next"></button>
</div>`;

function setSlide(time,title,tooltip) {
    return ` 
        <div class="slide">
            <p class="timeline_clock">${time}</p>
            <p class="timeline_title">${title}
                <span class="tooltip_wrapper relative">
                    <img src="https://conversionratestore.github.io/projects/samcart/img/alert-circle.svg" alt="icon">
                    <span class="tooltip">${tooltip}</span>
                </span>
            </p>
            <div class="line"></div>
        </div>`
}

let linkCustom = document.createElement('link');
linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
linkCustom.rel = 'stylesheet';
document.head.appendChild(linkCustom);

let scriptCustom = document.createElement('script');
scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

function tnsInitialization() {
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

document.body.insertAdjacentHTML('afterbegin', styles);
document.querySelector('.audience-experience').insertAdjacentHTML('beforebegin', createTimeline);

for (let key in arrTooltip) {
    document.querySelector('.slider').insertAdjacentHTML('beforeend',setSlide(key,arrTooltip[key][0],arrTooltip[key][1]))
}
let run = setInterval(() => {
    tnsInitialization()
    clearInterval(run)
},100)

