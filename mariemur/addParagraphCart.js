document.head.insertAdjacentHTML('beforeend', `
    <style>
        .moneyback-guarantee {
            padding-bottom: 15px;
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
            text-align: center;            
            color: #5E5E5E;
        }
        .moneyback__text_red {
            font-weight: 400;
            font-size: 12px;
            text-transform: uppercase;
            line-height: 14px; 
            color: #A60B00;   
            letter-spacing: 1px; 
        }
    </style>
`);

function drawParagraph(reg) {
    if (document.querySelector('.cart-modal__total')) {
        let total = document.querySelector('.cart-modal__total');

        let paragraphEU = `<p class="moneyback-guarantee"><span class="moneyback__text_red">14 days money-back guarantee</span><br>Hustle free returns is size doesn’t match</p>`;
        let paragraphUS = `<p class="moneyback-guarantee"><span class="moneyback__text_red">14 days money-back guarantee</span><br>Free returns if size doesn’t match</p>`;

        switch (reg) {
            case 'america':
                total.insertAdjacentHTML('afterend', paragraphUS);
                break;
            case 'europe':
                total.insertAdjacentHTML('afterend', paragraphEU);
                break;
            default:
                break;
        }
    }
}

// select the target node
const target = document.querySelector('.cart-modal__inner');

// create an observer instance
let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (!document.querySelector('.moneyback-guarantee')) {
            if (!localStorage.getItem('region')) {
                fetch('http://ipinfo.io?token=2b19e029d686d7').then(res => res.json()).then(function (data) {
                    let region = data.timezone.split('/')[0].toLowerCase();
                    localStorage.setItem('region', region);

                    drawParagraph(region);
                });
            } else {
                let region = localStorage.getItem('region');
                drawParagraph(region);
            }
        }        
    });
});

// configuration of the observer:
const config = {attributes: true, childList: true, characterData: true};

// pass in the target node, as well as the observer options
observer.observe(target, config);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PL cart change mobile',
    'eventAction': 'loaded'
});

(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () {
        (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = {hjid: 2442662, hjsv: 6};
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
window.hj = window.hj || function () {
    (hj.q = hj.q || []).push(arguments);
};
hj('trigger', 'pl_cart_change_mobile');
