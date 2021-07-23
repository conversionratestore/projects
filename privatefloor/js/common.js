$(document).ready(function () {
    $('.checkout-head .toggle').on('click', function() {
        $('.registerPanel').toggleClass('active');
        $('.order-recipient').toggleClass('active');
    });

    $('#order-recipient .checkout-footer .btn , .next-step2').on('click', function() {
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

$('[data-button]').on('click', function() {
    let _this = $(this);
    let attr = $(this).data('button');
    if(_this.find('input').prop('checked')) {
        $(`[data-item='${attr}']`).addClass('active');
    } else {
        $(`[data-item='${attr}']`).removeClass('active');
    }
});

});

