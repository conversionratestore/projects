console.log('%c EXP: New mobile style', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')
const git = 'https://conversionratestore.github.io/projects/paintscratch/img'
if ($('meta[name="viewport"]').length === 0) {
  document.head.insertAdjacentHTML(
    'afterbegin',
    /* html */ `<meta name="viewport" content="width=device-width, initial-scale=1" />`
  )
}

const loadScriptOrStyle = url => {
  return new Promise((resolve, reject) => {
    // check script by document.scripts
    const type = url.split('.').pop()
    if (type === 'js') {
      const loadedScripts = Array.from(document.scripts).map(script => script.src.toLowerCase())
      if (loadedScripts.includes(url.toLowerCase())) {
        console.log(`Script ${url} allready downloaded!`)
        return resolve('')
      }
      const script = document.createElement('script')
      script.src = url
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    } else if (type === 'css') {
      const loadedStyles = Array.from(document.styleSheets).map(style => style.href?.toLowerCase())
      if (loadedStyles.includes(url.toLowerCase())) {
        console.log(`Style ${url} allready downloaded!`)
        return resolve('')
      }
      const style = document.createElement('link')
      style.rel = 'stylesheet'
      style.href = url
      style.onload = resolve
      style.onerror = reject
      document.head.appendChild(style)
    }
  })
}

// load list of scripts
const loadScriptsOrStyles = async urls => {
  for (const url of urls) {
    await loadScriptOrStyle(url)
    console.log(`Loaded librari ${url}`)
  }
  console.log('All libraries loaded!')
}

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

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'mobile_view', 'variant_1')
  }
}, 1000)

const cameraSvg = /* html */ `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
<g clip-path="url(#clip0_128_12692)">
<path d="M1 0H11C11.2756 0 11.5111 0.100833 11.7067 0.3025C11.9022 0.504167 12 0.747084 12 1.03125V9.96875C12 10.2529 11.9022 10.4958 11.7067 10.6975C11.5111 10.8992 11.2756 11 11 11H1C0.724444 11 0.488889 10.8992 0.293333 10.6975C0.0977778 10.4958 0 10.2529 0 9.96875V1.03125C0 0.747084 0.0977778 0.504167 0.293333 0.3025C0.488889 0.100833 0.724444 0 1 0ZM16 9.625L12 5.5L16 1.375V9.625Z" fill="#253189"/>
</g>
<defs>
<clipPath id="clip0_128_12692">
<rect width="16" height="11" fill="white" transform="matrix(1 0 0 -1 0 11)"/>
</clipPath>
</defs>
</svg>
`

const btnArrowSvg = /* html */ `
<svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
<path d="M0 11.5V0.5L9 6L0 11.5Z" fill="#333333"/>
</svg>
`

const plusSvg = /* html */ `
<svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7C13 7.5625 12.5312 8.03125 12 8.03125H7.5V12.5312C7.5 13.0625 7.03125 13.5 6.5 13.5C5.9375 13.5 5.5 13.0625 5.5 12.5312V8.03125H1C0.4375 8.03125 0 7.5625 0 7C0 6.46875 0.4375 6.03125 1 6.03125H5.5V1.53125C5.5 0.96875 5.9375 0.5 6.5 0.5C7.03125 0.5 7.5 0.96875 7.5 1.53125V6.03125H12C12.5312 6 13 6.46875 13 7Z" fill="#333333"/>
</svg>
`

const minusSvg = /* html */ `
<svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2H1C0.4375 2 0 1.5625 0 1C0 0.46875 0.4375 0 1 0H12C12.5312 0 13 0.46875 13 1C13 1.5625 12.5312 2 12 2Z" fill="#333333"/>
</svg>
`

const closeSvg = /* html */ `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_510_13116)">
<path d="M5.01041 3.40381L8.19239 6.58579L11.3744 3.40381C11.75 3.02816 12.4129 3.02816 12.7886 3.40381C13.1863 3.80155 13.1642 4.44237 12.7886 4.81802L9.6066 8L12.7886 11.182C13.1863 11.5797 13.1642 12.2205 12.7886 12.5962C12.3908 12.9939 11.7721 12.9939 11.3744 12.5962L8.19239 9.41421L5.01041 12.5962C4.61266 12.9939 3.99394 12.9939 3.59619 12.5962C3.22054 12.2205 3.19845 11.5797 3.59619 11.182L6.77817 8L3.59619 4.81802C3.22054 4.44237 3.19845 3.80155 3.59619 3.40381C3.97184 3.02816 4.63476 3.02816 5.01041 3.40381Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_510_13116">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
`

const librariesLinks = [
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css',
  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css'
]

loadScriptsOrStyles(librariesLinks)

class mobileDesign {
  constructor(p) {
    this.page = p
    this.init()
  }

  init() {
    switch (this.page) {
      case '/':
        this.mainPage()
        break
      case '/touch-up-paint-codes/paint-code.html':
        this.paintCodePage()
        break
      case '/cgi-bin/select-color.cgi':
        this.colorPage()
        break
      case '/cgi-bin/order-form.cgi':
        this.productsPage()
        break
      case '/cgi-bin/guided-order.cgi':
        this.productsPage()
        break
      case '/cgi-bin/shopping-cart.cgi':
        this.cartPage()
        break
      case '/cgi-bin/check-out.cgi':
        this.checkoutPage()
        break
      case '/cgi-bin/review-order.cgi':
        this.orderPage()
        break
      default:
        break
    }
    if (
      this.page !== '/' &&
      (this.page === '/cgi-bin/select-color.cgi' ||
        this.page === '/cgi-bin/order-form.cgi' ||
        this.page === '/cgi-bin/guided-order.cgi' ||
        this.page === '/cgi-bin/shopping-cart.cgi' ||
        this.page === '/cgi-bin/check-out.cgi' ||
        this.page === '/cgi-bin/review-order.cgi')
    ) {
      this.globalStyle()
      this.headerChange()
      this.footerChange()
      this.beforeFooter()
    }
  }

  globalStyle() {
    const style = /* html */ `
      <style>
        #wrapper {
          width: 100%;
          margin-top: 0;
        }
        #page, #main, #side {
          float: unset !important;
          width: 100% !important;
          margin: 0 !important;
        }
        #page {
          padding-bottom: 0;
        }
        #page * {
          float: unset !important;
        }
        #side, 
        #bottom-information img,
        #scrollingDiv {
          display: none;
        }
        #main {
          padding: 0 15px;
          background-color: #fff;
        }
        #page #main p {
          margin: 0;
          font-size: 14px;
          line-height: 22px;
          overflow-wrap: break-word;
        }

        #page .slick-slide {
          float: left !important;
        }
        .screenpop {
          width: 100% !important;
          padding: 0 15px !important;
        }
        div.screenpop .inner, div.screenpop .inner>div{
          width: 100% !important;
        }
        div.screenpop .inner a.action-button-orange {
          width: 100%;
        }
      </style>
    `

    document.head.insertAdjacentHTML('beforeend', style)
  }

  mainPage() {
    const style = /* html */ `
      <style>
        #panel_links, #car_make_links, #page_sidebar {
          display: none;
        }
        body {
          background-color: #eee;
        }
        #home-text h1 {
          font-size: 24px !important;
          line-height: 1.25 !important;
          margin-bottom: 8px !important;
        }
        #home-text p {
          line-height: 22px;
          margin-bottom: 24px;
        }
        #color_search_widget {
          border-radius: 4px;
          position: relative;
          padding: 21px 11px 0;
        }
        #color_search_widget span.start-here {
          position: absolute;
          background-color: #fff;
          top: -26px;
          left: 8px;
          z-index: 1;
          font-size: 24px !important;
          line-height: 30px !important;
          padding: 0 8px;
          display: block;
        }
        #top_right_links {
          width: calc(100% + 22px) !important;
          margin: 24px 0 0 -11px !important;
          padding: 9px !important;
        }
        #top_right_links a {
          font-size: 16px !important;
          line-height: 1.5 !important;
          text-decoration: none !important;
          font-weight: 700;
          position: relative;
          width: fit-content;
          margin: 0 auto;
        }
        #top_right_links a span {
          display: none;
        }
        #top_right_links>a::after {
          content: '';
          width: 10px;
          height: 6px;
          background: url(${git}/chevron.svg) no-repeat center;
          background-size: contain;
          position: absolute;
          top: 50%;
          right: -20px;
          transform: translateY(-50%);
        }
        #color_search_widget .search-select {
          margin-bottom: 16px;
        }
        #find_your_color {
          margin-top: 0 !important;
        }
        #color_search_widget .action-button-orange.btn {
          width: calc(100% - 10px) !important;
          margin-left: 5px;
          height: auto;
          padding: 6px;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 16px;
        }
        .ps-logo .img-responsive {
          min-height: unset !important;
          min-width: unset !important;
          height: 34px !important;
          width: 52px !important;
          top: 17px !important;
          left: 10px !important;
        }
      </style>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    $('#color_search_widget .action-button-orange.btn').append(btnArrowSvg)
    this.beforeFooter()
    this.footerChange()
  }

  paintCodePage() {
    const style = /* html */ `
      <style>
        #panel_links, #car_make_links, #page_sidebar>*:not(#color_search_widget), .breadcrumb {
          display: none;
        }
        body {
          background-color: #eee;
        }
        .ps-logo .img-responsive {
          min-height: unset !important;
          min-width: unset !important;
          height: 34px !important;
          width: 52px !important;
          top: 17px !important;
          left: 10px !important;
        }
        .page-content h1 {
          margin-top: 10px;
          font-size: 16px !important;
          line-height: 1.5 !important;
        }
        #color_search_widget_copy {
          margin-top: 40px;
        }
        #color_search_widget {
          margin-top: 30px;
        }
        [id*=color_search_widget] .panel-primary{
          position: relative;
          padding-top: 15px;
        }
        p+.panel-primary {
          position: relative;
        }
        [id*=color_search_widget] .panel-heading, p+.panel-primary .panel-heading {
          background-color: #fff !important;  
          padding: 0 !important;
          border-bottom: none !important;
        }
        [id*=color_search_widget] h3, p+.panel-primary h2 {
          color: #0373BD;
          padding: 0 8px;
          background-color: #fff;
          position: absolute;
          left: 8px;
          top: -15px;
          font-size: 24px !important;
          line-height: 30px !important;
        }
        p+.panel-primary h2 {
          font-size: 18px !important;
          line-height: 26px !important;
          top: -10px;
        }
        [id*=color_search_widget] .action-button-orange, p+.panel-primary .btn-primary, #color_search_widget_copy button {
          width: 100% !important;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 16px;
          color: #333;
          font-size: 16px !important;
          line-height: 1.5 !important;
          font-weight: 700 !important;
          padding: 6px;
        }
        p+.panel-primary select {
          display: flex;
          width: 100% !important;
          margin-top: 4px;
          border: 2px solid #CCC;
          background: #FFF;
          padding: 5px 10px;
        }
        #color_search_widget_copy {
          display: flex;
          flex-direction: column;
          row-gap: 16px;
          position: relative;
          padding: 31px 16px 16px;
          border-radius: 4px;
          border: 1px solid #0373BD;
          margin-bottom: 24px;
        }
        #color_search_widget_copy label {
          margin-bottom: 0;
        }
        #color_search_widget_copy label, #color_search_widget_copy button, #color_search_widget_copy select {
          width: 100%;
        }
        #color_search_widget_copy h3 {
          top: -35px;
          font-weight: 700;
        }
        #color_search_widget_copy select {
          border-radius: 4px;
          border: 1px solid #CCC;
          background: #EEE;
          padding: 8px;
        }
        #color_search_widget_copy select.active {
          background: #FFF;
        }
        #color_search_widget_copy select:not(.active) {
          pointer-events: none;
        }
      </style>
    `

    const copyBlock = /* html */ `
      <div id="color_search_widget_copy">
        <h3>Order Touch Up Paint</h3>
        <label>
          <select name="select_year" id="select_year_copy" class="active">
          </select>
        </label>
        <label>
          <select name="select_make" id="select_make_copy">
          </select>
        </label>
        <label>
          <select name="select_model" id="select_model_copy">
          </select>
        </label>
        <button>Find Your Color</button>
      </div>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    this.beforeFooter()
    this.footerChange()

    document.querySelector('h1').insertAdjacentHTML('afterend', copyBlock)
    $('.action-button-orange, p+.panel-primary .btn-primary, #color_search_widget_copy button').append(btnArrowSvg)

    $('#select_year option').clone().appendTo('#select_year_copy')
    $('#select_make option').clone().appendTo('#select_make_copy')

    $('#select_year_copy').on('change', function () {
      pushDataLayer('exp_mob_redes_dropdown_year_sel', 'Year', 'Dropdown', 'Order Touch Up Paint')
      $('#select_year').val($(this).val())
      $('#select_year').trigger('change')
      $('#select_model option').clone().appendTo('#select_model_copy')
      if ($(this).val() !== '') {
        $('#select_make_copy').addClass('active')
        setTimeout(() => {
          $('#select_make_copy').html('')
          $('#select_make option').clone().appendTo('#select_make_copy')
        }, 1000)
      } else {
        $('#select_make_copy').removeClass('active')
        $('#select_model_copy').removeClass('active')
      }
    })

    $('#select_make_copy').on('change', function () {
      pushDataLayer('exp_mob_redes_dropdown_make_sel', 'Make', 'Dropdown', 'Order Touch Up Paint')
      $('#select_make').val($(this).val())
      $('#select_make').trigger('change')
      if ($(this).val() !== '') {
        $('#select_model_copy').addClass('active')
        setTimeout(() => {
          $('#select_model_copy').html('')
          $('#select_model option').clone().appendTo('#select_model_copy')
        }, 1000)
      } else {
        $('#select_model_copy').removeClass('active')
      }
    })

    $('#select_model_copy').on('change', function () {
      pushDataLayer('exp_mob_redes_dropdown_model_sel', 'Model', 'Dropdown', 'Order Touch Up Paint')
      $('#select_model').val($(this).val())
      $('#select_model').trigger('change')
    })

    $('#color_search_widget_copy button').on('click', function () {
      pushDataLayer('exp_mob_redes_btn_find_your_color', 'Find Your Color', 'Button', 'Order Touch Up Paint')
      $('#find_colors_button').click()
    })
  }

  colorPage() {
    const style = /* html */ `
      <style>
        #color-display-table {
         width: 100% !important;
        }
        .select-color #color-display-table td.color-info span.color-code {
          width: unset;
        }
        .select-color #page #main #bottom-information {
          width: 100% !important;
          margin: 0;
          padding: 16px;
          height: auto;
        }
        .select-color #page #main #bottom-information ul#color-choose-notes {
          margin-left: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          row-gap: 14px;
        }
        .select-color #page #main #bottom-information ul#color-choose-notes li {
          width: 100%;
          font-size: 14px;
          line-height: 22px;
          color: #333;
          padding-bottom: 0;
        }
        #page #main #bottom-information a {
          font-size: 14px;
          line-height: 22px;
          font-weight: 700;
        }
        #page #main h1 {
          font-size: 20px;
          line-height: 1.5;
        }
        .select-color ul#benefit-list {
          margin: 0 0 24px;
        }
        .select-color ul#benefit-list li {
          display: flex;
          align-items: center;
          font-size: 14px;
        }
        .select-color ul#benefit-list li span {
          font-weight: 400;
          line-height: 22px;
        }
        .select-color span.instructions {
          display: flex !important;
          font-size: 16px !important;
          line-height: 1.5;
          color: #333;
          margin-bottom: 12px;
        }
        .select-color span.instructions a {
          display: none;
        }
        .select-color span.instructions + p {
          color: #00E;
          line-height: 1.28;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          row-gap: 12px;
        }
        .select-color span.instructions + p a {
          margin-left: 0 !important;
          text-decoration: none;
          font-size: 14px;
          position: relative;
          width: fit-content;
        } 
        .select-color span.instructions + p a::after {
          content: '';
          width: 14px;
          height: 8px;
          background: url(${git}/chevron.svg) no-repeat center;
          background-size: contain;
          position: absolute;
          top: 50%;
          right: -20px;
          transform: translateY(-50%);
        }
        .select-color span.instructions + p a:first-of-type::after {
          transform: translateY(-50%) rotate(-90deg);
        }
        .select-color span.instructions + p a img {
          display: none;
        }
        #find_color_code {
          margin-right: 0 !important;
          margin-bottom: 0 !important;
          border-radius: 4px;
          border: 1px solid #0373BD !important;
          padding: 16px !important;
        }
        #find_color_code h2 {
          font-size: 16px;
          line-height: 1.5;
          color: #333;
          margin-bottom: 8px;
        }
        #color-display-table tr:last-of-type td {
          border-bottom: 1px solid #fff !important;
        }
        #color-display-table tr:last-of-type td h3 {
          font-size: 16px;
          line-height: 1.5;
          color: #333;
          padding-top: 35px;
        }
        #color-display-table tr:last-of-type td h3 a {
          color: #00E;
          text-decoration: none;
        }
        #select-products-actions {
          display: none;
        }
        a.action-button-orange {
          display: inline-flex;
          align-items: center;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%) !important;
          column-gap: 16px;
          justify-content: center;
        }
        a.action-button-orange span {
          font-size: 16px !important;
          padding: 0 !important;
        }
        .select-color #color-display-table td.color-info span.color-name {
          line-height: 1.3;
        }
        #bottom-warning-msg {
          width: 100% !important;
          margin-bottom: 12px;
        }
      </style>
    `
    $('a.action-button-orange').append(btnArrowSvg)
    document.head.insertAdjacentHTML('beforeend', style)
  }

  productsPage() {
    const style = /* html */ `
      <style>
        #basecoat_required + div {
          width: 100% !important;
          position: relative;
          height: auto !important;
          margin-top: 0 !important;
          padding: 16px 12px 12px;
          border-radius: 4px;
          margin-bottom: 24px !important;
        }
        #basecoat_required + div> img,
        .need-help-bar,
        .need-help-bar + div,
        #main>.category-heading,
        #single-products-container + div
         {
          display: none;
        }
        #basecoat_required + div> p {
          position: unset !important;
          font-size: 14px !important;
          line-height: 22px !important;
        }
        #basecoat_required + div> p strong {
          display: block;
          font-size: 16px !important;
          line-height: 24px !important;
          margin-bottom: 8px;
        }
        #basecoat_required + div> button {
          position: absolute !important;
          top: 12px !important;
          right: 12px !important;
        }
        .orderforms .car-touch-up-paints-heading #color-swatch {
          float: left !important;
          margin-top: 0 !important;
        }
        .orderforms #page #main .car-touch-up-paints-heading h1 {
          font-size: 14px !important;
          line-height: 22px !important;
        }
        #page #main .car-touch-up-paints-heading .small-note {
          margin-top: 8px !important;
        }
        .orderforms .top-note {
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .regular #kits, .regular .category-heading, .regular #single-products-container, .regular .need-help-bar span.need-help-text {
          width: 100% !important;
        }
        .regular #kits * {
          margin: 0 !important;
          padding: 0 !important;
        }
        .regular #kits {
          padding-top: 24px;
        }
        .regular #kits .category-heading h2 {
          font-size: 20px !important;
          line-height: 1.5 !important;
          margin-bottom: 8px !important;
        }
        .regular #page #main #kits .category-heading p {
          font-size: 14px;
          border-bottom: none;
          padding-bottom: 24px !important;
        }
        .regular #kits #kit-container .kit-item {
          width: 100% !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          row-gap: 8px;
          padding: 16px 40px !important;
          border-bottom: 1px solid #DBDBDB !important;
        }
        .regular #kits a.add-to-cart {
          display: flex;
          height: auto !important;
          width: fit-content !important;
          padding: 6px 26px !important;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
        }
        .regular #kits #kit-container .kit-item h3 {
          font-size: 18px !important;
        }
        .regular #kits #kit-container .kit-item p {
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .regular #wrapper #kits #kit-container .kit-item img {
          margin-bottom: 8px !important;
        }
        .orderforms #vin-help {
          width: 100% !important;
        }
        .orderforms #wrapper .car-touch-up-paints-heading {
          margin-top: 0 !important;
        }
        .strong-heading {
          text-align: left !important;
          font-size: 20px !important;
          line-height: 1.5 !important;
          margin-bottom: 16px !important;
        }
        .guided #guided-questions-wrap {
          margin-right: 0 !important;
          padding: 16px !important;
          margin-bottom: 16px !important;
        }
        .guided #blank-space {
          width: 100%;
          height: auto;
          padding: 58px 37px;
        }
        .guided #blank-space h2 {
          padding: 0 !important;
          font-style: normal !important;
          line-height: 22px !important;
        }
        #guided-questions tr {
          display: flex;
          flex-direction: column;
          row-gap: 12px;
        }
        #guided-questions tr:not(:last-of-type) {
          margin-bottom: 12px;
        }
        #guided-questions tr td {
          width: 100% !important;
          display: flex;
          column-gap: 10px;
        }
        #guided-questions tr td a {
          font-size: 14px !important;
          line-height: 22px !important;
          color: #333 !important;  
        }
        #guided-questions tr td input {
          margin: 0 !important;
          height: 24px;
          width: 24px;
        }
        #page #main #bottom-information {
          width: 100%;
        }
        #page #main #bottom-information h3 {
          text-decoration: none;
          font-size: 18px;
          margin-bottom: 16px;
        }
        #page #main #bottom-information a.bottom-pop-link {
          text-decoration: none;
          font-size: 14px !important;
          line-height: 18px !important;
          display: inline-flex !important;
          position: relative;
          width: fit-content !important;
        }
        #page #main #bottom-information a.bottom-pop-link::after {
          content: '';
          width: 14px;
          height: 8px;
          background: url(${git}/chevron.svg) no-repeat center;
          background-size: contain;
          position: absolute;
          top: 50%;
          right: -20px;
          transform: translateY(-50%);
        }
        #page #main #bottom-information #bottom-information-right {
          display: flex;
          flex-direction: column;
        }
        .guided #ordertotals {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
          margin-top: 12px;
        }
        .guided #ordertotals span.amount {
          margin-left: auto;
          margin-top: 0;
        }
        .guided #ordertotals div {
          margin-top: 0;
        }
        .guided #showhide {
          padding: 20px 0;
          border-bottom: 1px solid #ccc;
        }
        .guided #showhide a {
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .guided #guided-results, .guided #guided-results div,.guided #guided-results a, .guided #guided-results p, .guided #guided-results .price {
          width: auto;
          position: unset !important;
          height: auto !important;
        }
        .guided #guided-results {
          background-color: #fff;
        }

        .guided #guided-results .orderform, .guided #guided-results .additems {
          border: none;
        }
        .regular #single-products-container .products-list {
          width: calc(50% - 9px);
          text-align: center;
          height: auto !important;
          display: flex;
          flex-direction: column;
        }
        .regular #single-products-container .products-list a.related-items {
          margin: 0 auto 16px !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .regular #single-products-container .products-list a.related-items img {
          position: unset !important;
          padding: 0 !important;
          height: 100%;
        }
        .regular #page #main #single-products-container .products-list p {
          height: auto;
          padding: 0 !important;
          margin-bottom: 12px;
          line-height: 24px !important;
        }
        .regular #page #main #single-products-container .products-list p a {
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
          text-decoration: none;
        }
        .regular #single-products-container .products-list span.price {
          margin-top: auto;
          font-size: 18px !important;
          line-height: 24px !important;
          font-weight: 700;
        }
        .regular #single-products-container .products-list .add-to-cart {
          display: none;
        }
        .regular #wrapper #page #main .category-heading p {
          border-bottom: none;
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .slider_wrapper_product {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          padding-bottom: 16px;
          margin-bottom: 0 !important;
          border-bottom: 1px solid #DBDBDB;
        }
        .slider_wrapper_product .slick-slide:not(:last-of-type) {
          margin-right: 42px !important;
        }
        .slider_wrapper_product .slick-dots {
          bottom: 24px;
        }
        .slider_wrapper_product .slick-dots li {
          width: auto;
          height: auto;
          margin: 0 3px;
        }
        .slider_wrapper_product .slick-dots li button {
          box-sizing: border-box;
          width: 10px;
          height: 10px;
          border: 1px solid #ccc;
          padding: 0;
          margin: 0;
        }
        .slider_wrapper_product .slick-dots li.slick-active button {
          background-color: #333;
          border-color: #333;
        }
        .slider_wrapper_product .slick-dots li button::before {
          content: '';
        }
        .regular #single-products-container .products-list span.quantity,
        .regular #single-products-container .products-list select.quantity
         {
          display: none;
        }
        .to_cart {
          width: 100%;
          background-color: #fff;
          padding: 24px 15px;
        }
        .to_cart.fix {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 999;
          border-top: 1px solid #CCC;
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
        }
        .to_cart button span {
          display: flex;
          align-items: center;
          height: 19px;
          position: relative;
        }
        .to_cart button span b {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background-color: #900;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          position: absolute;
          top: -4px;
          right: -7px;
        } 
        .to_cart button img {
          height: 100%;
        }
        .to_cart button,
        #ordertotals a.action-button-orange {
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          width: 100%;
          display: flex;
          padding: 6px;
          justify-content: center;
          align-items: center;
          column-gap: 16px;
          color: #333;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 700;
        }
        #ordertotals a.action-button-orange span {
          padding: 0;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 700;
        }
        div.screenpop .inner {
          width: calc(100% - 30px);
        }
        div.screenpop {
          width: 100vw;
        }
        .list_qty {
          margin-top: 8px;
        }
        .list_qty>div {
          display: flex;
          align-items: center;
          justify-content: center;
          column-gap: 8px;
        }
        .list_qty div .qty_selector {
          display: flex;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .list_qty div .qty_selector > * {
          width: 32px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .list_qty div .qty_selector span {
          color: #333;
          font-size: 16px;
          font-weight: 900;
          line-height: 1px; /* 137.5% */
        }
        .list_qty div .qty_selector span:first-of-type {
          border-right: 1px solid #ccc;
        }
        .list_qty div .qty_selector span:last-of-type {
          border-left: 1px solid #ccc;
        }
        .list_qty div .qty_selector input {
          border: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
          color: #333;
          text-align: center;
        }
        .list_qty button {
          width: 100%;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          display: flex;
          padding: 6px;
          justify-content: center;
          align-items: center;
          column-gap: 16px;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 700;
          color: #333;
          margin-top: 12px;
        }
        .regular #single-products-container .products-list .add_to_cart img {
          position: unset;
          width: 26px;
          padding: 0;
          margin: 0;
        }
        #bottom-information span.help-icon,
        #bottom-information .small-note {
          display: none !important;
        }
        #ordertotals a.action-button-orange {
          width: 100%;
        }
        .guided #guided-results div.new_block {
          display: flex;
          column-gap: 8px;
          width: 100% !important;
          position: relative !important;
        }
        #guided-results .orderform div, #guided-results .additems div {
          padding: 0;
        }
        #guided-results .orderform, #guided-results .additems {
          padding: 8px 0 !important;
          border-bottom: 1px solid #CCC !important;
        }
        #guided-results .orderform>b, #guided-results .additems>b {
          display: none;
        }
        .new_block .img {
          width: 42px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0 !important;
        }
        #guided-results .additems .new_block .img img, #guided-results .orderform .new_block .img img {
          margin-right: 0 !important;
          height: unset !important;
          max-width: 100% !important;
        }
        .new_block .descr {
          width: calc(100% - 50px);
          display: flex;
          flex-direction: column;
          row-gap: 5px;
        }
        .new_block .descr a {
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          text-decoration: underline;
        }
        .new_block .descr p {
          font-size: 12px;
          line-height: 22px;
          color: #555;
        }
        .new_block .descr .input_block {
          display: flex;
          width: fit-content !important;
          align-items: center;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .new_block .descr .input_block>* {
          width: 32px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .new_block .descr .input_block span.minus {
          border-right: 1px solid #ccc;
        }
        .new_block .descr .input_block span.plus {
          border-left: 1px solid #ccc;
        }
        .new_block .descr .input_block span img {
          width: 50% !important;
          height: 50% !important;
        }
        .new_block .descr .input_block input {
          width: 32px !important;
          margin-right: 0 !important;
          border: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
          color: #333;
          text-align: center;
        }
        .guided #guided-results .new_block .descr .price {
          position: absolute !important;
          right: 0;
          bottom: 8px;
          font-size: 14px !important;
          line-height: 22px !important;
          color: #333 !important;
          font-weight: 700 !important;
          margin-right: 0 !important;
          top: unset !important;
        }
        #thecartkey .item-quantity {
          display: none;
        }
        #thecartkey td {
          display: flex;
          justify-content: space-between;
        }
        .guided #guided-results #thecartkey span.item-description {
          width: 100% !important;
          margin-left: 0 !important;
        }
        .slider_wrapper_product .show_more {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 8px;
        }
        .slider_wrapper_product .show_more button {
          border: none;
          background: none;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.5;
          color: #0373BD;
          text-decoration: underline;
        }
        .add_to_cart_info {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          background-color: #0373BD;
          padding: 10px 16px;
          z-index: 999;
        }
        .add_to_cart_info p {
          font-size: 14px;
          line-height: 20px;
          color: #fff;
          margin-bottom: 0;
          padding-right: 32px;
          font-weight: 700;
          text-align: left;
        }
        .add_to_cart_info .close {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          border: none;
          background: none;
        }
      </style>
    `

    const toCart = /* html */ `
      <div class="to_cart">
        <button><span><img src="${git}/cart.png" alt=""></span>View Shopping Cart ${btnArrowSvg}</button>
      </div>
    `

    const listQty = /* html */ `
        <div class="list_qty">
          <div>
            <div class="qty_selector">
              <span>${minusSvg}</span>
              <input type="text" value="1" readonly>
              <span>${plusSvg}</span>
            </div>
          </div>
          <button class="add_to_cart"><img src="${git}/cart.png" alt="">Add to Cart</button>
        </div>
    `

    const listBlock = /* html */ `
      <div class="new_block">
        <div class="img"></div>
        <div class="descr">
          <div class="input_block">
            <span class="minus">${minusSvg}</span>
              
              <span class="plus">${plusSvg}</span>
          </div>
        </div>
      </div>
    `

    const slideInCart = /* html */ `
        <div class="slide_cart">
          <style>
            .overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100dvh;
              background-color: rgba(0, 0, 0, 0.5);
              z-index: 999;
              display: none;
            }
            .overlay.active {
              display: block;
            }
            .slide_cart {
              position: fixed;
              top: 0;
              right: -100%;
              width: calc(100vw - 20px);
              height: 100dvh;
              background-color: #fff;
              z-index: 1000;
              padding: 15px;
              transition: all 0.3s;
              display: flex;
              flex-direction: column;
            }
            .slide_cart h3 {
              font-size: 20px;
              line-height: 1.5;
              margin-bottom: 16px;
              color: #333;
            }
            .slide_cart .close {
              position: absolute;
              top: 15px;
              right: 15px;
              width: 20px;
              height: 20px;
            }
            .slide_cart .close span {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 100%;
              height: 2px;
              background-color: #333;
              transform: translate(-50%, -50%) rotate(45deg);
            }
            .slide_cart .close span:last-of-type {
              transform: translate(-50%, -50%) rotate(-45deg);
            }
            .slide_cart>button {
              margin-top: 16px;
              border-radius: 4px;
              border: 2px solid #E68626;
              background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
              padding: 6px;
              font-size: 16px;
              line-height: 1.5;
              font-weight: 700;
              color: #333;
            }
            .slide_cart .sub_total {
              font-size: 18px;
              line-height: 1.5;
              font-weight: 700;
              margin-top: 16px;
              align-self: end;
            }
            .slide_cart ul {
              max-height: calc(100% - 180px);
              overflow-y: auto;
            }
            .slide_cart ul li {
              width: 100%;
              display: flex;
              align-items: center;
              column-gap: 8px;
              padding: 8px 0;
              border-bottom: 1px solid #ccc;
              position: relative;
            }
            .slide_cart ul li .img {
              width: 50px;
              height: 50px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .slide_cart ul li .img img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
            .slide_cart ul li h4 {
              font-size: 14px;
              line-height: 22px;
              color: #00E;
              font-weight: 700;
            }
            .cart_item_price {
              position: absolute;
              right: 10px;
              bottom: 8px;
              font-size: 14px;
              line-height: 22px;
              color: #333;
              font-weight: 700;
            }
            .cart_item_qty {
              display: flex;
              align-items: center;
              width: fit-content;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            .cart_item_qty>* {
              width: 32px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .cart_item_qty span.minus {
              border-right: 1px solid #ccc;
            }
            .cart_item_qty span.plus {
              border-left: 1px solid #ccc;
            }
            .cart_item_qty input {
              border: none;
              font-size: 16px;
              font-weight: 700;
              line-height: 1.5;
              color: #333;
              text-align: center;
            }
          </style>
          <div class="close">
            <span></span>
            <span></span>
          </div>
          <h3>Shopping cart</h3>
          <ul></ul>
          <div class="sub_total"></div>
          <button class="to_checkout">To checkout</button>
        </div>
    `

    document.head.insertAdjacentHTML('beforeend', style)

    if (this.page === '/cgi-bin/order-form.cgi') {
      document.body.insertAdjacentHTML('beforeend', slideInCart)
      document.body.insertAdjacentHTML('beforeend', '<div class="overlay"></div>')
      createSliders()

      $('#page').append(toCart)

      $('.to_cart button').on('click', () => {
        drawCart()
        $('.overlay').addClass('active')
        $('.slide_cart').css('right', '0')
        $('body').css('overflow', 'hidden')
        pushDataLayer('exp_mob_redes_view_cart_st_btn', 'View Shopping cart', 'Button', 'Sticky section')
      })

      $('.slide_cart ul').on('click', '.minus', function () {
        let qty = $(this).next().val()
        if (qty > 1) {
          qty--
          $(this).next().val(qty).change()
        } else {
          qty--
          $(this).next().val(qty).change()
        }
        pushDataLayer('exp_mob_redes_slide_dec_qnt_btn', 'Decrease qnt', 'Button', 'Slide cart')
      })

      $('.slide_cart ul').on('click', '.plus', function () {
        let qty = $(this).prev().val()
        if (qty < 10) {
          qty++
          $(this).prev().val(qty).change()
        }
        pushDataLayer('exp_mob_redes_slide_inc_qnt_btn', 'Inscrease qnt', 'Button', 'Slide cart')
      })

      $('.slide_cart ul').on('change', 'input', function () {
        const id = $(this).closest('li').index()
        const qty = $(this).val()
        ChangeCartQty(qty, id)
        if (qty === '0') {
          $(this).closest('li').remove()
        }
        calcSubtotal()
      })

      setTimeout(() => {
        checkCart()
      }, 500)

      $('.add_to_cart').on('click', function (e) {
        e.preventDefault()
        const qty = $(this).parent().find('input').val()
        const name = $(this).closest('.products-list').find('select.quantity').attr('name')
        const fullName = $(this).closest('.products-list').find('p>a').text()
        console.log(qty, name)
        AddCart(qty, name)
        checkCart()
        pushDataLayer('exp_mob_redes_add_to_cart_btn', 'Add to cart', 'Button', 'Products page')
        addCartInfo(fullName)
      })

      $('.add-to-cart').on('click', function (e) {
        setTimeout(() => {
          const name = $(this).closest('.kit-item').find('h2').text()
          checkCart()
          addCartInfo(name)
        }, 500)
      })

      $('.qty_selector span:first-of-type').on('click', function () {
        let qty = $(this).next().val()
        if (qty > 1) {
          qty--
          $(this).next().val(qty)
        }
        pushDataLayer('exp_mob_redes_dec_qnt_btn', 'Decrease qnt', 'Button', 'Products page')
      })

      $('.qty_selector span:last-of-type').on('click', function () {
        let qty = $(this).prev().val()
        if (qty < 10) {
          qty++
          $(this).prev().val(qty)
        }
        pushDataLayer('exp_mob_redes_inc_qnt_btn', 'Inscrease qnt', 'Button', 'Products page')
      })

      $('.slide_cart .close').on('click', function () {
        $('.slide_cart').css('right', '-100%')
        $('body').css('overflow', 'auto')
        setTimeout(() => {
          $('.overlay').removeClass('active')
        }, 200)
        pushDataLayer('exp_mob_redes_close_bnt', 'Close', 'Button', 'Slide cart')
      })

      $('.to_checkout').on('click', function () {
        Cart()
        pushDataLayer('exp_mob_redes_to_checkout_btn', 'To checkout', 'Button', 'Slide cart')
      })
    } else if (this.page === '/cgi-bin/guided-order.cgi') {
      $('#ordertotals a.action-button-orange').append(btnArrowSvg)
      $('#guided-results .orderform, #guided-results .additems').each((i, item) => {
        $(item).prepend(listBlock)
        $(item).find('.img').append($(item).find('img'))
        $(item).find('.descr').prepend($(item).find('p'))
        $(item).find('.descr').prepend($(item).find('a'))
        $(item).find('.descr .input_block span:first-of-type').after($(item).find('input'))
        $(item).find('.descr').append($(item).find('.price'))
      })

      $('.input_block span:first-of-type').on('click', function () {
        let qty = $(this).next().val()
        if (qty > 0) {
          qty--
          $(this).next().val(qty).change()
        }
        pushDataLayer('exp_mob_redes_dec_qnt_btn', 'Decrease qnt', 'Button', 'Products page guided')
      })

      $('.input_block span:last-of-type').on('click', function () {
        let qty = $(this).prev().val()
        if (qty < 10) {
          qty++
          $(this).prev().val(qty).change()
        }
        pushDataLayer('exp_mob_redes_inc_qnt_btn', 'Inscrease qnt', 'Button', 'Products page guided')
      })
    }

    // $('.slider_wrapper_product').each(function (i, item) {
    //   $(item).slick({
    //     infinite: false,
    //     slidesToShow: 1.5,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: true
    //   })

    //   $(item).slick('slickGoTo', 0)
    // })

    $('.slider_wrapper_product').each(function (i, item) {
      const items = $(item).find('.products-list')
      if (items.length > 4) {
        items.each((i, item) => {
          if (i > 3) {
            $(item).hide()
          }
        })
        $(item).append(/* html */ `
          <div class="show_more">
            <button>Show All</button>
          </div>
        `)
        $(item)
          .find('.show_more button')
          .on('click', function () {
            $(this)
              .closest('.slider_wrapper_product')
              .find('.products-list')
              .each((i, item) => {
                $(item).show()
              })
            $(this).parent().remove()
            pushDataLayer('exp_mob_redes_show_all_btn', 'Show All', 'Button', 'Products page')
          })
      }
    })

    $('input[type="checkbox"]').on('change', function () {
      if ($('input[type=checkbox]:checked').length > 0) {
        $('#blank-space').hide()
      } else {
        $('#blank-space').show()
      }
    })

    function createSliders() {
      let wrap = 0
      $('#single-products-container .products-container > div').each(function (i, item) {
        if ($(item).hasClass('category-heading')) {
          wrap++
          $(item).after(`<div class="slider_wrapper_product" data-wrap="${wrap}"></div>`)
        } else {
          $(item).appendTo(`.slider_wrapper_product[data-wrap="${wrap}"]`)
          $(item).append(listQty)
        }
      })
    }

    function checkCart() {
      let cartLength = window.currcart.length
      let totalItems = 0
      window.currcart.forEach(item => {
        const itemData = item.split('|')
        totalItems += +itemData[0]
      })
      console.log(cartLength)
      if (cartLength > 0) {
        $('.to_cart').addClass('fix')
        $('.to_cart button span').append(/* html */ `<b>${totalItems}</b>`)
      } else {
        $('.to_cart').removeClass('fix')
        $('.to_cart button span b').remove()
      }
    }

    function drawCart() {
      const data = window.currcart
      let total = 0
      $('.slide_cart ul').empty()
      data.forEach((item, i) => {
        const itemData = item.split('|')
        total += itemData[2] * itemData[0]
        $('.slide_cart ul').append(/* html */ `
          <li>
            <div class="img"><img src="https://www.paintscratch.com/content/images/product-thumbs/thumb${itemData[3]}image1.jpg" alt="${itemData[3]}"></div>
            <div class="descr">
              <h4>${itemData[1]}</h4>
              <div class="cart_item_qty">
                <span class="minus">${minusSvg}</span>
                <input type="text" value="${itemData[0]}" readonly>
                <span class="plus">${plusSvg}</span>
              </div>
              <p class="cart_item_price">${itemData[2]}</p>
            </div>
          </li>
        `)
      })
      $('.slide_cart .sub_total').text(`Subtotal: $${total.toFixed(2)}`)
    }

    function calcSubtotal() {
      const data = window.currcart
      let total = 0
      data.forEach((item, i) => {
        const itemData = item.split('|')
        total += itemData[2] * itemData[0]
      })
      if (total === 0) {
        $('.slide_cart .sub_total').text(`Cart is empty`)
        checkCart()
      } else {
        $('.slide_cart .sub_total').text(`Subtotal: $${total.toFixed(2)}`)
      }
    }

    function addCartInfo(name) {
      const ellipsis = name.length > 20 ? '...' : ''
      $('body').append(/* html */ `
          <div class="add_to_cart_info">
            <p><span>${name.slice(0, 20) + ellipsis}</span> was added to Cart</p>
            <div class="close">${closeSvg}</div>
          </div>
      `)
      let autoClose = setTimeout(() => {
        $('.add_to_cart_info').remove()
      }, 5000)
      $('.add_to_cart_info .close').on('click', function () {
        $(this).closest('.add_to_cart_info').remove()
        clearTimeout(autoClose)
      })
    }
  }

  cartPage() {
    const style = /* html */ `
      <style>
        .cart table.cart-group, #bottom-secure-checkout, .cart h1, .cart-group+hr {
          display: none;
        }
        #page #main #bottom-information, .cart hr {
          width: 100%;
        }
       
        #bottom-secure-checkout, #bottom-secure-checkout>* {
          width: 100% !important;
          margin-right: 0 !important;
        }
        .color_head {
          width: 100%;
          display: flex;
          align-items: center;
          column-gap: 12px;
          margin-bottom: 24px;
        }
        .color_head .color {
          width: 50px;
          height: 50px;
          border: 1px solid #333;
        }
        .color_head p {
          font-size: 14px;
          line-height: 22px;
          color: #555;
        }
        .color_head p b {
          color: #333;
          display: block;
        }
        .color_head+p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          line-height: 22px;
          color: #0373BD;
          font-weight: 700;
          margin-bottom: 15px;
        }
        .cart_block .list {
          margin-bottom: 24px;
        }
        .cart_block .list li {
          display: flex;
          align-items: center;
          column-gap: 8px;
          padding: 8px 0;
          position: relative;
          border-bottom: 1px solid #CCC;
        }
        .cart_block .list li .img {
          width: 42px;
          height: 42px;
        }
        .cart_block .list li .img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .cart_block .list li .descr a {
          color: #00E;
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          display: block;
          margin-bottom: 6px;
        }
        .cart_block .list li .descr .qty,
        .cart_block .list li .descr .price  {
          font-size: 14px;
          line-height: 22px;
          color: #333;
          font-weight: 700;
        }
        .cart_block .list li .descr .price {
          position: absolute;
          right: 0;
          bottom: 8px;
        }
        .cart_block_btns {
          display: flex;
          column-gap: 12px;
          align-items: center;
          margin-bottom: 24px;
        }
        .cart_block_btns button {
          border: 1px solid #CCC;
          background: #EEE;
          color: #333;
          font-size: 14px;
          font-weight: 700;
          line-height: 22px;
          padding: 5px 20px;
        }
        .total_block {
          display: flex;
          flex-direction: column;
          row-gap: 12px;
          padding-bottom: 32px;
          margin-bottom: 32px;
          border-bottom: 1px solid #CCC;
        }
        .total_block .sub, .total_block .ship {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px !important;
          line-height: 24px !important;
          color: #333;
          font-weight: 700;
        }
        .total_block .ship + p {
          color: #CB0034;
          font-size: 14px;
          line-height: 22px;
          font-weight: 700;
        }
        .total_block .total {
          padding-top: 12px;
          border-top: 1px solid #CCC;
          font-size: 18px !important;
          line-height: 26px !important;
          color: #333;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .total_block .btns {
          margin-top: 24px;
        }
        .total_block .btns button {
          width: 100%;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          padding: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          column-gap: 16px;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 700;
        }
        .total_block .or {
          position: relative;
          z-index: 2;
          margin: 8px auto;
        }
        .total_block .or span {
          color: #555;
          font-size: 14px;
          line-height: 22px;
          text-transform: uppercase;
          text-align: center;
          display: flex;
          width: fit-content;
          padding: 0 12px;
          z-index: 2;
          background-color: #fff;
          position: relative;
          margin: 0 auto;
        }
        .total_block .or::before {
          content: '';
          width: 100%;
          height: 1px;
          background: #CCC;
          position: absolute;
          top: 50%;
          left: 0;
          z-index: 1;
        }
        .cart .continue-shopping-button span.continue-shopping-q {
          font-size: 16px !important;
          line-height: 24px !important;
          color: #333 !important;
          margin-bottom: 16px;
        }
        .cart .continue-shopping-button span.continue-shopping-q + p a {
          display: flex;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          padding: 6px 15px;
          width: fit-content;
          height: auto;
        }
        .cart .continue-shopping-button span.continue-shopping-q + p a span {
          padding: 0;
          font-size: 16px;
          line-height: 1.5;
        }
        .cart .continue-shopping-button {
          margin-top: 0 !important;
          margin-bottom: 32px !important;
        }
        #bottom-information {
          display: flex;
          flex-direction: column-reverse;
          padding: 16px !important;
        }
        #bottom-information img {
          display: block !important;
        }
        #bottom-information #right-column {
          position: relative;
          width: 100% !important;
        }
        #bottom-information #left-column {
          width: 100% !important;
        }
        #bottom-information #right-column img:first-of-type {
          position: absolute;
          top: 0;
          right: 0;
          height: 70px !important;
          width: 70px !important;
        }
        #bottom-information #right-column img:last-of-type {
          width: 100% !important;
        }
        .cart #page #main #bottom-information #left-column>a {
          font-size: 14px;
          line-height: 18px;
          text-decoration: none;
          margin-bottom: 12px !important;
          display: flex;
          align-items: center;
          column-gap: 12px;
          font-weight: 700;
        }
        .cart #page #main #bottom-information #left-column>a:last-of-type {
          margin-bottom: 0 !important;
        }
        #page #main #bottom-information span.help-icon {
          background: url(${git}/chevron.svg) no-repeat center;
          background-size: contain;
          margin-bottom: 0 !important;
          margin-left: 0 !important;
        }
      </style>
    `

    let cartTable = ''

    $('.cart-group').each(function (i, item) {
      let listGroup = ''
      $(item)
        .find('.cart-row')
        .each(function (y, itemList) {
          listGroup += /* html */ `
          <li>
            <div class="img">
              <img src="${$(itemList).find('.cart-pic img').data('cfsrc')}" alt="img">
            </div>
            <div class="descr">
              <a href="${$(itemList).find('.item-title a').attr('href')}">${$(itemList)
                .find('.item-title a')
                .text()}</a>
              <div class="qty">
                ${$(itemList).find('.quantity').html()}
              </div>
              <div class="price">
                ${$(itemList).find('.prices').text()}
              </div>
            </div>
          </li>
        `
        })

      cartTable += /* html */ `
        <div class="cart_block">
          <div class="color_head">
            <div class="color" style="background: ${$(item).find('.left-color-td').css('background')};"></div>
            <p>
              <b class="car_type">${$(item).find('h2.vehicletitle').text()}</b>
              <span class="car_color">${$(item).find('tr:nth-of-type(2) td[colspan]').text()}</span>
            </p>
          </div>
          <p><span>Items In Your Cart</span><span>Total Price</span></p>
          <ul class="list">
            ${listGroup}
          </ul>
          <div class="cart_block_btns">
            <button class="change_btn" onclick="EditItem(${i})">Change Items</button>
            <button class="remove_btn" onclick="RemoveItem(${i})">Remove Vehicle</button>
          </div>
        </div>
      `
    })

    const totalBlock = /* html */ `
      <div class="total_block">
        <p class="sub">Subtotal:<span>${
          $('#subtotals_and_shipping .right_side_text').html().split('<br>')[0]
        }</span></p>
        <p class="ship">Shipping:<span>${
          $('#subtotals_and_shipping .right_side_text').html().split('<br>')[1]
        }</span></p>
        <p>Free shipping on orders over $149.00</p>
        <p class="total">Total:<span>${$('#total_and_checkout .right_side_text').text()}</span></p>
        <div class="btns">
          <button class="checkout">Secure checkout${btnArrowSvg}</button>
          <div class="or"><span>OR</span></div>
          <button class="paypal">Check out with <img src="${git}/PayPal.svg" alt="paypal"></button>
        </div>
      </div>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    $('#page #main .continue-shopping-button').before(cartTable)
    $('#page #main .continue-shopping-button').before(totalBlock)
    $('.change_btn').on('click', function () {
      pushDataLayer('exp_mob_redes_btn_change_items', 'Change items', 'Button', 'Cart')
    })
    $('.remove_btn').on('click', function () {
      pushDataLayer('exp_mob_redes_btn_remove_vehicle', 'Remove vehicle', 'Button', 'Cart')
    })
    $('.total_block .paypal').on('click', function (e) {
      e.preventDefault()
      pushDataLayer('exp_mob_redes_btn_paypal_checkout', 'Check out with PayPal', 'Button', 'Cart')
      PopPaypalCheckout()
    })
    $('.total_block .checkout').on('click', function (e) {
      e.preventDefault()
      pushDataLayer('exp_mob_redes_btn_secur_checkout', 'Secure checkout', 'Button', 'Cart')
      CheckOut()
    })
    $('.cart_block .descr a').on('click', function () {
      pushDataLayer('exp_mob_redes_btn_open_item_cart', 'Open item', 'Link', 'Cart')
    })
  }

  checkoutPage() {
    const style = /* html */ `
      <style>
        .checkoutstep #secure_checkout_top {
          margin-top: 0 !important;
          display: flex;
          align-items: center;
          column-gap: 12px;
        }
        .checkoutstep #secure_checkout_top img {
          display: none;
        }
        .checkoutstep #secure_checkout_top h1 {
          font-size: 16px !important;
          line-height: 24px !important;
          margin: 0 !important;
        }
        .checkoutstep #secure_checkout_top span {
          color: #959595 !important;
          font-size: 14px !important;
          line-height: 22px;
        }
        table.billing-information, #credit_card_box, #next_steps_content_bottom, .checkoutstep #page #main #bottom-information {
          width: 100% !important;
        }
        table.billing-information {
          margin: 0 !important;
        }
        .checkoutstep #page #main h2 {
          padding-top: 32px !important;
          padding-bottom: 8px !important;
        }
        .checkoutstep #page #main h2:first-of-type {
          padding-top: 16px !important;
        }
        .checkoutstep #page #main .billing-information p {
          line-height: 22px !important;
        }
        table.billing-information tr {
          display: flex;
          flex-direction: column;
          row-gap: 4px;
        }
        table.billing-information tr:not(:last-of-type) {
          margin-bottom: 16px;
        }
        table.billing-information tr td {
          height: auto;
          width: 100% !important;
          position: relative;
        }
        .billing-information td.fieldname {
          font-size: 14px !important;
          line-height: 22px !important;
          color: #333 !important;
        }
        .billing-information td.fieldname span span {
          margin-left: 0 !important;
        }
        .billing-information span.small-note {
          position: absolute;
          right: 0;
          top: -20px;
        }
        .billing-information .input {
          width: 100% !important;
          height: 32px !important;
          font-size: 14px !important;
          line-height: 22px !important;
          color: #333 !important;
          padding: 0 10px !important;
        }
        #credit_card_box .card_title {
          display: flex;
          align-items: start;
          column-gap: 12px;
          margin-bottom: 18px;
        }
        #credit_card_box .card_title img {
          width: 40px !important;
          height: 40px !important;
          padding: 0 !important;
        }
        checkoutstep #page #main #credit_card_box .card_title h2 {
          padding: 0 0 0 0 !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
          margin-bottom: 8px !important;
        }
        #credit_card_box .card_title p {
          font-size: 14px !important;
          line-height: 22px !important;
          color: #333 !important;
          margin-top: 0 !important;
          font-weight: 400 !important;
        }
        .checkoutstep #page #main #credit_card_box .billing-information tr:nth-of-type(3) td:last-of-type {
          display: flex;
          column-gap: 20px;
        }
        .checkoutstep #page #main #credit_card_box .billing-information tr:last-of-type td:last-of-type {
          display: flex;
          padding-bottom: 20px;
        }
        .checkoutstep #page #main #credit_card_box .billing-information tr:last-of-type td:last-of-type input {
          width: 40% !important;
        }
        .checkoutstep #page #main #credit_card_box .billing-information tr:last-of-type td:last-of-type .small-note {
          top: unset;
          right: unset;
          bottom: 0px;
          left: 0;
        }
        img#proceed-step2,
        #next_steps_content_bottom a.silver-button {
          display: none;
        }
        #required b {
          font-weight: 400 !important;
        }
        #bottom-secure-checkout {
          width: 100% !important;
          position: fixed;
          bottom: 0;
          left: 0;
          padding: 15px;
          z-index: 999;
          margin-bottom: 0;
          border-top: 1px solid var(--Border, #CCC);
          background: #FFF;
          box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
        }
        a.action-button-orange {
          width: 100% !important;
          display: flex;
          justify-content: center;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
        }
        #bottom-secure-checkout .small-note {
          width: 100% !important;
          margin-left: 0 !important;
          margin-top: 10px !important;
        }
        .checkoutstep #page #main #bottom-information {
          margin-top: 32px !important;
          padding: 16px !important;
        }
        #page #main #bottom-information a.bottom-pop-link {
          margin-bottom: 12px !important;
          text-decoration: none;
          font-size: 14px !important;
          line-height: 18px !important;
          display: flex;
          align-items: center;
          column-gap: 12px;
        }
        #page #main #bottom-information span.help-icon {
          background: url(${git}/chevron.svg) no-repeat center;
          background-size: contain;
          margin-bottom: 0 !important;
          margin-left: 0 !important;
        }
        .checkoutstep #page #main #bottom-information #bottom-information-right span {
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .checkoutstep #page #main #bottom-information #bottom-information-right span a {
          font-weight: 700;
        }

      </style>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    $('#credit_card_box').prepend('<div class="card_title"><div></div></div>')
    $('#credit_card_box .card_title').prepend($('#credit_card_box>img'))
    $('#credit_card_box .card_title>div').append($('#credit_card_box>h2'))
    $('#credit_card_box .card_title>div').append($('#credit_card_box>p'))
    $('#credit_card_box .card_title p').html(
      'This is a secure 256-bit SSL encrypted payment. You will not be charged until confirming on the next page.'
    )
    document
      .querySelectorAll(
        '.checkoutstep #page #main #credit_card_box .billing-information tr:nth-of-type(3) td:last-of-type'
      )[0]
      .childNodes[2].remove()

    $('input[name="C1"]').attr('checked', 'checked')
    $('#main>.billing-information:first-of-type input, #main>.billing-information:first-of-type select').on(
      'change',
      function () {
        Address_Fill()
      }
    )
  }

  orderPage() {
    const style = /* html */ `
      <style>
        #secure_checkout_top {
          margin-top: 0 !important;
          display: flex;
          align-items: center;
          column-gap: 12px;
          margin-bottom: 16px;
        }
        #secure_checkout_top img, #shipto, #green_proceed_arrow {
          display: none !important;
        }
        #secure_checkout_top h1 {
          font-size: 16px !important;
          line-height: 24px !important;
          margin: 0 !important;
        }
        #sub-header p {
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .user_info .title_block {
          display: flex;
          align-items: center;
          column-gap: 4px;
          margin-bottom: 9px;
        }
        .user_info .title_block .small-note {
          margin-bottom: 0;
        }
        .user_info .telandeml {
          display: flex;
          flex-direction: column;
          margin-top: 8px;
          row-gap: 8px;
        }
        .user_info>div {
          margin-bottom: 16px;
        }
        .review .telandeml span {
          position: unset !important;
        }
        .review .telandeml>p:last-of-type {
          display: flex;
          column-gap: 12px;
          align-items: center;
        }
        .review .telandeml input {
          width: 100% !important;
          border: 2px solid var(--Border, #CCC);
          background: #FFF;
          padding: 4px 12px;
        }
        .edit_button {
          border: 1px solid #CCC;
          background: #EEE;
          display: flex;
          align-items: center;
          column-gap: 10px;
          padding: 6px 20px;
          justify-content: center;
        }
        .edit_button svg {
          transform: rotate(180deg);
        }
        .review .credit-card {
          margin-top: 24px !important;
          width: 100% !important;
          padding: 15px !important;
        }
        .review .credit-card .billing-information {
          width: 100%;
        }
        .review #page .credit-card>img {
          float: left !important;
          margin-top: 0 !important;
          margin-right: 12px !important;
          padding-right: 0 !important;
          padding-bottom: 20px !important;
          height: 60px !important;
        }
        .review #page .credit-card>h2 {
          padding-top: 0 !important;
          margin-bottom: 8px !important;
        }
        .review #page .billing-information tr{
          display: flex;
          flex-direction: column;
        }
        .review #page .billing-information td {
          height: auto !important;
          width: 100%;
          font-size: 14px !important;
          line-height: 22px !important;
        }
        .review #page .billing-information input {
          border: 2px solid #CCC;
          background: #FFF;
          margin-bottom: 16px;
          padding: 4px 12px;
          height: auto !important;
          width: auto !important;
        }
        .review #page .billing-information input[name="cardnum"] {
          width: 100% !important;
        }
        .review table#ordereditems, .paypal table#ordereditems, #agree, .policy-agree {
          width: 100% !important;
        }
        table#ordereditems td {
          vertical-align: bottom !important;
        }
        .policy-agree p {
          text-align: left;
          font-size: 12px !important;
          line-height: 20px !important;
        }
        .policy-agree p:last-of-type {
          margin-top: 8px;
        }
        .policy-agree {
          margin-top: 16px !important;
        }
        a.action-button-orange {
          width: 100%;
          display: flex;
          justify-content: center;
          border-radius: 4px;
          border: 2px solid #E68626;
          background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
          align-items: center;
          column-gap: 12px;
        }
        a.action-button-orange span {
          padding: 0 !important;
        }
      </style>
    `

    const userInfo = /* html */ `
        <div class="user_info">
          <div class="ship_data">
            <div class="title_block"></div>
          </div>
          <div class="bill_data">
            <div class="title_block"></div>
          </div>
          <button class="edit_button" onclick="editMyInfo()">${btnArrowSvg}Edit My Information</button>
        </div>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    $('#shipto').after(userInfo)
    $('#shipto>tbody>tr:first-of-type>td').each(function (i, item) {
      if (i === 0) {
        $('.ship_data .title_block').append($(item).html())
      } else {
        $('.bill_data .title_block').append($(item).html())
      }
    })
    $('#shipto>tbody>tr:nth-of-type(2)>td').each(function (i, item) {
      if (i === 0) {
        $('.ship_data').append($(item).html())
      } else {
        $('.bill_data').append($(item).html())
      }
    })
    $('.ship_data').append($('#shipto>tbody>tr:nth-of-type(3)>td>div'))
    $('.user_info').after($('#shipto>tbody>tr:nth-of-type(5)>td>div'))
    $('.user_info').after($('#shipto>tbody>tr:nth-of-type(6)>td>div'))
    $('a.action-button-orange').append(btnArrowSvg)
  }

  headerChange() {
    const style = /* html */ `
      <style>
        *, *::before, *::after {
          box-sizing: border-box;
        }
        #header {
          float: unset;
          margin-top: 0;
        }
        #header-wrap {
          width: 100%;
          position: unset;
          float: unset;
          padding-top: 0;
          margin-top: 0;
        }
        #header_left, #header_right {
          display: none;
        }
        #page #main h1 {
          margin-top: 0;
        }
        ul#header-steps {
          display: none;
        }
        #new_header {
          width: 100%;
        }
        .crs_nav {
          padding: 8px 16px;
          border-bottom: 1px solid #CCC;
          background: #EEE;
          display: flex;
          justify-content: space-between;
        }
        .crs_nav img {
          width: 52px;
        }
        .crs_steps_line {
          position: relative;
          padding: 20px 20px 24px;
          background-color: #fff;
          margin-bottom: -1px;
        }
        .crs_steps_line .line {
          position: absolute;
          top: calc(50% + 10px);
          left: 20px;
          width: 100%;
          height: 2px;
          background: #D9EDF7;
          width: calc(100% - 40px);
          overflow: hidden;
        }
        .crs_steps_line .line p {
          width: 0;
          height: 100%;
          background: #0373BD;
        }
        .crs_steps_line ul {
          display: flex;
          justify-content: space-between;
          position: relative;
          z-index: 2;
        }
        .crs_steps_line ul li {
          width: 20%;
          text-align: center;
          list-style: none;
          font-size: 14px;
          line-height: 22px;
        }
        .crs_steps_line ul li.current {
          font-weight: 700;
          color: #253189;
        }
        .crs_steps_line ul li.prev {
          color: #253189;
        }
        .crs_steps_line ul li span {
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #D9EDF7;
          margin: 4px auto 0;
        }
        .crs_steps_line ul li.current span,
        .crs_steps_line ul li.prev span {
          background: #0373BD;
        }
        .crs_menu {
          background-color: #eee;
          padding: 15px;
          display: none;
        }
        .crs_menu li {
          list-style: none;
          padding: 5px 0;
        }
        .crs_menu li a {
          color: #777;
          font-size: 14px;
          line-height: 20px;
          text-decoration: none;
        }
      </style>
    `

    const block = /* html */ `
      <div id="new_header">
        <div class="crs_nav">
          <div class="crs_nav_logo">
            <a href="https://www.paintscratch.com/">
              <img src="https://www.paintscratch.com/content/images/paintscratch-logo.png" alt="PaintScratch.com">
            </a>
          </div>
          <div class="burger">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="32" viewBox="0 0 42 32" fill="none">
              <rect x="0.5" y="0.5" width="41" height="31" rx="3.5" stroke="#D3DAE2"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C10 9.44772 10.4477 9 11 9H31C31.5523 9 32 9.44772 32 10C32 10.5523 31.5523 11 31 11H11C10.4477 11 10 10.5523 10 10ZM10 16C10 15.4477 10.4477 15 11 15H31C31.5523 15 32 15.4477 32 16C32 16.5523 31.5523 17 31 17H11C10.4477 17 10 16.5523 10 16ZM11 21C10.4477 21 10 21.4477 10 22C10 22.5523 10.4477 23 11 23H31C31.5523 23 32 22.5523 32 22C32 21.4477 31.5523 21 31 21H11Z" fill="#555555"/>
            </svg>
          </div>
        </div>
        <ul class="crs_menu">
          <li><a href="https://www.paintscratch.com/company/about.html">About</a></li>
          <li><a href="https://www.paintscratch.com/support/search-paintscratch.php">Search</a></li>
          <li><a href="https://www.paintscratch.com/touch-up-paint-directions/paint-colors.html">Color Info</a></li>
          <li><a href="https://www.paintscratch.com/support/check.htm">Order Status</a></li>
          <li><a href="https://www.paintscratch.com/products/pricing.html">Pricing</a></li>
          <li><a href="https://www.paintscratch.com/touch-up-paint-directions/">Directions</a></li>
          <li><a href="javascript:Cart()">View Cart</a></li>
        </ul>
        <div class="crs_steps_line">
          <div class="line">
            <p></p>
          </div>
          <ul>
            <li>Car<span></span></li>
            <li>Color<span></span></li>
            <li>Products<span></span></li>
            <li>Cart<span></span></li>
            <li>Checkout<span></span></li>
          </ul>
        </div>
      </div>
    `

    document.head.insertAdjacentHTML('beforeend', style)
    document.querySelector('#header').insertAdjacentHTML('afterend', block)

    let step = 1
    switch (this.page) {
      case '/cgi-bin/select-color.cgi':
        step = 2
        break
      case '/cgi-bin/order-form.cgi':
        step = 3
        break
      case '/cgi-bin/guided-order.cgi':
        step = 3
        break
      case '/cgi-bin/shopping-cart.cgi':
        step = 4
        break
      case '/cgi-bin/check-out.cgi':
        step = 5
        break
      case '/cgi-bin/review-order.cgi':
        step = 5
        break
      default:
        break
    }

    $('.crs_steps_line ul li').each(function (i, item) {
      $(item).removeClass('current').removeClass('prev')
      if (i + 1 < step) {
        $(item).addClass('prev')
      } else if (i + 1 === step) {
        $(item).addClass('current')
      }
    })
    const listWidth = +$('.crs_steps_line ul li').eq(0).width()
    $('.crs_steps_line .line p').css('width', listWidth * step - listWidth / 2 + 'px')

    const burger = $('.burger')
    const menu = $('.crs_menu')

    burger.on('click', () => {
      burger.toggleClass('active')
      if (burger.hasClass('active')) {
        menu.slideDown()
        pushDataLayer('exp_mob_redes_btn_ham_icon', 'Hamburger icon', 'Button', 'Header')
      } else {
        menu.slideUp()
      }
    })

    $('.crs_menu a').on('click', function () {
      pushDataLayer('exp_mob_redes_link_ham_menu', $(this).text(), 'Link', 'Hamburger menu')
    })

    $('.crs_nav_logo a').on('click', function () {
      pushDataLayer('exp_mob_redes_icon_logo', 'Logo', 'Icon', 'Header')
    })
  }

  footerChange() {
    const carsList = [
      'Acura',
      'Audi',
      'BMW',
      'Chevrolet',
      'Dodge',
      'Ford',
      'Honda',
      'Hyundai',
      'Jeep',
      'Lexus',
      'Mazda',
      'Mercedes',
      'Nissan',
      'Subaru',
      'Toyota',
      'Volkswagen'
    ]

    const style = /* html */ `
      <style>
        #footer {
          background-color: #eee;
          margin-top: -1px;
          text-align: left !important;
        }
        .touch_links {
          padding: 0 15px;
          margin-bottom: 16px;
        }
        .touch_links>p {
          color: #333;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 12px;
          text-align: left;
        }
        .touch_links ul {
          display: flex;
          flex-wrap: wrap;
          row-gap: 8px;
          margin-bottom: 16px;
          padding: 0;
        }
        .touch_links ul li {
          width: 50%;
          list-style: none;
          text-align: left;
        }
        .touch_links ul li a{
          color: #253189;
          font-size: 14px;
          line-height: 22px;
          text-decoration: none;
        }
        .touch_links ul+a {
          color: #253189;
          font-size: 18px;
          line-height: 30px;
          font-weight: 700;
          text-align: left;
          display: block;
          text-decoration: underline !important;
        }
        #bottom_footer_text {
          padding: 0 15px;
        }
        #bottom_footer_text p:first-of-type {
          margin-bottom: 12px;
        }
        #bottom_footer_text p:first-of-type, #bottom_footer_text p a {
          color: #253189 !important;
          font-size: 14px;
          line-height: 20px;
        }
        .glyphicon-facetime-video {
          display: none;
        }
      </style>
    `

    let list = ''
    carsList.forEach(car => {
      list += /* html */ `
        <li>
          <a href="https://www.paintscratch.com/touch_up_paint/${car}/">
            ${car} Touch Up Paint
          </a>
        </li>
      `
    })
    const block = /* html */ `
      <div class="touch_links">
        <p>Over 100,000 touch up paint colors available - order yours now!</p>
        <ul>
          ${list}
        </ul>
        <a href="https://www.paintscratch.com/touch_up_paint/">Order car touch up paint for all other Makes and Models</a>
      </div>
    `
    setTimeout(() => {
      if (document.querySelector('#footer')) {
        document.querySelector('#footer').insertAdjacentHTML('afterbegin', block)
      } else {
        document.querySelector('#bottom_footer_text').insertAdjacentHTML('beforebegin', block)
      }

      $('.touch_links ul').on('click', 'a', function (e) {
        pushDataLayer('exp_mob_redes_link_touch_up', $(this).text().trim(), 'Link', 'Touch Up')
      })
      $('.touch_links ul+a').on('click', function (e) {
        pushDataLayer(
          'exp_mob_redes_link_order_cart_touch_up',
          'Order car touch up paint for all other Makes and Models',
          'Link',
          'Order Car Touch Up'
        )
      })
    }, 500)
    document.head.insertAdjacentHTML('beforeend', style)
  }

  beforeFooter() {
    const style = /* html */ `
      <style>
        #before_footer {
          width: 100%;
        }
        #before_footer .banner {
          display: flex;
          justify-content: space-between;
          width:100%;
          padding: 36px 15px;
          background-color: #fff;
          margin-top: -1px;
        }
        #before_footer .banner img {
          height: 66px;
        }
        #before_footer .blocks {
          background-color: #eee;
          padding: 33px 15px 25px;
          display: flex;
          flex-wrap: wrap;
          row-gap: 13px;
        }
        #before_footer .blocks>div {
          width: 100%;
          border: 1px solid #0373BD;
          background: #D3DAE2;
        }
        #before_footer .blocks>div p.block_title {
          width: 100%;
          color: #fff;
          background-color: #0373BD;
          padding: 12px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.1;
        }
        #before_footer .blocks>div p.block_title a {
          color: #fff;
          text-decoration: none;
        }
        #before_footer .blocks>div>ul {
          padding: 16px 16px 16px 28px;
          display: flex;
          flex-wrap: wrap;
          row-gap: 6px;
        }
        #before_footer .blocks>div>ul li {
          width: 100%;
        }
        #before_footer .blocks>div>ul li::marker {
          color: #253189;
        }
        #before_footer .blocks>div>ul li a {
          color: #253189;
          font-size: 14px;
          line-height: 22px;
          text-decoration: none;
        }
        #before_footer .links ul li:first-of-type {
          margin-left: -18px;
        }
        #before_footer .links ul li:first-of-type {
          list-style-type: none;
        }
        #before_footer .slider_wrapper {
          padding: 16px;
        }
        #before_footer .slide p {
          font-style: italic;
          line-height: 22px;
          color: #333;
          font-size: 14px;
        }
        #before_footer .slide p:first-of-type {
          margin-bottom: 4px;
        }
        #before_footer .slider_wrapper .slick-dots {
          width: calc(100% - 32px);
          bottom: -10px;
        }
        #before_footer .slider_wrapper .slick-dots li {
          width: auto;
          height: auto;
        }
        #before_footer .slider_wrapper .slick-dots li button {
          width: 10px;
          height: 10px;
          border: 1px solid #ccc;
          padding: 0;
        }
        #before_footer .slider_wrapper .slick-dots li.slick-active button {
          background-color: #333;
          border-color: #333;
        }
        #before_footer .slider_wrapper .slick-dots li button::before {
          content: '';
        }

      </style>
    `

    const block = /* html */ `
      <div id="before_footer">
        <div class="banner">
          <img src="https://www.paintscratch.com/content/images/color-match-guarantee.jpg" alt="color-match">
          <img src="https://www.paintscratch.com/content/images/paintscratch-american-business.jpg" alt="made-in-usa">
          <img src="https://www.paintscratch.com/content/images/free-shipping-over-99.jpg" alt="free-shipping">
        </div>
        <div class="blocks">
          <div class="reviews">
            <p class="block_title"><a title="View unsolicited reviews and testimonials from PaintScratch customers." href="https://www.paintscratch.com/cgi-bin/customer.cgi">Customer Testimonials</a></p>
            <div class="slider_wrapper">
            <div class="slide">
              <p>"Just wanted to let you know that an order I received for WG2 touch up matched perfectly, unlike the dealer stuff. I will definitely recommend your business. Thanks"</p>
              <p>L Goetz<br>Evesham , NJ</p>
            </div>
            <div class="slide">
              <p>"Fantastic product! Excellent service! Color match on the original order was perfect, just wish I had bought enough paint the first time! Thank You."</p>
              <p>R Messina<br>Grand Prairie , TX</p>
            </div>
            <div class="slide">
              <p>"Thanks Collin every one in the club says you are the best and you really do stand behind your word. Thanks"</p>
              <p>Tim M.<br>Dallas, TX</p>
            </div>
            <div class="slide">
              <p>"Thanks for all your assistance in this matter. Your regular e-mail correspondence has been reassuring and representative of the great customer service your company provides."</p>
              <p>K. Fogarty<br>Athens, GA</p>
            </div>
            <div class="slide">
              <p>"I received the paint today- it is perfect- absolutely a perfect match. Thanks a lot."</p>
              <p>A. Merulla<br>Montgomery Village, MD</p>
            </div>
            <div class="slide">
              <p>"I just got around to using my touch up paint today and I just want to say that color match is excellent! I will purchase from your company again."</p>
              <p>D. Romsey<br>Uniontown , OH</p>
            </div>
            </div>
          </div>
          <div class="service">
            <p class="block_title">Customer Service</p>
            <ul>
              <li><a title="Info about when PaintScratch orders will arrive" href="https://www.paintscratch.com/paint/when-will-my-order-arrive/">When will my order arrive?</a></li>
              <li><a title="Customer Service and Returns" href="https://www.paintscratch.com/support/returns.htm">Customer Service &amp; Returns</a></li>
              <li><a title="Answers to frequently asked questions" href="https://www.paintscratch.com/support/faqs.html">FAQ Page</a></li>
              <li><a title="How to Apply Touch Up Paint" href="https://www.paintscratch.com/touch-up-paint-directions/">How To Use Touch Up Paint</a></li>
              <li><a title="Instructions on how to find your car color code" href="https://www.paintscratch.com/touch-up-paint-codes/paint-code.html">Find Your Color Code</a></li>
              <li><a title="Help with common touch up paint and scratch repair problems" class="load-pop" href="#paint-problems" id="problem_help-closeonly">Touch Up Paint Problems</a></li>
              <li><a title="Color Match Guarantee" class="load-pop" href="#color-match-guarantee" id="color_match_guarantee_text-closeonly">Color Match Guarantee</a></li>
            </ul>
          </div>
          <div class="links">
            <p class="block_title">Useful Links</p>
            <ul>
              <li>
                ${cameraSvg}
                <a href="https://www.paintscratch.com/paint/videos/" title="Videos about how to apply touch up paint to your car."><strong>How To Videos <i class="glyphicon glyphicon-facetime-video"></i></strong></a>
              </li>
              <li><a title="Order touch up ACCESSORIES ONLY here (NOT TOUCH UP PAINT!)" href="https://www.paintscratch.com/cgi-bin/storefront.cgi">Accessory Store</a></li>
              <li><a title="Borrow pages from our color chip books for hard to find colors - particularly trim, interior and lower panel colors" href="https://www.paintscratch.com/products/borrow.html">Borrow Color Books</a></li>
              <li><a title="Automotive Touch Up Paint Forums" href="https://www.paintscratch.com/cgi-bin/blah/Blah.pl" target="_blank">PaintScratch Forum</a></li>
              <li><a title="Join our program and start earning" href="https://www.paintscratch.com/company/affiliate.htm">Affiliate Program</a></li>
              <li><a title="Assist PaintScratch customers with repairs and make money" href="https://www.paintscratch.com/cgi-bin/pro_request.cgi">Touch Up Pros</a></li>
              <li><a title="Join the team at PaintScratch.com!" href="https://www.paintscratch.com/paint/jobs-at-paintscratch/">Employment</a></li>
            </ul>
          </div>
        </div>
      </div>
    `
    setTimeout(() => {
      if (document.querySelector('#footer')) {
        document.querySelector('#footer').insertAdjacentHTML('afterbegin', block)
      } else {
        document.querySelector('#bottom_footer_text').insertAdjacentHTML('beforebegin', block)
      }

      $('#before_footer .service a').on('click', function (e) {
        pushDataLayer('exp_mob_redes_link_cus_ser', $(this).attr('title'), 'Link', 'Customer service')
      })

      $('#before_footer .links a').on('click', function (e) {
        pushDataLayer('exp_mob_redes_link_use_lin', $(this).attr('title'), 'Link', 'Useful links')
      })

      document.head.insertAdjacentHTML('beforeend', style)
      $('.slider_wrapper').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        slideToShow: 1
      })
    }, 500)
  }
}

const start = setInterval(function () {
  if (typeof window.isMobile === 'function' && typeof $('body').slick === 'function') {
    clearInterval(start)
    const device = window.isMobile()
    const page = window.location.pathname
    if (device === 'mobile') {
      setTimeout(() => {
        new mobileDesign(page)
        pushDataLayer('exp_mob_redes_loaded', 'loaded')
      }, 100)
    }
  }
})
