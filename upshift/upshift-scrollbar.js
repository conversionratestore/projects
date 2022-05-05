const style2 = `
	<style>
		.bar-wrapper {
		  position: fixed;
		  top: 0;
		  z-index: 10000;
		  width: 102%;
		  background-color: #f1f1f1;
		}
	
		.progress-container {
		  width: 100%;
		  height: 4px;
		  background: linear-gradient(179.78deg, #FFFFFF 53.3%, rgba(255, 255, 255, 0) 110.15%);
		}
		
		.progress-bar {
		  height: 4px;
		  background: #03a9f4;
		  width: 0;
		  border-bottom-right-radius: 40px;
		}
		
		.menu-container {
			top: 4px !important;
		}
		
		.menu-hided {
			transform: translate3d(0px, -70px, 0px) !important;
		}
		
		#ipmb-duble-bg-green, #ipmb-for-people-second-section .pos-middle {
			display: none;
		}
		
		#ipmb-for-people-second-section {
			padding-top: 0 !important;
		}
		
		.title-wrapper {
			padding: 25px;
		}
		
		.text-wrapper {
			padding: 0 25px;
		}
		
		.text-wrapper p {
		    font-family: 'Poppins', sans-serif !important;
		    font-style: normal;
		    font-weight: normal;			
		    letter-spacing: -0.02em;
		    color: #303133;
	        font-size: 16px!important;
		    line-height: 24px!important;			    
		    text-align: left!important;
		    margin-top: 18px!important;
		}
		
		.text-wrapper p.my_subheader {
			font-weight: 600!important;
			font-size: 24px !important;
		    letter-spacing: 0em;
		    line-height: 32px !important;
		}
		
		.my_title {
			font-size: 33px;
			font-weight: 700;
			color: #282828;
			font-family: 'Poppins', sans-serif;
		    text-align: center;
		    line-height: 48px;
		}
		
		body.menu-custom-padding .menu-container .logo-container {
			padding-bottom: 11px !important;
		}
		
		.my_btn-wrapper {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 0;
			z-index: 10000;
			width: 100%;
			background-color: #f1f1f1;
			transition: all 1s;
			opacity:0;
		}
		
		.my_btn-wrapper.show {
			opacity:1;
			height: 50px;
		}
		
		.my_btn {
			background: #03a9f4;
			color: #fff;
			height: 100%;
			width: 100%;
			border: 1px solid #03a9f4;
			font-weight: 600;
			font-size: 16px;
			font-family: 'Poppins', sans-serif;
		    transition: all 400ms cubic-bezier(.785,.135,.15,.86);
		}
		
		.my_btn img {
			margin-left: 10px;
			transition: all 400ms cubic-bezier(.785,.135,.15,.86);
		}
		
		.my_btn:hover {
		    background: #fff;
		    color: #03a9f4;
		}
		
		.my_btn:hover img{
			filter: invert(51%) sepia(75%) saturate(1873%) hue-rotate(165deg) brightness(96%) contrast(99%);
		}
		
		.footer-scroll-top {
			bottom: 67px;
		}
		
		.acsb-trigger {
			left: 22px !important;
		}
	</style>`

const bar = `
	<div class="bar-wrapper">
	<div class="progress-container">
		<div class="progress-bar" id="myBar"></div>
	</div>
</div>`

const stickyBtn = `
	<div class="my_btn-wrapper">
		<button class="my_btn">Apply now<img src="https://conversionratestore.github.io/projects/upshift/img/arrow.svg" alt="arrow"/></button>
	</div>`

document.head.insertAdjacentHTML('beforeend', style2)

let waitForBox = setInterval(() => {
	if (document.querySelector('.box-container')) {
		clearInterval(waitForBox)

		document.querySelector('.box-container').insertAdjacentHTML('afterbegin', bar)
		document.querySelector('.box-container').insertAdjacentHTML('beforeend', stickyBtn)
	}
})

let waitForBlock = setInterval(() => {
	if (document.querySelector('#ipmb-for-people-second-section')) {
		clearInterval(waitForBlock)

		document.querySelector('#ipmb-for-people-second-section').insertAdjacentHTML('beforebegin', `
	<div class="title-wrapper">
		<p class="my_title">Pick up shifts, work when you want and get paid daily!</p>
	</div>`)
		document.querySelector('#ipmb-for-people-second-section').insertAdjacentHTML('afterend', `
	<div class="text-wrapper">
		<p class="my_subheader">Upshift Redefines How People Find Flexible Work</p>
		<p>Work on your terms – choose when and where you work, without sacrificing your responsibilities.</p>
		<p>Become an Upshifter to view hundreds of available shifts in your area.</p>
	</div>`)
	}
})

let waitForBar = setInterval(() => {
	if (document.getElementById('myBar') && document.querySelector('.my_btn')) {
		clearInterval(waitForBar)

		window.onscroll = function () {
			scrollBar()
		}

		document.querySelector('.my_btn').addEventListener('click', () => {
			window.location.href = 'https://www.upshift.work/for-people/sign-up/'

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: Scrollbar',
				'eventAction': 'Click on sticky button',
			})
		})
	}
})

let percent20 = false
let percent40 = false
let percent60 = false
let percent80 = false
let percent100 = false

function scrollEvent(percent) {
	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp: Scrollbar',
		'eventAction': 'Scroll depth',
		'eventLabel': percent + '%',
	})
}

function scrollBar() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
	let scrolled = (winScroll / height) * 100

	if (scrolled === 20 && percent20 === false) {
		percent20 = true
		scrollEvent('20')
	}
	if (scrolled === 40 && percent40 === false) {
		percent40 = true
		scrollEvent('40')
	}
	if (scrolled === 60 && percent60 === false) {
		percent60 = true
		scrollEvent('60')
	}
	if (scrolled === 80 && percent80 === false) {
		percent80 = true
		scrollEvent('80')
	}
	if (scrolled === 100 && percent100 === false) {
		percent100 = true
		scrollEvent('100')
	}

	if (scrolled >= 25 && !document.querySelector('.my_btn-wrapper.show')) {
		document.querySelector('.my_btn-wrapper').classList.add('show')

		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp: Scrollbar',
			'eventAction': 'Display sticky button',
		})
	} else if (scrolled < 25) {
		document.querySelector('.my_btn-wrapper').classList.remove('show')
	}

	document.getElementById('myBar').style.width = scrolled + '%'
}

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: Scrollbar',
	'eventAction': 'loaded',
})

let waitForClarity = setInterval(() => {
	if (typeof clarity === 'function') {
		clearInterval(waitForClarity)
		clarity('set', 'scrollbar', 'variant_1')
	}
}, 200)
