document.body.insertAdjacentHTML('afterbegin', `<style class="temp">
.woocommerce-Price-amount, .starter_package_price, .additional_package_price, .checkout_total_price {opacity: 0}</style>`)

setTimeout(function () {
    function changePrice(item) {
        let price = +item.innerText.slice(0, -1).trim().replace(',', '.')
        price = price * 0.95
        item.innerText = price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
    }

    jQuery('.woocommerce-Price-amount').each((__, item) => {
        let price = +jQuery(item).text().slice(0, -1).trim().replace(',', '.')
        price = price * 0.95
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

    jQuery('input[type=radio]').change(function(){eventPrice()})

    document.querySelector('.starter_package_price')?.nextSibling?.remove()
    document.querySelector('.additional_package_price')?.nextSibling?.remove()
    document.querySelector('.checkout_total_price')?.nextSibling?.remove()

    if(window.location.pathname.includes('checkout')) {
        document.querySelector('#coupon_code').value = 'Price_Test_CRO'
        document.querySelector('.checkout_coupon input[type="submit"]').click()
    }

    document.querySelector('.temp').remove()
}, 500);

(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1191175,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    hj('event', 'price_elasticity');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Price elasticity',
    'eventAction': 'loaded'
});
