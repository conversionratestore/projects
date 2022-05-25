const style = /*html*/`
        <style>
            #main_navbar .col-md-9.col-sm-6 {
                padding-top: 0 !important;
            }

            #cssmenu .menu-wrapper {
                display: flex;
            }

            #nav .parent.has-sub:nth-child(3),
            .header_nav .col-md-12,
            .pull-right {
                display: none;
            }

            #nav nav > .container-fluid > .row {
                display: flex;
                align-items: center;
            }

            #cssmenu [role="search"] {
                width: 250px;
                margin: 2px 6px 0;
            }

            #main_navbar .col-md-9.col-sm-6 {
                padding: 0;
            }

            .navbar .col-md-12:first-child {
                padding-left: 0;
            }

            #cssmenu, #cssmenu #menu-button, #cssmenu ul, #cssmenu ul li, #cssmenu ul li a {
                line-height: 20px !important;
            }

            #cssmenu>ul>li>a {
                padding: 10px !important;
            }

            #cssmenu>ul>li.has-sub>a {
                padding-right: 26px !important;
            }

            #cssmenu>ul>li.has-sub>a:after {
                right: 10px !important;
            }

            #header #cssmenu .search_menu .search_box .txtbox {
                height: 36px !important;
                padding: 5px 65px 5px 25px;
                border-radius: 2px;
            }

            #header #cssmenu .search_menu .search_box button {
                height: 36px !important;
                right: 1px;
            }

            #cssmenu .search_box .fa.fa-search {
                top: 11px;
            }

            .container.header_nav {
                width: 100% !important;
                padding: 0;
                margin: 0;
                z-index: 1 !important;
                background: linear-gradient(180deg, #E9E9E9 0%, #DEDEDE 100%), #D9D9D9;
            }

            .my_navbar {
                max-width: 960px;
                margin: auto;
            }

            .my_navbar ul {
                display: flex;
                justify-content: center;                
                margin: 0;
                padding: 0;
            }

            .my_navbar ul li {
                display: flex;
                align-items: center;
                padding: 7px 17px;
                transition: background-color 0.2s ease-in-out;
                cursor: pointer;
            }
            
            #cssmenu ul li {
                transition: background-color 0.2s ease-in-out;
            }

            .my_navbar ul li:hover {
                background-color: #C0C0C0;
            }

            .my_navbar ul li a {
                display: flex;
                align-items: center;
                gap: 6px;
            }

            .my_navbar ul li span {
                color: #000;
            }

            #header .menu_c {
                border-radius: 2px;
            }
        </style>`

const myListItems = [
    ['Marine', 'https://www.blackoakled.com/collections/marine-led-light-bars', 'marine'],
    ['Night Vision', 'https://www.blackoakled.com/products/extra-new-nitron-xd-marine-night-vision-camera', 'night_vision'],
    ['Vehicle', 'https://www.blackoakled.com/pages/search-by-vehicle', 'vehicle'],
    ['Hunting', 'https://www.blackoakled.com/collections/hunting-led-light-bars', 'hunting'],
    ['ATV/UTV', 'https://www.blackoakled.com/pages/search-by-vehicle?utv=true', 'atv_utv'],
    ['Emergency', 'https://www.blackoakled.com/collections/emergency-response-vehicles', 'emergency'],
    ['Mounting', 'https://www.blackoakled.com/collections/led-light-bar-mounts-2', 'mounting'],
]

const itemsTemplate = item => `
    <li>
        <a href=${item[1]}>
            <img src="https://conversionratestore.github.io/projects/bol/img/${item[2]}.svg" alt="${item[0]}" />
            <span>${item[0]}</span>
        </a>
    </li>`

const myNavbar = `
    <nav class="my_navbar">
        <ul>
            ${myListItems.map(itemsTemplate).join('')}
        </ul>
    </nav>`

document.head.insertAdjacentHTML('beforeend', style)

let waitForStart = setInterval(() => {
    if (document.querySelectorAll('.parent.has-sub')[3] && document.querySelector('#nav .col-md-12.pull-right')) {
        clearInterval(waitForStart)

        document.querySelector('#nav .col-md-12.pull-right').insertAdjacentElement('beforebegin', document.getElementById('cssmenu'))
        document.querySelectorAll('#cssmenu .parent.has-sub')[2].insertAdjacentElement('afterend', document.querySelector('#nav .nav-search form'))

        document.querySelectorAll('#cssmenu .parent.has-sub')[1].querySelector('a').innerText = 'Vehicle'
        document.querySelectorAll('#cssmenu .parent.has-sub')[3].querySelector('a').innerText = 'About Us'
    }
}, 200);

let waitForPlace = setInterval(() => {
    if (document.querySelector('.header_nav')) {
        clearInterval(waitForPlace)

        document.querySelector('.header_nav').insertAdjacentHTML('afterbegin', myNavbar)
    }
}, 200);

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp - PL Navigation v.2',
    'eventAction': 'loaded'
});

let waitForMyList = setInterval(() => {
    if (document.querySelectorAll('.my_navbar li')[6]) {
        clearInterval(waitForMyList)

        document.querySelector('.my_navbar').addEventListener('click', (e) => {
            if (e.target?.closest('li')) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - PL Navigation v.2',
                    'eventAction': 'click on navigation',
                    'eventLabel': e.target.closest('li')?.querySelector('span')?.innerText
                })
            }
        })
    }
}, 200);
