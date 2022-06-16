let style = `
    <style class="js-style">
        .bg-white.rounded-md.relative.w-full.py-2.pl-4.pr-6.mb-3.text-gray-700.leading-tight.h-10.flex.flex-row.items-center.justify-center, button[data-test-id="park_now"] {
            display: none!important;
        }
        main > div > div.relative > div {
            background: url(https://conversionratestore.github.io/projects/onairparking/img/map-gradient.png) no-repeat center / cover!important;
        }
        h1 {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 800;
            font-size: 30px!important;
            line-height: 30px!important;
            display: block;
            text-transform: initial;
            padding: 0;
            margin-bottom: 22px!important;
        }
        h1 span {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            margin-top: 20px;
            padding: 0;
            display: block;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start {
             padding: 0;
             flex-direction: row;
             background: none;
             justify-content: space-between;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 {
             width: 48%;
             background: #FFF9ED;
             border-radius: 10px;
             position: relative;
             height: auto;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14:before {
             content: '';
             width: 24px;
             height: 24px;
             background: url('https://conversionratestore.github.io/projects/onairparking/img/calendar.svg') no-repeat center / contain;
             position: absolute;
             top: 50%;
             right: 13px;
             transform: translateY(-50%);
             pointer-events: none;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 > label {
             font-weight: 400;
             font-size: 10px;
             line-height: 12px;
             color: #7B7B7B;
             padding: 0 10px;
             position: absolute;
             left: 0;
             top: 8px;
             z-index: 3;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 input[type=date] {
             min-height: auto;
             font-weight: 700;
             font-size: 16px;
             line-height: 19px;
             padding: 22px 6px 6px;
        }
        .bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 input[type="date"]::-webkit-calendar-picker-indicator {
             color: transparent;
             background: none;
             z-index: 1;
             position: absolute;
             top: 50%;
             right: 10px;
             transform: translateY(-50%);
             width: 24px;
             height: 24px;
        }
        .input-ext {
             position: absolute;
             left: 0;
             top: 0;
             pointer-events: none;
             background: #FFF9ED;
             z-index: 2;
             width: calc(100% - 40px);
             padding: 22px calc(6px + 0.25rem) 6px;
             border-radius: 10px;
             font-weight: 700;
             color: #515356;
             font-size: 16px;
             line-height: 19px;
             text-transform: uppercase;
        }
        .guarant_item {
            width: 33.33%;
        }
        .guarant_item > div {
            height: 45px;
            margin-bottom: 10px;
            display: flex;
        }
        .guarant_item img {
            margin: auto auto 0 ;
        }
        .guarant_item p {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #515356;
        }
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
        .guarant {
            background: #FEF3EB;
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
            // cursor: not-allowed;
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
    </style>`

let emptyHtml = `<div class="ant-empty ant-empty-normal"><div class="ant-empty-image"><svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 1)" fill="none" fill-rule="evenodd"><ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7"></ellipse><g class="ant-empty-img-simple-g" fill-rule="nonzero"><path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path><path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" class="ant-empty-img-simple-path"></path></g></g></svg></div><div class="ant-empty-description">No Data</div></div>`;

let html = `
    <ul id="list_parking" class="p-4"></ul>
    <div class="guarant flex justify-between pt-4 pb-8">
        <div class="guarant_item">
            <div>
                <img src="https://conversionratestore.github.io/projects/onairparking/img/price.svg" alt="icon">
            </div>
            <p>The lowest price guaranteed</p>
        </div>
        <div class="guarant_item">
            <div>
                <img src="https://conversionratestore.github.io/projects/onairparking/img/free-cancellation.png" alt="icon">
            </div>
            <p>Free <br> cancellation</p>
        </div>
        <div class="guarant_item">
            <div>
                <img src="https://conversionratestore.github.io/projects/onairparking/img/shuttle.png" alt="icon">
            </div>
            <p>24/7 free <br> shuttle service</p>
        </div>
    </div>`;

let lowerPrice = `<div class="lowest_price">Lowest price</div>`,
    bestReviews = `<div class="best_reviews">Best reviews</div>`;
    
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
            review[i];
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
            return `<small class="block mt-1.5">This facility is sold out for this period. <span class="block text-secondary underline cursor-pointer">Change the dates!</span></small>`
        } else if (this.unavailable == 1) {
            return `<small class="block mt-1.5">This facility requires a minimum <span class="truncate">of <strong>${this.minDay}</strong> days.</span> <span class="text-secondary underline cursor-pointer block">Change the dates!</span></small>`
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

        console.log(this.reviews + " = " + this.name)
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
                        <li>Distance: <b>${this.distance}</b></li>
                        <li>Free Shuttle ${this.shuttle} <b>${this.shuttleFrequency}</b></li>
                    </ul>
                </div>
                <div>
                    <div class="relative">
                        <p class="c-green">Free Cancellation until ${this.freeCancellation.includes('up to start date') ? document.querySelector('.input-ext').value : this.freeCancellation}</p>
                    </div>
                    <div class="flex items-center">
                        ${this.renderBtn()}
                        <p class="price_parking"><b>$${this.price.toFixed(2)}</b> / day</p>
                    </div>
                    ${this.renderText()}
                </div
            </a>
        `
        console.log(this.parent + " == parent Parking")
        this.parent.appendChild(element);
    }
}
  
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

//scrooll top
function scrollTop(a, b) {
    const scrollTarget = a;
    const topOffset = b.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
  
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

//push dataLayer
function pushDataLayer(action) {
    console.log(action)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Redesign landing page',
        'eventAction': action,
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
                    distance = result[i].highlights[2].description != null ? result[i].highlights[2].description : '',
                    shuttle = result[i].highlights[0].description != null ? result[i].highlights[0].description : '',
                    shuttleFrequency = result[i].highlights[1].description != null ? result[i].highlights[1].description : '',
                    freeCancellation = result[i].highlights[3].description != null ? result[i].highlights[3].description : '',
                    price = result[i]['facility_selling_price'],
                    minDay = result[i]['facility_min_days'],
                    soldOut = result[i]['date_sold_out'],
                    unavailable = result[i]['not_sufficient_days'];
    
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

            //scroll top
            parent.querySelectorAll('small .underline').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrollTop(document.body, e.target)
                })
            })
            
            let children =  [...parent.children]; //parking list

            //add "Only 8 left at this price"
            let randomIndex = Math.floor(Math.random() * children.length); //random
            console.log(randomIndex)
            children[randomIndex].querySelector('.c-green').insertAdjacentHTML('beforebegin',`<p class="c-red">Only 8 left at this price</p>`)

            //events
            children.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (item.querySelector('.lowest_price') != null && item.querySelector('.best_reviews') != null) {
                        pushDataLayer('Click on Lowest Price and Best reviews Parking section')
                    } else if (item.querySelector('.lowest_price') != null && item.querySelector('.best_reviews') == null) {
                        pushDataLayer('Click on Lowest Price Parking section')
                    } else if (item.querySelector('.best_reviews') != null && item.querySelector('.lowest_price') == null) {
                        pushDataLayer('Click on Best reviews Parking section')
                    } else if (item.querySelector('.lowest_price') == null && item.querySelector('.best_reviews') == null) {
                        pushDataLayer('Click on regular Parking section')
                    }
                })
            })
        } else {
            parent.innerHTML = emptyHtml;
        }
    }) 
}

let loadedLocation = false;
let viewed = false;

let intevalOne = setInterval(() => { 
    if (document.querySelector('#__NEXT_DATA__') != null && document.querySelector('.h-14 input[data-test-id="mob_start_date"]') != null && document.querySelector('.h-14 input[data-test-id="mob_end_date"]') != null && document.querySelector('#list_parking') != null && document.querySelector('button[data-test-id="park_now"]') != null) {
        clearInterval(intevalOne)
        //get id parking
        let arr = document.querySelector('#__NEXT_DATA__').innerHTML.split(`,"airport_initials":"${document.querySelector('[data-test-id="airport"]').value.split('-')[0].trim()}"`)[0].split('"airport_id":'),
            id = arr[arr.length - 1];
    
        //get start/end dates
        let startDate = document.querySelector('[data-test-id="mob_start_date"]').value, 
        endDate = document.querySelector('[data-test-id="mob_end_date"]').value;
        
        document.querySelector('[data-test-id="mob_start_date"]').addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            pushDataLayer('Click on start day')
        }) //event

        document.querySelector('[data-test-id="mob_end_date"]').addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            pushDataLayer('Click on end day')
        }) //event

        //set format date
        function setFormat(date) {
            let itemDate = date,
                mouth = itemDate.value.split('-');

            for (const key in formatDate) {
                if (mouth[1] == key) {
                    itemDate.parentElement.querySelector('.input-ext').value = mouth[2] + " " + formatDate[key];
                }
            } 
        }
        console.log(document.querySelectorAll('.h-14 input[data-test-id]'))
        document.querySelectorAll('.h-14 input[data-test-id]').forEach(input => {
            input.insertAdjacentHTML('afterend',`<input type="text" class="input-ext">`);
            setFormat(input)
            input.addEventListener('change', (e) => setFormat(input))
        })
	    
        console.log(id, startDate, endDate, parent)
        document.querySelector('#list_parking').innerHTML == '' ? postParking(id, startDate, endDate, document.querySelector('#list_parking')) : ''

        //add "Check availability" button
        document.querySelector('button[data-test-id="park_now"]').insertAdjacentHTML('afterend',`<button type="button" id="btn_check_availability" class="h-14 mt-3 md:mt-0 md:ml-2 bg-secondary text-white text-base rounded-full p-4 hover:bg-opacity-75 focus:outline-none w-full md:w-48 flex flex-row items-center justify-center uppercase font-bold">Check availability</button>`)
        document.querySelector('#btn_check_availability').addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            startDate = document.querySelector('[data-test-id="mob_start_date"]').value;
            endDate = document.querySelector('[data-test-id="mob_end_date"]').value;
            //get id parking
            let arr = document.querySelector('#__NEXT_DATA__').innerHTML.split(`,"airport_initials":"${document.querySelector('[data-test-id="airport"]').value.split('-')[0].trim()}"`)[0].split('"airport_id":'),
            id = arr[arr.length - 1];
            if (startDate != endDate) {
                console.log(id, startDate, endDate, parent)
                postParking(id, startDate, endDate, document.querySelector('#list_parking'))
            } else {
                document.querySelector('[data-test-id="park_now"]').click(); //for request
            }
            pushDataLayer('Click on check availability button') //event
        })
        
        //event
        document.addEventListener('scroll', (e) => {
            if (document.querySelector('.guarant') != null) {
                if (isScrolledIntoView(document.querySelector('.guarant')) == true) {
                    if (viewed == false) {
                        viewed = true;
                        pushDataLayer('Visibility block of guarantees') 
                    }
                } else {
                    viewed = false;
                }
            }
        })  
    }
}, 200)

let start = setInterval(() => {
    window.location.pathname.includes('/parking/') ? loadedLocation = true : loadedLocation = false;

    if (loadedLocation == true && document.querySelector('.js-style') == null && document.querySelector('.landing') != null) {
        document.body.insertAdjacentHTML('afterbegin', style); // add style
        document.querySelector('.landing').insertAdjacentHTML('beforebegin', html); // add html

        //title
        // if (document.querySelector('h1') != null && document.querySelector('h1 span') == null) {
            let title = document.querySelector('h1').innerHTML;
            document.querySelector('h1').innerHTML = `${title.substring(title.indexOf(' ') + 1)} <span> From <br>${title.substring(0, title.indexOf(' '))} / day</span>`  
        // }
    } 
    
    if (document.querySelector('#parkingat') != null || loadedLocation == false) {
        console.log('2')
        document.querySelector('.js-style') != null ? document.querySelector('.js-style').remove() : '';
    }
}, 100)


window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Redesign landing page',
    'eventAction': 'loaded'
});

let isClarify = setInterval(() => {
	if (typeof clarity == 'function') {
		clearInterval(isClarify)
		clarity('set', 'redesign_landing_page', 'variant_1')
	}
}, 100)
