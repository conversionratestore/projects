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
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            text-transform: uppercase;
            font-weight: 700;
            font-size: 10px;
            line-height: 12px;
            border-radius: 3px;
            padding: 4px 6px;
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
        }
        .price_parking {
            background: #DADADA;
            border-radius: 3px;
            padding: 3px 6px;
            line-height: 14px;
            color: #515356;
        }
        .img_parking img {
            width: 102px;
            height: 100%;
            object-fit: cover;
        }
        .info_parking {
            width: calc(100% - 102px);
            padding: 15px;
        }
    </style>`

let html = `
    <ul id="list_parking"></ul>
    <div class="guarant flex justify-between pt-4 pb-6">
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
    constructor(url,image,name,reviews,distance,shuttle,shuttleFrequency,freeCancellation,price) {
        this.url = url;
        this.image = image;
        this.name = name;
        this.reviews = reviews;
        this.distance = distance;
        this.shuttle = shuttle;
        this.shuttleFrequency = shuttleFrequency;
        this.freeCancellation = freeCancellation;
        this.price = price;
    }

    render() {
        let element = document.createElement('li');
        element.classList.add('flex');

        element.innerHTML = `
            <div class="img_parking">
                <img src="${this.image}" alt="${this.name}">
            </div>
            <div class="info_parking">
                <div>
                    <a href="https://www.onairparking.com/parkingat/${this.url}">${this.name}</a>
                    <div class="rate_parking">${this.reviews}</div>
                </div>
                <ul>
                    <li>Distance: <b>${this.distance}</b></li>
                    <li>Free Shuttle ${this.shuttle} <b>${this.shuttleFrequency}</b></li>
                </ul>
                <div>
                    <p class="c-green">${this.freeCancellation}</p>
                    <div class="flex items-center">
                        <a href="https://www.onairparking.com/parkingat/${this.url}" class="btn">Online-only price</a>
                        <p class="price_parking">$${this.price} / day</p>
                    </div>
                </div>

            </div>
            
        `

        document.querySelector('#list_parking').appendChild(element);
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

let loadedLocation = false;
let start = null;

function starInterval() {
    start = setInterval(() => {
        window.location.pathname.includes('/parking/') ?  loadedLocation = true : loadedLocation = false;

        if (document.querySelector('.js-style') == null && loadedLocation == true) {
            console.log('1')
            document.body.insertAdjacentHTML('afterbegin', style); // add style
            document.querySelector('.landing').insertAdjacentHTML('beforebegin', html); // add html

            //title
            let title = document.querySelector('h1').innerHTML;
            document.querySelector('h1').innerHTML = `${title.substring(title.indexOf(' ') + 1)} <span> From <br>${title.substring(0, title.indexOf(' '))} / day</span>`

            //add "Check availability" button
            document.querySelector('button[data-test-id="park_now"]').insertAdjacentHTML('afterend',`<button type="button" class="h-14 mt-3 md:mt-0 md:ml-2 bg-secondary text-white text-base rounded-full p-4 hover:bg-opacity-75 focus:outline-none w-full md:w-48 flex flex-row items-center justify-center uppercase font-bold">Check availability</button>`)
            
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

           document.querySelectorAll('.bg-white.py-6.rounded-md.flex.flex-col.w-full.items-start.justify-start > .h-14 input').forEach(input => {
                input.insertAdjacentHTML('afterend',`<input type="text" class="input-ext">`);
                setFormat(input)
                input.addEventListener('change', (e) => setFormat(input))
           })
        } 

        if (document.querySelector('#parkingat') != null || loadedLocation == false) {
            console.log('2')
            document.querySelector('.js-style') != null ? document.querySelector('.js-style').remove() : '';
        }
    })
}
starInterval()

//after fetch post data

//add "Only 8 left at this price"
// let randomIndex = Math.floor(Math.random() * selector.length); //random
//   if (randomIndex == index) {
//     document.querySelector('.img_parking').insertAdjacentHTML('afterbegin',`<p class="c-red">Only 8 left at this price</p>`)
// }

// let list = document.querySelectorAll("#list_parking > li");

//bestReviews
// list.forEach(item => {
//     if (item.length >= 5 && item.querySelector('.lowest_price') == null && document.querySelector('.best_reviews') == null) {               
//         item.querySelector('.img_parking').insertAdjacentHTML('afterbegin', bestReviews)
//     }
// }
//lowerPrice
// let minNumber = [].reduce.call(list, (a, b) => 0 >= a.innerHTML.replace('$','') - b.innerHTML.replace('$','') ? a : b)

// if (minNumber.parentElement.querySelector('.rounded-full') != null) {
//      minNumber.closest('#list_parking > li').querySelector('.img_parking').insertAdjacentHTML('afterbegin', lowerPrice)
// } 
