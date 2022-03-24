let styles = `
    <style>
    .list_subcategory .ais-RefinementList-item--selected a {     
        color: #bf0400;
    }
    html:first-child .list_type3 span {
        line-height: 1;
    }
    .list_type2 {
        width: 100%;
    }
    #hdr, #banner, .listing .category, .listing .subhead {
        display: none;
    }
    span.categoryTop, .listing span.categoryTop {
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        text-transform: capitalize;
        color: #171717;
        display: block;
        padding: 10px 0;
    }
    .result_for_search {
        color: #cd1109;
        font-size: 13px;
        font-weight: 700;
        display: block;
        padding: 10px 0;
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
    #search-box {
        width: calc(100% - 80px);
        position: relative;
    }
    .ais-SearchBox-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-sizing: border-box;
        background: #EEEEEE;
        border: 1px solid #C0C0C0;
        border-radius: 4px;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        padding: 10px 66px 10px 20px;
        color: #666666;
        height: auto;
        width: 100%;
        position: relative;
        z-index: 2;
    }
    .ais-SearchBox-submit {
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
        position: absolute;
        z-index: 3;
    }
    .ais-SearchBox-reset {
        display: none;
    }
    .ais-SearchBox-loadingIndicator {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1; 
        background: rgba(255,255,255,0.8);
//         display: none;
    }
    .ais-SearchBox-loadingIndicator img { 
        width: 30px;
        margin: auto;
        display: block;
        object-fit: contain;
        height: 100%;
    }
    #listing_container {
        padding: 10px;
        display: none;
        position: relative;
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
        z-index: 3;
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
        height: 100vh;
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
    #listing_container .justify-content-between {
        padding-top: 20px;
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
        width: 100%;
    }
    .header .nav li:last-child {
        display: none!important;
    }
    .header .nav a {
        background: none;
        padding: 4px 11px;
        margin: 8px 0;
        width: 100%;
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
    .list_subcategory li {
        width: calc(50% - 7.5px);
        margin: 5px 15px 10px 0;
        padding: 0;
        background: #FFFFFF;
        border: 1px solid #EEEEEE;
        box-sizing: border-box;
        border-radius: 4px;
    }
    .list_subcategory li:nth-child(2n+2) {
        margin-right: 0;
    }
    .list_subcategory .ais-RefinementList-list, .list_subcategory {
        margin: 0;
        display: flex;
        flex-wrap: wrap;
    }
    #manufacturer {
        position: relative;
    }
    #manufacturer .ais-RefinementList-list {
        max-height: 300px;
        overflow-y: auto;
    }
    #manufacturer .ais-RefinementList-list:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 48px;
        pointer-events: none;
        background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3))
    }
    .list_subcategory li a {
        min-height: 36px;
        padding: 8px;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
     .list_subcategory li a span {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 36px;
        word-break: break-word;
    }
    .list_subcategory li img {
        border: 1px solid #EEEEEE;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin-left: 4px;
        flex-shrink: 0;
        object-fit: contain;
        overflow: hidden;
    }
    .list_type1 {
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
        display: none;
        transition: all 0.3s ease; 
    }
    .popup_filter.active {
        display: inline-flex;
    }
    .popup_filter.active .popup_container{
        transform: translateY(0);
    }
    .popup_container {
        background: #FFFFFF;
        border-radius: 10px 10px 0px 0px;
        width: 100%; 
        margin-top: auto;
        transform: translateY(100px);
        transition: all 0.3s ease; 
        overflow-y: auto;
        max-height: 100%;
        height: auto;
    }
    .popup_header {
        padding: 12px;
        position: sticky;
        top: 0; 
        background-color: #fff;
        z-index: 1;
    }
    .btn_close {
        width: 24px;
        height: 24px; 
        background: url('https://conversionratestore.github.io/projects/medicalmega/img/close2.svg') no-repeat center / contain;
        margin-left: auto;
        display: block;
        border: none;
        margin-bottom: 4px;
    }
    .filter_content {
        padding: 0 40px 40px;
    }
    .popup_filter .title {
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
        opacity: 0;
        transition: opacity 0.3s ease; 
        display: none;
        // max-height: 60vh;
        // overflow-y: auto;
    }
    .select.active .select_dropdown {
        opacity: 1;
        display: block;
    }
    .select.active .select_current img {
        transform: scaleY(-1)
    }
    .select_dropdown li {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        transition: all 0.3s ease; 
        margin-top: 22px;
    }
    .ais-RefinementList-item--selected .check{
        background-image: url('https://conversionratestore.github.io/projects/medicalmega/img/check.svg')
    }
    .check {
        box-sizing: border-box;
        display: block;
        border: 2px solid #171717;
        width: 18px;
        height: 18px;
        margin-right: 15px;
        background: no-repeat center / cover;
        border-radius: 4px;
    }
    .filter_brands {
        margin-bottom: 20px;
    }
    .align-items-center {
        display: flex;
        align-items: center;
    }
    .flex-center-end {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .count_brand {
        color: #666666;
    }
    .list_type3 span img {
        width: 100%;
        height: 100%!important;
        object-fit: contain;
    }
    a#top-navigation {
        display: none!important;
    }
    .ais-Pagination-list {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .ais-Pagination-item  {
        border-right: 1px solid #171717;
    }
    .ais-Pagination-item.ais-Pagination-item--firstPage, .ais-Pagination-item.ais-Pagination-item--previousPage, .ais-Pagination-item.ais-Pagination-item--nextPage, .ais-Pagination-item.ais-Pagination-item--lastPage  {
        border-right: none;
    }
    .ais-Pagination-item:nth-last-child(3) {
        border-right: none;
    }
    .ais-Pagination-link {
        display: block;
        padding: 0 2px;
        margin: 0 2px;
        font-size: 11px; 
        line-height: 1;
    }
    .icon_burger {
        position: relative;
        z-index: 2;
    }
    #mm_per_page {
        min-width: 52px;
    }
    .ais-Pagination-item--disabled {
        display: none;
    }
    .pagination1 {
        padding-top: 15px;
    }
    .pagination2 {
        padding-bottom: 15px;
    }
    #stats-container {
        color: #3d3d3d;
        font-size: 11px;
        font-weight: 400;
        padding: 15px 0;
    }
    .page-result p {
        padding-right: 10px;
        font-size: 11px;
        font-weight: 700;
    }
    .ais-Pagination-item--selected a {
        font-weight: 700;
    }
    #listing_container.loading:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background: #fff url(https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif) no-repeat center / 30px;
    }
    .ais-RefinementList-showMore {
        background: transparent;
        border: none;
        text-decoration: underline;
        margin: 0 auto;
        display: block;
    }
    </style>`

let header = `
    <header class="header">
        <img src="https://conversionratestore.github.io/projects/medicalmega/img/menu.svg" alt="icon burger" class="icon_burger" data-button="menu">
        <div id="search-box"></div>
        <ul class="header_cart"></ul>
        <div class="nav-menu" data-item="menu">
            <div class="nav-menu_container">
                <div class="sticky-top">
                    <div class="justify-content-between">
                        <a href="/" class="link_logo"><img src="https://conversionratestore.github.io/projects/medicalmega/img/logo-2.png" class="logo"></a>
                        <img src="https://conversionratestore.github.io/projects/medicalmega/img/close.svg" class="btn_close" data-button="menu">
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

let optionMut = {
    childList: true,
    subtree: true
}

let requestAllCaterories = new Promise((resolve, reject) => {
    fetch(`/api/categories&limit=100`, headerFetch).then(res => res.json()).then(data => resolve(data))
})

const API_KEY = `e3a0cffec873466acf71806748550356`;
const APPLICATION_ID = `PXDJAQHDPZ`;

const requestOptions = {
    headers: {
      'X-Algolia-API-Key': `${API_KEY}`,
      'X-Algolia-Application-Id': `${APPLICATION_ID}`
    }, 
    method: 'GET'
}

const searchClient = algoliasearch(
    APPLICATION_ID,
    API_KEY,
);

const search = instantsearch({
    indexName: 'staging_products',
    routing: false,
    searchClient,
});

let actionDataLayer = '',
    labelDataLayer = '';

function pushDataLayer(action,label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    if (label) {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Search filters slide-in menu',
            'eventAction': `${action}`,
            'eventLabel': `${label}`
        });
    } else {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Search filters slide-in menu',
            'eventAction': `${action}`
        });
    }
}

function changeSelect() {  // ${changeSelect(event.target)}
                     
    document.querySelectorAll('.product-variant').forEach(select => {
        select.addEventListener('change', (e) => {
            e.stopImmediatePropagation();
            console.log(select)
            let parent = select.closest('.list_box2');
            let option = ``;
        
            let price = select.options[select.selectedIndex].dataset.price,
                variantId = select.options[select.selectedIndex].value,
                srcImg = select.options[select.selectedIndex].dataset.src,
                name = select.options[select.selectedIndex].innerText,
                qty = select.options[select.selectedIndex].dataset.qty;

                parent.querySelector(`.variant_tag span i`).innerHTML = price;
                parent.querySelector(`.product_img`).src = `https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/` + srcImg;
                parent.querySelector(`[name="product_variant_id"]`).value = variantId;
                parent.querySelectorAll(`.variant_tag span`)[0].innerHTML = `Sold By: ${name.replace('(Out of stock)','')}`;
                parent.querySelector(`.product-variant__quantity__select`).dataset.qty = qty;

                for (let n = 1; n <= +qty; n++) {
                    option = option + `<option value="${n}">${n}</option>`;
                }

                parent.querySelector(`.product-variant__quantity__select`).innerHTML = option;

            if (name.includes('Out of stock')) {
                parent.querySelector('.out-of-stock__box--pv').style.display = 'block';
                parent.querySelector('.product_quantity').style.display = 'none';
                parent.querySelector('.buynow2').style.display = 'none';
            } else {
                parent.querySelector('.out-of-stock__box--pv').style.display = 'none';
                parent.querySelector('.product_quantity').style.display = 'block';
                parent.querySelector('.buynow2').style.display = 'block';
            }
           
        })
    })
}

function subcategoryEvent(e) {
    e.stopImmediatePropagation();
    actionDataLayer =  `Click on subcategory icon`;
    pushDataLayer(actionDataLayer)
}

let count = 0;
let list = [], listCount = 0;

let mut = new MutationObserver(function (muts) {
    if (document.body != null && window.location.pathname.includes('/category') && count == 0) {
        mut.disconnect();
        count = 1;
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .hide, .altPayment {
                display: none!important;
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
            .list_type1 span {
                opacity: 0;
                width: 100%;
            }
            .list_type2 i {
                display: none;
            }
        </style>`)
    }
    mut.observe(document, optionMut);
    if (document.querySelectorAll('.product-variant') && document.querySelector('.product-variant') != null) {
        changeSelect()
    }
    mut.observe(document, optionMut);
    if (list.length > 0 && list != 'undefined' && list != []) {
        mut.disconnect();
        // console.log(' true')
        for (let i = 0; i <= list.length; i++) {
            console.log(list[i])
           
            document.querySelectorAll('.list_subcategory img').forEach(el => {
                if (list[i].name == el.alt) {
                    el.src = `https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${list[i].src}`
                }
            })
        }
    }

    // mut.observe(document, optionMut);
    if (document.querySelector('#sort-name .ais-SortBy-option') != null) {
        mut.disconnect();
        document.querySelector('#sort-name .ais-SortBy-option').setAttribute('disabled','')
       
        document.querySelector('#listing_container').classList.remove('loading');
      
        document.querySelector('#sort-name select').addEventListener('click', (e) => {
            actionDataLayer =  `Click on sort by field`;
            pushDataLayer(actionDataLayer)
        })
    }

})

mut.observe(document, optionMut);

window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styles);
    document.querySelector('#wrap').insertAdjacentHTML('afterbegin', header);

    //header
    document.querySelector('.header_cart').appendChild(document.querySelector('.shoppingcart.tooltip-cart'));

    document.querySelector('.shoppingcart a').addEventListener('click', () => {
        actionDataLayer =  `Click on cart button`;
        pushDataLayer(actionDataLayer)
    })
    if (document.querySelector('.topnav .signup') != null) {
        document.querySelector('.nav-menu_login').appendChild(document.querySelector('.topnav .signup'));
    }
    if (document.querySelector('.topnav .logout') != null) {
        document.querySelector('.nav-menu_login').appendChild(document.querySelector('.topnav .logout'));
    }

    document.querySelector('.sticky-top').after(document.querySelector('.nav'));
    document.querySelector('.nav-menu_login li a').insertAdjacentHTML('afterbegin','Hello, ');
    document.querySelector('.nav-menu_login li a').addEventListener('click', (e) => {
        actionDataLayer =  `Click on ${e.target.innerText.split(',')[1]} button in menu`;
        pushDataLayer(actionDataLayer)
    })
    document.querySelectorAll('.nav li').forEach(el => {
        if (el.classList.contains('hide-mobile')) {
            el.classList.remove('hide-mobile','hide-mobile-landscape')
        }
    })
    document.querySelector('.header .link_logo').addEventListener('click', (e) => {
        actionDataLayer =  `Click on logo`;
        pushDataLayer(actionDataLayer)
    })
    document.querySelectorAll('.header .nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            actionDataLayer =  `Click on menu categories for the User`;
            labelDataLayer =  e.target.innerText;
            pushDataLayer(actionDataLayer,labelDataLayer)
        })
    })

    document.querySelector('.header .icon_burger').addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        let popup = document.querySelector(`[data-item="${e.target.dataset.button}"]`);
        popup.classList.add('active')

        document.body.style.overflow = 'hidden';

        actionDataLayer = `Click on burger button`;
        labelDataLayer = 'Header';
        pushDataLayer(actionDataLayer,labelDataLayer)
    })

    let navMenu = document.querySelector('.nav-menu');

    navMenu.querySelector('.btn_close').addEventListener('click', (e) => {
        let popup = document.querySelector(`[data-item="${e.target.dataset.button}"]`);

        popup.classList.remove('active')
        document.body.style.overflow = 'inherit';

        actionDataLayer = 'Click on cross button';
        labelDataLayer = 'Menu'
        pushDataLayer(actionDataLayer,labelDataLayer)
    })

    navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-menu')) {
            actionDataLayer = `Click on the screen outside the menu`;
            labelDataLayer = 'Menu';
            pushDataLayer(actionDataLayer,labelDataLayer)
            navMenu.classList.remove('active')
            document.body.style.overflow = 'inherit';
        }
    })

    document.querySelector('.category_popular .title').after(document.querySelector('.altnav'))

    function viewAllCategories(boolean) {
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

    document.querySelector('.btn_all-category').addEventListener('click', () => {
        viewAllCategories(false)
        actionDataLayer = 'Click on view all categories';
        pushDataLayer(actionDataLayer)

    }); //open all category

    document.querySelector('.btn_back').addEventListener('click', () => {
        viewAllCategories(true);
        actionDataLayer = 'Click on back Main Menu button';
        pushDataLayer(actionDataLayer)
    }); //hide all category

    requestAllCaterories.then(data => {
        console.log(data)

        for (let key in data.categories) {
            if (data.categories[key].url) {
                document.querySelector('.category_popular .altnav').insertAdjacentHTML('beforeend',`<li><a href="${data.categories[key].url}" data-id="${data.categories[key].category_id}">${data.categories[key].title}</a></li>`)
            }
        }

        document.querySelectorAll('.category_popular .altnav a').forEach((el,index) => {
            if (index > 4) el.parentElement.hidden = true;
            el.addEventListener('click', (e) => {

                localStorage.setItem('idCategory', JSON.stringify(e.target.dataset.id))
                if (index < 5) {
                    actionDataLayer = 'Click on most popular categories items';
                } else {
                    actionDataLayer = 'Click on other categories items';
                }
                labelDataLayer = e.target.innerText;
                pushDataLayer(actionDataLayer,labelDataLayer)
            })
        })
    })

    //add elements listing
    if (window.location.pathname == '/') {
        document.querySelector('.homepage-container').insertAdjacentHTML('beforebegin', `<div id="listing_container" class="loading"></div>`);
    }
    if (document.querySelector('#mainbody') != null) {
        document.querySelector('#mainbody').insertAdjacentHTML('beforebegin', `<div id="listing_container" style="display: none;" class="loading"></div>`);
    }

    document.querySelector('#listing_container').insertAdjacentHTML('afterbegin',`
        <div class="list_subcategory"></div>
        <span class="result_for_search"></span>
        <div class="justify-content-between">
            <button type="button" class="btn_filter" data-button="popup_filter">Filters</button>
            <div class="btn_sort" id="sort-name"></div>
        </div>
        
        <div id="stats-container"></div>
        <div class="flex-center-end page-result">
            <p>Results Per Page: </p>
            <div id="mm_per_page" ></div>
        </div>
        <div class="pagination1 pagination"></div>
        <div id="additional-categories"></div>
        <div id="hits"></div>
        <div class="pagination2 pagination"></div>

        <div class="popup_filter" data-item="popup_filter">
            <div class="popup_container">
                <div class="popup_header">
                    <button type="button" class="btn_close" data-button="popup_filter"></button>
                    <h3 class="title">Filters</h3>
                </div>
                <div class="filter_content">
                    <div class="select filter_brands active">
                        <div class="select_current">Brands <img src="https://conversionratestore.github.io/projects/medicalmega/img/arrow_down.svg" alt="arrow icon"></div>
                        <div class="select_dropdown">
                            <div id="manufacturer"></div>
                        </div>
                    </div>
                    <div class="select filter_price">
                        <div class="select_current">Price <img src="https://conversionratestore.github.io/projects/medicalmega/img/arrow_down.svg" alt="arrow icon"></div>
                        <div class="select_dropdown">
                            <div id="price_group"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `)

    //select
    let selectCurrent = document.querySelectorAll('.select_current');

    selectCurrent.forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.classList.toggle('active');
            if (el.parentElement.classList.contains('active')) {
                if (el.parentElement.classList.contains('filter_price')) {
                    document.querySelector('.filter_brands').classList.remove('active');
                } else {
                    document.querySelector('.filter_price').classList.remove('active');
                }
            }
        })
    })

    //popup filters
    let popupFilter = document.querySelector('.popup_filter'),
        btnFilters = document.querySelector('.btn_filter');

    btnFilters.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        let popup = document.querySelector(`[data-item="${e.target.dataset.button}"]`);
        
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';

        actionDataLayer = `Click on ${e.target.innerText} button`;
        labelDataLayer = 'Filters'
        pushDataLayer(actionDataLayer,labelDataLayer)
    })
    
    popupFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup_filter')) {
            popupFilter.classList.remove('active')
            document.body.style.overflow = 'inherit';
        }
    })

    //hide popup filter
    popupFilter.querySelector('.btn_close').addEventListener('click', (e) => {
        document.querySelector(`[data-item="${e.target.dataset.button}"]`).classList.remove('active')
        document.body.style.overflow = 'inherit';

        actionDataLayer = 'Click on cross button';
        labelDataLayer = 'Filters'
        pushDataLayer(actionDataLayer,labelDataLayer)  
    });

    let categoryFacet = '*';
    let categoryCrumbs = '';
    let lvl = '';
    if (window.location.pathname.includes('/category')) {
        
        let categoriesLink = document.querySelectorAll('.category a');

        for (let i = 0; i < categoriesLink.length; i++) {
            if (i > 0) {
                categoryCrumbs = categoryCrumbs + categoriesLink[i].innerText + " > "
            }
            
           
            if (i == categoriesLink.length - 1) {
                console.log(categoryCrumbs)
                if (categoriesLink.length > 1) {
                    categoryFacet = `categories.lvl${i}:${categoryCrumbs + document.querySelector('.category b').innerText}`
                } 
                else {
                    categoryFacet = `categories.lvl${i}:${document.querySelector('.category b').innerText}`
                }
           
                console.log(i + " : " + document.querySelector('.category b').innerText + " : " + categoryFacet)
                lvl = categoryFacet.split(':')[0].split('lvl')[1];
 
            }
        }
    } else {
        categoryFacet = '*'
    }
    let lvlNew = +lvl + 1;

    search.addWidgets([
        instantsearch.widgets.configure({
            // facets: ["*"],
            attributesToSnippet: "*:5",
            snippetEllipsisText: "…",
            facetFilters: [categoryFacet]
        }),
        instantsearch.widgets.hitsPerPage({
            container: '#mm_per_page',
            items: [
            { label: '5', value: 5 },
            { label: '10', value: 10 },
            { label: '15', value: 15 },
            { label: '25', value: 25, default: true  },
            { label: '50', value: 50},
            { label: '100', value: 100 }
            ],
        }), 
        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: window.location.pathname.includes('/category') ? `Search in this category` : 'Search Our Store',
            loadingIndicator: false,
            searchAsYouType: false, 
            templates: {
                loadingIndicator: '<img src="https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif" alt="icon loading">',
            },
        }),
        instantsearch.widgets.hits({
            container: '#hits',
            // showLoadingIndicator: true,
            templates: {
                empty: `No Item Found`,
                item: (hit) => {
                    //change selects option
                 
                    function qty() {
                        let option = ``;
                        for (let n = 1; n <= +hit.qty; n++) {
                            option = option + `<option value="${n}">${n}</option>`;
                        }
                        return option
                    }
                    function optionBox() {
                        let option = ``;
                        for (let i = 0; i < hit.variants.length; i++) {
                            let variantsArr = hit.variants[i];
                            option = `<option value="${variantsArr.pv_id}" data-price="${variantsArr.price}" data-src="${variantsArr.image}" data-qty="${hit.qty}"> ${variantsArr.extra} ${variantsArr.in_stock==false? ' (Out of stock)':''} </option>` + option;
                        }
                        return option
                    }

                    let boxItem = `
                        <fieldset class="list_box2">
                            <div class="list_type3">
                                <span><a href="https://medicalmega.com/product/${hit.seo}"><img class="product_img" alt="${hit.name}" src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${hit.image}"></a></span>
                            </div>
                            <div class="list_type4">
                                <h3><a href="https://medicalmega.com/product/${hit.seo}">${hit.name}</a></h3>
                                <form action="https://medicalmega.com/cart.html" method="post" style="position: relative;">
                                    <span style="vertical-align: middle; display: inline-block; width: 290px; line-height: 19px;" class="p product-variant__info-section">
                                        <span style="display:block; font-size:12px;">Manufacturer: ${hit.manufacturer}</span>
                                        <span class="variant_tag">
                                            <span style="display:block"; font-size:12px;">Sold By: ${hit.extra}</span>
                                            <span style="display:block; font-size:12px;">Item Number: ${hit.item_num}</span>
                                            <span style="margin-right:100px; float:left;display:${hit.in_stock==false?'none':'block'};">Price: <i style="color:#CD1109; font-style:normal;">${hit.price}</i></span>
                                        </span>
                                    </span>
                                    <span style="vertical-align: top; display: inline-block; width: 130px; line-height: 19px;" class="p product-variant__buy-box">
                                        <span class="product_quantity nostyle" style="display:${hit.in_stock==false?'none':'block'};">
                                            <select name="quantity" style="width:42px; margin:6px 10px 8px 0; height:20px; float:right;" class="product-variant__quantity__select" data-qty="${hit.qty}">${qty()}</select>
                                        </span>
                                        <input type="image" name="register_user" class="buynow2" src="https://medicalmega.com/images/buy-now.gif" alt="Submit" style="display:${hit.in_stock==false?'none':'block'};">
                                        <div class="out-of-stock__box--pv" style="display:${hit.in_stock==false?'block':'none'}; ">
                                            <p class="out-of-stock__message--pv">Out Of Stock</p>
                                        </div>
                                    </span>
                                    <p style="clear:both;display:${hit.variants.length>1?'block':'none'}">
                                        <label style="width:60px;display:block;float:left;font-size:15px;">Options:</label>
                                        <select class="product-variant product-variant__options-box__select" style="font-size:11px;float:left;margin-top:2px;">
                                            ${optionBox()}
                                        </select>
                                    </p>
                                    <input type="hidden" name="product_variant_id" value="${hit.pv_id}">
                                    <input type="hidden" name="product_id" value="${hit.objectID}">
                                    <input type="hidden" name="add_to_cart" value="variant">
                                </form>
                            </div>
                        </fieldset>
                        <br>
                    `

                    return boxItem
                }
            },
        }),

        instantsearch.widgets.sortBy({
            container: '#sort-name',
            items: [
                { label: 'Sort by', value: 'staging_products', selected: true, disable: true },
                { label: 'Product Name ASC', value: 'staging_products' },
                { label: 'Product Name DESC', value: 'staging_products_name_desc' },
            ],
        }),
        instantsearch.widgets.pagination({
            container: '.pagination1',
            // totalPages: 9,
            // showFirst: false,
            // showLast: false,
            // paginationLimitedTo: '4',
            // offset: '4',
            templates: {
                // previous: 'Prev',
                // next: 'Next',
                item: (data) => {
                    console.log(data)
                }
            },
        }),
        instantsearch.widgets.pagination({
            container: '.pagination2',
        }),
        instantsearch.widgets.stats({
            container: '#stats-container',
            templates: {
                text(data) {
                    let hits = data.nbHits;
                    let to = data.hitsPerPage * (data.page + 1); 
            
                    if (data.hasManyResults) {
                        return `Displaying <b>${data.page + 1}</b> to <b>${to > hits?hits:to}</b> (of <b>${hits}</b> products)`;
                    } else if (data.hasOneResult) {
                        return `Displaying <b>${data.page + 1}</b> to <b>${to > hits?hits:to}</b> (of <b>${hits}</b> products)`;
                    } else {
                        return `no result`;
                    }
                },
            },
        }),
        instantsearch.widgets.refinementList({
            container: '#manufacturer',
            attribute: 'manufacturer',
            limit: 200,
            sortBy: ['name:asc'],
            templates: {
                item: (data) => {
                    actionDataLayer = "Click on one of the brand items on filters";
                    let checkbox = `
                        <label class="align-items-center" onclick="pushDataLayer(${actionDataLayer})" > 
                            <span class="check"></span>
                            <span class="check_text">${data.label} <span class="count_brand">(${data.count})</span></span>
                        </label>
                    `;
                
                    return checkbox
                },
            },
        }),
        instantsearch.widgets.refinementList({
            container: '#price_group',
            attribute: 'price_group',
            limit: 10,
            sortBy: ['isRefined:asc'],

            templates: {
                item: (data) => {
                    actionDataLayer = "Click on one of the price items on filters";
                    let checkbox = `
                        <label class="align-items-center" onclick="pushDataLayer(${actionDataLayer})">
                            <span class="check"></span>
                            <span class="check_text">${data.value} <span class="count_brand">(${data.count})</span></span>
                        </label>
                    `;
                
                    return checkbox
                },
            },

        }),
        
        instantsearch.widgets.refinementList({
            container: `.list_subcategory`,
            attribute: categoryFacet.split(':')[0].replace(lvl,'') + lvlNew,
            // root: categoryFacet.split(':')[0],
            // cssClasses: {
            //     root: 'ais-RefinementList'
            // },
            showMore: true,
            limit: 10,
            // sortBy: ['isRefined'],
            transformItems(items) {
                return items.filter(item => item.label.includes(categoryFacet.split(':')[1])) 
              
            },
            templates: {
                item: (data) => {
                    if (data.label.includes(categoryFacet.split(':')[1])) {
                        let valueArr = data.value.split(' > ');
                        let valueLast = valueArr[valueArr.length - 1];

                        console.log(data)
                        fetch(`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/staging_products?query=${valueLast}&hitsPerPage=1&page=0`, requestOptions).then(res => res.json()).then(dataItem => {
                            console.log(dataItem) 
                            list.push({
                                "src" : dataItem.hits[0].image,
                                "name": dataItem.query, 
                            })
                            
                        });
                        

                        return `
                            <a href="${window.location.href + "/" + valueLast.toLowerCase().split(' ').join('-')}" onclick="subcategoryEvent()">
                                <span>${valueLast}</span>
                                <img src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/dummyimage.jpg" alt="${valueLast}">
                            </a>
                        `
                    } 
                }
            },

        }),
    ]); 

    search.start();

    document.querySelector('.ais-SearchBox-submit').innerHTML = `Search`;

    function inputChange() {
        let value = document.querySelector('#search-box input').value;
        document.querySelector('.result_for_search').innerHTML = `Search result for '${value}'`;
        
        if (!window.location.pathname.includes('/category')) {
            if (value.length > 0) {
                document.querySelector('#listing_container').style.display = 'block';
                if (window.location.pathname == '/') {
                    document.querySelector('.homepage-container').style.display = 'none';
                }
                if (document.querySelector('#mainbody') != null) {
                    document.querySelector('#mainbody').style.display = 'none';
                }
        
            } else {
                document.querySelector('#listing_container').style.display = 'none';
                if (window.location.pathname == '/') {
                    document.querySelector('.homepage-container').style.display = 'block';
                }
                if (document.querySelector('#mainbody') != null) {
                    document.querySelector('#mainbody').style.display = 'block';
                }
            }
        } else {
            document.querySelector('#listing_container').style.display = 'block';
            if (document.querySelector('#mainbody') != null) {
                document.querySelector('#mainbody').style.display = 'none';
            }
        }
        
    }

    //add text search result
    document.querySelector('#search-box input').addEventListener('click', (e) => {
        actionDataLayer = 'Click on input search';
        pushDataLayer(actionDataLayer)  
    })

    document.querySelector('#search-box input').addEventListener('keypress', (e) => {
        if (e.keyCode == '13') {
            actionDataLayer = 'Click on Enter submit search';
            pushDataLayer(actionDataLayer);  
            inputChange()
        }
    })

    document.querySelector('.ais-SearchBox-submit').addEventListener('click', (e) => {
        actionDataLayer = 'Click on submit search';
        pushDataLayer(actionDataLayer);  
        inputChange()
    })

    if (window.location.pathname.includes('/category')) {
        document.querySelector('#listing_container').style.display = 'block';
        document.querySelector('#mainbody').style.display = 'none';
        document.querySelector('.list_subcategory').before(document.querySelector('.listing .categoryTop'));
    }

};

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Search filters slide-in menu',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1483840,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'search_filters_slide_in_menu');
