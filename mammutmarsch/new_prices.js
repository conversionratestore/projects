let start = setInterval(function () {
    if(typeof jQuery === 'function' && ($('.woocommerce-Price-amount') || $('.starter_package_price') || $('#coupon_code'))) {
        clearInterval(start)

        const $ = jQuery
        $('.woocommerce-Price-amount').each((__, item) => {
            let price = +$(item).text().slice(0, -1).replace(',', '.')
            price = price*0.9
            $(item).text(price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        })


        $('.starter_package_price, .additional_package_price, .checkout_total_price').each((__, item) => {
            let price = +$(item).text().replace(',', '.')
            price = price*0.9
            $(item).text(price.toString().replace('.', ','))
        })


        $('#coupon_code').val('test')
        $('.checkout_coupon input[type="submit"]').click()
    }
}, 100)


