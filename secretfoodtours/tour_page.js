
    let style = `
    <style>
    .destination_page_wr .destination_content .popup_form_tour {
        position: absolute;
        /* top: -240px; */
        top: -160px;
        right: -1px;
        background: #fff;
        padding: 40px 75px;
        max-width: 470px;
        width: 100%;
        z-index: 20;
    }
    // #plugin .heading, #plugin .price, #plugin .text-red, #plugin .text-pt, #plugin .text-pt-disclaimer, #plugin .buy {
    //     display: none;
    // }
    // #plugin {
    //     // margin: 0 auto;
    //     background-color: transparent;
    // }
    .destination_page_wr .tour-intro .plugin-col {
        display: block;
        background: none;
    }
    .tour-drinks {
        padding: 42px 0 34px;
    }
    .tour-drinks::before {
        content: none;
    }
    .tour-drinks .food_block {
        margin-top: 25px;
    }
    .tour-drinks .food_block .title {
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
    .tour-drinks .food_block .title svg {
        margin-right: 10px;
    }
    .tour-drinks .food_block li {
        font-size: 16px;
        line-height: 28px;
        color: #212529;
        padding-left: 14px;
        position: relative;
    }
    .tour-drinks .food_block li::before {
        content: "•"; 
        position: absolute;
        top: 0;
        left: 0;
        color: #C39958;}
    .tour-drinks p {
        font-family: 'JosefinSans-Light', sans-serif;
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
        padding: 13px 11px 11px;
        width: 100%;
        display: block;
    }
    .form_tour .pr span:not(.currency) {
        font-size: 36px;
        line-height: 36px;
    }
    .form_tour .btn-green, .form_tour .btn-gold {
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
    .form_tour svg {
        margin-top: -4px;
    }
    .form_tour .btn-green {
        color: #FFFFFF;
        background: #144732;
        border-color: #144732;
    }
    .form_tour .btn-gold {
        color: #C39958;
        border-color: #C39958;
    }
    /* pop-up */
    .popup_booking-flow .plugin {
        display: flex;
        justify-content: center;
    }
    .popup_booking-flow {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.7);
        padding: 10px;
        display: flex;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
    }
    .popup_booking-flow.active {
        opacity: 1;
        pointer-events: auto;
    }
    .popup_booking-flow.active .container {
        transform: translateY(0);
    }
    .popup_booking-flow .container {
        background: #FAFAFA;
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 2px 30px rgba(0, 0, 0, 0.15);
        max-width: 640px;
        margin: auto;
        width: 100%;
        position: relative;
        padding: 24px;
        transform: translateY(100px);
        transition: all 0.25s ease;
    }
    .popup_booking-flow .container h2 {
        font-family: 'JosefinSans-Bold', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        text-transform: uppercase;
        color: #212529;
        margin-bottom: 24px;
    }
    .btn-close {
        position: absolute;
        top: 14px;
        right: 14px;
        padding: 10px;
        border: none;
        background-color: transparent;
    }
    .btn-close svg {
        pointer-events: none;
    }
    .progressbar {
        margin-bottom: 30px;
    }
    .progressbar .line span {
        background: #E9EBED;
        width: 50px;
        height: 10px;
        margin: 0 0.5px;
    }
    .progressbar .line span:first-child {
        border-radius: 20px 0 0 20px;
    }
    .progressbar .line span:last-child {
        border-radius: 0 20px 20px 0;
    }
    .text-center {
        text-align: center;
    }
    .progressbar p {
        font-size: 14px;
        line-height: 14px;
        color: #144732;
        margin-top: 6px;
    }
    .suggested-tours {
        padding-top: 30px;
    }
    .suggested-tours h3 {
        font-family: 'JosefinSans-Bold', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        text-transform: uppercase;
        color: #212529;
        margin-bottom: 14px;
    }
    .suggested-tours li {
        padding: 17px 0;
        border-bottom: 1px solid #EEEEEE;
    }
    .suggested-tours .title {
        font-family: 'JosefinSans-Semi', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 18px;
        text-decoration-line: underline;
        color: #144732;
        margin-right: 16px;
    }

    .suggested-tours .pr {
        font-family: 'JosefinSans-Bold', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 18px;
        text-transform: uppercase;
        color: #144732;
        margin-right: 16px;
    }
    .rating {
        font-size: 18px;
        line-height: 18px;
        color: #212529;
    }
    .rating svg {
        margin-right: 3px;
    }
    /* flex */
    .flex-center-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .d-flex {
        display: flex;
    }
    .items-center {
        align-items: center;
    }
    .d-none {
        display: none;
    }
    @media (min-width: 768px) {
        .tour-drinks .food_block {
            width: 50%;
        }
        .tour-drinks .food_wr {
            display: flex;
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
        .d-xl-block {
            display: block;
        }
        .form_tour {
            margin: 50px -15px 0;
            width: calc(100% + 30px);
        }
        .form_tour .pr {
            margin-bottom: 16px;
        }
        .form_tour svg {
            margin-right: 8px;
        }
    }
    @media (max-width: 1199px) {
        .awards-desktop {
            display: none;
        }
        .form_tour {
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 9999;
            padding: 12px 20px;
        }
        .form_tour .pr {
            border: none;
            text-align: left;
        }
        .form_tour .btn-green, .form_tour .btn-gold {
            margin-top: 12px;
        }
        .form_tour .pr {
            padding: 0;
        }
        .form_tour .btn-gold {
            margin-left: 12px;
            width: 48px;
            flex-shrink: 0;
        }
        .form_tour .pr, .form_tour .pr span:not(.currency) {
            font-size: 24px;
            line-height: 24px;
        }
        .form_tour .pr span.currency {
            font-size: 14px;
        }
        .destination_page_wr .tour_fixed_btn {
            bottom: 120px!important;
        }
    }

    @media (max-width: 767px) {
        .tour-drinks .food_block .title {
            font-size: 16px;
        }
        .tour-drinks p em {
            line-height: 20px;
        }
    }
    </style>`;

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
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({
      'event': 'event-to-ga',
      'eventCategory': `Exp: booking_form_flow_${device}`,
      'eventAction': action,
      'eventLabel': label
  });
}

let countTimer = 0;

let timer = (popup) => {
    let intervalTimer = setInterval(() => {
        if (popup.classList.contains('active')) {
            countTimer += 1;
        } else {
            clearInterval(intervalTimer)
            pushDataLayer('pop up Calendar', countTimer)
        }
    }, 1000) 
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

let interval = setInterval(() => { 

    if (document.querySelector('.price') != null && document.querySelector('.form_tour') == null && document.querySelector('.tour-drinks .food_block .title') != null && document.querySelector('.plugin iframe') != null) {
        clearInterval(interval)
        let formHTML = `
        <div class="popup_form_tour">
            <div class="form_tour">
                <h3 class="d-xl-block d-none">Book your tour</h3>
                <p class="pr"></p>
                <p class="d-xl-block d-none">Available daily at: 11.00, 13.00, 15.00, 19.00</p>
                <div class="d-xl-block d-flex">
                    <button type="button" class=" btn-green">Check availability</button>
                    <a href="/buy-gift/" class=" btn-gold">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.875 11.1429C0.875 11.625 1.25781 12 1.75 12H6.125V7.71429H0.875V11.1429ZM7.875 12H12.25C12.7148 12 13.125 11.625 13.125 11.1429V7.71429H7.875V12ZM13.125 3.42857H11.9492C12.1406 3.10714 12.25 2.75893 12.25 2.35714C12.25 1.07143 11.1562 0 9.84375 0C8.69531 0 7.95703 0.589286 7.02734 1.84821C6.07031 0.589286 5.33203 0 4.21094 0C2.87109 0 1.80469 1.07143 1.80469 2.35714C1.80469 2.75893 1.88672 3.10714 2.07812 3.42857H0.875C0.382812 3.42857 0 3.83036 0 4.28571V6.42857C0 6.66964 0.191406 6.85714 0.4375 6.85714H13.5625C13.7812 6.85714 14 6.66964 14 6.42857V4.28571C14 3.83036 13.5898 3.42857 13.125 3.42857ZM4.18359 3.42857C3.58203 3.42857 3.08984 2.97321 3.08984 2.35714C3.08984 1.76786 3.58203 1.28571 4.18359 1.28571C4.73047 1.28571 5.14062 1.39286 6.5625 3.42857H4.18359ZM9.84375 3.42857H7.46484C8.88672 1.39286 9.26953 1.28571 9.84375 1.28571C10.4453 1.28571 10.9375 1.76786 10.9375 2.35714C10.9375 2.97321 10.4453 3.42857 9.84375 3.42857Z" fill="#C39958"/>
                        </svg>
                        <span class="d-xl-block d-none">Buy as a gift</span>
                    </a>
                    <a href="/private-bookings" class=" btn-gold">
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5138 7.75794V5.49791C12.5138 2.46634 10.0474 0 7.01586 0C3.98429 0 1.51795 2.46634 1.51795 5.49791V7.73662C1.17609 7.86704 0.837891 8.16127 0.837891 8.74412V11.822C0.837891 15.2285 3.60936 18 7.0159 18C10.4224 18 13.1938 15.2285 13.1938 11.822V8.74412C13.1938 8.19108 12.8639 7.8979 12.5138 7.75794ZM8.19009 14.3714C8.20943 14.4739 8.13995 14.5577 8.03568 14.5577H6.0193C5.91503 14.5577 5.84555 14.4739 5.86489 14.3714L6.18783 12.6598C5.94134 12.435 5.78664 12.1113 5.78664 11.7514C5.78664 11.0725 6.33698 10.5222 7.01586 10.5222C7.69473 10.5222 8.24507 11.0725 8.24507 11.7514C8.24507 12.1015 8.09848 12.4172 7.86359 12.6411L8.19009 14.3714ZM10.618 7.64822H3.41371V5.49791C3.41371 3.51171 5.02962 1.89576 7.01586 1.89576C9.00205 1.89576 10.618 3.51171 10.618 5.49791V7.64822Z" fill="#C39958"/>
                        </svg>
                        <span class="d-xl-block d-none">Book a private tour</span>
                    </a>
                </div>
            </div>
            <div class="popup_booking-flow">
                <div class="container">
                    <button type="button" class="btn-close">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3957 8.97447L17.5021 3.86808C18.166 3.25532 18.166 2.23404 17.5021 1.62128L16.3787 0.497872C15.766 -0.165957 14.7447 -0.165957 14.1319 0.497872L9.02553 5.60426L3.86808 0.497872C3.25532 -0.165957 2.23404 -0.165957 1.62128 0.497872L0.497872 1.62128C-0.165957 2.23404 -0.165957 3.25532 0.497872 3.86808L5.60426 8.97447L0.497872 14.1319C-0.165957 14.7447 -0.165957 15.766 0.497872 16.3787L1.62128 17.5021C2.23404 18.166 3.25532 18.166 3.86808 17.5021L9.02553 12.3957L14.1319 17.5021C14.7447 18.166 15.766 18.166 16.3787 17.5021L17.5021 16.3787C18.166 15.766 18.166 14.7447 17.5021 14.1319L12.3957 8.97447Z" fill="#144732"/>
                        </svg>
                    </button>
                    <div class="progressbar" style="display: none;">
                        <div class="line">
                            <span class="active"></span><span></span><span></span><span></span><span></span><span></span><span></span>
                        </div>
                        <p class="text-center">Choose your date</p>
                    </div>
                    <h2 class="text-center">${document.querySelector('.dest_title').innerText}</h2>
                    <div class="suggested-tours" style="display: none;">
                        <h3>Learn more about other available tours</h3>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>`;
    
        //add style/html
        document.body.insertAdjacentHTML('afterbegin', style);
        document.querySelector('#plugin').insertAdjacentHTML('afterend', formHTML);
    
        //add iframe in pop-up
        document.querySelector('.suggested-tours').after(document.querySelector('#plugin'))

        //set price tour
        let price = document.querySelector('.price');
        let currency = price.innerText.trim().charAt(0);
        document.querySelector('.form_tour .pr').insertAdjacentHTML('beforeend', `<span class="currency">${currency}</span>${price.innerHTML.replace(currency,'')}`)
    
        //rearrange the image logo
        document.querySelector('.form_tour').after(document.querySelector('.awards-desktop'));
    
        //tour drinks
        if (document.querySelector('.destination-info') != null) {
            document.querySelector('.destination-info').after(document.querySelector('.tour-drinks'));
        }
        if (document.querySelector('.destination_descr') != null) {
            document.querySelector('.destination_descr').after(document.querySelector('.tour-drinks'));
            document.querySelector('.tour-drinks').classList.add('container');
            document.querySelector('.tour-drinks').style = 'padding-top: 42p';
        }
    
        let drinks = document.querySelectorAll('.tour-drinks .food_block .title');
        drinks.forEach(item => {
            let title = item.innerText.trim().toUpperCase()
            if (title == 'THE FOOD') {
                item.insertAdjacentHTML('afterbegin',`
                <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6532 6.07178C21.5636 7.00318 23.1371 8.46985 24.2028 10.3125C24.3761 10.6116 24.2736 10.9937 23.9751 11.1664C23.8762 11.2238 23.7688 11.2506 23.6627 11.2506C23.4466 11.2506 23.2366 11.139 23.1212 10.9388C22.1801 9.31219 20.7909 8.01762 19.1051 7.19485C18.795 7.0435 18.6662 6.66932 18.8177 6.3593C18.9678 6.04922 19.3407 5.9192 19.6532 6.07178Z" fill="#C39958"/>
                    <path d="M0.625019 15H1.90664C2.20887 8.63039 7.06078 3.44367 13.2841 2.62541C13.1831 2.39525 13.125 2.14207 13.125 1.875C13.125 0.841055 13.9661 0 15 0C16.0339 0 16.875 0.841055 16.875 1.875C16.875 2.14213 16.8169 2.39525 16.7159 2.62541C22.9392 3.44367 27.7911 8.63039 28.0934 15H29.375C29.7204 15 30 15.2796 30 15.625V16.2513C30 17.1918 29.7241 18.1031 29.2017 18.8868C28.7372 19.5838 27.9596 20 27.1216 20H2.87842C2.041 20 1.26281 19.5838 0.797752 18.8862C0.275858 18.1024 0 17.1918 0 16.2513V15.625C0 15.2796 0.279551 15 0.625019 15ZM15 1.25004C14.6552 1.25004 14.375 1.53018 14.375 1.87506C14.375 2.21988 14.6551 2.50008 15 2.50008C15.3449 2.50008 15.625 2.21994 15.625 1.87506C15.625 1.53018 15.3448 1.25004 15 1.25004ZM15 3.75C8.66309 3.75 3.4848 8.74336 3.15668 15H26.8433C26.5152 8.74336 21.3369 3.75 15 3.75ZM1.24998 16.2513C1.24998 16.944 1.45324 17.616 1.83838 18.1934C2.07094 18.5419 2.45971 18.7501 2.87842 18.7501H27.1216C27.5403 18.7501 27.9297 18.5419 28.1622 18.1928C28.5468 17.6154 28.75 16.944 28.75 16.2513V16.2501H1.24998V16.2513Z" fill="#C39958"/>
                </svg>`)
            } else if (title == 'DRINKS') {
                item.insertAdjacentHTML('afterbegin',`
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
        //hide/show popup
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-green') || e.target.classList.contains('btn-close') || e.target.classList.contains('popup_booking-flow')) {
                document.querySelector('.popup_booking-flow').classList.toggle('active')
            }
            if (e.target.classList.contains('btn-green')) {
                pushDataLayer('Pop up Book your Tour','Check availability button')
                pushDataLayer( 'Visibility pop up Calendar')
                countTimer = 0;
                timer(document.querySelector('.popup_booking-flow'))
            } 
            if (e.target.classList.contains('btn-close') || e.target.classList.contains('popup_booking-flow')) {
                pushDataLayer('Close pop up Calendar')
                
            }
        })

        //events
        document.querySelectorAll('.form_tour .btn-gold').forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (index == 0) {
                    pushDataLayer('pop up Book your Tour','Buy as a gift button')
                } else {
                    pushDataLayer('pop up Book your Tour','Book a private tour button')
                }
            })
        })
        window.addEventListener('scroll', () => {
            if (isScrolledIntoView(document.querySelector('.form_tour')) == true && viewed3 == false) {
                viewed3 = true;
                pushDataLayer('Pop up Book your Tour','Visibility');
            }
            if (isScrolledIntoView(document.querySelector('.food_block .title')) == true) {
                document.querySelectorAll('.food_block .title').forEach(item => {
                    if (item.innerText == 'THE FOOD' && viewed1 == false) {
                        viewed1 = true;
                        pushDataLayer('Visibility What youll taste text block');
                    } else if (item.innerText == 'DRINKS' && viewed2 == false) {
                        viewed2 = true;
                        pushDataLayer( 'Visibility Optional drinks text block');
                    }
                })
            }   
        })
        document.querySelectorAll('.udp').forEach(item => {
            item.addEventListener('click', () => pushDataLayer('Click on upgrade drink package link'))
        })
  
        pushDataLayer('loaded')
    }

    // //sort best reviews
    // let sorBestReviews = [].slice.call(document.querySelectorAll('.country_tours .cardx-container-details')).sort(function (a, b) {
    //     return b.querySelector('.rate-tours').innerHTML.replace('(', '').replace(')', '') - a.querySelector('.rate-tours').innerHTML.replace('(', '').replace(')', '');  
    // });

    // let filterBestReviews = sorBestReviews.filter((item) => {
    //     return item.querySelector('.cardx-buttons-one').innerText.includes('book now')
    // })

    // // step 2
    // function setSuggestedTours(url, title, rating, price) {
    //     return `
    //     <li>
    //         <a href="${url}">
    //             <object class="flex-center-between">
    //                 <div class="d-flex items-center">
    //                     <p class="title">${title}</p>
    //                     <p class="rating">
    //                         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M8.09375 1.5625L6.0625 5.71875L1.46875 6.375C0.65625 6.5 0.34375 7.5 0.9375 8.09375L4.21875 11.3125L3.4375 15.8438C3.3125 16.6562 4.1875 17.2812 4.90625 16.9062L9 14.75L13.0625 16.9062C13.7812 17.2812 14.6562 16.6562 14.5312 15.8438L13.75 11.3125L17.0312 8.09375C17.625 7.5 17.3125 6.5 16.5 6.375L11.9375 5.71875L9.875 1.5625C9.53125 0.84375 8.46875 0.8125 8.09375 1.5625Z" fill="#F0AD4E"/>
    //                         </svg>
    //                         ${rating}
    //                     </p>
    //                 </div>
    //                 <div class="d-flex items-center">
    //                     <div class="pr">${price}</div>
    //                     <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                         <path d="M6.82136 6.45361C7.05955 6.20619 7.05955 5.79381 6.82136 5.54639L1.68715 0.185568C1.42249 -0.0618554 1.02552 -0.0618554 0.787334 0.185568L0.178638 0.81787C-0.0595468 1.06529 -0.0595468 1.47766 0.178639 1.75258L4.25425 5.98625L0.178639 10.2474C-0.0595464 10.5223 -0.0595464 10.9347 0.178639 11.1821L0.787335 11.8144C1.02552 12.0619 1.4225 12.0619 1.68715 11.8144L6.82136 6.45361Z" fill="#C39958"/>
    //                     </svg>
    //                 </div>
    //             </object>
    //         </a>
    //     </li>`
    // }

})

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", `booking_form_flow_${device}`, "variant_1");
    }
}, 100)
