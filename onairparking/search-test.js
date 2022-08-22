let style = `
<style class="js-style">
    .wrapper {
        z-index: 9;
        position: relative;
        background: #fff;
    }
    /*list parking*/
    .best_reviews, .lowest_price {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        border-radius: 3px;
        padding: 4px 6px 3px;
        white-space: nowrap;
        margin-bottom: 7px;
    }
    .lowest_price {
        background: #F37621;
        color: #FFFFFF;
    }
    .best_reviews {
        background: #FFFFFF;
        color: #515356;
    }
    .list_parking .btn {
        background: #069B27;
        border-radius: 3px;
        margin-right: 20px;
        padding: 4px 6px;
        font-weight: 500;
        font-size: 10px;
        line-height: 12px;
        color: #FFFFFF;
        text-transform: initial;
        border: none;
        margin-top: 10px;
    }
    #list_parking  {
        overflow: none;
    }
    .list_parking .btn_gray {
        background-color: #8d8d8d;
    }
    .list_parking > li {
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 19px rgba(0, 0, 0, 0.05), 0 2px 10px rgba(0, 0, 0, 0.06);
    }
    .list_parking > li:not(:last-child) {
        margin-bottom: 16px;
    }
    .name_parking {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
        color: #515356;
        margin-bottom: 10px;
    }
    .price_parking {
        background: #DADADA;
        border-radius: 3px;
        padding: 3px 6px 2px;
        line-height: 14px;
        color: #515356;
        font-size: 10px;
        margin-top: 10px;
    }
    .price_parking b {
        font-weight: 800;
        font-size: 12px;
    }
    .notes_parking {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .img_parking img {
        width: 102px;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 0px 0px 10px;
    }
    .info_parking {
        width: calc(100% - 102px);
        padding: 15px;
        flex-direction: column;
        font-size: 12px;
        line-height: 14px;
    }
    .info_parking ul > li {
        margin: 2.5px 0;
        color: #4A4A4A;
    }
    .info_parking ul > li b {
        white-space: nowrap;
    }
    .c-green {
        font-weight: 700;
        color: #069B27;
        padding: 30px 0 10px;
    }
    .c-red {
        color: #C40F0F;
        position: absolute;
        left: 0;
        top: 14px;
    }
    .rate_parking {
        padding-bottom: 17.5px;
    }
    .rate_parking svg {
        margin-right: 2px;
    }
    .swipe {
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.07), 0 -3px 50px rgba(0, 0, 0, 0.12);
        border-radius: 20px 20px 0 0;
        margin-top: -66px;
        transition: all 0.2s ease;
        position: relative;
        z-index: 2;
        background: #fff;
        min-height: 60vh;
    }
    .swipe-header {
        padding: 26px 16px 21px;
        position: relative;
    }
    .swipe-header:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 7px;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: #C4C4C4;
        pointer-events: none;
    }
    .count_parking {
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #515356;
    }
    .sort {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        text-align: right;
        color: #515356;
    }
    .sort button {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        text-align: right;
        text-decoration-line: underline;
        color: #3582E5;
    }
    .btns-edit {
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 2;
    }
    .btns-edit svg {
        flex-shrink: 0;
    }
    .btns-edit button {
        background: #FFFFFF;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 0, 0, 0.1);
        border-radius: 86px;
        padding: 10px 15px;
        font-size: 12px;
        line-height: 14px;
        color: #515356;
        text-align: left;
        min-height: 48px;
    }

    .btn-edit-name {
        width: 62%;
    }
    .btn-edit-date  {
        width: 35%;
    }
    #__next > section > nav > div > div > div.flex.w-12.h-12 {
        width: 42px!important;
        height: 42px!important;
    }
    #__next > section > nav > div > div > div.flex.w-12.h-12 > button > svg.h-6.w-6 {
        width: 16px!important;
        height: 16px!important;
    }
    #__next > section > nav > div > div.h-14 {
        height: 50px!important;
    }
    #__next > section > nav > div > div > div.flex.items-center > div > a > span > span > img {
        height: 40px!important;
    }
    #map-main {
        min-height: calc(100vh - 50px)
    }
    body {
        overflow: hidden;
    }
    body.fix {
        overflow-y: auto;
    }
    body.active .swipe {
        margin-top: -60vh;
    }
    body.active #list_parking {
        height: calc(60vh - 66px);
        overflow-y: auto;
    }
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 999;
        background: #FFFFFF;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s ease;
        overflow-y: auto;
    }
    .popup.active {
        opacity: 1;
        pointer-events: auto;
    }
    .popup_header {
        padding: 17px 20px 16px;
        background: #FFFFFF;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07), 0 3px 50px rgba(0, 0, 0, 0.12);
        position: sticky;
        top: 0;
        z-index: 9;
    }
    .btn-back {
        position: absolute;
        left: 20px;
        top: 16px;
    }
    .popup-top {
        text-align: center;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        padding-bottom: 16px;
        border-bottom: 1px solid #515356;
        color: #515356;
        margin-bottom: 16px;
    }
    .popup input {
        font-weight: 500;
        font-size: 13px;
        line-height: 15px;
        color: #515356;
        border: 1px solid #FF9729!important;
        border-radius: 50px;
        padding: 12px 10px 11px 20px!important;
        width: 100%;
        margin: 0!important;
    }
    .popup input:focus, .popup input:invalid  {
        border: 1px solid #515356!important;
        box-shadow: none!important;
    }
    .ant-input-prefix {
        display: none;
    }
    .ant-select-dropdown {
        box-shadow: none!important;
        top: calc(129px + 30px)!important;
        padding: 0!important;
        width: 100%!important;
        left: 0!important;
        background: transparent;
        display: none;
    }
    .ant-select-item {
        position: relative;
        padding: 9.5px 20px 9.5px 70px!important;
        margin-bottom: 15px;
    }
    .ant-select-item-option-content {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #515356;
    }
    .ant-select-item:before {
        content: '';
        position: absolute;
        left: 20px;
        top: 0;
        background: url("https://conversionratestore.github.io/projects/onairparking/img/pin-location.png") no-repeat center / 35px;
        width: 35px;
        height: 35px;
    }
    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
        background: #fff!important;;
    }
    .rc-virtual-list-holder {
        max-height: calc(100vh - 160px)!important;
    }
    .popup .ant-select-selection-placeholder {
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        padding: 12px 20px 11px!important;
        color: #515356;
        opacity: 0.3; 
    }
    .popup_body {
        padding: 30px 0 80px;
    } 
    .popular-place {
        padding: 0 20px;
    }
    .popular-place p {
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #515356;
        margin-bottom: 30px;
    }
    .popular-place li img {
        flex-shrink: 0;
    }
    .popular-place li span {
        font-size: 14px;
        line-height: 16px;
        color: #515356;
        margin-left: 15px;
    }
    .show-autocomplete .ant-select-dropdown {
        display: block!important;
    }
    .show-autocomplete .popular-place {
        display: none!important;
    }
    #calendar_table {
        max-width: 375px;
        margin: 0 auto;
    }
    .calendar .table {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(81, 83, 86, 0.1);
        padding-bottom: 20px;
        margin-bottom: 30px;
    }
    .calendar .head {
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;
        color: #515356;
        text-align: center;
        padding-bottom: 26px;
    }
    .calendar .table > .flex > div {
        width: 100%;
    }
    .calendar .day {
        font-weight: 700;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
        color: #515356;
        margin: 4px 0;
        position: relative;
        cursor: pointer;
    }
    
    .calendar .day.disabled {
        color: #515356;
        font-weight: 500;
        opacity: 0.3;
        cursor: no-drop;
    }
    .calendar .day.start, .calendar .day.end {
        font-weight: 800;
        color: #FFFFFF;
    }
    .calendar .day.start:after, .calendar .day.end:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: #F37621;
        width: 28px;
        height: 28px;
        pointer-events: none;
        border: 1px solid #F37621;
        border-radius: 3px;
        z-index: -1;
    }
    .calendar .day:last-child.start.active:before, .calendar .day:first-child.end.active:before {
        content: none;
    }
    .calendar .day.start:not(:last-child).active:before, .calendar .day.end:not(:first-child).active:before {
        content: '';
        position: absolute;
        top: 0;
        width: calc(100% - 13px);
        height: 100%;
        background: #FEF6E8;
        z-index: -2;
    }
    .calendar .day.start:not(:last-child):before {
        left: 13px;
    }
    .calendar .day.end:not(:first-child):before {
        right: 13px; 
    }
    .calendar .day.active:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #FEF6E8;
        z-index: -1;
    }
    .calendar .day:first-child.active:not(.end):before {
        border-radius: 3px 0 0 3px;
        left: 13px;
        width: calc(100% - 13px);
    }
    .calendar .day:last-child.active:not(.start):before {
        border-radius: 0 3px 3px 0;
        left: auto;
        right: 13px;
        width: calc(100% - 13px);
    }
    .popup_footer {
        background: #FFFFFF;
        position: fixed;
        z-index: 2;
        bottom: 0;
        left: 0;
        width: 100%;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.07), 0 -3px 50px rgba(0, 0, 0, 0.12);
        padding: 15px 16px;
    }
    .btn-search {
        background: #F37621;
        border-radius: 100px;
        width: 161px;
        font-weight: 800;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .btn-search[disabled] {
        background: #D1D1D1;
    }
    .btn-clear {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        text-transform: uppercase;
        color: #515356;
    }
    #items-map {
        position: absolute;
        bottom: 100%;
        left: 0;
        width: 100%;
        padding: 16px;
    }
    .ant-layout-content {
        display: none;
    }
    #map-main > div > div > div:nth-child(14) > div {
        bottom: 40%!important;
    }
    #map-main > div > div > div:nth-child(9) > button, #map-main > div > div > div:nth-child(5) > div, #map-main > div > div > div:nth-child(14) > div > div.gm-svpc, #menu-link-2 {
        display: none!important;
    }
    @media only screen and (max-width: 340px) {
        .info_parking {
            padding: 7px;
        }
        .name_parking {
            font-size: 14px;
        }
        .img_parking img {
            width: 90px;
        }
        .best_reviews, .lowest_price {
            font-size: 9px;
        }
        .list_parking .btn {
            margin-right: 10px;
        }
    }
</style>`

let html = `
<div class="wrapper">
    <div id="map-main"></div>
    
    <div class="flex items-center justify-between btns-edit">
        <button type="button" class="btn-edit-name items-center flex justify-between" data-popup="choose place">
            <b></b>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25879 10.9995H11.5154" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.88491 1.36289C9.11726 1.13054 9.43241 1 9.76101 1C9.92371 1 10.0848 1.03205 10.2351 1.09431C10.3855 1.15658 10.5221 1.24784 10.6371 1.36289C10.7522 1.47794 10.8434 1.61453 10.9057 1.76485C10.968 1.91517 11 2.07629 11 2.23899C11 2.4017 10.968 2.56281 10.9057 2.71314C10.8434 2.86346 10.7522 3.00004 10.6371 3.11509L3.33627 10.4159L1 11L1.58407 8.66373L8.88491 1.36289Z" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button type="button" class="btn-edit-date items-center flex justify-between" data-popup="choose dates">
            <span>
                From: <b class="from" ></b> <br>
                To: <b class="to" ></b>
            </span>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25879 10.9995H11.5154" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.88491 1.36289C9.11726 1.13054 9.43241 1 9.76101 1C9.92371 1 10.0848 1.03205 10.2351 1.09431C10.3855 1.15658 10.5221 1.24784 10.6371 1.36289C10.7522 1.47794 10.8434 1.61453 10.9057 1.76485C10.968 1.91517 11 2.07629 11 2.23899C11 2.4017 10.968 2.56281 10.9057 2.71314C10.8434 2.86346 10.7522 3.00004 10.6371 3.11509L3.33627 10.4159L1 11L1.58407 8.66373L8.88491 1.36289Z" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>    
        </button>
    </div>
    <div class="swipe">
        <ul id="items-map" class="list_parking"><li class="flex"></li></ul>
        <div class="flex items-center justify-between swipe-header">
            <div class="count_parking"></div>
            <div class="sort">Sort by: <button type="button" class="ml-2">PRICE</button></div>
        </div>
        <ul id="list_parking" class="p-4 list_parking"></ul>
    </div>
</div>
<div class="popup" data-title="choose place">
    <div class="popup_header">
        <div class="popup-top">
            <button type="button" class="btn-back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#515356" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <h4 class="popup-title">Choose place</h4>
        </div>
    </div>
    <div class="popup_body">
        <div class="popular-place">
            <p>Popular locations</p>
            <ul>
                <li class="flex items-center mb-4" data-id="1" title="DIA - Denver International Airport">
                    <img src="https://conversionratestore.github.io/projects/onairparking/img/pin-location.png" alt="icon location">
                    <span>Denver International Airport</span>
                </li>
                <li class="flex items-center mb-4" data-id="5" title="ORD - Chicago O'Hare International Airport">
                    <img src="https://conversionratestore.github.io/projects/onairparking/img/pin-location.png" alt="icon location">
                    <span>Chicago O'Hare International Airport</span>
                </li>
                <li class="flex items-center mb-4" data-id="12" title="BOS - Boston Logan International Airport">
                    <img src="https://conversionratestore.github.io/projects/onairparking/img/pin-location.png" alt="icon location">
                    <span>Boston Logan International Airport</span>
                </li>
                <li class="flex items-center" data-id="7" title="ATL - Atlanta Hartsfield-Jackson International Airport">
                    <img src="https://conversionratestore.github.io/projects/onairparking/img/pin-location.png" alt="icon location">
                    <span>Atlanta Hartsfield-Jackson International Airport</span>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="popup" data-title="choose dates">
    <div class="popup_header">
        <div class="popup-top">
            <h4 class="popup-title">Choose dates</h4>
            <button type="button" class="btn-back">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1L7.78784 7.78788L15 15" stroke="#515356" stroke-width="2"/>
                    <path d="M1.00004 15L8.21216 8.21212L1.00004 1" stroke="#515356" stroke-width="2"/>
                </svg>
            </button>
        </div>
        <div class="week flex justify-between">
            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
    </div>
    <div class="popup_body">
        <div id="calendar_table" class="calendar"></div>
    </div>
    <div class="popup_footer flex items-center justify-between">
        <button type="button" class="flex items-center btn-clear">
            <svg class="mr-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0001 1L5.84863 5.84848L11.0001 11" stroke="#515356" stroke-width="2"/>
                <path d="M0.999852 11L6.15137 6.15152L0.999852 1" stroke="#515356" stroke-width="2"/>
            </svg>
            <span>Clear</span>
        </button>
        <button type="button" class="btn-search">Search</button>
    </div>
</div>
`;

let emptyHtml = `<div class="ant-empty ant-empty-normal"><div class="ant-empty-image"><svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse><g class="ant-empty-img-simple-g" fill-rule="nonzero"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" class="ant-empty-img-simple-path"></path></g></g></svg></div><div class="ant-empty-description">No Data</div></div>`;

let lowerPrice = `<div class="lowest_price">Lowest price</div>`,
    bestReviews = `<div class="best_reviews">Best reviews</div>`;

let formatDate = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/* Classes method for Parking */
class Parking{
    constructor(url, name, reviews, distance, shuttle, shuttleFrequency, freeCancellation, price, minDay, soldOut, unavailable, parent, checkin) {
        this.url = url;
        this.name = name;
        this.reviews = reviews;
        this.distance = distance;
        this.shuttle = shuttle != '' ? 'Free Shuttle ' + shuttle : '';
        this.shuttleFrequency = shuttleFrequency;
        this.freeCancellation = freeCancellation;
        this.price = price;
        this.minDay = minDay;
        this.soldOut = soldOut;
        this.unavailable = unavailable;
        this.parent = parent;
        this.checkin = checkin;
        this.renderStar();
        this.renderText();
        this.renderBtn();
    }
    renderStar() {
        let stars = '',
            starGold = `<svg viewBox="64 64 896 896" fill="#fadb14" focusable="false" data-icon="star" width="15px" height="15px" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>`,
            starGray = `<svg viewBox="64 64 896 896" fill="#ccc" focusable="false" data-icon="star" width="15px" height="15px" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>`;

        let review = this.reviews.split('/')[0];

        for (let i = 0; i < 5; i++) {
            if (i < review) {
                stars += starGold;
            } else {
                stars += starGray;
            }
        }
        return stars
    }

    renderText() {
        if (this.soldOut == 1 && this.unavailable != 1) {
            return `<small class="block mt-1.5">This facility is sold out for this period. Change the dates!</small>`
        } else if (this.unavailable == 1) {
            return `<small class="block mt-1.5">This facility requires a minimum <span class="truncate">of <strong>${this.minDay}</strong> days.</span> Change the dates!</small>`
        } else {
            return ''
        }
    }

    renderBtn() {
        return this.unavailable == 1 ? '<p class="btn btn_gray">Unavailable<p>' : this.soldOut == 1 ? '<p class="btn btn_gray">Sold Out<p>':'<p class="btn">Online-only price<p>'
    }

    render() {
        let element = document.createElement('li');
        element.classList.add('flex');
        element.innerHTML = `
            <a href="https://www.onairparking.com/parkingat/${this.url}" class="img_parking relative">
                <div class="notes_parking top-2.5"></div>
                <img src="https://conversionratestore.github.io/projects/onairparking/img/parking.png" alt="${this.name}">
            </a>
            <a href="https://www.onairparking.com/parkingat/${this.url}" class="info_parking flex justify-between" >
                <div>
                    <p class="name_parking truncate" title="${this.name}">${this.name}</p>
                    <div class="rate_parking flex" data-rate="${this.reviews.split('/')[1]}">${this.renderStar()}</div>
                    <ul>
                        <li>${this.distance != '' ? `Distance: <b>${this.distance}</b>`: ''}</li>
                        <li>${this.shuttle} <b>${this.shuttleFrequency}</b></li>
                    </ul>
                </div>
                <div>
                    <div class="relative">
                        <p class="c-green">${this.freeCancellation.includes('up to start date') ? `Free Cancellation until ${this.checkin.split('-')[2]} ${formatDate[this.checkin.split('-')[1] - 1]}` : this.freeCancellation}</p>
                    </div>
                    <div class="flex items-center">
                        ${this.renderBtn()}
                        <p class="price_parking"><b>$${this.price.toFixed(2)}</b> / day</p>
                    </div>
                    ${this.renderText()}
                </div
            </a>`

        this.parent.appendChild(element);
    }
}

// Classes method for swipe
class Swipe {
    constructor(element) {
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    handleTouchMove(evt) {
        if ( ! this.yDown ) {
            return;
        }

        let yUp = evt.touches[0].clientY;

        this.yDiff = this.yDown - yUp;

        if ( this.yDiff > 0 ) {
            this.onUp();
        } else {
            this.onDown();
        }

        // Reset values.
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt);
        }.bind(this), false);
    }
}

//push dataLayer
let pushDataLayer = (action) => {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Complete Redesign of the Search Results',
        'eventAction': action,
    });
}
//add event Listener
function addEvent(item, type, fun) {
    item.addEventListener(type, fun)
}

let postParking = (id, startDate, endDate, parent, countSelector, mapSelector) => {

    fetch(`https://www.onairparking.com/api/Facility/SearchAlternate`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: `{"airport_id":${id},"start_date":"${startDate}","end_date":"${endDate}"}`

    }).then(res => res.json()).then(data => {
        console.log(data)
        parent.innerHTML = ''
        let result = data.result;

        countSelector.innerHTML = result.length == 1 ? '1 parking found' : `${result.length} parkings found`; //set count parkings found

        //add key google map

        let optionMap = (zoom) => {
            return {
                zoom: zoom,
                minZoom: zoom,
                center: new google.maps.LatLng(38.472351, -102.151480),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        }

        let bounds = new google.maps.LatLngBounds(); //bounds for markers
        if (result.length > 0) {
            let gmap = new google.maps.Map(mapSelector, optionMap(5));

            for (let i = 0; i < result.length; i++) {
                let url = `${result[i]['facility_url_code']}?checkin=${startDate}&checkout=${endDate}`,
                    name = result[i]['facility_lot'],
                    reviews = result[i]['facility_review'] + '/' + result[i]['facility_review_avg'],
                    distance = '',
                    shuttle = '',
                    shuttleFrequency = '',
                    freeCancellation = '',
                    price = result[i]['facility_selling_price'],
                    minDay = result[i]['facility_min_days'],
                    soldOut = result[i]['date_sold_out'],
                    unavailable = result[i]['not_sufficient_days'];

                let myLatLng = { lat: result[i]['facility_latitude_fake'], lng: result[i]['facility_longitude_fake'] };

                let marker = new google.maps.Marker({
                    position: myLatLng,
                    map: gmap,
                    icon: {
                        url: `https://conversionratestore.github.io/projects/onairparking/img/marker.svg`,
                        // scaledSize: new google.maps.Size(73, 44),
                        origin: new google.maps.Point(-1, 0),
                        // anchor: new google.maps.Point(0, 0)
                    },
                    label:{
                        text: `$${price.toFixed(2)}`,
                        fontSize: "14px",
                        fontWeight: "800",
                        color: '#F37621'
                    }
                });
                bounds.extend(myLatLng);

                let highlights = result[i].highlights;
                for (let h = 0; h < highlights.length; h++) {
                    if (highlights[h].type == 'facility_distance') {
                        distance = highlights[h].description != null ? highlights[h].description : result[i]['facility_airport_distance'] != null ? `${result[i]['facility_airport_distance']} miles` : '';
                    } else if (highlights[h].type == 'facility_free_shuttles') {
                        shuttle = highlights[h].description != null ? highlights[h].description : '';
                    } else if (highlights[h].type == 'facility_shuttle_frequency') {
                        shuttleFrequency = highlights[h].description != null ? highlights[h].description : '';
                    } else if (highlights[h].type == 'facility_free_cancellation') {
                        freeCancellation = highlights[h].description != null ? highlights[h].description : '';
                    }
                }
                new Parking(url,name,reviews,distance,shuttle,shuttleFrequency,freeCancellation,price,minDay,soldOut,unavailable,parent,startDate).render();

                marker.addListener("click", (e) => {
                    e.stopImmediatePropagation()
                    parent.parentElement.querySelector('#items-map li').innerHTML = parent.childNodes[i].innerHTML;
                    parent.parentElement.querySelector('#items-map').style.display = 'block';

                    pushDataLayer('Click on the price (map)')
                });
                
                //hide item parking
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('#items-map') && !e.target.matches('#items-map')) {
                        document.querySelector('#items-map').style.display = 'none'
                    }
                })
            }
            scrollTo(0,0)
            //set minimum zoom
            google.maps.event.addListener(gmap, 'zoom_changed', function() {
                zoomChangeBoundsListener =
                    google.maps.event.addListener(gmap, 'bounds_changed', function(event) {
                        if (this.getZoom() > 12 && this.initialZoom == true) {
                            // Change max/min zoom here
                            this.setZoom(12);
                            this.initialZoom = false;
                        }
                        google.maps.event.removeListener(zoomChangeBoundsListener);
                    });
            });
            gmap.initialZoom = true;
            gmap.fitBounds(bounds); //all markers in visible area

            //sort on price
            let items = parent.childNodes;
            parent.parentElement.querySelector('.sort button').addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                e.target.classList.toggle('ascending')
                let itemsArr = [].slice.call(items).sort(function (a, b) {
                    if (e.target.classList.contains('ascending')) {
                        return a.querySelector('.price_parking b').innerText.replace('$', '') - b.querySelector('.price_parking b').innerText.replace('$', '');
                    } else {
                        return b.querySelector('.price_parking b').innerText.replace('$', '') - a.querySelector('.price_parking b').innerText.replace('$', '');
                    }
                });
                itemsArr.forEach((p) => parent.appendChild(p));
                pushDataLayer('Click on “sort by price”');
            })

            //lowerPrice
            let prices = parent.querySelectorAll('.price_parking b'),
                minNumber = [].reduce.call(prices, (a, b) => 0 >= a.innerHTML.replace('$','') - b.innerHTML.replace('$','') ? a : b)
            minNumber.closest('#list_parking > li').querySelector('.notes_parking').insertAdjacentHTML('beforeend', lowerPrice)

            //bestReviews
            let rating = parent.querySelectorAll(".rate_parking"),
                maxNumber = [].reduce.call(rating, (a, b) => 0 < a.dataset.rate - b.dataset.rate ? a : b)
            maxNumber.closest('#list_parking > li').querySelector('.notes_parking').insertAdjacentHTML('beforeend', bestReviews)

            let children =  [...parent.children]; //parking list

            //add "Only 8 left at this price"
            let randomIndex = Math.floor(Math.random() * children.length); //random
            children[randomIndex].querySelector('.c-green').insertAdjacentHTML('beforebegin',`<p class="c-red">Only 8 left at this price</p>`)

            //event
            children.forEach(item => addEvent(item, 'click',() => pushDataLayer('Click on the parking')))
        } else {
            parent.innerHTML = emptyHtml;
            new google.maps.Map(mapSelector, optionMap(3));
            scrollTo(0,0)
        }
    }).catch((error) => {
        console.log('Error:', error);
        countSelector.innerHTML = `0 parkings found`;
        parent.innerHTML = emptyHtml;
    });
}

document.querySelector('[name="viewport"]').setAttribute('content','width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')

let sentPost = false;
let start = setInterval(() => {
    if (document.querySelector('#__next > section > main > div > div.bg-white > div > button') != null && document.querySelector('#__next > section > main > div > div.bg-white > div > button').innerText == 'Edit' && document.querySelector('input[type="search"]') != null && document.querySelector('#__NEXT_DATA__') != null && window.location.href.includes('/reservation/search?initials')) {
        document.querySelector('.js-style') == null ? document.body.insertAdjacentHTML('afterbegin', style) : ''; // add style

        if (sentPost == false) {
            sentPost = true;
            clarity("set", "complete_redesign_search_results", "search_visited");
            document.querySelector('#__next > section > main > div > div.bg-white> div > button').closest('main').insertAdjacentHTML('beforebegin', html)

            let initial = window.location.href.split('initials=')[1].split('&')[0];
            let arr = document.querySelector('#__NEXT_DATA__').innerText.split(`,"airport_initials":"${initial}`)[0].split('"airport_id":'),
                id = arr[arr.length - 1],
                startDate = window.location.href.split('checkin=')[1].split('&')[0],
                endDate = window.location.href.split('checkout=')[1],
                parent = document.querySelector('#list_parking'),
                countSelector = document.querySelector('.count_parking'),
                mapSelector = document.querySelector('#map-main');
                
            //set height for map
            const appHeight = (boolean) => {
                if (boolean == true) {
                    window.addEventListener('resize', () => {
                        mapSelector.style.minHeight = window.innerHeight - 51 + 'px';
                    })
                } else {
                    mapSelector.style.minHeight = window.innerHeight - 51 + 'px';
                }
            }
            appHeight(true)

            document.querySelector('.btn-edit-name').setAttribute('data-id', id)
            document.querySelector('.btn-edit-name b').innerHTML = window.location.href.split('airport=')[1].split('&')[0].split('+').join(' ');
            document.querySelector('.btn-edit-date .from').setAttribute('data-date',startDate)
            document.querySelector('.btn-edit-date .to').setAttribute('data-date',endDate)
            document.querySelector('.btn-edit-date .from').innerHTML = startDate.split('-')[2] + ' ' + formatDate[startDate.split('-')[1] - 1];
            document.querySelector('.btn-edit-date .to').innerHTML = endDate.split('-')[2] + ' ' + formatDate[endDate.split('-')[1] - 1];

            postParking(id, startDate, endDate, parent, countSelector, mapSelector) // send post parking

            //swipe event
            let swiper = new Swipe('.swipe-header');
            swiper.onUp(() => {
                appHeight(false)
                document.body.classList.add('active') ;
                document.querySelector('#items-map').style.display = 'none';
                scrollTo(0,0)
                setTimeout(() => {
                    document.body.classList.add('fix') ;
                }, 500);
                pushDataLayer('Swipe search results')
            }).run();
            swiper.onDown(() => {
                document.body.classList.remove('active');
                document.body.classList.remove('fix') ;
                scrollTo(0,0)
                pushDataLayer('Swipe search results')
                appHeight(true)
            }).run();
            document.querySelector('.popup-top').after(document.querySelector('.ant-select'))

            scrollTo(0,0)

            function showModal(e) { //show modal
                document.querySelector(`.popup[data-title="${e.dataset.popup}"]`).classList.add('active');
                if (e.dataset.popup == 'choose place') {
                    pushDataLayer('Click on airport selector')
                } else {
                    pushDataLayer('Click on dates selector')
                }
            }
            function hideModal() { //hide modal
                document.querySelectorAll(`.popup`).forEach(item => item.classList.remove('active'));
                document.body.classList.remove('show-autocomplete');
            }

            //show modal
            document.querySelectorAll('.btns-edit button').forEach(item => {
                addEvent(item, 'click', (e) => {
                    showModal(item)
                    document.body.classList.remove('active');
                    scrollTo(0,0)
                })
            })
            //choose popular place
            function clickOnPopularPlace(item) {
                let id = item.dataset.id,
                    startDate = document.querySelector('.btn-edit-date .from').dataset.date,
                    endDate = document.querySelector('.btn-edit-date .to').dataset.date;

                document.querySelector('.btn-edit-name').setAttribute('data-id', id)

                postParking(id, startDate, endDate, parent, countSelector, mapSelector)
                document.querySelector('input[type="search"]').setAttribute('value', item.title)
                document.querySelector('.btn-edit-name b').innerHTML = item.title;
                hideModal()
            }
            document.querySelectorAll('.popular-place ul > li').forEach(item => {
                addEvent(item, 'click', () => {clickOnPopularPlace(item)})
            })
            //choose place
            function clickOnItemPlace(e,item) {
                e.stopImmediatePropagation()
                let id = item.id,
                    startDate = document.querySelector('.btn-edit-date .from').dataset.date,
                    endDate = document.querySelector('.btn-edit-date .to').dataset.date;

                document.querySelector('.btn-edit-name').setAttribute('data-id', id)

                postParking(id, startDate, endDate, parent, countSelector, mapSelector)
                document.querySelector('.btn-edit-name b').innerHTML = item.innerText;
                hideModal()
            }
            function clickOnInputPlace(e, items) {
                if (e.value != '') {
                    document.body.classList.add('show-autocomplete')
                } else {
                    document.body.classList.remove('show-autocomplete')
                }
                setInterval(() => {
                    if (document.querySelectorAll('.ant-select-item')) {
                        document.querySelectorAll('.ant-select-item').forEach(item => {
                            addEvent(item, 'click', (e) => {clickOnItemPlace(e,item)})
                        })
                    }
                }, 100)
            }

            //click on input in popup "Choose place"
            let inputSearch = document.querySelector('input[type="search"]')
            addEvent(inputSearch, 'click', (e) => {clickOnInputPlace(e.target)})
            addEvent(inputSearch, 'input', (e) => {clickOnInputPlace(e.target)})

            //create calendar
            let date = new Date();
            let calendar = document.querySelector('#calendar_table');
            for (let i = 0; i < 13; i++) {
                let month = date.getMonth() + 1 + i,
                    year = date.getFullYear();
                if (month <= 12) {
                    createCalendar(calendar, year, month, startDate, endDate);
                } else {
                    let newMonth =  (date.getMonth() - 1 - i) * -1,
                        newYear = year + 1;
                    if (newMonth > 0) {
                        createCalendar(calendar, newYear,newMonth, startDate, endDate);
                    }
                }
            }

            //choose dates
            let days = document.querySelectorAll('.calendar .day:not(.disabled)');
            let betweenDays = 0;
            let indexEnd = 0, indexStart = 0;

            function clickOnDay(item,index) {
                let dayS = document.querySelector('.calendar .day.start') != null ? document.querySelector('.calendar .day.start') : '',
                    dayE = document.querySelector('.calendar .day.end') != null ? document.querySelector('.calendar .day.end')  : '',
                    dayA = document.querySelectorAll('.calendar .day.active');

                if (betweenDays === 0) {
                    dayS != '' ? dayS.classList.remove('start') : '';
                    dayE != '' ? dayE.classList.remove('end') : '';
                    for (let i = 0; i < dayA.length; i++) {
                        dayA[i].classList.remove('active')
                    }
                    item.classList.add('start')
                    document.querySelector('.btn-search').disabled = true
                    betweenDays = 1;
                } else {
                    for (let i = 0; i < days.length; i++) {
                        if (days[i].classList.contains('start')) {
                            indexStart = i
                        }
                    }
                    if (index > indexStart) {
                        item.classList.add('end')
                        indexEnd = index;

                        for (let i = indexStart; i < indexEnd + 1; i++) {
                            days[i].classList.add('active')
                        }

                        document.querySelector('.btn-search').disabled = false
                        betweenDays = 0;
                    } else {
                        document.querySelector('.calendar .day.start').classList.remove('start');
                        item.classList.add('start')
                    }
                }
            }
            for (let i = 0; i < days.length; i++) {
                addEvent(days[i], 'click', () => {
                    clickOnDay(days[i],i)
                })
            }

            //close modal
            document.querySelectorAll('.btn-back').forEach(item => {
                addEvent(item, 'click', (e) => {
                    hideModal()
                    if (item.closest('[data-title="choose dates"]')) {
                        document.querySelector('.calendar .day.start') != null ? document.querySelector('.calendar .day.start').classList.remove('start') : '';
                        document.querySelector('.calendar .day.end') != null ? document.querySelector('.calendar .day.end').classList.remove('end')  : '';
                        document.querySelectorAll('.calendar .day.active').forEach(item => item.classList.remove('active'))
                        let startDate = document.querySelector('.from').dataset.date.split('-'),
                            endDate = document.querySelector('.to').dataset.date.split('-');

                        let startDateYear = startDate[0],
                            startDateMonth = startDate[1][0] == '0' && startDate.length > 1 ? +startDate[1].replace('0','') -1 : startDate[1],
                            startDateDay = +startDate[2];
                        let endDateYear = endDate[0],
                            endDateMonth = endDate[1][0] == '0' && endDate.length > 1 ? +endDate[1].replace('0','') -1 : endDate[1],
                            endDateDay = +endDate[2];

                        document.querySelector(`.calendar .head[data-item="${startDateYear}-${startDateMonth}"]`).nextElementSibling.querySelectorAll('.day')[startDateDay-1].classList.add('start','active');
                        document.querySelector(`.calendar .head[data-item="${endDateYear}-${endDateMonth}"]`).nextElementSibling.querySelectorAll('.day')[endDateDay-1].classList.add('end','active');

                        for (let i = 0; i < days.length; i++) {
                            if (days[i].classList.contains('start')) {
                                indexStart = i;
                            }
                            if (days[i].classList.contains('end')) {
                                indexEnd = i
                            }
                        }
                        for (let i = indexStart; i < indexEnd; i++) {
                            days[i].classList.add('active')
                        }

                        pushDataLayer('Calendar: close button')
                    }
                })
            })
            //clear calendar
            addEvent(document.querySelector('.btn-clear'), 'click', () => {
                document.querySelector('.calendar .day.start') != null ? document.querySelector('.calendar .day.start').classList.remove('start') : '';
                document.querySelector('.calendar .day.end') != null ? document.querySelector('.calendar .day.end').classList.remove('end')  : '';
                document.querySelectorAll('.calendar .day.active').forEach(item => item.classList.remove('active'))
                document.querySelector('.btn-search').disabled = true;
                betweenDays = 0;
                pushDataLayer('Callendar: clear button')
            })
            //search by calendar
            addEvent(document.querySelector('.btn-search'), 'click', () => {
                if (document.querySelector('.btn-search').disabled == false) {
                    let start = document.querySelector('.calendar .day.start'),
                        end = document.querySelector('.calendar .day.end'),
                        id = document.querySelector('.btn-edit-name').dataset.id;

                    startDate = document.querySelector('.btn-edit-date .from');
                    endDate = document.querySelector('.btn-edit-date .to');

                    startDate.dataset.date = `${start.closest('.table').previousElementSibling.getAttribute('data-item')}-${start.innerText}`
                    endDate.dataset.date = `${end.closest('.table').previousElementSibling.getAttribute('data-item')}-${end.innerText}`

                    startDate.innerHTML = `${start.innerText} ${formatDate[startDate.dataset.date.split('-')[1]]}`;
                    endDate.innerHTML = `${end.innerText} ${formatDate[endDate.dataset.date.split('-')[1]]}`;

                    postParking(id, startDate.dataset.date, endDate.dataset.date, parent, countSelector, mapSelector)
                    hideModal()
                    pushDataLayer('Callendar: search button')
                }
            })
        }
    }
})

//remove exp
function startRemove() {
    let startRemove = setInterval(() => {
        if (document.querySelector('#parkingat') != null || document.querySelector('#easy-checkout') != null || document.querySelector('.search-switch') != null || (document.querySelector('#__next > section > main > div > div.bg-search-airport2 > div.container.mx-auto.flex.flex-col.relative > div > div:nth-child(2) > div:nth-child(1) > h2') != null && document.querySelector('#__next > section > main > div > div.bg-search-airport2 > div.container.mx-auto.flex.flex-col.relative > div > div:nth-child(2) > div:nth-child(1) > h2').innerText == 'Search parking deals')) {
            // clearInterval(startRemove)
            document.querySelector('.js-style') != null ? document.querySelector('.js-style').remove() : '';
            sentPost = false;
        }
    },100)
}
startRemove()

//calendar
let today = new Date();
function createCalendar(elem, year, month, startDate, endDate) {
    let mon = month - 1;
    let d = new Date(year, mon);

    let startD = new Date(startDate),
        endD = new Date(endDate);

    let table = `<div class="head" data-item="${year}-${mon}">${formatDate[mon]} ${year}</div><div class="table"><div class="flex">`;

    // spaces for first row
    // from Monday to the first day of the month
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<div></div>';
    }

    // calendar cells with dates
    while (d.getMonth() == mon) {
        if (d < today && d.getDate() < today.getDate()) {
            table += '<div class="day disabled">' + d.getDate() + '</div>';
        } else if (d.getDate() === startD.getDate() && d.getMonth() === startD.getMonth() && d.getFullYear() === startD.getFullYear()) {
            table += '<div class="day start active">' + d.getDate() + '</div>';
        } else if (d.getDate() === endD.getDate() && d.getMonth() === endD.getMonth() && d.getFullYear() === endD.getFullYear()) {
            table += '<div class="day end active">' + d.getDate() + '</div>';
        } else if (d > startD && d < endD) {
            table += '<div class="day active">' + d.getDate() + '</div>';
        } else {
            table += '<div class="day">' + d.getDate() + '</div>';
        }

        if (getDay(d) % 7 == 6) { // Sun, last day - newline
            table += '</div><div class="flex">';
        }

        d.setDate(d.getDate() + 1);
    }
    // add empty cells to table
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<div></div>';
        }
    }
    // close the table
    table += '</div></div></div>';

    elem.insertAdjacentHTML('beforeend',table);
}

function getDay(date) { // get the day number of Sunday, from 0 (Mon) to 6 (Sun)
    let day = date.getDay();
    if (day == 0) day = 7; // make Sunday (0) the last day
    return day - 1;
}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Complete Redesign of the Search Results',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "complete_redesign_search_results", "variant_1");
    }
}, 100)
