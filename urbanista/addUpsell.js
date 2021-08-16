document.head.insertAdjacentHTML('beforeend', `
    <style>
        .lyon-item {
            border-top: 1px solid #E9E9E9;
            padding: 15px 0;
            margin-top: 10px;
        }
        .lyon-item__title {
            font-weight: bold;
            font-size: 16px;
            text-align: center;
            letter-spacing: 0.4px;            
            color: #333333;
            text-transform: uppercase;
            font-family: 'Novecento Wide Bold', sans-serif;
        }
        
        .lyon-item__slider-wrapper {
            position: relative;
            height: 130px;
            width: 130px;
            margin: 0 auto;
        }
        
        .lyon-item__slider-wrapper button {
            position: absolute;
            padding: 0;
            top: 50%;
            margin-top: -15px;        
            background: transparent;
            border: none;                
        }
        
        .lyon-item__slider-wrapper button:hover, button:focus, button:active {
            background: transparent;
            border: none;
        }
        
        button.lyon-item__arrow_prev {
            left: -40%;        
        }
        
        button.lyon-item__arrow_next {
            right: -40%;        
        }
        
        button.lyon-item__arrow_prev img{
            transform: rotate(180deg);
        }
        
        .lyon-item__info {
            text-align: center;
        }
        
        .lyon-item__info p {
            font-family: 'TradeGothic LT', sans-serif;
            color: #595959;
        }
        
        .info__title {          
            font-family: 'Novecento Wide Bold', sans-serif !important;
            font-weight: bold;
            font-size: 16px;        
            text-transform: uppercase;
            margin: 5px 0 3px;
            cursor: pointer;
        }
        
        .info__type {            
            font-size: 10px;
            letter-spacing: 0.4px;
            margin: 3px 0;
        }
        
        .info__description {
            font-size: 12px;
        }
        
        p.info__price {
            margin: 9px 0;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 0.4px;
            color: #333333; 
        }
        
        .lyon-item__info .info__btn {
            padding: 10px 20%;
            font-size: 12px;
            letter-spacing: 1.1px;
            text-transform: uppercase;
            color: #333333;            
            border: 1px solid #333333;
            background-color: #fff;
        }
               
        .block-minicart .subtotal {
            background-color: #fff;
        }
    </style>
`);

let myCustomlink = document.createElement('link');
myCustomlink.href =
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
myCustomlink.rel = 'stylesheet';
document.head.appendChild(myCustomlink);

let scriptCustom = document.createElement('script');
scriptCustom.src =
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

const language = window.location.pathname.split('/')[1];

const text = {
    en: [
        `Add Power bank<br>to Never run out of charging`,
        '(WIRELESS CHARGING)',
        `Wireless charging station. Charge your<br> iPhones and earphones wirelessly`,
        'View product'
    ],
    de: [
        `Füge eine Powerbank hinzu<br>und mache dir nie wieder Sorgen um deinen Akku.`,
        '(KABELLOSES AUFLADEN)',
        `Kabellose Ladestation. Lade deine iPhones<br> und In-Ear-Kopfhörer kabellos auf.`,
        'Produkt anzeigen'
    ],
    se: [
        `Lägg till en power bankså slipper<br>du att batteriet tar slut.`,
        '(SLADDLÖS LADDNING)',
        `Sladdlös laddningsstation. Ladda dina<br> iPhones och hörlurar trådlöst.`,
        'Se produkt'
    ]
};

function drawTepmlate() {
    if (document.querySelector('.minicart-items-wrapper') && !document.querySelector('.lyon-item')) {
        document.querySelector('.minicart-items-wrapper').insertAdjacentHTML('afterend', `
                        <div class="lyon-item">
                            <p class="lyon-item__title">${text[language] ? text[language][0] : text['en'][0]}</p>
                            <div class="lyon-item__slider-wrapper">
                                <div class="lyon-item__slider">
                                    <div><img src="https://conversionratestore.github.io/projects/urbanista/images/lyon_tilted_product_1.webp" alt="product tilted image"></div>
                                    <div><img src="https://conversionratestore.github.io/projects/urbanista/images/lyon_front_product_1.webp" alt="product front image"></div>
                                    <div><img src="https://conversionratestore.github.io/projects/urbanista/images/lyon_charger_coverimg_iphone11_1.webp" alt="product charger iphone image"></div>
                                </div>
                                <button class="lyon-item__arrow lyon-item__arrow_prev"><img src="https://conversionratestore.github.io/projects/urbanista/images/arrow_forward.svg" alt="arrow prev"></button>
                                <button class="lyon-item__arrow lyon-item__arrow_next"><img src="https://conversionratestore.github.io/projects/urbanista/images/arrow_forward.svg" alt="arrow next"></button>
                            </div>
                            <div class="lyon-item__info">
                                <img src="https://conversionratestore.github.io/projects/urbanista/images/circle_in_circle.svg" alt="active color">
                                <p class="info__title">Lyon</p>
                                <p class="info__type">${text[language] ? text[language][1] : text['en'][1]}</p>
                                <p class="info__description">${text[language] ? text[language][2] : text['en'][2]}</p>
                                <p class="info__price">${language === 'se' ? '399 kr' : '€39.99'}</p>
                                <button class="info__btn">${text[language] ? text[language][3] : text['en'][3]}</button>
                            </div>
                        </div>
                    `);

        // activate tiny slider
        let categoryInterval = setInterval(() => {
            if (typeof tns == 'function' && document.querySelector('.lyon-item__slider')) {
                clearInterval(categoryInterval);

                let sliderCategories = tns({
                    container: '.lyon-item__slider',
                    items: 1,
                    autoplay: false,
                    controls: true,
                    prevButton: document.querySelector('.lyon-item__arrow_prev'),
                    nextButton: document.querySelector('.lyon-item__arrow_next'),
                    loop: false,
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    nav: false,
                    preventScrollOnTouch: 'auto',
                    swipeAngle: 30
                });
            }
        }, 200);

        document.querySelector('.info__title').addEventListener('click', () => {
            location.href = `https://www.urbanista.com/${language}/lyon`;

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Add an upsell to the checkout popup mobile',
                'eventAction': 'Click on product name',
                'eventLabel': 'Checkout popup'
            });
        });

        document.querySelector('.info__btn').addEventListener('click', () => {
            location.href = `https://www.urbanista.com/${language}/lyon`;

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Add an upsell to the checkout popup mobile',
                'eventAction': 'Click on Add to cart button',
                'eventLabel': 'Checkout popup'
            });
        });

        document.querySelectorAll('.lyon-item__arrow').forEach(arrow => {
            arrow.addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — Add an upsell to the checkout popup mobile',
                    'eventAction': 'Click on arrows',
                    'eventLabel': 'Checkout popup'
                });
            });
        });
    }
}

drawTepmlate();

let start = setInterval(function () {
    if (document.querySelectorAll('.block-content')[1]) {
        clearInterval(start);

        // select the target node
        const target = document.querySelector('.minicart-wrapper');

        // create an observer instance
        let observer = new MutationObserver(function (mutations) {
            drawTepmlate();
        });

// configuration of the observer:
        const config = {attributes: true, childList: true, characterData: true};

// pass in the target node, as well as the observer options
        observer.observe(target, config);
    }

}, 100);


window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Add an upsell to the checkout popup mobile',
    'eventAction': 'loaded'
});

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = {hjid: 1709958, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.hj = window.hj || function () {
    (hj.q = hj.q || []).push(arguments);
};
hj('trigger', 'upsell_checkout_popup_mobile');
