window.onload = async function () {
    try {
        const response = await fetch('https://shopify.blaster.ai/api/processing-time-ip')
        if (!response.ok) {
            throw new Error('Ответ сети был не ok.');
        } else {
            console.log(response)
            response.json().then((r) => {
                start(r)
            })
        }
    } catch (error) {
        console.log('Возникла проблема с вашим fetch запросом: ', error.message);
    }
}


function start(d) {

    console.log('start')

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
          <p>Shipping to ${d.country.replace('(the)', '').trim()} ${d['ship-min']}-${d['ship-max']} days (DHL), starts from $5.83</p>
          <p>Shipping costs depends on your order total weight. Here is the list of estimated shipping time and minimum cost:</p>
          <p>The time we need to prepare an order for shipping varies from ${d['processing-min']} to ${d['processing-max']} business days.</p>
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
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Geolocation and shipping info',
            'eventAction': 'Click on country',
            'eventLabel': 'Main page'
        });
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

    document.querySelector('.popup-delivery a').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Geolocation and shipping info',
            'eventAction': 'Click on "Go to looks"'
        });
    })

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
}

