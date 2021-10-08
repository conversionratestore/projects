document.body.insertAdjacentHTML('afterbegin',`
<style>
    .faq__accordion__title {
        padding: 0;
    }
    .swiper-button[disabled] svg{
        fill: #999999;
    }
    .sizes-types .faq__accordion__item{
        padding: 20px 0 10px;
        border-top: 1px solid #999999;
        border-bottom: 1px solid #999999;
        margin-right: -17px;
    }
    .sizes-types .faq__accordion__title-text {
        font-size: 20px;
        line-height: 27px;
        text-transform: uppercase;
        color: #212121;
        text-align: center;
        margin: 30px 0;
    }
    .sizes-types .faq__accordion__item {
        display: flex!important;  
        position: relative;
    }
    .sizes-info {
        position: sticky;
        left: 0;
        background-color: #fff;
        z-index: 2;
        margin: auto 0 0 0;
        padding: 0 20px 22px;
        width: 142px;
        flex-shrink: 0;
        list-style-type: none;
    }
    .sizes-info li {
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: #212121;
        padding: 14px 0 13px;
        border-bottom: 1px solid #C6C3C7;
    }
    .sizes-info li:last-child {
        border: none;
    }
    .sizes-types .sizes__list {
        flex-wrap: nowrap;
        padding: 0;
        overflow-x: auto;
        justify-content: inherit;
    }
    .sizes-types .sizes__item {
        margin: 0;
        padding: 10px 14px;
        flex-shrink: 0;
        border-radius: 3px;
        border: 1px solid transparent;
        transition: all 0.3s ease;
        min-width: 122px;
    }
    .sizes-types span.sizes__text:last-child{
        border: none;
    }
    .sizes-types .sizes__link--image {
        width: 100%!important;
        height: 80px!important;
        margin-bottom: 10px;
        border: none;  
    }
     .sizes-types .sizes__link--image img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 3px;
     }
    .sizes-types .sizes__text {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: #212121;
        transition: all 0.3s ease;
    }
    .sizes-types .sizes__text.wide {
        text-transform: lowercase;
    }
    .sizes-types span.sizes__text {
        min-height: 42px;
        padding: 7px 0;
        border-bottom: 1px solid #C6C3C7;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .sizes-types p.sizes__text {
        color: #999999;
        font-weight: 600;
        min-height: 38px;
        transition: all 0.3s ease;
        margin: 0;
    }
    .sizes-types .sizes__link--image:active, .sizes-types .sizes__link--image:focus, .sizes-types .sizes__link--image:hover {
        border: none!important;
    }
    .sizes-types .faq__accordion__item:before {
        content: '';
        position: absolute;
        z-index: 2;
        top: 0;
        right: 0;
        height: 100%;
        width: 91px;
        background: linear-gradient(to left, rgba(255,255,255,1) 15%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0));
        pointer-events: none;
    }
    .sizes-types .sizes__item.tns-slide-active {
        background: #F5F5F5;
        border-color: #FFAC07;
    }
    .sizes-types .sizes__item.tns-slide-active p.sizes__text {
        font-weight: 800;
        font-size: 14px;
        color: #212121;
    }
    .sizes-types .sizes__item.tns-slide-active .sizes__text {
        font-weight: bold;
    }
    .btn-view {
        font-weight: 600;
        font-size: 12px;
        line-height: 21px;
        text-transform: capitalize;
        color: #212121;
        border: 1px solid #C6C3C7;
        border-radius: 2px;
        width: 100%;
        background-color: transparent;
        margin-bottom: 10px;
        display: block;
    }
    .sizes-types .sizes__item.tns-slide-active .btn-view {
        background-color: #DA3269;
        border-color: #DA3269;
        color: #fff;
        font-weight: 800;
    }
    .sizes-types .name {
        font-size: 11px;
        line-height: 14px;
        text-align: center;
        color: #212121;
        font-weight: 400;
        transition: all 0.3s ease;
        margin-bottom: 20px;
        min-height: 28px;
    }
    .sizes-types .sizes__item.tns-slide-active .name {
        color: #007185;
        font-weight: 700;
    }
    .swiper-button {
        position: absolute;
        top: 100px;
        background: none;
        border: none;
        height: fit-content;
        z-index: 3;
    } 
    .swiper-button-prev {
        left: 122px;
    }
    .swiper-button-next {
        right: 4px;
    }
    #tns1 {
        width: 100%!important;
        padding-bottom: 10px;
    }
    .btn-close {
        position: relative;
        font-size: 12px;
        line-height: 16px;
        text-transform: capitalize;
        color: #FFFFFF;
        background-color: transparent;
        border: none;
        margin-left: auto;
        display: flex;
        align-items: center;
        padding: 0 0 6px 0;
    }
    .icon-close {
        width: 12px;
        height: 12px;
        display: block;
        margin-left: 6px;
        position: relative;
    }
    .icon-close:before, .icon-close:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        background-color: #fff;
        width: 9px;
        height: 1px;
        border: none;
    }
    .icon-close:before {
        transform: translate(-50%,-50%) rotate(45deg);
    }
    .icon-close:after {
        transform: translate(-50%,-50%) rotate(-45deg);
    }
    .popup-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background-color: rgba(0,0,0,0.6);
        z-index: 9999999999;
        display: inline-flex;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
    }
    .popup-video.active {
        opacity: 1;
        pointer-events: auto;
    }
    .popup-video_container {
        position: relative;
        margin: auto;
        width: calc(100% - 36px);
        height: auto;
        padding: 6px;
        background-color: #000;
        border-radius: 3px;
    }
    .product-description__container .product-description__item {
        padding: 0;
        background: none;
        margin-bottom: 30px;
    }
    .product-description__container li strong {
        line-height: 16px;
        color: #A8034F;
        display: flex;
        align-items: center;
        padding-left: 30px;
        background: no-repeat left center / 20px 100%;
        margin-bottom: 10px;
    }
    .product-description__container li {
        font-size: 12px;
        line-height: 18px;
        color: #212121;
    }
    .measuring-guide, .from-fit {
        border: 1px solid #999999;
        border-radius: 5px;
        width: 100%;
        padding: 20px 30px;
    }
    .measuring-guide {
        margin: 30px 0 35px;
    }
    .from-fit {
        margin-bottom: 60px;
    }
    .measuring-guide h2, .from-fit h2 {
        font-weight: 900;
        font-size: 40px;
        line-height: 47px;
        text-transform: capitalize;
        color: #212121;
        margin-bottom: 10px;
    }
    .measuring-guide p, .from-fit p {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #999999;
    }
    .measuring-guide .bottom {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .measuring-guide .bottom img {
        margin-right: 20px;
        height: 20px;
        width: 31px;
        object-fit: contain;
        flex-shrink: 0;
    }
    .measuring-guide .bottom p {
        color: #212121;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 0;
    }
    .img-free-returns {
        width: 100%;
        max-width: 335px;
        margin: 0 auto 40px;
        height: auto;
        object-fit: contain;
        display: block;
    }
    .btn-show-video {
        background: #212121;
        line-height: 40px;
        border: none;
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        color: #FFFFFF;
        text-align: center;
        margin-bottom: 40px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .btn-show-video img {
        margin-left: 10px;
    }
    .from-fit {
        border: 1px solid #999999;
        border-radius: 5px;
        width: 100%;
        padding: 20px 30px;
    }
    .measuring-guide_container {
        display: block;
        margin: 0 auto;
    }
    @media only screen and (max-width: 360px)  {
        .sizes-info {
            padding: 0 10px 20px 10px;
            width: 122px;
        }
        .swiper-button-prev {
            left: 102px;
        }
        .sizes-types .sizes__item {
            padding: 8px;
        }
    }
</style>`);

let obj = {
    'armchair': '24"-43" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_11_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/armchair.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/8.png,Fits varios armchair shapes',
    'loveseat': '47"-67" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_2_bd9c282e-bf12-49a0-8211-86a28be86a74_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/loveset.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/4.png,Fits varios loveset shapes',
    'sofa': '69"-91" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_3_72691092-7b93-4388-b830-602438650f67_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/sofa.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/6.png,Fits varios sofa shapes',
    'sofa 4 seater': '92"-122" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/4_-2_3_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/sofa-4.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/6.png,Fits varios sofa 4 seater shapes',
    'recliner': '24"-43" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/MilleRige_Reclainer_greyR_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/reclining.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/8.png,Fits varios reclining shapes',
    'reclining loveseat': '55"-83" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/2sitter-2-2_6_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/reclining-loveseat.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/4.png,Fits varios reclining loveseat shapes',
    'reclining sofa': '63"-91" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/3sitter-2-2_6_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/reclining-sofa.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/4.png,Fits varios reclining sofa shapes',
    'ottoman': '20"-32" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/Mille_Rige_ottoman_grey_2_R_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/ottoman.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/5.png,Fits varios ottomans',
    'pillow': '18"-18",https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_10_a7a3895e-265f-4ff4-bda8-128eceed6853_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/pillow.svg',
    'chaise lounge': '32”- 48” wide and 52"-70" length,https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_2_9340375e-bcb0-4659-bda5-2b73ce6392ff_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/chaise-lounge.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/8.png,Fits varios chaise lounge shapes',
    'bed': '32"-47" wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/vestiletto-2-2_3_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/bed.svg',
    'futon': '59”- 83” wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/futon.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/futon.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/4.png,Fits varios futon shapes',
    'dining chair': '15”- 20” wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/chair-2-_4_5aabd8eb-0f16-4305-b79c-14d48d09c4f6_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/dinner-chair.svg',
    'l-shaped left': '70”- 145” wide and 40"- 70",https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_2_bfea1820-43a2-4edf-9d29-dc24c0312adb_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/l-shaped-left.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/3.png,Fits varios L-shaped sofas (Left Chase)',
    'l-shaped right': '70”- 145” wide and 40"- 70",https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_3_a41277c3-58ae-407b-b0fa-13bfa927845a_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/l-shaped-left.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/7.png,Fits varios L-shaped sofas (Right Chase)',
    'corner': '135”- 208” wide,https://conversionratestore.github.io/projects/mammamiacovers/img/types/2_3_1080x-removebg-preview.png,https://conversionratestore.github.io/projects/mammamiacovers/img/measuring/corner.svg,https://conversionratestore.github.io/projects/mammamiacovers/img/form/2.png,Fits varios corner sofa shapes',
}

let linkCustom = document.createElement('link');
linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
linkCustom.rel = 'stylesheet';
document.head.appendChild(linkCustom);

let scriptCustom = document.createElement('script');
scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
scriptCustom.async = false;
document.head.appendChild(scriptCustom);

document.querySelectorAll('#sizes')[1].classList.add('sizes-types');

function tnsInitialization() {
    let sliderCategories = tns({
        container: document.querySelector('.sizes-types .sizes__list'),
        items: 1,
        autoplay: false,
        axis: 'horizontal',
        controls: true,
        loop: false,
        prevButton: document.querySelector('.swiper-button-prev'),
        nextButton: document.querySelector('.swiper-button-next'),
        autoplayButton: false,
        autoplayButtonOutput: false,
        mouseDrag: true,
        nav: false,
        preventScrollOnTouch: 'auto',
        swipeAngle: false,
    });
};

document.body.insertAdjacentHTML('beforeend',`
<div class="popup-video">
    <div class="popup-video_container">
        <button type="button" class="btn-close">Close <span class="icon-close"></span></button>
    </div>
</div>`);

document.querySelector('.popup-video_container .btn-close').after(document.querySelector('.fluid-width-video-wrapper'));

document.querySelector('.popup-video').addEventListener('click', () => {
    document.querySelector('.popup-video').classList.remove('active');
    let iframe = document.querySelector('.popup-video iframe');
    iframe.src = iframe.src;
})

document.querySelector('.popup-video_container').addEventListener('click', (e) => {
    e.stopPropagation()
})

document.querySelector('.btn-close').addEventListener('click', () => {
    document.querySelector('.popup-video').classList.remove('active');
    let iframe = document.querySelector('.popup-video iframe');
    iframe.src = iframe.src;
});

let arrIcons = ['quality.svg','ships.svg','perfect-fit.svg','pet.svg','installation.svg','washable.svg','sanitized.png'];

for (let i = 0; i < document.querySelectorAll('.product-description__container li strong').length; i++) {
    document.querySelectorAll('.product-description__container li strong')[i].setAttribute('style',`background-image: url(https://conversionratestore.github.io/projects/mammamiacovers/img/${arrIcons[i]})`)
}

document.querySelector('.product-single__content-text').insertAdjacentHTML('afterend',`
<img class="img-free-returns" src="https://conversionratestore.github.io/projects/mammamiacovers/img/free-returns.svg" alt="30 days free returns if size doesn't match">
<button type="button" class="btn-show-video">Learn how it works <img src="https://conversionratestore.github.io/projects/mammamiacovers/img/youtube.svg" width="18.2px" height="14px" alt="youtube"></button>`);
for (let key in obj) {
    if (document.querySelectorAll('.product-single__form .product-single__swatch__sub-title')[1] && document.querySelectorAll('.product-single__form .product-single__swatch__sub-title')[1].innerText.toLowerCase() == key || document.querySelectorAll('.product-single__title-text')[0].innerText.toLowerCase().split(' ')[0] == key) {
        document.querySelector('.img-free-returns').insertAdjacentHTML('beforebegin',`
            <div class="measuring-guide">
                <h2>Measuring guide</h2>
                <p class="text-measure">Simply measure back side of your ${key}</p>
                <img class="measuring-guide_container" src="${obj[key].split(',')[2]}" alt="measuring guide">
                <div class="bottom">
                    <img src="https://conversionratestore.github.io/projects/mammamiacovers/img/measure.svg" alt="icon">
                    <p>Strech form fit fabric with elasticity of 120%</p>
                </div>
            </div>`);
        if (obj[key].split(',')[3]) {
            document.querySelector('.btn-show-video').insertAdjacentHTML('afterend',`
             <div class="from-fit">
                <h2>Form Fit</h2>
                <p>${obj[key].split(',')[4]}</p>
                <img src="${obj[key].split(',')[3]}" class="from-fit_container" alt="form fit">
            </div>`);
        }
    }
}
document.querySelector('.btn-show-video').addEventListener('click', () => {
    document.querySelector('.popup-video').classList.add('active');
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP with additional info',
        'eventAction': 'Click Learn how it works'
    });
});

let mut = new MutationObserver(function (muts) {
    if (document.querySelector('.sizes-types .sizes__list') && document.querySelectorAll('.sizes-types .sizes__item img') && !document.querySelector('.swiper-button') && document.querySelectorAll('.sizes-types .sizes__item')) {
        mut.disconnect();

        document.querySelector('.sizes-types .sizes__list').insertAdjacentHTML('beforebegin',`
        <ul class="sizes-info">
            <li>Funiture type</li>
            <li>Dimensions</li>
            <li>Sanitized</li>
            <li>Pet Friendly </li>
            <li>Machine Washible</li>
        </ul>`)

        document.querySelector('.sizes-info').insertAdjacentHTML('afterend',`
            <button class="swiper-button swiper-button-prev" type="button">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.78856 1.07273L5.75893 0L0 6L5.75893 12L6.78856 10.9273L2.05925 6L6.78856 1.07273Z" fill="#212121"/>
                </svg>
            </button>
            <button class="swiper-button swiper-button-next" type="button">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-0.000470161 1.07273L1.02916 0L6.78809 6L1.02916 12L-0.000470161 10.9273L4.72883 6L-0.000470161 1.07273Z" fill="#212121"/>
                </svg>
            </button>`)

        document.querySelectorAll('.sizes-types .sizes__item').forEach((el, i) => {
            el.insertAdjacentHTML('afterbegin',`<p class="sizes__text">${el.querySelector('.sizes__text').innerText}</p>`)
            el.querySelector('.sizes__link--image img').setAttribute('class','');
            el.querySelector('.sizes__link--image').insertAdjacentHTML('afterend',`
                <a href="${el.querySelector('.sizes__link--image').getAttribute('href')}" class="btn-view">View</a>
                <p class="name">${el.querySelector('.sizes__link--image').getAttribute('title').split(',')[0]}</p>`)
            if (el.querySelector('.sizes__link--image').getAttribute('title').includes('(')) {
                el.querySelector('.name').innerHTML = el.querySelector('.sizes__link--image').getAttribute('title').split('(')[0];
            }
            el.insertAdjacentHTML('beforeend',`
                <span class="sizes__text wide"></span>
                <span class="sizes__text"><img src="https://conversionratestore.github.io/projects/mammamiacovers/img/check.svg" alt="icon"></span>
                <span class="sizes__text"><img src="https://conversionratestore.github.io/projects/mammamiacovers/img/check.svg" alt="icon"></span>
                <span class="sizes__text"><img src="https://conversionratestore.github.io/projects/mammamiacovers/img/check.svg" alt="icon"></span>`)

            for (let key in obj) {
                if (el.querySelector('.sizes__text').innerText.toLowerCase() == key) {
                    el.querySelector('.wide').innerHTML = obj[key].split(',')[0]
                    el.querySelector('.sizes__link--image img').setAttribute('srcset',obj[key].split(',')[1])
                }
            }
            if (i == (document.querySelectorAll('.sizes-types .sizes__item').length - 1)) {
                tnsInitialization()
            }
        })

        document.querySelectorAll('.swiper-button').forEach( el => {
            el.addEventListener('click', () => {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp: PDP with additional info',
                    'eventAction': 'Click carousel arrows'
                });
                for (let key in obj) {
                    document.querySelectorAll('.sizes-types .sizes__item').forEach((item) => {
                        if (item.querySelector('.sizes__text').innerText.toLowerCase() == key) {
                            item.querySelector('.wide').innerHTML = obj[key].split(',')[0]
                            item.querySelector('.sizes__link--image img').setAttribute('srcset', obj[key].split(',')[1])
                        }
                    })
                }
            })
        })
    }
    mut.observe(document, {
        childList: true,
        subtree: true
    });
})
mut.observe(document, {
    childList: true,
    subtree: true
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2425703,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('trigger', 'PDP_with_add_info');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: PDP with additional info',
    'eventAction': 'loaded'
});
