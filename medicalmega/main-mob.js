document.body.insertAdjacentHTML('afterbegin',`<style>
    @media only screen and (max-width: 1009px)  {
        .gallery {
            flex-wrap: wrap;
            width: 500px;
            margin: 0!important;
            padding: 0 10px;
        }
        .gallery-parent {
            max-width: 510px;
            padding-bottom: 0!important;
        }
        dl.gallery dd {
            width: 50%;
            padding: 15px 55px 0;
            margin: 0;
            box-sizing: border-box;
        }
        .show-more {
            box-sizing: border-box;
            margin: 24px 10px 0!important;
            width: calc(100% - 20px)!important;
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
        @media only screen and (max-width: 758px)  {
        
        }
    }
</style>`);

if (window.matchMedia("(max-width: 759px)").matches) {
    document.querySelector('.homeslider__img').setAttribute('src', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
    document.querySelector('.homeslider__img').setAttribute('data-cfsrc', 'https://conversionratestore.github.io/projects/medicalmega/img/banner-mobile.png');
}
