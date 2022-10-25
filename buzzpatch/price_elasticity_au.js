var getProductT = '3 Pack BuzzPatch Bundle';
var getProductP = '56.00';
var getProductID = "40077473021996";
var getProductCurrency = "AUD";

//1 pack
var getpack1SalePrice = "24.00";
var getpack1RegularPrice = "31.00";
var getpack1OffPrice = "23"; //  22.58
var getpack1SavePrice = "$7";

//2 packs
var getpack2SalePrice = "43.00";
var getpack2RegularPrice = "62.00";
var getpack2OffPrice = "31"; // 30.64
var getpack2SavePrice = "$19";

//3 packs
var getpack3SalePrice = "56.00";
var getpack3RegularPrice = "93.00";
var getpack3OffPrice = "40"; // 39.78
var getpack3SavePrice = "$37";

//4 packs
var getpack4SalePrice = "65.00";
var getpack4RegularPrice = "124.00";
var getpack4OffPrice = "48"; // 47.58
var getpack4SavePrice = "$59";

const eachPrice = ['18.66', '16.25', '21.50', '24.00'] // 3, 4, 2, 1

const waitForElements = setInterval(() => {
    if (
        document.querySelector('.js-packs input')
        && document.querySelectorAll('.radio-inline span')[3]
        && document.querySelector('#addToCart')
    ) {
        clearInterval(waitForElements)

        document.querySelector('.js-packs input').checked = true
        document.querySelector('.js-total .pr').innerText = '56.00'
        document.querySelector('.js-total .ps').innerText = '40'
        document.querySelector('.js-regular .rs').innerText = '$37'

        document.querySelectorAll('.radio-inline span').forEach((el, index) => {
            el.innerText = `$${eachPrice[index]} Each`
        });

        document.querySelector('#addToCart').addEventListener('click', function (e) {
            e.preventDefault()

            let formData = { 'items': [{ 'id': '40077473021996', 'quantity': 1 }] }

            var selectedPackOption = document.querySelector('.js-packs input[type=radio]:checked').value

            switch (selectedPackOption) {
                case '39264142393388': // 3 pack
                    formData.items[0].id = '40077473021996'
                    break;
                case '39264134070316': // 4 pack
                    formData.items[0].id = '40077473120300'
                    break;
                case '39307585519660': // 2 pack
                    formData.items[0].id = '40077473087532'
                    break;
                case '34137893142572': // 1 pack
                    formData.items[0].id = '40077473054764'
                    break;
                default:
                    break;
            }

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
        })
    }
}, 100)

window.dataLayer = window.dataLayer || []
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Price elasticity test for AU',
    'eventAction': 'loaded',
    'eventLabel': ''
})

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', 'price_elasticity_au', 'variant_1')
    }
}, 100)
