const productStyle = `
	<style>
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
            margin: 17px 0 25px;
        }

        .cards .price {
            font-weight: 600;
            font-size: 26px;
        }
        
        .cards .price:not(:first-child) {
            margin-top: 15px;
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
        
		.comparison .item .name {
			font-weight: 400;
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
        
        .properties .property:last-child .check,
        .financing .property:last-child .check {
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
			margin: 20px auto 30px;
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
        
        p.subtitle {
        	font-weight: bold;
			font-size: 18px;
			color: #000000;
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
		    padding: 20px;
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
        
        p.from {
        	font-weight: 500;
			font-size: 16px;
        	text-transform: uppercase;
        	color: #FFFFFF;
        }
        
        .price-wrapper {        	
        	display:flex;
        	flex-direction: row;
        	justify-content: space-evenly;      
        	margin-bottom: 40px;  	
        	border-bottom: 1px solid #DCDCDC;
        	padding-bottom: 35px;
        }
        
        .price-wrapper > div {
        	position: relative;
        	width: 100%;
        }
        
        .price-wrapper > div::after {
        	content: "";
        	position: absolute;
        	display: block;
        	height: 66px;
        	top: 15px;
        	right: 0;
        	width: 1px;
        	background: #DCDCDC;
        }
        
        .price-wrapper > div:last-child::after {
        	display: none;
        }
        
        .price-wrapper .zero {
        	font-weight: bold;
			font-size: 40px;
			color: #000000;
			position: relative;
			letter-spacing: 0.02em;
        } 
        
        .price-wrapper .zero sup {
			position: absolute;
        	font-weight: normal;
			font-size: 16px;
			top: 20px;			
        }
        
        .price-wrapper .zero sup:first-child {
        	left: 50%;
    		transform: translateX(calc(-50% - 20px));
        }
        
        .price-wrapper .subzero {        	
        	font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			text-align: center;
			letter-spacing: 0.01em;		
			color: #222222;			
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

let language = window.location.host.split('.')[0] === 'uk' ? 'en' : 'ge'

const textArr = {
	'en': {
		month: `month`,
		from: `Monthly From`,
		fromWord: 'From',
		klarna: `with Klarna or SplitIt`,
		features: `Features`,
		live: `650+ live and on-demand classes`,
		motion: `Motion tracking workouts`,
		personalised: `Personalised workouts`,
		entertainment: `Entertainment through your favourite apps`,
		access: `Access to personal trainers`,
		specs: `Specifications`,
		dimension: `Dimensions`,
		weight: `Weight`,
		floorStand: `Floor stand`,
		secure: `Wall Secure`,
		display: `Display`,
		inch: `inch touch screen, Full HD`,
		sound: `Sound`,
		firstX4: `x4 - max SPL 105<br>dB with custom<br>sound board and<br>amplifier, 65 W`,
		secondX4: `x4 - max SPL<br>85dB, 30 W`,
		mounting: `Wall Mounting`,
		starterbox: 'VAHA Starterbox',
		accessories: `Accessories`,
		voucher: `GARMIN voucher code to be redeemed after 30 Day Trial Resistance bands of different strengths<br><br>Camera cover<br>User manual`,
		care: `Care`,
		microfiber: `Microfiber cloth<br>and glass cleaner`,
		heart: `Garmin voucher`,
		elastic: `Elastic bands`,
		warranty: '2 year warranty',
		financing: `Financing`,
		payment: `One-time payment`,
		options: `Financing options:`,
		choose: `Choose what works for you`,
		rate: `0% annual interest rate`,
		total: `Total price regardless of term: £1,195`,
		incl: `incl. VAT`,
		text: [
			`Try it for 30 days for free.`,
			`If you are not satisfied with VAHA, we will pick it up free of charge. Any payments already made will be refunded.`,
			`Pay the full amount or via installments for 12, 24, or 39 months. The VAHA membership (from £39) is separate from the purchase of the VAHA mirror and is activated upon receipt.`,
			`Sufficient creditworthiness is a prerequisite. The installment purchase offered by us is handled by our payment partner Klarna Bank AB (publ). Klarna, therefore, decides whether the installment purchase is accepted or not.`,
		],
		getWord: 'GET',
		try: 'Try 30 days for free',
		chooseVaha: 'Choose your Vaha',
		link: '/product',
		money: `No money<br>down`,
		flatrate: 'Flatrate plans',
		fees: `No hidden<br>fees`
	},
	'ge': {
		month: `monat`,
		from: ``,
		fromWord: 'ab',
		klarna: ``,
		features: ``,
		live: ``,
		motion: ``,
		personalised: ``,
		entertainment: ``,
		access: ``,
		specs: `Spezifikationen`,
		dimension: `Maße`,
		weight: `Gewicht`,
		floorStand: ``,
		secure: `Wandsicherung`,
		display: `Display`,
		inch: `Zoll Full-HD Touchscreen`,
		sound: `Lautsprecher`,
		firstX4: `x4 - max SPL 105<br>dB mit Custom<br>Soundboard und<br>Verstärker, 65 W`,
		secondX4: `x4 - max SPL<br>85dB, 30 W`,
		mounting: `Wandmontage`,
		starterbox: 'VAHA Starterbox',
		accessories: `Zubehör`,
		voucher: `GARMIN Gutscheincode einlösbar nach Abschluss der 30-tägigen Testphaset Fitnessbänder in verschiedenen Stärken<br><br>Kameraabdeckung<br>Benutzerhandbuch`,
		care: `Pflege`,
		microfiber: `Mikrofasertuch<br>und Glasreiniger`,
		heart: ``,
		elastic: ``,
		warranty: ``,
		financing: `Finanzierung`,
		payment: ``,
		options: `Optionen zur Finanzierung:`,
		choose: `Wähle, was dir passt`,
		rate: `0% Jahreszins`,
		total: `Gesamtpreis unabhängig von Laufzeit: 2.268£`,
		incl: `inkl. MwSt.`,
		text: [
			`30 Tage gratis und unverbindlich testen.*`,
			`Die Zahlung erfolgt erst nach der Testphase und wenn du nicht mit VAHA zufrieden bist, einfach kommentarlos gratis wieder abholen lassen.`,
			`Zahle via Direkt- oder Ratenkauf für 12, 24 oder 39 Monate. Die VAHA Mitgliedschaft (ab 39 £) ist losgelöst vom Kauf des VAHAs und wird beim Erhalt aktiviert.`,
			`Eine ausreichende Bonität ist vorausgesetzt. Der von uns angebotene Ratenkauf wird von unserem Zahlungspartner ZAB Abrechnungsgesellschaft mbH abgewickelt. ZAB entscheidet daher, ob der Ratenkauf angenommen wird oder nicht.`,
		],
		getWord: '',
		try: '',
		chooseVaha: '',
		link: '/produkt',
		money: '',
		flatrate: 'Flatrate-Tarife',
		fees: ''
	},
}
const obj = textArr[language]

const productPage = `
    <section class="comparison">
        <div class="cards">
            <div class="inner">
                <div class="item">
                    <img src="https://conversionratestore.github.io/projects/vaha/images/vahaX.png" alt="vaha x">
                    <p class="name">Vaha X</p>
                 	<p class="from">${ obj.from }</p>
<!--                    <p class="price">£ 2,268</p>-->
                    <p class="price">£ 88 / ${ obj.month }</p>
                    <p class="subprice">${ obj.klarna }</p>
                </div>
                <div class="item">
                    <img src="https://conversionratestore.github.io/projects/vaha/images/vahaS.png" alt="vaha x">
                    <p class="name">Vaha S</p>
                    <p class="from">${ obj.from }</p>
<!--                    <p class="price">£ 1,395</p>-->
                    <p class="price">£ 68 / ${ obj.month }</p>
                    <p class="subprice">${ obj.klarna }</p>
                </div>
            </div>
        </div>
        <div class="properties">
            <div class="inner">
                <div class="characteristic">
                    <p class="title">${ obj.features }</p>
                    <div class="names-wrapper">
                        <p class="name">Vaha X</p>
                        <p class="name">Vaha S</p>
                    </div>
                    <div class="property">
                        <p>${ obj.live }</p>
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
                        <p>${ obj.motion }</p>
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
                        <p>${ obj.personalised }</p>
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
                        <p>${ obj.entertainment }</p>
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
                        <p>${ obj.access }</p>
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
                    <p class="title">${ obj.specs }</p>
                    <div class="property">
                        <p>${ obj.dimension }</p>
                        <div class="check">
                            <p>170 x 62<br>x 4,2 cm</p>
                            <p>150 x 50<br>x 4,2 cm</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.weight }</p>
                        <div class="check">
                            <p>45 kg</p>
                            <p>27 kg</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.floorStand }</p>
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
                        <p>${ obj.secure }</p>
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
                        <p>${ obj.display }</p>
                        <div class="check">
                            <p>43 ${ obj.inch }</p>
                            <p>32 ${ obj.inch }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.sound }</p>
                        <div class="check">
                            <p>${ obj.firstX4 }</p>
                            <p>${ obj.secondX4 }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.mounting }</p>
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
                    <p class="title">${ obj.starterbox }</p>
                    <div class="property">
                        <p>${ obj.accessories }</p>
                        <div class="check">
                            <p>${ obj.voucher }</p>
                            <p>${ obj.voucher }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.care }</p>
                        <div class="check">
                            <p>${ obj.microfiber }</p>
                            <p>${ obj.microfiber }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.heart }</p>
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
                        <p>${ obj.elastic }</p>
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
                        <p>${ obj.warranty }</p>
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
            </div>
        </div>
         <div class="financing">
            <div class="inner">
                <div class="characteristic">
                    <p class="title">${ obj.flatrate }</p>
                    <div class="price-wrapper">
                    	<div>
                    		<p class="zero">£0</p>
                    		<p class="subzero">${ obj.money }</p>
						</div>
						<div>
                    		<p class="zero">%0</p>
                    		<p class="subzero">${ obj.financing }</p>
						</div>
						<div>
                    		<p class="zero">0</p>
                    		<p class="subzero">${ obj.fees }</p>
						</div>
					</div>
                    <div class="names-wrapper">
                        <p class="name">Vaha X</p>
                        <p class="name">Vaha S</p>
                    </div>
                    <div class="property">
                        <p>36 ${ obj.month }</p>
                        <div class="check">
                            <p>£ 88 / ${ obj.month }</p>
                            <p>£ 68 / ${ obj.month }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>24 ${ obj.month }</p>
                        <div class="check">
                            <p>£ 115 / ${ obj.month }</p>
                            <p>£ 85 / ${ obj.month }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>12 ${ obj.month }</p>
                        <div class="check">
                            <p>£ 202 / ${ obj.month }</p>
                            <p>£ 139 / ${ obj.month }</p>
                        </div>
                    </div>
                    <div class="property">
                        <p>${ obj.payment }</p>
                        <div class="check">
                            <p>${ obj.fromWord } £ 2,418</p>
                            <p>${ obj.fromWord } £ 1,663</p>
                        </div>
                    </div>
                </div>
                
                <!-- <div class="options">
                    <p class="title">${ obj.options }:</p>
                    <p class="subtitle">${ obj.choose }</p>
                    <div class="checks">
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg"
                                 alt="check mark">
                            <p>${ obj.rate }</p>
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg"
                                 alt="check mark">
                            <p>${ obj.total }</p>
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg"
                                 alt="check mark">
                            <p>${ obj.incl }</p>
                        </div>
                    </div>
                    <div class="text">
                        <p>${ obj.text[0] }</p>
                        <p>${ obj.text[1] }</p>
                        <p>${ obj.text[2] }</p>
                        <p>${ obj.text[3] }</p>
                    </div>
                </div> -->
            </div>
        </div> 
    </section>
    <div class="btn-wrapper">
        <button>
            <span>${ obj.getWord } VAHA X</span>
            <span>${ obj.try }</span>
        </button>
        <button>
            <span>${ obj.getWord } VAHA S</span>
            <span>${ obj.try }</span>
        </button>
    </div>
`

let btnInterval = setInterval(() => {
	if (document.querySelectorAll('.basket-payments-button')[2]) {
		clearInterval(btnInterval)

		document.querySelectorAll('.btn-wrapper button').forEach((btn, index) => {
			btn.addEventListener('click', () => {
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

if (window.location.pathname === '/product/' || window.location.pathname === '/produkt/') {
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
	document.head.insertAdjacentHTML('beforeend', homeStyle)

	const btn = document.querySelector('.container-3dy0SD button')
	const clone = btn.cloneNode(true)

	btn.style.display = 'none'

	btn.after(clone)

	clone.querySelector('span').innerText = obj.chooseVaha

	clone.addEventListener('click', () => {
		window.location.href = obj.link

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
