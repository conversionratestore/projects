let style = `
  <style>
    .dark_bg {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow-y: scroll;
        background: rgba(69, 69, 69, 0.46);
        z-index: 1050;
    }
    
    .dark_bg.active {
        display: block;
    }
    
    .popup {
        width: 95%;
        margin: 50px auto;
        background: #FFFFFF;
        box-shadow: 0 4px 11px rgba(0, 0, 0, 0.11);
        border-radius: 10px;
        padding: 0 25px 38px;
        position:relative;
    }
    
    .popup .close_popup {
        position:absolute;
        right: 15px;
        top: -17px;
        height: 34px;
        width: 34px;
        background: #fff url("https://dragonegor.github.io/conversionrate/buzzpatch/img1/close.svg") center center no-repeat;
        background-size:cover;
        border-radius: 50%;
    }
    
    .popup_btn {
        position: relative;
        display: block;
        margin: 0 auto 15px;
        background-color: #fff;
        padding: 20px 20px;
        width: 100%;
        max-width: 331px;
        border-radius: 40px;
        border: 2px solid #ff3c7f;
        box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
        text-transform:uppercase;
        color: #ff3c81;
        font-family: 'Din Condensed',Roboto,sans-serif;
        letter-spacing: .015em;
    }
    
    .popup .popup_btn {
        margin-top: 20px;
        background-color: #ff3c81;
        color: white;
    }
    
    .popup video {
        width: 100%;
        height: 200px;
    }
    
    .popup .title {
        color: #0C0B0B;
        text-align: center;
        margin: 10px 0;
        font-family: 'Din Condensed',Roboto,sans-serif;
        font-weight: 700;  
        font-size: 24px !important;  
    }
    
    .card-link span {
        display: none;
        width: 18px;
        height: 18px;
        background-image: url(https://cdn.shopify.com/s/files/1/0387/0749/4956/files/plus.svg?v=1620275333);
        background-size: cover;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        position: absolute;
    }
    
    .popup .card {
      border: none;
    }
    
   .popup .card-header {
        padding: 10px 20px 10px 30px;
        font-size: 16px;
        font-weight: 500;
        position: relative;
        background-color: #fff;
        border-bottom: none;
    }
    
    .popup .card-body {
      display: none;
      padding: 20px 20px 0;
      background: #f9f8f6;
    }
    
    .popup .card-body p {
      font-size: 16px !important;
    }
    
    .popup .video {
      position: relative;
    }
    
    .popup .play {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
    
    .step1, .step2 {
        display: none;
    }
    
    .step1.active, .step2.active {
        display: block;
    }
    
    .step2 {
      padding: 20px 0 0;
      text-align: center;
    }
    
    .popup .form-group {
      display: flex;
      flex-wrap:wrap;
      justify-content:space-between;
    }
    
    .popup .form-group .js-packs {
      width: 45%;
      border: 2px solid #ff3c81;
    }
    
    .popup .form-group .js-packs label {
      font-size: 17px;
      padding: 14px 20px;
      font-family: "DIN Condensed",roboto,sans-serif;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .6px;
    }
    .popup .form-group .js-packs label span{
      font-size: 12px;
      font-family: Roboto, sans-serif;
      font-weight: 400;
    }
    
    .popup .form-group .js-packs.selected {
      background-color: #ff3c81;
      color: white;
    }
    
   </style>
`

let block = `
    <div class="card">
      <div class="card-header">
        <a class="card-link collapsed">
          <span class="arrow down"></span>How do I place stickers to protect my whole child's body?</a>
      </div>
      <div class="card-body">
        <p>Kids aged 0-2 need 1 patch: One patch placed centrally on clothes (ie, on their jumpsuit on the stomach, chest)</p>
        <p>Kids aged 3-5 need 2 patches: One patch on the top clothes (sweater, t-shirt) and one on the shorts.</p>
        <p>Kids aged 6+ and parents need 2-4 patches: One patch on the clothing next to each exposed limb (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side of the shorts)</p>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="card-link collapsed">
          <span class="arrow down"></span>How long will sealed stickers last?</a>
      </div>
      <div class="card-body">
        <p>The bag has a ziplock. Put the unused patches into the bag and seal it. BuzzPatch when sealed will last up to 24 months.</p>
        <p>If you have a pack that is past its used by date, send a photo of the unopened pack to hello@buzzpatch.com and we'll send you a new one.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="card-link collapsed">
          <span class="arrow down"></span>Where are BuzzPatch stickers made?</a>
      </div>
      <div class="card-body">
        <p>Patches are formulated and designed in Australia.</p>
     </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="card-link collapsed">
          <span class="arrow down"></span>How many stickers do I need?</a>
      </div>
      <div class="card-body">
        <p>Kids aged 0-2 need 1: One patch placed centrally on clothes (ie, on their jumpsuit on the stomach, chest)</p>
        <p>Kids aged 3-5 need 2: One patch on the top clothes (sweater, t-shirt) and one on the shorts.</p>
        <p>Kids aged 6+ and parents need 2-4: One patch on the clothing next to each exposed limb (one on the sleeve of both the left and right arm, and if wearing shorts, one on the left and right side of the shorts)</p>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <a class="card-link collapsed">
          <span class="arrow down"></span>How long will shipping take?</a>
      </div>
      <div class="card-body">
        <p>All orders are dispatched the same day, and usually take 3-5 days to USA, Canada and Australia. However, with current travel restrictions, we’re seeing shipping times range between 10-15 days, and in some cases up to 25 days.</p>
      </div>
    </div>
`

let popup = `
    <div class="dark_bg">
        <div class="popup">
          <span class="close_popup"></span>
          <div class="step1 active">
              <h2>how does it work?</h2>
              <div class="video"> 
                  <div class="play" data-status="pause"></div>
                  <video loop poster="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/video_c9e0b370-69c5-4dc5-b783-69f71b771e4a.jpg">
                      <source src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/buzzpath-video.mp4?v=1614167522" type="video/mp4">  
                  </video>
              </div> 
              <p class="title">FAQ</p>
              <div class="accordion_popup">
                  ${block}
              </div>
              <button class="popup_btn close_btn">GET BUZZPATCH</button>
          </div>
          
        </div>
    </div>
`

let btn = `
    <button class="popup_btn open_btn">See how it works</button>
`

let buyBlock = `
    <div class="package step2">
                <h2>SELECT PACKAGE</h2>
                <p>60 patches in 1 pack</p>
                <p class="sub js-desktop">And get FREE shipping Worldwide</p> 
               <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/delivery.png?v=1619961655" alt="buzzpatch">
  
                <div class="form">
                    <form class="form-horizontal">
                        <div class="form-group"> 
                          <div class="js-packs selected">
                            <span class="bestseller">bestseller</span> 
                            <label class="radio-inline" for="radios-0"> 3 Packs<br><span>$12.0 Each</span> </label> 
                          </div> 
                          <div class="js-packs"> 
                            <label class="radio-inline" for="radios-1"> 4 Packs<br><span>$10.5 Each</span></label> 
                          </div>  
                          <div class="js-packs"> 
                            <label class="radio-inline" for="radios-2"> 2 Packs<br><span>$13.5 Each</span></label> 
                          </div>  
                          <div class="js-packs"> 
                            <label class="radio-inline" for="radios-3">1 Pack<br><span>$14.99 Each</span> </label> 
                          </div>   
                        </div> 
                    </form> 
                </div>
                <div class="prices">
                    <span class="js-total">$<span class="pr">36.0</span> (<span class="ps">40</span>% OFF)</span>
                    <span class="js-regular">Reg. Price: <span class="js-strike">$<span class="rp">60</span></span> (Save $<span class="rs">24.00</span>)</span>
                </div>
                <button class="popup_btn to_checkout">PROCEED TO CHECKOUT</button> 
    </div>      
`

document.body.insertAdjacentHTML('afterbegin', style)
document.querySelector('.hand-banner img').insertAdjacentHTML('afterend', btn)
document.body.insertAdjacentHTML('beforeend', popup)
document.querySelector('.step1').insertAdjacentHTML('afterend', buyBlock)

$('.popup .card-header').click(function () {
    if($(this).find('a').hasClass('collapsed')) {
        $(this).closest('.card').siblings().each(function (i, item) {
            $(item).find('.card-body').slideUp()
            $(item).find('a').addClass('collapsed')
        })
        $(this).find('a').removeClass('collapsed')
        $(this).next().slideDown()
    } else {
        $(this).find('a').addClass('collapsed')
        $(this).next().slideUp()
    }
})

document.querySelector('.popup_btn.open_btn').addEventListener('click', function () {
    document.querySelector('.dark_bg').classList.add('active')
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Click on button See how it works',
        'eventLabel': 'Content'
    });
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Activated',
        'eventLabel': 'Popup: How does it work'
    });
})

document.querySelector('.play').addEventListener('click', function () {
    let attr = this.getAttribute('data-status')

    if(attr === 'pause') {
        document.getElementsByTagName('video')[1].play()
        this.setAttribute('data-status', 'play')
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add how it work button',
            'eventAction': 'Click on video',
            'eventLabel': 'Popup: How does it work'
        });
    } else {
        this.setAttribute('data-status', 'pause')
        document.getElementsByTagName('video')[1].pause()
    }

})

document.querySelectorAll('.popup a.collapsed').forEach((item) => {
    item.addEventListener('click', function () {
        let question = this.querySelector('.popup .card span').nextSibling.textContent.trim()
        if(this.classList.contains('collapsed')) {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Add how it work button',
            'eventAction': `Click on FAQ card — ${question}`,
            'eventLabel': 'Popup: How does it work'
        });
        }
    })
})

document.querySelector('.close_popup').addEventListener('click', function () {
    document.querySelector('.dark_bg').classList.remove('active')
    document.getElementsByTagName('video')[1].pause()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Close popup — click on icon Cross',
        'eventLabel': 'Popup: How does it work'
    });
})

document.querySelector('.popup_btn.close_btn').addEventListener('click', function () {
    document.getElementsByTagName('video')[1].pause()
    document.querySelector('.step1').classList.remove('active')
    document.querySelector('.step2').classList.add('active')
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Click on button Get Buzzpatch',
        'eventLabel': 'Popup: How does it work'
    });
})

document.querySelector('.popup .to_checkout').addEventListener('click', function () {
    document.querySelector('#getNow a.btn-primary').click()
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Click popup button - Go to checkout'
    });
})

$('.popup .js-packs').click(function () {
    $(this).addClass('selected').siblings().removeClass('selected')
    let packs = $(this).find('label').eq(0).text().split('$')[0].trim()
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Click on popup product packs',
        'eventLabel': `${packs}`
    });
})

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Add how it work button',
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
hj('trigger', 'add_how_it_work_button');
