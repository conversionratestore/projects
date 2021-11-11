const style = `
	<style>
		.modal-custom {
			padding: 20px 0;
			position: fixed;
			display: none;
			z-index: 1; 
			left: 0;
			top: 0;
			width: 100%; 
			height: 100%;
			overflow: auto; 
			background-color: rgba(0,0,0,0.6);
		}
		
		.modal-custom.modal-custom_active {
			display: inline-flex;
		}
		
		.popup-custom {
			position: relative;
			margin: auto;
		    align-items: center;
		    background: #fff;
		    border-radius: 26px;
		    box-shadow: 0 2px 10px rgba(4, 12, 40, 0.03);
		    box-sizing: border-box;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-direction: column;
		    flex-direction: column;	    
		    max-width: 500px;
		    padding: 55px;
		    width: 100%;
		    text-align: center;
		}
		
		.popup-custom p {
			width: 100%;
			color: #69727A;
			font-size: 13px;
			line-height: 22px;
			font-family: "Gilroy", sans-serif;
			margin: 0;
		}
		
		.popup-custom .title {
			position: relative;
			font-weight: bold;
			color: #14142B;
			font-size: 38px;
			line-height: 45px;
			z-index: 0;
		}
		
		.popup-custom .title .styled{
			position: relative;
		}
		
		.popup-custom .title .styled::after{
		    background: #00a2bb;
		    content: '';
		    height: 16px;
		    left: -3%;
		    opacity: 0.4;
		    position: absolute;
		    right: 0;
		    top: 50%;
		    width: 106%;
		    z-index: -1;
		}	
		
		.popup-custom .subtitle {
			font-size: 25px;
			font-weight: bold;
			color: #14142B;
			margin: 10px 0 40px;
		}	
		
		.popup-custom .subtitle + p {
			margin-bottom: 10px;
		}
		
		.btn-custom {
			background-color: #0197b2;
		    border: 1px solid transparent;	    
		    color: #fff;
		    font-weight: 500;
		    font-size: 13px;
	        padding: 11px 11%;
	        border-radius: 30px;
	        margin-top: 35px;
	        font-family: "Gilroy",sans-serif;
		}
		
		.btn-custom:hover {
		    background-color: #005670;
		    color: #fff;
	        cursor: pointer;
		    transition: all 0.3s ease;
		}
		
		.btn-custom:active {
		    background-color: #00374b;	    
		    color: #fff;
		    outline: none;
		}
		
		.popup-custom .clock {
			margin-bottom: 35px;
			width: 100px;
			height: 100px;
		}
		
		.grey {
			font-weight: bold;
			font-size: 24px;
		}
		
		.svg-wrapper {
			display: block;
			padding: 5px;
			position: absolute;
			top: 3%;
			right: 3%;
			cursor: pointer;
		}
		
		.popup-custom svg,
		.popup-custom svg path {
			pointer-events: none;
		}
		
		.popup-custom svg {			
			height: 15px;
			width: 15px;			
			
			transition: all 0.3s ease;
		}
		
		.popup-custom svg:hover {
			fill: #14142B;			
		}
		
		p.credits {
			font-size: 18px;
			margin-bottom: 5px;
		}
		
		.credits {
			font-weight: 700;
			color: #69727A;
		}
		
		.plan {
			text-transform: capitalize;
		}
		
		
		
		
	</style>
`

let btnInterval = setInterval(() => {
	if (document.querySelector('.billing-switch [aria-checked=false]')) {
		clearInterval(btnInterval)
		document.querySelector('.billing-switch [aria-checked=false]').click()
	}
}, 500)

let show75 = setInterval(() => {
	if (window.google_tag_manager['GTM-MTN4VBZ']?.dataLayer?.get('bannerType') === 'percent75') {
		clearInterval(show75)

		showPopup()

		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Pop up with motivation to upgrade',
			'eventAction': 'loaded',
		})
	}
}, 200)

let show90 = setInterval(() => {
	if (window.google_tag_manager['GTM-MTN4VBZ']?.dataLayer?.get('bannerType') === 'percent90') {
		clearInterval(show90)

		showPopup()

		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Pop up with motivation to upgrade',
			'eventAction': 'loaded',
		})
	}
}, 200)

let show100 = setInterval(() => {
	if (window.google_tag_manager['GTM-MTN4VBZ']?.dataLayer?.get('bannerType') === 'percent100') {
		clearInterval(show100)

		showPopup()

		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Pop up with motivation to upgrade',
			'eventAction': 'loaded',
		})
	}
}, 200)



function showPopup() {
	const goData = window.google_tag_manager['GTM-MTN4VBZ'].dataLayer
	const percent = goData.get('bannerType').split('percent')[1]
	const plan = goData.get('plan').toLowerCase()
	let save

	switch (plan) {
		case 'essentials':
			save = 298
			break
		case 'plus':
			save = 598
			break
		case 'professional':
			save = 1198
			break
		case 'elite':
			save = 1798
			break
		default:
			save = 0
			break
	}


	const page = `
<div class="modal-custom modal-custom_active">
	<div class="popup-custom">
	    <img class="clock" src="https://conversionratestore.github.io/projects/uplead/img/pig-icon.svg" alt="money box">
	    <p class="credits">WOW you have already used ${ percent }%<br>of your credits this month</p>
	    <p class="title"><span class="styled">Save $${ save }</span><br>on your <br><span class="plan">${ plan }</span> plan</p>
	    <p class="subtitle">by switching to annual plan</p>
	    <p><b>You won't be charged today, only when your monthly plan ends.</b></p>
	    <p>Cancel anytime in one-click before your<br><b>monthly plan ends.</b></p>	    
	    <button type="button" class="btn-custom">Save $${ save }</button>
	    <div class="svg-wrapper">
	    	<svg xmlns="http://www.w3.org/2000/svg" fill="#6E7191" viewBox="0 0 47.971 47.971" data-src="/c69c1c810022c4cf0e39706564b864d5.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.228 23.986L47.092 5.122a3 3 0 0 0 0-4.242 3 3 0 0 0-4.242 0L23.986 19.744 5.12.88a3 3 0 0 0-4.242 0 3 3 0 0 0 0 4.242l18.865 18.864L.88 42.85a3 3 0 0 0 0 4.242c.586.585 1.354.878 2.12.878a2.99 2.99 0 0 0 2.121-.879l18.865-18.864L42.85 47.09a2.99 2.99 0 0 0 4.242 0 3 3 0 0 0 0-4.242L28.228 23.986z"></path></svg>
		</div>	 
	      		
	</div>
</div>`

	document.head.insertAdjacentHTML('afterbegin', style)
	document.body.insertAdjacentHTML('beforeend', page)

	const btn = document.querySelector('.btn-custom')

	document.addEventListener('click', closeModal)
	btn.addEventListener('click', clickOnBtn)


}

function closeModal(e) {
	console.log(e.target)

	console.log(e.target.matches('.modal-custom'))
	console.log(e.target.matches('.popup-custom svg'))


	if (e.target.matches('.modal-custom') || e.target.matches('.popup-custom .svg-wrapper')) {
		document.querySelector('.modal-custom').remove()

		if (e.target.matches('.modal-custom')) {
			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — Pop up with motivation to upgrade',
				'eventAction': 'Click on space out of pop up',
			})
		}

		if (e.target.matches('.popup-custom svg')) {
			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp — Pop up with motivation to upgrade',
				'eventAction': 'Click on X to close pop up',
			})
		}
	}
}

function clickOnBtn() {
	console.log('clicked on btn')

	location.href = '/subscriptions'

	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp — Pop up with motivation to upgrade',
		'eventAction': 'Click on Save Button',
	})


}

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
hj('trigger', 'tv_popup_with_motivation_to_upgrade')
hj('event', 'popup_with_motivation_to_upgrade')
