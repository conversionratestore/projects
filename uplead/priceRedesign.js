const customStyle = `
	<style>
		.uael-rbs-toggle {
			display: none !important;
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
		}
		
		.card.card_free button{
			border: 1px solid #fff !important;
		}
	
		
		.card button:hover{
			background-color: #00A1BB;
			border-color: #00A1BB;
			transition: all .3s;
		}
		
		.price {
			font-size: 56px;
			color: #0E1D2E;
		}
		
		.price small{
			font-size: 18px;
			color: #6B7279;
			font-weight: normal;
		}
		
		p.credits {
			margin: -14px 0px -7px!important;
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
		
	</style>
`

const pricingArr = [
	[
		'Free Trial',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[0].innerText.split('/')[0],
		`5 Credits <span class="thin">Annually<span>`,
		'Free Test Drive',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[0].href,
		'Try For Free'
	],
	[
		'Essentials',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[3].innerText.split('/')[0],
		`170 Credits <span class="thin">Monthly<span>`,
		'Additional Credits <b>$0.60</b>',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[2].href,
		'Buy Now'
	],
	[
		'Plus',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[6].innerText.split('/')[0],
		`400 Credits <span class="thin">Monthly<span>`,
		'Additional Credits <b>$0.50</b>',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[4].href,
		'Buy Now'
	],
	[
		'Professional',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[9].innerText.split('/')[0],
		`1000 Credits <span class="thin">Monthly<span>`,
		'Additional Credits <b>$0.40</b>',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[6].href,
		'Buy Now'
	]
]
	
const pricingArr = [
	[
		'Free Trial',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[0].innerText.split('/')[0],
		`5 Credits <span class="thin">Annually<span>`,
		'Free Test Drive',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[0].href,
		'Try For Free'
	],
	[
		'Essentials',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[3].innerText.split('/')[0],
		`170 Credits <span class="thin">Monthly<span>`,
		'Additional Credits <b>$0.60</b>',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[2].href,
		'Buy Now'
	],
	[
		'Plus',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[6].innerText.split('/')[0],
		`400 Credits <span class="thin">Monthly<span>`,
		'Additional Credits <b>$0.50</b>',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[4].href,
		'Buy Now'
	],
	[
		'Professional',
		document.querySelectorAll('.uael-rbs-section-1 .elementor-text-editor')[9].innerText.split('/')[0],
		`1000 Credits <span class="thin">Monthly<span>`,
		'Additional Credits <b>$0.40</b>',
		document.querySelectorAll(`.uael-rbs-section-1 .elementor-button-wrapper a`)[6].href,
		'Buy Now'
	]
]
	



const plans = /*html*/`
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
					<p class="name">${pricingArr[0][0]}</p>
					<hr>
					<p class="price">${pricingArr[0][1]}<small>/month</small></p>
					<p class="credits">${ pricingArr[0][2] }</p>
					<p class="additional">${ pricingArr[0][3] }</p>
					<button onclick="location.href='${ pricingArr[0][4] }';">${ pricingArr[0][5] }</button>
				</div>
				<div class="card">
					<p class="name">${ pricingArr[1][0] }</p>
					<hr>
					<p class="price">${ pricingArr[1][1] }<small>/month</small></p>
					<p class="credits">${ pricingArr[1][2] }</p>
					<p class="additional">${ pricingArr[1][3] }</p>
					<button onclick="location.href='${ pricingArr[1][4] }';">${ pricingArr[1][5] }</button>
				</div>
				<div class="card">
					<p class="name">${ pricingArr[2][0] }</p>
					<hr>
					<p class="price">${ pricingArr[2][1] }<small>/month</small></p>
					<p class="credits">${ pricingArr[2][2] }</p>
					<p class="additional">${ pricingArr[2][3] }</p>
					<button onclick="location.href='${ pricingArr[2][4] }';">${ pricingArr[2][5] }</button>
				</div>
				<div class="card">
					<p class="name">${ pricingArr[3][0] }</p>
					<hr>
					<p class="price">${ pricingArr[3][1] }<small>/month</small></p>
					<p class="credits">${ pricingArr[3][2] }</p>
					<p class="additional">${ pricingArr[3][3] }</p>
					<button onclick="location.href='${ pricingArr[3][4] }';">${ pricingArr[3][5] }</button>
				</div>
			</div>
		</div>
</div>
		
	</div>
`

document.head.insertAdjacentHTML('afterbegin', customStyle)

let start = setInterval(() => {
	if(document.querySelectorAll('.uael-rbs-section-1 .elementor-button-wrapper a')[6]?.href) {
		clearInterval(start)

		document.querySelector('.uael-rbs-section-2').insertAdjacentHTML('afterend', plans)

		document.querySelector('.title-wrapper').addEventListener('click', function() {
			if(this.closest('.banner-custom').classList.contains('hide')) {
				document.querySelector('.banner-custom').classList.remove('hide')

				
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp — Hide annual plans',
					'eventAction': 'See our mounthly plans',
					'eventLabel': 'open'
				});

				console.log('EVENT: open');

			} else {
				document.querySelector('.banner-custom').classList.add('hide')
				
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp — Hide annual plans',
					'eventAction': 'See our mounthly plans',
					'eventLabel': 'close'
				});

				console.log('EVENT: close');

			}
		})
	}
})

let intrv = setInterval(() => {
	if(document.querySelectorAll('.card-wrapper .card')[3]) {
		clearInterval(intrv)

		document.querySelectorAll('.card-wrapper .card').forEach(item => {
			item.addEventListener('click', () => {
				
				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp — Hide annual plans',
					'eventAction': 'Click on each plan'
				});

				console.log('EVENT: Click on each plan');

			})
		})
	}
}, 200)

window.dataLayer = window.dataLayer || [];
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Hide annual plans',
	'eventAction': 'loaded'
})

console.log('EVENT: loaded');

if(window.location.hostname === 'app.uplead.com') {
    ;(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2615465,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('event', 'hide_annual_plans');

		console.log('HJ for APP uplead domain');
} else {
    ;(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:864509,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('event', 'hide_annual_plans');

	console.log('HJ for uplead domain');

}
