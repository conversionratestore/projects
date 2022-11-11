let styleMain =`
<style>
    html.fix {
        overflow: hidden;}
    html.fix body {
        position: relative;
        overflow: hidden;}
    /* Chrome, Safari, Edge, Opera */
    input.quantity::-webkit-outer-spin-button,
    input.quantity::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input.quantity[type=number] {
      -moz-appearance: textfield;}
    .shopping-cart button, .cart-list button {
        background: transparent;
        border: none;
        cursor: pointer;}
    .btn {
        font-family: "Inter", sans-serif;
        background-color: #1E3944;
        border: 2px solid #1E3944;
        border-radius: 40px;
        color: #FBFBFB;
        font-weight: 600;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        line-height: 44px;
        font-size: 12px;
        padding: 0 22px;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap; }
    .btn:not(.btn_white):hover, .btn:not(.btn_white):focus, .btn-next:hover, .btn-next:focus {
        color: #fff;
        background-color: #344D57;
        border-color: #344D57; }
    .btn[disabled] {
        color: #9AA6AB;
        background-color: #F0F1F2;
        border-color: #F0F1F2; }
    .btn[disabled] svg, #form-search button[disabled] svg {
        fill: #9AA6AB; }
    .btn-next {
        background: #1E3944!important;
        border-radius: 100px;
        padding: 0 48px;
        font-weight: 700;
        font-size: 14px;
        line-height: 48px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FBFBFB;
        width: fit-content;
        display: block;}
    .btn-next svg {
        margin-left: 8px;}
    .btn_white {
        background-color: #FFFFFF;
        color: #1E3944; }
    .btn_white.active {
        background-color: #E9EBEC; }
    .btn_white:hover {
        background-color: #F0F1F2;}
    .btn_white[disabled], #form-search button[disabled] {
        border-color: #F0F1F2;
        background-color: #FBFBFB;
        color: #9AA6AB; }
    /*wrapper and header*/
    .header-checkout *, .wrapper-checkout * {
        box-sizing: border-box;
    }
    .header-checkout {
        background: #FBFBFB;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
        position: sticky;
        top: 0;
        z-index: 99;
        padding: 39px 0;
    }
    .header-checkout .container {
        max-width: 1280px;
        padding: 0 20px;
    }
    .logo img {
        width: 185px;
        height: 40px;
    }
    .step {
        position: relative;
    }
    .step:not(:last-child):after {
        content: '';
        border-bottom: 1px dashed #091114;
        height: 0;
        width: 60px;
        margin-right: 8px;
        margin-top: auto;
        margin-bottom: 6px;
    }
    .step .circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #9AA6AB;
        margin-right: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #9AA6AB;
    }
    .step p {
        width: 74px;
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #9AA6AB;
        text-align: left;
        text-transform: capitalize;
    }
    .step.active p, .step.checked p {
        color: #091114;
    }
    .step.active .circle {
        border-color: #091114;
        color: #091114;
    }
    .step.checked .circle {
        border-color: #091114;
        background: #091114 url('https://conversionratestore.github.io/projects/medicalmega/img/icnArrowDown.svg') no-repeat center / 12px;
        color: transparent;
    }
    /*pricing*/
    .order_pricing li:not(:last-child) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #344D57;
        margin-bottom: 8px;
    }
    .order_pricing li:last-child {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #091114;
        padding-top: 20px;
        border-top: 1px solid #E0E4E5;
    }
    /*product cart*/
    .product-item .qty {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #6D7E85;
    }
    .product-item {
        padding: 19.5px 0;
        border-bottom: 1px solid #E0E4E5;
    }
    .product-item:last-child {
        border-bottom: none;
    }
    ul:not(.cart-list) .product-item > div:last-child {
        width: calc(100% - 87px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .product-item > div a:not(.product-item_img) {
        font-size: 12px;
        line-height: 150%;
        color: #6D7E85;
        text-align: left;
        margin-bottom: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .product-item_img {
        margin-right: 4px;
    }
    .product-item_img img {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        object-fit: contain;
    }
    .shopping-cart .total-price, .order_body .total-price {
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        color: #1E3944;
    }
    .remove {
        position: absolute;
        left: 0;
        top: 0;
        background: #FFFFFF!important;
        width: 20px;
        height: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
        border-radius: 100px;
        display: flex;
    }
    .remove svg {
        margin: auto;
    }
    .quantity-btn  {
        width: 18px;
        height: 32px;
        font-size: 21px;
        border: none;
        text-align: center;
    }
    .quantity-btn[disabled] {
        pointer-events: none;
        color: #BCC4C7;
    }
    .quantity {
        color: #344D57;
        text-align: center;
        font-size: 12px;
        line-height: 32px;
        width: 32px;
        height: 32px;
        background: #FBFBFB;
        border: 1px solid #E0E4E5;
        border-radius: 38px;
        margin: 0 12px;
    }
    .popular-products {
        padding-top: 72px;
    }
    /* spacing */
    .ml-40 {
        margin-left: 40px; }  
    .mr-8 {
        margin-right: 8px; } 
    .mr-16 {
        margin-right: 16px; }
    .mt-16 {
        margin-top: 16px; }
    .mt-22 {
        margin-top: 22px; }
    .mx-auto {
        margin-right: auto;
        margin-left: auto; }
    .ml-auto {
        margin-left: auto;}
    /* font */
    .fw-light {
        font-weight: 300; }
    .fw-semi {
        font-weight: 600; }
    .fs-14 {
        font-size: 14px;
        line-height: 25px; }
    .fs-16 {
        font-size: 16px!important;
        line-height: 24px!important; }
    .fs-24 {
        font-size: 24px;
        line-height: 29px; }
    .l-t-02 {
        letter-spacing: 0.02em; }
    .text-small {
        font-weight: normal;
        font-size: 8px;
        line-height: 10px;
        color: #6D7E85; }
    .text-up {
        text-transform: uppercase; }
    .text-center {
        text-align: center; }
    .text-right {
        text-align: right;}
    .text-nowrap {
        white-space: nowrap; }
    /*flex*/
    .flex {
        display: flex;
    }
    .justify-center {
        justify-content: center;
    }
    .justify-end {
        justify-content: flex-end;
    }
    .justify-between {
        justify-content: space-between;
    }
    .flex-center-between {
        align-items: center;
        justify-content: space-between;
    }
    .flex-center {
        align-items: center;
        justify-content: center;
    }
    .items-center {
        align-items: center;
    }
    .flex-end-between {
        justify-content: space-between;
        align-items: flex-end; }
    .flex-wrap {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
    .relative {
        position: relative;
    }
    .w-100 {
        width: 100%; }
    .max-391 {
        width: 100%;
        max-width: 391px; }
    .scroll-x {
        overflow-x: auto;}
    .scroll-x::-webkit-scrollbar {
        display: none; }
    [disabled] {
        pointer-events: none;
    }
</style>`
let href = window.location.href;

let headerFetchAddress = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cart-Token': mm.ctoken,
    'x-api-key': 'Ojza12AGCMUzG6omNmSK8Qx2mdgiSVB5'
}
let obj = {
    'stepsName': ['Personal information','Shipping information','Payment Method','Confirmation'],
    'back' : {
        'personal information' : ['Back to Cart', ['/cart.html','/cart.html']],
        'shipping information' : ['Back to Cart',['/cart.html','/cart.html']],
        'billing information' : ['Back to Shipping Info',['/checkout/step1','/guest-checkout1.php']],
        'delivery method' : ['Back To Address Info',['/checkout/step1','/guest-checkout1.php']],
        'payment method': ['Back to Delivery Method',['/checkout/step2','/guest-checkout2.php']]
    },
    'pricingArr':  {
        'subtotal': 'Sub total',
        'shipping': 'Delivery fee',
        'processing_fee': 'Processing fee',
        'discount': 'Discount',
        'tax': 'Tax',
        'total': 'Grand Total'
    }
}

//post
let postFetch = (host,body,method) => {
    return new Promise((resolve, reject) => {
        fetch(host, {
            headers: headerFetchAddress,
            method: method,
            body: body
        }).then(res => res.json()).then(data => {
            resolve(data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    })
}
//set pricing
let pricing = (parent, data) => {
    document.querySelector(parent).innerHTML = '';
    let pricing = obj['pricingArr']
    for (let key in pricing) {
        for (let keyData in data) {
            if (key == keyData && (data[keyData] != 0 || keyData == 'subtotal' || keyData == 'total')) {
                document.querySelector(parent).insertAdjacentHTML('beforeend', `
                <li class="justify-between flex">
                    <p>${pricing[key]}:</p>
                    <p>$<span>${(+data[keyData].toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>
                </li>`)
            }
        }
    }
}

//add product
let product = (parent, id, variantId, quantity, subtotal, url, imageUrl, title, varQty) => {
    if (parent == '.cart-list') {
        return `
        <li class="flex justify-end product-item" data-id="${id}" data-variant-id="${variantId}">
            <div class="flex">
                <div class="relative mr-16">
                    <a href="${url}" class="product-item_img" title="${title}"> 
                        <img src="${imageUrl}" alt="${title}">
                    </a>
                    <button class="remove" type="button">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.60688 6L9.68305 2.3332C9.73461 2.27227 9.69126 2.17969 9.61157 2.17969H8.67641C8.62133 2.17969 8.5686 2.2043 8.53227 2.24648L5.99516 5.27109L3.45805 2.24648C3.4229 2.2043 3.37016 2.17969 3.31391 2.17969H2.37876C2.29907 2.17969 2.25571 2.27227 2.30727 2.3332L5.38344 6L2.30727 9.6668C2.29572 9.68038 2.28831 9.69699 2.28592 9.71466C2.28353 9.73233 2.28626 9.75031 2.29379 9.76648C2.30131 9.78264 2.31332 9.79631 2.32838 9.80585C2.34344 9.81539 2.36093 9.82041 2.37876 9.82031H3.31391C3.36899 9.82031 3.42172 9.7957 3.45805 9.75352L5.99516 6.72891L8.53227 9.75352C8.56743 9.7957 8.62016 9.82031 8.67641 9.82031H9.61157C9.69126 9.82031 9.73461 9.72774 9.68305 9.6668L6.60688 6Z" fill="#6D7E85"/>
                        </svg>
                    </button>
                </div>
                <a href="${url}" title="${title.split('"').join('`')}" class="fw-semi fs-16">${title}</a>
            </div>
            <div class="flex">
                <button type="button" class="quantity-btn quantity-btn_minus" ${varQty == 1 ? 'disabled': ''}>−</button>
                <input type="number" name="quantity" value="${quantity}" class="quantity" ${varQty == 1 ? 'disabled': ''}>
                <button type="button" class="quantity-btn quantity-btn_plus" ${varQty == 1 ? 'disabled': ''}>+</button>
            </div>
            <div class="total-price flex fs-16 fw-semi justify-end">$<b>${(+subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</b></div>
        </li>`
    } else {
        return `
        <li class="flex product-item" data-id="${id}" data-variant-id="${variantId}">
            <div class="relative">
                <a href="${url}" class="product-item_img" title="${title}"> 
                    <img src="${imageUrl}" alt="${title}">
                </a>
                ${varQty == 0 ? `<button class="remove" type="button">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.60688 6L9.68305 2.3332C9.73461 2.27227 9.69126 2.17969 9.61157 2.17969H8.67641C8.62133 2.17969 8.5686 2.2043 8.53227 2.24648L5.99516 5.27109L3.45805 2.24648C3.4229 2.2043 3.37016 2.17969 3.31391 2.17969H2.37876C2.29907 2.17969 2.25571 2.27227 2.30727 2.3332L5.38344 6L2.30727 9.6668C2.29572 9.68038 2.28831 9.69699 2.28592 9.71466C2.28353 9.73233 2.28626 9.75031 2.29379 9.76648C2.30131 9.78264 2.31332 9.79631 2.32838 9.80585C2.34344 9.81539 2.36093 9.82041 2.37876 9.82031H3.31391C3.36899 9.82031 3.42172 9.7957 3.45805 9.75352L5.99516 6.72891L8.53227 9.75352C8.56743 9.7957 8.62016 9.82031 8.67641 9.82031H9.61157C9.69126 9.82031 9.73461 9.72774 9.68305 9.6668L6.60688 6Z" fill="#6D7E85"/>
                    </svg>
                </button>` : ''}
            </div>
            <div>
                <a href="${url}" title="${title.split('"').join('`')}">${title}</a>
                <div class="flex-center-between flex">
                    ${varQty == 0 ? `<div class="flex items-center">
                        <button type="button" class="quantity-btn quantity-btn_minus" ${varQty == 1 ? 'disabled': ''}>−</button>
                        <input type="number" name="quantity" value="${quantity}" class="quantity" ${varQty == 1 ? 'disabled': ''}>
                        <button type="button" class="quantity-btn quantity-btn_plus" ${varQty == 1 ? 'disabled': ''}>+</button>
                    </div>` : '<p class="qty">Qty: ' + quantity + '</p>'}
                    
                    <div class="total-price flex">$<b>${(+subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</b></div>
                </div>
            </div>
        </li>`
    }
}
//checkout header html 
let headerHTML = `
    <header class="header-checkout">
        <div class="flex flex-center-between container">
            <a href="/" class="logo">
                <img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-checkout.svg" alt="logo">
            </a>
            <div class="flex steps"></div>
        </div>
    </header> `

let stepActive = '';
//add steps in header
let addStep = (query,index) => {
    stepActive = obj['stepsName'][index];
    for (let i = 0; i < obj['stepsName'].length; i++) {
        if (obj['stepsName'][i] != 'Billing information' && obj['stepsName'][i] != 'Delivery Method') {
            document.querySelector(query).insertAdjacentHTML('beforeend', `
            <div class="step flex items-center ${i < index ? 'checked' : i == index ? 'active' : ''}">
                <div class="circle">${i+1}</div>
                <p>${obj['stepsName'][i]}</p>
            </div>`)
        }
    }
}
//push dataLayer
let pushDataLayer = (actionDataLayer, labelDataLayer) => {
    console.log(actionDataLayer + " : " + labelDataLayer)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Total Redesign (desktop)',
        'eventAction': actionDataLayer,
        'eventLabel': labelDataLayer
    });
}

//scroll to
let scrollTop = (targetScroll, offsetTop) => {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    seamless.polyfill();
    seamless.scrollBy(window, { behavior: "smooth", top: offsetPosition, left: 0 });
}

let currentPath = 'https://medicalmega.com/';
let interval = null;

let startStuff = () => {
    interval = setInterval(() => {
        if (window.location.href != currentPath) {
            document.querySelector('.listing_popular').style.display = 'none';
        } else {
            document.querySelector('.listing_popular').style = '';
        }
    }, 100);
}

let stopStuff = () => {
    clearInterval(interval);
}

let toggleListing = (boolean, list, product) => {
    if (boolean == false) {
        document.querySelector(list) != null ? document.querySelector(list).style.display = 'none' : '';
        document.querySelector(product) != null ? document.querySelector(product).style.display = 'block' : '';
        stopStuff()
    } else {
        document.querySelector(list) != null ? document.querySelector(list).style = '' : '';
        document.querySelector(product) != null ? document.querySelector(product).style.display = 'none' : '';
        startStuff()
    }
}

//init
function findImageHits(variants) {
    for (let i = 0; i < variants.length; i++) {
        if (variants[i].image != '') {
            return variants[i].image
        }
    }
}

function initHits(hit) {
    let variants = hit.variants,
        count = 0;
    for (let i = 0; i < variants.length; i++) {
        if (variants[i].in_stock == true && variants[i].price != '0:00') {
            count = i;
            break;
        } else {
            count = i;
        }
    }

    let boxItem = `
    <div class="card">
        <p class="status" style="display:${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0.00' ? 'block' : 'none'}">Out of Stock</p>
        <a class="card_name" href="https://medicalmega.com/product/${hit.seo}">
            <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${findImageHits(hit.variants) != '' ? findImageHits(hit.variants) : 'dummyimage.jpg'}" alt="${hit.name}">
            <span title='${hit.name}'>${hit.name}</span>
        </a>
        <p class="card_item">Item #${hit.item_num}</p>
        <form action="https://medicalmega.com/cart.html" method="post">
            <div class="flex-center flex calc" ${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0:00' ? 'disabled' : ''}>
                <button class="btn-calc btn-calc_minus" type="button" disabled=""></button>
                <input class="calc-qty" type="number" name="quantity" value="1" data-max-value="${hit['variants'][count].qty}">
                <button class="btn-calc btn-calc_plus" type="button"></button>
            </div>
            ${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0.00' ? '<button class="btn btn_white" type="button" data-button="notify"><span>Out of Stock</span></button>' : '<button class="btn btn_dark add-cart" type="button"><span>$<span class="pr" data-price="' + hit['variants'][count].price + '">' + hit['variants'][count].price + '</span> | Add to Cart</span></button>'}
            <input type="hidden" name="product_variant_id" value="${hit['variants'][count].pv_id}">
            <input type="hidden" name="product_id" value="${hit.objectID}">
            <input type="hidden" name="add_to_cart" value="variant">
        </form>
    </div>`

    return boxItem
}

//set Label For Events
let labelForEvents = (e) => {
    if (e.closest('.product')) {
        return `PDP`;
    } else if (e.closest('.cards_similar')) {
        return `Similar Products`;
    } else if (e.closest('.shopping-cart')) {
        return `Shopping Cart`;
    } else if (e.closest('.header')) {
        return `Header`;
    } else if (e.closest('.order_body')) {
        return `Order summary`;
    } else if (e.closest('.col-left')) {
        return `Checkout`;
    } else if (e.closest('.cart')) {
        return `Cart`;
    } else if (e.closest('.confirmation-products')) {
        return `Step 4/4— Confirmation`;
    } else {
        return `Listing`;
    } 
}

//add/remove active
let addActive = (element) => document.querySelector(element).classList.add('active');
let removeActive = (element) => document.querySelector(element).classList.remove('active');

let arrMouth = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let counterBasket = 0;

if (sessionStorage.getItem('old_version') != null) {
    document.querySelector('.exp-loading') != null ? document.querySelector('.exp-loading').remove() : '';
}

window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styleMain)

    //change quantity, update product quantity in cart
    let changeQuantity = (plus, minus, quantity, post=false) => {
        quantity.addEventListener('change', (e) => {
            if (quantity.value < 1) {
                quantity.value = 1
            }
            pushDataLayer('Change quantity field', labelForEvents(e.target))//event
            post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${quantity.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart('.cart_count')) : '';
        })
        plus.addEventListener('click', (e) => {
            quantity.value = +quantity.value + 1;
            quantity.parentElement.querySelector('.quantity-btn_minus').disabled = false;

            pushDataLayer('Click plus button', labelForEvents(e.target)) //event
            post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${plus.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart('.cart_count')) : '';
        })

        if (!href.includes('/checkout/step2') && !href.includes('/checkout/step3') ) {
            if (minus.nextElementSibling.value < 2) {
                minus.disabled = true;
            } else {
                minus.disabled = false;
            }
        } else {
            minus.disabled = true;
        }

        minus.addEventListener('click', (e) => {
            if (minus.nextElementSibling.value < 2) {
                minus.nextElementSibling.value = 1;
                minus.disabled = true;
            } else {
                minus.nextElementSibling.value = +minus.nextElementSibling.value - 1;
            }
            pushDataLayer('Click minus button', labelForEvents(e.target)) //event
            post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${minus.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart('.cart_count')) : '';
        })
    }
    //cart product
    let cart = (setCount) => {
        let parent = href.includes('/checkout/step') || href.includes('/login') || href.includes('/register.php') || href.includes('/guest-checkout') ? ['.order_body'] : href.includes('/cart.html') ? ['.cart-list', '.list-product'] : ['.list-product'];
        //get data
        postFetch('/cart.html',`api=c&cart_action=cart&ctoken=${mm.ctoken}`,'POST').then(data => {
            console.log(data)
            counterBasket = 0;
            localStorage.setItem('dataCart', JSON.stringify(data));
            let products = data['items'];
            parent.forEach(element => {
                document.querySelector(element).innerHTML = '';
                if (element == '.order_body') {
                    pricing('.order_pricing', data)  //add pricing for order
                } else if (element == '.list-product') {
                    document.querySelector('.subtotal').innerHTML = data.subtotal != 0 ? `<p>Total:</p> <p>$<span>${(+data.subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>` : '';
                    if (products.length < 1) {
                        document.querySelector(element).innerHTML = `<div class="empty-cart">
                                <p>Your cart is currently empty.</p>
                                <button type="button" class="btn-next mx-auto"><span>Shop now</span></button>
                            </div>`;
                        document.querySelector('.footer-cart').style.display = 'none';
                        document.querySelector('.subtotal').style.display = 'none';
                        document.querySelector(element).style.margin = 'auto';
                        document.querySelector('.body-cart').style.height = 'calc(100vh - 69px)';
                        document.querySelector('.empty-cart .btn-next').addEventListener('click', (e) => {
                            removeActive('.shopping-cart')
                            document.getElementsByTagName('html')[0].classList.remove('fix');
                            pushDataLayer('Click on Shop now button', labelForEvents(e.target))
                        })
                    } else {
                        document.querySelector('.subtotal').style = '';
                        document.querySelector('.body-cart').style = '';
                        document.querySelector('.footer-cart').style = '';
                        document.querySelector(element).style = '';
                        document.querySelector('.footer-cart .btn-next').addEventListener('click', (e) => {
                            e.stopImmediatePropagation();
                            pushDataLayer('Click on Proceed to checkout button', labelForEvents(e.target))
                        })
                    }
                } else if (element == '.cart-list') {
                    document.querySelector('.cart-total').innerHTML = data.subtotal != 0 ? `Total: $${(+data.subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}` : '';
                    if (products.length < 1) { 
                        document.querySelector(element).innerHTML = `<div class="empty-cart">
                            <p>Your cart is currently empty.</p>
                            <a href="/" class="btn-next mx-auto"><span>Shop now</span></a>
                        </div>`;
                        document.querySelector('.cart-head').style.display = 'none';
                        document.querySelector('.btn-checkout').style.display = 'none';
                        document.querySelector('.cart .empty-cart .btn-next').addEventListener('click', (e) => pushDataLayer('Click on Shop now button', labelForEvents(e.target))) //event
                    } else {
                        document.querySelector('.cart-head').style = '';
                        document.querySelector('.btn-checkout').style = '';
                        document.querySelector('.btn-checkout').addEventListener('click', (e) => pushDataLayer('Click on checkout button', labelForEvents(e.target))) //event
                    }
                }
            })

            if (products.length > 0) {
                //product quantity changes
                let varQty = href.includes('checkout/step2') || href.includes('checkout/step3') || href.includes('guest-checkout2.php') || href.includes('guest-checkout3.php') ? 1 : 0
                for (let i = 0; i < products.length; i++) {
                    counterBasket += products[i].quantity
                    //add products
                    for (let j = 0; j < parent.length; j++) {
                        document.querySelector(parent[j]).insertAdjacentHTML('beforeend', product(parent[j], products[i].product_id, products[i].variant_id, products[i].quantity, products[i].subtotal, products[i].url, products[i].image_url, products[i].title, varQty))
                    
                        let plus = document.querySelectorAll(`${parent[j]} .quantity-btn_plus`)[i],
                            minus = document.querySelectorAll(`${parent[j]} .quantity-btn_minus`)[i],
                            quantity = document.querySelectorAll(`${parent[j]} .quantity`)[i];

                        varQty == 0 ? changeQuantity(plus, minus, quantity, true) : ''
                    }
                    
                    //remove product
                    let remove = document.querySelectorAll('.remove');
                    if (remove.length > 0) {
                        remove[i].addEventListener('click', (e) => {
                            pushDataLayer('Click on remove button', labelForEvents(e.target))
                            postFetch('/cart.html',`api=c&cart_action=remove&variant_id=${remove[i].closest('.product-item').dataset.variantId}&ctoken=${mm.ctoken}`,'POST').then(data => cart('.cart_count'))
                        })
                    }

                }
            }
            setCount && document.querySelector(setCount) != null ? document.querySelector(setCount).innerHTML = counterBasket : '';
            document.querySelector('.exp-loading') != null ? document.querySelector('.exp-loading').remove() : '';
        })
    }
    //Confirmation
    if (href.includes('/checkout/step4') || href.includes('/guest-checkout4.php')) {
        let dataCart = JSON.parse(localStorage.getItem('dataCart'));
        let dates = order.deliveryDates,
            confirmationDates = '';

        for (let i = 0; i < dates.length; i++) {
            let day = dates[i].split('-')[2],
                mouth = arrMouth[dates[i].split('-')[1] - 1];
            
                confirmationDates += `${day} ${mouth}. ${dates.length > 1 && i == 0 ? '- ' : ''}`
        }
        let styleConfirmation = `
        <style>
            .confirmation * {
                box-sizing: border-box;
            }
            #wrap {
                display: none;
            }
            .confirmation {
                max-width: 833px;
                width: 100%;
                margin: auto;
                padding: 40px 0 80px;
                font-size: 14px;
                line-height: 150%;
                color: #474747;
                box-sizing: border-box;
            }
            .confirmation h2 {
                font-weight: 600;
                font-size: 36px;
                line-height: 120%;
                color: #091114;
                margin-bottom: 12px;
            }
            .confirmation-span {
                font-weight: 400;
                font-size: 16px;
                color: #344D57;
            }
            .confirmation-order {
                background: #FFFFFF;
                box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                padding: 40px 0;
                margin: 40px 0 32px;
            }
            .confirmation-order .col {
                width: 50%;
            }
            .confirmation-order .col:first-child {
                border-right: 1px solid #E0E4E5;
                padding: 0 40px;
            }
            .confirmation-order .col:last-child {
                position: relative;
            }
            .confirmation-order .col:last-child:after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -40px;
                width: 100%;
                height: 55%;
                pointer-events: none;
                background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            }
            .confirmation-products::-webkit-scrollbar, .body-cart::-webkit-scrollbar {
                background: #CCCCCC;
                width: 4px;
                height: 4px;}
            .confirmation-products::-webkit-scrollbar-thumb, .body-cart::-webkit-scrollbar-thumb {
                background: #666666;}
            .confirmation-products {
                margin-top: -20px;
                margin-bottom: -40px;
                padding: 0 40px;
                overflow-y: auto;
            }
            .confirmation-products .product-item > div:last-child a {
                font-size: 14px;
                color: #344D57
            }
            .confirmation-products .total-price {
                font-size: 18px;
                color: #091114;
            }
            .confirmation-order .order_pricing li:not(:last-child) {
                color: #6D7E85;
                margin-bottom: 12px;
            }
            .confirmation-order .order_pricing li:last-child {
                padding-top: 28px;
            }
            .confirmation-order h3 {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                margin-bottom: 28px;
                text-align: left;
                color: #091114;
            }
            .confirmation-date {
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                padding: 12px 0;
                color: #96280F;
            }
            .confirmation .btn-next {
                padding: 0 24px;
                margin: 36px auto 0;
                width: fit-content;
            }
        </style>`

        let confirmationHTML = `
            ${headerHTML}
            <div class="confirmation">
                <h2>Thank you!</h2>
                <p class="confirmation-span c-gray">Your order has been successfully placed</p>
                <div class="confirmation-order flex">
                    <div class="col">
                        <h3>Your Order</h3>
                        <ul class="order_pricing"></ul>
                    </div>
                    <div class="col">
                        <ul class="confirmation-products"></ul>
                    </div>
                </div>
                <p class="">Approximate shipping date of your order is:</p>
                <p class="confirmation-date">${confirmationDates}</p>
                <a href="/" class="btn-next"><span>Back to the website</span></a>
            </div>`
        document.body.insertAdjacentHTML('afterbegin', confirmationHTML)
        document.body.insertAdjacentHTML('afterbegin', styleConfirmation)
        //add steps in header
        addStep('.steps',3)

        document.querySelector('.btn-next').addEventListener('click', (e) => pushDataLayer(`Click on ${e.target} button`, stepActive))
        pricing('.order_pricing', dataCart) // set pricing
        let items = dataCart.items;
        for (let i = 0; i < items.length; i++) {
            document.querySelector('.confirmation-products').insertAdjacentHTML('beforeend', product('shopping-cart', items[i].product_id, items[i].variant_id, items[i].quantity, items[i].subtotal, items[i].url, items[i].image_url, items[i].title, 1))
        }

        let height = document.querySelector('.confirmation-order .col:first-child').clientHeight;
        document.querySelector('.confirmation-products').style.height = height + 60 + 'px';
        document.querySelector('.exp-loading') != null ? document.querySelector('.exp-loading').remove() : '';
    }

    if ((href.includes('login') || href.includes('/register.php') || href.includes('/checkout') || href.includes('/guest-checkout')) && !href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php')) {
        //checkout
        let statesCanada = '<option value="" selected="selected">-- Select Province --</option><option value="AB">Alberta</option><option value="BC">British Columbia</option><option value="MB">Manitoba</option><option value="NB">New Brunswick</option><option value="NL">Newfoundland</option><option value="NS">Nova Scotia</option><option value="ON">Ontario</option><option value="PE">Prince Edward Island</option><option value="QC">Quebec</option><option value="SK">Saskatchewan</option><option value="YT">Yukon</option><option value="NT">Northwest Territories</option><option value="NV">Nunavut</option>';
        let statesUsa = '<option value="">-- Select State --</option><option value="AL">ALABAMA</option><option value="AK">ALASKA</option><option value="AS">AMERICAN SAMOA</option><option value="AZ">ARIZONA</option><option value="AR">ARKANSAS</option><option value="CA">CALIFORNIA</option><option value="CO">COLORADO</option><option value="CT">CONNECTICUT</option><option value="DE">DELAWARE</option><option value="DC">DISTRICT OF COLUMBIA</option><option value="FM">FEDERATED STATES OF MICRONESIA</option><option value="FL">FLORIDA</option><option value="GA">GEORGIA</option><option value="GU">GUAM</option><option value="HI">HAWAII</option><option value="ID">IDAHO</option><option value="IL">ILLINOIS</option><option value="IN">INDIANA</option><option value="IA">IOWA</option><option value="KS">KANSAS</option><option value="KY">KENTUCKY</option><option value="LA">LOUISIANA</option><option value="ME">MAINE</option><option value="MH">MARSHALL ISLANDS</option><option value="MD">MARYLAND</option><option value="MA">MASSACHUSETTS</option><option value="MI">MICHIGAN</option><option value="MN">MINNESOTA</option><option value="MS">MISSISSIPPI</option><option value="MO">MISSOURI</option><option value="MT">MONTANA</option><option value="NE">NEBRASKA</option><option value="NV">NEVADA</option><option value="NH">NEW HAMPSHIRE</option><option value="NJ">NEW JERSEY</option><option value="NM">NEW MEXICO</option><option value="NY">NEW YORK</option><option value="NC">NORTH CAROLINA</option><option value="ND">NORTH DAKOTA</option><option value="MP">NORTHERN MARIANA ISLANDS</option><option value="OH">OHIO</option><option value="OK">OKLAHOMA</option><option value="OR">OREGON</option><option value="PW">PALAU</option><option value="PA">PENNSYLVANIA</option><option value="PR">PUERTO RICO</option><option value="RI">RHODE ISLAND</option><option value="SC">SOUTH CAROLINA</option><option value="SD">SOUTH DAKOTA</option><option value="TN">TENNESSEE</option><option value="TX">TEXAS</option><option value="UT">UTAH</option><option value="VT">VERMONT</option><option value="VI">VIRGIN ISLANDS</option><option value="VA">VIRGINIA</option><option value="WA">WASHINGTON</option><option value="WV">WEST VIRGINIA</option><option value="WI">WISCONSIN</option><option value="WY">WYOMING</option>'

        let style = `
        <style>
            body {
                border: none;
                background: #FBFBFB;
            }
            .container {
                width: 100%;
                margin: 0 auto;
                padding-right: 15px;
                padding-left: 15px;
            }
            #wrap, .guest_checkout_button, .g-signin2, #forgot_pass .addressBookSubmit {
                display: none;
            }
            button {
                background: transparent;
                border: none;
                cursor: pointer;
            }
            #cc_block > dl > div.ccInfo {
                padding-bottom: 20px;
            }
            /*body checkout*/
            .wrapper-checkout .container {
                max-width: 1110px;
                padding-top: 36px;
                padding-bottom: 36px;
            }
            .head {
                border-bottom: 1px solid #E0E4E5;
                padding: 12px 0;
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #96280F;
                text-align: left;
                margin-bottom: 20px;
            }
            .head-login {
                border-bottom: 1px solid #E0E4E5;
                padding: 12px 0;
                margin-bottom: 28px;
            }
            .head-login h3 {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: #1E3944;
            }
            .head-login .link {
                font-size: 18px;
            }
            .col-left {
                max-width: 687px;
                padding-right: 15px;
                width: 100%;
                flex-direction: column;
            }
            .col-left > div:first-child {
                display: grid;
            }
            .col-left .address.bill {
                order: 2;
                display: none;
            }
            .btn.btn-google {
                padding: 0 48px;
                font-size: 14px;
            }
            .before-line {
                position: relative;
                z-index: 2;
                margin: 18px 0;
            }
            .before-line span {
                background: #FBFBFB;
                padding: 0 10px;
            }
            .before-line:before {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                width: 100%;
                height: 1px;
                z-index: -1;
                background: #E0E4E5;
            }
            /*login*/
            .registerOnLogin dt, .myAccountright, .myAccountleft, dd button[type="submit"] {
                display: none;
                width: 100%;
            }
            .myAccountright.active, .myAccountleft.active {
                display: block;
            }
            .myAccountleft {
                border-left: none;
            }
            .myAccount {
                margin: 0;
                width: 100%;
                padding: 0;
            }
            .registerOnLogin {
                padding: 0;
            }
            .myAccountleft dd:nth-child(2), .myAccountleft dd:nth-child(5), .myAccountright dd:nth-child(2) {
                padding-right: 10px!important;
            }
            .myAccountleft dd:nth-child(3), .myAccountleft dd:nth-child(6), .myAccountright dd:nth-child(3) {
                padding-left: 10px!important;
            }
            .myAccountleft dd:nth-child(5), .myAccountleft dd:nth-child(6), .myAccountright dd:nth-child(2), .myAccountright dd:nth-child(3) {
                width: 50%;
                float: left;
                position: relative;
            }
            dd.error {
                position: relative;
            }
            dd.error i {
                position: absolute;
                left: 16px;
                top: 100%;
                font-size: 90%;
                margin-top: 4px;
                color: red;
                font-style: normal;
            }
            .myAccountleft dd .eye {
                position: absolute;
                right: 18px;
                bottom: 12px;
                width: 24px;
                height: 24px;
                z-index: 2;
                cursor: pointer;
            }
            .wrapper-checkout dd > input, .promocode input {
                background: #FFFFFF;
                border: 1px solid #9AA6AB!important;
                border-radius: 4px;
                padding: 11px 16px!important;
                height: auto!important;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: rgba(9, 17, 20, 0.8);
                width: 100%;
            }
            .wrapper-checkout select {
                background: #FFFFFF;
                width: 100%;
                border: 1px solid #9AA6AB;
                border-radius: 4px;
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: rgba(9, 17, 20, 0.8);
                height: 48px;
                padding: 14px 48px 13px 16px;
            }
            .wrapper-checkout dd > select option:first-child {
                color: #9AA6AB;
            }
            .wrapper-checkout form dd label {
                text-align: left;
                width: 100%;
                font-size: 14px!important;
                font-weight: 400!important;
                line-height: 150%;
                color: rgba(52, 77, 87, 0.8);
                display: flex;
                align-items: center;
                padding-left: 16px;
                padding-bottom: 4px;
            }
            .c-red {
                color: rgba(235, 87, 87, 0.8);
            }
            .forgot_password {
                width: 100%;
                text-align: right!important;
                max-width: 100%!important;
            }
            #forgot_pass {
                padding: 20px 0 20px 10px;
                text-align: left;
                max-width: 50%;
                float: right;
                margin-top: -67px;
            }
            .registerOnLogin .forgot_password a {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                border-bottom: 1px solid rgba(150, 40, 15, 0.5);
                color: #96280F;
                padding-bottom: 2px;
                text-decoration: none;
            }
            .wrapper-checkout .myAccountright > form:not(#checkoutForm) > dd:nth-child(6) {
                margin: 0!important;
            }
            .myAccountright > form > dd:nth-child(5) {
                display: none;
            }
            dd input[type=checkbox] {
                margin-right: 8px!important;
                width: fit-content;
                display: block;
            }
            .myAccountleft > form > dd:nth-child(7) {
                font-size: 14px;
                line-height: 150%;
                color: #091114;
                margin-bottom: 0!important;
                display: flex;
                clear: both;
            }
            .wrapper-checkout form:not(#checkoutForm) dd {
                margin-bottom: 25px!important;
                max-width: 405px;
                text-align: left;
            }
            .wrapper-checkout input::-webkit-input-placeholder {
                color: rgba(154, 166, 171, 0.8);
                font-size: 16px;
                line-height: 150%;}
            .wrapper-checkout input:-moz-placeholder {
                color: rgba(154, 166, 171, 0.8);
                font-size: 16px;
                line-height: 150%; }
            .wrapper-checkout input::-moz-placeholder {
                color: rgba(154, 166, 171, 0.8);
                font-size: 16px;
                line-height: 150%; }
            .wrapper-checkout input:-ms-input-placeholder {
                color: rgba(154, 166, 171, 0.8);
                font-size: 16px;
                line-height: 150%;}
            .btn-back, .btn-guest {
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: #1E3944;
                padding: 15px 8px;}
            .btn-guest {
                margin-right: 24px;}
            .btn-back svg {
                margin-right: 8px;}
            /*order*/
            .order {
                background: #FFFFFF;
                border: 1px solid #E3E6E7;
                border-radius: 8px;
                width: 336px;
                height: fit-content;
                flex-direction: column;
            }
            .order_head {
                padding: 40px 0 12px;
                margin: 0 auto;
                max-width: 257px;
                border-bottom: 1px solid #E0E4E5;
            }
            .order_head h4 {
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #171717;
            }
            .link, .address p.link {
                font-size: 12px;
                line-height: 150%;
                color: #96280F;
                padding: 2px 0;
                border-bottom: 1px solid rgba(150, 40, 15, 0.5);
                cursor: pointer;
            }
            .link[hidden] {
                display: none!important;
            }
            .order_body {
                min-height: 298px;
                max-height: 365px;
                padding: 0 40px;
                overflow-y: auto;
            }
            .order_body::-webkit-scrollbar{
                background: #CCCCCC;
                width: 4px;
                height: 4px;}
            .order_body::-webkit-scrollbar-thumb{
                background: #666666;}

            .order_pricing {
                background: #F0F1F2;
                padding: 40px;
            }
            /*step 1 address*/
            .address {
                margin-bottom: 28px;
            }
            .address > div {
                border: 1px solid #E0E4E5;
                border-radius: 4px;
                padding: 40px;
            }
            .address .link {
                display: block;
                width: fit-content;
                margin-top: 28px;
            }
            .address p {
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                text-align: left;
                color: #344D57;
                margin-top: 16px;
            }
            .address p:first-child {
                font-weight: 600;
                margin-top: 0;
            }
            .btn-edit {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #6D7E85;
                padding-bottom: 2px;
                border-bottom: 1px solid #9AA6AB;
                height: fit-content;
            }
            .ship-form dd:last-child label, .bill-form dd:first-child label{
                color: #091114;
                display: flex;
                align-items: center;
                padding-left: 0;
            }
            .ship-form, .bill-form {
                display: none;
            }
            .ship-form.active, .bill-form.active {
                display: block;
            }
            /*Delivery Method*/
            .delivery-method label {
                margin-bottom: 20px;
                display: block;
            }
            .method {
                border: 1px solid #E0E4E5;
                border-radius: 4px;
                height: 61px;
                color: #091114;
                padding: 16px 24px 16px 16px;
                font-size: 16px;
                line-height: 20px;
            }
            .check {
                border: 1px solid #6D7E85;
                border-radius: 50%;
                display: block;
                flex-shrink: 0;
                width: 16px;
                height: 16px;
                position: relative;
            }
            .check:after {
                content: none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                background: #091114;
                border-radius: 50%;
                width: 8px;
                height: 8px;
            }
            [type="checkbox"], [type="radio"] {
                display: none;
            }
            .checkbox:checked ~ .method {
                border-color: #091114;
            }
            .checkbox:checked ~ span .check:after {
                content: '';
            }
            .checkbox:checked ~ .method .type, .checkbox:checked ~ .method .price, .checkbox:checked ~ .method .text {
                border-color: #091114;
                font-weight: 600;
                font-size: 18px;
            }
            .method .type {
                border-left: 1px solid #E0E4E5;
                padding-left: 16px;
                margin: 0 16px;
            }
            .method .price {
                border-left: 1px solid #E0E4E5;
                width: 72px;
                text-align: right;
            }
            .method .text {
                border-left: 1px solid #E0E4E5;
                font-weight: 400;
                font-size: 16px;
                padding: 0 20px;
            }
            .promocode {
                padding: 28px 0;
            }
            .promocode p {
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #091114;
            }
            .promocode p span {
                font-weight: 400;
                font-size: 14px;
                margin-left: 8px;
            }
            .promocode input {
                width: calc(100% - 250px);
            }
            .promocode ~ .error {
                color: red;
                text-align: right;
            }
            /*checkoutForm step 3*/
            #checkoutForm h3 {
                font-weight: 600;
                font-size: 16px;
                line-height: 130%;
                color: #091114;
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .primaryInfo {
                border: none;
            }
            #checkoutForm {
                font-size: 14px;
                line-height: 150%;
                color: #091114;
                width: 100%!important;
            }
            #checkoutForm > p {
                white-space: normal!important;
                text-align: left!important;
                margin: -21px 0 10px 0!important;
            }
            #comment {
                width: 100%;
                border: 1px solid #9AA6AB;
                border-radius: 4px;
            }
            #cc_block {
                text-align: left;
            }
            .ccInfo {
                display: grid;
            }
        .ccInfo > dd:first-child, .ccInfo > dd:nth-child(4),  #cc_block > dl > div.ccInfo > dd:nth-child(2) {
                order: 1;
            }
            #iframeForm {
                order: 0;
            }
            #cc_block > dl > div:nth-child(1) > span:nth-child(1), #cc_block > dl > div.ccInfo > dd:nth-child(2), #cc_block > dl > div.ccInfo > dd:nth-child(5), #cc_block > dl > dd:nth-child(3), #cc_block > dl > div.ccInfo > dd:nth-child(3) {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: rgb(124, 140, 146);
                margin: 0!important;
            }
            #checkoutForm > fieldset > dl > dd:nth-child(2), #cc_block > dl > div.ccInfo > dd:nth-child(3), #checkoutForm > fieldset > dl > dd:nth-child(4), #cc_block > dl > dd:nth-child(3)  {
                padding-left: 16px;
            }
            #paymentCardContainer, #paymentCardErrorContainer {
                margin: 0!important;
            }
            .primaryInfo {
                text-align: left;
                width: 100%;
            }
            .primaryInfo dl {
                width: 100%!important;
            }
            .primaryInfo dl, #checkoutForm > fieldset > div:nth-child(2) {
                margin: 0!important;
            }
            #save_cc_info {
                display: none;
            }
            .check2 {
                border: 1px solid #6D7E85;
                border-radius: 2px;
                width: 16px;
                height: 16px;
                display: block;
                position: relative;
                margin-right: 8px;
                flex-shrink: 0;
            }
            .check2:before {
                content: none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                background: #091114;
                border-radius: 1px;
                height: 8px;
                width: 8px;
            }
            [type="checkbox"]:checked ~ .check2:before  {
                content: '';
            }
            #card_list {
                width: auto!important;
            }
            .primaryInfo label.order-every {
                padding: 0;
                width: 100%;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #091114;
            }
            #recurring_billing_period {
                width: calc(100% - 259px)!important;
                margin-left: 8px;
            }
            .cc-recurring-setting {
                display: none;
            }
            .auto-reorder-header {
                font-weight: 600;
                font-size: 16px;
                line-height: 130%;
                color: #091114;
                margin-bottom: -13px;
                display: block;
            }
            div.cc-recurring {
                padding: 24px 0;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
            }
            #cc_block > div > br:nth-child(2), #submitCheckout3 {
                display: none;
            }
            #checkoutForm > div {
                height: auto!important;
            }
            #cc_block > dl > div.ccInfo > div:nth-child(1) {
                display: none;
            }
        </style>`

        let wrapperHTML = `
        ${headerHTML}
        <div class="wrapper-checkout">
            <div class="container justify-between flex">
                <div class="col-left justify-between flex">
                    <div>
                        ${href.includes('/login') || href.includes('/register.php?') ? `<div class="flex flex-center-between head-login"><h3>Register</h3><a href="#" class="link">Sign in</a></div>` : ''}
                        <div class="head"><h4></h4></div>
                    </div>
                    <div class="foot flex flex-center-between">
                        <a class="btn-back items-center flex" href="#">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 9.32153V8.67847C15 8.5009 14.8657 8.35695 14.7 8.35695H4.998L7.668 5.50181C7.72479 5.44144 7.75674 5.35926 7.75674 5.27352C7.75674 5.18779 7.72479 5.10561 7.668 5.04524L7.242 4.59511C7.18567 4.53424 7.10899 4.5 7.029 4.5C6.94901 4.5 6.87233 4.53424 6.816 4.59511L3.132 8.537C3.04758 8.62736 3.0001 8.74995 3 8.87782V9.12218C3.00138 9.24977 3.04867 9.37186 3.132 9.463L6.816 13.4049C6.87233 13.4658 6.94901 13.5 7.029 13.5C7.10899 13.5 7.18567 13.4658 7.242 13.4049L7.668 12.9483C7.72444 12.8891 7.75624 12.8079 7.75624 12.7233C7.75624 12.6386 7.72444 12.5575 7.668 12.4982L4.998 9.64305H14.7C14.8657 9.64305 15 9.4991 15 9.32153Z" fill="#1E3944"/>
                            </svg>
                            <span></span>
                        </a>
                        <div class="flex items-center">
                            <button class="btn-next items-center flex" type="submit">
                                <span>Next</span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="order justify-between flex">
                    <div>
                        <div class="order_head flex flex-center-between">
                            <h4>Your Order</h4>
                            <a href="/" class="link">Continue Shopping</a>
                        </div>
                        <ul class="order_body"></ul>
                    </div>
                    <ul class="order_pricing"></ul>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', wrapperHTML) // add wrapper
        document.body.insertAdjacentHTML('afterbegin', style) // add styles

        //login/register step
        if ((href.includes('/login') || href.includes('/register.php')) && document.querySelector('.myAccount') != null) {
            document.querySelector('.col-left .head').after(document.querySelector('.myAccount'))
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][0];
            document.querySelector('.col-left .head').style = 'display: none!important;';
            document.querySelector('.col-left .head-login').insertAdjacentHTML('afterend',`<button type="button" class="btn btn_white btn-google flex items-center mx-auto"> <img src="https://conversionratestore.github.io/projects/medicalmega/img/google.svg" class="mr-8" alt="google icon"/> continue with google</button><p class="text-center c-gray-08 mb-16 fs-14 before-line"><span>or</span></p>`)
            document.querySelector('.foot .btn-next').insertAdjacentHTML('beforebegin','<a href="#" class="btn-guest">Checkout as a guest</a>')

            addActive('.myAccountleft')
            addStep('.steps', 0)

            //forgot password
            document.querySelector('#forgot_pass [name="forgot_pass"]').insertAdjacentHTML('afterend',`<button class="btn-next btn-forgor" type="button"><span>Submit</span></button>`)
            document.querySelector('.btn-forgor').addEventListener('click', (e) => {
                pushDataLayer("Click on Submit button", stepActive);
                document.querySelector('#forgot_pass .addressBookSubmit').click();
            })

            //click on 'Sign in/Register' button
            let linkHead = document.querySelector('.head-login .link'),
                titleHead = document.querySelector('.head-login h3');
            linkHead.addEventListener('click', (e) => {
                if (titleHead.innerHTML === 'Sign in') {
                    titleHead.innerHTML = 'Register';
                    linkHead.innerHTML = 'Sign in';
                    removeActive('.myAccountright');
                    addActive('.myAccountleft');
                    pushDataLayer("Click on Register button", stepActive)
                } else {
                    titleHead.innerHTML = 'Sign in';
                    linkHead.innerHTML = 'Register';
                    removeActive('.myAccountleft')
                    addActive('.myAccountright')
                    pushDataLayer("Click on Sign in button", stepActive)
                }
            })
            document.querySelector(' .myAccountleft dd:nth-child(5) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)
            document.querySelector(' .myAccountleft dd:nth-child(6) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)

            //add placeholder
            document.querySelectorAll('.myAccount input[name]').forEach(item => {
                if (item.name == 'user_email' || item.name == 'reg_email' || item.name == 'forgot_email') {
                    item.placeholder = 'email@mail.com';
                } else if (item.name == 'user_pass' || item.name == 'user_password' || item.name == 're_user_passsword') {
                    item.placeholder = '••••••••';
                } else if (item.name == 'first_name') {
                    item.placeholder = 'John';
                } else if (item.name == 'last_name') {
                    item.placeholder = 'Smith';
                } 
            })
            //change subscribe checkbox
            document.querySelector('[name="subscribe"]').parentElement.innerHTML = `<label class="label-subscribe">
                <input name="subscribe" type="checkbox" style="border-color: rgb(224, 228, 229) !important;">
                <span class="check2"></span>
                Email Me Order Updates and Specials
            </label>`

            document.querySelector('[name="subscribe"]').addEventListener('change', (e) => pushDataLayer("Click on Email Me Order Updates and Specials checkbox", stepActive)) //event

            //sign in with google
            document.querySelector('.btn-google').addEventListener('click', () => {
                pushDataLayer("Click on continue with google button", stepActive)
                document.querySelector('.g-signin2 > div').click()
            })
            //Checkout as a guest
            document.querySelector('.btn-guest').addEventListener('click', () => {
                pushDataLayer("Click on Checkout as a guest button", stepActive)
                document.querySelector('.guest_checkout_button input').click()
            })
            document.querySelectorAll(' .myAccountleft dd .eye').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (item.previousElementSibling.type == 'password') {
                        item.previousElementSibling.type = 'text';
                        item.src = 'https://conversionratestore.github.io/projects/medicalmega/img/eye.svg'
                    } else {
                        item.previousElementSibling.type = 'password';
                        item.src = 'https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg'
                    }
                    pushDataLayer("Click on eye button", stepActive)
                })
            })

        }

        let saveAddress = (type,fname,lname,addr1,city,stateF,zip,country,phn,email) => {
            let body = JSON.stringify({
                    "isPrimary": "1",
                    "type": type,
                    "fname": fname,
                    "lname": lname,
                    "addr1": addr1,
                    "addr2": "",
                    "city": city,
                    "state": stateF == '' && type == 'bill' && country != 'Canada' && country != 'United States' ? " " : stateF,
                    "zip": zip,
                    "country": country,
                    "phn": phn,
                    "alt_phn": "",
                    "email": email,
                    "fax": ""
                }
            )
            return body
        }

        let changeSelect = (typeCountry, typeState) => {
            document.querySelector(typeCountry).addEventListener('input', (e) => {
                if (e.target.value == 'Canada') {
                    document.querySelector(typeState).innerHTML = statesCanada;
                    document.querySelector(typeState).previousElementSibling.children[0].innerHTML = 'Province / Territory'
                } else if (e.target.value == 'United States') {
                    document.querySelector(typeState).innerHTML = statesUsa;
                    document.querySelector(typeState).previousElementSibling.children[0].innerHTML = 'State (Only applicable to US)'
                } else {
                    document.querySelector(typeState).innerHTML = '<option value="" selected="selected">-- Select State --</option>';
                    document.querySelector(typeState).previousElementSibling.children[0].innerHTML = 'State (Only applicable to US)'
                }
            })
        }

        let shipFormHtml = (sibling, state, countries_ship, active, edit) => {
            document.querySelector(sibling).insertAdjacentHTML('afterend', `
            <form class="ship-form ${edit} ${active}">
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="fname">Name <span class="c-red"> *</span></label>
                    <input type="text" name="fname" placeholder="John">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="lname">Surname <span class="c-red"> *</span></label>
                    <input type="text" name="lname" placeholder="Smith">
                    <i></i>
                </dd>
                <dd style="width: 100%;float:left;padding-right: 8px">
                    <label for="email">Email <span class="c-red"> *</span></label>
                    <input type="text" name="email">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="country">Country <span class="c-red"> *</span></label>
                    <select name="country"> ${countries_ship}</select>
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="addr1">Address line <span class="c-red"> *</span></label>
                    <input type="text" name="addr1" placeholder="Street address, building, apt, atc.">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="city">City <span class="c-red"> *</span></label>
                    <input type="text" name="city">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="state"><span>State (Only applicable to US)</span> <span class="c-red"> *</span></label>
                    <select name="state"> ${state.innerHTML}</select>
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="zip">Zip / Postal Code <span class="c-red"> *</span></label>
                    <input type="text" name="zip">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="phn">Phone <span class="c-red"> *</span></label>
                    <input type="text" name="phn" placeholder="+1 (XXX) XXX-XXXX">
                    <i></i>
                </dd>
                <dd style="width: 100%;display: ${edit != '' ? 'none':''}">
                    <label>
                        <input name="billing" type="checkbox" class="checkbox">
                        <span>My Billing info is different</span>
                    </label>
                </dd>
            </form>`);
            changeSelect('.ship-form [name="country"]', '.ship-form [name="state"]')
        }
        let billFormHtml = (sibling, state, countries_ship, active, edit) => {
            document.querySelector(sibling).insertAdjacentHTML('afterend', `
            <form class="bill-form ${active} ${edit}">
                <dd style="width: 100%;">
                    <label>
                        <input name="shipping" type="checkbox" class="checkbox">
                        <span>Copy from Shipping info</span>
                    </label>
                </dd>
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="country">Country <span class="c-red"> *</span></label>
                    <select name="country"> ${countries_ship}</select>
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="addr1">Address line <span class="c-red"> *</span></label>
                    <input type="text" name="addr1" placeholder="Street address, building, apt, atc.">
                    <i></i>
                </dd>
                <dd style="width: 100%;float:left;padding-right: 8px">
                    <label for="email">Email <span class="c-red"> *</span></label>
                    <input type="text" name="email">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="city">City <span class="c-red"> *</span></label>
                    <input type="text" name="city">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="state"><span>State (Only applicable to US)</span> <span class="c-red"> *</span></label>
                    <select name="state"> ${state.innerHTML}</select>
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-right: 8px">
                    <label for="zip">Zip / Postal Code <span class="c-red"> *</span></label>
                    <input type="text" name="zip">
                    <i></i>
                </dd>
                <dd style="width: 50%;float:left;padding-left: 8px">
                    <label for="phn">Phone <span class="c-red"> *</span></label>
                    <input type="text" name="phn" placeholder="+1 (XXX) XXX-XXXX">
                    <i></i>
                </dd>
            </form>`)
            changeSelect('.bill-form [name="country"]','.bill-form [name="state"]')
        }
        let fname, lname, addr1, city, stateF, zip, country, phn, email; //for forms

        //ship/bill addresses
        let addressCurrentHtml = (fname, lname, addr1, city, state, zip, country, phone, type) => {
            return `
            <div class="address ${type === 'bill' ? 'bill' : 'ship'}">
                <div class="justify-between flex">
                    <div>
                        <p>${fname} ${lname}</p>
                        <p>${addr1}</p>
                        <p>${city}, ${state}, ${zip}</p>
                        <p>${country}</p>
                        <p>${phone}</p>
                    </div>
                    <button class="btn-edit" type="button" onclick="pushDataLayer('Click on Edit ${type === 'ship' ? 'Shipping Address' : 'Billing Info'} button', ${stepActive})">${type === 'ship' ? 'Edit Shipping Address' : 'Edit Billing Info'}</button>
                </div>
                ${type === 'ship' ? `<p class="link" onclick="pushDataLayer("Click on View Your Billing Info button", ${stepActive})">View Your Billing Info</p>` : ''} 
            </div>`
        }

        //copy from shipping
        let copyFromShip = (e, formType) => {
            let stateName = document.querySelector(`.${formType}-form dd [name="state"]`),
                countryName = document.querySelector(`.${formType}-form dd [name="country"]`);

            if (e.checked) {
                fetch(`/api/v1/addresses&type=ship`, {
                    headers: headerFetchAddress,
                    method: "GET",
                }).then(res => res.json()).then(data => {
                    let address = data['addresses'][0],
                    stateValue = address['state'];

                    for (const keyShip in address) {
                        console.log(keyShip, address[keyShip])
                        if (document.querySelector(`.${formType}-form dd [name="${keyShip}"]`) != null && address[keyShip] != '') {
                            document.querySelector(`.${formType}-form dd [name="${keyShip}"]`).value = address[keyShip]
                        }
                    }
                    if (countryName.value == 'Canada') {
                        stateName.innerHTML = statesCanada;
                        stateName.previousElementSibling.children[0].innerHTML = 'Province / Territory'
                    } else if (countryName.value == 'United States') {
                        stateName.innerHTML = statesUsa;
                        stateName.previousElementSibling.children[0].innerHTML = 'State (Only applicable to US)'
                    } else {
                        stateName.innerHTML = '<option value="" selected="selected">-- Select State --</option>';
                        stateName.previousElementSibling.children[0].innerHTML = 'State (Only applicable to US)'
                    }
                    stateName.value = stateValue
                })
            }
        }
        //step 2 "Shipping Information"
        let currentAddressShip, currentAddressBill;
        let state_item, countries_ship_item, countries_bill_item;
        if (href.includes('/checkout/step1') || href.includes('/checkout/step2') || href.includes('guest-checkout1.php') || href.includes('guest-checkout2.php')) {
            addStep('.steps', 1) //add steps in header
            if (document.querySelector('.tooltip') != null) {
                setTimeout(() => {
                    document.querySelector('.tooltip').style.display = "none"
                }, 3000)
            }
        }
        function currentAddress(parent, pre, obj) {
            for (const key in obj) {
                document.querySelector(`${parent} [name="${pre}${key}"]`) != null ? document.querySelector(`${parent} [name="${pre}${key}"]`).value = obj[key] : '';
            }
        }
        
        if ((href.includes('/checkout/step1') || href.includes('/guest-checkout1.php')) && document.querySelector('.myAccount') == null) {
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];
            state_item = href.includes('guest-checkout1.php') ? b_state : state;
            countries_ship_item = href.includes('guest-checkout1.php') ? s_country.innerHTML : countries_ship;
            countries_bill_item = href.includes('guest-checkout1.php') ? b_country.innerHTML : countries_all; //country.innerHTML;
           
            let shipHave = false, billHave = false;

            fetch(`/api/v1/addresses`, {
                headers: headerFetchAddress,
                method: "GET",
            }).then(res => res.json()).then(data => {
                console.log(data)
                let addresses = data['addresses'];
                if (!!addresses && addresses.length > 0) {
                    //Shipping Information - current users
                    for (let i = 0; i < addresses.length; i++) {
                        if (addresses[i].isPrimary == 1) {
                            if (addresses[i].type === 'ship') {
                                if (shipHave == false) {
                                    shipHave = true;
                                    currentAddressShip = addresses[i]
                                    currentAddress('.addressBook', `s_`, currentAddressShip)
                                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', addressCurrentHtml(addresses[i].fname, addresses[i].lname, addresses[i].addr1, addresses[i].city, addresses[i].state, addresses[i].zip, addresses[i].country, addresses[i].phn, addresses[i].type))
                                }
                            } else {
                                if (billHave == false) {
                                    billHave = true;
                                    currentAddressBill = addresses[i]
                                    currentAddress('.addressBook', `b_`, currentAddressBill)
                                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', addressCurrentHtml(addresses[i].fname, addresses[i].lname, addresses[i].addr1, addresses[i].city, addresses[i].state, addresses[i].zip, addresses[i].country, addresses[i].phn, addresses[i].type))
                                }
                            }
                            fname = addresses[i].fname;
                            lname = addresses[i].lname;
                        }
                        document.querySelectorAll('.btn-edit').forEach(item => {
                            item.addEventListener('click', (e) => {
                                e.stopImmediatePropagation()
                                if (item.closest('.ship') != null) {
                                    shipFormHtml('.col-left .head', state_item, countries_ship_item,'active', 'edit')
                                    document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];
                                    document.querySelector('.btn-next').innerHTML = 'Save Shipping info';

                                    currentAddress('.ship-form > dd', ``, currentAddressShip)
                                } else if (item.closest('.bill') != null) {
                                    billFormHtml('.col-left .head', state_item, countries_bill_item, 'active','edit')
                                    document.querySelector('.col-left .head h4').innerHTML = 'Billing information';
                                    document.querySelector('.btn-next').innerHTML = 'Save Billing info';

                                    currentAddress('.bill-form > dd', ``, currentAddressBill)

                                    document.querySelector('[name="shipping"]').addEventListener('click', (e) => copyFromShip(e.target, 'bill'))
                                }
                                document.querySelector('.btn-back span').innerHTML = 'Back';
                                document.querySelector('.btn-back').href = href.includes('guest-checkout') ? '/guest-checkout1.php' : `/checkout/step1`;
                                document.querySelectorAll('.address').forEach(el => el.style.display = 'none');
                            })
                        })
                    }
                    if (document.querySelector('.address.bill') != null && document.querySelector('.address .link') != null) {
                        document.querySelector('.address .link').addEventListener('click', (e) => {
                            e.target.hidden = true;
                            document.querySelector('.address.bill').style.display = 'block';
                        })
                    }

                    if (document.querySelector('.address.bill') == null && document.querySelector('.address.ship') != null) {
                        document.querySelector('.address .link').hidden = true;
                    }
                    if (document.querySelector('.address.bill') != null && document.querySelector('.address.ship') == null) {
                        shipFormHtml('.col-left .head', state_item, countries_ship_item, 'active', '')
                        document.querySelector('.ship-form > dd:last-child').remove();
                    }
                } else {
                    //Shipping Information - not filled
                    shipFormHtml('.col-left .head', state_item, countries_ship_item, 'active', '')
                    billFormHtml('.col-left .head', state_item, countries_bill_item, '', '')
                    document.querySelector('[name="shipping"]').addEventListener('click', (e) => {
                        console.log(e.target)
                        copyFromShip(e.target, 'bill')
                        pushDataLayer(`Click on ${e.target.nextElementSibling.innerText} checkbox`, stepActive)
                    })
                }
            })
        }

        let deliveryMethodHtml = (i, type, text, price) => {
            return `
            <label>
                <input type="radio" name="radio-method" class="checkbox" ${i==0?'checked':''}>
                <span class="items-center method flex">
                    <span class="check"></span>
                    <span class="type">${type}</span>
                    <span class="ml-auto items-center flex">  
                        ${text != '' ? '<span class="text">' +text+'</span>':''}
                        <span class="price">${price}</span>
                    </span>
                </span>
            </label>`
        }

        if (href.includes('/checkout/step2') || href.includes('guest-checkout2.php')) {
            document.querySelector('.col-left .head h4').innerHTML = 'Delivery Method';
            document.querySelector('.col-left .head').insertAdjacentHTML('afterend',`<div class="delivery-method"></div>`)
            document.querySelectorAll('#ship_options > li').forEach((item, index) => {
                let type = item.querySelector('p > i').innerText,
                    text = '',
                    price = item.querySelector('p > b') != null ? item.querySelector('p > b').innerText : item.querySelector('p > strong').innerText == 'FREE!' ? 'FREE!' : '';
                if (index == 0) {
                    item.querySelector('input').checked = true;
                }

                if (item.querySelectorAll('p').length > 1) {
                    text = item.querySelectorAll('p')[1].innerHTML.split('<strong')[0]
                }
                document.querySelector('.delivery-method').insertAdjacentHTML('beforeend', deliveryMethodHtml(index, type, text, price))
                document.querySelectorAll('[name="radio-method"]')[index].addEventListener('input', (e) => {
                    document.querySelectorAll('#ship_options > li input')[index].checked = true;
                    pushDataLayer(`Click on ${e.target.nextElementSibling.querySelector('.type').innerText} radio`, stepActive)
                })
            })
            document.querySelector('.col-left .delivery-method').insertAdjacentHTML('afterend',`
                <div class="promocode items-center flex">
                    <p>Promotional Code <span>(Optional):</span></p>
                    <input type="text" placeholder="Enter your code" class="ml-auto">
                </div>`)
            document.querySelector('.promocode input').addEventListener('input', (e) => {
                document.querySelector('.promoCode').value = e.target.value;
            })
            if (document.querySelector('.primaryInfo .error') != null) {
                document.querySelector('.promocode').after(document.querySelector('.primaryInfo .error'))
                document.querySelector('.promocode input').value = document.querySelector('.promoCode').value;
            }
        }
        if (href.includes('/checkout/step3') || href.includes('guest-checkout3.php')) {
            addStep('.steps', 2) //add steps in header
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][2];
            document.querySelector('.col-left .head').after(document.querySelector('#checkoutForm'))

            document.querySelector('.cc-recurring-setting').insertAdjacentHTML('beforebegin',`<div class="order-every flex items-center"><span class="check2"></span>${document.querySelector('.cc-recurring-setting').innerHTML}</div>`)
            document.querySelector('.order-every .check2').before(document.querySelector('#cc-recurring-check'))
            document.querySelector('#recurring_billing_period option').innerHTML = 'Choose Period'
            document.querySelector('.btn-next span').innerHTML = 'Proceed';
            
            let intervalChecked = setInterval(() => {
                if (document.querySelector('#cc-recurring-check').checked) {
                    document.querySelector('.order-every.items-center .check2').classList.add('checked');
                } else {
                    document.querySelector('.order-every.items-center .check2').classList.remove('checked');
                }
            })

            document.querySelector('.check2').addEventListener('click', (e) => {
                let target = e.target;
                if (target.classList.contains('checked')) {
                    target.classList.remove('checked')
                    document.querySelector('#cc-recurring-check').click();
                }
                pushDataLayer(`Click on ${e.target.parentElement.innerText.split(':')[0]} checkbox`, stepActive)
            })
            document.querySelector('#checkoutForm > p').innerHTML = document.querySelector('#checkoutForm > p').innerHTML.replace('Place Your Order Now','Proceed');
        }

        if (href.includes('/guest-checkout3.php')) {
            document.querySelector('#checkoutForm').insertAdjacentHTML('afterbegin',`<h3>Card Details <img src="https://conversionratestore.github.io/projects/medicalmega/img/payment-cards.svg" alt="icons"></h3>`);
            document.querySelector('#checkoutForm > fieldset > dl > dd:nth-child(2)').innerHTML = `Credit/Debit Card<span class="c-red-08"> *</span>`;
            document.querySelector('#checkoutForm > p').style.whiteSpace = 'initial';
        }

        if (href.includes('/checkout/step3') ) {
            document.querySelector('#checkoutForm h3').innerHTML = `Card Details <img src="https://conversionratestore.github.io/projects/medicalmega/img/payment-cards.svg" alt="icons">`
            document.querySelector('#cc_block > dl > div.ccInfo > dd:nth-child(3)').innerHTML = `Credit/Debit Card<span class="c-red-08"> *</span>`;
        }
        //set text for back button
        let setBack = () => {
            if (!href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php')) {
                let guestOrAccount = href.includes('guest-checkout') ? 1 : 0;
                document.querySelector('.btn-back span').innerHTML = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][0];
                document.querySelector('.btn-back').href = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][1][guestOrAccount];
                document.querySelector('.btn-back').addEventListener('click', (e) => pushDataLayer(`Click on ${e.target.innerText} button`, stepActive));
            }
        }
        setBack()

        //set * request for label
        document.querySelectorAll('label').forEach(el => {
            if (el.innerHTML.includes('*') && el.innerHTML.includes('c-red')) {
                el.innerHTML = el.innerHTML.split('*').join('<span class="c-red"> *</span>')
            }
        })

        let address = (type) => {
            console.log(type)
            document.querySelector(`.ship-form [name="fname"]`) != null ? fname = document.querySelector(`.ship-form [name="fname"]`) : fname;
            document.querySelector(`.ship-form [name="lname"]`) != null ? lname = document.querySelector(`.ship-form [name="lname"]`) : fname;

            addr1 = document.querySelector(`.${type}-form [name="addr1"]`);
            city = document.querySelector(`.${type}-form [name="city"]`);
            stateF = document.querySelector(`.${type}-form [name="state"]`);
            zip = document.querySelector(`.${type}-form [name="zip"]`);
            country = document.querySelector(`.${type}-form [name="country"]`);
            phn = document.querySelector(`.${type}-form [name="phn"]`);
            email = document.querySelector(`.${type}-form [name="email"]`);

            let dataDD = document.querySelectorAll(`.${type}-form dd.error`)
            console.log(currentAddressShip,type,fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value)
            let errorsFun = (dataErrors) => {
                dataDD.forEach(item => {
                    item.classList.remove('error')
                    item.querySelector('i').innerHTML = ''
                })
                document.querySelector('.error-other') != null ? document.querySelector('.error-other').remove() : '';
                if (dataErrors.length > 0) {
                    for (let i = 0; i < dataErrors.length; i++) {
                        if (dataErrors[i].includes('First name')) {
                            fname.parentElement.classList.add('error')
                            fname.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('Last name')) {
                            lname.parentElement.classList.add('error')
                            lname.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('Address')) {
                            addr1.parentElement.classList.add('error')
                            addr1.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('City')) {
                            city.parentElement.classList.add('error')
                            city.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('State')) {
                            stateF.parentElement.classList.add('error')
                            stateF.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('Zip')) {
                            zip.parentElement.classList.add('error')
                            zip.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('Country')) {
                            country.parentElement.classList.add('error')
                            country.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('Phone')) {
                            phn.parentElement.classList.add('error')
                            phn.nextElementSibling.innerHTML = dataErrors[i]
                        } else if (dataErrors[i].includes('Email')) {
                            email.parentElement.classList.add('error')
                            email.nextElementSibling.innerHTML = dataErrors[i]
                        } else {
                            document.querySelector(`.${type}-form`).insertAdjacentHTML('afterend', `<p class="c-red error-other" style="margin: 10px 0">${dataErrors[i]}</p>`)
                        }
                    }
                }
            }
            if (document.querySelector(`.ship-form.active`) != null) {
                if (document.querySelector(`.ship-form.active.edit`) != null) {
                    postFetch(`/api/v1/addresses/${currentAddressShip.id}`, saveAddress('ship', fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'PUT').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        let put = true;
                        let nameShip = document.querySelectorAll(`.ship-form [name]`);
                        for (let n = 0; n < nameShip.length; n++) {
                            if (nameShip[n].value == '' || nameShip[n].value == ' ') {
                                put = false;
                                break;
                            } 
                        }
                        if (dataErrors.length < 1) {
                            if (put == true) {
                                window.location.reload()
                            } else {
                                for (let n = 0; n < nameShip.length; n++) {
                                    if (nameShip[n].value == '' || nameShip[n].value == ' ') {
                                        nameShip[n].parentElement.classList.add('error')
                                        nameShip[n].nextElementSibling.innerHTML = `${capitalizeFirstLetter(nameShip[n].name)} is missing or not valid`
                                    }  else {
                                        nameShip[n].parentElement.classList.remove('error')
                                        nameShip[n].nextElementSibling.innerHTML = ''
                                    }
                                }
                            }
                        } else {
                            errorsFun(dataErrors)
                        }
                    })

                } else {
                    if (document.querySelector(`.ship-form .checkbox[name="billing"]`) != null && !document.querySelector(`.ship-form .checkbox[name="billing"]`).checked ) {
                        postFetch('/api/v1/addresses', saveAddress('ship',fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'POST').then(data => {
                            console.log(data)
                            let dataErrors = data.errors;
                            if (dataErrors.length < 1) {
                                postFetch('/api/v1/addresses', saveAddress('bill',fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'POST').then(dataBill => {
                                    console.log(dataBill)
                                    window.location.reload()
                                })
                            } else {
                                errorsFun(dataErrors)
                            }
                        })
                    } else {
                        postFetch('/api/v1/addresses', saveAddress('ship',fname.value,fname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'POST').then(data => {
                            console.log(data)
                            let dataErrors = data.errors;
                            if (dataErrors.length < 1) {
                                if (document.querySelector('.address.bill') != null) {
                                    window.location.reload()
                                } else {
                                    document.querySelector('.col-left .head h4').innerHTML = 'Billing information';
                                    setBack()
                                    document.querySelector('.ship-form.active').classList.remove('active')
                                    addActive('.bill-form')
                                }
                            } else {
                                errorsFun(dataErrors)
                            }
                        })
                    }
                }
            } else {
                let fnameNew, lnameNew;
                if (fname.tagName === 'INPUT' && lname.tagName === 'INPUT') {
                    fnameNew = fname.value;
                    lnameNew = lname.value;
                } else {
                    fnameNew = fname;
                    lnameNew = lname;
                }

                if (document.querySelector(`.bill-form.active.edit`) != null) {
                    postFetch(`/api/v1/addresses/${currentAddressBill.id}`, saveAddress('bill', fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'PUT').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            window.location.reload()
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                } else {
                    postFetch('/api/v1/addresses', saveAddress('bill', fnameNew, fnameNew, addr1.value, city.value, stateF.value, zip.value, country.value, phn.value, email.value), 'POST').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            window.location.reload()
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                }
            }
        }

        cart() //get products from cart
        //add click on next button
        document.querySelector('.foot .btn-next').addEventListener('click', (e) => {
            if (document.querySelector('.myAccountright.active') != null) {
                console.log('login')
                document.querySelector('#login_btn').click()
            } else if (document.querySelector('.myAccountleft.active') != null) {
                console.log('register')
                document.querySelector('[name="register"]').click()
            } else if (document.querySelector('.ship-form.active') != null) {
                console.log('ship-form.active')
                address('ship')
            } else if (document.querySelector('.bill-form.active') != null) {
                console.log('bill-form.active')
                address('bill')
            } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') != null && document.querySelector('.bill-form.edit') == null && document.querySelector('.ship-form.edit') == null) {
                console.log('next 2 step')
                // if (href.includes('guest-checkout')) {
                    document.querySelector('#mainbody > div > form > div > input[type=image]').click();
                // } else {
                //     window.location.href = `https://medicalmega.com/checkout/step2`;
                // }
            } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') == null && document.querySelector('.bill-form.active') == null) {
                console.log('next 2 step')
                document.querySelector('.address.ship').style.display = 'none'
                document.querySelector('.col-left .head h4').innerHTML = 'Billing information'; //change title
                //change back button
                setBack()
                //add billing form html
                console.log(state_item, countries_ship_item)
                billFormHtml('.col-left .head', state_item, countries_bill_item, 'active','')
                //copy from Shipping
                document.querySelector('[name="shipping"]').addEventListener('click', (e) => copyFromShip(e.target, 'bill'))
            } else if (document.querySelector('.address.ship') == null && document.querySelector('.address.bill') != null && document.querySelector('.ship-form.active') == null) {
                console.log('address.ship == null')
                shipFormHtml('.col-left .head', state_item, countries_ship_item, 'active','')
            } else if (document.querySelector('.ship-form.edit') != null) {
                console.log('edit ship form')
                address('ship')
            } else if (document.querySelector('.bill-form.edit') != null) {
                console.log('edit bill form')
                address('bill')
            } else if (href.includes('checkout/step2') || href.includes('/guest-checkout2.php')) {
                console.log('checkout/step2 || /guest-checkout2')
                document.querySelector('form > div > input[type=image]').click()
            } else if (href.includes('checkout/step3') || href.includes('/guest-checkout3.php')) {
                console.log('checkout/step3 || /guest-checkout3')
                document.querySelector('#submitCheckout3').click()
            }
            scrollTop(e.target, document.body)
            pushDataLayer(`Click on ${e.target.innerText} button`, stepActive)
        })
    } 
    if (!href.includes('login') && !href.includes('register.php') && !href.includes('/checkout') && !href.includes('/guest-checkout')) {
        //cart
        let styleCart = `
        <style>
            .shopping-cart * {
                box-sizing: border-box;
            }
            .shopping-cart {
                background: rgba(0,0,0,0.5);
                position: fixed;
                top: 0;
                left: 0;
                transition: all 0.3s ease;
                width: 100%;
                height: 100%;
                opacity: 0;
                pointer-events: none;
                z-index: 999;
            }
            .shopping-cart.active {
                opacity: 1;
                pointer-events: auto;
            }
            .shopping-cart.active .container {
                transform: translateX(0);
            }
            .shopping-cart .container {
                background: #FFFFFF;
                margin-left: auto;
                margin-right: 0!important;
                width: 590px;
                transform: translateX(200px);
                transition: all 0.3s ease;
                padding: 0;
            }
            .shopping-cart svg {
                cursor: pointer;
            }
            .header-cart {
                padding: 0 48px;
                background: #FFFFFF;
                z-index: 2;
            }
            .header-cart > div {
                border-bottom: 1px solid #E3E6E7;
                padding: 20px 0;
                width: 100%;
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #474747;
            }
            .body-cart {
                padding: 0 48px;
                overflow-y: auto;
                height: calc(100vh - 112px - 68px);
                display: flex;
                flex-direction: column;
            }
            .list-product .product-item_img img {
                height: 86px;
                width: 86px;
            }
            .list-product .product-item_img {
                margin-right: 16px;
            }
            .also-bought {
                margin-top: auto;
            }
            .subtotal {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                padding: 32px 0;
                border-top: 1px solid #E3E6E7;
            }
            .footer-cart {
                padding: 32px;
                background: #FBFBFB;
                box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2), 0 -2px 6px 2px rgba(0, 0, 0, 0.15);
                position: relative;
                z-index: 2;
            }
            .footer-cart p {
                font-weight: 600;
                font-size: 14px;
                line-height: 130%;
                color: #344D57;
                padding: 12px;
            }
            .footer-cart .btn-next {
                padding: 0 29px 0 39px;
                font-size: 14px;
            }
            .paypal-form-button input {
                padding: 0;
            }
            .body-cart h4 {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: #344D57;
            }
            /*empty cart*/
            .empty-cart {
                margin: auto;
                display: block;
                width: fit-content;
            }
            .empty-cart p {
                font-weight: 400;
                font-size: 18px;
                line-height: 150%;
                color: #344D57;
                margin-bottom: 28px;
            }
            .empty-cart button.btn-next {
                padding: 0 24px;
            }
            /*slider*/
            .slider-products {
                padding: 32px 0 9px;
            }
            .tns-outer {
                margin-right: -48px;
                padding-right: 48px;
            }
            .shopping-cart button.swiper-button {
                position: absolute;
                top: calc(50% - 12px);
                transform: translateY(-50%);
                width: 50px;
                height: 50px;
                z-index: 8;
            }
            .shopping-cart button.swiper-button span {
                background: #FFFFFF;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
                width: 100%;
                height: 100%;
                border-radius: 50%;
                display: block;
                position: relative;
                z-index: 2;
            }
            .shopping-cart button.swiper-button:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                height: 290px;
                width: 62px;
                z-index: -1;
            }
        
            .shopping-cart button.swiper-button.swiper-button-prev {
                left: -36px;
            }
            .shopping-cart button.swiper-button.swiper-button-next {
                right: -36px;
            }
            .shopping-cart button.swiper-button.swiper-button-prev:before {
                background: linear-gradient(90deg, #FFFFFF 24.37%, rgba(255, 255, 255, 0));
                width: 106px;
            }
            .shopping-cart button.swiper-button.swiper-button-next:before {
                background: linear-gradient(-90deg, #FFFFFF 24.37%, rgba(255, 255, 255, 0));
            }
            .shopping-cart button.swiper-button[disabled] {
                opacity: 0;
            }
            .shopping-cart .slide {
                background: #FFFFFF;
                margin-right: 12px;
                padding: 20px;
                border: 1px solid #E3E6E7;
                border-radius: 4px;
            }
            .shopping-cart .slide img {
                width: 80px;
                height: 80px;
                margin-right: 8px;
            }
            .shopping-cart .slide .price p {
                font-weight: 300;
                font-size: 12px;
                line-height: 150%;
                text-decoration-line: line-through;
                color: #666666;
            }
            .shopping-cart .slide .price b {
                font-weight: 600;
                font-size: 16px;
                line-height: 130%;
                color: #091114;
            }
            .shopping-cart .slide .name {
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #6E6E6E;
                margin: 4px 0 8px;
                text-align: left;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .shopping-cart button.btn-add {
                background: #FBFBFB;
                border: 2px solid #1E3944;
                border-radius: 100px;
                font-weight: 600;
                font-size: 10px;
                line-height: 28px;
                text-align: center;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: #1E3944;
                width: 100%;
                margin-top: 16px;
            }
        </style>`;

        let cartModalHTML = `
        <div class="shopping-cart">
            <div class="container">     
                <div class="header-cart"><div class="flex flex-center-between">Shopping cart <svg class="ml-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4161 14L22.5939 5.44414C22.7142 5.30195 22.613 5.08594 22.4271 5.08594H20.245C20.1165 5.08594 19.9935 5.14336 19.9087 5.2418L13.9888 12.2992L8.06887 5.2418C7.98684 5.14336 7.86379 5.08594 7.73254 5.08594H5.55051C5.36457 5.08594 5.2634 5.30195 5.38372 5.44414L12.5614 14L5.38372 22.5559C5.35676 22.5876 5.33947 22.6263 5.3339 22.6675C5.32832 22.7088 5.33469 22.7507 5.35225 22.7884C5.36981 22.8262 5.39783 22.858 5.43297 22.8803C5.46812 22.9026 5.50891 22.9143 5.55051 22.9141H7.73254C7.86106 22.9141 7.98411 22.8566 8.06887 22.7582L13.9888 15.7008L19.9087 22.7582C19.9907 22.8566 20.1138 22.9141 20.245 22.9141H22.4271C22.613 22.9141 22.7142 22.698 22.5939 22.5559L15.4161 14Z" fill="#6D7E85"/></svg></div></div>
                <div class="body-cart">
                    <ul class="list-product"></ul>
                    <div class="justify-between subtotal flex"></div>
                    <div class="also-bought">
                        <h4>Also bought with</h4>
                        <div class="relative">
                            <button class="swiper-button swiper-button-prev" type="button">
                                <span>
                                    <svg width="18" height="50" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2868 13.8473C12.3432 13.9036 12.375 13.9803 12.375 14.0602C12.375 14.1402 12.3432 14.2169 12.2868 14.2732L11.6546 14.9091C11.6005 14.9671 11.5249 15 11.4459 15C11.3668 15 11.2912 14.9671 11.2371 14.9091L5.75621 9.39594C5.6723 9.31164 5.6251 9.19728 5.625 9.07799V8.92201C5.6251 8.80272 5.6723 8.68836 5.75621 8.60406L11.2371 3.0909C11.2912 3.0329 11.3668 3 11.4459 3C11.5249 3 11.6005 3.0329 11.6546 3.0909L12.2868 3.7268C12.3432 3.78312 12.375 3.85979 12.375 3.93977C12.375 4.01975 12.3432 4.09641 12.2868 4.15274L7.46788 9L12.2868 13.8473Z" fill="#344D57"/>
                                    </svg>               
                                </span>
                            </button>
                            <div class="slider-products"></div>
                            <button class="swiper-button swiper-button-next" type="button">
                                <span>
                                    <svg width="18" height="50" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.71321 13.8473C5.65675 13.9036 5.625 13.9803 5.625 14.0602C5.625 14.1402 5.65675 14.2169 5.71321 14.2732L6.34539 14.9091C6.39951 14.9671 6.47506 15 6.55413 15C6.63321 15 6.70876 14.9671 6.76287 14.9091L12.2438 9.39594C12.3277 9.31164 12.3749 9.19728 12.375 9.07799V8.92201C12.3749 8.80272 12.3277 8.68836 12.2438 8.60406L6.76287 3.0909C6.70876 3.0329 6.63321 3 6.55413 3C6.47506 3 6.39951 3.0329 6.34539 3.0909L5.71321 3.7268C5.65675 3.78312 5.625 3.85979 5.625 3.93977C5.625 4.01975 5.65675 4.09641 5.71321 4.15274L10.5321 9L5.71321 13.8473Z" fill="#344D57"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="footer-cart flex flex-center-between">
                    <form action="https://medicalmega.com/guest-expresscheckout.php" method="POST" target="default" class="paypal-form-button">
                        <input type="image" name="submit" src="https://conversionratestore.github.io/projects/medicalmega/img/paypal.svg" border="0" align="top" alt="Check out with PayPal">
                    </form>
                    <p>or</p>
                    <a href="${href.includes('/cart.html') ? '/checkout/step1' : '/cart.html'}" class="btn-next items-center flex">
                    <span>Proceed to checkout</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>`;

        let style = `
        <style class="style-main">
        @font-face {
            font-family: "Inter";
            src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Light.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Light.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Light.ttf) format("truetype");
            font-weight: 300;
            font-style: "normal"; }
        @font-face {
            font-family: "Inter";
            src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Regular.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Regular.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Regular.ttf) format("truetype");
            font-weight: 400;
            font-style: "normal"; }
        @font-face {
            font-family: "Inter";
            src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Medium.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Medium.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Medium.ttf) format("truetype");
            font-weight: 500;
            font-style: "normal"; }
        @font-face {
            font-family: "Inter";
            src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-SemiBold.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-SemiBold.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-SemiBold.ttf) format("truetype");
            font-weight: 600;
            font-style: "normal"; }
        @font-face {
            font-family: "Inter";
            src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Bold.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Bold.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-Bold.ttf) format("truetype");
            font-weight: 700;
            font-style: "normal"; }
        @font-face {
            font-family: "Inter";
            src: url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-ExtraBold.woff) format("woff"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-ExtraBold.woff2) format("woff2"), url(https://olha1001.github.io/medicalmega/pdp-rediesign/fonts/Inter/Inter-ExtraBold.ttf) format("truetype");
            font-weight: 800;
            font-style: "normal"; }
        *, *::before, *::after {
            -webkit-appearance: none;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0;
            margin: 0; }
        ul, ol, li {
            list-style: none;
        }
        a {
            color: #000;
            text-decoration: none;
        }
        body {
            font-size: 12px;
            border-top: 0;
            font-family: "Inter", sans-serif;
            font-style: normal;
            font-weight: normal;}
        button {
            border: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none; }
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0; }
        /* Firefox */
        input[type=number] {
            -moz-appearance: textfield; }
        *::-webkit-input-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            line-height: 26px; }
        *:-moz-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            line-height: 26px; }
        *::-moz-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            line-height: 26px; }
        *:-ms-input-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            line-height: 26px; }
        @-webkit-keyframes autofill {
            to {
                color: #091114;
                background-color: #E9EBEC;
            }
        }
        input:-webkit-autofill {
            -webkit-animation-name: autofill;
            -webkit-animation-fill-mode: both;
        }
        input:not([name="quantity"]) {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            background-color: #E9EBEC;
            border-radius: 30px;
            padding: 7.5px 20px;
            width: 100%;
            font-size: 14px;
            outline-color: #344D57;
            line-height: 26px; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
            display: none; }
        .container {
            max-width: 1260px;
            padding: 0 10px;
            width: 100%;
            margin: 0 auto; }
        #wrap, .modal {
            display: none;}
        .main {
            font-family: "Inter", sans-serif;
            font-style: normal;
            font-weight: normal;
            color: #091114;
            text-align: left;
            line-height: 16px; }
        .check {
            border: 1px solid #6D7E85;
            width: 16px;
            height: 16px;
            border-radius: 2px;
            display: block;
            margin-right: 8px;
            flex-shrink: 0;
            position: relative; }
        .check:before {
            content: none;
            width: 8px;
            height: 8px;
            background: #091114;
            border-radius: 1px;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); }
        .check_text {
            font-size: 14px;
            line-height: 150%; }
        .checkbox {
            display: none; }
            .checkbox:checked ~ .check:before {
            content: ''; }
            .checkbox:checked ~ .radio-check {
            border-color: #96280F; }
            .checkbox:checked ~ .radio-check .radio-check_price{
            color: #96280F;}
        .checkbox:disabled ~ .radio-check {
            border-color: #E3E6E7; }
            .checkbox:disabled ~ .radio-check span {
                color: #BCC4C7; }
        .ais-RefinementList-item--selected .check:before {
            content: ''; }
        .header {
            -webkit-box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
            box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            color: #1E3944;
            z-index: 8;
            background: #fff; }
        .supbar {
            background: #1E3944;
            padding: 10px 0 11px; }
        .supbar p, .supbar a {
            font-size: 12px;
            line-height: 1;
            color: #E9EBEC; }
        .supbar img {
            margin-right: 8px; }
        .midbar {
            padding: 20px 0; }
        .midbar_action {
            pointer-events: auto;
            cursor: pointer;
            padding: 12px;}
        .midbar_action span {
            font-weight: 600;
            white-space: nowrap;
            font-size: 10px;
            text-transform: uppercase;
            line-height: 10px;
            color: #1E3944; }
        .midbar .btn {
            font-size: 12px;}
        .midbar_action span.cart_count {
            color: #96280F;}
        .btn-cart * {
            pointer-events: none;}
        .logo {
            font-weight: 800;
            font-size: 24px;
            line-height: 18px;
            letter-spacing: 0.01em;
            margin-right: 12px;
            text-transform: uppercase;
            color: #1E3944!important; }
        .logo span {
            color: #96280F; }
        .box-search {
            position: relative;
            width: 545px; }
        .form-search {
            width: 100%;}
        .main .ais-SearchBox-input {
            background: #E9EBEC;
            border-radius: 38px;
            padding: 11px 50px 11px 20px;
            width: 100%; }
        .ais-SearchBox-submit {
            cursor: pointer;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            right: 4px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #1E3944; }
        .ais-SearchBox-submit svg {
            fill: #fff;
            width: 16px;
            height: 16px;
            pointer-events: none;}
        .ais-SearchBox-reset {
            position: absolute;
            right: 50px;
            top: 50%;
            padding: 5px;
            transform: translateY(-50%);
            background-color: transparent;
            cursor: pointer;}
        .ais-SearchBox-loadingIndicator {
            position: absolute;
            left: 4px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;}
        .subbar {
            border-top: 1px solid #BCC4C7;
            padding: 9px 0; }
        .all_category {
            cursor: pointer;
            padding: 13px 10px 13px 8px;
            border-radius: 100px;
            transition: all 0.3s ease; }
        .dropdown_categories {
            position: absolute;
            top: 188px;
            left: 0;
            display: flex;
            opacity: 0;
            pointer-events: none; }
        .alphabet {
            height: calc(100vh - 188px);
            overflow-y: auto;
            padding: 16px 0;
            min-width: 61px;
            background: #FFFFFF;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid #E3E6E7; }
        .nav_category *::-webkit-scrollbar, .nav_category *::-webkit-scrollbar-track {
            width: 4px; }
        .alphabet li {
            font-size: 12px;
            line-height: 18px;
            text-align: center;
            color: #6d7e85;
            margin: 4px 0;
            text-transform: uppercase;
            cursor: pointer; }
            .alphabet li.active {
            color: #96280F;
            font-weight: 600;
            line-height: 29px;
            font-size: 24px; }
        #list_categories_ex {
        display: none!important}
        #list_categories {
        height: calc(100vh - 188px);
        overflow-y: auto;
        padding: 20px 40px;
        width: 327px;
        background: #FBFBFB; }
        #list_categories ul {
            display: none;}
        #list_categories li.active a {
            text-decoration: underline;}
        #list_categories li ul {
            padding-left: 15px;
            border-left: 1px solid #ddd;}
        #list_categories li li {
            display: block!important;}
        #list_categories a {
            font-size: 16px;
            line-height: 150%;
            cursor: pointer;
            color: #344D57;
            margin-bottom: 12px;
            display: block; }
        #list_categories a:hover {
            text-decoration: underline; }
        #list_categories li:hover > ul {
            display: block
        }
        .nav_category.active .all_category {
            background: #E9EBEC; }
        .nav_category.active .dropdown_categories {
            opacity: 1;
            pointer-events: auto; }
        .nav_category .p-main {
        pointer-events: none;
        font-weight: 600;
        font-size: 10px;
        line-height: 10px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #1E3944; }
        .burger_category {
        pointer-events: none;
        width: 18px;
        height: 18px;
        margin-right: 10px; }
        .category_popular li a{
        font-weight: 400;
        cursor: pointer;
        font-size: 14px;
        line-height: 21px;
        color: #6D7E85;
        padding: 12px 6px;
        display: block;
        margin: 0 8px; }
        .category_popular li a:hover, .previous-version:hover {
            color: #091114; }
        .previous-version {
            font-weight: 600;
            font-size: 10px;
            line-height: 10px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            cursor: pointer;
            padding: 12px;
            color: #1E3944;}
        .burger {
        display: none;
        width: 21px;
        height: 17px;
        position: relative;
        z-index: 9;
        background-color: transparent;
        border: none; }
        .burger-line {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #fff;
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
            pointer-events: none; }
            .burger-line-top {
            top: 0; }
            .burger-line-center {
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%); }
            .burger-line-bottom {
            bottom: 0; }
        .burger.active .burger-line {
            top: 50%; }
            .burger.active .burger-line-top {
            -webkit-transform: translateY(-50%) rotate(224deg);
            -ms-transform: translateY(-50%) rotate(224deg);
            transform: translateY(-50%) rotate(224deg); }
            .burger.active .burger-line-center {
            opacity: 0; }
            .burger.active .burger-line-bottom {
            bottom: auto;
            -webkit-transform: translateY(-50%) rotate(-224deg);
            -ms-transform: translateY(-50%) rotate(-224deg);
            transform: translateY(-50%) rotate(-224deg); }
        .btn_reset {
            background: transparent url("https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/close.svg") no-repeat right center/contain;
            width: 130px;
            height: 24px;
            cursor: pointer; }
        .advanced-search {
            border-top: 1px solid #BCC4C7;
            opacity: 0;
            padding: 0;
            height: 0;
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
            pointer-events: none; }
        .advanced-search.active {
            padding: 16px 0;
            height: 64px;
            opacity: 1;
            pointer-events: auto; }
        .advanced-search input {
            padding: 2px 14px;
            background-color: #F0F1F2;
            width: fit-content;
            border: 1px solid #E0E4E5;
            max-width: 115px;
            font-size: 12px;
            line-height: 26px;
            text-align: center;
            margin-right: 20px; }
        .advanced-search .btn {
            line-height: 28px;
            margin-left: 20px;
            font-size: 10px; }
        .advanced-search .select {
            margin-right: 20px; }
        .select {
        position: relative;
        z-index: 6;}
        .select:before {
            pointer-events: none;
            content: '';
            position: absolute;
            top: 50%;
            right: 13px;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            transition: all 0.3s ease;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 4px 0 4px;
            border-radius: 0.5px;
            border-color: #9AA6AB transparent transparent transparent;}
        .select:after {
            content: none;
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            border: 2px solid #344D57;
            pointer-events: none;
            border-radius: 30px;
            }
        .select_brand {
            width: 165px; }
        .select_category {
            width: 142px;}
        .select_current {
            width: 100%;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: #F0F1F2;
            border-radius: 30px;
            border: 1px solid #E0E4E5;
            font-weight: normal;
            font-size: 12px;
            line-height: 30px;
            color: #344D57;
            padding: 0 30px 0 16px; }
        .select_current span {
            pointer-events: none;
            color: #9AA6AB; }
        .select_dropdown {
            display: grid;
            position: absolute;
            left: 0;
            top: calc(100% + 4px);
            background-color: #FBFBFB;
            border: 1px solid #E3E6E7;
            box-shadow: 0 2px 4px rgba(9, 17, 20, 0.1), 0 12px 32px rgba(0, 0, 0, 0.05);
            overflow-y: auto; 
            transition: all 0.3s ease;
            height: 0;
            visibility: hidden;
            width: max-content;
            max-width: 327px;
            padding: 0 16px;}
            .select_dropdown ul {
            padding-left: 5px;
            border-left: 1px solid #ddd;
            margin-left: 12px;}
        .select_dropdown.right {
            left: auto;
            right: 0;}
        .select.active:before {
            transform: translateY(-50%) scaleY(-1);}
        .select.active:after {
            content: '';}
        .select.active .select_dropdown {
            visibility: visible;
            padding-top: 8px;
            padding-bottom: 8px;
            height: 330px;}
        .select_dropdown::-webkit-scrollbar-track {
            width: 6px;}
        .select_option p {
            cursor: pointer;
            order: 2;
            font-size: 14px;
            line-height: 21px;
            padding: 4px 12px;
            color: #344D57;
            border-radius: 4px;
            border: 1px solid transparent;
            margin: 4px 0;
        }
        .select_option[data-value="408"] {
            order: 1; }
        .select_option p:hover {
            border-color: #E0E4E5;
            background-color: #E0E4E5; }
        .select_option p.active {
            background: #344D57;
            border-color: #344D57;
            color: #FBFBFB; }
        .select_option p:focus {
            border-color: #344D57;}
        .ais-SortBy-select {
            background: #FBFBFB;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            padding: 9.5px 25px 9.5px 16px;
            color: #344D57;
            border: 1px solid #E0E4E5;
            box-sizing: border-box;
            border-radius: 100px;}
        .filter {
            width: 200px;
            padding-top: 50px; }
        .filter_title {
            margin-bottom: 34px;
            font-weight: 600;
            font-size: 18px;
            line-height: 120%; }
        #clear-refinements {
            margin-bottom: 34px;}
        .filter .select_drop {
            padding-top: 10px; 
            margin-bottom: 10px;}
        .listing_wrapper {
            width: calc(100% - 200px);
            padding: 41px 0 22px 48px; }
        .listing_title {
            text-align: center;
            font-weight: 600;
            font-size: 36px;
            line-height: 120%;
            min-height: 43.2px;
            margin-bottom: 33px; }
        .listing_content ol {
            flex-wrap: wrap;
            display: flex;}
        .listing_content {
            padding-left: 1px;
            margin-top: 13px; }
        .listing_wrapper li {
            width: 25%; }
        .listing_wrapper .card {
            border-radius: 0;
            margin-top: -1px;
            margin-left: -1px;
            width: 100%;}
        .listing_wrapper .card img {
            width: 150px;
            height: 150px; }
        .listing_wrapper .card .btn_white {
            pointer-events: none;}
        .listing_wrapper .card .btn {
            font-size: 10px;
            line-height: 36px;
            font-weight: 600; }
        .listing_wrapper .card_name {
            font-size: 12px;
            line-height: 130%; }
        .listing_wrapper .card_name span {
            margin-bottom: 7px; }
        .listing_wrapper .calc-qty {
            width: 32px;
            height: 32px;
            line-height: 32px; }
        .listing_wrapper .btn-calc {
            width: 24px;
            height: 24px;
            margin: 0 12px; }
        .count_brand {
            color: #9AA6AB;
            margin-left: 4px; }
        .select_filter {
            margin-bottom: 26px; }
        .select_filter.active .select_item:before {
            -webkit-transform: translateY(-50%) scaleY(-1);
            -ms-transform: translateY(-50%) scaleY(-1);
            transform: translateY(-50%) scaleY(-1); }
        .select_filter.active .select_drop {
            display: block; }
        .select_item {
            padding: 6px 0;
            font-size: 18px;
            line-height: 150%;
            color: #344D57;
            cursor: pointer;
            border-bottom: 1px solid #E0E4E5;
            position: relative; }
        .select_item:before {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 4px 0 4px;
            border-radius: 0.5px;
            border-color: #9AA6AB transparent transparent transparent; }
        .select_drop {
            display: none; }
        .status {
            color: #96280F;
            position: absolute;
            top: 16px;
            right: 16px; }
        .line {
            background: #DCE0E1;
            width: 100%;
            height: 1px;
            display: block;
            margin: 12px 0; }
        .calc {
            margin-bottom: 16px; }
        .calc[disabled] {
            pointer-events: none;
            opacity: 0.7;}
        .calc-qty, input.calc-qty {
            width: 40px;
            height: 40px;
            line-height: 40px;
            color: #171717;
            font-size: 12px;
            background-color: #FBFBFB;
            border: 1px solid #E0E4E5;
            border-radius: 50%;
            text-align: center;
            padding: 0; }
        .btn-calc {
            position: relative;
            background-color: transparent;
            cursor: pointer;
            width: 40px;
            height: 40px;
            margin: 0 4px; }
        .btn-calc:hover:before, .btn-calc:hover:after {
            background: #96280F; }
        .btn-calc:before, .btn-calc:after {
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            -webkit-transition: all 0.3s ease;
            -o-transition: all 0.3s ease;
            transition: all 0.3s ease;
            background: #1E3944; }
        .btn-calc[disabled]:before, .btn-calc[disabled]:after {
            background: #BCC4C7; }
        .btn-calc:before {
            content: '';
            width: 14px;
            height: 2px; }
        .btn-calc:after {
            width: 2px;
            height: 14px; }
        .btn-calc_plus:after {
            content: ''; }
        .card {
            background: #FFFFFF;
            border: 1px solid #E3E6E7;
            border-radius: 4px;
            padding: 40px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            transition: all 0.3s ease;
            position: relative; }
        .card:hover {
            z-index: 1;
            box-shadow: 0px 2px 4px rgba(9, 17, 20, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
        }
        .card img {
            border-radius: 2px;
            width: 150px;
            height: 150px;
            object-fit: contain;
            display: block;
            margin: 0 auto 16px; }
        .card_name {
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            color: #344D57; }
            .card_name span {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            height: 47px;
            -webkit-box-orient: vertical;
            line-height: 15.6px;
            margin-bottom: 7px; }
        .card_item {
            font-size: 11px;
            margin-bottom: 15px;
            color: #6D7E85;}
        .card .btn {
            padding: 0;
            font-size: 12px;
            width: 100%; }
        .ais-Breadcrumb-list, .breadcrumbs ul {  
            display: flex;
            align-items: center;}
        .breadcrumbs {
            padding: 10px 0 5px; }
        .ais-Breadcrumb-link, .breadcrumbs a {
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #344D57;
            display: flex;
            align-items: center;}
        .ais-Breadcrumb-item, .breadcrumbs li {
            color: #6D7E85;
            display: flex;
            align-items: center;
            line-height: 18px;
            cursor: default;
            padding: 10px 0; }
        .arrow_buttons {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            width: 100%;
            z-index: 0;
            display: flex;
            justify-content: space-between;} 
        .arrow_button {
            cursor: pointer; }
        .arrow_button[disabled] svg path{
            fill: #BCC4C7;}
        .arrow_button_prev {
            margin-left: -26px; }
        .arrow_button_next {
            margin-right: -26px;}
        #list_categories .ais-HierarchicalMenu-list--child li {
            display: block!important;
        }
        #list_categories .ais-HierarchicalMenu-item--selected>div:first-child {
            text-decoration: underline; 
        }
        #list_categories .ais-HierarchicalMenu-count {
            display: none;
        }
        li.ais-Breadcrumb-item.ais-Breadcrumb-item--selected {
            max-width: 600px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        .ais-Breadcrumb-separator {
            width: 18px;
            height: 18px;
            margin: 0 4px;
            display: block;
            color: transparent;
            flex-shrink: 0;
            background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;
        }
        .ais-ClearRefinements-button {
            background-color: #e9ebec;
            padding: 5px 8px;
            border-radius: 40px;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            justify-content: space-between;
        }
        .ais-ClearRefinements-button:hover svg {
            fill: #bf0400;
        }
        .ais-ClearRefinements-button--disabled, .listing_wrapper .ais-InfiniteHits-loadMore, .ais-RefinementList-showMore--disabled {
            display: none!important;
        }
        .ais-RefinementList-showMore {
            text-decoration: underline;
            padding-top: 15px;
            display: block;
            width: 100%;
            background: #fff;
            z-index: 3;
            outline: none;
            color: #344D57;
            text-align: left;
            position: relative;
        }
        .main a#top {
            background-color: #1E3944;
            padding: 4px;
            border-radius: 40px;
        }
        .algolia-autocomplete {
            width: 100%;
        }
        .aa-dropdown-menu {
            background: #FBFBFB;
            box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
            width: 100%;
        }
        .aa-suggestion {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            cursor: pointer;
        }
        .aa-suggestion.aa-cursor {
            background-color: #E0E4E5;
        }
        .aa-suggestion img {
            width: 45px;
            height: 45px;
            border: 1px solid #eeeeee;
            margin-right: 10px;
            object-fit: contain;
        }
        .aa-suggestion em {
            font-weight: 700;
        }
        .aa-suggestion .name {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            height: 14px;
        }
        .aa-suggestion .item_num {
            font-size: 10px;
            margin-bottom: 4px;
            color: gray;
        }
        .aa-suggestion .price {
            fonr-size: 11px
        }
        #autocomplete {
            position: absolute!important;
            opacity: 0;
            pointer-events: none;
        }
        #manufacturer ul {
            max-height: 370px;
            overflow-x: hidden;
            overflow-y: auto;
        }
        #manufacturer ul.scroll:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 56px;
            z-index: 2;
            pointer-events: none;
            opacity: 1;
            transition: all 0.2s ease;
            background: linear-gradient(to top, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 0.3))
        }
        .listing_popular {
            margin-bottom: 33px;
        }
        .listing_popular ul {
            margin: 13px 0 20px
        }
        .listing_popular h2 {
            text-align: center;
            font-weight: 600;
            font-size: 36px;
            line-height: 120%;
            min-height: 43.2px;
            margin-bottom: 33px;
        }
        .listing_popular > div > .btn {
            margin: 0 auto 33px;
            display: block;
            width: fit-content;
        }
        #current-refinements {
            min-height: 27px;
        }
        #current-refinements li {
            width: fit-content;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
        }
        .ais-CurrentRefinements-list {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        .ais-CurrentRefinements-category {
            padding: 5px 8px;
            line-height: 1;
            border-radius: 40px;
            background-color: #e9ebec;
            display: flex;
            align-items: center;
            margin: 2.5px 0 2.5px 5px;
        }
        .ais-CurrentRefinements-label {
            margin: 4px 5px 4px 15px;
        }
        .ais-CurrentRefinements-delete {
            padding-left: 4px;
            cursor: pointer;
            line-height: 1;
            background-color: transparent;
        }
        .ais-CurrentRefinements-delete:hover {
            color: #bf0400;}
        #stats-container {
            white-space: nowrap;}
        .col_left {
            width: 456px;
            position: sticky;
            top: 205px;
            margin-top: 14px;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            z-index: 2; }
        .col_right {
            width: calc(100% - 456px);
            max-width: calc(100% - 456px - 48px); }
        .side_one {
            width: 96px;
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column; } 
        .trustpilot iframe {
            width: 90%!important;
            height: 91px!important;}
        .side_two {
            width: calc(100% - 96px); }
        .slider-nav .slide {
            width: 56px;
            height: 56px;
            border: 1px solid transparent;
            border-radius: 2px;
            padding: 2px;
            margin-bottom: 8px; }
            .slider-nav .slide.active {
            border-color: #BCC4C7; }
        .slider-nav img {
            width: 100%;
            height: 100%;
            -o-object-fit: contain;
            object-fit: contain; }
        .img-zoom-lens {
            position: absolute;
            border: 1px solid #d4d4d4;
            width: 140px;
            height: 140px;
            pointer-events: none;
            visibility: hidden; }
        .main .img-zoom-result {
            border: 1px solid #d4d4d4;
            width: 300px;
            height: 300px;
            position: absolute;
            top: 0;
            left: 100%;
            visibility: hidden;
            pointer-events: none;
            background-color: #fff; }
        .slider-for {
            position: relative;
            width: 360px;
            height: 360px;
            margin: 49px 0 12px; }
            .slider-for img {
            width: 100%;
            height: 360px;
            -o-object-fit: contain;
            object-fit: contain; }
        .list {
            color: #344D57;
            margin-bottom: 15px; }
        .list .fw-semi {
            color: #091114;}
        .list li {
            font-size: 16px;
            line-height: 170%; }
        .out-of-stick {
            position: absolute;
            top: 16px;
            right: 16px;
            font-size: 14px;
            line-height: 150%;
            color: #96280F!important;}
        .product_sidebar {
            min-height: 381px;
            background: #F0F1F2;
            border: 1px solid #E3E6E7;
            border-radius: 4px;
            width: 280px;
            padding: 48px 40px 40px;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            position: sticky;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            top: 255px; }
        .product_sidebar .btn {
            padding: 0;
            width: 100%;}
        .product_content { 
            font-family: 'Inter', sans-serif;
            padding-top: 28px; }
        .product_content h2, .product_content .title {
            padding-left: 0;
            font-weight: 600;
            font-size: 32px;
            line-height: 120%;
            margin-bottom: 24px; }
        .product_content .col_mid {
            padding-right: 10px;
            width: calc(100% - 280px);
            max-width: 426px; }
        .line {
            background: #DCE0E1;
            width: 100%;
            height: 1px;
            display: block;
            margin: 12px 0; }
        .total {
            padding: 10px 0;
            margin-bottom: 25px; }
        .calc {
            margin-bottom: 16px; }
        .calc.disabled {
            pointer-events: none;
            opacity: 0.7;}
        .calc-qty, .main input.calc-qty {
            width: 40px;
            height: 40px;
            line-height: 40px;
            color: #171717;
            font-size: 12px;
            background-color: #FBFBFB;
            border: 1px solid #E0E4E5;
            border-radius: 50%;
            text-align: center;
            padding: 0; }
            .content-discription * {
            font-family: 'Inter', sans-serif!important; }
        .content-discription {
            color: #6D7E85;
            padding-top: 9px; }
            .content-discription{
            font-size: 16px;
            line-height: 150%; }
            .content-discription * {
                color: #6D7E85!important;}
        .content-discription p {    
            text-align: left!important;
            margin-top: 15px;}
        .content-discription ul {
            margin-top: 15px;
            padding-left: 20px;}
        .content-discription ul li {
            list-style-type: disc;}
        .content-discription table td {
            border-bottom: 1px solid #344D57;
            padding: 4px 0; }
        .content-discription table td:first-child {
            color: #091114;
            width: 40%;
            padding-right: 10px;
            word-break: break-word; }
        .tabs-discription li {
            text-transform: lowercase;
            font-size: 14px;
            line-height: 21px;
            color: #091114;
            border-bottom: 1px solid #BCC4C7;
            padding: 13px 15px;
            cursor: pointer; }
        .tabs-discription li:first-letter {
            text-transform: uppercase;}
        .tabs-discription li:first-child {
            padding-left: 0; }
        .tabs-discription li:last-child {
            padding-right: 0; }
        .tabs-discription li.active {
            cursor: auto;
            border-bottom-color: #091114;
            font-weight: 600;
            color: #091114; }
        .content-item {
            display: none; }
            .content-item.active {
            display: block; }
        .similar-products {
            padding: 60px 0; }
            .similar-products h2 {
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            margin-bottom: 56px; }
        .similar-products .card, .popular-products .card {
            max-width: 281px;
            width: calc(25% - 30px);
            margin-right: 40px; }
        .similar-products .card:last-child, .popular-products .card:last-child {
            margin-right: 0;}
        .similar-products .card img {
            width: 100%;
            height: 200px;}
        .popular-products .card img {
            width: 100%;
            height: 100px;}
        .product {
            padding-top: 17px;
            padding-bottom: 60px; }
        .c-gray {
            color: #6D7E85; }
        .c-gray-08 {
            color: rgba(52, 77, 87, 0.8)}
        .c-red {
            color: #96280F; }
        .product_sidebar.disabled .product_sidebar_top, .product_sidebar.disabled .calc {
            pointer-events: none;}
        .product_sidebar.disabled p {
            color: #9AA6AB; }
        .product_sidebar.disabled .radio-check {
            border-color: #E3E6E7; }
        .product_sidebar.disabled .radio-check span {
            color: #BCC4C7!important; }
        .product_sidebar.disabled .calc-qty, .main .product_sidebar.disabled input.calc-qty {
            border-color: #E3E6E7;
            color: #BCC4C7; }
        .scroll-x {
            overflow-x: auto;}
        .scroll-x::-webkit-scrollbar {
            display: none; }
        .tns-outer {
            margin-left: -4px;
            margin-right: -4px; }
        .tns-outer .scroll-x {
            margin-left: 0!important;}
        .available-options .justify-between label {
            position: relative;
            z-index: 1;
            min-width: 95px;
            margin: 0 4px;
            width: 48%; }
        .available-options .scroll-x {
            margin-left: -5px; }
        .available-options .justify-between label:last-child {
            margin-right: 0; }
        .available-options .fs-14 {
            margin: 15px 0 5px; }
        .radio-check {
            background: #FBFBFB;
            border: 1px solid #E0E4E5;
            border-radius: 2px;
            display: block;
            padding: 11px 0;}
        .radio-check span {
            font-size: 12px;
            line-height: 150%;
            text-align: center;
            color: #344D57;
            display: block;}
        .radio-check span.radio-check_price {
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            color: #091114;
            margin-top: 8px;}
        @media only screen and (min-width: 1750px) {
            .nav_category {
                position: relative; }
            .dropdown_categories {
                left: -100px;
                top: 99%;
                padding-top: calc(1% + 9px);}
        }
        @media only screen and (max-width: 1250px) {
            .category_popular li a {
                margin: 0 3px;}
            .box-search {
                width: 500px;}
            .listing_wrapper {
                padding: 41px 0 22px 24px;}
            .similar-products .card {
                width: calc(25% - 15px);
                margin-right: 20px;}
        }
        </style>`;

        let htmlListing = `
        <div class="main">
            <header class="header">
                <div class="supbar">
                    <div class="container flex-center-between flex">
                        <a href="https://medicalmega.com/service.html" class="items-center flex"><img src="https://conversionratestore.github.io/projects/medicalmega/img/quotation.svg" alt="icon quotation">Customer Service</a>
                        <div class="flex"><a href="tel:17182084380"><span class="fw-light">Local Phone #</span>1-718-208-4380</a><a class="ml-40" href="tel:18556336342"><span class="fw-light">Toll Free Phone #</span>1-855-MED-MEGA (633-6342)</a></div>
                    </div>
                </div>
                <div class="midbar">
                    <div class="container">
                        <div class="flex-center-between flex"><a class="logo" href="#">Medical<span>Mega</span></a>
                            <div class="flex">
                                <button class="btn btn_white mr-16" type="button" data-button="advanced-search">Advanced Search</button>
                                <div class="box-search"> 
                                    <div id="form-search"></div>
                                    <input type="text" id="autocomplete">
                                </div>
                            </div>
                            <div class="items-center flex">
                                <a class="flex items-center midbar_action mr-16" href="https://medicalmega.com/myaccount.html">
                                    <img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/user.svg" alt="icon account">
                                    <span>Account</span>
                                </a>
                                <div class="flex items-center midbar_action btn-cart">
                                    <img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/cart.svg" alt="icon Cart">
                                    <span>Cart (<span class="cart_count">${counterBasket}</span>)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="advanced-search" data-item="advanced-search">
                    <div class="container flex-center-between flex">
                        <p class="fs-14 c-gray">Advanced Search</p>
                        <div class="flex">
                            <input type="text" placeholder="Enter Item #" name="search_item">
                            <input type="text" placeholder="Enter Keyword" name="search_keyword">
                            <div class="select select_category">
                                <p class="select_current" data-category="categories.lvl0:*"><span>Select Category</span></p>
                                <ul class="select_dropdown"> <li class="select_option active"><p data-category="categories.lvl0:*">Select Category</p></li></ul>
                            </div>
                            <div class="select select_brand">
                                <p class="select_current"><span>Select Manufacturer</span></p>
                                <ul class="select_dropdown right"> <li class="select_option active"><p>Select Manufacturer</p></li></ul>
                            </div>
                            <button class="btn btn_dark" type="button">Submit</button>
                        </div>
                        <button class="btn_reset" type="reset" data-close="advanced-search"></button>
                    </div>
                </form>
                <div class="subbar">
                    <div class="container flex-center-between flex">
                        <nav class="nav_category">
                            <div class="flex items-center all_category">
                                <img class="burger_category" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/burger.svg" alt="icon burger">
                                <p class="p-main">All Categories</p>
                            </div>
                            <div class="dropdown_categories">
                                <ul class="alphabet"></ul>
                                <ul id="list_categories"> </ul>
                                <div id="list_categories_ex"></div>
                            </div>
                        </nav>
                        <ul class="category_popular flex">
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=New%20Products!">New Products!</a></li>
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Hand%20Sanitizing">Hand Sanitizing</a></li>
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Wound%20Care">Wound Care</a></li>
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Gloves">Gloves</a></li>
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Disinfectants">Disinfectants</a></li>
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Ostomy">Ostomy</a></li>
                            <li><a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Instruments">Instruments</a></li>
                        </ul>
                        <p class="previous-version">switch to the previous version</p>
                    </div>
                </div>
                <button class="burger" id="burger" type="button"><span class="burger-line burger-line-top"></span><span class="burger-line burger-line-center"></span><span class="burger-line burger-line-bottom"></span></button>
            </header>
            <div class="container" id="container-listing"> 
                <nav id="breadcrumbs" class="breadcrumbs"></nav>
                <div id="relatedProducts"></div>
                <div class="flex-wrap w-100 flex" id="listing">
                    <div class="filter">
                        <div class="flex-center-between flex">
                            <h3 class="filter_title">Filters</h3>
                            <div id="clear-refinements"></div>
                        </div>
                        
                        <div class="select_filter active relative">
                            <div class="select_item">
                                <p>Brands</p>
                            </div>
                            <div class="select_drop" id="manufacturer"></div>
                        </div>
                        <div class="select_filter active relative">
                            <div class="select_item">
                                <p>Price</p>
                            </div>
                            <div class="select_drop" id="price_group"></div>
                        </div>
                    </div>
                    <div class="listing_wrapper">
                        <div class="listing_popular"></div>
                        <h2 class="listing_title">All Products</h2>
                        <div class="flex-end-between flex">
                            <p class="c-gray" id="stats-container"></p>
                            <div id="current-refinements"></div>
                        </div>
                        <div class="listing_content"> 
                            <ol class="listing_suggestion flex flex-wrap"></ol>
                            <div id="hits"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        
        const API_KEY = `e3a0cffec873466acf71806748550356`;
        const APPLICATION_ID = `PXDJAQHDPZ`;

        const searchClient = algoliasearch(
            APPLICATION_ID,
            API_KEY,
        );

        const indexName = 'products';

        const search = instantsearch({
            searchClient,
            indexName: indexName,
            routing: true,
        });

        const index = searchClient.initIndex(indexName);

        let categoryPageLoaded = false;

        let optionFetchAlgolia = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Algolia-API-Key': 'e3a0cffec873466acf71806748550356',
                'X-Algolia-Application-Id':'PXDJAQHDPZ'
            },
            method: 'GET'
        }

        let requestAllCaterories = new Promise((resolve, reject) => {
            fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?facets=["categories.lvl0","categories.lvl1","categories.lvl2","categories.lvl3","categories.lvl4","manufacturer"]`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
        })

        let requestProduct = new Promise((resolve, reject) => {
            if (href.includes('/product/')) {
                fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?query=${href.split('/product/')[1]}`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
            }
        })

        function openCategoriesFoeAlphabet(item) {
            item.forEach(el => {
                if (el.innerText[0] != document.querySelector('.alphabet .active').innerText[0]) {
                    el.parentElement.style.display = "none";
                } else {
                    el.parentElement.style.display = "block";
                }
            });
        }

        function scrolled(element) {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                element.classList.remove('scroll')
            } else {
                element.classList.add('scroll')
            }
        }

        //qty change
        function changeQty(qty,pr,action) {
            if (action == 'plus') {
                qty.value = parseInt(qty.value) + 1;
            } else if (action == 'minus') {
                qty.value = parseInt(qty.value) - 1;
            }
            if (action == 'plus' || action == 'minus') {
                if (qty.value == '') {
                    qty.value = 1;
                }
            }
            if (qty.value > 1) {
                qty.previousElementSibling.disabled = false;
            } else {
                qty.previousElementSibling.disabled = true;
            }

            pr.innerHTML= (+pr.dataset.price * +qty.value).toFixed(2)

            if (qty.value == 0 && qty.value != '') {
                qty.value = 1;
                pr.innerHTML= (+pr.dataset.price * +qty.value).toFixed(2)
            }
            if (qty.value == '') {
                pr.innerHTML = pr.dataset.price
            }
            if (qty.value > 1) {
                qty.parentElement.nextElementSibling.querySelector('span').hidden = false;
            } else {
                if (qty.closest('.product_sidebar')) {
                    qty.closest('.product_sidebar').querySelector('.add-cart span').hidden = true;
                    if (document.querySelector('.available-options') == null) {
                        qty.closest('.product_sidebar').querySelector('.add-cart span').hidden = true;
                    } else {
                        qty.closest('.product_sidebar').querySelector('.add-cart span').hidden = false;
                    }
                }
            }
        }

        if (sessionStorage.getItem('old_version') == null) {
            document.body.insertAdjacentHTML('afterbegin', styleCart); //add style for cart modal
            document.body.insertAdjacentHTML('afterbegin', style); //add style  

            document.body.insertAdjacentHTML('afterbegin', htmlListing); //add listing HTML
            document.body.insertAdjacentHTML('beforeend', cartModalHTML); //add cart modal

            startStuff();

            document.querySelector('.header').before(document.querySelector('#top'));
            document.querySelector('#top img').src = 'https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg';
            //events
            document.querySelector('#top').addEventListener('click', (e) => pushDataLayer(`Click on Top button`, `Footer`))
            document.querySelector('.supbar a').addEventListener('click', (e) => pushDataLayer(`Click on Customer Service`, labelForEvents(e.target)))
            
            document.querySelector('.cart_count').innerHTML = document.querySelector('.shoppingcart .by_num span').innerHTML;

            let btnCategory = document.querySelector('.all_category');

            //all categories
            btnCategory.addEventListener('click', (e) => {
                if (e.target.matches('.all_category')) {
                    e.target.parentElement.classList.toggle('active');
                    removeActive('.advanced-search')
                    removeActive(`[data-button="advanced-search"]`)
                    pushDataLayer(`Click on ${e.target.innerText} button`, labelForEvents(e.target));
                }
            })

            //select
            function remActiveSelect() {
                let dropdowns = document.querySelectorAll(".select");
                for (let i = 0; i < dropdowns.length; i++) {
                    if (dropdowns[i].classList.contains('active')) {
                        dropdowns[i].classList.remove('active');
                    }
                }
            }

            function toggleActive(getData, action) {
                if (document.querySelector(`[data-item=${getData}]`)) {
                    document.querySelector(`[data-item=${getData}]`).classList.toggle('active')
                    if (getData == 'advanced-search') {
                        document.querySelector(`[data-button=${getData}]`).classList.toggle('active');
                        removeActive(`.nav_category`)

                        let actionDataLayer = '';
                        if (action != 'close') {
                            actionDataLayer = `Click on advanced search`;
                        } else {
                            actionDataLayer = `Click on cross button`;
                        }
                        pushDataLayer(actionDataLayer, `Header`);
                    }
                }
            }

            requestAllCaterories.then(data => {
                let categoriesLvl0 = data.facets["categories.lvl0"],
                    categoriesLvl1 = data.facets["categories.lvl1"],
                    categoriesLvl2 = data.facets["categories.lvl2"],
                    categoriesLvl3 = data.facets["categories.lvl3"],
                    categoriesLvl4 = data.facets["categories.lvl4"],
                    brand = data.facets.manufacturer;

                console.log(data)

                function setLinkCategory(key, item, lvl) {
                    if (key.includes(item.dataset.bread)) {
                        let breabcrumbs = ``;
                        let crumbs = key.split(' > ');
                        for (let i = 0; i < crumbs.length; i++) {
                            breabcrumbs += `&products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B${i}%5D=${crumbs[i]}`
                        }
                        item.insertAdjacentHTML('beforeend', `<li><a href="https://medicalmega.com/?${breabcrumbs}">${crumbs[crumbs.length - 1]}</a> <ul data-bread="${key}" class="lvl${lvl}"></ul></li>`)
                    }
                }

                for (let key in categoriesLvl0) {
                    document.querySelector('.select_category .select_dropdown').insertAdjacentHTML('beforeend', ` 
                <li class="select_option"><p data-category="categories.lvl0:${key}">${key}</p>
                    <ul></ul>
                </li>`)
                    document.querySelector('#list_categories').insertAdjacentHTML('beforeend', `
                <li>
                    <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${key}">${key}</a>
                    <ul data-bread="${key}" class="lvl1"></ul>
                </li>`)
                }

                for (let key in categoriesLvl1) {
                    document.querySelectorAll('#list_categories .lvl1').forEach(item => setLinkCategory(key, item, 2))
                }
                for (let key in categoriesLvl2) {
                    document.querySelectorAll('#list_categories .lvl2').forEach(item => setLinkCategory(key, item, 3))
                }
                for (let key in categoriesLvl3) {
                    document.querySelectorAll('#list_categories .lvl3').forEach(item => setLinkCategory(key, item, 4))
                }
                for (let key in categoriesLvl4) {
                    document.querySelectorAll('#list_categories .lvl4').forEach(item => setLinkCategory(key, item, 5))
                }

                for (let key in brand) {
                    document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option"><p>${key}</p></li>`)
                }

                let listCategories = document.querySelectorAll('#list_categories > li > a'),
                    alphabet = document.querySelector('.alphabet'); //alphabet
                alphabet.innerHTML = '';

                let litterAlphabet = [];

                listCategories.forEach((el) => litterAlphabet.push({'letter': el.innerText[0]}))

                document.querySelectorAll('#list_categories li a').forEach((el) => {
                    el.addEventListener('click', (e) => {
                        e.preventDefault()
                        let link = el.href.split('20&').join('20%26');
                        window.location.href = link;
                        pushDataLayer(`Click on category item - ${el.innerText}`, `All categories`);
                    })
                })

                litterAlphabet = litterAlphabet.filter((thing, index, self) =>
                    index === self.findIndex((t) => (
                        t.letter === thing.letter
                    ))
                )

                for (let i = 0; i < litterAlphabet.length; i++) {
                    alphabet.insertAdjacentHTML('beforeend', `<li class="${litterAlphabet[i].letter == 'A' ? 'active' : ''}">${litterAlphabet[i].letter}</li>`);
                }

                openCategoriesFoeAlphabet(listCategories)

                let items = [...alphabet.querySelectorAll("li")];
                items.sort((a, b) => a.innerText == b.innerText ? 0 : a.innerText < b.innerText ? -1 : 1);
                items.forEach(item => alphabet.appendChild(item));

                let itemsList = [...document.querySelectorAll('#list_categories li')]
                itemsList.sort((a, b) => a.querySelector('a').innerText == b.querySelector('a').innerText ? 0 : a.querySelector('a').innerText < b.querySelector('a').innerText ? -1 : 1);
                itemsList.forEach(item => item.parentElement.appendChild(item));

                alphabet.querySelectorAll('li').forEach(el => {
                    el.addEventListener('mouseover', (e) => {
                        e.stopImmediatePropagation();
                        e.target.parentElement.querySelector('.active').classList.remove('active');
                        e.target.classList.add('active');
                        openCategoriesFoeAlphabet(listCategories)
                    })
                })
            })

            search.addWidgets([
                instantsearch.widgets.configure({
                    hitsPerPage: '12',
                    enablePersonalization: true,
                }),
                instantsearch.widgets.searchBox({
                    container: '#form-search',
                    placeholder: 'Search by Name',
                    showLoadingIndicator: false,
                    searchAsYouType: false,
                    showSubmit: true,
                    showReset: true,
                    templates: {
                        loadingIndicator: '<img src="https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif" alt="icon loading">',
                    },
                }),
                instantsearch.widgets.infiniteHits({
                    container: '#hits',
                    escapeHTML: false,
                    templates: {
                        empty: `No Item Found`,
                        item: (hit) => initHits(hit)
                    },
                }),

                instantsearch.widgets.stats({
                    container: '#stats-container',
                    templates: {
                        text(data) {
                            if (data.hasManyResults || data.hasOneResult) {
                                return `${data.nbHits} items`;
                            } else {
                                return `no result`;
                            }
                        },
                    },
                }),
                instantsearch.widgets.refinementList({
                    container: '#manufacturer',
                    attribute: 'manufacturer',
                    limit: 7,
                    showMore: true,
                    // searchable: true,
                    showMoreLimit: 400,
                    sortBy: ['name:asc'],
                    templates: {
                        item: (data) => {
                            let checkbox = `
                            <label class="mt-16 items-center flex" onclick="pushDataLayer('Click on one of the brand items on filters','Filters')">
                                <span class="check"></span>
                                <span class="check_text">${data.value}<span class="count_brand">(${data.count})</span></span>
                            </label>
                        `;
                            return checkbox
                        },
                    },
                }),
                instantsearch.widgets.refinementList({
                    container: '#price_group',
                    attribute: 'price_group',
                    limit: 10,
                    sortBy: ['name:asc'],
                    transformItems(items) {
                        return items.map(item => ({
                            ...item,
                            label: item.label.includes(' - ') ? `$${item.value.split(' - ')[0]} - $${item.value.split(' - ')[1]}` : `> $${item.value.split('> ')[1]}`,
                        }));
                    },
                    templates: {
                        item: (data) => {
                            let checkbox = `
                            <label class="mt-16 items-center flex" onclick="pushDataLayer('Click on one of the price items on filters','Filters')">
                                <span class="check"></span>
                                <span class="check_text">${data.label} <span class="count_brand">(${data.count})</span></span>
                            </label> `;

                            return checkbox
                        },
                    },
                }),

                instantsearch.widgets.clearRefinements({
                    container: '#clear-refinements',
                    templates: {
                        resetLabel: `Clear All Filters ✕`,
                    },
                    excludedAttributes: [
                        'categories.lvl0',
                        'categories.lvl1',
                        'categories.lvl2',
                        'categories.lvl3',
                        'categories.lvl4',
                        'query',
                    ],
                }),
                instantsearch.widgets.hierarchicalMenu({
                    container: `#list_categories_ex`,
                    attributes: [
                        'categories.lvl0',
                        'categories.lvl1',
                        'categories.lvl2',
                        'categories.lvl3',
                        'categories.lvl4',
                    ],
                }),
                instantsearch.widgets.breadcrumb({
                    container: '#breadcrumbs',
                    attributes: [
                        'categories.lvl0',
                        'categories.lvl1',
                        'categories.lvl2',
                        'categories.lvl3',
                        'categories.lvl4',
                    ],
                    limit: 150,
                }),
                instantsearch.widgets.currentRefinements({
                    container: "#current-refinements",
                    excludedAttributes: [
                        'categories.lvl0',
                        'categories.lvl1',
                        'categories.lvl2',
                        'categories.lvl3',
                        'categories.lvl4',
                        'query',
                    ],
                    transformItems(items) {
                        return items.map(item => ({
                            ...item,
                            label: item.label == "manufacturer" ? item.label = "brands" : item.label == "price_group" ? item.label = "prices" : '',
                            // refinements: item.refinements.label.includes
                        }));
                    }
                }),
                {
                    render({searchMetadata = {}}) {
                        const {isSearchStalled} = searchMetadata

                        if (isSearchStalled === false) {
                            console.log(isSearchStalled)

                            if (document.querySelector('#price_group li') != null) {
                                let pricesContainer = document.querySelector('#price_group ul'),
                                    para = document.querySelectorAll('#price_group li');

                                let paraArr = [].slice.call(para).sort(function (a, b) {
                                    return a.querySelector('.check_text').innerText.split(' -')[0].replace('$', '') - b.querySelector('.check_text').innerText.split(' -')[0].replace('$', '')
                                });
                                paraArr.forEach(function (p) {
                                    pricesContainer.appendChild(p);
                                });
                            }
                            document.querySelector('#form-search input').addEventListener('blur', () => {
                                document.querySelector('#form-search input').value = search.helper.state.query == 'undefined' || search.helper.state.query == '' ? '' : search.helper.state.query;
                            });
                            document.querySelector('.ais-SearchBox-reset').addEventListener('click', (e) => {
                                e.stopImmediatePropagation()
                                toggleListing(true, '#container-listing', '#container-product')
                                if (!e.target.classList.contains('reset')) {
                                    pushDataLayer(`Click on reset button`, 'Search by Name')
                                } else {
                                    e.target.classList.remove('reset')
                                }
                            })

                            if (window.location.pathname.includes('/category') && !window.location.href.includes('?products') && categoryPageLoaded == false) {
                                categoryPageLoaded = true;
                                search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [document.querySelector('title').innerHTML.split(' |')[0].split('&amp;').join('&')];
                                search.refresh()
                            }

                            let crumbs = document.querySelectorAll('#breadcrumbs li');
                            if (crumbs.length < 2) {
                                document.querySelector('#breadcrumbs').style.opacity = '0';
                                document.querySelector('.listing_title').innerHTML = 'All Products';
                            } else {
                                document.querySelector('#breadcrumbs').style = '';
                                document.querySelector('.listing_title').innerHTML = document.querySelector('#breadcrumbs .ais-Breadcrumb-item.ais-Breadcrumb-item--selected').innerText.replace('>', '')
                            }

                            if (document.querySelector('#manufacturer li') != null) {
                                let element = document.querySelector('#manufacturer ul');
                                element.addEventListener('scroll', (e) => {
                                        e.stopImmediatePropagation();
                                        scrolled(e.target)
                                    }
                                );
                            }
                            if (document.querySelector('#manufacturer .ais-RefinementList-showMore') != null) {
                                document.querySelector('#manufacturer .ais-RefinementList-showMore').addEventListener('click', (e) => {
                                    e.stopImmediatePropagation();
                                    pushDataLayer(`Click on ${e.target.innerText} button`, 'Filters');
                                    document.querySelector('#manufacturer ul').classList.toggle('scroll');
                                    e.target.innerText == 'Show more' ? document.querySelector('#manufacturer ul').classList.remove('scroll') : '';
                                })
                            }

                            document.querySelectorAll('.breadcrumbs li').forEach((crumb, index) => {
                                crumb.addEventListener('click', (e) => {
                                    e.stopImmediatePropagation();
                                    pushDataLayer(`Click on crumb - ${e.target.innerText}`, 'Breadcrumbs');
                                })
                            })

                            if (document.querySelector('.ais-CurrentRefinements-delete') != null) {
                                document.querySelectorAll('.ais-CurrentRefinements-delete').forEach(item => {
                                    item.addEventListener('click', (e) => {
                                        e.stopImmediatePropagation();
                                        pushDataLayer(`Click on cross button`, 'Current Refinements');
                                    })
                                })
                            }
                            if (document.querySelector('.ais-ClearRefinements-button') != null) {
                                document.querySelector('.ais-ClearRefinements-button').addEventListener('click', (e) => {
                                    e.stopImmediatePropagation();
                                    if (!e.target.classList.contains('action-clean')) {
                                        pushDataLayer(`Click on All Clear Filters button`, 'Filters')
                                    }
                                    e.target.classList.remove('action-clean');
                                })
                            }

                        }
                    },
                },
            ]);

            search.start();

            document.querySelectorAll('.category_popular li a').forEach((el) => {
                el.addEventListener('click', (e) => pushDataLayer(`Click on category item - ${e.target.innerText}`, 'Popular categories'))
            })

            if (window.location.href.includes('/search/') && !window.location.href.includes('?products')) {
                search.helper.setQuery(window.location.href.split('/search/')[1].split('-').join(' ')) // this call resets the page
                    .setPage(search.helper.getPage()) // we re-apply the previous page
                    .search();
            }

            let dataButton = document.querySelectorAll('[data-button]'), // btn for open or bloc
                closeBtn = document.querySelectorAll('[data-close]'); //btn close for hide popup or block

            dataButton.forEach(item => {
                item.addEventListener('click', (e) => {
                    toggleActive(item.getAttribute('data-button'))
                })
            })

            closeBtn.forEach(item => {
                item.addEventListener('click', (e) => {
                    toggleActive(item.getAttribute('data-close'), 'close');
                    document.querySelectorAll('.select_option p.active').forEach(el => el.classList.remove('active'))
                    addActive('.select_category ul li p')
                    document.querySelector('.select_category .select_current').innerHTML = `<span>Select Category</span>`;
                    addActive('.select_brand ul li p')
                    document.querySelector('.select_brand .select_current').innerHTML = `<span>Select Manufacturer</span>`;
                })
            })

            document.querySelector('.header .logo').addEventListener('click', (e) => {
                pushDataLayer(`Click on logo`, 'Header');
                window.location.href = currentPath;
            })

            document.addEventListener('click', (e) => {
                if (!e.target.closest('.select')) remActiveSelect();
                if (!e.target.closest('.nav_category')) {
                    removeActive(`.nav_category`)
                }
            })

            window.addEventListener('scroll', (e) => {
                remActiveSelect();
                removeActive('.nav_category')
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    if (document.querySelector('.listing_content .ais-InfiniteHits-loadMore') != null && document.querySelector('.listing_content .ais-InfiniteHits-loadMore.ais-InfiniteHits-loadMore--disabled') == null) {
                        document.querySelector('.listing_content .ais-InfiniteHits-loadMore').click();
                    }
                }
            })

            //select filter
            document.querySelectorAll('.select_filter').forEach(el => {
                el.querySelector('.select_item').addEventListener('click', (e) => {
                    el.classList.toggle('active');
                    pushDataLayer(`Click on ${e.target.innerText} button`, 'Filter')
                })
            })

            document.querySelector('.advanced-search .btn').addEventListener('click', (e) => {
                let categories = document.querySelector('.select_category .select_current').dataset.category;
                let brand = document.querySelector('.select_brand .select_current').innerText.includes('Select') ? "" : `&products%5BrefinementList%5D%5Bmanufacturer%5D%5B0%5D=${document.querySelector('.select_brand .select_current').innerText}`;

                let queryKeyword = document.querySelector('[name="search_keyword"]').value,
                    queryItem = document.querySelector('[name="search_item"]').value,
                    querySum = queryItem + (queryKeyword != '' && queryItem != '' ? ' ' : '') + queryKeyword;

                let option = ``;
                let crumbs = categories.split(':')[1].split(' > ');

                for (let i = 0; i < crumbs.length; i++) {
                    option += `&products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B${i}%5D=${crumbs[i]}`
                }

                pushDataLayer(`Click on submit button`, 'Advanced Search')
                if (querySum != '' || brand != '' || !option.includes("*")) {
                    window.location.href = `https://medicalmega.com/?products%5Bquery%5D=${querySum}${brand}${!option.includes("*") ? option.split('&').join('%26') : ''}`;
                }
            })

            document.querySelectorAll('.advanced-search input').forEach(input => {
                input.addEventListener('click', (e) => pushDataLayer(`Click on ${e.target.placeholder}`, 'Advanced Search'))

                input.addEventListener('keypress', (e) => {
                    if (e.keyCode == '13') {
                        document.querySelector('.advanced-search .btn').click();
                    }
                })
            })

            autocomplete('#form-search input', {hint: false, debug: false}, [
                {
                    source: autocomplete.sources.hits(index, {hitsPerPage: 7, facetFilters: ["*"]}),
                    displayKey: 'name',
                    // openOnFocus: true,
                    onStateChange: false,

                    templates: {
                        suggestion: function (suggestion) {
                            let variants = suggestion.variants;
                            let price = suggestion.price;
                            for (let i = 0; i < variants.length; i++) {
                                if (variants[i].extra.toLowerCase() == 'each' ) {
                                    price = variants[i].price
                                } else {
                                    price = variants[0].price
                                }
                            }
                            let sugTemplate = "<img src='https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/" + (findImageHits(suggestion.variants) != '' ? findImageHits(suggestion.variants) : 'dummyimage.jpg') + "'/><div><p class='name'>" + suggestion._highlightResult.name.value + "</p><p class='item_num'>Item #" + suggestion._highlightResult.item_num.value + "</p><p class='price'>$" + price + "</p></div>"

                            document.querySelector('#form-search .ais-SearchBox-submit').addEventListener('click', (e) => {
                                e.stopImmediatePropagation()
                                addActive('.nav_category')
                                search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [];
                                if (document.querySelector('.advanced-search.active') != null) {
                                    addActive('.advanced-search')
                                }
                                toggleListing(true, '#container-listing', '#container-product')

                                pushDataLayer(`Click on submit button`, 'Search by Name')
                            });

                            return sugTemplate;
                        },
                    },
                }
            ]).on('autocomplete:selected', function (event, suggestion, dataset) {
                window.location.href = `https://medicalmega.com/product/${suggestion.seo}`
                pushDataLayer(`Selected suggestion`, 'Autocomplete Search by Name')
            })

            document.querySelector('#form-search input').addEventListener('click', (e) => pushDataLayer(`Click on Search by Name`, labelForEvents(e.target)))

            document.querySelector('.previous-version').addEventListener('click', (e) => {
                sessionStorage.setItem('old_version', 'true');
                document.querySelector('.main').remove();
                document.querySelector('.style-main').remove();
                document.querySelector('#wrap').style.display = 'block';
                pushDataLayer(`Click on ${e.target.innerText}`, labelForEvents(e.target))
            })
            document.querySelectorAll('.midbar_action').forEach(el => {
                el.addEventListener('click', (e) => {
                    if(e.target.classList.contains('btn-cart')) {
                        addActive('.shopping-cart')
                        document.getElementsByTagName('html')[0].classList.add('fix')
                    }
                    pushDataLayer(`Click on ${e.target.innerText}`, labelForEvents(e.target))
                })
            })

            let requestNewProduct = index.search({
                facetFilters: ['categories.lvl0:New Products!'],
                hitsPerPage: '4',
            })
            let requestOstomy = index.search('', {
                facetFilters: ['categories.lvl0:Ostomy'],
                hitsPerPage: '4'
            })
            let requestWoundCare = index.search('', {
                facetFilters: ['categories.lvl0:Wound Care'],
                hitsPerPage: '4',

            })
            Promise.all([requestNewProduct, requestOstomy, requestWoundCare]).then(res => {
                document.querySelector('.listing_popular').insertAdjacentHTML('beforeend', `
                <div class="new-products">
                    <h2>New Products!</h2>
                    <p class="c-gray">${res[0].nbHits} items</p>
                    <ul class="flex"></ul>
                    <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=New%20Products!" class="btn btn_white">Show More</a>
                </div>
                <div class="ostomy">
                    <h2>Ostomy</h2>
                    <p class="c-gray">${res[1].nbHits} items</p>
                    <ul class="flex"></ul>
                    <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Ostomy" class="btn btn_white">Show More</a>
                </div>
                <div class="wound-care">
                    <h2>Wound Care</h2>
                    <p class="c-gray">${res[2].nbHits} items</p>
                    <ul class="flex"></ul>
                    <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Wound%20Care" class="btn btn_white">Show More</a>
                </div>`);

                for (let i = 0; i < 4; i++) {
                    document.querySelector(`.listing_popular .new-products ul`).insertAdjacentHTML('beforeend', `<li>${initHits(res[0].hits[i])}</li>`)
                    document.querySelector(`.listing_popular .ostomy ul`).insertAdjacentHTML('beforeend', `<li>${initHits(res[1].hits[i])}</li>`)
                    document.querySelector(`.listing_popular .wound-care ul`).insertAdjacentHTML('beforeend', `<li>${initHits(res[2].hits[i])}</li>`)
                }
                document.querySelectorAll('.listing_popular .btn_white').forEach(el => {
                    el.addEventListener('click', (e) => pushDataLayer(`${el.parentElement.querySelector('h2').innerText}`, `Click on Show More`))
                })
            });

            //pdp
            if (window.location.pathname.includes('/product/')) {
                toggleListing(false, '#container-listing', '#container-product'); //hide listing

                requestProduct.then(data => {
                    if (data.nbHits == 0) {
                        document.querySelector('.main').style.display = 'none';
                        document.querySelector('.style-main') != null ? document.querySelector('.style-main').remove() : '';
                        document.querySelector('#wrap').style.display = 'block';
                    } else {
                        let product = data.hits[0],
                            firstVariant = product.variants[0];

                        let imagesProduct = firstVariant.images,
                            categoriesHit = product.categories;

                        let categoryLvl = '';

                        let lastLvlCategories = categoriesHit[Object.keys(categoriesHit)[Object.keys(categoriesHit).length - 1]];

                        for (let j = 0; j < lastLvlCategories.length; j++) {
                            if (lastLvlCategories[j] != null) {
                                categoryLvl = `categories.lvl${Object.keys(categoriesHit).length - 1}:${lastLvlCategories[j]}`
                            }
                        }
                        console.log(categoryLvl)
                        let requestSimilarProduct = index.search({
                            facetFilters: [categoryLvl],
                            // filters: categoryLvl,
                            hitsPerPage: '4',
                        })

                        //Available Options
                        let htmlAvailableOptions = `
                        <div class="available-options"> 
                            <p class="fs-14 fw-semi">Available Options: </p> 
                            <div class="relative">
                                <div class="flex justify-between scroll-x"></div>
                            </div>
                        </div>`;

                        function availableOptions() {
                            let options = product.variants,
                                label = ``;
                            for (let i = 0; i < options.length; i++) {
                                if (options[i].price != '0.00') {
                                    label += `<label><input class="checkbox" type="radio" name="radio" data-variant="${options[i].pv_id}" ${options[i].in_stock == false ? 'disabled' : ''}><span class="radio-check"><span>${options[i].extra}</span><span class="radio-check_price">$${options[i].price}</span></span></label>`;
                                }
                            }
                            return label
                        }

                        function getSlidesImage() {
                            let slides = ''
                            for (let i = 0; i < imagesProduct.length; i++) {
                                slides += `<div class="slide ${i == 0 ? 'active' : ''}"><img src="https://medicalmegaimgs.net/prod/uploaded/product/${imagesProduct[i]}" alt="image ${i}"> </div>`
                            }
                            return slides
                        }

                        let htmlProduct = `
                        <div id="container-product" class="container">
                            <nav id="breadcrumbs-pdp" class="breadcrumbs">
                                <ul class="ais-Breadcrumb-list">
                                    <li class="ais-Breadcrumb-item">
                                        <a class="ais-Breadcrumb-link" href="https://medicalmega.com/">Home</a>
                                    </li>
                                    <li class="ais-Breadcrumb-item">
                                        <span class="ais-Breadcrumb-separator" aria-hidden="true">&gt;</span>
                                        <a class="ais-Breadcrumb-link" href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${product.categories['lvl0'][0].split(' &').join('%20%26')}">${product.categories['lvl0'][0]}</a>
                                    </li>
                                    <li class="ais-Breadcrumb-item ais-Breadcrumb-item--selected"><span class="ais-Breadcrumb-separator" aria-hidden="true">&gt;</span>${product.name}</li>
                                </ul>  
                            </nav>
                            <div class="flex-wrap w-100 justify-between flex product"> 
                                <div class="col_left flex-wrap flex"> 
                                    <div class="side_one">
                                        <div class="slider-nav">${getSlidesImage()}</div>
                                        <div class="trustpilot"></div>
                                    </div>
                                    <div class="side_two">
                                        <div class="slider-for">
                                            <div class="slide" data-item="show-zoom">
                                                <img class="slider-for_img" id="forImg" src="https://medicalmegaimgs.net/prod/uploaded/product/${imagesProduct[0]}" alt="image ${product.name}">
                                                <div class="img-zoom-result" id="zoomResult"></div>
                                            </div>
                                        </div>
                                        <p class="text-small text-center">Image shown for reference purposes only. Actual product appearance may vary.</p>
                                    </div>
                                </div>
                                <div class="col_right"> 
                                    <div class="product_content justify-between flex"> 
                                        <div class="col_mid">
                                            <h2 class="title">${product.name}</h2>
                                            <ul class="list">
                                                <li> Sold By: <span class="fw-semi">${firstVariant.extra}</span></li>
                                                <li> Item Number: <span class="fw-semi">${product.item_num}</span></li>
                                                <li> Manufacturer: <span class="fw-semi">${product.manufacturer}</span></li>
                                            </ul>
                                            <ul class="tabs-discription flex"> 
                                                <li class="active">Product details</li>
                                            </ul>
                                            <div class="content-discription">
                                                <div class="content-item active">${firstVariant.desc}</div>
                                            </div>
                                        </div>
                                        <div class="product_sidebar ${firstVariant.in_stock == false ? 'disabled' : ''}">
                                            ${firstVariant.in_stock == false ? '<p class="out-of-stick">Out Of Stock</p>' : ''}
                                            <div class="product_sidebar_top">
                                            <div class="shipping_block">
                                                <div class="items-center flex"> 
                                                    <img class="mr-16 icon-car" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/car.svg" alt="icon shipping">
                                                    <div> 
                                                        <p class="c-red text-up fw-semi l-t-02">Estimated shipping</p>
                                                        <p class="c-gray">2-3 business days*</p>
                                                    </div>
                                                </div>
                                                <div class="line"></div>
                                            </div>     
                                            ${product.variants.length < 2 ? `<div class="flex-end-between fw-semi total flex"> <p class="fs-14">Price:</p><p class="fs-24">$<span class="pr-state">${firstVariant.price}</span></p> </div>` : htmlAvailableOptions}
                                            </div>
                                            <form action="https://medicalmega.com/cart.html" method="post">
                                                <div class="flex-center calc flex" ${firstVariant.in_stock == false || firstVariant.price == '0:00' ? 'disabled' : ''}> 
                                                    <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                                                    <input class="calc-qty" type="number" value="1" name="quantity">
                                                    <button class="btn-calc btn-calc_plus" type="button"></button>
                                                </div>
                                                ${firstVariant.in_stock == false || firstVariant.price == '0:00' ? '<button class="btn btn btn_white" type="button" data-button="notify">Out of Stock</button>' : `<button class="btn btn_dark add-cart" type="button" ><span hidden>$<span class="pr" data-price="${firstVariant.price}">${firstVariant.price}</span> | </span>Add to Cart</button>`}
                                                <input type="hidden" name="product_variant_id" value="${firstVariant.pv_id}">
                                                <input type="hidden" name="product_id" value="${product.objectID}">
                                                <input type="hidden" name="add_to_cart" value="variant">
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section class="similar-products">
                                <h2 class="text-center">Similar Products</h2>
                                <div class="justify-center cards_similar flex"></div>
                            </section>
                        </div>`

                        document.querySelector('#container-listing').insertAdjacentHTML('beforebegin', htmlProduct);

                        document.querySelector('.available-options .scroll-x') != null ? document.querySelector('.available-options .scroll-x').innerHTML = availableOptions() : '';

                        let tabs = document.querySelectorAll('.tabs-discription li'), //tabs description
                            contents = document.querySelectorAll('.content-discription .content-item'), // content discription
                            slidesFor = document.querySelectorAll('.slider-for .slide'); //slider main
                        slidesNav = document.querySelectorAll('.slider-nav .slide'); //slider main

                        tabs.forEach((tab, i) => {
                            tab.addEventListener('click', (e) => {
                                tab.parentElement.querySelector('.active').classList.remove('active');
                                contents[i].parentElement.querySelector('.active').classList.remove('active');
                                tab.classList.add('active');
                                contents[i].classList.add('active');
                                pushDataLayer(`Click at the ${tab.innerText} tab`, labelForEvents(e.target))
                            })
                        })
                        //slider zoom
                        slidesFor.forEach((el) => {
                            el.addEventListener('mousemove', (e) => {
                                document.querySelector('.img-zoom-result').style.visibility = 'visible';
                                document.querySelector('.img-zoom-lens').style.visibility = 'visible';
                            })
                            el.addEventListener('mouseout', (e) => {
                                document.querySelector('.img-zoom-result').style.visibility = 'hidden';
                                document.querySelector('.img-zoom-lens').style.visibility = 'hidden';
                            })
                        })

                        //slider nav
                        slidesNav.forEach((el, i) => {
                            el.addEventListener('click', (e) => {
                                el.closest('.slider-nav').querySelector('.active').classList.remove('active');
                                el.classList.add('active');

                                let src = el.querySelector('img').getAttribute('src');
                                document.querySelector('.slider-for_img').setAttribute('src', src)
                                document.querySelector('.img-zoom-result').style.backgroundImage = `url("${src}")`
                            })
                        })

                        //zoom
                        function setImageZoom(imgID, resultID) {
                            let img, lens, result, cx, cy;
                            img = document.getElementById(imgID);
                            result = document.getElementById(resultID);
                            /*create lens:*/
                            lens = document.createElement("DIV");
                            lens.setAttribute("class", "img-zoom-lens");
                            /*insert lens:*/
                            img.parentElement.insertBefore(lens, img);
                            /*calculate the ratio between result DIV and lens:*/
                            cx = result.offsetWidth / lens.offsetWidth;
                            cy = result.offsetHeight / lens.offsetHeight;
                            /*set background properties for the result DIV:*/
                            result.style.backgroundImage = "url('" + img.src + "')";
                            result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
                            /*execute a function when someone moves the cursor over the image, or the lens:*/
                            lens.addEventListener("mousemove", moveLens);
                            img.addEventListener("mousemove", moveLens);
                            /*and also for touch screens:*/
                            lens.addEventListener("touchmove", moveLens);
                            img.addEventListener("touchmove", moveLens);

                            function moveLens(e) {
                                var pos, x, y;
                                /*prevent any other actions that may occur when moving over the image:*/
                                e.preventDefault();
                                /*get the cursor's x and y positions:*/
                                pos = getCursorPos(e);
                                /*calculate the position of the lens:*/
                                x = pos.x - (lens.offsetWidth / 2);
                                y = pos.y - (lens.offsetHeight / 2);
                                /*prevent the lens from being positioned outside the image:*/
                                if (x > img.width - lens.offsetWidth) {
                                    x = img.width - lens.offsetWidth;
                                }
                                if (x < 0) {
                                    x = 0;
                                }
                                if (y > img.height - lens.offsetHeight) {
                                    y = img.height - lens.offsetHeight;
                                }
                                if (y < 0) {
                                    y = 0;
                                }
                                /*set the position of the lens:*/
                                lens.style.left = x + "px";
                                lens.style.top = y + "px";
                                /*display what the lens "sees":*/
                                result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
                            }

                            function getCursorPos(e) {
                                var a, x = 0, y = 0;
                                e = e || window.event;
                                /*get the x and y positions of the image:*/
                                a = img.getBoundingClientRect();
                                /*calculate the cursor's x and y coordinates, relative to the image:*/
                                x = e.pageX - a.left;
                                y = e.pageY - a.top;
                                /*consider any page scrolling:*/
                                x = x - window.pageXOffset;
                                y = y - window.pageYOffset;
                                return {x: x, y: y};
                            }
                        }

                        let startZoom = setInterval(() => {
                            if (document.querySelector('#zoomResult') != null && document.querySelector('#forImg') != null) {
                                clearInterval(startZoom)
                                setImageZoom("forImg", "zoomResult")
                            }
                        }, 200);

                        if (product.variants.length > 2) {
                            let contentAvailableOptions = document.querySelector('.product_sidebar .available-options .justify-between');

                            contentAvailableOptions.insertAdjacentHTML('beforebegin', `
                            <div class="arrow_buttons">
                                <button class="arrow_button arrow_button_prev" type="button" disabled>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2868 13.8473C12.3432 13.9036 12.375 13.9803 12.375 14.0602C12.375 14.1402 12.3432 14.2169 12.2868 14.2732L11.6546 14.9091C11.6005 14.9671 11.5249 15 11.4459 15C11.3668 15 11.2912 14.9671 11.2371 14.9091L5.75621 9.39594C5.6723 9.31164 5.6251 9.19728 5.625 9.07799V8.92201C5.6251 8.80272 5.6723 8.68836 5.75621 8.60406L11.2371 3.0909C11.2912 3.0329 11.3668 3 11.4459 3C11.5249 3 11.6005 3.0329 11.6546 3.0909L12.2868 3.7268C12.3432 3.78312 12.375 3.85979 12.375 3.93977C12.375 4.01975 12.3432 4.09641 12.2868 4.15274L7.46788 9L12.2868 13.8473Z" fill="#091114"/>
                                    </svg>
                                </button>
                                <button class="arrow_button arrow_button_next" type="button">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.71321 13.8473C5.65675 13.9036 5.625 13.9803 5.625 14.0602C5.625 14.1402 5.65675 14.2169 5.71321 14.2732L6.34539 14.9091C6.39951 14.9671 6.47506 15 6.55413 15C6.63321 15 6.70876 14.9671 6.76287 14.9091L12.2438 9.39594C12.3277 9.31164 12.3749 9.19728 12.375 9.07799V8.92201C12.3749 8.80272 12.3277 8.68836 12.2438 8.60406L6.76287 3.0909C6.70876 3.0329 6.63321 3 6.55413 3C6.47506 3 6.39951 3.0329 6.34539 3.0909L5.71321 3.7268C5.65675 3.78312 5.625 3.85979 5.625 3.93977C5.625 4.01975 5.65675 4.09641 5.71321 4.15274L10.5321 9L5.71321 13.8473Z" fill="#091114"/>
                                    </svg>
                                </button>
                            </div>`)

                            document.querySelectorAll('.arrow_button').forEach(arrow => {
                                arrow.addEventListener('click', (e) => pushDataLayer('Click on arrow-slide button', labelForEvents(e.target)))
                            })

                            let startInterval = setInterval(() => {
                                if (contentAvailableOptions != null) {
                                    if (document.querySelector('.tns-outer') != null) {
                                        clearInterval(startInterval)
                                    } else {
                                        let sliderCategories = tns({
                                            container: contentAvailableOptions,
                                            items: 2,
                                            axis: 'horizontal',
                                            controls: true,
                                            loop: false,
                                            prevButton: document.querySelector('.arrow_button_prev'),
                                            nextButton: document.querySelector('.arrow_button_next'),
                                            autoplayButton: false,
                                            autoplayButtonOutput: false,
                                            mouseDrag: true,
                                            nav: false,
                                            // autoWidth: true,
                                            preventScrollOnTouch: 'auto',
                                            swipeAngle: false,
                                        });
                                        clearInterval(startInterval)
                                    }
                                }
                            }, 200)
                        }

                        //checkbox choice
                        document.querySelectorAll('.available-options .checkbox').forEach((checkbox, index) => {
                            if (index == 0) {
                                checkbox.checked = true
                            }
                            checkbox.addEventListener('change', (e) => {
                                if (checkbox.checked) {
                                    let optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerText.replace('$', ''),
                                        qtyOptions = document.querySelector('.product_sidebar .calc-qty'),
                                        priceProduct = document.querySelector('.product_sidebar .add-cart .pr');

                                    document.querySelector('.product_sidebar [name="product_variant_id"]').value = checkbox.dataset.variant;
                                    priceProduct.dataset.price = optionPrice;

                                    priceProduct.innerHTML = (+optionPrice * +qtyOptions.value).toFixed(2);
                                    if (qtyOptions.value == '') {
                                        priceProduct.innerHTML = optionPrice
                                    }
                                }
                                pushDataLayer('Click on available options', labelForEvents(e.target))
                            })
                        })

                        requestSimilarProduct.then(res => {
                            let hits = res.hits;

                            if (hits.length > 0) {
                                for (let i = 0; i < hits.length; i++) {
                                    document.querySelector('.cards_similar').insertAdjacentHTML('beforeend', initHits(hits[i]))
                                }
                            }
                        })
                    }
                })
            }

            document.querySelector('.header-cart svg').addEventListener('click', (e) => {
                removeActive('.shopping-cart')
                document.getElementsByTagName('html')[0].classList.remove('fix')
                pushDataLayer('Click on cross button', labelForEvents(e.target))
            })
            document.querySelector('.shopping-cart').addEventListener('click', (e) => {
                if(e.target.matches('.shopping-cart')) {
                    removeActive('.shopping-cart')
                    document.getElementsByTagName('html')[0].classList.remove('fix')
                    pushDataLayer('Click on under shopping cart', labelForEvents(e.target))
                }
            })
    
            //Click on payPal button (event)
            document.querySelector('.paypal-form-button').addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                e.target.querySelector('input').click()
                pushDataLayer('Click on payPal button', labelForEvents(e.target))
            })
    
            //add products in slider
            let slideHTML = (url, urlImage, title, price, id, variantId, parent) =>  {
                let slide = `
                    <div class="slide">
                        <a href="/product/${url}" onclick="pushDataLayer('Click on product', labelForEvents(this))">
                            <span class="items-center flex">
                                <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${urlImage}" alt="${title}">
                                <span class="price">
                                    <p></p>
                                    <b>${price}</b>
                                </span>
                            </span>
                            <span class="name">${title}</span>
                        </a>
                        <div class="flex-center flex">
                            <button type="button" class="quantity-btn quantity-btn_minus">−</button>
                            <input type="number" name="quantity" value="1" class="quantity">
                            <button type="button" class="quantity-btn quantity-btn_plus" >+</button>
                        </div>
                        <button type="button" class="btn-add" data-variant-id="${variantId}" data-id="${id}">Add to cart</button>
                    </div> `;
    
                document.querySelector(parent).insertAdjacentHTML('beforeend', slide)
            }
    
            if (href.includes('/cart.html')) {
                toggleListing(false, '#container-listing', '#container-product')
                let styleCartPage = `
                <style>
                    .cart {
                        padding-bottom: 150px;
                    }
                    .cart-container {
                        max-width: 1100px;
                        width: 100%:
                        padding: 0;
                    }
                    .cart h2 {
                        font-weight: 600;
                        font-size: 36px;
                        line-height: 120%;
                        color: #091114;
                        padding: 48px 0;
                    }
                    .cart-head {
                        border-bottom: 1px solid #E9EBEC;
                        padding-bottom: 20px;
                    }
                    .cart-head p:first-child, .cart-list .product-item > div:first-child {
                        width: 60%;
                    } 
                    .cart-head p, .cart-list .product-item > div:last-child, .cart-list .product-item > div {
                        width: 20%;
                    }
                    .cart-list .product-item {
                        padding: 32px 0;
                    }
                    .cart-list .product-item_img img {
                        width: 86px;
                        height: 86px;
                    } 
                    .cart-total {
                        color: #091114;
                        padding: 20px 0 40px;
                    }
                    .cart-list .product-item:last-child {
                        border-bottom: 1px solid #E3E6E7;
                    }
                    .cart-list .product-item > div a:not(.product-item_img) {
                        color: #344D57;
                        max-width: 520px;
                        padding-right: 20px;
                    }
                    .cart-head p:nth-child(2) {
                        padding-left: 13px;
                    }
                </style>`
        
                let htmlCart = `
                    <div class="cart">
                        <div class="cart-container mx-auto">
                            <h2 class="text-center">Your cart</h2>
                            <div class="cart-head fs-16 c-gray flex">
                                <p>Product</p>
                                <p>Quantity</p>
                                <p class="text-right">Total</p>
                            </div>
                            <ul class="cart-list"></ul>
                            <p class="cart-total text-right fw-semi fs-24"></p>
                            <div class="btn-checkout">
                                <a href="/checkout/step1" class="btn btn-next flex items-center ml-auto">
                                    <span>checkout</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="popular-products">
                            <div class="container">
                                <h2 class="text-center">Popular products</h2>
                                <div class="flex popular-products-row"></div>
                            </div>
                        </div>
                    </div>`;
                document.body.insertAdjacentHTML('afterbegin', styleCartPage)
                document.querySelector('.main').insertAdjacentHTML('beforeend', htmlCart)
            }
            //11212 Hand Sanitizing
            let requestHandSanitizing = index.search({
                facetFilters: ['categories.lvl0:Hand Sanitizing'],
                hitsPerPage: '6',
            })
            requestHandSanitizing.then(data => {
                console.log(data)
                let products = data.hits;
                for (let i = 0; i < products.length; i++) {
                    slideHTML(products[i].seo, products[i].variants[0].image, products[i].name, products[i].variants[0].price, products[i].objectID, products[i].variants[0].pv_id, '.slider-products')
                    
                    if (href.includes('/cart.html') && i < 4) {
                        document.querySelector('.popular-products-row').insertAdjacentHTML('beforeend', initHits(products[i]))
                    }
    
                    let plus = document.querySelectorAll(`.slide .quantity-btn_plus`)[i],
                        minus = document.querySelectorAll(`.slide .quantity-btn_minus`)[i],
                        quantity = document.querySelectorAll(`.slide .quantity`)[i];
    
                    changeQuantity(plus, minus, quantity, false);
                    let addBtns = document.querySelectorAll('.btn-add');
                    addBtns[i].addEventListener('click', (e) => { // add products in cart
                        pushDataLayer('Click on Add to cart', labelForEvents(e.target))
                        postFetch('/cart.html',`api=c&cart_action=add&variant_id=${addBtns[i].dataset.variantId}&quantity=${addBtns[i].previousElementSibling.querySelector('.quantity').value}&product_id=${addBtns[i].dataset.id}&ctoken=${mm.ctoken}`,'POST').then(data => {
                            console.log(data)
                            cart('.cart_count') //update cart
                        })
                    })
                }
                tns({
                    container: document.querySelector('.slider-products'),
                    fixedWidth: 190,
                    autoplay: false,
                    axis: 'horizontal',
                    controls: true,
                    loop: false,
                    prevButton: document.querySelector('.swiper-button-prev'),
                    nextButton: document.querySelector('.swiper-button-next'),
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    mouseDrag: true,
                    nav: false,
                    preventScrollOnTouch: 'auto',
                    swipeAngle: false,
                });
            })
            cart('.cart_count') //get products from cart
        } 

        let optionMut = {
            childList: true,
            subtree: true,
            attributes: true
        }

        let mut = new MutationObserver(function (muts) {
            if (document.querySelectorAll('.select_current')) {
                mut.disconnect();

                document.querySelectorAll('.select_current').forEach((el,index) => {
                    el.addEventListener('click',(e) => {
                        e.stopImmediatePropagation()
                        el.parentElement.classList.toggle('active');

                        if (index == 0) {
                            document.querySelectorAll('.select')[1].classList.remove('active');
                        }
                        if (index == 1)  {
                            document.querySelectorAll('.select')[0].classList.remove('active');
                        }
                        //events
                        let notes = ' select';
                        if (el.closest('.select_category')) {
                            notes = ' select category';
                        } else if (el.closest('.select_brand')) {
                            notes = ' select brand'
                        }
                        pushDataLayer(`Click on ${notes}`, labelForEvents(e.target))
                    })
                    el.nextElementSibling.querySelectorAll('.select_option p').forEach( (option, index) => {
                        option.addEventListener('click', (e) => {
                            e.stopImmediatePropagation()
                            let notes = 'select';
                            if (option.closest('.select_category')) {
                                notes = 'select category';
                                el.dataset.category = option.dataset.category;
                                fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?facets=manufacturer&query=${e.target.innerText.includes('Select') ? '*' : e.target.innerText}`, optionFetchAlgolia).then(res => res.json()).then(data => {
                                    let brand = data.facets.manufacturer;
                                    document.querySelector('.select_brand .select_current').innerHTML = `<span>Select Manufacturer</span>`;
                                    document.querySelector('.select_brand .select_dropdown').innerHTML = `<li class="select_option "><p class="active">Select Manufacturer</p></li>`;
                                    for (let key in brand) {
                                        document.querySelector('.select_brand .select_dropdown').insertAdjacentHTML('beforeend', ` <li class="select_option"><p>${key}</p></li>`)
                                    }
                                })
                            } else if (option.closest('.select_brand')) {
                                notes = 'select manufacturer';
                            }
                            pushDataLayer(`Click on option ${notes}`, 'Advanced Search')

                            if (option.closest('.select').querySelector('.active') != null) {
                                option.closest('.select').querySelector('.active').classList.remove('active');
                            }

                            option.classList.add('active');

                            if (index == 0) {
                                el.innerHTML = `<span>${option.innerHTML}</span>`;
                            } else {
                                el.innerHTML = option.innerHTML;
                            }
                            option.closest('.select').classList.remove('active');
                        })
                    })
                })
            }

            mut.observe(document, optionMut);
            if (document.querySelector('.calc') != null) {
                document.querySelectorAll('.calc').forEach((el, i) => {
                    el.querySelector('.btn-calc_plus').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        pushDataLayer(`Click on plus button`, labelForEvents(e.target));

                        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'plus')
                    })
                    el.querySelector('.btn-calc_minus').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        pushDataLayer(`Click on minus button`, labelForEvents(e.target));

                        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'minus')
                    })
                    el.querySelector('.calc-qty').addEventListener('input', (e) => {
                        e.stopImmediatePropagation();
                        changeQty(e.target, el.nextElementSibling.querySelector('.pr'))
                    })
                    el.querySelector('.calc-qty').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        pushDataLayer(`Click on quantity button`, labelForEvents(e.target));
                    })
                    el.querySelector('.calc-qty').addEventListener('blur', (e) => {
                        if (e.target.value == '') {
                            e.target.value = 1;
                        }
                    }, true)
                })
                document.querySelectorAll('.card_name').forEach(el => {
                    el.addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        pushDataLayer(`Click on Card Product`, labelForEvents(e.target));
                    })
                })
                document.querySelectorAll('.add-cart').forEach(el => {
                    el.addEventListener('click', (e) => { //add products in cart
                        e.stopImmediatePropagation();
                        postFetch('/cart.html',`api=c&cart_action=add&variant_id=${el.parentElement.querySelector('[name="product_variant_id"]').value}&quantity=${el.parentElement.querySelector('[name="quantity"]').value}&product_id=${el.parentElement.querySelector('[name="product_id"]').value}&ctoken=${mm.ctoken}`,'POST').then(data => {
                            cart('.cart_count'); //update cart
                            if (!el.closest('.popular-products-row')) {
                                addActive('.shopping-cart');
                            } else {
                                scrollTop(e.target, document.body)
                            }
                        })
                        pushDataLayer(`Click on Add to cart button`, labelForEvents(e.target));
                    })
                })
            }
            mut.observe(document, optionMut);
        });

        mut.observe(document, optionMut);
    }
};