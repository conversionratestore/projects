let changeTo = {
    'Free account':'Try eSignature Free',
    'Create free account':'Try eSignature Free',
    'Get up to 3 documents signed for free, every month':'Start your free 7-day trial and get your documents signed right now!',
    'Get up to 1 document signed for free, every month':'Start your free 7-day trial and get your documents signed right now!',
    'Simply sign up for Signaturely for free and start setting up your documents.':'Simply start your free 7-day trial and get your documents signed right now!',
    'Free electronic signatures':'Try electronic signatures for free',
    'Get up to 3 documents signed for free, every month':'Start your free 7-day trial and get your documents signed right now!',
    'Get up to 1 document signed for free, every month':'Start your free 7-day trial and get your documents signed right now!',
    'Signaturely is free, forever':'',
    'Signaturely (eSign Documents)':'Need to sign a document?',
    'Sign 3 documents for free using Signaturely!':'Start your free 7-day trial and get your documents signed right now!',
    'Sign 1 document for free using Signaturely!':'Start your free 7-day trial and get your documents signed right now!',
    'Sign 1 documents for free using Signaturely!':'Start your free 7-day trial and get your documents signed right now!',
    'Get your documents signed today. It’s free forever!':'',
    'Yes! Signaturely’s free plan lets you request 3 documents for e-signature each month 100% free. No credit card required.':'You can start your free 7-day trial and try Signaturely before you will be charged.',
    'Yes! Signaturely’s free plan lets you request 1 document for e-signature each month 100% free. No credit card required.':'You can start your free 7-day trial and try Signaturely before you will be charged.',
    'Yes! Signaturely’s free plan lets you request 1 document for e-signature 100% free. No credit card required.':'You can start your free 7-day trial and try Signaturely before you will be charged.'
}


function replaceInText(element, pattern, replacement) {
    for (let node of element.childNodes) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                replaceInText(node, pattern, replacement);
                break;
            case Node.TEXT_NODE:
                node.textContent = node.textContent.replace(pattern, replacement);
                break;
            case Node.DOCUMENT_NODE:
                replaceInText(node, pattern, replacement);
        }
    }
}

window.onload = function() {
    for (const key in changeTo) {
        replaceInText(document.body, key, changeTo[key])
    }
};

let dir = 'https://conversionratestore.github.io/projects/signaturely/img/';

function init() {
    let initInterval = setInterval(() => {
        if (window.location.href == 'https://signaturely.com/pricing/' && document.querySelector('.elementor-element-5cc8682f') != null && document.querySelectorAll('.elementor-widget .elementor-icon-list-item').length > 2) {
            clearInterval(initInterval)
            document.querySelector('.elementor-element-5cc8682f').remove();
            document.querySelectorAll('.elementor-widget .elementor-icon-list-item')[1].remove();
        }
        if (document.querySelector('.header__month-counter') != null && document.querySelector('.header__month-counter').innerHTML.includes('signature requests')) {
            document.querySelector('.header__month-counter').remove();
        }
        if (window.location.href == 'https://app.signaturely.com/settings/billing/plan' && document.querySelectorAll('.billing__table-row.table__row .billing__table-column--name').length > 3 && document.querySelector('.billing__table--description')) {
            clearInterval(initInterval)
            document.querySelector('.billing__table--description').innerHTML = '';
            document.querySelectorAll('.billing__table-row.table__row .billing__table-column--name').forEach(item => {
                if (item.innerHTML == 'Documents per month') {
                    item.nextElementSibling.innerHTML = ''
                }
            })
            
        }
        if (window.location.href == 'https://signaturely.com/pricing/' && document.querySelector('.elementor-element-1605957') != null && document.querySelectorAll('.elementor-button span')) {
            clearInterval(initInterval)
            document.querySelector('.elementor-element-1605957').style.display = 'none';
            document.body.insertAdjacentHTML('afterbegin',`
            <style>
                .elementor-element-194383e .elementor-row {
                    justify-content: center;
                }
                .elementor-5311 .elementor-element.elementor-element-bcd9b15>.elementor-widget-container {
                    margin: -17px 0 14px!important;
                }
                .elementor-5311 .elementor-element.elementor-element-ba7c272 {
                    line-height: 43px!important;
                }
                .elementor-5311 .elementor-element.elementor-element-eec8d7b {
                    line-height: 49px!important;
                }
                .elementor-5311 .elementor-element.elementor-element-d7e2eb6>.elementor-widget-container {
                    margin: 0px 0 0!important;
                }
                .elementor-5311 .elementor-element.elementor-element-20fb1d8>.elementor-element-populated>.elementor-widget-wrap {
                    padding: 0 48px 48px!important
                }
                .elementor-element-6d61dd28 .elementor img {
                    display: none!important;
                }
                .elementor-element.elementor-element-6d61dd28 .elementor-widget.elementor-widget-icon-list .elementor-icon-list-icon i {
                    display: none!important;
                }
                .elementor-element.elementor-element-6d61dd28 .elementor-widget.elementor-widget-icon-list .elementor-icon-list-icon {
                    width: 22px;
                    height: 22px;
                    margin-right: 5px;
                    background: url(${dir}check-white.svg) no-repeat center / contain;
                }
                .elementor-element.elementor-element-6d61dd28 .elementor-5311 .elementor-element.elementor-element-cb9545e .elementor-icon-list-icon {
                    background-image: url(${dir}check-blue.svg);
                }
                .elementor-widget .elementor-icon-list-item {
                    padding-bottom: 8.5px!important;
                }
                .elementor-5311 .elementor-element.elementor-element-d97bb78>.elementor-widget-container {
                    margin: 10px 0 0!important;
                }

                .elementor-5311 .elementor-element.elementor-element-a5b0f1d>.elementor-element-populated>.elementor-widget-wrap {
                    padding: 46px 48px 48px!important;
                }
                .elementor-5311 .elementor-element.elementor-element-b460e3f>.elementor-widget-container {
                    margin: 34px 0 0!important;
                }
                .elementor-5311 .elementor-element.elementor-element-09f484a>.elementor-widget-container {
                    margin: 96px 0 0!important;
                }

                .elementor-element-194383e .elementor-column.elementor-col-33 {
                    width: 50%!important;
                    margin: 0 5px;
                    max-width: 514px;
                }
                @media screen and (max-width: 1024px) {
                   
                    .elementor-element-194383e .elementor-column.elementor-col-33 {
                        width: 100%!important;
                        margin: 0 auto;
                    }
                    .elementor-5311 .elementor-element.elementor-element-a5b0f1d>.elementor-element-populated>.elementor-widget-wrap {
                        padding: 30px 20px!Important;
                    }
                    .elementor-5311 .elementor-element.elementor-element-20fb1d8>.elementor-element-populated>.elementor-widget-wrap, .elementor-5311 .elementor-element.elementor-element-20fb1d8>.elementor-element-populated>.elementor-widget-wrap {
                        padding: 0 20px 30px!important
                    }
                    .elementor-5311 .elementor-element.elementor-element-bcd9b15>.elementor-widget-container {
                        margin: -17px 0 6px!important;
                    }
                    .elementor-5311 .elementor-element.elementor-element-edc7b42>.elementor-widget-container, .elementor-5311 .elementor-element.elementor-element-cb9545e>.elementor-widget-container {
                        margin: 8px 0 0!important;
                    }
                    .elementor-element-194383e .elementor-column.elementor-col-33:nth-child(2) {
                        order: 2;
                    }
                }
            </style>`)

            // document.querySelectorAll('.entry-content p')[0].innerHTML = document.querySelectorAll('.entry-content p')[0].innerHTML.replace('40','30')

            document.querySelectorAll('.elementor-button span').forEach(item => {
                if (item.innerHTML.includes('Buy now') ) {
                    item.innerHTML = 'Start Free Trial';
                }
            })
        }
    });
}
init()

let href = window.location.href;
let urlChange = setInterval(() => {
    let newHref = window.location.href
    if (href != newHref) {
        href = newHref
        console.log('init')
        init()
        
    }
})

let btnHeaderChange = setInterval(() => {
    if (document.querySelector('.elementor-36 .elementor-element.elementor-element-be84e0b .elementor-button') != null) {
       clearInterval(btnHeaderChange)
        document.body.insertAdjacentHTML('afterbegin',`
        <style>
            .elementor-36 .elementor-element.elementor-element-be84e0b .elementor-button {
                padding: 14px!important;
            }
        </style>`)
    }
})

let modal = setInterval(() => {
    if (document.querySelector('.chakra-modal__content .css-zooxi0') != null && document.querySelector('.chakra-modal__content .css-zooxi0').innerHTML.includes('Signaturely (eSign Documents)')) {
        for (const key in changeTo) {
            replaceInText(document.body, key, changeTo[key])
        }
    }
});
