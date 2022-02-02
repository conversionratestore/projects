let style = `
    <style>
      .home-hero-content {
        display: none;
      }
      
      .home-page-hero {
        height: auto;
      }
      
      .human-hand {
        left: -5% !important;
      }
      
      .monkey-hand {
        left: 80% !important;
      }
    
      .new_homepage {
        width: 900px;
        margin: 0 auto 30px;
        text-align: center;
      }
      
      .new_homepage * {
        box-sizing: border-box;
      }
      
      .new_homepage h1 {
        font-size: 48px;
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
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 10px;
        text-align: center;
      }
      
      .new_homepage ul {
         display: flex;
         flex-wrap:wrap;
         justify-content: space-between;
      }
      
      .new_homepage ul li {
        width: 210px;
        margin: 10px 0 0;
        border: 1px solid #DADADA;
        border-radius: 5px;
        overflow: hidden;
        background-color: #fff;
        cursor: pointer;
      }
      
      .new_homepage ul li p{
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
        height: 210px;
        width: 100%;
      }
      
      .new_homepage .img img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      
      .new_homepage button {
        background-color: #26673E;
        padding: 18px 50px;
        color: white;
        font-size: 14px;
        border-radius: 40px;
        position:relative;
        margin-top: 20px;
      }
      
      .new_homepage button::after {
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
      
    </style>
`

let block = `
<div class="new_homepage">
    <h1><span>Personalizowana</span> dieta pudełkowa na wyciągnięcie ręki</h1>
    <p>Komponuj zestawy posiłków niemal bez ograniczeń</p>
    <ul>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block1.jpg" alt="image"></div>
          <p>Dieta zbilansowana</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block2.jpg" alt="image"></div>
          <p>Dieta bez nabiału</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block3.jpg" alt="image"></div>
          <p>Dieta niskoglutenowa</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block4.jpg" alt="image"></div>
          <p>Dieta wegetariańska</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block5.jpg" alt="image"></div>
          <p>Dieta weganska/roślinna</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block6.jpg" alt="image"></div>
          <p>Dieta na insulinooporność</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block7.jpg" alt="image"></div>
          <p>Dieta - low carb</p>
        </li>
        <li>
          <div class="img"><img src="https://conversionratestore.github.io/projects/primate/img/block8.jpg" alt="image"></div>
          <p>Twoja personalizowana dieta</p>
        </li>
    </ul>
    <button>DALEJ</button>
</div>
`

let onload = setInterval(function () {
    if(document.querySelector('.home-hero-content')) {
        clearInterval(onload)
        start()
    }
})
function start() {

    document.body.insertAdjacentHTML('afterbegin', style)

    document.querySelector('.home-hero-content').insertAdjacentHTML('beforebegin', block)

    document.querySelector('.new_homepage ul li').addEventListener('click', function () {
        window.location.pathname = '/zamowienie'
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Homepage CTR',
            'eventAction': 'Click on Diet item'
        });
    })

    document.querySelector('.new_homepage button').addEventListener('click', function () {
        window.location.pathname = '/zamowienie'
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: Homepage CTR',
            'eventAction': 'Click on Dalej (Next)'
        });
    });

}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Homepage CTR',
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
hj('event', 'homepage_ctr');

