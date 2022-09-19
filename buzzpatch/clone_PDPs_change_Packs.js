/** Variables */
/* document shortcuts */
const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const getId = document.getElementById.bind(document)

/* other variables  */
const intervalTimeout = 200
const imgFolderUrl = 'https://conversionratestore.github.io/projects/buzzpatch/img/'

const style = /*html*/`
    <style>
        .product-single .product-single__title {
          font-family: 'Roboto', 'DIN Next', sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 130%;
          color: #0C0B0B;
          text-transform: initial;
          text-align: left;
          text-decoration-line: underline;
          margin-bottom: 1px !important;
          letter-spacing: normal;
        }

        #ProductMeta-product-template .jdgm-star {
          font-weight: 400;
        }

        .jdgm-prev-badge__text {
          font-family: 'Roboto', 'DIN Next', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 130%;
          /* or 18px */
          color: #6F6F6F;
          text-decoration-line: underline;
        }
        .site-header__logo .mobile-logo,
        .product-single .text-money,
        #productSmallDescription,
        #AddToCartForm--product-template .grid,
        .custom-risk-free,
        #ProductTabs {
          display: none !important;
        } 

        #shopify-section-dbtfy-product-page-builder,
        #shopify-section-footer,
        #shopify-section-product-row + #featured-reviews {
          display: none !important;
        }

        .js-iphone .transparent {
            margin-top: 0 !important;
        }

        #shopify-section-header {
          display: block !important;
        }
        #shopify-section-header header {
          background: #fff !important;
          padding-bottom: 0 !important;
        }

        .footer-nav ul {
          display: flex;
          flex-direction: column;
        }

        .faqs #js-accordion .card-link {
          text-transform: none;
        }

        .fr_wave {
          margin-bottom: -130px;
        }

        .form {
          margin-top: 35px;
          text-align: center;
        }

        .product-single__add-to-cart button {
          padding: 19px;
        }

        #section-product-template .prices span {
          text-decoration: underline;
        }

        .bp-tooltip .bp-tooltiptext {
          left: calc(50% - 150px) !important;
        }

        .bp-tooltip .bp-tooltiptext:after {
          left: 80% !important;
        }

        .fr_form .js-packs {
          max-width: 165px;
        }

        .fr_form .js-packs label.radio-inline {
          border-radius: 6px !important;
        }

        .fr_form .js-total {
          font-weight: 700;
          font-size: 24px;
        }

        /* packs */
        .add_pack {
            text-align: center;
            margin-top: 25px;
        }

        .btn__add-to-cart-text {
          font-size: 16px !important;
          font-family: 'DINEngschrift LT', 'Roboto', sans-serif !important;
          font-weight: 400 !important;
        }

        .packs {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        #ProductMeta-product-template .packs {
          padding-right: 15px;
        }

        .packs p {
            color: #000;
            margin: 0;
            line-height: 20px !important;
        }

        .package .pack_name,
        p.pack_name {
            letter-spacing: 0.02em;
            text-transform: uppercase;
            font-family: 'DINEngschrift LT', 'Roboto', sans-serif;
            font-weight: 400 !important;
            font-size: 16px !important;
            margin: 0 !important;
            margin-bottom: 2px !important;
        }
        .package .each,
        p.each {
            text-decoration-line: underline;
            font-family: 'Roboto', sans-serif;
            font-weight: 400 !important;
            font-size: 14px !important;
            margin: 0 !important;
        }

        .pack {
            background: #fff;
            border-radius: 6px;
            padding: 6px;
            transition: background .3s ease-in-out;
            cursor: pointer;
            border: 2px solid #FF3C7F;
            width: 49%;
            margin-bottom: 8px;
        }

        .pack.selected {
            background: #FF3C7F;
        }

        .pack.selected p {
            color: #fff;
        }

        .fr_pack {
            border-radius: 0px 6px 6px 6px;
        }

        .price_wrapper p {
            text-decoration-line: underline;
            font-family: 'Roboto', sans-serif;
            line-height: 130%;
            margin: 0;
            /* or 31px */
        }

        .price_wrapper .pack_name {
            font-weight: 700;
            font-size: 24px;
            color: #0C0B0B;
        }

        .price_wrapper .price {
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          font-size: 24px !important;
          margin: 17px 0 4px !important;
          line-height: 130%;
          color: #0C0B0B;
        }

        .price_wrapper .reg_price {
            font-weight: 400;
            font-size: 14px !important;
            color: #212529;
            margin-bottom: 20px !important;
        }

        .fr_pack {
          position: relative;
        }

        .fr_pack::before {
          content: 'Bestseller';
          position: absolute;
          top: -20px;
          left: -2px;
          background: #0C0B0B;
          border-radius: 3px 3px 0px 0px;
          display: block;
          padding: 4px 20px 3px;
          font-family: 'DINEngschrift LT', 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        #purchase h2 {
          font-family: 'DINEngschrift LT', 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 36px;
          line-height: 110%;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #0C0B0B;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #purchase h2 img {
          width: auto;
          margin: 0 1px 0 10px;
        }

        .bp-comparison h2 img {
            margin-bottom: 5px;
        }

        /* #purchase [data-pack-reg] {
          text-decoration:line-through;
        }

        #purchase .pack {
          padding: 12px;
        }

        #purchase .price_wrapper p {
          text-decoration: none;
        } */
        

        .product-single__add-to-cart {
          display: none;
        } 
        
        .my_btn {
          display: block;
        }

        .my_btn .material-icons-outlined {
            font-size: 17px;
            font-weight: 400 !important;
            display: inline-block !important;
            line-height: 1.5 !important;
        }

        .my_btn .btn__add-to-cart-text {
            display: inline-block !important;
            line-height: 1.5 !important;
        }

        .mobile-logo {
          display: none;
        }

        #flowers p,
        #flowers h3 {
          text-decoration: underline;
        }

        /* my slider */

        .slider {
          margin-top: -30px;
        }

        .slide {
          /* margin: 15px;*/
          padding: 20px 15px;
          
        }

        .slide_inner {            
            padding: 17px 24px 30px;
            box-shadow: 0 4px 24px #00000024;
        } 

        .slide .photo {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .info_wrapper {
            display: flex;
            justify-content: space-between;
        }

        .info_wrapper p {
          font-size: 14px !important;
          margin: 0;
        }

        .info_wrapper .name {            
            font-weight: 700;
            color: #515151;
        }

        .info_wrapper .date {
            font-weight: 400;
            color: #00000073;            
        }

        .info_wrapper + .d-block {
          margin: 15px 0;
        }

        .info_wrapper + p {
          font-size:18px !important;
          color: #515151 !important;
          line-height: 24px!important;
        }

        .slide .d-block + p {
          text-align: left;
        }

        .tns-nav {
          margin-top: -42px;
          margin-bottom: -5px;
          z-index: 1;
        }

        .tns-nav button {
          width: 10px;
          height: 10px;
          background-color: #c9c9c9;
          margin: 0 3px;
          border-radius: 50%;
          border: none !important;
        }

        button.tns-nav-active {
          background: #ff3c7f;
        }

        #getNow .days {
            margin-top: 40px !important;
        }

        .ziplock img {
            position: relative;
        }

        .ziplock > div::before {
            content: "";
            position: absolute;
            top: -28px;
            left: 18px;
            display: block;
            width: 56px;
            height: 56px;
            background-image: url(${imgFolderUrl}buzz_green.svg);
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 1;
        }
    </style>
`

/* HTML elements */
const buzzPage = /*html*/`
<div class="js-mobile wave-bg fr_wave">
    <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1099015291450863609" width="100%" height="auto" class=" ls-is-cached lazyloaded">
</div>
<div class="js-main js-iphone">
<section class="js-mobile transparent" id="flowers">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-4">
        <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/100.svg?v=11966240807291520526" width="54"
          class=" ls-is-cached lazyloaded">
      </div>
      <div class="col-md-8 col-sm-8 col-xs-8">
        <h3 class="js-title text-dark">100% natural content &amp; chemical free </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p><br>BuzzPatch has only natural ingredients: citronella and geraniol oils. It is completely chemical free
          and safe for kids. </p>
      </div>
    </div>
  </div>
  <div class="flowers-bg">
    <img data-sizes="auto"
      data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501"
      data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501 900w"
      width="100%" height="auto" class="lazyautosizes ls-is-cached lazyloaded" sizes="426px" srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501 900w"
      src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/flowers-bg_300x.png?v=2101775064622886501">
  </div>

  <div class="js-mobile wave-bg">
    <img data-sizes="auto"
      data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335"
      data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335 900w"
      width="100%" height="auto" class="lazyautosizes ls-is-cached lazyloaded" sizes="426px" srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335 900w"
      src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/white-wave_300x.png?v=2042763875995105335">
  </div>
</section>

<section class="js-mobile effectiveness">
  <div class="container">
    <div class="row scientific">
      <div class="col-md-4 col-sm-4 col-xs-4">
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463 600w,
         //cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463 900w"
          width="54" class="lazyautosizes ls-is-cached lazyloaded" sizes="54px" srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463 600w,
         //cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463 900w"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_2_54x.png?v=2979118271675250463">

      </div>
      <div class="no-padding col-md-8 col-sm-8 col-xs-8 d-flex align-items-center">
        <h3 class="js-title text-dark">Scientifically proven to provide better protection than other mosquito
          repellants
          <span class="bp-tooltip"><img
              src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
            <span class="bp-tooltiptext">Poseidon Sciences R&amp;D conducted research in 2021 to compare the
              repellent effect of Buzzpatch and other experimental patches against the common house mosquito.</span>
          </span>
        </h3>
      </div>
      <div class="col-sm-12 det">
        <p><br>Poseidon Science R&amp;D conducted scientific research to compare BuzzPatch mosquito repellant with
          other commonly available repellants on the market.
          BuzzPatch stickers were scientifically proven to provide 16% better protection than next best
          alternatives.</p>
        <div class="line-box">
          <h4>BuzzPatch provides <span>16% better protection for your family</span> than the next best repellant of
            similar kind on the market</h4>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 col-sm-4 col-xs-4">
        <img alt="Clock Icon Showing 12 Hours"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/12-hours_54x.jpg?v=13871404309696215229"
          data-sizes="auto" width="54" class="lazyautosizes ls-is-cached lazyloaded" sizes="76px"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/12-hours_54x.jpg?v=13871404309696215229">

      </div>
      <div class="col-md-8 col-sm-8 col-xs-8 d-flex align-items-center">
        <h3 class="js-title text-dark">Effective up to 72 hours</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <p><br>Duration of protection - Up to 12 hours.</p>
      </div>
    </div>
    <div class="row ziplock">
      <div class="col-md-12 col-sm-12 col-xs-12 text-center">

        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470 900w" width="300"
          class="lazyautosizes ls-is-cached lazyloaded" sizes="300px" srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470 900w"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/packs_300x.jpg?v=6489235035187760470">


      </div>
    </div>
    <div class="row ft">
      <div class="col-md-4 col-sm-4 col-xs-4">
        <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/shield.svg?v=13688301315481744271" width="36"
          class=" ls-is-cached lazyloaded">
      </div>
      <div class="col-md-8 col-sm-8 col-xs-8 d-flex align-items-center">
        <h3 class="js-title text-dark">Protects the whole body</h3>
      </div>
      <div class="col-sm-12">
        <p><br>Stick patches to your kids' clothes to keep them safe from mosquitoes</p>
      </div>
    </div>
    <div class="row ft">
      <div class="col-md-4 col-sm-4 col-xs-4">
        <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/cart.svg?v=2390292259703606512" width="36"
          class=" ls-is-cached lazyloaded">
      </div>
      <div class="col-md-8 col-sm-8 col-xs-8 d-flex align-items-center">
        <h3 class="js-title text-dark">Safe for kids 0+ year old</h3>
      </div>
      <div class="col-sm-12">
        <p><br>100% natural components and medical adhesive are safe for even the littlest ones</p>
      </div>
    </div>
    <div class="product-single__add-to-cart my_btn">
  <button class="btn btn--primary btn--add-to-cart full">
    <span class="btn__text">
      <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
      <span class="btn__add-to-cart-text">Add to Cart</span>
    </span>
  </button>
</div>
  </div>
</section>

<div class="wave-effect js-mobile">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="#F1F3F4" fill-opacity="1"
      d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,101.3C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
    </path>
  </svg>

</div>
<section class="bp-comparison js-mobile" style="margin-bottom:30px;">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="js-title text-dark">Buzzpatch<img src="${imgFolderUrl}buzz_green.svg" alt="naturalpatch green"> vs other mosquito repellents</h2>
      </div>
    </div>

    <div class="js-mobile bp-mob-table-container">
      <div class="row compare-table">
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-compare_76x.png?v=3235242743116352408"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-compare_76x.png?v=3235242743116352408 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="76px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-compare_76x.png?v=3235242743116352408 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-compare_76x.png?v=3235242743116352408">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-sprays_76x.png?v=18038647586145222622"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-sprays_76x.png?v=18038647586145222622 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="75px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-sprays_76x.png?v=18038647586145222622 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-sprays_76x.png?v=18038647586145222622">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-lotions_76x.png?v=4478455308598888939"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-lotions_76x.png?v=4478455308598888939 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="75px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-lotions_76x.png?v=4478455308598888939 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-lotions_76x.png?v=4478455308598888939">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-candles_76x.png?v=15541324591390221748"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-candles_76x.png?v=15541324591390221748 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="75px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-candles_76x.png?v=15541324591390221748 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-candles_76x.png?v=15541324591390221748">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Apply to skin
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">Is it necessary to apply the mosquito repellent on skin?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <span>Airborn</span>
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/x_14x.png?v=12174782439924589987"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/x_14x.png?v=12174782439924589987 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="14" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/x_14x.png?v=12174782439924589987 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/x_14x.png?v=12174782439924589987">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Contains chemicals (like DEET or Picaridin)
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">Does this contain chemicals with harmful side effects?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="14" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213">
          <span>Uses natural<br> essential oils</span>
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Unpleasant chemical smell
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">Does the repellent have an unpleasant smell commonly associated with
                chemical use?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <span>Pleasant smell of essential oils</span>
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="17" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check_17x.png?v=6019552577780284833">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Causes allergies
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">Does the mosquito repellent contain elements that are know to cause
                allergic reactions?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <span>Not known to cause allergic reaction</span>
        </div>
        <div class="col-3 text-center">
          <span>Can cause allergic reaction</span>
        </div>
        <div class="col-3 text-center">
          <span>Can cause allergic reaction</span>
        </div>
        <div class="col-3 text-center">
          <span>Can cause allergic reaction</span>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Toxicity
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">Does the repellent contain toxic elements that may have a negative effect
                on your or your children's health?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="14" sizes="106px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non_14x.png?v=11073277264162323213">
          <span>Non toxic</span>
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="75px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="75px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987">
        </div>
        <div class="col-3 text-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987 300w"
            class="lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="75px"
            srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987 300w"
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-mob-toxic_76x.png?v=6026744332218050987">
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Duration of effect
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">How long does the effect of the mosquito repellent last?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <span>Up to 72 hours</span>
        </div>
        <div class="col-3 text-center">
          <span>Up to 6 hours</span>
        </div>
        <div class="col-3 text-center">
          <span>Up to 6 hours</span>
        </div>
        <div class="col-3 text-center">
          <span>Up to 3 hours</span>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-12 text-center">
          <p>Sticky on skin
            <span class="bp-tooltip"><img
                src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=10541259777626978762">
              <span class="bp-tooltiptext">Is the substance of the mosquito repellent sticky on skin?</span>
            </span>
          </p>
        </div>
      </div>
      <div class="row compare-table">
        <div class="col-3 text-center">
          <span>Applied on clothes</span>
        </div>
        <div class="col-3 text-center">
          <span>Commonly sticky on skin</span>
        </div>
        <div class="col-3 text-center">
          <span>Commonly sticky on skin</span>
        </div>
        <div class="col-3 text-center">
          <span>Airborn</span>
        </div>
      </div>
      <hr>
      <div class="product-single__add-to-cart my_btn">
  <button class="btn btn--primary btn--add-to-cart full">
    <span class="btn__text">
      <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
      <span class="btn__add-to-cart-text">Add to Cart</span>
    </span>
  </button>
</div>
    </div>
  </div>
</section>

<section class="js-mobile effectiveness">
  <div class="container">
    <div class="row as-seen">
      <div class="col-lg-12 text-center js-auto">
        <h4>As seen on:</h4>
      </div>
      <div class="row as-seen">
        <div class="col-sm-6  d-flex align-items-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/yahoo_140x.jpg?v=11856174160096856428"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/yahoo_140x.jpg?v=11856174160096856428 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/yahoo_140x.jpg?v=11856174160096856428 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/yahoo_140x.jpg?v=11856174160096856428 900w"
            class="lazyload" width="140">

        </div>
        <div class="col-sm-6  d-flex align-items-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/womenshealth_140x.jpg?v=10728158979651276781"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/womenshealth_140x.jpg?v=10728158979651276781 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/womenshealth_140x.jpg?v=10728158979651276781 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/womenshealth_140x.jpg?v=10728158979651276781 900w"
            class="lazyload" width="150">

        </div>
        <div class="col-sm-6  d-flex align-items-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/usa-today_140x.jpg?v=18420552357661201709"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/usa-today_140x.jpg?v=18420552357661201709 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/usa-today_140x.jpg?v=18420552357661201709 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/usa-today_140x.jpg?v=18420552357661201709 900w"
            class="lazyload" width="120">

        </div>
        <div class="col-sm-6  d-flex align-items-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/delish_140x.jpg?v=8379897234902421147"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/delish_140x.jpg?v=8379897234902421147 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/delish_140x.jpg?v=8379897234902421147 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/delish_140x.jpg?v=8379897234902421147 900w"
            class="lazyload" width="100">

        </div>
        <div class="col-sm-6  d-flex align-items-center">
          <img data-sizes="auto"
            data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/today_140x.jpg?v=1508451793026127963"
            data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/today_140x.jpg?v=1508451793026127963 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/today_140x.jpg?v=1508451793026127963 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/today_140x.jpg?v=1508451793026127963 900w"
            class="lazyload" width="80">

        </div>
      </div>
    </div>
  </div>
</section>

<section id="featured-reviews" class="featured-reviews js-mobile">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 text-center ">
        <h2 class="js-title   text-dark">Why people love <br> BuzzPatch</h2>
      </div>
    </div>
  </div>
  <div class="slider">
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">Fadya A.</p>
                    <p class="date">07/31/2021</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                <p>The sticker itself is very good quality, I was worried it would fall but the glue is very good and I
                    changed the location of the sticker more than once and it never fell! Didn't get any mosquito bites,
                    I
                    started to think something works with those little birds!
                    Other than that, I had the best experience ordering, following up and exchanging emails since my
                    order
                    was few days delayed. I really can’t be happier with this whole experience!</p>
                <img class="d-block"
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" "
                    width="100%" height="auto">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">J***k</p>
                    <p class="date">06/19/2021</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                <p>Love them and so do my kids! From what I can tell they do help keep away mosquitoes! Will buy more! Great seller. Shipping to Canada came from within canada seller must have a supplier in Canada leading to speedy delivery! </p>
                <img class="d-block"
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" "
                    width="100%" height="auto">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">Lauren S.</p>
                    <p class="date">07/13/2021</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                <p>We just took the patches on a camping trip. We have an 8 month old so therefore I'm hesitant to put much on her to protect her from the mosquitos and it's still quite buggy where we are, so the patches were an awesome option. For the most part, they help immensely! On very, very buggy hikes, they didn't necessarily fend absolutely all of the mosquitos off, but did a pretty good job.
            </p>
                <img class="d-block"
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" "
                    width="100%" height="auto">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">Joanne</p>
                    <p class="date">06/28/2021</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                    <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :)             </p>
                <img class="d-block"
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" "
                    width="100%" height="auto">
            </div>
        </div>
    </div>
</section>
<section id="ingredients" class="ingredients vids">
  <div class="container">
    <div class="col-lg-7 text-center js-video ">
      <a href="#" class="js-video" alt="video" data-toggle="modal" data-target="#vid-modal1">
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/video_c9e0b370-69c5-4dc5-b783-69f71b771e4a_1000x.jpg?v=11938450708874553882"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/video_c9e0b370-69c5-4dc5-b783-69f71b771e4a_1000x.jpg?v=11938450708874553882 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/video_c9e0b370-69c5-4dc5-b783-69f71b771e4a_1000x.jpg?v=11938450708874553882 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/video_c9e0b370-69c5-4dc5-b783-69f71b771e4a_1000x.jpg?v=11938450708874553882 900w"
          class="img-fluid z-depth-1 lazyload" width="100%"></a>
    </div>

    <div class="row">
      <div class="video-modal">
        <div class="modal fade" id="vid-modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <button type="button" class="btn  " data-dismiss="modal">Close</button>
              <div class="modal-body ">
                <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <video id="js-video" class="video-fluid z-depth-1" loop="" controls="">
                    <source src="https://cdn.shopify.com/videos/c/o/v/42ef5eed4bcd4ef6bf5e24d92d7cd24a.mp4"
                      type="video/mp4">
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-single__add-to-cart my_btn">
  <button class="btn btn--primary btn--add-to-cart full">
    <span class="btn__text">
      <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
      <span class="btn__add-to-cart-text">Add to Cart</span>
    </span>
  </button>
</div>
  </div>
</section>

<section id="faqs" class="faqs">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 text-left ">
        <h2 class="js-title big  text-dark">FAQ’s</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div id="js-accordion">
          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#collapse1">
                <span class="arrow down"></span> How do I place stickers to protect my whole child's body? </a>
            </div>
            <div id="collapse1" class="collapse" data-parent="#js-accordion">
              <div class="card-body">
                <p>Kids aged 0-2 need 1 patch: One patch placed centrally on clothes (ie, on their jumpsuit on the
                  stomach, chest)</p>
                <p> Kids aged 3-5 need 2 patches: One patch on the top clothes (sweater, t-shirt) and one on the
                  shorts. </p>
                <p>Kids aged 6+ and parents need 2-4 patches: One patch on the clothing next to each exposed limb
                  (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and
                  right side of the shorts)</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#collapse2">
                <span class="arrow down"></span> How long will sealed stickers last?
              </a>
            </div>
            <div id="collapse2" class="collapse" data-parent="#js-accordion">
              <div class="card-body">
                <p>The bag has a ziplock. Put the unused patches into the bag and seal it. BuzzPatch when sealed
                  will last up to 24 months.</p>
                <p>If you have a pack that is past its used by date, send a photo of the unopened pack to
                  care@naturalpatch.com and we'll send you a new one.</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#collapse3">
                <span class="arrow down"></span> Where are BuzzPatch stickers made?
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
                <span class="arrow down"></span> How do they work?
              </a>
            </div>
            <div id="collapse4" class="collapse" data-parent="#js-accordion">
              <div class="card-body">
                <p>Mosquitoes find us by sensing the carbon dioxide (CO2) we emit when we exhale. Certain compounds,
                  including specific essential oils, overpower the CO2 we emit, essentially hiding us from
                  mosquitoes.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#collapse5">
                <span class="arrow down"></span> How many stickers do I need?
              </a>
            </div>
            <div id="collapse5" class="collapse" data-parent="#js-accordion">
              <div class="card-body">
                <p> Kids aged 0-2 need 1: One patch placed centrally on clothes (ie, on their jumpsuit on the
                  stomach, chest)</p>
                <p>Kids aged 3-5 need 2: One patch on the top clothes (sweater, t-shirt) and one on the shorts.</p>
                <p>Kids aged 6+ and parents need 2-4: One patch on the clothing next to each exposed limb (one on
                  the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side
                  of the shorts)</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#collapse6">
                <span class="arrow down"></span> How long will shipping take?
              </a>
            </div>
            <div id="collapse6" class="collapse" data-parent="#js-accordion">
              <div class="card-body">
                <p>All orders are dispatched the same day, and usually take 3-5 days to USA, Canada and Australia.
                  However, with current travel restrictions, we’re seeing shipping times range between 10-15 days,
                  and in some cases up to 25 days.</p>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#collapse7">
                <span class="arrow down"></span>Is shipping free?
              </a>
            </div>
            <div id="collapse7" class="collapse" data-parent="#js-accordion">
              <div class="card-body">
                <p>Yes! We provide FREE, worldwide shipping on all orders.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="purchase" class="purchase">
  <div class="container package">
    <div class="row no-gutters">
      <div id="getNow" class="col-lg-6 col-md-6 col-sm-12 text-center grey js-heading">
        <h2>SELECT <img src="${imgFolderUrl}buzz_green.svg" alt="naturalpatch green">PACKAGE</h2>
        <p>60 patches in 1 pack</p>
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418 350w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418 900w"
          width="100%" class="js-mobile lazyload" height="auto">
        <p class="empty_p"><br></p>
        <img style="max-width:320px;" data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_320x.png?v=16596833512374992535"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_320x.png?v=16596833512374992535 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_320x.png?v=16596833512374992535 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_320x.png?v=16596833512374992535 900w"
          class="js-mobile lazyload days" width="100%">
      </div>
    </div>
  </div>
</section>

</div>

<style>
.cart-main.icart-top-right-main {
  display: none !important;
  visibility: hidden;
  opacity: 0;
}

.js-main img {
  height: auto;
}

body .included .boxes {
  background-image: url(//cdn.shopify.com/s/files/1/0387/0749/4956/files/Buzzpatch-60-min_728x.jpg?v=11158785645517671735);
}

.trust-rating {
  background: #fff;
  color: #000;
  text-align: left;
  padding: 18px 22px;
  border-radius: 15px;
  font-size: 15px;
  max-width: 315px;
  margin: auto;
  line-height: 1.2;
  margin-bottom: 20px;
}

.trust-rating .stars {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: bold;
  font-size: 13px;
}

.trust-rating img {
  max-width: 150px;
  margin-top: 5px;
}

#featured-reviews + #featured-reviews {
    display: none
}
</style>
`
const sleepyPage = /*html*/`
<style>
  @font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url({'Roboto.woff2' | asset_url }) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
   #featured-reviews {
    display: none;
}

#featured-reviews.my_featured {
    display: block !important;
}
.pack {
    border: 2px solid #0091D7;
}
.pack.selected {
    background: #0091D7;
}

.btn--primary {
    background-color: #0091D7;
    border-color: #0091D7;
    box-shadow: 0px 4px 15px rgba(72, 67, 69, 0.51);
}

.btn__add-to-cart-text,
.package .pack_name, p.pack_name,
.fr_pack::before {
    font-family: 'Din Condensed','Roboto',sans-serif !important;
}

#flowers p, #flowers h3 {
    text-decoration: none;
}

.ziplock > div::before {
    top: -25px;
    left: 80px;
}

.btn--primary:not(.disabled):not([disabled]):active {
    background-color: #c6acff !important;
    border-color: #bea0ff !important;
}

#purchase h2 {
    font-family: 'Bebas','Roboto',sans-serif;
}
.bp-comparison h2 img {
    margin-bottom: 15px;
}

.flower_div {
    background-image: url(${imgFolderUrl}flower.svg) !important;
    background-size: cover;
    background-repeat: no-repeat;
    height: 225px;
    width: 100%;
    margin-top: -15px;
}

.flower_div p {
    padding: 0 15px;
    text-align: right;
    font-family: 'Roboto', sans-serif;
font-weight: 400 !important;
font-size: 16px !important;
line-height: 24px !important;
color: #224797;
margin: 15px 0 0;
}
</style>
<div class="js-mobile wave-bg" style="height: 80px;">
          <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/wave.svg?v=1619943742" width="100%" class=" ls-is-cached lazyloaded" loading="lazy">
      </div>
<div class="js-main js-iphone sleepy_page">
      <section class="js-mobile  transparent" id="flowers">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-4"> 
              <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860 900w" width="59" class="lazyautosizes ls-is-cached lazyloaded" sizes="59px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860"> 
            </div> 
            <div class="col-md-8 col-sm-8 col-xs-8">
              <h3 class="js-title text-dark">100% natural content &amp; chemical free</h3>
            </div>
          </div> 
          <div class="row">
            <div class="col-sm-12">
              <p><br>Sleepy Patches use a specially crafted formulation of essential oils to bring on sleep. Sleepy Patch is designed to help calm the nervous system, the mind and stimulate an overall relaxed sensation. </p>
            </div>
          </div>
          <div class="row">
            
          <div class="flower_div">
            <p><b>Active Ingredients:</b><br>Mandarin, Lavender, Sweet Marjoram,<br>Vetiver, Essential Oils.</p>
            </div>
          
          </div>
        </div>  
        </section>
  
      <section class="js-mobile scientific">
        <div class="container">
          <div class="row r-flex"> 
            <div class="col-md-12 col-sm-12 col-xs-12">  
              <div class="t-left">
                  <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/microscope_50x.jpg?v=4734067180354895254" class=" ls-is-cached lazyloaded">
              </div>
              <div class="t-right">
                  <h3 class="text-dark">Scientifically proven to solve sleep problems and improve well-being</h3>
              </div>  
            </div>  
          </div> 
  
          <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                  <p>SleepyPatch calms the nervous system and helps to fall asleep, and as result <b>stimulates more REM sleep</b>, which is so important to our body. </p>
                  <p>Getting enough REM sleep restores your brain, helps to learn and consolidate memories. You wake up feeling more refreshed and have more productive day due to increased concentration.</p>
              </div> 
          </div>
  
          <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                  <div id="js-accordion-scientific">   
                    <div class="card">
                      <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapse11">
                          <span class="arrow down"></span>Improves sleep problems such as insomnia</a>
                      </div>
                      <div id="collapse11" class="collapse" data-parent="#js-accordion-scientific">
                        <div class="card-body">
                          <p>A study on sleep problems and using Natural oils like those in the SleepyPatches to improve sleep, revealed that the use of aromatherapy was highly effective in improving sleep problems such as insomnia, including quantitative and qualitative sleep effects (95% confidence interval [CI], effect sizes = 0.6491). Additional analysis revealed that the secondary outcomes including stress, depression, anxiety, and fatigue were significantly effective.</p> 
                          <p class="p-flex">
                            <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/nih_70x.png?v=10172622082484086590" class="lazyload" height="70">
                            <span><b>Source:</b>  National Library of Medicine. “A systematic literature review and meta-analysis of the clinical effects of aroma inhalation therapy on sleep problems”.</span>
                            </p>
                        </div>
                      </div>
                    </div> 
  
                    <div class="card">
                      <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapse21">
                          <span class="arrow down"></span>Reduces stress, depression, anxiety, and fatigue
                        </a>
                      </div>
                      <div id="collapse21" class="collapse" data-parent="#js-accordion-scientific">
                        <div class="card-body">
                            <p>SleepyPatch ingredients aromatherapy improves sleep quality and subsequently reduces stress, pain, anxiety, depression, and fatigue.</p>
                            <p class="p-flex">
                              <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/science-direct_70x.png?v=12187401315820525615" class="lazyload" height="40">
                              <span><b>Source:</b>  ScienceDirect. “Effect of aromatherapy on sleep quality of adults and elderly people: A systematic literature review and meta-analysis”</span>
                            </p>
                        </div>
                      </div>
                    </div>  
                    <div class="card">
                      <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapse31">
                          <span class="arrow down"></span>Stimulates more healthy REM sleep
                        </a>
                      </div>
                      <div id="collapse31" class="collapse" data-parent="#js-accordion-scientific">
                        <div class="card-body">
                            <p><b>What is REM sleep and why it is important</b></p>
                            <p>REM sleep is one of the two major natural sleep stages. Rapid eye movement (REM) sleep usually starts about 90 minutes after you fall asleep. This sleep restores your brain and helps you learn and consolidate your memories.</p>
                            <p><b>What causes the lack of REM sleep</b></p>
                            <ul>
                              <li>sleep disorders like insomnia</li>
                              <li>alcohol</li>
                              <li>antidepressants etc.</li>
                            </ul>
                            <p>Sleep deprivation has real impacts on health and well-being. The most obvious is sleepiness. Feeling sleepy can affect your work and family life. It can also make it dangerous to do things like drive a car.</p>
                            <p class="p-flex">
                              <img src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/ncbi_56x.png?v=6470326377412846527" class="lazyload" height="70">
                              <span><b>Source:</b>  The National Center for Biotechnology Information. “Physiology, REM Sleep”.</span></p>
                            <p><b>How SleepyPatch improves sleep</b></p>
                            <p>SleepyPatch is designed to calm the nervous system, reduce stress, depression, anxiety, fatigue and deal with insomnia. This helps to fall asleep and prepare the body and brain for better recovery during the sleep.</p>
                            <p>It works by triggering the receptors in the nose which then sends messages through the nervous systems to the limbic system which controls behavior and emotions.</p>
                            <p>SleepyPatches are infused with essential oils and thanks to our unique material, the patches diffuse the aroma consistently throughout the night.</p>
                            <p>The nanomaterial releases molecules of oils every 30 seconds so you can count on our patches working all night long.</p> 
                        </div>
                      </div>
                    </div>  
                 </div>
              </div>
            </div> 
        </div> <!--.container-->
      </section> 
  
      
  
      
  
      <section class="js-mobile effectiveness">
        <div class="container">
          <div class="row"> 
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
              <h3 class="text-center">Helps promote sleep without fuss!</h3>
              <p>Stick a patch to your kids pyjamas to help get them settled and bring on sleepyness</p> 
            </div>
          </div> 
          <div class="row ziplock">
            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
              <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830 900w" width="300" class="lazyautosizes ls-is-cached lazyloaded" sizes="300px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bubble-sticker.png?v=1639439830"> 
            </div>  
          </div> 
          <div class="row ft">  
            <div class="col-sm-12 text-center">
              <h3 class="js-title text-dark text-center">Safe for kids 2+ year old</h3>	
              <p>100% natural components and medical adhesive are safe for even the littlest ones</p>
            </div>
          </div>
          <div class="row js-heading">
            <div class="col-lg-12 text-center js-auto">
            <div class="product-single__add-to-cart my_btn">
  <button class="btn btn--primary btn--add-to-cart full">
    <span class="btn__text">
      <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
      <span class="btn__add-to-cart-text">Add to Cart</span>
    </span>
  </button>
</div>
            </div>
          </div> 
        </div>
      </section>
      
      <div class="wave-effect js-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F1F3F4" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,165.3C480,160,600,128,720,101.3C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        
      </div>
      <section class="bp-comparison js-mobile" style="margin-bottom:30px;">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="js-title text-dark">SleepyPatch<img src="${imgFolderUrl}buzz_green.svg" alt="naturalpatch green"> vs <br>other Sleep Remedies </h2>
            </div>
          </div> 
          
          <div class="js-mobile bp-mob-table-container">  
                <div class="row compare-table"> 
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-1.svg?v=1639449424" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-1.svg?v=1639449424 300w" class="lazyautosizes lazyloaded" width="45" sizes="45px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-1.svg?v=1639449424 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-1.svg?v=1639449424">   
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-2.svg?v=1639449424" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-2.svg?v=1639449424 300w" class="lazyautosizes lazyloaded" width="37" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-2.svg?v=1639449424 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-2.svg?v=1639449424">   
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-3.svg?v=1639449424" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-3.svg?v=1639449424 300w" class="lazyautosizes lazyloaded" width="61" sizes="61px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-3.svg?v=1639449424 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-3.svg?v=1639449424">   
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-4.svg?v=1639449424" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-4.svg?v=1639449424 300w" class="lazyautosizes lazyloaded" width="63" sizes="63px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-4.svg?v=1639449424 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/compare-4.svg?v=1639449424">   
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>Suitable for Ages</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center blue bold">   
                    <span>2+</span>
                   </div>
                    <div class="col-3 text-center red">   
                    <span>6+</span>
                   </div>
                    <div class="col-3 text-center red">   
                      <span>5+</span>
                   </div>
                    <div class="col-3 text-center red">   
                      <span>16+</span>
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>Requires Medical Supervision</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center"> 
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520 300w" class="lazyautosizes lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520">  
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" class="lazyautosizes lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520"> 
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" class="lazyautosizes lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520">  
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" class="lazyautosizes lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520"> 
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>Can Be Addictive</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center"> 
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520 300w" class="lazyautosizes lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520">  
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" class="lazyautosizes lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520"> 
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" class="lazyautosizes ls-is-cached lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520">  
                   </div>
                    <div class="col-3 text-center">   
                      <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" class="lazyautosizes ls-is-cached lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Checklist.svg?v=1639444520"> 
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>How To Take</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center">  
                    <span>Apply Sticker to Clothing</span>
                   </div>
                    <div class="col-3 text-center">   
                    <span>Tablets or Drops</span>
                   </div>
                    <div class="col-3 text-center">   
                    <span>Tablets or Drops</span> 
                   </div>
                    <div class="col-3 text-center">   
                    <span>Tablets</span>
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>Side effects</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center"> 
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520 300w" class="lazyautosizes ls-is-cached lazyloaded" width="14" sizes="94px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520 300w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Crosscheck.svg?v=1639444520">  
                   </div>
                    <div class="col-3 text-center">   
                      <span>Headaches,<br>
                      Increased<br>
                      Bedwetting,<br>
                      Nightmares,<br>
                      Dizziness,<br>
                      Mood Changes and<br>
                        Morning Grogginess</span>
                   </div>
                    <div class="col-3 text-center">   
                      <span>Crankiness,<br>
                            Hyperactivity,<br>
                            Challenging<br>
                            Behaviour and<br>
                            Daytime<br>
                        Drowsiness </span>  
                   </div>
                    <div class="col-3 text-center">   
                      <span>Worsened<br>
                        Anxiety,<br>
                        Irritability,<br>
                        Shaking,<br>
                        Agitation,<br>
                        Sweating, Aches<br>
                        and  Pains,<br>
                        Muscle Cramps,<br>
                        Nausea,<br>
                        Vomiting</span>
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>Duration of Effect</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center">  
                    <span>Up to 4 hours<br>
                      (designed to help<br>
                      wind down and<br>
                      get into sleep)</span>
                   </div>
                    <div class="col-3 text-center">   
                    <span>Up to 6 hours</span>
                   </div>
                    <div class="col-3 text-center">   
                    <span>Up to 6 hours</span> 
                   </div>
                    <div class="col-3 text-center">   
                    <span>Up to 10 hours</span>
                   </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-12 text-center">   
                    <p>Ingredients</p>
                   </div> 
                </div>
                <div class="row compare-table">
                    <div class="col-3 text-center">  
                    <span>Natural <br>
  Essential Oils</span>
                   </div>
                    <div class="col-3 text-center">   
                    <span>Synthetic Melatonin<br>
                      (hormone)  and<br>
                      other additives<br>
                      including<br>
                      actose<br>
                      monohydrate</span>
                   </div>
                    <div class="col-3 text-center">   
                    <span>Promethazine<br> 
                      hydrochloride
                      or similar</span> 
                   </div>
                    <div class="col-3 text-center">   
                    <span>AiSynthetic<br>
                      benzodiazepines<br>
                      and other<br>
                      synthetic<br>
                      additivesrborn</span>
                   </div>
                </div>
                <hr>
                <div class="row">
                <div class="col-lg-2 text-center d-flex align-items-center">   
                    <hr>      
                </div>
                <div class="col-lg-3 text-center js-heading">   
                <div class="product-single__add-to-cart my_btn">
  <button class="btn btn--primary btn--add-to-cart full">
    <span class="btn__text">
      <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
      <span class="btn__add-to-cart-text">Add to Cart</span>
    </span>
  </button>
</div>     
                </div> 
                <div class="col-lg-7 text-center d-flex align-items-center">   
                       <hr>  
                </div>
                </div>
          </div>
          
        </div>
        
      </section>
      
      <section class="js-mobile effectiveness">
        <div class="container"> 
          <div class="row as-seen">
            <div class="col-lg-12 text-center js-auto">
                <h4>As seen on:</h4> 
            </div>
            <div class="row as-seen">
              <div class="col-sm-6  d-flex align-items-center"> 
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/yahoo.jpg?v=1619959484" class=" ls-is-cached lazyloaded"> 
              </div>
              <div class="col-sm-6  d-flex align-items-center"> 
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/womenshealth.jpg?v=1619959484" class=" ls-is-cached lazyloaded"> 
              </div>
              <div class="col-sm-6  d-flex align-items-center"> 
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/usa-today.jpg?v=1619959484" class=" ls-is-cached lazyloaded"> 
              </div>
              <div class="col-sm-6  d-flex align-items-center"> 
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/delish.jpg?v=1619959484" class=" ls-is-cached lazyloaded">  
              </div>
              <div class="col-sm-6  d-flex align-items-center"> 
                <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/today.jpg?v=1619959484" class=" ls-is-cached lazyloaded">
              </div>
            </div>
          </div>
        </div>
      </section>
   
  
  <section id="featured-reviews" class="featured-reviews js-mobile my_featured">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 text-center "> 
                <h2 class="js-title   text-dark">Why people love <br> SleepyPatch</h2>
            </div>  
          </div> 
        </div>
            <div class="slider">
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-patch-reviews_2_290x250_crop_center.jpg?v=1650872135"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">N******</p>
                    <p class="date">04/22/2022</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                <p>These stickers (we use sleepy patch and mosquito repellent) are incredible! We had our kids being bitten multiple times a night to nothing at all with one of these stickers!! Sleepy patch stickers, my daughter usually comes out 100,000 times before she falls asleep. First night with one of these stickers and she did not come out once. I cannot recommend enough! </p>
                <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified_au.svg?v=1650873342" alt=" ">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-patch-reviews_3_290x250_crop_center.jpg?v=1650872135"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">J****</p>
                    <p class="date">04/05/2022</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                    <p>My baby sleeps like a charm. I will for sure buy them again.</p>
                <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified_au.svg?v=1650873342" alt=" ">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-patch-reviews_1_290x250_crop_center.jpg?v=1650872135"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">L****</p>
                    <p class="date">03/31/2022</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                    <p>I’ve been using these every night on my child and it’s a part of our night routine. She’s been falling asleep a lot faster than before and actually stays asleep.</p>
                <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified_us.svg?v=1650873536" alt=" ">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <img class="photo" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-patch-review-4_290x250_crop_center.jpg?v=1650886924"
                    alt="slider img">
                <div class="info_wrapper">
                    <p class="name">J**</p>
                    <p class="date">03/20/2022</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                    <p>My son has been a good sleeper but once he started teething, he wasn’t sleeping as soundly anymore. Once I started with the SleepyPatches, he seems to be less fussy at bedtime and relaxes much better allowing her to fall asleep and stay asleep.</p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified_us.svg?v=1650873536" alt=" ">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <div class="info_wrapper">
                    <p class="name">T****</p>
                    <p class="date">03/15/2022</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                    <p>It seems to really work! I can tell a difference in how my child sleeps when I use the SleepyPatches. She seems much more peaceful.</p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=1620910794" alt=" ">
            </div>
        </div>
        <div class="slide">
            <div class="slide_inner">
                <div class="info_wrapper">
                    <p class="name">S*****</p>
                    <p class="date">03/5/2022</p>
                </div>
                <img class="d-block "
                    src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759"
                    alt="stars">
                    <p>My daughter had a hard time falling asleep during naps and at bedtime. SleepyPatches have been my best friend since I had seen this on Naturalpatch.com when I needed to restock on BuzzPatch.</p>
                    <img class="d-block" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=1620910794" alt=" ">
            </div>
        </div>
    <div>
      </section>
  
      <section id="ingredients" class="ingredients vids"> 
          <div class="container js-heading js-mobile"> 
            
                <div class="col-lg-12 text-center p-80-top">   
                    <div class="product-single__add-to-cart my_btn">
    <button class="btn btn--primary btn--add-to-cart full">
        <span class="btn__text">
        <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
        <span class="btn__add-to-cart-text">Add to Cart</span>
        </span>
    </button>
    </div>
                
            </div>
        </div>
      </section>
  
      <section id="faqs" class="faqs">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 text-left "> 
                <h2 class="js-title big  text-dark">FAQ’s</h2>
            </div>  
          </div>
            <div class="row">
              <div class="col-lg-12">
                <div id="js-accordion">   
                  <div class="card">
                    <div class="card-header">
                      <a class="collapsed card-link" data-toggle="collapse" href="#collapse1">
                        <span class="arrow down"></span>How does SleepyPatch work?</a>
                    </div>
                    <div id="collapse1" class="collapse" data-parent="#js-accordion">
                      <div class="card-body">
                        <p>SleepyPatch uses a specially crafted formulation of essential oils to bring on sleep.</p>
                        <p>SleepyPatch is designed to calm the nervous system, the mind, and stimulate an overall relaxed sensation.</p>
                        <p>It works by triggering the receptors in the nose which then sends messages through the nervous systems to the limbic system which controls behavior and emotions.</p>
                        <p>SleepyPatches are infused with essential oils and thanks to our unique material, the patches diffuse the aroma consistently throughout the night.</p>
                        <p>The nanomaterial releases molecules of oils every 30 seconds so you can count on our patches working all night long.</p>
                        <p>Signs of relaxation make take up to 30 minutes and the range effect will vary between individuals.</p>
                      </div>
                    </div>
                  </div> 
  
                  <div class="card">
                    <div class="card-header">
                      <a class="collapsed card-link" data-toggle="collapse" href="#collapse2">
                        <span class="arrow down"></span>What do the SleepyPatches smell like?
                      </a>
                    </div>
                    <div id="collapse2" class="collapse" data-parent="#js-accordion">
                      <div class="card-body">
                          <p>Our SleepyPatches are a blend of scientifically researched natural essential oils to help your little ones (or even yourself!) wind down for a good night's rest. Our patches have a sweet &amp; citrus scent, thanks to our blend of mandarin, lavender, sweet marjoram and vetiver.</p>
                      </div>
                    </div>
                  </div>  
                  <div class="card">
                    <div class="card-header">
                      <a class="collapsed card-link" data-toggle="collapse" href="#collapse3">
                        <span class="arrow down"></span>What are the ingredients in the SleepyPatch?
                      </a>
                    </div>
                    <div id="collapse3" class="collapse" data-parent="#js-accordion">
                      <div class="card-body">
                          <p>The SleepyPatch is formulated with a blend of mandarin, lavender, sweet marjoram, and vetiver essential oils.</p>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div>
        </div>  
      </section>
      
      <section id="night-trial" class="night-trial">
          <div class="container sleepy-box">
            <div class="row no-gutters sleepy-heading">
              <div class="col-lg-12 col-md-12 col-sm-12 text-center"> 
                  <h2 class="js-title big text-dark">SleepyPatch 24 night trial</h2>
                    <p>We want everyone to get the best sleep possible, and it can take up to 24 nights to get a feel for the difference SleepyPatch can make. With our risk-free trial and return policy, you can try SleepyPatch risk free.</p>
  
                  <p>So, if you’re not 100% in love after the first 24-Night Adjustment Period, returns are free and easy.</p>
                <h3 class="text-dark">Establish Your <b><i>Sleep Pattern</i></b><br>
                  in 4 simple steps</h3> 
              </div>  
            </div>
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center"> 
                <div class="s-box">
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1.jpg?v=1640148422" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1_900x.jpg 900w" class="lazyautosizes ls-is-cached lazyloaded" width="154" sizes="70px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1_900x.jpg 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-1.jpg?v=1640148422">  
                </div> 
                <p>Have a pack <br>
                handy for <br>
                bedtime</p>
              </div>
              
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center"> 
                <div class="s-box">
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2.jpg?v=1640148422" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2_900x.jpg 900w" class="lazyautosizes ls-is-cached lazyloaded" width="154" sizes="70px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2_900x.jpg 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-2.jpg?v=1640148422">  
                </div> 
                <p>Get your little one to choose<br> 
  their favorite patch for <br>
  helping them get to sleep</p>
              </div>  
              
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center"> 
                <div class="s-box">
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3.jpg?v=1640148422" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3_900x.jpg 900w" class="lazyautosizes ls-is-cached lazyloaded" width="154" sizes="70px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3_900x.jpg 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-3.jpg?v=1640148422">  
                </div> 
                <p>Get your little one to<br> 
  stick the patch to their <br>
  upper chest or bed frame</p>
              </div>
              
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 text-center"> 
                <div class="s-box">
                    <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4.jpg?v=1640148422" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4_600x.jpg 600w,
       https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4_900x.jpg 900w" class="lazyautosizes ls-is-cached lazyloaded" width="154" sizes="70px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4_600x.jpg 600w,
       https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4_900x.jpg 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/step-4.jpg?v=1640148422">  
                </div> 
                <p>Keep it up for 24 nights<br>
  so the body can adjust to<br>
  the special blend of<br>
  oils and calming formulation </p>
              </div>
              
            </div>
          </div>
      </section>
    
      <section id="purchase" class="purchase">
          
          <div class="container package ">
            <div class="row no-gutters">
              <div class="col-lg-6 col-md-6 col-sm-12 text-center "> 
                  <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured.jpg?v=1639543376" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured_900x.jpg 900w" class="js-desktop lazyautosizes lazyloaded" width="100%" sizes="345px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured_300x.jpg 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured_600x.jpg 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured_900x.jpg 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/featured.jpg?v=1639543376">  
              </div> 
              <div id="getNow" class="col-lg-6 col-md-6 col-sm-12 text-center grey js-heading">
              <h2>SELECT <img src="${imgFolderUrl}buzz_green.svg" alt="naturalpatch green">PACKAGE</h2>
                  <p>24 patches in 1 pack</p>
                   
                 <img data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454 350w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454 900w" width="200" class="js-mobile lazyautosizes ls-is-cached lazyloaded" sizes="170px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454 350w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/sleepy-delivery.png?v=1640695454">              
                 <p class="empty_p"><br></p>
                    <img style="max-width:320px;" data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic.png?v=1643853728" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_300x.png 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_600x.png 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_900x.png 900w" class="js-mobile days lazyautosizes ls-is-cached lazyloaded" width="100%" sizes="320px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_300x.png 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_600x.png 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic.png?v=1643853728">
              </div>
              
            </div>
          </div>
        </section>
    </div>
`

const footer = (footerLogo) => `
<footer>  
<div class="container-fluid h-100">
  <div class="row"> 
<!--              <div class="col-lg-2 js-mobile">
        <a id="to-top" href="#" class="to-down js-mobile"><img  class="lazyload" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/up-arrow.svg?v=1588909512"/>
          <br>back to top</a>
    </div> -->
    <div class="col-lg-2">
    <a class="navbar-brand js-logo" href="/">
    <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/${footerLogo}"></a>
    </div>
    <div class="col-lg-8  d-flex align-items-center"> 
      <div class="footer-nav">
        <ul class="text-center">
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/pages/shipping-info">Shipping Info</a>   
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/pages/refund-policy">Refund Policy </a>   
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/pages/privacy-policy">Privacy Policy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/pages/terms-of-service">Terms of Service</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/pages/contact-us">Contact Us</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" target="_self" href="/a/wsg/proxy/login">Wholesale Login</a>   
          </li>
           <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://buzzpatch.refersion.com/affiliate/registration" rel="noreferrer noopener">Brand Ambassador</a>   
          </li>
        </ul>
      </div>
    </div> 
    <div class="col-lg-2">
        <a id="to-top" href="#" class="to-down"><img width="30" height="30" class="lazyload" src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/up-arrow.svg?v=10658841400715265685">
          <br>back to<br>top</a>
    </div>
  </div>
</div> 
</footer>

`

/** Functions */
const addSelectPacks = () => {
    // 3 packs, 10.66 each, 32.00 price, 51% off, 66.00 reg. price, 34.00 save
    const currencies = {
        'GBP': [
            [3, '£10.66', '£32.00', 51, '£66.00', '£34'],
            [4, '£9.25', '£37.00', 57, '£88.00', '£51'],
            [2, '£12.00', '£24.00', 45, '£44.00', '£20'],
            [1, '£14.00', '£14.00', 36, '£22.00', '£8'],
        ],
        'USD': [
            [3, '$12.00', '$36.00', 51, '$74.97', '$38.97'],
            [4, '$10.50', '$42.00', 57, '$99.96', '$57.96'],
            [2, '$13.50', '$27.00', 45, '$49.98', '$22.98'],
            [1, '$14.99', '$14.99', 40, '$24.99', '$10'],
        ],
        'CAD': [
            [3, '$14.66', '$44.00', 51, '$91.00', '$47'],
            [4, '$12.75', '$51.00', 58, '$122.00', '$71'],
            [2, '$16.50', '$33.00', 45, '$61.00', '$28'],
            [1, '$19.00', '$19.00', 38, '$31.00', '$12'],
        ]
    }

    let currency = document.querySelector('[data-currency]').dataset.currency

    if (currency !== 'USD' || currency !== 'CAD' || currency !== 'GBP') {
        currency = 'USD'
    }

    const packs = currencies[currency].map((pack, index) =>
        `
      <div class="${index === 0 ? 'selected fr_pack ' : ''}pack">
          <p class="pack_name">${pack[0]} ${index === 3 ? 'PACK' : 'PACKS'}</p>
          <p class="each">${pack[1]} Each</p>
      </div>
    `
    ).join('')

    const selectPacks = /*html*/`
<div class="add_pack">
<div class="packs">
    ${packs}
</div>
<div class="price_wrapper">
    <p class="price"><span data-pack-price></span> (<span data-pack-sale></span>% OFF)</p>
    <p class="reg_price">Reg. Price: <span data-pack-reg></span> (Save <span data-pack-save></span>)</p>
</div>
<div class="product-single__add-to-cart my_btn">
  <button class="btn btn--primary btn--add-to-cart full">
    <span class="btn__text">
      <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
      <span class="btn__add-to-cart-text">Add to Cart</span>
    </span>
  </button>
</div>
</div>
`
    query('.product-single__meta > div').insertAdjacentHTML('afterend', selectPacks)
    query('.empty_p').insertAdjacentHTML('afterend', selectPacks)

    const waitForPacks = setInterval(() => {
        if (queryAll('.pack')[7] && queryAll('.my_btn')[4]) {
            clearInterval(waitForPacks)

            /* select 3 packs by default */
            queryAll('#ProductSelect-option-0 label')[0].click()
            queryAll('.add_pack').forEach((wrapper) => {
                wrapper.querySelector('[data-pack-price]').innerText = currencies[currency][0][2]
                wrapper.querySelector('[data-pack-sale]').innerText = currencies[currency][0][3]
                wrapper.querySelector('[data-pack-reg]').innerText = currencies[currency][0][4]
                wrapper.querySelector('[data-pack-save]').innerText = currencies[currency][0][5]
            })

            queryAll('.add_pack').forEach((pack_wrapper) => {
                pack_wrapper.querySelectorAll('.pack').forEach((pack, index) => {
                    pack.addEventListener('click', () => {

                        const packName = pack.querySelector('.pack_name').innerText
                        const sectionName = pack.closest('section') ? pack.closest('section').className : 'main'

                        callEvent('click on the pack', sectionName + ' section', packName)

                        queryAll('.pack').forEach(element => {
                            element.classList.remove('selected')
                        });

                        queryAll('.add_pack').forEach((wrapper) => {
                            wrapper.querySelectorAll('.pack')[index].classList.add('selected')

                            wrapper.querySelector('[data-pack-price]').innerText = currencies[currency][index][2]
                            wrapper.querySelector('[data-pack-sale]').innerText = currencies[currency][index][3]
                            wrapper.querySelector('[data-pack-reg]').innerText = currencies[currency][index][4]
                            wrapper.querySelector('[data-pack-save]').innerText = currencies[currency][index][5]
                        })

                        // client's btn and my btn have different order and index
                        let clientIndexBtn

                        switch (index) {
                            case 0:
                                clientIndexBtn = 0
                                break;
                            case 1:
                                clientIndexBtn = 3
                                break;
                            case 2:
                                clientIndexBtn = 2
                                break;
                            case 3:
                                clientIndexBtn = 1
                                break;

                            default:
                                break;
                        }

                        queryAll('#ProductSelect-option-0 label')[clientIndexBtn].click()
                    })
                });
            });

            const waitForAddBtn = setInterval(() => {
                if (queryAll('.my_btn')[4]) {
                    clearInterval(waitForAddBtn)

                    queryAll('.my_btn').forEach(btn => {
                        btn.addEventListener('click', () => {
                            getId('AddToCart--product-template').click()

                            let className = btn.closest('section') ? btn.closest('section').classList.value : 'main'
                            className = className.replace('js-mobile', '').replace('vids', '')

                            callEvent('Click on "Add To Cart"', className + ' section')
                        })
                    });
                }
            }, intervalTimeout)
        }
    }, intervalTimeout)
}

const sliderInit = () => { // Tiny Slider
    const scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
    scriptCustomStyle.rel = "stylesheet"
    document.head.appendChild(scriptCustomStyle)

    const scriptCustom = document.createElement("script")
    scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
    scriptCustom.async = false
    document.head.appendChild(scriptCustom)

    const sliderInterval = setInterval(() => {
        if (typeof tns === 'function' && document.querySelectorAll('.slide')[isSleepy ? 7 : 3]) {
            clearInterval(sliderInterval)

            const slider = tns({
                container: '.slider',
                items: 1,
                center: true,
                speed: 600,
                mouseDrag: true,
                swipeAngle: 30,
                controls: false,
                nav: true,
                navPosition: 'bottom',
                loop: false,
                autoplay: false,
                autoplayButton: false,
                autoplayButtonOutput: false,
                autoHeight: true
            })

            // add dataLayer events
            slider.events.on('touchEnd', () => {
                callEvent('Swipe', 'Swipe')
            })

            let waitForBullets = setInterval(() => {
                if (document.querySelector('.tns-nav')) {
                    clearInterval(waitForBullets)

                    document.querySelector('.tns-nav').addEventListener('click', (e) => {
                        if (e.target.closest('.tns-nav button')) {
                            callEvent('Swipe Slider', 'Click on the dot')
                        }
                    })
                }
            }, intervalTimeout);
        }
    }, intervalTimeout)
}

const callEvent = (eventAction, eventLabel = '', eventValue,) => { // GO Events
    window.dataLayer = window.dataLayer || []

    let patch = 'BuzzPatch' 

    if(isSleepy) {
        patch = 'SleepyPatch'
    }

    let obj = {
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP like a landing. ' + patch,
        eventAction,
        eventLabel
    }

    if (eventValue) {
        obj.eventValue = eventValue
    }

    dataLayer.push(obj)
}

const drawPage = () => {
    let logo = 'Logo-NP'
    let styleHref = "24/assets/buzzpatch-mobile.css?v=177372595770926142701654750565"
    let logoFooter = 'Buzzpatch-logo_60x.png?v=8811688216828289090'
    let page = buzzPage
    let faqPacksIndex = 6

    if (isSleepy) {
        logo = 'Logo-NP-sleepy'
        styleHref = "35/assets/sleepypatch.css?v=70662428162829056821662356646"
        logoFooter = 'Sleepy_Logo.png?v=1639367203'
        page = sleepyPage
        faqPacksIndex = 2
    }

    query('.site-header__logo .mobile-logo').insertAdjacentHTML('afterend', `<img src="${imgFolderUrl + logo}.svg" alt="logo">`)

    const scriptCustomStyle = document.createElement("link")
    scriptCustomStyle.href = "//cdn.shopify.com/s/files/1/0387/0749/4956/t/" + styleHref
    scriptCustomStyle.rel = "stylesheet"
    scriptCustomStyle.media = "screen"
    document.head.appendChild(scriptCustomStyle)

    getId('shopify-section-product-template').insertAdjacentHTML('afterend', page)
    getId('judgeme_product_reviews').insertAdjacentHTML('afterend', footer(logoFooter))

    const waitForFAQ = setInterval(() => {
        if (queryAll('#faqs .card')[faqPacksIndex]) {
            clearInterval(waitForFAQ)

            getId('faqs').addEventListener('click', (e) => {
                if (e.target.closest('.card-link')) {
                    const faqName = e.target.closest('.card-link').innerText
                    callEvent('click on the FAQ question', faqName)
                }
            })
        }
    }, intervalTimeout)

    if (isSleepy) {
        const waitForEl = setInterval(() => {
            if (queryAll('#js-accordion-scientific .card-header')[2]) {
                clearInterval(waitForEl)

                queryAll('#js-accordion-scientific .card-header').forEach(header => {
                    header.addEventListener('click', () => {
                        const headerName = header.querySelector('a').innerText

                        callEvent('click on accordion', headerName)
                    })
                });
            }
        }, intervalTimeout)
    } else {
        const waitForTooltips = setInterval(() => {
            if (queryAll('.bp-tooltip')[7]) {
                clearInterval(waitForTooltips)

                query('.effectiveness .bp-tooltip').addEventListener('click', () => {
                    callEvent('click on the tooltip', 'effectiveness section')
                })

                query('.bp-comparison').addEventListener('click', (e) => {
                    if (e.target.closest('.bp-tooltip')) {
                        const tooltipName = e.target.closest('p').innerHTML.split('<span')[0].replace(/\s+$/, '')
                        callEvent('click on the tooltip', 'comparison section', tooltipName)
                    }
                })
            }
        }, intervalTimeout)
    }

    const waitForLi = setInterval(() => {
        if (queryAll('.footer-nav li')[6]) {
            clearInterval(waitForLi)

            query('.footer-nav').addEventListener('click', (e) => {
                if (e.target.closest('li')) {
                    const liName = e.target.closest('li').innerText

                    callEvent('click on the footer list', liName)
                }
            })
        }
    }, intervalTimeout)

    addSelectPacks()
    sliderInit()
}

/** Run functions and etc. */
document.head.insertAdjacentHTML('beforeend', style)

let isSleepy = false
if (window.location.pathname.includes('sleepypatch')) {
    isSleepy = true
}

const waitForDom = setInterval(() => {
    if (
        (document.readyState === 'interactive' || document.readyState === 'complete')
        && document.querySelector('[data-currency]').dataset.currency
    ) {
        clearInterval(waitForDom)

        drawPage()
    }
}, intervalTimeout)

callEvent('loaded')

const record = setInterval(() => { // clarity
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `pdp_like_landing`, 'variant_1')
    }
}, intervalTimeout)