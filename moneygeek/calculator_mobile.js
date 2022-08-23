const query = document.querySelector.bind(document)
const queryAll = document.querySelectorAll.bind(document)

const style = /*html*/`
        <style>
            .fr_select_wrapper .last { margin-top: 0; }
            .fr_select_wrapper .state { margin-bottom: 0; }

            .subheader { 
                color: #555555;
                font-weight: 400;
                font-size: 16px;
/*                margin-bottom: 20px !important; */
            }

            /* Tooltip */        
            .css-1fdnw4t .inlineSelectContainer {position: relative;}
            .css-1fdnw4t .selectInline .selectTitle {margin: 0;}
            .tooltip_wrapper {
                position: absolute;
                top: 0;
            }
            .tooltip_wrapper svg {
                cursor: pointer;
            }
            .left_output {
                left: 85px;
            }
            .right_output {
                left: calc(50% + 127px);            
            }
            .last_output {
                left: 255px;
            }
            .last_output .tooltip p:not(.last_output .tooltip p:last-child) {
                margin-bottom: 8px;
            }
            .left_output .tooltip {
                right: auto;
                left: -117px;
            }
            .left_output .tooltip_inner::after {
                left: 107px;
            }

            .right_output .tooltip {
                left: auto;
                right: -36px;
            }
            .right_output .tooltip_inner::after {
                right: 26px;
            }

            .last_output .tooltip {
                left: auto;
                right: -55px;
            }
            .last_output .tooltip_inner::after {
                right: 45px;
            }
            .tooltip {
                position: absolute;
                bottom: 12px;
                transition: all .2s ease;
                transform-origin: bottom;
                transform: scale(0);
                min-width: 310px;
                padding-bottom: 15px;              
            }
            .tooltip_inner {
                position: relative;
                padding: 20px;
                z-index: -1;
                background: #FFFFFF;
                box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26);
                border-radius: 6px;
            }
            .tooltip p {
                font-weight: 400;
                font-size: 16px;
                line-height: 150%;
                color: #555555;
            }
            .tooltip_wrapper:hover .tooltip {
                transform: scale(1);
                z-index: 1;
            }       
            .tooltip_inner::after {
                content: '';
                position: absolute;            
                bottom: -10px;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 12px 17px 0 17px;
                border-color: #fff transparent transparent transparent;
            }

            .css-1fdnw4t h4 {
                font-size: 28px;
                margin-bottom: 8px;
            }

            .css-1fdnw4t .selectInline {width: 48%;}

            .full_width .selectInline {width: 100%;}

            .continue {
                font-weight: 600;
                font-size: 16px;
                text-align: center;
                color: #526EFF;
                padding: 10px;
                width: 100%;
                border: 2px solid #526EFF;
                border-radius: 6px;
                line-height: 19px;
                margin-top: 8px;
            }

            .back {
                margin: 20px 0;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
            .back p {
                font-weight: 600;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                color: #526EFF;  
                margin-left: 8px;          
            }

            .list_style_none {
                padding: 0;
                list-style: none;
                margin: 0;
            }

            .gray_wrapper {
                margin-top: 8px;
                background: #F3F3F3;
                border-radius: 4px;
                padding: 10px;
            }

            .gray_wrapper ul {
                margin: 0;
                padding-left: 20px;
            }

            .css-1fdnw4t .student-section {margin-top: 0px;}

            /* mob*/

            .my_blue_btn {
                margin: 20px 20px 0;
                width: auto;
            }

            .e1ssirya5 {padding-bottom: 0 !important;}

            .css-1fdnw4t .add-student {margin-top: 0;}
            
            .e1ssirya4 {display: none;}

            @media (max-width: 767px) {
                .css-1fdnw4t {
                    padding: 20px;
                }
            }
        </style>
    `
document.head.insertAdjacentHTML('beforeend', style)

const intervalTimeout = 200
const fireEvent = (eventAction, eventLabel = '') => {
    const device = 'Mobile'

    window.dataLayer = window.dataLayer || []
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: Calculator improvements. ' + device,
        eventAction,
        eventLabel,
    })
}
const addTooltips = () => {
    const tooltipTxt = [
        [
            'left_output',
                /*html*/`
                    <p>Insurers alter insurance rates based on your credit score, with poorer credit scores resulting in higher rates. Based on your numerical score, you would fall into one of the following bands: </p>
                    <ul class="list_style_none">
                        <li><b>Excellent: </b>823+</li>
                        <li><b>Good: </b>769-794</li>
                        <li><b>Fair: </b>710-740</li>
                        <li><b>Below fair: </b>628-671</li>
                        <li><b>Poor: </b>524-577</li>
                    </ul>`
        ],
        [
            'right_output',
                /*html*/`
                    <p>Liability insurance covers medical and legal fees for which you’ve been held responsible after a car crash. </p>
                    <div class="gray_wrapper">
                        <p><b>Example liability limits of 50/100/50 mean:</b></p>
                        <ul>                    
                            <li>$50,000 in bodily injury insurance per person</li>
                            <li>$100,000 in bodily injury insurance per accident</li>
                            <li>$50,000 in property damage insurance per accident</li>
                        </ul>
                    </div>`
        ],
        [
            'last_output',
            `<p>Collision coverage pays for your vehicle’s repairs if you hit an object or another car.</p>
                <p>Comprehensive insurance pays for non-crash damage, such as weather or fires. </p>
                <p>The deductible is how much you pay when you file a claim; lower deductibles mean higher monthly rates.</p>`
        ]
    ]
    const tooltipSelect = [ // Credit Score, Liability Coverage, C. and C. Insurance
        queryAll('.inlineSelectContainer')[3],
        queryAll('.inlineSelectContainer')[3],
        queryAll('.inlineSelectContainer')[4],
    ]

    const svgTooltip = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99968 1.33398C6.68114 1.33398 5.3922 1.72498 4.29588 2.45752C3.19955 3.19006 2.34506 4.23125 1.84048 5.44943C1.3359 6.6676 1.20387 8.00805 1.46111 9.30125C1.71834 10.5945 2.35328 11.7823 3.28563 12.7147C4.21798 13.647 5.40587 14.282 6.69908 14.5392C7.99228 14.7965 9.33273 14.6644 10.5509 14.1598C11.7691 13.6553 12.8103 12.8008 13.5428 11.7045C14.2754 10.6081 14.6663 9.31919 14.6663 8.00065C14.6663 7.12517 14.4939 6.25827 14.1589 5.44943C13.8238 4.64059 13.3328 3.90566 12.7137 3.28661C12.0947 2.66755 11.3597 2.17649 10.5509 1.84145C9.74206 1.50642 8.87516 1.33398 7.99968 1.33398ZM7.99968 13.334C6.94484 13.334 5.9137 13.0212 5.03664 12.4352C4.15957 11.8491 3.47599 11.0162 3.07232 10.0416C2.66865 9.06709 2.56304 7.99473 2.76882 6.96017C2.97461 5.9256 3.48256 4.97529 4.22844 4.22941C4.97432 3.48353 5.92463 2.97558 6.9592 2.7698C7.99376 2.56401 9.06612 2.66963 10.0407 3.07329C11.0152 3.47696 11.8481 4.16055 12.4342 5.03761C13.0202 5.91467 13.333 6.94582 13.333 8.00065C13.333 9.41514 12.7711 10.7717 11.7709 11.7719C10.7707 12.7721 9.41417 13.334 7.99968 13.334Z" fill="#555555"/>
    <path d="M7.99967 5.99935C8.36786 5.99935 8.66634 5.70087 8.66634 5.33268C8.66634 4.96449 8.36786 4.66602 7.99967 4.66602C7.63148 4.66602 7.33301 4.96449 7.33301 5.33268C7.33301 5.70087 7.63148 5.99935 7.99967 5.99935Z" fill="#555555"/>
    <path d="M7.99967 6.66602C7.82286 6.66602 7.65329 6.73625 7.52827 6.86128C7.40325 6.9863 7.33301 7.15587 7.33301 7.33268V10.666C7.33301 10.8428 7.40325 11.0124 7.52827 11.1374C7.65329 11.2624 7.82286 11.3327 7.99967 11.3327C8.17649 11.3327 8.34605 11.2624 8.47108 11.1374C8.5961 11.0124 8.66634 10.8428 8.66634 10.666V7.33268C8.66634 7.15587 8.5961 6.9863 8.47108 6.86128C8.34605 6.73625 8.17649 6.66602 7.99967 6.66602Z" fill="#555555"/>
    </svg>`

    tooltipSelect.forEach((select, index) => select.insertAdjacentHTML('beforeend', `
            <div class="tooltip_wrapper ${tooltipTxt[index][0]}">
                ${svgTooltip}
                <div class="tooltip">
                    <div class="tooltip_inner">
                        ${tooltipTxt[index][1]}
                    </div>                    
                </div>
            </div>`))

    const waitForEl = setInterval(() => {
        if (queryAll('.tooltip_wrapper svg')[2]) {
            clearInterval(waitForEl)

            queryAll('.tooltip_wrapper').forEach(tooltip => {
                tooltip.addEventListener('mouseenter', () => {
                    fireEvent('Show tooltip')
                })

                tooltip.addEventListener('mouseleave', () => {
                    fireEvent('Hide tooltip')
                })
            })
        }
    }, intervalTimeout)
}
const hideSelects = () => {
    const secondPartSelects = [
        queryAll('.inlineSelectContainer')[2],
        queryAll('.inlineSelectContainer')[3],
        queryAll('.inlineSelectContainer')[4],
        query('.add-student'),
    ]

    secondPartSelects.forEach(select => { select.hidden = true })
    secondPartSelects[0].insertAdjacentHTML('beforebegin', `
            <button class="continue">Continue</button>
            <div class="back" hidden><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13.6663 6.16732H3.52467L8.18301 1.50898L6.99967 0.333984L0.333008 7.00065L6.99967 13.6673L8.17467 12.4923L3.52467 7.83398H13.6663V6.16732Z" fill="#526EFF"/>
            </svg><p>Back<p></div>
        `)

    // query('.e1ssirya5').insertAdjacentHTML('beforeend', `<button type="submit" hidden class="my_blue_btn chakra-button css-15hckgf">Get Your Personalized Quote</button>`)

    query('.e1ssirya3').insertAdjacentHTML('beforebegin', `<button type="submit" hidden class="my_blue_btn chakra-button css-15hckgf">Get Your Personalized Quote</button>`)

    const waitForBtn = setInterval(() => {
        if (query('.continue') && query('.back') && ('.my_blue_btn')) {
            clearInterval(waitForBtn)

            const firstPartSelects = [
                queryAll('.inlineSelectContainer')[0],
                queryAll('.inlineSelectContainer')[1],
                query('.continue')
            ]

            secondPartSelects.push(query('.back'))

            const showSecondPart = () => {
                secondPartSelects.forEach(select => { select.hidden = false })
                firstPartSelects.forEach(select => { select.hidden = true })

                query('.my_blue_btn').hidden = false

                if (query('.student-section')) {
                    query('.student-section').hidden = false
                }

                fireEvent('Click on Continue')
            }

            const showFirstPart = () => {
                secondPartSelects.forEach(select => { select.hidden = true })
                firstPartSelects.forEach(select => { select.hidden = false })

                query('.my_blue_btn').hidden = true

                if (query('.student-section')) {
                    query('.student-section').hidden = true
                }

                if (query('.add-student')) {
                    query('.add-student').hidden = true
                }

                fireEvent('Click on Back')
            }

            query('.continue').addEventListener('click', showSecondPart)
            query('.back').addEventListener('click', showFirstPart)

            query('.my_blue_btn').addEventListener('click', () => {
                query('.e1ssirya3 .chakra-button').click()
                fireEvent('click on My Get Quote Btn')
            })
        }
    }, intervalTimeout)
}
const waitForCalc = setInterval(() => {
    if (query('.e1ssirya5 h4')) {
        clearInterval(waitForCalc)

        query('.e1ssirya5 h4').insertAdjacentHTML('afterend', `
                <p class="subheader">See how the Average Annual Auto Insurance Rates vary with the options chosen.</p>
                <div class="inlineSelectContainer fr_select_wrapper"><div class="selectInline"></div></div>
            `)

        const waitForFrSelectWrapper = setInterval(() => {
            if (
                query('.fr_select_wrapper .selectInline')
                && query('.state')
                && query('div.selectInline.last')
            ) {
                clearInterval(waitForFrSelectWrapper)

                query('.fr_select_wrapper .selectInline').insertAdjacentElement('beforeend', query('.state')) // State
                query('.fr_select_wrapper').insertAdjacentElement('beforeend', query('div.selectInline.last')) // Gender

                addTooltips()

                const waitForTooltips = setInterval(() => {
                    if (query('.last_output p')) {
                        clearInterval(waitForTooltips)

                        queryAll('.inlineSelectContainer')[2].insertAdjacentElement('beforeend', queryAll('.inlineSelectContainer')[3].querySelector('.selectInline')) // Vehicle Year
                        queryAll('.inlineSelectContainer')[3].insertAdjacentElement('afterbegin', queryAll('.inlineSelectContainer')[2].querySelector('.selectInline'))  // Credit Score

                        queryAll('.inlineSelectContainer')[4].classList.add('full_width')

                        hideSelects()
                    }
                }, intervalTimeout)
            }
        }, intervalTimeout)
    }
}, intervalTimeout)


const target = document.body;
const config = {
    childList: true,
    subtree: true
};

const callback = (mutations) => {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
            if (!(node instanceof HTMLElement)) continue

            if (node.matches('.css-2b097c-container')) {
                if (node.previousElementSibling.innerText === 'Driving Record') {
                    const selectName = node.querySelector('.css-1uccc91-singleValue')

                    switch (selectName.innerText) {
                        case 'Speed':
                            selectName.innerText = 'Speeding'
                            break;
                        case 'Accident':
                            selectName.innerText = 'At-Fault Accident'
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
}
const observer = new MutationObserver(callback);
observer.observe(target, config);

fireEvent('Loaded')

let record = setInterval(function () {
    if (typeof clarity === 'function') {
        clearInterval(record)
        clarity('set', `calculator_improvements_mobile`, 'variant_1')
    }
}, intervalTimeout)