;(() => {
  console.log(
    '%c EXP: Exit popup (DEV: OS)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )
  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)
  const git = 'https://conversionratestore.github.io/projects/keenethics/'

  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval)
      clarity('set', 'exp_exi_inte_popup', 'variant_1')
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

  const checkScrollSpeed = (function (settings) {
    settings = settings || {}

    let lastPos
    let newPos
    let timer
    let delta,
      delay = settings.delay || 50

    function clear() {
      lastPos = null
      delta = 0
    }

    clear()

    return function () {
      newPos = window.scrollY
      if (lastPos != null) {
        delta = newPos - lastPos
      }
      lastPos = newPos
      clearTimeout(timer)
      timer = setTimeout(clear, delay)
      return delta
    }
  })()

  const icons = {
    logo: /* HTML */ `
      <svg width="120" height="17" viewBox="0 0 120 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.05588 16.1608L4.35991 10.8255L2.43447 12.6408V16.1608H0L0 0L2.43447 0V10.2499L7.74604 4.60472H10.4018L5.90912 9.45295L10.6453 16.1608H8.05588Z"
          fill="#12233D"
        />
        <path
          d="M16.2115 16.3822C15.3115 16.3822 14.4926 16.2272 13.7549 15.9173C13.0172 15.5926 12.3828 15.1572 11.8516 14.6111C11.3352 14.0651 10.9295 13.4304 10.6344 12.7073C10.354 11.9841 10.2139 11.2166 10.2139 10.4049C10.2139 9.59316 10.354 8.82571 10.6344 8.10253C10.9295 7.3646 11.3352 6.72259 11.8516 6.17652C12.3828 5.61569 13.0172 5.18031 13.7549 4.87037C14.4926 4.54568 15.3189 4.38334 16.2337 4.38334C17.1337 4.38334 17.9452 4.54568 18.6681 4.87037C19.4058 5.19507 20.0329 5.63045 20.5493 6.17652C21.0657 6.70783 21.4567 7.33508 21.7223 8.05826C22.0026 8.76667 22.1428 9.51199 22.1428 10.2942C22.1428 10.4713 22.1354 10.641 22.1206 10.8034C22.1059 10.951 22.0911 11.0764 22.0764 11.1797H12.8033C12.8475 11.6963 12.9656 12.1612 13.1574 12.5744C13.3639 12.9877 13.6221 13.3493 13.932 13.6592C14.2566 13.9544 14.6181 14.1831 15.0164 14.3455C15.4295 14.5078 15.8574 14.589 16.3001 14.589C16.6246 14.589 16.9419 14.5521 17.2517 14.4783C17.5763 14.3897 17.8714 14.2717 18.137 14.1241C18.4025 13.9617 18.6386 13.7699 18.8452 13.5485C19.0517 13.3271 19.214 13.0836 19.3321 12.8179L21.4124 13.4157C21.0141 14.2864 20.3501 15.0022 19.4206 15.5631C18.5058 16.1091 17.4361 16.3822 16.2115 16.3822ZM19.7304 9.49723C19.6862 9.01019 19.5608 8.56005 19.3542 8.14681C19.1624 7.73356 18.9116 7.38673 18.6017 7.10632C18.2919 6.81114 17.9304 6.58239 17.5173 6.42004C17.1042 6.25769 16.6689 6.17652 16.2115 6.17652C15.7541 6.17652 15.3189 6.25769 14.9058 6.42004C14.5074 6.58239 14.1533 6.81114 13.8435 7.10632C13.5336 7.38673 13.2828 7.73356 13.091 8.14681C12.8992 8.56005 12.7811 9.01019 12.7369 9.49723H19.7304Z"
          fill="#12233D"
        />
        <path
          d="M28.8204 16.3822C27.9204 16.3822 27.1016 16.2272 26.3638 15.9173C25.6261 15.5926 24.9917 15.1572 24.4605 14.6111C23.9441 14.0651 23.5384 13.4304 23.2433 12.7073C22.963 11.9841 22.8228 11.2166 22.8228 10.4049C22.8228 9.59316 22.963 8.82571 23.2433 8.10253C23.5384 7.3646 23.9441 6.72259 24.4605 6.17652C24.9917 5.61569 25.6261 5.18031 26.3638 4.87037C27.1016 4.54568 27.9278 4.38334 28.8426 4.38334C29.7426 4.38334 30.5541 4.54568 31.2771 4.87037C32.0148 5.19507 32.6418 5.63045 33.1582 6.17652C33.6746 6.70783 34.0656 7.33508 34.3312 8.05826C34.6115 8.76667 34.7517 9.51199 34.7517 10.2942C34.7517 10.4713 34.7443 10.641 34.7296 10.8034C34.7148 10.951 34.7001 11.0764 34.6853 11.1797H25.4122C25.4565 11.6963 25.5745 12.1612 25.7663 12.5744C25.9729 12.9877 26.2311 13.3493 26.5409 13.6592C26.8655 13.9544 27.227 14.1831 27.6253 14.3455C28.0385 14.5078 28.4663 14.589 28.909 14.589C29.2336 14.589 29.5508 14.5521 29.8606 14.4783C30.1852 14.3897 30.4803 14.2717 30.7459 14.1241C31.0115 13.9617 31.2475 13.7699 31.4541 13.5485C31.6607 13.3271 31.823 13.0836 31.941 12.8179L34.0214 13.4157C33.623 14.2864 32.959 15.0022 32.0295 15.5631C31.1148 16.1091 30.0451 16.3822 28.8204 16.3822ZM32.3394 9.49723C32.2951 9.01019 32.1697 8.56005 31.9631 8.14681C31.7713 7.73356 31.5205 7.38673 31.2107 7.10632C30.9008 6.81114 30.5393 6.58239 30.1262 6.42004C29.7131 6.25769 29.2778 6.17652 28.8204 6.17652C28.3631 6.17652 27.9278 6.25769 27.5147 6.42004C27.1163 6.58239 26.7622 6.81114 26.4524 7.10632C26.1425 7.38673 25.8917 7.73356 25.6999 8.14681C25.5081 8.56005 25.3901 9.01019 25.3458 9.49723H32.3394Z"
          fill="#12233D"
        />
        <path
          d="M46.5639 16.1608H44.1294V9.67434C44.1294 8.58219 43.9524 7.7926 43.5983 7.30556C43.2589 6.80377 42.7499 6.55287 42.0712 6.55287C41.7171 6.55287 41.363 6.61928 41.0089 6.75211C40.6548 6.88494 40.3228 7.0768 40.013 7.3277C39.7031 7.56384 39.4228 7.85163 39.172 8.19108C38.9359 8.51578 38.7515 8.87736 38.6187 9.27585V16.1608H36.1842V4.58258H38.3974V6.90708C38.84 6.12487 39.4818 5.51238 40.3228 5.06962C41.1638 4.6121 42.0933 4.38334 43.1114 4.38334C43.8048 4.38334 44.3729 4.50879 44.8155 4.75968C45.2581 5.01058 45.6049 5.35741 45.8557 5.80017C46.1213 6.22818 46.3057 6.72997 46.409 7.30556C46.5122 7.86639 46.5639 8.46412 46.5639 9.09875V16.1608Z"
          fill="#12233D"
        />
        <path
          d="M67.0289 16.3822C66.1289 16.3822 65.31 16.2272 64.5723 15.9173C63.8346 15.5926 63.2001 15.1572 62.669 14.6111C62.1526 14.0651 61.7468 13.4304 61.4517 12.7073C61.1714 11.9841 61.0312 11.2166 61.0312 10.4049C61.0312 9.59316 61.1714 8.82571 61.4517 8.10253C61.7468 7.3646 62.1526 6.72259 62.669 6.17652C63.2001 5.61569 63.8346 5.18031 64.5723 4.87037C65.31 4.54568 66.1363 4.38334 67.051 4.38334C67.951 4.38334 68.7625 4.54568 69.4855 4.87037C70.2232 5.19507 70.8503 5.63045 71.3667 6.17652C71.8831 6.70783 72.2741 7.33508 72.5397 8.05826C72.82 8.76667 72.9602 9.51199 72.9602 10.2942C72.9602 10.4713 72.9528 10.641 72.938 10.8034C72.9233 10.951 72.9085 11.0764 72.8938 11.1797H63.6206C63.6649 11.6963 63.7829 12.1612 63.9747 12.5744C64.1813 12.9877 64.4395 13.3493 64.7493 13.6592C65.0739 13.9544 65.4354 14.1831 65.8338 14.3455C66.2469 14.5078 66.6748 14.589 67.1174 14.589C67.442 14.589 67.7592 14.5521 68.0691 14.4783C68.3937 14.3897 68.6888 14.2717 68.9543 14.1241C69.2199 13.9617 69.456 13.7699 69.6625 13.5485C69.8691 13.3271 70.0314 13.0836 70.1494 12.8179L72.2298 13.4157C71.8314 14.2864 71.1675 15.0022 70.238 15.5631C69.3232 16.1091 68.2535 16.3822 67.0289 16.3822ZM70.5478 9.49723C70.5035 9.01019 70.3781 8.56005 70.1716 8.14681C69.9798 7.73356 69.7289 7.38673 69.4191 7.10632C69.1093 6.81114 68.7478 6.58239 68.3347 6.42004C67.9215 6.25769 67.4863 6.17652 67.0289 6.17652C66.5715 6.17652 66.1363 6.25769 65.7231 6.42004C65.3248 6.58239 64.9707 6.81114 64.6608 7.10632C64.351 7.38673 64.1002 7.73356 63.9083 8.14681C63.7165 8.56005 63.5985 9.01019 63.5542 9.49723H70.5478Z"
          fill="#12233D"
        />
        <path
          d="M80.7465 15.5631C80.4366 15.7106 80.0088 15.8804 79.4628 16.0722C78.9169 16.2493 78.3341 16.3379 77.7145 16.3379C77.3308 16.3379 76.9694 16.2862 76.63 16.1829C76.2907 16.0796 75.9882 15.9246 75.7226 15.718C75.4718 15.5114 75.2726 15.2457 75.1251 14.9211C74.9775 14.5816 74.9037 14.1757 74.9037 13.7035V6.46432H73.3767V4.58258H74.9037V0.774832H77.3382V4.58258H79.8612V6.46432H77.3382V12.9286C77.3677 13.3419 77.4931 13.6444 77.7145 13.8363C77.9505 14.0134 78.2382 14.1019 78.5776 14.1019C78.9169 14.1019 79.2415 14.0429 79.5514 13.9248C79.8612 13.8068 80.0899 13.7108 80.2374 13.637L80.7465 15.5631Z"
          fill="#12233D"
        />
        <path
          d="M92.259 16.1608H89.8246V9.67434C89.8246 8.61171 89.6327 7.8295 89.2491 7.3277C88.8803 6.81115 88.3417 6.55287 87.6335 6.55287C87.2942 6.55287 86.9548 6.61928 86.6155 6.75211C86.2761 6.88494 85.9515 7.0768 85.6417 7.3277C85.3466 7.56384 85.081 7.85163 84.845 8.19108C84.6089 8.51578 84.4318 8.87736 84.3138 9.27585V16.1608H81.8793V0L84.3138 0V6.90708C84.7564 6.11011 85.354 5.49024 86.1065 5.04748C86.8737 4.60472 87.7073 4.38334 88.6073 4.38334C89.3303 4.38334 89.9205 4.51617 90.3778 4.78182C90.85 5.03272 91.2262 5.37217 91.5066 5.80017C91.7869 6.22818 91.9787 6.72997 92.082 7.30556C92.2 7.86639 92.259 8.46412 92.259 9.09875V16.1608Z"
          fill="#12233D"
        />
        <path
          d="M94.5315 16.1608V4.58258H96.966V16.1608H94.5315ZM94.5315 2.67871V0L96.966 0V2.67871H94.5315Z"
          fill="#12233D"
        />
        <path
          d="M98.5857 10.3606C98.5857 9.54889 98.7259 8.78143 99.0062 8.05826C99.2865 7.33508 99.6849 6.70045 100.201 6.15438C100.732 5.60831 101.367 5.18031 102.105 4.87037C102.842 4.54568 103.669 4.38334 104.583 4.38334C105.778 4.38334 106.804 4.64899 107.66 5.18031C108.53 5.69686 109.179 6.39052 109.607 7.26129L107.239 8.01398C106.959 7.52694 106.583 7.1506 106.11 6.88494C105.638 6.60452 105.115 6.46432 104.539 6.46432C104.052 6.46432 103.595 6.56025 103.167 6.75211C102.754 6.94397 102.392 7.21701 102.082 7.57122C101.773 7.91067 101.529 8.31653 101.352 8.78881C101.175 9.26109 101.087 9.78503 101.087 10.3606C101.087 10.9214 101.175 11.4454 101.352 11.9324C101.544 12.4047 101.795 12.8179 102.105 13.1722C102.429 13.5264 102.798 13.8068 103.211 14.0134C103.639 14.2053 104.089 14.3012 104.561 14.3012C104.856 14.3012 105.151 14.2643 105.446 14.1905C105.742 14.1019 106.007 13.9839 106.243 13.8363C106.494 13.6887 106.708 13.519 106.885 13.3271C107.077 13.1353 107.217 12.9286 107.306 12.7073L109.696 13.4157C109.312 14.2864 108.67 15.0022 107.77 15.5631C106.87 16.1091 105.808 16.3822 104.583 16.3822C103.683 16.3822 102.864 16.2198 102.127 15.8951C101.389 15.5704 100.755 15.1351 100.223 14.589C99.707 14.0282 99.3013 13.3862 99.0062 12.663C98.7259 11.9398 98.5857 11.1723 98.5857 10.3606Z"
          fill="#12233D"
        />
        <path
          d="M115.352 16.3822C114.423 16.3822 113.493 16.2346 112.564 15.9394C111.649 15.6295 110.86 15.1941 110.196 14.6333L111.17 13.0836C111.863 13.5854 112.549 13.9691 113.228 14.2348C113.906 14.4857 114.6 14.6111 115.308 14.6111C116.031 14.6111 116.599 14.4709 117.012 14.1905C117.44 13.9101 117.654 13.5116 117.654 12.995C117.654 12.508 117.418 12.1538 116.946 11.9324C116.474 11.711 115.736 11.4675 114.733 11.2019C114.01 11.01 113.39 10.8255 112.874 10.6484C112.357 10.4713 111.937 10.2647 111.612 10.0285C111.288 9.79241 111.052 9.51937 110.904 9.20944C110.756 8.8995 110.683 8.52316 110.683 8.08039C110.683 7.49005 110.793 6.96611 111.015 6.50859C111.251 6.05107 111.568 5.66735 111.966 5.35741C112.379 5.03272 112.859 4.7892 113.405 4.62686C113.951 4.46451 114.541 4.38334 115.175 4.38334C116.046 4.38334 116.857 4.51617 117.61 4.78182C118.362 5.04748 119.034 5.43121 119.624 5.933L118.584 7.39411C117.507 6.53811 116.363 6.11011 115.153 6.11011C114.534 6.11011 114.01 6.24293 113.582 6.50859C113.169 6.75949 112.962 7.16535 112.962 7.72619C112.962 7.96232 113.006 8.16157 113.095 8.32391C113.184 8.48626 113.324 8.62647 113.516 8.74454C113.722 8.86261 113.98 8.9733 114.29 9.07661C114.615 9.16516 115.013 9.26847 115.485 9.38654C116.267 9.5784 116.939 9.77027 117.499 9.96213C118.075 10.154 118.547 10.3828 118.916 10.6484C119.284 10.8993 119.557 11.2019 119.734 11.5561C119.912 11.8955 120 12.3088 120 12.7958C120 13.9027 119.58 14.7808 118.739 15.4302C117.912 16.0649 116.784 16.3822 115.352 16.3822Z"
          fill="#12233D"
        />
        <ellipse cx="53.8532" cy="13.4678" rx="2.95087" ry="2.95174" fill="#D62C2C" />
      </svg>
    `,
    close: /* HTML */ `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.00001 1L19 19M19 1L1 19" stroke="#080F1A" stroke-width="1.5" stroke-linecap="round" />
    </svg>`,
    shield: /* HTML */ `<svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.4769 6.01568C18.4659 5.43732 18.4554 4.89096 18.4554 4.36239C18.4554 3.94829 18.1198 3.61258 17.7056 3.61258C14.4989 3.61258 12.0574 2.69101 10.0223 0.712309C9.7312 0.42918 9.26791 0.42928 8.97689 0.712309C6.942 2.69101 4.50091 3.61258 1.29442 3.61258C0.880322 3.61258 0.544606 3.94829 0.544606 4.36239C0.544606 4.89106 0.534209 5.43762 0.523112 6.01607C0.420338 11.3983 0.279574 18.7696 9.25402 21.8803C9.3336 21.9079 9.41657 21.9217 9.49955 21.9217C9.58253 21.9217 9.66561 21.9079 9.74509 21.8803C18.7202 18.7695 18.5797 11.398 18.4769 6.01568ZM9.49965 20.3762C1.80289 17.5802 1.91926 11.4552 2.02253 6.04467C2.02873 5.71995 2.03473 5.40523 2.03893 5.09671C5.04218 4.96994 7.44377 4.05987 9.49965 2.26892C11.5557 4.05987 13.9577 4.97004 16.9612 5.09671C16.9654 5.40513 16.9714 5.71965 16.9776 6.04417C17.0807 11.4549 17.197 17.5801 9.49965 20.3762Z"
        fill="#2969CC"
      />
      <path
        d="M12.0809 8.60598L8.46196 12.2248L6.91765 10.6805C6.62482 10.3877 6.15004 10.3877 5.85732 10.6805C5.56449 10.9734 5.56449 11.4481 5.85732 11.7409L7.93179 13.8154C8.07816 13.9617 8.27011 14.0349 8.46196 14.0349C8.65381 14.0349 8.84576 13.9617 8.99213 13.8154L13.1412 9.66642C13.4341 9.37359 13.4341 8.89881 13.1413 8.60608C12.8486 8.31326 12.3738 8.31316 12.0809 8.60598Z"
        fill="#2969CC"
      />
    </svg> `
  }

  function storeValue(key, value) {
    sessionStorage.setItem(key, value)
    let date = new Date()
    date.setTime(date.getTime() + 30 * 60 * 1000)
    let expires = '; expires=' + date.toUTCString()
    document.cookie = key + '=' + value + expires + '; path=/'
  }

  function getCookie(key) {
    let name = key + '='
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) == ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  function checkAndSync(key) {
    let sessionValue = sessionStorage.getItem(key)
    let cookieValue = getCookie(key)
    if (sessionValue && !cookieValue) {
      storeValue(key, sessionValue)
    } else if (!sessionValue && cookieValue) {
      sessionStorage.setItem(key, cookieValue)
    }
  }

  function getValue(key) {
    checkAndSync(key)
    let value = sessionStorage.getItem(key) || getCookie(key)
    return value
  }
  class Popup {
    constructor(id) {
      this.id = id
      this.popup = null
      this.closeBtn = null
    }

    show() {
      const isPopupShown = getValue(this.id) || false

      if (isPopupShown) {
        return
      }

      this.popup.showModal()
      storeValue(this.id, true)
      if (this.id === 'crs-tpopup') {
        storeValue('crs-sdpopup', true)
      }
      if (this.id === 'crs-sdpopup') {
        storeValue('crs-tpopup', true)
      }
    }

    close() {
      this.popup.close()
    }

    render(content) {
      const popupHTML = /* HTML */ `
        <dialog id="${this.id}">
          <div class="${this.id}__container">
            <button class="${this.id}__close" data-close>${icons.close}</button>
            ${content}
          </div>
        </dialog>
      `
      document.body.insertAdjacentHTML('beforeend', popupHTML)
      this.popup = $el(`#${this.id}`)
      this.closeBtn = $el(`#${this.id} [data-close]`)

      this.closeBtn.addEventListener('click', () => {
        this.popup.close()
      })

      this.popup.addEventListener('click', event => {
        // Check if the click was directly on the dialog
        if (event.target === this.popup) {
          this.popup.close()
        }

        if (event.target.closest('button') || event.target.closest('a')) {
          this.popup.close()
        }
      })
    }
  }

  const devices = {
    mobile: 'Mobile',
    desktop: 'Desktop'
  }

  const USER_ENGAGAMENT_WITH_PAGE = 'userEngagamentWithPage'
  const USER_SUBMIT_FORM = 'userSubmitForm'
  const USER_CONTACT_DATA = 'userContactData'

  class IndentPopup {
    constructor() {
      this.firstPopup = new Popup('crs-tpopup')
      this.secondPopup = new Popup('crs-blpopup')
      this.thirdPopup = new Popup('crs-sdpopup')
      this.device = screen.width <= 1100 ? devices.mobile : devices.desktop
      this.popups()
    }

    init() {
      this.triggers()
      if (window.location.href.includes('contacts')) {
        this.forms()
      }
    }

    isUserSubmitForm() {
      return getValue(USER_SUBMIT_FORM) || false
    }

    isUserEngagamentWithPage() {
      return getValue(USER_ENGAGAMENT_WITH_PAGE) || false
    }

    triggers() {
      const currentURL = window.location.href

      if (!currentURL.includes('contacts') && !currentURL.includes('estimate')) {
        if (this.device === devices.mobile) {
          const showPopup = () => {
            if (this.isUserSubmitForm()) return
            this.firstPopup.show()
          }
          const timer = setTimeout(showPopup, 20000)

          ;[('button', 'a')].forEach(tag => {
            $$el(tag).forEach(el => {
              el.addEventListener('click', () => {
                clearTimeout(timer)
              })
            })
          })

          document.addEventListener('scroll', () => {
            if (this.isUserSubmitForm()) return
            if ((checkScrollSpeed() >= 150 || checkScrollSpeed() <= -150) && this.isUserEngagamentWithPage()) {
              this.thirdPopup.show()
            }
          })
        }

        // save user engagament with page
        $$el('button').forEach(button => {
          button.addEventListener('click', () => {
            storeValue(USER_ENGAGAMENT_WITH_PAGE, true)
          })
        })
        $$el('a').forEach(link => {
          link.addEventListener('click', () => {
            storeValue(USER_ENGAGAMENT_WITH_PAGE, true)
          })
        })

        if (this.device === devices.desktop) {
          let timerOut = false
          const timer = setTimeout(() => {
            timerOut = true
          }, 20000)

          let stroredTimer = localStorage.getItem('timer')
          if (!stroredTimer) {
            localStorage.setItem('timer', new Date().getTime())
            stroredTimer = localStorage.getItem('timer')
          }
          document.addEventListener('mouseleave', event => {
            if (!event.toElement && !event.relatedTarget) {
              if (this.isUserSubmitForm()) return
              if (!this.isUserEngagamentWithPage() && timerOut) {
                this.firstPopup.show()
                clearInterval(timer)
              }
              const currentTime = new Date().getTime()
              const timeOnPage = currentTime - stroredTimer
              if (timeOnPage >= 20000 && this.isUserEngagamentWithPage()) {
                this.thirdPopup.show()
                localStorage.removeItem('timer')
              }
            }
          })
        }
      }
      if (
        (currentURL.includes('estimate') || currentURL.includes('contacts')) &&
        !currentURL.includes('contacts?download') &&
        !currentURL.includes('contacts?solutions')
      ) {
        if (this.isUserSubmitForm()) return

        if (this.device === devices.mobile) {
          const timer = setTimeout(showPopup, 20000)

          const showPopup = () => {
            if (this.isUserSubmitForm()) return
            this.secondPopup.show()
          }

          let secondTimer

          const resetSecondTimer = () => {
            clearTimeout(secondTimer)
            secondTimer = setTimeout(showPopup, 60000)
          }
          $$el('input').forEach(input => {
            input.addEventListener('focus', () => {
              clearTimeout(timer)
              resetSecondTimer()
            })
          })

          $$el('textarea').forEach(input => {
            input.addEventListener('focus', () => {
              clearTimeout(timer)
              resetSecondTimer()
            })
          })

          $$el('button').forEach(input => {
            input.addEventListener('click', () => {
              clearTimeout(timer)
            })
          })
        }
        if (this.device === devices.desktop) {
          document.addEventListener('mouseout', event => {
            if (!event.toElement && !event.relatedTarget) {
              if (this.isUserSubmitForm()) return
              this.secondPopup.show()
            }
          })
        }
      }
    }

    forms() {
      const formSubmit = (phoneData = null) => {
        const contactData = JSON.parse(getValue(USER_CONTACT_DATA))

        const nameInput = $el('input#user-name')
        const emailInput = $el('input#user-mail')
        const messageInput = $el('textarea#user-message')

        nameInput.value = contactData.firstname + ' ' + contactData.lastname
        nameInput.dispatchEvent(new Event('input'))

        emailInput.value = contactData.email
        emailInput.dispatchEvent(new Event('input'))

        let messageParts = []

        if (contactData?.appeal) {
          messageParts.push(`I need help with: ${contactData.appeal}`)
        }

        if (phoneData) {
          messageParts.push(`Phone: ${phoneData}`)
        }

        messageInput.value = messageParts.join('\n\n')
        messageInput.dispatchEvent(new Event('input'))
      }
      const search = window.location.search
      const firstForm = /* HTML */ `
        <style>
          section#contact-us .container > .row {
            display: none;
          }
          section.contact-nav {
            display: none;
          }
          .crs-tsform {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            max-width: 1110px;
            margin: 0 auto;
            gap: 16px 40px;
            font-family: Raleway;
            padding-inline: 40px;
          }
          .crs-tsform > * {
            font-family: inherit;
          }

          .crs-tsform__left {
            flex: 1;
            width: 100%;
            grid-column: 1 / 2;
          }

          .crs-tsform__title {
            font-size: 32px;
            font-weight: bold;
            line-height: 1.25;
            color: #12233d;
            grid-column: 1 / 2;
          }

          .crs-tsform__descr {
            font-size: 18px;
            font-weight: bold;
            color: #12233d;
          }
          .crs-tsform__lists {
            margin-top: 24px;
            display: flex;
            padding-inline: 24px;
            gap: 40px;
          }

          .crs-tsform__list {
            display: grid;
            gap: 8px;
            list-style: circle;
            & li::marker {
              color: #d62c2c;
            }
          }

          .crs-tsform__hero {
            display: flex;
            border-top: solid 1px #e3e3e3;
            border-bottom: solid 1px #e3e3e3;
            gap: 16px;
            padding-block: 24px;
            margin-top: 40px;

            & img {
              width: 120px;
              height: 120px;
            }

            & div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 6px;
            }

            & h3 {
              font-size: 24px;
              font-weight: bold;
              color: #12233d;
            }

            & p {
              font-size: 16px;
              font-weight: 500;
              color: #6f7a88;
            }
          }
          .crs-tsform__awards {
            display: flex;
            flex-direction: column;
            gap: 24px;
            margin-top: 32px;
            & ul {
              width: 100%;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 20px;
            }

            & li {
              width: 64px;
            }
          }
          .crs-tsform__right {
            flex: 1;
            width: 100%;
            height: fit-content;
            border-radius: 8px;
            background-color: #12233d;
            padding: 40px;
            grid-column: 2 / 3;
            grid-row: 1 / 3;
          }
          .crs-tsform__at {
            font-size: 12px;
            color: #dae4f2;
          }
          .crs-tsform__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            & :is(input, details) {
              padding: 16px 21px;
              height: 61px;
              border-radius: 10px;
              border: none;
            }

            .crs-select {
              position: relative;
            }
            & :is(summary, input, input::placeholder) {
              font-size: 16px;
              color: #6f7a88;
              font-family: inherit;
            }

            & summary {
              display: flex;
              align-items: center;
              height: 100%;
            }
            & details {
              width: 100%;
              background: #fff;
              cursor: pointer;
            }
            & details summary::marker {
              content: none;
            }
            & details summary::after {
              content: '';
              background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
              background-size: contain;
              width: 24px;
              height: 24px;
              position: absolute;
              top: 50%;
              right: 15px;
              transform: rotate(180deg) translateY(50%);
            }

            & details[open] {
              & summary::after {
                transform: rotate(0deg) translateY(-50%);
              }
              & :is(ul, label) {
                cursor: pointer;
              }
              & ul {
                position: absolute;
                top: 61px;
                border-radius: 8px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                left: 0;
                margin-top: 10px;
                display: grid;
                gap: 8px;
                background: #fff;
                width: 100%;
                overflow: hidden;
                z-index: 100;
              }
              & li label {
                display: block;
                padding: 20px;
                &:hover {
                  background-color: #f4f5f7;
                }
              }

              & input {
                position: absolute;
                left: 0;
                opacity: 0;
              }
            }
          }
          label:has(.placeholder) {
            position: relative;
            & .placeholder {
              position: absolute;
              top: 50%;
              left: 21px;
              transform: translateY(-50%);
              font-size: 16px;
              color: #6f7a88;
            }
            & input {
              width: 100%;
            }
            & input + .placeholder {
              display: none;
            }
            & input:placeholder-shown + .placeholder {
              display: block;
            }
            & input[required] + .placeholder::after {
              content: '*';
              color: #d62c2c;
            }
          }
          .crs-tsform__actions {
            margin-top: 32px;
            & button {
              padding: 12px 20px;
              border-radius: 8px;
              background-color: #d62c2c;
              border: none;
              width: 100%;
              font-size: 16px;
              font-weight: 600;
              text-align: center;
              color: #fff;
              text-transform: uppercase;
              cursor: pointer;
            }
          }
          .crs-tsform__privacy {
            margin-top: 24px;
            font-size: 14px;
            color: #dae4f2;
            & a {
              color: inherit;
            }
          }
          .crs-tsform__privacy-descr {
            margin-top: 8px;
            display: flex;
            gap: 8px;
          }
          @media (max-width: 768px) {
            .crs-tsform {
              grid-template-columns: 1fr;
              max-width: 100%;
              padding-inline: 0;
            }
            .crs-tsform__title {
              grid-column: 1 / 2;
              grid-row: 1 / 2;
              max-width: 300px;
              font-size: 32px;
            }
            .crs-tsform__left {
              grid-column: 1 / 2;
              grid-row: 3 / 4;
            }
            .crs-tsform__right {
              grid-column: 1 / 2;
              grid-row: 2 / 3;
            }
            .crs-tsform__lists {
              flex-direction: column;
              margin-top: 16px;
              gap: 8px;
            }
            .crs-tsform__hero {
              & img {
                width: 64px;
                height: 64px;
              }
            }
          }
        </style>
        <div class="crs-tsform">
          <h2 class="crs-tsform__title">
            Tech Solutions<br />
            for Next-Level Business Growth
          </h2>
          <div class="crs-tsform__left">
            <p class="crs-tsform__descr">Contact us to learn about our solutions:</p>
            <div class="crs-tsform__lists">
              <ul class="crs-tsform__list">
                <li>General inquiry</li>
                <li>Price quote</li>
              </ul>
              <ul class="crs-tsform__list">
                <li>Project evaluation</li>
                <li>Questions on tools we use</li>
              </ul>
            </div>
            <div class="crs-tsform__hero">
              <img src="https://keenethics.com/wp-content/uploads/2023/10/Daria-Hlavcehva.webp" alt="Daria Hlavcheva" />
              <div>
                <h3>Daria Hlavcheva</h3>
                <p>Head of Partner Engagement</p>
              </div>
            </div>
            <div class="crs-tsform__awards">
              <ul>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/Aciety.svg"
                    alt="Aciety Nodejs Development top-10 2023"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardGDPR.svg"
                    alt="GDPR"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardBest_Software_Developments_company_in_Education.svg"
                    alt="Best Software Development Company in Education"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardClutch_2023.svg"
                    alt="Clutch Top Software Developers Munich 2023"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardExpertise.com_2023.svg"
                    alt="Expertise.com Best Web Developers in New York City 2023"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardAciety_React_Development.svg"
                    alt="Aciety React Development top-10 2023"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardGoodFirms.svg"
                    alt="GoodFirms Best Company to Work With"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardAmplifier.svg"
                    alt="Amplifyre"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>

                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardTOP_10_Best_web_development.svg"
                    alt="Top 10 Best Web Development"
                    width="64"
                    height="64"
                    loading="lazy"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardSelectFirms_TOP_website_development_company.svg"
                    alt="Top website development company"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img
                    src="https://keenethics.com/wp-content/uploads/2023/08/AwardMost_reviewed.svg"
                    alt="Most reviewed social media app agencies"
                    width="64"
                    height="64"
                    loading="lazy"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="crs-tsform__right">
            <form class="crs-tsform__form" action="">
              <div class="crs-tsform__at">Fields marked with * are mandatory</div>
              <div class="crs-select">
                <details>
                  <summary>I need help with</summary>
                  <ul>
                    <li>
                      <label
                        ><input type="radio" name="appeal" value="Bringing my vision to life" />Bringing my vision to
                        life</label
                      >
                    </li>
                    <li>
                      <label
                        ><input type="radio" name="appeal" value="Optimizing my business" />Optimizing my
                        business</label
                      >
                    </li>
                    <li>
                      <label
                        ><input type="radio" name="appeal" value="Scaling up for growth" />Scaling up for growth</label
                      >
                    </li>
                    <li>
                      <label><input type="radio" name="appeal" value="General inquiry" />General inquiry</label>
                    </li>
                    <li>
                      <label><input type="radio" name="appeal" value="Other" />Other</label>
                    </li>
                  </ul>
                </details>
              </div>
              <label>
                <input type="text" name="firstname" placeholder="" required />
                <span class="placeholder">First Name</span>
              </label>
              <label>
                <input type="text" name="lastname" placeholder="" />
                <span class="placeholder">Last Name</span>
              </label>
              <label>
                <input type="email" name="email" placeholder="" required />
                <span class="placeholder"> Business Email</span>
              </label>
              <div class="crs-tsform__actions">
                <button type="submit">Contact US</button>
                <div class="crs-tsform__privacy">
                  <div class="crs-tsform__privacy-link">
                    By submitting, I agree to Keenethics’ <a href="/privacy-policy">Privacy Policy</a>
                  </div>
                  <div class="crs-tsform__privacy-descr">
                    <span>${icons.shield}</span>
                    <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      `
      if (search === '?solutions') {
        $el('section#contact-us .container').insertAdjacentHTML('afterbegin', firstForm)

        $el('.crs-select details').addEventListener('click', event => {
          const details = event.currentTarget
          const summary = details.querySelector('summary')

          if (event.target.closest('li') && details.hasAttribute('open')) {
            const text = event.target.textContent
            summary.textContent = text
            details.removeAttribute('open')
          }
        })

        document.addEventListener('click', event => {
          if (!event.target.closest('.crs-select')) {
            $el('.crs-select details').removeAttribute('open')
          }
        })

        $el('.crs-tsform__form').addEventListener('submit', event => {
          event.preventDefault()
          const form = event.currentTarget
          const formData = new FormData(form)

          const data = Object.fromEntries(formData.entries())

          if (!data.firstname || !data.email) {
            return
          }

          // document.cookie = `${USER_SUBMIT_FORM}=true`
          storeValue(USER_SUBMIT_FORM, true)
          storeValue(USER_CONTACT_DATA, JSON.stringify(data))
          location.href = `${location.origin}/${location.pathname}?success`
        })

        blockVisibility(
          '.crs-tsform__form',
          'exp_exi_inte_popup_vis_web1grow_block',
          'Block view',
          'Web form 1 Tech Solutions for Next-Level Business Growth'
        )
        $el('.crs-tsform details').addEventListener('click', () => {
          pushDataLayer(
            'exp_exi_inte_popup_drop_web1grow_help',
            'I need help with',
            'Dropdown',
            'Web form 1 Tech Solutions for Next-Level Business Growth'
          )
        })
        $el('.crs-tsform__form input[name="firstname"]').addEventListener('change', () => {
          pushDataLayer(
            'exp_exi_inte_popup_inp_web1grow_firs',
            'First Name',
            'Input',
            'Web form 1 Tech Solutions for Next-Level Business Growth'
          )
        })
        $el('.crs-tsform__form input[name="email"]').addEventListener('change', () => {
          pushDataLayer(
            'exp_exi_inte_popup_inp_web1grow_emai',
            'Business Email',
            'Input',
            'Web form 1 Tech Solutions for Next-Level Business Growth'
          )
        })

        $el('.crs-tsform__form button[type="submit"]').addEventListener('click', event => {
          pushDataLayer(
            'exp_exi_inte_popup_but_web1grow_cont',
            'Contact US',
            'Button',
            'Web form 1 Tech Solutions for Next-Level Business Growth'
          )
        })
      }

      const secondForm = /* HTML */ `
        <style>
          section#contact-us .container > .row {
            display: none;
          }
          section.contact-nav {
            display: none;
          }
          .crs-auform {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            max-width: 1110px;
            margin: 0 auto;
            gap: 0 40px;
            font-family: Raleway;
            padding-inline: 40px;
          }
          .crs-auform > * {
            font-family: inherit;
          }
          .crs-auform__title,
          .crs-auform__title--mobile {
            font-size: 54px;
            font-weight: 800;
            color: #12233d;
          }
          .crs-auform__title--mobile {
            display: none;
          }

          .crs-auform__left {
            width: 100%;
            grid-column: 1 / 2;
            grid-row: 1 / 3;
          }
          .crs-auform__descr {
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: normal;
            text-align: left;
            color: #12233d;
            & span {
              font-weight: bold;
            }
            &:first-of-type {
              margin-top: 32px;
            }
            &:last-of-type {
              margin-top: 24px;
            }
          }
          .crs-auform__lists {
            margin-top: 24px;
            display: flex;
            padding-inline: 24px;
            gap: 40px;
          }

          .crs-auform__list {
            display: grid;
            gap: 16px;
            list-style: circle;
            & li::marker {
              color: #d62c2c;
            }
          }
          .crs-auform__right {
            flex: 1;
            width: 100%;
            border-radius: 8px;
            background-color: #12233d;
            padding: 40px;
            grid-column: 2 / 3;
            grid-row: 1 / 3;
            &:has(.crs-auform__right-img:not([data-action='download-step-2'])) {
              background-color: transparent;
              padding: 0;
            }
            .crs-auform__right-img {
              overflow: hidden;
              width: auto;
              height: 100%;
              background-image: url('${git}/img/h-woman.png');
              background-position: right;
              border-radius: 8px;
            }
          }
          .crs-auform__at {
            font-size: 12px;
            color: #dae4f2;
          }
          .crs-auform__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            & :is(input, summary) {
              padding: 16px 21px;
              border-radius: 10px;
              border: none;
            }
            & input[required]::after {
              content: '*';
              color: #d62c2c;
              position: absolute;
              right: 0;
            }
            .crs-select {
              position: relative;
            }
            & :is(summary, input, input::placeholder) {
              font-size: 16px;
              color: #6f7a88;
              font-family: inherit;
            }
            & details {
              width: 100%;
              border-radius: 10px;

              background: #fff;
              cursor: pointer;
            }
            & details summary::marker {
              content: none;
            }
            & details summary::after {
              content: '';
              background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%236F7A88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
              background-size: contain;
              width: 24px;
              height: 24px;
              position: absolute;
              top: 15px;
              right: 15px;
              transform: rotate(180deg);
            }
            & details[open] {
              z-index: 1000;
              & :is(ul, label) {
                cursor: pointer;
              }
              & ul {
                position: absolute;
                top: 61px;
                border-radius: 8px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                left: 0;
                margin-top: 10px;
                display: grid;
                gap: 8px;
                background: #fff;
                width: 100%;
                overflow: hidden;
                z-index: 100;
              }
              & li label {
                display: block;
                padding: 20px;
                &:hover {
                  background-color: #f4f5f7;
                }
              }

              & input {
                position: absolute;
                left: 0;
                opacity: 0;
              }
            }
          }
          .crs-auform__actions {
            position: relative;
            margin-top: 32px;
            & button {
              padding: 12px 20px;
              border-radius: 8px;
              background-color: #d62c2c;
              border: none;
              width: 100%;
              font-size: 16px;
              font-weight: 600;
              text-align: center;
              color: #fff;
              text-transform: uppercase;
              cursor: pointer;
            }
          }
          .crs-auform__privacy {
            font-size: 14px;
            margin-top: 24px;
            color: #dae4f2;
            & * {
              font-size: inherit;
            }
            & a {
              color: inherit;
            }
          }
          .crs-auform__privacy-descr {
            margin-top: 8px;
            display: flex;
            gap: 8px;
          }
          .crs-auform__download {
            display: none;
          }
          @media (max-width: 768px) {
            .crs-auform {
              grid-template-columns: 1fr;
              grid-template-rows: auto;
              max-width: 100%;
              gap: 16px;
              padding: 0;
            }
            .crs-auform__title {
              display: none;
            }
            .crs-auform__title--mobile {
              display: block;
              grid-column: 1 / 2;
              grid-row: 1 / 2;
              font-size: 32px;
            }
            .crs-auform__right {
              display: flex;
              justify-content: center;
            }
            .crs-auform__right .crs-auform__right-img {
              max-width: 345px;
              width: 100%;
              height: 200px;
              object-fit: cover;
              background-repeat: no-repeat;
              background-position: center;
              object-fit: cover;
              border-radius: 8px;
              background-image: url('${git}/img/h-woman-mob.png');
            }
            .crs-auform[data-action='download-step-2'] .crs-auform__download {
              display: block;
              grid-row: 2 / 3;
              & span {
                font-weight: bold;
              }
            }
            .crs-auform__left {
              grid-column: 1 / 2;
              grid-row: 4 / 5;
              display: flex;
              flex-direction: column;
              & .crs-auform__actions {
                order: 2;
              }
              & .crs-auform__descr {
                margin: 0;
              }
              & .crs-auform__descr:last-of-type {
                margin-top: 24px;
                order: 3;
              }
              .crs-auform[data-action='download-step-2'] & .crs-auform__descr:last-of-type {
                order: 2;
              }
              & .crs-auform__lists {
                order: 3;
              }
            }
            .crs-auform[data-action='download-step-2'] .crs-auform__desc {
              margin: 0;
            }
            .crs-auform[data-action='download-step-2'] .crs-auform__descr:first-of-type {
              display: none;
            }
            .crs-auform[data-action='download-step-2'] .crs-auform__actions {
              margin: 0;
            }
            .crs-auform__right {
              grid-column: 1 / 2;
              grid-row: 3 / 4;
            }
          }
        </style>
        <div class="crs-auform">
          <h2 class="crs-auform__title--mobile">
            Get Our Free <br />
            UX Audit Guide
          </h2>
          <p class="crs-auform__download">
            Download our free report to find out how you can <span>launch your projects up to 40% faster</span>.
          </p>
          <div class="crs-auform__left">
            <h2 class="crs-auform__title">
              Get Our Free <br />
              UX Audit Guide
            </h2>
            <p class="crs-auform__descr">
              Download our free report to find out how you can <span>launch your projects up to 40% faster</span>.
            </p>
            <p class="crs-auform__descr"><span>In this report you will discover:</span>.</p>
            <div class="crs-auform__lists">
              <ul class="crs-auform__list">
                <li>The essentials of UX audits, their benefits, and our methodology.</li>
                <li>Success stories from our detailed UX case studies.</li>
                <li>Insights into our expert team and our comprehensive design services.</li>
              </ul>
            </div>
            <div class="crs-auform__actions">
              <button data-action="download-step-1">Dowload free guide</button>
            </div>
          </div>

          <div class="crs-auform__right">
            <div class="crs-auform__right-img"></div>
            <form class="crs-auform__form" action="" style="display:none">
              <div class="crs-auform__at">Fields marked with * are mandatory</div>

              <input type="text" name="firstname" placeholder="First Name*" required />
              <input type="text" name="lastname" placeholder="Last Name" />
              <input type="email" name="email" placeholder="Business Email*" required />
              <div class="crs-select">
                <details>
                  <summary>How about request a consultation call?</summary>
                  <ul>
                    <li>
                      <label><input type="radio" name="call" value="Yes" />Yes</label>
                    </li>
                    <li>
                      <label><input type="radio" name="call" value="No" />No</label>
                    </li>
                  </ul>
                </details>
              </div>
              <div class="crs-auform__actions">
                <button type="submit">Download Now</button>
                <div class="crs-auform__privacy">
                  <div class="crs-auform__privacy-link">
                    By submitting, I agree to Keenethics’ <a href="/privacy-policy">Privacy Policy</a>
                  </div>
                  <div class="crs-auform__privacy-descr">
                    <span>${icons.shield}</span>
                    <p>Keenethics ensures your privacy and keeps your personal information secure.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      `

      if (search === '?download') {
        $el('section#contact-us .container').insertAdjacentHTML('afterbegin', secondForm)

        $el('button[data-action="download-step-1"]').addEventListener('click', () => {
          $el('.crs-auform__form').style.display = 'flex'
          $el('button[data-action="download-step-1"]').style.display = 'none'
          $el('.crs-auform__right-img').style.display = 'none'
          $el('.crs-auform').dataset.action = 'download-step-2'
          $el('.crs-auform__right-img').dataset.action = 'download-step-2'
        })

        $el('.crs-auform__form').addEventListener('submit', event => {
          event.preventDefault()
          const form = event.currentTarget
          const formData = new FormData(form)

          const data = Object.fromEntries(formData.entries())
          // document.cookie = `${USER_SUBMIT_FORM}=true`
          storeValue(USER_SUBMIT_FORM, true)
          storeValue(USER_CONTACT_DATA, JSON.stringify(data))

          fetch(`${git}/files/uxaudit_keenethics.pdf`, {
            method: 'GET'
          })
            .then(resp => resp.blob())
            .then(blob => {
              const url = window.URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.style.display = 'none'
              a.href = url
              a.target = '_blank'
              a.download = 'uxaudit_keenethics'
              document.body.appendChild(a)
              a.click()
              window.URL.revokeObjectURL(url)
              if (data.call === 'Yes') {
                location.href = `${location.origin}/${location.pathname}?success`
                return
              }
              formSubmit()
              $el('form.contact-us__form').querySelector('button').click()
            })
        })

        $el('.crs-select details').addEventListener('click', event => {
          const details = event.currentTarget
          const summary = details.querySelector('summary')

          if (event.target.closest('li') && details.hasAttribute('open')) {
            const text = event.target.textContent
            summary.textContent = text
            details.removeAttribute('open')
          }
        })

        document.addEventListener('click', event => {
          if (!event.target.closest('.crs-select')) {
            $el('.crs-select details').removeAttribute('open')
          }
        })
        blockVisibility(
          '.crs-auform',
          'exp_exi_inte_popup_vis_web2audi_block',
          'Block view',
          'Web form 2 Get Our Free UX Audit Guide'
        )

        $el('button[data-action="download-step-1"]').addEventListener('click', event => {
          pushDataLayer(
            'exp_exi_inte_popup_but_web2audi_dowl',
            'Dowload free guide',
            'Button',
            'Web form 2 Get Our Free UX Audit Guide'
          )
        })
        blockVisibility(
          '.crs-auform__form',
          'exp_exi_inte_popup_vis_web22audi_block',
          'Block view',
          'Web form 2, state 2 Get Our Free UX Audit Guide'
        )

        $el('.crs-auform__form details').addEventListener('click', () => {
          pushDataLayer(
            'exp_exi_inte_popup_but_web22audi_call',
            'How about request a consultation call?',
            'Button',
            'Web form 2, state 2 Get Our Free UX Audit Guide'
          )
        })

        $el('.crs-auform__form input[name="firstname"]').addEventListener('change', () => {
          pushDataLayer(
            'exp_exi_inte_popup_inp_web22audi_firs',
            'First Name',
            'Input',
            'Web form 2, state 2 Get Our Free UX Audit Guide'
          )
        })

        $el('.crs-auform__form input[name="email"]').addEventListener('change', () => {
          pushDataLayer(
            'exp_exi_inte_popup_inp_web22audi_ema',
            'Business Email',
            'Input',
            'Web form 2, state 2 Get Our Free UX Audit Guide'
          )
        })

        $el('.crs-auform__form button[type="submit"]').addEventListener('click', () => {
          pushDataLayer(
            'exp_exi_inte_popup_but_web22audi_down',
            'Download now',
            'Button',
            'Web form 2, state 2 Get Our Free UX Audit Guide'
          )
        })
      }

      const hash = window.location.hash
      const thanksForm = /* HTML */ `
        <style>
          .form-row div:first-child {
            flex: 0 0 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
          }
          .form-row div:last-child {
            display: none !important;
          }
          .form-row form.form > * {
            display: none;
          }
          .form-row form.form > button {
            background-color: #2969cc;
            border: none;
            width: 380px;
          }
          section.contact-nav {
            display: none;
          }
          .thanks-section {
            position: relative;
            & h1 {
              margin-bottom: 24px;
              text-transform: none;
              color: #12233d;
              font-size: 54px;
              font-weight: 800;
              line-height: 64px;
              text-align: center;
            }

            & .section-form-result__text {
              margin-bottom: 32px;
              text-align: center;
            }

            & .section-form-result__img {
              bottom: -48px;
              position: absolute;
              right: -270px;
            }
          }
          section:has(.section-form-result__img) {
            position: relative;
          }
          @media screen and (max-width: 1279px) {
            .thanks-section {
              & .section-form-result__text br {
                display: none;
              }
            }
            #contact-us {
              padding-bottom: 0 !important;
            }
            .thanks-section .section-form-result__img {
              display: block;
              margin: 0 auto;
              position: static;
            }
          }

          @media screen and (max-width: 1679.6px) {
            .thanks-section .section-form-result__img {
              bottom: -48px;
              right: -82px;
            }
          }
          .crs-thform {
            font-family: Raleway;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;

            & form {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 11px;
              width: 380px;

              & input {
                border-radius: 10px;
                border: solid 1px #e3e3e3;
                background-color: #fff;
                padding: 12px;
                width: 100%;
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: #6f7a88;
              }
              & .error {
                visibility: hidden;
                height: 11px;
                line-height: 11px;
                font-size: 14px;
                color: #d62c2c;
              }
              & button {
                padding: 12px;
                width: 100%;
                border: none;
                border-radius: 8px;
                background-color: #2969cc;
                font-size: 16px;
                font-weight: 600;
                color: #fff;
                text-transform: uppercase;
                cursor: pointer;
              }
            }
          }
          @media (max-width: 768px) {
            .crs-thform {
              padding-inline: 15px;

              & form {
                width: 100%;
              }
            }
          }
        </style>

        <div class="thanks-section">
          <div class="section-form-result__data">
            <h1 class="h1 section-form-result__title">Thank you for the request!</h1>
            <div class="text-2 section-form-result__text">
              We will get back to you within 1 business day.<br />
              Please provide your phone number to enable us to call you.
            </div>
            <div class="crs-thform">
              <form>
                <input type="tel" name="phone" placeholder="Phone number" required />
                <div class="error">The phone number must consist of digits only</div>
                <button type="submit">send</button>
              </form>
            </div>
          </div>
          <img
            src="https://keenethics.com/wp-content/uploads/2023/11/Daria.webp"
            alt="Daria"
            width="368"
            height="371"
            class="section-form-result__img"
          />
        </div>
      `
      if (search === '?success') {
        $el('section#contact-us .container').insertAdjacentHTML('afterbegin', thanksForm)
        const regex = /^\d+$/

        $el('.form-row form.form > button').textContent = 'send'

        $el('.crs-thform form').addEventListener('submit', event => {
          event.preventDefault()
          const form = event.currentTarget
          const formData = new FormData(form)
          const phoneData = Object.fromEntries(formData.entries())
          if (!phoneData.phone || !regex.test(phoneData.phone)) {
            return
          }
          $el('form.contact-us__form').querySelector('button').click()
        })
        $el('.crs-thform input').addEventListener('input', event => {
          const value = event.target.value

          if (!regex.test(value)) {
            $el('.crs-thform form .error').style.visibility = 'visible'
          } else {
            formSubmit(value)
            $el('.crs-thform form .error').style.visibility = ''
          }
        })
        formSubmit()
        $el('.crs-thform form')?.addEventListener('submit', event => {
          event.preventDefault()
          const form = event.currentTarget
          const formData = new FormData(form)
          const phoneData = Object.fromEntries(formData.entries())

          formSubmit(phoneData)
        })

        blockVisibility(
          '.crs-thform',
          'exp_exi_inte_popup_vis_thankrequ_bloc',
          'Block view',
          'Thank you for your request'
        )

        $el('.crs-thform form input')?.addEventListener('change', () => {
          pushDataLayer('exp_exi_inte_popup_inp_thankrequ_phon', 'Phone number', 'Input', 'Thank you for your request')
        })

        $el('.crs-thform form button')?.addEventListener('click', () => {
          pushDataLayer('exp_exi_inte_popup_but_thankrequ_send', 'Send', 'Button', 'Thank you for your request')
        })
      }
    }
    popups() {
      this.firstPopup.render(/* HTML */ `
        <style>
          #crs-tpopup {
            border: none;
            max-width: 752px;
            font-family: Raleway;
            padding: 0;
            border-radius: 8px;
          }
          .crs-tpopup__container {
            padding: 40px;
          }
          .crs-tpopup__close {
            position: absolute;
            top: 40px;
            right: 40px;
            width: 24px;
            height: 24px;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: none;
            background: none;
            &:focus,
            &:focus-visible {
              outline: none;
            }
          }
          .crs-tpopup__header {
            display: flex;
            padding: 0;
            margin: 0;
            padding-bottom: 30px;
          }
          .crs-tpopup__content {
            display: flex;
            width: 100%;
            gap: 32px;
            margin: 0;
            padding: 0;
          }
          .crs-tpopup__body {
            padding: 0;
            margin: 0;
          }
          .crs-tpopup__title {
            font-size: 32px;
            font-weight: bold;
            color: #12233d;
            font-family: inherit;
          }

          .crs-tpopup__text {
            font-size: 16px;
            color: #12233d;
            margin-top: 16px;
            font-family: inherit;
          }

          .crs-tpopup__button {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 320px;
            height: 48px;
            border: none;
            background-color: #d62c2c;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            margin-top: 24px;
            font-family: inherit;
            text-transform: uppercase;
            text-align: center;
            text-decoration: none;
          }

          .crs-tpopup__image {
            width: 380px;
          }
          @media (max-width: 768px) {
            #crs-tpopup {
              width: 95%;
            }
            .crs-tpopup__container {
              padding: 24px;
            }
            .crs-tpopup__close {
              top: 24px;
              right: 24px;
            }
            .crs-tpopup__title {
              font-size: 24px;
            }
            .crs-tpopup__content {
              flex-direction: column;
            }
            .crs-tpopup__image {
              order: 1;
              width: 100%;
            }
            .crs-tpopup__body {
              order: 2;
            }
            .crs-tpopup__button {
              width: 100%;
            }
          }
        </style>
        <div class="crs-tpopup__header">
          <span>${icons.logo}</span>
        </div>
        <div class="crs-tpopup__content">
          <div class="crs-tpopup__body">
            <h2 class="crs-tpopup__title">Not sure what option is right for you?</h2>
            <p class="crs-tpopup__text">
              Our Sales team is on standby and ready to help. <br />
              Get in touch and we’ll help you find the right choice.
            </p>
            <a href="/contacts?solutions" target="_blank" class="crs-tpopup__button">Talk to Us</a>
          </div>
          <div class="crs-tpopup__image">
            <img src="${git}/img/woman_think.png" alt="Indent Popup" />
          </div>
        </div>
      `)
      blockVisibility(
        '#crs-tpopup',
        'exp_exi_inte_popup_vis_p1suropt_block',
        'Block view',
        'Pop-up 1 Not sure what option is right for you?'
      )
      $el('#crs-tpopup [data-close]').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p1suropt_close',
          'Close',
          'Button',
          'Pop-up 1 Not sure what option is right for you?'
        )
      })

      $el('#crs-tpopup .crs-tpopup__button').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p1suropt_talk',
          'Talk to Us',
          'Button',
          'Pop-up 1 Not sure what option is right for you?'
        )
      })

      this.secondPopup.render(/* HTML */ `
        <style>
          #crs-blpopup {
            border: none;
            max-width: 752px;
            font-family: Raleway;
            padding: 0;
            border-radius: 8px;
          }
          .crs-blpopup__container {
            padding: 40px;
          }
          .crs-blpopup__close {
            position: absolute;
            top: 40px;
            right: 40px;
            width: 24px;
            height: 24px;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: none;
            background: none;
            &:focus,
            &:focus-visible {
              outline: none;
            }
          }
          .crs-blpopup__header {
            display: flex;
            padding: 0;
            margin: 0;
            padding-bottom: 30px;
          }
          .crs-blpopup__content {
            display: flex;
            width: 100%;
            gap: 60px;
            margin: 0;
            padding: 0;
          }
          .crs-blpopup__body {
            padding: 0;
            margin: 0;
            width: 55%;
          }
          .crs-blpopup__title {
            font-size: 32px;
            font-weight: bold;
            color: #12233d;
            font-family: inherit;
          }

          .crs-blpopup__subtitle {
            font-size: 18px;
            font-weight: bold;
            color: #12233d;
            font-family: inherit;
            margin-top: 16px;
          }

          .crs-blpopup__list {
            padding: 0;
            margin: 0;
            margin-top: 24px;
            font-size: 16px;
            color: #12233d;
            display: grid;
            gap: 8px;
            list-style-type: circle;
            padding-left: 25px;

            & li::marker {
              color: #d62c2c;
            }
          }

          .crs-blpopup__button {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 320px;
            height: 48px;
            border: none;
            background-color: #d62c2c;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            margin-top: 40px;
            font-family: inherit;
            text-transform: uppercase;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
          }

          .crs-blpopup__image {
            width: 45%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border-radius: 8px;
            box-shadow:
              8px 0px 0 #cce0ff,
              8px 8px 0 #cce0ff;
          }

          .crs-blpopup__capture {
            background: #12233d;
            padding: 40px 32px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            border-radius: 0 0 8px 8px;
          }

          @media (max-width: 768px) {
            #crs-blpopup {
              width: 90%;
            }
            .crs-blpopup__container {
              padding: 24px;
            }
            .crs-blpopup__close {
              top: 24px;
              right: 24px;
            }
            .crs-blpopup__header {
              margin-top: 6px;
            }
            .crs-blpopup__title {
              font-size: 24px;
            }
            .crs-blpopup__content {
              flex-direction: column;
            }
            .crs-blpopup__image {
              display: none;
            }
            .crs-blpopup__body {
              width: 100%;
            }
            .crs-blpopup__button {
              width: 100%;
              margin-top: 24px;
            }
          }
        </style>
        <div class="crs-blpopup__header">
          <span>${icons.logo}</span>
        </div>
        <div class="crs-blpopup__content">
          <div class="crs-blpopup__body">
            <h2 class="crs-blpopup__title">
              Before you leave,<br />
              get our FREE UX audit guide.
            </h2>
            <h3 class="crs-blpopup__subtitle">In this report you will discover:</h3>
            <ul class="crs-blpopup__list">
              <li>The essentials of UX audits, their benefits, and our special methodology.</li>
              <li>How others have succeeded with UX.</li>
              <li>Unique insights from our UX and design team.</li>
            </ul>
            <a href="/contacts?download" target="_blank" class="crs-blpopup__button">Download Free Guide</a>
          </div>
          <div class="crs-blpopup__image">
            <img src="${git}/img/work.png" alt="Indent Popup" />
            <div class="crs-blpopup__capture">Using UX audits to slash dev costs and boost your ROI over time.</div>
          </div>
        </div>
      `)

      const secondPopup = $el('#crs-blpopup')

      secondPopup.addEventListener('click', event => {
        if (event.target.closest('a')) {
          secondPopup.close()
        }
      })

      blockVisibility(
        '#crs-blpopup',
        'exp_exi_inte_popup_vis_p2sbefor_block',
        'Block view',
        'Pop-up 2 Before you leave, get our FREE UX audit guide.'
      )

      $el('#crs-blpopup [data-close]').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p2sbefor_close',
          'Close',
          'Button',
          'Pop-up 2 Before you leave, get our FREE UX audit guide.'
        )
      })

      $el('#crs-blpopup .crs-blpopup__button').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p2sbefor_talk',
          'Download Free Guide',
          'Button',
          'Pop-up 2 Before you leave, get our FREE UX audit guide.'
        )
      })

      this.thirdPopup.render(/* HTML */ `
        <style>
          #crs-sdpopup {
            border: none;
            max-width: 752px;
            font-family: Raleway;
            padding: 0;
            border-radius: 8px;
          }
          .crs-sdpopup__container {
            padding: 40px;
          }
          .crs-sdpopup__close {
            position: absolute;
            top: 40px;
            right: 40px;
            width: 24px;
            height: 24px;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: none;
            background: none;
            &:focus,
            &:focus-visible {
              outline: none;
            }
          }
          .crs-sdpopup__header {
            display: flex;
            padding: 0;
            margin: 0;
            padding-bottom: 30px;
          }
          .crs-sdpopup__content {
            display: flex;
            width: 100%;
            gap: 60px;
            margin: 0;
            padding: 0;
          }
          .crs-sdpopup__body {
            padding: 0;
            margin: 0;
            width: 100%;
          }
          .crs-sdpopup__title {
            font-size: 32px;
            font-weight: bold;
            color: #12233d;
            font-family: inherit;
          }

          .crs-sdpopup__subtitle {
            font-size: 18px;
            font-weight: bold;
            color: #12233d;
            font-family: inherit;
            margin-top: 16px;
          }
          .crs-sdpopup__details {
            display: grid;
            gap: 8px;
            margin-top: 24px;
          }
          .crs-sdpopup__details summary {
            position: relative;
            background-color: #edf2fa;
            padding: 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
            color: #2969cc;
          }

          .crs-sdpopup__details a {
            display: block;
            margin-top: 16px;
            padding: 9px;
            width: 340px;
            border-radius: 8px;
            border: solid 1px #2969cc;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            color: #2969cc;
            text-transform: uppercase;
            text-decoration: none;
          }

          .crs-sdpopup__details[open] summary {
            background: none;
          }
          .crs-sdpopup__details[open] {
            border: solid 1px #dae4f2;
            border-radius: 8px;
          }
          .crs-sdpopup__details[open]:hover {
            border: solid 1px #2969cc;
          }
          .crs-sdpopup__details[open] .crs-content {
            padding: 24px;
            padding-top: 0;
            & * {
              font-size: 16px;
            }
          }
          .crs-sdpopup__details summary::marker {
            content: none;
          }
          .crs-sdpopup__details summary::after {
            content: '';
            background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%232969CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            right: 24px;
            transform: rotate(180deg) translateY(50%);
          }
          .crs-sdpopup__details[open] summary::after {
            content: '';
            background-image: url('data:image/svg+xml,<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m24 20-7.873-8L8 20" stroke="%232969CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            width: 32px;
            height: 32px;
            position: absolute;
            top: 50%;
            transform: rotate(0deg) translateY(-50%);
          }
          .crs-sdpopup__text {
            margin-top: 24px;
            font-size: 16px;
            color: #12233d;
          }

          .crs-sdpopup__actions {
            margin-top: 32px;
            display: flex;
            gap: 12px;
          }
          .crs-sdpopup__button,
          .crs-sdpopup__button--secondary {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            width: 320px;
            height: 48px;
            border: none;
            background-color: #d62c2c;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            font-family: inherit;
            text-transform: uppercase;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
          }
          .crs-sdpopup__button--secondary {
            color: #d62c2c;
            border: solid 1px #d62c2c;
            background-color: #fff;
          }

          @media (max-width: 768px) {
            #crs-sdpopup {
              width: 90%;
            }
            .crs-sdpopup__container {
              padding: 24px;
            }
            .crs-sdpopup__close {
              top: 24px;
              right: 24px;
            }
            .crs-sdpopup__header {
              margin-top: 6px;
            }
            .crs-sdpopup__title {
              font-size: 24px;
              line-height: 32px;
            }
            .crs-sdpopup__content {
              flex-direction: column;
            }
            .crs-sdpopup__image {
              display: none;
            }
            .crs-sdpopup__body {
              width: 100%;
            }
            .crs-sdpopup__actions {
              flex-direction: column;
              margin-top: 0;
            }
            .crs-sdpopup__button,
            .crs-sdpopup__button--secondary {
              width: 100%;
              margin-top: 24px;
            }
            .crs-sdpopup__button--secondary {
              margin-top: 8px;
              font-size: 14px;
              padding: 12px;
            }
            .crs-sdpopup__details summary {
              padding-right: 35px;
              font-size: 16px;
              line-height: 24px;
            }
            .crs-sdpopup__details summary::after {
              right: 12px;
              width: 24px;
              height: 24px;
              background-size: cover;
              top: 40%;
              transform: rotate(180deg) translateY(50%);
            }
            .crs-sdpopup__details[open] summary::after {
              right: 12px;
              width: 24px;
              height: 24px;
              background-size: cover;
              top: 40%;
              transform: rotate(0deg) translateY(-50%);
            }
            .crs-sdpopup__details a {
              width: 100%;
            }
            .crs-sdpopup__details[open] .crs-content {
              & * {
                font-size: 14px;
              }
            }
            .crs-sdpopup__text {
              font-size: 14px;
            }
          }
        </style>
        <div class="crs-sdpopup__header">
          <span>${icons.logo}</span>
        </div>
        <div class="crs-sdpopup__content">
          <div class="crs-sdpopup__body">
            <h2 class="crs-sdpopup__title">Software development headaches? Keenethics has got you covered.</h2>
            <h3 class="crs-sdpopup__subtitle">What describes your situation best?</h3>
            <div class="crs-sdpopup__accordion">
              <details class="crs-sdpopup__details">
                <summary>Starting Up and Need to Build My Vision</summary>
                <div class="crs-content">
                  <p>
                    Our MVP development service transforms your concept into a market-ready product efficiently and
                    reliably.
                  </p>
                  <a href="/approach-minimum-viable-product" data-event="discover">Discover MVP Development</a>
                </div>
              </details>
              <details class="crs-sdpopup__details">
                <summary>Managing My Business and Need Optimization</summary>
                <div class="crs-content">
                  <p>
                    Our custom software solutions streamline your processes so that you can optimize operations,
                    overcome budgetary constraints, and enhance organizational productivity.
                  </p>
                  <a href="/services-development-and-quality-assurance" data-event="optimize">Optimize My Business</a>
                </div>
              </details>
              <details class="crs-sdpopup__details">
                <summary>Scaling Up and Need Robust Support</summary>
                <div class="crs-content">
                  <p>
                    Scale your project with a team dedicated to giving you the tech foundations necessary for a smooth
                    and successful expansion.
                  </p>
                  <a href="/services-dedicated-development-team" data-event="scale">Scale My Project</a>
                </div>
              </details>
            </div>
            <p class="crs-sdpopup__text">
              Keenethics partners with you to provide ethical, personalized, and innovative solutions needed to drive
              your business.
            </p>
            <div class="crs-sdpopup__actions">
              <a href="/contacts?solutions" class="crs-sdpopup__button" target="__blank">Talk to us</a>
              <a href="https://keenethics.com/#services" target="__blank" class="crs-sdpopup__button--secondary"
                >Learn More About Our Solutions</a
              >
            </div>
          </div>
        </div>
      `)
      blockVisibility(
        '#crs-sdpopup',
        'exp_exi_inte_popup_vis_p3softwar_block',
        'Block view',
        'Pop-up 3 Software development headaches? Keenethics has got you covered.'
      )

      $el('#crs-sdpopup [data-close]').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p3softwar_close',
          'Close',
          'Button',
          'Pop-up 3 Software development headaches? Keenethics has got you covered.'
        )
      })

      $el('#crs-sdpopup .crs-sdpopup__button').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p3softwar_talk',
          'Talk to us',
          'Button',
          'Pop-up 3 Software development headaches? Keenethics has got you covered.'
        )
      })

      $el('#crs-sdpopup .crs-sdpopup__button--secondary').addEventListener('click', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p3softwar_learn',
          'Learn More About Our Solutions',
          'Button',
          'Pop-up 3 Software development headaches? Keenethics has got you covered.'
        )
      })

      $$el('#crs-sdpopup .crs-sdpopup__details').forEach(detail => {
        detail.addEventListener('click', event => {
          const details = event.currentTarget
          const title = details.querySelector('summary').textContent
          const isUserOpenDetails = !details.open

          $$el('#crs-sdpopup .crs-sdpopup__details').forEach(detail => {
            if (detail !== details) {
              detail.removeAttribute('open')
            }
          })
          if (event.target.closest('a')) return

          if (isUserOpenDetails) {
            pushDataLayer(
              'exp_exi_inte_popup_drop_p3softwar_open',
              `${title} - Open`,
              'Dropdown',
              'Pop-up 3 Software development headaches? Keenethics has got you covered.'
            )
          } else {
            pushDataLayer(
              'exp_exi_inte_popup_drop_p3softwar_clos',
              `${title} - Close`,
              'Dropdown',
              'Pop-up 3 Software development headaches? Keenethics has got you covered.'
            )
          }
        })
      })

      $el('#crs-sdpopup [data-event="discover"]').addEventListener('mousedown', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p3softwar_mvp',
          'Discover MVP Development',
          'Button',
          'Pop-up 3 Software development headaches? Keenethics has got you covered.'
        )
      })

      $el('#crs-sdpopup [data-event="optimize"]').addEventListener('mousedown', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p3softwar_optim',
          'Optimize My Business',
          'Button',
          'Pop-up 3 Software development headaches? Keenethics has got you covered.'
        )
      })

      $el('#crs-sdpopup [data-event="scale"]').addEventListener('mousedown', () => {
        pushDataLayer(
          'exp_exi_inte_popup_but_p3softwar_scale',
          'Scale My Project',
          'Button',
          'Pop-up 3 Software development headaches? Keenethics has got you covered.'
        )
      })
    }
  }

  const indentPopup = new IndentPopup()
  indentPopup.init()
})()
