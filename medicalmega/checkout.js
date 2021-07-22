window.onload  = function () {
    document.body.insertAdjacentHTML('afterbegin', `
    <style>
        .registerOnLogin dt, .left, .mainleft, .guest_checkout_button2, .address_book_new .small_block .head2 img, .payment h5, .altPayment, form div[align="right"] {
            display: none;}
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0; }
        input[type=number] {
            -moz-appearance: textfield;}
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
        .payment,  #login_btn {
            width: 100%;}
        .btn, #login_btn, .address_book_new .small_block .head2,  #step1_form div[align="right"] input {
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
        #step1_form div[align="right"] input {
            max-width: 224px!important;
            padding: 0;
            width: 100%;
            margin: 0!important;}
        #step1_form div[align="right"] {
            margin: 30px 0 0 0!important;
            clear: both;
            position: relative;}
        #step1_form div.copy_bill[align="right"] {
            margin-top: 0!important;}
        .address_book_new .small_block .head2 {
            font-size: 12px!important;}
        .btn.big {
            font-size: 24px;
            width: 100%;
            line-height: 49px;}
        .btn img {
            margin-left: 5px;}
        #mainbody {
            padding: 40px 0;}
        h3.title3, .title3 {
            text-align: left;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            text-transform: capitalize;
            color: #222222}
        .quantity-btn {
            display: none;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            text-transform: capitalize;
            background-color: transparent;
            color: #666666;
            padding: 2px 0;}
        #mainbody .quantity-btn  {
            display: block;}
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
        #mainbody .quantity-row {
            padding-left: 0 ;
            display: flex;}
        .checkout-left {
            max-width: 542px;
            padding: 0;
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
        .myAccount label, #editor_fields label {
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 10px;
            display: block;
            color: #CCCCCC;}
        .myAccount {
            margin: 0;
            padding: 20px 0;
            width: 100%;}
        .myAccountright {
            display: none;
            width: 100%; }
        .myAccountleft {
            width: 100%; }
        .registerOnLogin {
            padding: 0;}
        .registerOnLogin dd input[type=text], #editor_fields input[type=text], #editor_fields select, .registerOnLogin dd input[type=password], .registerOnLogin dd select {
            width: -webkit-fill-available;
            background: #EDEDED;
            height: auto;
            border: 0.5px solid #CCCCCC;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #666666;
            padding: 9px 10px;
            margin-bottom: 20px;
            border-radius: 4px;}
        .checkout-right_head {
            padding: 22px 0 15px;
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
        input::-webkit-input-placeholder, input:-moz-placeholder, input::-moz-placeholder, input:-ms-input-placeholder {
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
        [type="checkbox"], #make_primary[type="checkbox"] {
            display: none!important;}
        .check {
            background: #EDEDED no-repeat center / 80%;
            border: 0.5px solid #CCCCCC;
            display: block;
            margin: 0 8px 0 0;
            width: 20px;
            height: 20px;}
        [type="checkbox"]:checked ~ .check {
            background-image: url('https://i.ibb.co/Tm0B3v0/Vector.png');}
        .check+span {
            color: #222222;
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
            display: flex!important;
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
        .registerOnLogin {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap; }
        .registerOnLogin dd {
            padding: 0!important;
            width: 50%;
            max-width: 224px; }
        .myAccountleft .registerOnLogin button {
            width: 100%;
            background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
            border: none;
            border-radius: 4px;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 42px;
            display: flex;
            align-items: center;
            text-align: center;
            text-transform: capitalize;
            color: #FFFFFF;
            padding: 0 30px;
            position: relative;}
        .myAccountleft .registerOnLogin dd:last-child {
            margin-left: auto;}
        .btn-next  {
            max-width: 224px;
            margin-left: auto;
            width: 100%;}
        .myAccountleft .registerOnLogin button:after, #login_btn:after, #step1_form div[align="right"]:after, .btn-next:after {
            content: '';
            margin-left: 4px;
            background: url(https://conversionratestore.github.io/projects/medicalmega/img/ArrowRight.svg) no-repeat right center / contain;
            width: 24px;
            height: 24px; }
        #step1_form div[align="right"]:after {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;}
        .address_book_new .small_block {
            width: 50%!important;
            clear: both;
            max-width: 224px; }
        .address_book_new .ship_small {
            margin-left: 0!important;}
        .address_book_new .small_block .radio_content {
            z-index: 2;}
        .address_book_new .small_block .head {
            display: none; } 
        .editor_left, .editor_right {
            display: flex!important;
            flex-wrap: wrap;
            justify-content: space-between; 
            width: 100%!important;}
        .editor_left div, .editor_right div{
            width: 100%;
            max-width: 224px;}
        .address_book_new .editor .editor_right {
            margin-top: 20px;
            padding-left: 0!important;}
        #step1_form {
            padding-bottom: 20px;}
        .address_book_new .small_block .radio_content .radio_cont .edit {
            padding-top: 0;}
    </style>`);

    let step = `
<div class="flex-center-between">
    <div class="step active">
        <div class="step-circle">1</div>
        <p class="step-text">Personal information</p>
    </div>
    <div class="step">
        <div class="step-circle">2</div>
        <p class="step-text">Shipping information</p>
    </div>
</div>`;

    document.querySelector('#mainbody').insertAdjacentHTML('afterbegin', `
<div class="flex-between">
    <div class="checkout-left">
        <div class="checkout-left_head flex-center-between">
            <h2 class="title">New client</h2>
            <p class="link log active">Returning client</p>
        </div>
    </div>
    <div class="checkout-right">
        <div>
            <div class="checkout-right_head flex-center-between">
                <h3 class="title3">Your order</h3>
                <a href="#" class="link">Returning client</a>
            </div>
            <div class="checkout-right_body"></div>
        </div>
        <div class="checkout-right_footer">
            <div class="altTd total-headings">
                <p><b>Sub Total:</b></p> 
                <p><b>Grand Total:</b></p> 
            </div>
            <div class="altTd total-values">
                <p>$ <b></b></p>   
                <p>$ <b></b></p>
            </div>
        </div>
    </div>
</div>`);

    if(localStorage.getItem('productsStored')) {
        let justunoCartItems = JSON.parse(localStorage.getItem('productsStored'));
        for (let i = 0; i < justunoCartItems.length; i++) {
            let product = `
            <div class="d-flex checkout-product">
                <a href="${justunoCartItems[i].link}" class="checkout-product_img"> <img src="${justunoCartItems[i].img_src}" alt="Image Of ${justunoCartItems[i].name}"></a>
                <div class="flex-column">
                    <div class="flex-between">
                        <a href="#">${justunoCartItems[i].title}</a>
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
        });
    }

    sumTotalPrice();

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
    if (document.querySelector('.myAccount')) {

        document.querySelector('.checkout-left_head').after(document.querySelector('.myAccount'));
        document.querySelectorAll('.myAccountleft dd')[5].insertAdjacentHTML('afterbegin',`  
    <label class="valign-center">
        <span class="check"></span>
        <span>Email Me Order Updates and Specials</span>
    </label>`);
        document.querySelectorAll('.myAccountleft dd')[5].setAttribute('style','max-width: 100%;width: 100%;color: transparent;');
        document.querySelector('.myAccountleft dd .check').before(document.querySelector('[name="subscribe"]'));
        document.querySelector('.checkout-left_head').insertAdjacentHTML('afterend', step);
        document.querySelector('.myAccountleft .registerOnLogin button').innerHTML = `Register Now!`;
        document.querySelector('#login_btn').innerHTML = `LOGIN`;
        document.querySelector('.log').addEventListener('click', (e) => {
            let _this = e.target;
            _this.classList.toggle('active');
            if (_this.classList.contains('active')) {
                _this.innerHTML = 'Returning client';
                document.querySelector('.checkout-left_head .title').innerHTML = 'New Client';
                document.querySelector('.myAccountright').style.display = 'none';
                document.querySelector('.myAccountleft').style.display = 'block';
            } else {
                _this.innerHTML = 'Returning new client';
                document.querySelector('.checkout-left_head .title').innerHTML = 'Client';
                document.querySelector('.myAccountleft').style.display = 'none';
                document.querySelector('.myAccountright').style.display = 'block';
            }
        });
    }

    if (location.pathname == '/checkout/step1') {
        if (document.querySelectorAll('.payment table.altPayment tr')) {
            let productsStored = [];
            document.querySelectorAll('.payment table.altPayment tr .product-cell-inner').forEach((el) => {
                productsStored.push({
                    'product_id': el.closest('tr').querySelector('[name="cp_id"]').value,
                    'quantity': el.closest('tr').querySelector('.product-quantity').value,
                    'price': el.closest('tr').querySelector('.unit-price b').innerHTML.replace('$ ',''),
                    'product_variant_id': el.closest('tr').querySelector('[name="option_id"]').value,
                    'img_src': el.querySelector('a img').getAttribute('src'),
                    'link': el.querySelector('.product-description a').getAttribute('href'),
                    'title': el.querySelector('.product-description a').innerHTML,
                });
                localStorage.setItem('productsStored', JSON.stringify(productsStored));
            });
        }

        document.querySelector('.payment').style.display = 'none';
        document.querySelector('.checkout-left_head').insertAdjacentHTML('afterend', step);
        document.querySelectorAll('.step')[0].classList.remove('active');
        document.querySelectorAll('.step')[1].classList.add('active');
        document.querySelector('.checkout-left_head .title ').innerHTML = 'Addres Book';
        document.querySelector('.checkout-left_head .log ').style.display = 'none';
        document.querySelectorAll('.checkout-left .flex-center-between')[1].after(document.querySelector('#step1_form'));
        document.querySelector('#copy_bill').insertAdjacentHTML('afterend',`<span class="check"></span>`);
        document.querySelector('#make_primary').insertAdjacentHTML('afterend',`<span class="check"></span>`);

        document.querySelector('.bill_small').parentElement.classList.add('flex-between');
        document.querySelector('#step1_form').insertAdjacentHTML('afterend',`<button type="button" class="btn btn-next">Next</button>`)
        document.querySelector('.btn.big').addEventListener('click', () => {
            document.querySelector('form div[align="right"] input').click();
        });
    }
    if(location.pathname == '/checkout/step2') {
        document.body.insertAdjacentHTML('afterbegin', `
    <style>
    .altPayment, #mainbody .checkout-left_head {
        display: none;}
    .primaryInfo {
        border: none;
        width: 100%;}
    .primaryInfo ul {
        padding-top: 20px;
        padding-left: 0; }
    .payment h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-transform: capitalize;
        color: #222222;
        border-bottom: 0.5px solid #CCCCCC;}
    .primaryInfo label {
        padding-left: 0;}
    .promocode-block {
        justify-content: space-between;
        align-items: center;
        display: flex;}
    .promocode-block label {
        font-size: 18px;
        color: #222222;
        padding: 0;}
    .primaryInfo li input {
        width: 20px;
        height: 20px; }
    .primaryInfo li i, .cutoffTimeNote span {
        font-size: 18px;}
    .promoCode {
        margin: 0;
        background: #EDEDED;
        border: 0.5px solid #CCCCCC;
        border-radius: 4px;
        padding: 11px 20px;
        height: auto;
        width: 100%;
        max-width: 270px;}
    .promocode-block i {
        font-size: 14px; }
    .primaryInfo .title{
        padding-top: 14px;
        font-size: 18px;
        line-height: 25px; }
    </style>`);

        document.querySelector('.payment h3').innerHTML = 'Shipping Options With Maximum In-Hands Date';
        document.querySelector('.payment h3').insertAdjacentHTML('afterend', step);
        document.querySelectorAll('.step')[0].classList.remove('active');
        document.querySelectorAll('.step')[1].classList.add('active');

        document.querySelector('.checkout-left_head').after(document.querySelector('.payment.in_center'));
        document.querySelector('#ship_options').insertAdjacentHTML('beforebegin',`<h2 class="title">Delivery Method</h2>`);
        document.querySelector('#ship_options').insertAdjacentHTML('afterend',`<div class="promocode-block"><div class="promocode-block_i"></div></div>`);

        document.querySelector('.promocode-block_i').after(document.querySelector('.promoCode'));
        document.querySelector('.promocode-block_i').after(document.querySelector('.primaryInfo label'))
        document.querySelector('.primaryInfo').insertAdjacentHTML('afterend',`<button type="button" class="btn btn-next big">Next</button>`)
        document.querySelector('.btn.big').addEventListener('click', () => {
            document.querySelector('form div[align="right"] input').click();
        });
    }
    if(location.pathname == '/checkout/step3') {
        document.body.insertAdjacentHTML('afterbegin',`<style>
        .payment h3, .checkout-left_head .link  {
            display: none;}
        .primaryInfo {
            font-family: 'Arial', sans-serif;
            width: 100%;
            border: none;}
        .primaryInfo dl {
            width: 100%;
            margin: 0;}
        .primaryInfo div{
            margin-left: 0!important; }
        div.cc-recurring {
            padding: 10px 0;}
        .primaryInfo dl dd {
            font-family: 'Arial', sans-serif; }
        .primaryInfo dl input, .primaryInfo dl textarea {
            background: #EDEDED;
            border: 0.5px solid #CCCCCC;
            border-radius: 4px;
            padding: 11px 20px; }
        primaryInfo dl textarea {
            height: 40px;}
        #recurring_billing_period {
                padding: 0 10px;
            background: #EDEDED;
            border: 0.5px solid #CCCCCC;
            box-sizing: border-box;
            height: 30px;
            margin-left: 10px;
            border-radius: 4px;
            width: 160px!important;}
        .cc-recurring-setting {
            font-weight: 500;
            font-size: 14px; }
        .allow-up-to-60 {
            white-space: break-spaces; }
    </style>`);
        document.querySelector('.checkout-left_head .title').innerHTML = 'Credit Card Information';
        document.querySelector('.checkout-left_head').after(document.querySelector('.payment.in_center'));

        document.querySelector('.primaryInfo').insertAdjacentHTML('afterend',`<button type="button" class="btn big">Proceed</button>`)
        document.querySelector('.btn.big').addEventListener('click', () => {
            document.querySelector('form div[align="right"] input').click();
        });
    }
};
