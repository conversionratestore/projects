; (function () {

  const localizationData = getCookieValue('localization')
  const url = checkUrl()

  const packPriceObj = {
    'sleepypatch': {
      'AU': ['34.00', '29.00'],
      'US': ['24.99', '19.00'],
      'GB': ['24.00', '19.00'],
    },
    'zenpatch': {
      'AU': ['41.00', '29.00'],
      'US': ['29.99', '19.00'],
      'GB': ['29.00', '19.00'],
    }
  }

  const currencySymbolsObj = {
    'AU': '$',
    'US': '$',
    'GB': '£'
  }

  const currencySymbol = currencySymbolsObj[localizationData]
  const packPrice = packPriceObj[url][localizationData]

  function calculateDiscountPercent(oldPrice, currentPrice) {
    // Calculate the discount percent
    const discountPercent = ((oldPrice - currentPrice) / oldPrice) * 100

    // Round the result to the nearest integer
    const roundedDiscountPercent = Math.round(discountPercent)

    // Return the result as a string
    return `${roundedDiscountPercent}`
  }

  function calculateMoneyDifference(oldPrice, currentPrice) {
    // Calculate the price difference
    const priceDifference = oldPrice - currentPrice

    // Round to 2 decimal places
    const roundedPriceDifference = priceDifference.toFixed(2)

    // Return the result as a string
    return `${roundedPriceDifference}`
  }

  function getCookieValue(cookieName) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith(cookieName + '=')) {
        return cookie.substring(cookieName.length + 1)
      }
    }
    return null
  }

  function checkUrl() {
    const url = window.location.href
    if (url.includes('sleepypatch')) {
      return 'sleepypatch'
    } else if (url.includes('zenpatch')) {
      return 'zenpatch'
    } else {
      return null
    }
  }

  function changeInitialPackPrice() {
    if (url === 'zenpatch') {
      const packId = '42607831679020'

      // pdp pack price
      const pdpPack = document.querySelector('.package .list-packs[data-index="4"]')

      pdpPack.dataset.id = packId

      pdpPack.querySelector('.info .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
      pdpPack.querySelector('.info2 .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
      pdpPack.querySelector('.after-price').textContent = `${currencySymbol}${packPrice[1]}`
      pdpPack.querySelector('.save-btn span').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

      // cart pack price
      const cartPack = document.querySelector('.slide-packs .list-packs[data-index="4"]')
      cartPack.querySelector('.pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
      cartPack.querySelector('.save-price-1').textContent = packPrice[1]
      cartPack.querySelector('.save-percent-1').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

      cartPack.dataset.id = packId

      pdpPack.addEventListener('click', () => {
        document.querySelector('.package .pr').textContent = `${packPrice[1]}`
        document.querySelector('.package .ps').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
        document.querySelector('.package .rs').textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
      })

      cartPack.addEventListener('click', () => {
        document.querySelector('.sidebar .sale-price').textContent = `${packPrice[1]}`
        document.querySelector('.sidebar .off-price').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
        document.querySelector('.sidebar .save').textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
      })

    } else if (url === 'sleepypatch') {
      const packId = '39836565143596'

      // pdp pack price
      const pdpPack = document.querySelector('#purchase .list-packs-1')

      pdpPack.dataset.id = packId

      pdpPack.querySelector('.info .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
      pdpPack.querySelector('.save-price-1').textContent = `${packPrice[1]}`
      pdpPack.querySelector('.save-btn span').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

      // cart pack price
      const cartPack = document.querySelector('.sidebar .list-packs-1')

      cartPack.dataset.id = packId

      cartPack.querySelector('.pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
      cartPack.querySelector('.save-price-1').textContent = packPrice[1]
      cartPack.querySelector('.save-percent-1').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

      pdpPack.addEventListener('click', () => {
        document.querySelector('#purchase .sale-price').textContent = `${packPrice[1]}`
        document.querySelector('#purchase .off-price').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
        document.querySelector('#purchase .text-save').textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
      })

      cartPack.addEventListener('click', () => {
        document.querySelector('.sidebar .sale-price').textContent = `${packPrice[1]}`
        document.querySelector('.sidebar .off-price').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
        document.querySelector('.sidebar .save').textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
      })
    }
  }

  changeInitialPackPrice()
})()