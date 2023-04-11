let styles = `
<style>
/* Chrome, Safari, Edge, Opera */
.slide_in__cart input[type=number]::-webkit-outer-spin-button,
.slide_in__cart input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.slide_in__cart input[type=number] {
  -moz-appearance: textfield;
}
html.fixed_body, html.gemapp.video.fixed_body {
    width: 100%;
    overflow: hidden!important;
}
.slide_in__cart {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 9999999999;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    font-family: 'Urbanist', sans-serif;
    color: #212121;
    font-size: 16px;
    line-height: 16px;
}
.slide_in__cart.active {
    opacity: 1;
    pointer-events: auto;
}
.slide_in__cart.active > .container {
    transform: translateX(0);
}
.slide_in__cart_close {
    cursor: pointer;
}
.slide_in__cart_close:hover path {
    fill: #212121;
}
.slide_in__cart p, .slide_in__cart ul {
    margin: 0;
    list-style-type: none;
}
.slide_in__cart > .container {
    width: 100%;
    max-width: 351px;
    background: #FFFFFF;
    height: 100vh;
    overflow-y: auto;
    margin: 0 0 0 auto;
    padding: 0;
    transition: all 0.3s ease;
    transform: translateX(300px);
}
.slide_in__header {
    border-bottom: 1px solid #F5F5F5;
    padding: 15px 20px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 2;
    font-weight: 600;
    color: #0A0A0A
}
.slide_in__header p {
    position: relative;
}
.slide_in__header .loading:before, .btn-purple.loading_discount:before {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 19px;
    height: 19px;
    background: url(https://conversionratestore.github.io/projects/novaalab/img/loading.gif) no-repeat center / 100%;
}
.btn-purple.loading_discount:before {
    left: auto;
    right: calc(100% + 5px);
}
.slide_in__products {
    padding: 20px;
}

.btn-purple {
    background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%)!important;
    border-radius: 4px;
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 1px;
    color: #FFFFFF;
    border: none;
    width: 100%;
    display: block;
    position: relative;
}
.btn-purple:hover, .btn-purple:active {
    background: #691BEA;
    color: #FFFFFF;
}
.btn-purple[disabled] {
    background: radial-gradient(90.92% 2726% at 2.15% 56%, #691BEA 0%, #9E41EF 100%)!important;
    opacity: 0.5!important;
    cursor: no-drop;
}

/* empty */
.slide_in__empty {
    border: 1px dashed #E2E2E2;
    border-radius: 6px;
    padding: 20px;
    font-family: 'Urbanist';
    font-style: normal;
    text-align: center;
    color: #474444;
    margin-bottom: 20px;
}
.slide_in__empty p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    padding: 0 10px;
}
.slide_in__empty p.name {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
}
.slide_in__empty .btn-purple {
    font-size: 18px;
    line-height: 50px;
    margin-top: 16px;
}
/* product item*/
.item_product {
    font-family: 'Urbanist';
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
    font-style: normal;
    font-weight: 500;
    width: 100%;
}
.item_product:last-child {
    margin: 0;
}
.item_product > div:not(.slide_in__message) > div {
    width: calc(100% - 134px);
}
.item_product img  {
    width: 120px;
    height: 120px;
    margin-right: 14px;
}
.item_product img {
    object-fit: cover;
}
p.item_product__price {
    margin: 5px 0 13px;
}
.item_product__price .compare {
    color: #939393;
    padding-right: 4px;
    text-decoration: line-through;
}
.calc_action {
    width: 35px;
    height: 36px;
    border: none;
    position: relative;
    border: 1px solid #E2E2E2;
}
.calc_action:after, .calc_action:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #0A0A0A;
    pointer-events: none;
}
.calc_action:before {
    width: 12px;
    height: 2px;
}
.calc_action:hover {
    border-color: #773BD9;
}
.calc_action:hover:before, .calc_action:hover:after  {
    background-color: #773BD9;
}
.calc_action.calc_action__minus {
    border-radius: 4px 0 0 4px;
}
.calc_action.calc_action__plus {
    border-radius: 0 4px 4px 0;
}
.calc_action.calc_action__plus:after {
    width: 2px;
    height: 12px;
}
.calc_action:hover:after, .calc_action:hover:before {
    background-color: #0A0A0A;
}
input.clac_qty {
    width: 36px;
    line-height: 34px;
    padding: 0;
    text-align: center;
    border: none;
    border-top: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;
    background: transparent;
    font-weight: 700;
    font-size: 16px;
    color: #212121;
}
.item_product__delete {
    border: 1px solid #E2E2E2;
    border-radius: 4px;
    width: 36px;
    height: 36px;
    padding: 0!important;
}
.item_product__delete svg {
    flex-shrink: 0;
    width: 12px;
    height: 14px;
}
.item_product__delete:hover svg path {
    fill: #773BD9;
}
.item_product__delete:hover {
    border-color: #773BD9;
}
/* message block*/
.slide_in__message {
    background: #F5F5FD;
    border-radius: 6px;
    padding: 8px 12px;
    max-width: 311px;
    margin: 0 auto 10px;
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    min-height: 42px;
}
.slide_in__message svg {
    flex-shrink: 0;
    margin-right: 8px;
}
.slide_in__message .c-grey-300 {
    margin-bottom: 2px;
}
/* total */
.slide_in__total {
    padding: 0 20px 16px;
}
.slide_in__total.element-grid {
    display: grid;
}
.slide_in__subtotal {
    padding: 12px 0;
    border-top: 1px solid #E2E2E2;
}
.slide_in__subtotal p {
    font-weight: 600;
    line-height: 15px;
    text-transform: uppercase;
    color: #252726;
    position: relative;
}
.slide_in__subtotal .compare {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #939393;
    text-decoration: line-through;
    margin-right: 4px;
}
.slide_in__total > div:not(.slide_in__discount) p:first-child {
    letter-spacing: 1.4px;
}
.slide_in__shipping {
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    padding: 10px 0 12px;
    order: -1;
}
.slide_in__saved {
    background: rgba(216, 68, 50, 0.2);
    padding: 5px 6px 4px 12px;
    position: relative;
    font-size: 14px;
    line-height: 17px;
    color: #D84432;
    margin-left: auto;
    width: fit-content;
}
.slide_in__saved:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 11px 0 11px 8px;
    border-color: transparent transparent transparent #fff;
}
/* discount */
.slide_in__bundle {
    padding: 16px 20px;
    background: #F5F5F5;
    box-shadow: inset 0px 0px 8px rgba(107, 29, 235, 0.16);
    margin-bottom: 20px!important;
}
.slide_in__bundle li > div > a {
    background: #FFFFFF;
    padding: 10px;
}
.slide_in__bundle img {
    width: 100px;
    height: 100px;
}
.slide_in__bundle > p {
    line-height: 19px;
    margin-bottom: 16px;
}
.btn-discount {
    font-size: 14px;
    line-height: 10px;
    text-decoration-line: underline;
    padding: 13px 0;
    cursor: pointer;
}
.slide_in__discount {
    position: relative;
    margin-bottom: 4px;
}
.slide_in__discount_message {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FF0000;
    margin-top: 4px;
    display: none;
}
.slide_in__discount.error .slide_in__discount_message {
    display: block;
}
.slide_in__discount.error input {
    border-color: #FF0000;
}
.slide_in__discount input {
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 4px;
    padding: 9px 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    width: 100%;
    outline: none;
    font-style: initial;
}
.slide_in__discount input:focus, .slide_in__discount input:valid {
    border-color: #773BD9;
}
.slide_in__discount button {
    width: 86px;
    position: absolute;
    right: 0;
    top: 0;
    height: 37px;
}
.slide_in__discount_completed {
    letter-spacing: 1.4px;
}
.slide_in__discount_completed, .slide_in__discount_item {
    font-size: 14px;
    line-height: 15px;
    text-transform: uppercase;
}
.slide_in__discount_delete {
   padding: 8px;
   cursor: pointer;
}
.slide_in__discount_delete svg {
    pointer-events: none;
}
.slide_in__discount.completed {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 0 15px;
    margin: 0;
}
.slide_in__discount.completed button {
    top: 3px;
}
/* may_like */
.may_like {
    background: #F5F5F5;
    padding: 20px;
    margin-top: 16px!important;
    box-shadow: inset 0px 0px 8px rgba(107, 29, 235, 0.16);
}
.may_like h4 {
    font-size: 16px;
    line-height: 19px;
    color: #212121;
    margin-bottom: 16px;
    font-family: 'Urbanist';
    text-transform: none;

    letter-spacing: normal;
}
.may_like li > div > a {
    background: #FFFFFF;
    border: 1px solid #EAEBEA;
}
/* footer cart */
.slide_in__footer {
    padding: 20px;
    position: sticky;
    bottom: 0;
    background: #fff;
    z-index: 2;
    box-shadow: 0px 0px 16px rgba(107, 28, 235, 0.16);
}
.slide_in__to_checkout {
    font-size: 18px;
    line-height: 48px;
}
/* popup */
.splitit-iframe-popup {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 9999999999;
    overflow-y: auto;
}
.splitit-iframe-popup.active {
    opacity: 1;
    pointer-events: auto;
}
.slide_in__splitit {
    margin-bottom: 12px;
}
.slide_in__splitit p {
    font-weight: 600;
    font-size: 14px;
    line-height: 10px;
    color: #6D6E75;
}
.slide_in__splitit a {
    font-weight: 700;
    font-size: 14px;
    line-height: 10px;
    text-decoration-line: underline;
    color: #7C28D0;
}
.slide_in__splitit img {
    margin: 0 10px 0 8px;
}
.splitit-iframe-popup .grid, .splitit-iframe-popup .grid--rev, .splitit-iframe-popup .grid--full, .splitit-iframe-popup .grid-uniform {
    margin-left: 0!important;
}
/* fonts */
.fw-bold {
    font-weight: 700!important;
}
.fw-semi {
    font-weight: 600!important;
}
.fw-medium {
    font-weight: 500!important;
}
.c-purple {
    color: #773BD9;
}
.c-grey-300 {
    color: #6D6E75;
}
.text-center {
    text-align: center;
}
/* flex */
.d-flex {
    display: flex;
}
.items-center {
    align-items: center;
}
.flx {
    display: flex;
    align-items: center;
    justify-content: center;
}
.flx-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.m-auto {
    margin: auto;
}
.mb-auto {
    margin-bottom: auto;
}
@media screen and (min-width:600px) {
    .text-sm-center {
        text-align: center;
    }
}
.gf_product-quantity-minus, .gf_product-quantity-plus {
    display: flex!important;
    justify-content: center!important;
    align-items: center!important;
}
</style>`

let emptySlideInHTML = `
<li class="slide_in__empty">
    <p class="name">Your cart is empty</p>
    <p>Our red light therapy products can help reduce pain, improve circulation, and relieve muscle tension</p>
    <a href="/pages/red-light-therapy-home-catalog" class="btn-purple">Shop all products</a>
</li>`;

let closePopup = false;
let productHaveBundle = {32854816784438:'', 39782656311350:'', 40322897838134:'', 39737414484022:''};

let discountChange = true;
let isCompleted;


//comes into view
function isScrolledIntoView(el) {
    if (document.querySelector(el) == null) return false
    let rect = document.querySelector(el).getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

function pushDataLayer(action, label = '') {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Slide in cart',
        'eventAction': action,
        'eventLabel': label
    });
}
function priceSubstr(price) {
    let str = price.toString();
    return str.substr(0, str.length - 2) + '.' + str.substr(str.length - 2, str.length);
}

function addCart(id, qty, typeId = '') {
    $.ajax({
        url : "/cart/add.js",
        data : {id : id, quantity : qty},
        method : "POST",
        dataType : "JSON",            
        success  : function(data) {
            console.log(data)
            if (typeId != '') {
                updateCart(typeId)
            } else {
                getCart()
            }
            toggleActive(true, 'eventNon')
        },
        error : function(error) {
            console.log(error)
        }
    });
}

function updateCart(id, qty = 0) {
    document.querySelector('.slide_in__header > p').classList.add('loading')
    $.ajax({ 
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: {
            id: parseFloat(id),
            quantity: qty,
        },
        success: function (success_data) {
                console.log(success_data);
                getCart()
                return false;
            },
            error: function (data) {
                alert(data.responseJSON.description);
            }
        });
}

function splititPopup(cartParent, parentSplitit) {

    let subtotal = +cartParent.querySelector(`.slide_in__subtotal`).dataset.subtotal;
    let discountValue = 0;
    if (cartParent.querySelector('.slide_in__discount_completed') != null && window.appikon['discounts']['additional_discount_value'] != null) {
        discountValue = window.appikon['discounts']['additional_discount_value']
    } else {
        discountValue = +cartParent.querySelector(`.slide_in__subtotal`).dataset.discount;
    }
    let sum = (subtotal - discountValue).toFixed(2);
    let onePayment = (sum / 6).toFixed(2);
    let compare = +cartParent.querySelector(`.slide_in__subtotal .compare`).innerHTML.replace('$','');

    cartParent.querySelector(`.slide_in__subtotal .pr`).innerHTML = '$'+sum;
    cartParent.querySelector(`.slide_in__saved`).innerHTML = 'You just saved $' + (compare - sum).toFixed(2);
    cartParent.querySelector('.slide_in__splitit p > span').innerHTML = onePayment;


    cartParent.querySelector('.slide_in__header p').classList.remove('loading')

    parentSplitit.querySelector('.total__splitit').innerHTML = `$`+sum;
    parentSplitit.querySelectorAll('.payment__splitit').forEach(item => {
        item.innerHTML = '$'+onePayment;
    })
}

function getCart(discountChange = false, cartDrawer = document.querySelector('.slide_in__cart')) {
    // get cart
    cartDrawer.querySelector('.slide_in__header > p').classList.add('loading')
    $.ajax({
        'url' : '/cart?view=cw-cart',
        'dataType' : 'json',
        'method' : 'GET',
        'success' : function(data) {
            console.log(data)
            let items = data.items,
                subtotal = priceSubstr(data.items_subtotal_price),
                totalPrice = 0,
                compareTotalPrice = 0,
                itemCount = data.item_count;
    
            let parent =  cartDrawer.querySelector('.slide_in__products');

            cartDrawer.querySelector('.slide_in__subtotal .pr').innerHTML = '$'+subtotal;

            cartDrawer.querySelector('.slide_in__bundle').innerHTML = '';
            cartDrawer.querySelector('.slide_in__bundle').style.display = 'none';
            cartDrawer.querySelector('.slide_in__header > p span').innerHTML = itemCount;
            cartDrawer.querySelector('.slide_in__discount').classList.remove('error')
            
            if (cartDrawer.querySelector('.may_like') != null) {
                cartDrawer.querySelector('.may_like').remove()
            }
            if (itemCount == 0) {
                parent.innerHTML = emptySlideInHTML;
                cartDrawer.querySelector('.slide_in__total').style.display = 'none';
                cartDrawer.querySelector('.slide_in__footer').style.display = 'none';

                let item = cartDrawer.querySelector('.slide_in__message.guarantee'),
                    position = 'afterend';

                new Message(item, position, 'freeshipping').render();
                cartDrawer.querySelector('.slide_in__empty .btn-purple').addEventListener('click', (e) => {
                    pushDataLayer('Click on shop all product in empty cart')
                })
               
                new ProductItem(cartDrawer.querySelector('.slide_in__products'), allProducts[40322897838134].url, allProducts[40322897838134].img, allProducts[40322897838134].title, allProducts[40322897838134].compare, allProducts[40322897838134].price, allProducts[40322897838134].variantId, allProducts[40322897838134].id, 'false', allProducts[40322897838134].qty, 'addToCart').render() 
                new ProductItem(cartDrawer.querySelector('.slide_in__products'), allProducts[39782656311350].url, allProducts[39782656311350].img, allProducts[39782656311350].title, allProducts[39782656311350].compare, allProducts[39782656311350].price, allProducts[39782656311350].variantId, allProducts[39782656311350].id, 'false', allProducts[39782656311350].qty, 'addToCart').render() 
                
            } else {

                let findAppikon = setInterval(() => {
                    if (appikon['discounts'] != null) {
                        clearInterval(findAppikon)
                        parent.innerHTML = '';
                        if (cartDrawer.querySelector('.freeshipping') != null) {
                            cartDrawer.querySelector('.freeshipping').remove()
                        }

                        if (cartDrawer.querySelector('.may_like') != null) {
                            cartDrawer.querySelector('.may_like').remove()
                        }

                        let mayLikeCreate = document.createElement('ul');
                        mayLikeCreate.classList.add('may_like')
                        mayLikeCreate.innerHTML = '<h4 class="fw-semi">You may also like</h4>'
                        cartDrawer.querySelector('.slide_in__body').appendChild(mayLikeCreate)

                        for (let i = 0; i < upsellObj.length; i++) {
                            new ProductItem(mayLikeCreate, upsellObj[i].url, upsellObj[i].img, upsellObj[i].title, upsellObj[i].compare, upsellObj[i].price, upsellObj[i].variantId, upsellObj[i].id, 'false', upsellObj[i].qty, 'addToCart').render() 
                        }
                        for (let i = 0; i < items.length; i++) {
                            let link = items[i].url, 
                                image = items[i].image, 
                                title = items[i].title, 
                                price = items[i].discounted_price, 
                                id = items[i].id,
                                variantId = items[i].variant_id,
                                hasVariant = items[i].product_has_only_default_variant,
                                compare = allProducts[variantId].compare,
                                qty = items[i].quantity;
                
                            new ProductItem(parent, link, image, title, compare, price, variantId, id, hasVariant, qty).render()

                            if (document.querySelector(`.may_like [data-variant-id="${variantId}"]`) != null) {
                                document.querySelector(`.may_like [data-variant-id="${variantId}"] .add-to-cart`).disabled = true;
                                document.querySelector(`.may_like [data-variant-id="${variantId}"] .add-to-cart`).innerHTML = 'Added';
                            }
                            if (discountShopacado[variantId] != null) {
                                let initialElement = cartDrawer.querySelector(`li[data-variant-id="${variantId}"]`),  
                                    priceProduct = price, 
                                    details = discountShopacado[variantId]['details'],
                                    priceDiscount = '', 
                                    qtyDiscount = '';
                                
                                    if (qty == 2) {
                                        priceDiscount = details[1].split('/')[1];
                                        qtyDiscount = details[1].split('/')[0];

                                        initialElement.querySelector('.item_product__price .pr').innerHTML = '$'+ details[0].split('/')[1]
                                        priceProduct = details[0].split('/')[1]
                                    } else if (qty == 1) {
                                        priceDiscount = details[0].split('/')[1];
                                        qtyDiscount = details[0].split('/')[0];
                                    } else {
                                        initialElement.querySelector('.item_product__price .pr').innerHTML = '$'+ details[1].split('/')[1]
                                        priceProduct = details[1].split('/')[1]
                                    }

                                new DiscountProduct(initialElement, priceProduct, priceSubstr(compare), qty, priceDiscount, qtyDiscount).render()
                            }
                        }

                        //SUBTOTAL
                        cartDrawer.querySelectorAll('.slide_in__products li').forEach(item => {
                            let qty = +item.querySelector('.clac_qty').value,
                                price = +item.querySelector('.item_product__price .pr').innerHTML.replace('$',''),
                                compare = +item.querySelector('.item_product__price .compare').innerHTML.replace('$','');

                            totalPrice += qty * price;
                            compareTotalPrice += qty * compare;
                        })
                        let discountValue = cartDrawer.querySelector('.slide_in__discount_item') != null && appikon['discounts']['additional_discount_value'] != null ? appikon['discounts']['additional_discount_value'] : 0
                        let priceSplitit = ((totalPrice - discountValue)/6).toFixed(2)

                        console.log(discountValue)
                        cartDrawer.querySelector('.slide_in__subtotal .pr').innerHTML = '$' + (totalPrice - discountValue).toFixed(2);
                        cartDrawer.querySelector('.slide_in__subtotal').dataset.subtotal = totalPrice.toFixed(2);
                        cartDrawer.querySelector('.slide_in__subtotal').dataset.discount = discountValue;

                        cartDrawer.querySelector('.slide_in__subtotal .compare').innerHTML = '$' + compareTotalPrice.toFixed(2);
                        cartDrawer.querySelector('.slide_in__saved').innerHTML = 'You just saved $' + (compareTotalPrice - totalPrice - discountValue).toFixed(2);
                                
                        cartDrawer.querySelector('.slide_in__splitit').innerHTML = `<p class="flx">Pay $<span>${priceSplitit}</span>/month with 
                        <img src="https://conversionratestore.github.io/projects/novaalab/img/splitit.svg" alt="splitit image"><a href="#">Learn more</a></p>`
                        
                        cartDrawer.querySelector('.slide_in__total').style = '';
                        cartDrawer.querySelector('.slide_in__footer').style = '';
                        
                        if (document.querySelector('.splitit-iframe-popup') != null) {
                            document.querySelector('.splitit-iframe-popup').remove()
                        } 

                        cartDrawer.insertAdjacentHTML('afterend', `
                        <div class="splitit-iframe-popup">
                            <style>.splitit-modal.svelte-1yc61tn{position:relative;height:-moz-fit-content;height:fit-content;width:100%;max-width:56rem;overflow:hidden;border-width:1px;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:0}@media (min-width: 600px){.splitit-modal.svelte-1yc61tn{width:83.333333%;border-radius:.5rem;padding-top:2rem;--tw-shadow:0 4px 10px rgb(0 0 0 / 25%);--tw-shadow-colored:0 4px 10px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}.splitit-modal-wrapper.svelte-1yc61tn{position:absolute;inset:0;display:flex;justify-content:center;background-color:#f3f4f6b3;padding:0}@media (min-width: 600px){.splitit-modal-wrapper.svelte-1yc61tn{overflow:auto;padding-top:20px;padding-bottom:20px}}

                            .big-circle.svelte-sz06yz{width:8rem;height:8rem;border:5px solid #642f6c;border-radius:50%;display:flex;align-items:center;justify-content:center;position:relative;border-color:#642f6c transparent #642f6c #642f6c;animation:svelte-sz06yz-bigcircle .7s linear infinite}.small-circle.svelte-sz06yz{position:relative;width:5rem;height:5rem;border:5px solid #642f6c;border-radius:50%;border-color:#642f6c #642f6c transparent #642f6c}@keyframes svelte-sz06yz-bigcircle{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
                            </style>
                            <link href="https://documents.production.splitit.com/_app/immutable/assets/_layout.19c2acc3.css" rel="stylesheet">
                            <link href="https://documents.production.splitit.com/_app/immutable/assets/_page.4dc6b50c.css" rel="stylesheet">
                            <link href="https://documents.production.splitit.com/_app/immutable/assets/InfoContainerV2.ce274ac5.css" rel="stylesheet">
                            <link href="https://documents.production.splitit.com/_app/immutable/assets/Loader.588f1967.css" rel="stylesheet">
                            <div class="h-full w-full overflow-auto"> <main class="h-full w-full"><div class="h-full w-full font-noto"><div class="svelte-1yc61tn splitit-modal-wrapper"><div class="flex w-full flex-col bg-bg-pale sm:bg-white sm:pt-4 svelte-1yc61tn splitit-modal"><img src="https://documents.production.splitit.com/assets/svgs/close.svg" alt="close" class="absolute right-2 top-2 z-10 hidden cursor-pointer sm:block"> <img src="https://documents.production.splitit.com/assets/svgs/back.svg" alt="back" class="absolute top-5 left-5 z-10 sm:hidden"> <div class="hidden items-center px-4 sm:flex sm:px-10"><div class="mr-4 flex h-10 w-10 justify-center rounded-full bg-secondary/30"><img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt="split" class="w-6"></div> <div class="pl-16 text-2xl font-semibold text-black sm:pl-0">Мonthly payments on your credit card </div></div> <div class="flex h-16 w-full items-center bg-main-dark px-5 sm:hidden"><div class="text-white pl-16"> </div></div> <div class="bg-bg-lighter py-5 sm:bg-white"><section class="text-lg"><div class="flex items-start px-4 text-base text-text-dark sm:px-10 sm:text-lg"><img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt="split" class="mr-1 sm:hidden"> <p class="leading-5">Use your existing credit card to split your purchase into smaller payment amounts.</p></div> <section class="px-4 sm:px-10"><p class="pt-3 text-base font-bold text-text-dark sm:text-lg">How does it work?</p> <div class="grid grid-cols-1 py-3 sm:grid-cols-4 sm:pt-3 sm:pb-0"><div class="my-2 flex items-center sm:my-0 sm:flex-col"><div class="order-1 mr-4 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-secondary/40 text-base font-bold text-black sm:order-2 sm:bg-transparent">1</div> <img src="https://documents.production.splitit.com/assets/svgs/select_step.svg" alt="select_step" class="order-1 h-20 w-20"> <div class="order-3 flex flex-col items-start text-left text-sm sm:items-center sm:text-center"><div class="my-1 mx-2 text-sm-center">Add your item(s) to cart </div>  <div class="my-1 mx-2 flex items-center rounded bg-secondary-light pt-1 pl-1 pb-2 pr-2 sm:my-0 sm:mx-0"><img src="https://documents.production.splitit.com/assets/svgs/split.svg" alt="split"> <div class="pt-1 pl-[2px] text-left"><div class="text-xs font-medium leading-2 text-main-dark">Monthly</div> <div class="text-xs font-medium leading-2 text-main-dark">Рayments</div></div></div></div> </div><div class="my-2 flex items-center sm:my-0 sm:flex-col"><div class="order-1 mr-4 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-secondary/40 text-base font-bold text-black sm:order-2 sm:bg-transparent">2</div> <img src="https://documents.production.splitit.com/assets/svgs/pay_step.svg" alt="pay_step" class="order-1 h-20 w-20"> <div class="order-3 flex flex-col items-start text-left text-sm sm:items-center sm:text-center"><div class="my-1 mx-2 text-sm-center">Enter your credit card details </div>  </div> </div><div class="my-2 flex items-center sm:my-0 sm:flex-col"><div class="order-1 mr-4 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-secondary/40 text-base font-bold text-black sm:order-2 sm:bg-transparent">3</div> <img src="https://documents.production.splitit.com/assets/svgs/choose_step.svg" alt="choose_step" class="order-1 h-20 w-20"> <div class="order-3 flex flex-col items-start text-left text-sm sm:items-center sm:text-center"><div class="my-1 mx-2 text-sm-center">Choose the number of installments </div>  </div> </div><div class="my-2 flex items-center sm:my-0 sm:flex-col"><div class="order-1 mr-4 flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full bg-secondary/40 text-base font-bold text-black sm:order-2 sm:bg-transparent">4</div> <img src="https://documents.production.splitit.com/assets/svgs/held_step.svg" alt="held_step" class="order-1 h-20 w-20"> <div class="order-3 flex flex-col items-start text-left text-sm sm:items-center sm:text-center"><div class="my-1 mx-2 text-sm-center">Make your first payment. </div>  </div> </div></div></section> <div class="px-4 sm:mt-4 sm:px-10"><div class="flex flex-col items-center justify-center rounded bg-main-pale/30 py-3 text-center text-sm text-main-dark sm:flex-row sm:bg-secondary-light sm:text-base"> <span class="mx-2">No new loans</span> <p class="h-[6px] w-[6px] rounded-full bg-black"></p> <span class="mx-2">No applications</span> <p class="h-[6px] w-[6px] rounded-full bg-black"></p> <span class="mx-2">No additional interest or fees</span> </div></div> <div class="py-4 svelte-41engz"><div><section class="flex justify-center"><div class="grid w-full max-w-3xl grid-rows-1 gap-1 px-4 pb-4 sm:grid-cols-4 sm:gap-4 sm:pb-2 md:w-[750px] svelte-5no3ze grid-cols-1 md:px-10"><section class="cursor-pointer sm:col-span-2 svelte-5no3ze single-option"><div class="h-full rounded-lg border border-gray-border px-3 py-4 text-main-dark transition svelte-5no3ze"><p class="block text-sm sm:flex sm:text-base"><span class="pr-1 payment__splitit">$${priceSplitit}</span> <span>/month</span></p> <p class="text-xs sm:text-base"><span class="lowercase">6 Рayments</span></p></div> </section></div></section> <section class="flex w-full flex-col space-y-2 xl:max-w-4xl"><div class="grid grid-cols-1 gap-4 bg-white px-4 sm:px-10 md:py-4 sm:grid-cols-4 md:px-32"><section class="flex flex-col justify-between rounded p-3 pr-5 sm:bg-gray-bg sm:py-3 sm:pl-6 svelte-1kctpzc notSelected single"><div class="text-sm"><div class="svelte-1kctpzc"><div class="grid grid-cols-4 py-1"><div class="col-span-3 flex"><p class="mr-1 flex font-bold"><span>1</span> <span class="text-xs">st</span></p> <span class="font-bold capitalize">now</span></div> <span class="payment__splitit">$${priceSplitit}</span> </div><div class="grid grid-cols-4 py-1"><div class="col-span-3 flex"><p class="mr-1 flex font-bold"><span>2</span> <span class="text-xs">nd</span></p> <span class="ml-1">payment</span></div> <span class="payment__splitit">$${priceSplitit}</span> </div><div class="grid grid-cols-4 py-1"><div class="col-span-3 flex"><p class="mr-1 flex font-bold"><span>3</span> <span class="text-xs">rd</span></p> <span class="ml-1">payment</span></div> <span class="payment__splitit">$${priceSplitit}</span> </div><div class="grid grid-cols-4 py-1"><div class="col-span-3 flex"><p class="mr-1 flex font-bold"><span>4</span> <span class="text-xs">th</span></p> <span class="ml-1">payment</span></div> <span class="payment__splitit">$${priceSplitit}</span> </div><div class="grid grid-cols-4 py-1"><div class="col-span-3 flex"><p class="mr-1 flex font-bold"><span>5</span> <span class="text-xs">th</span></p> <span class="ml-1">payment</span></div> <span class="payment__splitit">$${priceSplitit}</span> </div><div class="grid grid-cols-4 py-1"><div class="col-span-3 flex"><p class="mr-1 flex font-bold"><span>6</span> <span class="text-xs">th</span></p> <span class="ml-1">payment</span></div> <span class="payment__splitit">$${priceSplitit}</span> </div></div></div> <div class="grid grid-cols-4 items-center border-gray-border sm:border-t sm:pt-2"><span class="col-span-2 text-sm font-bold sm:font-normal">Total</span> <span class="col-span-2 text-sm font-bold sm:text-base flex justify-end pr-2 total__splitit">$${(totalPrice-discountValue).toFixed(2)}</span></div></section></div></section></div></div></section></div> <section class="bg-bg-lighter px-5 sm:flex sm:flex-col sm:bg-white sm:px-10"><div class="border-gray-border pt-2 text-sm opacity-70 sm:order-2 sm:border-t">Things you need to know:</div> <div class="pb-2 text-xs opacity-50 sm:order-3"> <p class="pb-1">* Payments will be made automatically according to your agreed installment schedule. You must maintain sufficient available funds on your card until the plan is completed.</p> <p>* We will not charge you interest or fees. Your standard credit card terms and conditions apply.</p></div> <div class="flex items-end justify-between pb-4 sm:order-1"><div class="flex flex-col items-center text-center text-xs text-text-dark xsm:flex-row xsm:space-x-1 sm:items-end sm:pb-1 sm:text-base"><div>Powered by</div> <img src="https://documents.production.splitit.com/assets/svgs/logo.svg" alt="logo" class="mt-[2px] mr-0 w-11 sm:ml-2 sm:w-[75px]"></div> <div class="ml-2 min-w-[180px] cursor-pointer rounded bg-black px-4 py-2 text-center text-base font-bold text-white sm:px-5 sm:py-3">Continue shopping</div></div></section></div></div></div></main> <div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0px; top: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px;"></div></div>
                        </div>`)

                        if (window.matchMedia("(max-width: 599px)").matches) {
                            const appHeightSplitit = () => {
                                document.querySelector('.splitit-iframe-popup').style.height = window.innerHeight + 'px';
                            }
                            window.addEventListener('resize', appHeightSplitit)
                            appHeightSplitit()
                        }

                        cartDrawer.querySelector('.slide_in__splitit a').addEventListener('click', () => {
                            pushDataLayer('Click on learn more')
                            cartDrawer.parentElement.querySelector('.splitit-iframe-popup').classList.add('active')
                        })

                        function removeSelected(target, boolean = false) {
                            if (boolean) {
                                target.classList.add('selected-wrapper')
                                target.children[0].classList.add('selected')
                                target.closest('.svelte-41engz').querySelector('.single').classList.remove('notSelected')
                                target.closest('.svelte-41engz').querySelector('.single').classList.add('selected')
                            } else {
                                target.classList.remove('selected-wrapper')
                                target.children[0].classList.remove('selected')
                                target.closest('.svelte-41engz').querySelector('.single').classList.add('notSelected')
                                target.closest('.svelte-41engz').querySelector('.single').classList.remove('selected')
                            }
                        }

                        cartDrawer.parentElement.querySelector('.splitit-iframe-popup img[alt="close"]').addEventListener('click', () => {
                            closePopup = true
                            cartDrawer.parentElement.querySelector('.splitit-iframe-popup').classList.remove('active')
                            removeSelected(cartDrawer.parentElement.querySelector('.splitit-iframe-popup .single-option'))
                            pushDataLayer('Сlose popup: Click X','Popup: Splitit')
                        })
                        cartDrawer.parentElement.querySelector('.splitit-iframe-popup > div > main > div > div > div > section > div.flex.items-end.justify-between.pb-4 > div.ml-2.cursor-pointer.rounded.bg-black.px-4.py-2.text-center.text-base.font-bold.text-white').addEventListener('click', () => {
                            closePopup = true
                            cartDrawer.parentElement.querySelector('.splitit-iframe-popup').classList.remove('active')
                            removeSelected(cartDrawer.parentElement.querySelector('.splitit-iframe-popup .single-option'))
                            pushDataLayer('Continue shopping','Popup: Splitit')
                        })
                        cartDrawer.parentElement.querySelector( '.splitit-iframe-popup img[alt="back"]').addEventListener('click', () => {
                            closePopup = true
                            cartDrawer.parentElement.querySelector('.splitit-iframe-popup').classList.remove('active')
                            removeSelected(cartDrawer.parentElement.querySelector('.splitit-iframe-popup .single-option'))
                            pushDataLayer('Return to cart','Popup: Splitit')
                        })

                        cartDrawer.parentElement.querySelector('.splitit-iframe-popup .single-option').addEventListener('click', (e) => {
                            removeSelected(e.currentTarget ,true)
                        })
                        document.addEventListener('click', (e) => {
                            if (!e.target.closest('.splitit-iframe-popup .splitit-modal') && document.querySelector('.splitit-iframe-popup.active') != null || e.target.classList.contains('splitit-iframe-popup')) {
                                if (e.target.tagName != 'A') {
                                    document.querySelector('.splitit-iframe-popup').classList.remove('active')
                                    pushDataLayer('Сlose popup: Click out of popup','Popup: Splitit')
                                }
                            }
                        })
                    
                        console.log(isCompleted)


                        if (appikon['discounts']['additional_discount_value'] != null && appikon['discounts']['additional_discount_value'] != 0) {
                            isCompleted = true;

                            console.log(appikon['discounts']['additional_discount_value'])
                        }

                        console.log(isCompleted)
                        if (isCompleted == true) {
                            let completedIntervat = setInterval(() => {
                                if (appikon['discounts']['additional_discount_value'] != null && appikon['discounts']['additional_discount_value'] != 0) {
                                    clearInterval(completedIntervat)
                                    new Discount(cartDrawer.querySelector('.slide_in__discount'), true).render()
                                }
                            }, 200)
                        } else {
                            let notCompletedIntervat = setInterval(() => {
                                if (appikon['discounts']['additional_discount_value'] == null || appikon['discounts']['additional_discount_value'] == 0) {
                                    clearInterval(notCompletedIntervat)
                                    new Discount(cartDrawer.querySelector('.slide_in__discount'), false).render()
                                }
                            }, 200)
                        }

                        splititPopup(cartDrawer, document.querySelector('.splitit-iframe-popup'))

                        let bundle = false;
                        for (let i = 0; i < items.length; i++) {
                            let variantId = items[i].variant_id;

                            if (variantId == '39758302806070') {
                                bundle = false;
                                
                                if (sessionStorage.getItem('scrollTo') != null) {
                                    cartDrawer.querySelector('.container').scrollTo(0, +sessionStorage.getItem('scrollTo'));
                                    sessionStorage.removeItem('scrollTo')
                                }
                                return
                            }
                        }
                        for (let i = 0; i < items.length; i++) {
                            let variantId = items[i].variant_id,
                                qty = items[i].quantity;

                            if (productHaveBundle[variantId] != null && qty < 2) {
                                bundle = true;
                                console.log(bundle)
                                break;
                            } 
                        }
                    
                        if (bundle == true) {
                            new ProductItem(cartDrawer.querySelector('.slide_in__bundle'), bundleObj.url, bundleObj.img, bundleObj.title, bundleObj.compare, bundleObj.price, bundleObj.variantId, bundleObj.id, 'false', 1, 'addToCart').render()
                            cartDrawer.querySelector('.slide_in__bundle').style.display = 'block';
                            
                            pushDataLayer('Visibility of Bundle items in the cart')

                        }  

                        if (sessionStorage.getItem('scrollTo') != null) {
                            cartDrawer.querySelector('.container').scrollTo(0, +sessionStorage.getItem('scrollTo'));
                            sessionStorage.removeItem('scrollTo')
                        }
                       
                        
                    }
                })

            }

            cartDrawer.querySelector('.slide_in__header > p').classList.remove('loading')
        }
    });
}

class ProductItem {
    constructor(parent, link, image, name, compare, price, variantId, id, hasVariant, qty, type = '') {
        this.parent = parent;
        this.link = link;
        this.image = image;
        this.name = name;
        this.compare = compare != '' ? '$'+priceSubstr(compare) : '';
        this.price = priceSubstr(price);
        this.variantId = variantId;
        this.id = id;
        this.hasVariant = hasVariant;
        this.qty = qty;
        this.type = type;
        this.renderBottom();
    }
    renderBottom() {
        if (this.type == 'addToCart') {
            return `<button type="button" class="btn-purple add-to-cart" data-id="${this.id}" data-variant-id="${this.variantId}">Add to cart</button>`
        } else {
            return `<div class="flx-between">
                        <div class="d-flex calc_block">
                            <button type="button" class="calc_action calc_action__minus"></button>
                            <input type="number" value="${this.qty}" class="clac_qty">
                            <button type="button" class="calc_action calc_action__plus"></button>
                        </div>
                        <button type="button" class="item_product__delete d-flex">
                            <svg class="m-auto" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.857143 12.6875C0.857143 13.4258 1.41964 14 2.14286 14H9.85714C10.5536 14 11.1429 13.4258 11.1429 12.6875V3.5H0.857143V12.6875ZM8.14286 5.6875C8.14286 5.46875 8.33036 5.25 8.57143 5.25C8.78571 5.25 9 5.46875 9 5.6875V11.8125C9 12.0586 8.78571 12.25 8.57143 12.25C8.33036 12.25 8.14286 12.0586 8.14286 11.8125V5.6875ZM5.57143 5.6875C5.57143 5.46875 5.75893 5.25 6 5.25C6.21429 5.25 6.42857 5.46875 6.42857 5.6875V11.8125C6.42857 12.0586 6.21429 12.25 6 12.25C5.75893 12.25 5.57143 12.0586 5.57143 11.8125V5.6875ZM3 5.6875C3 5.46875 3.1875 5.25 3.42857 5.25C3.64286 5.25 3.85714 5.46875 3.85714 5.6875V11.8125C3.85714 12.0586 3.64286 12.25 3.42857 12.25C3.1875 12.25 3 12.0586 3 11.8125V5.6875ZM11.5714 0.875H8.35714L8.08929 0.382812C7.98214 0.164062 7.76786 0 7.52679 0H4.44643C4.20536 0 3.99107 0.164062 3.88393 0.382812L3.64286 0.875H0.428571C0.1875 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.1875 2.625 0.428571 2.625H11.5714C11.7857 2.625 12 2.43359 12 2.1875V1.3125C12 1.09375 11.7857 0.875 11.5714 0.875Z" fill="#BBBBBB"/>
                            </svg> 
                        </button>
                    </div>`
        }
    }
    changeQtyProduct(button, id) {
        button.addEventListener('click', (e) => {
            let inputQty = button.closest('.calc_block').querySelector('.clac_qty');
            
            if (button.classList.contains('calc_action__plus')) {
                inputQty.value = +inputQty.value + 1;
            } else {
                if (inputQty.value < 2) {
                    inputQty.value = 1;
                } else {
                    inputQty.value = +inputQty.value - 1;
                }
            }
            updateCart(id, +inputQty.value)
            pushDataLayer('Changing the quantity', inputQty.value)
        })
    }
    render() {
        let element = document.createElement('li');
        element.classList.add('item_product');
        element.dataset.variantId = this.variantId;
        element.dataset.id = this.id;

        if (this.parent.classList.contains('slide_in__bundle')) {
            console.log(this.parent.classList.contains('slide_in__bundle'))
            this.parent.innerHTML = ''
            this.parent.style.display = 'none';
        }
        if (this.id == bundleObj.id) {
            this.parent.insertAdjacentHTML('afterbegin', '<p class="c-purple fw-medium"><span class="fw-bold">Bundle up and save</span>: get $400 off when you buy our package deal!</p>')
            this.parent.style = '';
        }

        element.innerHTML = `
            <div class="d-flex">
                <img src="${this.image}" alt="${this.name}">
                <div>
                    <p class="item_product__name">${this.name}</p>
                    <p class="item_product__price"><span class="compare">${this.compare}</span> <span class="pr c-purple fw-bold">$${this.price}</span></p>
                    ${this.renderBottom()}
                </div>
            </div>`;

        this.parent.appendChild(element);
       
        if (this.type != 'addToCart') {
            this.parent.querySelector(`[data-variant-id="${this.variantId}"] .item_product__delete`).addEventListener('click', (e) => {
                updateCart(this.variantId)
                pushDataLayer('Removal of product from the cart', this.name)
            })
            this.parent.querySelectorAll(`[data-variant-id="${this.variantId}"] .calc_action`).forEach(button => {
                this.changeQtyProduct(button, this.variantId)
            })
            this.parent.querySelector(`[data-variant-id="${this.variantId}"] .clac_qty`).addEventListener('input', (e) => {
                if (e.target.value != '') {
                    updateCart(this.variantId, e.target.value)
                }
               
                pushDataLayer('Changing the quantity', e.target.value)
            })
            this.parent.querySelector(`[data-variant-id="${this.variantId}"] .clac_qty`).addEventListener('blur', (e) => {
                if (e.target.value == '') {
                    updateCart(this.variantId, 1)
                }
            })
        } else {
            document.querySelector(`[data-variant-id="${this.variantId}"] .add-to-cart`).addEventListener('click', (e) => {

                if (e.target.dataset.variantId == '39758302806070') {
                    let pr_1 = e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="39782656311350"]') != null ? e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="39782656311350"]') : '';
                    let pr_2 = e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="32854816784438"]') != null ? e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="32854816784438"]') : '';
                    let pr_3 = e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="40322897838134"]') != null ? e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="40322897838134"]') : '';
                    let pr_4 = e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="39737414484022"]') != null ? e.target.closest('.slide_in__body').querySelector('.slide_in__products [data-variant-id="39737414484022"]') : '';
                
                    if ( pr_1 != '' && pr_1.querySelector('.clac_qty').value < 2) {
                        addCart(this.variantId, 1, 39782656311350)
                    }
                    if (pr_2 != '' && pr_2.querySelector('.clac_qty').value < 2) {
                        addCart(this.variantId, 1, 32854816784438)
                    }
                    if (pr_3 != '' && pr_3.querySelector('.clac_qty').value < 2 ) {
                        addCart(this.variantId, 1, 40322897838134)
                    }
                    if (pr_4 != '' && pr_4.querySelector('.clac_qty').value < 2 ) {
                        addCart(this.variantId, 1, 39737414484022)
                    }
                    pushDataLayer('Add to cart button on the Bundle offer')
                    sessionStorage.setItem('scrollTo', 0)
                } else {
                    if (e.target.closest('.may_like')) { 
                        let bottom =  this.parent.closest('.container').scrollHeight;
                        sessionStorage.setItem('scrollTo', bottom)
                    } else {
                        sessionStorage.setItem('scrollTo', 0)
                    }

                    addCart(e.target.dataset.variantId, 1)
                    if (this.parent.classList.contains('slide_in__products')) {
                        pushDataLayer('Click on add to cart in empty cart')
                    } else {
                        pushDataLayer('Click on Add to cart button in the Upsale block')
                    }
                }
            })
        }
    }
}

let discountShopacado = {
    40365298679862: { //Novaa Oral Care Pro (varinat id)
        'nameOffer':'Oral Care Pro - Black Friday Bundle discount',
        'details': ['2/99.90','3/89.90']
    },
    40156488761398: { //Novaa Extra-Strength Healing Laser
        'nameOffer':'Laser - Black Friday Bundle discount',
        'details': ['2/269.90','3/229.90']
    },
    32854816784438: { //Novaa Light Pro™ - Limited sale price
        'nameOffer': 'Light Pro - Black Friday Bundle discount',
        'details': ['2/129.90','3/99.90']
    },
    '': { //The Novaa Deep Healing Therapy Pad™
        'nameOffer': 'Deep Healing Pad for Knee - Black Friday Bundle discount',
        'details': ['2/239.90','3/199.90']
    },
    40322897838134: { //The Novaa Deep Healing Therapy Pad™
        'nameOffer': 'Deep Healing Pad - Black Friday Bundle discount',
        'details': ['2/249.90','3/229.90']
    },
    39413432909878: { //Novaa Deep Healing Pad™ for professionals
        'nameOffer': 'RLT Pad for Professionals - Volume Discount',
        'details': ['3/209.90','5/199.90']
    },
    33084012134454: { //Novaa Light Pro™ - for Professionals
        'nameOffer': 'RLT HH for Professionals - Volume Discount',
        'details': ['5/99.90','10/94.90']
    }
}

class DiscountProduct {
    constructor(initialElement, priceProduct, compareProduct, qtyProduct, priceDiscount, qtyDiscount) {
        this.initialElement = initialElement;
        this.priceProduct = +priceProduct;
        this.compareProduct = +compareProduct;
        this.qtyProduct = +qtyProduct;
        this.priceDiscount = (+priceDiscount).toFixed(2);
        this.qtyDiscount = +qtyDiscount;
        this.isVisible = false;

    }
    renderDiscount() {
        let saved = ((this.compareProduct * this.qtyProduct) - (this.priceProduct * this.qtyProduct)).toFixed(2)

        if (this.qtyProduct == 1 || this.qtyDiscount == 5 || this.qtyDiscount == 10) {
            return `<p class="text-center fw-bold" style="width: 100%;"> Buy ${this.qtyDiscount} to get them for <span class="c-purple">$${this.priceDiscount}</span> each</p>`
        } else if (this.qtyProduct == 2) {
            return `
                <svg class="mb-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.68929 15.8074C10.0554 16.1736 10.649 16.1736 11.0151 15.8074L17.3045 9.51804C17.6706 9.15192 17.6706 8.55833 17.3045 8.19221C16.9384 7.8261 16.3448 7.8261 15.9787 8.19221L10.3522 13.8187L8.02106 11.4876C7.65494 11.1215 7.06135 11.1215 6.69524 11.4876C6.32912 11.8537 6.32913 12.4473 6.69525 12.8134L9.68929 15.8074Z" fill="#773BD9"/>
                    <g mask="url(#mask1_78_3134)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 1.43051e-06 12 1.43051e-06C5.37259 1.43051e-06 0 5.37259 0 12ZM12 22.125C6.40813 22.125 1.875 17.5919 1.875 12C1.875 6.40813 6.40813 1.875 12 1.875C17.5919 1.875 22.125 6.40813 22.125 12C22.125 17.5919 17.5919 22.125 12 22.125Z" fill="#773BD9"/>
                    </g>
                </svg>
                <div>
                    <p class="c-grey-300">Yay! You just saved <span>$${saved}</span> </p>
                    <p class="fw-bold">Buy ${this.qtyDiscount} and get each for <span class="c-purple">$${this.priceDiscount}</span>,<br> saving even more</p>
                <div>`
        } else if (this.qtyProduct >= 3 && this.qtyDiscount != 10 && this.qtyDiscount != 5) {
            return `
                <svg class="mb-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.68929 15.8074C10.0554 16.1736 10.649 16.1736 11.0151 15.8074L17.3045 9.51804C17.6706 9.15192 17.6706 8.55833 17.3045 8.19221C16.9384 7.8261 16.3448 7.8261 15.9787 8.19221L10.3522 13.8187L8.02106 11.4876C7.65494 11.1215 7.06135 11.1215 6.69524 11.4876C6.32912 11.8537 6.32913 12.4473 6.69525 12.8134L9.68929 15.8074Z" fill="#773BD9"/>
                    <g mask="url(#mask1_78_3134)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 1.43051e-06 12 1.43051e-06C5.37259 1.43051e-06 0 5.37259 0 12ZM12 22.125C6.40813 22.125 1.875 17.5919 1.875 12C1.875 6.40813 6.40813 1.875 12 1.875C17.5919 1.875 22.125 6.40813 22.125 12C22.125 17.5919 17.5919 22.125 12 22.125Z" fill="#773BD9"/>
                    </g>
                </svg>
                <p class="fw-bold">Yay! You just saved <span class="c-purple">$${saved}</span> </p> `
        }
    }
    isVisibleDataLayer(message) {
        let isActiveCart = setInterval(() => {
            if (this.isVisible == false && isScrolledIntoView(`.slide_in__message._${this.qtyProduct}`) && document.querySelector('.slide_in__cart.active') != null) {
                clearInterval(isActiveCart)
                this.isVisible = true;
                pushDataLayer('Visibility of messages when buying', message)
            }
        }, 100)
    }
    render() {
        let element = `<div class="slide_in__message d-flex items-center _${this.qtyProduct}" style="margin-top: 16px;">${this.renderDiscount()}</div>`;
      
        this.initialElement.insertAdjacentHTML('beforeend', element);
        let message = this.initialElement.querySelector('.slide_in__message').innerText;
       

        document.querySelector('.slide_in__cart > .container').addEventListener('scroll', () => this.isVisibleDataLayer(message))
        this.isVisibleDataLayer(message)
    }
}

class Message {
    constructor(item, position, style) {
        this.item = item;
        this.position = position;
        this.style = style;
        this.getVariantMessage();
    }

    getVariantMessage() {

        if (this.style == 'freeshipping') {
            return `
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_78_7029)">
                    <path d="M11.5404 21.1214C12.434 20.2884 12.5716 18.9835 11.8477 18.207C11.1238 17.4304 9.81253 17.4762 8.91888 18.3093C8.02523 19.1423 7.88762 20.4472 8.61152 21.2237C9.33542 22.0003 10.6467 21.9545 11.5404 21.1214Z" fill="#773BD9"/>
                    <path d="M23.3646 21.1224C24.2582 20.2894 24.3958 18.9845 23.6719 18.2079C22.948 17.4314 21.6367 17.4772 20.7431 18.3102C19.8494 19.1433 19.7118 20.4481 20.4357 21.2247C21.1596 22.0012 22.4709 21.9555 23.3646 21.1224Z" fill="#773BD9"/>
                    <path d="M2.16445 10.926C2.16445 10.4103 1.74638 9.99219 1.23066 9.99219C0.714947 9.99219 0.296875 10.4103 0.296875 10.926C0.296875 11.4417 0.714947 11.8598 1.23066 11.8598C1.74638 11.8598 2.16445 11.4417 2.16445 10.926Z" fill="#773BD9"/>
                    <path d="M18.9495 19.5201C19.2815 17.8795 20.8313 16.5757 22.4971 16.5757C24.1011 16.5757 25.2572 17.7849 25.2255 19.3396C26.9602 19.385 27.443 17.1007 27.443 17.1007C27.5891 16.462 27.8073 15.2167 27.9899 13.9945C28.0498 13.6171 28.0038 13.2305 27.857 12.8778C27.4036 11.8192 26.8556 10.8038 26.2197 9.84369C25.6181 8.94627 24.6091 8.41471 23.4574 8.39557C22.7705 8.38463 22.0962 8.37807 21.5871 8.37807L21.5827 8.37369C21.5171 7.27557 20.7165 6.43447 19.5927 6.33385C18.8615 6.26877 15.9652 6.22119 14.5751 6.22119C14.0227 6.22119 13.2303 6.22885 12.4286 6.24197V6.23869H12.422H2.78281C2.66013 6.23862 2.53864 6.26273 2.42528 6.30965C2.31192 6.35656 2.20892 6.42536 2.12217 6.51211C2.03542 6.59886 1.96662 6.70186 1.91971 6.81522C1.87279 6.92858 1.84868 7.05007 1.84875 7.17275V7.17713C1.84875 7.4237 1.9467 7.66017 2.12105 7.83452C2.2954 8.00887 2.53187 8.10682 2.77844 8.10682H4.72148C4.95545 8.12407 5.17425 8.22913 5.33399 8.40095C5.49374 8.57276 5.58262 8.79862 5.58281 9.03322V9.03814C5.58317 9.16095 5.55931 9.28261 5.5126 9.39618C5.46589 9.50975 5.39724 9.613 5.31059 9.70001C5.22393 9.78702 5.12097 9.85609 5.00759 9.90327C4.89421 9.95044 4.77264 9.9748 4.64984 9.97494H3.65344C3.40585 9.97494 3.16841 10.0733 2.99334 10.2484C2.81827 10.4234 2.71992 10.6609 2.71992 10.9085C2.71985 11.0311 2.74394 11.1525 2.79082 11.2659C2.83771 11.3792 2.90646 11.4822 2.99315 11.5689C3.07984 11.6556 3.18278 11.7245 3.29607 11.7714C3.40937 11.8184 3.5308 11.8425 3.65344 11.8425H4.64984C4.89757 11.8425 5.13515 11.9409 5.31033 12.1161C5.4855 12.2913 5.58391 12.5289 5.58391 12.7766C5.58391 13.0243 5.4855 13.2619 5.31033 13.4371C5.13515 13.6122 4.89757 13.7106 4.64984 13.7106H0.922344C0.67471 13.7106 0.43721 13.809 0.262055 13.984C0.0869001 14.1591 -0.0115738 14.3965 -0.0117188 14.6442C-0.0117187 14.8919 0.0866911 15.1295 0.261862 15.3046C0.437033 15.4798 0.674615 15.5782 0.922344 15.5782H4.64984C4.89757 15.5782 5.13515 15.6766 5.31033 15.8518C5.4855 16.027 5.58391 16.2646 5.58391 16.5123C5.58362 16.7598 5.48508 16.9971 5.30994 17.1721C5.1348 17.347 4.89738 17.4453 4.64984 17.4453H3.49703C3.24945 17.4453 3.012 17.5436 2.83694 17.7187C2.66187 17.8937 2.56352 18.1312 2.56352 18.3788C2.56352 18.6264 2.66185 18.8639 2.8369 19.0391C3.01196 19.2142 3.2494 19.3127 3.49703 19.3128L7.17531 19.3101L7.48102 18.5483C8.10719 17.3933 9.35297 16.5752 10.672 16.5752C12.3384 16.5752 13.5218 17.88 13.3916 19.5217H18.949M9.68492 10.4097H8.43148C8.4303 10.4098 8.42918 10.4103 8.42829 10.4111C8.4274 10.4119 8.4268 10.4129 8.42656 10.4141L8.31117 11.2344C8.311 11.2351 8.31099 11.2357 8.31113 11.2364C8.31127 11.2371 8.31157 11.2377 8.31199 11.2382C8.31242 11.2388 8.31296 11.2392 8.31358 11.2395C8.31419 11.2397 8.31487 11.2399 8.31555 11.2399H9.24852C9.29431 11.2386 9.33982 11.2475 9.38172 11.266C9.42362 11.2845 9.46087 11.3122 9.49073 11.3469C9.5206 11.3816 9.54233 11.4226 9.55436 11.4668C9.56638 11.511 9.56839 11.5574 9.56023 11.6024C9.54425 11.7015 9.49422 11.7919 9.41876 11.8581C9.3433 11.9243 9.24712 11.9621 9.1468 11.965H8.21273C8.2116 11.965 8.21049 11.9654 8.20959 11.9661C8.20869 11.9668 8.20807 11.9677 8.20781 11.9688L8.04047 13.1605C8.02448 13.2596 7.97445 13.35 7.89899 13.4162C7.82353 13.4823 7.72736 13.5201 7.62703 13.5231C7.58125 13.5244 7.53576 13.5155 7.49387 13.4969C7.45199 13.4784 7.41477 13.4508 7.38495 13.416C7.35512 13.3813 7.33344 13.3403 7.32149 13.2961C7.30953 13.2519 7.30761 13.2055 7.31586 13.1605L7.75008 10.0696C7.76728 9.9649 7.82034 9.86949 7.90015 9.79965C7.97996 9.72982 8.08157 9.6899 8.18758 9.68674H9.78609C9.83187 9.68542 9.87737 9.69435 9.91925 9.71287C9.96114 9.73139 9.99835 9.75904 10.0282 9.79379C10.058 9.82855 10.0797 9.86953 10.0916 9.91374C10.1036 9.95795 10.1055 10.0043 10.0973 10.0493C10.0811 10.1479 10.031 10.2378 9.95581 10.3036C9.88057 10.3693 9.7848 10.4068 9.68492 10.4097ZM13.0351 9.93283C13.1653 10.0484 13.2569 10.2011 13.2976 10.3703C13.343 10.5621 13.3505 10.7609 13.3195 10.9555C13.2814 11.2583 13.1575 11.5439 12.9623 11.7785C12.8432 11.9194 12.6918 12.0296 12.521 12.0996C12.5202 12.1004 12.5198 12.1014 12.5198 12.1026C12.5198 12.1037 12.5202 12.1048 12.521 12.1056L12.8316 13.0019C12.9153 13.2425 12.7004 13.5231 12.433 13.5231H12.4155C12.3506 13.525 12.2868 13.5062 12.2333 13.4694C12.1798 13.4326 12.1394 13.3798 12.118 13.3185L11.7423 12.2248C11.7417 12.224 11.741 12.2233 11.7401 12.2228C11.7393 12.2223 11.7383 12.2221 11.7373 12.2221H10.9389C10.9378 12.2221 10.9367 12.2225 10.9358 12.2232C10.935 12.2239 10.9343 12.2248 10.934 12.2259L10.8027 13.1599C10.7867 13.259 10.7367 13.3494 10.6613 13.4156C10.5858 13.4818 10.4896 13.5196 10.3893 13.5225C10.3435 13.5238 10.298 13.5149 10.2561 13.4964C10.2143 13.4779 10.177 13.4502 10.1472 13.4155C10.1174 13.3807 10.0957 13.3397 10.0838 13.2955C10.0718 13.2513 10.0699 13.205 10.0781 13.1599L10.5123 10.069C10.5295 9.96435 10.5826 9.86894 10.6624 9.79911C10.7422 9.72927 10.8438 9.68935 10.9498 9.68619H12.1858C12.1858 9.68619 12.7283 9.66924 13.0351 9.93283ZM16.4366 10.0236C16.4218 10.1162 16.3751 10.2006 16.3046 10.2624C16.2341 10.3242 16.1443 10.3595 16.0505 10.3621H14.6128C14.6117 10.3622 14.6106 10.3626 14.6098 10.3633C14.6089 10.364 14.6082 10.3649 14.6079 10.366L14.4936 11.1775C14.4934 11.1782 14.4934 11.1789 14.4935 11.1795C14.4937 11.1802 14.494 11.1808 14.4944 11.1813C14.4948 11.1819 14.4954 11.1823 14.496 11.1826C14.4966 11.1829 14.4973 11.183 14.498 11.183H15.6147C15.6575 11.1817 15.7 11.19 15.7391 11.2073C15.7782 11.2246 15.813 11.2504 15.8409 11.2828C15.8688 11.3153 15.8891 11.3536 15.9003 11.3948C15.9115 11.4361 15.9133 11.4794 15.9056 11.5215C15.8908 11.6141 15.8441 11.6985 15.7736 11.7603C15.7031 11.8221 15.6132 11.8574 15.5195 11.86H14.4023C14.4012 11.8601 14.4001 11.8605 14.3992 11.8612C14.3983 11.8618 14.3977 11.8628 14.3973 11.8638L14.2601 12.8406C14.2601 12.8419 14.2606 12.8432 14.2615 12.8443C14.2624 12.8453 14.2636 12.8459 14.265 12.846H15.7016C15.7444 12.8448 15.7869 12.8531 15.8261 12.8704C15.8652 12.8876 15.9 12.9134 15.9279 12.9459C15.9558 12.9783 15.976 13.0166 15.9872 13.0579C15.9984 13.0992 16.0003 13.1425 15.9926 13.1846C15.9777 13.2771 15.931 13.3616 15.8605 13.4234C15.79 13.4852 15.7002 13.5204 15.6065 13.5231H13.8237C13.7756 13.5237 13.7279 13.5138 13.6841 13.494C13.6402 13.4742 13.6013 13.445 13.5699 13.4085C13.5386 13.372 13.5157 13.329 13.5029 13.2827C13.49 13.2363 13.4875 13.1877 13.4955 13.1403L13.927 10.0712C13.9442 9.96654 13.9973 9.87113 14.0771 9.80129C14.1569 9.73146 14.2585 9.69154 14.3645 9.68838H16.1468C16.1891 9.68737 16.2312 9.69575 16.2699 9.71291C16.3086 9.73007 16.3431 9.75558 16.3708 9.78763C16.3985 9.81967 16.4188 9.85744 16.4302 9.89824C16.4415 9.93904 16.4438 9.98186 16.4366 10.0236ZM19.4231 10.0236C19.4083 10.1162 19.3616 10.2006 19.2911 10.2624C19.2206 10.3242 19.1307 10.3595 19.037 10.3621H17.5993C17.5982 10.3622 17.5971 10.3626 17.5962 10.3633C17.5954 10.364 17.5947 10.3649 17.5944 10.366L17.4806 11.1775C17.4805 11.1782 17.4804 11.1789 17.4806 11.1795C17.4807 11.1802 17.481 11.1808 17.4814 11.1813C17.4819 11.1819 17.4824 11.1823 17.483 11.1826C17.4836 11.1829 17.4843 11.183 17.485 11.183H18.6017C18.6445 11.1817 18.687 11.19 18.7261 11.2073C18.7653 11.2246 18.8001 11.2504 18.8279 11.2828C18.8558 11.3153 18.8761 11.3536 18.8873 11.3948C18.8985 11.4361 18.9003 11.4794 18.8927 11.5215C18.8778 11.6141 18.8311 11.6985 18.7606 11.7603C18.6901 11.8221 18.6003 11.8574 18.5066 11.86H17.3888C17.3876 11.8601 17.3866 11.8605 17.3857 11.8612C17.3848 11.8618 17.3842 11.8628 17.3838 11.8638L17.2466 12.8406C17.2466 12.8419 17.2471 12.8432 17.248 12.8443C17.2489 12.8453 17.2501 12.8459 17.2515 12.846H18.6881C18.7309 12.8448 18.7734 12.8531 18.8125 12.8704C18.8517 12.8876 18.8865 12.9134 18.9144 12.9459C18.9422 12.9783 18.9625 13.0166 18.9737 13.0579C18.9849 13.0992 18.9867 13.1425 18.9791 13.1846C18.9642 13.2771 18.9175 13.3616 18.847 13.4234C18.7765 13.4852 18.6867 13.5204 18.593 13.5231H16.8102C16.7621 13.5237 16.7144 13.5138 16.6705 13.494C16.6267 13.4742 16.5877 13.445 16.5564 13.4085C16.5251 13.372 16.5022 13.329 16.4894 13.2827C16.4765 13.2363 16.474 13.1877 16.482 13.1403L16.9135 10.0712C16.9307 9.96654 16.9838 9.87113 17.0636 9.80129C17.1434 9.73146 17.245 9.69154 17.351 9.68838H19.1333C19.1756 9.68737 19.2177 9.69575 19.2564 9.71291C19.2951 9.73007 19.3296 9.75558 19.3573 9.78763C19.385 9.81967 19.4053 9.85744 19.4166 9.89824C19.428 9.93904 19.4302 9.98186 19.4231 10.0236ZM21.5013 9.67307C21.9896 9.67307 22.6218 9.67963 23.2562 9.69002C24.0251 9.7026 24.6977 10.0559 25.1013 10.6585C25.5324 11.3084 25.9199 11.9862 26.2612 12.6874C26.4417 13.0549 26.1098 13.5335 25.675 13.5335H21.0129L21.5013 9.67307Z" fill="#773BD9"/>
                    <path d="M11.8914 11.5458H11.0273L11.1914 10.3624H12.0549C12.0549 10.3624 12.6888 10.3213 12.5848 10.9541C12.5876 10.9541 12.5148 11.5458 11.8914 11.5458Z" fill="#773BD9"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_78_7029">
                    <rect width="28" height="28" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <p class="fw-bold" style="text-transform: uppercase;"> Free US shipping</p>`
        } else if (this.style == 'guarantee') {
            return `
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.625 4.24988C15.76 4.24988 11.5863 0.97738 11.5425 0.94238C11.388 0.820309 11.1969 0.753906 11 0.753906C10.8031 0.753906 10.612 0.820309 10.4575 0.94238C10.4137 0.97738 6.2575 4.24988 1.375 4.24988C1.14294 4.24988 0.920376 4.34207 0.756282 4.50616C0.592187 4.67026 0.5 4.89282 0.5 5.12488V12.9999C0.5 18.8711 2.87125 21.7499 10.6413 25.1711C10.7541 25.2218 10.8763 25.2481 11 25.2481C11.1237 25.2481 11.2459 25.2218 11.3587 25.1711C19.1287 21.7499 21.5 18.8711 21.5 12.9999V5.12488C21.5 4.89282 21.4078 4.67026 21.2437 4.50616C21.0796 4.34207 20.8571 4.24988 20.625 4.24988ZM11 19.9999C9.61553 19.9999 8.26215 19.5893 7.11101 18.8202C5.95986 18.051 5.06266 16.9577 4.53284 15.6787C4.00303 14.3996 3.86441 12.9921 4.1345 11.6342C4.4046 10.2764 5.07128 9.0291 6.05025 8.05013C7.02922 7.07116 8.2765 6.40448 9.63437 6.13438C10.9922 5.86429 12.3997 6.00291 13.6788 6.53272C14.9579 7.06254 16.0511 7.95974 16.8203 9.11089C17.5895 10.262 18 11.6154 18 12.9999C18 14.8564 17.2625 16.6369 15.9497 17.9496C14.637 19.2624 12.8565 19.9999 11 19.9999Z" fill="#773BD9"/>
                    <path d="M13.0044 10.6284L10.1256 13.5159L8.9969 12.3784C8.91532 12.2968 8.81846 12.2321 8.71187 12.188C8.60527 12.1438 8.49103 12.1211 8.37565 12.1211C8.26027 12.1211 8.14603 12.1438 8.03943 12.188C7.93284 12.2321 7.83598 12.2968 7.7544 12.3784C7.67282 12.46 7.6081 12.5569 7.56395 12.6635C7.51979 12.77 7.49707 12.8843 7.49707 12.9997C7.49707 13.1151 7.51979 13.2293 7.56395 13.3359C7.6081 13.4425 7.67282 13.5393 7.7544 13.6209L9.5044 15.3709C9.58574 15.4529 9.68252 15.518 9.78915 15.5625C9.89577 15.6069 10.0101 15.6297 10.1256 15.6297C10.2412 15.6297 10.3555 15.6069 10.4622 15.5625C10.5688 15.518 10.6656 15.4529 10.7469 15.3709L14.2469 11.8709C14.3285 11.7893 14.3932 11.6925 14.4374 11.5859C14.4815 11.4793 14.5042 11.3651 14.5042 11.2497C14.5042 11.1343 14.4815 11.02 14.4374 10.9135C14.3932 10.8069 14.3285 10.71 14.2469 10.6284C14.1653 10.5468 14.0685 10.4821 13.9619 10.438C13.8553 10.3938 13.741 10.3711 13.6256 10.3711C13.5103 10.3711 13.396 10.3938 13.2894 10.438C13.1828 10.4821 13.086 10.5468 13.0044 10.6284Z" fill="#773BD9"/>
                </svg>
                <p style="text-transform: uppercase;">Shop confidently <br> <span class="fw-bold">60-day money back guarantee</span></p>`
        } 
    }
    render() {
        let element = `<div class="slide_in__message d-flex items-center ${this.style}">${this.getVariantMessage()}</div>`;

        this.item.insertAdjacentHTML(this.position, element);
    }
}

class Discount {
    constructor(parent, completed) {
        this.parent = parent;
        this.completed = completed;
    }
    renderCompleted(code, price) {
        this.parent.parentElement.classList.add('element-grid');
        return `
        <p class="d-flex items-center">
            <span class="slide_in__discount_completed c-purple fw-bold">${code}</span>
            <span class="slide_in__discount_delete">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00091 3.58579L1.46537 0.0502526L0.0511592 1.46447L3.58669 5L0.0511588 8.53553L1.46537 9.94975L5.00091 6.41421L8.53644 9.94975L9.95065 8.53553L6.41512 5L9.95065 1.46447L8.53644 0.0502526L5.00091 3.58579Z" fill="#FF0000"/>
                </svg>
            </span>
        </p>
        <p class="slide_in__discount_item c-purple">-$${price}</p>`
    }
    render() {
        console.log(this.completed)
        if (this.completed == false) {
            this.parent.innerHTML = ` <p class="btn-discount c-purple fw-bold">Apply discount code</p>`

            this.parent.parentElement.classList.remove('element-grid');
            this.parent.querySelector('.btn-discount').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                this.parent.classList.remove('completed')
                pushDataLayer('Click on the Apply discount code')

                this.parent.innerHTML = `
                <input type="text" placeholder="Discount code" required>
                <button type="button" class="btn-purple">Apply</button>
                <p class="slide_in__discount_message"></p>`;

                pushDataLayer('Visibility of discount code input')
                this.parent.querySelector('input').addEventListener('click', (e) => {
                    pushDataLayer('Click on discount code input')
                })

                this.parent.querySelector('.btn-purple').addEventListener('click', (e) => {
                    e.stopImmediatePropagation()
                    let discountCode = e.target.previousElementSibling.value.trim();

                    window.appikonDiscount.setCookieMinutes("appikon_discount_" + window.appikonDiscount.settings.shop, discountCode, 5);
                    window.appikon.discount_code = discountCode;  
                    window.appikonDiscount.triggerDiscountCalculation($);
                    window.appikonDiscount.reloadCurrency()

                    this.parent.querySelector('.btn-purple').classList.add('loading_discount')
                    pushDataLayer('Click on Apply button discount code')
                    if (discountCode != '') {
                        let isDiscount = setInterval(() => {
                                if (window.appikon['discounts']['discount_code_error'] != null && window.appikon['discounts']['discount_code_error'] != '') {
                                    clearInterval(isDiscount)
                                    this.parent.classList.add('error')
                                    let firstLetter = window.appikon['discounts']['discount_code_error'].charAt(0)
                                    this.parent.querySelector('.slide_in__discount_message').innerHTML = window.appikon['discounts']['discount_code_error'].toLowerCase().replace(firstLetter.toLowerCase(),firstLetter.toUpperCase());
                                    this.parent.querySelector('.btn-purple').classList.remove('loading_discount')
                                    pushDataLayer('Visibility of error messages on discount code')
                                    isCompleted = false;
                                } 
                                if (window.appikon['discounts']['additional_discount_value'] != null && window.appikon['discounts']['additional_discount_value'] != 0) {
                                    clearInterval(isDiscount)
                                    this.parent.classList.remove('error')
                                    this.parent.classList.add('completed')
                                
                                    this.parent.innerHTML = this.renderCompleted(discountCode, window.appikon['discounts']['additional_discount_value'])
                                  
                                    let subtotal = this.parent.parentElement.querySelector('.slide_in__subtotal .pr');
                                    subtotal.innerHTML = '$' + (+subtotal.innerHTML.replace('$','') - window.appikon['discounts']['additional_discount_value']).toFixed(2);

                                    let saved = this.parent.parentElement.querySelector('.slide_in__saved');
                                    saved.innerHTML = `You just saved $` + (+subtotal.previousElementSibling.innerHTML.replace('$','') - +subtotal.innerHTML.replace('$','')).toFixed(2)
                                    
                                    pushDataLayer('Visibility of applied code')
                                    new Discount(this.parent, true).render()
                                    isCompleted = true;
                                }
                        }, 100);
                    } else {
                        this.parent.classList.add('error')
                        this.parent.querySelector('.btn-purple').classList.remove('loading_discount') ;
                        this.parent.querySelector('.slide_in__discount_message').innerHTML = 'Discount code not found';
                        pushDataLayer('Visibility of error messages on discount code')
                    }
                })
            })
        } else {
            this.parent.classList.add('flx-between')
            console.log(window.appikon['discounts']['additional_discount_value'])
            this.parent.innerHTML = this.renderCompleted(window.appikon.discount_code, window.appikon['discounts']['additional_discount_value']);
            
        }

        if (this.parent.querySelector('.slide_in__discount_delete') != null) {
            this.parent.querySelector('.slide_in__discount_delete').addEventListener('click', (e) => {
                window.appikonDiscount.deleteCookie("appikon_discount_" + window.appikonDiscount.settings.shop);
                delete window.appikon.discount_code;
                window.appikonDiscount.triggerDiscountCalculation($);
                window.appikonDiscount.reloadCurrency()
    
                console.log(window.appikon)
    
                pushDataLayer('Click on the button to remove the discount')
                let deletedInterval = setInterval(() => {
                    if (window.appikon.discount_code == null) {
                        clearInterval(deletedInterval)
                        isCompleted = false;
                        this.parent.closest('.slide_in__cart').querySelector('.slide_in__subtotal').dataset.discount = 0
                        getCart(true)
                    }
                })
            })
        }

        splititPopup(this.parent.closest('.slide_in__cart'), document.querySelector('.splitit-iframe-popup'))
    }
}

let slideInCartHTML = `
<div class="slide_in__cart">
    <div class="container">
        <div>
            <div class="slide_in__header flx-between">
                <p>Cart (<span>0</span>)</p>
                <svg class="slide_in__cart_close" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00022 6.54509L1.45508 0L0.000548353 1.45452L6.54569 7.99961L0 14.5453L1.45453 15.9998L8.00022 9.45413L14.5458 15.9997L16.0004 14.5452L9.45475 7.99961L15.9998 1.45459L14.5453 7.21945e-05L8.00022 6.54509Z" fill="#773BD9"/>
                </svg>
            </div>
        <div class="slide_in__body">
            <ul class="slide_in__products"></ul>
            <ul class="slide_in__bundle"></ul>
            <div class="slide_in__total">
                <div class="slide_in__discount"> </div>
                <div class="slide_in__shipping flx-between">
                    <p>SHIPPING</p>
                    <p class="fw-semi">FREE US shipping</p>
                </div>
                <div class="slide_in__subtotal flx-between">
                    <p>Subtotal</p>
                    <p><span class="compare"></span><span class="pr c-purple fw-bold"></span> </p>
                </div>
                <div class="slide_in__saved fw-semi"></div>
            </div>
        </div>
        <div class="slide_in__footer">
            <div class="slide_in__splitit"></div>
            <a href="/checkout" class="slide_in__to_checkout btn-purple">Checkout >></a>
        </div>
    </div>
</div>`

let visibilityUpsel = false;
let visibilityShipping = false;
let visibilityGuarante = false;
let visibilitySaved = false;
let visibilityApplyDiscount = false;

function isVisible() {
    if (visibilityUpsel == false && isScrolledIntoView('.may_like h4')) {
        visibilityUpsel = true;
        pushDataLayer('Visibility Upsale block')
    }
    if (visibilityShipping == false && isScrolledIntoView('.slide_in__shipping')) {
        visibilityShipping = true;
        pushDataLayer('Free US shipping visibility')
    }
    if (visibilityGuarante == false && isScrolledIntoView('.slide_in__message.guarantee')) {
        visibilityGuarante = true;
        pushDataLayer('60 day money back visibility')
    }
    if (visibilitySaved == false && isScrolledIntoView('.slide_in__saved') && document.querySelector('.slide_in__empty') == null) {
        visibilitySaved = true;
        pushDataLayer(`You just saved ${document.querySelector('.slide_in__saved').innerHTML.split('$')[1]} visibility`)
    }
    if (visibilityApplyDiscount == false && isScrolledIntoView('.slide_in__discount') && document.querySelector('.slide_in__empty') == null) {
        visibilityApplyDiscount = true;
        pushDataLayer(`Visibility of Apply discount code`)
    }
}

function toggleActive(method, eventNon = '') {
    if (method == true) {
        document.querySelector('.slide_in__cart').classList.add('active')
        pushDataLayer('Slide cart visibility')
        document.querySelector('html').classList.add('fixed_body')

        if (eventNon == '') {
            visibilityUpsel = false;
            visibilityShipping = false;
            visibilityGuarante = false;
            visibilitySaved = false;
            visibilityApplyDiscount = false;
        }

        window.addEventListener('scroll', () => isVisible())
        isVisible()
     
        getCart(true)
    } else {
        document.querySelector('.slide_in__cart').classList.remove('active')
        pushDataLayer('Slide cart closing')
        document.querySelector('html').classList.remove('fixed_body')
    }
}

let run = setInterval(() => {
    if (document.querySelector('#AccessibleNav > li:nth-child(3) > a') != null && document.querySelectorAll('.cart-link') && document.querySelectorAll('[data-key="product"] [name="add"]') && appikon != null && appikon['discounts'] != null) {
        clearInterval(run)

        let isDiscount = setInterval(() => {
            if (appikon['discounts'] != null && appikon['discounts']['additional_discount_value'] != null && appikon['discounts']['additional_discount_value'] != 0) {
                clearInterval(isDiscount)
                isCompleted = true
            } 
        })

        document.body.insertAdjacentHTML('afterbegin', styles);
        document.body.insertAdjacentHTML('beforeend', slideInCartHTML)

        new Message(document.querySelector('.slide_in__total'), 'afterend', 'guarantee').render()


        document.querySelector('.slide_in__cart_close').addEventListener('click', (e) => {
            toggleActive(false)
        })
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.container') && document.querySelector('.slide_in__cart.active') != null && document.querySelector('.splitit-iframe-popup.active') == null && !closePopup || e.target.classList.contains('slide_in__cart')) {
                closePopup = false;
                toggleActive(false)
            }
        })

        document.querySelector('#AccessibleNav > li:nth-child(3) > a').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            toggleActive(true)
        })
        document.querySelectorAll('.cart-link').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopImmediatePropagation();
                toggleActive(true)
            })
        })
        document.querySelectorAll('[data-key="product"] [name="add"]').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopImmediatePropagation();
         
                if (item.closest('.gf_row').querySelector('[name="quantity"]') != null) {
                    let qty = +item.closest('.gf_row').querySelector('[name="quantity"]').value;
                    addCart(item.closest('form').querySelector('input[name="id"]').value, qty)

                } else if (item.closest('form').querySelector('[name="quantity"]') != null) {
                    let qty = +item.closest('form').querySelector('[name="quantity"]').value;
                    addCart(item.closest('form').querySelector('input[name="id"]').value, qty)
                   
                }  else {
                    addCart(item.closest('form').querySelector('input[name="id"]').value, 1)
                }
            })
        })
        document.querySelector('.slide_in__to_checkout').addEventListener('click', (e) => {
            // e.preventDefault()
            let discountCode = document.querySelector('.slide_in__discount_completed') != null ? document.querySelector('.slide_in__discount_completed').innerHTML.trim() : '';

            console.log(discountCode)
         
            // if (discountCode != '') {
            //     fetch(`https://novaalab.com/discount/${discountCode}`).then(function(response) {
            //         return response.text();
            //     }).then(function(data) {
            //         window.location.href = '/checkout'
            //     })
            // } else {
                // window.location.href = '/checkout'
            // }
            let objCart = []
            $.ajax({
                'url' : '/cart?view=cw-cart',
                'dataType' : 'json',
                'method' : 'GET',
                'success' : function(data) {
                    let items = data.items;

                    for (let i = 0; i < items.length; i++) {
                        let obj = items[i].title + ':' + items[i].quantity;

                        objCart.push(obj)
                    }
                   
                    pushDataLayer('Click on checkout button', objCart)
                }
            })
        })
        const appHeight = () => {
            document.querySelector('.slide_in__cart > .container').style.height = window.innerHeight + 'px';
        }
        window.addEventListener('resize', appHeight)
        appHeight()

        pushDataLayer('loaded')
    }
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2363391,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('event', 'slide_in_cart');
