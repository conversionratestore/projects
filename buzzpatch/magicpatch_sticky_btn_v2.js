// -------------------------------------
// CONSTANTS
// -------------------------------------
const WAIT_INTERVAL_TIMEOUT = 100

// Define CSS styles
const style = /*html*/`
    <style>
            .sticky_wrapper {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: #FFFFFF;
                box-shadow: 0px -2px 14px rgba(0, 0, 0, 0.14);
                padding: 10px 20px;
                z-index: 99;
                transition: transform 0.3s ease, opacity 0.3s ease 0.1s;
                transform-origin: bottom;
            }

            .sticky_wrapper.sticky_hidden {
                opacity: 0;
                transform: scaleY(0);
            }

            .sticky_wrapper p {
                margin: 0;
            }

            .packs_selector {
                position: relative;
                cursor: pointer;
            }

            .current_selected_pack {
                position: relative;
                background-color: #fff;
                border: 2px solid #EC4F81;
                border-radius: 31px;
                z-index: 2;
                padding: 8px 20px;
            }

            .pack.active .pack_name,
            .current_selected_pack .pack_name {
                color: #FF3C7F;
            }

            .current_selected_pack svg {
                position: absolute;
                top: 14px;
                right: 16px;
            }

            .visible .current_selected_pack svg {
                transform: rotate(180deg);
            }

            .packs_list {
                position: absolute;
                bottom: calc(100% - 30px);
                left: 0;
                transform-origin: bottom;
                transform: scaleY(0);
                transition: transform 0.3s ease, opacity 0.3s ease 0.1s;
                z-index: 1;
                opacity: 0;
                background-color: #fff;
                border: 2px solid #EC4F81;
                border-bottom: none;
                border-radius: 31px 31px 0 0;
                padding: 6px 0 36px;
                width: 100%;
            }

            .visible .packs_list {
                transform: scaleY(1);
                opacity: 1;
            }

            .packs_list .pack {
                padding: 6px 20px 8px;
            }

            .packs_list .pack:not(.packs_list .pack:first-child) {
                border-top: 1px solid #D9D9D9;
            }

            p.pack_name {
                font-family: 'DINEngschrift LT', 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 18px !important;
                line-height: 110% !important;
                letter-spacing: 0.02em;
                text-transform: uppercase;
                color: #0C0B0B;
                margin-bottom: 4px;
            }

            p.pack_price {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 14px !important;
                line-height: 130% !important;
                color: #6F6F6F;
            }

            .get_now_btn {
                background: #EC4F81;
                box-shadow: 0px 2px 4px rgba(12, 11, 11, 0.1), 0px 24px 60px rgba(12, 11, 11, 0.05), 0px 12px 24px rgba(12, 11, 11, 0.05);
                border-radius: 52px;
                padding: 6px 11px;
                width: 100%;
                margin-left: 10px;
                cursor: pointer;
            }

            .get_now_btn p {
                text-transform: uppercase;
                font-family: 'DIN Condensed', 'Roboto', sans-serif;
                font-weight: 700;
                font-size: 14px !important;
                line-height: 24px !important;
                text-align: center;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: #FFFFFF;
            }

            .get_now_btn span[data-pack-price="current"] {
                font-size: 18px !important;
                line-height: 110% !important;
                letter-spacing: 0.02em;
                font-weight: 400;
            }

            .get_now_btn span[data-pack-price="regular"] {
                text-decoration: line-through;
            }

            /* loader */
            .overlay {
                position: fixed;
                top: 0;
                left: 0;

                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.2);
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
                z-index: -1;
            }

            .overlay.show_overlay {
                z-index: 999;
                opacity: 1;
            }

            .lds-spinner {
                display: inline-block;
                position: relative;
                width: 80px;
                height: 80px;
                transform: scale(1.2);
            }

            .lds-spinner div {
                display: block;
                transform-origin: 40px 40px;
                animation: lds-spinner 0.8s linear infinite;
            }

            .lds-spinner div:after {
                content: " ";
                display: block;
                position: absolute;
                top: 0;
                left: 36px;
                width: 7px;
                height: 21px;
                border-radius: 20%;
                background: #EC4F81;
                border: 1px solid #FFFFFF;
                border-radius: 4px;
            }

            .lds-spinner div:nth-child(1) {
                transform: rotate(0deg);
                animation-delay: -0.7s;
            }

            .lds-spinner div:nth-child(2) {
                transform: rotate(45deg);
                animation-delay: -0.6s;
            }

            .lds-spinner div:nth-child(3) {
                transform: rotate(90deg);
                animation-delay: -0.5s;
            }

            .lds-spinner div:nth-child(4) {
                transform: rotate(135deg);
                animation-delay: -0.4s;
            }

            .lds-spinner div:nth-child(5) {
                transform: rotate(180deg);
                animation-delay: -0.3s;
            }

            .lds-spinner div:nth-child(6) {
                transform: rotate(225deg);
                animation-delay: -0.2s;
            }

            .lds-spinner div:nth-child(7) {
                transform: rotate(270deg);
                animation-delay: -0.1s;
            }

            .lds-spinner div:nth-child(8) {
                transform: rotate(315deg);
                animation-delay: 0s;
            }

            @keyframes lds-spinner {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }
        </style>
    `

// -------------------------------------
// HTML ELEMENTS
// -------------------------------------
const stickyBtns = () => {
    const currentPackFullPrices = document.querySelector('.prices')
    const currPackDiscountPercent = currentPackFullPrices.querySelector('.ps').innerText
    const currPackRegular = currentPackFullPrices.querySelector('.js-strike').innerText
    const currPackPrice = currentPackFullPrices.querySelector('.js-total').innerText.split(' ')[0]

    const [packs, defaultPack] = getPacksInfo()

    let packsHTML = packs.map((pack, index) => `
            <div class="pack${index === 1 ? ' active' : ''}">
                <p class="pack_name">${pack[0]}</p>
                <p class="pack_price">${pack[1]}</p>
            </div>
        `).join('')

    return /*html*/`
            <div class="sticky_wrapper" data-name="sticky">
                <div class="packs_selector">
                    <div class="packs_list">
                        ${packsHTML}        
                    </div>
                    <div class="current_selected_pack">
                        <p class="pack_name">${defaultPack[0]}</p>
                        <p class="pack_price">${defaultPack[1]}</p>
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L6 6L11 1" stroke="#FF3C7F" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="get_now_btn">
                    <p>Get now and save <span data-pack-price="discount">${currPackDiscountPercent}%</span></p>
                    <p>for <span data-pack-price="regular">${currPackRegular}</span> <span data-pack-price="current">${currPackPrice}</span></p>
                </div>
            </div>
            <div class="overlay">                
                <div class="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>                
            </div>
            `
}

// -------------------------------------
// FUNCTIONS
// -------------------------------------
const getPacksInfo = () => {
    const packsInfo = [...document.querySelectorAll('.form-group .js-packs label')].map(label => label.innerText.split('\n'))

    packsInfo.sort((a, b) => parseInt(b[0]) - parseInt(a[0]))

    packsInfo.forEach(info => {
        info[1] = info[1].replace(' Each', '/pack')
    })

    return [packsInfo, packsInfo[1]]
}

const purchaseObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const purchaseH2 = document.querySelector('#purchase h2')
            const purchaseRect = purchaseH2.getBoundingClientRect()
            if (purchaseRect.bottom <= window.innerHeight) {
                document.querySelector('.sticky_wrapper').classList.add('sticky_hidden')
            }
        } else {
            document.querySelector('.sticky_wrapper').classList.remove('sticky_hidden')
        }
    })
}, { threshold: 0 })

const sendGAEvent = (eventAction, eventLabel = '') => { // Send a Google Analytics event
    const eventData = {
        event: 'event-to-ga',
        eventCategory: 'Exp: Magic Patch sticky Get it now',
        eventAction,
        eventLabel,
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)
    console.log(eventData)
}

const convertPackIdToClient = (number) => {
    let clientPackId

    switch (+number) {
        case 0:
            clientPackId = 1
            break
        case 1:
            clientPackId = 0
            break
        case 2:
            clientPackId = 2
            break
        case 3:
            clientPackId = 3
            break
        default:
            break
    }

    return clientPackId
}

const handlePackClickEvent = (e) => {
    const packsList = document.querySelector('.packs_list')
    const packIndex = [...packsList.querySelectorAll('.pack')].findIndex(pack => pack.contains(e.target))

    if (packIndex >= 0) {
        sendGAEvent(`Selected ${document.querySelectorAll('.pack')[packIndex].querySelector('.pack_name').innerText.toLowerCase()} option`)
    }
}

const handleClicks = () => {
    const currentSelectedPack = document.querySelector('.current_selected_pack')
    const packsSelector = document.querySelector('.packs_selector')
    const packsList = document.querySelector('.packs_list')

    currentSelectedPack.addEventListener('click', () => {
        packsSelector.classList.toggle('visible')
        sendGAEvent('Click on Package select drop-down')
    })

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.packs_selector')) {
            // If the packs_list element is visible, hide it
            if (packsSelector.classList.contains('visible')) {
                packsSelector.classList.remove('visible')
            }
        }
    })

    // Add click event listener to each pack element
    const packElements = document.querySelectorAll('.pack')
    packElements.forEach((packElement, index) => {
        packElement.addEventListener('click', () => {
            // Change price in the get now btn 
            document.querySelectorAll('.js-packs input[type="radio"]')[convertPackIdToClient(index)].click()
            document.querySelectorAll('.js-packs input[type="radio"]')[convertPackIdToClient(index)].checked = true

            setTimeout(() => {
                document.querySelector('.get_now_btn [data-pack-price="discount"]').innerText = document.querySelector('.prices .ps').innerText + '%'
                document.querySelector('.get_now_btn [data-pack-price="regular"]').innerText = document.querySelector('.prices .js-strike').innerText
                document.querySelector('.get_now_btn [data-pack-price="current"]').innerText = document.querySelector('.prices .js-total').innerText.split(' ')[0]
            }, 500)

            // Get the pack name and price
            const packName = packElement.querySelector('.pack_name').textContent
            const packPrice = packElement.querySelector('.pack_price').textContent

            // Update the current selected pack element with the new values
            currentSelectedPack.querySelector('.pack_name').textContent = packName
            currentSelectedPack.querySelector('.pack_price').textContent = packPrice

            // Hide the packs_list element
            packsSelector.classList.remove('visible')

            // update active pack
            document.querySelector('.pack.active').classList.remove('active')

            packElement.classList.add('active')
        })
    })

    // Send event by clicking on pack
    packsList.addEventListener('click', handlePackClickEvent)

    // Add click event listener to Get now btn
    document.querySelector('.get_now_btn').addEventListener('click', () => {
        document.getElementById('addToCart').click()
        document.querySelector('.overlay').classList.add('show_overlay')
        sendGAEvent('Click on CTA button', document.querySelector('.pack.active .pack_name').innerText.toLowerCase())
    })

    // Add change event listener to PDP packs and change my packs accordingly
    document.querySelector('.form-group').addEventListener('change', (e) => {
        const pdpPackId = e.target.id.split('-')[1]

        packsList.removeEventListener('click', handlePackClickEvent)

        document.querySelectorAll('.pack')[convertPackIdToClient(pdpPackId)].click()

        packsList.addEventListener('click', handlePackClickEvent)
    })
}

// -------------------------------------
// MAKE DOM CHANGES
// -------------------------------------
document.head.insertAdjacentHTML('beforeend', style)

// Hide the loader when the page is shown
window.addEventListener("pageshow", function (event) {
    // Check if the page is being shown due to navigation from the second page
    if (event.persisted) {
        // Hide the loader if the user has returned from page 2
        const waitForLoader = setInterval(() => {
            if (document.querySelector('.overlay')) {
                clearInterval(waitForLoader)

                if (document.querySelector('.overlay.show_overlay')) {
                    document.querySelector('.overlay').classList.remove('show_overlay')
                }
            }
        }, WAIT_INTERVAL_TIMEOUT)
    }
})

const waitForLastPack = setInterval(() => {
    if (document.querySelectorAll('.form-group .js-packs label span')[3] && document.querySelector('.prices .js-strike')) {
        clearInterval(waitForLastPack)

        document.body.insertAdjacentHTML('beforeend', stickyBtns())

        const waitForStickyPacks = setInterval(() => {
            if (document.querySelectorAll('.pack')[3]) {
                clearInterval(waitForStickyPacks)

                handleClicks()

                purchaseObserver.observe(document.querySelector('#purchase'))

                document.addEventListener('scroll', () => {
                    const purchaseH2 = document.querySelector('#purchase h2')
                    const purchaseRect = purchaseH2.getBoundingClientRect()
                    if (purchaseRect.bottom <= window.innerHeight) {
                        document.querySelector('.sticky_wrapper').classList.add('sticky_hidden')
                    } else {
                        document.querySelector('.sticky_wrapper').classList.remove('sticky_hidden')
                    }
                })
            }
        }, WAIT_INTERVAL_TIMEOUT)
    }
}, WAIT_INTERVAL_TIMEOUT)

// GA loaded and Clarity
sendGAEvent('loaded')

const recordClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(recordClarity)
        clarity('set', `emphasize_signing_doc_free`, 'variant_1')
    }
}, WAIT_INTERVAL_TIMEOUT)