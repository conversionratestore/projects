window.onload  = function () {
    document.body.insertAdjacentHTML('afterbegin', `
    <style>
    .popup .product-great{
        padding: 0;}
    .popup .product-great a {
        padding: 2.5px 8px;
        font-size: 12px;
        margin-bottom: 5px;
        margin-left: 5px;}
    .your-text {
        display: none;}
    .catalog-product-view .product-info-main .media {
        position: relative;}
    .product-great {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 3;
        padding: 0 15px 0 5px;}
    .product-great-item {
        background: #66CCCC;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 19px;
        padding: 7.5px 8px;
        margin-left: 10px;
        margin-bottom: 10px;
        letter-spacing: 0.15px;
        color: #232849;
        font-size: 14px;}
    .card {
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 16px 8px;
        line-height: 120%;
        max-width: 248px;
        margin: 0 auto;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        position: relative; }
    .card_bottom {
        padding: 0 8px;}
    .card img {
        margin: 0 auto 12px;
        width: 100%;
        height: 267px;
        object-fit: cover;}
    .card a {
        display: block;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.0018em;
        color: #141729;
        margin-bottom: 16px; }
    .card a.card-title span {
        display: block;
        min-height: 38.4px;
        padding: 0 8px;}
    .card-price {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.180451px;
        color: #66CCCC;
        margin-bottom: 21px;}
    a.btn-view {
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        display: block;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: #232847!important;
        border: 1px solid #141729;
        border-radius: 8px; }
    .btn-order {
        font-family: 'Barlow-medium', sans-serif;
        width: 100%;
        border-radius: 8px;
        background: #232849;
        font-weight: 600;
        font-size: 14px;
        line-height: 40px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 10px;}
    .popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        background: rgba(81, 81, 81, 0.73);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        padding: 14px;
        z-index: 999;}
    .popup.active {
        opacity: 1;
        pointer-events: auto; }
    .popup .tns-outer {
        margin: 0 auto;
        max-width: 536px; }
    .popup .card {
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);}
    .popup-container {
        position: relative;
        max-width: 801px;
        width: 100%;
        margin: auto;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 16px 24px 60px;}
    .popup .tns-controls {
        bottom: 44px; }
    .popup .tns-nav {
        bottom: 48px;}
    .btn-close {
        width: 13px;
        height: 13px;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/close.svg') no-repeat center / contain;
        display: block;
        margin: 0 -8px 12px auto; }
    .popup-title {
        text-align: center;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 30px;
        letter-spacing: 0.0015em;
        text-transform: uppercase;
        color: #232847; }
    .popup-title span {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        line-height: 22px;
        font-weight: normal;}
    .category {
        position: relative;
        display: none;
        padding: 40px 10px 0; }
    .category:nth-child(-n+3) {
        display: block;}
    .categories {
        order: 1;
        width: 100%;
        max-width: 1204px;
        margin: 30px auto 0;}
    .categories.show .category{
        display: block!important;}
    .category .tns-controls {
        top: 50px; }
    .tns-controls {
        position: absolute;
        right: 0;
        bottom: 10px;
        z-index: 1;
        padding: 0 32px;
        display: flex;}
    .product-specs--new .container {
        display: flex;
        flex-direction: column; }
    .category-title {
        padding: 0 22px;
        font-family: 'Barlow-medium', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 60px;
        color: #232849;}
    .view-more {
        font-family: 'Overpass', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.15px;
        text-decoration-line: underline;
        padding: 12px 28px 12px 16px;
        display: block;
        margin-right: 25px;
        margin-left: auto;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow.svg') no-repeat right 10px center / 8px;
        color: #232849;}
    .category-slider {
        padding: 32px 0 44px;
        position: relative;}
    .slider {
        padding: 20px 0}
    .slide {
        padding: 0 5px;}
    .card a.btn {
        border: 1px solid #141729;
        padding: 11px;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 14px;
        border-radius: 8px;
        line-height: 110.4%;
        background: transparent;
        box-shadow: none;
        width: 100%;
        min-width: auto;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        display: flex;}
    .card a.btn:hover {
        background: #141729;
        color: #fff;}
    .card .product-social-links i.mmb-icon.love {
        font-size: 1.3em !important; }
    .category .tns-controls [aria-controls], .tns-controls [data-action] {
        margin-left: 10px;
        width: 40px;
        height: 40px; }
    .tns-controls [aria-controls], .tns-controls [data-action] {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        user-select: none;
        color: transparent;
        transition: all 0.3s ease;
        background: #C4C4C4 url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow-right.svg') no-repeat center / 30%;}
    .tns-controls [aria-controls]:hover, .tns-controls [data-action]:hover {
        background-color: #AAAAAA;}
    .tns-controls [data-controls="prev"] {
        transform: scaleX(-1);}
    .tns-nav {
        position: absolute;
        left: 50%;
        z-index: 2;
        transform: translateX(-50%);
        bottom: 13px;}
    .tns-nav button {
        margin: 0 4px;
        background: #C4C4C4;
        width: 10px;
        height: 10px;
        border-radius: 50%; }
    .tns-nav button.tns-nav-active {
        background: #191919;}
    .your-box {
        display: none;}
        @media screen and (max-width: 768px) {
            .page-title-wrapper {
                display: none;}
            .product-details {
                padding-bottom: 40px;
                border-top: 1px solid #DEDEDE;}
            .popup-container {
                position: relative;
                max-width: 343px;}
            .popup .tns-outer {
                margin: 0 auto;
                max-width: 176px; }
            .product-mobile-title .wishlist-mobile-wrap {
                display: none; }
            .hp_strip__container {
                margin: 0 -16px;
                width: calc(100% + 32px);}
            .hp_strip__container ul i {
                display: block;}
            .your-text {
                display: block;
                font-family: 'Barlow', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 1;
                letter-spacing: 0.0015em;
                color: #232849;
                margin-right: 8px; }
            .main .price-container {
                font-family: 'Barlow-medium', sans-serif;
                margin-bottom: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;}
            .main .price-label {
                font-weight: 500;
                font-size: 26px;
                line-height: 31px;
                letter-spacing: 0.0015em;}
            .product-info-price {
                width: 100%;}
            .main .product-options-bottom .price-wrapper, .your-box .price-wrapper{
                font-style: normal;
                font-weight: 500;
                font-size: 49px;
                line-height: 59px;
                letter-spacing: -0.005em;
                padding-left: 10px;
                opacity: 1!important;
                color: #232849!important;}
            .main .product-options-bottom .price-wrapper span, .your-box .price-wrapper span{
                opacity: 1!important;
                color: #232849!important;}
            .catalog-product-view .product-details .bottom-actions .bottom-actions__row {
                display: flex;
                flex-wrap: wrap;
                width: 100%;}
            .box-tocart {
                width: 100%; }
            .catalog-product-view .product-details .bottom-actions .bottom-actions__row .btn, .your-box .btn {
                width: 100%;
                letter-spacing: 0.180451px;
                margin: 0;
                wodth: 100%;
                font-family: "Barlow-medium", sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                padding: 12px;
                margin: 0 0 15px 0!important;}
            .bottom-actions__row {
                display: block; }
            .catalog-product-view .product-details .bottom-actions .bottom-actions__row .product-social-links, .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
                width: 100%;}
            .bottom-actions__row .product-social-links {
                order: 2;}
            .category-slider {
                padding-top: 29px;}
            .category-title {
                padding: 0;
                font-size: 32px;
                line-height: 120%;
                text-align: center;}
            .card img {
                height: 183px;}
            .popup .tns-controls {
                padding: 0 24px; }
            .category .tns-controls{
                top: auto;}
            .tns-controls {
                padding: 0;
                width: 100%;
                justify-content: space-between; }
            .category .tns-controls [aria-controls], .tns-controls [data-action] {
                margin: 0;
                width: 24px;
                height: 24px;}
            .tns-controls [aria-controls]:hover, .tns-controls [data-action]:hover {
                background-color: #141729;  }
            .categories {
                margin: 0 auto 20px;
                order: inherit;}
            .product-specs--new {
                padding-top: 0; }
            .category {
                padding: 40px 0 0; }
            .view-more{
                margin-right: 0;}
            .scaled-custom-field {
                width: calc(50% - 18px);}
            .product-addto-links a:last-child  {
                display: none;}
            .your-box {
                display: block;
                padding: 10px 16px; }
            .your-box .price-container {
                justify-content: flex-start; }
            .your-box .price-label {
                font-size: 16px; }
            .free-priority {
                margin: 10px 0; }
            .product-delivery-date {
                display: flex;
                font-family: 'Overpass',Arial,Helvetica,sans-serif;
                margin-top: 17px; 
                margin-bottom: 10px; }
            .product-delivery-date__fast-track {
                flex: 1;
                background-color: #6cc;
                border-radius: 4px;
                padding: 10px 18px;
                color: #fff;
                text-align: center;
                display: flex;
                align-items: center;
                min-height: 51px; }
            .product-delivery-date p {
                font-weight: 300;
                font-size: 13px;
                line-height: 19px; }
        }
        @media screen and (max-width: 360px) {
            .catalog-product-view #product-options-wrapper .scaled-custom-field label span i {
                font-size: 17px;}
            .catalog-product-view #product-options-wrapper .fieldset .scaled-custom-field {
                margin-right: 12px;}
        }
            
</style>`);
    document.querySelectorAll('.box-tocart')[1].hidden = true;

    document.querySelector('.product-info-main').insertAdjacentHTML('afterend', `
    <div class="your-box">
        ${document.querySelector('.price-box').innerHTML}
        <button type="button" class="btn">Add to basket</button>
        <div class="product-social-links">${document.querySelector('.product-social-links').innerHTML}</div>
    </div>`);
    if (document.querySelector('.product-delivery-date')) {
        document.querySelector('.your-box .product-social-links').after(document.querySelector('.product-delivery-date'));
    }
    if (document.querySelector('.free-priority')) {
        document.querySelector('.your-box .product-social-links').after(document.querySelector('.free-priority'));
    }

    document.querySelector('.product.media').insertAdjacentHTML('afterbegin', `<div class="product-great"></div>`);
    document.querySelector('.bottom-actions__row .price-label').innerHTML = 'Your price';
    let linkCustom = document.createElement('link');
    linkCustom.href =
        'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
    linkCustom.rel = 'stylesheet';
    document.head.appendChild(linkCustom);

    let scriptCustom = document.createElement('script');
    scriptCustom.src =
        'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    function tnsInitialization(item,amountMob,amountTablet,amountDesk) {
        document.querySelectorAll(`.${item}`).forEach(slider => {
            if (slider.innerHTML === '') {
                slider.closest('.category').remove();
            }
            tns({
                container: slider,
                items: amountMob,
                autoplay: false,
                controls: true,
                loop: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                mouseDrag: true,
                preventScrollOnTouch: 'auto',
                swipeAngle: false,
                responsive: {
                    769: {
                        items: amountTablet,
                        nav: true,
                    },
                    1024: {
                        items: amountDesk,
                        nav: false,
                    }
                }
            });
        });
    }
    function card(index,img,name,price,link) {
        let card = `
        <div class="slide">
             <div class="card">
                <a href="${link}.html" class="card-title">
                    <img src="https://www.makemyblinds.co.uk/media/catalog/product${img}" alt="${name}">
                    <span>${name}</span>
                </a>
                <div class="card_bottom">
                    <div class="card-price">£${price}</div>
                    <a href="${link}.html" class="btn">VIEW PRODUCT</a>
                </div>
            </div>
        </div>`;
        if (index != 'popup') {
            document.querySelectorAll('.category-slider')[index].insertAdjacentHTML('afterbegin', card);
        } else {
            document.querySelector('.popup .slider').insertAdjacentHTML('beforeend', card);
        }

        document.querySelectorAll('.category .card-price').forEach((el) => {
            if(el.innerHTML === '£0') {
                el.closest('.slide').remove();
            }
        })
    }
    function eventsCategories(elem,eventAction) {
        document.querySelectorAll(elem).forEach((el) => {
            el.addEventListener('click', () => {
                if (window.matchMedia(`(max-width: 768px)`).matches) {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP improvement exit intent mobile',
                        'eventAction': eventAction,
                        'eventLabel': `Section ${el.closest('.category').querySelector('.category-title').innerHTML}`
                    });
                } else {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP improvement exit intent desktop',
                        'eventAction': eventAction,
                        'eventLabel': `Section ${el.closest('.category').querySelector('.category-title').innerHTML}`
                    });
                }
            });
        })
    }
    function eventsPopup(elem,eventAction) {
        document.querySelectorAll(elem).forEach((el) => {
            el.addEventListener('click', () => {
                if (window.matchMedia(`(max-width: 768px)`).matches) {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP improvement exit intent mobile',
                        'eventAction': eventAction,
                        'eventLabel': `Exit intent popup`
                    });
                } else {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP improvement exit intent desktop',
                        'eventAction': eventAction,
                        'eventLabel': `Exit intent popup`
                    });
                }
            });
        })
    }

    let greatForId = [
        {
            name: 'Bathroom',
            value: '6'
        },
        {
            name: 'Living Room',
            value: '7'
        },
        {
            name: 'Kitchen',
            value: '8'
        },
        {
            name: 'Bedroom',
            value: '9'
        },
        {
            name: 'BiFold Doors',
            value: '67'
        },
        {
            name: 'Conservatories',
            value: '68'
        },
        {
            name: 'French Doors',
            value: '69'
        },
        {
            name: 'Patio',
            value: '70'
        },
        {
            name: 'Attic/Loft',
            value: '71'
        },
        {
            name: 'Children',
            value: '223'
        },
        {
            name: 'Dining Room',
            value: '224'
        },
        {
            name: 'Nursery',
            value: '225'
        },
        {
            name: 'Office',
            value: '226'
        }
    ]

    document.querySelectorAll('.spec-table__inner__table tr').forEach((el, index) => {
        if(el.querySelector('th').innerHTML === 'Great For:') {
            let tdSplit = el.querySelector('td').innerHTML.split(', ');
            for (let i = 0; i < tdSplit.length; i++) {
                for (let key in greatForId) {
                    if (greatForId[key]["name"] == tdSplit[i] && i < 3) {
                        console.log(tdSplit[i] + '==' + greatForId[key]["name"])
                        document.querySelector('.product .product-great').insertAdjacentHTML('afterbegin', `<a href="https://www.makemyblinds.co.uk/blinds/${tdSplit[i]}" class="product-great-item" data-id="${greatForId[key]['value']}" data-name="${greatForId[key]['name']}">${tdSplit[i]}</a>`);
                    }
                }
            }
        }
    });
    if (document.querySelector('.badge-fast-track')) {
        document.querySelector('.product .product-great').style.padding = `0 60px 0 5px`;
    }

    function myScrollSpeedFunction(){
        if(document.body.classList.contains('mobile')) {
            if (!document.querySelector(".popup").classList.contains('was') && document.querySelector('.popup .slider').innerHTML != '') {
                if(my_scroll() < -200){
                    document.querySelector(".popup").classList.add('active');
                    document.querySelector(".popup").classList.add('was');
                }
            }
        }
    }

    var my_scroll = (function() {
        var last_position, new_position, timer, delta, delay = 50;

        function clear() {
            last_position = null;
            delta = 0;
        }

        clear();

        return function(){
            new_position = window.scrollY;
            if (last_position != null){
                delta = new_position -  last_position;
            }
            last_position = new_position;
            clearTimeout(timer);
            timer = setTimeout(clear, delay);
            return delta;
        };
    })();

    document.querySelector('.product-specs--new .container').insertAdjacentHTML('afterbegin', `<div class="categories"></div>`);

    document.body.insertAdjacentHTML('beforeend', `
    <div class="popup">
        <div class="popup-container">
        <button class="btn-close" type="button"></button>
            <h2 class="popup-title">Don’t leave!<span>We have a lot more to offer</span></h2>
            <div class="slider"></div>
        </div>
    </div>`);

    let token = [];

    let thermalItems = [],
        privacyItems = [],
        cordlessItems = [],
        noDrillItems = [],
        betterSleepItems = [],
        fireRetardantItems = [],
        randomItems = [],
        perfectFit = [
            {
                link: 'https://www.makemyblinds.co.uk/simply-brilliant-white-with-jasmine-white-tape',
                img: '/s/h/shot_1_57.jpg',
                title: 'Simply Brilliant White with Jasmine White Tape',
                price: '9.99',
                greatFor: 'Bathroom',
                idGreatFor: '6',
            },
            {
                link: 'https://www.makemyblinds.co.uk/editions-brilliant-white-with-lilly-tapes',
                img: '/9/_/9_bathroom_scene_detail03_serene_cotton_tape_08202019.jpg',
                title: 'Editions Brilliant White with Lilly Tapes',
                price: '11.99',
                greatFor: 'Bedroom',
                idGreatFor: '9',
            },
            {
                link: 'https://www.makemyblinds.co.uk/matt-soft-white-perfect-fit',
                img: '/i/s/iso_full.jpg',
                title: 'Matt Soft White Perfect Fit',
                price: '19.99',
                greatFor: 'Conservatories',
                idGreatFor: '68',
            },
            {
                link: 'https://www.makemyblinds.co.uk/bifold-stormy-grey-satin-perfect-fit',
                img: '/7/_/7_cam_kitchen_mid_angle_door_tr1679_11092019_1.jpg',
                title: 'Anthracite Grey Perfect Fit',
                price: '29.99',
                greatFor: 'Conservatories',
                idGreatFor: '68',
            },
            {
                link: 'https://www.makemyblinds.co.uk/gloss-pure-white-perfect-fit',
                img: '/a/n/angl_dsfdfsded_d_sdsdsdoor.jpg',
                title: 'Gloss Pure White Perfect Fit',
                price: '19.99',
                greatFor: 'Conservatories',
                idGreatFor: '68',
            },
            {
                link: 'https://www.makemyblinds.co.uk/real-wood-bliss-white-with-charcoal-tape',
                img: '/9/_/9_bathroom_scene_detail03_glacier_shadow_tape_08202019.jpg',
                title: 'Real Wood Bliss White with Charcoal Tape',
                price: '12.99',
                greatFor: 'Bedroom',
                idGreatFor: '9',
            },
            {
                link: 'https://www.makemyblinds.co.uk/amor-shark-grey-roller-blind',
                img: '/a/m/amor_shark_grey_fixed.jpg',
                title: 'Amor Shark Grey Roller Blind',
                price: '9.95',
                greatFor: 'Bathroom',
                idGreatFor: '6',
            },
            {
                link: 'https://www.makemyblinds.co.uk/amor-white-lotus-roller-blind',
                img: '/a/m/amor_white_lotus_fixed.jpg',
                title: 'Amor White Lotus Roller Blind',
                price: '9.99',
                greatFor: 'Kitchen',
                idGreatFor: '8',
            }
        ];
    for (let i = 0; i < 8; i++) {
        card('popup',perfectFit[i].img,perfectFit[i].title,perfectFit[i].price,perfectFit[i].link,perfectFit[i].status);
        document.querySelectorAll('.popup .card')[i].insertAdjacentHTML('afterbegin',` <div class="product-great"><a href="https://www.makemyblinds.co.uk/blinds/${perfectFit[i].greatFor}" class="product-great-item" data-id="${perfectFit[i].idGreatFor}" data-name="${perfectFit[i].greatFor}">${perfectFit[i].greatFor}</a></div>`);
    }

    fetch('https://www.makemyblinds.co.uk/rest/V1/integration/admin/token', {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify( {
            "username": "conversionrate",
            "password": "gasmaj-mornut-sowZy9"
        })

    }).then(res => res.json()).then(datatoken => {
        token.push(datatoken);
        console.log('token: ', datatoken);

        let request1 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=176&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('Thermal', data);
            thermalItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });

        let request2 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=232&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('Privacy', data);
            privacyItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });

        let request3 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=229&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('Cordless', data);
            cordlessItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });
        let request4 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_opacity&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=241&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('Better sleep', data);
            betterSleepItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });

        let request5 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=231&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('No Drill', data);
            noDrillItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });

        let request6 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=183&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('Fire Retardant', data);
            fireRetardantItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });
        let request7 = fetch(`https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=great_for&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=${document.querySelectorAll('.product-great-item')[0].dataset.id}&searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${datatoken}`
            }
        }).then(res => res.json()).then(data => {
            console.log('randomItems', data);
            randomItems.push(data);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });

        Promise.all([request1,request2,request3,request4,request5,request6,request7]).then(res => {
            let items = [...thermalItems,...privacyItems,...cordlessItems,...noDrillItems,...betterSleepItems,...fireRetardantItems];
            localStorage.setItem('randomItems', JSON.stringify(items));
            let titleArr = ['Privacy Blinds','Cordless Blinds','No Drill Blinds','Fire Retardant Blinds','Thermal Blinds','Blinds for Better Sleep', `Blinds for ${document.querySelectorAll('.product-great-item')[0].dataset.name}`];
            for (let i = 0; i < titleArr.length; i++) {
                document.querySelector('.categories').insertAdjacentHTML('afterbegin', `
                <div class="category">
                    <h3 class="category-title">${titleArr[i]}</h3>
                    <div class="category-slider"></div>
                </div>`);
            }

            for (let i = 0; i < 12; i++) {
                if (randomItems[0]["items"] != null) {
                    card(0, randomItems[0]["items"][i]["media_gallery_entries"][0]["file"], randomItems[0]["items"][i]["name"],randomItems[0]["items"][i]["price"],randomItems[0]["items"][i]["custom_attributes"][3]["value"], randomItems[0]["items"][i]["status"]);
                }
                if (betterSleepItems[0]["items"] != null) {
                    card(1, betterSleepItems[0]["items"][i]["media_gallery_entries"][0]["file"], betterSleepItems[0]["items"][i]["name"],betterSleepItems[0]["items"][i]["price"],betterSleepItems[0]["items"][i]["custom_attributes"][3]["value"], betterSleepItems[0]["items"][i]["status"]);
                }
                if (thermalItems[0]["items"] != null) {
                    card(2, thermalItems[0]["items"][i]["media_gallery_entries"][0]["file"], thermalItems[0]["items"][i]["name"],thermalItems[0]["items"][i]["price"],thermalItems[0]["items"][i]["custom_attributes"][3]["value"],thermalItems[0]["items"][i]["status"]);
                }
                if (fireRetardantItems[0]["items"] != null) {
                    card(3, fireRetardantItems[0]["items"][i]["media_gallery_entries"][0]["file"], fireRetardantItems[0]["items"][i]["name"],fireRetardantItems[0]["items"][i]["price"],fireRetardantItems[0]["items"][i]["custom_attributes"][3]["value"],fireRetardantItems[0]["items"][i]["status"]);
                }
                if (noDrillItems[0]["items"] != null) {
                    card(4, noDrillItems[0]["items"][i]["media_gallery_entries"][0]["file"], noDrillItems[0]["items"][i]["name"],noDrillItems[0]["items"][i]["price"],noDrillItems[0]["items"][i]["custom_attributes"][3]["value"],noDrillItems[0]["items"][i]["status"]);
                }
                if (cordlessItems[0]["items"] != null) {
                    card(5, cordlessItems[0]["items"][i]["media_gallery_entries"][0]["file"], cordlessItems[0]["items"][i]["name"],cordlessItems[0]["items"][i]["price"],cordlessItems[0]["items"][i]["custom_attributes"][3]["value"],cordlessItems[0]["items"][i]["status"]);
                }
                if (privacyItems[0]["items"] != null) {
                    card(6, privacyItems[0]["items"][i]["media_gallery_entries"][0]["file"], privacyItems[0]["items"][i]["name"], privacyItems[0]["items"][i]["price"],privacyItems[0]["items"][i]["custom_attributes"][3]["value"],privacyItems[0]["items"][i]["status"]);
                }
            }

            tnsInitialization('category-slider',2,3,4);
            tnsInitialization('slider',1,2,2);

            window.addEventListener('scroll', myScrollSpeedFunction);
            document.querySelector('.categories').insertAdjacentHTML('beforeend',`<button type="button" class="view-more">View more</button>`)
            document.querySelectorAll('.category-slider').forEach((el) => {
                if(el.querySelectorAll('.slide').length == 0) {
                    el.closest('.category').remove();
                }
            });
            document.querySelector('.view-more').addEventListener('click', (e) => {
                e.target.hidden = true;
                document.querySelector('.categories').classList.add('show');
                if (window.matchMedia("(max-width: 768px)").matches) {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP improvement exit intent mobile',
                        'eventAction': 'Click on View more button',
                    });
                } else {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — PDP improvement exit intent desktop',
                        'eventAction': 'Click on View more button',
                    });
                }
            });

            eventsCategories('.category .card-title','Click on product from listing');
            eventsCategories('.tns-controls button','Click on arrows button listing');
            eventsCategories('.tns-nav button','Click on dots button listing');
            eventsCategories('.category .card .btn','Click on View Product button listing');
            eventsPopup('.popup .card-title','Click on product from');
            eventsPopup('.popup .btn','Click on View product white button');
            eventsPopup('.popup .tns-controls button','Click on arrows button');
            // sessionStorage.setItem('modal','true');
            // window.addeventlistener('mouseout', (evt) => {
            //     if (evt.toElement == null && evt.relatedTarget == null) {
            //         if (localStorage.getItem('modal') !== 'false') {
            //             document(".popup").classList.add('active');
            //             sessionStorage.setItem('modal', 'false');
            //         }
            //     }
            // });
        });
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    document.querySelector(".btn-close").addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        document.querySelector('.popup').classList.remove('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvement exit intent mobile',
                'eventAction': 'Click on exit cross button',
            });
        } else {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvement exit intent desktop',
                'eventAction': 'Click on exit cross button',
            });
        }
    });
    document.querySelector(".popup-container").addEventListener('click', (e) => {
        e.stopPropagation();
    });
    document.querySelector('.your-box .btn').addEventListener('click', () => {
        const scrollTarget = document.querySelector('.product-details');
        const topOffset = document.querySelector('.page-header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
    document.querySelector('.product-details').addEventListener('change', () => {
        console.log(document.querySelector('.product-info-price .price').innerHTML);
        document.querySelector('.your-box .price').innerHTML = document.querySelector('.product-info-price .price').innerHTML;
    })
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector('.product-specs--new .tabs').before(document.querySelector('.product-details'));
    }
};

if (window.matchMedia("(max-width: 768px)").matches) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP improvement exit intent mobile',
        'eventAction': 'loaded'
    });
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1709958,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_exit_intent_mobile');
} else {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP improvement exit intent desktop',
        'eventAction': 'loaded'
    });
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1709958,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_exit_intent_desktop');
}
