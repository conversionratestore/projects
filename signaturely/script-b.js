

//push dataLayer
let pushDataLayer = (action, label = '') => {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp: New design alt flow',
        'eventAction': action,
        'eventLabel': label
    });
}

let scriptHtmlToImg = document.createElement('script');
scriptHtmlToImg.src = 'https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.min.js';
document.head.appendChild(scriptHtmlToImg)

let optionsMut = {
    childList: true,
    subtree: true
}
let mut = new MutationObserver(muts => {
    if (document.querySelectorAll('.css-0 .chakra-button')) {
        mut.disconnect()
        document.querySelectorAll('.css-0 .chakra-button').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopImmediatePropagation()
                let signaturely = item.previousElementSibling;

                domtoimage.toPng(signaturely)
                    .then(function (dataUrl) {
                        console.log(dataUrl)
                        item.parentElement.querySelector('.download-signaturely') != null ? item.parentElement.querySelector('.download-signaturely').remove() : '';
                        item.insertAdjacentHTML('afterend',`<a href="${dataUrl}" download="signature.png" class="download-signaturely"></a>`);
                        item.parentElement.querySelector('.download-signaturely').click()
                        window.location.href = 'https://app.signaturely.com/signup'
                    })
            })
        })
    }
    mut.observe(document.body, optionsMut)
})

mut.observe(document.body, optionsMut)

let hrefLocation = window.location.href;

function init(){

    let init = setInterval(() => {
        if (hrefLocation.includes('/online-signature/type') && document.querySelector('.post-1599') != null && document.querySelector('.block-trial') == null) {
            clearInterval(init)

            let signatureHTML = `
            <style>
                .chakra-portal, .elementor.elementor-5997.elementor-location-footer > div > section.elementor-section.elementor-element-2cfd820{
                    display: none;
                }
                #content > div.ast-container {
                    margin: 40px 0!important;
                }
                .block-trial {
                    background: #00A3FA;
                    border-radius: 20px;
                    padding: 40px;   
                    color: #FFFFFF;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 120.69%;
                    max-width: 1216px;
                    width: 97%;
                    margin: 0 auto 0;
                }
                .block-trial h2 {
                    font-weight: 700;
                    font-size: 36px;
                    margin-bottom: 16px;
                    color: #FFFFFF;
                }
                .block-trial a.btn {
                    background: #FFFFFF;
                    border: 1px solid #E4E7EB;
                    border-radius: 50px;
                    line-height: 59px;
                    text-align: center;
                    color: #00A3FA;
                    display: block;
                    width: 396px;
                    height: fit-content;
                }
                .flx {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            </style>
            
            <div class="block-trial flx">
                <div>
                    <h2>Sign your document for FREE!</h2>
                    <p>Create signature and sign your document for free in a few clicks</p>
                </div>
                <a href="https://app.signaturely.com/signup" class="btn" onclick="pushDataLayer('Click on Create free account button', 'signaturely')">Create free account</a>
            </div>`;
            document.querySelector('.post-1599').insertAdjacentHTML('beforebegin', signatureHTML)
            if (document.querySelector('.exp-loading') != null) {
                document.querySelector('.exp-loading').remove()
            }
            pushDataLayer('loaded')
        }
        if (hrefLocation.includes('/online-signature/draw') && document.querySelector('.post-1597') != null && document.querySelector('.block-trial') == null && document.querySelector('.css-1xizarx')) {
            clearInterval(init)

            let signatureHTML = `
            <style>
                .chakra-portal, .elementor.elementor-5997.elementor-location-footer > div > section.elementor-section.elementor-element-2cfd820{
                    display: none;
                }
                #content > div.ast-container {
                    margin: 40px 0!important;
                }
                .block-trial {
                    background: #00A3FA;
                    border-radius: 20px;
                    padding: 40px;   
                    color: #FFFFFF;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 120.69%;
                    max-width: 1216px;
                    width: 97%;
                    margin: 0 auto 0;
                }
                .block-trial h2 {
                    font-weight: 700;
                    font-size: 36px;
                    margin-bottom: 16px;
                    color: #FFFFFF;
                }
                .block-trial a.btn {
                    background: #FFFFFF;
                    border: 1px solid #E4E7EB;
                    border-radius: 50px;
                    line-height: 59px;
                    text-align: center;
                    color: #00A3FA;
                    display: block;
                    width: 396px;
                    height: fit-content;
                }
                .flx {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            </style>
            
            <div class="block-trial flx">
                <div>
                    <h2>Sign your document for FREE!</h2>
                    <p>Create signature and sign your document for free in a few clicks</p>
                </div>
                <a href="https://app.signaturely.com/signup" class="btn" onclick="pushDataLayer('Click on Create free account button', 'signaturely')">Create free account</a>
            </div>`;
            document.querySelector('.post-1597').insertAdjacentHTML('beforebegin', signatureHTML) 
            
            document.querySelector('.chakra-button.css-1yy3q7l').addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                const waitForImage = imgElem => new Promise(resolve => imgElem.complete ? resolve() : imgElem.onload = imgElem.onerror = resolve);

                const svgToImgDownload = (ext = 'png') => {
                    const _svg = document.querySelector('.css-1xizarx');
                    const xmlSerializer = new XMLSerializer();
                    let _svgStr = xmlSerializer.serializeToString(_svg);
                    const img = document.createElement('img');
                    img.src = 'data:image/svg+xml;base64,' + window.btoa(_svgStr);
                    
                    waitForImage(img)
                        .then(_ => {
                            const canvas = document.createElement('canvas');
                            canvas.width = _svg.clientWidth;
                            canvas.height = _svg.clientHeight;
                            canvas.getContext('2d').drawImage(img, 0, 0, _svg.clientWidth, _svg.clientHeight);
                            return canvas.toDataURL('image/' + ext, 1.0);
                        })
                        .then(dataURL => {
                            console.log(dataURL);
                            document.querySelector('.download-signaturely') != null ? document.querySelector('.download-signaturely').remove() : ''
                            document.body.insertAdjacentHTML('beforeend',`<a href="${dataURL}" download="signature.${ext}" class="download-signaturely" style="display: none"></a>`);
                            document.querySelector('.download-signaturely').click()
                            window.location.href = 'https://app.signaturely.com/signup'
                        })
                        .catch(console.error);
                };
                svgToImgDownload()
            })
            if (document.querySelector('.exp-loading') != null) {
                document.querySelector('.exp-loading').remove()
            }
            pushDataLayer('loaded')
        }
        if (hrefLocation.includes('/signup') && document.querySelector('.sign-up--top-layer') != null && document.querySelector('.sign-up__footer .sign-up__link') != null && document.querySelector('.sign-up--head') == null) {
            clearInterval(init)
            if (document.querySelector('.style-signin') == null) {
                document.body.insertAdjacentHTML('afterbegin',`
                <style class="style-signin">
                    .sign-up {
                        flex-direction: row-reverse;
                    }
                    .sign-up__title {
                        display: none;
                    }
                    .sign-up__right-side {
                        justify-content: space-around;
                        padding: 7.5vh 0;
                    }
                    .sign-up--head {
                        color: #FFFFFF;
                        font-weight: 500;
                        font-size: 18px;
                    }
                    .sign-up--head h2 {
                        font-weight: 700;
                        font-size: 36px;
                        margin-bottom: 20px;
                        line-height: 120.69%;
                    }
                    .sign-up--head p {
                        font-weight: 500;
                        font-size: 24px;
                        margin-bottom: 40px;
                        line-height: 120.69%;
                    }
                    .sign-up--head ul > li {
                        line-height: 120%;
                        margin-bottom: 24px;
                        display: block;
                        position: relative;
                        padding-left: 34px;
                    }
                    .sign-up--head ul > li:last-child {
                        margin: 0;
                    }
                    .sign-up--head ul > li:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        width: 24px;
                        height: 24px;
                        transform: translateY(-50%);
                        background: url('https://conversionratestore.github.io/projects/signaturely/img/check.svg') no-repeat center / 100%;
                    }
                </style>`)
            }

            document.querySelector('.sign-up--top-layer').insertAdjacentHTML('beforebegin', `
                <div class="sign-up--head">
                    <h2>Sign your documents now</h2>
                    <p>1st document - for FREE!</p>
                    <ul>
                        <li>Create signature and sign 1 document for free in a few clicks</li>
                        <li>Works for single or multiple signature documents</li>
                        <li>Super easy and simple to use</li>
                    </ul>
                </div>
            `)

            //events
            document.querySelectorAll('.slider__button').forEach(item => {
                item.addEventListener('click', () => {
                    pushDataLayer('Click on navigation in review button')
                })
            })
            document.querySelectorAll('.form__input').forEach(item => {
                item.addEventListener('click', () => {
                    pushDataLayer(`Click on ${item.closest('.form__field').querySelector('.form__label').innerText} input`)
                })
            })

            document.querySelectorAll('.auth__acception > a').forEach((item, index) => {
                item.addEventListener('click', () => {    
                    pushDataLayer(`Click on ${item.innerText} link`)
                })
            })
            document.querySelector('.auth__submitButton .button').addEventListener('click', () => {    
                pushDataLayer(`Click on Create free account button`, 'app.signaturely')
            })
            document.querySelector('.auth__check-account .auth__link').addEventListener('click', () => {    
                pushDataLayer(`Click on Sign in link`)
            })
            document.querySelector('.sign-up__footer .sign-up__link').addEventListener('click', () => {    
                pushDataLayer(`Click on Terms and Conditions link`)
            })

            // history.pushState(null, null, location.href);
            // window.onpopstate = function(event) {
            //     history.go(1);
            // };
            if (document.querySelector('.exp-loading') != null) {
                document.querySelector('.exp-loading').remove()
            }
            pushDataLayer('loaded')
        }
    })
}

init()

let routing = setInterval(() => {
    let newHref = window.location.href;
    if (newHref != hrefLocation) {
        hrefLocation = newHref;
        init()
    }
})

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "emphasize_signing_doc_free", "variant_1");
    }
}, 100)
