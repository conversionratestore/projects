const dir = 'https://conversionratestore.github.io/projects/7879co/img/'

const $$el = (selector) => document.querySelectorAll(selector)
const $el = (selector) => document.querySelector(selector)

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', ' plp_improvements', 'variant_1')
  }
}, 1000)

const device = window.innerWidth < 769 ? 'mobile' : 'desktop'

const faq = `
<div class="crs_faq col-span-12 pt-10"><h2 class="text-h2 mb-7 w-full text-center text-4xl font-medium">Frequently asked questions</h2><dl class="mt-18 mt-6 space-y-4"><div class="border-b border-black pt-4 last-of-type:border-0" data-headlessui-state="open"><dt><button class="flex w-full items-start justify-between text-left" id="headlessui-disclosure-button-:r1b:" type="button" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-disclosure-panel-:r1c:"><h4 class="text-h4 text-lg font-medium sm:text-2xl">Is pure 24K and 999 Platinum too soft to make jewellery from?</h4><span class="ml-6 flex h-7 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-180 h-6 w-6 transform stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></dt><dd class="pr-12 pb-8 pt-4" id="headlessui-disclosure-panel-:r1c:" data-headlessui-state="open"><p class="text-p">Many believe 24K Gold and 999 Platinum to be too soft for wearable jewellery. This is in fact not true. Whilst pure metals are more malleable and often more expensive to manufacture, pure Gold and Platinum are in fact indestructible. To truly appreciate this jewellery and to witness its strength it must be seen in person. Nevertheless, 7879 offers a lifetime warranty period for any items that experience damage. Items can also be sold back for cash in any quality and at any time based on the current metal value minus a small fee.</p></dd></div><div class="border-b border-black pt-4 last-of-type:border-0" data-headlessui-state="open"><dt><button class="flex w-full items-start justify-between text-left" id="headlessui-disclosure-button-:r1d:" type="button" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-disclosure-panel-:r1e:"><h4 class="text-h4 text-lg font-medium sm:text-2xl">Is 7879 Jewellery Hallmarked and certified?</h4><span class="ml-6 flex h-7 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-180 h-6 w-6 transform stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></dt><dd class="pr-12 pb-8 pt-4" id="headlessui-disclosure-panel-:r1e:" data-headlessui-state="open"><p class="text-p">All our jewellery is officially hallmarked by the Assay office with the full traditional UK marks confirming our purity levels and quality. Every item also comes with a unique authenticity certificate identifying each product. Please note, laser engravings sometimes leave a dark halo around the marks. This can easily be removed by rubbing with a cloth or your finger.</p></dd></div><div class="border-b border-black pt-4 last-of-type:border-0" data-headlessui-state="open"><dt><button class="flex w-full items-start justify-between text-left" id="headlessui-disclosure-button-:r1f:" type="button" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-disclosure-panel-:r1g:"><h4 class="text-h4 text-lg font-medium sm:text-2xl">What is the difference between 7879 jewellery and other jewellery?</h4><span class="ml-6 flex h-7 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-180 h-6 w-6 transform stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></dt><dd class="pr-12 pb-8 pt-4" id="headlessui-disclosure-panel-:r1g:" data-headlessui-state="open"><p class="text-p">Many jewellery companies make their products from 14 or 18 karat gold while charging premium prices. We think there is a better and fairer approach.

Every piece of our jewellery is made from pure 24 karat gold or pure platinum. This purity promise allows us to tie our prices to the current market platinum or gold value. 

Not only are you buying a higher quality product, but you’re also paying a fairer and more transparent price. 
</p></dd></div><div class="border-b border-black pt-4 last-of-type:border-0" data-headlessui-state="open"><dt><button class="flex w-full items-start justify-between text-left" id="headlessui-disclosure-button-:r1h:" type="button" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-disclosure-panel-:r1i:"><h4 class="text-h4 text-lg font-medium sm:text-2xl">How are 7879 items priced?</h4><span class="ml-6 flex h-7 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-180 h-6 w-6 transform stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></dt><dd class="pr-12 pb-8 pt-4" id="headlessui-disclosure-panel-:r1i:" data-headlessui-state="open"><p class="text-p">We use the current market price of gold and platinum to decide our prices. Because our materials are pure, we can determine the price based on the weight of the piece. 

Unlike our competitors, the live prices on our website reflect real-time data fed directly from international metal markets. This means you’re paying the most accurate and fair price at the time you make your purchase.
</p></dd></div><div class="border-b border-black pt-4 last-of-type:border-0" data-headlessui-state="open"><dt><button class="flex w-full items-start justify-between text-left" id="headlessui-disclosure-button-:r1j:" type="button" aria-expanded="true" data-headlessui-state="open" aria-controls="headlessui-disclosure-panel-:r1k:"><h4 class="text-h4 text-lg font-medium sm:text-2xl">Can I return or sell back my 7879 items?</h4><span class="ml-6 flex h-7 items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-180 h-6 w-6 transform stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></button></dt><dd class="pr-12 pb-8 pt-4" id="headlessui-disclosure-panel-:r1k:" data-headlessui-state="open"><p class="text-p">You have 30 days to return your unused jewellery for a full refund.

Alternatively, you can sell back your product to us at any time, for the current market price.  You can track the current value of the items in your personal portfolio. 
</p></dd></div></dl></div>`

const media = window.matchMedia("(max-width: 1024px)").matches;

let visibleTrust = false

class ListingUpdate {
  constructor(device) {
    this.device = device
    this.init()
  }

  init() {
    const globalMutation = new MutationObserver((mutations) => {
      if (this.checkPageUrl() === 'shop') {
     
        this.styleAppend()
        this.addInfo()
        this.sortPrice()
        this.fixFormAndBlocks()
      }

      globalMutation.disconnect()


      globalMutation.observe(document.body, {
        childList: true,
        subtree: true
      })
    })

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true
    })

    
  }

  checkPageUrl() {
    const pageUrl = window.location.href
   
    if (pageUrl.includes('/shop')) {
      return 'shop'
    } else if (pageUrl.includes('/collections')) {
      return 'collections'
    } else {
      return 'other'
    }
  }

  styleAppend() {
    const style =
      /* html */ `
      <style class="crs-style">
        .crs_info + div.grid > .col-span-6 a.block,
        .crs_info + div.grid > .col-span-6 a.block > div {
          height: 100%;
        }
        [name="crs_radio"],
        .crs_btn_sort + button,
        .crs_sort + button:not(.crs_btn_sort),
        .crs_sort + button:not(.crs_btn_sort) + ul {
          display: none;
        }
        .grid > .col-span-6 .flex > .flex.hidden {
          display: flex!important;
        }
        .crs_faq .border-b.hide dd {
          opacity: 0;
          height: 0;
          pointer-events: none;
        }
        .crs_faq .border-b.hide button > span {
          transform: scaleY(-1);
        }
        .crs_faq {
          max-width: 960px;
          margin: 0 auto;
        }
        .crs_sort {
          opacity: 0;
          pointer-events: none;
          min-width: 235px;
          color: var(--Black, #000);
          font-size: 16px;
          font-style: normal;
          font-family: 'Roobert TRIAL', sans-serif;
          font-weight: 400;
          line-height: 22px;
          z-index: 999;
          width: fit-content;
        }
        .crs_sort.active {
          opacity: 1;
          pointer-events: auto;
        }
        .crs_check {
          pointer-events: none;
        }
        .crs_check > span {
            opacity: 0;
            background-color: #000;
            pointer-events: none;
        }
        .crs_check + span {
          pointer-events: none;
        }
        .crs_sort input:checked ~ .crs_check > span {
            opacity: 1;
        }
        .crs_sort label {
          cursor: pointer;
        }
        .crs_info > div {
            color: #000;
            font-style: normal;
            background: #E2D098;
            padding: 4px 12px;
            text-align: center;
            width: calc(100% - 2rem);
            margin: 0 auto 20px;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px; 
            text-transform: uppercase;
        }
        .crs_info svg {
          margin-right: 4px;
        }
        .crs_info+.grid > .col-span-12 {
          order: 200;
        }
        .crs_info+.grid > .col-span-12.crs_faq {
          order: 201;
        }
        .grid > .col-span-6 .flex > .flex.hidden {
          color: var(--Grey, #484850);
          font-size: 14px;
          line-height: 20px;
        }
        .grid > .col-span-6 .border {
          width: fit-content;
        }
        .grid > .col-span-6 .flex > .flex.hidden > p {
          line-height: 20px;
          color: var(--Black, #000);
          font-size: 14px;
          font-weight: 700;
        }
        .flex-center {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media (max-width: 1024px) {
          .grid > .col-span-6 .p-2 > .flex.mt-2 {
            display: block!important;
            width: fit-content;
          }
          .grid > .col-span-6 .flex > .flex.hidden {
            margin-top: 8px;
          }
        }
        @media (min-width: 1024px) {
          .crs_info {
            position: relative;
            z-index: 2;
            margin: 0 3rem 16px;
          }
          .crs_info:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 1px;
            width: 100%;
            z-index: -1;
            background: #E2D098;
          }
          .crs_info > div {
            padding: 6px 20px;
            margin: 0 auto;
            width: fit-content;
          }
        }
      </style>
    `
    if (!$el('.crs-style')) {
      document.head.insertAdjacentHTML('beforeend', `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">`)

      $el('body').insertAdjacentHTML('afterbegin', style)
    } 
  }

  handleVisibility(el, eventParams) {
    let isVisible = false;
    let entryTime;
    const config = {
      root: null,
      threshold: 0, // Trigger when any part of the element is out of viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            // The element has become visible
            isVisible = true;
            entryTime = new Date().getTime();
          }
        } else if (isVisible) {
          // The element is out of the viewport, calculate visibility duration
          isVisible = false;
          const exitTime = new Date().getTime();
          const visibilityDuration = (exitTime - entryTime) / 1000; // Convert to seconds
          const roundedDuration = Math.round(visibilityDuration);

          if (roundedDuration) {
            const eventData = eventParams;
            eventData[1] = roundedDuration;
            this.pushDataLayer(eventData);
            observer.disconnect();
          }
        }
      });
    }, config);

    observer.observe(el);
  }

  pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };
  
    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
    console.log( event_name + ' / ' +
      event_desc + ' / ' +
      event_type + ' / ' +
      event_loc)
  }
  addInfo() {
    const htmlInfo = `
    <div class=" crs_info">
      <div class="flex-center">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.9622 6.66458C21.9509 6.07062 21.9401 5.5095 21.9401 4.96667C21.9401 4.54139 21.5955 4.19661 21.1701 4.19661C17.8768 4.19661 15.3694 3.25016 13.2794 1.21804C12.9804 0.927268 12.5046 0.927371 12.2057 1.21804C10.1159 3.25016 7.60893 4.19661 4.31586 4.19661C3.89059 4.19661 3.54581 4.54139 3.54581 4.96667C3.54581 5.5096 3.53513 6.07092 3.52374 6.66499C3.41819 12.1925 3.27362 19.7628 12.4904 22.9575C12.5721 22.9858 12.6573 23 12.7425 23C12.8277 23 12.9131 22.9858 12.9947 22.9575C22.2121 19.7627 22.0678 12.1922 21.9622 6.66458ZM12.7426 21.4128C4.83806 18.5413 4.95758 12.251 5.06364 6.69436C5.07 6.36087 5.07617 6.03766 5.08048 5.72081C8.1648 5.59061 10.6312 4.65597 12.7426 2.81667C14.8542 4.65597 17.3211 5.59072 20.4056 5.72081C20.4099 6.03755 20.4161 6.36057 20.4224 6.69385C20.5284 12.2507 20.6478 18.5412 12.7426 21.4128Z" fill="black"/>
          <path d="M15.3943 9.32486L11.6776 13.0414L10.0916 11.4553C9.79088 11.1547 9.30328 11.1547 9.00265 11.4553C8.70192 11.7562 8.70192 12.2437 9.00265 12.5444L11.1331 14.6749C11.2834 14.8252 11.4806 14.9004 11.6776 14.9004C11.8746 14.9004 12.0718 14.8252 12.2221 14.6749L16.4832 10.4139C16.784 10.1132 16.784 9.62559 16.4833 9.32497C16.1826 9.02423 15.695 9.02413 15.3943 9.32486Z" fill="black"/>
        </svg>
      
        Lifetime warranty & 30-day free returns</div>
    </div>`

    if (!$el('.mobile-view')) return
    if ($el('.crs_info')) return
    $el('.mobile-view').parentElement.insertAdjacentHTML('afterend', htmlInfo)

    this.handleVisibility($el('.crs_info'), ['exp_plimp_lifetime_war_und_fil', ' {{focusTime}} ', 'Visibility ', 'Under the filter']);
  }
  sortPrice() {
    const htmlSort = `
    <button type="button" class="crs_btn_sort relative h-10 w-full px-3 text-left pr-10 border-black">
      <p class="text-p block truncate ${media ? 'font-medium': ''}">${media ? 'SORT' : 'Sort by'}</p>
      <span class="absolute inset-y-0 flex h-full items-center justify-center right-3 w-6 border-black"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current"><path d="M16.75 10.75L12 15.25L7.25 10.75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
    </button>
    <div class="crs_sort absolute flex w-full flex-col gap-4 bg-white py-6 px-6">
      <label class="flex items-center gap-4">
          <input type="radio" name="crs_radio" class="crs_low">
          <span class="crs_check border-platinum-18 flex h-6 w-6 flex-shrink-0 items-center justify-center border"><span class="h-[14px] w-[14px]"></span></span>
          <span class="">Price low to high</span>
      </label>
      <label class="flex items-center gap-4">
          <input type="radio" name="crs_radio">
          <span class="crs_check border-platinum-18 flex h-6 w-6 flex-shrink-0 items-center justify-center border"><span class="h-[14px] w-[14px]"></span></span>
          <span class="">Price high to low</span>
      </label>
      <label class="flex items-center gap-4">
          <input type="radio" name="crs_radio">
          <span class="crs_check border-platinum-18 flex h-6 w-6 flex-shrink-0 items-center justify-center border"><span class="h-[14px] w-[14px]"></span></span>
          <span class="">Best Seller</span>
      </label>
      <label class="flex items-center gap-4">
          <input type="radio" name="crs_radio">
          <span class="crs_check border-platinum-18 flex h-6 w-6 flex-shrink-0 items-center justify-center border"><span class="h-[14px] w-[14px]"></span></span>
          <span class="">Weight high to low</span>
      </label>
      <label class="flex items-center gap-4">
          <input type="radio" name="crs_radio">
          <span class="crs_check border-platinum-18 flex h-6 w-6 flex-shrink-0 items-center justify-center border"><span class="h-[14px] w-[14px]"></span></span>
          <span class="">Weight low to high</span>
      </label>
      <label class="flex items-center gap-4">
          <input type="radio" name="crs_radio">
          <span class="crs_check border-platinum-18 flex h-6 w-6 flex-shrink-0 items-center justify-center border"><span class="h-[14px] w-[14px]"></span></span>
          <span class="">New in</span>
      </label>
    </div>`
    if ($el('.crs_sort')) return

    let buttonSort = ''

    if (media) {
      buttonSort = $el('.mobile-view button.relative:not(.crs_btn_sort)')
    } else {
      $$el('.desktop-view button.relative:not(.crs_btn_sort)').forEach(item => {
        if (item.innerText.includes('Weight high to low') ||
        item.innerText.includes('Weight low to high') ||
        item.innerText.includes('New in') ||
        item.innerText.includes('Price low to high') ||
        item.innerText.includes('Price high to low') ||
        item.innerText.includes('Sort by') ||
        item.innerText.includes('Best Seller')
        ) {
          buttonSort = item

        }
      })
    }
    if (buttonSort == null || buttonSort == undefined || buttonSort == '') return
    buttonSort.parentElement.insertAdjacentHTML('afterbegin', htmlSort)

    $$el('.crs_sort input').forEach((item, i) => {
      item.addEventListener('input', (e) => {
        e.stopImmediatePropagation()

        const elements = $$el('.col-span-6 .flex > .hidden > p.font-semibold');
        if (item.checked) {
          if (i < 2) {

            const elementsArray = Array.from(elements);
  
            elementsArray.sort((a, b) => {
     
              const aValue = parseFloat(a.innerText.replace(/[^\d.]/g, '')); // Перетворюємо текст на число
              const bValue = parseFloat(b.innerText.replace(/[^\d.]/g, ''));
  
              if (item.classList.contains('crs_low')) {
                return aValue - bValue;
              } else {
                return bValue - aValue;
              }
            });
  
            elementsArray.forEach((element, index) => {
              const isIndexEven = index % (media ? 2 : 4) === 0;

              element.closest('.col-span-6').style.order = index + 1;
              
              if (element.closest('.col-span-6').nextElementSibling && 
                element.closest('.col-span-6').nextElementSibling.classList.contains('row-span-1')
              ) {
                element.closest('.col-span-6').nextElementSibling.style.order = index + (isIndexEven ? 2 : 1);
              }
            });

          } else {
            elements.forEach((element, index) => {
              element.closest('.col-span-6').style = '';
            });

            if (!buttonSort.parentElement.querySelector('ul:not(.crs_sort)')) {
              buttonSort.click()
            }
            
            const waitSort = setInterval(() => {
              if (buttonSort.parentElement.querySelectorAll('ul:not(.crs_sort) li')[i - 2]) {
                clearInterval(waitSort)

                buttonSort.parentElement.querySelectorAll('ul:not(.crs_sort) li')[i - 2].click()
              }
            })
        
          }

          $el('.crs_sort').classList.remove('active')
          $el('.crs_btn_sort').classList.remove('border-b')

          this.pushDataLayer(['exp_plimp_sort_filter', item.parentElement.innerText, 'Menu item', 'Sort filter']);
        }
      })
    })

    $el('.crs_btn_sort').addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('border-b')
      $el('.crs_sort').classList.toggle('active')
    })
  }
  fixFormAndBlocks() {

    $$el('.col-span-12 > div').forEach(item => {
      if (item.innerText.includes('Hallmarked by Assay') ) {
        if (!$el('.crs_lifetime')) {
          item.insertAdjacentHTML('afterbegin', `
          <div class="crs_lifetime bg-platinum-1 group flex flex-1 flex-row content-center gap-4 p-4 sm:flex-col sm:p-0">
            <div class="relative mb-0 !h-auto w-6 shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 4.628L12.0045 2L21 4.628V10.017C20.9999 12.7788 20.1308 15.4707 18.5158 17.7111C16.9008 19.9515 14.6217 21.6269 12.0015 22.5C9.38048 21.627 7.10065 19.9514 5.48505 17.7105C3.86946 15.4696 3.00004 12.7771 3 10.0145V4.628Z" stroke="#212121" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M7.5 11.5L11 15L17 9" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex flex-col items-center">
              <h4 class="text-h4 w-full text-left font-bold sm:text-center sm:text-lg">Lifetime warranty &<br> 30 Day free returns</h4>
              <h4 class="text-h4 mt-0 w-full text-left sm:text-center sm:text-base">7879 jewellery is designed to last. Our lifetime warranty guarantees your timeless investment will be cared for, forever.</h4>
            </div>
          </div>`)

          this.handleVisibility($el('.crs_lifetime'), ['exp_plimp_lifetime_war_und_prod', ' {{focusTime}} ', 'Visibility ', 'Under the products']);

          item.parentElement.insertAdjacentHTML('afterend', faq)

          $$el('.crs_faq button').forEach(button => {
            button.addEventListener('click', () => {
              button.closest('.border-b').classList.toggle('hide')
              this.pushDataLayer(['exp_plimp_faq_button', 'FAQ', 'Button', button.innerText]);
            })

            this.handleVisibility(button, ['exp_plimp_faq_visibility', ' {{focusTime}} ', 'Visibility ', button.innerText]);

          })
        }

        item.querySelectorAll('.bg-platinum-1').forEach(el => {
          el.classList.remove('items-center')

          el.querySelector('h4:last-child').style = `
          color: var(--Grey, #484850);
          font-size: 16px;
          line-height: 22px;
          font-family: 'Roobert TRIAL', sans-serif;
          text-align: left;`
       
          if (!media) {
            el.style = 'width: 25%; padding: 24px;'
            el.querySelector('h4:first-child').style = `
            text-align: left;
            font-weight: 600;
            line-height: 24px;
            margin: 0 auto 8px 0;
            max-width: 180px;`
          }
        })

        if (!media) {
          item.style = 'padding: 0!important;gap: 0;'
        }
      }

    
    })

    if ($el('.col-span-12 .trustpilot-widget') && visibleTrust == false) {
      visibleTrust = true
      console.log($el('.trustpilot-widget'))
      this.handleVisibility($el('.col-span-12 .trustpilot-widget'), ['exp_plimp_trustpilot_visibility', ' {{focusTime}} ', 'Visibility ', 'Trustpilot widget']);

    }
  }
}

new ListingUpdate(device)

const hjInterval = setInterval(function () {
  if (typeof hj == 'function') {
    clearInterval(hjInterval)
    console.log('imp_plp event')
    hj('event', 'imp_plp')
  }
}, 100)