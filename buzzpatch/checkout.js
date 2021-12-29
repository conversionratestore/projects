const style = `
	<style>
		.shipping {
			padding: 30px 20px;
			background: #EBEBEB;
			margin: 1.5em 0 -1.5em;
		}
		
		.shipping p {
			margin: 0;
		}
		
		.shipping .inner {
			display: flex;
			flex-direction: row;
		    justify-content: space-between;
		}
		
		.custom-block {
			border-top: 1px solid #e6e6e6;
			margin-bottom: 30px;
		}
		
		.item {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 10px;
		}
		
		.item:first-child {
			min-width: 23%; 
		}
		
		.item:nth-child(2) {
			min-width: 30%; 
		}
		
		.item .head {
			display: flex;
			gap: 3px;
		}
		
		.item .title {
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 14px;
			letter-spacing: 0.260417px;
			text-transform: uppercase;			
			color: #0C0B0B;
		} 
		
		.item .myTooltip {	
			position: relative;		
			display: flex;
			flex-direction: column;
		    height: fit-content;
		    padding: 5px;
		    margin: -5px;
		    cursor: pointer;
		}
		
		.myTooltip img {
			width: 10px;
			height: 10px;
		}
				
		.myTooltip > div {
			position: absolute;
			left: -124px;
			top: 5px;
			margin: 0;
			max-height: 0;
			padding: 15px 10px;
			transition: all .5s ease;
			transition-property: opacity, transform, max-height;
			pointer-events: none;			
			/*overflow: hidden;			*/
			background: #FFFFFF;
			opacity: 0;
			white-space: nowrap;
			transform: translateY(10px);
		}
		
		.myTooltip.show > div {
			max-height: 100px;			
			border-radius: 4px;
			opacity: 1;
			transform: translateY(19px);
			pointer-events: auto;
		}
		
		.myTooltip > div:after {
			content: '';
			display: block;
			background: url("https://conversionratestore.github.io/projects/buzzpatch/img/arrow-rounded.svg") no-repeat;
			top: -6px;
			right: 6px;
			position: absolute;
			width: 9px;
			height: 9px;
		}
		
		.item:last-child .myTooltip > div {
			left: -105px;
		}
			
		.myTooltip p {
			color: #7D7D7D;
			font-size: 12px;
		}
		
		.date p {
			margin-top: 7px;
			font-style: normal;
			font-weight: normal;
			font-size: 9.375px;
			line-height: 11px;			
			color: #0C0B0B;
		}
		
		.dots-wrapper {
			display: flex;
			justify-content: space-between;
			margin-top: 3px;
		}
		
		.dots-wrapper div {
			width: 3.79px;
			height: 3.79px;
			background: #D6D6D6;			
		}
		
		.dots-wrapper div.black-line {
			width: 28.65px;
			background: #0C0B0B;
		}
		
		.item:last-child .dots-wrapper div.black-line{
			width: 100%;
			background: #0C0B0B;
		}
		
		.guarantee {
			padding: 30px 0;				 
			background: #FFFFFF;
		}
		
		.guarantee p,
		.reviews p {
			margin: 0;
		}
		
		.guarantee > div {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 12px;
			padding: 12px;	
			border: 1px solid #E5E5E5;
			border-radius: 5px;
		}
		
		.guarantee > div p {
			color: #0065A3;
			line-height: 23px;
			letter-spacing: 0.02em;
			font-size: 18px;
			font-weight: bold;
			text-transform: uppercase;
		}
		
		.reviews {
			background: #F5F5F5;	
			margin: -1em;
			padding: 0 12px;		
		}
		
		.reviews > div:first-child {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 60px 0 40px;
		}
		
		.reviews .title {
			letter-spacing: 2px;
			text-transform: uppercase;
			font-size: 26px;
			color: #000000;
			line-height: inherit;
		}
		
		.reviews .rate span {
			letter-spacing: 0.2px;
			text-transform: uppercase;
			font-weight: bold;
			font-size: 24px;
			color: #000000;
		}
		
		 .rate img {
			height: 16px;
			width: 16px;
		}
		
		.reviews .rate p {
			font-weight: 300;
			font-size: 12px;
			color: #000000;
			text-align: right;
		}
		
		.commentary {
			border-top: 1px solid #D6D6D6;
			padding: 30px 0;
		}
		
		.commentary .info {
			display: flex;
			flex-direction: row;
			gap: 10px;
		}
		
		.info .photo {
			width: 90px;
			height: 90px;
			object-fit: cover;
		}
		
		.info .name {
			font-size: 14px;
			line-height: 16px;
			letter-spacing: 0.5px;
			text-transform: uppercase;			
			color: #000000;
			font-weight: bold;
		}
		
		.info > div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		
		.info > div p {
			letter-spacing: 0.5px;
			font-weight: 300;
			font-size: 12px;
			color: #5E5E5E;
		}
		
		.info p.date {
			color: #5E5E5E;
		}
		
		.info .country img {
			width: 22px;
			height: 11px;
			margin-right: 4px;
		}
		
		.commentary .text p {
			margin-top: 15px;
			font-weight: 300;
			font-size: 14px;
			line-height: 20px;
			color: #5E5E5E;
		}	
	</style>
`

const today = new Date()
const estimatedDate = new Date()
const guaranteeDate = new Date()

estimatedDate.setDate(today.getDate() + 5)
guaranteeDate.setDate(today.getDate() + 30)

const shipping = `
	<div class="shipping">
		<div class="inner">
			<div class="item">				
				<div class="head">
					<p class="title">Buy now</p>					
				</div>									
				<div class="date">
					<p>${ convertDate(today) }</p>					
					<div class="dots-wrapper">
						<div class="black-line"></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>	
				</div>						
			</div>
			<div class="item">
				<div class="head">
					<p class="title">Estimated<br>Shipment</p>
					<div class="myTooltip">
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/tooltip.svg" alt="myTooltip">
						<div><p>Shipping time may vary</p></div>
					</div>	
				</div>				
				<div class="date">
					<p>${ convertDate(estimatedDate) }</p>						
					<div class="dots-wrapper">
						<div class="black-line"></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>	
				</div>		
			</div>
			<div class="item">
				<div class="head">
					<p class="title">30 days money-<br>back guarantee</p>
					<div class="myTooltip">
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/tooltip.svg" alt="myTooltip">
						<div><p>No returns required</p></div>
					</div>	
				</div>				
				<div class="date">
					<p>${ convertDate(guaranteeDate) }</p>
					<div class="dots-wrapper">
						<div class="black-line"></div>
					</div>	
				</div>			
			</div>
		</div>
	</div>
`
const reviews = `
	<div class="custom-block">
		<div class="guarantee">
			<div>
				<div class="img-wrap">
					<img src="https://conversionratestore.github.io/projects/buzzpatch/img/30days.svg" alt="moneyback">
				</div>
				<div class="text">
					<p>30 DAYs Money-back Guarantee</p>				
				</div>
			</div>
		</div>
		<div class="reviews">
			<div>
				<p class="title">reviews</p>
				<div class="rate">
					<span>4.9</span>
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">							
					<p>Based on 89 Reviews</p>
				</div>				
			</div>
			<div class="commentary">
				<div class="info">
					<img class="photo" src="https://conversionratestore.github.io/projects/buzzpatch/img/commentary1.png" alt="commentator">
					<div>
						<p class="name">HARMONY H.</p>
						<p class="country"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/country1.svg" alt="country">Australia</p>
						<p class="date">01/26/2021</p> 
						<div class="star-wrapper">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						</div>
					</div>					
					
				</div>
				<div class="text">
					<p>These are amazing, I’m camping and have been for 4 days now and they work wonders. So many sand flies and mosquitoes, but none have even tried my baby, he’s 4 months and not a itch on him, I got bitted like crazy and I have been with him the whole time. Would 100% recommend.</p>
				</div>
			</div>
			<div class="commentary">
				<div class="info">
<!--					<img class="photo" src="https://conversionratestore.github.io/projects/buzzpatch/img/commentary2.png" alt="commentator">-->
					<div>
						<p class="name">Tanya M.</p>
						<p class="country"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/country2.svg" alt="country">United States</p>
						<p class="date">01/26/2021</p> 
						<div class="star-wrapper">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						</div>
					</div>					
					
				</div>
				<div class="text">
					<p>Love the Buzz Patch. Our grandson is allergic to Mozzies (He blows up like a balloon). Since using the Buzz Patch  he has not been bitten. His mum also puts them on his bed head at nighttime and the keep the Mozzies away. Will definitely recommend to anyone.&#128522;&#128077;</p>
				</div>
			</div>
			<div class="commentary">
				<div class="info">
<!--					<img class="photo" src="https://conversionratestore.github.io/projects/buzzpatch/img/commentary3.png" alt="commentator">-->
					<div>
						<p class="name">Louise C.</p>
						<p class="country"><img src="https://conversionratestore.github.io/projects/buzzpatch/img/country3.svg" alt="country">Canada</p>
						<p class="date">01/10/2021</p> 
						<div class="star-wrapper">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
							<img src="https://conversionratestore.github.io/projects/buzzpatch/img/star.svg" alt="star">
						</div>
					</div>
				</div>
				<div class="text">
					<p>Hi there. I have found BuzzPatch to be very efficient. Since my grandies have been wearing them on their clothes, the mozzies have been leaving them alone.  Carolyn has been lovely via our emails. Louise Crowe</p>
				</div>
			</div>
		</div>
	</div>
`

const banner = document.querySelector('.banner')
const footer = document.querySelector('.main__footer')

document.head.insertAdjacentHTML('beforeend', style)
// banner.insertAdjacentHTML('beforeend', shipping)
footer.insertAdjacentHTML('beforebegin', reviews)

const myTooltip = document.querySelectorAll('.myTooltip')

function convertDate(date) {
	return date.toLocaleDateString('pt-PT').replace(/\//g, '.')
}

document.body.addEventListener('click', function (e) {
	if (e.target.closest('.show')) {
		e.target.closest('.show').classList.remove('show')
	} else if (e.target.closest('.myTooltip')) {
		hideTooltips()

		e.target.closest('.myTooltip')?.classList.add('show')

		window.dataLayer = window.dataLayer || [];
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Checkout improvements mobile',
			'eventAction': 'Clicks on hints'
		})
	} else {
		hideTooltips()
	}
})

function hideTooltips() {
	myTooltip.forEach(tooltip => {
		tooltip.classList.remove('show')
	})
}

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Checkout improvements mobile',
	'eventAction': 'loaded',
})

;(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments)
	}
	h._hjSettings = {hjid: 2247058, hjsv: 6}
	a = o.getElementsByTagName('head')[0]
	r = o.createElement('script')
	r.async = 1
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
	a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
window.hj = window.hj || function () {
	(hj.q = hj.q || []).push(arguments)
}
hj('event', 'checkout_improvements')
