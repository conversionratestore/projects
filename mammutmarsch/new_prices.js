let start = setInterval(function () {
    if(typeof jQuery === 'function' && (jQuery('.woocommerce-Price-amount') || jQuery('.starter_package_price') || jQuery('#coupon_code'))) {
        clearInterval(start)

        setTimeout(function () {

            const $ = jQuery
            $('.woocommerce-Price-amount').each((__, item) => {
                let price = +$(item).text().slice(0, -1).replace(',', '.')
                price = price * 0.95
                $(item).text(price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}))
            })

            $('.starter_package_price, .additional_package_price, .checkout_total_price').each((__, item) => {
                let price = +$(item).text().replace(',', '.')
                price = price * 0.95
                $(item).text(price.toString().replace('.', ','))
                $(item).css('opacity', '1')
            })

            $('#coupon_code').val('Price_Test_CRO')
            $('.checkout_coupon input[type="submit"]').click()
        }, 300)
    }
}, 100)


