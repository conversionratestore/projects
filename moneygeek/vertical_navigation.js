const style = /* html */`
    <style>
        html {
            overflow: unset !important;
        }
        body {
            overflow-x: unset !important;
        }

        header .chakra-popover__popper {
            transform: unset !important;
            inset: unset !important;
            top: 100% !important;
        }

        header .css-86e6ef .css-1ov3s65:first-child .chakra-popover__popper {
            right: -400px !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(2) .chakra-popover__popper {
            right: -200% !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(3) .chakra-popover__popper {
            right: -305px !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(4) .chakra-popover__popper {
            right: -50% !important;
        }

        header .css-86e6ef .css-1ov3s65:nth-child(5) .chakra-popover__popper {
            right: -70px !important;
        }

        #stickywidgetdiv {
            position: unset;
            box-shadow: none;
            border-radius: 0;
            margin-top: 20px;
        }

        #stickywidgetdiv> div {
            background: #EFEFF1
        }

        #sub-navigation {
            height: auto;
        }

        .vertical_nav_wrapper {
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.16);
            border-radius: 6px;
            overflow: hidden;
            position: relative;
        }

        #LayoutSidebarContainer {
            display: flex;
            column-gap: 30px;
            align-items: stretch;
        }

        .vertical_nav_wrapper h6 {
            padding: 20px;
            border-top: 4px solid #526EFF;
            line-height: 26px;
            font-size: 22px;
            font-weight: 700;
        }

        #menu-list {
            overflow: auto;
            max-height: 395px;
            position: relative;
        }

        #menu-list::-webkit-scrollbar {
            width: 3px;
        }

        #menu-list::-webkit-scrollbar-track {
            background-color: #EFEFF1;
        }
        
        #menu-list::-webkit-scrollbar-thumb {
            background-color: #5474F6;
        }

        #menu-list a {
            color: #888888;
            line-height: 26px;
            padding: 6px 16px;
        }

        .vertical_nav_wrapper.top-g::before {
            content: '';
            display: block;
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
            z-index: 1;
        }

        .vertical_nav_wrapper.bottom-g::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
        }

        #menu-list a.is-active {
            color: #5474F6;
            background: linear-gradient(90deg, #E4E8FB 0%, #FFFFFF 100%);
        }

        #LayoutSidebarContainer .site-navigation {
            flex-shrink: 0;
        }

        #LayoutSidebarContainer .site-navigation .spacing {
            height: 100%;
            padding-bottom: 20px;
        }

        #LayoutSidebarContainer .site-navigation .social {
            text-align: center;
        }

        #sub-navigation .css-1hc3y9a {
            display: none;
        }

        #sub-navigation.is-sticky {
            position: sticky !important;
            height: auto;
        }

    </style>
`

let v1 = new IntersectionObserver(entries => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            setTimeout(function () {
                v2.observe(item.target)
            },1000)
        }
    })
})

let v2 = new IntersectionObserver(entries => {
    entries.forEach(item => {
        if(item.isIntersecting) {
            pushDataLayer('Visibility of the side menu list.')
            v1.unobserve(item.target)
        }
        v2.unobserve(item.target)
    })
})

start()

function start () {

    document.body.insertAdjacentHTML('afterbegin', style)

    experiment()
    scroll()

    v1.observe(document.querySelector('#menu-list'))

    pushDataLayer('loaded')
    let record = setInterval(function () {
        if (typeof clarity === 'function') {
            clearInterval(record)
            clarity("set", "vertical_scroll_nav", "variant 1");
        }
    }, 100)
    
}

function pushDataLayer(action, label = '') {
    console.log(action, label)
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Vertical scroll navigation',
        'eventAction': action,
        'eventLabel': label
    })
}



function experiment () {
    if (document.querySelector('#stickywidgetdiv')) {
        document.querySelector('#menu-list').after(document.querySelector('#stickywidgetdiv'))
    }
    document.querySelector('#sub-navigation').insertAdjacentHTML('afterbegin', `<div class='vertical_nav_wrapper'></div>`)
    document.querySelector('.vertical_nav_wrapper').append(document.querySelector('#sub-navigation h6'))
    document.querySelector('.vertical_nav_wrapper').append(document.querySelector('#menu-list'))
    document.querySelectorAll('#menu-list li').forEach(item => {
        item.addEventListener('click', function() {
            pushDataLayer('Click on the menu item', item.querySelector('a').innerText)
        })
    })

    const mut = new MutationObserver((muts) => {
        scroll()
    })
    
    mut.observe(document.querySelector('#menu-list'), {
        subtree: true,
        childList: true,
        attributes: true
    })
}

function scroll () {
    const wrapper = document.querySelector('.vertical_nav_wrapper')
    const list = document.querySelector('#menu-list')
    const item = document.querySelector('#menu-list .is-active')
    const step = +document.querySelector('#menu-list li').clientHeight
    list.scrollTo(0, (item.offsetTop + (step / 2) - (list.clientHeight / 2)))
    const dif = list.scrollHeight - list.clientHeight
    if(list.scrollTop > 0) {
        wrapper.classList.add('top-g')
    } else {
        wrapper.classList.remove('top-g')
    }

    if(list.scrollTop < dif) {
        wrapper.classList.add('bottom-g')
    } else {
        wrapper.classList.remove('bottom-g')
    }
} 

