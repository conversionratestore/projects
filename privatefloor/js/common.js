$(document).ready(function () {
    $('.checkout-head .toggle').on('click', function() {
        $('.registerPanel').toggleClass('active');
        $('.order-recipient').toggleClass('active');
    });

    $( 'form.userLoginForm, form.order-recipient' ).submit( function( event ) {
        event.preventDefault();

        //validate fields
        let fail = false;
        let fail_log = '';
        let name;
        $(this).find( 'select, textarea, input' ).each(function(){
            if( ! $( this ).prop( 'required' )){

            } else {
                if ( ! $( this ).val() ) {
                    fail = true;
                    name = $( this ).attr( 'name' );
                    fail_log += name + " is required \n";
                }

            }
        });

        //submit if fail never got set to true
        if ( ! fail ) {
            //process form here.
            $('#order-recipient').css('display','none');
            $('.express-checkout').css('display','none');
            $('.registerPanel ').css('display','none');
            $('#shipping-address').css('display','block');
            $('.cart-steps__main-block .step.step-active').removeClass('step-active');
            $('.cart-steps__main-block .step').eq(1).removeClass('step-next').addClass('step-active');
        } else {
            alert( fail_log );
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

    $('.show-password').on('click', function () {
        $('#password').attr('type', function(index, attr){
            if($('#password').attr('type') == 'password') {
                $('.show-password').addClass('active');
            } else {
                $('.show-password').removeClass('active');
            }
            return attr == 'password' ? 'text' : 'password';
        });
    });
});

