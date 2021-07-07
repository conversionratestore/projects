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
    
    .popup_btn.close_btn {
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
    }
    
   .popup #js-accordion .card-link {
        padding: 20px 20px 20px 30px;
        font-size: 18px;
        position: relative;
    }
    
    .popup #js-accordion .card:nth-child(4),
    .popup #js-accordion .card:nth-child(7) {
        display: none;
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
    
   </style>
`

let block = document.querySelector('#js-accordion').cloneNode(true)

let popup = `
    <div class="dark_bg">
        <div class="popup">
          <span class="close_popup"></span>
          <h2>how does it work?</h2>
          <div class="video"> 
              <div class="play" data-status="pause"></div>
              <video loop poster="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/video_c9e0b370-69c5-4dc5-b783-69f71b771e4a.jpg">
                  <source src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/buzzpath-video.mp4?v=1614167522" type="video/mp4">  
              </video>
          </div> 
          <p class="title">FAQ</p>
          <div class="accordion_popup">
          </div>
          <button class="popup_btn close_btn">GET BUZZPATCH</button>
        </div>
    </div>
`

let btn = `
    <button class="popup_btn open_btn">See how it works</button>
`

document.body.insertAdjacentHTML('afterbegin', style)
document.querySelector('.hand-banner img').insertAdjacentHTML('afterend', btn)
document.body.insertAdjacentHTML('beforeend', popup)
document.querySelector('.accordion_popup').append(block)

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

document.querySelectorAll('.popup #js-accordion a.collapsed').forEach((item) => {
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
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Close popup — click on icon Cross',
        'eventLabel': 'Popup: How does it work'
    });
})

document.querySelector('.popup_btn.close_btn').addEventListener('click', function () {
    document.querySelector('#getNow').scrollIntoView({
        behavior: "smooth"
    })
    document.querySelector('.dark_bg').classList.remove('active')
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Add how it work button',
        'eventAction': 'Click on button Get Buzzpatch',
        'eventLabel': 'Popup: How does it work'
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
