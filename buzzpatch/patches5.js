const style = `
	<style>
	
		.custom_checked label {
			color: #fff !important;
			background: #FF3C81;
		}
	</style>
`

document.head.insertAdjacentHTML('beforeend', style)

const priceInfo = ['59.96', '50', '119.96', '60', '11.99']

let waitForElement = setInterval(() => {
	if (document.querySelectorAll('.js-packs label')[2]) {
		clearInterval(waitForElement)

		document.querySelectorAll('.js-packs label')[2].innerHTML = ` 5 Packs<br><span>$${priceInfo[4]} Each</span>`

		document.querySelectorAll('.js-packs')[2].classList.add('my_custom')

		document.querySelector('.form-group').addEventListener('click', (e) => {
			if (e.target.closest('.js-packs:not(.my_custom)')) {
				document.querySelector('.custom_checked')?.classList.remove('custom_checked')
			}
			if (e.target.closest('.js-packs.my_custom')) {
				e.preventDefault()

				if (document.querySelector('.js-packs input:checked')) {
					document.querySelector('.js-packs input:checked').checked = false
				}

				if (document.querySelector('.prices .rs')) {
					document.querySelector('.js-packs.my_custom').classList.add('custom_checked')

					document.querySelector('.prices .pr').innerText = priceInfo[0]
					document.querySelector('.prices .ps').innerText = priceInfo[1]
					document.querySelector('.prices .rp').innerText = priceInfo[2]
					document.querySelector('.prices .rs').innerText = priceInfo[3]
				}
			}
		})
	}
}, 200)

document.querySelector('#addToCart').addEventListener('click', function (e) {
	if (document.querySelector('.custom_checked')) {
		e.preventDefault()

		let formData = { 'items': [{ 'id': '40266425696300', 'quantity': 1 }] }

		fetch('/cart/clear.js', { method: 'POST', headers: { 'Content-Type': 'application/json' } })
		fetch('/cart/add.js', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		}).then(response => {
			return response.json()
		}).then(data => {
			window.location.href = '/checkout'
		}).catch((error) => {
			console.error('Error:', error)
		})
	}
})

let waitForClarity = setInterval(() => {
	if (typeof clarity === 'function') {
		clearInterval(waitForClarity)
		clarity('set', 'tiles_5_instead_of_2', 'variant_1')
	}
}, 100)

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Tiles 5 instead of 2',
	'eventAction': 'loaded',
})

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Tiles 5 instead of 2',
	'eventAction': 'Clicks on 5 packs tile',
})

