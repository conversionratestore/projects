let style = `
<style class="js-style">
    #parkingat > div > article {
        margin-top: 20px!important;
        box-shadow: none!important;
    }
    #parkingat > div > article > div.relative.bg-gray-100.overflow-hidden.col-span-2.w-full > img, #parkingat > div > article > div.relative.bg-gray-100.overflow-hidden.col-span-2.w-full {
        height: 52.8vw!important;
    }
    #parkingat > div > article > div.flex.flex-col {
        padding: 0!important;
        margin: 20px 0!important;
    }
    #parkingat > div > article > div > h1 {
        font-weight: 800!important;
        font-size: 20px!important;
        line-height: 28px!important;
    }
    #parkingat > div > article > div.block.my-4.px-4 {
        display: none!important;
    }
    #parkingat {
        color: #515356;
    }
    .fs-10 {
        font-size: 10px;
        line-height: 14px;
    }
    .fs-12 {
        font-size: 12px;
        line-height: 14px;
    }
    .fs-13 {
        font-size: 13px;
        line-height: 1;
    }
    .fs-14 {
        font-size: 14px;
        line-height: 22px;
    }
    .fs-16 {
        font-size: 16px;
        line-height: 19px;
    }
    .lh-14 {
        line-height: 14px;
    }
    .review_section {
        line-height: 16px;
        color: #515356;
    }
    .review_section ul {
        padding-right: 7px;
    }
    .review_section ul svg {
        margin-right: 3px;
    }
    .list {
        list-style-type: disc;
        line-height: 24px;
        padding-left: 24px;
    }
    
    .guarantee_section {
        background: rgba(6, 155, 39, 0.15);
        border-radius: 5px;
        padding: 10px;
        width: 171px;
    }
    .bb-1 { 
        border-bottom: 1px solid #DADADA;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .price_section .tab {
        background: #069B27;
        border-radius: 3px;
        padding: 4px 8px;
        color: #FFFFFF;
        width: fit-content;
    }
    .price_section .price {
        font-weight: 800;
        font-size: 20px;
        line-height: 23px;
        color: #515356;
    }
    .price_section .n-left {
        font-size: 13px;
        line-height: 15px;
        color: #F37621;
    }
    .c-green {
        color: #069B27;
    }
    .title {
        font-weight: 800;
        font-size: 20px;
        line-height: 23px;
    }
    #google-map-parking-at {
        height: 65vw!important;
    }
    .relative:hover .tooltip {
        opacity: 1;
    }
    .tooltip {
        position: absolute;
        right: -26px;
        top: calc(100% + 13px);
        background: #F9FAFB;
        border-radius: 5px;
        padding: 10px;
        font-size: 10px;
        line-height: 15px;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1), 0 0 2px rgba(0, 0, 0, 0.1);
        pointer-events: none;
        opacity: 0;
        transition: all 0.3s ease;
        width: 191px;
        z-index: 2;
    }
    .tooltip:before, .tooltip:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
    }
    .tooltip:before {
        bottom: calc(100% + 1px);
        right: 25px;
        border-width: 0 16px 11px 16px;
        border-color: transparent transparent rgb(238 239 239) transparent;
    }
    .tooltip:after {
        bottom: 100%;
        right: 26px;
        border-width: 0 15px 10px 15px;
        border-color: transparent transparent #F9FAFB transparent;
    }
    .btn_reserve-now {
        font-weight: 800;
        font-size: 16px;
        line-height: 50px;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #F37621;
        border-radius: 100px;
        width: 100%;
    }
    .fix_footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 15px 16px;
        z-index: 999;
        background: #FFFFFF;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.07), 0 -3px 50px rgba(0, 0, 0, 0.12);
        pointer-events: none;
        opacity: 0;
        transition: all 0.3s ease;
        transform: translateY(100px);
    }
    .fix_footer.active {
        pointer-events: auto;
        opacity: 1;
        transform: translateY(0);
    }
    #detail-info > div.flex.flex-row.justify-between.items-center > div.flex.flex-col.w-full > h2 {
        font-weight: 800!important;
        font-size: 20px!important;
        line-height: 28px!important;
    }
    #detail-info > p.block {
        font-size: 12px;
        line-height: 14px;
    }
    button.ant-btn.ant-btn-primary.ant-btn-lg.uppercase.w-full.bg-primary.rounded-full.text-sm.font-bold {
        font-size: 16px!important;
        height: auto;
        padding: 14px;
    }
    #detail-info > h3 {
        margin-top: 20px!important;
        margin-bottom: 10px!important;
    }
    #parkingat > div > article > div.grid.grid-cols-1 > div.flex.flex-col > p {
        display: none!important;
    }
    .reviews_section {
        overflow: hidden;
        margin-left: -7.5px;
        width: calc(100% + 15px);
        margin-bottom: 30px;
    }
    .reviews_section > div:first-child {
        padding: 0 7.5px;
    }
    .reviews-slider .slide > div > div:first-child {
        order: 1;
    }
    .reviews-slider {
        display: flex;
        padding-bottom: 28px!important;
    }
    .reviews-slider .slide {
        padding: 15px;
        background: #F9FAFB;
        border: 1px solid rgba(220, 221, 221, 0.2);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05), 0 4px 19px rgba(0, 0, 0, 0.04), 0 2px 7px rgba(0, 0, 0, 0.03);
        border-radius: 7px;
        margin: 0 7.5px;
    }
    .reviews-slider .slide > p {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    .reviews-slider .anticon svg {
        height: 15px;
        width: 15px;
    }
    .reviews-slider .ant-rate-star:not(:last-child) {
        margin-right: 2px;
    }
    .reviews-slider .ant-rate {
        font-size: 15px;
        margin-bottom: 10px;
    }
    .reviews-slider time {
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
    }
    .reviews-slider .justify-self-start {
        line-height: 15px;
    }
    .tns-outer {
        position: relative;
    }
    .tns-nav {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
        display: flex;
        z-index: 3;
    }
    .tns-nav button {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #DCDDDD;
        margin: 0 5px;
    }
    .tns-nav button.tns-nav-active {
        background: #515356;
    }
    #parkingat > div > article > div > h3 {
        font-weight: 800!important;
    }
    #parkingat > div > article > div > h3 > span {
        font-weight: 400!important;
    }
    .ant-rate-star:not(:last-child) {
        margin-right: 5px;
    }
    #parkingat > div > article > div > h3 > ul.ant-rate {
        margin-left: auto!important;
    }
    #parkingat > div > article > div.mt-12.max-w-3xl.mx-auto.px-4 {
        padding-right: 0!important;
        padding-left: 0!important;
    }
    @media only screen and (max-width: 360px) {
        .reviews_section {
            margin-left: -3px;
            width: calc(100% + 6px);
        }
        .reviews_section > div:first-child {
            padding: 0 3px;
        }
        .reviews-slider .slide {
            padding: 10px;
            margin: 0 3px;
        }
    }
</style>`

//push dataLayer
let pushDataLayer = (action) => {
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Complete redesign PDP',
        'eventAction': action
    });
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
//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}

let renderStar = (rate) => {
    let stars = '',
        starGold = `<li><svg viewBox="64 64 896 896" fill="#fadb14" focusable="false" data-icon="star" width="20px" height="20px" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></li>`,
        starGray = `<li><svg viewBox="64 64 896 896" fill="#ccc" focusable="false" data-icon="star" width="20px" height="20px" fill="currentColor" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg></li>`;

    for (let i = 0; i < 5; i++) {
        if (i < rate) {
            stars += starGold;
        } else {
            stars += starGray;
        }
    }
    return stars
}

let renderPriceDay = (startDate,endDate,total) => {
    let newDate = new Date(new Date(endDate.split('-')[0], endDate.split('-')[1], endDate.split('-')[2]) - new Date(startDate.split('-')[0], startDate.split('-')[1], startDate.split('-')[2]));
    let day = +newDate.getDate() - 1;
    let priceDay = (+total / day).toFixed(2);
    return priceDay;
}

let arrMouth = ['Jan','Feb','Mar','Apr','May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let formatDate = {
    'Jan':'01',
    'Feb':'02',
    'Mar':'03',
    'Apr':'04',
    'May':'05',
    'Jun':'06',
    'Jul':'07',
    'Aug':'08',
    'Sep':'09',
    'Oct':'10',
    'Nov':'11',
    'Dec':'12'
}

let postParking = (id, startDate, endDate, parent, urlCode, total) => {

    fetch(`https://www.onairparking.com/api/Facility/SearchAlternate`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: `{"airport_id":${id},"start_date":"${startDate}","end_date":"${endDate}"}`

    }).then(res => res.json()).then(data => {
        console.log(data)
        let result = data.result;

        for (let i = 0; i < result.length; i++) {
            if (result[i]['facility_url_code'] == urlCode) {
                let distance = '',
                    shuttle = '',
                    shuttleFrequency = '',
                    freeCancellation = '';

                let highlights = result[i]['highlights'];
                for (let h = 0; h < highlights.length; h++) {
                    if (highlights[h].type == 'facility_distance' && (highlights[h].description != null || result[i]['facility_airport_distance'] != null)) {
                        distance = `<li>Distance from airport: <span class="font-bold">` + (highlights[h].description != null ? highlights[h].description : result[i]['facility_airport_distance'] != null ? `${result[i]['facility_airport_distance']} miles` : '') + `</span></li>`;
                    } else if (highlights[h].type == 'facility_free_shuttles' && highlights[h].description != null) {
                        shuttle = `<li>Free shuttle <span class="font-bold">${highlights[h].description}</span>`;
                    } else if (highlights[h].type == 'facility_shuttle_frequency' && highlights[h].description != null) {
                        shuttleFrequency = ` <span class="font-bold">${highlights[h].description}</span></li>`;
                    } else if (highlights[h].type == 'facility_free_cancellation' && highlights[h].description == 'up to start date') {
                        freeCancellation = `<div class="flex items-center pt-1 mb-5 free_block"><svg class="mr-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" stroke="#069B27" stroke-width="2"/><path d="M5.47852 9.89474L8.02397 12L12.4785 7" stroke="#069B27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                            <p class="fs-13 c-green font-bold"> Free cancellation until ${startDate.split('-')[2]} ${arrMouth[+startDate.split('-')[1] - 1]}</p></div>`

                    }
                }
                //review
                parent.querySelector('div > article > div.flex > span').innerHTML = `<span class="review_section flex items-center mt-2 fs-14"><ul class="flex">${renderStar(Math.round(result[i]['facility_review_avg']))}</ul> (${result[i]['num_review']})</span>`;

                //info about, price block
                parent.querySelector('div > article > div.flex.flex-col').insertAdjacentHTML('afterend',`
                    <ul class="info_about list bb-1">${distance + shuttle + shuttleFrequency}<li>On air parking</li></ul> 
                    <div class="flex justify-between price_section bb-1">
                        <div>
                            <div class="tab mb-4 fs-12 font-medium">Online-only price</div>
                            <p class="price mb-1">$${renderPriceDay(startDate,endDate,total)} /day</p>
                            <p class="n-left font-semibold">Only 8 left at this price</p>
                        </div>
                        <div class="guarantee_section">
                            <div class="font-bold items-center flex mb-1">
                                <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 5.25C10.5 6.64238 9.94688 7.97774 8.96232 8.9623C7.97775 9.94687 6.64239 10.5 5.25 10.5C3.85762 10.5 2.52226 9.94687 1.53769 8.9623C0.553124 7.97774 0 6.64238 0 5.25C0 3.85761 0.553124 2.52225 1.53769 1.53769C2.52226 0.553123 3.85762 0 5.25 0C6.64239 0 7.97775 0.553123 8.96232 1.53769C9.94688 2.52225 10.5 3.85761 10.5 5.25ZM5.11613 2.71425L4.48875 4.07312C4.47775 4.09679 4.46088 4.11725 4.43975 4.13256C4.41862 4.14788 4.39392 4.15754 4.368 4.16062L2.88225 4.33737C2.85319 4.34074 2.8257 4.35237 2.80304 4.37087C2.78038 4.38937 2.7635 4.41398 2.75438 4.44178C2.74527 4.46958 2.74431 4.49941 2.75162 4.52773C2.75893 4.55606 2.7742 4.5817 2.79563 4.60162L3.89463 5.6175C3.91394 5.6353 3.92835 5.65776 3.93647 5.68274C3.94459 5.70772 3.94615 5.73437 3.941 5.76012L3.64875 7.22749C3.6225 7.35612 3.759 7.45499 3.87363 7.39112L5.17913 6.6605C5.20198 6.6477 5.22774 6.64098 5.25394 6.64098C5.28014 6.64098 5.3059 6.6477 5.32875 6.6605L6.63425 7.39112C6.748 7.45499 6.88538 7.35612 6.86 7.22749L6.56775 5.76012C6.5626 5.73437 6.56416 5.70772 6.57228 5.68274C6.58041 5.65776 6.59482 5.6353 6.61413 5.6175L7.71313 4.60162C7.73455 4.5817 7.74983 4.55606 7.75713 4.52773C7.76444 4.49941 7.76348 4.46958 7.75437 4.44178C7.74526 4.41398 7.72837 4.38937 7.70571 4.37087C7.68305 4.35237 7.65556 4.34074 7.6265 4.33737L6.14075 4.16062C6.11484 4.15754 6.09014 4.14788 6.06901 4.13256C6.04787 4.11725 6.03101 4.09679 6.02 4.07312L5.39263 2.71425C5.38029 2.68788 5.36069 2.66558 5.33612 2.64995C5.31156 2.63433 5.28305 2.62603 5.25394 2.62603C5.22483 2.62603 5.19632 2.63433 5.17176 2.64995C5.14719 2.66558 5.12759 2.68788 5.11525 2.71425H5.11613ZM5.25 11.375C6.50173 11.3769 7.72372 10.9935 8.75001 10.2769V13.5625C8.74996 13.6428 8.7278 13.7215 8.68598 13.7901C8.64415 13.8586 8.58426 13.9144 8.51287 13.9511C8.44148 13.9879 8.36135 14.0043 8.28125 13.9986C8.20115 13.9929 8.12417 13.9652 8.05875 13.9186L5.25 12.25L2.44125 13.9186C2.37583 13.9652 2.29886 13.9929 2.21876 13.9986C2.13866 14.0043 2.05852 13.9879 1.98713 13.9511C1.91574 13.9144 1.85586 13.8586 1.81403 13.7901C1.7722 13.7215 1.75005 13.6428 1.75 13.5625V10.2769C2.77628 10.9935 3.99827 11.3769 5.25 11.375Z" fill="#515356"/>
                                </svg>
                                <p class="font-bold fs-12 ml-2">Lowest price guarantee</p>
                            </div>
                            <p class="fs-10">We’ll pay you the difference if you find the same deal cheaper after booking</p>
                        </div>
                    </div>
                    <div class="cancel_section bb-1">
                        <h3 class="title mb-5">Can I cancel?</h3>
                        <div class="flex">
                            <svg class="flex-shrink-0 mr-2 mt-1" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6.5L5.72727 10.5L14 1" stroke="#069B27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div>
                                <p class="font-bold c-green mb-2 fs-16">Free cancellation until ${startDate.split('-')[2]} ${arrMouth[+startDate.split('-')[1] - 1]}</p>
                                <p class="fs-14">Simply respond to your e-mail confirmation reservation with the reservation number in it saying "I'd like a refund" or something of the sort. We’ll process your refund within 48 h, or on the next business day if it's on a weekend.</p>
                            </div>
                        </div>
                    </div>
                    <div class="location_section bb-1">
                        <h3 class="title mb-2">Facility Location</h3>
                        <p class="mb-5 flex items-center">Exact location provided after booking 
                            <label class="relative">
                                <svg class="flex-shrink-0 ml-2 icon_info" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8.5" cy="8.5" r="8" stroke="#515356"/>
                                    <path d="M7.92045 13V6.45455H8.92614V13H7.92045ZM8.43182 5.36364C8.2358 5.36364 8.06676 5.29688 7.92472 5.16335C7.78551 5.02983 7.71591 4.86932 7.71591 4.68182C7.71591 4.49432 7.78551 4.33381 7.92472 4.20028C8.06676 4.06676 8.2358 4 8.43182 4C8.62784 4 8.79545 4.06676 8.93466 4.20028C9.0767 4.33381 9.14773 4.49432 9.14773 4.68182C9.14773 4.86932 9.0767 5.02983 8.93466 5.16335C8.79545 5.29688 8.62784 5.36364 8.43182 5.36364Z" fill="#515356"/>
                                </svg>
                                <span class="tooltip">In order to provide you with the best possible deal, we can only share the address of where you're parking after you purchase. If you are not satisfied with the facility we paired you with, you can cancel your reservation.</span>
                            </label>
                        </p>
                    </div>
                    <div class="measures_section bb-1">
                        <h3 class="title mb-5">Safety Measures</h3>
                        <ul class="list mb-2">
                            <li>On air parking with a fence</li>
                            <li>On-Site Staff</li>
                        </ul>
                        <p>On Air Parking partners with 4 and 5-star facilities to provide travelers with the excellent quality, price, and service</p>
                    </div>
                    <div class="reviews_section">
                        <div class="flex justify-between mb-5">
                            <h3 class="title">Reviews</h3>
                            <button class="btn_see-all flex items-center" type="button">See all
                                <svg class="ml-2" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 9L5 5L1 1" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="reviews-slider"></div>
                    </div>
                `)

                document.querySelector('.location_section p').after(document.querySelector('#google-map-parking-at')); //move map
                //click on See all button
                document.querySelector('.btn_see-all').addEventListener('click', (e) => {
                    scrollTop(document.querySelector('#parkingat > div > article > div > .demo-loadmore-list').parentElement, e.target)
                    pushDataLayer( 'Click on the see all')
                })

                //add slides in slider carousel
                let listReview = document.querySelectorAll('.demo-loadmore-list ul.ant-list-items > li'),
                    countReview = listReview.length > 5 ? 6 : listReview.length;

                for (let i = 0; i < countReview; i++) {
                    document.querySelector('.reviews-slider').insertAdjacentHTML('beforeend',`<div class="slide">${listReview[i].innerHTML}</div>`)
                }
                //events
                document.querySelector('.reviews-slider').addEventListener('touchstart', (e) => pushDataLayer('Using of the review slider'))
                document.querySelector('.icon_info').addEventListener('click', (e) => pushDataLayer('Tap on the info icon'))

                startSlider()//init carousel
                changeImage()//change image

                //add free Cancellation element in DOM
                setTimeout(() => {
                    parent.querySelector('#detail-info > p').insertAdjacentHTML('beforebegin', freeCancellation)
                }, 500)
            }
        }
    })
}

let sentPost = false;
let viewed = false;

let arrImage = ['aerial-view-road-buildings-cars-parked-lot-sunny-day.jpg','cars-parking.jpg','overhead-view-car-parking-slots-copy-space.jpg','parked-vehicles-view.jpg','top-view-cars-parking-lot.jpg','transport-concept-with-parked-cars.jpg'];

let parkingat_items = [];
//change image
let changeImage = () => {
    let startImage = setInterval(() => {
        if (document.querySelector('#parkingat') != null && document.querySelector('#parkingat > div > article > div > h1') != null && document.querySelector('#parkingat > div > article > div.relative > img') != null) {
            let image = arrImage[arrImage.length * Math.random() | 0];
            let objParking = ''
            if (localStorage.getItem('parkingat_items') != null) {
                let itemsStorage = JSON.parse(localStorage.getItem('parkingat_items'));
                objParking = itemsStorage.filter((item,index) => {
                    if (item.name == document.querySelector('#parkingat > div > article > div > h1').innerText) {
                        return item
                    }
                })

                if (objParking != '') {
                    document.querySelector('#parkingat > div > article > div.relative > img').src = `https://conversionratestore.github.io/projects/onairparking/img/parking/${objParking[0].image}`;
                } else {
                    parkingat_items.push({
                        'image': image,
                        'name': document.querySelector('#parkingat > div > article > div > h1').innerText
                    })
                    console.log(parkingat_items)
                    localStorage.setItem('parkingat_items', JSON.stringify(parkingat_items))
                    document.querySelector('#parkingat > div > article > div.relative > img').src = `https://conversionratestore.github.io/projects/onairparking/img/parking/${image}`;
                }
            } else {
                parkingat_items.push({
                    'image': image,
                    'name': document.querySelector('#parkingat > div > article > div > h1').innerText
                })
                localStorage.setItem('parkingat_items', JSON.stringify(parkingat_items))
                document.querySelector('#parkingat > div > article > div.relative > img').src = `https://conversionratestore.github.io/projects/onairparking/img/parking/${image}`;
            }
        }
    }, 100)
}

let start = setInterval(() => {
    if (document.querySelector('#__NEXT_DATA__') != null && window.location.pathname.includes('/parkingat/') && document.querySelector('#parkingat') != null && document.querySelector('#detail-info > p.block') != null && document.querySelector('#detail-info > table tr') != null && document.querySelector('#detail-info > button') != null) {
        document.querySelector('.js-style') == null ? document.body.insertAdjacentHTML('afterbegin', style) : ''; // add style

        if (sentPost == false) {
            sentPost = true;

            let initial = window.location.href.split('parkingat/')[1].split('?')[0].replace(/[0-9]/g, '');
            let arr = document.querySelector('#__NEXT_DATA__').innerText.split(`,"airport_initials":"${initial.toUpperCase()}`)[0].split('"airport_id":'),
                id = arr[arr.length - 1],
                urlCode = window.location.href.split('parkingat/')[1].split('?')[0].toUpperCase(),
                startDate = window.location.href.split('checkin=')[1].split('&')[0],
                endDate = window.location.href.split('checkout=')[1],
                parent = document.querySelector('#parkingat');

            let total = '';
            let tr = document.querySelectorAll('#detail-info > table tr.text-base');
            for (let i = 0; i < tr.length; i++) {
                if (tr[i].querySelector('td').innerText.toLowerCase() == 'total') {
                    total = tr[i].querySelector('td:last-child').innerText.replace('$','');
                }
            }

            postParking(id, startDate, endDate, parent, urlCode, total) // send post parking

            //add fix button
            document.body.insertAdjacentHTML('beforeend',`<div class="fix_footer"><button type="button" class="btn_reserve-now">Reserve now</button></div>`)
            //Reserve now sticky button
            let reserveBtn = document.querySelector('#detail-info > button.ant-btn');
            document.querySelector('.btn_reserve-now').addEventListener('click', () => {
                reserveBtn.classList.add('click-btn-sticky')
                reserveBtn.click();
                pushDataLayer('Click at Reserve now sticky button')
            })
            //click on Reserve now button
            reserveBtn.addEventListener('click', (e) => {
                if (!e.target.classList.contains('click-btn-sticky')) {
                    pushDataLayer('Click at Reserve now button')
                } else {
                    reserveBtn.classList.remove('click-btn-sticky')
                }
            })
            document.querySelector('#parkingat > div > article > div.flex > button').addEventListener('click', (e) => pushDataLayer('Click at Reserve now button'))

            window.addEventListener('scroll', () => {
                if (document.querySelector('#detail-info > button.ant-btn') != null || document.querySelector('#parkingat > div > article > div.flex.flex-col > button') != null) {
                    if (isScrolledIntoView(document.querySelector('#detail-info > button.ant-btn')) == true || isScrolledIntoView(document.querySelector('#parkingat > div > article > div.flex.flex-col > button')) == true) {
                        if (viewed == false) {
                            viewed = true;
                            document.querySelector('.fix_footer').classList.remove('active');
                        }
                    } else {
                        document.querySelector('.fix_footer').classList.add('active');
                        viewed = false;
                    }
                }
            })
        }
    }
})

let startRemove = () => {
    let startRemove = setInterval(() => {
        if (document.querySelector('#parkingat') == null || document.querySelector('#easy-checkout') != null) {
            // clearInterval(startRemove)
            document.querySelector('.js-style') != null ? document.querySelector('.js-style').remove() : '';
            sentPost = false;
        }
    },100)
}
startRemove()

let startEdit = setInterval(() => {
    if (window.location.pathname.includes('/parkingat/') && document.querySelector('#detail-info > div.flex.flex-row > div > svg') == null && document.querySelector('#detail-info > div.flex.flex-row.justify-between.items-center > div.text-secondary.underline.font-medium.cursor-pointer') != null && document.querySelector('.price_section .price') != null) {
        let editBtn = document.querySelector('#detail-info > div.flex.flex-row.justify-between.items-center > div.text-secondary.underline.font-medium.cursor-pointer');
        editBtn.classList.add('flex','lh-14');
        editBtn.insertAdjacentHTML('beforeend',`
            <svg class="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 11.6667H12.25" stroke="#5D99D6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.625 2.04164C9.85706 1.80957 10.1718 1.6792 10.5 1.6792C10.6625 1.6792 10.8234 1.71121 10.9735 1.77339C11.1237 1.83558 11.2601 1.92673 11.375 2.04164C11.4899 2.15654 11.5811 2.29296 11.6432 2.44309C11.7054 2.59322 11.7374 2.75413 11.7374 2.91664C11.7374 3.07914 11.7054 3.24005 11.6432 3.39018C11.5811 3.54032 11.4899 3.67673 11.375 3.79164L4.08333 11.0833L1.75 11.6666L2.33333 9.3333L9.625 2.04164Z" stroke="#5D99D6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`)
        editBtn.addEventListener('click', () => pushDataLayer('Click at Edit button'))
        if (document.querySelector('.free_block') != null) {
            document.querySelector('#detail-info > table').after(document.querySelector('.free_block'))
        }
        let date1 = document.querySelector('#detail-info > div.grid.grid-cols-2.gap-2.w-full.mt-4.justify-between > div:nth-child(1) > p').innerText,
            date2 = document.querySelector('#detail-info > div.grid.grid-cols-2.gap-2.w-full.mt-4.justify-between > div:nth-child(2) > p').innerText,
            year1 = date1.split(', ')[1].split(' ')[0],
            year2 = date2.split(', ')[1].split(' ')[0],
            mouth1 = formatDate[date1.split(' ')[0]],
            mouth2 = formatDate[date2.split(' ')[0]],
            day1 = date1.split(', ')[0].split(' ')[1],
            day2 = date2.split(', ')[0].split(' ')[1];

        let startDate = `${year1}-${mouth1}-${day1}`,
            endDate = `${year2}-${mouth2}-${day2}`;

        let total = '';
        let tr = document.querySelectorAll('#detail-info > table tr.text-base');
        for (let i = 0; i < tr.length; i++) {
            if (tr[i].querySelector('td').innerText.toLowerCase() == 'total') {
                total = tr[i].querySelector('td:last-child').innerText.replace('$','');
            }
        }
        document.querySelector('.price_section .price').innerHTML = `$${renderPriceDay(startDate,endDate,total)} /day`
    }
}, 100)

let startSlider = () => {
    let sliderInterval = setInterval( () => {
        if(document.querySelector('.tns-carousel') == null && document.querySelector('.reviews-slider') != null) {
            clearInterval(sliderInterval)
            //init slider carousel
            let sliderCategories = tns({
                container: document.querySelector('.reviews-slider'),
                items: 2,
                controls: false,
                loop: false,
                mouseDrag: true,
                preventScrollOnTouch: 'auto',
                swipeAngle: false,
            });

            //events
            if (document.querySelector('.tns-nav') != null) {
                document.querySelector('.tns-nav').addEventListener('click', (e) => pushDataLayer('Using of the review slider'))
            }
        }
    },100)
}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Complete redesign PDP',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "complete_redesign_pdp", "variant_1");
    }
}, 100)
