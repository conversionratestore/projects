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
          margin-bottom: 5px !important;
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
        
        /*#flowers .wave-bg {
          margin-top: -80px !important;
        }*/

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
            margin-top: 35px;
        }

        .packs {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .packs p {
            color: #000;
            margin: 0;
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
            padding: 10px;
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
          margin: 20px 0 5px !important;
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
          font-family: 'DINEngschrift LT';
          font-weight: 400;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
        }

        /*.btn_wrapper button {
            display: flex;
            background: #FF3C7F;
            padding: 15px 50px;
            box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 24px 60px rgba(12, 11, 11, 0.05), 0px 12px 24px rgba(12, 11, 11, 0.05);
            border-radius: 52px;
            border: none;
            cursor: pointer;
        }

        {
          
        }

        .btn_wrapper span {
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #FFFFFF;
            margin-left: 12px;
        }*/
        .product-single__add-to-cart {
          display: none;
        }
        
        .my_btn {
          display: block;
        }

        .mobile-logo {
          display: none;
        }
    </style>
`

/* HTML elements */
const selectPacks = /*html*/`
<div class="add_pack">
<div class="packs">
    <div class="selected pack fr_pack">
        <p class="pack_name">3 PACKS</p>
        <p class="each">$15.00 Each</p>
    </div>
    <div class="pack">
        <p class="pack_name">4 PACKS</p>
        <p class="each">$13.00 Each</p>
    </div>
    <div class="pack">
        <p class="pack_name">2 PACKS</p>
        <p class="each">$15.00 Each</p>
    </div>
    <div class="pack">
        <p class="pack_name">1 PACKS</p>
        <p class="each">$15.00 Each</p>
    </div>
</div>
<div class="price_wrapper">
    <p class="price">$45.00 (51% OFF)</p>
    <p class="reg_price">Reg. Price: $93.00 (Save $48)</p>
</div>
<!-- <div class="btn_wrapper">
    <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
            <path
                d="M12.9585 9.33333C13.5835 9.33333 14.1335 8.99167 14.4168 8.475L17.4002 3.06667C17.7085 2.51667 17.3085 1.83333 16.6752 1.83333H4.34183L3.5585 0.166668H0.833496V1.83333H2.50016L5.50016 8.15833L4.37516 10.1917C3.76683 11.3083 4.56683 12.6667 5.8335 12.6667H15.8335V11H5.8335L6.75016 9.33333H12.9585ZM5.1335 3.5H15.2585L12.9585 7.66667H7.1085L5.1335 3.5ZM5.8335 13.5C4.91683 13.5 4.17516 14.25 4.17516 15.1667C4.17516 16.0833 4.91683 16.8333 5.8335 16.8333C6.75016 16.8333 7.50016 16.0833 7.50016 15.1667C7.50016 14.25 6.75016 13.5 5.8335 13.5ZM14.1668 13.5C13.2502 13.5 12.5085 14.25 12.5085 15.1667C12.5085 16.0833 13.2502 16.8333 14.1668 16.8333C15.0835 16.8333 15.8335 16.0833 15.8335 15.1667C15.8335 14.25 15.0835 13.5 14.1668 13.5Z"
                fill="white" />
        </svg>
        <span>Add to cart</span>
    </button>
</div> -->
<div class="product-single__add-to-cart my_btn">
                    <button type="submit" name="add" id="AddToCart--product-template" class="btn btn--primary btn--add-to-cart full">
                      <span class="btn__text">
                        <span class="material-icons-outlined button-cart-icon">shopping_cart</span>
                        <span class="btn__add-to-cart-text">Add to Cart</span>
                      </span>
                    </button></div>
</div>
`

const buzzPage = /*html*/`
<link href="//cdn.shopify.com/s/files/1/0387/0749/4956/t/24/assets/buzzpatch-mobile.css?v=177372595770926142701654750565" rel="stylesheet" media="screen">
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
    <div class="row js-heading">
      <div class="col-lg-12 text-center js-auto">
        <a href="#getNow" class="btn js-btn btn-primary get-it">GET Buzzpatch</a>
      </div>
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
        <h2 class="js-title text-dark">Buzzpatch vs other mosquito repellents</h2>
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
      <div class="row">
        <div class="col-lg-2 text-center d-flex align-items-center">
          <hr>
        </div>
        <div class="col-lg-3 text-center js-heading">
          <a href="#getNow" class="btn js-btn btn-primary get-it">buy buzzpatch stickers</a>
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

  <div id="featuredReviewndicators" class="carousel slide pointer-event" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img data-sizes="auto"
          data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426"
          data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426 300w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426 600w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_affc665f_8efa_4464_9681_1f27324fff9e_290x250_crop_center.jpg?v=1620911426 900w"
          class="lazyload featured">
        <div class="meta">
          <span class="name">Fadya A.</span> <span class="date">07/31/2021</span>
        </div>
        <img class="d-block"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759">
        <p>The sticker itself is very good quality, I was worried it would fall but the glue is very good and I
          changed the location of the sticker more than once and it never fell! Didn't get any mosquito bites, I
          started to think something works with those little birds!
          Other than that, I had the best experience ordering, following up and exchanging emails since my order was
          few days delayed. I really can’t be happier with this whole experience!</p>
        <img class="d-block"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" "
          width="100%" height="auto">
      </div>

      <div class="carousel-item">
        <img data-sizes="auto"
          data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426"
          data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426 300w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426 600w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_bb2276e7_9275_49cf_b59d_18115e3c1aef_290x250_crop_center.jpg?v=1620911426 900w"
          class="lazyload featured">

        <div class="meta">
          <span class="name">J***k</span> <span class="date">06/19/2021</span>
        </div>
        <img class="d-block "
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759">
        <p>Love them and so do my kids! From what I can tell they do help keep away mosquitoes! Will buy more! Great
          seller. Shipping to Canada came from within canada seller must have a supplier in Canada leading to speedy
          delivery! </p>
        <img class="d-block"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" ">
      </div>

      <div class="carousel-item">
        <img data-sizes="auto"
          data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426"
          data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426 300w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426 600w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_999990_b4f75c07_46e0_4197_9623_1c1c0ffaf91e_290x250_crop_center.jpg?v=1620911426 900w"
          class="lazyload featured">

        <div class="meta">
          <span class="name">Lauren S.</span> <span class="date">07/13/2021</span>
        </div>
        <img class="d-block "
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759">
        <p>We just took the patches on a camping trip. We have an 8 month old so therefore I'm hesitant to put much
          on her to protect her from the mosquitos and it's still quite buggy where we are, so the patches were an
          awesome option. For the most part, they help immensely! On very, very buggy hikes, they didn't necessarily
          fend absolutely all of the mosquitos off, but did a pretty good job.
        </p>
        <img class="d-block"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" ">
      </div>

      <div class="carousel-item">
        <img data-sizes="auto"
          data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426"
          data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426 300w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426 600w,
          https://cdn.shopify.com/s/files/1/0387/0749/4956/files/138991_5195756765228_f4327ef7_76ae_4478_a5a4_90a3fea882dd_290x250_crop_center.jpg?v=1620911426 900w"
          class="lazyload featured">
        <div class="meta">
          <span class="name">Joanne</span> <span class="date">06/28/2021</span>
        </div>
        <img class="d-block "
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/reviews.svg?v=9834985037217329759">
        <p>These are amazing, they really work! I'm a magnet for mosquitoes and didn't get bit once :) </p>
        <img class="d-block"
          src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/vertified.svg?v=12290204951919547682" alt=" ">
      </div>


    </div>

    <ol class="carousel-indicators">
      <li data-target="#featuredReviewndicators" data-slide-to="0" class="active"></li>
      <li data-target="#featuredReviewndicators" data-slide-to="1"></li>
      <li data-target="#featuredReviewndicators" data-slide-to="2"></li>
      <li data-target="#featuredReviewndicators" data-slide-to="3"></li>
    </ol>
  </div>
</section>

<section id="children-safe" class="children js-desktop">
  <div class="container js-heading">
    <div class="row">
      <div class="col-lg-12 text-center">
        <img alt="Buzzpatch Pink Smiley Face With Heart Eyes"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/buzzpatch-smiley_109x.jpg?v=2841505115911607523"
          class="lazyload smile">
      </div>
    </div>
    <div class="row p-100-top">
      <div class="col-lg-6 col-sm-12 text-left">
        <h2 class="js-title text-dark">HAPPY KIDS. <br>
          HAPPY PARENTS</h2>
      </div>
      <div class="col-lg-6 col-sm-12 overflow-text">
        <p>For us parents, we know what mosquito bites mean for our kids. Our poor little ones can't handle the
          itch, day or night.</p>
        <p>Some kids get it worse than others, developing an allergic reaction to the bite that causes the area to
          swell up and is really, really uncomfortable.</p>
        <p>Some kids even develop a fear of going outside, just to avoid getting bitten!</p>
        <p>BuzzPatch uses the most effective, but safe, essential oil combination designed to confuse mosquitoes and
          hide your kids from their senses.</p>
      </div>
    </div>
  </div>
  <div class="container-fluid no-overflow">
    <div class="row">
      <div class="col-lg-6 offset-lg-1 offset-sm-0  text-left ">
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/alaric_900x.jpg?v=16186661828743549583"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/alaric_900x.jpg?v=16186661828743549583 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/alaric_900x.jpg?v=16186661828743549583 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/alaric_900x.jpg?v=16186661828743549583 900w"
          width="100%" class="lazyload">
        <a id="toDown" href="#getNow" class="to-down ">get that<br>patch<br><img
            src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/down-arrow.svg?v=4296043405941419370"></a>
      </div>
    </div>
  </div>
</section>

<section class="included js-desktop" id="included">
  <div class="container boxes">
    <div class="row js-mobile">
      <div class="col-sm-12 js-center" style="margin-bottom:30px;">
        <img src="" width="250" class="lazyload js-center">
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/60pack_250x.jpg?v=9428531487035518820"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/60pack_250x.jpg?v=9428531487035518820 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/60pack_250x.jpg?v=9428531487035518820 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/60pack_250x.jpg?v=9428531487035518820 900w" width="250"
          class="lazyload js-center">

      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-12 text-left box d-flex align-items-center">
        <div class="inside">
          <p class="sub"> <img alt="Black And Pink Icon Of a Closed Box"
              data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/package_80x.jpg?v=17577184136441018234"
              width="80" class="lazyload"></p>
          <p>Pack of 60 assorted colors BuzzPatch mosquito repellent stickers</p>
        </div>
      </div>
      <div class="col-lg-4 no-content">
      </div>
      <div class="col-lg-4 col-sm-12 text-left box d-flex align-items-center">
        <div class="inside">
          <p class="sub"> <img alt="Essential Oil Icon Next To a Small Pink Flower" class="lazyload"
              data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/essential-oil_80x.jpg?v=14433597452923180414&quot;"
              width="80"></p>
          <p>Citronella essential oils, adhesive patches made from medical grade tape</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-12 text-left box d-flex align-items-center">
        <div class="inside">
          <p class="sub"> <img alt="Anti Mosquito Icon"
              data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/anti-mosquito_80x.jpg?v=14548794418567575698"
              width="80" class="lazyload"></p>
          <p>Mosquitos find us humans by sensing the CO2 being emitted. Buzzpatch scent creates a virtual shield,
            almost camouflaging your kids from mosquitos.</p>
        </div>
      </div>
      <div class="col-lg-4 no-content">
      </div>
      <div class="col-lg-4 col-sm-12 text-left box d-flex align-items-center">
        <div class="inside">
          <p class="sub"> <img alt="Pink Clock"
              data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/clock_80x.jpg?v=11510991833719495986"
              width="80" class="lazyload"></p>
          <p>Helps keep bugs like mosquitoes, midges, sand flies, and flies away. Full protection lasts for 12 hours
            and wears off over a 24-72 hour period from opening.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container js-heading">
    <div class="row">
      <div class="col-lg-12 text-center p-80-top">
        <a href="#getNow" class="btn js-btn btn-primary get-it">get it now!</a>
      </div>
    </div>
  </div>
</section>
<section class="bp-comparison js-desktop">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2 class="js-title text-dark">Buzzpatch vs other mosquito repellents</h2>
      </div>
    </div>
    <div class="table-responsive-md js-desktop bp-table-container">
      <table class="bp-table table table-borderless">
        <thead>
          <tr>
            <th> </th>
            <th>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-compares.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-compares.png?v=1635832113 300w"
                class="lazyload" width="200">
            </th>
            <th>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-spray.png?v=1635832114"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-spray.png?v=1635832114 300w"
                class="lazyload" width="200">
            </th>
            <th>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-lotions.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-lotions.png?v=1635832113 300w"
                class="lazyload" width="200">
            </th>
            <th>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-candles.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-candles.png?v=1635832113 300w"
                class="lazyload" width="200">
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>
              Apply to skin
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">Is it necessary to apply the mosquito repellent on skin?</span>
              </span>
            </th>
            <td class="t-green">Stickers for clothes</td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/x.png?v=1643859316"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/x.png?v=1643859316 300w"
                class="lazyload" width="14">
            </td>
          </tr>

          <tr>
            <th>Contains chemicals <br>(like DEET or <br>Picaridin)
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">Does this contain chemicals with harmful side effects?</span>
              </span>
            </th>
            <td class="t-green"> <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non.png?v=1635832113 300w"
                class="lazyload" width="14">
              <br>Uses natural essential oils
            </td>

            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
          </tr>

          <tr>
            <th>Unpleasant chemical <br>smell
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">Does the repellent have an unpleasant smell commonly associated with
                  chemical use?</span>
              </span>
            </th>
            <td class="t-green">
              Pleasant smell of essential oils</td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-check.png?v=1635832113 300w"
                class="lazyload" width="18">
            </td>
          </tr>

          <tr>
            <th>Toxicity
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">Does the repellent contain toxic elements that may have a negative
                  effect on your or your children's health?</span>
              </span>
            </th>
            <td class="t-green"> <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-non.png?v=1635832113 300w"
                class="lazyload" width="14">
              <br>Non toxic
            </td>

            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-toxic.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-toxic.png?v=1635832113 300w"
                class="lazyload" width="200">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-toxic.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-toxic.png?v=1635832113 300w"
                class="lazyload" width="200">
            </td>
            <td>
              <img data-sizes="auto"
                data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-toxic.png?v=1635832113"
                data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/bp-toxic.png?v=1635832113 300w"
                class="lazyload" width="200">
            </td>
          </tr>

          <tr>
            <th>Duration of effect
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">How long does the effect of the mosquito repellent last?</span>
              </span>
            </th>
            <td class="t-green">Up to 72 hours</td>
            <td>Up to 6 hours</td>
            <td>Up to 6 hours</td>
            <td>Up to 3 hours</td>
          </tr>

          <tr>
            <th>Stickiness on skin
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">Is the substance of the mosquito repellent sticky on skin?</span>
              </span>
            </th>
            <td class="t-green">Applied on clothes</td>
            <td>Commonly sticky on skin</td>
            <td>Commonly sticky on skin</td>
            <td>Airborn</td>
          </tr>
          <tr>
            <th>Causes allergies
              <span class="bp-tooltip"><img
                  src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/tip-outline.svg?v=1643950442">
                <span class="bp-tooltiptext">Does the mosquito repellent contain elements that are know to cause
                  allergic reactions?</span>
              </span>
            </th>
            <td class="t-green">Allergies free oils</td>
            <td>Can cause allergic reaction</td>
            <td>Can cause allergic reaction</td>
            <td>Can cause allergic reaction</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-lg-2 text-center d-flex align-items-center">
          <hr>
        </div>
        <div class="col-lg-3 text-center">
          <a href="#getNow" class="btn js-btn btn-primary get-it">buy buzzpatch stickers</a>
        </div>
        <div class="col-lg-7 text-center d-flex align-items-center">
          <hr>
        </div>
      </div>
    </div>
  </div>

</section>

<section id="ingredients" class="ingredients vids">
  <div class="container">
    <div class="col-lg-7 text-center js-desktop">
      <h2 class="js-title text-dark">SAFE &amp; NATURAL</h2>
      <p>BuzzPatch is made using non-woven fabric patches, infused with a combination of Citronella and other
        essential oils which are perfectly safe for your kids.
        Unlike topical sprays which contain DEET or Picaridin, BuzzPatch is not only easy to apply, but
        environment-friendly!</p>
    </div>
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
    <div class="container js-heading js-mobile">
      <div class="row">
        <div class="col-lg-12 text-center p-80-top">
          <a href="#getNow" class="btn js-btn btn-primary get-it">get buzzpatch!</a>
        </div>
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
  <div class="container js-desktop">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 text-center ">
        <h2 class="js-title big text-dark">PURCHASE TODAY!</h2>
      </div>
    </div>
  </div>
  <div class="container package ">
    <div class="row no-gutters">
      <div class="col-lg-6 col-md-6 col-sm-12 text-center ">
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/girl_900x.jpg?v=15014872908700142539"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/girl_900x.jpg?v=15014872908700142539 300w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/girl_900x.jpg?v=15014872908700142539 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/girl_900x.jpg?v=15014872908700142539 900w"
          class="js-desktop lazyload" width="100%" height="auto">
      </div>
      <div id="getNow" class="col-lg-6 col-md-6 col-sm-12 text-center grey js-heading">
        <h2>SELECT PACKAGE</h2>
        <p>60 patches in 1 pack</p>
        <p class="sub js-desktop">And get FREE shipping Worldwide</p>
        <img data-sizes="auto"
          data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418"
          data-srcset="//cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418 350w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418 600w,
          //cdn.shopify.com/s/files/1/0387/0749/4956/files/New-BP-_Free-Shiping__small-min_280x.png?v=16259184490258016418 900w"
          width="100%" class="js-mobile lazyload" height="auto">
        <p><br></p>
        ${selectPacks}
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
</style>
`
const footer = `
<footer>  
<div class="container-fluid h-100  ">
  <div class="row"> 
<!--              <div class="col-lg-2 js-mobile">
        <a id="to-top" href="#" class="to-down js-mobile"><img  class="lazyload" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/up-arrow.svg?v=1588909512"/>
          <br>back to top</a>
    </div> -->
    <div class="col-lg-2">
        <a class="navbar-brand js-logo" href="/">
          <img alt="Buzz Patch Logo" data-sizes="auto" data-src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/Buzzpatch-logo_60x.png?v=8811688216828289090" width="60" height="60" class="lazyautosizes ls-is-cached lazyloaded" sizes="165px" src="//cdn.shopify.com/s/files/1/0387/0749/4956/files/Buzzpatch-logo_60x.png?v=8811688216828289090">
        </a> 
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

/* <div class="form">
          <form class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <div class="js-packs">
                  <span class="bestseller">bestseller</span>
                  <input type="radio" name="radios" id="radios-0" value="39264142393388" checked="checked">

                  <label class="radio-inline" for="radios-0"> 3 Packs<br><span>₴452.00 Each</span> </label>
                </div>
                <div class="js-packs">
                  <input type="radio" name="radios" id="radios-1" value="39264134070316">
                  <label class="radio-inline" for="radios-1"> 4 Packs<br><span>₴395.50 Each</span></label>
                </div>
                <div class="js-packs">
                  <input type="radio" name="radios" id="radios-2" value="39307585519660">
                  <label class="radio-inline" for="radios-2"> 2 Packs<br><span>₴508.50 Each</span></label>
                </div>
                <div class="js-packs">
                  <input type="radio" name="radios" id="radios-3" value="34137893142572">
                  <label class="radio-inline" for="radios-3">1 Pack<br><span>₴565.00 Each</span> </label>
                </div>
              </div>
            </fieldset>
          </form>
        </div> 
        <a href="/cart/39264142393388:1?getProductID=6540122685484" class="btn js-btn btn-primary"
        id="addToCart">PROCEED TO CHECKOUT</a>*/


// const selectPacks = /*html*/`
// <div class="form fr_form">
//   <form class="form-horizontal">
//     <fieldset>  
//       <div class="form-group"> 
//         <div class="js-packs">
//           <span class="bestseller">bestseller</span> 
//           <input type="radio" name="radios" id="radios-0" value="39264142393388" checked="checked"> 

//           <label class="radio-inline" for="radios-0"> 3 Packs<br><span>₴452.33 Each</span> </label> 
//         </div> 
//         <div class="js-packs"> 
//           <input type="radio" name="radios" id="radios-1" value="39264134070316"> 
//           <label class="radio-inline" for="radios-1"> 4 Packs<br><span>₴395.75 Each</span></label> 
//         </div>  
//         <div class="js-packs"> 
//           <input type="radio" name="radios" id="radios-2" value="39307585519660"> 
//           <label class="radio-inline" for="radios-2"> 2 Packs<br><span>₴509.00 Each</span></label> 
//         </div>  
//         <div class="js-packs"> 
//           <input type="radio" name="radios" id="radios-3" value="34137893142572"> 
//           <label class="radio-inline" for="radios-3">1 Pack<br><span>₴565.00 Each</span> </label> 
//         </div>   
//       </div> 
//     </fieldset>
//   </form> 
//   <div class="prices">
//     <span class="js-total">₴<span class="pr">1,357.00</span> (<span class="ps">51</span>% OFF)</span>
//     <span class="js-regular">Reg. Price: <span class="js-strike">₴<span class="rp">2,825.00</span></span> (Save <span class="rs">₴1,468</span>)</span>
//   </div>
// </div>
// `



// #MainProductSelect-6620312043564 - prices

/** Functions */
const doSomething = () => { }

/* Observer */
// const observe = () => {
//     const target = document.body
//     const config = {
//         childList: true,
//         subtree: true,
//     }

//     let observer = new MutationObserver(mutations => {
//         for (let mutation of mutations) {
//             for (let node of mutation.addedNodes) {
//                 if (!(node instanceof HTMLElement)) continue

//                 if (node.matches('.')) { 

//                 }
//             }
//         }
//     })

//     observer.observe(target, config)
// }

/* Tiny Slider */
// const loadTinySlider = () => {
//     let scriptCustomStyle = document.createElement("link")
//     scriptCustomStyle.href = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css"
//     scriptCustomStyle.rel = "stylesheet"
//     document.head.appendChild(scriptCustomStyle)

//     let scriptCustom = document.createElement("script")
//     scriptCustom.src = "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js"
//     scriptCustom.async = false
//     document.head.appendChild(scriptCustom)
// }

/** GO Events */
const callEvent = (eventAction, eventLabel = '') => {
  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: ',
    eventAction,
    eventLabel
  })
}

/** Run functions and etc. */
document.head.insertAdjacentHTML('beforeend', style)

const waitForDom = setInterval(() => {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    clearInterval(waitForDom)

    query('.site-header__logo .mobile-logo').insertAdjacentHTML('afterend', `<img src="${imgFolderUrl}Logo-NP.svg" alt="logo">`)
    getId('shopify-section-product-template').insertAdjacentHTML('afterend', buzzPage)
    getId('judgeme_product_reviews').insertAdjacentHTML('afterend', footer)
    query('.product-single__meta > div').insertAdjacentHTML('afterend', selectPacks)

    const waitForPacks = setInterval(() => {
      if (queryAll('.pack')[7]) {
        clearInterval(waitForPacks)

        queryAll('.add_pack').forEach((pack_wrapper) => {
          pack_wrapper.querySelectorAll('.pack').forEach((pack, index) => {
            pack.addEventListener('click', () => {

              queryAll('.pack').forEach(element => {
                element.classList.remove('selected')
              });

              queryAll('.add_pack').forEach((wrapper) => {
                wrapper.querySelectorAll('.pack')[index].classList.add('selected')
              })
            })
          });
        });

        // queryAll('.pack').forEach((pack, index) => {
        //   pack.addEventListener('click', () => {
        //     queryAll('.pack').forEach(element => {
        //       element.classList.remove('selected')
        //     });

        //     queryAll('.add_pack').forEach(element => {
        //       console.log(element);
        //       console.log(index);
        //       element.querySelectorAll('.pack')[index].classList.add('selected')
        //     });
        //   })
        // });
      }
    }, intervalTimeout)
  }
}, intervalTimeout)





const record = setInterval(() => {
  if (typeof clarity === 'function') {
    clearInterval(record)

    clarity('set', ``, 'variant_1')
  }
}, intervalTimeout)