let startExp = setInterval(() => {
    if (document.body) {
        clearInterval(startExp);
        document.body.insertAdjacentHTML('afterbegin', `
        <style>
            .custom-select {
                position: relative;
            }
            .custom-select p {
                margin: 0 0 20px;
            }
            .custom-select span.label {        
                font-weight: 500;
                font-size: 14px;
                text-transform: uppercase;
                color: #000000;
            }    
            .custom-select p span.country {
                position: relative;        
                padding-right: 20px;
                border: 0;
                outline: 0;
                font-weight: 500;
                font-size: 14px;
                font-style: italic;
                color: #757062;
                text-decoration: underline;        
            }
            .custom-select span.country:after {
                position: absolute;
                top: 0;
                right: 0;
                content: url("https://conversionratestore.github.io/projects/mariemur/images/arrow-down2.svg");
                display: block;        
                transition: all .5s ease;
            }
            .custom-select span.country_active:after {
                transform: scale(1, -1);    
            }
            .custom-select ul {
                position: absolute;
                height: 0;
                width: 100%;        
                padding: 0 30px;
                overflow: hidden;
                pointer-events: none;
                margin: -7px 0 0; 
                list-style-type: none;
                background-color: #fff;
                transition: all .5s ease-in-out;
                z-index: 1;
            }
            .custom-select ul.custom-select_active {
                height: 335px;
                pointer-events: auto;
            }
            .custom-select ul li {        
                margin: 15px 0;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                color: #000000;
                letter-spacing: 0.02em;
                text-transform: uppercase;
            }
            .custom-select ul li.selected {
                position: relative;
                color: #ccc;
            }
            .custom-select ul li.selected:after {
                content: url("https://conversionratestore.github.io/projects/mariemur/images/checkmark.svg") " PICKED";
                position: absolute;
                display: block;
                top: 0;
                right: 0;   
                color: #000;     
            }    
            .custom-shipping {
                display: flex;
                justify-content: space-between;
                margin: 0;
                gap: 15px;
            } 
            .custom-shipping p {
                margin: 0;
                color: #000000;
                font-weight: normal;
            }
            .custom-shipping .title {        
                display: inline;
                font-size: 14px;
                line-height: 16px;
                letter-spacing: 0.5px;
                text-transform: uppercase;        
                color: #000000;
            }    
            .custom-shipping .data {
                margin-top: 10px;
                font-size: 12px;        
            }
            .flex-wrapper {
                display: flex;
            }
            .shipping_estimate .title {                
                width: min-content;
            }
            .shipping_estimate .tooltip.tooltip_hide {
                display: none;
            }
            .tooltip-container {
                display: inline;
                position: relative;
                width: 14px;
                margin: -7px 0 0 2px;
            }
            .tooltip-text {      
                position: absolute;
                left: -12px;
                bottom: calc(100% + 14px);
                width: 175px;
                padding: 15px;        
                background-color: #fff;
                opacity: 0;
                transition: all .3s ease;
                pointer-events: none;
                transform: translateY(10px);
            }                     
            .tooltip-text::after {
                content: '';
                position: absolute;
                bottom: -9px;
                left: 9px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 0 10px;
                border-color: #ffffff transparent transparent transparent;
            }
            .shipping_guarantee .tooltip-text {
                right: -12px;
                left: auto;
            }   
            .shipping_guarantee .tooltip-text::after {
                right: 9px;
                left: auto;
            }
            .tooltip-container:hover .tooltip-text{
                transform: translateY(0);
                opacity: 1;
                pointer-events: auto;
            }
            .tooltip-text p {
                margin: 0 0 5px;
                font-weight: normal;
                font-size: 12px;
                color: #000
            }
            .tooltip-text a {
                font-style: italic;
                font-weight: 500;
                font-size: 12px;
                text-decoration-line: underline;
                color: #757062 !important;
            }    
            .custom-shipping .line {        
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
            }
            .custom-shipping span{
                display: inline-block;
                width: 4px;
                height: 4px;
                background-color: #D6D6D6;
            }
            .custom-shipping span.line_black{
                width: 18px;
                background-color: #000;
            }
            .custom-shipping .shipping_guarantee .line_black {
                width: 100%;
            }
        </style>
        `);
    }
}, 100);

function addDays(days) {
    let result = new Date();
    result.setDate(result.getDate() + days);
    return `${('0' + result.getUTCDate()).slice(-2)}.${('0' + (result.getUTCMonth() + 1)).slice(-2)}.${('0' + result.getUTCFullYear()).slice(-2)}`;
}

let start = setInterval(() => {
    if (document.querySelectorAll('.block-color-and-share')[0]) {
        clearInterval(start);

        document.querySelectorAll('.block-color-and-share')[0].insertAdjacentHTML('afterend', `
<div class="custom-select">
  <p><span class="label">Ship to: </span><span class="country">United States</span></p>
    <ul>
        <li data-country="DE">Germany</li>
        <li data-country="GB">Great Britain</li>
        <li data-country="RU">Russia</li>
        <li data-country="FR">France</li>
        <li data-country="US" class="selected">United States</li>
        <li data-country="CA">Canada</li>
        <li data-country="PL">Poland</li>
        <li data-country="IT">Italy</li>
        <li data-country="ES">Spain</li>
        <li data-country="TR">Turkey</li>
    </ul>
</div>
  <div class="custom-shipping">
   <div class="shipping_buy">
       <p class="title">Buy now</p>
       <p class="data">${addDays(0)}</p>
        <div class="line">
            <span class="line_black"></span>
            <span></span>
            <span></span>
            <span></span>            
        </div>
   </div>
   <div class="shipping_estimate">
       <div class="flex-wrapper">
           <p class="title">Estimated shipment</p>       
           <div class="tooltip-container">
               <img class="tooltip" src="https://conversionratestore.github.io/projects/mariemur/images/question-mark.svg" alt="tooltip">
               <div class="tooltip-text">
                    <p>Shipping time may vary. Some items are shipped in 2 days, some rare collections up to 14 days. Average shipment time is 5 days.</p>
                    <a href="https://mariemur.com/pages/shipping" target="_blank">Terms of Service</a>
               </div>   
           </div>   
        </div>                  
       <p class="data">${addDays(5)}</p>       
       <div class="line">
            <span class="line_black"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>              
   </div>
   <div class="shipping_guarantee">
        <div class="flex-wrapper">
           <p class="title">14 days money-back guarantee</p>    
           <div class="tooltip-container">
               <img class="tooltip" src="https://conversionratestore.github.io/projects/mariemur/images/question-mark.svg" alt="tooltip">
               <div class="tooltip-text">
                    <p>Please note you have 14 days to return an item from the date you received it. All items returned must be unused, undamaged and in the exact condition as they arrived (including all labels/tags intact). It must also be in the original packaging.</p>
                    <a href="https://mariemur.com/pages/returns" target="_blank">Return Policy</a>
               </div>   
           </div>   
        </div>        
       <p class="data">${addDays(5 + 14)}</p>
       <div class="line">
            <span class="line_black"></span>
       </div>
   </div>
  </div>
`);
        document.querySelector('.custom-select p span.country').addEventListener('click', function () {
            this.classList.toggle('country_active');
            document.querySelector('.custom-select ul').classList.toggle('custom-select_active');
        });

        document.querySelectorAll('.custom-select ul li').forEach(li => {
            li.addEventListener('click', () => {
                selectActions(li);

                document.querySelector('.custom-select p span.country').classList.remove('country_active');
                document.querySelector('.custom-select ul').classList.remove('custom-select_active');
            });
        });
    }
}, 100);

function selectActions(item) {
    document.querySelectorAll('.custom-select ul li').forEach(li => {
        li.classList.remove('selected');
    });

    item.classList.add('selected');
    document.querySelector('.custom-select .country').innerText = item.innerHTML;

    let selectedCountry = document.querySelector('.custom-select .country').innerText;
    let estimateData = document.querySelector('.shipping_estimate .data');
    let guaranteeData = document.querySelector('.shipping_guarantee .data');

    if (selectedCountry === 'United States' || selectedCountry === 'Canada') {
        estimateData.innerText = addDays(5);
        guaranteeData.innerText = addDays(5 + 14);

        document.querySelector('.shipping_estimate .tooltip.tooltip_hide')?.classList.remove('tooltip_hide');
    } else {
        estimateData.innerText = addDays(4);
        guaranteeData.innerText = addDays(4 + 14);

        document.querySelector('.shipping_estimate .tooltip')?.classList.add('tooltip_hide');
    }
}

fetch('https://ipinfo.io?token=6c92680d192dd8').then(res => res.json()).then(function (data) {
    document.querySelectorAll('.custom-select ul li').forEach(li => {
        if (li.getAttribute('data-country') === data.country) {
            selectActions(li);
        }
    });
});

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = {hjid: 1699330, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
hj('trigger', 'PDP_shipping_info');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Shipping info on PDP',
    'eventAction': 'loaded'
});
