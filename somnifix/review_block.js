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
            
            width: 37%;
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
            width: 55%;
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

// const select = /*html*/`
//     <select class="country_select" name="country">
//         <option value="United States" data-free="free" data-value="04 Sep - 06 Sep">United States</option>
//         <option value="Canada" data-free="$5" data-value="07 Sep - 10 Sep">Canada</option>
//         <option value="United Kingdom" data-free="free" data-value="09 Sep - 12 Sep">United Kingdom</option>
//         <option value="Australia" data-free="$10" data-value="09 Sep - 12 Sep">Australia</option>
//         <option value="France" data-free="free" data-value="09 Sep - 12 Sep">France</option>
//         <option value="Germany" data-free="free" data-value="09 Sep - 12 Sep">Germany</option>
//         <option value="The Netherlands" data-free="free" data-value="09 Sep - 12 Sep">The Netherlands
//         </option>
//         <option value="Belgium" data-free="free" data-value="09 Sep - 12 Sep">Belgium</option>
//         <option value="Spain" data-free="free" data-value="09 Sep - 12 Sep">Spain</option>
//         <option value="Austria" data-free="free" data-value="09 Sep - 12 Sep">Austria</option>
//         <option value="Poland" data-free="free" data-value="09 Sep - 12 Sep">Poland</option>
//         <option value="Switzerland" data-free="free" data-value="09 Sep - 12 Sep">Switzerland</option>
//         <option value="Aland Islands" data-free="$10" data-value="09 Sep - 12 Sep">Aland Islands</option>
//         <option value="Albania" data-free="$10" data-value="09 Sep - 12 Sep">Albania</option>
//         <option value="Andorra" data-free="$10" data-value="09 Sep - 12 Sep">Andorra</option>
//         <option value="Armenia" data-free="$10" data-value="09 Sep - 12 Sep">Armenia</option>
//         <option value="Belarus" data-free="$10" data-value="09 Sep - 12 Sep">Belarus</option>
//         <option value="Bosnia And Herzegovina" data-free="$10" data-value="09 Sep - 12 Sep">Bosnia And
//             Herzegovina</option>
//         <option value="Bouvet Island" data-free="$10" data-value="09 Sep - 12 Sep">Bouvet Island</option>
//         <option value="Bulgaria" data-free="$10" data-value="09 Sep - 12 Sep">Bulgaria</option>
//         <option value="Croatia" data-free="$10" data-value="09 Sep - 12 Sep">Croatia</option>
//         <option value="Cyprus" data-free="$10" data-value="09 Sep - 12 Sep">Cyprus</option>
//         <option value="Czech Republic" data-free="" data-value="26 Aug - 26 Aug">Czech Republic</option>
//         <option value="Denmark" data-free="free" data-value="09 Sep - 12 Sep">Denmark</option>
//         <option value="Estonia" data-free="free" data-value="09 Sep - 12 Sep">Estonia</option>
//         <option value="Faroe Islands" data-free="$10" data-value="09 Sep - 12 Sep">Faroe Islands</option>
//         <option value="Finland" data-free="$10" data-value="09 Sep - 12 Sep">Finland</option>
//         <option value="Georgia" data-free="$10" data-value="09 Sep - 12 Sep">Georgia</option>
//         <option value="Gibraltar" data-free="$10" data-value="09 Sep - 12 Sep">Gibraltar</option>
//         <option value="Greece" data-free="$10" data-value="09 Sep - 12 Sep">Greece</option>
//         <option value="Greenland" data-free="$10" data-value="09 Sep - 12 Sep">Greenland</option>
//         <option value="Guadeloupe" data-free="$10" data-value="09 Sep - 12 Sep">Guadeloupe</option>
//         <option value="Guernsey" data-free="$10" data-value="09 Sep - 12 Sep">Guernsey</option>
//         <option value="Hungary" data-free="free" data-value="09 Sep - 12 Sep">Hungary</option>
//         <option value="Iceland" data-free="$10" data-value="09 Sep - 12 Sep">Iceland</option>
//         <option value="Ireland" data-free="$10" data-value="09 Sep - 12 Sep">Ireland</option>
//         <option value="Isle of Man" data-free="$10" data-value="09 Sep - 12 Sep">Isle of Man</option>
//         <option value="Italy" data-free="free" data-value="09 Sep - 12 Sep">Italy</option>
//         <option value="Jersey" data-free="$10" data-value="09 Sep - 12 Sep">Jersey</option>
//         <option value="Kosovo" data-free="$10" data-value="09 Sep - 12 Sep">Kosovo</option>
//         <option value="Latvia" data-free="free" data-value="09 Sep - 12 Sep">Latvia</option>
//         <option value="Liechtenstein" data-free="$10" data-value="09 Sep - 12 Sep">Liechtenstein</option>
//         <option value="Lithuania" data-free="free" data-value="09 Sep - 12 Sep">Lithuania</option>
//         <option value="Luxembourg" data-free="free" data-value="09 Sep - 12 Sep">Luxembourg</option>
//         <option value="Malta" data-free="free" data-value="09 Sep - 12 Sep">Malta</option>
//         <option value="Mayotte" data-free="$10" data-value="09 Sep - 12 Sep">Mayotte</option>
//         <option value="Monaco" data-free="$10" data-value="09 Sep - 12 Sep">Monaco</option>
//         <option value="Montenegro" data-free="$10" data-value="09 Sep - 12 Sep">Montenegro</option>
//         <option value="New Zealand" data-free="$10" data-value="09 Sep - 12 Sep">New Zealand</option>
//         <option value="Norway" data-free="$10" data-value="09 Sep - 12 Sep">Norway</option>
//         <option value="Portugal" data-free="free" data-value="09 Sep - 12 Sep">Portugal</option>
//         <option value="Reunion" data-free="$10" data-value="09 Sep - 12 Sep">Reunion</option>
//         <option value="Romania" data-free="$10" data-value="09 Sep - 12 Sep">Romania</option>
//         <option value="San Marino" data-free="$10" data-value="09 Sep - 12 Sep">San Marino</option>
//         <option value="Serbia" data-free="$10" data-value="09 Sep - 12 Sep">Serbia</option>
//         <option value="Slovakia" data-free="$10" data-value="09 Sep - 12 Sep">Slovakia</option>
//         <option value="Slovenia" data-free="$10" data-value="09 Sep - 12 Sep">Slovenia</option>
//         <option value="Svlabard And Jan Mayen" data-free="$10" data-value="09 Sep - 12 Sep">Svlabard And
//             Jan Mayen</option>
//         <option value="Sweden" data-free="free" data-value="09 Sep - 12 Sep">Sweden</option>
//         <option value="Turkey" data-free="$10" data-value="09 Sep - 12 Sep">Turkey</option>
//         <option value="Ukraine" data-free="$10" data-value="09 Sep - 12 Sep">Ukraine</option>
//     </select>
// `

const select = /*html*/`
<select class="country_select" name="country"> <option value="United States" data-free="free" data-value="07 Sep - 09 Sep">United States</option> <option value="Canada" data-free="$5" data-value="10 Sep - 13 Sep">
Canada</option> <option value="United Kingdom" data-free="free" data-value="12 Sep - 15 Sep">
United Kingdom</option> <option value="Australia" data-free="$10" data-value="12 Sep - 15 Sep">
Australia</option> <option value="France" data-free="free" data-value="12 Sep - 15 Sep">
France</option> <option value="Germany" data-free="free" data-value="12 Sep - 15 Sep">
Germany</option> <option value="The Netherlands" data-free="free" data-value="12 Sep - 15 Sep">
The Netherlands</option> <option value="Belgium" data-free="free" data-value="12 Sep - 15 Sep">
Belgium</option> <option value="Spain" data-free="free" data-value="12 Sep - 15 Sep">
Spain</option> <option value="Austria" data-free="free" data-value="12 Sep - 15 Sep">
Austria</option> <option value="Poland" data-free="free" data-value="12 Sep - 15 Sep">
Poland</option> <option value="Switzerland" data-free="free" data-value="12 Sep - 15 Sep">
Switzerland</option> <option value="Aland Islands" data-free="$10" data-value="12 Sep - 15 Sep">
Aland Islands</option> <option value="Albania" data-free="$10" data-value="12 Sep - 15 Sep">
Albania</option> <option value="Andorra" data-free="$10" data-value="12 Sep - 15 Sep">
Andorra</option> <option value="Armenia" data-free="$10" data-value="12 Sep - 15 Sep">
Armenia</option> <option value="Belarus" data-free="$10" data-value="12 Sep - 15 Sep">
Belarus</option> <option value="Bosnia And Herzegovina" data-free="$10" data-value="12 Sep - 15 Sep">
Bosnia And Herzegovina</option> <option value="Bouvet Island" data-free="$10" data-value="12 Sep - 15 Sep">
Bouvet Island</option> <option value="Bulgaria" data-free="$10" data-value="12 Sep - 15 Sep">
Bulgaria</option> <option value="Croatia" data-free="$10" data-value="12 Sep - 15 Sep">
Croatia</option> <option value="Cyprus" data-free="$10" data-value="12 Sep - 15 Sep">
Cyprus</option> <option value="Czech Republic14-17" data-free="" data-value="29 Aug - 29 Aug">
Czech Republic14-17</option> <option value="Denmark" data-free="free" data-value="12 Sep - 15 Sep">
Denmark</option> <option value="Estonia" data-free="free" data-value="12 Sep - 15 Sep">
Estonia</option> <option value="Faroe Islands" data-free="$10" data-value="12 Sep - 15 Sep">
Faroe Islands</option> <option value="Finland" data-free="$10" data-value="12 Sep - 15 Sep">
Finland</option> <option value="Georgia" data-free="$10" data-value="12 Sep - 15 Sep">
Georgia</option> <option value="Gibraltar" data-free="$10" data-value="12 Sep - 15 Sep">
Gibraltar</option> <option value="Greece" data-free="$10" data-value="12 Sep - 15 Sep">
Greece</option> <option value="Greenland" data-free="$10" data-value="12 Sep - 15 Sep">
Greenland</option> <option value="Guadeloupe" data-free="$10" data-value="12 Sep - 15 Sep">
Guadeloupe</option> <option value="Guernsey" data-free="$10" data-value="12 Sep - 15 Sep">
Guernsey</option> <option value="Hungary" data-free="free" data-value="12 Sep - 15 Sep">
Hungary</option> <option value="Iceland" data-free="$10" data-value="12 Sep - 15 Sep">
Iceland</option> <option value="Ireland" data-free="$10" data-value="12 Sep - 15 Sep">
Ireland</option> <option value="Isle of Man" data-free="$10" data-value="12 Sep - 15 Sep">
Isle of Man</option> <option value="Italy" data-free="free" data-value="12 Sep - 15 Sep">
Italy</option> <option value="Jersey" data-free="$10" data-value="12 Sep - 15 Sep">
Jersey</option> <option value="Kosovo" data-free="$10" data-value="12 Sep - 15 Sep">
Kosovo</option> <option value="Latvia" data-free="free" data-value="12 Sep - 15 Sep">
Latvia</option> <option value="Liechtenstein" data-free="$10" data-value="12 Sep - 15 Sep">
Liechtenstein</option> <option value="Lithuania" data-free="free" data-value="12 Sep - 15 Sep">
Lithuania</option> <option value="Luxembourg" data-free="free" data-value="12 Sep - 15 Sep">
Luxembourg</option> <option value="Malta" data-free="free" data-value="12 Sep - 15 Sep">
Malta</option> <option value="Mayotte" data-free="$10" data-value="12 Sep - 15 Sep">
Mayotte</option> <option value="Monaco" data-free="$10" data-value="12 Sep - 15 Sep">
Monaco</option> <option value="Montenegro" data-free="$10" data-value="12 Sep - 15 Sep">
Montenegro</option> <option value="New Zealand" data-free="$10" data-value="12 Sep - 15 Sep">
New Zealand</option> <option value="Norway" data-free="$10" data-value="12 Sep - 15 Sep">
Norway</option> <option value="Portugal" data-free="free" data-value="12 Sep - 15 Sep">
Portugal</option> <option value="Reunion" data-free="$10" data-value="12 Sep - 15 Sep">
Reunion</option> <option value="Romania" data-free="$10" data-value="12 Sep - 15 Sep">
Romania</option> <option value="San Marino" data-free="$10" data-value="12 Sep - 15 Sep">
San Marino</option> <option value="Serbia" data-free="$10" data-value="12 Sep - 15 Sep">
Serbia</option> <option value="Slovakia" data-free="$10" data-value="12 Sep - 15 Sep">
Slovakia</option> <option value="Slovenia" data-free="$10" data-value="12 Sep - 15 Sep">
Slovenia</option> <option value="Svlabard And Jan Mayen" data-free="$10" data-value="12 Sep - 15 Sep">
Svlabard And Jan Mayen</option> <option value="Sweden" data-free="free" data-value="12 Sep - 15 Sep">
Sweden</option> <option value="Turkey" data-free="$10" data-value="12 Sep - 15 Sep">
Turkey</option> <option value="Ukraine" data-free="$10" data-value="12 Sep - 15 Sep">
Ukraine</option></select>
`

/* HTML elements */
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
                    ${select}
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
                <button class="add_btn" data-pack="${item[4]}">Add to cart</button>
            </div>
        </div>
`).join('')

const packs = /*html*/`
    <div class="packs">
        ${packsHTML}
    </div>`

/** GO Events */
const callEvent = (eventAction, eventLabel = '') => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: ',
        eventAction,
        eventLabel
    })
}

/** Run functions and etc. */
document.head.insertAdjacentHTML('beforeend', style)

const addReview = setInterval(() => {
    if (query('.product__images')) {
        clearInterval(addReview)

        query('.product__images').insertAdjacentHTML('beforeend', review)

        const waitForMore = setInterval(() => {
            if (query('.more_reviews') && query('.desktop .stamped-badge-caption')) {
                clearInterval(waitForMore)

                query('.more_reviews').addEventListener('click', () => {
                    query('.desktop .stamped-badge-caption').click()
                })
            }
        }, intervalTimeout)
    }
}, intervalTimeout)

const waitForClientSelect = setInterval(() => {
    if (query('.desktop .for_country_select select') && queryAll('.packs select')[2]) {
        clearInterval(waitForClientSelect)

        query('.desktop .for_country_select select').addEventListener('change', () => {
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
        })
    }
}, intervalTimeout)

const addPacks = setInterval(() => {
    if (queryAll('.stamped-review')[2] && query('.delivery_date b')) {
        clearInterval(addPacks)

        queryAll('.stamped-review')[2].insertAdjacentHTML('afterend', packs)

        const waitForPacks = setInterval(() => {
            if (query('.packs')) {
                clearInterval(waitForPacks)

                query('.packs').addEventListener('change', (e) => {
                    if (e.target.matches('select')) {
                        const selectedOption = query(`select [value="${e.target.value}"]`)

                        // console.log(selectedOption.value);

                        document.querySelectorAll('.desktop .for_country_select option').forEach(option => {
                            if (selectedOption.value === option.innerText.trim()) {


                                const optionValue = option.value
                                console.log(option);
                                console.log(optionValue);

                                var select = query('.desktop .for_country_select select')
                                select.value = optionValue
                                select.dispatchEvent(new Event('change'));

                                // // console.log(optionValue);

                                // const select = document.querySelector('.desktop .for_country_select select')

                                // if (optionValue === 'United States') {
                                //     select.value = 'United States'
                                // } else {
                                //     select.value = `\n${optionValue}`
                                // }

                                // select.dispatchEvent(new Event('change'));

                                // var select = document.querySelector('.desktop .for_country_select select')
                                // select.value = '\nBulgaria';
                                // select.dispatchEvent(new Event('change'));

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
                    }
                })

                const waitForEl = setInterval(() => {
                    if (queryAll('.packs .add_btn')[2]) {
                        clearInterval(waitForEl)

                        queryAll('.packs .add_btn').forEach(btn => {
                            btn.addEventListener('click', () => {
                                addItemToCart(btn.dataset.pack, 1)
                            })
                        });
                    }
                }, intervalTimeout)


            }
        }, intervalTimeout)
    }
}, intervalTimeout)

callEvent('loaded')

const isClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(isClarity)

        clarity('set', ``, 'variant_1')
    }
}, intervalTimeout)