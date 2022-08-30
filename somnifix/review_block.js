/** Variables */
/* document shortcuts */
const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const getId = document.getElementById.bind(document)

/* other variables  */
const intervalTimeout = 200
const imgFolderUrl = 'https://conversionratestore.github.io/projects/somnifix/img/'

const style = /*html*/`
    <style>
        :root {
            --main-blue-color: #1E415F;
        }             

        .product__images.one-half {
            width: 41% !important;
        }

        .product_section .product__information.one-half {
            width: 59% !important;
        }
       
        .product__images {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .review {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: #F5F6F7;
            border-radius: 15px;
            padding: 15px;
            padding-left: 40px;
            margin: 0 -20px 35px 0;
        }

        .left_part {
            position: relative;
            width: 57%;
            /*border-right: 2px dashed #A9C2CC;*/
            padding-right: 15px;
        }

        .left_part::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            background-image: url(${imgFolderUrl}vertical_line.svg);
            background-size: cover;
            background-repeat: no-repeat;
            height: 100%;
            width: 1px;
        }

        .left_part p:first-child {
            color: var(--main-blue-color);
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
        }

        .left_part p:last-child {
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            text-decoration-line: underline;
            color: #2191BD;
            margin-top: 8px;
            cursor: pointer;
        }

        .left_part::before {
            content: '';
            position: absolute;
            top: 0;
            left: -28px;
            width: 16px;
            height: 13px;
            background-image: url(${imgFolderUrl}double_quotes.svg);
            background-size: cover;
            background-repeat: no-repeat;
        }

        .right_part {
            margin-left: 15px;
            width: 40%;
            padding: 10px;
            background-color: #fff;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }

        .right_part .name {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .right_part .name img {
            margin-right: 5px;
        }

        .right_part .name p:first-child {
            color: var(--main-blue-color);
            font-weight: 700;
            font-size: 14px;
            line-height: normal;
            margin-right: 5px;
        }

        .right_part .name p:last-child {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 14px;
            line-height: normal;
            color: #4090D1;
        }

        .right_part .flag {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .right_part .flag img {
            margin-right: 5px;
        }

        .right_part .flag + img {
            height: 12px;
        }

        .right_part .flag p {
            font-weight: 400;
            font-size: 12px;
            line-height: 8px;
            color: #B1B1B1;
        }

        /* pack */

        .pack {
            background: #F5F6F7;
            border-radius: 15px;
            padding: 30px 20px 20px 20px;
        }

        .pack .head {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .pack .img_wrapper {
            background: #FFFFFF;
            border-radius: 5px;            
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .packs .pack:nth-child(2) .img_wrapper img{
            transform: scale(1.1);
        }

        .packs .pack:nth-child(3) .img_wrapper img{
            transform: scale(1.3) translateY(5px);
        }

        .pack .head p {
            font-family: 'Rubik', 'Roboto', sans-serif;
            color: #1E415F;
        }

        .name_wrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 60%;
        }

        .somnifix {
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            margin-bottom: 10px;
        }

        .somnifix+p {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
        }

        .pack {
            position: relative;
        }

        .pack[data-sale]::before {
            content: attr(data-sale);            
            position: absolute;
            top: -14px;
            right: 12px;
            background: #F27157;
            border-radius: 6px;
            padding: 8px 12px;
            font-weight: 700;
            font-size: 14px;
            color: #FFFFFF;
            font-family: 'Roboto', sans-serif;
            line-height: normal;
        }

        .pack .body {
            margin-top: 30px;
        }

        .pack .shipping {
            font-family: 'Avenir Next', 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 19px;
            color: #FFFFFF;
            padding: 4px 8px;
            background: #4090D1;
            border-radius: 5px;
        }

        .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .packs {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 20px;
            padding-top: 50px;
            border-top: 1px solid #eee;
            flex-wrap: wrap;

        }

        .packs + .stamped-review {
            border-top: none;
        }

        .packs .pack {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 32%;
            min-width: 295px;
            margin-right: 20px;
            margin-bottom: 20px;
        }

        .packs .pack:last-child {
            margin-right: 0;
        }

        .pack .price span:first-child {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #1E415F;
        }

        .pack .price span:last-child {
            font-family: 'Rubik', 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 26px;
            color: #1E415F;
        }

        .horizontal_line {
            width: 100%;
            margin: 16px 0;
        }

        .pack .add_btn {
            background: #27405D;
            border-radius: 47px;
            padding: 15px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            text-transform: uppercase;
            color: #FFFFFF;
            width: 100%;
            cursor: pointer;
            margin-top: 20px;
            border: none;
        }

        .date_wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .date_wrapper .date span {
            margin-left: 22px;
            font-family: 'Rubik', 'Roboto', sans-serif;
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
        }

        .country_wrapper {
            display: flex;
            margin-bottom: 5px;
            align-items: center;
        }

        .country_wrapper .for_country_select {
            width: 100%;
            margin-left: 26px;
        }

        .country_wrapper .for_country_select::after {
            pointer-events: none;
            filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(28deg) brightness(95%) contrast(105%);
        }

        .country_wrapper b, .date b {
            white-space: nowrap;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            color: #000000;
        }

        .pack .country_select {
            font-family: 'Rubik', 'Roboto', sans-serif;
            color: #000000;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            width: 100%;
            cursor: pointer;
        }
    </style>
`

/** HTML elements */
/* review */
const review = /*html*/`
    <div class="review">
        <div class="left_part">
            <p>They are a godsend. I tried the CPap and I felt like I was suffocating. The strips give me good rest
                without
                that feeling of suffocating.</p>
            <p class="more_reviews">View more reviews</p>
        </div>
        <div class="right_part">
            <div class="name">
                <p>Leslie A.</p>
                <p><img src="${imgFolderUrl}check_arrow_blue.svg" alt="check">Verified buyer</p>
            </div>
            <div class="flag">
                <img src="${imgFolderUrl}usa_flag.svg" alt="flag">
                <p>United States</p>
            </div>
            <img src="${imgFolderUrl}stars_group.svg" alt="stars">
        </div>
    </div>`

/* 3 packs */
const packsArr = [
    ['one_month', '4', '28', '23.99', '32115046023283'],
    ['three_month', '12', '84', '55.97', '32115046056051', '22'],
    ['twelve_month', '52', '365', '219.97', '32115046940787', '30'],
]
const packsHTML = packsArr.map(item => /*html*/`
        <div class="pack" ${item[5] ? `data-sale="Save ${item[5]}%"` : ''} >
            <div class="head">
                <div class="img_wrapper">
                    <img src="${imgFolderUrl + item[0]}.svg" alt="${item[0]} pack"> 
                </div>                
                <div class="name_wrapper">
                    <p class="somnifix">SomniFix Mouth Strips</p>
                    <p class="pack_name">${item[1]} week pack<br> (${item[2]} strips in a pack)</p>
                </div>                
            </div>
            <div class="body">
                <div class="country_wrapper">
                    <b>Ship to:</b>
                    <label class="for_country_select">
                    </label>
                </div>                
                <div class="date_wrapper">
                    <p class="date"><b>Arrives: </b><span>${query('.delivery_date b').innerText}</span></p>
                    <span class="shipping">Free Shipping</span>
                </div>           
            </div>
            <div class="bottom">
                <img class="horizontal_line" src="${imgFolderUrl}horizontal_line.svg" alt="horizontal line">
                <div class="price">
                    <span>Price:</span>
                    <span>$${item[3]} USD</span>
                </div>
                <button class="add_btn" data-pack-id="${item[4]}" data-pack-week="${item[1]}">Add to cart</button>
            </div>
        </div>
`).join('')
const packsBlock = /*html*/`
    <div class="packs">
        ${packsHTML}
    </div>`

/** GO Events */
const callEvent = (eventAction, eventLabel = '', eventValue) => {
    window.dataLayer = window.dataLayer || []

    let eventObj = {
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP. New Review block',
        eventAction,
        eventLabel
    }

    if (eventValue) {
        eventObj.eventValue = eventValue
    }

    dataLayer.push(eventObj)
}

/** Run functions and etc. */
/* run events */
callEvent('loaded')
const clarityRecord = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(clarityRecord)

        clarity('set', `pdp_new_review_block`, 'variant_1')
    }
}, intervalTimeout)

/* add CSS */
document.head.insertAdjacentHTML('beforeend', style)

/* add HTML elements and logic */
const addReview = setInterval(() => {
    if (query('.product__images')) {
        clearInterval(addReview)

        query('.product__images').insertAdjacentHTML('beforeend', review) // add review to HTML

        const waitForMoreBtn = setInterval(() => { // 'More review' btn logic
            if (query('.more_reviews') && query('.desktop .stamped-badge-caption')) {
                clearInterval(waitForMoreBtn)

                query('.more_reviews').addEventListener('click', () => {
                    query('.desktop .stamped-badge-caption').click()
                    callEvent(`Click at “View more reviews”`)
                })
            }
        }, intervalTimeout)
    }
}, intervalTimeout)

const addPacks = setInterval(() => {
    if (queryAll('.stamped-review')[2] && query('.delivery_date b')) {
        clearInterval(addPacks)

        queryAll('.stamped-review')[2].insertAdjacentHTML('afterend', packsBlock) // add packs to HTML

        const waitForPacks = setInterval(() => {
            if (queryAll('.packs .for_country_select')[2] && query('.desktop select')) {
                clearInterval(waitForPacks)

                queryAll('.pack .for_country_select').forEach((label) => { // add client's select data to my packs
                    label.insertAdjacentHTML('beforeend', query('.desktop select').outerHTML.replaceAll('value="\n', 'value="'))
                })

                const waitForSelects = setInterval(() => {
                    if (queryAll('.packs select')[2]) {
                        clearInterval(waitForSelects)

                        query('.packs').addEventListener('change', (e) => { // add onchange country logic
                            if (e.target.matches('select')) {
                                const selectedOption = query(`select [value="${e.target.value}"]`)

                                document.querySelectorAll('.desktop .for_country_select option').forEach(option => {
                                    if (selectedOption.value === option.innerText.trim()) {
                                        const optionValue = option.value

                                        const select = query('.desktop .for_country_select select')
                                        select.value = optionValue
                                        select.dispatchEvent(new Event('change'));
                                    }
                                })

                                queryAll('.pack').forEach(pack => {
                                    pack.querySelector('select').value = selectedOption.value
                                    pack.querySelector('.date span').innerText = selectedOption.dataset.value

                                    if (selectedOption.dataset.free === 'free') {
                                        pack.querySelector('.shipping').innerText = 'Free shipping'
                                    } else {
                                        pack.querySelector('.shipping').innerText = 'Shipping from ' + selectedOption.dataset.free
                                    }
                                })

                                callEvent('select country', `custom select`, selectedOption.value)
                            }
                        })

                        query('.desktop .for_country_select select').addEventListener('change', () => { // changes country in custom selects if user changed country in client's select
                            const selectedValue = query('.desktop .for_country_select select').value.replace('\n', '')
                            const selectedOption = query(`select [value="${selectedValue}"]`)

                            queryAll('.pack').forEach(pack => {
                                pack.querySelector('select').value = selectedOption.value
                                pack.querySelector('.date span').innerText = selectedOption.dataset.value

                                if (selectedOption.dataset.free === 'free') {
                                    pack.querySelector('.shipping').innerText = 'Free shipping'
                                } else {
                                    pack.querySelector('.shipping').innerText = 'Shipping from ' + selectedOption.dataset.free
                                }
                            })

                            callEvent('select country', `client's select `, selectedOption.value)
                        })
                    }
                }, intervalTimeout)

                const waitForAddBtns = setInterval(() => { // my 'Add to cart' btns logic
                    if (queryAll('.packs .add_btn')[2]) {
                        clearInterval(waitForAddBtns)

                        queryAll('.packs .add_btn').forEach(btn => {
                            btn.addEventListener('click', () => {
                                addItemToCart(btn.dataset.packId, 1)
                                callEvent(`Click “Add to cart” ${btn.dataset.packWeek}week pack`)
                            })
                        });
                    }
                }, intervalTimeout)
            }
        }, intervalTimeout)
    }
}, intervalTimeout)