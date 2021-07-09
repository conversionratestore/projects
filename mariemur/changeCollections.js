document.head.insertAdjacentHTML(
    'beforeend',
    `
            <style>
                .header-top .header-favorite svg{
                    fill: #fff;
                    vertical-align: middle;
                }
                .header-light .header-top .header-favorite svg{
                    fill: #000;                    
                }
                .header-search {
                    margin-right: auto;
                }
                .catalog-list {
                    grid-row-gap: 15px;
                }
                .catalog-box__head {
                    display: none;
                }
                .catalog-box__head--custom {
                    position: relative;
                    height: fit-content;
                }
                .catalog-box__body {
                    margin: 12px;
                    padding: 0;
                    justify-content: flex-start;
                }
                .view-list .catalog-box .catalog-box__head--custom {
                    width: 40%;
                }
                .view-list .catalog-box .catalog-box__body {
                    width: 60%;
                    margin: 0 12px;
                }
                .catalog-list.view-list .catalog-box__title {
                    font-size: 24px;
                    letter-spacing: 2px;
                }
                .catalog-list.view-list .catalog-box__title a{
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                }
                
                .favorite-box {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 48px;
                    width: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.7);
                    cursor: pointer;
                }
                .favorite-box .heart {
                    fill: transparent;
                    transition: fill .4s ease;
                }
                .favorite-box .heart.heart--active{
                    fill: #FFFFFF;
                }
                .favorite-box--heart {
                    display: none;
                }
                .view-grid  .favorite-box {
                    height: 34px;
                    width: 34px;
                }
                .view-grid  .favorite-box .heart{
                    height: 50%;
                }
                .view-grid .similar-box {
                    height: 34px;
                }
                .view-list .favorite-box--heart {
                    display: block;
                    stroke: #000;
                }
                .view-list .favorite-box--heart .heart.heart--active{
                    fill: #A60B00;
                }
                .view-list .favorite-box--heart .heart.heart--active {
                    stroke: #000;
                }
                .view-list .favorite-box--heart .heart.heart--active {
                    stroke: #A60B00;
                }
                .similar-box {
                    position: absolute;                    
                    display: flex;
                    top: 0;
                    right: 0;
                    height: 48px;
                    width: 116px;
                    align-items: center;
                    justify-content: center;
                    background: rgba(0, 0, 0, 0.7);
                    cursor: pointer;
                }
                .similar-box img {
                    width: 16px;
                    height: 16px;
                    margin-right: 5px;
                }
                .similar-box p{
                    color: #FFFFFF;
                    font-size: 10px;
                    letter-spacing: 0.01em;
                    text-transform: uppercase;
                }            
                .rate-box {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    height: 52px;
                    width: 116px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #FFFFFF;
                    background: rgba(0, 0, 0, 0.7);
                    line-height: 12px;
                }
                /*.view-grid .similar-box, .view-grid .rate-box {*/
                /*    right: 10px;*/
                /*}*/
                /*.view-grid .rate-box {*/
                /*    width: 106px;*/
                /*}*/
                .view-list .rate-box {
                    display: flex;
                    gap: 5px;
                    color: #000;
                    margin-bottom: 20px;
                }
                .rate-box .number{
                    font-size: 14px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .rate-box .stars{
                    display: flex;
                    align-items: center;
                }
                .rate-box .stars svg {
                    fill: #fff;
                }
                .rate-box .stars .votes{
                    font-weight: 300;
                    font-size: 10px;
                }
                .rate-box .no-reviews {
                    color: #FFFFFF;
                    font-size: 10px;
                    letter-spacing: 0.01em;
                    text-transform: uppercase;
                }
                .view-list .favorite-box{
                    display: none;
                }
                .view-list .catalog-box__head--custom .rate-box, .view-single .catalog-box__body .rate-box, .view-grid .catalog-box__body .rate-box {
                    display: none;
                }
                .view-list .catalog-box__body .rate-box {
                    position: relative;                
                    height: auto;
                    width: auto;
                    flex-direction: row;
                    justify-content: start;
                    background-color: transparent;
                    color: #000;                
                }
                .view-list .catalog-box__body .rate-box .stars svg {
                    fill: #A60B00;
                }
                .catalog-panel.catalog-panel--fixed {
                    position: fixed;
                    width: 100%;
                    padding: 12px;
                    top: 60px;
                    left: 0;
                    background-color: #F5F5F5;
                }
                .tns-nav {
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    /*left: 10px;*/
                    bottom: 0;
                    width: 100%;
                    z-index: 1;
                    /*text-align: left;*/
                    text-align: center;
                }
                .view-single .tns-nav {
                    width: 69%;
                    padding: 8px;
                    height: 52px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .tns-nav button{
                    width: 20%;
                    height: 1px;
                    padding: 0;
                    margin: 0px 4px;
                    background: #FFFFFF;
                    opacity: 0.5;
                    border: none;
                }
                .tns-nav  button.tns-nav-active{
                    width: 25%;
                    opacity: 1;
                }
                /*.tns-nav  button.tns-nav-active{*/
                /*    width: 57px;*/
                /*}*/
                /*.view-grid .tns-nav  button.tns-nav-active{*/
                /*    width: 10%;*/
                /*}*/
                /*.view-grid .tns-nav button{*/
                /*    width: 5%;*/
                /*}*/
                .view-grid .tns-nav {
                    bottom: 72px;
                }
                /*.view-list .tns-nav  button.tns-nav-active{*/
                /*    width: 16px;*/
                /*}*/
                /*.view-list .tns-nav button{*/
                /*    width: 6px;*/
                /*}*/
                .view-list .tns-nav {
                    bottom: 20px;
                }
                .view-single .catalog-box .tns-item img{
                    height: 475px;
                }
                .view-list .tns-item img{
                    height: 399px;
                }
                .tns-item img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
                .view-list .slider-popup, .view-grid .slider-popup {
                    display: none !important;
                }
                .slider-popup {
                    position: absolute;
                    display: none;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(0,0,0,0.5);
                    z-index: 1;
                }
                .slider-popup__inner {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                .slider-popup__inner a {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 256px;
                    margin: 15px 50px;
                    padding: 15px 20px;
                    font-weight: 700;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                    background: #000000;
                    border: 1px solid #FFFFFF;
                    text-align: left;
                }
                .slider-popup__inner a img{
                    margin-left: auto;
                }
                .collection-name {
                    margin-left: .3em;
                    display: inline-block;
                }
                .slider-popup.slider-popup--active {
                    display: block;
                }
                .view-single .catalog-box__title {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    gap: 20px;
                }
                .catalog-box__title a {
                    padding: 0;
                }
                .catalog-box__title a .icon {
                     display: none;
                }
                .view-list .catalog-box__title a.catalog-box__shop-now,
                .view-grid .catalog-box__title a.catalog-box__shop-now{
                    display: none;
                }
                .view-list .rate-box .no-reviews {
                    display: none;
                }                
                .view-single .catalog-box__title .catalog-box__shop-now {
                    display: block;
                    width: 104px;
                    padding: 15px;
                    background: #000000;
                    font-weight: 700;
                    font-size: 12px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    text-align: center;
                    color: #FFFFFF;
                    flex-shrink: 0;
                }
                .catalog-list.view-list .catalog-box__price {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .catalog-list.view-list .catalog-box__price .price {
                    font-size: 20px;
                    font-weight: 400;
                    letter-spacing: 0.2px;
                }
                .catalog-list.view-list .catalog-box__text {
                    font-size: 14px;
                }
                .catalog-box__text p{
                    display: -webkit-box;
                    -webkit-line-clamp: 7;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .see-more {
                    color: #000;
                    text-decoration: underline;
                    cursor: pointer;
                }
                .popular-categories {
                    margin: 20px 0 40px 12px;
                }
                .view-grid .popular-categories,
                .view-grid .influencers,
                .view-grid .rvp-container
                 {
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
                .catalog-content .rvp-container {
                    display: flex;
                }
                .title {
                    margin-bottom: 20px;
                    font-family: 'Gallery Modern',sans-serif;
                    font-size: 26px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
                .popular-categories__item a{
                    position: relative;
                }
                .popular-categories__item-sale {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-weight: 700;
                    font-size: 12px;
                    letter-spacing: 0.7px;
                    text-transform: uppercase;
                    color: #A60B00;
                }
                .popular-categories .tns-item img{
                    height: 200px;
                    width: 200px;
                    border-radius: 50%;
                }
                .popular-categories .tns-item p{
                    margin-left: -45px;
                    font-size: 16px;
                    text-align: center;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    margin-top: 15px;
                    color: #000;
                }
                .influencers {
                    margin: 20px 12px 30px 12px;
                }
                 .influencers__item a{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 15px;
                }
                .influencers__item img {
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                }
                .influencers__item {
                    margin-bottom: 15px;
                }
                .influencers__item img.instagram {
                    border-radius: 0;
                }
                .influencers__item .first-div {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .rvp-section-wrap {
                    margin: 20px 12px 30px 12px;
                }
                .rvp-title-wrap .title {
                    margin-bottom: 20px;
                    font-family: 'Gallery Modern',sans-serif;
                    font-size: 26px;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-align: left;
                }
                .splide-rvpCustom .rvp-product-box {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 0;
                    margin-bottom: 15px !important;
                    gap: 10px;
                    flex-shrink: 0;   
                }
                .splide__slide .rvp-image-wrap img {
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                    object-fit: cover;                                  
                }
                a.rvp-product-title {
                    font-size: 12px;
                    line-height: 14px;                    
                    letter-spacing: 0.5px;
                    text-transform: uppercase;                    
                    color: #000000;
                    text-align: left;
                }
                .rvp-buynow, p.rvp-product-price {
                    display: none;
                }
                .item-icons {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-left: auto;
                    flex-shrink: 0;
                }
                .item-icons .heart {
                    stroke: #000;
                }
                .item-icons .heart.heart--active {
                    stroke: #A60B00;
                    fill: #A60B00;
                }
                .influencers__item .first-div > *:last-child {
                    margin-left: auto;
                    border-radius: 0;
                }
                .influencers__item .first-div .nickname{
                    margin-bottom: 5px;
                    font-size: 12px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    color: #000000;
                }
                .influencers__item .first-div .followers{
                    font-size: 10px;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    color: #5E5E5E;
                }
                .catalog-list.view-list .catalog-box__button {
                    margin-top: auto;
                }
                .catalog-box__button a{
                    width: 100%;
                }
                
                /*.influencers {*/
                /*    background: rgba(245, 245, 245, 0.8);*/
                /*}*/
            </style>
        `,
);

// heart icon in haeder
document.querySelector('.header-right').insertAdjacentHTML('afterbegin', `
<div class="header-favorite">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 15.1099C7.77222 15.1099 7.55261 15.0273 7.38147 14.8774C6.73511 14.3123 6.11194 13.7811 5.56213 13.3126L5.55933 13.3102C3.94739 11.9365 2.55542 10.7502 1.58691 9.58167C0.504272 8.27527 0 7.03662 0 5.68347C0 4.36877 0.450806 3.15588 1.26929 2.26807C2.09753 1.36975 3.23401 0.875 4.46973 0.875C5.39331 0.875 6.23914 1.16699 6.98364 1.7428C7.35938 2.03345 7.69995 2.38916 8 2.80408C8.30017 2.38916 8.64062 2.03345 9.01648 1.7428C9.76099 1.16699 10.6068 0.875 11.5304 0.875C12.766 0.875 13.9026 1.36975 14.7308 2.26807C15.5493 3.15588 16 4.36877 16 5.68347C16 7.03662 15.4958 8.27527 14.4132 9.58154C13.4447 10.7502 12.0529 11.9364 10.4412 13.3099C9.89038 13.7792 9.26624 14.3112 8.61841 14.8777C8.44739 15.0273 8.22766 15.1099 8 15.1099ZM4.46973 1.81226C3.4989 1.81226 2.60706 2.19971 1.95825 2.90332C1.2998 3.61755 0.937134 4.60486 0.937134 5.68347C0.937134 6.82153 1.36011 7.83936 2.30847 8.98364C3.2251 10.0897 4.5885 11.2516 6.16711 12.5969L6.17004 12.5994C6.72192 13.0697 7.34753 13.6029 7.99866 14.1722C8.65369 13.6018 9.28027 13.0677 9.83325 12.5967C11.4117 11.2513 12.775 10.0897 13.6917 8.98364C14.6399 7.83936 15.0629 6.82153 15.0629 5.68347C15.0629 4.60486 14.7002 3.61755 14.0417 2.90332C13.3931 2.19971 12.5011 1.81226 11.5304 1.81226C10.8192 1.81226 10.1663 2.03833 9.58972 2.48413C9.07593 2.88159 8.71802 3.38403 8.50818 3.7356C8.40027 3.91638 8.21033 4.02429 8 4.02429C7.78967 4.02429 7.59973 3.91638 7.49182 3.7356C7.2821 3.38403 6.92419 2.88159 6.41028 2.48413C5.83374 2.03833 5.18079 1.81226 4.46973 1.81226Z" />
    </svg>
</div>
`)

document.querySelector('.header-right').insertAdjacentElement('beforebegin',
    document.querySelector('.header-search')
)

document.querySelector('.header-favorite svg').addEventListener('click', function () {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp PL improved',
        'eventAction': 'Click on Favorites'
    });
})

// fixed menu
const offsetFilter = document.querySelector('.catalog-panel').offsetTop;


window.addEventListener('scroll', () => {
    if ((offsetFilter - window.pageYOffset) <= 0) {
        if (!document.querySelector('.empty-space')) {
            document.querySelector('.catalog-title').insertAdjacentHTML('afterend', `<div class="empty-space" style="height: 48px"></div>`)
        }

        document.querySelector('.catalog-panel').classList.add('catalog-panel--fixed')
    } else {
        document.querySelector('.empty-space')?.remove()
        document.querySelector('.catalog-panel').classList.remove('catalog-panel--fixed')
    }
})

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

/*
    render slider in HTML
*/

let counter = 0;
let titlesInterval = setInterval(function () {

    let t = document.querySelector('.catalog-box:not([data-index]) .catalog-box__title a')

    if (t) {
        let title = t.getAttribute('href').split('/products/')[1]
        document.querySelector('.catalog-box:not([data-index])').setAttribute('data-index', counter)

        drawSlider(counter, title)

        counter++;
    }
}, 200)

async function drawSlider(count, title) {
    let response = await fetch(`/products/${title}.js`);
    let data = await response.json();
    let slider;

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
        'productIds': [
            {
                'productId': data.id
            }
        ],
        'apiKey': 'pubkey-BB15V7N07pS0LxabX7B6i76608MMmj',
        'storeUrl': 'mariemur.com'
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let objReview = await fetch('http://stamped.io/api/widget/badges?isIncludeBreakdown=true&isincludehtml=true', requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

    data.images.forEach(image => {
        slider += `
                <div>
                    <a href="https://mariemur.com/collections/insta-queen/products/${title}">
                        <img src="${image}" alt="product image">
                    </a>
                </div>`
    })

    /* link to the collection */

    let productTitle = document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__title a`).text.toLowerCase()

    let collectionTitle;
    let collectionLink = 'https://mariemur.com/collections/';

    let isEmptyField = false;
    let collectionUrl = window.location.href.split('/collections/')[1];

    if (collectionUrl !== 'lingerie'
        && collectionUrl !== 'fullbody-harnesses'
        && collectionUrl !== 'classic-harnesses'
        && collectionUrl !== 'womens-bra'
        && collectionUrl !== 'legs-garters'
        && collectionUrl !== 'womens-lingerie-panties'
        && collectionUrl !== 'womens-lingerie-bodysuit'
        && collectionUrl !== 'accessories'
    ) {
        switch (true) {
            case (productTitle.includes('lingerie set')):
                collectionTitle = 'Lingerie sets'
                collectionLink += 'lingerie'
                break;
            case (productTitle.includes('fullbody set')):
                collectionTitle = 'Fullbody sets'
                collectionLink += 'fullbody-harnesses'
                break;
            case (productTitle.includes('leather bra')):
                collectionTitle = 'Leather bra'
                collectionLink += 'classic-harnesses'
                break;
            case (productTitle.includes('bra')):
                collectionTitle = 'Bra'
                collectionLink += 'womens-bra'
                break;
            case (productTitle.includes('garters')):
                collectionTitle = 'Legs garters'
                collectionLink += 'legs-garters'
                break;
            case (productTitle.includes('panties')):
                collectionTitle = 'Panties'
                collectionLink += 'womens-lingerie-panties'
                break;
            case (productTitle.includes('bodysuit')):
                collectionTitle = 'Bodysuits'
                collectionLink += 'womens-lingerie-bodysuit'
                break;
            case (productTitle.includes('choker') || productTitle.includes('cuffs') || productTitle.includes('belts')):
                collectionTitle = 'Accessories'
                collectionLink += 'accessories'
                break;
            default:
                isEmptyField = true
                break;
        }
    } else {
        isEmptyField = true
    }

    // product types array for show similar logic
    const types = {
        lingerieset: ['rose-bodysuit', 'valentine-bodysuit'],
        bra: ['bryony-bra', 'rose-bra'],
        panties: ['rosemary-thong', 'jade-panties'],
        bodysuit: ['scarlett-bodysuit-in-black', 'grace-bodysuit-red'],
        fullbody: ['poppy-bra-garters-set', 'kara-leather-fullbody-set-in-pink-by-ave'],
        harness: ['poppy-leather-bra-in-pink', 'milena-leather-bra-harness'],
        garter: ['adore-leather-legs-garters-cuffs-in-blue', 'milena-red-leather-set'],
        choker: ['leather-choker-with-leash-kayla', 'leather-choker-alexia'],
        cuffs: ['puppy-cuffs', 'handcuffs-morgan'],
        mask: ['leather-mask-kitty'],
        accessories: ['leather-choker-with-handcuffs-darcy', 'era-collar-cuffs-set-by-ave'],
        trinket: ['bunny-trinket-in-black', 'mouse-trinket-in-pink'],
        belt: ['linda-leather-basque-red-belt', 'linda-leather-basque-belt-in-black']
    }

    let rateBlock = '';
    let lastStar = '';

    if (objReview[0].rating.toFixed(1) >= 5) {
        lastStar = `<svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33335 3.07984L4.93669 2.87317L4.00002 0.666504L3.06335 2.8765L0.666687 3.07984L2.48669 4.6565L1.94002 6.99984L4.00002 5.7565L6.06002 6.99984L5.51669 4.6565L7.33335 3.07984ZM4.00002 5.13317V2.03317L4.57002 3.37984L6.03002 3.5065L4.92335 4.4665L5.25669 5.89317L4.00002 5.13317Z"/>
                        </svg> `
    } else if (objReview[0].rating.toFixed(1) < 5) {
        lastStar = `<svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33335 3.07984L4.93669 2.87317L4.00002 0.666504L3.06335 2.8765L0.666687 3.07984L2.48669 4.6565L1.94002 6.99984L4.00002 5.7565L6.06002 6.99984L5.51669 4.6565L7.33335 3.07984ZM4.00002 5.13317V2.03317L4.57002 3.37984L6.03002 3.5065L4.92335 4.4665L5.25669 5.89317L4.00002 5.13317Z"/>
        </svg>`
    } else {
        lastStar = `
        <?xml version="1.0" encoding="iso-8859-1"?>
            <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                \t viewBox="0 0 487.222 487.222"  xml:space="preserve">
                <g>
                <path d="M486.554,186.811c-1.6-4.9-5.8-8.4-10.9-9.2l-152-21.6l-68.4-137.5c-2.3-4.6-7-7.5-12.1-7.5l0,0c-5.1,0-9.8,2.9-12.1,7.6
                \t\tl-67.5,137.9l-152,22.6c-5.1,0.8-9.3,4.3-10.9,9.2s-0.2,10.3,3.5,13.8l110.3,106.9l-25.5,151.4c-0.9,5.1,1.2,10.2,5.4,13.2
                \t\tc2.3,1.7,5.1,2.6,7.9,2.6c2.2,0,4.3-0.5,6.3-1.6l135.7-71.9l136.1,71.1c2,1,4.1,1.5,6.2,1.5l0,0c7.4,0,13.5-6.1,13.5-13.5
                \t\tc0-1.1-0.1-2.1-0.4-3.1l-26.3-150.5l109.6-107.5C486.854,197.111,488.154,191.711,486.554,186.811z M349.554,293.911
                \t\tc-3.2,3.1-4.6,7.6-3.8,12l22.9,131.3l-118.2-61.7c-3.9-2.1-8.6-2-12.6,0l-117.8,62.4l22.1-131.5c0.7-4.4-0.7-8.8-3.9-11.9
                \t\tl-95.6-92.8l131.9-19.6c4.4-0.7,8.2-3.4,10.1-7.4l58.6-119.7l59.4,119.4c2,4,5.8,6.7,10.2,7.4l132,18.8L349.554,293.911z"/>
                </g>
            </svg>
        `
    }

    if (objReview[0].rating !== 0) {
        rateBlock = `
            <div class="rate-box">
                    <p class="number">${objReview[0].rating.toFixed(1)}</p>
                    <div class="stars">
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.00002 5.7565L6.06002 6.99984L5.51335 4.6565L7.33335 3.07984L4.93669 2.8765L4.00002 0.666504L3.06335 2.8765L0.666687 3.07984L2.48669 4.6565L1.94002 6.99984L4.00002 5.7565Z"/>
                        </svg>
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.00002 5.7565L6.06002 6.99984L5.51335 4.6565L7.33335 3.07984L4.93669 2.8765L4.00002 0.666504L3.06335 2.8765L0.666687 3.07984L2.48669 4.6565L1.94002 6.99984L4.00002 5.7565Z"/>
                        </svg>
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.00002 5.7565L6.06002 6.99984L5.51335 4.6565L7.33335 3.07984L4.93669 2.8765L4.00002 0.666504L3.06335 2.8765L0.666687 3.07984L2.48669 4.6565L1.94002 6.99984L4.00002 5.7565Z"/>
                        </svg>
                        <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.00002 5.7565L6.06002 6.99984L5.51335 4.6565L7.33335 3.07984L4.93669 2.8765L4.00002 0.666504L3.06335 2.8765L0.666687 3.07984L2.48669 4.6565L1.94002 6.99984L4.00002 5.7565Z"/>
                        </svg>
                        ${lastStar}          
                        <span class="votes">(   ${objReview[0].count})</span>
                    </div>
                </div>
            `
    } else {
        rateBlock = `<div class="rate-box">
            <p class="no-reviews">No reviews</p>
        </div>`
    }

    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__body`).insertAdjacentHTML(
        `beforeBegin`,
        `
            <div class="catalog-box__head--custom">
                <div class="catalog-box__head-slider">
                     ${slider}
                     </div>
                <div class="favorite-box">
                    <svg class="heart" width="24" height="21" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4198 1.68959L15.7552 1.35141L15.4198 1.68959L15.4828 1.75202C17.0798 3.33586 17.0798 5.95151 15.4828 7.53535L14.9792 8.03484L8.72087 14.2415L2.46258 8.03484L1.95894 7.53535C0.361914 5.95151 0.361914 3.33586 1.95894 1.75202L2.02189 1.68959C3.62121 0.10347 6.26582 0.10347 7.86514 1.68959L8.36879 2.18908L8.72087 2.53826L9.07296 2.18908L9.5766 1.68959C11.1759 0.10347 13.8205 0.10347 15.4198 1.68959Z" stroke="#FFFFFF"/>
                    </svg>
                </div>
                ${types[data.type] ? `
                    <div class="similar-box">
                        <img src="https://conversionratestore.github.io/projects/mariemur/images/union.svg" alt="similar">
                        <p>Show similar</p>
                    </div>
                ` : ''}
                
                ${rateBlock}
                <div class="slider-popup">
                    <div class="slider-popup__inner">
                            <a class="slider-popup__inner-item" href="https://mariemur.com/collections/insta-queen/products/${title}">
                                <span class="item-name">${data.title}</span>
                                <img src="https://conversionratestore.github.io/projects/mariemur/images/arrow-right.svg" alt="arrow right">
                            </a>
                            ${
            isEmptyField
                ? ''
                : `
                                        <a class="slider-popup__inner-collection" href="${collectionLink}">
                                            See all <span class="collection-name"> ${collectionTitle}</span>
                                            <img src="https://conversionratestore.github.io/projects/mariemur/images/arrow-right.svg" alt="arrow right">  
                                        </a>
                                    `
        }                                             
                    </div>
            </div>
            `)

    // product slider
    let sliderProductImg = tns({
        container: document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__head-slider`),
        items: 1,
        autoplay: false,
        controls: false,
        loop: false,
        autoplayButton: false,
        autoplayButtonOutput: false,
    });

    // show popup on last slider
    sliderProductImg.events.on('transitionEnd', function () {
        if (
            document
                .querySelector(`.view-single .catalog-box[data-index="${count}"] .tns-item:last-child`)
                ?.classList.contains('tns-slide-active')
        ) {
            setTimeout(() => {
                if (
                    document.querySelector(
                        `.view-single .catalog-box[data-index="${count}"] .slider-popup`,
                    )
                ) {
                    document.querySelector(
                        `.view-single .catalog-box[data-index="${count}"] .slider-popup`,
                    ).classList.add('slider-popup--active');
                }
            }, 2000);
        }
    })

    document.querySelectorAll('.slider-popup').forEach(popup => {
        popup.addEventListener('touchmove', function () {
            this.classList.remove('slider-popup--active');
        }, {passive: true})
    })

    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__price`).insertAdjacentHTML(
        'beforeend',
        `
                <div class="favorite-box--heart">
                    <svg class="heart" width="32" height="29" viewBox="0 0 18 15" fill='none' xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.4198 1.68959L15.7552 1.35141L15.4198 1.68959L15.4828 1.75202C17.0798 3.33586 17.0798 5.95151 15.4828 7.53535L14.9792 8.03484L8.72087 14.2415L2.46258 8.03484L1.95894 7.53535C0.361914 5.95151 0.361914 3.33586 1.95894 1.75202L2.02189 1.68959C3.62121 0.10347 6.26582 0.10347 7.86514 1.68959L8.36879 2.18908L8.72087 2.53826L9.07296 2.18908L9.5766 1.68959C11.1759 0.10347 13.8205 0.10347 15.4198 1.68959Z" />
                    </svg>
                </div>
            `,
    );

    document.querySelector(`.catalog-box[data-index="${count}"] .favorite-box`).addEventListener('click', function () {
        this.querySelector('.heart').classList.toggle('heart--active')
        document.querySelector(`.catalog-box[data-index="${count}"] .favorite-box--heart .heart`).classList.toggle('heart--active')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp PL improved',
            'eventAction': 'Click on Favorites'
        });
    })

    document.querySelector(`.catalog-box[data-index="${count}"] .favorite-box--heart .heart`).addEventListener('click', function () {
        this.classList.toggle('heart--active')
        document.querySelector(`.catalog-box[data-index="${count}"] .favorite-box .heart`).classList.toggle('heart--active')

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp PL improved',
            'eventAction': 'Click on Favorites'
        });
    })


    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__title a`).innerHTML = data.title

    // add shop now button
    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__title`).insertAdjacentHTML(
        'beforeend',
        `<a href="https://mariemur.com/collections/insta-queen/products/${title}" class="catalog-box__shop-now">Shop now</a>`,
    );

    // shop now tracking script
    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__title`).addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp PL improved',
            'eventAction': 'Shop now clicked'
        });
    })

    document
        .querySelector(`.catalog-box[data-index="${count}"] .catalog-box__title`)
        .insertAdjacentHTML(
            'afterend',
            rateBlock
        );

    // add See More
    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__text p`).insertAdjacentHTML(
        'afterend',
        `
                <span class="see-more">See more</span>
            `,
    );

    document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__text .see-more`).addEventListener('click', function () {
        this.style.display = 'none';
        document.querySelector(`.catalog-box[data-index="${count}"] .catalog-box__text p`).style.display = 'block';
    });

    // add tracking scripts
    document.querySelector(`.catalog-box[data-index="${count}"] .slider-popup__inner-item`).addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp PL improved',
            'eventAction': `Click on ${this.querySelector('.item-name').innerHTML}`
        });
    })

    document.querySelector(`.catalog-box[data-index="${count}"] .slider-popup__inner-collection`)?.addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp PL improved',
            'eventAction': `Click on See All ${this.querySelector('.collection-name').innerHTML}`
        });
    })

    if (collectionUrl === 'lingerie'
        || collectionUrl === 'fullbody-harnesses'
        || collectionUrl === 'classic-harnesses'
        || collectionUrl === 'womens-bra'
        || collectionUrl === 'legs-garters'
        || collectionUrl === 'womens-lingerie-panties'
        || collectionUrl === 'womens-lingerie-bodysuit'
        || collectionUrl === 'accessories'
    ) {
        document.querySelector(`.catalog-box[data-index="${count}"] .similar-box`).style.display = 'none'
    }

    // show similar and tracking script logics
    document.querySelector(`.catalog-box[data-index="${count}"] .similar-box`)?.addEventListener('click', function () {
        let count = this.closest('.catalog-box').getAttribute('data-index')

        this.closest('.catalog-box').querySelector('.catalog-box__shop-now').remove()
        this.closest('.catalog-box').querySelector('.catalog-box__head--custom').remove()
        document.querySelector(`.catalog-box[data-index="${count}"] .rate-box`).remove()
        document.querySelector(`.catalog-box[data-index="${count}"] .favorite-box--heart`).remove()
        document.querySelector(`.catalog-box[data-index="${count}"] .see-more`).remove()

        if (types[data.type][0] !== data.handle) {
            drawSlider(count, types[data.type][0])
        } else {
            drawSlider(count, types[data.type][1])
        }

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp PL improved',
            'eventAction': 'Click on Show similar'
        });

        let checkDiv = setInterval(() => {
            if (document.querySelector(`.catalog-box[data-index="${count}"] .similar-box`)) {
                clearInterval(checkDiv)
                document.querySelector(`.catalog-box[data-index="${count}"] .similar-box`).remove()
            }
        }, 100)
    })
};

/*
    add most popular categories block
*/
document.querySelectorAll('.catalog-box')[1].insertAdjacentHTML(
    'afterend',
    `
            <div class="popular-categories">
                <p class="title">most popular <br /> categories</p>
                <div class="popular-categories__slider">
                   <div class="popular-categories__item"><a href="https://mariemur.com/collections/baed"><img src="https://conversionratestore.github.io/projects/mariemur/images/category1.png" alt="category"><p>Play costumes</p><span class="popular-categories__item-sale">Sale</span></a></div>
                   <div class="popular-categories__item"><a href="https://mariemur.com/collections/lingerie"><img src="https://conversionratestore.github.io/projects/mariemur/images/category2.jpg" alt="category"><p>Lingerie</p></a></div>
                   <div class="popular-categories__item"><a href="https://mariemur.com/collections/fullbody-harnesses"><img src="https://conversionratestore.github.io/projects/mariemur/images/leather.jpg" alt="category"><p>Leather</p></a></div>
                   <div class="popular-categories__item"><a href="https://mariemur.com/collections/ave"><img src="https://conversionratestore.github.io/projects/mariemur/images/ave.jpg" alt="category"><p>AVE</p></a></div>
                   <div class="popular-categories__item"><a href="https://mariemur.com/collections/sultry-dream"><img src="https://conversionratestore.github.io/projects/mariemur/images/sultry-dream.jpg" alt="category"><p>Sultry dream</p></a></div>
                </div>
            </div>
        `,
);

/*
    add you have seen block
*/

let blockBeforeHaveSeen = document.querySelectorAll('.catalog-box')[3] || document.querySelectorAll('.catalog-box').length - 1;

setTimeout(() => {
    const rvpContainer = document.querySelector('.rvp-container')

    blockBeforeHaveSeen.insertAdjacentElement('afterend',
        rvpContainer
    );
    rvpContainer.querySelector('.rvp-title-wrap').innerHTML = '<p class="title">You have seen</p>';

    document.querySelectorAll('.rvp-product-desc').forEach(item => {
        let link = item.querySelector('.rvp-buynow a').href;

        item.insertAdjacentHTML(`afterend`, `
            <div class="item-icons">
                <svg class="heart" width="32" height="29" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4198 1.68959L15.7552 1.35141L15.4198 1.68959L15.4828 1.75202C17.0798 3.33586 17.0798 5.95151 15.4828 7.53535L14.9792 8.03484L8.72087 14.2415L2.46258 8.03484L1.95894 7.53535C0.361914 5.95151 0.361914 3.33586 1.95894 1.75202L2.02189 1.68959C3.62121 0.10347 6.26582 0.10347 7.86514 1.68959L8.36879 2.18908L8.72087 2.53826L9.07296 2.18908L9.5766 1.68959C11.1759 0.10347 13.8205 0.10347 15.4198 1.68959Z"></path>
                </svg>
                <a href="${link}"><img src="https://conversionratestore.github.io/projects/mariemur/images/bag.svg" alt="bag"></a>
            </div>
        `)
    })

    document.querySelectorAll('.item-icons .heart').forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('heart--active')
        })
    })
}, 1500)

/*
    add influencers block
*/

let blockBeforeInfluencers = document.querySelectorAll('.catalog-box')[5] || document.querySelector('.rvp-container')
blockBeforeInfluencers.insertAdjacentHTML(
    'afterend',
    `
            <div class="influencers">
                <p class="title">Influencers who wear</p>
                <div class="influencers__item">
                    <div class="first-div">
                        <img src="https://conversionratestore.github.io/projects/mariemur/images/influencer1.png" alt="influencer">
                            <div>
                                <p class="nickname">stinemaebiticon</p>
                                <p class="followers">371k followers</p>
                            </div>
                             <img src="https://conversionratestore.github.io/projects/mariemur/images/influencer1-insta.png" alt="influencer insta">
                    </div>
                </div>
                <div class="influencers__item">
                    <div class="first-div">
                        <img src="https://conversionratestore.github.io/projects/mariemur/images/influencer2.png" alt="influencer">
                            <div>
                                <p class="nickname">orinary</p>
                                <p class="followers">117k followers</p>
                            </div>
                             <img class="instagram" src="https://conversionratestore.github.io/projects/mariemur/images/influencer1-insta.png" alt="influencer insta">
                    </div>
                </div>
                <div class="influencers__item">
                    <div class="first-div">
                        <img src="https://conversionratestore.github.io/projects/mariemur/images/influencer3.png" alt="influencer">
                            <div>
                                <p class="nickname">Angelin_A_michelle</p>
                                <p class="followers">709k followers</p>
                            </div>
                             <img class="instagram" src="https://conversionratestore.github.io/projects/mariemur/images/influencer3-insta.png" alt="influencer insta">
                    </div>
                </div>
                <div class="influencers__item">
                    <div class="first-div">
                        <img src="https://conversionratestore.github.io/projects/mariemur/images/influencer4.png" alt="influencer">
                            <div>
                                <p class="nickname">princia_g</p>
                                <p class="followers">72.2k followers</p>
                            </div>
                            <img class="instagram" src="https://conversionratestore.github.io/projects/mariemur/images/influencer4-insta.png" alt="influencer insta">
                    </div>
                </div>
                <div class="influencers__item">
                    <div class="first-div">
                        <img src="https://conversionratestore.github.io/projects/mariemur/images/influencer5.png" alt="influencer">
                            <div>
                                <p class="nickname">carolinaimpu</p>
                                <p class="followers">70k followers</p>
                            </div>
                            <img class="instagram" src="https://conversionratestore.github.io/projects/mariemur/images/influencer5-insta.png" alt="influencer insta">
                    </div>
                </div>
            </div>
        `,
);

// activate tiny slider
setTimeout(() => {
    let sliderCategories = tns({
        container: '.popular-categories__slider',
        items: 1.5,
        autoplay: false,
        controls: false,
        loop: false,
        autoplayButton: false,
        autoplayButtonOutput: false,
        nav: false,
    });
}, 1000);

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments)
    };
    h._hjSettings = {hjid: 2442662, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp PL improved',
    'eventAction': 'loaded'
});
