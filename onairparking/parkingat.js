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
    #parkingat .review_block {
        font-size: 14px;
        line-height: 16px;
        color: #515356;
        margin-top: 10px;
    }
    #parkingat .review_block ul {
        padding-right: 7px;
    }
    #parkingat .review_block ul svg {
        margin-right: 3px;
    }
    #parkingat .info_about {
        font-size: 14px;
        line-height: 24px;
        list-style-type: disc;
        padding-left: 24px;
        margin-bottom: 20px;
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

        let name = result['facility_lot'],
            distance = '',
            shuttle = '',
            shuttleFrequency = '',
            freeCancellation = '',
            price = result['facility_selling_price'],
            minDay = result['facility_min_days'],
            soldOut = result['date_sold_out'],
            unavailable = result['not_sufficient_days'];

        let highlights = result['highlights'];
        for (let h = 0; h < highlights.length; h++) {
            if (highlights[h].type == 'facility_distance' && (highlights[h].description != null || result['facility_airport_distance'] != null)) {
                distance = `<li>Distance from airport: <span class="font-bold">` + (highlights[h].description != null ? highlights[h].description : result['facility_airport_distance'] != null ? `${result['facility_airport_distance']} miles` : '') + `</span></li>`;
            } else if (highlights[h].type == 'facility_free_shuttles' && highlights[h].description != null) {
                shuttle = `<li>Free shuttle <span class="font-bold">${highlights[h].description}</span>`;
            } else if (highlights[h].type == 'facility_shuttle_frequency' && highlights[h].description != null) {
                shuttleFrequency = `<span class="font-bold">${highlights[h].description}</span></li>`;
            }
        }
        //rewiev
        parent.querySelector('div > article > div.flex > span').innerHTML = `<span class="review_block flex items-center"><ul class="flex">${renderStar(result['facility_review'])}</ul> (${result['num_review']})</span>`;
        //info about
        parent.querySelector('div > article > div.flex.flex-col').insertAdjacentHTML('afterend',`<ul class="info_about">${distance + shuttle + shuttleFrequency}<li>On air parking</li></ul>`)

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
