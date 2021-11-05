let styleNewLanding = /*html*/ `
<style>
    li {
        list-style: none;
    }

    header .navbar,
    header .navbar.navbar-expand-lg.static-top.fixed-top{
        background: linear-gradient(180deg, #FFFFFF 0%, #DDDDDF 100%);
        
    }

    .shipping-noti.js-mobile, .js-heading.js-mobile, .js-mobile.wave-bg,
    #ingredients, #flowers, #reviews,
    div .js-mobile.days.lazyautosizes.ls-is-cached.lazyloaded,
    .js-mobile.effectiveness, 
    #featured-reviews .container, .carousel-indicators{
        display: none !important;
    }

    .bitepatch-template header nav .js-btn.btn-primary{
        width: 160px;
        height: 46px;
    }

    /* nav_block */
    .nav_block{
        width: 100%;
        display: flex;
        padding: 16px 0;
        border-top: 1px solid #D9D9D9;
        margin-top: 12px;
        align-items: center;
    }

    .nav_block div:nth-child(2){
        width: 50%;
        text-align: center;
    }

    .nav_block div:last-child{
        display: flex;
        flex-direction:column;
        width: 22%;
    }

    .nav_block div:last-child > img{
        width: 100%;
    }

    .nav_block div:last-child >span{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 11px;
        line-height: 1.3;
        color: #6F6F6F;
    }

    .nav_block p{
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 12px !important;
        line-height: 1.25 !important;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #6F6F6F;
        width: 28%;
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
        padding: 16px 15px 5px;
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
        padding: 1px 15px 72px;
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
        padding: 0 15px;
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
        margin: 0 -15px;
        width: 110%;
    }
    
    /* block_effective*/
    .block_effective{
        background: linear-gradient(180deg, #FFFFFF 0%, #ECEEF0 100%);
        padding: 72px 15px;
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
        padding: 0 15px 72px !important;
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

    #purchase img.js-mobile.lazyautosizes.lazyloaded{
        display: none !important;
    }

    .package .js-heading .js-btn.btn-primary{
        margin: 0 !important;
    }

    /* featured-reviews*/
    #featured-reviews{
        background: linear-gradient(180deg, #ECEEF0 0%, #FFFFFF 100%) !important;
        padding: 0 15px 72px !important;
        margin: 0 !important;
        max-width: unset !important;
    }

    #featured-reviews div:first-child h3{
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

    #featured-reviews div:first-child p{
        font-family: 'Roboto', sans-serif !important;
        font-weight: 400;
        font-size: 18px !important;
        line-height: 1.5 !important;
        color: #6F6F6F;
        text-align: left;
    }

    #featured-reviews div:first-child p:nth-child(3){
        margin-top: 28px !important;
    }

    #featured-reviews div:first-child p:nth-child(4){
        margin-bottom: 40px !important;
    }

    #featured-reviews div:first-child p:nth-child(4) span{
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

    #featuredReviewndicators a{
        margin-top: 40px;
    }

    #featuredReviewndicators .carousel-inner .carousel-item{
        background: #FFFFFF;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        border-radius: 9px;
    }

    /* faqs*/
    #faqs {
        background: #FFFFFF !important;
        padding: 0;
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
        font-weight: 500 !important;
        font-size: 18px !important;
        line-height: 130% !important;
        color: #212529;
    }
    
    /*footer */
    footer{
        padding-top: 0 !important;
    }

    /* */
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
    display: inline-block;
    width: 100%;
    max-width: 343px;
    padding: 20.5px 20px;
    margin-top: 40px;

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

</style>
`

let navBlock = /*html*/ `
<div class="nav_block">
    <p>Our customers rate us as <b>Excellent</b></p>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot.png" alt="logo trustpilot" width="94" height="23">
    </div>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/trustpilot_stars.svg" alt="logo trustpilot" width="74" height="14">
        <span>Reviews 371</span>
    </div>
</div>
`

let blockWithoutRisk = /*html*/ `
<div>
    <h3>Try BuzzPatch For 30 Days <br> Without Risk</h3>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/guarantee.png" alt="guarantee money time" width="273">
    </div>
    <p>BuzzPatch covers you from mosquitoes. Our money-back guarantee covers you from any risk.</p>
    <p>Try BuzzPatch for full 30 days and if you're not happy for whatever reason, shoot one email to name@domain.com and we'll send all your money back. <span>No returns required.</span></p>
    <a href="#getNow" class="button_custom">Keep mosquitos at bay</a>
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
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/partners.png" alt="">
    </div>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/logo_winner.png" alt="">
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9707C8 12.5219 8.44827 12.9707 8.99998 12.9707C9.5517 12.9707 9.99997 12.5219 9.99997 11.9707C9.99997 11.4194 9.5517 10.9707 8.99998 10.9707C8.44827 10.9707 8 11.4194 8 11.9707Z" fill="#212529"/>
                <path d="M10.833 13.7387C10.7578 13.6298 10.6416 13.5551 10.5108 13.5312C10.3799 13.5057 10.2461 13.537 10.1367 13.6122C9.46291 14.0809 8.53713 14.0809 7.8633 13.6122C7.75394 13.537 7.61918 13.5057 7.48929 13.5312C7.35841 13.5551 7.24221 13.6298 7.16702 13.7387L5.45998 16.2055C5.30276 16.4325 5.35938 16.7435 5.58598 16.9008C6.59477 17.6005 7.77541 17.9701 9.00002 17.9701C10.2246 17.9701 11.4053 17.6005 12.4141 16.9008C12.6406 16.7435 12.6973 16.4325 12.5401 16.2055L10.833 13.7387ZM6.5801 16.3436L7.72755 14.6854C8.52246 15.0595 9.47754 15.0595 10.2725 14.6854L11.4199 16.3436C9.93949 17.1659 8.06055 17.1659 6.5801 16.3436Z" fill="#212529"/>
                <path d="M14.4805 12.9199C14.7373 12.9199 14.956 12.7221 14.9775 12.4609C15.0791 11.2377 14.8086 10.0307 14.1963 8.97067C13.5839 7.90914 12.6738 7.07124 11.5624 6.54779C11.3164 6.4306 11.0165 6.53607 10.8974 6.78606L9.61521 9.49848C9.55859 9.61862 9.55174 9.75629 9.59665 9.88131C9.64156 10.0058 9.73437 10.1079 9.85446 10.1645C10.2246 10.3393 10.5283 10.6181 10.7324 10.9702C10.9355 11.3228 11.0254 11.7246 10.9912 12.1333C10.9795 12.2657 11.0215 12.3965 11.1074 12.4981C11.1933 12.5991 11.3164 12.6621 11.4482 12.6734L14.4385 12.9185C14.4521 12.9194 14.4668 12.9199 14.4805 12.9199ZM11.9883 11.7138C11.9511 11.2768 11.8203 10.854 11.5976 10.4702C11.376 10.0864 11.0762 9.76074 10.7158 9.51123L11.5771 7.68746C12.3037 8.12251 12.9033 8.7309 13.3291 9.4697C13.3301 9.47017 13.3301 9.47017 13.3301 9.47017C13.7558 10.2084 13.9834 11.0327 13.998 11.8788L11.9883 11.7138Z" fill="#212529"/>
                <path d="M6.89259 12.4986C6.97851 12.397 7.02051 12.2661 7.00879 12.1338C6.97462 11.7251 7.06448 11.3233 7.26759 10.9707C7.47168 10.6187 7.77538 10.3399 8.14551 10.165C8.26565 10.1084 8.35842 10.0063 8.40332 9.8818C8.44823 9.75679 8.44143 9.61911 8.38476 9.49897L7.10254 6.78655C6.98338 6.53751 6.68653 6.4296 6.43748 6.54829C5.32617 7.07174 4.41599 7.90963 3.80371 8.97116C3.19139 10.0312 2.92092 11.2383 3.02245 12.4614C3.04392 12.7226 3.26268 12.9204 3.51951 12.9204C3.5332 12.9204 3.54782 12.9199 3.56151 12.9189L6.55176 12.6738C6.68357 12.6626 6.80662 12.5996 6.89259 12.4986ZM6.01171 11.7144L4.00195 11.8794C4.01662 11.0332 4.24415 10.209 4.66992 9.47076C4.66992 9.47076 4.66992 9.47076 4.6709 9.47029C5.09667 8.73154 5.69629 8.1231 6.42285 7.68805L7.28418 9.51177C6.92381 9.76129 6.62404 10.087 6.40232 10.4707C6.17967 10.8545 6.04884 11.2774 6.01171 11.7144Z" fill="#212529"/>
                <path d="M21.4502 19.0005C21.2148 17.8442 20.1318 16.9624 18.9502 17.0005C18.7363 15.959 17.8672 15.1509 16.7363 15.019C16.5658 14.717 16.3196 14.4704 16.0304 14.2939L16.7236 13.9472C16.8926 13.8622 17 13.6894 17 13.5V3.90787C17.5807 3.70083 18 3.15098 18 2.49998C18 1.67283 17.3272 0.999984 16.5 0.999984H6.99998V0.500016C6.99998 0.223641 6.77639 0 6.50002 0H4.5C4.22363 0 3.99998 0.223641 3.99998 0.500016V1.00003H1.5C0.672844 1.00003 0 1.67287 0 2.50003C0 3.15103 0.41925 3.70083 0.999984 3.90792V21.0921C0.41925 21.2992 0 21.849 0 22.5C0 23.3272 0.672844 24 1.5 24H16.5H21.5C22.8789 24 24 22.8784 24 21.5C24 20.105 22.8232 18.957 21.4502 19.0005ZM1.5 2.00002H16.5C16.7754 2.00002 17 2.22412 17 2.50003C17 2.77589 16.7754 3 16.5 3H1.5C1.22461 3 0.999984 2.77589 0.999984 2.49998C0.999984 2.22412 1.22461 2.00002 1.5 2.00002ZM13.584 17.7773L14.584 19.2773C14.709 19.4644 14.9453 19.5454 15.1582 19.4741L16 19.1939V21H2.00002V3.99998H16V13.1909L14.2764 14.0527C14.1338 14.1245 14.0332 14.2602 14.0069 14.418L13.5068 17.418C13.4863 17.543 13.5137 17.6719 13.584 17.7773ZM16.5 23H1.5C1.22461 23 0.999984 22.7759 0.999984 22.5C0.999984 22.2241 1.22461 22 1.5 22H16.5C16.7754 22 17 22.2241 17 22.5C17 22.7759 16.7754 23 16.5 23ZM21.5 23H17.9079C17.9639 22.8428 18 22.6762 18 22.5C18 21.849 17.5807 21.2992 17 21.0921V18.5C17 18.3394 16.9229 18.1885 16.792 18.0943C16.6611 18.0005 16.4951 17.9727 16.3418 18.0259L15.2041 18.4048L14.5254 17.3873L14.9234 15H15C15.418 15 15.7949 15.2685 15.9375 15.668C16.0078 15.8672 16.2881 16 16.5 16C17.3272 16 18 16.6728 17.9922 17.5537C17.9863 17.7119 18.0556 17.8643 18.1797 17.9634C18.3027 18.063 18.4688 18.0977 18.6191 18.0567C18.7666 18.0181 18.8877 18 19 18C19.8271 18 20.5 18.6729 20.4922 19.5538C20.4863 19.712 20.5556 19.8643 20.6797 19.9635C20.8027 20.0626 20.9687 20.0987 21.1191 20.0567C21.2666 20.0182 21.3877 20.0001 21.5 20.0001C22.3271 20.0001 23 20.673 23 21.5001C23 22.3273 22.3272 23 21.5 23Z" fill="#212529"/>
                </svg>
            <span class="span_after_svg">Toxic</span></li>
        <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9707C8 12.5219 8.44827 12.9707 8.99998 12.9707C9.5517 12.9707 9.99997 12.5219 9.99997 11.9707C9.99997 11.4194 9.5517 10.9707 8.99998 10.9707C8.44827 10.9707 8 11.4194 8 11.9707Z" fill="#212529"/>
                <path d="M10.833 13.7387C10.7578 13.6298 10.6416 13.5551 10.5108 13.5312C10.3799 13.5057 10.2461 13.537 10.1367 13.6122C9.46291 14.0809 8.53713 14.0809 7.8633 13.6122C7.75394 13.537 7.61918 13.5057 7.48929 13.5312C7.35841 13.5551 7.24221 13.6298 7.16702 13.7387L5.45998 16.2055C5.30276 16.4325 5.35938 16.7435 5.58598 16.9008C6.59477 17.6005 7.77541 17.9701 9.00002 17.9701C10.2246 17.9701 11.4053 17.6005 12.4141 16.9008C12.6406 16.7435 12.6973 16.4325 12.5401 16.2055L10.833 13.7387ZM6.5801 16.3436L7.72755 14.6854C8.52246 15.0595 9.47754 15.0595 10.2725 14.6854L11.4199 16.3436C9.93949 17.1659 8.06055 17.1659 6.5801 16.3436Z" fill="#212529"/>
                <path d="M14.4805 12.9199C14.7373 12.9199 14.956 12.7221 14.9775 12.4609C15.0791 11.2377 14.8086 10.0307 14.1963 8.97067C13.5839 7.90914 12.6738 7.07124 11.5624 6.54779C11.3164 6.4306 11.0165 6.53607 10.8974 6.78606L9.61521 9.49848C9.55859 9.61862 9.55174 9.75629 9.59665 9.88131C9.64156 10.0058 9.73437 10.1079 9.85446 10.1645C10.2246 10.3393 10.5283 10.6181 10.7324 10.9702C10.9355 11.3228 11.0254 11.7246 10.9912 12.1333C10.9795 12.2657 11.0215 12.3965 11.1074 12.4981C11.1933 12.5991 11.3164 12.6621 11.4482 12.6734L14.4385 12.9185C14.4521 12.9194 14.4668 12.9199 14.4805 12.9199ZM11.9883 11.7138C11.9511 11.2768 11.8203 10.854 11.5976 10.4702C11.376 10.0864 11.0762 9.76074 10.7158 9.51123L11.5771 7.68746C12.3037 8.12251 12.9033 8.7309 13.3291 9.4697C13.3301 9.47017 13.3301 9.47017 13.3301 9.47017C13.7558 10.2084 13.9834 11.0327 13.998 11.8788L11.9883 11.7138Z" fill="#212529"/>
                <path d="M6.89259 12.4986C6.97851 12.397 7.02051 12.2661 7.00879 12.1338C6.97462 11.7251 7.06448 11.3233 7.26759 10.9707C7.47168 10.6187 7.77538 10.3399 8.14551 10.165C8.26565 10.1084 8.35842 10.0063 8.40332 9.8818C8.44823 9.75679 8.44143 9.61911 8.38476 9.49897L7.10254 6.78655C6.98338 6.53751 6.68653 6.4296 6.43748 6.54829C5.32617 7.07174 4.41599 7.90963 3.80371 8.97116C3.19139 10.0312 2.92092 11.2383 3.02245 12.4614C3.04392 12.7226 3.26268 12.9204 3.51951 12.9204C3.5332 12.9204 3.54782 12.9199 3.56151 12.9189L6.55176 12.6738C6.68357 12.6626 6.80662 12.5996 6.89259 12.4986ZM6.01171 11.7144L4.00195 11.8794C4.01662 11.0332 4.24415 10.209 4.66992 9.47076C4.66992 9.47076 4.66992 9.47076 4.6709 9.47029C5.09667 8.73154 5.69629 8.1231 6.42285 7.68805L7.28418 9.51177C6.92381 9.76129 6.62404 10.087 6.40232 10.4707C6.17967 10.8545 6.04884 11.2774 6.01171 11.7144Z" fill="#212529"/>
                <path d="M21.4502 19.0005C21.2148 17.8442 20.1318 16.9624 18.9502 17.0005C18.7363 15.959 17.8672 15.1509 16.7363 15.019C16.5658 14.717 16.3196 14.4704 16.0304 14.2939L16.7236 13.9472C16.8926 13.8622 17 13.6894 17 13.5V3.90787C17.5807 3.70083 18 3.15098 18 2.49998C18 1.67283 17.3272 0.999984 16.5 0.999984H6.99998V0.500016C6.99998 0.223641 6.77639 0 6.50002 0H4.5C4.22363 0 3.99998 0.223641 3.99998 0.500016V1.00003H1.5C0.672844 1.00003 0 1.67287 0 2.50003C0 3.15103 0.41925 3.70083 0.999984 3.90792V21.0921C0.41925 21.2992 0 21.849 0 22.5C0 23.3272 0.672844 24 1.5 24H16.5H21.5C22.8789 24 24 22.8784 24 21.5C24 20.105 22.8232 18.957 21.4502 19.0005ZM1.5 2.00002H16.5C16.7754 2.00002 17 2.22412 17 2.50003C17 2.77589 16.7754 3 16.5 3H1.5C1.22461 3 0.999984 2.77589 0.999984 2.49998C0.999984 2.22412 1.22461 2.00002 1.5 2.00002ZM13.584 17.7773L14.584 19.2773C14.709 19.4644 14.9453 19.5454 15.1582 19.4741L16 19.1939V21H2.00002V3.99998H16V13.1909L14.2764 14.0527C14.1338 14.1245 14.0332 14.2602 14.0069 14.418L13.5068 17.418C13.4863 17.543 13.5137 17.6719 13.584 17.7773ZM16.5 23H1.5C1.22461 23 0.999984 22.7759 0.999984 22.5C0.999984 22.2241 1.22461 22 1.5 22H16.5C16.7754 22 17 22.2241 17 22.5C17 22.7759 16.7754 23 16.5 23ZM21.5 23H17.9079C17.9639 22.8428 18 22.6762 18 22.5C18 21.849 17.5807 21.2992 17 21.0921V18.5C17 18.3394 16.9229 18.1885 16.792 18.0943C16.6611 18.0005 16.4951 17.9727 16.3418 18.0259L15.2041 18.4048L14.5254 17.3873L14.9234 15H15C15.418 15 15.7949 15.2685 15.9375 15.668C16.0078 15.8672 16.2881 16 16.5 16C17.3272 16 18 16.6728 17.9922 17.5537C17.9863 17.7119 18.0556 17.8643 18.1797 17.9634C18.3027 18.063 18.4688 18.0977 18.6191 18.0567C18.7666 18.0181 18.8877 18 19 18C19.8271 18 20.5 18.6729 20.4922 19.5538C20.4863 19.712 20.5556 19.8643 20.6797 19.9635C20.8027 20.0626 20.9687 20.0987 21.1191 20.0567C21.2666 20.0182 21.3877 20.0001 21.5 20.0001C22.3271 20.0001 23 20.673 23 21.5001C23 22.3273 22.3272 23 21.5 23Z" fill="#212529"/>
            </svg>
            <span class="span_after_svg">Toxic</span></li>
        <li>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 11.9707C8 12.5219 8.44827 12.9707 8.99998 12.9707C9.5517 12.9707 9.99997 12.5219 9.99997 11.9707C9.99997 11.4194 9.5517 10.9707 8.99998 10.9707C8.44827 10.9707 8 11.4194 8 11.9707Z" fill="#212529"/>
                <path d="M10.833 13.7387C10.7578 13.6298 10.6416 13.5551 10.5108 13.5312C10.3799 13.5057 10.2461 13.537 10.1367 13.6122C9.46291 14.0809 8.53713 14.0809 7.8633 13.6122C7.75394 13.537 7.61918 13.5057 7.48929 13.5312C7.35841 13.5551 7.24221 13.6298 7.16702 13.7387L5.45998 16.2055C5.30276 16.4325 5.35938 16.7435 5.58598 16.9008C6.59477 17.6005 7.77541 17.9701 9.00002 17.9701C10.2246 17.9701 11.4053 17.6005 12.4141 16.9008C12.6406 16.7435 12.6973 16.4325 12.5401 16.2055L10.833 13.7387ZM6.5801 16.3436L7.72755 14.6854C8.52246 15.0595 9.47754 15.0595 10.2725 14.6854L11.4199 16.3436C9.93949 17.1659 8.06055 17.1659 6.5801 16.3436Z" fill="#212529"/>
                <path d="M14.4805 12.9199C14.7373 12.9199 14.956 12.7221 14.9775 12.4609C15.0791 11.2377 14.8086 10.0307 14.1963 8.97067C13.5839 7.90914 12.6738 7.07124 11.5624 6.54779C11.3164 6.4306 11.0165 6.53607 10.8974 6.78606L9.61521 9.49848C9.55859 9.61862 9.55174 9.75629 9.59665 9.88131C9.64156 10.0058 9.73437 10.1079 9.85446 10.1645C10.2246 10.3393 10.5283 10.6181 10.7324 10.9702C10.9355 11.3228 11.0254 11.7246 10.9912 12.1333C10.9795 12.2657 11.0215 12.3965 11.1074 12.4981C11.1933 12.5991 11.3164 12.6621 11.4482 12.6734L14.4385 12.9185C14.4521 12.9194 14.4668 12.9199 14.4805 12.9199ZM11.9883 11.7138C11.9511 11.2768 11.8203 10.854 11.5976 10.4702C11.376 10.0864 11.0762 9.76074 10.7158 9.51123L11.5771 7.68746C12.3037 8.12251 12.9033 8.7309 13.3291 9.4697C13.3301 9.47017 13.3301 9.47017 13.3301 9.47017C13.7558 10.2084 13.9834 11.0327 13.998 11.8788L11.9883 11.7138Z" fill="#212529"/>
                <path d="M6.89259 12.4986C6.97851 12.397 7.02051 12.2661 7.00879 12.1338C6.97462 11.7251 7.06448 11.3233 7.26759 10.9707C7.47168 10.6187 7.77538 10.3399 8.14551 10.165C8.26565 10.1084 8.35842 10.0063 8.40332 9.8818C8.44823 9.75679 8.44143 9.61911 8.38476 9.49897L7.10254 6.78655C6.98338 6.53751 6.68653 6.4296 6.43748 6.54829C5.32617 7.07174 4.41599 7.90963 3.80371 8.97116C3.19139 10.0312 2.92092 11.2383 3.02245 12.4614C3.04392 12.7226 3.26268 12.9204 3.51951 12.9204C3.5332 12.9204 3.54782 12.9199 3.56151 12.9189L6.55176 12.6738C6.68357 12.6626 6.80662 12.5996 6.89259 12.4986ZM6.01171 11.7144L4.00195 11.8794C4.01662 11.0332 4.24415 10.209 4.66992 9.47076C4.66992 9.47076 4.66992 9.47076 4.6709 9.47029C5.09667 8.73154 5.69629 8.1231 6.42285 7.68805L7.28418 9.51177C6.92381 9.76129 6.62404 10.087 6.40232 10.4707C6.17967 10.8545 6.04884 11.2774 6.01171 11.7144Z" fill="#212529"/>
                <path d="M21.4502 19.0005C21.2148 17.8442 20.1318 16.9624 18.9502 17.0005C18.7363 15.959 17.8672 15.1509 16.7363 15.019C16.5658 14.717 16.3196 14.4704 16.0304 14.2939L16.7236 13.9472C16.8926 13.8622 17 13.6894 17 13.5V3.90787C17.5807 3.70083 18 3.15098 18 2.49998C18 1.67283 17.3272 0.999984 16.5 0.999984H6.99998V0.500016C6.99998 0.223641 6.77639 0 6.50002 0H4.5C4.22363 0 3.99998 0.223641 3.99998 0.500016V1.00003H1.5C0.672844 1.00003 0 1.67287 0 2.50003C0 3.15103 0.41925 3.70083 0.999984 3.90792V21.0921C0.41925 21.2992 0 21.849 0 22.5C0 23.3272 0.672844 24 1.5 24H16.5H21.5C22.8789 24 24 22.8784 24 21.5C24 20.105 22.8232 18.957 21.4502 19.0005ZM1.5 2.00002H16.5C16.7754 2.00002 17 2.22412 17 2.50003C17 2.77589 16.7754 3 16.5 3H1.5C1.22461 3 0.999984 2.77589 0.999984 2.49998C0.999984 2.22412 1.22461 2.00002 1.5 2.00002ZM13.584 17.7773L14.584 19.2773C14.709 19.4644 14.9453 19.5454 15.1582 19.4741L16 19.1939V21H2.00002V3.99998H16V13.1909L14.2764 14.0527C14.1338 14.1245 14.0332 14.2602 14.0069 14.418L13.5068 17.418C13.4863 17.543 13.5137 17.6719 13.584 17.7773ZM16.5 23H1.5C1.22461 23 0.999984 22.7759 0.999984 22.5C0.999984 22.2241 1.22461 22 1.5 22H16.5C16.7754 22 17 22.2241 17 22.5C17 22.7759 16.7754 23 16.5 23ZM21.5 23H17.9079C17.9639 22.8428 18 22.6762 18 22.5C18 21.849 17.5807 21.2992 17 21.0921V18.5C17 18.3394 16.9229 18.1885 16.792 18.0943C16.6611 18.0005 16.4951 17.9727 16.3418 18.0259L15.2041 18.4048L14.5254 17.3873L14.9234 15H15C15.418 15 15.7949 15.2685 15.9375 15.668C16.0078 15.8672 16.2881 16 16.5 16C17.3272 16 18 16.6728 17.9922 17.5537C17.9863 17.7119 18.0556 17.8643 18.1797 17.9634C18.3027 18.063 18.4688 18.0977 18.6191 18.0567C18.7666 18.0181 18.8877 18 19 18C19.8271 18 20.5 18.6729 20.4922 19.5538C20.4863 19.712 20.5556 19.8643 20.6797 19.9635C20.8027 20.0626 20.9687 20.0987 21.1191 20.0567C21.2666 20.0182 21.3877 20.0001 21.5 20.0001C22.3271 20.0001 23 20.673 23 21.5001C23 22.3273 22.3272 23 21.5 23Z" fill="#212529"/>
            </svg>
            <span class="span_after_svg">Toxic</span></li>
    </ul>
</div>

<div>
    <h3>Duration of effect</h3>
    <ul>
        <li class="accent_color"><span>Up to 12 hours</span></li>
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

<a href="#getNow">
    Keep mosquitos at bay
</a>
</div>

<div>
    <h4>Effective up to <span>72</span> hours. <br> Lasts for <span>12</span> months</h4>
    <p>Our stickers are the most effective in the first 12 hours and continue to be effective for up to 72 hours.</p>
    <p>If not in use, seal the BuzzPatch sticker in a provided bag that will keep it active for up to 12 months. </p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/illustration.png" alt="">
</div>

</section>
`

document.head.insertAdjacentHTML("beforeend", styleNewLanding)
document.querySelector("header .navbar").insertAdjacentHTML("beforeend", navBlock)

document.querySelector(".js-mobile.effectiveness").after(document.querySelector("#purchase"))
document.querySelector(".js-mobile.effectiveness").insertAdjacentHTML("beforebegin", blockAllergies)

document
  .querySelector("#purchase .container.package .row.no-gutters #getNow")
  .insertAdjacentHTML("afterbegin", `<p>One BuzzPatch pack can protect your child from bites for up to 90 days</p>`)
document
  .querySelector("#purchase .container.package .row.no-gutters #getNow p:nth-child(3)")
  .insertAdjacentHTML("afterend", `<img src="https://conversionratestore.github.io/projects/buzzpatch/img/select_package.png" alt="buzzpatch photo">`)

document.querySelector("#featured-reviews").insertAdjacentHTML("afterbegin", blockWithoutRisk)
document.querySelector("#featuredReviewndicators").insertAdjacentHTML("beforebegin", `<p>trusted customer <br> reviews</p>`)
document.querySelector("#featuredReviewndicators").insertAdjacentHTML("beforeend", `<a href="#getNow" class="button_custom">Keep mosquitos at bay</a>`)

// btn
scrolling(".block_as_seen_on a")
scrolling(".compar_block a")
scrolling("#featured-reviews div a")
scrolling("#featuredReviewndicators a")

// Pure js scrolling
function scrolling(upSelector) {
  // Scrolling with raf
  let links = document.querySelectorAll(upSelector),
    speed = 0.6

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
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

//
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
