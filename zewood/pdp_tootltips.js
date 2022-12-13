/** Variables */
const imgFolderUrl = 'https://conversionratestore.github.io/projects/zewood/img/'

let device = 'Desktop'

if (window.innerWidth <= 768) {
    device = 'Mobile'
}

const style = /*html*/`
    <style>
        .product__photos {
            display: none;
        }

        /* My Slider */
        .my_slider .slider_nav {
            max-width: 90%;
            margin: 0 auto;
        }

        .my_slider .slider_nav .slick-slide {
            margin: 10px;
            padding: 2px;
        }

        .my_slider .slick-prev {
            left: -35px;
        }

        .my_slider .slick-next {
            right: -35px;
        }

        .my_slider .slick-prev:before,
        .my_slider .slick-next:before {
            content: url(${imgFolderUrl}arrow_right.svg);
            width: 20px;
            height: 11px;
        }

        .my_slider .slick-prev {
            transform: rotate(180deg);
        }

        .my_slider .slick-track {
            display: flex !important;
        }

        .my_slider .slick-slide {
            height: inherit !important;
        }

        .my_slider .slick-slide {
            margin-bottom: 0;
            object-fit: cover;
        }

        .my_slider .slick-slide img {
            height: 100%;
        }

        .my_slider .slider_nav .slick-slide {
            opacity: 0.5;
        }

        .my_slider .slider_nav .slick-slide.slick-current {
            opacity: 1;
            outline: 2px solid #000;
        }

        .my_slider .slider_for,
        .my_slider .slider_nav {
            display: none;
        }

        .my_slider .slider_for.slick-initialized,
        .my_slider .slider_nav.slick-initialized {
            display: block;
        }

        /* crafted */
        .crafted {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 28px;
            padding: 16px;
            background: #E8E8E0;
        }

        .crafted>div {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .crafted p,
        .crafted span {
            margin: 0;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #000000;
        }

        .info_img {
            margin: 0 !important;
        }

        .crafted .info_img {
            width: 12px;
            height: 12px;
        }

        .crafted img {
            margin-right: 6px;
        }

        .crafted .line {
            width: 1px;
            background: #fff;
            margin: 0 10px;
        }

        /* Tooltip */

        .tippy-arrow {
            color: #fff;
        }

        .tippy-content {
            padding: 0;
            min-width: 300px;
        }

        .tippy-box {
            background: #fff;
            padding: 16px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 2px 15px rgba(0, 0, 0, 0.2);
            border-radius: 0;
        }

        .tippy-content ul {
            margin-left: 20px;
        }

        .tippy-content ul li,
        .tippy-content p {
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #000000;
            margin: 0;
        }

        /* Customers say */
        .customers_say {
            padding: 16px;
            background: #E8E8E0;
        }

        .customers_say_title+div {
            margin-bottom: 19px;
        }

        p.customers_say_title {
            font-weight: 600;
            margin-bottom: 8px;
        }

        p.customers_say_txt {
            font-weight: 600;
        }

        p.customers_say_author {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 4px;
        }

        .customers_say_author img {
            margin-left: 8px;
        }

        /* Difference */

        .variant-wrapper {
            position: relative;
        }

        .variant-wrapper .difference {
            position: absolute;
            right: 0;
            top: 0;
            font-weight: 500;
            font-size: 14px;
            overflow: visible;
        }

        .difference_title {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            color: #000000;
        }

        .gif_wrapper img {
            max-width: 184px;
            max-height: 184px;
        }

        .gif_wrapper {
            padding: 10px;
            background: #E8E8E0;
            text-align: center;
            margin-bottom: 16px;
        }

        .depth_ul {
            margin-bottom: 0;
        }
        .depth_ul li:first-child {
            margin-bottom: 16px;
        }


        /* My options */

        .my_options {
            padding: 22px;
            background: #E8E8E0;
            margin-bottom: 50px;
        }

        .my_options p, .my_options span {
            margin: 0;
            font-size: 16px;
            line-height: 24px;
            color: #000000;
        }

        .my_options img {
            margin-right: 16px;
        }

        .my_options > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 24px;
        }

        .my_options > div:last-child {
            margin-bottom: 0 !important;
        }

        .payment-buttons + .text-center {
            display: none;
        }

        .product-single__description h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            display: flex;
            align-items: center;
            color: #000000;
        }

        .product-single__description h3,
        .product-single__description h3 + p {
            display: none;
        }

        .delivery_ul {
            margin-top: 10px;
            margin-bottom: 0;
        }

        .delivery_ul li:not(li:last-child) {
            margin-bottom: 10px;
        }

        .my_slider_wrapper {
            position: relative;
        }

        .my_slider_wrapper .slider_tape {
            position: absolute;
            left: 0;
            top: 18px;
            background: url(${imgFolderUrl}tape.svg);
            background-size: cover;
            background-repeat: no-repeat;
            z-index: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 6px 20px 6px 10px;
            min-height: 43px;
        }

        .slider_tape p {
            margin: 0;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
            color: #FFFFFF;
        }

        .slider_tape img {
            margin-right: 6px;
        }

        .my_bolder {
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #000000;
            font-weight: 700;        
            font-size: 24px;
            line-height: 32px;   
            margin-bottom: 20px;
        }

        @media only screen and (min-width: 590px) {
            .grid {
                display: flex;
            }
            .grid__item {
                float: none;
            }
            .grid .grid__item:first-child {
                position: sticky;
                top: 25px;
                height: 100%;
            }
            fieldset[name=Size] {
                flex-wrap: wrap;
            }
        }

        @media only screen and (max-width: 886px) and (min-width: 590px)  {
            .crafted>div {
                flex-wrap: wrap;
            }
        }

        @media only screen and (max-width: 589px) {
            .my_bolder {
                font-size: 20px;
                line-height: 25px;
            }
            .my_slider .slider_nav .slick-slide {
                margin-right: 4px;
                margin-left: 4px;
            }
            .my_options {
                margin-bottom: 40px;
            }
            .my_options > div {
                margin-bottom: 18px;          
            }

            .crafted {
                padding: 16px 10px;
            }

            fieldset[name=Size] label {
                padding: 7px 10px;
            }
        }
    </style>
`
const intervalTimeout = 100

/* load tooltip*/
const scriptCustom = document.createElement("script")
scriptCustom.src = "https://unpkg.com/@popperjs/core@2"
scriptCustom.async = false
document.head.appendChild(scriptCustom)

const scriptCustom1 = document.createElement("script")
scriptCustom1.src = "https://unpkg.com/tippy.js@6"
scriptCustom1.async = false
document.head.appendChild(scriptCustom1)

/** Functions */
const waitForEl = selector => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }

            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (!(node instanceof HTMLElement)) continue;

                    if (node.matches(selector)) {
                        resolve(document.querySelector(selector));
                        observer.disconnect();
                    }
                }
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
};

const initSlider = () => {
    const sliderSmallImgs = []
    const sliderBigImgs = []

    document.querySelectorAll('.product__photos .product__thumb-item img').forEach(img => {
        if (img.srcset) {
            sliderSmallImgs.push(img.srcset.split('360w')[0])
            sliderBigImgs.push(img.srcset.split('900w, ')[1].replace(' 1080w', ''))
        }
    })

    const slider = /*html*/`
    <div class="my_slider_wrapper">     
        <div class="slider_tape">
            <img src="${imgFolderUrl}gift.svg" alt="gift">
            <p>The perfect gift for a loved one</p>
        </div>        
        <div class="my_slider">         
                <div class="slider_for">                
                    ${sliderBigImgs.map((imgSrc, index) => `<div><img src="${imgSrc}" alt="slider image #${index}"></div>`).join('')}                
                </div>
                <div class="slider_nav">
                    ${sliderBigImgs.map((imgSrc, index) => `<div><img src="${imgSrc}" alt="slider image #${index}"></div>`).join('')}
                </div>                
        </div>
    </div>
    `

    document.querySelector('.grid__item.medium-up--one-half').insertAdjacentHTML('afterbegin', slider)

    const sliderInterval = setInterval(() => {
        if (
            document.querySelectorAll('.my_slider .slider_for img')[sliderBigImgs.length - 1]
            && document.querySelectorAll('.my_slider .slider_nav img')[sliderBigImgs.length - 1]
        ) {
            clearInterval(sliderInterval)

            $('.my_slider .slider_for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.my_slider .slider_nav',
                infinite: false,
            });
            $('.my_slider .slider_nav').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.my_slider .slider_for',
                dots: false,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: 0,
                // infinite: false,
            });

            $('.my_slider .slider_for').on('afterChange', function () {
                callEvent('change slide')
            });
        }
    }, intervalTimeout)
}

const callEvent = (eventAction, eventLabel = '') => { // GO Event
    window.dataLayer = window.dataLayer || []

    const obj = {
        'event': 'event-to-ga',
        'eventCategory': `Exp: PDP improvements. ${device}`,
        eventAction,
        eventLabel
    }

    dataLayer.push(obj)
    console.log(obj);
}

/* HTML elements */
const crafted = /*html*/`
<div class="crafted">
    <div>
        <img src="${imgFolderUrl}certificate.svg" alt="certificate">
        <div style="line-height: 18px;">
            <span>Every map crafted to perfection</span>            
            <img class="info_img" src="${imgFolderUrl}info.svg" alt="info" data-event="Every map crafted to perfection" id="perfection_tooltip">
        </div>
    </div>
    <div class="line"></div>
    <div>
        <img src="${imgFolderUrl}ukraine.svg" alt="ukraine">
        <p>Handcrafted in Ukraine</p>
    </div>
</div>
`
const craftedTooltip = /*html*/`
<ul>
    <li>All our products are crafted from high-quality 100% natural materials</li>
    <li>We handcraft every map down to the finest detail</li>
</ul>
<div class="customers_say">
    <p class="customers_say_title">OUR CUSTOMERS SAY:</p>
    <div>
        <p class="customers_say_txt">“Beautifully detailed and built, it's a very solid piece of art. Very well packaged for delivery,
            arrived in perfect condition. I will be back for another map soon!”</p>
        <p class="customers_say_author">
            Peter
            <img src="${imgFolderUrl}stars.svg" alt="stars">
        </p>
    </div>
    <div>
        <p class="customers_say_txt">”Absolutely amazing detail! And it smells so good”</p>
        <p class="customers_say_author">
            Nicole
            <img src="${imgFolderUrl}stars.svg" alt="stars">
        </p>
    </div>
</div>
`
const difference = /*html*/`
    <div class="difference">
        <span class="difference_title">What’s the difference</span>
        <img class="info_img" src="${imgFolderUrl}info.svg" alt="info" data-event="What’s the difference" id="difference_tooltip">        
    </div>
`

const differenceTooltip = `
<div class="gif_wrapper">
    <img src="https://cdn.shopify.com/s/files/1/0269/8510/3430/files/ezgif.com-gif-maker_4_480x480.gif?v=1621258789"
        alt="Depth & Landforms">
</div>
<ul class="depth_ul">
    <li>
        <b>Depth:</b> the top layer is an engraving. The depth of the sea goes down several layers. The
        map
        consists of 6 layers. You get a map with a frame and plexiglass.
    </li>
    <li>
        <b>Depth + Landforms:</b> includes everything from the “depth” option and some 3D elements of
        the mountains,
        forest, architectural structures etc. Made in
        a separate layer to highlight the relief.
    </li>
</ul>
`

const myOptions = /*html*/`
<div class="my_options">
        <div>
            <img src="${imgFolderUrl}shield.svg" alt="shield">
            <div>
                <span><b>3-year warranty</b></span>
                    <img class="info_img" src="${imgFolderUrl}info.svg" alt="info" data-event="3-year warranty" id="warranty_tooltip">
            </div>            
        </div>
        <div>
            <img src="${imgFolderUrl}box.svg" alt="box">
            <div>
                <span><b>Free</b> International Express <b>shipping</b></span>                
                <img class="info_img" src="${imgFolderUrl}info.svg" alt="info" data-event="Free International Express shipping" id="delivery_tooltip">
            </div>           
        </div>
        <div>
            <img src="${imgFolderUrl}earth-globe.svg" alt="earth-globe">
            <p><b>Unique design</b> (Artistically handcrafted to the finest detail)</p>
        </div>
        <div>
            <img src="${imgFolderUrl}floor.svg" alt="floor">
            <p><b>Handmade from natural birch plywood</b> (For strength, texture & a mellow woody fragrance)</p>
        </div>
        <div>
            <img src="${imgFolderUrl}checked.svg" alt="checked">
            <p><b>Ready to hang.</b> Frame & plexiglass included</p>
        </div>
    </div>`


const warrantyTooltip = `
<p>Our products are covered by a three-year warranty from day of purchase. We do our best to
guarantee customer satisfaction. So if you have any problems with our product, we'll repair or
replace it for free. Please <a href="https://zewood.co/pages/contact" target="_blank">get in
    touch</a> if you have any questions regarding your warranty.</p>
`

const deliveryTooltip = `
<p>All our maps our handmade and made-to-order. Products dispatched typically 5-9 business days after receipt of payment for order.</p>
<p>Delivery times vary according to shipping country. For Express Shipping, we typically use UPS, DPD, and DHL, delivery times below:</p>
<ul class="delivery_ul">
    <li>DHL 5-7 business days</li>
    <li>UPS 5-10 business days</li>
    <li>DPD 7-10 business days</li>
</ul>
`
/** Parse HTML, CSS and run functions. */

document.head.insertAdjacentHTML('beforeend', style)

const waitForTooltips = setInterval(() => {
    if (
        typeof tippy === 'function'
        && document.getElementById('perfection_tooltip')
        && document.getElementById('warranty_tooltip')
        && document.getElementById('delivery_tooltip')
    ) {
        clearInterval(waitForTooltips)

        const instances = ['#perfection_tooltip', '#warranty_tooltip', '#delivery_tooltip']

        instances.forEach(tooltip => {
            tippy(tooltip, {
                content: craftedTooltip,
                allowHTML: true,
                placement: 'bottom',
                interactive: true,
                // hideOnClick: false,
                // trigger: 'click'
                onShow(instance) {
                    callEvent('hover on tooltip — ' + instance.reference.dataset.event)
                }
            });
        })
    }
}, intervalTimeout)

window.onload = () => {
    initSlider()

    document.querySelector('[itemprop="offers"] hr').insertAdjacentHTML('beforebegin', crafted)

    // https://zewood.co/collections/frontpage/products/3d-middle-earth-wood-map
    if (document.querySelectorAll('[name="Option"] label')[1]?.innerText?.includes('Landforms')) {
        document.querySelector('[name="Option"]').insertAdjacentHTML('beforebegin', difference)

        const waitForTooltip = setInterval(() => {
            if (typeof tippy === 'function' && document.getElementById('difference_tooltip')) {
                clearInterval(waitForTooltip)

                tippy('#difference_tooltip', {
                    content: differenceTooltip,
                    allowHTML: true,
                    placement: 'top-end',
                    interactive: true,
                    onShow(instance) {
                        callEvent('hover on tooltip — ' + instance.reference.dataset.event)
                    }
                });
            }
        }, intervalTimeout)
    }

    document.querySelector('.product-single__description').insertAdjacentHTML('beforebegin', myOptions)

    const waitForOptions = setInterval(() => {
        if (document.querySelector('.my_options')) {
            clearInterval(waitForOptions)

            if (document.querySelector('.product-single__description > h3:first-child')) {
                document.querySelector('.my_options').insertAdjacentHTML('afterend', `<p class="my_bolder">${document.querySelector('.product-single__description > h3:first-child').innerText.replace('\n', '')}</p>`)
            }
        }
    }, intervalTimeout)

    document.querySelectorAll('.product-single__description strong').forEach((title, index) => {
        console.log(title.innerText, index);

        let titleTxt = title.innerText.toLowerCase()
        if (
            titleTxt.includes('map features')
            || titleTxt.includes('coloring')
            || titleTxt.includes('sizes')
        ) {
            console.log(title);
            title.classList.add('my_bolder')
        }
    })
}

// const waitForDOM = setInterval(() => {
//     if (document.readyState == 'complete') {
//         clearInterval(waitForDOM)


//     }
// }, intervalTimeout)

callEvent('loaded')

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `pdp_improvements_${device.toLowerCase()}`, 'variant_1')
    }
}, intervalTimeout)