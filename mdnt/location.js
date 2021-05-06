window.onload = async function () {
    try {
        const response = await fetch('https://shopify.blaster.ai/api/processing-time-ip')
        if (!response.ok) {
            throw new Error('Ответ сети был не ok.');
        } else {
            response.json().then((r) => {
                console.log(r)
                start(r)
            })
        }
    } catch (error) {
        console.log('Возникла проблема с вашим fetch запросом: ', error.message);
        altStart()
    }
}


function start(d) {

    console.log('start')

    let price = '5.83'
    if(d.region === 'CA') {
        price = '9.83'
    } else if (d.region === 'AU') {
        price = '33.75'
    }

    let style = `
        <style>
          .announcement-bar .page-width {
            display: none;
          }
          
          .location_block {
            display:flex;
            justify-content:center;
            align-items: center;
            padding: 0 15px;
          }
          
          .location_block p {
            font-size: 14px;
            text-transform:uppercase;
            color: white;
            margin-bottom: 0;
          }
          .location_block img {
            margin-right: 10px;
          }
          
          .dark_bg {
            display: none;
            position: fixed;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, .4);
            top: 0;
            left: 0;
            z-index: 1000;
          }
          
          .dark_bg.active {
            display: block;
          }
          
          .popup-delivery {
            width: 80%;
            position:absolute;
            top: 50%;
            left: 50%;
            background:#fff;
            padding: 17px;
            transform: translate(-50%, -50%);
          }
          
          .popup-delivery span.close{
            position: absolute;
            display: block;
            height: 16px;
            width: 16px;
            top: 15px;
            right: 15px;
            background: url("https://conversionratestore.github.io/projects/mdnt/img/close.svg") center center no-repeat;
            background-size: contain;
          }
          
          .popup-delivery>*:nth-child(2) {
            font-size: 22px;
            padding-right: 30px;
            line-height: 1.2;
          }
          
          .popup-delivery>*:nth-child(3) {
            font-size: 18px;
            line-height: 1.2;
          }
          
          .popup-delivery>*:nth-child(4) {
            font-size: 18px;
            line-height: 1.2;
          }
          
          .popup-delivery .y {
            background-color: #fff2e8;
            padding: 10px;
            font-size: 18px;
            font-weight: 700;
            text-align:center;
            margin: 30px 0;
          }
          
          .popup-delivery a {
            background-color: #cf1322;
            font-size: 18px;
            text-transform: uppercase;
            padding: 20px;
            color: white;
            font-weight: 700;
            display: block;
            width: 100%;
            text-align: center;
          }
        </style>
    `

    let btnLocation = `
        <div class="location_block">
          <img src="https://conversionratestore.github.io/projects/mdnt/img/plane.svg" alt="plane">
          <p>we ship to <span>${d.country.replace('(the)', '').trim()}</span></p>
        </div>
    `

    let popup = `
      <div class="dark_bg">
        <div class="popup-delivery">
          <span class="close"></span>
          <p>Delivering to ${d.country.replace('(the)', '').trim()} within ${d['total-max']} days!</p>
          <p>The shipping cost depends on the weight of your order and start at $${price}.</p>
          <p>We need ${d['processing-max']} days to produce and fulfil your order. Then it will be delivered by ${(d.region === 'US')?'USPS':'DHL'}
           to ${d.country.replace('(the)', '').trim()} within ${d['ship-max']}.</p>
          <div class="y">Free shipping on all orders over $399</div>
          <a href="https://mdnt45.com/collections/bestsellers">GO TO LOOKS</a>
        </div>
      </div>
    `


    document.body.insertAdjacentHTML('afterbegin', style)
    document.body.insertAdjacentHTML('beforeend', popup)
    document.querySelector('.announcement-bar').insertAdjacentHTML('afterbegin', btnLocation)
    document.querySelector('.location_block').addEventListener('click', function () {
        document.querySelector('.dark_bg').classList.add('active')
        if(window.location.pathname === '/') {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Geolocation and shipping info',
                'eventAction': 'Click on country',
                'eventLabel': 'Main page'
            });
        } else {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — Geolocation and shipping info',
                'eventAction': 'Click on country',
                'eventLabel': 'Listing page'
            });
        }

    })

    document.querySelector('.popup-delivery .close').addEventListener('click', function () {
        document.querySelector('.dark_bg').classList.remove('active')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Geolocation and shipping info',
            'eventAction': 'Close popup',
            'eventLabel': 'Cross'
        });

    })

    document.querySelector('.dark_bg').addEventListener('click', function () {
        document.querySelector('.dark_bg').classList.remove('active')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Geolocation and shipping info',
            'eventAction': 'Close popup',
            'eventLabel': 'Background'
        });
    })

    document.querySelector('.popup-delivery a').addEventListener('click', function (e) {
        e.stopPropagation()
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Geolocation and shipping info',
            'eventAction': 'Click on "Go to looks"'
        });
    })
}

function altStart() {
    console.log('altStart')
    document.querySelector('.announcement-bar').insertAdjacentHTML('afterbegin', `<p>Free shipping world wide on all orders over $399</p>`)
    document.body.insertAdjacentHTML('afterbegin', `
        <style>
          .announcement-bar .page-width {
            display: none;
          }
          
          .announcement-bar p {
            margin-bottom: 0;
            font-size: 14px;
          }
         </style>`)
}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Geolocation and shipping info',
    'eventAction': 'loaded'
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'location_and_shipping');

