const dir = "https://conversionratestore.github.io/projects/doyogawithme/img/";

const style = `
<style>
.o-page__main {
    z-index: 9;
}
.swiper-pagination-bullet{
    width: 10px!important;
    height: 10px!important;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next,
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    transform: scale(0.8)!important;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next,
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    transform: scale(.6)!important;
}
.swiper-pagination-bullet-active {
    background-color: #017922!important;
}
.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 2px!important;
    outline: none;
}
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 0px!important;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.o-region--content,
.o-page__header {
    display: none;
}
.o-page__mainContent {
    max-width: 100%!important;
    padding: 0!important;
    margin: 0;
}
.crs_header {
    background: #fff;
    padding: 8px 0 9px;
}
.crs_offer {
    min-height: 100vh;
    position: relative;
    background: linear-gradient(90deg, #272727 0%, rgba(39, 39, 39, 0.00) 100.59%), url('${dir}image-7.png') no-repeat center / cover;
}
.container {
    max-width: 1264px;
    padding: 0 20px;
    margin: 0 auto;
    width: 100%;
}
h1 {
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    font-family: Manrope;
}
h2 {
    color: var(--H1-Black, #272727);
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    font-family: Manrope;
    margin: 0;
}
h4 {
    color: var(--Blue-Main, #027DB8);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    font-family: Manrope;
}
b {
    font-weight: 700;
}
p {
    color: var(--Body-color, #555);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    font-family: Manrope;
}
.crs_offer p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
}
.crs_cards {
    padding: 80px 0 40px;
}
.crs_card {
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
    width: calc(33.33% - 17px);
    margin-right: 20px;
}
.crs_card:last-child {
    margin-right: 0;
}
.crs_card_top {
    padding: 20px;
    position: relative;
}
.crs_card p {
    font-size: 16px;
    line-height: 24px; /* 150% */
}
.crs_card .crs_card_top p {
    color: var(--H1-Black, #272727);
}
.crs_card_top img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
    border-radius: 12px 12px 0 0;
}
.crs_card_top *:not(img) {
    position: relative;
    z-index: 2;
}
.crs_card_content {
    padding: 16px 20px;
}
.crs_card .crs_btn:not(.blue) {
    margin-top: 12px;
}
.crs_btn {
    border-radius: 30px;
    border: 2px solid var(--Blue-Main, #027DB8);
    color: var(--Blue-Main, #027DB8);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 177.778% */
    text-transform: capitalize;
    padding: 7px;
    text-align: center;
    width: 100%;
    display: block;
}
.crs_btn.blue {
    background: var(--Blue-Main, #027DB8);
    color: var(--white, #FFF);
}
.crs_cards > div > a {
    color: var(--Blue-Main, #027DB8);
    font-size: 18px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; 
    text-decoration-line: underline;
    text-transform: capitalize;
    text-align: center;
}
.crs_block {
    border-radius: 12px;
    background: var(--Gray-1, #F6F6F6);
    padding: 24px;
    list-style-type: none;
}
.crs_block li {
    padding: 0 0 0 18px;
    position: relative;
    color: var(--Body-color, #555);
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
}
.crs_block li b {
    color: var(--Blue-Main, #027DB8);
}
.crs_block li:before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    border-radius: 50%;
    background: var(--Blue-Main, #027DB8);
    width: 6px;
    height: 6px;
}
.crs_path img {
    border-radius: 12px;
    max-width: 602px;
    width: 100%;
    height: 100%;
}
.crs_path {
    padding: 40px 0 80px;
}
.crs_path .col-lg-6 * {
    max-width: 500px;
}
.crs_button_swiper {
    border-radius: 30px!important;
    border: 2px solid var(--Gray, #E0E0E0)!important;
    background: var(--Gray-1, #F6F6F6)!important;
    width: 42px;
    height: 42px;
    padding: 0!important;
    margin-left: 16px!important;
}
.swiper-slide {
    border-radius: 12px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
}
.lav-instr__img {
    height: 291px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 12px 12px 0 0;
}
.lav-instr__info {
    padding: 20px;
    border-radius: 0 0 12px 12px;
}
.lav-instr__caption {
    color: var(--Body-color, #555);
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
}
.lav-instr__name {
    color: var(--H1-Black, #272727);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
}
.crs_stories {
    overflow: hidden;
}
.crs_stories .swiper-slide img {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 50%;
    margin-right: 16px;
    object-fit: cover;
}
.crs_stories .swiper-slide img+div {
    width: 100%;
}
.crs_stories .swiper-slide p {
    font-size: 18px;
    line-height: 26px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
}
.crs_stories .swiper-slide p > b {
    color: var(--H1-Black, #272727);
}
.crs_stories .swiper-slide p.line-9 {
    -webkit-line-clamp: 9;
}
.crs_stories .swiper-slide p.active {
    -webkit-line-clamp: initial!important;
}
.crs_stories {
    background-color: #F6F6F6;
    padding: 60px 0;
}
.crs_stories .crs_slider .swiper-slide {
    background: #FFF;
    padding: 24px;
}
.crs_stories .crs_slider .swiper-slide a {
    color: var(--Blue-Main, #027DB8);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
    text-decoration-line: underline;
    text-transform: capitalize;
}
.crs_community {
    padding: 90px 0 65px;
}
.crs_community img {
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: contain;
}
.crs_instructors {
    overflow: hidden;
    padding-bottom: 80px;
}
.crs_surface {
    left: 0;
    max-width: 35.27vw;
}
.crs_img {
    right: 0;
    border-radius: 12px;
    max-width: 56.18vw;
}
.crs_community > div > div {
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
    max-width: 576px;
    padding: 42px;
    margin: 60px 0;
}
.crs_community a {
    max-width: 288px;
}
.crs_community p {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
}
.crs_ways {
    background: var(--Blue-dark, #003A67);
    padding: 60px 0;
}
.crs_ways * {
    color: #fff;
}
.crs_ways .flex-wrap > div > div {
    border-radius: 12px;
    border: 1px solid rgba(242,251,255,0.3);
    background: rgba(242, 251, 255, 0.15);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
    padding: 12px 18px;
    width: fit-content;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px; 
}
.crs_ways .flex-wrap > div {
    width: 20%;
    padding-right: 15px;
}
.crs_ways p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
}
.crs_ways b {
    font-size: 20px;
    line-height: 28px;
    display: block;
}
.crs_faq {
    padding: 80px 0;
}
.crs_faq .container {
    max-width: 850px;
}
.accordion {
    border-bottom: 1px solid #E0E0E0;
    list-style-type: none;
}
.accordion_item p:not(.crs_plus) {
    font-size: 18px;
    line-height: 26px;
    padding-right: 21px;
    max-width: none;
}
.accordion_item p.crs_plus {
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    border-radius: 50%;
    border: 1px solid var(--Gray, #E0E0E0);
    background: var(--Gray-1, #F6F6F6);
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    margin-left: auto;
    text-align: center;
    cursor: pointer;
}
.accordion:not(.active) .accordion_item p.crs_plus > span:last-child,
.accordion.active .accordion_item p.crs_plus > span:first-child {
    display: none;
}
.accordion_drop p {
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    max-width: 100%;
}
.accordion_drop {
    height: 0;
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;
}
.active .accordion_drop {
    opacity: 1;
    pointer-events: auto;
}
.crs_faq a {
    max-width: 288px;
}
.pl-2 {
    padding-left: 10px;
}
.crs_info {
    border-radius: 12px;
    background: var(--Gray-1, #F6F6F6);   
    padding: 16px;
    max-width: 808px;
    margin: 0 auto 7px;  
}
.crs_info p {
    color: var(--H1-Black, #272727);
    font-size: 16px;
    line-height: 24px; 
    font-weight: 700;
    max-width: 100%;
}
.crs_info p span {
    color: var(--Blue-Main, #027DB8);
}
.crs_info .crs_btn {
    border-radius: 30px!important;
    border: 2px dashed var(--Blue-Main, #027DB8)!important;
    padding: 10px 20px;
    margin-left: 24px;
    width: fit-content;
    background: transparent!important;
    color: var(--Blue-Main, #027DB8)!important;
    margin-left: auto;
}
.crs_info .crs_btn svg {
    margin-right: 8px;
}
@media (min-width: 768px) {
    h1,
    .crs_offer p {
        color: var(--white, #FFF);
    }
    .crs_header {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 999;
        background: rgba(0,0,0,0.3);
        padding: 9px 0 4px;
    }
    .crs_card_content > p {
        min-height: 96px;
    }
    .crs_stories .container {
        overflow: hidden;
        padding: 0 15px;
    }
    .crs_stories .container .crs_slider  {
        padding: 0 5px;
    }
    .text-md-center {
        text-align: center;
    }
}
@media (max-width: 991px) {
    .crs_path .col-6,
    .crs_surface {
        display: none;
    }
    .crs_card {
        width: calc(50% - 10px);
    }
    .crs_card:nth-child(2n+2) {
        margin-right: 0;
    }
    .crs_community img.crs_img {
        position: initial;
        max-width: calc(100% + 40px);
        margin: 0 -20px;
        border-radius: 0;
    }
    .crs_community > div > div {
        margin: -42px auto 0;
        max-width: 100%;
    }
    .crs_ways .flex-wrap > div {
        width: 33.33%;
    }
}
@media (max-width: 767px) {
    .crs_card {
        width: 100%;
        margin-right: 0;
    }
    .crs_sticky {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-top: 1px solid var(--Gray, #E0E0E0);
        background: #FFF;
        padding: 16px 20px;
        z-index: 99;
    }
    .crs_offer .container {
        position: absolute;
        top: calc(100% - 55px);
        left: 20px;
        width: calc(100% - 40px);
        border-radius: 12px;
        background: #FFF;
        z-index: 9;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
        padding: 20px;
    }
    h1 {
        font-size: 24px;
        line-height: 30px; 
    }
    h2 {
        font-size: 24px;
        line-height: 30px;
    }
    .crs_offer p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
    .crs_cards {
        padding: 189px 0 24px;
    }
    .crs_offer {
        min-height: 324px;
        background: url('${dir}image-7.png') no-repeat center / cover
    }
    .crs_card p {
        font-size: 14px;
        line-height: 22px;
    }
    .crs_btn {
        font-size: 16px;
        line-height: 32px;
        padding: 2px 0 4px;
    }
    .crs_cards > div > a {
        font-size: 14px;
        line-height: 22px;
    }
    .crs_block {
        padding: 16px;
    }
    .crs_stories {
        padding: 30px 0;
    }
    .crs_community {
        padding: 0 0 42px 0;
    }
    .crs_community > div > div {
        padding: 20px;
    }
    .lav-instr__img {
        height: 284px;
    }
    .crs_instructors {
        padding-bottom: 40px;
    }
    .crs_ways .flex-wrap > div {
        width: 100%;
        padding-right: 0;
    }
    .crs_ways .flex-wrap > div > div {
        margin-right: 12px;
        height: fit-content;
        font-size: 24px;
        line-height: 32px;
        padding: 8px 0;
        width: 70px;
        text-align: center;
        flex-shrink: 0;
    }
    .crs_ways b {
        font-size: 18px;
        line-height: 24px;
    }
    .crs_path,
    .crs_faq,
    .crs_ways {
        padding: 42px 0;
    }
    .crs_faq {
        padding-bottom: 25px
    }
    .accordion_item p b {
        font-size: 16px;
        font-weight: 500;
    }
    .sfc-footer {
        padding-bottom: 85px;
    }
    .crs_info {
        margin-top: 16px;
        margin-bottom: 0;
    }
    .crs_info p {
        text-align: center;
        font-size: 14px;
        line-height: 22px;
    }
    .crs_info .crs_btn {
        margin: 10px auto 0;
    }
    .crs_stories .swiper-slide p {
        -webkit-line-clamp: 9;
    }
    .crs_stories .swiper-slide p.line-9 {
        -webkit-line-clamp: 8;
    }
}
</style>`;

const svgTime = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3379_58626)">
<path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#6AA9FF"/>
<path d="M24 12C24 5.40891 18.5911 0 12 0V24C18.5911 24 24 18.5911 24 12Z" fill="#027DB8"/>
<path d="M12 22.5938C17.8508 22.5938 22.5938 17.8508 22.5938 12C22.5938 6.14923 17.8508 1.40625 12 1.40625C6.14923 1.40625 1.40625 6.14923 1.40625 12C1.40625 17.8508 6.14923 22.5938 12 22.5938Z" fill="#F6F6F6"/>
<path d="M6.03369 18.6719C6.42202 18.6719 6.73682 18.3571 6.73682 17.9688C6.73682 17.5804 6.42202 17.2656 6.03369 17.2656C5.64537 17.2656 5.33057 17.5804 5.33057 17.9688C5.33057 18.3571 5.64537 18.6719 6.03369 18.6719Z" fill="#003A67"/>
<path d="M17.9663 6.73437C18.3546 6.73437 18.6694 6.41957 18.6694 6.03125C18.6694 5.64292 18.3546 5.32812 17.9663 5.32812C17.578 5.32812 17.2632 5.64292 17.2632 6.03125C17.2632 6.41957 17.578 6.73437 17.9663 6.73437Z" fill="#003A67"/>
<path d="M6.03369 6.73437C6.42202 6.73437 6.73682 6.41957 6.73682 6.03125C6.73682 5.64292 6.42202 5.32812 6.03369 5.32812C5.64537 5.32812 5.33057 5.64292 5.33057 6.03125C5.33057 6.41957 5.64537 6.73437 6.03369 6.73437Z" fill="#003A67"/>
<path d="M17.9663 18.6719C18.3546 18.6719 18.6694 18.3571 18.6694 17.9688C18.6694 17.5804 18.3546 17.2656 17.9663 17.2656C17.578 17.2656 17.2632 17.5804 17.2632 17.9688C17.2632 18.3571 17.578 18.6719 17.9663 18.6719Z" fill="#003A67"/>
<path d="M4.96875 12.7031H3.5625C3.17386 12.7031 2.85938 12.3886 2.85938 12C2.85938 11.6114 3.17386 11.2969 3.5625 11.2969H4.96875C5.35739 11.2969 5.67188 11.6114 5.67188 12C5.67188 12.3886 5.35739 12.7031 4.96875 12.7031Z" fill="#003A67"/>
<path d="M20.4375 12.7031H19.0312C18.6426 12.7031 18.3281 12.3886 18.3281 12C18.3281 11.6114 18.6426 11.2969 19.0312 11.2969H20.4375C20.8261 11.2969 21.1406 11.6114 21.1406 12C21.1406 12.3886 20.8261 12.7031 20.4375 12.7031Z" fill="#003A67"/>
<path d="M11.2969 3.5625V4.96875C11.2969 5.35739 11.6114 5.67188 12 5.67188V2.85938C11.6114 2.85938 11.2969 3.17386 11.2969 3.5625Z" fill="#003A67"/>
<path d="M12.7031 4.96875V3.5625C12.7031 3.17386 12.3886 2.85938 12 2.85938V5.67188C12.3886 5.67188 12.7031 5.35739 12.7031 4.96875Z" fill="#FF7B4A"/>
<path d="M12 18.3281C11.6114 18.3281 11.2969 18.6426 11.2969 19.0312V20.4375C11.2969 20.8261 11.6114 21.1406 12 21.1406C12.3886 21.1406 12.7031 20.8261 12.7031 20.4375V19.0312C12.7031 18.6426 12.3886 18.3281 12 18.3281Z" fill="#003A67"/>
<path d="M16.7159 15.7216L12.7031 11.7089V7.78125C12.7031 7.39261 12.3886 7.07812 12 7.07812C11.6114 7.07812 11.2969 7.39261 11.2969 7.78125V12C11.2969 12.1867 11.371 12.3653 11.5029 12.4971L12 12.9943L15.7216 16.7159C15.9963 16.9905 16.4413 16.9905 16.7159 16.7159C16.9905 16.4413 16.9905 15.9963 16.7159 15.7216Z" fill="#003A67"/>
<path d="M12.7031 4.96875V3.5625C12.7031 3.17386 12.3886 2.85938 12 2.85938V5.67188C12.3886 5.67188 12.7031 5.35739 12.7031 4.96875Z" fill="#003A67"/>
<path d="M12.7031 20.4375V19.0312C12.7031 18.6426 12.3886 18.3281 12 18.3281V21.1406C12.3886 21.1406 12.7031 20.8261 12.7031 20.4375Z" fill="#003A67"/>
<path d="M16.7159 16.7159C16.9905 16.4412 16.9905 15.9962 16.7159 15.7216L12.7031 11.7089V7.78125C12.7031 7.39261 12.3886 7.07812 12 7.07812V12.9943L15.7216 16.7159C15.9963 16.9905 16.4412 16.9905 16.7159 16.7159Z" fill="#003A67"/>
</g>
<defs>
<clipPath id="clip0_3379_58626">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`;

const svgCalendar = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3379_58648)">
<path d="M0 5.4V9H24V5.4C24 4.076 22.8869 3 21.5172 3H2.48276C1.1131 3 0 4.076 0 5.4Z" fill="#027DB8"/>
<path d="M0 9V21.5676C0 22.9095 1.1131 24 2.48276 24H21.5172C22.8869 24 24 22.9095 24 21.5676V9H0Z" fill="#E0E0E0"/>
<path d="M13.2 4C13.684 4.364 14 4.948 14 5.6C14 6.704 13.104 7.6 12 7.6C10.896 7.6 10 6.704 10 5.6C10 4.948 10.316 4.364 10.8 4H13.2Z" fill="#003A67"/>
<path d="M6.00029 4C6.48429 4.364 6.80029 4.948 6.80029 5.6C6.80029 6.704 5.90429 7.6 4.80029 7.6C3.69629 7.6 2.80029 6.704 2.80029 5.6C2.80029 4.948 3.11629 4.364 3.60029 4H6.00029Z" fill="#003A67"/>
<path d="M20.4002 4C20.8842 4.364 21.2002 4.948 21.2002 5.6C21.2002 6.704 20.3042 7.6 19.2002 7.6C18.0962 7.6 17.2002 6.704 17.2002 5.6C17.2002 4.948 17.5162 4.364 18.0002 4H20.4002Z" fill="#003A67"/>
<path d="M13.1999 10.3984H15.9999C16.2208 10.3984 16.3999 10.5775 16.3999 10.7984V12.7984C16.3999 13.0194 16.2208 13.1984 15.9999 13.1984H13.1999C12.979 13.1984 12.7999 13.0194 12.7999 12.7984V10.7984C12.7999 10.5775 12.979 10.3984 13.1999 10.3984Z" fill="white"/>
<path d="M8.0002 10.3984H10.8002C11.0211 10.3984 11.2002 10.5775 11.2002 10.7984V12.7984C11.2002 13.0194 11.0211 13.1984 10.8002 13.1984H8.0002C7.77928 13.1984 7.6002 13.0194 7.6002 12.7984V10.7984C7.6002 10.5775 7.77928 10.3984 8.0002 10.3984Z" fill="white"/>
<path d="M2.8 10.3984H5.6C5.82091 10.3984 6 10.5775 6 10.7984V12.7984C6 13.0194 5.82091 13.1984 5.6 13.1984H2.8C2.57909 13.1984 2.4 13.0194 2.4 12.7984V10.7984C2.4 10.5775 2.57909 10.3984 2.8 10.3984Z" fill="white"/>
<path d="M13.1999 14.7969H15.9999C16.2208 14.7969 16.3999 14.976 16.3999 15.1969V17.1969C16.3999 17.4178 16.2208 17.5969 15.9999 17.5969H13.1999C12.979 17.5969 12.7999 17.4178 12.7999 17.1969V15.1969C12.7999 14.976 12.979 14.7969 13.1999 14.7969Z" fill="white"/>
<path d="M8.0002 14.7969H10.8002C11.0211 14.7969 11.2002 14.976 11.2002 15.1969V17.1969C11.2002 17.4178 11.0211 17.5969 10.8002 17.5969H8.0002C7.77928 17.5969 7.6002 17.4178 7.6002 17.1969V15.1969C7.6002 14.976 7.77928 14.7969 8.0002 14.7969Z" fill="white"/>
<path d="M18.4001 14.7969H21.2001C21.421 14.7969 21.6001 14.976 21.6001 15.1969V17.1969C21.6001 17.4178 21.421 17.5969 21.2001 17.5969H18.4001C18.1792 17.5969 18.0001 17.4178 18.0001 17.1969V15.1969C18.0001 14.976 18.1792 14.7969 18.4001 14.7969Z" fill="white"/>
<path d="M2.8 14.7969H5.6C5.82091 14.7969 6 14.976 6 15.1969V17.1969C6 17.4178 5.82091 17.5969 5.6 17.5969H2.8C2.57909 17.5969 2.4 17.4178 2.4 17.1969V15.1969C2.4 14.976 2.57909 14.7969 2.8 14.7969Z" fill="white"/>
<path d="M13.1999 19.1953H15.9999C16.2208 19.1953 16.3999 19.3744 16.3999 19.5953V21.5953C16.3999 21.8162 16.2208 21.9953 15.9999 21.9953H13.1999C12.979 21.9953 12.7999 21.8162 12.7999 21.5953V19.5953C12.7999 19.3744 12.979 19.1953 13.1999 19.1953Z" fill="white"/>
<path d="M8.0002 19.1953H10.8002C11.0211 19.1953 11.2002 19.3744 11.2002 19.5953V21.5953C11.2002 21.8162 11.0211 21.9953 10.8002 21.9953H8.0002C7.77928 21.9953 7.6002 21.8162 7.6002 21.5953V19.5953C7.6002 19.3744 7.77928 19.1953 8.0002 19.1953Z" fill="white"/>
<path d="M18.4001 19.1953H21.2001C21.421 19.1953 21.6001 19.3744 21.6001 19.5953V21.5953C21.6001 21.8162 21.421 21.9953 21.2001 21.9953H18.4001C18.1792 21.9953 18.0001 21.8162 18.0001 21.5953V19.5953C18.0001 19.3744 18.1792 19.1953 18.4001 19.1953Z" fill="white"/>
<path d="M10.8002 1.59844C10.8002 0.935696 11.3375 0.398438 12.0002 0.398438C12.6629 0.398438 13.2002 0.935696 13.2002 1.59844V4.79844C13.2002 5.46118 12.6629 5.99844 12.0002 5.99844C11.3375 5.99844 10.8002 5.46118 10.8002 4.79844V1.59844Z" fill="#A5A5A5"/>
<path d="M3.6 1.59844C3.6 0.935696 4.13726 0.398438 4.8 0.398438C5.46274 0.398438 6 0.935696 6 1.59844V4.79844C6 5.46118 5.46274 5.99844 4.8 5.99844C4.13726 5.99844 3.6 5.46118 3.6 4.79844V1.59844Z" fill="#A5A5A5"/>
<path d="M17.9999 1.59844C17.9999 0.935696 18.5372 0.398438 19.1999 0.398438C19.8626 0.398438 20.3999 0.935696 20.3999 1.59844V4.79844C20.3999 5.46118 19.8626 5.99844 19.1999 5.99844C18.5372 5.99844 17.9999 5.46118 17.9999 4.79844V1.59844Z" fill="#A5A5A5"/>
</g>
<defs>
<clipPath id="clip0_3379_58648">
<rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"/>
</clipPath>
</defs>
</svg>`;

const slide = (data, key) => {
  const html = `   
    <div class="swiper-slide">
        <div class="d-flex">
            <img src="${dir}avatars_reviews/image-${key}.png" alt="avatar">
            <div>
                <div class="d-flex justify-content-between pb-1">
                    <p><b>${data.author}</b></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4.94999 14.4317C4.455 15.6767 3.67501 16.9067 2.63251 18.0917C2.30251 18.4667 2.25751 19.0067 2.5275 19.4267C2.73752 19.7567 3.08249 19.9367 3.45749 19.9367C3.5625 19.9367 3.66751 19.9292 3.77252 19.8917C5.97748 19.2467 11.13 16.9592 11.2725 9.62416C11.325 6.79669 9.25502 4.3667 6.5625 4.0892C5.07001 3.93919 3.58502 4.42666 2.4825 5.41667C1.38002 6.41418 0.75 7.8392 0.75 9.32418C0.75 11.7992 2.50502 13.9667 4.94999 14.4317Z" fill="#E0E0E0"/>
                        <path d="M18.5326 4.0892C17.0475 3.93919 15.5626 4.42666 14.4601 5.41667C13.3576 6.41418 12.7275 7.8392 12.7275 9.32418C12.7275 11.7992 14.4826 13.9667 16.9276 14.4317C16.4325 15.6767 15.6526 16.9067 14.61 18.0917C14.28 18.4667 14.235 19.0067 14.5051 19.4267C14.7151 19.7567 15.0601 19.9367 15.4351 19.9367C15.54 19.9367 15.6451 19.9292 15.7501 19.8917C17.9551 19.2467 23.1076 16.9592 23.2501 9.62415V9.51919C23.2501 6.73668 21.2026 4.3667 18.5326 4.0892Z" fill="#E0E0E0"/>
                    </svg>
                </div>
                <p>${data.comments}</p>
                <a href="#" class="d-none">Read more</a>
            </div>
        </div>
    </div>`;
  return html;
};

const faq = (title, text) => {
  return ` 
    <li class="accordion pb-2 mb-md-4 mb-3">
        <div class="accordion_item d-flex align-items-center">
            <p><b>${title}</b></p>
            <p class="crs_plus"> <span>+</span> <span>-</span></p>
        </div>
        <div class="accordion_drop pb-1">
            <p>${text}</p>
        </div>
    </li>`;
};

const dataFaq = {
  "Q1: What makes this year’s yoga challenges unique?": `This year marks the inaugural launch of our specially designed yoga challenges - "Beginner's Breeze", "Advance with Ease", and "Mindful Moments". Each one is crafted to cater to different levels and interests, offering a structured, supportive, and exciting path to immerse yourself into yoga from the comfort of your home.`,
  "Q2: How do I choose the right challenge for me?": `Every challenge is tailored to support different levels and aims in yoga. "Beginner's Breeze" is perfect for newcomers, "Advance with Ease" suits those with some yoga experience, and "Mindful Moments" is crafted for all levels focusing on meditation. Review the detailed descriptions above to select the one that resonates most with your current stage and aspirations.`,
  "Q3: Can I participate in more than one challenge?": `Absolutely! You're welcome to engage in as many challenges as you'd like. Each challenge is self-paced and available for you to start whenever you’re ready. Mix and match based on your interests and energy levels throughout the year.`,
  "Q4: What happens after I join a challenge?": `Once you choose your challenge, you’ll gain access to a series of exclusive video classes and materials curated for your journey. You can explore these at your own pace and will receive supportive tips, and encouragement along the way to keep you motivated and informed.`,
  "Q5: What if I need help or have questions during the challenge?": `We’re here for you! You can reach out to us via email at any time for support. Plus, you'll become a part of our vibrant online community where you can share experiences, ask questions, and gain insights from fellow challengers and our expert team.`,
};

let faqOption = "";

for (const key in dataFaq) {
  faqOption += faq(key, dataFaq[key]);
}

const reviewData = {
    0: {
        'author': 'Marilyn, 65',
        'comments': `After a year of exploring the free classes, the exceptional quality of instruction was the key reason I chose to subscribe. The teachers are outstanding, making it easy and enjoyable to practice yoga right at home. It's a wonderful blend of guidance and personal growth.`
    },
    1: {
        'author': 'Susan, 58',
        'comments': `DYWM, particularly instructors like David and Melissa, has been life-changing. Understanding my core better has resolved my back problems, and I've lost significant weight. I am deeply grateful for finding DYWM during the early months of the pandemic and for the physical transformation it has brought.`
    },
    2: {
        'author': 'Jean, 33',
        'comments': `Finding your yoga videos, especially the deep release ones for hips, hamstrings, and lower back, has been a game-changer for me, particularly during challenging times like Covid and natural disasters. As a long-time yoga practitioner, I've discovered new insights through your videos and have even recommended them to friends and family.`
    },
    3: {
        'author': 'Diane, 40',
        'comments': `After nearly a year of using DoYogaWithMe's free services, I've become such a fan that I upgraded to a paid subscription. This platform offers the most positive and transformative yoga experience I've ever had, with noticeable changes in my body and a deep alignment with the values of DoYogaWithMe`
    },
    4: {
        'author': 'Sue, 45',
        'comments': `I've been a fan of David's classes for many years. They've been incredibly helpful, especially during periods of back discomfort. Sharing his classes with others has been a joy, and I'm looking forward to joining as a full member in the future. David truly is a gem in the yoga world.`
    },
    5: {
        'author': 'John, 39',
        'comments': `I started with your website about a month ago and it's been a revelation. I was waiting to see how much I would use it before committing to a subscription, and I'm thoroughly impressed. The quality of teaching is outstanding, and it's been a delightful addition to my routine.`
    }
}

let reviewOption = "";

for (const key in reviewData) {
    reviewOption += slide(reviewData[key], key);
}

function scrollTo(target) {

    const top = document
      .querySelector(`#${target.href.split("#")[1]} h2`)
      .getBoundingClientRect().top - 40;

    seamless.polyfill();
    seamless.scrollBy(window, { behavior: "smooth", top: top, left: 0 });
}

function copyText(target) {
    // Get the input element
    var inputElement = document.querySelector(target);

    // Select the text in the input element
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile devices

    try {
      // Use the Clipboard API to copy the text
      navigator.clipboard.writeText(inputElement.value);
      console.log("Text copied: " + inputElement.value);
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  
}

const html = `
    <header class="crs_header d-flex justify-content-center">
        <img src="${dir}logo.png" alt="logo" class="d-md-block d-none">
        <img src="https://www.doyogawithme.com/themes/custom/samsara/logo.png" alt="logo" class="d-md-none" height="33px" width="150px">
    </header>
    <section class="crs_offer d-flex align-items-center">
        <div class="container">
            <div class="pt-md-5">
                <h1 class="mb-md-3 mb-2">New Year, <br>
                    New You Through Yoga</h1>
                <p class="pt-md-0 pt-1">Celebrate a fresh start and create mindful moments with our exclusive New Year Yoga Challenges, curated just for you.</p>
            </div>
        </div>
    </section>
    <section class="crs_cards" id="crs_cards">
        <div class="container">
            <h2 class="pb-md-4 text-md-center">Choose Your Path,<br class="d-md-none"> Accept the Challenge</h2>
            <div class="crs_info d-md-flex align-items-center">
                <p>Use Promo Code on a Monthly subscription to receive <span>3 months for $24.99</span> </p>
                <input type="text" value="Yoga3ny" id="myInput" class="d-none">
                <button class="crs_btn d-flex align-items-center" type="button" onclick="copyText('#myInput')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M17.6491 2.49609C17.8596 2.70703 18 2.98828 18 3.30469V11.25C18 12.5156 16.9825 13.5 15.7544 13.5H9.01754C7.75439 13.5 6.77193 12.5156 6.73684 11.25V2.25C6.73684 1.01953 7.7193 0 8.98246 0H14.7018C15.0175 0 15.2982 0.140625 15.5088 0.351562L17.6491 2.49609ZM16.3158 11.25H16.2807V4.5H14.6316C14 4.5 13.5088 4.00781 13.5088 3.375L13.4737 1.72266H8.98246C8.66667 1.72266 8.42105 1.96875 8.42105 2.28516V11.25C8.42105 11.5664 8.66667 11.8125 8.98246 11.8125H15.7544C16.0351 11.8125 16.3158 11.5664 16.3158 11.25ZM9.57895 15.75V14.625H11.2632V15.75C11.2632 17.0156 10.2456 18 9.01754 18H2.2807C1.01754 18 0.0350877 17.0156 0.0350877 15.75L0 6.75C0 5.51953 1.01754 4.5 2.24561 4.5H5.64912V6.22266H2.24561C1.96491 6.22266 1.68421 6.46875 1.68421 6.78516V15.75C1.68421 16.0664 1.92982 16.3125 2.24561 16.3125H9.01754C9.29825 16.3125 9.57895 16.0664 9.57895 15.75Z" fill="#027DB8"/>
                    </svg>
                    Yoga3ny
                </button>
            </div>
            <div class="d-flex flex-wrap">
                <div class="crs_card mt-3">
                    <div class="crs_card_top">
                        <img src="${dir}path-1.png" alt="image">
                        <h4 class="mb-1">Beginner's Breeze</h4>
                        <p class="mb-1"><b>Your First Yoga Step</b> </p>
                        <p><b>Created by:</b> Fiji McAlpine</p>
                    </div>
                    <div class="crs_card_content">
                        <p class="mb-3">Begin your yoga journey from home with gentle, beginner-friendly sessions. Discover fundamental poses and mindful breathing in concise, easy-to-follow classes.</p>
                        <div class="d-flex align-items-center mb-2 pb-1">
                            ${svgTime}
                            <p class="pl-2"><b>25 - 51 mins/day</b></p>
                        </div>
                        <div class="d-flex align-items-center">
                            ${svgCalendar}
                            <p class="pl-2"><b>22 days</b></p>
                        </div>
                        <a href="https://www.doyogawithme.com/content/strengthen-yoga-practice" class="crs_btn blue mt-3">See Details</a>
                        <a href="https://www.doyogawithme.com/content/strengthen-yoga-practice/enroll" class="crs_btn">Subscribe to challenge</a>
                    </div>
                </div>
                <div class="crs_card mt-3">
                    <div class="crs_card_top">
                        <img src="${dir}path-3.png" alt="image">
                        <h4 class="mb-1">Advance with Ease</h4>
                        <p class="mb-1"><b>Deepening Your Yoga Path</b> </p>
                        <p><b>Created by:</b> Fiji McAlpine</p>
                    </div>
                    <div class="crs_card_content">
                        <p class="mb-3">Dive deeper into yoga with intermediate-level home sessions. Enhance strength and flexibility while elevating your practice.</p>
                        <div class="d-flex align-items-center mb-2 pb-1">
                            ${svgTime}
                            <p class="pl-2"><b>25 - 51 mins/day</b></p>
                        </div>
                        <div class="d-flex align-items-center">
                            ${svgCalendar}
                            <p class="pl-2"><b>22 days</b></p>
                        </div>
                        <a href="https://www.doyogawithme.com/content/soar-into-2024" class="crs_btn blue mt-3">See Details</a>
                        <a href="https://www.doyogawithme.com/content/soar-into-2024/enroll" class="crs_btn">Subscribe to challenge</a>
                    </div>
                </div>
                <div class="crs_card mt-3">
                    <div class="crs_card_top">
                        <img src="${dir}path-3.png" alt="image">
                        <h4 class="mb-1">Mindful Moments</h4>
                        <p class="mb-1"><b>Tranquility Through Meditation</b> </p>
                        <p><b>Created by:</b> Fiji McAlpine</p>
                    </div>
                    <div class="crs_card_content">
                        <p class="mb-3">Discover meditation techniques for mental clarity and emotional balance, creating tranquillity in every aspect of your life.</p>
                        <div class="d-flex align-items-center mb-2 pb-1">
                            ${svgTime}
                            <p class="pl-2"><b>25 - 51 mins/day</b></p>
                        </div>
                        <div class="d-flex align-items-center">
                            ${svgCalendar}
                            <p class="pl-2"><b>22 days</b></p>
                        </div>
                        <a href="https://www.doyogawithme.com/content/explore-benefits-meditation" class="crs_btn blue mt-3">See Details</a>
                        <a href="https://www.doyogawithme.com/content/explore-benefits-meditation/enroll" class="crs_btn ">Subscribe to challenge</a>
                    </div>
                </div>
            </div>
            <a href="https://www.doyogawithme.com/yoga-challenges" class="d-block mt-4">Browse all challenges</a>
        </div>
    </section>
    <section class="crs_path">
        <div class="container row">
            <div class="col-lg-6 col-12">
                <h2 class="mb-2_1440 mb-3">Choose Your Path,<br class="d-md-none"> Accept the Challenge</h2>
                <p class="mb-md-4 mb-3">Embarking on a yoga challenge isn't just about mastering poses; it's about setting a clear intention for growth, discipline, and self-awareness. In a world bustling with distractions, a challenge:</p>
                <ul class="crs_block mb-md-4 mb-3">
                    <li class="mb-3"><b>Cultivates Consistency:</b> Regular practice ingrains healthy habits, making yoga an integral part of your daily routine.</li>
                    <li class="mb-3"><b>Fosters Accountability:</b> Setting and committing to a tangible goal amplifies motivation and ensures progression.</li>
                    <li class="mb-3"><b>Ignites Community Spirit:</b> Sharing the journey with fellow challengers creates a bond of mutual encouragement and inspiration.</li>
                    <li><b>Amplifies Results:</b> Consistent, focused practice deepens the benefits of yoga, enhancing physical flexibility, mental clarity, and emotional balance.</li>
                </ul>
                <p>Accepting a yoga challenge is a powerful commitment to yourself, heralding transformation both on and off the mat.</p>
            </div>
            <div class="col-6">
                <img src="${dir}image-8.png" alt="image">
            </div>
           
        </div>
    </section>
    <section class="crs_stories">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h2 class="d-md-block d-none">Real Stories, Real Transformations</h2>
                <h2 class="d-md-none">Join the Excitement of Our Inaugural Yoga Challenges!</h2>
                <div class="d-md-flex d-none">
                    <button type="button" class="crs_button_swiper crs_button_prev d-flex">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M7.98438 0.984376C7.98438 1.26563 7.89063 1.51563 7.70313 1.70313L2.42188 6.98438L7.70313 12.2969C8.10938 12.6719 8.10938 13.3281 7.70313 13.7031C7.32812 14.1094 6.67187 14.1094 6.29688 13.7031L0.296876 7.70313C-0.109374 7.32812 -0.109374 6.67187 0.296876 6.29688L6.29688 0.296876C6.67188 -0.109374 7.32813 -0.109374 7.70313 0.296876C7.89063 0.484376 7.98438 0.734376 7.98438 0.984376Z" fill="#555555"/>
                        </svg>
                    </button>
                    <button type="button" class="crs_button_swiper crs_button_next d-flex">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M0.0156244 13.0156C0.0156244 12.7344 0.109374 12.4844 0.296874 12.2969L5.57812 7.01562L0.296875 1.70312C-0.109375 1.32812 -0.109375 0.671875 0.296875 0.296875C0.671875 -0.109375 1.32813 -0.109375 1.70312 0.296875L7.70312 6.29687C8.10937 6.67188 8.10937 7.32813 7.70312 7.70312L1.70312 13.7031C1.32812 14.1094 0.671874 14.1094 0.296874 13.7031C0.109374 13.5156 0.0156244 13.2656 0.0156244 13.0156Z" fill="#555555"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="crs_slider py-4">
                <div class="swiper-wrapper">${reviewOption}</div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
    <section class="crs_community">
        <div class="container d-lg-flex align-items-center">
            <img class="crs_surface" src="${dir}surface1.svg" alt="surface1">
            <img class="crs_img" src="${dir}image-9.png" alt="image">
            <div>
                <h2 class="mb-md-4 mb-2">More Than a Challenge - A Community.</h2>
                <p class="mb-md-4 pt-md-0 pt-1">Embark on your yoga journey and join a thriving online community of like-minded individuals, all supporting, sharing, and growing together. Your path is yours, but you’ll never walk it alone.</p>
                <a href="#crs_cards" class="crs_btn blue d-md-block d-none">Explore Challenges</a>
            </div>
        </div>
    </section>
    <section class="crs_instructors">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h2>Our Instructors</h2>
                <div class="d-md-flex d-none">
                    <button type="button" class="crs_button_swiper crs_button_prev d-flex">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M7.98438 0.984376C7.98438 1.26563 7.89063 1.51563 7.70313 1.70313L2.42188 6.98438L7.70313 12.2969C8.10938 12.6719 8.10938 13.3281 7.70313 13.7031C7.32812 14.1094 6.67187 14.1094 6.29688 13.7031L0.296876 7.70313C-0.109374 7.32812 -0.109374 6.67187 0.296876 6.29688L6.29688 0.296876C6.67188 -0.109374 7.32813 -0.109374 7.70313 0.296876C7.89063 0.484376 7.98438 0.734376 7.98438 0.984376Z" fill="#555555"/>
                        </svg>
                    </button>
                    <button type="button" class="crs_button_swiper crs_button_next ml-3 d-flex">
                        <svg class="m-auto" xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path d="M0.0156244 13.0156C0.0156244 12.7344 0.109374 12.4844 0.296874 12.2969L5.57812 7.01562L0.296875 1.70312C-0.109375 1.32812 -0.109375 0.671875 0.296875 0.296875C0.671875 -0.109375 1.32813 -0.109375 1.70312 0.296875L7.70312 6.29687C8.10937 6.67188 8.10937 7.32813 7.70312 7.70312L1.70312 13.7031C1.32812 14.1094 0.671874 14.1094 0.296874 13.7031C0.109374 13.5156 0.0156244 13.2656 0.0156244 13.0156Z" fill="#555555"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="crs_slider py-4">
                <div class="swiper-wrapper"> 
                    <a href="/yoga-classes?field_instructor_target_id=8" class="swiper-slide" >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06112.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                            <div class="lav-instr__name">Fiji McAlpine</div>
                            <div class="lav-instr__caption">Vinyasa, Power, Meditation, YTT</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=123147" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/satiya-channer.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Satiya Channer</div>
                        <div class="lav-instr__caption">Yin, Restorative, Hatha, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=4" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/David%20headshot%20cropped%20Jan-23.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">David Procyshyn</div>
                        <div class="lav-instr__caption">Hatha, Pain Care, Meditation, YTT</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=7041" class="swiper-slide" >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/tracy.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Tracey Noseworthy</div>
                        <div class="lav-instr__caption">Vinyasa, Power, Meditation, YTT</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=313027" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/10/DSC04949%20copy.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Josh Chen</div>
                        <div class="lav-instr__caption">Hatha, Yin, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=467" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/02/PROFILE_MELISSA%20web%20size.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Melissa Krieger</div>
                        <div class="lav-instr__caption">Hatha, Slow Flow, Restorative</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=244583" class="swiper-slide" >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC01881.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Helen Camisa</div>
                        <div class="lav-instr__caption">Hatha, Yin, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=196672" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/DSC06138%20%282%29.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Andrea Ting-Luz</div>
                        <div class="lav-instr__caption">Vinyasa, Hatha, Yin</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=16854" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2020/04/Screenshot%202020-04-07%2013.11.01.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Rachel Scott</div>
                        <div class="lav-instr__caption">Vinyasa, Power, Hatha, YTT</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=133906" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2016/05/yoga%20profile%20picture.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Crista Shillington</div>
                        <div class="lav-instr__caption">Vinyasa, Power</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=326548" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/04/Doyoga.jpeg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Sarada Jagannath</div>
                        <div class="lav-instr__caption">Hatha, Pranayama</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=357388" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/DSC01661-2_0.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Araba Adjaye</div>
                        <div class="lav-instr__caption">Hatha</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=350658" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/08/Tara%20Heal%20HEADSHOT%202021%20Photo-68.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Tara Heal</div>
                        <div class="lav-instr__caption">Vinyasa, Power, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=266604" class="swiper-slide" >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/Photo%204.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Guy Friswell</div>
                        <div class="lav-instr__caption">Slow Flow, Hatha, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=269801" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2023/02/unnamed%20%282%29.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Jonni-Lyn Friel</div>
                        <div class="lav-instr__caption">Jivamukti, Vinyasa, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=317249" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2022/11/julia-web.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Julia Crouch</div>
                        <div class="lav-instr__caption">Pilates, Pre/Post Natal, Hatha</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=90321" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/sarah-jane-profile.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Sarah Jane Steele</div>
                        <div class="lav-instr__caption">Prenatal/Postnatal, Hatha, Yin, Restorative</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=218644" class="swiper-slide" >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kathi.png&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Kathi Ells</div>
                        <div class="lav-instr__caption">Pilates</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=4134" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/08/nicky_jones.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Nicky Jones</div>
                        <div class="lav-instr__caption">Restorative, Therapy, Hatha</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=189907" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/04/sarah-holmes.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Sarah Holmes de Castro</div>
                        <div class="lav-instr__caption">Hatha, Restorative, Gentle</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=15517" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/ron_stewart_yoga_0_0.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Ron Stewart</div>
                        <div class="lav-instr__caption">Vinyasa, Power, Hatha</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=877" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/kim_wilson.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Kim Wilson</div>
                        <div class="lav-instr__caption">Pilates</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=134" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/06/anastasia-thumb2.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Anastasia Hangemanole</div>
                        <div class="lav-instr__caption">Yin, Hatha</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=15521" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/11/IMG_5004.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Dawn Rabey</div>
                        <div class="lav-instr__caption">Kundalini, Pranayama, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=834" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2015/04/Screen%20shot%202015-04-15%20at%2011.00.26%20AM.png&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Tianne Allan</div>
                        <div class="lav-instr__caption">Restorative, Pain Care</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=215411" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/10/alyssa_jean.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Alyssa Jean Klazek</div>
                        <div class="lav-instr__caption">Yoga for Kids</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=266789" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/03/IMG_2223_RETOUCH_V2.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Nyk Danu</div>
                        <div class="lav-instr__caption">Yin, Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=224862" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2017/12/Jeff%20with%20son.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Jeff Lichty</div>
                        <div class="lav-instr__caption">Ashtanga</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=50832" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/michelle_rubin.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Michelle Rubin</div>
                        <div class="lav-instr__caption">Hatha, Gentle, Seniors</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-meditation?field_instructor_target_id=253426" class="swiper-slide"  >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2019/04/jennylisa%20%282%29.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Jennifer Piercy</div>
                        <div class="lav-instr__caption">Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-meditation?field_instructor_target_id=189052" class="swiper-slide" >
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2018/09/Screen%20Shot%202018-09-12%20at%203.32.21%20PM.png&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Peter Renner</div>
                        <div class="lav-instr__caption">Meditation</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=8733" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2021/09/erica_fitch.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Erica Fritch</div>
                        <div class="lav-instr__caption">Hatha, Therapy, Gentle</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=1047" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/Shivani_1.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Shivani Wells</div>
                        <div class="lav-instr__caption">Vinyasa/Power, Hatha</div>
                        </div>
                    </a>
                    
                    <a href="/yoga-classes?field_instructor_target_id=28537" class="swiper-slide">
                        <div class="lav-instr__img" style="background-image: url(&quot;https://www.doyogawithme.com/sites/default/files/styles/square_400px/public/profile/user/field_user_avatar/2014/03/jenni-ashtanga-yoga_1.jpg&quot;)"></div>
                        <div class="lav-instr__info">
                        <div class="lav-instr__name">Jenni Pritchard</div>
                        <div class="lav-instr__caption">Ashtanga</div>
                        </div>
                    </a>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
    <section class="crs_ways">
        <div class="container">
            <h2 class="mb-md-5">Count the ways you can personalize your practice</h2>
            <div class="d-flex flex-wrap">
                <div class="pt-md-3 pt-4 d-md-block d-flex">
                    <div class="mb-3">25+</div>
                    <p class="pt-md-1">
                        <b class="pb-1">Styles</b>
                        Keep your mind and body guessing or deepen your practice.
                    </p>
                </div>
                <div class="pt-md-3 pt-4 d-md-block d-flex">
                    <div class="mb-3">25+</div>
                    <p class="pt-md-1">
                        <b class="pb-1">Programs</b>Created for beginner, intermediate, and advanced practices.
                    </p>
                </div>
                <div class="pt-md-3 pt-4 d-md-block d-flex">
                    <div class="mb-3">35+</div>
                    <p class="pt-md-1">
                        <b class="pb-1">Challenges</b>Carefully designed series of classes that help you get healthier, stronger, and more flexible.
                    </p>
                </div>
                <div class="pt-md-3 pt-4 d-md-block d-flex">
                    <div class="mb-3">90+</div>
                    <p class="pt-md-1">
                        <b class="pb-1">Guided Meditations</b>Sleep better, build mindfulness, enhance performance or let go of anxiety.
                    </p>
                </div>
                <div class="pt-md-3 pt-4 d-md-block d-flex">
                    <div class="mb-3">2-90</div>
                    <p class="pt-md-1">
                        <b class="pb-1">Minute Classes</b>To get you on your mat with whatever time you have.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="crs_faq">
        <div class="container">
            <h2 class="mb-md-5 mb-4">Got Questions?<br class="d-md-none"> We’ve Got Answers!</h2>
            <ul>${faqOption}</ul>
            <a href="#crs_cards" class="crs_btn blue mx-auto d-md-block d-none mt-4">Explore Challenges</a>
        </div>
    </section>
    <div class="crs_sticky d-md-none">
        <a href="#crs_cards" class="crs_btn blue mx-auto d-md-none">Explore Challenges</a>
    </div>`;

const init = setInterval(() => {
  if (document.querySelector(".o-page__preContent")) {
    clearInterval(init);

    // Swiper Slider
    const scriptCustom = document.createElement("script");
    scriptCustom.src =
      "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js";
    scriptCustom.async = false;
    document.head.appendChild(scriptCustom);

    const scriptCustomStyle = document.createElement("link");
    scriptCustomStyle.href =
      "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css";
    scriptCustomStyle.rel = "stylesheet";
    document.head.appendChild(scriptCustomStyle);

    //polyfill
    let scriptScroll = document.createElement("script");
    scriptScroll.src =
      "https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js";
    document.head.appendChild(scriptScroll);

    //add html, style
    document.body.insertAdjacentHTML("afterbegin", style);
    document
      .querySelector(".o-page__preContent")
      .insertAdjacentHTML("afterbegin", html);

    //accordion (faq)
    document.querySelectorAll(".crs_plus").forEach((item) => {
      item.addEventListener("click", () => {
        if (
          item.closest("ul").querySelector(".active") &&
          !item.closest(".accordion").classList.contains("active")
        ) {
          item.closest("ul").querySelector(".active .accordion_drop").style =
            "";
          item
            .closest("ul")
            .querySelector(".active")
            .classList.remove("active");
        }

        item.closest(".accordion").classList.toggle("active");

        item.closest(".accordion").querySelector(".accordion_drop").style = item
          .closest(".accordion")
          .classList.contains("active")
          ? "height:" +
            item.closest(".accordion").querySelector(".accordion_drop")
              .scrollHeight +
            "px"
          : "";
      });
    });

    document.querySelectorAll('a[href="#crs_cards"]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            scrollTo(item)
        })
    })
    // sliders
    const waitForSwiper = setInterval(() => {
      if (typeof Swiper !== "undefined") {
        clearInterval(waitForSwiper);

        document.querySelectorAll(".crs_slider").forEach((element, index) => {
          let option = {
            slidesPerView: index == 0 ? 3 : 4,
            // slideToClickedSlide: true,
            spaceBetween: 20,
            navigation: {
              nextEl: `.${
                element.closest("section").className
              } .crs_button_next`,
              prevEl: `.${
                element.closest("section").className
              } .crs_button_prev`,
            },
            breakpoints: {
              320: {
                slidesPerView: index == 0 ? 1 : 1.2,
                spaceBetween: index == 0 ? 12 : 16,
                pagination: {
                  el: `.${element.closest("section").className} .swiper-pagination`,
                  type: "bullets",
                  dynamicBullets: true,
                  clickable: true,
                },
              },
              601: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView:  index == 0 ? 3 : 4,
                pagination: {
                  el: `.${element.closest("section").className} .swiper-pagination`,
                  type: "bullets",
                  dynamicBullets: true,
                  clickable: true,
                },
              },
            },
          };

          new Swiper(
            `.${element.closest("section").className} .${
              element.className.split(" ")[0]
            }`,
            option
          );

          if (element.closest('.crs_stories')) {
            let textElement = element.querySelectorAll('.swiper-slide > div > div > p')

            textElement.forEach(item => {
                if (item.scrollHeight > item.clientHeight) {
                    item.classList.add('line-9')
                    item.nextElementSibling.classList.remove('d-none')
                    
                }
                item.nextElementSibling.addEventListener('click', (e) => {
                    e.preventDefault()
                    e.target.classList.add('d-none')
                    item.classList.add('active')
                })
            })

            

          }
        });
      }
    });

    document.querySelector('.exp-loading')?.remove()
  }
});