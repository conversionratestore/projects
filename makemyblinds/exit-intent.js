document.body.insertAdjacentHTML('afterbegin', `
<style>
@media screen and (max-width: 768px) {
    .product-mobile-title .wishlist-mobile-wrap {
        display: none; }
    .hp_strip__container {
        margin: 0 -16px;
        width: calc(100% + 32px);}
    .hp_strip__container ul i {
        display: block;}
    .product-options-wrapper, .htm-trigger, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-label, .catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-original {
        display: none; }
    .your-text {
        display: block;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 1;
        letter-spacing: 0.0015em;
        color: #232849;
        margin-right: 8px; }
    .catalog-product-view .product-info-main .product-details .bottom-actions .price-container {
        flex-direction: row;
        align-items: center;}
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row {
        flex-wrap: wrap;
        width: 100%;}
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .btn {
        width: 100%;
        margin: 0;}
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
        margin-top: 0!important;}
    .bottom-actions__row {
        display: block; }
    .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .product-social-links, .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
        width: 100%;}
    .bottom-actions__row .product-social-links {
        order: 2;}
    .category-title {
        padding: 0;
        font-size: 32px;
        line-height: 120%;
        text-align: center;}
    .card img {
        height: 183px;}
    .tns-controls {
        width: 100%;
        top: auto; 
        bottom: 10px;
        justify-content: space-between; }
    .tns-controls [aria-controls], .tns-controls [data-action] {
        margin: 0;
        padding: 0 15px;
        width: 24px;
        height: 24px;}
    .tns-controls [aria-controls]:hover, .tns-controls [data-action]:hover {
        background-color: #141729;  }
    .category {
        order: inherit;}
}
    .your-text {
        display: none;}
    .catalog-product-view .product-info-main .media {
        position: relative;}
    .product-great {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 3;
        padding: 0 15px 0 5px;}
    .product-great-item {
        background: #66CCCC;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 19px;
        padding: 7.5px 8px;
        margin-left: 10px;
        margin-bottom: 10px;
        letter-spacing: 0.15px;
        color: #232849;
        font-size: 14px;}
    .card {
        background: #FFFFFF;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 16px 8px;
        line-height: 120%;
        max-width: 248px;
        margin: 0 auto;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        position: relative; }
    .card_bottom {
        padding: 0 8px;}
    .card img {
        margin: 0 auto 12px;
        width: 100%;
        height: 267px;
        object-fit: cover;}
    .card a {
        display: block;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.0018em;
        color: #141729;
        margin-bottom: 16px; }
    .card a.card-title span {
        display: block;
        min-height: 38.4px;
        padding: 0 8px;}
    .card-price {
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.180451px;
        color: #66CCCC;
        margin-bottom: 21px;}
    a.btn-view {
        width: 100%;
        font-weight: 600;
        font-size: 14px;
        display: block;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: #232847!important;
        border: 1px solid #141729;
        border-radius: 8px; }
    .btn-order {
        font-family: 'Barlow-medium', sans-serif;
        width: 100%;
        border-radius: 8px;
        background: #232849;
        font-weight: 600;
        font-size: 14px;
        line-height: 40px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-top: 10px;}
    .popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        background: rgba(81, 81, 81, 0.73);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        padding: 14px;
        z-index: 999;}
    .popup.active {
        opacity: 1;
        pointer-events: auto; }
    .popup .tns-outer {
        margin: 0 auto;
        max-width: 176px; }
    .popup .card {
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);}
    .popup-container {
        position: relative;
        max-width: 343px;
        width: 100%;
        margin: auto;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 16px 24px 80px;}
    .popup .tns-controls {
        bottom: 44px; }
    .popup .tns-nav {
        bottom: 48px;}
    .btn-close {
        width: 13px;
        height: 13px;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/close.svg') no-repeat center / contain;
        display: block;
        margin: 0 -8px 12px auto; }
    .popup-title {
        text-align: center;
        font-family: 'Barlow', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 30px;
        letter-spacing: 0.0015em;
        text-transform: uppercase;
        color: #232847; }
    .popup-title span {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        line-height: 22px;
        font-weight: normal;}
    .category {
        order: 1;
        position: relative;
        display: none;
        padding: 40px 10px 0; }
    .category:nth-child(-n+3) {
        display: block;}
    .categories {
        max-width: 1228px;
        margin: 0 auto;}
    .categories.show .category{
        display: block!important;}
    .tns-controls {
        top: 50px;
        position: absolute;
        right: 0;
        z-index: 1;
        padding: 0 32px;
        display: flex;}
    .product-specs--new .container {
        display: flex;
        flex-direction: column; }
    .category-title {
        padding: 0 22px;
        font-family: 'Barlow-medium', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 60px;
        color: #232849;}
    .view-more {
        font-family: 'Overpass', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0.15px;
        text-decoration-line: underline;
        padding: 12px 44px 12px 16px;
        display: block;
        margin-left: auto;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow.svg') no-repeat right 24px center / 8px;
        color: #232849;}
    .category-slider {
        padding: 29px 0 44px;
        position: relative;}
    .slider {
        padding: 20px 0}
    .slide {
        padding: 0 5px;}
    .card a.btn {
        border: 1px solid #141729;
        padding: 11px 17px;
        margin-bottom: 0;
        font-weight: 600;
        font-size: 14px;
        border-radius: 8px;
        line-height: 110.4%;
        background: transparent;
        box-shadow: none;
        width: 100%;
        min-width: auto;
        align-items: center;
        justify-content: center;
        display: flex;}
    .card .product-social-links i.mmb-icon.love {
        font-size: 1.3em !important; }
    .tns-controls [aria-controls], .tns-controls [data-action] {
        width: 40px;
        height: 40px;
        margin-left: 10px;
        border-radius: 50%;
        user-select: none;
        color: transparent;
        transition: all 0.3s ease;
        background: #C4C4C4 url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow-right.svg') no-repeat center / 30%;}
    .tns-controls [aria-controls]:hover, .tns-controls [data-action]:hover {
        background-color: #AAAAAA;}
    .tns-controls [data-controls="prev"] {
        transform: scaleX(-1);}
    .tns-nav {
        position: absolute;
        left: 50%;
        z-index: 2;
        transform: translateX(-50%);
        bottom: 13px;}
    .tns-nav button {
        margin: 0 4px;
        background: #C4C4C4;
        width: 10px;
        height: 10px;
        border-radius: 50%; }
    .tns-nav button.tns-nav-active {
        background: #191919;}
    /*}*/
</style>`);

document.querySelector('.product.media').insertAdjacentHTML('afterbegin', `<div class="product-great"></div>`);
document.querySelector('.catalog-product-view .product-info-main .product-details .bottom-actions .price-container .price-wrapper').insertAdjacentHTML('beforebegin', `<p class="your-text">Your price </p>`);
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

function tnsInitialization(item,amountMob,amountTablet,amountDesk) {
    document.querySelectorAll(`.${item}`).forEach(slider => {
        if (slider.innerHTML === '') {
            slider.closest('.category').remove();
        }
        tns({
            container: slider,
            items: amountMob,
            autoplay: false,
            controls: true,
            loop: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            preventScrollOnTouch: 'auto',
            swipeAngle: false,
            responsive: {
                991: {
                    items: amountTablet,
                    nav: true,
                },
                1024: {
                    items: amountDesk,
                    nav: false,
                }
            }
        });
    });
}

function card(index,img,name,price) {
    let card = `
    <div class="slide">
         <div class="card">
            <div class="product-great"></div>
            <a href="${name.split(' ').join('-')}.html" class="card-title">
                <img src="https://www.makemyblinds.co.uk/media/catalog/product${img}" alt="${name}">
                <span>${name}</span>
            </a>
            <div class="card_bottom">
                <div class="card-price">£${price}</div>
                <a href="${name.split(' ').join('-')}.html" class="btn">VIEW PRODUCT</a>
            </div>
        </div>
    </div>`;
    document.querySelectorAll('.category-slider')[index].insertAdjacentHTML('afterbegin', card);

}

function cardPopup(img,name,price) {
    let card = `
    <div class="slide">
         <div class="card">
            <div class="product-great"></div>
            <a href="${name.split(' ').join('-')}.html" class="card-title">
                <img src="https://www.makemyblinds.co.uk/media/catalog/product${img}" alt="${name}">
                <span>${name}</span>
            </a>
            <div class="card_bottom">
                <div class="card-price">£${price}</div>
                <a href="${name.replace(' ','-')}.html" class="btn">VIEW PRODUCT</a>
            </div>
        </div>
    </div>`;

    document.querySelector('.popup .slider').insertAdjacentHTML('beforeend', card);
}

document.body.insertAdjacentHTML('beforeend', `
<div class="popup">
    <div class="popup-container">
       <button class="btn-close" type="button"></button>
        <h2 class="popup-title">Don’t leave!<span>We have a lot more to offer</span></h2>
        <div class="slider"></div>
    </div>
</div>`);

let greatForId = [
    {
        name: 'Bathroom',
        value: '6'
    },
    {
        name: 'Living Room',
        value: '7'
    },
    {
        name: 'Kitchen',
        value: '8'
    },
    {
        name: 'Bedroom',
        value: '9'
    },
    {
        name: 'BiFold Doors',
        value: '67'
    },
    {
        name: 'Conservatories',
        value: '68'
    },
    {
        name: 'French Doors',
        value: '69'
    },
    {
        name: 'Patio',
        value: '70'
    },
    {
        name: 'Attic/Loft',
        value: '71'
    },
    {
        name: 'Children',
        value: '223'
    },
    {
        name: 'Dining Room',
        value: '224'
    },
    {
        name: 'Nursery',
        value: '225'
    },
    {
        name: 'Office',
        value: '226'
    }
]

document.querySelectorAll('.spec-table__inner__table tr').forEach((el, index) => {
    if(el.querySelector('th').innerHTML === 'Great For:') {
        let tdSplit = el.querySelector('td').innerHTML.split(', ');
        for (let i = 0; i < tdSplit.length; i++) {
            document.querySelector('.product-great').insertAdjacentHTML('beforeend', `<a href="https://www.makemyblinds.co.uk/blinds/${tdSplit[i]}" class="product-great-item" data-id="${greatForId[i].value}" data-name="${greatForId[i].name}">${tdSplit[i]}</a>`);
        }
    }
});

function myScrollSpeedFunction(){
    if(document.body.classList.contains('mobile')) {
        if(my_scroll() < -200){
            document.querySelector(".popup").classList.add('active');
        }
    }
}

var my_scroll = (function() {
    var last_position, new_position, timer, delta, delay = 50;

    function clear() {
        last_position = null;
        delta = 0;
    }

    clear();

    return function(){
        new_position = window.scrollY;
        if (last_position != null){
            delta = new_position -  last_position;
        }
        last_position = new_position;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
    };
})();

window.addEventListener('scroll', myScrollSpeedFunction);

document.querySelector(".btn-close").addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    document.querySelector('.popup').classList.remove('active');
});
document.querySelector(".popup-container").addEventListener('click', (e) => {
    e.stopPropagation();
});
document.querySelector('.product-specs--new .container').insertAdjacentHTML('afterbegin', `<div class="categories"></div>`);

let token = [];

let thermalItems = [],
    privacyItems = [],
    cordlessItems = [],
    noDrillItems = [],
    betterSleepItems = [],
    fireRetardantItems = [],
    randomItems = [],
    perfectFit = [];

fetch('https://www.makemyblinds.co.uk/rest/V1/integration/admin/token', {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify( {
        "username": "conversionrate",
        "password": "gasmaj-mornut-sowZy9"
    })

}).then(res => res.json()).then(data => {
    token.push(data);
    console.log('token: ', token[0]);

    let request1 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=176& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Thermal', data);
        thermalItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request2 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=232& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Privacy', data);
        privacyItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request3 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=229& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Cordless', data);
        cordlessItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    let request4 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_opacity&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=241&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Better sleep', data);
        betterSleepItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request5 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=231&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('No Drill', data);
        noDrillItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request6 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=183&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Fire Retardant', data);
        fireRetardantItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    let request7 = fetch(`https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=great_for&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=${document.querySelectorAll('.product-great-item')[0].dataset.id}&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],sku]`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('randomItems', data);
        randomItems.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    let request8 = fetch(`https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filterGroups][0][filters][0][field]=fit_type&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=239&searchCriteria[pageSize]=6& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file]]`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token[0]}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Perfect Fit', data);
        perfectFit.push(data);
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    Promise.all([request1,request2,request3,request4,request5,request6,request7, request8]).then(res => {
        let titleArr = ['Privacy Blinds','Cordless Blinds','No Drill Blinds','Fire Retardant Blinds','Thermal Blinds','Blinds for Better Sleep', `Blinds for ${document.querySelectorAll('.product-great-item')[0].dataset.name}`];
        for (let i = 0; i < titleArr.length; i++) {
            document.querySelector('.categories').insertAdjacentHTML('beforeend', `
            <div class="category">
                <h3 class="category-title">${titleArr[i]}</h3>
                <div class="category-slider"></div>
            </div>`);
        }

        for (let i = 0; i < 12; i++) {
            if (randomItems[0]["items"] != null) {
                card(0, randomItems[0]["items"][i]["media_gallery_entries"][0]["file"], randomItems[0]["items"][i]["name"], randomItems[0]["items"][i]["price"]);
            }
            if (betterSleepItems[0]["items"] != null) {
                card(1, betterSleepItems[0]["items"][i]["media_gallery_entries"][0]["file"], betterSleepItems[0]["items"][i]["name"], betterSleepItems[0]["items"][i]["price"]);
            }
            if (thermalItems[0]["items"] != null) {
                card(2, thermalItems[0]["items"][i]["media_gallery_entries"][0]["file"], thermalItems[0]["items"][i]["name"], thermalItems[0]["items"][i]["price"]);
            }
            if (fireRetardantItems[0]["items"] != null) {
                card(3, fireRetardantItems[0]["items"][i]["media_gallery_entries"][0]["file"], fireRetardantItems[0]["items"][i]["name"], fireRetardantItems[0]["items"][i]["price"]);
            }
            if (noDrillItems[0]["items"] != null) {
                card(4, noDrillItems[0]["items"][i]["media_gallery_entries"][0]["file"], noDrillItems[0]["items"][i]["name"], noDrillItems[0]["items"][i]["price"]);
            }
            if (cordlessItems[0]["items"] != null) {
                card(5, cordlessItems[0]["items"][i]["media_gallery_entries"][0]["file"], cordlessItems[0]["items"][i]["name"], cordlessItems[0]["items"][i]["price"]);
            }
            if (privacyItems[0]["items"] != null) {
                card(6, privacyItems[0]["items"][i]["media_gallery_entries"][0]["file"], privacyItems[0]["items"][i]["name"], privacyItems[0]["items"][i]["price"]);
            }
        }
        for (let i = 0; i < 6; i++) {
            if (perfectFit[0]["items"] != null) {
                cardPopup(perfectFit[0]["items"][i]["media_gallery_entries"][0]["file"],perfectFit[0]["items"][i]["name"],perfectFit[0]["items"][i]["price"])
            }
        }
        tnsInitialization('category-slider',2,3,4);
        tnsInitialization('slider',1,2,2);
        document.querySelector('.categories').insertAdjacentHTML('beforeend',`<button type="button" class="view-more">View more</button>`)

        document.querySelector('.view-more').addEventListener('click', (e) => {
            e.target.hidden = true;
            document.querySelector('.categories').classList.add('show');
        });
        startBtns();
    });
}).catch(err => {
    console.log('Failed fetch ', err);
});


// (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:1709958,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
// })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
// window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
// hj('trigger', 'pdp_exit_intent_mobile');
//
// window.dataLayer = window.dataLayer || [];
// dataLayer.push({
//     'event': 'event-to-ga',
//     'eventCategory': 'Exp — PDP improvement exit intent mobile',
//     'eventAction': 'loaded'
// });
