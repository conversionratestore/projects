; (function () {
  console.log('%c EXP: Geeni (DEV: AK)', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')

  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/geeni/img'

  const style = /*html*/`
      <style>
        :root {
          --swiper-scrollbar-size: 3px;
          --swiper-scrollbar-drag-bg-color: #023F88;
        }

        [id*="0ba37192-7466-420d-ada7-f85e8f0f34f7"] {
          display: none !important;
        }

        [data-section-type="related-products"] {
          display: none !important;
        }

        .product-container .swiper-scrollbar.swiper-scrollbar-horizontal {
          --swiper-scrollbar-sides-offset: var(--gutter);
        }

        .swiper-scrollbar {
          background:#E3E3E3;
        }

        .product-container{
          background: #F7F7F7;
          padding-block: 60px;
        }

        .product-container .swiper {
          padding-inline: var(--gutter);
        }

        .product-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 14px;
          padding-bottom: 40px;
        }

        .upsells-wrapper .product-info {
          padding-bottom: 20px;
        }

        .product-info p{
          margin-bottom: 0;
        }

        .product-image {
          display: block;
        }

        .product-title {
          color: var(--font-h, #1B1B1B);
          font-family: Avenir Next;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px; /* 157.143% */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 3em;
          width: fit-content;
          min-height: 42px;
        }

        .product-container-title {
          color: #000;
          text-align: center;
          font-family: Avenir Next;
          font-size: 38px;
          font-style: normal;
          font-weight: 500;
          line-height: 50px; /* 131.579% */
          margin: 0;
          margin-bottom: 40px;
        }
        
        .product-image img {
          display: block;
          border-radius: 8px;
        }

        .upsells-wrapper  .product-image img {
          height: 163px;
        }

        .product-rating {
          display: flex;
          align-content: center;
          justify-content: flex-start;
          gap: 6px;
          align-items: center;
          color: var(--Main-Blue, #023F88);
          font-family: Nunito Sans;
          font-size: 14px;
          font-weight: 400;
          margin-top: 2px;
        }

        .product-container .product-rating {
          display: none;
        }

        .product-rating  p {
          margin: 0;
          color: var(--Main-Blue, #023F88);
font-family: Nunito Sans;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 138.462% */
margin-top: 2px;
        }

        .product-quantity {
          color: var(--font-body, #5B5B5B);
          font-family: Avenir Next;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 157.143% */
          border: 1px solid #E7E7E7;
          width: 100%;
          padding: 5px 8px;
          background: #fff;
          border-radius: 0;

          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url(${IMAGE_DIR_URL}/arrow-down.svg);
          background-size: 12px; /* Adjust the size as needed */
          background-repeat: no-repeat;
          background-position: calc(100% - 8px) center;
          padding-right: 8px; /* Adjust the padding to make room for the arrow */
          cursor: pointer;
        }

        .product-quantity-custom {
          display: none;
          border: 1px solid #E7E7E7;
          padding: 5px 8px;
          position: relative;
          cursor: pointer;
          background-color: #fff; /* Add the background color here */
        }

        .product-quantity-custom::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 10px;
          height: 7px;
          background: url(${IMAGE_DIR_URL}/arrow-down.svg) center/cover no-repeat; /* Adjust the background properties */
        }

        .product-quantity-custom__value {
          margin: 0;
          color: var(--font-body, #5B5B5B);
          font-family: Avenir Next;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 157.143% */
        }

        .product-price {
          color: var(--font-h, #1B1B1B);
          font-family: Avenir Next;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 32px; /* 200% */
        }

        .product-price-current {
          margin-right: 3px;
        }

        .product-price-old {
          text-decoration: line-through;
        }

        .product-add-to-cart {
          border-radius: 30px;
          border: 1px solid var(--Main-Blue, #023F88);
          color: var(--Main-Blue, #023F88);
          text-align: center;
          font-family: Avenir Next;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 22px; /* 157.143% */
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 7px;
          width: 100%;
          cursor: pointer;
        }
        
        .product-add-to-cart.sold-out {
          cursor: auto;
          border: 1px solid var(--Border, #D9D9D9);
          background: var(--bg-light-grey, #F7F7F7);
          color: var(--font-body, #5B5B5B);
        }

        .bundle__footer__btn.sold-out {
          cursor: auto;
          border: 1px solid var(--Border, #D9D9D9);
          background: #fff;
          color: var(--font-body, #5B5B5B);
        }

        .discount-new {
          margin-inline: 20px;
          padding: 10px 14px;
          border-radius: 10px;
          background: var(--bg-light-grey, #F7F7F7);
          display: flex;
          flex-direction:row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .discount-new > div {
          display: flex;
          gap: 12px;
          align-items:center;
        }

  .discount-new p {
    color: var(--font-h, #1B1B1B);
    font-family: Avenir Next;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.356px; /* 148.894% */
    margin: 0;
  }

  .discount-new p b {
    font-weight: 700;
  }

  .circle {
    position: relative;
    text-align: center;
    width: 33px;
    height: 33px;
    border-radius: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.circle-border {
  flex-shrink: 0;
    position: relative;
    text-align: center;
    width: 36px;
    height: 36px;
    margin-left: 30%;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
}

.circle-border[data-circle-style="small"] {
  background: conic-gradient(
      from 0deg at 50% 50%,
      #00B0EE 0deg 90deg,
      #CDE0EC 90deg 360deg
    );
  }

  .circle-border[data-circle-style="medium"] {
    background: conic-gradient(
      from 0deg at 50% 50%,
      #00B0EE 0deg 180deg,
      #CDE0EC 180deg 360deg
    );
  }

  .circle-border[data-circle-style="large"] {
    background: conic-gradient(
      from 0deg at 50% 50%,
      #00B0EE 0deg 270deg,
      #CDE0EC 270deg 360deg
    );
  }

  .circle-border[data-circle-style="full"] {
    background: #00B0EE;
  }

        .cart-drawer__message {
          background: var(--bg-light-blue, #E8F8FE);
          padding-block: 12px !important;
        }

        .cart__message__default,
        .cart__message__success {
          color: var(--font-h, #1B1B1B);
          font-family: Avenir Next;
          font-size: 14px !important;
          font-style: normal;
          font-weight: 500 !important;
          line-height: 19.356px; /* 138.259% */
        }

        #cart-drawer .discount {
          display: none !important;
        }

        .cart-upsells-container, 
        .product-container {
          display: none;
        }

        .cart-upsells-container.container-visible, 
        .product-container.container-visible {
          display: block;
        }

        .cart-upsells-container {
          margin-bottom: 30px;
        }

        .cart-upsells-container .swiper-scrollbar.swiper-scrollbar-horizontal {
          --swiper-scrollbar-sides-offset: 20px;
        }

        .upsells-wrapper > div {
          max-width: 165px;
        }

        .cart-upsells-container h2 {
          padding-left: 20px;
          color: var(--font-h, #1B1B1B);
          font-family: Avenir Next;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px; /* 140% */
          text-transform: capitalize;
        }

        .cart-upsells-container .swiper {
          padding-inline: 20px;
        }

        .fixed-quantity-custom {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 10000;
          background: #fff;
          width: 100%;
          text-align: center;
          border: 1px solid #E7E7E7;
        }

        .fixed-quantity-custom p {
          padding: 11px 0;
          color: var(--font-body, #5B5B5B);
          font-family: Avenir Next;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px; /* 162.5% */
          margin: 0;
        }

        .fixed-quantity-custom p.selected-value {
          background: #F1F4F5;
          color: var(--font-h, #1B1B1B);
          text-align: center;
          font-family: Avenir Next;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px; /* 162.5% */
        }

        @media only screen and (min-width: 768px) and (max-width: 1023px) {
          .product-container .swiper-scrollbar.swiper-scrollbar-horizontal {
            --swiper-scrollbar-sides-offset: var(--gutter-mobile);
          }

          .product-container .swiper {
            padding-inline: var(--gutter-mobile);
          }
        }

        @media (max-width: 768px) {
          .product__description .title {
        padding-top: 22px;
      }

      .a-list-item strong {
        text-transform: uppercase;
      }

          .product-container {
            display: block;
            padding: 30px 20px;
          }

          .product-container-title {
            color: var(--font-h, #1B1B1B);
            text-align: center;
            font-family: Avenir Next;
            font-size: 28px;
            font-style: normal;
            font-weight: 500;
            line-height: 35px; /* 125% */
            margin-bottom: 20px;
          }
          

          .product-container .swiper {
            padding-inline: 0;
          }

          .product-container .swiper-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(calc(50% - 20px), 1fr));
            gap: 20px;
          }


          .product-info {
            padding-bottom: 0;
          }       

          .product-quantity {
            display: none;
          }

          .product-quantity-custom {
            display: block;
          }

          .product-quantity-custom .sticky-options {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            flex-direction: row;

          }
        }

      </style>`

  const svgObj = {
    starFull: /*html*/`
<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-labelledby="8094251385084-ada-star-ratings-text" width="15" height="15">
									<defs>
										<linearGradient aria-hidden="true" id="yotpo_stars_gradient_0.27304827014122646">
											<stop offset="100%" stop-color="rgba(0,179,240,1)"></stop>
											<stop stop-opacity="1" offset="100%" stop-color="#FFFFFF"></stop>
										</linearGradient>
									</defs>
									<path aria-hidden="true" style="pointer-events: none;" d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z" stroke="rgba(0,179,240,1)" fill="url('#yotpo_stars_gradient_0.27304827014122646')"></path>
								</svg>
    `,
    starHalf: /*html*/`
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-labelledby="8094251385084-ada-star-ratings-text" width="15" height="15">
									<defs>
										<linearGradient aria-hidden="true" id="yotpo_stars_gradient_0.7907023128550279">
											<stop offset="51%" stop-color="rgba(0,179,240,1)"></stop>
											<stop stop-opacity="1" offset="51%" stop-color="#FFFFFF"></stop>
										</linearGradient>
									</defs>
									<path aria-hidden="true" style="pointer-events: none;" d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z" stroke="rgba(0,179,240,1)" fill="url('#yotpo_stars_gradient_0.7907023128550279')"></path>
								</svg>
    `,
    starEmpty: /*html*/`
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-labelledby="8094251385084-ada-star-ratings-text" width="15" height="15">
									<defs>
										<linearGradient aria-hidden="true" id="yotpo_stars_gradient_0.9260399311555312">
											<stop offset="0%" stop-color="rgba(0,179,240,1)"></stop>
											<stop stop-opacity="1" offset="0%" stop-color="#FFFFFF"></stop>
										</linearGradient>
									</defs>
									<path aria-hidden="true" style="pointer-events: none;" d="M9 14.118L14.562 17.475L13.086 11.148L18 6.891L11.529 6.342L9 0.375L6.471 6.342L0 6.891L4.914 11.148L3.438 17.475L9 14.118Z" stroke="rgba(0,179,240,1)" fill="url('#yotpo_stars_gradient_0.9260399311555312')"></path>
								</svg>
    `,
    discount: /*html*/`
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M21.7654 10.566L20.2876 9.08824C20.0348 8.83546 19.8306 8.33963 19.8306 7.98963V5.88963C19.8306 5.03407 19.1306 4.33407 18.2751 4.33407H16.1848C15.8348 4.33407 15.339 4.1299 15.0862 3.87713L13.6084 2.39935C13.0056 1.79657 12.014 1.79657 11.4112 2.39935L9.91396 3.87713C9.67091 4.1299 9.17508 4.33407 8.81535 4.33407H6.72508C5.86952 4.33407 5.16952 5.03407 5.16952 5.88963V7.9799C5.16952 8.3299 4.96535 8.82574 4.71258 9.07852L3.2348 10.5563C2.63202 11.1591 2.63202 12.1507 3.2348 12.7535L4.71258 14.2313C4.96535 14.4841 5.16952 14.9799 5.16952 15.3299V17.4202C5.16952 18.2757 5.86952 18.9757 6.72508 18.9757H8.81535C9.16535 18.9757 9.66119 19.1799 9.91396 19.4327L11.3917 20.9105C11.9945 21.5132 12.9862 21.5132 13.589 20.9105L15.0667 19.4327C15.3195 19.1799 15.8154 18.9757 16.1654 18.9757H18.2556C19.1112 18.9757 19.8112 18.2757 19.8112 17.4202V15.3299C19.8112 14.9799 20.0154 14.4841 20.2681 14.2313L21.7459 12.7535C22.3779 12.1605 22.3779 11.1688 21.7654 10.566ZM8.61119 8.74796C8.61119 8.21324 9.04869 7.77574 9.58341 7.77574C10.1181 7.77574 10.5556 8.21324 10.5556 8.74796C10.5556 9.28268 10.1279 9.72018 9.58341 9.72018C9.04869 9.72018 8.61119 9.28268 8.61119 8.74796ZM10.0987 15.0966C9.95285 15.2424 9.76813 15.3105 9.58341 15.3105C9.39869 15.3105 9.21396 15.2424 9.06813 15.0966C8.78619 14.8146 8.78619 14.348 9.06813 14.066L14.9015 8.23268C15.1834 7.95074 15.6501 7.95074 15.932 8.23268C16.214 8.51463 16.214 8.98129 15.932 9.26324L10.0987 15.0966ZM15.4167 15.5535C14.8723 15.5535 14.4348 15.116 14.4348 14.5813C14.4348 14.0466 14.8723 13.6091 15.407 13.6091C15.9417 13.6091 16.3792 14.0466 16.3792 14.5813C16.3792 15.116 15.9515 15.5535 15.4167 15.5535Z" fill="#00B0EE"/>
</svg>
    `,
    lock: /*html*/`
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <mask id="mask0_1605_10966" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
    <rect y="0.5" width="20" height="20" fill="#D9D9D9"/>
  </mask>
  <g mask="url(#mask0_1605_10966)">
    <path d="M5.00016 18.8359C4.54183 18.8359 4.14947 18.6727 3.82308 18.3464C3.49669 18.02 3.3335 17.6276 3.3335 17.1693V8.83594C3.3335 8.3776 3.49669 7.98524 3.82308 7.65885C4.14947 7.33247 4.54183 7.16927 5.00016 7.16927H5.8335V5.5026C5.8335 4.34983 6.23975 3.36719 7.05225 2.55469C7.86475 1.74219 8.84738 1.33594 10.0002 1.33594C11.1529 1.33594 12.1356 1.74219 12.9481 2.55469C13.7606 3.36719 14.1668 4.34983 14.1668 5.5026V7.16927H15.0002C15.4585 7.16927 15.8509 7.33247 16.1772 7.65885C16.5036 7.98524 16.6668 8.3776 16.6668 8.83594V17.1693C16.6668 17.6276 16.5036 18.02 16.1772 18.3464C15.8509 18.6727 15.4585 18.8359 15.0002 18.8359H5.00016ZM5.00016 17.1693H15.0002V8.83594H5.00016V17.1693ZM10.0002 14.6693C10.4585 14.6693 10.8509 14.5061 11.1772 14.1797C11.5036 13.8533 11.6668 13.4609 11.6668 13.0026C11.6668 12.5443 11.5036 12.1519 11.1772 11.8255C10.8509 11.4991 10.4585 11.3359 10.0002 11.3359C9.54183 11.3359 9.14947 11.4991 8.82308 11.8255C8.49669 12.1519 8.3335 12.5443 8.3335 13.0026C8.3335 13.4609 8.49669 13.8533 8.82308 14.1797C9.14947 14.5061 9.54183 14.6693 10.0002 14.6693ZM7.50016 7.16927H12.5002V5.5026C12.5002 4.80816 12.2571 4.21788 11.771 3.73177C11.2849 3.24566 10.6946 3.0026 10.0002 3.0026C9.30572 3.0026 8.71544 3.24566 8.22933 3.73177C7.74322 4.21788 7.50016 4.80816 7.50016 5.5026V7.16927Z" fill="#1B1B1B"/>
  </g>
</svg>
    `,
  }

  const upsellsObj = {
    "4811210457167": {
      rate: "4.6",
    },
    "8094794187004": {
      rate: "3.8",
    },
    "2451441188943": {
      rate: "4.5",
    },
    "4660038041679": {
      rate: "4.9",
    },
    "4660117110863": {
      rate: "4.9",
    },
    "4381990584399": {
      rate: "4.8",
    },
    "8094251385084": {
      rate: "2.5",
    },
    "4381955326031": {
      rate: "4.1",
    },
    "4850423136335": {
      rate: "4",
    },
    "4810374414415": {
      rate: "4.9",
    },
    "4680310063183": {
      rate: "4.7",
    },
    "4380150857807": {
      rate: "4.5",
    },
    "7607582556412": {
      rate: "4.5",
    },
  }

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  start()
  // -------------------------------------
  // FUNCTIONS
  // -------------------------------------
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

  function handleVisibility(el, eventParams) {
    let isVisible = false
    let entryTime
    const config = {
      root: null,
      threshold: 0, // Trigger when any part of the element is out of viewport
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            // The element has become visible
            isVisible = true
            entryTime = new Date().getTime()
          }
        } else if (isVisible) {
          // The element is out of the viewport, calculate visibility duration
          isVisible = false
          const exitTime = new Date().getTime()
          const visibilityDuration = (exitTime - entryTime) / 1000 // Convert to seconds
          const roundedDuration = Math.round(visibilityDuration)

          if (roundedDuration) {
            const eventData = eventParams
            eventData[1] = roundedDuration
            pushDataLayer(eventData)

            observer.disconnect()
          }
        }
      })
    }, config)

    observer.observe(el)
  }

  function getStarRatingSvg(rating) {
    const maxRating = 5 // Assuming a maximum rating of 5 stars
    const fullStars = Math.floor(rating)
    const remainingStars = Math.round((rating - fullStars) * 2) // Convert remaining rating to half and empty stars

    const starFullHtml = svgObj.starFull
    const starHalfHtml = svgObj.starHalf
    const starEmptyHtml = svgObj.starEmpty

    let resultHtml = ''

    for (let i = 0; i < fullStars; i++) {
      resultHtml += starFullHtml
    }

    if (remainingStars === 1) {
      resultHtml += starHalfHtml
    } else if (remainingStars === 2) {
      resultHtml += starFullHtml
    }

    const emptyStars = maxRating - fullStars - (remainingStars > 0 ? 1 : 0)

    for (let i = 0; i < emptyStars; i++) {
      resultHtml += starEmptyHtml
    }

    return resultHtml
  }

  function changePriceAccordingToQty(select, qty) {
    const productItem = select.closest('.product-item')
    const priceCurrent = parseFloat(productItem.dataset.productPriceCurrent.replace('$', ''))
    const priceOld = parseFloat(productItem.dataset.productPriceOld.replace('$', ''))

    const priceCurrentElement = productItem.querySelector('.product-price-current')
    const priceOldElement = productItem.querySelector('.product-price-old')

    const quantity = qty

    const newPriceCurrent = priceCurrent * quantity
    const newPriceOld = priceOld ? priceOld * quantity : ''

    if (priceCurrentElement) {
      priceCurrentElement.innerText = `$${newPriceCurrent.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
    }

    if (priceOldElement) {
      priceOldElement.innerText = priceOld ? `$${newPriceOld.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : ''
    }
  }

  function cartLogic() {
    const productUpsellHtml = (product) => {
      return /*html*/`
        <div class="product-item swiper-slide" data-product-id="${product.id}" data-product-price-current="${product.currentPrice}" data-product-price-old="${product.oldPrice}">
                <a href="${product.url}" class="product-link product-image" target="_blank">
                  <img src="https://cdn.shopify.com/s/files/1/2612/6532/${product.img}" alt="${product.title}">
                </a>

                <div class="product-info">
                  <a href="${product.url}" class="product-link product-title" target="_blank">
                    ${product.title}
                  </a>              

                  <div class="product-rating">
                  ${getStarRatingSvg(product.rate)}
                    <p>${product.rate}</p>
                  </div>

                  <!-- <select name="quantity" class="product-quantity">
                    <option value="1">Quantity, 1</option>
                    <option value="2">Quantity, 2</option>
                    <option value="3">Quantity, 3</option>
                    <option value="4">Quantity, 4</option>
                    <option value="5">Quantity, 5</option>
                  </select> -->

                  <div class="product-price">
                    <span class="product-price-current">${product.currentPrice}</span>
                    ${product.oldPrice ? `<span class="product-price-old">${product.oldPrice}</span>` : ''}
                  </div>

                  ${product.available ? '<button class="product-add-to-cart">Add to cart</button>' : '<button class="product-add-to-cart sold-out">Sold out</button>'}
                </div>
              </div>
      `
    }

    const getCart = () => {
      return new Promise((resolve, reject) => {
        fetch(`https://mygeeni.com/cart.js`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'GET'
        })
          .then(res => res.json())
          .then(data => {
            resolve(data)
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      })
    }

    const spendDiscount = (total) => {
      let circleStyle = `small`

      let discount = ``
      if (total >= 0 && total <= 99.00) {
        discount = `<p>Spend $99 more and receive a<br> 
        <b>10% discount</b> on your entire order</p>`
      } else if (total > 99.00 && total <= 149.00) {
        discount = `<p>Spend $149 more and receive a<br> 
        <b>15% discount</b> on your entire order</p>`

        circleStyle = `medium`
      } else if (total > 149.00 && total < 199.00) {
        discount = `<p>Spend $199 more and receive a<br> 
        <b>20% discount</b> on your entire order</p>`

        circleStyle = `large`

      } else if (total >= 199.00) {
        circleStyle = `full`

        discount = `<p>Spend $199 more and receive a<br> 
        <b>20% discount</b> on your entire order</p>`
      }

      let discountHTML = /*html*/`
      <div class="discount-new">
          <div>
            ${svgObj.lock}
            ${discount}
          </div>
          <div>
          <div class="circle-border" data-circle-style="${circleStyle}">
            <div class="circle">
              ${svgObj.discount}
            </div>
          </div>          
          </div>  
      </div>`

      if (!document.querySelector('.cart-drawer .discount-new')) {
        waitForElement('.cart-upsells-container').then(el => el.insertAdjacentHTML('beforebegin', discountHTML))
      } else {
        document.querySelector('.cart-drawer .discount-new p').innerHTML = discount

        document.querySelector('.cart-drawer .discount-new .circle-border').dataset.circleStyle = circleStyle
      }
    }

    const handleCartMutation = (mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const targetElement = mutation.target
          if (targetElement.classList.contains('is-open') && !targetElement.classList.contains('is-loading')) {
            getCart().then(data => {
              if (data.items.length > 0) {
                document.querySelector('.cart-drawer .discount-new')?.remove()
                document.querySelectorAll('.cart-upsells-container')?.forEach(el => el.remove())

                const items = data.items

                const req = /(\d{1,})(\d{2})$/
                let total = +(data['total_price'].toString().replace(req, "$1.$2"))

                spendDiscount(total)

                const filteredItems = Object.entries(upsellsObj).filter(([productId, upsellItem]) => {
                  const isNotInCart = !items.some((cartItem) => String(cartItem.product_id) === productId)
                  return isNotInCart
                }).map(([productId, upsellItem]) => upsellItem)

                if (filteredItems.length) {
                  const cartUpsells = /*html*/`
                <div class="cart-upsells-container">
                  <h2>Buy More For More Savings</h2>

                  <div class="swiper">
                    <div class="upsells-wrapper swiper-wrapper">
                      ${filteredItems.map(product => productUpsellHtml(product)).join('')}
                    </div> 
                    <div class="swiper-scrollbar"></div>     
                  </div>
                  
                </div>
                  `

                  if (!document.querySelector('.cart-upsells')) {
                    waitForElement('.cart-drawer__items').then(el => el.insertAdjacentHTML('afterend', cartUpsells))

                    const productsCartSlider = new Slider('.cart-upsells-container', filteredItems.length - 1, 'cart')
                    productsCartSlider.init()
                  }
                }
              }
              else {
                document.querySelector('.cart-drawer .discount-new')?.remove()
                document.querySelectorAll('.cart-upsells-container')?.forEach(el => el.remove())
              }
            })

          }
        }
      }
    }

    const waitForEl = setInterval(() => {
      const cartDrawer = document.querySelector('.cart-drawer')

      if (cartDrawer && document.querySelectorAll('#upsells-data div [data-upsell-available]')[12]) {
        clearInterval(waitForEl)

        let upsellElements = document.querySelectorAll('[data-upsell-id]')

        upsellElements.forEach(element => {
          let id = element.getAttribute('data-upsell-id')

          if (!upsellsObj[id]) {
            upsellsObj[id] = {}
          }

          upsellsObj[id] = {
            id: element.querySelector('[data-upsell-variant-id]').innerText,
            title: element.querySelector('[data-upsell-title]').innerText,
            img: element.querySelector('[data-upsell-image]').innerText,
            url: element.querySelector('[data-upsell-url]').innerText,
            currentPrice: element.querySelector('[data-upsell-price]').innerText,
            oldPrice: element.querySelector('[data-upsell-compare-price]').innerText,
            ...upsellsObj[id],
            available: element.querySelector('[data-upsell-available]').innerText === 'true'
          }
        })

        // Create a Mutation Observer to watch for changes in the cart.
        const cartObserver = new MutationObserver(handleCartMutation)

        // Define the options for the Mutation Observer.
        const observerOptions = {
          attributes: true, // Watch for changes to the attributes of the cart.
          attributeFilter: ['class'], // Only watch for changes to the "class" attribute.
        }

        // Start observing the cart element.
        cartObserver.observe(cartDrawer, observerOptions)
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function pushDataLayer([event_name, event_desc, event_type, event_loc]) {
    // Send a Google Analytics event
    const eventData = {
      event: 'event-to-ga4',
      event_name,
      event_desc,
      event_type,
      event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  const addItemToCart = async (productId, productQuantity = 1) => {
    let formData = {
      'items': [{
        'id': productId,
        'quantity': productQuantity
      }]
    }

    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        return response.json()
      })
      .then(() => {
        window.cart.getCart()
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  class Slider {
    constructor(parent, productsIndex, cartType) {
      this.parent = parent
      this.productsIndex = productsIndex
      this.cartType = cartType
    }

    handleQuantityChange() {
      const waitForEl = setInterval(() => {
        if (document.querySelectorAll(`${this.parent} .product-quantity`)[this.productsIndex]) {
          clearInterval(waitForEl)

          const quantitySelects = document.querySelectorAll(`${this.parent} .product-quantity`)

          quantitySelects.forEach(select => {
            select.addEventListener('change', () => {
              changePriceAccordingToQty(select, select.value)
            })

            select.addEventListener('click', () => {
              if (this.cartType === 'pdp') {
                pushDataLayer(['exp_freq_boug_drop_pdpalsolike_quantity', 'Quantity', 'Dropdown', 'PDP You May Also Like'])
              }
            })
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    handleClickOnAddBtn() {
      const waitForEl = setInterval(() => {
        if (document.querySelectorAll(`${this.parent} .product-add-to-cart`)[this.productsIndex]) {
          clearInterval(waitForEl)

          const addToCartButtons = document.querySelectorAll(`${this.parent} .product-add-to-cart`)

          addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
              const product = button.closest('.product-item')

              const productId = product.dataset.productId // use dataset.productId instead of productId
              let productQuantity

              if (DEVICE === 'mobile') {
                productQuantity = product?.querySelector('.product-quantity-custom__value')?.dataset.qtyValue || 1
              } else {
                productQuantity = product?.querySelector('.product-quantity')?.value || 1
              }

              addItemToCart(productId, productQuantity)

              if (this.cartType === 'pdp') {
                pushDataLayer(['exp_freq_boug_but_pdpalsolike_add', `${product.querySelector('.product-title').innerText} - Add to Cart`, 'Button', 'PDP You May Also Like'])
              } else {

                if (button.classList.contains('sold-out')) {
                  pushDataLayer(['exp_freq_boug_but_cartsavin_sold', `${product.querySelector('.product-title').innerText} - Sold Out`, 'Button', 'Cart Buy More For More Savings'])
                } else {
                  pushDataLayer(['exp_freq_boug_but_cartsavin_add', `${product.querySelector('.product-title').innerText} - Add to Cart`, 'Button', 'Cart Buy More For More Savings'])
                }

                document.querySelector('.cart-drawer__body')?.scrollTo({
                  top: 0,
                  behavior: 'smooth' // You can also use 'auto' or 'instant'
                })
              }
            })
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    handleClickOnImg() {
      const waitForEl = setInterval(() => {
        if (document.querySelectorAll(`${this.parent} .product-link.product-image`)[this.productsIndex]) {
          clearInterval(waitForEl)

          const productImages = document.querySelectorAll(`${this.parent} .product-link.product-image`)

          productImages.forEach(image => {
            image.addEventListener('click', (e) => {
              // const product = image.closest('.product-item')

              if (this.cartType === 'pdp') {
                pushDataLayer(['exp_freq_boug_vis_pdpalsolike_link_image', 'Image', 'Link', 'PDP You May Also Like'])
              } else {
                pushDataLayer(['exp_freq_boug_vis_cartsavin_link_image', 'Image', 'Link', 'Cart Buy More For More Savings'])
              }
            })
          })
        }
      })
    }

    handleClickOnTitle() {
      const waitForEl = setInterval(() => {
        if (document.querySelectorAll(`${this.parent} .product-link.product-title`)[this.productsIndex]) {
          clearInterval(waitForEl)

          const productImages = document.querySelectorAll(`${this.parent} .product-link.product-title`)

          productImages.forEach(image => {
            image.addEventListener('click', (e) => {
              // const product = image.closest('.product-item')

              if (this.cartType === 'pdp') {
                pushDataLayer(['exp_freq_boug_vis_pdpalsolike_link_title', 'Title', 'Link', 'PDP You May Also Like'])
              } else {
                pushDataLayer(['exp_freq_boug_vis_cartsavin_link_title', 'Title', 'Link', 'Cart Buy More For More Savings'])
              }
            })
          })
        }
      })
    }

    initSlider() {
      const waitForEl = setInterval(() => {
        if (typeof Swiper !== 'undefined' && document.querySelectorAll(`${this.parent} .swiper .swiper-slide`)[this.productsIndex]) {
          clearInterval(waitForEl)
          if (this.cartType === 'cart') {
            const cartSlider = new Swiper(`${this.parent} .swiper`, {
              slidesPerView: 2.1,
              spaceBetween: 16,
              pagination: {
                clickable: true
              },
              scrollbar: {
                el: `${this.parent} .swiper-scrollbar`,
                draggable: true,
              },
              on: {
                afterInit: () => {
                  const swiperSlides = document.querySelectorAll(`${this.parent} .swiper .swiper-slide`)

                  // Intersection Observer options
                  const options = {
                    root: null, // use the viewport as the root
                    rootMargin: '0px', // no margin
                    threshold: 0.9,
                  }

                  // Callback function to be executed when the element is in view
                  const handleIntersection = (entries, observer) => {
                    entries.forEach(entry => {
                      if (entry.isIntersecting) {
                        observer.disconnect()

                        pushDataLayer(['exp_freq_boug_scrol_cartsavin_movi', `${entry.target.querySelector('.product-title')?.innerText} - Moving`, 'Horizontal scroll container', 'Cart Buy More For More Savings'])
                      }
                    })
                  }

                  // Create an Intersection Observer for each swiper-slide
                  swiperSlides.forEach(swiperSlide => {
                    const observer = new IntersectionObserver(handleIntersection, options)
                    observer.observe(swiperSlide)
                  })
                }
              }
            })
          } else if (this.cartType === 'pdp') {
            new Swiper(`${this.parent} .swiper`, {
              // slidesPerView: "auto",
              // spaceBetween: 40,
              pagination: {
                clickable: true
              },
              scrollbar: {
                el: `${this.parent} .swiper-scrollbar`,
                draggable: true,
              },
              breakpoints: {
                // when window width is >= 320px
                1024: {
                  slidesPerView: 4.1,
                  spaceBetween: 40
                },
                768: {
                  slidesPerView: 2.1,
                  spaceBetween: 20
                },
              }
            })
          }

          document.querySelector(`${this.parent}`).classList.add('container-visible')
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    init() {
      if (!(this.cartType === 'pdp' && DEVICE === 'mobile')) {
        this.initSlider()
      }

      if (this.cartType === 'pdp') {
        this.handleQuantityChange()

        waitForElement('.product-container .swiper').then(el => {
          handleVisibility(el, ['exp_freq_boug_vis_pdpalsolike_focu', '{{focusTime}}', 'Visibility', 'PDP You May Also Like'])
        })
      } else {
        waitForElement('.cart-upsells-container .swiper').then(el => {
          handleVisibility(el, ['exp_freq_boug_vis_cartsavin_focu', ' {{focusTime}} ', 'Visibility ', 'Cart Buy More For More Savings'])
        })
      }

      this.handleClickOnAddBtn()
      this.handleClickOnImg()
      this.handleClickOnTitle()
    }
  }

  function getAndAddRecommendedProducts() {
    const extractImageUrlFromElement = (element) => {
      const computedStyle = window.getComputedStyle(element)

      // Extract the background-image style property value
      const styleAttributeValue = computedStyle.getPropertyValue('background-image')

      // Use a regular expression to extract the URL and remove "_1x1"
      const urlMatch = styleAttributeValue.match(/url\(["']?([^"']*)_1x1([^"']*)["']?\)/)

      // Combine the two parts of the URL without "_1x1"
      const extractedUrl = urlMatch ? urlMatch[1] + urlMatch[2] : null

      return extractedUrl
    }

    const waitForRecommendedProducts = setInterval(() => {
      if (document.querySelectorAll('.custom-related .product-grid-item')[5] && document.querySelector('section[id*="18d26722-01da-4fa5-840b-a3037783b54a"]')) {
        clearInterval(waitForRecommendedProducts)

        const recommendedProducts = document.querySelectorAll('.custom-related .product-grid-item')

        const productsHtml = Array.from(recommendedProducts).map(product => {
          const productId = product.querySelector('.btn--quick')
          const productImage = product.querySelector('.product__media__image')
          const productTitle = product.querySelector('.product-grid-item__title')
          const productLink = product.querySelector('.product-grid-item__title')
          const productRating = product.querySelector('.yotpo-sr-bottom-line-score')

          let productPriceCurrent
          let productPriceOld = ''

          if (product.querySelector('.product-grid-item__price__new')) {
            productPriceCurrent = product.querySelector('.product-grid-item__price__new')
            productPriceOld = product.querySelector('.product-grid-item__price__new + s')
          } else {
            productPriceCurrent = product.querySelector('.product-grid-item__price')
          }

          const productData = {
            productId: productId.dataset.productId,
            productImage: extractImageUrlFromElement(productImage),
            productTitle: productTitle.innerText,
            productPriceCurrent: productPriceCurrent.innerText || '',
            productPriceOld: productPriceOld?.innerText || '',
            productLink: productLink.href || '#',
            productRating: productRating ? productRating.innerText.trim() : ''
          }

          return /*html*/`        
              <div class="product-item swiper-slide" data-product-id="${productData.productId}" data-product-price-current="${productData.productPriceCurrent}" data-product-price-old="${productData.productPriceOld}">
                <a href="${productData.productLink}" class="product-link product-image" target="_blank">
                  <img src="${productData.productImage}" alt="${productData.productTitle}">
                </a>

                <div class="product-info">
                  <a href="${productData.productLink}" class="product-link product-title" target="_blank">
                    ${productData.productTitle}
                  </a>              

                  <div class="product-rating">
                    ${getStarRatingSvg(productData.productRating)}
                    <p>${productData.productRating}</p>
                  </div>

                  <select name="quantity" class="product-quantity">
                    <option value="1">Quantity, 1</option>
                    <option value="2">Quantity, 2</option>
                    <option value="3">Quantity, 3</option>
                    <option value="4">Quantity, 4</option>
                    <option value="5">Quantity, 5</option>
                  </select>

                  <div class="product-quantity-custom">
                    <p class="product-quantity-custom__value" data-qty-value="1">Quantity, 1</p>
                  </div>

                  <div class="product-price">
                    <span class="product-price-current">${productData.productPriceCurrent}</span>
                    ${productData.productPriceOld ? `<span class="product-price-old">${productData.productPriceOld}</span>` : ''}
                  </div>

                  <button class="product-add-to-cart">Add to cart</button>
                </div>
              </div>
            `
        })

        const productContainer = /*html*/`
            <div class="product-container">
              <p class="product-container-title">You May Also Like</p>
              <div class="swiper">
                <div class="swiper-wrapper">
                  ${productsHtml.join('')}
                </div>
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
          `

        document.querySelector('section[id*="18d26722-01da-4fa5-840b-a3037783b54a"]').insertAdjacentHTML('beforebegin', productContainer)

        const productsPdpSlider = new Slider('.product-container', 5, 'pdp')
        productsPdpSlider.init()
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addSwiper() {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js'
    script.async = false
    document.head.appendChild(script)

    const style = document.createElement('link')
    style.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css'
    style.rel = 'stylesheet'
    document.head.appendChild(style)
  }

  function clickOnSelect() {
    document.querySelector('body').insertAdjacentHTML('beforeend', /*html*/`
      <style>
      .overlay-custom {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
          z-index: 9999; /* Ensure it's on top of other elements */
          display: none;
        }
      </style>
      <div class="overlay-custom"></div>
      `)

    waitForElement('.overlay-custom').then(el => {
      el.addEventListener('click', () => {
        el.style.display = 'none'

        document.querySelector('.fixed-quantity-custom')?.remove()
      })
    })

    const waitForEl = setInterval(() => {
      if (document.querySelectorAll('.product-quantity-custom__value')[5]) {
        clearInterval(waitForEl)

        const quantityValueWrappers = document.querySelectorAll('.product-quantity-custom__value')
        const fixedSelect = (value) => {
          let options = ''

          for (let index = 0; index < 5; index++) {

            options += /*html*/`
              <p class="${value === `Quantity, ${index + 1}` ? 'selected-value' : ''}" data-qty-value="${index + 1}">Quantity, ${index + 1}</p>
            `

          }

          return /*html*/`
          <div class="fixed-quantity-custom">
            ${options}
          </div>`
        }

        quantityValueWrappers.forEach(wrapper => {
          wrapper.addEventListener('click', () => {
            const value = wrapper.innerText

            const overlay = document.querySelector('.overlay-custom')
            overlay.style.display = 'block'

            document.querySelector('body').insertAdjacentHTML('beforeend', fixedSelect(value))

            const waitForEl = setInterval(() => {
              if (document.querySelectorAll('.fixed-quantity-custom p')[4]) {
                clearInterval(waitForEl)

                const fixedQuantityCustomOptions = document.querySelectorAll('.fixed-quantity-custom p')

                fixedQuantityCustomOptions.forEach(option => {
                  option.addEventListener('click', () => {
                    const qtyValue = option.dataset.qtyValue

                    wrapper.innerText = `Quantity, ${qtyValue}`
                    wrapper.dataset.qtyValue = `${qtyValue}`

                    overlay.style.display = 'none'

                    document.querySelector('.fixed-quantity-custom').remove()

                    changePriceAccordingToQty(wrapper, qtyValue)

                    pushDataLayer(['exp_freq_boug_drop_pdpalsolike_quantity', 'Quantity', 'Dropdown', 'PDP You May Also Like'])
                  })
                })


              }
            }, WAIT_INTERVAL_TIMEOUT)
          })
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function addBundle() {
    waitForElement('#bundle-data').then(el => {
      const waitForEl = setInterval(() => {
        if (document.querySelectorAll('#bundle-data p')[13]) {
          clearInterval(waitForEl)

          const bundleObjects = {
            "sentinel-1080p-pan-tilt-smart-wi-fi-security-camera-white": {
              shortTitle: 'Geeni Sentinel Camera',
              rate: '4.8'
            },
            "hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white": {
              shortTitle: 'Geeni Hawk 3 Camera',
              rate: '4.6'
            },
            "geeni-gn-cw008-101-look-1080p-wi-fi-camera-black": {
              "shortTitle": "Geeni Look Indoor Camera",
              "rate": "4.5"
            },
            "geeni-look-2-pack-1080p-hd-smart-home-surveillance-system-with-night-vision-motion-detection-2-way-audio-remote-access-with-ios-android-app-no-hub-required-black": {
              "shortTitle": "Geeni Look Indoor Camera",
              "rate": "4.5"
            },
            "insight-mini-2k": {
              "shortTitle": "Geeni Insight Mini 2K Camera",
              "rate": "4.3"
            },
            "geeni-insight-mini-2k-indoor-camera": {
              "shortTitle": "Geeni Insight Mini 2K Camera",
              "rate": "4.3"
            },
            "hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white-2-pack": {
              "shortTitle": "Geeni Hawk 3 Camera",
              "rate": "4.5"
            },
            "aware-1080p-hd-smart-wi-fi-security-camera-white": {
              "shortTitle": "Geeni Aware Wi-Fi Camera",
              "rate": "4.1"
            },
            "aware-hd-1080p-smart-wi-fi-security-camera-2-pack": {
              "shortTitle": "Geeni Aware Wi-Fi Camera",
              "rate": "4.1"
            },
            "geeni-sentry-smart-wi-fi-floodlight-and-security-camera-outdoor-light-and-security-camera-for-home-surveillance": {
              "shortTitle": "Geeni Sentry Wi-Fi Floodlight Camera",
              "rate": "4.5"
            },

            "glimpse-1080p-hd-smart-security-camera-white": {
              "shortTitle": "Geeni Glimpse Camera",
              "rate": "4.1"
            },
            "hawk-1080p-hd-outdoor-security-camera-white": {
              "shortTitle": "Geeni Hawk 1080p Camera",
              "rate": "4.6"
            },
            "glimpse-1080p-smart-camera-2-pack": {
              "shortTitle": "Geeni Glimpse Camera",
              "rate": "4.1"
            },
            "4-pack-prisma-plus-800-60w-led-color-tunable-white-smart-wi-fi-bulb": {
              "shortTitle": "Geeni Prisma Candle Wi-Fi Smart Bulb",
              "rate": "4.8"
            },
            "4-pack-prisma-plus-candle-e12-40w-color-tunable-white-smart-wi-fi-bulb": {
              "shortTitle": "Geeni Prisma Candle Wi-Fi Smart Bulb",
              "rate": "4.7"
            },
            "prisma-plus-800-60w-equivalent-color-and-white-dimmable-tunable-white-a19-smart-led-light-bulb": {
              "shortTitle": "Geeni Prisma Plus 800 Tunable Wi-Fi LED Smart E26 A19 Light Bulb (1-Pack)",
              "rate": "4.8"
            },
            "geeni-gn-bw932-999-3-lux-800-led-light-bulb-3-pack-soft-white-3-each": {
              "shortTitle": "Geeni Lux Smart Bulb",
              "rate": "5"
            },
            "lux-800-smart-wi-fi-led-white-light-1": {
              "shortTitle": "Geeni Lux Smart Bulb",
              "rate": "5"
            },
            "2-pack-lux-flood-par38-75w-led-tunable-dimmable-white-smart-wi-fi-bulb": {
              "shortTitle": "Geeni Smart LED Light Bulbs ",
              "rate": "4.9"
            },
            "prisma-strip-usb-smart-led-light-strip-kit-rgb-trimmable-6-6ft": {
              "shortTitle": "Geeni Prisma Strip - USB Powered",
              "rate": "4.9"
            },
            "prisma-strip-10-smart-led-light-strip-kit-rgb-trimmable-9-8ft": {
              "shortTitle": "Geeni Prisma Strip 10",
              "rate": "4.9"
            },
            "prisma-strip-kit-rgb-trimmable-32ft": {
              "shortTitle": "Geeni Prisma Strip Kit",
              "rate": "4.9"
            },
            "5m-prisma-strip-smart-wi-fi-rgb-led": {
              "shortTitle": "Geeni Prisma Strip 16",
              "rate": "4.9"
            },
            "outdoor-duo-dual-outlet-smart-wi-fi-plug-grey": {
              "shortTitle": "Geeni Indoor/Outdoor Weatherproof Smart Plug",
              "rate": "4.8"
            },
            "indoor-outdoor-weatherproof-smart-plug-duo-2-pack": {
              "shortTitle": "Geeni Indoor/Outdoor Weatherproof Smart Plug",
              "rate": "4.8"
            },
            "geeni-gn-bw912-999-lux-flood-smart-bulb-white": {
              "shortTitle": "Geeni Lux Smart Bulb",
              "rate": "4.9"
            },
            "merkury-innovations-smart-light-switch-requires-2-4ghz-wifi": {
              "shortTitle": "Merkury Innovations Light Switch",
              "rate": "4.8"
            },
            "c9-string-lights-50ft": {
              "shortTitle": "Geeni Indoor/Outdoor Waterproof String Lights",
              "rate": "3.3"
            },
            "geeni-gn-ww117-199-dot-smart-wi-fi-plug-pack-of-1-white": {
              "shortTitle": "Geeni Dot Smart Plug",
              "rate": "4.8"
            },
            "geeni-gn-ww217-199-dot-smart-wi-fi-plug-2-pack-pack-of-2-white": {
              "shortTitle": "Geeni Dot Smart Plug",
              "rate": "4.8"
            },
            "geeni-gn-sw003-199-surge-smart-protector-white": {
              "shortTitle": "Geeni 6-Outlet Surge Protector",
              "rate": "4.7"
            },
            "cascading-curtain-string-lights-5ft": {
              "shortTitle": "Geeni Cascading Curtain Lights",
              "rate": ""
            },
            "neoflex-smart-wi-fi-rope-light-silicone-multicolor-rgbic-led-color-changing-strip-lights-with-music-sync-compatible-with-alexa-and-google-home-ip65-waterproof-for-outdoor-16-4ft": {
              "shortTitle": "Geeni Prisma Neoflex RGB LED Strip Light",
              "rate": "5"
            },
            "hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white": {
              "shortTitle": "Geeni Hawk 3 Camera",
              "rate": "4.5"
            },
            "4-pack-prisma-plus-drop-br30-65w-led-color-tunable-white-smart-wi-fi-bulb": {
              "shortTitle": "Geeni Smart LED Light Bulbs ",
              "rate": "4.8"
            },
            "prisma-drop-smart-wi-fi-led-color-droplight-1": {
              "shortTitle": "Geeni Smart LED Light Bulbs ",
              "rate": "4.8"
            },
            "hawk-1080p-hd-outdoor-security-camera-white": {
              "shortTitle": "Geeni Hawk 1080p Camera",
              "rate": "4.6"
            },
            "freebird-wire-free-battery-smart-camera": {
              "shortTitle": "Geeni Freebird Wire-Free Battery Camera",
              "rate": "4.6"
            },
            "doorpeek-smart-wi-fi-1080p-full-hd-video-doorbell-wired-black": {
              "shortTitle": "Geeni Doorpeek Smart Wired Doorbell",
              "rate": "4.3"
            },
            "freebird-wire-free-battery-smart-camera-2-pack": {
              "shortTitle": "Geeni Freebird Wire-Free Battery Camera",
              "rate": "4.6"
            },
            "eagle-2k-camera": {
              "shortTitle": "Geeni Eagle 2K Camera",
              "rate": "4"
            },
            "extend-smart-wi-fi-outlet-extender-white": {
              "shortTitle": "Geeni Extend 4-Outlet Protector",
              "rate": "5"
            },
            "temperature-humidity-sensor-1": {
              "shortTitle": "Geeni Temperature and Humidity Sensor",
              "rate": "2.3"
            },
            "temperature-humidity-sensor-2": {
              "shortTitle": "Geeni Temperature and Humidity Sensor",
              "rate": "2.3"
            },
            "geeni-cascading-curtain-string-lights-multicolor-led-app-voice-control-music-sync-linkable-6-6-ft-x-5-ft": {
              "shortTitle": "Geeni Indoor/Outdoor String Light",
              "rate": "4.3"
            }
          }

          const firstItem = bundleObjects[document.querySelector('[data-first-product-url]').innerText.split('/products/')[1]]
          const secondItem = bundleObjects[document.querySelector('[data-second-product-url]').innerText.split('/products/')[1]]

          const bundleContainer = /*html*/`
    <style>
    .bundle * {
      margin: 0;
      padding: 0;
    }

    .bundle {
      padding: 30px 20px;
      background: var(--bg-light-grey, #F7F7F7);
      margin: 24px 0;
    }  

    .bundle a {
      text-decoration: none;
    }

    .bundle__title-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
    }

    .bundle__title {
      color: var(--font-h, #1B1B1B);
      text-align: center;
      font-family: Avenir Next;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 36px;
      /* 128.571% */
    }

    .bundle__save {
      border-radius: 5px;
      background: #3CBE1A;
      padding: 0 10px;
      color: #FFF;
      text-align: center;
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      text-transform: uppercase;
    }

    .bundle__content {
      display: flex;
      gap: 7px;
    }

    .bundle__item {
      display: flex;
      gap: 12px;
      width: 47.4%;
      flex: 1;
      justify-content: space-between;
    }

    .bundle__item__img {
      display: flex;
      width: 100%;
    }

    .bundle__item__img img {
      height: 100%;
      width: 100%;
      border-radius: 6px;
      display: block;
    }

    .bundle__item__img a {
      display: block;
    }

    .bundle__item__top {
      width: 40%;
    }

    .bundle__item__info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 55%;
    }

    /*.bundle__item__info .bundle__item__title {
      min-height: 42px;
    }*/

    .bundle__item-rate-stars {
      line-height: 14px;
    }

    .bundle__item__title {
      color: var(--font-h, #1B1B1B);
      font-family: Avenir Next;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 3em;
      width: fit-content;
    }

    .bundle__item__price-wrapper {
      display: flex;
      gap: 4px;
    }

    .bundle__item__price--current {
      color: var(--font-h, #1B1B1B);
      text-align: right;
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      /* 150% */
    }

    .bundle__item__price--old {
      color: var(--font-grey, #888);
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      text-decoration: line-through;
    }

    .bundle__footer {
      text-align: center;
    }

    .bundle__footer__price-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-block: 24px;
    }

    .bundle__footer__total {
      color: var(--font-body, #5B5B5B);
      font-family: Avenir Next;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 23.75px;
      /* 131.944% */
    }

    .bundle__footer__price--current {
      color: var(--font-h, #1B1B1B);

/* 24/semi */
font-family: Avenir Next;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 32px; /* 133.333% */
    }

    .bundle__footer__price--old {
      color: #888;
font-family: Avenir Next;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 23.75px; /* 98.958% */
text-decoration: line-through;
    }

    .bundle__footer__btn {
      border-radius: 30px;
      border: 2px solid var(--font-blue, #023F88);
      background: #FFF;
      padding: 16px;
      color: #023F88;
      text-align: center;
      font-family: Avenir Next;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      /* 137.5% */
      letter-spacing: 0.8px;
      text-transform: uppercase;
      cursor: pointer;
      width: 100%;
    }

    .bundle__item__top .bundle__item__title {
      display: none;
    }

    .bundle__divider {
      display: flex;
      align-items: center;
    }

    @media (max-width: 1023px) {
      .bundle {
        margin-inline: -20px;
      }
    }

    @media (max-width: 768px) {
      .bundle {
        margin-block: 30px;
      }

      .bundle__content {
        align-items: stretch;
        justify-content: space-between;
      }

      .bundle__title-wrapper {
        justify-content: space-between;
      }

      .bundle__item__img {
        width: 100%;
        margin-bottom: 12px;
      }

      .bundle__item {
        flex-direction: column;
        justify-content: space-between;
      }

      .bundle__item__top,
      .bundle__item__info {
        width: 100%;
      }

      .bundle__item__top .bundle__item__title {
        display: block;
      }

      .bundle__item__info .bundle__item__title {
        display: none;
      }

      .bundle__item__price--current {
font-size: 14px;
font-weight: 600;
line-height: 22px; /* 157.143% */
      }

      .bundle__item__price--old {
font-size: 14px;
font-weight: 500;
line-height: 22px;
      }

      /*.bundle__item-rate {
        display: flex;
        align-items: center;
        gap: 6px;
      }*/

      .bundle__footer__price-wrapper {
        margin-block: 24px 28px;
      }

      .bundle__footer__btn {
        color: #023F88;
        text-align: center;
        font-family: Avenir Next;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  </style>
      <div class="bundle">

<div class="bundle__title-wrapper">
  <h2 class="bundle__title">Buy Together and </h2>
  <p class="bundle__save">Save 15%</p>
</div>

<div class="bundle__content">
  <div class="bundle__item">
    <div class="bundle__item__top">
      <div class="bundle__item__img">
        <img src="https://cdn.shopify.com/s/files/1/2612/6532/${document.querySelector('[data-first-product-image]').innerText}" alt="${document.querySelector('[data-first-product-title]').innerText}">
      </div>

      <p class="bundle__item__title">${firstItem.shortTitle}</p>
    </div>

    <div class="bundle__item__info">
      <p class="bundle__item__title">${firstItem.shortTitle}</p>
      <div class="bundle__item-rate-stars">${getStarRatingSvg(firstItem.rate)}</div>
      <div class="bundle__item__price-wrapper">
        <p class="bundle__item__price--current">${document.querySelector('[data-first-product-discount-price]').innerText}</p>
        <p class="bundle__item__price--old">${document.querySelector('[data-first-product-price]').innerText}</p>
      </div>
    </div>
  </div>

  <div class="bundle__divider">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
      <g clip-path="url(#clip0_1605_9251)">
        <path d="M8 1.81104V15.811" stroke="#5B5B5B" stroke-linecap="square" />
        <path d="M1 8.81104H15" stroke="#5B5B5B" stroke-linecap="square" />
      </g>
      <defs>
        <clipPath id="clip0_1605_9251">
          <rect width="16" height="16" fill="white" transform="translate(0 0.811035)" />
        </clipPath>
      </defs>
    </svg>
  </div>

  <div class="bundle__item">
    <div class="bundle__item__top">
      <div class="bundle__item__img">
        <a href="${document.querySelector('[data-second-product-url]').innerText}" target="_blank">
          <img src="https://cdn.shopify.com/s/files/1/2612/6532/${document.querySelector('[data-second-product-image]').innerText}" alt="${document.querySelector('[data-second-product-title]').innerText}">
        </a>
      </div>
      <a href="${document.querySelector('[data-second-product-url]').innerText}" class="bundle__item__title" target="_blank">${secondItem.shortTitle}</a>
    </div>

    <div class="bundle__item__info">
      <a href="${document.querySelector('[data-second-product-url]').innerText}" class="bundle__item__title" target="_blank">${secondItem.shortTitle}</a>
      <div class="bundle__item-rate-stars">${getStarRatingSvg(secondItem.rate)}</div>
      <div class="bundle__item__price-wrapper">
        <p class="bundle__item__price--current">${document.querySelector('[data-second-product-discount-price]').innerText}</p>
        <p class="bundle__item__price--old">${document.querySelector('[data-second-product-price]').innerText}</p>
      </div>
    </div>
  </div>
</div>

<div class="bundle__footer">
  <div class="bundle__footer__price-wrapper">
    <p class="bundle__footer__total">Total Price:</p>
    <p class="bundle__footer__price--old">${document.querySelector('[data-bundle-price]').innerText}</p>
    <p class="bundle__footer__price--current">${document.querySelector('[data-bundle-discount-price]').innerText}</p>
  </div>
  ${document.querySelector('[data-bundle-available]').innerText === 'true' ? `<button class="bundle__footer__btn" data-bundle-id="${document.querySelector('[data-bundle-variant-id]').innerText}">Add to Cart</button>` : `<button class="bundle__footer__btn sold-out" data-bundle-id="${document.querySelector('[data-bundle-variant-id]').innerText}">Sold out</button>`}
</div>
</div>`

          waitForElement('.delivery').then(el => el.insertAdjacentHTML('afterend', bundleContainer))

          waitForElement('.bundle__footer__btn').then(btn => {
            btn.addEventListener('click', () => {
              if (btn.classList.contains('sold-out')) {
                pushDataLayer(['exp_freq_boug_but_pdptogether_sold', 'Sold Out', 'Button', 'PDP Block Buy Together'])
              } else {
                const bundleId = btn.dataset.bundleId
                addItemToCart(bundleId)
                pushDataLayer(['exp_freq_boug_but_pdptogether_add', 'Add to Cart', 'Button', 'PDP Block Buy Together'])
              }
            })
          })

          waitForElement('.bundle').then(el => {
            handleVisibility(el,
              [
                'exp_freq_boug_vis_pdptogether_focus',
                '{{focusTime}}',
                'Visibility',
                'PDP Block Buy Together'
              ]
            )

            el.addEventListener('click', (e) => {
              if (e.target.matches('a.bundle__item__title')) {
                pushDataLayer(['exp_freq_boug_but_pdptogether_link_title', 'Title', 'Link', 'PDP Block Buy Together'])
              }
              if (e.target.closest('.bundle__item__img') && e.target.closest('.bundle__item__img').querySelector('a')) {
                pushDataLayer(['exp_freq_boug_but_pdptogether_link_img', 'Image', 'Link', 'PDP Block Buy Together'])
              }
            })
          }
          )
        }
      }, WAIT_INTERVAL_TIMEOUT)
    })
  }

  function addClarity() {
    const record = setInterval(() => {
      if (typeof clarity === 'function') {
        clearInterval(record)

        clarity('set', 'exp_freq_boug', 'variant_1')
      }
    }, WAIT_INTERVAL_TIMEOUT)
  }

  function start() {
    waitForElement('body').then(() => {
      addClarity()

      if (window.location.pathname.includes('/products/')) {
        addSwiper()
        getAndAddRecommendedProducts()
        addBundle()

        if (DEVICE === 'mobile') {
          clickOnSelect()
        }

        // (9)
        waitForElement('.product__block.product__description').then(el => handleVisibility(el,
          [
            'exp_freq_boug_vis_pdpdetprod_focu',
            '{{focusTime}}',
            'Visibility ',
            'PDP Details and About this product'
          ]
        ))

        // (10)
        waitForElement('.product__description .btn_more').then(el => el.addEventListener('click', () => {
          pushDataLayer(['exp_freq_boug_lin_pdpprod_more', 'See more', 'Link', 'PDP About this product'])
        }))
      }

      cartLogic()
    })
  }
})()