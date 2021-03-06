
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}
function eventsCategories(elem,eventAction) {
    document.querySelectorAll(elem).forEach((el) => {
        el.addEventListener('click', () => {
            if (window.matchMedia(`(max-width: 768px)`).matches) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP improvement exit intent mobile',
                    'eventAction': eventAction,
                    'eventLabel': `Section ${el.closest('.category').querySelector('.category-title').innerHTML}`
                });
            } else {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP improvement exit intent desktop',
                    'eventAction': eventAction,
                    'eventLabel': `Section ${el.closest('.category').querySelector('.category-title').innerHTML}`
                });
            }
        });
    })
}
function tnsInitialization(item,amountMob,amountTablet,amountDesk,navDesk) {
    document.querySelectorAll(`${item}`).forEach(slider => {
        tns({
            container: slider,
            items: amountMob,
            autoplay: false,
            controls: true,
            loop: false,
            autoplayButton: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            preventScrollOnTouch: 'auto',
            swipeAngle: false,
            responsive: {
                769: {
                    items: amountTablet,
                    nav: true,
                },
                1024: {
                    items: amountDesk,
                    nav: navDesk,
                }
            }
        });
    });
    eventsCategories('.category .card-title','Click on product from listing');
    eventsCategories('.tns-controls button','Click on arrows button listing');
    eventsCategories('.tns-nav button','Click on dots button listing');
    eventsCategories('.category .card .btn','Click on View Product button listing');
}
function card(index,img,name,price,link,satus) {
    let card = `
    <div class="slide" data-status="${satus}">
         <div class="card">
            <a href="${link}.html" class="card-title">
                <img src="https://www.makemyblinds.co.uk/media/catalog/product${img}" alt="${name}">
                <span>${name}</span>
            </a>
            <div class="card_bottom">
                <div class="card-price">£${price}</div>
                <a href="${link}.html" class="btn">VIEW PRODUCT</a>
            </div>
        </div>
    </div>`;
    if (index != 'popup') {
        document.querySelector(`.category-slider[data-id='${index}']`).insertAdjacentHTML('afterbegin', card);
        document.querySelectorAll('[data-status="2"]').forEach((el) => {
            el.remove();
        });
    } else {
        document.querySelector('.popup .slider').insertAdjacentHTML('beforeend', card);
    }

    document.querySelectorAll('.category .card-price').forEach((el) => {
        if(el.innerHTML === '£0') {
            el.closest('.slide').remove();
        }
    })

}

function eventsPopup(elem,eventAction) {
    document.querySelectorAll(elem).forEach((el) => {
        el.addEventListener('click', () => {
            if (window.matchMedia(`(max-width: 768px)`).matches) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP improvement exit intent mobile',
                    'eventAction': eventAction,
                    'eventLabel': `Exit intent popup`
                });
            } else {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp — PDP improvement exit intent desktop',
                    'eventAction': eventAction,
                    'eventLabel': `Exit intent popup`
                });
            }
        });
    })
}

let token = [];

let randomItems = [],
    perfectFit = [
        {
            link: 'https://www.makemyblinds.co.uk/simply-brilliant-white-with-jasmine-white-tape',
            img: '/s/h/shot_1_57.jpg',
            title: 'Simply Brilliant White with Jasmine White Tape',
            price: '9.99',
            greatFor1: 'Living Room',
            greatFor2: 'Kitchen',
            idGreatFor1: '7',
            idGreatFor2: '8',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/editions-brilliant-white-with-lilly-tapes',
            img: '/9/_/9_bathroom_scene_detail03_serene_cotton_tape_08202019.jpg',
            title: 'Editions Brilliant White with Lilly Tapes',
            price: '11.99',
            greatFor1: 'Living Room',
            greatFor2: 'Kitchen',
            idGreatFor1: '7',
            idGreatFor2: '8',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/matt-soft-white-perfect-fit',
            img: '/i/s/iso_full.jpg',
            title: 'Matt Soft White Perfect Fit',
            price: '19.99',
            greatFor1: 'Conservatories',
            greatFor2: 'Patio',
            idGreatFor1: '68',
            idGreatFor2: '70',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/bifold-stormy-grey-satin-perfect-fit',
            img: '/7/_/7_cam_kitchen_mid_angle_door_tr1679_11092019_1.jpg',
            title: 'Anthracite Grey Perfect Fit',
            price: '29.99',
            greatFor1: 'Patio',
            greatFor2: 'Kitchen',
            idGreatFor1: '70',
            idGreatFor2: '8',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/gloss-pure-white-perfect-fit',
            img: '/a/n/angl_dsfdfsded_d_sdsdsdoor.jpg',
            title: 'Gloss Pure White Perfect Fit',
            price: '19.99',
            greatFor1: 'French Doors',
            greatFor2: 'Patio',
            idGreatFor1: '69',
            idGreatFor2: '70',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/real-wood-bliss-white-with-charcoal-tape',
            img: '/9/_/9_bathroom_scene_detail03_glacier_shadow_tape_08202019.jpg',
            title: 'Real Wood Bliss White with Charcoal Tape',
            price: '12.99',
            greatFor1: 'Living Room',
            greatFor2: 'Office',
            idGreatFor1: '7',
            idGreatFor2: '226',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/amor-shark-grey-roller-blind',
            img: '/a/m/amor_shark_grey_fixed.jpg',
            title: 'Amor Shark Grey Roller Blind',
            price: '9.95',
            greatFor1: 'Living Room',
            greatFor2: 'Kitchen',
            idGreatFor1: '7',
            idGreatFor2: '8',
            status: 1
        },
        {
            link: 'https://www.makemyblinds.co.uk/amor-white-lotus-roller-blind',
            img: '/a/m/amor_white_lotus_fixed.jpg',
            title: 'Amor White Lotus Roller Blind',
            price: '9.99',
            greatFor1: 'Living Room',
            greatFor2: 'Kitchen',
            idGreatFor1: '7',
            idGreatFor2: '8',
            status: 1
        }
    ];

let items = [];

fetch('https://www.makemyblinds.co.uk/rest/V1/integration/admin/token', {
    headers: {
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify( {
        "username": "conversionrate",
        "password": "gasmaj-mornut-sowZy9"
    })

}).then(res => res.json()).then(datatoken => {
    token.push(datatoken);
    console.log('token: ', datatoken);
    let request1 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=176& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${datatoken}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Thermal', data);
        items.push({data,'idCategory': '176'});
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request2 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=232& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${datatoken}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Privacy', data);
        items.push({data,'idCategory': '232'});

    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request3 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=229& searchCriteria[pageSize]=22& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${datatoken}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Cordless', data);
        items.push({data,'idCategory': '229'});

    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request4 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=master_opacity&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=241&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${datatoken}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Better sleep', data);
        items.push({data,'idCategory': '241'});
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request5 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=231&searchCriteria[pageSize]=22& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${datatoken}`
        }
    }).then(res => res.json()).then(data => {
        console.log('No Drill', data);
        items.push({data,'idCategory': '231'});
    }).catch(err => {
        console.log('Failed fetch ', err);
    });

    let request6 = fetch("https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=master_properties&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=183&searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${datatoken}`
        }
    }).then(res => res.json()).then(data => {
        console.log('Fire Retardant', data);
        // items.push({data,'idCategory': '183'});
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
    Promise.all([request1,request2,request3,request4,request5]).then(res => { //,request6
        localStorage.setItem('items', JSON.stringify(items));
        let itemsLocalStorage = JSON.parse(localStorage.getItem('items'))
        for (let i = 0; i < itemsLocalStorage[0]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[0]["idCategory"], itemsLocalStorage[0]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[0]["data"]["items"][i]["name"],itemsLocalStorage[0]["data"]["items"][i]["price"],itemsLocalStorage[0]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[0]["data"]["items"][i]["status"]);

        }
        for (let i = 0; i < itemsLocalStorage[1]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[1]["idCategory"], itemsLocalStorage[1]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[1]["data"]["items"][i]["name"],itemsLocalStorage[1]["data"]["items"][i]["price"],itemsLocalStorage[1]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[1]["data"]["items"][i]["status"]);

        }
        for (let i = 0; i < itemsLocalStorage[2]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[2]["idCategory"], itemsLocalStorage[2]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[2]["data"]["items"][i]["name"],itemsLocalStorage[2]["data"]["items"][i]["price"],itemsLocalStorage[2]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[2]["data"]["items"][i]["status"]);

        }
        for (let i = 0; i < itemsLocalStorage[3]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[3]["idCategory"], itemsLocalStorage[3]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[3]["data"]["items"][i]["name"],itemsLocalStorage[3]["data"]["items"][i]["price"],itemsLocalStorage[3]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[3]["data"]["items"][i]["status"]);

        }
        for (let i = 0; i < itemsLocalStorage[4]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[4]["idCategory"], itemsLocalStorage[4]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[4]["data"]["items"][i]["name"],itemsLocalStorage[4]["data"]["items"][i]["price"],itemsLocalStorage[4]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[4]["data"]["items"][i]["status"]);

        }
        tnsInitialization('.category-slider',2,3,4,false);
    });
}).catch(err => {
    console.log('Failed fetch ', err);
});
let mut = new MutationObserver(function (muts) {
    if (document.querySelectorAll('.category-slider')[5] && document.querySelectorAll('.category-slider')[0] && localStorage.getItem('items') && JSON.parse(localStorage.getItem('items')).length == 5 && document.querySelectorAll('.category-slider')[5].innerHTML == "") {
        mut.disconnect();

        let itemsLocalStorage = JSON.parse(localStorage.getItem('items'))
        for (let i = 0; i < itemsLocalStorage[0]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[0]["idCategory"], itemsLocalStorage[0]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[0]["data"]["items"][i]["name"],itemsLocalStorage[0]["data"]["items"][i]["price"],itemsLocalStorage[0]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[0]["data"]["items"][i]["status"]);
            tnsInitialization('.category-slider',2,3,4,false);
        }
        for (let i = 0; i < itemsLocalStorage[1]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[1]["idCategory"], itemsLocalStorage[1]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[1]["data"]["items"][i]["name"],itemsLocalStorage[1]["data"]["items"][i]["price"],itemsLocalStorage[1]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[1]["data"]["items"][i]["status"]);
            tnsInitialization('.category-slider',2,3,4,false);
        }
        for (let i = 0; i < itemsLocalStorage[2]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[2]["idCategory"], itemsLocalStorage[2]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[2]["data"]["items"][i]["name"],itemsLocalStorage[2]["data"]["items"][i]["price"],itemsLocalStorage[2]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[2]["data"]["items"][i]["status"]);
            tnsInitialization('.category-slider',2,3,4,false);
        }
        for (let i = 0; i < itemsLocalStorage[3]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[3]["idCategory"], itemsLocalStorage[3]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[3]["data"]["items"][i]["name"],itemsLocalStorage[3]["data"]["items"][i]["price"],itemsLocalStorage[3]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[3]["data"]["items"][i]["status"]);
            tnsInitialization('.category-slider',2,3,4,false);
        }
        for (let i = 0; i < itemsLocalStorage[4]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[4]["idCategory"], itemsLocalStorage[4]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[4]["data"]["items"][i]["name"],itemsLocalStorage[4]["data"]["items"][i]["price"],itemsLocalStorage[4]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[4]["data"]["items"][i]["status"]);
            tnsInitialization('.category-slider',2,3,4,false);
        }
        // card(JSON.parse(localStorage.getItem('items'))[5]["idCategory"], itemsLocalStorage[5]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[5]["data"]["items"][i]["name"],itemsLocalStorage[5]["data"]["items"][i]["price"],itemsLocalStorage[5]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[5]["data"]["items"][i]["status"]); 
    }
    mut.observe(document, {
        childList: true,
        subtree: true
    });
    if (document.querySelectorAll('.popup .slider .slide')) {
        mut.disconnect();
        tnsInitialization('.slider',1,2,2,true);
    }

});

mut.observe(document, {
    childList: true,
    subtree: true
});

window.onload  = function () {
    document.body.insertAdjacentHTML('afterbegin', `<style>
    .product-great p {
        font-weight: 600;
        font-size: 14px;
        line-height: 120%;
        white-space: nowrap;
        letter-spacing: 0.15px;}
    .your-text {
        display: none;}
    .catalog-product-view .product-info-main .media {
        position: relative;}
    .popup .product-great {
        padding: 0;
        justify-content: center;}
    .product-great {
        display: flex;
        align-items: center;
        // position: absolute;
        // top: 0;
        // right: 0;
        margin-top: 25px;
        width: 100%;
        z-index: 3;
        padding: 0 16px;}
    .product-great-item {
        border: 1px solid #232849;
        border-radius: 100px;
        padding: 0 13px;
        line-height: 38px;
        margin-left: 15px;
        letter-spacing: 0.15px;
        color: #232849;
        text-align: center;
        font-size: 16px;}
    .card {
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
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
    .popup .card a.card-title span {
        min-height: 57px;}
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
        overflow-y: auto;
        z-index: 999;}
    .popup.active {
        opacity: 1;
        pointer-events: auto; }
    .popup .tns-outer {
        margin: 0 auto;
        max-width: 536px; }
    .popup .card {
        max-width: 176px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.05);}
    .popup-container {
        position: relative;
        max-width: 801px;
        width: 100%;
        margin: auto;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 16px 24px 48px;}
    .popup .tns-controls {
        bottom: 24px; }
    .popup .tns-nav {
        bottom: 27px;}
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
        overflow: hidden;
        position: relative;
        display: none;
        padding: 40px 10px 0; }
    .category:nth-child(-n+3) {
        display: block;}
    .categories {
        order: 1;
        width: 100%;
        max-width: 1204px;
        margin: 30px auto 0;}
    .categories.show .category{
        display: block!important;}
    .category .tns-controls {
        top: 50px; }
    .tns-controls {
        position: absolute;
        right: 0;
        bottom: 10px;
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
        padding: 12px 28px 12px 16px;
        display: block;
        margin-right: 25px;
        margin-left: auto;
        background: url('https://conversionratestore.github.io/projects/makemyblinds/img/arrow.svg') no-repeat right 10px center / 8px;
        color: #232849;}
    .category-slider {
        display: flex;
        padding: 32px 0 44px;
        position: relative;}
    .slider {
        padding: 20px 0;}
    .slide {
        flex-shrink: 0;
        padding: 0 5px;}
    .card a.btn {
        border: 1px solid #141729;
        padding: 11px;
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
        transition: all 0.3s ease;
        display: flex;}
    .card a.btn:hover {
        background: #141729;
        color: #fff;}
    .card .product-social-links i.mmb-icon.love {
        font-size: 1.3em !important; }
    .category .tns-controls [aria-controls], .tns-controls [data-action] {
        margin-left: 10px;
        width: 40px;
        height: 40px; }
    .tns-controls [aria-controls], .tns-controls [data-action] {
        width: 24px;
        height: 24px;
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
    .your-box {
        display: none;}
        @media screen and (min-width: 769px) {
            .popup .product-great-item:last-child {
                display: none; }
            .popup .slide {
                width: 50%;
                padding: 0 20px; }
            .popup .tns-controls {
                width: 100%;
                padding: 0 20px;
                justify-content: space-between;
                max-width: 536px;
                transform: translateX(50%);
                right: 50%;}
            .slide {
                width: 33%;}
            .popup .card {
                max-width: 100%; }
        }
        @media screen and (min-width: 1025px) {
            .slide {
                width: 25%;}
        }
        @media screen and (max-width: 768px) {
            .price-original, .bottom-actions__row .price-label {
                display: none!important; }
            .slide {
                width: 50%;}
            .page-title-wrapper {
                display: none;}
            .product-details {
                padding-bottom: 40px;
                border-top: 1px solid #DEDEDE;}
            .popup-container {
                position: relative;
                max-width: 343px;}
            .popup .tns-outer {
                margin: 0 auto;
                max-width: 100%; }
            .product-mobile-title .wishlist-mobile-wrap {
                display: none; }
            .hp_strip__container {
                margin: 0 -16px;
                width: calc(100% + 32px);}
            .hp_strip__container ul i {
                display: block;}
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
            .main .price-container {
                font-family: 'Barlow-medium', sans-serif;
                margin-bottom: 25px;
                display: flex;
                justify-content: space-between;
                align-items: center;}
            .main .price-label {
                font-weight: 500;
                font-size: 26px;
                line-height: 31px;
                letter-spacing: 0.15px;}
            .product-info-price {
                width: 100%;}
            .main .product-options-bottom .price-wrapper, .your-box .price-wrapper{
                font-style: normal;
                font-weight: 500;
                font-size: 49px;
                line-height: 59px;
                letter-spacing: -0.005em;
                padding-left: 10px;
                opacity: 1!important;
                color: #232849!important;}
            .main .product-options-bottom .price-wrapper span, .your-box .price-wrapper span{
                opacity: 1!important;
                color: #232849!important;}
            .catalog-product-view .product-details .bottom-actions .bottom-actions__row {
                display: flex;
                flex-wrap: wrap;
                width: 100%;}
            .box-tocart {
                width: 100%; }
            .catalog-product-view .product-details .bottom-actions .bottom-actions__row .btn, .your-box .btn {
                width: 100%;
                letter-spacing: 0.180451px;
                margin: 0;
                wodth: 100%;
                font-family: "Barlow-medium", sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                padding: 12px;
                margin: 0 0 15px 0!important;}
            .bottom-actions__row {
                display: block; }
            .catalog-product-view .product-details .bottom-actions .bottom-actions__row .product-social-links, .catalog-product-view .product-info-main .product-details .bottom-actions .bottom-actions__row .box-tocart {
                width: 100%;}
            .bottom-actions__row .product-social-links {
                order: 2;}
            .category-slider {
                padding-top: 29px;}
            .category-title {
                padding: 0;
                font-size: 32px;
                line-height: 120%;
                text-align: center;}
            .card img {
                height: 183px;}
            .popup .tns-controls {
                padding: 0 24px; }
            .category .tns-controls{
                top: auto;}
            .tns-controls {
                padding: 0;
                width: 100%;
                justify-content: space-between; }
            .category .tns-controls [aria-controls], .tns-controls [data-action] {
                margin: 0;
                width: 24px;
                height: 24px;}
            .tns-controls [aria-controls]:hover, .tns-controls [data-action]:hover {
                background-color: #141729;  }
            .categories {
                margin: 0 auto 20px;
                order: inherit;}
            .product-specs--new {
                padding-top: 0; }
            .category {
                padding: 40px 0 0; }
            .view-more{
                margin-right: 0;}
            .scaled-custom-field {
                width: calc(50% - 18px);}
            .product-addto-links a:last-child  {
                display: none;}
            .your-box {
                display: block;
                padding: 10px 16px; }
            .your-box .price-container {
                padding-top: 10px;
                justify-content: flex-start; }
            .your-box .price-label {
                text-align: right;
                font-size: 16px; }
            .your-box .price-label span {
                display: block;
                font-family: 'Barlow', sans-serif;
                font-size: 10px;
                line-height: 1;
                color: #AAAAAA;}
            .your-box .price-label span span {
                text-decoration: line-through;
                display: inline;
                font-family: 'Barlow-medium',sans-serif;
                font-size: 14px;}
            .free-priority {
                margin: 10px 0; }
            .product-delivery-date {
                display: flex;
                font-family: 'Overpass',Arial,Helvetica,sans-serif;
                margin-top: 17px; 
                margin-bottom: 10px; }
            .product-delivery-date__fast-track {
                flex: 1;
                background-color: #6cc;
                border-radius: 4px;
                padding: 10px 18px;
                color: #fff;
                text-align: center;
                display: flex;
                align-items: center;
                min-height: 51px; }
            .product-delivery-date p {
                font-weight: 300;
                font-size: 13px;
                line-height: 19px; }
            .flex-price {
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;
            }
            .your-price {
                margin-bottom: 25px;
                font-family: 'Barlow-medium', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 26px;
                line-height: 31px;
                letter-spacing: 0.0015em;
                color: #232849;
            }
        }
        @media screen and (max-width: 360px) {
            .catalog-product-view #product-options-wrapper .scaled-custom-field label span i {
                font-size: 17px;}
            .catalog-product-view #product-options-wrapper .fieldset .scaled-custom-field {
                margin-right: 12px;}
            .popup-container {
                padding: 16px 10px 48px;  }
            .product-great-item {
                margin-left: 2%;
                padding: 0 10px; }
            .btn-close {
                margin: 0 0 12px auto; }
            .popup .tns-controls {
                padding: 0 13px;}
        }    
</style>`);
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

    document.querySelectorAll('.box-tocart')[1].hidden = true;
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector('.product-specs--new .tabs').before(document.querySelector('.product-details'));
    }
    document.querySelector('.product-info-main').insertAdjacentHTML('afterend', `
    <div class="your-box">
        ${document.querySelector('.price-box').innerHTML}
        <button type="button" class="btn">Add to basket</button>
        <div class="product-social-links">${document.querySelector('.product-social-links').innerHTML}</div>
    </div>`);
    if (document.querySelector('.product-delivery-date')) {
        document.querySelector('.your-box .product-social-links').after(document.querySelector('.product-delivery-date'));
    }
    if (document.querySelector('.free-priority')) {
        document.querySelector('.your-box .product-social-links').after(document.querySelector('.free-priority'));
    }
    document.querySelector('.product.media').insertAdjacentHTML('beforeend','<div class="product-great"><p>Best for</p></div>')


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
                for (let key in greatForId) {
                    if (greatForId[key]["name"] == tdSplit[i] && i < 2) {
                        document.querySelector('.product .product-great').insertAdjacentHTML('beforeend', `<a href="https://www.makemyblinds.co.uk/blinds/${tdSplit[i]}" class="product-great-item" data-id="${greatForId[key]['value']}" data-name="${greatForId[key]['name']}">${tdSplit[i]}</a>`);
                    }
                }
            }
        }
    });

    document.querySelector('.product-specs--new .container').insertAdjacentHTML('afterbegin', `<div class="categories"></div>`);

    let titleArr = [
        {
            title: 'Blinds for Better Sleep',
            id: '241'
        },
        {
            title: 'Cordless Blinds',
            id: '229'
        },
        // {
        //     title: 'Fire Retardant Blinds', 
        //     id: '183'
        // },
        {
            title: 'Privacy Blinds',
            id: '232'
        },
        {
            title: 'No Drill Blinds',
            id: '231'
        },
        {
            title: 'Thermal Blinds',
            id: '176'
        },
        {
            title: `Blinds for ${document.querySelectorAll('.product-great-item')[0].dataset.name}`,
            id: 'random'
        }
    ];
    for (let i = 0; i < titleArr.length; i++) {
        document.querySelector('.categories').insertAdjacentHTML('afterbegin', `<div class="category"><h3 class="category-title">${titleArr[i].title}</h3><div class="category-slider" data-id="${titleArr[i].id}"></div></div>`);
    }
    if (localStorage.getItem('items') && document.querySelectorAll('.category-slider').innerHTML == "") {
        let itemsLocalStorage = JSON.parse(localStorage.getItem('items'));
        for (let i = 0; i < itemsLocalStorage[0]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[0]["idCategory"], itemsLocalStorage[0]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[0]["data"]["items"][i]["name"],itemsLocalStorage[0]["data"]["items"][i]["price"],itemsLocalStorage[0]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[0]["data"]["items"][i]["status"]);
        }
        for (let i = 0; i < itemsLocalStorage[1]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[1]["idCategory"], itemsLocalStorage[1]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[1]["data"]["items"][i]["name"],itemsLocalStorage[1]["data"]["items"][i]["price"],itemsLocalStorage[1]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[1]["data"]["items"][i]["status"]);
        }
        for (let i = 0; i < itemsLocalStorage[2]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[2]["idCategory"], itemsLocalStorage[2]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[2]["data"]["items"][i]["name"],itemsLocalStorage[2]["data"]["items"][i]["price"],itemsLocalStorage[2]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[2]["data"]["items"][i]["status"]);
        }
        for (let i = 0; i < itemsLocalStorage[3]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[3]["idCategory"], itemsLocalStorage[3]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[3]["data"]["items"][i]["name"],itemsLocalStorage[3]["data"]["items"][i]["price"],itemsLocalStorage[3]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[3]["data"]["items"][i]["status"]);
        }
        for (let i = 0; i < itemsLocalStorage[4]["data"]["items"].length; i++) {
            card(JSON.parse(localStorage.getItem('items'))[4]["idCategory"], itemsLocalStorage[4]["data"]["items"][i]["media_gallery_entries"][0]["file"], itemsLocalStorage[4]["data"]["items"][i]["name"],itemsLocalStorage[4]["data"]["items"][i]["price"],itemsLocalStorage[4]["data"]["items"][i]["custom_attributes"][3]["value"], itemsLocalStorage[4]["data"]["items"][i]["status"]);
        }
    }

    function myScrollSpeedFunction(){
        if(document.body.classList.contains('mobile')) {
            if (!document.querySelector(".popup").classList.contains('was') && document.querySelector('.popup .slider').innerHTML != '') {
                if(my_scroll() < -200 && document.querySelectorAll('.popup .slider .slide')){
                    setTimeout(() => {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp — PDP improvement exit intent mobile',
                            'eventAction': 'Showed exit intent popup',
                            'eventLabel': 'Exit intent popup'
                        });
                        document.querySelector(".popup").classList.add('active');
                        document.querySelector(".popup").classList.add('was');
                        tnsInitialization('.slider',1,2,2,true);
                        eventsPopup('.popup .card-title','Click on product from');
                        eventsPopup('.popup .btn','Click on View product white button');
                        eventsPopup('.popup .tns-controls button','Click on arrows button');
                    }, 200);
                }
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

    document.body.insertAdjacentHTML('beforeend', `
    <div class="popup">
        <div class="popup-container">
        <button class="btn-close" type="button"></button>
            <h2 class="popup-title">Don’t leave!<span>We have a lot more to offer</span></h2>
            <div class="slider"></div>
        </div>
    </div>`);
    for (let i = 0; i < 8; i++) {
        card('popup',perfectFit[i].img,perfectFit[i].title,perfectFit[i].price,perfectFit[i].link,perfectFit[i].status);
        document.querySelectorAll('.popup .slide')[i].insertAdjacentHTML('beforeend',` 
        <div class="product-great">
            <p>Best for</p>
            <a href="https://www.makemyblinds.co.uk/blinds/${perfectFit[i].greatFor1}" class="product-great-item" data-id="${perfectFit[i].idGreatFor1}" data-name="${perfectFit[i].greatFor1}">${perfectFit[i].greatFor1}</a>
            <a href="https://www.makemyblinds.co.uk/blinds/${perfectFit[i].greatFor2}" class="product-great-item" data-id="${perfectFit[i].idGreatFor2}" data-name="${perfectFit[i].greatFor2}">${perfectFit[i].greatFor2}</a>
        </div>`);
    }


    window.addEventListener('scroll', myScrollSpeedFunction);

    document.querySelector('.categories').insertAdjacentHTML('beforeend',`<button type="button" class="view-more">View more</button>`)

    document.querySelector('.view-more').addEventListener('click', (e) => {
        e.target.style.display = 'none';
        document.querySelector('.categories').classList.add('show');
        if (window.matchMedia("(max-width: 768px)").matches) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvement exit intent mobile',
                'eventAction': 'Click on View more button',
            });
        } else {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvement exit intent desktop',
                'eventAction': 'Click on View more button',
            });
        }
    });

    addEvent(document, 'mouseout', function(evt) {
        if (!document.querySelector(".popup").classList.contains('was') && document.querySelector('.popup .slider').innerHTML != '' ) {
            if (evt.toElement == null && evt.relatedTarget == null) {
                if (document.querySelectorAll('.popup .slider .slide')) {
                    setTimeout(() => {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp — PDP improvement exit intent desktop',
                            'eventAction': 'Show exit intent popup',
                            'eventLabel': 'Exit intent popup'
                        });
                        document.querySelector(".popup").classList.add('active');
                        document.querySelector(".popup").classList.add('was');
                        tnsInitialization('.slider',1,2,2,true);

                        eventsPopup('.popup .card-title','Click on product from');
                        eventsPopup('.popup .btn','Click on View product white button');
                        eventsPopup('.popup .tns-controls button','Click on arrows button');

                    }, 200);
                }
            }
        }
    });

    if(document.querySelectorAll('.product-great-item')[0]){
        console.log('find' + document.querySelectorAll('.product-great-item')[0].dataset.id);

        fetch(`https://www.makemyblinds.co.uk/rest/V1/products?searchCriteria[filter_groups][0][filters][0][field]=status&searchCriteria[sortOrders][0][field]=increment_id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filterGroups][0][filters][0][field]=great_for&searchCriteria[filterGroups][0][filters][0][condition_type]=finset&searchCriteria[filterGroups][0][filters][0][value]=${document.querySelectorAll('.product-great-item')[0].dataset.id}& searchCriteria[pageSize]=12& searchCriteria[currentPage]=1&fields=items[name,price,media_gallery_entries[file],custom_attributes[value],status]`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token[0]}`
            }
        }).then(res => res.json()).then(data => {
            console.log('randomItems', data);
            randomItems.push(data);
            for (let i = 0; i < 12; i++) {
                card('random', randomItems[0]["items"][i]["media_gallery_entries"][0]["file"], randomItems[0]["items"][i]["name"], randomItems[0]["items"][i]["price"], randomItems[0]["items"][i]["custom_attributes"][3]["value"], randomItems[0]["items"][i]["status"]);
            }
            tnsInitialization('.category-slider',2,3,4,false);
        }).catch(err => {
            console.log('Failed fetch ', err);
        });
    } else {
        console.log('no find ' + document.querySelectorAll('.product-great-item')[0]);
    }
    document.querySelector(".popup-container").addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.querySelector(".btn-close").addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        document.querySelector('.popup').classList.remove('active');
        if (window.matchMedia("(max-width: 768px)").matches) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvement exit intent mobile',
                'eventAction': 'Click on exit cross button',
            });
        } else {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP improvement exit intent desktop',
                'eventAction': 'Click on exit cross button',
            });
        }
    });

    document.querySelector('.your-box .btn').addEventListener('click', () => {
        const scrollTarget = document.querySelector('.product-details');
        const topOffset = document.querySelector('.page-header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
    document.querySelector('.product-details').addEventListener('change', () => {
        document.querySelector('.your-box .price').innerHTML = document.querySelector('.product-info-price .price').innerHTML;
    });
    eventsCategories('.category .card-title','Click on product from listing');
    eventsCategories('.tns-controls button','Click on arrows button listing');
    eventsCategories('.tns-nav button','Click on dots button listing');
    eventsCategories('.category .card .btn','Click on View Product button listing');
    if (window.matchMedia("(max-width: 768px)").matches) {
        document.querySelector('.bottom-actions__row .product-info-price').insertAdjacentHTML('afterbegin',`<div class="flex-price"><p class="your-price">Your price</p></div>`);
        document.querySelector('.flex-price .your-price').after(document.querySelector('.price-box'));
    }
    let build = setInterval(function() {
        if (document.querySelector('.your-box .price-label')&& document.querySelector('.bottom-actions__row .flex-price .price-original') && document.querySelector('.bottom-actions__row .flex-price .price-original').innerHTML != "") {
            clearInterval(build);
            console.log(document.querySelector('.bottom-actions__row .flex-price .price-original').innerHTML);
            document.querySelector('.your-box .price-label').innerHTML = `Your price <span>Was <span>${document.querySelector('.bottom-actions__row .flex-price .price-original').innerHTML}</span></span>`;
        }
    }, 100);
};

if (window.matchMedia("(max-width: 768px)").matches) {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP improvement exit intent mobile',
        'eventAction': 'loaded'
    });
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1709958,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_exit_intent_mobile');
} else {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — PDP improvement exit intent desktop',
        'eventAction': 'loaded'
    });
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1709958,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pdp_exit_intent_desktop');
}
