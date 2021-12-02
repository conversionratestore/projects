const style = `
    <style>  
    	.stage__sidebar {
    		flex: 0 0 280px;
    	}
    
        .banner {
        	position: relative;
        	max-width: calc(100% - 20px);
    		margin: 30px auto;
            padding: 15px;
            background: #4495EC url("https://conversionratestore.github.io/projects/samcart/img/bannerBg.svg") no-repeat center top / 100% 155px;
            border-radius: 10px;
        }
        
        .banner::after {
        	content: "";
        	position: absolute;
        	display: block;
        	width: 105px;
			height: 45px;
        	right: -6px;
        	top: -15px;
        	background: url("https://conversionratestore.github.io/projects/samcart/img/off.png") no-repeat;
        	object-fit: cover;
        	transition: all 0.7s ease;
    		opacity: 1;
    		pointer-events: none;
        }
        
        /*.banner.show_sale::after {*/
		/*	!*display: block;*!*/
		/*	opacity: 1;*/
		/*}*/
		
        
        .banner.mobile::before {
        	display: none;
        }
        
         /*.banner.mobile p.title {*/
         /*	margin: 0;*/
         /*}*/
        
        .banner p {
        	margin: 0;
        	text-align: center;
        }

        .banner img {
            width: 100%;
            object-fit: cover;
        }

        p.title {
			/*font-size: 10px;*/
			margin: 10px 0 -10px;
	        font-weight: 900;
			font-size: 12px;
	        letter-spacing: 0.1em;
			text-transform: uppercase;
			color: #FFFFFF;
			transition: font-size 1s ease;
        }
        
        /*.banner.show_sale p.title {
        	font-size: 10px;
			margin: 10px 0 -10px;
        }*/
              
        p.subtitle {
        	color: #203B54;
        	font-weight: 900;
			font-size: 18px;
			line-height: 19px;
			white-space: nowrap;
        }		
        
        .features {
            max-height: 1000px;
            transition: max-height 1s ease;
        	margin-top: 15px;
        	padding: 10px;
        	background: #FFFFFF;
			box-shadow: 0 10px 39px rgba(127, 143, 156, 0.07);
			border-radius: 10px;
            overflow: hidden;
        }
        
        .features ul {
        	list-style: none;
		    margin: 15px 0;
            padding: 0 0 0 7%;
        }
        
        .features ul li {
            position: relative;
            
    		
        	font-weight: 500;
			font-size: 12px;
			color: #5F7384;
			margin-bottom: 10px;
			
			line-height: 15px;
			text-transform: capitalize;
        }       
        
        .features ul li::before {
            position: absolute;
        	content: "";
        	display: block;
            left: -15px;
        	height: 12px;
        	width: 12px;
        	background-image:url("https://conversionratestore.github.io/projects/samcart/img/checkmark.svg");
            background-repeat: no-repeat;
        }
        
        .features ul li span {
        	display: none;
        	text-decoration: line-through;
        }
        
        .features ul li span.priceless {
        	text-decoration: none;
        }
        
        .banner.show_sale .features ul li span {
        	display: inline;
        	font-weight: 300;
        	
        }
  
        .btn-wrapper button {
       		width: 100%;
       		margin-top: 15px;
       		padding: 7px;
       		border: 2px solid #183B56;
			border-radius: 5px;
			font-weight: bold;
			font-size: 12px;
			line-height: 15px;
			text-align: center;
        }
               	
       	.btn-wrapper .btn-wrapper_wait{
       		background: #FFFFFF;
			color: #183B56;
			
       	}      	      
       	
       	.btn-wrapper .btn-wrapper_sale {
       		font-size: 14px;
       		background: #183B56;
       		color: #FFFFFF;
       		line-height: 17px;       		  
       		cursor: pointer;
       		padding: 14px;
       	} 	
       	
       	.btn-wrapper .btn-wrapper_sale span {
       		display: block;
		    margin: 0 auto;
		    width: fit-content;
		    padding: 0 15px;
		    text-align: center;
		    background: #F2813F;
		    border-radius: 4px;
		    font-size: 9px;
       	}
       	
       	p.price {
       		position: relative;
       		margin-top: 10px;
       		font-weight: 900;
			font-size: 26px;
			color: #F2813F;	
       		white-space: nowrap;	
       	} 
       	
        p.price sup{
			margin: 5px;
			position: absolute;
        	font-weight: 400;
			font-size: 11px;
        	color: #5A7386;
        }

		p.price sup::after{
			content:"";
			display:block;
			position:absolute;
			left:0;
			top:50%;
			width:100%;
			height:0;
			border-bottom: 1px solid #5A7386;
			transform:rotate(345deg);
		}

		p.subprice {
			color: #183B56;
			font-weight: 500;
			font-size: 10px;
		}
        
        .fullscreen__ctas  {
        	display: none;
        }
        
        
    </style>
`

const mobileCSS = `
	<style>
		.banner {
			margin-top: 0;
			max-width: 100%;
			padding: 10px;
		}
		
		.banner.mobile {
			padding-bottom: 5px;
		}
		
		
		/*.banner.mobile .close {*/
		/*	display: none !important;*/
		/*}*/
		
		/*.banner.show_sale .close {*/
		/*	display: block;*/
		/*	opacity: 1;*/
		/*	pointer-events: auto;*/
		/*}*/
		
		/*.close {*/
        /*	position: absolute;*/
        /*	!*display: block;*!*/
        /*	width: 15px;*/
		/*	height: 5px;*/
        /*	right: 10px;*/
        /*	top: 12px;*/
        /*	background: url("https://conversionratestore.github.io/projects/samcart/img/arrow-up.svg") no-repeat;*/
        /*	object-fit: cover;*/
        /*	cursor: pointer;*/
        /*	padding: 5px;*/
        /*	opacity: 0;*/
        /*	transition: opacity 1s ease;*/
        /*	pointer-events: none;*/
		/*}*/
		
		
		.banner.mobile::after {
			opacity: 0 !important;
		}
		
		.banner::after {			
        	right: -6px;
        	top: 12px;      	
		}

		.banner.mobile::after {
			opacity: 0;
		}

		p.title {
			font-size: 10px;
			margin: 0;
		}
		
		.banner.mobile p.title {
			font-size: 12px;
			margin: 0;
		}
		
		.banner.mobile {
			cursor: pointer;
		}
		
	
		.banner.mobile .features {
            max-height: 0;
            margin: 0;
            padding: 0;
            overflow: hidden;
		}
        
        .banner.mobile .title {
            font-size: 16px;
        }

        p.subtitle {
            margin-top: 10px;
            font-size: 20px; 
        }
        
        .banner.mobile p.tap {
        	display: block;
        }

		p.tap {
			display: none;
			position: relative;
            width: fit-content;
            margin: 5px auto 10px;
			color: #FFFFFF;
			font-size: 10px;
			cursor: pointer;
		}

		.tap::after {
			content: "";
			display: block;
			width: 10px;
			height: 5px;
			background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-down9.svg");
			object-fit: cover;
			position: absolute;
			top: 14px;
			left: 50%;
			transform: translateX(-50%);			
		}
		
		.features {
			margin-top: 10px;
		}

       .features ul {
       		padding: 0 5%;
       }

        .btn-wrapper button {
            font-size: 12px;
            padding: 15px 5px !important;
            line-height: 15px;
        }

        .btn-wrapper button.btn-wrapper_sale {
        	font-size: 14px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 10px 0 !important;
        }

        .btn-wrapper .btn-wrapper_sale span {
            margin: 0;
            font-size: 12px;
            padding: 5px 15px;
        }
        
        .features ul li::before {
        	height: 15px;
    		width: 15px;
    		left: -20px;
        }
	</style>
`

const banner = `
    <div class="banner">
        <div class="inner">
            <p class="title">workshop Special offer</p>
            <div class="features">
                <p class="subtitle">Get SamCart and $10k<br>in FREE gifts now</p>
                <ul>
                    <li>1 Year of SamCart</li>
                    <li>1 Page Masterclass <span>($3,995)</span></li>
                    <li>Traffic Tactics <span>($1,997)</span></li>
                    <li>Course Creation Challenge <span>($995)</span></li>
                    <li>1 Page Wednesday Calls <span>($995!)</span></li>
                    <li>Private Facebook Group <span>($495)</span></li>
                    <li>Top Seller Strategies <span>($995)</span></li>
                    <li>My Personal Course Sales Page Template <span class="priceless">(Priceless)</span></li>
                    <li>30-Day Money-Back Guarantee <span class="priceless">(Priceless)</span></li>
                    <li>40% SamCart Discount for Life! <span class="priceless">(Priceless)</span></li>                    
                </ul>
                <img src="https://conversionratestore.github.io/projects/samcart/img/webinars.png" alt="webinars">
                <div class="btn-wrapper">
                	<button class="btn-wrapper_wait">Your special offer will be available in <span>00:00:00</span></button>
				</div>
            </div>
        </div>
    </div>
`

document.head.insertAdjacentHTML('beforeend', style)

const mediaQuery = window.matchMedia('(max-width: 992px)')

let attendeeInterval = setInterval(() => {
	if (document.querySelector('.attendee-list')) {
		clearInterval(attendeeInterval)

		if (mediaQuery.matches) {
			setMobile()
		} else {
			document.querySelector('.attendee-list').insertAdjacentHTML('afterend', banner)
		}
	}
}, 200)

let intervalTime = 0

if (!window.localStorage.getItem('startDate') && !window.localStorage.getItem('pathName')) {
	window.localStorage.setItem('startDate', Date.now().toString())
	window.localStorage.setItem('pathName', window.location.pathname)
} else {
	let currentDate = Date.now()
	window.localStorage.setItem('currentDate', currentDate.toString())

	intervalTime = currentDate - window.localStorage.getItem('startDate')
}

// let count = 30 - (intervalTime / 1000)
let count = 3601 - (intervalTime / 1000)

if (count > 0) {
	let counter = setInterval(() => {
		count = count - 1
		if (count <= 0) {
			clearInterval(counter)

			showSaleBtn()
		}

		let seconds = count % 60
		let minutes = Math.floor(count / 60)
		let hours = Math.floor(minutes / 60)
		minutes %= 60
		hours %= 60

		hours = ('0' + hours.toFixed(0)).slice(-2)
		minutes = ('0' + minutes.toFixed(0)).slice(-2)
		seconds = ('0' + seconds.toFixed(0)).slice(-2)

		if (document.querySelector('.btn-wrapper_wait span')) {
			document.querySelector('.btn-wrapper_wait span').innerHTML = hours + ':' + minutes + ':' + seconds
		}
	}, 1000)
} else {
	showSaleBtn()
}

function setMobile() {
	document.head.insertAdjacentHTML('beforeend', mobileCSS)

	document.querySelector('.stage__player').insertAdjacentHTML('afterbegin', banner)
	document.querySelector('.inner .title').insertAdjacentHTML('afterend', `
				<p class="tap">Tap to see more</p>
			`)

	document.querySelector('.banner .subtitle').innerText = 'Launch your business now!'

	document.querySelector('.banner').classList.add('mobile')

	document.querySelector('.banner.mobile').addEventListener('click', listener)


	// document.querySelector('.features ul').innerHTML = `
	//                 <li>1 Year of SamCart</li>
	//                 <li>1 Page Masterclass <s>($3,995)</s></li>
	//                 <li>1 Page Workshop <s>($995)</s></li>
	//                 <li>1 Page Launch <s>($995!)</s></li>
	//                 <li>1 Page Blueprint <s>($99)</s></li>
	//                 <li>My Past Reports <s>($495)</s></li>
	//                 <li>The 1 Page Template! <s>(Priceless)</s></li>
	//                 <li>Private facebook group</li>
	//                 <li>1 page wednesday calls <s>(Priceless)</s></li>
	// 		`


	// document.querySelector('.banner .close').addEventListener('click', () => {
	// 	let intr = setInterval(() => {
	// 		if(document.querySelector('.banner')) {
	// 			clearInterval(intr)

	// 			document.querySelector('.banner').classList.add('mobile')

	// 			window.dataLayer = window.dataLayer || [];
	// 			dataLayer.push({
	// 				'event': 'event-to-ga',
	// 				'eventCategory': 'Exp — Webinar page special offer',
	// 				'eventAction': 'Click on hide banner'
	// 			});
	// 		}
	// 	}, 200)
	// })
}

function listener(e) {
	e.currentTarget.classList.remove('mobile')

	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp — Webinar page special offer',
		'eventAction': 'Click on Workshop special offer button',
	})

	console.log('EVENT: Click on Workshop special offer button')

	e.currentTarget.removeEventListener('click', listener)

}

function showSaleBtn() {
	let interval = setInterval(() => {
		if (document.querySelector('.btn-wrapper')) {
			clearInterval(interval)

			document.querySelector('.btn-wrapper').innerHTML = `<button class="btn-wrapper_sale" onclick="location.href='https://checkout.samcart.com/products/courses-special-offer'">Continue to special offer</button>`
			document.querySelector('.banner').classList.add('show_sale')

			let priceText

			if (mediaQuery.matches) {
				priceText = `<p class="price">$349<sup>$588</sup></p><p class="subprice">and get $10k in FREE gifts now</p>`

			} else {
				priceText = `<p class="price">$349<sup>$588</sup></p>`
			}

			document.querySelector('.subtitle').insertAdjacentHTML('afterend', priceText)

			document.querySelector('.btn-wrapper .btn-wrapper_sale').addEventListener('click', () => {
				window.dataLayer = window.dataLayer || []
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp — Webinar page special offer',
					'eventAction': 'Click on Continue to special offer button',
				})
				console.log('EVENT: Click on Continue to special offer button')
			})
		}
	}, 100)
}

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp — Webinar page special offer',
	'eventAction': 'loaded',
})

;(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments)
	}
	h._hjSettings = {hjid: 2592989, hjsv: 6}
	a = o.getElementsByTagName('head')[0]
	r = o.createElement('script')
	r.async = 1
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
	a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
window.hj = window.hj || function () {
	(hj.q = hj.q || []).push(arguments)
}
hj('event', 'webinar_page_special_offer')

console.log(`Don't document the bug. Fix it, Bohdan :)`)
