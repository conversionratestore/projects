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
    }

    @media only screen and (max-width: 1009px)  {
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
        dl.gallery dd {
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
            padding: 10px 20px;
        }
        .bought-products {
            display: none;
        }
        .popup__head {
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
        .close {
            width: 36px;
            height: 36px;
        }
        .close:before, .close:after {
            width: 16px;
            height: 16px;
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
            flex-direction: column;
            height: 77px;
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
        dl.gallery dd {
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

}
if (window.matchMedia("(max-width: 759px)").matches) {
    document.querySelector('.homeslider__img').setAttribute('src', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
    document.querySelector('.homeslider__img').setAttribute('data-cfsrc', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
}
