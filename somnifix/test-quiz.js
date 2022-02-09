if (window.location.pathname.includes('blogs')) {
    let start = setInterval(function () {
        if(document.querySelectorAll(`h2`)[1]) {
            clearInterval(start)
            blogPage()
        }
    }, 100)


} else {
    let start = setInterval(function () {
        if(document.querySelectorAll('.shg-btn-wrapper')[0]) {
            clearInterval(start)
            mainPage()
        }
    }, 100)
}



function blogPage() {

    const style = `
        <style>
          .blog_banner {
            border: 1px solid #DDDDDD;
            border-radius: 10px;
            padding: 10px;
            display: flex;
          }
          
          .blog_banner>div {
            margin-left: 25px;
          }
          
          .blog_banner .title {
            font-size: 24px;
            font-weight: 700;
            color: #1E415C;
            margin-bottom: 0;
          }
          
          .blog_banner .title+p {
            font-size: 14px;
            color: #434B55;
            margin: 10px 0 14px;
          }
          
          .blog_banner a {
            display: flex;
            justify-content: center;
            border-radius: 40px;
            background: #1F405C;
            font-size: 15px;
            font-weight: 700;
            color: white;
            text-transform:uppercase;
            padding: 15px 30px;
          }
        </style>
    `

    const banner = `
        <div class="blog_banner">
           <img src="https://conversionratestore.github.io/projects/somnifix/img/quiz/blog_banner.jpg" alt="banner">
           <div>
           <p class="title">How good is your<br>sleep?</p>
           <p>Take our quiz and determine your sleep quality</p>
           <a href="https://somnifix.com/pages/quiz-11" class="to_quiz2">Let’s find out</a>
           </div>
        </div>
    `
    document.body.insertAdjacentHTML('afterbegin', style)
    

    if(window.location.pathname.includes('cpap-machine-hack-overcoming-mouth-breathing')) {
        document.querySelectorAll(`.article-content img`)[1].insertAdjacentHTML('afterend', banner)
    } else {
        document.querySelectorAll(`h2`)[1]?.insertAdjacentHTML('beforebegin', banner)
    }

    document.querySelector('.to_quiz2').addEventListener('click', function () {
        let page = window.location.pathname.split('snews/')[1]

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz hp and blog pages',
            'eventAction': 'Click on the Lets find out button',
            'eventLabel': `On blog page: ${page}`
        });
    })
}

function mainPage() {
    const style = `
    <style>
       .to_quiz1 {
        display: inline-flex;
        justify-content:center;
        align-items: center;
        border: 2px solid #68A1C0;
        color: #68A1C0;
        text-transform:uppercase;
        font-size: 14px;
        font-weight: 500;
        padding: 12px 30px;
        line-height: 1;
        margin: 40px 0;
        background-color: white;
       }
       
       .to_quiz1:hover {
        color: #68A1C0;
        font-size: 14px;
       }
    </style>
`

    const mainLink = `
    <a href="https://somnifix.com/pages/quiz-11" class="to_quiz1">Define Your Sleep Quality</a>
`
    document.body.insertAdjacentHTML('afterbegin', style)
    document.querySelectorAll('.shg-btn-wrapper')[0].insertAdjacentHTML('beforeend', mainLink)

    document.querySelector('.to_quiz1').addEventListener('click', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Quiz hp and blog pages',
            'eventAction': 'Click on the Define Your Sleep Quality button',
            'eventLabel': 'On first screen homepage'
        });
    })
}

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — Quiz hp and blog pages',
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
hj('event', 'quiz_hp_blog');
