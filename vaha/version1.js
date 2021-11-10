const style = /*html*/`
	<style>
	body{
	background-color: purple;
	width: 375px;

    padding: 0;
    margin: 0;
	}
	body p {
	color: #fff;
	}
	*, *::after, *::before {
	box-sizing: border-box;
	}

		.headline-2zqlww {
			display: none;
		}
		.button-3MJU8U {
			max-width: 100%;
			justify-content: space-between;
		}
		/*.pricing-section,*/
	 	/*.vaha-hero-section, */
	 	/*.service-section, */
	 	/*.product-stories,*/
	 	/*#reviews-slider,*/
	 	/*[has-text-primary="content.faqSectionContent"],*/
	 	/*.social-media,*/
	 	/*.social-media + section*/
	 	/*{*/
		/*	display: none;*/
		/*}*/
		
		.vaha-main-content {
			display: none;
		}

		.comparison p {
			margin: 0;
		}
		/*.cards,*/
		/*.properties {*/
		/*	background-color: #000;*/
		/*}*/
        .inner {
            padding: 20px;
        }
        .cards .inner {
            display: flex;
            justify-content: space-between;
            background-color: #000;
            
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
			font-weight: 400;
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
        .names-wrapper {
            display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        }
		.properties .name {
			font-weight: 700;
		}
        .check {
            display: flex;
            justify-content: space-around;
            
            margin-bottom: 20px;
            border-bottom: 1px solid #474747;
        }
        .property:last-child .check{
            border: none;
        }

        .check > div {
            position: relative;
            width: 100%;
            margin: 20px 0;
        }
        .check > div:first-child {
            border-right: 1px solid #474747;
        }
        
		.financing {
			background-color: #fff;
    margin: 0 -20px;
    padding: 20px;
		}
		.financing p {
			color: #000;
		}
        .financing .check{
            border-bottom: 1px solid #DCDCDC;
        }
        .financing .check > div:first-child {
            border-right: 1px solid #DCDCDC;
        }
	</style>
`

// language=HTML
const productPage = /*html*/`

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
                    <img src="https://conversionratestore.github.io/projects/vaha/images/vahaX.png" alt="vaha x">
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
          
                <p class="title">Functions</p>
                <div class="names-wrapper">
                    <p class="name">Vaha X</p>
                    <p class="name">Vaha S</p>
                </div>
                <div class="property">
                    <p>Over 750 live and on-demand course</p>
                    <div class="check">
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                </div>
                <div class="property">
                    <p>Motion tracking workouts</p>
                    <div class="check">
                    <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                </div>
                <div class="property">
                    <p>Personalised workouts</p>
                    <div class="check">
                    <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                </div>
                <div class="property">
                    <p>Entertainment through your favourite apps</p>
                    <div class="check">
                    <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                </div>
                <div class="property">
                    <p>Access to personal trainers</p>
                    <div class="check">
                    <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                </div>
               
                

            </div>
            <div class="characteristic">
                <p class="title">Specifications</p>
                <div class="property">
                    <p>Dimensions</p>
                    <div class="check">
                        <div>
                        <p>170 x 62<br>x 4,2 cm</p>
                        </div>
                        <div>
                        <p>150 x 50<br>x 4,2 cm</p>
                        </div>
                        
                        
                    </div>
                </div>
                <div class="property">
                    <p>Weight</p>
                    <div class="check">
                    <div>
                    <p>45 kg</p>
                    </div>
                    <div>
                    <p>27 kg</p>
                    </div>
                        
                        
                    
                </div>
                <div class="property">
                    <p>Floor stand</p>
                    <div class="check">
                       <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                    </div>
                </div>
                <div class="property">
                    <p>Wall Secure</p>
                    <div class="check">
                    <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                </div>
                <div class="property">
                    <p>Display</p>
                    <div class="check">
                        <div><p>43 inch touch screen, Full HD</p></div>
                        <div><p>32 inch touch screen Full HD</p></div>
                        
                        
                    </div>
                </div>
                <div class="property">
                    <p>Sound</p>
                    <div class="check">
                        <div><p>x4 - max SPL 105 dB with custom sound board and amplifier, 65 W</p></div>
                        <div> <p>x4 - max SPL 105 dB with custom sound board and amplifier, 65 W</p></div>
                        
                       
                    </div>
                </div>
                <div class="property">
                    <p>Wall Mounting</p>
                    <div class="check">
                    <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                        <div>
                            <img src="https://conversionratestore.github.io/projects/vaha/images/check.svg" alt="check mark">
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
            <div class="characteristic">
                <p class="title">VAHA Starterbox</p>
                <div class="property">
                    <p>Heart Rate Monitor</p>
                    <div class="check">
                        
                     <div><p>GARMIN voucher code to be redeemed after 30 Day Trial Resistance bands of different strengths </p>
                        <p>Camera cover User manual</p>
                    </div>
                    <div>
                    
 

                        <p>GARMIN voucher code to be redeemed after 30 Day Trial 
Resistance bands of different strengths</p>
                        <p>Camera cover 
User manual</p>
                    </div>
                    </div>
                </div>
                <div class="property">
                    <p>Care</p>
                    <div class="check">
                        <div><p>Microfiber cloth and glass cleaner</p></div>
                        <div><p>Microfiber cloth and glass cleaner</p></div>
                        
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
                        <div><p>€ 58 / month</p></div>
                        <div><p>€ 36 / month</p></div>
                        
                    </div>
                </div>
                <div class="property">
                    <p>24 month</p>
                    <div class="check">
                        <div><p>€ 94 / month</p></div>
                        <div><p>€ 58 / month</p></div>
                        
                    </div>
                </div>
                <div class="property">
                    <p>12 month</p>
                    <div class="check">
                        <div><p>€ 189 / month</p></div>
                        <div><p>€ 116 / month</p></div>
                        
                    </div>
                </div>
                <div class="property">
                    <p>One-time payment</p>
                    <div class="check">
                        <div>                        <p>€ 2,265</p></div>
<div><p>€ 1,395</p></div>
                        
                    </div>
                </div>
            </div>
            <div class="options">
                <p class="title">Our Financial Options include:</p>
                <div class="checks">
                    <p><img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg" alt="check mark">
                        <span>0% annual interest</span>
                    </p>
                    <p><img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg" alt="check mark">
                        <span>Total price regardless of repayment period: € 1,395</span>
                    </p>
                    <p><img src="https://conversionratestore.github.io/projects/vaha/images/check-gold.svg" alt="check mark">
                        <span>VAT included</span>
                    </p>
                </div>
                <div class="text">
                    <p>Test 30 days free of charge and without obligation. *</p>
                    <p>Payment will only be made after the test phase and if you are not satisfied with VAHA, simply have it picked up again free of charge without comment.</p>
                    <p>Pay via direct or installment purchase for 12, 24 or detached from the purchase of th VAHA and is activated upon receipt.</p>
                    <p>A sufficient credit rating is required. The installment purchase offered by us is processed by our payment partner ZAB Abrechnungsgesellschaft mbH. ZAB therefore decides whether the hire purchase is accepted or not.</p>
                </div>
            </div>
            </div>
        </div>
	</section>
	

`

// ;(function () {
// 	const btn = document.querySelector('.container-3dy0SD button')
// 	const clone = btn.cloneNode(true)
//
// 	btn.style.display = 'none'
//
// 	btn.after(clone)
//
// 	clone.querySelector('span').innerText = 'Choose your Vaha'
//
// 	clone.addEventListener('click', () => {
// 		window.location = 'https://uk.vaha.com/product';
// 	})
// }())

document.head.insertAdjacentHTML('beforeend', style)
// document.querySelector('.vaha-main-content').insertAdjacentHTML('afterbegin', productPage)
	document.body.insertAdjacentHTML('afterbegin', productPage)
