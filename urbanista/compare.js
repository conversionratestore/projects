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
        .flex-center {
            display: flex;
            justify-content: center;
        }

        .colors-plus {
            margin-right: 7px;
            margin-bottom: 6px;
            display: block;
            border: 2px solid #CCCCCC;
            font-size: 18px;
            line-height: 15px;
            font-weight: 600;
            text-align: center;
            width: 19px;
            height: 19px;
            border-radius: 50%;
            position: relative;
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
            margin-bottom: 35px;
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
            display: inline-flex;
            flex-direction: column;
            width: 100%
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
            min-height: 11.5px;
        }
        .card-price {
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
            color: #000000;
            margin-bottom: 8px;
            margin-top: auto;
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
let productSpecs = {
    'london': {
        'bluetooth': '5.0',
        'chargingTime': '1.5h',
        'playtime': '25h',
        'standby': '120h',
        'earbuds': '45mAh',
        'chargingCase': '400mAh',
        'workingRange': '10m +',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '9.00dBm',
        'impedance': '16Ω ± 15%',
        'sensibility': '107+/- 3dB at 1kHz',
        'snr': '91dB',
        'codec': 'HSP, HFP, A2DP, AVRCP',
    },
    'miami': {
        'bluetooth': '5.0',
        'chargingTime': '',
        'playtime': '50h',
        'standby': '',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '9.00dBm',
        'impedance': '32Ω ± 15%',
        'sensibility': '107+/- 3dB at 1kHz',
        'snr': '',
        'codec': '',
    },
    'los-angeles': {
        'bluetooth': '5.0',
        'chargingTime': '',
        'playtime': '',
        'standby': '',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '10m +',
        'micDistance': '',
        'frequency': '20Hz - 20KHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '107+/- 3dB at 1kHz',
        'snr': '',
        'codec': 'SBC, AAC',
    },
    'lisbon': {
        'bluetooth': '5.2',
        'chargingTime': '',
        'playtime': '27h',
        'standby': '',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '10m +',
        'micDistance': '',
        'frequency': '20Hz - 20KHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '+/- 3dB at 1kHz',
        'snr': '',
        'codec': 'SBC, AAC',
    },
    'seoul': {
        'bluetooth': '5.2',
        'chargingTime': '',
        'playtime': '32h',
        'standby': '',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '10m +',
        'micDistance': '',
        'frequency': '20Hz - 20KHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '+/- 3dB at 1kHz',
        'snr': '',
        'codec': 'SBC, AAC',
    },
    'paris': {
        'bluetooth': '5.0',
        'chargingTime': '1.5h',
        'playtime': '20h',
        'standby': '110h',
        'earbuds': '30mAh',
        'chargingCase': '300mAh',
        'workingRange': '> 10m',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '-6dB ± 4dB',
        'impedance': '16Ω ± 15%',
        'sensibility': '103dB+/- 3dB at 1kHz',
        'snr': '98.3dB',
        'codec': 'SBC, AAC, APTX',
    },
    'stockholm-plus': {
        'bluetooth': '5.0',
        'chargingTime': '1.5h',
        'playtime': '20h',
        'standby': '60h',
        'earbuds': '30mAh',
        'chargingCase': '500mAh',
        'workingRange': '10m',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '8.00dBm',
        'impedance': '32Ω ± 15%',
        'sensibility': '107dB+/- 3dB at 1kHz',
        'snr': '91dB',
        'codec': 'HSP, HFP, A2DP, AVRCP',
    },
    'boston': {
        'bluetooth': '5.0',
        'chargingTime': '',
        'playtime': '6h',
        'standby': '',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '',
        'micDistance': '',
        'frequency': '20Hz - 20KHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '107dB+/- 3dB at 1kHz',
        'snr': '',
        'codec': '',
    },
    'sydney': {
        'bluetooth': '5.0',
        'chargingTime': '1.5h',
        'playtime': '5h',
        'standby': '30 days',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '> 10m',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '',
        'impedance': '4Ω ± 3%',
        'sensibility': '80dB+/- 3dB at 1kHz',
        'snr': '',
        'codec': 'SBC, MP3, AAC',
    },
    'athens': {
        'bluetooth': '5.0',
        'chargingTime': '1h',
        'playtime': '32h',
        'standby': '400h',
        'earbuds': '50mAh',
        'chargingCase': '',
        'workingRange': '10m +',
        'micDistance': '20cm',
        'frequency': '20Hz - 20KHz',
        'power': '7.70dBm',
        'impedance': '16Ω ± 15%',
        'sensibility': '+/- 3dB at 1kHz',
        'snr': '80.891dB',
        'codec': 'HSP, HFP, A2DP, AVRCP, APTX',
    },
    'new-york': {
        'bluetooth': '4.1',
        'chargingTime': '<2.5hrs',
        'playtime': '16h with ANC, 25h without ANC',
        'standby': '700h',
        'earbuds': '50mAh',
        'chargingCase': '',
        'workingRange': '',
        'micDistance': '',
        'frequency': '2.4GHz-2.48GHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '94dB+/- 3dB at 1kHz',
        'snr': '',
        'codec': '',
    },
    'san-francisco': {
        'bluetooth': '',
        'chargingTime': '',
        'playtime': '',
        'standby': '',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '',
        'micDistance': '',
        'frequency': '20Hz - 20KHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '',
        'snr': '',
        'codec': '',
    },
    'madrid': {
        'bluetooth': '4.0',
        'chargingTime': '1,5h',
        'playtime': '4h',
        'standby': '100h',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '',
        'micDistance': '',
        'frequency': '2.4GHz-2.48GHz',
        'power': '',
        'impedance': '16Ω ± 15%',
        'sensibility': '102dB+/- 3dB at 1kHz',
        'snr': '',
        'codec': '',
    },
    'berlin': {
        'bluetooth': '4.0',
        'chargingTime': '1,5h',
        'playtime': '4h',
        'standby': '100h',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '',
        'micDistance': '',
        'frequency': '2.4GHz-2.48GHz',
        'power': '',
        'impedance': '32Ω ± 15%',
        'sensibility': '103dB+/- 3dB at 1kHz',
        'snr': '',
        'codec': '',
    },
    'sydney_hm': {
        'bluetooth': '5.0',
        'chargingTime': '1,5h',
        'playtime': '5hrs',
        'standby': '30 days',
        'earbuds': '',
        'chargingCase': '',
        'workingRange': '> 10m',
        'micDistance': '0.5m',
        'frequency': '80 - 20.000 KHz',
        'power': '',
        'impedance': '4Ω ± 15%',
        'sensibility': '80dB+/- 3dB at 1kHz',
        'snr': '',
        'codec': 'SBC, MP3, AAC',
    },
};

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
        <option value="london" selected>London</option>
        <option value="miami">Miami</option>
        <option value="lisbon">Lisbon</option>
        <option value="los-angeles">Los Angeles</option>
        <option value="seoul">Seoul</option>
        <option value="paris">Paris</option>
        <option value="stockholm-plus">Stockholm Plus</option>        
        <option value="boston">Boston</option>
        <option value="sydney">Sydney</option>
        <option value="athens">Athens</option>
        <option value="san-francisco">San Francisco</option>
        <option value="madrid">Madrid</option>
        <option value="berlin">Berlin</option>
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
    <ul class="summary"> </ul>
</div>`;

function setCards(el,index) {
    let elCol = el.closest('.compare-col');
    let optionSelected = el.options[el.selectedIndex].value;

    fetch(`https://www.urbanista.com/rest/V1/configurable-products/${optionSelected}/children?fields=sku,price,name,custom_attributes[color,subtitle,grid_image]`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1`
        }
    }).then(resItem => resItem.json()).then(dataItem => {
        console.log(dataItem);

        elCol.querySelector('.card').innerHTML = `
            <a href="https://www.urbanista.com/eu/${optionSelected}" class="card-img"></a>
            <div class="card-content">
                <div class="flex-center">
                    <div class="row-colors" data-id="${el.closest('.select').dataset.id}"></div>
                    <a href="https://www.urbanista.com/eu/${optionSelected}" class="colors-plus">+</a>
                </div>
                <a href="https://www.urbanista.com/eu/${optionSelected}" class="card-title">${dataItem[0]["name"]}</a>
                <p class="card-additional"></p>
                <p class="card-price">$${dataItem[0]["price"]}</p>
                <button type="button" class="btn-buy">Buy</button>
                <a href="https://www.urbanista.com/eu/${optionSelected}" class="sea-more">Learn more ></a>
            </div>`;

        for (let i = 0; i < dataItem.length; i++) {
            let attrObj = dataItem[i]["custom_attributes"];
            for (const key in attrObj) {
                for (const dataKey in colorObj) {
                    if (attrObj[key]["attribute_code"] === "color" && dataKey === attrObj[key]["value"]) {
                        elCol.querySelector('.row-colors').insertAdjacentHTML('beforeend', `
                        <label class="label-color" data-id="${dataItem[i]["sku"]}">
                            <input type="radio" name="radio${index == 0 ? '1' : '2'}" class="checkbox" ${i == 0 ? 'checked' : ''}>
                            <span class="check-color">
                                <span style="background-color: ${colorObj[dataKey]}"></span>
                            </span>
                        </label>`);
                    }
                }
                if (attrObj[key]["attribute_code"] === "subtitle") {
                    elCol.querySelector('.card-additional').innerHTML = attrObj[key]["value"];
                }
                if (attrObj[key]["attribute_code"] === "grid_image") {
                    elCol.querySelector('.card-img').innerHTML = `<img src="https://www.urbanista.com/media/catalog/product${dataItem[0]["custom_attributes"][key]["value"]}" alt="${dataItem[0]["name"]}">`
                }
            }

            elCol.querySelectorAll('.label-color').forEach((label, index) => {
                if (index >= 5) {
                    label.hidden = true;
                    document.querySelector('.colors-plus').style.display = 'block';
                } else {
                    document.querySelector('.colors-plus').style.display = 'none';

                }
                label.addEventListener('change', () => {
                    let idLabel = label.getAttribute('data-id');
                    if (dataItem[i]["sku"] == idLabel) {
                        for (const key in attrObj) {
                            if (attrObj[key]["attribute_code"] === "grid_image") {
                                elCol.querySelector('.card-img img').setAttribute('src', `https://www.urbanista.com/media/catalog/product${attrObj[key]["value"]}`);
                            }
                        }
                        elCol.querySelector('.card-img img').setAttribute('alt',`${dataItem[i]["name"]}`);
                        elCol.querySelector('.card-title').innerHTML = dataItem[i]["name"];
                    }
                })
            })

        }

    }).catch(errItem => {
        console.log('Failed fetch ', errItem);
    });

    // for (const key in productSpecs) {
    //     for (let i = 0; i < Object.keys(productSpecs[key]).length; i++) {
    //         console.log(Object.keys(productSpecs[key]).length)
    //         document.querySelector('.summary').insertAdjacentHTML('beforeend',`
    //         <li class="summary-item">
    //             <h4 class="summary-title">title ${Object.keys(productSpecs[key])[i]}</h4>
    //             <div class="summary-row">
    //                 <p class="summary-one"></p>
    //                 <img src="" alt="icon">
    //                 <p class="summary-two"></p>
    //             </div>
    //         </li>`)
    //
    //         if (key == optionSelected) {
    //             for (const keyItem in productSpecs[key]) {
    //                 if (index == 0) {
    //                     // console.log('1: ' + productSpecs[key][keyItem])
    //                     document.querySelectorAll('.summary-one').forEach(one => {
    //                         one.innerHTML = productSpecs[key][keyItem];
    //                         console.log('1: ' + productSpecs[key][keyItem])
    //                     })
    //                 } else {
    //                     // console.log('2: ' + productSpecs[key][keyItem])
    //                     document.querySelectorAll('.summary-two').forEach(two => {
    //                         two.innerHTML = productSpecs[key][keyItem];
    //                         console.log('2: ' + productSpecs[key][keyItem])
    //                     })
    //                 }
    //             }
    //             // for (const keyItem in productSpecs[key]) {
    //             //     console.log([keyItem])
    //             //     console.log(productSpecs[key][keyItem])
    //             // document.querySelector('.summary').insertAdjacentHTML('beforeend',`
    //             // <li class="summary-item">
    //             //     <h4 class="summary-title">${productSpecs[key][keyItem]}</h4>
    //             //     <div class="summary-row">
    //             //         <p class="summary-one"></p>
    //             //         <img src="" alt="icon">
    //             //         <p class="summary-two"></p>
    //             //     </div>
    //             // </li>`)
    //
    //             // }
    //         }
    //     }
    //
    //     return false;
    // }

};

document.body.insertAdjacentHTML('afterbegin', page);

document.querySelectorAll('select').forEach((el,index) => {
    setCards(el,index);
    el.addEventListener('change', () => {
        setCards(el,index);
    });
});
