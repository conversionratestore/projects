let styleNewLanding = /*html*/ `
<style>

    header .navbar,
    header .navbar.navbar-expand-lg.static-top.fixed-top{
        background: linear-gradient(180deg, #FFFFFF 0%, #DDDDDF 100%);
    }

    li {
        list-style: none;
    }

    #faqs {
        background: #FFFFFF !important;
    }

    #featured-reviews{
        background: linear-gradient(180deg, #ECEEF0 0%, #FFFFFF 100%) !important;
    }

    #js-accordion .card-body{
        background: inherit !important;
    }

    .bitepatch-template header nav .js-btn.btn-primary{
        width: 160px;
        height: 46px;
    }

    .shipping-noti.js-mobile, .js-heading.js-mobile, .js-mobile.wave-bg,
    #ingredients, #flowers, #reviews,
    div .js-mobile.days.lazyautosizes.ls-is-cached.lazyloaded,
    .js-mobile.effectiveness .row.ft,
    .js-mobile.effectiveness .col-md-4.col-sm-4.col-xs-4,
    .js-mobile.effectiveness .container > div:nth-child(2),
    .js-mobile.effectiveness .container > div:nth-child(3),
    .js-mobile.effectiveness .row.js-heading, .js-mobile.effectiveness .row.as-seen,
    #featured-reviews .container, .carousel-indicators{
        display: none !important;
    }

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

    .block_allergies img{
        margin: 0 -15px;
    }
    
    /* .js-mobile.effectiveness*/
    .js-mobile.effectiveness{
        background: linear-gradient(180deg, #FFFFFF 0%, #ECEEF0 100%);
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

let blockEffective = /*html*/ `
<div class="block_effective">
    <h3>Effective up to <span>72</span> hours. <br> Lasts for <span>12</span> months</h3>
    <p>Our stickers are the most effective in the first 12 hours and continue to be effective for up to 72 hours.</p>
    <p>If not in use, seal the BuzzPatch sticker in a provided bag that will keep it active for up to 12 months. </p>
</div>
`

let blockWithoutRisk = /*html*/ `
<div>
    <h3>Try BuzzPatch For 30 Days <br> Without Risk</h3>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/guarantee.png" alt="guarantee money time" width="273">
    </div>
    <p>BuzzPatch covers you from mosquitoes. Our money-back guarantee covers you from any risk.</p>
    <p>Try BuzzPatch for full 30 days and if you're not happy for whatever reason, shoot one email to name@domain.com and we'll send all your money back. No returns required.</p>
    <button>Keep mosquitos at bay</button>
</div>
`

let blockAllergies = /*html*/ `
<div>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/mosquito.jpg" alt="">
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
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_2.jpg" alt="">
                <p class="accent_var">Maria Drew</p>
                <p>Great product! No more tears and fights when applying bug spray. My 1 year old didn’t even know it happened.</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_1.jpg" alt="">
                <p class="accent_var">Joanne</p>
                <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_3.jpg" alt="">
                <p class="accent_var">Jodie N.M.</p>
                <p>Excellent product will keep ordering. Works wonders on my grandson who is allergic. Thank you buzz patch.</p>
                <span>Verified Buyer</span>
            </li>
        </ul>
    </div>
    <button class="button_custom">Keep mosquitos at bay</button>
</section>

<section class="block_allergies">
    <p class="accent_title">Safe for kids and people <br> with allergies</p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/oil.jpg" alt="">
    <p>Unlike sprays with DEET or Picaridin, BuzzPatch contains only natural ingredients –including citronella and geraniol essential oils – that are completely safe for children and adults. 100% DEET free.</p>
    <p class="accent_title">Hides you from bites</p>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/bubble.jpg" alt="">
    <p>Mosquitoes find you by sensing the CO2 you emit. BuzzPatch distinct scent creates a virtual camouflage, making you invisible to mosquitoes.</p>
</section>
`

document.head.insertAdjacentHTML("beforeend", styleNewLanding)
document.querySelector("header .navbar").insertAdjacentHTML("beforeend", navBlock)

document.querySelector(".js-mobile.effectiveness").after(document.querySelector("#purchase"))
document.querySelector(".js-mobile.effectiveness").insertAdjacentHTML("beforebegin", blockAllergies)
document.querySelector(".js-mobile.effectiveness .container").insertAdjacentHTML("afterbegin", blockEffective)
document.querySelector("#featured-reviews").insertAdjacentHTML("afterbegin", blockWithoutRisk)
document.querySelector("#featuredReviewndicators").insertAdjacentHTML("beforebegin", `<p>trusted customer <br> reviews</p>`)
document.querySelector("#featuredReviewndicators").insertAdjacentHTML("beforeend", `<button class="button_custom">Keep mosquitos at bay</button>`)
document
  .querySelector("#purchase .container.package .row.no-gutters")
  .insertAdjacentHTML("afterbegin", `<p>One BuzzPatch pack can protect your child from bites for up to 90 days</p>`)
