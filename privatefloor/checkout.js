$('body').prepend(`
<style>
    .sub-title-form, .registerPanel, .order-recipient, .shipping-address  {
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
   .shippingData .form-group {
        margin-bottom: 24px; }
   .checkout-footer {
        border-top: 1px solid #DEDEDE;
        padding: 24px 0 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;}
   #newAddressForm .btn {
        margin-left: auto;
        max-width: 250px;
        width: 100%;
        box-shadow: none;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        border-radius: 5px;}
   .cartcontainer .registerPanel {
        width: 100%;
        padding: 0;}
   .registerPanel.active {
        display: block;}
   .userLoginForm {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        margin-left: -30px;
        margin-right: -30px;}
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
<div class="checkout-footer">
    <button class="btn btn-primary ml-auto" type="button">Continue</button>
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
$('.shipping-address .checkout-footer').append($('#support-submit-link'));
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

$('.shippingData').append(`
<div class="your-order">
    <h3 class="title-form2">Your Order</h3>
    <div class="promocode">
        <p class="promocode-item">Have promo code?</p>
        <div class="promocode-drop">
            <input type="text" placeholder="Enter your coupon code">
            <button type="button">ok</button>
        </div>
    </div>
</div>`);

$(".your-order").append($('.prices'));
$(".your-order").append();
