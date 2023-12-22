; (function () {
  // -------------------------------------
  // CONSTANTS
  // -------------------------------------
  const WAIT_INTERVAL_TIMEOUT = 100
  const DEVICE = screen.width <= 768 ? 'mobile' : 'desktop'
  const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/simify/img'

  const pathname = window.location.pathname

  let newUrl = ''

  // Regular expression to match the language code in the path
  const languageRegex = /^\/([a-z]{2}(?:-[a-z]{2})?)\//

  // Use the regular expression to extract the language code
  const match = pathname.match(languageRegex)

  if (match && match[1]) {
    // If a language code is found, construct the URL with the language code before 'collections/'
    const languageCode = match[1]
    newUrl = `${window.location.origin}/${languageCode}/collections/`
  } else {
    // If no language code is found, construct the URL with 'collections/'
    newUrl = `${window.location.origin}/collections/`
  }

  const style = /*html*/`
    <style>
          /* Client's custom styles */
    .SectionHeader,
    .tabs__buttons--container {
      display: none !important;
    }    

    /* Custom styles */
    /* Hide on mobile, show on large screens */
    .show-on-large {
      display: none;
    }

    /* Show on mobile, hide on large screens */
    .show-on-mobile {
      display: block;
    }

    /* CSS media query for large screens */
    @media (min-width: 768px) {
      .show-on-large {
        display: block;
      }

      .show-on-mobile {
        display: none;
      }
    }

    .heading p:first-child {
      color: #333F48;
      text-align: center;
      font-family: Poppins;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 42px;
      margin-bottom: 8px;
      /* 131.25% */
    }

    .heading p:last-child {
      color: #333F48;
      text-align: center;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      /* 150% */
    }

    @media screen and (max-width: 768px) {
      .heading p:first-child {
        color: #333F48;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        /* 133.333% */
      }

      .heading p:last-child {
        color: #333F48;
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        /* 142.857% */
      }
    }

    .container-crs {
      max-width: 740px;
      margin: 0 auto;
      padding-left: 20px;
      padding-right: 20px;
    }

    .container-crs.particular-collection {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .container-crs p {
      margin-bottom: 0;
    }

    /* Countries Navigation */
    .countries-nav ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
      padding: 0;
      margin: 0;
      margin-top: 24px;
    }

    .countries-nav ul+ul {
      margin-top: 25px;
    }

    .countries-nav ul li {
      width: 120px;
      height: 136px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: var(--bg-image);
    }

    .countries-nav li.view-all span {
      color: #333F48;
      text-align: center;
      font-family: Poppins;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 17px;
      text-shadow: none;
    }

    .countries-nav li.view-all a {
      align-items: center;
    }

    .countries-nav ul li a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 11px 10px;
      text-decoration: none;
    }

    .countries-nav ul li span {
      display: flex;
      width: 98px;
      height: 40px;
      align-items: center;
      justify-content: center;

      color: var(--Main-White, #FFF);
      text-align: center;
      text-shadow: 0px 4.624px 4.624px rgba(0, 0, 0, 0.25);
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
    }

    .countries-nav ul li a {
      position: relative;
    }

    .countries-nav a img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }

    .countries-nav ul li a span {
      z-index: 1;
    }

    @media screen and (max-width: 768px) {


      .countries-nav ul {
        flex-wrap: wrap;
        gap: 13px;
      }

      .countries-nav ul li a span {
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        /* 133.333% */
      }
    }

    @media screen and (max-width: 425px) {
      .countries-nav ul li {
        width: 103px;
        height: 118px;
      }
    }

    /* OR Divider */
    .or-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;

      padding-block: 27px;

      color: #333F48;
      text-align: center;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      /* 142.857% */
      text-transform: uppercase;
    }

    /* Select2 */
    .select2-option {
      display: flex;
      align-items: center;
    }

    .img-flag {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }

    .container-crs .select2-container--default .select2-selection--single {
      height: 56px;
      border-radius: 6px;
      border: 2px solid #FEA900;
      background: #FFF;
    }

    .container-crs .select2-container--default .select2-selection--single .select2-selection__rendered {
      line-height: 56px;
    }

    .container-crs .select2-container .select2-selection--single .select2-selection__rendered {
      padding-inline: 16px !important;
    }

    .container-crs .select2-selection__placeholder {
      color: #333F48 !important;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }

    .container-crs .select2-container--default .select2-selection--single .select2-selection__arrow {
      display: none;
    }

    .container-crs .select2-container--default .select2-selection--single {
      background-image: url('https://conversionratestore.github.io/projects/simify/img/arrow-down.svg');
      background-repeat: no-repeat;
      background-position: right 12px center;
    }

    .container-crs .select2-container--open .select2-selection--single {
      background-image: url('https://conversionratestore.github.io/projects/simify/img/arrow-up.svg');
      background-repeat: no-repeat;
      background-position: right 12px center;
    }

    .container-crs .select2-results {
      padding: 2px 16px;
    }

    .container-crs .select2-results__option--group {
      border-bottom: 2px solid #CCC;
      padding: 9px 0 !important;
    }

    .container-crs .select2-results__option--group:last-child {
      border: 0;
    }

    .container-crs .select2-container--default .select2-results__group {
      overflow: hidden;
      color: #333F48;
      text-overflow: ellipsis;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: 18px;
      padding: 5px 0 !important;
    }

    .container-crs  .select2-container--default .select2-results__option .select2-results__option {
      color: #333F48;
      padding: 5px 0;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      /* 142.857% */
    }

    .container-crs  .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {
      background-color: transparent !important;
    }

    /* Accordion */
    .accordion {
      margin-block: 30px;
    }

    .particular-collection .accordion {
      margin-block: 0;
    }

    .accordion-item {
      background: #EEF4FC;
    }

    .accordion-item:first-child {
      border-radius: 6px 6px 0 0;
    }

    .accordion-item:last-child {
      border-radius: 0 0 6px 6px;
    }

    .accordion-title-text {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      cursor: pointer;

      color: #333F48;
      font-family: Poppins;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }

    .accordion-title-text img {
      transition: transform .3s ease-in-out;
    }

    .active .accordion-title-text img {
      transform: rotate(45deg);
    }

    .accordion-line {
      width: calc(100% - 24px);
      height: 2px;
      background-color: #fff;
      margin-inline: auto;
    }

    .accordion-content {
      max-height: 0;
      overflow: hidden;
      transition: max-height .3s ease-in-out;
    }

    .accordion-inner {
      padding: 12px;
      color: #7B8791;
      font-family: Poppins;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      /* 166.667% */
    }

    .travelling {
      color: #000;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
    }

    .travelling a{
      color: #FEA900;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      text-decoration: underline;
    } 

    /* switcher */
    .switcher {
      border-radius: 6px;
      border: 2px solid #333F48;
      background: var(--Main-White, #FFF);
      padding: 6px;
      display: flex;
      gap: 10px;
      width: fit-content;
      position: relative;
      transition: color 0.3s ease-in-out;
    }

    .switcher p {
      margin: 0;     
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
    }

    .switcher::before {
      content: '';
      position: absolute;
      left: 6px;
      top: 6px;
      width: 100px;
      height: 40px;
      background: #333F48;
      border-radius: 4px;
      transition: transform 0.3s ease-in-out;
    }

    .switcher>div:first-child {
      color: #fff;
    }

    .switcher>div:last-child {
      color: #333F48;
    }

    .switcher--right::before {
      transform: translateX(calc(100% + 9px));
    }

    .switcher.switcher--right>div:first-child {
      color: #333F48;
    }

    .switcher.switcher--right>div:last-child {
      color: #fff;
    }

    .switcher>div {
      display: flex;
      width: 100px;
      height: 40px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      z-index: 1;
      cursor: pointer;
    }

    </style>`

  const countries = {
    argentina: {
      name: 'Argentina',
      flag: 'argentina',
      url: 'argentina'
    },
    australia: {
      name: 'Australia',
      flag: 'australia',
      url: 'australia'
    },
    austria: {
      name: 'Austria',
      flag: 'austria',
      url: 'esim-austria'
    },
    bahamas: {
      name: 'Bahamas',
      flag: 'bahamas',
      url: 'bahamas'
    },
    bali: {
      name: 'Bali',
      flag: 'bali',
      url: 'bali'
    },
    belgium: {
      name: 'Belgium',
      flag: 'belgium',
      url: 'belgium'
    },
    brazil: {
      name: 'Brazil',
      flag: 'brazil',
      url: 'brazil'
    },
    bulgaria: {
      name: 'Bulgaria',
      flag: 'bulgaria',
      url: 'bulgaria'
    },
    cambodia: {
      name: 'Cambodia',
      flag: 'cambodia',
      url: 'cambodia'
    },
    canada: {
      name: 'Canada',
      flag: 'canada',
      url: 'canada'
    },
    chile: {
      name: 'Chile',
      flag: 'chile',
      url: 'chile'
    },
    china: {
      name: 'China',
      flag: 'china',
      url: 'china'
    },
    colombia: {
      name: 'Colombia',
      flag: 'colombia',
      url: 'colombia'
    },
    'costa-rica': {
      name: 'Costa Rica',
      flag: 'costa-rica',
      url: 'costa-rica'
    },
    croatia: {
      name: 'Croatia',
      flag: 'croatia',
      url: 'croatia'
    },
    cyprus: {
      name: 'Cyprus',
      flag: 'cyprus',
      url: 'cyprus'
    },
    'czech-republic': {
      name: 'Czech Republic',
      flag: 'czech-republic',
      url: 'czech-republic'
    },
    denmark: {
      name: 'Denmark',
      flag: 'denmark',
      url: 'denmark'
    },
    'dominican-republic': {
      name: 'Dominican Republic',
      flag: 'dominican-republic',
      url: 'dominican-republic'
    },
    egypt: {
      name: 'Egypt',
      flag: 'egypt',
      url: 'egypt'
    },
    'el-salvador': {
      name: 'El Salvador',
      flag: 'el-salvador',
      url: 'el-salvador'
    },
    england: {
      name: 'England',
      flag: 'england',
      url: 'england'
    },
    fiji: {
      name: 'Fiji',
      flag: 'fiji',
      url: 'fiji'
    },
    finland: {
      name: 'Finland',
      flag: 'finland',
      url: 'finland'
    },
    france: {
      name: 'France',
      flag: 'france',
      url: 'france'
    },
    germany: {
      name: 'Germany',
      flag: 'germany',
      url: 'germany'
    },
    greece: {
      name: 'Greece',
      flag: 'greece',
      url: 'greece'
    },
    guatemala: {
      name: 'Guatemala',
      flag: 'guatemala',
      url: 'guatemala'
    },
    hawaii: {
      name: 'Hawaii',
      flag: 'hawaii',
      url: 'hawaii'
    },
    'hong-kong': {
      name: 'Hong Kong',
      flag: 'hong-kong',
      url: 'hong-kong'
    },
    hungary: {
      name: 'Hungary',
      flag: 'hungary',
      url: 'hungary'
    },
    iceland: {
      name: 'Iceland',
      flag: 'iceland',
      url: 'iceland'
    },
    india: {
      name: 'India',
      flag: 'india',
      url: 'india'
    },
    indonesia: {
      name: 'Indonesia (Bali)',
      flag: 'indonesia',
      url: 'indonesia'
    },
    ireland: {
      name: 'Ireland',
      flag: 'ireland',
      url: 'ireland',
    },
    israel: {
      name: 'Israel',
      flag: 'israel',
      url: 'israel',
    },
    italy: {
      name: 'Italy',
      flag: 'italy',
      url: 'italy',
    },
    japan: {
      name: 'Japan',
      flag: 'japan',
      url: 'japan',
    },
    kuwait: {
      name: 'Kuwait',
      flag: 'kuwait',
      url: 'esim-kuwait',
    },
    laos: {
      name: 'Laos',
      flag: 'laos',
      url: 'laos',
    },
    latvia: {
      name: 'Latvia',
      flag: 'latvia',
      url: 'latvia',
    },
    macau: {
      name: 'Macau',
      flag: 'macao',
      url: 'macau',
    },
    macedonia: {
      name: 'Macedonia',
      flag: 'macedonia',
      url: 'macedonia',
    },
    malaysia: {
      name: 'Malaysia',
      flag: 'malasya',
      url: 'malaysia',
    },
    malta: {
      name: 'Malta',
      flag: 'malta',
      url: 'malta',
    },
    mexico: {
      name: 'Mexico',
      flag: 'mexico',
      url: 'mexico-sim-card',
    },
    myanmar: {
      name: 'Myanmar',
      flag: 'myanmar',
      url: 'myanmar',
    },
    nepal: {
      name: 'Nepal',
      flag: 'nepal',
      url: 'nepal',
    },
    netherlands: {
      name: 'Netherlands',
      flag: 'netherlands',
      url: 'netherlands',
    },
    'new-zealand': {
      name: 'New Zealand',
      flag: 'new-zealand',
      url: 'new-zealand',
    },
    nicaragua: {
      name: 'Nicaragua',
      flag: 'nicaragua',
      url: 'nicaragua',
    },
    norway: {
      name: 'Norway',
      flag: 'norway',
      url: 'norway',
    },
    oman: {
      name: 'Oman',
      flag: 'oman',
      url: 'oman',
    },
    pakistan: {
      name: 'Pakistan',
      flag: 'pakistan',
      url: 'esim-pakistan',
    },
    palestine: {
      name: 'Palestine',
      flag: 'palestine',
      url: 'palestine'
    },
    panama: {
      name: 'Panama',
      flag: 'panama',
      url: 'panama'
    },
    peru: {
      name: 'Peru',
      flag: 'peru',
      url: 'peru'
    },
    philippines: {
      name: 'Philippines',
      flag: 'philippines',
      url: 'philippines'
    },
    poland: {
      name: 'Poland',
      flag: 'poland',
      url: 'poland'
    },
    portugal: {
      name: 'Portugal',
      flag: 'portugal',
      url: 'portugal'
    },
    qatar: {
      name: 'Qatar',
      flag: 'qatar',
      url: 'qatar'
    },
    romania: {
      name: 'Romania',
      flag: 'romania',
      url: 'romania'
    },
    russia: {
      name: 'Russia',
      flag: 'russia',
      url: 'russia'
    },
    scotland: {
      name: 'Scotland',
      flag: 'scotland',
      url: 'scotland'
    },
    singapore: {
      name: 'Singapore',
      flag: 'singapore',
      url: 'singapore'
    },
    slovakia: {
      name: 'Slovakia',
      flag: 'slovakia',
      url: 'slovakia'
    },
    slovenia: {
      name: 'Slovenia',
      flag: 'slovenia',
      url: 'slovenia'
    },
    'south-korea': {
      name: 'South Korea',
      flag: 'south-korea',
      url: 'south-korea'
    },
    'south-africa': {
      name: 'South Africa',
      flag: 'south-africa',
      url: 'south-africa'
    },
    spain: {
      name: 'Spain',
      flag: 'spain',
      url: 'spain'
    },
    'sri-lanka': {
      name: 'Sri Lanka',
      flag: 'sri-lanka',
      url: 'sri-lanka'
    },
    sweden: {
      name: 'Sweden',
      flag: 'sweden',
      url: 'sweden'
    },
    switzerland: {
      name: 'Switzerland',
      flag: 'switzerland',
      url: 'switzerland'
    },
    taiwan: {
      name: 'Taiwan',
      flag: 'taiwan',
      url: 'esim-taiwan'
    },
    thailand: {
      name: 'Thailand',
      flag: 'thailand',
      url: 'thailand'
    },
    turkey: {
      name: 'Turkey',
      flag: 'turkey',
      url: 'turkey'
    },
    'uae-dubai': {
      name: 'UAE (Dubai)',
      flag: 'uae-dubai',
      url: 'uae-dubai'
    },
    'united-kingdom': {
      name: 'United Kingdom',
      flag: 'united-kingdom',
      url: 'united-kingdom'
    },
    uruguay: {
      name: 'Uruguay',
      flag: 'uruguay',
      url: 'uruguay'
    },
    usa: {
      name: 'USA',
      flag: 'usa',
      url: 'united-states'
    },
    vietnam: {
      name: 'Vietnam',
      flag: 'vietnam',
      url: 'vietnam'
    },
  }

  // -------------------------------------
  // MAKE DOM CHANGES
  // -------------------------------------
  document.head.insertAdjacentHTML('beforeend', style)

  start()

  // const recordClarity = setInterval(() => {
  //   if (typeof clarity === 'function') {
  //     clearInterval(recordClarity)
  //     clarity('set', `CLARITY_NAME`, 'variant_1')
  //   }
  // }, WAIT_INTERVAL_TIMEOUT)

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

  const pushDataLayer = ([event_name, event_desc, event_type, event_loc]) => { // Send a Google Analytics event
    const eventData = {
      'event': 'event-to-ga4', event_name, event_desc, event_type, event_loc
    }

    window.dataLayer = window.dataLayer || []
    dataLayer.push(eventData)

    console.log(eventData)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  function addHeading() {
    const faqHTML = /*html*/`
    <div class="accordion">
            <div class="accordion-item">
              <div class="accordion-title">
                <div class="accordion-title-text">
                  <p>What is an eSIM?</p>
                  <img src="https://conversionratestore.github.io/projects/simify/img/add-icon.svg" alt="Button to expand FAQ content">
                </div>
                <div class="accordion-line"></div>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <p>An eSIM is a digital version of a traditional SIM card. It's embedded in your device and performs the
                    same functions—connecting to mobile networks for calls, texts, and data. Unlike a physical SIM card, an
                    eSIM is built into your phone or tablet and can be activated electronically without needing to insert
                    anything.</p>
                </div>
              </div>
            </div>
  
            <div class="accordion-item">
              <div class="accordion-title">
                <div class="accordion-title-text">
                  <p>How to get started with eSIM?</p>
                  <img src="https://conversionratestore.github.io/projects/simify/img/add-icon.svg" alt="Button to expand FAQ content">
                </div>
                <div class="accordion-line"></div>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <p><b>Purchase with Ease.</b> Browse our selection of eSIM plans. Once you've found your perfect match,
                    complete
                    the purchase, and we'll email you the details.
                  </p>
                  <p><b>Activate Your Plan.</b> Locate the email from us containing your eSIM QR code. Then, on your device,
                    navigate
                    to "Settings," tap "Cellular" or "Mobile Data," and select "Add Cellular Plan." Scan the QR code, and
                    voilà! Your device will connect to the network.</p>
                  <p><b>Enjoy Your Connection.</b> With just a few taps, your device is now equipped with data. No need to
                    wait for
                    shipping, no need for physical SIM cards. Start browsing, streaming, and staying connected immediately.
                  </p>
                  <p><i>Note: Should you need any assistance, our customer support is here to guide you through each step.</i>
                  </p>
                </div>
              </div>
            </div>
  
            <div class="accordion-item">
              <div class="accordion-title">
                <div class="accordion-title-text">
                  <p>Is my device eSIM compatible?</p>
                  <img src="https://conversionratestore.github.io/projects/simify/img/add-icon.svg" alt="Button to expand FAQ content">
                </div>
                <div class="accordion-line"></div>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <p> Most modern devices, especially those released in the last few years, are likely to be compatible with
                    eSIM technology. This includes a wide range of smartphones, tablets, and wearable devices from various
                    manufacturers. To see if your specific device supports eSIM, you can look up the technical specifications
                    provided by the device manufacturer or check the user manual that came with your device. For your
                    convenience, we've compiled a comprehensive list of eSIM-compatible devices on our eSIM product pages.
                    Just pick the plan, and scroll down on the page to find detailed compatibility information for popular
                    brands like Apple, Samsung, and Google, along with others.</p>
                </div>
              </div>
            </div>
  
            <div class="accordion-item">
              <div class="accordion-title">
                <div class="accordion-title-text">
                  <p>What is better, SIM or eSIM?</p>
                  <img src="https://conversionratestore.github.io/projects/simify/img/add-icon.svg" alt="Button to expand FAQ content">
                </div>
                <div class="accordion-line"></div>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <p>The choice between a traditional SIM and an eSIM depends on your specific needs and device capabilities:
                  </p>
                  <ul>
                    <li>Traditional SIM Card: Ideal for those who frequently switch between different phones or have older
                      models. You can physically move the SIM card from one device to another.</li>
                    <li>eSIM: Perfect for managing multiple network plans on a single device. eSIMs offer the convenience of
                      instant delivery and digital activation and are considered more secure as they can't be physically
                      removed or tampered with.</li>
                  </ul>
                  <p>Both options have their advantages, so the right choice depends on your lifestyle, device, and how you
                    use your mobile service.</p>
                </div>
              </div>
            </div>
          </div>
    `

    const addAccordionFAQLogic = () => {
      const waitForEl = setInterval(() => {
        if (document.querySelectorAll('.accordion-title')[3] && typeof jQuery !== 'undefined') {
          clearInterval(waitForEl)

          $('.accordion-title').click(function () {
            var content = $(this).next('.accordion-content')
            var item = $(this).parent('.accordion-item')

            if (item.hasClass('active')) {
              // If the clicked item is already active, close it
              content.css('max-height', '0')
              item.removeClass('active')
            } else {
              // Close any active accordion items
              $('.accordion-item.active').each(function () {
                $(this).removeClass('active')
                $(this).children('.accordion-content').css('max-height', '0')
              })

              // Open the clicked accordion item
              item.addClass('active')
              content.css('max-height', content.prop('scrollHeight') + 'px')
            }
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    const addSelect2 = () => {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js'
      script.async = false
      document.head.appendChild(script)

      const style = document.createElement('link')
      style.href = 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css'
      style.rel = 'stylesheet'
      document.head.appendChild(style)

      let idCounter = 1

      function createCountryOption(handle) {
        const country = countries[handle]

        if (country) {
          const name = country.name
          const url = country.url

          return {
            id: idCounter++,
            text: name,
            flag: `${IMAGE_DIR_URL}/flags/${url}.svg`
          }
        } else {
          console.error(`Country with handle ${handle} not found.`)
          return null
        }
      }

      const addSelect2Plugin = setInterval(() => {
        if (jQuery && jQuery.fn && jQuery.fn.select2) {
          clearInterval(addSelect2Plugin)

          // Sample data
          var data = [
            {
              text: 'Popular',
              children: [
                createCountryOption('india'),
                createCountryOption('bali'),
                createCountryOption('japan'),
                createCountryOption('new-zealand'),
                createCountryOption('united-kingdom'),
                createCountryOption('usa'),
                createCountryOption('vietnam'),
              ]
            },
            {
              text: 'Africa',
              children: [
                createCountryOption('egypt'),
                createCountryOption('south-africa'),
              ],
            },
            {
              text: 'Asia',
              children: [
                createCountryOption('bali'),
                createCountryOption('cambodia'),
                createCountryOption('china'),
                createCountryOption('hong-kong'),
                createCountryOption('india'),
                createCountryOption('indonesia'),
                createCountryOption('israel'),
                createCountryOption('japan'),
                createCountryOption('kuwait'),
                createCountryOption('laos'),
                createCountryOption('macau'),
                createCountryOption('malaysia'),
                createCountryOption('myanmar'),
                createCountryOption('nepal'),
                createCountryOption('oman'),
                createCountryOption('pakistan'),
                createCountryOption('palestine'),
                createCountryOption('philippines'),
                createCountryOption('qatar'),
                createCountryOption('singapore'),
                createCountryOption('south-korea'),
                createCountryOption('sri-lanka'),
                createCountryOption('taiwan'),
                createCountryOption('thailand'),
                createCountryOption('turkey'),
                createCountryOption('uae-dubai'),
                createCountryOption('vietnam'),
              ],
            },
            {
              text: 'Europe',
              children: [
                createCountryOption('austria'),
                createCountryOption('belgium'),
                createCountryOption('bulgaria'),
                createCountryOption('croatia'),
                createCountryOption('cyprus'),
                createCountryOption('czech-republic'),
                createCountryOption('denmark'),
                createCountryOption('england'),
                createCountryOption('finland'),
                createCountryOption('france'),
                createCountryOption('germany'),
                createCountryOption('greece'),
                createCountryOption('hungary'),
                createCountryOption('iceland'),
                createCountryOption('ireland'),
                createCountryOption('italy'),
                createCountryOption('latvia'),
                createCountryOption('macedonia'),
                createCountryOption('malta'),
                createCountryOption('netherlands'),
                createCountryOption('norway'),
                createCountryOption('poland'),
                createCountryOption('portugal'),
                createCountryOption('romania'),
                createCountryOption('russia'),
                createCountryOption('scotland'),
                createCountryOption('slovakia'),
                createCountryOption('slovenia'),
                createCountryOption('spain'),
                createCountryOption('sweden'),
                createCountryOption('switzerland'),
                createCountryOption('united-kingdom'),
              ]
            },
            {
              text: 'North America',
              children: [
                createCountryOption('bahamas'),
                createCountryOption('canada'),
                createCountryOption('costa-rica'),
                createCountryOption('dominican-republic'),
                createCountryOption('el-salvador'),
                createCountryOption('guatemala'),
                createCountryOption('mexico'),
                createCountryOption('nicaragua'),
                createCountryOption('panama'),
                createCountryOption('usa'),
              ]
            },
            {
              text: 'Oceania',
              children: [
                createCountryOption('australia'),
                createCountryOption('fiji'),
                createCountryOption('hawaii'),
                createCountryOption('new-zealand'),
              ]
            },
            {
              text: 'South America',
              children: [
                createCountryOption('argentina'),
                createCountryOption('brazil'),
                createCountryOption('chile'),
                createCountryOption('colombia'),
                createCountryOption('peru'),
                createCountryOption('uruguay'),
              ]
            }
            // Add more categories and countries as needed
          ]

          // var data = [
          //   {
          //     text: 'Popular',
          //     children: [
          //       createCountryOption('india'),
          //       createCountryOption('bali'),
          //       createCountryOption('japan'),
          //     ]
          //   }
          // ]

          // Initialize Select2
          var select2 = $('#countries').select2({
            data: data,
            placeholder: 'Select a country',
            allowClear: true,
            width: '100%',
            templateResult: formatCountry,
            templateSelection: formatCountrySelected
          })

          // Focus on the search field when the dropdown is opened
          select2.on('select2:open', () => {
            window.setTimeout(function () {
              document.querySelector('.select2-search__field').focus()
            }, 100) // Increase the delay here
          })

          // Redirect to the selected country's page when an option is selected
          select2.on('select2:select', function (e) {
            var selectedCountry = e.params.data
            window.location.href = newUrl + selectedCountry.text.toLowerCase()
          })

          function formatCountry(country) {
            if (!country.id) { return country.text }
            var $country = $(
              `<div class="select2-option"><img src="${country.flag}" class="img-flag"/><span>${country.text}</span></div>`
            )
            return $country
          };

          function formatCountrySelected(country) {
            return country.text || country.id
          };
        }
      }, WAIT_INTERVAL_TIMEOUT)
    }

    let heading = ''

    if (pathname.includes('collections/all')) {
      heading = /*html*/`
      <div class="container-crs">
        <div class="heading">
          <p>Where are you going?</p>
          <p>Select your travel region to see all plans</p>
        </div>

        <nav class="countries-nav show-on-large">
          <ul>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/europe.png" alt="">
                <span>Europe & UK</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/usa.png" alt="">
                <span>USA, Canada & Mexico</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/japan.png" alt="">
                <span>Japan</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/asia.png" alt="">
                <span>Asia</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/australia.png" alt="">
                <span>New Zealand & Australia</span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/south-america.png" alt="">
                <span>South America</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/east.png" alt="">
                <span>Middle East</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/africa.png" alt="">
                <span>Africa</span>
              </a>
            </li>
            <li class="view-all">
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/all.png" alt="">
                <span>View All</span>
              </a>
            </li>
          </ul>
        </nav>
        <nav class="countries-nav show-on-mobile">
          <ul>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/europe.png" alt="">
                <span>Europe & UK</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/usa.png" alt="">
                <span>USA, Canada & Mexico</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/japan.png" alt="">
                <span>Japan</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/asia.png" alt="">
                <span>Asia</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/australia.png" alt="">
                <span>New Zealand & Australia</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/south-america.png" alt="">
                <span>South America</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/east.png" alt="">
                <span>Middle East</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/africa.png" alt="">
                <span>Africa</span>
              </a>
            </li>
            <li class="view-all">
              <a href="#">
                <img src="https://conversionratestore.github.io/projects/simify/img/all.png" alt="">
                <span>View All</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="or-divider">
          <svg xmlns="http://www.w3.org/2000/svg" width="326" height="2" viewBox="0 0 326 2" fill="none">
            <path d="M326 1H-9.29832e-06" stroke="url(#paint0_linear_923_30822)" />
            <defs>
              <linearGradient id="paint0_linear_923_30822" x1="317.85" y1="2.00011" x2="127.683" y2="2.00011"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#DEDEDE" />
                <stop offset="1" stop-color="#DEDEDE" stop-opacity="0.2801" />
              </linearGradient>
            </defs>
          </svg>
          <span>or</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="326" height="2" viewBox="0 0 326 2" fill="none">
            <path d="M0 1H326" stroke="url(#paint0_linear_923_30824)" />
            <defs>
              <linearGradient id="paint0_linear_923_30824" x1="8.15" y1="2.00011" x2="198.317" y2="2.00011"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#DEDEDE" />
                <stop offset="1" stop-color="#DEDEDE" stop-opacity="0.2801" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <select id="countries">
          <option></option> <!-- Add this line -->
          <!-- Options will be populated dynamically -->
        </select>

        ${faqHTML}

        <div class="heading">
          <p>All SIM plans:</p>
          <p>Select the plan that suits you best </p>
        </div>
      </div>
      `

      addSelect2()
    } else {
      let title = ''
      let subtitle = ''
      let typeofPage = ''
      let place

      if (pathname.includes('esim')) {
        place = capitalizeFirstLetter(pathname.split('collections/')[1])

        title = `${place} eSIM plans:`
        subtitle = 'Select the plan that suits you best'
      } else {
        place = capitalizeFirstLetter(pathname.split('collections/')[1])

        title = `${place} plans:`
        subtitle = 'Select the plan that suits you best'
      }

      heading = /*html*/`
      <div class="container-crs particular-collection">
        <div class="heading">
          <p>${title}</h>
          <p>${subtitle}</p>
        </div>
        ${faqHTML}
        <p class="travelling">Travelling elsewhere? <a href="${newUrl}/all">See all locations</a></p>
      </div>`
    }

    waitForElement('.SectionHeader').then((el) => {
      el.insertAdjacentHTML('afterend', heading)
    })

    waitForElement('[data-tab-id="esim"]').then((el) => {
      const switcher = /*html*/`
        <div class="switcher ">
          <div>
            <p>eSIM</p>
          </div>
          <div>
            <p>SIM</p>
          </div>
        </div>
      `

      waitForElement('.heading').then(el => el.insertAdjacentHTML('afterend', switcher))

      const handleSwitcherLogic = setInterval(() => {
        if (document.querySelector('.switcher') && document.querySelectorAll('.switcher>div')[1]) {
          clearInterval(handleSwitcherLogic)

          const switcher = document.querySelector('.switcher')
          const left = switcher.querySelector('div:first-child')
          const right = switcher.querySelector('div:last-child')

          left.addEventListener('click', () => {
            switcher.classList.remove('switcher--right')
            document.querySelector('[data-tab-id="sim"]').click()
          })

          right.addEventListener('click', () => {
            switcher.classList.add('switcher--right')
            document.querySelector('[data-tab-id="esim"]').click()
          })
        }
      }, WAIT_INTERVAL_TIMEOUT)

    })

    addAccordionFAQLogic()
  }

  function start() {
    addHeading()
  }
})()