let dir = `https://conversionratestore.github.io/projects/geeni/img/`;

let styleBase = `
<style>
    .line-vertical {
        width: 1px;
        height: 14px;
        background: #D9D9D9;
        margin: 0 16px;
    }
    .d-flex  {
        display: flex;
    }
    .items-center  {
        align-items: center;
    }
    .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .items-end {
        align-items: flex-end;
    }
    .relative {
        position: relative;
    }
    .d-none {
        display: none;
    }

    @media screen and (min-width: 1024px) {
        .d-lg-flex {
            display: flex;
        }
        .justify-lg-between {
            justify-content: space-between;
        }
        .d-lg-block {
            display: block;
        }
        .d-lg-none {
            display: none;
        }
        .justify-lg-start {
            justify-content: flex-start;
        }
    }
</style>`;

let stylePDP = `
<style class="style-pdp">
    .product__alternates, 
    .selector-wrapper--qty, 
    .payments-exp ul li iframe.paypalLight, 
    .payments-exp ul li [data-testid="GooglePay-button"],
    .product__accordions,
    .product__block:not(.product__title-and-price, .product__price-and-badge, .product__form__wrapper, .product__description),
    .MainTabarnappUIContainer,
    #shopify-section-template--16711182876924__06a1d96e-d388-4a9e-b044-c646f1b0c2bf,
    .transparent-header:not(#shopify-section-template--16711182876924__a03e6f6c-22fb-4b5c-a452-fea76cc1a100) {
        display: none!important;
    }
    #shopify-section-template--16711182876924__16842542196ee361cd,
    #shopify-section-template--16711182876924__a03e6f6c-22fb-4b5c-a452-fea76cc1a100,
    .index-section {
        order: 1;
    }
    .main-content {
        display: flex;
        flex-direction: column;
    }
    .product__description {
        padding-bottom: 0;
    }
    .product-single {
        padding-top: 0;
    }
    .product__title {
        color: var(--font-h, #1B1B1B);
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 32px;
        padding-bottom: 4px;
    }
    .yotpo-sr-bottom-line-score {
        font-weight: 500!important;
        font-family: Avenir Next!important;
        font-size: 14px!important;
    }
    .product__reviews {
        margin-bottom: 12px;
    }
    .product-single__thumbnail-link {
        width: 60px;
        height: 60px;
        padding: 0;
    }
    .product-single__thumbnail {
        padding: 3px!important;
    }
    .product-single__thumbnails {
        padding: 0 0 0 15px;
    }
    .manufacturer {
        background: var(--bg-light-blue, #E8F8FE);
        color: var(--Main-Blue, #023F88);
        text-align: center;
        font-family: Avenir Next;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20.781px; /* 148.437% */
        text-transform: uppercase;
        padding: 9px;
        margin: -4px -20px 16px;
    }
    .manufacturer svg {
        margin-right: 8px;
    }
    .pack_size p {
        color: var(--font-h, #1B1B1B);
        font-family: Avenir Next;
        font-size: 16px;
        line-height: 24px;
        margin: 0;
    }
    .pack_size ul {
        margin: 0;
    }
    .pack_size > p {
        font-weight: 700;
        margin: 16px 0 12px;
    }
    .pack_size li {
        border-radius: 10px;
        border: 1px solid #DEDEDE;
        background: var(--bg-light-grey, #F7F7F7);
        padding: 3px 16px 3px 3px;
        cursor: pointer;
        position: relative;
        margin: 0 0 6px 0;
    }
    .pack_size li * {
        pointer-events: none;
    }
    .pack_size li img {
        border-radius: 8px;
        border: 1px solid #F7F7F7;
        background-color: lightgray;
        width: 72px;
        height: 72px;     
        object-fit: contain;  
        flex-shrink: 0;
    }
    .pack_size li.selected {
        border: 2px solid var(--Secondary-blue, #00B0EE);
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        padding: 2px 15px 2px 2px;
    }
    .pack_size li .count {
        position: absolute;
        top: 3px;
        right: 4px;
        z-index: 1;
        color: var(--font-blue, #023F88);
        font-size: 14px;
        font-weight: 500;
        line-height: 22px; 
    }
    .pack_size li .name {
        font-weight: 600;
    }
    .pack_size li > .relative {
        margin-right: 12px;
    }
    .pack_size li .title {
        color: var(--font-body, #5B5B5B);
        font-size: 14px;
        font-weight: 400;
    }
    .pack_size .prices {
        margin-left: auto;
    }
    p.compare {
        color: #BBB!important;
        font-weight: 500;
        text-decoration-line:line-through
    }
    .pr {
        color: var(--font-h, #1B1B1B);
        font-weight: 600;
    }
    .pack_size li p.pr {
        margin-left: 5px;
    }
    .saved {
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        border-radius: 0px 10px 0 10px;
        background: #53B347;   
        padding: 0 4px 0 8px;
    }
    .pack_size li .saved {
        position: absolute;
        top: -1px;
        right: -1px;
    }
    .pack_size li.selected .saved {
        top: -2px;
        right: -2px;
    }
    .product__price-and-badge .product__price {
        padding: 0;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-top: 10px;
    }
    .product__price-and-badge .product__price p {
        font-size: 24px;
        line-height: 32px; 
        margin: 0;
    }
    .product__price-and-badge .product__price .saved {
        font-weight: 600;
        border-radius: 0px 10px 0 10px;
        border-radius: 4px;
        line-height: 24px;
        padding: 0 10px;
        margin: 0 0 0 8px;
    }
    .product__price-and-badge .product__price p.compare {
        margin: 0 0 0 8px;
        font-weight: 400;
    }
    .product__price-and-badge .product__price p.pr:before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: 0 6px;
        background: #1B1B1B;
        flex-shrink: 0;
        display: block;
    }
    .product__price-and-badge .product__price p.name {
        font-weight: 400;
    }
    .product__price--regular {
        color: var(--font-h, #1B1B1B);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 32px;
        margin: -10px 0 0 0;
    }
    .discount {
        padding-bottom: 16px;
    }
    .discount p {
        color:  #1B1B1B;
        font-size: 14px;
        line-height: 22px; 
        margin: 0 0 0 12px;
    }
    .discount b {
        font-weight: 600;
    }
    .qty_block > p {
        color: var(--font-h, #1B1B1B);
        font-size: 14px;
        line-height: 22px; 
        margin: 0;
    }
    .calc_qty {
        border-radius: 6px;
        border: 1px solid var(--Border, #D9D9D9);
        background: #FFF;
    }
    .btn_qty {
        position: relative;
        width: 34px;
        height: 40px;
        
    }
    .btn_qty:before, .btn_qty_plus:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 12px;
        height: 1px;
        background-color: #1B1B1B;
    }
    .btn_qty_plus:after  {
        width: 1px;
        height: 12px;
    }
    .btn_qty[disapled]:before, .btn_qty_plus[disapled]:after {
        background-color: #888888;
    }
    input.input_qty {
        border: none;
        border-right: 1px solid #D9D9D9;
        border-left: 1px solid #D9D9D9;
        width: 36px;
        height: 40px;
        line-height: 40px;
        padding: 0;
        color: var(--grey-black, #1C1D1D);
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        border-radius: 0;
    }
    input.input_qty::-webkit-outer-spin-button,
    input.input_qty::-webkit-inner-spin-button {
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none;
        margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }

    input.input_qty[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }
    .compatibility_block {
        border-radius: 6px;
        border: 1px solid var(--Border, #D9D9D9);
        background: #FFF;
        margin-left: 5px;
        padding: 6px;
        height: 42px;
        width: fit-content;
    }
    .payments-exp {
        display: block!important;
    }
    .payments-exp .shopify-cleanslate ul li {
        height: auto!important;
        margin: 0!important;
        border-radius: 30px;
        overflow: hidden;
    }
    .payments-exp > p {
        color: var(--font-body, #5B5B5B);
        font-size: 14px;
        font-weight: 500;
        line-height: 22px; 
        position: relative;
        text-align: center;
        margin: 8px 0;
    }
    .payments-exp > p span {
        width: fit-content;
        padding: 0 8px;
        background: #fff;
        position: relative;
        z-index: 1;
    }
    .payments-exp > p:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 1px;
        background: var(--Border, #D9D9D9);
        z-index: 0
    }
    .shop-pay-terms {
        margin-top: 12px;
    }
    .delivery {
        background: var(--bg-light-grey, #F7F7F7);
        padding: 1px 20px 12px;
        margin: 0 -20px;
    }
    .delivery p {
        color: var(--font-body, #5B5B5B);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin: 0;
    }
    .delivery p.title span {
        color: var(--font-h, #1B1B1B);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        padding-left: 6px;
    }
    .delivery p.title {
        margin-top: 16px;
        margin-bottom: 3px;
    }
    .delivery b {
        font-weight: 700;
        color: var(--font-h, #1B1B1B);
    }
    .delivery a {
        color: var(--Main-Blue, #023F88);
        margin-top: 11px;
        display: block;
        font-size: 14px;
        font-weight: 600;
        line-height: 22px;
        text-decoration-line: underline;
    }
    .warranty {
        margin: 0 -20px;
        background: var(--bg-light-blue, #E8F8FE);
        padding: 9px;
        color: var(--font-h, #1B1B1B);
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 18.81px; 
        text-transform: uppercase;
        margin-bottom: 32px;
    }
    .warranty svg {
        margin-right: 8px;
    }
    .product__description .title {
        color: var(--font-h, #1B1B1B);
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        margin: 0 0 12px 0;
    }
    .product__description > ul {
        margin-bottom: 10px;
    }
    .product__description > ul:not(.active) li:not(:first-child) {
        display: none;
    }
    .product__description .btn_more {
        color: var(--Main-Blue, #023F88);
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
        text-decoration-line: underline;
        width: 100%;
        margin-bottom: 16px;
    }
    .product__description .btn_more svg {
        margin-left: 6px;
    }
    .product__description > ul.active+.btn_more svg {
        transform: scaleY(-1);
    }
    .support {
        background: var(--bg-light-blue, #E8F8FE);
        margin: 0 -20px;
        padding: 14.5px 16px;
    }
    .support p {
        color: var(--font-h, #1B1B1B);
        margin: 0 0 0 8px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
    .support p span {
        font-weight: 400;
        margin-left: 12px;
    }
    .support p a {
        color: var(--Main-Blue, #023F88);
        font-size: 16px;
        font-weight: 600;
        line-height: 24px; 
        text-decoration-line: underline;
    }
  
    @media screen and (max-width: 1023px) {
        #shopify-section-template--16711182876924__icons {
            margin: 0 -20px;
        }
        .product-single {
            padding-bottom: 0;
        }
        .index-section {
            display: none!important;
        }
    }
    @media screen and (min-width: 1024px) {
        #shopify-section-template--16711182876924__icons {
            margin-top: 60px;
        }
        .payments-exp > p {
            display: none;
        }
        .discount {
            padding: 0;
        }
        .product__form .btn--submit {
            width: 48%;
        }
        .product__submit__item {
            display: flex;
        }
        .payments-exp {
            width: 48%;
            margin-left: auto;
        }
        .payments-exp .shopify-cleanslate ul li {
            width: 100%;
            flex-basis: auto!important;
        }
        .payments-exp .shopify-cleanslate ul li > div {
            height: 54px!important;
        }
        .product__submit__item, .warranty, .delivery, .manufacturer, .support  {
            margin-left: 0;
            margin-right: 0;
        }
        .delivery {
            padding: 4px 20px 20px;
            margin-bottom: 12px;
        }
        .compatibility_block  {
            margin: 0 6px 16px 0;
        }
        .support {
            padding-right: 25px;
            padding-left: 25px;
        }
    }
</style>`;

let media = window.matchMedia("(max-width: 1023px)").matches;

let discountChange = true; 

//for (12)
let compatibilityHTML = (classess = '') => `  
<div class="compatibility_block ${classess}">
    <img src="${dir}compatibility_alexa.svg" alt="alexa">
    </div>
    <div class="compatibility_block ${classess}">
    <img src="${dir}compatibility_google.svg" alt="google">
</div>`;

let init = setInterval(() => {
    
    // PDP
    if (window.location.href.includes('/products/')) {
        if (!document.querySelector('.style-pdp')) { //add style 
            document.body.insertAdjacentHTML('afterbegin', styleBase)
            document.body.insertAdjacentHTML('afterbegin', stylePDP)
        }
        //(2-5)
        if (document.querySelector('.product__title-and-price') &&
            document.querySelector('.product__reviews') && 
            !document.querySelector('.manufacturer')
        ) {
          
            let manufacturerHtml =  `
            <div class="flex-center manufacturer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.75 9.75H20.71C20.5005 8.93115 20.1797 8.15479 19.752 7.43042L20.4851 6.69653C20.7781 6.40356 20.7781 5.92896 20.4851 5.63599L18.364 3.51489C18.071 3.22192 17.5964 3.22192 17.3035 3.51489L16.5696 4.24805C15.8452 3.82031 15.0688 3.49951 14.25 3.29004V2.25C14.25 1.83545 13.9146 1.5 13.5 1.5H10.5C10.0854 1.5 9.75 1.83545 9.75 2.25V3.29004C8.93115 3.49951 8.15479 3.82031 7.43042 4.24805L6.69653 3.51489C6.40356 3.22192 5.92896 3.22192 5.63599 3.51489L3.51489 5.63599C3.22192 5.92896 3.22192 6.40356 3.51489 6.69653L4.24805 7.43042C3.82031 8.15479 3.49951 8.93115 3.29004 9.75H2.25C1.83545 9.75 1.5 10.0854 1.5 10.5V13.5C1.5 13.9146 1.83545 14.25 2.25 14.25H3.29004C3.49951 15.0688 3.82031 15.8452 4.24805 16.5696L3.51489 17.3035C3.22192 17.5964 3.22192 18.071 3.51489 18.364L5.63599 20.4851C5.92896 20.7781 6.40356 20.7781 6.69653 20.4851L7.43042 19.752C8.15479 20.1797 8.93115 20.5005 9.75 20.71V21.75C9.75 22.1646 10.0854 22.5 10.5 22.5H13.5C13.9146 22.5 14.25 22.1646 14.25 21.75V20.71C15.0688 20.5005 15.8452 20.1797 16.5696 19.752L17.3035 20.4851C17.5964 20.7781 18.071 20.7781 18.364 20.4851L20.4851 18.364C20.7781 18.071 20.7781 17.5964 20.4851 17.3035L19.752 16.5696C20.1797 15.8452 20.5005 15.0688 20.71 14.25H21.75C22.1646 14.25 22.5 13.9146 22.5 13.5V10.5C22.5 10.0854 22.1646 9.75 21.75 9.75ZM16.5 13.5C16.5 14.0713 16.1829 14.5854 15.6716 14.8411L11.9999 16.8002L8.31152 14.833C7.8175 14.5854 7.5 14.0713 7.5 13.5V9.25241C7.5 8.96617 7.66292 8.70488 7.91995 8.57895L11.3291 6.9082C11.5364 6.80493 11.7682 6.75 12 6.75C12.2318 6.75 12.4636 6.80493 12.6709 6.9082L16.0821 8.59264C16.338 8.71898 16.5 8.97968 16.5 9.26509V13.5Z" fill="#023F88"/>
                    <path d="M15.3352 9.0791L12.3352 7.5791C12.1243 7.47363 11.8752 7.47363 11.6643 7.5791L8.66429 9.0791C8.63824 9.09215 8.61778 9.11201 8.59375 9.12772L11.9997 10.8307L15.4057 9.12772C15.3817 9.11201 15.3612 9.09215 15.3352 9.0791Z" fill="#023F88"/>
                    <path d="M8.25 13.5026C8.25 13.7867 8.4104 14.0464 8.66455 14.1735L11.625 15.7526V11.4844L8.25 9.79688V13.5026Z" fill="#023F88"/>
                    <path d="M12.375 15.7526L15.3354 14.1735C15.5896 14.0464 15.75 13.7867 15.75 13.5026V9.79688L12.375 11.4844V15.7526Z" fill="#023F88"/>
                </svg>
                Direct from the manufacturer
            </div>`;

            if (media) {
                document.querySelector('.product-single__gallery').before(document.querySelector('.product__title-and-price')); // (2)
                document.querySelector('.product__title-and-price').after(document.querySelector('.product__reviews')); // (2)

                //reloadCells thumbnails slider
                let slider = new Flickity(document.querySelector('.product-single__thumbnails'), { // (3)
                    contain: true,
                    pageDots: false,
                    auto: true,
                    asNavFor: '.product-single__gallery',
                });
                slider.reloadCells();

                // add "Direct from the manufacturer"
                document.querySelector('.product-single__gallery').insertAdjacentHTML('afterend', manufacturerHtml)
            } else {
                 // add "Direct from the manufacturer" 
                document.querySelector('.product-single__gallery').insertAdjacentHTML('afterbegin', manufacturerHtml)
            }
        }

        //redesign packs (6-13)
        if (document.querySelectorAll('.product__alternates .alternative-options > li').length > 0 &&
            document.querySelector('.manufacturer') &&
            !document.querySelector('.pack_size')
        ) {

            let packSizeHtml = `
                <div class="pack_size">
                    <p>Pack size</p>
                    <ul></ul>
                </div>`;

            if (media) {
                document.querySelector('.manufacturer').insertAdjacentHTML('afterend', packSizeHtml);
            } else {
                document.querySelector('.product__reviews').insertAdjacentHTML('afterend', packSizeHtml);
            }

            document.querySelectorAll('.product__alternates .alternative-options > li').forEach((item, index) => {

                let saved = +(item.dataset.compare.replace('$','')) - +(item.dataset.price.replace('$',''));

                if (!item.classList.contains('alternative-options__sold-out')) {

                    document.querySelector('.pack_size ul').insertAdjacentHTML('beforeend', `
                    <li class="d-flex items-center ${item.querySelector('.alternative-options__item--active') ? 'selected' : ''}" data-id="${item.dataset.id}" onclick="selectedPack(event)">
                        <div class="relative">   
                            <div class="count">x${index + 1}</div>
                            <img src="${item.querySelector('img').src}" alt="${item.querySelector('img').alt}">
                        </div>
                        <div class="">  
                            <p class="name">${item.querySelector('.alternative-options__item-label').innerHTML}</p>
                            <p class="title"></p>
                        </div>
                        <div class="prices d-flex">
                            <p class="compare">${item.dataset.compare != '$0.00' ? item.dataset.compare : ''}</p>
                            <p class="pr">${item.dataset.price}</p>
                        </div>
                        ${saved > 0 ? '<div class="saved">Save $' + saved + '</div>' : ''}
                    </li>`)
                }
                //(11)
                if (item.querySelector('.alternative-options__item--active')) {
                    document.querySelector('.product__price-and-badge .product__price').innerHTML = `
                    <p class="name">${item.querySelector('.alternative-options__item-label').innerHTML}</p>
                    <p class="pr d-flex items-center">${item.dataset.price}</p>
                    <p class="compare">${item.dataset.compare != '$0.00' ? item.dataset.compare : ''}</p>
                    ${saved != '' ? '<div class="saved">  Save $' + saved + '</div>' : ''}`;
                }
            })
        }
        //shop-pay-terms move for payments buttons (17)
        if (document.querySelector('.payments-exp .dynamic-checkout__content .shopify-cleanslate') &&
            !document.querySelector('.product__submit__buttons+.shop-pay-terms')
        ) {
            document.querySelector('.product__submit__buttons').after(document.querySelector('.shop-pay-terms')) 
        }
        // block with discount "Spend $ and get a % discount" (13)
        if (document.querySelector('.cart-drawer.is-open')) {
            discountChange = true;
        }
        //(13)
        if (document.querySelector('.product__block.product__price-and-badge') &&
            !document.querySelector('.cart-drawer.is-open') &&
            document.querySelector('.qty_block') &&
            discountChange == true
        ) {
          
            discountChange = false;

            getCart().then(data => {
                console.log(data)

                let req = /(\d{1,})(\d{2})$/;
                let total = +(data['total_price'].toString().replace(req, "$1.$2"));

                let discount = ``;
                if (total >= 0 && total <= 99.00) {
                    discount = `<p>Spend <b>$99</b> and get a <b>10% discount</b></p>`;
                } else if (total > 99.00 && total <= 149.00) {
                    discount = `<p>Spend <b>$149</b> and get a <b>15% discount</b></p>`;
                } else if (total > 149.00) {
                    discount = `<p>Spend <b>$199</b> and get a <b>20% discount</b></p>`;
                }

                if (document.querySelector('.discount')) {
                    document.querySelector('.discount').remove()
                }

                let discountHTML = `
                    <div class="discount d-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <circle cx="14" cy="14.25" r="14" fill="#E8F8FE"/>
                            <path d="M8.53864 8H13.3148C13.8598 8 14.3726 8.22387 14.7573 8.60765L20.399 14.2364C21.2003 15.036 21.2003 16.3472 20.399 17.1468L16.1357 21.4003C15.3343 22.1999 14.02 22.1999 13.2187 21.4003L7.57699 15.7716C7.19233 15.3878 7 14.8761 7 14.3324V9.53512C7 8.7036 7.67315 8 8.53864 8ZM10.5902 12.6054C11.1351 12.6054 11.6159 12.1576 11.6159 11.582C11.6159 11.0383 11.1351 10.5585 10.5902 10.5585C10.0132 10.5585 9.5644 11.0383 9.5644 11.582C9.5644 12.1576 10.0132 12.6054 10.5902 12.6054Z" fill="#023F88"/>
                        </svg>  
                        ${discount}
                    </div>`;

                if (media) {
                    document.querySelector('.product__block.product__price-and-badge').insertAdjacentHTML('afterend', discountHTML)
                } else {
                    document.querySelector('.qty_block').insertAdjacentHTML('beforebegin', discountHTML)
                }
            })
        }

        //qty and compatibility icons
        if (document.querySelector('.selector-wrapper--qty') && 
            !document.querySelector('.qty_block')
        ) {
            document.querySelector('.selector-wrapper--qty').insertAdjacentHTML('afterend', `
            <div class="d-flex items-end justify-lg-between">
                <div class="qty_block">
                    <p>QTY</p>
                    <div class="d-flex calc_qty">
                        <button type="button" class="btn_qty btn_qty_minus" onclick="qtyChange(event)"></button>
                        <input type="number" class="input_qty" value="1" onchange="qtyChange(event)">
                        <button type="button" class="btn_qty btn_qty_plus" onclick="qtyChange(event)"></button>
                    </div>
                </div>
                ${compatibilityHTML('d-lg-none')}
            </div>`)
        }

        //deliveri section (18-21)
        if (
            document.querySelector('.product__accordions .product__accordion__content p') &&
            document.querySelector('.product__form__wrapper') &&
            !document.querySelector('.delivery')
        ) {
            let orders = document.querySelector('.product__accordions .product__accordion__content p').innerHTML.split('on orders')[1].split('+')[0];       
            let returnOrder = document.querySelector('.product__accordions .product__accordion__content p').innerHTML.split('free ')[1].split('returns')[0];

            document.querySelector('.product__form__wrapper').insertAdjacentHTML('afterend', `
            <div class="delivery">
                <p class="d-flex items-center title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
                        <path d="M4.2 0.75H13.8C14.775 0.75 15.6 1.52344 15.6 2.4375V4.125H17.475C18.1125 4.125 18.7125 4.37109 19.2 4.79297L22.0875 7.5C22.5375 7.92188 22.8 8.51953 22.8 9.11719V13.125C23.4375 13.125 24 13.6523 24 14.25C24 14.8828 23.4375 15.375 22.8 15.375H21.6C21.6 17.2383 19.9875 18.75 18 18.75C15.975 18.75 14.4 17.2383 14.4 15.375H9.6C9.6 17.2383 7.9875 18.75 6 18.75C3.975 18.75 2.4 17.2383 2.4 15.375V10.875H7.8C8.1 10.875 8.4 10.6289 8.4 10.3125C8.4 10.0312 8.1 9.75 7.8 9.75H0.6C0.2625 9.75 0 9.50391 0 9.1875C0 8.90625 0.2625 8.625 0.6 8.625H9C9.3 8.625 9.6 8.37891 9.6 8.0625C9.6 7.78125 9.3 7.5 9 7.5H1.8C1.4625 7.5 1.2 7.25391 1.2 6.9375C1.2 6.65625 1.4625 6.375 1.8 6.375H10.2C10.5 6.375 10.8 6.12891 10.8 5.8125C10.8 5.53125 10.5 5.25 10.2 5.25H0.6C0.2625 5.25 0 5.00391 0 4.6875C0 4.40625 0.2625 4.125 0.6 4.125H2.4V2.4375C2.4 1.52344 3.1875 0.75 4.2 0.75ZM20.4 9.11719L17.475 6.375H15.6V9.75H20.4V9.11719ZM6 17.0625C6.975 17.0625 7.8 16.3242 7.8 15.375C7.8 14.4609 6.975 13.6875 6 13.6875C4.9875 13.6875 4.2 14.4609 4.2 15.375C4.2 16.3242 4.9875 17.0625 6 17.0625ZM19.8 15.375C19.8 14.4609 18.975 13.6875 18 13.6875C16.9875 13.6875 16.2 14.4609 16.2 15.375C16.2 16.3242 16.9875 17.0625 18 17.0625C18.975 17.0625 19.8 16.3242 19.8 15.375Z" fill="#023F88"/>
                    </svg>
                    <span>Delivery </span>
                </p>
                <div class="d-lg-flex justify-lg-between">
                    <p>Free standard delivery on orders over <b>${orders}</b> </p>
                    <div class="line-vertical d-lg-block d-none"></div>
                    <p>Approximate data of delivery, <b>${formatDate()}</b> </p>
                </div>
                <p class="d-flex items-center title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6687 1.65736L13.7025 3.40889L3.86672 9.08756V13.2955C3.86672 13.4636 3.95006 13.608 4.0957 13.6921L6.37561 15.0084C6.44841 15.0504 6.53175 15.0504 6.60459 15.0084C6.67739 14.9663 6.71906 14.8942 6.71906 14.8101V10.7344L16.5548 5.0557L19.5886 6.80723C19.8798 6.97537 20.0466 7.26412 20.0466 7.6004V12.864C19.2229 12.5862 18.3514 12.4363 17.481 12.3832V12.0303C17.481 11.6459 17.2615 11.3011 16.9131 11.1384C16.5649 10.9758 16.1595 11.0288 15.8648 11.2754L12.3727 14.1982C12.083 14.4407 11.9247 14.7942 11.9368 15.1717C11.9489 15.5509 12.1282 15.8911 12.434 16.1155L15.9143 18.6689C16.2149 18.8894 16.609 18.9218 16.9415 18.7533C17.2744 18.5847 17.481 18.2484 17.481 17.8753V17.4856C18.2054 17.572 18.9224 17.7947 19.5112 18.221C19.6254 18.3037 19.7337 18.3937 19.8345 18.4905C19.7671 18.5695 19.6846 18.638 19.5887 18.6934L10.6687 23.8433C10.3775 24.0114 10.044 24.0114 9.75281 23.8433L0.832969 18.6934C0.541687 18.5253 0.375 18.2365 0.375 17.9002V7.60045C0.375 7.26412 0.541687 6.97537 0.832969 6.80728L9.75286 1.65736C10.0441 1.48921 10.3775 1.48921 10.6687 1.65736ZM16.731 16.6922C21.6289 16.6922 23.017 21.3703 18.9938 23.473C18.9718 23.4844 18.9623 23.5108 18.9725 23.5335C18.9819 23.5546 19.0043 23.5658 19.0268 23.5602C25.711 21.9161 25.2437 13.1107 16.731 13.1107V12.0303C16.731 11.9371 16.6802 11.8574 16.5958 11.818C16.5113 11.7786 16.4176 11.7908 16.3462 11.8506L12.854 14.7734C12.7398 14.869 12.6816 14.9991 12.6863 15.1479C12.6911 15.2967 12.7575 15.4228 12.8776 15.5108L16.358 18.0643C16.431 18.1178 16.5217 18.1253 16.6025 18.0844C16.6833 18.0434 16.731 17.9658 16.731 17.8753V16.6922Z" fill="#023F88"/>
                    </svg>
                    <span>Return & Refund Policy</span>
                </p>
                <p>${returnOrder} free return and refund policy on all your orders</p>
                <a href="https://mygeeni.com/pages/shipping-return-policy">Learn more</a>
            </div>
            <div class="warranty flex-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <g clip-path="url(#clip0_732_16344)">
                    <path d="M12 7.28125C9.28638 7.28125 7.07812 9.48951 7.07812 12.2031C7.07812 14.9168 9.28638 17.125 12 17.125C14.7136 17.125 16.9219 14.9168 16.9219 12.2031C16.9219 9.48951 14.7136 7.28125 12 7.28125ZM15.3096 11.294L11.794 14.8096C11.6567 14.947 11.4767 15.0156 11.2969 15.0156C11.1171 15.0156 10.9371 14.947 10.7997 14.8096L8.69037 12.7003C8.41571 12.4256 8.41571 11.9807 8.69037 11.706C8.96503 11.4313 9.40998 11.4313 9.68464 11.706L11.2969 13.3182L14.3154 10.2997C14.59 10.0251 15.035 10.0251 15.3096 10.2997C15.5843 10.5744 15.5843 11.0194 15.3096 11.294Z" fill="#023F88"/>
                    <path d="M20.4375 3.0625H18.7903C16.413 3.0625 14.1781 2.09003 12.4971 0.409119C12.2225 0.13446 11.7775 0.13446 11.5029 0.409119C9.82197 2.09003 7.58698 3.0625 5.20972 3.0625H3.5625C3.17377 3.0625 2.85938 3.3769 2.85938 3.76563V12.2031C2.85938 18.5216 7.45716 21.4606 10.4996 23.3742C10.7778 23.5487 11.7039 24.2032 12 24.2032C12.2954 24.2032 13.197 23.5656 13.4742 23.3915C16.5271 21.4765 21.1407 18.5346 21.1407 12.2031V3.76563C21.1407 3.3769 20.8261 3.0625 20.4375 3.0625ZM12 18.5313C8.51038 18.5313 5.67188 15.6926 5.67188 12.2031C5.67188 8.71351 8.51038 5.87501 12 5.87501C15.4895 5.87501 18.3281 8.71351 18.3281 12.2031C18.3281 15.6926 15.4895 18.5313 12 18.5313Z" fill="#023F88"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_732_16344">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.25)"/>
                    </clipPath>
                    </defs>
                </svg>
                365-Days Warranty on All Products
            </div>`)
        }

        //Details section (22-24)
        if (document.querySelector('.product__description') ) {
            if (!document.querySelector('.product__description > .title') ) {
                document.querySelector('.product__description').insertAdjacentHTML('afterbegin',`
                <p class="title">Details</p>`)
                
              
            }
            if (document.querySelector('.product__description > ul') &&
                !document.querySelector('.product__description > .title_about') 
            ) {
                
                document.querySelector('.product__description > ul').insertAdjacentHTML('beforebegin',`
                <div class="d-lg-flex d-none">
                    ${compatibilityHTML()}
                </div>
                <p class="title title_about">About this product</p>`)

                //learn more button (23-24)
                document.querySelector('.product__description > ul').insertAdjacentHTML('afterend',`
                <button type="button" class="btn_more flex-center justify-lg-start">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path d="M7.01338 11.25C6.77258 11.25 6.55853 11.1679 6.39799 11.0037L1.26087 5.74853C0.913043 5.42009 0.913043 4.84531 1.26087 4.51686C1.58194 4.16105 2.14381 4.16105 2.46488 4.51686L7.01338 9.14247L11.5351 4.51686C11.8562 4.16105 12.4181 4.16105 12.7391 4.51686C13.087 4.84531 13.087 5.42009 12.7391 5.74853L7.60201 11.0037C7.44147 11.1679 7.22742 11.25 7.01338 11.25Z" fill="#023F88"/>
                    </svg>
                </button>
                <div class="support d-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                        <path d="M12 0.745117C18.7031 0.745117 23.7656 6.37012 24 12.7451V17.6201C24 18.2764 23.4844 18.7451 22.875 18.7451C22.2188 18.7451 21.75 18.2764 21.75 17.6201V12.7451C21.75 7.40137 17.3438 3.04199 12 3.04199C6.60938 3.04199 2.25 7.40137 2.25 12.7451V17.6201C2.25 18.2764 1.64062 18.7451 1.07812 18.7451C0.46875 18.7451 0 18.2764 0 17.6201V12.7451C0.1875 6.37012 5.25 0.745117 12 0.745117ZM7.5 12.7451C8.29688 12.7451 9 13.4482 9 14.292V20.2451C9 21.0889 8.29688 21.7451 7.5 21.7451H6.75C5.0625 21.7451 3.75 20.4326 3.75 18.7451V15.792C3.75 14.1045 5.0625 12.7451 6.75 12.7451H7.5ZM17.25 12.7451C18.8906 12.7451 20.25 14.1045 20.25 15.792V18.7451C20.25 20.4326 18.8906 21.7451 17.25 21.7451H16.5C15.6562 21.7451 15 21.0889 15 20.2451V14.292C15 13.4482 15.6562 12.7451 16.5 12.7451H17.25Z" fill="#023F88"/>
                    </svg>
                    <p>Questions? <span>Visit our</span> <a href="/pages/support">support page</a></p>
                </div> `)

                document.querySelector('.btn_more').addEventListener('click', (e) => {
                    let list =  document.querySelector('.product__description > ul')
                    list.classList.toggle('active');
                    if (list.classList.contains('active')) {
                        e.currentTarget.querySelector('span').innerHTML = 'See less';
                    } else {
                        e.currentTarget.querySelector('span').innerHTML = 'Learn more';
                    }
                })

            }
        }
        //lift up an icons (25)
        if (document.querySelector('#shopify-section-template--16711182876924__icons') && 
            !document.querySelector('.shopify-section--product+#shopify-section-template--16711182876924__icons') 
        ) {
            document.querySelector('.shopify-section--product').after(document.querySelector('#shopify-section-template--16711182876924__icons'))
        }

        //text replace on  "You May Also Like" (26)
        if (document.querySelector('.featured-collection__top h2') &&
            document.querySelector('.featured-collection__top h2').innerHTML != 'You May Also Like'
        ) {
            document.querySelector('.featured-collection__top h2').innerHTML = 'You May Also Like'
        }

        //text replace on  "Recently Viewed" (27)
        if (document.querySelector('#Text--template--16711182876924__0ba37192-7466-420d-ada7-f85e8f0f34f7 span.text-highlight__break') &&
            document.querySelector('#Text--template--16711182876924__0ba37192-7466-420d-ada7-f85e8f0f34f7 span.text-highlight__break').innerHTML != 'Recently Viewed'
        ) {
            document.querySelector('#Text--template--16711182876924__0ba37192-7466-420d-ada7-f85e8f0f34f7 span.text-highlight__break').innerHTML = 'Recently Viewed';
        }
      
    }
});

//selected pack 
let selectedPack = (event) => {
    let _this = event.target;

    if (!_this.classList.contains('selected')) {
        console.log(_this.parentElement)
        _this.parentElement.querySelector('.selected').classList.remove('selected')
    }
    _this.classList.add('selected')

    let pack = _this.querySelector('.name').innerHTML,
        price = _this.querySelector('.pr').innerHTML,
        compare = _this.querySelector('.compare').innerHTML,
        saved = _this.querySelector('.saved') ?  _this.querySelector('.saved').innerHTML : '';

    _this.closest('.pack_size').parentElement.querySelector('.product__price-and-badge .product__price').innerHTML = `
        <p class="name">${pack}</p>
        <p class="pr d-flex items-center">${price}</p>
        <p class="compare">${compare}</p>
        ${saved != '' ? '<div class="saved">' + saved + '</div>' : ''}`; 

    _this.closest('.pack_size').parentElement.querySelector('.product__form [name="id"]').value = _this.dataset.id;
}

//get cart
let getCart = () => new Promise((resolve, reject) => {
    fetch(`https://mygeeni.com/cart.js`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then(res => res.json()).then(data => {
        resolve(data)
    }).catch((error) => {
        console.error('Error:', error);
    });
})

//change qty (PDP)
let qtyChange = (event) => {
    let _this = event.target;
    let qty = _this.parentElement.querySelector('.input_qty');

    if (_this.classList.contains('btn_qty_minus')) {
        if (qty.value > 1) {
            qty.value = +qty.value - 1;
        }
    } else if (_this.classList.contains('btn_qty_plus')) {
        qty.value = +qty.value + 1;
    } 

    _this.closest('form').querySelector('.quantity__selector.quantity__input').value = qty.value;

}

//get the current date + 7 days in the format: Fri, Aug 11 (19)
let formatDate = () => {
    const today = new Date();
  
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const nextWeekDayOfWeek = daysOfWeek[nextWeek.getDay()];
    const nextWeekMonth = months[nextWeek.getMonth()];
  
    const formattedDate = `${nextWeekDayOfWeek}, ${nextWeekMonth} ${nextWeek.getDate()}`;
  
    return formattedDate;
}