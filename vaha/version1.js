const style = /*html*/`
    <style>
        .banner {
            padding: 20px 18px 25px;
            background: url("https://conversionratestore.github.io/projects/samcart/img/bannerBg.png") no-repeat;
            background-size: cover;
            border-radius: 40px;
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
			margin-bottom: 15px;
        }
        
        .features ul li::before {
        	content: "";
        	display: block;
        	height: 20px;
        	width: 20px;
        	background-image:url("https://conversionratestore.github.io/projects/samcart/img/checkmark.svg");
        }
       
    </style>
`

const banner = /*html*/`
    <div class="banner">
        <div class="inner">
            <p class="title">workshop Special offer</p>
            <div class="features">
                <p class="subtitle">Get SamCart and<br>$10k in FREE gifts now</p>
                <ul>
                    <li>1 Year of SamCart</li>
                    <li>1 Page Masterclass</li>
                    <li>Traffic Tactics</li>
                    <li>Course Creation Challenge</li>
                    <li>1 Page Wednesday Calls</li>
                    <li>Private Facebook Group</li>
                    <li>Top Seller Strategies</li>
                    <li>The 1 Page Template</li>
                    <li>30-Day Money-Back Guarantee</li>
                </ul>
                <img src="https://conversionratestore.github.io/projects/samcart/img/webinars.png" alt="webinars">
                <div class=btn-wrapper">
                	<button>Your special offer will be available in 01:14:00</button>
				</div>
            </div>

        </div>
    </div>
`

document.head.insertAdjacentHTML('beforeend', style)
document.body.insertAdjacentHTML('beforeend', banner)
