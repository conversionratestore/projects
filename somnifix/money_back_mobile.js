let style = `
    <style>
        .money_back {
            padding: 50px 0;
            background-color: #f8f8f8;
        }
        
        .money_back .flx {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        
        .money_back>* {
            width: 95%;
            margin: 0 auto;
            max-width: 1200px;
        }
        
        .money_back h2 {
            text-align: center;
            margin-bottom: 30px;
            color: #000000;
            font-size: 24px;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
        }
        
        .money_back .schedule {
            background-color: #fff;
            border-radius: 15px;
            margin-bottom: 25px;
            padding: 20px;
        }
        
        .money_back .schedule p {
            font-size: 12px;
            line-height: 1.2;
        }
        
        .money_back .schedule select {
            width: fit-content;
        }
        
        .money_back .spots {
            color: #1E415F;
            font-size: 18px;
            font-weight: 700;
        }
        
        .money_back .spots>p {
            width: 200px;
            text-align: center;
            padding: 5px 22px;
            line-height: 1.1;
            font-size: 12px;
        }
        .money_back .spots>p:first-child {
           background: url("https://conversionratestore.github.io/projects/somnifix/img/spot1.svg") center center no-repeat;
           background-size: contain;
        }
        
        .money_back .spots>p:nth-child(2) {
           background: url("https://conversionratestore.github.io/projects/somnifix/img/spot2.svg") center center no-repeat;
           background-size: contain;
        }
        
        .money_back .spots>p:last-child {
           background: url("https://conversionratestore.github.io/projects/somnifix/img/spot3.svg") center center no-repeat;
           background-size: contain;
        }
        
        .money_back .delivery_time {
            position:relative;
        }
        
        .money_back .delivery_time>div:not(.line) {
            position:absolute;
            top: -55px;
            width: fit-content;
        }
        
        .money_back .delivery_time>div:nth-child(3) {
            left: 30%;
        }
        
        .money_back .delivery_time>div:last-child {
            left: 65%;
        }
        
        .money_back .delivery_time>div:nth-child(2)>p:first-child, 
        .money_back .delivery_time>div:nth-child(3)>p:first-child {
            margin-top: 14px;
        }
        
        .money_back .delivery_time>div:not(.line)>p:first-child {
            font-weight: 700;
            color: #1E415F;
        }
        
        .money_back .delivery_time>div:not(.line)>p:nth-child(2) { 
            color: #1E415F;
        }
        
        .money_back .delivery_time>div:not(.line)>p:last-child {
            margin-top: 25px;
            color: #6aadc4;
        }
        
        .money_back .line {
            margin: 70px 0 35px;
            height: 3px;
            width: 100%;
            background-color: #E3F4FF;
            border-radius: 10px;
            position:relative;
        }
        
        .money_back .line span {
            display: block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: #2374B5;
            position:absolute;
            top: -3px;
            left: 0;
        }
        
        .money_back .line span.point2 {
            left: calc(30% - 10px);
        }
        
        .money_back .line span.point3 {
            left: calc(65% - 10px);
        }
        
        .money_back .line p {
            height: 3px;
            width: 63%;
            background-color: #2374b5;
            border-radius: 10px;
        }
        
    </style>
`

let link = `
<div class="navbar-item header__item " data-navlink-handle="guarantee"> 
    <a href="#" class="navbar-link header__link  is-arrowless to_money_back">guarantee</a>
</div>
`

let block = `

    <div class="money_back" id="money_back">
        <h2>Money back guarantee</h2>
        <div class="schedule">
            <p>Ship to:</p>
            <div class="delivery_time">
                <div class="line">
                    <span class="point1"></span>
                    <span class="point2"></span>
                    <span class="point3"></span>
                    <p></p>
                </div>
                <div><p>Buy SomniFix</p><p>Today</p><p class="today">Jun 17, 2021</p></div>
                <div><p>Shipping</p><p>1-4 days</p><p class="delivery_date">Jun 18-21, 2021</p></div>
                <div><p>100% money back<br>guarantee through</p><p>After 30 days</p><p class="money_back_date">Jul 17, 2021</p></div>
            </div>
        </div>
        <div class="flx spots">
            <p><img src="https://conversionratestore.github.io/projects/somnifix/img/check.svg" alt="check"><br>Free US shipping and returns</p>
            <p><img src="https://conversionratestore.github.io/projects/somnifix/img/check.svg" alt="check"><br>30-day money back guarantee</p>
            <p><img src="https://conversionratestore.github.io/projects/somnifix/img/check.svg" alt="check"><br>Made in USA</p>
        </div>
    </div>

`

let start = setInterval(function () {
    if (document.querySelector('.recomendedmedical') && document.querySelector('.delivery_date')) {
        clearInterval(start)

        document.querySelector('nav.header__menu-items').insertAdjacentHTML('beforeend', link)

        document.querySelector('.to_money_back').addEventListener('click', function (e) {
            e.preventDefault()
            document.querySelector('#money_back').scrollIntoView({behavior: "smooth"})
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP money back guarantee',
                'eventAction': 'Click on GUARANTEE button',
                'eventLabel': 'Section megamenu'
            });
        })

        document.body.insertAdjacentHTML('afterbegin', style)
        document.querySelector('.recomendedmedical').insertAdjacentHTML('beforebegin',block)
        let sel = document.querySelectorAll('.country_select')[1].cloneNode(true)
        document.querySelector('.schedule>p').appendChild(sel)

        document.querySelector('.money_back select').addEventListener('change', function (e) {
            document.querySelectorAll('.country_select')[1].value = this.value
            let d = e.target.options[e.target.selectedIndex].dataset.value;
            document.querySelectorAll('.delivery_date b')[0].innerHTML = d
            document.querySelectorAll('.delivery_date b')[1].innerHTML = d
            setDateDelivery(d)
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP money back guarantee',
                'eventAction': 'Click on Ship to selection',
                'eventLabel': 'newSelect'
            });
        })

        document.querySelectorAll('.country_select')[1].addEventListener('change', function (e) {
            document.querySelector('.money_back select').value = this.value
            let d = e.target.options[e.target.selectedIndex].dataset.value;
            setDateDelivery(d)
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp — PDP money back guarantee',
                'eventAction': 'Click on Ship to selection',
                'eventLabel': 'oldSelect'
            });
        })

        let monthTable = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        function setDateDelivery (str) {
            let parseStr = str.split(' ').filter((item) => item !== '-')
            let day = new Date().getDate()
            let month = new Date().getMonth()
            let year = new Date().getFullYear()
            let day1 = +parseStr[0]
            let day2 = +parseStr[2]
            let month1 = monthTable.indexOf(parseStr[1])
            let month2 = monthTable.indexOf(parseStr[3])
            let date = new Date(year, month, day);
            let date1 = new Date(year, month1, day1);
            let date2 = new Date(year, month2, day2);
            let daysLag1 = Math.ceil(Math.abs(date1.getTime() - date.getTime()) / (1000 * 3600 * 24));
            let daysLag2 = Math.ceil(Math.abs(date2.getTime() - date.getTime()) / (1000 * 3600 * 24));
            let daysLag3 = new Date(date1.setDate(date1.getDate() + 30))
            let daysLag4 = new Date(date2.setDate(date2.getDate() + 30))

            document.querySelector('.delivery_time>div:nth-child(3)>p:nth-child(2)').innerHTML = `${daysLag1}-${daysLag2} days`
            document.querySelector('.delivery_time .today').innerHTML = `${monthTable[month]} ${day},<br>${year}`
            document.querySelector('.delivery_time .delivery_date').innerHTML = `${parseStr[1]} ${parseStr[0]} - ${parseStr[3]} ${parseStr[2]},<br>${year}`
            document.querySelector('.delivery_time .money_back_date').innerHTML = `${monthTable[daysLag3.getMonth()]} ${daysLag3.getDate()} - ${monthTable[daysLag4.getMonth()]} ${daysLag4.getDate()},<br>${daysLag3.getFullYear()}  `
        }

        let firstStr = document.querySelector('.delivery_date b').innerText

        setDateDelivery(firstStr);

    }
}, 100);



(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1271698,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
hj('trigger', 'pdp_money_back_guarantee');

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp — PDP money back guarantee',
    'eventAction': 'loaded'
});


