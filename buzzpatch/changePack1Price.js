; (function () {
  // Run on page load
  runCode()

  // Run on popstate event
  window.addEventListener('popstate', function () {
    runCode()
  })

  function runCode() {
    console.log('%c Running on: ' + window.location.href, 'color: #bada55')

    const WAIT_INTERVAL_TIMEOUT = 100

    const recordClarity = setInterval(() => {
      if (typeof clarity === 'function') {
        clearInterval(recordClarity)
        clarity('set', `exp_1pack_price`, 'variant_1')
      }
    }, WAIT_INTERVAL_TIMEOUT)

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

    const currency = {
      'AU': ['$', 'AUD'],
      'US': ['$', 'USD'],
      'GB': ['£', 'GBP']
    }

    const currencySymbol = currency[localizationData][0]
    const packPrice = packPriceObj[url][localizationData]

    if (url === 'zenpatch' && currency[localizationData]) {
      const waitForEl = setInterval(() => {
        if (linksOfPacks?.linkOf1Pack) {
          clearInterval(waitForEl)

          linksOfPacks.linkOf1Pack = `/cart/42607831679020:1?currency=${currency[localizationData][1]}`
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    function waitForElement(selector) {
      return new Promise(resolve => {
        if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector))
        }

        const observer = new MutationObserver(() => {
          if (document.querySelector(selector)) {
            resolve(document.querySelector(selector))
            observer.disconnect()
          }
        })

        observer.observe(document.documentElement, {
          childList: true,
          subtree: true
        })
      })
    }

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

      if (url === 'zenpatch') {
        // If the price difference is a whole number, return it as a whole number
        if (Math.floor(priceDifference) === priceDifference) {
          return priceDifference
        }
        else {
          return priceDifference.toFixed(2)
        }
      } else if (url === 'sleepypatch') {
        return priceDifference.toFixed(2)
      }
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

    function changeIdOfPack(parent) {
      const waitForPackageBtn = setInterval(() => {
        const btn = document.querySelector(`.${parent} .btn`)
        const pack1 = document.querySelector(`.${parent} .list-packs + .list-packs + .list-packs + .list-packs`)

        if (btn && pack1) {
          clearInterval(waitForPackageBtn)

          pack1.addEventListener('click', () => {
            let originalHref = btn.getAttribute('href')
            let originalCurrency = originalHref.split('=')[1]

            btn.setAttribute('href', `/cart/42607831679020:1?currency=${originalCurrency}`)
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    function changeInitialPackPrice() {
      if (url === 'zenpatch') {
        // pdp pack price
        waitForElement('.package .list-packs + .list-packs + .list-packs + .list-packs').then(pdpPack => {
          const waitForEls = setInterval(() => {
            if (
              pdpPack.querySelector('.info .pack-price') &&
              pdpPack.querySelector('.info2 .pcs') &&
              pdpPack.querySelector('.after-price') &&
              pdpPack.querySelector('.save-btn span')
            ) {
              clearInterval(waitForEls)

              pdpPack.querySelector('.info .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              pdpPack.querySelector('.info2 .pcs').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              pdpPack.querySelector('.after-price').textContent = `${currencySymbol}${packPrice[1]}`
              pdpPack.querySelector('.save-btn span').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

              pdpPack.addEventListener('click', () => {
                document.querySelector('.package .pr').textContent = `${packPrice[1]}`
                document.querySelector('.package .ps').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
                document.querySelector('.package .rs').textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)

          changeIdOfPack('package')
        })

        // cart pack price
        waitForElement('.slide-packs .list-packs + .list-packs + .list-packs + .list-packs').then(cartPack => {
          const waitForEls = setInterval(() => {
            if (
              cartPack.querySelector('.pack-price') &&
              cartPack.querySelector('.save-price-1') &&
              cartPack.querySelector('.save-percent-1')
            ) {
              clearInterval(waitForEls)

              cartPack.querySelector('.pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              cartPack.querySelector('.save-price-1').textContent = packPrice[1]
              cartPack.querySelector('.save-percent-1').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

              cartPack.addEventListener('click', () => {
                document.querySelector('.sidebar .sale-price').textContent = `${packPrice[1]}`
                document.querySelector('.sidebar .off-price').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
                document.querySelector('.sidebar .save').textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)

          changeIdOfPack('sidebar')
        })

      } else if (url === 'sleepypatch') {
        // pdp pack price
        waitForElement('#purchase .list-packs-1').then(pdpPack => {
          const waitForEls = setInterval(() => {
            if (
              pdpPack.querySelector('.info .pack-price') &&
              pdpPack.querySelector('.save-price-1') &&
              pdpPack.querySelector('.save-btn span')
            ) {
              clearInterval(waitForEls)

              pdpPack.querySelector('.info .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              pdpPack.querySelector('.save-price-1').textContent = `${packPrice[1]}`
              pdpPack.querySelector('.save-btn span').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

              pdpPack.addEventListener('click', () => {
                changeSleepyPackDisplayingInfo()
              })

            }
          }, WAIT_INTERVAL_TIMEOUT)
        })

        // cart pack price
        waitForElement('.sidebar .list-packs-1').then(cartPack => {
          const waitForEls = setInterval(() => {
            if (
              cartPack.querySelector('.pack-price') &&
              cartPack.querySelector('.save-price-1') &&
              cartPack.querySelector('.save-percent-1')
            ) {
              clearInterval(waitForEls)

              cartPack.querySelector('.pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              cartPack.querySelector('.save-price-1').textContent = packPrice[1]
              cartPack.querySelector('.save-percent-1').textContent = calculateDiscountPercent(packPrice[0], packPrice[1])

              cartPack.addEventListener('click', () => {
                changeSleepyPackDisplayingInfo()
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)
        })

        const waitForEl = setInterval(() => {
          if (document.querySelectorAll('.list-packs-1')[1]) {
            clearInterval(waitForEl)

            document.querySelectorAll('.list-packs-1').forEach(pack => {
              pack.dataset.id = '42607794290732'
            })
          }
        }, WAIT_INTERVAL_TIMEOUT)
      }
    }

    function changeSleepyPackDisplayingInfo() {
      let purchaseSalePriceElement = document.querySelector('#purchase .sale-price')
      if (purchaseSalePriceElement) {
        purchaseSalePriceElement.textContent = `${packPrice[1]}`
      }

      let purchaseOffPriceElement = document.querySelector('#purchase .off-price')
      if (purchaseOffPriceElement) {
        purchaseOffPriceElement.textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
      }

      let purchaseTextSaveElement = document.querySelector('#purchase .text-save')
      if (purchaseTextSaveElement) {
        purchaseTextSaveElement.textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
      }

      let sidebarSalePriceElement = document.querySelector('.sidebar .sale-price')
      if (sidebarSalePriceElement) {
        sidebarSalePriceElement.textContent = `${packPrice[1]}`
      }

      let sidebarOffPriceElement = document.querySelector('.sidebar .off-price')
      if (sidebarOffPriceElement) {
        sidebarOffPriceElement.textContent = calculateDiscountPercent(packPrice[0], packPrice[1])
      }

      let sidebarTextSaveElement = document.querySelector('.sidebar .text-save')
      if (sidebarTextSaveElement) {
        sidebarTextSaveElement.textContent = `${currencySymbol}${calculateMoneyDifference(packPrice[0], packPrice[1])}`
      }
    }

    changeInitialPackPrice()
  }
})()