// var dataLayer = dataLayer || []
// dataLayer.push({
// 	'event': 'debit_credit',
// 	'plan': 'Professional',
// 	'subscription_type': 'monthly',
// 	'available_credits_in_month': 1000,
// 	'credits_left': 250,
// })

let start = setInterval(() => {
	if (window.google_tag_manager['GTM-MTN4VBZ']?.dataLayer?.get('bannerType')) {
		clearInterval(start)

		const percent = window.google_tag_manager['GTM-MTN4VBZ'].dataLayer.get('bannerType').split('percent')[1]
		const plan = window.google_tag_manager['GTM-MTN4VBZ'].dataLayer.get('plan').toLowerCase()
		let save

		switch (percent) {
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
				save = 1198
				break
			default: 
				save = 0
				break
		}

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
		    border-radius: 36px;
		    box-shadow: 0 2px 10px rgba(4, 12, 40, 0.03);
		    box-sizing: border-box;
		    display: -ms-flexbox;
		    display: flex;
		    -ms-flex-direction: column;
		    flex-direction: column;	    
		    max-width: 700px;
		    padding: 75px 70px;
		    width: 100%;
		    text-align: center;
		}
		
		.popup-custom p {
			width: 100%;
			color: #69727A;
			font-size: 18px;
			line-height: 30px;
			font-family: "Gilroy", sans-serif;
			margin: 0;
		}
		
		.popup-custom .title {
			margin: 15px 0;
			position: relative;
			font-weight: bold;
			color: #14142B;
			font-size: 54px;
			line-height: 62px;
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
		}	
		
		.popup-custom .subtitle {
			font-size: 36px;
			font-weight: bold;
			color: #14142B;
			margin: 8px 0 50px;
		}	
		
		.popup-custom .subtitle + p {
			margin-bottom: 20px;
		}
		
		.btn-custom {
			background-color: #0197b2;
		    border: 1px solid transparent;	    
		    color: #fff;
		    font-weight: 500;
		    font-size: 18px;
	        padding: 16px 11%;
	        border-radius: 30px;
	        margin-top: 50px;
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
			margin-bottom: 50px;
		}
		
		.grey {
			font-weight: bold;
			font-size: 24px;
		}
		
		.popup-custom svg {
			position: absolute;
			height: 20px;
			width: 20px;
			top: 4%;
			right: 4%;
			cursor: pointer;
			transition: all 0.3s ease;
		}
		
		.popup-custom svg:hover {
			fill: #14142B;
			
		}
		
		p.credits {
			font-size: 24px;
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
		const page = `
<div class="modal-custom modal-custom_active">
	<div class="popup-custom">
	    <img class="clock" src="https://conversionratestore.github.io/projects/uplead/img/pig-icon.svg" alt="money box">
	    <p class="credits">WOW you already used ${ percent }%<br>of your credits this month</p>
	    <p class="title"><span class="styled">Save $${ save }</span><br>on your <br><span class="plan">${ plan }</span> plan</p>
	    <p class="subtitle">by switching to annual plan</p>
	    <p><b>You won't be charged today, only when your monthly plan ends.</b></p>
	    <p>Cancel anytime in one-click before your<br><b>monthly plan ends.</b></p>	    
	    <button type="button" class="btn-custom">Save $${ save }</button>	 
	    <svg xmlns="http://www.w3.org/2000/svg" fill="#6E7191" viewBox="0 0 47.971 47.971" data-src="/c69c1c810022c4cf0e39706564b864d5.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.228 23.986L47.092 5.122a3 3 0 0 0 0-4.242 3 3 0 0 0-4.242 0L23.986 19.744 5.12.88a3 3 0 0 0-4.242 0 3 3 0 0 0 0 4.242l18.865 18.864L.88 42.85a3 3 0 0 0 0 4.242c.586.585 1.354.878 2.12.878a2.99 2.99 0 0 0 2.121-.879l18.865-18.864L42.85 47.09a2.99 2.99 0 0 0 4.242 0 3 3 0 0 0 0-4.242L28.228 23.986z"></path></svg>  		
	</div>
</div>`

		document.head.insertAdjacentHTML('afterbegin', style)
		document.body.insertAdjacentHTML('beforeend', page)

		document.querySelector('.react-switch-bg')?.click()

		document.addEventListener('click', closeModal)

		function closeModal(e) {
			if (e.target.matches('.modal-custom') || e.target.matches('.popup-custom svg')) {
				document.querySelector('.modal-custom').classList.remove('modal-custom_active')
			}
		}
	}
}, 200)

