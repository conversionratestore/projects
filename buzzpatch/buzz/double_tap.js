console.log('%c EXP: Double tap (DEV: YK)', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'double_tap', 'variant_1')
  }
}, 1000)

const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} ${desc} ${type} ${loc}`)
}

class DoubleTap {
  constructor() {
    this.init()
  }

  init() {
    this.doubleTap()
  }

  doubleTap() {
    $$el('.js-packs').forEach(pack => {
      if (pack.querySelector('input').checked) {
        pack.classList.add('crs-double-tap')
      } else {
        pack.classList.remove('crs-double-tap')
      }
      pack.addEventListener('click', e => {
        e.preventDefault()
        const qty = +pack.querySelector('label').childNodes[0].textContent.trim().split(' ')[0]
        let delimeter = '.'
        let price = pack
          .querySelector('label span')
          .innerText.trim()
          .split(' ')[0]
          .replace(/[^0-9.,-]+/g, '')
        if (price.includes(',') && !price.includes('.')) {
          price = price.replace(',', '.')
          delimeter = ','
        } else {
          price = price.replace(',', '')
        }

        let total = (+price * qty).toLocaleString(undefined, { minimumFractionDigits: 2 })
        if (delimeter == ',') {
          total = total.replace('.', ',')
        }
        const save = [40, 45, 51, 57]

        pack.querySelector('input').checked = true
        let hrefArr = $el('#addToCart').getAttribute('href').split('?')
        let href = `/cart/${pack.querySelector('input').value}:1${hrefArr[1] ? '?' + hrefArr[1] : ''}`
        $el('#addToCart').setAttribute('href', href)
        if (pack.classList.contains('crs-double-tap')) {
          pushDataLayer(
            'exp_double_tap_click',
            `Double tap ${pack.querySelector('label').childNodes[0].textContent.trim()}`,
            'click',
            'packs'
          )
          window.location.href = href
        } else {
          pushDataLayer(
            'exp_first_tap_click',
            `First tap ${pack.querySelector('label').childNodes[0].textContent.trim()}`,
            'click',
            'packs'
          )
          $el('.js-packs.crs-double-tap').classList.remove('crs-double-tap')
          $el('.js-total .pr').innerText = `${total}`
          $el('.js-total .ps').innerText = `${save[qty - 1]}`

          pack.classList.add('crs-double-tap')
        }
      })
    })
  }
}

const doubleTap = new DoubleTap()
