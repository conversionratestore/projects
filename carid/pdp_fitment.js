/** Initialization */

/* shorthands */
const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const getId = document.getElementById.bind(document)

const intervalTimeout = 200

const imgFolderUrl = 'https://conversionratestore.github.io/projects/carid/img/'

const style = /*html*/`
        <style>
            /* PDP */

            .prod_vehicle {
                padding-top: 0;
                display: flex;
                align-items: center;
            }

            .fit_unselect_car p {
                font-weight: 400;
                font-size: 18px;
                color: #000;
                margin: 0;
                line-height: normal;
            }

            .fit_unselect_car p:last-child {
                margin-top: 5px;
                font-size: 12px;
            }

            .fit_unselect_car span,
            .js-product-options-link {
                color: #3E61BC;
                text-decoration: underline;   
                font-weight: 700;    
                cursor: pointer;     
            }

            .js-product-options-link {
                font-weight: 400;     
                font-size: 12px;    
            }

            #prodRightSide .prod_vehicle {
                display: none;
            }

            /* Popup */

            .po_header {
                text-transform: initial !important;
                padding-bottom: 10px !important;
            }

            .po_header .header {
                font-weight: 700;
                font-size: 32px;
                color: #FFFFFF;
            }

            .po_header .subheader {
                font-weight: 300;
                font-size: 14px;
                color: #FFFFFF;
            }

            .fit_car {
                position: absolute;
                top: 18px;
                right: 22px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .fit_car.pdp {
                position: relative;
                top: auto;
                right: auto;
            }

            .fit_unselect_car[hidden],
            .fit_car[hidden],
            .prod_vehicle[hidden] {
                display: none;
            }

            .fit_car div:first-child { 
                display: flex; 
                margin-right: 9px;
            }

            .fit_car p {
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                color: #000000;
                margin: 0;
            }

            .fit_car p:last-child {
                font-weight: 500;
            }

            .fit_car.pdp div:first-child {
                margin-right: 14px;
            }

            .fit_car.pdp img {
                height: 36px;
                width: 36px;
            }

            .fit_car.pdp p {
                font-size: 14px;
                line-height: 17px;
            }

            .fit_car.pdp span {
                color: #3E61BC;
                font-weight: 600;
                font-size: 12px;
                cursor: pointer;
            }

            #child_products_tbl .po_prod:first-child .po_prod_sku {
                padding-top: 40px;
            }
        </style>
    `

const changeCar = () => {
    getId('selectBtnReact').click()

    const waitForHeader = setInterval(() => {
        setTimeout(() => {
            if (query('.po_header')) {
                clearInterval(waitForHeader)

                if (!query('.po_header').innerText.toLowerCase().includes('select')) {
                    const waitForChangeBtn = setInterval(() => {
                        if (query('.-po-change-vehicle')) {
                            clearInterval(waitForChangeBtn)

                            query('#child_products_tbl .fit_car')?.remove()
                            query('.-po-change-vehicle').click()
                        }
                    }, intervalTimeout)

                    const waitForHeaderAgain = setInterval(() => {
                        if (query('.po_header')) {
                            clearInterval(waitForHeaderAgain)

                            const header = /*html*/`
                            <p class="header">SELECT YOUR VEHICLE</p>
                            <p class="subheader">Get the perfect fit & an accurate price quote</p>`

                            query('.po_header').innerHTML = header
                        }
                    }, intervalTimeout)
                } else {
                    const header = /*html*/`
                    <p class="header">SELECT YOUR VEHICLE</p>
                    <p class="subheader">Get the perfect fit & an accurate price quote</p>`

                    query('.po_header').innerHTML = header
                }
            }
        }, 500);
    }, intervalTimeout)
}

/**
* Return the Fit Block HTML with or without selected Car model
* @param {string} carModel - the Model of the selected Car.
* @param {boolean} [isPDP = true] - Is it a PDP?
* @param {boolean} [isUpsale = false] - Is it a Upsale?
* @param {boolean} [isChangeBtn = true] - Is it Btn?
*/
const addFitChangePDP = (params) => { // replace vehicle with a Fit block on the PDP
    let carModel = params.carModel
    let isPDP = params.hasOwnProperty('isPDP') ? params.isPDP : true;
    let isUpsale = params.hasOwnProperty('isUpsale') ? params.isUpsale : 'false';
    let isChangeBtn = params.hasOwnProperty('isChangeBtn') ? params.isChangeBtn : true;

    const fitToBlock = /*html*/` 
        <div class="fit_car${isPDP ? ' pdp' : ''}">
            <div><img src="${imgFolderUrl}check-circle.svg" alt="check"></div>
            <div>
                <p>Guaranteed fit to</p>
                <p>${carModel} ${isChangeBtn ? `<span>change</span>` : ''}</p>                         
            </div>
        </div>
    `

    if (isPDP) {
        if (!query('.fit_car.pdp')) {
            query('.fit_unselect_car') ? query('.fit_unselect_car').hidden = true : null

            query('#prodRightSide .prod_verify_vehicle').insertAdjacentHTML('afterbegin', fitToBlock)

            const waitForChangeBtn = setInterval(() => { // open the Popup by clicking on the change button
                if (query('.fit_car.pdp span')) {
                    clearInterval(waitForChangeBtn)

                    query('.fit_car.pdp span').addEventListener('click', () => {
                        changeCar()
                        callEvent('Change', 'Guaranteed fitment')
                    })
                }
            }, intervalTimeout)
        }
    } else {
        query('.po_prod').insertAdjacentHTML('afterbegin', fitToBlock)
    }

    isUpsale ? localStorage.setItem('upsale', 'true') : localStorage.setItem('upsale', 'false')
}

const drawPdpFit = () => { // add a Fit block to the PDP
    const selectedCarModel = JSON.parse(localStorage.garageData).current
    // const selectedCarModel = localStorage.getItem('car')
    const selectedProduct = localStorage.getItem('product')

    if ( // if car model and product fit each other 
        selectedCarModel &&
        query('.prod-title .name').innerText === selectedProduct
        && query('.js-header-garage-mmy').innerText === selectedCarModel
    ) {
        console.log('%c if car model and product fit each other ', 'color: purple');

        addFitChangePDP({ carModel: selectedCarModel })
    } else if (!getId('selectBtnReact')) { // if car is preselected on the PDP  

        console.log('%c if car is preselected on the PDP', 'color: purple');
        console.log('btnreact', getId('selectBtnReact'));

        const preselectedCarModel = selectedCarModel || query('.prod_vehicle>div').innerText

        addFitChangePDP({ carModel: preselectedCarModel, isChangeBtn: false })
    } 
    
    // else if (localStorage.getItem('upsale') === 'true' && query('.js-header-garage-mmy').innerText === localStorage.getItem('car')) { // if upsale
    //     console.log('//////');
    //     console.log('%c UPSALE', 'color: purple');
    //     console.log('//////');

    //     addFitChangePDP({ carModel: selectedCarModel, isUpsale: 'true' })
    // } 
    
    else {
        const defaultPdpFit = /*html*/`
                <div class="fit_unselect_car">
                    <p>Guaranteed Fitment</p>
                    <p><span>Select your vehicle</span> to check the fitment</p>
                </div>
            `

        query('#prodRightSide .prod_verify_vehicle').insertAdjacentHTML('afterbegin', defaultPdpFit)

        const waitForDefaultPdpFit = setInterval(() => { // open the Popup by clicking on the 'select'
            if (query('.fit_unselect_car span')) {
                clearInterval(waitForDefaultPdpFit)

                query('.fit_unselect_car span').addEventListener('click', () => {
                    // getId('selectBtnReact').click()
                    changeCar()
                    callEvent('Select your vehicle', 'Guaranteed fitment')
                })

            }
        }, intervalTimeout)
    }
}



const addFitToPopup = () => {
    const waitForTitle = setInterval(() => {
        if (query('.po-header-selected .title') && query('.po_prod')) {
            clearInterval(waitForTitle)

            const car = query('.po-header-selected .title').innerText
            const product = query('.prod-title .name').innerText

            console.log('Selected Car is' + car);
            console.log('Selected Product is' + product);

            localStorage.setItem('car', car)
            localStorage.setItem('product', product)

            addFitChangePDP({ carModel: car, isPDP: false, isChangeBtn: false }) // add a Fit block to the Popup    
            addFitChangePDP({ carModel: car }) // add a Fit block to the PDP 
        }
    }, intervalTimeout)

    const waitForAllBtns = setInterval(() => {
        if (query('.po_notif_msg_a') && query('.fit_car')) {
            clearInterval(waitForAllBtns)

            query('.po_notif_msg_a').addEventListener('click', () => { // hide or show a Fit block by clicking on 'Click me'
                if (query('.po_notif_msg_attention_grey_mark')) {
                    query('.fit_car').hidden = false
                } else {
                    query('.fit_car').hidden = true
                }
            })
        }
    }, intervalTimeout)
}

/** GO Events */

const callEvent = (eventAction, eventLabel = '') => {
    // console.log('////////');
    // console.log(`%c ${eventAction}`, 'color: yellow');
    // console.log(eventLabel);
    // console.log('////////');

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP fitment. Desktop',
        eventAction,
        eventLabel
    })
}

const clickOnPopupFormSelect = () => {
    const waitForPopupFormSelect = setInterval(() => {
        if (query('.po_submodel')) {
            clearInterval(waitForPopupFormSelect)

            query('.po_submodel').addEventListener('click', (e) => {
                const el = e.target

                if (el.matches('.po-select') || el.matches('.value')) {
                    const select_name = el.closest('.po-select').dataset.placeholder

                    callEvent(`Select ${select_name}`, 'Popup. Select your vehicle')
                }

                if (el.matches('.item')) {
                    const option_name = el.getAttribute('value')
                    const select_name = el.closest('.po-select').dataset.placeholder

                    callEvent(`Option ${option_name} in select ${select_name}`)
                }
            })
        }
    }, intervalTimeout)
}

const clickOnCancelAndAddCart = () => {
    const waitForEl = setInterval(() => {
        if (queryAll('.group-buttons button')[1]) {
            clearInterval(waitForEl)

            query('.group-buttons').addEventListener('click', (e) => {
                const el = e.target

                if (el.closest('#cancel-anchor')) {
                    callEvent('Cancel', 'Popup. Select your vehicle')
                }
                if (el.closest('.po_button_holder')?.querySelector('button')?.innerText === 'Add To Cart'.toUpperCase()) {
                    callEvent('Add to cart', 'Popup. Select your vehicle')
                }
            })
        }
    }, intervalTimeout)
}

const clickOnX = () => {
    const waitForEl = setInterval(() => {
        if (query('.gbox_close')) {
            clearInterval(waitForEl)

            query('.gbox_close').addEventListener('click', () => {
                if (query('.-attention')) {
                    callEvent('Close popup. Cross', `Popup: Attention. This particular wheel doesn't fit`)
                } else {
                    callEvent('Close popup. Cross', 'Popup. Select your vehicle')
                }
            })
        }
    }, intervalTimeout)
}

const clickOnChange = () => {
    const waitForEl = setInterval(() => {
        if (query('.-po-change-vehicle')) {
            clearInterval(waitForEl)

            query('.-po-change-vehicle').addEventListener('click', () => callEvent('Change vehicle', 'Popup. Product options'))
        }
    }, intervalTimeout)
}

const clickOnClickHere = () => {
    const waitForEl = setInterval(() => {
        if (query('.po_notif_msg_a')) {
            clearInterval(waitForEl)

            query('.po_notif_msg_a').addEventListener('click', () => callEvent('Click here', 'Popup. Product options'))
        }
    }, intervalTimeout)
}

const viewAttentionPopup = () => {
    const waitForEl = setInterval(() => {
        if (query('.po')) {
            clearInterval(waitForEl)

            callEvent('View popup', `Popup: Attention. This particular wheel doesn't fit`)
        }
    }, intervalTimeout)
}

const clickOnView = () => {
    const waitForEl = setInterval(() => {
        if (query('.-success')) {
            clearInterval(waitForEl)

            query('.-success').addEventListener('click', () => callEvent('View wheels that do fit', `Popup: Attention. This particular wheel doesn't fit`))
        }
    }, intervalTimeout)
}

const clickOnContinue = () => {
    const waitForEl = setInterval(() => {
        if (query('.-transparent')) {
            clearInterval(waitForEl)

            query('.-transparent').addEventListener('click', () => callEvent('Continue anyway', `Popup: Attention. This particular wheel doesn't fit`))
        }
    }, intervalTimeout)
}

const observePopup = () => { // make changes when Popup is opened
    const target = document.body
    const config = {
        childList: true,
        subtree: true,
    }

    let disable = false

    let mainObserver = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue

                if (node.matches('#child_products_tbl') && disable === false) {
                    addFitToPopup()
                }

                if (node.matches('.po')) { // if wheel doesn't fit the car
                    mainObserver.disconnect()

                    console.log('POOOOOOOOOO');

                    query('.fit_car.pdp') ? query('.fit_car.pdp').hidden = true : null
                    query('.fit_unselect_car') ? query('.fit_unselect_car').hidden = false : null

                    disable = true
                }

                if (node.matches('.upsale-products-content')) {
                    query('.upsale-products-content').addEventListener('click', (e) => {
                        if (e.target.closest('.upsale-item')) {

                            const upsaleItemName = e.target.closest('.upsale-item').dataset.name

                            localStorage.setItem('upsaleItem', upsaleItemName)
                            console.log('//////');
                            console.log('set upsale !!');
                            console.log('//////');
                        }
                    })
                }
            }
        }
    })

    mainObserver.observe(target, config)

    let infinityObserver = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue

                // console.log('%c node', 'color: red');
                // console.log(node);

                if (node.matches('.po-child-products-loading')) { // restart mainObserver
                    disable = false

                    mainObserver.disconnect() // in case if mainObserver is still running
                    mainObserver.observe(target, config)
                }

                if (node.matches('.overlay_portal')) {
                    /* events if wheel doesn't fit the car */
                    clickOnX()

                    /* popup events */

                    clickOnPopupFormSelect()
                    clickOnCancelAndAddCart()
                    clickOnChange()
                    clickOnClickHere()
                }

                if (node.matches('.po')) {
                    console.log('%c POOOOO', 'color: green');
                    viewAttentionPopup()
                    clickOnView()
                    clickOnContinue()
                }
            }
        }
    })

    infinityObserver.observe(target, config)
}

/** Implementation */

document.head.insertAdjacentHTML('beforeend', style) // add CSS

const waitForAddCartBtn = setInterval(() => {
    if (query('.prod-title .name') && query('.js-header-garage-mmy')) {
        clearInterval(waitForAddCartBtn)

        console.log(query('.prod-title .name'));
        console.log(query('.js-header-garage-mmy'));

        console.log('DRAWWWWWWW');

        drawPdpFit()
    }
}, intervalTimeout)

observePopup()

callEvent('loaded')

let isClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(isClarity)

        clarity('set', `pdp_fitment_desktop`, 'variant_1')
    }
}, 100)

const waitForViewOptions = setInterval(() => {
    if (query('.js-product-options-link')) {
        clearInterval(waitForViewOptions)

        query('.js-product-options-link').addEventListener('click', () => {
            callEvent('View Product Options', 'Fits Following Model(s)')
        })
    }
}, intervalTimeout)
