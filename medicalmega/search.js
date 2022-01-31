let styles = `
    <style>
    #hdr, #banner, .listing .category, .listing .subhead {
        display: none;
    }
    .listing span.categoryTop {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        text-transform: capitalize;
        color: #171717;
        padding-left: 0;
    }
    #wrap {
        padding-top: 50px;
    }
    .header * {
        box-sizing: border-box;
        clear: both;
    }
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9999;
        background-color: #fff;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
        padding: 6px 20px;
        box-sizing: border-box;
    }
    input#search_key {
        box-sizing: border-box;
        background: #EEEEEE;
        border: 1px solid #C0C0C0;
        border-radius: 4px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        padding: 10px 20px;
        color: #666666;
        height: auto;
        width: 100%;
    }
    .search-box__button {
        text-indent: 1px;
        width: fit-content;
        background: linear-gradient(180deg, #E44640 0%, #C11008 100%);
        border: 1px solid #780F11;
        border-radius: 4px;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: #FFFFFF;
        padding: 7px;
        top: 50%;
        transform: translateY(-50%);
        right: 4px;
    }
    .search-box__button:before {
        content: none;
    }
    .shoppingcart a {
        margin: 0;
        display: block;
        color: transparent;
        width: 24px;
        height: 24px;
    }
    .search {
        width: calc(100% - 24px - 16px - 24px - 16px);
    }
    .search dd {
        width: 100%;
    }
    .shoppingcart {
        background-image: url('https://conversionratestore.github.io/projects/medicalmega/img/shopping_cart.svg');
        background-size: contain;
        height: 24px;
        width: 24px;
        position: relative;
    }
    .by_num {
        color: transparent;
        position: absolute;
        top: -1px;
        right: 50%;
        transform: translateX(50%);
        pointer-events: none;
    }
    .by_num span {
        font-weight: bold;
        font-size: 11px;
        line-height: 11px;
        text-align: center;
        color: #C23D31;
    }
    .nav-menu {
        opacity: 0;
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
    }
    .nav-menu.active {
        opacity: 1;
        pointer-events: auto;
    }
    .nav-menu.active .nav-menu_container {
        transform: translateX(0)
    }
    .nav-menu_container {
        max-width: 315px;
        width: 100%;
        height: 100%;
        background: #fff;
        overflow-y: auto;
        transition: all 0.3s ease;
        transform: translateX(-100px);
    }
    .nav-menu_login li {
        background: url("https://conversionratestore.github.io/projects/medicalmega/img/user.svg") no-repeat left center / 28px;
        padding-left: 36px;
        line-height: 28px;
        margin-top: 20px;
    }
    .nav-menu_login li a {
        font-weight: bold;
        font-size: 16px;
        line-height: 28px;
        color: #171717;
    }
    .nav span, .nav span span {
        background: none;
    }
    .sticky-top {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: #fff;
        padding: 12px 12px 16px 20px;
        border-bottom: 1px solid #C0C0C0;
    }
    .justify-content-between {
        display: flex;
        justify-content: space-between;
    }
    .header .nav {
        padding: 12px 0 20px;
        width: 100%;
        border-bottom: 1px solid #C0C0C0;
    }
    .header .nav li {
        clear: both;
    }
    .header .nav li:last-child {
        display: none!important;
    }
    .header .nav a {
        background: none;
        padding: 4px 11px;
        margin: 8px 0;
        display: block;
        font-weight: normal;
        font-size: 18px;
        line-height: 28px;
        text-transform: uppercase;
        color: #171717;
    }
    .header .nav a:hover span{
        background: none!important;
        color: #C23D31;
    }
    .category_popular { 
        padding: 24px 0 11px;
        border-bottom: 1px solid #C0C0C0;
    }
    .category_popular .title {
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        color: #666666;
        padding: 0 20px;
        margin-bottom: 16px;
    }
    .category_popular .altnav {
        width: 100%;
        padding: 0 20px;
        margin: 0;
        background: none;
    }
    .category_popular .altnav li a {
        color: #171717;
        font-size: 16px;
        padding: 7px 0;
        width: 100%;
        display: block;
        font-weight: bold;
    }
    .category_popular .altnav li a:hover {
        color: #C23D31;
    }
    .category_popular .altnav li {
        width: 100%;
        border: none;
        line-height: 20px;
        margin: 0;
    }
    .btn_all-category, .btn_back  {
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color: #666666;
        width: 100%;
        text-align: left;
        border: none;
    }
    .btn_back {
        z-index: 1;
        position: sticky;
        top: 110px;
        padding: 14px 20px 14px 52px;
        border-bottom: 1px solid #C0C0C0;
        background: #fff url('https://conversionratestore.github.io/projects/medicalmega/img/arrow_forward.svg') no-repeat left 20px center / 24px;
    }
    .btn_all-category {
        padding: 14px 52px 14px 20px;
        background: url('https://conversionratestore.github.io/projects/medicalmega/img/arrow_forward-right.svg') no-repeat right 20px center / 24px;   
    }
    .menu_footer {
        padding: 25px 20px 0;
    }
    .menu_footer p {
        font-weight: 400;
        font-size: 12px;
        line-height: 23px;
        color: #666666;
        margin-bottom: 21px;
    }
    .menu_footer a {
        text-decoration: underline;
        color: #171717;
    }
    .listing li {
        width: calc(50% - 7.5px);
        margin: 5px 15px 10px 0;
        padding: 0;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .listing li:nth-child(2n+2) {
        margin-right: 0;
    }
    .listing ul {
        margin: 0
    }
    .listing li a {
        padding: 8px;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .listing li img {
        border: 1px solid #EEEEEE;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-left: 4px;
        flex-shrink: 0;
    }
    .list_type1 {
        width: 100%;
    }
    .list_type1 span {
        opacity: 0;
        text-align: right;
        width: 100%;
    }
    .list_type2 {
        padding-right: 0px;
    }
    .list_type2 label {
        font-weight: 400;
        width: auto!important;
        font-size: 12px;
        padding-right: 8px;
    }
    .list_type1 p {
        float: right;
        position: relative;
        width: calc(50% - 7.5px);
        margin-left: 15px;
    }
    .list_type1 p {
        display: none;
    }
    .btn_sort {
        width: calc(50% - 7.5px);
    }
    .btn_sort select {
        height: 30px;
        border: 1px solid #666666;
        border-radius: 4px;
        margin: 0;
        width: 100%!important;
        padding: 0 7px;
     }
    .btn_filter {
        width: calc(50% - 7.5px);
        background: #171717;
        border-radius: 4px;
        line-height: 30px;
        border: none;
        font-weight: bold;
        font-size: 12px;
        text-align: center;
        color: #FFFFFF;
    }
    .popup_filter {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0; 
        height: 100%; 
        width: 100%;
        background: rgba(0,0,0,0.5);
        display: inline-flex;
        opacity: 0;
        pointer-events: none; 
        transition: all 0.3s ease; 
    }
    .popup_filter.active {
        opacity: 1;
        pointer-events: auto; 
    }
    .popup_filter.active .popup_container{
        transform: translateY(0);
    }
    .popup_container {
        background: #FFFFFF;
        border-radius: 10px 10px 0px 0px;
        width: 100%; 
        margin-top: auto;
        padding: 12px;
        transform: translateY(100px);
        transition: all 0.3s ease; 
        overflow-y: auto;
        max-height: 100%;
    }
    .btn_close {
        width: 24px;
        height: 24px; 
        background: url('https://conversionratestore.github.io/projects/medicalmega/img/close2.svg') no-repeat center / contain;
        margin-left: auto;
        display: block;
        border: none;
    }
    .filter_content {
        padding: 4px 28px 28px;
    }
    .filter_content .title {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        text-transform: capitalize;
    }
    .select_current {
        border-bottom: 1px solid #C0C0C0;
        padding: 10px 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #666666;
        display: flex; 
        justify-content: space-between;
    }
    .select_current img {
        width: 12px;
        hegith: 12px;
        transition: all 0.3s ease; 
    }
    .select_dropdown {
        height: 0;
        opacity: 0;
        pointer-events: none;
        transition: height 0.3s ease; 
    }
    .select.active .select_dropdown {
        height: auto;
        opacity: 1;
        pointer-events: auto;
    }
    .select.active .select_dropdown li {
        margin-top: 22px;
    }
    .select.active .select_current img {
        transform: scaleY(-1)
    }
    .select_dropdown li {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        transition: all 0.3s ease; 
    }
    .checkbox {
        display: none;
    }
    .checkbox:checked ~ .check {
        background-image: url('https://conversionratestore.github.io/projects/medicalmega/img/check.svg')
    }
    .check {
        display: block;
        border: 2px solid #171717;
        width: 18px;
        height: 18px;
        margin-right: 15px;
        background: no-repeat center / 100%;
        border-radius: 4px;
    }
    .filter_brands {
        margin-bottom: 20px;
    }
    .align-items-center {
        display: flex;
        align-items: center;
    }
    .count_brand {
        color: #666666;
    }
    </style>`

let header = `
    <header class="header">
        <img src="https://conversionratestore.github.io/projects/medicalmega/img/menu.svg" alt="icon burger" class="icon_burger">
        <ul class="header_cart"></ul>
        <div class="nav-menu">
            <div class="nav-menu_container">
                <div class="sticky-top">
                    <div class="justify-content-between">
                        <img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-2.png" class="logo">
                        <img src="https://conversionratestore.github.io/projects/medicalmega/img/close.svg" class="btn_close" >
                    </div>
                    <ul class="nav-menu_login"></ul>
                </div>
                <button type='button' class="btn_back" hidden>Main Menu</button>
                <div class="category_popular">
                    <p class="title">Most Popular Categories</p>
                    <ul class="altnav"></ul>
                    <button type='button' class="btn_all-category">View All Categories</button>
                </div>
                <div class="menu_footer">
                    <p>Local Phone #   <a href="#" class="tel:17182084380">1-718-208-4380</a></p>
                    <p>Toll Free Phone # <a class="tel:18556336342">1-855-MED-MEGA (633-6342)</a></p>
                </div>  
            </div>
        </div>
    </header>`;

let brandsFilter = [],
    priceRange = [];

let idCategory = '';

let headerFetch = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: "GET",
}
// function pushDataLayer(action,label) {
//     console.log(action + " : " + label)
//     window.dataLayer = window.dataLayer || [];
//     dataLayer.push({
//         'event': 'event-to-ga',
//         'eventCategory': 'Exp: Easy reorder desktop',
//         'eventAction': `${action}`,
//         'eventLabel': `${label}`
//     });
// }

document.body.insertAdjacentHTML('afterbegin', styles);
document.querySelector('#wrap').insertAdjacentHTML('afterbegin', header);
document.querySelector('.header_cart').appendChild(document.querySelector('.shoppingcart.tooltip-cart'));
document.querySelector('.header .icon_burger').after(document.querySelector('.search.search-box'));
if (document.querySelector('.topnav .signup') != null) {
    document.querySelector('.nav-menu_login').appendChild(document.querySelector('.topnav .signup'));
}
if (document.querySelector('.topnav .logout') != null) {
    document.querySelector('.nav-menu_login').appendChild(document.querySelector('.topnav .logout'));
}

document.querySelector('.sticky-top').after(document.querySelector('.nav'));
document.querySelector('.nav-menu_login li a').insertAdjacentHTML('afterbegin','Hello, ');
document.querySelectorAll('.nav li').forEach(el => {
    if (el.classList.contains('hide-mobile')) {
        el.classList.remove('hide-mobile','hide-mobile-landscape')
    }
})

document.querySelector('.category_popular .title').after(document.querySelector('.altnav'))

let requestAllCaterories = fetch(`/api/categories&limit=100`, headerFetch).then(res => res.json()).then(data => {
    console.log(data)
    for (let key in data.categories) {
        if (data.categories[key].url) {
            document.querySelector('.category_popular .altnav').insertAdjacentHTML('beforeend',`<li><a href="${data.categories[key].url}" data-id="${data.categories[key].category_id}">${data.categories[key].title}</a></li>`)
        }
    }
    document.querySelectorAll('.category_popular .altnav li').forEach((el,i) => {
        if (i > 4) {
            el.hidden = true;
        }
    })
    
    idCategory = document.querySelector(`.category_popular li a[href="${window.location.href}"]`).dataset.id;
})

function toggleCategory(boolean) {
    document.querySelectorAll('.category_popular .altnav li').forEach( (el, i) => {
        if (i > 4) {
            el.hidden = boolean;
        }
    })
    document.querySelector('.btn_back').hidden = boolean;
    if (boolean == false) {
        document.querySelector('.category_popular .title').innerHTML = 'All Categoties';
        document.querySelector('.btn_all-category').hidden = true;
        document.querySelector('.nav-menu .nav').hidden = true;
    } else {
        document.querySelector('.category_popular .title').innerHTML = 'Most Popular Categories';
        document.querySelector('.btn_all-category').hidden = false;
        document.querySelector('.nav-menu .nav').hidden = false;
    }
}

document.querySelector('.btn_all-category').addEventListener('click', () => toggleCategory(false)); //open all category
document.querySelector('.btn_back').addEventListener('click', () => toggleCategory(true)); //hide all category

document.querySelector('.icon_burger').addEventListener('click', () => document.querySelector('.nav-menu').classList.add('active'));
document.querySelector('.btn_close').addEventListener('click', () => document.querySelector('.nav-menu').classList.remove('active'));
document.querySelector('.nav-menu').addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-menu')) {
        document.querySelector('.nav-menu').classList.remove('active')
    }
});

//listing
if (window.location.pathname.includes('/category')) {
    document.querySelectorAll('.listing p').forEach((el,i) => {
        if (el.innerText.toLowerCase().includes(document.querySelector('.listing .categoryTop').innerText.toLowerCase())) {
            el.style.display = 'none';
        }
    })
    Promise.all([requestAllCaterories]).then(res => {
        fetch(`/api/products&offset=0&is_featured=0&ctoken=${mm.ctoken}&category=${idCategory}&sort=${document.querySelector('.btn_sort select').value}&with_filters=1`, headerFetch).then(res => res.json()).then(data => {
            console.log(data)
            let dataBrand = data.filters.brands,
                dataPrices = data.filters.prices;

            for (let i = 0; i < dataBrand.length; i++) {
                document.querySelector('.filter_brands .select_dropdown').insertAdjacentHTML('beforeend',`<li><label class="align-items-center"><input type="checkbox" data-option="${dataBrand[i].brand_id}" class="checkbox"><span class="check"></span><span>${dataBrand[i].brand_name} <span class="count_brand">(${dataBrand[i].products_count})</span></span></label></li>`)
            }
            for (let i = 0; i < dataPrices.length; i++) {
                document.querySelector('.filter_price .select_dropdown').insertAdjacentHTML('beforeend',`<li><label class="align-items-center"><input type="checkbox" data-option="${dataPrices[i].price_range}" class="checkbox"><span class="check"></span><span>${dataPrices[i].name} <span class="count_brand">(${dataPrices[i].products_count})</span></span></label></li>`)
            }
        })
    })

    document.querySelectorAll('#search_c_id option').forEach((el,i) => {
        if (el.innerText == document.querySelector('.listing span.categoryTop').innerText) {
            fetch(`/api/products&offset=0&limit=100&is_featured=0&ctoken=${mm.ctoken}&category=${el.value}`, headerFetch).then(res => res.json()).then(data => {

                let products = data.products;
                console.log(data)

                document.querySelectorAll('.listing li').forEach((el,index) => {
                    el.querySelector('a').insertAdjacentHTML('beforeend',`<img src="" alt="">`)

                    let subcategory = el.querySelector('a').innerText.split(' ')[0];

                    for (let i = 0; i < products.length; i++) {
                        if (products[i].title.includes(subcategory) ) {
                            if (el.getAttribute('data-index-products') == null) {
                                el.setAttribute('data-index-products', i)
                            } else {
                                el.setAttribute('data-index-products', el.getAttribute('data-index-products') + ', ' + i )
                            }
                        }
                    }
                    let randomArray = el.getAttribute('data-index-products').split(', ');
                    let randomNum = randomArray[Math.floor(Math.random()*randomArray.length)]

                    el.querySelector('img').setAttribute('src', products[randomNum].variants[0].image_url)
                    el.querySelector('img').setAttribute('alt', products[randomNum].title)
                    console.log(randomNum)
                })
            })
        }
    })

    document.querySelector('.list_type1 p').insertAdjacentHTML('beforebegin', `
    <div class="justify-content-between">
        <button type="button" class="btn_filter" data-button="popup_filter">Filters</button>
        <div class="btn_sort">
            <select>
                <option value="">Sort by</option>
                <option value="+name">Product Name ASC</option>
                <option value="-name">Product Name DESC</option>
            </select>
        </div>
    </div>`)

    // function checkSelected() {
    //     if (document.querySelector('.list_type1 select').value != '') {
    //         document.querySelector('.list_type1 label').style.opacity = '0'
    //     } else {
    //         document.querySelector('.list_type1 label').style.opacity = '1'
    //     }
    // }
    // checkSelected()
    // document.querySelector('.list_type1 select').addEventListener('change', () => checkSelected())
    document.querySelector('.list_box1 ').style.marginBottom = '-18px!important;';

    document.body.insertAdjacentHTML('beforeend',`<div class="popup_filter" data-item="popup_filter">
        <div class="popup_container">
            <button type="button" class="btn_close" data-button="popup_filter"></button>
            <div class="filter_content">
                <h3 class="title">Filters</h3>
                <div class="select filter_brands active">
                    <div class="select_current">Brands <img src="https://conversionratestore.github.io/projects/medicalmega/img/arrow_down.svg" alt="arrow icon"></div>
                    <ul class="select_dropdown"></ul>
                </div>
                <div class="select filter_price">
                    <div class="select_current">Price <img src="https://conversionratestore.github.io/projects/medicalmega/img/arrow_down.svg" alt="arrow icon"></div>
                    <ul class="select_dropdown"></ul>
                </div>
            </div>
        </div>
    </div>`)

    document.querySelectorAll('[data-button]').forEach(button => {
        button.addEventListener('click', () => document.querySelector(`[data-item="${button.dataset.button}"]`).classList.toggle('active'))
    })
    
    let selectCurrent = document.querySelectorAll('.select_current');

    selectCurrent.forEach(el => {
        el.addEventListener('click', () => el.parentElement.classList.toggle('active')) 
    })

    //get products on categories and brand
    // fetch(`/api/products&offset=0&limit=100&is_featured=0&brand=477,1668&ctoken=${mm.ctoken}&category=11210&price_range=0_20`, {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     method: "GET",
    // }).then(res => res.json()).then(data => {
    //     console.log(data)
    // })

    //get products on categories
    // fetch(`/api/products&offset=0&limit=100&is_featured=0&ctoken=${mm.ctoken}&category=11216`, {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     method: "GET",
    // }).then(res => res.json()).then(data => {
    //     console.log(data)
    // })

    function setFilter(item, arrFilter) {
        document.querySelectorAll(item).forEach(checkbox => {
            // checkbox.addEventListener('click', () => {
                if (checkbox.checked == true) {
                    console.log(checkbox.dataset.option)
                    arrFilter.push(checkbox.dataset.option) 
                } 
            // })
        })
    }
    function getProductsForFilters(brandsFilter, priceRange) {
        let perPage = document.querySelector('[name="mm_per_page"]').value;

        console.log(brandsFilter.toString() + " (id brands)")
        console.log(priceRange.toString() + " (price range)")
        console.log(idCategory + " (id category)")

        fetch(`/api/products&offset=0&limit=${perPage}&is_featured=0&brand=${brandsFilter}&ctoken=${mm.ctoken}&category=${idCategory}&price_range=${priceRange}&sort=${document.querySelector('.btn_sort select').value}&with_filters=1`, headerFetch).then(res => res.json()).then(data => {
            console.log(data)
        })
    }

    document.querySelector('.popup_filter .btn_close').addEventListener('click', (e) => {
        brandsFilter = [];
        priceRange = [];
        setFilter('.filter_brands .checkbox', brandsFilter)
        setFilter('.filter_price .checkbox', priceRange)
           
        getProductsForFilters(brandsFilter.toString(),priceRange.toString())
      
    })
    document.querySelector('[name="mm_per_page"]').addEventListener('input', () => {
        getProductsForFilters(brandsFilter, priceRange)
    })

    document.querySelector('.btn_sort select').addEventListener('input', (e) => {
        getProductsForFilters(brandsFilter.toString(),priceRange.toString())
    })
}

// let optionMut = {
//     childList: true,
//     subtree: true,
//     attributes: true
// }

// let mut = new MutationObserver(function (muts) {
//     if (window.location.pathname.includes('/category') && idCategory != '' && document.querySelector('.popup_filter') != null) {
//         mut.disconnect();
      
//     }
   
// })
// mut.observe(document, optionMut);
