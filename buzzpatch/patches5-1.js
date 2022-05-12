const priceInfo = ['47.50', '62', '124.95', '78', '9.5']

const myPack = `
<div class="js-packs my_pack"> 
	<input type="radio" name="radios" id="radios-5" value=""> 
	<label class="radio-inline" for="radios-5"> 5 Packs<br><span>$9.5 Each</span></label> 
</div>
`

let isSecondChecked = setInterval(() => {
	if (document.querySelectorAll('.js-packs input:checked')[2] && document.querySelector('.my_pack input')) {
		clearInterval(isSecondChecked)
		document.querySelector('.my_pack input').click()
	}
}, 100)

const onCLick = () => {
	document.querySelector('.my_pack input').addEventListener('click', () => {
		document.querySelector('.prices .pr').innerText = priceInfo[0]
		document.querySelector('.prices .ps').innerText = priceInfo[1]
		document.querySelector('.prices .rp').innerText = priceInfo[2]
		document.querySelector('.prices .rs').innerText = priceInfo[3]

		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Tiles 5 instead of 1',
			'eventAction': 'Clicks on 5 packs tile v2',
		})
	})
}

let waitForPatch2 = setInterval(() => {
	if (document.querySelectorAll('.js-packs label')[3]) {
		clearInterval(waitForPatch2)

		document.querySelectorAll('.js-packs')[3].insertAdjacentHTML('afterend', myPack)
		document.querySelectorAll('.js-packs')[3].remove()

		let waitForMyPack = setInterval(() => {
			if (document.querySelector('.my_pack')) {
				clearInterval(waitForMyPack)

				onCLick()
			}
		}, 100)
	}
}, 200)

document.querySelector('#addToCart').addEventListener('click', function (e) {
	if (document.querySelector('.my_pack input:checked')) {
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
}, 100)

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Tiles 5 instead of 1',
	'eventAction': 'loaded',
})