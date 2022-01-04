let styles = `
<style>
#hdr, #banner {
    display: none;
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
    z-index: 99;
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
}
.by_num span {
    font-weight: bold;
    font-size: 11px;
    line-height: 11px;
    text-align: center;
    color: #C23D31;
}
.nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.nav-menu_container {
    max-width: 315px;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: auto;
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
    line-height: 20px;
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
    padding: 12px 20px 16px;
    border-bottom: 1px solid #C0C0C0;
}
.justify-content-between {
    display: flex;
    justify-content: space-between;
}
.header .nav {
    padding: 12px 0;
    width: 100%;
    border-bottom: 1px solid #C0C0C0;
}
.header .nav li {
    clear: both;
}
.header .nav a {
    background: none;
    padding: 4px 20px;
    margin: 8px 0;
    display: block;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    text-transform: uppercase;
    color: #171717;
}
.category_popular { 
    padding: 24px 20px;
}
.category_popular .title {
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    color: #666666;
    padding: 0;
}
.category_popular .altnav {
    width: 100%;
}
.category_popular .altnav li a {
    color: #171717;
    font-size: 16px;
    padding: 7px 0;
    width: 100%;
    display: block;
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
            <div class="category_popular">
                <p class="title">Most Popular Categories</p>
            </div>
        </div>
    </div>
</header>`;

document.body.insertAdjacentHTML('afterbegin', styles);
document.querySelector('#wrap').insertAdjacentHTML('afterbegin', header);
document.querySelector('.header_cart').appendChild(document.querySelector('.shoppingcart.tooltip-cart'));
document.querySelector('.header .icon_burger').after(document.querySelector('.search.search-box'));
document.querySelector('.nav-menu_login').appendChild(document.querySelector('.topnav .signup'));
document.querySelector('.sticky-top').after(document.querySelector('.nav'));
document.querySelector('.nav-menu_login li a').insertAdjacentHTML('afterbegin','Hello, ');
document.querySelectorAll('.nav li').forEach(el => {
    if (el.classList.contains('hide-mobile')) {
        el.classList.remove('hide-mobile','hide-mobile-landscape')
    }
})

document.querySelector('.category_popular .title').after(document.querySelector('.altnav'))

