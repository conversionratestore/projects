let startFunk = setInterval(() => {
    if (document.querySelector('#hlApp')) {
        clearInterval(startFunk)

        const imgFolderUrl = "https://conversionratestore.github.io/projects/comparamais/img/"

        let eventVar = "desktop"

        if (window.innerWidth <= 768) {
            eventVar = "mobile"
        }

        function pushDataLayer(actionDataLayer, labelDataLayer) {
            window.dataLayer = window.dataLayer || []
            if (labelDataLayer) {
                console.log(actionDataLayer + " : " + labelDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: - Sell the call ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                    eventLabel: `${labelDataLayer}`,
                })
            } else {
                console.log(actionDataLayer)
                dataLayer.push({
                    event: "event-to-ga",
                    eventCategory: `Exp: - Sell the call ${eventVar}`,
                    eventAction: `${actionDataLayer}`,
                })
            }
        }

        let newStyle =/*html */ `
        <style>
            .is_hidden{
                display: none;
            }
            .new_text_wrap{
                padding: 28px 0;
            }
            .accent_wrap{
                background: #E6EDF0;
                border-radius: 8px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 0 16px;
            }
            .accent_wrap p{
                font-weight: 700;
                font-size: 18px;
                line-height: 24px;
                color: #1F1F1F;
            }
            .accent_wrap p.accent_green{
                color: #229F55;
            }
            .new_text_wrap h2{
                font-weight: 400 !important;
                font-size: 18px !important;
                line-height: 22px !important;
                color: #1F1F1F !important;
                margin: 0 !important;
                max-width: 502px;
            }
            .new_text_wrap ul{
                margin: 16px 0;
            }
            .new_text_wrap ul li{
                position: relative;
                padding-left: 36px;
            }
            .new_text_wrap ul li::before{
                position: absolute;
                content:'';
                background: url('${imgFolderUrl}documents.svg');
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 24px;
                height: 24px;
            }
            .new_text_wrap ul li:nth-child(1):before{
                background: url('${imgFolderUrl}secure.svg');
            }
            .new_text_wrap ul li:nth-child(3):before{
                background: url('${imgFolderUrl}information.svg');
            }
            .new_text_wrap ul li + li{
                margin-top: 16px;
            }
            .new_text_wrap ul span{
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #1F1F1F;
                margin: 0;
            }
            .new_text_wrap > p{
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                color: #474A48;
            }
            @media (max-width: 768px) {
                .simulator-container{
                    margin-top: 0 !important;
                }
                .accent_wrap{
                    padding: 16px;
                }
            }
            @media (max-width: 320px) {
                .accent_wrap {
                    padding: 10px;
                }
                .accent_wrap p{
                    font-size: 14px;
                }
                .new_text_wrap h2{
                    font-size: 13px !important;
                }
                .new_text_wrap ul span{
                    font-size: 12px;
                }
                .new_text_wrap > p{
                    font-size: 12px;
                }
            }
        </style>
        `

        let newBlock = /*html */`
        <div class="new_text_wrap" data-visability="1">
            <div class="accent_wrap" data-event>
                <p data-event>Temos uma taxa de aprovação líder</p>
                <p class="accent_green" data-event>no mercado, de 90%</p>
            </div>
            <h2 class="new_title" data-event>Vamos dar-lhe as seguintes informações quando a nossa equipa entrar em contacto consigo:</h2>
            <ul class="new_list">
                <li class="new_link">
                    <span data-event>Como conseguir a melhor oferta.</span>
                </li>
                <li class="new_link">
                    <span data-event>Os documentos que precisa para receber as melhores propostas.</span>
                </li>
                <li class="new_link">
                    <span data-event>Quais os melhores créditos habitação disponíveis para si.</span>
                </li>
            </ul>
            <p class="new_text" data-event>Preencha o formulário seguinte e será contactado nas próximas horas!</p>
        </div>
        `
        document.head.insertAdjacentHTML('beforeend', newStyle)

        const runObserver = () => {
            // Mutation Observer
            const target = document.querySelector('.simulator-wrapper')
            const config = {
                childList: true,
                subtree: true,
            }

            let observer = new MutationObserver((mutations) => {
                for (let mutation of mutations) {
                    for (let node of mutation.addedNodes) {

                        if (!(node instanceof HTMLElement)) continue
                        // console.log(`added`, node)

                        // TODO: uncomment this line if we need to handle the mutation
                        if (node.matches('.simulator-container__capture-form')) {
                            document.querySelector('.page__title').insertAdjacentHTML('beforeend', newBlock)
                            document.querySelector('.container--hero .header-list').classList.add('is_hidden')
                            if (window.innerWidth <= 768) {
                                setTimeout(() => {
                                    console.log('scroll')
                                    document.querySelector(".new_text_wrap")?.scrollIntoView()
                                }, 100)
                            }

                            let evTxt = 'Hover'
                            let ev = 'mouseenter'

                            if (window.innerWidth <= 768) {
                                evTxt = 'Click'
                                ev = 'click'
                            }

                            document.querySelectorAll('[data-event]').forEach(el => {
                                el.addEventListener(`${ev}`, (e) => {
                                    if (!e.target.getAttribute("data-test")) {
                                        if (e.target.classList.contains('accent_wrap')) {
                                            pushDataLayer(`${evTxt} on gray color block"`)
                                        } else {
                                            pushDataLayer(`${evTxt} on text "${e.target.textContent}"`)
                                        }
                                    }
                                    e.target.setAttribute("data-test", "1")

                                    setTimeout(() => {
                                        if (e.target.getAttribute("data-test")) {
                                            e.target.removeAttribute("data-test")
                                        }
                                    }, 500)
                                })
                            })
                        } else if (node.matches('.simulator-container')) {
                            if (document.querySelector('.message--success')) {
                                console.log('Yes');
                                document.querySelector('.page__title').insertAdjacentHTML('beforeend', newBlock)
                                document.querySelector('.container--hero .header-list').classList.add('is_hidden')

                                if (window.innerWidth <= 768) {
                                    setTimeout(() => {
                                        console.log('scroll')
                                        document.querySelector(".new_text_wrap")?.scrollIntoView()
                                    }, 100)
                                }

                                let evTxt = 'Hover'
                                let ev = 'mouseenter'

                                if (window.innerWidth <= 768) {
                                    evTxt = 'Click'
                                    ev = 'click'
                                }

                                document.querySelectorAll('[data-event]').forEach(el => {
                                    el.addEventListener(`${ev}`, (e) => {
                                        if (!e.target.getAttribute("data-test")) {
                                            if (e.target.classList.contains('accent_wrap')) {
                                                pushDataLayer(`${evTxt} on gray color block"`)
                                            } else {
                                                pushDataLayer(`${evTxt} on text "${e.target.textContent}"`)
                                            }
                                        }
                                        e.target.setAttribute("data-test", "1")

                                        setTimeout(() => {
                                            if (e.target.getAttribute("data-test")) {
                                                e.target.removeAttribute("data-test")
                                            }
                                        }, 500)

                                    })
                                })
                            } else {
                                console.log('>>>>NO');
                                document.querySelector('.new_text_wrap')?.remove()
                                if (document.querySelector('.container--hero .header-list').classList.contains('is_hidden')) {
                                    document.querySelector('.container--hero .header-list').classList.remove('is_hidden')
                                }
                            }
                        }
                    }
                }
            })

            observer.observe(target, config)
        }


        if (document.querySelector('.simulator-wrapper')) {
            runObserver()
        }

        let i = setInterval(() => {
            if (document.querySelector(".new_text_wrap")) {
                clearInterval(i)
                let obs = new IntersectionObserver(visibility, {
                    threshold: 0.9
                })

                let obs2 = new IntersectionObserver(visibility2, {
                    threshold: 0.9
                })

                obs.observe(document.querySelector('.new_text_wrap[data-visability="1"]'))

                function visibility(entries) {
                    entries.forEach(i => {
                        if (i.isIntersecting) {
                            setTimeout(function () {
                                obs2.observe(i.target)
                            }, 800)
                        }
                    })
                }

                function visibility2(entries) {
                    entries.forEach(i => {
                        if (i.isIntersecting) {
                            if (i.target.getAttribute('data-visability') === "1") {
                                pushDataLayer(`view the block`)
                            }

                            // if (window.innerWidth <= 768) {
                            //     if (i.target.getAttribute('data-visability') === "1") {
                            //         pushDataLayer(`10 seconds of the block view`)
                            //     }
                            // }

                            obs.unobserve(i.target)
                        }
                        obs2.unobserve(i.target)
                    })
                }
                // 
                if (window.innerWidth <= 768) {
                    let obsMob = new IntersectionObserver(visibilityMob, {
                        threshold: 0.9
                    })

                    let obsMob2 = new IntersectionObserver(visibilityMob2, {
                        threshold: 0.9
                    })

                    obsMob.observe(document.querySelector('.new_text_wrap[data-visability="1"]'))

                    function visibilityMob(entries) {
                        entries.forEach(i => {
                            if (i.isIntersecting) {
                                setTimeout(function () {
                                    obsMob2.observe(i.target)
                                }, 10000)
                            }
                        })
                    }

                    function visibilityMob2(entries) {
                        entries.forEach(i => {
                            if (i.isIntersecting) {
                                if (i.target.getAttribute('data-visability') === "1") {
                                    pushDataLayer(`10 seconds of the block view`)
                                }

                                obsMob.unobserve(i.target)
                            }
                            obsMob2.unobserve(i.target)
                        })
                    }
                }
            }
        }, 100)


        pushDataLayer("loaded")
        const record = setInterval(() => {
            if (typeof clarity === "function") {
                clearInterval(record)

                clarity("set", `sell_the_call_${eventVar}`, "variant_1")
            }
        }, 200)

    }
}, 100)
