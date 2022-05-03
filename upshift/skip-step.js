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
	</style>
`

document.head.insertAdjacentHTML('beforeend', style)

let waifForBtn = setInterval(() => {
	if(document.querySelector('#ipmb-mobile-top-buttons a')) {
		clearInterval(waifForBtn)
		document.querySelector('#ipmb-mobile-top-buttons a').innerText = `Take a quiz to apply >`
	}
}, 200)

console.log('loaded')
