let interval = setInterval(() => {
    if (window.location.href.includes('/cart.php?mode=checkout&payment=cc') && document.querySelector('#checkout_form > div.cart-main-form-wrapper > div.payment-form-wrapper > div.checkout-iframe-holder > iframe') != null) {
        clearInterval(interval)
        APP.abTermsCheckboxVerification()
    }
})
