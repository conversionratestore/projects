const style = `
    <style>
        .banner {
        	max-width: 222px;
        	margin: 60px auto;
            padding: 20px 18px 25px;
            background: url("https://conversionratestore.github.io/projects/samcart/img/bannerBg.png") no-repeat;
            background-size: cover;
            border-radius: 15px;
        }
        
        .banner p {
        	margin: 0;
        	text-align: center;
        }

        .title {
	        font-weight: 900;
			font-size: 16px;
	        letter-spacing: 0.1em;
			text-transform: uppercase;
			color: #FFFFFF;
        }
        
        .features {
        	margin-top: 20px;
        }
        
        .subtitle {
        	color: #203B54;
        	font-weight: 900;
			font-size: 22px;
			line-height: 26px;
        }
        
        .features {
        	padding: 20px;
        	background: #FFFFFF;
			box-shadow: 0 10px 39px rgba(127, 143, 156, 0.07);
			border-radius: 10px;
        }
        
        .features ul {
        	list-style: none;
		    padding: 0;
		    margin: 25px 0;
        }
        
        .features li {
            display: flex;
    		align-items: center;
    		gap: 5px;
        	font-weight: 500;
			font-size: 12px;
			color: #5F7384;
			margin-bottom: 12px;
        }       
        
        .features ul li::before {
        	content: "";
        	display: block;
        	height: 20px;
        	width: 20px;
        	background-image:url("https://conversionratestore.github.io/projects/samcart/img/checkmark.svg");
        }
        
        .features ul li s {
        	display: none;
        }
        
        .features ul.show_sale li s {
        	display: inline;
        	font-weight: 300;
        }
        
        .features img {
        	margin-bottom: 15px;
        }
        
        .btn-wrapper button {
        	min-height: 62px;
       		width: 100%;
       		padding: 10px;
       		border: 2px solid #183B56;
			border-radius: 7px;
			font-weight: bold;
			font-size: 14px;
			line-height: 20px;
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
       	} 	
       	
       	.btn-wrapper .btn-wrapper_sale span {
       		display: block;
		    margin: 3px auto 0;
		    width: fit-content;
		    padding: 2px 6px;
		    text-align: center;
		    background: #F2813F;
		    border-radius: 5px;
       	}
       	
       	p.price {
       		margin-bottom: 25px;
       		font-weight: 700;
       		font-size: 14px;
       		color: #203B54;  		
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

const banner = `
    <div class="banner">
        <div class="inner">
            <p class="title">workshop Special offer</p>
            <div class="features">
                <p class="subtitle">Get SamCart and<br>$10k in FREE gifts now</p>
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

let attendeeInterval = setInterval(() => {
	if (document.querySelector('.attendee-list')) {
		clearInterval(attendeeInterval)

		document.querySelector('.attendee-list').insertAdjacentHTML('afterend', banner)
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
		console.log(count)
		if (count < 0) {
			clearInterval(counter)

			document.querySelector('.btn-wrapper').insertAdjacentHTML('beforebegin', `
			<p class="price">Get Started For <s>$10,060</s> $349</p>
		`)
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
		}
	}, 100)
}

