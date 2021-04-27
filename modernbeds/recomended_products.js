let style = `
    <style>
      .recommended {
        width: 65%;
        padding: 10px 6px;
        border: 1px solid rgba(0, 0, 0, .29);
      }
      
      .recommended>p {
        font-size: 14px;
      }
      
      .recommended p {
        margin-bottom: 0;
        line-height: 1.5;
      }
      
      .recommended .prod-block {
        display: block;
        font-size: 13px;
        margin-bottom: 15px;
      }
      
      .recommended .prod-block .name {
        font-weight: 500;
      }
      
      .recommended .prod-block .review {
        color: #5A5555;
      }
      
      .recommended .prod-block .review img{
        margin-right: 10px;
      }
      
      .recommended .prod-block .price {
        text-align: center;
      }
      
      .recommended .prod-block .price .old{
        color: #898989;
        text-decoration:line-through;
      }
      
      .recommended .prod-block .price .actual {
        color: #898989;
      }
      
      .recommended .prod-block .price .new {
        color: #FA4545;
        font-weight: 600;
      }
      
      .recommended a.more {
        margin-top: 15px;
        width: 100%;
        display: flex;
        border: 1px solid rgba(0, 0, 0, .29);
        color: black;
        font-size: 13px;
        padding: 10px;
        align-items: center;
        justify-content: center;
      }
      
      .recommended a.more img {
        height: 12px;
        width: 6px;
        margin-left: 10px;
      }
      
      .product-form__item {
        flex: 0;
        width: 35%;
      }
      
      .swatch.clearfix.option1 {
        display: flex;
      }
      
      .v-slider {
        margin-top: 30px;
      }
      
      .product-form .swatch .product-form__item {
        padding: 0 10px !important;
      }
      
      .cloned-absolute-tooltip {
        left: 0 !important;
      }
      
      .cloned-absolute-tooltip:before {
        left: 35% !important;
      }
      
      .v-slider .up, .v-slider .down {
        width: 100%;
        height: 15px;
        background: url("https://conversionratestore.github.io/projects/modernbeds/img/arr.svg") center center no-repeat;
        background-size: contain;
      }
      
       .v-slider .up {
        transform: rotateZ(-90deg);
       }
       
       .v-slider .down {
        transform: rotateZ(90deg);
       }
    </style>
`


let cat = window.location.pathname
let toCat = 'https://modernbeds.co.uk/pages/divan-beds'
if(cat.includes('base')) {
    toCat = 'https://modernbeds.co.uk/pages/divan-bases'
}

if(cat.includes('mattress')) {
    toCat = 'https://modernbeds.co.uk/collections/mattresses-1'
}

if(cat.includes('wooden')) {
    toCat = 'https://modernbeds.co.uk/collections/woodenbeds'
}

if(cat.includes('headboard')) {
    toCat = 'https://modernbeds.co.uk/collections/head-boards'
}
if(cat.includes('bed-set')) {
    toCat = 'https://modernbeds.co.uk/pages/divan-beds'
}

let start = setInterval(function () {
    if(document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-also-bought-product-rating-box')) {
        clearInterval(start)
// document.addEventListener('DOMContentLoaded', function () {


        let firstProduct = {
            img: document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-also-bought-product-image').style.backgroundImage.split('"')[1],
            href: document.querySelector('.cbb-also-bought-slider-list li:first-child a').getAttribute('href'),
            name: document.querySelector('.cbb-also-bought-slider-list li:first-child h3 a').innerText,
            priceRegular: document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-also-bought-product-regular-price').innerText,
            priceSale: document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-also-bought-product-sale-price').innerText,
            priceThrow: document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-also-bought-product-compare-at-price').innerText,
            reviewCount: (document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-review-count')) ?
                document.querySelector('.cbb-also-bought-slider-list li:first-child .cbb-review-count').innerText.trim().slice(1, -1) :
                '0'
        }
        let secondProduct = {
            img: document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) .cbb-also-bought-product-image').style.backgroundImage.split('"')[1],
            href: document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) a').getAttribute('href'),
            name: document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) h3 a').innerText,
            priceRegular: document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) .cbb-also-bought-product-regular-price').innerText,
            priceSale: document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) .cbb-also-bought-product-sale-price').innerText,
            priceThrow: document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) .cbb-also-bought-product-compare-at-price').innerText,
            reviewCount: (document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) .cbb-review-count')) ?
                document.querySelector('.cbb-also-bought-slider-list li:nth-child(2) .cbb-review-count').innerText.trim().slice(1, -1) :
                '0'
        }

        let newBlock = `
    <div class="recommended">
      <p>Other bed sets</p>
      <a href="${firstProduct.href}" class="prod-block">
        <img src="${firstProduct.img}" alt="bed">
        <p class="name">${firstProduct.name}</p>
        <p class="review"><img src="https://conversionratestore.github.io/projects/modernbeds/img/stars.svg" alt="stars">${firstProduct.reviewCount} ${(+firstProduct.reviewCount === 1) ? 'review' : 'reviews'}</p>
        <p class="price">
          <span class="actual">${firstProduct.priceRegular}</span>
          <span class="old">${firstProduct.priceThrow}</span>
          <span class="new">${firstProduct.priceSale}</span>
        </p>
      </a>
      <a href=""${secondProduct.href}" class="prod-block">
        <img src="${secondProduct.img}" alt="bed">
        <p class="name">${secondProduct.name}</p>
        <p class="review"><img src="https://conversionratestore.github.io/projects/modernbeds/img/stars.svg" alt="stars">${secondProduct.reviewCount} ${(+secondProduct.reviewCount === 1) ? 'review' : 'reviews'}</p>
        <p class="price">
          <span class="old">${secondProduct.priceThrow}</span>
          <span class="new">${secondProduct.priceSale}</span>
          <span class="actual">${secondProduct.priceRegular}</span>
        </p>
      </a>
      <a class="more" href="${toCat}">Show more<img src="https://conversionratestore.github.io/projects/modernbeds/img/arr.svg" alt="arr"></a>
    </div>
`
        if ($('.product-form__item .swatch-wrapper').hasClass('slick-slider')) {
            $('.product-form__item .swatch-wrapper').slick('unslick')
        }

        document.body.insertAdjacentHTML('afterbegin', style)

        if (document.querySelector('.swatch.clearfix.option1')) {
            document.querySelector('.swatch.clearfix.option1').insertAdjacentHTML('beforeend', newBlock)
            document.querySelectorAll('.swatch-element')[0].insertAdjacentHTML('beforebegin', `
            <div class="v-slider">
                <div class="up"></div>
                <div class="sld"></div>
                <div class="down"></div>
            </div>
        `)
            document.querySelectorAll('.swatch-element').forEach(item => {
                document.querySelector('.v-slider .sld').append(item)
            })
            $('.v-slider .sld').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                vertical: true,
                prevArrow: '.v-slider .up',
                nextArrow: '.v-slider .down'
            })
        } else {
            document.querySelector('.product__price').insertAdjacentHTML('beforebegin', newBlock)
            document.querySelector('.recommended').style.width = '100%'
        }

        document.querySelector('.recommended .prod-block img').addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - PDP product recommendations',
                'eventAction': 'click on recommended product image'
            });
        })

        document.querySelector('.recommended .prod-block .name').addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - PDP product recommendations',
                'eventAction': 'click on recommended product name'
            });
        })

        document.querySelector('.recommended a.more').addEventListener('click', function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - PDP product recommendations',
                'eventAction': 'click on Show more'
            });
        })
    }
}, 50);
// });

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2196497,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
hj('trigger', 'pdp_product_recommendations');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - PDP product recommendations',
    'eventAction': 'loaded'
});
