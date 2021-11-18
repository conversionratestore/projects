const productStyle = `
	<style>
		/*.vaha-nav[data-v-c121df16] {*/
		/*	margin-top: 0;*/
		/*}*/	
		.siq_bR {
			bottom: 100px;
		}
		
		.promoHeight-3t4KXS {
			display: none;
		}
	
		.container-3dy0SD {
			display: none
		}
		
		.vaha-nav {
			z-index: 999;
			background-color: #000;
		}	
			
		.vaha-main-content > div:first-child {
			display: none !important;
		}
		
		.mobile-menu {
			top: 48px !important;
		}
		
		.comparison {
			margin-top: 80px;
		}
		
		.comparison p {
			margin: 0;
			color: #fff;
		}
		
        .inner {
            padding: 20px;
        }        
      
        .cards .inner {
            display: flex;
            justify-content: space-between;
            background-color: #000;
            gap: 10px;
        }        
        
        .cards .item {
        	width: 50%;
        }
        
        .cards .item img {
        	width: 100%
        }
        
        .cards .name {
            font-size: 23px;
            margin: 17px 0 30px;
        }

        .cards .price {
            font-weight: 600;
            font-size: 26px;
        }
        
        .cards .price:not(:first-child) {
            margin-top: 20px;
        }
        
		.name {
			text-transform: uppercase;
		}
		
        p.title {
            font-weight: bold;
            font-size: 24px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
        
        .properties {
            background-color: #000;
        }
        
        .characteristic {
            text-align: center;
        }
        
        .properties .characteristic:not(:first-child) {
        	margin-top: 50px;
        }
        
        .names-wrapper {
            display: flex;
	        justify-content: space-around;
	        margin-bottom: 10px;
	        gap: 10px;
        }
        
		.comparison .name {
			font-weight: 700;
		}
		
        .check {
            display: flex;
            justify-content: space-around;
            
            margin-bottom: 20px;
            border-bottom: 1px solid #474747;
        }
        
        .properties .property:last-child .check{
            border: none;
        }

        .check > div {            
        	display: block;
            width: 100%;
            margin: 20px 0;
        }
        
        .check > div:first-child {
            border-right: 1px solid #474747;
        }
        
      	.check > p {  
	        display: block;          
	        width: 100%;
	        margin: 20px 0;
	        padding: 0 10px;
	        font-weight: 700;
        }
        
        .check > p:first-child {
            border-right: 1px solid #474747;
        }
        
		.financing {
			background-color: #fff;
		}
		
		.financing p {
			color: #000;
		}
		
		.financing p.title {
			margin-top: 20px;
		}
		
		.financing .name {
			border: 1px solid #222222;
			width: 100%;
			padding: 7px 0;
			border-radius: 4px;
			white-space: nowrap;
		}
		
        .financing .check{
            border-bottom: 1px solid #DCDCDC;
        }
        
        .financing .check > p:first-child {
            border-right: 1px solid #DCDCDC;
        }
        
        .options p.title {
        	font-weight: 400;
        	text-transform: none;
        }
        
        .checks > div{
        	display: flex;
        	gap: 20px;
        	margin-bottom: 15px;
        }
        
        .text p {
        	font-size: 14px;
        	line-height: 21px;
        	margin-bottom: 10px;
        }       
        
        .btn-wrapper {
        	position: fixed;
        	bottom: 0;   
		    display: flex;
		    width: 100%;
		    padding: 20px 17px;
		    z-index: 999;
		    transform: translateY(100%);
		    transition: all 0.5s ease-in-out;
        } 
        
        .btn-wrapper.show {
        	transform: translateY(0);
        }
        
        .btn-wrapper button {
        	background: #F8D47D;
			border-radius: 5px;
			padding: 10px;
			width: 50%;
			border: none;
			cursor: pointer;
        }
        
        .btn-wrapper button span{
        	display: block;
        	font-weight: 400;
        	font-size: 14px;
        	white-space: nowrap;
        }
        
        .btn-wrapper button:first-child {
        	margin-right: 10px;
        }
        
        .btn-wrapper button span:first-child{
        	text-transform: uppercase;
        	font-weight: 700;
        	font-size: 16px;
        }
	</style>
`
const homeStyle = `
	<style>
			.headline-2zqlww {
				display: none;
			}
			
			.button-3MJU8U {
				max-width: 100%;
				justify-content: space-between;
			}
	</style>
`
const productPage = `
    <section class="comparison">
        <div class="cards">
            <div class="inner">
                <div class="item">
                    <img src="https://conversionratestore.github.io/projects/vaha/images/vahaX.png" alt="vaha x">
                    <p class="name">Vaha X</p>
                    <p class="price">€ 2,268</p>
                    <p class="subprice">From € 58 / month</p>
                    <p class="price">€ 58 / month</p>
                    <p class="subprice">with Klarna or SplitIt</p>
                </div>
                <div class="item">
                    <img src="https://conversionratestore.github.io/projects/vaha/images/vahaS.png" alt="vaha x">
                    <p class="name">Vaha S</p>
                    <p class="price">€ 1,395</p>
                    <p class="subprice">From € 36 / month</p>
                    <p class="price">€ 36 / month</p>
                    <p class="subprice">with Klarna or SplitIt</p>
                </div>
            </div>
        </div>
        <div class="properties">
            <div class="inner">
                <div class="characteristic">
                    <p class="title">Features</p>
                    <div class="names-wrapper">
                        <p class="name">Vaha X</p>
                        <p class="name">Vaha S</p>
                    </div>
                    <div class="property">
                        <p>650+ live and on-demand classes</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                    <div class="property">
                        <p>Motion tracking workouts</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                    <div class="property">
                        <p>Personalised workouts</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                    <div class="property">
                        <p>Entertainment through your favourite apps</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                    <div class="property">
                        <p>Access to personal trainers</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="characteristic">
                    <p class="title">Specifications</p>
                    <div class="property">
                        <p>Dimensions</p>
                        <div class="check">
                            <p>170 x 62<br>x 4,2 cm</p>
                            <p>150 x 50<br>x 4,2 cm</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>Weight</p>
                        <div class="check">
                            <p>45 kg</p>
                            <p>27 kg</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>Floor stand</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                    <div class="property">
                        <p>Wall Secure</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                    <div class="property">
                        <p>Display</p>
                        <div class="check">
                            <p>43 inch touch<br>screen, Full HD</p>
                            <p>32 inch touch<br>screen Full HD</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>Sound</p>
                        <div class="check">
                            <p>x4 - max SPL 105 dB with custom sound board and amplifier, 65 W</p>
                            <p>x4 - max SPL 85dB, 30 W</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>Wall Mounting</p>
                        <div class="check">
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/x.svg"
                                     alt="check mark">
                            </div>
                            <div>
                                <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg"
                                     alt="check mark">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="characteristic">
                    <p class="title">VAHA Starterbox</p>
                    <div class="property">
                        <p>Accessories</p>
                        <div class="check">
                            <p>GARMIN voucher code to be redeemed after 30 Day Trial Resistance bands of different
                                strengths<br><br>Camera cover<br>User manual</p>
                            <p>GARMIN voucher code to be redeemed after 30 Day Trial
                                Resistance bands of different strengths<br><br>Camera cover<br>User manual</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>Care</p>
                        <div class="check">
                            <p>Microfiber cloth and glass cleaner</p>
                            <p>Microfiber cloth and glass cleaner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="financing">
            <div class="inner">
                <div class="characteristic">
                    <p class="title">Financing</p>
                    <div class="names-wrapper">
                        <p class="name">Vaha X</p>
                        <p class="name">Vaha S</p>
                    </div>
                    <div class="property">
                        <p>39 month</p>
                        <div class="check">
                            <p>€ 58 / month</p>
                            <p>€ 36 / month</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>24 month</p>
                        <div class="check">
                            <p>€ 94 / month</p>
                            <p>€ 58 / month</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>12 month</p>
                        <div class="check">
                            <p>€ 189 / month</p>
                            <p>€ 116 / month</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>One-time payment</p>
                        <div class="check">
                            <p>€ 2,265</p>
                            <p>€ 1,395</p>
                        </div>
                    </div>
                </div>
                <div class="options">
                    <p class="title">Our Financial Options include:</p>
                    <div class="checks">
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg"
                                 alt="check mark">
                            <p>0% annual interest rate</p>
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg"
                                 alt="check mark">
                            <p>Total price regardless of term: £1,195</p>
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg"
                                 alt="check mark">
                            <p>incl. VAT</p>
                        </div>
                    </div>
                    <div class="text">
                        <p>Try it for 30 days for free.</p>
                        <p>If you are not satisfied with VAHA, we will pick it up free of charge. Any payments already made will be refunded.</p>
                        <p>Pay the full amount or via installments for 12, 24, or 39 months. The VAHA membership (from £39) is separate from the purchase of the VAHA mirror and is activated upon receipt.</p>
                        <p>Sufficient creditworthiness is a prerequisite. The installment purchase offered by us is handled by our payment partner Klarna Bank AB (publ). Klarna, therefore, decides whether the installment purchase is accepted or not.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="btn-wrapper">
        <button>
            <span>Get VAHA X</span>
            <span>Try 30 days for free</span>
        </button>
        <button>
            <span>Get VAHA S</span>
            <span>Try 30 days for free</span>
        </button>
    </div>
`

let btnInterval = setInterval(() => {
	if (document.querySelectorAll('.basket-payments-button')[2]) {
		console.log('exist >>>')

		clearInterval(btnInterval)

		document.querySelectorAll('.btn-wrapper button').forEach((btn, index) => {
			btn.addEventListener('click', () => {
				console.log(index)
				document.querySelectorAll('.basket-vaha-item')[index].click()

				if (index === 0) {
					window.dataLayer = window.dataLayer || []
					dataLayer.push({
						'event': 'event-to-ga',
						'eventCategory': 'Exp — The new comparison page',
						'eventAction': 'Click on Get vaha x button',
					})
				} else if (index === 1) {
					window.dataLayer = window.dataLayer || []
					dataLayer.push({
						'event': 'event-to-ga',
						'eventCategory': 'Exp — The new comparison page',
						'eventAction': 'Click on Get vaha s button',
					})
				}
				document.querySelectorAll('.basket-payments-button')[2].click()
			})
		})
	}
}, 200)

if (window.location.pathname === '/product/') {
	console.log('product >>>')
	document.head.insertAdjacentHTML('beforeend', productStyle)
	document.querySelector('.vaha-main-content div').insertAdjacentHTML('afterend', productPage)

	let myScrollFunc = function () {
		let y = window.scrollY
		if (y >= 100) {
			document.querySelector('.btn-wrapper').classList.add('show')
		}
	}

	window.addEventListener('scroll', myScrollFunc)
} else {
	console.log('home >>>')
	document.head.insertAdjacentHTML('beforeend', homeStyle)

	const btn = document.querySelector('.container-3dy0SD button')
	const clone = btn.cloneNode(true)

	btn.style.display = 'none'

	btn.after(clone)

	clone.querySelector('span').innerText = 'Choose your Vaha'

	clone.addEventListener('click', () => {
		window.location = 'https://uk.vaha.com/product'

		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — The new comparison page',
			'eventAction': 'Click on Choose your Vaha button',
		})

	})
}

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
window.hj = window.hj || function () {
	(hj.q = hj.q || []).push(arguments)
}
hj('event', 'new_comparison_page')

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — The new comparison page',
	'eventAction': 'loaded',
})

document.querySelector('.vaha-nav button')?.addEventListener('click', () => {
	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp — The new comparison page',
		'eventAction': 'Click on the sticky button Purchase',
	})
})
