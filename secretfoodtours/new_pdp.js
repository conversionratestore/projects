let dir = `https://conversionratestore.github.io/projects/secretfoodtours/img/`;
/* header */
let headerStyle = `
<style>
.lav-hide {
    display: none!important;
}
@media(max-width: 767px) {
    .main_container > header {
        z-index: 9999999;
    }
    .is_menu .btn-customer {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 14px;
        line-height: 1;
        text-transform: uppercase;
        color: #144732!important;
        border: 2px solid #144732;
        border-radius: 60px;
        text-align: center;
        transition: all 0.2s ease;
    }
    .is_menu .btn-customer:hover {
        color: #fff!important;
        background: #144732!important;
    }
    .is_menu .btn-customer:hover svg path {
        fill: #fff!important;
    }
    .is_menu .btn-customer span {
        padding: 13px 0 11px;
    }
    .is_menu .btn-customer svg {
        margin-right: 8px;
        flex-shrink: 0;
    }
    .is_menu .btn-customer.gold {
        color: #C39958!important;
        border-color: #C39958;
    }
    .is_menu .btn-customer.gold svg {
        margin-top: -3px;
    }
    .is_menu .btn-customer.gold:hover {
        background: #C39958!important;
        color: #fff!important;
    }
    .is_menu .btn-customer.gold:hover svg path {
        fill: #fff!important;
    }
    .is_menu .btn-customer.gold-full {
        background: #C39958;
        border: 1.5px solid #C39958;
        color: #FFFFFF!important;
        padding: 14px 24px 11px;
    }
    .is_menu .btn-customer.gold-full:hover {
        background: #fff;
        color: #C39958!important;
    }
    .is_menu .c-gold {
        color: #C39958!important;
    }
}
.searchdrop {
    z-index: 999!important;
}
.lav-menu_open {
    overflow: hidden;
}
a.new:after {
    border-radius: 25px;
    width: 34px;
    height: 18px;
    background-size: 100%;
    margin-top: -9px;
    right: -42px;
}
.searchdroptop {
    max-width: 100%;
}
@media(min-width: 1200px) {
    .main_container {
        max-width: 100%!important;
        padding: 0;
    }
}
.header_sticky {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease;
    transform: translateY(-100%);
}
.header_sticky.active {
    transform: translateY(0);
}
.header_sticky_top {
    background: #144732;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
}
.header_sticky .back {
    color: #FFFFFF;
    padding: 30px 30px 30px 0;
    border-right: 1px solid #fff;
    margin-right: 30px;
}
.header_sticky .back svg {
    margin-right: 20px;
}
.header_sticky .title {
    color: #FFFFFF;
    line-height: initial;
}
.header_sticky .menu a {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #5B5B5B;
    padding: 17px 0;
    border-bottom: 1px solid transparent;
    margin-right: 24px;
    display: block;
}
.header_sticky .menu a.active {
    border-color: #C39958;
    color: #C39958;
}
.header_sticky .star {
    margin-left: 4px;
}
.header_sticky .is_price {
    font-weight: 400;
    margin-right: 24px;
    text-align: right;
}
.header_sticky .is_price span {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
}
.header_sticky_to-rating {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #333333;
    margin-left: 12px;
}
.popular_tours_row > div {
    width: 25%;
    padding-right: 20px;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
}
.popular_tours_row img {
    background: #D9D9D9;
    border-radius: 20px;
    width: 100px;
    height: 100px;
    margin-right: 16px;
    flex-shrink: 0;
    object-fit: cover;
}
.popular_tours_row .name {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    margin-top: 6px;
    display: block;
}
.popular_tours_row .rate {
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    margin-left: 8px;
}
.popular_tours_row .more {
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    color: #C39958;
    margin-top: 8px;
}
.popular_tours_row .more svg {
    margin-left: 10px;
    margin-top: -4px;
}
.popular_tours {
    background: #EBEBE7;
    padding: 30px 0;
}
.popular_tours .title {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 16px;
    color: #333333;
}
.popular_tours .title svg {
    margin-right: 10px;
    margin-top: -2px;
}
.header_dropdown_top {
    background: #FFFFFF;
    border-top: 1px solid #EBEBE7;
}
.header_dropdown .city_wr {
    padding: 6px 0 30px;
}
.header_dropdown .block .heading div {
    background: none!important;
    margin-left: 10px;
    width: 10px;
    height: auto;
}
.header_dropdown .block .heading div svg {
    display: block;
}
.header_dropdown .country_wr {
    max-width: 100%!important;
    width: fit-content!important;
    margin: 0!important;
}
.right-menu a {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #333333;
    padding: 15px 0;
    margin-left: 30px;
}
.right-menu a:hover {
    color: #C39958;
}
.header_dropdown {
    padding: 0!important;
    background: #F3F3F3!important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)!important;
    z-index: 2000!important;
}
.header_dropdown .block .heading {
    margin: 0 40px 0 0!important;
    height: auto!important;
}
.header_dropdown .block ul li {
    margin: 0;
}
.header_dropdown .block ul li.country-16-title a, .header_dropdown .block ul li.country-16-title-nmt a {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
    margin: 24px 0 12px;
    display: flex;
    align-items: center;
}
.header_dropdown .block ul li a i {
    margin-right: 8px;
    margin-top: -4px;
    width: 24px;
    height: 18px;
}
.header_dropdown .block ul li.mt5 {
    padding-left: 45px;
    position: relative;
    margin-bottom: 12px;
}
.header_dropdown .block ul li.mt5:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 33px;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #C39958;
}
.header_dropdown .block .heading a {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    color: #333333;
    display: block;
    padding: 15px 0;
}
.header_dropdown .block .heading.active a {
    color: #C39958;
}
.header_dropdown .block .heading.active svg path {
    fill: #C39958;
}
.destinations-active {
    position: relative;
    z-index: 99;
}
.destinations-active:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: rgba(0,0,0,0.6);
}
.destinations-active .btn-customer.gold {
    display: flex!important;
}
header .search_header {
    background-color: transparent;
    margin-top: 0;
    top: 0;
}
header .search_header input {
    border: 1px solid #EBEBE7!important;
    border-radius: 20px!important;
    font-size: 14px!important;
    height: auto!important;
    padding: 14px 14px 12px 42px!important;
    line-height: 14px!important;
    background: url(${dir}search-icon-gray.svg) no-repeat 12px center / 20px;
}
header .search_header input::-webkit-input-placeholder {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #A9A9A9;
}
  
header .search_header input:-ms-input-placeholder {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #A9A9A9;
 }
  
header .search_header input::-ms-input-placeholder {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #A9A9A9;
 }
  
header .search_header input::placeholder {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #A9A9A9;
}
.destinations-active .header_dropdown {
    display: block!important;
}
.destinations-active .btns-header {
    position: absolute; 
    top: 0; 
    right: 0; 
    z-index: 999999;
    background: #fff;
}
.destinations-active header .search_header, .destinations-active header .search_header.visible_search {
    width: calc(100% - 270px)!important;
    z-index: 99999;
}
.destinations-active #close_ic_desktop {
    display: none!important;
}
.destinations-active .gold {
    display: flex!important;
}
header .btns-header a {
    margin-left: 16px;
}
header {
    background: #FFFFFF;
    box-shadow: 0px 2px 16px rgba(20, 71, 50, 0.15);
    transform: none!important;
    z-index: 9;
    position: relative;
}
header .visible_search .close_ic {
    top: 14px!important;
}
header .logo img {
    max-width: 200px;
}
header .main_menu li a {
    color: #333333!important;
    letter-spacing: initial;
}
header .main_menu li {
    display: flex;
    align-items: center;
    padding-top: 10px;
}
header .container {
    max-width: 1340px;
    padding: 0 20px;
}
header .main_menu {
    margin: 0 auto;
}
header .search_btn {
    width: 20px;
    height: 20px;
    background: url(${dir}search-icon.svg) no-repeat center / 100%;
    margin-left: 20px;
}
@media screen and (min-width: 991px) {
    header .search_header.visible_search {
        min-height: 100%;
    }
}
@media screen and (min-width: 768px) {
    .help_center .container:first-child .left_help {
        display: flex;
    }
    header .search_header input {
        width: 400px!important;
    }
    .gallery-bottom.center {
        width: 50%!important;
        left: 50%;
        transform: translateX(-50%);
    }
}
@media screen and (max-width: 1335px) {
    header .btns-header a {
        margin-left: 0;
    }
    ul.main_menu li {
        margin: 10px 7px!important;
    }
    ul.main_menu li:last-child {
        margin-right: 0!important;
    }
}
@media screen and (max-width: 767px) {
    header {
        padding: 10px 20px!important;
        height: auto;
    }
    .inner_page header .container {
        position: initial;
        padding: 0!important;
    }
    header .search_btn {
        display: block!important;
        margin-left: auto;
        margin-right: 24px;
    }
    header .search_header .search_btn {
        display: none!important;
    }
    header .search_header {
        width: 100%!important;
        display: flex!important;
        right: 0;
        top: 0;
        opacity: 0;
        padding: 9px 20px;
        pointer-events: none;
        background: #fff;
    }
    header .search_header.visible_search {
        top: 100%;
        opacity: 1;
        pointer-events: auto;
    }
    #close_ic_desktop {
        width: 12px;
        height: 12px;
        background: url('https://www.secretfoodtours.com/img/icons/close_green.svg') no-repeat center / contain;
        right: 36px!important;
    }
    header .visible_search .close_ic {
        top: 24px!important;
    }
}
</style>
`;
let styles = `
<style>
.main_container {
    max-width: 100%!important;
    padding: 0;
}
#tour_f_btn {
    display: none;
}
@media screen and (max-width: 1199px) {
    #tour_f_btn {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2000;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        padding: 6px 12px;
        background: #F3F3F3;
    }  
    .destination_page_wr .tour_fixed_btn {
        position: static;
        display: flex;
        border-radius: 30px;
        height: 44px;
        font-family: JosefinSans-bold;
    }
    .lav-sticky__price {
        margin-bottom: -4px;
        display: flex;
        align-items: baseline;
        font-weight: 400;
        font-size: 12px;
        line-height: 1;
        color: #333333;
        margin-right: 30px;
        white-space: nowrap;
        font-family: JosefinSans-regular;
    }
    .lav-sticky__price .lav-price {
        font-weight: 700;
        font-size: 20px;
        margin-right: 3px;
        font-family: JosefinSans-bold;
    }
    .lav-sticky__price .lav-currency {
        font-weight: 700;
        font-size: 14px;
        font-family: JosefinSans-bold;
    }
}
header {
    position: relative!important;
}
header .main_menu {
    flex-basis: 56%!important;
}
/* customer */
.swiper-slide {
    height: auto!important;
}
.destination_page_wr .destination_content .main_container {
    position: initial;
}
.link-customer {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
    color: #333333;
    padding: 0 0 16px;
    margin-bottom: 11px;
}
.link-customer > a {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    color: #333333;
}
.link-customer svg {
    margin-right: 8px;
}
.tooltipe {
    position: relative;
}
.tooltipe * {
    pointer-events: none;
}
.tooltipe:hover .tooltipe-content {
    opacity: 1;
    pointer-events: auto;
}
.tooltipe-content {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    background: #fff;
    border-radius: 20px;
    z-index: 2;
    left: 50%;
    line-height: 16px!important;
    font-size: 14px!important;
    font-weight: 400!important;
    transform: translateX(-50%);
    bottom: calc(100% + 5px);
    width: 260px;
    padding: 20px;
    transition: all 0.2s ease;
    box-shadow: 0px 2px 16px rgba(20, 71, 50, 0.15);
    text-align: left!important; 
}
.underline {
    text-decoration-line: underline;
}
.btn-customer {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    color: #144732!important;
    border: 2px solid #144732;
    border-radius: 60px;
    text-align: center;
    padding: 0 24px;
    transition: all 0.2s ease;
}
.btn-customer:hover {
    color: #fff!important;
    background: #144732!important;
}
.btn-customer:hover svg path {
    fill: #fff!important;
}
.btn-customer span {
    padding: 13px 0 11px;
}
.btn-customer svg {
    margin-right: 8px;
    flex-shrink: 0;
}
.btn-customer.gold {
    color: #C39958!important;
    border-color: #C39958;
}
.btn-customer.gold svg {
    margin-top: -3px;
}
.btn-customer.gold:hover {
    background: #C39958!important;
    color: #fff!important;
}
.btn-customer.gold:hover svg path {
    fill: #fff!important;
}
.btn-customer.gold-full {
    background: #C39958;
    border: 1.5px solid #C39958;
    color: #FFFFFF!important;
    padding: 14px 24px 11px;
    white-space: nowrap;
}
.btn-customer.gold-full:hover {
    background: #fff;
    color: #C39958!important;
}
.c-gold {
    color: #C39958!important;
}
.header_sticky .title, .why-tour h2, .meeting-spot__covid .main_subheading, .meeting-spot__contact .name, .slider-gallery .swiper-pagination.swiper-pagination-fraction, .slider-review .swiper-pagination.swiper-pagination-fraction  {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #333333;
}
.destination_page_wr .destination_content .destination_descr {
    padding: 0;
}
.swiper-pagination-lock, .get_in_touched, .what_we_taste, .destination_page_wr .destination_content .plugin_right .buy, .destination_content > .container, .destination_descr .container, #plugin [style="background-color: #0a88ff; padding:10px;"], .breadcrumbs, .destination_page_wr .destination_content .plugin_right > .price, .destination_page_wr .destination_content .plugin_right .heading, .tour-features, .similar, header > .container > ul > li:nth-child(2), .banner_top, .parallax-mirror, body > div.global_wr > div > div.tour-intro > div.container > div > div.col-md-12.col-xl-8, .destination_page_wr .tour-intro .plugin_right .heading, .text-red, .text-pt, .text-pt-disclaimer, .destination_page_wr .tour-intro .plugin_right .buy {
    display: none!important;
}
/* social-fixed  */
.social-fixed {
    position: fixed;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 3;
}
.social-fixed a {
    padding: 15px;
}
/* tour-section */
.tour-section {
    font-family: 'Josefin Sans', sans-serif;
    padding: 42px 0;
    overflow: hidden;
}
.tour-section button {
    background-color: transparent;
}
.tour-section .container {
    max-width: 1340px;
    padding: 0 20px;
    margin: 0 auto;
}
.tour-section > .container > div:not(.why-tour) > .left {
    width: calc(100% - 342px);
    padding-right: 24px;
}
.tour-section h1 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: #333333;
    margin: 0 16px 0 0;
}
.rating {
    margin: 20px 0 24px;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #333333;
}
.rating .star {
    margin-right: 4px;
}
.rating .star-ratings {
    display: none;
}
.rating svg:not(.star) {
    margin-right: 8px;
}
.rating .to-rating {
    padding-right: 14px;
    margin-right: 14px;
    border-right: 1px solid #333333;
}
.rating .rate-tours {
    margin-left: 10px;
}
.rating .to-rating, .rating .rate-tours {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #333333;
}
.best-seller {
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #C39958;
    border-radius: 4px;
    padding: 6px 8px 3px;
    height: fit-content;
    white-space: nowrap;
    width: fit-content;
}
.breadcrumbs-customer {
    margin-bottom: 20px;
    padding: 0;
    display: inline-block;
}
.breadcrumbs-customer li {
    float: left;
}
.breadcrumbs-customer li a {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #A9A9A9;
}
.breadcrumbs-customer li:last-child a {
    color: #C39958;
}
.breadcrumbs-customer li:not(:last-child):after {
    content: '/';
    background: none;
    color: #A9A9A9;
    margin: 0 4.5px;
    width: auto;
    height: auto;
}
.gallery {
    width: 100%;
    height: 557px;
    margin-bottom: 24px;
    border-radius: 20px;
    padding: 0;
    overflow: hidden;
    position: relative;
}
.gallery:after {
    content: '';
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.16) 84.45%, rgba(0, 0, 0, 0.4) 100%);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}
.gallery > div {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    width: 100%;
    z-index: 2;
}
.gallery .swiper-slide {
    width: 100%;
    height: 100%;
}
.gallery .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper-slide-video * {
    padding: 0!important;
    height: 100%;
    width: 100%;
}
.btn-gallery {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    background-color: transparent;
    border-radius: 60px;
    padding: 11px 24px;
}
.btn-arrow {
    border: 2px solid #FFFFFF;
    border-radius: 33px;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
}
.gallery-count {
    padding: 0 12px;
    font-weight: 700;
    font-size: 20px;
    line-height: 48px;
    color: #FFFFFF;
    display: flex;
}
/* right */
.right-header {
    padding: 12px 24px;
}
.right-header h2 {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    text-transform: uppercase;
    white-space: nowrap;
    color: #C39958;
}
.destination_page_wr .tour-intro .plugin_right .right-header .price .price.no-mobile {
    display: block!important;
}
.right-header .price span, .destination_page_wr .tour-intro .plugin_right .price span {
    font-weight: 700;
    font-size: 32px;
    line-height: 1;
    color: #144732;
    text-align: right;
    display: block;
}
.right-header .price, .destination_page_wr .tour-intro .plugin_right .price {
    font-weight: 400;
    font-size: 16px!important;
    line-height: 16px!important;
    color: #A9A9A9!important;
    display: block;
    margin: 0!important;
    text-align: right;
}
.destination_page_wr .destination_content .plugin_right .plugin {
    margin: 0!important;
}
.destination_page_wr .tour-intro .plugin_right .plugin {
    margin: 0;
}
#plugin {
    position: absolute;
    top: 122px;
    padding: 0!important;
    border: 2px solid #F3F3F3;
    border-radius: 20px;
    max-width: 342px!important;
    display: block!important;
    height: auto!important;
    opacity: 0;
    z-index: 2;
}
.destination_page_wr .destination_content .plugin_right .close_btn {
    display: none!important;
}
.destination_page_wr .tour-intro .plugin-col, .plugin-col {
    position: inherit!important;
}
#plugin iframe {
    width: calc(100% + 2px)!important;
    margin: 0 -1px;
}
.right-content {
    padding: 0 14px 14px;
}
.right-content .btn-customer {
    font-size: 12px;
    padding: 14px 13.5px 12px;
}
.awards-desktop {
    margin: 0;
}
.right-footer {
    background: #F3F3F3;
    border-radius: 0 0 20px 20px;
    padding: 24px;
    color: #333333;
    line-height: 20px;
}
.right-footer > p {
    font-family: 'Josefin Sans';
    font-weight: 700;
    font-size: 16px;
    text-align: left;
}
.right-footer > div {
    margin-top: 20px;
}
.right-footer > div > svg {
    flex-shrink: 0;
    margin-right: 12px;
}
.right-footer > div > p {
    font-size: 14px;
    border-left: 2px solid #333333;
    padding-left: 12px;
}
.right-footer > div > p svg {
    display: block;
    margin-bottom: 4px;
}
/* descr */
.descr-section {
    background: #F3F3F3;
    border-radius: 24px;
    padding: 0 40px 24px;
    font-family: 'Josefin Sans';
    font-style: normal;
    margin-bottom: 24px;
}
.descr-section img {
    height: 18px;
    flex-shrink: 0;
    margin-right: 6px;
}
.descr-section .name {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #5B5B5B;
    margin-bottom: 6px;
    margin-top: 24px;
}
.descr-section .info {
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
}
/* brands */
.brands {
    border: 2px dashed #EBEBE7;
    border-radius: 20px;
    padding: 24px 34px;
    margin-bottom: 60px;
}
/* tour-drinks, drinks */
.tour-drinks {
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 24px;
    max-width: 860px;
}
.tour-drinks::before {
    right: 0;
    top: 66px;
    height: calc(100% - 66px);
    width: 100%!important;
    background: #F3F3F3;
    border-radius: 20px;
}
.tour-drinks .main_subheading, .tour-do .title , .meeting-spot .title, .other-tours h2, .video-section h2, .photos-gallery h2, .tour-section .review h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    text-transform: uppercase;
    color: #333333;
    margin: 0 0 24px 0;
    position: relative;
    z-index: 1;
    font-family: "Segoe UI",Arial,sans-serif;
}
.tour-drinks .main_subheading:before, .tour-do .title:before, .meeting-spot .title:before, .other-tours h2:before, .tour-section .review h2:before {
    content: '';
    width: 100%;
    height: 6px;
    position: absolute;
    left: 0;
    bottom: 11px;
    z-index: -1;
    background: linear-gradient(90deg, #F3F3F3 0%, rgba(243, 243, 243, 0) 100%);
}
.food_wr {
    padding: 40px 40px 30px;
    display: flex;
}
.food_block {
    width: 100%;
}
.food_block:first-child {
    padding-right: 20px;
}
.food_block .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 20px;
}
.food_block .title svg {
    margin-right: 10px;
    flex-shrink: 0;
}
.food_wr ul li, .drinks ul li {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #5B5B5B;
    display: flex;
}
.food_wr ul li:before, .drinks ul li:before {
    content: '';
    background-color: #C39958;
    display: block; 
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 11px;
}
.tour-drinks > p {
    border: 2px dashed #EBEBE7;
    border-radius: 20px;    
    padding: 20px;
    font-weight: 300;
    font-size: 16px!important;
    line-height: 26px;
    color: #5B5B5B;
    max-width: calc(100% - 80px)!important;
    margin: 0 auto;
}
.tour-drinks > p br {
    display: none!important;
}
.tour-drinks > p em {
    font-style: normal!important;
}
.drinks {
    background: #F3F3F3;
    border-radius: 20px;
    padding: 30px 40px;
    margin-bottom: 60px;
    max-width: 860px;
}
.drinks .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    margin-bottom: 20px;
}
.drinks .title {
    text-transform: uppercase;
}
.drinks .title span {
    font-weight: 400;
    display: block;
    color: #5B5B5B;
    margin-top: 2px;
    text-transform: initial;
}
.drinks .title svg {
    flex-shrink: 0;
    margin-right: 10px;
}
.drinks ul {
    margin-bottom: 27px;
}
.drinks .buy-2 {
    border: 1.5px solid #144732;
    border-radius: 60px;
    font-weight: 700;
    font-size: 14px!important;
    line-height: 14px;
    margin: 0 24px 0 0;
    padding: 13px 12px 10px;
    letter-spacing: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
}
.drinks .buy-2:hover {
    color: #144732!important;
    background-color: #fff!important;
}
.drinks .buy-2:hover svg path {
    fill: #144732!important;
}
.drinks .buy-2 svg {
    margin-right: 8px;
}
.drinks .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #5B5B5B;
    max-width: 450px;
}
/* tour-do */
.content-text {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #5B5B5B;
}
.content-text .text {
    margin-bottom: 14px;
}
.tour-do {
    margin-bottom: 60px;
    max-width: 860px;
}
.tour-do ul {
    background: #F3F3F3;
    border-radius: 20px;
    padding: 30px;
}
.tour-do ul li {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
}
.tour-do ul li:not(:last-child) {
    padding-bottom: 30px;
    position: relative;
}
.tour-do ul li:not(:last-child):before {
    content: '';
    position: absolute;
    left: 14px;
    bottom: 4px;
    height: calc(100% - 8px - 36px);
    width: 2px;
    border-left: 2px dotted #C39958;;
}
.tour-do ul li svg {
    margin-right: 23px;
    flex-shrink: 0;
}
.tour-do .note {
    border: 2px dashed #EBEBE7;
    border-radius: 20px;   
    margin-top: 24px;
    padding: 20px;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
}
.tour-do .note, .tour-do .note strong {
    color: #5B5B5B; 
}
/* spot */
.meeting-spot {
    margin-bottom: 90px;
}
#spot_beer_tour_amsterdam {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #5B5B5B;
}
.meeting-spot .notate {
    border: 2px dashed #EBEBE7;
    border-radius: 20px;
    padding: 20px;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #5B5B5B;
    margin: 24px 0;
}
.meeting-spot .grey_block {
    background: #F3F3F3;
    border: 2px solid #EBEBE7;
    border-radius: 20px;
    padding: 21px 30px 19px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
}
.meeting-spot .grey_block .left p {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #333333;
}
.meeting-spot .grey_block .left .item {
    display: flex;
}
.meeting-spot .grey_block .left .item:before {
    content: '';
    background: url('${dir}calendar.svg') no-repeat left top / 30px;
    width: 30px;
    height: 30px;
    margin-right: 16px;
    margin-bottom: 5px;
}
.meeting-spot .grey_block .left p span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #5B5B5B;
    display: block;
    margin-top: 5px;
    text-transform: initial;
}
.meeting-spot .grey_block .right {
    min-width: 270px;
}
.meeting-spot .grey_block .right .item p span {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
}
.meeting-spot .grey_block .right .item p {
    position: relative;
}
.meeting-spot .grey_block .right .item p:before {
    content: '';
    background: url('${dir}pin.svg') no-repeat center / contain;
    width: 13px;
    height: 16px;
    position: absolute;
    right: calc(100% + 10px);
    top: 0;
}
.meeting-spot .grey_block .right .item p a {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #144732;
    margin-top: 5px;
    display: flex;
    align-items: center;
}
.meeting-spot .grey_block .right .item p a:after {
    content: '';
    background: url('${dir}arrow.svg') no-repeat center / contain;
    width: 11px;
    height: 11px;
    margin-left: 8px;
}
.meeting-spot__left {
    width: calc(100% - 420px);
    padding-top: 19px;
    padding-right: 20px;
}
.meeting-spot__right {
    width: 420px;
}
.meeting-spot__covid, .meeting-spot__contact {
    border: 2px solid #EBEBE7;
    border-radius: 20px;
    padding: 24px;
    min-height: 230px;
}
.meeting-spot__covid {
    margin-bottom: 24px;
}
.meeting-spot__covid .main_subheading {
    line-height: 32px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.meeting-spot__covid li {
    list-style-type: disc;
}
.meeting-spot__contact {
    display: flex;
    flex-direction: column;
}
.meeting-spot__covid img {
    display: none;
}
.meeting-spot__covid .main_subheading img {
    margin-right: 19px;
    width: 64px;
    height: auto;
    display: block;
}
.meeting-spot__covid .text {
    font-size: 16px;
    line-height: 22px;
    color: #5B5B5B;
}
.meeting-spot__covid .buy-covid {
    border: 2px solid #144732;
    border-radius: 49px;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    padding: 16px 5px 12px;
    width: 100%;
    text-transform: uppercase;
    color: #144732;
    background: transparent;
    margin-top: 24px;
}
.meeting-spot__covid .buy-covid:hover {
    color: #fff;
    background-color: #144732;
}
.meeting-spot__contact .title-guide {
    font-size: 16px;
    line-height: 32px;
    color: #333333;
}
.meeting-spot__contact .name {
    line-height: 32px;
    color: #C39958;
}
.meeting-spot__contact .PT_link_black {
    background: transparent;
    max-width: 100%;
    margin-top: auto;
}
.meeting-spot__contact .PT_link_black a {
    background: #144732;
    border-radius: 49px;
    width: 100%;
    display: block;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
    padding: 18px 16px 14px!important;
    border: 1px solid #144732;
}
.meeting-spot__contact .PT_link_black a:hover {
    color: #144732!important;
    background: #fff;
    opacity: 1;
}
/* video-section, photos-gallery */
.video-section {
    margin-bottom: 90px;
    background: url(${dir}bg-dashed.svg) no-repeat center calc(50% + 74px) / 100%;
}
.video-section h2 {
    line-height: 48px;
    margin: 0 0 26px;
}
.video-section iframe, .slider-gallery .swiper-slide img {
    border-radius: 20px;
}
.photos-gallery {
    margin-bottom: 50px;
}
.photos-gallery h2 {
    line-height: 48px;
    margin: 0 0 22px;
}
.slider-gallery  {
    overflow: hidden;
    position: relative;
    padding-bottom: 80px;
}
.swiper-button-next, .swiper-button-prev {
    top: auto!important;
    bottom: 0;
    left: 50%!important;
    margin-top: 0!important;
    border: 2px solid rgba(20, 71, 50, 0.3);
    border-radius: 50%;
    display: flex;
    width: 42px!important;
    height: 42px!important;
    background: none!important;
}
.swiper-button-next:hover, .swiper-button-prev:hover {
    background-color: rgba(20, 71, 50, 0.15);
}
.swiper-button-next svg, .swiper-button-prev svg {
    margin: auto;
}
.swiper-button-next {
    transform: translateX(calc(-50% + 58px));
}
.swiper-button-prev {
    transform: translateX(calc(-50% - 58px));
}
.swiper-button-next:after, .swiper-button-prev:after {
    content: none;
    display: none!important;
}
.swiper-pagination.swiper-pagination-fraction {
    line-height: 42px;
    color: #333333!important;
    bottom: 0;
    display: flex;
    justify-content: center;
}
/* why-tour */
.why-tour {
    margin-bottom: 90px;
    position: relative;
    z-index: 1;
}
.why-tour:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: #F3F3F3;
    border-radius: 20px;
    width: 80%;
    height: var(--height);
    z-index: -1;
}
.why-tour .title {
    padding: 40px 40px 16px 40px;
}
.why-tour h2 {
    line-height: 44px;
    padding-left: 20px;
    margin: 0;
}
.why-tour .text {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #5B5B5B;
    padding: 0 30px 40px 40px;
    min-height: 172px;
}
.why-tour .btn-customer {
    padding: 17px 10px 13px;
    width: 49%;
    margin-top: 40px;
}
.why-tour .btn-customer:not(.gold) {
    background: #144732;
    color: #fff!important;
}
.why-tour .btn-customer:not(.gold):hover {
    color: #144732!important;
    background: #fff!important;
}
.why-tour > div {
    width: 50%;
}
.why-tour .right {
    padding: 40px 0 0 10px;
}
.why-tour .right img {
    border-radius: 20px;
}
.why-tour .btns {
    padding-right: 55px;
}
/* other-tours */
.other-tours {
    margin-bottom: 55px;
}
.other-tours .row {
    margin: 0;
}
.other-tours .cardx {
    background: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 30px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin-right: 20px;
    width: calc(33.33% - 14px);
    padding: 0;
    position: relative;
    flex: auto;
    margin-bottom: 20px;
    max-width: 420px!important;
}
.other-tours .cardx:nth-child(3n+3) {
    margin-right: 0;
}
.other-tours .cardx a img {
    padding: 0;
    height: 205px;
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
}
.other-tours .cardx-container-details .cardx-desc ~ span[style] {
    position: absolute;
    top: 19px;
    right: 0;
    // background-color: #ED6664!important;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px!important;
    padding: 0 10px!important;
    line-height: 30px;
    border-radius: 30px 0 0 30px!important;
}
.other-tours .cardx-container-details {
    padding: 10px 24px 24px;
    margin: 0;
    box-shadow: none!important;
    background-color: transparent!important;
    height: auto;
    min-height: 312px;
    display: flex;
    flex-direction: column;
}
.other-tours .cardx-price {
    padding: 0;
    margin-top: -10px;
    transform: translateY(-50%);
    font-family: 'Playfair Display', serif;
    font-feature-settings: 'pnum' on, 'lnum' on;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #144732;
    padding: 0 10px 0 28px;
    z-index: 2;
    position: relative;
    display: flex;
    height: fit-content;
    align-items: flex-end;
}
.other-tours .cardx-price span {
    font-size: 16px;
    line-height: 29px;
}
.other-tours .cardx-title {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #333333;
    padding: 0 0 12px 0;
}
.other-tours .cardx-price svg {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
}
.other-tours .cardx-desc {
    line-height: 22px;
    color: #5B5B5B;
    overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
   -webkit-box-orient: vertical;
   min-height: 66px;
   padding: 0;
}
.other-tours .cardx-tags {
    margin-top: 16px;
}
.other-tours .star-ratings {
    height: fit-content;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
.other-tours .star-ratings svg {
    margin-right: 4px;
}
.other-tours .rate-tours {
    color: #333333;
}
.other-tours .cardx-tags span {
    padding: 0;
    width: 50%;
    margin-bottom: 12px;
    display: block;
}
.other-tours .cardx-tags span img {
    margin-right: 7px;
}
.other-tours .cardx-buttons-one, .other-tours .cardx-buttons-tow {
    border-radius: 29px;
    flex: inherit;
    width: 48%;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    height: auto;
    margin-top: 4px;
    transition: all 0.2s ease;
    border-width: 2px;
    padding: 10px 5px 7px;
}
.other-tours .cardx-buttons-one:hover, .other-tours .card-buttons .cultural-tours:hover {
    color: #134633!important;
    background-color: #fff!important;
}
.other-tours .cardx-buttons-tow:hover {
    background-color: #C39958!important;
    color: #fff;!important;
}
.other-tours .cardx-buttons-tow {
    border: 3px solid #C39958;
    color: #C39958;
}
.other-tours .card-buttons .cultural-tours {
    background-color: #144732!important;
    max-width: initial!important;
    border-radius: 29px;
    width: fit-content!important;
    font-family: 'Josefin Sans';
    padding: 12px 40px 9px;
}
.card-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
}
.other-tours .star-ratings::before {
    content: none!important;
    display: none;
}
.other-tours .tour_link .label {
    position: absolute;
    z-index: 5;
    top: 20px;
    left: 20px;
    color: #c49959;
    font: 12px/14px JosefinSans-Regular;
    letter-spacing: 1.1px;
    text-transform: uppercase;
    background: #fff;
    padding: 7px 12px;
}
.other-tours > div > .col-md-6 {
    padding: 0;
}
.other-tours .tour_link .descr {
    background-color: rgba(0,0,0,.5);
    padding: 10px 15px;
    position: absolute;
    z-index: 5;
    bottom: 20px;
    left: unset;
    color: #fff;
    -webkit-transition: all .4s linear;
    -moz-transition: all .4s linear;
    -ms-transition: all .4s linear;
    -o-transition: all .4s linear;
    transition: all .4s linear;
}
.other-tours .tour_link .descr p {
    font: 24px/32px PlayfairDisplay-Regular;
    padding-bottom: 5px;
}
.other-tours .tour_link .descr span {
    font: 16px/19px JosefinSans-Regular;
    font-size: 16px;
    position: relative;
    padding-left: 20px;
}
/* review */
.review .review-from {
    background: #FFFFFF;
    border: 2px dashed #EBEBE7;
    border-radius: 20px;
    padding: 24px 30px 18px;
}
.review .reviews-Verified {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #333333;
    margin-bottom: 16px;
}
.review .reviews-logos {
    display: flex;
    justify-content: space-between;
}
.tour-section .review h2 {
    margin: 0;
}
.tour-section .review .reviews-logos, #load_more_reviews {
    display: none;
}
.review .reviews-logos img:first-child {
    height: 46px;
}
.review .reviews-logos img {
    width: auto;
}
.tour-section .review .reviews-first-container {
    display: flex;
    align-items: center;
}
.tour-section .review .reviews-first-container .reviews-total {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: #333333;
    background: url(${dir}Google__G__Logo.svg) no-repeat left center / 46px 43.4px;
    padding: 16px 10px 12px 60px;
    margin-left: 50px;
}
.tour-section .review .reviews-based-reviews {
    font-size: 14px;
    line-height: 22px;
    color: #5B5B5B;
}
.tour-section .review .reviews-stars {
    color: #FFB446;
}
.reviews-Verified {
    display: none
}
.all-reviews {
    display: none;
}
.slider-review {
    position: relative;
    padding: 40px 0px 160px;
}
.slider-review .swiper-slide {
    background: #FFFFFF;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 30px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    padding: 24px;
    opacity: 0;
    height: auto!important;
    transition: all 0.2s ease;
}
.slider-review .swiper-slide.swiper-slide-active, .slider-review .swiper-slide.swiper-slide-next, .slider-review .swiper-slide.swiper-slide-next + div {
    opacity: 1;
}
.slider-review *, .slider-review *:before, .slider-review *:after {
    box-sizing: border-box;
}
.slider-review img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 16px;
}
.slider-review .text {
    font-size: 14px;
    line-height: 22px;
    color: #5B5B5B;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    line-clamp: 10;
    -webkit-box-orient: vertical;
}
.slider-review .text b {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin: 24px 0 12px;
    color: #333333;
    display: block;
}
.slider-review .swiper-button-next, .slider-review .swiper-button-prev, .slider-review .swiper-pagination.swiper-pagination-fraction {
    bottom: 88px;
}
.slider-review .author {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 12px;
    color: #333333;
}
.sreviews-user-stars svg {
    margin-right: 4px;
}
.help_center .container:first-child .left_help {
    flex-basis: 100%;
}
.help_center .container:first-child .left_help .main_heading, .help_center .container:first-child .left_help .main_subheading {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    text-transform: uppercase;
    margin: 0 8px 30px 0;
    padding: 0;
    letter-spacing: normal;
}
.help_center .container:first-child .left_help .main_heading {
    color: #333333;
}
.help_center:after {
    width: 100%;
    background: #F3F3F3;
}
.help_center .container .left_help, .help_center .container .right_help {
    flex-basis: 49%;
}
.help_center .container .block_wr .block_title.health {
    background: #fff;
    color: #144733;
}
.help_center .container .block_wr .block_title {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
    padding: 13px 16px;
    border: 2px solid #EBEBE7;
    border-radius: 10px;
    background: #FFFFFF;
}
.help_center .container .block_wr .block_title .calc_ico {
    background: url('https://www.secretfoodtours.com/img/icons/plus.svg') no-repeat center / 12px;
    border: 2px solid #EBEBE7;
    border-radius: 6px;
    width: 30px;
    height: 30px;
    margin-left: 8px;
    flex-shrink: 0;
}
.help_center .container .active_help .block_title .calc_ico {
    background: url(https://www.secretfoodtours.com/img/icons/minus_white.svg) no-repeat center / 12px!important;
}
.popup_gallery {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: flex;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
    z-index: 9999999;
}
.popup_gallery.active {
    opacity: 1;
    pointer-events: auto;
}
.popup_gallery_close {
    position: absolute;
    border: none;
    background: transparent;
    top: 0;
    right: 0;
    padding: 20px;
}
.popup_gallery_count {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
    color: #fff;
}
.popup_gallery .swiper-wrapper {
    margin: auto;
    height: fit-content;
}
.popup_gallery .swiper-slide img {
    height: 85vh;
    width: 100%;
    object-fit: contain;
}
.popup_gallery .swiper-button-next, .popup_gallery .swiper-button-prev {
    margin-bottom: 30px;
    top: 50%!important;
    transform: translateY(-50%)!important;
    border: none;
}
.popup_gallery .swiper-button-next {
    right: 0!important;
    left: auto!important;
}
.popup_gallery .swiper-button-prev {
    left: 0!important;
    right: auto!important;
}
@media screen and (max-width: 767px) {
    .tour-drinks .main_subheading:before, .tour-do .title:before, .meeting-spot .title:before, .other-tours h2:before, .tour-section .review h2:before {
        bottom: 8px;
    }
    .other-tours h2:before, .tour-section .review h2:before {
        display: none;
    }
    .inner_page .container {
        padding: 0 20px!important;
    }
    .slider-review .swiper-button-next, .slider-review .swiper-button-prev {
        display: none;
    }
    .tour-section > .container > div:not(.why-tour) > .left {
        width: 100%;
        padding-right: 0;
    }
    .breadcrumbs-customer li a, .breadcrumbs-customer li:not(:last-child):after {
        font-size: 12px;
        line-height: 12px;      
    }
    .tour-section {
        padding: 24px 0;
    }
    .breadcrumbs-customer {
        margin-bottom: 10px;
    }
    .best-seller {
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 6px;
    }
    .tour-section h1 {
        font-size: 24px;
        line-height: 38px;
    }
    .rating {
        margin: 12px 0 20px;
    }
    .rating .to-rating {
        border-right: none;
        margin: 0;
        padding: 0;
    }
    .star-row {
        margin-bottom: 12px;
    }
    .gallery .swiper-wrapper {
        height: 74.66vw;
        margin-bottom: auto;
        border-radius: 20px;
    }
    .gallery:after {
        height: calc(100% - 80px);
    }
    .gallery {
        height: calc(74.66vw + 80px);
        background: #F3F3F3;
    }
    .gallery > div {
        padding: 16px 12px;
    }
    .btn-gallery {
        color: #C39958;
        border-color: #C39958;
        padding: 11px;
    }
    .btn-gallery svg path{
        fill: #C39958;
    }
    .gallery-count {
        color: #144732;
        padding: 0 5px;
        min-width: 38px;
        justify-content: center;
        font-size: 16px;
    }
    .btn-arrow {
        border-color: rgba(20, 71, 50, 0.3);
    }
    .btn-arrow svg path {
        stroke: #144732;
    }
    .descr-section {
        padding: 8px 20px;
        margin-left: -20px;
        margin-right: -20px;
        width: calc(100% + 40px);
        border-radius: 0;
    }
    .descr-section .row > div {
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #EBEBE7;
    }
    .descr-section .name {
        margin: 0 0 6px;
        padding: 0;
    }
    .descr-section .info {
        font-size: 16px;
        line-height: 22px;
    }
    .descr-section img {
        max-width: 20px;
    }
    .item-group_ic {
        order: 6;
        border: none!important;
    }
    .item-cutlery_ic {
        order: 5;
        border: none!important;
    }
    .item-world_ic {
        order: 4;
    }
    .item-library_ic {
        order: 3;
    }
    .item-smile_ic {
        order: 2;
    }
    .awards-desktop {
        display: block!important;
        border: 2px solid #F3F3F3;
        border-radius: 20px 20px 0 0;
        padding: 16px 7px 8px;
        margin: 0!important;
    }
    .brands {
        margin: 25px 0 60px;
        padding: 16px;
    }
    .tour-drinks .main_subheading, .tour-do .title, .meeting-spot .title, .other-tours h2, .video-section h2, .photos-gallery h2, .tour-section .review h2 {
        font-size: 24px;
        line-height: 32px;
        margin: 0 0 16px 0;
    }
    .food_wr, .drinks {
        padding: 20px 20px 0 20px;
        flex-wrap: wrap;
    }
    .food_block {
        margin-bottom: 20px;
        padding-right: 0!important;
    }
    .tour-drinks {
        padding-bottom: 36px;
        margin-bottom: 0;
    }
    .tour-drinks::before {
        top: 48px;
    }
    .tour-drinks > p {
        max-width: calc(100% - 40px)!important;
        padding: 16px;
    }
    .drinks {
        padding-bottom: 20px;
    }
    .drinks .title {
        line-height: 26px;
    }
    .drinks ul {
        margin-bottom: 20px;
    }
    .drinks .buy-2 {
        width: 100%;
        margin: 0 0 20px 0;
        height: auto;
        padding: 13px 10px 10px;
    }
    .tour-do ul {
        margin-top: 20px;
        padding: 24px 20px;
        margin-left: -20px;
        margin-right: -20px;
        border-radius: 0;
    }
    .tour-do ul li {
        align-items: flex-start;
    }
    .tour-do ul li:not(:last-child):before {
        bottom: 7px;
        height: calc(100% - 14px - 36px);
    }
    .tour-do ul li:not(:last-child) {
        padding-bottom: 24px;
    }
    .tour-do .note {
        margin-top: 16px;
        padding: 20px 16px;
    }
    .meeting-spot {
        margin-bottom: 70px;
    }
    .meeting-spot__left, .meeting-spot__right {
        width: 100%;
        padding: 0;
    }
    .meeting-spot .notate {
        margin: 16px 0;
    }
    .meeting-spot .grey_block {
        display: block;
        padding: 20px 20px 17px;
    }
    .meeting-spot .grey_block .right {
        margin-top: 16px;
        min-width: auto;
    }
    .meeting-spot .grey_block .right .item p:before {
        left: 0;
        right: auto;
    }
    .meeting-spot .grey_block .right .item p {
        padding-left: 22px;
    }
    .meeting-spot .grey_block .right .item p a {
        margin-left: -22px;
    }
    .meeting-spot__right {
        margin-top: 20px;
    }
    .meeting-spot__covid, .meeting-spot__contact {
        padding: 20px;
        min-height: auto;
    }
    .meeting-spot__covid .main_subheading {
        font-size: 20px;
        line-height: 32px;
    }
    .meeting-spot__covid .buy-covid {
        font-size: 14px!important;
        letter-spacing: normal;
    }
    .meeting-spot__contact .PT_link_black {
        margin-top: 24px;
    }
    .video-section iframe {
        width: 100%;
        height: 59.2vw;
    }
    .video-section {
        margin-bottom: 42px;
    }
    .slider-gallery {
        margin-right: -20px;
        padding-bottom: 36px;
        margin-bottom: 60px;
    }
    .slider-gallery .swiper-button-next, .slider-gallery .swiper-button-prev {
        display: none!important;
    }
    .review .review-from {
        padding: 20px 20px 14px;
    }
    .tour-section .review .reviews-first-container {
        margin-top: 15px;
    }
    .tour-section .review .reviews-first-container .reviews-total {
        margin-left: 0;
    }
    .slider-review {
        padding: 24px 0 36px;
        margin-bottom: 60px;
    }
    .slider-review .swiper-slide {
        padding: 16px;
    }
    .slider-review .author {
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px;
    }
    .slider-review .text b {
        margin: 16px 0 12px;
    }
    .slider-review .text {
        -webkit-line-clamp: 13;
        line-clamp: 13;
    }
    .why-tour > div {
        width: 100%;
    }
    .why-tour:before {
         width: 100%;
         border-radius: 20px 20px 0 0;
    }
    .why-tour .title {
        padding: 20px 20px 16px;
    }
    .why-tour .text {
        padding: 0 20px 60px;
    }
    .why-tour .right {
        padding: 0;
        margin-top: -40px;
    }
    .why-tour .right img {
        width: 100%;
        height: 50.6vw;
    }
    .why-tour .btns {
        padding: 8px 0 0 0;
    }
    .why-tour .btn-customer {
        width: 100%;
        display: block;
        margin-top: 16px;
    }
    .why-tour h2 {
        font-size: 20px;
        line-height: 30px;
    }
    .other-tours {
        margin-bottom: 30px;
    }
    #plugin {
        display: none!important;
    }
    .slider-review .swiper-pagination.swiper-pagination-fraction {
        bottom: 0;
    }
    .swiper-pagination-bullet {
        background: #EBEBE7!important;
        opacity: 1!important;
        width: 12px!important;
        height: 12px!important;
        margin: 0 4px!important;
    }
    .swiper-pagination-bullets {
        bottom: -5px!important;
    }
    .swiper-pagination-bullet-active {
        background: #144732!important;
        border-radius: 34px!important;
        width: 24px!important;
    }
    .other-tours .cardx {
        width: 100%;
        margin-right: 0;
    }
    .other-tours .cardx-container-details {
        padding: 10px 16px 16px;
        min-height: auto;
    }
    .other-tours .card-buttons .cultural-tours {
        width: 100%!important;
    }
    .destination_page_wr .help_center {
        margin-top: 0;
    }
    .destination_page_wr .tour-intro {
        margin-bottom: 0;
    }
    .help_center:after {
        background-color: transparent!important;
    }
    .destination_page_wr .help_center {
        padding: 20px 0 0 0;
    }
    .help_center .container:first-child .left_help .main_heading, .help_center .container:first-child .left_help .main_subheading {
        margin: 0;
        font-size: 24px;
        line-height: 32px;
    }
    .mob-version-only {
        padding: 0;
    }
    .help_center .container .left_help {
        margin-bottom: 16px;
    }
    .help_center .container .right_help {
        margin-top: 0;
    }
    .help_center .btn-customer {
        width: calc(100% - 40px);
        margin: 19px auto 45px;
        background-color: #fff;
    }
    .header_sticky .header_sticky_top {
        background: #F3F3F3;
    }
    .header_sticky .header_sticky_top .back { 
        padding: 14px 0;
        border: none;
        color: #144732;
    }
    .header_sticky .back svg path {
        fill: #144732;
    }
    .header_sticky .menu a {
        white-space: nowrap;
    }
    .header_sticky_bottom .menu {
        overflow-x: auto;
        margin-left: -20px;
        margin-right: -20px;
        padding-left: 20px;
    }
}
</style>`;
let pushDataLayer = (action, label = '') => {
	console.log(action + ' : ' + label);
	window.dataLayer = window.dataLayer || [];
	dataLayer.push({
		event: 'event-to-ga',
		eventCategory: 'Exp: new design PDP',
		eventAction: action,
		eventLabel: label,
	});
};
//comes into view
let isScrolledIntoView = (el) => {
	if(document.querySelector(el) == null) return false;
	let rect = document.querySelector(el).getBoundingClientRect(),
		elemTop = rect.top,
		elemBottom = rect.bottom;
	let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
	return isVisible;
};
const state = new Promise((resolve, reject) => {
	fetch(`https://conversionratestore.github.io/projects/uplead/state.json`)
		.then((res) => res.json())
		.then((data) => {
			resolve(data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
});
let isStar = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F4B75B"/>
</svg>`;
let isStarHalf = `<svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0C8.625 0 8.28125 0.1875 8.09375 0.5625L6.0625 4.71875L1.46875 5.375C0.65625 5.5 0.34375 6.5 0.9375 7.0625L4.21875 10.2812L3.4375 14.8438C3.3125 15.6562 4.15625 16.2812 4.90625 15.9062L9 13.75V0Z" fill="#F4B75B"/>
</svg>`;
let popularTout = (image, rate, name, link) => {
	let stars = '';
	let ratehalf = rate.split('.')[1];
	for(let i = 0; i < Math.floor(rate); i++) {
		stars += isStar;
	}
	if(ratehalf > 0) {
		stars += isStarHalf;
	}
	return `
        <div class="d-flex align-items-center">
            <img src="${image}">
            <div>
                <div class="d-flex align-items-center">
                    <div class="stars">${stars}</div>
                    <div class="rate">${rate}</div>
                </div>
                <a href="${link}" class="name">${name}</a>
                <a href="${link}" class="more d-flex align-items-center" onclick="pushDataLayer('Click on Learn more in Popular Tours', '${link}')">Learn more
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999999 13L7 7L1 1" stroke="#C39958" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </a>
            </div>
        </div>`;
};
let objPopularTours = {
	asia: [{
			image: '/img/seoul/secret-food-tours-seoul.jpg',
			link: '/seoul/food-tours-seoul/',
			name: 'Seoul Food Tours',
			rate: '4.98',
		},
		{
			image: '/img/istanbul/secret-food-tours-istanbul.jpg',
			link: '/istanbul/food-tours-istanbul/',
			name: 'Lunch Food Tour Istanbul-kadikoy',
			rate: '4.96',
		},
		{
			image: '/img/bangkok/secret-food-tours-bangkok.jpg',
			link: '/bangkok/food-tours-bangkok/',
			name: 'Bangkok Food Tour',
			rate: '4.97',
		},
		{
			image: '/img/singapore/secret-food-tours-singapore.jpg',
			link: '/singapore/food-tours-singapore/',
			name: 'Singapore Food Tours',
			rate: '4.95',
		},
	],
	australia: [{
		image: '/img/sydney/secret-food-tours-sydney.jpg',
		link: '/sydney/food-tours-sydney/',
		name: 'Sydney Food Tour',
		rate: '4.98',
	}, ],
	europe: [{
			image: '/img/paris/montmarte-morning-2.jpg?v2',
			link: '/paris/paris-montmartre/',
			name: 'Paris Montmartre Food Tours',
			rate: '4.99',
		},
		{
			image: '/img/paris/paris-marais-tour%20.jpg',
			link: '/paris/paris-le-marais/',
			name: 'Paris, Le Marais Food Tours',
			rate: '4.85',
		},
		{
			image: '/img/london/secret-food-tours-london-bridge.jpg',
			link: '/london/london-bridge-food-tour/',
			name: 'Secret Food Tours: London Bridge',
			rate: '5.00',
		},
		{
			image: '/img/paris/chocolate-pastry-2.jpg',
			link: '/paris/chocolate-and-pastry-tour/',
			name: 'Pastry & Chocolate Tours Paris',
			rate: '4.97',
		},
	],
	'north-america': [{
			image: '/img/charleston/secret-food-tours-charleston.jpg?v4',
			link: '/charleston/food-tours-charleston/',
			name: 'Charleston Food Tour',
			rate: '4.95',
		},
		{
			image: '/img/austin/secret-food-tours-austin.jpg',
			link: '/austin/food-tours-austin/',
			name: 'Austin Food Tour',
			rate: '4.96',
		},
		{
			image: '/img/nashville/new-gallery/nashville-food-tour-gallery-01.jpg',
			link: '/nashville/food-tours-nashville/',
			name: 'East Nashville Food Tour',
			rate: '4.96',
		},
		{
			image: '/img/boston/secret-food-tours-boston.jpg',
			link: '/boston/food-tours-boston/',
			name: 'Boston Food Tour',
			rate: '4.92',
		},
	],
	'south-america': [{
			image: '/img/rio/eat-rio/Eat-Rio-Food-Tours-1.jpg',
			link: '/rio-de-janerio/eat-rio-food-tour/',
			name: 'Secret Food Tours Rio de janerio',
			rate: '4.9',
		},
		{
			image: '/img/lima/secret-food-tours-lima.jpg',
			link: '/lima/food-tours-lima/',
			name: 'Lima Food Tour',
			rate: '4.97',
		},
	],
};
let bestSellers = [
	'lisbon/food-tours-lisbon',
	'/paris/paris-montmartre',
	'/paris/paris-le-marais',
	'/paris/saint-germain-food-tour',
	'/london/london-bridge-food-tour',
	'/barcelona/food-tours-barcelona',
	'/paris/chocolate-and-pastry-tour',
	'/rome/food-tours-rome',
	'/austin/food-tours-austin',
	'/nashville/food-tours-nashville',
	'/boston/food-tours-boston',
	'/new-york/food-tours-new-york',
	'/dublin/food-tours-dublin',
	'/bologna/food-tours-bologna',
	'/las-vegas/food-tours-las-vegas',
	'florence/food-tours-florence',
	'/montreal/food-tours-montreal',
	'/charleston/food-tours-charleston',
	'/amsterdam/food-tours-amsterdam',
	'/edinburgh/food-tours-edinburgh',
	'/san-francisco/food-tours-san-francisco/',
];
let menuToElement = (event) => {
	event.preventDefault();
	let href = event.currentTarget.href.split('#')[1];
	document.querySelector('html').scrollTop =
		document.querySelector(`#${href}`).offsetTop - 130;
    if (event.target.closest('.header_sticky_bottom')) {
        if(event.target.closest('ul').querySelector('.active') != null) {
            event.target
                .closest('ul')
                .querySelector('.active')
                .classList.remove('active');
        }
        event.target.classList.add('active');
        pushDataLayer(
            'Click on navigation button in sticky menu',
            href.split('-').join(' ')
        );
    } else {
        pushDataLayer('Click on rating', event.currentTarget.closest('.left').querySelector('h1').innerHTML);
    }
	
};
let initHeader = setInterval(() => {
	if(
		document.querySelector('header .search_header input') != null &&
		document.querySelector('.header_dropdown .city_wr') != null && 
        document.querySelector('header .main_menu .droped') != null && 
        document.querySelectorAll('.search_btn')
	) {
		clearInterval(initHeader);
		//fonts
		document.head.insertAdjacentHTML(
			'beforeend',
			`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">`
		);
		//flags country
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href =
			'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css';
		document.head.appendChild(link);
		document.body.insertAdjacentHTML('afterbegin', headerStyle);
		//search
		document.querySelector('header .search_header input').placeholder =
			'Type you destination';
		document.querySelectorAll('.search_btn').forEach((button) => {
			button.addEventListener('click', (e) => {
            
				if (document.querySelector('.visible_search') != null) {
                  
                    console.log('true')
                    console.log(document.querySelector('header .main_menu').offsetLeft)
                    console.log(document.querySelector('header .main_menu .droped').offsetWidth)
					document.querySelector('.search_header').style =
						`width: calc(100% - ${document.querySelector('header .main_menu').offsetLeft + document.querySelector('header .main_menu .droped').offsetWidth}px - 20px);`;
				} else {
                    console.log('false')
					document.querySelector('.search_header').style = '';
				}
                pushDataLayer('Click on search icon in header')
			});
		});
        document.querySelector('#myInputDesktop').addEventListener('click', (e) => {
            let label = ''
            if (document.querySelector('.is_menu').style.display != '' || document.querySelector('.destinations-active') != null) {
                label = 'Menu'
            } else {
                label = 'Header'
            }
            pushDataLayer('Click on search input', label)
        })
		document
			.querySelector('#close_ic_desktop')
			.addEventListener('click', () => {
                    
                let label = ''
                if (document.querySelector('.is_menu').style.display != '' || document.querySelector('.destinations-active') != null) {
                    label = 'Menu'
                } else {
                    label = 'Header'
                }
                pushDataLayer('Click on X in search input', label)

				if(
					document.querySelector('#myInputDesktop') &&
					document.querySelector('#myInputDesktop').value
				) {
					document.querySelector('#myInputDesktop').value = '';
					let event = new Event('keyup', {
						bubbles: true,
						cancelable: true,
					});
					document.querySelector('#myInputDesktop').dispatchEvent(event);
				}
				if(document.querySelector('.menu_burger.active')) {
					document
						.querySelector('#close_ic_desktop')
						.setAttribute('style', 'display:none!important;');
					return false;
				}
				document
					.querySelector('.search_header')
					.classList.remove('visible_search');
			});
        document.querySelectorAll('#cities_desktop a').forEach(item => {
            item.addEventListener('click', (e) => {
                let label = ''
                if (document.querySelector('.is_menu').style.display != '' || document.querySelector('.destinations-active') != null) {
                    label = 'Menu'
                } else {
                    label = 'Header'
                }
                pushDataLayer('Click on suggested option in search input', label)
            })
        })
		//dropdown
		//add menu right
		document
			.querySelector('.header_dropdown .main_container')
			.insertAdjacentHTML(
				'afterbegin',
				`
        <div class="header_dropdown_top">
            <div class="container">
                <ul class="right-menu d-flex">
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/read-about-us">About Us</a></li>
                    <li><a href="/covid">Health & Safety</a></li>
                    <li><a href="https://www.secrettours.com/">Historical Tours</a></li>
                </ul>
            </div>
        </div>`
			);

        document.querySelectorAll('.header_dropdown .right-menu a').forEach(item => {
            item.addEventListener('click', (e) => {
                pushDataLayer('Click on menu button', e.currentTarget.href)
            })
        })
		document
			.querySelector('.header_dropdown .right-menu')
			.before(document.querySelector('.country_wr'));
		//add popular tour block
		document.querySelector('.header_dropdown .city_wr').insertAdjacentHTML(
			'afterend',
			`
        <div class="popular_tours" style="display: none">
            <div class="container d-block">
                <div class="d-flex align-items-center title">
                    <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.875 0.865861C7.875 0.0111783 6.74479 -0.323263 6.23438 0.382779C1.75 7.10876 8.16667 7.40604 8.16667 10.6761C8.16667 12.0139 7.07292 13.0915 5.79688 13.0544C4.48438 13.0544 3.5 11.9767 3.5 10.6761V7.48036C3.5 6.66284 2.51562 6.29124 1.96875 6.8858C0.984375 7.92628 0 9.70997 0 11.8653C0 15.8042 3.13542 19 7 19C10.8281 19 14 15.8042 14 11.8653C14 5.54804 7.875 4.69335 7.875 0.865861Z" fill="#DB4446"/>
                    </svg>
                    <p>Popular tours in Europe</p>
                </div>
                <div class="popular_tours_col">
                    <div class="flex-wrap popular_tours_row asia" data-continent="Asia" style="display: none"></div>
                    <div class="flex-wrap popular_tours_row australia" data-continent="Australia" style="display: none"></div>
                    <div class="flex-wrap popular_tours_row europe" data-continent="Europe" style="display: none"></div>
                    <div class="flex-wrap popular_tours_row north-america" data-continent="North America" style="display: none"></div>
                    <div class="flex-wrap popular_tours_row south-america" data-continent="South America" style="display: none"></div>
                </div>
            </div>
        </div>`
		);
		//state events
		state.then((state) => {
			for(let i = 0; i < state.length; i++) {
				document
					.querySelectorAll('.header_dropdown .block ul li a')
					.forEach((item) => {
						if(
							state[i].name.toLowerCase() ==
							item.innerHTML.toLowerCase().trim() &&
							item.parentElement.className.includes('country-16-title')
						) {
							item.insertAdjacentHTML(
								'afterbegin',
								`<i class="fi fi-${state[i].abbr}"></i>`
							);
						}
						if(
							item.innerHTML.toLowerCase().trim() == 'united states of america'
						) {
							item.insertAdjacentHTML('afterbegin', `<i class="fi fi-us"></i>`);
						}

                        item.addEventListener('click', (e) => {
                            e.stopImmediatePropagation()
                            pushDataLayer('Click on menu button', e.currentTarget.href)
                        })
					});
			}
		});
		for(const key in objPopularTours) {
			document
				.querySelectorAll(`.popular_tours_col .popular_tours_row`)
				.forEach((item) => {
					if(item.classList.contains(key)) {
						for(let i = 0; i < objPopularTours[key].length; i++) {
							if(i < 4) {
								let tour = objPopularTours[key][i];
								item.insertAdjacentHTML(
									'beforeend',
									popularTout(tour.image, tour.rate, tour.name, tour.link)
								);
							}
						}
					}
				});
		}
		document
			.querySelector('.main_menu .droped')
			.addEventListener('click', (e) => {
				e.target
					.closest('header')
					.parentElement.classList.toggle('destinations-active');
			});
		document
			.querySelectorAll('.header_dropdown .block .heading div')
			.forEach((item, index) => {
				item.innerHTML = `
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0.943848L5 5.94385L0 0.943848L0.8875 0.0563478L5 4.16885L9.1125 0.0563478L10 0.943848Z" fill="#333333"/>
                </svg>`;
				item.previousElementSibling.addEventListener('click', (e) => {
                    pushDataLayer('Click on menu button', e.currentTarget.href)
					if(e.target.closest('.block_wr').querySelector('.active') != null) {
						e.target
							.closest('.block_wr')
							.querySelector('.active')
							.classList.remove('active');
						document
							.querySelectorAll(`.popular_tours_col .popular_tours_row`)
							.forEach((el) => (el.style.display = 'none'));
					}
					e.target.parentElement.classList.add('active');
					document.querySelectorAll(`.popular_tours_col .popular_tours_row`)[
						index
					].style.display = 'flex';
					document.querySelector('.popular_tours').style = '';
					document.querySelector('.popular_tours .title > p').innerHTML =
						'Popular tours in ' +
						document.querySelectorAll(`.popular_tours_col .popular_tours_row`)[
							index
						].dataset.continent;
				});
			});
		document.addEventListener('click', (e) => {
			if(e.target.classList.contains('tour_fixed_btn')) {
				pushDataLayer('Click on Book Your Tour sticky button');
			}
			if(
				document.querySelector('.destinations-active') != null &&
				!e.target.closest('header')
			) {
				e.stopImmediatePropagation();
				document
					.querySelector('.destinations-active')
					.classList.remove('destinations-active');
                document.querySelector('#close_ic_desktop').style.display = 'none'
                document.querySelector('#cities_desktop').style.display = 'none'
                document.querySelector('#myInputDesktop').value = '';
			}
		});
	}
});
let price = setInterval(() => {
	if(
		(document.querySelector('#plugin iframe') != null ||
			window.matchMedia('(max-width: 767px)').matches) &&
		document.querySelector('.right-header .price') != null &&
		document.querySelector('.header_sticky .is_price') != null
	) {
		if(
			document.querySelector('#plugin .price.no-mobile') != null &&
			document.querySelector(
				'#plugin [style="background-color: #0a88ff; padding:10px;"]'
			) == null
		) {
			clearInterval(price);
			console.log('price');
			document
				.querySelectorAll('.plugin_right .price.no-mobile')
				.forEach((item) => {
					console.log(item.innerHTML);
					if(!item.innerHTML.includes('price no-mobile')) {
						item.style = 'display: none';
					}
				});
			document.querySelector('.right-header .price').innerHTML = `${
        document
          .querySelector('#plugin .price.no-mobile')
          .innerHTML.split('/ ')[0]
      } per adult`;
			if(document.querySelector('#tour_f_btn')) {
				document
					.querySelector('#tour_f_btn')
					.insertAdjacentHTML(
						'afterbegin',
						`<div class='lav-sticky__price'><span class='lav-currency'></span><span class='lav-price'>${
              document.querySelector('#plugin .price.no-mobile span').innerText
            }</span> / per adult</div>`
					);
			} else {
				setTimeout(() => {
					if(document.querySelector('#tour_f_btn')) {
						document
							.querySelector('#tour_f_btn')
							.insertAdjacentHTML(
								'afterbegin',
								`<div class='lav-sticky__price'><span class='lav-currency'></span><span class='lav-price'>${
                  document.querySelector('#plugin .price.no-mobile span')
                    .innerText
                }</span> / per adult</div>`
							);
					}
				}, 1500);
			}
			document.querySelector('.header_sticky .is_price').innerHTML =
				document.querySelector('#plugin .price.no-mobile').innerHTML;
		} else if(
			document.querySelector(
				'#plugin [style="background-color: #0a88ff; padding:10px;"]'
			) != null
		) {
			clearInterval(price);
			document.querySelector(
				'.right-header .price'
			).innerHTML = `Currently, we're just accepting private tours.`;
			document.querySelector(
				'.header_sticky .is_price'
			).innerHTML = `Currently, we're just accepting private tours.`;
			document.querySelector('.right-header .price').parentElement.style =
				'display: block!important;';
			document.querySelector('.right-header .price').style =
				'text-align: left;';
		}
	}
});
let init = setInterval(() => {
	if(
		document.querySelector('#plugin iframe') != null ||
		(window.matchMedia('(max-width: 767px)').matches &&
			document.querySelector('header .main_menu') != null &&
			document.querySelector('.destination_descr'))
	) {
		console.log('fire');
		clearInterval(init);
		document.body.insertAdjacentHTML('afterbegin', styles);
		//header
		//add "Book a private tour" and "Buy as a gift" button (header)
		document.querySelector('header .main_menu').insertAdjacentHTML(
			'afterend',
			`
        <div class="d-md-flex d-none btns-header">
            <a href="/private-bookings" class="btn-customer btn-private-tour d-flex align-items-center justify-content-center" onclick="pushDataLayer('Click on Book a Private Tour in header')">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12V9.90001C0 9.47501 0.1095 9.08426 0.328499 8.72776C0.547499 8.37126 0.837999 8.09951 1.2 7.91251C1.975 7.52501 2.7625 7.23426 3.56249 7.04026C4.36249 6.84626 5.17499 6.74951 5.99999 6.75001C6.82499 6.75001 7.63749 6.84701 8.43749 7.04101C9.23749 7.23501 10.025 7.52551 10.8 7.91251C11.1625 8.10001 11.4532 8.37201 11.6722 8.72851C11.8912 9.085 12.0005 9.47551 12 9.90001V12H0ZM13.5 12V9.75C13.5 9.20001 13.3467 8.67176 13.0402 8.16526C12.7337 7.65876 12.2995 7.22451 11.7375 6.86251C12.375 6.93751 12.975 7.06576 13.5375 7.24726C14.1 7.42876 14.625 7.65051 15.1125 7.91251C15.5625 8.16251 15.9062 8.44051 16.1437 8.74651C16.3812 9.05251 16.5 9.387 16.5 9.75V12H13.5ZM5.99999 6.00001C5.17499 6.00001 4.46874 5.70626 3.88124 5.11876C3.29375 4.53126 3 3.82501 3 3.00001C3 2.17502 3.29375 1.46877 3.88124 0.881268C4.46874 0.293769 5.17499 1.92305e-05 5.99999 1.92305e-05C6.82499 1.92305e-05 7.53124 0.293769 8.11874 0.881268C8.70624 1.46877 8.99999 2.17502 8.99999 3.00001C8.99999 3.82501 8.70624 4.53126 8.11874 5.11876C7.53124 5.70626 6.82499 6.00001 5.99999 6.00001ZM13.5 3.00001C13.5 3.82501 13.2062 4.53126 12.6187 5.11876C12.0312 5.70626 11.325 6.00001 10.5 6.00001C10.3625 6.00001 10.1875 5.98426 9.97499 5.95276C9.76249 5.92126 9.58749 5.88701 9.44999 5.85001C9.78749 5.45001 10.047 5.00626 10.2285 4.51876C10.41 4.03126 10.5005 3.52501 10.5 3.00001C10.5 2.47502 10.4095 1.96877 10.2285 1.48127C10.0475 0.993768 9.78799 0.550018 9.44999 0.150019C9.62499 0.087519 9.79998 0.0467693 9.97499 0.0277693C10.15 0.00876935 10.325 -0.000480769 10.5 1.92305e-05C11.325 1.92305e-05 12.0312 0.293769 12.6187 0.881268C13.2062 1.46877 13.5 2.17502 13.5 3.00001Z" fill="#144732"/>
                </svg>
                <span>Book a private tour</span>
            </a>
            <a href="/buy-gift/" class="btn-customer gold align-items-center justify-content-center" style="display: none;" onclick="pushDataLayer('Click on Buy as a gift in header')">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.875 11.1429C0.875 11.625 1.25781 12 1.75 12H6.125V7.71429H0.875V11.1429ZM7.875 12H12.25C12.7148 12 13.125 11.625 13.125 11.1429V7.71429H7.875V12ZM13.125 3.42857H11.9492C12.1406 3.10714 12.25 2.75893 12.25 2.35714C12.25 1.07143 11.1562 0 9.84375 0C8.69531 0 7.95703 0.589286 7.02734 1.84821C6.07031 0.589286 5.33203 0 4.21094 0C2.87109 0 1.80469 1.07143 1.80469 2.35714C1.80469 2.75893 1.88672 3.10714 2.07812 3.42857H0.875C0.382812 3.42857 0 3.83036 0 4.28571V6.42857C0 6.66964 0.191406 6.85714 0.4375 6.85714H13.5625C13.7812 6.85714 14 6.66964 14 6.42857V4.28571C14 3.83036 13.5898 3.42857 13.125 3.42857ZM4.18359 3.42857C3.58203 3.42857 3.08984 2.97321 3.08984 2.35714C3.08984 1.76786 3.58203 1.28571 4.18359 1.28571C4.73047 1.28571 5.14062 1.39286 6.5625 3.42857H4.18359ZM9.84375 3.42857H7.46484C8.88672 1.39286 9.26953 1.28571 9.84375 1.28571C10.4453 1.28571 10.9375 1.76786 10.9375 2.35714C10.9375 2.97321 10.4453 3.42857 9.84375 3.42857Z" fill="#C39958"/>
                </svg>
                <span>Buy as a gift</span>
            </a>
        </div>`
		);
		document.querySelector('.main_container').insertAdjacentHTML(
			'afterend',
			`
        <div class="popup_gallery">
            <div class="popup_gallery_count"></div>
            <button type="button" class="popup_gallery_close" onclick="pushDataLayer('Click on close button in gallery popup')">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25.9735" height="2.16446" transform="matrix(0.703417 0.710777 -0.703417 0.710777 1.52246 0)" fill="#fff"></rect>
                    <rect width="25.9735" height="2.16446" transform="matrix(-0.703417 0.710777 -0.703417 -0.710777 20 1.53857)" fill="#fff"></rect>
                </svg>
            </button>
            <ul class="swiper-wrapper"></ul>
            <div class="swiper-button-prev popup_gallery_button" onclick="pushDataLayer('Click on navigation button in gallery popup','Previous slide')">
                <svg width="19" height="24" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L2 7L8 13" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="swiper-button-next popup_gallery_button" onclick="pushDataLayer('Click on navigation button  in gallery popup','Next slide')">
                <svg width="19" height="24" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999999 13L7 7L1 1" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        <div class="social-fixed d-md-block d-none">
            <a href="https://www.facebook.com/secretfoodtours" target="_blank" class="d-flex align-items-center">
                <svg class="m-auto" width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.76306 10.6943L10.2552 7.45996H7.12634V5.35059C7.12634 4.43652 7.54822 3.59277 8.95447 3.59277H10.3959V0.81543C10.3959 0.81543 9.09509 0.569336 7.86462 0.569336C5.29822 0.569336 3.61072 2.15137 3.61072 4.96387V7.45996H0.727905V10.6943H3.61072V18.5693H7.12634V10.6943H9.76306Z" fill="#C39958"/>
                </svg>
            </a>
            <a href="https://twitter.com/secretfoodtours" target="_blank" class="d-flex align-items-center">
                <svg class="m-auto" width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0912 3.91309C17.7943 3.38574 18.4271 2.75293 18.9193 2.01465C18.2865 2.2959 17.5482 2.50684 16.8099 2.57715C17.5834 2.12012 18.1459 1.41699 18.4271 0.538086C17.724 0.959961 16.9154 1.27637 16.1068 1.45215C15.4037 0.713867 14.4545 0.291992 13.3998 0.291992C11.3607 0.291992 9.70837 1.94434 9.70837 3.9834C9.70837 4.26465 9.74353 4.5459 9.81384 4.82715C6.75525 4.65137 4.01306 3.1748 2.18494 0.959961C1.86853 1.4873 1.69275 2.12012 1.69275 2.82324C1.69275 4.08887 2.32556 5.21387 3.34509 5.88184C2.74744 5.84668 2.14978 5.70605 1.65759 5.4248V5.45996C1.65759 7.25293 2.92322 8.72949 4.61072 9.08105C4.32947 9.15137 3.97791 9.22168 3.6615 9.22168C3.41541 9.22168 3.20447 9.18652 2.95837 9.15137C3.41541 10.6279 4.7865 11.6826 6.40369 11.7178C5.13806 12.7021 3.55603 13.2998 1.83337 13.2998C1.51697 13.2998 1.23572 13.2646 0.954468 13.2295C2.57166 14.2842 4.50525 14.8818 6.61462 14.8818C13.3998 14.8818 17.0912 9.29199 17.0912 4.40527C17.0912 4.22949 17.0912 4.08887 17.0912 3.91309Z" fill="#C39958"/>
                </svg>                
            </a>
            <a href="https://www.instagram.com/secretfoodtours/" target="_blank" class="d-flex align-items-center">
                <svg class="m-auto" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.82947 4.52637C6.57947 4.52637 4.7865 6.35449 4.7865 8.56934C4.7865 10.8193 6.57947 12.6123 8.82947 12.6123C11.0443 12.6123 12.8724 10.8193 12.8724 8.56934C12.8724 6.35449 11.0443 4.52637 8.82947 4.52637ZM8.82947 11.2061C7.38806 11.2061 6.19275 10.0459 6.19275 8.56934C6.19275 7.12793 7.35291 5.96777 8.82947 5.96777C10.2709 5.96777 11.431 7.12793 11.431 8.56934C11.431 10.0459 10.2709 11.2061 8.82947 11.2061ZM13.9623 4.38574C13.9623 3.8584 13.5404 3.43652 13.0131 3.43652C12.4857 3.43652 12.0638 3.8584 12.0638 4.38574C12.0638 4.91309 12.4857 5.33496 13.0131 5.33496C13.5404 5.33496 13.9623 4.91309 13.9623 4.38574ZM16.6342 5.33496C16.5638 4.06934 16.2826 2.94434 15.3685 2.03027C14.4545 1.11621 13.3295 0.834961 12.0638 0.764648C10.7631 0.694336 6.86072 0.694336 5.55994 0.764648C4.29431 0.834961 3.20447 1.11621 2.25525 2.03027C1.34119 2.94434 1.05994 4.06934 0.989624 5.33496C0.919312 6.63574 0.919312 10.5381 0.989624 11.8389C1.05994 13.1045 1.34119 14.1943 2.25525 15.1436C3.20447 16.0576 4.29431 16.3389 5.55994 16.4092C6.86072 16.4795 10.7631 16.4795 12.0638 16.4092C13.3295 16.3389 14.4545 16.0576 15.3685 15.1436C16.2826 14.1943 16.5638 13.1045 16.6342 11.8389C16.7045 10.5381 16.7045 6.63574 16.6342 5.33496ZM14.9467 13.21C14.7006 13.9131 14.1381 14.4404 13.4701 14.7217C12.4154 15.1436 9.95447 15.0381 8.82947 15.0381C7.66931 15.0381 5.20837 15.1436 4.18884 14.7217C3.48572 14.4404 2.95837 13.9131 2.67712 13.21C2.25525 12.1904 2.36072 9.72949 2.36072 8.56934C2.36072 7.44434 2.25525 4.9834 2.67712 3.92871C2.95837 3.26074 3.48572 2.7334 4.18884 2.45215C5.20837 2.03027 7.66931 2.13574 8.82947 2.13574C9.95447 2.13574 12.4154 2.03027 13.4701 2.45215C14.1381 2.69824 14.6654 3.26074 14.9467 3.92871C15.3685 4.9834 15.2631 7.44434 15.2631 8.56934C15.2631 9.72949 15.3685 12.1904 14.9467 13.21Z" fill="#C39958"/>
                </svg>
            </a>
        </div>
        <div class="header_sticky">
            <div class="header_sticky_top">
                <div class="container d-flex justify-content-between ">
                    <div class="d-flex align-items-center">
                        <a href="" class="back d-flex align-items-center" >
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM15 7L1 7V9L15 9V7Z" fill="white"/>
                            </svg>
                            <span>All tours</span>
                        </a>
                        <p class="title d-md-block d-none"></p>
                    </div>
                    <div class="d-md-flex align-items-md-center d-none">
                        <div class="is_price"></div>
                        <a href="#plugin" class="btn-customer gold-full" onclick="pushDataLayer('Click on Book a tour in sticky menu')">Book a tour</a>
                    </div>
                </div>
            </div>
            <div class="header_sticky_bottom">
                <div class="container d-flex justify-content-between">
                    <nav class="menu">
                        <ul class="d-flex"> </ul>
                    </nav>
                    <div class="rating_header d-md-flex align-items-md-center d-none"></div>
                </div>
            </div>
        </div>
        <section class="tour-section">
            <div class="container">
                <div class="d-flex flex-wrap">
                    <div class="left">
                        <ul class="breadcrumbs-customer"></ul>
                        <div class="d-flex align-items-md-center flex-md-row flex-column-reverse flex-wrap">
                            <h1></h1>
                        </div>
                        <div class="rating d-md-flex align-items-center"></div>
                        <div class="gallery d-flex align-items-end"></div>
                        <div class="descr-section "> 
                            <div class="row "> </div>
                        </div>
                        <div class="brands">
                            <img src="${dir}/brands.png" alt="brands" class="d-md-block d-none">
                            <img src="${dir}/brands-mob.png" alt="brands" class="d-md-none">
                        </div>
                        <div class="tour-do" id="tour-do"></div>
                        
                    </div>
                    <div class="right"> </div>
                </div>
                <div class="meeting-spot" id="meeting-spot"> 
                    <div class="d-flex flex-wrap">
                        <div class="meeting-spot__left">
                            <h2 class="title">Meeting spot</h2>
                        </div>
                        <div class="meeting-spot__right">
                            <div class="meeting-spot__covid"></div>
                            <div class="meeting-spot__contact"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="video-section text-md-center" id="video">
                <div class="container"></div>
            </div>
            <div class="container">
                <div class="photos-gallery"></div>
                <div class="review" id="review"></div>
                <div class="why-tour d-flex flex-wrap"></div>
                <div class="other-tours" id="other-tours"></div>
            </div>
        </section> `
		);
		for(let i = 0; i < bestSellers.length; i++) {
			if(window.location.href.includes(bestSellers[i])) {
				document
					.querySelector('.tour-section h1')
					.insertAdjacentHTML(
						'afterend',
						'<div class="best-seller">Best seller</div>'
					);
			}
		}
		window.addEventListener('scroll', (e) => {
			if(document.querySelector('.destinations-active') != null) {
				document
					.querySelector('.destinations-active')
					.classList.remove('destinations-active');
				document
					.querySelector('.droped.active_menu')
					.classList.remove('active_menu');
                document.querySelector('#close_ic_desktop').style.display = 'none';
                document.querySelector('#myInputDesktop').value = '';
			}
			if(window.pageYOffset > 970) {
				if(document.querySelector('.header_sticky.fixed') == null) {
					document.querySelector('.header_sticky').classList.add('active');
				}
			} else {
				document.querySelector('.header_sticky').classList.remove('active');
			}
		});
		let resizeLeft = () => {
			let tourLeft = document.querySelector(
				'.tour-section > .container > div > .left'
			);
			if(tourLeft && document.querySelector('#plugin')) {
				document.querySelector('#plugin').style = `left: ${tourLeft.offsetLeft + tourLeft.clientWidth }px; top: ${tourLeft.offsetTop}px; opacity: 1;`;
			}
		};
		setTimeout(() => {
			resizeLeft();
		}, 500);
		window.addEventListener('resize', () => resizeLeft());
		if(
			document.querySelector('.breadcrumbs ul') &&
			document.querySelector('.tour-section .breadcrumbs-customer')
		) {
			document.querySelector('.tour-section .breadcrumbs-customer').innerHTML =
				document.querySelector('.breadcrumbs ul').innerHTML; //breadcrumb
		}
		//event Click on Bredcrumb item
		document.querySelectorAll('.breadcrumbs-customer a').forEach((crumb) => {
			crumb.addEventListener('click', (e) =>
				pushDataLayer('Click on Bredcrumb item', crumb.href)
			);
		});
		if(document.querySelector('h1.dest_title')) {
			document.querySelector('.tour-section h1').innerHTML =
				document.querySelector('h1.dest_title').innerHTML; //title
			document.querySelector('.header_sticky .title').innerHTML =
				document.querySelector('h1.dest_title').innerHTML; //title sticky header
		}
		if(document.querySelector('.breadcrumbs-customer').innerText) {
            let crumb = document.querySelectorAll('.breadcrumbs-customer li a')[document.querySelectorAll('.breadcrumbs-customer li a').length - 2];
			document.querySelector('.header_sticky .back span').innerHTML = !window.location.href.includes('upgraded-drinks-package') ?
				`All ${crumb.innerHTML} tours` : crumb.innerHTML; //back text
			document.querySelector('.header_sticky .back').href = crumb.href; //back
		}
		document
			.querySelector('.header_sticky .back')
			.addEventListener('click', (e) => {
				pushDataLayer(`Click on ${e.currentTarget.innerText} in sticky menu`);
			});
		let descrObj = [
			'clock_ic/Duration',
			'library_ic/Type of tour',
			'cutlery_ic/How much stops?',
			'group_ic/Tour size',
			'smile_ic/Awards',
			'world_ic/language',
		];
		if(document.querySelector('#plugin')) {
			document.querySelector('#plugin').insertAdjacentHTML(
				'afterbegin',
				`
            <div class="right-header d-flex align-items-center justify-content-between">
                <h2>Book your tour</h2>
                <p class="price"></p>
            </div>`
			);
		}
		let footerRightHTML = `
        <div class="right-footer">
            <p>Over 21,000 Reviews</p>
            <div class="d-flex align-items-center">
                <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.0961 11.0677L60 5.80483H49.1252C43.681 2.13646 37.1061 0 29.9954 0C22.8938 0 16.3372 2.14106 10.9021 5.80483H0L4.90389 11.0677C1.89804 13.773 0.01367 17.6698 0.01367 21.9965C0.01367 30.1618 6.72481 36.7817 15.0024 36.7817C18.9346 36.7817 22.5171 35.2857 25.1916 32.8402L29.9956 38L34.7995 32.8447C37.474 35.2902 41.052 36.7817 44.9842 36.7817C53.2617 36.7817 59.9819 30.1618 59.9819 21.9965C59.9863 17.6653 58.1021 13.7686 55.0961 11.0677ZM15.0068 32.0026C9.40362 32.0026 4.86311 27.5237 4.86311 21.9965C4.86311 16.4694 9.40374 11.9904 15.0068 11.9904C20.6099 11.9904 25.1506 16.4694 25.1506 21.9965C25.1506 27.5237 20.6099 32.0026 15.0068 32.0026ZM30 21.7054C30 15.1212 25.1461 9.46871 18.7392 7.05447C22.2037 5.6256 26.0042 4.83284 29.9954 4.83284C33.9867 4.83284 37.7916 5.6256 41.2562 7.05447C34.854 9.4732 30 15.1213 30 21.7054ZM44.9887 32.0026C39.3855 32.0026 34.8449 27.5237 34.8449 21.9965C34.8449 16.4694 39.3855 11.9904 44.9887 11.9904C50.5919 11.9904 55.1324 16.4694 55.1324 21.9965C55.1324 27.5237 50.5918 32.0026 44.9887 32.0026ZM44.9887 16.747C42.0509 16.747 39.6715 19.0941 39.6715 21.992C39.6715 24.8899 42.0509 27.2369 44.9887 27.2369C47.9265 27.2369 50.3058 24.8899 50.3058 21.992C50.3057 19.0985 47.9265 16.747 44.9887 16.747ZM20.3239 21.9965C20.3239 24.8944 17.9446 27.2414 15.0068 27.2414C12.0691 27.2414 9.68977 24.8944 9.68977 21.9965C9.68977 19.0985 12.0691 16.7515 15.0068 16.7515C17.9446 16.747 20.3239 19.0985 20.3239 21.9965Z" fill="#333333"/>
                </svg>
                <p>
                    <svg width="86" height="14" viewBox="0 0 86 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="7" cy="7" r="6" stroke="#333333" stroke-width="2"/>
                        <circle cx="7" cy="7" r="3" fill="#333333"/>
                        <circle cx="25" cy="7" r="6" stroke="#333333" stroke-width="2"/>
                        <circle cx="25" cy="7" r="3" fill="#333333"/>
                        <circle cx="43" cy="7" r="6" stroke="#333333" stroke-width="2"/>
                        <circle cx="43" cy="7" r="3" fill="#333333"/>
                        <circle cx="61" cy="7" r="6" stroke="#333333" stroke-width="2"/>
                        <circle cx="61" cy="7" r="3" fill="#333333"/>
                        <circle cx="79" cy="7" r="6" stroke="#333333" stroke-width="2"/>
                        <circle cx="79" cy="7" r="3" fill="#333333"/>
                    </svg>
                    As recommended by 99% of users on TripAdvisor
                </p>
            </div>
            <div class="d-flex align-items-center">
                <svg width="60" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47 25.5205C47 23.8955 46.8542 22.333 46.5833 20.833H25V29.708H37.3333C36.7917 32.5622 35.1667 34.9788 32.7292 36.6038V42.3747H40.1667C44.5 38.3747 47 32.4997 47 25.5205Z" fill="#333333"/>
                    <path d="M24.9993 47.9167C31.1868 47.9167 36.3743 45.875 40.166 42.375L32.7285 36.6042C30.6868 37.9792 28.0827 38.8125 24.9993 38.8125C19.041 38.8125 13.9785 34.7917 12.166 29.375H4.54102V35.2917C8.31185 42.7708 16.041 47.9167 24.9993 47.9167Z" fill="#333333"/>
                    <path d="M12.1673 29.3545C11.709 27.9795 11.4382 26.5212 11.4382 25.0003C11.4382 23.4795 11.709 22.0212 12.1673 20.6462V14.7295H4.54232C2.97982 17.8128 2.08398 21.292 2.08398 25.0003C2.08398 28.7087 2.97982 32.1878 4.54232 35.2712L10.4798 30.6462L12.1673 29.3545Z" fill="#333333"/>
                    <path d="M24.9993 11.208C28.3743 11.208 31.3743 12.3747 33.7702 14.6247L40.3327 8.06217C36.3535 4.35384 31.1868 2.08301 24.9993 2.08301C16.041 2.08301 8.31185 7.22884 4.54102 14.7288L12.166 20.6455C13.9785 15.2288 19.041 11.208 24.9993 11.208Z" fill="#333333"/>
                </svg>
                <p>
                    <svg width="78" height="14" viewBox="0 0 78 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.6458 4.73475L13.6574 4.83688L9.66296 7.86525L11.1145 12.6631L7 9.8L2.8855 12.6631L4.33704 7.86525L0.342604 4.83688L5.3542 4.73475L7 0Z" fill="#333333"/>
                        <path d="M23 0L24.6458 4.73475L29.6574 4.83688L25.663 7.86525L27.1145 12.6631L23 9.8L18.8855 12.6631L20.337 7.86525L16.3426 4.83688L21.3542 4.73475L23 0Z" fill="#333333"/>
                        <path d="M39 0L40.6458 4.73475L45.6574 4.83688L41.663 7.86525L43.1145 12.6631L39 9.8L34.8855 12.6631L36.337 7.86525L32.3426 4.83688L37.3542 4.73475L39 0Z" fill="#333333"/>
                        <path d="M55 0L56.6458 4.73475L61.6574 4.83688L57.663 7.86525L59.1145 12.6631L55 9.8L50.8855 12.6631L52.337 7.86525L48.3426 4.83688L53.3542 4.73475L55 0Z" fill="#333333"/>
                        <path d="M71 0L72.6458 4.73475L77.6574 4.83688L73.663 7.86525L75.1145 12.6631L71 9.8L66.8855 12.6631L68.337 7.86525L64.3426 4.83688L69.3542 4.73475L71 0Z" fill="#333333"/>
                    </svg>
                    As recommended by 99% of users on Google reviews
                </p>
            </div>
        </div>`;
		if(window.matchMedia('(max-width: 767px)').matches) {
			document
				.querySelector('.descr-section')
				.insertAdjacentHTML('afterend', footerRightHTML);
			document
				.querySelector('.descr-section')
				.after(document.querySelector('.awards-desktop'));
		} else {
			document.querySelector('#plugin iframe').insertAdjacentHTML(
				'afterend',
				`
                <div class="right-content">
                    <div class="d-flex justify-content-between">
                        <a href="/private-bookings" class="btn-customer">Book a private tour</a>
                        <a href="/buy-gift/" class="btn-customer gold">Buy as a gift</a>
                    </div>
                    <hr>
                    <div class="link-customer d-flex align-items-center justify-content-center">
                        <p class="tooltipe">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.91176 16L7.70588 13.6H7.5C5.55098 13.6 3.89706 12.94 2.53824 11.62C1.17941 10.3 0.5 8.69333 0.5 6.8C0.5 4.90667 1.17941 3.3 2.53824 1.98C3.89706 0.66 5.55098 0 7.5 0C8.47451 0 9.38396 0.176533 10.2284 0.5296C11.0727 0.882667 11.8139 1.36933 12.4519 1.9896C13.0898 2.60987 13.5905 3.32987 13.954 4.1496C14.3175 4.96933 14.4995 5.8528 14.5 6.8C14.5 7.8 14.3317 8.76 13.9952 9.68C13.6586 10.6 13.1988 11.4533 12.6158 12.24C12.0327 13.0267 11.3396 13.74 10.5364 14.38C9.73314 15.02 8.85827 15.56 7.91176 16ZM7.47941 11.18C7.71275 11.18 7.91176 11.1 8.07647 10.94C8.24118 10.78 8.32353 10.5867 8.32353 10.36C8.32353 10.1333 8.24118 9.94 8.07647 9.78C7.91176 9.62 7.71275 9.54 7.47941 9.54C7.24608 9.54 7.04706 9.62 6.88235 9.78C6.71765 9.94 6.63529 10.1333 6.63529 10.36C6.63529 10.5867 6.71765 10.78 6.88235 10.94C7.04706 11.1 7.24608 11.18 7.47941 11.18ZM6.88235 8.64H8.11765C8.11765 8.24 8.15882 7.96 8.24118 7.8C8.32353 7.64 8.58431 7.34667 9.02353 6.92C9.27059 6.68 9.47647 6.42 9.64118 6.14C9.80588 5.86 9.88824 5.56 9.88824 5.24C9.88824 4.56 9.65133 4.04987 9.17753 3.7096C8.70372 3.36933 8.14455 3.19947 7.5 3.2C6.89608 3.2 6.38824 3.36347 5.97647 3.6904C5.56471 4.01733 5.27647 4.41387 5.11176 4.88L6.26471 5.32C6.33333 5.09333 6.46373 4.86987 6.65588 4.6496C6.84804 4.42933 7.12941 4.31947 7.5 4.32C7.87059 4.32 8.14839 4.42 8.33341 4.62C8.51843 4.82 8.61122 5.04 8.61176 5.28C8.61176 5.50667 8.54314 5.71013 8.40588 5.8904C8.26863 6.07067 8.10392 6.25387 7.91176 6.44C7.43137 6.84 7.13957 7.1568 7.03635 7.3904C6.93314 7.624 6.8818 8.04053 6.88235 8.64Z" fill="#333333"/>
                            </svg>
                            <span class="tooltipe-content"> </span>
                        </p>
                        <a href="mailto:contact@secrettours.com" class="underline"> Help with booking</a>
                    </div>
                </div>
                ${footerRightHTML}`
			);
			document.querySelector('.tooltipe-content').innerHTML =
				document.querySelector('#plugin .text-red').innerHTML;
			document
				.querySelector('.link-customer')
				.after(document.querySelector('.awards-desktop'));
			let hoverHtlp = false;
			document
				.querySelector('.link-customer .tooltipe')
				.addEventListener('mouseover', (e) => {
					if(hoverHtlp == false) {
						hoverHtlp = true;
						pushDataLayer('Visibility hover over Help with booking');
					}
				});
			document
				.querySelector('.link-customer .tooltipe')
				.addEventListener('mouseout', (e) => (hoverHtlp = false));
			let isVisibleBooking = false;
			let isVisibleHelp = false;
			let isVisibleDataLayer = () => {
				setTimeout(() => {
					if(
						isVisibleHelp == false &&
						isScrolledIntoView(`.right-content .link-customer`)
					) {
						isVisibleHelp = true;
						pushDataLayer('Visibility Help with booking');
					}
				}, 3000);
				if(
					isScrolledIntoView('.right-content') == true &&
					isVisibleBooking == false
				) {
					isVisibleBooking = true;
					pushDataLayer('Visibility booking section');
				}
			};
			isVisibleDataLayer();
			window.addEventListener('scroll', () => isVisibleDataLayer());
		}
		for(let i = 0; i < descrObj.length; i++) {
			let icon = descrObj[i].split('/')[0];
			let iconName = descrObj[i].split('/')[1];
			if(
				document.querySelector(
					`.destination_page_wr .destination_descr .${icon}`
				) != null
			) {
				let info = document
					.querySelector(`.destination_page_wr .destination_descr .${icon}`)
					.nextElementSibling.innerText.trim();
				document.querySelector(`.left .descr-section .row`).insertAdjacentHTML(
					'beforeend',
					`
                <div class="col-md-4 col-6 item-${icon}">
                    <p class="name">${iconName}</p>
                    <div class="d-flex align-items-md-center">
                        <img src="${dir + icon}.svg">
                        <p class="info">${info}</p>
                    </div>
                </div>`
				);
			}
		}
		let isVisibleInfo = false;
		let isVisibleDataLayer = () => {
			if(
				isScrolledIntoView('.descr-section') == true &&
				isVisibleInfo == false
			) {
				isVisibleInfo = true;
				pushDataLayer('Visibility info section');
			}
		};
		isVisibleDataLayer();
		window.addEventListener('scroll', () => isVisibleDataLayer());
		//review
		initExp();
		async function initExp() {
			const [reviewsEl, scriptEl, rateEl] = await fetchReviews();
			/* Use existing markup or variable 'customers_reviews' for build your own markup */
			if(rateEl) {
				console.log('rateEl: ', rateEl);
				document
					.querySelector('body')
					.insertAdjacentElement('beforeend', rateEl);
				//body rate
				document
					.querySelector('.rating')
					.insertAdjacentElement('beforeend', rateEl);
				document.querySelector('.rating').insertAdjacentHTML(
					'beforeend',
					`<div class="star-row d-flex align-items-center">
                    <a href="#review" class="d-flex" onclick="menuToElement(event)"><p class="to-rating">/5 Rating </p></a>
                </div>
                <div class="d-flex align-items-center">
                    <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.2986 4.57758L22.1053 2.63862H18.0988C16.093 1.28712 13.6707 0.5 11.051 0.5C8.43456 0.5 6.01898 1.28881 4.01654 2.63862H0L1.8067 4.57758C0.699278 5.57425 0.00503632 7.00992 0.00503632 8.60398C0.00503632 11.6122 2.47756 14.0512 5.5272 14.0512C6.97591 14.0512 8.29577 13.5 9.2811 12.599L11.051 14.5L12.8209 12.6007C13.8062 13.5017 15.1244 14.0512 16.5731 14.0512C19.6227 14.0512 22.0986 11.6122 22.0986 8.60398C22.1002 7.00827 21.406 5.57264 20.2986 4.57758ZM5.52883 12.2904C3.46449 12.2904 1.79167 10.6403 1.79167 8.60398C1.79167 6.56766 3.46453 4.9175 5.52883 4.9175C7.59313 4.9175 9.266 6.56766 9.266 8.60398C9.266 10.6403 7.59313 12.2904 5.52883 12.2904ZM11.0526 8.49672C11.0526 6.07095 9.26436 3.98847 6.90393 3.09902C8.18031 2.57259 9.58051 2.28052 11.051 2.28052C12.5214 2.28052 13.9232 2.57259 15.1997 3.09902C12.8409 3.99013 11.0526 6.071 11.0526 8.49672ZM16.5748 12.2904C14.5105 12.2904 12.8376 10.6403 12.8376 8.60398C12.8376 6.56766 14.5105 4.9175 16.5748 4.9175C18.6391 4.9175 20.312 6.56766 20.312 8.60398C20.312 10.6403 18.6391 12.2904 16.5748 12.2904ZM16.5748 6.66995C15.4924 6.66995 14.6158 7.53465 14.6158 8.60233C14.6158 9.66996 15.4924 10.5347 16.5748 10.5347C17.6571 10.5347 18.5337 9.66996 18.5337 8.60233C18.5337 7.53631 17.6571 6.66995 16.5748 6.66995ZM7.48775 8.60398C7.48775 9.67162 6.61116 10.5363 5.52883 10.5363C4.44651 10.5363 3.56992 9.67162 3.56992 8.60398C3.56992 7.53631 4.44651 6.67161 5.52883 6.67161C6.61116 6.66995 7.48775 7.53631 7.48775 8.60398Z" fill="#144732"/>
                    </svg>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_521_34)">
                            <path d="M13.2653 7.64551C13.2653 7.19051 13.2245 6.75301 13.1486 6.33301H7.10529V8.81801H10.5586C10.407 9.61717 9.95195 10.2938 9.26945 10.7488V12.3647H11.352C12.5653 11.2447 13.2653 9.59967 13.2653 7.64551Z" fill="#144732"/>
                            <path d="M7.1051 13.9163C8.8376 13.9163 10.2901 13.3446 11.3518 12.3646L9.26927 10.7488C8.6976 11.1338 7.96844 11.3671 7.1051 11.3671C5.43677 11.3671 4.01927 10.2413 3.51177 8.72461H1.37677V10.3813C2.4326 12.4754 4.59677 13.9163 7.1051 13.9163Z" fill="#144732"/>
                            <path d="M3.5126 8.71902C3.38427 8.33402 3.30844 7.92569 3.30844 7.49986C3.30844 7.07402 3.38427 6.66569 3.5126 6.28069V4.62402H1.3776C0.940103 5.48736 0.68927 6.46152 0.68927 7.49986C0.68927 8.53819 0.940103 9.51236 1.3776 10.3757L3.0401 9.08069L3.5126 8.71902Z" fill="#144732"/>
                            <path d="M7.1051 3.63801C8.0501 3.63801 8.8901 3.96467 9.56094 4.59467L11.3984 2.75717C10.2843 1.71884 8.8376 1.08301 7.1051 1.08301C4.59677 1.08301 2.4326 2.52384 1.37677 4.62384L3.51177 6.28051C4.01927 4.76384 5.43677 3.63801 7.1051 3.63801Z" fill="#144732"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_521_34">
                                <rect width="14" height="14" fill="white" transform="translate(0.105286 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <p>Recommended by 99% of travelers</p>
                </div>
                `
				);
				//header rate
				let star = `<svg class="star" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#C39958"/>
                </svg>`;
				let starHalf = `<svg class="star star-half" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5.125V12.925L13.15 14.85L12.325 11.25L15.1 8.85L11.45 8.525L10 5.125ZM3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill="#C39958"/>
                </svg>`;
				let rate = document
					.querySelector('.rating .rate-tours')
					.innerHTML.replace(/[^\d\.]*/g, '');
				let ratehalf = rate.split('.')[1];
				document.querySelector('.rating .rate-tours').innerHTML = rate;
				document
					.querySelector('.rating_header')
					.insertAdjacentHTML(
						'beforeend',
						`<p class="header_sticky_to-rating">${rate}/5 Rating </p>`
					);
				if(ratehalf > 0) {
					document
						.querySelector('.rating .star-row')
						.insertAdjacentHTML('afterbegin', starHalf);
					document
						.querySelector('.rating_header')
						.insertAdjacentHTML('afterbegin', starHalf);
				}
				for(let i = 0; i < Math.floor(rate); i++) {
					document
						.querySelector('.rating .star-row')
						.insertAdjacentHTML('afterbegin', star);
					document
						.querySelector('.rating_header')
						.insertAdjacentHTML('afterbegin', star);
				}
				document
					.querySelector('.rating .to-rating')
					.before(document.querySelector('.rating .rate-tours'));
			}
			if(reviewsEl && scriptEl) {
				console.log('reviewsEl && scriptEl: ', reviewsEl, scriptEl);
				document
					.querySelector('body')
					.insertAdjacentElement('beforeend', reviewsEl);
				document
					.querySelector('body')
					.insertAdjacentElement('beforeend', scriptEl);
				document.querySelector('.tour-section .review').innerHTML = `
                <div class="d-md-flex align-items-md-center justify-content-md-between">
                    <h2>Review <span class="c-gold d-md-inline d-block">What people say</span></h2>
                    <div class="review-from">
                        <p>Review from</p>
                        <div class="d-md-flex justify-content-md-between align-items-md-center">
                            <img src="${dir}TripAdvisor_Logo.svg" alt="icon">
                        </div>
                    </div>
                </div> 
        
                <div class="block-reviews">
                    <div class="slider-review">
                        <div class="swiper-wrapper"> </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev" onclick="pushDataLayer('Click on navigation button in Review','Previous slide')">
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1L2 7L8 13" stroke="#144732" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <div class="swiper-button-next" onclick="pushDataLayer('Click on navigation button in Review','Next slide')">
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.999999 13L7 7L1 1" stroke="#144732" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div> `;
				document
					.querySelector('.tour-section .review .review-from > div > img')
					.after(document.querySelector('.reviews-first-container'));
				if(customers_reviews) {
					console.log('Reviews Array:', customers_reviews);
					document
						.querySelector('.header_sticky_bottom .menu ul')
						.insertAdjacentHTML(
							'beforeend',
							`<li><a href="#review" onclick="menuToElement(event)">Reviews</a></li>`
						);
					for(let i = 0; i < customers_reviews.length; i++) {
						let slide = document.createElement('div');
						slide.classList.add('swiper-slide');
						slide.innerHTML = `
                        <div class="d-flex align-items-center">
                            <img src="${customers_reviews[i][0]}">
                            <div>
                                <p class="author">${customers_reviews[i][1]}</p>
                                <div class="reviews-user-stars d-flex">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F4B75B"/>
                                    </svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F4B75B"/>
                                    </svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F4B75B"/>
                                    </svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F4B75B"/>
                                    </svg>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F4B75B"/>
                                    </svg>
                                                                                                                                
                                </div>
                            </div>
                        </div>
                        <p class="text">
                            <b>${customers_reviews[i][2]}</b>
                            ${customers_reviews[i][3]}
                        </p> `;
						if(
							document.querySelector('.slider-review .swiper-wrapper') != null
						) {
							document
								.querySelector('.slider-review .swiper-wrapper')
								.appendChild(slide);
						}
					}
					const waitSwiper2 = setInterval(() => {
						if(typeof Swiper == 'function') {
							clearInterval(waitSwiper2);
							if(window.innerWidth < 768) {
								new Swiper('.slider-review', {
									loop: true,
									slidesPerView: 1.1,
									spaceBetween: 16,
									pagination: {
										el: '.slider-review .swiper-pagination',
										type: 'bullets',
									},
									navigation: {
										nextEl: '.slider-review .swiper-button-next',
										prevEl: '.slider-review .swiper-button-prev',
									},
								});
							} else {
								new Swiper('.slider-review', {
									loop: true,
									slidesPerView: 3,
									spaceBetween: 20,
									pagination: {
										el: '.slider-review .swiper-pagination',
										type: 'fraction',
									},
									navigation: {
										nextEl: '.slider-review .swiper-button-next',
										prevEl: '.slider-review .swiper-button-prev',
									},
								});
							}
						}
					}, 200);
				}
				let isVisibleReview = false;
				let isVisibleReviewDataLayer = () => {
					if(
						isScrolledIntoView('.tour-section .review h2') == true &&
						isVisibleReview == false
					) {
						isVisibleReview = true;
						pushDataLayer('Visibility review section');
					}
				};
				isVisibleReviewDataLayer();
				window.addEventListener('scroll', () => isVisibleReviewDataLayer());
			}
			if(typeof loadReviews !== 'function') return false;
			loadReviews();
		}
		async function fetchReviews() {
			let requestUrl =
				document.querySelector('.ret_back')?.href ||
				location.href.match(/^(.*?\/\/[^\/]+\/[^\/]+\/).*$/)[1];
			if(!requestUrl) return;
			const res = await fetch(requestUrl);
			const data = await res.text();
			const DOM = new DOMParser().parseFromString(data, 'text/html');
			const reviewsEl = DOM.querySelector('.all-reviews');
			const scriptEl = DOM.querySelector('.reviews')?.nextElementSibling;
			const rateEl = DOM.querySelector('.country_tours')
				?.querySelector(`[href="${location.pathname}"]`)
				?.closest('.cardx')
				?.querySelector('.star-ratings');
			if(scriptEl) {
				scriptEl.type = 'text/javascript';
			}
			return [reviewsEl, scriptEl, rateEl];
		}
		setTimeout(() => {
			let cookieAlert = document.querySelector('.cookiealert');
			let bookbutton = document.querySelector('#tour_f_btn');
			let acceptCookies = document.querySelector('.acceptcookies');
			let readmorebutton = document.querySelector('.readmore-cookies-button');
			if(acceptCookies) {
				acceptCookies.addEventListener('click', function() {
					bookbutton.style.bottom = '0px';
				});
			}
			if(readmorebutton) {
				readmorebutton.addEventListener('click', function() {
					bookbutton.style.bottom = '160px';
				});
			}
			if(cookieAlert && cookieAlert.classList.contains('show')) {
				bookbutton.style.bottom = '70px';
			}
		}, 2000);
	}
});
let taste = setInterval(() => {
	if(
		document.querySelector('.tour-drinks') != null &&
		document.querySelector('.brands') != null
	) {
		clearInterval(taste);
		document
			.querySelector('.brands')
			.after(document.querySelector('.tour-drinks'));
		document.querySelector('.tour-drinks').id = 'tour-drinks';
		let titleDrinks = document.querySelector('.tour-drinks .main_subheading');
		let sptArr = titleDrinks.innerHTML.trim().split(' ');
		titleDrinks.innerHTML = titleDrinks.innerHTML.replace(
			sptArr[sptArr.length - 1],
			`<span class="c-gold"> ${sptArr[sptArr.length - 1]}</span>`
		);
		//titleDrinks.innerHTML = `WHAT YOU'LL <span class="c-gold"> TASTE</span>`
		document.querySelectorAll('.food_block .title').forEach((item) => {
			if(item.innerHTML.trim().includes('THE FOOD')) {
				item.insertAdjacentHTML(
					'afterbegin',
					`
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_243_709)">
                    <path d="M29.7409 14.1554L29.2916 12.6763C28.7207 10.9962 26.8959 10.0969 25.2157 10.6678C24.2705 10.9889 23.5283 11.7312 23.2071 12.6763L22.7578 14.1554C22.3796 15.4028 22.3002 16.7217 22.526 18.0054C22.732 19.0862 23.4182 20.0148 24.3909 20.5289L23.8875 31.78C23.8202 32.408 24.0239 33.035 24.4475 33.5034C25.3587 34.5001 26.9053 34.5694 27.902 33.6582C27.9559 33.609 28.0075 33.5573 28.0568 33.5034C28.471 33.0483 28.6743 32.4397 28.6168 31.8269L28.1107 20.5275C29.082 20.0131 29.767 19.0852 29.9727 18.0054C30.1985 16.7217 30.1191 15.4028 29.7409 14.1554ZM28.5936 17.7618C28.4421 18.5383 27.8887 19.1754 27.1411 19.4341C26.8574 19.5408 26.6746 19.818 26.6882 20.1208L27.2203 31.9375C27.2448 32.1693 27.1683 32.4004 27.0103 32.5717C26.5888 32.989 25.9099 32.989 25.4884 32.5717C25.3225 32.3866 25.2472 32.1374 25.2826 31.8913L25.8105 20.1208C25.8241 19.818 25.6413 19.5408 25.3576 19.4341C24.61 19.1754 24.0566 18.5383 23.9051 17.7618C23.7178 16.6961 23.7838 15.6012 24.0975 14.5656L24.547 13.0858C24.8947 12.1456 25.9387 11.6654 26.879 12.0131C27.3761 12.1969 27.7679 12.5888 27.9517 13.0858L28.4012 14.5656C28.7146 15.6013 28.7805 16.6961 28.5936 17.7618Z" fill="#C39958"/>
                    <path d="M18.9004 10.5C18.5138 10.5 18.2004 10.8134 18.2004 11.2V17.2102L16.3055 19.1051C16.1653 19.2447 16.0908 19.4373 16.1004 19.635L16.7129 31.885C16.7275 32.1492 16.6316 32.4075 16.4483 32.5983C16.0651 32.9849 15.4411 32.9877 15.0544 32.6044C15.0523 32.6024 15.0503 32.6003 15.0483 32.5983C14.8649 32.4075 14.7691 32.1492 14.7837 31.885L15.4004 19.635C15.4102 19.4374 15.3359 19.2449 15.196 19.1051L13.3004 17.2102V11.2C13.3004 10.8134 12.987 10.5 12.6004 10.5C12.2138 10.5 11.9004 10.8134 11.9004 11.2V17.5C11.9004 17.6857 11.9742 17.8637 12.1055 17.9949L13.9857 19.8758L13.3886 31.8171C13.3251 33.1215 14.331 34.2304 15.6353 34.294C16.9397 34.3575 18.0487 33.3516 18.1122 32.0472C18.116 31.9706 18.116 31.8938 18.1122 31.8172L17.5151 19.8759L19.3953 17.995C19.5265 17.8637 19.6004 17.6858 19.6004 17.5001V11.2001C19.6004 10.8134 19.287 10.5 18.9004 10.5Z" fill="#C39958"/>
                    <path d="M14.7 10.5C14.3134 10.5 14 10.8134 14 11.2V16.8C14 17.1866 14.3134 17.5 14.7 17.5C15.0866 17.5 15.4 17.1866 15.4 16.8V11.2C15.4 10.8134 15.0866 10.5 14.7 10.5Z" fill="#C39958"/>
                    <path d="M16.7996 10.5C16.413 10.5 16.0996 10.8134 16.0996 11.2V16.8C16.0996 17.1866 16.413 17.5 16.7996 17.5C17.1862 17.5 17.4996 17.1866 17.4996 16.8V11.2C17.4996 10.8134 17.1862 10.5 16.7996 10.5Z" fill="#C39958"/>
                    <path d="M21 0C9.40205 0 0 9.40205 0 21C0 32.5979 9.40205 42 21 42C32.5979 42 42 32.5979 42 21C41.9869 9.40748 32.5925 0.013125 21 0ZM21 40.6C10.1752 40.6 1.4 31.8248 1.4 21C1.4 10.1752 10.1752 1.4 21 1.4C31.8248 1.4 40.6 10.1752 40.6 21C40.5877 31.8196 31.8196 40.5877 21 40.6Z" fill="#C39958"/>
                    <path d="M23.2718 34.1399C23.2343 33.7551 22.8919 33.4736 22.5071 33.5112C22.498 33.512 22.489 33.5131 22.48 33.5143L22.4828 33.5136C21.4973 33.6281 20.5017 33.6281 19.5162 33.5136C19.1321 33.4686 18.7843 33.7434 18.7392 34.1275C18.6941 34.5116 18.969 34.8595 19.3531 34.9045C20.4461 35.0322 21.5501 35.0322 22.6431 34.9045C23.0278 34.8671 23.3093 34.5247 23.2718 34.1399Z" fill="#C39958"/>
                    <path d="M31.7092 11.9797C31.4608 11.6835 31.0193 11.6447 30.7231 11.8932C30.7221 11.894 30.7212 11.8949 30.7201 11.8957C30.4246 12.1449 30.387 12.5864 30.6361 12.882C34.8567 17.8922 34.5338 25.3008 29.8934 29.9249C29.6195 30.1978 29.6188 30.6411 29.8917 30.915C30.1646 31.1889 30.6079 31.1897 30.8818 30.9168C36.0388 25.7794 36.3984 17.5472 31.7092 11.9797Z" fill="#C39958"/>
                    <path d="M24.3029 7.3909C21.5672 6.73527 18.698 6.91149 16.0632 7.897C15.7013 8.03307 15.5183 8.43679 15.6544 8.7986C15.7569 9.07134 16.0177 9.25185 16.3089 9.25212C16.3927 9.25168 16.4756 9.23637 16.5539 9.2067C18.9267 8.31937 21.5104 8.1609 23.9739 8.7517C24.3497 8.84253 24.7279 8.61162 24.8188 8.2358C24.9096 7.85999 24.6787 7.48173 24.3029 7.3909Z" fill="#C39958"/>
                    <path d="M12.0733 29.8901C9.71355 27.5343 8.39098 24.3345 8.39903 21.0001C8.39212 18.336 9.23597 15.7394 10.8077 13.5885C11.04 13.2794 10.9778 12.8406 10.6688 12.6083C10.3597 12.376 9.92092 12.4382 9.68861 12.7472C9.6845 12.7527 9.68047 12.7583 9.67653 12.7639C5.6294 18.3278 6.22492 26.0078 11.0814 30.8813C11.3551 31.1551 11.7991 31.1553 12.073 30.8816C12.3469 30.6079 12.347 30.1639 12.0733 29.8901Z" fill="#C39958"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_243_709">
                    <rect width="42" height="42" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>`
				);
			} else if(item.innerHTML.trim().includes('DRINKS')) {
				item.insertAdjacentHTML(
					'afterbegin',
					`
                <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.125 13.7812C27.125 8.53716 25.8578 0.872156 25.8033 0.547969C25.7777 0.394854 25.6986 0.255777 25.5802 0.155451C25.4617 0.0551248 25.3115 4.55753e-05 25.1562 0H2.84375C2.68851 4.55753e-05 2.53831 0.0551248 2.41984 0.155451C2.30137 0.255777 2.2223 0.394854 2.19669 0.547969C2.14222 0.872156 0.875 8.53716 0.875 13.7812C0.875 18.8186 2.08316 25.4159 12.0312 26.1758V37.4062C12.0312 37.5803 11.9621 37.7472 11.839 37.8703C11.716 37.9934 11.549 38.0625 11.375 38.0625H8.09375C7.22383 38.0635 6.38983 38.4096 5.77471 39.0247C5.15958 39.6398 4.81354 40.4738 4.8125 41.3438C4.8125 41.5178 4.88164 41.6847 5.00471 41.8078C5.12778 41.9309 5.2947 42 5.46875 42H22.5312C22.7053 42 22.8722 41.9309 22.9953 41.8078C23.1184 41.6847 23.1875 41.5178 23.1875 41.3438C23.1865 40.4738 22.8404 39.6398 22.2253 39.0247C21.6102 38.4096 20.7762 38.0635 19.9062 38.0625H16.625C16.451 38.0625 16.284 37.9934 16.161 37.8703C16.0379 37.7472 15.9688 37.5803 15.9688 37.4062V26.1758C25.9168 25.4159 27.125 18.8186 27.125 13.7812ZM3.40353 1.3125H24.5965C24.8255 2.77791 25.4398 6.93 25.6963 10.7494C24.9918 10.1632 24.104 9.84273 23.1875 9.84375C20.3131 9.84375 17.0955 12.0868 15.9688 12.9478C14.8197 12.0868 11.5062 9.84375 8.09375 9.84375C6.0289 9.79928 3.99753 10.3704 2.25837 11.4844C2.47822 7.48125 3.15941 2.87306 3.40353 1.3125ZM25.8125 13.7812C25.8125 14.4774 25.5359 15.1451 25.0437 15.6374C24.5514 16.1297 23.8837 16.4062 23.1875 16.4062C20.9379 16.4062 18.2656 14.6665 17.0476 13.7812C18.2656 12.896 20.9379 11.1562 23.1875 11.1562C23.8837 11.1562 24.5514 11.4328 25.0437 11.9251C25.5359 12.4174 25.8125 13.0851 25.8125 13.7812ZM2.1875 13.7812C2.1875 12.5921 4.82234 11.1562 8.09375 11.1562C11.7418 11.1562 15.5094 14.2544 15.5487 14.2852C15.7168 14.4257 19.7094 17.7188 23.1875 17.7188C24.0597 17.7186 24.9069 17.4271 25.5946 16.8906C24.9266 21.0938 22.4059 24.9375 14 24.9375C3.53019 24.9375 2.1875 18.9755 2.1875 13.7812ZM16.625 39.375H19.9062C20.3133 39.3755 20.7102 39.5019 21.0426 39.7369C21.375 39.9719 21.6266 40.3039 21.7628 40.6875H6.23722C6.37345 40.3039 6.625 39.9719 6.95738 39.7369C7.28976 39.5019 7.6867 39.3755 8.09375 39.375H11.375C11.8971 39.375 12.3979 39.1676 12.7671 38.7984C13.1363 38.4292 13.3438 37.9284 13.3438 37.4062V26.2375C13.561 26.2428 13.7749 26.25 14 26.25C14.2251 26.25 14.439 26.2428 14.6562 26.2375V37.4062C14.6562 37.9284 14.8637 38.4292 15.2329 38.7984C15.6021 39.1676 16.1029 39.375 16.625 39.375Z" fill="#C39958"/>
                    <path d="M4.91969 4.58559C4.9495 4.58954 4.97953 4.59151 5.0096 4.59149C5.16799 4.59122 5.32095 4.53367 5.44023 4.42946C5.55952 4.32525 5.63709 4.18142 5.65863 4.02449L5.75051 3.36824C5.77505 3.19585 5.7301 3.02077 5.62555 2.88151C5.57378 2.81256 5.50894 2.75448 5.43473 2.71059C5.36051 2.66669 5.27838 2.63785 5.19302 2.6257C5.02063 2.60116 4.84554 2.6461 4.70629 2.75065C4.56703 2.8552 4.47502 3.01079 4.45047 3.18318L4.3586 3.83943C4.34592 3.92534 4.35041 4.01291 4.37182 4.09706C4.39322 4.18122 4.43112 4.26029 4.48331 4.32969C4.5355 4.3991 4.60095 4.45745 4.67585 4.50138C4.75076 4.5453 4.83364 4.57393 4.91969 4.58559Z" fill="#C39958"/>
                    <path d="M4.39755 9.18773C4.41933 9.19016 4.44125 9.19126 4.46317 9.19101C4.62575 9.19085 4.78247 9.13035 4.90299 9.02123C5.0235 8.91211 5.09923 8.76214 5.11548 8.60038C5.20342 7.70132 5.30383 6.81735 5.40423 5.99113C5.41628 5.90483 5.41102 5.81699 5.38876 5.73274C5.3665 5.64849 5.32768 5.56952 5.27457 5.50043C5.22146 5.43134 5.15513 5.37353 5.07943 5.33035C5.00374 5.28718 4.92021 5.25951 4.83371 5.24896C4.7472 5.23842 4.65947 5.24521 4.57562 5.26893C4.49177 5.29265 4.41349 5.33284 4.34534 5.38714C4.27718 5.44145 4.22053 5.50878 4.17868 5.58521C4.13683 5.66165 4.11062 5.74565 4.10158 5.83232C3.9992 6.66838 3.89814 7.56285 3.80955 8.47307C3.79325 8.64571 3.84595 8.81778 3.95613 8.95169C4.0663 9.0856 4.225 9.17046 4.39755 9.18773Z" fill="#C39958"/>
                    <path d="M6.125 14.4375H7.4375V15.75H6.125V14.4375Z" fill="#C39958"/>
                    <path d="M4.8125 17.7188H6.125V19.0312H4.8125V17.7188Z" fill="#C39958"/>
                    <path d="M8.75 19.6875H10.0625V21H8.75V19.6875Z" fill="#C39958"/>
                </svg> `
				);
			}
		});
		if(document.querySelectorAll('.tour-drinks > p').length > 1) {
			let text = document.querySelectorAll('.tour-drinks > p');
			text.forEach((item, index) => {
				if(index < text.length - 1) {
					item.style = 'margin-bottom: 16px';
				}
			});
		}
		document
			.querySelector('.header_sticky_bottom .menu ul')
			.insertAdjacentHTML(
				'beforeend',
				`<li><a href="#tour-drinks" onclick="menuToElement(event)">What you will taste</a></li>`
			);
	}
});
let drink = setInterval(() => {
	if(
		document.querySelector('.mini_ul') != null &&
		document.querySelector('.tour-section .left') != null &&
		document.querySelectorAll('.breadcrumbs-customer li a')[1] != null &&
        !window.location.href.includes('upgraded-drinks-package') &&
        document.querySelector('.what_we_do .buy-2') != null
	) {
		clearInterval(drink);
		document.querySelector('.tour-section .tour-do').insertAdjacentHTML(
			'beforebegin',
			`
        <div class="drinks">
            <div class="title d-flex align-items-md-center">
                <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42 16.104C42 15.1793 41.2504 14.4297 40.3257 14.4297H38.1412C38.1256 14.3631 38.1015 14.2987 38.0695 14.2384L35.4226 9.45476L34.7528 1.1871C34.7196 0.771826 34.3722 0.452322 33.9556 0.453617H29.8656C29.449 0.452322 29.1016 0.771826 29.0683 1.1871L28.3986 9.43084L26.4533 12.9627L24.508 9.43084L23.8383 1.1871C23.805 0.771826 23.4576 0.452322 23.041 0.453617H18.951C18.5345 0.452322 18.187 0.771826 18.1538 1.1871L17.492 9.43084L15.5467 12.9627L13.6014 9.43084L12.9317 1.1871C12.8984 0.771826 12.551 0.452322 12.1344 0.453617H8.04442C7.62785 0.452322 7.28044 0.771826 7.24715 1.1871L6.57745 9.43084L3.93052 14.2144C3.89853 14.2748 3.87442 14.3392 3.85877 14.4058H1.67426C0.74963 14.4058 0 15.1554 0 16.08V24.1165C0.00687642 24.4283 0.100755 24.7321 0.271071 24.9935C0.106435 25.2565 0.0180382 25.5601 0.0159453 25.8705V33.883C0.0202306 34.7984 0.758898 35.5406 1.67426 35.5493H40.3257C41.2504 35.5493 42 34.7997 42 33.875V25.8705C41.9987 25.56 41.9103 25.2562 41.7449 24.9935C41.9103 24.7308 41.9987 24.4269 42 24.1165V16.104ZM30.5672 2.0641H33.1902L33.3815 4.4559H30.4077L30.5672 2.0641ZM29.8497 10.0368C29.9037 9.9384 29.9363 9.82967 29.9453 9.71785L30.2722 6.05043H33.541L33.836 9.7338C33.8451 9.84562 33.8776 9.95434 33.9317 10.0527L36.3235 14.4297H27.4738L29.8497 10.0368ZM19.6925 2.0641H22.3155L22.5068 4.4559H19.4932L19.6925 2.0641ZM18.9749 10.0368C19.029 9.9384 19.0615 9.82967 19.0706 9.71785L19.3656 6.05043H22.6344L22.9294 9.7338C22.9385 9.84562 22.971 9.95434 23.0251 10.0527L25.4169 14.4297H16.5592L18.9749 10.0368ZM8.7779 2.0641H11.4328L11.6241 4.4559H8.58656L8.7779 2.0641ZM8.06036 10.0368C8.11438 9.9384 8.14697 9.82967 8.15604 9.71785L8.45103 6.05043H11.7198L12.0148 9.7338C12.0239 9.84562 12.0565 9.95434 12.1105 10.0527L14.5023 14.4297H5.65262L8.06036 10.0368ZM40.4055 33.883C40.4055 33.9271 40.3698 33.9627 40.3257 33.9627H1.67426C1.63021 33.9627 1.59453 33.9271 1.59453 33.883V25.8705C1.59453 25.8264 1.63021 25.7907 1.67426 25.7907H40.3257C40.3698 25.7907 40.4055 25.8264 40.4055 25.8705V33.883ZM40.4055 24.1165C40.4055 24.1605 40.3698 24.1962 40.3257 24.1962H1.67426C1.63021 24.1962 1.59453 24.1605 1.59453 24.1165V16.104C1.59453 16.0599 1.63021 16.0242 1.67426 16.0242H40.3257C40.3698 16.0242 40.4055 16.0599 40.4055 16.104V24.1165Z" fill="#C39958"/>
                </svg> 
                <p>Optional Drinks Package Upgrade
                    <span>Get additional drinks - you can add upgrade at checkout</span>
                </p>                    
            </div>
            <ul>${document.querySelector('.mini_ul').innerHTML} </ul>
            <div class="d-md-flex align-items-center">
                <a href="#" class="buy-2" onclick="pushDataLayer('Click on Add upgraded drink package link')">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3594 2.26452L14.2355 0.140556C14.0481 -0.0468521 13.7357 -0.0468521 13.5171 0.140556L12.8299 0.858956C12.6113 1.04636 12.6113 1.35871 12.8299 1.54612L10.4248 3.9512C8.95681 3.3265 7.2389 3.60761 6.05198 4.79453L1.08565 9.76086C0.304783 10.5417 0.304783 11.7911 1.08565 12.572L3.92801 15.4143C4.70888 16.1952 5.95827 16.1952 6.73914 15.4143L11.7055 10.448C12.8924 9.2611 13.1735 7.54319 12.5488 6.07516L14.9539 3.67008C15.1413 3.88873 15.4536 3.88873 15.641 3.67008L16.3594 2.98292C16.5469 2.76428 16.5469 2.45193 16.3594 2.26452ZM6.11445 13.2279L3.27208 10.3856L7.08272 6.57491L9.92509 9.41728L6.11445 13.2279Z" fill="white"/>
                    </svg>
                    Add Upgraded Drinks Package
                </a>
                <p class="text">When you purchase our upgraded drink package, you'll enjoy the following in addition to what is already served on the tour:</p>
            </div>
        </div>`
		);
		let isVisibleBuy2 = false;
		window.addEventListener('scroll', (e) => {
			if(isScrolledIntoView('.buy-2') == true && isVisibleBuy2 == false) {
				isVisibleBuy2 = true;
				pushDataLayer('Visibility Add upgraded drinks package button');
			}
		});
		document.querySelector('.drinks a.buy-2').href = document.querySelector('.what_we_do .buy-2').href;
	}
});
let tourDo = setInterval(() => {
	if(
		document.querySelector('.tour-do') != null &&
		document.querySelector('.what_we_do') != null
	) {
		clearInterval(tourDo);
		document
			.querySelector('.tour-do')
			.insertAdjacentHTML(
				'afterbegin',
				`<h2 class="title">WHAT YOU'LL <span class="c-gold">Do</span></h2><div class="content-text"></div>`
			);
		document.querySelectorAll('.what_we_do .text').forEach((item) => {
			document
				.querySelector('.tour-do .content-text')
				.insertAdjacentHTML(
					'beforeend',
					`<p class="text">${item.innerText}</p>`
				);
		});
		document
			.querySelector('.tour-do .content-text')
			.after(document.querySelector('.what_we_do .note'));
		// document.querySelector('.tour-do .content-text').after(document.querySelector('.what_we_do .load_more'))
		if (document.querySelector('.what_we_do > ul') != null) {
            document.querySelector('.tour-do .content-text').after(document.querySelector('.what_we_do > ul'));
        }
      
		document.querySelectorAll('.tour-do ul li').forEach((item) => {
			item.innerHTML = `
            <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0009 36C15.3719 36 15.7155 35.8051 15.906 35.4868L19.7089 29.1305C25.6544 27.1582 29.9452 21.5541 29.9452 14.9443C29.9452 6.69078 23.2544 3.8147e-06 15.0009 3.8147e-06C6.74742 3.8147e-06 0.0566406 6.69078 0.0566406 14.9443C0.0566406 21.5541 4.34749 27.1582 10.2929 29.1305L14.0959 35.4868C14.2863 35.8051 14.63 36 15.0009 36ZM15.0009 32.8911L11.8977 27.7042C11.7627 27.4786 11.5483 27.3115 11.2966 27.2358C6.01304 25.6457 2.16602 20.7432 2.16602 14.9443C2.16602 7.85576 7.91239 2.10938 15.0009 2.10938C22.0895 2.10938 27.8358 7.85576 27.8358 14.9443C27.8358 20.7432 23.9888 25.6457 18.7053 27.2358C18.4535 27.3115 18.2392 27.4786 18.1042 27.7042L15.0009 32.8911Z" fill="#C39958"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.89062 17.4443C5.89062 18.0268 6.36282 18.499 6.94531 18.499H23.0573C23.6398 18.499 24.112 18.0268 24.112 17.4443C24.112 16.8618 23.6398 16.3896 23.0573 16.3896H6.94531C6.36282 16.3896 5.89062 16.8618 5.89062 17.4443Z" fill="#C39958"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45508 18.5166C9.03757 18.5166 9.50977 18.0444 9.50977 17.4619V16.3969C9.50977 13.3795 11.9829 10.9064 15.0003 10.9064C18.0176 10.9064 20.4908 13.3798 20.4908 16.3969V17.4619C20.4908 18.0444 20.9629 18.5166 21.5454 18.5166C22.1279 18.5166 22.6001 18.0444 22.6001 17.4619V16.3969C22.6001 12.2149 19.1826 8.79702 15.0003 8.79702C10.8179 8.79702 7.40039 12.2145 7.40039 16.3969V17.4619C7.40039 18.0444 7.87259 18.5166 8.45508 18.5166Z" fill="#C39958"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.8691C15.5825 10.8691 16.0547 10.3969 16.0547 9.81445V8.74043C16.0547 8.15794 15.5825 7.68574 15 7.68574C14.4175 7.68574 13.9453 8.15794 13.9453 8.74043V9.81445C13.9453 10.3969 14.4175 10.8691 15 10.8691Z" fill="#C39958"/>
            </svg>
            <p>${item.innerHTML}</p>`;
            if (item.querySelector('p').clientHeight > 45) {
                item.style = 'align-items: flex-start;'
            }
		});
		document
			.querySelector('.header_sticky_bottom .menu ul')
			.insertAdjacentHTML(
				'beforeend',
				`<li><a href="#tour-do" onclick="menuToElement(event)">What you will do</a></li>`
			);
	}
});

let meetingSpotNotate = setInterval(() => {
    if (document.querySelector('.notate') != null && document.querySelector('.meeting-spot .title') != null) {
        clearInterval(meetingSpotNotate)
        document.querySelector('.meeting-spot .title').after(document.querySelector('.notate'));
    }
})
let meetingSpot = setInterval(() => {
	if(
		document.querySelector('.meeting_spot .covid') != null &&
		document.querySelector('.meeting-spot') != null
	) {
		clearInterval(meetingSpot);
		
        if (document.querySelector('#meeting_spot + .text') != null) {
            document.querySelector('.meeting-spot .title').after(document.querySelector('#meeting_spot + .text'));
        }
		if(document.querySelector('.grey_block') != null) {
			document.querySelectorAll('.grey_block').forEach((item) => {
				if(item.querySelector('a') != null) {
					let spt = item.querySelector('a').innerHTML.split('<br>');
					let res = `<span>${spt[0]}</span><a href="${
            item.querySelector('a').href
          }">${spt[1]}</a>`;
					item.querySelector('.right .item > p').innerHTML = res;
				}
				document
					.querySelector('.notate')
					.insertAdjacentHTML(
						'afterend',
						`<div class="grey_block"> ${item.innerHTML}</div>`
					);
				if(item.querySelector('a') == null) {
					if(document.querySelector('.meeting_spot > iframe') != null) {
						document
							.querySelector('.grey_block')
							.after(document.querySelector('.meeting_spot > iframe'));
						document.querySelector('.meeting-spot iframe').style.marginTop =
							'16px';
					}
				}
			});
		} else {
			if(document.querySelector('.meeting_spot > iframe') != null) {
				document
					.querySelector('.notate')
					.after(document.querySelector('.meeting_spot > iframe'));
			}
		}
		document.querySelector('.meeting-spot__covid').innerHTML =
			document.querySelector('.meeting_spot .covid').innerHTML;
        if ( document.querySelector('.meeting_spot .contact_info') != null) {
            document.querySelector('.meeting-spot__contact').innerHTML =
                document.querySelector('.meeting_spot .contact_info').innerHTML;
        } else {
            let tourName = document.querySelectorAll('.breadcrumbs-customer li a')[document.querySelectorAll('.breadcrumbs-customer li a').length - 2].innerHTML;

            document.querySelector('.meeting-spot__contact').insertAdjacentHTML('afterbegin', `
            <p class="title-guide">Secret ${tourName}</p>
            <p class="name">Contact Us</p>`)
			
        }
		document
			.querySelector('.meeting-spot__covid .main_subheading')
			.insertAdjacentHTML(
				'afterbegin',
				document.querySelector('.meeting-spot__covid [alt="good to go logo"]')
				.parentElement.innerHTML
			);
		document
			.querySelector('.header_sticky_bottom .menu ul')
			.insertAdjacentHTML(
				'beforeend',
				`<li><a href="#meeting-spot" onclick="menuToElement(event)">Meeting spot</a></li>`
			);
		if(
			document.querySelector('.meeting-spot__contact .PT_link_black a') == null
		) {
			document
				.querySelector('.meeting-spot__contact')
				.insertAdjacentHTML(
					'beforeend',
					`<div class="PT_link_black"><a style="color:#fff;padding-top:4px;" href="/private-bookings">Private Tours</a></div>`
				);
		}
		document
			.querySelector('.meeting-spot__contact .PT_link_black a')
			.addEventListener('click', (e) =>
				pushDataLayer('Click on Private Tours in Contact Us')
			);
	}
});
let getCity = (crumb, string) => {
	let capital = crumb.innerHTML.trim();
	let city = string.innerHTML.split(' ').filter((text) => {
		if(
			text != 'Food' &&
			text != 'Tour' &&
			text != 'Tours' &&
			text != 'Tours:' &&
			text != ':' &&
			text != '-' &&
			text != 'Secret'
		) {
			return text;
		}
	});
	city = city.join(' ');
	if(city != '' && city.includes(capital) && city.length != capital.length) {
		city = city.replace(capital, '');
	}
	return city;
};
let video = setInterval(() => {
	if(
		document.querySelector('.youtube[data-embed]') != null &&
		document.querySelector('.video-section') != null &&
		document.querySelector('.breadcrumbs-customer li:last-child a') != null
	) {
		clearInterval(video);
		let embed = document.querySelector('.youtube[data-embed]').dataset.embed;
		let linkVideo = `https://www.youtube.com/embed/${embed}`;
		let city = getCity(
			document.querySelector('.breadcrumbs-customer li:nth-child(2) a'),
			document.querySelector('.breadcrumbs-customer li:last-child a')
		);
		document.querySelector('.video-section > .container').innerHTML = `
            <h2>VIDEO OF SECRET FOOD TOUR: ${city}</h2>
            <iframe width="1080" height="715" src="${linkVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
		document
			.querySelector('.header_sticky_bottom .menu ul')
			.insertAdjacentHTML(
				'beforeend',
				`<li><a href="#video" onclick="menuToElement(event)">Video</a></li>`
			);
		document
			.querySelector('.video-section iframe')
			.addEventListener('click', (e) => {
				pushDataLayer('Click on video');
			});
		let isVisibleVideo = false;
		window.addEventListener('scroll', (e) => {
			if(
				isScrolledIntoView('.video-section h2') == true &&
				isVisibleVideo == false
			) {
				isVisibleVideo = true;
				pushDataLayer('Visibility video section');
			}
		});
	}
});

let photos = setInterval(() => {
	if(
        document.querySelector('.photos-gallery') != null &&
		document.querySelectorAll('.breadcrumbs-customer li a')[2] != null &&
		(
            document.querySelector('#my-gallery') != null ||
			document.querySelector('.w3-content.w3-display-container > img') != null ||
			document.querySelector('.parallax-mirror img') != null || 
            document.querySelector('.parallax-window') != null
        )
	) {
		clearInterval(photos);
        
		let city = getCity(
			document.querySelector('.breadcrumbs-customer li:nth-child(2) a'),
			document.querySelector('.breadcrumbs-customer li:last-child a')
		);
		document.querySelector('.photos-gallery').innerHTML = `
        <h2>PHOTOS OF SECRET FOOD TOUR: <br class="d-md-block d-none">
        <span class="c-gold">${city}</span></h2>
        <div class="slider-gallery">
            <ul class="swiper-wrapper"></ul>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev" onclick="pushDataLayer('Click on navigation button in Engagement Photo','Previous slide')">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L2 7L8 13" stroke="#144732" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="swiper-button-next" onclick="pushDataLayer('Click on navigation button in Engagement Photo','Next slide')">
                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.999999 13L7 7L1 1" stroke="#144732" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>`;
		let slide = ``;
		let slideLength = 0;
		document.querySelector('.gallery').innerHTML = `
        <ul class="swiper-wrapper"></ul>
        <div class="d-flex align-items-center justify-content-between w-100 gallery-bottom">
            <button type="button" class="btn-gallery" onclick="pushDataLayer('Click on Gallery','Watch gallery button')">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 11.125H3.9375C2.70703 11.125 1.75 10.168 1.75 8.9375V3.25H1.3125C0.574219 3.25 0 3.85156 0 4.5625V11.5625C0 12.3008 0.574219 12.875 1.3125 12.875H11.8125C12.5234 12.875 13.125 12.3008 13.125 11.5625V11.125ZM15.75 8.9375V1.9375C15.75 1.22656 15.1484 0.625 14.4375 0.625H3.9375C3.19922 0.625 2.625 1.22656 2.625 1.9375V8.9375C2.625 9.67578 3.19922 10.25 3.9375 10.25H14.4375C15.1484 10.25 15.75 9.67578 15.75 8.9375ZM7 3.25C7 3.98828 6.39844 4.5625 5.6875 4.5625C4.94922 4.5625 4.375 3.98828 4.375 3.25C4.375 2.53906 4.94922 1.9375 5.6875 1.9375C6.39844 1.9375 7 2.53906 7 3.25ZM4.375 7.1875L5.87891 5.68359C6.01562 5.54688 6.20703 5.54688 6.34375 5.68359L7.4375 6.75L11.1289 3.05859C11.2656 2.92188 11.457 2.92188 11.5938 3.05859L14 5.4375V8.5H4.375V7.1875Z" fill="white"/>
                </svg>
                Watch gallery
            </button>
            <div class="d-flex align-items-center">
                <button type="button" class="btn-arrow btn-arrow-prev d-flex" onclick="pushDataLayer('Click on Gallery','Previous slide')">
                    <svg class="m-auto" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L2 7L8 13" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <p class="gallery-count">1/6</p>
                <button type="button" class="btn-arrow btn-arrow-next d-flex" onclick="pushDataLayer('Click on Gallery','Next slide')">
                    <svg class="m-auto" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999999 13L7 7L1 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>`;

		if(document.querySelector('#my-gallery') != null) {
			document.querySelectorAll('#my-gallery ul li').forEach((item) => {
                if (!item.classList.contains('swiper-slide-duplicate')) {
                    console.log(item)
                    slideLength += 1;
                    slide += `<li class="swiper-slide">${item.innerHTML}</li>`;
                }
			});
		} else if (document.querySelector('.w3-content.w3-display-container > img') != null) {
			document.querySelectorAll('.w3-content.w3-display-container > img').forEach((item) => {
                let src = item.dataset.cfsrc != null ? 'https://www.secretfoodtours.com' + item.dataset.cfsrc : item.src;
                console.log(src)
                slideLength += 1;
                slide += `<li class="swiper-slide"><img src="${src}" alt="${item.alt}"></li>`;
            });
		} else if (document.querySelector('.parallax-mirror img') != null) {
            slideLength += 1;
			slide = `<li class="swiper-slide"><img src="${document.querySelector('.parallax-mirror img').src }" alt="${document.querySelector('.parallax-mirror img').alt}"></li>`;
		} else if (document.querySelector('.parallax-window') != null) {
            slideLength += 1;
			slide = `<li class="swiper-slide"><img src="https://www.secretfoodtours.com/${document.querySelector('.parallax-window').getAttribute('data-image-src') }" alt="image"></li>`;
        }
		if(
			document.querySelector('#my-gallery') != null ||
			document.querySelector('.w3-content.w3-display-container') != null
		) {
			document.querySelector('.photos-gallery').style = '';
			let isVisiblePhotos = false;
			let isVisibleDataLayer = () => {
				if(
					isScrolledIntoView('.photos-gallery h2') == true &&
					isVisiblePhotos == false
				) {
					isVisiblePhotos = true;
					pushDataLayer('Visibility photo section');
				}
			};
			isVisibleDataLayer();
			window.addEventListener('scroll', () => isVisibleDataLayer());
		} else {
			document.querySelector('.photos-gallery').style.display = 'none';
		}
		document.querySelector('.slider-gallery ul').insertAdjacentHTML('beforeend', slide);
		document.querySelector('.gallery ul.swiper-wrapper').insertAdjacentHTML('beforeend', slide);
		document.querySelector('.popup_gallery ul.swiper-wrapper').insertAdjacentHTML('beforeend', slide);

		document.querySelector('.btn-gallery').addEventListener('click', () => {
			document.querySelector('.popup_gallery').classList.add('active');
            if (document.querySelector(".gallery .swiper-slide-video iframe") != null) {
                document.querySelector(".gallery .swiper-slide-video iframe").src = document.querySelector(".gallery .swiper-slide-video iframe").src
            }
        });
		document
			.querySelector('.popup_gallery_close')
			.addEventListener('click', () => {
				document.querySelector('.popup_gallery').classList.remove('active');
                if ( document.querySelector(".popup_gallery .swiper-slide-video iframe") != null) {
                    document.querySelector(".popup_gallery .swiper-slide-video iframe").src = document.querySelector(".popup_gallery .swiper-slide-video iframe").src
                }
			});

        let isLoop = slideLength > 2 ? true : false;

		const waitSwiper = setInterval(() => {
			if(typeof Swiper == 'function') {
				clearInterval(waitSwiper);
				var swiperPopup = new Swiper('.popup_gallery', {
					loop: true,
					slidesPerView: 1,
					spaceBetween: 0,
					pagination: {
						el: '.popup_gallery_count',
						type: 'fraction',
					},
					navigation: {
						nextEl: '.popup_gallery .swiper-button-next',
						prevEl: '.popup_gallery .swiper-button-prev',
					},
				});
				var swiper = new Swiper('.gallery', {
					slidesPerView: 1,
					loop: true,
					spaceBetween: 0,
					pagination: {
						el: '.gallery .gallery-count',
						type: 'fraction',
					},
					navigation: {
						nextEl: '.gallery .btn-arrow-next',
						prevEl: '.gallery .btn-arrow-prev ',
					},
				});
				swiperPopup.controller.control = swiper;
				swiper.controller.control = swiperPopup;
				if(window.innerWidth < 768) {
					new Swiper('.slider-gallery', {
						slidesPerView: 1.1,
						spaceBetween: 16,
						loop: isLoop,
						navigation: {
							nextEl: '.slider-gallery .swiper-button-next',
							prevEl: '.slider-gallery .swiper-button-prev',
						},
						pagination: {
							el: '.slider-gallery .swiper-pagination',
							type: 'bullets',
						},
					});
				} else {
					new Swiper('.slider-gallery', {
						slidesPerView: 2.5,
						spaceBetween: 20,
						loop: isLoop,
						navigation: {
							nextEl: '.slider-gallery .swiper-button-next',
							prevEl: '.slider-gallery .swiper-button-prev',
						},
						pagination: {
							el: '.slider-gallery .swiper-pagination',
							type: 'fraction',
						},
					});
				}

                //add video in gallery
                let addVideo = setInterval(() => {
                    if (document.querySelector('.video_wr iframe') != null) {
                        clearInterval(addVideo)

                        document.querySelector('.gallery-bottom').classList.add('center')
                        function addActiveGallery() {
                            setTimeout(() => {
                                if (document.querySelector('.gallery-bottom .swiper-pagination-current').innerHTML == '1' || document.querySelector('.swiper-slide-video').classList.contains('swiper-slide-active')) {
                                    document.querySelector('.gallery-bottom').classList.add('center')
                                } else {
                                    document.querySelector('.gallery-bottom').classList.remove('center')
                                }      
                                document.querySelector(".gallery .swiper-slide-video iframe").src = document.querySelector(".gallery .swiper-slide-video iframe").src
                                
                            }, 300)
                        }
                        document.querySelectorAll('.popup_gallery .popup_gallery_button').forEach(item => {
                            item.addEventListener('click', (e) => addActiveGallery())
                        })
                        
                        document.querySelectorAll('.gallery-bottom .btn-arrow').forEach(item => {
                            item.addEventListener('click', (e) => addActiveGallery())
                        })
                        
                        swiperPopup.prependSlide(`<li class="swiper-slide swiper-slide-video">${document.querySelector('.video_wr iframe').parentElement.innerHTML}</li>`);
                        swiper.prependSlide(`<li class="swiper-slide swiper-slide-video">${document.querySelector('.video_wr iframe').parentElement.innerHTML}</li>`);
                        
                        setTimeout(function () {
                            swiper.update();
                            swiper.slideTo(1, 1);
                        }, 200);
                    }
                })
			}
		}, 200);
		document
			.querySelectorAll('.slider-gallery .swiper-slide')
			.forEach((item) => {
				item.addEventListener('click', () => {
					if(item.querySelector('a') != null) {
						pushDataLayer(
							'Click on Engagement Photo',
							item.querySelector('a').href
						);
					} else {
						pushDataLayer(
							'Click on Engagement Photo',
							item.querySelector('img').src
						);
					}
				});
			});
	}
});
let whyTour = setInterval(() => {
	if(
		document.querySelector('.why-tour') != null &&
		document.querySelector('.about-tour .left_info .title') != null
	) {
		clearInterval(whyTour);
		document.querySelector('.why-tour').innerHTML = `
        <div class="left">
            <div class="title d-flex align-items-center">
                <img src="${dir}logo_line.svg" alt="icon">
                <h2>${
                  document.querySelector('.about-tour .left_info .title')
                    .innerHTML
                }</h2>  
            </div>
            <p class="text">${
              document.querySelector('.about-tour .left_info .text p').innerHTML
            }</p>
            <div class="d-md-flex justify-content-md-between btns">
                <a href="#plugin" class="btn-customer lav-book-mob" onclick="pushDataLayer('Click on button on Why section','Book tour')">Book tour</a>
                <a href="/buy-gift/" class="btn-customer gold d-flex align-items-center justify-content-center" onclick="pushDataLayer('Click on button on Why section',' Buy this tour as a gift')">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.375 11.1429C1.375 11.625 1.75781 12 2.25 12H6.625V7.71429H1.375V11.1429ZM8.375 12H12.75C13.2148 12 13.625 11.625 13.625 11.1429V7.71429H8.375V12ZM13.625 3.42857H12.4492C12.6406 3.10714 12.75 2.75893 12.75 2.35714C12.75 1.07143 11.6562 0 10.3438 0C9.19531 0 8.45703 0.589286 7.52734 1.84821C6.57031 0.589286 5.83203 0 4.71094 0C3.37109 0 2.30469 1.07143 2.30469 2.35714C2.30469 2.75893 2.38672 3.10714 2.57812 3.42857H1.375C0.882812 3.42857 0.5 3.83036 0.5 4.28571V6.42857C0.5 6.66964 0.691406 6.85714 0.9375 6.85714H14.0625C14.2812 6.85714 14.5 6.66964 14.5 6.42857V4.28571C14.5 3.83036 14.0898 3.42857 13.625 3.42857ZM4.68359 3.42857C4.08203 3.42857 3.58984 2.97321 3.58984 2.35714C3.58984 1.76786 4.08203 1.28571 4.68359 1.28571C5.23047 1.28571 5.64062 1.39286 7.0625 3.42857H4.68359ZM10.3438 3.42857H7.96484C9.38672 1.39286 9.76953 1.28571 10.3438 1.28571C10.9453 1.28571 11.4375 1.76786 11.4375 2.35714C11.4375 2.97321 10.9453 3.42857 10.3438 3.42857Z" fill="#C39958"/>
                    </svg>
                    Buy this tour as a gift
                </a>
            </div>
        </div>
        <div class="right">
            <img src="${
              document.querySelector('.about-tour .left_info .text img').dataset
                .cfsrc ||
              document.querySelector('.about-tour .left_info .text img').src
            }" alt="image tour">
        </div>`;
		if(innerWidth < 768) {
			if(document.querySelector('.tour_fixed_btn')) {
				document.querySelector('.lav-book-mob').href =
					document.querySelector('.tour_fixed_btn').href;
			} else {
				setTimeout(() => {
					document.querySelector('.lav-book-mob').href =
						document.querySelector('.tour_fixed_btn').href;
				}, 1200);
			}
		}
		//set height bg gray
		setTimeout(() => {
			document.querySelector('.why-tour').style = `--height:${
        document.querySelector('.why-tour > .left .title').offsetHeight +
        document.querySelector('.why-tour > .left .text').offsetHeight
      }px`;
		}, 150);
		if(window.matchMedia('(max-width: 767px)').matches) {
			document
				.querySelector('.why-tour .right')
				.after(document.querySelector('.why-tour .btns'));
		}
	}
});
let otherTours = setInterval(() => {
	if(
		document.querySelector('.other-tours') != null &&
		(document.querySelector('.country_tours .container .row .row') != null ||
			(document.querySelector('.similar_tours') != null &&
				document.querySelectorAll('.breadcrumbs-customer li a')[1] != null))
	) {
		clearInterval(otherTours);
		let tours =
			document.querySelector('.country_tours') != null ?
			'.country_tours' :
			'.similar_tours';
		let capital = document.querySelectorAll('.breadcrumbs-customer li a')[1]
			.innerText;
		document.querySelector('.other-tours').innerHTML = `
         <h2>See our other secret tours <span class="c-gold">in ${capital}</span></h2>
         ${document.querySelector(`${tours} .container`).innerHTML}
        `;
		document
			.querySelectorAll('.other-tours .cardx-container-details')
			.forEach((item) => {
				if(
					item.querySelector('.cardx-price') != null &&
					item.querySelector('.cardx-price').innerHTML != ''
				) {
					let price = item
						.querySelector('.cardx-price')
						.innerText.replace(/[^\d\.]*/g, '');
					let currency = item
						.querySelector('.cardx-price')
						.innerText.replace(price, '');
					item.querySelector('.cardx-price').innerHTML = `
                    <svg width="78" height="40" viewBox="0 0 78 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5452 0C16.8361 0 15.2081 0.72886 14.0698 2.00368L1.56852 16.0037C-0.464246 18.2801 -0.464248 21.7199 1.56852 23.9963L14.0698 37.9963C15.2081 39.2711 16.8361 40 18.5452 40H72C75.3137 40 78 37.3137 78 34V6C78 2.68629 75.3137 0 72 0H18.5452Z" fill="#E9EBED"/></svg>
                    <span>${currency}</span> ${price}`;
				}
				if(item.querySelector('.rate-tours') != null) {
					let rate = item
						.querySelector('.rate-tours')
						.innerHTML.replace(/[^\d\.]*/g, '');
					let ratehalf = rate.split('.')[1];
					item.querySelector('.rate-tours').innerHTML = rate;
					for(let i = 0; i < Math.floor(rate); i++) {
						item
							.querySelector('.star-ratings .rate-tours')
							.insertAdjacentHTML('beforebegin', isStar);
					}
					if(ratehalf > 0) {
						item
							.querySelector('.star-ratings .rate-tours')
							.insertAdjacentHTML('beforebegin', isStarHalf);
					}
				}
				item.querySelectorAll('.card-buttons > a').forEach((button) => {
					if(button.innerText.toLowerCase().includes('our cultural tours')) {
						button.classList.add('cultural-tours');
					}
				});
			});
		document
			.querySelectorAll('.other-tours .cardx-tags > span > img')
			.forEach((item) => {
				if(item.src.includes('/img/icons/clock.svg')) {
					item.src = dir + 'clock_ic.svg';
				} else if(item.src.includes('/img/icons/location-maincolor.svg')) {
					item.src = dir + 'library_ic.svg';
				} else if(item.src.includes('/img/icons/cutlery.svg')) {
					item.src = dir + 'restaurant.svg';
					item.parentElement.style = 'order: 1';
				} else if(item.src.includes('/img/icons/group.svg')) {
					item.src = dir + 'group_ic.svg';
				}
			});
		document
			.querySelector('.header_sticky_bottom .menu ul')
			.insertAdjacentHTML(
				'beforeend',
				`<li><a href="#other-tours" onclick="menuToElement(event)">Other ${capital} tours</a></li>`
			);
		let isVisibleOtherTours = false;
		let isVisibleDataLayer = () => {
			if(
				isScrolledIntoView('.other-tours h2') == true &&
				isVisibleOtherTours == false
			) {
				isVisibleOtherTours = true;
				pushDataLayer('Visibility Other tour section');
			}
		};
		isVisibleDataLayer();
		window.addEventListener('scroll', () => isVisibleDataLayer());
	}
});
let faq = setInterval(() => {
	if(
		document.querySelector('.help_center .container .block_wr') != null &&
		window.matchMedia('(max-width: 767px)').matches
	) {
		clearInterval(faq);
		let faqItems = document.querySelectorAll(
			'.help_center .container .block_wr'
		);
		if(faqItems.length > 7) {
			document.querySelector('.help_center').insertAdjacentHTML(
				'beforeend',
				`<button type="button" class="btn-customer d-flex align-items-center justify-content-center">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.25 12V9.90001C0.25 9.47501 0.3595 9.08426 0.578499 8.72776C0.797499 8.37126 1.088 8.09951 1.45 7.91251C2.225 7.52501 3.0125 7.23426 3.81249 7.04026C4.61249 6.84626 5.42499 6.74951 6.24999 6.75001C7.07499 6.75001 7.88749 6.84701 8.68749 7.04101C9.48749 7.23501 10.275 7.52551 11.05 7.91251C11.4125 8.10001 11.7032 8.37201 11.9222 8.72851C12.1412 9.085 12.2505 9.47551 12.25 9.90001V12H0.25ZM13.75 12V9.75C13.75 9.20001 13.5967 8.67176 13.2902 8.16526C12.9837 7.65876 12.5495 7.22451 11.9875 6.86251C12.625 6.93751 13.225 7.06576 13.7875 7.24726C14.35 7.42876 14.875 7.65051 15.3625 7.91251C15.8125 8.16251 16.1562 8.44051 16.3937 8.74651C16.6312 9.05251 16.75 9.387 16.75 9.75V12H13.75ZM6.24999 6.00001C5.42499 6.00001 4.71874 5.70626 4.13124 5.11876C3.54375 4.53126 3.25 3.82501 3.25 3.00001C3.25 2.17502 3.54375 1.46877 4.13124 0.881268C4.71874 0.293769 5.42499 1.92305e-05 6.24999 1.92305e-05C7.07499 1.92305e-05 7.78124 0.293769 8.36874 0.881268C8.95624 1.46877 9.24999 2.17502 9.24999 3.00001C9.24999 3.82501 8.95624 4.53126 8.36874 5.11876C7.78124 5.70626 7.07499 6.00001 6.24999 6.00001ZM13.75 3.00001C13.75 3.82501 13.4562 4.53126 12.8687 5.11876C12.2812 5.70626 11.575 6.00001 10.75 6.00001C10.6125 6.00001 10.4375 5.98426 10.225 5.95276C10.0125 5.92126 9.83749 5.88701 9.69999 5.85001C10.0375 5.45001 10.297 5.00626 10.4785 4.51876C10.66 4.03126 10.7505 3.52501 10.75 3.00001C10.75 2.47502 10.6595 1.96877 10.4785 1.48127C10.2975 0.993768 10.038 0.550018 9.69999 0.150019C9.87499 0.087519 10.05 0.0467693 10.225 0.0277693C10.4 0.00876935 10.575 -0.000480769 10.75 1.92305e-05C11.575 1.92305e-05 12.2812 0.293769 12.8687 0.881268C13.4562 1.46877 13.75 2.17502 13.75 3.00001Z" fill="#144732"/>
                </svg>
                <span>Load more</span>
            </button>`
			);
		}
		document
			.querySelectorAll('.help_center .container .block_wr')
			.forEach((item, index) => {
				if(index > 7) {
					item.style.display = 'none';
				}
			});
		document
			.querySelector('.help_center .btn-customer')
			.addEventListener('click', (e) => {
				e.currentTarget.style = 'display: none!important;';
				document
					.querySelectorAll('.help_center .container .block_wr')
					.forEach((item, index) => {
						if(index > 7) {
							item.style = '';
						}
					});
			});
	}
}, 100);
state.then((state) => {
	let menuMobile = setInterval(() => {
		if(document.querySelector('header .menu_btn') != null) {
			clearInterval(menuMobile);
			document.body.insertAdjacentHTML(
				'afterbegin',
				`
            <style>
            .is_menu {
                width: 100%;
                position: fixed;
                top: calc(51.87px + 60px);
                left: 0;
                z-index: 9999;
                background-color: #fff;
                height: calc(100% - 51.87px - 60px);
                overflow-y: auto;
                display: none;
            }
            .is_menu_continent {
                background: #EBEBE7;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                text-transform: uppercase;
                color: #333333;
            }
            .is_menu_tours li p {
                padding: 16px 20px;
                font-family: 'Josefin Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                text-transform: uppercase;
                color: #333333;
            }
            .is_menu_tours li {
                position: relative;
            }
            .is_menu_tours li:not(.is_menu_popular)::after {
                content: '';
                position: absolute;
                left: 20px;
                bottom: 0;
                width: calc(100% - 40px);
                background: #fff;
                height: 1px;
            }
            .is_menu_tours li p .plus {
                position: relative;
                width: 12px;
                height: 12px;
                margin-left: auto
            }
            .is_menu_tours li p .plus:before, .is_menu li p .plus:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #144732;
            }
            .is_menu_tours li p .plus:before {
                width: 12px;
                height: 2px;
            }
            .is_menu_tours li p .plus:after {
                height: 12px;
                width: 2px;
            }
            .is_menu_tours li ul {
                display: none;
            }
            .is_menu_tours > li > ul > li:not(.is_menu_popular) > p {
                background: #F3F3F3;
            }
            .is_menu_tours li.active > ul {
                display: block;
            }
            .is_menu_tours li[data-continent].active > p {
                background: #144732;
                color: #fff;
            }
            .is_menu_tours li.active > p .plus:after {
                transform: translate(-50%, -50%) rotate(90deg);
            }
            .is_menu_tours li[data-continent].active > p .plus:after {
                background: #fff;
            }
            .is_menu_tours li[data-continent].active > p .plus:before {
                background: #fff;
            }
            .is_menu_items {
                padding-top: 12px;
            }
            .is_menu_items a {
                font-weight: 700;
                font-size: 16px;
                line-height: 16px;
                padding: 12px 20px;
                color: #333333;
                display: block;
           }
           .is_menu .btn-customer {
                display: block;
                padding: 12px 24px 10px;
                width: fit-content;
                margin-top: 16px;
                margin-left: 20px;
           }
           .is_menu_social {
                margin-top: 31px;
                background: #EBEBE7
           }
           .is_menu_social a {
                padding: 18px 21px;
           }
           .is_menu_tours li.is_menu_popular > p {
                background: #C39958;
                color: #fff;
                text-transform: none;
           }
           .is_menu_tours li.is_menu_popular > p svg,  .is_menu_tours i {
                margin-right: 8px;
           }
           .is_menu_tours li.is_menu_popular > p > span > span {
                text-transform: capitalize;
           }
           .is_menu_tours li.is_menu_popular.active > p {
                background: #fff;
                color: #C39958;
            }
            .is_menu_tours li.is_menu_popular.active > p .plus:after, .is_menu_tours li.is_menu_popular.active > p .plus:before {
                background: #333333;
            }
            .is_menu_tours > li > ul > li > ul > li a.fs16 {
                display: block;
                font-family: 'Josefin Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 18px!important;
                line-height: 19px;
                color: #5B5B5B;
                padding: 16px 20px 16px 52px;
            }
            .is_menu_tours > li > ul > li > ul > li a.new {
                display: flex;
            }
            .is_menu_tours > li > ul > li > ul > li a.new:after {
                position: relative;
                right: 0;
                transform: none;
                margin-left: 8px;
                margin-top: -2px;
            }
            .is_menu_tours > li > ul > li > ul > li a:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 40px;
                transform: translateY(-50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #C39958;
            }
            .is_menu_tours > li > ul > li > ul > liafter {
                background: #EBEBE7;
            }
            .is_menu_tours .popular_tours_row {
                padding: 0 20px;
            }
            .is_menu_tours .popular_tours_row > div {
                width: 100%;
                padding: 10px 0;
                border-bottom: 1px solid #EBEBE7;
            }
            .menu_btn {
                display: none!important;
            }
            .menu_burger {
                display: none;
                cursor: pointer;
                width: 25px;
                border: none;
                height: 14px;
                background: url(https://www.secretfoodtours.com/img/icons/menu.svg) no-repeat;
            }
            @media(max-width: 767px) {
                .menu_burger.active {
                    height: 25px;
                    padding: 0;
                }
            }
            .menu_burger svg {
                display: none;
            }
            .menu_burger.active {
                background-image: none;
            }
            .menu_burger.active svg {
                display: block;
            }
            @media screen and (max-width: 991px) {
                .menu_burger {
                    display: block;
                }
            }
            </style>
            <div class="is_menu flex-column justify-content-between">
                <div>
                    <ul class="is_menu_tours"></ul>
                    <ul class="is_menu_items">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/read-about-us">About Us</a></li>
                        <li><a href="/covid">Health & Safety</a></li>
                        <li><a href="https://www.secrettours.com/">Historical Tours</a></li>
                    </ul>
                    <a href="/private-bookings" class="btn-customer" onclick="pushDataLayer('Click on Book a Private Tour in header')"> 
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 12V9.90001C0.75 9.47501 0.8595 9.08426 1.0785 8.72776C1.2975 8.37126 1.588 8.09951 1.95 7.91251C2.725 7.52501 3.5125 7.23426 4.31249 7.04026C5.11249 6.84626 5.92499 6.74951 6.74999 6.75001C7.57499 6.75001 8.38749 6.84701 9.18749 7.04101C9.98749 7.23501 10.775 7.52551 11.55 7.91251C11.9125 8.10001 12.2032 8.37201 12.4222 8.72851C12.6412 9.085 12.7505 9.47551 12.75 9.90001V12H0.75ZM14.25 12V9.75C14.25 9.20001 14.0967 8.67176 13.7902 8.16526C13.4837 7.65876 13.0495 7.22451 12.4875 6.86251C13.125 6.93751 13.725 7.06576 14.2875 7.24726C14.85 7.42876 15.375 7.65051 15.8625 7.91251C16.3125 8.16251 16.6562 8.44051 16.8937 8.74651C17.1312 9.05251 17.25 9.387 17.25 9.75V12H14.25ZM6.74999 6.00001C5.92499 6.00001 5.21874 5.70626 4.63124 5.11876C4.04375 4.53126 3.75 3.82501 3.75 3.00001C3.75 2.17502 4.04375 1.46877 4.63124 0.881268C5.21874 0.293769 5.92499 1.92305e-05 6.74999 1.92305e-05C7.57499 1.92305e-05 8.28124 0.293769 8.86874 0.881268C9.45624 1.46877 9.74999 2.17502 9.74999 3.00001C9.74999 3.82501 9.45624 4.53126 8.86874 5.11876C8.28124 5.70626 7.57499 6.00001 6.74999 6.00001ZM14.25 3.00001C14.25 3.82501 13.9562 4.53126 13.3687 5.11876C12.7812 5.70626 12.075 6.00001 11.25 6.00001C11.1125 6.00001 10.9375 5.98426 10.725 5.95276C10.5125 5.92126 10.3375 5.88701 10.2 5.85001C10.5375 5.45001 10.797 5.00626 10.9785 4.51876C11.16 4.03126 11.2505 3.52501 11.25 3.00001C11.25 2.47502 11.1595 1.96877 10.9785 1.48127C10.7975 0.993768 10.538 0.550018 10.2 0.150019C10.375 0.087519 10.55 0.0467693 10.725 0.0277693C10.9 0.00876935 11.075 -0.000480769 11.25 1.92305e-05C12.075 1.92305e-05 12.7812 0.293769 13.3687 0.881268C13.9562 1.46877 14.25 2.17502 14.25 3.00001Z" fill="#144732"/>
                        </svg>
                        <span>Book a private tour</span>
                    </a>
                    <a href="/buy-gift/" class="btn-customer gold" onclick="pushDataLayer('Click on Buy as a gift in header')">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.875 11.1429C0.875 11.625 1.25781 12 1.75 12H6.125V7.71429H0.875V11.1429ZM7.875 12H12.25C12.7148 12 13.125 11.625 13.125 11.1429V7.71429H7.875V12ZM13.125 3.42857H11.9492C12.1406 3.10714 12.25 2.75893 12.25 2.35714C12.25 1.07143 11.1562 0 9.84375 0C8.69531 0 7.95703 0.589286 7.02734 1.84821C6.07031 0.589286 5.33203 0 4.21094 0C2.87109 0 1.80469 1.07143 1.80469 2.35714C1.80469 2.75893 1.88672 3.10714 2.07812 3.42857H0.875C0.382812 3.42857 0 3.83036 0 4.28571V6.42857C0 6.66964 0.191406 6.85714 0.4375 6.85714H13.5625C13.7812 6.85714 14 6.66964 14 6.42857V4.28571C14 3.83036 13.5898 3.42857 13.125 3.42857ZM4.18359 3.42857C3.58203 3.42857 3.08984 2.97321 3.08984 2.35714C3.08984 1.76786 3.58203 1.28571 4.18359 1.28571C4.73047 1.28571 5.14062 1.39286 6.5625 3.42857H4.18359ZM9.84375 3.42857H7.46484C8.88672 1.39286 9.26953 1.28571 9.84375 1.28571C10.4453 1.28571 10.9375 1.76786 10.9375 2.35714C10.9375 2.97321 10.4453 3.42857 9.84375 3.42857Z" fill="#C39958"/>
                        </svg>
                        <span>Buy as a gift</span>
                    </a>
                </div>
                <div class="is_menu_social d-flex align-items-center justify-content-center">
                    <a href="https://www.facebook.com/secretfoodtours" class="">  
                        <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.80859 10.375L10.3008 7.14062H7.17188V5.03125C7.17188 4.11719 7.59375 3.27344 9 3.27344H10.4414V0.496094C10.4414 0.496094 9.14062 0.25 7.91016 0.25C5.34375 0.25 3.65625 1.83203 3.65625 4.64453V7.14062H0.773438V10.375H3.65625V18.25H7.17188V10.375H9.80859Z" fill="#C39958"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/secretfoodtours" class="">
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1367 4.59375C16.8398 4.06641 17.4727 3.43359 17.9648 2.69531C17.332 2.97656 16.5938 3.1875 15.8555 3.25781C16.6289 2.80078 17.1914 2.09766 17.4727 1.21875C16.7695 1.64062 15.9609 1.95703 15.1523 2.13281C14.4492 1.39453 13.5 0.972656 12.4453 0.972656C10.4062 0.972656 8.75391 2.625 8.75391 4.66406C8.75391 4.94531 8.78906 5.22656 8.85938 5.50781C5.80078 5.33203 3.05859 3.85547 1.23047 1.64062C0.914062 2.16797 0.738281 2.80078 0.738281 3.50391C0.738281 4.76953 1.37109 5.89453 2.39062 6.5625C1.79297 6.52734 1.19531 6.38672 0.703125 6.10547V6.14062C0.703125 7.93359 1.96875 9.41016 3.65625 9.76172C3.375 9.83203 3.02344 9.90234 2.70703 9.90234C2.46094 9.90234 2.25 9.86719 2.00391 9.83203C2.46094 11.3086 3.83203 12.3633 5.44922 12.3984C4.18359 13.3828 2.60156 13.9805 0.878906 13.9805C0.5625 13.9805 0.28125 13.9453 0 13.9102C1.61719 14.9648 3.55078 15.5625 5.66016 15.5625C12.4453 15.5625 16.1367 9.97266 16.1367 5.08594C16.1367 4.91016 16.1367 4.76953 16.1367 4.59375Z" fill="#C39958"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/secretfoodtours/" class="">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.875 4.20703C6.625 4.20703 4.83203 6.03516 4.83203 8.25C4.83203 10.5 6.625 12.293 8.875 12.293C11.0898 12.293 12.918 10.5 12.918 8.25C12.918 6.03516 11.0898 4.20703 8.875 4.20703ZM8.875 10.8867C7.43359 10.8867 6.23828 9.72656 6.23828 8.25C6.23828 6.80859 7.39844 5.64844 8.875 5.64844C10.3164 5.64844 11.4766 6.80859 11.4766 8.25C11.4766 9.72656 10.3164 10.8867 8.875 10.8867ZM14.0078 4.06641C14.0078 3.53906 13.5859 3.11719 13.0586 3.11719C12.5312 3.11719 12.1094 3.53906 12.1094 4.06641C12.1094 4.59375 12.5312 5.01562 13.0586 5.01562C13.5859 5.01562 14.0078 4.59375 14.0078 4.06641ZM16.6797 5.01562C16.6094 3.75 16.3281 2.625 15.4141 1.71094C14.5 0.796875 13.375 0.515625 12.1094 0.445312C10.8086 0.375 6.90625 0.375 5.60547 0.445312C4.33984 0.515625 3.25 0.796875 2.30078 1.71094C1.38672 2.625 1.10547 3.75 1.03516 5.01562C0.964844 6.31641 0.964844 10.2188 1.03516 11.5195C1.10547 12.7852 1.38672 13.875 2.30078 14.8242C3.25 15.7383 4.33984 16.0195 5.60547 16.0898C6.90625 16.1602 10.8086 16.1602 12.1094 16.0898C13.375 16.0195 14.5 15.7383 15.4141 14.8242C16.3281 13.875 16.6094 12.7852 16.6797 11.5195C16.75 10.2188 16.75 6.31641 16.6797 5.01562ZM14.9922 12.8906C14.7461 13.5938 14.1836 14.1211 13.5156 14.4023C12.4609 14.8242 10 14.7188 8.875 14.7188C7.71484 14.7188 5.25391 14.8242 4.23438 14.4023C3.53125 14.1211 3.00391 13.5938 2.72266 12.8906C2.30078 11.8711 2.40625 9.41016 2.40625 8.25C2.40625 7.125 2.30078 4.66406 2.72266 3.60938C3.00391 2.94141 3.53125 2.41406 4.23438 2.13281C5.25391 1.71094 7.71484 1.81641 8.875 1.81641C10 1.81641 12.4609 1.71094 13.5156 2.13281C14.1836 2.37891 14.7109 2.94141 14.9922 3.60938C15.4141 4.66406 15.3086 7.125 15.3086 8.25C15.3086 9.41016 15.4141 11.8711 14.9922 12.8906Z" fill="#C39958"/>
                        </svg>
                    </a>
                </div>
            </div> `
			);

            document.querySelectorAll('.is_menu_social a').forEach(item => {
                item.addEventListener('click', (e) => {
                    pushDataLayer('Click on menu button', item.href)
                })
            })
            document.querySelectorAll('.is_menu_items a').forEach(item => {
                item.addEventListener('click', (e) => {
                    pushDataLayer('Click on menu button', item.href)
                })
            })
			for(const key in objPopularTours) {
				document.querySelector('.is_menu_tours').insertAdjacentHTML(
					'beforeend',
					`
                <li data-continent="${key}">
                    <p class="is_menu_continent d-flex align-items-center justify-content-between">${key
                      .split('-')
                      .join(' ')}<span class="plus"></span></p>
                    <ul>
                        <li class="is_menu_popular">
                            <p class="d-flex align-items-center"></p>
                            <ul></ul>
                        </li>
                    </ul>
                </li>`
				);
				for(let i = 0; i < objPopularTours[key].length; i++) {
					if(i < 4) {
						let tour = objPopularTours[key][i];
						document.querySelector(
							`.is_menu_tours [data-continent="${key}"] .is_menu_popular > p`
						).innerHTML = ` 
                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.875 0.865861C7.875 0.0111783 6.74479 -0.323263 6.23438 0.382779C1.75 7.10876 8.16667 7.40604 8.16667 10.6761C8.16667 12.0139 7.07292 13.0915 5.79688 13.0544C4.48438 13.0544 3.5 11.9767 3.5 10.6761V7.48036C3.5 6.66284 2.51562 6.29124 1.96875 6.8858C0.984375 7.92628 0 9.70997 0 11.8653C0 15.8042 3.13542 19 7 19C10.8281 19 14 15.8042 14 11.8653C14 5.54804 7.875 4.69335 7.875 0.865861Z" fill="#DB4446"/>
                            </svg>
                            <span>Popular tours in <span>${key
                              .split('-')
                              .join(
                                ' '
                              )}</span></span><span class="plus"></span>`;
						document
							.querySelector(
								`.is_menu_tours [data-continent="${key}"] .is_menu_popular > ul`
							)
							.insertAdjacentHTML(
								'beforeend',
								`<li class="popular_tours_row ">${popularTout(
                                tour.image,
                                tour.rate,
                                tour.name,
                                tour.link
                                )}</li>`
							);
					}
				}
				let citys = document.querySelectorAll(
					`.city_wr [data-name="${key}"] .block li`
				);
				let listCountry = '';
				for(let i = 0; i < citys.length; i++) {
					if(
						citys[i].classList.contains('country-16-title') ||
						citys[i].classList.contains('country-16-title-nmt')
					) {
						let title = citys[i].querySelector('a').innerHTML;
						console.log('title', title);
						if(i == citys.length - 1) {
							listCountry += `</ul></li>`;
						} else {
							if(i != 0) {
								listCountry += `</ul><li><p class="d-flex align-items-center">${title} <span class="plus"></span></p><ul>`;
							} else {
								listCountry += `<li><p class="d-flex align-items-center">${title}<span class="plus"></span></p><ul>`;
							}
						}
					} else {
						listCountry += `<li>${citys[i].innerHTML}</li>`;
					}
				}
				document
					.querySelector(`.is_menu_tours [data-continent="${key}"] > ul`)
					.insertAdjacentHTML('beforeend', listCountry);

			}
			let isUSA = false;
			for(let el of document.querySelectorAll(
					'.is_menu_tours [data-continent="north-america"] > ul > li'
				)) {
				if(
					!isUSA &&
					el.querySelector('p').innerText.includes('United States of America')
				) {
					isUSA = true;
					el.classList.add('lav-usa-unity');
				} else if(
					isUSA &&
					el.querySelector('p').innerText.includes('United States of America')
				) {
					document
						.querySelector('.lav-usa-unity ul')
						.insertAdjacentHTML('beforeend', el.querySelector('ul').innerHTML);
					el.remove();
				}
			}
			document.querySelectorAll('.is_menu_tours li p').forEach((item) => {
				item.addEventListener('click', (e) => {
					e.currentTarget.parentElement.classList.toggle('active');
                    if (e.currentTarget.parentElement.classList.contains('is_menu_popular')) {
                        pushDataLayer( 'Click on Popular Tours in menu', e.currentTarget.innerText)
                    } else {
                        pushDataLayer('Click on menu button', e.currentTarget.innerText)
                    }
				});
			});
			document.querySelectorAll('.is_menu_tours li a').forEach((item) => {
                item.addEventListener('click', (e) => {
                    if (!e.currentTarget.closest('is_menu_popular')) {
                        pushDataLayer('Click on menu button', e.currentTarget.href)
                    }
                });
            })
			document.querySelector('.menu_btn').insertAdjacentHTML(
				'afterend',
				`
            <button type="button" class="menu_burger">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="25.9735" height="2.16446" transform="matrix(0.703417 0.710777 -0.703417 0.710777 1.52246 0)" fill="#144732"/>
                    <rect width="25.9735" height="2.16446" transform="matrix(-0.703417 0.710777 -0.703417 -0.710777 20 1.53857)" fill="#144732"/>
                </svg>
            </button>`
			);
			document
				.querySelector('header .menu_burger')
				.addEventListener('click', (e) => {
					//   document.querySelector('header .search_btn').click();
					e.currentTarget.classList.toggle('active');
					if(e.currentTarget.classList.contains('active')) {
						document.body.classList.add('lav-menu_open');
						document.querySelector('html').classList.add('lav-menu_open');
						document.querySelector('.is_menu').style.display = 'flex';
						document
							.querySelector('.search_header')
							.classList.add('visible_search');
						document
							.querySelector('#close_ic_desktop')
							.setAttribute('style', 'display:none !important');

                        pushDataLayer('Open hamburger menu', 'Header')
					} else {
						document.body.classList.remove('lav-menu_open');
						document.querySelector('html').classList.remove('lav-menu_open');
						document.querySelector('.is_menu').style = '';
						document
							.querySelector('.search_header')
							.classList.remove('visible_search');
						document
							.querySelector('#close_ic_desktop')
							.removeAttribute('style');

                        pushDataLayer('Click the cross button', 'Header')
					}
				});
			if(
				!document.querySelector('#plugin iframe') &&
				!document.querySelector('.destination_descr') &&
				window.innerWidth < 768
			) {
				for(let btn of document.querySelectorAll('.is_menu .btn-customer')) {
					btn.classList.add('lav-hide');
				}
			}
		}
	});
});
pushDataLayer('loaded');