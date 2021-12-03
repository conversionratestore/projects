const customStyle = `
	<style>
		.uael-rbs-toggle,
		.accountPlans__freeUser-switch {
			display: none !important;
		}
		
		.accountPlans__freeUser-header-title {
			margin-bottom: 25px;
		}
		
		.banner-custom {
			display: flex;
			flex-direction: column;
            align-items: center;
    		margin: 40px auto 0;
			
		}
		
		.elementor-1907 .elementor-element.elementor-element-e863aec {
		 padding-top: 30px !important;
		}
		
		
		
		.banner-custom p {
			margin: 0 !important;
			font-family: 'Gilroy', sans-serif;
		}
		
		.title-wrapper{
			position: relative;	
			cursor: pointer;
		}
		
		.banner-custom p.title_action {
		
			
			color: #489FB8;
			font-weight: 600;
			font-size: 20px;
			cursor: pointer;
			border-bottom: 1px solid;
			margin-bottom: 35px;
		}
		
		.arrow {
			
			/*top: 55px;*/
			/*left: 50%;*/
			/*transform: translateX(-50%);*/
			display: block;
			width: 20px;
			height: 30px;
			background: url("https://conversionratestore.github.io/projects/uplead/img/Arrow1.svg") no-repeat;
			margin: 15px auto 0;

		}
		
		.plans {
			position: relative;
			width: 100%;
			padding: 30px;
			background: #F8FBFB;
			border-radius: 20px;
			margin-top: 30px;
		}
		
		.wrapper-custom, .arrow
		 {
			
			opacity: 1;
			
			overflow: hidden;
			transition: all .7s ease;
		}
		
		.hide .wrapper-custom{
		 
			height: 0;
		    margin: 0;
		    padding: 0;
		    opacity: 0;
		    /*pointer-events: none;*/
		}
		.hide .arrow {
		height: 0;
		 
		    padding: 0;
		    opacity: 0;
		}
		
		
		.plans p.title {
			color: #0E1D2E;
			font-weight: bold;
			font-size: 24px;
			margin-bottom: 30px !important;
			text-align: center;
		}
		
		.card-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: 20px;
		}
		
		.card {
			background: #FFFFFF;
			border: 1px solid #E0E8E9;
			border-radius: 15px;
			padding: 25px 20px 35px;
			min-width: 270px;
			max-width: 270px;
		}
		
		.banner-custom.app .plans p.title {
			margin-bottom: 50px !important;
		}
		
		.banner-custom.app .card,
		.card-body{
			padding: 40px 20px 0;
		}
		
		.card.card_free {
			background: #00A1BB;
			border: none;
		}
		
		.card .name {
			font-weight: bold;
			font-size: 24px;
			color: #000;
		}
		
		.card.card_free p,
		.card.card_free span,
		.card.card_free small		 
		 {
			color: #fff !important;
		}
		
		.card hr {
			margin: 18px 0 8px !important;
			height: 1px;
			background-color: #D6D9DD !important;
			border: none;
		}
		
		.card button {
			line-height: 27px;
			width: 100%;
			margin-top: 20px;			
		    font-size: 18px;
		    fill: #00A2BB;
		    color: #00A2BB;
		    background-color: #FFF;
		    border: 1px solid #00A1BB;
		    font-family: 'Gilroy', sans-serif;
		    border-radius: 81px;
		    font-weight: 700;
		    height: 53px;
		    text-align: center;
		}
		
		.card button p {
			margin: 0 auto !important;
		}
		
		.card.card_free button{
			border: 1px solid #fff !important;
		}
	
		
		 .banner-custom:not(.app) .card button:hover {
			background-color: #00A1BB;
			border-color: #00A1BB;
			transition: all .3s;
		}
		
		.price {
			font-size: 56px;
			color: #0E1D2E;
			font-weight: 500;
		}
		
		.price small{
			font-size: 18px;
			color: #6B7279;
			font-weight: normal;
		}
		
		p.credits {
			margin: -14px 0 -7px!important;
			font-weight: bold;
			color: #00A1BB;
			font-size: 20px;
		}
		
		.credits .thin {
			font-weight: 400;
			color: #6B7279;
		}
		
		p.additional {
			color: #6B7279;
			font-size: 16px;
		}

		.banner-custom.app {
			max-width: 1254px;
		}

		.banner-custom.app .card{
			min-width: 276px;
			max-width: 276px;
		}

		.banner-custom.app .plans {
			background: #FFFFFF;
			box-shadow: 0px 2px 6px rgba(22, 127, 158, 0.12);
		}

		p.option {
			font-weight: normal;
			font-size: 15px;
			color: #6B7279;
		}

		.banner-custom.app {
			margin-bottom: 50px !important;
		}

		.banner-custom.app p.credits {
			margin: 15px 0 10px !important;
		}

		.banner-custom.app .card hr {
			margin: 30px 0 !important;
		}

		.banner-custom.app button {
			margin: 30px 0 20px !important;
		}		
		
		.card.card-pro {
			padding: 0 !important;
			box-shadow: 0 2px 6px rgba(22, 127, 158, 0.12);
		}
		
		.card-pro .card-header p {
			color: #fff;
		}
		
		.card-header {
			position: relative;
			border-radius: 16px 16px 0 0;
			padding: 40px 20px 30px;
			background: #00A1BB;
		}
		
		.banner-custom.app .popular {
			position: absolute;
			top: -20px;
			background: #F0FBF8;
			padding: 13px;
			border: 1px solid #00A2BB;
			border-radius: 40px;
		}
		
		.banner-custom.app .popular p{
			color: #00A1BB;
			font-weight: 600;
			font-size: 14px;
		}
		
		.card-body {
			padding: 25px 20px 35px;
		}

		.banner-custom.app .card .name {
			margin-bottom: 8px !important;
		}
		
		@media only screen and (max-width: 1250px) {
			.card {				
				min-width: auto;
			}
		  }

		  @media only screen and (max-width: 1074px) {
			.card-wrapper {
				gap: 30px;
			}
			.card {				
				flex: 45%;
			}
		  }

		  @media only screen and (max-width: 767px) {
			.card {				
				flex: 100%;
			}
		  }
		
	</style>
`

document.head.insertAdjacentHTML('afterbegin', customStyle)

if (window.location.hostname === 'app.uplead.com') {
	let switchInterval = setInterval(() => {
		if (document.querySelector('.accountPlans__freeUser-switch-labelMonthly') &&
			document.querySelector('.accountPlans__freeUser-switch-labelAnnual')) {
			clearInterval(switchInterval)

			document.querySelector('.accountPlans__freeUser-switch-labelMonthly').click()

			let arrPrice = document.querySelectorAll('.product-card__price')

			document.querySelector('.accountPlans__freeUser-switch-labelAnnual').click()

			let start = setInterval(() => {
				if (document.querySelectorAll('.product-card__price')[3].innerText) {
					clearInterval(start)

					plans = `
	<div class="banner-custom hide app">
		<div class="title-wrapper">
		<p class="title_action">See our monthly plans</p>
		<span class="arrow"></span>
	</div>
		
		<div class="wrapper-custom">
		<div class="plans">			
			<p class="title">Monthly Plans</p>
			<div class="card-wrapper">
				<div class="card">
					<p class="name">Essentials</p>
					<p class="option">A starter plan for those new to sales intelligence.</p>
					<hr>
					<p class="price">${ arrPrice[0].innerText }<small>/month</small></p>
					<p class="credits">2,040 Credits <span class="thin">Annually<span></p>
					<p class="additional">Additional Credits <b>$0.60</b></p>					
				</div>
				<div class="card">
					<p class="name">Plus</p>
					<p class="option">An intermediate plan if you want greater results.</p>
					<hr>
					<p class="price">${ arrPrice[1].innerText }<small>/month</small></p>
					<p class="credits">4,800 Credits <span class="thin">Annually<span></p>
					<p class="additional">Additional Credits <b>$0.50</b></p>					
				</div>
				<div class="card card-pro">
					<div class="card-header">
						<div class="popular"><p>Most Popular</p></div>
						<p class="name">Professional</p>
						<p class="option">An advanced plan to take you to the next level.</p>
					</div>	
					<div class="card-body">
						<p class="price">${ arrPrice[2].innerText }<small>/month</small></p>
						<p class="credits">12,000 Credits <span class="thin">Annually<span></p>
						<p class="additional">Additional Credits <b>$0.40</b></p>
					</div>			
									
				</div>
				<div class="card">
					<p class="name">Elite</p>
					<p class="option">An exceptional plan to drive growth and reach new customers.</p>
					<hr>
					<p class="price">${ arrPrice[3].innerText }<small>/month</small></p>
					<p class="credits">3,000 Credits <span class="thin">Annually<span></p>
					<p class="additional">Additional Credits <b>$0.30</b></p>					
				</div>
			</div>
		</div>
</div>
		
	</div>
`
					const whereEl = document.querySelector('.accountPlans__freeUser-container')
					const position = 'beforeend'

					startExp(whereEl, position, plans)

					for (let i = 0; i < 4; i++) {
						if (document.querySelectorAll('.banner-custom .card')[i].classList.contains('card-pro')) {
							document.querySelector('.banner-custom .card .card-body').insertAdjacentElement('beforeend',
								document.querySelectorAll('.product-card__action-btn-wrap button')[i + 1])
						} else {
							document.querySelectorAll('.banner-custom .card')[i].insertAdjacentElement('beforeend',
								document.querySelectorAll('.product-card__action-btn-wrap button')[i + 1])
						}

					}
				}
			}, 200)
		}
	}, 100)

	;(function (h, o, t, j, a, r) {
		h.hj = h.hj || function () {
			(h.hj.q = h.hj.q || []).push(arguments)
		}
		h._hjSettings = {hjid: 2615465, hjsv: 6}
		a = o.getElementsByTagName('head')[0]
		r = o.createElement('script')
		r.async = 1
		r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
		a.appendChild(r)
	})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
	window.hj = window.hj || function () {
		(hj.q = hj.q || []).push(arguments)
	}
	hj('event', 'hide_annual_plans')

	console.log('HJ for APP uplead domain')
} else {

	let start = setInterval(() => {
			if (document.querySelectorAll('.uael-rbs-section-1 .elementor-button-wrapper a')[6]?.href && document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[9].innerText.split('/')[0]) {
				clearInterval(start)

				plans = `
	<div class="banner-custom hide">
		<div class="title-wrapper">
		<p class="title_action">See our monthly plans</p>
		<span class="arrow"></span>
</div>
		
		<div class="wrapper-custom">
		<div class="plans">			
			<p class="title">Monthly Plans</p>
			<div class="card-wrapper">
				<div class="card card_free">
					<p class="name">Free Trial</p>
					<hr>
					<p class="price">${ document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[0].innerText.split('/')[0] }<small>/month</small></p>
					<p class="credits">5 Credits <span class="thin">Annually<span></p>
					<p class="additional">Free Test Drive</p>
					<button onclick="location.href='${ document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[0].href }';">Try For Free</button>
				</div>
				<div class="card">
					<p class="name">Essentials</p>
					<hr>
					<p class="price">${ document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[3].innerText.split('/')[0] }<small>/month</small></p>
					<p class="credits">170 Credits <span class="thin">Monthly<span></p>
					<p class="additional">Additional Credits <b>$0.60</b></p>
					<button onclick="location.href='${ document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[2].href }';">Buy Now</button>
				</div>
				<div class="card">
					<p class="name">Plus</p>
					<hr>
					<p class="price">${ document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[6].innerText.split('/')[0] }<small>/month</small></p>
					<p class="credits">400 Credits <span class="thin">Monthly<span></p>
					<p class="additional">Additional Credits <b>$0.50</b></p>
					<button onclick="location.href='${ document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[4].href }';">Buy Now</button>
				</div>
				<div class="card">
					<p class="name">Professional</p>
					<hr>
					<p class="price">${ document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[9].innerText.split('/')[0] }<small>/month</small></p>
					<p class="credits">1000 Credits <span class="thin">Monthly<span></p>
					<p class="additional">Additional Credits <b>$0.40</b></p>
					<button onclick="location.href='${ document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[6].href }';">Buy Now</button>
				</div>
			</div>
		</div>
</div>
		
	</div>
`
				const whereEl = document.querySelector('.uael-rbs-section-2')
				const position = 'afterend'

				startExp(whereEl, position, plans)
			}
		}, 200)

	;(function (h, o, t, j, a, r) {
		h.hj = h.hj || function () {
			(h.hj.q = h.hj.q || []).push(arguments)
		}
		h._hjSettings = {hjid: 864509, hjsv: 6}
		a = o.getElementsByTagName('head')[0]
		r = o.createElement('script')
		r.async = 1
		r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
		a.appendChild(r)
	})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
	window.hj = window.hj || function () {
		(hj.q = hj.q || []).push(arguments)
	}
	hj('event', 'hide_annual_plans')

	console.log('HJ for uplead domain')
}

function startExp(whereEl, position, plans) {
	whereEl.insertAdjacentHTML(position, plans)

	document.querySelector('.title-wrapper').addEventListener('click', function () {
		if (this.closest('.banner-custom').classList.contains('hide')) {
			document.querySelector('.banner-custom').classList.remove('hide')

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — Hide annual plans',
				'eventAction': 'See our mounthly plans',
				'eventLabel': 'open',
			})

			console.log('EVENT: open')

		} else {
			document.querySelector('.banner-custom').classList.add('hide')

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — Hide annual plans',
				'eventAction': 'See our mounthly plans',
				'eventLabel': 'close',
			})

			console.log('EVENT: close')

		}
	})

	// let cardInterval = setInterval(() => {
	// 	if(document.querySelectorAll('.card-wrapper .card')[3]) {
	// 		clearInterval(cardInterval)
	//
	// 		document.querySelectorAll('.card-wrapper .card').forEach(item => {
	// 			item.addEventListener('click', () => {
	//
	// 				window.dataLayer = window.dataLayer || [];
	// 				dataLayer.push({
	// 					'event': 'event-to-ga',
	// 					'eventCategory': 'Exp — Hide annual plans',
	// 					'eventAction': 'Click on each plan'
	// 				});
	//
	// 				console.log('EVENT: Click on each plan');
	//
	// 			})
	// 		})
	// 	}
	// }, 200)

	document.querySelectorAll('.card-wrapper .card').forEach(item => {
		item.addEventListener('click', () => {

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — Hide annual plans',
				'eventAction': 'Click on each plan',
			})

			console.log('EVENT: Click on each plan')

		})
	})

}

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Hide annual plans',
	'eventAction': 'loaded',
})

console.log('EVENT: loaded')

