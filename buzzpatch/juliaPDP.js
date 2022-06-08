let scriptCustomStyle = document.createElement("link")
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
scriptCustomStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomStyle)

let scriptCustom = document.createElement("script")
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

const style = /*html*/`
    <style>
        #flowers .col-sm-12 p {
            margin-bottom: -15px;
        }

        .shipping-noti {
            background: #3055AE !important;
        }

        .hand-banner img {
            margin-bottom: -90% !important;
        }

        .shipping-noti + .js-heading .js-btn.btn-primary {
            max-width: 293px;
            padding: 26px 20px;
        }

        #flowers .wave-bg {
            margin-top: -75px !important;
        } 

        .trust-rating {
            display: none;
        }

        .js-iphone .js-heading.js-mobile h1 {
            margin-top: 25px;
        }

        .options_wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 30px;
        }

        .options {
            margin-bottom: 20px;
        }

        .options li {
            position: relative;
            font-weight: 700;
            font-size: 14px;
            color: #212529;
            margin-bottom: 4px;
            padding-left: 2rem;
            list-style-type: none;
            background-image: url("https://conversionratestore.github.io/projects/buzzpatch/img/check_arrow.svg");
        }

        .options_wrapper img {
            margin-bottom: 24px;
        }

        .transparent + .effectiveness .container:first-child {
            display: none;
        }

        .transparent + .effectiveness {
            padding-top: 50px !important;
        }

        .effectiveness + .wave-effect {
            display: none;
        }

        .bp-comparison {
            background: url("https://conversionratestore.github.io/projects/buzzpatch/img/table_bg.svg"), #fff !important;
            background-size: cover !important;
            padding-top: 80px !important;
        }

        .possibility {
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;
        }

        .possibility p {
            margin: 0; 
        }        

        .possibility .bp-tooltip {
            top: 0;
        }

        .title_part {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
        }

        .title_part p {
            font-weight: 700;
            font-size: 22px !important;
            line-height: 26px !important;
            letter-spacing: -0.03em;
            color: #0C0B0B;
        }

        .text_part p {
            font-weight: 400;
            font-size: 18px;
            line-height: 24px;
            color: #212529;
        }
        

        .effectiveness .line-box {
            display: none;
        }

        .protect {            
            padding: 50px 0;
            margin: 0 -15px 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: url("https://conversionratestore.github.io/projects/buzzpatch/img/protect_bg.svg") no-repeat, #fff;
            background-size: cover;
        }

        .protect p {
            font-weight: 700;
            font-size: 24px !important;
            color: #0C0B0B;
            line-height: 130% !important;
            text-transform: uppercase;
        }

        .protect span {
            color: #FF3C81;
        }

        .advantages .possibility:last-child{
            margin-bottom: 10px;
        }

        .protection {
            text-align: center;
            background: url("https://conversionratestore.github.io/projects/buzzpatch/img/protection_bg.svg") no-repeat, #fff;
            background-size: cover;
            padding: 65px 15px 45px;
        }

        .protection .my_title {
            margin-top: 0;
        }

        .protection div {
            max-width: 302px;
            margin: 0 auto;
        }

        .protection div:last-child {
            margin-top: 24px;
        }

        .protection p {
            font-weight: 400;
            font-size: 18px !important;
            line-height: 150% !important;
            color: #212529;
            margin: 8px 0 0;
        }

        .protection span {
            color: #FF3C81;
        }

        p.my_title, 
        .bp-comparison .js-title.text-dark {
            font-weight: 400;
            font-size: 36px !important;
            line-height: 110% !important;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #212529 !important;
            font-family: 'DINEngschrift LT','Roboto',sans-serif;
            margin-bottom: 25px;
        }

        .kids .my_title {
            margin-top: 40px;
        }

        .kids .tns-outer {
            margin: 5px -15px 0;
        }

        .tns-nav {
            text-align: center;
            margin-top: 10px;
        }

        .tns-nav button {
            margin: 0 4px;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            background-color: #ECEEF0;
        }

        .tns-nav button.tns-nav-active {
            background-color: #FF3C7F; 
            pointer-events: none;           
        }

        .kids {
            padding-bottom: 22px;
        }

        .inside_pack {
            position: relative;
            padding: 50px 15px 30px;
        }

        .inside_pack::before {
            content: url('https://conversionratestore.github.io/projects/buzzpatch/img/wave_line.svg');
            position: absolute;
            top: 0;
            left: 0;            
        }

        .inside_pack .my_title {
            margin: 18px 0 14px;            
        }

        .inside_pack a {
            width: 100%;
            padding: 20px !important;
            margin-top: 44px;
            font-weight: 400 !important;
            font-size: 18px !important;
            letter-spacing: normal;
        }
        
        .bp-comparison {
            padding-top: 0;
        }

        .bp-comparison .js-title {
            margin-bottom: 40px;
        }

        .bp-comparison.js-mobile p {
            font-weight: 600;
            font-size: 14px !important;
            color: #212529;
        }

        .bp-comparison.js-mobile .bp-tooltip img {
            height: 10px;
            width: 10px;
        } 

        .trustpilot_wrapper {
            text-align: center;
            margin-top: 40px;
        }

        #purchase {
            padding-top: 0;
        }

        #purchase h2 {
            font-size: 36px !important;
        }

        #purchase a + img {
            display: none;
        }

        #purchase .grey {
            background: #fff !important
        }

        #purchase .prices {
            margin: 15px 0 35px;            
        }

        #purchase .js-total {
            margin-bottom: 0;
        }

        .shippering_wrapper {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 265px;
            margin: 10px auto 0;
        }

        .shippering_wrapper > div {
            display: flex;
            flex-direction: row;
            gap: 12px;
        }
    
        .shippering_wrapper img {
            width: 60px !important;
            height: auto !important;
            margin: 0 !important;
        }

        .package .shippering_wrapper p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400 !important;
            font-size: 14px !important;
            line-height: 130% !important;
            color: #212529 !important;
            text-align: left;
            margin: 0 !important;
        }

        .package .shippering_wrapper .bolder {
            font-weight: 700 !important;
            text-transform: uppercase;
            margin-bottom: 4px;
        }

        #reviews .js-title {
            margin-top: 10px;
        }

        #my_discount {
            font-weight: 400 !important;
            font-size: 13px !important;
            color: #212529 !important;
            margin: -10px auto 20px;
        }

        .bp-mob-table-container span {
            font-weight: 600;
            line-height: 16px;
            margin-left: 4px;
        }

        .bp-mob-table-container .col-3 {
            padding: 0 10px !important;
        }
    </style>    
`

const optionsBlock = /*html*/`
    <div class="options_wrapper">
        <ul class="options">
            <li>72-hours mosquito repellent</li>
            <li>For kids 0+ years old & adults</li>
            <li>100% natural content & chemical free</li>
        </ul>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot_new.svg" alt="trustpilot">
    </div>
`

const provenBlock = /*html*/`
    <div class="container">
        <div class="possibility">
            <div class="title_part">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/microscope.svg" alt="microscope">
                <p>
                    Scientifically proven to provide better protection than other mosquito repellants 
                    <span class="bp-tooltip"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/tooltip_new.svg">
                        <span class="bp-tooltiptext">Poseidon Sciences R&amp;D conducted research in 2021 to compare the repellent effect of Buzzpatch and other experimental patches against the common house mosquito.</span>
                    </span> 
                </p>
            </div>
            <div class="text_part">
                <p>Poseidon Science R&D conducted scientific research to compare BuzzPatch mosquito repellant with other commonly available repellants on the market. BuzzPatch stickers were scientifically proven to provide 16% better protection than next best alternatives.</p>
            </div>            
        </div>
        <div class="protect possibility">
            <p>Proven to provide<br><span>16% better</span><br>protection than other<br>alternative repellents</p>
        </div>
        <div class="possibility advantages">
            <div class="title_part">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/family.svg" alt="family">
                <p>Safe for kids 0+<br>years old & adults</p>
            </div>
            <div class="text_part">
                <p>Whether you want to protect your kid or your own, you can do it with BuzzPatch. Keep your whole family safe and protected that natural way!</p>
            </div>            
        </div>
        <div class="possibility">
            <div class="title_part">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/no_sprays.svg" alt="no sprays">
                <p>Forget about toxic<br>ineffective sprays</p>
            </div>
            <div class="text_part">
                <p>BuzzPatch are easy to use, fun, and convenient. No more insect spray made with harsh chemicals and skin irritants. No more fighting with your kids to get bug spray on. Just apply a mess-free, plant based sticker!</p>
            </div>            
        </div>
        <div class="possibility">
            <div class="title_part">
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/72_hours.svg" alt="72 hours">
                <p>Effective up to 72 hours</p>
            </div>
            <div class="text_part">
                <p>Our stickers are most effective within 12 hours, and continue to be effective for up to 72 hours.</p>
            </div>            
        </div>
    </div>
    <div class="container protection">       
        <p class="my_title">Instant ultimate<br>protection.<br>Just stick and go!</p>
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/protection_img.svg" alt="kid">
            <p>Simply place patches anywhere on the clothing</p>
        </div>
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/protection_img2.svg" alt="kid and mom">
            <p>Forget about mosquito bites for up to <span>72 hours</span>!</p>
        </div>
    </div>
    <div class="container kids">       
        <p class="my_title">Mosquito repellent<br>your kids will love!</p>
        <div id="my_slider">        
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/slider_img.png" alt="slider image">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/slider_img2.png" alt="slider image 2">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/slider_img3.png" alt="slider image 3">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/slider_img4.png" alt="slider image 4">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/slider_img5.png" alt="slider image 5">
        </div>
    </div>
    <div class="container inside_pack">
        <p class="my_title">What’s inside the pack</p>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/inside_pack.svg" alt="inside pack">
    </div>
`

document.head.insertAdjacentHTML('beforeend', style)

const waitForHeading = setInterval(() => {
    if (document.querySelector('.shipping-noti + .js-heading h1')) {
        clearInterval(waitForHeading)

        document.querySelector('.shipping-noti + .js-heading h1').insertAdjacentHTML('afterend', optionsBlock)
    }
}, 200);

const waitForParagraph = setInterval(() => {
    if (document.querySelector('#flowers p')) {
        clearInterval(waitForParagraph)

        document.querySelector('#flowers p').innerHTML = `<br>BuzzPatch has only 3 natural ingredients:  lavender, citronella and geraniol oils. It is completely chemical free, DEET free, soy free and safe for kids.`
    }
}, 200);

const waitForDiv = setInterval(() => {
    if (document.querySelector('.effectiveness')) {
        clearInterval(waitForDiv)

        document.querySelector('.effectiveness').insertAdjacentHTML('beforeend', provenBlock)
    }
}, 200);


const waitForSlider = setInterval(() => {
    if (document.getElementById('my_slider') && typeof tns === 'function') {
        clearInterval(waitForSlider)

        const mySlider = tns({
            container: '#my_slider',
            items: 1,
            slideBy: 'page',
            mouseDrag: true,
            swipeAngle: 30,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayButton: false,
            autoplayButtonOutput: false,
            navPosition: 'bottom',
            controls: false,
            center: true,
            gutter: 16,
            edgePadding: 28
        })

        mySlider.events.on('touchEnd', () => {
            window.dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: PDP improvements',
                'eventAction': 'Clicks on slider',
                'eventLabel': '',
            })
        })

        let waitForBtn = setInterval(() => {
            if (document.querySelector('.tns-nav')) {
                clearInterval(waitForBtn)

                document.querySelector('.tns-nav').addEventListener('click', function (e) {
                    if (e.target.matches('button')) {
                        window.dataLayer = window.dataLayer || []
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp: PDP improvements',
                            'eventAction': 'Clicks on slider',
                            'eventLabel': '',
                        })
                    }
                })
            }
        }, 200);
    }
}, 200);

const waitForInsidePack = setInterval(() => {
    if (document.querySelector('#ingredients .get-it') && document.querySelector('.inside_pack')) {
        clearInterval(waitForInsidePack)

        document.querySelector('.inside_pack').insertAdjacentElement('beforeend', document.querySelector('#ingredients .get-it'))
    }
}, 200);

const waitForTooltip = setInterval(() => {
    if (
        document.querySelectorAll('.bp-mob-table-container .compare-table')[6]?.querySelectorAll('.col-3')[0]
        && document.querySelectorAll('.bp-mob-table-container .compare-table')[1]?.querySelectorAll('.col-3 img')[2]?.src
    ) {
        clearInterval(waitForTooltip)

        document.querySelectorAll('.bp-comparison.js-mobile .bp-tooltip img').forEach(tooltip => {
            tooltip.src = 'https://conversionratestore.github.io/projects/buzzpatch/img/tooltip_new.svg'
        })

        document.querySelectorAll('.bp-mob-table-container .compare-table')[1].querySelectorAll('.col-3 img')[2].src = 'https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113'
        document.querySelectorAll('.bp-mob-table-container .compare-table')[1].querySelectorAll('.col-3 img')[2].srcset = 'https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113'
        document.querySelectorAll('.bp-mob-table-container .compare-table')[1].querySelectorAll('.col-3 img')[2].width = 17
        document.querySelectorAll('.bp-mob-table-container .compare-table')[1].querySelectorAll('.col-3 img')[2].size = 17

        document.querySelectorAll('.bp-mob-table-container .compare-table')[6].querySelectorAll('.col-3')[0].innerHTML = `<span>Up to 8 hours</span>`
    }
}, 200);

const waitForFAQ = setInterval(() => {
    if (document.querySelector('#faqs .container')) {
        clearInterval(waitForFAQ)

        document.querySelector('#faqs .container').insertAdjacentHTML('beforeend', `<div class="trustpilot_wrapper"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot_new2.svg" alt="trustpilot gray"></div>`)
    }
}, 200);

const isDiscount = () => {
    const name = 'discount_code'

    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? true : false
}

const addDiscount = () => {
    document.querySelector('#getNow a').insertAdjacentHTML('beforebegin', /*html*/`
        <p id="my_discount">Additional <b>10% discount</b> will be applied on the next step</p>
    `)

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP improvements',
        'eventAction': 'Visibility additional discount'
    });
}

const waitForPurchase = setInterval(() => {
    if (document.querySelector('#getNow a')) {
        clearInterval(waitForPurchase)

        document.getElementById('getNow').insertAdjacentHTML('beforeend', `
            <div class="shippering_wrapper">
                <div>
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/shipped-yellow.svg" alt="truck">
                    <p><b>FREE</b> worldwide shipping for all orders</p>
                </div>
                <div>
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/30day_new.svg" alt="30 day">
                    <div>
                        <p class="bolder">Risk-Free purchase</p>
                        <p>30-day money-back guarantee<br>& free returns</p> 
                    </div>
                </div>
            </div>
        `)

        if (!document.getElementById('my_discount')) {
            if (!!(isDiscount())) {
                addDiscount()
            } else {
                const waitForDiscount = setInterval(() => {
                    if (!!(isDiscount())) {
                        clearInterval(waitForDiscount)

                        addDiscount()
                    }
                }, 5000);
            }
        }
    }
}, 200);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: PDP improvements',
    'eventAction': 'loaded',
    'eventLabel': ''
});

let waitForClarityNew = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(waitForClarityNew)

        clarity('set', 'pdp_improvements', 'variant_1');
    }
}, 200);

const waitForJu = setInterval(() => {
    if (document.querySelector('.ju_iframe') || document.getElementById('ju_overlay')) {
        clearInterval(waitForJu)

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: PDP improvements',
            'eventAction': 'Pop up load',
            'eventLabel': ''
        });
    }
}, 2000);
