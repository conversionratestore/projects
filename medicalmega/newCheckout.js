let style = `
<style>
    body {
        border: none;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    .header-checkout *, .wrapper-checkout * {
        box-sizing: border-box;
    }
    .container {
        width: 100%;
        margin: 0 auto;
        padding-right: 15px;
        padding-left: 15px;
    }
    #wrap {
        /*display: none;*/
    }
    /*header*/
    .header-checkout {
        background: #FBFBFB;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
        position: sticky;
        top: 0;
        z-index: 99;
        padding: 39px 0;
    }
    .header-checkout .container {
        max-width: 1270px;
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
    .wrapper-checkout dd > input {
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
    .wrapper-checkout dd > select {
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
        padding-left: 16px;
        font-size: 14px;
        line-height: 150%;
        color: rgba(52, 77, 87, 0.8);
        display: block;
    }
    .c-red {
        color: rgba(235, 87, 87, 0.8);
    }
    dd input[type=checkbox] {
        margin-right: 8px!important;
        width: fit-content;
    }
    .myAccountleft > form > dd:nth-child(7) {
        font-size: 14px;
        line-height: 150%;
        color: #091114;
        margin-bottom: 0!important;
    }
    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .wrapper-checkout form dd {
        margin-bottom: 28px!important;
        max-width: 405px;
        text-align: left;
    }
    .wrapper-checkout dd input::-webkit-input-placeholder {
        color: rgba(154, 166, 171, 0.8);
        font-size: 16px;
        line-height: 150%;}
    .wrapper-checkout dd input:-moz-placeholder {
        color: rgba(154, 166, 171, 0.8);
        font-size: 16px;
        line-height: 150%; }
    .wrapper-checkout dd input::-moz-placeholder {
        color: rgba(154, 166, 171, 0.8);
        font-size: 16px;
        line-height: 150%; }
    .wrapper-checkout dd input:-ms-input-placeholder {
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
    button.btn-next {
        background: #1E3944;
        border-radius: 100px;
        padding: 0 48px;
        font-weight: 700;
        font-size: 14px;
        line-height: 48px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FBFBFB;
    }
    .btn-next svg {
        margin-left: 8px;
    }
    /*order*/
    .order {
        background: #FFFFFF;
        border: 1px solid #E3E6E7;
        border-radius: 8px;
        width: 336px;
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
    .link {
        font-size: 12px;
        line-height: 150%;
        color: #96280F;
        padding: 2px 0;
        border-bottom: 1px solid rgba(150, 40, 15, 0.5);
    }
    .link[hidden] {
        display: none!important;
    }
     .order_body {
        min-height: 298px;
        max-height: 335px;
        padding: 0 40px;
        overflow-y: auto;
     }
      .order_body::-webkit-scrollbar{
        background: #CCCCCC;
        width: 4px;
        height: 4px;}
    .order_body::-webkit-scrollbar-thumb{
        background: #666666;}
     .order_foot {
        background: #F0F1F2;
        padding: 40px;
     }
     .order_foot li:not(:last-child) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #344D57;
        margin-bottom: 8px;
     }
     .order_foot li:last-child {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #091114;
        padding-top: 20px;
        border-top: 1px solid #E0E4E5;
     }
    .checkout-product {
        padding: 20px 0;
        border-bottom: 1px solid #E0E4E5;
    }
    .checkout-product:last-child {
        border-bottom: none;
    }
    .checkout-product > div:last-child {
        width: calc(100% - 87px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .checkout-product > div:last-child a {
        font-size: 12px;
        line-height: 150%;
        color: #6D7E85;
        text-align: left;
        display: block;
        margin-bottom: 12px;
    }
    .checkout-product_img {
        margin-right: 4px;
    }
    .checkout-product_img img {
        width: 80px;
        height: 80px;
        flex-shrink: 0;
    }
    .total-price {
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        color: #1E3944;
    }
    .remove {
        position: absolute;
        left: 0;
        top: 0;
        background: #FFFFFF;
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
    .checkbox {
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
    .ml-auto {
        margin-left: auto;
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
 
    /*flex*/
    .flex {
        display: flex;
    }
    .justify-between {
        display: flex;
        justify-content: space-between;
    }
    .flex-center-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .items-center {
        display: flex;
        align-items: center;
    }
    .relative {
        position: relative;
    }
</style>`

let headerHTML = `
<header class="header-checkout">
    <div class="flex-center-between container">
        <a href="/" class="logo">
            <img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-checkout.svg" alt="logo">
        </a>
        <div class="flex steps"></div>
    </div>
</header>
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
                    <div class="order_body"></div>
                </div>
                <ul class="order_foot"></ul>
           </div>
    </div>
</div>
`

let product = (id, variantId, quantity, subtotal, url, imageUrl, title) => {
    return `<div class="flex checkout-product" data-id="${id}" data-variant-id="${variantId}">
                <div class="relative">
                    <a href="${url}" class="checkout-product_img"> 
                        <img src="${imageUrl}" alt="${title}">
                    </a>
                     <button class="remove" type="button">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.60688 6L9.68305 2.3332C9.73461 2.27227 9.69126 2.17969 9.61157 2.17969H8.67641C8.62133 2.17969 8.5686 2.2043 8.53227 2.24648L5.99516 5.27109L3.45805 2.24648C3.4229 2.2043 3.37016 2.17969 3.31391 2.17969H2.37876C2.29907 2.17969 2.25571 2.27227 2.30727 2.3332L5.38344 6L2.30727 9.6668C2.29572 9.68038 2.28831 9.69699 2.28592 9.71466C2.28353 9.73233 2.28626 9.75031 2.29379 9.76648C2.30131 9.78264 2.31332 9.79631 2.32838 9.80585C2.34344 9.81539 2.36093 9.82041 2.37876 9.82031H3.31391C3.36899 9.82031 3.42172 9.7957 3.45805 9.75352L5.99516 6.72891L8.53227 9.75352C8.56743 9.7957 8.62016 9.82031 8.67641 9.82031H9.61157C9.69126 9.82031 9.73461 9.72774 9.68305 9.6668L6.60688 6Z" fill="#6D7E85"/>
                        </svg>
                     </button>
                </div>
                <div>
                    <a href="${url}">${title}</a>
                    <div class="flex-center-between">
                        <div class="items-center">
                            <button type="button" class="quantity-btn quantity-btn_minus">−</button>
                            <input type="number" name="quantity" value="${quantity}" class="quantity">
                            <button type="button" class="quantity-btn quantity-btn_plus">+</button>
                        </div>
                        <div class="total-price flex">$<b>${subtotal.toFixed(2)}</b></div>
                    </div>
                </div>
            </div>`
}

let obj = {
    'stepsName': ['Personal information','Shipping information','Billing information','Delivery Method','Payment Method','Confirmation'],
    'back' : {
        'personal information' : ['Back to Cart', '/cart.html'],
        'shipping information' : ['Back to Cart','/cart.html'],
        'billing information' : ['Back to Shipping Info','/checkout/step1'],
        'delivery method' : ['Back To Address Info','/checkout/step1'],
        'payment method': ['Back to Delivery Method','/checkout/step2']
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
let href = window.location.href;
let headerFetchAddress = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cart-Token': mm.ctoken,
    'x-api-key': 'Ojza12AGCMUzG6omNmSK8Qx2mdgiSVB5'
}

document.body.insertAdjacentHTML('afterbegin', style) // add styles
document.body.insertAdjacentHTML('afterbegin',headerHTML) // add header

//add steps in header
for (let i = 0; i < obj['stepsName'].length; i++) {
    if (obj['stepsName'][i] != 'Billing information' && obj['stepsName'][i] != 'Delivery Method') {
        document.querySelector('.steps').insertAdjacentHTML('beforeend', `
        <div class="step items-center">
            <div class="circle">${i+1}</div>
            <p>${obj['stepsName'][i]}</p>
        </div>`)
    }
}

//post
let postFetch = (host,body) => {
    return new Promise((resolve, reject) => {
        fetch(host, {
            headers: headerFetchAddress,
            method: "POST",
            body: body
        }).then(res => res.json()).then(data => {
            console.log(data)
            resolve(data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    })
}
//order
let cart = () => {
    //get data
    postFetch('/cart.html',`api=c&cart_action=cart&ctoken=${mm.ctoken}`).then(data => {
        document.querySelector('.order_body').innerHTML = ''
        document.querySelector('.order_foot').innerHTML = ''
        //add pricing for order
        let pricing = obj['pricingArr']
        for (let key in pricing) {
            for (let keyData in data) {
                if (key == keyData && data[keyData] != 0) {
                    document.querySelector('.order_foot').insertAdjacentHTML('beforeend', `
                    <li class="justify-between">
                        <p>${pricing[key]}:</p>
                        <p>$<span>${data[keyData]}</span></p>
                    </li>`)
                }
            }
        }
        //product actions
        let products = data['items'];
        for (let i = 0; i < products.length; i++) {
            //add products
            document.querySelector('.order_body').insertAdjacentHTML('beforeend', product(products[i].product_id, products[i].variant_id, products[i].quantity, products[i].subtotal, products[i].url, products[i].image_url, products[i].title))

            //remove product
            let remove = document.querySelectorAll('.remove');
            remove[i].addEventListener('click', (e) => {
                postFetch('/cart.html',`api=c&cart_action=remove&variant_id=${remove[i].closest('.checkout-product').dataset.variantId}&ctoken=${mm.ctoken}`).then(data => cart())
            })
            //update product
            let plus = document.querySelectorAll('.quantity-btn_plus'),
                minus = document.querySelectorAll('.quantity-btn_minus'),
                quantity = document.querySelectorAll('.quantity');

            quantity[i].addEventListener('change', () => {
                if (quantity[i].value < 1) {
                    quantity[i].value = 1
                }
                postFetch('/cart.html',`api=c&cart_action=update&variant_id=${quantity[i].closest('.checkout-product').dataset.variantId}&quantity=${quantity[i].value}&ctoken=${mm.ctoken}`).then(data => cart())
            })
            plus[i].addEventListener('click', () => {
                quantity[i].value = +quantity[i].value + 1;
                quantity[i].parentElement.querySelector('.quantity-btn_minus').disabled = false;

                postFetch('/cart.html',`api=c&cart_action=update&variant_id=${plus[i].closest('.checkout-product').dataset.variantId}&quantity=${quantity[i].value}&ctoken=${mm.ctoken}`).then(data => cart())
            })
            if (minus[i].nextElementSibling.value < 2) {
                minus[i].disabled = true;
            } else {
                minus[i].disabled = false;
            }
            minus[i].addEventListener('click', () => {
                if (minus[i].nextElementSibling.value < 2) {
                    minus[i].nextElementSibling.value = 1;
                    minus[i].disabled = true;
                } else {
                    minus[i].nextElementSibling.value = +minus[i].nextElementSibling.value - 1;
                }
                postFetch('/cart.html',`api=c&cart_action=update&variant_id=${minus[i].closest('.checkout-product').dataset.variantId}&quantity=${quantity[i].value}&ctoken=${mm.ctoken}`).then(data => cart())
            })
        }
    })
}
cart()

//login/register step
if ((window.location.href.includes('/login.php') || window.location.href.includes('/register.php')) && document.querySelector('.myAccount') != null) {
    document.querySelector('.col-left .head').after(document.querySelector('.myAccount'))
    document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][0];
    document.querySelector('.myAccountleft').classList.add('active');

    document.querySelectorAll('.step')[0].classList.add('active')

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

let shipFormHtml = (state, countries_ship) => {
   return `
    <form class="ship-form active">
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
        <dd style="width: 100%;">
            <label>
                <input name="billing" type="checkbox" class="checkbox">
                <span>My Billing info is different</span>
            </label>
        </dd>
    </form>`
}
let billFormHtml = (state, countries_ship, active) => {
    return `
    <form class="bill-form ${active}">
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
        ${type === 'ship' ? '<a href="#" class="link">View Your Billing Info</a>' : ''} 
    </div>`
}

//copy from shipping
let copyFromShip = (address, checkboxShip, formType) => {
    checkboxShip.addEventListener('click', (e) => {
        if (e.target.checked) {
            for (const keyShip in address) {
                console.log(keyShip, address[keyShip])
                if (document.querySelector(`.${formType}-form dd [name="${keyShip}"]`) != null && address[keyShip] != '') {
                    document.querySelector(`.${formType}-form dd [name="${keyShip}"]`).value = address[keyShip]
                }
            }
        }
    })
}
//step 2 "Shipping Information"
let currentAddressShip;
if (href.includes('/checkout/step1') || href.includes('/checkout/step2')) {
    document.querySelectorAll('.step')[0].classList.add('checked');
    document.querySelectorAll('.step')[1].classList.add('active');
}
if (href.includes('/checkout/step1') ) {
    document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];
    fetch(`/api/v1/addresses`, {
        headers: headerFetchAddress,
        method: "GET",
    }).then(res => res.json()).then(data => {
        console.log(data)
        let addresses = data['addresses'];
        if (!!addresses && addresses.length > 0) {
            //Shipping Information - current users
            for (let i = 0; i < addresses.length; i++) {
                if (addresses[i].type === 'ship') {
                    currentAddressShip = addresses[i]
                }
                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', addressCurrentHtml(addresses[i].fname, addresses[i].lname, addresses[i].addr1, addresses[i].city, addresses[i].state, addresses[i].zip, addresses[i].country, addresses[i].phn, addresses[i].type))
                fname = addresses[i].fname;
                lname = addresses[i].lname;
            }
            if (document.querySelector('.address.bill') != null) {
                document.querySelector('.address .link').addEventListener('click', (e) => {
                    e.target.hidden = true;
                    document.querySelector('.address.bill').style.display = 'block';
                })
            } else {
                document.querySelector('.address .link').hidden = true;
            }
        } else {
            //Shipping Information - not filled
            document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state, countries_ship))
            document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state, countries_ship, ''))
            copyFromShip(currentAddressShip, document.querySelector('[name="shipping"]'), 'bill')
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

if (href.includes('/checkout/step2')) {
    document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][3];
    document.querySelectorAll('#ship_options > li').forEach((item, index) => {
        let type = item.querySelector('p > i').innerText,
            text = '',
            price = item.querySelector('p > b').innerText;

        if (item.querySelectorAll('p').length > 1) {
            text = item.querySelectorAll('p')[item.querySelectorAll('p').length - 1].innerText
        }
        document.querySelector('.col-left .foot').insertAdjacentHTML('beforebegin',`<div class="delivery-method"></div>`)
        document.querySelector('.delivery-method').insertAdjacentHTML('beforeend', deliveryMethodHtml(index, type, text, price))
        document.querySelectorAll('[name="radio-method"]')[index].addEventListener('input', (e) => {
            document.querySelectorAll('#ship_options > li input')[index].checked = true
        })
    })
}

//set text for back button
let setBack = () => {
    document.querySelector('.btn-back span').innerHTML = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][0]
    document.querySelector('.btn-back').href = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][1]
}
setBack()

//set * request for label
document.querySelectorAll('label').forEach(el => {
    if (el.innerHTML.includes('*') && el.innerHTML.includes('c-red')) {
        el.innerHTML = el.innerHTML.split('*').join('<span class="c-red"> *</span>')
    }
})

//add click on next button
document.querySelector('.btn-next').addEventListener('click', () => {
    if (document.querySelector('.myAccountright.active') != null) {
        document.querySelector('#login_btn').click()
    } else if (document.querySelector('.myAccountleft.active') != null) {
        document.querySelector('[name="register"]').click()
    } else if (document.querySelector('.ship-form') != null || document.querySelector('.bill-form') != null) {
        let address = (type) => {
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
            console.log(type,fname,lname,addr1,city,stateF,zip,country,phn,email)
            let errorsFun = (dataErrors) => {
                dataDD.forEach(item => {
                    item.classList.remove('error')
                    item.querySelector('i').innerHTML = ''
                })
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
                        }
                    }
                }
            }
            if (document.querySelector(`.ship-form.active`) != null) {
                if (document.querySelector(`.ship-form .checkbox[name="billing"]`).checked) {
                    postFetch('/api/v1/addresses', saveAddress('ship',fname.value,lname.value,addr1.value,city.value,state.value,zip.value,country.value,phn.value,email.value)).then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            postFetch('/api/v1/addresses', saveAddress('bill',fname.value,lname.value,addr1.value,city.value,state.value,zip.value,country.value,phn.value,email.value)).then(dataBill => {
                                console.log(dataBill)
                                window.location.href = 'https://medicalmega.com/checkout/step2'
                            })
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                } else {
                    postFetch('/api/v1/addresses', saveAddress('ship',fname.value,fname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value)).then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][2];
                            setBack()
                            document.querySelector('.ship-form.active').classList.remove('active')
                            document.querySelector('.bill-form').classList.add('active')
                        } else {
                            errorsFun(dataErrors)
                        }
                    })

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
                postFetch('/api/v1/addresses', saveAddress('bill',fnameNew,fnameNew,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value)).then(data => {
                    console.log(data)
                    let dataErrors = data.errors;
                    if (dataErrors.length < 1) {
                        window.location.href = 'https://medicalmega.com/checkout/step2'
                    } else {
                        errorsFun(dataErrors)
                    }
                })
            }
        }

        if (document.querySelector('.ship-form.active') != null) {
            address('ship')
        }
        if (document.querySelector('.bill-form.active') != null) {
            address('bill')
        }
    } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') != null) {
        window.location.href = `https://medicalmega.com/checkout/step2`
    } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') == null && document.querySelector('.bill-form.active') == null) {
        document.querySelector('.address.ship').style.display = 'none'
        document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][2];
        setBack()
        document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state, countries_ship, 'active'))
        copyFromShip(currentAddressShip, document.querySelector('[name="shipping"]'), 'bill')
    } else if (window.location.href.includes('checkout/step2')) {
        document.querySelector('form > div > input[type=image]').click()
    }
})
