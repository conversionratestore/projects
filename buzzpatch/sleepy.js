const style = /*html*/`
	<style>
			.trust-rating,
            .js-heading.js-mobile .container-fluid {
                display: none;
            }

            .my_list {
                margin: 0;
                margin-left: 10%;
                padding: 0;
                margin-top: 50px;
            }

            .my_text {
                margin-left: 7%;
                margin-top: 13%;
            }

            .my_list li {
                color: #fff;
                font-size: 16px !important;
                list-style-type: disc !important;
                margin-bottom: 12px !important;
            }

            .my_text p {
                font-size: 12px !important;
                margin: 0;
                line-height: 16px !important;
            }

            .my_text img {
                margin: 8px 0;
            }

            .trust_wrapper {
                display: flex;
            }

            .my_img {
                margin: 0 6%;
            }

            .images {
                display: flex;
                flex-direction: row;
                max-width: 275px;
                margin: 0 auto;
                justify-content: space-between;
                margin-bottom: 50px;
            }

            .package .images p {
                font-weight: 400 !important;
                font-size: 12px !important;
                line-height: 16px !important;
            }

            .images div {
                display: flex;
                flex-direction: row;
                gap: 12px;
            }

            .images div p {
                text-align: left;
            }
	</style>
`

document.head.insertAdjacentHTML('beforeend', style)

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

document.querySelector('#purchase form').insertAdjacentHTML('beforebegin', /*html*/`
    <div class="images">
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/x24.svg" alt="24 patches">
            <p>24 patches<br>in 1 pack</p>
        </div>
        <div>
            <img src="https://conversionratestore.github.io/projects/buzzpatch/img/x1.svg" alt="1 patch">
            <p>Use 1 patch<br>per night</p>
        </div>
    </div>  
`)

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

