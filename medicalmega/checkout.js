let action, label, data;

function setOptionFetch(bodyOption) {
    let optionFetch = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: "POST",
        body: bodyOption
    }
    return optionFetch
}

function chengeTotal(data) {
    console.log(data)
    document.querySelector('.checkout-right_footer').innerHTML = `
        <div class="altTd total-headings">
            <p><b>Sub Total:</b></p>
            <p><b>Discount:</b></p>
            <p><b>Shipping Charge:</b></p>
            <p><b>Processing Fee:</b></p>
            <p><b>Sales Tax:</b></p>
            <p><b>Grand Total:</b></p>
        </div>
        <div class="altTd total-values">
            <p>$ <b data-items="subtotal"></b></p>
            <p> -$ <b data-items="discount"></b></p>
            <p>$ <b data-items="shipping"></b></p>
            <p>$ <b data-items="processing_fee"></b></p>
            <p>$ <b data-items="tax"></b></p>
            <p>$ <b data-items="total"></b></p>
        </div>`;

    let values = document.querySelectorAll('.total-values p b');
    for (let i = 0; i < values.length; i++) {
        for (let key in data) {
            if (values[i].dataset.items == key) {
                values[i].innerHTML = data[key];
                if (values[i].innerHTML.includes(',')) {
                    let spt = +data[key].split(',').join('');
                    values[i].innerHTML = spt.toFixed(2);
                } else {
                    values[i].innerHTML = data[key].toFixed(2);
                }
                if (data[key] == '0') {
                    values[i].closest('p').style.display = 'none';
                    document.querySelectorAll('.total-headings p')[i].style.display = 'none';
                }
            }
        }
    }
}

function chengeQuantity() {
    document.querySelectorAll('.quantity-row').forEach((quantity) => {
        quantity.querySelectorAll('.quantity-btn').forEach((button, index) => {
            if (button.className == 'quantity-btn quantity-btn_minus') {
                if (button.nextElementSibling.value < 2) {
                    button.disabled = true;
                } else {
                    button.disabled = false;
                }
            }
            button.addEventListener('click', () => {
                if (button.className == 'quantity-btn quantity-btn_plus') {
                    button.previousElementSibling.value = parseInt(button.previousElementSibling.value) + 1;
                    button.parentElement.querySelector('.quantity-btn_minus').disabled = false;
                    action = 'Click on plus of items';
                    label = 'Section Your order';
                    pushDataLayer(action,label);
                }
                if (button.className == 'quantity-btn quantity-btn_minus') {
                    if (button.nextElementSibling.value < 2) {
                        button.nextElementSibling.value = 1;
                        button.disabled = true;
                    } else {
                        button.nextElementSibling.value = parseInt(button.nextElementSibling.value) - 1;
                    }
                    action = 'Click on minus of items';
                    label = 'Section Your order';
                    pushDataLayer(action,label);
                }

                let updateCart =  `api=c&cart_action=update&variant_id=${button.closest('.checkout-product').dataset.variantId}&quantity=${button.closest('.quantity-row').querySelector('.quantity').value}&ctoken=${mm.ctoken}`;

                fetch('/cart.html', setOptionFetch(updateCart)).then(res => res.json()).then(data => {
                    chengeTotal(data["cart"])
                })
                quantity.nextElementSibling.querySelector('b').innerHTML = `${(parseFloat(quantity.querySelector('.quantity').value) *  parseFloat(quantity.nextElementSibling.dataset.price)).toFixed(2)}`;
            });
        });
        quantity.addEventListener('change', () => {
            action = 'Change on amount of items';
            label = 'Section Your order';
            pushDataLayer(action,label);
            quantity.nextElementSibling.querySelector('b').innerHTML = `${(parseFloat(quantity.querySelector('.quantity').value) *  parseFloat(quantity.nextElementSibling.dataset.price)).toFixed(2)}`;

            let chengedCart = `api=c&cart_action=update&variant_id=${quantity.closest('.checkout-product').dataset.variantId}&quantity=${quantity.querySelector('.quantity').value}&ctoken=${mm.ctoken}`

            fetch('/cart.html', setOptionFetch(chengedCart)).then(res => res.json()).then(data => {
                chengeTotal(data["cart"])
            })
        });
    });
}

function removeProduct() {
    document.querySelectorAll('.remove').forEach((item, index) => {
        item.addEventListener('click', () => {
            action = 'Click Exit Cross button';
            label = 'Section Your order';
            pushDataLayer(action,label)

            let updateCart = `api=c&cart_action=remove&variant_id=${item.closest('.checkout-product').dataset.variantId}&ctoken=${mm.ctoken}`;

            fetch('/cart.html', setOptionFetch(updateCart)).then(res => res.json()).then(data => {
                chengeTotal(data["cart"])
            })
            item.closest('.checkout-product').remove();
        });
    });
}

function pushDataLayer(action,label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Alternative checkout desktop',
        'eventAction': action,
        'eventLabel': label
    });
}

window.onload  = function () {
    if (mm.grw != 1) {
        if (!window.location.pathname.includes('cart.html')) {
            document.body.insertAdjacentHTML('afterbegin', `
             <style>
            /*.checkout-right_footer .altTd p:nth-child(2), .checkout-right_footer .altTd p:nth-child(3), .g-signin2 {*/
            /*    display: none;}*/
            .title_head {
                font-weight: bold;
                font-size: 20px;
                line-height: 27px;
                padding: 20px 0;
                text-transform: capitalize;
                color: #C23D31;
                border-bottom: 0.5px solid #CCCCCC;}
            #mainbody {
                background: transparent; }
            .payment {
                padding-bottom: 0;}
            .num_line a:nth-child(1), .num_line .line_grey, .num_line .line_pink, #ftr, .registerOnLogin dt, .left, .mainleft, .mainright, .guest_checkout_button2, .address_book_new .small_block .head2 img, .payment h5, .altPayment, form div[align="right"] {
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
                text-transform: capitalize;
                color: #FFFFFF;
                padding: 0 13px;
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
                margin: 30px 0 24px 0!important;
                float: left;
                margin-top: 0!important;}
            #step1_form div.copy_bill[align="right"]:after {
                content: none; }
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
                position: relative;
                display: flex;
                flex-direction: column;
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
                cursor: pointer;
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
                width: 100%; }
            .myAccountleft {
                display: none;
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
                margin-bottom: 16px;
                border-radius: 4px;}
            .registerOnLogin dd label {
                color: #666666;}
            div.myAccountleft > form > dd:nth-child(6), div.myAccountright > form > dd:nth-child(5) {
                width: fit-content;
                margin-left: auto;}
            div.myAccountright > form > dd:nth-child(5){
                width: 100%;
                max-width: 151px; }
            div.myAccountright > form > dd.forgot_password { 
                width: 50%!important;
                max-width: 224px!important;
                margin-left: 0!important; }
            .checkout-right_head {
                padding: 22px 0 15px;
                border-bottom: 0.5px solid #CCCCCC;}
            .checkout-right_head .link {
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;}   
            .checkout-right {
                box-sizing: content-box;
                height: fit-content;
                width: 304px;
                background: rgba(238, 238, 238, 0.5);
                padding: 0 20px;
                border-radius: 4px;}
            .checkout-right_body {
                max-height: 333px;
                min-height: 324px;
                margin: 0 -10px 0 0;
                padding: 10px 10px 15px 0;
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
                max-height: 100px;
                margin: auto;}
            .checkout-product a {
                font-size: 10px;
                display: inline-flex;
                line-height: 14px;
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
                text-align: right;
                font-weight: 700;
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
                margin: auto 0 0;
                padding: 19px 0;
                border-top: 1px solid #C23D31;}
            .checkout-right_footer .altTd p {
                margin-bottom: 17px;
                display: block;}
            .checkout-right_footer .altTd p, .checkout-right_footer .altTd b {
                font-style: normal;
                text-transform: capitalize;
                display: block;
                font-weight: normal;
                font-size: 14px;
                line-height: 19px;
                color: #666666;}
            .checkout-right_footer .altTd.total-values {
                text-align: right;}
            .checkout-right_footer .altTd.total-values p b {
                padding-left: 4px;}
            .checkout-right_footer .altTd.total-values p {
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;
                font-weight: 500;}
            .checkout-right_footer .altTd p:last-child {
                margin-bottom: 0;}
            .checkout-right_footer .altTd p:last-child b { 
                font-weight: 500;
                font-size: 24px;
                line-height: 33px;
                color: #222222;}
           .checkout-right_footer .altTd.total-values p:last-child, .checkout-right_footer .altTd.total-values p:last-child b {
                font-weight: 700;
                font-size: 30px;
                line-height: 33px;
                color: #222222;}
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
                flex-shrink: 0;
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
                padding-bottom: 20px;}
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
                width: 100%;
                max-width: 261px; }
            .registerOnLogin dd:nth-child(3) {
                max-width: 361px;
            }
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
                max-width: 100%;
                width: fit-content;
                margin-left: auto;}
            .btn-next  {
                max-width: 224px;
                margin-left: auto;
                margin-top: auto;
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
            .address_book_new {
                padding: 20px 0 0 0!important; }
            .address_book_new .small_block {
                width: 50%!important;
                clear: both;
                max-width: 224px; }
            .address_book_new .ship_small {
                margin-left: 0!important;}
            .address_book_new .small_block .radio_content {
            width: auto;
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
            .address_book_new .small_block .radio_content .radio_cont {
                font-size: 14px!important;}
            .address_book_new .small_block .radio_content .radio_cont .edit {
                padding-top: 0!important;}
            .btn-back {
                font-weight: bold;
                font-size: 14px;
                line-height: 19px;
                display: flex;
                align-items: center;
                text-decoration-line: underline;
                padding: 10px 19px;
                background: url('https://conversionratestore.github.io/projects/medicalmega/img/arrowLeft.svg') no-repeat left center / 18px;
            }
            .address_book_new .editor .title {
                display: none;
            }
            .invaliduser {
                width: 100%;
            }
            .c-red {
                color: #C23D31;
            }
            .num_line {
                display: flex;
                justify-content: center;
                padding-left: 0;
            }
            .num_line a {
                font-weight: normal;
                font-size: 12px;
                line-height: 16px;
                text-align: center;
            }
            .num_line span {
                display: block;
                line-height: 16px;
            }
            .num_line .circle_pink {
                background: #F3D8D6;
                border: 1px solid #C23D31;
                width: 28px;
                height: 28px;
                display: flex;
                margin: 0 57px 8px;
                border-radius: 50%;
                position: relative;
                z-index: 1;
            }
            .num_line .circle_grey {
                background: #fff;
                border: 1px solid #EEEEEE;
                border-radius: 50%;
                width: 28px;
                height: 28px;
                display: flex;
                margin: 0 57px 8px;
                position: relative;
                z-index: 1;
            }
            .num_line .circle_grey:before, .num_line .circle_pink:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 100%; 
                transform: translateY(-50%);
                height: 1px;
                width: 120px;
                background: #EEEEEE;
                z-index: -1;
            }
            .num_line a:last-child .circle_grey:before {
                content: none;
            }
            .num_line .circle_grey .number, .num_line a .circle_grey .number,  .num_line .circle_pink .number, .num_line a .circle_pink .number  {
                padding: 0;
                margin: auto;
                font-size: 14px;
                line-height: 19px;
                text-align: center;
                color: #C0C0C0;
            }
            .num_line .circle_pink .number, .num_line a .circle_pink .number  {
                color: #C23D31;
            }
        </style>`);

            document.querySelector('#mainbody').insertAdjacentHTML('afterbegin', `
            <div class="flex-between">
                <div class="checkout-left">
                    <div class="checkout-left_head flex-center-between">
                        <h2 class="title">Sign In</h2>
                        <p class="link log">Registration</p>
                    </div>
                    <div class="title_head">Personal information</div>
                </div>
                <div class="checkout-right">
                    <div>
                        <div class="checkout-right_head flex-center-between">
                            <h3 class="title3">Your order</h3>
                            <a href="https://medicalmega.com/" class="link">Back to Shopping</a>
                        </div>
                        <div class="checkout-right_body"></div>
                    </div>
                    <div class="checkout-right_footer"></div>
                </div>
            </div>`);
            if (!window.location.pathname.includes('checkout/step4')) {
                fetch('/cart.html', setOptionFetch(`api=c&cart_action=cart&ctoken=${mm.ctoken}`)).then(res => res.json()).then(data => {
                    for (let i = 0; i < data["items"].length; i++) {
                        let product = `
                        <div class="d-flex checkout-product" data-id="${data["items"][i].product_id}" data-variant-id="${data["items"][i].variant_id}">
                            <a href="${data["items"][i].url}" class="checkout-product_img"> <img src="${data["items"][i].image_url}" alt="Image Of ${data["items"][i].title}"></a>
                            <div class="flex-column">
                                <div class="flex-between">
                                    <a href="#">${data["items"][i].title}</a>
                                    <button class="remove" type="button"></button>
                                </div>
                                <div class="flex-center-between">
                                    <div class="quantity-row">
                                        <button type="button" class="quantity-btn quantity-btn_minus" disabled>−</button>
                                        <input type="number" name="quantity" value="${data["items"][i].quantity}" class="quantity">
                                        <button type="button" class="quantity-btn quantity-btn_plus">+</button>
                                    </div>
                                    <div class="total-price" data-price="${data["items"][i].price}">$ 
                                        <b>${data["items"][i].subtotal.toFixed(2)}</b>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                        document.querySelector('.checkout-right_body').insertAdjacentHTML('beforeend', product);
                    }
                    chengeTotal(data)
                    chengeQuantity()
                    removeProduct()
                    localStorage.setItem('checkout', document.querySelector('.checkout-right').innerHTML)
                })

                let step = document.querySelectorAll('.num_line .number');
                for (let i = 0; i < step.length; i++) {
                    step[i].innerHTML = i;
                }
            }

            document.querySelectorAll('.btn-eye').forEach((item) => {
                item.addEventListener('click', () => {
                    const type = item.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password';
                    item.previousElementSibling.setAttribute('type', type);
                });
            });
            // if (document.querySelector('.registerOnLogin dd label')) {
            //     document.querySelector('.registerOnLogin dd label').forEach(el => {
            //         el.replace('*','<span class="c-red">*</span>')
            //     })
            // }
            if (document.querySelector('.myAccount')) {
                document.querySelector('.myAccountleft button[name="register"]').innerHTML = `Next`;
                document.querySelector('.myAccountleft button[name="register"]').classList.add('btn');
                document.querySelector('.myAccountleft button[name="register"]').classList.add('btn-next');
                document.querySelector('.title_head').after(document.querySelector('.myAccount'));
                document.querySelectorAll('.myAccountleft dd')[5].insertAdjacentHTML('afterbegin',`  
                <label class="valign-center">
                    <span class="check"></span>
                    <span>Email Me Order Updates and Specials</span>
                </label>`);
                document.querySelectorAll('.myAccountleft dd')[5].setAttribute('style','max-width: 100%;width: 100%;color: transparent;');
                document.querySelector('.myAccountleft dd .check').before(document.querySelector('[name="subscribe"]'));
                // document.querySelector('.myAccountleft .registerOnLogin button').innerHTML = `Next`;
                // document.querySelector('#login_btn').innerHTML = `Next`;
                document.querySelector('.myAccountleft .registerOnLogin button').addEventListener('click', () => {
                    action = `Click Next button`;
                    label = 'Section Registration';
                    pushDataLayer(action,label)
                });
                document.querySelector('.log').addEventListener('click', (e) => {
                    let _this = e.target;
                    _this.classList.toggle('active');
                    if (_this.classList.contains('active')) {
                        _this.innerHTML = 'Sign in';
                        document.querySelector('.checkout-left_head .title').innerHTML = 'Registration';
                        document.querySelector('.myAccountright').style.display = 'none';
                        document.querySelector('.myAccountleft').style.display = 'block';
                        action = `Click Registration button`;
                        label = 'Section Sign In';
                        pushDataLayer(action,label)
                    } else {
                        _this.innerHTML = 'Registration';
                        document.querySelector('.checkout-left_head .title').innerHTML = 'Sign in';
                        document.querySelector('.myAccountleft').style.display = 'none';
                        document.querySelector('.myAccountright').style.display = 'block';
                        action = `Click Sign In button`;
                        label = 'Section Registration';
                        pushDataLayer(action,label)
                    }
                });
                if (location.pathname.includes('login')) {
                  
                    document.querySelector('.log').innerHTML = 'Registration';
                    document.querySelector('.checkout-left_head .title').innerHTML = 'Sign in';
                    document.querySelector('.myAccountleft').style.display = 'none';
                    document.querySelector('.myAccountright').style.display = 'block';
                    document.querySelector('.log').classList.remove('active');
                    if (document.querySelector('.invaliduser')) {
                        document.querySelector('.invaliduser').closest('dd').setAttribute('style','position: absolute; top: 86px;right: 0;');
                        document.querySelector('.invaliduser').setAttribute('style','text-align: right; width: 100%;');
                    }
                    document.querySelector('div.myAccountright > form > dd:nth-child(6)').setAttribute('style','width: auto!important; max-width: none!important;');
                }
                if (location.pathname.includes('register')) {
                    document.body.insertAdjacentHTML('afterbegin', `
                    <style>
                    .myAccountleft .registerOnLogin dd:nth-child(3) {
                        max-width: 360px;
                    }
                </style>`);
                    document.querySelector('.log').innerHTML = 'Sign in';
                    document.querySelector('.checkout-left_head .title').innerHTML = 'Registration';
                    document.querySelector('.myAccountleft').style.display = 'block';
                    document.querySelector('.myAccountright').style.display = 'none';
                    document.querySelector('.log').classList.add('active');
                }
            }
            if (location.pathname == '/checkout/step1' || location.pathname == '/guest-checkout1.php') {
                if (!document.querySelectorAll('.checkout-product')) {
                    document.body.insertAdjacentHTML('afterbegin', `
                    <style>
                .checkout-right {
                    display: none;
                }
                </style>`);
                    document.querySelector('.checkout-left').innerHTML = `<a href="https://medicalmega.com" class="btn">Continue shopping</a>`
                } else {
                    document.body.insertAdjacentHTML('afterbegin', `
                    <style>
                        .payment {
                            height: 100%;
                            display: flex;
                            flex-direction: column;}
                        #editor_fields div:nth-child(4){
                            display: none;} 
                        #editor_fields .editor_right div:nth-child(6){
                            display: none;}
                    </style>`);
                }

                document.querySelector('.title_head').after(document.querySelector('.payment'));
                document.querySelector('.checkout-left_head .title ').innerHTML = 'Addres Book';
                document.querySelector('.payment h3 ').style.display = 'none';
                document.querySelector('.checkout-left_head').style.display = 'none';
                document.querySelector('.checkout-left_head .log ').style.display = 'none';
                document.querySelector('#copy_bill').insertAdjacentHTML('afterend',`<span class="check"></span>`);
                document.querySelector('#make_primary').insertAdjacentHTML('afterend',`<span class="check"></span>`);
                document.querySelector('.bill_small').parentElement.classList.add('flex-between');
                document.querySelector('#step1_form').insertAdjacentHTML('afterend',`<button type="button" class="btn btn-next">Next</button>`)
                document.querySelector('.btn-next').addEventListener('click', () => {
                    if(document.querySelector('#copy_bill').checked == true) {
                        document.querySelector('.editor .buttons a').click();
                    } else {
                        document.querySelectorAll('form div[align="right"] input')[1].click();
                    }
                    action = 'Click Next button';
                    label = 'Section Shipping information';
                    pushDataLayer(action,label)
                });

                if (document.querySelector('.editLink') == null) {
                    document.querySelector('.bill_small .head2:last-child').click();
                    document.querySelector('.title_head').innerHTML = 'Billing Information';
                    document.querySelector('.bill_small .head2').addEventListener('click', (e) => {
                        document.querySelector('.title_head').innerHTML = 'Billing Information';
                    });
                    document.querySelector('.ship_small .head2').addEventListener('click', (e) => {
                        document.querySelector('.title_head').innerHTML = 'Shipping information';
                    });
                } else {
                    document.querySelector('.title_head').innerHTML = 'Billing and Shipping information';
                    document.querySelector('.address_book_new .editor .title').style.display = 'block';
                    document.querySelector('#step1_form div.copy_bill[align="right"]').style.float = 'right';
                }
                document.querySelector('.copy_bill label').addEventListener('click',() => {
                    action = 'Click Copy from Billing info field';
                    label = 'Section Shipping information';
                    pushDataLayer(action,label)
                });
            }
            if (location.pathname == '/checkout/step2') {
                document.body.insertAdjacentHTML('afterbegin', `
                <style>
        .holiday {
            margin: 15px 0 0 0!important;
        }
        .payment h3, .primaryInfo h2, .remove{
            display: none}
        .primaryInfo li {
            display: flex;
            align-items: center;}
        .altPayment, #mainbody .checkout-left_head {
            display: none;}
        .primaryInfo {
            color: transparent;
            border: none;
            width: 100%;}
        .primaryInfo ul {
            color: #171717;
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
        .primaryInfo li p {
            line-height: 1;}
        .primaryInfo li input {
            width: 20px;
            height: 20px; }
        .primaryInfo li i, .cutoffTimeNote span, .primaryInfo li b {
            font-size: 18px;}
        .primaryInfo li strong {
            margin-left: 5px;}
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
       .payment {
            height: 100%;}
       .payment form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;}
        #2_3_days {
            padding: 5px 0 0 0!important;}
        .quantity-row {
            pointer-events: none;}
        .quantity-btn  {
            color: #CCCCCC!important;}
        </style>`);

                document.querySelector('.title_head').innerHTML = 'Delivery Method';
                document.querySelector('.title_head').after(document.querySelector('.payment.in_center'));
                document.querySelector('#ship_options').insertAdjacentHTML('beforebegin',`<h2 class="title">Delivery Method</h2>`);
                document.querySelector('#ship_options').insertAdjacentHTML('afterend',`<div class="promocode-block"><div class="promocode-block_i"></div></div>`);

                document.querySelector('.promocode-block_i').after(document.querySelector('.promoCode'));
                document.querySelector('.promocode-block_i').after(document.querySelector('.primaryInfo label'))
                document.querySelector('.primaryInfo').insertAdjacentHTML('afterend',`<div class="flex-center-between"><button type="button" class="btn-back">Back</button><button type="button" class="btn btn-next">Next</button></div>`)

                document.querySelector('.primaryInfo').innerHTML.split('<div style=" clear: both">&nbsp;</div>').join(' ');
                document.querySelector('.btn-next').addEventListener('click', () => {
                    document.querySelector('form div[align="right"] input').click();
                });
                document.querySelectorAll('.quantity-row .quantity').forEach(element => {
                    element.setAttribute('readonly');
                });
                document.querySelectorAll('#ship_options li input')[0].setAttribute('checked','true');

                document.querySelector('.primaryInfo .title').before(document.querySelector('.holiday'));

                document.querySelector('.btn-back').addEventListener('click', () => {
                    action = 'Click Back button';
                    label = 'Section Delivery Method';
                    pushDataLayer(action,label)
                    window.location = '/checkout/step1';
                });
                document.querySelectorAll('#ship_options li').forEach((el, i) => {
                    el.addEventListener('click', () => {
                        action = `Pick ${el.querySelector('i').innerHTML}`;
                        label = 'Section Delivery method';
                        pushDataLayer(action,label)
                    });
                });
                document.querySelector('.promoCode').addEventListener('click', () => {
                    action =  'Click on Promotional Code field';
                    label = 'Section Delivery method';
                    pushDataLayer(action,label)
                });
            }
            if (location.pathname == '/checkout/step3') {
                document.body.insertAdjacentHTML('afterbegin',`<style>
            .primaryInfo .error_cart {
                width: 100%!important; }
            .payment h3, .checkout-left_head, .remove {
                display: none!important;}
            .quantity-row {
                pointer-events: none;}
            .quantity-btn {
                color: #CCCCCC!important; }
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
            .primaryInfo dl textarea {
                background: #FFFFFF;}
            .primaryInfo dl textarea {
                height: 40px;}
            #recurring_billing_period, #card_list {
                padding: 0 10px;
                background: #EDEDED;
                border: 0.5px solid #CCCCCC;
                box-sizing: border-box;
                height: 30px;
                margin-left: 10px;
                border-radius: 4px;
                width: 160px!important;}
            .cc-recurring-setting {
                display: flex;
                align-items: center;
                font-weight: 500;
                font-size: 14px; }
            .allow-up-to-60 {
                display: none;
                white-space: break-spaces; }
           .primaryInfo label, .card-details {
                display: flex;
                align-items: center;}
           .primaryInfo label {
                width: 100%;}
           .quantity-btn {
                color: #CCCCCC!important;}
           .card-details p{
                white-space: nowrap;
                font-weight: bold;
                font-size: 18px;
                line-height: 25px;
                text-transform: capitalize;
                color: #222222;
                margin: 0 25px 0 0;}
           .auto-reorder-header {
                display: block;
                font-weight: bold;
                font-size: 18px;
                line-height: 25px;
                margin-bottom: 2px;
                color: #222222;}
           .cc-recurring {
                font-size: 12px;
                line-height: 16px;}
           .cc-recurring br {
                display: none; }
           .label-check {
                padding: 15px 0 0 0!important; }
            </style>`);
                document.querySelector('.title_head').innerHTML = 'Payment method';
                document.querySelector('.title_head').after(document.querySelector('.payment.in_center'));

                document.querySelector('.primaryInfo').insertAdjacentHTML('afterend',`<button type="button" class="btn big">COMPLETE THE ORDER</button>`)
                document.querySelector('.btn.big').addEventListener('click', () => {
                    document.querySelector('form div[align="right"] input').click();
                });
                document.querySelector('#save_cc_info').insertAdjacentHTML('afterend',`<span class="check"></span>`);
                document.querySelector('.cc-recurring-setting').insertAdjacentHTML('beforebegin',`<label class="label-check"></label>`);
                document.querySelector('.label-check').insertAdjacentHTML('afterbegin',`<span class="check"></span>`);
                document.querySelector('.label-check .check').before(document.querySelector('#cc-recurring-check'));
                document.querySelector('.label-check .check').after(document.querySelector('.cc-recurring-setting'));

                document.querySelector('.primaryInfo label').insertAdjacentHTML('beforebegin',`<div class="card-details"><p>Card Details</p></div>`);
                document.querySelector('.card-details p').after(document.querySelector('.primaryInfo label'));
                document.querySelectorAll('.primaryInfo div')[1].style.display = 'none';

                document.querySelector('.card-details label').addEventListener('click',() => {
                    action = 'Click Remember my card field';
                    label = 'Section Payment method';
                    pushDataLayer(action,label);
                });
                document.querySelector('.label-check').addEventListener('click',() => {
                    action = 'Pick regular reorder';
                    label = 'Section Payment method';
                    pushDataLayer(action,label);
                });

            }

            if(location.pathname == '/checkout/step4') {
                document.body.insertAdjacentHTML('afterbegin',`<style>
                .checkout-left_head, .num_line, .payment h3, .remove, .quantity-btn {
                    display: none!important;
                }
                .payment {
                    margin: 20px 0;
                }
                .primaryInfo {
                    width: 100%;
                }
                .payment .altprimaryInfo p {
                    width: 250px
                }
                .quantity-row {
                    pointer-events: none;
                }
            </style>`);
                document.querySelector('.title_head').innerHTML = 'your order has been placed!';
                document.querySelector('.title_head').after(document.querySelector('.payment'));
                document.querySelectorAll('.quantity-row .quantity').forEach(element => {
                    element.setAttribute('readonly');
                });
                document.querySelector('.checkout-right').innerHTML = localStorage.getItem('checkout')
            }

            document.querySelector('.checkout-right_head .link').addEventListener('click', ()=> {
                action = 'Click Back to Shoping button',
                    label ='Section Your order';
                pushDataLayer(action,label)
            })
        }
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
hj('event', 'alternative_checkout_desktop');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Alternative checkout desktop',
    'eventAction': 'loaded'
});
