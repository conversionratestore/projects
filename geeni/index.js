let dir = ``;

let styleBase = `
<style>
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
</style>`;

let stylePDP = `
<style class="style-pdp">
    .product__alternates, .selector-wrapper--qty {
        display: none;
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
    .price {
        color: var(--font-h, #1B1B1B);
        font-weight: 600;
    }
    .pack_size li p.price {
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
    .product__price-and-badge .product__price p.price:before {
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
    }
</style>`;

let media = window.matchMedia("(max-width: 768px)").matches;

let discountChange = true;

let init = setInterval(() => {
    
    // PDP
    if (window.location.href.includes('/products/')) {
        if (!document.querySelector('.style-pdp')) { //add style 
            document.body.insertAdjacentHTML('afterbegin', styleBase)
            document.body.insertAdjacentHTML('afterbegin', stylePDP)
        }

        if (document.querySelector('.product__title-and-price') &&
            document.querySelector('.product__reviews') && 
            !document.querySelector('.manufacturer')
        ) {
          
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
                document.querySelector('.product-single__gallery').insertAdjacentHTML('afterend', `
                    <div class="flex-center manufacturer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.75 9.75H20.71C20.5005 8.93115 20.1797 8.15479 19.752 7.43042L20.4851 6.69653C20.7781 6.40356 20.7781 5.92896 20.4851 5.63599L18.364 3.51489C18.071 3.22192 17.5964 3.22192 17.3035 3.51489L16.5696 4.24805C15.8452 3.82031 15.0688 3.49951 14.25 3.29004V2.25C14.25 1.83545 13.9146 1.5 13.5 1.5H10.5C10.0854 1.5 9.75 1.83545 9.75 2.25V3.29004C8.93115 3.49951 8.15479 3.82031 7.43042 4.24805L6.69653 3.51489C6.40356 3.22192 5.92896 3.22192 5.63599 3.51489L3.51489 5.63599C3.22192 5.92896 3.22192 6.40356 3.51489 6.69653L4.24805 7.43042C3.82031 8.15479 3.49951 8.93115 3.29004 9.75H2.25C1.83545 9.75 1.5 10.0854 1.5 10.5V13.5C1.5 13.9146 1.83545 14.25 2.25 14.25H3.29004C3.49951 15.0688 3.82031 15.8452 4.24805 16.5696L3.51489 17.3035C3.22192 17.5964 3.22192 18.071 3.51489 18.364L5.63599 20.4851C5.92896 20.7781 6.40356 20.7781 6.69653 20.4851L7.43042 19.752C8.15479 20.1797 8.93115 20.5005 9.75 20.71V21.75C9.75 22.1646 10.0854 22.5 10.5 22.5H13.5C13.9146 22.5 14.25 22.1646 14.25 21.75V20.71C15.0688 20.5005 15.8452 20.1797 16.5696 19.752L17.3035 20.4851C17.5964 20.7781 18.071 20.7781 18.364 20.4851L20.4851 18.364C20.7781 18.071 20.7781 17.5964 20.4851 17.3035L19.752 16.5696C20.1797 15.8452 20.5005 15.0688 20.71 14.25H21.75C22.1646 14.25 22.5 13.9146 22.5 13.5V10.5C22.5 10.0854 22.1646 9.75 21.75 9.75ZM16.5 13.5C16.5 14.0713 16.1829 14.5854 15.6716 14.8411L11.9999 16.8002L8.31152 14.833C7.8175 14.5854 7.5 14.0713 7.5 13.5V9.25241C7.5 8.96617 7.66292 8.70488 7.91995 8.57895L11.3291 6.9082C11.5364 6.80493 11.7682 6.75 12 6.75C12.2318 6.75 12.4636 6.80493 12.6709 6.9082L16.0821 8.59264C16.338 8.71898 16.5 8.97968 16.5 9.26509V13.5Z" fill="#023F88"/>
                            <path d="M15.3352 9.0791L12.3352 7.5791C12.1243 7.47363 11.8752 7.47363 11.6643 7.5791L8.66429 9.0791C8.63824 9.09215 8.61778 9.11201 8.59375 9.12772L11.9997 10.8307L15.4057 9.12772C15.3817 9.11201 15.3612 9.09215 15.3352 9.0791Z" fill="#023F88"/>
                            <path d="M8.25 13.5026C8.25 13.7867 8.4104 14.0464 8.66455 14.1735L11.625 15.7526V11.4844L8.25 9.79688V13.5026Z" fill="#023F88"/>
                            <path d="M12.375 15.7526L15.3354 14.1735C15.5896 14.0464 15.75 13.7867 15.75 13.5026V9.79688L12.375 11.4844V15.7526Z" fill="#023F88"/>
                        </svg>
                        Direct from the manufacturer
                    </div>`)
            }
        }

        //redesign packs
        if (document.querySelectorAll('.product__alternates .alternative-options > li').length > 0 &&
            document.querySelector('.manufacturer') &&
            !document.querySelector('.pack_size')
        ) {
           
            document.querySelector('.manufacturer').insertAdjacentHTML('afterend', `
            <div class="pack_size">
                <p>Pack size</p>
                <ul></ul>
            </div>`);

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
                            <p class="price">${item.dataset.price}</p>
                        </div>
                        ${saved > 0 ? '<div class="saved">Save $' + saved + '</div>' : ''}
                    </li>`)
                }

                if (item.querySelector('.alternative-options__item--active')) {
                    document.querySelector('.product__price-and-badge .product__price').innerHTML = `
                    <p class="name">${item.querySelector('.alternative-options__item-label').innerHTML}</p>
                    <p class="price d-flex items-center">${item.dataset.price}</p>
                    <p class="compare">${item.dataset.compare != '$0.00' ? item.dataset.compare : ''}</p>
                    ${saved != '' ? '<div class="saved">  Save $' + saved + '</div>' : ''}`;
                }
            })

            document.querySelector('.payments-exp').after(document.querySelector('.shop-pay-terms'))

        }

        if (document.querySelector('.cart-drawer.is-open')) {
            discountChange = true;
        }

        if (document.querySelector('.product__block.product__price-and-badge') &&
            !document.querySelector('.cart-drawer.is-open') &&
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

                document.querySelector('.product__block.product__price-and-badge').insertAdjacentHTML('afterend', `
                <div class="discount d-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                        <circle cx="14" cy="14.25" r="14" fill="#E8F8FE"/>
                        <path d="M8.53864 8H13.3148C13.8598 8 14.3726 8.22387 14.7573 8.60765L20.399 14.2364C21.2003 15.036 21.2003 16.3472 20.399 17.1468L16.1357 21.4003C15.3343 22.1999 14.02 22.1999 13.2187 21.4003L7.57699 15.7716C7.19233 15.3878 7 14.8761 7 14.3324V9.53512C7 8.7036 7.67315 8 8.53864 8ZM10.5902 12.6054C11.1351 12.6054 11.6159 12.1576 11.6159 11.582C11.6159 11.0383 11.1351 10.5585 10.5902 10.5585C10.0132 10.5585 9.5644 11.0383 9.5644 11.582C9.5644 12.1576 10.0132 12.6054 10.5902 12.6054Z" fill="#023F88"/>
                    </svg>  ${discount}</div>`)

            })
        }

        if (document.querySelector('.selector-wrapper--qty') && 
            !document.querySelector('.qty_block')
        ) {
            document.querySelector('.selector-wrapper--qty').insertAdjacentHTML('afterend', `
            <div class="d-flex items-end">
                <div class="qty_block">
                    <p>QTY</p>
                    <div class="d-flex calc_qty">
                        <button type="button" class="btn_qty btn_qty_minus" onclick="qtyChange(event)"></button>
                        <input type="number" class="input_qty" value="1" onchange="qtyChange(event)">
                        <button type="button" class="btn_qty btn_qty_plus" onclick="qtyChange(event)"></button>
                    </div>
                </div>
                <div class="compatibility_block">
                    <img src="${dir}compatibility_google.svg" alt="google">
                </div>
                <div class="compatibility_block">
                    <img src="${dir}compatibility_alexa.svg" alt="alexa">
                </div>
            </div>`)
        }
    }
});

//selected pack (7, 11)
let selectedPack = (event) => {
    let _this = event.target;

    if (!_this.classList.contains('selected')) {
        console.log(_this.parentElement)
        _this.parentElement.querySelector('.selected').classList.remove('selected')
    }
    _this.classList.add('selected')

    let pack = _this.querySelector('.name').innerHTML,
        price = _this.querySelector('.price').innerHTML,
        compare = _this.querySelector('.compare').innerHTML,
        saved = _this.querySelector('.saved') ?  _this.querySelector('.saved').innerHTML : '';

    _this.closest('.pack_size').parentElement.querySelector('.product__price-and-badge .product__price').innerHTML = `
        <p class="name">${pack}</p>
        <p class="price d-flex items-center">${price}</p>
        <p class="compare">${compare}</p>
        ${saved != '' ? '<div class="saved">' + saved + '</div>' : ''}`; 

    _this.closest('.pack_size').parentElement.querySelector('.product__form [name="id"]').value = _this.dataset.id;

    // HERE add code shop-pay-terms change
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

//change qty 
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

