let style = `
<style class="js-style">
    #parkingat > div > article {
        margin-top: 20px!important;
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
    .review_block {
        font-size: 14px;
        line-height: 16px;
        color: #515356;
        margin-top: 10px;
    }
    .review_block ul {
        padding-right: 7px;
    }
    .review_block ul svg {
        margin-right: 3px;
    }
    .info_about {
        font-size: 14px;
        line-height: 24px;
        list-style-type: disc;
        padding-left: 24px;
        margin-bottom: 20px;
    }
    .fs-10 {
        font-size: 10px;
        line-height: 14px;
    }
    .fs-12 {
        font-size: 12px;
        line-height: 14px;
    }
    .guarantee_block {
        background: rgba(6, 155, 39, 0.15);
        border-radius: 5px;
        padding: 10px;
        width: 171px;
    }
    .price_block .tab {
        background: #069B27;
        border-radius: 3px;
        padding: 4px 8px;
        color: #FFFFFF;
    }
    .price_block .price {
        font-weight: 800;
        font-size: 20px;
        line-height: 23px;
        color: #515356;
    }
    .price_block .n-left {
        font-size: 13px;
        line-height: 15px;
        color: #F37621;
    }
    
</style>`

//push dataLayer
let pushDataLayer = (action) => {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Redesign landing page',
        'eventAction': action,
    });
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

let renderPrice = (price) => {
    let priceBlockHtml = `
        <div class="flex justify-between price_block">
            <div>
                <div class="tab mb-4 fs-12 font-medium">Online-only price</div>
                <p class="price mb-1">$${price} /day</p>
                <p class="n-left font-semibold">Only 8 left at this price</p>
            </div>
            <div class="guarantee_block">
                <div class="font-bold items-center flex mb-1">
                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 5.25C10.5 6.64238 9.94688 7.97774 8.96232 8.9623C7.97775 9.94687 6.64239 10.5 5.25 10.5C3.85762 10.5 2.52226 9.94687 1.53769 8.9623C0.553124 7.97774 0 6.64238 0 5.25C0 3.85761 0.553124 2.52225 1.53769 1.53769C2.52226 0.553123 3.85762 0 5.25 0C6.64239 0 7.97775 0.553123 8.96232 1.53769C9.94688 2.52225 10.5 3.85761 10.5 5.25ZM5.11613 2.71425L4.48875 4.07312C4.47775 4.09679 4.46088 4.11725 4.43975 4.13256C4.41862 4.14788 4.39392 4.15754 4.368 4.16062L2.88225 4.33737C2.85319 4.34074 2.8257 4.35237 2.80304 4.37087C2.78038 4.38937 2.7635 4.41398 2.75438 4.44178C2.74527 4.46958 2.74431 4.49941 2.75162 4.52773C2.75893 4.55606 2.7742 4.5817 2.79563 4.60162L3.89463 5.6175C3.91394 5.6353 3.92835 5.65776 3.93647 5.68274C3.94459 5.70772 3.94615 5.73437 3.941 5.76012L3.64875 7.22749C3.6225 7.35612 3.759 7.45499 3.87363 7.39112L5.17913 6.6605C5.20198 6.6477 5.22774 6.64098 5.25394 6.64098C5.28014 6.64098 5.3059 6.6477 5.32875 6.6605L6.63425 7.39112C6.748 7.45499 6.88538 7.35612 6.86 7.22749L6.56775 5.76012C6.5626 5.73437 6.56416 5.70772 6.57228 5.68274C6.58041 5.65776 6.59482 5.6353 6.61413 5.6175L7.71313 4.60162C7.73455 4.5817 7.74983 4.55606 7.75713 4.52773C7.76444 4.49941 7.76348 4.46958 7.75437 4.44178C7.74526 4.41398 7.72837 4.38937 7.70571 4.37087C7.68305 4.35237 7.65556 4.34074 7.6265 4.33737L6.14075 4.16062C6.11484 4.15754 6.09014 4.14788 6.06901 4.13256C6.04787 4.11725 6.03101 4.09679 6.02 4.07312L5.39263 2.71425C5.38029 2.68788 5.36069 2.66558 5.33612 2.64995C5.31156 2.63433 5.28305 2.62603 5.25394 2.62603C5.22483 2.62603 5.19632 2.63433 5.17176 2.64995C5.14719 2.66558 5.12759 2.68788 5.11525 2.71425H5.11613ZM5.25 11.375C6.50173 11.3769 7.72372 10.9935 8.75001 10.2769V13.5625C8.74996 13.6428 8.7278 13.7215 8.68598 13.7901C8.64415 13.8586 8.58426 13.9144 8.51287 13.9511C8.44148 13.9879 8.36135 14.0043 8.28125 13.9986C8.20115 13.9929 8.12417 13.9652 8.05875 13.9186L5.25 12.25L2.44125 13.9186C2.37583 13.9652 2.29886 13.9929 2.21876 13.9986C2.13866 14.0043 2.05852 13.9879 1.98713 13.9511C1.91574 13.9144 1.85586 13.8586 1.81403 13.7901C1.7722 13.7215 1.75005 13.6428 1.75 13.5625V10.2769C2.77628 10.9935 3.99827 11.3769 5.25 11.375Z" fill="#515356"/>
                    </svg>
                    <p class="font-bold fs-12 pl-3">Lowest price guarantee</p>
                </div>
                <p class="fs-10">We’ll pay you the difference if you find the same deal cheaper after booking</p>
            </div>
        </div>`

    return priceBlockHtml
}
let postParking = (id, startDate, endDate, parent) => {

    fetch(`https://www.onairparking.com/api/Facility/SearchAlternate`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: `{"airport_id":${id},"start_date":"${startDate}","end_date":"${endDate}"}`

    }).then(res => res.json()).then(data => {
        console.log(data)
        let result = data.result[0];

        let distance = '',
            shuttle = '',
            shuttleFrequency = '';

        let highlights = result['highlights'];
        for (let h = 0; h < highlights.length; h++) {
            if (highlights[h].type == 'facility_distance' && (highlights[h].description != null || result['facility_airport_distance'] != null)) {
                distance = `<li>Distance from airport: <span class="font-bold">` + (highlights[h].description != null ? highlights[h].description : result['facility_airport_distance'] != null ? `${result['facility_airport_distance']} miles` : '') + `</span></li>`;
            } else if (highlights[h].type == 'facility_free_shuttles' && highlights[h].description != null) {
                shuttle = `<li>Free shuttle <span class="font-bold">${highlights[h].description}</span>`;
            } else if (highlights[h].type == 'facility_shuttle_frequency' && highlights[h].description != null) {
                shuttleFrequency = ` <span class="font-bold">${highlights[h].description}</span></li>`;
            }
        }
        //rewiev
        parent.querySelector('div > article > div.flex > span').innerHTML = `<span class="review_block flex items-center"><ul class="flex">${renderStar(result['facility_review'])}</ul> (${result['num_review']})</span>`;
        //info about
        parent.querySelector('div > article > div.flex.flex-col').insertAdjacentHTML('afterend',`<ul class="info_about">${distance + shuttle + shuttleFrequency}<li>On air parking</li></ul> ${renderPrice(result['facility_selling_price'].toFixed(2))}`)

    })
}

let sentPost = false;

let start = setInterval(() => {
    if (document.querySelector('#__NEXT_DATA__') != null && window.location.pathname.includes('/parkingat/') && document.querySelector('#parkingat') != null && document.querySelector('.js-style') == null) {
        document.body.insertAdjacentHTML('afterbegin', style) // add style
        let id = document.querySelector('#__NEXT_DATA__').innerHTML.split(`airport_id":`)[1].split(',')[0],
            startDate = window.location.href.split('checkin=')[1].split('&')[0],
            endDate = window.location.href.split('checkout=')[1],
            parent = document.querySelector('#parkingat');
        if (sentPost == false) {
            sentPost = true;
            postParking(id, startDate, endDate, parent)
        }

    }
},100)

let startRemove = setInterval(() => {
    if (document.querySelector('.js-style') != null && !window.location.pathname.includes('/parking/')) {
        clearInterval(startRemove)
        document.querySelector('.js-style').remove();
    }
},100)
