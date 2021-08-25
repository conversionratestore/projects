document.body.insertAdjacentHTML('afterbegin',`<style>

    .homeslider__dots {
        display: none;
    }
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
        .gallery-parent {
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
        .swiper-container .slider-gallery {
            padding: 15px 0 0 0;
            width: 100%;
            max-width: 249px;
            margin: 0 auto!important;
            flex-wrap: nowrap;}
        .swiper-container .slider-gallery .product-card:last-child {
            padding-right: 0;
        }
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
        .gallery {
            flex-wrap: wrap;
            width: 500px;
            margin: 0!important;
            padding: 0 10px;
            box-sizing: border-box;
        }
        .gallery-parent {
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
            display: flex!important;
            max-height: calc(100vh - 47px)!important; 
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
        .gallery {
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

</style>`);

if (window.matchMedia("(max-width: 1009px)").matches) {
    document.querySelectorAll('.product-description b').forEach((el,i) => {
        el.after(document.querySelectorAll('.quantity-row')[i])
    });
    document.querySelector('.paypal-button input[type="image"]').setAttribute('src','https://conversionratestore.github.io/projects/medicalmega/img/pay.png');
    document.querySelector('.popup__bottom .paypal-button').before(document.querySelector('.popup__product-total'));
    document.querySelector('.popup__bottom').before(document.querySelector('.bought-products'));
    document.querySelector('.bought-products .title3').innerHTML = 'You May Also Like';

    // document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    //     scrollAmount = 0;
    //     let slideTimer = setInterval(function(){
    //         container.scrollLeft -= 26;
    //         scrollAmount += 10;
    //         if(scrollAmount >= 50){
    //             window.clearInterval(slideTimer);
    //         }
    //     }, 25);
    // });

    // document.querySelector('.swiper-button-next').addEventListener('click', () => {
    //     scrollAmount = 0;
    //     let slideTimer = setInterval(function() {
    //         container.scrollLeft += 27;
    //         scrollAmount += 11;
    //         if(scrollAmount >= 50){
    //             window.clearInterval(slideTimer);
    //         }
    //     }, 25);
    // });
    // let linkCustom = document.createElement('link');
    // linkCustom.href =
    //     'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
    // linkCustom.rel = 'stylesheet';
    // document.head.appendChild(linkCustom);
    //
    // let scriptCustom = document.createElement('script');
    // scriptCustom.src =
    //     'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
    // scriptCustom.async = false;
    // document.head.appendChild(scriptCustom);
    //
    // document.querySelectorAll(`.slider-gallery`).forEach(slider => {
    //     tns({
    //         container: slider,
    //         items: 4,
    //         autoplay: false,
    //         controls: true,
    //         loop: false,
    //         autoplayButton: false,
    //         autoplayButtonOutput: false,
    //         mouseDrag: true,
    //         preventScrollOnTouch: 'auto',
    //         swipeAngle: false,
    //         responsive: {
    //             1009: {
    //                 items: 1,
    //             }
    //         }
    //     });
    // });
}
if (window.matchMedia("(max-width: 759px)").matches) {
    document.querySelector('.homeslider__img').setAttribute('src', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
    document.querySelector('.homeslider__img').setAttribute('data-cfsrc', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
}



/////////////////////////////////////////////
// window.onload  = function () {
    let style = `
        <style>
            .homeslider__dots, .popup__product .unit-price p, .popup__product .total-price p {
                display: none;}
            button {
                outline: none;}
            input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0; }
            input[type=number] {
                -moz-appearance: textfield;}
            .homeslider__container {
                margin-bottom: 20px!important;
                margin-left: 10px!important;}
            .gallery {
                margin: 13px 0 0 10px;
                display: flex;}
            .gallery dd span {
                width: 100%;
                height: 140px;
                margin-bottom: 5px;
                display: inline-flex;}
            .gallery dd span a {
                margin: auto;}
            .gallery dd a {
                word-break: break-word;}
            .gallery dd a br {
                display: none;}
            .gallery dd {
                width: 140px;
                line-height: 15px;
                display: flex!important;
                flex-direction: column;
                justify-content: space-between;
                text-align: left;}
            .gallery dd b {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                font-weight: 600;
                font-size: 18px;
                padding-top: 7px;
                margin: auto 0 0;
                line-height: 1;}
            .gallery dd b s{
                font-weight: 450;
                font-size: 12px;
                line-height: 15px;
                text-decoration-line: line-through;
                margin-left: 5px;
                color: #9E9E9E;}
            .gallery-parent {
                padding-bottom: 30px;}
            h2.title, .title {
                text-align: left;
                padding-left: 10px;
                font-size: 24px;
                line-height: 29px;
                font-weight: 600;
                color: #222222;
                text-transform: capitalize;}
            .homepage-container {
                display: grid;}
            .trustpilot-widget-container {
                order: 3;}
            .add-to-cart {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 8px 0 0;
                width: 100%;}
            .add-to-cart button {
                color: #FFFFFF;
                padding: 0 9px;
                margin-bottom: 0;
                line-height: 33px!important;
                outline: none;
                cursor: pointer;
                background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
                border: 0.5px solid #780F11;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                text-align: center;
                text-transform: capitalize;}
            .add-to-cart input {
                font-size: 18px;
                line-height: 20px;
                color: #000000;
                padding: 6.5px 0;
                width: 33px;
                text-align: center;
                background: #EEEEEE;
                border: 0.5px solid #CCCCCC;
                border-radius: 4px;}   
            .show-more {
                width: calc(100% - 213px);
                padding: 0 28px;
                font-weight: 450;
                font-size: 15px;
                line-height: 33px;
                text-align: center;
                text-transform: capitalize;
                color: #666666;
                display: block;
                margin: 20px 0 0 10px;
                background: #EEEEEE;
                border: 0.5px solid #CCCCCC;
                border-radius: 4px;}     
            .popup {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100vh;
                z-index: 999999;
                display: inline-flex;
                overflow-y: auto;
                background: rgba(64, 62, 62, 0.46);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;}
            .popup.isActive {
                opacity: 1;
                pointer-events: auto;}
            .popup__container {
                margin: auto;
                background: #FFFFFF;
                border-radius: 4px;
                max-width: 622px;
                width: 100%;
                padding: 20px 20px 40px;}
            .close {
                position: relative;
                width: 46px;
                height: 46px;
                background-color: transparent;
                border: none;
                cursor: pointer;}
            .close:before, .close:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                background-color: #DADADA;
                width: 20px;
                height: 2px;}
            .close:before {
                transform: translate(-50%,-50%) rotate(45.2deg);}
            .close:after {
                transform: translate(-50%,-50%) rotate(-45.2deg);} 
            .popup__head {
                display: flex;
                justify-content: space-between;
                align-items: center;}
            .popup .altPayment {
                width: 100%;}
            .popup .product-description b a br{
                display: none; }
            .popup h2.title, .title {
                padding-left: 0;}
            h3.title3, .title3 {
                text-align: left;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                text-transform: capitalize;
                color: #222222}
            .popup .altPayment th {
                padding: 16px 0;
                border-bottom-color: #EEEEEE;
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
                text-transform: capitalize;
                color: #CCCCCC;
                border-left: none;}
            .popup .altPayment, .popup table.altPayment td {
                border: none}
            .popup__product-total {
                background: #EEEEEE;
                border: 1px solid #EEEEEE;}
            .altPayment td .product-cell-inner span {
                flex-shrink: 0;
                border: 0.5px solid #EEEEEE;
                padding: 0; 
                width: 98px;
                height: 98px;}
            .popup__product div.product-cell-inner {
                padding: 0 10px 0 0;
                display: flex;}
            .popup table.altPayment p.product-description{
                width: fit-content;
                word-break: break-word;
                margin-top: 0;}
            .popup table.altPayment td {
                padding: 0;}
            .popup table.altPayment .popup__product td {
                padding: 0 0 10px 0; }
            .quantity-btn {
                display: none;
                width: 28px;
                cursor: pointer;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                text-transform: capitalize;
                background-color: transparent;
                color: #666666;
                border: none;
                padding: 2px 0;}
            .quantity-btn[disabled] {
                color: #CCCCCC;}
            .quantity {
                background: #FFFFFF;
                border: 0.5px solid #CCCCCC;
                width: 30px;
                font-size: 14px;
                line-height: 17px;
                text-align: center;
                padding: 5px 0;
                color: #000000;}
            .quantity:focus, .quantity[type='number']:focus, .quantity[type='number'] {
                pointer-events: none!important; }
            .popup .altTd b {
                font-weight: 450;
                font-size: 18px;
                text-align: right;
                text-transform: capitalize;
                color: #222222;}
            .popup .altTd.total-values b {
                font-weight: 600;}
            .popup .altTd b:first-child {
                font-size: 14px;
                text-transform: capitalize;
                color: #666666;
                margin-bottom: 5px;
                font-weight: 400;}
            .popup .altTd.total-values b:first-child {
                font-weight: 450;}
            .quantity-row {
                padding-left: 24px;
                display: flex;}
            .flex-center {
                display: flex;
                align-items: center;}
            .popup .unit-price, .popup .total-price {
                font-weight: normal;
                font-size: 14px;
                line-height: 29px;
                color: #000000;}
            .popup .unit-price b{
                font-weight: normal;}
            .popup .total-price {
                font-weight: 600;}
            .popup .total-price b {
                font-weight: 600;}
            .popup .continue-shopping {
                display: flex; 
                background-color: transparent;
                align-items: center;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                border: none;
                text-decoration-line: underline;
                text-transform: capitalize;
                color: #222222;}
            .btn {
                background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
                border: 0.5px solid #780F11;
                border-radius: 4px;
                font-weight: 600;
                font-size: 14px;
                line-height: 33px;
                text-align: center;
                text-transform: uppercase;
                color: #FFFFFF;
                padding: 0 22px;
                display: flex;
                align-items: center;}
            .btn img {
                margin-left: 5px;}
            .popup__bottom {
                // margin-bottom: 30px;
                padding: 20px 0;
                border-bottom: 0.5px solid #EEEEEE;
                display: flex;
                align-items: center;
                justify-content: space-between;}
            .popup img#checkout-button {
                margin-top: 0;
                width: 18px;
                height: 18px;}
            div.paypal-button, div.or-text, div.checkout {
                padding: 0;}
            .body table {
                scrollbar-width: thin;
                scrollbar-color: #CCCCCC #666666;}
            .body table::-webkit-scrollbar{
                background: #CCCCCC;
                width: 4px;
                height: 4px;}
            .body table::-webkit-scrollbar-thumb{
                background: #666666;}
            .slider-gallery{
                overflow: visible!important;
                /*max-width: 510px;*/
                margin: 0 auto;
                padding-top: 15px;}
            .gallery .swiper-slide {
                padding: 0 10px 0 0;
                width: calc(25% - 10px);}
            .gallery .swiper-slide:last-child {
                padding: 0;}
            .gallery .swiper-slide a {
                font-size: 10px;
                line-height: 12px;}
            .gallery .swiper-slide b  {
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;}
            .gallery .swiper-slide .add-to-cart button{
                font-size: 12px;
                line-height: 28px!important;
                padding: 0 5px;}
            .gallery .swiper-slide .add-to-cart input{
                padding: 4px 0; }
            .swiper-container {
                max-width: 520px;
                position: relative;}
            .swiper-button-prev, .swiper-button-next {
                position: absolute;
                border: none;
                cursor: pointer;
                top: 50%;
                transform: translateY(-50%);
                width: 36px;
                height: 36px;
                z-index: 9;
                background: no-repeat center / contain}
            .swiper-button-prev {
                left: 0;
                background-image: url('https://i.ibb.co/m0Lv3wp/expand-more-24px.png');}
            .swiper-button-next {
                right: 0;
                background-image: url('https://i.ibb.co/v4MXXdd/expand-more-24px-1.png');}
            .gallery .swiper-slide {
                flex-shrink: 0;
                clear: both;}
            /*.slider-gallery {*/
            /*    overflow-x: auto;*/
            /*    display: flex;}*/
            /*.slider-gallery::-webkit-scrollbar {*/
            /*    display: none;}*/
            .before, .after {
                position: absolute;
                display: block;
                width: 25%;
                padding: 0;
                margin-top: 15px;
                width: calc(25% - 10px);
                margin-right: 10px;
                flex-shrink: 0;
                clear: both;}
            .before {
                margin-left: calc(50% - 10px);}
            .after {
                margin-left: calc(75% - 10px);}
            /*.slider-gallery .product-card, #tns1 > .tns-item {*/
            /*    width: 130px;*/
            /*    flex-shrink: 0; }*/
             .gallery-parent #tns1 > .tns-item {
                width: 25%;
                padding: 0;
                margin: 0 10px 0 0;
             }
            .slider-gallery .product-card .add-to-cart button {
                font-size: 12px;
                padding: 0 4px;
                line-height: 31px!important;}
            .slider-gallery .product-card .add-to-cart input {
                padding: 5.5px 0;}
            .bought-products {
                padding-top: 30px;}
            .slider-gallery.gallery .product-card span {
                height: 120px;
                width: 120px;}
            .slider-gallery.gallery .product-card img {
                max-height: 120px;
                width: 100%;
                object-fit: contain;}
            .add-to-cart[disabled] {
                opacity: 0.6;
            }
        </style>
    `;

    document.body.insertAdjacentHTML('afterbegin', style);

    let productsStored = [];
    let productsStoredUpdate = [];

    function sumTotalPrice() {
        let sum = 0;
        document.querySelectorAll('.total-price b').forEach((totalPrice) => {
            sum += parseFloat(totalPrice.innerHTML);
            document.querySelectorAll('.total-values b').forEach((totalValues) => {
                totalValues.innerHTML = `$ ${sum.toFixed(2)}`;
            });
        });
    }

    function quantityFun(el) {
        if (el.querySelector('.quantity').value < 2) {
            el.querySelector('.quantity').value = 1;
            el.querySelector('.quantity-btn_minus').disabled = true;
        } else {
            el.querySelector('.quantity-btn_minus').disabled = false;
        }
        el.querySelector('.quantity-row').addEventListener('change', () => {
            if (el.querySelector('.quantity').value < 2) {
                el.querySelector('.quantity').value = 1;
                el.querySelector('.quantity-btn_minus').disabled = true;
            } else {
                el.querySelector('.quantity-btn_minus').disabled = false;
            }
            el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
            sumTotalPrice();
        });
        el.querySelectorAll('.quantity-btn').forEach((button) => {
            button.addEventListener('click', (event) => {
                event.stopImmediatePropagation();
                if (button.className == 'quantity-btn quantity-btn_plus') {
                    button.previousElementSibling.value = +button.previousElementSibling.value + 1;
                    button.parentElement.querySelector('.quantity-btn_minus').disabled = false;
                }
                if (button.className == 'quantity-btn quantity-btn_minus') {
                    if (button.nextElementSibling.value < 2) {
                        button.nextElementSibling.value = 1;
                        button.disabled = true;
                    } else {
                        button.nextElementSibling.value = +button.nextElementSibling.value - 1;
                    }
                }
                el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
                sumTotalPrice();
            });
        });
    }

    function addToCart() {
        document.querySelectorAll('.add-to-cart button').forEach((item, index) => {
            item.addEventListener('click', () => {
                document.querySelector('.popup__bottom .flex-center').style.display = 'flex';
                let valueP = 1;
                valueP = +item.nextElementSibling.value,
                    num = +document.querySelector('.by_num span').innerHTML;
                document.querySelector('.by_num span').innerHTML = num + valueP;

                let parent = item.parentElement.closest('dd'),
                    srcImgProduct = parent.querySelector('img').src,
                    altImgProduct = parent.querySelector('img').alt,
                    titleProduct = parent.querySelectorAll('a')[1].innerHTML,
                    linkProduct = parent.querySelectorAll('a')[1].href,
                    priceProductAll = parent.querySelector('b').innerHTML,
                    splPrice = priceProductAll.split('$');

                let dataProductVariantId = item.closest('.product-card').getAttribute('data-product-variant-id'),
                    productId = item.closest('.product-card').getAttribute('data-product-id');

                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
                    'eventAction': 'click on button — add to cart',
                    'eventQuantity': `${valueP}`
                });

                if (document.querySelector('.body table tbody').innerHTML == '' || !document.querySelector(`.popup__product[data-product-id='${productId}']`)) {
                    addProduct(productId,dataProductVariantId,linkProduct,srcImgProduct,titleProduct,valueP,parent.querySelector('b s') ? splPrice[2]: splPrice[1]);
                }

                if (document.querySelector(`.popup__product[data-product-id='${productId}']`)) {
                    document.querySelectorAll(`.popup__product[data-product-id='${productId}']`).forEach((el) => {
                        el.querySelector('.quantity').value = parseInt(item.nextElementSibling.value) + parseInt(el.querySelector('.quantity').value);
                    });
                }

                document.querySelector('.popup').classList.add('isActive');

                productsStored = [];
                localStorage.setItem('productsStored', '');

                document.querySelectorAll(`.popup__product`).forEach((el) => {
                    quantityFun(el);
                    el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
                    sumTotalPrice();
                    productsStored.push({
                        'product_id': el.getAttribute('data-product-id'),
                        'quantity': el.querySelector('.quantity').value,
                        'price': el.querySelector('.unit-price b').innerHTML,
                        'product_variant_id': el.getAttribute('data-product-variant-id'),
                        'img_src': el.querySelector('a img').getAttribute('src'),
                        'link': el.querySelector('.product-description a').getAttribute('href'),
                        'title': el.querySelector('.product-description a').innerHTML,
                    });
                    localStorage.setItem('productsStored', JSON.stringify(productsStored));
                });

                fetch('/cart.html', {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    method: "POST",
                    body: `product_variant_id=${dataProductVariantId}&quantity=${valueP}&product_id=${productId}&add_to_cart=variant`
                })
            });
        });

        document.querySelectorAll('.add-to-cart').forEach( (item) => {
            item.addEventListener('change', () => {
                if (item.querySelector('input').value <= 1) {
                    item.querySelector('input').value = 1;
                }
            });
        });
    }

    function addProduct(id,varId,link,imgSrc,title,quantity,price) {
        let newElementProduct = `
        <tr class="popup__product" data-product-id='${id}' data-product-variant-id='${varId}'>
            <td width="44%">
                <div class="product-cell-inner">
                    <span> 
                        <a href="${link}">
                            <img src="${imgSrc}" alt="${title}">
                        </a>
                    </span>
                    <p class="product-description" align="left">
                        <b>
                            <a href="${link}" style="font-size:12px;line-height:15px;color:#000000;font-weight: normal;">${title}</a>
                        </b>
                    </p>
                </div>
            </td>
            <td width="22%" align="left">
                <div class="quantity-row">
                    <button type="button" class="quantity-btn quantity-btn_minus" disabled>−</button>
                    <input type="text" name="quantity" value="0" class="quantity" data-val="${quantity}" readonly>
                    <button type="button" class="quantity-btn quantity-btn_plus">+</button>
                </div>
            </td>
            <td width="17%" class="unit-price" align="left"><p>Price:</p> $ <b>${price}</b></td>
            <td width="17%" class="total-price" align="left"><p>Total:</p> $ <b></b></td>
        </tr> `;
        document.querySelector('.body table tbody').insertAdjacentHTML('afterbegin', newElementProduct);
    }

    function quantityChenged(el){
        productsStoredUpdate.unshift({
            'productid': el.closest('.popup__product').getAttribute('data-product-id'),
            'quantity': el.closest('.popup__product').querySelector('.quantity').value,
            'price': el.closest('.popup__product').querySelector('.unit-price b').innerHTML,
            'variationid': el.closest('.popup__product').getAttribute('data-product-variant-id'),
        });
        localStorage.setItem('productsStoredUpdate', JSON.stringify(productsStoredUpdate));
    }

    let popupShoppingCart = `
    <div class="popup">
        <div class="popup__container">
            <div class="popup__head">
                <h2 class="title">Shopping cart</h2>
                <button class="close" type="button"></button>
            </div>
            <table class="altPayment" width="98%" border="0" cellspacing="0" cellpadding="5">
                <tbody>
                    <tr id="header-row">
                        <th align="left" width="44%">Product Name</th>
                        <th align="left" width="22%" style="padding-left: 17px;">Quantity</th>
                        <th align="left" width="17%">Price</th>
                        <th align="left" width="17%">Total</th>
                    </tr>
                    <tr class="body">
                        <td colspan="4" style="padding-top: 10px;">
                            <table style="max-height: 180px;min-height: 130px;overflow-y: auto;display: block;"> <tbody></tbody></table>
                        </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr class="popup__product-total">
                        <td class="altTd total-headings" style="padding:18px 10px 18px 0;text-align:right;line-height: 23px;" colspan="3">
                            <b>Sub Total :</b><br>
                            <b style="font-size:17px;">Grand Total:</b>
                        </td>
                        <td class="altTd total-values" style="padding:18px 0 18px 0;line-height: 23px;" align="left" valign="top">
                            <b>$ 0.00</b><br>
                            <b style="font-size:17px;">$0.00</b>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="popup__bottom">
                <button type="button" class="continue-shopping">
                    <img src="https://i.ibb.co/6b6CBMg/Arrow-Left.png" alt="Continue" style="margin-right: 4px" wifth="18px" height="18px">
                    Back to Shopping
                </button>
                <div class="flex-center">
                    <div class="paypal-button">
                        <form action="https://medicalmega.com/guest-expresscheckout.php" method="POST" target="default" class="paypal-form-button">
                            <input type="image" name="submit" src="https://i.ibb.co/CJCszqD/btn-paywith-primary-l-1.png" border="0" align="top" alt="Check out with PayPal">
                        </form>
                    </div>
                    <div class="or-text"><p style="color:#222222; font-weight:600; padding: 5px 10px; margin: 0px">
                        OR</p>
                    </div>
                    <div class="checkout">
                        <a class="btn" href="https://medicalmega.com/checkout/step1">
                            Checkout Now
                            <img src="https://i.ibb.co/r5RKgLr/Arrow-Right.png" alt="Continue" id="checkout-button">
                        </a>
                    </div>
                </div>
            </div>
            <div class="bought-products">
                <h3 class="title3">Also bought with this products</h3>
                <div class="swiper-container">
                    <dl class="slider-gallery gallery"></dl>
                    <button class="swiper-button-prev" type="button"></button>
                    <button class="swiper-button-next" type="button"></button>
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', popupShoppingCart);

    if (document.querySelector('.by_num span') != null && document.querySelector('.by_num span').innerHTML == '0') {
        localStorage.setItem('productsStored', '');
    }
    if (document.querySelector('.by_num span') != null && document.querySelector('.by_num span').innerHTML != '0') {
        let cartItems = JSON.parse(localStorage.getItem("productsStored"));
        if (cartItems) {
            for (let i = 0; i < cartItems.length; i++) {
                if (document.querySelector('.body table tbody').innerHTML == '' || !document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}']`)) {
                    addProduct(cartItems[i].product_id,cartItems[i].product_variant_id,cartItems[i].link,cartItems[i].img_src,cartItems[i].title,cartItems[i].quantity,cartItems[i].price)
                }
                if (document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}']`)) {
                    document.querySelectorAll(`.popup__product[data-product-id='${cartItems[i].product_id}']`).forEach((el) => {
                        el.querySelector('.quantity').value = parseInt(cartItems[i].quantity) + parseInt(el.querySelector('.quantity').value); //
                        quantityFun(el);
                    });
                }

                document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}'] .total-price b`).innerHTML = (parseFloat(document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}'] .quantity`).value) * parseFloat(document.querySelector(`.popup__product[data-product-id='${cartItems[i].product_id}'] .unit-price b`).innerHTML)).toFixed(2);
                sumTotalPrice();
            }
        }
    }
    if (document.querySelector('.shoppingcart')) {
        document.querySelector('.shoppingcart').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.popup').classList.add('isActive');
            if (document.querySelector('.popup .body table tbody').innerHTML == '') {
                document.querySelector('.popup__bottom .flex-center').style.display = 'none';
            } else {
                document.querySelector('.popup__bottom .flex-center').style.display = 'flex';
            }
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
                'eventAction': 'click on shopping cart'
            });
        });
    }


    if (document.querySelector('#cart_box a')) {
        document.querySelectorAll('#cart_box a')[0].setAttribute('onclick','');
        document.querySelectorAll('#cart_box a')[0].addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();

            let id = document.querySelector('[name="product_id"]').value,
                varId = document.querySelector('[name="product_variant_id"]').value,
                link = window.location.href,
                imgSrc = document.querySelector('.product_img').getAttribute('src'),
                title = document.querySelectorAll('.center h3')[0].innerHTML,
                quantity = document.querySelector('[name="quantity"]').selectedIndex + 1,
                price = document.querySelector('.product-price').innerHTML.replace('$','');

            fetch('/cart.html', {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                method: "POST",
                body: `product_variant_id=${varId}&quantity=${quantity}&product_id=${id}&add_to_cart=variant`
            })

            if (document.querySelector('.body table tbody').innerHTML == '' || !document.querySelector(`.popup__product[data-product-id='${id}']`)) {
                addProduct(id,varId,link,imgSrc,title,quantity,price);
            }

            if (document.querySelector(`.popup__product[data-product-id='${id}']`)) {
                document.querySelectorAll(`.popup__product[data-product-id='${id}']`).forEach((el) => {
                    el.querySelector('.quantity').value = parseInt(quantity) + parseInt(el.querySelector('.quantity').value);
                });
            }

            productsStored = [];
            localStorage.setItem('productsStored', '');

            document.querySelectorAll(`.popup__product`).forEach((el) => {
                quantityFun(el);
                el.querySelector('.total-price b').innerHTML = `${(parseFloat(el.querySelector('.quantity').value) * parseFloat(el.querySelector('.unit-price b').innerHTML)).toFixed(2)}`;
                sumTotalPrice();
                productsStored.push({
                    'product_id': el.getAttribute('data-product-id'),
                    'quantity': el.querySelector('.quantity').value,
                    'price': el.querySelector('.unit-price b').innerHTML,
                    'product_variant_id': el.getAttribute('data-product-variant-id'),
                    'img_src': el.querySelector('a img').getAttribute('src'),
                    'link': el.querySelector('.product-description a').getAttribute('href'),
                    'title': el.querySelector('.product-description a').innerHTML,
                });
                localStorage.setItem('productsStored', JSON.stringify(productsStored));
            })
            document.querySelector('.popup').classList.add('isActive');

        });
    }

    document.querySelector('.popup .continue-shopping').addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('isActive');
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
            'eventAction': 'click on button — back to shopping'
        });
    });

    document.querySelector('.popup .checkout .btn').addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
            'eventAction': 'click on button — checkout now'
        });
    });

    let arrLinks = ['https://medicalmega.com/product/gauze-sponge-mckesson-cotton-gauze-8-ply-4-x-4-inch-square-sterile','https://medicalmega.com/product/caring-abd-pad-5-x-9-sterile','https://medicalmega.com/product/healqu-calcium-alginate-wound-dressing-2-x-2','https://medicalmega.com/product/healqu-xeroform-gauze-dressing-2in-x-2in','https://medicalmega.com/product/healqu-bordered-gauze-dressing-4-x-4','https://medicalmega.com/product/foley-anchor-urinary-catheter-securement-device','https://medicalmega.com/product/healqu-xeroform-gauze-dressing-4-x-4','https://medicalmega.com/product/healqu-xeroform-gauze-dressing-5-x-9','https://medicalmega.com/product/unistrip-glucose-test-strips-for-use-with-one-touch-blood-glucose-monitors','https://medicalmega.com/product/suction-catheter-kit-14-fr12142','https://medicalmega.com/product/bordered-silicone-foam-dressings-4-x-4','https://medicalmega.com/product/healqu-silver-alginate-wound-dressing-2-x-2','https://medicalmega.com/product/pulmocare-institutional-1000-ml-ready-to-hang-with-safety-screw-connector-vanilla','https://medicalmega.com/product/healqu-super-absobent-adhesive-dressing-4-x-4','https://medicalmega.com/product/stomahesive-paste-2-oz-tube','https://medicalmega.com/product/aqua-guard-moisture-barrier-7-x-7-retail-display','https://medicalmega.com/product/convatec-gentlecath-intermittent-urinary-catheter-with-straight-tip-14fr-16','https://medicalmega.com/product/airlife-unit-dose-sterile-water-5ml','https://medicalmega.com/product/healqu-silver-alginate-wound-dressing-4-x-5','https://medicalmega.com/product/earloop-procedure-face-mask-blue-case-of-600']
    for (let i = 0; i < arrLinks.length; i++) {
        (function(){
            var http = new XMLHttpRequest();
            http.open('GET', `${arrLinks[i]}`);
            http.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var doc = new DOMParser().parseFromString(this.responseText, "text/html");
                    document.querySelector('.slider-gallery').insertAdjacentHTML('beforeend',`
                    <dd class="product-card" data-product-id="${doc.querySelector('[name="product_id"]').value}" data-product-variant-id="${doc.querySelector('[name="product_variant_id"]').value}">
                        <span><a href="${arrLinks[i]}"><img src="${doc.querySelector('.type1 img').getAttribute('src')}" alt="${doc.querySelectorAll('.center h3')[0].innerHTML}"></a></span>
                        <a href="${arrLinks[i]}">${doc.querySelectorAll('.center h3')[0].innerHTML}</a>
                        <b> ${doc.querySelector('#variant_tag b s') ? doc.querySelector('#variant_tag b s') : ''} 
                        ${doc.querySelector('.type2 .product-price') ? doc.querySelector('.type2 .product-price').innerHTML : ''}</b>
                        <form action="https://medicalmega.com/cart.html" method="post">
                            <input type="hidden" name="product_id" value="${doc.querySelector('[name="product_id"]').value}">
                            <input type="hidden" name="product_variant_id" value="${doc.querySelector('[name="product_variant_id"]').value}">
                            <input type="hidden" name="quantity" value="1">
                        </form>
                        <div class="add-to-cart" ${!doc.querySelector('.type2 .product-price') ? 'disabled' : ''}><button type="button">add to cart</button><input type="number" value="1"></div>
                    </dd>`);
                    if (i === 0) {
                        addToCart()
                    }
                }
            }
            http.send(null);
        })()
    }

    let container = document.querySelector('.slider-gallery');

let linkCustom = document.createElement('link');
linkCustom.href =
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
linkCustom.rel = 'stylesheet';
document.head.appendChild(linkCustom);

let scriptCustom = document.createElement('script');
scriptCustom.src =
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
scriptCustom.async = false;
document.head.appendChild(scriptCustom);


// let categoryInterval = setInterval(() => {
//     if (typeof tns == 'function') {
//         clearInterval(categoryInterval);

        let sliderCategories = tns({
            container: container,
            items: 4,
            autoplay: false,
            axis: 'horizontal',
            controls: true,
            loop: false,
            prevButton: document.querySelector('.swiper-button-prev'),
            nextButton: document.querySelector('.swiper-button-next'),
            autoplayButton: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            preventScrollOnTouch: 'auto',
            swipeAngle: false,
            responsive: {
                1009: {
                    items: 4,
                }
            }
        });
//     }
// }, 200);
    // document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    //     scrollAmount = 0;
    //     let slideTimer = setInterval(function(){
    //         container.scrollLeft -= 26;
    //         scrollAmount += 10;
    //         if(scrollAmount >= 50){
    //             window.clearInterval(slideTimer);
    //         }
    //     }, 25);
    // });
    //
    // document.querySelector('.swiper-button-next').addEventListener('click', () => {
    //     scrollAmount = 0;
    //     let slideTimer = setInterval(function() {
    //         container.scrollLeft += 26;
    //         scrollAmount += 10;
    //         if(scrollAmount >= 50){
    //             window.clearInterval(slideTimer);
    //         }
    //     }, 25);
    // });

    document.querySelector('.popup .body').addEventListener('change', () => {
        productsStoredUpdate = [];
        localStorage.setItem('productsStoredUpdate', '');
        document.querySelectorAll('.popup__product .quantity').forEach(el => quantityChenged(el));
    });

    if (window.location.pathname == '/') {
        document.querySelector('.homeslider__img').setAttribute('src', 'https://conversionratestore.github.io/projects/medicalmega/img/banner.png');
        document.querySelector('.homeslider__img').setAttribute('data-cfsrc', 'https://conversionratestore.github.io/projects/medicalmega/img/banner.png');

        document.querySelectorAll('.gallery').forEach( (item, index) => {
            let galleryWrapper = document.createElement('div');
            galleryWrapper.className = 'gallery-parent';

            let htmlTitle = `<h2 class="title"></h2>`;
            if (index < 6) {
                galleryWrapper.insertAdjacentHTML('afterbegin', htmlTitle);
            }

            item.parentNode.appendChild(galleryWrapper);

            return galleryWrapper.appendChild(item);
        });

        const galleryDd = document.querySelectorAll('.gallery dd');
        for (let i = 0; i < galleryDd.length; i++) { galleryDd[i].insertAdjacentHTML('beforeend', `<div class="add-to-cart"><button type="button">add to cart</button><input type="number" value="1"></div>`); }

        const galleryParent = document.querySelectorAll('.gallery-parent');
        for (let i = 0; i < galleryParent.length; i++) {
            if (i < 5) { galleryParent[i].insertAdjacentHTML('beforeend', `<a href="#" class="show-more">Show more</a>`); }
        }

        const arrTitle = ['New products','Ostomy','Wound care','Hand Sanitizing','Protective Gear','All products'],
            galleryTitle = document.querySelectorAll('.title'),
            showMore = document.querySelectorAll('.show-more');
        showMore.forEach( (item) => {
            item.addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
                    'eventAction': 'click on button — show more'
                });
            });
        });
        for (let i = 0; i < arrTitle.length; i++) {
            galleryTitle[i].innerHTML = arrTitle[i];
            let changedTitle = arrTitle[i].split(' ').join('-').toLowerCase();
            if (i < 5) { showMore[i].setAttribute('href', `https://medicalmega.com/category/${changedTitle}`); }
        }
    }

    document.querySelector('.popup .close').addEventListener('click', () => {
        document.querySelector('.popup').classList.remove('isActive');
    });
// };

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1483840,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'PL_and_cart_improvements');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'CRO - A/B - PL and cart improvements - Live',
    'eventAction': 'loaded'
});

