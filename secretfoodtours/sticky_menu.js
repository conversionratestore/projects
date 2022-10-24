const crsStyle = /*html*/`
    <style>
        header {
            height: 80px;

            position: fixed;
            top: 0;
            transform: translate(0, -90px);
            left: 0;
            width: 100%;
            z-index: 200;
            background: #fff;
            -webkit-transition: transform .2s linear;
            -moz-transition: transform .2s linear;
            -ms-transition: transform .2s linear;
            -o-transition: transform .2s linear;
            transition: transform .2s linear;

            transform: translate(0px, 0px);
        }
        .destination_page_wr .banner_top {
            padding-top: 60px;
        }
        .crs_menu {
            margin-top: 5px;            
        }
        .fixed_header .crs_menu {
            padding: 0 15px;
        }
        .crs_menu ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .crs_menu a {
            color: #212529;
        }
        .crs_menu a.active_link {
            color: #EB6664;
        }
        .crs_anchor {
            content: '';
            display: block;
            height: 115px;
            margin: -115px 0 0 !important;            
            visibility: hidden;
        }

        .destination_page_wr .tour-intro {
            margin-bottom: 0;
        }
        .similar.mt-150 {
            margin-top: 0;
        }

        .low_price {
            display: flex;
            margin: 30px 0;
        }
        .low_price div:first-child {
            width: 100%;
        }
        .low_price p {
            font-family: 'JosefinSans-Regular', 'Verdana', sans-serif;
        }    
        .low_price .heading {
            font-weight: 700;
            font-size: 20px;
            line-height: 29px;
            color: #134633;
        }
        .low_price .txt {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #212529;
        }
    </style>
`

const menu = /*html*/`
    <nav class="crs_menu">
        <ul>
            <li><a href="#crs_tour">Tour details</a></li>
            <li><a href="#crs_menu">Menu</a></li>
            <li><a href="#crs_spot">Location</a></li>
            <li><a href="#crs_faq">FAQ</a></li>
            <li><a href="#" id="li_other">Other tours</a></li>
        </ul>
    </nav>
`

const anchors = [
    ['what_we_do .main_subheading', 'crs_tour'],
    ['tour-drinks .main_subheading', 'crs_menu'],
    ['meeting_spot .title', 'crs_spot'],
    ['help_center .main_heading', 'crs_faq'],
]

const obsSections = () => {
    // Register IntersectionObserver
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                // Add 'active' class if observation target is inside viewport

                if (entry.target.matches(obsList[0])) {
                    addActiveLink(0)
                }

                if (entry.target.matches(obsList[1])) {
                    addActiveLink(1)
                }

                if (entry.target.matches(obsList[2])) {
                    addActiveLink(2)
                }

                if (entry.target.matches(obsList[3]) || entry.target.matches(obsList[4])) {
                    addActiveLink(3)
                }
            } else {
                document.querySelector('.active_link')?.classList.remove('active_link')
            }
        })
    })

    // Declares what to observe, and observes its properties.
    const obsList = [
        '.what_we_do ul', '.food_wr', '.meeting_spot iframe', '.help_center .container:last-child'
    ]

    const addActiveLink = (index) => {
        document.querySelectorAll('.crs_menu a')[index].classList.add('active_link')
    }

    obsList.forEach((el) => {
        io.observe(document.querySelector(el));
    })
}

const callEvent = (eventAction, eventLabel = '') => { // GO Event
    window.dataLayer = window.dataLayer || []

    const eventObj = {
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Sticky menu experiment',
        eventAction,
        eventLabel
    }

    dataLayer.push(eventObj)
    console.log(eventObj);
}

document.head.insertAdjacentHTML('beforeend', crsStyle)

const intervalTimeout = 100
const waitForDOM = setInterval(() => {
    if (
        (document.readyState == 'interactive' || document.readyState == 'complete')
        && document.querySelector('.main_container header .container')
    ) {
        clearInterval(waitForDOM)

        document.querySelector('.main_container header .container').insertAdjacentHTML('afterend', menu)

        anchors.forEach(element => {
            document.querySelector('.' + element[0]).insertAdjacentHTML('beforebegin', `<p class="crs_anchor" id="${element[1]}"></p>`)
        });


        const waitForMenu = setInterval(() => {
            if (document.querySelector('.crs_menu') && document.getElementById('li_other')) {
                clearInterval(waitForMenu)

                document.querySelector('.crs_menu').addEventListener('click', (e) => {
                    if (e.target.closest('li')) {
                        callEvent('click on menu item — ' + e.target.innerText)
                    }
                })

                document.getElementById('li_other').addEventListener('click', () => document.querySelectorAll('.breadcrumbs ul li a')[1].click())

                obsSections()
            }
        }, intervalTimeout)

        document.querySelector('.similar .container .row').insertAdjacentHTML('afterbegin', /*html*/`
            <div class="low_price">
                <div><img src="https://conversionratestore.github.io/projects/secretfoodtours/img/book_direct.svg" alt="book direct"></div>
                <div>
                    <p class="heading">Lowest price guarantee!</p>
                    <p class="txt">We'll compensate 200% of the difference in price if you find this tour cheaper elsewhere after booking</p>
                </div>
            </div>
        `)
    }
}, intervalTimeout)

callEvent('loaded')
const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', 'sticky_menu_experiment', 'variant_1')
    }
}, intervalTimeout)