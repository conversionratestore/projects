const dir = 'https://conversionratestore.github.io/projects/buzzpatch/img/'
const intervalTimeout = 100

const style = /*html*/`
<style>
.header-shipping .shipping-noti {
    position: relative !important;
    bottom: 0 !important;
}
.js-iphone .js-heading.js-mobile h1 {
    font-size: 40px !important;
    line-height: 48px !important;
}
.js-iphone .js-heading.js-mobile h1 + p {
    display: none;
}
header .rev.trust-rating {
    margin-top: 15px;
}
.my_ul {
    margin-top: 20px;
    z-index: 1;
}
.my_ul li {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px  !important;
    line-height: 24px !important;
    color: #FFFFFF;
    margin-bottom: 8px !important;
    list-style-image: url(${dir}check_arrow_yellow_q.svg);
    padding-left: 7px;
}
.js-mobile.header-shipping {
    position: relative;
}
.js-mobile.header-shipping::after {
    content: '';
position: absolute;
right: 0;
bottom: 0;
background: url(${dir}patches_right_2x.png);
width: 230px;
    background-repeat: no-repeat;
    height: 310px;
    background-size: cover;
}
.js-mobile.header-shipping .get-it {
    z-index: 1;
}
.hand-banner img {
    display: none;
}
header .js-heading .js-btn.btn-primary {
    margin-top: 8px !important;
    margin-bottom: 28px !important;
}

.zero_chemicals {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
}

.zero_chemicals::after {
    content: '';
position: absolute;
right: 0;
bottom: -50px;
background-image: url(${dir}flowers_right.png);
background-repeat: no-repeat;
background-size: cover;
width: 120px;
    height: 180px;

}

.zero_chemicals img {
    width: 60px;
    height: 60px;
    margin-right: 15px;
}

#flowers {
    padding-top: 0 !important;
}

#flowers .zero_chemicals h3 {
font-weight: 700;
font-size: 22px;
line-height: 26px;
color: #0C0B0B;
}

body #flowers .flowers-bg {
    margin-top: -105px;
    overflow: hidden;
}

body #flowers .flowers-bg img {
    margin-bottom: -60px;
    height: 240px;
}

.js-mobile.scientific {
    display: none;
}

.my_science {
    margin-top: -1px;
    background: #F0F3F4;
    padding-bottom: 50px;
}

.my_section {
    padding-top: 0;
}

.my_section .container>div {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}

.my_section .container>div img {
    height: 60px;
    width: 60px;
    margin-right: 15px;
}

.my_section h3 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px !important;
    line-height: 26px !important;
    color: #0C0B0B;
    text-transform: none;
    margin: 0 !important;
}

.my_section  li, .my_section p {
    font-family: 'Roboto',  sans-serif;
    font-weight: 400;
    font-size: 18px !important;
    line-height: 24px !important;
    color: #515151;
    margin-bottom: 15px;
}
.my_wave {
    width: 100%;
}
.gray_wave {
    filter: brightness(0) saturate(100%) invert(99%) sepia(10%) saturate(292%) hue-rotate(168deg) brightness(98%) contrast(95%);
}
.white_wave {
    margin-top: -63px;
}
.js-mobile.effectiveness {
    margin-top: -50px;
}
.js-mobile.effectiveness .container .row:first-child {
    display: none;
}
</style>
`

const ul = /*html*/`
<ul class="my_ul">
    <li>Plant-Powered Bedtime Stickers</li>
    <li>Helps you speed up bedtime naturally</li>
    <li>24 colorful patches per pack</li>
    <li>Ziplock Resealable Bag</li>
    <li style="max-width: 160px;">Sealed Patches Last up to 6 months</li>
    <li style="max-width: 130px;">Goes on clothes, not on skin</li>
</ul>
`

const mySection = /*html*/`
<section class="my_section">
        <img class="gray_wave my_wave" src="${dir}my_wave_gray.svg" alt="">
        <div class="container my_science">
            <div>
                <img src="${dir}microscope_blue.png" alt="">
                <h3>The Science Behind<br>Fuss-Free, Easy Bedtime Routines:</h3>
            </div>

            <ol>
                <li>Studies show that essential oils such as Lavender can improve sleep quality and help you wake up
                    feeling refreshed, focused, and energetic.</li>
                <li>We’ve taken the most <b>calming plant-powered essential oils</b> (such as Lavender and Mandarin) and mixed
                    them into a special formula that helps kids enter a relaxed, calm state, breezing them through their
                    bedtime routine and giving you more “me time” in the evening.</li>
                <li>To avoid overstimulation, we’ve delivered this special formula in the form of patches. Using special
                    nanomaterial, these patches automatically release just enough essential oils to soothe your child,
                    but not too much – otherwise they’ll get overstimulated and irritated. All of this is
                    <b>automatically regulated by our Smart Release nanomaterial stickers.</b> 
                </li>
            </ol>
        </div>
        <img class="my_wave white_wave" src="${dir}my_wave_white.svg" alt="">
        <div class="container">
            <div>
                <img src="${dir}sleeptime_bed.png" alt="">
                <h3>Helps promote an easier and faster bedtime routine:</h3>
            </div>
            <p>
                You’ve probably encountered smells that instantly evoke a strong memory or feeling. Maybe a waft of
                perfume reminds you of your grandmother, or the scent of motor oil takes you back to hanging out with
                your dad in the garage while he worked on his car.</p>
            <p>
                Turns out, our sense of smell is directly wired to the brain’s memory and emotion centers. All your
                other senses, such as sight and hearing, are intercepted by the Thalamus first – but your Smell gets
                direct access to the limbic system, which includes regions like the amygdala and hippocampus. These two
                regions control emotional reactions and memory, and can practically hypnotize even the most fussy
                toddler into relaxed, easy, and fuss-free bedtimes.
            </p>
        </div>
    </section>
`

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
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        })
    })
}

const changeInnerHTML = (el, html) => {
    waitForEl(el).then(el => el.innerHTML = html)
}

document.head.insertAdjacentHTML('beforeend', style)

const init = setInterval(() => {
    if (document.querySelector('.js-heading.js-mobile h1')) {
        clearInterval(init)

        document.querySelector('.js-heading.js-mobile h1').innerHTML = 'Makes Bedtime<br>Routines Fuss Free'

        // waitForEl('.shipping-noti.js-mobile').then((el) => {
        //     document.querySelector('header').insertAdjacentHTML('afterbegin', el)
        // })

        const waitFor30days = setInterval(() => {
            if (document.querySelector('.js-heading.js-mobile.header-shipping') && document.querySelector('.js-mobile .shipping-noti.js-mobile')) {
                clearInterval(waitFor30days)

                document.querySelector('.js-heading.js-mobile.header-shipping').insertAdjacentElement('afterbegin', document.querySelector('.js-mobile .shipping-noti.js-mobile'))
            }
        }, intervalTimeout)

        waitForEl('.rev.trust-rating').then(el => el.insertAdjacentHTML('afterend', ul))

        changeInnerHTML('#flowers .row', /*html*/`
        <div class="zero_chemicals col-sm-12">
            <img src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/Natural_Badge.png?v=1639386860" alt="">
            <h3>0% Chemicals.<br>100% Plant-Based</h3>
        </div>
        `)
        changeInnerHTML('#flowers .row p', 'SleepyPatch uses a specially crafted formulation of plant-sourced essential oils to make bedtimes faster and easier! SleepyPatch is designed to help calm the nervous system, the mind, and stimulate an overall relaxed sensation.')
        changeInnerHTML('#flowers .flowers-bg', `<img src="${dir}flowers_bottom.png">`)

        changeInnerHTML('.active-ing', '<strong>Active Ingredients:</strong><br>Mandarin, Lavender, Sweet<br>Marjoram, Vetiver, Essential Oils.')
        changeInnerHTML('h3.sub-heading', 'The Science Behind<br>Fuss-Free, Easy Bedtime Routines:')

        waitForEl('.js-mobile.scientific').then(el => el.insertAdjacentHTML('afterend', mySection))
    }
}, intervalTimeout)

window.dataLayer = window.dataLayer || []
const obj = {
    event: "event-to-ga",
    eventCategory: "Exp: Text content",
    eventAction: 'loaded'
}
dataLayer.push(obj)
console.log(obj);

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', `new_text_content`, 'variant_1')
    }
}, intervalTimeout)