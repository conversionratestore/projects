const STYLE = `
	    <style>
	        .on-card-product-wrapper {
	            display: none;
	        }
	
	        body.on-open-card .on-button-get-sominifix-close {
	            float: left;
	        }
	
	        .sidebar_header {            
	            font-weight: bold;
	            font-size: 21px;
	            line-height: 24px;
	            text-align: center;
	            color: #1E415F;
	        }
	        
	        .sidebar_body {
	        	display: flex;
	        	flex-direction: column;
	        	justify-content: space-between;
	        	min-height: 90%;
	            margin-top: 20px;
	            background: #F5F6F7;
	            border-radius: 22px;
	            padding: 15px;
	        }
	
	        .sidebar_body p {
	            margin: 0;
	            line-height: normal;
	        }
	
	        .card {
	            display: flex;
	            align-items: center;
	            background: #FFF;
	            border-radius: 15px;
	            margin-bottom: 20px;
	            padding: 15px;
	            gap: 20px;
	            cursor: pointer;
	            height: 107px;
	            border: 2px solid transparent;	            
	        }
	
	        .card svg {
	            fill: #1E415F;
	        }
	
	        .card.selected {
	            background: #F1F7FC;
	            border: 2px solid #2EA5C7;
	            pointer-events: none;
	        }
	
	        .card.selected svg {
	            filter: invert(51%) sepia(97%) saturate(2477%) hue-rotate(346deg) brightness(108%) contrast(88%);
	        }
	
	        .card {
	            position: relative;            
	        }
	
	        .card::after {
	            content: '';
	            position: absolute;
	            top: 15px;
	            right: 15px;
	            color: #F0752D;
	            font-size: 10px;
	        }
	        
	        .card.card_second::after {
	            content: 'TOP-SELLER';
	        }
	
	        .card.card_third::after {
	            content: 'BEST DEAL';
	        }
	        
	        .card_info {                
			    width: 100%;			
	        }
	
	        .card_info .title {
	            color: #2EA5C7;
	            font-weight: normal;
	            font-size: 16px;
	            margin-bottom: 5px;
	        }
	
	        .card_info .month {
	            color: #3B3B3B;
	            font-size: 11px;
	            margin-bottom: 15px;
	        }
	
	        .card.selected .card_info .title {
	            color: #1E415F;
	            font-weight: bold;
	        }
	
	        .price {
	        	display: flex;
	        	flex-direction: row;
	        	justify-content: space-between;
	            white-space: nowrap;
	        }
	
	        .price span {
	            color: #1E415F;
	            font-size: 13px;
	        }
	
	        .price span:first-child{
	            text-decoration: line-through;
	        }
	        
	        .subscribe_block {    
			    opacity: 0;
			    transition: all .4s ease;
			    pointer-events: none;		
			    margin: 25px 0;	   
	        }
	        
	        .subscribe_block.visible {			    
			    opacity: 1;			
			    pointer-events: auto;    
			}
	        
	        .custom_checkbox {
	            cursor: pointer;
	        }
	        
	        .custom_checkbox > input {
	            position: absolute;
	            z-index: -1;
	            visibility: hidden;
	        }
	        
	        .custom_checkbox>p {
	            position: relative;           
	            user-select: none;
	            margin-left: 35px;  
	            font-size: 16px;
	            font-weight: 500;
	            color: #14425E;          
	        }
	                
	        .custom_checkbox > p::before {
	            content: '';
	            position: absolute;
	            top: 0;
	            left: -35px;
	            width: 24px;
	            height: 24px;
	            background: #fff;
	            border: 1px solid #14425E;
	            border-radius: 2px;
	            margin-right: 10px;
	        }
	        
	        .custom_checkbox>input:checked+p::before {
	            background: url('https://conversionratestore.github.io/projects/somnifix/img/check_arrow.svg') #fff no-repeat 2px center;
	        }
	        
	        p.undertext {
	            font-size: 12px;
	            color: #1E415F;
	            font-weight: normal;            
	            margin: 5px 0 0 35px;
	        }
	        
	        .calc_block {
	        	display: flex;
	        	justify-content: space-between;
	        }
	        
	        .calc_block .signs {
	        	display: flex;
	        	align-items: center;
	        }
	        
	        .calc_block .signs.blur .sign {
	        	pointer-events: none;
    			filter: blur(2px);
	        }
	        
	        .calc_block .sign {
	        	cursor: pointer;
	        }       
	        
	        .left span {
	        	color: #1E415F;
	        	font-weight: bold;
				font-size: 22px;
				text-align: center;
				width: 75px;
	        }
	        
	        .left p.strips {
	        	color: #6D6E75;
	        	font-size: 11px;
	        	text-align: center;
	        	margin-top: 12px;
	        }
	        
	        .right {
	        	display: flex;
	        	flex-direction: column;
	        	justify-content: space-between;    			
                align-items: flex-end;
	        }
	        
	        .right .full_price {
	        	color: #5E788D;
	        	text-decoration: line-through;
	        	font-size: 16px;
	        }
	        
	        .right .sale_price {
	        	color: #1E415F;
	        	font-weight: bold;
				font-size: 24px;
	        }
	        
	        .calc_btn button {
	        	background: #2EA5C7;
				border-radius: 100px;
				width: 100%;
				padding: 14px;
				font-weight: 500;
				font-size: 16px;
				border: none;
				color: #fff;
				margin-top: 25px;
				cursor: pointer;
				font-family: 'Roboto', sans-serif;
	        }
	    </style>
	    `
const TEMPLATE = `        
	        <p class="sidebar_header">SomniFix<br>Mouth Strips</p>
	        <div class="sidebar_body">
	            <div class="card_wrapper">            
	                <div class="card card_first selected" data-id="32115046023283">
	                    <div>
	                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="8" viewBox="0 0 40 8" fill="none">
	                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.66481 1.64672C3.76478 2.24413 2.37387 3.03749 1.72256 3.81918L1.46549 3.60499L1.72283 3.81886C1.69971 3.84668 1.66607 3.9137 1.64198 4.03689C1.61906 4.15412 1.61027 4.29352 1.61308 4.43616L1.61311 4.43774C1.61782 4.75219 1.76375 5.04877 2.01552 5.24745L2.01841 5.24973C2.61052 5.72763 3.63674 6.52235 4.30881 6.93837L4.31334 6.94123C4.62802 7.14305 5.00074 7.25759 5.39007 7.27967C6.04976 7.31064 7.07703 7.34714 7.83466 7.32289C8.05126 7.31384 8.26463 7.22092 8.52345 7.04374C8.68845 6.93078 8.84416 6.80489 9.01955 6.66309C9.1361 6.56886 9.26134 6.46761 9.40377 6.35845C10.0897 5.83277 10.9833 5.2882 12.3741 5.27482L12.3773 5.27479L12.5301 5.2748C13.921 5.28819 14.8131 5.83286 15.4983 6.35857C15.6395 6.46696 15.764 6.56761 15.8798 6.66133C16.056 6.80387 16.2124 6.93036 16.378 7.04365C16.6369 7.22065 16.8511 7.31384 17.0696 7.32289C17.8209 7.34713 18.848 7.31065 19.5142 7.27967C19.902 7.25767 20.2698 7.1437 20.593 6.93986L20.5999 6.93564C20.8444 6.78955 21.1387 6.58365 21.4446 6.35889L19.9982 1.90636C18.0067 1.16542 15.3728 0.669218 12.5331 0.669218H12.3836C9.88923 0.669218 7.55042 1.05384 5.66481 1.64672ZM5.46408 1.00831C7.41724 0.394191 9.82393 0 12.3836 0H12.5331C15.5175 0 18.2944 0.533567 20.3868 1.33788C20.481 1.37408 20.5538 1.45086 20.585 1.54683L22.1554 6.38103C22.1997 6.51735 22.1522 6.66673 22.0374 6.7525C21.6644 7.03111 21.2736 7.31237 20.9466 7.5081C20.5232 7.77423 20.0453 7.92014 19.5502 7.94792L19.547 7.9481C18.8799 7.97914 17.8275 8.017 17.0466 7.99171L17.044 7.99163C16.6428 7.97557 16.3036 7.80347 16.0003 7.59605C15.8174 7.47097 15.6206 7.31236 15.4249 7.15451C15.3123 7.06376 15.2 6.97325 15.0909 6.88951C14.4661 6.41011 13.7134 5.95585 12.5252 5.94402H12.379C11.1907 5.95585 10.4364 6.4102 9.81085 6.88962C9.70089 6.97389 9.58772 7.06507 9.47429 7.15646C9.27915 7.31368 9.08322 7.47154 8.90148 7.59595C8.59878 7.80318 8.26019 7.97553 7.86028 7.99162L7.85758 7.99173C7.07045 8.01701 6.0182 7.97913 5.35712 7.94808L5.35407 7.94794C4.85993 7.92021 4.3741 7.77462 3.95436 7.50602C3.24353 7.06566 2.19099 6.249 1.59942 5.77158C1.19178 5.44916 0.95196 4.96472 0.943981 4.44857C0.940602 4.27494 0.950538 4.08573 0.985205 3.90845C1.01876 3.73688 1.08171 3.54326 1.20815 3.39112L1.20842 3.3908C1.9842 2.45972 3.52534 1.6179 5.46408 1.00831Z" fill=""></path>
	                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.312 1.32484C20.439 1.34214 20.545 1.43052 20.5849 1.55239L22.1678 6.3928C22.2015 6.4959 22.1831 6.60895 22.1185 6.69608C22.0539 6.78322 21.9511 6.83364 21.8426 6.83134C21.2568 6.81892 20.6608 6.80025 20.2308 6.77512C19.7164 6.75145 19.2289 6.49913 18.9241 6.0789L18.9231 6.07748L18.9231 6.07747C18.8248 5.94046 18.7208 5.78156 18.6442 5.61778C18.5711 5.46162 18.5053 5.26464 18.525 5.06005C18.5944 4.05377 19.1084 2.79484 19.9882 1.47117C20.0592 1.36438 20.1849 1.30755 20.312 1.32484ZM20.1711 2.44011C19.563 3.478 19.2401 4.40212 19.1923 5.11062C19.192 5.11485 19.1917 5.11908 19.1912 5.12329C19.1882 5.15198 19.1965 5.21909 19.2504 5.33417C19.3014 5.44322 19.3779 5.56331 19.4664 5.68667C19.6472 5.93559 19.9436 6.09243 20.2631 6.10668L20.2677 6.10688L20.2677 6.10692C20.5721 6.12474 20.9665 6.13941 21.3846 6.15086L20.1711 2.44011Z" fill=""></path>
	                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4981 3.25241C10.4977 3.25321 10.4972 3.25475 10.4972 3.25748C10.4972 3.2602 10.4977 3.26174 10.4981 3.26254C10.4985 3.26346 10.499 3.26425 10.4997 3.26493C10.5004 3.26561 10.5012 3.26623 10.5024 3.26671C10.5034 3.26714 10.5053 3.2677 10.5083 3.2677H13.8361C13.8392 3.2677 13.8411 3.26714 13.8421 3.26671C13.8432 3.26623 13.8441 3.26561 13.8448 3.26493C13.8455 3.26425 13.846 3.26346 13.8464 3.26254C13.8467 3.26174 13.8472 3.2602 13.8472 3.25748C13.8472 3.25475 13.8467 3.25321 13.8464 3.25241C13.846 3.2515 13.8455 3.25071 13.8448 3.25003C13.8441 3.24934 13.8432 3.24872 13.8421 3.24824C13.8411 3.24781 13.8392 3.24725 13.8361 3.24725H10.5083C10.5053 3.24725 10.5034 3.24781 10.5024 3.24824C10.5012 3.24872 10.5004 3.24934 10.4997 3.25003C10.499 3.25071 10.4985 3.2515 10.4981 3.25241ZM10.0957 3.25748C10.0957 3.02789 10.2799 2.84572 10.5083 2.84572H13.8361C14.0646 2.84572 14.2488 3.02789 14.2488 3.25748C14.2488 3.48706 14.0646 3.66923 13.8361 3.66923H10.5083C10.2799 3.66923 10.0957 3.48706 10.0957 3.25748Z" fill=""></path>
	                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3726 6.22107C24.2154 6.09002 24.1942 5.85638 24.3253 5.69922L27.1729 2.28456C27.3039 2.1274 27.5376 2.10624 27.6947 2.2373V2.2373C27.8519 2.36835 27.873 2.60199 27.742 2.75915L24.8944 6.17381C24.7634 6.33097 24.5297 6.35213 24.3726 6.22107V6.22107Z" fill=""></path>
	                            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.6939 6.18798C27.5399 6.3227 27.3058 6.30705 27.1711 6.15302L24.2439 2.80635C24.1092 2.65233 24.1249 2.41825 24.2789 2.28354V2.28354C24.4329 2.14882 24.667 2.16447 24.8017 2.31849L27.7289 5.66516C27.8636 5.81919 27.8479 6.05326 27.6939 6.18798V6.18798Z" fill=""></path>
	                            <path d="M34.3203 6.304V7H30.2963V6.456L32.5763 4.256C32.8536 3.98933 33.0403 3.76 33.1363 3.568C33.2323 3.37066 33.2803 3.17333 33.2803 2.976C33.2803 2.68266 33.1763 2.456 32.9683 2.296C32.7656 2.13066 32.4723 2.048 32.0883 2.048C31.4696 2.048 30.9923 2.25067 30.6563 2.656L30.1123 2.184C30.331 1.91733 30.6163 1.70933 30.9683 1.56C31.3256 1.41066 31.723 1.336 32.1603 1.336C32.747 1.336 33.2136 1.47733 33.5603 1.76C33.907 2.03733 34.0803 2.416 34.0803 2.896C34.0803 3.19466 34.0163 3.47733 33.8883 3.744C33.7603 4.01066 33.5176 4.31466 33.1603 4.656L31.4483 6.304H34.3203Z" fill=""></path>
	                            <path d="M38.2821 4.064C38.6021 4.18666 38.8474 4.36266 39.0181 4.592C39.1887 4.82133 39.2741 5.096 39.2741 5.416C39.2741 5.752 39.1834 6.04533 39.0021 6.296C38.8207 6.54133 38.5621 6.73067 38.2261 6.864C37.8901 6.99733 37.4954 7.064 37.0421 7.064C36.5941 7.064 36.2021 6.99733 35.8661 6.864C35.5354 6.73067 35.2794 6.54133 35.0981 6.296C34.9167 6.04533 34.8261 5.752 34.8261 5.416C34.8261 5.096 34.9087 4.82133 35.0741 4.592C35.2447 4.36266 35.4901 4.18666 35.8101 4.064C35.5541 3.94133 35.3594 3.77867 35.2261 3.576C35.0927 3.37333 35.0261 3.13333 35.0261 2.856C35.0261 2.54666 35.1087 2.27733 35.2741 2.048C35.4447 1.81866 35.6821 1.64266 35.9861 1.52C36.2901 1.39733 36.6421 1.336 37.0421 1.336C37.4474 1.336 37.8021 1.39733 38.1061 1.52C38.4154 1.64266 38.6527 1.81866 38.8181 2.048C38.9887 2.27733 39.0741 2.54666 39.0741 2.856C39.0741 3.128 39.0047 3.368 38.8661 3.576C38.7327 3.77867 38.5381 3.94133 38.2821 4.064ZM37.0421 1.984C36.6634 1.984 36.3647 2.06667 36.1461 2.232C35.9274 2.392 35.8181 2.61066 35.8181 2.888C35.8181 3.16533 35.9247 3.384 36.1381 3.544C36.3567 3.704 36.6581 3.784 37.0421 3.784C37.4314 3.784 37.7354 3.704 37.9541 3.544C38.1781 3.384 38.2901 3.16533 38.2901 2.888C38.2901 2.61066 38.1754 2.392 37.9461 2.232C37.7221 2.06667 37.4207 1.984 37.0421 1.984ZM37.0421 6.416C37.4847 6.416 37.8341 6.32533 38.0901 6.144C38.3461 5.95733 38.4741 5.70666 38.4741 5.392C38.4741 5.08266 38.3461 4.84 38.0901 4.664C37.8341 4.48266 37.4847 4.392 37.0421 4.392C36.5994 4.392 36.2527 4.48266 36.0021 4.664C35.7514 4.84 35.6261 5.08266 35.6261 5.392C35.6261 5.70666 35.7514 5.95733 36.0021 6.144C36.2527 6.32533 36.5994 6.416 37.0421 6.416Z" fill=""></path>
	                        </svg>
	                    </div>
	                    <div class="card_info">
	                        <p class="title">One - Time</p>
	                        <p class="month">4 WEEK PACK - 28 DAYS</p>
	                        <div class="price">
	                            <span></span>
	                            <span>$23.99</span>
	                            <span>PER 4 WEEKS</span>
	                        </div>
	                    </div>
	                </div>
	                <div class="card card_second" data-id="32115046056051">
	                    <div>
	                       <svg width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.66481 1.64672C3.76478 2.24413 2.37387 3.03749 1.72256 3.81918L1.46549 3.60499L1.72283 3.81886C1.69971 3.84668 1.66607 3.9137 1.64198 4.03689C1.61906 4.15412 1.61027 4.29352 1.61308 4.43616L1.61311 4.43774C1.61782 4.75219 1.76375 5.04877 2.01552 5.24745L2.01841 5.24973C2.61052 5.72763 3.63674 6.52235 4.30881 6.93837L4.31334 6.94123C4.62802 7.14305 5.00074 7.25759 5.39007 7.27967C6.04976 7.31064 7.07703 7.34714 7.83466 7.32289C8.05126 7.31384 8.26463 7.22092 8.52345 7.04374C8.68845 6.93078 8.84416 6.80489 9.01955 6.66309C9.1361 6.56886 9.26134 6.46761 9.40377 6.35845C10.0897 5.83277 10.9833 5.2882 12.3741 5.27482L12.3773 5.27479L12.5301 5.2748C13.921 5.28819 14.8131 5.83286 15.4983 6.35857C15.6395 6.46696 15.764 6.56761 15.8798 6.66133C16.056 6.80387 16.2124 6.93036 16.378 7.04365C16.6369 7.22065 16.8511 7.31384 17.0696 7.32289C17.8209 7.34713 18.848 7.31065 19.5142 7.27967C19.902 7.25767 20.2698 7.1437 20.593 6.93986L20.5999 6.93564C20.8444 6.78955 21.1387 6.58365 21.4446 6.35889L19.9982 1.90636C18.0067 1.16542 15.3728 0.669218 12.5331 0.669218H12.3836C9.88923 0.669218 7.55042 1.05384 5.66481 1.64672ZM5.46408 1.00831C7.41724 0.394191 9.82393 0 12.3836 0H12.5331C15.5175 0 18.2944 0.533567 20.3868 1.33788C20.481 1.37408 20.5538 1.45086 20.585 1.54683L22.1554 6.38103C22.1997 6.51735 22.1522 6.66673 22.0374 6.7525C21.6644 7.03111 21.2736 7.31237 20.9466 7.5081C20.5232 7.77423 20.0453 7.92014 19.5502 7.94792L19.547 7.9481C18.8799 7.97914 17.8275 8.017 17.0466 7.99171L17.044 7.99163C16.6428 7.97557 16.3036 7.80347 16.0003 7.59605C15.8174 7.47097 15.6206 7.31236 15.4249 7.15451C15.3123 7.06376 15.2 6.97325 15.0909 6.88951C14.4661 6.41011 13.7134 5.95585 12.5252 5.94402H12.379C11.1907 5.95585 10.4364 6.4102 9.81085 6.88962C9.70089 6.97389 9.58772 7.06507 9.47429 7.15646C9.27915 7.31368 9.08322 7.47154 8.90148 7.59595C8.59878 7.80318 8.26019 7.97553 7.86028 7.99162L7.85758 7.99173C7.07045 8.01701 6.0182 7.97913 5.35712 7.94808L5.35407 7.94794C4.85993 7.92021 4.3741 7.77462 3.95436 7.50602C3.24353 7.06566 2.19099 6.249 1.59942 5.77158C1.19178 5.44916 0.95196 4.96472 0.943981 4.44857C0.940602 4.27494 0.950538 4.08573 0.985205 3.90845C1.01876 3.73688 1.08171 3.54326 1.20815 3.39112L1.20842 3.3908C1.9842 2.45972 3.52534 1.6179 5.46408 1.00831Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.312 1.32484C20.439 1.34214 20.545 1.43052 20.5849 1.55239L22.1678 6.3928C22.2015 6.4959 22.1831 6.60895 22.1185 6.69608C22.0539 6.78322 21.9511 6.83364 21.8426 6.83134C21.2568 6.81892 20.6608 6.80025 20.2308 6.77512C19.7164 6.75145 19.2289 6.49913 18.9241 6.0789L18.9231 6.07748V6.07747C18.8248 5.94046 18.7208 5.78156 18.6442 5.61778C18.5711 5.46162 18.5053 5.26464 18.525 5.06005C18.5944 4.05377 19.1084 2.79484 19.9882 1.47117C20.0592 1.36438 20.1849 1.30755 20.312 1.32484ZM20.1711 2.44011C19.563 3.478 19.2401 4.40212 19.1923 5.11062C19.192 5.11485 19.1917 5.11908 19.1912 5.12329C19.1882 5.15198 19.1965 5.21909 19.2504 5.33417C19.3014 5.44322 19.3779 5.56331 19.4664 5.68667C19.6472 5.93559 19.9436 6.09243 20.2631 6.10668L20.2677 6.10688V6.10692C20.5721 6.12474 20.9665 6.13941 21.3846 6.15086L20.1711 2.44011Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4981 3.25241C10.4977 3.25321 10.4972 3.25475 10.4972 3.25748C10.4972 3.2602 10.4977 3.26174 10.4981 3.26254C10.4985 3.26346 10.499 3.26425 10.4997 3.26493C10.5004 3.26561 10.5012 3.26623 10.5024 3.26671C10.5034 3.26714 10.5053 3.2677 10.5083 3.2677H13.8361C13.8392 3.2677 13.8411 3.26714 13.8421 3.26671C13.8432 3.26623 13.8441 3.26561 13.8448 3.26493C13.8455 3.26425 13.846 3.26346 13.8464 3.26254C13.8467 3.26174 13.8472 3.2602 13.8472 3.25748C13.8472 3.25475 13.8467 3.25321 13.8464 3.25241C13.846 3.2515 13.8455 3.25071 13.8448 3.25003C13.8441 3.24934 13.8432 3.24872 13.8421 3.24824C13.8411 3.24781 13.8392 3.24725 13.8361 3.24725H10.5083C10.5053 3.24725 10.5034 3.24781 10.5024 3.24824C10.5012 3.24872 10.5004 3.24934 10.4997 3.25003C10.499 3.25071 10.4985 3.2515 10.4981 3.25241ZM10.0957 3.25748C10.0957 3.02789 10.2799 2.84572 10.5083 2.84572H13.8361C14.0646 2.84572 14.2488 3.02789 14.2488 3.25748C14.2488 3.48706 14.0646 3.66923 13.8361 3.66923H10.5083C10.2799 3.66923 10.0957 3.48706 10.0957 3.25748Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M24.3725 6.22108C24.2153 6.09002 24.1941 5.85639 24.3252 5.69923L27.1728 2.28456C27.3038 2.1274 27.5375 2.10624 27.6946 2.2373C27.8518 2.36835 27.8729 2.60199 27.7419 2.75915L24.8943 6.17382C24.7633 6.33098 24.5296 6.35214 24.3725 6.22108Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.6939 6.18797C27.5399 6.32269 27.3058 6.30704 27.1711 6.15301L24.2439 2.80634C24.1092 2.65232 24.1249 2.41824 24.2789 2.28353C24.4329 2.14881 24.667 2.16446 24.8017 2.31848L27.7289 5.66515C27.8636 5.81918 27.8479 6.05325 27.6939 6.18797Z"></path></g><path d="M33.5859 4.1751C34.0979 3.9351 34.3779 3.5191 34.3779 2.9671C34.3779 2.0311 33.5619 1.4471 32.3459 1.4471C31.1379 1.4471 30.3299 2.0311 30.3299 2.9671C30.3299 3.5191 30.6019 3.9351 31.1139 4.1751C30.4819 4.4151 30.1299 4.8871 30.1299 5.5271C30.1299 6.5431 30.9859 7.1751 32.3459 7.1751C33.7139 7.1751 34.5779 6.5431 34.5779 5.5271C34.5779 4.8871 34.2259 4.4231 33.5859 4.1751ZM32.3459 2.0951C33.0979 2.0951 33.5939 2.4391 33.5939 2.9991C33.5939 3.5511 33.1219 3.8951 32.3459 3.8951C31.5779 3.8951 31.1219 3.5511 31.1219 2.9991C31.1219 2.4391 31.5939 2.0951 32.3459 2.0951ZM32.3459 6.5271C31.4579 6.5271 30.9299 6.1351 30.9299 5.5031C30.9299 4.8871 31.4579 4.5031 32.3459 4.5031C33.2339 4.5031 33.7779 4.8871 33.7779 5.5031C33.7779 6.1351 33.2339 6.5271 32.3459 6.5271Z"></path><path d="M40.1823 5.0471H39.1183V3.8311H38.3663V5.0471H36.2143L38.9583 1.5111H38.0943L35.2303 5.1751V5.7351H38.3423V7.1111H39.1183V5.7351H40.1823V5.0471Z"></path><defs><clipPath id="clip0"><rect width="40" height="8"></rect></clipPath></defs></svg>
	                    </div>
	                    <div class="card_info">
	                        <p class="title">Save 7%</p>
	                        <p class="month">12 WEEK PACK - 84 DAYS</p>
	                        <div class="price">
	                            <span>$59.99</span>
	                            <span>$55.97</span>
	                            <span>PER 12 WEEKS</span>
	                        </div>
	                    </div>
	                </div>
	                <div class="card card_third" data-id="32115046940787">
	                <div>
	                   <svg xmlns="http://www.w3.org/2000/svg" width="41" height="9" viewBox="0 0 41 9" fill="none">
							<g clip-path="url(#clip0_11_714)">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M4.59547 2.14672C2.81177 2.74413 1.50602 3.53749 0.894581 4.31918L0.653249 4.10499L0.894834 4.31886C0.87313 4.34668 0.841549 4.4137 0.818934 4.53689C0.797417 4.65412 0.789165 4.79352 0.791803 4.93616L0.791831 4.93774C0.796253 5.25219 0.933249 5.54877 1.16961 5.74745L1.17232 5.74973C1.72818 6.22763 2.69157 7.02235 3.32249 7.43837L3.32675 7.44123C3.62216 7.64305 3.97206 7.75759 4.33755 7.77967C4.95685 7.81064 5.92123 7.84714 6.63248 7.82289C6.83581 7.81384 7.03612 7.72092 7.27909 7.54374C7.43399 7.43078 7.58017 7.30489 7.74482 7.16309C7.85424 7.06886 7.97181 6.96761 8.10552 6.85845C8.74945 6.33277 9.58834 5.7882 10.894 5.77482L10.897 5.77479L11.0405 5.7748C12.3462 5.78819 13.1837 6.33286 13.827 6.85857C13.9595 6.96696 14.0764 7.06761 14.1851 7.16133C14.3505 7.30387 14.4973 7.43036 14.6528 7.54365C14.8958 7.72065 15.0969 7.81384 15.3021 7.82289C16.0074 7.84713 16.9716 7.81065 17.597 7.77967C17.961 7.75767 18.3063 7.6437 18.6097 7.43986L18.6162 7.43564C18.8457 7.28955 19.122 7.08365 19.4092 6.85889L18.0513 2.40636C16.1818 1.66542 13.7091 1.16922 11.0433 1.16922H10.9029C8.56126 1.16922 6.36564 1.55384 4.59547 2.14672ZM4.40703 1.50831C6.24061 0.894191 8.49995 0.5 10.9029 0.5H11.0433C13.845 0.5 16.4519 1.03357 18.4162 1.83788C18.5046 1.87408 18.5729 1.95086 18.6022 2.04683L20.0765 6.88103C20.1181 7.01735 20.0735 7.16673 19.9657 7.2525C19.6155 7.53111 19.2487 7.81237 18.9417 8.0081C18.5442 8.27423 18.0956 8.42014 17.6308 8.44792L17.6278 8.4481C17.0015 8.47914 16.0136 8.517 15.2805 8.49171L15.278 8.49163C14.9014 8.47557 14.5829 8.30347 14.2982 8.09605C14.1265 7.97097 13.9418 7.81236 13.758 7.65451C13.6523 7.56376 13.5469 7.47325 13.4445 7.38951C12.8579 6.91011 12.1513 6.45585 11.0359 6.44402H10.8986C9.78304 6.45585 9.07492 6.9102 8.48767 7.38962C8.38445 7.47389 8.27821 7.56507 8.17172 7.65646C7.98853 7.81368 7.80459 7.97154 7.63398 8.09595C7.34981 8.30318 7.03195 8.47553 6.65653 8.49162L6.65399 8.49173C5.91505 8.51701 4.92723 8.47913 4.30662 8.44808L4.30376 8.44794C3.83987 8.42021 3.38379 8.27462 2.98974 8.00602C2.32243 7.56566 1.33434 6.749 0.77898 6.27158C0.396297 5.94916 0.17116 5.46472 0.16367 4.94857C0.160497 4.77494 0.169825 4.58573 0.20237 4.40845C0.23387 4.23688 0.292966 4.04326 0.411665 3.89112L0.411918 3.8908C1.14021 2.95972 2.58699 2.1179 4.40703 1.50831Z" fill="#1E415F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.346 1.82484C18.4652 1.84214 18.5647 1.93052 18.6022 2.05239L20.0882 6.8928C20.1198 6.9959 20.1025 7.10895 20.0419 7.19608C19.9812 7.28322 19.8847 7.33364 19.7829 7.33134C19.2329 7.31892 18.6734 7.30025 18.2698 7.27512C17.7869 7.25145 17.3292 6.99913 17.0431 6.5789L17.0421 6.57748V6.57747C16.9498 6.44046 16.8522 6.28156 16.7803 6.11778C16.7117 5.96162 16.6499 5.76464 16.6684 5.56005C16.7336 4.55377 17.2161 3.29484 18.042 1.97117C18.1087 1.86438 18.2267 1.80755 18.346 1.82484ZM18.2137 2.94011C17.6428 3.978 17.3397 4.90212 17.2948 5.61062C17.2946 5.61485 17.2943 5.61908 17.2938 5.62329C17.291 5.65198 17.2988 5.71909 17.3494 5.83417C17.3973 5.94322 17.4691 6.06331 17.5522 6.18667C17.7219 6.43559 18.0001 6.59243 18.3001 6.60668L18.3044 6.60688V6.60692C18.5902 6.62474 18.9604 6.63941 19.3529 6.65086L18.2137 2.94011Z" fill="#1E415F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13264 3.75239C9.13227 3.75319 9.1318 3.75473 9.1318 3.75746C9.1318 3.76018 9.13227 3.76172 9.13264 3.76252C9.13302 3.76344 9.13349 3.76423 9.13415 3.76491C9.1348 3.76559 9.13555 3.76621 9.13668 3.76669C9.13762 3.76712 9.1394 3.76768 9.14222 3.76768H12.2663C12.2692 3.76768 12.271 3.76712 12.2719 3.76669C12.2729 3.76621 12.2738 3.76559 12.2744 3.76491C12.2751 3.76423 12.2756 3.76344 12.2759 3.76252C12.2762 3.76172 12.2767 3.76018 12.2767 3.75746C12.2767 3.75473 12.2762 3.75319 12.2759 3.75239C12.2756 3.75148 12.2751 3.75069 12.2744 3.75001C12.2738 3.74932 12.2729 3.7487 12.2719 3.74822C12.271 3.74779 12.2692 3.74723 12.2663 3.74723H9.14222C9.1394 3.74723 9.13762 3.74779 9.13668 3.74822C9.13555 3.7487 9.1348 3.74932 9.13415 3.75001C9.13349 3.75069 9.13302 3.75148 9.13264 3.75239ZM8.75488 3.75746C8.75488 3.52787 8.9278 3.3457 9.14222 3.3457H12.2663C12.4808 3.3457 12.6537 3.52787 12.6537 3.75746C12.6537 3.98704 12.4808 4.16921 12.2663 4.16921H9.14222C8.9278 4.16921 8.75488 3.98704 8.75488 3.75746Z" fill="#1E415F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M22.1583 6.72106C22.0107 6.59 21.9908 6.35637 22.1139 6.19921L24.7871 2.78454C24.9101 2.62738 25.1295 2.60622 25.277 2.73728C25.4246 2.86833 25.4444 3.10197 25.3214 3.25913L22.6481 6.6738C22.5252 6.83096 22.3058 6.85212 22.1583 6.72106Z" fill="#1E415F"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2759 6.68797C25.1313 6.82269 24.9115 6.80704 24.7851 6.65301L22.0371 3.30634C21.9107 3.15232 21.9254 2.91824 22.07 2.78353C22.2145 2.64881 22.4343 2.66446 22.5608 2.81848L25.3087 6.16515C25.4352 6.31918 25.4205 6.55325 25.2759 6.68797Z" fill="#1E415F"/>
							<path d="M28.5235 4.30468H29.0665C29.4076 4.29947 29.6758 4.20964 29.8711 4.03516C30.0665 3.86068 30.1641 3.62499 30.1641 3.32811C30.1641 2.66145 29.8321 2.32811 29.168 2.32811C28.8555 2.32811 28.6055 2.41797 28.418 2.59766C28.2331 2.77474 28.1407 3.01041 28.1407 3.30468H27.418C27.418 2.85416 27.5821 2.48047 27.9102 2.18359C28.2409 1.88411 28.6602 1.73438 29.168 1.73438C29.7045 1.73438 30.125 1.87629 30.4297 2.16015C30.7344 2.444 30.8868 2.83854 30.8868 3.34374C30.8868 3.59115 30.806 3.83072 30.6446 4.06249C30.4857 4.29427 30.2683 4.46744 29.9922 4.58202C30.3047 4.68098 30.5456 4.84505 30.7149 5.07422C30.8868 5.30339 30.9727 5.58332 30.9727 5.91405C30.9727 6.42447 30.806 6.82943 30.4727 7.12891C30.1394 7.42839 29.7058 7.57812 29.1719 7.57812C28.6381 7.57812 28.2032 7.43358 27.8672 7.14452C27.5339 6.85546 27.3672 6.47396 27.3672 6H28.0938C28.0938 6.29948 28.1915 6.53906 28.3868 6.71875C28.5821 6.89844 28.8438 6.98827 29.1719 6.98827C29.5209 6.98827 29.7878 6.89714 29.9727 6.71484C30.1576 6.53255 30.25 6.27082 30.25 5.92968C30.25 5.59895 30.1485 5.34505 29.9454 5.16797C29.7422 4.99089 29.4493 4.89973 29.0665 4.89452H28.5235V4.30468Z" fill="#1E415F"/>
							<path d="M34.8007 1.80859V2.42188H34.6679C34.1054 2.43229 33.6575 2.59896 33.3242 2.92188C32.9908 3.24479 32.7981 3.69922 32.746 4.28516C33.0455 3.94141 33.4544 3.76953 33.9726 3.76953C34.4674 3.76953 34.8619 3.94401 35.1562 4.29297C35.4531 4.64193 35.6015 5.09245 35.6015 5.64453C35.6015 6.23047 35.4414 6.69922 35.121 7.05078C34.8033 7.40234 34.3762 7.57812 33.8398 7.57812C33.2955 7.57812 32.8541 7.36979 32.5156 6.95312C32.177 6.53385 32.0078 5.99479 32.0078 5.33594V5.05859C32.0078 4.01172 32.2304 3.21224 32.6757 2.66016C33.1236 2.10547 33.789 1.82161 34.6718 1.80859H34.8007ZM33.8515 4.37109C33.6041 4.37109 33.3762 4.44531 33.1679 4.59375C32.9596 4.74219 32.815 4.92839 32.7343 5.15234V5.41797C32.7343 5.88672 32.8398 6.26432 33.0507 6.55078C33.2617 6.83724 33.5247 6.98047 33.8398 6.98047C34.1653 6.98047 34.4205 6.86068 34.6054 6.62109C34.7929 6.38151 34.8867 6.06771 34.8867 5.67969C34.8867 5.28906 34.7916 4.97396 34.6015 4.73438C34.414 4.49219 34.164 4.37109 33.8515 4.37109Z" fill="#1E415F"/>
							<path d="M41.1825 5.5141H40.1185V4.2981H39.3665V5.5141H37.2145L39.9585 1.9781H39.0945L36.2305 5.6421V6.2021H39.3425V7.5781H40.1185V6.2021H41.1825V5.5141Z" fill="#1E415F"/>
							</g>
							<defs>
							<clipPath id="clip0_11_714">
							<rect width="41" height="8" fill="white" transform="translate(0 0.5)"/>
							</clipPath>
							</defs>
						</svg>
	                </div>
	                <div class="card_info">
	                    <p class="title">Save 15%</p>
	                    <p class="month">52 WEEK PACK - 364 DAYS</p>
	                    <div class="price">
	                        <span>$259.99</span>
	                        <span>$219.97</span>
	                        <span>PER 52 WEEKS</span>
	                    </div>
	                </div>
	            </div>
		            <div class="subscribe_block">
		                <label class="custom_checkbox">
		                    <input type="checkbox">
		                    <p>Subscribe and <span style="color: #F0752D;">save 10%</span></p>
		                </label>
		                <p class="undertext"><span>Auto delivery every 12 weeks for <span class="check_price">$49.97</span><br>Cancel anytime</span></p>
		            </div>
	            </div>
	            <div class="body_footer">
	            	<div class="calc_block">
	                <div class="left">
	                	<div class="signs">
	                		<img class="sign minus" src="https://conversionratestore.github.io/projects/somnifix/img/minus_btn.svg" alt="minus">
	                		<span>1</span>
	                		<img class="sign plus" src="https://conversionratestore.github.io/projects/somnifix/img/plus_btn.svg" alt="plus">
						</div>	                	
	                	<p class="strips">28 Strips - 4 weeks</p>
					</div>
					<div class="right">
						<p class="full_price"></p>
						<p class="sale_price">$23.99</p>
					</div>
	            </div>
	            <div class="calc_btn">
	            	<button>CHECKOUT</button>
				</div>
				</div>	            
	        </div>        
`

document.head.insertAdjacentHTML('beforeend', STYLE)

let isCloseX = setInterval(() => {
	if (document.querySelectorAll('.on-button-get-sominifix-close')[1]) {
		clearInterval(isCloseX)

		let closeX = document.querySelectorAll('.on-button-get-sominifix-close')[1]

		closeX.insertAdjacentHTML('afterend', TEMPLATE)
		closeX.addEventListener('click', () => {
			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
				'eventAction': 'Click at Close button',
				'eventLabel': '',
			})
		})
	}
}, 200)
let isTemplate = setInterval(() => {
	if (
		document.querySelector('.calc_btn button')
	) {
		clearInterval(isTemplate)

		let checkInput = document.querySelector('.custom_checkbox input')
		let cardQuantity = document.querySelector('.signs span')
		let fullPrice = document.querySelector('.full_price')
		let salePrice = document.querySelector('.sale_price')
		let signs = document.querySelector('.signs')
		let checkbox = document.querySelector('.subscribe_block')
		let checkboxText = document.querySelector('.undertext span')
		let stripsText = document.querySelector('.strips')
		let cards = document.querySelectorAll('.sidebar_body .card')

		let counter = 1

		function onCardClick(e, index) {
			let card = e.currentTarget

			document.querySelector('.card.selected').classList.remove('selected')
			card.classList.add('selected')

			counter = 1
			cardQuantity.innerText = 1


			signs.classList.add('blur')

			switch (index) {
				case 1:
					changeCheckboxText('12', '$49.97', '84', '12 Weeks', card)
					break
				case 2:
					changeCheckboxText('52', '$199.97', '364', '52 Weeks', card)
					break
				default:
					stripsText.innerText = '28 Strips = 4 Weeks'

					checkInput.checked = false

					checkbox.classList.remove('visible')
					signs.classList.remove('blur')

					fullPrice.innerText = card.querySelectorAll('.price span')[0].innerText
					salePrice.innerText = card.querySelectorAll('.price span')[1].innerText

					window.dataLayer = window.dataLayer || []
					dataLayer.push({
						'event': 'event-to-ga',
						'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
						'eventAction': 'Click at pack',
						'eventLabel': `4 week`,
					})
					break
			}
		}

		function changeCheckboxText(month, price, strips, time, card) {
			checkInput.checked = true

			checkbox.classList.add('visible')
			checkboxText.innerHTML = `Auto delivery every ${ month } weeks for <span class="check_price">${ price }</span><br>Cancel anytime`
			stripsText.innerText = `${ strips } Strips = ${ time }`

			fullPrice.innerText = card.querySelectorAll('.price span')[0].innerText
			salePrice.innerText = price

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
				'eventAction': 'Click at pack',
				'eventLabel': `${ month } week`,
			})
		}

		function calculatePatches() {
			document.querySelector('.sign.plus').addEventListener('click', () => {
				if (counter < 20) {
					counter++
					calcPrice('PLUS')
				}
			})
			document.querySelector('.sign.minus').addEventListener('click', () => {
				if (counter > 1) {
					counter--
					calcPrice('MINUS')
				}
			})
		}

		function calcPrice(operator) {
			cardQuantity.innerText = counter

			let price = (document.querySelectorAll('.card.selected .price span')[0].innerText).replace('$', '') * counter
			let sale = (document.querySelectorAll('.card.selected .price span')[1].innerText).replace('$', '') * counter

			if (convertToMoney(price) !== '0.00') {
				fullPrice.innerText = '$' + convertToMoney(price)
			}

			salePrice.innerText = '$' + convertToMoney(sale)

			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
				'eventAction': 'Click on ' + operator
			})
		}

		function convertToMoney(amount) {
			return (Math.round(amount * 100) / 100).toFixed(2)
		}

		function checkSubscription() {
			document.querySelector('.custom_checkbox input').addEventListener('click', () => {
				if (checkInput.checked) {
					counter = 1
					cardQuantity.innerText = 1

					fullPrice.innerText = document.querySelector('.card.selected .price span').innerText
					salePrice.innerText = document.querySelector('.check_price').innerText

					signs.classList.add('blur')
				} else {
					signs.classList.remove('blur')
					salePrice.innerText = document.querySelectorAll('.card.selected .price span')[1].innerText
				}

				window.dataLayer = window.dataLayer || []
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
					'eventAction': 'Click at checkbox Subscribe and save',
					'eventLabel': '',
				})
			})
		}

		function addToCart() {
			let btn = document.querySelector('.calc_btn button')

			btn.addEventListener('click', () => {
				let selectedCardId = document.querySelector('.selected').dataset.id
				let quantity = cardQuantity.innerText

				if (checkInput.checked) {
					if (selectedCardId === '32115046056051') {
						addItemToCart('31272810676339', 1, '3', 'Month', '95310')

					} else if (selectedCardId === '32115046940787') {
						addItemToCart('32190023958643', 1, '12', 'Month', '95310')
					}
				} else {
					addItemToCart(selectedCardId, quantity)
				}

				window.dataLayer = window.dataLayer || []
				dataLayer.push({
					'event': 'event-to-ga',
					'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
					'eventAction': 'Click on Checkout button',
				})
			})
		}

		cards.forEach((card, index) => {
			card.addEventListener('click', e => {
				onCardClick(e, index)
			})
		})

		calculatePatches()
		checkSubscription()
		addToCart()
	}
}, 300)

let isOpen = setInterval(() => {
	if (document.querySelector('.on-button-get-sominifix-open')) {
		clearInterval(isOpen)
		document.querySelector('.on-button-get-sominifix-open').addEventListener('click', () => {
			let isClarityCustom = setInterval(() => {
				if (typeof clarity === 'function') {
					clearInterval(isClarityCustom)
					clarity('set', 'slide_subscription_offer', 'open_sidebar_on_click')
				}
			}, 200)
		}, { once: true })
	}
}, 200)

let isClarityCustomMain = setInterval(() => {
	if (typeof clarity === 'function') {
		clearInterval(isClarityCustomMain)
		clarity('set', 'slide_subscription_offer', 'variant_1')
	}
}, 200)

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: Slide PDP subscription offer Desktop',
	'eventAction': 'loaded',
})
