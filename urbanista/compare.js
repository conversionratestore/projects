document.body.insertAdjacentHTML('afterbegin',`
    <style>
        *, *::before, *::after {
              -webkit-box-sizing: border-box;
              box-sizing: border-box; 
        }
        body, h1, h2, h3, h4, h5, h6, p, ol, ul {
              margin: 0;
              padding: 0;
              font-weight: normal; 
        }
        a {
            text-decoration: none;
            display: block;
        }
        .compare-wrapper {
            padding: 29px 9px;
        }
        .breadcrumbs {
            margin-bottom: 12px;
        }
        .btn-compare {
            background: #FCFCFC;
            line-height: 39px;
            padding: 0;
            width: calc(100% - 20px);
            margin: 0 auto 15px;
            display: block;
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            text-transform: uppercase;
            color: #000;
        }
        .page-title {
            font-weight: bold;
            font-size: 18px;
            line-height: 18px;
            text-transform: uppercase;
            color: #000000;
            margin-bottom: 2px;
        }
        .text-center {
            text-align: center;
        }
        .sea-more {
            font-weight: 500;
            font-size: 13px;
            line-height: 13px;
            text-align: center;
            text-decoration-line: underline;
            color: #1A1A1A;
            margin: 15px auto 0;
        }
        .compare-row {
            display: flex;
        }
        .compare-col {
            width: calc(50% - 9px);
            margin-right: 18px;
        }
        .compare-col:last-child {
            margin-right: 0;
        }
        .select {
            background: url('https://conversionratestore.github.io/projects/urbanista/images/arrow-down.svg') no-repeat right 12px center / 12px;
            margin: 28px 0 13px;
        }
        .select select{
            appearance: none;
            -webkit-appearance: none;
            border: 1px solid #D4D4D4;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            width: 100%;
            height: 33px;
            padding: 0 20px 0 12px;
        }
        .card {
            margin-bottom: 35px;
            border: 1px solid #E8E8E8;
        }
        .card-img {
            width: 100%;
            height: 44.5vw;
            display: block;
        }
        .card-img img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
        .card-content {
            padding: 5px 12px 20px;
        }
        .row-colors {
            display: flex;
            justify-content: center;
        }
        .label-color {
            margin-right: 7px;
            margin-bottom: 6px;
        }
        .checkbox {
            display: none;
        }
        .check-color {
            border: 2px solid #CCCCCC;
            display: block;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            position: relative;
        }
        .check-color span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            display: block;
            width: 16px;
            height: 16px;
            border: 1px solid #ffffff;
            border-radius: 50%;
        }
        .checkbox:checked ~ .check-color {
            border-color: #0574E4;
        }
        .card-title {
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            text-transform: capitalize;
            margin: 8px 0;
        }
        .card-additional {
            font-style: italic;
            font-weight: 500;
            font-size: 9px;
            line-height: 129%;
            letter-spacing: 0.03em;
            color: #9A9A9A;
            margin-bottom: 8px;
            text-transform: uppercase;
        }
        .card-price {
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            margin-bottom: 8px;
        }
        .btn-buy {
            cursor: pointer;
            display: block;
            margin: 0 auto;
            background: #1A1A1A;
            border-radius: 14px;
            border: none;
            font-weight: 600;
            font-size: 12px;
            line-height: 22px;
            text-align: center;
            padding: 0;
            color: #FFFFFF;
            width: 64px;
        }
    </style>`);

if (document.querySelector('#amasty-shopby-product-list')) {
    document.querySelector('#amasty-shopby-product-list').insertAdjacentHTML('beforebegin',`<a href="#" class="btn-compare">Compare heaphones</a>`);
}

let colorObj = {
    273: '#e4cbc3',
    331: '#181b1a',
    332: '#f4f4f4',
    333: '#265564',
    335: '#dbdbdb',
    336: '#f31221',
    338: '#dedede',
    343: '#b1ac6f',
    345: '#d75299',
    347: '#ff33cf',
    348: '#edb2ce',
    387: '#686b3d',
    499: '#1a1a1a',
    6019: '#f3f2f1',
    6020: '#2c3e60',
    6149: '#0096cc',
    6209: '#bababa',
    6292: '#825759',
    6296: '#265e5d',
    6297: '#8f303b',
    6324: '#d7c2b6',
    6338: '#dcc99a',
    6339: '#ba4282',
    6340: '#5acdae',
    6341: '#e7695b',
    6342: '#6f4a76',
    6343: '#234d95',
};

let select = `
<div class="select">
    <select>
        <option value="London" selected>London</option>
        <option value="Miami">Miami</option>
        <option value="Lisbon">Lisbon</option>
        <option value="Los-Angeles">Los Angeles</option>
        <option value="Seoul">Seoul</option>
        <option value="Paris">Paris</option>
        <option value="stockholm-plus">Stockholm Plus</option>        
        <option value="Boston">Boston</option>
        <option value="Sydney">Sydney</option>
        <option value="Athens">Athens</option>
        <option value="San-Francisco">San Francisco</option>
        <option value="Madrid">Madrid</option>
        <option value="Berlin">Berlin</option>
        <option value="sydney_hm">Sydney &M Home Edition</option>
    </select>
</div>`;

let page = `
<div class="compare-wrapper">
    <h2 class="page-title text-center">Compare headphones models</h2>
    <a href="#" class="sea-more">See all models ></a>
    <div class="compare-row">
        <div class="left compare-col">
            ${select}
           <div class="card"></div>
        </div>
        <div class="right compare-col">
            ${select}
           <div class="card"></div>
        </div>
    </div>
    <h2 class="page-title">Summary</h2>
    <ul class="summary">
        <li class="summary-item"></li>
    </ul>
</div>`;

function setCards(el) {
    let optionSelected = el.options[el.selectedIndex].value;
    fetch(`https://www.urbanista.com/rest/V1/products/${optionSelected}?fields=name,price,media_gallery_entries[file],custom_attributes[subtitle],extension_attributes[configurable_product_options[values]]`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1`
        }
    }).then(res => res.json()).then(data => {
        console.log(data);
        let href = `https://www.urbanista.com/eu/${data["name"].split(' ').join('')}`;

        el.closest('.compare-col').querySelector('.card').innerHTML = `
            <a href="${href}" class="card-img">
                <img src="https://www.urbanista.com/media/catalog/product${data["media_gallery_entries"][0]["file"]}" alt="image product">
            </a>
            <div class="card-content">
                <div class="row-colors"></div>
                <a href="${href}" class="card-title">${data["name"]}</a>
                <p class="card-additional"></p>
                <p class="card-price">$${data["price"]}</p>
                <button type="button" class="btn-buy">Buy</button>
                <a href="${href}" class="sea-more">Learn more ></a>
            </div>
        </div>`;
        for (const dataKey in data["custom_attributes"]) {
            el.closest('.compare-col').querySelector('.card-additional').innerHTML = data["custom_attributes"][dataKey]["value"];
        }
        let idColors = data["extension_attributes"]["configurable_product_options"][0]["values"];

        for (const colorKey in colorObj) {
            for (const dataKey in idColors) {
                if (idColors[dataKey]["value_index"] == colorKey) {
                    console.log(idColors[dataKey]["value_index"] + " = " + colorKey);
                    el.closest('.compare-col').querySelector('.row-colors').insertAdjacentHTML('beforeend',`
                        <label class="label-color">
                            <input type="radio" name="radio1" class="checkbox">
                            <span class="check-color">
                                <span style="background-color: ${colorObj[colorKey]}"></span>
                            </span>
                        </label>`);
                }
            }
        }
    }).catch(err => {
        console.log('Failed fetch ', err);
    });
};

document.body.insertAdjacentHTML('afterbegin', page);

document.querySelectorAll('select').forEach((el) => {
    setCards(el);
    el.addEventListener('change', () => {
        setCards(el);
    });
});

