setTimeout(function () {
    document.head.insertAdjacentHTML(
        'beforeend',
        `
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

        <style>           
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
            .review__images {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 35px 0;
            }
            .review__images {
                mix-blend-mode: darken;
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
                background: #FFFFFF;f
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
            .slider_block {
                position: relative;
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
            .next-arrow {
                position: absolute;
                right: 45px;
                bottom: -3px;
            }
            .prev-arrow {
                position: absolute;
                left: 45px;
                bottom: -3px;
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
        us: ['Urbanista has been praised by a long list of tech’s most respected publications'],
        eu: ['Urbanista has been praised by a long list of tech’s most respected publications'],
        se: ['Urbanista har hyllats av en rad av Techvärldens mest respekterade publicister'],
        de: ['Urbanista wurde von einer langen Liste renommiertester technischer Publikationen gelobt'],
    };

    let textList = languages[local];
    let product = window.location.pathname.split('/')[2];

    let propForProduct = {
        london: {
            review: [
                'The technology is seamless! The ambience feature is one of my favourite things about these headphone, especially when your trying to concentrate. They are easy to connect and are compatible with every device I have. The in-ear detection is honestly amazing, and the fact they start playing what ever was last on when you put them in again is awesome! If your gonna buy headphones, buy these!',
                'Maria',
            ],
            qoute: [
                'Swedish audio brand Urbanista has been taking the wireless earphone market by storm since it was founded in 2010.',
                'If you’re looking for high-quality earphones then Urbanista London is the choice for you.',
                'They sound better than the AirPods Pro, with clean, well-balanced sound.',
                'If you’re curious about active noise-cancelling earbuds, and want a more entry-level pair,     Urbanista’s Londons will impress you.',
                'Urbanista made a serious contender for the truly wireless ANC earbud crown.',
                'The Londons look good, and they feel good too. In fact, they’re some of the most comfortable in-ear buds I’ve ever worn.',
            ],
            publication: ['Highsnobiety', 'Rolling Stone', 'Wired', 'CNET', 'Laptop Mag', 'Digital Trends'],
        },
        'stockholm-plus': {
            review: [
                `This is the third pair of Stockholm plus I've bought as gifts for family. Great quality, sound and stylish. Very good value too.`,
                'Catherine B.',
            ],
            qoute: [
                'Swedish audio brand Urbanista has been taking the wireless earphone market by storm since it was founded in 2010.',
                'It can be difficult these days to find the perfect earbuds, but the Stockholm Plus true wireless earbuds come very close.',
                'I’ve already listened to a pair of Stockholm Plus and I think their sound is excellent.',
                'Their light, slim design and microphone quality checks off all the boxes you need in a standard and efficient pair of wireless earbuds.',
                'Urbanista’s budget-friendly Stockholm Plus is a great combination of features and aesthetics that doesn’t scrimp on sound quality.',
                'Fashion-conscious consumers don’t need to trade great sound for fashionable looks thanks to the Swedish lifestyle brand Urbanista',
            ],
            publication: ['Highsnobiety', 'Mac Sources', 'Forbes', 'Men’s Health', 'Home Theater Review', 'Forbes'],
        },
        paris: {
            review: [
                `I've been using the Urbanista Paris now for about two weeks and really like them! They feel good, they look nice and the sound quality is good as well. The passive noise cancellation works fine. They come with a nice charging case which lasted for about a week before I had to charge the case again. Absolut recommendation if you don't wan't to spend a fortune on headphones.`,
                '',
            ],
            qoute: [
                'The Swedish audio brand Urbanista has always been convincing with its stylish headphones and great value for money.',
                'These cute little true wireless earbuds sound heavenly and have a big presence with plenty of volume to spare.',
                'So if you’re looking for a budget pair of airpods that give you great features and a great sound its time you go to Paris with Urbanista.',
                'Fashion-conscious consumers don’t need to trade great sound for fashionable looks thanks to the Swedish lifestyle brand Urbanista',
                'Swedish audio brand Urbanista has been taking the wireless earphone market by storm since it was founded in 2010.',
                'A brand known for making affordable products with a bit of Scandinavian design flair.',
            ],
            publication: ['GQ', 'Forbes', 'What Mobile', 'Forbes', 'Highsnobiety', 'T3'],
        },
        miami: {
            review: [
                `There are so many great things to say about the Urbanista Miami Wireless Headphones that I don't even know where to start. They have a stylish and beautiful design and a wonderful soft-touch feel. The headband and ear-cups are nicely padded and totally comfortable. The sound quality is top-notch, including rich bass. The ambient feature works better than expected allowing you to hear everything around you as if your headphones weren't even on. The travel case is an added bonus, I wish more brands included this. Most brands just give you a pouch, not a nice hard case. If a friend or family member asked me to recommend a pair of headphones, I would happily recommend these.  
        `,
                'Andy R.',
            ],
            qoute: [
                'The Swedish audio brand Urbanista has always been convincing with its stylish headphones and great value for money.',
                'Fashion-conscious consumers don’t need to trade great sound for fashionable looks thanks to the Swedish lifestyle brand Urbanista',
                'Forget AirPods Max — these new headphones do noise cancelling for $400 less',
                'Everything admirable about Urbanista products, especially the price/specs ratio, is present in the Urbanista Miami noise-cancelling headphones.',
                'With noise cancelling and 40+ hours of battery life, the Miami make quite the statement in the budget headphones market.',
                'These Headphones Offer Solid Active Noise Cancellation for Those on a Budget',
            ],
            publication: ['GQ', 'Forbes', 'Tom’s Guide', 'T3', 'Trusted Reviews', 'Gizmodo'],
        },
        boston: {
            review: [
                'First set of earphones that give me a good ear fit while using. No slipping and great sound. Love my Boston earphones!',
                'Julie C.',
            ],
        },
        sydney: {
            review: [
                `This speaker is amazing, I purchased it because I wanted a small speaker for when we're out and about, on a picnic etc. It is the perfect size, could easily fit in a handbag, The sound quality is fantastic and the volume it can reach is perfect. I was really surprised at what a wonderful buy this was.`,
                'Rebecca G.',
            ],
        },
        brisbane: {
            review: [
                `Looks unreal, fits on my fireplace, bookshelf, coffee table and doesn’t look out of place, fits in the bag easily. Doesn’t look cheap or tacky like most of the competition. Sounds good, deep and can go loud!`,
                'David S.',
            ],
        },
        athens: {
            review: [
                `I purchased these late last year and have been using them for a while now. I have tried Beats and a few other brands but the charging case and size of the some of the competitors make them cumbersome to carry around. The Athens are the perfect size. Easily portable, fast charging and comfortable to wear while at work or out at play. The carrying case is small and fits comfortably in my pocket for quick and easy charging while on the go. The earbuds fit nice and snug in my ears and provide exceptional sound quality with good hi and low end audio sound. They are great for outdoors as well as the gym as i have never had one fall out of my ear during activity. Voice quality on phone calls is exceptional as well. I would definitely recommend these to anyone looking for great set of earbuds at an affordable price. 
        `,
                'Aaron D.',
            ],
            qoute: [
                'The Swedish audio brand Urbanista has always been convincing with its stylish headphones and great value for money.',
                'A pair of sporting true wireless earbuds that are waterproof and designed for serious athletes.',
                'Urbanista scores strong when it comes to delivering the low-end, decent battery life, and a sweat-resistant design.',
                "Urbanista's Athens True Wireless offers exceptional features and benefits for not a lot more money",
                'Fashion-conscious consumers don’t need to trade great sound for fashionable looks thanks to the Swedish lifestyle brand Urbanista',
                'Swedish audio brand Urbanista has been taking the wireless earphone market by storm since it was founded in 2010.',
            ],
            publication: ['GQ', 'Forbes', 'Pocket Lint', 'Home Theater Review', 'Forbes', 'Highsnobiety'],
        },
        'new-york': {
            review: [
                `With the medium prize range you get authentic sound and quality. Despite the genre of music these bad boys delivers the top notch sound. Im glad I bought these.
        `,
                'Miska',
            ],
        },
        'seattle-wireless': {
            review: [
                `Love my black seattle wireless headphones, feels really comfortable with clear sound, bluetooth is stable and easy to change tracks and volume, folding feature makes easy to carry. Great value for money.
        `,
                'Matt',
            ],
        },
        'san-francisco': {
            review: [
                `I really love that Urbanista provides plastic ended headphones. They're really the best fit for me and are sadly becoming less prevalent.`,
                'Sulaiman K.',
            ],
        },
        madrid: {
            review: [
                `These are awesome headphones. Easy to use. Easy to connect and easy to change. Perfect to walks or just relaxing.`,
                'Annmaree B.',
            ],
        },
        berlin: {
            review: [
                `Excellent purchase. Thoroughly pleased with them. Good sound quality. Easy to manage. Also great idea for a gift. Recommend them 100%.`,
                'Soraya P.',
            ],
        },
        lyon: {
            review: [
                `So easy to set up that I didn’t realise it was on. Charged my Paris very quickly, and also my iPhone. Yet another great product from Urbanista.
        `,
                'Stuart P.',
            ],
        },
        detroit: {
            review: [],
        },
        melbourne: {
            review: [
                `This was my first time buying anything from Urbanista. I purchased the Melbourne speaker in black and the Seattle wireless headphones in rose gold. Wasn't sure what to expect, but I love their website layout and the products appeared to be very nice online. When I received my order, my first thought was how beautiful, stylish, and modern the packaging is. Urbanista clearly put a lot of thought into this, because I will be keeping the Seattle box forever! Getting the products set up took only seconds. The quality of sound for both items is fantastic. While the speaker is small and could fit in your pocket, the sound travels extremely well. I have left the speaker in the kitchen while doing other chores in basement and attic, from a far distance, and you can still hear the speaker output very clearly. When you increase volume, the sound aesthetics isn't compromised, which is great! I love the product, packaging, and easy ordering experience.
        `,
                'Cristen B.',
            ],
        },
    };

    let currentPropList = propForProduct[product];

    let sliderItems;

    if (currentPropList.qoute) {
        for (let i = 0; i < currentPropList.qoute.length; i++) {
            sliderItems += `        
                <div>
                    <p>“${currentPropList.qoute[i]}”</p>
                    <p class='company'>${currentPropList.publication[i]}</p>
                </div>
        `;
        }
    } else {
        sliderItems = `    
        <div>
            <p>“Swedish audio brand Urbanista has been taking the wireless earphone market by storm since it was founded in 2010.”</p>
            <p class='company'>Highsnobiety</p>
        </div>
        <div>
            <p>“Urbanista made a serious contender for the truly wireless ANC earbud crown.”</p>
            <p class='company'>Laptop Mag</p>
        </div>
        <div>
            <p>“Urbanista’s striking Miami headphones hit the right notes with their focused ANC performance, feature set and good audio quality.”</p>
            <p class='company'>Trusted Reviews</p>
        </div>
        <div>
            <p>“Hardly a month goes by without yet another Swedish brand popping up with some stylish earbuds that usually manages to blend great performance with cool styling.”</p>
            <p class='company'>Forbes</p>
        </div>
        <div>
            <p>“Urbanista’s London Wireless Earbuds are a pleasant surprise. They are comfortable to wear, sound great, and are loaded with advanced features.”</p>
            <p class='company'>iMore</p>
        </div>
        <div>
            <p>“Urbanista offers exceptional features and benefits, and provides high-quality sound reproduction and great clarity during phone calls at a great price.”</p>
            <p class='company'>Home Theater Review</p>
        </div>
    `;
    }

    // slider review block
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
    <p>${textList[0]}</p>
    <div class="review__images">
        <div>
            <img src='https://conversionratestore.github.io/projects/urbanista/images/stuff.png'/>
        </div>
        <div>
            <img src='https://conversionratestore.github.io/projects/urbanista/images/wired.png'/>
        </div>
        <div>
            <img src='https://conversionratestore.github.io/projects/urbanista/images/trusted-reviews.png'/>
        </div>
    </div>
    <div class="slider_block">
        <div class='single-item'>
            ${sliderItems}    
        </div>
        <img class='prev-arrow' src='https://conversionratestore.github.io/projects/urbanista/images/arrow-next.svg'/>
        <img class='next-arrow' src='https://conversionratestore.github.io/projects/urbanista/images/arrow-next.svg'/>
    </div>
`;

    document.querySelector('.product-info-main-wrapper').insertAdjacentElement('afterend', review);

    // slick slider properties
    $('.single-item').slick({
        dots: true,
        arrows: true,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
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

        document.querySelector('.review').insertAdjacentElement('afterend', quote);
    }

    // document.querySelector('.product-info-main-wrapper').style.height =
    //     document.querySelector('.product-info-main-wrapper').offsetHeight - 190 + 'px';

    setTimeout(function () {
        document.querySelector('.single-item ').firstChild.remove();
    }, 500);

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        event: 'event-to-ga',
        eventCategory: 'Exp —  PDP add press blocks',
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
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    hj('trigger', 'add_press_blocks');
}, 800);
