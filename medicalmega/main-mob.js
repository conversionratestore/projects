window.onload  = function () {
    let style = `
        <style>
            @media only screen and (max-width: 479px)  {
                div#banner {
                    margin: 0 auto;
                }
                div#wrap, div#hdr, div#mainbody {
                    width: 100%;
                }
                .gallery, .homeslider__container, .gallery-parent {
                    width: 100%;
                    margin: 0;
                    box-sizing: border-box;
                }
                .homepage-container .gallery-parent {
                    padding: 0 22.5px;
                    justify-content: space-between;
                }
                .gallery-parent .show-more {
                    margin: 24px auto 0;
                }
                .mainleft .homeslider__container {
                    margin: 18px 0 0 0;
                    width: 100%;
                }
                #hdr {
                    margin: 0 auto;
                    width: 320px;
                }
                a#top-navigation {
                    right: 34px;
                }
            }
        
            @media only screen and (max-width: 1009px)  {
                .swiper-container {
                    max-width: 260px;
                }
                div.paypal-button, div.or-text, div.checkout{
                    margin: 0!important;
                }
                .product-description a {
                    color: #666666!important;
                }
                .popup .popup__product .unit-price {
                    color: #666666;
                }
                .bought-products {
                    padding-bottom: 30px;
                }
                .popup {
                    overflow: hidden;
                }
                .swiper-container .swiper-button-prev {
                    left: -25px;
                }
                 .swiper-container .swiper-button-next {
                    right: -25px;
                }
                .swiper-container .swiper-button-prev, .swiper-container .swiper-button-next {
                    background-size: 25px;}
                .swiper-container .gallery dd a {
                    color: #666666;
                    font-size: 10px;
                    line-height: 14px;
                }
                .popup .popup__product .unit-price p, .popup .popup__product .total-price p {
                    display: block;
                    margin-right: auto;}
                .popup .popup__product .unit-price, .popup .popup__product .total-price {
                    width: 100%;
                    line-height: 16px;
                    display: flex;}
                .popup__product {
                    border-bottom: 1px solid #EEEEEE;
                    padding-bottom: 7px;
                    margin-bottom: 15px;}
                .popup__bottom .popup__product-total {
                    border: none;
                    background-color: transparent;
                    width: 280px;}
                .popup__product-total td {
                    width: 100%;
                    white-space: nowrap;
                    padding: 0 0 9px 0!important;
                }
                .popup__product-total .total-values {
                    text-align: right;
                }
                .popup .continue-shopping {
                    display: none!important; }
                .popup .popup__bottom {
                    background: #FFFFFF;
                    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.05);
                    position: sticky;
                    bottom: 0;
                    z-index: 10;
                    margin: 0 -20px;
                    width: 319px; }
                .popup__bottom .flex-center{
                    flex-direction: column;
                    width: 100%; }
                .popup__bottom .btn {
                    justify-content: center;}
                .checkout {
                    max-width: 280px;
                    width: 100%; }
                .popup__bottom div.or-text {
                    display: block;}
                .or-text p {
                    text-transform: lowercase;
                    font-weight: 400!important;
                    font-size: 12px;
                    line-height: 16px;
                    color: #666666!important; }
                .homepage-container .gallery {
                    flex-wrap: wrap;
                    width: 500px;
                    margin: 0!important;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
                .homepage-container .gallery-parent {
                    max-width: 510px;
                    padding-bottom: 0!important;
                }
                .homepage-container dl.gallery dd {
                    width: 50%;
                    padding: 15px 50px 0;
                    margin: 0;
                    box-sizing: border-box;
                }
                .gallery-parent .show-more {
                    box-sizing: border-box;
                    margin: 24px 10px 0!important;
                    width: 100%!important;
                }
                .homeslider__container {
                    max-width: 500px;
                }
                .homeslider__container a {
                    display: block;
                }
                .gallery-parent h2.title, .gallery-parent .title {
                    font-size: 20px;
                    line-height: 20px;
                    padding-top: 30px;
                }
                .popup .popup__container {
                    margin: 0 0 0 auto;
                    height: 100vh;
                    max-width: 320px;
                    padding: 0 20px;
                    box-sizing: border-box;
                    overflow-x: hidden;
                    overflow-y: auto;
                }
                .popup__product-total .total-headings {
                    text-align: left!important;
                }
                .popup .altTd b:last-child {
                    font-weight: 700;
                    font-size: 14px;
                }
                .popup__product-total br {
                    line-height: 28px!important;
                }
                .popup__head {
                    background-color: #fff;
                    position: sticky;
                    z-index: 9;
                    top: 0;
                    padding-top: 10px;
                    border-bottom: 1px solid #EEEEEE;
                }
                .popup h2.title {
                    font-size: 20px;
                    line-height: 20px;
                }
                #header-row {
                    display: none;
                }
                .popup__product {
                    position: relative;
                    display: block;
                }
                .popup__product td:nth-child(2) {
                    position: absolute;
                    left: 87px;
                    top: calc(100% - 39px);
                }
                .popup .altPayment td .product-cell-inner span {
                    width: 77px;
                    height: 77px;
                }
                .popup table {
                    overflow-x: hidden;
                    display: flex!important;
                    max-height: none!important; 
                }
                .popup__head .close {
                    width: 36px;
                    height: 36px;
                    right: -13px;
                }
                .popup__head .close:before, .popup__head .close:after  {
                    width: 16px;
                }
                .popup table.altPayment .popup__product td:nth-child(1) {
                    width: 100%;
                }
                .popup .quantity-row {
                    padding-left: 0;
                    display: block;
                }
                .popup table.altPayment p.product-description {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    height: 77px;
                }
                .popup .quantity {
                    background: #EEEEEE;
                    border-radius: 4px;
                }
            }
            @media only screen and (max-width: 758px)  {
                .homeslider__container, .show-more, .gallery-parent {
                    width: 100%;
                    box-sizing: border-box;
                }
                .gallery-parent .show-more {
                    width: auto!important;
                    margin: 24px 10px 0!important;
                }
                .homepage-container .gallery {
                    width: 100%;
                    justify-content: space-around;
                }
                .homepage-container dl.gallery dd {
                    padding: 15px 0 0;
                    width: 140px;
                }
                .homeslider__slide {
                    width: 100%;
                }
                .homeslider__container a {
                    width: 100%;
                }
               .mainleft  .homeslider__container {
                    margin-left: 0!important;
                }
                .mainleft .homepage-container {
                    display: flex!important;
                    flex-direction: column;
                }
            }
            @media only screen and (max-width: 360px)  {
                .gallery-parent {
                    padding: 15px 0 0 0;
                }
            }
        </style>`;

    document.body.insertAdjacentHTML('afterbegin', style);

    if (window.matchMedia("(max-width: 1009px)").matches) {
        document.querySelectorAll('.product-description b').forEach((el,i) => {
            el.after(document.querySelectorAll('.quantity-row')[i])
        });
        document.querySelector('.paypal-button input[type="image"]').setAttribute('src','https://conversionratestore.github.io/projects/medicalmega/img/pay.png');
        document.querySelector('.popup__bottom .paypal-button').before(document.querySelector('.popup__product-total'));
        document.querySelector('.popup__bottom').before(document.querySelector('.bought-products'));
        document.querySelector('.bought-products .title3').innerHTML = 'You May Also Like';

        document.querySelectorAll('.add-to-cart button').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.product-description b').forEach((el,i) => {
                    el.after(el.closest('.popup__product').querySelector('.quantity-row'));
                });
            })
        });
    }
    if (window.matchMedia("(max-width: 759px)").matches) {
        document.querySelector('.homeslider__img').setAttribute('src', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
        document.querySelector('.homeslider__img').setAttribute('data-cfsrc', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
    }
};
