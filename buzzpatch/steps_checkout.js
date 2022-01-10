let style = `
    <style>
      .field[data-address-field="company"] {
        display: none;
      }
    </style>
`

let setup = setInterval(function () {
    if(document.body) {
        clearInterval(setup)
        start()
    }
},100)

function start() {

    document.body.insertAdjacentHTML('afterbegin', style)

    document.querySelectorAll('.breadcrumb__item span').forEach(item => {
        if(item.innerText === 'Shipping') {
            item.closest('li').style.display = 'none'
        }
    })

    if (document.querySelector('[aria-current="step"]').innerText === "Information") {
        let s = setInterval(function () {
            if (document.querySelector('#continue_button')) {
                clearInterval(s)
                document.querySelector('#continue_button').textContent = 'Continue to payment'
                document.querySelector('#continue_button').addEventListener('click', function (e) {
                    let toPayment = true
                    document.querySelectorAll('.step__sections .field__input:not(.field__input--select)').forEach(item => {
                        if (item.id !== 'checkout_shipping_address_company' && item.id !== 'checkout_shipping_address_address2') {
                            if (item.value === '') {
                                toPayment = false
                            }
                        }
                    })

                    if(document.querySelector('#checkout_shipping_address_province:not([hidden])')?.value === 'State') {
                        toPayment = false
                    }

                    if (toPayment) {
                        e.preventDefault()
                        window.location.search = '?previous_step=shipping_method&step=payment_method'
                    }
                })
            }

        }, 100)

    } else if (document.querySelector('[aria-current="step"]').innerText === "Payment") {
        let s = setInterval(function () {
            if (document.querySelector('.step__footer__previous-link-content')) {
                clearInterval(s)
                document.querySelector('.step__footer__previous-link-content').textContent = 'Return to information'
                document.querySelector('.step__footer__previous-link').addEventListener('click', function (e) {
                    e.preventDefault()
                    window.location.search = '?step=contact_information'
                })
            }
        }, 100)
    }
    ;

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Checkout improvements hypothesis 4',
        'eventAction': 'loaded'
    });

    (function (h, o, t, j, a, r) {
        h.hj = h.hj || function () {
            (h.hj.q = h.hj.q || []).push(arguments)
        };
        h._hjSettings = {hjid: 2247058, hjsv: 6};
        a = o.getElementsByTagName('head')[0];
        r = o.createElement('script');
        r.async = 1;
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
        a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
    window.hj = window.hj || function () {
        (hj.q = hj.q || []).push(arguments)
    };
    hj('event', 'checkout_improvements_4');
}
