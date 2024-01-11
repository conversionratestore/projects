const dir = "https://conversionratestore.github.io/projects/doyogawithme/img/";

const media = window.innerWidth < 769 ? 'mobile' : 'desktop'

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
.crs_header_sticky {
    opacity: 0;
    transform: translateY(-100%);
    background: #fff;
    padding: 4px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.25s ease;
    z-index: 99;
}
.crs_header_sticky.active {
    opacity: 1;
    transform: translateY(0);
}
.crs_offer {
    min-height: 100vh;
    position: relative;
    background: linear-gradient(90deg, #272727 0%, rgba(39, 39, 39, 0.00) 100.59%), url('${dir}image-10.png') no-repeat center / cover;
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
.crs_unlock {
    background-color: var(--Gray-1, #F6F6F6);
    padding: 80px 0;
}
.crs_unlock .container {
    max-width: 1192px;
    padding: 0 10px;
}
.crs_unlock_item {
    width: 33.33%;
    padding: 0 10px;
}
.crs_unlock_item svg {
    flex-shrink: 0;
}
.crs_unlock_item p {
    color: var(--Body-color, #555);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; 
    margin: 0;
    padding-left: 15px;
    max-width: 295px;
}
.crs_offer p {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    max-width: 520px;
}
.crs_offer .crs_btn {
    max-width: 350px;
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
.crs_community img,
.crs_video {
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: contain;
}
.crs_instructors {
    overflow: hidden;
    padding: 80px 0;
}
.crs_surface {
    left: 0;
    max-width: 35.27vw;
}
.crs_img,
.crs_video {
    right: 0;
    border-radius: 12px;
    max-width: 809px;
}
.crs_video {
    width: 100%;
    max-width: 706px;
    z-index: 1;
}
.crs_community > div > div:last-child {
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
    max-width: 576px;
    padding: 42px;
    margin: 70px 0;
    width: 100%;
}
.crs_community_collection.crs_community > div > div:last-child  {
    margin: 30px 0;
}
.crs_community p {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
}
.crs_community_collection.crs_community p {
    max-width: 449px;
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
    padding: 15px 0 80px;
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
@media (max-width: 1440px) {
    .crs_img,
    .crs_video {
        max-width: 56.18vw;
    }
    .crs_video {
        max-width: 49vw;
    }
}
@media (max-width: 991px) {
    .crs_path .col-6,
    .crs_surface {
        display: none;
    }
    .crs_community img.crs_img {
        position: initial;
        max-width: calc(100% + 40px);
        margin: 0 -20px;
        border-radius: 0;
        width: calc(100% + 40px);
    }
    .crs_community.crs_community_collection .container {
        display: flex;
        flex-direction: column-reverse;
    }
    .crs_community_collection.crs_community > div > div:last-child {
        box-shadow: none;
        padding: 0;
        margin-bottom: 20px;
    }
    .crs_community img.crs_video {
        max-width: 100%;
        position: initial;
    }
    .crs_community > div > div:last-child {
        margin: -42px auto 0;
        max-width: 100%;
    }
    .crs_ways .flex-wrap > div {
        width: 33.33%;
    }
}
@media (max-width: 767px) {
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
    .crs_offer p,
    .crs_community p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
    .crs_offer {
        min-height: 324px;
        background: url('${dir}image-10-mob.png') no-repeat center / cover
    }
    .crs_btn {
        font-size: 16px;
        line-height: 32px;
        padding: 2px 0 4px;
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
    .crs_community > div > div:last-child {
        padding: 20px;
    }
    .crs_community:not(.crs_community_collection) h2 {
        font-size: 20px;
        line-height: 30px;
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
        padding: 0 0 25px;
    }
    .accordion_item p b {
        font-size: 16px;
        font-weight: 500;
    }
    .sfc-footer {
        padding-bottom: 85px;
    }
    .crs_stories .crs_slider .swiper-slide {
        padding: 20px;
    }
    .crs_stories .swiper-slide p {
        -webkit-line-clamp: 9;
    }
    .crs_stories .swiper-slide p,
    .crs_stories .crs_slider .swiper-slide a {
        font-size: 16px;
        line-height: 24px;
    }
    .crs_stories .swiper-slide p.line-9 {
        -webkit-line-clamp: 8;
        font-size: 14px;
        line-height: 22px;
    }
    .crs_unlock {
        padding: 230px 0 30px;
    }
    .crs_unlock h2 {
        padding: 0 10px 4px;
    }
    .crs_unlock_item {
        width: 100%;
        align-items: center;
    }
    .crs_unlock_item p {
        font-size: 16px;
        line-height: 24px;
    }
    .crs_unlock_item svg {
        width: 42px;
        height: 42px;
    }
}
</style>`;

const dataIcons = {
    'quiz': `
        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
            <g clip-path="url(#clip0_3379_63752)">
                <path d="M40.7381 37.6171V52.9345C40.7381 56.2887 38.1433 59.0011 34.9344 59.0011H8.61328C5.40437 59.0011 2.80957 56.2888 2.80957 52.9345V14.4963C2.80957 11.1484 5.40437 8.42969 8.61328 8.42969H22.0086C20.1062 11.4063 18.9804 14.9494 18.9443 18.7252C18.8901 24.4896 21.3043 29.6815 25.1332 33.2119C25.3319 33.3944 25.4583 33.6461 25.4703 33.9292L25.964 42.2174C26.0181 43.0479 26.9212 43.4885 27.5593 42.9977L34.0734 38.0072C34.278 37.8436 34.5309 37.7806 34.7898 37.8184C36.9046 38.0885 38.8936 38.0025 40.7381 37.6171Z" fill="#CCE0F1"/>
                <path d="M14.0478 16.5863V19.9389C14.0478 20.5633 13.5383 21.0722 12.9134 21.0722H9.56307C8.93809 21.0722 8.42871 20.5633 8.42871 19.9389V16.5863C8.42871 15.962 8.93809 15.4531 9.56307 15.4531H12.9135C13.5384 15.4531 14.0478 15.962 14.0478 16.5863Z" fill="#027DB8"/>
                <path d="M14.0478 26.4223V29.7748C14.0478 30.3992 13.5383 30.9081 12.9134 30.9081H9.56307C8.93809 30.9081 8.42871 30.3992 8.42871 29.7748V26.4223C8.42871 25.798 8.93809 25.2891 9.56307 25.2891H12.9135C13.5384 25.2891 14.0478 25.798 14.0478 26.4223Z" fill="#027DB8"/>
                <path d="M14.0478 36.2504V39.6029C14.0478 40.2273 13.5383 40.7362 12.9134 40.7362H9.56307C8.93809 40.7362 8.42871 40.2273 8.42871 39.6029V36.2504C8.42871 35.6261 8.93809 35.1172 9.56307 35.1172H12.9135C13.5384 35.1171 14.0478 35.626 14.0478 36.2504Z" fill="#027DB8"/>
                <path d="M14.0478 46.0863V49.4389C14.0478 50.0633 13.5383 50.5722 12.9134 50.5722H9.56307C8.93809 50.5722 8.42871 50.0633 8.42871 49.4389V46.0863C8.42871 45.462 8.93809 44.9531 9.56307 44.9531H12.9135C13.5384 44.9531 14.0478 45.462 14.0478 46.0863Z" fill="#027DB8"/>
                <path opacity="0.1" d="M41.4334 37.5589V39.4458C39.4673 39.7956 37.4663 39.861 35.4081 39.6375L28.993 44.3453C27.1702 45.6954 24.5513 44.4781 24.4028 42.205L23.9202 34.3978C19.5775 30.4325 17.1277 24.8339 17.1896 18.9693C17.2205 15.3257 18.2599 11.8675 20.0353 8.86719H22.1881C20.2333 11.7932 19.0765 15.2762 19.0394 18.9879C18.9837 24.6544 21.4644 29.7581 25.3988 33.2287C25.603 33.4081 25.7329 33.6555 25.7452 33.9338L26.2525 42.0812C26.3081 42.8976 27.2361 43.3308 27.8918 42.8483L34.5853 37.9425C34.7956 37.7817 35.0554 37.7198 35.3214 37.7569C37.4943 38.0223 39.5381 37.9378 41.4334 37.5589Z" fill="black"/>
                <path d="M56.5406 19.1654C56.5406 30.2763 46.8452 39.2133 35.3241 37.7566C35.0551 37.7195 34.7953 37.7845 34.5819 37.9422L27.8933 42.8498C27.2346 43.3321 26.3069 42.8962 26.2512 42.0797L25.7501 33.9346C25.7316 33.6563 25.6018 33.4059 25.3977 33.2294C21.4642 29.7598 18.9871 24.6575 19.0429 18.9892C19.1358 9.18336 27.0397 0.936151 36.8363 0.453665C47.6255 -0.0844799 56.5406 8.50601 56.5406 19.1654Z" fill="#017922"/>
                <path d="M37.7863 26.8702C36.8671 26.8702 36.1221 26.1252 36.1221 25.2059V21.2366C36.1221 19.7323 37.1492 18.4012 38.5651 18.0717C40.096 17.7155 41.1771 16.3655 41.1939 14.7891C41.2129 12.9619 39.6222 11.3468 37.7901 11.3441C37.7889 11.3441 37.7869 11.3441 37.7856 11.3441C35.9102 11.3441 34.389 12.8678 34.389 14.7523C34.389 15.6716 33.644 16.4166 32.7248 16.4166C31.8055 16.4166 31.0605 15.6716 31.0605 14.7523C31.0605 11.0789 34.0254 8.01562 37.7855 8.01562H37.7953C41.4713 8.02104 44.5618 11.1479 44.5222 14.8245C44.4897 17.8944 42.4115 20.5302 39.451 21.2813L39.4503 25.2058C39.4505 26.1252 38.7055 26.8702 37.7863 26.8702Z" fill="white"/>
                <path d="M36.6179 31.767C35.9455 31.1085 35.9787 30.0019 36.6179 29.4172C37.2303 28.7981 38.3491 28.7981 38.9679 29.4172C39.0413 29.4904 39.1141 29.5768 39.1739 29.6701C39.5979 30.2764 39.5468 31.1999 38.9679 31.7669C38.3181 32.4175 37.2487 32.4118 36.6179 31.767Z" fill="white"/>
                <path d="M23.1991 39.1747H20.4926C20.1507 39.1747 19.874 38.8976 19.874 38.5561C19.874 38.2144 20.1507 37.9375 20.4926 37.9375H23.1991C23.541 37.9375 23.8177 38.2145 23.8177 38.5561C23.8177 38.8976 23.541 39.1747 23.1991 39.1747Z" fill="white"/>
                <path d="M24.1856 43.6671H20.4926C20.1507 43.6671 19.874 43.3901 19.874 43.0485C19.874 42.707 20.1507 42.4299 20.4926 42.4299H24.1856C24.5275 42.4299 24.8042 42.707 24.8042 43.0485C24.8042 43.3901 24.5275 43.6671 24.1856 43.6671Z" fill="white"/>
                <path d="M34.8744 50.0653H20.4926C20.1507 50.0653 19.874 49.7883 19.874 49.4467C19.874 49.105 20.1507 48.8281 20.4926 48.8281H34.8744C35.2163 48.8281 35.493 49.1051 35.493 49.4467C35.493 49.7883 35.2163 50.0653 34.8744 50.0653Z" fill="white"/>
                <path d="M32.4778 54.5575H20.4926C20.1507 54.5575 19.874 54.2804 19.874 53.9389C19.874 53.5973 20.1507 53.3203 20.4926 53.3203H32.4779C32.8198 53.3203 33.0965 53.5973 33.0965 53.9389C33.0965 54.2804 32.8198 54.5575 32.4778 54.5575Z" fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_3379_63752">
                <rect width="59" height="59" fill="white"/>
                </clipPath>
            </defs>
        </svg>`,
    'yoga': `
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.1648 58.2418C47.1648 59.2121 46.3785 59.9996 45.407 59.9996H14.5938C13.6223 59.9996 12.8359 59.2121 12.8359 58.2418C12.8359 57.2715 13.6223 56.484 14.5938 56.484H17.5012C18.8254 56.484 19.9 56.048 20.7848 55.1527C23.0277 52.8816 23.5375 48.2059 23.5551 46.3203H36.4469C36.4691 48.2141 36.9871 52.9016 39.2207 55.1574C40.1043 56.0504 41.1777 56.484 42.4996 56.484H45.407C46.3785 56.484 47.1648 57.2715 47.1648 58.2418Z" fill="#272727"/>
            <path d="M47.1646 58.2418C47.1646 59.2121 46.3783 59.9996 45.4068 59.9996H30.0928V46.3203H36.4467C36.4689 48.2141 36.9869 52.9016 39.2205 55.1574C40.1041 56.0504 41.1775 56.484 42.4994 56.484H45.4068C46.3783 56.484 47.1646 57.2715 47.1646 58.2418Z" fill="#272727"/>
            <path d="M57.549 5.24414V42.7805C57.549 44.3953 56.24 45.7043 54.6252 45.7043H5.39355C3.77871 45.7043 2.46973 44.3953 2.46973 42.7805V5.24414C2.46973 3.6293 3.77871 2.32031 5.39355 2.32031H54.6252C56.24 2.32031 57.549 3.6293 57.549 5.24414Z" fill="#EEF5F6"/>
            <path d="M57.5498 5.24414V42.7805C57.5498 44.3953 56.2408 45.7043 54.626 45.7043H30.0928V2.32031H54.626C56.2408 2.32031 57.5498 3.6293 57.5498 5.24414Z" fill="#D6EAEC"/>
            <path d="M30.0926 44.3203H5.50898C4.40977 44.3203 3.51562 43.4262 3.51562 42.327V5.50898C3.51562 4.40977 4.40977 3.51562 5.50898 3.51562H30.0926L33.0802 1.41727L30.0926 0H5.50898C2.47148 0 0 2.47148 0 5.50898V42.327C0 45.3645 2.47148 47.8359 5.50898 47.8359H30.0926L33.0802 45.7086L30.0926 44.3203Z" fill="#027DB8"/>
            <path d="M51.7969 9.96875C52.7677 9.96875 53.5547 9.18175 53.5547 8.21094C53.5547 7.24012 52.7677 6.45312 51.7969 6.45312C50.8261 6.45312 50.0391 7.24012 50.0391 8.21094C50.0391 9.18175 50.8261 9.96875 51.7969 9.96875Z" fill="#D84F87"/>
            <path d="M11.8388 9.96875H8.19531C7.22453 9.96875 6.4375 9.18172 6.4375 8.21094C6.4375 7.24016 7.22453 6.45312 8.19531 6.45312H11.8388C12.8096 6.45312 13.5966 7.24016 13.5966 8.21094C13.5966 9.18172 12.8096 9.96875 11.8388 9.96875Z" fill="#B5D9DD"/>
            <path d="M60.0002 5.50898V42.327C60.0002 45.3645 57.5287 47.8359 54.4912 47.8359H30.0928V44.3203H54.4912C55.5904 44.3203 56.4846 43.4262 56.4846 42.327V5.50898C56.4846 4.40977 55.5904 3.51562 54.4912 3.51562H30.0928V0H54.4912C57.5287 0 60.0002 2.47148 60.0002 5.50898Z" fill="#027DB8"/>
            <path d="M52.9688 37.9766C52.9688 38.9469 52.1813 39.7344 51.2109 39.7344H8.78906C7.81875 39.7344 7.03125 38.9469 7.03125 37.9766C7.03125 37.0063 7.81875 36.2188 8.78906 36.2188H51.2109C52.1813 36.2188 52.9688 37.0063 52.9688 37.9766Z" fill="#F9CAFC"/>
            <path d="M52.9689 37.9766C52.9689 38.9469 52.1814 39.7344 51.2111 39.7344H30.0928V36.2188H51.2111C52.1814 36.2188 52.9689 37.0063 52.9689 37.9766Z" fill="#F6A1FF"/>
            <path d="M41.3633 41.9917C40.3925 41.9917 39.6055 41.2047 39.6055 40.2339V35.7188C39.6055 34.748 40.3925 33.9609 41.3633 33.9609C42.3341 33.9609 43.1211 34.748 43.1211 35.7188V40.2339C43.1211 41.2047 42.3341 41.9917 41.3633 41.9917Z" fill="#935ED0"/>
            <g clip-path="url(#clip0_3379_63775)">
            <path d="M32.035 28.5782C31.1821 29.6136 29.9741 30.6781 29.9325 30.6781C29.9207 30.69 29.4502 30.2749 29.225 30.0652C23.0555 24.3449 23.3018 15.5502 29.9276 10.0625C36.0145 15.1038 36.7039 22.9099 32.035 28.5782Z" fill="#F6A1FF"/>
            <path d="M34.9971 18.9305C34.713 21.308 33.726 23.6386 32.0356 25.6912C31.1828 26.7266 29.9744 27.7913 29.9329 27.7913C29.9277 27.7965 25.5297 24.5396 24.8594 18.929C25.2456 15.6969 26.93 12.5457 29.9282 10.0625C32.6915 12.3511 34.5814 15.4282 34.9971 18.9305Z" fill="#F9CAFC"/>
            <path d="M29.9994 30.6904C29.9922 30.6905 30.005 30.6907 29.9316 30.6889C34.2344 27.1218 35.8496 22.157 34.7456 17.5407C37.2232 16.2154 40.0312 15.7802 42.7842 16.0406C43.5688 24.3907 37.8769 30.6212 29.9994 30.6904Z" fill="#F6A1FF"/>
            <path d="M31.5088 29.1926C31.7254 28.9617 32.0227 28.6032 32.0346 28.5887C32.0346 28.5271 36.2996 24.0367 34.7461 17.5404C37.1216 16.2698 39.7986 15.8177 42.4429 16.012C42.5327 22.9247 38.0537 28.2175 31.5088 29.1926Z" fill="#F9CAFC"/>
            <path d="M29.922 30.6893C22.0679 30.5105 16.4353 24.3451 17.2146 16.0411C19.9406 15.7821 22.6946 16.2094 25.1248 17.4731C23.8954 22.4948 25.9202 27.3646 29.922 30.6893Z" fill="#F6A1FF"/>
            <path d="M27.9995 28.8008C21.8996 27.6732 17.6015 22.6822 17.5566 16.012C20.1602 15.8213 22.7816 16.2534 25.1256 17.4724C24.0958 21.6788 25.3797 25.7604 27.9995 28.8008Z" fill="#F9CAFC"/>
            <path d="M29.928 17.9041C30.1558 17.9041 30.3404 17.7194 30.3404 17.4917V15.8421C30.3404 15.6143 30.1558 15.4297 29.928 15.4297C29.7003 15.4297 29.5156 15.6143 29.5156 15.8421V17.4917C29.5156 17.7194 29.7003 17.9041 29.928 17.9041Z" fill="#F6A1FF"/>
            <path d="M39.6862 19.674C39.5156 19.523 39.255 19.5388 39.104 19.7093L37.6548 21.3456C37.4189 21.6119 37.6109 22.0315 37.9633 22.0315C38.0772 22.0315 38.1907 21.9845 38.2721 21.8925L39.7214 20.2562C39.8724 20.0857 39.8566 19.825 39.6862 19.674Z" fill="#F6A1FF"/>
            <path d="M20.7514 19.7092C20.6003 19.5388 20.3397 19.523 20.1693 19.674C19.9987 19.825 19.983 20.0856 20.1339 20.2561L21.5832 21.8924C21.6647 21.9844 21.7781 22.0313 21.8921 22.0313C22.2447 22.0313 22.4362 21.6115 22.2007 21.3455L20.7514 19.7092Z" fill="#F6A1FF"/>
            </g>
            <defs>
            <clipPath id="clip0_3379_63775">
            <rect width="25.7143" height="25.7143" fill="white" transform="translate(17.1426 7.14062)"/>
            </clipPath>
            </defs>
        </svg>`,
    'chakra': `
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3379_63804)">
            <path d="M30.0014 59.9968C46.569 59.9968 59.9998 46.5661 59.9998 29.9984C59.9998 13.4308 46.569 0 30.0014 0C13.4337 0 0.00292969 13.4308 0.00292969 29.9984C0.00292969 46.5661 13.4337 59.9968 30.0014 59.9968Z" fill="#AF469A"/>
            <path d="M30.0014 59.9968C46.569 59.9968 59.9998 46.5661 59.9998 29.9984C59.9998 13.4308 46.569 0 30.0014 0C13.4337 0 0.00292969 13.4308 0.00292969 29.9984C0.00292969 46.5661 13.4337 59.9968 30.0014 59.9968Z" fill="#F9CAFC"/>
            <path d="M30.0018 54.1892C43.3629 54.1892 54.1941 43.358 54.1941 29.997C54.1941 16.6359 43.3629 5.80469 30.0018 5.80469C16.6408 5.80469 5.80957 16.6359 5.80957 29.997C5.80957 43.358 16.6408 54.1892 30.0018 54.1892Z" fill="#279ED6"/>
            <path d="M30.0018 54.1892C43.3629 54.1892 54.1941 43.358 54.1941 29.997C54.1941 16.6359 43.3629 5.80469 30.0018 5.80469C16.6408 5.80469 5.80957 16.6359 5.80957 29.997C5.80957 43.358 16.6408 54.1892 30.0018 54.1892Z" fill="#F6A1FF"/>
            <path d="M30.0014 48.3895C40.1557 48.3895 48.3875 40.1577 48.3875 30.0033C48.3875 19.8489 40.1557 11.6172 30.0014 11.6172C19.847 11.6172 11.6152 19.8489 11.6152 30.0033C11.6152 40.1577 19.847 48.3895 30.0014 48.3895Z" fill="#C172B2"/>
            <path d="M30.0009 42.5818C36.9486 42.5818 42.5809 36.9496 42.5809 30.0019C42.5809 23.0541 36.9486 17.4219 30.0009 17.4219C23.0531 17.4219 17.4209 23.0541 17.4209 30.0019C17.4209 36.9496 23.0531 42.5818 30.0009 42.5818Z" fill="#9B5391"/>
            <path d="M35.9001 16.7685C35.9001 19.8104 34.9066 21.7071 34.0457 23.6621C32.5886 26.9711 27.4172 26.9751 25.9583 23.6621C25.3582 22.2992 23.8256 19.3036 24.1305 16.2532C24.4125 13.5739 26.8883 11.4062 30.002 11.4062C33.2044 11.4062 35.9001 13.7559 35.9001 16.7685Z" fill="#F9CFAC"/>
            <path d="M35.8728 16.2514C35.7106 18.8056 34.9175 20.3485 34.0451 22.3297C32.588 25.6387 27.4165 25.6427 25.9576 22.3297C25.0689 20.3117 24.2955 18.8063 24.1299 16.2514C24.5973 11.8095 30.6127 9.738 34.1721 12.9746C35.1132 13.831 35.7385 14.9753 35.8728 16.2514Z" fill="#FFE4CC"/>
            <path d="M35.8988 16.7607C35.8988 17.5931 35.8176 18.3967 35.6702 19.1496C34.9805 16.9546 32.7441 15.2692 30.0007 15.2692C27.2648 15.2692 25.0153 16.9475 24.3194 19.1496C24.1644 18.3494 24.0656 17.5485 24.0895 16.7669C24.1844 13.6538 26.7116 11.3984 30.0006 11.3984C33.236 11.3984 35.8988 13.7773 35.8988 16.7607Z" fill="#6D6D6D"/>
            <path d="M35.8993 16.7567C35.8993 18.2499 36.06 16.6378 34.3631 15.0923C31.9555 12.9041 28.0483 12.9028 25.6394 15.0923C23.9505 16.6277 24.1032 18.2485 24.1032 16.7567C24.1032 13.8224 26.7039 11.3516 29.9929 11.3516C33.2282 11.3516 35.8993 13.7733 35.8993 16.7567Z" fill="#6D6D6D"/>
            <path d="M32.9494 9.92439V12.1888H27.0513C27.0513 9.81952 27.0293 9.70654 27.1166 9.3087C27.4008 7.96337 28.5982 6.97656 30.0003 6.97656C31.6297 6.97656 32.9494 8.29299 32.9494 9.92439Z" fill="#6D6D6D"/>
            <path d="M38.8744 26.9122C38.4075 26.444 37.8051 26.1912 37.1918 26.1537C37.0804 26.1462 38.021 26.1489 22.9728 26.1489C22.2942 26.1489 21.63 26.4102 21.1293 26.9122C19.9863 28.3413 20.0925 28.2079 20.0322 28.2851C21.5909 36.6303 22.629 33.728 22.629 46.7907H37.3747C37.3747 38.7088 37.6788 37.2552 38.4607 34.3755C39.8844 29.31 39.4421 30.4734 39.5421 30.3221C39.7532 29.428 39.9715 28.315 39.9715 28.2827C39.9114 28.2094 40.0481 28.3797 38.8744 26.9122Z" fill="#B3CEC9"/>
            <path d="M37.4286 26.7876C37.0033 26.3611 36.444 26.1484 35.8858 26.1484C34.6449 26.1484 25.5805 26.1484 24.3268 26.1484C22.8378 26.1484 22.5775 26.7738 21.6543 27.9366C22.7148 33.5949 23.7108 33.4214 23.7994 40.2493C23.8436 43.6441 26.6056 46.374 30.0006 46.374C33.3862 46.374 36.1576 43.6534 36.2018 40.2493C36.2545 36.1994 36.6038 34.7453 37.0892 33.0112C38.0948 29.4243 37.9197 29.8432 37.987 29.6414C38.1336 29.0271 38.3471 27.9757 38.3471 27.9354C38.296 27.8735 38.4195 28.0273 37.4286 26.7876Z" fill="#CAE0DD"/>
            <path d="M24.6804 31.2369C21.2175 34.6999 22.3142 33.6029 18.2053 37.7119C17.1118 38.8054 15.6324 39.4248 14.0878 39.4393C12.185 39.4393 11.7807 39.4852 3.02222 39.4852C1.03712 39.4852 -0.45772 37.6082 0.128822 35.6834C0.501988 34.4396 1.64798 33.5884 2.95206 33.5884C3.63549 32.2215 5.37129 31.7522 6.63292 32.6146C8.40391 33.8268 9.72699 33.5912 14.02 33.5569L20.5628 27.0129C21.7226 25.8555 23.5957 25.8594 24.7505 27.0298C25.8964 28.1959 25.8326 30.0846 24.6804 31.2369Z" fill="#F9CFAC"/>
            <path d="M50.6444 54.6387C50.6444 57.599 48.2456 60.0008 45.2823 60.0008H14.7216C10.4447 60.0008 7.92893 55.248 10.2254 51.7172C10.7791 50.8641 11.5745 50.1681 12.543 49.7383L22.6291 46.7891H37.3748L47.4609 49.7383C49.3993 50.5997 50.6444 52.5236 50.6444 54.6387Z" fill="#5FC68F"/>
            <path d="M50.6054 54.0005C50.2891 56.6421 48.0417 58.718 45.2817 58.718C43.9313 58.718 42.8295 57.6239 42.8295 56.2658V54.0316L44.5399 53.1764L33.9572 54.6882C33.0521 54.8175 32.1289 54.6678 31.3111 54.2588C29.83 53.5183 28.3918 53.5536 27.1358 54.1816C26.2233 54.6379 25.1821 54.7705 24.1835 54.5565L13.7526 52.3212L17.1733 54.0316V56.2658C17.1733 57.6202 16.0754 58.718 14.7211 58.718C11.9669 58.718 9.71474 56.648 9.39746 54.0005C9.61967 52.1354 10.8103 50.5071 12.5425 49.7383L22.6286 46.7891H37.3743L47.4604 49.7383C49.1997 50.5113 50.3831 52.1404 50.6054 54.0005Z" fill="#7ADBAE"/>
            <path d="M25.578 56.3039C22.317 57.9343 21.9993 57.9708 21.5297 58.707C21.2892 59.0834 21.1545 59.526 21.1545 59.9898H18.2051V54.4609C24.8342 56.1179 23.3817 55.7549 25.578 56.3039Z" fill="#F9CFAC"/>
            <path d="M41.7978 54.4609V59.9898H21.1543C21.1543 59.0767 21.6761 58.2548 22.4735 57.8561C26.2026 55.9915 25.1886 56.5631 27.0637 55.3129C28.5902 54.2964 30.7731 54.9268 31.3836 56.7614L31.4756 57.0403L41.7978 54.4609Z" fill="#F9CFAC"/>
            <path d="M23.8676 55.8763C22.3883 56.616 22.1333 56.6916 21.7434 57.1379C20.8236 58.1914 19.6663 58.707 18.2051 58.707V54.4609L23.8676 55.8763Z" fill="#FFE4CC"/>
            <path d="M41.798 54.4609V58.707H22.6737C22.2112 58.707 22.0358 58.075 22.4735 57.8561C26.2027 55.9915 25.1886 56.5631 27.0638 55.3129C28.5902 54.2964 30.7732 54.9268 31.3837 56.7614L31.4756 57.0403L41.798 54.4609Z" fill="#FFE4CC"/>
            <path d="M59.9988 36.563C59.9855 38.1936 58.6065 39.4867 56.9747 39.4867C51.4804 39.4867 53.9301 39.4961 45.9104 39.4395C45.9337 39.4624 43.5872 39.5041 41.7965 37.7134C38.437 34.3539 38.033 33.95 35.3214 31.2383C33.5013 29.4181 34.6035 26.3004 37.1903 26.1543C37.9739 26.1024 38.8184 26.395 39.439 27.0143L45.9818 33.5584C50.1956 33.592 51.5893 33.8341 53.3689 32.6161C54.6305 31.7536 56.3663 32.2229 57.0497 33.5898C58.685 33.5898 60.0118 34.9165 59.9988 36.563Z" fill="#F9CFAC"/>
            <path d="M25.457 28.2299C25.1631 29.2411 25.3449 28.8791 18.2054 36.0186C17.0681 37.1559 15.5359 37.7422 14.0745 37.7471C5.9336 37.7745 8.34811 37.7919 3.0223 37.7919C1.676 37.7919 0.501467 36.9101 0.128906 35.6835C0.502072 34.4397 1.64806 33.5885 2.95215 33.5885C3.63558 32.2216 5.37137 31.7523 6.633 32.6147C8.404 33.8269 9.72707 33.5913 14.0201 33.557L20.5629 27.013C22.1638 25.4155 24.8449 26.1535 25.457 28.2299Z" fill="#FFE4CC"/>
            <path d="M59.873 35.6834C59.4993 36.9099 58.3235 37.7929 56.9748 37.7929C51.4805 37.7929 53.9302 37.8024 45.9105 37.7457C45.9338 37.7686 43.5873 37.8103 41.7966 36.0196C34.927 29.1501 34.8477 29.2723 34.5449 28.2309C35.1615 26.1391 37.8449 25.4233 39.439 27.014L45.9818 33.5581C50.1956 33.5917 51.5893 33.8339 53.3689 32.6158C54.6306 31.7533 56.3664 32.2226 57.0498 33.5895C58.3516 33.5895 59.499 34.4396 59.873 35.6834Z" fill="#FFE4CC"/>
            <path d="M32.8846 9.30647C32.7201 10.331 31.4912 11.1269 30.0009 11.1269C28.5107 11.1269 27.2817 10.331 27.1172 9.30647C27.7709 6.21131 32.244 6.27203 32.8846 9.30647Z" fill="#6D6D6D"/>
            </g>
            <defs>
            <clipPath id="clip0_3379_63804">
            <rect width="60" height="60" fill="white"/>
            </clipPath>
            </defs>
        </svg>`
}

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
  "Q1: What do I need to get started with the at-home yoga video classes?": `All you need is a device to stream the video classes (like a computer, tablet, or smart TV), a stable internet connection, and a little space to move! No special equipment is needed to start; a yoga mat is recommended, but feel free to use a soft surface like a carpet until you’re ready to invest in one.`,
  "Q2: Are these video classes suitable for absolute beginners?": `Absolutely! Our yoga video classes cater to every starting point, including absolute beginners. The personalization quiz helps us understand your current level and recommend classes that you’ll find accessible and enjoyable. Plus, each video offers variations to suit your comfort and ability.`,
  "Q3: How is my personalized yoga plan created?": `Your personalized yoga plan is crafted based on the answers you provide in our quick and fun quiz. The quiz assesses your current yoga level, preferences, goals, and any specific needs or limitations you might have. Using this data, we curate a selection of video classes that align with your unique yoga journey.`,
  "Q4: Can I switch between video classes or am I stuck with my initial personalized plan?": `Flexibility is key in yoga and in how you use our platform! While your initial plan is crafted to suit you, you’ll have access to our full library to explore and enjoy. Feel free to try new classes and modify your journey as you progress or as your preferences change.`,
  "Q5: How does the free trial work, and what happens afterward?": `Our free trial allows you to explore a selection of personalized yoga video classes without any charge, typically for a period of one to two weeks (depending on the ongoing offers). Once the trial period ends, you will be automatically subscribed to continue your journey without interruption.`,
};

let faqOption = "";

for (const key in dataFaq) {
  faqOption += faq(key, dataFaq[key]);
}

const reviewData = [
    {
        'author': 'John, 39',
        'comments': `I started with your website about a month ago and it's been a revelation. I was waiting to see how much I would use it before committing to a subscription, and I'm thoroughly impressed. The quality of teaching is outstanding, and it's been a delightful addition to my routine.`
    },
    {
        'author': 'Sue, 45',
        'comments': `I've been a fan of David's classes for many years. They've been incredibly helpful, especially during periods of back discomfort. Sharing his classes with others has been a joy, and I'm looking forward to joining as a full member in the future. David truly is a gem in the yoga world.`
    },
    {
        'author': 'Diane, 40',
        'comments': `After nearly a year of using DoYogaWithMe's free services, I've become such a fan that I upgraded to a paid subscription. This platform offers the most positive and transformative yoga experience I've ever had, with noticeable changes in my body and a deep alignment with the values of DoYogaWithMe`
    },
    {
        'author': 'Marilyn, 65',
        'comments': `After a year of exploring the free classes, the exceptional quality of instruction was the key reason I chose to subscribe. The teachers are outstanding, making it easy and enjoyable to practice yoga right at home. It's a wonderful blend of guidance and personal growth.`
    },
    {
        'author': 'Susan, 58',
        'comments': `DYWM, particularly instructors like David and Melissa, has been life-changing. Understanding my core better has resolved my back problems, and I've lost significant weight. I am deeply grateful for finding DYWM during the early months of the pandemic and for the physical transformation it has brought.`
    },
    {
        'author': 'Jean, 33',
        'comments': `Finding your yoga videos, especially the deep release ones for hips, hamstrings, and lower back, has been a game-changer for me, particularly during challenging times like Covid and natural disasters. As a long-time yoga practitioner, I've discovered new insights through your videos and have even recommended them to friends and family.`
    }
]

let reviewOption = "";

for (let i = 0; i < reviewData.length; i++) {
    reviewOption += slide(reviewData[i], i);
}

const html = `
    <header class="crs_header d-flex justify-content-center">
        <img src="${dir}logo.png" alt="logo" class="d-md-block d-none">
        <img src="${dir}logo-white.png" alt="logo" class="d-md-none">
    </header>
    <header class="crs_header_sticky d-flex justify-content-center">
        <img src="${dir}logo-white.png" alt="logo">
    </header>
    <section class="crs_offer d-flex align-items-center">
        <div class="container">
            <div class="pt-md-5">
                <h1 class="mb-md-3 mb-2">Yoga That Comes to You!</h1>
                <p class="pt-md-0 pt-1">Embark on a Yoga Journey from Your Home – our exclusive video classes are crafted for every shape, size, and starting point, ensuring a tailor-made experience just for you.</p>
                <a href="https://www.doyogawithme.com/personalization" class="crs_btn blue mt-3">Start Personalization Quiz</a>
            </div>
        </div>
    </section>
    <section class="crs_unlock">
        <div class="container">
            <h2 class="text-md-center mb-md-4">Unlock Your Personal Home Yoga Studio!</h2>
            <div class="d-flex flex-wrap">
                <div class="crs_unlock_item d-flex mt-3">
                    ${dataIcons.quiz}
                    <p>Take a quick quiz about your goals and experience.</p>
                </div>
                <div class="crs_unlock_item d-flex mt-3">
                    ${dataIcons.yoga}
                    <p>Receive curated classes aligned with your needs from our selection of 1000+ classes</p>
                </div>
                <div class="crs_unlock_item d-flex mt-3">
                    ${dataIcons.chakra}
                    <p>Follow your plan and adjust as you grow.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="crs_community crs_community_collection" >
        <div class="container d-lg-flex align-items-center">
            <a href="https://www.doyogawithme.com/yoga-classes" target=”_blank” >
                <img class="crs_video" src="${dir}video${media ? '-2' : ''}.png" alt="video img">
            </a>
            <div>
                <h2 class="mb-md-4 mb-2">Our classes collection</h2>
                <p class="mb-md-4 pt-md-0 pt-1">Dive into our rich collection of over 1,000 classes, handpicked from the best coaches, tailored especially for ordinary people seeking extraordinary yoga experiences.</p>
                <a href="https://www.doyogawithme.com/personalization" class="crs_btn blue d-md-block d-none">Start Personalization Quiz</a>
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
    <section class="crs_community">
        <div class="container d-lg-flex align-items-center">
            <img class="crs_surface" src="${dir}surface1.svg" alt="surface1">
            <img class="crs_img" src="${dir}image-11.png" alt="image">
            <div>
                <h2 class="mb-md-4 mb-2">Your At-Home Yoga Exploration Starts Now!</h2>
                <p class="mb-md-4 pt-md-0 pt-1">Dive into a personalized yoga experience with our free trial – explore video classes designed with your comfort, pace, and space in mind.</p>
                <a href="https://www.doyogawithme.com/personalization" class="crs_btn blue d-md-block d-none">Start Personalization Quiz</a>
            </div>
        </div>
    </section>
    <section class="crs_faq">
        <div class="container">
            <h2 class="mb-md-5 mb-4">Got Questions?<br class="d-md-none"> We’ve Got Answers!</h2>
            <ul>${faqOption}</ul>
        </div>
    </section>
    <div class="crs_sticky d-md-none">
        <a href="https://www.doyogawithme.com/personalization" class="crs_btn blue mx-auto d-md-none">Start Personalization Quiz</a>
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

    if (media !== 'mobile') {
        window.addEventListener('scroll', () => {
            if (document.querySelector('.crs_offer').getBoundingClientRect().bottom < 0) {
                document.querySelector('.crs_header_sticky').classList.add('active')
            } else {
                document.querySelector('.crs_header_sticky').classList.remove('active')
            }
        })
    }

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