const style = `
	<style>
			#ipmb-mobile-top-buttons {
				flex-direction: column;
				width: auto;
				align-items: center;
			}
			
			#ipmb-mobile-top-buttons .ipmb-blue-button {
				width: 82%;
				font-weight: 600;
				font-size: 16px;
				margin-bottom: 4% !important;
			}
			
			#ipmb-mobile-top-buttons a {
				margin: 0 !important;
			}
			
			[data-qa="welcome-screen-wrapper"] {
				display: none;
			}
	</style>
`

document.head.insertAdjacentHTML('beforeend', style)

let waitForMainBtn = setInterval(() => {
	if (document.querySelector('#ipmb-mobile-top-buttons a')) {
		clearInterval(waitForMainBtn)
		document.querySelector('#ipmb-mobile-top-buttons a').innerText = `Take a quiz to apply <img src="https://conversionratestore.github.io/projects/somnifix/img/arrow.svg" alt="arrow"/>`
	}
}, 200)

let waitForStartedBtn = setInterval(() => {
	if (document.querySelector('.lbdUdY button')) {
		clearInterval(waitForStartedBtn)
		document.querySelector('.lbdUdY button').click()
	}
}, 200)

let waitForCloseX = setInterval(() => {
	if (document.querySelector('[data-qa="close-button-mobile"]')) {
		clearInterval(waitForCloseX)
		document.querySelector('[data-qa="close-button-mobile"]').addEventListener('click', (e) => {
			e.preventDefault()

			window.open('https://www.upshift.work/for-people', '_self')
		})
	}
}, 200)

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: Remove one step',
	'eventAction': 'loaded',
})

let waitForClarity = setInterval(() => {
	if(typeof clarity === 'function') {
		clearInterval(waitForClarity)
		clarity('set', 'remove_one_step', 'variant_1');
	}
}, 200)

