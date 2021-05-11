setTimeout(function () {
    document.head.insertAdjacentHTML(
        'beforeend',
        `
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <style>    
        .product-info-main {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #FFFFFF !important;
            text-align: center;
            padding-top: 0;
        }
        .product-info-main .yotpoBottomLine {
            margin: 15px 0;
        }
        .yotpo.bottomLine .yotpo-bottomline .yotpo-icon-star, .yotpo.bottomLine .yotpo-bottomline .yotpo-icon-half-star, .yotpo.bottomLine .yotpo-bottomline .yotpo-icon-empty-star, .yotpo.bottomline .yotpo-bottomline .yotpo-icon-star, .yotpo.bottomline .yotpo-bottomline .yotpo-icon-half-star, .yotpo.bottomline .yotpo-bottomline .yotpo-icon-empty-star, .yotpo .yotpo-modal-bottom-line .yotpo-bottomline .yotpo-icon-star, .yotpo .yotpo-modal-bottom-line .yotpo-bottomline .yotpo-icon-half-star, .yotpo .yotpo-modal-bottom-line .yotpo-bottomline .yotpo-icon-empty-star {
            font-size: 22.5px;
        }
        .yotpo .yotpo-icon {
            margin: 0px 2px
        }
        .yotpo-yotpo-is-enabled .yotpo-icon-double-bubble, .yotpo-yotpo-is-enabled .yotpo-stars {
            margin: 0 20px 0 0!important;
        }
        .yotpo a {
            line-height: 1.4;
        }
        .product-info-main .product-info-price {
            margin: 5px 0 22px 0;
        }
        .fotorama__arr__arr {
            display: none;
        }
        .fotorama__dot {
            height:8px;
            width:8px;
            background-color: #DCDCDC;
            border-color: #DCDCDC;
        }
        .fotorama__active .fotorama__dot {
            background-color: #737373;
            border-color: #737373;
        } 
        .swatch-option {
            width: 22px;
            height: 22px;
            margin: 0px 12px;
        }
        .swatch-option:after {
            content: '';
            top: -4px;
            left: -4px;
            width: 30px;
            height: 30px;
        }
        .swatch-attribute .swatch-title {
            font-size: 16px;
            letter-spacing: 1px;
            color: #141414;
            margin-bottom: 20px;
            font-style: normal !important;
            text-transform: uppercase;
        }
        .swatch-attribute .swatch-title .swatch-title--color {
            font-weight: 500;
            color: #737373;
        }
        .product-info-main-wrapper {
            height: 375px !important;            
        }
        .product-info-main .page-title {
            letter-spacing: 6px;
        }
        .product-info-main .product.attribute p{
            color: #737373;
            letter-spacing: 0.2px;
            line-height: 125.19%;
        }
        .product-info-main .product.attribute.overview {
            text-align: start;
            letter-spacing: 0.2px;
            margin-bottom: 0;
        }
        .product-info-main .product.attribute.overview .trigger {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0 5px;
            background: #fff;
            color: #979F88;            
        }
        .yotpo a {
            font-size: 16px !important;
            text-decoration-line: underline !important;
            color: #70785B !important;
        }
        .product-features {
            display: none;
        }
        .product-add-form {
            width: 100%;
        }
        .product-info-main .price {
            font-size: 24px;
        }
        .action.primary {
            font-size: 14px !important;
        }
        .product-additional-info, .product-view-badge, .padded.row, .product-view-cms:after {
            display: none;
        }
        .properties {
            display: flex;
            flex-wrap: wrap;
            padding: 12px;
        }
        .properties .item {
            display: flex;
            flex-direction: column;
            width: 100%;
            flex: 50%;            
            padding: 15px;
            text-align: center;
            color: #000000;
            line-height: 12px;

        }
        .properties .item>div {
            height: 55px;
            margin: 0 auto 8px;
            max-width: 70%;
        }
        
        .properties .item>div img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .item.item--battery-life,
        .item.item--listening-time {
            display: flex;
            justify-content: center;
        }
        .item.item--battery-life span,
        .item.item--listening-time span{
            font-size: 12px;
            line-height: 12px;
        }
        .item.item--battery-life p,
        .item.item--listening-time p{
            font-size: 30px;
            line-height: 30px;
            font-weight: 500;
            margin: 5px 0;
        }
        .item__heading {
            font-weight: 700;
            font-size: 11px;
            line-height: 11px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
        }
        .view-block { 
            color: #70785B;           
            margin: auto;
            padding: 15px 0;
            width: 100%;
        }
        .view-block span{
            display: block;
            font-size: 16px;
            line-height: normal;
            letter-spacing: normal;
            text-decoration: underline;
            cursor: pointer;
            text-align: center;
        }
        .review {
            background: #F2F2F2;
            padding: 20px 35px;
            text-align: center;            
        }
        .review p{
            font-size: 22px; 
            color: #737373;
            line-height: 30px;
        }      
        .slick-track {
            display: flex;
        }
        .slick-initialized .slick-slide {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: auto;
        }
        .single-item > div {
            background: #FFFFFF;
            // padding: 25px;
            letter-spacing: 0.2px;
        }
        .single-item > div p {
            font-style: italic;
            font-weight: 300;
            font-size: 18px;
            line-height: 28px;
            color: #000000;
        }
        .single-item > div .author {
            font-weight: 300;
            font-size: 16px;
            color: #B2B2B2;
            margin: 20px 0;
        }
        .single-item > div .company {
            font-weight: 700;
            font-size: 24px;
            color: #8D8D8C;
            text-decoration: underline;
            text-transform: uppercase;
            font-style: normal;
        }
        .quote {
            background: #FFFFFF;
            padding: 35px 35px 27px 35px;
        }
        .quote__box {
            position: relative;
            border: 1px solid #000000;
            padding: 25px 15px;
            text-align: center;
            line-height: 24px;
        }
        .quote__icon {
            position: absolute;
            background: #FFFFFF;
            top: -7px;
            right: 42%;
            padding: 0 10px;
        }
        .quote__box p {
            font-weight: 300;
            font-size: 14px;
            letter-spacing: .2px;
            color: #000000;
        }
        .quote__box--author {
            font-weight: 700;
            font-size: 16px;
        }
        .slick-slider {
            margin-top: 10px;
        }
        .slick-slide {
            padding: 25px;
        }
        .slick-dots {
            list-style-type: none;
            display: flex !important;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 15px 0 5px 0;
        }
        .slick-dots li {
            margin: 0 5px;
        }
        .slick-dots button {
            display: block;
			padding: 0;			
			text-indent: -9999px;
            height: 10px;
            width: 10px;
            background-color: #DCDCDC !important;
            border-color: #DCDCDC !important;            
            border-radius: 6px;
        }
        .slick-dots .slick-active button{
            background-color: #737373 !important;
            border-color: #737373 !important;
        }
        .slick-prev.slick-arrow, .slick-next.slick-arrow {
            display: none !important;
        }
        .prev-arrow {
            transform: rotate(180deg);
        }
        .prev-arrow, .next-arrow{
            margin: 0 10px;
        }
        @media only screen and (max-width: 1023px)
.sticky-pdp-cta .product-title-price {
    display: flex !important;
}
    </style>
    `,
    );

    document.body.insertAdjacentHTML(
        'beforeEnd',
        `<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>`,
    );

    const local = window.location.pathname.split('/')[1];

    const languages = {
        us: [
            /*0*/ 'hrs',
            /*1*/ 'playtime',
            /*2*/ 'active noise cancelling',
            /*3*/ 'Reduces unwanted sound and clamour',
            /*4*/ 'ambient sound mode',
            /*5*/ 'Advanced technology which filters only important sounds from your surroundings',
            /*6*/ 'bluetooth',
            /*7*/ 'Easily connect with your device in seconds',
            /*8*/ 'GoFit',
            /*9*/ 'GoFit earbud-replacements for a snug and more secure fit',
            /*10*/ 'Hands-free',
            /*11*/ 'Hands-free with microphone',
            /*12*/ 'Hands-free with microphone and volume control',
            /*13*/ 'in ear detection',
            /*14*/ 'Pause the music automatically if one earbud is removed. Auto-play once you put the earbud back',
            /*15*/ 'ios & android',
            /*16*/ 'Compatible with Android and iOS',
            /*17*/ 'More than 6 hrs of listening time on one charge',
            /*18*/ 'on ear detection',
            /*19*/ 'Pause the music automatically if the headphones are removed. Auto-play once you put them back on',
            /*20*/ 'play & pause button',
            /*21*/ 'Quick charge',
            /*22*/ 'Up to 3hrs of playtime with only 15 min of charging',
            /*23*/ 'Remote control',
            /*24*/ 'Manage your device with Voice Control or by the simple tap of your finger using Touch Control',
            /*25*/ 'Sports',
            /*26*/ 'Wireless sports earphones with the perfect fit',
            /*27*/ 'touch control',
            /*28*/ 'For an easy handling of music and calls ',
            /*29*/ 'Travel case',
            /*30*/ 'Includes a hard travel case',
            /*31*/ 'Type C charging',
            /*32*/ 'Up to',
            /*33*/ 'of battery life with the charging case',
            /*34*/ 'of listening time on one charge',
            /*35*/ 'water resistant',
            /*36*/ 'wireless charging',
            /*37*/ 'Recharge your case wirelessly on a QI-charger',
            /*38*/ 'Compatible with Android, iOS and Windows',
            /*39*/ 'View Specs',
            /*40*/ 'Urbanista has been praised by a long list of tech’s most respected publications',
            /*41*/ 'Color',
        ],
        se: [
            /*0*/ 'timmar',
            /*1*/ 'speltid',
            /*2*/ 'Active Noise Cancelling',
            /*3*/ 'Stänger ute oönskat ljud',
            /*4*/ 'Ambient Sound Mode',
            /*5*/ 'Avancerad teknik som bara filtrerar viktiga ljud från din omgivning',
            /*6*/ 'Bluetooth',
            /*7*/ 'Anslut enkelt till din enhet på några sekunder',
            /*8*/ 'GoFit',
            /*9*/ 'GoFit utbytbara silikontoppar för en skönare och säkrare passform',
            /*10*/ 'Handsfree',
            /*11*/ 'Handsfree med mikrofon',
            /*12*/ 'Handsfree med mikrofon- och volymkontroll',
            /*13*/ 'In-ear Detection',
            /*14*/ 'Pausa musiken automatisk om en örlur tas ut. Autoplay när den sätts tillbaka i örat.',
            /*15*/ 'ios & android',
            /*16*/ 'Kompatibel med Android och iOS',
            /*17*/ 'Mer än 6 timmars lyssningstid på en laddning',
            /*18*/ 'On-ear Detection',
            /*19*/ 'Pausa musiken automatiskt om hörlurarna tas av. Autoplay aktiveras när dom sätts tillbaka på plats.',
            /*20*/ 'play & pause-knapp',
            /*21*/ 'Snabb laddning',
            /*22*/ 'Upp till 3 timmars speltid med endast 15 minuters laddning',
            /*23*/ 'Fjärrkontroll',
            /*24*/ 'Hantera din enhet med röststyrning eller används enkla touchkontroller.',
            /*25*/ 'Sport',
            /*26*/ 'Trådlösa sporthörlurar med perfekt passform',
            /*27*/ 'Touch Kontroll',
            /*28*/ 'För enkel hantering av musik och samtal',
            /*29*/ 'Resväska',
            /*30*/ 'Innehåller ett hårt resefodral',
            /*31*/ 'Typ C-laddning',
            /*32*/ 'Upp till',
            /*33*/ 'batteritid med laddningsetuit',
            /*34*/ 'speltid på en laddning',
            /*35*/ 'vattentålig',
            /*36*/ 'trådlös laddning',
            /*37*/ 'Ladda ditt fodral trådlöst på en QI-laddare',
            /*38*/ 'Kompatibel med Android, iOS och Windows',
            /*39*/ 'Visa specifikationer',
            /*40*/ 'Urbanista har hyllats av en rad av Techvärldens mest respekterade publicister.',
            /*41*/ 'Färg',
        ],
        de: [
            /*0*/ 'Std.',
            /*1*/ 'Spielzeit',
            /*2*/ 'Aktive Geräuschunterdrückung',
            /*3*/ 'Reduziert unerwünschte Geräusche und Lärm',
            /*4*/ 'Umgebungsgeräuschmodus',
            /*5*/ 'Fortschrittliche Technologie, die nur wichtige Geräusche aus deiner Umgebung filtert',
            /*6*/ 'Bluetooth',
            /*7*/ 'Verbindet sich einfach und in Sekundenschnelle mit deinem Gerät',
            /*8*/ 'GoFit',
            /*9*/ 'GoFit-Ohrhörer-Ersatz für einen passgenauen und sicheren Sitz',
            /*10*/ 'Handsfree',
            /*11*/ 'Freisprecheinrichtung mit Mikrofon',
            /*12*/ 'Freisprecheinrichtung mit Mikrofon und Lautstärkeregelung',
            /*13*/ 'In-ear-erkennung',
            /*14*/ 'Wird ein Ohrhörer entfernt, pausiert die Musik automatisch. Die Wiedergabe erfolgt direkt, sobald du den Ohrhörer wieder einsetzt',
            /*15*/ 'iOS & Android',
            /*16*/ 'Kompatibel mit iOS & Android',
            /*17*/ 'Mehr als 6 Std. Spielzeit mit einer Akkuladung',
            /*18*/ 'On-ear-erkennung',
            /*19*/ 'Pausiert die Musik automatisch, wenn die Kopfhörer abgenommen werden. Auto-Play, wenn du sie wieder aufsetzt',
            /*20*/ 'Play & Pause-Taste',
            /*21*/ 'Schnelles Aufladen',
            /*22*/ 'Bis zu 3 Std. Spielzeit mit nur 15 Min. Ladedauer',
            /*23*/ 'Fernsteuerung',
            /*24*/ 'Steuere dein Gerät mithilfe der Sprachsteuerung oder durch einfaches Antippen mit dem Finger über die Touch-Control-Funktion',
            /*25*/ 'Sport',
            /*26*/ 'Kabellose Sport-Ohrhörer mit perfekter Passform',
            /*27*/ 'Touch control',
            /*28*/ 'Für die einfache Handhabung von Musik und Anrufen',
            /*29*/ 'Reise-etui',
            /*30*/ 'Das Paket beinhaltet ein hartes Reise-Etui',
            /*31*/ 'Laden mit Typ C',
            /*32*/ 'Bis zu',
            /*33*/ 'Akkulaufzeit mit der Ladehülle',
            /*34*/ 'Spielzeit mit einer Akkuladung',
            /*35*/ 'Wasserdicht nach',
            /*36*/ 'Kabelloses Laden',
            /*37*/ 'Laden Sie Ihren Koffer drahtlos mit einem QI Ladegerät auf',
            /*38*/ 'Kompatibel mit iOS, Android und Windows',
            /*39*/ 'Technische Daten anzeigen',
            /*40*/ 'Urbanista wurde von einer langen Liste renommiertester technischer Publikationen gelobt',
            /*41*/ 'Farbe',
        ],
    };

    let textList = languages[local];
    let product = window.location.pathname
        .split('/')[2]
        .split('-')[0];

    let propForProduct = {
        london: {
            bl: ['25', textList[33]],
            lt: ['6', textList[34]],
            prop: ['11', '7', '12', '0', '14', '2', '1'],
            review: [
                'The technology is seamless! The ambience feature is one of my favourite things about these headphone, especially when your trying to concentrate. They are easy to connect and are compatible with every device I have. The in-ear detection is honestly amazing, and the fact they start playing what ever was last on when you put them in again is awesome! If your gonna buy headphones, buy these!',
                'Maria',
            ],
        },
        stockholm: {
            bl: ['20', textList[33]],
            lt: ['4', textList[34]],
            prop: ['14', '16', '2', '1'],
            review: [
                `This is the third pair of Stockholm plus I've bought as gifts for family. Great quality, sound and stylish. Very good value too.`,
                'Catherine B.',
            ],
        },
        paris: {
            bl: ['20', textList[33]],
            lt: ['5', textList[34]],
            prop: ['7', '14', '19', '2', '1'],
            review: [
                `I've been using the Urbanista Paris now for about two weeks and really like them! They feel good, they look nice and the sound quality is good as well. The passive noise cancellation works fine. They come with a nice charging case which lasted for about a week before I had to charge the case again. Absolut recommendation if you don't wan't to spend a fortune on headphones.`,
                '',
            ],
        },
        miami: {
            lt: ['50', textList[1]],
            prop: ['11', '0', '13', '8', '6', '2', '1'],
            review: [
                `There are so many great things to say about the Urbanista Miami Wireless Headphones that I don't even know where to start. They have a stylish and beautiful design and a wonderful soft-touch feel. The headband and ear-cups are nicely padded and totally comfortable. The sound quality is top-notch, including rich bass. The ambient feature works better than expected allowing you to hear everything around you as if your headphones weren't even on. The travel case is an added bonus, I wish more brands included this. Most brands just give you a pouch, not a nice hard case. If a friend or family member asked me to recommend a pair of headphones, I would happily recommend these.  
        `,
                'Andy R.',
            ],
        },
        boston: {
            lt: ['6', textList[1]],
            prop: ['4', '16', '20', '1'],
            review: [
                'First set of earphones that give me a good ear fit while using. No slipping and great sound. Love my Boston earphones!',
                'Julie C.',
            ],
        },
        sydney: {
            lt: ['5', textList[1]],
            prop: ['3', '17', '2', '1'],
            review: [
                `This speaker is amazing, I purchased it because I wanted a small speaker for when we're out and about, on a picnic etc. It is the perfect size, could easily fit in a handbag, The sound quality is fantastic and the volume it can reach is perfect. I was really surprised at what a wonderful buy this was.`,
                'Rebecca G.',
            ],
        },
        brisbane: {
            lt: ['10', textList[1]],
            prop: ['3', '2', '1'],
            review: [
                `Looks unreal, fits on my fireplace, bookshelf, coffee table and doesn’t look out of place, fits in the bag easily. Doesn’t look cheap or tacky like most of the competition. Sounds good, deep and can go loud!`,
                'David S.',
            ],
        },
        athens: {
            bl: ['32', textList[33]],
            lt: ['8', textList[34]],
            prop: ['14', '7', '4', '18', '2', '1'],
            review: [
                `I purchased these late last year and have been using them for a while now. I have tried Beats and a few other brands but the charging case and size of the some of the competitors make them cumbersome to carry around. The Athens are the perfect size. Easily portable, fast charging and comfortable to wear while at work or out at play. The carrying case is small and fits comfortably in my pocket for quick and easy charging while on the go. The earbuds fit nice and snug in my ears and provide exceptional sound quality with good hi and low end audio sound. They are great for outdoors as well as the gym as i have never had one fall out of my ear during activity. Voice quality on phone calls is exceptional as well. I would definitely recommend these to anyone looking for great set of earbuds at an affordable price. 
        `,
                'Aaron D.',
            ],
        },
        new: {
            bl: ['25', textList[1]],
            prop: ['11', '9', '2', '1'],
            review: [
                `With the medium prize range you get authentic sound and quality. Despite the genre of music these bad boys delivers the top notch sound. Im glad I bought these.
        `,
                'Miska',
            ],
        },
        seattle: {
            bl: ['12', textList[1]],
            prop: ['5', '9', '3', '2', '1'],
            review: [
                `Love my black seattle wireless headphones, feels really comfortable with clear sound, bluetooth is stable and easy to change tracks and volume, folding feature makes easy to carry. Great value for money.
        `,
                'Matt',
            ],
        },
        san: {
            prop: ['9', '2', '3'],
            review: [
                `I really love that Urbanista provides plastic ended headphones. They're really the best fit for me and are sadly becoming less prevalent.`,
                'Sulaiman K.',
            ],
        },
        madrid: {
            bl: ['4', textList[1]],
            prop: ['9', '3', '2', '1'],
            review: [
                `These are awesome headphones. Easy to use. Easy to connect and easy to change. Perfect to walks or just relaxing.`,
                'Annmaree B.',
            ],
        },
        berlin: {
            bl: ['4', textList[1]],
            prop: ['10', '9', '3', '2', '1'],
            review: [
                `Excellent purchase. Thoroughly pleased with them. Good sound quality. Easy to manage. Also great idea for a gift. Recommend them 100%.`,
                'Soraya P.',
            ],
        },
        lyon: {
            prop: ['7'],
            review: [
                `So easy to set up that I didn’t realise it was on. Charged my Paris very quickly, and also my iPhone. Yet another great product from Urbanista.
        `,
                'Stuart P.',
            ],
        },
        detroit: {
            bl: ['12', textList[1]],
            prop: ['15', '9', '2', '1'],
            review: [],
        },
        melbourne: {
            bl: ['6', textList[1]],
            prop: ['3', '16', '2', '1'],
            review: [
                `This was my first time buying anything from Urbanista. I purchased the Melbourne speaker in black and the Seattle wireless headphones in rose gold. Wasn't sure what to expect, but I love their website layout and the products appeared to be very nice online. When I received my order, my first thought was how beautiful, stylish, and modern the packaging is. Urbanista clearly put a lot of thought into this, because I will be keeping the Seattle box forever! Getting the products set up took only seconds. The quality of sound for both items is fantastic. While the speaker is small and could fit in your pocket, the sound travels extremely well. I have left the speaker in the kitchen while doing other chores in basement and attic, from a far distance, and you can still hear the speaker output very clearly. When you increase volume, the sound aesthetics isn't compromised, which is great! I love the product, packaging, and easy ordering experience.
        `,
                'Cristen B.',
            ],
        },
    };

    let currentPropList = propForProduct[product];

    let propList = [
        /* 0 */ ['voice.svg', textList[4], textList[5]],
        /* 1 */ ['bt.svg', textList[6], textList[7]],
        /* 2 */ ['phone.svg', textList[15], textList[16]],
        /* 3 */ ['play-pause.svg', textList[20], ''],
        /* 4 */ ['sport.svg', textList[25], textList[26]],
        /* 5 */ ['touch.png', textList[27], textList[28]],
        /* 6 */ ['type-c.svg', textList[31], ''],
        /* 7 */ ['wireless-charge.svg', textList[36], textList[37]],
        /* 8 */ ['case.svg', textList[29], textList[30]],
        /* 9 */ ['hand.svg', textList[10], textList[12]],
        /* 10 */ ['go-fit.svg', textList[8], textList[9]],
        /* 11 */ ['active-noise.svg', textList[2], textList[3]],
        /* 12 */ ['in-ear.svg', textList[13], textList[14]],
        /* 13 */ ['on-ear.png', textList[18], textList[19]],
        /* 14 */ ['voice-control.png', textList[23], textList[24]],
        /* 15 */ ['fast-charge.svg', textList[21], textList[22]],
        /* 16 */ ['ipx4.svg', `${textList[35]} IPX4`, ''],
        /* 17 */ ['ipx5.svg', `${textList[35]} IPX5`, ''],
        /* 18 */ ['ip67.svg', `${textList[35]} IP67`, ''],
        /* 19 */ ['ipx4.svg', `${textList[35]} IPX3`, ''],
        /* 20 */ ['phone.svg', '', textList[38]],
    ];

    $('.fotorama').fotorama({
        nav: 'dots',
        height: 420,
    });

    // product name
    document
        .querySelector('.page-title')
        .insertAdjacentElement(
            'beforebegin',
            document.querySelector('.product-options-wrapper'),
        );

    // color title
    document.querySelector(
        '.swatch-title',
    ).innerHTML = `<span class='swatch-title--color'>${
        textList[41]
    }: </span> ${
        document.querySelector('.swatch-option.selected').ariaLabel
    }`;

    document.querySelectorAll('.swatch-option').forEach((e) =>
        e.addEventListener('click', () => {
            document.querySelector(
                '.swatch-title',
            ).innerHTML = `<span class='swatch-title--color'>${
                languages[local].color
            }: </span> ${
                document.querySelector('.swatch-option.selected')
                    .ariaLabel
            }`;
        }),
    );

    // read more
    const descriptionText =
        document
            .querySelector(
                '.product-info-main .product.attribute.overview',
            )
            .getElementsByClassName('value')[0].children[0] ||
        document
            .querySelector(
                '.product-info-main .product.attribute.overview',
            )
            .getElementsByClassName('value')[0];

    descriptionText.style.position = 'relative';

    const trigger = document
        .querySelector(
            '.product-info-main .product.attribute.overview',
        )
        .getElementsByClassName('trigger')[0];

    descriptionText.insertAdjacentElement('beforeend', trigger);

    const productInfoWrapper = document.querySelector(
        '.product-info-main-wrapper',
    );

    // add height on click on Read More
    trigger.addEventListener('click', () => {
        productInfoWrapper.setAttribute(
            'style',
            'height:525px !important',
        );
    });

    //add height of second p in description
    if (
        document
            .querySelector(
                '.product-info-main .product.attribute.overview',
            )
            .getElementsByClassName('value')[0].children[1]
    ) {
        let blockHeight =
            document
                .querySelector(
                    '.product-info-main .product.attribute.overview',
                )
                .getElementsByClassName('value')[0].children[1]
                .offsetHeight + productInfoWrapper.offsetHeight;
        productInfoWrapper.setAttribute(
            'style',
            `height:${blockHeight}px !important`,
        );
    }

    // add to cart button
    document
        .querySelector('.action.primary.tocart')
        .getElementsByTagName('span')[0]
        .insertAdjacentHTML(
            'beforebegin',
            `<img style="margin-right: 5px; vertical-align: text-bottom;" src='https://conversionratestore.github.io/projects/urbanista/images/Vector.svg' />`,
        );

    // // shipping list
    // const shippingList = document.createElement('div')
    // shippingList.classList.add('shipping');
    // shippingList.innerHTML = `
    // <ul>
    //     <li>Free shipping to <strong>United States</strong></li>
    //     <li>Arrives: <strong>April 21-23</strong></li>
    //     <li>Order within: <strong>7 hrs 25 mins</strong></li>
    //     <li>Free &amp; easy 90-day returns</li>
    //     <li>365 days warranty</li>
    // </ul>`

    // product properties
    let specsBlock;
    if (product !== 'miami') {
        specsBlock = document.querySelectorAll('.pd-row')[9];
        specsBlock
            ? specsBlock.setAttribute('id', 'specs-block')
            : null;
    }

    drawProdProp();

    // view specs scroll logic
    $('.view-block span').click(function (e) {
        e.preventDefault();
        $('html,body').animate(
            {
                scrollTop: $('#specs-block').offset().top - 68 + 'px',
            },
            { duration: 1e3 },
        );
    });

    // slider review block
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
<p>${textList[40]}</p>
<div>
    <img src='https://conversionratestore.github.io/projects/urbanista/images/awards.png'/>
</div>
<div class='single-item'>
    <div>
        <p>“Swedish audio brand Urbanista has been taking the wireless earphone market by storm since it was founded in 2010.”</p>
        <!-- <p class='author'>Tom Nash, HIGHSNOBIETY</p> -->
        <p class='company'>Highsnobiety</p>
    </div>
    <div>
        <p>“Urbanista made a serious contender for the truly wireless ANC earbud crown.”</p>
        <!-- <p class='author'>Tom Nash, HIGHSNOBIETY</p> -->
        <p class='company'>Laptop Mag</p>
    </div>
    <div>
        <p>“Urbanista’s striking Miami headphones hit the right notes with their focused ANC performance, feature set and good audio quality.”</p>
        <!-- <p class='author'>Tom Nash, HIGHSNOBIETY</p> -->
        <p class='company'>Trusted Reviews</p>
    </div>
    <div>
        <p>“Hardly a month goes by without yet another Swedish brand popping up with some stylish earbuds that usually manages to blend great performance with cool styling.”</p>
        <!-- <p class='author'>Tom Nash, HIGHSNOBIETY</p> -->
        <p class='company'>Forbes</p>
    </div>
    <div>
        <p>“Urbanista’s London Wireless Earbuds are a pleasant surprise. They are comfortable to wear, sound great, and are loaded with advanced features.”</p>
        <!-- <p class='author'>Tom Nash, HIGHSNOBIETY</p> -->
        <p class='company'>iMore</p>
    </div>
    <div>
        <p>“Urbanista offers exceptional features and benefits, and provides high-quality sound reproduction and great clarity during phone calls at a great price.”</p>
        <!-- <p class='author'>Tom Nash, HIGHSNOBIETY</p> -->
        <p class='company'>Home Theater Review</p>
    </div>
</div>
`;

    document
        .querySelector('.properties')
        .insertAdjacentElement('afterend', review);

    // slick slider properties
    $('.single-item').slick({
        infinite: true,
        dots: true,
        arrows: true,
    });

    // add arrow to the slider
    document.querySelector('.slick-dots').insertAdjacentHTML(
        'afterBegin',
        `
  <img class='prev-arrow' src='https://conversionratestore.github.io/projects/urbanista/images/arrow-next.svg'/>
`,
    );
    document.querySelector('.slick-dots').insertAdjacentHTML(
        'beforeEnd',
        `
  <img class='next-arrow' src='https://conversionratestore.github.io/projects/urbanista/images/arrow-next.svg'/>
`,
    );

    document
        .querySelector('.prev-arrow')
        .addEventListener('click', () => {
            document.querySelector('.slick-prev.slick-arrow').click();
        });
    document
        .querySelector('.next-arrow')
        .addEventListener('click', () => {
            document.querySelector('.slick-next.slick-arrow').click();
        });

    // quote block
    if (currentPropList.review.length) {
        const quote = document.createElement('div');
        quote.classList.add('quote');
        quote.innerHTML = `
        <div class='quote__box'>
            <div class='quote__icon'><img src='https://conversionratestore.github.io/projects/urbanista/images/qoutes.svg'/></div>
            <p>${currentPropList.review[0]}</p>
            <span class='quote__box--author'>${currentPropList.review[1]}</span>
        </div>
        `;

        document
            .querySelector('.review')
            .insertAdjacentElement('afterend', quote);
    }

    if (product !== 'detroit') {
        document.querySelectorAll('.pd-row.row')[2].style.display =
            'none';
    }

    function drawTimeBat(time, text) {
        return `
        <div class='item item--battery-life'>
          <span>${textList[32]}</span>
          <p>${time} ${textList[0]}</p>
          <span>${text}</span>
        </div>
    `;
    }

    function drawTimeLis(time, text) {
        return `
        <div class='item item--listening-time'>
          <span>${textList[32]}</span>
          <p>${time} ${textList[0]}</p>
          <span>${text}</span>
        </div>
    `;
    }

    function drawpropBlockImg(img, head, text) {
        return `
        <div class='item'>
            <div>
              <img src='https://conversionratestore.github.io/projects/urbanista/images/${img}' alt='icon'/>
            </div>
            <p class='item__heading'>${head}</p>
            <p>${text}</p>
        </div>
    `;
    }

    function drawProdProp() {
        const properties = document.createElement('div');
        properties.classList.add('properties');

        let t = ``;
        if (currentPropList.bl) {
            t += drawTimeBat(
                currentPropList.bl[0],
                currentPropList.bl[1],
            );
        }

        if (currentPropList.lt) {
            t += drawTimeLis(
                currentPropList.lt[0],
                currentPropList.lt[1],
            );
        }
        currentPropList.prop.map((i) => {
            t += drawpropBlockImg(
                propList[i][0],
                propList[i][1],
                propList[i][2],
            );
        });

        if (specsBlock) {
            t += `<div class='view-block'><span>${textList[39]} ></span></div>`;
        }

        properties.innerHTML = t;
        document
            .querySelector('.product.media')
            .insertAdjacentElement('afterend', properties);
    }

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: 'event-to-ga',
        eventCategory: 'Exp — PDP Improvements with icons',
        eventAction: 'loaded',
    });

    (function (h, o, t, j, a, r) {
        h.hj =
            h.hj ||
            function () {
                (h.hj.q = h.hj.q || []).push(arguments);
            };
        h._hjSettings = { hjid: 2067583, hjsv: 6 };
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(
        window,
        document,
        'https://static.hotjar.com/c/hotjar-',
        '.js?sv=',
    );
    hj('trigger', 'pdp_quiz-experiment');
}, 700);
