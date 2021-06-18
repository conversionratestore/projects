document.head.insertAdjacentHTML(
    'beforeend',
    `
    <style>
        .product-template .on-pack-wrapper .on-left,
        .on-pack-wrapper .on-select,
        .on-mobile-btn-wrapper a.on-mob-btn {
            display: none;
        }
        .on-pack-wrapper {
            margin: 0;
        }
        .on-pack-wrapper .on-right {
            width: 100%;
        }
        .swatchCustom__item {
            position: relative;
            display: flex;
            padding: 15px;
            margin-bottom: 20px;
            border: 1px solid #F1F7FC;
            border-radius: 5px; 
        }
        .swatchCustom__item.swatchCustom__item--active {
            pointer-events: none;
            background: #F1F7FC;
            border: 1px solid #4090D1;
        }
        .swatchCustom__item span {
            display: block;
        }
        .swatchCustom__heading {
            font-size: 16px;
            font-weight: 700;
            color: #1E415F;
            margin-bottom: 15px;
        }
        .swatchCustom__text {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }        
        .swatchCustom__text .week{
            font-size: 16px;
            color: #1E415F;
        }
        .swatchCustom__text .days{
            font-size: 12px;
            color: #747474;
        }
        .swatchCustom__text .price{
            font-size: 20px;
            font-weight: 700;
            color: #4090D1;
            letter-spacing: 0.05em;]
            font-family: 'Rubik', sans-serif;
        }
        .swatchCustom__text .price--strikeout {
            font-size: 12px;
            letter-spacing: 0.05em;
            text-decoration-line: line-through;
            color: #747474;
            font-family: 'Rubik', sans-serif;
        }
        .swatchCustom__text .sale {
            position: absolute;
            top: 6px;
            right: 10px;
            padding: 3px 10px;
            font-size: 12px;
            letter-spacing: -0.02em;
            color: #FFF;
            background: #F27113;
            border-radius: 2px; 
        }
        .swatchCustom__image-wrapper {
            display: flex;
            justify-content: center;
            width: 135px;
            margin-right: 20px;
        }        
        .checklist {
            color: #1E415F;
            margin: 5px 0;
            margin: 20px 0;
        }
        .checklist ul {
            color: #1E4670;
            list-style: none;
            font-size: 14px;
            font-weight: 500;
        }
        .checklist ul li::before {
            content: "✓";
            margin-right: 10px;
            font-weight: 700;
        }
        .packs-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 20px 0;
        }
        .modal_price .sale {
            font-size: 24px;
        }
        .made_in {    
            height: fit-content;                    
            font-weight: 500;
            font-size: 14px;
            color: #1E415F;
            background: #FFF;
            border: 1px solid #CCC;
            border-radius: 6px;
            padding: 5px 15px;
        }
        .made_in::before {                
            background-image: url(https://i.ibb.co/hcttzx7/image-62.png);
            display: inline-block;            
            height: 10px;
            width: 20px;
            margin-right: 7px;
            border-radius: 1px;
            content: "";
        }  
        .ship-destination *{
            font-size: 14px;
            color: #1E4670;
        }
        .ship-destination__span--date {
            font-weight: 400;
        }
        .on-select {
            color: #1E415F;
            background: none;
            width: 39%;
            border: none;
            color: inherit;
            text-decoration: underline;
            font-weight: 500;
            font-size: 14px;
        }
        .on-free-shipping-label {
            display: none !important;
        }
        .free-shipping {
            display: block;
            width: fit-content;
            margin: 10px 0;
            padding: 1px 10px;
            font-family: 'Roboto', sans-serif !important;
            font-weight: 500;
            color: #FFFFFF !important;
            background: #4090D1;
            border-radius: 5px;
        }
        .stock {
            margin: 15px 0;
        }
        .stock__header {
            font-family: Roboto;
            font-style: normal;
            color: #299546 !important;
            font-weight: 700 !important;
            font-size: 16px !important;
            line-height: 19px !important;
            margin: 10px 0;
        }
        .stock__select {
            padding: 5px 15px;
            background: url(https://conversionratestore.github.io/projects/somnifix/new-pdp-V2/images/arrow-down.svg) no-repeat right #F6F6F6;
            border: 1px solid #1F405C;
            box-sizing: border-box;
            border-radius: 5px;
            height: 37px;
            width: 106px;
            margin-right: 5px;
            font-size: 16px;
            -webkit-appearance: none;
            background-position-x: 75px;
        }
        .stock__pack {
            display: inline-block;
            color: #1E415F;
        }       
        .subscribe-custom {
            display: flex;
            flex-direction: row;
            color: #1E4670;
            background: rgba(242, 180, 19, 0.1);;
            border: none;
            border-radius: 5px;            
            padding: 15px;
            margin: 10px 0;            
        }
        .subscribe-custom__checkbox-wrapper {
            margin-right: 15px;
        }
        .subscribe-custom__text-wrapper {
            display: flex;
            flex-direction: column;
        }
        .subscribe-custom p{
            font-size: 14px;
            line-height: 17px !important;
            font-weight: 400;            
        }
        h5.subscribe-custom__header {
            margin-bottom: 10px;
            color: #1E4670;
            font-family: "Roboto";
            font-weight: 500;
            display: inline;
            font-size: 16px;
            line-height: 16px;
        }            
        .subscribe-custom__header span{
            color: #F27113;
        }
        .subscribe-custom__checkbox {
            transform: scale(1.4);
            margin: 0 5px 0 0;            
        }
        .addcart {
            display:flex;
            margin-top: auto;             
        }
        .addcart__button{
            width: 100%;
            color: #FFF;
            border: none;
            padding: 15px 0;            
            margin: 15px 0; 
            font: inherit;
            cursor: pointer;
            outline: inherit;
            background: #1F405C;
            border-radius: 100px;
        }
        .moneyback {
            height: auto;
            display:flex;
            justify-content: center;
            align-items: center;
            margin: 0;
        }
        .moneyback img {
            width: 78px;
            height: 64px;
        }
        .moneyback p{
            font-weight: 500;
            font-size: 16px;
            line-height: 126.19%;
            margin: 10px;
            color: #1E415F;
        }        
    </style>
    `,
);

const shippingPriceWrapper = document.createElement('div');
shippingPriceWrapper.classList.add('packs-wrapper');
shippingPriceWrapper.append(
    document.querySelectorAll('.on-pack-wrapper')[3],
    document.querySelectorAll('.on-pack-wrapper')[4],
    document.querySelectorAll('.on-pack-wrapper')[5],
);

const madeIn = '<span class="made_in">Made in USA</span>';

const options = [];

for (let i = 1; i <= 20; i++) {
    options.push(
        `<option value="${i}" data-value="${i}">Qty: ${i}</option>`,
    );
}

document.querySelectorAll('.product__images')[1].insertAdjacentHTML(
    'afterend',
    `
    <div class="shipping one-half column medium-down--one-whole">
        <div class="shipping-inner">
            <div class="swatchCustom">
                <p class="swatchCustom__heading">Pack size: </p>
                <div class="swatchCustom__item nosale swatchCustom__item--item1" 
                data-variant="32115046023283" >
                    <div class="swatchCustom__image-wrapper">
                        <img src="https://conversionratestore.github.io/projects/somnifix/new-pdp-V2/images/one-box.png" alt="pack">
                    </div>
                    <div class="swatchCustom__text">
                        <span class="week">4-week pack</span>
                        <span class="days">28 strips - 28 days</span>
                        <span class="price">$21.99 USD</span>
                    </div>
                </div>
                <div class="swatchCustom__item swatchCustom__item--item2 swatchCustom__item--active" data-variant="32115046056051">
                    <div class="swatchCustom__image-wrapper">
                        <img src="https://conversionratestore.github.io/projects/somnifix/new-pdp-V2/images/three-boxes.png" alt="pack">
                    </div>
                    <div class="swatchCustom__text">
                        <span class="week">12-week pack</span>
                        <span class="days">84 strips - 84 days</span>
                        <span class="price">$55.97 USD</span>
                        <span class="price--strikeout">$59.97 USD</span>
                        <span class="sale">Save 7%</span>
                    </div>
                </div>    
                <div class="swatchCustom__item swatchCustom__item--item3" data-variant="32115046940787">
                    <div class="swatchCustom__image-wrapper">
                        <img src="https://conversionratestore.github.io/projects/somnifix/new-pdp-V2/images/five-boxes.png" alt="pack">
                    </div>
                    <div class="swatchCustom__text">
                        <span class="week">12-month pack</span>
                        <span class="days">365 strips - 365 days</span>
                        <span class="price">$219.97 USD</span>
                        <span class="price--strikeout">$230.97 USD</span>
                        <span class="sale">Save 17%</span>
                    </div>
                </div> 
            </div>
            <div class="checklist">
                <ul>
                    <li>Promote nose breathing</li>
                    <li>Reduce open-mouth snoring</li>
                    <li>Boost CPAP exprerience</li>
                    <li>Improve sleep quality</li>
                </ul> 
            </div>            
            <div class="ship-destination">
                <span class ="ship-destination__span--ship">Ship to: </span>
                <p>Est. Delivery <span class="ship-destination__span--date">24 Sep - 26 Sep</span></p>
                <span class="free-shipping">Free shipping</span>
            </div>
            <div class="stock">
                <h4 class="stock__header">In Stock.</h4>
                <select class="stock__select">
                ${options}
                </select>
                <p class="stock__pack">1 pack = 84 strips</p>
            </div>
            <div class="subscribe-custom">
                <div class="subscribe-custom__checkbox-wrapper">
                    <input class="subscribe-custom__checkbox" type="checkbox">    
                </div>
                <div class="subscribe-custom__text-wrapper">
                    <h5 class="subscribe-custom__header">Subscribe and <span>save 10%</span></h5>
                    <p class="subscibe-custom__info">Auto delivery every 3 month for $49.97.</p>
                    <p>Cancel anytime.</p>
                </div>   
            </div>
            <div class="addcart">
                <button class="addcart__button">Add to cart</button>
            </div>
            <div class="moneyback">
                <img src="https://i.ibb.co/kXqgv3n/image-44-2.png" alt="moneyback"/><p>30-day Money-Back <br />Guarantee</p>
            </div>
        </div>
    </div>
    `,
);

document
    .querySelector('.swatchCustom')
    .insertAdjacentElement('afterend', shippingPriceWrapper);

shippingPriceWrapper.insertAdjacentHTML('beforeend', madeIn);

document
    .querySelector('.ship-destination__span--ship')
    .insertAdjacentElement(
        'afterend',
        document.querySelectorAll('.on-select')[5],
    );

const swatchWrap = document.querySelector('.swatchCustom');
const swatchItem = document.querySelectorAll('.swatchCustom__item');

for (let i = 0; i < swatchItem.length; i++) {
    swatchItem[i].addEventListener('click', function () {
        document.querySelector('.stock__select').disabled = false;
        document.querySelector(
            '.subscribe-custom__checkbox',
        ).checked = false;

        let current = document.getElementsByClassName(
            'swatchCustom__item--active',
        );
        current[0].className = current[0].className.replace(
            ' swatchCustom__item--active',
            '',
        );
        this.className += ' swatchCustom__item--active';

        if (
            swatchItem[0].classList.contains(
                'swatchCustom__item--active',
            )
        ) {
            document.querySelector(
                '.subscribe-custom',
            ).style.display = 'none';
        } else {
            document.querySelector(
                '.subscribe-custom',
            ).style.display = 'block';
        }

        document.querySelector('.stock__select').value = 1;
    });
}

for (let i = 1; i < swatchWrap.children.length; i++) {
    document
        .querySelector('.swatchCustom')
        .children[i].addEventListener('click', function () {
            if (i === 0) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: 'event-to-ga',
                    eventCategory: 'Exp — New PDP (Variant 2/A)',
                    eventAction: 'click on button 4-week pack',
                    eventLabel: 'Section: Pack size',
                });
            } else if (i === 1) {
                document.querySelector(
                    '.subscibe-custom__info',
                ).innerText =
                    'Auto delivery every 3 month for $49.97.';
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: 'event-to-ga',
                    eventCategory: 'Exp — New PDP (Variant 2/A)',
                    eventAction: 'click on button 12-week pack',
                    eventLabel: 'Section: Pack size',
                });
            } else if (i === 2) {
                document.querySelector(
                    '.subscibe-custom__info',
                ).innerText =
                    'Auto delivery every 12 month for $199.97.';
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    event: 'event-to-ga',
                    eventCategory: 'Exp — New PDP (Variant 2/A)',
                    eventAction: 'click on button 12-month pack',
                    eventLabel: 'Section: Pack size',
                });
            }

            document
                .querySelectorAll('.swatch-element')
                [i + 2].click();

            upgrade();
        });
}

document.querySelectorAll('.swatch-element')[4].click();

function upgrade(currentOptionValue) {
    let stockStrips = document
        .querySelector('.swatchCustom__item--active .days')
        .innerText.replace(/ .*/, '');

    if (currentOptionValue === undefined) {
        document.querySelector(
            '.stock__pack',
        ).innerHTML = `1 pack = ${stockStrips} strips`;
    } else {
        document.querySelector(
            '.stock__pack',
        ).innerHTML = `${currentOptionValue} packs = ${
            stockStrips * currentOptionValue
        } strips`;
    }
}

document
    .querySelector('.stock__select')
    .addEventListener('change', (e) => {
        let currentOptionValue =
            e.target.options[e.target.selectedIndex].dataset.value;

        let initialValue = document
            .querySelectorAll('.active .modal_price.subtitle')[1]
            .getElementsByClassName('money')[0]
            .dataset.currencyUsd.replace(/[^0-9.]/g, '');

        let tempMoneyValue = initialValue * currentOptionValue;

        document
            .querySelectorAll('.active .modal_price.subtitle')[1]
            .getElementsByClassName(
                'money',
            )[0].innerText = `$${Number(
            tempMoneyValue.toFixed(2),
        )} USD`;

        upgrade(currentOptionValue);

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            event: 'event-to-ga',
            eventCategory: 'Exp — New PDP (Variant 2/A)',
            eventAction: 'click on select — quantity',
        });
    });

document
    .querySelector('.subscribe-custom__checkbox')
    .addEventListener('change', (e) => {
        if (e.currentTarget.checked) {
            upgrade();
            document.querySelector('.stock__select').disabled = true;
            document.querySelector('.stock__select').value = 1;

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: 'event-to-ga',
                eventCategory: 'Exp — New PDP (Variant 2/A)',
                eventAction:
                    'click on checkbox — Subscribe and save 10%',
            });

            if (
                document
                    .querySelectorAll('.swatchCustom__item')[1]
                    .classList.contains('swatchCustom__item--active')
            ) {
                document
                    .querySelectorAll(
                        '.active .modal_price.subtitle',
                    )[1]
                    .getElementsByClassName('money')[0].innerText =
                    '$49.97 USD';
            } else if (
                document
                    .querySelectorAll('.swatchCustom__item')[2]
                    .classList.contains('swatchCustom__item--active')
            ) {
                document
                    .querySelectorAll(
                        '.active .modal_price.subtitle',
                    )[1]
                    .getElementsByClassName('money')[0].innerText =
                    '$199.97 USD';
            }
        } else if (e.currentTarget.checked === false) {
            if (
                document
                    .querySelectorAll('.swatchCustom__item')[1]
                    .classList.contains('swatchCustom__item--active')
            ) {
                document
                    .querySelectorAll(
                        '.active .modal_price.subtitle',
                    )[1]
                    .getElementsByClassName('money')[0].innerText =
                    '$55.97 USD';
            } else if (
                document
                    .querySelectorAll('.swatchCustom__item')[2]
                    .classList.contains('swatchCustom__item--active')
            ) {
                document
                    .querySelectorAll(
                        '.active .modal_price.subtitle',
                    )[1]
                    .getElementsByClassName('money')[0].innerText =
                    '$219.97 USD';
            }
            document.querySelector('.stock__select').disabled = false;
        }
    });

document.querySelector('.ship-destination__span--date').innerText =
    document.querySelectorAll(
        '.on-select',
    )[5].children[0].dataset.value;

document
    .querySelectorAll('.on-select')[5]
    .addEventListener('change', (e) => {
        let value =
            e.target.options[e.target.selectedIndex].dataset.value;

        document.querySelector(
            '.ship-destination__span--date',
        ).innerText = value;

        document.querySelector('.free-shipping').innerText =
            document.querySelector(
                '.on-free-shipping-label',
            ).innerText;
    });

document
    .querySelector('.addcart__button')
    .addEventListener('click', () => {
        const itemId = document.querySelector(
            '.swatchCustom__item--active',
        ).dataset.variant;
        const itemQuantity =
            document.querySelector('.stock__select').value;

        if (
            document.querySelector('.subscribe-custom__checkbox')
                .checked
        ) {
            if (itemId === '32115046056051') {
                addItemToCart(
                    '31272810676339',
                    1,
                    '3',
                    'Month',
                    '95310',
                );
            } else if (itemId === '32115046940787') {
                addItemToCart(
                    '32190023958643',
                    1,
                    '12',
                    'Month',
                    '95310',
                );
            }
        } else {
            addItemToCart(itemId, itemQuantity);
        }
    });

(function (h, o, t, j, a, r) {
    h.hj =
        h.hj ||
        function () {
            (h.hj.q = h.hj.q || []).push(arguments);
        };
    h._hjSettings = { hjid: 1271698, hjsv: 6 };
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
window.hj =
    window.hj ||
    function () {
        (hj.q = hj.q || []).push(arguments);
    };
hj('trigger', 'optimize_pdp');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    event: 'event-to-ga',
    eventCategory: 'Exp — New PDP',
    eventAction: 'loaded',
});
