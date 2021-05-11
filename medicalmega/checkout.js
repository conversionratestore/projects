let style = `
    <style>
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0; }
        input[type=number] {
            -moz-appearance: textfield;}
        .left {
            display: none;}
        .checkout-left h2.title, .checkout-left .title{
            padding-left: 0;}
        h2.title, .title {
            text-align: left;
            font-size: 24px;
            line-height: 29px;
            font-weight: 600;
            color: #222222;
            text-transform: capitalize;}
        button {
            border: none;
            cursor: pointer;}
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
            justify-content: center;
            align-items: center;}
        .btn.big {
            font-size: 24px;
            width: 100%;
            line-height: 49px;}
        .btn img {
            margin-left: 5px;}
        .payment {
            padding-top: 40px;
            width: calc(100% - 20px);}
        h3.title3, .title3 {
            text-align: left;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            text-transform: capitalize;
            color: #222222}
        .quantity-btn {
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            text-transform: capitalize;
            background-color: transparent;
            color: #666666;
            padding: 2px 0;}
        .quantity-btn[disabled] {
            color: #CCCCCC;}
        .quantity {
            background: #FFFFFF;
            border: 0.5px solid #CCCCCC;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #000000;}
        .checkout-product {
            padding: 15px 0;
            border-bottom: 0.5px solid #EEEEEE;}
        .checkout-product:last-child {
            border: none;}
        .checkout-product .quantity {
            padding: 4px 0;
            width: 25px;}
        .checkout-product .quantity-btn {
            width: 25px;}
        .quantity-row {
            display: flex;}
        .checkout-left {
            max-width: 542px;
            padding: 0;
            // display: grid;
            // justify-content: space-between;
            // grid-template-rows: 0fr 0fr 1fr;
            width: calc(100% - 304px);}
        .checkout-left .form {
            display: none;}
        .checkout-left .form.active {
            display: grid;
            grid-template-rows: 0fr 1fr 0fr;}
        .checkout-left .form .btn{
            margin-left: auto;
            min-width: 224px;
            margin-top: 30px;}
        .checkout-left_head {
            border-bottom: 0.5px solid #CCCCCC;
            padding: 15px 0;}
        .link {
            font-style: normal;
            font-weight: 450;
            font-size: 18px;
            line-height: 22px;
            text-decoration-line: underline;
            text-transform: capitalize;
            color: #C23D31;}
        .flex-center-between {
            display: flex;
            justify-content: space-between;
            align-items: center;}
        .step {
            display: flex;
            padding: 20px 0;
            align-items: center;}
        .step p {
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            text-transform: capitalize;
            color: #000000;
            opacity: 0.3;
            margin-top: 0;}
        .step-circle {
            border-radius: 50%;
            width: 36px;
            font-weight: bold;
            font-size: 18px;
            line-height: 36px;
            text-align: center;
            color: #FFFFFF;
            margin-right: 10px;
            background: #CCCCCC;}
        .step.active .step-circle {
            background: #C23D31;}
        .step.active p{
            opacity: 1;}
        .form-row {
            padding-top: 20px;
            margin-bottom: auto;
            display: grid;
            flex-wrap: wrap;
            grid-column-gap: 93px;
            grid-row-gap: 20px;
            grid-template-columns: repeat(2, 1fr);
            flex-wrap: wrap;}
        .form-col {
            min-width: 224px;}
        .form-name {
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 10px;
            display: block;
            color: #CCCCCC;}
        .form-input {
            width: -webkit-fill-available;
            background: #EDEDED;
            border: 0.5px solid #CCCCCC;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #666666;
            padding: 9px 10px;
            border-radius: 4px;}
        .checkout-right_head {
            border-bottom: 0.5px solid #CCCCCC;}
        .checkout-right_head .link {
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;}   
        .checkout-right {
            display: grid;
            width: 304px;
            background: rgba(238, 238, 238, 0.5);
            padding: 0 20px;
            border-radius: 4px;}
        .checkout-right_body {
            max-height: 308px;
            margin: 10px -10px 0 0;
            padding: 5px 10px 15px 0;
            overflow-y: auto;
            scrollbar-width: thin;
            scrollbar-color: #CCCCCC #666666;}
        .checkout-right_body::-webkit-scrollbar{
            background: #CCCCCC;
            width: 4px;
            height: 4px;}
        .checkout-right_body::-webkit-scrollbar-thumb{
            background: #666666;}
        .d-flex {
            display: flex;}
        .flex-column {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;}
        .checkout-product_img {
            border: 0.5px solid #EEEEEE;
            background-color: #fff;
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            margin-right: 10px;}
        .checkout-product_img img {
            margin: auto;}
        .checkout-product a {
            font-size: 10px;
            display: inline-flex;
            line-height: 12px;
            max-width: 125px;
            color: #000000;}
        .remove {
            width: 18px;
            height: 18px;
            background: url('https://i.ibb.co/RDTZtyZ/X.png') no-repeat center / contain;}
        .flex-between {
            display: flex;
            justify-content: space-between;}
        .total-price {
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #000000;}   
        .form-input::-webkit-input-placeholder, .form-input:-moz-placeholder, .form-input::-moz-placeholder, .form-input:-ms-input-placeholder {
            font-size: 16px;
            line-height: 20px;
            color: #666666;
            opacity: 0.5; }
        .checkout-right_footer {
            display: flex;
            justify-content: space-between;
            margin: auto -20px 0;
            padding: 20px;
            background: #222222;
            border-radius: 0px 0px 4px 4px;}
        .checkout-right_footer .altTd p, {
            display: block;}
        .checkout-right_footer .altTd p, .checkout-right_footer .altTd p b {
            font-style: normal;
            text-transform: capitalize;
            margin-bottom: 17px;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #CCCCCC;}
        .checkout-right_footer .altTd p:last-child, .checkout-right_footer .altTd p:last-child b {
            margin-bottom: 0;
            padding-top: 10px;
            font-weight: 450;
            font-size: 24px;
            line-height: 29px;
            color: #FFFFFF;}
        .total-values {
            text-align: right;}
        .relative{
            position: relative;}
        .btn-eye {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 40px;
            border: 0.5px solid #CCCCCC;
            background: #CCCCCC url('https://i.ibb.co/PQqLsQw/Eye.png') no-repeat center / 18px;
            border-radius: 0px 4px 4px 0px;}
        .select select{
            background: transparent;
            width: -webkit-fill-available;
            border: 0.5px solid #CCCCCC;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #666666;
            padding: 10px;
            appearance: none;
            border-radius: 4px;
            color: #666666;}
        .select {
            min-width: 160px;
            background: #EDEDED url('https://i.ibb.co/vHQtXct/expand-more-24px-2.png') no-repeat right center / 36px;
            position: relative;}
        .select.small {
            background-size: 25px;}
        .select.small select{
            padding: 4px 10px;}
        .checkbox {
            display: none;}
        .check {
            background: #EDEDED no-repeat center / 80%;
            border: 0.5px solid #CCCCCC;
            display: block;
            margin: 0 8px 0 30px;
            width: 20px;
            height: 20px;}
        .checkbox:checked ~ .check {
            background-image: url('https://i.ibb.co/Tm0B3v0/Vector.png');}
        .check+span {
            font-weight: 450;
            font-size: 14px;
            line-height: 17px;}
        .promotional-code input {
            max-width: 290px;}
        .promotional-code p{
            margin: 0;
            font-weight: 400;}
        .promotional-code p b {
            font-size: 18px;
            line-height: 22px;
            font-weight: 600;}
        .radio {
            width: 20px;
            height: 20px;
            position: relative;
            display: block;
            border-radius: 50%;
            margin-right: 6px;
            background: #EEEEEE;
            border: 1px solid #CCCCCC;}
        .radio:before, .radio:after {
            content: none;
            position: absolute;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);}
        .radio:before {
            border: 2px solid #C23D31;
            width: 100%;
            height: 100%;}
        .radio:after {
            background: #C23D31;
            width: 10px;
            height: 10px;}
        .checkbox:checked ~ .radio:after, .checkbox:checked ~ .radio:before {
            content: '';}
        .delivery-methods label {
            margin-bottom: 20px;}
        .delivery-methods label span {
            font-size: 14px;
            line-height: 17px;}
        .delivery-methods label span span{
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;}
        .c-red {
            color: #C23D31;}
        .max-385 {
            max-width: 385px;}
        .card {
            margin: 20px 0;}
        .card img {
            width: 50px;
            height: 40px;
            margin-right: 15px;}
        .card input{
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 5px 7px;}
        .card input::-webkit-input-placeholder, .card input:-moz-placeholder, .card input::-moz-placeholder, .card input:-ms-input-placeholder {
            font-size: 18px;
            line-height: 21px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #666666;
            opacity: 0.5; }
        .input-number {
            width: 54%}
        .input-date {
            text-align: center;
            width: 13%;}
        .input-cvv {
            text-align: center;
            width: 8%;}
        .bg-none {
            background-color: transparent;}
        .text-small {
            margin-top: 5px!important;
            font-style: normal;
            font-weight: normal!important;
            line-height: 15px;
            color: #000000;}
        .valign-center {
            display: flex;
            align-items: center;}
        .p-0 {
            padding: 0!important;}
        .pb-0 {
            padding-bottom: 0!important;}
        .pb-20 {
            padding-bottom: 20;}
        .pt-3 {
            padding-top: 15px;}
        .mt-auto {
            margin-top: auto;}
        .ml-0 {
            margin-left: 0!important;}
        .mr-10 {
            margin-right: 10px;}
    </style>
`

document.body.insertAdjacentHTML('afterbegin', style);

let checkout = `
<div class="flex-between">
    <div class="checkout-left">
        <div class="checkout-left_head flex-center-between">
            <h2 class="title">New client</h2>
            <a href="#" class="link">Returning client</a>
        </div>
        <div class="flex-center-between">
            <div class="step active">
                <div class="step-circle">1</div>
                <p class="step-text">Personal information</p>
            </div>
            <div class="step">
                <div class="step-circle">2</div>
                <p class="step-text">Shipping information</p>
            </div>
        </div>
        <form class="form active">
            <div class="form-row">
                <div class="form-col">
                    <label class="form-name">Your Name*</label>
                    <input type="text" placeholder="Name" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Email*</label>
                    <input type="email" placeholder="email@mail.com" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Your Surname*</label>
                    <input type="text" placeholder="Surname" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Password*</label>
                    <div class="relative">
                        <input type="password" class="form-input" required>
                        <button class="btn-eye" type="button"></button>
                    </div>
                </div>
            </div>
            <div class="mt-auto">     
                <button type="submit" class="btn">Choose Shipping Method <img src="https://i.ibb.co/r5RKgLr/Arrow-Right.png" alt="arrow"></button>
            </div>
        </form>
        <form class="form ">
            <h3 class="title3 pb-0">Shipping info</h3>
            <div class="form-row">
                <div class="form-col">
                    <label class="form-name">Country*</label>
                    <div class="select">
                        <select class="" id="state" onchange="if (!window.__cfRLUnblockHandlers) return false; onChangeField(this);">
                            <option value="Select State" selected style="color: #666666;opacity: 0.5;">Select State</option>
                            <option value="AL">ALABAMA</option>
                        </select>
                    </div>
                </div>
                <div class="form-col">
                    <label class="form-name">Adress line*</label>
                    <input type="email" placeholder="email@mail.com" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">State* (Only applicable to US)</label>
                    <input type="text" placeholder="State" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Zip / Postal Code*</label>
                    <input type="text" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">City*</label>
                    <input type="text" placeholder="City" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Phone*</label>
                    <input type="text" class="form-input" required>
                </div>
            </div>
            <div class="mt-auto">
                <button type="submit" class="btn">Next <img src="https://i.ibb.co/r5RKgLr/Arrow-Right.png" alt="arrow"></button>
            </div>
        </form>
        <form class="form">
            <div class="valign-center pt-3">
                <h3 class="title3 p-0">Billing info</h3>
                <label class="valign-center">
                    <input type="checkbox" class="checkbox">
                    <span class="check"></span>
                    <span>Copy from Shipping info</span>
                </label>
            </div>
            <div class="form-row">
                <div class="form-col">
                    <label class="form-name">Country*</label>
                    <div class="select">
                        <select class="" id="state" onchange="if (!window.__cfRLUnblockHandlers) return false; onChangeField(this);">
                            <option value="Select State" selected style="color: #666666;opacity: 0.5;">Select State</option>
                            <option value="AL">ALABAMA</option>
                        </select>
                    </div>
                </div>
                <div class="form-col">
                    <label class="form-name">Adress line*</label>
                    <input type="email" placeholder="email@mail.com" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">State* (Only applicable to US)</label>
                    <input type="text" placeholder="State" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Zip / Postal Code*</label>
                    <input type="text" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">City*</label>
                    <input type="text" placeholder="City" class="form-input" required>
                </div>
                <div class="form-col">
                    <label class="form-name">Phone*</label>
                    <input type="text" class="form-input" required>
                </div>
            </div>
            <div class="mt-auto">
                <button type="submit" class="btn">Next <img src="https://i.ibb.co/r5RKgLr/Arrow-Right.png" alt="arrow"></button>
            </div>
        </form>
        <form class="form">
            <h3 class="title3">Delivery Method</h3>
            <div class="delivery-methods">
                <label class="valign-center">
                    <input type="radio" name="radio-delivery-method" class="checkbox" checked>
                    <span class="radio"></span>
                    <span>
                        <span class="c-red"> Standard:</span>       
                        <span class="price">$8.49</span> 
                        (Free if your order total is more than $400)
                    </span>
                </label>
                <label class="valign-center">
                    <input type="radio" name="radio-delivery-method" class="checkbox">
                    <span class="radio"></span>
                    <span>
                        <span class="c-red">3 Business Days:</span>       
                        <span class="price">$18.49</span> 
                    </span>
                </label>
                <label class="valign-center">
                    <input type="radio" name="radio-delivery-method" class="checkbox">
                    <span class="radio"></span>
                    <span>
                        <span class="c-red">2 Business Days:</span>       
                        <span class="price">$35.00</span> 
                    </span>
                </label>
                <label class="valign-center">
                    <input type="radio" name="radio-delivery-method" class="checkbox">
                    <span class="radio"></span>
                    <span>
                        <span class="c-red">Next Business Days:</span>       
                        <span class="price">$56.00</span> 
                    </span>
                </label>
            </div>
            <div class="flex-center-between promotional-code">
                <p><b>Promotional Code </b> (Optional):</p>
                <input type="text" class="form-input">
            </div>
            <div class="mt-auto">
                <button type="submit" class="btn">Next <img src="https://i.ibb.co/r5RKgLr/Arrow-Right.png" alt="arrow"></button>
            </div>
        </form>
        <form class="form ">
            <div class="valign-center pt-3">
                <h3 class="title3">Card Details</h3>
                <label class="valign-center">
                    <input type="checkbox" class="checkbox">
                    <span class="check"></span>
                    <span>Remember my card for fututre transactions</span>
                </label>
            </div>
            <div>
                <div class="form-col max-385">
                    <label class="form-name">Name on Card:*</label>
                    <input type="text" class="form-input " required>
                </div>
                <div class="card">
                    <label class="form-name">Credit/Debit card:*</label>
                    <div class="flex-between">
                        <img src="https://i.ibb.co/6wvN9NF/card-type.png" alt="card type">
                        <input type="number" class="form-input input-number" placeholder="card number">
                        <input type="number" class="form-input input-date" placeholder="mm/yy">
                        <input type="number" class="form-input input-cvv" placeholder="cvv">
                    </div>
                </div>
            </div>
            <div class="form-col">
                <label class="form-name">Comments on your order:</label>
                <input type="text" class="form-input bg-none">
            </div>
            <h3 class="title3 pb-0">Easy and convenient period reordering</h3>
            <p class="text-small">If you want to have your medical supplies reordered on a regular basis, use our reordering feature to place your order automatically and have it sent once per your preferred period.</p>
            <div class="d-flex pt-3">
                <label class="valign-center mr-10">
                    <input type="checkbox" class="checkbox">
                    <span class="check ml-0"></span>
                    <span>Yes, please delivery my order every:</span>
                </label>
                <div class="select small">
                    <select>
                        <option value=""></option>
                    </select>
                </div>
            </div>
            <div class="mt-auto">
                <button type="submit" class="btn big">Proceed</button>
            </div>
        </form>
    </div>
    <div class="checkout-right">
        <div class="checkout-right_head flex-center-between">
            <h3 class="title3">Your order</h3>
            <a href="#" class="link">Returning client</a>
        </div>
        <div class="checkout-right_body"> </div>
        <div class="checkout-right_footer">
            <div class="altTd total-headings">
                <p><b>Sub Total:</b></p> 
                <p><b>Shipping:</b></p> 
                <p><b>Promocode:</b></p> 
                <p><b>Grand Total:</b></p> 
            </div>
            <div class="altTd total-values">
                <p>$ <b> ${justunoCart.subtotal }</b></p>   
                <p>$ <b> ${justunoCart.subtotal }</b></p>
                <p>- $ <b> ${justunoCart.subtotal }</b></p>   
                <p>$ <b> ${justunoCart.total }</b></p>
            </div>
        </div>
    </div>
</div>
`

document.querySelector('.payment').insertAdjacentHTML('afterbegin', checkout);

for (let i = 0; i < justunoCartItems.length; i++) {
    let product = `
        <div class="d-flex checkout-product">
            <a href="#" class="checkout-product_img"> <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/159009020613764049015ec6d9de9200c.jpg" alt="Image Of ${justunoCartItems[i].name}"></a>
            <div class="flex-column">
                <div class="flex-between">
                    <a href="#">${justunoCartItems[i].name}</a>
                    <button class="remove" type="button"></button>
                </div>
                <div class="flex-center-between">
                    <div class="quantity-row">
                        <button type="button" class="quantity-btn quantity-btn_minus" disabled>−</button>
                        <input type="number" name="quantity" value="${justunoCartItems[i].quantity}" class="quantity">
                        <button type="button" class="quantity-btn quantity-btn_plus">+</button>
                    </div>
                    <div class="total-price" data-price="${justunoCartItems[i].price}">$ 
                        <b>${justunoCartItems[i].price}</b>
                    </div>
                </div>
            </div>
        </div>
    `
    document.querySelector('.checkout-right_body').insertAdjacentHTML('beforeend', product);   
}

document.querySelectorAll('.remove').forEach((item, index) => {
    item.addEventListener('click', () => {
        item.closest('.checkout-product').remove();
        justunoCartItems.splice(index, 1);
        sumTotalPrice();
    });
});

function sumTotalPrice() {
    let sum = 0;  
    document.querySelectorAll('.checkout-right_body .total-price b').forEach((totalPrice) => {
        sum += parseFloat(totalPrice.innerHTML);
        document.querySelectorAll('.total-values b').forEach((totalValues) => {
            totalValues.innerHTML = `${sum.toFixed(2)}`;
        });
        justunoCart.total = sum.toFixed(2);
        justunoCart.subtotal = sum.toFixed(2);
    });
}

document.querySelectorAll('.quantity-row').forEach((quantity) => {
    quantity.querySelectorAll('.quantity-btn').forEach((button) => {
        button.addEventListener('click', () => {
            if (button.className == 'quantity-btn quantity-btn_plus') {
                button.previousElementSibling.value = parseInt(button.previousElementSibling.value) + 1;
                button.parentElement.querySelector('.quantity-btn_minus').disabled = false;
            }
            if (button.className == 'quantity-btn quantity-btn_minus') {
                if (button.nextElementSibling.value < 2) {
                    button.nextElementSibling.value = 1;
                    button.disabled = true;
                } else {
                    button.nextElementSibling.value = parseInt(button.nextElementSibling.value) - 1;
                } 
            }
            quantity.nextElementSibling.querySelector('b').innerHTML = `${(parseFloat(quantity.querySelector('.quantity').value) *  parseFloat(quantity.nextElementSibling.dataset.price)).toFixed(2)}`;
            sumTotalPrice();
        });
    });
    document.querySelector('.checkout-right_body').addEventListener('change', () => {
        quantity.nextElementSibling.querySelector('b').innerHTML = `${(parseFloat(quantity.querySelector('.quantity').value) *  parseFloat(quantity.nextElementSibling.dataset.price)).toFixed(2)}`;
        sumTotalPrice();
    });
});

document.querySelectorAll('.btn-eye').forEach((item) => {
    item.addEventListener('click', () => {
        const type = item.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password';
        item.previousElementSibling.setAttribute('type', type);
    });
});
