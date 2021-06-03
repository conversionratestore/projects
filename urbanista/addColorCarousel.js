let start = setInterval(function () {
  console.log('Here!!!!!!!!');
  if (document.querySelector('#product-options-wrapper')) {
    clearInterval(start);

    let script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.async = false;
    document.head.appendChild(script);

    document.head.insertAdjacentHTML(
      'beforeend',
      `
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>    
    
        <style>
            .product-info-main {
              margin-bottom: 20px;
            }
            .product-view-badge {
              padding: 0 !important;
            }
            .product-options-wrapper {
              display: none;
            }
            .sticky-pdp-cta .product-options-wrapper {
              display: block;
            }
            .product-info-main .product-features {
              margin-bottom: 20px;
            }
            .color-wrapper {
              display: flex;
              flex-direction: column;
              position: relative;                
            }
            .color-title {
              font-family: bodoni;
              font-size: 13px;
              font-weight: 400;
              font-style: italic;
              line-height: normal;
              letter-spacing: 1.6px;
              text-align: center;
              text-transform: uppercase;
              margin-bottom: 20px;
            }
            .color-carousel {
              display: flex;
              margin: 0 -15px 45px -15px;
            }
            .sticky-pdp-cta .color-wrapper {
              display: none;
            }
            .color-item {
              width: 90px;
              height: 140px;
              margin: 0 4.5px;
              padding: 10px;
              background: #FFFFFF;
              border: 1px solid transparent;
              box-sizing: border-box;
              text-align: center;
              cursor: pointer;
            }
            .color-item.selected {
              border: 1px solid #1A1A1A;
              pointer-events: none;
            }
            .color-carousel img {
              width: 58px;
              height: 83px;
              margin: 0 auto;
              object-fit: contain;
            }            
            .color-carousel p {
              margin: 0;
              color: #595959;
              letter-spacing: 0.4px;
              font-size: 11px;
              font-weight: 700;
              font-family: Novecento Wide Bold;
              text-transform: uppercase;
            }
            :root {
              --main-bg-color: transparent;
            }
            .color-wrapper::before {
              content: '';
              position: absolute;
              left: -15px;
              bottom: 0;
              height: 100%;
              width: 15px;    
              background: linear-gradient(to right, var(--main-bg-color), rgba(0, 0, 0, 0));
              z-index: 1;
            }
            .color-wrapper::after {
              content: '';
              position: absolute;
              right: -15px;
              bottom: 0;
              height: 100%;
              width: 40px;    
              background: linear-gradient(to left, var(--main-bg-color), rgba(0, 0, 0, 0));
            }       
            .slick-list {
              padding-left: 15px !important;
            }
        </style>
      `,
    );

    document.body.insertAdjacentHTML(
      'beforeEnd',
      `<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>`,
    );

    const product = window.location.pathname.split('/')[2].split('-')[0];

    const imagesForProduct = {
      london: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/3/43366_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/1/41458_3_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/9/39029_1_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/9/39223_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/1/41457_1.webp',
      ],
      stockholm: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/0/40407_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/0/40408_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/0/40409_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/0/40410_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/0/40411_1.webp',
      ],
      paris: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/7/37058_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/7/37059_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/7/37060_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/7/37061_1.webp',
      ],
      miami: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/4/44259_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/4/44256_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/4/44257_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/4/4/44260_1.webp',
      ],
      boston: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/1/21315_1.webp',
      ],
      sydney: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/6/36772_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/6/36773_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/6/36774_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/7/37041_1.webp',
      ],
      brisbane: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/6/36338_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/6/36337_1.webp',
      ],
      athens: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/5/35327-1_1.webp',
      ],
      new: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/0/30278_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/0/30280_1_1.webp',
      ],
      seattle: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/6/26561_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/6/26564_1_1.webp',
      ],
      san: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/1/8/18535_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/1/8/18536_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/1/9/19313_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/1/8/18534_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/0/30944_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/1/9/19563_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/1/8/18537_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/6/26018_1.webp',
      ],
      madrid: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/0/30268_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/0/30269_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/0/30271_1.webp',
      ],
      berlin: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/6/26808_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/6/26809_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/6/26811_1_1.webp',
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/2/32125_1.webp',
      ],
      lyon: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/l/y/lyon_front_product_1.webp',
      ],
      detroit: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/3/1/31927_1_1.webp',
      ],
      melbourne: [
        'https://www.urbanista.com/media/catalog/product/cache/6c07725d11cf11164242a71cef72688e/2/4/24831_1.webp',
      ],
    };

    const currentProduct = imagesForProduct[product];

    document.querySelector('.product-info-price').insertAdjacentHTML(
      'beforebegin',
      `   
        <div class="color-wrapper">
            <div class="color-title">Select Color</div>
            <div class="color-carousel">
              ${currentProduct
                .map(
                  (e, i) =>
                    `<div class="color-item"><img src="${e}">
                              <p>
                                  ${
                                    document.querySelectorAll('.swatch-option')[
                                      i
                                    ].ariaLabel
                                  }
                              </p>
                          </div>`,
                )
                .join('')}
            </div>        
        </div>
      `,
    );

    const colorItems = document.querySelectorAll('.color-item');
    const swatchOptions = document.querySelectorAll('.swatch-option');
    const blockHeight = document.querySelector('.product-info-main-wrapper')
      .style.height;

    // fix bug on scroll via adding height to the block
    document.querySelector('.product-info-main-wrapper').style.height =
      Number.parseInt(blockHeight) + 129 + 'px';

    // add selected class (border) to the 1st item
    colorItems[0].classList.add('selected');

    // set pdp background color to carousel blur
    document.documentElement.style.setProperty(
      '--main-bg-color',
      `${document.querySelector('.product-info-main').style.backgroundColor}`,
    );

    // emulate click on items and add selected class (border)
    colorItems.forEach((e, i) => {
      e.addEventListener('click', () => {
        swatchOptions[i].click();

        colorItems.forEach(e => e.classList.remove('selected'));

        e.classList.add('selected');
      });
    });

    swatchOptions.forEach((e, i) => {
      e.addEventListener('click', () => {
        colorItems.forEach(e => e.classList.remove('selected'));

        colorItems[i].classList.add('selected');
      });
    });

    // watch for changes and change pdp background color to carousel blur
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutationRecord) {
        document.documentElement.style.setProperty(
          '--main-bg-color',
          `${
            document.querySelector('.product-info-main').style.backgroundColor
          }`,
        );
      });
    });

    const target = document.querySelector('.product-info-main');
    observer.observe(target, {
      attributes: true,
      attributeFilter: ['style'],
    });

    setTimeout(function () {
      $('.color-carousel').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
        infinite: false,
      });
    }, 500);
  }
}, 100);
