let style = `
    <style>
      .field[data-address-field="company"] {
        display: none;
      }
    </style>
`

let setup = setInterval(function () {
    if(document.querySelector('.breadcrumb__item span')) {
        clearInterval(setup)
        start()
    }
},100)

function start() {

    document.body.insertAdjacentHTML('afterbegin', style)

    document.querySelectorAll('.breadcrumb__item').forEach(item => {
        if(item.innerText === 'Shipping') {
            item.closest('li').style.display = 'none'
        }
    })
    if (document.querySelector('[aria-current="step"]').innerText === "Information") {
        document.querySelector('#continue_button .btn__content').innerText = 'Continue to payment'
    } else if (document.querySelector('[aria-current="step"]').innerText === "Shipping") {
        document.querySelector('#continue_button').click()
    } else if (document.querySelector('[aria-current="step"]').innerText === "Payment") {
        document.querySelector('.test').remove()
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
    } else {
        document.querySelector('.test').remove()
    }
    ;

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Checkout improvements hypothesis 4',
        'eventAction': 'loaded'
    });
}
