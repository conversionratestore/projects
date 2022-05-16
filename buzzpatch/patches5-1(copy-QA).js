const priceInfo = ['47.50', '62', '124.95', '78', '9.5']

let waitForCheckedMyPack = setInterval(() => {
    if (document.querySelectorAll('.js-packs input')[3].checked && document.querySelector('.rs')) {
        clearInterval(waitForCheckedMyPack)

        document.querySelector('.prices .pr').innerText = priceInfo[0]
        document.querySelector('.prices .ps').innerText = priceInfo[1]
        document.querySelector('.prices .rp').innerText = priceInfo[2]
        document.querySelector('.prices .rs').innerText = priceInfo[3]
    }
}, 200);

let waitForElement = setInterval(() => {
    if (document.querySelectorAll('.js-packs label')[3]) {
        clearInterval(waitForElement)

        document.querySelectorAll('.js-packs label')[3].innerHTML = ` 5 Packs<br><span>$${priceInfo[4]} Each</span>`

        document.querySelectorAll('.js-packs')[3].addEventListener('click', (e) => {
            let waitForPrice = setInterval(() => {
                if (document.querySelector('.rs').innerText === '10') {
                    clearInterval(waitForPrice)

                    document.querySelector('.prices .pr').innerText = priceInfo[0]
                    document.querySelector('.prices .ps').innerText = priceInfo[1]
                    document.querySelector('.prices .rp').innerText = priceInfo[2]
                    document.querySelector('.prices .rs').innerText = priceInfo[3]
                }
            }, 100)
        })
    }
}, 200)

document.querySelector('#addToCart').addEventListener('click', function (e) {
    if (document.querySelectorAll('.js-packs input')[3].checked) {
        e.preventDefault()

        let formData = { 'items': [{ 'id': '40266425696300', 'quantity': 1 }] }

            ; (async () => {
                try {
                    await fetch('/cart/clear.js', { method: 'POST', headers: { 'Content-Type': 'application/json' } })

                    await fetch('/cart/add.js', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                    }).then(() => {
                        window.location.href = '/checkout'
                    })
                } catch (err) {
                    console.error(err)
                }
            })()
    }
})

let waitForClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(waitForClarity)
        clarity('set', 'tiles_5_instead_of_1', 'variant_1')
    }
}, 200)

window.dataLayer = window.dataLayer || []
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Tiles 5 instead of 1',
    'eventAction': 'loaded',
})