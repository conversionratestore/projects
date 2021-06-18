window.onload  = function () {
    $('body').prepend(`
    <style>
    @media (max-width: 767px) {
        .js-main header {
            min-height: 750px;}
        #returns .conditions .d-flex {
            padding: 10px 12px; }
        #returns .js-light-border {
            border-width: 1px;}
        #children-safe {
            display: none; }
        .shipping-noti {
            background: #ff3c7f;
            padding: 8px 0;}
        .shipping-noti h3 {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            text-transform: none;
            margin-bottom: 0;}
        .shipping-noti span {
            margin-left: 20px;
            margin-right: 20px;}
        .main-content {
            padding-top: 0;}
        .js-iphone .js-logo img, .js-iphone header .fixed-top .js-logo img {
            width: 60px;}
        .bitepatch-template header nav .js-btn.btn-primary {
            font-size: 16px;
            padding: 14px 26px;
            margin: 0;
            letter-spacing: 0.05em;
            min-width: 164px;}
        .js-iphone header {
            overflow: hidden;
            margin-bottom: 0;
            padding-bottom: 0;}
        .js-iphone header .navbar {
            padding: 8px 15px!important;}
        header .js-title {
            letter-spacing: 0.02em;
            line-height: 58px;
            text-align: left;}
        .trust-rating {
            margin: 0 auto;
            max-width: 345px;}
        .trust-rating img {
            width: 100%;}
        .wrapper .js-heading .js-btn.btn-primary, #purchase .package .js-heading .js-btn.btn-primary {
            font-size: 16px;
            margin-top: 15px;
            margin-bottom: 34px;
            padding: 20.5px 20px;
            letter-spacing: 0.05em;
            max-width: 345px;}
        header .js-heading .col-lg-7 img {
            transform: rotate(13.28deg);
            width: 316.48px;
            margin: 0 auto;}
        .wrapper header a.btn.js-btn.btn-primary.get-it {
            margin-top: 0;}
        header .js-mobile.wave-bg {
            height: 17.6vw}
        #flowers {
            padding-bottom: 0;
            background-color: #ECEEF0;}
        #flowers p {
            font-size: 18px!important;
            line-height: 27px!important; }
        #flowers p br {
            display: none;}
        #flowers .js-title {
            font-size: 22px;
            line-height: 130%;
            text-align: left;
            font-weight: 600;}
        #flowers .col-sm-8, .effectiveness .col-sm-8 {
            width: 78%;}
        #flowers .col-sm-4, .effectiveness .col-sm-4 {
            width: 22%;}
        .free-block_top, .free-block_bottom {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background: #ECEEF0;
            padding: 0 10px;
            color: #FFFFFF;
            font-weight: 700;}
        .free-block_top {
            top: -11px;
            font-size: 16px;
            line-height: 22px;}
        .free-block_bottom {
            bottom: -8px;
            font-size: 12px;
            line-height: 16px;}
        .free-blocks {
            padding: 0 15px;}
        .free-block {
            border: 2px solid #FFFFFF;
            border-radius: 20px;
            position: relative;
            font-weight: 700;
            font-size: 18px;
            line-height: 52px;
            text-align: center;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            width: calc(50% - 6px);
            margin-right: 12px;
            margin: 30px 12px 30px 0;
            color: #FF3C7F;}
        .free-block:nth-child(2n+2) {
            margin-right: 0;}
        .flowers-bg, #flowers .wave-bg {
            transform: scaleX(-1);}
        #flowers .wave-bg {
            margin-top: -96px;}
        #relief {    
            background: #fff;
            position: relative;
            z-index: 2;}
        .wrapper h2.js-title, #purchase .package h2{
            font-weight: 400;
            letter-spacing: 0.02em;
            font-size: 36px;
            line-height: 120%;}
        #purchase .package h2, .package p, #getNow img{
            order: 1;}
        .package .form, #purchase .prices, .package .js-heading .js-btn.btn-primary, #purchase #getNow img.mc {
            order: 2;}
        #relief .wave-bg {
            height: 45px;}
        #relief img {
            display: block;}
        #how-work {
            background: #eceef0;
            z-index: 2;
            order: 1;
            padding-bottom: 0;
            position: relative;}
        #how-work .js-title img {
            width: auto;}
        #how-work p {
            font-size: 14px!important;
            line-height: 18px!important;}
        .steps img {
            margin: 0 auto;
            border-radius: 50%;
            width: auto;}
        .step {
            width: fit-content;}
        .steps {
            margin: 0 auto;
            padding-top: 20px;
            max-width: 345px;}
        .step-img {
            margin-bottom: 10px;
            z-index: 1;
            position: relative;}
        .step_1 {
            margin-bottom: -45px;
            margin-left: 23px;}
        .step_1 .step-img:before, .step_3 .step-img:before {
            content: '';
            position: absolute;
            background: no-repeat center / contain;
            z-index: -1;
            width: 100px;
            height: 127px;}
        .step_1 .step-img:before{
            background-image: url('https://conversionratestore.github.io/projects/buzzpatch/img/line-1.svg');
            left: 78%;
            top: 45px;}
        .step_2 .step-img{
            z-index: 2;}
        .step_3 {
            margin-top: -65px;}
        .step_3 .step-img:before {
            background-image: url('https://conversionratestore.github.io/projects/buzzpatch/img/line-2.svg');
            left: 84%;
            bottom: 55px;}
        .steps .ml-auto{
            margin-right: 0!important;}
        #how-work .wave-bg {
            transform: scaleX(-1);}
        .bitepatch-template .main-content .wrapper {
            display: flex;
            flex-direction: column;}
        .js-main {
            order: 1;}
        #faqs {
            order: 2;}
        #returns {
            padding-bottom: 0;
            order: 3;}
        #returns .js-mobile.wave-bg {
            height: 18.6vw;}
        #featured-reviews {
            background: #ECEEF0;
            padding-bottom: 0;
            order: 4;}
        #purchase {
            order: 5;}
        footer {
            order: 6; }
        #purchase #getNow {
            display: grid;
            background: #FFFFFF;
            padding-top: 0!important;}
        #purchase .package .js-heading .js-btn.btn-primary {
            margin: 10px auto 40px; }
        #purchase #getNow img.mc {
            max-width: 320px;
            width: 100%;}
        #faqs #js-accordion .card {
            border: none;}
        #faqs #js-accordion .card-link b{
            font-weight: 400; }
        #faqs #js-accordion .card-link {
            display: flex;
            padding: 10px 0;
            align-items: center;}
        #faqs .card-link span {
            transform: none;
            margin: 0 10px 0 0;
            position: relative;
            border: none;
            width: 18px;
            height: 18px;}
        #faqs .card-link span:before,  .faqs .card-link span:after {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            background: #FF3C7F;
            border-radius: 100px;
            transform: translate(-50%,-50%);}
        #faqs .card-link span:before {
            width: 18px;
            height: 4px;}
        #faqs .card-link.collapsed span:after, #faqs .card-link.collapsed span.up:after {
            transform: translate(-50%,-50%);
            width: 4px;
            height: 18px;}
        #faqs .card-link span.up:after {
            transform: translate(-50%,-50%) rotate(-90deg);}
        #faqs #js-accordion{
            margin-top: 25px;}
        .carousel-item {
            background: #FFFFFF;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 12px;
            padding: 30px; }
        #featuredReviewndicators {
            margin-bottom: 75px;
            padding: 0 16px; }
        #featuredReviewndicators .js-mobile.wave-bg{
            transform: scaleX(-1); }
        .carousel-item img.featured {
            border-radius: 6px;
            height: 157px;
            width: 100%;
            object-fit: cover;
            object-position: top;
            margin-bottom: 20px;}
        .meta {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;}
        .name {
            font-weight: 700;
            font-size: 18px;
            line-height: 130%;
            color: #0C0B0B;}
        .date {
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            color: #999999;}
        body .carousel-item p {
            margin-top: 15px;
            font-weight: 400;
            font-size: 14px!important;
            line-height: 18px!important;
            color: #212529; }
        #featuredReviewndicators .carousel-indicators {
            bottom: -50px; }
        #featuredReviewndicators .carousel-indicators li {
            margin: 0 10px;
            background: #999999;
            border-radius: 100px;
            width: 10px;
            height: 10px;  
            border-radius: 50%; 
            border: none; }
        #featuredReviewndicators .carousel-indicators li.active {
            background: #FF3C7F;}
        footer .row div ul {
            margin-left: 0;}
        #purchase .package .sub, #purchase #getNow p.star {
            display: none;}
        #purchase .package p {
            font-size: 18px!important;
            line-height: 150%!important;
            margin-top: 5px;
            color: #6F6F6F; }
        #purchase #getNow img {
            max-width: 280px;
            margin-bottom: 20px;}
        #purchase .js-packs input[type=radio]+label {
            font-size: 20px;
            line-height: 24px;
            border-radius: 6px;
            padding: 13px 20px;}
        #purchase .js-packs {
            margin: 6px 5px;
            max-width: 165px;}
        #purchase .bestseller {
            top: -27px;
            padding: 5px 20px;
            border-radius: 3px 3px 0px 0px;}
        #purchase .prices .js-total {
            font-size: 24px;
            line-height: 130%;}
    footer .navbar-brand.js-logo img {
        margin-top: 0; }
    }
    @media (max-width: 474px) {
        .js-packs {
            max-width: 165px;}
    }
    @media (max-width: 374px) {
        #purchase .js-packs {
            max-width: 45%;}
        header .js-title, h1 {
            line-height: 51px; 
            font-size: 42px;}
    }
    @media (max-width: 365px) {
        .free-block {
            font-size: 15px;}
        header .js-heading .col-lg-7 img {
            width: 100%;}
    }
    </style>`);

    $('header .js-title').after(`<a href="#" _blank class="trust-rating"></a>`);
    
    (function(){
        var http = new XMLHttpRequest();  
        http.open('GET', 'https://buzzpatch.com/pages/buzzpatch');
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var doc = new DOMParser().parseFromString(this.responseText, "text/html"); 
                console.log($('.js-mobile')[5]);
                $('header').prepend(doc.querySelector('.js-iphone .shipping-noti.js-mobile'));
                $('header .trust-rating').append(doc.querySelector('.trust-rating').innerHTML);
                $('header').append(doc.querySelector('header .js-mobile.wave-bg'));
                $('header').after(doc.querySelector('#flowers'));
                $('#returns').after(doc.querySelector('#featured-reviews'));
               
                $('.js-mobile')[5].remove();
                $('.flowers-bg').before(`<div class="free-blocks d-flex"></div>`);
                $('.shipping-noti h3').html('Free shipping <span>|</span>365-day Money Back Guarantee');
                let freeBlock = ['Latex FREE','benedryl FREE'];
                let n = 2;
                while (n--) {
                    $('.free-blocks').prepend( `
                    <div class="free-block">
                        <div class="free-block_top">100%</div>
                        ${freeBlock[n]}
                        <div class="free-block_bottom">Product</div>
                    </div>`);
                }
                
                $('#flowers').after(`<section id="relief" class="js-mobile">
                    <div class="container pt-2 pb-4">
                        <h2 class="js-title text-dark">why itch relief patches</h2>
                        <div class="pt-1">
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/clock.svg" alt="clock" class="mx-auto my-3" width="60px" height="60px"/>
                            <p class="mx-auto text-center">Stop the itching<br> in 30-60 seconds</p>
                        </div>
                        <div class="pt-1">
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/waterproof.svg" alt="waterproof" class="my-3 mx-auto" width="72px" height="61px"/>
                            <p class="mx-auto text-center">Waterproof</p>
                        </div>
                        <div class="pt-1">
                            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/australia.svg" alt="australia" class="my-3 mx-auto" width="70px" height="52px"/>
                            <p class="mx-auto text-center">Made in Australia</p>
                        </div>
                    </div>
                    <div class="js-mobile wave-bg ">
                        <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%">
                    </div>
                </section>
                <section id="how-work" class="js-mobile">
                    <div class="container pt-2 pb-4">
                        <h2 class="js-title text-dark d-flex justify-content-center align-items-center">how it works <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch.svg" alt="buzzpatch" class="mx-2" width="45px" height="43px"/></h2> 
                        <div class="steps">
                            <div class="step_1 step mr-auto">
                                <div class="step-img">
                                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3.png?v=1607995764" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3_300x.png 300w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3_600x.png 600w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3_900x.png 900w"  width="121px" height="121px" class="lazyautosizes lazyloaded"  srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3_300x.png 300w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3_600x.png 600w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_3.png?v=1607995764">
                                </div>
                                <p class="mx-auto text-center">Mosquito bites</p>
                            </div>
                            <div class="step_2 step ml-auto">
                                <div class="step-img">
                                <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2.png?v=1607995764" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2_300x.png 300w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2_600x.png 600w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2_900x.png 900w" width="152px" height="152px" class="lazyautosizes lazyloaded" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2_300x.png 300w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2_600x.png 600w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_2.png?v=1607995764">
                                </div>
                                <p class="mx-auto text-center">Grab an itch relief patch</p>
                            </div>
                            <div class="step_3 step mr-auto">
                                <div class="step-img">
                                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1.png?v=1607995764" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1_300x.png 300w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1_600x.png 600w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1_900x.png 900w" width="135px" height="135px" class="lazyautosizes lazyloaded" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1_300x.png 300w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1_600x.png 600w,
                                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/howitworks_1.png?v=1607995764">
                                </div>
                                <p class="mx-auto text-center">Apply to bite</p>
                            </div>
                        </div>
                    </div>
                    <div class="js-mobile wave-bg"> 
                        <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png 300w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_600x.png 600w,
                    https://cdn.shopify.com/s/files/1/#relief .js-title, #how-work .js-title0387/0749/4956/files/white-wave_900x.png 900w" width="100%" class="lazyautosizes lazyloaded" sizes="375px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png 300w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_600x.png 600w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876">
                    </div>
                </section> `);
                
                $('#featured-reviews h2.js-title').innerHTML = `Why people love <br> itch relief patches`;
                $('#featured-reviews').append(`<div class="js-mobile wave-bg"> 
                        <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png 300w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_600x.png 600w,
                    https://cdn.shopify.com/s/files/1/#relief .js-title, #how-work .js-title0387/0749/4956/files/white-wave_900x.png 900w" width="100%" class="lazyautosizes lazyloaded" sizes="375px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png 300w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_600x.png 600w,
                    https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave.png?v=1619947876">
                    </div>`);

                $('.trust-rating').click(() => {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — Bundles',
                        'eventAction': 'click on trust pilot ',
                    });
                });
                $('.card-link').click((e) => { 
                    console.log(e.target.innerHTML);
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — Bundles',
                        'eventAction': `click on FAQ — ${e.target.innerHTML}`,
                    });
                });
                $('.carousel-item').bind('touchstart', () => {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp — Bundles',
                        'eventAction': `click on slider`,
                    });
                });
                $('body').append(
                    `<script type="text/javascript"> 
                     $('.carousel').carousel({
                         interval: false ,
                         touch: true
                     });
                     </script>`);
            }
        }
        http.send(null);
    })();

    $('.js-main').addClass('js-iphone');
    $('.announcement-container').remove();
    $('#included').remove();
    $('#purchase .js-title.big').remove();
    $('#returns .smile').remove();
    $('#returns .js-title').remove();

    $('.navbar .row').addClass('align-items-center');

    $('header .js-heading img').attr('src','https://cdn.shopify.com/s/files/1/0387/0749/4956/files/PATCHES.png?v=1606305083');

    $('.js-iphone .js-heading.js-mobile h1').html('Instant itch relief </br> the natural way');
    $('.hand-banner img').attr('src','https://conversionratestore.github.io/projects/buzzpatch/img/patches.png');

    $('#purchase img.mc').attr('data-src','https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day.png?v=1618147802');
    $('#purchase img.mc').attr('data-srcset','https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day_300x.png 300w,https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day_600x.png 600w,https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day_900x.png 900w');
    $('#purchase img.mc').attr('sizes','320px');
    $('#purchase img.mc').attr('srcset','https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day_300x.png 300w,https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day_600x.png 600w,https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day_900x.png 900w');
    $('#purchase img.mc').attr('src','https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day.png?v=1618147802');
    
    $('#purchase #getNow img').eq(1).attr('src','https://conversionratestore.github.io/projects/buzzpatch/img/patches-small.png');
    $('#purchase #getNow img').eq(1).attr('srcset','https://conversionratestore.github.io/projects/buzzpatch/img/patches-small.png');
    $('#purchase #getNow img').eq(1).attr('width','255');
    $('#purchase #getNow img').eq(1).css('margin-top','10px');

    $('#faqs h2').html('FAQ');

    $('#returns').append(`<div class="js-mobile wave-bg"><img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%"></div>`);
   
    $('header .js-heading .col-lg-7 img').attr('src','https://conversionratestore.github.io/projects/buzzpatch/img/patches.png');

    let arrFAQ =[
        {
            name: 'How do they work?',
            text: '<p>Mosquitoes find us by sensing the carbon dioxide (CO2) we emit when we exhale. Certain compounds, including specific essential oils, overpower the CO2 we emit, essentially hiding us from mosquitoes.</p>',
        },
        {
            name: 'How long will the sealed pack last?',
            text: '<p>The bag has a ziplock. Put the unused patches into the bag and seal it. BuzzPatch when sealed will last up to 24 months.</p><p>If you have a pack that is past its used by date, send a photo of the unopened pack to hello@buzzpatch.com and we`ll send you a new one.</p>',
        },
        {
            name: 'Where are BuzzPatch stickers made?',
            text: '<p>Patches are formulated and designed in Australia.</p>',
        },
        {
            name: 'How many do you need?',
            text: '<p>One per mosquito bite.</p>',
        },
        {
            name: 'How long will shipping take?',
            text: '<p>All orders are dispatched the same day, and usually take 3-5 days to USA, Canada and Australia. However, with current travel restrictions, we’re seeing shipping times range between 10-15 days, and in some cases up to 25 days.</p>',
        },
    ]
    $('#js-accordion').html('')
    for (let i = 0; i < arrFAQ.length; i++) {
        let newElementFAQ = `
            <div class="card">
                <div class="card-header">
                    <a class="collapsed card-link" data-toggle="collapse" href="#collapse${i}"><span class="arrow down"></span><b>${arrFAQ[i].name}</b></a>
                </div>
                <div id="collapse${i}" class="collapse" data-parent="#js-accordion">
                    <div class="card-body">${arrFAQ[i].text}</div>
                </div>
            </div>`;
            $('#js-accordion').append(newElementFAQ);
    }

    
};

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2247058,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'magic_patches_bundles');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Bundles',
    'eventAction': 'loaded'
});
