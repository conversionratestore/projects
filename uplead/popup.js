const calcItemInput = document.querySelectorAll('.calculator__item input')
const selectedSystem = document.querySelectorAll('.calculator__system span')
const calcBtn = document.querySelector('.calculator__btn')
const squareProduct = '{{product.metafields.details.square}}'.split(',')
let currentPrice = ('{{ current_variant.price | money }}').replace(/[^0-9.]/g, '')
const tiles = document.querySelector('.calculator__result .size .tiles')
const calcPrice = document.querySelector('.calculator__result .calculator__price')
const qty = document.querySelector('.quantity-wrapper input')
const money = document.querySelector('.bundle-sticky_money')
const addBtn = document.querySelector('.quantity-submit-row__submit input')
let selectedIndex = 0

let isSale = false

let isSaleInterval = setInterval(() => {
	if(document.querySelector('.vtl-ub-vd-widget')) {
		isSale = true
	}
}, 200)

setTimeout(() => {
	clearInterval(isSaleInterval)
}, 10000)

document.body.addEventListener('click', toggleTooltip)

calcItemInput.forEach(input => {
	input.addEventListener('change', function (event) {
		let currSize = squareProduct[selectedIndex] ? squareProduct[selectedIndex] : squareProduct[0]
		console.log(currSize)
		let square = document.querySelector('.system_ft.system_active') ? currSize * 10.7639 : currSize

		changeInput(event)

		calc(square)
	})
})

selectedSystem.forEach(span => span.addEventListener('click', selectSystem))

let sizeBtnInterval = setInterval(() => {
	if (document.querySelectorAll('.options--size a')) {
		clearInterval(sizeBtnInterval)

		let optionsSize = document.querySelectorAll('.options--size a')

		findActiveSize(optionsSize)

		optionsSize.forEach(item => {
			item.addEventListener('click', () => {
				setTimeout(() => {
					currentPrice = (document.querySelector('.current-price').innerText).replace(/[^0-9.]/g, '')

					findActiveSize(optionsSize)

					console.log(squareProduct[selectedIndex])

					let currSize = squareProduct[selectedIndex] ? squareProduct[selectedIndex] : squareProduct[0]

					console.log(currSize)
					let square = document.querySelector('.system_ft.system_active') ? currSize * 10.7639 : currSize

					calc(square)
				}, 100)
			})
		})
	}
}, 1000)

function findActiveSize(options) {
	options.forEach((size, index) => {
		if (size.classList.contains('active')) {
			selectedIndex = index
		}
	})
}

setTimeout(() => {
	clearInterval(sizeBtnInterval)
}, 10000)

document.querySelectorAll('.quantity-wrapper a').forEach(item => {
	item.addEventListener('click', () => {
		setTimeout(() => {
			let [, price] = calcSale(qty.value)
			console.log('price here', price)
			money.innerText = '£' + price
		}, 100)
	})
})

function toggleTooltip(e) {
	if (e.target.classList.contains('calculator__tooltip')) {
		document.querySelector('.calculator__help_active')?.classList.remove('calculator__help_active')
		e.target.closest('.calculator__help').classList.add('calculator__help_active')
	} else {
		document.querySelector('.calculator__help_active')?.classList.remove('calculator__help_active')
	}
}

function calc(square) {
	setTimeout(() => {
		if (+calcItemInput[0].value !== 0 && +calcItemInput[1].value !== 0) {
			let tilesValue = calcItemInput[0].value * calcItemInput[1].value / square

			changeBtn(Math.ceil(tilesValue))
		} else if (calcItemInput[0].value == 0 && calcItemInput[1].value == 0 && calcItemInput[2].value == 0) {
			setDefaultValues()
		} else {
			let tilesValue = calcItemInput[2].value / square

			changeBtn(Math.ceil(tilesValue))
		}
	}, 100)
}

function changeInput(e) {
	if (e.target.value > 0) {
		e.target.classList.add('input_active')
	} else {
		e.target.classList.remove('input_active')
	}

	if (e.target.closest('.calculator__item_footage') && e.target.value > 0) {
		calcItemInput[0].value = 0
		calcItemInput[1].value = 0
		calcItemInput[0].classList.remove('input_active')
		calcItemInput[1].classList.remove('input_active')
	} else {
		calcItemInput[2].value = 0
		calcItemInput[2].classList.remove('input_active')
	}
}

function selectSystem(e) {
	let systemActive = document.querySelector('.system_active')
	let sizeSystem = document.querySelectorAll('.size__system')
	let calcBody = document.querySelector('.calculator__body')
	let inputs = document.querySelectorAll('.calculator__item input')

	systemActive.classList.remove('system_active')
	e.target.classList.add('system_active')

	let metricActive = document.querySelector('.system_m.system_active')

	if (metricActive) {
		sizeSystem.forEach(ft => {
			ft.innerText = '(m)'
		})
		calcBody.classList.add('calculator__body_metric')
	} else {
		sizeSystem.forEach(ft => {
			ft.innerText = '(ft)'
		})
		calcBody.classList.remove('calculator__body_metric')
	}

	inputs.forEach(input => {
		input.value = 0
	})

	setDefaultValues()
}

function changeBtn(tilesNumber) {
	console.log('tilesNumber', tilesNumber)
	let btnText

	let [sale, price] = calcSale(tilesNumber)

	if (!sale) {
		btnText = `<span>ADD <span class="count">${ tilesNumber } TILES</span> TO CART </span>`
	} else {
		btnText = `<span>ADD <span class="count">${ tilesNumber } TILES</span> TO CART AND GET <span class="percent"><span>${ sale }%</span>off</span></span>`
	}

	tiles.innerText = tilesNumber
	calcPrice.innerHTML = `£${ price } ${ sale ? `<span class="discount">(${ sale }%Off)</span>` : '' }`
	calcBtn.classList.add('calculator__btn_active')
	calcBtn.innerHTML = btnText

	qty.value = tilesNumber

	console.log('price', price)
	money.innerText = '£' + price

	calcBtn.addEventListener('click', () => {
		qty.value = tilesNumber
		addBtn.click()
	})
}

function setDefaultValues() {
	calcPrice.innerText = ''
	tiles.innerText = 'X'
	qty.value = 1
	money.innerText = '£' + currentPrice
	calcBtn.classList.remove('calculator__btn_active')
	calcBtn.innerText = 'Fill in the form to see your results'
}

function calcSale(tilesNumber) {
	let sale
	let MathPrice
	let MathPriceRound
	let divider

	if(!isSale) {
		sale = 0
	} else if (9 <= tilesNumber && tilesNumber <= 24) {
		sale = 3.5
	} else if (25 <= tilesNumber && tilesNumber <= 99) {
		sale = 6
	} else if (100 <= tilesNumber && tilesNumber <= 199) {
		sale = 10
	} else if (200 <= tilesNumber && tilesNumber <= 399) {
		sale = 12.5
	} else if (400 <= tilesNumber) {
		sale = 15
	} else {
		sale = 0
	}

	divider = ((currentPrice * tilesNumber) / (100 * sale)) ? '' : 0
	MathPrice = (currentPrice * tilesNumber) - divider

	MathPriceRound = (Math.round(MathPrice * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2)

	return [sale, MathPriceRound]
}

