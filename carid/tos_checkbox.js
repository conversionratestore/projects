let interval = setInterval(() => {
    if (window.location.href.includes('https://www.carid.com/cart.php?mode=checkout') && document.querySelector('#checkout_form > div.cart-main-form-wrapper > div.payment-form-wrapper > div.checkout-iframe-holder > iframe') != null) {
        clearInterval(interval)
        document.body.insertAdjacentHTML('afterbegin',`<style>
            #checkout_form > div.cart-main-form-wrapper > div.payment-form-wrapper > div.checkout-iframe-holder > iframe {
                min-height: 418px;
            }
        </style>`)
        APP.abTermsCheckboxVerification()
    }
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Accept TOS checkbox',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "tos_checkbox", "variant_1");
    }
}, 100)
