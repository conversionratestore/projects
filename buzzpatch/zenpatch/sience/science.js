// additional scripts
let v1 = new IntersectionObserver(entries => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            setTimeout(function () {
                v2.observe(item.target)
            },1000)
        }
    })
}, {
    threshold: 0.9
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
        clarity("set", "Science-based solution block", "variant 1");
    }
}, 100)

pushDataLayer('loaded')
function pushDataLayer(action, label = '') {
    console.log(action, label)
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Science-based solution block',
        'eventAction': action,
        'eventLabel': label
    })
}

// main part

const git = 'https://conversionratestore.github.io/projects/buzzpatch/zenpatch/sience/img/'
const style = /* html */ `
    <style>
        #flowers {
            padding-bottom: 20px;
        }

        #flowers .container  {
            margin-bottom: 117px;
            position: relative;
        }
        .sleeping-problems {
            padding-top: 50px;
        }
        .js-mobile.scientific .container {
            padding: 0;
        }

        .exp_part1 .title, .exp_part2 .info .title {
            display: flex;
            column-gap: 12px;
            margin: 0 0 10px;
        }

        .exp_part1 .title img {
            height: 60px;
            width: 60px;
        }

        .exp_part1 .title+p {
            font-size: 16px !important;
            line-height: 24px !important;
            margin-bottom: 20px;
            color: #515151;
            letter-spacing: 0;
        }

        .exp_part1 .steps>a {
            position: absolute;
            z-index: 2;
            top: calc(100% + 45px);
            left: 50%;
            transform: translateX(-50%);
            padding: 20px 10px;
            width: 100%;
            max-width: 331px;
            font-size: 18px;
            letter-spacing: .015em;
            line-height: 24px;
            font-weight: 700;
            border-radius: 500px;
            filter: drop-shadow(0px 4px 4px rgba(0,0,0,.4));
            color: #fff;
            font-family: Din Condensed,Roboto,sans-serif;
            text-transform: uppercase;
            background: #2A7B72;
            box-shadow: 0 4px 15px #48434582;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .exp_part1 .steps>div {
            margin-bottom: 12px;
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        .exp_part1 .steps .step2, .exp_part1 .steps .step4 {
            align-items: end;
        }

        .exp_part1 .step1 .img {
            margin-left: 23px;
        }

        .exp_part1 .step2 .img {
            margin-right: 43px;
        }

        .exp_part1 .step3 .img {
            margin-left: 59px;
        }

        .exp_part1 .step4 .img {
            margin-right: 21px;
        }

        .exp_part1 .steps .lines {
            position: absolute;
            z-index: -1;
        }

        .exp_part1 .step1 .lines, .exp_part1 .step3 .lines {
            top: 43px;
            left: 105%;
        }

        .exp_part1 .step2 .lines, .exp_part1 .step4 .lines {
            top: 44px;
            right: 110%;
        }

        .exp_part1 .img {
            position: relative;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 5px solid #fff;
            box-sizing: border-box;
            margin-bottom: 12px;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 24px 60px rgba(12, 11, 11, 0.05), 0px 12px 24px rgba(12, 11, 11, 0.05);
        }
        .exp_part1 .img img:not(.lines) {
            height: 100%;
            width: 100%;
            background-size: cover;
            border-radius: 50%;
        }

        .exp_part1 .sub {
            font-family: 'Din Condensed','Roboto',sans-serif;
            color: #212529;
            text-transform: uppercase;
            font-size: 26px;
            line-height: 1.1;
        }

        .exp_part1 .sub .info {
            font-family: 'Din Condensed','Roboto',sans-serif;
            color: #2C7C73;
            text-transform: uppercase;
            text-decoration: underline;
            font-size: 16px;
            line-height: 1.1;
            text-align: center;
        }

        .exp_part2 ul {
            margin: 0;
            padding: 0 0 8px;
        }

        .exp_part2 .title h3{
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
            font-family: 'Din Condensed','Roboto',sans-serif;
            color: #212529;
            text-transform: uppercase;
        }

        .exp_part2 .info {
            padding: 0 15px 74px;
            background: url(${git}spline.svg) bottom center no-repeat;
            background-size: 100%;
            margin-bottom: -1px;
        }

        .exp_part2 .info .text p{
            color: #515151;
            font-size: 18px;
            line-height: 27px !important;
            margin-top: 22px;
            letter-spacing: 0;
        }

        .exp_part2 .tabs {
            background-color: #ECEEF0;
            padding: 32px 15px 0;
        }

        .exp_part2 .tabs>p {
            color: #212529;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 20px;
            letter-spacing: 0;
        }

        .exp_part2 .tabs li {
            width: 100%;
            margin-bottom: 8px;
            padding: 16px 20px;
            background-color: #fff;
            border-radius: 10px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            column-gap: 16px;
        }

        .exp_part2 .tabs li img {
            width: 44px;
            height: 44px;
        }

        .exp_part2 .tabs li .title {
            font-size: 16px !important;
            font-weight: 700;
            line-height: 20px !important;
            letter-spacing: 0;
            margin: 0 0 8px;
            color: #212529;
        }

        .exp_part2 .tabs li .title+p {
            font-size: 16px !important;
            line-height: 20px !important;
            color: #515151;
            letter-spacing: 0;
        }

        .exp_part2 .citrus {
            background-color: #BDD7B7;
            padding: 32px 15px;
            text-align: center;
        }

        .exp_part2 .citrus img {
            width: 60px;
            height: 60px;
            margin-bottom: 8px;
        }

        .exp_part2 .citrus p {
            font-weight: 500;
            font-size: 22px !important;
            line-height: 28px !important;
            letter-spacing: 0;
        }

        .hint {
            display: none;
            position: absolute;
            background: #fff;
            border-radius: 8px;
            padding: 16px;
            color: #515151;
            font-size: 16px;
            line-height: 20px;
            text-transform: none;
            font-family: 'Roboto', sans-serif;
            letter-spacing: 0;
            z-index: 3;
            box-shadow: 0px 2px 2px rgba(28, 5, 77, 0.05), 0px 12px 8px rgba(0, 0, 0, 0.02);
            width: 90vw;
        }

        .info.top .hint {
            bottom: calc(100% + 18px);
            top: auto;
        }

        .info.bot .hint {
            bottom: auto;
            top: calc(100% + 18px);
        }

      .arrow {
            display: none;
            position: absolute;
            background: #fff;
            box-shadow: 0px 2px 2px rgba(28, 5, 77, 0.05), 0px 12px 8px rgba(0, 0, 0, 0.02);
            height: 20px;
            width: 20px;
            border-radius: 0 0 0 3px;
            z-index: 4;
        }

        .info.top .arrow {
            bottom: calc(100% + 9px);
            left: calc(50% - 9px);
            clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
            transform: rotate(-45deg);
        }

        .info.bot .arrow {
            top: calc(100% + 9px);
            left: calc(50% - 9px);
            clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
            transform: rotate(135deg);
        }

        .info.active .hint, .info.active .arrow {
            display: block;
        }

    </style> 
`
const part1 = /* html */ `
    <div class="exp_part1">
        <div class="title">
            <img src="${git}natural.svg" alt="natural">
            <h3>Soothe an overactive mind for up to 8 hours with 100% all natural support</h3>
        </div>
        <p>Balanced with bright and soothing essential oils like <b>Mandarin, Sweet Orange, Atlas Cedarwood</b> and <b>Lavender</b>, ZenPatch helps regulate emotions like stress and anxiety* for up to 8 hours — <b>perfect for achieving a steady, focused calm all day long.</b></p>
        <div class="steps">
            <div class="step1 step" data-visible="Mandarin oil step">
                <div class="img">
                    <img src="${git}1.jpg" alt="photo">
                    <img src="${git}right.svg" alt="line" class="lines">
                </div>
                <div class="sub">
                    Mandarin oil
                    <div class="info">
                    learn more
                        <span class="hint">Mandarin oil contains a unique monoterpene profile that has been proven to have calming, anti-inflammatory, and relaxing effects, making it a useful tool for soothing restlessness and hyperactivity</span>
                        <span class="arrow"></span>
                    </div>
                </div>
            </div>
            <div class="step2 step" data-visible="Sweet Orange oil step">
                <div class="img">
                    <img src="${git}2.jpg" alt="photo">
                    <img src="${git}left.svg" alt="line" class="lines">
                </div>
                <div class="sub">
                    Sweet Orange oil
                    <div class="info">
                    learn more
                        <span class="hint">Sweet orange oil is a natural remedy that can help manage stress and anxiety in children by promoting relaxation and reducing feelings of anxiety. Its mood-boosting properties and uplifting aroma can also help improve emotional balance.</span>
                        <span class="arrow"></span>
                    </div>
                </div>
            </div>
            <div class="step3 step" data-visible="Atlas Cedarwood oil step">
                <div class="img">
                    <img src="${git}3.jpg" alt="photo">
                    <img src="${git}right2.svg" alt="line" class="lines">
                </div>
                <div class="sub">
                    Atlas Cedarwood oil
                    <div class="info">
                    learn more
                        <span class="arrow"></span>
                        <span class="hint">Atlas cedarwood oil has natural sedative properties that can help reduce stress and anxiety. Its calming effects on the nervous system can promote relaxation and improve sleep quality, which can be beneficial for children with anxiety or sleep disturbances.</span>
                    </div>
                </div>
            </div>
            <div class="step4 step" data-visible="Lavender oil step">
                <div class="img">
                    <img src="${git}4.jpg" alt="photo">
                    <img src="${git}left2.svg" alt="line" class="lines">
                </div>
                <div class="sub">
                    Lavender oil
                    <div class="info">
                    learn more
                        <span class="arrow"></span>
                        <span class="hint">Lavender oil can reduce stress and anxiety in children by soothing the nervous system and promoting relaxation. Its pleasant aroma has also been shown to improve sleep quality, making it a helpful natural remedy for children with anxiety or sleep difficulties.</span>
                    </div>
                </div>
            </div>
            <!--<img src="${git}logo.svg" class="logo" alt="">-->
            <a href="#" data-visible="Button try Zenpatch">Try zenpatch stickers</a>
        </div>
    </div>
`
const part3 = /* html */ `
    <div class="exp_part2">
        <div class="info" data-visible="Part 2 info">
            <div class="title">
                <img src="${git}chemist.svg" alt="chemist">
                <h3>The science-backed formula to calm the nervous system</h3>
            </div>
            <div class="text">
                <p>There are a lot of natural remedies floating around nowadays, but herbal oils are one of the very few to be supported by real scientific studies.</p>
                <p>We've taken the most well-researched of these, made them into a special blend, and engineered them into a sticker patch that releases that blend as an aroma every 5 minutes.</p>
                <p>This allows <b>ZenPatch to produce results in as little as 30 minutes,</b> with each patch lasting for up to 8 hours.</p>
            </div>
        </div>
        <div class="tabs">
            <p>Below you'll find relevant academic reading material for the natural essential oils we use:</p>
            <ul>
                <li data-visible="Part 2 tabs 1">
                    <img src="${git}journal.svg" alt="rg">
                    <div>
                        <p class="title">Source: Central European Journal of Nursing and Midwifery.</p>
                        <p>“The effect of aromatherapy with orange essential oil on anxiety and pain in patients with fractured limbs admitted to an emergency ward: A randomized clinical trial”</p>
                    </div>
                </li>
                <li data-visible="Part 2 tabs 2">
                    <img src="${git}nih.svg" alt="nih">
                    <div>
                        <p class="title">Source: National Library of Medicine.</p>
                        <p>“Therapeutic Effect and Mechanisms of Essential Oils in Mood Disorders: Interaction between the Nervous and Respiratory Systems”</p>
                    </div>
                </li>
                <li data-visible="Part 2 tabs 3">
                    <img src="${git}mdpi.svg" alt="mdpi">
                    <div>
                        <p class="title">Source: MDPI.</p>
                        <p>“Citrus Essential Oils in Aromatherapy: Therapeutic Effects and Mechanisms”</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="citrus" data-visible="Part 2 citrus">
            <img src="${git}citrus.svg" alt="citrus">
            <p><b>The oils work by triggering receptors in the nose, which sends messages from the nervous system to the limbic system — the system that controls behavior and emotions.</b></p>
        </div>
    </div>
`

start()

function start () {
    let int = setInterval(function() {
        if(document.querySelector('#flowers')) {
            clearInterval(int)
            experiment()
        }
    }, 100)
}


function experiment() {
    $('body').prepend(style)
    $('#flowers>.container').empty()
    $('#flowers>.container').append(part1)
    $('.scientific.js-mobile>.container').empty()
    $('.scientific.js-mobile>.container').append(part3)
    $('#flowers>.wave-bg').remove()
    document.querySelector('.steps a').addEventListener('click', function(e) {
        e.preventDefault()
        pushDataLayer('Click on steps try zenpatch button')
        $('#open')[0].click()
    })
    hintCreator()
    document.querySelectorAll('[data-visible]').forEach(item => {
        v1.observe(item)
    })
}

function hintCreator() {
    document.addEventListener('click', function(e) {
        if(!e.target.closest('.sub') && !e.target.classList.contains('sub')) {
            document.querySelectorAll('.info.active').forEach(item => {
                item.classList.remove('active')
                item.classList.remove('top')
                item.classList.remove('bot')
                item.querySelector('.hint').removeAttribute('style')
                item.style.position = 'unset'
            })
        }
    })

    document.querySelectorAll('.hint').forEach(item => {
        let hintTarget = item.closest('.sub')
        hintTarget.addEventListener('click', function() {
            document.querySelectorAll('.info.active').forEach(item => {
                item.classList.remove('active')
                item.classList.remove('top')
                item.classList.remove('bot')
                item.querySelector('.hint').removeAttribute('style')
            })
            pushDataLayer('Click on info item', hintTarget.innerText)
            pushDataLayer('Visibility hint', hintTarget.innerText)
            const hint = this.querySelector('.hint')
            this.querySelector('.info').classList.add('active')
            this.querySelector('.info').style.position = 'relative'
            const infoPosition = hintTarget.querySelector('.info').getBoundingClientRect();
            const bot = window.innerHeight - infoPosition.bottom
            const left = infoPosition.left
            const right = window.innerWidth - infoPosition.right
            const hintSize = hint.getBoundingClientRect();
            const hintW = hintSize.width
            const hintH = hintSize.height
            if(hintH > bot) {
                this.querySelector('.info').classList.add('top')
            } else {
                this.querySelector('.info').classList.add('bot')
            }

            if(left < (window.innerWidth / 2)) {
                hint.style.left = `${0 - left + 15}px`
            } else {
                hint.style.right = `${0 - right + 15}px`
            }

            
        })
    })
}

