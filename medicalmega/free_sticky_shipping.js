// quantity on change and on click button +/-
function quantityFun(el) {
    if (el.querySelector('.quantity')) {
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
        });
        el.querySelectorAll('.quantity-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.stopImmediatePropagation();
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
            });
        });
    }
}

//cart
if (location.pathname.includes('cart.html') || location.pathname.includes('checkout')) {
    //set localStorage for total price
    let yourOrder = [];
    yourOrder.push({
        'price': justunoCart.subtotal
    })
    localStorage.setItem('yourOrder', JSON.stringify(yourOrder));
}

//pdp
if (location.pathname.includes('product')) {
    //styles
    document.body.insertAdjacentHTML('afterbegin',`
        <style>
            span.dot, #cart_box, .product-price, #variant_tag label:nth-child(2) {
                display: none!important;
            }
            .sticky-btn {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background: #FFFFFF;
                box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.05);
                padding: 20px 20px 0;
                box-sizing: border-box;
                z-index: 999;
                opacity: 0;
                pointer-events: none;
                transform: translateY(100%);
                transition: all 0.3s ease;
            }
            .sticky-btn.active {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0);
            }
            .sticky-btn_row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            .sticky-btn_row a {
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                color: #171717;
                text-align: left;
                padding-right: 25px;
            }
            .sticky-btn_price {
                font-weight: 700;
                font-size: 21px;
                line-height: 23px;
                color: #C23D31;
            }
            .sticky-btn_row .quantity-row {
                padding-left: 0;
            }
            .sticky-btn_row .quantity-btn {
                display: block;
                width: 35px;
                line-height: 31px;
                background-color: transparent;
                border: none;
                font-size: 24px;
                padding: 0 5px;
            }
            .sticky-btn_row .quantity {
                line-height: 23px;
                font-size: 18px;
                width: 35px;
                text-align: center;
                border-radius: 4px;
                border: 1px solid #C0C0C0;
                background: #EEEEEE;
            }
            .quantity-row {
                display: flex;
            }
            .add-cart {
                background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
                border: 1px solid #780F11;
                border-radius: 4px;
                max-width: 180px;
                width: 100%;
                font-weight: 700;
                font-size: 14px;
                line-height: 33px;
                text-align: center;
                color: #FFFFFF;
                text-transform: capitalize;
            }
            .shipping-box {
                font-size: 12px;
                text-align: center;
                background: #FFFFFF;
                border: 1px solid #666666;
                border-radius: 4px;
                padding: 15px ;
            }
            .shipping-box img {
                width: 35px;
                height: 26px;
            }
            .shipping-box p {
                line-height: 16px;
                color: #666666;
            }
            .shipping-box p.text-red {
                font-weight: 700;
                font-size: 14px;
                line-height: 16px!important;
                color: #C23D31;
                margin: 8px 0;
            }
            .info {
                font-size: 10px;
                line-height: 14px;
                color: #666666;
                margin: 8px auto 40px;
            }
            .topcon form {
                display: flex;
            }
            fieldset.topcon div.type1, fieldset.topcon div.type2 {
                width: 140px;
            }
            fieldset.topcon div.type1 span {
                width: 100%
            }
            html>body .type1 span img {
                object-fit: contain;
            }
            .type2 p, .type1 p  {
                width: 100%;
                padding: 0;
            }
            .type1 p {
                margin: 30px 0 20px 0;
                font-size: 10px;
                line-height: 12px;
                text-align: center;
                color: #666666;
            }
            .sticky-btn_row  .quantity-btn_minus {
                text-align: left;
            }
             .sticky-btn_row  .quantity-btn_plus{
                text-align: right;
            }
            html:first-child .type1 span {
                line-height: 161px;
            }
            .type1 span {
                height: 161px;
                padding: 0;
            }
            .type2 label {
                color: #666666;
                width: 83px;
            }
            .price-product  {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 30px;
            }
            .price-product p:first-child {
                font-size: 12px;
                line-height: 23px;
                color: #666666;
                margin-right: 8px;
            }
            .price-product p:last-child {
                font-weight: 700;
                font-size: 21px;
                line-height: 23px;
                color: #C23D31;
            }
            .range-shipping {
                margin-bottom: 30px;
            }
            .range-shipping_text1{
                text-align: center;
                font-size: 12px;
                line-height: 16px;
                text-transform: uppercase;
                margin-bottom: 8px;
            }
             .range-shipping_text1 span {
                color: #C23D31;
                font-weight: 700;
             }
            .range-shipping_text2 {
                font-size: 12px;
                line-height: 16px;
                color: #666666;
            }
            .range-shipping_text2  span {
                color: #000;
            }
            .range {
                width: 100%;
                background: #EEEEEE;
                border-radius: 12px;
                height: 12px;
                position: relative;
                overflow: hidden;
                margin-bottom: 4px;
            }
            .range span {
                position: absolute;
                top: 0;
                left: 0;
                width: 0%;
                height: 100%;
                background: #C23D31;
            }
            @media only screen and (max-width: 360px)  {
                .sticky-btn_row a {
                    padding-right: 15px;
                    font-size: 14px;
                    line-height: 18px;
                }
                .sticky-btn_price {
                    font-size: 18px;
                }
                .sticky-btn {
                    padding: 15px 15px 0;
                }
                .sticky-btn_row {
                    margin-bottom: 15px;
                }
                .add-cart {
                    max-width: 170px;
                }
            }
        </style>`);

    let rowActions = `
    <div class="sticky-btn_row">
        <div class="quantity-row">
            <button type="button" class="quantity-btn quantity-btn_minus" disabled="">−</button>
            <input type="text" name="quantity" value="1" class="quantity" data-val="1" readonly>
            <button type="button" class="quantity-btn quantity-btn_plus">+</button>
        </div>
        <button type="button" class="add-cart">add to cart</button>
    </div>`;

    //add sticky button in body
    document.body.insertAdjacentHTML('beforeend',`
    <div class="sticky-btn active">
        <div class="sticky-btn_row">
            <a href="#">${document.querySelectorAll('.center h3')[0].innerHTML}</a>
            <p class="sticky-btn_price">${document.querySelector('.product-price').innerHTML}</p>
        </div>
    </div>`);

    //add row actions in sticky button
    document.querySelector('.sticky-btn').insertAdjacentHTML('beforeend', rowActions);

    //hide sticky button on scrollY > 200, else show
    document.addEventListener('scroll', (e) => {
        if (window.scrollY > 200) {
            document.querySelector('.sticky-btn').classList.remove('active');
        } else {
            document.querySelector('.sticky-btn').classList.add('active');
        }
    });

    //add shipping box
    document.querySelector('.type2').insertAdjacentHTML('afterbegin',`
    <div class="shipping-box">
        <img src="https://conversionratestore.github.io/projects/medicalmega/img/car.svg" alt="car icon">
        <p class="text-red">Estimated shipping </p>
        <p>2-3 business days*</p>
    </div>`);

    //add row actions in product
    document.querySelector('.products_gallery').insertAdjacentHTML('beforebegin', `
    <div class="price-product">
        <p>Our Price:</p>
        <p>${document.querySelector('.product-price').innerHTML}</p>
    </div>
    ${rowActions}`);

    //show range, if have product in cart
    if (document.querySelector('.by_num') && document.querySelector('.by_num span').innerHTML != '0') {
        document.querySelector('.price-product').insertAdjacentHTML('afterend', `
        <div class="range-shipping">
            <p class="range-shipping_text1"><span>$<span>${(150 - JSON.parse(localStorage.getItem('yourOrder'))[0].price).toFixed(2)}</span></span> left for free Shipping</p>
            <div class="range"><span></span></div>
            <p class="range-shipping_text2">Your Order: <span>$<span>${JSON.parse(localStorage.getItem('yourOrder'))[0].price}</span></span></p>
        </div>`);

        //fill a range for free Shipping
        if (JSON.parse(localStorage.getItem('yourOrder'))[0].price >= 150) {
            document.querySelector('.range span').style.width = '100%';
            document.querySelector('.range-shipping_text1').innerHTML = 'You Have Free Shipping';
            document.querySelector('.range-shipping_text1').style.fontWeight = '700';
        } else {
            document.querySelector('.range span').style.width = JSON.parse(localStorage.getItem('yourOrder'))[0].price * 100 / 150 + '%';
        }
    }

    //add shipping box
    document.querySelector('.center .sticky-btn_row').insertAdjacentHTML('afterend', `<p class="info">*Sometimes by technical reasons delivery can took a bit longer up to 7 days. </p>`)

    //click on add to cart
    document.querySelectorAll('.add-cart').forEach(el => {
        el.addEventListener('click', () => {
            //change selected qty block / pdp
            document.querySelector("#qty_block select").options[document.querySelector("#qty_block select").selectedIndex].value = el.closest('.sticky-btn_row').querySelector('.quantity').value;
            //imitation click on add to shopping cart / pdp
            document.querySelectorAll('#cart_box a')[0].click();
        });
    })

    document.querySelectorAll('.sticky-btn_row').forEach(el => {
        quantityFun(el); // quantity on change and on click button +/-
    })
}
