const style = `
		<style>
			.woocommerce-message {
			margin-bottom: 0 !important;
			}
		
			.checkout_navigation_bar {
				display: none !important;
			}
			
			.navbar-custom {
				margin-top: -40px;
				padding: 16px;
				background-color: #F5F5F5;
			}
			
			.navbar-custom ol {
				position: relative;
	            width: fit-content;
			    margin: 0 auto;
			    padding: 0 0 5px 0;
			    
			}
			
			.navbar-custom ol::before {
				content: "";
				position: absolute;
				left: 0;
				bottom: 0;
				display: block;
				height: 3px;
				width: 50%;		
				background-color: rgba(0, 128, 0, 0.5);
			}
			
			.navbar-custom ol::after {
				content: "";
				position: absolute;
				left: 50%;
				bottom: 0;
				display: block;
				height: 3px;
				width: 50%;		
				background-color: #DADADA;
			}
			
			.navbar-custom ol li {
				margin: 0 1vw;
				display: inline;
				color: #333;
				font-weight: 500;
				font-size: 14px;
				text-transform: uppercase;
			}
			
			.navbar-custom ol li:first-child {
				color: #008000;
				margin-left: 0;
			}		
			
			.navbar-custom ol *:nth-child(3) {
				color: #C4C4C4;
				margin-right: 0;
			}
			
			.checkout.woocommerce-checkout {
				background: #F5F5F5;
				border-radius: 5px;	
				padding: 20px;
			}
			
			#customer_details .col-1{
				width: 100%;
			}
			
			/*#customer_details .col-2{*/
			/*	width: 34%;*/
			/*}*/
			
			.checkout.woocommerce-checkout .col-1, #order_review {
				background: #FFF;
				border-radius: 5px;	
				/*padding: 20px;*/
			}
			
			#order_review {
			margin-top: 20px;
			}
			
			.col2-set .col-2 {
				display: none;
			}
			
			/*#order_review {*/
			/*	width: 64%;*/
			/*}*/
			
			.checkout.woocommerce-checkout .col-1,
			.checkout.woocommerce-checkout .col-2,
			#order_review,
			#order_review_heading {
				padding: 20px;
			}
			
			#cms-theme.woocommerce-page input,
			#cms-theme.woocommerce-page select {
				border-color: #E5E5E5 !important;
				border-radius: 2px !important;
				/*color: #C4C4C4 !important;*/
			}	

			
			form.checkout #customer_details .woocommerce-info.logged {
				display: block !important;
			}
			
			.woocommerce-info {
				display: none;
				padding: 0 !important;
				border: none;
				color: #008000 !important;
			}
			
			.woocommerce-info .showlogin {			
				color: #008000 !important;
			    text-decoration: underline;
			}
			
			.woocommerce-info::before {
				display: none;
			}
			
			/*.woocommerce-form.woocommerce-form-login.login p {*/
			/*	width: 100%;*/
			/*}*/
			
			.woocommerce-billing-fields {
				display: flex;
				flex-wrap: wrap;
				padding: 0 !important;
			}
			
			.wc-credit-card-form.wc-payment-form {
				flex-wrap: wrap;
			}
			
			.wc-credit-card-form.wc-payment-form div {
				flex: 30%;
			}
			
			.wc-credit-card-form.wc-payment-form div:first-child {
				flex: 40%;
			}
			
			.stripe-source-errors {
				flex: 100% !important;
			}
			
			.woocommerce-billing-fields p {
			  flex: 50%;
			}
			
			.woocommerce-billing-fields h3 {
				display: none;
			}
			
			#title_field {
			    order: 1;
			    padding-right: 20px;
			}					
			
			#billing_first_name_field {
				order: 2;
				padding-right: 20px;
			}
			
			#billing_last_name_field {
				order: 3;
				padding-right: 20px;		
			}
			
			#billing_country_field {
				order: 4;
				padding-right: 20px;
			}
			
			#billing_email_field {
			    order: 5;
			}
			
			#birthday_day_field {
				order: 6;
				padding-right: 10px;	
			}	
			
			#birthday_month_field {
				order: 7;		
				padding-right: 10px;		
			}
			
			#birthday_year_field {
				order: 8;
			}       
			
			#size_field {
				order: 9;
				margin-top: 6px;
			}
			
			.create-account {
				/*padding: 0;*/
				order: 10;
				flex: 50%;
			}
			
			.create-account p:first-child {
				display: none;
			}
			
			#birthday_day_field, 
			#birthday_month_field,
			#birthday_year_field {
				max-width: 16.6%;
				margin: 0;
			}
			
			.woocommerce-billing-fields .form-row label {
				white-space: nowrap;
			}
			
			.woocommerce form .form-row {
				padding: 0;
			}
			
			.mammutmarsch_checkout_big_text {
				font-weight: bold;
				font-size: 43px;
				line-height: 48px;
				letter-spacing: -0.02em;			
				color: #666666
			}		
			
			#order_review {
				background-color: #fff;
				border-radius: 5px;
			}
			
			#order_review_heading {
				display: none;
			}
					
			.checkout.woocommerce-checkout {  display: grid;
			  grid-template-columns: 1fr 1.2fr 0.8fr;
			  /*gap: 20px;*/
			  grid-auto-flow: row;
			  grid-template-areas:
	    "err err side-block"
	    "col2-set col2-set side-block"
	    "woocommerce-checkout-review-order woocommerce-checkout-review-order side-block"
	    ". . under-block";
	}
	
	.woocommerce-NoticeGroup.woocommerce-NoticeGroup-checkout {
		grid-area: err;
	}
	
	.under-block {grid-area: under-block;}
	
	.col2-set { grid-area: col2-set; }
	
	.side-block { grid-area: side-block; }
	
	.woocommerce-checkout-review-order { grid-area: woocommerce-checkout-review-order; }
	
	/*.woocommerce-checkout #payment ul.payment_methods li {*/
	/*	padding: 0;*/
	/*}*/
	
	.wc_payment_method .col-md-5.col-xs-6 label {
		margin-left: -5px;
	}
	
	.payment_radio_group label:after {
		width: 20px;
		height: 20px;
		right: 15px;
	}
	
	.payment_radio_group input:checked~label:after {
		border: none;
	    background-position: 3px;
	    background-image: url("https://conversionratestore.github.io/projects/mammutmarsch/img/check_arrow.svg");
	}
	
	.woocommerce-checkout-payment .col-xs-2 {
		padding: 0;
		width: auto;
		position: relative;
	}
	
	.woocommerce-checkout #payment ul.payment_methods li {
		padding: 0;
	}
	
	.payment_radio_group label {
		/*position: absolute;*/
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		padding: 18px;
	}
	
	.woocommerce-checkout-payment .row {
		display: flex;
		align-items: center;
		padding: 10px 8px;
		background-color: #fff;
		line-height: normal;
		
	}
	
	
	
	.woocommerce-checkout #payment div.payment_box .wc-credit-card-form {
		display: flex;
		margin: 0;
	}
	
	.woocommerce-checkout #payment div.payment_box .wc-credit-card-form .form-row {
		line-height: normal;
		margin: 0;
		padding: 0 4px 0 0;
	}
	
	.woocommerce-checkout #payment div.payment_box .wc-credit-card-form .form-row.form-row-last {
	padding: 0;
	}
	
	.woocommerce-checkout-payment .row .col-md-6.col-xs-4 {
	margin-left: auto;
	width: auto;
	}
	
	.woocommerce-checkout-payment .row .col-md-6.col-xs-4 img {
	object-fit: contain;
	width: 67px;
	height: 43px;
	border: 1px solid #E5E5E5;
	margin: 0 !important;
	padding: 0 !important;
	/*width: 67px;*/
	/*height: 43px;*/
	}
	
	.woocommerce-checkout-payment .payment_method_stripe .row .col-md-6.col-xs-4 img {
	width: auto;
	border: none;
	}
	
	.woocommerce-checkout-payment .row div{
		padding: 0;
		
	}
	
	.woocommerce-checkout-payment .row {
	border: 1px solid #E5E5E5;
	border-bottom: none;
	}
	
	.woocommerce-checkout-payment .row:last-child {
	border-bottom: 1px solid #E5E5E5;
	}
	
	#cms-theme.woocommerce-checkout .place-order {
		background-color: #fff;
	}
	
	/*.woocommerce-checkout-payment .row .col-xs-2{*/
	/*	padding: 0;*/
	/*	width: auto;*/
	/*}*/
	
	/*.woocommerce-checkout-payment .row  .payment_radio_group label {*/
	/*	padding: 17px;*/
	/*}*/
	
	.wc_payment_method.payment_method_stripe .description {
		display: none;
	}
	
	.wc_payment_method label,
	.wc_payment_method .description {
		white-space: nowrap;
	}
	
	.wc_payment_method label {
		font-size: 16px;
		font-weight: 300;
	}
	
	.wc_payment_method label.dark {
		font-weight: 600 !important;
	}
	
	.wc_payment_method label.dark .description {
		font-weight: 300 !important;
	}
	
	/*.wc_payment_method label .description {*/
	/*	font-weight: 300 !;*/
	/*}*/
	
	.wc_payment_method .descriptio {
		font-size: 14px;
	}
	
	.woocommerce-checkout #payment ul.payment_methods {
	border: none;
	}
	
	/*li.wc_payment_method {*/
	/*border: 1px solid #E5E5E5;*/
	/*border-bottom: none;*/
	/*}*/
	
	li.wc_payment_method:last-child {
	border-bottom: 1px solid #E5E5E5;
	}
	
	.woocommerce-checkout #payment div.payment_box {
	background-color: #F5F5F5;
	padding: 8px;
	border: 1px solid #E5E5E5;
	margin: 0 0 10px;	
	}
	.woocommerce-checkout #payment div.payment_box::before {
	display: none;
	}
	
	.payment_box.payment_method_bacs {
		margin: 0 !important;
		border-bottom: none !important;
	}
	
	.wc_coupon_message_wrap {
	padding: 0 !important;
	}
	
	.table-custom {
		margin: 70px 0 20px;
		border: 1px solid #E5E5E5;
		background: #FFFFFF;
	}
	
	.table-custom th,
	.table-custom td {
		padding: 8px;
	}
	
	.table-custom th {
	font-weight: 600;
	font-size: 16px;
	color: #212121;
	}
	
	.table-custom td {
	font-size: 14px;
	font-weight: normal;
	color: #7F7F7F;
	letter-spacing: 0.03em;
	line-height: 24px;
	}
	
	.table-custom td:first-child {
	font-size: 16px;
	/*width: 40%;*/
	}
	.product-wrapper {
	background-color: #F5F5F5;
	border-radius: 2px;
	}
	
	.product-wrapper .title,  	
	.product-wrapper div  {
		padding: 10px;
	}
	
	.product-wrapper .title{
		font-weight: 300;
	font-size: 28px;
	color: #333333;
	}
	.product-wrapper .product-name{
	font-size: 16px !important;
	color: #7F7F7F !important;
	font-weight: 400 !important;
	width: 65%;
	}
	
	.product-wrapper div {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #E5E5E5;
	}
	
	.product-wrapper p {
		margin: 0;
	}
	
	.product-wrapper div p:first-child {
	font-weight: 600;
	font-size: 16px;
	color:#212121;
	}
	.product-wrapper div p:last-child {
	letter-spacing: 0.03em;
	font-weight: 500;
	font-size: 14px;
	color: #7F7F7F;
	}
	
	.side-block {
		background-color: #fff;
		padding: 20px;
		border-radius: 5px;
		margin-left: 20px;
	}
	
	.remove {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}
	
	.remove-text {
		visibility: hidden;
		/*width: 91px;*/
		 background-color: #fff;
	  color: #7F7F7F;
	  text-align: center;
	  border-radius: 5px;
	  padding: 8px 15px;
	 position: absolute;
	  z-index: 1;
	  bottom: 125%;
	  /*left: 50%;*/
	  margin-left: -55px;
	  opacity: 0;
	  transition: opacity 0.3s;
	filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.1));
	  }
	  
	  .remove-text::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: #fff transparent transparent transparent;
	  }
	  
	  .remove:hover .remove-text {
		visibility: visible;
		opacity: 1;
	  }
	
	#cms-theme table.shop_table {
		display: none;
	}
	
	.checkout_coupon {
		display: block !important;
	}
	
	.product-wrapper [data-name="fee"] {
		color: #212121;
	}
		
	.woocommerce-error, .woocommerce-message {
		margin: 30px 0;
	}
	
	.woocommerce form.checkout_coupon {
		margin: 30px 0;
	}	
	
	.woocommerce form.checkout_coupon {
		display: flex !important;
		justify-content: space-between;
		padding: 0;
		border: none;
	}
	
	.woocommerce form.checkout_coupon p{
		margin: 0;
		line-height: normal;
	}
	
	.woocommerce form.checkout_coupon p:first-child {width: 70%;}
	/*.woocommerce form.checkout_coupon *:nth-child(2) {width: 25%; }*/
	/*.woocommerce form.checkout_coupon *:nth-child(2) input {width: 100%;}*/
	
	#coupon_code {
		border-radius: 2px;
	}
	
	.checkout_coupon .form-row-last {
		display: none;		
	}
	
	.custom-coupon {
		position: relative;
		background-color: #C4C4C4 !important;
		border-radius: 2px;
		width: 25%;
		display: flex;
	    justify-content: center;
	    align-items: center;
	    cursor: pointer;
	    border: none !important;
	}
	
	.custom-coupon:after {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
		background-repeat: no-repeat !important;
		background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/arrow_forward.svg");
		width: 16px;
		height: 16px;
		border-radius: 2px;
	}
	
	.custom-coupon.applied {
		background-color: #008000 !important;
		pointer-events: none;
	}
	
	.custom-coupon.applied:after {
		height: 24px;
		width: 24px;
		background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/download_done.svg");
	}
	
	.fee-wrapper,
	.coupon-wrapper {
		display: none !important;
	}
	
	.fee-wrapper.show,
	.coupon-wrapper.show {
		display: flex !important;
	}
	
	[data-name="coupon-sale"]{
	 	text-align: right;
	}
	
	[data-name="coupon-sale"] .cancel{
		font-weight: 700;
		cursor: pointer;
		color: #c00;
	}
	
	.woocommerce-message .button.wc-forward {
		display: none;
	}
	
	.big-text  {
	margin-top: 100px;
	}
	
	.big-text .grey {
		font-weight: bold;
		font-size: 43px;
		line-height: 48px;
		letter-spacing: -0.02em;
		color: #666666;
	}
	
	.big-text .yellow {
		font-weight: bold;
		font-size: 26px;
		line-height: 31px;
		letter-spacing: -0.02em;		
		color: #CCCC00;
	}
	
	.button#place_order.button.alt {
		display: none !important;
	}
	
	.under-block {
		margin: 20px 0 0 20px;
		text-align: right;
	}
	
	.under-block button {
	width: 100%;
	border: none;
		background-color: #008000 !important;
border-radius: 5px;
font-weight: bold;
font-size: 16px;
line-height: 19px;
/* identical to box height */

text-align: center;
letter-spacing: 0.03em;
text-transform: uppercase;

color: #FFFFFF;
margin-bottom: 15px;
	}
	
	.under-block p {
	font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */


color: #666666;
	}
	
	.remove img {
		width: 20px;
		height: 20px;
	}
	
	.under-block img {
	width: 40px;
	height: 40px;
	margin-right: 10px;
	}
	
	.wc-credit-card-form.wc-payment-form label {
		display: none !important;
	}
	
	.woocommerce-checkout #payment ul.payment_methods li .stripe-credit-card-brand {
	width: 16px;
	height: 21px;
	right: 7px;
	margin-top: -11px;
		background-image: url("https://conversionratestore.github.io/projects/mammutmarsch/img/lock.svg");
	}
	
	#wc-stripe-cc-form .form-row.form-row-last {
		position: relative;
	}
	
	#wc-stripe-cc-form .form-row.form-row-last::after {
		content: "";
		position: absolute;
		display: block;
		bottom: 10px;
		right: 7px;
		
		width: 20px;
		height: 20px;
		background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/question.svg") no-repeat;
	}
	
	.wc_payment_methods.payment_methods.methods label {
		font-weight: 600;
	}
	
	.woocommerce-info {
		background-color: transparent;
	}
	
	.custom-payment {
		margin-bottom: 10px;
	} 
	
	.custom-payment p {
		margin: 0;
	}
	
	.custom-payment .title {
		color: #333333;
		font-weight: 300;
font-size: 28px;
line-height: 39px;
	}
	
	.custom-payment .subtitle {
	color: #7F7F7F;
	font-size: 14px;
	}
	
	.woocommerce-input-wrapper label > input {
  opacity: 0;
	}
	
	.custom-check {
		position: absolute;
		display: inline-block;
		width: 18px;
		height: 18px;
	    top: 0;
	    left: -5px;
		background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/check_box_outline.svg") no-repeat;
	}
	
	.place-order [type="checkbox"]:checked + .custom-check{
		background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/check_box.svg") no-repeat;
	}
	.product-mobile {
	 	display: none;
	 }
	
	
	.navbar-custom {
		padding: 15px 0;
		background-color: transparent;
	}
	
		.under-block {
	text-align: center;
	}
.under-block button {

font-size: 14px;
border-radius: 29px;
}
	
	.woocommerce-billing-fields p {
		flex: 100%;
		padding-right: 0 !important;
	}
	
	#wc-stripe-cc-form .form-row.form-row-last::after {
		bottom: 0;
		right: 5px;
	}
	
	
	
	.woocommerce-checkout #payment ul.payment_methods li .stripe-credit-card-brand,
	#wc-stripe-cc-form .form-row.form-row-last::after {
	    transform: scale(0.8);
	}
	
	#birthday_day_field, 
			#birthday_month_field,
			#birthday_year_field {
				max-width: 33.3%;
				
			}
	
	.col-1 {
		padding-top: 30px !important;
		margin-top: 0;
	}
	
	#birthday_day_field, #birthday_month_field {
		padding-right: 8px !important;
	}
	
	.wc-credit-card-form.wc-payment-form {
				flex-wrap: wrap;
				flex-direction: column;
			}
			
			.wc-credit-card-form.wc-payment-form div {
			width: 100%;
			padding: 0 !important;
			}
	
	.navbar-custom ol {
	width: 100%;
		margin: 0;
		display: flex;
		flex-direction: column;
	}
	
	.navbar-custom ol::before {
		width: 3px;
		height: 65%;
		top: 0;
		left: auto;
		right: 0;
	}
	
	.navbar-custom ol::after {
		width: 3px;
		height: 35%;
		bottom: 0;
		left: auto;
		right: 0;	
	}
	
	.navbar-custom li{
		margin: 0 !important;
	}
	
	.checkout.woocommerce-checkout {
		display: flex;
		flex-direction: column;
	}
	
	.wc_payment_method label, .wc_payment_method .description {
		white-space: normal;
	}
	 
	 .table-custom {
	 	display: none;
	 }
	 
	 .product-mobile {
	 	display: block;
	 }
	 
	 .subblock {
	 	display: flex;
	 	justify-content: space-between;
	 }
	 
	 .product-mobile .remove{
	 padding: 0 30px;
	 }
	 
	 .product-mobile p{margin: 0;}
	 
	 .product-mobile {		 	
	 	background: #F5F5F5;
		border-radius: 2px;
	 }
	 
	 .product-mobile .title,
	 .product-mobile .subblock {
	 padding: 8px;
	 }
	 
	 .product-mobile .subblock ~ div {
	 	padding: 8px;
	 	border-top: 1px solid #E5E5E5;
	 	    display: flex;
    justify-content: space-between;
	 }
	 
	 .product-mobile .subblock ~ div p:first-child {
	 	font-weight: 600;
font-size: 16px;
color: #212121;	 	
	 }
	 
	 .product-mobile .subblock ~ div p:last-child {
font-weight: 500;
font-size: 14px;
letter-spacing: 0.03em;

color: #7F7F7F;	
	 }
	 
	 [data-name="total"] {
	 	font-weight: 600 !important;
		color: #212121 !important;
	 }
	 
	 .product-mobile .title {
	 color: #333333;
	 font-weight: 300;
font-size: 28px;
	 }
	 
	 .woocommerce-checkout-payment .row {	 	
    	align-items: flex-start;
	 }
	 
	 .product-mobile .product-name {
	 	color: #7F7F7F;
	 	font-size: 16px;
	 }
	 
	 .product-mobile .remove-text {
	 	bottom: 110%;
	 }
	 
	 .side-block, .side-block, .under-block {
	 	padding: 0;
	 	margin: 0;
	 }
	 
	 .checkout.woocommerce-checkout,
	  .checkout.woocommerce-checkout .col-1, .checkout.woocommerce-checkout .col-2, #order_review, #order_review_heading {
	 	padding: 0;
	 }
	 
	 #order_review {
	 	margin: 0;
	 }
	 
	 .under-block {
	 	background-color: #fff;
	 }
	 
	 .mobile-hide {
	 	display: none !important;
	 }
	 
	 
	 .custom-payment {
	 	padding-top: 30px;
	 }
	 
	 .woocommerce-checkout-payment .row .col-md-6.col-xs-4 img {
	 width: 44px;
height: 28px;
	 }
	 
	 .wc_payment_method.payment_method_stripe .row {
	 	    align-items: center !important;
	 }
	 
	 .showlogin {
	 	display: block;
	 }
	 
	.review {
  border: 1px solid #E5E5E5;
border-radius: 5px;
  padding: 8px;
}

.review p{
  margin: 0;
  line-height: normal;
}

.two-mens {
  float: left;
  margin-right: 10px;
}

.author p {
  color: #333333;
  letter-spacing: 0.03em;
text-transform: uppercase;
  font-weight: bold;
font-size: 14px;
}

.author .date {
  font-weight: normal;
color: #7F7F7F;
margin: 8px 0;
}

.text p {
  margin-top: 8px;
  clear: both;
  color: #888888;
  font-size: 12px;
  line-height: 125%;
}

.side-block {
padding-top: 30px;
}

.big-text {
	display: none;}
	
		.checkout_coupon {
	flex-wrap: wrap;
	}
	
	.checkout_coupon .form-row-first {
	    width: 72% !important;
	}
	
	.checkout_coupon .title {
	font-weight: 300;
font-size: 16px;
flex-basis: 100%;
margin-bottom: 10px !important;
color: #333333
	}
	
	.under-block .remove {
		overflow: hidden;
	}
	
	.under-block .remove-text {
		visibility: visible;
		max-height: 0;
		position: relative;
		margin: 0;
		transition: all 1s ease-in-out;
		margin: 15px !important;
		}
		
		.remove:hover .remove-text {
			  visibility: visible;
			  opacity: 1;
			  max-height: 500px;
			}
			
			.remove-text::after {
				display: none;
			}
			
						.product-wrapper .title, 
			.product-mobile .title {
				padding-top: 20px;
			}
			
		
		</style>
		
		
	`
const customHTML = `
		<nav class="navbar-custom">
			<ol>
				<li>1. Package bestätigen<img style="margin-left: 10px" src="https://conversionratestore.github.io/projects/mammutmarsch/img/check_circle.svg" alt="check"></li>
				<li>2. Teilnehmerdaten eingeben</li>
				<li>3. Antreten und dein bestes geben</li>			
			</ol>		
		</nav>
		<div class="product-mobile">
				<p class="title">Dein Event</p>
				<div class="subblock">
					<p class="product-name"></p>					
				</div>				
				<div>
					<p>Preis</p>
					<p data-name="price"></p>
				</div>
				<div>
					<p>Menge</p>
					<p data-name="number">1</p>
				</div>
				<div>
					<p>Gesamtsumme</p>
					<p data-name="total"></p>
				</div>
			</div>
	`
const sideBlock = `
		<div class="side-block">
			<div class="product-wrapper">
				<p class="title">Produkt</p>
				<div style="border: none;">
					<p class="product-name"></p>
					<p class="product-price"></p>
				</div>				
				<div class="fee-wrapper">
					<p>Bearbeitungsgebühr</p>
					<p data-name="fee"></p>
				</div>
				<div class="coupon-wrapper">
					<p>Coupon: crotest</p>
					<p data-name="coupon-sale"><span class="minus"></span> <span class="cancel">[Entfernen]</span></p>
				</div>
				<div>
					<p>Gesamtsumme</p>
					<p data-name="total"></p>
				</div>
			</div>
			<div class="big-text">
				<p class="grey">UNSERE<br>HANDLUNGEN<br>MACHEN UNS ZU<br>HELDEN.</p>
				<p class="yellow">#MAMMUTMARSCH<br>#EXTREMWANDERN</p>
			</div>
		</div>
	`

document.head.insertAdjacentHTML('beforeend', style)

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

/* intervals */

let isBar = setInterval(() => {
	if ($('.checkout_navigation_bar')) {

		clearInterval(isBar)
		$('.checkout_navigation_bar').insertAdjacentHTML('afterend', customHTML)
	}
}, 200)
let isBilling = setInterval(() => {
	if (
		$('.woocommerce-billing-fields') &&
		$('.checkout.woocommerce-checkout')
	) {
		clearInterval(isBilling)

		$('.woocommerce-billing-fields').insertAdjacentHTML('beforebegin', `<h3>Rechnungsdetails</h3>`)
		$('.checkout.woocommerce-checkout').insertAdjacentHTML('beforeend', sideBlock)
		$('.checkout.woocommerce-checkout').insertAdjacentHTML('beforeend', `
	<div class="under-block">
		<button>Bestellung abschliessen</button>
		<div class="remove">
			<p><img src="https://conversionratestore.github.io/projects/mammutmarsch/img/money-back.svg" alt="money	back">Geld-zurück-Garantie </p>		
			<p class="remove-text">Wir garantieren, dass kein Ticket verfällt! Falls es Covid-bedingt doch nochmal zu einer Absage kommen sollte, kannst du problemlos auf einen anderen Termin umbuchen oder erhältst eine Rückerstattung</p>
		</div>
	</div>
`)
	}
}, 200)
let isPrice = setInterval(() => {
	if (
		$('.cart_item .product-name')?.innerText &&
		$('.woocommerce-Price-amount.amount') &&
		$('.order-total .woocommerce-Price-amount.amount')?.innerHTML &&
		$(`.product-wrapper [data-name="total"]`) &&
		$$('.product-wrapper [data-name="price"]') &&
		$(`.product-wrapper .product-price`)
	) {
		clearInterval(isPrice)

		let name = ($(`.cart_item .product-name`).innerText).trim()
		let price = $(`.woocommerce-Price-amount.amount`).innerHTML.split('<span')[0] + '€'
		let total = $(`.order-total .woocommerce-Price-amount.amount`).innerHTML.split('<span')[0] + '€'

		$('.product-wrapper .product-name').innerText = name
		$('.product-wrapper .product-price').innerText = price

		$('.product-wrapper [data-name="total"]').innerText = total

		$('.product-mobile .product-name').innerText = name
		$('.product-mobile [data-name="price"]').innerText = price
		$('.product-mobile [data-name="total"]').innerText = total
	}
}, 200)
let isCoupon = setInterval(() => {
	if ($('.product-wrapper') && $('.checkout_coupon') && $('#coupon_code')) {
		clearInterval(isCoupon)

		$('.checkout_coupon').insertAdjacentHTML('afterbegin', `<p class="title">Gutschein</p>`)
		$('.product-wrapper').after($('.checkout_coupon'))
		$('.checkout_coupon').insertAdjacentHTML('beforeend', `
	<button class="custom-coupon"></button>	
`)
		$('#coupon_code').placeholder = 'Gutschein / Rabattcode'
	}
}, 200)
let isCancel = setInterval(() => {
	if ($('.coupon-wrapper .cancel') && $('.woocommerce-remove-coupon')) {
		clearInterval(isCancel)

		$('.coupon-wrapper .cancel').addEventListener('click', () => {
			$('.woocommerce-remove-coupon').click()

			if ($('.coupon-wrapper').classList.contains('show')) {
				$('.coupon-wrapper').classList.remove('show')
			}
			if ($('.custom-coupon').classList.contains('applied')) {
				$('.custom-coupon').classList.remove('applied')
			}
		})
	}

}, 500)
let isCustomCoupon = setInterval(function () {
	if ($('[name="apply_coupon"]') && $('.custom-coupon')) {
		clearInterval(isCustomCoupon)

		$('[name="apply_coupon"]').value = ''

		$('.custom-coupon').addEventListener('click', () => {
			$('[name="apply_coupon"]').click()

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: Checkout improvements',
				'eventAction': 'Promo code apply click',
			})

			console.log('eventAction Promo code apply click')
		})
	}
}, 200)

let isGreenBtn = setInterval(() => {
	if ($('.under-block button') && $('.button#place_order.button.alt')) {
		clearInterval(isGreenBtn)

		$('.under-block button').addEventListener('click', () => {
			$('.button#place_order.button.alt').click()

			window.dataLayer = window.dataLayer || []
			dataLayer.push({
				'event': 'event-to-ga',
				'eventCategory': 'Exp: Checkout improvements',
				'eventAction': 'Click on Place Order',
			})
		})
	}
}, 200)
let isName = setInterval(() => {
	if (
		$('select[name="title"] option') &&
		$('select[name="birthday_day"] option') &&
		$('select[name="birthday_month"] option') &&
		$('select[name="birthday_year"] option') &&
		$('select[name="billing_country"] option')
	) {
		clearInterval(isName)

		$('select[name="title"] option').innerText = 'Bitte auswählen'
		$('select[name="birthday_day"] option').innerText = 'DD'
		$('select[name="birthday_month"] option').innerText = 'MM'
		$('select[name="birthday_year"] option').innerText = 'YY'
		$('select[name="billing_country"] option').innerText = 'Bitte auswählen'
	}
}, 200)
let isSize = setInterval(() => {
	if($('select[name="size"] option')) {
		$('select[name="size"] option').innerText = 'Bitte auswählen'
	}
}, 200);
let isComment = setInterval(() => {
	if ($('.checkout_coupon') && $('#payment')) {
		clearInterval(isComment)
		$('.checkout_coupon').after($('#payment'))
		$('.checkout_coupon').insertAdjacentHTML('afterend', `
		<div class="review">
  <div class="header">
      <img class="two-mens" src="https://conversionratestore.github.io/projects/mammutmarsch/img/two_mens.svg" alt="two mens">
    
    <div class="author">
      <p>Matthias Schipper</p>
      <p class="date">05/12/2020</p>
      <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/stars_group.svg" alt="">
    </div>
    <div class="text">
      <p>Es hat einen riesen Spaß gemacht. Von meiner Seite aus war alles in Ordnung.<br>Vielen Dank</p>
    </div>
  </div>
</div>
	`)
		$('#payment').insertAdjacentHTML('beforebegin', `
	<div class="custom-payment">
	<p class="title">Bezahlung</p>
	<p class="subtitle">Alle Transaktionen sind gesichert und verschlüsselt.</p>
</div>`)
	}
}, 200)
let isLoginForm = setInterval(() => {
	if($('.woocommerce-form-login') && $('.woocommerce-billing-fields') && $$('.woocommerce-info')[0]) {
		clearInterval(isLoginForm)

		$('.woocommerce-billing-fields').before($$('.woocommerce-info')[0])
		$('.woocommerce-billing-fields').before($('.woocommerce-form-login'))	
		$$('.woocommerce-info')[1].innerHTML = `\n\t\tHast du bereits ein Kundenkonto? <a href="#" class="showlogin">Klicke hier, um dich anzumelden.</a>\t`
		$$('.woocommerce-info')[1].classList.add('logged')
	}
}, 200)

/* mut functions */
function isAppliedCoupon() {
	if ($('.woocommerce-remove-coupon') && $('.cart-discount.coupon-crotest .woocommerce-Price-amount.amount') && $('.coupon-wrapper .cancel')) {

		$('[data-name="coupon-sale"] .minus').innerText = '-' + $('.cart-discount.coupon-crotest .woocommerce-Price-amount.amount').innerText

		$('.custom-coupon').classList.add('applied')
		$('.coupon-wrapper').classList.add('show')

	} else if ($('.coupon-wrapper') && $('.custom-coupon')) {
		$('.coupon-wrapper').classList.remove('show')
		$('.custom-coupon').classList.remove('applied')
	}

}
function isFee() {
	if (
		$('.fee .woocommerce-Price-amount.amount') &&
		$(`.product-wrapper [data-name="fee"]`) && $(`.product-wrapper [data-name="total"]`) && $(`.order-total .woocommerce-Price-amount.amount`)
	) {

		let fee = $(`.fee .woocommerce-Price-amount.amount`).innerHTML.split('<span')[0] + '€'
		let total = $(`.order-total .woocommerce-Price-amount.amount`).innerHTML.split('<span')[0] + '€'

		$(`.product-wrapper .fee-wrapper`).classList.add('show')
		$(`.product-wrapper [data-name="fee"]`).innerText = fee
		$(`.product-wrapper [data-name="total"]`).innerText = total

		$(`.product-mobile [data-name="total"]`).innerText = total

	} else if ($(`.order-total .woocommerce-Price-amount.amount`) && $(`.product-wrapper .fee-wrapper`) && $(`.product-wrapper [data-name="fee"]`) && $(`.product-wrapper [data-name="total"]`)){
		let total = $(`.order-total .woocommerce-Price-amount.amount`).innerHTML.split('<span')[0] + '€'

		$(`.product-wrapper .fee-wrapper`).classList.remove('show')
		$(`.product-wrapper [data-name="fee"]`).innerText = ''
		$(`.product-wrapper [data-name="total"]`).innerText = total

		$(`.product-mobile [data-name="total"]`).innerText = total
	}
}
function isBr() {
	if ($('#wc-stripe-cc-form br')) {

		$('#wc-stripe-cc-form br').remove()
	}
}
function isCheckbox() {
	if ($$('.place-order [type="checkbox"]')[2] && !$('.custom-check')) {
		$$('.place-order [type="checkbox"]')[1].insertAdjacentHTML('afterend', `<p class="custom-check"></p>`)
		$$('.place-order [type="checkbox"]')[2].insertAdjacentHTML('afterend', `<p class="custom-check"></p>`)
	}
}
function addDark() {
	if ($('.wc_payment_method [checked]')) {
		if ($('.dark')) {
			$('.dark').classList.remove('dark')
		}
		$('.wc_payment_method [checked]').closest('.row').querySelector('.col-xs-6 label').classList.add('dark')
	}
}
function reorder() {
	if ($('.payment_method_stripe img')?.src) {
		$('.payment_method_stripe img').src = 'https://conversionratestore.github.io/projects/mammutmarsch/img/card_group.svg'
	}

}
function isBtnForward() {
	if ($('.woocommerce-message .button.wc-forward') && $('.subblock') && !$('.subblock .remove')) {
		console.log('yes')
		$('.subblock').insertAdjacentHTML('beforeend', `<div class="remove"><img src="https://conversionratestore.github.io/projects/mammutmarsch/img/delete.svg" alt="remove"></div>`)

		let isRemove = setInterval(() => {
			if ($('.subblock .remove')) {
				clearInterval(isRemove)
				$('.subblock .remove').addEventListener('click', () => {
					$('.woocommerce-message .button.wc-forward').click()

					window.dataLayer = window.dataLayer || []
					dataLayer.push({
						'event': 'event-to-ga',
						'eventCategory': 'Exp: Checkout improvements',
						'eventAction': 'Click on Remove item',
					})

					console.log('eventAction Click on Remove item')
				})
			}
		}, 200)
	}
}

/* mut observer */
let isOrder = setInterval(() => {
	if($('#order_review')) {
		clearInterval(isOrder)

		let target = $('#order_review')
		let config = {
			attributes: true,
			childList: true,
			subtree: true,
		}

		let observer = new MutationObserver((mutationsList) => {
			observerTimeout()
		})

		function observerTimeout() {
			observer.disconnect()
			reorder()
			addDark()
			isAppliedCoupon()
			isBtnForward()
			isBr()
			isCheckbox()
			isFee()
			observer.observe(target, config)
		}

		observer.observe(target, config)
	}
}, 100)

console.log('eventAction loaded')

window.dataLayer = window.dataLayer || []
dataLayer.push({
	'event': 'event-to-ga',
	'eventCategory': 'Exp: Checkout improvements',
	'eventAction': 'loaded',
})

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
hj('event', 'checkout_improvements')
