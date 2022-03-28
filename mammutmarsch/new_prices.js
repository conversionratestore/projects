let start = setInterval(function () {
    if(typeof jQuery === 'function' && (jQuery('.woocommerce-Price-amount') || jQuery('.starter_package_price') || jQuery('#coupon_code'))) {
        clearInterval(start)
        console.log('>>> start')
        const $ = jQuery
        $('.woocommerce-Price-amount').each((__, item) => {
            let price = +$(item).text().slice(0, -1).replace(',', '.')
            price = price*0.9
            $(item).text(price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        })


        console.log('>>> before')
        $('.starter_package_price, .additional_package_price, .checkout_total_price').each((__, item) => {
            let price = +$(item).text().replace(',', '.')
            price = price*0.9
            $(item).text(price.toString().replace('.', ','))
        })
        console.log($('.starter_package_price, .additional_package_price, .checkout_total_price'))

        
        console.log('>>> after')


        $('#coupon_code').val('test')
        $('.checkout_coupon input[type="submit"]').click()
    }
}, 100)


