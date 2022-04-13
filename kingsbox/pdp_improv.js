/* CSS */

const style = `
	<style>				
									/*  ============
										General style
										============= */
										
										.product-actions .mr-2 {
											display: none;
										}
										
										img.lazyloading {
											opacity: 1 !important;
										}
										
										.similar_products.similar_exist {
											display: none;
										}
										
										[data-style="not"] .similar_products.similar_exist {
											display: flex;
										}
										
										.product-actions app-number-picker div:first-child {
											align-items: center;
											border: 1px solid #A1A1A1;
											padding: 0 10px;
										}
										
										.product-actions app-number-picker input {
											border: none !important;
											min-width: 40px;
											width: 40px;
											text-align: center;
											
											padding: 0 10px;
											background-color: #fff !important;
											font-size: 14px;
										}
										
										.product-actions button {
											height: auto !important;
										}
										
										.product-actions span {
											cursor: pointer;
											font-size: 2rem;
											color: #707070 !important;
		                                    font-weight: 400 !important;
										}
										
										.picker-buttons-wrapper {
											display: none !important;
										}
										
										.product-variations .product-variation .value .square {
											font-weight: 600;
										}
										
										.product-variations .product-variation .value .circle.out {
											position: relative;
										} 
										
										.square.out {
											opacity: 0.2;
										}
										
										.circle.out:after{
										     content:     "";
										     display:     block;
										     position:    absolute;
										     width:       100%;
										     height:      100%;
										     top:         0;
										     left:        0;							     
										     /* Falling diagonal line */
										     background: linear-gradient(to right top, transparent, transparent 48%, #fff 49%, #fff 51%, transparent 52%, transparent) !important;  
										}
										
										.product-accessories .product-accessory .quantity button {
											font-size: 2rem;
										}
										
										.product-accessories .product-accessory-category .card .card-body {
											border: none;
											padding-right: 0;
											padding-left: 0;
										}
										
										.product-accessory-image-wrapper + div .mb-3 {
											margin-bottom: 0!important;
										}
										
										.product-accessories .product-accessory-category .card .card-body button {
											border: none !important;
											background-color: transparent !important;
										    color: #707070 !important;
										    font-weight: 400 !important;
										}
										
										[data-style="not"] app-product-variations + .pt-3 {
										display: none;
										}
										.action_btns {
											background-color: transparent;
										}
										
										.product-container[data-style="not"]  .product-title,
										  [data-style="not"] .product-price .price,
										  [data-style="not"] .product-price .vat-indicator
										 {
											color: #A1A1A1;
										}
										
									.product-container .product-layout-1 .product-layout-1-container {
										min-height: fit-content !important;
									}
									.not_item_mobile {
										display: none !important;
									}	
									
									/*.custom_hide {*/
									/*	display: block;*/
									/*}*/
									
									.similar_products.left {
										display: none;
									}
									
									[data-style="not"] .similar_products.left.similar_exist .my_product:nth-child(4){
										display: none;
									}
									
									.inner_text {
										display: flex;
										flex-direction: column;
										justify-content: space-between;
										height: 100%;
									}
									
									[data-style="not"] .similar_products.left {
										display: flex;
										flex-wrap: wrap;
										flex-direction: row;
										justify-content: space-between;
									}
									
									[data-style="not"] .similar_products.left p.products_title{
										flex: 100%;
									}
									
									[data-style="not"] .similar_products.left .my_product{
										flex: 0 0 32%;								
									}
									
									/*[data-style="not"] .product-recommendations .col-12:nth-child(4n),*/
									/*[data-style="not"] .my_product:nth-child(4n) {*/
									/*	display: none;*/
									/*}*/
									
									.product-recommendations {
										margin: 0;
									}
									
									.product-recommendations hr {
										display: none;
									}
									
									.product-recommendations h1 {
										margin: 15px 0;
										font-weight: 600 !important;
										letter-spacing: -0.02em;
									}
							
									.product-stock-wrapper,
									.btn-wish-list,
									.product-container .product-discount-badge {
										display: none;			
									}	
									
									[data-style="not"] .product-stock-wrapper {
										display: block;		
									}	
									
									[data-style="not"] .similar_products.right {
										display: none;
									}
									
									.product-variation.my_flex {
										display: flex;
										gap: 10px;
									}		
									
									.pt-3.pb-3 .flex-row,
									.pt-3.pb-3 button {
										width: 100%;
									}
									
									.pt-3.pb-3 button,
									input[_ngcontent-serverApp-c104],
									.picker-buttons-wrapper[_ngcontent-serverApp-c104] {
										height: 48px;
									}
									
									.guarantees_wrapper {
										display: flex;
										justify-content: space-around;
										border: 1px solid #EEEEEE;
										border-radius: 5px;
										padding: 16px 14px;
										margin: 20px 0 10px;							
										background-color: #fff;
									}
									
									.guarantee {
										width: 33%;
										text-align: center;
									}
									
									.guarantees_wrapper img {
										width: 76px;
										height: 76px;
									}
									
									.guarantees_wrapper .guarantee:last-child img {
										width: 112px;
									}
									
									.guarantees_wrapper p {
										margin: 10px 0 0;
										font-weight: 400;
										font-size: 12px;
										line-height: 18px;			
										text-align: center;
										letter-spacing: -0.02em;			
										color: #212529;
									}
									
									.sell_wrapper {
										display: none;
									}
									
									.tns-outer {
										position: relative;
									}								
									
									.tns-outer button img {
										min-height: auto !important;
										height: 42px;
										width: 42px;
										cursor: pointer;										
									}
									
									[data-controls="prev"] {
										    transform: rotate(180deg);
									}
									
									.tns-controls {
									    height: 0;									    
									}
									
									.tns-controls button {
										position: absolute;
    									z-index: 1;
    									top: 15%;
									}
									
									[data-controls="prev"] {
										left: 0;
									}
									
									[data-controls="next"] {
										right: 0;
									}
									
									.tns-outer .product-accessory {
										flex-direction: column !important;
										/*max-width: 135px;*/
									}
									
									.tns-outer .product-accessory-image-wrapper + div {
										margin: 8px 0 0 !important;
									}
									
									.tns-outer .product-accessory-image-wrapper + div .product-accessory,
									.product-accessories .product-accessory .price-vat {
										display: none;
									}
									
									.product-accessories .product-accessory .product-accessory-image-wrapper { 
										min-width: auto;
										max-width: 100%;
									}
									
									.add_btn {
										padding: 3px !important;
										width: 90%;
										font-weight: 600;
										font-size: 11px !important;
										color: #fff;
										background-color: #28A9E2;		
										border: none;
										text-align: center;	
									}
									
									#product-accessory-category .quantity {
										justify-content: center !important;
									}
									
									.custom_title,
									.custom_reviews {		
										display: none !important;
									}
									
									 [role="slider"] + p {				
										font-size: 11px;
										margin: 0 0 -5px 0 !important;
										
									}
									
									[data-style="not"] .product-breadcrumb + app-reviews-summary [role="slider"] + p {
									    color: #A1A1A1;
									}	
									
									.similar_products {
										display: flex;
										flex-direction: column;
										/*column-gap: 30px;*/
										row-gap: 16px;
										margin-bottom: 30px;
										
									}
									
									.similar_products .products_title {
										margin-top: 10px;
									}
									
									.similar_products p {
										margin: 0;
										color: #000;
										letter-spacing: -0.02em;
									}
									
									.product-recommendations .pic-wrapper {
										position: relative;
									}
									 .img_wrapper {
										cursor: pointer;
										position: relative;
									}
									
									.img_wrapper img {
										/*max-height: 187px;*/
										object-fit: cover;
										width: 100%;
									}
									.product-recommendations .pic-wrapper img:hover {
										border:none;
									}
									.product-recommendations .pic-wrapper:hover::after,	
									.img_wrapper:hover::after {
										 content: '';
										 left: 0;
										 position: absolute;
										 bottom: 0;
										 width: 100%;
										 height: 3px;
										 background: #28a9e2;
								         animation: fadein .8s;
									}				
									
									p.products_title {
										font-weight: 600;
										font-size: 32px;
										color: #212529;
										letter-spacing: -0.02em;
										text-transform: uppercase;
										/*margin: 20px 0 0;*/
									}
									
									.my_product {
										display: flex;
										flex-direction: column;
									}
									
									.review_wrapper {
										display: flex;
										align-items: baseline;
									}
									
									.product-card .product-name {
										font-size: 16px;
										letter-spacing: -0.008em;
									}
									
									p.product_name {
										font-weight: 600;
										font-size: 16px;
										margin-top: 17px;
										text-transform: uppercase;		
										cursor: pointer;
										letter-spacing: -0.008em;			
												
									}
									
									p.product_count {
										color: #c1c1c1;
										font-size: .7rem;
									}
									
									.reviewed + p.product_count {
										color: #000;
									}
									
									.my_product span {
										font-size: 1rem;
										color: #c1c1c1;
									}
									
									.my_product span.checked_star {
										color: #000;
									}
									
									p.product_price {
										font-weight: 400;
										font-size: 16px;
										margin-top: 4px;
									}
									
									.product-images-container,
									.product-images-container-mobile {
										position: relative;
									}
									
									/*  =====================
										Item status: Expected 
										=====================*/
										
									[data-style="expected"] .sell_wrapper,
									[data-style="pre"] .sell_wrapper
									 {
										position: absolute;
										top: 0;
										left: 0;
										display: flex;
										align-items: center;
										background-color: #EDC96D;	
										padding: 5px 10px;
									}
									
									.sell_wrapper img {
										width: 12px !important;
										height: 12px !important;
										margin-right: 4px;
									}	
									
									.sell_wrapper span {
										color: #000 !important;
										font-weight: 600;
										font-size: 12px;
										letter-spacing: -0.02em;
										text-transform: uppercase;
										line-height: 11px;
									}	
									
									.product-image-wrapper {
										position: relative;
									}
									
									.demand_wrapper p {
										margin: 0;
										font-weight: 500;
										font-size: 12px;
										letter-spacing: -0.02em;
										color: #212529;
										line-height: 20px;
									}
									
									.demand_wrapper p:first-child {
										font-weight: 600;
									}
									
									.demand_wrapper span {
										color: #28A9E2;
									}
									
									/*.product-recommendations {*/
									/*	display: none;*/
									/*}*/
									
									.tns-inner div:first-child {
										display: flex;
									}
									
									.custom_recommendations {
										display: flex;
									}
									
									.custom_recommendations .row{
										flex-direction: column;
									}
									
									.custom_recommendations .col-12 {
										flex: 0 0 100% !important;
										width: 100% !important;
										max-width: 100%;
									}
									
									/* =============================
										Item status: Not in stock 
										============================ */
										.custom_menu_wrapper {
											padding-bottom: 150px;
											display: none;
										}
										
										[data-style="not"] .custom_menu_wrapper  {
											display: block;
										}
										
										[data-style="not"] .custom_menu {
											display: flex;
											flex-wrap: wrap;
											 list-style:none;
										    padding:0;
										    margin:0;
										    gap: 10px;
										}
										
										[data-style="not"] .custom_menu li a {
											display: block;
											padding: 10px 30px;
											border: 1px solid #000;
											font-weight: 600;
											font-size: 14px;
											color: #000000;
											text-transform: uppercase;
										}
										
										[data-style="not"] .custom_menu li a:hover {
											border-color: #28A9E2;
											color: #28A9E2
										}
										
										[data-style="not"] .custom_menu li:last-child a {
											border-color: #28A9E2;
											color: #28A9E2;
										}
										
			
										
									[data-style="not"] .product-recommendations {
										display: block !important;
									}
									
									[data-style="not"] .custom_recommendations {
										display: none !important;
									}
										
									[data-style="not"] #product-accessory-category,
									[data-style="not"] .product-accessories-header,
									[data-style="not"] .product-layout-1 .col-xl-8 app-product-layout-1-images {
										display: none;
									}
									
									[data-style="not"] app-product-images.w_load {
										display: none;
									}
									
									.slider img {
										filter: grayscale(1);
										opacity: 0.8;
										width: 100%;										
										object-fit: cover;
									}
									
									.tns-nav {
										text-align: center;
										margin-top: 10px;
									}
									
									.tns-nav button {
										/*display: inline-block !important;*/
										width: 10px;
										height: 10px;
										border-radius: 50%;
										margin-right: 8px;
										padding: 0;
										border: none !important;
										background-color: #DADADA;
										outline: none !important;
									}
									
									
									
									[data-style="not"] [role="slider"] + p {
										color: #C1C1C1;
									}
									
									.tns-nav button.tns-nav-active {
										background-color: #383838;
									}
										
									.action_btns {
										display: none;
										justify-content: space-between;
										padding: 15px;
										/*padding: 15px;*/
										margin: -10px -15px;
									}
									
									[data-style="not"] .action_btns {
										display: flex;
									}
									
									.action_btns p {
										margin: 0;
										text-decoration: underline;
									}
									
									.action_btns .switch_info {
										font-weight: 400;
										font-size: 11px;
										color: #A1A1A1;
										cursor: pointer;
									}
									
									.action_btns .join_wl {
										color: #28A9E2;
										font-weight: 600;
										font-size: 12px;
										text-transform: uppercase;
										cursor: pointer;
									}	
									
									#tns1 {
										display: flex;
									}
									
									.tns-outer .product-accessory {
										    height: 100%;
									}
									
									.product-accessory-image-wrapper + div .mb-3 {
										height: 100%;
									    justify-content: space-between;
									    display: flex;
									    flex-direction: column;
									}
									
									.tns-outer .product-accessory-image-wrapper + div {
										justify-content: space-between;
		                                height: 100%;
									}
									
									.product-accessories .delimiter {
										margin: 0;
									}
									
									/*#product-accessory-category .tns-outer {margin-bottom: -10px;}*/
									
									#product-accessory-category img {min-height: 110px;}
									#product-accessory-category app-product-stock {display: none;}
									/*#product-accessory-category .title {min-height: 50px;}*/
									/*#product-accessory-category .price {min-height: auto;}						*/
									
									.tns-outer {
										margin-bottom: 5px;
									}
									
									/*.not_wrapper{*/
									/*	display: none;*/
									/*}		*/
									
									/*.guarantees_wrapper[hidden]{					*/
									/*	display: flex !important;*/
									/*}*/
									/*app-product-accessories[hidden]{*/
									/*	display: block !important;*/
									/*}*/
									[data-style="not"] .custom_hide {
											display: none;
										}
										
										[data-style="not"] .product-actions {
											display: none !important;
										}					
										
										.product-accessories .product-accessory .title {
											white-space: normal;
										}				
									
									
									/* ============== 
										Mobile style 
									   ============== */
									   
									@media only screen and (min-width: 769px)  {
										.img_wrapper img {
											min-height: 290px;
											max-height: 290px;
										}
										
										[data-style="not"] .product-recommendations .col-12 {
											display: none;
										}
										[data-style="not"] .product-recommendations .col-12:nth-child(1),
										[data-style="not"] .product-recommendations .col-12:nth-child(2), 
										[data-style="not"] .product-recommendations .col-12:nth-child(3) {
											display: block;
										}
									}
									   
									@media only screen and (max-width: 1199px) and (min-width: 769px)  {
										.custom_recommendations .row {
											flex-direction: row;
										}
										
										.custom_recommendations .col-12 {
											flex: 0 0 50% !important;
		                                    width: 50% !important;
										}
									}
									   
									@media only screen and (max-width: 768px) {
									p.products_title {
										font-size: 26px;
									}
									
									[data-style="not"] .similar_products.left.similar_exist .my_product:nth-child(4){
										display: flex;
									}
									
									[data-style="not"] .custom_menu li a {
										font-size: 18px;
									}
									
									.custom_recommendations .row {
										flex-direction: row;
									}
									
									/*.product-accessory-category .card {*/
									/*		margin-right: -15px;*/
									/*	}*/
									/*	*/
									/*	.product-accessory-category .card .card-header {*/
									/*		margin-right: 15px;*/
									/*	}*/
									
									.custom_menu_wrapper {
											padding-bottom: 35px;
										}
										
										.guarantees_wrapper {
										margin: 20px 0 2px;
										}
									
									.action_btns {
										padding: 5px 15px 15px;
										background-color: #F4F4F4;
									}
									
									
									[data-style="not"] .custom_menu {
										flex-direction: column;
									}
									
									[data-style="not"] .custom_menu li a {
										padding: 0;
										border: none;
									}
									
									[data-style="not"] .product-recommendations .col-12:nth-child(4) {
										display: block;
									}
									[data-style="not"] .my_product:nth-child(4) {
										display: flex;
									}
										.guarantees_wrapper img {
											width: 60px;
											height: 60px;
										}
												
										.guarantees_wrapper .guarantee:last-child img {
											width: 88px;
										}			
										
										.product_name, .product_price { font-size: 11px; }
									.products_title {font-size: 32px;}
										
										/*  Item status: Not in stock  
										=====================*/
										.action_btns {
											display: flex;
										}						
										
										[data-style="not"] .not_item_mobile {
											display: block !important;
										}
										
										[data-style="not"] .product-title,
										[data-style="not"] app-reviews-summary,
										[data-style="not"] .product-price {
											display: none !important;
										}
										
										[data-style="not"] .card-reviews app-reviews-summary {
											display: block !important;
										}
										
										.not_wrapper {
											display: block;
											padding: 0 15px 6px;
											margin: 0 -15px;
											background-color: #F4F4F4;
										}
										
										.not_stock {
											font-weight: 400;
											font-size: 11px;
											color: #000;
											width: 100%;							
											margin: -4px 0 -6px;
											padding-top: 10px;
										}
										
										.red_circle {
											display: inline-block;
											vertical-align: middle;
											margin-right: 11px;
											width: 12px;
											height: 12px;
											background-color: #C80000;
											border-radius: 50%;
										}
										
										.custom_title {
											display: block !important;
											margin: 0 !important;
											font-weight: 500;
											font-size: 11px;
											letter-spacing: -0.02em;
											text-transform: uppercase;
											color: #A1A1A1;
											padding-bottom: 5px;
										}	
										
										.item_info div {
											display: flex;
											align-items: baseline;
											justify-content: space-between;
										}
										
										.item_info .price,
										.item_info .vat-indicator{
										font-weight: 400 !important;
										font-size: 11px !important;
										color: #A1A1A1 !important;
										margin: 0;
									    display: inline-block;
										}
										
										[data-style="not"] .product-variations {
											padding: 0 15px 5px;
											margin: -5px -15px;
											background-color: #F4F4F4;
										}
										
										div.not_item_mobile {
											margin-top: -10px;
										}	
										
												
										
										.guarantees_wrapper[hidden],app-product-accessories[hidden] {
											display: none !important;
										}
										
										/*[data-style="not"] .guarantees_wrapper {*/
										/*	margin: 0 0 15px;*/
										/*}		*/
										
										[data-style="not"] .product-stock-wrapper {
											display: none;		
										}
										
										[data-style="not"] .product-recommendations .col-12{
											flex: 0 0 48% !important;
										}
										
										/*[data-style="not"] .product-recommendations .col-12 img {*/
										/*	min-height: 149px;*/
										/*}*/
										
										
										
										[data-style="not"]  .product-card .product-name,
										[data-style="not"]  .product-card .card-price					 
										 {
											font-size: 11px !important;
										}
										
										
										
										[data-style="not"] .similar_products.left {
											column-gap: 8px;
										
										}
										
										[data-style="not"] .similar_products.left .my_product {
											flex: 0 0 48%;								
										}
										
										[data-style="not"] .similar_products.left img,
										 [data-style="not"] .product-recommendations .product-card .product-image{
											min-height: 149px;
											max-height: 210px;
										}								
										
										
										.left p.product_name,  
										.left p.product_price  {
											font-size: 11px;
											font-weight: 500;
										}
										[data-style="not"] .product-recommendations .row {
											padding-left: 15px;
											padding-right: 15px;
											column-gap: 8px;
											justify-content: space-between;
										}
										
										[data-style="not"] .product-recommendations .row .col-12 {
										padding: 0;
										}
										
										[data-style="not"] .slider img {
											height: 135px;
										}										
									}
						</style>`
document.head.insertAdjacentHTML('beforeend', style)

/* check device */

let device = ''

if (window.matchMedia('(max-width: 768px)').matches) {
	device = 'mobile'
} else {
	device = 'desktop'
}

/* initialize language */

const languagesObj = {
	en: {
		statuses: {
			not: 'Not in stock',
			pre: 'pre',
			expected: 'expected',
		},
		demand: 'This product is in high demand',
		order: 'Order today and get your order dispatched within',
		weeks: 'weeks',
		week: 'week',
		details: 'Product details',
		wl: 'join waiting list',
		guarantee: '30-day money back guarantee',
		made: 'Made in EU',
		superb: 'Superb quality guaranteed',
		similar: 'Similar product',
		like: 'you may also like',
		shop: 'Shop by category',
		sell: 'selling fast',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'STRENGTH MACHINES',
			'CONDITIONING',
			'BODY WEIGHT',
			'GYM ESSENTIALS',
			'APPAREL',
			'SETS',
			'ACCESSORIES',
			'SPECIAL OFFERS',
		],
	},
	it: {
		statuses: {
			not: 'Esaurito',
			pre: 'PREORDINE',
			expected: 'disponibiltà',
		},
		demand: 'Questo prodotto è molto richiesto',
		order: 'Ordina oggi e ricevi il tuo ordine entro',
		weeks: 'settimane',
		week: 'settimana',
		details: 'Dettagli del prodotto',
		wl: `Iscriviti alla lista d'attesa`,
		guarantee: 'Garanzia di rimborso di 30 giorni',
		made: 'Prodotto in UE',
		superb: 'Superba qualità garantita',
		similar: 'PRODOTTI SIMILI',
		like: 'potrebbe anche piacerti',
		shop: 'Acquista per categoria',
		sell: 'Vendi velocemente',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'STRENGTH MACHINES',
			'CONDITIONING',
			'CORPO LIBERO',
			'INDISPENSABILE',
			'ABBIGLIAMENTO E ACCESSORI',
			'PACCHETTI',
			'ACCESSORI ALLENAMENTO',
			'OFFERTA SPECIALE',
		],
	},
	hr: {
		statuses: {
			not: 'Izvan zaliha',
			pre: 'PREDNARUDŽBA',
			expected: 'očekivana',
		},
		demand: 'Ovaj proizvod je vrlo tražen',
		order: 'Naručite danas i vaša  narudžba će biti poslana u roku od',
		weeks: 'tjedna',
		week: 'tjedna',
		details: 'Detalji o proizvodu',
		wl: 'PRIDRUŽITE SE LISTI ČEKANJA',
		guarantee: '30-dnevno jamstvo povrata novca',
		made: 'Proizvedeno u EU-u',
		superb: 'Zajamčena vrhunska kvaliteta',
		similar: 'SLIČNI PROIZVODI',
		like: 'možda će vam se svidjeti i',
		shop: 'Kupujte po kategoriji',
		sell: 'Brzo se prodaje',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'SPRAVE ZA SNAGU',
			'KONDICIJA',
			'VLASTITA TEŽINA',
			'OSNOVNA OPREMA',
			'ODJEĆA I PRIBOR',
			'PAKETI',
			'DODATNA OPREMA',
			'POSEBNA PONUDA',
		],
	},
	sl: {
		statuses: {
			not: `Ni na voljo`,
			pre: 'PREDNAROČILO',
			expected: 'Predvidena',
		},
		demand: 'Za ta produkt je zelo veliko povpraševanja',
		order: 'Naroči danes in tvoje naročilo bo odpremljeno v',
		weeks: 'tednih',
		week: 'tednu',
		details: 'Podrobnosti o izdelku',
		wl: 'Obvesti me, ko bo izdelek na voljo',
		guarantee: '30-dnevni odstop od nakupa',
		made: 'Narejeno v Sloveniji ',
		superb: 'Zagotovljena visoka kakovost',
		similar: 'PODOBNI PRODUKTI',
		like: 'morda vam bo všeč tudi',
		shop: 'Nakupuj po kategorijah',
		sell: 'Priljubljen izdelek',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'NAPRAVE ZA MOČ',
			'KONDICIJA',
			'LASTNA TEŽA',
			'OSNOVNA OPREMA',
			'OBLAČILA IN DODATKI',
			'PAKETI',
			'DODATKI ZA TRENING',
			'POSEBNE PONUDBE',
		],
	},
	de: {
		statuses: {
			not: `Nicht vorrättig`,
			pre: 'VORBESTELLUNG',
			expected: 'Erwartete',
		},
		demand: 'Dieses Produkt hat eine hohe Nachfrage',
		order: 'Bestellen Sie noch heute und Ihre Bestellung wird innerhalb von',
		weeks: 'Wochen versandt',
		week: 'Woche versandt',
		details: 'Einzelheiten zum Produkt',
		wl: 'WARTELISTE BEITRETEN',
		guarantee: '30 Tage Geld-zurück-Garantie',
		made: 'Hergestellt in der EU',
		superb: 'Hervorragende Qualität garantiert',
		similar: 'ÄHNLICHE PRODUKTE',
		like: 'Folgende Produkte könnten Ihnen auch gefallen',
		shop: 'Nach Kategorie shoppen',
		sell: 'Schnell verkaufen',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'KRAFTTRAINING',
			'CONDITIONING',
			'KÖRPERGEWICHT',
			'GYMBEDARF',
			'KLEIDUNG UND ACCESSOIRES',
			'PAKETE',
			'TRAININGSZUBEHÖR',
			'SONDERANGEBOT',
		],
	},
	fr: {
		statuses: {
			not: 'Rupture de stock',
			pre: 'PRÉCOMMANDER',
			expected: 'Réassort',
		},
		demand: 'Ce produit est très en demande',
		order: `Commandez aujourd'hui et recevez votre commande en`,
		weeks: 'semaines',
		week: 'semaine',
		details: 'Détails du produit',
		wl: `REJOINDRE LA LISTE D'ATTENTE`,
		guarantee: 'Garantie de remboursement de 30 jours',
		made: 'Fabriqué en UE',
		superb: 'Haute qualité garantie',
		similar: 'PRODUITS SIMILAIRES',
		like: 'Vous pourriez apprécier aussi',
		shop: 'Acheter par catégorie',
		sell: 'Le produit s’envole rapidement',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'ÉQUIPEMENT FORCE',
			'CONDITIONING',
			'POIDS DU CORPS',
			'INDISPENSABLE',
			'VÊTEMENTS ET ACCESSOIRES',
			'SETS',
			'ACCESSOIRES',
			'PROMO',
		],
	},
	es: {
		statuses: {
			not: 'No disponible',
			pre: 'RESERVACIÓN',
			expected: 'Disponibilidad',
		},
		demand: 'Este producto tiene una gran demanda',
		order: 'Haz tu pedido hoy y recibe tu pedido en',
		weeks: 'semanas',
		week: 'semana',
		details: 'Detalles de producto',
		wl: 'ÚNETE A LA LISTA DE ESPERA',
		guarantee: '30 días de garantía de devolución de dinero',
		made: 'Fabricado en la UE',
		superb: 'Excelente calidad garantizada',
		similar: 'PRODUCTOS SIMILARES',
		like: 'También te puede interesar',
		shop: 'Compra por categoría',
		sell: 'Vendiendo rápido',
		menu: [
			'STRENGTH',
			'RIGS & RACKS',
			'MAQUINAS DE FUERZA',
			'CONDICIÓN FÍSICA',
			'PESO CORPORAL',
			'EQUIPAMIENTO BÁSICO',
			'ROPA Y ACCESORIOS',
			'SETS',
			'ACCESORIOS PARA ENTRENAMIENTO',
			'OFERTAS',
		],
	},
}
let pageLanguage = window.location.pathname.split('product')[0].replace(/\//g, '') || 'en'
let language = languagesObj[pageLanguage]

/* API  apiItem here */

const categoriesLink = {
	strength: '1010,1020,1030,1040,1050,1060,101010,101020,101030,101040,101050,102010,102020,102030,102040,103010,103020,104010,104020,104030,105010,105020,105030,106010,106020',
	'rigs-racks': '2010,2020,2030,2040,2050,201010,201020,202010,202020,203010,203020,203030,203040,203050,204010,204020,204030,205010,205020',
	'strength-machines': '2510,2520,2530',
	conditioning: '3010,3020,3030,3050,3080,3085,3090,301010,301020,301030,301040,301050,302010,302020,303010,303020,303030,305010,305020,308010,308020,308030,309010,309020',
	'body-weight': '4010,4020,4030,4040,4050,4060,4070,401010,401020,402010,402020,402030,402040,403010,403020,404010,404020,404030,404050,404060,405010,405020,405030,405040,405050,406010,406020,406040,407010,407020,407030,4080',
	'gym-essentials': '5010,5020,5030,5040,5050,5060,501010,501020,501030,501040,501050,502010,502020,502030,502040,502050,503010,503020,503030,503040,503050,503060,505010,505020,505030,506010,506020,506030,506040',
	'apparel-accessories': '61,6110,611010,611020,611030,611040,611050,611060,611070,611080,6120,612010,612020,612030,612040,612050,612060,612070,6130,613010,613020,613030,613040',
	sets: '7510,7520,7530,7540,7550,751010,751020',
	accessories: '8010,8020,8030,801010,801020,801030,801040,801050,801060,802010,802020,802030,802040,802060,803010,803020,803025,803030,803040,803050,803060,803010,803020,803025,803030,803040,803050,803060',
}
const productLink = pageLanguage === 'en' ? `https://kingsbox.com/product/` : `https://kingsbox.com/${ pageLanguage }/product/`

const fetchCategory = category => {
	let minPage = 1

	const maxPage = () => {
		switch (category) {
			case 'sets':
				return 1
			case 'strength-machines':
			case 'accessories':
				return 2
			case 'strength':
			case 'apparel-accessories':
				return 13
			case 'rigs-racks':
				minPage = 13
				return 28
			default:
				return 8
		}
	}

	let page = Math.floor(Math.random() * (maxPage() - minPage + 1) + minPage)

	return `https://gateway.kingsbox.com/service/products?value=${ categoriesLink[category] }&page_num=${ page }&page_size=8`
}
const productToHtml = item => `
				<div class="my_product" >	
					<div class="img_wrapper" onclick="location.href='${ productLink }${ item.path }';">
						<a href='${ productLink }${ item.path }'><img src=${ item.image.url } alt=${ item.image.alt }></a>
					</div>
					<div class="inner_text">
						<a href='${ productLink }${ item.path }'><p class="product_name">${ item.name }</p></a>
						<div>				
							<div class="review_wrapper">
								${ drawStars(Math.round(item.reviewsSummary.avgRating)) }
								<p class="product_count">(${ item.reviewsSummary.numReviews })</p><br>
															
							</div>	
							<p class="product_price">${ item.price.price } €</p>
						</div>								
					</div>					
				</div>`
const randomize = (arr, randomNumber) => arr.sort(() => .5 - Math.random()).slice(0, randomNumber)
const drawStars = number => {
	let span = ``
	let isReview = ''
	for (let i = 1; i <= 5; i++) {
		if (i <= number) {
			span += `<span class="checked_star">★</span>`
			isReview = 'reviewed'
		} else {
			span += `<span>★</span>`
		}
	}
	return `<p class="stars ${ isReview }">${ span }</p>`
}

const drawDiagonalLine = (variations, statuses) => {
	variations.forEach((variation, index) => {
		let status = statuses[index]

		status = status.split('_')[0].toLowerCase()
		if (status === 'not') {
			variation.classList.add('out')
		} else {
			variation.classList.remove('out')
		}
	})
}

const addTwoVarUrl = item => {
	let urls = []

	item.productVariations[1].values.forEach(size => {
		size.key = size.key.replace(',', '.')

		item.productVariations[0].values.forEach(productVar => {
			productVar.key = productVar.key.replace(',', '.')

			item.variationsChildren.forEach((childVar) => {
				childVar.variation = childVar.variation.replace(/[\[\]']+/g, '').replace(',', '.')

				let splitVariation = childVar.variation.split('---')

				if (splitVariation[0] === productVar.key && splitVariation[1] === size.key) {
					urls.push(`https://gateway.kingsbox.com/service/products/details/${ childVar.sku }/stock?quantity=1`)
				}
			})
		})
	})

	return urls
}
const addOneVarUrl = item => {
	let urls = []

	item.productVariations[0].values.forEach(productVar => {
		productVar.key = productVar.key.replace(',', '.')
		item.variationsChildren.forEach((childVar) => {
			childVar.variation = childVar.variation.replace(/[\[\]']+/g, '').replace(',', '.')

			if (productVar.key === childVar.variation) {
				urls.push(`https://gateway.kingsbox.com/service/products/details/${ childVar.sku }/stock?quantity=1`)
			}
		})
	})

	return urls
}
const filterItemById = (data, id) => data.filter(x => x.id !== id)

const productUrl = `https://gateway.kingsbox.com/service/products/details/`
const itemNameUrl = window.location.pathname.split('product')[1].replace(/\//g, '')
const URL = productUrl + itemNameUrl

const controller = new AbortController()
const signal = controller.signal

let header = new Headers({ 'Accept-Language': pageLanguage })

fetch(URL, { signal, headers: header })
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		let urls = []
		let item = data.data
		let isSizeOption = false

		if (item.productVariations[1]?.values.length) {
			isSizeOption = true

			urls = addTwoVarUrl(item)
		} else if (item.productVariations[0]?.values.length) {
			urls = addOneVarUrl(item)
		} else {
			controller.abort()
			return false
		}

		let requests = urls.map(url => fetch(url, { headers: header }))

		Promise.all(requests)
			.then(responses => {
				return responses
			})
			.then(responses => Promise.all(responses.map(r => r.json())))
			.then(items => items.map(item => item.data.status))
			.then(statuses => {
				let variations

				if (document.querySelectorAll('.product-variation .square').length) {
					variations = document.querySelectorAll('.product-variation .square')
				}
				if (document.querySelectorAll('.product-variation div .circle').length) {
					variations = document.querySelector('.product-variation div ').querySelectorAll('.circle')
				}

				drawDiagonalLine(variations, statuses)

				let $secondOption = document.querySelector('.product-variation .square') || document.querySelectorAll('.product-variation')[1]?.querySelectorAll('.circle')


				if (isSizeOption && $secondOption) {
					let colorsPerSize = statuses.length / $secondOption.length

					$secondOption.forEach((size, index) => {
						size.addEventListener('click', () => {
							let currSizeStatus = statuses.slice(index * colorsPerSize, index * colorsPerSize + colorsPerSize)

							drawDiagonalLine(variations, currSizeStatus)
						})
					})
				}
			})
	})
	.catch(err => console.error(err))

fetch(URL, { headers: header })
	.then((response) => {
		return response.json()
	})
	.then((data) => {
		return [data.data.breadcrumb[0].url, data.data.id]
	})
	.then((arguments) => {
		const [breadcrumb, itemId] = arguments
		fetch(fetchCategory(breadcrumb), { headers: header })
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				let filteredArr = filterItemById(data.data, itemId)

				let randomItemsNumber = 6

				let isRecommend = setInterval(() => {
					if (document.querySelector('.product-recommendations')) {
						clearInterval(isRecommend)

						let isSimilarItem = !!document.querySelector('.product-recommendations .col-12')

						if (isSimilarItem) {
							randomItemsNumber = 4
						}

						let randomItems = randomize(filteredArr, randomItemsNumber)

						let divClass = isSimilarItem ? 'similar_exist' : ''

						const similarProducts = `
							<div class="similar_products right ${ divClass }">
								<p class="products_title">${ language.like }</p>
								${ randomItems.map(productToHtml).join('') }
							</div>`

						const similarProductsLeft = `
									<div class="similar_products left ${ divClass }">
										<p class="products_title">${ language.like }</p>
										${ randomItems.map(productToHtml).join('') }
									</div>`


						document.querySelector('.product-layout-1 .col-xl-4').insertAdjacentHTML('beforeend', similarProducts)
						document.querySelector('.product-recommendations:not(.custom_recommendations)').insertAdjacentHTML('afterend', similarProductsLeft)

						let isSimilarRight = setInterval(() => {
							if (document.querySelector('.similar_products.right')) {
								clearInterval(isSimilarRight)
								document.querySelector('.similar_products.right').addEventListener('click', e => {
									if (e.target.closest('.my_product')) {
										window.dataLayer = window.dataLayer || []
										dataLayer.push({
											'event': 'event-to-ga',
											'eventCategory': 'Exp: PDP improvemnets ' + device,
											'eventAction': 'You may also like',
										})
									}
								})
							}
						}, 200)
						let isSimilarLeft = setInterval(() => {
							if (document.querySelector('.similar_products.left')) {
								clearInterval(isSimilarLeft)
								document.querySelector('.similar_products.left').addEventListener('click', e => {
									if (e.target.closest('.my_product')) {
										window.dataLayer = window.dataLayer || []
										dataLayer.push({
											'event': 'event-to-ga',
											'eventCategory': 'Exp: PDP improvemnets ' + device,
											'eventAction': 'You may also like',
										})
									}
								})
							}
						}, 200)
					}
				}, 100)
			})
	})
	.catch(err => console.error(err))

/* load tiny slider */

let scriptCustomStyle = document.createElement('link')
scriptCustomStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css'
scriptCustomStyle.rel = 'stylesheet'
document.head.appendChild(scriptCustomStyle)

let scriptCustom = document.createElement('script')
scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js'
scriptCustom.async = false
document.head.appendChild(scriptCustom)

/* custom functions */


let isStatus = setInterval(() => {
	if (
		document.querySelector('p.indicator + p') &&
		document.querySelector('div.pt-3.pb-3')
	) {
		clearInterval(isStatus)

		let isCircle = !!document.querySelector('.product-variation .circle')

		if (isCircle) {
			document.querySelector('.product-variation .circle').classList.add('my_flex')
		}

		if (document.querySelector('.product-variation p.label')) {
			document.querySelectorAll('.product-variation p.label').forEach(p => {
				p.innerText += ':'
			})
		}

		let $containerDataset = document.querySelector('.product-container').dataset
		let $statusTarget = document.querySelector('p.indicator + p')

		let $imagesTarget = document.querySelector('#product-images-thumbs')

		mutationTemplate($statusTarget, () => checkItemStatus($statusTarget, $containerDataset))
		mutationTemplate($imagesTarget, checkActiveImg)
	}
}, 200)
let isWhiteAccordion = setInterval(() => {
	if (document.querySelectorAll('.accordion.product-properties .flex-row')[1]) {
		clearInterval(isWhiteAccordion)

		if (document.querySelector('[data-style="not"]')) {
			document.querySelectorAll('.accordion.product-properties .flex-row')[0].click()
		} else {
			document.querySelectorAll('.accordion.product-properties .flex-row')[1].click()
		}

		document.querySelector('.accordion.product-properties .card').before(document.querySelectorAll('.accordion.product-properties .card')[1])
	}
}, 200)
let isBlackAccordion = setInterval(() => {
	if (document.querySelector('.accordion.product-accessory-category') && !document.querySelector('[data-style="not"]')) {
		clearInterval(isBlackAccordion)

		document.querySelector('.accordion.product-accessory-category')?.closest('.pt-3')?.before(document.querySelector('.accordion.product-properties'))
		document.querySelector('.accordion.product-accessory-category .card').style.marginTop = '12px'

		document.querySelector('.accordion.product-accessory-category').addEventListener('click', e => {
			if (e.target.closest('.card-header')) {
				initializeCarousel()
			}
		})

		if (!document.querySelectorAll('.accordion.product-accessory-category .card')[0]?.querySelector('.collapse.show')) {
			document.querySelector('.accordion.product-accessory-category .card .flex-row')?.click()
		}
	}
}, 200)
let isSimilar = setInterval(() => {
	if (document.querySelector('.product-recommendations:not(.custom_recommendations) .card source')) {
		clearInterval(isSimilar)

		document.querySelectorAll('.product-recommendations:not(.custom_recommendations) .card source').forEach((source, index) => {
			document.querySelectorAll('.product-recommendations:not(.custom_recommendations) .card img')[index].src = source.getAttribute('lazyload')
		})

		let $recommendCopyRight = document.querySelector('.product-recommendations').cloneNode(true)
		$recommendCopyRight.classList.add('custom_recommendations', 'right')

		document.querySelector('.product-recommendations:not(.custom_recommendations)').style.display = 'none'
		document.querySelector(`.product-layout-1 .col-xl-4`).insertAdjacentElement('beforeend', $recommendCopyRight)
	}
}, 100)
let drawMenu = setInterval(() => {
	if (document.querySelector('.product-layout-1')) {
		clearInterval(drawMenu)
		let links = [
			'strength',
			'rigs-racks',
			'strength-machines',
			'conditioning',
			'body-weight',
			'gym-essentials',
			'apparel-accessories',
			'sets',
			'accessories',
			'special-offer',
		]

		let menuItems = ''

		for (let i = 0; i < links.length; i++) {
			menuItems += `<li><a href="https://kingsbox.com/category/${ links[i] }">${ language.menu[i] }</a></li>`
		}

		let menu = `
					<div class="custom_menu_wrapper"><p class="products_title">${ language.shop }</p><ul class='custom_menu'>${ menuItems }</ul></div>
				`

		document.querySelector('.product-layout-1').insertAdjacentHTML('beforeend', menu)

		let isMenu = setInterval(() => {
			if (document.querySelector('.custom_menu_wrapper')) {
				clearInterval(isMenu)
				document.querySelector('.custom_menu_wrapper').addEventListener('click', e => {
					if (e.target.closest('li')) {

						window.dataLayer = window.dataLayer || []
						dataLayer.push({
							'event': 'event-to-ga',
							'eventCategory': 'Exp: PDP improvemnets ' + device,
							'eventAction': 'Clicks on the shop by categories',
						})
					}
				})
			}
		}, 200)
	}
}, 200)

const duplicatesArr = [
	'demand_wrapper',
	'sell_wrapper',
	'guarantees_wrapper',
	'not_wrapper',
	'action_btns',
]
const removeDuplicates = duplicate => {
	document.querySelectorAll('.' + duplicate)?.forEach(duplicate => {
		duplicate.remove()
	})
}

function checkItemStatus(item, containerDataset) {
	let $addItemBtn = document.querySelector('div.pt-3.pb-3')
	let $statusFrWord = item.innerHTML.split(' ')[0].replace(/!/g, '').toLowerCase()
	let itemStatus = containerDataset.style = (Object.entries(language.statuses).map(([key, value]) => {
		if (value.toString().split(' ')[0].toLowerCase() === $statusFrWord) {
			return key
		}
	})).join('')

	/* check and remove duplicates */
	duplicatesArr.forEach(removeDuplicates)

	_addGuarantees($addItemBtn)

	window.scrollTo({ top: 0, behavior: 'smooth' })

	switch (itemStatus) {
		case 'not':
			_addNotStyle()
			break
		case 'expected':
		case 'pre':
			_setExpectedItem($addItemBtn)
			initializeCarousel()
			break
		default:
			initializeCarousel()
			break
	}
}

function mutationTemplate(target, callback) {
	if (target) {
		let config = { attributes: true, childList: true, subtree: true, characterDataOldValue: true }

		let observer = new MutationObserver(() => {
			observer.disconnect()
			callback()
			observer.observe(target, config)
		})

		callback()
		observer.observe(target, config)
	}
}

function _setExpectedItem(where) {
	let interval = setInterval(() => {
		if (
			document.querySelector('div.pt-3.pb-3') &&
			document.querySelector('.product-image-wrapper') &&
			document.querySelector('.indicator + p')
		) {
			clearInterval(interval)

			let weeksNumber = document.querySelector('.indicator + p')?.innerText.replace(/[^0-9.-]/g, '')


			let drawWeeks = true
			let oneWeek = false

			if (weeksNumber !== '') {
				if (document.querySelector('.product-stock-wrapper .able-to-buy')) {
					let parts = weeksNumber.split('.')

					let weekDifference = (new Date(parts[2], parts[1] - 1, parts[0]) - new Date()) / (7 * 24 * 60 * 60 * 1000)

					let min = Math.floor(weekDifference)
					let max = Math.ceil(weekDifference)

					if (min >= 0 || max >= 0) {
						weeksNumber = 1
						oneWeek = true
					} else if (min !== max) {
						weeksNumber = min + ' - ' + max
					} else {
						weeksNumber = max
						if(weeksNumber == 1) {
							oneWeek = true
						}
					}
				} else if (document.querySelector('.product-stock-wrapper .pre-order')) {
					weeksNumber = weeksNumber.replace('-', ' - ')

				}
			} else {
				drawWeeks = false
			}


			let sellImg = `
											<div class="sell_wrapper">
												<img src="https://conversionratestore.github.io/projects/kingsbox/img/fire.svg" alt="hot sale"><span>${ language.sell }</span>
											</div>
										`

			let weekP = ''

			if(drawWeeks) {
				weekP = `<p>${ language.order } <span>${ weeksNumber } ${ oneWeek ? language.week : language.weeks }</span>.</p>`
			}

			let demandText = `
											<div class="demand_wrapper">
												<p>${ language.demand }.</p>
												${ weekP }
											</div>
										`


			document.querySelector('.product-images-container').insertAdjacentHTML('beforeend', sellImg)
			document.querySelector('.product-images-container-mobile').insertAdjacentHTML('beforeend', sellImg)

			if (!document.querySelector('.demand_wrapper')) {
				where.insertAdjacentHTML('beforebegin', demandText)
			}
		}
	}, 200)
}

function _addGuarantees(where) {
	let guaranteesArr = [
		{ img: 'guarantee', text: language.guarantee },
		{ img: 'made_in_eu', text: language.made },
		{ img: 'trustpilot', text: language.superb },
	]

	let guaranteeMarkup = guarantee => `
									<div class="guarantee">
										<img src="https://conversionratestore.github.io/projects/kingsbox/img/${ guarantee.img }.svg" alt="${ guarantee.img }">
										<p>${ guarantee.text }</p>
									</div>`

	let guaranteesBlock = `
									<div class="guarantees_wrapper">
										${ guaranteesArr.map(guaranteeMarkup).join('') }
									</div>`

	where.insertAdjacentHTML('afterend', guaranteesBlock)
}

function _addNotStyle() {
	let intr = setInterval(() => {
		if (
			document.querySelector('app-reviews-summary') &&
			document.querySelector('.product-price div') &&
			document.querySelector('app-product-variations')
		) {
			clearInterval(intr)

			let $title = document.querySelector('.product-title')
			let $cloneReviews = document.querySelector('app-reviews-summary').cloneNode(true)
			let $clonePrice = document.querySelector('.product-price div').cloneNode(true)
			let sliderItem = ''


			$cloneReviews.classList.add('not_item_mobile')
			$clonePrice.classList.add('not_item_mobile')

			let imgArr

			if (device === 'mobile') {
				imgArr = document.querySelectorAll('#product-images-thumbs .picture')
				imgArr.length ? null : imgArr = document.querySelectorAll('.product-images-container-mobile img')
			} else {
				document.querySelectorAll('.product-images-container .product-image-wrapper source').forEach((source, index) => {
					document.querySelectorAll('.product-images-container .product-image-wrapper source + img')[index].src = source.getAttribute('lazyload')
				})

				imgArr = document.querySelectorAll('.product-images-container .product-image-wrapper img')
			}

			document.querySelector('app-product-images').classList.add('w_load')

			imgArr.forEach((img, index) => {
				// img.src = img.src.replace('&blur=90', '')
				sliderItem += `<div><img src=${ img.src } alt="slider image ${ index }"></div>`
			})

			let sliderWrapper = `
								<div class="not_wrapper">			
									<div class="slider">
										${ sliderItem }
									</div>
									<div class="item_info not_item_mobile">
										<p class="not_stock"><span class="red_circle"></span>${ language.statuses.not }</p>
										<div>
											<p class="custom_title">${ $title.innerText }</p>							
										</div>
									</div>
								</div>
							`

			document.querySelector('.col-xl-8 .product-breadcrumb').insertAdjacentHTML('afterend', sliderWrapper)

			let isSlider = setInterval(() => {
				if (document.querySelector('.slider img') && typeof tns == 'function') {
					clearInterval(isSlider)

					tnsSettings('.slider', 2.2, true, 0, true, 'main', false, 1)
				}
			}, 100)


			let clone = setInterval(() => {
				if (document.querySelector('.item_info div')) {
					clearInterval(clone)

					document.querySelector('.item_info div').insertAdjacentElement('beforeend', $cloneReviews)
					document.querySelector('.item_info').insertAdjacentElement('beforeend', $clonePrice)
				}
			}, 100)

			let actionBtns = `
							<div class="action_btns bottom">
								<p class="switch_info">${ language.details } <span>V</span></p>
								<p class="join_wl">${ language.wl }</p>
							</div>`

			// if (device === 'mobile') {
			// 	let custom = setInterval(() => {
			// 		if (document.querySelector('.item_info .vat-indicator')) {
			// 			clearInterval(custom)
			// 			document.querySelector('.item_info .vat-indicator').insertAdjacentHTML('afterend', actionBtns)
			// 		}
			// 	}, 100)
			// } else {
			//
			// }

			document.querySelector('app-product-variations').insertAdjacentHTML('beforeend', actionBtns)

			let isBtns = setInterval(() => {
				if (document.querySelector('.action_btns')) {
					clearInterval(isBtns)

					let $guarantees = document.querySelector('.guarantees_wrapper')
					let $accessories = document.querySelector('app-product-accessories')
					let $properties = document.querySelector('.product-properties')?.parentNode?.closest('.pt-3') || document.querySelector('.product-properties')

					let $v = document.querySelector('.switch_info span')

					$guarantees?.classList.add('custom_hide')
					$accessories?.classList.add('custom_hide')
					$properties?.classList.add('custom_hide')


					document.querySelector('.action_btns').addEventListener('click', (e) => {
						if (e.target.closest('.switch_info')) {
							if ($guarantees) {
								$guarantees.classList.toggle('custom_hide')
							}

							if ($accessories) {
								$accessories.classList.toggle('custom_hide')
							}

							if ($properties) {
								$properties.classList.toggle('custom_hide')
							}

							$v.innerText === 'V' ? $v.innerText = 'ꓥ' : $v.innerText = 'V'

							document.querySelector('.action_btns').classList.toggle('bottom')

							window.dataLayer = window.dataLayer || []
							dataLayer.push({
								'event': 'event-to-ga',
								'eventCategory': 'Exp: PDP improvemnets ' + device,
								'eventAction': 'Click on Product details',
							})
						}
						if (e.target.matches('.join_wl')) {
							document.querySelector('.product-actions button').click()
						}
					})
				}
			}, 200)
		}
	}, 100)
}

function checkActiveImg() {
	document.querySelector('.active_img')?.classList.remove('active_img')
	document.querySelector('.product-images-thumb .active')?.closest('.product-images-thumb').classList.add('active_img')
}

function initializeCarousel() {
	let interval = setInterval(() => {
		if (document.querySelectorAll('#product-accessory-category [role="tabpanel"] .ng-star-inserted')[1] && typeof tns == 'function') {
			clearInterval(interval)

			document.querySelector('.product-accessories').addEventListener('click', e => {
				if (e.target.matches('.add_btn')) {
					e.target.previousElementSibling.click()
					e.target.disabled = true
				}
			})

			let blackAccordion = document.querySelectorAll(`#product-accessory-category [role="tabpanel"] .ng-star-inserted`)[1]

			if (!document.querySelector('.card-body .tns-outer')) {
				tnsSettings(blackAccordion, 3, false, 8, false, 'accessories', true, 3)
			}
		}
	}, 100)
}

function tnsSettings(container, items, nav, gutter, responsive, name, controls, slideBy) {
	let obj = {
		container,
		items,
		autoplay: false,
		controls,
		controlsText: [`<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_back.svg" alt="arrow left"></span>`, `<span><img src="https://conversionratestore.github.io/projects/kingsbox/img/arrow_back.svg" alt="arrow right"></span>`],
		loop: false,
		autoplayButton: false,
		autoplayButtonOutput: false,
		nav,
		navPosition: 'bottom',
		preventScrollOnTouch: 'auto',
		mouseDrag: true,
		swipeAngle: 30,
		gutter,
		slideBy,
		autoHeight: false,
	}

	responsive ? obj.responsive = { 768: { items: 1 } } : null

	let slider = tns(obj)

	slider.events.on('indexChanged', () => {
		window.dataLayer = window.dataLayer || []
		dataLayer.push({
			'event': 'event-to-ga',
			'eventCategory': 'Exp: PDP improvemnets ' + device,
			'eventAction': `Swipe on ${ name } slider`,
		})
	})
}

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: PDP improvemnets ' + device,
	'eventAction': 'loaded',
})

let isClarity = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarity)

		clarity('set', `pdp_improvemnets_${ device }`, 'variant_1')
	}
}, 100)
