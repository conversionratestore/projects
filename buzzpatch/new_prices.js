let new_prices = [
	['15.95', '47.85', '52', '99', '51', '40077473021996'], // 3pack
	['13.95', '55.80', '58', '132', '76', '40077473120300'], // 4pack
	['17.95', '35.90', '46', '66', '30', '40077473087532'], // 2pack
	['19.95', '19.95', '39', '33', '13', '40077473054764'] // 1pack
]

let init = setInterval(function () {
	if(document.querySelector('.js-packs')) {
		clearInterval(init)
		start()
	}
}, 100)

function start() {
	document.querySelectorAll('.js-packs').forEach((item, i) => {
		item.addEventListener('click', function (e) {
			e.preventDefault()
			document.querySelector('.pr').textContent = new_prices[i][1]
			document.querySelector('.ps').textContent = new_prices[i][2]
			document.querySelector('.rp').textContent = new_prices[i][3]
			document.querySelector('.rs').textContent = new_prices[i][4]

			document.querySelector('.js-packs input:checked').checked = false
			setTimeout(function () {
				item.querySelector('input').checked = true
			}, 50)
		})
	})

	document.querySelectorAll('.js-packs input').forEach((item, i) => {
		item.value = new_prices[i][5]
	})

	document.querySelectorAll('.js-packs')[0].click()

	document.querySelectorAll('.js-packs span:not(.bestseller)').forEach((item, i) => {
		item.textContent = `$${new_prices[i][0]} Each`
	})

	document.querySelector('#addToCart').addEventListener('click', function (e) {
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
		})
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


let record = setInterval(function () {
	if(typeof clarity === 'function') {
		clearInterval(record)
		clarity("set", "price_elasticity_hypothesis", "variant_1");
	}
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: Price elasticity hypothesis',
	'eventAction': 'loaded'
});
