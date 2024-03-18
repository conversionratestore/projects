import { startLog, $el, $$el, waitForElement, visibilityOfTime, pushData, clarityInterval } from '../../libraries'
import { svg, freeDeliveryBanner, needMoreBlock, completeBlock, progressBlock } from './blocks'

clarityInterval('exp_free_delivery')
startLog({ name: 'Free Delivery Threshold_2nd iteration', dev: 'SKh' })

const baseUrl = window.location.pathname
const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

const styleMain = /*HTML */ `
<style>
  .is_homepage header:not(.is-sticky) .header_icon path {
  fill: white;
}
.is_homepage .page-header__wrapper:hover .header_icon path {
  fill: #2c7226;
}
</style>
`

class FreeDelivery {
  device: 'mobile' | 'desktop'
  baseUrl: string
  country: 'UK' | 'US'
  currency: string
  threshold: number
  observer: null | MutationObserver
  lastPath: string

  constructor(baseUrl, device) {
    this.observer = null
    this.lastPath = window.location.pathname
    this.device = device
    this.baseUrl = baseUrl
    this.country = 'UK'
    this.currency = '£'
    this.threshold = 75.0
    this.init()
    this.observePageChange()
  }

  init() {
    waitForElement('body.content-initiated').then(() => {
      this.visibleHandler()
      this.getGrandTotalPriceFromWindow()
      this.renderFreeDeliveryBanner()
      this.productPage()
      this.cartPage()
      this.addEventListeners()
      document.head.insertAdjacentHTML('afterbegin', styleMain)
    })
  }

  observePageChange() {
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (window.location.pathname !== this.lastPath) {
          if (this.lastPath === '/basket') {
            setTimeout(() => {
              this.renderFreeDeliveryBanner()
            }, 400)
          } else {
            this.renderFreeDeliveryBanner()
          }
          this.lastPath = window.location.pathname
          this.productPage(true)
        }
        if (window.location.pathname === '/') {
          document.body.classList.add('is_homepage')
        } else {
          if (document.body.classList.contains('is_homepage')) {
            document.body.classList.remove('is_homepage')
          }
        }

        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue

          if (node.matches('basket-view-totals > .flex') || node.matches('modal-bottom-container basket-add-notice')) {
            this.getGrandTotalPriceFromWindow()
            this.cartPage()
            this.productPage()
            this.addEventListeners()
            if (this.device === 'desktop') {
              this.checkBasketDesktop()
            } else {
              this.checkBasketMobile()
            }
          }
          if (node.matches('[cy-basketempty]') && localStorage.getItem('basketPriceForIcon')) {
            localStorage.removeItem('basketPriceForIcon')
            this.changeIconHeader()
            this.productPage()
          }
        }
      })
    })

    const config = { childList: true, subtree: true }
    this.observer.observe(document.body, config)
  }

  renderFreeDeliveryBanner(): void {
    let place: string = ''

    let checkPage = this.checkPage()
    console.log(checkPage)
    switch (checkPage) {
      case 'product':
        $el('header .listing_var.free_delivery_banner')?.remove()
        if (this.device === 'desktop') {
          place = 'beforebegin'
        } else {
          place = 'afterend'
        }
        if (!$el('header .free_delivery_banner')) {
          $el('#header > .page-header__inner')?.insertAdjacentHTML(
            place,
            freeDeliveryBanner(this.currency, this.threshold)
          )
          if ($el('header .free_delivery_banner')) {
            $el('header .free_delivery_banner').classList.add('product_var')
          }
          visibilityOfTime(
            'header .product_var.free_delivery_banner',
            'exp_free_delivery_stickybanner_01',
            'Sticky banner',
            'PDP Free delivery and returns sticky banner visibility'
          )
        }
        break
      case 'listing':
        $el('header .product_var.free_delivery_banner')?.remove()
        place = 'afterend'

        if (!$el('header .free_delivery_banner')) {
          $el('#header > .page-header__inner')?.insertAdjacentHTML(
            place,
            freeDeliveryBanner(this.currency, this.threshold)
          )
          if ($el('header .free_delivery_banner')) {
            $el('header .free_delivery_banner').classList.add('listing_var')
          }
          visibilityOfTime(
            'header .listing_var.free_delivery_banner',
            'exp_free_delivery_stickybanner_03',
            'Sticky banner',
            'Listing Free delivery and returns sticky banner visibility'
          )
        }
        break
      default:
        $el('header .free_delivery_banner')?.remove()
        break
    }
  }

  productPage(pdp: boolean = false): void {
    setTimeout(() => {
      let startPrice = 0
      let deliveryNoteElement = $el('product-view-delivery-note')
      let priceElement = $el('product-view-price .price')
      let basketPrice: any | null = localStorage.getItem('basketPriceForIcon')
      const thresholdExceeded: boolean = basketPrice !== null
      if (pdp) {
        $el('product-view-layout .threshold_banner')?.remove()
        console.log(`remove >>>>>>>>>.`)
      }

      if (deliveryNoteElement) {
        deliveryNoteElement.style.display = 'none'

        if (priceElement) {
          let price: number = this.priceToNumber(priceElement.textContent)
          if (price !== startPrice) {
            startPrice = price

            if (thresholdExceeded && price <= +basketPrice) {
              price = +basketPrice
            }

            if (!$el('product-view-layout .threshold_banner')) {
              deliveryNoteElement.insertAdjacentHTML('beforebegin', this.drawThreshold(price))
              let s = setInterval(() => {
                if (!$el('.cdk-overlay-backdrop')) {
                  clearInterval(s)
                  visibilityOfTime(
                    'product-view-layout .crs_need_more.threshold_banner',
                    'exp_free_delivery_banner_01',
                    'Banner',
                    'PDP Free Express UK Delivery on orders over £'
                  )
                  visibilityOfTime(
                    'product-view-layout .crs_complete.threshold_banner',
                    'exp_free_delivery_banner_02',
                    'Banner',
                    'PDP Congratulations! You have Free Express UK Delivery'
                  )
                }
              }, 100)
            }
          }
        }
      }
    }, 500)
  }

  checkBasketMobile(): void {
    //check BasketMobile
    if (this.device === 'mobile') {
      waitForElement('basket-add-notice .b-t').then(i => {
        if (!$el('basket-add-notice .free_delivery_banner')) {
          $el('basket-add-notice .b-t')?.insertAdjacentHTML(
            'beforebegin',
            freeDeliveryBanner(this.currency, this.threshold)
          )
          visibilityOfTime(
            'basket-add-notice .free_delivery_banner',
            'exp_free_delivery_stickybanner_02',
            'Sticky banner',
            'Minibasket Free delivery and returns sticky banner visibility'
          )
        }
      })
    }
  }

  checkBasketDesktop(): void {
    waitForElement('minibasket basket-view-totals').then(i => {
      if ($el('minibasket .custom-scrollbar>div:first-child')) {
        $el('minibasket .custom-scrollbar>div:first-child').style.display = 'none'
      }
      let basketPrice: any | null = localStorage.getItem('basketPriceForIcon')
      const thresholdExceeded: boolean = basketPrice !== null
      if (thresholdExceeded) {
        basketPrice = +basketPrice
        $el('minibasket .threshold_banner') ? $el('minibasket .threshold_banner').remove() : ''
        $el('minibasket basket-view-totals').insertAdjacentHTML('afterend', this.drawThreshold(basketPrice, true))
        visibilityOfTime(
          'minibasket .crs_progress.threshold_banner',
          'exp_free_delivery_banner_05',
          'Banner',
          'Cart You are £ away from Free Express UK  Delivery'
        )
        visibilityOfTime(
          'minibasket .crs_complete.threshold_banner',
          'exp_free_delivery_banner_06',
          'Banner',
          'Cart Congratulations! You have Free Express UK Delivery'
        )
      }
    })
  }

  cartPage(): void {
    waitForElement('basket-view-totals>div:first-of-type>div').then(i => {
      if (this.checkPage() === 'basket') {
        let basketPrice: any | null = localStorage.getItem('basketPriceForIcon')
        const thresholdExceeded: boolean = basketPrice !== null

        if (thresholdExceeded) {
          basketPrice = +basketPrice
          if ($el('basket-view .threshold_banner')) $el('basket-view .threshold_banner').remove()
          if (this.device === 'mobile') {
            $el('basket-view bottom-panel').insertAdjacentHTML('afterbegin', this.drawThreshold(basketPrice))
          } else {
            $el('basket-view ul').insertAdjacentHTML('beforebegin', this.drawThreshold(basketPrice))
          }
          visibilityOfTime(
            'basket-view .crs_progress.threshold_banner',
            'exp_free_delivery_banner_03',
            'Banner',
            'Shopping Bag You are £ away from Free Express UK  Delivery'
          )
          visibilityOfTime(
            'basket-view .crs_complete.threshold_banner',
            'exp_free_delivery_banner_04',
            'Banner',
            'Shopping Bag Congratulations! You have Free Express UK Delivery'
          )
        }
        $el('basket-view>div>div>div>div>*:nth-child(3)>div.inline-block')?.remove()
      }
    })
  }

  changeIconHeader(): void {
    let t: boolean = false
    const basketPrice: string | null = localStorage.getItem('basketPriceForIcon')
    const thresholdExceeded: boolean = basketPrice !== null && +basketPrice >= this.threshold

    $$el('basket-qty').forEach(el => {
      const hasHeaderIcon: boolean = !!el.querySelector('.header_icon')
      const lastHeaderIcon = el.querySelector('[cy-basketbagbtn]')

      if (thresholdExceeded) {
        if (!hasHeaderIcon) {
          if (t) return
          t = true
          el.insertAdjacentHTML('beforeend', svg.headerIcon)
          let priceElement = $el('product-view-price .price')
          if (priceElement && this.priceToNumber(priceElement.textContent) < this.threshold) {
            $el('product-view-layout .threshold_banner')?.remove()
          }
          let s = setInterval(() => {
            if (!$el('.cdk-overlay-backdrop')) {
              clearInterval(s)
              visibilityOfTime(
                'header .header_icon',
                'exp_free_delivery_icon_vis_02',
                'Icone',
                'Header Free delivery icon  visibility'
              )
            }
          }, 100)
        }

        lastHeaderIcon.style.display = 'none'
      } else {
        if (el.querySelector('.header_icon') == null) return
        t = false
        el.querySelector('.header_icon')?.remove()
        let priceElement = $el('product-view-price .price')
        if (priceElement && this.priceToNumber(priceElement.textContent) < this.threshold) {
          $el('product-view-layout .threshold_banner')?.remove()
        }
        lastHeaderIcon.style.display = 'block'
        let s = setInterval(() => {
          if (!$el('.cdk-overlay-backdrop')) {
            clearInterval(s)
            visibilityOfTime(
              'basket-qty .page-header__icon',
              'exp_free_delivery_icon_vis_01',
              'Icone',
              'Header Cart icon visibility'
            )
          }
        }, 100)
      }
    })
  }

  checkPage(): string {
    const url = window.location.href
    switch (true) {
      case $el('product-view-layout') !== null:
        return 'product'
      case $el('category-view-layout') !== null:
        return 'listing'
      case url.includes('/basket'):
        return 'basket'
      default:
        return 'other'
    }
  }

  getGrandTotalPriceFromWindow() {
    const grandTotal = window?.app?.customer?.basket?.data?.totals?.grand_total
    if (grandTotal !== undefined) {
      localStorage.setItem('basketPriceForIcon', `${grandTotal}`)
    }
    this.changeIconHeader()
  }

  priceToNumber(txt: string): number {
    let priceTxt: number = parseFloat(txt.replace(',', '.').replace(/[^0-9.]/g, ''))
    return priceTxt
  }

  drawThreshold(price: number, basket: boolean = false) {
    const progressWidth = (price / this.threshold) * 100

    if (price < this.threshold && this.checkPage() === 'product' && !basket) {
      return needMoreBlock(this.country, this.currency, this.threshold)
    } else if (price < this.threshold) {
      return progressBlock(progressWidth, this.currency, this.threshold, price, this.country)
    } else if (price >= this.threshold) {
      return completeBlock(this.country)
    }
  }

  visibleHandler() {
    // HEADER  -----> header
    waitForElement('basket-qty .page-header__icon').then(i => {
      visibilityOfTime(
        'basket-qty .page-header__icon',
        'exp_free_delivery_icon_vis_01',
        'Icone',
        'Header Cart icon visibility'
      )
    })
  }

  addEventListeners(): void {
    waitForElement('header .header_icon').then(i => {
      $el('header .header_icon')?.addEventListener('click', e => {
        if (!e.target.getAttribute('data-test')) {
          pushData('exp_free_delivery_icon_01', 'Icone', 'click', 'Header Free delivery icon  visibility')
        }
        e.target.setAttribute('data-test', '1')
        setTimeout(() => {
          if (e.target.getAttribute('data-test')) {
            e.target.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
  }
}
new FreeDelivery(baseUrl, device)
