let new_prices = ['12.5', '37.5', '50', '74.97', '37.47', '40077473021996']

let init = setInterval(function () {
    if (document.querySelector('.js-packs')) {
        clearInterval(init)
        start()
    }
}, 100)

function start() {

    document.querySelectorAll('.js-packs')[0].addEventListener('click', function (e) {
        e.preventDefault()
        console.log(this)
        document.querySelector('.pr').textContent = new_prices[1]
        document.querySelector('.ps').textContent = new_prices[2]
        document.querySelector('.rp').textContent = new_prices[3]
        document.querySelector('.rs').textContent = new_prices[4]
        document.querySelector('.js-packs input:checked').checked = false
        const item = this
        setTimeout(function () {
            item.querySelector('input').checked = true
        }, 50)
    })

    document.querySelectorAll('.js-packs span:not(.bestseller)')[0].textContent = `$${new_prices[0]} Each`

    document.querySelectorAll('.js-packs input')[0].value = new_prices[5]

    document.querySelectorAll('.js-packs')[0].click()


    document.querySelector('#addToCart').addEventListener('click', function (e) {
        if(document.querySelector('.js-packs input:checked').value === '40077473021996') {
            e.preventDefault()
            let formData = {
                'items': [{
                    'id': document.querySelector('.js-packs input:checked').value,
                    'quantity': 1
                }]
            };
            fetch('/cart/clear.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res)=> {
                fetch('/cart/add.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                    .then(response => {
                        return response.json();
                    }).then(data => {
                    window.location.href = '/checkout'
                })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            })
        }
    })
}


let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity("set", "price_elasticity_hypothesis", "change_3_pack");
    }
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: US Price elasticity (change price for 3 pack)',
    'eventAction': 'loaded'
});

