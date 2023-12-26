  ;(function runExperimental() {
    console.log(
      '%c EXP: Trial Selection (DEV: OS)',
      'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
    )
    const $$el = selector => document.querySelectorAll(selector)
    const $el = selector => document.querySelector(selector)
    const git = 'https://conversionratestore.github.io/projects/'

    // funtion for push data to GA4
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

    // clarity script
    const clarityInterval = setInterval(function () {
      if (typeof clarity == 'function') {
        clearInterval(clarityInterval)
        clarity('set', 'exp_kits', 'variant_1')
      }
    }, 1000)

    // block visibility function
    const blockVisibility = (selector, viewTime, event, location) => {
      let v1 = new IntersectionObserver(
        entries => {
          entries.forEach(item => {
            if (item.isIntersecting) {
              v1.unobserve(item.target)
              setTimeout(function () {
                v2.observe(item.target)
              }, 1000 * viewTime)
            }
          })
        },
        {
          threshold: 0.5
        }
      )

      let v2 = new IntersectionObserver(entries => {
        entries.forEach(item => {
          if (item.isIntersecting) {
            pushDataLayer(
              event || `view_element_${item.target.id}`,
              'Image product',
              'Visibility',
              location || item.target.id
            )
            v1.unobserve(item.target)
          } else {
            v1.observe(item.target)
          }
          v2.unobserve(item.target)
        })
      })

      document.querySelectorAll(selector).forEach(item => {
        v1.observe(item)
      })
    }

    const itemsData = {
      sprayPaintKit: {
        title: 'Spray Paint Kit',
        pdpTitle: 'Spray Paint Kit',
        description: 'Everything you need to spray paint metal surfaces and eliminate paint scratches.',
        chips: ['Big scratches & chips', 'Panels & Doors', 'Metal surfaces']
      },
      paintPenKit: {
        title: 'Paint Pen Kit',
        pdpTitle: 'Touch Up Paint Pen Kit',
        description: 'Great for quickly touching up small chips and scratches.',
        chips: ['Tiny scratches & chips', 'Quick & easy', 'Precise fixes']
      },
      nonMetalSpayPaintKit: {
        title: 'Non-Metal',
        pdpTitle: 'Spray Paint Kit (non-metal)',
        description: 'Everything needed to spray paint non-metal surfaces like bumpers.',
        chips: ['Bumpers & non-metal surfaces', 'Big scratches & chips']
      },
      paintBottleKit: {
        title: '1 oz. Paint Bottle Kit',
        pdpTitle: 'Paint Bottle Kit',
        description: 'These bottles have a built in brush. Can be sprayed with your own equipment.',
        chips: ['Dime-size repairs', 'Brush included']
      }
    }

    const addChips = (key, item) => {
      const chipsContainer = item.querySelector('.kit_item_chips')
      itemsData[key].chips.forEach((chip, i) => {
        let chipClass = 'kit_item_chip'
        if (i === 0) {
          chipClass += ' kit_item_chip-highlighted'
        }
        const chipsItem = /* html */ `
            <div class="${chipClass}">${chip}</div>
          `
        chipsContainer.insertAdjacentHTML('beforeend', chipsItem)
      })
    }
    class Kits {
      constructor() {
        this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
        this.targetPage
      }

      init() {
        const currentUrl = location.href

        if (currentUrl.includes('order-form.cgi')) {
          this.targetPage = 'list'
        }
        if (currentUrl.includes('neworder/store/item')) {
          this.targetPage = 'item'
        }
        if (this.targetPage) {
          this.#insert('<meta name="viewport" content="width=device-width">', 'head')
          this.#initStyles()
          if (this.targetPage === 'list' && $el('#kit-container')) {
            this.#modifyKitListHeader()
            this.#modifyKitListItems()
            this.#addChipsToItem()
            this.#eventsList()
          }
          if (this.targetPage === 'item') {
            this.#addChipsToItem()
            this.#modifyKitPdpItem()
            this.#eventsPdp()
          }
        }
      }

      #eventsList() {
        $$el('.add-to-cart').forEach(item => {
          item.addEventListener('click', event => {
            const title = event.target.closest('.kit-item').querySelector('h2').textContent
            pushDataLayer(
              'epx_kits_button_selectouch_title',
              `Add to Cart - ${title}`,
              'Button',
              'Select Your Products Touch Up Paint Kits'
            )
          })
        })
        $$el('.kit_item_image a').forEach(item => {
          item.addEventListener('click', event => {
            pushDataLayer(
              'epx_kits_select_selectouch_icone',
              'Icone',
              'Select',
              'Select Your Products Touch Up Paint Kits'
            )
          })
        })
        $$el('.kit_item_content a').forEach(item => {
          item.addEventListener('click', event => {
            pushDataLayer(
              'epx_kits_select_selectouch_titlprod',
              'Product title',
              'Select',
              'Select Your Products Touch Up Paint Kits'
            )
          })
        })
        $$el('.kit_item_chip').forEach(item => {
          item.addEventListener('click', event => {
            const title = event.target.closest('.kit-item').querySelector('h2').textContent
            pushDataLayer('epx_kits_but_selectouch_', `${title}`, 'Button', 'Select Your Products Touch Up Paint Kits')
          })
        })
      }

      #eventsPdp() {
        blockVisibility('.product-images-popup table', 3, 'epx_kits_visib_pdp_imageprod', 'PDP')

        $el('.product-images-popup .right input[type="button"]').addEventListener('click', (event) => {
          pushDataLayer('exp_kits_but_close_pdp', 'Close', 'Button', 'PDP')
        })
      }
      #modifyKitListHeader() {
        const title = $el('.regular #wrapper .category-heading h2')
        title.textContent = 'Touch Up Paint Kits'
        const subTitle = /* html */ `
            <h3>Get All You Need for Car Repairs at a Better Price</h3>
          `
        title.insertAdjacentHTML('afterend', subTitle)
        $el('.regular #wrapper #page #main .category-heading p').textContent =
          "Our kits include all the essentials for your touch-up work and are a popular choice among customers for their value and convenience. If you're looking for specific items, you'll find them available lower on the page."
      }

      #modifyKitListItems() {
        $$el('.kit-item').forEach(item => {
          const image = item.querySelector('img')
          const title = item.querySelector('h2')
          const link = image.closest('a')
          const description = item.querySelector('p')
          const price = item.querySelector('h3')
          const addToCart = item.querySelector('.add-to-cart')
          const clonedLink = link.cloneNode()
          clonedLink.append(title)

          const kitItemInnerHtml = /* html */ `
              <div class="kit_item_chips"></div>
              <div class="kit_item_product">
                <div class="kit_item_image"></div>
                <div class="kit_item_content">
                  <div class="kit_item_purchase"></div>
                </div>
              </div>
            `
          const cartIcon = `${git}/paintscratch/img/cart.png`
          const addToCartHtml = /* html */ `
              <img src="${cartIcon}"  />
              <span>Add to Cart</span>  
            `
          addToCart.innerHTML = addToCartHtml
          item.insertAdjacentHTML('afterbegin', kitItemInnerHtml)
          const kitItemImage = item.querySelector('.kit_item_image')
          const kitItemContent = item.querySelector('.kit_item_content')
          const kitItemPurchase = item.querySelector('.kit_item_purchase')
          kitItemImage.append(link)
          kitItemContent.append(clonedLink, description, kitItemPurchase)
          kitItemPurchase.append(price, addToCart)
        })
      }

      #modifyKitPdpItem() {
        const itemContainer = $el('.product-images-popup')
        const pdpTitle = itemContainer.querySelector('h1')

        const closeBtn = itemContainer.querySelector('.right .btn')
        closeBtn.value = 'Close'
        const pdpTopDescription = /* html */ `
            <p class="kit_item_description"></p>
          `
        pdpTitle.insertAdjacentHTML('afterend', pdpTopDescription)

        // for (let key in itemsData) {
        //   if (pdpTitle.textContent.trim() === itemsData[key].pdpTitle) {
        //     $el('.kit_item_description').textContent = itemsData[key].description
        //   }
        // }
        if (
          pdpTitle.textContent.trim().includes(itemsData.sprayPaintKit.pdpTitle) &&
          (!pdpTitle.textContent.trim().includes(itemsData.nonMetalSpayPaintKit.pdpTitle) &&
            !pdpTitle.textContent.trim().includes(itemsData.nonMetalSpayPaintKit.title))
        ) {
          $el('.kit_item_description').textContent = itemsData.sprayPaintKit.description
        }
        if (pdpTitle.textContent.trim().includes(itemsData.paintBottleKit.pdpTitle)) {
          $el('.kit_item_description').textContent = itemsData.paintBottleKit.description

        }
        if (pdpTitle.textContent.trim().includes(itemsData.nonMetalSpayPaintKit.pdpTitle) || pdpTitle.textContent.trim().includes(itemsData.nonMetalSpayPaintKit.title)) {
          $el('.kit_item_description').textContent = itemsData.nonMetalSpayPaintKit.description
        }
        if (pdpTitle.textContent.trim().includes(itemsData.paintPenKit.pdpTitle)) {
          $el('.kit_item_description').textContent = itemsData.paintPenKit.description
        }

        const pdpBottomDescription = $el('.product-images-popup #centercontent p:first-of-type')
        pdpBottomDescription.textContent = pdpBottomDescription.textContent.replace('Includes:', '').trim()

        const listTitle = /* html */ `
            <h3 class="kit_item_list_title">What’s included:</h3>
          `

        pdpBottomDescription.insertAdjacentHTML('afterend', listTitle)

        if (this.device === 'Mobile') {
          $el('.product-images-popup table tr:nth-of-type(2)').before(
            $el('.product-images-popup table tr:nth-of-type(3)')
          )
        }
      }
      #addChipsToItem() {
        if (this.targetPage === 'list') {
          $$el('.kit-item').forEach(item => {
            const title = item.querySelector('h2').textContent.trim()

            if (title.includes(itemsData.sprayPaintKit.title) && !title.includes(itemsData.nonMetalSpayPaintKit.title)) {
              addChips('sprayPaintKit', item)
            }
            if (title.includes(itemsData.paintPenKit.title)) {
              addChips('paintPenKit', item)
            }
            if (title.includes(itemsData.paintBottleKit.title)) {
              addChips('paintBottleKit', item)
            }
            if (title.includes(itemsData.nonMetalSpayPaintKit.title)) {
              addChips('nonMetalSpayPaintKit', item)
            }
          })
        }
        if (this.targetPage === 'item') {
          const kitItemTitle = $el('.product-images-popup h1').textContent
          const kitItemContainer = $el('.product-images-popup .bigimage div')
          const chipsContainer = /* html */ `
              <div class="kit_item_chips"></div>
            `
          kitItemContainer.insertAdjacentHTML('afterbegin', chipsContainer)
          console.log(kitItemTitle)
          if (
            kitItemTitle.includes(itemsData.sprayPaintKit.pdpTitle) &&
            (!kitItemTitle.includes(itemsData.nonMetalSpayPaintKit.pdpTitle) &&
              !kitItemTitle.includes(itemsData.nonMetalSpayPaintKit.title))
          ) {
            addChips('sprayPaintKit', kitItemContainer)
          }
          if (kitItemTitle.includes(itemsData.paintBottleKit.pdpTitle)) {
            addChips('paintBottleKit', kitItemContainer)
          }
          if (kitItemTitle.includes(itemsData.nonMetalSpayPaintKit.pdpTitle) || kitItemTitle.includes(itemsData.nonMetalSpayPaintKit.title)) {
            addChips('nonMetalSpayPaintKit', kitItemContainer)
          }
          if (kitItemTitle.includes(itemsData.paintPenKit.pdpTitle)) {
            addChips('paintPenKit', kitItemContainer)
          }
        }
      }
      #initStyles() {
        const styles = /* html */ `
            <style>
              .regular #kits * {
                box-sizing: border-box;
              }
              .regular #kits {
                background: #FFFCF4;
              }
              .regular #wrapper #page #main .category-heading p {
                border-bottom: none;
              }
              .regular #kits .category-heading {
                margin-top: 0 !important
              }
              .regular #kits .category-heading h2 {
                margin-top: 0 !important;
                color: #0373BD;
                font-family: Arial;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 32px;
              }
              .regular #kits .category-heading h3 {
                display: block;
                margin-top: 8px !important;
                margin-left: 10px;
                color: #1B3D71;
                font-family: Arial;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: 16px;
              }
              .regular #kits .category-heading p {
                color: #000;
                margin-top: 11px !important;
                font-family: Arial;
                font-size: 14px !important;
                font-style: normal;
                font-weight: 400;
                line-height: 22px !important;
                padding: 0 10px !important;
              }
              #kit-container {
                margin-top: 4px;
                padding: 12px;
                display: flex;
                flex-direction: column;
                gap: 4px;
                width: 100%;
              }
              .kit-item {
                margin-top: 0 !important;
                box-sizing: border-box;
                padding: 12px !important;
                width: 100% !important;
                border: 1px solid #D3DAE2 !important;
              }
              .kit_item_chips {
                display: flex;
                gap: 4px;
              }
              .regular #kits .kit_item_chip,
              .product-images-popup .kit_item_chips .kit_item_chip {
                border-radius: 8px;
                background: #767676;
                padding: 4px 10px !important;
                color: #FFF;
                text-align: center;
                font-family: Arial;
                font-size: 14px;
                font-weight: 700;
                line-height: 22px;
                width: fit-content;
              }
              .kit_item_chip-highlighted {
                background: #DC6803 !important;
              }
      
              .kit_item_product {
                margin-top: 13px;
                display: flex;
                gap: 12px;
                width: 100%;
              }
              .kit_item_product img {
                width: 104px;
                height: 104px;
                padding: 0 !important;
                margin-right: 0 !important;
              }
              .kit_item_content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
              }
              .kit_item_content h2 {
                margin: 0 !important;
                color: #253189 !important;
                text-align: center;
                font-family: Arial !important;
                font-size: 20px !important;
                font-weight: 700 !important;
                line-height: 28px !important;
              }
              .kit_item_content p {
                margin-top: 4px !important;
                color: #555 !important;
                font-family: Arial !important;
                font-size: 12px !important;
                font-weight: 400 !important;
                line-height: 20px !important;
                padding: 0 !important;
              }
              .kit_item_purchase {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 16px;
                width: 100%
              }
              .kit_item_purchase img {
                margin-right: 0 !important;
              }
              .kit_item_purchase h3 {
                color: #900;
                text-align: center;
                font-family: Arial;
                font-size: 16px;
                font-weight: 700;
                line-height: 16px;
              }
              .regular #kits .kit_item_purchase .add-to-cart {
                box-sizing: border-box;
                width: 180px !important;
                height: 36px !important;
                display: flex !important;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border-radius: 4px;
                padding: 6px !important;
                border: 2px solid #E68626;
                background: linear-gradient(180deg, #FFC842 0%, #F48818 100%) !important; 
              }
              .kit_item_purchase .add-to-cart img {
                width: 26px !important;
                height: 19px !important;
              }
              .kit_item_purchase .add-to-cart span {
                color: #333;
                text-align: center;
                font-family: Arial;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 24px;
              }
              .product-images-popup * {
                box-sizing: border-box;
              }
              .product-images-popup h1 {
                width: 500px;
                margin: 0 auto;
                color: #253189;
                text-align: left;
                font-family: Arial;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 19.2px;
              }
              .product-images-popup .kit_item_chips {
                position: absolute !important;
                flex-direction: column;
                top: 9px;
                left: 9px;
                z-index: 100;
              }
              .product-images-popup .kit_item_chips .kit_item_chip {
                min-height: min-content !important;
                background: rgba(118, 118, 118, 0.7);
              }
              .product-images-popup #centercontent h2 {
                color: #253189;
                text-align: left;
                font-family: Arial;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: 32px;
              }
              .product-images-popup table {
                margin-top: 17px;
              }
              .product-images-popup .kit_item_description {
                width: 500px;
                margin: 0 auto;
                margin-top: 12px;
                color: #555;
                font-family: Arial;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
              }
              .product-images-popup .bigimage div {
                min-height: min-content;
              }
              .product-images-popup .bigimage img {
                position: initial;
                margin-top: 32px;
                height: 100%;
                object-fit: contain;
              }
              .product-images-popup .kit_item_list_title {
                margin-top: 24px;
                color: #253189;
                text-align: left;
                font-family: Arial;
                font-size: 24px;
                font-weight: 700;
                line-height: 32px;
              }
              .product-images-popup #centercontent p:first-of-type {
                margin-top: 12px;
                color: #333;
                font-family: Arial;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
              }
              .product-images-popup #centercontent ul {
                list-style: none;
                margin: 0;
              }
              .product-images-popup #centercontent ul:first-of-type {
                margin-top: 12px;
              }
              .product-images-popup #centercontent ul:first-of-type li {
                color:  #00E;
                font-family: Arial;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px; /* 150% */
                text-decoration-line: underline;
              }
              .product-images-popup #centercontent ul:last-of-type li {
                color:  #000;
                font-family: Arial;
                font-size: 16px;
                font-weight: 400;
                line-height: 24px;
              }
              @media screen and (max-width: 768px) {
                .product-images-popup * {
                  max-width: 100%
                
                }
                .product-images-popup {
                  padding: 0 20px;
                }
                .product-images-popup table {
                  border: none;
                  width: 100% !important;
                  max-width: 500px !important;
                }
                .product-images-popup .bigimage {
                  border-bottom: none;
                }
                .product-images-popup table tr:nth-of-type(2) {
                  display: flex;
                  justify-content: center;
                  gap: 16px;
                }
                .product-images-popup table tr:nth-of-type(2) td {
                  padding-bottom: 0;
                }
                .product-images-popup table tr:nth-of-type(2) img {
                  width: 52px;
                  height: 52px;
                  object-fit: cover;
                  padding: 0 !important;
                }
                .product-images-popup table tr:last-of-type {
                  color: #333;
                  font-family: Arial;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 22px;
                  display: flex;
                  justify-content: space-around;
                }
                .regular #wrapper #kits {
                  background: #FFFCF4;
                  width: calc(100% + 30px) !important;
                  margin-left: -15px;
                  padding: 16px 20px;
                }
                .regular #kits #kit-container {
                  gap: 16px !important;
                }
                .regular #kits #kit-container .kit-item {
                  padding-top: 40px !important;
                  border: none !important;
                  border-bottom: 1px solid #D3DAE2 !important;
                }
                .regular #kits .kit_item_product {
                  flex-direction: column;
                }
                .regular #kits .kit_item_chips {
                  position: absolute;
                  top: 8px;
                  left: 8px;
                  flex-direction: column;
                }
                .regular #kits .kit_item_content {
                  align-items: center;
                }
                .regular #kits .kit_item_content h2 {
                  margin-top: 4px;
                  text-align: center;
                }
                .regular #kits .kit_item_content p {
                  margin-top: 4px;
                  text-align: center;
                }
                .regular #kits .kit_item_purchase {
                  margin-top: 12px !important;
                  flex-direction: column;
                  gap: 12px;
                }
                .regular #kits .kit_item_purchase .add-to-cart {
                  width: 200px;
                  height: 36px;
                }
              }
            </style>  
          `
        this.#insert(styles, 'head')
      }

      #insert(html, selector, position = 'beforeend') {
        $el(selector).insertAdjacentHTML(position, html)
      }
    }

    const kits = new Kits()
    kits.init()
  })()
