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
    .container {
        width: 100%;
        margin: 0 auto;
        padding-rigth: 15px;
        padding-left: 15px;
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
    }
    .step .circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid #9AA6AB;
        margin-right: 12px;
        font-weight: 400;
        font-size: 14px;
        line-height: 32px;
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
    }
    /*order*/
    .order {
        background: #FFFFFF;
        border: 1px solid #E3E6E7;
        border-radius: 8px;
        width: 336px;
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
     .order_body {
        max-height: 298px;
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
        border: none;
        cursor: pointer;
    }
    .remove svg {
        margin: auto;
    }
    .quantity-btn  {
        width: 18px;
        height: 32px;
        font-size: 21px;
        background: transparent;
        border: none;
        text-align: center;
        cursor: pointer;
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
           <div class="col-left">
                <div class="head"></div>
           </div>
           <div class="order">
                <div class="order_head flex-center-between">
                    <h4>Your Order</h4>
                    <a href="/" class="link">Continue Shopping</a>
                </div>
                <div class="order_body"></div>
                <ul class="order_foot"> </ul>
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
    'stepsName': ['Personal Information','Shipping Information','Payment Method','Confirmation'],
    'pricingArr':  {
        'subtotal': 'Sub total',
        'shipping':'Delivery fee',
        'processing_fee': 'Processing fee',
        'discount': 'Discount',
        'tax': 'Tax',
        'total': 'Grand Total'
    }
}

document.body.insertAdjacentHTML('afterbegin', style) // add styles
document.body.insertAdjacentHTML('afterbegin',headerHTML) // add header

//add steps in header
for (let i = 0; i < obj['stepsName'].length; i++) {
    let href = window.location.href
    document.querySelector('.steps').insertAdjacentHTML('beforeend', `
        <div class="step items-center">
            <div class="circle ${(href.includes('/login.php') && i == 0) ? 'active' : ''}">${i+1}</div>
            <p>${obj['stepsName'][i]}</p>
        </div>
    `)
}

//post
let postFetch = (body) => {
    return new Promise((resolve, reject) => {
        fetch('/cart.html', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: "POST",
            body: body
        }).then(res => res.json()).then(data => {
            console.log(data)
            resolve(data)
        })
    })
}
//order
let cart = () => {
    //get data
    postFetch(`api=c&cart_action=cart&ctoken=${mm.ctoken}`).then(data => {
        document.querySelector('.order_body').innerHTML = ''
        document.querySelector('.order_foot').innerHTML = ''
        //add pricing for order
        let pricing = obj['pricingArr']
        for (let key in pricing) {
            console.log(key, pricing[key])
            for (let keyData in data) {
                console.log(keyData, data[keyData])
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
                postFetch(`api=c&cart_action=remove&variant_id=${remove[i].closest('.checkout-product').dataset.variantId}&ctoken=${mm.ctoken}`).then(data => cart())
            })
            //update product
            let plus = document.querySelectorAll('.quantity-btn_plus'),
                minus = document.querySelectorAll('.quantity-btn_minus'),
                quantity = document.querySelectorAll('.quantity');

            plus[i].addEventListener('click', () => {
                quantity[i].value = +quantity[i].value + 1;
                quantity[i].parentElement.querySelector('.quantity-btn_minus').disabled = false;

                postFetch(`api=c&cart_action=update&variant_id=${plus[i].closest('.checkout-product').dataset.variantId}&quantity=${quantity[i].value}&ctoken=${mm.ctoken}`).then(data => cart())
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
                postFetch(`api=c&cart_action=update&variant_id=${minus[i].closest('.checkout-product').dataset.variantId}&quantity=${quantity[i].value}&ctoken=${mm.ctoken}`).then(data => cart())

            })
        }
    })
}
cart()
