document.body.insertAdjacentHTML('afterbegin',`
<style>
    .breadcrumb  {
        display: none;}
    .btn-back {
        background: url("https://conversionratestore.github.io/projects/mammamiacovers/img/arrow-left.svg") no-repeat left 10px center / auto 15px;
        padding: 0 14px 0 32px;
        font-size: 14px;
        line-height: 29px;
        border: 1px solid #000000;
        width: fit-content;
        margin-bottom: 30px;
        display: flex;
        align-items: center;}
       .product-single--classic .product-single__photo--large .product-single__photo__nav, .product-single--minimal .product-single__photo--large .product-single__photo__nav {
            display: block!important;
            z-index: 3;}
       .product-single__photo__nav i {
            color: #000;
            font-weight: 700;}
       .product-single--classic .product-single__photo__nav, .product-single--minimal .product-single__photo__nav i{
            font-size: 45px;}
       .types__item {
            width: 100%;
            flex-direction: row;
            align-items: center;
            margin: 0;
            padding: 8px 5px;
            border-radius: 5px;}
        .types__link--image {
            width: 50px!important;
            height: 42px!important;
            margin: 0 50px 0 0;}
        .types__link--image img {
            height: 44px;}
        .types__link--image.types__link--highlight {
            border: none; }
        .types__text {
            text-align: left;
            font-family: 'Roboto', sans-serif;
            font-weight: 500; }
        #js-product-form--4396093669438 {
            display: flex;
            flex-direction: column;}
        #sizes .faq__accordion__title-text{
            text-align: center;}
       .types__width {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            text-align: left;
            margin-left: auto;
            width: 151px;}
       .info-row {
            border-bottom: 1px solid #000000;
            padding-top: 17px;
            display: flex;
            justify-content: space-between;}
       .info-row p{
            width: 33.33%;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            text-align: center; }
       .info-row img {
            margin-top: -12px;}
       .sizes {
            margin-top: 0;}
       #sizes .faq__accordion__title {
            padding-right: 0;}
       #sizes .faq__accordion__title-text {
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;}
</style>`);

document.querySelectorAll('.types__link--highlight').forEach((el)=> {
    el.closest('.types__item ').style.border = '1px solid #000000'
});
document.head.insertAdjacentHTML('beforeend','<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">')
document.querySelector('.breadcrumb').insertAdjacentHTML('afterend',`<a href="#" class="btn-back">ALL SLIPCOVERS</a>`);
document.querySelector('.btn-back').href = document.querySelector('.breadcrumb__item:last-child a').href;
document.querySelector('.product-single__add').insertAdjacentHTML('afterend',`<div class="info-row"><p>30-day money back guarantee</p><p>Free USA shipping & retuens</p><p> <img src="https://conversionratestore.github.io/projects/mammamiacovers/img/madeinitaly.png" alt="made in italy"></p></div>`)
document.querySelector('.info-row').after(document.querySelector('#sizes'));
let arrFurniture = [
    {
        name: 'Armchair',
        width: '24’-43’ (61-110 cm) width',
    },
    {
        name: 'Loveseat',
        width: '47’-67’ (120-170 cm) width',
    },
    {
        name: 'Sofa',
        width: '69’-91’ (175-231 cm) width',
    },
    {
        name: 'Sofa 4 Seater',
        width: '92’-122’ (233-309 cm) width',
    }
]

for (let i = 0; i < document.querySelectorAll('.types__item').length; i++) {
    for (let j = 0; j < arrFurniture.length; j++) {
        if (document.querySelectorAll('.types__item .types__text')[i].innerHTML === arrFurniture[j].name) {
            document.querySelectorAll('.types__item')[i].insertAdjacentHTML('beforeend', `<span class="types__width">${arrFurniture[j].width}</span>`);
        }
    }
}
