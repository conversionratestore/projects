document.body.insertAdjacentHTML('afterbegin',`
<style>
    .breadcrumb  {
        display: none;}
    .btn-back {
        background: url("https://conversionratestore.github.io/projects/mammamiacovers/img/arrow-left.svg") no-repeat left 10px center / auto 15px;
        padding: 0 14px 0 32px;
        font-size: 14px;
        line-height: 29px;
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
            border-radius: 5px;
            cursor: pointer}
        .types__link--image {
            width: 50px!important;
            height: 42px!important;
            margin: 0 10px 0 0;}
        .types__link--image img {
            height: 44px;}
        .types__link--image.types__link--highlight {
            border: none; }
        .types__text {
            text-align: left;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;}
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
            width: 40%;
            flex-shrink: 0;
            }
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
       .types__link--image:active, .types__link--image:focus, .types__link--image:hover {
            border: none;
       }
</style>`);

document.querySelectorAll('.types__link--highlight').forEach((el)=> {
    el.closest('.types__item ').style.border = '1px solid #000000'
});
document.head.insertAdjacentHTML('beforeend','<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet">')
document.querySelector('.breadcrumb').insertAdjacentHTML('afterend',`<a href="#" class="btn-back">ALL SLIPCOVERS</a>`);
document.querySelector('.btn-back').href = document.querySelector('.breadcrumb__item:last-child a').href;
document.querySelector('.product-single__add').insertAdjacentHTML('afterend',`<div class="info-row"><p>30-day money back guarantee</p><p>Free USA shipping & returns</p><p> <img src="https://conversionratestore.github.io/projects/mammamiacovers/img/madeinitaly.png" alt="made in italy"></p></div>`)
document.querySelector('.info-row').after(document.querySelector('#sizes'));

document.querySelector('.btn-back').addEventListener('click', function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP improvements',
        'eventAction': 'Click on All sleepcovers'
    });
})
let arrFurniture = [
    {
        name: 'Armchair',
        width: '24”-43” (61-110 cm) width',
    },
    {
        name: 'Loveseat',
        width: '47”-67” (120-170 cm) width',
    },
    {
        name: 'Sofa',
        width: '69”-91” (175-231 cm) width',
    },
    {
        name: 'Sofa 4 Seater',
        width: '92”-122” (233-309 cm) width',
    },
    {
        name: 'Corner',
        width: '135”-208” (343-528 cm) width',
    },
    {
        name: 'L-Shaped Right',
        width: '70”-145” (178-368 cm) width',
    },
    {
        name: 'L-Shaped Left',
        width: '70”-145” (178-368 cm) width',
    },
    {
        name: 'Dining Chair',
        width: '15”-20” (38-51 cm) width',
    },
    {
        name: 'Recliner',
        width: '24”-43” (61-109 cm) width',
    },
    {
        name: 'Reclining Loveseat',
        width: '55”-83” (140-211 cm) width',
    },
    {
        name: 'Reclining Sofa',
        width: '63”-91” (160-231 cm) width',
    },
    {
        name: 'Pillow',
        width: '18” (46 cm) width',
    },
    {
        name: 'Chaise Lounge',
        width: '32”-48” (81-122 cm) width',
    },
    {
        name: 'Futon',
        width: '59”-83” (150-211 cm) width',
    },
]

for (let i = 0; i < document.querySelectorAll('.types__item').length; i++) {
    for (let j = 0; j < arrFurniture.length; j++) {
        if (document.querySelectorAll('.types__item .types__text')[i].innerHTML === arrFurniture[j].name) {
            document.querySelectorAll('.types__item')[i].insertAdjacentHTML('beforeend', `<span class="types__width">${arrFurniture[j].width}</span>`);
        }
    }
}

document.querySelectorAll('.types__item').forEach((item) => {
    item.addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: PDP improvements',
            'eventAction': 'Click on additional item with size'
        });
        item.querySelector('a').click()
    })
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2425703,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'pdp_improvements');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: PDP improvements',
    'eventAction': 'loaded'
});
