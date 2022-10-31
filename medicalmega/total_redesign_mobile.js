let styleMain =`
<style>
    /* Chrome, Safari, Edge, Opera */
    input.quantity::-webkit-outer-spin-button,
    input.quantity::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    input.quantity[type=number] {
      -moz-appearance: textfield; }
    .shopping-cart button {
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
    .btn:hover, .btn:not(.btn_white):focus  {
        background-color: #344D57;
        border-color: #344D57; }
    .btn[disabled] {
        color: #9AA6AB;
        background-color: #F0F1F2;
        border-color: #F0F1F2; }
    .btn[disabled] svg, #form-search button[disabled] svg {
        fill: #9AA6AB; }
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
    .btn-google {
        margin: 16px 0;}
    .btn-next {
        background: #1E3944!important;
        border-radius: 100px;
        padding: 0 20px;
        font-weight: 700;
        font-size: 14px;
        line-height: 48px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FBFBFB;
        width: 100%;
        text-align: center;
        display: block;
    }
    .btn-next svg {
        margin-left: 8px;
    }
    .btn-next:hover {
        background-color: #344D57!important;
        border-color: #344D57;
        color: #fff;
    }
    /*wrapper and header*/
    .header-checkout *, .wrapper-checkout * {
        box-sizing: border-box;
    }
    .wrapper-checkout {
        height: calc(100vh - 68px);
        background: #FBFBFB;
    }
    .header-checkout {
        background: #FBFBFB;
        position: sticky;
        top: 0;
        z-index: 99;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    }
    .steps {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #344D57;
        text-align: left;
    }
    .steps span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #6D7E85;
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
    .product-item > div:last-child {
        width: calc(100% - 87px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .product-item > div:last-child a {
        font-size: 14px;
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
        margin-right: 16px;
    }
    .product-item_img img {
        width: 86px;
        height: 86px;
        flex-shrink: 0;
        object-fit: contain;
    }
    .product-item .price {
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
        padding: 0;
    }
    /*spacing*/
    .ml-40 {
        margin-left: 40px; }
        
    .mr-8 {
        margin-right: 8px; }
        
    .mr-16 {
        margin-right: 16px; }
        
    .mt-16 {
        margin-top: 16px; }
    .mb-16 {
        margin-bottom: 16px; }
    /*font*/
    .fw-light {
        font-weight: 300; }
    .fw-semi {
        font-weight: 600; }
    .c-gray {
        color: #6D7E85; }
    .c-gray-08 {
           color: rgba(52, 77, 87, 0.8)}
    .c-red {
        color: #96280F!important; }
    .fs-14 {
        font-size: 14px;
        line-height: 25px; }
    /*flex*/
    .flex {
        display: flex; }
    .items-center {
        display: flex!important;
        align-items: center;}
    .justify-content-center {
        display: flex;
        justify-content: center; }
    .justify-between {
        display: flex;
        justify-content: space-between;}
    .flex-center-between {
        display: flex;
        justify-content: space-between;
        align-items: center; }
    .flex-end-between {
        display: flex;
        justify-content: space-between;
        align-items: flex-end; }
    .flex-center {
        display: flex!important;
        align-items: center;
        justify-content: center;}
    .flex-wrap {
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap; }
    .w-100 {
        width: 100%; }
    .relative {
        position: relative; }
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
//scroll to
let scrollTop = (targetScroll, offsetTop) => {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

//set pricing
let pricing = (parent, data) => {
    document.querySelector(parent).innerHTML = '';
    let pricing = obj['pricingArr']
    for (let key in pricing) {
        for (let keyData in data) {
            if (key == keyData && (data[keyData] != 0 || keyData == 'subtotal' || keyData == 'total')) {
                document.querySelector(parent).insertAdjacentHTML('beforeend', `
                <li class="justify-between">
                    <p>${pricing[key]}:</p>
                    <p>$<span>${(+data[keyData].toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>
                </li>`)
            }
        }
    }
}

//add product
let product = (id, variantId, quantity, subtotal, url, imageUrl, title, varQty) => {
    return `<li class="flex product-item" data-id="${id}" data-variant-id="${variantId}">
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
                    <a href="${url}" title="${title}">${title}</a>
                    <div class="flex-center-between">
                        ${varQty == 0 ? `<div class="items-center">
                            <button type="button" class="quantity-btn quantity-btn_minus" ${varQty == 1 ? 'disabled': ''}>−</button>
                            <input type="number" name="quantity" value="${quantity}" class="quantity" ${varQty == 1 ? 'disabled': ''}>
                            <button type="button" class="quantity-btn quantity-btn_plus" ${varQty == 1 ? 'disabled': ''}>+</button>
                        </div>` : '<p class="qty">Qty: ' + quantity + '</p>'}
                        
                        <div class="price flex">$<b>${(+subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</b></div>
                    </div>
                </div>
            </li>`
}

//push dataLayer
let pushDataLayer = (actionDataLayer, labelDataLayer) => {
    console.log(actionDataLayer, labelDataLayer)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Total Redesign (mobile)',
        'eventAction': actionDataLayer,
        'eventLabel': labelDataLayer
    });
}

//show/hide
let addActive = (element) => document.querySelector(element).classList.add('active');
let removeActive = (element) => document.querySelector(element).classList.remove('active');

let qty = 0;

let arrMouth = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let headerHTML = `
<header class="header-checkout flex justify-between items-center">
    <div class="steps"></div> 
    <a href="/">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4161 14L22.5939 5.44414C22.7142 5.30195 22.613 5.08594 22.4271 5.08594H20.245C20.1165 5.08594 19.9935 5.14336 19.9087 5.2418L13.9888 12.2992L8.06887 5.2418C7.98684 5.14336 7.86379 5.08594 7.73254 5.08594H5.55051C5.36457 5.08594 5.2634 5.30195 5.38372 5.44414L12.5615 14L5.38372 22.5559C5.35676 22.5876 5.33947 22.6263 5.3339 22.6675C5.32832 22.7088 5.33469 22.7507 5.35225 22.7884C5.36981 22.8262 5.39783 22.858 5.43297 22.8803C5.46812 22.9026 5.50891 22.9143 5.55051 22.9141H7.73254C7.86106 22.9141 7.98411 22.8566 8.06887 22.7582L13.9888 15.7008L19.9087 22.7582C19.9907 22.8566 20.1138 22.9141 20.245 22.9141H22.4271C22.613 22.9141 22.7142 22.698 22.5939 22.5559L15.4161 14Z" fill="#6D7E85"></path>
        </svg>
    </a>
</header>`

window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styleMain)

    //changeQuantity
    let changeQuantity = (plus, minus, quantity, post=false) => {
        //update quantity
        quantity.addEventListener('change', () => {
            if (quantity.value < 1) {
                quantity.value = 1
            }
            post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${quantity.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart()) : '';
        })
        plus.addEventListener('click', () => {
            quantity.value = +quantity.value + 1;
            quantity.parentElement.querySelector('.quantity-btn_minus').disabled = false;

            post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${plus.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart()) : '';
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

        minus.addEventListener('click', () => {
            if (minus.nextElementSibling.value < 2) {
                minus.nextElementSibling.value = 1;
                minus.disabled = true;
            } else {
                minus.nextElementSibling.value = +minus.nextElementSibling.value - 1;
            }
            post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${minus.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart()) : '';
        })
    }
    //cart product
    let cart = () => {
        let parent = href.includes('/checkout/step') || href.includes('/login.php') || href.includes('/register.php')|| href.includes('/guest-checkout') ? '.order_body' : '.list-product';

        //get data
        postFetch('/cart.html',`api=c&cart_action=cart&ctoken=${mm.ctoken}`,'POST').then(data => {
            console.log(data)
            localStorage.setItem('dataCart', JSON.stringify(data));
            let products = data['items'];
            document.querySelector(parent).innerHTML = '';
            if (parent == '.order_body') {
                document.querySelector('.order_head .price span').innerHTML = data.total.toFixed(2);
                pricing('.order_pricing', data)  //add pricing for order
            } else {
                document.querySelector('.subtotal').innerHTML = data.subtotal != 0 ? `<p>Total:</p> <p>$<span>${(+data.subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>` : '';
                if (products.length < 1) {
                    document.querySelector(parent).innerHTML = `<div class="empty-cart">
                            <p>Your cart is currently empty.</p>
                            <button type="button" class="btn-next"><span>Shop now</span></button>
                        </div>`;
                    document.querySelector('.subtotal').style.display = 'none';
                    document.querySelector(parent).style.margin = 'auto';
                    document.querySelector('.footer-cart').style.display = 'none';
                    document.querySelector('.body-cart').style.height = 'calc(100vh - 53px)';
                    document.querySelector('.btn-next').addEventListener('click', (e) => {
                        removeActive('.shopping-cart')
                        document.getElementsByTagName('html')[0].classList.remove('fix');
                        pushDataLayer('Click on Shop now button', labelForEvents(e))
                    })
                } else {
                    document.querySelector('.subtotal').style = '';
                    document.querySelector(parent).style = '';
                    document.querySelector('.footer-cart').style = '';
                    document.querySelector('.body-cart').style = '';
                }
                for (let i = 0; i < products.length; i++) {
                    qty += +products[i].quantity;
                }
            }
            if (products.length > 0) {
                //product quantity changes
                let varQty = href.includes('checkout/step2') || href.includes('checkout/step3') ? 1 : 0
                for (let i = 0; i < products.length; i++) {
                    //add products
                    document.querySelector(parent).insertAdjacentHTML('beforeend', product(products[i].product_id, products[i].variant_id, products[i].quantity, products[i].subtotal, products[i].url, products[i].image_url, products[i].title, varQty))

                    //remove product
                    let remove = document.querySelectorAll('.remove');
                    if (remove.length > 0) {
                        remove[i].addEventListener('click', (e) => {
                            console.log(e.target)
                            postFetch('/cart.html',`api=c&cart_action=remove&variant_id=${remove[i].closest('.product-item').dataset.variantId}&ctoken=${mm.ctoken}`,'POST').then(data => cart())
                        })
                    }
                    let plus = document.querySelectorAll(`${parent} .quantity-btn_plus`)[i],
                        minus = document.querySelectorAll(`${parent} .quantity-btn_minus`)[i],
                        quantity = document.querySelectorAll(`${parent} .quantity`)[i];

                    varQty == 0 ? changeQuantity(plus, minus, quantity, true) : ''
                }
            }
        })
    }
    //Confirmation
    if (href.includes('/checkout/step4') || href.includes('/guest-checkout4.php')) {
        let dataCart = JSON.parse(localStorage.getItem('dataCart'));
        console.log(dataCart)
        let dates = order.deliveryDates,
            confirmationDates = '';

        for (let i = 0; i < dates.length; i++) {
            let day = dates[i].split('-')[2],
                mouth = arrMouth[dates[i].split('-')[1] - 1];
            
                confirmationDates += `${day} ${mouth}. ${dates.length > 1 && i == 0 ? '- ' : ''}`
        }

        let styleConfirmation = `
        <style>
            body {
                border-top: none;
            }
            .confirmation * {
                box-sizing: border-box;
            }
            #wrap {
                display: none;
            }
            .confirmation {
                box-sizing: border-box;
                max-width: 833px;
                width: 100%;
                margin: auto;
                padding: 40px 20px 20px;
                font-size: 14px;
                line-height: 150%;
                color: #474747;
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
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                text-align: center;
            }
            .confirmation > svg {
                margin: 28px auto ;
            }
            .confirmation-order {
                padding: 40px 0;
                margin: 40px 0 8px;
                border-top: 1px solid #E0E4E5;
            }
            .confirmation-products::-webkit-scrollbar{
                background: #CCCCCC;
                width: 4px;
                height: 4px;}
            .confirmation-products::-webkit-scrollbar-thumb{
                background: #666666;}
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
                margin-bottom: 8px;
            }
            .confirmation-order .order_pricing li:last-child {
                padding: 20px 0;
            }
            .confirmation-order h3 {
                padding-bottom: 20px;
                margin-bottom: 8px;
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: #344D57;
                text-align: left;
                border-bottom: 1px solid #E0E4E5;
            }
            .confirmation-date {
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                padding: 12px 0 0;
                color: #96280F;
            }
            .confirmation .btn-next {
                padding: 0 24px;
            }
            .product-item:last-child {
                border-bottom: 1px solid #E0E4E5;
            }
        </style>`
        let confirmationHTML = `
            ${headerHTML}
            <div class="confirmation">
                <h2>Thank you!</h2>
                <p class="confirmation-span c-gray">Your order <span class="fw-semi">#${document.querySelector('#mainbody > div.payment > fieldset > p:nth-child(1)').innerHTML.split('br>')[1]}</span> has been successfully placed</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M71.0151 61.4241C70.1194 60.6219 68.7434 60.7002 67.9455 61.5937C63.4107 66.6611 56.8716 69.5654 49.9999 69.5654C43.1303 69.5654 36.589 66.6611 32.0542 61.5937C31.2521 60.7002 29.8803 60.6219 28.9847 61.4241C28.089 62.2241 28.0151 63.598 28.8151 64.4937C34.1738 70.4806 41.8955 73.9132 49.9999 73.9132C58.1064 73.9132 65.8281 70.4785 71.1847 64.4937C71.9847 63.598 71.9086 62.2241 71.0151 61.4241Z" fill="#344D57"/>
                    <path d="M50 0C22.4304 0 0 22.4304 0 50C0 77.5696 22.4304 100 50 100C77.5696 100 100 77.5696 100 50C100 22.4304 77.5696 0 50 0ZM50 95.6522C24.8261 95.6522 4.34783 75.1739 4.34783 50C4.34783 24.8261 24.8261 4.34783 50 4.34783C75.1739 4.34783 95.6522 24.8261 95.6522 50C95.6522 75.1739 75.1739 95.6522 50 95.6522Z" fill="#344D57"/>
                    <path d="M67.3915 34.7827C61.3981 34.7827 56.522 39.6588 56.522 45.6523C56.522 46.8523 57.4959 47.8262 58.6959 47.8262C59.8959 47.8262 60.8698 46.8523 60.8698 45.6523C60.8698 42.0566 63.7959 39.1305 67.3915 39.1305C70.9872 39.1305 73.9133 42.0566 73.9133 45.6523C73.9133 46.8523 74.8872 47.8262 76.0872 47.8262C77.2872 47.8262 78.2611 46.8523 78.2611 45.6523C78.2611 39.6588 73.385 34.7827 67.3915 34.7827Z" fill="#344D57"/>
                    <path d="M39.1306 45.6523C39.1306 46.8523 40.1045 47.8262 41.3045 47.8262C42.5045 47.8262 43.4784 46.8523 43.4784 45.6523C43.4784 39.6588 38.6023 34.7827 32.6088 34.7827C26.6153 34.7827 21.7393 39.6588 21.7393 45.6523C21.7393 46.8523 22.7132 47.8262 23.9132 47.8262C25.1132 47.8262 26.0871 46.8523 26.0871 45.6523C26.0871 42.0566 29.0132 39.1305 32.6088 39.1305C36.2045 39.1305 39.1306 42.0566 39.1306 45.6523Z" fill="#344D57"/>
                </svg>
                <p class="confirmation-span">Approximate shipping date of your order is</p>
                <p class="confirmation-date">${confirmationDates}</p>
                <div class="confirmation-order">
                    <div class="col">
                        <h3>Order summary</h3>
                        <ul class="order_pricing"></ul>
                    </div>
                    <div class="col">
                        <ul class="confirmation-products"></ul>
                    </div>
                </div>
                <a href="/" class="btn-next"><span>Back to the website</span></a>
            </div>`
        document.body.insertAdjacentHTML('afterbegin', confirmationHTML)
        document.body.insertAdjacentHTML('afterbegin', styleConfirmation)
        //add steps in header
        document.querySelector('.steps').innerHTML = `Step 4<span>/4</span> — ${obj['stepsName'][3]}`;
        pricing('.order_pricing', dataCart) // set pricing
        let items = dataCart.items;
        for (let i = 0; i < items.length; i++) {
            document.querySelector('.confirmation-products').insertAdjacentHTML('beforeend', product(items[i].product_id, items[i].variant_id, items[i].quantity, items[i].subtotal, items[i].url, items[i].image_url, items[i].title, 1))
        }
    }

    if ((href.includes('login.php') || href.includes('/register.php') || href.includes('/checkout') || href.includes('/guest-checkout')) && !href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php')) {
        //checkout
        let style = `
        <style>
            body {
                border: none;
            }
            #wrap, .g-signin2, .guest_checkout_button, .savingTools {
                display: none;
            }
            button {
                background: transparent;
                border: none;
                cursor: pointer;
            }
            /*body checkout*/
            .head {
                border-bottom: 1px solid #E0E4E5;
                padding: 28px 0 12px;
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #96280F;
                text-align: left;
                margin-bottom: 28px;
            }
            .head-login .link {
                font-size: 18px;
            }
            .head-login {
                border-bottom: 1px solid #E0E4E5;
                padding: 28px 0 12px;
                margin-bottom: 12px;
            }
            .head-login h3 {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: #1E3944;
            }
            .col-left {
                padding: 0 20px;
            }
            .col-left > div:first-child {
                display: grid;
            }
            .col-left .address.bill {
                order: 2;
                display: none;
            }
            /*login*/
            .myAccount .myAccountleft, .myAccount .myAccountright {
                width: 100%;
                padding: 0;
            }
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
            .abcRioButtonBlue {
                margin-bottom: 28px;
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
            .myAccountright input {
                width: 100%;
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
                padding: 20px 0;
                text-align: left;
                max-width: 50%;
                float: right;
                margin-top: -118px;
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
                width: 16px;
                height: 16px;
            }
            .myAccountleft > form > dd:nth-child(7) {
                font-size: 14px;
                line-height: 150%;
                color: #091114;
                margin-bottom: 0!important;
                display: flex;
            }
            .wrapper-checkout form:not(#checkoutForm) dd {
                clear: both;
                width: 100%!important;
                margin-bottom: 25px!important;
                max-width: 100%;
                text-align: left;
                padding: 0!important;
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
                padding: 14px 8px;
                display: block;
            }
            .btn-back {
                margin: 16px 0;
            }
            .btn-back svg {
                margin-right: 8px;
            }
            .foot {
                padding-top: 20px;
            }
            /*order*/
            .order .order_head svg {
                pointer-events: none;
            }
            .order.active .order_head svg {
                transform: scaleY(-1);
            }
            .order.active .order_drop {
                display: block;
            }
            .order_head {
                padding: 20px;
                background: #F0F1F2;
            }
            .order_head .price {
                font-weight: 600;
                font-size: 14px;
                line-height: 130%;
                text-align: right;
                color: #344D57;
            }
            .order_head p {
            font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #344D57;
            }
            .link, .address p.link {
                font-size: 12px;
                line-height: 150%;
                color: #96280F;
                border-bottom: 1px solid rgba(150, 40, 15, 0.5);
                cursor: pointer;
            }
            .link[hidden] {
                display: none!important;
            }
            .order_pricing {
                padding: 10px 20px;
            }
            .order_body {
                padding: 20px;
            }
            .order_drop {
                display: none;
            }
            /*step 1 address*/
            .address {
                margin-bottom: 28px;
            }
            .address > div {
                border: 1px solid #E0E4E5;
                border-radius: 4px;
                padding: 18px 20px;
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
                margin-top: 15px;
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
                margin-left: auto;
                display: block;
                margin-bottom: 19px;
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
                height: 60px;
                padding: 12px;
                font-size: 14px;
                line-height: 150%;
                color: #344D57;
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
                color: #091114;
            }
            .checkbox:checked ~ .method .text:before {
                background: #091114;   
            }
            .checkbox:checked ~ .method .type, .checkbox:checked ~ .method .price {
                font-weight: 600;
            }
            .method .type {
                border-left: 1px solid #E0E4E5;
                padding-left: 8px;
                margin: 0 8px;
            }
            .method .price {
                width: 54px;
                font-size: 16px;
                text-align: right;
            }
            .method .text {
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                padding: 0 8px;
                position: relative;
                text-align: left;
                color: #344D57;
            }
            .method .text:before {
                content: '';
                position: absolute;
                left: 0;
                height: 18px;
                width: 1px;
                top: 50%;
                transform: translateY(-50%);
                background: #344D57;
            }
            .promocode {
                padding: 28px 0;
            }
            .promocode p {
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #091114;
                margin-bottom: 16px;
                text-align: left;
            }
            .promocode p span {
                font-weight: 400;
                font-size: 14px;
                margin-left: 8px;
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
            .ml-auto {
                margin-left: auto;
            }
            #checkoutForm {
                font-size: 14px;
                line-height: 150%;
                color: #091114;
                width: 100%!important;
            }
            #checkoutForm > p {
                white-space: normal;
                text-align: left;
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
                color: #344D57;
                opacity: 0.8;
                margin: 0!important;
            }
            #paymentCardContainer, #paymentCardErrorContainer {
                margin: 0!important;
            }
            .primaryInfo {
                text-align: left;
                width: 100%;
            }
            .primaryInfo dl, #checkoutForm > fieldset > div:nth-child(2) {
                margin: 0!important;
            }
            .primaryInfo dl {
                width: 100%;
            }
            #card_list {
                width: 100%!important;
                max-width: 100%;
                margin-top: 4px;
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
            [type="checkbox"]:not(#cc-recurring-check):checked ~ .check2:before, .check2.checked:before {
                content: '';
            }
            .promoCode, .primaryInfo input[type="text"], .primaryInfo select, .primaryInfo dl input[type="text"], .primaryInfo dl textarea, .primaryInfo .cc-recurring {
                width: 100%!important;
                max-width: 100%;
            }
            .primaryInfo  {
                max-width: 100%!important;
            }
            .primaryInfo .order-every {
                padding: 0;
                width: 100%;
                max-width: 100%;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #091114;
                flex-wrap: wrap;
                margin-top: 10px;
            }
            #recurring_billing_period {
                width: 100%!important;
                margin-top: 15px;
            }
            .cc-recurring-setting {
                display: none!important;
            }
            .auto-reorder-header {
                font-weight: 600;
                font-size: 16px;
                line-height: 130%;
                color: #091114;
                margin-bottom: 8px;
                display: block;
            }
            div.cc-recurring {
                padding: 24px 0;
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #666666;
            }
            #cc_block > div > br:nth-child(2), #submitCheckout3 {
                display: none;
            }
            #checkoutForm > div {
                height: auto!important;
            }
            #cc_block > dl > div > div:nth-child(1) {
                display: none;
            }
            @media (min-width: 760px) and (max-width: 1010px) {
                .myAccount .myAccountleft {
                    width: 100%;
                }
            }
            @media (max-width: 759px) {
                div.center, div.payment {
                    padding: 0;
                }
            }
            @media (min-width: 480px) and (max-width: 759px) {
                div#wrap, div#hdr, div#mainbody {
                    width: 100%;
                }
            }
        </style>`;

        let wrapperHTML = `
        ${headerHTML}
        <div class="wrapper-checkout">
            <div class="order">
                    <div class="order_head flex-center-between">
                        <div class="items-center">
                            <p>Show order summary</p>
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.35355 12.1464L12.1464 9.35355C12.4614 9.03857 12.2383 8.5 11.7929 8.5H6.20711C5.76165 8.5 5.53857 9.03857 5.85355 9.35355L8.64645 12.1464C8.84171 12.3417 9.15829 12.3417 9.35355 12.1464Z" fill="#091114"/>
                            </svg>
                        </div>
                        <div class="price">$<span></span></div>
                    </div>
                    <div class="order_drop">
                        <ul class="order_pricing"></ul>
                        <ul class="order_body"></ul>
                    </div>
            </div>
            <div class="col-left">
                <div>
                    ${window.location.href.includes('/login.php') || window.location.href.includes('/register.php?') ? `<div class="flex-center-between head-login"><h3>Register</h3><a href="#" class="link">Sign in</a></div>` : ''}
                    <div class="head"><h4></h4></div>
                </div>
                <div class="foot">
                    <button class="btn-next flex-center" type="submit">
                        <span>Next</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                        </svg>
                    </button>
                    <a class="btn-back flex-center" href="#">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 9.32153V8.67847C15 8.5009 14.8657 8.35695 14.7 8.35695H4.998L7.668 5.50181C7.72479 5.44144 7.75674 5.35926 7.75674 5.27352C7.75674 5.18779 7.72479 5.10561 7.668 5.04524L7.242 4.59511C7.18567 4.53424 7.10899 4.5 7.029 4.5C6.94901 4.5 6.87233 4.53424 6.816 4.59511L3.132 8.537C3.04758 8.62736 3.0001 8.74995 3 8.87782V9.12218C3.00138 9.24977 3.04867 9.37186 3.132 9.463L6.816 13.4049C6.87233 13.4658 6.94901 13.5 7.029 13.5C7.10899 13.5 7.18567 13.4658 7.242 13.4049L7.668 12.9483C7.72444 12.8891 7.75624 12.8079 7.75624 12.7233C7.75624 12.6386 7.72444 12.5575 7.668 12.4982L4.998 9.64305H14.7C14.8657 9.64305 15 9.4991 15 9.32153Z" fill="#1E3944"/>
                        </svg>
                        <span></span>
                    </a>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin',wrapperHTML);
        document.body.insertAdjacentHTML('afterbegin', style) // add styles

        //show/hide order
        document.querySelector('.order_head').addEventListener('click', (e) => {
            document.querySelector('.order').classList.toggle('active');
            console.log(e.target.innerText)
            if (e.target.innerText.includes('Show')) {
                document.querySelector('.order_head p').innerHTML = 'Hide order summary'
            } else {
                document.querySelector('.order_head p').innerHTML = 'Show order summary'
            }
        })
        //login/register step
        if ((href.includes('/login.php') || href.includes('/register.php')) && document.querySelector('.myAccount') != null) {
            // document.querySelector('.col-left .head-login').after(document.querySelector('#mainbody'));
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][0];
            document.querySelector('.col-left .head').style = 'display: none!important;';
            document.querySelector('.col-left .head-login').insertAdjacentHTML('afterend',`<button type="button" class="btn btn_white btn-google flex-center"> <img src="https://conversionratestore.github.io/projects/medicalmega/img/google.svg" class="mr-8" alt="google icon"/> continue with google</button><p class="text-center c-gray-08 mb-16 fs-14">or</p>`)
            document.querySelector('.steps').innerHTML = `Step 1<span>/4</span> — ${obj['stepsName'][0]}`; //add steps in header
            document.querySelector('.foot').insertAdjacentHTML('afterbegin','<a href="#" class="btn-guest mb-16">Checkout as a guest</a>')
            addActive('.myAccountleft')

            //click on 'Sign in/Register' button
            let linkHead = document.querySelector('.head-login .link'),
                titleHead = document.querySelector('.head-login h3');
            linkHead.addEventListener('click', (e) => {
                if (titleHead.innerHTML === 'Sign in') {
                    titleHead.innerHTML = 'Register';
                    linkHead.innerHTML = 'Sign in';
                    document.querySelector('.myAccountright').classList.remove('active')
                    addActive('.myAccountleft')
                } else {
                    titleHead.innerHTML = 'Sign in';
                    linkHead.innerHTML = 'Register';
                    document.querySelector('.myAccountleft').classList.remove('active')
                    addActive('.myAccountright')
                }
            })
            document.querySelector(' .myAccountleft dd:nth-child(5) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)
            document.querySelector(' .myAccountleft dd:nth-child(6) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)

            //sign in with google
            document.querySelector('.btn-google').addEventListener('click', () => document.querySelector('.g-signin2 > div').click())
            //Checkout as a guest
            document.querySelector('.btn-guest').addEventListener('click', () => document.querySelector('.guest_checkout_button input').click())
            //click on eye button for password
            document.querySelectorAll(' .myAccountleft dd .eye').forEach(item => {
                item.addEventListener('click', () => {
                    if (item.previousElementSibling.type == 'password') {
                        item.previousElementSibling.type = 'text';
                        item.src = 'https://conversionratestore.github.io/projects/medicalmega/img/eye.svg'
                    } else {
                        item.previousElementSibling.type = 'password';
                        item.src = 'https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg'
                    }
                })
            })
            // document.querySelector('.myAccountleft > form > dd:nth-child(8) > input[name="referrer"]').value = `https://medicalmega.com/register.php?r=https%3A%2F%2Fmedicalmega.com%2Fcheckout%2Fstep1`;
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
                    "state": stateF,
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

        let shipFormHtml = (state, countries_ship, active, edit) => {
            return `
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
                <label for="state">State (Only applicable to US) <span class="c-red"> *</span></label>
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
        </form>`
        }
        let billFormHtml = (state, countries_ship, active, edit) => {
            return `
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
                    <label for="state">State (Only applicable to US) <span class="c-red"> *</span></label>
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
            </form> `
        }
        let fname, lname, addr1, city, stateF, zip, country, phn, email; //for forms

        //ship/bill addresses
        let addressCurrentHtml = (fname, lname, addr1, city, state, zip, country, phone, type) => {
            return `
            <div class="address ${type === 'bill' ? 'bill' : 'ship'}">
                <div>
                    <button class="btn-edit" type="button">${type === 'ship' ? 'Edit Shipping Address' : 'Edit Billing Info'}</button>
                    <div>
                        <p>${fname} ${lname}</p>
                        <p>${addr1}</p>
                        <p>${city}, ${state}, ${zip}</p>
                        <p>${country}</p>
                        <p>${phone}</p>
                    </div>
                </div>
                ${type === 'ship' ? '<p class="link">View Your Billing Info</p>' : ''} 
            </div>`
        }

        //copy from shipping
        let copyFromShip = (e, formType) => {
            if (e.checked) {
                fetch(`/api/v1/addresses&type=ship`, {
                    headers: headerFetchAddress,
                    method: "GET",
                }).then(res => res.json()).then(data => {
                    let address = data['addresses'][0]
                    for (const keyShip in address) {
                        console.log(keyShip, address[keyShip])
                        if (document.querySelector(`.${formType}-form dd [name="${keyShip}"]`) != null && address[keyShip] != '') {
                            document.querySelector(`.${formType}-form dd [name="${keyShip}"]`).value = address[keyShip]
                        }
                    }
                })
            }
        }
        //step 2 "Shipping Information"
        let currentAddressShip, currentAddressBill;
        let state_item, countries_ship_item
        if (href.includes('/checkout/step1') || href.includes('/checkout/step2') || href.includes('/guest-checkout1.php')  || href.includes('/guest-checkout2.php')) {
            document.querySelector('.steps').innerHTML = `Step 2<span>/4</span> — ${obj['stepsName'][1]}`; //add steps in header
            if (document.querySelector('.tooltip') != null) {
                setTimeout(() => {
                    document.querySelector('.tooltip').style.display = "none"
                }, 3000)
            }
        }

        function currentAddress(parent, pre, obj) {
            for (const key in obj) {
                if (document.querySelector(`${parent} [name="${pre}${key}"]`) != null) {
                    document.querySelector(`${parent} [name="${pre}${key}"]`).value = obj[key];
                }
            }
        }
        if ((href.includes('/checkout/step1') || href.includes('/guest-checkout1.php')) && document.querySelector('.myAccount') == null) {
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];
            state_item = href.includes('guest-checkout1.php') ? b_state : state;
            countries_ship_item = href.includes('guest-checkout1.php') ? b_country.innerHTML : countries_ship;
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
                                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state_item, countries_ship_item,'active', 'edit'))
                                    document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];

                                    currentAddress('.ship-form > dd', ``, currentAddressShip)
                                } else if (item.closest('.bill') != null) {
                                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, 'active','edit'))
                                    document.querySelector('.col-left .head h4').innerHTML = 'Billing information';

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
                        document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state_item, countries_ship_item, 'active', ''))
                        document.querySelector('.ship-form > dd:last-child').remove();
                    }
                } else {
                    //Shipping Information - not filled
                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state_item, countries_ship_item, 'active', ''))
                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, '', ''))
                    document.querySelector('[name="shipping"]').addEventListener('click', (e) => {
                        console.log(e.target)
                        copyFromShip(e.target, 'bill')
                    })
                }
            })
        }

        let deliveryMethodHtml = (i, type, text, price) => {
            return `
            <label>
                <input type="radio" name="radio-method" class="checkbox" ${i==0?'checked':''}>
                <span class="items-center method">
                    <span class="check"></span>
                    <span class="type">${type}</span>
                    <span class="ml-auto items-center">  
                        ${text != '' ? '<span class="text">' +text+'</span>':''}
                        <span class="price">${price}</span>
                    </span>
                </span>
            </label>`
        }

        if (href.includes('/checkout/step2') || href.includes('/guest-checkout2.php')) {
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
                    document.querySelectorAll('#ship_options > li input')[index].checked = true
                })
            })
            document.querySelector('.col-left .delivery-method').insertAdjacentHTML('afterend',`
                <div class="promocode">
                    <p>Promotional Code <span>(Optional):</span></p>
                    <input type="text" placeholder="Enter your code">
                </div>`)
            document.querySelector('.promocode input').addEventListener('input', (e) => {
                document.querySelector('.promoCode').value = e.target.value;
            })
            if (document.querySelector('.primaryInfo .error') != null) {
                document.querySelector('.promocode').after(document.querySelector('.primaryInfo .error'))
                document.querySelector('.promocode input').value = document.querySelector('.promoCode').value;
            }
        }
        if (href.includes('/checkout/step3') || href.includes('/guest-checkout3.php')) {
            document.querySelector('.steps').innerHTML = `Step 3<span>/4</span> — ${obj['stepsName'][2]}`; //add steps in header
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][2];
            document.querySelector('.col-left .head').after(document.querySelector('#checkoutForm'))

            document.querySelector('.cc-recurring-setting').insertAdjacentHTML('beforebegin',`<div class="order-every items-center"><span class="check2"></span>${document.querySelector('.cc-recurring-setting').innerHTML}</div>`)
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
            })
            document.querySelector('#checkoutForm > p').innerHTML = document.querySelector('#checkoutForm > p').innerHTML.replace('Place Your Order Now','Proceed');
        }
        if (href.includes('/guest-checkout3.php')) {
            document.querySelector('#checkoutForm > fieldset > dl > dd:nth-child(2)').innerHTML = `Credit/Debit Card<span class="c-red"> *</span>`;
            document.querySelector('#checkoutForm > p').style.whiteSpace = 'initial';
        }
        if (href.includes('/checkout/step3')) {
            document.querySelector('#checkoutForm h3').innerHTML = `Card Details <img src="https://conversionratestore.github.io/projects/medicalmega/img/payment-cards.png" alt="icons">`;
            document.querySelector('#cc_block > dl > div.ccInfo > dd:nth-child(3)').innerHTML = `Credit/Debit Card<span class="c-red"> *</span>`;
            // document.querySelector('#cc_block > dl > div.ccInfo > dd:nth-child(3)').innerHTML = `Name on card:<span class="c-red"> *</span>`;
        }
        //set text for back button
        let setBack = () => {
            if (!href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php')) {
                let guestOrAccount = href.includes('guest-checkout') ? 1 : 0;
                document.querySelector('.btn-back span').innerHTML = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][0];
                document.querySelector('.btn-back').href = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][1][guestOrAccount];
            }
        }
        setBack()

        //set * request for label
        document.querySelectorAll('label').forEach(el => {
            if (el.innerHTML.includes('*') && !el.innerHTML.includes('c-red')) {
                el.innerHTML = el.innerHTML.split('*').join('<span class="c-red"> *</span>')
            }
        })

        let address = (type) => {
            console.log(type)
            document.querySelector(`.ship-form [name="fname"]`) != null ? fname = document.querySelector(`.ship-form [name="fname"]`) : fname;
            document.querySelector(`.ship-form [name="lname"]`)  != null ? lname = document.querySelector(`.ship-form [name="lname"]`) : fname;

            addr1 = document.querySelector(`.${type}-form [name="addr1"]`);
            city = document.querySelector(`.${type}-form [name="city"]`);
            stateF = document.querySelector(`.${type}-form [name="state"]`);
            zip = document.querySelector(`.${type}-form [name="zip"]`);
            country = document.querySelector(`.${type}-form [name="country"]`);
            phn = document.querySelector(`.${type}-form [name="phn"]`);
            email = document.querySelector(`.${type}-form [name="email"]`);

            let dataDD = document.querySelectorAll(`.${type}-form dd.error`)
            console.log(currentAddressShip, currentAddressBill, type,fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value)
            let errorsFun = (dataErrors) => {
                dataDD.forEach(item => {
                    item.classList.remove('error')
                    item.querySelector('i').innerHTML = ''
                })
                document.querySelector('.error-other') != null ? document.querySelector('.error-other').remove() : ''
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
                        if (dataErrors.length < 1) {
                            window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`
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
                                    window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`
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
                                    window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`
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
                            window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`;
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                } else {
                    postFetch('/api/v1/addresses', saveAddress('bill', fnameNew, fnameNew, addr1.value, city.value, stateF.value, zip.value, country.value, phn.value, email.value), 'POST').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`;
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                }
            }
        }

        //add click on next button
        document.querySelector('.btn-next').addEventListener('click', (e) => {
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
                if (href.includes('guest-checkout')) {
                    document.querySelector('#mainbody > div > form > div > input[type=image]').click();
                } else {
                    window.location.href = `https://medicalmega.com/checkout/step2`;
                }
            } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') == null && document.querySelector('.bill-form.active') == null) {
                console.log('next 2 step')
                document.querySelector('.address.ship').style.display = 'none'
                document.querySelector('.col-left .head h4').innerHTML = 'Billing information'; //change title
                //change back button
                setBack()
                //add billing form html
                console.log(state_item, countries_ship_item)
                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, 'active',''))
                //copy from Shipping
                document.querySelector('[name="shipping"]').addEventListener('click', (e) => copyFromShip(e.target, 'bill'))
            } else if (document.querySelector('.address.ship') == null && document.querySelector('.address.bill') != null && document.querySelector('.ship-form.active') == null) {
                console.log('address.ship == null')
                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state_item, countries_ship_item, 'active',''))
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
        })
    } 
    if (!href.includes('login.php') && !href.includes('register.php') && !href.includes('/checkout') && !href.includes('/guest-checkout')) {
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
                width: 100%;
                transform: translateX(200px);
                transition: all 0.3s ease;
                padding: 0;
            }
            .shopping-cart svg {
                cursor: pointer;
            }
            .header-cart {
                padding: 0 20px;
                background: #FBFBFB;
            }
            .header-cart > div {
                border-bottom: 1px solid #E3E6E7;
                padding: 12px 0;
                width: 100%;
                font-weight: 600;
                font-size: 18px;
                line-height: 120%;
                color: #474747;
            }
            .body-cart {
                padding: 0 20px;
                overflow-y: auto;
                height: calc(100vh - 155px - 53px);
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
                padding-top: 28px;
                margin-right: -20px;
            }
            .also-bought h4 {
                padding-right: 20px;
            }
            .subtotal {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                padding: 20px 0;
                border-top: 1px solid #E3E6E7;
            }
            .footer-cart {
                padding: 16px 20px;
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
                padding: 4px;
            }
            .body-cart h4 {
                font-weight: 600;
                font-size: 24px;
                line-height: 120%;
                color: #344D57;
            }
            .paypal-form-button {
                background: #EEC86A;
                border-radius: 100px;
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
                padding: 20px 0 40px;
            }
            .also-bought .slide {
                border: none!important;
            }
            .also-bought .slide > div {
                width: 190px;
                padding: 20px;
                border: 1px solid #E3E6E7;
                border-radius: 4px;
                background: #FFFFFF;
            }
            .also-bought .slide img {
                width: 80px!important;
                height: 80px!important;
                margin-right: 8px;
            }
            .slide .price p {
                font-weight: 300;
                font-size: 12px;
                line-height: 150%;
                text-decoration-line: line-through;
                color: #666666;
            }
            .slide .price b {
                font-weight: 600;
                font-size: 16px;
                line-height: 130%;
                color: #091114;
            }
            .slide .name {
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
        </style>`

        let cartModalHTML = `
        <div class="shopping-cart">
            <div class="container">     
                <div class="header-cart"><div class=" flex-center-between">Shopping cart <svg class="ml-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4161 14L22.5939 5.44414C22.7142 5.30195 22.613 5.08594 22.4271 5.08594H20.245C20.1165 5.08594 19.9935 5.14336 19.9087 5.2418L13.9888 12.2992L8.06887 5.2418C7.98684 5.14336 7.86379 5.08594 7.73254 5.08594H5.55051C5.36457 5.08594 5.2634 5.30195 5.38372 5.44414L12.5614 14L5.38372 22.5559C5.35676 22.5876 5.33947 22.6263 5.3339 22.6675C5.32832 22.7088 5.33469 22.7507 5.35225 22.7884C5.36981 22.8262 5.39783 22.858 5.43297 22.8803C5.46812 22.9026 5.50891 22.9143 5.55051 22.9141H7.73254C7.86106 22.9141 7.98411 22.8566 8.06887 22.7582L13.9888 15.7008L19.9087 22.7582C19.9907 22.8566 20.1138 22.9141 20.245 22.9141H22.4271C22.613 22.9141 22.7142 22.698 22.5939 22.5559L15.4161 14Z" fill="#6D7E85"/></svg></div></div>
                <div class="body-cart">
                    <ul class="list-product"></ul>
                    <div class="justify-between subtotal"></div>
                    <div class="also-bought">
                        <h4>Also bought with</h4>
                        <div class="slider-products"></div>
                    </div>
                </div>
                <div class="footer-cart">
                    <form action="https://medicalmega.com/guest-expresscheckout.php" method="POST" target="default" class="paypal-form-button">
                        <input type="image" name="submit" src="https://conversionratestore.github.io/projects/medicalmega/img/paypal.svg" border="0" align="top" alt="Check out with PayPal">
                    </form>
                    <p>or</p>
                    <a href="https://medicalmega.com/checkout/step1" class="btn-next flex-center">
                        <span>Proceed to checkout</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>`
        document.body.insertAdjacentHTML('afterbegin', styleCart); //add style for cart modal
        document.body.insertAdjacentHTML('beforeend', cartModalHTML); //add cart modal


        let linkCustom = document.createElement('link');
        linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
        linkCustom.rel = 'stylesheet';
        document.head.appendChild(linkCustom);

        let scriptCustom = document.createElement('script');
        scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
        scriptCustom.async = false;
        document.head.appendChild(scriptCustom);

        document.querySelector('.header-cart svg').addEventListener('click', () => {
            removeActive('.shopping-cart');
            document.getElementsByTagName('html')[0].classList.remove('fix');
        })
        //add products in slider
        let slideHTML = (url, urlImage, title, price, id, variantId, parent) =>  {
            let slide = `
                <div class="slide">
                    <div>
                        <a href="${url}">
                            <span class="items-center">
                                <img src="${urlImage}" alt="${title}">
                                <span class="price">
                                    <p></p>
                                    <b>${price}</b>
                                </span>
                            </span>
                            <span class="name">${title}</span>
                        </a>
                        <div class="flex-center">
                            <button type="button" class="quantity-btn quantity-btn_minus">−</button>
                            <input type="number" name="quantity" value="1" class="quantity">
                            <button type="button" class="quantity-btn quantity-btn_plus" >+</button>
                        </div>
                        <button type="button" class="btn-add" data-variant-id="${variantId}" data-id="${id}">Add to cart</button>
                    </div>
                </div> `;

            document.querySelector(parent).insertAdjacentHTML('beforeend', slide)
        }

        //11212 Hand Sanitizing
        postFetch('/api/products',`offset=0&limit=6&is_featured=0&ctoken=${mm.ctoken}&category=11212`,'POST').then(data => {
            console.log(data)
            let products = data.products;
            for (let i = 0; i < products.length; i++) {
                slideHTML(products[i].url, products[i].variants[0].image_url, products[i].title, products[i].variants[0].regular_price, products[i].variants[0].product_id, products[i].variants[0].variant_id, '.slider-products')

                let plus = document.querySelectorAll(`.slide .quantity-btn_plus`)[i],
                    minus = document.querySelectorAll(`.slide .quantity-btn_minus`)[i],
                    quantity = document.querySelectorAll(`.slide .quantity`)[i];

                changeQuantity(plus, minus, quantity, false)

                let addBtns = document.querySelectorAll('.btn-add');
                addBtns[i].addEventListener('click', (e) => {
                    postFetch('/cart.html',`api=c&cart_action=add&variant_id=${addBtns[i].dataset.variantId}&quantity=${addBtns[i].previousElementSibling.querySelector('.quantity').value}&product_id=${addBtns[i].dataset.id}&ctoken=${mm.ctoken}`,'POST').then(data => {
                        console.log(data)
                        cart()
                    })
                })
            }
            tns({
                container: document.querySelector('.slider-products'),
                fixedWidth: 190,
                gutter: 12,
                autoplay: false,
                axis: 'horizontal',
                controls: false,
                loop: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                mouseDrag: true,
                nav: false,
                preventScrollOnTouch: 'auto',
                swipeAngle: false,
            });
        })

        if (href.includes('cart.html')) {
            addActive('.shopping-cart');
            document.getElementsByTagName('html')[0].classList.add('fix')
        }
        let intervalCart = setInterval(() => {
            if (document.querySelector('.shopping-cart .list-product > li') != null && document.querySelector('.shopping-cart .body-cart') != null) {
                document.querySelector('.shopping-cart .body-cart').style.height = window.innerHeight - 155 - 53 + 'px';
            } else if (document.querySelector('.shopping-cart .list-product > li') == null && document.querySelector('.shopping-cart .body-cart') != null) {
                document.querySelector('.shopping-cart .body-cart').style.height = window.innerHeight - 53 + 'px';
            }
        })
    }

    !href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php') ? cart() : '';
    if (!href.includes('login.php') && !href.includes('/register.php') && !href.includes('/checkout') && !href.includes('/guest-checkout')) {
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
        html.fix {
            overflow: hidden;}
        html.fix body {
            position: relative;
            overflow: hidden;}
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
            font-size: 12px;
            line-height: 20px; }
        *:-moz-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            font-size: 12px;
            line-height: 20px;}
        *::-moz-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            font-size: 12px;
            line-height: 20px; }
        *:-ms-input-placeholder {
            font-family: "Inter", sans-serif;
            font-weight: 400;
            color: #9AA6AB;
            font-size: 12px;
            line-height: 20px;}
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
        input:not([type="image"], .quantity) {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            border: none;
            background-color: #E9EBEC;
            border-radius: 100px;
            padding: 11px 20px;
            width: 100%;
            font-size: 12px;
            outline-color: #344D57;
            line-height: 20px; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
            display: none; }
        .container {
            max-width: 1280px;
            padding: 0 20px;
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
        .main * {
            box-sizing: border-box;}
        .btn-filters {
            line-height: 36px;}
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
        .midbar {
            padding: 12px 0; }
        .menu .midbar_action {
            margin-top: 13px;}
        .menu .midbar_action, .back-menu {
            border-bottom: 1px solid #E0E4E5;
            background: #FBFBFB;
            width: 100%;
            padding: 19px 8px;}
        .midbar_action {
            background: transparent;}
        .back-menu {
            position: sticky;
            top: 0;}
        .midbar_action span, .back-menu span, .all_category {
            letter-spacing: 0.05em;
            font-weight: 600;
            font-size: 10px;
            text-transform: uppercase;
            background: transparent;
            line-height: 10px;
            color: #1E3944; }
        .midbar .btn {
            font-size: 12px;}
        .midbar_action span.cart_count {
            color: #96280F;}
        .box-search {
            position: relative;
            width: calc(100% - 24px - 32px - 40px); }
        .form-search {
            width: 100%;}
        .main .ais-SearchBox-input {
            background: #E9EBEC;
            border-radius: 38px;
            padding: 10px 50px 10px 20px;
            width: 100%; }
        .ais-SearchBox-submit {
            cursor: pointer;
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            right: 4px;
            width: 32px;
            height: 32px;
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
            width: 100%;
            cursor: pointer;
            margin-top: 8px;
            margin-bottom: 14px;
            padding: 11px 8px; }
        .dropdown_categories {
            display: none; }
        .alphabet {
            padding: 16px 0; }
        .alphabet > li {
            border-bottom: 1px solid #E0E4E5;
            margin-bottom: 16px;
        }
        .alphabet-item.active {
            color: #96280F;
            font-weight: 600;
            font-size: 24px; }
        .alphabet-item.active .arrow {
            transform: scaleY(-1);}
        .alphabet-item {
            font-weight: 400;
            font-size: 18px;
            line-height: 29px;
            color: #6d7e85;
            text-transform: uppercase;
            cursor: pointer; }
        .alphabet-item.active ~ .alphabet-drop {
            display: block;}
        .alphabet-drop {
            display: none;}
        .alphabet-drop a {
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            color: #344D57;
            display: block;
            text-align: left;
            padding: 10px 0;}
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
        
        .burger_category {
            pointer-events: none;
            width: 18px;
            height: 18px;
            margin-right: 10px; }
        .category_popular {
            padding: 14px 0;
            border-bottom: 1px solid #E0E4E5;
        }
        .category_popular a {
            padding: 10px 0;
            text-align: left;
            margin: 4px 0;
            font-size: 14px;
            line-height: 150%;
            display: block;
            color: #6D7E85; }
        .category_popular a:hover {
            color: #091114; }
        
        .ais-SortBy-select {
            background: #FBFBFB;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            padding: 9.5px 25px 9.5px 16px;
            color: #344D57;
            border: 1px solid #E0E4E5;
            box-sizing: border-box;
            border-radius: 100px;
        }
        .filter {
            background: #fff;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 0 20px;
            z-index: 999;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
            border-radius: 20px 20px 0 0;
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            transform: translateY(100px);
            overflow-y: auto;
            height: calc(100vh - 190px);}
            .filter.active {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0);
            }
        .filter_title {
            margin-bottom: 34px;
            font-weight: 600;
            font-size: 18px;
            line-height: 120%; }
        #clear-refinements {
            margin-bottom: 34px;
        }
        .filter .select_drop {
            padding-top: 10px; 
            margin-bottom: 10px;}
        .listing_wrapper {
            margin: 16px -20px; }
        .listing_title {
            font-weight: 600;
            font-size: 32px;
            line-height: 120%;
            text-transform: capitalize;
            margin-bottom: 40px; }
        .listing_content {
            padding-left: 1px;
            margin-top: 14px; }
        .listing_wrapper li {
            width: 50%; 
        }
        .listing_wrapper ol{
            display: flex;
            flex-wrap: wrap;
        }
        .listing_wrapper .card {
            border-radius: 0;
            margin-top: -1px;
            margin-left: -1px;
            width: 100%;
            height: 100%;
            }
            .listing_wrapper li:nth-child(2n+2) .card {
                border-left: none;
            }
            .listing_wrapper .card img {
            width: 147px;
            height: 147px; }
            .listing_wrapper .card .btn_white {
            pointer-events: none;
            }
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
        .count_brand {
        color: #9AA6AB;
        margin-left: 4px; }
        .select_filter {
        position: relative;
        margin-bottom: 11px; }
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
        position: sticky; 
        top: 107px;
        background: #fff;
        z-index: 9;}
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
            top: 12px;
            right: 12px; }
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
        width: 20px;
        height: 20px;
        margin: 0 12px; }
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
            width: 12px;
            height: 2px; }
        .btn-calc:after {
            width: 2px;
            height: 12px; }
        .btn-calc_plus:after {
            content: ''; }
        .card {
        background: #FFFFFF;
        border: 1px solid #E3E6E7;
        border-radius: 4px;
        padding: 20px;
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
                margin-bottom: 10px;
                color: #6D7E85;
            }
        .card .btn {
            padding: 0;
            font-size: 12px;
            width: 100%; }
        .ais-Breadcrumb-list, .breadcrumbs ul {  
            display: flex;
            align-items: center;}
        #breadcrumbs ul > li:first-child a:before {
            content: '';
            width: 18px;
            height: 18px;
            margin-right: 4px;
            display: block;
            color: transparent;
            transform: scaleX(-1);
            flex-shrink: 0;
            background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;}
        .breadcrumbs {
            padding: 10px 0 5px; }
        .ais-Breadcrumb-link, .breadcrumbs a {
            font-weight: normal;
            font-size: 12px;
            line-height: 1;
            color: #344D57;
            display: flex;
            align-items: center;
        }
        .ais-Breadcrumb-item, .breadcrumbs li {
            color: #6D7E85;
            display: flex;
            align-items: center;
            line-height: 18px;
            cursor: default;
            padding: 10px 0; }
        .max-391 {
            width: 100%;
            max-width: 391px; }
        .scroll-x {
            overflow-x: auto;}
        .scroll-x::-webkit-scrollbar {
            display: none; }
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
            display: block!important;}
        #list_categories .ais-HierarchicalMenu-item--selected>div:first-child {
            text-decoration: underline; }
        #list_categories .ais-HierarchicalMenu-count {
            display: none; }
        li.ais-Breadcrumb-item.ais-Breadcrumb-item--selected {
            max-width: 600px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;}
        .ais-Breadcrumb-separator {
            width: 18px;
            height: 18px;
            margin-right: 4px;
            display: block;
            color: transparent;
            transform: scaleX(-1);
            flex-shrink: 0;
            background: url(https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg) no-repeat center / contain;}
        .ais-ClearRefinements-button {
            background-color: #e9ebec;
            padding: 5px 8px;
            border-radius: 40px;
            display: flex;
            align-items: center;
            cursor: pointer;
            font-size: 12px;
            line-height: 1;
            justify-content: space-between;}
        .ais-ClearRefinements-button:hover svg {
            fill: #bf0400;}
        .ais-ClearRefinements-button--disabled, .listing_wrapper .ais-InfiniteHits-loadMore {
            display: none!important;}
        .ais-RefinementList-showMore--disabled {
            opacity: 0;
            pointer-events: none;
            padding: 0!important;}
        .ais-RefinementList-showMore {
            text-decoration: underline;
            padding: 15px 0;
            display: block;
            width: 100%;
            background: #fff;
            z-index: 3;
            outline: none;
            color: #344D57;
            text-align: left;
            position: sticky;
            bottom: 0;}
        .main a#top {
            background-color: #1E3944;
            padding: 4px;
            border-radius: 40px;}
        .algolia-autocomplete {
            width: 100%;}
        .aa-dropdown-menu {
            background: #FBFBFB;
            box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
            width: 100%;
            position: fixed!important;
            left: 0!important;
            top: 64px!important;}
        .aa-suggestion {
            display: flex;
            align-items: center;
            padding: 5px 10px;
            cursor: pointer;}
        .aa-suggestion.aa-cursor {
            background-color: #E0E4E5;}
        .aa-suggestion img {
            width: 45px;
            height: 45px;
            border: 1px solid #eeeeee;
            margin-right: 10px;
            object-fit: contain;
            flex-shrink: 0;}
        .aa-suggestion em {
            font-weight: 700;}
        .aa-suggestion .name {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;}
        .aa-suggestion .item_num {
            font-size: 10px;
            margin-bottom: 4px;
            color: gray;}
        .aa-suggestion .price {
            fonr-size: 11px}
        .listing_popular {
            margin-bottom: 33px;
        }
        .listing_popular .c-gray {
            padding: 0 20px;
        }
        .listing_popular ul {
            margin: 13px 0 20px
        }
        .listing_popular h2 {
            font-weight: 600;
            font-size: 32px;
            line-height: 120%;
            padding: 0 20px 30px;
        }
        .listing_popular > div > .btn {
            margin: 0 auto 33px;
            display: block;
            width: calc(100% - 40px);
        }
        #current-refinements {
            padding-right: 20px;
            font-size: 11px;
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
            padding: 3px 7px;
            line-height: 1;
            border-radius: 40px;
            background-color: #e9ebec;
            display: flex;
            align-items: center;
            margin: 2px 0 2px 4px;
        }
        .ais-CurrentRefinements-label {
            margin: 3px 4px 3px 12px;
        }
        .ais-CurrentRefinements-delete {
            padding-left: 4px;
            cursor: pointer;
            line-height: 1;
            background-color: transparent;
        }
        .ais-CurrentRefinements-delete:hover {
            color: #bf0400;
        }
        span.ais-CurrentRefinements-categoryLabel {
            overflow: hidden;
            max-width: 100px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        #stats-container {
            white-space: nowrap;
            padding: 3px 20px;
        }
        .trustpilot iframe {
            width: 90%!important;
            height: 91px!important;}
        .slider-main {
            position: relative;
            width: 100%;
            height: 89.33vw;
            margin: 40px auto 8px;}
        #tns1 > .tns-item {
            height: 100%;
            border: 1px solid #E0E4E5;
            border-radius: 4px;}
        #tns1 > .tns-item img {
            height: 100%;
            width: 100%;
            object-fit: contain;}
        .list {
            color: #344D57;
            margin: 70px 0 48px; }
        .list .fw-semi {
            color: #091114;}
        .list li {
            font-size: 16px;
            line-height: 170%; }
        .product { 
            font-family: 'Inter', sans-serif;}
        .product h2, .product .title {
            padding-left: 0;
            font-weight: 600;
            font-size: 32px;
            line-height: 120%;
            margin-bottom: 20px; }
        .product .slide {
            padding: 0;}
        .product > div.flex-center-between > img {
            width: 48%; }
        .product_pricing {
            margin-top: 20px;}
        .product_pricing .btn {
            width: 100%;}
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
            width: 32px;
            height: 32px;
            line-height: 32px;
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
            color: #6D7E85;}
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
            .tabs-discription {
                margin-top: 40px;}
        .tabs-discription li {
            text-transform: lowercase;
            font-size: 14px;
            line-height: 21px;
            color: #091114;
            border-bottom: 1px solid #BCC4C7;
            padding: 9.5px 10px;
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
            margin-bottom: 28px; }
            .similar-products .card {
                width: 280px;
                flex-shrink: 0;
                padding: 40px;
                margin-right: 16px; }
            .similar-products .card img {
                width: 100%;
                height: 200px;}
                .cards_similar {
                    overflow-x: auto;
                    margin-right: -20px;
                }
        .mt-22 {
            margin-top: 22px; }
        
        .mx-auto {
            margin-right: auto;
            margin-left: auto; }
        
        .fs-16 {
            font-size: 16px;
            line-height: 24px; }
        
        .fs-24 {
            font-size: 24px;
            line-height: 29px; }
        
        .l-t-05 {
            letter-spacing: 0.05em; }
        
        .text-small {
            font-weight: normal;
            font-size: 8px;
            line-height: 10px;
            color: #6D7E85; }
        
        .text-up {
            text-transform: uppercase; }
        
        .text-center {
            text-align: center; }
        
        .text-nowrap {
            white-space: nowrap; }
            
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
        .shipping_block {
            background: #F0F1F2;
            border: 1px solid #E0E4E5;
            padding: 20px;
            margin-bottom: 8px;
            border-radius: 4px;}
        .scroll-x {
            overflow-x: auto;}
        .scroll-x::-webkit-scrollbar {
            display: none; }
        .tns-outer {
            position: relative;}
        .tns-outer .scroll-x {
            margin-left: 0!important;}
        .tns-nav {
            position: absolute;
            bottom: -45px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;}
        .tns-nav button {
            width: 8px;
            height: 8px;
            background: #E0E4E5;
            border-radius: 50%;
            margin: 0 4px;}
        .tns-nav button.tns-nav-active {
            width: 10px;
            height: 10px;
            background: #1E3944;}
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
        .available-options .tns-outer {
            margin-bottom: 60px;
            margin-right: 0; }
        .available-options .tns-nav {
            bottom: -30px; }
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
            display: block; }
        .radio-check span.radio-check_price {
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            color: #091114;
            margin-top: 8px;}
        .menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 9999;
            overflow: hidden;
        }
        .menu.active {
            opacity: 1;
            pointer-events: auto;
        }
        .menu.active .menu-conteiner {
            transform: translateX(0);
        }
        .menu-conteiner {
            background: #FBFBFB;
            width: 320px;
            height: 100%;
            padding: 24px 20px;
            transform: translateX(-100px);
            transition: all 0.3s ease;
            overflow-y: auto;
        }
        .menu-conteiner.active .category_popular {
            display: none;
        }
            .menu-conteiner.active .dropdown_categories {
            display: block;
        }
        .footer-menu {
            padding: 40px 0;
        }
        .footer-menu a {
            font-size: 12px;
            line-height: 150%;
            color: #344D57;
            padding: 5px 0;
            margin: 5px 0;
            display: block;
            text-align: left;
        }
        .underline {
            text-decoration: underline;
        }
        .arrow {
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 4px 4px 0 4px;
            border-color: rgba(154,166,171,0.5) transparent transparent transparent;
            pointer-events: none;
        }
        .close-menu {
            background: transparent;
        }
        .close-filter {
            margin-bottom: 8px;
            margin-left: auto;
            display: block;
            background: #fff;
        }
        .sticky {
            position: sticky;
            top: 0;
            width: 100%;
            background: #fff;
            z-index: 99;
            padding-top: 20px;
        }
        .add-to-cart {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 999;
            background: #fff;
            box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.3), 0 -1px 3px 1px rgba(0, 0, 0, 0.15);
            padding: 20px 20px 20px 8px;
            opacity: 0;
            pointer-events: none;
            transform: translateY(50px);
            transition: all 0.3s ease;
        }
        .add-to-cart.active {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
        }
        .add-to-cart .calc {
            margin-bottom: 0;
        }
        .box-of {
            padding-bottom: 5px;
        }
        .box-of p {
            margin-bottom: 5px;
            font-size: 11px;
            color: #6D7E85;
        }
        .ais-InfiniteHits--empty {
            padding: 0 20px;
        }
        @media only screen and (max-width: 360px) {
            .similar-products .card {
                padding: 30px;
                width: 250px;
                margin-right: 10px;
            }
            .container {
                padding: 0 15px;
            }
            .product h2, .product .title {
                font-size: 28px;
            }
            .also-bought .tns-outer {
                margin-right: -15px;
            }
        }
        </style>`

        let htmlMenu = `
        <nav class="menu">
            <div class="menu-conteiner">
                <div class="flex-center-between">
                    <a class="logo" href="#"><img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-m.svg" alt="Medical Mega"></a>
                    <button type="button" class="close-menu" data-button=".menu"><img src="https://conversionratestore.github.io/projects/medicalmega/img/close-m.svg" alt="close menu"></button>
                </div>
                <a class="items-center midbar_action" href="https://medicalmega.com/myaccount.html">
                    <img class="mr-8" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/user.svg" alt="account icon">
                    <span>Account</span>
                </a> 
            
                <div class="category_popular">
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=New%20Products!" class="c-red">New Products</a>
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Hand%20Sanitizing">Hand Sanitizing</a>
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Wound%20Care">Wound Care</a>
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Gloves">Gloves</a>
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Disinfectants">Disinfectants</a>
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Ostomy">Ostomy</a>
                    <a href="/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Instruments">Instruments</a>
                    <button type="button" class="flex-center-between all_category" data-button=".menu-conteiner"> 
                        <span>view All Categories</span> 
                        <img src="https://conversionratestore.github.io/projects/medicalmega/img/arrow_forward-right.svg" alt="arrow right icon">
                    </button>
                </div>
            
                <div class="dropdown_categories">
                    <button type="button" class="items-center back-menu" data-button=".menu-conteiner">
                        <img class="mr-8" src="https://conversionratestore.github.io/projects/medicalmega/img/arrowLeft.svg" alt="arrow left icon">
                        <span>Main Menu</span>
                    </button>
                    
                    <ul class="alphabet"></ul>
                    <div id="list_categories_ex"></div>
                </div>
                    
                <div class="footer-menu">
                    <a href="https://medicalmega.com/service.html" class="items-center"><img class="mr-8" src="https://conversionratestore.github.io/projects/medicalmega/img/help.svg" alt="icon quotation">Customer Service</a>
                    <a href="tel:17182084380">Local Phone # <span class="underline">1-718-208-4380</span></a>
                    <a class="ml-40" href="tel:18556336342">Toll Free Phone # <span class="underline">1-855-MED-MEGA (633-6342)</span></a>
                </div>
            </div>
        </nav>`

        let html = `
        <div class="main">
        <header class="header">
            <div class="midbar"> 
                <div class="container flex-center-between">
                    <div class="burger mr-16" data-button=".menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.1875 3.75H2.8125C2.70937 3.75 2.625 3.83437 2.625 3.9375V5.4375C2.625 5.54062 2.70937 5.625 2.8125 5.625H21.1875C21.2906 5.625 21.375 5.54062 21.375 5.4375V3.9375C21.375 3.83437 21.2906 3.75 21.1875 3.75ZM21.1875 18.375H2.8125C2.70937 18.375 2.625 18.4594 2.625 18.5625V20.0625C2.625 20.1656 2.70937 20.25 2.8125 20.25H21.1875C21.2906 20.25 21.375 20.1656 21.375 20.0625V18.5625C21.375 18.4594 21.2906 18.375 21.1875 18.375ZM21.1875 11.0625H2.8125C2.70937 11.0625 2.625 11.1469 2.625 11.25V12.75C2.625 12.8531 2.70937 12.9375 2.8125 12.9375H21.1875C21.2906 12.9375 21.375 12.8531 21.375 12.75V11.25C21.375 11.1469 21.2906 11.0625 21.1875 11.0625Z" fill="#091114"/>
                        </svg>
                    </div>
                    <div class="box-search"> 
                        <div id="form-search"></div>
                    </div>
                    <button class="items-center midbar_action" type="button">
                        <img src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/cart.svg" alt="icon Cart" style="margin-right: 2.6px">
                        <span>(<span class="cart_count">${qty}</span>)</span>
                    </button>
                </div>
            </div>
        </header>
        <div class="container" id="container-listing"> 
            <nav id="breadcrumbs" class="breadcrumbs"></nav>
            <div id="relatedProducts"></div>
            <h2 class="listing_title">All Products</h2>
            <div class="flex">
                <button class="btn-filters btn_white btn w-100 flex-center" type="button" data-button=".filter">
                    <svg class="mr-8" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3906 2.8125H2.60938C2.53203 2.8125 2.46875 2.87578 2.46875 2.95312V4.07812C2.46875 4.15547 2.53203 4.21875 2.60938 4.21875H16.3906C16.468 4.21875 16.5312 4.15547 16.5312 4.07812V2.95312C16.5312 2.87578 16.468 2.8125 16.3906 2.8125ZM11.8906 13.7812H7.10938C7.03203 13.7812 6.96875 13.8445 6.96875 13.9219V15.0469C6.96875 15.1242 7.03203 15.1875 7.10938 15.1875H11.8906C11.968 15.1875 12.0312 15.1242 12.0312 15.0469V13.9219C12.0312 13.8445 11.968 13.7812 11.8906 13.7812ZM14.1406 8.29688H4.85938C4.78203 8.29688 4.71875 8.36016 4.71875 8.4375V9.5625C4.71875 9.63984 4.78203 9.70312 4.85938 9.70312H14.1406C14.218 9.70312 14.2812 9.63984 14.2812 9.5625V8.4375C14.2812 8.36016 14.218 8.29688 14.1406 8.29688Z" fill="#344D57"/>
                    </svg>
                    filters
                </button>
            </div>
            <div class="w-100" id="listing">
            <div class="listing_wrapper">
                <div class="listing_popular"></div>
                <div class="flex-end-between">
                <p class="c-gray" id="stats-container"></p>
                <div id="current-refinements"></div>
                </div>
                <div class="listing_content"> 
                <ol class="listing_suggestion"></ol>
                <div id="hits"></div>
                </div>
            </div>
            </div>
        </div>
        
        <div class="filter">
            <div class="sticky">
                <button class="close-filter" data-button=".filter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2143 12L19.3666 4.66641C19.4697 4.54453 19.383 4.35938 19.2236 4.35938H17.3533C17.2432 4.35938 17.1377 4.40859 17.065 4.49297L11.9908 10.5422L6.91659 4.49297C6.84628 4.40859 6.74081 4.35938 6.62831 4.35938H4.758C4.59863 4.35938 4.51191 4.54453 4.61503 4.66641L10.7674 12L4.61503 19.3336C4.59193 19.3608 4.57711 19.394 4.57233 19.4293C4.56755 19.4647 4.57301 19.5006 4.58806 19.533C4.60312 19.5653 4.62713 19.5926 4.65725 19.6117C4.68737 19.6308 4.72234 19.6408 4.758 19.6406H6.62831C6.73847 19.6406 6.84394 19.5914 6.91659 19.507L11.9908 13.4578L17.065 19.507C17.1353 19.5914 17.2408 19.6406 17.3533 19.6406H19.2236C19.383 19.6406 19.4697 19.4555 19.3666 19.3336L13.2143 12Z" fill="#9AA6AB"/>
                    </svg>
                </button>
                <div class="flex-center-between">
                    <h3 class="filter_title items-center">
                        <svg class="mr-8" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.3906 2.8125H2.60938C2.53203 2.8125 2.46875 2.87578 2.46875 2.95312V4.07812C2.46875 4.15547 2.53203 4.21875 2.60938 4.21875H16.3906C16.468 4.21875 16.5312 4.15547 16.5312 4.07812V2.95312C16.5312 2.87578 16.468 2.8125 16.3906 2.8125ZM11.8906 13.7812H7.10938C7.03203 13.7812 6.96875 13.8445 6.96875 13.9219V15.0469C6.96875 15.1242 7.03203 15.1875 7.10938 15.1875H11.8906C11.968 15.1875 12.0312 15.1242 12.0312 15.0469V13.9219C12.0312 13.8445 11.968 13.7812 11.8906 13.7812ZM14.1406 8.29688H4.85938C4.78203 8.29688 4.71875 8.36016 4.71875 8.4375V9.5625C4.71875 9.63984 4.78203 9.70312 4.85938 9.70312H14.1406C14.218 9.70312 14.2812 9.63984 14.2812 9.5625V8.4375C14.2812 8.36016 14.218 8.29688 14.1406 8.29688Z" fill="#344D57"/>
                        </svg>
                        Filters</h3>
                    <div id="clear-refinements"></div>
                </div>
            </div>
            <div class="select_filter active">
            <div class="select_item">
                <p>Brands</p>
            </div>
            <div class="select_drop" id="manufacturer"></div>
            </div>
            <div class="select_filter active">
            <div class="select_item">
                <p>Price</p>
            </div>
            <div class="select_drop" id="price_group"></div>
            </div>
            
        </div>
        </div>
    `
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
            // searchFunction(helper) {
            //   const page = helper.getPage(); // Retrieve the current page
            //   helper.setQuery(query) // this call resets the page
            //         .setPage(page) // we re-apply the previous page
            //         .search();
            // },
        });

        const index = searchClient.initIndex(indexName);

        let currentPath = 'https://medicalmega.com/';

        let categoryPageLoaded = false;

        let actionDataLayer = '',
            labelDataLayer = '';

        let optionFetchAlgolia = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Algolia-API-Key': 'e3a0cffec873466acf71806748550356',
                'X-Algolia-Application-Id':'PXDJAQHDPZ'
            },
            method: 'GET'
        }

        let requestAllCaterories = new Promise((resolve, reject) => {
            fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?facets=["categories.lvl0","categories.lvl1"]`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
        })

        let requestProduct = new Promise((resolve, reject) => {
            if (window.location.pathname.includes('/product/')) {
                fetch(`https://PXDJAQHDPZ-dsn.algolia.net/1/indexes/products?query=${window.location.pathname.split('/product/')[1]}`, optionFetchAlgolia).then(res => res.json()).then(data => resolve(data))
            }
        })
        //comes into view
        function isScrolledIntoView(el) {
            let rect = el.getBoundingClientRect(),
                elemTop = rect.top,
                elemBottom = rect.bottom;

            let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

            return isVisible;
        }
        //set Label For Events
        function labelForEvents(e) {
            if (e.closest('.product')) {
                return `PDP`;
            } else if (e.closest('.cards_similar')) {
                return `Similar Products`;
            } else if (e.closest('.shopping-cart')) {
                return `Shopping Cart`;
            } else {
                return `Listing`;
            }
        }

        function scrolled(element) {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                element.classList.remove('scroll')
            } else {
                element.classList.add('scroll')
            }
        }
        let interval = null;

        function startStuff() {
            interval = setInterval(() => {
                if (window.location.href != currentPath) {
                    document.querySelector('.listing_popular').style.display = 'none';
                } else {
                    document.querySelector('.listing_popular').style = '';
                }
            }, 100);
        }

        function stopStuff() {
            clearInterval(interval);
        }

        function toggleListing(boolean) {
            if (boolean == false) {
                document.querySelector('#container-listing').style.display = 'none';
                document.querySelector('#container-product') != null ? document.querySelector('#container-product').style.display = 'block' : '';
                stopStuff()
            } else {
                document.querySelector('#container-listing').style = '';
                document.querySelector('#container-product') != null ? document.querySelector('#container-product').style.display = 'none' : '';
                startStuff()
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
            //pricing PDP
            if (qty.closest('.product_pricing')) {
                let qtyBlock = qty.closest('.product').querySelector('.add-to-cart .calc-qty'),
                    priceBlock = qty.closest('.product').querySelector('.add-to-cart .add-cart .pr');
                qtyBlock.value = qty.value;
                priceBlock.innerHTML = (+priceBlock.dataset.price * +qty.value).toFixed(2);
            } else if (qty.closest('.add-to-cart')) {
                let qtyBlock = qty.closest('.product').querySelector('.product_pricing .calc-qty'),
                    priceBlock = qty.closest('.product').querySelector('.product_pricing .add-cart .pr');
                qtyBlock.value = qty.value;
                priceBlock.innerHTML = (+priceBlock.dataset.price * +qty.value).toFixed(2);
            }
        }

        //show/hide element
        function toggleModal(item) {
            document.querySelector(item).classList.toggle('active')
            if (document.querySelector(item).classList.contains('active')) {
                document.getElementsByTagName('html')[0].classList.add('fix')
            } else {
                document.getElementsByTagName('html')[0].classList.remove('fix')
            }
        }
        document.querySelector('[name="viewport"]').setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')

        document.body.insertAdjacentHTML('afterbegin', html);
        document.body.insertAdjacentHTML('afterbegin', htmlMenu);
        document.body.insertAdjacentHTML('afterbegin', style);

        document.querySelector('.midbar .midbar_action').addEventListener('click', () => {
            addActive('.shopping-cart');
            document.getElementsByTagName('html')[0].classList.add('fix');
        }); // show cart modal

        startStuff();

        document.querySelector('.header').before(document.querySelector('#top'));
        document.querySelector('#top img').src = 'https://conversionratestore.github.io/projects/medicalmega/img/chevron-right.svg';
        document.querySelector('#top').addEventListener('click', (e) => {
            actionDataLayer = `Click on Top button`;
            labelDataLayer = `Footer`;
            pushDataLayer(actionDataLayer, labelDataLayer);
        })
        document.querySelector('.cart_count').innerHTML = document.querySelector('.shoppingcart .by_num span').innerHTML;

        document.querySelectorAll('[data-button]').forEach(item => {
            item.addEventListener('click', (e) => {
                let data = item.dataset.button
                toggleModal(data)
                if (item.classList.contains('close-menu')) {
                    pushDataLayer(`Click on close button`, `Header`);
                } else if (item.classList.contains('all_category')) {
                    pushDataLayer(`Click on view All Categories button`, `Header`);
                } else if (item.classList.contains('back-menu')) {
                    pushDataLayer(`Click on Main Menu button`, `Header`);
                } else if (item.classList.contains('btn-filters')) {
                    pushDataLayer(`Click on filters button`, `Listing`);
                } else if (item.classList.contains('close-filter')) {
                    pushDataLayer(`Click on close button`, `Filters`);
                } else if (item.classList.contains('burger')) {
                    pushDataLayer(`Click on burger button`, `Header`);
                }
            })
        })

        //click on menu
        document.querySelector('.menu').addEventListener('click', (e) => {
            if (e.target.matches('.menu')) {
                toggleModal('.menu')
                pushDataLayer(`Click on under menu`, `Header`);
            }
        })

        //hide dropdown select
        function remActiveSelect() {
            let dropdowns = document.querySelectorAll(".select");
            for (let i = 0; i < dropdowns.length; i++) {
                if (dropdowns[i].classList.contains('active')) {
                    dropdowns[i].classList.remove('active');
                }
            }
        }

        requestAllCaterories.then(data => {
            let categoriesLvl0 = data.facets["categories.lvl0"];

            console.log(data)

            let alphabet = document.querySelector('.alphabet'); //alphabet
            // alphabet.innerHTML = '';

            let litterAlphabet = [];
            for (let key in categoriesLvl0) {
                litterAlphabet.push({'letter': key.charAt(0)})
            }

            litterAlphabet = litterAlphabet.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.letter === thing.letter
                ))
            )

            for (let i = 0; i < litterAlphabet.length; i++) {
                alphabet.insertAdjacentHTML('afterbegin', `<li><p class="alphabet-item flex-center-between ${litterAlphabet[i].letter == 'A' ? 'active' : ''}">${litterAlphabet[i].letter} <span class="arrow"></span></p><div class="alphabet-drop"></div></li>`);
            }

            let items = [...alphabet.querySelectorAll("li")];
            items.sort((a, b) => a.innerText == b.innerText ? 0 : a.innerText < b.innerText ? -1 : 1);
            items.forEach(item => alphabet.appendChild(item));

            for (let key in categoriesLvl0) {
                document.querySelectorAll('.alphabet-item').forEach(letter => {
                    if (key.charAt(0) == letter.innerText.charAt(0)) {
                        letter.nextElementSibling.insertAdjacentHTML('beforeend', `<a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${key}">${key}</a>`)
                    }
                })
            }

            document.querySelectorAll('.alphabet-drop a').forEach((el) => {
                el.addEventListener('click', (e) => {
                    e.preventDefault()
                    let link = el.href.split('20&').join('20%26');
                    window.location.href = link;
                    pushDataLayer(`Click on category item - ${el.innerText}`, `All categories`);
                })
            })

            alphabet.querySelectorAll('.alphabet-item').forEach((el, index) => {
                el.addEventListener('click', (e) => {
                    e.stopImmediatePropagation();
                    let elem = document.querySelectorAll('.alphabet-item')
                    for (let i = 0; i < elem.length; i++) {
                        if (i != index && elem[i].classList.contains('active')) {
                            elem[i].classList.remove('active')
                        }
                    }
                    e.target.classList.toggle('active')
                    pushDataLayer(`Click on letter - ${el.innerText}`, `All categories`);
                })
            })
        })

        function findImageHits(variants) {
            for (let i = 0; i < variants.length; i++) {
                if (variants[i].image != '') {
                    return variants[i].image
                }
            }
        }

        function initHits(hit) {
            let variants = hit.variants,
                count = 0,
                boxOf = '';
            for (let i = 0; i < variants.length; i++) {
                if (variants[i].in_stock == true && variants[i].price != '0.00') {
                    count = i;
                    break;
                } else {
                    count = i;
                }
            }

            for (let i = 0; i < variants.length; i++) {
                if (variants.length > 1 && variants[i].extra != 'Each' && variants[i].price != '0.00') {
                    boxOf += `<p>${variants[i].extra} = $${variants[i].price}</p>`;
                }
            }

            let boxItem = `
            <div class="card">
                <p class="status" style="display:${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0.00' ? 'block' : 'none'}">Out of Stock</p>
                <div>
                    <a class="card_name" href="https://medicalmega.com/product/${hit.seo}">
                        <img src="https://medicalmegaimgs.net/prod/uploaded/product/${findImageHits(hit.variants) != '' ? findImageHits(hit.variants) : 'dummyimage.jpg'}" alt="${hit.name}">
                        <span title='${hit.name}'>${hit.name}</span>
                    </a>
                    <p class="card_item">Item #${hit.item_num}</p>
                </div>
                <form action="https://medicalmega.com/cart.html" method="post">
                    <div class="box-of">
                        ${boxOf}
                    </div>
                    <div class="flex-center calc" ${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0.00' ? 'disabled' : ''}>
                        <button class="btn-calc btn-calc_minus" type="button" disabled=""></button>
                        <input class="calc-qty" type="number" name="quantity" value="1" data-max-value="${hit['variants'][count].qty}">
                        <button class="btn-calc btn-calc_plus" type="button"></button>
                    </div>
                    ${hit['variants'][count].in_stock == false || hit['variants'][count].price == '0.00' ? '<button class="btn btn_white" type="button" data-button="notify"><span>Out of Stock</span></button>' : '<button class="btn btn_dark add-cart" type="button"><span>$<span class="pr" data-price="' + hit['variants'][count].price + '">' + hit['variants'][count].price + '</span> | Add</span></button>'}
                    <input type="hidden" name="product_variant_id" value="${hit['variants'][count].pv_id}">
                    <input type="hidden" name="product_id" value="${hit.objectID}">
                    <input type="hidden" name="add_to_cart" value="variant">
                </form>
            </div>`

            return boxItem
        }

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
                    <label class="mt-16 items-center" onclick="pushDataLayer('Click on one of the brand items on filters','Filters')">
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
                <label class="mt-16 items-center" onclick="pushDataLayer('Click on one of the price items on filters','Filters')">
                    <span class="check"></span>
                    <span class="check_text">${data.label} <span class="count_brand">(${data.count})</span></span>
                </label>
                `;

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
                            toggleListing(true)
                            if (!e.target.classList.contains('reset')) {
                                pushDataLayer(`Click on reset button`, 'Search by Name')
                            } else {
                                e.target.classList.remove('reset')
                            }
                        })

                        let crumbs = document.querySelectorAll('#breadcrumbs li');
                        if (crumbs.length < 2) {
                            document.querySelector('#breadcrumbs').style.opacity = '0';
                            document.querySelector('.listing_title').innerHTML = 'All Products';
                        } else {
                            document.querySelector('#breadcrumbs .ais-Breadcrumb-item--selected').style.display = 'none';
                            document.querySelector('#breadcrumbs').style = '';
                            document.querySelector('.listing_title').innerHTML = document.querySelector('#breadcrumbs .ais-Breadcrumb-item.ais-Breadcrumb-item--selected').innerText.replace('>', '')
                        }

                        if (window.location.pathname.includes('/category') && !window.location.href.includes('?products') && categoryPageLoaded == false) {
                            categoryPageLoaded = true;
                            // let category = window.location.href.split('category/')[1].split('-').join(' ');
                            let category = document.querySelector('title').innerHTML.split(' |')[0];
                            search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [category];
                            search.refresh()
                            document.querySelector('#breadcrumbs').style = '';
                            document.querySelector('.listing_title').innerHTML = category;
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
                                document.querySelector('#manufacturer ul').classList.toggle('scroll');
                                if (e.target.innerText == 'Show more') {
                                    document.querySelector('#manufacturer ul').classList.remove('scroll');
                                    pushDataLayer(`Click on Less more button`, 'Filters');
                                } else {
                                    pushDataLayer(`Click on Show more button`, 'Filters');
                                }
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

        document.querySelectorAll('.category_popular a').forEach((el) => {
            el.addEventListener('click', (e) => pushDataLayer(`Click on category item - ${e.target.innerText}`, 'Popular categories'))
        })

        if (window.location.href.includes('/search/') && !window.location.href.includes('?products')) {
            search.helper.setQuery(window.location.href.split('/search/')[1].split('-').join(' ')) // this call resets the page
                .setPage(search.helper.getPage()) // we re-apply the previous page
                .search();
        }

        //click on logo
        document.querySelector('.logo').addEventListener('click', (e) => {
            pushDataLayer(`Click on logo`, 'Header');
            window.location.href = currentPath;
        })

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.select')) remActiveSelect();
            if (!e.target.closest('.filter') && !e.target.matches('.filter') && !e.target.matches('.btn-filters') && document.querySelector('.filter.active') != null) {
                document.querySelector('.filter').classList.remove('active');
                document.getElementsByTagName('html')[0].classList.remove('fix');
            }
        })

        window.addEventListener('scroll', (e) => {
            remActiveSelect();
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

        autocomplete('#form-search input', {hint: false, debug: false}, [
            {
                source: autocomplete.sources.hits(index, {hitsPerPage: 5, facetFilters: ["*"]}),
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
                            search.helper.state.hierarchicalFacetsRefinements['categories.lvl0'] = [];

                            toggleListing(true)

                            actionDataLayer = `Click on submit button`;
                            labelDataLayer = 'Search by Name';
                            pushDataLayer(actionDataLayer, labelDataLayer)
                        });

                        return sugTemplate;
                    },
                },
            }
        ]).on('autocomplete:selected', function (event, suggestion, dataset) {
            window.location.href = `https://medicalmega.com/product/${suggestion.seo}`
            pushDataLayer(`Selected suggestion`, 'Autocomplete Search by Name')
        })

        document.querySelector('#form-search input').addEventListener('click', (e) => pushDataLayer(`Click on Search by Name`, 'Header'))

        document.querySelectorAll('.midbar_action').forEach(el => {
            el.addEventListener('click', (e) => {
                if (el.querySelector('.cart_count') != null) {
                    pushDataLayer(`Click on Cart`, 'Header')
                } else {
                    pushDataLayer(`Click on ${e.target.innerText}`, 'Header')
                }
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
                <ul class="flex-wrap"></ul>
                <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=New%20Products!" class="btn btn_white">Show More</a>
            </div>
            <div class="ostomy">
                <h2>Ostomy</h2>
                <p class="c-gray">${res[1].nbHits} items</p>
                <ul class="flex-wrap"></ul>
                <a href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=Ostomy" class="btn btn_white">Show More</a>
            </div>
            <div class="wound-care">
                <h2>Wound Care</h2>
                <p class="c-gray">${res[2].nbHits} items</p>
                <ul class="flex-wrap"></ul>
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
            toggleListing(false); //hide listing

            requestProduct.then(data => {
                console.log(data)
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
                            <div class="justify-between scroll-x"></div>
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

                    function slides() {
                        let slides = ''
                        for (let i = 0; i < imagesProduct.length; i++) {
                            slides += `<div class="slide"><img src="https://medicalmegaimgs.net/prod/uploaded/product/${imagesProduct[i]}" alt="image ${i}"></div>`
                        }
                        return slides
                    }
                    function pricingBlock(className) {
                        return `
                        <form class="${className}" action="https://medicalmega.com/cart.html" method="post">
                            <div class="flex-center calc" ${firstVariant.in_stock == false || firstVariant.price == '0.00' ? 'disabled' : ''}> 
                            <button class="btn-calc btn-calc_minus" type="button" disabled></button>
                            <input class="calc-qty" type="number" value="1" name="quantity">
                            <button class="btn-calc btn-calc_plus" type="button"></button>
                            </div>
                            ${firstVariant.in_stock == false || firstVariant.price == '0.00' ? '<button class="btn btn btn_white" type="button" data-button="notify">Out of Stock</button>' : `<button class="btn btn_dark add-cart" type="button" ><span>$<span class="pr" data-price="${firstVariant.price}">${firstVariant.price}</span> | </span>Add to Cart</button>`}
                            <input type="hidden" name="product_variant_id" value="${firstVariant.pv_id}">
                            <input type="hidden" name="product_id" value="${product.objectID}">
                            <input type="hidden" name="add_to_cart" value="variant">
                        </form>`
                    }
                    console.log(product.categories['lvl0'][0])
                    let htmlProduct = `
                    <div id="container-product" class="container">
                        <nav id="breadcrumbs-pdp" class="breadcrumbs">
                            <ul class="ais-Breadcrumb-list">
                                <li class="ais-Breadcrumb-item">
                                    <span class="ais-Breadcrumb-separator" aria-hidden="true" style="transform: scaleX(-1)">&gt;</span>
                                    <a class="ais-Breadcrumb-link" href="https://medicalmega.com/?products%5BhierarchicalMenu%5D%5Bcategories.lvl0%5D%5B0%5D=${product.categories['lvl0'][0].split(' &').join('%20%26')}">${product.categories['lvl0'][0]}</a>
                                </li>
                            </ul>  
                        </nav>
                        <div class="product"> 
                            <h2 class="title">${product.name}</h2>
                            <div class="flex-center-between">
                                <img class="mr-8" src="https://conversionratestore.github.io/projects/medicalmega/img/transpilot1.svg" alt="icon transpilot">
                                <img src="https://conversionratestore.github.io/projects/medicalmega/img/transpilot2.svg" alt="icon transpilot">
                            </div>
                            <div class="slider-main">${slides()}</div>
                            <p class="text-small text-center">Image shown for reference purposes only. Actual product appearance may vary.</p>
                        
                            <ul class="list">
                                <li> Sold By: <span class="fw-semi">${firstVariant.extra}</span></li>
                                <li> Item Number: <span class="fw-semi">${product.item_num}</span></li>
                                <li> Manufacturer: <span class="fw-semi">${product.manufacturer}</span></li>
                            </ul>
                            <div class="shipping_block flex-center">
                                <img class="mr-16 icon-car" src="https://olha1001.github.io/medicalmega/pdp-rediesign/img/common/car.svg" alt="icon shipping">
                                <div> 
                                    <p class="c-red text-up fw-semi l-t-05">Estimated shipping</p>
                                    <p class="c-gray">2-3 business days*</p>
                                </div>
                            </div>    
                            <p class="text-small text-center">*Sometimes by technical reasons delivery can took a bit longer up to 7 days. </p>
                            
                            <ul class="tabs-discription flex"> 
                                <li class="active">Product details</li>
                            </ul>
                            <div class="content-discription">
                                <div class="content-item active">${firstVariant.desc}</div>
                            </div>
                            ${pricingBlock('flex-center-between add-to-cart active')}
                            ${product.variants.length > 1 ? htmlAvailableOptions : ''}
                            ${pricingBlock('product_pricing')}
                        </div>
                        <section class="similar-products">
                            <h2>Similar Products</h2>
                            <div class="flex cards_similar"></div>
                        </section>
                    </div>`
                    //add html pdp
                    document.querySelector('#container-listing').insertAdjacentHTML('beforebegin', htmlProduct);

                    document.querySelectorAll('#breadcrumbs-pdp li').forEach(item => {
                        item.addEventListener('click', (e) => pushDataLayer(`Click on crumb - ${e.target.innerText}`, 'Breadcrumbs'))
                    })
                    //comes into view pricing product
                    window.addEventListener('scroll', () => {
                        if (isScrolledIntoView(document.querySelector('.product_pricing')) == true) {
                            removeActive('.add-to-cart')
                        } else {
                            addActive('.add-to-cart')
                        }
                    })

                    document.querySelector('.available-options .scroll-x') != null ? document.querySelector('.available-options .scroll-x').innerHTML = availableOptions() : '';

                    tns({
                        container: document.querySelector('.slider-main'),
                        autoplay: false,
                        items: 1,
                        axis: 'horizontal',
                        controls: false,
                        loop: false,
                        mouseDrag: true,
                        nav: true,
                        preventScrollOnTouch: 'auto',
                        swipeAngle: false,
                    });

                    let tabs = document.querySelectorAll('.tabs-discription li'), //tabs description
                        contents = document.querySelectorAll('.content-discription .content-item'); // content discription

                    tabs.forEach((tab, i) => {
                        tab.addEventListener('click', () => {
                            tab.parentElement.querySelector('.active').classList.remove('active');
                            contents[i].parentElement.querySelector('.active').classList.remove('active');
                            tab.classList.add('active');
                            contents[i].classList.add('active');
                            pushDataLayer(`Click at the ${tab.innerText} tab`, `Product section`)
                        })
                    })

                    if (product.variants.length > 2) {
                        let contentAvailableOptions = document.querySelector('.available-options .scroll-x');

                        tns({
                            container: contentAvailableOptions,
                            items: 2,
                            axis: 'horizontal',
                            controls: false,
                            loop: false,
                            mouseDrag: true,
                            nav: true,
                            preventScrollOnTouch: 'auto',
                            swipeAngle: false,
                        });
                    }

                    //checkbox choice
                    document.querySelectorAll('.available-options .checkbox').forEach((checkbox, index) => {
                        if (index == 0) {
                            checkbox.checked = true
                        }
                        checkbox.addEventListener('change', (e) => {
                            if (checkbox.checked) {
                                let optionPrice = checkbox.nextElementSibling.querySelector('.radio-check_price').innerText.replace('$', ''),
                                    qty = document.querySelectorAll('.product .calc-qty'),
                                    priceProduct = document.querySelectorAll('.product .add-cart .pr');

                                document.querySelectorAll('.product [name="product_variant_id"]').forEach((item, i) => {
                                    item.value = checkbox.dataset.variant;
                                    priceProduct[i].dataset.price = optionPrice;

                                    priceProduct[i].innerHTML = (+optionPrice * +qty[i].value).toFixed(2);
                                    if (qty[i].value == '') {
                                        priceProduct[i].innerHTML = optionPrice
                                    }
                                })

                            }
                            pushDataLayer('Click on available options', 'PDP')
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

        let optionMut = {
            childList: true,
            subtree: true,
            attributes: true
        }

        let mut = new MutationObserver(function (muts) {
            if (document.querySelector('.calc') != null) {
                document.querySelectorAll('.calc').forEach((el, i) => {
                    el.querySelector('.btn-calc_plus').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        pushDataLayer(`Click on plus button`,labelForEvents(e.target));

                        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'plus')
                    })
                    el.querySelector('.btn-calc_minus').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();

                        pushDataLayer(`Click on minus button`,labelForEvents(e.target));

                        changeQty(el.querySelector('.calc-qty'), el.nextElementSibling.querySelector('.pr'),'minus')
                    })
                    el.querySelector('.calc-qty').addEventListener('input', (e) => {
                        e.stopImmediatePropagation();
                        changeQty(e.target, el.nextElementSibling.querySelector('.pr'))
                    })
                    el.querySelector('.calc-qty').addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        pushDataLayer(`Click on quantity button`,labelForEvents(e.target));
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
                document.querySelectorAll('.add-cart').forEach((el, i) => {
                    el.addEventListener('click', (e) => {
                        e.stopImmediatePropagation();
                        postFetch('/cart.html',`api=c&cart_action=add&variant_id=${el.parentElement.querySelector('[name="product_variant_id"]').value}&quantity=${el.parentElement.querySelector('[name="quantity"]').value}&product_id=${el.parentElement.querySelector('[name="product_id"]').value}&ctoken=${mm.ctoken}`,'POST').then(data => {
                            cart();
                            addActive('.shopping-cart');
                        })
                        pushDataLayer(`Click on Add button`,labelForEvents(e.target));

                    })
                })
            }
            mut.observe(document, optionMut);
        });

        mut.observe(document, optionMut);
    }
};

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Total Redesign (mobile)',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1483840,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('event', 'total_redesign_mobile');
