let style = `
<style class="js-style">
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
    #list_parking {
            background: #FEF3EB;
        }
    #list_parking .btn {
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
    #list_parking .btn_gray {
        background-color: #8d8d8d;
    }
    #list_parking > li {
        background: #FFFFFF;
        border-radius: 10px;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05), 0px 0px 19px rgba(0, 0, 0, 0.05), 0px 2px 10px rgba(0, 0, 0, 0.06);
    }
    #list_parking > li:not(:last-child) {
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
    .btns-edit button {
        background: #FFFFFF;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15), 0px 0px 20px rgba(0, 0, 0, 0.1);
        border-radius: 86px;
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
        #list_parking .btn {
            margin-right: 10px;
        }
    }
</style>`

let html = `
<div class="wrapper">
    <div id="map-main"></div>
    
    <div class="flex items-center justify-between btns-edit">
        <button type="button" class="btn-edit-name items-center flex">
            <span></span>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25879 10.9995H11.5154" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.88491 1.36289C9.11726 1.13054 9.43241 1 9.76101 1C9.92371 1 10.0848 1.03205 10.2351 1.09431C10.3855 1.15658 10.5221 1.24784 10.6371 1.36289C10.7522 1.47794 10.8434 1.61453 10.9057 1.76485C10.968 1.91517 11 2.07629 11 2.23899C11 2.4017 10.968 2.56281 10.9057 2.71314C10.8434 2.86346 10.7522 3.00004 10.6371 3.11509L3.33627 10.4159L1 11L1.58407 8.66373L8.88491 1.36289Z" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button type="button" class="btn-edit-date items-center flex">
            <span>
                From: <span class="from"></span> <br>
                To: <span class="to"></span>
            </span>
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25879 10.9995H11.5154" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.88491 1.36289C9.11726 1.13054 9.43241 1 9.76101 1C9.92371 1 10.0848 1.03205 10.2351 1.09431C10.3855 1.15658 10.5221 1.24784 10.6371 1.36289C10.7522 1.47794 10.8434 1.61453 10.9057 1.76485C10.968 1.91517 11 2.07629 11 2.23899C11 2.4017 10.968 2.56281 10.9057 2.71314C10.8434 2.86346 10.7522 3.00004 10.6371 3.11509L3.33627 10.4159L1 11L1.58407 8.66373L8.88491 1.36289Z" stroke="#515356" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>    
        </button>
    </div>
    <div class="swipe">
        <div class="flex items-center justify-between swipe-header">
            <div class="count_parking"><span></span> parkings found</div>
            <div class="sort">Sort by: <button type="button" class="ml-2">PRICE</button></div>
        </div>
        <ul id="list_parking" class="p-4"></ul>
    </div>

</div>
`;

let emptyHtml = `<div class="ant-empty ant-empty-normal"><div class="ant-empty-image"><svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse><g class="ant-empty-img-simple-g" fill-rule="nonzero"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" class="ant-empty-img-simple-path"></path></g></g></svg></div><div class="ant-empty-description">No Data</div></div>`;

let lowerPrice = `<div class="lowest_price">Lowest price</div>`,
    bestReviews = `<div class="best_reviews">Best reviews</div>`;

let formatDate = {
    '01':'Jan',
    '02':'Feb',
    '03':'Mar',
    '04':'Apr',
    '05':'May',
    '06':'Jun',
    '07':'Jul',
    '08':'Aug',
    '09':'Sep',
    '10':'Oct',
    '11':'Nov',
    '12':'Dec'
}

/* Classes method for Parking */
class Parking{
    constructor(url, name, reviews, distance, shuttle, shuttleFrequency, freeCancellation, price, minDay, soldOut, unavailable, parent) {
        this.url = url;
        this.name = name;
        this.reviews = reviews;
        this.distance = distance;
        this.shuttle = shuttle;
        this.shuttleFrequency = shuttleFrequency;
        this.freeCancellation = freeCancellation;
        this.price = price;
        this.minDay = minDay;
        this.soldOut = soldOut;
        this.unavailable = unavailable;
        this.parent = parent;
        this.checkin = window.location.href.split('checkin=')[1].split('&')[0];
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
                        <li>Free Shuttle ${this.shuttle} <b>${this.shuttleFrequency}</b></li>
                    </ul>
                </div>
                <div>
                    <div class="relative">
                        <p class="c-green">Free Cancellation until ${this.freeCancellation.includes('up to start date') ? this.checkin.split('-')[2] : this.freeCancellation} ${formatDate[this.checkin.split('-')[1]]}</p>
                    </div>
                    <div class="flex items-center">
                        ${this.renderBtn()}
                        <p class="price_parking"><b>$${this.price.toFixed(2)}</b> / day</p>
                    </div>
                    ${this.renderText()}
                </div
            </a>
        `

        this.parent.appendChild(element);
    }
}

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

let postParking = (id, startDate, endDate, parent) => {

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

        if (result.length > 0) {

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
                new Parking(url,name,reviews,distance,shuttle,shuttleFrequency,freeCancellation,price,minDay,soldOut,unavailable,parent).render();
            }

            //lowerPrice
            let prices = document.querySelectorAll('#list_parking .price_parking b'),
                minNumber = [].reduce.call(prices, (a, b) => 0 >= a.innerHTML.replace('$','') - b.innerHTML.replace('$','') ? a : b)
            minNumber.closest('#list_parking > li').querySelector('.notes_parking').insertAdjacentHTML('beforeend', lowerPrice)

            //bestReviews
            let rating = document.querySelectorAll("#list_parking .rate_parking"),
                maxNumber = [].reduce.call(rating, (a, b) => 0 < a.dataset.rate - b.dataset.rate ? a : b)
            maxNumber.closest('#list_parking > li').querySelector('.notes_parking').insertAdjacentHTML('beforeend', bestReviews)

            let children =  [...parent.children]; //parking list

            //add "Only 8 left at this price"
            let randomIndex = Math.floor(Math.random() * children.length); //random
            children[randomIndex].querySelector('.c-green').insertAdjacentHTML('beforebegin',`<p class="c-red">Only 8 left at this price</p>`)

            //events
            children.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('underline')) {
                        if (item.querySelector('.lowest_price') != null && item.querySelector('.best_reviews') != null) {
                            pushDataLayer('Click on Lowest Price and Best reviews Parking section')
                        } else if (item.querySelector('.lowest_price') != null && item.querySelector('.best_reviews') == null) {
                            pushDataLayer('Click on Lowest Price Parking section')
                        } else if (item.querySelector('.best_reviews') != null && item.querySelector('.lowest_price') == null) {
                            pushDataLayer('Click on Best reviews Parking section')
                        } else if (item.querySelector('.lowest_price') == null && item.querySelector('.best_reviews') == null) {
                            pushDataLayer('Click on regular Parking section')
                        }
                    }
                })
            })
        } else {
            parent.innerHTML = emptyHtml;
        }
    })
}

let sentPost = false;

let start = setInterval(() => {
    if (document.querySelector('#__NEXT_DATA__') != null && window.location.pathname.includes('/reservation/search') && document.querySelector('#__next > section > main > div > div.container > div.grid > div.flex > button > span:nth-child(2)') != null) {
        document.querySelector('.js-style') == null ? document.body.insertAdjacentHTML('afterbegin', style) : ''; // add style

        if (sentPost == false) {
            sentPost = true;
            document.querySelector('#__next > section > nav').insertAdjacentHTML('afterend', html)

            let initial = window.location.href.split('initials=')[1].split('&')[0];
            let arr = document.querySelector('#__NEXT_DATA__').innerText.split(`,"airport_initials":"${initial}`)[0].split('"airport_id":'),
                id = arr[arr.length - 1],
                startDate = window.location.href.split('checkin=')[1].split('&')[0],
                endDate = window.location.href.split('checkout=')[1],
                parent = document.querySelector('#list_parking');

            postParking(id, startDate, endDate, parent) // send post parking

        }
    }
})

let startRemove = () => {
    let startRemove = setInterval(() => {
        if (document.querySelector('#parkingat') != null || document.querySelector('#easy-checkout') != null || document.querySelector('.search-switch') != null) {
            // clearInterval(startRemove)
            document.querySelector('.js-style') != null ? document.querySelector('.js-style').remove() : '';
            sentPost = false;
        }
    },100)
}
startRemove()
