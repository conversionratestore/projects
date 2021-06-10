window.onload  = function () {
    let style = `
        <style>
            button {
                outline: none;}
            input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0; }
            input[type=number] {
                -moz-appearance: textfield;}
            .homeslider__container {
                margin-bottom: 20px!important;
                margin-left: 10px!important;}
            .gallery {
                margin: 13px 0 0 10px;
                display: flex;}
            .gallery dd span {
                width: 100%;
                height: 140px;
                margin-bottom: 5px;
                display: inline-flex;}
            .gallery dd span a {
                margin: auto;}
            .gallery dd a {
                word-break: break-word;}
            .gallery dd a br {
                display: none;}
            .gallery dd {
                width: 140px;
                line-height: 15px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: left;}
            .gallery dd b {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                font-weight: 600;
                font-size: 18px;
                padding-top: 7px;
                margin: auto 0 0;
                line-height: 1;}
            .gallery dd b s{
                font-weight: 450;
                font-size: 12px;
                line-height: 15px;
                text-decoration-line: line-through;
                margin-left: 5px;
                color: #9E9E9E;}
            .gallery-parent {
                padding-bottom: 30px;}
            h2.title, .title {
                text-align: left;
                padding-left: 10px;
                font-size: 24px;
                line-height: 29px;
                font-weight: 600;
                color: #222222;
                text-transform: capitalize;}
            .homepage-container {
                display: grid;}
            .trustpilot-widget-container {
                order: 3;}
            .add-to-cart {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 8px 0 0;
                width: 100%;}
            .add-to-cart button {
                color: #FFFFFF;
                padding: 0 9px;
                margin-bottom: 0;
                line-height: 33px!important;
                outline: none;
                cursor: pointer;
                background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
                border: 0.5px solid #780F11;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                text-align: center;
                text-transform: capitalize;}
            .add-to-cart input {
                font-size: 18px;
                line-height: 20px;
                color: #000000;
                padding: 6.5px 0;
                width: 33px;
                text-align: center;
                background: #EEEEEE;
                border: 0.5px solid #CCCCCC;
                border-radius: 4px;}   
            .show-more {
                width: calc(100% - 213px);
                padding: 0 28px;
                font-weight: 450;
                font-size: 15px;
                line-height: 33px;
                text-align: center;
                text-transform: capitalize;
                color: #666666;
                display: block;
                margin: 20px 0 0 10px;
                background: #EEEEEE;
                border: 0.5px solid #CCCCCC;
                border-radius: 4px;}     
            .popup {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100vh;
                z-index: 999999;
                display: inline-flex;
                overflow-y: auto;
                background: rgba(64, 62, 62, 0.46);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;}
            .popup.isActive {
                opacity: 1;
                pointer-events: auto;}
            .popup__container {
                margin: auto;
                background: #FFFFFF;
                border-radius: 4px;
                max-width: 622px;
                width: 100%;
                padding: 20px 20px 40px;}
            .close {
                position: relative;
                width: 46px;
                height: 46px;
                background-color: transparent;
                border: none;
                cursor: pointer;}
            .close:before, .close:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                background-color: #DADADA;
                width: 20px;
                height: 2px;}
            .close:before {
                transform: translate(-50%,-50%) rotate(45.2deg);}
            .close:after {
                transform: translate(-50%,-50%) rotate(-45.2deg);} 
            .popup__head {
                display: flex;
                justify-content: space-between;
                align-items: center;}
            .popup .altPayment {
                width: 100%;}
            .popup .product-description b a br{
                display: none; }
            .popup h2.title, .title {
                padding-left: 0;}
            h3.title3, .title3 {
                text-align: left;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-transform: capitalize;
                color: #222222}
            .popup .altPayment th {
                padding: 16px 0;
                border-bottom-color: #EEEEEE;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                text-transform: capitalize;
                color: #CCCCCC;
                border-left: none;}
            .popup .altPayment, .popup table.altPayment td {
                border: none}
            .popup__product-total {
                background: #EEEEEE;
                border: 1px solid #EEEEEE;}
            .altPayment td .product-cell-inner span {
                flex-shrink: 0;
                border: 0.5px solid #EEEEEE;
                padding: 0; 
                width: 98px;
                height: 98px;}
            .popup__product div.product-cell-inner {
                padding: 0 10px 0 0;
                display: flex;}
            .popup table.altPayment p.product-description{
                width: fit-content;
                word-break: break-word;
                margin-top: 0;}
            .popup table.altPayment td {
                padding: 0;}
            .popup table.altPayment .popup__product td {
                padding: 0 0 10px 0; }
            .quantity-btn {
                display: none;
                width: 28px;
                cursor: pointer;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                text-transform: capitalize;
                background-color: transparent;
                color: #666666;
                border: none;
                padding: 2px 0;}
            .quantity-btn[disabled] {
                color: #CCCCCC;}
            .quantity {
                background: #FFFFFF;
                border: 0.5px solid #CCCCCC;
                width: 30px;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                padding: 5px 0;
                color: #000000;}
            .popup .altTd b {
                font-weight: 450;
                font-size: 18px;
                text-align: right;
                text-transform: capitalize;
                color: #222222;}
            .popup .altTd.total-values b {
                font-weight: 600;}
            .popup .altTd b:first-child {
                font-size: 14px;
                text-transform: capitalize;
                color: #666666;
                margin-bottom: 5px;
                font-weight: 400;}
            .popup .altTd.total-values b:first-child {
                font-weight: 450;}
            .quantity-row {
                padding-left: 28px;
                display: flex;}
            .flex-center {
                display: flex;
                align-items: center;}
            .popup .unit-price, .popup .total-price {
                font-weight: normal;
                font-size: 14px;
                line-height: 29px;
                color: #000000;}
            .popup .unit-price b{
                font-weight: normal;}
            .popup .total-price {
                font-weight: 600;}
            .popup .total-price b {
                font-weight: 600;}
            .popup .continue-shopping {
                display: flex; 
                background-color: transparent;
                align-items: center;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                border: none;
                text-decoration-line: underline;
                text-transform: capitalize;
                color: #222222;}
            .btn {
                background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
                border: 0.5px solid #780F11;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                line-height: 33px;
                text-align: center;
                text-transform: uppercase;
                color: #FFFFFF;
                padding: 0 22px;
                display: flex;
                align-items: center;}
            .btn img {
                margin-left: 5px;}
            .popup__bottom {
                // margin-bottom: 30px;
                padding: 20px 0;
                border-bottom: 0.5px solid #EEEEEE;
                display: flex;
                align-items: center;
                justify-content: space-between;}
            .popup img#checkout-button {
                margin-top: 0;
                width: 18px;
                height: 18px;}
            div.paypal-button, div.or-text, div.checkout {
                padding: 0;}
            .body table {
                scrollbar-width: thin;
                scrollbar-color: #CCCCCC #666666;}
            .body table::-webkit-scrollbar{
                background: #CCCCCC;
                width: 4px;
                height: 4px;}
            .body table::-webkit-scrollbar-thumb{
                background: #666666;}
            .slider-gallery{
                max-width: 510px;
                margin: 0 auto;
                padding-top: 15px;}
            .gallery .swiper-slide {
                padding: 0 ;
                width: calc(25% - 10px);
                margin-right: 10px;}
            .gallery .swiper-slide a {
                font-size: 10px;
                line-height: 12px;}
            .gallery .swiper-slide b  {
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;}
            .gallery .swiper-slide .add-to-cart button{
                font-size: 12px;
                line-height: 28px!important;
                padding: 0 5px;}
            .gallery .swiper-slide .add-to-cart input{
                padding: 4px 0; }
            .swiper-container {
                position: relative;}
            .swiper-button-prev, .swiper-button-next {
                position: absolute;
                border: none;
                cursor: pointer;
                top: 50%;
                transform: translateY(-50%);
                width: 36px;
                height: 36px;
                background: no-repeat center / contain}
            .swiper-button-prev {
                left: 0;
                background-image: url('https://i.ibb.co/m0Lv3wp/expand-more-24px.png');}
            .swiper-button-next {
                right: 0;
                background-image: url('https://i.ibb.co/v4MXXdd/expand-more-24px-1.png');}
            .gallery .swiper-slide {
                flex-shrink: 0;
                clear: both;}
            .slider-gallery {
                display: flex;}
            .before, .after {
                position: absolute;
                display: block;
                width: 25%;
                padding: 0;
                margin-top: 15px;
                width: calc(25% - 10px);
                margin-right: 10px;
                flex-shrink: 0;
                clear: both;}
            .before {
                margin-left: calc(50% - 10px);}
            .after {
                margin-left: calc(75% - 10px);}
            .bought-products {
                display: none;}
        </style>
    `;

    document.body.insertAdjacentHTML('afterbegin', style);

    let productsStored = [];
    let productsStoredTemporarily = [];
    let productsStoredUpdate = [];

    function sumTotalPrice() {
        let sum = 0;  
        document.querySelectorAll('.total-price b').forEach((totalPrice) => {
            sum += parseFloat(totalPrice.innerHTML);
            document.querySelectorAll('.total-values b').forEach((totalValues) => {
                totalValues.innerHTML = `$ ${sum.toFixed(2)}`;
            });
        });  
    }
    function quantityFun(el) {
        if (el.querySelector('.quantity').value < 2) {
            el.querySelector('.quantity').value = 1;
            el.querySelector('.quantity-btn_minus').disabled = true;
        } else {
            el.querySelector('.quantity-btn_minus').disabled = false;
        }
        el.querySelector('.quantity-row').addEventListener('change', () => {
            if (el.querySelector('.quantity').value < 2) {
                el.querySelector('.quantity').value = 1;
                el.querySelector('.quantity-btn_minus').disabled = true;
            } else {
                el.querySelector('.quantity-btn_minus').disabled = false;
            }
            el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
            sumTotalPrice();
        });
        el.querySelectorAll('.quantity-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.stopImmediatePropagation();
                let id = button.closest('.popup__product').dataset.productId,
                    idVariant = button.closest('.popup__product').dataset.productVariantId;
                if (button.className == 'quantity-btn quantity-btn_plus') {
                    button.previousElementSibling.value = +button.previousElementSibling.value + 1;
                    button.parentElement.querySelector('.quantity-btn_minus').disabled = false;
                }
                if (button.className == 'quantity-btn quantity-btn_minus') {
                    if (button.nextElementSibling.value < 2) {
                        button.nextElementSibling.value = 1;
                        button.disabled = true;
                    } else {
                        button.nextElementSibling.value = +button.nextElementSibling.value - 1;
                    } 
                }
                el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
                sumTotalPrice();
            });
        });
    }

    if (window.location.pathname == '/') {
        document.querySelector('.homeslider__img').setAttribute('src', 'https://i.ibb.co/n6Qc6LM/banner.jpg');
        document.querySelector('.homeslider__img').setAttribute('data-cfsrc', 'https://i.ibb.co/n6Qc6LM/banner.jpg');  

        document.querySelectorAll('.gallery').forEach( (item, index) => {
            let galleryWrapper = document.createElement('div');
            galleryWrapper.className = 'gallery-parent';

            let htmlTitle = `<h2 class="title"></h2>`;
            if (index < 6) {
                galleryWrapper.insertAdjacentHTML('afterbegin', htmlTitle); 
            }

            item.parentNode.appendChild(galleryWrapper);

            return galleryWrapper.appendChild(item);    
        });

        const galleryDd = document.querySelectorAll('.gallery dd');

        for (let i = 0; i < galleryDd.length; i++) { galleryDd[i].insertAdjacentHTML('beforeend', `<div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="1"></div>`); }

        const galleryParent = document.querySelectorAll('.gallery-parent');

        for (let i = 0; i < galleryParent.length; i++) {
            if (i < 5) { galleryParent[i].insertAdjacentHTML('beforeend', `<a href="#" class="show-more">Show more</a>`); }
        } 
       
        const arrTitle = ['New products','Ostomy','Wound care','Hand Sanitizing','Protective Gear','All products'], 
            galleryTitle = document.querySelectorAll('.title'),
            showMore = document.querySelectorAll('.show-more');

        for (let i = 0; i < arrTitle.length; i++) {
            galleryTitle[i].innerHTML = arrTitle[i];
            let changedTitle = arrTitle[i].split(' ').join('-').toLowerCase();
            if (i < 5) { showMore[i].setAttribute('href', `https://medicalmega.com/category/${changedTitle}`); }
        }

        document.querySelectorAll('.add-to-cart').forEach( (item) => {
            item.addEventListener('change', () => {
                if (item.querySelector('input').value <= 1) {
                    item.querySelector('input').value = 1;
                }
            });  
        });

        let popupShoppingCart = `
        <div class="popup">
            <div class="popup__container">
                <div class="popup__head">
                    <h2 class="title">Shopping cart</h2>
                    <button class="close" type="button"></button>
                </div>
                <table class="altPayment" width="98%" border="0" cellspacing="0" cellpadding="5">
                    <tbody>
                        <tr id="header-row">
                            <th align="left" width="44%">Product Name</th>
                            <th align="left" width="22%" style="padding-left: 17px;">Quantity</th>
                            <th align="left" width="17%">Price</th>
                            <th align="left" width="17%">Total</th>
                        </tr>
                        <tr class="body">
                            <td colspan="4" style="padding-top: 10px;">
                                <table style="max-height: 180px;min-height: 130px;overflow-y: auto;display: block;"> <tbody></tbody></table>
                            </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr class="popup__product-total">
                            <td class="altTd total-headings" style="padding:18px 10px 18px 0;text-align:right;line-height: 23px;" colspan="3">
                                <b>Sub Total :</b><br>
                                <b style="font-size:17px;">Grand Total:</b>
                            </td>
                            <td class="altTd total-values" style="padding:18px 0 18px 0;line-height: 23px;" align="left" valign="top">
                                <b>$ 7.25</b><br>
                                <b style="font-size:17px;">$7.25</b>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="popup__bottom">
                    <button type="button" class="continue-shopping">
                        <img src="https://i.ibb.co/6b6CBMg/Arrow-Left.png" alt="Continue" style="margin-right: 4px" wifth="18px" height="18px">
                        Back to Shopping
                    </button>
                    <div class="flex-center">
                        <div class="paypal-button">
                            <form action="https://medicalmega.com/guest-expresscheckout.php" method="POST" target="default" class="paypal-form-button">
                                <input type="image" name="submit" src="https://i.ibb.co/CJCszqD/btn-paywith-primary-l-1.png" border="0" align="top" alt="Check out with PayPal">
                            </form>
                        </div>
                        <div class="or-text"><p style="color:#222222; font-weight:600; padding: 5px 10px; margin: 0px">
                            OR</p>
                        </div>
                        <div class="checkout">
                            <a class="btn" href="https://medicalmega.com/checkout/step1">
                                Checkout Now
                                <img src="https://i.ibb.co/r5RKgLr/Arrow-Right.png" alt="Continue" id="checkout-button">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="bought-products">
                    <h3 class="title3">Also bought with this products</h3>
                    <div class="swiper-container">
                        <dl class="slider-gallery gallery"></dl>
                        <button class="swiper-button-prev" type="button"></button>
                        <button class="swiper-button-next" type="button"></button>
                    </div>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('beforeend', popupShoppingCart);

        let n = 0;
        while (n--) {
            document.querySelector('.slider-gallery').insertAdjacentHTML('beforeend', `
            <dd class="swiper-slide">
                <span>&nbsp;<a
                href="https://medicalmega.com/product/hand-sanitizer-purell-advanced-8-oz-alcohol-ethyl-gel-pump-bottle"><img
                    src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/160009233410181694495f5f78ae28234.jpg"
                    alt="Image Of Hand Sanitizer Purell Advanced 8 oz Alcohol Ethyl Gel Pump Bottle"></a>&nbsp;</span>
                <a
                    href="https://medicalmega.com/product/hand-sanitizer-purell-advanced-8-oz-alcohol-ethyl-gel-pump-bottle">
                    Hand Sanitizer<br>Purell Advanced 8<br>oz Alcohol Ethyl<br>Gel Pump Bottle
                </a>
                <b>
                    $
                    7.25 </b>
                <div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="1"></div>
            </dd>`);
        }
   
        document.querySelectorAll('.add-to-cart button').forEach( (item, index) => {
            item.addEventListener('click', () => {
                let valueP = 1;
                    valueP = +item.nextElementSibling.value,
                    num = +document.querySelector('.by_num span').innerHTML;
                document.querySelector('.by_num span').innerHTML = num + valueP;

                let parent = item.parentElement.closest('dd'),
                    srcImgProduct = parent.querySelector('img').src,
                    altImgProduct = parent.querySelector('img').alt,
                    titleProduct = parent.querySelectorAll('a')[1].innerHTML,
                    linkProduct = parent.querySelectorAll('a')[1].href,
                    priceProductAll = parent.querySelector('b').innerHTML,
                    splPrice = priceProductAll.split('$');

                let dataProductVariantId = item.closest('.product-card').getAttribute('data-product-variant-id'),
                    productId = item.closest('.product-card').getAttribute('data-product-id');

                let newElementProduct = `
                    <tr class="popup__product" data-product-id='${productId}' data-product-variant-id='${dataProductVariantId}'>
                        <td width="44%">
                            <div class="product-cell-inner">
                                <span> 
                                    <a href="${linkProduct}">
                                        <img src="${srcImgProduct}" alt="${altImgProduct}">
                                    </a>
                                </span>
                                <p class="product-description" align="left">
                                    <b>
                                        <a href="${linkProduct}" style="font-size:12px;line-height:15px;color:#000000;font-weight: normal;">${titleProduct}</a>
                                    </b>
                                </p>
                            </div>
                        </td>
                        <td width="22%" align="left">
                            <div class="quantity-row">
                                <button type="button" class="quantity-btn quantity-btn_minus" disabled>−</button>
                                <input type="number" name="quantity" value="0" class="quantity" data-val="${valueP} readonly">
                                <button type="button" class="quantity-btn quantity-btn_plus">+</button>
                            </div>
                        </td>
                        <td width="17%" class="unit-price" align="left">$ <b>${parent.querySelector('b s') ? splPrice[2]: splPrice[1]}</b></td>
                        <td width="17%" class="total-price" align="left">$ <b></b></td>
                    </tr>
                `;
            
                if (document.querySelector('.body table tbody').innerHTML == '' || !document.querySelector(`.popup__product[data-product-id='${productId}']`)) {
                    document.querySelector('.body table tbody').insertAdjacentHTML('afterbegin', newElementProduct);
                } 
                if (document.querySelector(`.popup__product[data-product-id='${productId}']`)) {
                    document.querySelectorAll(`.popup__product[data-product-id='${productId}']`).forEach((el) => {
                        el.querySelector('.quantity').value = parseInt(item.nextElementSibling.value) + parseInt(el.querySelector('.quantity').value); 
                    });
                }
                document.querySelector('.popup').classList.add('isActive');

                document.querySelectorAll(`.popup__product[data-product-id='${productId}']`).forEach((el) => {
                    quantityFun(el);
                    el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
                    sumTotalPrice();
                });

                if (localStorage.getItem("productsStoredTemporarily") != '') {
                    productsStoredTemporarily = JSON.parse(localStorage.getItem("productsStoredTemporarily"));
                    for (let i = 0; i < productsStoredTemporarily.length; i++) {
                        if (productsStoredTemporarily[i].product_id != undefined) {
                            if (productsStoredTemporarily[i].product_id === productId) {
                                productsStoredTemporarily[i].quantity = item.nextElementSibling.value;
                            } else {
                                productsStoredTemporarily.push({
                                    'product_id': productId,
                                    'quantity': item.nextElementSibling.value,
                                    'price': parent.querySelector('b s') ? splPrice[2]: splPrice[1],
                                    'product_variant_id': dataProductVariantId,
                                });
                                localStorage.setItem('productsStoredTemporarily', JSON.stringify(productsStoredTemporarily));
                                localStorage.setItem('productsStored', JSON.stringify(productsStoredTemporarily));
                            }
                        }
                    }
                } else {
                    productsStoredTemporarily.push({
                        'product_id': productId,
                        'quantity': item.nextElementSibling.value,
                        'price': parent.querySelector('b s') ? splPrice[2]: splPrice[1],
                        'product_variant_id': dataProductVariantId,
                    });
                    localStorage.setItem('productsStoredTemporarily', JSON.stringify(productsStoredTemporarily));
                    localStorage.setItem('productsStored', JSON.stringify(productsStoredTemporarily));
                }
                productsStoredTemporarily = JSON.parse(localStorage.getItem("productsStoredTemporarily"));
                for (let i = 0; i < productsStoredTemporarily.length; i++) {
                    fetch('/cart.html', {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        method: "POST",
                        body: `product_variant_id=${productsStoredTemporarily[i].product_variant_id}&quantity=${productsStoredTemporarily[i].quantity}&product_id=${productsStoredTemporarily[i].product_id}&add_to_cart=variant`
                    }).then(()=>{
                        localStorage.setItem("productsStoredTemporarily",'');
                        productsStoredTemporarily = []
                    })
                }
            });  
        });  

        if (document.querySelector('.by_num span').innerHTML == '0') {
            localStorage.setItem('productsStored', '');
            localStorage.setItem('productsStoredTemporarily', '');
            localStorage.setItem('productsStoredUpdate', '');
        }
        if (document.querySelector('.by_num span').innerHTML != '0') {
            let cartItems = JSON.parse(localStorage.getItem("productsStored"));
            if (cartItems) {
                for (let i = 0; i < cartItems.length; i++) {
                    document.querySelectorAll(`.product-card[data-product-id='${cartItems[i].product_id}']`).forEach((item) => { 
                        let srcImgProduct = item.querySelector('img').src,
                            altImgProduct = item.querySelector('img').alt,
                            titleProduct = item.querySelectorAll('a')[1].innerHTML,
                            linkProduct = item.querySelectorAll('a')[1].href,
                            priceProductAll = item.querySelector('b').innerHTML,
                            splPrice = priceProductAll.split('$');

                        let dataProductVariantId = item.getAttribute('data-product-variant-id'),
                            productId = item.getAttribute('data-product-id');
                
                        let newElementProduct = `
                            <tr class="popup__product" data-product-id='${productId}' data-product-variant-id='${dataProductVariantId}'>
                                <td width="44%">
                                    <div class="product-cell-inner">
                                        <span> 
                                            <a href="${linkProduct}">
                                                <img src="${srcImgProduct}" alt="${altImgProduct}">
                                            </a>
                                        </span>
                                        <p class="product-description" align="left">
                                            <b>
                                                <a href="${linkProduct}" style="font-size:12px;line-height:15px;color:#000000;font-weight: normal;">${titleProduct}</a>
                                            </b>
                                        </p>
                                    </div>
                                </td>
                                <td width="22%" align="left">
                                    <div class="quantity-row">
                                        <button type="button" class="quantity-btn quantity-btn_minus" disabled>−</button>
                                        <input type="number" name="quantity" value="0" class="quantity" data-val="${cartItems[i].quantity}">
                                        <button type="button" class="quantity-btn quantity-btn_plus">+</button>
                                    </div>
                                </td>
                                <td width="17%" class="unit-price" align="left">$ <b>${item.querySelector('b s') ? splPrice[2]: splPrice[1]}</b></td>
                                <td width="17%" class="total-price" align="left">$ <b></b></td>
                            </tr> `;   

                        if (document.querySelector('.body table tbody').innerHTML == '' || !document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}']`)) {
                            document.querySelector('.body table tbody').insertAdjacentHTML('afterbegin', newElementProduct);
                        } 
                        if (document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}']`)) {
                            document.querySelectorAll(`.popup__product[data-product-id='${cartItems[i].product_id}']`).forEach((el) => {
                                el.querySelector('.quantity').value = parseInt(cartItems[i].quantity) + parseInt(el.querySelector('.quantity').value); //
                                quantityFun(el);
                            });
                        }

                        document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}'] .total-price b`).innerHTML = (parseFloat(document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}'] .quantity`).value) * parseFloat(document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}'] .unit-price b`).innerHTML)).toFixed(2);
                        sumTotalPrice();
                    });   
                }
            }
        } 

        document.querySelector('.close').addEventListener('click', () => {
            document.querySelector('.popup').classList.remove('isActive');   
        });
        document.querySelector('.popup .continue-shopping').addEventListener('click', () => {
            document.querySelector('.popup').classList.remove('isActive');
        });
        document.querySelector('.popup .checkout .btn').addEventListener('click', () => {
        });
        let container = document.querySelector('.slider-gallery');

        document.querySelector('.swiper-button-prev').addEventListener('click', () => {
            scrollAmount = 0;
            let slideTimer = setInterval(function(){
                container.scrollLeft -= 25;
                scrollAmount += 10;
                if(scrollAmount >= 50){
                    window.clearInterval(slideTimer);
                }
            }, 25);
        });

        document.querySelector('.swiper-button-next').addEventListener('click', () => {
            scrollAmount = 0;
            let slideTimer = setInterval(function() {
                container.scrollLeft += 25;
                scrollAmount += 10;
                if(scrollAmount >= 50){
                    window.clearInterval(slideTimer);
                }
            }, 25);
        });

        document.querySelector('.popup .body').addEventListener('change', () => {
            productsStoredUpdate = [];
            localStorage.setItem('productsStoredUpdate', '');
            document.querySelectorAll('.popup__product .quantity').forEach(el => {
                productsStoredUpdate.push({
                    'productid': el.closest('.popup__product').getAttribute('data-product-id'),
                    'quantity': el.value,
                    'price': el.closest('.popup__product').querySelector('.unit-price b').innerHTML,
                    'productvariantid': el.closest('.popup__product').getAttribute('data-product-variant-id'),
                });
                localStorage.setItem('productsStoredUpdate', JSON.stringify(productsStoredUpdate));
            });
        });
    }
   
    if (window.location.pathname == '/cart.html') {
        let locProductsUpdated = JSON.parse(localStorage.getItem('productsStoredUpdate'));
        for (const key in justunoCartItems) {
            if (justunoCartItems[key].productid != undefined) {
                productsStored.push({
                    'product_id': justunoCartItems[key].productid,
                    'quantity': justunoCartItems[key].quantity,
                    'price': justunoCartItems[key].price,
                    'product_variant_id': justunoCartItems[key].variationid,
                });
                localStorage.setItem('productsStored', JSON.stringify(productsStored));
            }
            if (justunoCartItems[key].productid == locProductsUpdated[key].productid) {
                justunoCartItems[key].quantity = locProductsUpdated[key].quantity;
                console.log(justunoCartItems[key].quantity + ' = ' + locProductsUpdated[key].quantity)
            }
        }
        localStorage.setItem('productsStoredTemporarily', '');
    }
};
