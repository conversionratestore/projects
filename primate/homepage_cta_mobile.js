let link1 = document.createElement('link');
link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css';
link1.rel = 'stylesheet'
document.head.appendChild(link1);

let scriptSlider = document.createElement('script');
scriptSlider.src = 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js';
scriptSlider.async = false;
document.head.appendChild(scriptSlider);

let style = `
    <style>
      .home-hero-content {
        display: none;
      }
      
      .home-page-hero {
        height: auto;
      }
      
      .human-hand {
        display: none;
      }
      
      .monkey-hand {
        display: none;
      }
    
      .new_homepage {
        width: 100%;
        margin: 30px auto;
        text-align: center;
      }
      
      .new_homepage * {
        box-sizing: border-box;
      }
      
      .new_homepage h1 {
        font-size: 28px;
        font-weight: 900;
        color: #1A1A17;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .new_homepage h1 span {
        color: #26673E;
      }
      
      .new_homepage>p {
        color: #1A1A17;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .new_homepage ul {
        padding: 30px 0;
      }
      .new_homepage ul li {
        transition: transform 0.3s;
      }
      
      .new_homepage ul .li {
        border: 1px solid #DADADA;
        border-radius: 5px;
        overflow: hidden;
        background-color: #fff;
        cursor: pointer;
      }
      
      .new_homepage ul .li p{
        font-size: 16px;
        font-weight: 700;
        padding: 0 10px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content:center;
        margin: 0;
        text-align: center;
      }
      
      .new_homepage .img {
        height: 272px;
        width: 100%;
      }
      
      .new_homepage .img img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      
      .new_homepage>button {
        background-color: #26673E;
        padding: 18px 50px;
        color: white;
        font-size: 14px;
        border-radius: 40px;
        position:relative;
        margin-top: 20px;
        cursor: pointer;
      }
      
      .new_homepage>button::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        height: 24px;
        width: 24px;
        background: url("https://conversionratestore.github.io/projects/primate/img/arrow.svg") center center no-repeat;
        background-size:cover;
      }
      
      .center {
        transform: scale(1.1);
      }
      
      .tns-nav {
        display: flex;
        justify-content:center;
        align-items: center;
      }
      
      .tns-nav button {
        width: 8px;
        height: 8px;
        background: #C4C4C4;
        transition: all 0.3s;
        margin: 0 5px;
        padding: 0;
        border-radius: 50%;
      }
      
      .tns-nav button.tns-nav-active {
        width: 10px;
        height: 10px;
        background: #357754;
      }
      
    </style>
`

let block = `
<div class="new_homepage">
    <h1><span>Personalizowana</span> dieta pudełkowa na wyciągnięcie ręki</h1>
    <p>Komponuj zestawy posiłków niemal bez ograniczeń</p>
    <ul class="slider">
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block1.jpg" alt="image"></div>
          <p>Dieta zbilansowana</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block2.jpg" alt="image"></div>
          <p>Dieta bez nabiału</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block3.jpg" alt="image"></div>
          <p>Dieta niskoglutenowa</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block4.jpg" alt="image"></div>
          <p>Dieta wegetariańska</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block5.jpg" alt="image"></div>
          <p>Dieta weganska/roślinna</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block6.jpg" alt="image"></div>
          <p>Dieta na insulinooporność</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block7.jpg" alt="image"></div>
          <p>Dieta - low carb</p>
        </div>
        </li>
        <li>
        <div class="li">
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block8.jpg" alt="image"></div>
          <p>Twoja personalizowana dieta</p>
        </div>
        </li>
    </ul>
    <button>DALEJ</button>
</div>
`

let onload = setInterval(function () {
    if(document.querySelector('.home-hero-content') && typeof tns === 'function') {
        clearInterval(onload)
        start()
    }
})
function start() {

    document.body.insertAdjacentHTML('afterbegin', style)

    document.querySelector('.home-hero-content').insertAdjacentHTML('beforebegin', block)
    document.querySelector(".exp")?.remove()

    const slider = tns({
        container: '.slider',
        controls: false,
        navPosition: 'bottom',
        center: true,
        items: 2,
        gutter: 20,
        fixedWidth: 210
    })

    document.querySelectorAll('.tns-slide-active').forEach((item, i) => {
        item.classList.remove('center')
        if(i === 1) {
            item.classList.add('center')
        }
    })

    slider.events.on('transitionStart', function () {
        document.querySelectorAll('.tns-slide-active').forEach((item, i) => {
            item.classList.remove('center')
            if(i === 1) {
                item.classList.add('center')
            }
        })
    });

    document.querySelectorAll('.new_homepage ul li').forEach(item => {
        item.addEventListener('click', function () {
            window.location.pathname = '/zamowienie'
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp: Homepage CTR mobile',
                'eventAction': 'Click on Diet item'
            });
        })
    })

    document.querySelector('.new_homepage button').addEventListener('click', function () {
        window.location.pathname = '/zamowienie'
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Homepage CTR mobile',
            'eventAction': 'Click on Dalej (Next)'
        });
    });

}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Homepage CTR mobile',
    'eventAction': 'loaded'
});


(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1350427,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
hj('event', 'homepage_ctr_mobile');
