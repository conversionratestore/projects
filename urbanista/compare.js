document.body.insertAdjacentHTML('afterbegin', `
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
        .summary {
            display: flex;    
            margin-top: 15px;        
        }
        .summary .one,
        .summary .two {
            width: 50%;
            text-align: center;
        }        
        .spec-wrapper {
            position: relative;
            height: 125px;
            padding: 0 30px 30px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            border-bottom: 1px solid #E8E8E8;            
        }
        .spec-wrapper:first-child {
            border-top: 1px solid #E8E8E8; 
        }
        .spec-wrapper p {
            font-weight: 500;
            font-size: 16px;
        }
        .specs-title {
            position: absolute;
            top: 20px;
            width: 100%;        
            transform: translateX(-50%);
            left: 100%;            
        }
        .specs-title .case {
            color: #7E7E7E;
            font-weight: 400;
        }
        .spec-wrapper img {
            position: absolute;
            bottom: 15px;
            left: 100%;
            transform: translateX(-50%);
        }
    </style>
`);

if (document.querySelector('#amasty-shopby-product-list')) {
    document.querySelector('#amasty-shopby-product-list').insertAdjacentHTML('beforebegin', `<a href="#" class="btn-compare">Compare heaphones</a>`);
}

let pathLocal = window.location.pathname.split('/')[1];

const localisation = {
    'eu': {
        'compare': 'Compare headphones models',
        'allModels': 'See all models >',
        'buy': 'Buy',
        'summary': 'Summary',
        'learnMore': 'Learn more >',
        'bluetooth': 'Bluetooth version',
        'chargingTime': 'Charging time',
        'playtime': 'Total speltid',
        'standby': 'Standby Time',
        'battery': 'Battery (in mAh)',
        'workingRange': 'Working Range',
        'mic': 'Mic Distance',
        'frequency': 'Frequency Range',
        'power': 'RF Output Power',
        'impedance': 'Impedance',
        'sensibility': 'Sensibility',
        'snr': 'SNR',
        'codec': 'Audio Codec',
        'earbud': 'earbud',
        'case': 'charging case',
        'hour': 'h',

    },
    'uk': {
        'compare': 'Compare headphones models',
        'allModels': 'See all models >',
        'buy': 'Buy',
        'summary': 'Summary',
        'learnMore': 'Learn more >',
        'bluetooth': 'Bluetooth version',
        'chargingTime': 'Charging time',
        'playtime': 'Total speltid',
        'standby': 'Standby Time',
        'battery': 'Battery (in mAh)',
        'workingRange': 'Working Range',
        'mic': 'Mic Distance',
        'frequency': 'Frequency Range',
        'power': 'RF Output Power',
        'impedance': 'Impedance',
        'sensibility': 'Sensibility',
        'snr': 'SNR',
        'codec': 'Audio Codec',
        'earbud': 'earbud',
        'case': 'charging case',
        'hour': 'h',
    },
    'au': {
        'compare': 'Compare headphones models',
        'allModels': 'See all models >',
        'buy': 'Buy',
        'summary': 'Summary',
        'learnMore': 'Learn more >',
        'bluetooth': 'Bluetooth version',
        'chargingTime': 'Charging time',
        'playtime': 'Total speltid',
        'standby': 'Standby Time',
        'battery': 'Battery (in mAh)',
        'workingRange': 'Working Range',
        'mic': 'Mic Distance',
        'frequency': 'Frequency Range',
        'power': 'RF Output Power',
        'impedance': 'Impedance',
        'sensibility': 'Sensibility',
        'snr': 'SNR',
        'codec': 'Audio Codec',
        'earbud': 'earbud',
        'case': 'charging case',
        'hour': 'h',
    },
    'de': {
        'compare': 'Kopfhörermodelle vergleichen',
        'allModels': 'Alle Modelle ansehen >',
        'buy': 'Kaufen',
        'summary': 'Zusammenfassung',
        'learnMore': 'Mehr erfahren >',
        'bluetooth': 'Treiberleistung',
        'chargingTime': 'Std Ladezeit',
        'playtime': 'Spielzeit',
        'standby': 'Standby-Zeit',
        'battery': 'Akku (mAh)',
        'workingRange': 'Arbeitsbereich',
        'mic': 'Mikrofonabstand',
        'frequency': 'Frequenzbereich',
        'power': 'HF-Ausgangsleistung',
        'impedance': 'Impedanz',
        'sensibility': 'Sensibilität',
        'snr': 'SNR',
        'codec': 'Audio-Codec',
        'earbud': 'ohrhörer',
        'case': 'Ladekoffer',
        'hour': 'Stunden'
    },
    'se': {
        'compare': 'Jämför hörlurar',
        'allModels': 'Se alla modeller >',
        'buy': 'Köpa',
        'summary': 'Sammanfattning',
        'learnMore': 'Läs mer >',
        'bluetooth': 'Bluetooth -version',
        'chargingTime': 'Laddningstid',
        'playtime': 'Speltid',
        'standby': 'Standby-tid',
        'battery': 'Batteri (mAh)',
        'workingRange': 'Arbetsområde',
        'mic': 'Distans mikrofon',
        'frequency': 'Frekvensomfång',
        'power': 'RF -utgångseffekt',
        'impedance': 'Impedans',
        'sensibility': 'Känslighet',
        'snr': 'SNR',
        'codec': 'Audio Codec',
        'earbud': 'hörlurar',
        'case': 'laddningsfodral',
        'hour': 'timmar'
    },
};

let localisationData = localisation[pathLocal];

if (!localisationData) {
    localisationData = localisation['eu'];
}

let productSpecs = {
    'london': {
        'bluetooth': '5.0',
        'chargingTime': '1.5',
        'playtime': '25',
        'standby': '120',
        'earbuds': '45mAh',
        'chargingCase': '400mAh',
        'workingRange': '10m +',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '9.00dBm',
        'impedance': '16Ω ± 15%',
        'sensibility': '107+/- 3dB at 1kHz',
        'snr': '91dB',
        'codec': 'HSP, HFP,<br>A2DP, AVRCP',
    },
    'miami': {
        'bluetooth': '5.0',
        'chargingTime': '—',
        'playtime': '50',
        'standby': '—',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '—',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '9.00dBm',
        'impedance': '32Ω ± 15%',
        'sensibility': '107+/- 3dB at 1kHz',
        'snr': '—',
        'codec': '—',
    },
    'los-angeles': {
        'bluetooth': '5.0',
        'chargingTime': '—',
        'playtime': '—',
        'standby': '—',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '10m +',
        'micDistance': '—',
        'frequency': '20Hz - 20KHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '107+/- 3dB at 1kHz',
        'snr': '—',
        'codec': 'SBC, AAC',
    },
    'lisbon': {
        'bluetooth': '5.2',
        'chargingTime': '—',
        'playtime': '27',
        'standby': '—',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '10m +',
        'micDistance': '—',
        'frequency': '20Hz - 20KHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '+/- 3dB at 1kHz',
        'snr': '—',
        'codec': 'SBC, AAC',
    },
    'seoul': {
        'bluetooth': '5.2',
        'chargingTime': '—',
        'playtime': '32',
        'standby': '—',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '10m +',
        'micDistance': '—',
        'frequency': '20Hz - 20KHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '+/- 3dB at 1kHz',
        'snr': '—',
        'codec': 'SBC, AAC',
    },
    'paris': {
        'bluetooth': '5.0',
        'chargingTime': '1.5',
        'playtime': '20',
        'standby': '110',
        'earbuds': '30mAh',
        'chargingCase': '300mAh',
        'workingRange': '> 10m',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '-6dB ± 4dB',
        'impedance': '16Ω ± 15%',
        'sensibility': '103dB+/- 3dB at 1kHz',
        'snr': '98.3dB',
        'codec': 'SBC, AAC,<br>APTX',
    },
    'stockholm-plus': {
        'bluetooth': '5.0',
        'chargingTime': '1.5',
        'playtime': '20',
        'standby': '60',
        'earbuds': '30mAh',
        'chargingCase': '500mAh',
        'workingRange': '10m',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '8.00dBm',
        'impedance': '32Ω ± 15%',
        'sensibility': '107dB+/- 3dB at 1kHz',
        'snr': '91dB',
        'codec': 'HSP, HFP,<br>A2DP, AVRCP',
    },
    'boston': {
        'bluetooth': '5.0',
        'chargingTime': '—',
        'playtime': '6',
        'standby': '—',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '—',
        'micDistance': '—',
        'frequency': '20Hz - 20KHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '107dB+/- 3dB at 1kHz',
        'snr': '—',
        'codec': '—',
    },
    'sydney': {
        'bluetooth': '5.0',
        'chargingTime': '1.5',
        'playtime': '5',
        'standby': '30',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '> 10m',
        'micDistance': '0.5m',
        'frequency': '20Hz - 20KHz',
        'power': '—',
        'impedance': '4Ω ± 3%',
        'sensibility': '80dB+/- 3dB at 1kHz',
        'snr': '—',
        'codec': 'SBC, MP3,<br>AAC',
    },
    'athens': {
        'bluetooth': '5.0',
        'chargingTime': '1',
        'playtime': '32',
        'standby': '400',
        'earbuds': '50mAh',
        'chargingCase': '—',
        'workingRange': '10m +',
        'micDistance': '20cm',
        'frequency': '20Hz - 20KHz',
        'power': '7.70dBm',
        'impedance': '16Ω ± 15%',
        'sensibility': '+/- 3dB at 1kHz',
        'snr': '80.891dB',
        'codec': 'HSP, HFP,<br>A2DP, AVRCP, APTX',
    },
    'new-york': {
        'bluetooth': '4.1',
        'chargingTime': '<2.5',
        'playtime': '',
        'standby': '700',
        'earbuds': '50mAh',
        'chargingCase': '—',
        'workingRange': '—',
        'micDistance': '—',
        'frequency': '2.4GHz-2.48GHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '94dB+/- 3dB at 1kHz',
        'snr': '—',
        'codec': '—',
    },
    'san-francisco': {
        'bluetooth': '—',
        'chargingTime': '—',
        'playtime': '—',
        'standby': '—',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '—',
        'micDistance': '—',
        'frequency': '20Hz - 20KHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '—',
        'snr': '—',
        'codec': '—',
    },
    'madrid': {
        'bluetooth': '4.0',
        'chargingTime': '1,5',
        'playtime': '4',
        'standby': '100h',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '—',
        'micDistance': '—',
        'frequency': '2.4GHz-2.48GHz',
        'power': '—',
        'impedance': '16Ω ± 15%',
        'sensibility': '102dB+/- 3dB at 1kHz',
        'snr': '—',
        'codec': '—',
    },
    'berlin': {
        'bluetooth': '4.0',
        'chargingTime': '1,5h',
        'playtime': '4h',
        'standby': '100h',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '—',
        'micDistance': '—',
        'frequency': '2.4GHz-2.48GHz',
        'power': '—',
        'impedance': '32Ω ± 15%',
        'sensibility': '103dB+/- 3dB at 1kHz',
        'snr': '—',
        'codec': '—',
    },
    'sydney_hm': {
        'bluetooth': '5.0',
        'chargingTime': '1,5h',
        'playtime': '5hrs',
        'standby': '30',
        'earbuds': '—',
        'chargingCase': '—',
        'workingRange': '> 10m',
        'micDistance': '0.5m',
        'frequency': '80 - 20.000 KHz',
        'power': '—',
        'impedance': '4Ω ± 15%',
        'sensibility': '80dB+/- 3dB at 1kHz',
        'snr': '—',
        'codec': 'SBC, MP3,<br>AAC',
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
    <h2 class="page-title text-center">${localisationData?.bluetooth}</h2>
    <a href="#" class="sea-more">${localisationData?.allModels}</a>
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
    <h2 class="page-title">${localisationData?.summary}</h2>    
    <div class="summary">             
        <div class="one"></div>
        <div class="two"></div>        
    </div>
    
</div>`;

function setCards(el, index) {
    let elCol = el.closest('.compare-col');
    let optionSelected = el.options[el.selectedIndex].value;
    console.log(el.options[el.selectedIndex]);

    fetch(`https://www.urbanista.com/rest/V1/configurable-products/${optionSelected}/children?fields=sku,price,name,custom_attributes[color,subtitle,grid_image]`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 4p7re7j8e4tzqskprdyuh04628u3vhp1`
        }
    }).then(resItem => resItem.json()).then(dataItem => {
        console.log(dataItem);

        elCol.querySelector('.card').innerHTML = `
            <a href="https://www.urbanista.com/${pathLocal}/${optionSelected}" class="card-img"></a>
            <div class="card-content">
                <div class="flex-center">
                    <div class="row-colors" data-id="${el.closest('.select').dataset.id}"></div>
                    <a href="https://www.urbanista.com/${pathLocal}/${optionSelected}" class="colors-plus">+</a>
                </div>
                <a href="https://www.urbanista.com/${pathLocal}/${optionSelected}" class="card-title">${optionSelected}</a>
                <p class="card-additional"></p>
                <p class="card-price">$${dataItem[0]['price']}</p>
                <button type="button" class="btn-buy">${localisationData?.buy}</button>
                <a href="https://www.urbanista.com/${pathLocal}/${optionSelected}" class="sea-more">${localisationData?.learnMore}</a>
            </div>`;

        for (let i = 0; i < dataItem.length; i++) {
            let attrObj = dataItem[i]['custom_attributes'];
            for (const key in attrObj) {
                for (const dataKey in colorObj) {
                    if (attrObj[key]['attribute_code'] === 'color' && dataKey === attrObj[key]['value']) {
                        elCol.querySelector('.row-colors').insertAdjacentHTML('beforeend', `
                        <label class="label-color" data-id="${dataItem[i]['sku']}">
                            <input type="radio" name="radio${index == 0 ? '1' : '2'}" class="checkbox" ${i == 0 ? 'checked' : ''}>
                            <span class="check-color">
                                <span style="background-color: ${colorObj[dataKey]}"></span>
                            </span>
                        </label>`);
                    }
                }
                if (attrObj[key]['attribute_code'] === 'subtitle') {
                    elCol.querySelector('.card-additional').innerHTML = attrObj[key]['value'];
                }
                if (attrObj[key]['attribute_code'] === 'grid_image') {
                    elCol.querySelector('.card-img').innerHTML = `<img src="https://www.urbanista.com/media/catalog/product${dataItem[0]['custom_attributes'][key]['value']}" alt="${dataItem[0]['name']}">`;
                }
            }

            elCol.querySelectorAll('.label-color').forEach((label, index) => {
                if (index >= 4) {
                    label.hidden = true;
                    document.querySelector('.colors-plus').style.display = 'block';
                } else {
                    document.querySelector('.colors-plus').style.display = 'none';

                }
                label.addEventListener('change', () => {
                    let idLabel = label.getAttribute('data-id');
                    if (dataItem[i]['sku'] == idLabel) {
                        for (const key in attrObj) {
                            if (attrObj[key]['attribute_code'] === 'grid_image') {
                                elCol.querySelector('.card-img img').setAttribute('src', `https://www.urbanista.com/media/catalog/product${attrObj[key]['value']}`);
                            }
                        }
                        elCol.querySelector('.card-img img').setAttribute('alt', `${dataItem[i]['name']}`);
                        elCol.querySelector('.card-title').innerHTML = optionSelected;
                    }
                });
            });
        }

        let productData = productSpecs[optionSelected];

        let chargingTimeFull = '';
        let playtimeFull = '';
        let standbyFull = '';

        if (optionSelected === 'sydney' || optionSelected === 'sydney_hm') {
            console.log('ssss');
            switch (pathLocal) {
                case 'de':
                    standbyFull = productData.chargingTime + ' Tage';
                    break;
                case 'se':
                    standbyFull = productData.chargingTime + ' dagar';
                    break;
                default:
                    standbyFull = productData.chargingTime + ' days';
                    break;
            }
        } else if (optionSelected === 'new-york') {
            switch (pathLocal) {
                case 'de':
                    playtimeFull = '16 timmar med ANC, 25 timmar utan ANC';
                    break;
                case 'se':
                    playtimeFull = '16 Stunden mit ANC, 25 Stunden ohne ANC';
                    break;
                default:
                    playtimeFull = '16h with ANC, 25h without ANC';
                    break;
            }
        } else {
            chargingTimeFull = productData.chargingTime === '—' ? productData.chargingTime : productData.chargingTime + localisationData.hour;
            playtimeFull = productData.playtime === '—' ? productData.playtime : productData.playtime + localisationData.hour;
            standbyFull = productData.standby === '—' ? productData.standby : productData.standby + localisationData.hour;
        }


        if (index === 0) {
            document.querySelector('.summary .one').innerHTML = `
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.bluetooth}</p>
                    <p class="specs-info">${productData.bluetooth}</p>
                     <img src="https://conversionratestore.github.io/projects/urbanista/images/bluetooth.svg" alt="bluetooth">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.chargingTime}</p>
                    <p class="specs-info">${chargingTimeFull}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/si-glyph_battery-charging.svg" alt="battery">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.playtime}</p>
                    <p class="specs-info">${playtimeFull}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/headphones.svg" alt="headphones">
                </div>                            
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.standby}</p>
                    <p class="specs-info">${standbyFull}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/power.svg" alt="power">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.battery}</p>
                    <div>                    
                        ${productData.earbuds === '—' ? '<p class="specs-info">—</p>' : `<p class="earbud">${productData.earbuds} ${localisationData.earbud}</p><p class="case">${productData.chargingCase}<br>${localisationData.case}</p>`}       
                    </div>  
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/battery2.svg" alt="battery2">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.workingRange}</p>
                    <p class="specs-info">${productData.workingRange}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/slide.svg" alt="range">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.mic}</p>
                    <p class="specs-info">${productData.micDistance}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/micro.svg" alt="micro">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.frequency}</p>
                    <p class="specs-info">${productData.frequency}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/frequency.svg" alt="frequency">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.power}</p>
                    <p class="specs-info">${productData.power}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/thunderbolt.svg" alt="frequency">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.impedance}</p>
                    <p class="specs-info">${productData.impedance}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/resistance.svg" alt="frequency">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.sensibility}</p>
                    <p class="specs-info">${productData.sensibility}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/sound.svg" alt="frequency">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.snr}</p>
                    <p class="specs-info">${productData.snr}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/sound-wave.svg" alt="frequency">
                </div>
                <div class="spec-wrapper">
                    <p class="specs-title">${localisationData.codec}</p>
                    <p class="specs-info">${productData.codec}</p>
                    <img src="https://conversionratestore.github.io/projects/urbanista/images/code.svg" alt="frequency">
                </div>
            `;
        } else {
            document.querySelector('.summary .two').innerHTML = `
                <div class="spec-wrapper">                
                    <p class="specs-info">${productData.bluetooth}</p>                
                </div>
                <div class="spec-wrapper">                
                    <p class="specs-info">${chargingTimeFull}</p>                
                </div>
                <div class="spec-wrapper">                
                    <p class="specs-info">${playtimeFull}</p>                
                </div>
                <div class="spec-wrapper">                    
                    <p class="specs-info">${standbyFull}</p>                    
                </div>
                <div class="spec-wrapper">              
                    <div>
                        ${productData.earbuds === '—' ? '<p class="specs-info">—</p>' : `<p class="earbud">${productData.earbuds} ${localisationData.earbud}</p><p class="case">${productData.chargingCase}<br>${localisationData.case}</p>`}       
                    </div>            
                </div>
                <div class="spec-wrapper">                    
                    <p class="specs-info">${productData.workingRange}</p>                    
                </div>
                <div class="spec-wrapper">                    
                    <p class="specs-info">${productData.micDistance}</p>                    
                </div>
                <div class="spec-wrapper">                    
                    <p class="specs-info">${productData.frequency}</p>                   
                </div>
                <div class="spec-wrapper">                   
                    <p class="specs-info">${productData.power}</p>                   
                </div>
                <div class="spec-wrapper">                   
                    <p class="specs-info">${productData.impedance}</p>                   
                </div>
                <div class="spec-wrapper">                   
                    <p class="specs-info">${productData.sensibility}</p>                   
                </div>
                <div class="spec-wrapper">                   
                    <p class="specs-info">${productData.snr}</p>                   
                </div>
                <div class="spec-wrapper">                   
                    <p class="specs-info">${productData.codec}</p>                   
                </div>
            `;
        }

        document.querySelectorAll('.one .specs-info').forEach((item, i) => {
            if (
                document.querySelectorAll('.one .specs-info')[i].innerText === '—' &&
                document.querySelectorAll('.two .specs-info')[i].innerText === '—'
            ) {
                document.querySelectorAll('.one .specs-info')[i].closest('.spec-wrapper').style.display = 'none';
                document.querySelectorAll('.two .specs-info')[i].closest('.spec-wrapper').style.display = 'none';
            }
        });
    }).catch(errItem => {
        console.log('Failed fetch ', errItem);
    });
}

document.body.insertAdjacentHTML('afterbegin', page);

document.querySelectorAll('select').forEach((el, index) => {
    setCards(el, index);
    el.addEventListener('change', () => {
        setCards(el, index);
    });
});

//
// document.body.insertAdjacentHTML('afterbegin', `
//     <style>
//         .product-item{
//             display: none !important;
//         }
//         .product-item.active{
//             display: block !important;
//         }
//     </style>
// `);
//
// document.querySelectorAll('[data-product-sku]').forEach((el) => {
//     console.log(el.dataset.productSku);
//     if (
//         !el.dataset.productSku.includes('earbud')
//         && !el.dataset.productSku.includes('gofit')
//         && !el.dataset.productSku.includes('power')
//         && !el.dataset.productSku.includes('outlet')
//     ) {
//         console.log('------------------');
//         console.log(el.dataset.productSku);
//         el.closest('.product-item').classList.add('active');
//     }
// });
