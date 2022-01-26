// PART ONE
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
        	right: -15px;
        	top: -15px;
        	background: url("https://conversionratestore.github.io/projects/samcart/img/off.svg") no-repeat;
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
        	top: 15px;      	
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
       		padding: 0 10%;
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
                <p class="subtitle">Get SamCart and<br>FREE gifts now</p>
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
                <img src="https://conversionratestore.github.io/projects/samcart/img/webinar.svg" alt="webinars">
                <div class="btn-wrapper">
                	<button class="btn-wrapper_wait">Your special offer will be available in <span>00:00:00</span></button>
				</div>
            </div>
        </div>
    </div>
`
const mediaQuery = window.matchMedia('(max-width: 992px)')

document.head.insertAdjacentHTML('beforeend', style)

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
}

function listener(e) {
	e.currentTarget.classList.remove('mobile')

	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp — Timeline & SO banner',
		'eventAction': 'Click on Workshop special offer button',
	})

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
				document.querySelector('.banner .subtitle').innerHTML = `Get SamCart and $10k<br>in FREE gifts now`
				priceText = `<p class="price">$349<sup>$588</sup></p>`
			}

			document.querySelector('.subtitle').insertAdjacentHTML('afterend', priceText)

			document.querySelector('.btn-wrapper .btn-wrapper_sale').addEventListener('click', () => {
				window.dataLayer = window.dataLayer || []
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp — Timeline & SO banner',
					'eventAction': 'Click on Continue to special offer button',
				})
			})
		}
	}, 100)
}

// window.dataLayer = window.dataLayer || []
// dataLayer.push({
// 	'event': 'event-to-ga',
// 	'eventCategory': 'Exp — Timeline & SO banner',
// 	'eventAction': 'loaded',
// })

// PART TWO

let styles = `
<style>
    .watch-page {
        overflow-x: hidden;
    }
    .tooltip_wrapper img {
        pointer-events: none;
    }
    .timeline {
        border: 1px solid #C5D3D9;
        background: #FFFFFF;
        opacity: 0;
        padding: 0 45px;
        border-radius: 2px;
        margin: 30px 0 60px;
        position: relative;
    }
    .timeline_container {
        display: flex;
    }
     .timeline button {
        height: 100%;
        width: 30px;
        background: #fff no-repeat center / 10px;
        border: none;
        flex-shrink: 0;
        display: block;
        cursor: pointer;
        position: absolute;
        top: 0; 
        z-index: 2;
        border-right: 1px solid #C5D3D9;
        border-left: 1px solid #C5D3D9;
     }
      
     .timeline button.button-next:before {
        content: '';
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 20%, rgba(255, 254, 254, 0) 80%);
        position: absolute;
        top: 0;
        width: 130px;
        height: 100%;
        pointer-events: none;
        right: calc(100% + 1px);
        transform: matrix(-1, 0, 0, 1, 0, 0);
     }
     .timeline button[disabled] {
        opacity: 0;
        pointer-events: none;
     }
     .timeline button.button-prev {
        left: -1px;
        border-radius: 2px 0 0 2px;
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-left-double.svg");
     }
     .timeline button.button-next {
        right: -1px;
        border-radius: 0 2px 2px 0;
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/arrow-right-double.svg");
     }
     .tns-outer {
        width: 100%;
     }
    .slide {
        position: relative;
        padding-top: 6px;
        padding-bottom: 30px;
        padding-left: 2px;
    }
    .slide:first-child {
        padding-left: 38px!important;
    }
    .slide:first-child:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 20px;
        height: 23px;
        width: 29px;
        background: url("https://conversionratestore.github.io/projects/samcart/img/play.svg") no-repeat center / contain;
    }
    .line {
        height: 4px;
        width: 100%;
        background-color: #046BD9;
        border-radius: 21px;
        display: block;
        margin-top: 10px;
    }
    .slide:before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 30px;
        height: 4px;
        background: no-repeat center / contain;
    }
    .slide[data-point="5"] {
        padding-right: 110px;
    }
    .slide[data-point="5"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_5.svg");
        width: 110px;
    }
     .slide[data-point="2"] {
        padding-right: 54px;
    }
    .slide[data-point="2"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_2.svg");
        width: 54px;
    }
     .slide[data-point="6"] {
        padding-right: 130px;
    }
    .slide[data-point="6"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_6.svg");
        width: 130px;
    }
     .slide[data-point="1"] {
        padding-right: 34px;
    }
     .slide[data-point="1"]:before {
        background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_1.svg");
        width: 34px;
    }
     .slide[data-point="0"]:before {
        content: none;
    }
    .timeline_clock {
        /*font-family: Gilroy;*/
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.1em;
        color: #183B56;
        margin-bottom: 5px;
    }
    .timeline_title {
        max-width: 159px;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #183B56;
    }
    .relative {
        position: relative;
    }
    .tippy-tooltip {
        background: #EEEEEE;
        box-shadow: 0 0.688073px 4.06px rgba(0, 0, 0, 0.07), 6px 7.26px 20.4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        max-width: 230px!important;
    }
    .tippy-popper {
        top: -3px;
    }
    .tippy-tooltip[data-placement="bottom-end"] {
        margin-right: -30px;
    }
    .tippy-tooltip[data-placement^=top]>.tippy-arrow {
        border-top-color: #eee;
        border-width: 10px 20px 0!important;
        bottom: -10px!important;
    }
    .tippy-tooltip[data-placement^=bottom]>.tippy-arrow {
        border-bottom-color: #eee;
        border-width: 0 20px 10px!important;
        top: -10px!important;
    }
    .tippy-tooltip[data-placement="bottom-start"]>.tippy-arrow:before {
        left: 13px!important;
    }
    .tippy-tooltip[data-placement="bottom-end"]>.tippy-arrow:before {
        left: auto!important;
        right: 13px!important;
    }
    .tippy-content {
        font-weight: 400;
        text-transform: initial;
        font-style: normal;
        font-family: 'Roboto', sans-serif;
        padding: 15px!important;
        font-size: 12px;
        line-height: 17px;
        color: #5A7386;
    }
    .tippy-arrow {
        color: #EEEEEE;
        width: 40px;
        height: 10px;
    }
    .w-bold {
        font-weight: 900;
        color: #F2813F;
    }
    
    @media only screen and (min-width: 993px) {
        .stage__player {
            width: calc(100% - 280px)
        }
        .stage__sidebar {
            flex: 0 0 280px;
        }
        .react-player__wrapper video {
            max-height: calc(100vh - 49px - 24px - 170px);
        }
    }
    @media only screen and (max-width: 992px) {
        .timeline_title {
            font-size: 10px;
            max-width: 140px;
        }
        .slide[data-point="6"] {
            padding-right: 68px;
        }
        .slide[data-point="6"]:before {
            background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_5_mob.svg");
            width: 68px;
        }
        .slide[data-point="5"] {
            padding-right: 57px;
        }
        .slide[data-point="5"]:before {
            background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_4_mob.svg");
            width: 57px;
        }
        .slide[data-point="0"] {
            padding-right: 32px;
        }
        .slide[data-point="2"] {
            padding-right: 32px;
        }
        .slide[data-point="2"]:before {
            background-image: url("https://conversionratestore.github.io/projects/samcart/img/point_2_mob.svg");
            width: 32px;
        }
         .slide[data-point="1"] {
            padding-right: 18px;
        }
         .slide[data-point="1"]:before {
            width: 18px;
        }
        .timeline {
            padding: 0 5px 0 20px!important;
        }
        .tippy-tooltip {
            max-width: 146px!important;
        }
        .tippy-content {
            padding: 10px!important;
        }
        .timeline button {
            width: 26px;
            background-size: 9px;
        }
        .timeline button.button-next:before {
            width: 65px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 7%, rgba(255, 254, 254, 0) 90%);
        }
    }
</style>`;
let arrTooltip = {
	'2:44': [`The biggest <br>mistake & <br>how to avoid it`, `The Biggest Mistake I Made When Launching My First Online Course, and How You Can Avoid It`, 5],
	'11:50': [`Become an expert <br>in the field with the '1 Step Rule'`, `The '1 Step Rule' that instantly turns you into an expert...with a course people will line up to buy`, 2],
	'17:34': [`The "1 Page Funnel" that sells your course for you`, `The simple '1 Page Funnel' that sells your course for you around the clock (even if you suck at selling, lol)`, 5],
	'26:22': [`Today's #1 Traffic Source that you can tap in`, `Today's #1 Traffic Source, and how to quickly tap into it & get dozens of new sales each day`,2],
	'33:02': [`How to Launch <br>Your Course <br>in 72 Hours`, `The secret to launching your online course business in less than 72 hours (even if you hate technology or don't have a team helping you!)`,6],
	'45:50': [`What you get with <br>today's special <br>offer`, `Discover how many awesome and helpful things you will get with today's special offer`,2],
	'48:29': [`<span class="w-bold">Masterclass:</span> Launch <br>an Online Business <br>With 1 Page`, `The '1 Page Masterclass' Bonus where you'll discover how to launch an online business with 1 page`,2],
	'51:47': [`The Secret <br>to Unlimited <br>Traffic`, `The secret to unlimited traffic (and more bonuses you get with our offer)`,1],
	'52:55': [`<span class="w-bold">Guide:</span> Set up Your <br>Course seamlessly <br>through SamCart`, `The help you get to set up your course seamlessly through SamCart`,2],
	'54:32': [`Reach the <br>Community of <br>20,000+ Creators`, `Find out the way how to reach the community of 20,000+ creators`,0]
};

let createTimeline = `
    <div class="timeline">
        <div class="timeline_container">
            <button class="button-prev"></button>
            <div class="slider"></div>
            <button class="button-next"></button>
        </div>
    </div>
`;

function setSlide(time, title, tooltip, countPoint) {
	return ` 
        <div class="slide" data-point="${countPoint}">
            <p class="timeline_clock">${time}</p>
            <p class="timeline_title">${title}
                <span class="tooltip_wrapper relative" data-title="${tooltip}">
                    <img src="https://conversionratestore.github.io/projects/samcart/img/alert-circle.svg" alt="icon">
                </span>
            </p>
            <div class="line"></div>
        </div>`
}

let action;

function pushDataLayer(action, label) {
	console.log(action + " : " + label)
	window.dataLayer = window.dataLayer || [];
	if (label) {
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Timeline & SO banner',
			'eventAction': action,
			'eventLabel': label
		});
	} else {
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp — Timeline & SO banner',
			'eventAction': action,
			'eventLabel': ''
		});
	}
}

let optionMut = {
	childList: true,
	subtree: true
}

let countI = 0;

let mut = new MutationObserver(function (muts) {
	if (document.querySelector('.audience-experience') && document.querySelector('.audience-experience') != null && !document.querySelector('.timeline')) {
		mut.disconnect();
		let linkCustom = document.createElement('link');
		linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
		linkCustom.rel = 'stylesheet';
		document.head.appendChild(linkCustom);

		let scriptCustom = document.createElement('script');
		scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
		scriptCustom.async = false;
		document.body.appendChild(scriptCustom);

		let scriptPopper = document.createElement('script');
		scriptPopper.src = 'https://unpkg.com/popper.js@1';
		scriptPopper.async = false;
		document.body.appendChild(scriptPopper);

		let scriptTippy = document.createElement('script');
		scriptTippy.src = 'https://unpkg.com/tippy.js@5';
		scriptTippy.async = false;
		document.body.appendChild(scriptTippy);

		document.body.insertAdjacentHTML('afterbegin', styles);
		document.querySelector('.audience-experience').insertAdjacentHTML('beforebegin', createTimeline);

		for (let key in arrTooltip) {
			document.querySelector('.slider').insertAdjacentHTML('beforeend', setSlide(key, arrTooltip[key][0], arrTooltip[key][1], arrTooltip[key][2]))
		}
		document.querySelector('.slider').addEventListener('click', () => {
			action = 'Click on timeline slider';
			pushDataLayer(action)
		})
		countI = 1;
	}
	mut.observe(document, optionMut);
	if(document.querySelectorAll('.tooltip_wrapper') && document.querySelectorAll('.tooltip_wrapper') != null && document.querySelectorAll('.tooltip_wrapper').length > 9 && countI == 1 && !document.querySelector('.tns-outer')) {
		mut.disconnect();
		let run = setInterval(() => {
			if (document.querySelector('.tns-outer') && document.querySelector('.tns-outer') != null) {
				clearInterval(run)
				console.log('stopRun')

				document.querySelector('.timeline').style.opacity = '1';
				pushDataLayer('loaded')

				if (window.matchMedia('(max-width: 992px)').matches) {
					document.querySelector('.button-next').addEventListener('click', () => {
						document.querySelector('#tns1-mw').style.paddingLeft = '20px';
					})
					document.querySelector('.button-prev').addEventListener('click', (e) => {
						setTimeout(() => {
							if (e.target.disabled === true) {
								document.querySelector('#tns1-mw').style.paddingLeft = '0';
							}
						}, 100)
					})
				}
				document.querySelector('.button-next').addEventListener('click', () => {
					action = 'Click on right arrow button'
					pushDataLayer(action)
				})
				document.querySelector('.button-prev').addEventListener('click', () => {
					action =  'Click on left arrow button'
					pushDataLayer(action)
				})
				let tippyRun = setInterval(() => {
					clearInterval(tippyRun)
					document.querySelectorAll('.tooltip_wrapper').forEach((el,index) => {
						tippy(el, {
							content: el.getAttribute('data-title'),
							placement: 'bottom-start'
						});
						el.addEventListener('mouseover', () => {
							action = 'hover on tooltipe';
							let label = el.closest('.timeline_title').innerText;
							pushDataLayer(action, label)
						})
					});
				}, 200);
				countI = 0;
			} else {
				let sliderCategories = tns({
					container: document.querySelector('.slider'),
					autoWidth: true,
					autoplay: false,
					axis: 'horizontal',
					controls: true,
					loop: false,
					prevButton: document.querySelector('.button-prev'),
					nextButton: document.querySelector('.button-next'),
					autoplayButton: false,
					autoplayButtonOutput: false,
					mouseDrag: true,
					nav: false,
					preventScrollOnTouch: 'auto',
					swipeAngle: false,
				});
			}
		}, 300)
	}
});

mut.observe(document, optionMut);

let isClarify = setInterval(() => {
	if(typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity("set", "timeline_and_SO_banner", "variant_1");
	}
}, 100)


