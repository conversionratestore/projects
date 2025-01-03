$(document).ready(function () {
    $('.checkout-head .toggle').on('click', function() {
        $('.userLoginForm').toggleClass('active');
        $('.order-recipient').toggleClass('active');
    });

    // $( 'form.order-recipient' ).submit( function( event ) {
    //     event.preventDefault();
    //
    //     //validate fields
    //     let fail = false;
    //     let fail_log = '';
    //     let name;
    //     $(this).find( 'select, textarea, input' ).each(function(){
    //         if( ! $( this ).prop( 'required' )){
    //
    //         } else {
    //             if ( ! $( this ).val() ) {
    //                 fail = true;
    //                 name = $( this ).attr( 'name' );
    //                 fail_log += name + " is required \n";
    //             }
    //
    //         }
    //     });
    //
    //     //submit if fail never got set to true
    //     if ( ! fail ) {
    //         //process form here.
    //         $('#order-recipient').removeClass('active');
    //         $('.express-checkout').css('display','none');
    //         $('.userLoginForm ').removeClass('active');
    //         $('#shipping-address').css('display','block');
    //         $('.cart-steps__main-block .step.step-active').removeClass('step-active');
    //         $('.cart-steps__main-block .step').eq(1).removeClass('step-next').addClass('step-active');
    //     } else {
    //         alert( fail_log );
    //     }
    //
    // });

    $('.btn-back').on('click', function () {
        $('#order-recipient').addClass('active');
        $('.express-checkout').css('display','block');
        $('#shipping-address').css('display','none');
        $('.cart-steps__main-block .step').eq(0).addClass('step-active');
        $('.cart-steps__main-block .step').eq(1).addClass('step-next').removeClass('step-active');
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

    $("#resetPassword").click(function(e) {
        //---------------^---------------
        var valid = this.form.checkValidity();
        $("#username").html(valid);
        if (valid) {
            e.preventDefault();
            $.ajax({
                url: $(this).data("href"),
                type: "POST", //метод отправки
                data: $("#ajax_form").serialize(),  // Сеарилизуем объект
                success: function (response) { //Данные отправлены успешно
                    if(response === false){
                        $('#danger').show();
                        $('#error-message').show();
                        $(".emailResset").addClass("is-inValid");
                    }else{
                        $('#sendEmail').hide();
                        $('#true').show();
                    }
                }
            });
            return false;
        }
    });

    $(".emailResset").keyup(function(){
        $('#error-message').hide();
        $('.emailResset').removeClass('is-inValid');
    });

    $("#btnUseMyCredit").click(function() {

        $.ajax({
            method: "POST",
            url: $(this).data("href"),
            success: function(response) {

                if (response.rStatus === "OK") {
                    location.reload();
                } else if (response.rStatus == "ERR") {

                    alert(response.rMessage);
                }
            }
        });
    });

    $("#btnConfirmPurchase").click(function(e) {
        var coupon = $("#coupon").val();

        if (coupon) {
            $("#applyCoupon").click();
            return;
        }

        location.href = $(this).attr('data-href');
    });
});

