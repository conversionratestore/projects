const style = `
    <style>
        .banner {
        	max-width: 263px;
        	margin: 40px auto;
            padding: 15px;
            background: url("https://conversionratestore.github.io/projects/samcart/img/bannerBg.png") no-repeat;
            background-size: cover;
            border-radius: 10px;
        }
        
        .banner p {
        	margin: 0;
        	text-align: center;
        }

        .title {
	        font-weight: 900;
			font-size: 12px;
	        letter-spacing: 0.1em;
			text-transform: uppercase;
			color: #FFFFFF;
        }
              
        .subtitle {
        	color: #203B54;
        	font-weight: 900;
			font-size: 18px;
			line-height: 19px;
			white-space: nowrap;
        }
        
        .features {
        	margin-top: 15px;
        	padding: 10px;
        	background: #FFFFFF;
			box-shadow: 0 10px 39px rgba(127, 143, 156, 0.07);
			border-radius: 10px;
        }
        
        .features ul {
        	list-style: none;
		    padding: 0;
		    margin: 20px 0 15px;
        }
        
        .features li {
            display: flex;
    		align-items: center;    		
        	font-weight: 500;
			font-size: 12px;
			color: #5F7384;
			margin-bottom: 13px;
			gap: 5px;
			white-space: nowrap;
        }       
        
        .features ul li::before {
        	content: "";
        	display: block;
        	height: 12px;
        	width: 12px;
        	background-image:url("https://conversionratestore.github.io/projects/samcart/img/checkmark.svg");
        }
        
        .features ul li s {
        	display: none;
        }
        
        .features ul.show_sale li s {
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
       		background: #183B56;
       		color: #FFFFFF;
       		line-height: 17px;       		  
       		cursor: pointer;  
       		padding: 5px;
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
       		margin-top: 8px;
       		font-weight: 700;
       		font-size: 11px;
       		color: #203B54;  	
       		white-space: nowrap;	
       	} 
       	
        p.price s{
        	font-weight: 400;
        	pointer-events: none;
        }
        
        .fullscreen__ctas  {
        	display: none;
        }
    </style>
`

const mobileCSS = `
	<style>
		.banner {
			margin: 0 auto;
			max-width: 100%;
		}
	
		.features {
			display: none;
		}
		.tap {
			position: relative;
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
			top: 15px;
			left: 50%;
			transform: translateX(-50%);			
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
                    <li>1 Year of SamCart <s>($588/yr)</s></li>
                    <li>1 Page Masterclass <s>($3,995)</s></li>
                    <li>Traffic Tactics <s>($1,997)</s></li>
                    <li>Course Creation Challenge <s>($995)</s></li>
                    <li>1 Page Wednesday Calls <s>($995!)</s></li>
                    <li>Private Facebook Group <s>($495)</s></li>
                    <li>Top Seller Strategies <s>($995)</s></li>
                    <li>The 1 Page Template! <s>(Priceless)</s></li>
                    <li>30-Day Money-Back Guarantee</li>
                </ul>
                <img src="https://conversionratestore.github.io/projects/samcart/img/webinars.png" alt="webinars">
                <div class="btn-wrapper">
                	<button class="btn-wrapper_wait">Your special offer will be<br>available in <span>00:00:00</span></button>
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
			document.querySelector('.stage__player').insertAdjacentHTML('afterbegin', banner)

			document.head.insertAdjacentHTML('beforeend', mobileCSS)
			document.querySelector('.inner .title').insertAdjacentHTML('afterbegin', `
				<p class="tap">Tap to see more</p>
			`)

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

let count = 30 - (intervalTime / 1000)
// let count = 3601 - (intervalTime / 1000)

if (count > 0) {
	let counter = setInterval(() => {
		count = count - 1
		if (count < 0) {
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

function showSaleBtn() {
	let interval = setInterval(() => {
		if(document.querySelector('.btn-wrapper')) {
			clearInterval(interval)

			document.querySelector('.btn-wrapper').innerHTML = `<button class="btn-wrapper_sale" onclick="location.href='https://checkout.samcart.com/products/courses-special-offer'">Continue to special offer<span>(40% off)</span></button>`
			document.querySelector('.features ul').classList.add('show_sale')

			document.querySelector('.btn-wrapper').insertAdjacentHTML('beforebegin', `
						<p class="price">Get Started For <s>$10,060</s> $349</p>`)
		}
	}, 100)
}
