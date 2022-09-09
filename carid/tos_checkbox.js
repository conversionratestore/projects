let interval = setInterval(() => {
    if (window.location.href.includes('/cart.php?mode=checkout&payment=cc') && document.querySelector('#checkout_form > div.cart-main-form-wrapper > div.payment-form-wrapper > div.checkout-iframe-holder > iframe') != null) {
        clearInterval(interval)
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
