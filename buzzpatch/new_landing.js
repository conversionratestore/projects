let scriptCustom = document.createElement("script")
scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

let scriptCustomStyle = document.createElement("link")
scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
scriptCustomStyle.rel = "stylesheet"
document.head.appendChild(scriptCustomStyle)

let styleNewLanding = /*html*/ `
<style>
    li {
        list-style: none;
    }

    main header .navbar,
    main header .navbar.navbar-expand-lg.static-top.fixed-top{
        background: linear-gradient(180deg, #FFFFFF 0%, #DDDDDF 100%);
        padding: 8px 16px 0 !important; 
    }

    a:hover, button:hover{
        opacity: unset !important;
    }

    .package .js-heading .js-btn.btn-primary:hover,
    .btn:not(.disabled):not([disabled]):hover{
        background: #ff3c81 !important;
        color: white !important;
    }

    .shipping-noti.js-mobile, .js-heading.js-mobile, .js-mobile.wave-bg,
    #ingredients, #flowers, #reviews,
    div .js-mobile.days.lazyautosizes.ls-is-cached.lazyloaded,
    .js-mobile.effectiveness, 
    #featured-reviews .container, .carousel-indicators, #featuredReviewndicators, .bp-comparison, .wave-effect.js-mobile, #radios-0, #radios-1, #radios-2, #radios-3{
        display: none !important;
    }

    .bitepatch-template header nav .js-btn.btn-primary{
        width: 160px;
        height: 46px;
        font-family: 'DINEngschrift LT', sans-serif !important;
        font-weight: 400 !important;
        font-size: 14px !important;
        line-height: 16px !important;
        letter-spacing: 0.05em !important;
    }

    /* nav_block */
    .nav_block{
        width: 100%;
        display: flex;
        padding: 16px 0;
        border-top: 1px solid #D9D9D9;
        margin-top: 12px;
        align-items: center;
        justify-content: space-between;
    }

    .fixed-top .nav_block{
        display: none;
    }

    .fixed-top .no-gutters{
        padding-bottom: 7px;
    }

    .nav_block div:nth-child(2){
        width: 30%;
        text-align: center;
    }

    .nav_block div:last-child{
        width: 30%;
    }

    .nav_block div:last-child a{
        display: flex;
        flex-direction:column;
        text-align: left;
        align-items: flex-end;
    }


    .nav_block div:last-child span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 11px;
        line-height: 1.3;
        color: #6F6F6F;
        padding-right: 12px;
    }

    .nav_block p{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 12px !important;
        line-height: 1.25 !important;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #6F6F6F;
        width: 30%;
        margin-bottom: 0 !important;
    }

    .nav_block p b{
        color: black;
    }

    .herro_img{
        width: 100%;
        object-fit: cover;
    }

    .herro_img img{
        width:100%;
    }

    /* block_first */
    .block_first{
        background: linear-gradient(180deg, #F1F1F1 0%, #ECEEF0 100%);
        padding: 16px 16px 5px;
        text-align: center;
    }

    .block_first h2{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px;
        line-height: 1.1;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #212529;
        margin-bottom: 12px;
    }

    .block_first h2 > span{
        color: #EFAE16;
    }

    .block_first p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 16px !important;
        line-height: 1.3 !important;
        color: #6F6F6F;
        margin-bottom: 20px;
    }

    .block_first ul{
        margin: 0;
        display: flex;
        justify-content: space-between;
    }

    .block_first ul li{
        position: relative;
        width: 48%;
        border: 2px solid #EFAE16;
        border-radius: 20px;
        padding: 13px 26px;

        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.1;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #6F6F6F;
    }

    .block_first ul li:after,
    .block_first ul li:before{
        position: absolute;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 11px;
        line-height: 1.3;
        text-transform: uppercase;
        color: #EFAE16;
        right: 50%;
        transform: translateX(50%);
        background: #ECEEF0;
    }

    .block_first ul li:after{
        content: "Product";
        width: 70px;
        bottom: -7px;
    }

    .block_first ul li:before{
        content: "100%";
        width: 54px;
        top: -7px;
    }

    /* block_as_seen_on */
    .block_as_seen_on{
        background: linear-gradient(180deg, #ECEEF0 0%, #FFFFFF 100%);
        padding: 1px 16px 72px;
        text-align: center;
    }

    .block_as_seen_on h2{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px;
        line-height: 1.1;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        border-top: 1px solid #D9D9D9;
        padding-top:40px;
        margin: 40px 0;
    }

    .block_as_seen_on > div:first-child{
        padding-bottom: 40px;
        margin-bottom: 40px;
        border-bottom: 1px solid #D9D9D9;
    }

    .block_as_seen_on > div:first-child img{
        width: 100%;
    }

    .block_as_seen_on div ul{
        margin: 40px 0;
        display: flex;
        justify-content: space-between;
        text-align: left;
    }

    .block_as_seen_on div ul li{
        width: 30%;
    }

    .block_as_seen_on div ul li p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 14px !important;
        line-height: 1.3 !important;
        color: #6F6F6F;
        margin-bottom: 8px;
    }

    .block_as_seen_on div ul li p.accent_var{
        font-style: italic;
        font-weight: 700;
        font-size: 16px !important;
        color: #0C0B0B;
        margin-top: 8px;
    }

    .block_as_seen_on div ul li span{
        position: relative;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 500;
        font-size: 12px;
        color: #00B67E;
        padding-left: 13px;
    }

    .block_as_seen_on div ul li span::before{
        position: absolute;
        content: "";
        background: url(https://conversionratestore.github.io/projects/buzzpatch/img/check_circle.svg) center center no-repeat;
        width: 12px;
        height: 12px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .button_custom{
        display: inline-flex;
        width: 100%;
        max-width: 343px;
        height: 66px;
        align-items: center;
        justify-content: center;
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 16px !important;
        line-height: 1 !important;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF !important;
        background: #FF3C7F;
        box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 12px 32px rgba(0, 0, 0, 0.05);
        border-radius: 52px;
        border: 1px solid #FF3C7F;
        outline: none;
    }

    /* block_as_seen_on */
    .block_allergies{
        background: #FFFFFF;
        padding: 0 16px;
    }

    .block_allergies .accent_title{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px !important;
        line-height: 1.1 !important;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        margin-bottom: 28px;
        text-align: center;
    }

    .block_allergies p:nth-child(3),
    .block_allergies p:nth-child(6){
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 18px !important;
        line-height: 1.5 !important;
        color: #6F6F6F;
        margin-top: 28px;
    }

    .block_allergies p:nth-child(3){
        margin-bottom: 72px;
    }

    .block_allergies p:nth-child(3) span{
        font-weight: 700;
    }

    .block_allergies p:nth-child(6){
        margin-bottom: 0;
    }

    .block_allergies img{
        margin: 0 -16px;
        width: 110%;
    }
    
    /* block_effective*/
    .block_effective{
        background: linear-gradient(180deg, #FFFFFF 0%, #ECEEF0 100%);
        padding: 72px 16px;
    }

    .block_effective div:last-child h4{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px;
        line-height: 1.1;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        margin: 72px 0 28px;
        text-align: center;
    }

    .block_effective div:last-child h4 > span{
        color: #EFAE16;
    }

    .block_effective div:last-child p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;
        color: #6F6F6F;
    }

    .block_effective div:last-child img{
        margin-top: 28px;
        width: 100%;
    }

    /*purchase */
    #purchase{
        padding: 0 !important;
    }

    #purchase .container.package .row.no-gutters #getNow {
        background: #ECEEF0;
        padding: 0 16px 72px !important;
    }

    .package .js-heading .js-btn.btn-primary{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        max-width: 343px !important;
        font-size: 16px !important;
        line-height: 16px !important;
        letter-spacing: 0.05em;
        padding: 25px 0 !important;
        margin-bottom: 0 !important;
    }

    .ingredients p, .package .sub, .package p:nth-child(7){
        margin: 0 !important;
    }

    #purchase .container.package .row.no-gutters #getNow p:first-child{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px !important;
        line-height: 1.1 !important;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        margin-bottom: 32px;
        margin-top: 0 !important;
    }

    #purchase .container.package .row.no-gutters #getNow h2{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 26px !important;
        line-height: 1.1 !important;
        letter-spacing: 0.02em !important;
        text-transform: uppercase;
        color: #0C0B0B;
    }

    #purchase .container.package .row.no-gutters #getNow p:nth-child(3){
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 16px !important;
        line-height: 1.3 !important;
        text-align: center;
        color: #999999;
    }

    .js-packs input[type=radio]+label.radio-inline {
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        padding: 20px 0px;
        border: 2px solid #FF3C7F;  
        border-radius: 6px;
    }

    .js-packs input[type=radio]+label.radio-inline:nth-child(3){
        border-radius: 0px 6px 6px 6px !important;
    }

    .bestseller{
        border-radius: 3px 3px 0px 0px !important;
        font-family: 'DINEngschrift LT', sans-serif !important;
        letter-spacing: 0.02em !important;
        font-size: 11px !important;
        line-height: 1 !important;
        padding: 7px 20px !important;
    }

    .js-packs input[type=radio]+label span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400 !important;
        font-size: 14px !important;
        line-height: 130% !important;
    }

    #purchase .container.package .row.no-gutters #getNow img:nth-child(4){
        margin-bottom: 32px !important;
    }

    #purchase img.js-mobile.lazyautosizes.lazyloaded{
        display: none !important;
    }

    .prices .js-total{
        margin-bottom: 8px !important;
        font-family: 'Roboto', sans-serif !important;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: #0C0B0B;
    }

    .prices .js-regular{
        margin-bottom: 40px !important;
    }

    .js-strike{
        text-decoration: unset !important;
    }

    .form-group{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .js-packs{
        width: 48% !important;
        max-width: unset !important;
        margin: 6px 0 !important;
        
    }

    /* featured-reviews*/
    #featured-reviews{
        background: linear-gradient(180deg, #ECEEF0 0%, #FFFFFF 100%) !important;
        padding: 0 16px 72px !important;
        margin: 0 !important;
        max-width: unset !important;
    }

    #featured-reviews > div:first-child h3{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px !important;
        line-height: 1.1 !important;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        margin-bottom: 23px;
    }

    #featured-reviews > div:first-child p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 18px !important;
        line-height: 1.5 !important;
        color: #6F6F6F;
        text-align: left;
    }

    #featured-reviews > div:first-child p:nth-child(3){
        margin-top: 28px !important;
    }

    #featured-reviews > div:first-child p:nth-child(4){
        margin-bottom: 40px !important;
    }

    #featured-reviews > div:first-child p:nth-child(4) span{
        font-weight: 700;
    }

    #featured-reviews >p{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 36px !important;
        line-height: 1.1 !important;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #000000;
        margin: 72px 0 28px;
    }

    #featuredReviewndicators > .carousel-inner .carousel-item{
        background: #FFFFFF;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
    }

    /* faqs*/
    #faqs {
        background: #FFFFFF !important;
        padding: 0;
    }

    #faqs .container, #faqs .container .col-lg-12{
        padding-left: 16px !important;
        padding-right: 16px !important;
    }
    
    #js-accordion .card-body{
        background: inherit !important;
    }

    #faqs .col-lg-12.col-md-12.col-sm-12.text-left h2{
        font-weight: 400 !important;
        font-size: 36px !important;
        line-height: 110% !important;
        letter-spacing: 0.02em !important;
        text-transform: uppercase;
        color: #000000;
    }

    .faqs #js-accordion .card-link{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400 !important;
        font-size: 18px !important;
        line-height: 130% !important;
        color: #212529;
        padding: 15px 1px 15px 38px !important;
    }

    #js-accordion .card-link:hover{
        color: #FF3C7F !important;
    }

    .faqs #js-accordion p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 500;
        font-size: 14px !important;
        line-height: 130% !important;
        color: #6F6F6F;
    }

    .faqs #js-accordion .card-body{
        padding: 0 0 0 38px !important;
    }
    
    /*footer */
    footer{
        padding-top: 0 !important;
    }

    /* compar_block*/
    .accent_color{
        color: #12B889;
    }

    .accent_color_buzz{
        color: #FF3C81;
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.14;
        text-align: center;
        letter-spacing: 0.015em;
        text-transform: uppercase;
    }

    .compar_block{
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3;
        text-align: center;
        color: #212529;
    }

    .compar_block h2{
        font-family: 'DINEngschrift LT', sans-serif;
        margin-bottom:40px;
        font-weight: 400;
        font-size: 36px;
        line-height: 1.1;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
    }

    .compar_block > div:not(:last-of-type){
        margin-bottom:16px;
    }

    .compar_block ul{
        list-style: none;
        display:flex;
        align-items: stretch;
        margin: 0;
        padding-bottom: 16px;
    }


    .compar_block ul li{
        display: flex;
        flex-direction:column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: calc((100%* 3) / 4);
        padding: 4px;
    }

    .compar_block ul li:not(:last-child){
        border-right: 2px solid #E2E2E2;
    }

    .compar_block ul li:not(:first-child) span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        color: #6F6F6F;
    }

    .accent_color{
        color: #12B889;
    }

    .not_border{
        border-right: none !important;
        font-family: 'Roboto', sans-serif !important;
        font-weight: normal;
        font-size: 14px;
        line-height: 1.43;
        text-align: center;
        color: #212529;
    }

    .compar_block > div h3{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 600;
        font-size: 14px;
        line-height: 1.43;
        text-align: center;
        text-transform: none;
        color: #212529;
        margin-bottom: 16px;
    }

    .compar_block a{
        display: inline-flex;
        align-items: center;
        width: 100%;
        max-width: 343px;
        padding: 20.5px 20px;
        margin-top: 24px;

        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;

        background: #FF3C7F;
        box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
        border-radius: 52px;

        cursor: pointer;
        outline: none;
    }

    .span_after_svg{
        margin-top:6px;
    }

    .block_effective .compar_block > div:nth-child(2) li:not(:first-child) .span_after_svg{
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: #212529;
    }

    .block_effective .compar_block > div:nth-child(2) li:not(:last-child) .span_after_svg{
        border-right: 2px solid #E2E2E2;
        width: 100%;
    }

    .list_variant{
        justify-content: flex-end;
    }

    .span_varian{
        margin-top: 10px;
    }

    /*slider */
    .slider_nav{
        margin: -16px;
        width: calc(100% + 32px); 
        padding: 16px; 
        overflow: hidden;
    }

    .slick-slide {
        background: #FFFFFF;
        box-shadow: 0px 4px 14px rgb(0 0 0 / 25%);
        border-radius: 9px;
        padding: 16px;
        margin-right: 16px;
    }

    .slick-list{
        padding:0 13% 0 0 !important;
        overflow: visible;
    }


    .slider_custom_list > img:nth-child(1){
        height: 220px;
        margin-bottom: 16px;
        width: 100%;
        object-fit: cover;
        border-radius: 6px;
    }

    .slider_custom_list > div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }

    .slider_custom_list > div:nth-child(2) > p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.3;
        color: #0C0B0B;
        margin: 0 !important;
    }

    .slider_custom_list > div:nth-child(2) > span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.3;
        color: #999999;
    }

    .slider_custom_list > img:nth-child(3){
        margin-bottom: 8px;
        max-width: 100px;
    }
    
    .slider_nav .slider_custom_list > div:nth-child(4) > p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400 !important;
        font-size: 14px !important;
        line-height: 1.3 !important;
        color: #6F6F6F !important;
        margin: 0 !important;
        text-align: left;
    }

    .slider_nav .slider_custom_list > div:nth-child(4) > p:not(:last-child){
        margin-bottom: 13px !important;
    }

    .slider_nav .slider_custom_list > div:nth-child(4){
        margin-bottom: 16px;
    }

    .slider_custom_list > div:nth-child(5){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slider_custom_list > div:nth-child(5) > span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 500;
        font-size: 12px;
        line-height: 1.3;
        color: #00B67E;
        position: relative;
        padding-left: 15px;
    }

    .slider_custom_list > div:nth-child(5) > span:before {
        position: absolute;
        content: "";
        background: url(https://conversionratestore.github.io/projects/buzzpatch/img/check_circle.svg) center center no-repeat;
        width: 12px;
        height: 12px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    #featured-reviews > a{
        margin-top: 40px;
    }
    
    /* */

    .by_op_daily{
        margin: 56px 0;
    }

    .by_op_daily p{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 26px !important;
        line-height: 110% !important;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        margin-bottom: 28px !important;
    }

    .by_op_daily p > a{
        color: #FF3C7F !important;
    }

    .by_op_daily > span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        text-align: center;
        color: #0C0B0B;
        margin-right: 10px;
    }

    .by_op_daily img{
        object-fit: cover;
        max-width: 296px !important;
    }

    @media (max-width: 320px) {
        .by_op_daily p{
            font-size: 22px !important;
        }

        .by_op_daily img{
            object-fit: cover;
            max-width: 235px !important;
        }
    }
</style>
`

let oD = /*html*/ `
<div class="by_op_daily">
    <p>Buzzpatch was included in <a href="https://www.oprahdaily.com/life/g38025636/11-gifts-every-mom-will-appreciate/" target="_blank">
         “11 Gifts Every Mom Will Appreciate”</a></p>
    <span>by</span>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/name.png" alt="by Oprah Daily">
    <ul>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_2.png" alt="">
                <p class="accent_var">Maria Drew</p>
                <p>Great product! No more tears and fights when applying bug spray. My 1 year old didn’t even know it happened.</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_1.png" alt="">
                <p class="accent_var">Joanne</p>
                <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_3.png" alt="">
                <p class="accent_var">Jodie N.M.</p>
                <p>Excellent product will keep ordering. Works wonders on my grandson who is allergic. Thank you buzz patch.</p>
                <span>Verified Buyer</span>
            </li>
    </ul>
</div>
`

let navBlock = /*html*/ `
<div class="nav_block">
    <p>Our customers rate <br> us as <b>Excellent</b></p>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot.svg" alt="logo trustpilot" width="94" height="23">
    </div>
    <div>
        <a href="https://www.trustpilot.com/review/buzzpatch.com" target="blank">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot_stars.svg" alt="logo trustpilot" width="74" height="14">
            <span>Reviews 371</span>
        </a>
    </div>
</div>
`

let blockAllergies = /*html*/ `
<div class="herro_img">
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/mosquito_smile.jpg" alt="">
</div>
<section class="block_first">
        <h2>Protect yourself and your little ones from annoying itchy bites <span>without harsh sprays</span></h2>
        <p>Stick on a BuzzPatch with natural citronella and geraniol essential oils to keep mosquitoes at bay for up to 72 hours. Kids-friendly. Zero DEET.</p>
        <ul>
            <li>natural ingredients</li>
            <li>protection for all your family</li>
        </ul>
</section>
<section class="block_as_seen_on">
    <div>
        <h2>AS SEEN ON</h2>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/partners_new.png" alt="">
    </div>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/logo_winner.png" alt="">
        <div class="by_op_daily">
            <p>Buzzpatch was included in <a href="https://www.oprahdaily.com/life/g38025636/11-gifts-every-mom-will-appreciate/" target="blank">
                “11 Gifts Every Mom Will Appreciate”</a></p>
            <span>by</span>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/name.png" alt="by Oprah Daily">
        </div>        
    </div>
    <a href="#getNow" class="button_custom">Keep mosquitos at bay</a>
</section>

<section class="block_allergies">
    <p class="accent_title">Safe for kids and people <br> with allergies</p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/oil.jpg" alt="">
    <p>Unlike sprays with DEET or Picaridin, BuzzPatch contains only natural ingredients –including <span>citronella</span> and <span>geraniol essential oils</span> – that are completely safe for children and adults.
        100% DEET free.</p>
    <p class="accent_title">Hides you from bites</p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/bubble.jpg" alt="">
    <p>Mosquitoes find you by sensing the CO2 you emit. BuzzPatch distinct scent creates a virtual camouflage, making you invisible to mosquitoes.</p>
</section>

<section class="block_effective">
<div class="compar_block">
<h2>Buzzpatch <br>vs other mosquito repellents</h2>

<div>
    <ul class="list_baseline">
        <li class="not_border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/buzzpatch.svg" alt="smile">
            <span class="span_after_svg accent_color_buzz">Buzzpatch</span>
        </li>
        <li class="not_border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/spray.svg" alt="spray">
            <span class="span_after_svg">Sprays</span>
        </li>
        <li class="not_border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/lotions.svg" alt="lotions">
            <span class="span_after_svg">Lotions</span>
        </li>
        <li class="not_border">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/candle.svg" alt="candle">
            <span class="span_after_svg">Сandles</span>  
        </li>
    </ul>
</div>

<div>
    <h3>Apply to skin</h3>
    <ul>
        <li class="accent_color">
            <span>Airborn</span>
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
    </ul>
</div>

<div>
    <h3>Contains chemicals (like DEET or Picaridin)</h3>
    <ul>
        <li class="accent_color">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/cross.svg" alt="cross">
            <span class="span_after_svg">Uses natural essential oils</span>    
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
    </ul>
</div>

<div>
    <h3>Unpleasant chemical smell</h3>
    <ul>
        <li class="accent_color"><span>Pleasant smell of essential oils</span></li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
        <li>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/checkin.svg" alt="check">
        </li>
    </ul>
</div>

<div>
    <h3>Causes allergies</h3>
    <ul>
        <li class="accent_color"><span>Not known to cause allergic reaction</span></li>
        <li><span>Can cause allergic reaction</span></li>
        <li><span>Can cause allergic reaction</span></li>
        <li><span>Can cause allergic reaction</span></li>
    </ul>
</div>

<div>
    <h3>Toxicity</h3>
    <ul>
        <li class="accent_color list_variant">
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/cross.svg" alt="cross">
            <span class="span_after_svg span_varian">Non toxic</span></li>
        <li>
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.5884C8 13.1396 8.44827 13.5883 8.99998 13.5883C9.5517 13.5883 9.99997 13.1396 9.99997 12.5884C9.99997 12.0371 9.5517 11.5884 8.99998 11.5884C8.44827 11.5884 8 12.0371 8 12.5884Z" fill="#6F6F6F"/>
                <path d="M10.8331 14.3571C10.758 14.2482 10.6418 14.1735 10.5109 14.1496C10.38 14.1242 10.2462 14.1554 10.1369 14.2306C9.46304 14.6994 8.53725 14.6994 7.86343 14.2306C7.75407 14.1554 7.6193 14.1242 7.48941 14.1496C7.35853 14.1735 7.24233 14.2482 7.16714 14.3571L5.4601 16.8239C5.30288 17.0509 5.3595 17.3619 5.5861 17.5192C6.59489 18.2189 7.77554 18.5885 9.00014 18.5885C10.2248 18.5885 11.4054 18.2189 12.4142 17.5192C12.6407 17.3619 12.6974 17.0509 12.5402 16.8239L10.8331 14.3571ZM6.58022 16.9621L7.72768 15.3039C8.52258 15.6779 9.47766 15.6779 10.2726 15.3039L11.4201 16.9621C9.93961 17.7843 8.06068 17.7843 6.58022 16.9621Z" fill="#6F6F6F"/>
                <path d="M14.4806 13.538C14.7374 13.538 14.9562 13.3403 14.9776 13.0791C15.0792 11.8559 14.8087 10.6489 14.1964 9.58883C13.584 8.5273 12.6739 7.68941 11.5626 7.16596C11.3165 7.04877 11.0167 7.15424 10.8976 7.40422L9.61533 10.1166C9.55871 10.2368 9.55187 10.3745 9.59677 10.4995C9.64168 10.624 9.73449 10.726 9.85458 10.7827C10.2247 10.9575 10.5284 11.2363 10.7325 11.5884C10.9356 11.9409 11.0255 12.3428 10.9913 12.7515C10.9796 12.8838 11.0216 13.0147 11.1075 13.1162C11.1934 13.2173 11.3165 13.2803 11.4483 13.2915L14.4386 13.5366C14.4523 13.5376 14.4669 13.538 14.4806 13.538ZM11.9884 12.332C11.9513 11.895 11.8204 11.4721 11.5978 11.0884C11.3761 10.7045 11.0763 10.3789 10.7159 10.1294L11.5772 8.30563C12.3038 8.74067 12.9034 9.34906 13.3292 10.0879C13.3302 10.0883 13.3302 10.0883 13.3302 10.0883C13.7559 10.8266 13.9835 11.6508 13.9981 12.497L11.9884 12.332Z" fill="#6F6F6F"/>
                <path d="M6.89271 13.1163C6.97863 13.0148 7.02063 12.8839 7.00891 12.7516C6.97474 12.3429 7.0646 11.9411 7.26771 11.5885C7.4718 11.2365 7.77551 10.9577 8.14563 10.7828C8.26577 10.7262 8.35854 10.6241 8.40344 10.4996C8.44835 10.3746 8.44155 10.2369 8.38488 10.1168L7.10266 7.40435C6.98351 7.1553 6.68665 7.0474 6.4376 7.16608C5.32629 7.68954 4.41612 8.52743 3.80384 9.58896C3.19151 10.649 2.92104 11.8561 3.02257 13.0792C3.04404 13.3404 3.2628 13.5382 3.51963 13.5382C3.53332 13.5382 3.54794 13.5377 3.56163 13.5367L6.55188 13.2916C6.68369 13.2804 6.80674 13.2174 6.89271 13.1163ZM6.01184 12.3322L4.00207 12.4972C4.01674 11.651 4.24427 10.8268 4.67004 10.0886C4.67004 10.0886 4.67004 10.0886 4.67102 10.0881C5.09679 9.34933 5.69641 8.7409 6.42298 8.30585L7.2843 10.1296C6.92393 10.3791 6.62416 10.7048 6.40244 11.0885C6.17979 11.4723 6.04896 11.8952 6.01184 12.3322Z" fill="#6F6F6F"/>
                <path d="M21.4502 19.6187C21.2148 18.4624 20.1318 17.5806 18.9502 17.6186C18.7363 16.5771 17.8672 15.7691 16.7363 15.6372C16.5658 15.3352 16.3196 15.0886 16.0304 14.9121L16.7236 14.5654C16.8926 14.4804 17 14.3076 17 14.1181V4.52604C17.5807 4.31899 18 3.76915 18 3.11815C18 2.29099 17.3272 1.61815 16.5 1.61815H6.99998V1.11818C6.99998 0.841805 6.77639 0.618164 6.50002 0.618164H4.5C4.22363 0.618164 3.99998 0.841805 3.99998 1.11818V1.6182H1.5C0.672844 1.6182 0 2.29104 0 3.1182C0 3.7692 0.41925 4.31899 0.999984 4.52609V21.7103C0.41925 21.9174 0 22.4672 0 23.1182C0 23.9453 0.672844 24.6182 1.5 24.6182H16.5H21.5C22.8789 24.6182 24 23.4966 24 22.1182C24 20.7231 22.8232 19.5752 21.4502 19.6187ZM1.5 2.61818H16.5C16.7754 2.61818 17 2.84229 17 3.1182C17 3.39405 16.7754 3.61816 16.5 3.61816H1.5C1.22461 3.61816 0.999984 3.39405 0.999984 3.11815C0.999984 2.84229 1.22461 2.61818 1.5 2.61818ZM13.584 18.3955L14.584 19.8955C14.709 20.0825 14.9453 20.1636 15.1582 20.0923L16 19.812V21.6182H2.00002V4.61815H16V13.8091L14.2764 14.6709C14.1338 14.7426 14.0332 14.8784 14.0069 15.0361L13.5068 18.0361C13.4863 18.1611 13.5137 18.29 13.584 18.3955ZM16.5 23.6182H1.5C1.22461 23.6182 0.999984 23.3941 0.999984 23.1182C0.999984 22.8423 1.22461 22.6181 1.5 22.6181H16.5C16.7754 22.6181 17 22.8423 17 23.1182C17 23.394 16.7754 23.6182 16.5 23.6182ZM21.5 23.6182H17.9079C17.9639 23.461 18 23.2943 18 23.1182C18 22.4672 17.5807 21.9174 17 21.7103V19.1182C17 18.9575 16.9229 18.8066 16.792 18.7124C16.6611 18.6187 16.4951 18.5908 16.3418 18.6441L15.2041 19.023L14.5254 18.0054L14.9234 15.6182H15C15.418 15.6182 15.7949 15.8867 15.9375 16.2861C16.0078 16.4854 16.2881 16.6181 16.5 16.6181C17.3272 16.6181 18 17.291 17.9922 18.1719C17.9863 18.3301 18.0556 18.4824 18.1797 18.5816C18.3027 18.6812 18.4688 18.7159 18.6191 18.6748C18.7666 18.6363 18.8877 18.6182 19 18.6182C19.8271 18.6182 20.5 19.2911 20.4922 20.1719C20.4863 20.3301 20.5556 20.4825 20.6797 20.5816C20.8027 20.6808 20.9687 20.7169 21.1191 20.6749C21.2666 20.6363 21.3877 20.6183 21.5 20.6183C22.3271 20.6183 23 21.2911 23 22.1183C23 22.9454 22.3272 23.6182 21.5 23.6182Z" fill="#6F6F6F"/>
            </svg>
            <span class="span_after_svg">Toxic</span></li>
        <li>
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.5884C8 13.1396 8.44827 13.5883 8.99998 13.5883C9.5517 13.5883 9.99997 13.1396 9.99997 12.5884C9.99997 12.0371 9.5517 11.5884 8.99998 11.5884C8.44827 11.5884 8 12.0371 8 12.5884Z" fill="#6F6F6F"/>
                <path d="M10.8331 14.3571C10.758 14.2482 10.6418 14.1735 10.5109 14.1496C10.38 14.1242 10.2462 14.1554 10.1369 14.2306C9.46304 14.6994 8.53725 14.6994 7.86343 14.2306C7.75407 14.1554 7.6193 14.1242 7.48941 14.1496C7.35853 14.1735 7.24233 14.2482 7.16714 14.3571L5.4601 16.8239C5.30288 17.0509 5.3595 17.3619 5.5861 17.5192C6.59489 18.2189 7.77554 18.5885 9.00014 18.5885C10.2248 18.5885 11.4054 18.2189 12.4142 17.5192C12.6407 17.3619 12.6974 17.0509 12.5402 16.8239L10.8331 14.3571ZM6.58022 16.9621L7.72768 15.3039C8.52258 15.6779 9.47766 15.6779 10.2726 15.3039L11.4201 16.9621C9.93961 17.7843 8.06068 17.7843 6.58022 16.9621Z" fill="#6F6F6F"/>
                <path d="M14.4806 13.538C14.7374 13.538 14.9562 13.3403 14.9776 13.0791C15.0792 11.8559 14.8087 10.6489 14.1964 9.58883C13.584 8.5273 12.6739 7.68941 11.5626 7.16596C11.3165 7.04877 11.0167 7.15424 10.8976 7.40422L9.61533 10.1166C9.55871 10.2368 9.55187 10.3745 9.59677 10.4995C9.64168 10.624 9.73449 10.726 9.85458 10.7827C10.2247 10.9575 10.5284 11.2363 10.7325 11.5884C10.9356 11.9409 11.0255 12.3428 10.9913 12.7515C10.9796 12.8838 11.0216 13.0147 11.1075 13.1162C11.1934 13.2173 11.3165 13.2803 11.4483 13.2915L14.4386 13.5366C14.4523 13.5376 14.4669 13.538 14.4806 13.538ZM11.9884 12.332C11.9513 11.895 11.8204 11.4721 11.5978 11.0884C11.3761 10.7045 11.0763 10.3789 10.7159 10.1294L11.5772 8.30563C12.3038 8.74067 12.9034 9.34906 13.3292 10.0879C13.3302 10.0883 13.3302 10.0883 13.3302 10.0883C13.7559 10.8266 13.9835 11.6508 13.9981 12.497L11.9884 12.332Z" fill="#6F6F6F"/>
                <path d="M6.89271 13.1163C6.97863 13.0148 7.02063 12.8839 7.00891 12.7516C6.97474 12.3429 7.0646 11.9411 7.26771 11.5885C7.4718 11.2365 7.77551 10.9577 8.14563 10.7828C8.26577 10.7262 8.35854 10.6241 8.40344 10.4996C8.44835 10.3746 8.44155 10.2369 8.38488 10.1168L7.10266 7.40435C6.98351 7.1553 6.68665 7.0474 6.4376 7.16608C5.32629 7.68954 4.41612 8.52743 3.80384 9.58896C3.19151 10.649 2.92104 11.8561 3.02257 13.0792C3.04404 13.3404 3.2628 13.5382 3.51963 13.5382C3.53332 13.5382 3.54794 13.5377 3.56163 13.5367L6.55188 13.2916C6.68369 13.2804 6.80674 13.2174 6.89271 13.1163ZM6.01184 12.3322L4.00207 12.4972C4.01674 11.651 4.24427 10.8268 4.67004 10.0886C4.67004 10.0886 4.67004 10.0886 4.67102 10.0881C5.09679 9.34933 5.69641 8.7409 6.42298 8.30585L7.2843 10.1296C6.92393 10.3791 6.62416 10.7048 6.40244 11.0885C6.17979 11.4723 6.04896 11.8952 6.01184 12.3322Z" fill="#6F6F6F"/>
                <path d="M21.4502 19.6187C21.2148 18.4624 20.1318 17.5806 18.9502 17.6186C18.7363 16.5771 17.8672 15.7691 16.7363 15.6372C16.5658 15.3352 16.3196 15.0886 16.0304 14.9121L16.7236 14.5654C16.8926 14.4804 17 14.3076 17 14.1181V4.52604C17.5807 4.31899 18 3.76915 18 3.11815C18 2.29099 17.3272 1.61815 16.5 1.61815H6.99998V1.11818C6.99998 0.841805 6.77639 0.618164 6.50002 0.618164H4.5C4.22363 0.618164 3.99998 0.841805 3.99998 1.11818V1.6182H1.5C0.672844 1.6182 0 2.29104 0 3.1182C0 3.7692 0.41925 4.31899 0.999984 4.52609V21.7103C0.41925 21.9174 0 22.4672 0 23.1182C0 23.9453 0.672844 24.6182 1.5 24.6182H16.5H21.5C22.8789 24.6182 24 23.4966 24 22.1182C24 20.7231 22.8232 19.5752 21.4502 19.6187ZM1.5 2.61818H16.5C16.7754 2.61818 17 2.84229 17 3.1182C17 3.39405 16.7754 3.61816 16.5 3.61816H1.5C1.22461 3.61816 0.999984 3.39405 0.999984 3.11815C0.999984 2.84229 1.22461 2.61818 1.5 2.61818ZM13.584 18.3955L14.584 19.8955C14.709 20.0825 14.9453 20.1636 15.1582 20.0923L16 19.812V21.6182H2.00002V4.61815H16V13.8091L14.2764 14.6709C14.1338 14.7426 14.0332 14.8784 14.0069 15.0361L13.5068 18.0361C13.4863 18.1611 13.5137 18.29 13.584 18.3955ZM16.5 23.6182H1.5C1.22461 23.6182 0.999984 23.3941 0.999984 23.1182C0.999984 22.8423 1.22461 22.6181 1.5 22.6181H16.5C16.7754 22.6181 17 22.8423 17 23.1182C17 23.394 16.7754 23.6182 16.5 23.6182ZM21.5 23.6182H17.9079C17.9639 23.461 18 23.2943 18 23.1182C18 22.4672 17.5807 21.9174 17 21.7103V19.1182C17 18.9575 16.9229 18.8066 16.792 18.7124C16.6611 18.6187 16.4951 18.5908 16.3418 18.6441L15.2041 19.023L14.5254 18.0054L14.9234 15.6182H15C15.418 15.6182 15.7949 15.8867 15.9375 16.2861C16.0078 16.4854 16.2881 16.6181 16.5 16.6181C17.3272 16.6181 18 17.291 17.9922 18.1719C17.9863 18.3301 18.0556 18.4824 18.1797 18.5816C18.3027 18.6812 18.4688 18.7159 18.6191 18.6748C18.7666 18.6363 18.8877 18.6182 19 18.6182C19.8271 18.6182 20.5 19.2911 20.4922 20.1719C20.4863 20.3301 20.5556 20.4825 20.6797 20.5816C20.8027 20.6808 20.9687 20.7169 21.1191 20.6749C21.2666 20.6363 21.3877 20.6183 21.5 20.6183C22.3271 20.6183 23 21.2911 23 22.1183C23 22.9454 22.3272 23.6182 21.5 23.6182Z" fill="#6F6F6F"/>
            </svg>
            <span class="span_after_svg">Toxic</span></li>
        <li>
            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.5884C8 13.1396 8.44827 13.5883 8.99998 13.5883C9.5517 13.5883 9.99997 13.1396 9.99997 12.5884C9.99997 12.0371 9.5517 11.5884 8.99998 11.5884C8.44827 11.5884 8 12.0371 8 12.5884Z" fill="#6F6F6F"/>
                <path d="M10.8331 14.3571C10.758 14.2482 10.6418 14.1735 10.5109 14.1496C10.38 14.1242 10.2462 14.1554 10.1369 14.2306C9.46304 14.6994 8.53725 14.6994 7.86343 14.2306C7.75407 14.1554 7.6193 14.1242 7.48941 14.1496C7.35853 14.1735 7.24233 14.2482 7.16714 14.3571L5.4601 16.8239C5.30288 17.0509 5.3595 17.3619 5.5861 17.5192C6.59489 18.2189 7.77554 18.5885 9.00014 18.5885C10.2248 18.5885 11.4054 18.2189 12.4142 17.5192C12.6407 17.3619 12.6974 17.0509 12.5402 16.8239L10.8331 14.3571ZM6.58022 16.9621L7.72768 15.3039C8.52258 15.6779 9.47766 15.6779 10.2726 15.3039L11.4201 16.9621C9.93961 17.7843 8.06068 17.7843 6.58022 16.9621Z" fill="#6F6F6F"/>
                <path d="M14.4806 13.538C14.7374 13.538 14.9562 13.3403 14.9776 13.0791C15.0792 11.8559 14.8087 10.6489 14.1964 9.58883C13.584 8.5273 12.6739 7.68941 11.5626 7.16596C11.3165 7.04877 11.0167 7.15424 10.8976 7.40422L9.61533 10.1166C9.55871 10.2368 9.55187 10.3745 9.59677 10.4995C9.64168 10.624 9.73449 10.726 9.85458 10.7827C10.2247 10.9575 10.5284 11.2363 10.7325 11.5884C10.9356 11.9409 11.0255 12.3428 10.9913 12.7515C10.9796 12.8838 11.0216 13.0147 11.1075 13.1162C11.1934 13.2173 11.3165 13.2803 11.4483 13.2915L14.4386 13.5366C14.4523 13.5376 14.4669 13.538 14.4806 13.538ZM11.9884 12.332C11.9513 11.895 11.8204 11.4721 11.5978 11.0884C11.3761 10.7045 11.0763 10.3789 10.7159 10.1294L11.5772 8.30563C12.3038 8.74067 12.9034 9.34906 13.3292 10.0879C13.3302 10.0883 13.3302 10.0883 13.3302 10.0883C13.7559 10.8266 13.9835 11.6508 13.9981 12.497L11.9884 12.332Z" fill="#6F6F6F"/>
                <path d="M6.89271 13.1163C6.97863 13.0148 7.02063 12.8839 7.00891 12.7516C6.97474 12.3429 7.0646 11.9411 7.26771 11.5885C7.4718 11.2365 7.77551 10.9577 8.14563 10.7828C8.26577 10.7262 8.35854 10.6241 8.40344 10.4996C8.44835 10.3746 8.44155 10.2369 8.38488 10.1168L7.10266 7.40435C6.98351 7.1553 6.68665 7.0474 6.4376 7.16608C5.32629 7.68954 4.41612 8.52743 3.80384 9.58896C3.19151 10.649 2.92104 11.8561 3.02257 13.0792C3.04404 13.3404 3.2628 13.5382 3.51963 13.5382C3.53332 13.5382 3.54794 13.5377 3.56163 13.5367L6.55188 13.2916C6.68369 13.2804 6.80674 13.2174 6.89271 13.1163ZM6.01184 12.3322L4.00207 12.4972C4.01674 11.651 4.24427 10.8268 4.67004 10.0886C4.67004 10.0886 4.67004 10.0886 4.67102 10.0881C5.09679 9.34933 5.69641 8.7409 6.42298 8.30585L7.2843 10.1296C6.92393 10.3791 6.62416 10.7048 6.40244 11.0885C6.17979 11.4723 6.04896 11.8952 6.01184 12.3322Z" fill="#6F6F6F"/>
                <path d="M21.4502 19.6187C21.2148 18.4624 20.1318 17.5806 18.9502 17.6186C18.7363 16.5771 17.8672 15.7691 16.7363 15.6372C16.5658 15.3352 16.3196 15.0886 16.0304 14.9121L16.7236 14.5654C16.8926 14.4804 17 14.3076 17 14.1181V4.52604C17.5807 4.31899 18 3.76915 18 3.11815C18 2.29099 17.3272 1.61815 16.5 1.61815H6.99998V1.11818C6.99998 0.841805 6.77639 0.618164 6.50002 0.618164H4.5C4.22363 0.618164 3.99998 0.841805 3.99998 1.11818V1.6182H1.5C0.672844 1.6182 0 2.29104 0 3.1182C0 3.7692 0.41925 4.31899 0.999984 4.52609V21.7103C0.41925 21.9174 0 22.4672 0 23.1182C0 23.9453 0.672844 24.6182 1.5 24.6182H16.5H21.5C22.8789 24.6182 24 23.4966 24 22.1182C24 20.7231 22.8232 19.5752 21.4502 19.6187ZM1.5 2.61818H16.5C16.7754 2.61818 17 2.84229 17 3.1182C17 3.39405 16.7754 3.61816 16.5 3.61816H1.5C1.22461 3.61816 0.999984 3.39405 0.999984 3.11815C0.999984 2.84229 1.22461 2.61818 1.5 2.61818ZM13.584 18.3955L14.584 19.8955C14.709 20.0825 14.9453 20.1636 15.1582 20.0923L16 19.812V21.6182H2.00002V4.61815H16V13.8091L14.2764 14.6709C14.1338 14.7426 14.0332 14.8784 14.0069 15.0361L13.5068 18.0361C13.4863 18.1611 13.5137 18.29 13.584 18.3955ZM16.5 23.6182H1.5C1.22461 23.6182 0.999984 23.3941 0.999984 23.1182C0.999984 22.8423 1.22461 22.6181 1.5 22.6181H16.5C16.7754 22.6181 17 22.8423 17 23.1182C17 23.394 16.7754 23.6182 16.5 23.6182ZM21.5 23.6182H17.9079C17.9639 23.461 18 23.2943 18 23.1182C18 22.4672 17.5807 21.9174 17 21.7103V19.1182C17 18.9575 16.9229 18.8066 16.792 18.7124C16.6611 18.6187 16.4951 18.5908 16.3418 18.6441L15.2041 19.023L14.5254 18.0054L14.9234 15.6182H15C15.418 15.6182 15.7949 15.8867 15.9375 16.2861C16.0078 16.4854 16.2881 16.6181 16.5 16.6181C17.3272 16.6181 18 17.291 17.9922 18.1719C17.9863 18.3301 18.0556 18.4824 18.1797 18.5816C18.3027 18.6812 18.4688 18.7159 18.6191 18.6748C18.7666 18.6363 18.8877 18.6182 19 18.6182C19.8271 18.6182 20.5 19.2911 20.4922 20.1719C20.4863 20.3301 20.5556 20.4825 20.6797 20.5816C20.8027 20.6808 20.9687 20.7169 21.1191 20.6749C21.2666 20.6363 21.3877 20.6183 21.5 20.6183C22.3271 20.6183 23 21.2911 23 22.1183C23 22.9454 22.3272 23.6182 21.5 23.6182Z" fill="#6F6F6F"/>
            </svg>
            <span class="span_after_svg">Toxic</span></li>
    </ul>
</div>

<div>
    <h3>Duration of effect</h3>
    <ul>
        <li class="accent_color"><span>Up to 8 hours</span></li>
        <li><span>Up to 6 hours</span></li>
        <li><span>Up to 6 hours</span></li>
        <li><span>Up to 3 hours</span></li>
    </ul>
</div>

<div>
    <h3>Sticky on skin</h3>
    <ul>
        <li class="accent_color"><span>Applied on clothes</span></li>
        <li><span>Commonly sticky on skin</span></li>
        <li><span>Commonly sticky on skin</span></li>
        <li><span>Airborn</span></li>
    </ul>
</div>

<a href="#getNow" class="button_custom">
    Keep mosquitos at bay
</a>
</div>

<div>
    <h4>Effective up to <span>72</span> hours. <br> Lasts for <span>12</span> months</h4>
    <p>Our stickers are the most effective in the first 12 hours and continue to be effective for up to 72 hours.</p>
    <p>If not in use, seal the BuzzPatch sticker in a provided bag that will keep it active for up to 12 months. </p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/Illustration_new.png" alt="">
</div>

</section>
`

let sliderNav = /*html*/ `
    <div>
        <h3>Try BuzzPatch For 30 Days <br> Without Risk</h3>
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/guarantee.png" alt="guarantee money time" width="192">
        </div>
        <p>BuzzPatch covers you from mosquitoes. Our money-back guarantee covers you from any risk.</p>
        <p>Try BuzzPatch for full 30 days and if you're not happy for whatever reason, shoot one email to name@domain.com and we'll send all your money back. <span>No returns required.</span></p>
        <a href="#getNow" class="button_custom">Keep mosquitos at bay</a>
    </div>
    <p>trusted customer <br> reviews</p>
    <div class="slider_nav">
        <div class="slider_custom_list">
            <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426" alt="">
            <div>
                <p>Fedua A.</p>
                <span>07/31/2020</span>
            </div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/stars.png" alt="">
            <div>
                <p>The sticker itself is very good quality, I was worried it would fall but the glue is very good and I changed the location of the sticker more than once and it never fell!</p>
                <p>Didn't get any mosquito bites, I started to think something works with those little birds!</p>
                <p>Other than that, I had the best experience ordering, following up and exchanging emails since my order was few days delayed. I really can’t be happier with this whole experience!</p>
            </div>
            <div>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/country.png" alt="">
                <span>Verified Buyer</span>
            </div>
        </div>
        <div class="slider_custom_list">
            <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426" alt="">
            <div>
                <p>J***k</p>
                <span>06/19/2020</span>
            </div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/stars.png" alt="">
            <div>
                <p>Love them and so do my kids! From what I can tell they do help keep away mosquitoes! Will buy more! Great seller.</p>
                <p>Shipping to Canada came from within canada seller must have a supplier in Canada leading to speedy delivery!</p>
            </div>
            <div>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/country.png" alt="">
                <span>Verified Buyer</span>
            </div>
        </div>
        <div class="slider_custom_list">
            <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426" alt="">
            <div>
                <p>Lauren S.</p>
                <span>07/13/2020</span>
            </div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/stars.png" alt="">
            <div>
                <p>We just took the patches on a camping trip. We have an 8 month old so therefore I'm hesitant to put much on her to protect her from the mosquitos and it's still quite buggy where we are, so the patches were an awesome option. For the most part, they help immensely!</p>
                <p>On very, very buggy hikes, they didn't necessarily fend absolutely all of the mosquitos off, but did a pretty good job.</p>
            </div>
            <div>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/country.png" alt="">
                <span>Verified Buyer</span>
            </div>
        </div>
        <div class="slider_custom_list">
            <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426" alt="">
            <div>
                <p>Joanne</p>
                <span>06/28/2020</span>
            </div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/stars.png" alt="">
            <div>
                <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)</p>
            </div>
            <div>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/country.png" alt="">
                <span>Verified Buyer</span>
            </div>
        </div>
    </div>
`

document.head.insertAdjacentHTML("beforeend", styleNewLanding)
document.querySelector("header .navbar").insertAdjacentHTML("beforeend", navBlock)

document.querySelector("#featured-reviews .container").remove()
document.querySelector("#featuredReviewndicators").remove()

document.querySelector(".js-mobile.effectiveness").after(document.querySelector("#purchase"))
document.querySelector(".js-mobile.effectiveness").insertAdjacentHTML("beforebegin", blockAllergies)

document
  .querySelector("#purchase .container.package .row.no-gutters #getNow")
  .insertAdjacentHTML("afterbegin", `<p>One BuzzPatch pack can protect your child from bites for up to 90 days</p>`)

document
  .querySelector("#purchase .container.package .row.no-gutters #getNow p:nth-child(3)")
  .insertAdjacentHTML("afterend", `<img src="https://conversionratestore.github.io/projects/buzzpatch/img/select_package_new.png" alt="buzzpatch photo">`)

document.querySelector("#featured-reviews").insertAdjacentHTML("afterbegin", sliderNav)
document.querySelector(".slider_nav").insertAdjacentHTML("afterend", `<a href="#getNow" class="button_custom">Keep mosquitos at bay</a>`)

// btn
scrolling(".block_as_seen_on > a", "Click on Keep Mosqitos At Bay button1")
scrolling(".compar_block a", "Click on Keep Mosqitos At Bay button2")
scrolling("#featured-reviews div a", "Click on Keep Mosqitos At Bay button3")
scrolling("#featured-reviews > a", "Click on Keep Mosqitos At Bay button4")

// Pure js scrolling
function scrolling(upSelector, evt) {
  // Scrolling with raf
  let links = document.querySelectorAll(upSelector),
    speed = 0.3

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: "Exp - LP AB test",
        eventAction: evt,
      })

      event.preventDefault()

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null

      requestAnimationFrame(step)

      function step(time) {
        if (start === null) {
          start = time
        }

        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock)

        document.documentElement.scrollTo(0, r)

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    })
  })
}

//faq`s text
document.querySelector(
  "#js-accordion .card:nth-child(1) .card-body p:nth-child(1)"
).innerHTML = `<p><b>Kids aged 0-2 need 1 patch:</b> One patch placed centrally on clothes (ie, on their jumpsuit on the stomach, chest)</p>`

document.querySelector(
  "#js-accordion .card:nth-child(1) .card-body p:nth-child(2)"
).innerHTML = `<p> <b>Kids aged 3-5 need 2 patches:</b> One patch on the top clothes (sweater, t-shirt) and one on the shorts. </p>`

document.querySelector(
  "#js-accordion .card:nth-child(1) .card-body p:nth-child(3)"
).innerHTML = `<p><b>Kids aged 6+ and parents need 2-4 patches:</b> One patch on the clothing next to each exposed limb (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side of the shorts)</p>`
//
document.querySelector(
  "#js-accordion .card:nth-child(5) .card-body p:nth-child(1)"
).innerHTML = `<p> <b>Kids aged 0-2 need 1</b>: One patch placed centrally on clothes (ie, on their jumpsuit on the stomach, chest)</p>`

document.querySelector(
  "#js-accordion .card:nth-child(5) .card-body p:nth-child(2)"
).innerHTML = `<p><b>Kids aged 3-5 need 2:</b> One patch on the top clothes (sweater, t-shirt) and one on the shorts.</p>`

document.querySelector("#js-accordion .card:nth-child(5) .card-body p:nth-child(3)").innerHTML = `
<p><b>Kids aged 6+ and parents need 2-4:</b> One patch on the clothing next to each exposed limb (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side of the shorts)</p>`

//  slider
setTimeout(() => {
  let slider = $(".slider_nav").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
  })

  slider.on("swipe", () => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
      event: "event-to-ga",
      eventCategory: "Exp - LP AB test",
      eventAction: "Swipe slider",
      eventLabel: `Slider swipe`,
    })
  })
}, 100)

//
document.querySelector(".by_op_daily p > a").addEventListener("click", () => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - LP AB test",
    eventAction: "Click on link text byOprahDaily",
    eventLabel: `Link text byOprahDaily`,
  })
})

// Clicks on Trust Pilot
document.querySelector(".nav_block div:last-child a").addEventListener("click", () => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: "Exp - LP AB test",
    eventAction: "Clicks on Trust Pilot",
  })
})

window.dataLayer = window.dataLayer || []
dataLayer.push({
  event: "event-to-ga",
  eventCategory: "Exp - LP AB test",
  eventAction: "loaded",
})
;(function (h, o, t, j, a, r) {
  h.hj =
    h.hj ||
    function () {
      ;(h.hj.q = h.hj.q || []).push(arguments)
    }
  h._hjSettings = { hjid: 2247058, hjsv: 6 }
  a = o.getElementsByTagName("head")[0]
  r = o.createElement("script")
  r.async = 1
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
  a.appendChild(r)
})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
window.hj =
  window.hj ||
  function () {
    ;(hj.q = hj.q || []).push(arguments)
  }
hj("event", "lp_ab_test")
