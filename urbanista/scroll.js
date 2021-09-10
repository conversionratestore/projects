setTimeout(() => {
    let styleCSS = `
    <style>
        .product-features {
            display: none;
        }
        .swatch-opt:not(.sticky-pdp-cta .swatch-opt) {
            padding: 15px 3px 10px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            text-align: left;
        }
        .page-title-wrapper.product{
            display: flex;
            width: 100%;
            justify-content: space-between;
        }
        .product-info-main .price {
            font-size: 24px;
        }
        .feature-item {
            width: 100%;
            padding: 0 30px;
        }
        .feature-item p > div {
            display: inline;
        }
        .product-view-cms:after {
            display: none;
        }
        .money-banner {
            margin: 0 12px;
        }
        .money-banner h4 {
            font-weight: 700 !important;
            font-size: 24px !important;
        }
        .money-banner li{
            font-size: 12px !important;
        }
        .product-info-main .product-additional-info {
            display: none;
        }
        .custom-link-section {
            display: flex;
            flex-direction: column;
            margin: 20px 0;
        }
        .custom-link-section p {
            position: relative;
            margin: 0;
            font-weight: normal;
            font-size: 14px;
            text-transform: capitalize;
            color: #000000;
        }
        .custom-link-section p::after {
            content: url('https://conversionratestore.github.io/projects/urbanista/images/arrow-down.svg');
            display: block;            
            position: absolute;
            top: 0;
            right: 10px;
        } 
        .custom-link-section hr{
            height: 1px;
            width: 100%;
            margin: 15px 0;
            background-color: #000;
            border: none;
        }
        .sticky-pdp-cta .custom-link-section {
            display: none;
        }
        p.title_custom {
            font-weight: 700;
            font-size: 28px !important;
            text-transform: uppercase;
            color: #333;
            margin-bottom: 30px;
        }
        .specs_custom {
            margin: 12px;
            padding: 25px 15px;
        }
        .specs_custom p {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .specs_custom p span{
            font-size: 12px;
            color: #000000;          
            text-align: right;
        }
        .specs_custom p span:first-child{
            font-weight: 700;     
            text-align: left;
        }
        .specs_custom hr{
            height: 1px;
            width: 100%;
            margin: 15px 0;
            background-color: #000;
            border: none;
            opacity: 0.2;
        }
        .specs_custom hr:last-child {
            display: none;
        }
        .swipe-arrow {
            position: relative;            
            margin: 30px auto;
            text-align: center;
            text-transform: uppercase;
            font-size: 14px;
            color: #B2B2B2;
        }
        .swipe-arrow::after {
            content: url('https://conversionratestore.github.io/projects/urbanista/images/swipe-down-arrow.svg');
            display: block;            
            position: absolute;
            top: 20px;
            left: 49%;
        }
        .slider_custom {
            display: flex;
        }
        .slider_custom__item {
            display: flex;
            flex-direction: column;
            margin: 0 5px;
        }
        .tns-controls {
            display: none;
        }
        .tns-nav {
            display: flex;
        }
        .tns-nav button {
            width: 100%;
            border: 1px solid transparent;
            padding: 0;
            height: 3px;
            background: #EBEBEB;
        }
        .tns-nav button.tns-nav-active {
            background: #454545;
        }
        .tns-ovh {
            margin-bottom: 15px;
        }
        .slider_custom {
            padding: 0 3px;
        }
        .slider_custom__item {
            padding: 3px;
            background-color: #FFF;
            border: 1px solid #E8E8E8;
        }
        .slider_custom__text {
            height: 100%;
            margin-top: 10px;
            padding: 10px 13px 13px;
            font-size: 9px;
            line-height: 10px;
        }
        .slider__title {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;            
        }
        
        .sticky-pdp-cta .swatch-attribute.color {
            position: absolute;
            display: flex;
            opacity: 0;
            left: 0;
            width: 35%;
            flex-direction: column;
            bottom: 45px;
            background-color: #fff;
            border: 1px solid #E9E9E9;
            padding: 10px 0;
            transition: all .3s ease;
            pointer-events: none;
        }
        .sticky-pdp-cta .swatch-attribute.color.swatch-attribute_visible {
            opacity: 1;
            pointer-events: auto;
        }
        .sticky-pdp-cta .swatch-attribute .swatch-title {
            display: none !important;
        }
        .sticky-pdp-cta .swatch-option {
            margin: 10px 40% !important;
            width: 25px !important;
            height: 25px !important;                    
        }
        .sticky-pdp-cta .swatch-option:after {
            width: 31px !important;
            height: 31px !important;
        }
        .sticky-pdp-cta .product-add-form {
            width: 65%;
        }
        .sticky-pdp-cta .product-options-bottom,
        .sticky-pdp-cta .action.primary.tocart {
             width: 100% !important;
        }
        .sticky-pdp-cta .product-info-main {
            justify-content: flex-end;
            padding: 0;
        }
        .select-color {
            display: none;
        }
        .sticky-pdp-cta .select-color {
            display: flex;
            width: 35%;   
            height: 45px;
            justify-content: space-around;
            align-items: center;
        }
        .select-color  .swatch-option {
            margin: 0 !important;
        }
        .select-color p {
            margin: 0;
            font-size: 12px;
            letter-spacing: 0.4px;
            text-transform: uppercase;
        }
        .select-color .swatch-option {
            width: 20px !important;
            height: 20px !important;
            pointer-events: none;
        }
        .select-color .swatch-option:after {
            width: 26px !important;
            height: 26px !important;
        }
        .sticky-pdp-cta .product-info-main {
            background-color: #fff !important;
        }            
        .swatch-option.selected:not(.sticky-pdp-cta .swatch-option.selected) {
            pointer-events: none;
        }    
        @media screen and (max-width: 900px) {
            .catalog-product-view .money-banner {
                display: block !important
            }
          }
    </style>
`;
        /*
            add tiny slider cdn links
        */
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

        /*
         url splitted variables
        */
        const pathname = window.location.pathname.split('/')[2];
        const pathLocal = window.location.pathname.split('/')[1];

        let localisation = {
            'eu': {
                'color': 'color',
                'features': 'Key features',
                'specifications': 'Specifications',
            },
            'de': {
                'color': 'Farbe',
                'features': 'Features',
                'specifications': 'Specifications',
            },
            'se': {
                'color': 'Färg',
                'features': 'Nyckelfunktioner',
                'specifications': 'teknik',
            },
        }

        document.head.insertAdjacentHTML(`beforeend`, styleCSS);


        document.querySelector('.page-title').insertAdjacentElement('afterend', document.querySelector('.product-info-price'));

        /*
         remove bootstrap classes
        */
        function removeBootClass(colXs, colMd) {
            document.querySelectorAll(`.product-view-cms .pd-col.${colXs}.${colMd}`).forEach(item => {
                item.classList.remove('pd-col', colXs, colMd);
                item.classList.add('feature-item');
                item.querySelectorAll('p').forEach(p => {
                    p.removeAttribute('style');
                });
                item.querySelectorAll('div').forEach(p => {
                    p.removeAttribute('style');
                });
            });
        }

        removeBootClass('col-xs-6', 'col-md-2');
        removeBootClass('col-xs-12', 'col-md-2');
        removeBootClass('col-xs-6', 'col-md-3');
        removeBootClass('col-xs-12', 'col-md-3');

        /*
            change specs position
        */

        document.querySelectorAll('.TextWidget').forEach(block => {
            if (block.querySelector('h1').innerText === 'SPECIFICATIONS' || block.querySelector('h1').innerText === 'TECHNICAL') {
                // remove specs block
                let arr = [];

                block.querySelectorAll('p').forEach(p => {
                    if (p.innerText.length > 2) {
                        console.log(p.innerText);
                        arr = p.innerText.replace(/(earbud.\n|28mA±-\n)/g, '<br>').split(/\n/g,);
                    }
                });

                let pList = '';

                arr.forEach(p => {
                    let indx = p.indexOf(': ', 0) + 1;
                    pList += `<p><span>${p.substr(0, indx)}</span><span>${p.substr(indx)}</span></p><hr>`;
                });

                let specsCustomBlock = `
            <div class="specs_custom">
                <p class="title_custom">Specifications</p>
                ${pList}
            </div>
        `;

                // hide existing specs block
                block.parentElement.style.display = 'none';

                if (document.querySelector('.feature-item')) {
                    let features = document.querySelector('.feature-item').parentElement;
                    features.insertAdjacentHTML('afterbegin', `<p class="title_custom" style="margin-left: 27px;">${localisation[pathLocal].features ? localisation[pathLocal].features : localisation['eu'].features}</p>`);

                    features.parentElement.insertAdjacentHTML('beforebegin', `<p class="swipe-arrow">${localisation[pathLocal].features ? localisation[pathLocal].features : localisation['eu'].features}</p>`);

                    features.insertAdjacentHTML('afterend', specsCustomBlock);
                }
            }
        });

// delete header

        let checkTextWInterval = setInterval(() => {
            if (document.querySelector('.TextWidget2__container h1')) {
                clearInterval(checkTextWInterval);
                document.querySelectorAll('.TextWidget2__container h1').forEach(h1 => {
                    if (h1.innerText === 'REVIEWS') {
                        h1.remove();
                    }
                });
            }

        }, 200);

        setTimeout(() => {
            clearInterval(checkTextWInterval);
        }, 5000);

        document.querySelector('.specs_custom')?.insertAdjacentHTML('beforebegin', `<p class="swipe-arrow" style="margin-top: 10px;">Specifications</p>`);

// change features style
        document.querySelectorAll('.feature-item p picture').forEach(item => {
            item.closest('p').style.cssText = `float: left; margin-right: 15px; height: 100%;`;
        });

        /* change 90 days position */
        if (document.querySelector('.specs_custom') || document.querySelector('.feature-item')?.parentElement) {
            let beforeBannerDiv = document.querySelector('.specs_custom') || document.querySelector('.feature-item')?.parentElement;
            beforeBannerDiv?.after(document.querySelector('.money-banner'));
        } else {
            console.log('here');
            document.querySelector('.yotpo.yotpo-main-widget')?.before(document.querySelector('.money-banner'));
        }


        document.querySelector('.money-banner').insertAdjacentHTML('beforebegin', `<p class="swipe-arrow">90 DAY RISK-FREE TRIAL</p>`);

        const reviewsBlock = document.querySelector('.yotpo.yotpo-main-widget');

        if(reviewsBlock) {
            document.querySelector('.money-banner').after(reviewsBlock);
            reviewsBlock?.insertAdjacentHTML('beforebegin', `<p class="swipe-arrow" style="margin-bottom: 50px;">Reviews</p>`);
        }

        


        /* change reviews position */
        document.querySelector('.main-widget')?.insertAdjacentHTML('beforebegin', `<p class="title_custom" style="margin:0 0 10px 27px;">Reviews</p>`);


        /* remove old review title */
        document.querySelectorAll('.pd-row h6 span').forEach(span => {
            if (span.innerText.toLowerCase() === 'reviews') {
                span.style.display = 'none';
            }
        });

        let sliderItems = '';

        const descriptionText = {
            'eu': {
                'stockholm-plus': 'Go beyond the sound with the new, second-generation STOCKHOLM.',
                'london': 'Silence the outside world or let the sound in – London is by far the most advanced earphones we’ve ever made.',
                'paris': 'Urbanista Paris gives you superior sound quality, boosted with a passive noise cancellation to improve your sound experience even more.',
            },
            'de': {
                'stockholm-plus': 'Mit den neuen STOCKHOLM der zweiten Generation bekommst du noch mehr als Sound.',
                'london': 'Die Außenwelt ausschalten – oder ansprechbar bleiben. London sind innovativsten Kopfhörer, die wir je entwickelt haben.',
                'paris': 'Urbanista Paris bietet dir überragende Klangqualität und Antischall, um dein Klangerlebnis noch mehr zu optimieren.',
            },
            'se': {
                'stockholm-plus': 'Ta ljudet till nästa nivå med en ny, andra generation av STOCKHOLM.',
                'london': 'Urbanista London är överlägset de mest avancerade hörlurarna vi någonsin har gjort.',
                'paris': 'Urbanista Paris ger dig ljudkvalitet utöver det vanliga.',
            },
        };


        function drawSliderItems(firstProduct, firstProductImg, secondProduct, secondProductImg) {
            let imagesFirstProduct = '';
            let imagesSecondProduct = '';


            if (firstProduct === 'london') {
                for (i = 1; i <= 4; i++) {
                    imagesFirstProduct += `<img onclick="location.href='https://www.urbanista.com/${pathLocal}/${firstProduct}';" src="https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/${firstProductImg}_${i}_1.webp" alt="pdp image">`;
                }
            } else {
                for (i = 1; i <= 4; i++) {
                    imagesFirstProduct += `<img onclick="location.href='https://www.urbanista.com/${pathLocal}/${firstProduct}';" src="https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/${firstProductImg}_${i}.webp" alt="pdp image">`;
                }
            }

            if (secondProduct === 'london') {
                for (i = 1; i <= 4; i++) {
                    imagesSecondProduct += `<img onclick="location.href='https://www.urbanista.com/${pathLocal}/${secondProduct}';" src="https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/${secondProductImg}_${i}_1.webp" alt="pdp image">`;
                }
            } else {
                for (i = 1; i <= 4; i++) {
                    imagesSecondProduct += `<img onclick="location.href='https://www.urbanista.com/${pathLocal}/${secondProduct}';" src="https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/${secondProductImg}_${i}.webp" alt="pdp image">`;
                }
            }

            return sliderItems = `
        <p class="swipe-arrow" style="margin: 35px 0;">Other products</p>
        <div class="slider_custom">
            <div class="slider_custom__item">                    
                <div class="slider_custom__slider">
                    ${imagesFirstProduct}
                </div>         
                <div class="slider_custom__text">
                    <p onclick="location.href='https://www.urbanista.com/${pathLocal}/${firstProduct}';" class="slider__title">${firstProduct.replace(/-/g, ' ')}</p>
                    <p onclick="location.href='https://www.urbanista.com/${pathLocal}/${firstProduct}';">${descriptionText[pathLocal][firstProduct] ? descriptionText[pathLocal][firstProduct] : descriptionText['eu'][firstProduct]}</p>
                </div>                       
            </div>
            <div class="slider_custom__item">                   
               <div class="slider_custom__slider">
                    ${imagesSecondProduct}
               </div>
               <div class="slider_custom__text">
                    <p onclick="location.href='https://www.urbanista.com/${pathLocal}/${secondProduct}';" class="slider__title">${secondProduct.replace(/-/g, ' ')}</p>
                    <p onclick="location.href='https://www.urbanista.com/${pathLocal}/${secondProduct}';" >${descriptionText[pathLocal][secondProduct] ? descriptionText[pathLocal][secondProduct] : descriptionText['eu'][secondProduct]}</p>
               </div>    
            <div>        
        </div>
    `;
        }

    let sliderBlock = ``;

    switch (pathname) {
        case 'london':
            sliderBlock = drawSliderItems('stockholm-plus', '4/0/40407', 'paris', '3/7/37058');
            break;
        case 'stockholm-plus':
            sliderBlock = drawSliderItems('london', '4/3/43366', 'paris', '3/7/37058');
            break;
        case 'paris':
            sliderBlock = drawSliderItems('stockholm-plus', '4/0/40407', 'london', '4/3/43366');
            break;
        default:
            sliderBlock = drawSliderItems('stockholm-plus', '4/0/40407', 'london', '4/3/43366');
            break;
    }

    document.querySelector('.yotpo.yotpo-main-widget') ? document.querySelector('.yotpo.yotpo-main-widget').insertAdjacentHTML(`afterend`, sliderBlock) : document.querySelector('.money-banner').insertAdjacentHTML(`afterend`, sliderBlock);

    /* change partners position */
    if (document.querySelector('.product-view-badge').childNodes.length > 1) {
        let partnersBlock = document.querySelector('.product-view-badge');

        document.querySelector('.slider_custom').after(partnersBlock);
        partnersBlock.insertAdjacentHTML('beforebegin', `<p class="swipe-arrow">partners</p>`);

        // partnersBlock.insertAdjacentHTML('afterend', `<p class="swipe-arrow">Describe Urbanista</p>`)
    } else if (document.querySelector('.product-view-badge') && document.querySelector('.product-view-badge').childNodes.length <= 1) {
        document.querySelector('.product-view-badge').style.display = 'none';
        // document.querySelector('.slider_custom').insertAdjacentHTML('afterend', `<p class="swipe-arrow">Describe Urbanista</p>`);
    }

    let specsParagraph = '';

    setTimeout(() => {
        if (document.querySelector('.specs_custom')) {
            specsParagraph = `<p class="custom-link-section__specs">Specifications</p><hr>`;
        }

        /* create specs and 90 days links */
        document.querySelector('.product-options-bottom').insertAdjacentHTML('afterend', `
            <div class="custom-link-section">
                ${specsParagraph}
                <p class="custom-link-section__risk">90 days risk-free trial</p>
            </div>  
        `);

        /* specs and 90 days li nks scroll logic */
        function scrollTo(paragraph, block) {
            document.querySelector(paragraph)?.addEventListener('click', () => {
                if(paragraph === '.custom-link-section__specs') {
                    console.log('specs');
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — Improved PDP mobile',
                        'eventAction': 'Click on specification',
                        'eventLabel': 'Under the add to cart button'
                    });
                } else if (paragraph === '.custom-link-section__risk') {
                    console.log('risk');
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — Improved PDP mobile',
                        'eventAction': 'Click on 90 money back guarantee',
                        'eventLabel': 'Under the add to cart button'
                    });
                }
                let el = document.querySelector(block).getBoundingClientRect().top - 70;
                window.scrollBy({top: el, behavior: 'smooth'});
            });
        }

        scrollTo('.custom-link-section__specs', '.specs_custom');
        scrollTo('.custom-link-section__risk', '.money-banner');
    }, 500);

    document.querySelector('.product-add-form').insertAdjacentHTML('beforebegin', `
    <div class="select-color">
        <p>${localisation[pathLocal].color ? localisation[pathLocal].color : localisation['eu'].color}:</p>
        <div class="swatch-option color"></div>
        <svg class="arrow-down-svg" xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M0.94 0.726562L4 3.7799L7.06 0.726562L8 1.66656L4 5.66656L0 1.66656L0.94 0.726562Z" fill="#333333"/>
        </svg>
    </div>  
    `);

    // add active color to select-color
    let checkElInterval = setInterval(() => {
        if (document.querySelector('.swatch-attribute .swatch-option.selected')) {
            clearInterval(checkElInterval);
            document.querySelector('.select-color .swatch-option').style.backgroundColor = document.querySelector('.swatch-attribute .swatch-option.selected').style.backgroundColor;
        }
    }, 100);

    window.addEventListener('click', () => {
        if (document.querySelector('.sticky-pdp-cta .swatch-attribute')) {
            document.querySelector('.sticky-pdp-cta .swatch-attribute').classList.remove('swatch-attribute_visible');
        }
    });

    document.querySelector('.select-color').addEventListener('click', (event) => {
        event.stopPropagation();
        document.querySelector('.sticky-pdp-cta .swatch-attribute.color').classList.toggle('swatch-attribute_visible');
    });

    document.querySelectorAll('.slider_custom__text').forEach(item => {
        item.style.backgroundColor = document.querySelector('.product-info-main').style.backgroundColor || getComputedStyle(document.querySelector('.product-info-main')).backgroundColor;
    });

    setTimeout(() => {
        if (document.querySelector('.specs_custom')) {
            document.querySelector('.specs_custom').style.backgroundColor = document.querySelector('.product-info-main').style.backgroundColor || getComputedStyle(document.querySelector('.product-info-main')).backgroundColor;
        }
    }, 1000);


    // images and text blocks
    // document.querySelectorAll('.product-view-cms .pd-col').forEach(block => {
    //     if (!block.querySelector('h1')?.innerText === 'SPECS') {
    //         block.closest('.pd-row').add('custom-parent');
    //         // console.log(imagesBlock);
            
    //         // imagesBlock.classList.add('custom-parent')
    //         console.log(block);

    //         document.querySelector('.product-view-badge')?.childNodes.length > 1 ? document.querySelector('.product-view-badge').after(block) : document.querySelector('.slider_custom').after(block);
    //     }
    // });

    // let wait = setInterval(() => {
    //     if(document.querySelector('.slider_custom')) {
    //         clearInterval(wait)

    //         for (let index = document.querySelectorAll('.product-view-cms .pd-row .pd-col').length - 1; index >= 0; index--) {
    //             let el = document.querySelectorAll('.product-view-cms .pd-row .pd-col')[i]
    //                 document.querySelector('.product-view-badge')?.childNodes.length > 1 ? document.querySelector('.product-view-badge').after(el) : document.querySelector('.slider_custom').after(el);
                
    //           }

            
    //     }
        
    // }, 100);    
    
    // let addDescInterval = setInterval(() => {
    //     if(document.querySelector('.product-view-cms .pd-row .pd-col')) {
    //         clearInterval(addDescInterval)
    //        document.querySelector('.product-view-cms .pd-row .pd-col').insertAdjacentHTML('beforebegin', `<p class="swipe-arrow">Description</p>`);
    //     }
    // }, 100);
  

    // document.querySelector('.custom-parent').insertAdjacentHTML('beforebegin', `<p class="swipe-arrow">Description</p>`);

    document.querySelector('.product-view-cms .pd-row .pd-col').insertAdjacentHTML('beforebegin', `<p class="swipe-arrow">Description</p>`);

    // let bgColor = document.querySelector('.product-info-main').style.backgroundColor || getComputedStyle(document.querySelector('.product-info-main')).backgroundColor;
    
    /*
        first observer
    */

    document.querySelector('.product-info-main').style.backgroundColor = document.querySelector('.product-info-main').style.backgroundColor || getComputedStyle(document.querySelector('.product-info-main')).backgroundColor;

    let styleConfig = {attributes: true, attributeFilter: ['style']};

    let observer = new MutationObserver(function () {

        observer.disconnect();

        if (document.querySelector('.specs_custom')) {
            document.querySelector('.specs_custom').style.backgroundColor = document.querySelector('.product-info-main').style.backgroundColor || getComputedStyle(document.querySelector('.product-info-main')).backgroundColor;
        }

        document.querySelectorAll('.slider_custom__text').forEach(item => {
            item.style.backgroundColor = document.querySelector('.product-info-main').style.backgroundColor;
        });

        observer.observe(document.querySelector('.product-info-main'), styleConfig);
    });

    observer.observe(document.querySelector('.product-info-main'), styleConfig);

    /*
        second observer
    */

    let config = {subtree: true, childList: true};

    let observerActiveOption = new MutationObserver(function () {
        // change active color in select-color
        document.querySelector('.select-color .swatch-option').style.backgroundColor = document.querySelector('.swatch-attribute .swatch-option.selected').style.backgroundColor;
    });

    observerActiveOption.observe(document.querySelector('.swatch-attribute'), config);

    /*
        third observer
    */

    let observerCloseColor = new MutationObserver(function () {
        if (!document.body.classList.contains('sticky-pdp-cta') && document.querySelector('.swatch-attribute_visible')) {
            observerCloseColor.disconnect();
            document.querySelector('.swatch-attribute.color.swatch-attribute_visible').classList.remove('swatch-attribute_visible');
        }
        observerCloseColor.observe(document.body, config);
    });

    observerCloseColor.observe(document.body, config);

    /* close custom-select on click */

    let checkCustomSelectInterval = setInterval(function () {
        if (document.querySelector('.sticky-pdp-cta .swatch-option')) {
            clearInterval(checkCustomSelectInterval);

            document.querySelectorAll('.sticky-pdp-cta .swatch-option').forEach(item => {
                item.addEventListener('click', () => {
                    document.querySelector('.sticky-pdp-cta .swatch-attribute.color').classList.toggle('swatch-attribute_visible');
                });
            });
        }
    }, 100);

// slider
    let categoryInterval = setInterval(() => {
        if (typeof tns == 'function') {
            clearInterval(categoryInterval);
            document.querySelectorAll('.slider_custom__slider').forEach(slider => {
                tns({
                    container: slider,
                    items: 1,
                    autoplay: false,
                    controls: true,
                    loop: false,
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    nav: true,
                    navPosition: 'bottom',
                    preventScrollOnTouch: 'auto',
                    swipeAngle: 30,
                });
            });
        }
    }, 200);
}, 1000);


  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': 'Exp — Improved PDP mobile',
      'eventAction': 'loaded'
  });



    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2067583,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('trigger', 'improved_pdp_mobile');
