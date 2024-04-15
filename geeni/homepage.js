(function () {
  "use strict"
  const g = (t, o, e, r = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: o,
      event_type: e,
      event_loc: r
    }), console.log(`Event: ${t} | ${o} | ${e} | ${r}`)
  }, w = ({ name: t, dev: o }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${o})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    )
  }, h = async (t) => {
    const o = (e) => new Promise((r, a) => {
      const n = e.split(".").pop()
      if (n === "js") {
        if (Array.from(document.scripts).map((i) => i.src.toLowerCase()).includes(e.toLowerCase()))
          return console.log(`Script ${e} allready downloaded!`), r("")
        const d = document.createElement("script")
        d.src = e, d.onload = r, d.onerror = a, document.head.appendChild(d)
      } else if (n === "css") {
        if (Array.from(document.styleSheets).map((i) => {
          var p
          return (p = i.href) == null ? void 0 : p.toLowerCase()
        }).includes(e.toLowerCase()))
          return console.log(`Style ${e} allready downloaded!`), r("")
        const d = document.createElement("link")
        d.rel = "stylesheet", d.href = e, d.onload = r, d.onerror = a, document.head.appendChild(d)
      }
    })
    for (const e of t)
      await o(e), console.log(`Loaded librari ${e}`)
    console.log("All libraries loaded!")
  }, y = (t) => {
    let o = setInterval(function () {
      typeof window.clarity == "function" && (clearInterval(o), window.clarity("set", t, "variant_1"))
    }, 1e3)
  }, u = (t, o, e, r, a = 1e3, n = 0.5) => {
    let s, d
    if (s = new IntersectionObserver(
      function (i) {
        i[0].isIntersecting === !0 ? d = setTimeout(() => {
          g(
            o,
            i[0].target.dataset.visible || r || "",
            "view",
            e
          ), s.disconnect()
        }, a) : (console.log("Element is not fully visible"), clearTimeout(d))
      },
      { threshold: [n] }
    ), typeof t == "string") {
      const i = document.querySelector(t)
      i && s.observe(i)
    } else
      s.observe(t)
  }, c = (t) => new Promise((o) => {
    const e = document.querySelector(t)
    if (e)
      return o(e)
    const r = new MutationObserver(() => {
      const a = document.querySelector(t)
      a && (o(a), r.disconnect())
    })
    r.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    })
  }), l = "https://conversionratestore.github.io/projects/geeni/img/home-app-web", v = window.innerWidth < 768 ? "mobile" : "desktop", b = (
    /*html*/
    `
  <style>
    :root {
      --FONT-STACK-HEADING: 'Manrope', "Avenir Next Rounded", sans-serif !important;
      --FONT-STACK-BODY: 'Manrope', "Avenir Next Rounded", sans-serif !important;
      --FONT-STACK-NAV: 'Manrope', "Avenir Next Rounded", sans-serif !important;
      --FONT-STACK-BUTTON:'Manrope', "Avenir Next Rounded", sans-serif !important;
      --FONT-STACK-SUBHEADING: 'Manrope', "Avenir Next Rounded", sans-serif !important;
      --gutter-mobile: 16px !important;
    }

    body {
      font-family: 'Manrope', "Avenir Next Rounded", sans-serif !important;
    }

    #shopify-section-template--16970486120700__section-marquee,
    #shopify-section-template--16970486120700__section-slideshow,
    #shopify-section-template--16970486120700__section-promotion-row-0,
    #shopify-section-template--16970486120700__98bb895e-b25c-4745-b5cb-457b6fdfb21c,
    #shopify-section-template--16970486120700__5db9b97d-c9f0-498a-9645-b8e029b46984,
    #shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b,
    #shopify-section-template--16970486120700__64d03a86-9515-4123-b7eb-3658d349c1e8,
    #INDmenu-btn, .kl-teaser-T4UsqC, .gwgkTo {
      display: none !important;
    }

    .site-header>.wrapper {
      
    }

    iframe#launcher[data-garden-id="buttons.icon_button"] {
      display: none;
    }

    body.hide-chat-btn iframe#launcher {
      display: none !important;
    }

    .additional-functional [data-img-func="sale"].hidden-el {
      display: none;
    }

    .kl-teaser-T4UsqC [data-testid="animated-teaser"]{
      opacity: 0;
      pointer-events: none;
    }

    .fw-700 {
      font-weight: 700;
    }

    .container {
      max-width: 1352px;
      margin: 0 auto;
      padding: 0 16px;
    }

    .heading-2 {
      color: var(--Black-900, #000);
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 125% */
      margin: 0;
    }

    .mobile-menu [aria-controls="nav-drawer"] {
      padding-left: 0;
      justify-content: flex-start !important;
    }

    .additional-functional {
      z-index: 8000;
      bottom: 59px;
      position: fixed;
      left: 0;
      display: inline-flex;
      padding: 12px 6px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 16px;
      border-radius: 0px 8px 8px 0px;
      border-top: 1px solid rgba(255, 255, 255, 0.50);
      border-right: 1px solid rgba(255, 255, 255, 0.50);
      border-bottom: 1px solid rgba(255, 255, 255, 0.50);
      background: var(--Blue-900, #023F88);
    }

    .additional-functional img {
      cursor: pointer;
    }

    .free-shipping {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      background: var(--Blue-100, #F2F7F8);
      padding: 4px;
      margin-bottom: 24px;
    }

    .free-shipping p {
      color: var(--Grey-900, #333);
      text-align: center;
      margin: 0;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
    }

    .free-shipping b {
      font-weight: 700;
    }

    .shop-all {
      margin-bottom: 40px;
    }

    .shop-all__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .shop-all__view {
      display: flex;
      gap: 4px;
      align-items: center;
      color: var(--Black-800, #1B1B1B);
      
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
    }
  
    .menu-items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 32px;
    }

    .menu-items a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      padding: 16px;
      border-radius: 8px;
      background: var(--Grey-200, #F7F7F7);
    }

    .menu-items img {
      mix-blend-mode: darken;
      /* max-width: 120px; */
      max-height: 120px;
    }

    .menu-items p {
      color: var(--Black-900, #000);
      text-align: center;
      
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      margin: 16px 0 0;
    }

    .warranty-sale__container {
      display: flex;
      gap: 16px;
    }

    .warranty-sale__buy {
      text-align: center;
    }

    .warranty-sale__container > div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      padding: 16px 24px;
      border-radius: 8px;
      background: var(--Blue-100, #F2F7F8);
    }

    .warranty-sale__container > div:first-child div  {
      text-align: center;
    }

    .warranty-sale__container > div img {
      width: 32px;
      height: 32px;
      margin-bottom: 8px;
    }

    .warranty-sale__container > div p {
      margin: 0;
      color: var(--Grey-900, #333);
      font-size: 16px;
      line-height: 28px;
    }

    .saves-comparison {
      display: flex;    
      justify-content: space-between;
      gap: 8px;
      width: 100%;
      margin-top: 12px;
    }

    .saves-comparison > div {
      border-radius: 8px;
      background: var(--White, #FFF);
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 8px;
      text-align: center;
    }

    .saves-comparison > div > div {
      flex-direction: column;
      display: flex;
    }

    .saves-comparison > div >div:nth-of-type(1) span:first-child {
      color: var(--Grey-900, #333);
      text-align: center;
      
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 150% */
      text-transform: uppercase;
    }
    .saves-comparison > div >div:nth-of-type(1) span:last-child {
      color: var(--Light-blue-900, #00B0EE);
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px; /* 142.857% */
      text-transform: lowercase;
    }

    .saves-comparison > div >div:nth-of-type(3) span:first-child {
      color: var(--Grey-800, #4A4A4A);
      text-align: center;
      
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 150% */
      text-transform: uppercase;
    }
    .saves-comparison > div >div:nth-of-type(3) span:last-child {
      color: var(--Grey-900, #333);
      text-align: center;
      
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px; /* 112.5% */
      text-transform: lowercase;
    }

    .line {
      background: #F0F0F0;
      width: 1px;
      margin: 0 12%;
    }

    
    .crs-products .heading-2 {
      margin: 0 auto 32px;
      text-align: center;
    }

    .warranty-sale,
    .deals-for-you,
    .crs-products  {
      margin-bottom: 72px;
    }

    .many-devices {
      min-height: 450px;
      padding: 56px 0 39px;
      text-align: center;
      display: flex;
      position: relative;
      overflow: hidden;
    }

    .many-devices__split {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .many-devices__split img {
      width: 50%;
      object-fit: cover;
    }

    .index-1{
      z-index: 1;
    }

    .many-devices__mobiles {
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
    }

          
    .many-devices__btns {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }
    
    .many-devices__btn {
      width: 304px;
    }

    .many-devices > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .many-devices .heading-2 {
      color: #fff;
      margin-bottom: 8px;
    }

    .many-devices p {
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 150% */
      margin: 0;
    }

    .trusted-reviews {
      text-align: center;
      padding: 64px 0 114px;
      background: var(--Blue-100, #F2F7F8);
    }

    .trusted-reviews .swiper-slide {
      padding: 24px;
      border-radius: 8px;
      border: 1px solid var(--Blue-200, #E8F8FE);
      background: var(--White, #FFF);
      text-align: center;
      flex-direction: column;
      justify-content: flex-start;
    }

    .trusted-reviews .swiper-slide img {
      width: 78px;
      margin: 0 auto;
    }

    .trusted-reviews .heading-2 {
      margin-bottom: 24px;
    }

    .trusted-reviews__rate {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: center;
      margin-bottom: 32px;
    }

    .trusted-reviews__rate p {
      margin: 0;
    }

    .trusted-reviews__desc {
      color: var(--Grey-900, #333);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      margin: 16px 0;
    }

     .trusted-reviews__author {
      color: var(--Black-800, #1B1B1B);
      font-size: 13px;
      font-weight: 600;
      line-height: 18px; /* 138.462% */
      margin: 0 0 4px;
    }

    .trusted-reviews__loc{
      color: var(--Grey-800, #4A4A4A);
      font-size: 13px;
      font-weight: 400;
      line-height: 18px; /* 138.462% */
      margin: 0;
    }

    .new-arrivals .swiper-button-next,
    .new-arrivals .swiper-button-prev, 
    .trusted-reviews .swiper-button-next,
    .trusted-reviews .swiper-button-prev {
      --swiper-navigation-sides-offset: 0;

      position: absolute !important;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 100px;
      border: 1px solid rgba(255, 255, 255, 0.50);
      background: var(--White, #FFF);
      box-shadow: 0px 4px 8px 0px rgba(33, 35, 37, 0.08);
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
    }

    .new-arrivals .swiper-button-next {
      right: 10%;
    }
    .new-arrivals .swiper-button-prev {
      left: 10%;
    }

    .new-arrivals .swiper-button-next::after,
    .new-arrivals .swiper-button-prev::after, 
    .trusted-reviews .swiper-button-next::after,
    .trusted-reviews .swiper-button-prev::after {
      display: none;
    }

    .new-arrivals .swiper,
    .trusted-reviews .swiper {
      position: relative;
    }

    .trusted-reviews .swiper::after {
      position: absolute;
      content: '';
      top: 0;
      right: -25px;
      width: 213px;
      height: 100%;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #F2F7F8 65.29%);
      z-index: 1;
      pointer-events: none;
    }

    .trusted-reviews .swiper.reached-end::after {
      display: none;
    }
    
    .hero  {
      margin-bottom: 48px;
    }

    .hero .product {
      position: relative;
      height: 600px !important;
      min-height: 260px;
      border-radius: 8px;
    }

    .product__img {
      position: absolute;
      top: auto;
      right: 12px;
      max-width: 580px;
      max-height: 580px;
    }
    
    .product__info {
      display: flex;
      flex-direction:column;
      position: absolute;
      bottom: 70px;
      left: 70px;
      /* outline: 1px solid #000; */
      width: fit-content;
      max-width: 319px;
    }

    .product__type {
      padding: 2px 6px;

      border-radius: 4px;
      background: var(--Blue-900, #023F88);
      color: #FFF;
      
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 138.462% */
      text-transform: uppercase;
      margin: 0 0 18px;
      width: fit-content;
    }

    .product__price {
      display: flex;
      align-items: center;
      margin: 0 0 24px;
    }

    .product__title {
      color: var(--White, #000);
      
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 40px; /* 125% */
      margin: 0 0 16px;
    }

    .product__price span:nth-of-type(1) {
      color: var(--White, #333);
      
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      margin-right: 8px;
    }

    .product__price span:nth-of-type(2) {
      color: var(--Grey-500, #4A4A4A);
      
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
      text-decoration-line: strikethrough;
      margin-right: 16px;
    }

    .product__price span:nth-of-type(3) {
      border-radius: 4px;
      background: var(--Red, #D22432);
      padding: 2px 6px;
      color: var(--White, #FFF);
      
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 138.462% */
      text-transform: uppercase;
    }

    .product__btn {
      padding: 12px 40px;
      border-radius: 100px;
      background: var(--Light-blue-900, #00B0EE);


      color: #fff;
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      text-transform: uppercase;
      width: 155px;
    }

    .hero-swiper-nav {
      position: absolute;
      align-items: center;
      bottom: 52px;
      right: 64px;
      display: flex;
      gap: 24px;
      z-index: 1;
    }

    .hero .swiper-button-next, .hero .swiper-button-prev {
      width: 16px;
      height: 16px;
      
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
      margin: 0;
    }

    .hero .swiper-button-next::after,
    .hero .swiper-button-prev::after{
      display: none;
    }

    .hero .swiper {
      position: relative;
    }

    #slide-number p {
      color: #1B1B1B;
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 142.857% */
      letter-spacing: 2px;
      margin: 0;
    }

    .crs-products .products-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    .product-grid-item__price {
      flex-direction: row;
    }

    .product-grid-item__price__new {
      font-weight: 700;
      margin-right: 8px;

      font-size: 14px;
      line-height: 20px; /* 142.857% */
    }

    .product-grid-item__price__new + s{
      color: var(--Grey-300, #333);
      
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
      text-decoration-line: strikethrough;
    }

    .crs-products .btn--quick {
      display: none !important;
    }

    .crs-products .product-grid-item__inner {
      display: flex;
      flex-direction: column;
    } 

    .crs-products .product-grid-item__info {
      margin-bottom: 16px;
    } 

    .crs-products .product-grid-item__info .product-grid-item__title {
      order: 0;
    }

    .crs-products .product-grid-item__info product-alternates {
      order: 2;
    }

    .crs-products .product-grid-item__info .yotpo-widget-instance {
      order: 1;
    }

    .crs-products .product-grid-item__price {
      order: 4;
    }

    .crs-products .product-grid-item__price {
      font-weight: 700;
    }

    .crs-products .product-grid-item__price s {
      font-weight: 400;
    }

    .crs-products .alternative-options {
      margin: 0;
      gap: 8px;
    }

    .crs-products .product__shop-now {
      margin-top: auto;
    } 

    .crs-products .product__badge {
      margin: 8px;
      gap: 4px;
    }

    .crs-products .product__badge__item--custom {
      border-radius: 4px;
      background: var(--Blue-900, #023F88);
      padding: 4px 12px;

    }
    .crs-products .product__badge__item--saving {
      border-radius: 4px;
      background: var(--Red, #D22432);
      padding: 4px 12px;
    }

    .product__shop-now {
      border-radius: 30px;
      border: 1px solid var(--Blue-900, #023F88);
      color: var(--Blue-900, #023F88);
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      text-transform: uppercase;
      width: 100%;
      display: inline-block;
      margin-top: 16px;
      padding: 6px 24px;
    }

    .new-arrivals {
      margin-bottom: 80px;
    }

    .new-arrivals .new-arrivals__content {
      border-radius: 16px;
      opacity: 0.9;
      background: var(--Grey-200, #F7F7F7);
      padding: 56px 0 64px;
    }

    .new-arrivals .heading-2 {
      margin: 0 0 48px;
      text-align: center;
    }

    .new-arrivals-product {
      display: flex;
      gap: 56px;
      max-width: 776px;
      justify-content: center;
      align-items: center;
    }

    .glide__slide {
      transform: scale(0.8);
    }

    .glide__arrows {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .glide__arrow {
      border-radius: 100px;
      border: 1px solid rgba(255, 255, 255, 0.50);
      background: var(--White, #FFF);
      box-shadow: 0px 4px 8px 0px rgba(33, 35, 37, 0.08);
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
    }

    .glide__arrow.glide__arrow--left {
      margin-left: 11%;
    }

    .glide__arrow.glide__arrow--right {
      margin-right: 11%;
    }

    .glide__slide.glide__slide--active {
      transform: scale(1);
      transition: transform 0.3s;
    }

    .new-arrivals-product__content {
      display: none;
    }

    .glide__slide.glide__slide--active .new-arrivals-product__content {
      display: flex;
    }

    .glide__slides {
      margin-bottom: 0;
    }

    .new-arrivals-product__img-wrap {
      width: 380px;
      height: 380px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid var(--Grey-300, #F0F0F0);
      background: #FFF;
      padding: 24px;
    }

    .new-arrivals .swiper-slide {
      /*width: 50%;*/
      transform: scale(0.8);
      transition: transform 0.3s;
      justify-content: center;
    }

    .new-arrivals .swiper-slide.swiper-slide-active {
      transform: scale(1);
    }

    .new-arrivals .new-arrivals-product__content {
      display: none;
      flex-direction: column;
      justify-content: center;
    }

    .new-arrivals .swiper-slide-active .new-arrivals-product__content {
      display: flex;
    }


    .new-arrivals__nav > div{
      display: none;
    }

    .new-arrivals__nav {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      margin-bottom: 20px;
    }

    .new-arrivals-product__number {
      margin-bottom: 16px;
      color: var(--Grey-800, #4A4A4A);

      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 1; /* 142.857% */
      letter-spacing: 2px;
      margin: 0;
    }

    .new-arrivals-product__title {
      color: var(--Black-800, #1B1B1B);
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px; /* 133.333% */
      margin: 0 0  16px;
    }

    .new-arrivals-product__price {
      color: var(--Black-900, #000);
      
      font-size: 20px;
      font-style: normal;
      font-weight: 800;
      line-height: 28px; /* 140% */
      margin: 0 0 24px;
    }

    .new-arrivals-product__description {
        color: var(--Grey-800, #4A4A4A);
        
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
        margin: 0 0 24px;
      }

    .crs-btn {
      display: block;
      border-radius: 100px;
      background: var(--Blue-900, #023F88);
      padding: 12px 24px;
      width: 280px;
      color: #FFF;
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      text-transform: uppercase;
      cursor: pointer;
    }

    .crs-products .crs-btn {
      width: 320px;
      margin: 56px auto 0;
    }

    .product__number {
      display: none;
    }

    .many-devices__btn {
      border-radius: 100px;
      background: var(--Blue-900, #023F88);
      padding: 12px 80px;
      color: var(--White, #FFF);
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      text-transform: uppercase;
    }

    .trusted-load-more {
      display: none;
    }

    .load-more-btn {
      display: none;
    }

    .hidden-block {
      display: block;
    }

    .load-more-btn-visible .hidden-block {
      display: none;
    }

    .load-more-btn-visible .load-more-btn {
      display: block;
    }

    .trusted-load-more .swiper-slide {
      margin-bottom: 8px;
    }

    .load-more-btn {
      border-radius: 100px;
      background: var(--Blue-900, #023F88);
      padding: 12px 24px;
      color: #FFF;
      text-align: center;
      
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 171.429% */
      text-transform: uppercase;
      width: 295px;
      margin: 16px auto 0;
    }

    [data-img-func="chat"] {
      position: relative;
    }

    [data-img-func="chat"] > div {
      display: none;
      position: absolute;
      top: -12px;
      right: -5px;

      height: 20px;
      min-width: 20px;
      
      background-color: rgb(217, 63, 76);
      border-radius: 20px;
      justify-content: center;
      align-items: center;

      padding: 0px 6px;
    }

    .additional-functional > div {
      display: flex;
    }

    [data-img-func="chat"] > div p {
      color: #fff;
      margin: 0;
      font-size: 14px;
    }

    [data-img-func="chat"].display-msg-number > div {
      display: flex;
    }

    #NavStandard .menu__item.menu__item--compress + .menu__item .navtext {
      color: var(--Light-blue-900, #00B0EE);
    }

    .logo {
      width: 144px;
      height: 56px;
    }

    

    /*

    .logo__image-link {
      width: 144px !important;
      height: 56px !important;
      padding: 0;
      margin: 0;
    }

    .logo__image-push {
      padding-top: 0 !important;
    }
    
    .logo {
      margin: 12px 0 !important;
    }

        #PageContainer {
      padding-top: 80px !important;
    }

    */

    .navlink--toplevel {
      padding: 15px 20px !important;
    }

    @media screen and (max-width: 1100px) and (min-width: 768px) {
      .new-arrivals-product {
        gap: 20px;
      }
    }

    @media screen and (max-width: 1000px) and (min-width: 768px) {
      .glide__slide {
        transform: scale(0.6);
      }

      .glide__slide.glide__slide--active {
        transform: scale(0.8);
      }
    }

    @media screen and (max-width: 1000px) and (min-width: 768px) {
      .glide__slide {
        transform: scale(0.6);
      }

      .glide__slide.glide__slide--active {
        transform: scale(0.8);
      }
    }

    @media screen and (max-width: 820px) and (min-width: 768px) {
      .glide__slide {
        transform: scale(0.5);
      }

      .glide__slide.glide__slide--active {
        transform: scale(0.7);
      }
    }

    @media screen and (max-width: 768px) {
      #PageContainer {
        padding-top: 60px !important;
      }

      .site-header>.wrapper {
        height: 56px !important;
      }

      .product__img {
        width: 209px;
        height: 209px;
      }

      .heading-2 {
        color: var(--Black-800, #1B1B1B);
        
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 140% */
        text-transform: capitalize;
      }

      .free-shipping  {
        margin-bottom: 24px;
        gap: 8px;
      }
      .free-shipping p {
        color: var(--Grey-900, #333);
        text-align: center;
        
        font-size: 13px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 153.846% */
      }

      .shop-all__heading .heading-2 {
        color: var(--Black-900, #000);
        
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        text-transform: capitalize;
      }

      .menu-items {
        gap: 4px;
        margin-top: 20px;
      }

      .menu-items a {
        padding: 8px;
      }

      .menu-items p {
        color: var(--Black-900, #000);
        text-align: center;
        
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px; /* 138.462% */
        margin: 12px 0 0;
      }

      .shop-all {
        margin-bottom: 32px;
      }

      .hero .product {
        height: auto !important;
        padding: 20px;
        position: relative;
        display: flex;
        align-items: flex-end;
        /* background-position: right center;
        background: linear-gradient(232deg, rgba(0, 0, 0, 0.00) 26.22%, rgba(0, 0, 0, 0.60) 87.38%); */
      }

      .logo__image-link {
        height: 40px !important;
      }

      .logo {
        margin: 8px 0;
      }

      .hero .product::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(232deg, rgba(0, 0, 0, 0.00) 26.22%, rgba(0, 0, 0, 0.60) 87.38%); 
        pointer-events: none;
        border-radius: 8px;
      }

      .product__info {
        position: relative;
        bottom: auto;
        left: auto;
        max-width: 77%;
        z-index: 1;
      }

      .product__type {
        color: #FFF;
        
        font-size: 11px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 127.273% */
        text-transform: uppercase;
        margin: 0 0 8px;
      }

      .product__title {
        
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 140% */
        margin: 0 0 8px;
        color: #fff;
      }

      .product__price {
        margin: 0 0 12px;
      }

      .product__price span:nth-of-type(1) {
        
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        margin-right: 4px;
      }

      .product__price span:nth-of-type(2) {
        
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
        text-decoration-line: strikethrough;
        margin-right: 8px;
      }

      .product__price span:nth-of-type(3) {
        
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 14px; /* 116.667% */
        text-transform: uppercase;
        padding: 2px 6px;
      }

      .product__price span {
        color: #fff !important; 
      }

      .product__btn {
        padding: 6px 20px;
        width: 109px;
        text-align: center;
        
        font-size: 13px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 153.846% */
        text-transform: uppercase;
      }

      .hero {
        margin-bottom: 32px;
      }

      .hero .swiper {
        margin: 0 -16px;
      }

      .hero .swiper-wrapper {
        padding: 0 16px;
      }

      .hero .swiper-wrapper .swiper-slide:last-child{
        padding-right: 30px;
      }

      .hero-swiper-nav {
        display: none;
      }

      .product__number {
        display: block;
        position: absolute;
        padding: 4px 12px;

        top: 8px;
        right: 9px;
        border-radius: 100px;
        background: var(--Grey-900, #333);
      }

      .product__number p {
        color: var(--Blue-100, #F2F7F8);
        text-align: center;
        
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 153.846% */
        letter-spacing: 2px;
        margin: 0;
      }

      .warranty-sale__container {
        flex-direction: column;
        gap: 4px;      
      }

      .warranty-sale__container > div:first-child {
        flex-direction: row;
        gap: 12px;
      }

      .warranty-sale__container > div:first-child div {
        text-align: start;
      }
      
      .warranty-sale__container > div p {
        color: var(--Grey-900, #333);
        
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
        text-transform: capitalize;
      }

      .warranty-sale__buy {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      }

      .warranty-sale__container > div img {
        width: 24px;
        height: 24px;
        margin-bottom: 0;
      }

      .warranty-sale__container > div:first-child {
        justify-content: flex-start;
        align-items: flex-start;
      }

      .warranty-sale__container > div {
        padding: 12px 20px;
      }

      .saves-comparison > div {
        display: flex;
        flex-direction: column;
      }

      .saves-comparison > line {
        display: none;
      }

      .warranty-sale {
        margin-bottom: 40px;
      }

      .crs-products .heading-2 {
        margin: 0 auto 20px;
        text-align: left;
      }

      .crs-products {
        margin-bottom: 48px;
      }

      .crs-products .products-wrapper {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 16px;
        column-gap: 15px;
      }

      .crs-products .product__badge {
      margin: 4px;
      gap: 2px;
      }

      .crs-products .product__badge__item--saving,
      .crs-products .product__badge__item--custom {
        padding: 2px 8px;
      }

      .crs-products .crs-btn {
        width: 295px;
        margin: 40px auto 0;
      }

      .product__shop-now {
        font-size: 13px;
        line-height: 24px; /* 184.615% */

      }
      
      .new-arrivals {
        margin-bottom: 48px;
      }

      .new-arrivals .new-arrivals__content {
        padding: 32px 0;
      } 
      
      .new-arrivals .heading-2 {
        margin-bottom: 24px;
      }

      .new-arrivals-product {
        flex-direction: column;
      }

      .new-arrivals-product__img-wrap {
        width: 200px;
        height: 200px;
      }

      .new-arrivals .swiper-slide {
        width: 56%;
      }

      .new-arrivals .swiper-slide {
        transform: scale(0.9);
      }

      .new-arrivals-product__content {
        margin: 0 -20%;
      }

      .new-arrivals .crs-btn {
        width: 100%;
      }

      .new-arrivals-product__title {
        color: var(--Black-800, #1B1B1B);
        text-align: center;
        
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        margin-bottom: 8px;
      }

      .new-arrivals-product__price {
        color: var(--Black-900, #000);
        
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 144.444% */
        text-align: center;
      }

      .new-arrivals-product__description {
        color: var(--Grey-800, #4A4A4A);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; 
      }

      .glide__slides {
        margin-left: 2px;
        margin-bottom: 0;
      }

      .glide__arrow {
        display: none;
      }

      .glide__slide {
        transform: scale(0.9);
      }

      .new-arrivals-product {
        gap: 20px;
      }

      .new-arrivals__nav {
        justify-content: center;
      }

      .new-arrivals__nav > div{
        display: flex;
      }

      .new-arrivals .swiper-button-prev,
      .new-arrivals .swiper-button-next {
        display: none;
      }

      .new-arrivals-product__number {
        color: var(--Black-800, #1B1B1B);
        text-align: center;
        
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 2px;
      }

      .many-devices {
        min-height: 359px;
        padding:40px 0 24px;
      }

      .many-devices .heading-2 {
        color: var(--White, #FFF);
        text-align: center;
        
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px; /* 166.667% */
        text-transform: capitalize;
        margin-bottom: 8px;
      }

      .many-devices p {
        color: #FFF;
        text-align: center;
        
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
      }


      .many-devices__split img {
        width: 100%;
      }
      .many-devices__split img:last-child {
        display: none;
      }
      .many-devices__mobiles {
        width: 90%;
      }

      .trusted-reviews {
        padding: 40px 0 56px;
      
      }

      .trusted-reviews .heading-2 {
        margin-bottom: 12px;
        text-align: left;
      } 

      .trusted-reviews__rate {
        justify-content: flex-start;
        margin-bottom: 24px;
        gap: 8px;
      }

      .trusted-reviews .swiper {
        display: none;
      }
      
      .trusted-load-more {
        display: block;
      }

      .many-devices__btn {
        width: 279px;
        padding: 12px;
      }
    }
  </style>`
  ), F = (
    /*html*/
    `
  <div class="additional-functional">
    <div data-img-func="accessibility" >
      <img src="${l}/accessible.svg" alt="Open accessibility features">
    </div>
    <div data-img-func="sale" class="hidden-el">
      <img src="${l}/sale.svg" alt="Open sale proposition">
    </div>
    <div data-img-func="chat">
      <img src="${l}/chat.svg" alt="Open suppport chat">
      <div><p></p></div>
    </div>
  </div>

  <div class="free-shipping">
    <img src="${l}/delivery.svg" alt="shipping">
    <p><span class="fw-700">FREE</span> Shipping on orders over <span class="fw-700">$69</span></p>
  </div>

  <section class="shop-all">
    <div class="container">
      <div class="shop-all__heading">
        <h2 class="heading-2">Shop All Category</h2>
        <a href="/collections/all" class="shop-all__view">
          View all
          <img src="${l}/arrow-r.svg" alt="">
        </a>
      </div>
      <div class="menu-items">
        <a href="/collections/smart-security-cameras">
          <img src="${l}/cameras.jpg" alt="Cameras">
          <p>Cameras</p>
        </a>
        <a href="/collections/smart-appliances">
          <img src="${l}/lifestyle.jpg" alt="Lifestyle">
          <p>Lifestyle</p>
        </a>
        <a href="/collections/lighting">
          <img src="${l}/lighting.jpg" alt="Lighting">
          <p>Lighting</p>
        </a>
        <a href="/collections/power">
          <img src="${l}/power.jpg" alt="Power">
          <p>Power</p>
        </a>
      </div>
    </div>
  </section>

  <div class="warranty-sale">
    <div class="container">
      <div class="warranty-sale__container">
        <div>
          <img src="${l}/check.svg" alt="">
          <div>
            <p><span class="fw-700">Direct from manufacturer</span></p>
            <p><span class="fw-700">365</span>-days warranty on all products</p>
          </div>
        </div>
        <div>
          <div class="warranty-sale__buy">
            <img src="${l}/bonus.svg" alt="">
            <p><span class="fw-700">Buy More, Save More</span></p>
          </div>
          <div class="saves-comparison">
            <div>
              <div>
                <span>SAVE</span>
                <span>10% OFF</span>
              </div>
              <div class="line"></div>
              <div>
                <span>spend</span>
                <span>$99</span>
              </div>
            </div>

            <div>
              <div>
                <span>SAVE</span>
                <span>15% OFF</span>
              </div>
              <div class="line"></div>
              <div>
                <span>spend</span>
                <span>$149</span>
              </div>
            </div>

            <div>
              <div>
                <span>SAVE</span>
                <span>20% OFF</span>
              </div>
              <div class="line"></div>
              <div>
                <span>spend</span>
                <span>$199</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="crs-products" data-products-type="hot-deals">
    <div class="container">
      <h2 class="heading-2">Hot Deals</h2>
      <div class="products-wrapper"></div>
      <a class="crs-btn" href="/collections/sale-auto">SHOP ALL Deals</a>
    </div>
  </section>
  
  <section class="crs-products" data-products-type="popular-products">
    <div class="container">
      <h2 class="heading-2">Popular Products</h2>
      <div class="products-wrapper"></div>
    </div>
  </section>

  <section class="new-arrivals">
    <div class="container">
      <div class="new-arrivals__content">
        <h2 class="heading-2">New Arrivals</h2>

      </div>
      
    </div>
  </section>

  <section class="many-devices">
    <div class="container">
      <div class="many-devices__split">
        <img src="${l}/house-1.jpg" alt="">
        <img src="${l}/house-2.jpg" alt="">
      </div>
      <div class="many-devices__mobiles">
        <img src="${l}/many-devices.svg" alt="">
      </div>

      <div class="index-1">
        <h2 class="heading-2">Many Devices, One App</h2>
        <p>Cameras, bulbs, plugs, and more</p>
      </div>
      <div class="index-1 many-devices__btns">
        <a class="many-devices__btn" href="https://apps.apple.com/us/app/geeni/id1177386276">Download iOS</a>
        <a class="many-devices__btn" href="https://play.google.com/store/apps/details?id=com.merkuryinnovations.geeni&amp;hl=en_US&amp;gl=US">Download Android</a>
        
      </div>

    </div>
  </section>

  <section class="trusted-reviews">
    <div class="container">
      <h2 class="heading-2">Trusted by over 5 million people</h2>
      <div class="trusted-reviews__rate">
        <img src="${l}/4-stars.svg" alt="4 stars">
        <p><span class="fw-700">4.4</span> stars rating</p>
      </div>

      <div class="trusted-load-more load-more-btn-visible">
          <div class="swiper-slide">
            <img src="${l}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">It was very easy to set up and once it was
            connected to my Wi-Fi, I was able to start
            changing the colors from white to blue to
            red or whatever color you choose. This
            smart bulb is exactly what it says it does and I am happy.</p>
            <p class="trusted-reviews__author">Melanie Edmonson</p>
            <p class="trusted-reviews__loc">Walmart Customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">This is a great product. The night vision is pretty good, and the image quality is great as well. I love being able to set alerts on my app for motion, and check in any time!!</p>
            <p class="trusted-reviews__author">Ninjafoot</p>
            <p class="trusted-reviews__loc">Sacramento, CA</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/5-stars.svg" alt="5 stars">
            <p class="trusted-reviews__desc">Great camera, it was easy to install, very clear and motion detection was work very good with instant notifications in my phone.</p>
            <p class="trusted-reviews__author">Carol71</p>
            <p class="trusted-reviews__loc">Jersey City, NJ</p>
          </div>

          <button class="load-more-btn">Load more</button>

          <div class="hidden-block">
            <div class="swiper-slide">
              <img src="${l}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">I set the camera up to keep my dog from leaving gifts in the hallway. As soon as a motion alert happens, i could hop on the camera and give a stern ‘NO'. Deer in headlights was her reaction. Love this tool in helping my dog potty train.</p>
              <p class="trusted-reviews__author">Jennifer Harden</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>

            <div class="swiper-slide">
              <img src="${l}/4-stars.svg" alt="4 stars">
              <p class="trusted-reviews__desc">The picture is perfect. We are thinking about replacing our other cameras with these. Easy to set up. Perfect camera</p>
              <p class="trusted-reviews__author">Dmitri Kristov</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>

            <div class="swiper-slide">
              <img src="${l}/5-stars.svg" alt="5 stars">
              <p class="trusted-reviews__desc">These lights are so easy to use with the app and Alexa. They look great also.</p>
              <p class="trusted-reviews__author">Amelia Ngoy</p>
              <p class="trusted-reviews__loc">Verified customer</p>
            </div>
          </div>
      </div>

      <div class="swiper">
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <img src="${l}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">It was very easy to set up and once it was
            connected to my Wi-Fi, I was able to start
            changing the colors from white to blue to
            red or whatever color you choose. This
            smart bulb is exactly what it says it does and I am happy.</p>
            <p class="trusted-reviews__author">Melanie Edmonson</p>
            <p class="trusted-reviews__loc">Walmart Customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">This is a great product. The night vision is pretty good, and the image quality is great as well. I love being able to set alerts on my app for motion, and check in any time!!</p>
            <p class="trusted-reviews__author">Ninjafoot</p>
            <p class="trusted-reviews__loc">Sacramento, CA</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/5-stars.svg" alt="5 stars">
            <p class="trusted-reviews__desc">Great camera, it was easy to install, very clear and motion detection was work very good with instant notifications in my phone.</p>
            <p class="trusted-reviews__author">Carol71</p>
            <p class="trusted-reviews__loc">Jersey City, NJ</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">I set the camera up to keep my dog from leaving gifts in the hallway. As soon as a motion alert happens, i could hop on the camera and give a stern ‘NO'. Deer in headlights was her reaction. Love this tool in helping my dog potty train.</p>
            <p class="trusted-reviews__author">Jennifer Harden</p>
            <p class="trusted-reviews__loc">Verified customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/4-stars.svg" alt="4 stars">
            <p class="trusted-reviews__desc">The picture is perfect. We are thinking about replacing our other cameras with these. Easy to set up. Perfect camera</p>
            <p class="trusted-reviews__author">Dmitri Kristov</p>
            <p class="trusted-reviews__loc">Verified customer</p>
          </div>

          <div class="swiper-slide">
            <img src="${l}/5-stars.svg" alt="5 stars">
            <p class="trusted-reviews__desc">These lights are so easy to use with the app and Alexa. They look great also.</p>
            <p class="trusted-reviews__author">Amelia Ngoy</p>
            <p class="trusted-reviews__loc">Verified customer</p>
          </div>

        </div>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev">
          <img src="${l}/arrow-l.svg" alt="arrow left">
        </div>
        <div class="swiper-button-next">
          <img src="${l}/arrow-r.svg" alt="arrow right">
        </div>
      </div>
    </div>
  </section>
  `
  )
  y("exp_home_optim"), w({ name: 'Keenethics: "Introduce content based on JBTD on HP"', dev: "Andrii" }), k(), c("head").then((t) => t.insertAdjacentHTML("afterend", b)), c("#shopify-section-template--16970486120700__section-marquee").then((t) => t.insertAdjacentHTML("afterend", F)), S(), A(), $(), T(), c("body").then((t) => t == null ? void 0 : t.classList.add("hide-chat-btn")), c('iframe[title="Messaging window"]').then((t) => {
    new MutationObserver((e) => {
      var r, a
      for (let n of e)
        n.type === "attributes" && n.attributeName === "tabindex" && (console.log("Tabindex changed to:", t.getAttribute("tabindex")), t.getAttribute("tabindex") === "-1" ? (r = document.querySelector("body")) == null || r.classList.add("hide-chat-btn") : (a = document.querySelector("body")) == null || a.classList.remove("hide-chat-btn"))
    }).observe(t, { attributes: !0 })
  }), B(), c(".load-more-btn").then((t) => {
    t.addEventListener("click", () => {
      const o = document.querySelector(".trusted-load-more")
      o && o.classList.remove("load-more-btn-visible")
    })
  }), E(), c("body").then((t) => {
    u(".free-shipping", "exp_home_optim_section_01", "Home Page Free Shipping on Orders Over $69", "Section", 4e3), u(".shop-all .container", "exp_home_optim_section_02", "Home Page Shop by category", "Section"), u(".hero .swiper", "exp_home_optim_section_03", "Home Page Featured products PDP", "Section"), u(".warranty-sale", "exp_home_optim_section_04", "Home Page Benefits", "Section"), t.addEventListener("click", (o) => {
      var r, a, n
      o.preventDefault()
      const e = o.target
      if (e.closest("button.mobile-menu__button") && g("exp_home_optim_button_01", "Menu", "Button", "Home Page Header"), e.closest(".shop-all__view") && g("exp_home_optim_button_01", "Menu", "Button", "Home Page Header"), e.closest(".menu-items a")) {
        const s = (r = e.closest(".menu-items a")) == null ? void 0 : r.querySelector("p")
        g("exp_home_optim_button_05", `${s == null ? void 0 : s.innerText} - choise category`, "Button", "Home Page Shop by category")
      }
      if (e.closest(".hero .product__btn")) {
        const s = (a = e.closest(".product")) == null ? void 0 : a.querySelector(".product__title")
        g("exp_home_optim_button_06", `${s == null ? void 0 : s.innerText} - Shop now`, "Button", "Home Page Featured products PDP")
      }
      if (e.closest(".hero .product")) {
        const s = (n = e.closest(".hero .product")) == null ? void 0 : n.querySelector(".product__type")
        g("exp_home_optim_button_07", `${s == null ? void 0 : s.innerText} - Click`, "Button", "Home Page Featured products PDP")
      }
    })
  })
  function _(t, o) {
    return fetch(`https://mygeeni.com/products/${t}.json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((e) => {
      if (!e.ok)
        throw new Error(`HTTP error! status: ${e.status}`)
      return e.json()
    }).then((e) => {
      var a
      const r = e.product
      return {
        title: r.title,
        product_type: r.product_type,
        handle: r.handle,
        price: r.variants[0].price,
        compare_at_price: r.variants[0].compare_at_price,
        image_src: r.image.src,
        description: (a = document.querySelectorAll(".products-list__item__description")[o]) == null ? void 0 : a.innerText
      }
    })
  }
  function k() {
    const t = [], o = [
      "hawk-3-1080p-hd-outdoor-smart-wi-fi-security-camera-white-2-pack",
      "geeni-look-2-pack-1080p-hd-smart-home-surveillance-system-with-night-vision-motion-detection-2-way-audio-remote-access-with-ios-android-app-no-hub-required-black",
      "geeni-lookout-2k-outdoor-auto-follow-camera"
    ]
    document.querySelectorAll(".products-list__container .btn.btn--primary").forEach((n) => {
      const s = n.href
      s && t.push(s.split("https://mygeeni.com/products/")[1])
    })
    const e = t.map((n, s) => _(n, s))
    Promise.all(e).then((n) => {
      console.log(n)
      const s = n.length, i = (
        /*html*/
        `
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            ${n.map((p, m) => (
          /*html*/
          `
        <div class="glide__slide new-arrivals-product">
          
          
            <div class="new-arrivals-product__img-wrap">
              <img src="${p.image_src}" alt="${p.title}">
            </div>
            <div class="new-arrivals-product__content">
              <div class="new-arrivals__nav">
                <div class="swiper-button-prev-mob">
                  <img src="${l}/arrow-l.svg" alt="arrow left">
                </div>
                <p class="new-arrivals-product__number">${m + 1}/${s}</p>
                <div class="swiper-button-next-mob">
                  <img src="${l}/arrow-r.svg" alt="arrow right">
                </div>
              </div>
              <a class="new-arrivals-product__title" href="/products/${p.handle}">${p.title}</a>
              <div class="new-arrivals-product__price">
                <span>$${p.price}</span>
              </div>
              <p class="new-arrivals-product__description">${document.querySelectorAll(".products-list__item__description")[m].innerText}</p>
              <a class="crs-btn" href="/products/${p.handle}">Shop now</a>
            </div>

          
        </div>`
        )).join("")}
          </ul>
        </div>

        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            <img src="${l}/arrow-l.svg" alt="arrow left">
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            <img src="${l}/arrow-r.svg" alt="arrow right">
          </button>
        </div>
      </div>
    `
      )
      c(".new-arrivals .new-arrivals__content").then((p) => p == null ? void 0 : p.insertAdjacentHTML("beforeend", i))
    }).catch((n) => console.error("Error:", n))
    const a = (window._dy_customer_logged_in && window._dy_customer_logged_in.email !== void 0 ? t : o).map((n, s) => _(n, s))
    Promise.all(a).then((n) => {
      console.log(n)
      const d = (
        /*html*/
        `
        <div class="hero">
          <div class="container">
            <!-- Slider main container -->
            <div class="swiper">
              <!-- Additional required wrapper -->
              <div class="swiper-wrapper">
                <!-- Slides -->
                ${n.map((i, p) => {
          const m = i.compare_at_price - i.price, I = Math.round(m / i.compare_at_price * 100), x = m > 0 ? `Save ${I}%` : "", z = i.compare_at_price && i.compare_at_price !== i.price ? `$${i.compare_at_price}` : "", j = i.product_type.toLowerCase().includes("camera") ? "Cameras" : i.product_type
          return (
            /*html*/
            `
          <div class="swiper-slide product">
            <img class="product__img" src="${i.image_src}" alt="${i.title}">
            <div class="product__number">
              <p>${p + 1}/${n.length}</p>
            </div>
            <div class="product__info">
              <p class="product__type">${j}</p>
              <a class="product__title" href="/products/${i.handle}">${i.title}</a>
              <div class="product__price">
                <span>$${i.price}</span>
                <span>${z}</span>
                ${x !== "" ? `<span>${x}</span>` : ""}
              </div>
  
              <a class="product__btn" href="/products/${i.handle}">Shop now</a>
            </div>
          </div>`
          )
        }).join("")}
              </div>
  
              <div class="hero-swiper-nav">
                <div class="swiper-button-prev">
                  <img src="${l}/arrow-l.svg" alt="arrow left">
                </div>
                <div id="slide-number"><p></p></div>
                <div class="swiper-button-next">
                  <img src="${l}/arrow-r.svg" alt="arrow right">
                </div>
              </div>
              
            </div>
          </div>
        </div>
      `
      )
      v === "desktop" ? c(".free-shipping").then((i) => i == null ? void 0 : i.insertAdjacentHTML("afterend", d)) : c(".shop-all").then((i) => i == null ? void 0 : i.insertAdjacentHTML("afterend", d))
    }).catch((n) => console.error("Error:", n))
  }
  function S() {
    function t(o, e, r) {
      const a = document.createElement("link")
      a.href = o, a.rel = e, r && (a.crossOrigin = r), document.head.appendChild(a)
    }
    t("https://fonts.googleapis.com", "preconnect"), t("https://fonts.gstatic.com", "preconnect", "true"), t("https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap", "stylesheet")
  }
  function A() {
    const t = setInterval(() => {
      const o = document.getElementById("INDmenu-btn"), e = document.getElementById("launcher")
      o && e && (clearInterval(t), c(".additional-functional").then((r) => r.addEventListener("click", (a) => {
        var n
        a.target, a.target.closest('[data-img-func="accessibility"]') ? o.click() : a.target.closest('[data-img-func="sale"]') ? (n = document.querySelector(".kl-teaser-T4UsqC")) == null || n.click() : a.target.closest('[data-img-func="chat"]') && (e.contentDocument || e.contentWindow.document).querySelector('[data-garden-id="buttons.icon_button"]').click()
      })), setInterval(() => {
        var r, a, n
        if (document.querySelector('[data-testid="POPUP"]') ? (r = document.querySelector('.additional-functional [data-img-func="sale"]')) == null || r.classList.remove("hidden-el") : document.querySelector(".kl-teaser-T4UsqC") ? (n = document.querySelector('.additional-functional [data-img-func="sale"]')) == null || n.classList.remove("hidden-el") : (a = document.querySelector('.additional-functional [data-img-func="sale"]')) == null || a.classList.add("hidden-el"), document.querySelector('iframe[title="Number of unread messages"]')) {
          const s = document.querySelector('iframe[title="Number of unread messages"]'), i = (s.contentDocument || s.contentWindow.document).querySelector(".gwgkTo")
          document.querySelector('[data-img-func="chat"] p') && (i != null && i.textContent) && (document.querySelector('[data-img-func="chat"]').classList.add("display-msg-number"), document.querySelector('[data-img-func="chat"] p').innerText = i.textContent, console.log(i.textContent))
        } else
          document.querySelector(".display-msg-number") && document.querySelector(".display-msg-number").classList.remove("display-msg-number")
      }, 1e3))
    }, 100)
  }
  function $() {
    h(["https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js", "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"])
    const t = setInterval(() => {
      typeof Swiper < "u" && (clearInterval(t), c(".hero .swiper").then((o) => {
        const e = o.clientWidth, a = e * 1.07 - e + 16
        new Swiper(".hero .swiper", {
          navigation: {
            nextEl: ".hero .swiper-button-next",
            prevEl: ".hero .swiper-button-prev"
          },
          slidesPerView: 1.13,
          spaceBetween: 8,
          slidesOffsetAfter: a,
          // adjust this value as needed
          breakpoints: {
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesOffsetAfter: 0
            }
          },
          on: {
            init: function () {
              document.querySelector("#slide-number p").innerText = `${this.realIndex + 1}/${this.slides.length}`
            },
            slideChange: function () {
              document.querySelector("#slide-number p").innerText = `${this.realIndex + 1}/${this.slides.length}`
            }
          }
        })
      }), c(".trusted-reviews .swiper").then((o) => {
        new Swiper(".trusted-reviews .swiper", {
          slidesPerView: 3.8,
          spaceBetween: 8,
          loop: !1,
          navigation: {
            nextEl: ".trusted-reviews .swiper-button-next",
            prevEl: ".trusted-reviews .swiper-button-prev"
          },
          on: {
            reachEnd: function () {
              var e;
              (e = document.querySelector(".trusted-reviews .swiper")) == null || e.classList.add("reached-end")
            }
          }
        })
      }))
    }, 100)
  }
  function T() {
    v === "mobile" && c('.mobile-menu [aria-controls="nav-drawer"]').then((t) => {
      document.querySelector("h1.logo").insertAdjacentElement("beforebegin", t)
    })
  }
  function f(t, o) {
    const e = `[data-products-type="${t}"] .products-wrapper`
    c(e).then((r) => {
      const a = document.querySelectorAll(o)
      for (let s = 0; s < 4; s++) {
        const d = a[s]
        r.appendChild(d)
      }
      const n = setInterval(() => {
        const s = document.querySelectorAll(`${e} .product-grid-item__title`)
        s[3] && (clearInterval(n), s.forEach((d, i) => {
          document.querySelectorAll(`${e} .product-grid-item__inner`)[i].insertAdjacentHTML("beforeend", `<a class="product__shop-now" href="${d.href}">Shop now</a>`)
        }))
      }, 100)
    })
  }
  function B() {
    const t = setInterval(() => {
      document.querySelector("#shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b .product-grid-item__inner") && document.querySelector("#shopify-section-template--16970486120700__section_collection_CbegNw .product-grid-item__inner") && (clearInterval(t), f("popular-products", "#shopify-section-template--16970486120700__c779e8b3-bda2-49eb-b1f7-031ddd03321b .product-grid-item__inner"), f("hot-deals", "#shopify-section-template--16970486120700__section_collection_CbegNw .product-grid-item__inner"))
    }, 100)
  }
  function E() {
    h(["https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/css/glide.core.min.css", "https://cdn.jsdelivr.net/npm/@glidejs/glide@3.4.1/dist/glide.min.js"]).then(() => {
      const t = setInterval(() => {
        if (typeof Glide < "u" && document.querySelector(".glide")) {
          clearInterval(t), new Glide(".glide", {
            type: "carousel",
            startAt: 0,
            perView: 2,
            focusAt: "center",
            keyboard: !1,
            bound: !0,
            rewind: !0,
            controls: {
              prev: ".glide__arrow--left",
              next: ".glide__arrow--right"
            },
            breakpoints: {
              768: {
                perView: 1.6
              }
            }
          }).mount()
          const o = setInterval(() => {
            const e = document.querySelector(".glide__arrow--left"), r = document.querySelector(".glide__arrow--right"), a = document.querySelector(".glide")
            e && r && (console.log("Arrows are ready"), clearInterval(o), a.addEventListener("click", (n) => {
              console.log(n.target), n.target.closest(".swiper-button-prev-mob") && e.dispatchEvent(new Event("click")), n.target.closest(".swiper-button-next-mob") && r.dispatchEvent(new Event("click"))
            }))
          }, 100)
        }
      }, 100)
    })
  }
})();
//# sourceMappingURL=index.js.map
