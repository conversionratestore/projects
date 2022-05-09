const style = /*html*/`
	<style>
			.trust-rating,
            .js-heading.js-mobile .container-fluid {
                display: none;
            }

            .my_list {
                margin: 30px auto 0;                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .my_list li {
                color: #fff;
                font-size: 14px !important;
                list-style-image: url("https://conversionratestore.github.io/projects/buzzpatch/img/disc_blue.svg"); !important;
                margin-bottom: 8px !important;
            }
            
            .my_text p {
                font-size: 14px !important;
                margin: 0;
                line-height: 18px !important;
            }

            .my_text img {
                margin: 4px 0;
            }

            .images {
                display: flex;
                flex-direction: row;
                max-width: 312px;
                margin: 0 auto;
                justify-content: space-between;
                margin-bottom: 45px;
                background: #FFFFFF;
                border-radius: 10px;
                padding: 8px;
            }

            .package .images p {
                font-weight: 400 !important;
                font-size: 12px !important;
                line-height: 16px !important;
                color: #000;
            }

            .images div {
                display: flex;
                flex-direction: row;
                gap: 12px;
            }

            .images div p {
                text-align: left;
            }

            .trust_wrapper {
                display: flex;
                margin-bottom: 25px;
            }

            .my_img {
                margin-left: -25px;
            }

            .my_text {
                margin-top: 50px;
                margin-left: 15px;
            }

            #getNow h2 + p {
                display: none;
            }
	</style>
`

document.head.insertAdjacentHTML('beforeend', style)

let waitForHeading = setInterval(() => {
    if (document.querySelector('.trust-rating')) {
        clearInterval(waitForHeading)

        document.querySelector('.trust-rating').insertAdjacentHTML('afterend', /*html*/`
        <ul class="my_list">
            <li>100% natural content & chemical free</li>
            <li>Scientifically proven to improve sleep</li>
            <li>Safe for kids 2+ years old & adults</li>
            <li>Not addictive. No side effects</li>
        </ul>
        <div>
            <div class="trust_wrapper">
                <div class="my_text">
                    <p>Our customers rate<br>us as <b>Excellent</b></p>
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/stars-trust.svg" alt="stars">
                    <p>Reviews 473</p>
                </div>
                <div class="my_img">
                    <img src="https://conversionratestore.github.io/projects/buzzpatch/img/sleepy_patches.svg" alt="patches">
                </div>
            </div>            
            <button class="btn js-btn btn-primary get-it dark my_btn">get it now!</button>
        </div>
`)
    }
}, 200)

let waitForForm = setInterval(() => {
    if (document.querySelector('#purchase form')) {
        clearInterval(waitForForm)

        document.querySelector('#purchase form').insertAdjacentHTML('beforebegin', /*html*/`
    <div class="images">
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/x24.png" alt="24 patches">
            <p>24 patches<br>in 1 pack</p>
        </div>
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/x1.svg" alt="1 patch">
            <p>Use 1 patch<br>per night</p>
        </div>
    </div>  
`)
    }
}, 200)


let waitForBtn = setInterval(() => {
    if (document.querySelector('.my_btn')) {
        clearInterval(waitForBtn)

        document.querySelector('.my_btn').addEventListener('click', () => {
            document.querySelector('.js-heading .hand-banner a').click()
        })
    }
}, 200)

window.dataLayer = window.dataLayer || [];
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Sleepy patch - select package block A/B test',
    'eventAction': 'loaded'
});

let waitForClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clarity('set', 'Sleepy patch - select package block A/B test', 'variant_1');
    }
}, 200);

