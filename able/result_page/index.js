// swiper connect

let link = document.createElement('link');
link.href = 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
link.rel = "stylesheet";
document.head.appendChild(link);

// список скриптів, які потрібно завантажити
const scriptList = [
    'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js',
    // 'https://js.braintreegateway.com/web/3.81.0/js/client.min.js',
    // 'https://js.braintreegateway.com/web/3.81.0/js/paypal-checkout.min.js',
    // 'https://js.stripe.com/v3',
    // 'https://js.chargebee.com/v2/chargebee.js'
  ];
  
  // функція для завантаження скрипту
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      // перевірка наявності скрипту за допомогою document.scripts
      const loadedScripts = Array.from(document.scripts)
        .map(script => script.src.toLowerCase());
      if (loadedScripts.includes(url.toLowerCase())) {
        console.log(`Script ${url} allready downloaded!`);
        return resolve();
      }
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  // функція для послідовного завантаження скриптів
  async function loadScripts(scripts) {
    for (const script of scripts) {
      await loadScript(script);
      console.log(`Loaded script  ${script}`);
    }
    console.log('All scripts loaded!');
  }
  
  // запускаємо функцію завантаження скриптів
  loadScripts(scriptList);





// additional scripts

const git = 'https://conversionratestore.github.io/projects/able/result_page/img/'
let v1 = new IntersectionObserver(entries => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            setTimeout(function () {
                v2.observe(item.target)
            },5000)
        }
    })
}, {
    threshold: 0.5
})

let v2 = new IntersectionObserver(entries => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            pushDataLayer('Visibility of ' + item.target.dataset.visible)
            v1.unobserve(item.target)
        }
        v2.unobserve(item.target)
    })
})

let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "New result page", "variant 1");
    }
}, 100)

pushDataLayer('loaded')
function pushDataLayer(action, label = '') {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: New result page',
        'eventAction': action,
        'eventLabel': label
    })
    console.log('Event: ' + action)
}

const $all = (selector) => document.querySelectorAll(selector)
const $ = (selector) => document.querySelector(selector)


// main part

const style = /* html */ `
    <style>
        * {
            font-family: "SF Pro Text", sans-serif;
        }

        b {
            font-weight: 700;
        }

        header+div {
            column-gap: 10px;
            background-color: #FFE9D2 !important;
        }

        .flx {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .crs_banner_wrapper h3 {
            color: #202B47;
            font-size: 14px;
            line-height: 18px;
            font-weight: 400;
        }

        .crs_banner_wrapper div {
            display: inline-flex;
            background: none;
            color: #EB731A;
            font-size: 14px;
            line-height: 18px;
            width: fit-content;
            font-weight: 600;
            padding: 0 5px;
        }

        header+div button {
            width: calc(50% - 5px);
            background: #EB731A;
            border-radius: 8px;
            padding: 9px 5px;
            color: #fff;
            font-size: 18px;
            border: none;
            font-weight: 600;
            flex-shrink: 0;
            cursor: pointer;
            max-width: 260px;
        }

        @media (min-width: 769px) {
            header+div {
                padding: 8px 10% !important;
            }

            .crs_banner_wrapper h3 {
                font-size: 20px;
                line-height: 28px;
                font-weight: 600;
            }

            .crs_banner_wrapper div {
                background-color: #fff;
                border: 1px solid #EB731A;
                border-radius: 8px;
                margin-left: 16px;
                line-height: 26px;
                padding: 8px 17px;
            }

            header+div button {
                margin-left: auto;
            }
        }


    </style>
`

function start () {
    const check = setInterval(function() {
        if(window.location.pathname === '/subscribe' && typeof Swiper === 'function' && $('.fullPayment')) {
            clearInterval(check)
            hideBlocks()
            timer()
            setObserver()
            weightLossBlock()
            let paymentInt = setInterval(function() {
                if ($('.fullPayment>div>div:last-of-type button[type="submit"]') && window.innerWidth > 768) {
                    clearInterval(paymentInt)
                    paymentBlock()
                }
                if($('.fullPayment>div>div button span')?.innerText === 'Credit / Debit Card') {
                    clearInterval(paymentInt)
                    paymentBlock()
                }
            }, 100)
            rebuildVideoSlider()
            afterSliderBlock1()
            afterSliderBlock2()
            reviewIo()
            document.querySelector('.body_part').insertAdjacentHTML('afterbegin', style)
            $all('[data-visible]').forEach(item => {
                v1.observe(item)
            })
        }
    }, 100)
}

function timer() {
    if(!$('.crs_banner_wrapper')){
        $('header+div').insertAdjacentHTML('afterbegin', `<div class="crs_banner_wrapper"></div>`)
        $('.crs_banner_wrapper').insertAdjacentHTML('afterend', `<button>Get My Program</button>`)
        $('.crs_banner_wrapper').append($('header+div h3'))
        $('header+div h3').innerHTML = `Your spot with <b>Tony</b> is reserved for:`
        $('header+div h3').append($('header+div>div:not(.crs_banner_wrapper)'))
        $('.crs_banner_wrapper+button').addEventListener('click', function() {
            $('.fullPayment').scrollIntoView({
                behavior: "smooth",
            })
            pushDataLayer('Click on header CTA')
        })
    }
}

function weightLossBlock () {
    const metric = (localStorage.getItem('body-weight-lbs') !== '') ? false : true
    const gender = localStorage.getItem('gender') || 'female'
    const ind = (gender === 'male') ? 16.2 : 5.4
    const currentWeight = (localStorage.getItem('body-weight-lbs') !== '') ? +localStorage.getItem('body-weight-lbs') : +localStorage.getItem('body-weight-kg')
    const goalWeight = +localStorage.getItem('weightGoal')
    const ageRange = localStorage.getItem('age')
    let age
    switch (ageRange) {
        case 'underTwenty':
            age = 15
            break
        case 'twentys':
            age = 20
            break
        case 'fortys':
            age = 40
            break
        case 'fiftys': 
            age = 50
            break
        case 'sixtyPlus': 
            age = 60
            break
        default: 
            age = 30
    } 
    const height = (localStorage.getItem('body-height-ft') !== '') ? Math.floor(((+localStorage.getItem('body-height-ft') * 12) + +localStorage.getItem('body-height-inches')) * 2.54) : localStorage.getItem('body-height-cm')
    const baseBodyFat = Math.round((1.2 * (currentWeight / (height * height / 10000))) + (0.23 * age) - ind)
    const goalBodyFat = Math.round((1.2 * (goalWeight / (height * height / 10000))) + (0.23 * age) - ind)
    let levelBefore = 50
    let levelAfter = 75
    const bodyPart = /* html */ `
        <div class="body_part" data-visible="Your personalized weight loss program">
            <style>
                .body_part {
                    padding: 0 26px;
                    margin-top: 24px;
                    font-family: "SF Pro Text", sans-serif ;
                    font-weight: 400;
                }
                .reviews_line {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #F6F6F6;
                    border-radius: 100px;
                    padding: 8px 6px;
                    margin-bottom: 12px;
                    font-size: 14px;
                }
                .reviews_line img {
                    width: 70px;
                }
                .body_part h2 {
                    font-size: 32px;
                    color: #202B47;
                    line-height: 40px;
                    margin-bottom: 12px;
                    font-weight: 600;
                }
                .body_part h2+p {
                    font-size: 18px;
                    color: #202B47;
                    line-height: 26px;
                }

                .body_part h2+p+button {
                    display: none;
                }

                .body_part h2+p b {
                    color: #EB731A;
                    font-weight: 600;
                }
                .body_part .wrapper {
                    margin-top: 20px;
                    border: 1px solid #E0E3EB;
                    border-radius: 12px;
                    overflow: hidden;
                }
                .body_part .imgs {
                    display: flex;
                    padding: 20px 0 12px;
                }
                .body_part .imgs .before {
                    position: relative;
                }
                .body_part .imgs .before:after {
                    position: absolute;
                    content: '';
                    right: -11px;
                    top: calc(50% - 11px);
                    width: 22px;
                    height: 22px;
                    background: url(${git}arr_right.svg) center center no-repeat;
                    background-size: contain;
                }
                .body_part .imgs>div, .body_part .data>div {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: stretch;
                    text-align: center;
                }
                .body_part .data {
                    display: flex;
                    padding: 18px 0;
                    background-color: #F6F6F6;
                }
                .body_part .info {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 15px auto 48px;
                    font-size: 14px;
                    color: #5E626B;
                    position: relative;
                    color: #5E626B;
                    cursor: pointer;
                }

                .body_part .info img {
                    display: block;
                    margin-left: 6px;
                }
                .body_part .info .hint {
                    display: none;
                    position: absolute;
                    top: calc(100% + 10px);
                    width: 100%;
                    max-width: 340px;
                    padding: 16px;
                    background-color: #FFE9D2;
                    color: #202B47;
                    line-height: 20px;
                    border-radius: 12px;
                    z-index: 1;
                }
                .body_part .info .hint:after {
                    display: block;
                    content: '';
                    height: 8px;
                    width: 8px;
                    clip-path: polygon(0 0, 0 100%, 100% 0);
                    background-color: inherit;
                    position: absolute;
                    bottom: calc(100% - 5px);
                    right: 20%;
                    transform: rotateZ(45deg)
                }
                .body_part .info:hover .hint {
                    display: block;
                }
                .body_part .imgs .title {
                    color: #202B47;
                    font-weight: 600;
                    width: fit-content;
                    margin: 0 auto 13px;
                }
                .body_part .imgs .after .title {
                    position: relative;
                }
                .body_part .imgs .after .title:after {
                    position: absolute;
                    content: '';
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 5px;
                    background: url(${git}line.svg) center center no-repeat;
                    background-size: contain;
                }
                .body_part .imgs .img+p {
                    margin-top: 9px;
                }
                .body_part .imgs .img+p span {
                    font-weight: 600;
                }
                .body_part .before .img+p span {
                    color: #5E626B;
                }
                .body_part .after .img+p span {
                    color: #36B992;
                }
                .body_part .data>div p {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 8px;
                }
                .body_part .data>div .load {
                    width: calc(100% - 68px);
                    margin: 0 34px 16px;
                    height: 4px;
                    border-radius: 6px;
                    position: relative;
                    overflow: hidden;
                    background-color: #ffffff;
                }
                .body_part .data>div .load::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    background-color: #5E626B;
                    width: ${levelBefore}%;
                }
                .body_part .data>div.after .load::after {
                    width: ${levelAfter}%;
                    background-color: #36B992;
                }
                .body_part .data>div span {
                    display: inline-block;
                    padding: 6px 11px;
                    font-size: 14px;
                    font-weight: 700;
                    color: #5E626B;
                    border-radius: 30px;
                    background-color: #E0E3EB;
                    margin: 0 35px;
                }
                .body_part .data .after span {
                    color: #ffffff;
                    background-color: #36B992;
                }
                .body_part+div>div:first-child h2 {
                    font-family: "SF Pro Text", sans-serif;
                    font-size: 28px;
                    line-height: 38px;
                    font-weight: 600;
                    color: #010101;
                    letter-spacing: -1px;
                }
                .body_part+div>div:first-child h2 span {
                    color: #EB731A;
                }

                @media (min-width: 769px) {
                    .body_part {
                        display: flex;
                        width: 80%;
                        margin: 0 auto;
                        column-gap: 16px;
                        padding: 0;
                    }
                    .body_part > div {
                        width: calc(50% - 8px);
                        flex-shrink: 0;
                    }
                    header+div+div {
                        padding: 50px 0 !important;
                    }
                    .reviews_line {
                        display: block;
                        width: fit-content;
                    }
                    .body_part h2 {
                        font-size: 60px;
                        line-height: 72px;
                        margin-bottom: 16px;
                    }
                    .body_part h2+p {
                        margin-bottom: 40px;
                    }
                    .body_part h2+p+button {
                        display: flex;
                        width: 300px;
                        justify-content: center;
                        align-items: center;
                        padding: 10px;
                        background: #EB731A;
                        border-radius: 8px;
                        color: #fff;
                        border: none;
                        cursor: pointer;
                    }
                    .body_part .data>div span  {
                        width: 50%;
                        margin: 0 auto;
                    }
                    .body_part .data>div .load {
                        width: 50%;
                        margin: 0 auto 16px;
                    }
                    .body_part+div {
                        width: 80%;
                        margin: 90px auto;
                        padding: 50px 70px;
                        align-items: center;
                        border: 1px solid #E0E3EB;
                        border-radius: 12px;
                    }
                    .body_part+div>div:first-child h2 {
                        font-size: 40px;
                        line-height: 50px;
                    }
                    .body_part .imgs .before:after {
                        right: -31px;
                        top: calc(50% - 20px);
                        width: 62px;
                        height: 40px;
                        background: url(${git}arrow_3.svg) center center no-repeat;
                        background-size: contain;
                    }
                }
            </style>
            <div>
                <div class="reviews_line">
                    <img src="${git}stars.svg" alt="stars">
                    <b>4.7/5</b> by <b>15,000+</b> Happy Customers
                </div>
                <h2>Your personalized weight loss program is ready!</h2>
                <p>It has been proven to be <b>3x more effective</b>,  thanks to the assistance of a dedicated 1-1 coach.</p>
                <button>Get My Program Now</button>
            </div>
            <div>
                <div class="wrapper">
                    <div class="imgs">
                        <div class="before">
                            <p class="title">Current weight</p>
                            <div class="img">
                                <img src="${git}current-${gender}.svg" alt="before">
                            </div>
                            <p>before: <span>${currentWeight} ${(metric) ? 'kg' : 'lbs'}</span></p>
                        </div>
                        <div class="after">
                            <p class="title">Goal</p>
                            <div class="img">
                                <img src="${git}goal-${gender}.svg" alt="before">
                            </div>
                            <p>after: <span>${goalWeight} ${(metric) ? 'kg' : 'lbs'}</span></p>
                        </div>
                    </div>
                    <div class="data">
                        <div class ="before">
                            <p>Energy level</p>
                            <div class="load"></div>
                            <p>Body Fat</p>
                            <span>${baseBodyFat - 5}-${baseBodyFat + 5}%</span>
                        </div>
                        <div class="after">
                            <p>Energy level</p>
                            <div class="load"></div>
                            <p>Body Fat</p>
                            <span>${goalBodyFat - 5}-${goalBodyFat + 5}%</span>
                        </div>
                    </div>
                </div>
                <div class="info">How “Body fat” is calculated <img src="${git}info1.svg" alt="info"><span class="hint">(1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage, where BMI = [weight ÷ (height)²]${(metric) ? '' : ' x 703'}.</span></div>
            </div>
        </div>
    `
    if(!$('.body_part')) {
        $('#root>*:nth-child(3)').insertAdjacentHTML('afterbegin', bodyPart)
        $('.body_part h2+p+button').addEventListener('click', function(){
            $('.fullPayment').scrollIntoView({
                behavior: "smooth",
            })
            pushDataLayer('Click on button CTA first screen')
        })
    }
    if(!$('.new_h2')) {
        $('.body_part+div>div:first-child').innerHTML = /* html */`<h2 class="new_h2">We've identified a few key points for your goal of losing <span>${currentWeight - goalWeight}</span> <span>${(metric) ? 'kg' : 'lbs'}</span> by Jul 23</h2>`
    }
    $('.body_part .info').addEventListener('hover', function() {
        pushDataLayer('Show tooltip')
    })
    
}

function paymentBlock () {
    const price = JSON.parse(localStorage.getItem('planCode')).price
    const value = JSON.parse(localStorage.getItem('planCode')).value
    const save = ((1 - (price / 3500)) * 100).toFixed(0)
    $('.fullPayment').style.display = 'block'
    $all('.fullPayment div').forEach(block => {
        const cls = block.getAttribute('class')
        if(cls?.includes('banner') || cls?.includes('paymentInfoWrapper') || cls?.includes('header')) {
            block.remove()
        }
    })

    const paymentBlock1 = /* html */ `
        <style>
            .payment_block {
                font-family: "SF Pro Text", sans-serif ;
                font-weight: 400;
                width: 100%;
            }
            .payment_block .list {
                padding: 23px 26px 49px;
            }
            .payment_block .list h3{
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 24px;
            }
            .payment_block .list li {
                display: flex;
                column-gap: 12px;
                margin-top: 18px;
                font-size: 16px;
                line-height: 20px;
            }
            .payment_block .list li span {
                display: block;
                height: 42px;
                width: 42px;
                border-radius: 50%;
                background-color: #FFE9D2;
                position: relative;
                flex-shrink: 0;
            }
            .payment_block .list li span img {
                height: 60%;
                width: 60%;
                position: absolute;
                top: 20%;
                left: 20%;
            }
            .payment_block .price>p {
                font-size: 18px;
                line-height: 28px;
                color: #202B47;
                font-weight: 600;
            }
            .payment_block .price>p+div {
                text-align: right;
            }
            .payment_block .price>div>p {
                column-gap: 5px;
            }
            .payment_block .price .base_price {
                font-size: 14px;
                line-height: 18px;
                color: #5E626B;
                text-decoration: line-through;
            }
            .payment_block .price .trial_price {
                font-size: 18px;
                line-height: 28px;
                color: #202B47;
                font-weight: 600;
            }
            .payment_block .price .save {
                font-size: 14px;
                line-height: 18px;
                color: #EB731A;
                font-weight: 600;
            }
            .payment_block .price {
                margin-bottom: 24px;
                align-items: start;
            }
            .payment_block .try>.flx {
                background: #FFE9D2;
                border-radius: 12px;
                column-gap: 18px;
                padding: 16px;
                align-items: start;
                margin-bottom: 20px;
            }
            .payment_block .try>.flx img {
                flex-shrink: 0;
            }
            .payment_block .try>.flx p {
                font-size: 14px;
                line-height: 18px;
                color: #202B47;
            }
            .payment_block .try>p {
                border-top: 1px solid #E0E3EB;
                padding-top: 16px;
                font-size: 14px;
                line-height: 18px;
                margin-bottom: 20px;
            }
            .payment_block .total {
                font-size: 20px;
                line-height: 28px;
                color: #202B47;
                margin-bottom: 16px;
            }
            .payment_block .money_back {
                padding: 16px 20px;
                background: #E0E6F7;
                border-radius: 12px;
                column-gap: 12px;
                margin-bottom: 20px;
                align-items: start;
                justify-content: flex-start;
            }
            .payment_block .money_back>div p:first-child {
                font-size: 16px;
                line-height: 18px;
                margin-bottom: 7px;
            }
            .payment_block .money_back>div p:last-child {
                font-size: 14px;
                line-height: 18px;
            }
            .payment_block .money_back img {
                flex-shrink: 0;
            }
            .fullPayment>div {
                padding: 0;
            }
            .fullPayment>div>div:last-of-type {
                background: #F6F6F6;
                padding: 30px 26px;
            }
            .fullPayment > div > div:last-child > .payment_block+div+div {
                background: #E0E3EB;
            }
            .fullPayment > div > div:last-child > .payment_block+div+div:after {
                background: #F6F6F6;
            }
            .fullPayment > div > div:last-child > div:last-child button {
                background-color: #EB731A;
            }
            @media (min-width: 769px) {
                .fullPayment {
                    background: #F6F6F6;
                    padding: 90px 0;
                }
                .fullPayment>div {
                    flex-direction: row;
                    background: none;
                    width: 80%;
                    margin: 0 auto;
                    position: relative;
                }
                .payment_block {
                    width: auto;
                }
                .payment_block .list h3 {
                    font-size: 40px;
                    line-height: 50px;
                    margin-bottom: 44px;
                }
                .payment_block .list {
                    padding: 50px 36px 50px 50px;
                    border-top: 1px solid #E0E3EB;
                    border-left: 1px solid #E0E3EB;
                    border-bottom: 1px solid #E0E3EB;
                    border-radius: 12px 0 0 12px;
                    margin-top: 40px;
                }
                .fullPayment>div>div:last-of-type {
                    background-color: #fff;
                    border-radius: 12px;
                    position: relative;
                    z-index: 2;
                }
                .fullPayment > div > div:last-child > .payment_block+div+div:after {
                    background: #fff;
                }
                .fullPayment>div::before {
                    display: block;
                    content: '';
                    position: absolute;
                    z-index: 1;
                    top: 10px;
                    right: -7%;
                    height: 127px;
                    width: 140px;
                    background: url('${git}top_patment_bg.svg') center center no-repeat;
                    background-size: contain;
                }
                .fullPayment>div::after {
                    display: block;
                    content: '';
                    position: absolute;
                    z-index: 1;
                    bottom: 10px;
                    right: -7%;
                    height: 191px;
                    width: 191px;
                    background: url('${git}bot_patment_bg.svg') center center no-repeat;
                    background-size: contain;
                }
            }
        </style>
        <div class="payment_block">
            <div class="list" data-visible="Based on your answers">
                <h3>Based on your answers you'll receive:</h3>
                <ul>
                    <li><span><img src="${git}scale.svg" alt="scale"></span>Science-backed weight loss program tailored to your lifestyle & body-needs</li>
                    <li><span><img src="${git}coach.svg" alt="coach"></span>Unlimited 1-1 video and text support from your coach, Tony</li>
                    <li><span><img src="${git}salad.svg" alt="salad"></span>Customized nutrition guidance and unique exercise plan</li>
                    <li><span><img src="${git}heart.svg" alt="heart"></span>Everything you need to achieve & maintain your healthy body goals.</li>
                </ul>
            </div>
        </div>
    `
    const paymentBlock2 = /* html */`
    <div class="payment_block" data-visible="Payment block">
        <div class="payments">
            <div class="price flx">
                <p>Personalized 7-day trial plan</p>
                <div>
                    <p class="flx">
                        <span class="base_price">$35.00</span>
                        <span class="trial_price">${value}</span>
                    </p>
                    <span class="save">You save ${save}%</span>
                </div>
            </div>
            <div class="try">
                <div class="flx">
                    <img src="${git}carrot.svg" alt="carrot">
                    <p>You'll have 7 days to try Able and use it’s science-backed, personalized approach to create lasting results.</p>
                </div>
                <p>Your 7-day trial will cost only ${value}. Afterwards, it will be $35/week.</p>
            </div>
            <div class="total flx">
                Total due today: <span>${value}</span>
            </div>
            <div class="money_back flx">
                <img src="${git}shield.svg" alt="shield">
                <div>
                    <p>30-Day Money-Back Guarantee</p>
                    <p>We will remind you 2 days before your trial ends</p>
                </div>
            </div>
        </div>
    </div>
    `
    $('.fullPayment>div>div').insertAdjacentHTML('afterbegin', paymentBlock2)
    $('.fullPayment>div').insertAdjacentHTML('afterbegin', paymentBlock1)
    if(window.innerWidth > 768) {
        $('.fullPayment>div>div:last-of-type h1').remove()
        setTimeout(function() {
            $('.fullPayment>div>div:last-of-type button[type="submit"]').childNodes[1].data = 'Start 7-Day Trial'
        }, 1000)
    }
}

function rebuildVideoSlider () {
    $all('#root>div:nth-child(3)>div').forEach(block => {
        const cls = block.getAttribute('class')
        if(cls.includes('customerVideoReviewsWrapper')) {
            block.style.background = 'none'
            if(window.innerWidth < 769) {
                block.querySelector('h1+div').style.display = 'none'
                block.querySelector('h1+div+div').style.display = 'none'
            }
            block.querySelector('h1').innerHTML = 'Customer Success Stories To Inspire You:'
            block.querySelector('h1').style.marginBottom = '12px'
            block.querySelector('h1').insertAdjacentHTML('afterend', `
                <p style="font-size: 18px; line-height: 26px; margin-bottom: 24px; padding: 0 26px; font-family: 'SF Pro Text', sans-serif;" data-visible="Video slider">
                    We're proud of all the customers our program has helped, and we're confident it will work for you too:
                </p>
            `)
        }
    })
    if(window.innerWidth > 768) {
        $('.swiper').swiper.params.centeredSlides = true
        $('.swiper').swiper.params.slidesPerView = 4
        $('.swiper').swiper.update()
    }
    
}

function afterSliderBlock1 () {
    const part1 = /* html */`
        <section class="part1">
            <style>
                .coaching, .as_seen, .examples_result {
                    font-family: "SF Pro Text", sans-serif ;
                    font-weight: 400;
                    width: 100%;
                    font-size: 14px;
                    line-height: 18px;
                    color: #202B47;
                    padding: 0 26px;
                }
                .as_seen {
                    padding: 30px 26px;
                    background-color: #F6F6F6;
                    margin: 48px 0;
                }
                .info_block {
                    padding: 20px;
                    background: #E8F5FD;
                    border-radius: 12px;
                    display: flex;
                    align-items: start;
                    column-gap: 10px;
                }
                .info_block .title {
                    font-size: 18px;
                    line-height: 26px;
                    margin-bottom: 8px;
                }
                .info_block img {
                    margin-top: 2px;
                    flex-shrink: 0;
                }
                .coaching h2 {
                    font-size: 28px;
                    line-height: 36px;
                    font-weight: 600;
                    margin-bottom: 14px;
                }
                .coaching h2+p {
                    font-size: 18px;
                    line-height: 26px;
                    margin-bottom: 22px;
                }
                .coaching .swiper .swiper-slide {
                    width: 90%;
                    background: #F6F6F6;
                    border: 2px solid #EBEBEB;
                    border-radius: 24px;
                    padding: 29px 16px 0;
                    text-align: center;
                }
                .coaching .swiper .swiper-slide p {
                    font-size: 20px;
                    line-height: 28px;
                    text-align: center;
                    margin-bottom: 25px;
                }
                .coaching .swiper .swiper-slide p span {
                    color: #EB731A;
                }
                .coaching .swiper .swiper-slide img {
                    height: 300px;
                    vertical-align: bottom;
                }
                .coaching .swiper-pagination, .examples_result .swiper-pagination {
                    position: relative;
                    top: 0;
                    line-height: 0;
                    padding: 12px 0 22px;
                }
                .coaching .swiper-pagination span, .examples_result .swiper-pagination span  {
                    transition: all 0.5s;
                }
                .coaching .swiper-pagination span.swiper-pagination-bullet-active, .examples_result .swiper-pagination span.swiper-pagination-bullet-active {
                    width: 20px;
                    background-color: #EB731A;
                    border-radius: 100px;
                }
                .as_seen h2 {
                    text-align: center;
                    font-size: 28px;
                    line-height: 42px;
                    margin-bottom: 20px;
                }
                .examples_result h2 {
                    color: #000;
                    font-size: 28px;
                    line-height: 36px;
                    font-weight: 600;
                    margin-bottom: 24px;
                }
                .examples_result h2 span {
                    color: #EB731A;
                }
                .examples_result .swiper-slide {
                    background: #F6F6F6;
                    border-radius: 12px;
                    padding: 16px;
                }
                .examples_result .swiper-slide>.flx {
                    align-items: start;
                    margin-bottom: 12px;
                }
                .examples_result .swiper-slide>.flx p {
                    font-size: 16px;
                    font-weight: 600;
                }
                .examples_result .swiper-slide>.flx p img {
                    margin-top: 11px;
                }
                .examples_result .swiper-slide .pounds {
                    background: #FFE9D2;
                    border-radius: 30px;
                    color: #EB731A;
                    font-weight: 600;
                    padding: 4px 6px;
                }
                .examples_result .swiper-slide .review {
                    font-size: 16px;
                    line-height: 20px;
                    letter-spacing: -0.0024em;
                }
                .examples_result .swiper-slide .date {
                    text-align: right;
                    margin-top: 12px;
                    font-size: 10px;
                }
                .as_seen .swiper-pagination {
                    position: relative;
                    top: 0;
                    left: 0;
                    padding-top: 27px;
                }
                .as_seen .swiper-slide {
                    text-align: center;
                }
                .as_seen .swiper-slide img {
                    height: 26px;
                    margin-bottom: 22px;
                }
                .as_seen .swiper-slide p {
                    font-size: 18px;
                    line-height: 26px;
                }
                .as_seen .swiper-pagination span {
                    height: 4px;
                    width: 40px;
                    border-radius: 10px;
                    background-color: #E0E3EB;
                    opacity: 1;
                }
                .as_seen .swiper-pagination span.swiper-pagination-bullet-active {
                    position: relative;
                    overflow: hidden;
                    background-color: #E0E3EB;
                }
                .as_seen .swiper-pagination span.swiper-pagination-bullet-active::after {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 0;
                    height: 100%;
                    background-color: #EB731A;
                    animation: growWidth 10s forwards linear;
                }

                @keyframes growWidth {
                    0 {
                        width: 0;
                    }
                    100% {
                        width: 100%;
                    }
                }
                @media (min-width: 769px) {
                    .coaching, .examples_result {
                        width: 80%;
                        margin: 0 auto;
                    }
                    .coaching h2, .coaching h2+p{
                        text-align: center;
                    }
                    .coaching h2 {
                        font-size: 40px;
                        line-height: 50px;
                        margin-bottom: 24px;
                    }
                    .coaching h2+p {
                        width: 550px;
                        margin: 0 auto 40px;
                    }
                    .info_block {
                        margin: 40px auto 0;
                        width: 610px;
                    }
                    .as_seen {
                        padding: 80px 10%;
                        margin: 90px 0;
                    }
                    .examples_result h2 {
                        width: 50%;
                        margin: 0 auto 40px;
                    }
                    .as_seen .swiper-pagination span {
                        width: 50px;
                    }
                    .part1 {
                        margin-bottom: -50px;
                    }
                }
            </style>
            <div class="coaching" data-visible="We'll keep you on track">
                <h2>We'll keep you on track!</h2>
                <p>Get 1-1 support, accountability, and advice as part of your program at no extra cost.</p>
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <p><span>1-on-1 video</span><br>coaching</p>
                            <img src="${git}track1.png" alt="image">
                        </div>
                        <div class="swiper-slide">
                            <p><span>1-on-1 video</span><br>coaching</p>
                            <img src="${git}track2.png" alt="image">
                        </div>
                        <div class="swiper-slide">
                            <p><span>1-on-1 video</span><br>coaching</p>
                            <img src="${git}track3.png" alt="image">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="info_block">
                    <img src="${git}info.svg" alt="info">
                    <div>
                        <p class="title">Keep the weight off long term</p>
                        <p>Avoid weight plateaus by continually refining your program with your coach. Develop new changes to your routine to stay your healthiest, happiest self.</p>
                    </div>
                </div>
            </div>
            <div class="as_seen" data-visible="As seen on">
                <h2>As seen on:</h2>
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://uploads-ssl.webflow.com/61fab9ed2443e9401829f989/630d5d79b65798a0c7d4d856_forbes.svg" alt="img">
                            <p>“Able may be a new name in a competitive sector, but it has picked up thousands of users in the space of just a few months.”</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://uploads-ssl.webflow.com/61fab9ed2443e9401829f989/630d5da4c5f0106d9f6332f5_evening-standard.svg" alt="img">
                            <p>“Best weight loss app to help you reach your goals”</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://uploads-ssl.webflow.com/61fab9ed2443e9401829f989/630d5dc6bf383eb7a1a8f3a8_women%27s-health.svg" alt="img">
                            <p>“Digital wellness app Able is a health guru in your pocket, offering one-to-one coaching across nutrition, fitness and more”</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://uploads-ssl.webflow.com/61fab9ed2443e9401829f989/630d5de84e0ef52ba22e7e24_mirror.svg" alt="img">
                            <p>“Hailed as the ‘Uber of the wellness world’, think of Able as your pocket health coach that can help you shift those stubborn pounds this summer”</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://uploads-ssl.webflow.com/61fab9ed2443e9401829f989/630d5e02c5f0105e39634074_dailymail.svg" alt="img">
                            <p>“While just one real-life session with a nutritionist or a sleep coach would cost hundreds of dollars, advice from your virtual Able coach is unlimited.”</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://uploads-ssl.webflow.com/61fab9ed2443e9401829f989/630d5e1b5fffcc555e2896ab_yahoo.svg" alt="img">
                            <p>“As the world’s newest and only on-demand wellness platform with no calorie tracking, Able is also a great option for women wanting to lose weight and keep it off.”</p>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="examples_result" data-visible="People just like">
                <h2>People just like you achieved great results using our <span>weight loss program</span></h2>
                <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="flx">
                                <p>Gloria-Taylor Fricks<br><img src="${git}trust_stars.svg" alt="stars"></p>
                                <div class="pounds">-2 pounds</div>
                            </div>
                            <p class="review">So, I dont usually do reviews, and I'll admit, I'm not sticking to my workout regimen 'all' the time. However, I'm making way better choices than I used to. I can use my Fitbit along with my matched program, and the support from the video calls, and...</p>
                            <p class="date">Jan 21, 2023</p>
                        </div>
                        <div class="swiper-slide">
                            <div class="flx">
                                <p>Paul Wilson<br><img src="${git}trust_stars.svg" alt="stars"></p>
                                <div class="pounds">-27 pounds</div>
                            </div>
                            <p class="review">I've been working with coach for 6 weeks now and I am down 27 pounds. It's not easy, but my coaches help me through it! The daily advices have also given me a lot of motivation - even if we're having days where things seem stagnant or difficult.</p>
                            <p class="date">Feb 2, 2023</p>
                        </div>
                        <div class="swiper-slide">
                            <div class="flx">
                                <p>Antonia HOVER<br><img src="${git}trust_stars.svg" alt="stars"></p>
                                <div class="pounds">-12 pounds</div>
                            </div>
                            <p class="review">I had a great experience with ABLE. I started with a goal to lose 10-15 pounds; I lost 12! My coach, Carolyn, was great! She provided lots of great advice, websites, and You-Tube videos for me to reference. I am also a diabetic, who can proudly...</p>
                            <p class="date">Apr 22, 2022</p>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="info_block">
                    <img src="${git}asterisk.svg" alt="info">
                    <div>
                        <p class="title">Disclaimer</p>
                        <p>Following exercise and a meal plan is a key in your weight loss journey and greatly impacts the results.</p>
                    </div>
                </div>
            </div>
        </section>
    `

    $all('#root>div:nth-child(3)>div').forEach(item => {
        const cls = item.getAttribute('class')
        if(cls.includes('customerVideoReviewsWrapper')) {
            item.insertAdjacentHTML('afterend', part1)
        }
    })

    const swiper1 = new Swiper('.coaching .swiper', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.coaching  .swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    swiper1.on('touchEnd', function() {
        pushDataLayer('Interection with slider', 'We`ll keep you on track!')
    })

    const swiper2 = new Swiper('.as_seen .swiper', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.as_seen .swiper-pagination',
            type: 'bullets',
        },
    });
    swiper2.on('touchEnd', function() {
        pushDataLayer('Interection with slider', 'As seen on')
    })

    const swiper3 = new Swiper('.examples_result .swiper', {
        speed: 400,
        spaceBetween: 100,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.examples_result .swiper-pagination',
            type: 'bullets',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    swiper3.on('touchEnd', function() {
        pushDataLayer('Interection with slider', 'People just like')
    })
}

function afterSliderBlock2 () {
    const part2 = /* html */ `
        <section class="part2">
            <style>
                .part2 {
                    font-family: "SF Pro Text", sans-serif ;
                    font-weight: 400;
                    width: 100%;
                    font-size: 14px;
                    line-height: 18px;
                    color: #202B47;
                }
                .body_goals {
                    padding: 30px 26px;
                    background-color: #F6F6F6;
                    margin-top: 48px;
                }
                .body_goals h2 {
                    font-size: 28px;
                    line-height: 36px;
                    color: #010101;
                    margin-bottom: 24px;
                    font-weight: 600;
                }
                .body_goals h2 img {
                    display: inline-block;
                    margin-left: 5px;
                }
                .body_goals .after_time p {
                    width: 50%;
                    text-align: center;
                    font-size: 18px;
                    line-height: 28px;
                    font-weight: 600;
                }
                .body_goals .after_time p:first-child {
                    border-right: 1px solid #E0E3EB;
                }
                .body_goals .after_time p span {
                    color: #EB731A;
                }
                .body_goals .goals {
                    background-color: #fff;
                    padding: 8px 12px;
                    border: 1px solid #E0E3EB;
                    border-radius: 12px;
                    overflow: hidden;
                    margin-top: 16px;
                }
                .body_goals .goals>p {
                    text-transform: uppercase;
                    text-align: center;
                    padding-bottom: 8px;
                    font-weight: 600;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    column-gap: 8px;
                    border-bottom: 1px solid #E0E3EB;
                    margin-bottom: 8px;
                }
                .body_goals .goals>p span {
                    height: 30px;
                    width: 30px;
                    background-color: #F6F6F6;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .body_goals .goals>.flx {
                    align-items: start;
                }
                .body_goals .goals>.flx>p {
                    width: 50%;
                    text-align: left;
                }
                .body_goals .goals>.flx>p:last-child {
                    border-left: 1px solid #E0E3EB;
                    padding-left: 12px;
                }
                .s_result {
                    margin: 48px 26px;
                    border: 1px solid #E0E3EB;
                    border-radius: 12px;
                    padding: 30px 10px;
                    text-align: center;
                }
                .s_result h2 {
                    font-size: 28px;
                    line-height: 36px;
                    color: #010101;
                    margin-bottom: 30px;
                    font-weight: 600;
                }
                .s_result h2 span {
                    color: #EB731A;
                }
                .s_result p:not(.percent) {
                    font-size: 18px;
                    line-height: 28px;
                    width: 100%;
                    padding: 0 50px;
                }
                .s_result .percent {
                    font-size: 34px;
                    line-height: 40px;
                    font-weight: 600;
                    margin: 24px 0 6px;
                }
                .s_result .desktop_wrapper  div:first-of-type p:first-child,  .s_result .desktop_wrapper div:last-of-type p:first-child{
                    color: #423BE6;
                }
                .s_result .desktop_wrapper  div:nth-of-type(2) p:first-child{
                    color: #EB731A;
                }
                .s_result .desktop_wrapper  div:nth-of-type(3) p:first-child{
                    color: #36B992;
                }
                @media (min-width: 769px) {
                    .body_goals {
                        padding: 70px 300px;
                        margin-top: 90px;
                    }
                    .body_goals h2, .s_result h2 {
                        text-align: center;
                        font-size: 40px;
                        line-height: 50px;
                        margin-bottom: 40px;
                    }
                    .body_goals h2 br {
                        display: none;
                    }
                    .body_goals .goals {
                        padding: 12px 20px;
                    }
                    .body_goals .goals>p {
                        margin-bottom: 16px;
                    }
                    .body_goals .goals>.flx>p:last-child {
                        padding-left: 24px;
                    } 
                    .body_goals .goals>.flx>p:first-child {
                        padding-right: 24px;
                    }
                    .body_goals .goals>.flx>p {
                        text-align: center;
                        font-size: 16px;
                        line-height: 20px;
                    }
                    .s_result {
                        margin: 90px auto;
                        border: none;
                        padding: 90px 10%;
                    }
                    .s_result .desktop_wrapper {
                        display: flex;
                        margin: 40px auto 0;
                        justify-content: space-between;
                        align-items: stretch;
                        border: 1px solid #E0E3EB;
                        border-radius: 12px;
                        padding: 50px 0;               
                    }
                    .s_result .desktop_wrapper>div {
                        padding: 0 60px;
                    }
                    .s_result .desktop_wrapper>div:not(:last-child) {
                        border-right: 2px solid #E0E3EB;  
                    }
                    .s_result p:not(.percent) {
                        padding: 0;
                    }
                }
            </style>
            <div class="body_goals" data-visible="Body goals">
                <h2>Your path to your<br>body-goals<img src="${git}red_heart.svg" alt="heart"></h2>
                <div class="after_time flx">
                    <p>After <span>1 week</span></p>
                    <p>After <span>1 month</span></p>
                </div>
                <div class="goals">
                    <p><span><img src="${git}friends.svg" alt="friends"></span>COACHING</p>
                    <div class="flx">
                        <p>My coach meets my needs and answers my questions.</p>
                        <p>My coach customizes my program and motivates me to stay on track.</p>
                    </div>
                </div>
                <div class="goals">
                    <p><span><img src="${git}slim-body.svg" alt="friends"></span>Program</p>
                    <div class="flx">
                        <p>I make simple changes to my eating, sleeping and fitness habits.</p>
                        <p>I eat foods I love while making small changes. I already see the results in my weight!</p>
                    </div>
                </div>
                <div class="goals">
                    <p><span><img src="${git}community.svg" alt="friends"></span>Community</p>
                    <div class="flx">
                        <p>I connect with people who are on a similar journey.</p>
                        <p>I’m celebrating successes and tips with others.</p>
                    </div>
                </div>
            </div>
            <div class="s_result" data-visible="Sustainable result">
                <h2>Able program <span>delivers sustainable results</span></h2>
                <div class="desktop_wrapper">
                    <div>
                        <p class="percent">84%</p>
                        <p>Reported a better relationship with food</p>
                    </div>
                    <div>
                        <p class="percent">91%</p>
                        <p>Reported our program as sustainable</p>
                    </div>
                    <div>
                        <p class="percent">90%</p>
                        <p>Reported our program as highly effective</p>
                    </div>
                    <div>
                        <p class="percent">89%</p>
                        <p>Reported improved energy</p>
                    </div>
                </div>
            </div>
        </section>
    `
    $('#root>div:nth-child(3)').insertAdjacentHTML('beforeend', part2)
}

function reviewIo () {
    const reviews = /* html */ `
        <section class="reviewsio_block" data-visible="Reviews block">
            <style>
                .reviewsio_block {
                    font-family: "SF Pro Text", sans-serif ;
                    font-weight: 400;
                    width: 100%;
                    font-size: 14px;
                    line-height: 18px;
                    color: #202B47;
                    padding: 0 26px;
                }
                .reviewsio_block .title {
                    margin-bottom: 31px;
                    align-items: start;
                }
                .reviewsio_block .title>* {
                    width: 50%;
                }
                .reviewsio_block .title .stars {
                    text-align: right;
                }
                .reviewsio_block .title h2 {
                    font-size: 28px;
                    line-height: 36px;
                    color: #010101;
                    font-weight: 600;
                }
                .reviewsio_block .title p {
                    font-size: 16px;
                    font-weight: 600;
                    margin-bottom: 10px;
                }
                .reviewsio_block .title p span {
                    color: #EB731A;
                }
                .reviewsio_block .list li {
                    display: none;
                    padding: 16px;
                    background: #F6F6F6;
                    border-radius: 12px;
                    margin-top: 12px;
                    position: relative;
                }
                .reviewsio_block .list li.show {
                    display: block;
                }
                .reviewsio_block .list li .name {
                    margin-bottom: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #010101;
                }
                .reviewsio_block .list li .name+p {
                    justify-content: flex-start;
                    column-gap: 4px;
                    color: #50AEA6;
                    margin-bottom: 12px;
                }
                .reviewsio_block .list li .text {
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 12px;
                }
                .reviewsio_block .list li .time {
                    font-size: 10px;
                }
                .reviewsio_block .list li .stars {
                    position: absolute;
                    right: 16px;
                    top: 16px;
                }
                .reviewsio_block .more_reviews {
                    width: 100%;
                    background: none;
                    border: 1px solid #EB731A;
                    border-radius: 8px;
                    color: #EB731A;
                    font-weight: 600;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 15px;
                    cursor: pointer;
                    max-width: 340px;
                    margin: 24px auto 0;
                }
                .reviewsio_block .more_reviews img {
                    margin-right: 8px;
                }
                @media (min-width: 769px) {
                    .reviewsio_block {
                        padding: 0 10%;
                    }

                    .reviewsio_block .list {
                        display: flex;
                        justify-content: start;
                        align-items: start;
                        column-gap: 20px;
                        row-gap: 20px;
                        flex-wrap: wrap;
                    }
                    .reviewsio_block .list li {
                        width: calc((100% - 40px) / 3);
                        margin-top: 0;
                    }
                    .reviewsio_block .title {
                        display: block;
                    }
                    .reviewsio_block .title>* {
                        width: 100%;
                    }
                    .reviewsio_block .title h2 {
                        font-size: 40px;
                        line-height: 50px;
                        margin-bottom: 50px;
                        text-align: center;
                    }
                    .reviewsio_block .title .stars {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;    
                    }
                    .reviewsio_block .title .stars img {
                        display: inline-block;
                        margin-right: 10px;
                    }
                    .reviewsio_block .more_reviews {
                        margin-top: 40px;
                    }
                    .reviewsio_block .title p {
                        margin-bottom: 0;
                    }
                }
            </style>
            <div class="flx title">
                <h2>User love our program</h2>
                <div class="stars">
                    <p>4.9 <img src="${git}stars.svg" alt="stars"></p>
                    <p><span>71</span> Reviews</p>
                </div>
            </div>
            <div class="filter"></div>
            <ul class="list">
               
            </ul>
            <button class="more_reviews"><img src="${git}load_more.svg" alt="more"> Load more</button>
        </section>
    `
    $('#root>div:nth-child(3)').insertAdjacentHTML('beforeend', reviews)
    let reviewReady = setInterval(function() {
        if(document.querySelectorAll('.R-ReviewsList__item').length > 0) {
            clearInterval(reviewReady)
            document.querySelectorAll('.R-ReviewsList__item').forEach(item => {
                const name = item.querySelector('.cssVar-authorName').innerText
                const text = item.querySelector('.R-ReviewsList__item--body').innerText
                const time = item.querySelector('.item__inner>div:last-child .R-TextBody--xxxxs').innerText.split(',').pop().trim()
                const review = /* html */`
                    <li>
                        <p class="name">${name}</p>
                        <p class="flx"><img src="${git}checkmark.svg" alt="checkmark"> Verified customer</p>
                        <p class="text">${text}</p>
                        <p class="time">${time}</p>
                        <img class="stars" src="${git}stars.svg" alt="stars">
                    </li>
                `
                $('.reviewsio_block .list').insertAdjacentHTML('beforeend', review)
            })
            showMoreReviews()
        }
    }, 100)
    
    $('.reviewsio_block .more_reviews').addEventListener('click', function() {
        showMoreReviews()
        pushDataLayer('Click on load more btn')
    })
    function showMoreReviews() {
        let step = 3
        if(window.innerWidth < 769) {
            step = 4
        }
        if($all('.reviewsio_block ul>li:not(.show)').length <= step) {
            $('.reviewsio_block .more_reviews').style.display = 'none'
        }
        $all('.reviewsio_block ul>li:not(.show)').forEach((item, i) => {
            if(i < step) {
                item.classList.add('show')
            }
        })  
    }
}

function hideBlocks () {
    // hide unused blocks
    $all('#root>div:nth-child(3)>div').forEach(block => {
        const cls = block.getAttribute('class')
        if(cls.includes('weightLossPlanListWrapper') || cls.includes('weightCarePathWrapper') || cls.includes('customerReviewsWrapper') || cls.includes('buttonPlaceholder') || cls.includes('buttonWrapper')) {
            block.style.display = 'none'
        }
        if(cls.includes('floatedButton')) {
            block.style.position = 'fixed'
            block.style.bottom = '-1px'
            block.style.left = '0'
            block.style.background = '#fff'
            block.style.boxShadow = '0px -4px 12px rgba(0, 0, 0, 0.12)'
            block.style.zIndex = '100'
            block.querySelector('button span').innerHTML = 'Get My Program Now'
            block.querySelector('button').addEventListener('click', function(e) {
                e.preventDefault()
                e.stopPropagation()
                $('.fullPayment').scrollIntoView({
                    behavior: "smooth",
                })
                pushDataLayer('Click on sticky button CTA')
            })
        }
    })

}

function setObserver() {
    const globalMut = new MutationObserver(muts => {
        globalMut.disconnect()
        if(window.location.pathname === '/subscribe' && !$('.body_part')) {
            hideBlocks()
            weightLossBlock()
            let paymentInt = setInterval(function() {
                if ($('.fullPayment>div>div:last-of-type button[type="submit"]')) {
                    clearInterval(paymentInt)
                    paymentBlock()
                }
            }, 100)
            rebuildVideoSlider()
            afterSliderBlock1()
            afterSliderBlock2()
            reviewIo()
            document.querySelector('.body_part').insertAdjacentHTML('afterbegin', style)
        }
        if(window.location.pathname === '/subscribe') {
            timer()
            hideBlocks()
            weightLossBlock()
        }
        globalMut.observe($('#root'), {
            childList: true,
            subtree: true
        })
    })

    globalMut.observe($('#root'), {
        childList: true,
        subtree: true
    })
}

start()

