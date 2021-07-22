
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

$('.promocode-item').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings().slideToggle(300);
});

