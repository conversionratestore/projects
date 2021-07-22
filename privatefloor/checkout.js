$('body').prepend(`
<style>
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;}
    input[type=number] {
      -moz-appearance: textfield;}
    .sub-title-form, .registerPanel, .order-recipient, .shipping-address, .pull-right.prices tr:last-child  {
        display: none;}
    .line-vert {
        border: 0;
        border-right: 1px solid #e8e8e8;
        padding: 0 40px 0 0; }
    .express-checkout {
        padding: 0 15px 30px;
        margin-bottom: 33px;
        border: 1px solid rgba(136, 136, 136, 0.3);}
    .express-checkout a {
        display: block;
        margin: 0 8px;
        width: fit-content;}
   .express-checkout legend {
        border: none;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #424242;
        text-align: center;
        width: fit-content;
        padding: 0 8px;}
    #newAddressForm {
        max-width: 596px;}
   .content-center {
        display: flex;
        justify-content: center; }
   .title-form2 {
        font-size: 14px;
        line-height: 16px; }
   .checkout-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #DEDEDE;
        margin-bottom: 24px;
        padding: 16px 0;}
   .checkout-head .title-form2, .checkout-head p {
        margin: 0;}
   .small-text {
        font-size: 12px;
        line-height: 14px;
        color: #6B6B6B;}
   .underline {
        text-decoration: underline;}
   .label-style {
        margin-bottom: 8px; }
   .shippingData.row {
        margin-left: 0;
        margin-right: 0;}
   .shippingData .form-group {
        margin-bottom: 24px; }
   .checkout-footer {
        border-top: 1px solid #DEDEDE;
        padding: 24px 0 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;}
   #newAddressForm .checkout-footer .form-group {
        margin-left: auto;}
   #newAddressForm .btn {
        margin-left: auto;
        margin-bottom: 0;
        max-width: 250px;
        width: 100%!important;
        box-shadow: none;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-radius: 5px;}
   #address_line1 {
        margin-top: 10px;}
   #newAddressForm .btn:hover {
        color: #ffffff!important;}
   .cartcontainer .registerPanel {
        width: 100%;
        padding: 0;}
   .registerPanel.active {
        display: block;}
   .userLoginForm {
        position: relative;
        display: flex;
        flex-wrap: wrap;}
   .show-password {
        right: -3px;}
   #registerPanel > form > div:nth-child(6) {
        margin-left: auto;}
   .password-forgotten-wrap {
       position: absolute;
       right: 0;
       top: 0;
       margin: 0;}
   .order-recipient.active {
        display: block;} 
   .registerPanel h3 {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #2B2B2B;}
   .btn-back {
        border-bottom: 1px solid #2B2B2B;
        font-size: 9px;
        line-height: 12px;
        text-transform: uppercase;
        color: #2B2B2B;
        padding: 0;
        display: flex;
        height: fit-content;
        align-items: center;}
   .btn-back img {
        margin-right: 4px;
        width: 8px;
        height: 8px;}
   .promocode {
        border-top: 1px solid #DEDEDE;
        border-bottom: 1px solid #DEDEDE;
        padding: 24px 0;}
   .promocode-item.active:before {
        transform: translateY(-50%) scaleY(-1); }
   .promocode-item {
        font-size: 14px;
        line-height: 16px;
        color: #6B6B6B;
        position: relative; }
   .promocode-item:before {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 7px 5.5px 0 5.5px;
        border-color: #2B2B2B transparent transparent transparent;}
   .promocode-drop {
        padding-top: 24px;
        display: none;}
   .promocode-drop input {
        border: 1px solid rgba(136, 136, 136, 0.3);
        font-size: 14px;
        width: 100%;
        padding: 9px 10px;
        line-height: 16px;}
   .your-order .promocode-drop input::-webkit-input-placeholder, .promocode-drop input:-moz-placeholder, .promocode-drop input::-moz-placeholder, .promocode-drop input:-ms-input-placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #C2C2C2;}
   .promocode-drop .d-flex {
        width: 100%;}
   .pull-right.prices {
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        margin: 8px 0 24px;
        color: #6B6B6B; }
    .pull-right.prices td {
        padding-top: 16px;}
   .pull-right.prices td:nth-child(2) {
        text-align: right; }
   .promocode-drop button {
        flex-shrink: 0;
        width: 64px;
        height: 36px;
        font-weight: bold;
        font-size: 12px;
        line-height: 36px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        background: #DBDBDB;
        color: #FFFFFF;}
   .total td {
        font-weight: bold;
        font-size: 18px;
        line-height: 20px; }
   .total td:first-child{
        color: #6B6B6B;}
   .total td:last-child{
        color: #FF450E; }
   .list-products {
        margin-right: -8px;
        padding-right: 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #6B6B6B;
        width: calc(100% + 8px);
        max-height: 395px;
        overflow-y: auto;
        border-top: 1px solid #DEDEDE;}
   .list-products::-webkit-scrollbar  {
        width: 8px;}
   .list-products li {
        display: flex;
        padding: 24px 0;
        border-bottom: 1px solid #DEDEDE; }
   .your-order {
        padding-left: 40px; }
   .list-products_img {
        margin-right: 16px;
        width: 82px;
        height: 82px;}
   .list-products_img img{
        object-fit: contain;
        width: 100%;
        height: 100%; }
   .list-products li a {
        color: #6B6B6B; }
   .c-orange {
        margin-bottom: 4px;
        color: #EC6400; }
   .c-orange span {
        text-decoration: underline;}
   .counter {
        margin-bottom: 8px;
        display: flex;
        border: 1px solid rgba(136, 136, 136, 0.3);
        height: 28px;
        width: 105px;}
   .quantity {
        height: 25px;
        border: none;
        text-align: center;
        font-size: 14px;
        line-height: 20px;
        width: 100%;
        color: #6B6B6B;
        padding: 4px 0;}
   .btn-counter {
        position: relative;
        width: 26px;
        height: 100%;
        flex-shrink: 0;}
   .btn-counter:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: rgba(136, 136, 136, 0.3);
        width: 12px;
        height: 1px; }
   .btn-plus:after {
        background: rgba(136, 136, 136, 0.3);
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 1px;
        height: 12px; }
   .flex-center-between {
        display: flex;
        align-items: center;
        justify-content: space-between;}
   .btn-delete {
        text-decoration-line: underline!important;}
   .fw-bold {
        font-weight: 700; }
   .price {
        margin-bottom: 8px;
   }
   .d-flex {
    display: flex;
   }
   @media (max-width: 767px) {
        .header .logo {
                margin: 0 auto;
                display: block;
                clear: both;
                float: none;
        }
   }
</style>`);

$('#billingPanel .form-block:first-child').prepend(`
<fieldset class="express-checkout">
   <legend>express checkout</legend>
   <div class="content-center">
        <a href="#">
            <img src="https://conversionratestore.github.io/projects/privatefloor/img/buy-button-black.png" alt="pay icon">
        </a>
        <a href="#">
            <img src="https://conversionratestore.github.io/projects/privatefloor/img/buy-button-white.png" alt="pay icon">
        </a>
    </div>
</fieldset>
<div id="order-recipient" class="order-recipient active">
    <div class="checkout-head">
        <h3 class="title-form2">Order Recipient</h3>
        <p class="small-text">Alredy have an account? <span class="underline toggle"> Log In</span> </p>
    </div>
</div>`);

$('#order-recipient .checkout-head').after( $('#billingPanel .form-block:first-child .row.row-30'));

$('#order-recipient').append(`
<div class="checkout-footer row row-30">
    <div class="form-group col-sm-6">
        <button class="btn btn-primary">Continue</button>
</div>
</div>`);

$('#billingPanel .form-block:first-child').after($('.registerPanel'));

$('.userLoginForm').addClass('row row-30');
$('.registerPanel').removeClass('col-xs-12 col-sm-4');
$('.userLoginForm .form-group').addClass('col-sm-6');

$('.registerPanel').prepend(`
<div class="checkout-head">
    <h3 class="title-form2">Log In</h3>
    <p class="small-text">Alredy doesn't have an account? <span class="underline toggle"> Sign Up</span> </p>
</div>`);
$('#registerPanel').after(`<div class="shipping-address" id="shipping-address"></div>`);

$('.shipping-address').append($('.form-block').eq(1));
$('.shipping-address').append($('#shippingPanelSummary'));
$('.shipping-address').append($('.form-group.clearfix'));
$('.shipping-address').append($('.conditionsAccept'));
$('.shipping-address .col-sm-12').eq(0).hide();

$('.shipping-address').append(`
<div class="checkout-footer">
    <button class="btn-back" type="button"><img src="https://conversionratestore.github.io/projects/privatefloor/img/arrow-left.svg" alt="arrow icon"> Back to shopping</button>
</div>`);
$('.checkout-head .toggle').on('click', function() {
    $('.registerPanel').toggleClass('active');
    $('.order-recipient').toggleClass('active');
});

$('#order-recipient .checkout-footer .btn').on('click', function() {
    if($('#order-recipient input').val() != '' && $('#order-recipient input').val() != isNaN) {
        $('#order-recipient').css('display','none');
        $('.express-checkout').css('display','none');
        $('#shipping-address').css('display','block');
        $('.cart-steps__main-block .step.step-active').removeClass('step-active');
        $('.cart-steps__main-block .step').eq(1).removeClass('step-next').addClass('step-active');
    }
});
$('#newAddressForm').removeClass('col-sm-8');
$('#newAddressForm').addClass('col-sm-7');
$('.shippingData').append(`
<div class="your-order col-xs-12 col-sm-5 ">
    <h3 class="title-form2">Your Order</h3>
    <div class="promocode">
        <div class="promocode-item">Have promo code?</div>
        <div class="promocode-drop">
            <div class="d-flex">
                <input type="text" placeholder="Enter your coupon code">
                <button type="button">ok</button>
            </div>
        </div>
    </div>
    <ul class="list-products">
        <li>
            <a href="#" class="list-products_img">   
                <img src="" alt="image"> 
            </a>
            <div>
                <a href="#">Scandinavian Office Chair With Wheels - Canva White</a>
                <p class="c-orange">Shipping in <span> 48h</span></p>
                <p class="price">49,90 €</p>
                <div class="counter">
                    <button class="btn-counter btn-minus" type="button"></button>
                    <input type="number" class="quantity" value="1">
                    <button class="btn-counter btn-plus" type="button"></button>
                </div>
                <div class="flex-center-between">
                    <a href="#" class="btn-delete">Delete</a>
                    <div class="fw-bold">49,90 €</div>
                </div>
            </div>
        </li>
</ul>
</div>`);

$('.shipping-address .checkout-footer').append($('#support-submit-link'));
$('.shipping-address .checkout-footer #support-submit-link').innerHTML = 'Continue';
$(".promocode").after($('.prices'));

$('.promocode-item').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings().slideToggle(300);
});
