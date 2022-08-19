/* selector shorthands */
const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)
const getId = document.getElementById.bind(document)

/* other variables */
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

            .fit_unselect_car {
                display: flex;
                flex-direction: row;
            }

            .fit_unselect_car div:first-child {
                margin-right: 12px;
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
                font-weight: 600;     
                font-size: 12px;    
            }

            #prodRightSide .prod_vehicle {
                display: none;
            }

            /* Popup */

            .po_header {
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
                text-transform: initial;
            }

            .fit_car {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            #child_products_tbl .fit_car {float: right; padding-left: 20px;}

            .fit_unselect_car[hidden],
            .fit_car[hidden],
            .prod_vehicle[hidden] {
                display: none;
            }

            .fit_car div:first-child { 
                display: flex; 
            }

            .fit_car p {
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: #000000;
                margin: 0;
            }

            .fit_car p:last-child {
                font-weight: 500;
            }

            .fit_car div:first-child {
                margin-right: 12px;
            }

            .fit_car img {
                height: 40px;
                width: 40px;
            }

            /* TODO: make bigger font-size*/

            .fit_car.pdp span {
                color: #3E61BC;
                font-weight: 600;
                font-size: 12px;
                cursor: pointer;
            }

            #child_products_tbl .po_prod:first-child .po_prod_sku {
                position: absolute;
                right: 22px;
                top: 37px;
            }

            /*.po_prod_title {width: 75%;} */

            @media screen and (max-width: 740px) {
                #child_products_tbl .fit_car {float: left; padding: 0;}

                #child_products_tbl .po_prod:first-child .po_prod_sku {
                    position: relative;
                    top: auto;
                    right: auto;
                }
            }
        </style>
    `

/** GO Events */

const callEvent = (eventAction, eventLabel = '') => {
    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: PDP fitment. Desktop',
        eventAction,
        eventLabel
    })
}

const formSelectLogic = (e) => {
    const el = e.target

    if (el.matches('.po-select') || el.matches('.value')) {
        const select_name = el.closest('.po-select').dataset.placeholder

        callEvent(`Select ${select_name}`, 'Popup. Select your vehicle')
    }

    if (el.matches('.item')) {
        const option_name = el.getAttribute('value')
        const select_name = el.closest('.po-select').dataset.placeholder

        callEvent(`Option ${option_name} in select ${select_name}`, 'Popup. Select your vehicle')
    }
}

const clickOnPopupFormSelect = () => {
    const waitForPopupFormSelect = setInterval(() => {
        if (query('.po_submodel')) {
            clearInterval(waitForPopupFormSelect)

            query('.po_submodel').removeEventListener('click', formSelectLogic)
            query('.po_submodel').addEventListener('click', formSelectLogic)
        }
    }, intervalTimeout)
}

const cancelAndAddLogic = (e) => {
    const el = e.target

    if (el.closest('#cancel-anchor')) {
        callEvent('Cancel', 'Popup. Select your vehicle')
    }
    if (el.closest('.po_button_holder')?.querySelector('button')?.innerText === 'Add To Cart'.toUpperCase()) {
        callEvent('Add to cart', 'Popup. Select your vehicle')
    }
}

const clickOnCancelAndAddCart = () => {
    const waitForEl = setInterval(() => {
        if (queryAll('.group-buttons button')[1]) {
            clearInterval(waitForEl)

            query('.group-buttons').removeEventListener('click', cancelAndAddLogic)
            query('.group-buttons').addEventListener('click', cancelAndAddLogic)
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

const changeEventLogic = () => { callEvent('Change vehicle', 'Popup. Product options') }

const clickOnChange = () => {
    const waitForEl = setInterval(() => {
        if (query('.-po-change-vehicle')) {
            clearInterval(waitForEl)

            query('.-po-change-vehicle').removeEventListener('click', changeEventLogic)
            query('.-po-change-vehicle').addEventListener('click', changeEventLogic)
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

const clickOnView = (startTime) => {
    const waitForEl = setInterval(() => {
        if (query('.-success')) {
            clearInterval(waitForEl)

            query('.-success').addEventListener('click', () => {
                callEvent('View wheels that do fit', `Popup: Attention. This particular wheel doesn't fit`)

                let endWatchAttention = startTime > 0 ? (Date.now().toString() - startTime) : 0
                callEvent('Popup was closed after ' + millisToMinutesAndSeconds(endWatchAttention), `Popup: Attention. This particular wheel doesn't fit`)
            })
        }
    }, intervalTimeout)
}

const clickOnContinue = () => {
    const waitForEl = setInterval(() => {
        if (query('.-transparent')) {
            clearInterval(waitForEl)

            query('.-transparent').addEventListener('click', () => {
                callEvent('Continue anyway', `Popup: Attention. This particular wheel doesn't fit`)

                waitForPopupTimer(Date.now().toString())
            })
        }
    }, intervalTimeout)
}

/** helpers */

const parsedObj = (name) => JSON.parse(sessionStorage.getItem(name) || 'null')
const setItem = (name, value) => sessionStorage.setItem(name, JSON.stringify(value))

/** Website Logic and HTML */

if (!parsedObj('myCarStorageObj') || parsedObj('myCarStorageObj').pageName !== window.location.pathname || JSON.parse(localStorage.garageData).current === '') {
    const defaultCarObj = {
        carModel: '',
        isFit: false,
        pageName: window.location.pathname
    }

    setItem('myCarStorageObj', defaultCarObj)
}

const changeCar = (isDefault) => {
    getId('selectBtnReact').click()

    const waitForNonSelectHeader = setInterval(() => { // product options 
        if (query('.-po-change-vehicle')) {
            clearInterval(waitForNonSelectHeader)

            query('#child_products_tbl .fit_car')?.remove()
            query('.-po-change-vehicle').click()
        }
    }, intervalTimeout)

    if (isDefault) {
        const waitForSelectHeader = setInterval(() => { // select product options 
            if (query('.po_header')?.innerText.toLowerCase().includes('select')) {
                clearInterval(waitForSelectHeader)
                clearInterval(waitForNonSelectHeader)

                const header = /*html*/`
                    <p class="header">SELECT YOUR VEHICLE</p>
                    <p class="subheader">Get the perfect fit & an accurate price quote</p>`

                query('.po_header').innerHTML = header
            }
        }, intervalTimeout)
    }
}

const defaultPdpFitWrapper = () => {
    const waitForEl = setInterval(() => {
        if (query('.prod_vehicle ')) {
            clearInterval(waitForEl)

            const wrapper = `<div class="fit_wrapper"></div>`
            query('#prodRightSide .prod_verify_vehicle').insertAdjacentHTML('afterbegin', wrapper)

            drawPdpFit()
        }
    }, intervalTimeout)
}

const drawPdpFit = () => {
    const waitForWrapper = setInterval(() => {
        if (query('.fit_wrapper')) {
            clearInterval(waitForWrapper)

            const myCarObj = parsedObj('myCarStorageObj')

            if (
                (parsedObj('myCarStorageObj').isFit && parsedObj('myCarStorageObj').carModel)
                || query('.prod_vehicle > div').innerText !== 'Vehicle Specific'
            ) { // fit or Preselected Car


                const carModel = parsedObj('myCarStorageObj').carModel || query('.prod_vehicle > div').innerText
                const isChangeBtn = getId('selectBtnReact') ? true : false

                myCarObj.carModel = carModel
                myCarObj.isFit = true
                setItem('myCarStorageObj', myCarObj)

                const fitToSelectedCar = /*html*/`                     
                        <div class="fit_car pdp">
                            <div><img src="${imgFolderUrl}check-circle.svg" alt="check"></div>
                            <div>
                                <p>Guaranteed fit to</p>
                                <p>${carModel} ${isChangeBtn ? `<span>change</span>` : ''}</p>                         
                            </div>
                        </div>`

                query('.fit_wrapper').innerHTML = fitToSelectedCar

                const waitForChangeBtn = setInterval(() => { // open the Popup by clicking on the change button
                    if (query('.fit_car.pdp span')) {
                        clearInterval(waitForChangeBtn)

                        query('.fit_car.pdp span').addEventListener('click', () => {
                            changeCar(false)
                            callEvent('Change', 'Guaranteed fitment')
                        })
                    }
                }, intervalTimeout)
            }
            else if (myCarObj.isFit === false || myCarObj.carModel === '') { // if not Fit status
                const fitToUnSelectedCar = /*html*/`                    
                    <div class="fit_unselect_car">
                        <div>
                            <img src="https://cdn.carid.com/css/prod-images/9fffff65.svg" alt="arrow">
                        </div>
                        <div>
                            <p>Guaranteed Fitment</p>
                            <p><span>Select your vehicle</span> to check the fitment</p>
                        </div>
                    </div>`

                query('.fit_wrapper').innerHTML = fitToUnSelectedCar

                const waitForDefaultPdpFit = setInterval(() => { // open the Popup by clicking on the 'select'
                    if (query('.fit_unselect_car span')) {
                        clearInterval(waitForDefaultPdpFit)

                        query('.fit_unselect_car span').addEventListener('click', () => {
                            changeCar(true)
                            callEvent('Select your vehicle', 'Guaranteed fitment')
                        })
                    }
                }, intervalTimeout)
            }
        }
    }, intervalTimeout)
}

const drawPopupFit = () => {
    if (
        parsedObj('myCarStorageObj').isFit
        && !query('.po_prod .fit_car')
        // && parsedObj('garageData').current === parsedObj('myCarStorageObj').carModel
    ) {
        const waitForPopupProduct = setInterval(() => {
            if (query('.po_prod')) {
                clearInterval(waitForPopupProduct)

                const carModel = parsedObj('myCarStorageObj').carModel

                const fitToBlock = /*html*/` 
                    <div class="fit_car" hidden>
                        <div><img src="${imgFolderUrl}check-circle.svg" alt="check"></div>
                        <div>
                            <p>Guaranteed fit to</p>
                            <p>${carModel}</p>                         
                        </div>
                    </div>`

                query('.po_prod .po_prod_info').insertAdjacentHTML('afterbegin', fitToBlock)

                const waitForMsg = setInterval(() => {
                    if (query('.clear + div') && query('.po_prod .fit_car')) {
                        clearInterval(waitForMsg)

                        if (query('.po_notif_msg_attention_grey_mark')) {
                            query('.po_prod .fit_car').hidden = true
                        } else {
                            query('.po_prod .fit_car').hidden = false
                        }
                    }
                }, intervalTimeout)
            }
        }, intervalTimeout)
    }
}

const clickHereLogic = () => {
    if (query('#child_products_tbl .fit_car')) {
        if (query('.po_notif_msg_check_mark')) {
            query('#child_products_tbl .fit_car').hidden = true;
        } else {
            query('#child_products_tbl .fit_car').hidden = false;
        }
    }

    callEvent('Click here', 'Popup. Product options')
}

const clickOnClickHere = () => {
    const waitForEl = setInterval(() => {
        if (query('.po_notif_msg_a')) {
            clearInterval(waitForEl)

            query('.po_notif_msg_a').removeEventListener('click', clickHereLogic) // remove dublicates
            query('.po_notif_msg_a').addEventListener('click', clickHereLogic)
        }
    }, intervalTimeout)
}

const millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        seconds == 60 ?
            (minutes + 1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
}

function waitForPopupTimer(startWatchPopup) {
    const waitForPopupTimer = setInterval(() => {
        if (!getId('selectOptWin')) {
            clearInterval(waitForPopupTimer)

            let endWatchPopup = startWatchPopup > 0 ? (Date.now().toString() - startWatchPopup) : 0
            callEvent('Popup was closed after ' + millisToMinutesAndSeconds(endWatchPopup), 'Popup. Product options')
        }
    }, 2000)
}

function waitForAttTimer(startWatchAttention) {
    const waitForAttTimer = setInterval(() => {
        if (!document.querySelector('.po:not(#selectOptWin')) {
            clearInterval(waitForAttTimer)

            let endWatchAttention = startWatchAttention > 0 ? (Date.now().toString() - startWatchAttention) : 0
            callEvent('Popup was closed after ' + millisToMinutesAndSeconds(endWatchAttention), `Popup: Attention. This particular wheel doesn't fit`)
        }
    }, 1000)
}

/** observer */

const observePopup = () => {
    const target = document.body
    const config = {
        childList: true,
        subtree: true,
    }

    let observer = new MutationObserver(mutations => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue

                if (node.matches('#child_products_tbl')) { // products changed
                    const waitForCarModel = setInterval(() => {
                        if (query('.po-header-selected .title')) {
                            clearInterval(waitForCarModel)

                            const selectedCar = query('.po-header-selected .title').innerText // ? or parsedObj('garageData').current

                            // refresh model name
                            const myCarObj = parsedObj('myCarStorageObj')
                            myCarObj.carModel = selectedCar
                            myCarObj.isFit = true
                            setItem('myCarStorageObj', myCarObj)

                            drawPopupFit()
                            drawPdpFit()

                            clickOnClickHere()
                        }
                    }, intervalTimeout)
                }

                if (node.matches('.overlay_portal')) { // popup opened
                    drawPopupFit()

                    /* popup events */
                    clickOnX()
                    clickOnPopupFormSelect()
                    clickOnCancelAndAddCart()
                    clickOnChange()
                    clickOnClickHere()

                    if (query('.po:not(#selectOptWin')) {
                        waitForAttTimer(Date.now().toString())
                    }
                }

                if (node.matches('.gbox_portal')) {
                    const waitForEl = setInterval(() => {
                        if (query('.po')) {
                            clearInterval(waitForEl)

                            if (getId('selectOptWin')) {
                                waitForPopupTimer(Date.now().toString())
                            }
                        }
                    }, intervalTimeout)
                }

                if (node.matches('.po')) { // attention error
                    const myCarObj = parsedObj('myCarStorageObj')
                    myCarObj.isFit = false
                    setItem('myCarStorageObj', myCarObj)

                    drawPdpFit()

                    viewAttentionPopup()
                    clickOnView(Date.now().toString())
                    clickOnContinue()

                    clickOnCancelAndAddCart()
                    clickOnPopupFormSelect()
                    clickOnChange()

                    waitForAttTimer(Date.now().toString())
                }
            }
        }
    })

    observer.observe(target, config)
}

/** run functions */

document.head.insertAdjacentHTML('beforeend', style) // add CSS

defaultPdpFitWrapper()
observePopup()

callEvent('loaded')

const isClarity = setInterval(() => {
    if (typeof clarity === 'function') {
        clearInterval(isClarity)

        clarity('set', `pdp_fitment_desktop`, 'variant_1')
    }
}, intervalTimeout)

const waitForViewOptions = setInterval(() => {
    if (query('.js-product-options-link')) {
        clearInterval(waitForViewOptions)

        query('.js-product-options-link').addEventListener('click', () => {
            callEvent('View Product Options', 'Fits Following Model(s)')
        })
    }
}, intervalTimeout)