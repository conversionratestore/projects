let start = setInterval(function () {
    if (document.body) {
        clearInterval(start)
        document.body.insertAdjacentHTML('afterbegin', `<style class="temp">
.woocommerce-Price-amount, .starter_package_price, .additional_package_price, .checkout_total_price {opacity: 0}</style>`)
        let exclude = ['100 KM MARSCH BERLIN', '100 KM MARSCH MÜNCHEN', 'MAMMUTMARSCH NRW']

        setTimeout(function () {
            let cart = true
            if (document.querySelector('.cart_list a:not(.remove)')) {
                exclude.forEach(item => {
                    if (jQuery('.cart_list a:not(.remove)').text().toUpperCase().includes(item)) {
                        cart = false
                    }
                })
            }

            function changePrice(item) {
                let price = +item.innerText.slice(0, -1).trim().replace(',', '.')
                price = price - 5
                item.innerText = price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
            }

            document.querySelectorAll('.product h3 a').forEach(item => {
                if (!item.innerText.toUpperCase().includes('100 KM MARSCH BERLIN')
                    && !item.innerText.toUpperCase().includes('100 KM MARSCH MÜNCHEN')
                    && !item.innerText.toUpperCase().includes('MAMMUTMARSCH NRW'))
                    item.closest('.product').querySelectorAll('.woocommerce-Price-amount').forEach(span => {
                        let price = +jQuery(span).text().slice(0, -1).trim().replace(',', '.')
                        price = price - 5
                        jQuery(span).text(price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}))
                    })
            })

            function eventPrice() {
                document.querySelectorAll('.starter_package_price').forEach((item) => {
                    changePrice(item)
                })

                // document.querySelectorAll('.additional_package_price').forEach((item) => {
                //     changePrice(item)
                // })

                document.querySelectorAll('.checkout_total_price').forEach((item) => {
                    changePrice(item)
                })

                document.querySelector('.starter_package_price')?.nextSibling?.remove()
                document.querySelector('.additional_package_price')?.nextSibling?.remove()
                document.querySelector('.checkout_total_price')?.nextSibling?.remove()
            }

            if (cart) {
                jQuery('.cart_list .woocommerce-Price-amount, .total .woocommerce-Price-amount').each((__, item) => {
                    let price = +jQuery(item).text().slice(0, -1).trim().replace(',', '.')
                    price = price - 5
                    jQuery(item).text(price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}))
                })
            }

            if (!window.location.pathname.includes('100-km-marsch/berlin') &&
                !window.location.pathname.includes('100-km-marsch/muenchen') &&
                !window.location.pathname.includes('100-km-marsch/nrw')) {
                eventPrice()
                jQuery('input[type=radio]').change(function () {
                    eventPrice()
                })
            }

            if (window.location.pathname.includes('checkout') && cart) {
                document.querySelector('#coupon_code').value = '5-euro-fix'
                document.querySelector('.checkout_coupon input[type="submit"]').click()
            }

            document.querySelector('.temp').remove()
        }, 500)
    }
}, 50)



