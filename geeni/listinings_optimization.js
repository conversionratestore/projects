;(() => {
  console.log(
    '%c EXP: Listiongs Optimization (DEV: OS)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )

  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval)
      clarity('set', '', 'variant_1')
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

  const blockVisibility = (selector, event, descr, location) => {
    let v1 = new IntersectionObserver(
      entries => {
        entries.forEach(item => {
          if (item.isIntersecting) {
            v1.unobserve(item.target)
            setTimeout(function () {
              v2.observe(item.target)
            }, 1000 * 3)
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
            descr || 'Element visibility',
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

  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)

  // load script
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

  const loadScriptsOrStyles = async urls => {
    for (const url of urls) {
      await loadScriptOrStyle(url)
      console.log(`Loaded librari ${url}`)
    }
    console.log('All libraries loaded!')
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
        subtree: true,
        characterData: true
      })
    })
  }

  const collections = {
    allProducts: 'all',
    allCameras: 'smart-security-cameras',
    allLighting: 'lighting',
    lifestyleHealth: 'smart-appliances',
    powerSwitches: 'power',
    babyCamers: 'baby-cameras',
    bestSellers: 'best-sellers',
    bundles: 'bundles',
    cameras: 'cameras',
    colorLights: 'colored-lights',
    doorbells: 'doorbell-cameras',
    edisonFixturesLights: 'edison-fixtures-lights'
  }

  const icons = {
    login: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M11 21C16.5229 21 21 16.5229 21 11C21 5.47722 16.5229 1 11 1C5.47722 1 1 5.47722 1 11C1 16.5229 5.47722 21 11 21Z"
        stroke="black"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0007 14.3333C13.3019 14.3333 15.1673 12.4679 15.1673 10.1667C15.1673 7.86542 13.3019 6 11.0007 6C8.6994 6 6.83398 7.86542 6.83398 10.1667C6.83398 12.4679 8.6994 14.3333 11.0007 14.3333Z"
        stroke="black"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.3125 18.4368C4.78146 17.5132 5.43667 16.6967 6.23683 16.0388C7.03698 15.3809 7.96474 14.8959 8.96162 14.6144C9.95851 14.3328 11.0029 14.2608 12.029 14.4029C13.0551 14.545 14.0406 14.8981 14.9235 15.44C16.1038 16.1646 17.0605 17.2018 17.6875 18.4368"
        stroke="black"
        stroke-width="1.08333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> `,
    app: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
      <mask id="path-1-inside-1_2444_4767" fill="white">
        <path
          d="M11.4017 0H1.9316C1.41956 0.000458673 0.928621 0.204022 0.566495 0.566024C0.204368 0.928025 0.000635426 1.4189 0 1.93093V18.0691C0.000635426 18.5811 0.204368 19.072 0.566495 19.434C0.928621 19.796 1.41956 19.9995 1.9316 20H11.4017C11.9138 19.9995 12.4047 19.796 12.7668 19.434C13.129 19.072 13.3327 18.5811 13.3333 18.0691V1.93093C13.3327 1.4189 13.129 0.928025 12.7668 0.566024C12.4047 0.204022 11.9138 0.000458673 11.4017 0ZM1.9316 1.33333H11.4017C11.5603 1.33344 11.7123 1.39641 11.8244 1.50844C11.9366 1.62047 11.9997 1.77241 12 1.93093V14.6667H1.33333V1.93093C1.33362 1.77241 1.39676 1.62047 1.50891 1.50844C1.62107 1.39641 1.77308 1.33344 1.9316 1.33333ZM11.4017 18.6667H1.9316C1.77308 18.6666 1.62107 18.6036 1.50891 18.4916C1.39676 18.3795 1.33362 18.2276 1.33333 18.0691V16H12V18.0691C11.9997 18.2276 11.9366 18.3795 11.8244 18.4916C11.7123 18.6036 11.5603 18.6666 11.4017 18.6667Z"
        />
      </mask>
      <path
        d="M11.4017 0H1.9316C1.41956 0.000458673 0.928621 0.204022 0.566495 0.566024C0.204368 0.928025 0.000635426 1.4189 0 1.93093V18.0691C0.000635426 18.5811 0.204368 19.072 0.566495 19.434C0.928621 19.796 1.41956 19.9995 1.9316 20H11.4017C11.9138 19.9995 12.4047 19.796 12.7668 19.434C13.129 19.072 13.3327 18.5811 13.3333 18.0691V1.93093C13.3327 1.4189 13.129 0.928025 12.7668 0.566024C12.4047 0.204022 11.9138 0.000458673 11.4017 0ZM1.9316 1.33333H11.4017C11.5603 1.33344 11.7123 1.39641 11.8244 1.50844C11.9366 1.62047 11.9997 1.77241 12 1.93093V14.6667H1.33333V1.93093C1.33362 1.77241 1.39676 1.62047 1.50891 1.50844C1.62107 1.39641 1.77308 1.33344 1.9316 1.33333ZM11.4017 18.6667H1.9316C1.77308 18.6666 1.62107 18.6036 1.50891 18.4916C1.39676 18.3795 1.33362 18.2276 1.33333 18.0691V16H12V18.0691C11.9997 18.2276 11.9366 18.3795 11.8244 18.4916C11.7123 18.6036 11.5603 18.6666 11.4017 18.6667Z"
        fill="black"
      />
      <path
        d="M11.4017 0L11.4208 -21.3333L11.4113 -21.3333H11.4017V0ZM1.9316 0V-21.3333H1.92204L1.91249 -21.3333L1.9316 0ZM0 1.93093L-21.3333 1.90446L-21.3333 1.9177V1.93093H0ZM0 18.0691H-21.3333V18.0823L-21.3333 18.0955L0 18.0691ZM1.9316 20L1.91249 41.3333L1.92204 41.3333H1.9316V20ZM11.4017 20V41.3333H11.4113L11.4208 41.3333L11.4017 20ZM13.3333 18.0691L34.6667 18.0955L34.6667 18.0823V18.0691H13.3333ZM13.3333 1.93093H34.6667V1.9177L34.6667 1.90446L13.3333 1.93093ZM1.9316 1.33333V-20H1.92449L1.91738 -20L1.9316 1.33333ZM11.4017 1.33333L11.416 -20L11.4088 -20H11.4017V1.33333ZM12 1.93093H33.3333V1.91193L33.3333 1.89293L12 1.93093ZM12 14.6667V36H33.3333V14.6667H12ZM1.33333 14.6667H-20V36H1.33333V14.6667ZM1.33333 1.93093L-20 1.89293L-20 1.91193V1.93093H1.33333ZM11.4017 18.6667V40H11.4088L11.416 40L11.4017 18.6667ZM1.9316 18.6667L1.91738 40L1.92449 40H1.9316V18.6667ZM1.33333 18.0691H-20V18.0881L-20 18.1071L1.33333 18.0691ZM1.33333 16V-5.33333H-20V16H1.33333ZM12 16H33.3333V-5.33333H12V16ZM12 18.0691L33.3333 18.1071L33.3333 18.0881V18.0691H12ZM11.4017 -21.3333H1.9316V21.3333H11.4017V-21.3333ZM1.91249 -21.3333C-4.2496 -21.3278 -10.1578 -18.878 -14.5158 -14.5215L15.6488 15.6536C12.0151 19.2861 7.08873 21.3287 1.95071 21.3333L1.91249 -21.3333ZM-14.5158 -14.5215C-18.8739 -10.165 -21.3257 -4.25762 -21.3333 1.90446L21.3333 1.95741C21.3269 7.09542 19.2826 12.0211 15.6488 15.6536L-14.5158 -14.5215ZM-21.3333 1.93093V18.0691H21.3333V1.93093H-21.3333ZM-21.3333 18.0955C-21.3257 24.2576 -18.8738 30.165 -14.5158 34.5215L15.6488 4.34643C19.2826 7.97892 21.3269 12.9046 21.3333 18.0426L-21.3333 18.0955ZM-14.5158 34.5215C-10.1579 38.878 -4.24963 41.3278 1.91249 41.3333L1.95071 -1.33332C7.08876 -1.32872 12.0151 0.713952 15.6488 4.34643L-14.5158 34.5215ZM1.9316 41.3333H11.4017V-1.33333H1.9316V41.3333ZM11.4208 41.3333C17.583 41.3278 23.4912 38.878 27.8492 34.5215L-2.3155 4.34643C1.31822 0.713958 6.24456 -1.32872 11.3826 -1.33332L11.4208 41.3333ZM27.8492 34.5215C32.2072 30.165 34.659 24.2577 34.6667 18.0955L-7.99998 18.0426C-7.99361 12.9046 -5.94924 7.97891 -2.3155 4.34643L27.8492 34.5215ZM34.6667 18.0691V1.93093H-8V18.0691H34.6667ZM34.6667 1.90446C34.659 -4.25764 32.2072 -10.165 27.8492 -14.5215L-2.3155 15.6536C-5.94925 12.0211 -7.99361 7.09543 -7.99998 1.95741L34.6667 1.90446ZM27.8492 -14.5215C23.4912 -18.878 17.5829 -21.3278 11.4208 -21.3333L11.3826 21.3333C6.2446 21.3287 1.31825 19.2861 -2.3155 15.6536L27.8492 -14.5215ZM1.9316 22.6667H11.4017V-20H1.9316V22.6667ZM11.3875 22.6667C5.89715 22.663 0.632347 20.4819 -3.25211 16.6018L26.901 -13.5849C22.7922 -17.6891 17.2234 -19.9961 11.416 -20L11.3875 22.6667ZM-3.25211 16.6018C-7.13659 12.7217 -9.32352 7.45928 -9.3333 1.96894L33.3333 1.89293C33.323 -3.91446 31.0097 -9.48071 26.901 -13.5849L-3.25211 16.6018ZM-9.33333 1.93093V14.6667H33.3333V1.93093H-9.33333ZM12 -6.66667H1.33333V36H12V-6.66667ZM22.6667 14.6667V1.93093H-20V14.6667H22.6667ZM22.6666 1.96894C22.6569 7.45928 20.4699 12.7217 16.5854 16.6018L-13.5676 -13.5849C-17.6764 -9.48071 -19.9896 -3.91446 -20 1.89293L22.6666 1.96894ZM16.5854 16.6018C12.701 20.4819 7.43618 22.663 1.94582 22.6667L1.91738 -20C-3.89003 -19.9961 -9.45885 -17.6891 -13.5676 -13.5849L16.5854 16.6018ZM11.4017 -2.66667H1.9316V40H11.4017V-2.66667ZM1.94582 -2.66666C7.43624 -2.663 12.701 -0.481886 16.5854 3.39821L-13.5676 33.5849C-9.45889 37.6891 -3.89009 39.9961 1.91738 40L1.94582 -2.66666ZM16.5854 3.39821C20.4699 7.27833 22.6569 12.5407 22.6666 18.0311L-20 18.1071C-19.9896 23.9145 -17.6764 29.4807 -13.5676 33.5849L16.5854 3.39821ZM22.6667 18.0691V16H-20V18.0691H22.6667ZM1.33333 37.3333H12V-5.33333H1.33333V37.3333ZM-9.33333 16V18.0691H33.3333V16H-9.33333ZM-9.3333 18.0311C-9.32352 12.5407 -7.13657 7.27833 -3.25211 3.39821L26.901 33.5849C31.0097 29.4807 33.323 23.9145 33.3333 18.1071L-9.3333 18.0311ZM-3.25211 3.39821C0.632306 -0.481886 5.89709 -2.663 11.3875 -2.66666L11.416 40C17.2234 39.9961 22.7922 37.6891 26.901 33.5849L-3.25211 3.39821Z"
        fill="black"
        mask="url(#path-1-inside-1_2444_4767)"
      />
      <path
        d="M6.1948 11.8039C6.32017 11.9288 6.48994 11.999 6.66694 11.999C6.84393 11.999 7.01371 11.9288 7.13907 11.8039L9.80494 9.138C9.92638 9.01227 9.99357 8.84386 9.99205 8.66907C9.99054 8.49427 9.92042 8.32706 9.79682 8.20345C9.67321 8.07985 9.506 8.00974 9.33121 8.00822C9.15641 8.0067 8.98801 8.07389 8.86227 8.19533L7.3336 9.724V4.66667C7.3336 4.48986 7.26337 4.32029 7.13834 4.19526C7.01332 4.07024 6.84375 4 6.66694 4C6.49013 4 6.32056 4.07024 6.19553 4.19526C6.07051 4.32029 6.00027 4.48986 6.00027 4.66667V9.724L4.47161 8.19533C4.34587 8.07389 4.17747 8.0067 4.00267 8.00822C3.82787 8.00974 3.66066 8.07985 3.53706 8.20345C3.41345 8.32706 3.34334 8.49427 3.34182 8.66907C3.3403 8.84386 3.4075 9.01227 3.52894 9.138L6.1948 11.8039Z"
        fill="black"
      />
    </svg>`,
    phone: /* HTML */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M20.494 16.1855L20.494 16.1854L17.6355 14.5348C17.6355 14.5348 17.6355 14.5348 17.6355 14.5348C17.296 14.3388 16.9021 14.2869 16.5212 14.389C16.1404 14.491 15.8252 14.7329 15.6292 15.0725L15.6292 15.0725L15.5165 15.2677C15.5164 15.2678 15.5164 15.2678 15.5164 15.2678C15.2742 15.6875 14.9074 15.9517 14.4328 16.0488C14.4328 16.0488 14.4328 16.0488 14.4328 16.0488L20.494 16.1855ZM20.494 16.1855C21.1299 16.5526 21.3951 17.3104 21.1268 17.9942C21.1268 17.9942 21.1268 17.9942 21.1268 17.9943L21.1131 18.0291L21.1131 18.0292C20.834 18.7401 20.6015 19.3195 20.3881 19.7725C20.1698 20.2357 19.9948 20.514 19.848 20.6608L20.494 16.1855ZM8.9268 8.36932L8.92694 8.36924C9.62791 7.96444 9.86921 7.06377 9.46451 6.36275L9.46451 6.36275L7.81419 3.50399L7.81417 3.50395C7.44704 2.86786 6.68925 2.6027 6.0054 2.87108L8.9268 8.36932ZM8.9268 8.36932L8.73174 8.48206C8.31209 8.72434 8.04776 9.09111 7.95074 9.56586L8.9268 8.36932ZM16.6779 14.9736C16.5542 15.0068 16.3099 15.1039 16.1534 15.3751L16.0407 15.5703L16.4737 15.8203L16.0407 15.5703C15.7099 16.1432 15.2019 16.5093 14.5541 16.6418L14.554 16.6418C13.9062 16.7744 13.2953 16.6371 12.7662 16.24L12.7662 16.24C11.846 15.5495 10.9452 14.7654 10.0894 13.9096C9.23352 13.0535 8.44956 12.1526 7.75919 11.2325L7.75918 11.2325C7.36232 10.7036 7.22505 10.0926 7.35753 9.4445C7.49008 8.79652 7.85616 8.28849 8.4289 7.95774L8.429 7.95768L8.62406 7.84498C9.0368 7.60665 9.17844 7.07816 8.94018 6.66541L8.94017 6.6654L7.28984 3.80666C7.13429 3.53711 6.85331 3.37348 6.54647 3.37348C6.43727 3.37348 6.32901 3.39435 6.2266 3.43456L6.22635 3.43466L6.19274 3.44788L6.1925 3.44797L6.18875 3.44944C5.8649 3.57662 5.35959 3.77505 4.90189 3.97181C4.67247 4.07044 4.44897 4.17122 4.26332 4.26442C4.09734 4.34775 3.90302 4.45295 3.78014 4.56572L3.77223 4.57297L3.76465 4.58056C3.2802 5.06505 3.09479 5.77554 3.10719 6.55006C3.11968 7.33094 3.33218 8.24224 3.72091 9.22161C4.49955 11.1833 6.01781 13.5003 8.25825 15.7411L8.61183 15.3876L8.25826 15.7411C10.3634 17.8465 12.7099 19.4788 14.8786 20.3193C15.8378 20.6911 16.7269 20.8919 17.4901 20.8969C18.2493 20.9019 18.9413 20.7114 19.4198 20.2328L19.4275 20.2251L19.4348 20.2172C19.547 20.0947 19.6518 19.9005 19.7346 19.7353C19.8273 19.5502 19.9278 19.3271 20.0262 19.0979C20.2229 18.6398 20.4217 18.1336 20.5488 17.8099L20.5495 17.8079L20.5495 17.8079L20.5632 17.773C20.7209 17.3715 20.5651 16.9256 20.1915 16.7096L20.1913 16.7095L17.3328 15.0589L17.3324 15.0587C17.0617 14.9027 16.8019 14.9404 16.6779 14.9736ZM16.6779 14.9736L16.8074 15.4566M16.6779 14.9736C16.6779 14.9736 16.6779 14.9737 16.6779 14.9737L16.8074 15.4566M16.8074 15.4566C16.862 15.442 16.9704 15.4272 17.0828 15.4919L16.5865 15.625C16.6514 15.5126 16.7527 15.4712 16.8074 15.4566ZM19.1555 5.76418C18.9074 5.47221 18.6356 5.19611 18.3475 4.94321L18.3475 4.9432C18.2218 4.83291 18.2094 4.64169 18.3197 4.51607L18.3197 4.51602C18.43 4.39042 18.6213 4.37796 18.7469 4.48822C19.057 4.76054 19.3498 5.05805 19.6169 5.37224C19.7251 5.49958 19.7096 5.69055 19.5822 5.79884L19.5821 5.79885C19.525 5.84741 19.4562 5.87083 19.3865 5.87083C19.2996 5.87083 19.2153 5.83451 19.1555 5.76418ZM19.1555 5.76418L18.7745 6.08795L19.1554 5.76413C19.1555 5.76415 19.1555 5.76416 19.1555 5.76418ZM14.5143 2.79699L14.5143 2.79706C14.4809 2.96076 14.5865 3.12065 14.7503 3.15408L14.7503 3.15408C15.1348 3.23256 15.5161 3.34087 15.8839 3.47634L15.8839 3.47635C15.9191 3.48931 15.9542 3.49516 15.9884 3.49516C16.1125 3.49516 16.2277 3.41848 16.2725 3.29695L16.2725 3.2969C16.3302 3.14003 16.2499 2.96605 16.093 2.90829L16.093 2.90828C15.697 2.76242 15.2859 2.64558 14.8715 2.56098L14.5143 2.79699ZM14.5143 2.79699C14.5477 2.63336 14.7074 2.52761 14.8713 2.56096L14.5143 2.79699ZM20.7681 7.86544L20.768 7.86548C20.6103 7.92063 20.5271 8.09328 20.5823 8.25113L20.5824 8.2512C20.7082 8.61102 20.8085 8.98295 20.8802 9.35712M20.7681 7.86544L20.3891 9.45126M20.7681 7.86544C20.9258 7.81024 21.0985 7.89337 21.1537 8.05107M20.7681 7.86544L21.1537 8.05107M20.8802 9.35712L20.3891 9.45126M20.8802 9.35712C20.8802 9.35711 20.8802 9.3571 20.8802 9.35709L20.3891 9.45126M20.8802 9.35712C20.9079 9.50152 21.0345 9.60291 21.1766 9.60291C21.195 9.60291 21.2144 9.60116 21.2345 9.59734M20.3891 9.45126C20.4628 9.83561 20.7992 10.1029 21.1766 10.1029C21.2267 10.1029 21.2776 10.0982 21.3286 10.0884M21.2345 9.59734L21.3286 10.0884M21.2345 9.59734C21.3987 9.56585 21.5062 9.40725 21.4747 9.24314L21.4747 9.24304C21.3974 8.84004 21.2894 8.43888 21.1537 8.05107M21.2345 9.59734C21.2345 9.59732 21.2346 9.59731 21.2346 9.5973L21.3286 10.0884M21.3286 10.0884L21.1537 8.05107M10.0145 3.32241L10.0145 3.32244C10.0599 3.4429 10.1746 3.51843 10.2978 3.51843C10.3327 3.51843 10.3686 3.51233 10.4045 3.49878L10.0145 3.32241ZM10.0145 3.32241C9.95543 3.16608 10.0343 2.99142 10.1907 2.93235L10.0145 3.32241ZM11.7843 2.50421L11.7839 2.50428C11.2415 2.59404 10.7053 2.73807 10.1907 2.93234L11.7843 2.50421ZM11.7843 2.50421C11.9485 2.47689 12.1045 2.58813 12.1319 2.75349M11.7843 2.50421L12.1319 2.75349M12.1319 2.75349C12.1592 2.91845 12.0476 3.07423 11.8827 3.10153M12.1319 2.75349L11.8827 3.10153M11.8827 3.10153C11.3793 3.18481 10.8822 3.31837 10.4046 3.49875L11.8827 3.10153ZM5.97153 2.88437L6.00538 2.87108L19.848 20.6609C19.3062 21.2026 18.5306 21.5 17.5224 21.5H17.5223C16.7021 21.5001 15.7389 21.302 14.6599 20.8838L14.6598 20.8837C12.4493 20.0271 10.0192 18.3584 7.83022 16.1691L7.83021 16.1691C5.64128 13.98 3.97279 11.5495 3.1162 9.33871L3.1162 9.3387C2.16992 6.89659 2.36667 5.12261 3.33907 4.15009L3.33911 4.15006C3.48589 4.00322 3.7642 3.82814 4.2276 3.60973C4.68076 3.39615 5.26027 3.16362 5.97148 2.88439C5.9715 2.88438 5.97151 2.88438 5.97153 2.88437ZM21.4952 12.3309L21.9875 12.4184L21.4952 12.3309C21.4052 12.8378 21.2677 13.3391 21.0866 13.8202C21.0412 13.9408 20.9265 14.0165 20.8031 14.0165C20.7683 14.0165 20.7325 14.0104 20.6965 13.9968C20.5401 13.9379 20.4611 13.7634 20.5199 13.607C20.6881 13.1603 20.8157 12.6955 20.8992 12.2251C20.9284 12.0607 21.0856 11.9508 21.2502 11.98C21.4148 12.0093 21.5245 12.1664 21.4952 12.3309Z"
          fill="black"
          stroke="black"
        />
      </svg>
    `,
    fillStar: /* HTML */ ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
    >
      <path
        d="M7 12.0386L11.326 14.6496L10.178 9.72861L14 6.41761L8.967 5.99061L7 1.34961L5.033 5.99061L0 6.41761L3.822 9.72861L2.674 14.6496L7 12.0386Z"
        fill="#00B3F0"
        stroke="#00B3F0"
        stroke-width="0.777778"
      />
    </svg>`,
    star: /* HTML */ `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 12.0386L12.326 14.6496L11.178 9.72861L15 6.41761L9.967 5.99061L8 1.34961L6.033 5.99061L1 6.41761L4.822 9.72861L3.674 14.6496L8 12.0386Z"
        fill="url(#paint0_linear_2486_3327)"
        stroke="#00B3F0"
        stroke-width="0.777778"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2486_3327"
          x1="1"
          y1="1.34961"
          x2="15"
          y2="1.34961"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.51" stop-color="white" />
        </linearGradient>
      </defs>
    </svg> `
  }

  const swiperConfig = {
    direction: 'horizontal',
    slidesPerView: 2,
    touchStartPreventDefault: false,
    breakpoints: {
      1024: {
        slidesPerView: 4
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: (swiper, current, total) => {
        return current + ' of ' + total
      }
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    }
  }
  class ListingsOptimization {
    constructor() {
      this.siteUrl = 'https://mygeeni.com/'
      this.bestSellers = []
    }
    init() {
      this.initStyles()
      loadScriptsOrStyles([
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
      ]).then(() => {
        this.changeMenu()
        if (window.location.href.includes('collections/all') && !window.location.href.includes('products')) {
          this.allProductsPage()
        }
        this.allCamerasCategory()
        this.powerCategory()
        this.lightingCategory()
        this.lifestyleHealthCategory()

        if (window.location.href.includes('products')) {
          const pathArr = window.location.pathname.split('/')
          this.backNavigation({
            selector: '.main-content',
            text: 'back',
            link: `/${pathArr[1]}/${pathArr[2]}`,
            position: 'beforebegin'
          })
        }
      })
    }
    allProductsPage() {
      const title = $el('.section-header__title.collection__title')
      if (title) {
        title.textContent = 'Shop All Products'
      }
      this.backNavigation({ selector: '.banner.section-padding', text: 'back', link: '/', position: 'afterbegin' })
      this.stickyFilters()
      this.allGeeniProducts()
      this.getBestSellers()
      this.camerasSection()
      this.powerSection()
      this.lightingSection()
      this.lifestyleHealthSection()
      this.changeLinks()

      document.addEventListener('click', e => {
        if (e.target.closest('.shopify-section.collection-section a.product-grid-item__shop_now')) {
          const title = e.target.closest('section').querySelector('h2').textContent
          let event
          let location

          if (title.includes('Cameras')) {
            event = 'exp_list_optim_but_listshoprodu_now'
            location = 'Listing with all products Cameras'
          }

          if (title.includes('Power')) {
            event = 'exp_list_optim_but_listpowers_now'
            location = 'Listing with all products Power'
          }

          if (title.includes('Lighting')) {
            event = 'exp_list_optim_but_listlighting_now'
            location = 'Listing with all products Lighting'
          }

          if (title.includes('Lifestyle & Health')) {
            ;(event = 'exp_list_optim_but_listlifeheal_now'),
              (location = 'Listing with all products Lifestyle & Health')
          }

          const productTitle = e.target
            .closest('.product-grid-item__inner')
            .querySelector('a.product-grid-item__title').textContent
          pushDataLayer(event, `${productTitle} - SHOP NOW`, 'Button', location)
        }

        if (
          e.target.closest('.shopify-section.collection-section a.product-grid-item__title') ||
          e.target.closest('.shopify-section.collection-section a.product__media__holder')
        ) {
          const title = e.target.closest('section')?.querySelector('h2').textContent
          let event
          let location

          if (title.includes('Cameras')) {
            event = 'exp_list_optim_ima_listshoprodu_pdp'
            location = 'Listing with all products Cameras'
          }

          if (title.includes('Power')) {
            event = 'exp_list_optim_ima_listpowers_pdp'
            location = 'Listing with all products Power'
          }

          if (title.includes('Lighting')) {
            event = 'exp_list_optim_ima_listlighting_pdp'
            location = 'Listing with all products Lighting'
          }

          if (title.includes('Lifestyle & Health')) {
            event = 'exp_list_optim_ima_listlifeheal_pdp'
            location = 'Listing with all products Lifestyle & Health'
          }

          const productTitle = e.target
            .closest('.product-grid-item__inner')
            .querySelector('a.product-grid-item__title').textContent

          pushDataLayer(event, `${productTitle} - click PDP`, 'Image', location)
        }

        if (e.target.closest('.swiper-button-prev') || e.target.closest('.swiper-button-next')) {
          const title = e.target.closest('section').querySelector('h2').textContent
          let action = e.target.closest('.swiper-button-prev') ? 'left' : 'right'
          let event
          if (title.includes('Cameras')) {
            event = 'exp_list_optim_arrow_listshoprodu_acti'
          }

          if (title.includes('Power')) {
            event = 'exp_list_optim_arrow_listpowers_acti'
          }

          if (title.includes('Lighting')) {
            event = 'exp_list_optim_arrow_listlighting_acti'
          }

          if (title.includes('Lifestyle & Health')) {
            event = 'exp_list_optim_arrow_listlifeheal_acti'
          }

          pushDataLayer(event, `${action}`, 'Arrows', `Listing with all products ${title}`)
        }
      })
      waitForElement('#ImageWithTitle--template--16970485661948__hero').then(elem => {
        blockVisibility(
          '#ImageWithTitle--template--16970485661948__hero',
          'exp_list_optim_vis_listshoprodu_block',
          'Block view',
          'Listing with all products Shop All Products'
        )
      })
      waitForElement('#Collection--template--16970485661948__main').then(elem => {
        blockVisibility(
          '#Collection--template--16970485661948__main .product-grid-item:first-child',
          'exp_list_optim_vis_listbannecateg_block',
          'Block view',
          'Listing with all products Under Shop all Geeni products Banner with categories'
        )
      })
    }

    createItem(product) {
      return /* HTML */ ` <div
        class="product-grid-item grid__item one-quarter mobile--one-half soldout grid-item--tablet-even"
        data-product-block=""
        data-product-id=${product.id}
      >
        <div class="product-grid-item__inner">
          <div class="product-grid-item__image">
            <div class="product__media__outer">
              <div class="product__media__inner">
                <div
                  class="product__media__container product__media__container--landscape"
                  style="--aspect-ratio: 1.0005002501250626;"
                >
                  <a
                    class="product__media__holder"
                    href="/collections/all/products/${product.handle}"
                    aria-label="Geeni Look - 1080p Indoor Camera (2-Pack)"
                    ><div class="product__media__image lazy-image" style="background-image: none;">
                      <img
                        class="lazyload"
                        src="${product.images[0].src}"
                        data-srcset="${product.images[0].src}"
                        alt="Geeni Look - 1080p Indoor Camera (2-Pack)"
                        data-sizes="auto"
                        data-parent-fit="cover"
                        sizes="auto"
                        style="will-change: auto;"
                      /></div
                  ></a>
                  <div class="product__badge">
                    ${this.bestSellers.includes(product.id)
                      ? /* HTML */ `<div class="product__badge__item product__badge__item--custom">
                          <span>Best Seller</span>
                        </div>`
                      : ''}
                    ${product.variants[0].compare_at_price && product.variants[0].compare_at_price > 0
                      ? /* HTML */ `<div class="product__badge__item product__badge__item--saving">
                          <span
                            >Save
                            ${Math.floor(
                              ((product.variants[0].compare_at_price - product.variants[0].price) /
                                product.variants[0].compare_at_price) *
                                100
                            )}%</span
                          >
                        </div>`
                      : ''}
                  </div>
                  <div class="product-grid-item__quick-buy"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="product-grid-item__info product-grid-item__info--left">
            <a
              class="product-grid-item__title"
              href="/collections/all/products/${product.handle}"
              aria-label="Geeni Look - 1080p Indoor Camera (2-Pack)"
              data-grid-link=""
              >${product.title}</a
            >
            <product-alternates
              product-id=${product.id}
              url="/products/${product.handle}?sections=product-alternates"
              class="product-grid-item__alternates"
              ><div id="product-alternates-2451441188943" class="shopify-section">
                <div class="product-alternative-options">
                  <div class="product-alternative-options__title">Pack size</div>
                  <ul class="alternative-options"></ul>
                </div></div
            ></product-alternates>

            <a
              class="product-grid-item__price price"
              href="/collections/all/products/${product.handle}"
              data-grid-link=""
              ><span class="product-grid-item__price__new">From $${product.variants[0].price}</span>
            </a>
          </div>
          <div class="product-grid-item__action">
            ${product.variants[0].available
              ? /* HTML */ `<a class="product-grid-item__shop_now" href="/collections/all/products/${product.handle}"
                  >Shop now</a
                >`
              : /* HTML */ `<div class="product-grid-item__shop_now product-grid-item__shop_now--sold">Sold Out</div>`}
          </div>
        </div>
      </div>`
    }

    changeLinks() {
      $$el('a[href^="/collections"]').forEach(link => {
        link.href = link.href + '?filter.v.availability=1'
      })
    }

    changeMenu() {
      const mobileNavigation = $el('#MobileNav--shop-1')
      const mobileNavigationItems = $$el('.mobile-menu__item.mobile-menu__item--level-1')
      const bottomNav = $el('.mobile-nav.mobile-nav--bottom')
      const bottomNavHtml = /* HTML */ `
        <li class="mobile-menu__item">
          <a href="/account/login" class="mobile-navlink mobile-navlink--small mobile-navlink--flex"
            ><span>${icons.login}</span> Log In</a
          >
        </li>
        <li class="mobile-menu__item">
          <a href="/pages/download-geeni-app" class="mobile-navlink mobile-navlink--small mobile-navlink--flex"
            ><span>${icons.app}</span> Download App</a
          >
        </li>
        <li class="mobile-menu__item">
          <a href="http://support.mygeeni.com/" class="mobile-navlink mobile-navlink--small mobile-navlink--flex"
            ><span>${icons.phone}</span> Support</a
          >
        </li>
      `

      bottomNav.innerHTML = bottomNavHtml
      mobileNavigationItems[1].style.display = 'none'
      mobileNavigationItems[2].style.display = 'none'
      mobileNavigationItems[3].style.display = 'none'
      mobileNavigation.classList.add('is-expanded')
      $el('#nav-drawer').append(mobileNavigation)
      $el('.drawer__header').after(bottomNav)
      this.menuPopularProducts()

      waitForElement('.drawer.is-open').then(() => {
        blockVisibility('.drawer.is-open', 'exp_list_optim_vis_menu_page', 'Full page view', 'Menu')
      })

      waitForElement('.menu-popular-products').then(elem => {
        blockVisibility(
          '.menu-popular-products',
          'exp_list_optim_vis_menupopular_elem',
          'Element view',
          'Menu Popular Products'
        )

        elem.addEventListener('click', event => {
          const target = event.target
          const title = target
            .closest('.product-grid-item__inner')
            .querySelector('a.product-grid-item__title').textContent

          if (target.closest('a.product-grid-item__shop_now')) {
            pushDataLayer('exp_list_optim_but_menu_shopnow', `${title} - SHOP NOW`, 'Button', 'Menu Popular Products')
          }
          if (target.closest('.product__media__holder') || target.closest('.product-grid-item__title')) {
            pushDataLayer('exp_list_optim_ima_menu_pdp', `${title} - click PDP`, 'Image', 'Menu Popular Products')
          }
        })
      })

      document.addEventListener('click', e => {
        const target = e.target

        if (target.closest('a[href="/account/login"].mobile-navlink')) {
          pushDataLayer('exp_list_optim_but_menu_log', 'Log In', 'Button', 'Menu')
        }
        if (target.closest('a[href="/pages/download-geeni-app"].mobile-navlink')) {
          pushDataLayer('exp_list_optim_but_menu_downl', 'Download App', 'Button', 'Menu')
        }
        if (target.closest('a[href^="http://support.mygeeni.com/"].mobile-navlink')) {
          pushDataLayer('exp_list_optim_but_menu_suppor', 'Support', 'Button', 'Menu')
        }
        if (target.closest('.mobile-navlink--highlight')) {
          pushDataLayer('exp_list_optim_but_menu_sale', 'Holiday Sale', 'Button', 'Menu')
        }
        if (target.closest('.mobile-menu__item--level-2 > a')) {
          const text = target.closest('.mobile-menu__item--level-2 a').querySelector('span:first-of-type').textContent
          pushDataLayer('exp_list_optim_but_menu_header', `${text} - Click`, 'Button', 'Menu')
        }

        if (target.closest('.mobile-navlink--level-3')) {
          const text = target.textContent.trim()
          pushDataLayer('exp_list_optim_but_menu_subheader', `${text} - Click`, 'Button', 'Menu')
        }
      })
    }

    generateStars(rating) {
      let starsHtml = ''
      for (let i = 0; i < 5; i++) {
        if (i < rating) {
          // Add a filled star
          starsHtml += icons.fillStar
        } else {
          // Add an empty star
          starsHtml += icons.star
        }
      }
      return starsHtml
    }

    async menuPopularProducts() {
      const popularProducts = [
        {
          id: 4811210457167,
          rating: 4.6
        },
        {
          id: 8094794187004,
          rating: 4
        },
        {
          id: 4821841969231,
          rating: 4.8
        },
        {
          id: 4380150857807,
          rating: 4.4
        },
        {
          id: 2451441188943,
          rating: 4.5
        },
        {
          id: 4660038041679,
          rating: 4.8
        },
        {
          id: 4660117110863,
          rating: 4.4
        },
        {
          id: 4381990584399,
          rating: 4.8
        },
        {
          id: 8094251385084,
          rating: 3.6
        },
        {
          id: 4381955326031,
          rating: 4.1
        },
        {
          id: 4850423136335,
          rating: 4.5
        },
        {
          id: 7607582556412,
          rating: 5
        },
        {
          id: 4810374414415,
          rating: 4.9
        }
      ]

      const response = await this.getProducts(collections.allProducts)
      const products = response.filter(result => popularProducts.some(product => product.id === result.id))

      const popularProductsHtml = /* HTML */ `
        <div class="menu-popular-products">
          <div class="menu-popular-products__title">Popular Products</div>

          ${this.swiperHtml({ items: products, className: 'popular' })}
        </div>
      `

      $el('#MobileNav--shop-1').insertAdjacentHTML('beforeend', popularProductsHtml)

      $$el('.menu-popular-products product-alternates').forEach(item => {
        item.remove()
      })

      $$el('.menu-popular-products .product-grid-item').forEach(item => {
        const productId = item.dataset.productId
        const itemRating = popularProducts.filter(product => product.id === parseInt(productId))[0].rating
        const ratingHtml = /* HTML */ `<div class="product-grid-item__rating">
          <span>${this.generateStars(Math.round(itemRating))}</span> ${itemRating} stars
        </div>`
        item.querySelector('.product-grid-item__title').insertAdjacentHTML('afterend', ratingHtml)
      })
      new Swiper('.popular', swiperConfig)
    }

    subcategoryHandler(subcategories) {
      const currentUrl = window.location.pathname
      const subcategoriesHtml = /* HTML */ `
        <div class="sticky-filters-bar">
          <div class="sticky-filters subcategory">
            ${subcategories
              .map(subcategory => {
                return /* HTML */ `<a
                  href="${subcategory.link}"
                  class="subcategory__item ${subcategory.link.includes(currentUrl) ? 'subcategory__item--active' : ''}"
                >
                  <div class="sticky-filters__btn">
                    <img src="${subcategory.image}" alt="${subcategory.title}" />${subcategory.title}
                  </div>
                </a>`
              })
              .join('')}
          </div>
          <div class="sticky-filters__actions">
            <div class="collection__filters__switch">
              <label class="switch">
                <input type="checkbox" id="crs_in_stock_switch" checked />
                <span class="crs-slider round"></span>
              </label>
              <span class="collection__filters__switch__label">In Stock</span>
            </div>
          </div>
        </div>
      `
      $el('.collection__sticky-bar').insertAdjacentHTML('afterbegin', subcategoriesHtml)
      const filterToggleBtn = $el('.collection__filters__toggle')
      if (filterToggleBtn) {
        filterToggleBtn.insertAdjacentHTML('beforeend', '<span>Filter and sort</span>')
        $el('.sticky-filters__actions').prepend(filterToggleBtn)
      }

      $el('.sticky-filters__actions').append($el('.collection__sort-bar'))
      $el('.sticky-filters__actions').append($el('.collection__products-count'))
      const el = $el('.collection__sticky-bar')
      let showIsSticky = false
      let showIsNoSticky = false

      const filterStickyClickEvent = () => {
        pushDataLayer(
          'exp_list_optim_but_liststicsubcat_filt',
          'Filter & Sort',
          'Button',
          'Listing with category of products Head Sticky banner subcategories'
        )
      }
      const filterNoStickyClickEvent = () => {
        pushDataLayer(
          'exp_list_optim_but_listsubcateg_filt',
          'Filter & Sort',
          'Button',
          'Listing with category of products Banner subcategories'
        )
      }

      const inStockStickyClickEvent = event => {
        const switchStatus = event.target.checked ? 'ON' : 'OFF'
        pushDataLayer(
          `exp_list_optim_rad_liststicsubcat_${switchStatus.toLowerCase()}`,
          `In Stock ${switchStatus}`,
          'Radio button',
          'Listing with category of products Head Sticky banner subcategories'
        )
      }
      const inStockNoStickyClickEvent = event => {
        const switchStatus = event.target.checked ? 'ON' : 'OFF'
        pushDataLayer(
          `exp_list_optim_rad_listsubcateg_${switchStatus.toLowerCase()}`,
          `In Stock ${switchStatus}`,
          'Radio button',
          'Listing with category of products Banner subcategories'
        )
      }
      window.addEventListener('scroll', () => {
        const stickyTop = parseInt(window.getComputedStyle(el).top)
        const currentTop = el.getBoundingClientRect().top
        $el('.sticky-filters.subcategory').classList.toggle('isSticky', currentTop === stickyTop)
        const isSticky = $el('.sticky-filters.subcategory').classList.contains('isSticky')
        if (isSticky && !showIsSticky) {
          $el('.collection__filters__toggle').removeEventListener('click', filterNoStickyClickEvent)
          $el('#crs_in_stock_switch').removeEventListener('change', inStockNoStickyClickEvent)
          blockVisibility(
            '.subcategory.isSticky',
            'exp_list_optim_vis_liststicsubcat_elem',
            'Element view',
            'Listing with category of products Head Sticky banner subcategories'
          )

          $el('.collection__filters__toggle').addEventListener('click', filterStickyClickEvent)
          $el('#crs_in_stock_switch').addEventListener('change', inStockStickyClickEvent)

          showIsSticky = true
          showIsNoSticky = false
        }

        if (!isSticky && !showIsNoSticky) {
          $el('.collection__filters__toggle').removeEventListener('click', filterStickyClickEvent)
          $el('#crs_in_stock_switch').removeEventListener('change', inStockStickyClickEvent)
          $el('.collection__filters__toggle').addEventListener('click', filterNoStickyClickEvent)
          $el('#crs_in_stock_switch').addEventListener('change', inStockNoStickyClickEvent)
          showIsNoSticky = true
          showIsSticky = false
        }
      })

      observer.observe(el)

      this.handleFilters()

      waitForElement('.subcategory').then(() => {
        blockVisibility(
          '.subcategory',
          'exp_list_optim_vis_listsubcateg_elem',
          'Element view',
          'Listing with category of products Banner subcategories'
        )
      })

      $$el('.subcategory__item').forEach(item => {
        item.addEventListener('click', () => {
          const category = item.querySelector('.sticky-filters__btn').textContent.trim()
          pushDataLayer(
            'exp_list_optim_ima_listsubcateg_pdp',
            `${category} - click PDP`,
            'Icone',
            'Listing with category of products Banner subcategories'
          )
        })
      })

      waitForElement('.collection__products').then(elem => {
        elem.querySelectorAll('.product-grid-item').forEach(item => {
          item.addEventListener('click', event => {
            const title = item.querySelector('.product-grid-item__title').textContent
            pushDataLayer(
              'exp_list_optim_ima_listcateg_pdp',
              `${title} - click PDP`,
              'Image',
              'Listing with category of products'
            )
          })
        })
        blockVisibility(
          '.collection__products .product-grid-item:first-child',
          'exp_list_optim_vis_listcateg_block',
          'Block view',
          'Listing with category of products'
        )
      })
    }

    handleFilters(filters = []) {
      const params = new URLSearchParams(document.location.href)

      const activeAvaibility = params.get('filter.v.availability')
      const elem = document.querySelector('[data-collection-filters]')
      let isCustomFilter = false

      // Prevent open drawer when click on custom filter button
      const observer = new MutationObserver(mutationsList => {
        for (let mutation of mutationsList) {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'class' &&
            elem.classList.contains('collection__filters--visible') &&
            isCustomFilter
          ) {
            elem.classList.remove('collection__filters--visible')
          }
        }
      })

      observer.observe(elem, { attributes: true, attributeFilter: ['class'] })

      // Prevent mobile touch scroll lock when click on custom filter button
      const lockTouchObserver = new MutationObserver(mutationsList => {
        for (let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'data-scroll-locked') {
            if (document.documentElement.hasAttribute('data-scroll-locked')) {
              document.dispatchEvent(new CustomEvent('theme:scroll:unlock', { bubbles: true }))
            }
          }
        }
      })

      lockTouchObserver.observe(document.documentElement, { attributes: true })

      if (activeAvaibility === '0') {
        $el('#crs_in_stock_switch').checked = false
      }

      $el('#crs_in_stock_switch').addEventListener('change', event => {
        isCustomFilter = true
        $$el('input[name="filter.v.availability"]').forEach(input => {
          if (input.checked) {
            input.click()
          }
          if (event.target.checked) {
            if (input.id === 'filter-Availability-1') {
              input.click()
            }
          }
          if (!event.target.checked) {
            if (input.id === 'filter-Availability-2') {
              input.click()
            }
          }
        })
      })
      filters.length > 0 &&
        filters.forEach((filter, index) => {
          const button = document.getElementById(`crs_filter_btn_${index}`)
          button.addEventListener('click', event => {
            isCustomFilter = true

            $$el('.sticky-filters__btn').forEach(btn => {
              btn.classList.remove('sticky-filters__btn--active')
            })
            event.currentTarget.classList.add('sticky-filters__btn--active')
            $el('.collection__filters__reset').click()
            setTimeout(() => {
              $$el('input.filter__input').forEach(input => {
                if (filter.values && filter.values.includes(input.value)) {
                  input.click()
                }
              })
            }, 1000)
            document.body.classList.add('scrolable')
          })
        })

      $el('.collection__filters__toggle').addEventListener('click', () => {
        isCustomFilter = false
        $el('.collection__filters').classList.add('collection__filters--visible')
        document.body.classList.remove('scrolable')
      })
    }

    allCamerasCategory() {
      const currentUrl = window.location.pathname
      if (currentUrl.includes('products')) return
      const subcategories = [
        { title: 'All Cameras', link: '/collections/smart-security-cameras?filter.v.availability=1', image: '' },
        { title: 'Indoor', link: '/collections/indoor-cameras?filter.v.availability=1', image: '' },
        { title: 'Outdoor', link: '/collections/outdoor-cameras?filter.v.availability=1', image: '' },
        { title: 'PTZ Cameras', link: '/collections/pan-tilt-zoom-cameras?filter.v.availability=1', image: '' }
      ]

      if (
        currentUrl.includes('smart-security-cameras') ||
        currentUrl.includes('indoor-cameras') ||
        currentUrl.includes('outdoor-cameras') ||
        currentUrl.includes('pan-tilt-zoom-cameras')
      ) {
        this.subcategoryHandler(subcategories)
      }

      if (currentUrl.includes('smart-security-cameras')) {
        this.backNavigation({ selector: '.banner.section-padding', text: 'back', link: '/', position: 'afterbegin' })
      }
      if (
        currentUrl.includes('indoor-cameras') ||
        currentUrl.includes('outdoor-cameras') ||
        currentUrl.includes('pan-tilt-zoom-cameras')
      ) {
        this.backNavigation({
          selector: '.banner.section-padding',
          text: 'back to all Cameras',
          link: '/collections/smart-security-cameras?filter.v.availability=1',
          position: 'afterbegin'
        })
      }
    }

    lightingCategory() {
      const currentUrl = window.location.pathname
      if (currentUrl.includes('products')) return

      const subcategories = [
        { title: 'All Lighting', link: '/collections/lighting?filter.v.availability=1', image: '' },
        { title: 'Color Lights', link: '/collections/colored-lights?filter.v.availability=1', image: '' },
        { title: 'White Lights', link: '/collections/white-lights?filter.v.availability=1', image: '' },
        { title: 'Light Strips', link: '/collections/strip-lights?filter.v.availability=1', image: '' }
      ]

      if (
        currentUrl.includes('lighting') ||
        currentUrl.includes('colored-lights') ||
        currentUrl.includes('white-lights') ||
        currentUrl.includes('strip-lights')
      ) {
        this.subcategoryHandler(subcategories)
      }

      if (currentUrl.includes('lighting')) {
        this.backNavigation({ selector: '.banner.section-padding', text: 'back', link: '/', position: 'afterbegin' })
      }
      if (
        currentUrl.includes('colored-lights') ||
        currentUrl.includes('white-lights') ||
        currentUrl.includes('strip-lights')
      ) {
        this.backNavigation({
          selector: '.banner.section-padding',
          text: 'back to all Lighting',
          link: '/collections/lighting?filter.v.availability=1',
          position: 'afterbegin'
        })
      }
    }

    powerCategory() {
      const currentUrl = window.location.pathname
      if (currentUrl.includes('products')) return

      const subcategories = [
        { title: 'All Power', link: '/collections/power?filter.v.availability=1', image: '' },
        { title: 'Plugs', link: '/collections/plugs?filter.v.availability=1', image: '' },
        { title: 'Surge Protectors', link: '/collections/surge-protectors?filter.v.availability=1', image: '' },
        { title: 'Switches & Outlets', link: '/collections/switches-outlets?filter.v.availability=1', image: '' }
      ]

      if (
        currentUrl.includes('power') ||
        currentUrl.includes('plugs') ||
        currentUrl.includes('surge-protectors') ||
        currentUrl.includes('switches-outlets')
      ) {
        this.subcategoryHandler(subcategories)
      }

      if (currentUrl.includes('power')) {
        this.backNavigation({ selector: '.banner.section-padding', text: 'back', link: '/', position: 'afterbegin' })
      }

      if (
        currentUrl.includes('plugs') ||
        currentUrl.includes('surge-protectors') ||
        currentUrl.includes('switches-outlets')
      ) {
        this.backNavigation({
          selector: '.banner.section-padding',
          text: 'back to all Power',
          link: '/collections/power?filter.v.availability=1',
          position: 'afterbegin'
        })
      }
    }

    lifestyleHealthCategory() {
      const currentUrl = window.location.pathname
      if (currentUrl.includes('products')) return

      const subcategories = [
        { title: 'All Lifestyle & Health', link: '/collections/smart-appliances?filter.v.availability=1', image: '' },
        { title: 'Pet Supplies', link: '/collections/pet-supplies?filter.v.availability=1', image: '' }
      ]

      if (currentUrl.includes('smart-appliances') || currentUrl.includes('pet-supplies')) {
        this.subcategoryHandler(subcategories)
      }

      if (currentUrl.includes('smart-appliances')) {
        this.backNavigation({ selector: '.banner.section-padding', text: 'back', link: '/', position: 'afterbegin' })
      }
      if (currentUrl.includes('pet-supplies')) {
        this.backNavigation({
          selector: '.banner.section-padding',
          text: 'back to all Lifestyle & Health',
          link: '/collections/smart-appliances?filter.v.availability=1',
          position: 'afterbegin'
        })
      }
    }

    allGeeniProducts() {
      const allProductsHtml = /* HTML */ `
        <div class="crs_all_products_banner">
          <h3>Shop all Geeni products</h3>

          <div class="crs_all_products_banner__description">
            Putting the power of vibrant illumination at your fingertips.
          </div>
        </div>
      `
      $el('.shopify-section.collection-section').insertAdjacentHTML('afterbegin', allProductsHtml)
    }

    stickyFilters() {
      const filters = [
        { label: 'All', values: ['All'] },
        { label: 'Cameras', values: ['Indoor Cameras', 'Outdoor Cameras'] },
        { label: 'Power', values: ['Power'] },
        { label: 'Lighting', values: ['Lighting and Switches'] },
        { label: 'Lifestyle & Health', values: ['Pet Products', 'Sensors and Health'] }
      ]
      const params = new URLSearchParams(document.location.href)
      const activeFilter = params.get('filter.p.product_type')

      const stickyFiltersHtml = /* HTML */ `<div class="sticky-filters-bar">
        <div class="sticky-filters all-products-filters">
          ${filters
            .map((filter, i) => {
              return /* HTML */ `
                <button
                  id="crs_filter_btn_${i}"
                  href="/collections/all"
                  class="sticky-filters__btn ${filter.values.includes(activeFilter)
                    ? 'sticky-filters__btn--active'
                    : !activeFilter && i === 0
                    ? 'sticky-filters__btn--active'
                    : ''}"
                  data-values=${filter.values}
                >
                  ${filter.label}
                </button>
              `
            })
            .join('')}
        </div>
        <div class="sticky-filters__actions">
          <div class="collection__filters__switch">
            <label class="switch">
              <input type="checkbox" id="crs_in_stock_switch" checked />
              <span class="crs-slider round"></span>
            </label>
            <span class="collection__filters__switch__label">In Stock</span>
          </div>
        </div>
      </div>`

      const filterToggleBtn = $el('.collection__filters__toggle')

      $el('#CollectionStickyBar').insertAdjacentHTML('afterbegin', stickyFiltersHtml)
      filterToggleBtn.insertAdjacentHTML('beforeend', '<span>Filter and sort</span>')
      $el('.sticky-filters__actions').prepend(filterToggleBtn)
      $el('.sticky-filters__actions').append($el('.collection__sort-bar'))
      $el('.sticky-filters__actions').append($el('.collection__products-count'))
      this.handleFilters(filters)

      waitForElement('#CollectionStickyBar').then(elem => {
       
        let showIsSticky = false
        let showIsNoSticky = false

        const filterStickyClickEvent = () => {
          pushDataLayer(
            'exp_list_optim_but_liststickbann_filt',
            'Filter & Sort',
            'Button',
            'Listing with all products Head Sticky banner with categories'
          )
        }
        const filterNoStickyClickEvent = () => {
          pushDataLayer(
            'exp_list_optim_but_listbancateg_filt',
            'Filter & Sort',
            'Button',
            'Listing with all products Under Shop all Geeni products Banner with categories'
          )
        }

        const inStockStickyClickEvent = event => {
          const switchStatus = event.target.checked ? 'ON' : 'OFF'
          pushDataLayer(
            `exp_list_optim_rad_liststickbann_${switchStatus.toLowerCase()}`,
            `In Stock ${switchStatus}`,
            'Radio button',
            'Listing with category of products Head Sticky banner categories'
          )
        }
        const inStockNoStickyClickEvent = event => {
          const switchStatus = event.target.checked ? 'ON' : 'OFF'
          pushDataLayer(
            `exp_list_optim_rad_listbancateg_${switchStatus.toLowerCase()}`,
            `In Stock ${switchStatus}`,
            'Radio button',
            'Listing with all products Under Shop all Geeni products Banner with categories'
          )
        }

        const filterBtnsStickyEvent = event => {
          const target = event.target

          const filter = target.textContent.trim()
          pushDataLayer(
            'exp_list_optim_but_liststickbann_title',
            `${filter} - Click`,
            'Button',
            'Listing with all products Head Sticky banner with categories'
          )
        }

        const filterBtnsNoStickyEvent = event => {
          const target = event.target

          const filter = target.textContent.trim()
          pushDataLayer(
            'exp_list_optim_but_listbancateg_title',
            `${filter} - Click`,
            'Button',
            'Listing with all products Under Shop all Geeni products Banner with categories'
          )
        }
        window.addEventListener('scroll', () => {
          const stickyTop = parseInt(window.getComputedStyle(elem).top)
          const currentTop = elem.getBoundingClientRect().top
          const isSticky = currentTop === stickyTop
          if (isSticky && !showIsSticky) {
            $el('.collection__filters__toggle').removeEventListener('click', filterNoStickyClickEvent)
            $el('#crs_in_stock_switch').removeEventListener('change', inStockNoStickyClickEvent)
            blockVisibility(
              '.all-products-filters',
              'exp_list_optim_vis_liststickbann_elem',
              'Element view',
              'Listing with all products Head Sticky banner with categories'
            )

            $el('.collection__filters__toggle').addEventListener('click', filterStickyClickEvent)
            $el('#crs_in_stock_switch').addEventListener('change', inStockStickyClickEvent)
            $$el('.sticky-filters__btn').forEach(item => {
              item.removeEventListener('click', filterBtnsNoStickyEvent)
              item.addEventListener('click', filterBtnsStickyEvent)
            })
            showIsSticky = true
            showIsNoSticky = false
          }

          if (!isSticky && !showIsNoSticky) {
            $el('.collection__filters__toggle').removeEventListener('click', filterStickyClickEvent)
            $el('#crs_in_stock_switch').removeEventListener('change', inStockStickyClickEvent)

            $el('.collection__filters__toggle').addEventListener('click', filterNoStickyClickEvent)
            $el('#crs_in_stock_switch').addEventListener('change', inStockNoStickyClickEvent)
            $$el('.sticky-filters__btn').forEach(item => {
              item.removeEventListener('click', filterBtnsStickyEvent)
              item.addEventListener('click', filterBtnsNoStickyEvent)
            })
            showIsNoSticky = true
            showIsSticky = false
          }
        })
      })
    }

    backNavigation({ selector, link, text, position = 'afterend' }) {
      const backNavigationHtml = /* HTML */ `
        <div class="back-navigation">
          <a href=${link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M11.0004 14C11.1399 14 11.2795 13.9467 11.386 13.8402C11.5992 13.627 11.5992 13.2819 11.386 13.0689L6.31713 7.99999L11.386 2.93107C11.5992 2.71794 11.5992 2.3728 11.386 2.1598C11.1729 1.9468 10.8278 1.94666 10.6148 2.1598L5.16022 7.61435C4.94708 7.82749 4.94708 8.17263 5.16022 8.38563L10.6148 13.8402C10.7213 13.9467 10.8609 14 11.0004 14Z"
                fill="black"
              />
            </svg>

            ${text}
          </a>
        </div>
      `
      waitForElement(selector).then(elem => {
        elem.insertAdjacentHTML(position, backNavigationHtml)
        $el('.back-navigation a').addEventListener('click', () => {
          if (window.location.pathname === '/collections/all') {
            pushDataLayer('exp_list_optim_but_listallprodu_back', 'Back', 'Button', 'Listing with all products')
          }
          if (window.location.pathname.includes('collections') && !window.location.pathname.includes('all')) {
            if (text.includes('back to all')) {
              pushDataLayer(
                'exp_list_optim_but_listsubcateg_back',
                'Back',
                'Button',
                'Listing with category of products Subcategories'
              )
            } else {
              pushDataLayer('exp_list_optim_but_listcateg_back', 'Back', 'Button', 'Listing with category of products')
            }
          }
        })
      })
    }

    async getBestSellers() {
      const products = await this.getProducts(collections.bestSellers)
      this.bestSellers = products.map(item => item.id)
    }

    async camerasSection() {
      const products = await this.getProducts(collections.allCameras)
      const camerasSectionHtml = /* HTML */ `
        <section class="shopify-section collection-section cameras-section">
          <h2>Cameras</h2>
          ${this.swiperHtml({ items: products, className: 'swiper-cameras' })}
          <div class="crs_section_action">
            <a class="crs_section_action__link" href="/collections/smart-security-cameras">SHOP ALL CAMERAS</a>
          </div>
        </section>
      `
      const bannerSection = $el('section.banner')
      bannerSection.insertAdjacentHTML('afterend', camerasSectionHtml)
      new Swiper('.swiper-cameras', swiperConfig)

      blockVisibility(
        '.cameras-section .crs_section_action__link',
        'exp_list_optim_vis_listshopcamer_elem',
        'Element view',
        'Listing with all products Shop All Products Button SHOP ALL CAMERAS'
      )
      $el('.cameras-section .crs_section_action__link').addEventListener('click', () => {
        pushDataLayer(
          'exp_list_optim_but_listshoprodu_camer',
          'Shop all Cameras',
          'Button',
          'Listing with all products Shop All Products'
        )
      })
    }

    async powerSection() {
      const products = await this.getProducts(collections.powerSwitches)
      const powerSectionHtml = /* HTML */ `
        <section class="shopify-section collection-section power-section">
          <h2>Power</h2>
          ${this.swiperHtml({ items: products, className: 'swiper-power' })}
          <div class="crs_section_action">
            <a class="crs_section_action__link" href="/collections/power">SHOP ALL POWER</a>
          </div>
        </section>
      `

      waitForElement('section.cameras-section').then(elem => {
        elem.insertAdjacentHTML('afterend', powerSectionHtml)
        new Swiper('.swiper-power', swiperConfig)
        blockVisibility(
          '.power-section',
          'exp_list_optim_vis_listpowers_block',
          'Block view',
          'Listing with all products Powers'
        )
        blockVisibility(
          '.power-section .crs_section_action__link',
          'exp_list_optim_vis_listshopower_elem',
          'Element view',
          'Listing with all products Power Button SHOP ALL POWER'
        )
        $el('.power-section .crs_section_action__link').addEventListener('click', () => {
          pushDataLayer(
            'exp_list_optim_but_listpowers_power',
            'Shop all Power',
            'Button',
            'Listing with all products Powers'
          )
        })
      })
    }
    async lightingSection() {
      const products = await this.getProducts(collections.allLighting)
      const lightingSectionHtml = /* HTML */ `
        <section class="shopify-section collection-section lighting-section">
          <h2>Lighting</h2>
          ${this.swiperHtml({ items: products, className: 'swiper-lighting' })}
          <div class="crs_section_action">
            <a class="crs_section_action__link" href="/collections/lighting">SHOP ALL LIGHTING</a>
          </div>
        </section>
      `
      waitForElement('section.power-section').then(elem => {
        elem.insertAdjacentHTML('afterend', lightingSectionHtml)
        blockVisibility(
          '.lighting-section',
          'exp_list_optim_vis_listlighting_block',
          'Block view',
          'Listing with all products Lighting'
        )
        blockVisibility(
          '.lighting-section .crs_section_action__link',
          'exp_list_optim_vis_listshopligh_elem',
          'Element view',
          'Listing with all products Lighting Button SHOP ALL LIGHTING'
        )
        $el('.lighting-section .crs_section_action__link').addEventListener('click', () => {
          pushDataLayer(
            'exp_list_optim_but_listlighting_light',
            'Shop all Lighting',
            'Button',
            'Listing with all products Lighting'
          )
        })
        new Swiper('.swiper-lighting', swiperConfig)
      })
    }

    async lifestyleHealthSection() {
      const products = await this.getProducts(collections.lifestyleHealth)
      const lifestyleHealthSectionHtml = /* HTML */ `
        <section class="shopify-section collection-section lifestyle-section">
          <h2>Lifestyle & Health</h2>
          ${this.swiperHtml({ items: products, className: 'swiper-lifestyle-health' })}
          <div class="crs_section_action">
            <a class="crs_section_action__link" href="/collections/smart-appliances">SHOP ALL LIFESTYLE & HEALTH</a>
          </div>
        </section>
      `
      waitForElement('section.lighting-section').then(elem => {
        elem.insertAdjacentHTML('afterend', lifestyleHealthSectionHtml)
        new Swiper('.swiper-lifestyle-health', swiperConfig)
        blockVisibility(
          '.lifestyle-section',
          'exp_list_optim_vis_listlifeheal_block',
          'Block view',
          'Listing with all products Lifestyle & Health Button SHOP ALL LIFESTYLE & HEALTH'
        )
        blockVisibility(
          '.lifestyle-section .crs_section_action__link',
          'exp_list_optim_vis_listshopheal_elem',
          'Element view',
          'Listing with all products Lifestyle & Health Button SHOP ALL LIFESTYLE & HEALTH'
        )
        $el('.lifestyle-section .crs_section_action__link').addEventListener('click', () => {
          pushDataLayer(
            'exp_list_optim_but_listlifeheal_health',
            'Shop all Lifestyle & Health',
            'Button',
            'Listing with all products Lifestyle & Health'
          )
        })
      })
    }
    swiperHtml({ items = [], className = '' }) {
      return /* HTML */ `
        <div class="swiper ${className}">
          <div class="swiper-wrapper">
            ${items
              .map(product => {
                return /* HTML */ `<div class="swiper-slide">${this.createItem(product)}</div>`
              })
              .join('')}
          </div>
          <div class="swiper-scrollbar"></div>
          <div class="swiper-navigation">
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      `
    }
    async getProducts(collectionHandle) {
      try {
        const response = await fetch(
          `${this.siteUrl}/collections/${collectionHandle}/products.json?limit=200&sort_by=best-selling`
        )
        const data = await response.json()
        return data.products
      } catch (error) {
        console.error(error)
      }
    }
    initStyles() {
      const style = /* HTML */ `
        <style>
          .scrolable {
            overflow: auto !important;
          }
          .mobile-navlink--flex {
            display: flex !important;
            gap: 12px;
          }
          .mobile-nav__sub-sublist {
            border-left: 1px solid #000;
            margin-left: 50px;
          }
          .mobile-nav__sub-sublist a {
            padding-left: 16px !important;
          }
          .banner-inner {
            background: #fff;
            height: fit-content;
          }
          .mobile-navlink--flex span {
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .menu-popular-products {
            padding: 15px;
          }
          .menu-popular-products__title {
            color: var(--Black, #000);
            font-family: 'Avenir Next';
            font-size: 28px;
            font-weight: 500;
            line-height: 36px;
          }
          .menu-popular-products .product-grid-item {
            width: 100%;
          }
          .menu-popular-products .swiper-navigation {
            display: none;
          }
          .menu-popular-products .product-grid-item__shop_now {
            border-radius: 30px;
            border: 1px solid var(--Blue-dark-2, #023f88);
            background: #fff;
            color: var(--Blue-dark-2, #023f88);
            text-align: center;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 600;
            line-height: 24px;
          }
          .site-header {
            position: fixed;
            top: 0;
          }
          .section-header__title {
            font-size: 36px;
          }
          .back-navigation a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            color: #000;
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            margin-left: 16px;
          }
          .banner-content {
            padding: 20px 0 !important;
          }
          .two-fifty-height {
            height: fit-content !important;
            background: #fff;
          }
          .cameras-section,
          .power-section,
          .lighting-section,
          .lifestyle-section {
            padding: 24px 0 32px 16px;
          }
          :is(.cameras-section, .power-section, .lighting-section, .lifestyle-section) h2 {
            color: var(--Black, #000);
            font-family: 'Avenir Next';
            font-size: 28px;
            font-weight: 500;
            line-height: 36px;
          }
          :is(.cameras-section, .power-section, .lighting-section, .lifestyle-section) .product-grid-item {
            margin: 0;
          }
          .cameras-section {
            background-color: var(--Light-BG, #e8f8fe) !important;
          }
          .cameras-section .product__media__holder {
            filter: none !important;
          }
          .product-grid-item__alternates {
            min-height: 45px !important;
          }
          .product-grid-item__price__new {
            color: var(--Black, #000);
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
          }
          .product-grid-item__shop_now {
            display: block;
            margin-top: 16px;

            padding: 6px 24px;
            border-radius: 30px;
            background: #00b3f0;
            color: #fff;
            font-size: 14px;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            width: 100%;
            text-align: center;
          }
          .product-grid-item__rating {
            display: flex;
            width: 100%;
            gap: 8px;
            color: var(--Blue-dark-2, #023f88);
            font-family: 'Nunito Sans';
            font-size: 13px;
            font-weight: 400;
            line-height: 18px;
          }
          .product-grid-item__shop_now--sold {
            border-radius: 30px;
            background: #cdcdcd;
            text-transform: uppercase;
          }

          .collection__description {
            display: none;
          }
          .collection__sticky-bar {
            flex-direction: column;
            top: 92px;
            justify-content: space-between;
          }
          .sticky-filters-bar {
            padding-top: 8px;
            width: 100%;
          }
          .crs_all_products_banner {
            margin: 0 auto;
            font-family: 'Avenir Next';
            border-radius: 8px;
            background: var(--Light-BG, #e8f8fe);
            text-align: center;
            margin: 0 16px 32px;
            padding: 24px 20px;
          }
          .crs_all_products_banner h3 {
            color: var(--Blue-dark-2, #023f88);
            font-size: 24px;
            font-weight: 600;
            line-height: 32px;
          }

          .crs_all_products_banner__description {
            color: var(--Blue-dark-2, #023f88);
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
          }
          .sticky-filters__actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .collection__filters__toggle {
            width: fit-content !important;
            color: var(--Black, #000);
            gap: 8px;
          }
          .collection__filters__toggle span {
            font-weight: 500;
            font-size: 14px;
          }
          .sticky-filters {
            display: flex;
            flex-wrap: nowrap;
            overflow: hidden;
            overflow-x: auto;
            height: 35px;
            width: 100%;
            gap: 5px;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .sticky-filters::-webkit-scrollbar {
            display: none;
          }
          .sticky-filters__btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            border: 1px solid var(--Border, #d9d9d9);
            padding: 6px 12px;
            color: var(--Black, #000);
            font-family: 'Avenir Next';
            font-size: 13px;
            font-weight: 500;
            line-height: 20px;
            width: 100%;
            text-wrap: nowrap;
          }
          .sticky-filters__btn--active {
            background: var(--Blue, #00b3f0);
            color: #fff;
          }

          .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 24px;
          }
          .switch input {
            opacity: 0;
            width: 0;
            height: 0;
          }
          .crs-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 34px;
          }
          .crs-slider:before {
            position: absolute;
            content: '';
            height: 16px;
            width: 16px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 50%;
          }
          .switch input:checked + .crs-slider:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
          }
          .switch input:checked + .crs-slider {
            background-color: #2196f3;
          }

          .switch input:focus + .crs-slider {
            box-shadow: 0 0 1px #2196f3;
          }
          .swiper {
            --swiper-navigation-size: 16px;
            --swiper-scrollbar-drag-bg-color: #023f88;
          }
          .swiper-scrollbar {
            position: static !important;
            margin-top: 46px;
            display: none;
          }
          .swiper-slide {
            padding: 4px;
          }
          .swiper-navigation {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
            height: 24px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            position: static !important;
            color: #122231 !important;
            margin-top: 0 !important;
          }
          .swiper-pagination {
            position: static !important;
            display: inline-flex;
            width: fit-content !important;
          }
          .product-grid-item__action {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .crs_section_action {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
          }
          .crs_section_action__link {
            border-radius: 100px;
            background: var(--Blue-dark, #023f88);
            color: #fff;
            padding: 12px 40px;
            text-align: center;
            font-family: 'Avenir Next';
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0.8px;
            text-transform: uppercase;
          }
          .product-grid-item__title {
            height: 3em !important;
          }

          .subcategory {
            height: 128px;
            justify-content: flex-start;
            padding-left: 0;
          }
          .subcategory.isSticky {
            height: fit-content;
          }
          .subcategory.isSticky img {
            display: none;
          }
          .subcategory .sticky-filters__btn {
            height: 100%;
            border-radius: 8px;
            width: 105px;
            height: 128px;
          }
          .subcategory__item--active .sticky-filters__btn {
            border: 1px solid var(--Bliue-2, #00b0ee);
            background: #fff;
            box-shadow: 0px 8px 8px 0px rgba(123, 153, 163, 0.08);
          }
          .isSticky .sticky-filters__btn {
            width: fit-content;
            height: fit-content;
            border-radius: 4px;
          }
          .isSticky .subcategory__item--active .sticky-filters__btn {
            background: var(--Blue, #00b3f0);
            color: #fff !important;
            font-family: 'Avenir Next';
            font-size: 13px;
            font-weight: 500;
            line-height: 20px;
          }

          .subcategory__item_wrap {
            display: flex;
            flex-direction: column;
          }
          @media screen and (min-width: 1024px) {
            .collection__filters__switch {
              display: none;
            }
            .all-products-filters {
              display: none;
            }
            .swiper-scrollbar {
              display: block;
            }
            .collection__sticky-bar {
              margin-left: calc(240px + var(--gutter) / 2);
              align-items: flex-start;
            }
            .sticky-filters-bar {
              width: 100%;
            }
            .subcategory {
              gap: 32px;
              width: 100% !important;
              justify-content: flex-start;
            }
            .collection__sort-bar {
              margin-left: 0 !important;
            }
            .subcategory.isSticky {
              gap: 8px;
            }
            .back-navigation {
              display: none;
            }
          }
        </style>
      `
      document.head.insertAdjacentHTML('beforeend', style)
    }
  }
  new ListingsOptimization().init()
})()
