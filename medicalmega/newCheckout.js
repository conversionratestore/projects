let styleMain =`
<style>
    .confirmation-products::-webkit-scrollbar, .body-cart::-webkit-scrollbar {
        background: #CCCCCC;
        width: 4px;
        height: 4px;}
    .confirmation-products::-webkit-scrollbar-thumb, .body-cart::-webkit-scrollbar-thumb {
        background: #666666;}
    /* Chrome, Safari, Edge, Opera */
    input.quantity::-webkit-outer-spin-button,
    input.quantity::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input.quantity[type=number] {
      -moz-appearance: textfield;
    }
    .shopping-cart button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
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
        display: block;
    }
    .btn-next svg {
        margin-left: 8px;
    }
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
    .product-item > div:last-child {
        width: calc(100% - 87px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .product-item > div:last-child a {
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
    /*flex*/
    .flex {
        display: flex;
    }
    .justify-between {
        display: flex;
        justify-content: space-between;
    }
    .flex-center-between {
        display: flex!important;
        align-items: center;
        justify-content: space-between;
    }
    .flex-center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .items-center {
        display: flex!important;
        align-items: center;
    }
    .relative {
        position: relative;
    }
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
                        
                        <div class="total-price flex">$<b>${(+subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</b></div>
                    </div>
                </div>
            </li>`
}
//checkout header html 
let headerHTML = `
    <header class="header-checkout">
        <div class="flex-center-between container">
            <a href="/" class="logo">
                <img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-checkout.svg" alt="logo">
            </a>
            <div class="flex steps"></div>
        </div>
    </header> `

//add steps in header
let addStep = (query,index) => {
    for (let i = 0; i < obj['stepsName'].length; i++) {
        if (obj['stepsName'][i] != 'Billing information' && obj['stepsName'][i] != 'Delivery Method') {
            document.querySelector(query).insertAdjacentHTML('beforeend', `
            <div class="step items-center ${i < index ? 'checked' : i == index ? 'active' : ''}">
                <div class="circle">${i+1}</div>
                <p>${obj['stepsName'][i]}</p>
            </div>`)
        }
    }
}

let arrMouth = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styleMain)

    //cart product
    let cart = () => {
        let parent = href.includes('/checkout/step') || href.includes('/login.php') || href.includes('/register.php') || href.includes('/guest-checkout') ? '.order_body' : '.list-product';

        //get data
        postFetch('/cart.html',`api=c&cart_action=cart&ctoken=${mm.ctoken}`,'POST').then(data => {
            console.log(data)
            localStorage.setItem('dataCart', JSON.stringify(data));
            let products = data['items'];
            document.querySelector(parent).innerHTML = '';
            if (parent == '.order_body') {
                pricing('.order_pricing', data)  //add pricing for order
            } else {
                document.querySelector('.subtotal').innerHTML = data.subtotal != 0 ? `<p>Total:</p> <p>$<span>${(+data.subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>` : '';
                if (products.length < 1) {
                    document.querySelector(parent).innerHTML = `<div class="empty-cart">
                            <p>Your cart is currently empty.</p>
                            <button type="button" class="btn-next"><span>Shop now</span></button>
                        </div>`;
                    document.querySelector('.subtotal').style.display = 'none';
                    document.querySelector(parent).style.margin = 'auto'
                } else {
                    document.querySelector('.subtotal').style = '';
                    document.querySelector(parent).style = '';
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

        pricing('.order_pricing', dataCart) // set pricing
        let items = dataCart.items;
        for (let i = 0; i < items.length; i++) {
            document.querySelector('.confirmation-products').insertAdjacentHTML('beforeend', product(items[i].product_id, items[i].variant_id, items[i].quantity, items[i].subtotal, items[i].url, items[i].image_url, items[i].title, 1))
        }

        let height = document.querySelector('.confirmation-order .col:first-child').clientHeight;
        document.querySelector('.confirmation-products').style.height = height + 60 + 'px'
    }

    if ((href.includes('login.php') || href.includes('/register.php') || href.includes('/checkout') || href.includes('/guest-checkout')) && !href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php')) {
        //checkout
        let style = `
        <style>
            body {
                border: none;
            }
            .container {
                width: 100%;
                margin: 0 auto;
                padding-right: 15px;
                padding-left: 15px;
            }
            #wrap {
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
            .btn-back {
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: #1E3944;
                padding: 15px 8px;
            }
            .btn-back svg {
                margin-right: 8px;
            }
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
            <div class="container justify-between">
                <div class="col-left justify-between">
                        <div>
                            ${window.location.href.includes('/login.php') || window.location.href.includes('/register.php?') ? `<div class="flex-center-between head-login"><h3>Register</h3><a href="#" class="link">Sign in</a></div>` : ''}
                            <div class="head"><h4></h4></div>
                        </div>
                        <div class="foot flex-center-between">
                            <a class="btn-back items-center" href="#">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 9.32153V8.67847C15 8.5009 14.8657 8.35695 14.7 8.35695H4.998L7.668 5.50181C7.72479 5.44144 7.75674 5.35926 7.75674 5.27352C7.75674 5.18779 7.72479 5.10561 7.668 5.04524L7.242 4.59511C7.18567 4.53424 7.10899 4.5 7.029 4.5C6.94901 4.5 6.87233 4.53424 6.816 4.59511L3.132 8.537C3.04758 8.62736 3.0001 8.74995 3 8.87782V9.12218C3.00138 9.24977 3.04867 9.37186 3.132 9.463L6.816 13.4049C6.87233 13.4658 6.94901 13.5 7.029 13.5C7.10899 13.5 7.18567 13.4658 7.242 13.4049L7.668 12.9483C7.72444 12.8891 7.75624 12.8079 7.75624 12.7233C7.75624 12.6386 7.72444 12.5575 7.668 12.4982L4.998 9.64305H14.7C14.8657 9.64305 15 9.4991 15 9.32153Z" fill="#1E3944"/>
                                </svg>
                                <span></span>
                            </a>
                            <button class="btn-next items-center" type="submit">
                                <span>Next</span>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                                </svg>
                            </button>
                        </div>
                </div>
                <div class="order justify-between">
                        <div>
                            <div class="order_head flex-center-between">
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
        if ((href.includes('/login.php') || href.includes('/register.php')) && document.querySelector('.myAccount') != null) {
            document.querySelector('.col-left .head').after(document.querySelector('.myAccount'))
            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][0];
            document.querySelector('.myAccountleft').classList.add('active');
            addStep('.steps', 0)

            //click on 'Sign in/Register' button
            let linkHead = document.querySelector('.head-login .link'),
                titleHead = document.querySelector('.head-login h3');
            linkHead.addEventListener('click', (e) => {
                if (titleHead.innerHTML === 'Sign in') {
                    titleHead.innerHTML = 'Register';
                    linkHead.innerHTML = 'Sign in';
                    document.querySelector('.myAccountright').classList.remove('active')
                    document.querySelector('.myAccountleft').classList.add('active')
                } else {
                    titleHead.innerHTML = 'Sign in';
                    linkHead.innerHTML = 'Register';
                    document.querySelector('.myAccountleft').classList.remove('active')
                    document.querySelector('.myAccountright').classList.add('active')
                }
            })
            document.querySelector(' .myAccountleft dd:nth-child(5) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)
            document.querySelector(' .myAccountleft dd:nth-child(6) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)

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
        </form>
    `
        }
        let fname, lname, addr1, city, stateF, zip, country, phn, email; //for forms

        //ship/bill addresses
        let addressCurrentHtml = (fname, lname, addr1, city, state, zip, country, phone, type) => {
            return `
            <div class="address ${type === 'bill' ? 'bill' : 'ship'}">
                <div class="justify-between">
                    <div>
                        <p>${fname} ${lname}</p>
                        <p>${addr1}</p>
                        <p>${city}, ${state}, ${zip}</p>
                        <p>${country}</p>
                        <p>${phone}</p>
                    </div>
                    <button class="btn-edit" type="button">${type === 'ship' ? 'Edit Shipping Address' : 'Edit Billing Info'}</button>
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
                if (document.querySelector(`${parent} [name="${pre}${key}"]`) != null) {
                    document.querySelector(`${parent} [name="${pre}${key}"]`).value = obj[key];
                }
            }
        }
        
        if (href.includes('/checkout/step1') || href.includes('guest-checkout1.php')) {
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
                    document.querySelectorAll('#ship_options > li input')[index].checked = true
                })
            })
            document.querySelector('.col-left .delivery-method').insertAdjacentHTML('afterend',`
                <div class="promocode items-center">
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
            if (document.querySelector('#card_list') == null) {
                document.querySelector('.auto-reorder-header').style = 'margin-bottom: -15px!important';
            }
            document.querySelector('#cc_block > dl > div.ccInfo > dd:nth-child(3)').innerHTML = `Credit/Debit Card<span class="c-red"> *</span>`;

            document.querySelector('#save_cc_info') != null ? document.querySelector('#save_cc_info').insertAdjacentHTML('afterend','<span class="check2"></span>') : '';

            document.querySelector('.cc-recurring-setting').insertAdjacentHTML('beforebegin',`<label class="order-every flex-center-between"><span class="check2"></span>${document.querySelector('.cc-recurring-setting').innerHTML}</label>`)
            document.querySelector('.order-every .check2').before(document.querySelector('#cc-recurring-check'))
            document.querySelector('.btn-next span').innerHTML = 'Proceed';
            document.querySelector('#checkoutForm > p').innerHTML = document.querySelector('#checkoutForm > p').innerHTML.replace('Place Your Order Now','Proceed');

        }

        if (href.includes('/checkout/step3') ) {
            document.querySelector('#checkoutForm h3').innerHTML = `Card Details <img src="https://conversionratestore.github.io/projects/medicalmega/img/payment-cards.png" alt="icons">`
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
                                document.querySelector('.col-left .head h4').innerHTML = 'Billing information';
                                setBack()
                                document.querySelector('.ship-form.active').classList.remove('active')
                                document.querySelector('.bill-form').classList.add('active')
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
                            window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                } else {
                    postFetch('/api/v1/addresses', saveAddress('bill', fnameNew, fnameNew, addr1.value, city.value, stateF.value, zip.value, country.value, phn.value, email.value), 'POST').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            window.location.href = href.includes('guest-checkout') ? '/guest-checkout2.php' : `/checkout/step2`
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
                document.querySelector('#login_btn').click()
            } else if (document.querySelector('.myAccountleft.active') != null) {
                document.querySelector('[name="register"]').click()
            } else if (document.querySelector('.ship-form.active') != null) {
                address('ship')
            } else if (document.querySelector('.bill-form.active') != null) {
                address('bill')
            }  else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') != null && document.querySelector('.bill-form.edit') == null && document.querySelector('.ship-form.edit') == null) {
                console.log('next 2 step')
                if (href.includes('guest-checkout')) {
                    document.querySelector('#mainbody > div > form > div > input[type=image]').click();
                } else {
                    window.location.href = `https://medicalmega.com/checkout/step2`;
                }
            } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') == null && document.querySelector('.bill-form.active') == null) {
                document.querySelector('.address.ship').style.display = 'none'
                document.querySelector('.col-left .head h4').innerHTML = 'Billing information'; //change title
                //change back button
                setBack()
                //add billing form html
                console.log(state_item, countries_ship_item)
                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, 'active',''))
                //copy from Shipping
                document.querySelector('[name="shipping"]').addEventListener('click', (e) => copyFromShip(e.target, 'bill'))
            } else if (document.querySelector('.ship-form.edit') != null) {
                console.log('edit ship form')
                address('ship')
            } else if (document.querySelector('.bill-form.edit') != null) {
                console.log('edit bill form')
                address('bill')
            } else if (href.includes('checkout/step2') || href.includes('guest-checkout2.php')) {
                document.querySelector('form > div > input[type=image]').click()
            } else if (href.includes('checkout/step3') || href.includes('guest-checkout3.php')) {
                document.querySelector('#submitCheckout3').click()
            }
        })
    } 
    if (!href.includes('login.php') && !href.includes('/register.php') && !href.includes('/checkout') && !href.includes('/guest-checkout')) {
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
            width: 590px;
            transform: translateX(200px);
            transition: all 0.3s ease;
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
                margin: 0 auto;
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
            .slide {
                background: #FFFFFF;
                margin-right: 12px;
                padding: 20px;
                border: 1px solid #E3E6E7;
                border-radius: 4px;
            }
            .slide img {
                width: 80px;
                height: 80px;
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
                <div class="footer-cart flex-center-between">
                    <form action="https://medicalmega.com/guest-expresscheckout.php" method="POST" target="default" class="paypal-form-button">
                        <input type="image" name="submit" src="https://conversionratestore.github.io/projects/medicalmega/img/paypal.svg" border="0" align="top" alt="Check out with PayPal">
                    </form>
                    <p>or</p>
                    <a href="https://medicalmega.com/checkout/step1" class="btn-next items-center">
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

        //show/hide cart modal
        let showCart = () => document.querySelector('.shopping-cart').classList.add('active');
        let hideCart = () => document.querySelector('.shopping-cart').classList.remove('active');

        document.querySelector('.header-cart svg').addEventListener('click', () => {
            hideCart()
        })
        document.querySelector('.shopping-cart').addEventListener('click', (e) => {
            if(e.target.matches('.shopping-cart')) {
                hideCart()
            }
        })
        document.querySelector('.shoppingcart.tooltip-cart').addEventListener('click', (e) => {
            e.preventDefault();
            showCart()
        })
        //add products in slider
        let slideHTML = (url, urlImage, title, price, id, variantId, parent) =>  {
            let slide = `
                <div class="slide">
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

                changeQuantity(plus, minus, quantity, false);
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
    }


    !href.includes('/checkout/step4') && !href.includes('/guest-checkout4.php') ? cart() : '';
};