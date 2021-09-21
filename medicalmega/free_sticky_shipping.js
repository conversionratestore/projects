window.onload  = function () {
    //styles
    document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .out-of-stock__message {
                width: 100%!important;
                font-size: 15px;
            }
            .out-of-stock__box {
                width: 100%!important;
                margin: 18px 0 0 0!important;
            }
            .homeslider__container {
                margin-bottom: 40px!important;
            }
            .range-shipping-title {
                text-align: center;
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                color: #171717;
                padding: 20px 0 12px;
            }
            .range-shipping {
                margin-bottom: 15px;
            }
            .range-shipping_text1{
                text-align: center;
                font-size: 12px;
                line-height: 16px;
                text-transform: uppercase;
                margin-bottom: 5px;
            }
             .range-shipping_text1 span {
                color: #C23D31;
                font-weight: 700;
             }
            .range-shipping_text2 {
                font-size: 10px;
                line-height: 14px;
                color: #666666;
            }
            .range-shipping_text2  span {
                color: #000;
            }
            .range {
                width: 100%;
                background: #EEEEEE;
                border-radius: 12px;
                height: 8px;
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
        </style>`);

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
                        if (el.closest('.sticky-btn')) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp - Free shipping sticky button mobile',
                                'eventAction': 'Click on plus sticky button',
                                'eventLabel': 'Sticky section'
                            });
                        } else {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp - Free shipping sticky button mobile',
                                'eventAction': 'Click on plus button PDP',
                                'eventLabel': 'Near the button Add to cart on PDP'
                            });
                        }
                    }
                    if (button.className == 'quantity-btn quantity-btn_minus') {
                        if (button.nextElementSibling.value < 2) {
                            button.nextElementSibling.value = 1;
                            button.disabled = true;
                        } else {
                            button.nextElementSibling.value = +button.nextElementSibling.value - 1;
                        }
                        if (el.closest('.sticky-btn')) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp - Free shipping sticky button mobile',
                                'eventAction': 'Click on minus sticky button',
                                'eventLabel': 'Sticky section'
                            });
                        } else {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp - Free shipping sticky button mobile',
                                'eventAction': 'Click on minus button PDP',
                                'eventLabel': 'Near the button Add to cart on PDP'
                            });
                        }
                    }
                });
            });
        }
    }

    //range shipping
    function rangeShipping(item,insert) {
        let total = JSON.parse(localStorage.getItem('yourOrder'))[0].price;
        document.querySelector(item).insertAdjacentHTML(insert, `
        <div class="range-shipping" style="padding: 0 7.5px">
            <p class="range-shipping_text1"><span>$<span>${(150 - total).toFixed(2)}</span></span> left for free Shipping</p>
            <div class="range"><span style="width: ${total * 100 / 150 + '%'}"></span></div>
            <p class="range-shipping_text2">Your Order: <span>$<span>${total}</span></span></p>
        </div>`);
        if (location.pathname.includes('cart.html') || location.pathname.includes('checkout')) {
            document.querySelector('.range-shipping').insertAdjacentHTML('beforebegin',`
              <p class="range-shipping-title">Get Free Shipping</p>`)
        }

        if (total < 150 && total >= 130) {
            document.querySelector('.range-shipping_text1').innerHTML = `<span>$<span>${(150 - total).toFixed(2)}</span></span>  only left for free Shipping`;
        }
        if (total >= 150) {
            if (location.pathname.includes('cart.html') || location.pathname.includes('checkout')) {
                document.querySelector('.range-shipping-title').innerHTML = `You Have Free Shipping`;
                document.querySelector('.range-shipping_text1').remove();
            } else {
                document.querySelector('.range-shipping_text1').innerHTML = `You Have Free Shipping`;
                document.querySelector('.range-shipping_text1').style = `font-weight: bold; font-size: 16px; line-height: 20px;`;
            }
        }
    }
    //cart
    if (location.pathname.includes('cart.html') || location.pathname.includes('checkout')) {
        //set localStorage for total price
        let yourOrder = [];
        yourOrder.push({
            'price': justunoCart.total
        })
        localStorage.setItem('yourOrder', JSON.stringify(yourOrder));
        if (justunoCart.total != '0.00') {
            rangeShipping('.payment','beforebegin');
        }
    }

    //pdp
    if (location.pathname.includes('product')) {
        //styles
        document.body.insertAdjacentHTML('afterbegin',`
            <style>
                .center h3, .category {
                    margin-left: 0;
                }
                .range-shipping {
                    padding: 0!important;
                }
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
                    background: #FFFFFF;
                    border: 1px solid #666666;
                    border-radius: 4px;
                    padding: 10px 12px 7px;
                    margin-top: 11px;
                }
                .shipping-box img {
                    width: 35px;
                    height: 26px;
                    margin-right: 10px;
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
                }
                .info {
                    font-size: 10px;
                    line-height: 14px;
                    color: #666666;
                    padding: 0 0 40px;
                }
                .topcon form {
                    display: flex;
                    flex-wrap: wrap;
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
                    color: #c23d31;
                }
                .read-more {
                    font-size: 12px;
                    line-height: 23px;
                    text-decoration-line: underline;
                    text-transform: capitalize;
                    color: #C23D31;
                    background-color: transparent;
                    border: none;
                    margin: 4px 0;
                }
                #product_desc div, #product_desc h3, #product_desc p, #product_desc li  {
                    height: 0;
                    opacity: 0;
                    transition: all 0.3s ease;
                    pointer-events: none;
                    display: none;
                }
                #product_desc p:first-child, #product_desc li:first-child {
                    height: 100%;
                    opacity: 1;
                    pointer-events: auto;
                    display: list-item;
                }
                #product_desc.active li, #product_desc.active div, #product_desc.active h3 , #product_desc p.active{
                    height: 100%;
                    opacity: 1;
                    pointer-events: auto;
                    display: block;
                }
                #product_desc.active li {
                    display: list-item;
                }
                .btmcon {
                    margin-left: 0!important;
                }
                .align-center {
                    display: flex;
                    align-items: center;
                    margin-bottom: 10px;
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

        //create element with qty and button
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

        //add element in sticky button
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
        document.querySelector('.type2').insertAdjacentHTML('beforeend',`
        <div class="shipping-box">
            <div class="align-center">
                <img src="https://conversionratestore.github.io/projects/medicalmega/img/car.svg" alt="car icon">
                <p class="text-red">Estimated shipping </p>
            </div>
            <p>2-3 business days*</p>
        </div>`);

        //add elements
        document.querySelector('.products_gallery').insertAdjacentHTML('beforebegin', `
        <div class="price-product">
            <p>Our Price:</p>
            <p>${document.querySelector('.product-price').innerHTML}</p>
        </div>
        ${rowActions}`);

        //show range, if have product in cart
        if (document.querySelector('.by_num') && document.querySelector('.by_num span').innerHTML != '0') {
            rangeShipping('.price-product','afterend');
        }

        //add text info
        document.querySelector('.center .sticky-btn_row').insertAdjacentHTML('afterend', `<p class="info">*In rare times, for technical reasons delivery might take up to 7 days.</p>`)

        //click on add to cart
        document.querySelectorAll('.add-cart').forEach(el => {
            el.addEventListener('click', () => {
                //change selected qty block / pdp
                document.querySelector("#qty_block select").options[document.querySelector("#qty_block select").selectedIndex].value = el.closest('.sticky-btn_row').querySelector('.quantity').value;
                //imitation click on add to shopping cart / pdp
                document.querySelectorAll('#cart_box a')[0].click();

                if (el.closest('.sticky-btn')) {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp - Free shipping sticky button mobile',
                        'eventAction': 'Click on Add to cart sticky button',
                        'eventLabel': 'Sticky section'
                    });
                } else {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp - Free shipping sticky button mobile',
                        'eventAction': 'Click on Add to cart button PDP',
                        'eventLabel': 'PDP'
                    });
                }

            });
        })

        document.querySelectorAll('.sticky-btn_row').forEach(el => {
            quantityFun(el); // quantity on change and on click button +/-
        })
        //read more
        if (document.getElementById('product_desc')) {
            if (document.querySelectorAll('#product_desc p')) {
                document.querySelectorAll('#product_desc p').forEach((el,i) => {
                    if (i != (document.querySelectorAll('#product_desc p').length - 1)) {
                        if(el.nextElementSibling.tagName == 'UL') {
                            el.classList.add('active');
                        }
                    }
                });
            }
            document.getElementById('product_desc').insertAdjacentHTML('beforeend',`<button type="button" class="read-more">READ MORE</button>`);
            document.querySelector('.read-more').addEventListener('click',(e) => {
                document.querySelector('#product_desc').classList.add('active');
                e.target.hidden = true;
            });
        }

        if (document.querySelector('.type2 strong')) {
            document.querySelector('.type2').after(document.querySelector('.box_container'));
            document.querySelector('.type2').after(document.querySelector('.type2 strong'));
        }
    }

    //main
    if (document.querySelector('.homeslider__container') && document.querySelector('.by_num span').innerHTML != '0') {
        rangeShipping('.homeslider__container','afterend');
    }
};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1483840,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'free_shipping_sticky_button_mobile');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Free shipping sticky button mobile',
    'eventAction': 'loaded'
});
