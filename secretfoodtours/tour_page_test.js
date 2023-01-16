let dir = 'https://conversionratestore.github.io/projects/secretfoodtours/img/';

let styleFood = /* html */` 
<style class="js-style"> 
.buy-2 {
    /*padding: 15px 40px;
    display: block;
    width: fit-content;
    height: fit-content; */
    display: none;
}

.tour-drinks {
    padding: 42px 0 34px!important;
}
.tour-drinks::before {
    content: none;
}
.tour-drinks .food_block {
    margin-top: 25px;
}
.tour-drinks .food_block .title, .tour-options-drinks .title-drinks {
    font-family: 'JosefinSans-Bold', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-transform: uppercase;
    color: #212529;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
}
.tour-options-drinks .title-drinks span {
    font-family: 'JosefinSans-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    display: block;
    color: #212529;
    text-transform: none;
    margin-top: 2px;
}
.tour-drinks .food_block .title svg, .tour-options-drinks .title-drinks svg {
    margin-right: 10px;
    flex-shrink: 0;
}
.tour-options-drinks .title {
    font-family: 'JosefinSans-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
}
.tour-options-drinks .mini_ul {
    padding: 4px 0 16px;
}
.tour-options-drinks .note {
    font-family: 'JosefinSans-Regular', sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 22px;
    margin-top: 10px;
    color: #8A9E95;
}
.tour-drinks .food_block li, .mini_ul li {
    font-size: 16px;
    line-height: 28px;
    color: #212529;
    padding-left: 14px;
    position: relative;
}
.tour-drinks .food_block li::before, .mini_ul li::before {
    content: "•"; 
    position: absolute;
    top: 0;
    left: 0;
    color: #C39958;}
.tour-drinks p {
    font-family: 'JosefinSans-Regular', sans-serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: #8A9E95;
}
.tour-drinks p em {
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
}

.destination_page_wr .similar {
    margin-top: 80px;
}
@media (min-width: 768px) {
    .tour-drinks .food_block {
        width: 50%;
    }
    .tour-drinks .food_wr {
        display: flex;
    }
}

@media (max-width: 767px) {
    .tour-drinks {
        padding: 42px 30px 34px !important;
    }
    .tour-drinks .food_block .title {
        font-size: 16px;
    }
    .tour-drinks p em {
        line-height: 20px;
    }
    .form_tour .pr, .form_tour .pr span:not(.not-tour) {
        font-size: 16px;
    } 
    .title-drinks+span {
        font-family: 'JosefinSans-Regular', sans-serif;
        font-size: 16px;
        padding: 10px 0 16px !important;
    }
}
</style>`

let style = /* html */`
    <style>
    .popup_form_tour {
        position: sticky;
        top: 140px;
        z-index: 20;
    }
    .destination_page_wr .destination_content .popup_form_tour {
        position: absolute;
        top: -160px;
        right: -1px;
        padding: 40px 75px;
        max-width: 500px;
        width: 100%;
        z-index: 20;
    }
    #plugin  {
        position: absolute!important;
        margin: 0 auto 10px!important;
        background-color: transparent;
        padding: 0!important;
        opacity: 0;
        pointer-events: none!important;
    }
    #plugin iframe {
        height: auto!important;
        min-height: 820px!important;
        margin: 0!important;
    }
    .destination_page_wr .tour-intro .plugin-col {
        display: block;
        background: none;
    }
    /*form*/
    .form_tour {
        font-family: 'JosefinSans-Regular', sans-serif;
        background: #FAFAFA;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 30px rgba(0, 0, 0, 0.15);
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #859F94;
        text-align: center;
        height: fit-content;
        padding: 30px;
        width: 100%;
    }
    .form_tour .pr {
        font-size: 16px;
        line-height: 16px;
        color: #144732;
        border: 3px dashed #EBEBE7;
        padding: 13px 7px 11px;
        width: 100%;
        display: block;
    }
    // .form_tour .pr span.currency:not(.not-tour):first-letter {
    //     font-size: 24px!important;
    // }
    .form_tour .pr span.not-tour {
        font-size: 14px;
        line-height: 22px;
    }
    .form_tour .pr span:not(.not-tour) {
        font-size: 36px;
        line-height: 36px;
    }
    .form_tour .btn-green, .btn-gold {
        border: 3px solid;
        font-family: 'JosefinSans-Bold', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;
        margin-top: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 10px 11px;
        width: 100%;
    }
    .btn-gold svg {
        margin-top: -4px;
        margin-right: 8px;
    }
    .form_tour .btn-green {
        color: #FFFFFF;
        background: #144732;
        border-color: #144732;
    }
    .btn-gold {
        color: #C39958;
        border-color: #C39958;
    }
    .text-center {
        text-align: center;
    }
    /* flex */
    .flex-center-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    /* special options */
    .special-options {
        padding: 40px 0 20px;
        max-width: 400px;
        margin: 0 auto;
    }
    .special-options h2 {
        font-family: 'JosefinSans-Bold', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-transform: uppercase;
        color: #C39958;
        padding-bottom: 8px;
        text-align: center;
        margin: 0;
    }
    .special-options img {
        margin: 24px auto 0;
        display: block;
    }
    @media screen and (max-width: 1400px) {
        .destination_page_wr .destination_content .popup_form_tour {
            background: #fff;
            padding: 40px 10px 10px 20px!important;
            max-width: 360px!important;
            margin-right: 0px!important;
            z-index: 20;
        }
    }
    @media (min-width: 1200px) {
        .form_tour h3 {
            font-family: 'JosefinSans-Bold', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            text-transform: uppercase;
            color: #C39958;
            margin-bottom: 20px;
        }
        .form_tour {
            margin: 50px -15px 0;
            width: calc(100% + 30px);
        }
        .form_tour .pr {
            margin-bottom: 16px;
            min-height: 60px;
        }
    }
    @media (max-width: 1199px) {
        .awards-desktop {
            display: none;
        }
        .form_tour {
            padding: 16px 20px;
            display: flex;
            align-items: center;
        }
        .popup_form_tour {
            position: fixed;
            top: auto;
            width: 100%;
            bottom: 0;
            left: 0;
            z-index: 9999;
        }
        .form_tour .pr {
            border: none;
            text-align: left;
            width: fit-content;
            white-space: nowrap;
            padding: 0 20px 0 0;
        }
        .form_tour > div {
            width: 100%;
        }
        .form_tour .btn-green, .form_tour .btn-gold {
            margin-top: 0;
        }
        .form_tour .btn-gold {
           display: none;
        }
        .form_tour .pr, .form_tour .pr span:not(.not-tour) {
            font-size: 18px;
            line-height: 24px;
        }
        // .form_tour .pr span:not(.not-tour):first-letter {
        //     font-size: 14px;
        // }
        .destination_page_wr .tour_fixed_btn {
            bottom: 120px!important;
        }
        #tour_f_btn, .awards-mobile {
            display: none;
        }  
    }
    </style>`;

let styleBook = /* html */`
<style>
    body {
        padding: 0 24px 60px;
    }
    .main_container, .col-md-5, .col-md-12, .country_tours, footer, .help_center {
        display: none;
    }
    .about-cont {
        padding: 0 0 60px 0!important;
    }
    .header-book {
        padding: 30px 0;
    }
    h1 {
        font-size: 24px;
        line-height: 24px;
        text-transform: uppercase;
        text-align: center;
        color: #212529;
        padding: 20px 0!important;
        margin: 0 0 4px 0;
    }
    .col-md-4 {
        flex: 0 0 100%!important;
        max-width: 100%!important;
        display: flex;
        justify-content: center;
    }
    .btn-gold {
        border: 3px solid;
        font-family: 'JosefinSans-Bold', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 15px 27px 11px;
        width: 100%;
        color: #C39958;
        border-color: #C39958;
        width: fit-content;
    }
    .btn-gold svg {
        margin: -4px 10px 0 0;
    }
    iframe {
        margin-bottom: 16px;
    }
    @media (max-width: 767px) {
        .header-book {
            padding: 16px 0;
        }
        h1 {
            font-size: 18px;
            line-height: 18px;
            padding: 14px 0!important;
            margin: 0 0 2px 0;
        }
        .header-book .logo {
            width: 150px;
        }
        .btn-gold svg {
            margin: 0;
        }
        .btn-gold {
            padding: 11px;
        }
        .p_100 {
            padding: 0!important;
        }
    }
</style>`
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

let device = detectMob() == true ? 'mobile' : 'desktop';

function pushDataLayer(action, label = '') {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': `Exp: booking_form_flow_${device}`,
        'eventAction': action,
        'eventLabel': label
    });
}

//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
let viewed1 = false;
let viewed2 = false;
let viewed3 = false;

let intervalFood = setInterval(() => {
    if (document.querySelector('.tour-drinks .food_block .title') != null && document.querySelector('.tour-drinks > p') && !window.location.href.includes('upgraded-drinks')) {
        clearInterval(intervalFood)
        document.querySelector('.js-style') == null ? document.body.insertAdjacentHTML('afterbegin', styleFood) : ''

        //tour drinks
        if (document.querySelector('.tour-drinks') != null) {
            if (document.querySelector('.destination-info') != null) {
                document.querySelector('.destination-info').after(document.querySelector('.tour-drinks'));
                document.querySelector('.tour-drinks').style = 'padding: 0';
            }
            if (document.querySelector('.destination_descr') != null) {
                document.querySelector('.destination_descr').after(document.querySelector('.tour-drinks'));
                document.querySelector('.tour-drinks').classList.add('container');
                document.querySelector('.tour-drinks > div').classList.add('col-md-12', 'col-xl-8', 'px-0');
                document.querySelector('.tour-drinks > p').classList.add('col-md-12', 'col-xl-8', 'px-0');
                if (!document.querySelector('.tour-intro > div > div.row > div.col-md-12.col-xl-8')) {
                    document.querySelector('.food_wr').classList.add('col-md-12', 'col-xl-8', 'px-0');
                }
                document.querySelector('.tour-drinks').style = 'padding-top: 42px';
            }
            if (document.querySelector('[style="background-color: #0a88ff; padding:10px;margin-bottom:10px;"]') != null) {
                document.querySelector('.tour-drinks').before(document.querySelector('[style="background-color: #0a88ff; padding:10px;margin-bottom:10px;"]'))
                document.querySelector('[style="background-color: #0a88ff; padding:10px;margin-bottom:10px;"]').style.margin = 'margin: 15px 0 0 0;'
            }
        }
        let drinks = document.querySelectorAll('.tour-drinks .food_block .title');
        drinks.forEach(item => {
            let title = item.innerText.trim().toUpperCase()
            if (title == 'THE FOOD') {
                item.insertAdjacentHTML('afterbegin', /* html */`
                <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6532 6.07178C21.5636 7.00318 23.1371 8.46985 24.2028 10.3125C24.3761 10.6116 24.2736 10.9937 23.9751 11.1664C23.8762 11.2238 23.7688 11.2506 23.6627 11.2506C23.4466 11.2506 23.2366 11.139 23.1212 10.9388C22.1801 9.31219 20.7909 8.01762 19.1051 7.19485C18.795 7.0435 18.6662 6.66932 18.8177 6.3593C18.9678 6.04922 19.3407 5.9192 19.6532 6.07178Z" fill="#C39958"/>
                    <path d="M0.625019 15H1.90664C2.20887 8.63039 7.06078 3.44367 13.2841 2.62541C13.1831 2.39525 13.125 2.14207 13.125 1.875C13.125 0.841055 13.9661 0 15 0C16.0339 0 16.875 0.841055 16.875 1.875C16.875 2.14213 16.8169 2.39525 16.7159 2.62541C22.9392 3.44367 27.7911 8.63039 28.0934 15H29.375C29.7204 15 30 15.2796 30 15.625V16.2513C30 17.1918 29.7241 18.1031 29.2017 18.8868C28.7372 19.5838 27.9596 20 27.1216 20H2.87842C2.041 20 1.26281 19.5838 0.797752 18.8862C0.275858 18.1024 0 17.1918 0 16.2513V15.625C0 15.2796 0.279551 15 0.625019 15ZM15 1.25004C14.6552 1.25004 14.375 1.53018 14.375 1.87506C14.375 2.21988 14.6551 2.50008 15 2.50008C15.3449 2.50008 15.625 2.21994 15.625 1.87506C15.625 1.53018 15.3448 1.25004 15 1.25004ZM15 3.75C8.66309 3.75 3.4848 8.74336 3.15668 15H26.8433C26.5152 8.74336 21.3369 3.75 15 3.75ZM1.24998 16.2513C1.24998 16.944 1.45324 17.616 1.83838 18.1934C2.07094 18.5419 2.45971 18.7501 2.87842 18.7501H27.1216C27.5403 18.7501 27.9297 18.5419 28.1622 18.1928C28.5468 17.6154 28.75 16.944 28.75 16.2513V16.2501H1.24998V16.2513Z" fill="#C39958"/>
                </svg>`)
            } else if (title == 'DRINKS') {
                item.insertAdjacentHTML('afterbegin', /* html */`
                <svg width="30" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.375 9.84375C19.375 6.09797 18.4698 0.622969 18.4309 0.391406C18.4126 0.282038 18.3562 0.182698 18.2715 0.111037C18.1869 0.0393749 18.0796 3.25538e-05 17.9688 0H2.03125C1.92036 3.25538e-05 1.81308 0.0393749 1.72846 0.111037C1.64384 0.182698 1.58736 0.282038 1.56906 0.391406C1.53016 0.622969 0.625 6.09797 0.625 9.84375C0.625 13.4419 1.48797 18.1542 8.59375 18.697V26.7188C8.59375 26.8431 8.54436 26.9623 8.45646 27.0502C8.36855 27.1381 8.24932 27.1875 8.125 27.1875H5.78125C5.15988 27.1882 4.56417 27.4354 4.12479 27.8748C3.68541 28.3142 3.43824 28.9099 3.4375 29.5312C3.4375 29.6556 3.48689 29.7748 3.57479 29.8627C3.6627 29.9506 3.78193 30 3.90625 30H16.0938C16.2181 30 16.3373 29.9506 16.4252 29.8627C16.5131 29.7748 16.5625 29.6556 16.5625 29.5312C16.5618 28.9099 16.3146 28.3142 15.8752 27.8748C15.4358 27.4354 14.8401 27.1882 14.2188 27.1875H11.875C11.7507 27.1875 11.6315 27.1381 11.5435 27.0502C11.4556 26.9623 11.4062 26.8431 11.4062 26.7188V18.697C18.512 18.1542 19.375 13.4419 19.375 9.84375ZM2.43109 0.9375H17.5689C17.7325 1.98422 18.1713 4.95 18.3545 7.67812C17.8513 7.25943 17.2171 7.03052 16.5625 7.03125C14.5094 7.03125 12.2111 8.63344 11.4062 9.24844C10.5855 8.63344 8.21875 7.03125 5.78125 7.03125C4.30635 6.99948 2.85538 7.40743 1.61312 8.20312C1.77016 5.34375 2.25672 2.05219 2.43109 0.9375ZM18.4375 9.84375C18.4375 10.341 18.24 10.8179 17.8883 11.1696C17.5367 11.5212 17.0598 11.7188 16.5625 11.7188C14.9556 11.7188 13.0469 10.4761 12.1769 9.84375C13.0469 9.21141 14.9556 7.96875 16.5625 7.96875C17.0598 7.96875 17.5367 8.16629 17.8883 8.51793C18.24 8.86956 18.4375 9.34647 18.4375 9.84375ZM1.5625 9.84375C1.5625 8.99438 3.44453 7.96875 5.78125 7.96875C8.38703 7.96875 11.0781 10.1817 11.1063 10.2037C11.2263 10.3041 14.0781 12.6562 16.5625 12.6562C17.1855 12.6562 17.7907 12.448 18.2819 12.0647C17.8047 15.067 16.0042 17.8125 10 17.8125C2.52156 17.8125 1.5625 13.5539 1.5625 9.84375ZM11.875 28.125H14.2188C14.5095 28.1254 14.793 28.2156 15.0304 28.3835C15.2679 28.5513 15.4475 28.7885 15.5448 29.0625H4.45516C4.55246 28.7885 4.73214 28.5513 4.96956 28.3835C5.20697 28.2156 5.4905 28.1254 5.78125 28.125H8.125C8.49796 28.125 8.85565 27.9768 9.11937 27.7131C9.38309 27.4494 9.53125 27.0917 9.53125 26.7188V18.7411C9.68641 18.7448 9.83922 18.75 10 18.75C10.1608 18.75 10.3136 18.7448 10.4688 18.7411V26.7188C10.4688 27.0917 10.6169 27.4494 10.8806 27.7131C11.1444 27.9768 11.502 28.125 11.875 28.125Z" fill="#C39958"/>
                    <path d="M3.51372 3.2757C3.53501 3.27852 3.55646 3.27993 3.57794 3.27992C3.69108 3.27972 3.80033 3.23862 3.88553 3.16418C3.97074 3.08975 4.02614 2.987 4.04153 2.87492L4.10716 2.40617C4.12469 2.28303 4.09258 2.15797 4.0179 2.0585C3.98093 2.00925 3.93461 1.96776 3.8816 1.93641C3.82859 1.90506 3.76992 1.88446 3.70895 1.87578C3.58581 1.85825 3.46075 1.89035 3.36129 1.96503C3.26182 2.03971 3.19609 2.15084 3.17856 2.27398L3.11294 2.74273C3.10388 2.80409 3.10709 2.86664 3.12238 2.92675C3.13767 2.98686 3.16474 3.04334 3.20202 3.09292C3.23929 3.14249 3.28604 3.18417 3.33955 3.21555C3.39305 3.24693 3.45225 3.26737 3.51372 3.2757Z" fill="#C39958"/>
                    <path d="M3.14131 6.56294C3.15688 6.56468 3.17253 6.56546 3.18819 6.56528C3.30431 6.56517 3.41626 6.52195 3.50234 6.44401C3.58843 6.36607 3.64251 6.25895 3.65413 6.14341C3.71694 5.50122 3.78866 4.86981 3.86038 4.27966C3.86898 4.21801 3.86523 4.15527 3.84932 4.09509C3.83342 4.03491 3.8057 3.97851 3.76776 3.92916C3.72983 3.87981 3.68244 3.83851 3.62838 3.80767C3.57431 3.77683 3.51464 3.75707 3.45286 3.74954C3.39107 3.74201 3.3284 3.74685 3.26851 3.7638C3.20862 3.78075 3.1527 3.80945 3.10402 3.84824C3.05534 3.88703 3.01487 3.93512 2.98498 3.98972C2.95509 4.04431 2.93636 4.10431 2.92991 4.16622C2.85678 4.76341 2.7846 5.40232 2.72131 6.05247C2.70967 6.17579 2.74732 6.2987 2.82601 6.39434C2.90471 6.48999 3.01807 6.55061 3.14131 6.56294Z" fill="#C39958"/>
                    <path d="M4.375 10.3125H5.3125V11.25H4.375V10.3125Z" fill="#C39958"/>
                    <path d="M3.4375 12.6562H4.375V13.5938H3.4375V12.6562Z" fill="#C39958"/>
                    <path d="M6.25 14.0625H7.1875V15H6.25V14.0625Z" fill="#C39958"/>
                </svg>`)
            }
        })
        window.addEventListener('scroll', () => {
            if (isScrolledIntoView(document.querySelector('.tour-drinks')) == true && viewed1 == false) {
                viewed1 = true;
                pushDataLayer('Visibility What youll taste text block');
            }
        })
        if(document.querySelector('.title-drinks div span') && window.innerWidth < 768){
            document.querySelector('.title-drinks div span').innerText = 'You can add upgrade at checkout'
            document.querySelector('.title-drinks').after(document.querySelector('.title-drinks div span'))
            
        }
    }
}, 50)
let intervalDrinks = setInterval(() => {

    if (document.querySelector('.mini_ul') != null && document.querySelector('.what_we_do') != null && !window.location.href.includes('upgraded-drinks')) {
        clearInterval(intervalDrinks)
        document.querySelector('.js-style') == null ? document.body.insertAdjacentHTML('afterbegin', styleFood) : ''

        document.querySelector('.what_we_do').insertAdjacentHTML('beforebegin',/* html */`
        <div class="tour-options-drinks">
            <div class="title-drinks">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 13.6456C30 12.9852 29.4646 12.4497 28.8041 12.4497H27.2437C27.2326 12.4022 27.2153 12.3562 27.1925 12.313L25.3018 8.89618L24.8235 2.99072C24.7997 2.69409 24.5515 2.46587 24.254 2.4668H21.3326C21.035 2.46587 20.7869 2.69409 20.7631 2.99072L20.2847 8.8791L18.8952 11.4019L17.5057 8.8791L17.0273 2.99072C17.0036 2.69409 16.7554 2.46587 16.4579 2.4668H13.5364C13.2389 2.46587 12.9907 2.69409 12.967 2.99072L12.4943 8.8791L11.1048 11.4019L9.71526 8.8791L9.2369 2.99072C9.21313 2.69409 8.96498 2.46587 8.66743 2.4668H5.74601C5.44846 2.46587 5.20031 2.69409 5.17654 2.99072L4.69818 8.8791L2.80752 12.296C2.78467 12.3391 2.76744 12.3851 2.75626 12.4326H1.1959C0.53545 12.4326 0 12.9681 0 13.6285V19.3689C0.00491173 19.5916 0.0719675 19.8086 0.193622 19.9953C0.0760251 20.1831 0.0128844 20.4 0.0113895 20.6217V26.3449C0.0144505 26.9988 0.54207 27.5289 1.1959 27.5351H28.8041C29.4646 27.5351 30 26.9997 30 26.3392V20.6217C29.9991 20.4 29.9359 20.1829 29.8178 19.9953C29.9359 19.8076 29.9991 19.5906 30 19.3689V13.6456ZM21.8337 3.61714H23.7073L23.844 5.32557H21.7198L21.8337 3.61714ZM21.3212 9.3119C21.3598 9.24164 21.383 9.16398 21.3895 9.08411L21.623 6.46452H23.9579L24.1686 9.0955C24.175 9.17537 24.1983 9.25303 24.2369 9.32329L25.9453 12.4497H19.6241L21.3212 9.3119ZM14.0661 3.61714H15.9396L16.0763 5.32557H13.9237L14.0661 3.61714ZM13.5535 9.3119C13.5921 9.24164 13.6154 9.16398 13.6219 9.08411L13.8326 6.46452H16.1674L16.3781 9.0955C16.3846 9.17537 16.4079 9.25303 16.4465 9.32329L18.1549 12.4497H11.828L13.5535 9.3119ZM6.26993 3.61714H8.16629L8.30296 5.32557H6.13326L6.26993 3.61714ZM5.7574 9.3119C5.79598 9.24164 5.81926 9.16398 5.82574 9.08411L6.03645 6.46452H8.3713L8.582 9.0955C8.58848 9.17537 8.61176 9.25303 8.65034 9.32329L10.3588 12.4497H4.03759L5.7574 9.3119ZM28.861 26.3449C28.861 26.3764 28.8356 26.4019 28.8041 26.4019H1.1959C1.16444 26.4019 1.13895 26.3764 1.13895 26.3449V20.6217C1.13895 20.5902 1.16444 20.5648 1.1959 20.5648H28.8041C28.8356 20.5648 28.861 20.5902 28.861 20.6217V26.3449ZM28.861 19.3689C28.861 19.4003 28.8356 19.4258 28.8041 19.4258H1.1959C1.16444 19.4258 1.13895 19.4003 1.13895 19.3689V13.6456C1.13895 13.6142 1.16444 13.5887 1.1959 13.5887H28.8041C28.8356 13.5887 28.861 13.6142 28.861 13.6456V19.3689Z" fill="#C39958"/>
                <path d="M2.7223 15.3645C3.04625 15.3645 3.30886 15.1019 3.30886 14.778C3.30886 14.454 3.04625 14.1914 2.7223 14.1914C2.39835 14.1914 2.13574 14.454 2.13574 14.778C2.13574 15.1019 2.39835 15.3645 2.7223 15.3645Z" fill="#C39958"/>
                <path d="M2.7223 18.8157C3.04625 18.8157 3.30886 18.5531 3.30886 18.2291C3.30886 17.9052 3.04625 17.6426 2.7223 17.6426C2.39835 17.6426 2.13574 17.9052 2.13574 18.2291C2.13574 18.5531 2.39835 18.8157 2.7223 18.8157Z" fill="#C39958"/>
                <path d="M2.7223 22.345C3.04625 22.345 3.30886 22.0824 3.30886 21.7584C3.30886 21.4345 3.04625 21.1719 2.7223 21.1719C2.39835 21.1719 2.13574 21.4345 2.13574 21.7584C2.13574 22.0824 2.39835 22.345 2.7223 22.345Z" fill="#C39958"/>
                <path d="M2.7223 25.7981C3.04625 25.7981 3.30886 25.5355 3.30886 25.2116C3.30886 24.8876 3.04625 24.625 2.7223 24.625C2.39835 24.625 2.13574 24.8876 2.13574 25.2116C2.13574 25.5355 2.39835 25.7981 2.7223 25.7981Z" fill="#C39958"/>
                <path d="M27.278 15.3645C27.6019 15.3645 27.8645 15.1019 27.8645 14.778C27.8645 14.454 27.6019 14.1914 27.278 14.1914C26.954 14.1914 26.6914 14.454 26.6914 14.778C26.6914 15.1019 26.954 15.3645 27.278 15.3645Z" fill="#C39958"/>
                <path d="M27.278 18.8157C27.6019 18.8157 27.8645 18.5531 27.8645 18.2291C27.8645 17.9052 27.6019 17.6426 27.278 17.6426C26.954 17.6426 26.6914 17.9052 26.6914 18.2291C26.6914 18.5531 26.954 18.8157 27.278 18.8157Z" fill="#C39958"/>
                <path d="M27.278 22.345C27.6019 22.345 27.8645 22.0824 27.8645 21.7584C27.8645 21.4345 27.6019 21.1719 27.278 21.1719C26.954 21.1719 26.6914 21.4345 26.6914 21.7584C26.6914 22.0824 26.954 22.345 27.278 22.345Z" fill="#C39958"/>
                <path d="M27.278 25.7981C27.6019 25.7981 27.8645 25.5355 27.8645 25.2116C27.8645 24.8876 27.6019 24.625 27.278 24.625C26.954 24.625 26.6914 24.8876 26.6914 25.2116C26.6914 25.5355 26.954 25.7981 27.278 25.7981Z" fill="#C39958"/>
                </svg>
                <div>Optional Drinks Package Upgrade
                    <span>Get additional drinks - you can add upgrade at checkout</span>
                </div>
            </div>
        </div>`)

        if (document.querySelector('.tour-drinks') == null) {
            document.querySelector('.tour-options-drinks').style = 'padding-top: 40px;'
        }
        if (document.querySelector('.what_we_do .note')) {
            document.querySelector('.tour-options-drinks > div').after(document.querySelector('.what_we_do .note'));
        }
        if (document.querySelector('.mini_ul') != null) {
            document.querySelector('.tour-options-drinks > div').after(document.querySelector('.mini_ul'));
        }
        if (document.querySelector('.what_we_do .title') != null) {
            document.querySelector('.mini_ul').after(document.querySelector('.what_we_do .title'));
        }

        window.addEventListener('scroll', () => {
            if (isScrolledIntoView(document.querySelector('.tour-options-drinks')) == true && viewed2 == false) {
                viewed2 = true;
                pushDataLayer('Visibility Optional drinks text block');
            }
        })
        document.querySelectorAll('.udp').forEach(item => {
            item.addEventListener('click', () => pushDataLayer('Click on upgrade drink package link'))
        })
    }


})
let intervalBook = setInterval(() => {
    if (window.location.href.includes('/book')) {
        clearInterval(intervalBook)

        document.body.insertAdjacentHTML('afterbegin', /* html */`
        <div class="header-book">
            <div class="container d-flex align-items-center justify-content-between">
                <a href="/" class="logo">
                    <img src="/img/logo.png?v3" srcset="/img/logo.png?v3 1x, /img/logo@2x.png?v3 2x" alt="Secret Food Tours" width="251" height="auto">
                </a>
                <a href="${document.referrer}" class="d-flex align-items-center btn-gold">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.0379 12.6438C8.35006 12.3459 8.31884 11.8992 8.0379 11.6014L4.26087 8.1764H13.2508C13.6566 8.1764 14 7.87858 14 7.46163V6.50859C14 6.12142 13.6566 5.79381 13.2508 5.79381H4.26087L8.0379 2.39863C8.31884 2.1008 8.35006 1.65407 8.0379 1.35624L7.35117 0.701031C7.07023 0.43299 6.57079 0.43299 6.28986 0.701031L0.234114 6.50859C-0.0780379 6.77663 -0.0780379 7.22337 0.234114 7.49141L6.28986 13.299C6.57079 13.567 7.03902 13.567 7.35117 13.299L8.0379 12.6438Z" fill="#C39958"/>
                    </svg>
                    <span class="d-md-block d-none">Back to tour details</span>
                </a>
            </div>
        </div>`)
        document.body.insertAdjacentHTML('afterbegin', styleBook)

        document.querySelector('.about-cont').insertAdjacentHTML('beforeend', `<img class="mx-auto d-block" src="${dir}awards-mobile.svg" alt="logos">`)

        pushDataLayer('Visibility pop up Calendar')

        //timer
        let countTimer = 0;
        let intervalTimer = setInterval(() => {
            countTimer += 1;
        }, 1000)

        document.querySelector('.btn-gold').addEventListener('click', (e) => {
            pushDataLayer('Close pop up Calendar')
            pushDataLayer('pop up Calendar', countTimer + ' second')
        })
    }
})

let interval = setInterval(() => {

    if (document.querySelector('.form_tour') == null && document.querySelector('#plugin') != null) {
        clearInterval(interval)

        document.body.insertAdjacentHTML('afterbegin', /* html */`
        <style>
            .heading.no-mobile+div {display: none;}
            footer{padding-bottom: 150px;}
            @media (max-width: 768px) {
            .whatsapp-link{bottom: 120px !important;}
            }
        </style>`)
        
        let formHTML = /* html */`
        <div class="popup_form_tour">
            <div class="form_tour">
                <h3 class="d-xl-block d-none">Book your tour</h3>
                <p class="pr d-flex justify-content-center align-items-center"></p>
                <p class="d-xl-block d-none available-daily">Available daily at: 11.00, 13.00, 15.00, 19.00</p>
                <div class="d-xl-block d-flex">
                    <button type="button" class="btn-green">Check availability</button>
                    <a href="/private-bookings" class="btn-gold">
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5138 7.75794V5.49791C12.5138 2.46634 10.0474 0 7.01586 0C3.98429 0 1.51795 2.46634 1.51795 5.49791V7.73662C1.17609 7.86704 0.837891 8.16127 0.837891 8.74412V11.822C0.837891 15.2285 3.60936 18 7.0159 18C10.4224 18 13.1938 15.2285 13.1938 11.822V8.74412C13.1938 8.19108 12.8639 7.8979 12.5138 7.75794ZM8.19009 14.3714C8.20943 14.4739 8.13995 14.5577 8.03568 14.5577H6.0193C5.91503 14.5577 5.84555 14.4739 5.86489 14.3714L6.18783 12.6598C5.94134 12.435 5.78664 12.1113 5.78664 11.7514C5.78664 11.0725 6.33698 10.5222 7.01586 10.5222C7.69473 10.5222 8.24507 11.0725 8.24507 11.7514C8.24507 12.1015 8.09848 12.4172 7.86359 12.6411L8.19009 14.3714ZM10.618 7.64822H3.41371V5.49791C3.41371 3.51171 5.02962 1.89576 7.01586 1.89576C9.00205 1.89576 10.618 3.51171 10.618 5.49791V7.64822Z" fill="#C39958"/>
                        </svg>
                        <span>Book a private tour</span>
                    </a>
                    <a href="/buy-gift/" class=" btn-gold">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.875 11.1429C0.875 11.625 1.25781 12 1.75 12H6.125V7.71429H0.875V11.1429ZM7.875 12H12.25C12.7148 12 13.125 11.625 13.125 11.1429V7.71429H7.875V12ZM13.125 3.42857H11.9492C12.1406 3.10714 12.25 2.75893 12.25 2.35714C12.25 1.07143 11.1562 0 9.84375 0C8.69531 0 7.95703 0.589286 7.02734 1.84821C6.07031 0.589286 5.33203 0 4.21094 0C2.87109 0 1.80469 1.07143 1.80469 2.35714C1.80469 2.75893 1.88672 3.10714 2.07812 3.42857H0.875C0.382812 3.42857 0 3.83036 0 4.28571V6.42857C0 6.66964 0.191406 6.85714 0.4375 6.85714H13.5625C13.7812 6.85714 14 6.66964 14 6.42857V4.28571C14 3.83036 13.5898 3.42857 13.125 3.42857ZM4.18359 3.42857C3.58203 3.42857 3.08984 2.97321 3.08984 2.35714C3.08984 1.76786 3.58203 1.28571 4.18359 1.28571C4.73047 1.28571 5.14062 1.39286 6.5625 3.42857H4.18359ZM9.84375 3.42857H7.46484C8.88672 1.39286 9.26953 1.28571 9.84375 1.28571C10.4453 1.28571 10.9375 1.76786 10.9375 2.35714C10.9375 2.97321 10.4453 3.42857 9.84375 3.42857Z" fill="#C39958"/>
                        </svg>
                        <span>Buy this tour as a gift</span>
                    </a>
                </div>
            </div>
        </div>`;

        //add style/html
        document.body.insertAdjacentHTML('afterbegin', style);
        document.querySelector('#plugin').insertAdjacentHTML('afterend', formHTML);

        //set price tour
        if (document.querySelector('.price') != null && !document.querySelectorAll('.price')[document.querySelectorAll('.price').length - 1].innerHTML.trim().includes('private bookings')) {
            let price = document.querySelectorAll('.price')[document.querySelectorAll('.price').length - 1];
            document.querySelector('.form_tour .pr').innerHTML = `${price.innerHTML}`
        } else {
            if (document.querySelector('#plugin [href="/private-bookings"]') != null) {

                if (detectMob() == true) {
                    document.querySelector('.form_tour').style = 'display: block!important';
                    document.querySelectorAll('.form_tour .btn-gold')[0].style = 'display: flex';
                    document.querySelector('.form_tour .pr').style = 'width: 100%; padding: 0;';
                } else {
                    if (window.matchMedia("(max-width: 1200px)").matches) {
                        document.querySelectorAll('.form_tour .btn-gold').forEach(item => {
                            item.querySelector('span').remove();
                            item.querySelector('svg').style.marginRight = '0';
                            item.style = 'width: 46px; margin-left: 10px;';
                            item.parentElement.style = 'margin-left: auto; width: fit-content;';
                        })
                    }
                }
                document.querySelector('.available-daily').remove();
                document.querySelector('.btn-green').remove();
                document.querySelector('.form_tour .pr').innerHTML = `<span class="not-tour" style="${detectMob() == true ? 'padding-bottom: 10px;': ''}">Currently, we're just accepting private tours.</span>`;
            }
        }

        //rearrange the image logo
        document.querySelector('.form_tour').after(document.querySelector('.awards-desktop'));
        document.querySelector('.awards-desktop img').src = dir + 'awards-mobile.svg';

        //hide/show popup
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-green')) {
                pushDataLayer('Pop up Book your Tour', 'Check availability button')
                window.location.href = 'https://www.secretfoodtours.com/' + window.location.pathname.split('/')[1] + '/book'
            }
        })

        //events
        document.querySelectorAll('.form_tour .btn-gold').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (index == 0) {
                    pushDataLayer('pop up Book your Tour', 'Buy as a gift button')
                } else {
                    pushDataLayer('pop up Book your Tour', 'Book a private tour button')
                }
            })
        })

        window.addEventListener('scroll', () => {
            if (isScrolledIntoView(document.querySelector('.form_tour')) == true && viewed3 == false) {
                viewed3 = true;
                pushDataLayer('Pop up Book your Tour', 'Visibility');
            }
        })

        if (detectMob() == true) {
            document.querySelector('.what_we_do').insertAdjacentHTML('beforebegin', `
            <div class="special-options">
                <h2>Special options</h2>
                <img src="${dir}awards-mobile.svg" alt="awards icons">
            </div>`)

            if (document.querySelector('.price') != null) {
                document.querySelector('.special-options h2').after(document.querySelectorAll('.form_tour .btn-gold')[1])
                document.querySelector('.special-options h2').after(document.querySelectorAll('.form_tour .btn-gold')[0])
            } else {
                document.querySelector('.special-options h2').after(document.querySelectorAll('.form_tour .btn-gold')[1])
            }
        } 

        pushDataLayer('loaded')
        let coockies = setInterval(function(){
            if(document.querySelector('.cookiealert')) {
                clearInterval(coockies)
                const mut = new MutationObserver((muts) => {
                    muts.forEach(item => {
                     console.log(item.target.classList)
                     if(item.target.classList.contains('show')) {
                         document.querySelector('.form_tour').style.bottom = `${document.querySelector('.cookiealert').clientHeight}px`
                     } else {
                         document.querySelector('.form_tour').style.bottom = '0'
                     }
                    })
                 })
         
                 mut.observe(document.querySelector('.cookiealert'), {
                     attributes: true
                 })
            }
        }, 30)
        
    }
})

//clarify
let isClarify = setInterval(() => {
    if (typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", `booking_form_flow_${device}`, "variant_1");
    }
}, 100)

let listing = setInterval(function(){
    if (document.querySelectorAll('.country_tours') && document.querySelector('.country_banner')) {
        clearInterval(listing)
        document.querySelector('footer').before(document.querySelector('.country_banner'))
        document.querySelector('.country_banner').style.marginBottom = '100px'
        document.querySelector('.country_tours').style.paddingTop = '0px'

        document.querySelectorAll('.cardx-tags+.card-buttons a').forEach(item => {
            if(item.innerText.toLowerCase() === 'book now') {
                item.innerText = 'Check availability'
            }
            item.style = 'width: fit-content; min-height: 39px;height: auto!important; '
            
            let letterUpper = item.innerText.charAt(0);
            item.innerHTML = item.innerHTML.replace(letterUpper, letterUpper.toUpperCase());
        })
    }
}, 50)
setTimeout(function(){
    clearInterval(listing)
}, 5000)

