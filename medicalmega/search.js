let styles = `
    <style>
   #pagination {
        padding-top: 15px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        }
        .btn_paginator {
            background: #fff;
            color: #000;
            font-size: 11px;
            border: none;
            margin: 0 4px;
        }
        .list_type2 {
            width: 100%;
        }
     #pagination li,  #pagination i {
        cursor: pointer;
        font-size: 11px;
        color: #000;
        margin: 0!important;
        padding: 0 4px!important;
        border: none!important;
        position: relative;
        font-weight: 400;
        width: fit-content;
        line-height: 1;
        }
        #pagination li:last-child:after {
            content: none;
        }
         #pagination li:after,  #pagination i:after {
            content: '|';
            font-size: 11px;
            color: #000;
            margin: 0 -4px 0 4px
         }
          #pagination li.ellipsis-after:after {
            content: '...';
          }
          #pagination li.after-not:after {
          content: none;
          }
            #pagination li.ellipsis-before:before {
            content: '...';
            font-size: 11px;
            color: #000;
            margin: 0 4px 0 -4px;
          }
        #pagination i {
            paddin: 0;
        }
    
     #pagination li.active {
        font-weight: 700; 
        }
    .hide, .altPayment {
        display: none!important;
        }
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
        min-height: 36px;
        padding: 8px;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
     .listing li a span {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 36px;
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
        padding: 12px;
        transform: translateY(100px);
        transition: all 0.3s ease; 
        overflow-y: auto;
        max-height: 100%;
        height: auto;
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
        opacity: 0;
        transition: opacity 0.3s ease; 
        display: none;
        max-height: 60vh;
        overflow-y: auto;
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
    .checkbox {
        display: none;
    }
    .checkbox:checked ~ .check {
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
    .count_brand {
        color: #666666;
    }
    .list_type3 span img {
        width: 100%;
        height: 100%!important;
        object-fit: contain;
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

let optionMut = {
    childList: true,
    subtree: true
}

const message = {
    loading: 'loading',
    success: 'Check!',
    failure: 'Error..'
}

let requestAllCaterories = new Promise((resolve, reject) => {
    fetch(`/api/categories&limit=100`, headerFetch).then(res => res.json()).then(data => resolve(data))
})

let countMut = 0;

let totalCountProducts = ''; //total count products

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

function checkedFilter(item, arrFilter) {
    document.querySelectorAll(item).forEach(checkbox => {
        if (checkbox.checked == true) {
            arrFilter.push(checkbox.dataset.option)
        }
    })
}

let mut = new MutationObserver(function (muts) {
    if (document.querySelector('.listing .list_box2') != null && document.querySelector('.listing .list_box2').parentElement.className != 'products_list') {
        mut.disconnect();
        document.querySelectorAll('.listing .list_box2').forEach(el => {
            if (el.parentElement.className != 'products_list') el.remove()
        })
    } 
    mut.observe(document, optionMut);
    if (document.body != null && window.location.pathname.includes('/category')) {
        mut.disconnect();
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
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
                text-align: right;
                width: 100%;
            }
            .list_type2 i {
                display: none;
            }
        </style>`)
    }
    mut.observe(document, optionMut);
    
    if (countMut == 0 && document.querySelector('.categoryTop') != null && document.querySelector('#search_c_id') != null && document.querySelector('.listing li') != null && window.location.pathname.includes('/category')) {
        mut.disconnect();
        countMut = 1;
        document.querySelectorAll('#search_c_id option').forEach(option => {
            let title = option.innerHTML.split('_').join('').split('|').join('').split('&nbsp;').join('');
            if (document.querySelector('.categoryTop').innerText == title) {
                console.log(option.value)
                localStorage.setItem('idCategory', JSON.stringify(option.value))
                idCategory = option.value;
                fetch(`/api/products&offset=0&limit=100&is_featured=0&ctoken=${mm.ctoken}&category=${idCategory}&with_filters=1`, headerFetch).then(res => res.json()).then(data => {
                    console.log(data)
                    let products = data.products;
                    document.querySelectorAll('.listing li').forEach((el,index) => {
                        let randomArray = [];
                        let subcategory = el.innerText;
                        let firstLetterCategory = el.innerText.split(' ')[0];
                        if (el.querySelector('a') != null) {
                            el.querySelector('a').setAttribute('title', subcategory)
                            el.querySelector('a').innerHTML = `<span>${subcategory}</span>`;
                        }
        
                        for (let j = 0; j < products.length; j++) {
                            let title = products[j].title.toString();
                            if (title.includes(firstLetterCategory) ) {
                                randomArray.push(j)
                            }
                        }
        
                        if (randomArray.length > 0) {
                            if (el.querySelector('a') != null) {
                                el.querySelector('a').insertAdjacentHTML('beforeend',`<img src="" alt="">`)
                            }
                            let randomNum = randomArray[Math.floor(Math.random()*randomArray.length)]
                            if (el.querySelector('img') != null) {
                                el.querySelector('img').setAttribute('src', products[randomNum].variants[0].image_url)
                                el.querySelector('img').setAttribute('alt', products[randomNum].title)
                            }
                            console.log(randomNum)
                        }
                    })
                    resolve(data)
                })
            }
        })
    }
    mut.observe(document, optionMut);
})

mut.observe(document, optionMut);

window.onload = function() {
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

    let menu = document.querySelector('.nav-menu');

    document.querySelector('.btn_all-category').addEventListener('click', () => {
        viewAllCategories(false)
        actionDataLayer = 'Click on view all categories';
        pushDataLayer(actionDataLayer)

    }); //open all category
    document.querySelector('.btn_back').addEventListener('click', () => viewAllCategories(true)); //hide all category

    document.querySelector('.icon_burger').addEventListener('click', () => menu.classList.add('active'));
    document.querySelector('.btn_close').addEventListener('click', () => menu.classList.remove('active'));

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-menu')) {
            menu.classList.remove('active')
        }
    });

    const createPagination = document.createElement('div');
    createPagination.id = 'pagination';
    createPagination.style.display = 'none';
    
    //card product
    class ProductCard {
        constructor(src, url, title, manufacturer, soldBy, number, price, status, id, variantId, parent, variants) {
            this.src = src;
            this.url = url;
            this.title = title;
            this.manufacturer = manufacturer;
            this.soldBy = soldBy;
            this.number = number;
            this.price = price;
            this.status = status;
            this.id = id;
            this.variantId = variantId;
            this.parent = document.querySelector(parent);
            this.variants = variants;
            this.qty();
            this.optionBox();
        }

        qty() {
            let option = ``;
            for (let n = 1; n <= 200; n++) {
                option = option + `<option value="${n}">${n}</option>`;
            }
            return option
        }

        optionBox() {
            let option = ``;
            for (let i = 0; i < this.variants.length; i++) {
                let variantsArr = this.variants[i];
                option = option + `<option value="${variantsArr.variant_id}" data-price="${variantsArr.price}" data-id="${variantsArr.product_id}" data-src="${variantsArr.image_url}"> ${variantsArr.title} ${variantsArr.stock_status=='Out of stock'? ' (Out of stock)':''} </option>`
            }
            return option
        }

        render() {
            const element = document.createElement('fieldset');
            element.classList.add('list_box2');

            element.innerHTML = `
                <div class="list_type3">
                    <span><a href="${this.url}"><img class="product_img" alt="${this.title}" src="${this.src}"></a></span>
                </div>
                <div class="list_type4">
                    <h3><a href="${this.url}">${this.title}</a></h3>
                    <form action="https://medicalmega.com/cart.html" method="post" style="position: relative;">
                        <span style="vertical-align: middle; display: inline-block; width: 290px; line-height: 19px;" class="p product-variant__info-section">
                            <span style="display:block; font-size:12px;">Manufacturer: ${this.manufacturer}</span>
                            <span class="variant_tag">
                                <span style="display:block; font-size:12px;">Sold By: ${this.soldBy}</span>
                                <span style="display:block; font-size:12px;">Item Number: ${this.number}</span>
                                <span style="margin-right:100px; float:left;">Price: <i style="color:#CD1109; font-style:normal;">${this.price}</i></span>
                            </span>
                        </span>
                        <span style="vertical-align: top; display: inline-block; width: 130px; line-height: 19px;" class="p product-variant__buy-box">
                            <span class="product_quantity nostyle" style="display:${this.status=='Out of stock'?'none':'block'};">
                                <select name="quantity" style="width:42px; margin:6px 10px 8px 0; height:20px; float:right;" class="product-variant__quantity__select">${this.qty()}</select>
                            </span>
                            <input type="image" name="register_user" class="buynow2" src="https://medicalmega.com/images/buy-now.gif" alt="Submit" style="display:${this.status=='Out of stock'?'none':'block'};">
                            <div class="out-of-stock__box--pv" style="display:${this.status=='Out of stock'?'block':'none'}; ">
                                <p class="out-of-stock__message--pv">Out Of Stock</p>
                            </div>
                        </span>
                        <p style="clear:both;display:${this.variants.length>1?'block':'none'}">
                            <label style="width:60px;display:block;float:left;font-size:15px;">Options:</label>
                            <select class="product-variant product-variant__options-box__select" style="font-size:11px;float:left;margin-top:2px;">${this.optionBox()}</select>
                        </p>
                        <input type="hidden" name="product_variant_id" value="${this.variantId}">
                        <input type="hidden" name="product_id" value="${this.id}">
                        <input type="hidden" name="add_to_cart" value="variant">
                    </form>
                </div>`;

            this.parent.append(element);

            element.querySelector('.product-variant__options-box__select').addEventListener('change', (e) => {
                console.log('change')
                let price = e.target.options[e.target.selectedIndex].dataset.price,
                    variantId = e.target.options[e.target.selectedIndex].value,
                    srcImg = e.target.options[e.target.selectedIndex].dataset.src,
                    id = e.target.options[e.target.selectedIndex].dataset.id,
                    title = e.target.options[e.target.selectedIndex].innerText;

                element.querySelector(`.variant_tag span i`).innerHTML = price;
                element.querySelector(`[name="product_id"]`).value = id;
                element.querySelector(`.product_img`).src = srcImg;
                element.querySelector(`[name="product_variant_id"]`).value = variantId;
                element.querySelectorAll(`.variant_tag span`)[0].innerHTML = `Sold By: ${title.replace('(Out of stock)','')}`;

                if (title.includes('Out of stock')) {
                    element.querySelector('.out-of-stock__box--pv').style.display = 'block';
                    element.querySelector('.product_quantity').style.display = 'none';
                    element.querySelector('.buynow2').style.display = 'none';
                } else {
                    element.querySelector('.out-of-stock__box--pv').style.display = 'none';
                    element.querySelector('.product_quantity').style.display = 'block';
                    element.querySelector('.buynow2').style.display = 'block';
                }
            })
        }
    }

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.innerHTML = message.loading;

    let selectedPage = 1;

    function listing(data) {
        statusMessage.remove()
        if (data.products != null) {
            let products = data.products;

            for (let i = 0; i < products.length; i++) {
                new ProductCard(
                    products[i].variants[0].image_url,
                    products[i].url,
                    products[i].title,
                    products[i].brand,
                    products[i].variants[0].title,
                    products[i].item_number,
                    products[i].variants[0].price,
                    products[i].stock_status,
                    products[i].variants[0].product_id,
                    products[i].variants[0].variant_id,
                    '.products_list',
                    products[i].variants
                ).render()
            }
            
            let count = data.total_count; //всего записей
            let cnt = +document.querySelector('[name="mm_per_page"]').value; //сколько отображаем сначала
            let cnt_page = Math.ceil(count / cnt); //кол-во страниц
    
            console.log(cnt_page)
    
            if (cnt_page > 1) {
    
                //Initialization pagination
                let init = function() {
                    Pagination.Init(document.getElementById('pagination'), {
                        size: cnt_page, // pages size
                        page: selectedPage,  // selected page
                        step: 1  // pages before and after current
                    });
                };
                init()
                Array.from(document.querySelectorAll('.pagination_page')).pop().classList.add('after-not')
                createPagination.style = 'display: flex; opacity: 1; pointer-events: auto;';
            } else {
                createPagination.style = 'display: none; ';
            }
        }
      
    }

    //Pagination
    let Pagination = {

        code: '',

        // Utility
        // converting initialize data
        Extend: function(data) {
            data = data || {};
            Pagination.size = data.size || 300;
            Pagination.page = data.page || 1;
            Pagination.step = data.step || 3;
        },

        // add pages by number (from [s] to [f])
        Add: function(s, f) {
            for (let i = s; i < f; i++) {
               Pagination.code += '<li class="pagination_page">' + i + '</li>';
            }
        },

        // add last page with separator
        Last: function() {
            Pagination.code += '<li class="ellipsis-before">' + (Pagination.size - 1) + '</li><li>' + Pagination.size + '</li>';
        },

        // add first page with separator
        First: function() {
            Pagination.code += '<li>1</li><li class="ellipsis-after">2</li>';
        },

        // Handlers
        // change page
        Click: function() {
            Pagination.page = +this.innerHTML;
            let offset = (Pagination.page - 1) * +document.querySelector('[name="mm_per_page"]').value
            fetchProduct(offset,brandsFilter,priceRange)
            selectedPage = Pagination.page;
            console.log(offset,brandsFilter,priceRange)
            Pagination.Start();
        },

        // previous page
        Prev: function() {
            Pagination.page--;
            if (Pagination.page < 1) {
                Pagination.page = 1;
            }
            let offset = (Pagination.page - 1) * +document.querySelector('[name="mm_per_page"]').value
            fetchProduct(offset,brandsFilter,priceRange)
            console.log(offset,brandsFilter,priceRange)
            Pagination.Start();
        },

        // next page
        Next: function() {
            Pagination.page++;
            if (Pagination.page > Pagination.size) {
                Pagination.page = Pagination.size;
            }
            let offset = (Pagination.page - 1) * +document.querySelector('[name="mm_per_page"]').value
            fetchProduct(offset,brandsFilter,priceRange)
            console.log(offset,brandsFilter,priceRange)
            Pagination.Start();
        },

        // Script
        // binding pages
        Bind: function() {
            let a = Pagination.e.getElementsByTagName('li');

            for (let i = 0; i < a.length; i++) {
                if (+a[i].innerHTML === Pagination.page) a[i].className = 'active';
                a[i].addEventListener('click', Pagination.Click, false);
            }
        },

        // write pagination
        Finish: function() {
            Pagination.e.innerHTML = Pagination.code;
            Pagination.code = '';
            Pagination.Bind();
        },

        // find pagination type
        Start: function() {
            if (Pagination.size < Pagination.step * 2 + 6) {
                Pagination.Add(1, Pagination.size + 1);
            }
            else if (Pagination.page < Pagination.step * 2 + 3) {
                Pagination.Add(1, Pagination.step * 2 + 4);
                Pagination.Last();
            }
            else if (Pagination.page > Pagination.size - Pagination.step * 2 - 2) {
                Pagination.First();
                Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
            }
            else {
                Pagination.First();
                Pagination.Add(Pagination.page - Pagination.step , Pagination.page + Pagination.step + 1);
                Pagination.Last();
            }
            Pagination.Finish();
        },

        // Initialization
        // binding buttons
        Buttons: function(e) {
            let nav = e.getElementsByTagName('button');
            nav[0].addEventListener('click', Pagination.Prev, false);
            nav[1].addEventListener('click', Pagination.Next, false);
        },

        // create skeleton
        Create: function(e) {
            let html = [
                '<button class="btn_paginator btn_paginator_prev" type="button">Prev</button>', // previous button
                '<ul class="align-items-center"></ul>',  // pagination container
                '<button class="btn_paginator btn_paginator_next" type="button">Next</button>'  // next button
            ];

            e.innerHTML = html.join('');
            Pagination.e = e.getElementsByTagName('ul')[0];
            Pagination.Buttons(e);
        },

        // init
        Init: function(e, data) {
            Pagination.Extend(data);
            Pagination.Create(e);
            Pagination.Start();
        }
    };

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

    function getProductsFilters(element,event) {
        document.querySelector(element).addEventListener(event, (e) => {
            // if (element == '.popup_filter .btn_close') {
                brandsFilter = [];
                priceRange = [];

                checkedFilter('.filter_brands .checkbox', brandsFilter)
                checkedFilter('.filter_price .checkbox', priceRange)
                
            // }

            let perPage = document.querySelector('[name="mm_per_page"]').value;

         
            console.log(idCategory + " (id category)")
            console.log(perPage)
            console.log(brandsFilter.toString() + '(id brands)')
            console.log(priceRange.toString() + '(price range)')
            console.log(document.querySelector('.btn_sort select').value)

            fetchProduct(0,brandsFilter,priceRange)
        })
    }

    function fetchProduct(offset=0,brandsFilter,priceRange) {
        let perPage = document.querySelector('[name="mm_per_page"]').value;
        document.querySelector('.products_list').innerHTML = '';
        document.querySelector('.listing').append(statusMessage)
        createPagination.style = 'display: flex; opacity: 0.5; pointer-events: none;';
        console.log(brandsFilter.toString())
        selectedPage = offset;
        let productsRequest = new Promise((resolve, reject) => {
            fetch(`/api/products&offset=${offset}&limit=${perPage}&is_featured=0&brand=${brandsFilter.toString()}&ctoken=${mm.ctoken}&category=${idCategory}&price_range=${priceRange.toString()}&sort=${document.querySelector('.btn_sort select').value}&with_filters=1`, headerFetch)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    
                    listing(data)
                    resolve(data)
                })
        })
        return productsRequest
    }

    //listing
    if (window.location.pathname.includes('/category')) {

        document.querySelector('.listing .list_box1').insertAdjacentHTML('afterend',`<div class="products_list"></div>`)
        document.querySelector('.list_type2').append(createPagination)

        document.querySelector('.list_type1 p').insertAdjacentHTML('beforebegin', `
            <div class="justify-content-between hide">
                <button type="button" class="btn_filter" data-button="popup_filter">Filters</button>
                <div class="btn_sort">
                    <select>
                        <option value="">Sort by</option>
                        <option value="name">Product Name ASC</option>
                        <option value="-name">Product Name DESC</option>
                    </select>
                </div>
            </div>`)

        getProductsFilters('[name="mm_per_page"]','change')

        let requestFilters = new Promise((resolve, reject) => {
            idCategory = JSON.parse(localStorage.getItem('idCategory'));
            fetch(`/api/products&offset=0&is_featured=0&ctoken=${mm.ctoken}&category=${idCategory}&sort=${document.querySelector('.btn_sort select').value}&with_filters=1`, headerFetch)
                .then(res => res.json())
                .then(dataFilters => resolve(dataFilters))
        })
        
        requestFilters.then(dataFilters => {
            console.log(dataFilters)
            totalCountProducts = dataFilters.total_count;

            let dataBrand = dataFilters.filters.brands,
                dataPrices = dataFilters.filters.prices;

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

            for (let i = 0; i < dataBrand.length; i++) {
                if (dataBrand[i].products_count != 0) {
                    document.querySelector('.filter_brands .select_dropdown').insertAdjacentHTML('beforeend',`<li><label class="align-items-center"><input type="checkbox" data-option="${dataBrand[i].brand_id}" class="checkbox"><span class="check"></span><span>${dataBrand[i].brand_name} <span class="count_brand">(${dataBrand[i].products_count})</span></span></label></li>`)
                }
            }
            for (let i = 0; i < dataPrices.length; i++) {
                if (dataPrices[i].products_count != 0) {
                    document.querySelector('.filter_price .select_dropdown').insertAdjacentHTML('beforeend',`<li><label class="align-items-center"><input type="checkbox" data-option="${dataPrices[i].price_range}" class="checkbox"><span class="check"></span><span>${dataPrices[i].name} <span class="count_brand">(${dataPrices[i].products_count})</span></span></label></li>`)
                }
            }

            document.querySelector('.list_type1 .hide').classList.remove('hide');
            let selectCurrent = document.querySelectorAll('.select_current');

            selectCurrent.forEach(el => {
                el.addEventListener('click', () => el.parentElement.classList.toggle('active'))
            })

            document.querySelectorAll('[data-button]').forEach(button => {
                button.addEventListener('click', () => {
                    let popup = document.querySelector(`[data-item="${button.dataset.button}"]`);
                    popup.classList.toggle('active')

                    if (popup.classList.contains('active')) {
                        document.body.style.overflow = 'hidden';
                    } else {
                        document.body.style.overflow = 'inherit';
                    }
                })
            })

            getProductsFilters('.popup_filter .btn_close','click')
            getProductsFilters('.btn_sort select','change')
            
       
            idCategory = JSON.parse(localStorage.getItem('idCategory'));
            console.log(idCategory)
            fetch(`/api/products&offset=0&limit=50&is_featured=0&ctoken=${mm.ctoken}&category=${idCategory}&with_filters=1`, headerFetch)
                .then(res => res.json())
                .then(dataP => {
                    console.log(dataP)
                    idCategory = JSON.parse(localStorage.getItem('idCategory'));
                    console.log(idCategory)
                    listing(dataP)
                })
        })
  

        document.querySelector('.listing').append(statusMessage)
        document.querySelector('[name="mm_per_page"]').setAttribute('onchange','');
        document.querySelectorAll('.listing p').forEach((el,i) => {
            if (el.innerText.toLowerCase().includes(document.querySelector('.listing .categoryTop').innerText.toLowerCase())) {
                el.style.display = 'none';
            }
        })
    }

    //events
    document.querySelector('.signup a').addEventListener('click', () => {
        actionDataLayer = 'Click on Sign in button in menu';
        pushDataLayer(actionDataLayer)
    })

    document.querySelectorAll('.header .nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            actionDataLayer = 'Click on menu categories for the Use';
            labelDataLayer = e.target.innerText;
            pushDataLayer(actionDataLayer,labelDataLayer)
        })
    })
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
