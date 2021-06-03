document.head.insertAdjacentHTML(
  'beforeend',
  `
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>    

        <style>
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
                margin: 0 -15px 45px 0;
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
                flex-direction: row;
            }
            .sticky-pdp-cta .color-wrapper {
                display: none;
            }
            .color-item {
                width: 80px;
                height: 140px;
                margin-left: 15px;
                padding: 10px;
                background: #FFFFFF;
                border: 1px solid transparent;
                box-sizing: border-box;
                text-align: center;
                cursor: pointer;
            }
            .color-item:first-child {
                margin-left: 45px;
            }
            .color-item.selected {
                border: 1px solid #1A1A1A;
                pointer-events: none;
            }
            .color-carousel img {
                width: 58px;
                height: 83px;
                margin: 0 auto;
                object-fit: cover;
            }            
            .color-carousel p {
                margin: 0;
                color: #595959;
                letter-spacing: 0.4px;
                font-size: 12px;
                font-weight: 700;
                font-family: Novecento Wide Bold;
                text-transform: uppercase;
            }
            :root {
                --main-bg-color: red;
            }
            .color-wrapper::before {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                width: 2https://www.urbanista.com/us/stockholm-plus0px;    
                background: linear-gradient(to right, var(--main-bg-color), rgba(0, 0, 0, 0));
                z-index: 1;
            }
            .color-wrapper::after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 0;
                height: 100%;
                width: 42px;    
                background: linear-gradient(to left, var(--main-bg-color), rgba(0, 0, 0, 0));
            }            
            // .color-wrapper--opacity {
            //     content: '';
            //     position: absolute;
            //     right: 0;
            //     bottom: 0;
            //     height: 140px;
            //     width: 40px;                
            // }
            .slick-list {
                padding: 0 !important;
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
                                      document.querySelectorAll(
                                        '.swatch-option',
                                      )[i].ariaLabel
                                    }
                                </p>
                            </div>`,
                  )
                  .join('')}
            </div>
            
        </div>
    `,
);

const blockHeight = document.querySelector('.product-info-main-wrapper').style
  .height;

// fix bug on scroll via adding height to the block
document.querySelector('.product-info-main-wrapper').style.height =
  Number.parseInt(blockHeight) + 129 + 'px';

// add selected class (border) to the 1st item
document.querySelectorAll('.color-item')[0].classList.add('selected');

// set pdp background color to carousel blur
document.documentElement.style.setProperty(
  '--main-bg-color',
  `${document.querySelector('.product-info-main').style.backgroundColor}`,
);

// document.querySelector(
//   '.color-wrapper--opacity',
// ).style.background = `linear-gradient(to left, ${
//   document.querySelector('.product-info-main').style.backgroundColor
// }, rgba(0, 0, 0, 0))`;

// emulate click on items and add selected class (border)
document.querySelectorAll('.color-item').forEach((e, i) => {
  e.addEventListener('click', () => {
    document.querySelectorAll('.swatch-option')[i].click();

    document
      .querySelectorAll('.color-item')
      .forEach(e => e.classList.remove('selected'));

    e.classList.add('selected');
  });
});

// watch for changes and change pdp background color to carousel blur
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutationRecord) {
    // let color =
    //   document.querySelector('.product-info-main').style.backgroundColor;

    document.documentElement.style.setProperty(
      '--main-bg-color',
      `${document.querySelector('.product-info-main').style.backgroundColor}`,
    );
  });
});

const target = document.querySelector('.product-info-main');
observer.observe(target, {
  attributes: true,
  attributeFilter: ['style'],
});

// activate slick carousel
setTimeout(() => {
  $('.color-carousel').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    swipeToSlide: true,
    infinite: false,
  });
}, 1000);
