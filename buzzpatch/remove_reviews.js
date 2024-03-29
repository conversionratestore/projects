const style = /*html*/`
    <style>
        .jdgm-histogram__row:nth-child(3) ,
        .jdgm-histogram__row:nth-child(5) {
            cursor: none !important;
            pointer-events: none;
        }

        .jdgm-histogram__row:nth-child(3) .jdgm-histogram__bar-content,        
        .jdgm-histogram__row:nth-child(5) .jdgm-histogram__bar-content {
            width: 0 !important;
        }

        #addToCart + img {
            display: none !important;
        }
    </style>
`

document.head.insertAdjacentHTML('beforeend', style)

const intervalTimeout = 100

const waitForReviewsTxt = setInterval(() => {
    if (document.querySelector('.rev .text')) {
        clearInterval(waitForReviewsTxt)

        document.querySelector('.rev .text').innerText = 'Reviews (233)'
    }
}, intervalTimeout)

const waitForReviewsImg = setInterval(() => {
    if (document.querySelector('#addToCart + img')) {
        clearInterval(waitForReviewsImg)

        document.querySelector('#addToCart + img').insertAdjacentHTML('afterend', `
        <img style="max-width:320px;" data-sizes="auto" data-src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic.png?v=1643853728" data-srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_300x.png 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_600x.png 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_900x.png 900w" class="js-mobile days lazyautosizes lazyloaded" width="100%" sizes="320px" srcset="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_300x.png 300w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_600x.png 600w,
        https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic_900x.png 900w" src="https://cdn.shopify.com/s/files/1/0387/0749/4956/files/30day-graphic.png?v=1643853728">
        `)
    }
}, intervalTimeout)

const waitForReviewsBlock = setInterval(() => {
    if (
        document.querySelector('.jdgm-rev-widg__body')
        && document.querySelector('.jdgm-rev-widg__summary-text')
        && document.querySelectorAll('.jdgm-histogram__percentage')[4]
    ) {
        clearInterval(waitForReviewsBlock)

        // change reviews in the stars row
        const reviewRowIndex = [0, 1, 2, 4]
        reviewRowIndex.forEach(elIndex => {
            let percentage = '0%'
            let frequency = '(0)'

            if (elIndex === 0) {
                percentage = '93%'
            }

            if (elIndex === 1) {
                percentage = '7%'
                frequency = '(2)'
            }

            document.querySelectorAll('.jdgm-histogram__percentage')[elIndex].innerText = percentage
            elIndex !== 0 ? document.querySelectorAll('.jdgm-histogram__frequency')[elIndex].innerText = frequency : null
        });

        // remove reviews
        const target = document.querySelector('.jdgm-rev-widg__body')
        const config = {
            childList: true,
            subtree: true,
        }
        let observer = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                const reviewsId = [
                    'ad38abe4-a6a3-42ba-a9fc-d86a90674df1',
                    '07d007df-e65e-4339-a7d5-1a88da652ad7',
                    '21605032-8557-4651-a717-9306105509f9'
                ]

                if (mutation.target.matches('.jdgm-rev')) {
                    const node = mutation.target

                    reviewsId.forEach(id => {
                        if (node.dataset.reviewId === id) {
                            node.remove()
                        }
                    })
                }
            }
        })
        observer.observe(target, config)

        // change Trustscore
        const target2 = document.querySelector('.jdgm-rev-widg__summary')
        let observer2 = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                for (let node of mutation.addedNodes) {
                    if (!(node instanceof HTMLElement)) continue

                    if (node.matches('div.jdgm-rev-widg__summary-text')) {
                        observer2.disconnect()

                        node.innerText = 'Trustscore 4.93'
                    }
                }
            }
        })
        observer2.observe(target2, config)
    }
}, intervalTimeout)

window.dataLayer = window.dataLayer || []
dataLayer.push({
    'event': 'event-to-ga',
    'eventCategory': 'Exp: Reviews',
    'eventAction': 'loaded',
    'eventLabel': ''
})

const record = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', 'reviews', 'variant_1')
    }
}, intervalTimeout)