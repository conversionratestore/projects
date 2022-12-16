let dir = 'https://conversionratestore.github.io/projects/extraapp/img/'

let styles = `
    <style>
        .header-top {
            background: #000000;
            width: 100%;
            padding: 13px 10px 10px;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #FFFFFF;
        }
        .header-top p {
            margin: 0;
        }
        .hero-video-wrap {
            padding-top: 164px!important;
            height: auto!important;
        }
        .nav-bg, .subheading, #Header > div > div.hero-content > div > div:nth-child(3) > em, .hero-notice, .section--intro .features-grid, main > section:nth-child(3), .section--how-does-it-work {
            display: none;
        }
        .nav {
            position: initial;
        }
        .hero {
            padding-top: 40px;
        }
        .hero-content {
            margin-top: 30px;
        }
        .hero-heading {
            text-align: left;
            text-transform: capitalize;
            line-height: 42px;
        }
        .list {
            padding: 0;
            list-style-type: none;
            text-align: left;
            margin-bottom: 24px;
        }
        .list li {
            line-height: 20px;
            margin-bottom: 11px;
            padding-left: 27px;
            position: relative;
        }
        .list li:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background: #71ED99 url(${dir}check.svg) no-repeat center / 55%;
        }
        .cta-button.cta-button--hero {
            font-weight: 700;
            font-size: 16px;
            text-transform: lowercase;
        }
        .cta-button.cta-button--hero:first-letter {
            text-transform: uppercase;
        }
        .rating {
            padding: 5px 13px;
            margin-bottom: 40px;
        }
        .rating svg {
            margin-right: 2px;
            width: 16px;
        }
        .rating p {
            font-weight: 600;
            font-size: 14px;
            line-height: 18px;
            margin: 0;
        }
        .section.section--intro {
            padding-bottom: 5px;
        }
        /* section--why-extra*/
        .section--why-extra {
            padding: 65px 0 18px;
        }
        .why-extra-features {
            padding-bottom: 15px;   
        }
        .section--why-extra img {
            width: 46px;
            height: 46px;
            margin-right: 8px;
        }
        .section--why-extra p {
            margin-top: 12px;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #000000;
        }
        .why-extra-features h4 {
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;
            text-transform: capitalize;
            color: #000000;
            margin: 0;
            font-family: 'Urbane', sans-serif;
        }
        /* section--points */
        .section--points {
            padding: 20px 0;
            background: #000000;
        }
        .section--points p {
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 0;
            color: #FFFFFF;
            padding-left: 10px;
            max-width: 58%;
        }
        .section--points img {
            max-width: 42%;
        }
        /* section--bad-credit */
        .section--bad-credit {
            padding-top: 45px;
            padding-bottom: 43px;
        }
        .car-wrap {
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;    
            margin-bottom: 63px;
        }
        .block--want-to {
            padding: 42px 0 45px;
        }
        .block--want-to p {
            margin: 0 16px 0 0;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
        }
        .tab {
            border: 1px solid #000000;
            background: #D9D9D9;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            text-transform: uppercase;
            color: #000000;
            padding: 11px 0 8px;
            min-width: 127.5px;
        }
        .tab:first-child {
            border-radius: 5px 0 0 5px;
        }
        .tab:last-child {
            border-radius: 0 5px 5px 0;
        }
        .tab.active {
            background: #000000;
            color: #FFFFFF;
        }
        /* section--how-it-works */
        .section--how-it-works .section-header{
            margin-bottom: 34px;
        }
        .section--how-it-works .hero-video-wrap {
            padding-top: 205px!important;
        }
        .list--how-it-works {
            padding: 15px 0 0 0;
            list-style-type: none;
        }
        .list--how-it-works .circle {
            border-radius: 50%;
            width: 40px;
            height: 40px;  
            border: 2px solid #000000;
            line-height: 36px;
            text-align: center;
            font-family: 'Acumin Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            margin-right: 16px;
            flex-shrink: 0;
        }
        .list--how-it-works h5 {
            font-family: 'Urbane', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            text-transform: capitalize;
            color: #000000;
        }
        .list--how-it-works li:first-child h5 {
            font-family: 'Acumin Pro', sans-serif;
            font-weight: 700;
        }
        .list--how-it-works p {
            margin: 16px 0 24px 0;
            font-family: 'Acumin Pro', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
        }
        .mb-30 {
            margin-bottom: 30px!important;
        }
        /* fonts */
        .c-green {
            color: #36F8A3;
        }
        .c-dark-green {
            color: #77B255;
        }
        .lh-40 {
            line-height: 40px;
        }
        /* flex */
        .d-flex {
            display: flex;
        }
        .items-center {
            align-items: center
        }
        .justify-between {
            justify-content: space-between;
        }
        .justify-center {
            justify-content: center;
        }
    </style>
`

let topHeadeHTML = `<div class="header-top"><p>95% of our members get approved in 10 minutes</p></div>`;

let listGroupHTML = `
<ul class="list">
    <li>Add 48 bonus points to your credit score by making daily purchases</li>
    <li>Get instant approval without credit checks</li>
    <li>No interest or hidden fees - <b>ever</b></li>
</ul>`;

let countStar = 5;
let stars = ''
while (countStar--) {
    stars += `<img src="${dir}star.svg" alt="star icon">`;
}

let html = `
<div class="rating d-flex items-center justify-between">
    <div class="d-flex"> ${stars} </div>
    <p>Trusted by 200,000+ Customers</p>
</div>
<h2 class="lh-40 section-heading mb-30">As Featured In</h2>
<img src="${dir}logos.svg" alt="logo image">`;

document.body.insertAdjacentHTML('afterbegin', styles) //add styles
document.querySelector('.nav').insertAdjacentHTML('beforebegin', topHeadeHTML) //add top header
document.querySelector('.hero-heading').innerHTML = 'Build your credit without debt'; //change title
document.querySelector('.hero-heading').insertAdjacentHTML('afterend', listGroupHTML); //add list
document.querySelector('.hero-content').insertAdjacentHTML('afterend', html); //add rating and As featured in

/* section--why-extra */
let featuresObj = [
    {
        "title": "100% Debt-Free Way to <br> Build Your Credit",
        "icon": "debt.svg",
        "text": "Your Extra card is like an upgrade to your debit card. Your spending limit will be based on your current bank account. That means you won't be able to go into debt with Extra, but you will still be able use the funds in your normal account to build your credit score with each purchase."
    },
    {
        "title": "Gain credit from your<br> daily purchases",
        "icon": "card.svg",
        "text": "Use your Extra card to build credit without changing your spending habits. Each month we tally up your purchases and report them to the Credit Bureau as credit worthy payments. This works with alongside your everyday spending (such as morning coffees) and won't incur any debt."
    },
    {
        "title": "Get Special Rewards",
        "icon": "cards.svg",
        "text": "Your usual everyday purchases (such as rideshares, coffees, and phone bills) can earn you up to 1% in points each day. These points can then be used to redeem gift cards and even AirPods from our rewards store."
    }
]

document.querySelector('.section--how-does-it-work').insertAdjacentHTML('beforebegin', `
<section class="section--why-extra">
    <div class="container">
        <div class="section-header"><h2 class="section-heading">Why Extra?</h2></div>
    </div>
</section>
<section class="section--points">
    <div class="container d-flex justify-center items-center">
        <img src="${dir}points.svg" alt="points image">
        <p>Extra cardholders increased their credit score by <b class="c-green">48 points</b> on average by regularly swiping with Extra and practicing good credit habits4</p>
    </div>
</section>`); //add section why extra

//add features why extra
for (let key in featuresObj) {
    document.querySelector('.section--why-extra .container').insertAdjacentHTML('beforeend', `
    <div class="why-extra-features">
        <div class="d-flex items-center">
            <img src="${dir + featuresObj[key].icon}">
            <h4>${featuresObj[key].title}</h4>
        </div>
        <p>${featuresObj[key].text}</p>
    </div>`)
}

 /* section--bad-credit */
document.querySelector('.section--bad-credit .section-heading').innerHTML = 'The Cost of Bad Credit'; //change title
document.querySelector('section.section.section--bad-credit > div > div.car-wrap > div').innerHTML = document.querySelector('section.section.section--bad-credit > div > div.car-wrap > div').innerHTML.replace('Toyota Corolla','Build');
document.querySelector('section.section.section--bad-credit > div > div.car-wrap > div').insertAdjacentHTML('afterend',`
<div class="block--want-to d-flex items-center justify-center">
    <p>I want to:</p>
    <div class="tabs d-flex">
        <button class="tab active">Buy a home</button>
        <button class="tab">Buy a Car</button>
    </div>
</div>`)

document.querySelector('.car-img').src = dir + 'build.png';
document.querySelector('.car-img').srcset = '';


 /* section--how-it-works */
 let howItWorksHTML = `
 <section class="section--how-it-works">
    <div class="container">
        <div class="section-header"><h2 class="section-heading">How it works</h2></div>
        <div class="hero-video-wrap"><img src="https://assets.website-files.com/61c293aa98cb80a28661cc90/627b045b519efcb7b7325aec_extra_card_render_perspective_1200x1507_EXTRALIGHT.png" loading="eager" alt="Extra Debit Card" sizes="(max-width: 479px) 100vw, (max-width: 767px) 72vw, 44vw" width="447" srcset="https://assets.website-files.com/61c293aa98cb80a28661cc90/627b045b519efcb7b7325aec_extra_card_render_perspective_1200x1507_EXTRALIGHT-p-500.png 500w, https://assets.website-files.com/61c293aa98cb80a28661cc90/627b045b519efcb7b7325aec_extra_card_render_perspective_1200x1507_EXTRALIGHT-p-800.png 800w, https://assets.website-files.com/61c293aa98cb80a28661cc90/627b045b519efcb7b7325aec_extra_card_render_perspective_1200x1507_EXTRALIGHT-p-1080.png 1080w, https://assets.website-files.com/61c293aa98cb80a28661cc90/627b045b519efcb7b7325aec_extra_card_render_perspective_1200x1507_EXTRALIGHT.png 1200w" class="hero-img hero-img--light"></div>
        <ul class="list--how-it-works"></ul>
    </div>
 </section>`;

 document.querySelector('.section--bad-credit').insertAdjacentHTML('afterend', howItWorksHTML)

 let howItWorksObj = {
    "Sign up in less than 5 minutes using your current bank account":"Extra connects directly to your existing bank account, we cover more than <span class='c-dark-green'>10,000 banks.</span>",
    "Download App to get your virtual Extra Debit Card":"After approval you will get your virtual Extra card with a spending limit based on your bank balance and other factors - no credit check required. ",
    "Use Extra card for your daily purchases":"Each purchase made with your Extra card will build your credit score. ",
    "Get you credit score increased each month":"At the end of the month, we total up all of your transactions and report them to credit bureaus as credit worthy payments. Unlike a regular debit card, all Extra card spending has an impact on your credit score."
 }
let countHowItWorks = 1;
for (const key in howItWorksObj) {
    console.log(key, countHowItWorks, howItWorksObj[key])
    document.querySelector('.list--how-it-works').insertAdjacentHTML('beforeend', `
    <li> 
        <div class="d-flex items-center">
            <div class="circle">${countHowItWorks}</div>
            <h5>${key}</h5>
        </div>
        <p>${howItWorksObj[key]}</p>
    </li>`)

    countHowItWorks++
}
