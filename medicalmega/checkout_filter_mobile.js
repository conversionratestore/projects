let styleMain =`
<style>
    /* Chrome, Safari, Edge, Opera */
    input.quantity::-webkit-outer-spin-button,
    input.quantity::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input.quantity[type=number] {
      -moz-appearance: textfield;
    }
    .shopping-cart button {
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .btn-next {
        background: #1E3944!important;
        border-radius: 100px;
        padding: 0 20px;
        font-weight: 700;
        font-size: 14px;
        line-height: 48px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FBFBFB;
        width: 100%;
        text-align: center;
        display: block;
    }
    .btn-next svg {
        margin-left: 8px;
    }
    /*wrapper and header*/
    .header-checkout *, .wrapper-checkout * {
        box-sizing: border-box;
    }
    .header-checkout {
        background: #FBFBFB;
        position: sticky;
        top: 0;
        z-index: 99;
        padding: 20px;
    }
    .steps {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #344D57;
        text-align: left;
    }
    .steps span {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #6D7E85;
    }
    /*pricing*/
    .order_pricing li:not(:last-child) {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #344D57;
        margin-bottom: 8px;
    }
    .order_pricing li:last-child {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #091114;
        padding-top: 20px;
        border-top: 1px solid #E0E4E5;
    }
    /*product cart*/
    .product-item .qty {
        font-weight: 400;
        font-size: 12px;
        line-height: 150%;
        color: #6D7E85;
    }
    .product-item {
        padding: 19.5px 0;
        border-bottom: 1px solid #E0E4E5;
    }
    .product-item:last-child {
        border-bottom: none;
    }
    .product-item > div:last-child {
        width: calc(100% - 87px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .product-item > div:last-child a {
        font-size: 14px;
        line-height: 150%;
        color: #6D7E85;
        text-align: left;
        margin-bottom: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .product-item_img {
        margin-right: 16px;
    }
    .product-item_img img {
        width: 86px;
        height: 86px;
        flex-shrink: 0;
        object-fit: contain;
    }
    .product-item .price {
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        color: #1E3944;
    }
    .remove {
        position: absolute;
        left: 0;
        top: 0;
        background: #FFFFFF!important;
        width: 20px;
        height: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
        border-radius: 100px;
        display: flex;
    }
    .remove svg {
        margin: auto;
    }
    .quantity-btn  {
        width: 18px;
        height: 32px;
        font-size: 21px;
        border: none;
        text-align: center;
    }
    .quantity-btn[disabled] {
        pointer-events: none;
        color: #BCC4C7;
    }
    .quantity {
        color: #344D57;
        text-align: center;
        font-size: 12px;
        line-height: 32px;
        width: 32px;
        height: 32px;
        background: #FBFBFB;
        border: 1px solid #E0E4E5;
        border-radius: 38px;
        margin: 0 12px;
    }
    /*flex*/
    .flex {
        display: flex;
    }
    .justify-between {
        display: flex;
        justify-content: space-between;
    }
    .flex-center-between {
        display: flex!important;
        align-items: center;
        justify-content: space-between;
    }
    .flex-center {
        display: flex!important;
        align-items: center;
        justify-content: center;
    }
    .items-center {
        display: flex!important;
        align-items: center;
    }
    .relative {
        position: relative;
    }
    [disabled] {
        pointer-events: none;
    }
</style>`

let styles = `
    <style>
        .shopping-cart * {
            box-sizing: border-box;
        }
        .shopping-cart {
            background: rgba(0,0,0,0.5);
            position: fixed;
            top: 0;
            left: 0;
            transition: all 0.3s ease;
            width: 100%;
            height: 100%;
            opacity: 0;
            pointer-events: none;
            z-index: 9999;
        }
        .shopping-cart.active {
            opacity: 1;
            pointer-events: auto;
        }
        .shopping-cart.active .container {
            transform: translateX(0);
        }
        .shopping-cart .container {
           background: #FFFFFF;
           margin-left: auto;
           width: 100%;
           transform: translateX(200px);
           transition: all 0.3s ease;
        }
        .shopping-cart svg {
            cursor: pointer;
        }
        .header-cart {
            padding: 0 20px;
            background: #FBFBFB;
        }
        .header-cart > div {
            border-bottom: 1px solid #E3E6E7;
            padding: 12px 0;
            width: 100%;
            font-weight: 600;
            font-size: 18px;
            line-height: 120%;
            color: #474747;
        }
        .body-cart {
            padding: 0 20px;
            overflow-y: auto;
            height: calc(100vh - 155px - 53px);
            display: flex;
            flex-direction: column;
        }
        .list-product .product-item_img img {
            height: 86px;
            width: 86px;
        }
        .list-product .product-item_img {
            margin-right: 16px;
        }
        .also-bought {
            margin-top: auto;
            padding-top: 28px;
        }
        .subtotal {
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            padding: 20px 0;
            border-top: 1px solid #E3E6E7;
        }
        .footer-cart {
            padding: 16px 20px;
            background: #FBFBFB;
            box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2), 0 -2px 6px 2px rgba(0, 0, 0, 0.15);
            position: relative;
            z-index: 2;
        }
        .footer-cart p {
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            color: #344D57;
            padding: 4px;
        }
        .body-cart h4 {
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            color: #344D57;
        }
        .paypal-form-button {
            background: #EEC86A;
            border-radius: 100px;
        }
        /*empty cart*/
        .empty-cart {
            margin: auto;
            display: block;
            width: fit-content;
        }
        .empty-cart p {
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            color: #344D57;
            margin-bottom: 28px;
        }
        .empty-cart button.btn-next {
            padding: 0 24px;
        }
        /*slider*/
        .slider-products {
            padding: 20px 0 40px;
        }
        .tns-outer {
            margin-right: -20px;
        }
        .slide {
            background: #FFFFFF;
            padding: 20px;
            border: 1px solid #E3E6E7;
            border-radius: 4px;
            margin-right: 12px;
            max-width: 190px;
        }
        .slide img {
            width: 80px;
            height: 80px;
            margin-right: 8px;
        }
        .slide .price p {
            font-weight: 300;
            font-size: 12px;
            line-height: 150%;
            text-decoration-line: line-through;
            color: #666666;
        }
        .slide .price b {
            font-weight: 600;
            font-size: 16px;
            line-height: 130%;
            color: #091114;
        }
        .slide .name {
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            color: #6E6E6E;
            margin: 4px 0 8px;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .shopping-cart button.btn-add {
            background: #FBFBFB;
            border: 2px solid #1E3944;
            border-radius: 100px;
            font-weight: 600;
            font-size: 10px;
            line-height: 28px;
            text-align: center;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #1E3944;
            width: 100%;
            margin-top: 16px;
        }
        /*header, search, filters*/
        html:first-child .list_type3 span {
            line-height: 1;
        }
        .list_type2, #listing_main {
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
            border: none;
            transform: translateY(-50%);
            position: absolute;
            right: 68px;
            top: 50%;
            z-index: 2;
        }
        input.ais-SearchBox-input[type="search"]::-webkit-search-decoration,
        input.ais-SearchBox-input[type="search"]::-webkit-search-cancel-button,
        input.ais-SearchBox-input[type="search"]::-webkit-search-results-button,
        input.ais-SearchBox-input[type="search"]::-webkit-search-results-decoration {
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
        #manufacturer {
            position: relative;
        }
        #manufacturer .ais-RefinementList-list {
            max-height: 312px;
            overflow-y: auto;
        }
        #manufacturer .ais-RefinementList-list.scroll:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 68px;
            pointer-events: none;
            opacity: 1;
            transition: all 0.2s ease;
            background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.3))
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
        .btn_filter {
            width: 100%;
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
            margin: 10px auto 0;
            display: block;
            position: relative;
            z-index: 2;
        }
        .ais-RefinementList-showMore.ais-RefinementList-showMore--disabled, #lvl_categories {
            display: none;
        }
        .algolia-autocomplete {
            width: 100%;
        }
        .aa-dropdown-menu {
            position: fixed!important;
            top: 51px!important;
            background: #fff;
            box-shadow: 0 4px 4px rgb(0 0 0 / 5%);
            width: 100%;
        }
        .aa-suggestion {
            display: flex;
            align-items: center;
            padding: 5px 10px;
        }
        .aa-suggestion.aa-cursor {
            background: 
        }
        .aa-suggestion img {
            width: 42px;
            height: 42px;
            border: 1px solid #eeeeee;
            margin-right: 10px;
            object-fit: contain;
            flex-shrink: 0;
        }
        .aa-suggestion em {
            font-weight: 700;
        }
        .aa-suggestion .name {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            height: 14px;
        }
        .aa-suggestion .item_num {
            font-size: 10px;
            margin-bottom: 5px;
            color: gray;
        }
        .aa-suggestion .price {
            font-size: 11px
        }
        .ais-SearchBox-input:not(:focus) ~ .aa-dropdown-menu .aa-suggestion {
            display: none!important;
        }
    </style>`

let href = window.location.href;

let headerFetchAddress = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cart-Token': mm.ctoken,
    'x-api-key': 'Ojza12AGCMUzG6omNmSK8Qx2mdgiSVB5'
}

let obj = {
    'stepsName': ['Personal information','Shipping information','Payment Method','Confirmation'],
    'back' : {
        'personal information' : ['Back to Cart', '/cart.html'],
        'shipping information' : ['Back to Cart','/cart.html'],
        'billing information' : ['Back to Shipping Info','/checkout/step1'],
        'delivery method' : ['Back To Address Info','/checkout/step1'],
        'payment method': ['Back to Delivery Method','/checkout/step2']
    },
    'pricingArr':  {
        'subtotal': 'Sub total',
        'shipping': 'Delivery fee',
        'processing_fee': 'Processing fee',
        'discount': 'Discount',
        'tax': 'Tax',
        'total': 'Grand Total'
    }
}

//post
let postFetch = (host,body,method) => {
    return new Promise((resolve, reject) => {
        fetch(host, {
            headers: headerFetchAddress,
            method: method,
            body: body
        }).then(res => res.json()).then(data => {
            resolve(data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    })
}
//scroll to
let scrollTop = (targetScroll, offsetTop) => {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
//changeQuantity
let changeQuantity = (plus, minus, quantity, post=false) => {
    //update quantity
    quantity.addEventListener('change', () => {
        if (quantity.value < 1) {
            quantity.value = 1
        }
        post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${quantity.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart()) : '';
    })
    plus.addEventListener('click', () => {
        quantity.value = +quantity.value + 1;
        quantity.parentElement.querySelector('.quantity-btn_minus').disabled = false;

        post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${plus.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart()) : '';
    })

    if (!href.includes('/checkout/step2') && !href.includes('/checkout/step3') ) {
        if (minus.nextElementSibling.value < 2) {
            minus.disabled = true;
        } else {
            minus.disabled = false;
        }
    } else {
        minus.disabled = true;
    }

    minus.addEventListener('click', () => {
        if (minus.nextElementSibling.value < 2) {
            minus.nextElementSibling.value = 1;
            minus.disabled = true;
        } else {
            minus.nextElementSibling.value = +minus.nextElementSibling.value - 1;
        }
        post == true ? postFetch('/cart.html',`api=c&cart_action=update&variant_id=${minus.closest('.product-item').dataset.variantId}&quantity=${quantity.value}&ctoken=${mm.ctoken}`,'POST').then(data => cart()) : '';
    })
}
//set pricing
let pricing = (parent, data) => {
    document.querySelector(parent).innerHTML = '';
    let pricing = obj['pricingArr']
    for (let key in pricing) {
        for (let keyData in data) {
            if (key == keyData && (data[keyData] != 0 || keyData == 'subtotal' || keyData == 'total')) {
                document.querySelector(parent).insertAdjacentHTML('beforeend', `
                <li class="justify-between">
                    <p>${pricing[key]}:</p>
                    <p>$<span>${(+data[keyData].toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>
                </li>`)
            }
        }
    }
}

//add product
let product = (id, variantId, quantity, subtotal, url, imageUrl, title, varQty) => {
    return `<li class="flex product-item" data-id="${id}" data-variant-id="${variantId}">
                <div class="relative">
                    <a href="${url}" class="product-item_img" title="${title}"> 
                        <img src="${imageUrl}" alt="${title}">
                    </a>
                    ${varQty == 0 ? `<button class="remove" type="button">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.60688 6L9.68305 2.3332C9.73461 2.27227 9.69126 2.17969 9.61157 2.17969H8.67641C8.62133 2.17969 8.5686 2.2043 8.53227 2.24648L5.99516 5.27109L3.45805 2.24648C3.4229 2.2043 3.37016 2.17969 3.31391 2.17969H2.37876C2.29907 2.17969 2.25571 2.27227 2.30727 2.3332L5.38344 6L2.30727 9.6668C2.29572 9.68038 2.28831 9.69699 2.28592 9.71466C2.28353 9.73233 2.28626 9.75031 2.29379 9.76648C2.30131 9.78264 2.31332 9.79631 2.32838 9.80585C2.34344 9.81539 2.36093 9.82041 2.37876 9.82031H3.31391C3.36899 9.82031 3.42172 9.7957 3.45805 9.75352L5.99516 6.72891L8.53227 9.75352C8.56743 9.7957 8.62016 9.82031 8.67641 9.82031H9.61157C9.69126 9.82031 9.73461 9.72774 9.68305 9.6668L6.60688 6Z" fill="#6D7E85"/>
                        </svg>
                     </button>` : ''}
                </div>
                <div>
                    <a href="${url}" title="${title}">${title}</a>
                    <div class="flex-center-between">
                        ${varQty == 0 ? `<div class="items-center">
                            <button type="button" class="quantity-btn quantity-btn_minus" ${varQty == 1 ? 'disabled': ''}>−</button>
                            <input type="number" name="quantity" value="${quantity}" class="quantity" ${varQty == 1 ? 'disabled': ''}>
                            <button type="button" class="quantity-btn quantity-btn_plus" ${varQty == 1 ? 'disabled': ''}>+</button>
                        </div>` : '<p class="qty">Qty: ' + quantity + '</p>'}
                        
                        <div class="price flex">$<b>${(+subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</b></div>
                    </div>
                </div>
            </li>`
}

document.body.insertAdjacentHTML('afterbegin', styleMain)

let arrMouth = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//Confirmation
if (href.includes('Confirmation')) {
    let styleConfirmation = `
    <style>
        .confirmation * {
            box-sizing: border-box;
        }
        #wrap {
            display: none;
        }
        .confirmation {
            max-width: 833px;
            width: 100%;
            margin: auto;
            padding: 40px 0 80px;
            font-size: 14px;
            line-height: 150%;
            color: #474747;
        }
        .confirmation h2 {
            font-weight: 600;
            font-size: 36px;
            line-height: 120%;
            color: #091114;
            margin-bottom: 12px;
        }
        .confirmation-span {
            font-weight: 400;
            font-size: 16px;
            color: #344D57;
        }
        .confirmation-order {
            background: #FFFFFF;
            box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding: 40px 0;
            margin: 40px 0 32px;
        }
        .confirmation-order .col {
            width: 50%;
        }
        .confirmation-order .col:first-child {
            border-right: 1px solid #E0E4E5;
            padding: 0 40px;
        }
        .confirmation-order .col:last-child {
            position: relative;
        }
        .confirmation-order .col:last-child:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -40px;
            width: 100%;
            height: 55%;
            pointer-events: none;
            background: linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
        }
        .confirmation-products {
            margin-top: -20px;
            margin-bottom: -40px;
            padding: 0 40px;
            overflow-y: auto;
        }
        .confirmation-products::-webkit-scrollbar{
            background: #CCCCCC;
            width: 4px;
            height: 4px;}
        .confirmation-products::-webkit-scrollbar-thumb{
            background: #666666;}
        .confirmation-products .product-item > div:last-child a {
            font-size: 14px;
            color: #344D57
        }
        .confirmation-products .total-price {
            font-size: 18px;
            color: #091114;
        }
        .confirmation-order .order_pricing li:not(:last-child) {
            color: #6D7E85;
            margin-bottom: 12px;
        }
        .confirmation-order .order_pricing li:last-child {
            padding-top: 28px;
        }
        .confirmation-order h3 {
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            margin-bottom: 28px;
            text-align: left;
            color: #091114;
        }
        .confirmation-date {
            font-weight: 600;
            font-size: 18px;
            line-height: 120%;
            padding: 12px 0;
            color: #96280F;
        }
        .confirmation .btn-next {
            padding: 0 24px;
            margin: 36px auto 0;
        }
    </style>`
    let confirmationHTML = `
        <header class="header-checkout"><div class="steps"></div></header>
        <div class="confirmation">
            <h2>Thank you!</h2>
            <p class="confirmation-span">Your order has been successfully placed</p>
            <div class="confirmation-order flex">
                <div class="col">
                    <h3>Your Order</h3>
                    <ul class="order_pricing"></ul>
                </div>
                <div class="col">
                    <ul class="confirmation-products"></ul>
                </div>
            </div>
            <p>Approximate shipping date of your order is:</p>
            <p class="confirmation-date"></p>
            <a href="/" class="btn-next"><span>Back to the website</span></a>
        </div>`
    document.body.insertAdjacentHTML('afterbegin', confirmationHTML)
    document.body.insertAdjacentHTML('afterbegin', styleConfirmation)
    //add steps in header
    document.querySelector('.steps').innerHTML = `Step 4<span>/4</span> — ${obj['stepsName'][3]}`;
    postFetch('/cart.html',`api=c&cart_action=last_order&ctoken=${mm.ctoken}`,'POST').then(data => {
        console.log(data)
        let day = data.date.split('-')[2],
            mounth = data.date.split('-')[1],
            year = data.date.split('-')[0];
        document.querySelector('.confirmation-date').innerHTML = day + ' ' + arrMouth[+mounth - 1] + '. ' + year
        pricing('.order_pricing', data) // set pricing
        let items = data.items;
        for (let i = 0; i < items.length; i++) {
            document.querySelector('.confirmation-products').insertAdjacentHTML('beforeend', product(items[i].product_id, items[i].variant_id, items[i].qty, items[i].subtotal, items[i].url, items[i].image_url, items[i].title, 1))
        }

        let height = document.querySelector('.confirmation-order .col:first-child').clientHeight;
        document.querySelector('.confirmation-products').style.height = height + 60 + 'px'
    })

}
if (href.includes('login.php') || href.includes('/register.php') || href.includes('/checkout') || href.includes('/guest-checkout1.php')) {
    //checkout
    let style = `
    <style>
        body {
            border: none;
        }
        #wrap {
            display: none;
        }
        button {
            background: transparent;
            border: none;
            cursor: pointer;
        }
        /*body checkout*/
        .head {
            border-bottom: 1px solid #E0E4E5;
            padding: 28px 0 12px;
            font-weight: 600;
            font-size: 18px;
            line-height: 120%;
            color: #96280F;
            text-align: left;
            margin-bottom: 28px;
        }
        .head-login .link {
            font-size: 18px;
        }
        .head-login {
            border-bottom: 1px solid #E0E4E5;
            padding: 28px 0 12px;
            margin-bottom: 12px;
        }
        .head-login h3 {
            font-weight: 600;
            font-size: 24px;
            line-height: 120%;
            color: #1E3944;
        }
        .col-left {
            background: #FBFBFB;
            padding: 0 20px;
        }
        .col-left > div:first-child {
            display: grid;
        }
        .col-left .address.bill {
            order: 2;
            display: none;
        }
        /*login*/
        .myAccount .myAccountleft, .myAccount .myAccountright {
            width: 100%;
            padding: 0;
        }
        .registerOnLogin dt, .myAccountright, .myAccountleft, dd button[type="submit"] {
            display: none;
            width: 100%;
        }
        .myAccountright.active, .myAccountleft.active {
            display: block;
        }
        .myAccountleft {
            border-left: none;
        }
        .myAccount {
            margin: 0;
            width: 100%;
            padding: 0;
        }
        .registerOnLogin {
            padding: 0;
        }
        .myAccountleft dd:nth-child(2), .myAccountleft dd:nth-child(5), .myAccountright dd:nth-child(2) {
           padding-right: 10px!important;
        }
        .myAccountleft dd:nth-child(3), .myAccountleft dd:nth-child(6), .myAccountright dd:nth-child(3) {
           padding-left: 10px!important;
        }
        .myAccountleft dd:nth-child(5), .myAccountleft dd:nth-child(6), .myAccountright dd:nth-child(2), .myAccountright dd:nth-child(3) {
            width: 50%;
            float: left;
            position: relative;
        }
        .abcRioButtonBlue {
            margin-bottom: 28px;
        }
        .myAccountright input {
            width: 100%;
        }
        dd.error {
            position: relative;
         }
        dd.error i {
            position: absolute;
            left: 16px;
            top: 100%;
            font-size: 90%;
            margin-top: 4px;
            color: red;
            font-style: normal;
        }
        .myAccountleft dd .eye {
            position: absolute;
            right: 18px;
            bottom: 12px;
            width: 24px;
            height: 24px;
            z-index: 2;
            cursor: pointer;
        }
        .wrapper-checkout dd > input, .promocode input {
            background: #FFFFFF;
            border: 1px solid #9AA6AB!important;
            border-radius: 4px;
            padding: 11px 16px!important;
            height: auto!important;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: rgba(9, 17, 20, 0.8);
            width: 100%;
        }
        .wrapper-checkout select {
            background: #FFFFFF;
            width: 100%;
            border: 1px solid #9AA6AB;
            border-radius: 4px;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: rgba(9, 17, 20, 0.8);
            height: 48px;
            padding: 14px 48px 13px 16px;
        }
        .wrapper-checkout dd > select option:first-child {
            color: #9AA6AB;
        }
       
        .wrapper-checkout form dd label {
            text-align: left;
            width: 100%;
            font-size: 14px!important;
            font-weight: 400!important;
            line-height: 150%;
            color: rgba(52, 77, 87, 0.8);
            display: flex;
            align-items: center;
            padding-left: 16px;
            padding-bottom: 4px;
        }
        .c-red {
            color: rgba(235, 87, 87, 0.8);
        }
        .forgot_password {
            width: 100%;
            text-align: right!important;
            max-width: 100%!important;
        }
        #forgot_pass {
            padding: 20px 0;
            text-align: left;
            max-width: 50%;
            float: right;
            margin-top: -118px;
        }
        .wrapper-checkout .myAccountright > form:not(#checkoutForm) > dd:nth-child(6) {
            margin: 0!important;
        }
        .myAccountright > form > dd:nth-child(5) {
            display: none;
        }
        dd input[type=checkbox] {
            margin-right: 8px!important;
            width: fit-content;
            display: block;
        }
        .myAccountleft > form > dd:nth-child(7) {
            font-size: 14px;
            line-height: 150%;
            color: #091114;
            margin-bottom: 0!important;
            display: flex;
        }
        .wrapper-checkout form:not(#checkoutForm) dd {
            clear: both;
            width: 100%!important;
            margin-bottom: 25px!important;
            max-width: 100%;
            text-align: left;
            padding: 0!important;
        }
        .wrapper-checkout input::-webkit-input-placeholder {
            color: rgba(154, 166, 171, 0.8);
            font-size: 16px;
            line-height: 150%;}
        .wrapper-checkout input:-moz-placeholder {
            color: rgba(154, 166, 171, 0.8);
            font-size: 16px;
            line-height: 150%; }
        .wrapper-checkout input::-moz-placeholder {
            color: rgba(154, 166, 171, 0.8);
            font-size: 16px;
            line-height: 150%; }
        .wrapper-checkout input:-ms-input-placeholder {
            color: rgba(154, 166, 171, 0.8);
            font-size: 16px;
            line-height: 150%;}
        .btn-back {
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #1E3944;
            padding: 14px 8px;
            margin: 16px 0;
        }
        .btn-back svg {
            margin-right: 8px;
        }
        .foot {
            padding-top: 20px;
        }
        /*order*/
        .order.active .order_head svg {
            transform: scaleY(-1);
        }
        .order.active .order_drop {
            display: block;
        }
        .order_head {
            padding: 20px;
            background: #F0F1F2;
        }
        .order_head .price {
            font-weight: 600;
            font-size: 14px;
            line-height: 130%;
            text-align: right;
            color: #344D57;
        }
        .order_head p {
           font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #344D57;
        }
        .link, .address p.link {
            font-size: 12px;
            line-height: 150%;
            color: #96280F;
            border-bottom: 1px solid rgba(150, 40, 15, 0.5);
            cursor: pointer;
        }
        .link[hidden] {
            display: none!important;
        }
        .order_pricing {
            padding: 10px 20px;
        }
        .order_body {
            padding: 20px;
        }
        .order_drop {
            display: none;
        }
        /*step 1 address*/
        .address {
            margin-bottom: 28px;
        }
        .address > div {
            border: 1px solid #E0E4E5;
            border-radius: 4px;
            padding: 18px 20px;
        }
        .address .link {
            display: block;
            width: fit-content;
            margin-top: 28px;
        }
        .address p {
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            text-align: left;
            color: #344D57;
            margin-top: 15px;
        }
        .address p:first-child {
            font-weight: 600;
            margin-top: 0;
        }
        .btn-edit {
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #6D7E85;
            padding-bottom: 2px;
            border-bottom: 1px solid #9AA6AB;
            margin-left: auto;
            display: block;
            margin-bottom: 19px;
        }
        .ship-form dd:last-child label, .bill-form dd:first-child label{
            color: #091114;
            display: flex;
            align-items: center;
            padding-left: 0;
        }
        .ship-form, .bill-form {
            display: none;
        }
        .ship-form.active, .bill-form.active {
            display: block;
        }
        /*Delivery Method*/
        .delivery-method label {
            margin-bottom: 20px;
            display: block;
        }
        .method {
            border: 1px solid #E0E4E5;
            border-radius: 4px;
            height: 60px;
            padding: 12px;
            font-size: 14px;
            line-height: 150%;
            color: #344D57;
        }
        .check {
            border: 1px solid #6D7E85;
            border-radius: 50%;
            display: block;
            flex-shrink: 0;
            width: 16px;
            height: 16px;
            position: relative;
        }
        .check:after {
            content: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background: #091114;
            border-radius: 50%;
            width: 8px;
            height: 8px;
        }
        [type="checkbox"], [type="radio"] {
            display: none;
        }
        .checkbox:checked ~ .method {
            border-color: #091114;
        }
        .checkbox:checked ~ span .check:after {
            content: '';
        }
        .checkbox:checked ~ .method .type, .checkbox:checked ~ .method .price, .checkbox:checked ~ .method .text {
            border-color: #091114;
            color: #091114;
        }
        .checkbox:checked ~ .method .text:before {
            background: #091114;   
        }
        .checkbox:checked ~ .method .type, .checkbox:checked ~ .method .price {
            font-weight: 600;
        }
        .method .type {
            border-left: 1px solid #E0E4E5;
            padding-left: 8px;
            margin: 0 8px;
        }
        .method .price {
            width: 54px;
            font-size: 16px;
            text-align: right;
        }
        .method .text {
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            padding: 0 8px;
            position: relative;
            text-align: left;
            color: #344D57;
        }
         .method .text:before {
            content: '';
            position: absolute;
            left: 0;
            height: 18px;
            width: 1px;
            top: 50%;
            transform: translateY(-50%);
            background: #344D57;
         }
        .promocode {
            padding: 28px 0;
        }
        .promocode p {
            font-weight: 600;
            font-size: 18px;
            line-height: 120%;
            color: #091114;
            margin-bottom: 16px;
            text-align: left;
        }
        .promocode p span {
            font-weight: 400;
            font-size: 14px;
            margin-left: 8px;
        }
        .promocode ~ .error {
            color: red;
            text-align: right;
        }
        /*checkoutForm step 3*/
        #checkoutForm h3 {
            font-weight: 600;
            font-size: 16px;
            line-height: 130%;
            color: #091114;
            text-align: left;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .primaryInfo {
            border: none;
        }
        .ml-auto {
            margin-left: auto;
        }
        #checkoutForm {
            font-size: 14px;
            line-height: 150%;
            color: #091114;
            width: 100%!important;
        }
        #checkoutForm > p {
            white-space: normal;
            text-align: left;
        }
        #cc_block {
            text-align: left;
        }
        .ccInfo {
            display: grid;
        }
        .ccInfo > dd:first-child,  .ccInfo > dd:nth-child(3), .ccInfo > dd:nth-child(4),  #cc_block > dl > div.ccInfo > dd:nth-child(2) {
            order: 1;
        }
        #iframeForm {
            order: 0;
        }
        #cc_block > dl > div:nth-child(1) > span:nth-child(1), #cc_block > dl > div.ccInfo > dd:nth-child(2), #cc_block > dl > div.ccInfo > dd:nth-child(5), #cc_block > dl > dd:nth-child(3), #cc_block > dl > div.ccInfo > dd:nth-child(3) {
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #344D57;
            opacity: 0.8;
            margin: 0!important;
        }
        #paymentCardContainer, #paymentCardErrorContainer {
            margin: 0!important;
        }
        .primaryInfo {
            text-align: left;
            width: 100%;
        }
        .primaryInfo dl, #checkoutForm > fieldset > div:nth-child(2) {
            margin: 0!important;
        }
        .primaryInfo dl {
            width: 100%;
        }
        #card_list {
            width: 100%!important;
            max-width: 100%;
            margin-top: 4px;
        }
        .check2 {
            border: 1px solid #6D7E85;
            border-radius: 2px;
            width: 16px;
            height: 16px;
            display: block;
            position: relative;
            margin-right: 8px;
            flex-shrink: 0;
        }
        .check2:before {
            content: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background: #091114;
            border-radius: 1px;
            height: 8px;
            width: 8px;
        }
        [type="checkbox"]:checked ~ .check2:before  {
            content: '';
        }
        .promoCode, .primaryInfo input[type="text"], .primaryInfo select, .primaryInfo dl input[type="text"], .primaryInfo dl textarea, .primaryInfo .cc-recurring {
            width: 100%!important;
            max-width: 100%;
        }
        .primaryInfo label {
            max-width: 100%!important;
        }
        .primaryInfo label.order-every {
            padding: 0;
            width: 100%;
            max-width: 100%;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #091114;
            flex-wrap: wrap;
            margin-top: 10px;
        }
        #recurring_billing_period {
            width: 100%!important;
            margin-top: 15px;
        }
        .cc-recurring-setting {
            display: none!important;
        }
        .auto-reorder-header {
            font-weight: 600;
            font-size: 16px;
            line-height: 130%;
            color: #091114;
            margin-bottom: 8px;
            display: block;
        }
        div.cc-recurring {
            padding: 24px 0;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            color: #666666;
        }
        #cc_block > div > br:nth-child(2), #submitCheckout3 {
            display: none;
        }
        #checkoutForm > div {
            height: auto!important;
        }
        #cc_block > dl > div > div:nth-child(1) {
            display: none;
        }
    </style>`

    let wrapperHTML = `
    <header class="header-checkout"><div class="steps"></div></header>
    <div class="wrapper-checkout">
           <div class="order">
                <div class="order_head flex-center-between">
                    <div class="items-center">
                        <p>Show order summary</p>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.35355 12.1464L12.1464 9.35355C12.4614 9.03857 12.2383 8.5 11.7929 8.5H6.20711C5.76165 8.5 5.53857 9.03857 5.85355 9.35355L8.64645 12.1464C8.84171 12.3417 9.15829 12.3417 9.35355 12.1464Z" fill="#091114"/>
                        </svg>
                    </div>
                    <div class="price">$<span></span></div>
                </div>
                <div class="order_drop">
                    <ul class="order_pricing"></ul>
                    <ul class="order_body"></ul>
                </div>
           </div>
           <div class="col-left">
                <div>
                    ${window.location.href.includes('/login.php') || window.location.href.includes('/register.php?') ? `<div class="flex-center-between head-login"><h3>Register</h3><a href="#" class="link">Sign in</a></div>` : ''}
                    <div class="head"><h4></h4></div>
                </div>
                <div class="foot">
                    <button class="btn-next flex-center" type="submit">
                        <span>Next</span>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                        </svg>
                    </button>
                    <a class="btn-back flex-center" href="#">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 9.32153V8.67847C15 8.5009 14.8657 8.35695 14.7 8.35695H4.998L7.668 5.50181C7.72479 5.44144 7.75674 5.35926 7.75674 5.27352C7.75674 5.18779 7.72479 5.10561 7.668 5.04524L7.242 4.59511C7.18567 4.53424 7.10899 4.5 7.029 4.5C6.94901 4.5 6.87233 4.53424 6.816 4.59511L3.132 8.537C3.04758 8.62736 3.0001 8.74995 3 8.87782V9.12218C3.00138 9.24977 3.04867 9.37186 3.132 9.463L6.816 13.4049C6.87233 13.4658 6.94901 13.5 7.029 13.5C7.10899 13.5 7.18567 13.4658 7.242 13.4049L7.668 12.9483C7.72444 12.8891 7.75624 12.8079 7.75624 12.7233C7.75624 12.6386 7.72444 12.5575 7.668 12.4982L4.998 9.64305H14.7C14.8657 9.64305 15 9.4991 15 9.32153Z" fill="#1E3944"/>
                        </svg>
                        <span></span>
                    </a>
                </div>
           </div>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin',wrapperHTML) // add wrapper
    document.body.insertAdjacentHTML('afterbegin', style) // add styles

    //show/hide order
    document.querySelector('.order_head').addEventListener('click', (e) => {
        document.querySelector('.order').classList.toggle('active');
        console.log(e.target.innerText)
        if (e.target.innerText.includes('Show')) {
            document.querySelector('.order_head p').innerHTML = 'Hide order summary'
        } else {
            document.querySelector('.order_head p').innerHTML = 'Show order summary'
        }
    })
    //login/register step
    if ((href.includes('/login.php') || href.includes('/register.php')) && document.querySelector('.myAccount') != null) {
        document.querySelector('.col-left .head').after(document.querySelector('.myAccount'))
        document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][0];
        document.querySelector('.steps').innerHTML = `Step 1<span>/4</span> — ${obj['stepsName'][0]}`; //add steps in header
        document.querySelector('.myAccountleft').classList.add('active');

        //click on 'Sign in/Register' button
        let linkHead = document.querySelector('.head-login .link'),
            titleHead = document.querySelector('.head-login h3');
        linkHead.addEventListener('click', (e) => {
            if (titleHead.innerHTML === 'Sign in') {
                titleHead.innerHTML = 'Register';
                linkHead.innerHTML = 'Sign in';
                document.querySelector('.myAccountright').classList.remove('active')
                document.querySelector('.myAccountleft').classList.add('active')
            } else {
                titleHead.innerHTML = 'Sign in';
                linkHead.innerHTML = 'Register';
                document.querySelector('.myAccountleft').classList.remove('active')
                document.querySelector('.myAccountright').classList.add('active')
            }
        })
        document.querySelector(' .myAccountleft dd:nth-child(5) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)
        document.querySelector(' .myAccountleft dd:nth-child(6) input').insertAdjacentHTML('afterend',`<img class="eye" src="https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg" alt="eye icon">`)

        document.querySelectorAll(' .myAccountleft dd .eye').forEach(item => {
            item.addEventListener('click', () => {
                if (item.previousElementSibling.type == 'password') {
                    item.previousElementSibling.type = 'text';
                    item.src = 'https://conversionratestore.github.io/projects/medicalmega/img/eye.svg'
                } else {
                    item.previousElementSibling.type = 'password';
                    item.src = 'https://conversionratestore.github.io/projects/medicalmega/img/eye-through.svg'
                }
            })
        })

    }

    let saveAddress = (type,fname,lname,addr1,city,stateF,zip,country,phn,email) => {
        let body = JSON.stringify({
                "isPrimary": "1",
                "type": type,
                "fname": fname,
                "lname": lname,
                "addr1": addr1,
                "addr2": "",
                "city": city,
                "state": stateF,
                "zip": zip,
                "country": country,
                "phn": phn,
                "alt_phn": "",
                "email": email,
                "fax": ""
            }
        )
        return body
    }

    let shipFormHtml = (state, countries_ship, active, edit) => {
        return `
    <form class="ship-form ${edit} ${active}">
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="fname">Name <span class="c-red"> *</span></label>
            <input type="text" name="fname" placeholder="John">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="lname">Surname <span class="c-red"> *</span></label>
            <input type="text" name="lname" placeholder="Smith">
            <i></i>
        </dd>
        <dd style="width: 100%;float:left;padding-right: 8px">
            <label for="email">Email <span class="c-red"> *</span></label>
            <input type="text" name="email">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="country">Country <span class="c-red"> *</span></label>
            <select name="country"> ${countries_ship}</select>
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="addr1">Address line <span class="c-red"> *</span></label>
            <input type="text" name="addr1" placeholder="Street address, building, apt, atc.">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="city">City <span class="c-red"> *</span></label>
            <input type="text" name="city">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="state">State (Only applicable to US) <span class="c-red"> *</span></label>
            <select name="state"> ${state.innerHTML}</select>
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="zip">Zip / Postal Code <span class="c-red"> *</span></label>
            <input type="text" name="zip">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="phn">Phone <span class="c-red"> *</span></label>
            <input type="text" name="phn" placeholder="+1 (XXX) XXX-XXXX">
            <i></i>
        </dd>
        <dd style="width: 100%;display: ${edit != '' ? 'none':''}">
            <label>
                <input name="billing" type="checkbox" class="checkbox">
                <span>My Billing info is different</span>
            </label>
        </dd>
    </form>`
    }
    let billFormHtml = (state, countries_ship, active, edit) => {
        return `
    <form class="bill-form ${active} ${edit}">
        <dd style="width: 100%;">
            <label>
                <input name="shipping" type="checkbox" class="checkbox">
                <span>Copy from Shipping info</span>
            </label>
        </dd>
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="country">Country <span class="c-red"> *</span></label>
            <select name="country"> ${countries_ship}</select>
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="addr1">Address line <span class="c-red"> *</span></label>
            <input type="text" name="addr1" placeholder="Street address, building, apt, atc.">
            <i></i>
        </dd>
        <dd style="width: 100%;float:left;padding-right: 8px">
            <label for="email">Email <span class="c-red"> *</span></label>
            <input type="text" name="email">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="city">City <span class="c-red"> *</span></label>
            <input type="text" name="city">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="state">State (Only applicable to US) <span class="c-red"> *</span></label>
            <select name="state"> ${state.innerHTML}</select>
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-right: 8px">
            <label for="zip">Zip / Postal Code <span class="c-red"> *</span></label>
            <input type="text" name="zip">
            <i></i>
        </dd>
        <dd style="width: 50%;float:left;padding-left: 8px">
            <label for="phn">Phone <span class="c-red"> *</span></label>
            <input type="text" name="phn" placeholder="+1 (XXX) XXX-XXXX">
            <i></i>
        </dd>
    </form>
`
    }
    let fname, lname, addr1, city, stateF, zip, country, phn, email; //for forms

    //ship/bill addresses
    let addressCurrentHtml = (fname, lname, addr1, city, state, zip, country, phone, type) => {
        return `
        <div class="address ${type === 'bill' ? 'bill' : 'ship'}">
            <div>
                <button class="btn-edit" type="button">${type === 'ship' ? 'Edit Shipping Address' : 'Edit Billing Info'}</button>
                <div>
                    <p>${fname} ${lname}</p>
                    <p>${addr1}</p>
                    <p>${city}, ${state}, ${zip}</p>
                    <p>${country}</p>
                    <p>${phone}</p>
                </div>
            </div>
            ${type === 'ship' ? '<p class="link">View Your Billing Info</p>' : ''} 
        </div>`
    }

    //copy from shipping
    let copyFromShip = (e, formType) => {
        if (e.checked) {
            fetch(`/api/v1/addresses&type=ship`, {
                headers: headerFetchAddress,
                method: "GET",
            }).then(res => res.json()).then(data => {
                let address = data['addresses'][0]
                for (const keyShip in address) {
                    console.log(keyShip, address[keyShip])
                    if (document.querySelector(`.${formType}-form dd [name="${keyShip}"]`) != null && address[keyShip] != '') {
                        document.querySelector(`.${formType}-form dd [name="${keyShip}"]`).value = address[keyShip]
                    }
                }
            })
        }
    }
    //step 2 "Shipping Information"
    let currentAddressShip, currentAddressBill;
    let state_item, countries_ship_item
    if (href.includes('/checkout/step1') || href.includes('/checkout/step2') || href.includes('guest-checkout1.php')) {
        document.querySelector('.steps').innerHTML = `Step 2<span>/4</span> — ${obj['stepsName'][1]}`; //add steps in header
        if (document.querySelector('.tooltip') != null) {
            setTimeout(() => {
                document.querySelector('.tooltip').style.display = "none"
            }, 3000)
        }
    }
    if (href.includes('/checkout/step1') || href.includes('guest-checkout1.php')) {
        document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];
        state_item = href.includes('guest-checkout1.php') ? b_state : state;
        countries_ship_item = href.includes('guest-checkout1.php') ? b_country.innerHTML : countries_ship;
        fetch(`/api/v1/addresses`, {
            headers: headerFetchAddress,
            method: "GET",
        }).then(res => res.json()).then(data => {
            console.log(data)
            let addresses = data['addresses'];
            if (!!addresses && addresses.length > 0) {
                //Shipping Information - current users
                for (let i = 0; i < addresses.length; i++) {
                    if (addresses[i].type === 'ship') {
                        currentAddressShip = addresses[i]
                    } else {
                        currentAddressBill = addresses[i]
                    }
                    document.querySelector('.col-left .head').insertAdjacentHTML('afterend', addressCurrentHtml(addresses[i].fname, addresses[i].lname, addresses[i].addr1, addresses[i].city, addresses[i].state, addresses[i].zip, addresses[i].country, addresses[i].phn, addresses[i].type))
                    fname = addresses[i].fname;
                    lname = addresses[i].lname;
                    document.querySelectorAll('.btn-edit').forEach(item => {
                        item.addEventListener('click', (e) => {
                            e.stopImmediatePropagation()
                            if (item.closest('.ship') != null) {
                                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state_item, countries_ship_item,'active', 'edit'))
                                document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][1];
                                for (const keyShip in currentAddressShip) {
                                    if (document.querySelector(`.ship-form > dd [name="${keyShip}"]`) != null) {
                                        document.querySelector(`.ship-form > dd [name="${keyShip}"]`).value = currentAddressShip[keyShip];
                                    }
                                }
                            } else if (item.closest('.bill') != null) {
                                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, 'active','edit'))
                                document.querySelector('.col-left .head h4').innerHTML = 'Billing information';
                                for (const keyBill in currentAddressBill) {
                                    if (document.querySelector(`.bill-form > dd [name="${keyBill}"]`) != null) {
                                        document.querySelector(`.bill-form > dd [name="${keyBill}"]`).value = currentAddressBill[keyBill];
                                    }
                                }
                                document.querySelector('[name="shipping"]').addEventListener('click', (e) => copyFromShip(e.target, 'bill'))
                            }
                            document.querySelector('.btn-back span').innerHTML = 'Back';
                            document.querySelector('.btn-back').href = '/checkout/step1';
                            document.querySelectorAll('.address').forEach(el => el.style.display = 'none');
                        })
                    })
                }
                if (document.querySelector('.address.bill') != null && document.querySelector('.address .link') != null) {
                    document.querySelector('.address .link').addEventListener('click', (e) => {
                        e.target.hidden = true;
                        document.querySelector('.address.bill').style.display = 'block';
                    })
                }
                if (document.querySelector('.address.bill') == null && document.querySelector('.address.ship') != null) {
                    document.querySelector('.address .link').hidden = true;
                }
            } else {
                //Shipping Information - not filled
                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', shipFormHtml(state_item, countries_ship_item, 'active', ''))
                document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, '', ''))
                document.querySelector('[name="shipping"]').addEventListener('click', (e) => {
                    console.log(e.target)
                    copyFromShip(e.target, 'bill')
                })
            }
        })
    }

    let deliveryMethodHtml = (i, type, text, price) => {
        return `
        <label>
            <input type="radio" name="radio-method" class="checkbox" ${i==0?'checked':''}>
            <span class="items-center method">
                <span class="check"></span>
                <span class="type">${type}</span>
                <span class="ml-auto items-center">  
                    ${text != '' ? '<span class="text">' +text+'</span>':''}
                    <span class="price">${price}</span>
                </span>
            </span>
        </label>`
    }

    if (href.includes('/checkout/step2')) {
        document.querySelector('.col-left .head h4').innerHTML = 'Delivery Method';
        document.querySelector('.col-left .head').insertAdjacentHTML('afterend',`<div class="delivery-method"></div>`)
        document.querySelectorAll('#ship_options > li').forEach((item, index) => {
            let type = item.querySelector('p > i').innerText,
                text = '',
                price = item.querySelector('p > b') != null ? item.querySelector('p > b').innerText : item.querySelector('p > strong').innerText == 'FREE!' ? 'FREE!' : '';
            if (index == 0) {
                item.querySelector('input').checked = true;
            }

            if (item.querySelectorAll('p').length > 1) {
                text = item.querySelectorAll('p')[1].innerHTML.split('<strong')[0]
            }
            document.querySelector('.delivery-method').insertAdjacentHTML('beforeend', deliveryMethodHtml(index, type, text, price))
            document.querySelectorAll('[name="radio-method"]')[index].addEventListener('input', (e) => {
                document.querySelectorAll('#ship_options > li input')[index].checked = true
            })
        })
        document.querySelector('.col-left .delivery-method').insertAdjacentHTML('afterend',`
            <div class="promocode">
                <p>Promotional Code <span>(Optional):</span></p>
                <input type="text" placeholder="Enter your code">
            </div>`)
        document.querySelector('.promocode input').addEventListener('input', (e) => {
            document.querySelector('.promoCode').value = e.target.value;
        })
        if (document.querySelector('.primaryInfo .error') != null) {
            document.querySelector('.promocode').after(document.querySelector('.primaryInfo .error'))
            document.querySelector('.promocode input').value = document.querySelector('.promoCode').value;
        }
    }
    if (href.includes('/checkout/step3')) {
        document.querySelector('.steps').innerHTML = `Step 3<span>/4</span> — ${obj['stepsName'][2]}`; //add steps in header
        document.querySelector('.col-left .head h4').innerHTML = obj['stepsName'][2];

        document.querySelector('.col-left .head').after(document.querySelector('#checkoutForm'))
        document.querySelector('#checkoutForm h3').innerHTML = `Card Details <img src="https://conversionratestore.github.io/projects/medicalmega/img/payment-cards.png" alt="icons">`
        document.querySelector('#cc_block > dl > div.ccInfo > dd:nth-child(5)').innerHTML = `Credit/Debit Card<span class="c-red"> *</span>`;
        document.querySelector('#cc_block > dl > div.ccInfo > dd:nth-child(3)').innerHTML = `Name on card:<span class="c-red"> *</span>`;

        document.querySelector('.cc-recurring-setting').insertAdjacentHTML('beforebegin',`<label class="order-every items-center"><span class="check2"></span>${document.querySelector('.cc-recurring-setting').innerHTML}</label>`)
        document.querySelector('.order-every .check2').before(document.querySelector('#cc-recurring-check'))
        document.querySelector('#recurring_billing_period option').innerHTML = 'Choose Period'
        document.querySelector('.btn-next span').innerHTML = 'Proceed';
    }

    //set text for back button
    let setBack = () => {
        document.querySelector('.btn-back span').innerHTML = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][0]
        document.querySelector('.btn-back').href = obj['back'][document.querySelector('.col-left .head h4').innerHTML.toLowerCase()][1]
    }
    setBack()

    //set * request for label
    document.querySelectorAll('label').forEach(el => {
        if (el.innerHTML.includes('*') && el.innerHTML.includes('c-red')) {
            el.innerHTML = el.innerHTML.split('*').join('<span class="c-red"> *</span>')
        }
    })

    let address = (type) => {
        console.log(type)
        document.querySelector(`.ship-form [name="fname"]`) != null ? fname = document.querySelector(`.ship-form [name="fname"]`) : fname;
        document.querySelector(`.ship-form [name="lname"]`)  != null ? lname = document.querySelector(`.ship-form [name="lname"]`) : fname;

        addr1 = document.querySelector(`.${type}-form [name="addr1"]`);
        city = document.querySelector(`.${type}-form [name="city"]`);
        stateF = document.querySelector(`.${type}-form [name="state"]`);
        zip = document.querySelector(`.${type}-form [name="zip"]`);
        country = document.querySelector(`.${type}-form [name="country"]`);
        phn = document.querySelector(`.${type}-form [name="phn"]`);
        email = document.querySelector(`.${type}-form [name="email"]`);

        let dataDD = document.querySelectorAll(`.${type}-form dd.error`)
        console.log(type,fname,lname,addr1,city,stateF,zip,country,phn,email)
        let errorsFun = (dataErrors) => {
            dataDD.forEach(item => {
                item.classList.remove('error')
                item.querySelector('i').innerHTML = ''
            })
            document.querySelector('.error-other') != null ? document.querySelector('.error-other').remove() : ''
            if (dataErrors.length > 0) {
                for (let i = 0; i < dataErrors.length; i++) {
                    if (dataErrors[i].includes('First name')) {
                        fname.parentElement.classList.add('error')
                        fname.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('Last name')) {
                        lname.parentElement.classList.add('error')
                        lname.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('Address')) {
                        addr1.parentElement.classList.add('error')
                        addr1.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('City')) {
                        city.parentElement.classList.add('error')
                        city.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('State')) {
                        stateF.parentElement.classList.add('error')
                        stateF.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('Zip')) {
                        zip.parentElement.classList.add('error')
                        zip.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('Country')) {
                        country.parentElement.classList.add('error')
                        country.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('Phone')) {
                        phn.parentElement.classList.add('error')
                        phn.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i].includes('Email')) {
                        email.parentElement.classList.add('error')
                        email.nextElementSibling.innerHTML = dataErrors[i]
                    } else if (dataErrors[i] == 'Could not update address record. Nothing to update.'){
                        document.querySelector(`.${type}-form`).insertAdjacentHTML('afterend', `<p class="c-red error-other" style="margin: 10px 0">${dataErrors[i]}</p>`)
                    }
                }
            }
        }
        if (document.querySelector(`.ship-form.active`) != null) {
            if (document.querySelector(`.ship-form.active.edit`) != null) {
                postFetch(`/api/v1/addresses/${currentAddressShip.id}`, saveAddress('ship', fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'PUT').then(data => {
                    console.log(data)
                    let dataErrors = data.errors;
                    if (dataErrors.length < 1) {
                        window.location.href = `/checkout/step2`
                    } else {
                        errorsFun(dataErrors)
                    }
                })

            } else {
                if (document.querySelector(`.ship-form .checkbox[name="billing"]`).checked) {
                    postFetch('/api/v1/addresses', saveAddress('ship',fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'POST').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            postFetch('/api/v1/addresses', saveAddress('bill',fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'POST').then(dataBill => {
                                console.log(dataBill)
                                window.location.href = 'https://medicalmega.com/checkout/step2'
                            })
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                } else {
                    postFetch('/api/v1/addresses', saveAddress('ship',fname.value,fname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'POST').then(data => {
                        console.log(data)
                        let dataErrors = data.errors;
                        if (dataErrors.length < 1) {
                            document.querySelector('.col-left .head h4').innerHTML = 'Billing information';
                            setBack()
                            document.querySelector('.ship-form.active').classList.remove('active')
                            document.querySelector('.bill-form').classList.add('active')
                        } else {
                            errorsFun(dataErrors)
                        }
                    })
                }
            }

        } else {
            let fnameNew, lnameNew;
            if (fname.tagName === 'INPUT' && lname.tagName === 'INPUT') {
                fnameNew = fname.value;
                lnameNew = lname.value;
            } else {
                fnameNew = fname;
                lnameNew = lname;
            }

            if (document.querySelector(`.bill-form.active.edit`) != null) {
                postFetch(`/api/v1/addresses/${currentAddressBill.id}`, saveAddress('bill', fname.value,lname.value,addr1.value,city.value,stateF.value,zip.value,country.value,phn.value,email.value),'PUT').then(data => {
                    console.log(data)
                    let dataErrors = data.errors;
                    if (dataErrors.length < 1) {
                        window.location.href = `/checkout/step2`
                    } else {
                        errorsFun(dataErrors)
                    }
                })
            } else {
                postFetch('/api/v1/addresses', saveAddress('bill', fnameNew, fnameNew, addr1.value, city.value, stateF.value, zip.value, country.value, phn.value, email.value), 'POST').then(data => {
                    console.log(data)
                    let dataErrors = data.errors;
                    if (dataErrors.length < 1) {
                        window.location.href = 'https://medicalmega.com/checkout/step2'
                    } else {
                        errorsFun(dataErrors)
                    }
                })
            }
        }
    }

    //add click on next button
    document.querySelector('.btn-next').addEventListener('click', (e) => {
        if (document.querySelector('.myAccountright.active') != null) {
            document.querySelector('#login_btn').click()
        } else if (document.querySelector('.myAccountleft.active') != null) {
            document.querySelector('[name="register"]').click()
        } else if (document.querySelector('.ship-form.active') != null) {
            address('ship')
        } else if (document.querySelector('.bill-form.active') != null) {
            address('bill')
        } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') != null && document.querySelector('.bill-form.edit') == null && document.querySelector('.ship-form.edit') == null) {
            window.location.href = `https://medicalmega.com/checkout/step2`
        } else if (document.querySelector('.address.ship') != null && document.querySelector('.address.bill') == null && document.querySelector('.bill-form.active') == null) {
            document.querySelector('.address.ship').style.display = 'none'
            document.querySelector('.col-left .head h4').innerHTML = 'Billing information'; //change title
            //change back button
            setBack()
            //add billing form html
            console.log(state_item, countries_ship_item)
            document.querySelector('.col-left .head').insertAdjacentHTML('afterend', billFormHtml(state_item, countries_ship_item, 'active',''))
            //copy from Shipping
            document.querySelector('[name="shipping"]').addEventListener('click', (e) => copyFromShip(e.target, 'bill'))
        } else if (document.querySelector('.ship-form.edit') != null) {
            console.log('edit ship form')
            address('ship')
        } else if (document.querySelector('.bill-form.edit') != null) {
            console.log('edit bill form')
            address('bill')
        } else if (href.includes('checkout/step2')) {
            document.querySelector('form > div > input[type=image]').click()
        } else if (href.includes('checkout/step3')) {
            document.querySelector('#submitCheckout3').click()
        }
        scrollTop(e.target, document.body)
    })
}
else {
    //cart
    let cartModalHTML = `
    <div class="shopping-cart">
        <div class="container">     
            <div class="header-cart"><div class=" flex-center-between">Shopping cart <svg class="ml-auto" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4161 14L22.5939 5.44414C22.7142 5.30195 22.613 5.08594 22.4271 5.08594H20.245C20.1165 5.08594 19.9935 5.14336 19.9087 5.2418L13.9888 12.2992L8.06887 5.2418C7.98684 5.14336 7.86379 5.08594 7.73254 5.08594H5.55051C5.36457 5.08594 5.2634 5.30195 5.38372 5.44414L12.5614 14L5.38372 22.5559C5.35676 22.5876 5.33947 22.6263 5.3339 22.6675C5.32832 22.7088 5.33469 22.7507 5.35225 22.7884C5.36981 22.8262 5.39783 22.858 5.43297 22.8803C5.46812 22.9026 5.50891 22.9143 5.55051 22.9141H7.73254C7.86106 22.9141 7.98411 22.8566 8.06887 22.7582L13.9888 15.7008L19.9087 22.7582C19.9907 22.8566 20.1138 22.9141 20.245 22.9141H22.4271C22.613 22.9141 22.7142 22.698 22.5939 22.5559L15.4161 14Z" fill="#6D7E85"/></svg></div></div>
            <div class="body-cart">
               <ul class="list-product"></ul>
               <div class="justify-between subtotal"></div>
                <div class="also-bought">
                   <h4>Also bought with</h4>
                   <div class="slider-products"></div>
                </div>
            </div>
            <div class="footer-cart">
                <form action="https://medicalmega.com/guest-expresscheckout.php" method="POST" target="default" class="paypal-form-button">
                    <input type="image" name="submit" src="https://conversionratestore.github.io/projects/medicalmega/img/paypal.svg" border="0" align="top" alt="Check out with PayPal">
                </form>
                <p>or</p>
                <a href="https://medicalmega.com/checkout/step1" class="btn-next flex-center">
                   <span>Proceed to checkout</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9.32153V8.67847C3 8.5009 3.13431 8.35695 3.3 8.35695H13.002L10.332 5.50181C10.2752 5.44144 10.2433 5.35926 10.2433 5.27352C10.2433 5.18779 10.2752 5.10561 10.332 5.04524L10.758 4.59511C10.8143 4.53424 10.891 4.5 10.971 4.5C11.051 4.5 11.1277 4.53424 11.184 4.59511L14.868 8.537C14.9524 8.62736 14.9999 8.74995 15 8.87782V9.12218C14.9986 9.24977 14.9513 9.37186 14.868 9.463L11.184 13.4049C11.1277 13.4658 11.051 13.5 10.971 13.5C10.891 13.5 10.8143 13.4658 10.758 13.4049L10.332 12.9483C10.2756 12.8891 10.2438 12.8079 10.2438 12.7233C10.2438 12.6386 10.2756 12.5575 10.332 12.4982L13.002 9.64305H3.3C3.13431 9.64305 3 9.4991 3 9.32153Z" fill="#FBFBFB"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>`
    document.body.insertAdjacentHTML('afterbegin', styles); //add style for cart modal
    document.body.insertAdjacentHTML('beforeend', cartModalHTML); //add cart modal

    let linkCustom = document.createElement('link');
    linkCustom.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/tiny-slider.css';
    linkCustom.rel = 'stylesheet';
    document.head.appendChild(linkCustom);

    let scriptCustom = document.createElement('script');
    scriptCustom.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.3/min/tiny-slider.js';
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    //show/hide cart modal
    let showCart = () => document.querySelector('.shopping-cart').classList.add('active');
    let hideCart = () => document.querySelector('.shopping-cart').classList.remove('active');

    document.querySelector('.header-cart svg').addEventListener('click', () => {
        hideCart()
    })
    document.querySelector('.shopping-cart').addEventListener('click', (e) => {
        if(e.target.matches('.shopping-cart')) {
            hideCart()
        }
    })
    document.querySelector('.shoppingcart.tooltip-cart').addEventListener('click', (e) => {
        e.preventDefault();
        showCart()
    })
    //add products in slider
    let slideHTML = (url, urlImage, title, price, id, variantId, parent) =>  {
        let slide = `
            <div class="slide">
                <a href="${url}">
                    <span class="items-center">
                        <img src="${urlImage}" alt="${title}">
                        <span class="price">
                            <p></p>
                            <b>${price}</b>
                        </span>
                    </span>
                    <span class="name">${title}</span>
                </a>
                <div class="flex-center">
                    <button type="button" class="quantity-btn quantity-btn_minus">−</button>
                    <input type="number" name="quantity" value="1" class="quantity">
                    <button type="button" class="quantity-btn quantity-btn_plus" >+</button>
                </div>
                <button type="button" class="btn-add" data-variant-id="${variantId}" data-id="${id}">Add to cart</button>
            </div> `;

        document.querySelector(parent).insertAdjacentHTML('beforeend', slide)
    }

    //11212 Hand Sanitizing
    postFetch('/api/products',`offset=0&limit=6&is_featured=0&ctoken=${mm.ctoken}&category=11212`,'POST').then(data => {
        console.log(data)
        let products = data.products;
        for (let i = 0; i < products.length; i++) {
            slideHTML(products[i].url, products[i].variants[0].image_url, products[i].title, products[i].variants[0].regular_price, products[i].variants[0].product_id, products[i].variants[0].variant_id, '.slider-products')

            let plus = document.querySelectorAll(`.slide .quantity-btn_plus`)[i],
                minus = document.querySelectorAll(`.slide .quantity-btn_minus`)[i],
                quantity = document.querySelectorAll(`.slide .quantity`)[i];

            changeQuantity(plus, minus, quantity, false)

            let addBtns = document.querySelectorAll('.btn-add');
            addBtns[i].addEventListener('click', (e) => {
                postFetch('/cart.html',`api=c&cart_action=add&variant_id=${addBtns[i].dataset.variantId}&quantity=${addBtns[i].previousElementSibling.querySelector('.quantity').value}&product_id=${addBtns[i].dataset.id}&ctoken=${mm.ctoken}`,'POST').then(data => {
                    console.log(data)
                    cart()
                })

            })
        }
        tns({
            container: document.querySelector('.slider-products'),
            autoplay: false,
            autoWidth: true,
            // lazyload: true,
            axis: 'horizontal',
            startIndex: 0,
            controls: false,
            // loop: true,
            autoplayButton: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: false,
            // preventScrollOnTouch: 'auto',
            swipeAngle: false,
        });
    })
}

//cart product
let cart = () => {
    let parent = href.includes('/checkout/step') || href.includes('/login.php') || href.includes('/register.php') ? '.order_body' : '.list-product';

    //get data
    postFetch('/cart.html',`api=c&cart_action=cart&ctoken=${mm.ctoken}`,'POST').then(data => {
        console.log(data)
        let products = data['items'];
        document.querySelector(parent).innerHTML = '';
        if (parent == '.order_body') {
            document.querySelector('.order_head .price span').innerHTML = data.total.toFixed(2);
            pricing('.order_pricing', data)  //add pricing for order
        } else {
            document.querySelector('.subtotal').innerHTML = data.subtotal != 0 ? `<p>Total:</p> <p>$<span>${(+data.subtotal.toString().replace(/[^\d\.]/g,'')).toFixed(2)}</span></p>` : '';
            if (products.length < 1) {
                document.querySelector(parent).innerHTML = `<div class="empty-cart">
                           <p>Your cart is currently empty.</p>
                           <button type="button" class="btn-next"><span>Shop now</span></button>
                    </div>`;
                document.querySelector('.subtotal').style.display = 'none';
                document.querySelector(parent).style.margin = 'auto';
                document.querySelector('.footer-cart').style.display = 'none';
                document.querySelector('.body-cart').style.height = 'calc(100vh - 53px)';
            } else {
                document.querySelector('.subtotal').style = '';
                document.querySelector(parent).style = '';
                document.querySelector('.footer-cart').style = '';
                document.querySelector('.body-cart').style = '';
            }
            let qty = 0
            for (let i = 0; i < products.length; i++) {
                qty += +products[i].quantity;
            }
            console.log(qty)
            document.querySelector('.shoppingcart .by_num span').innerHTML = qty;
        }
        if (products.length > 0) {
            //product quantity changes
            let varQty = href.includes('checkout/step2') || href.includes('checkout/step3') ? 1 : 0
            for (let i = 0; i < products.length; i++) {
                //add products
                document.querySelector(parent).insertAdjacentHTML('beforeend', product(products[i].product_id, products[i].variant_id, products[i].quantity, products[i].subtotal, products[i].url, products[i].image_url, products[i].title, varQty))

                //remove product
                let remove = document.querySelectorAll('.remove');
                if (remove.length > 0) {
                    remove[i].addEventListener('click', (e) => {
                        console.log(e.target)
                        postFetch('/cart.html',`api=c&cart_action=remove&variant_id=${remove[i].closest('.product-item').dataset.variantId}&ctoken=${mm.ctoken}`,'POST').then(data => cart())
                    })
                }
                let plus = document.querySelectorAll(`${parent} .quantity-btn_plus`)[i],
                    minus = document.querySelectorAll(`${parent} .quantity-btn_minus`)[i],
                    quantity = document.querySelectorAll(`${parent} .quantity`)[i];

                varQty == 0 ? changeQuantity(plus, minus, quantity, true) : ''
            }
        }
    })
}
cart()

//
// search and filter
//
if (!href.includes('/checkout/') && !href.includes('login.php') && !href.includes('guest-checkout1.php') && !href.includes('register.php')) {

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

    let idCategory = '';

    let headerFetch = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: "GET",
    }

    let optionMut = {
        childList: true,
        subtree: true,
        attributes: true
    }

    let requestAllCaterories = new Promise((resolve, reject) => {
        fetch(`/api/categories&limit=100`, headerFetch).then(res => res.json()).then(data => resolve(data))
    })

    const API_KEY = `e3a0cffec873466acf71806748550356`;
    const APPLICATION_ID = `PXDJAQHDPZ`;

    const searchClient = algoliasearch(
        APPLICATION_ID,
        API_KEY,
    );

    const search = instantsearch({
        indexName: 'products',
        searchClient,
        routing: true,
        stalledSearchDelay: 500,
    });

    let actionDataLayer = '',
        labelDataLayer = '';

    function pushDataLayer(action,label) {
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

    function scrolled(element) {
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            element.setAttribute('class','ais-RefinementList-list')
        } else {
            element.setAttribute('class','ais-RefinementList-list scroll')
        }
    }

    let count = 0;

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
        if (document.querySelector('#lvl_categories li') != null && document.querySelector('.ais-RefinementList-item--selected') == null) {
            mut.disconnect();
            document.querySelector('#lvl_categories li').click()
        }

        mut.observe(document, optionMut);
        if (document.querySelector('#mm_per_page .ais-HitsPerPage-option') != null) {
            mut.disconnect();

            document.querySelector('#listing_container').classList.remove('loading');

            document.querySelector('#mm_per_page select').addEventListener('click', (e) => {
                actionDataLayer = 'Click on per page';
                pushDataLayer(actionDataLayer);
            })
        }
    })

    mut.observe(document, optionMut);

// window.onload = function() {
    document.querySelector('meta[name="viewport"]').content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
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
    if (window.location.pathname == '/' && document.querySelector('.homepage-container') != null) {
        document.querySelector('.homepage-container').insertAdjacentHTML('beforebegin', `<div id="listing_container" class=""></div>`); //loading
    }
    if (document.querySelector('#mainbody') != null) {
        document.querySelector('#mainbody').insertAdjacentHTML('beforebegin', `<div id="listing_container" style="display: none;" class=""></div>`); //loading
    }

    document.querySelector('#listing_container').insertAdjacentHTML('afterbegin',`
        <div id="lvl_categories"></div>
        <span class="result_for_search"></span>
        <div id="listing_main">
            <button type="button" class="btn_filter" data-button="popup_filter">Filters</button>
            <div id="stats-container"></div>
            <div class="flex-center-end page-result">
                <p>Results Per Page: </p>
                <div id="mm_per_page" ></div>
            </div>
            <div class="pagination1 pagination"></div>
            <div id="additional-categories"></div>
            <div id="hits"></div>
            <div class="pagination2 pagination"></div>
        </div>
       
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

            actionDataLayer = `Click on select current - ${el.innerText}`;
            labelDataLayer = 'Filter';
            pushDataLayer(actionDataLayer,labelDataLayer)
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

            actionDataLayer = `Click on the screen outside the filter`;
            labelDataLayer = 'Filter';
            pushDataLayer(actionDataLayer,labelDataLayer)
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
    let index = searchClient.initIndex('products');

    function initHits(hit) {
        function qty() {
            let option = ``;
            let qty = hit.qty == '0' && hit.in_stock==true ? 100 : hit.qty
            for (let n = 1; n <= +qty; n++) {
                option = option + `<option value="${n}">${n}</option>`;
            }
            return option
        }
        function optionBox() {
            let option = ``;
            for (let i = 0; i < hit.variants.length; i++) {
                let variantsArr = hit.variants[i];
                if (variantsArr.extra != '' && variantsArr.price != '0.00') {
                    option = `<option value="${variantsArr.pv_id}" ${variantsArr.extra == 'Each' ? 'selected':''} data-price="${variantsArr.price}" data-qty="${variantsArr.qty == '0' && variantsArr.in_stock==true ? '100': variantsArr.qty}"> ${variantsArr.extra} ${variantsArr.in_stock==false? ' (Out of stock)':''} </option>` + option;
                }
            }
            return option
        }
        function findImage() {
            for (let i = 0; i < hit.variants.length; i++) {
                if (hit.variants[i].image != '') {
                    return hit.variants[i].image
                }
            }
        }

        let boxItem = `
            <fieldset class="list_box2">
                <div class="list_type3">
                    <span><a href="https://medicalmega.com/product/${hit.seo}"><img class="product_img" alt="${hit.name}" src="https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/${findImage() != '' ? findImage() : 'dummyimage.jpg' }"></a></span>
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
                                <select name="quantity" style="width:42px; margin:6px 10px 8px 0; height:20px; float:right;" class="product-variant__quantity__select" data-qty="${hit.qty=='0' && hit.in_stock==true ? 100 : hit.qty}">${qty()}</select>
                            </span>
                            <input type="image" name="register_user" class="buynow2" src="https://medicalmega.com/images/buy-now.gif" alt="Submit" style="display:${hit.in_stock==false?'none':'block'};">
                            <div class="out-of-stock__box--pv" style="display:${hit.in_stock==false?'block':'none'}; ">
                                <p class="out-of-stock__message--pv">Out Of Stock</p>
                            </div>
                        </span>
                        <p style="clear:both;display:${optionBox().split('</option>').length>2?'block':'none'}">
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

    let inputWord = false;

    search.addWidgets([
        instantsearch.widgets.configure({
            facetFilters: [categoryFacet],
        }),

        instantsearch.widgets.searchBox({
            container: '#search-box',
            placeholder: window.location.pathname.includes('/category') ? `Search in this category` : 'Search Our Store',
            loadingIndicator: true,
            searchAsYouType: false,
            showLoadingIndicator: true,
            templates: {
                loadingIndicator: '<img src="https://conversionratestore.github.io/projects/medicalmega/img/loading-buffering.gif" alt="icon loading">',
            },
        }),
        instantsearch.widgets.hits({
            container: '#hits',
            templates: {
                empty: `No Item Found`,
                filters: [categoryFacet],
                item: (hit) => {
                    return initHits(hit)
                }
            },
        }),

        instantsearch.widgets.pagination({
            container: '.pagination1',
        }),
        instantsearch.widgets.pagination({
            container: '.pagination2',
        }),
        instantsearch.widgets.refinementList({
            container: `#lvl_categories`,
            attribute: categoryFacet.split(':')[0],
            transformItems(items) {
                return items.filter(item => item.label.toLowerCase().includes(categoryFacet.split(':')[1].toLowerCase()))
            },
        }),

        instantsearch.widgets.refinementList({
            container: '#manufacturer',
            attribute: 'manufacturer',
            limit: 7,
            showMore: true,
            showMoreLimit: 200,
            sortBy: ['name:asc'],
            templates: {
                item: (data) => {
                    let checkbox = `
                        <label class="align-items-center" onclick="pushDataLayer('Click on one of the brand items on filters')"> 
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
            sortBy: ['name:asc'],
            templates: {
                item: (data) => {
                    let sltPrice = '';
                    if (data.value.includes(' - ')) {
                        sltPrice = `$${data.value.split(' - ')[0]} - $${data.value.split(' - ')[1]}`
                    }  else {
                        sltPrice = `> $${data.value.split('> ')[1]}`;
                    }

                    let checkbox = `
                        <label class="align-items-center" onclick="pushDataLayer('Click on one of the price items on filters')">
                            <span class="check"></span>
                            <span class="check_text">${sltPrice} <span class="count_brand">(${data.count})</span></span>
                        </label>
                    `;

                    return checkbox
                },
            },
        }),
        instantsearch.widgets.stats({
            container: '#stats-container',
            templates: {
                text(data) {
                    let hits = data.nbHits;
                    let to = data.hitsPerPage * (data.page + 1);

                    let displ = data.page == 0 ? data.page + 1 : data.page * data.hitsPerPage + 1
                    if (data.hasManyResults) {
                        return `Displaying <b>${displ}</b> to <b>${to > hits?hits:to}</b> (of <b>${hits}</b> products)`;
                    } else if (data.hasOneResult) {
                        return `Displaying <b>${displ}</b> to <b>${to > hits?hits:to}</b> (of <b>${hits}</b> products)`;
                    } else {

                        actionDataLayer = `No result products`;
                        pushDataLayer(actionDataLayer)
                        return `no result`;
                    }
                },
            },
        }),
        instantsearch.widgets.hitsPerPage({
            container: '#mm_per_page',
            items: [
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15, default: true  },
                { label: '25', value: 25 },
                { label: '50', value: 50},
                { label: '100', value: 100 }
            ],
        }),
    ]);
    search.start();

    console.log(search)
    autocomplete('#search-box input', {hint: false, debug: true}, [
        {
            source: autocomplete.sources.hits(index, {hitsPerPage: 5, facetFilters: [categoryFacet]}),
            displayKey: 'name',
            openOnFocus: true,
            templates: {
                suggestion: function(suggestion) {
                    function findImage() {
                        for (let i = 0; i < suggestion.variants.length; i++) {
                            if (suggestion.variants[i].image != '') {
                                return suggestion.variants[i].image
                            }
                        }
                    }
                    let sugTemplate = "<img src='https://medicalmegaimgs.net/prod/uploaded/product/pro_thumb/"+ (findImage() != '' ? findImage() : 'dummyimage.jpg') +"'/><div><p class='name'>"+ suggestion._highlightResult.name.value +"</p><p class='item_num'>Item #" + suggestion._highlightResult.item_num.value + "</p><p class='price'>$" + suggestion.price + "</p></div>"

                    return sugTemplate;
                },
            },
        }
    ]).on('autocomplete:selected', function(event, suggestion, dataset) {
        window.location.href = `https://medicalmega.com/product/${suggestion.seo}`

        actionDataLayer = `Click on suggestion`;
        labelDataLayer = 'Autocomplete Header'
        pushDataLayer(actionDataLayer,labelDataLayer)
    })

    document.querySelector('.ais-SearchBox-submit').innerHTML = `Search`;

    function inputChange() {
        let value = document.querySelector('#search-box input').value;
        document.querySelector('.result_for_search').innerHTML = `Search result for '${value}'`;

        document.querySelector('.hits-selected') != null ? document.querySelector('.hits-selected').remove() : ''
        document.querySelector('.aa-suggestions') != null ? document.querySelector('.aa-suggestions').style.display = 'none': '';

        document.querySelector('#listing_container').style.display = 'block';
        if (window.location.pathname == '/') {
            document.querySelector('.homepage-container').style.display = 'none';
        }
        if (document.querySelector('#mainbody') != null) {
            document.querySelector('#mainbody').style.display = 'none';
        }

        document.querySelector('#listing_main').style = '';
    }

    //add text search result
    document.querySelector('#search-box input').addEventListener('click', (e) => {
        actionDataLayer = 'Click on input search';
        pushDataLayer(actionDataLayer)
    })

    document.querySelector('#search-box input').addEventListener('keypress', (e) => {
        if (e.keyCode == '13') {
            inputChange()
        }
    })
    document.querySelector('#search-box input').addEventListener('input', (e) => {
        inputWord = true;
        document.querySelector('.algolia-autocomplete pre').innerHTML = e.target.value;
        if (e.target.value.length < 1) {
            inputWord = false;
            document.querySelector('.algolia-autocomplete pre').innerHTML = '';
            if (document.querySelector('.hits-selected') != null) {
                document.querySelector('.hits-selected').remove();
            }
            document.querySelector('.result_for_search').innerHTML = `Search result for ''`;

            document.querySelector('#listing_main').style = '';

        }

    })

    if (window.location.pathname.includes('/category')) {
        document.querySelector('#listing_container').style.display = 'block';
        document.querySelector('#mainbody').style.display = 'none';
        document.querySelector('.result_for_search').before(document.querySelector('.listing .categoryTop'));
    }

    search.addWidgets([
        {
            render({ searchMetadata = {} }) {
                const { isSearchStalled } = searchMetadata

                if (isSearchStalled === false) {
                    console.log(isSearchStalled)
                    function selectOptions(select) {
                        let parent = select.closest('.list_box2');
                        let option = ``;
                        if (select.length > 0) {
                            let price = select.options[select.selectedIndex].dataset.price,
                                variantId = select.options[select.selectedIndex].value,
                                name = select.options[select.selectedIndex].innerText,
                                qty = select.options[select.selectedIndex].dataset.qty;

                            parent.querySelector(`.variant_tag span i`).innerHTML = price;
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
                                parent.querySelectorAll('.variant_tag span')[2].style.display = 'none';
                            } else {
                                parent.querySelector('.out-of-stock__box--pv').style.display = 'none';
                                parent.querySelector('.product_quantity').style.display = 'block';
                                parent.querySelector('.buynow2').style.display = 'block';
                                parent.querySelectorAll('.variant_tag span')[2].style.display = 'block';
                            }
                        }

                    }
                    document.querySelectorAll('#hits .product-variant').forEach((select, index) => {
                        selectOptions(select)
                        select.addEventListener('change', (e) => {
                            e.stopImmediatePropagation();
                            selectOptions(select)
                        })
                    })

                    if (document.querySelectorAll('.pagination1 .ais-Pagination-item--page').length < 2) {
                        document.querySelector('.pagination1').style.opacity = '0'
                        document.querySelector('.pagination2').style.opacity = '0'
                    } else {
                        document.querySelector('.pagination1').style.opacity = '1'
                        document.querySelector('.pagination2').style.opacity = '1'
                    }
                    document.querySelectorAll('.ais-Pagination-link').forEach(page => {
                        page.addEventListener('click', (e) => {
                            e.stopImmediatePropagation();
                            labelDataLayer = 'Pagination';
                            if (page.closest('.ais-Pagination-item--page')) {
                                actionDataLayer = `click on page ${e.target.innerText}`
                            } else if (page.closest('.ais-Pagination-item--previousPage')) {
                                actionDataLayer = `click on previous page`
                            } else if (page.closest('.ais-Pagination-item--firstPage')) {
                                actionDataLayer = `click on first page`
                            } else if (page.closest('.ais-Pagination-item--nextPage')) {
                                actionDataLayer = `click on next page`
                            } else if (page.closest('.ais-Pagination-item--lastPage')) {
                                actionDataLayer = `click on last page`
                            }
                            pushDataLayer(actionDataLayer,labelDataLayer)
                        })
                    })

                    if ( document.querySelector('#manufacturer .ais-RefinementList-list') != null) {
                        let element = document.querySelector('#manufacturer .ais-RefinementList-list');
                        element.addEventListener('scroll', () => scrolled(element));
                    }
                    if (document.querySelector('#manufacturer .ais-RefinementList-showMore') != null) {
                        document.querySelector('#manufacturer .ais-RefinementList-showMore').addEventListener('click', (e) => {

                            document.querySelector('#manufacturer .ais-RefinementList-list').classList.toggle('scroll');
                            e.target.innerText == 'Show more' ? document.querySelector('#manufacturer .ais-RefinementList-list').classList.remove('scroll'): ''

                            actionDataLayer = `click on show more button`;
                            labelDataLayer = 'Filters';
                            pushDataLayer(actionDataLayer,labelDataLayer)
                        })
                    }


                    if (document.querySelector('#price_group li') != null) {
                        let pricesContainer = document.querySelector('#price_group ul'),
                            para = document.querySelectorAll('#price_group li');

                        let paraArr = [].slice.call(para).sort(function (a, b) {
                            return a.querySelector('.check_text').innerText.split(' -')[0].replace('$','') - b.querySelector('.check_text').innerText.split(' -')[0].replace('$','')
                        });
                        paraArr.forEach(function (p) {
                            pricesContainer.appendChild(p);
                        });
                    }
                    document.querySelector('.ais-SearchBox-reset').addEventListener('click', (e) => {
                        inputWord = false;
                        document.querySelector('.hits-selected') != null ? document.querySelector('.hits-selected').remove() : ''
                        document.querySelector('.ais-SearchBox-input').value = '';
                        document.querySelector('.result_for_search').innerHTML = `Search result for ''`;

                        document.querySelector('#listing_main').style = '';

                        document.querySelector('.algolia-autocomplete pre').innerHTML = '';
                        document.querySelector('.ais-SearchBox-submit').click()
                    })
                    document.querySelector('.ais-SearchBox-submit').addEventListener('click', (e) => {
                        document.querySelector('.hits-selected') != null ? document.querySelector('.hits-selected').remove() : ''

                        document.querySelector('#listing_main').style = '';

                        document.querySelector('.ais-SearchBox-input').value =  document.querySelector('pre').innerHTML;
                        document.querySelector('.result_for_search').innerHTML = `Search result for '${document.querySelector('.ais-SearchBox-input').value}'`
                        actionDataLayer = 'Click on submit search';
                        pushDataLayer(actionDataLayer);
                        inputChange()
                    })
                }
            },
        },
    ])

    document.addEventListener('click', () => {
        if (inputWord == false) {
            document.querySelector('.ais-SearchBox-input').value = '';
        }
    })
// };

}

// let scriptAlgoliaLite = document.createElement('script');
// scriptAlgoliaLite.src = 'https://cdn.jsdelivr.net/npm/algoliasearch@3.35.1/dist/algoliasearchLite.min.js';
// scriptAlgoliaLite.async = false;
// document.head.appendChild(scriptAlgoliaLite);
//
// let scriptInstantsearch = document.createElement('script');
// scriptInstantsearch.src = 'https://cdn.jsdelivr.net/npm/instantsearch.js@4.0.0/dist/instantsearch.production.min.js';
// scriptInstantsearch.async = false;
// document.head.appendChild(scriptInstantsearch);
//
// let scriptAlgolia = document.createElement('script');
// scriptAlgolia.src = 'https://cdn.jsdelivr.net/algoliasearch/3/algoliasearch.min.js';
// scriptAlgolia.async = false;
// document.head.appendChild(scriptAlgolia);
//
// let scriptAutocomplete = document.createElement('script');
// scriptAutocomplete.src = 'https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.min.js';
// scriptAutocomplete.async = false;
// document.head.appendChild(scriptAutocomplete);
