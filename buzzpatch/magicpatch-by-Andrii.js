let start = setInterval(() => {
    if (document.querySelector('.js-heading .col-lg-7 img') && document.querySelectorAll('.package img')[3]) {
        clearInterval(start);

        document.head.insertAdjacentHTML(
            'beforeend',
            `
                <style>
                    .main-content {
                        padding-top: 0;
                    }
                    .announcement-container {
                        display: none;
                    }
                    .shipping-noti {
                        background: #ff3c7f;
                        padding: 10px 15px;
                    }
                    .shipping-noti h3 {
                        font-family: 'Roboto', sans-serif;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 16px;
                        text-align: center;
                        text-transform: none;
                        margin-bottom: 0;
                    }
                    .shipping-noti h3 span {
                        margin: 0 1em;
                    }
        
                    .js-main header .navbar {
                        padding: 15px !important;
                    }
                    header .js-title, 
                    .how-it-works__title .js-title {
                        font-weight: normal;
                        font-size: 34px;
                        line-height: 120%;
                        letter-spacing: 0.02em;
                        text-transform: uppercase;
                        text-align: left !important;
                    }
                    header nav .js-btn.btn-primary {
                        font-size: 16px !important;
                        padding: 14px 26% !important;
                    }
                    header .js-heading .js-btn.btn-primary {
                        margin-top: 0 !important;
                    }
                    .trust-rating img {
                        width: 100%;
                    }
                    .js-heading .js-btn.btn-primary {
                        max-width: 345px !important;
                    }
                    section.js-mobile {
                        display: none;
                    }
                    section.js-mobile.transparent {
                        display: block;
                        background: #eceef0;
                        z-index: 1;
                        position: relative;
                        margin-top: -35%;
                        padding-bottom: 0;
                    }
                    .js-mobile.wave-bg {                        
                        margin-top: -115px;
                    }
                    .js-mobile.wave-bg img{
                        width: 100%;
                    }
                    #flowers .col-sm-4,
                    .effectiveness .col-sm-4 {
                        width: 25%;
                    }
                    #flowers .col-sm-8,
                    .effectiveness .col-sm-8 {
                        width: 75%;
                    }
                    #flowers h3,
                    .effectiveness h3 {
                        font-size: 22px;
                        font-family: 'Roboto', sans-serif;
                        text-transform: none;
                        line-height: 26px;
                        color: #0c0b0b;
                        letter-spacing: 0;
                        text-align: left;
                        margin-bottom: 0;
                    }
                    .material-free {
                        margin-top: 30px;
                    }
                    .material-free p {
                        position: relative;
                        width: 166px;
                        font-weight: bold;
                        font-size: 18px !important;
                        text-align: center;
                        letter-spacing: 0.03em;
                        text-transform: uppercase;
                        color: #ff3c7f;
                        padding: 15px 10px;
                        border: 2px solid #ffffff;
                        border-radius: 20px;
                        margin: 0 auto 25px;
                    }
                    .material-free p::before {
                        position: absolute;
                        content: '100%';
                        top: -13px;
                        left: 51px;
                        color: #fff;
                        background: #ECEEF0;
                        padding: 0 10px;
                        font-weight: bold;
                        font-size: 16px;                        
                    }
                    .material-free p::after {
                        position: absolute;
                        content: 'Product';
                        bottom: -14px;
                        left: 35px;
                        color: #fff;
                        background: #ECEEF0;
                        padding: 0 10px;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .itch-advantages-wrapper {
                        text-align:center;
                    }
                    .itch-advantages-wrapper .js-title {
                        font-size: 36px;
                        margin: 0;
                    }
                    .itch-advantage {
                        margin-top: 40px;
                    }
                    .itch-advantage p {
                        margin-top: 15px;
                        font-size: 18px;
                        line-height: 150%;      
                        color: #212529;
                    }
                    section.children {
                        display: none;
                    }
                    .how-it-works {
                        padding: 0;
                        margin-top: -100px;
                        z-index: 1;
                        background-color: #ECEEF0;
                    }
                    .how-it-works__title {
                        display: flex;
                        justify-content: center;
                        gap: 10px;
                        margin-bottom: 20px;
                    }
                    .how-it-works__title img {
                        width: 45px;
                        height: 45px;
                    }
                    .how-it-works__body {
                        display: flex;
                        flex-direction: column;
                    }
                    .how-it-works__body > div {
                        z-index: 1;
                    }
                    .how-it-works__body img {
                        border-radius: 50%;
                    }
                    .how-it-works__body p {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px !important;
                        color: #212529;
                        margin: 10px 0 0;
                    }
                    section.included {
                        display: none;
                    }
                    .first-step {
                        margin-left: 15px;                        
                        z-index: 2 !important;
                    }
                    .second-step {
                        position: relative;
                        margin-left: auto;
                    }
                    .second-step::before {
                        position: absolute;
                        content: url("https://conversionratestore.github.io/projects/buzzpatch/img/Vector4.svg");
                        top: -70px;
                        left: -74px;
                        z-index: -1;
                        transform: scale(1.3);
                    }
                    .second-step::after {
                        position: absolute;
                        content: url("https://conversionratestore.github.io/projects/buzzpatch/img/Vector5.svg");
                        bottom: -70px;
                        left: -88px;
                        z-index: -1;
                        transform: scale(1.3);
                    }
                    .step-content {
                        min-width: 121px;
                        max-width: 152px;
                        height: auto;
                        text-align: center;
                    }
                    .mosquito-img {
                        width: 121px;
                        height: 121px;
                    }
                    .patch-img {
                        width: 152px;
                        height: 152px;
                    }
                    .bite-img{
                        width: 135px;
                        height: 135px;
                    }  
                    .returns, .faqs {
                        display: none;
                    }     
                       
                    .returns.returns_active,
                    .faqs.faqs_active{
                        display: block;
                    }
                    .faqs-advantage {
                        margin-bottom: 40px;
                    }
                    .faqs-advantage__title {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        margin-bottom: 15px;
                    }
                    .faqs-advantage__title p{
                        margin: 0;
                        font-weight: 600 !important;
                        font-size: 22px !important;
                        color: #212529;
                    }
                    .faqs-advantage__title p span {
                        color: #FF3C7F;
                    } 
                    .faqs-advantage p{
                        font-weight: normal;
                        font-size: 18px !important;
                        line-height: 150% !important;
                        color: #212529;
                        margin: 0;
                    }
                    .faqs.faqs_active .js-title {
                        margin-bottom: 20px;
                        font-size: 36px !important;
                    }
                    .faqs.faqs_active #js-accordion .card-link {
                        padding: 20px 20px 20px 30px !important;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    .faqs.faqs_active #js-accordion .card {
                        border: none !important;
                    }
                    .faqs.faqs_active .card-link {
                        background-image: url("https://cdn.shopify.com/s/files/1/0387/0749/4956/files/plus.svg?v=1620275333");
                        background-size: 18px;
                        background-position: left center;
                        background-repeat: no-repeat;
                    }
                    .faqs.faqs_active #js-accordion .card-link:hover {
                        color: red;
                    }
                    .faqs.faqs_active #js-accordion p {
                        font-size: 14px !important;                        
                    }
                    .faqs.faqs_active #js-accordion .card-body {
                        margin: 0 !important;
                        padding: 0 0 0 30px !important;
                        background: transparent;
                    }
                    section.purchase .js-title {
                        display: none;
                    }
                    section.featured-reviews {
                        margin-top: -100px;
                        padding: 0;
                        background-color: #ECEEF0;
                    }
                    .featured-reviews .js-title {
                        font-size: 36px !important;
                    }
                    .carousel-wrapper {
                       margin: 15px;
                       border-radius: 12px;
                       box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
                    }
                    .carousel__slide {
                        padding: 30px;
                        background: #FFFFFF;                       
                        border-radius: 12px;
                    }
                    .carousel__slide p{
                        margin: 15px 0 25px !important;
                        font-size: 14px !important;
                        line-height: 130% !important;
                    }
                    .carousel__img-wrapper img {
                        width: 100%;
                        height: 245px;
                        object-fit: cover;
                    }
                    .meta {                        
                        display: flex;
                        justify-content: space-between;
                        align-content: space-between;
                        max-width: 290px;
                        margin: 15px auto;
                    }
                    .meta .name {
                        font-weight: bold;
                        font-size: 18px;
                        color: #0C0B0B;
                    }
                    .meta .date {
                        font-weight: normal;
                        font-size: 14px;
                        color: #999999;
                    }
                    .tns-nav {
                        margin-top: 10px;
                        text-align: center;
                    }
                    .tns-nav button {
                        background-color: #999999; 
                        border-radius: 50%;
                        margin: 0 10px;
                        padding: 0;
                        width: 10px;
                        height: 10px;
                    }
                    .tns-nav button.tns-nav-active {
                        background-color: #FF3C7F;                         
                    }
                    .package h2{
                        font-size: 36px !important;
                    }
                    .package p {
                        color: #6F6F6F;
                        font-size: 18px;
                    }
                    .package .sub,
                    .package .star {
                        display: none;
                    }
                    .package .bestseller {
                        border-radius: 3px 3px 0px 0px;
                        padding: 3px 20px !important;
                    }
                    .package .grey {
                        padding: 15px 10px 20px!important;
                    }
                    .js-packs input[type="radio"] + label {
                        border-radius: 6px !important;
                        font-size: 20px !important;
                        padding: 22px 15px !important;
                    }
                    .js-packs input[type="radio"]:not(input[type="radio"]:first-child) + label {
                        border-radius: 0 6px 6px 6px !important;
                    }
                    .prices .js-total {
                        font-size: 24px !important;
                        color: #0C0B0B;
                    }
                    .package .js-strike {
                        text-decoration: none !important;
                    }
                    .package #getNow {
                        background-color: #fff;
                    }
                    .package #getNow img.days {
                        width: 100%;
                        max-width: 320px;
                        margin-top: 25px;
                    }
                </style>
            `,
        );

        let linkCustom = document.createElement('link');
        linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
        linkCustom.rel = 'stylesheet';
        document.head.appendChild(linkCustom);

        let scriptCustom = document.createElement('script');
        scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
        scriptCustom.async = false;
        document.head.appendChild(scriptCustom);

        document.querySelector('.navbar.navbar-expand-lg.static-top').insertAdjacentHTML(
            'beforebegin',
            `
            <div class="shipping-noti ">     
                <h3>Free shipping <span>|</span> 365-day Money Back Guarantee</h3>          
            </div>
        `,
        );

        document.querySelectorAll('header .js-title')[0].innerText = 'Get rid of mosquito bites for up to 7 days with instant itch relief patches';
        document.querySelectorAll('header .js-title')[0].insertAdjacentHTML(
            'afterend',
            `
                <div class="trust-rating">
                    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/trust-rating.svg?v=1618830266">
                </div>
                `,
        );

        document.querySelector('.js-heading .col-lg-7 img').src = 'https://conversionratestore.github.io/projects/buzzpatch/img/itch-relief-patches.png';
        document.querySelector('.js-heading .col-lg-7 img').style.cssText = 'height: 220px; object-fit: cover;';

        document.querySelector('section.js-mobile').insertAdjacentHTML(
            'afterend',
            `
            <div class="js-mobile wave-bg">
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%">
            </div>
            <section class="js-mobile transparent" id="flowers">
                <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-4">
                    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/100.svg?v=1619946146" width="54" class=" ls-is-cached lazyloaded">
                    </div> 
                    <div class="col-md-8 col-sm-8 col-xs-8">
                    <h3 class="js-title text-dark">100% natural content &amp; chemical free </h3>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-sm-12">
                    <p style="font-size: 18px !important;"><br>Our Itch Relief Patches contain no chemicals. They work kinesthetically!</p>
                    </div>
                </div>
                <div class="row material-free">
                    <p>Latex FREE</p>
                    <p>benedryl FREE</p>
                </div>
                </div>
                <div class="flowers-bg" style="overflow: hidden;">  
                <img style="transform: rotate(11deg);" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg.png?v=1619945827">
                </div>          
                <div class="js-mobile wave-bg" style="margin-top: -79px;"> 
                <img style="transform: scaleX(-1);" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876">
                </div>   
            </section>
            <section class="itch-advantages-wrapper">
                <div class="container">
                <h2 class="js-title text-dark">why itch relief patches</h2>
                
                <div class="itch-advantage">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/30-minutes.svg" alt="advantage">
                    <p>Stop the itching<br> in 30-60 seconds</p>
                </div>
                <div class="itch-advantage">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/waterproof.svg" alt="advantage">
                    <p>Waterproof</p>
                </div>
                <div class="itch-advantage">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/australia.svg" alt="advantage">
                    <p>Made in Australia</p>
                </div>
                </div>
           
            </section>
            <div class="js-mobile wave-bg" style="margin-top: -20px;">
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%">
            </div>
            <section class="how-it-works">
                <div class="container">
                    <div class="how-it-works__title">
                        <h2 class="js-title text-dark">HOW IT WORKS</h2>
                        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/buzzpatch-smiley.svg?v=1589076559" alt="smile">
                    </div>
                    <div class="how-it-works__body">
                        <div class="first-step">
                            <div class="step-content">
                                <img class="mosquito-img" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/thumb1.jpg?v=1624809938" alt="">
                                <p>Mosquito bites</p>
                            </div>
                            
                        </div>
                        <div class="second-step">
                            <div class="step-content">
                                <img class="patch-img" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/thumb2.jpg?v=1624809939" alt="">
                                <p>Grab an itch relief patch</p>
                            </div>
                        </div>
                        <div>
                            <div class="step-content">
                                <img class="bite-img" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/thumb3.jpg?v=1624809938" alt="">
                                <p>Apply to bite</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div class="js-mobile wave-bg" style="margin-top: 40px;"> 
                <img style="transform: scaleX(-1);" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876">
                </div>
            </section>
            <section id="faqs" class="faqs faqs_active">
                <div class="container">
                    <div class="row">
                        <div class="faqs-advantage col-lg-12">
                            <div class="faqs-advantage__title">
                                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/7days.svg" alt="7 days">
                                <p>Effective up to <span>7 days</span></p>
                            </div>
                            <p>Our Itch Relief Patches will start working in 30-60 seconds to relieve the itch, and can last for up to 7 days (and are completely waterproof)</p>
                            </div>                        
                    </div>
                    <div class="row ">
                        <div class="faqs-advantage col-lg-12">
                            <div class=" faqs-advantage__title">
                                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/shield.svg" alt="7 days">
                                <p>Grid-Relief Technology</p>
                            </div>
                            <p>Using our Grid-Relief Technology, our Itch Relief patches mechanically lift the skin (no chemicals) to drain the lymphatic system which has been injected by the mosquito's saliva that causes the itch.</p>
                        </div>
                        
                    </div>
                    <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-left "> 
                        <h2 class="js-title big  text-dark">FAQ</h2>
                    </div>  
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div id="js-accordion">   
                                <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapse1">
                                     How do they work? </a>
                                </div>
                                <div id="collapse1" class="collapse" data-parent="#js-accordion">
                                    <div class="card-body">
                                    <p>The cross shape of the tape when stretched across the skin, adjust the skin to increase lymphatic flow, and help drain the mosquito saliva which is what causes the itch.</p>
                                    </div>
                                </div>
                                </div> 

                                <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapse2">
                                    How long will sealed pack last?
                                    </a>
                                </div>
                                <div id="collapse2" class="collapse" data-parent="#js-accordion">
                                    <div class="card-body">
                                        <p>BuzzPatch when sealed will last up to 24 months.</p>
                                    </div>
                                </div>
                                </div>  
                                <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapse3">
                                     Where are BuzzPatch stickers made?
                                    </a>
                                </div>
                                <div id="collapse3" class="collapse" data-parent="#js-accordion">
                                    <div class="card-body">
                                        <p>Patches are formulated and designed in Australia.</p>
                                    </div>
                                </div>
                                </div> 

                                <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapse4">
                                   How many do you need?
                                    </a>
                                </div>
                                <div id="collapse4" class="collapse" data-parent="#js-accordion">
                                    <div class="card-body">
                                        <p>One per mosquito bite.</p>
                                    </div>
                                </div>
                                </div> 

                                <div class="card">
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#collapse5">
                                     How long will shipping take?
                                    </a>
                                </div>
                                <div id="collapse5" class="collapse" data-parent="#js-accordion">
                                    <div class="card-body">
                                    <p> All orders are dispatched the same day, and usually take 3-5 days to USA, Canada and Australia. However, with current travel restrictions, we’re seeing shipping times range between 10-15 days, and in some cases up to 25 days.</p>
                                    </div>
                                </div>
                                </div>                                                               
                            </div>
                        </div>
                    </div>
                </div>                  
            </section>
            <section id="returns" class="returns returns_active">
        <div class="container">
          
          <div class="row conditions">
              <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                <div class="js-light-border d-flex align-items-center ">
                  <div class="inside">
                    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/return_833dfe43-74f7-4563-9c21-5e80c60dc10f.svg">
                    <p>Easy 30 day returns</p>
                  </div> 
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6  text-center">
                <div class="js-light-border d-flex align-items-center ">
                  <div class="inside">
                    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/information_753ef69e-53ca-4b26-afa7-6e6176851932.svg">
                    <p>24/7 customer service</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                <div class="js-light-border d-flex align-items-center ">  
                  <div class="inside">
                    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/shopping-bag_db934463-117d-4dc2-9ef2-7cf1159b6619.svg">
                    <p>100% secure checkout</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                <div class="js-light-border  d-flex align-items-center "> 
                  <div class="inside">
                    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/shipped_06643050-154f-4913-b075-6ee0bb162832.svg">
                    <p>Free shipping worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row js-heading">
              <div class="col-lg-10 text-center js-auto">
                  <a href="#getNow" class="btn js-btn btn-primary get-it">GET IT NOW!</a>
              </div>
            </div>
        </div>
        </section>
        <div class="js-mobile wave-bg" style="margin-top: -20px;">
            <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%">
        </div>
        <section id="featured-reviews" class="featured-reviews">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center ">
                        <h2 class="js-title   text-dark">Why people love <br> itch relief patches</h2>
                    </div>  
                </div>    
                
            </div>    
            <div class="carousel-wrapper">
            <div class="carousel">
                <div class="carousel__slide">
                    <div class="carousel__img-wrapper">
                        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426" alt="">
                    </div>
                    <div class="meta">
                        <span class="name">Fadya A.</span> <span class="date">07/31/2020</span>
                    </div>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=1620911084">
                    <p>The sticker itself is very good quality, I was worried it would fall but the glue is very good and I changed the location of the sticker more than once and it never fell!  Didn't get any mosquito bites, I started to think something works with those little birds!
                    Other than that, I had the best experience ordering, following up and exchanging emails since my order was few days delayed. I really can’t be happier with this whole experience!</p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=1620910794" alt=" ">  
                </div>                
                <div class="carousel__slide">
                    <div class="carousel__img-wrapper">
                        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426" alt="">
                    </div>
                    <div class="meta">
                        <span class="name">J***k</span> <span class="date">06/19/2020</span>
                    </div>
                    <img class="d-block " src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=1620911084">
                    <p>Love them and so do my kids! From what I can tell they do help keep away mosquitoes! Will buy more! Great seller. Shipping to Canada came from within canada seller must have a supplier in Canada leading to speedy delivery! </p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=1620910794" alt=" ">  
                </div>                
                <div class="carousel__slide">
                    <div class="carousel__img-wrapper">
                        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426" alt="">
                    </div>
                    <div class="meta">
                        <span class="name">Lauren S.</span> <span class="date">07/13/2020</span>
                    </div>
                    <img class="d-block " src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=1620911084">
                    <p>We just took the patches on a camping trip. We have an 8 month old so therefore I'm hesitant to put much on her to protect her from the mosquitos and it's still quite buggy where we are, so the patches were an awesome option. For the most part, they help immensely! On very, very buggy hikes, they didn't necessarily fend absolutely all of the mosquitos off, but did a pretty good job.
                    </p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=1620910794" alt=" "> 
                </div>                
                <div class="carousel__slide">
                    <div class="carousel__img-wrapper">
                        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426" alt="">
                    </div>
                    <div class="meta">
                    <span class="name">Joanne</span> <span class="date">06/28/2020</span>
                    </div>
                    <img class="d-block " src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=1620911084">
                    <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)</p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=1620910794" alt=" "> 
                </div>                
            </div>
            </div>
            
            <div class="js-mobile wave-bg" style="margin-top: 40px;"> 
                <img style="transform: scaleX(-1);" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876">
            </div>
        </section>
        `,
        );
    }

    let categoryInterval = setInterval(() => {
        if (typeof tns == 'function') {
            clearInterval(categoryInterval);

            let sliderCategories = tns({
                container: '.carousel',
                items: 1,
                autoplay: false,
                controls: false,
                loop: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                nav: true,
                preventScrollOnTouch: 'auto',
                swipeAngle: 30,
                autoHeight: true,
            });
        }
    }, 200);

    let navInterval = setInterval(() => {
        if (document.querySelector('.tns-nav')) {
            clearInterval(navInterval);
            document.querySelector('.carousel-wrapper').insertAdjacentElement('afterend', document.querySelector('.tns-nav'));
        }
    }, 200);

    document.querySelector('.package .sub').insertAdjacentElement('beforebegin', document.querySelectorAll('.package img')[2]);

    document.querySelectorAll('.package img')[3].remove();

    document.querySelector('.package #getNow').insertAdjacentHTML(
        'beforeend',
        `
        <img class="days" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day.png?v=1618147802">
    `,
    );
}, 100);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    event: 'event-to-ga',
    eventCategory: 'Exp — MagicPatch page appearance mobile',
    eventAction: 'loaded',
});

(function (h, o, t, j, a, r) {
    h.hj =
        h.hj ||
        function () {
            (h.hj.q = h.hj.q || []).push(arguments);
        };
    h._hjSettings = { hjid: 2247058, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.hj =
    window.hj ||
    function () {
        (hj.q = hj.q || []).push(arguments);
    };
hj('trigger', 'magicpatch_page_appearance_mobile');
