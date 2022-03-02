const style = `
`

document.head.insertAdjacentHTML('beforend', style)

let options = { subtree: true, childList: true }

let observer = new MutationObserver(() => {
    observer.disconnect()
    addChanges()
    observer.observe()
})

observer.observe(document, options)

function addChanges() {
    if (document.querySelectorAll('.product-card .product-card__advantages')[7]) {
        console.log('subs >>>');

        window.dataLayer = window.dataLayer || [];
dataLayer.push({ 'event': 'optimize.activate' });
    }
    if (document.querySelector('.elementor-16422 .elementor-element.elementor-element-8caf1df .blue-credits')) {
        console.log('price >>>');

        window.dataLayer = window.dataLayer || [];
dataLayer.push({ 'event': 'optimize.activate' });
    }
}



console.log('v3')
