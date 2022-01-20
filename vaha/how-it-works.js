/*
    add tiny slider cdn links
*/

const linkCustom = document.createElement('link')
linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css'
linkCustom.rel = 'stylesheet'
document.head.appendChild(linkCustom)

const scriptCustom = document.createElement('script')
scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js'
scriptCustom.async = false
document.head.appendChild(scriptCustom)

/*
    add stylesheet
*/

const myStyle = `
	<style>	
		.container-3dy0SD {
			bottom: -1px;
			flex-wrap: wrap;
			height: auto;
		}
		
		.container-3dy0SD.hidden-32gGOP {
			pointer-events: none;
		}
		
		.zsiq_custommain {
			z-index: 37 !important;
		}
	
		.slider-wrapper {
			position: fixed;
			left: 0;
		    bottom: -1px;
		    width: 100%;
		    background-color: #F6F3EE;
			border-radius: 16px 16px 0 0;
			text-align: center;
			/*padding: 25px;*/
			z-index: 38 !important;
			max-height: 1000px;
			transition: max-height 1s ease-in-out;
			overflow: hidden;
			box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0px -4px 60px rgba(0, 0, 0, 0.1);
			/*opacity: 1;*/
		}
		
		.slider-wrapper.hide {
			/*opacity: 0;*/
			max-height: 0;
			/*padding: 0;	*/
			pointer-events: none;
		}
		
		.outer {
			margin: 25px;
		}
		
		.btn-wrapper {			
			text-align: center;
		}
	
		.btn-wrapper button {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 9px;
			width: 100%;		
			padding: 0 13px;
			background-color: #FFF;
			border: 1px solid #FFD26E;
			border-radius: 5px;
			font-size: 16px;
			color: #222;
			font-weight: 900;
			line-height: normal;
			height: 48px;
		}	
		
		.container-3dy0SD .btn-wrapper,
		.button-3MJU8U {
			flex: 0 1 47%
		}
		
		.btn-wrapper button span {
			line-height: normal;
		}
		
		.slider-wrapper .btn-wrapper {
			margin: 16px auto 0; 
		}	
		
		.slider-wrapper .btn-wrapper button {
			background-color: #FFD26E;			
		}
		
		/*.items {*/
		/*	position: relative;			*/
		/*	background-color: #F6F3EE;*/
		/*	border-radius: 16px 16px 0 0;*/
		/*	text-align: center;*/
		/*	padding: 25px;*/
		/*}*/
		
		.closeX {
			position: absolute;
			top: 14px;
			right: 20px;
			padding: 5px;
		}
		
		.items .step,
		.items .title {
			color: #222;
			font-weight: 900;
			font-size: 18px;
			text-transform: uppercase;
			line-height: 27px;
		}
		
		.items .step {
			text-align: left;
			margin-bottom: 24px;
			margin-top: 6px;
		}
		
		.items .title {
			margin: 24px 0 16px;
		}
		
		.items .text {
			color: #505050;
			font-size: 16px;
			font-weight: normal;
			line-height: 24px;
		}
		
		.btn-wrapper button img {
			margin-top: 2px;
		}
		
		.btn-wrapper .hide-btn {
			display: none;
		}
		
		.tns-nav {
			margin-top: 5px; 
		}
		
		.tns-nav button {
			width: 10px;
			height: 10px;
			border: 1px solid #FFD26E;
			background-color: #FFF;
			border-radius: 50%;
			margin: 0 5px;
			padding: 0;
		}
		
		.tns-nav button.tns-nav-active {
			background-color: #FFD26E;
		}
		
		.tns-controls {
			display: none;
		}
		
		.headline-2zqlww {
			display: none;
		}
		
		.button-3MJU8U {
			height: 48px;
			background-color: #F9D37D;
		}
		
		.button-3MJU8U span {
			text-transform: uppercase;
		}
		
		.default-2nRAol .icon {
			width: auto;
			height: auto;
			margin-left: 9px;
		}
		
		.days {
			flex: 1 0 100%;
			margin-top: 6px;
			font-weight: 500;
			font-size: 12px;
			letter-spacing: 0.16px;
			text-align: center;
			line-height: normal;
		}
	</style>
`

document.head.insertAdjacentHTML('beforeend', myStyle)

/*
    localisation
*/

const textArr = {
	'en': {
		how: 'See how it works',
		step: 'step',
		next: 'Next',
		free: 'Try VAHA for free',
		freeDays: 'Try VAHA 30 days for free!',
		items: [
			[
				`30-Day Free Trial &<br> Free Delivery`,
				`Get your VAHA delivered directly to your home & assembled for free. Start your free trial. Cancel at any time during the 30-day trial period. You won’t be charged anything.`,
			],
			[
				`Join 2000+<br> Live & On-Demand Classes`,
				`Train any time you want.Pilates bootcamp, back training, yoga class, dance, boxing and more. Work out with your community, every single day.`,
			],
			[
				`1:1 PERSONAL TRAINING<br> AT YOUR HOME`,
				`Certified and professional — VAHA's personal trainers provide you with 1 to 1 support and keep you motivated.`,
			],
			[
				`Smart Tracking &<br> Tailored Workout Plans`,
				`Get perfect technique with VAHA's sensors and our AI technology. Your tailored workout plan progresses according to your own goals.`,
			],
		],
	},
	'ge': {
		how: 'Sehen, wie es funktioniert',
		step: 'schritt',
		next: 'Weiter',
		free: 'VAHA kostenlos testen',
		freeDays: 'Teste VAHA 30 Tage kostenlos!',
		items: [
			[
				`Kostenlose 30-tägige Testversion & kostenlose Lieferung`,
				`Lass dir deinen VAHA kostenlos nach Hause liefern und montieren. Starte jetzt deine kostenlose Testversion. Du kannst jederzeit innerhalb der 30-tägigen Testphase kündigen. Du zahlst keinerlei Gebühren.`,
			],
			[
				`Teilnahme an mehr als 2000 Live- & On-Demand-Kursen`,
				`Trainiere, wann immer du möchtest. Pilates-Bootcamps, Rücken-Workouts, Yoga-Kurse, Tanzen, Boxen und mehr. Trainiere jeden Tag gemeinsam mit deiner Community.`,
			],
			[
				`INDIVIDUELLES PERSONAL TRAINING BEI DIR ZU HAUS`,
				`Zertifiziert und professionell – die Personal Trainer von VAHA stehen dir persönlich zur Seite und sorgen dafür, dass du motiviert bleibst.`,
			],
			[
				`Smartes Tracking & individuelle Trainingspläne`,
				`Die Sensoren und KI-Technologie von VAHA versprechen dir eine perfekte Trainingstechnik. Dein maßgeschneiderter Trainingsplan wird kontinuierlich an deine Ziele angepasst.`,
			],
		],
	},
}
const language = window.location.host.split('.')[0] === 'uk' ? 'en' : 'ge'
const localObj = textArr[language]

/*
    slider items template
*/

let sliderItems = ``

localObj.items.forEach((item, index) => {
	let number = index + 1
	let imgUrl = `https://conversionratestore.github.io/projects/vaha/images/image${ number }.svg`

	sliderItems += `
		<div class="items">
			<p class="step">${ localObj.step } ${ number }</p>
			<img src=${ imgUrl } alt="mirror">
			<p class="title">${ localObj.items[index][0] }</p>
			<p class="text">${ localObj.items[index][1] }</p>		
		</div>	
	`
})

/*
    general template
*/

const openPopup = `
	<div class="btn-wrapper">
		<button class="open-popup">
			<span>${ localObj.how }</span>
			<img src="https://conversionratestore.github.io/projects/vaha/images/arrow_right_black.svg" alt="arrow">
		</button>
	</div>
`

const template = `
	<div class="quiz">
		<div class="slider-wrapper hide">
			<div class="outer">		
				<div class="slider">
					${ sliderItems }				
				</div>
				<div class="btn-wrapper">
					<button class="btn-free hide-btn">					
						<span>${ localObj.free }</span>
						<img src="https://conversionratestore.github.io/projects/vaha/images/arrow_right_black.svg" alt="arrow">
					</button>
					<button class="btn-next">
						<span>${ localObj.next }</span>
						<img src="https://conversionratestore.github.io/projects/vaha/images/arrow_right_black.svg" alt="arrow">
					</button>
				</div>
				<img class="closeX" src="https://conversionratestore.github.io/projects/vaha/images/closeX.svg" alt="close">
			</div>
		</div>				
	</div>
`

const tryVaha = `<p class="days">${ localObj.freeDays }</p>`

document.querySelector('.container-3dy0SD').insertAdjacentHTML('afterbegin', openPopup)
document.querySelector('.container-3dy0SD').insertAdjacentHTML('beforeend', tryVaha)
document.querySelector('.vaha-container').insertAdjacentHTML('afterbegin', template)

/*
    Slider
*/

let sliderInterval = setInterval(() => {
	if (typeof tns == 'function' && document.querySelectorAll('.slider')[0]) {
		clearInterval(sliderInterval)

		// activate tiny slider
		let tinySlider = tns({
			container: '.slider',
			items: 1,
			autoplay: false,
			controls: true,
			loop: false,
			autoplayButton: false,
			autoplayButtonOutput: false,
			nav: true,
			navPosition: 'bottom',
			preventScrollOnTouch: 'auto',
			swipeAngle: 30,
			navAsThumbnails: true,
		})

		// custom next slider button
		document.querySelector('.btn-next').addEventListener('click', () => {
			document.querySelector('.tns-controls [data-controls="next"]').click()
		})

		observeElement()

		// let info = tinySlider.getInfo()
		// let currIndex = info.index

		// let sliderNumber = info.index + 1

		let sliderNumber = 1

		tinySlider.events.on('indexChanged', function () {
			let info = tinySlider.getInfo()

			sliderNumber = info.index + 1
		})

		document.querySelector('.btn-next').addEventListener('click', () => {
			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: See how it works flow',
				'eventAction': 'Clicks on Next button',
				'eventLabel': 'Step - ' + (sliderNumber - 1),
			})

			console.group('eventAction Clicks on Next button')
			console.log('eventLabel Step - ' + (sliderNumber - 1))
			console.groupEnd()
		})

		document.querySelector('.closeX').addEventListener('click', () => {
			document.querySelector('.slider-wrapper').classList.add('hide')

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: See how it works flow',
				'eventAction': 'Clicks on close icon',
				'eventLabel': 'Step - ' + sliderNumber,
			})

			console.group('eventAction Clicks on Close icon')
			console.log('eventLabel Step - ' + sliderNumber)
			console.groupEnd()
		})
	}
}, 200)

function observeElement() {
	let elemToObserve = document.querySelectorAll('.items.tns-item')[3]
	let nextBtn = document.querySelector('.btn-next')
	let freeBtn = document.querySelector('.btn-free')

	let observer = new MutationObserver(function () {
		if (elemToObserve.classList.contains('tns-slide-active')) {
			freeBtn.classList.remove('hide-btn')
			nextBtn.classList.add('hide-btn')
		} else {
			freeBtn.classList.add('hide-btn')
			nextBtn.classList.remove('hide-btn')
		}
	})
	observer.observe(elemToObserve, {
		attributes: true,
	})
}

let popupInterval = setInterval(() => {
	if (document.querySelector('.open-popup') && document.querySelector('.slider-wrapper')) {
		clearInterval(popupInterval)

		document.querySelector('.open-popup').addEventListener('click', () => {
			document.querySelector('.slider-wrapper').classList.remove('hide')

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: See how it works flow',
				'eventAction': 'Clicks on the See how it works button',
			})

			console.log('eventAction Clicks on the See how it works button')
		})
	}
}, 200)

let btnInberval = setInterval(() => {
	if (document.querySelector('.btn-free') && document.querySelector('.slider-wrapper')) {
		clearInterval(btnInberval)

		document.querySelector('.btn-free').addEventListener('click', () => {
			document.querySelector('.settings-F00Ayd').click()

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: See how it works flow',
				'eventAction': 'Click on Try vaha for free button',
			})

			console.log('eventAction Click on Try vaha for free button')

			document.querySelector('.slider-wrapper').classList.add('hide')
		})
	}
}, 200)

const elements = ['.purchase-button', '.mobile-menu', '.promo-overlay-button']

elements.forEach(element => {
	let elInterval = setInterval(() => {
		if (
			document.querySelector(element) && document.querySelector('.slider-wrapper')
		) {
			clearInterval(elInterval)

			document.querySelector(element).addEventListener('click', () => {
				console.log('close')

				document.querySelector('.slider-wrapper').classList.add('hide')
			})
		}
	}, 200)
})

;(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments)
	}
	h._hjSettings = {hjid: 1754586, hjsv: 6}
	a = o.getElementsByTagName('head')[0]
	r = o.createElement('script')
	r.async = 1
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
	a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
hj('event', 'see_how_it_works_flow')

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: See how it works flow',
	'eventAction': 'loaded',
})

console.log('eventAction loaded')

