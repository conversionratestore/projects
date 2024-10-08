; (function () {
  // Run on page load
  runCode()

  // Run on popstate event
  window.addEventListener('popstate', function () {
    runCode()
  })

  function runCode() {
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
        const style = /*html*/`
          <style>
          .list-packs+.list-packs+.list-packs+.list-packs .save-btn,
          .list-packs+.list-packs+.list-packs+.list-packs .before-after-prices {
            display: none !important;
          }

          .list-packs+.list-packs+.list-packs+.list-packs .stickers-prices{
            align-items: flex-start !important;
          }

          .custom-el {
            display: none !important;
          }        

          #getNow:has(.slide-packs .list-packs:nth-child(4).active-slide) .js-total,
          #getNow:has(.slide-packs .list-packs:nth-child(4).active-slide) .js-regular {
            display: none;
          }
          #getNow:has(.slide-packs .list-packs:nth-child(4).active-slide) .custom-el {
            display: block !important;
          }

          #cons:has(.slide-packs .list-packs:nth-child(4).active-slide) .view-prices h3 {
            display: none;
          }
          #cons:has(.slide-packs .list-packs:nth-child(4).active-slide) .view-prices h3+p {
            visibility: hidden;
          }          
          #cons:has(.slide-packs .list-packs:nth-child(4).active-slide) .custom-el {
            display: block !important;
          }
       
          </style>
          `

        document.head.insertAdjacentHTML('beforeend', style)

        // pdp pack price
        waitForElement('.package .list-packs + .list-packs + .list-packs + .list-packs').then(pdpPack => {
          const waitForEls = setInterval(() => {
            if (
              pdpPack.querySelector('.info .pack-price') &&
              pdpPack.querySelector('.info2 .pcs')
            ) {
              clearInterval(waitForEls)

              pdpPack.querySelector('.info .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              pdpPack.querySelector('.info2 .pcs').textContent = `${currencySymbol}${packPrice[1]} Each`
            }
          }, WAIT_INTERVAL_TIMEOUT)

          changeIdOfPack('package')
        })

        waitForElement('.package .prices').then(el => {
          el.insertAdjacentHTML('beforeend', /*html*/`<span class="js-total custom-el">${currencySymbol}${packPrice[1]}</span>`)
        })

        // cart pack price
        waitForElement('.slide-packs .list-packs + .list-packs + .list-packs + .list-packs').then(cartPack => {
          const waitForEls = setInterval(() => {
            if (
              cartPack.querySelector('.pack-price') &&
              cartPack.querySelector('.save-price-1')
            ) {
              clearInterval(waitForEls)

              cartPack.querySelector('.pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              cartPack.querySelector('.save-price-1').textContent = packPrice[1]

              cartPack.addEventListener('click', () => {
              })
            }
          }, WAIT_INTERVAL_TIMEOUT)

          changeIdOfPack('sidebar')
        })

        waitForElement('#cons h3').then(el => {
          el.insertAdjacentHTML('afterend', /*html*/`<h3 class="custom-el">${currencySymbol}${packPrice[1]}</h3>`)
        })

      } else if (url === 'sleepypatch') {
        const style = /*html*/`
        <style>
          .list-packs + .list-packs + .list-packs + .list-packs .buttons-sticker,
          .list-packs + .list-packs + .list-packs + .list-packs .before-after-prices {
            display: none !important;
          }

          .list-packs+.list-packs+.list-packs+.list-packs .stickers-prices{
            align-items: flex-start !important;
          }
          .list-packs+.list-packs+.list-packs+.list-packs .sticker-image {
            margin: auto 0;
          }

          .custom-el {
            display: none !important;
          }  

          #getNow:has(.list-packs:nth-child(4).active-slide) .view-prices h3 {
            display: none;
          }
          #getNow:has(.list-packs:nth-child(4).active-slide) .view-prices h3 + p {
            display: none;
          }
          #getNow:has(.list-packs:nth-child(4).active-slide) .custom-el {
            display: block !important;
          }

          #cons:has(.list-packs:nth-child(4).active-slide) .view-prices h3 {
            display: none;
          }
          #cons:has(.list-packs:nth-child(4).active-slide) .view-prices h3 + p {
            display: none;
          }
          #cons:has(.list-packs:nth-child(4).active-slide) .custom-el {
            display: block !important;
          }
        </style>
        `

        document.head.insertAdjacentHTML('beforeend', style)

        // pdp pack price
        waitForElement('#purchase .list-packs-1').then(pdpPack => {
          const waitForEls = setInterval(() => {
            if (
              pdpPack.querySelector('.info .pack-price') &&
              pdpPack.querySelector('.save-price-1')
            ) {
              clearInterval(waitForEls)

              pdpPack.querySelector('.info .pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              pdpPack.querySelector('.save-price-1').textContent = `${packPrice[1]}`
            }
          }, WAIT_INTERVAL_TIMEOUT)
        })

        waitForElement('#getNow .view-prices h3').then(el => {
          el.insertAdjacentHTML('afterend', /*html*/`<h3 class="custom-el">${currencySymbol}${packPrice[1]}</h3>`)
        })

        // cart pack price
        waitForElement('.sidebar .list-packs-1').then(cartPack => {
          const waitForEls = setInterval(() => {
            if (
              cartPack.querySelector('.pack-price') &&
              cartPack.querySelector('.save-price-1')
            ) {
              clearInterval(waitForEls)

              cartPack.querySelector('.pack-price').textContent = `${currencySymbol}${packPrice[1]}/Pack`
              cartPack.querySelector('.save-price-1').textContent = packPrice[1]
            }
          }, WAIT_INTERVAL_TIMEOUT)
        })

        waitForElement('#cons .view-prices h3').then(el => {
          el.insertAdjacentHTML('afterend', /*html*/`<h3 class="custom-el">${currencySymbol}${packPrice[1]}</h3>`)
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

    changeInitialPackPrice()
  }
})()