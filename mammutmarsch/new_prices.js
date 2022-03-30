// window.onload = function () {
function changePrice(item) {
    let price = +item.innerText.slice(0, -1).trim().replace(',', '.')
    price = price * 0.95
    item.innerText = price.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'})
}

document.querySelectorAll('.woocommerce-Price-amount').forEach((item) => {
    changePrice(item)
})

let change = setInterval(function () {
    console.log(document.querySelectorAll('.starter_package_price')[0].innerText.innerText.length)
}, 100)

document.querySelectorAll('.starter_package_price').forEach(( item) => {
    changePrice(item)
})

document.querySelectorAll('.additional_package_price').forEach(( item) => {
    changePrice(item)
})

document.querySelectorAll('.checkout_total_price').forEach(( item) => {
    changePrice(item)
})

document.querySelector('.starter_package_price')?.nextSibling?.remove()
document.querySelector('.additional_package_price')?.nextSibling?.remove()
document.querySelector('.checkout_total_price')?.nextSibling?.remove()

if(window.location.pathname.includes('checkout')) {
    document.querySelector('#coupon_code').value = 'Price_Test_CRO'
    document.querySelector('.checkout_coupon input[type="submit"]').click()
}
// }
