let pathLocal = window.location.pathname.split('/')[1];
let pathName = window.location.pathname;

if (pathName.includes('comparison')) {
    document.body.insertAdjacentHTML('afterbegin', `
    <style>
        .block.widget.block-products-list {
            background-color: #fff;
        }
        .product-items {
            display: flex;
            flex-wrap: wrap;
        }
        .products-grid .product-items .product-item {
            border: 1px solid #E8E8E8;
            display: none;
        }
        select option[disabled] {
            display: none;
        }
        .product-items {
            display: flex;
            justify-content: space-between;
            padding: 0;
        }
        .active-0 {
            display: inline-block !important;
            order: 0;
        }
        .active-1 {
            display: inline-block !important;
            order: 1;
        }        
        .compare-wrapper {
            text-align: center;
        }
        .product-features {
            display: none !important;
        }
        .block.widget.block-products-list.list-add-to .product-item-actions form,
        .block.widget.block-products-list .swatch-attribute, .block.widget.block-products-list .product-features {
            padding: 0 !important;
        }
        .products-grid .product-items .product-item:nth-child(odd) {
            margin-right: 0;
        }
        .product-items .product-item-name-price {
            flex-direction: column;
            height: auto;
            align-items: flex-start;
        }
        .swatch-option.selected {
            pointer-events: none;
        }
        .swatch-option.selected:after {
            border: 1px solid #0574E4;
        }
        .block-content {
            padding: 0 10px;
        }
        .summary {
            display: flex;         
        }
        .summary .one,
        .summary .two {
            width: 50%;
            text-align: center;
        }        
        .spec-wrapper {
            position: relative;
            height: 125px;
            padding: 0 25px 20px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            border-bottom: 1px solid #E8E8E8;            
        }
        .spec-wrapper:first-child {
            border-top: 1px solid #D5D5D5; 
        }
        .spec-wrapper p {
            font-weight: 500;
            font-size: 16px;
            margin: 0;
        }
        .spec-wrapper p .earbud, 
        .spec-wrapper p .case {
            display: flex;
            font-size: 14px;
        }    
        .case {
            color: #7E7E7E;
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
        .page-title {
            margin: 0 0 15px;
            font-weight: bold;
            font-size: 18px;
            line-height: 18px;
            text-transform: uppercase;
            color: #000000;            
        }
        .product-items .product-item-name p {
            letter-spacing: 0.03em;
            color: #9A9A9A;
            font-style: italic;
            font-weight: 500;
            font-size: 9px;
            margin: 8px 0;
        }
        .sea-more {
            font-weight: 500;
            font-size: 13px;
            line-height: 13px;
            text-align: center;
            text-decoration-line: underline;
            color: #1A1A1A !important;
            margin: 0 auto 10px;
        }
        .compare-row {
            display: flex;
            margin: 30px 0 15px;
        }
        .compare-col:first-child {
            margin-right: 3%;
        }      
        .select {
            position: relative;  
        }
        .select select {                 
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
        .select::after {
            position: absolute;
            content: url('https://conversionratestore.github.io/projects/urbanista/images/arrow-down.svg');
            display: block;
            top: 10px;           
            right: 10px;
        }
        .soldout-label {
            display: none;
        }
        .product-items .product-item-name {
            text-transform: capitalize;
        }
        .product-items .product-item .price-box .price {
            font-size: 16px;
        }
        .swatch-attribute-options {
            margin: 0;
            padding: 0;
        }
        .action.primary {
            border-radius: 14px;
            height: auto;
            margin: 5px 0 15px;
            padding: 7px 15px 5px;
            text-transform: capitalize;
        }
        .product-items .product-item .product-item-info {
            align-content: space-between;
        }
    </style>
    `);

    const localisation = {
        'eu': {
            'compare': 'Compare headphones models',
            'allModels': 'See all models >',
            'buy': 'Buy',
            'summary': 'Summary',
            'learnMore': 'Learn more >',
            'bluetooth': 'Bluetooth version',
            'chargingTime': 'Charging time',
            'playtime': 'Total playtime',
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
            'productsUrl': 'eu/all-products'

        },
        'uk': {
            'compare': 'Compare headphones models',
            'allModels': 'See all models >',
            'buy': 'Buy',
            'summary': 'Summary',
            'learnMore': 'Learn more >',
            'bluetooth': 'Bluetooth version',
            'chargingTime': 'Charging time',
            'playtime': 'Total playtime',
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
            'productsUrl': 'eu/all-products'
        },
        'au': {
            'compare': 'Compare headphones models',
            'allModels': 'See all models >',
            'buy': 'Buy',
            'summary': 'Summary',
            'learnMore': 'Learn more >',
            'bluetooth': 'Bluetooth version',
            'chargingTime': 'Charging time',
            'playtime': 'Total playtime',
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
            'productsUrl': 'eu/all-products'
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
            'hour': ' Stunden',
            'productsUrl': 'de/all-products'
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
            'hour': ' timmar',
            'productsUrl': 'se/alla-produkter'
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
        'miami-crystal-edition': {
            'bluetooth': '5.0',
            'chargingTime': '—',
            'playtime': '50',
            'standby': '—',
            'earbuds': '—',
            'chargingCase': '—',
            'workingRange': '—',
            'micDistance': '0.5m',
            'frequency': '20Hz - 20KHz',
            'power': '',
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
            'codec': 'HSP, HFP, A2DP, AVRCP, APTX',
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
            'chargingTime': '1,5',
            'playtime': '4',
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
            'chargingTime': '1,5',
            'playtime': '5',
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

    let selectOne = `
<div class="select">
    <select>
        <option value="stockholm-plus">Stockholm Plus</option>
        <option value="london">London</option>
        <option value="paris">Paris</option>
        <option value="los-angeles">Los Angeles</option>
        <option value="miami">Miami</option>
        <option value="miami-crystal-edition">Miami Crystal Edition</option>
        <option value="athens">Athens</option>
        <option value="lisbon">Lisbon</option>
        <option value="boston">Boston</option>
        <option value="berlin">Berlin</option>
        <option value="seoul">Seoul</option>
        <option value="sydney">Sydney</option>
        <option value="new-york">New York</option>
        <option value="san-francisco">San Francisco</option>
        <option value="madrid">Madrid</option>
        <option value="sydney_hm">Sydney H&M Home Edition</option>
    </select>
</div>`;

    let selectTwo = `
<div class="select">
    <select>
        <option value="stockholm-plus">Stockholm Plus</option>
        <option value="london" selected>London</option>
        <option value="paris">Paris</option>
        <option value="los-angeles">Los Angeles</option>
        <option value="miami">Miami</option>
        <option value="miami-crystal-edition">Miami Crystal Edition</option>
        <option value="athens">Athens</option>
        <option value="lisbon">Lisbon</option>
        <option value="boston">Boston</option>
        <option value="berlin">Berlin</option>
        <option value="seoul">Seoul</option>
        <option value="sydney">Sydney</option>
        <option value="new-york">New York</option>
        <option value="san-francisco">San Francisco</option>
        <option value="madrid">Madrid</option>
        <option value="sydney_hm">Sydney H&M Home Edition</option>
    </select>
</div>`;

    let page = `
<div class="compare-wrapper">
    <h2 class="page-title">${localisationData?.compare}</h2>
    <a href="${localisationData?.productsUrl}" class="sea-more">${localisationData?.allModels}</a>
    <div class="compare-row">
        <div class="left compare-col">
            ${selectOne}           
        </div>
        <div class="right compare-col">
            ${selectTwo}           
        </div>
    </div>    
</div>`;

    let templateInterval = setInterval(() => {
        if (document.querySelector('.products-grid')) {
            clearInterval(templateInterval);

            let defaultTemplate = document.querySelector('.products-grid');

            defaultTemplate.insertAdjacentHTML('beforebegin', page);
            defaultTemplate.insertAdjacentHTML('afterend', `
        <h2 class="page-title" style="margin-top: 35px">${localisationData?.summary}</h2> 
        <div class="summary">             
            <div class="one"></div>
            <div class="two"></div>        
        </div>
    `);
        }
    });

    function setCards(el, index) {
        let optionSelectedText = el.options[el.selectedIndex].text.toLowerCase();
        let optionSelectedValue = el.options[el.selectedIndex].value;

        document.querySelectorAll('.product-item-name [title]').forEach((el) => {
            if (el.getAttribute('title').toLowerCase() === optionSelectedText && !el.closest('.product-item').querySelector('.catalog-discount-badge')) {
                document.querySelectorAll(`.active-${index}`).forEach((el) => {
                    el.classList.remove(`active-${index}`);
                });
                el.closest('.product-item').classList.add(`active-${index}`);
            }
        });

        let productData = productSpecs[optionSelectedValue];

        let chargingTimeFull;
        let playtimeFull;
        let standbyFull;

        chargingTimeFull = productData?.chargingTime === '—' ? productData?.chargingTime : productData?.chargingTime + localisationData?.hour;
        playtimeFull = productData?.playtime === '—' ? productData?.playtime : productData?.playtime + localisationData?.hour;
        standbyFull = productData?.standby === '—' ? productData?.standby : productData?.standby + localisationData?.hour;

        if (optionSelectedValue === 'sydney' || optionSelectedValue === 'sydney_hm') {
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
        } else if (optionSelectedValue === 'new-york') {
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
                        ${productData.earbuds === '—' ? '<p class="specs-info">—</p>' : `<p class="specs-info"><span class="earbud">${productData.earbuds} ${localisationData.earbud}</span><span class="case">${productData.chargingCase}<br>${localisationData.case}</span></p>`}       
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
                        ${productData.earbuds === '—' ? '<p class="specs-info">—</p>' : `<p class="specs-info"><span class="earbud">${productData.earbuds} ${localisationData.earbud}</span><span class="case">${productData.chargingCase}<br>${localisationData.case}</span></p>`}       
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
            let interval = setInterval(() => {
                if (document.querySelectorAll('.two .specs-info')[0]) {
                    clearInterval(interval);

                    document.querySelectorAll('.one .specs-info')[i].closest('.spec-wrapper').style.display = 'flex';
                    document.querySelectorAll('.two .specs-info')[i].closest('.spec-wrapper').style.display = 'flex';

                    if (
                        document.querySelectorAll('.one .specs-info')[i].innerText === '—' &&
                        document.querySelectorAll('.two .specs-info')[i].innerText === '—'
                    ) {
                        document.querySelectorAll('.one .specs-info')[i].closest('.spec-wrapper').style.display = 'none';
                        document.querySelectorAll('.two .specs-info')[i].closest('.spec-wrapper').style.display = 'none';
                    }
                }
            }, 100);
        });
    }

    let start = setInterval(() => {
        if (
            document.querySelectorAll('.product-item .product-item-name a')[42].href &&
            document.querySelectorAll('.product-item')[42].querySelector('.swatch-option')
        ) {
            clearInterval(start);

            document.querySelectorAll('.product-item').forEach(item => {
                if (item.querySelector('.product-item-name-price') && item.querySelector('.product-item-actions')) {
                    item.querySelector('.product-item-actions').before(item.querySelector('.product-item-name-price'));
                }
                if (item.querySelector('.swatch-option')) {
                    item.querySelector('.swatch-option').click();
                }
                if (item.querySelector('.product-item-info')) {
                    item.querySelector('.product-item-info').insertAdjacentHTML('beforeend', `
                    <a href="${item.querySelector('.product-item-name a').href}" class="sea-more">${localisationData?.learnMore}</a>`);
                }
                if (item.querySelector('.product-item-actions')) {
                    item.querySelector('.product-item-actions button').addEventListener('click', () => {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp - Comparison option mobile',
                            'eventAction': 'Click on BUY'
                        });
                    });
                }
            });

            document.querySelectorAll('.product-item-name .sea-more').forEach(link => {
                link.addEventListener('click', () => {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp - Comparison option mobile',
                        'eventAction': 'Clicks on learn more'
                    });
                });
            });

            document.querySelectorAll('.compare-col select').forEach((el, index) => {
                let selectInterval = setInterval(() => {
                    if (document.querySelectorAll('.left.compare-col select option')[0]) {
                        clearInterval(selectInterval);

                        if (window.localStorage.getItem('compareFromPDP') !== null) {
                            let compareFromPDP = window.localStorage.getItem('compareFromPDP');

                            if (compareFromPDP === 'london') {
                                document.querySelectorAll('.right.compare-col select option')[0].selected = true;
                            }

                            document.querySelectorAll('.left.compare-col select option').forEach(option => {
                                if (option.value === compareFromPDP) {
                                    option.selected = true;
                                }
                            });
                        } else {
                            document.querySelectorAll('.left.compare-col select option')[0].selected = true;
                        }
                    }

                    function removeDuplicateOption(optionValue, select) {
                        document.querySelectorAll(`.${select}.compare-col select option`).forEach(el => el.style.display = 'block');
                        document.querySelector(`.${select}.compare-col select option[value=${optionValue}]`).style.display = 'none';
                    }

                    removeDuplicateOption(document.querySelector('.left.compare-col select').value, 'right');
                    removeDuplicateOption(document.querySelector('.right.compare-col select').value, 'left');

                    document.querySelector('.left.compare-col select').addEventListener('change', function () {
                        if (this.value) {
                            removeDuplicateOption(this.value, 'right');
                        }
                    });

                    document.querySelector('.right.compare-col select').addEventListener('change', function () {
                        if (this.value) {
                            removeDuplicateOption(this.value, 'left');
                        }
                    });

                    setCards(el, index);

                }, 100);
                el.addEventListener('change', () => {
                    setCards(el, index);
                });
            });
        }
    }, 500);

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - Comparison option mobile',
        'eventAction': 'Pageview comparison page'
    });

} else {
    document.body.insertAdjacentHTML('afterbegin', `
            <style>
                .btn-compare {
                    background: #FCFCFC;
                    line-height: 39px;
                    padding: 0;
                    width: 100%;                
                    margin: 15px auto;
                    display: block;
                    font-weight: bold;
                    font-size: 14px;
                    text-align: center;
                    text-decoration: none !important;
                    text-transform: uppercase;
                    color: #000 !important;
                    border: 1px solid #000;
                }
                #amasty-shopby-product-list .btn-compare {
                    width: calc(100% - 20px);
                }
            </style>
        `);

    let btnText = '';

    switch (pathLocal) {
        case 'de':
            btnText = 'Kopfhörer vergleichen';
            break;
        case 'se':
            btnText = 'Jämför hörlurar';
            break;
        default:
            btnText = 'Compare headphones';
            break;
    }

    function addBtn(block, where) {
        document.querySelector(block).insertAdjacentHTML(where, `<a href="https://www.urbanista.com/${pathLocal}/comparison" class="btn-compare">${btnText}</a>`);
    }

    if (pathName.includes('all-products')) {
        addBtn('#amasty-shopby-product-list', 'afterbegin');
    } else {
        addBtn('.product-info-main', 'afterend');

        let productName = pathName.split(pathLocal + '/')[1];

        if (productName === 'sydney-hmhome') {
            productName = 'sydney_hm';
        } else if (productName === 'losangeles') {
            productName = 'los-angeles';
        }

        document.querySelector('.btn-compare').addEventListener('click', () => {
            window.localStorage.setItem('compareFromPDP', productName);
        });
    }
}
window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - Comparison option mobile',
    'eventAction': 'loaded'
});

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = {hjid: 2067583, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.hj = window.hj || function () {
    (hj.q = hj.q || []).push(arguments);
};
hj('trigger', 'comaparison_option_mobile');

let btnInterval = setInterval(function () {
    if (document.querySelector('.btn-compare')) {
        clearInterval(btnInterval);
        document.querySelector('.btn-compare').addEventListener('click', () => {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - Comparison option mobile',
                'eventAction': 'Clicks on compare buttons'
            });
        });
    }
}, 200);
