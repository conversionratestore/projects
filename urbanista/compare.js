document.body.insertAdjacentHTML('afterbegin',`
    <style>
    
        @font-face {
            font-family: oakes;
            src: url(../fonts/Oakes/Oakes-Grotesk-Light.otf) format('opentype');
            font-stretch: normal;
            font-weight: 300;
            font-style: normal
        }
        
        @font-face {
            font-family: oakes;
            src: url(../fonts/Oakes/Oakes-Grotesk-Regular.otf) format('opentype');
            font-stretch: normal;
            font-weight: 400;
            font-style: normal
        }
        
        @font-face {
            font-family: oakes;
            src: url(../fonts/Oakes/Oakes-Grotesk-Bold.otf) format('opentype');
            font-stretch: normal;
            font-weight: 700;
            font-style: normal
        }
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
            background: url('https://conversionratestore.github.io/projects/urbanista/images/arrow-down-new.svg') no-repeat right 12px center / 12px;
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
            width: 21px;
            height: 21px;
            border-radius: 50%;
        }
        .check-color span {
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
    </style>`)

//document.querySelector('#amasty-shopby-product-list').insertAdjacentHTML('beforebegin',`<a href="#" class="btn-compare">Compare heaphones</a>`)

let select = `
<div class="select">
    <select>
        <option value="London" selected>London</option>
        <option value="Miami">Miami</option>
    </select>
</div>
`

let page = `
<div class="compare-wrapper">
    <h2 class="page-title text-center">Compare headphones models</h2>
    <a href="#" class="sea-more">See all models ></a>
    <div class="compare-row">
        <div class="left compare-col">
            ${select}
            <div class="card">
                <a href="#" class="card-img">
                    <img src="img" alt="image product">
                </a>
                <div class="card-content">
                    <div class="row-colors">
                        <label class="label-color">
                            <input type="radio" name="radio1" class="checkbox" checked>
                            <span class="check-color">
                                <span style="background-color: #1A1A1A"></span>
                            </span>
                        </label>
                        <label class="label-color">
                            <input type="radio" name="radio1" class="checkbox">
                            <span class="check-color">
                                <span style="background-color: #2C3E60"></span>
                            </span>
                        </label>
                    </div>
                    <a href="#" class="card-title">name</a>
                    <p class="card-additional">(additional)</p>
                    <p class="card-price">$119</p>
                    <button type="button" class="btn-buy">Buy</button>
                    <a href="#" class="sea-more">Learn more ></a>
                </div>
            </div>
        </div>
        <div class="right compare-col">
            ${select}
            <div class="card">
                <a href="#" class="card-img">
                    <img src="img" alt="image product">
                </a>
                <div class="card-content">
                    <div class="row-colors">
                        <label class="label-color">
                            <input type="radio" name="radio2" class="checkbox" checked>
                            <span class="check-color"><span style="background-color: #E4CBC3"></span></span>
                        </label>
                        <label class="label-color">
                            <input type="radio" name="radio2" class="checkbox">
                            <span class="check-color"><span style="background-color: #825759"></span></span>
                        </label>
                    </div>
                    <a href="#" class="card-title">name2</a>
                    <p class="card-additional">(additional2)</p>
                    <p class="card-price">$119</p>
                    <button type="button" class="btn-buy">Buy</button>
                    <a href="#" class="sea-more">Learn more ></a>
                </div>
            </div>
        </div>
    </div>
    <h2 class="page-title">Summary</h2>
    <ul class="summary">
        <li class="summary-item"></li>
    </ul>
</div>`;

document.body.insertAdjacentHTML('afterbegin', page);

