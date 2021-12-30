const script = document.createElement('script')
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
script.async = false
document.getElementsByTagName('head')[0].appendChild(script)

let jqueryLoaded = setInterval(() => {
	if (typeof jQuery === 'function') {
		clearInterval(jqueryLoaded)

		let scriptCustom = document.createElement('script')
		scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js'
		scriptCustom.async = false
		document.head.appendChild(scriptCustom)

		let scriptCustomStyle = document.createElement('link')
		scriptCustomStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
		scriptCustomStyle.rel = 'stylesheet'
		document.head.appendChild(scriptCustomStyle)


	}
}, 100)

const style = /*html*/ `
<style>
    .custom_main *,
    .custom_main *::before,
    .custom_main *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }
    
    .custom_main p {
    	margin: 0;
    }
	
	/*body {*/
	/* padding: 15px !important;*/
	/*}*/
	
    /*img {*/
    /*display: block;*/
    /*height: auto;*/
    /*}*/
    
    /*button {*/
    /*border: inherit;*/
    /*background: inherit;*/
    /*}*/
    
    /*.custom_main p {        */
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*}*/
    
   .content-area {
   	display: none;
   }
   
   .custom_main {
   	margin-top: -40px;
	    padding: 15px;
   }

    .custom_main li {
        list-style: none;        
    }
    
    .dropdown ul li {
    	margin-bottom: 8px;
    }
    
    .custom_main p {
    	line-height: normal;
    }
    
    /* heading */
    
    .heading .title {
        font-weight: bold;
        font-size: 25px;
        line-height: 29px;
        color: #333333;
        margin-bottom: 12px;
    }
    
     .heading .subtitle {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #888888;
        margin-bottom: 16px;
    }
    
    .dropdown .subject {
    	position: relative;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        background-color: #000;
        color: #FFFFFF;
        padding: 10px;        
    }
    
    .dropdown .subject::after{
        content: "";
        position: absolute;
        width: 12px;
        height: 8px;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        background: url(https://conversionratestore.github.io/projects/mammutmarsch/img/keyboard_arrow_up.svg) center no-repeat;
    }
    
    .dropdown .hide-custom .subject::after{
    	background: url(https://conversionratestore.github.io/projects/mammutmarsch/img/keyboard_arrow_down.svg) center no-repeat;
    }

    /* first_block*/
    .first_block .slick-list{
      position: relative;
    }


    .first_block .slick-arrow{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1111;
 	background-color: rgba(255,255,255, 0.7);
	padding: 15px;
	border-radius: 2px;
	    line-height: 0;
    }

    .first_block .slick-arrow.prev{
      left: 0;
    }

    .first_block .slick-arrow.next{
      right: 0;
    }
    
    /*second_block_inform */
    .second_block_inform ul{
        padding: 20px;
    }

    .second_block_inform ul li > div{
        position: relative;
        padding-left: 15px;
        display: flex;
        align-items: center;
        width: fit-content;
    }

    .second_block_inform > ul li + li{
        margin-top: 16px;
    }

    .second_block_inform ul li div p{
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 14px;
        line-height: 1.14;
        color: #333333;
    }

    .second_block_inform ul li div svg{
        fill: #008000;
        margin-left: 10px;
    }
    
    .second_block_inform ul li p {
    	position: relative;
    }

    .second_block_inform ul li p:first-child:before{
        content: "";
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #008000;
    }
    
    .hidden_text{
        display: none;
        position: relative;
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: 0.03em;
        color: #7F7F7F;
        padding: 10px 12px;
        background: #FFFFFF;
        border: 1px solid #E5E5E5;
        border-radius: 5px;
        margin-top: 12px !important;
    }

	.show .hidden_text{
		display: block;		
	} 
	
	/*.show svg {*/
	/*	position: relative;*/
	/*}*/
	
	.second_block_inform ul li.show > div::after {
		content: "";
		position: absolute;
		bottom: -13px;
		right: 4px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 5px 10px 5px;
		border-color: transparent transparent #fff transparent;
		z-index: 1;
	}
	
	.second_block_inform ul li.show > div::before {
		content: "";
		position: absolute;
		bottom: -13px;
		right: 3px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 6px 11px 6px;
		border-color: transparent transparent #E5E5E5 transparent;
	}
	
	

    /*.toggle_inform{*/
    /*    fill: rgba(0, 128, 0, 0.5) !important;*/
    /*}*/

    /* slider_reviews*/
    .slider_reviews h2{
        /*margin-bottom: 16px;*/
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #333333;
    }

    .slider_reviews .slick-list{
        padding: 10% 8%;
    }

    .slider_reviews .slick-initialized .slick-slide{
        margin-right: 10px;
    }


    .slider_reviews .slider_nav .slider_custom_list{
        padding: 8px;
        border: 2px solid #F5F5F5; 
        border-radius: 5px;
    }
    
    /*.slider_nav .slick-active {*/
    /*	display: none;*/
    /*}*/

    .slider_reviews .slider_nav .slider_custom_list > div:first-child{
        display: flex;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div{
        margin-left: 12px;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div > p{
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #333333;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:first-child > div > span{
        display: block;
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: #7F7F7F;
        margin: 8px 0;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:last-child, 
    .slider_reviews .slider_nav .slider_custom_list > div:last-child p + p{
        margin-top: 8px;
    }

    .slider_reviews .slider_nav .slider_custom_list > div:last-child p{
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 400;
        font-size: 12px;
        line-height: 125%;
        color: #7F7F7F;
    }

    .slider_reviews ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider_reviews .slick-dots li + li{
        margin-left: 2px;
    }

    .slider_reviews .slick-dots li button {
        position: relative;
        display: flex;
        width: 8px;
        height: 8px;
        font-size: 0;
        line-height: 0;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background-color: transparent !important;
        border-color: transparent !important;
        padding: 5px;
    }

    .slider_reviews .slick-dots li button:before {
        opacity: 0.75;
        position: absolute;
        content: '•';
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 6px;
        height: 6px;
        border: 1px solid #008000;
        text-align: center;
        border-radius: 50%;
        background-color: #fff;
    }

    .slider_reviews .slick-dots li.slick-active button:before {
        background-color: #008000;
        width: 8px;
        height: 8px;
    }
    
    .slider_reviews li.slick-active {
    	pointer-events: none;
    }
    
    .slick-dots {
		padding: 0 !important;
	}

    /*third_block */
    
    .third_block  {
    	padding: 20px 0;
    }
    
    .third_block > ol {
    	padding-left: 40px;
    }

    .third_block h2{
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 700;
        font-size: 14px;
        line-height: 130%;
        color: #333333;
        margin-bottom: 12px;
    }

    /*.third_block > ol{*/
    /*    padding: 0 20px;*/
    /*}*/

    .third_block > ol li + li{
        margin-top: 12px;
    }

    .third_block > ol li {
        /*font-family: 'Roboto', sans-serif;*/
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
    }

    .third_block > ol li {
        list-style: inherit;
    }
    
    /*fourth_block*/
    
    .fourth_block .item {
     border: 1px solid #E5E5E5;
     margin: 12px 0;
     border-radius: 2px;
    }
    
    .fourth_block .visible { 
        display: flex;
        justify-content: space-between;
        align-items: center;       
		border-radius: 2px;
		padding: 15px 10px;
		position: relative;
    }
		
	.fourth_block .visible p.pseudo {
		position: absolute;
		top: -7px;
		left: 50%;
		transform: translateX(-50%);
		padding: 3px 10px;
		font-weight: bold;
		font-size: 8px;
		letter-spacing: 0.03em;
		text-transform: uppercase;		
		color: #333333;
		border-radius: 2px;
	}
	
	.pseudo.favorit {
		background: #FFFF00;		
	}
	
	.pseudo.beliebt {
		background: #008000;
		color: #fff !important;
	}
    
    .fourth_block .visible div {
        display: flex;
        gap: 4px;
    } 
    
    .fourth_block .visible p {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 14px;
        color: #7F7F7F;
    }
    
    /* The radio_container */
.radio_container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* hide-custom the browser's default radio button */
.radio_container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #7F7F7F;
}

.alarmed .checkmark {
	border-color: #CC0000;
}

/* On mouse-over, add a grey background color */
/*.radio_container:hover input ~ .checkmark {*/
/*  background-color: #fff;*/
/*}*/

/* When the radio button is checked, add a blue background */
.selected .checkmark {
  border-color: #008000 !important;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.selected .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio_container .checkmark:after {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #008000;
}

.first_block .slider-for {
 margin: 8px 0;
}

.grecaptcha-badge {
	z-index: 1000;
}

.first_block .slider-for img{
	width: 296px;
	height: 296px;
	object-fit: contain;
}

.first_block .slider_nav img{
	width: 69px;
	height: 69px;
	padding-right: 8px;
	object-fit: cover;
}

.table_section{
        width: 100%;
        border-collapse: collapse;
        margin: 16px 0 33px;
    }
    .table_section tbody tr:nth-child(odd){
        background: #F5F5F5;
    }
    .table_section tbody tr td{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #333333;
        padding: 8px 0 8px 12px;
    }
    .table_section tbody tr td:last-child{
        max-width: 185px;
        font-weight: 400;
        color: #7F7F7F;
        text-align: end;
        padding: 8px 12px 8px 0;
        }
        
        .hidden_custom div {
        	display: flex;
        	flex-direction: row;
        	border-top: 1px solid #E5E5E5;
        	margin: 0 10px;
        	padding: 8px;
        }
        
        .hidden_custom div .title {
        	font-weight: 500;
			font-size: 14px;
			line-height: 16px;
			
			color: #333333;
        }
        
        .hidden_custom div .subtitle {
	        font-weight: normal;
			font-size: 12px;
			line-height: 14px;
			color: #7F7F7F;
        }
        
        .hidden_custom {
        	display: none;
        }
        
        /*.selected .hidden{*/
        /*	display: block;*/
        /*}*/
		
		.total_block .price-wrap {
			display: flex;
			justify-content: space-between;
			background-color: #F5F5F5;
        	padding: 15px;
        	align-items: center;
        	margin: 0 -15px;
		}
		
		.total_block .btn-wrap {
			text-align: center;
		}
		
		.total_block p, .total_block p span, .total_block button {
			text-transform: uppercase;
			font-weight: bold;						
			letter-spacing: 0.03em;
			color: #000000;
		}
		
		.total_block .total {
			font-size: 20px;
			line-height:12px;
		}
		
		.total_block span {
			font-size: 10px;
		}
		
		.total_block .price {
			font-size: 25px;
		}
		
		.total_block button {
			background: #FFFF00;
			border-radius: 29px;
			padding: 13px;
			border: none;
			margin-top: 15px;
			width: 100%;
			font-size: 14px;
			color: #333333;
		}
		
		.fourth_block .item.selected {
			border: 1px solid #008000;
		}
		
		 p.alarm {
		 	display: none;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			text-align: center;
			margin-top: 15px;		
			
			color: #CC0000;
		}
		
		/*.total_block.alarmed p.alarm  {*/
		/*	display: block;*/
		/*}*/
		
		.alarm img {
			margin-right: 4px;
		}
		
		.total_block button[disabled] {
			background-color: #E1E1E1 !important;
		}
		
	.slider_nav .slick-current {
		display: none !important;
	}
</style>
`

const pathProduct = window.location.pathname.split('/50-km-marsch')[1]
let product

switch (pathProduct) {
	case '/mammut-hamburg/':
		product = 'hamburg'
		break
	case '/ruhr/':
		product = 'ruhrgebiet'
		break
	case '/mammutmarsch-muenchen/':
		product = 'munchen'
		break
	default:
		break
}

const version = {
	hamburg: {
		eventDetails: {
			title: `Mammutmarsch<br>Hamburg – 42/60 km`,
			start: `Elbinsel Kaltehofe, Kaltehofe-<br>Hauptdeich 6-7, 20539 <br>Hamburg`,
			dataStart: '26.02.2021, ab 07:00 Uhr',
			dataFinish: '27.02.2021, 01:00 Uhr',
			routes: '42km /60km',
			altitude: '150m/370m',
		},
		eventHighlights: [
			'Hamburg, meine Perle. Urbanes und grünes Sightseeing zugleich!',
			'Hafencity mit Elbphilharmonie',
			'Elbufer mit Hafenblick',
			'Außenalster & Binnenalster',
			'Speicherstadt',
			'Blankenese',
		],
		paket: ['42 km (mit T-Shirt)', '42 km (nur Teilnahme)', '60 km (mit T-Shirt)', '60 km (nur Teilnahme)'],
		img: [
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map42.png">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map60.png">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img0.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img1.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img2.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img3.jpg">`,
		],
	},
	ruhrgebiet: {
		eventDetails: {
			title: `Mammutmarsch <br>Ruhrgebiet - 30/55 km`,
			start: `Landschaftspark Duisburg –<br> Nord, Emscherstraße 71,<br> 47137 Duisburg`,
			dataStart: `23.04.2022<br> ab 07:30 Uhr (55 KM)<br> ab 10:30 Uhr (30 KM)`,
			dataFinish: '24:00 Uhr',
			routes: '30km /55km',
			altitude: '130m/270m',
		},
		eventHighlights: [
			'100% Industriekultur. Wir führen dich hautnah durch die beeindruckendsten Industrieanlagen des Ruhrgebiets',
			'Start im alten Eisenwerk LaPaDu',
			'Zeche Zollverein (55 KM)',
			'Ausblick vom Tetraeder (55 KM)',
			'Gasometer Oberhausen',
			'Zeche Osterfeld',
		],
		paket: ['30 km (mit T-Shirt)', '30 km (nur Teilnahme)', '55 km (mit T-Shirt)', '55 km (nur Teilnahme)'],
		img: [
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map30_rahr.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map55_rahr.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img4.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img5.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img9.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img6.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img7.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img8.jpg">`,
		],
	},
	munchen: {
		eventDetails: {
			title: `Mammutmarsch <br>München - 30/55 km`,
			start: `Südbad, Seestraße 20,<br> 82327 Tutzing`,
			dataStart: `26.03.2022<br> ab 07:30 Uhr (55 KM)<br> ab 09:30 Uhr (30 KM)`,
			dataFinish: '24:00 Uhr',
			routes: '30km /55km',
			altitude: '270m/550m',
		},
		eventHighlights: [
			'Back to Nature , ruhige lange Wanderwege durch Wald und Felder mit viel Seeblick.',
			'Start und Ziel am Starnberger See',
			'Ammersee',
			'Kloster Andechs',
			'Alpenblick',
			'Viel Natur',
		],
		paket: ['30 km (mit T-Shirt)', '30 km (nur Teilnahme)', '55 km (mit T-Shirt)', '55 km (nur Teilnahme)'],
		img: [
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map30_mun.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/new_map55_mun.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img10.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img11.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img12.jpg">`,
			`<img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider-img13.jpg">`,
		],
	},
}

let cityObj = version[product]

let imagesString

cityObj.img.forEach(img => {
	imagesString += img
})

const page = /*html*/ `
    <main class="custom_main">
      <section class="heading">
          <p class="title">${ cityObj.eventDetails.title }</p>
          <p class="subtitle">Nimmst du die Herausforderung an?</p>
      </section>
      <section class="dropdown">
          <ul>
              <li>
                  <div class="subject">
                      <p>Event details</p>
                  </div>
                  <div class="first_block info">
                      <div class="slider-for"></div>
                      <div class="slider_nav">      
                      	${ imagesString }                    
                      </div>
                      <table class="table_section">
					    <tbody>
					        <tr>
					            <td>Start/<br> Zieladresse</td>
					            <td>${ cityObj.eventDetails.start }</td>
					        </tr>
					        <tr>
					            <td>Datum & Uhrzeit:</td>
					            <td>${ cityObj.eventDetails.dataStart }</td>
					        </tr>
					        <tr>
					            <td>Spätester Finish:</td>
					            <td>${ cityObj.eventDetails.dataFinish }</td>
					        </tr>
					        <tr>
					            <td>Routen</td>
					            <td>${ cityObj.eventDetails.routes }</td>
					        </tr>
					        <tr>
					            <td>Höhenmeter</td>
					            <td>${ cityObj.eventDetails.altitude }</td>
					        </tr>
					    </tbody>
					</table>
                  </div>
              </li>
              <li>
                  <div class="subject">
                      <p>Jedes Paket enthält</p>
                  </div>
                  <div class="second_block_inform info">
                      <ul>
                          <li>
                              <div>
                                  <p>Ticket & markierte Routen</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Neben der Teilnahme bekommst du eine detailliert ausgearbeitete Route mit allen Highlights der Region. Markiert mit Pfeilen Schildern und Reflektoren.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Start- und Zielzeremonie</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Wir feiern dich, wenn es los geht und wir feiern dich, wenn du ins Ziel einläufst! Natürlich in gebührender Atmosphäre mit Start-/Zielkanal, Musik, Jubel etc.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Streckenposten mit Snacks</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Als Streckenposten wählen wir ganz besondere Orte aus, die das Erlebnis untermalen. Snacks gibt es von Riegeln über Obst bis hin zu geschmierten Broten.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Heiße und kalte Getränke</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Wasser, so viel du magst, aber auch Kaffee, Cola und Tees sind fast immer dabei.</p>
                          </li>
                          <li>
                              <div>
                                  <p>Urkunde, Medaille & Finisherband</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Im Ziel bekommst du alles, was du zum Angeben brauchst. Und natürlich als Erinnerung an die bestandene Herausforderung!</p>
                          </li>
                          <li>
                              <div>
                                  <p>Betreuung durch Sanitätsdienst</p>
                                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.1665 4.83342H9.83317V6.50008H8.1665V4.83342ZM8.1665 8.16675H9.83317V13.1667H8.1665V8.16675ZM8.99984 0.666748C4.39984 0.666748 0.666504 4.40008 0.666504 9.00008C0.666504 13.6001 4.39984 17.3334 8.99984 17.3334C13.5998 17.3334 17.3332 13.6001 17.3332 9.00008C17.3332 4.40008 13.5998 0.666748 8.99984 0.666748ZM8.99984 15.6667C5.32484 15.6667 2.33317 12.6751 2.33317 9.00008C2.33317 5.32508 5.32484 2.33341 8.99984 2.33341C12.6748 2.33341 15.6665 5.32508 15.6665 9.00008C15.6665 12.6751 12.6748 15.6667 8.99984 15.6667Z"/>
                                  </svg>
                              </div>
                              <p class="hidden_text">Egal, ob du dir eine Blase läufst oder der Kreislauf Probleme macht, ein Sani ist immer in der Nähe. Sicherheit hat bei uns höchste Priorität!</p>
                          </li>
                      </ul>
                      <div class="slider_reviews">
                          <h2>Seit 2007 haben wir unzählige Extremwanderevents für euch organisiert!</h2>
                          <div class="slider_nav">
                              <div class="slider_custom_list">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo3.jpg"
                                           alt="">
                                      <div>
                                          <p>Manuela Häsel</p>
                                          <span>20/10/2021</span>
                                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png"
                                               alt="reviews">
                                      </div>
                                  </div>
                                  <div>
                                      <p>Ein Event was mir sehr viel Spass macht und mir meine Grenzen zeigt. Extremwandern mit toller Organisation und Spass. Immer wieder gerne. Ich werde dabei bleiben.</p>
                                  </div>
                              </div>
                              <div class="slider_custom_list">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo2.jpg"
                                           alt="">
                                      <div>
                                          <p>Judith H.</p>
                                          <span>20/11/2021</span>
                                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png"
                                               alt="reviews">
                                      </div>
                                  </div>
                                  <div>
                                      <p>Mein Lieblingsveranstalter für extrem Wanderungen. So nett und sympathisch und überragend gut ist kein anderer. Tolle Menschen die einem das Event einfach super und unvergesslich machen.</p>
                                  </div>
                              </div>
                              <div class="slider_custom_list">
                                  <div>
                                      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/slider_reviews_photo1.jpg"
                                           alt="">
                                      <div>
                                          <p>Silvia Knoblauch</p>
                                          <span>05/11/2021</span>
                                          <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviews.png"
                                               alt="reviews">
                                      </div>
                                  </div>
                                  <div>
                                      <p>Mein Erster Lauf in Heidelberg 21- den ich auch geschafft habe! Ihr macht eine tolle Arbeit. Weiter so....</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
              <li>
                  <div class="subject">
                      <p>Event Highlights</p>
                  </div>
                  <div class="third_block info">
                      <h2>${ cityObj.eventHighlights[0] }</h2>
                      <ol>
                          <li>  
                            ${ cityObj.eventHighlights[1] }
                          </li>
                          <li>
                            ${ cityObj.eventHighlights[2] }
                          </li>
                          <li>
                            ${ cityObj.eventHighlights[3] }
                          </li>
                          <li>
                            ${ cityObj.eventHighlights[4] }
                          </li>
                          <li>
                            ${ cityObj.eventHighlights[5] }
                          </li>
                      </ol>
                  </div>
              </li>
              <li>
    <div class="subject">
        <p>Wähle dein Paket aus</p>
    </div>
        <div class="fourth_block info">
            <div class="item">
                <div class="visible">
                    <div>
                        <label class="radio_container">
                            <input type="radio"   name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <p class="paketname">${ cityObj.paket[0] }<img
                                src="https://conversionratestore.github.io/projects/mammutmarsch/img/tshirt.png"
                                alt="tshirt"></p>
                    </div>
                    <p class="item_price">€67.50</p>
                    <p class="pseudo favorit">Favorit</p>
                </div>
                <div class="hidden_custom">
                    <div>
                        <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/tshirt-black.svg" alt="">
                        <p class="title">Hochwertiges, gut geschnittenes<br><span class="subtitle">Event T-Shirt</span></p>
                    </div>
                </div>
                
            </div>
            <div class="item">
                <div class="visible">
                    <div>
                        <label class="radio_container">
                            <input type="radio" name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <p class="paketname">${ cityObj.paket[1] }</p>
                    </div>
                    <p class="item_price">€47.50</p>
                </div>
                <div class="hidden_custom">
                    <div>
                        <p class="subtitle">Teilnahme, Streckenposten (mit Snacks, Wasser und Überraschungen),
                            Shuttle-Service/Ausstiegspunkte, Urkunde, Medaille & Finisherband, Betreuung durch
                            Sanitätsdienst, Teilnehmerheft</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="visible">
                    <div>
                        <label class="radio_container">
                            <input type="radio"   name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <p class="paketname">${ cityObj.paket[2] }<img
                                src="https://conversionratestore.github.io/projects/mammutmarsch/img/tshirt.png"
                                alt="tshirt"></p>
                    </div>
                    <p class="item_price">€77.50</p>
                    <p class="pseudo beliebt">Beliebt</p>
                </div>
                <div class="hidden_custom">
                    <div>
                        <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/tshirt-black.svg" alt="">
                        <p class="title">Hochwertiges, gut geschnittenes<br><span class="subtitle">Event T-Shirt</span></p>
                    </div>
                </div>
                
            </div>
            <div class="item">
                <div class="visible">
                    <div>
                        <label class="radio_container">
                            <input type="radio"  name="radio">
                            <span class="checkmark"></span>
                        </label>
                        <p class="paketname">${ cityObj.paket[3] }</p>
                    </div>
                    <p class="item_price">€57.50</p>
                </div>
                <div class="hidden_custom">
                    <div>
                        <p class="subtitle">Teilnahme, Streckenposten (mit Snacks, Wasser und Überraschungen),
                            Shuttle-Service/Ausstiegspunkte, Urkunde, Medaille & Finisherband, Betreuung durch
                            Sanitätsdienst, Teilnehmerheft</p>
                    </div>
                </div>
            </div>
            <div class="total_block">
            <div class="price-wrap">
                <p class="total">Total<br><span>(INKLUSIVE MWST)</span></p>
                <p class="price">€00.00</p>
            </div>
            <p class="alarm"><img src="https://conversionratestore.github.io/projects/mammutmarsch/img/alarm.svg" alt="alarm">Bitte wähle ein Paket aus</p>
            <div class="btn-wrap">
                <button>Anmeldung abschliesen</button>
            </div>
        </div>
        </div>
        </li>
          </ul>
      </section>
    </main>
`

document.body.insertAdjacentHTML('afterbegin', style)
// document.body.insertAdjacentHTML('afterbegin', page)
document.querySelector('#main').insertAdjacentHTML('afterbegin', page)

let jqueryLoaded2 = setInterval(() => {

	if (typeof jQuery === 'function') {
		clearInterval(jqueryLoaded2)

		let slickInterval = setInterval(() => {
			if (
				typeof jQuery('.slider_reviews .slider_nav').slick === 'function' &&
				document.querySelector('.slider_reviews .slider_nav') &&
				document.querySelector('.first_block .slider_nav')
			) {
				clearInterval(slickInterval)

				let reviewsSlider = $('.slider_reviews .slider_nav').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					focusOnSelect: true,
					dots: true,
				})

				reviewsSlider.on('swipe', function () {
					reviewScrolled()
				})

				reviewsSlider.find('.slick-slide').click(function () {
					reviewScrolled()
				})

				reviewsSlider.find('.slick-dots li').click(function () {
					reviewScrolled()
				})

				let sliderFor = $('.first_block .slider-for').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					fade: true,
					asNavFor: '.first_block .slider_nav',
					prevArrow: `
					<div class="prev" >
						<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					        <path d="M12.5098 1.8701L10.7298 0.100098L0.839844 10.0001L10.7398 19.9001L12.5098 18.1301L4.37984 10.0001L12.5098 1.8701Z" fill="#333333" fill-opacity="0.8"/>
					        </svg>
					</div>
				`,
					nextArrow: `
<div class="next" >
			<svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        		<path d="M0.490234 18.1301L2.26023 19.9001L12.1602 10.0001L2.26023 0.100098L0.490234 1.8701L8.62023 10.0001L0.490234 18.1301Z" fill="#333333" fill-opacity="0.8"/>
        	</svg>
        	</div>
        `,
				})

				sliderFor.on('swipe', function () {
					mainSwipeEvent()
				})

				sliderFor.find('.slick-arrow').click(function () {
					mainSwipeEvent()
				})

				let mySlider = $('.first_block .slider_nav').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
					asNavFor: '.slider-for',
					focusOnSelect: true,
				})

				mySlider.on('swipe', function () {
					thumbSwipeEvent()
				})

				mySlider.find('.slick-slide').click(function () {
					thumbSwipeEvent()
				})

				$('.subject').click(function () {
					$(this).closest('li').toggleClass('hide-custom')
					if ($(this).closest('li').hasClass('hide-custom')) {
						$(this).closest('li').find('.info').slideUp()
					} else {
						$(this).closest('li').find('.info').slideDown()

						let subjectName = $(this).find('p').text()

						window.dataLayer = window.dataLayer || []
						dataLayer.push({
							'event': 'event-to-ga',
							'eventCategory': 'Exp: PDP improvements',
							'eventAction': `${ subjectName } section opened`,
						})

						console.log(`eventAction: ${ subjectName } section opened`)
					}
				})

				$('.second_block_inform ul li div svg').click(function () {
					if (!$(this).closest('li').hasClass('show')) {

						$('.second_block_inform .show').find('.hidden_text').slideUp()
						$('.second_block_inform .show').removeClass('show')

						$(this).closest('li').find('.hidden_text').slideDown()
						$(this).closest('li').addClass('show')

					} else {

						$('.second_block_inform .show').find('.hidden_text').slideUp()
						$('.second_block_inform .show').removeClass('show')

					}
				})

				$('.fourth_block .item').click(function () {
					if (!$(this).hasClass('selected')) {
						let indexItem = $(this).index()

						$('.fourth_block .selected .hidden_custom').slideUp()
						$('.fourth_block .selected').removeClass('selected')

						$(this).find('.hidden_custom').slideDown()
						$(this).addClass('selected')

						$('.price-wrap .price').text($(this).find('.item_price').text())

						$('.total_block .alarm').slideUp()
						$('.fourth_block').removeClass('alarmed')

						$('.total_block button').attr('disabled', false)

						switch (+indexItem) {
							case 0:
								document.querySelectorAll('.radio-container')[0].click()
								break
							case 1:
								document.querySelectorAll('.radio-container')[2].click()
								break
							case 2:
								document.querySelectorAll('.radio-container')[1].click()
								break
							case 3:
								document.querySelectorAll('.radio-container')[3].click()
								break
							default:
								break
						}

						let paketname = $(this).find('.paketname').text()

						// $(this).find('.visible p')

						window.dataLayer = window.dataLayer || []
						dataLayer.push({
							'event': 'event-to-ga',
							'eventCategory': 'Exp: PDP improvements',
							'eventAction': `${ paketname } selected`,
						})

						console.log(`eventAction: ${ paketname } selected`)


					}
				})

				$('.total_block button').click(function () {
					if ($('.item.selected').length === 0) {
						$('.fourth_block').addClass('alarmed')
						$('.total_block .alarm').slideDown()
						$('.total_block button').attr('disabled', true)

						window.dataLayer = window.dataLayer || []
						dataLayer.push({
							'event': 'event-to-ga',
							'eventCategory': 'Exp: PDP improvements',
							'eventAction': 'Proceed to checkout click',
						})

						console.log('eventAction: Proceed to checkout click')

					} else {
						document.querySelector('#proceed_to_checkout').click()

						$('.total_block button').attr('disabled', false)
						$('.total_block .alarm').slideUp()
						$('.fourth_block').removeClass('alarmed')
					}
				})
			}
		}, 100)
	}
}, 100)

function mainSwipeEvent() {
	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp: PDP improvements',
		'eventAction': 'Main image scrolled',
	})

	console.log('eventAction: Main image scrolled')
}

function thumbSwipeEvent() {
	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp: PDP improvements',
		'eventAction': 'Thumbnail clicked/scrolled',
	})

	console.log('eventAction: Thumbnail clicked/scrolled')
}

function reviewScrolled() {
	window.dataLayer = window.dataLayer || []
	dataLayer.push({
		'event': 'event-to-ga',
		'eventCategory': 'Exp: PDP improvements',
		'eventAction': 'Review scrolled',
	})

	console.log('eventAction Review scrolled')
}

document.querySelectorAll('.first_block .slider_nav img').forEach((el) => {
	document.querySelector('.first_block .slider-for').insertAdjacentHTML('beforeend', `<img class="product1" src="${ el.src }" alt="photo">`)
})

console.log('eventAction: loaded')

;(function (h, o, t, j, a, r) {
	h.hj = h.hj || function () {
		(h.hj.q = h.hj.q || []).push(arguments)
	}
	h._hjSettings = {hjid: 1191175, hjsv: 6}
	a = o.getElementsByTagName('head')[0]
	r = o.createElement('script')
	r.async = 1
	r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
	a.appendChild(r)
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
hj('event', 'pdp_improvements')

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: PDP improvements',
	'eventAction': 'loaded',
})
