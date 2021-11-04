let styleNewLanding = /*html*/ `
<style>

    header .navbar,
    header .navbar.navbar-expand-lg.static-top.fixed-top{
        background: linear-gradient(180deg, #FFFFFF 0%, #DDDDDF 100%);
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
<section>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/mosquito.jpg" alt="">
    </div>
    <div>
        <h2>Protect yourself and your little ones from annoying itchy bites <span>without harsh sprays</span></h2>
        <p>Stick on a BuzzPatch with natural citronella and geraniol essential oils to keep mosquitoes at bay for up to 72 hours. Kids-friendly. Zero DEET.</p>
        <ul>
            <li>natural ingredients</li>
            <li>protection for all your family</li>
        </ul>
    </div>
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
                <p>Maria Drew</p>
                <p>Great product! No more tears and fights when applying bug spray. My 1 year old didn’t even know it happened.</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_1.jpg" alt="">
                <p>Joanne</p>
                <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="https://conversionratestore.github.io/projects/buzzpatch/img/verified_buyer_3.jpg" alt="">
                <p>Jodie N.M.</p>
                <p>Excellent product will keep ordering. Works wonders on my grandson who is allergic. Thank you buzz patch.</p>
                <span>Verified Buyer</span>
            </li>
        </ul>
    </div>
    <button class="button_custom">Keep mosquitos at bay</button>
</section>

<section>
    <h2>Safe for kids and people <br> with allergies</h2>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/oil.jpg" alt="">
    <p>Unlike sprays with DEET or Picaridin, BuzzPatch contains only natural ingredients –including citronella and geraniol essential oils – that are completely safe for children and adults. 100% DEET free.</p>
    <h3>Hides you from bites</h3>
    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/bubble.jpg" alt="">
    <p>Mosquitoes find you by sensing the CO2 you emit. BuzzPatch distinct scent creates a virtual camouflage, making you invisible to mosquitoes.</p>
</section>
`

let blockAsSeenOn = /*html*/ `
<section class="block_as_seen_on">
    <div>
        <h2>AS SEEN ON</h2>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/partners.png" alt="">
    </div>
    <div>
        <img src="https://conversionratestore.github.io/projects/buzzpatch/img/logo_winner.png" alt="">
        <ul>
            <li>
                <img src="" alt="">
                <p>Maria Drew</p>
                <p>Great product! No more tears and fights when applying bug spray. My 1 year old didn’t even know it happened.</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="" alt="">
                <p>Joanne</p>
                <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)</p>
                <span>Verified Buyer</span>
            </li>
            <li>
                <img src="" alt="">
                <p>Jodie N.M.</p>
                <p>Excellent product will keep ordering. Works wonders on my grandson who is allergic. Thank you buzz patch.</p>
                <span>Verified Buyer</span>
            </li>
        </ul>
    </div>
    <button class="button_custom">Keep mosquitos at bay</button>
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
