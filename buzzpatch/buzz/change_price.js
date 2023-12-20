const targetPage = 'pages/buzzpatch'
const USA_PRICE = '19.00'
const AU_PRICE = '29.00'

const url = location.href

const isTargetPage = url.includes(targetPage)

function getCookie(name) {
  let cookie = {}
  document.cookie.split(';').forEach(function (el) {
    let split = el.split('=')
    cookie[split[0].trim()] = split.slice(1).join('=')
  })
  return cookie[name]
}

const isUSA = getCookie('localization') === 'US'
const isAU = getCookie('localization') === 'AU'

if (isTargetPage && (!isUSA || !isAU)) {
  let price = isUSA ? USA_PRICE : AU_PRICE

  const packsWrap = document.querySelector('.form-group')
  const onePack = document.querySelector('#radios-3')
  const onePackPrice = onePack.nextElementSibling.querySelector('span')

  const totalPrice = document.querySelector('.js-total')
  const totalPricePrevContent = totalPrice.innerHTML

  onePackPrice.textContent = `$${price} each`
  onePack.value = '42279107952684'

  packsWrap.addEventListener('click', async event => {
    const target = event.target === onePack
    if (target) {
      totalPrice.textContent = `$${price}`
    } else {
      totalPrice.innerHTML = totalPricePrevContent
    }
  })
}
