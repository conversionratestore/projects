document.body.insertAdjacentHTML('afterbegin', `<style class="temp">
.woocommerce-Price-amount, .starter_package_price, .additional_package_price, .checkout_total_price {opacity: 0}</style>`)

function create() {
    setTimeout(function () {
        function changePrice(item) {
            let price = +item.innerText.slice(0, -1).trim().replace(',', '.')
            price = price - 5
            item.innerText = price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
        }

        jQuery('.woocommerce-Price-amount').each((__, item) => {
            let price = +jQuery(item).text().slice(0, -1).trim().replace(',', '.')
            price = price - 5
            jQuery(item).text(price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}))
        })

        function eventPrice() {
            document.querySelectorAll('.starter_package_price').forEach((item) => {
                changePrice(item)
            })

            document.querySelectorAll('.additional_package_price').forEach((item) => {
                changePrice(item)
            })

            document.querySelectorAll('.checkout_total_price').forEach((item) => {
                changePrice(item)
            })
        }

        eventPrice()

        jQuery('input[type=radio]').change(function () {
            eventPrice()
        })

        document.querySelector('.starter_package_price')?.nextSibling?.remove()
        document.querySelector('.additional_package_price')?.nextSibling?.remove()
        document.querySelector('.checkout_total_price')?.nextSibling?.remove()

        if (window.location.pathname.includes('checkout')) {
            document.querySelector('#coupon_code').value = 'Price_Test_CRO'
            document.querySelector('.checkout_coupon input[type="submit"]').click()
        }

        document.querySelector('.temp').remove()
    }, 500)
}

let exclude = ['100 KM MARSCH BERLIN', '100 KM MARSCH MÜNCHEN', 'MAMMUTMARSCH NRW']

let start = setInterval(function () {
    if (document.querySelector('.cart_list a:not(.remove)')) {
        clearInterval(start)

        exclude.forEach(item => {
            if(!document.querySelector('.cart_list a:not(.remove)').innerText.toUpperCase().includes(item)){
                create()
            }
        })
    }
}, 50)
