console.log(
  '%c EXP: exit intent popup (DEV: SKh)',
  'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
)
const $$el = selector => document.querySelectorAll(selector)
const $el = selector => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/'
// clarity script
const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'exp_pdp_enhanc', 'variant_1')
  }
}, 1000)
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

function checkFocusTime(selector, event, location) {
  const checker = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round(endShow - startShow)
        console.log(timeShow, `timeShow`)
        entry.target.removeAttribute('data-startShow')
        if (timeShow >= 3000) {
          pushDataLayer(event, timeShow, 'Visibility', location)
        }
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
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

function checkScrollPosition(headerOff, elPosition) {
  const headerOffset = headerOff
  const elementPosition = elPosition?.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

function setSessionStorage(name, value) {
  sessionStorage.setItem(name, value)
}
function removeSessionStorage(name) {
  let getSessionStorage = sessionStorage.getItem(name)
  let removeSessionStorage = null
  if (getSessionStorage) {
    removeSessionStorage = sessionStorage.removeItem(name)
  }
  return removeSessionStorage
}
function getSessionStorage(name) {
  let getSessionStorage = sessionStorage.getItem(name)
  return getSessionStorage
}
function setLocalStorage(name, value) {
  localStorage.setItem(name, value)
}
function getLocalStorage(name) {
  let getLocalStorage = localStorage.getItem(name)
  return getLocalStorage
}
function removeLocalStorage(name) {
  let getLocalStorage = localStorage.getItem(name)
  let removeLocalStorage = null
  if (getLocalStorage) {
    removeLocalStorage = localStorage.removeItem(name)
  }
  return removeLocalStorage
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

const icons = {
  close: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_1656_33454)">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill="white"
        />
        <path
          d="M17.7338 6.27531C17.3788 5.92036 16.8055 5.92036 16.4505 6.27531L12 10.7167L7.54949 6.26621C7.19454 5.91126 6.62116 5.91126 6.26621 6.26621C5.91126 6.62116 5.91126 7.19454 6.26621 7.54949L10.7167 12L6.26621 16.4505C5.91126 16.8055 5.91126 17.3788 6.26621 17.7338C6.62116 18.0887 7.19454 18.0887 7.54949 17.7338L12 13.2833L16.4505 17.7338C16.8055 18.0887 17.3788 18.0887 17.7338 17.7338C18.0887 17.3788 18.0887 16.8055 17.7338 16.4505L13.2833 12L17.7338 7.54949C18.0796 7.20364 18.0796 6.62116 17.7338 6.27531Z"
          fill="#273038"
        />
      </g>
      <defs>
        <clipPath id="clip0_1656_33454">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  `,
  copy: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.5815 0H7.95692C7.31626 0.0024314 6.70252 0.258014 6.2495 0.711037C5.79648 1.16406 5.54089 1.77779 5.53846 2.41846V5.53846H2.41846C1.77779 5.54089 1.16406 5.79648 0.711037 6.2495C0.258014 6.70252 0.0024314 7.31626 0 7.95692V21.5815C0.0024314 22.2222 0.258014 22.8359 0.711037 23.289C1.16406 23.742 1.77779 23.9976 2.41846 24H16.0431C16.6837 23.9976 17.2975 23.742 17.7505 23.289C18.2035 22.8359 18.4591 22.2222 18.4615 21.5815V18.4615H21.5815C22.2222 18.4591 22.8359 18.2035 23.289 17.7505C23.742 17.2975 23.9976 16.6837 24 16.0431V2.41846C23.9976 1.77779 23.742 1.16406 23.289 0.711037C22.8359 0.258014 22.2222 0.0024314 21.5815 0ZM16.6154 21.5815C16.6154 21.7333 16.5551 21.8789 16.4478 21.9862C16.3404 22.0935 16.1949 22.1538 16.0431 22.1538H2.41846C2.26668 22.1538 2.12111 22.0935 2.01378 21.9862C1.90645 21.8789 1.84615 21.7333 1.84615 21.5815V7.95692C1.84615 7.80514 1.90645 7.65957 2.01378 7.55224C2.12111 7.44491 2.26668 7.38462 2.41846 7.38462H16.0431C16.1949 7.38462 16.3404 7.44491 16.4478 7.55224C16.5551 7.65957 16.6154 7.80514 16.6154 7.95692V21.5815ZM22.1538 16.0431C22.1538 16.1949 22.0935 16.3404 21.9862 16.4478C21.8789 16.5551 21.7333 16.6154 21.5815 16.6154H18.4615V7.95692C18.4591 7.31626 18.2035 6.70252 17.7505 6.2495C17.2975 5.79648 16.6837 5.54089 16.0431 5.53846H7.38462V2.41846C7.38462 2.26668 7.44491 2.12111 7.55224 2.01378C7.65957 1.90645 7.80514 1.84615 7.95692 1.84615H21.5815C21.7333 1.84615 21.8789 1.90645 21.9862 2.01378C22.0935 2.12111 22.1538 2.26668 22.1538 2.41846V16.0431Z"
        fill="#333F48"
      />
      <path
        d="M21.5815 0H7.95692C7.31626 0.0024314 6.70252 0.258014 6.2495 0.711037C5.79648 1.16406 5.54089 1.77779 5.53846 2.41846V5.53846H2.41846C1.77779 5.54089 1.16406 5.79648 0.711037 6.2495C0.258014 6.70252 0.0024314 7.31626 0 7.95692V21.5815C0.0024314 22.2222 0.258014 22.8359 0.711037 23.289C1.16406 23.742 1.77779 23.9976 2.41846 24H16.0431C16.6837 23.9976 17.2975 23.742 17.7505 23.289C18.2035 22.8359 18.4591 22.2222 18.4615 21.5815V18.4615H21.5815C22.2222 18.4591 22.8359 18.2035 23.289 17.7505C23.742 17.2975 23.9976 16.6837 24 16.0431V2.41846C23.9976 1.77779 23.742 1.16406 23.289 0.711037C22.8359 0.258014 22.2222 0.0024314 21.5815 0ZM16.6154 21.5815C16.6154 21.7333 16.5551 21.8789 16.4478 21.9862C16.3404 22.0935 16.1949 22.1538 16.0431 22.1538H2.41846C2.26668 22.1538 2.12111 22.0935 2.01378 21.9862C1.90645 21.8789 1.84615 21.7333 1.84615 21.5815V7.95692C1.84615 7.80514 1.90645 7.65957 2.01378 7.55224C2.12111 7.44491 2.26668 7.38462 2.41846 7.38462H16.0431C16.1949 7.38462 16.3404 7.44491 16.4478 7.55224C16.5551 7.65957 16.6154 7.80514 16.6154 7.95692V21.5815ZM22.1538 16.0431C22.1538 16.1949 22.0935 16.3404 21.9862 16.4478C21.8789 16.5551 21.7333 16.6154 21.5815 16.6154H18.4615V7.95692C18.4591 7.31626 18.2035 6.70252 17.7505 6.2495C17.2975 5.79648 16.6837 5.54089 16.0431 5.53846H7.38462V2.41846C7.38462 2.26668 7.44491 2.12111 7.55224 2.01378C7.65957 1.90645 7.80514 1.84615 7.95692 1.84615H21.5815C21.7333 1.84615 21.8789 1.90645 21.9862 2.01378C22.0935 2.12111 22.1538 2.26668 22.1538 2.41846V16.0431Z"
        fill="black"
        fill-opacity="0.2"
      />
    </svg>
  `,
  copied: /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#FEA900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#FEA900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  minus: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 12H18" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `,
  infoCircle: /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99996 18.3337C14.5833 18.3337 18.3333 14.5837 18.3333 10.0003C18.3333 5.41699 14.5833 1.66699 9.99996 1.66699C5.41663 1.66699 1.66663 5.41699 1.66663 10.0003C1.66663 14.5837 5.41663 18.3337 9.99996 18.3337Z" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 6.66699V10.8337" stroke="#333F48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99536 13.333H10.0028" stroke="#333F48" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
 `,
  tabler: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path
        d="M6.5 17V17.01M6.5 7V7.01M16.5 7V7.01M16.5 14H13.5V17M19.5 14V14.01M13.5 20H16.5M16.5 17H19.5V20M3.5 5C3.5 4.73478 3.60536 4.48043 3.79289 4.29289C3.98043 4.10536 4.23478 4 4.5 4H8.5C8.76522 4 9.01957 4.10536 9.20711 4.29289C9.39464 4.48043 9.5 4.73478 9.5 5V9C9.5 9.26522 9.39464 9.51957 9.20711 9.70711C9.01957 9.89464 8.76522 10 8.5 10H4.5C4.23478 10 3.98043 9.89464 3.79289 9.70711C3.60536 9.51957 3.5 9.26522 3.5 9V5ZM13.5 5C13.5 4.73478 13.6054 4.48043 13.7929 4.29289C13.9804 4.10536 14.2348 4 14.5 4H18.5C18.7652 4 19.0196 4.10536 19.2071 4.29289C19.3946 4.48043 19.5 4.73478 19.5 5V9C19.5 9.26522 19.3946 9.51957 19.2071 9.70711C19.0196 9.89464 18.7652 10 18.5 10H14.5C14.2348 10 13.9804 9.89464 13.7929 9.70711C13.6054 9.51957 13.5 9.26522 13.5 9V5ZM3.5 15C3.5 14.7348 3.60536 14.4804 3.79289 14.2929C3.98043 14.1054 4.23478 14 4.5 14H8.5C8.76522 14 9.01957 14.1054 9.20711 14.2929C9.39464 14.4804 9.5 14.7348 9.5 15V19C9.5 19.2652 9.39464 19.5196 9.20711 19.7071C9.01957 19.8946 8.76522 20 8.5 20H4.5C4.23478 20 3.98043 19.8946 3.79289 19.7071C3.60536 19.5196 3.5 19.2652 3.5 19V15Z"
        stroke="#333F48"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `,
  discountIcon: /* html */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="114" height="101" viewBox="0 0 114 101" fill="none">
      <g clip-path="url(#clip0_1821_10314)">
        <path d="M112.481 48.6773C111.697 46.5025 110.178 44.7231 108.113 43.6633C90.7853 34.7346 74.3199 25.3392 56.6992 16.45C55.3383 15.762 53.1229 15.5485 51.6591 15.9597C39.759 19.3287 30.4226 22.935 19.8122 25.442C16.5444 26.2171 14.2578 29.3489 14.867 32.9156C14.2103 38.3251 16.7581 50.5042 18.0794 55.7871C20.3423 64.8345 22.5894 67.8397 31.4116 73.3599C45.9385 82.4626 61.1459 90.4265 76.3296 98.3825C83.9728 102.384 88.0318 102.361 93.6574 94.4203C100.794 84.3528 106.08 73.1226 111.326 61.9558C113.367 57.6219 115.519 52.4576 112.473 48.6852L112.481 48.6773ZM42.4888 44.7705C37.5515 47.9339 31.6411 42.8962 32.9861 37.4156C34.3471 31.8875 42.9714 32.2434 44.9337 37.1783C45.986 39.8277 44.8941 43.2363 42.4888 44.7705Z" fill="white"/>
        <path d="M47.292 36.2375C44.3882 28.9458 32.4644 28.9537 30.5417 36.8069C28.7535 44.0828 36.1436 50.6231 42.8611 47.4518C47.1891 45.4035 48.8744 40.2076 47.292 36.2375ZM42.4971 44.7708C37.5599 47.9342 31.6494 42.8965 32.9945 37.4159C34.3554 31.8878 42.9798 32.2437 44.942 37.1786C45.9944 39.828 44.9025 43.2366 42.4971 44.7708Z" fill="#333F48"/>
        <path d="M65.7588 2.30116C66.3839 2.6096 66.645 3.36882 66.3364 3.99359C62.3012 11.9496 62.6256 12.0129 61.9135 12.345C60.8295 12.8591 59.7059 11.7123 60.236 10.6447L64.0656 2.87058C64.3742 2.2458 65.1337 1.99273 65.7588 2.29325V2.30116Z" fill="#FEA900"/>
        <path d="M56.327 11.2145C55.6386 11.3253 54.9898 10.8507 54.879 10.1627L53.5102 1.4633C53.3994 0.77526 53.8742 0.12676 54.5625 0.0160399C55.2509 -0.0946797 55.8997 0.379833 56.0105 1.06788L57.3793 9.76727C57.4901 10.4553 57.0153 11.1038 56.327 11.2145Z" fill="#FEA900"/>
        <path d="M43.209 1.48707L51.1529 9.59333C51.6435 10.0916 51.6356 10.8903 51.1371 11.3807C50.6545 11.8552 49.8474 11.871 49.3489 11.3648L41.405 3.25859C40.9145 2.76035 40.9224 1.96159 41.4208 1.47126C41.9193 0.980927 42.7185 0.988835 43.209 1.48707Z" fill="#FEA900"/>
        <path d="M112.481 48.6773C111.697 46.5025 110.178 44.7231 108.113 43.6633C90.7853 34.7346 74.3199 25.3392 56.6992 16.45C55.3383 15.762 53.1229 15.5485 51.6591 15.9597C39.759 19.3287 30.4226 22.935 19.8122 25.442C16.5444 26.2171 14.2578 29.3489 14.867 32.9156C14.2103 38.3251 16.7581 50.5042 18.0794 55.7871C20.3423 64.8345 22.5894 67.8397 31.4116 73.3599C45.9385 82.4626 61.1459 90.4265 76.3296 98.3825C83.9728 102.384 88.0318 102.361 93.6574 94.4203C100.794 84.3528 106.08 73.1226 111.326 61.9558C113.367 57.6219 115.519 52.4576 112.473 48.6852L112.481 48.6773ZM109.719 54.9804C103.089 67.1596 97.3208 79.2913 89.5589 92.2139C87.7232 95.2745 83.8225 96.35 80.6813 94.6576C61.8105 84.503 43.5411 74.5304 27.4396 64.2255C26.7513 63.7827 25.8967 62.6913 25.6356 61.9321C23.2857 55.0042 21.3314 47.6018 18.6095 37.3681L17.4069 32.8444C16.8926 30.9148 17.8816 28.9851 19.5748 28.1863C19.8359 28.0677 20.105 27.9649 20.3898 27.9016C31.1109 25.3709 40.4158 21.7725 52.3396 18.3955C53.2099 18.1504 54.737 18.3006 55.5519 18.704C65.197 23.5756 74.6284 28.6608 83.7434 33.5799C91.2758 37.6449 99.0615 41.8444 106.942 45.9093C110.257 47.6176 111.484 51.7142 109.704 54.9804H109.719Z" fill="#333F48"/>
        <path d="M71.0126 74.1035C71.6456 74.1035 72.2074 73.6448 72.3103 72.9963C73.7582 64.1309 75.3486 55.1547 77.0339 46.305C77.1684 45.5932 76.7016 44.8973 75.9895 44.7628C75.2694 44.6126 74.5811 45.095 74.4466 45.8068C72.7533 54.6801 71.1551 63.6801 69.7071 72.5693C69.5805 73.368 70.1898 74.1035 71.0126 74.1035Z" fill="#333F48"/>
        <path d="M65.2046 59.0369C67.6574 59.0369 69.9915 56.6406 70.0232 53.841C70.0785 49.4043 64.5479 46.3753 61.2959 50.1714C59.9983 51.682 59.7293 54.0308 60.6392 56.0159C62.1188 59.2425 65.3787 59.0923 65.2046 59.0369ZM64.8564 51.0809C66.1145 51.0809 67.4042 52.4017 67.3884 53.8094C67.3805 54.5844 67.0007 55.3594 66.3835 55.8893C65.1334 56.9491 63.638 56.2294 63.0366 54.9166C62.1425 52.9711 63.361 51.0809 64.8485 51.0809H64.8564Z" fill="#333F48"/>
        <path d="M81.9952 69.7456C82.1772 69.7061 83.4352 69.8326 84.7724 68.6068C85.8564 67.6024 86.4973 66.1077 86.4894 64.5971C86.4656 60.0972 81.1723 57.1236 78.2052 60.8959C75.7603 64.004 77.778 69.6586 81.9952 69.7456ZM82.0189 61.8924C82.8972 62.193 83.8546 63.3239 83.8625 64.6051C83.8625 65.6885 83.2058 66.9381 82.0427 67.1042C80.9745 67.0804 80.3969 66.2184 80.1596 65.6964C79.0993 63.4662 80.5235 61.3705 82.0189 61.8845V61.8924Z" fill="#333F48"/>
        <path d="M39.9804 37.6762C36.2299 26.5014 26.0389 18.063 14.8747 16.8926C10.3172 16.4181 5.0635 17.4383 2.58696 21.5112C0.90956 24.2712 0.901648 27.8538 1.74035 31.0172C3.56017 37.9056 9.31239 43.4495 15.9666 44.7306" stroke="#333F48" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1821_10314">
          <rect width="114" height="101" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,
  world: /* HTML */ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19.5 6L18.033 7.1C17.6868 7.35964 17.2657 7.5 16.833 7.5H13.475C13.1496 7.50013 12.8322 7.60086 12.5662 7.78839C12.3003 7.97592 12.0988 8.24109 11.9894 8.54756C11.8801 8.85404 11.8681 9.18684 11.9552 9.50038C12.0423 9.81392 12.2242 10.0929 12.476 10.299L14.476 11.935C15.2506 12.5688 15.8544 13.3862 16.2324 14.313C16.6103 15.2397 16.7505 16.2463 16.64 17.241L16.594 17.658C16.5317 18.2179 16.4103 18.7696 16.232 19.304L16 20M2.5 10.5L5.738 9.96C6.05209 9.90757 6.37415 9.9309 6.67741 10.028C6.98067 10.1252 7.25634 10.2933 7.48151 10.5185C7.70668 10.7437 7.87482 11.0193 7.97196 11.3226C8.0691 11.6258 8.09243 11.9479 8.04 12.262L7.905 13.069C7.78781 13.773 7.89939 14.496 8.22336 15.1318C8.54733 15.7677 9.06662 16.283 9.705 16.602C10.2142 16.8568 10.6214 17.2777 10.8592 17.7951C11.097 18.3125 11.1512 18.8956 11.013 19.448L10.5 21.5"
        stroke="#333F48"
        stroke-width="1.5"
      />
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#333F48"
        stroke-width="1.5"
      />
    </svg>
  `
}

removeSessionStorage('learnMorePopup')
// IntentPopup
class IntentPopup {
  constructor(targetUrl, delayTime) {
    this.delayTime = delayTime
    this.timeoutId = null
    this.targetUrl = targetUrl
    this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
    this.buyNowTxt = 'Buy Now'
    this.init()
  }

  init() {
    this.initMainStyles()
    this.createPopup()
    const currentUrl = location.href

    if (currentUrl.includes(this.targetUrl) && this.targetUrl === '/collections') {
      console.log(`ONLY POPUP >>>>>`)
      this.intentPopupTriggers()
    }

    // reDesignPdp
    if (currentUrl.includes(this.targetUrl) && this.targetUrl === '/products') {
      console.log(`ONLY PDP!!!!!`)
      this.initMainPdpStyles()
      this.reDesignHero()
      this.newVideoExplanationBlock()
      this.newBtnSelectPlan()
      this.newBtnLearnMoreAboutHowToActivate()
      this.onClickQuantitySelectorBtn()
      this.onClickSizeSwatchLinkBtn()
      this.onVisibleStickyBanner()
      this.initMutationObserver()
    }
  }

  // IntentPopup
  intentPopupTriggers() {
    this.setupListeners()
    this.resetTimer()

    if (this.device === 'Mobile') {
      document.addEventListener('scroll', () => {
        const scrollSpeed = checkScrollSpeed()
        if (
          (+scrollSpeed < -100 || +scrollSpeed > 100) &&
          !localStorage.getItem('onClickIsMyDeviceCompatibleBlock') &&
          !localStorage.getItem('onClickStampedReviewsBlock')
        ) {
          console.log(`scroll`)
          this.showIntentPopup()
        }
      })
    } else {
      document.addEventListener('mouseleave', event => {
        if (
          event.clientY <= 0 ||
          event.clientX <= 0 ||
          event.clientX >= window.innerWidth ||
          event.clientY >= window.innerHeight
        ) {
          this.showIntentPopup()
        }
      })
    }
  }
  resetTimer() {
    // Clear the previous timeout
    clearTimeout(this.timeoutId)
    // Set a new timeout
    this.timeoutId = setTimeout(() => this.showIntentPopup(), this.delayTime)
  }
  setupListeners() {
    // Attach the resetTimer function to relevant events
    document.addEventListener('mousemove', () => this.resetTimer())
    document.addEventListener('keydown', () => this.resetTimer())

    // Add touch event listeners for mobile devices
    if (window.innerWidth <= 768) {
      document.addEventListener('touchstart', () => this.resetTimer())
      document.addEventListener('touchmove', () => this.resetTimer())
    }
  }
  removePopupClient() {
    waitForElement('[aria-label="POPUP Form"]').then(i => {
      $el('[aria-label="POPUP Form"]')
        ?.closest('.kl-private-reset-css-Xuajs1')
        ?.closest('.kl-private-reset-css-Xuajs1')
        ?.closest('.needsclick')
        .parentElement.remove()
    })
  }
  showIntentPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .discount__popup {
          display: flex;
          flex-direction: column;
        }
        .discount__header {
          padding: 18px 20px 24px;
        }
        .discount__header h2 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #fff;
          text-align: center;
          font-family: 'Poppins';
          font-size: 22px;
          font-weight: 700;
          line-height: 28px;
          margin: 0 auto;
        }
        .discount__header h2 span {
          border-radius: 6px;
          background: #333f48;
          padding: 5px 6px;
        }
        .discount__img {
          max-width: 114px;
          max-height: 101px;
          width: 100%;
          margin: 0 auto;
        }
        .discount__body {
          padding: 20px;
        }
        .discount__code {
          max-width: 311px;
          margin: 0 auto;
        }
        .discount__code-title {
          color: #333f48;
          text-align: center;
          font-family: 'Poppins';
          font-size: 24px;
          font-weight: 700;
          line-height: normal;
          margin-bottom: 14px;
        }
        .discount__code-container {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 6px;
          border: 2px solid #fea900;
          background: #fff;
          width: 100%;
          padding: 10px 14px 10px 20px;
          transition: all 0.5s ease 0s;
        }
        .discount__code-container button {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          padding: 0;
          background: none;
        }
        .discount__code-container button svg {
          width: 100%;
          height: 100%;
        }
        .discount__code-container svg path {
          transition: all 0.5s ease 0s;
        }
        .discount__code-container:not(.is_active) svg:hover path {
          fill: #fea900;
        }
        .discount__code-container span {
          color: #333f48;
          font-family: 'Poppins';
          font-size: 15px;
          font-weight: 500;
          line-height: 24px;
        }
        .copy_code_inform + svg {
          display: none;
        }
        .discount__description {
          max-width: 311px;
          margin: 20px auto 0;
        }
        .discount__description p {
          color: #333f48;
          text-align: center;
          font-family: 'Roboto';
          font-size: 16px;
          font-weight: 400;
          line-height: 23.1px;
        }
        @media (max-width: 768px) {
          .discount__header {
            padding: 16px 21px 24px;
          }
          .discount__header h2 {
            font-size: 18px;
            gap: 5px;
          }
          .discount__header h2 span {
            padding: 4px 10px;
          }
          .discount__body {
            padding: 24px 21px 16px;
          }
          .discount__code-title {
            margin-bottom: 24px;
          }
          .discount__description {
            margin-top: 24px;
          }
          .discount__description p {
            line-height: normal;
          }
        }
      </style>
    `
    const discountPopup = /* HTML */ `
      ${popupStyle}
      <div class="discount__popup">
        <div class="discount__header">
          <h2>
            <span>Wait! Don’t leave without</span>
            <span>staying connected</span>
          </h2>
        </div>
        <div class="discount__img">${icons.discountIcon}</div>
        <div class="discount__body">
          <div class="discount__code">
            <div class="discount__code-title">Take 10% off your eSIM order with the code:</div>
            <div class="discount__code-container">
              <span>STAYCONNECTED10</span>
              <button data-discount data-target="popup">${icons.copy}</button>
            </div>
          </div>
          <div class="discount__description">
            <p>Simply use the code at checkout to ensure seamless connectivity with ease.</p>
          </div>
        </div>
      </div>
    `
    this.handleShowPopup(discountPopup, 'discountPopup')
  }
  copyDiscount() {
    $$el('[data-discount]').forEach(btn => {
      btn.addEventListener('click', event => {
        navigator.clipboard.writeText('STAYCONNECTED10')
        if (!$el('.copy_code_inform')) {
          event.currentTarget.insertAdjacentHTML('afterbegin', this.showCopiedBadge())
          btn.closest('.discount__code-container').classList.add('is_active')
        }
        setTimeout(() => {
          $el('.copy_code_inform').remove()
          if (btn.closest('.discount__code-container').classList.contains('is_active')) {
            btn.closest('.discount__code-container').classList.remove('is_active')
          }
        }, 2000)
        if (event.currentTarget.dataset.target === 'popup') {
          pushDataLayer(
            'exp_pdp_enhanc_click_expopup_promo',
            'Promo Code',
            'Click',
            'Exit intent pop-up Wait! Don’t leave without staying connected!'
          )
        }
      })
    })
  }
  showCopiedBadge() {
    const copied = /* HTML */ ` <div class="copy_code_inform">${icons.copied}</div> `
    return copied
  }

  // reDesignPdp
  newVideoExplanationBlock() {
    const videoBoxStyle = /* HTML */ `
      <style>
        #videoExplanation {
          margin: 80px 0 0;
        }
        #videoExplanation .esim-compatible-inner {
          max-width: 740px;
          width: 90%;
          margin: 0 auto;
          padding: 0;
        }
        .video-explanation__block {
          border-radius: 6px;
          background: #eef4fc;
        }
        .video-explanation__link {
          padding: 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .video-explanation__link p {
          overflow: hidden;
          color: #333f48;
          text-overflow: ellipsis;
          font-family: Poppins;
          font-size: 13px;
          font-weight: 500;
          line-height: 20px;
          margin: 0;
        }
        .video-explanation__lists {
          padding: 0 24px 24px;
        }
        .video-explanation__opened,
        .video-explanation__closed {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 24px;
          min-width: 24px;
          max-height: 24px;
          height: 100%;
          font-size: 22px;
        }
        .video-explanation__opened svg,
        .video-explanation__closed svg {
          width: 100%;
          height: 100%;
        }
        .video-explanation__opened,
        .video-explanation__link.active_var .video-explanation__closed {
          display: none;
        }
        .video-explanation__link.active_var .video-explanation__opened {
          display: block;
        }
        .video-explanation__description {
          margin-top: 10px;
        }
        .video-explanation__iframe {
          position: relative;
        }
        .video-explanation__lists .video-explanation__iframe iframe {
          width: 100%;
          border-radius: 6px;
          border: none;
          max-height: 298px;
        }
        .video-explanation__bgr {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .video-explanation__lists ul,
        .video-explanation__lists ol,
        .video-explanation__description p {
          color: #333f48;
          font-family: 'Roboto';
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          margin: 0;
        }
        .video-explanation__lists ol {
          padding-left: 5px;
        }
        .video-explanation__lists ul {
          padding-left: 30px;
          list-style: disc;
        }
        @media (max-width: 768px) {
          #videoExplanation {
            margin-top: 40px;
          }
          .video-explanation__link {
            padding: 14px;
          }
          .video-explanation__lists {
            padding: 0 14px 14px;
          }
          .video-explanation__description {
            max-width: 311px;
          }
          .video-explanation__lists .video-explanation__iframe iframe {
            max-height: 147px;
            height: 100%;
          }
        }
      </style>
    `
    const videoBoxHtml = /* HTML */ `
      <section id="videoExplanation">
        ${videoBoxStyle}
        <div class="esim-compatible-inner">
          <div class="video-explanation__block">
            <div class="video-explanation__link active_var">
              <p>Learn how to activate your eSIM</p>
              <span class="video-explanation__icon">
                <span class="video-explanation__closed">+</span>
                <span class="video-explanation__opened">${icons.minus}</span>
              </span>
            </div>
            <div class="video-explanation__lists">
              <div class="video-explanation__iframe">
                <!-- <div class="video-explanation__bgr"></div> -->
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/OpbckLzqF-s?si=5tiqW6esFdUfkKDw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video-explanation__description">
                <p>Detailed eSIM Activation Guide</p>
                <ol>
                  <li>
                    Access Your eSIM Settings:
                    <ul>
                      <li>Navigate to your phone's 'Settings.'</li>
                      <li>Tap on 'Cellular' or 'Mobile Data,' then select 'Add Data Plan' or 'Add eSIM.'</li>
                    </ul>
                  </li>
                  <li>
                    Scan Your QR Code:
                    <ul>
                      <li>Locate the QR code in the email we sent you.</li>
                      <li>
                        Use your phone's camera to scan the QR code. Make sure to position the camera directly over the
                        code so it's clearly visible.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Finalize Activation:
                    <ul>
                      <li>
                        Once your phone reads the QR code, a confirmation message will appear asking you to confirm the
                        eSIM profile installation.
                      </li>
                      <li>Confirm and wait for the activation to complete, which may take a few moments.</li>
                      <li>After activation, label your new plan (for example, "Travel eSIM") for easy management.</li>
                      <li>Turn on 'Data Roaming' if you're traveling, to connect to the local network.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
    waitForElement('#shopify-section-esim-compatible').then(i => {
      if (!$el('#videoExplanation')) {
        this.insert(videoBoxHtml, '#shopify-section-esim-compatible', 'beforebegin')
      }
    })

    waitForElement('#videoExplanation').then(el => {
      this.onClickVideoExplanationBlock()
    })
  }
  onClickVideoExplanationBlock() {
    jQuery('.video-explanation__link').click(function (e) {
      pushDataLayer(
        'exp_pdp_enhanc_accor_pdpeuukactiv_lear',
        'Learn how to activate your eSIM',
        'Accordion',
        'PDP Europe & UK eSIM (50 Countries)'
      )
      jQuery(this).toggleClass('active_var')
      jQuery(this).closest('li').toggleClass('active_var')
      jQuery(this).next('.video-explanation__lists').slideToggle()
      if (jQuery('.video-explanation__link').not(this)) {
        jQuery('.video-explanation__link').not(this).removeClass('active_var')
        jQuery('video-explanation__link').not(this).closest('li').removeClass('active_var')
      }
    })

    // waitForElement('.video-explanation__iframe iframe').then(i => {
    //   i.addEventListener('click', () => {
    //     pushDataLayer(
    //       'exp_pdp_enhanc_play_pdpeuukactiv_video',
    //       'Video',
    //       'Play',
    //       'PDP Europe & UK eSIM (50 Countries) Learn how to activate your eSIM'
    //     )
    //   })
    // })
  }
  newBtnSelectPlan() {
    const btnSelectPlanStyle = /* HTML */ `
      <style>
        .select-plan__wrapper {
          max-width: 356px;
          width: 100%;
          margin: 30px auto 0;
        }
        .select-plan__btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px 0px;
          margin: 0;
          width: 100%;
          height: 48px;
          border-radius: 5px;
          border: 1px solid #188ff8;
          background: #188ff8;
          box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
          cursor: pointer;
          color: #fff;
          font-family: Poppins;
          font-size: 16px;
          font-weight: 500;
          line-height: normal;
        }
        .section-review .select-plan__wrapper {
          margin-top: 50px;
        }
        .esim-work-wrapper .select-plan__wrapper {
          margin-top: 26px;
        }
        @media (max-width: 768px) {
          .select-plan__wrapper {
            max-width: 90%;
          }
          #shopify-section-sim-works .select-plan__wrapper {
            margin-top: 32px;
          }
          .section-review .select-plan__wrapper {
            margin-top: 40px;
          }
          .faq-action .Button {
            max-width: unset;
            width: initial;
          }
        }
      </style>
    `
    const btnSelectPlanHtml = /* HTML */ `
      <div class="select-plan__wrapper">
        ${btnSelectPlanStyle}
        <button data-cta class="select-plan__btn">Select Plan</button>
      </div>
    `

    waitForElement('.esim-work-around').then(i => {
      if (!$el('#shopify-section-sim-works .select-plan__wrapper')) {
        this.insert(btnSelectPlanHtml, '.esim-work-around', 'afterend')
      }
    })
    waitForElement('.esim-compatible-wrapper').then(i => {
      if (!$el('.esim-compatible-wrapper .select-plan__wrapper')) {
        this.insert(btnSelectPlanHtml, '.esim-compatible-wrapper')
      }
    })
    waitForElement('.why-esim-wrapper').then(i => {
      if (!$el('.why-esim-wrapper .select-plan__wrapper')) {
        this.insert(btnSelectPlanHtml, '.why-esim-wrapper')
      }
    })
    waitForElement('.section-review').then(i => {
      if (!$el('.section-review .select-plan__wrapper')) {
        this.insert(btnSelectPlanHtml, '.section-review')
      }
    })

    waitForElement('[data-cta]').then(i => {
      this.onClickBtnSelectPlan()
    })
  }
  onClickBtnSelectPlan() {
    const btnSelectPlan = $$el('[data-cta]')
    btnSelectPlan?.forEach(item => {
      item.addEventListener('click', e => {
        if (!e.target.getAttribute('data-test')) {
          if (e.target.closest('#shopify-section-sim-works')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_pdpeuuk_sel1',
              'Select Plan 1',
              'Button',
              'PDP Europe & UK eSIM (50 Countries) Under block How do eSIMs work?'
            )
          }
          if (e.target.closest('.esim-compatible-wrapper')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_pdpeuuk_sel2',
              'Select Plan 2',
              'Button',
              'PDP Europe & UK eSIM (50 Countries) Under block Is my device eSIM compatible?'
            )
          }
          if (e.target.closest('.why-esim-wrapper')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_pdpeuuk_sel3',
              'Select Plan 3',
              'Button',
              'PDP Europe & UK eSIM (50 Countries) Under block Why Simify eSIMs?'
            )
          }
          if (e.target.closest('.section-review')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_pdpeuuk_sel4',
              'Select Plan 4',
              'Button',
              'PDP Europe & UK eSIM (50 Countries) Footer'
            )
          }
          let coverageElem = $el('.Product__InfoWrap .ProductForm')

          if (window.innerWidth > 768) {
            checkScrollPosition(140, coverageElem)
          } else {
            checkScrollPosition(120, coverageElem)
          }
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
  newBtnLearnMoreAboutHowToActivate() {
    const btnLearnMoreAboutHowToActivateStyle = /* HTML */ `
      <style>
        .learn-more__btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 356px;
          width: 100%;
          border-radius: 6px;
          background: #eef4fc;
          padding: 8px 12px;
          margin: 30px auto 0;
          cursor: pointer;
          color: #333f48;
          font-family: Poppins;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          text-decoration-line: underline;
        }
        @media (max-width: 768px) {
          .learn-more__btn {
            margin-top: 12px;
          }
          .learn-more__list {
            padding-inline-start: 25px;
          }
          .learn-more__body {
            max-height: 401px;
          }
          .learn-more__bgr {
            background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
          }
        }
      </style>
    `
    const btnLearnMoreAboutHowToActivateHtml = /* HTML */ `
      ${btnLearnMoreAboutHowToActivateStyle}
      <div data-learnmore class="learn-more__btn">${icons.tabler}Learn more about how to activate</div>
    `

    if (!$el('#shopify-section-sim-works .learn-more__btn')) {
      this.insert(btnLearnMoreAboutHowToActivateHtml, '.esim-work-inner', 'afterend')
    }

    const btnLearnMoreAboutHowToActivate = $$el('[data-learnMore]')
    btnLearnMoreAboutHowToActivate?.forEach(item => {
      item.addEventListener('click', e => {
        if (!e.target.getAttribute('data-test')) {
          pushDataLayer(
            'exp_pdp_enhanc_link_learn_how_activate',
            'Learn more about how to activate',
            'Link',
            'PDP Europe & UK eSIM (50 Countries) Footer'
          )
          this.showLearnMoreAboutHowToActivate()
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
  showLearnMoreAboutHowToActivate() {
    const learnMorePopupStyle = /* HTML */ `
      <style>
        .learn-more__popup {
          position: relative;
          display: flex;
          flex-direction: column;
          background: #fff;
          gap: 25px;
        }
        .learn-more__header {
          text-align: center;
          max-width: 243px;
          margin: 0 auto;
          padding: 20px 22px 0;
        }
        .learn-more__header h2 {
          color: #333f48;
          font-family: 'Poppins';
          font-size: 24px;
          font-weight: 700;
          line-height: 28.8px;
        }
        .learn-more__body {
          padding: 0 12px 20px 22px;
          margin-right: 6px;
          overflow-y: scroll;
          max-height: 345px;
          color: #333f48;
          font-family: 'Roboto';
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }
        .learn-more__body::-webkit-scrollbar {
          width: 4px;
        }
        .learn-more__body::-webkit-scrollbar-thumb {
          border-radius: 20px;
          background: #ebeced;
        }
        .learn-more__steps {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .learn-more__steps > li {
          margin-bottom: 20px;
        }
        .learn-more__list {
          list-style: inside;
          list-style-position: initial;
          padding-inline-start: 29px;
        }
        .learn-more__details {
          list-style: inside;
          list-style-position: initial;
          padding-inline-start: 23px;
        }
        .learn-more__bgr {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 22px;
          border-radius: 6px;
          background: linear-gradient(170deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
        }

        @media (max-width: 768px) {
          .learn-more-backdrop .new-popup {
            top: 130px;
          }
          .learn-more-backdrop .new-popup__close {
            top: -105px;
          }
        }
      </style>
    `
    const learnMorePopup = /* HTML */ `
      ${learnMorePopupStyle}
      <div class="learn-more__popup">
        <div class="learn-more__header"><h2>How to activate your eSIM</h2></div>
        <div class="learn-more__body">
          <ol class="learn-more__steps">
            <li>
              <b>✅ Step 1: Check Compatibility</b>
              <ul class="learn-more__list">
                <li>Ensure your device supports eSIM and is unlocked.</li>
                <li>Connect to a stable Wi-Fi or data network.</li>
              </ul>
            </li>
            <li>
              <b> 📥 Step 2: Install Your eSIM</b>
              <ul class="learn-more__list">
                <li><b>QR Code Scan:</b> Use the QR code from your eSIM email.</li>
                <li>
                  <b>Manual Installation:</b> If QR scan fails,
                  <ul class="learn-more__details">
                    <li>iOS: Settings > Cellular/Mobile Data > Add eSIM > Enter Details Manually.</li>
                    <li>
                      Android: Settings > Connections > SIM Manager > Add Mobile/eSIM Plan > Enter Details Manually.
                    </li>
                  </ul>
                </li>
                <li>Enter details provided in your email.</li>
              </ul>
            </li>
            <li>
              <b>⚡️ Step 3: Activate Your eSIM</b>
              <ul class="learn-more__list">
                <li>After arriving, set eSIM as primary data source.</li>
                <li>Disable Auto Data Switching.</li>
                <li>Enable eSIM and turn on Data Roaming.</li>
                <li>Restart your device.</li>
              </ul>
            </li>
          </ol>
          <p>Simple, fast, and ready for your travels!</p>
        </div>
        <div class="learn-more__bgr"></div>
      </div>
    `
    this.handleShowPopup(learnMorePopup, 'learnMorePopup')
  }
  reDesignHero() {
    const bgr = /* HTML */ `
      <div class="hero-img__brg">
        <style>
          @media (min-width: 768px) {
            .mobile_img-esim {
              position: relative;
              display: block;
            }
            .mobile_img-esim img {
              height: 388px;
            }
            .hero-img__brg {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 89.32%);
              backdrop-filter: blur(2.5px);
              z-index: 1;
            }
          }
        </style>
      </div>
    `

    if (window.innerWidth > 768) {
      if (!$el('.hero-img__brg')) {
        this.insert(bgr, '.mobile_img-esim', 'afterbegin')
      }
    }

    const newWrapHeroStyles = /* HTML */ `
      <style>
        @media (min-width: 768px) {
          .new_Product_Wrapper {
            max-width: 874px;
            margin: -300px auto 0;
            border-radius: 12px;
            background: #fff;
            box-shadow: 0px -16px 28px 0px rgba(0, 0, 0, 0.08);
            z-index: 1;
            display: block;
            position: relative;
            padding: 50px 50px 20px;
          }
        }
        .Product {
          margin: 0 0 50px;
          max-width: 100%;
        }
        .new_Product-inner {
          flex-direction: column;
          margin: 0;
          gap: 50px;
          flex-wrap: inherit;
        }
        .new_pro-conent,
        .new_pro-grid {
          padding-left: 0;
        }
        /*newWrapHero */
        .hero-header {
          display: flex;
          gap: 30px;
        }
        .hero-header__img {
          max-width: 107px;
          max-height: 107px;
          height: 100%;
          width: 100%;
        }
        .hero-header__img .Image--lazyLoaded.Image--fadeIn {
          opacity: 1;
          border-radius: 6px;
        }
        .hero-header__img .Product__Gallery {
          margin: 0;
        }
        .hero-header__img .Product__Gallery .flickity-viewport {
          height: 107px !important;
        }
        .hero-header .pro_subtitle {
          margin-bottom: 10px;
        }
        .hero-header .ProductMeta__Title.Heading.u-h2 {
          color: #333f48;
          font-family: Poppins;
          font-size: 38px;
          font-weight: 700;
          line-height: 44px;
        }
        .hero-header span.stamped-product-reviews-badge {
          margin-top: 10px;
        }
        .hero-header span.stamped-badge-caption {
          color: #333f48;
          font-family: Poppins;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          text-decoration-line: underline;
        }
        .hero-body {
          display: flex;
          justify-content: space-between;
          gap: 60px;
        }
        .hero-body .new_pro-grid .Product__InfoWrap {
          margin: 0;
          padding: 0;
          background: unset;
          box-shadow: none;
        }
        .hero-body .new_pro-grid .ProductForm__Variants {
          margin: 0;
        }
        .hero-body .new_pro-grid .Product__InfoWrap .ProductForm__AddToCart {
          width: 100%;
          margin: 23px 0 0;
        }
        .hero-body .ProductForm__QuantitySelector {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          margin: 5px 0 0;
          width: 100%;
        }
        .hero-body .new_pro-grid .QuantitySelector {
          border-radius: 6px;
          background: #eef4fc;
          border: none;
          max-width: 104px;
          padding: 4px;
          width: 100%;
        }
        .hero-body .new_pro-grid .QuantitySelector__Button {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #fff;
          box-shadow:
            0px 4px 8px 0px rgba(0, 0, 0, 0.06),
            0px 0px 4px 0px rgba(0, 0, 0, 0.04);
          max-width: 30px;
          max-height: 30px;
          width: 100%;
          height: 100%;
          padding: 0;
          border: none;
          overflow: hidden;
          color: #333f48;
          font-family: Poppins;
          font-size: 17px;
          font-weight: 500;
          line-height: 20px;
        }
        .hero-body .new_pro-grid .QuantitySelector__CurrentQuantity {
          height: 100%;
        }
        .hero-body .comp-esim {
          display: none;
        }
        .hero-body .esim-tabs {
          margin-bottom: 30px;
          gap: 8px;
        }
        .hero-body .esim-tabs .tab-link {
          margin: 0;
          padding: 0;
          border-radius: 6px;
          border: 2px solid transparent;
          padding: 10px;
          color: rgba(51, 63, 72, 0.4);
          font-family: 'Poppins';
          font-size: 14px;
          font-weight: 700;
          line-height: 23px;
        }
        .hero-body .esim-tabs .tab-link.current {
          border-radius: 4px;
          background: rgba(51, 63, 72, 0.1);
          color: #333f48;
        }
        .hero-body .pro_tab-content {
          display: flex;
          flex-direction: column;
          max-width: 357px;
          padding: 0;
          gap: 20px;
          color: #333f48;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
        }
        .hero-body .pro_tab-content p {
          margin: 0;
        }
        .hero-body .product_text:not(.large__hide) {
          max-width: 312px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 18px auto 0;
        }
        .hero-body .product_text li {
          margin: 0;
        }
        .hero-body .product_text li:nth-child(1),
        .hero-body .product_text li:nth-child(2) {
          width: 45%;
        }
        .hero-body .product_text li:nth-child(3) {
          width: 100%;
          border-top: 1px dashed rgba(51, 63, 72, 0.2);
          padding-top: 12px;
          margin-top: 12px;
        }
        .hero-body .new_pro-grid .ProductForm__Variants .SizeSwatchList .HorizontalList__Item {
          display: flex;
          flex-direction: column;
        }
        .new_pro-grid .ProductForm__Variants .HorizontalList--spacingTight .HorizontalList__Item .SizeSwatch {
          justify-content: space-between;
          padding: 10px 26px 13px 57px;
        }
        .new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList label span {
          color: #333f48;
        }
        .new_pro-grid .ProductForm__Variants .SizeSwatch > div:nth-of-type(1) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 150px;
          width: 100%;
          margin-right: 2px;
          flex-direction: row-reverse;
          gap: 30px;
        }
        .new_pro-grid .ProductForm__Variants .SizeSwatch > div:nth-of-type(1) p {
          color: #333f48;
          font-family: 'Poppins';
          font-size: 24px;
          font-weight: 600;
          line-height: 33px;
          text-transform: uppercase;
          margin: 0;
        }
        .new_pro-grid .ProductForm__Variants .SizeSwatch > div:nth-of-type(1) span {
          color: rgba(51, 63, 72, 0.8);
          font-family: 'Poppins';
          font-size: 14px;
          font-weight: 500;
          line-height: 23px;
          margin: 0;
        }
        .new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList label:before {
          transform: unset;
          top: 24px;
        }
        .new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList input[type='radio']:checked + label:after,
        .new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList label:after {
          transform: unset;
          top: 30px;
        }
        .cstm-tag_wrapp {
          border-radius: 4px;
          background: #188ff8;
          padding: 2px 6px;
        }
        .cstm-tag {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          color: #fff;
          border: none;
          border-radius: unset;
          text-align: center;
          font-family: 'Poppins';
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          padding: 0;
          margin: 0;
          text-transform: initial;
        }
        @media (max-width: 768px) {
          .new_Product_Wrapper {
            margin: 20px auto 0;
            padding: 0 20px;
          }
          .new_Product-inner {
            gap: 20px;
            margin-bottom: 30px;
          }
          .Product {
            margin: 0 0 40px;
          }
          .esim-tabs {
            margin-bottom: 24px;
            justify-content: space-between;
          }
          .esim-tabs .tab-link {
            margin: 0 !important;
            padding: 11px;
          }
          .pro_tab-content {
            padding: 0;
          }
          .hero-header {
            gap: 0;
            flex-direction: column;
          }
          .hero-header .ProductMeta__Title.Heading.u-h2 {
            font-size: 26px;
            line-height: 32px;
          }
          .hero-header span.stamped-product-reviews-badge {
            margin-top: 8px;
          }
          .hero-header__img,
          .hero-header .pro_subtitle,
          .product_text.large__hide {
            display: none;
          }
          .hero-body {
            gap: 27px;
            flex-direction: column;
          }
          .hero-body .new_pro-grid .QuantitySelector {
            margin-right: 10px;
          }
          .new_pro-grid .ProductForm__Variants .SizeSwatchList .HorizontalList__Item {
            margin-bottom: 16px;
          }
          .new_pro-grid .ProductForm__Variants .HorizontalList--spacingTight .HorizontalList__Item .SizeSwatch {
            padding: 10px 16px 13px 48px;
          }
          .new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList label:before {
            left: 16px;
          }
          .new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList label:after,
          .new_pro-grid
            .ProductForm__Variants
            .SizeSwatchList.HorizontalList
            input[type='radio']:checked
            + label:after {
            left: 22px;
          }
          .cstm-tag_wrapp {
            top: -12px;
          }
          .hero-body .product_text {
            margin-top: 14px;
          }
          .hero-body .product_text li:nth-child(3) {
            margin-top: 14px;
            padding-top: 14px;
            border-top: 1px solid rgba(51, 63, 72, 0.2);
          }
          .hero-body .new_pro-grid .Product__InfoWrap .ProductForm__AddToCart {
            padding: 11px;
            margin: 0;
          }
          .hero-body .mob-bgr-wrapper {
            width: 112%;
            background: #eef4fc;
            padding: 18px 20px;
            margin: 20px -20px 0;
          }
        }
      </style>
    `

    const newWrapHero = /* HTML */ `
      ${newWrapHeroStyles}
      <div class="hero-header">
        <div class="hero-header__img"></div>
        <div class="hero-header__name"></div>
      </div>
      <div class="hero-body"></div>
    `

    const txtQuantity = /* HTML */ `
      <style>
        .txt-quantity {
          max-width: 229px;
          color: #333f48;
          font-family: Poppins;
          font-size: 13px;
          font-weight: 500;
          line-height: 20px;
          margin: 0;
        }
      </style>
      <p class="txt-quantity">
        Travelling in a group? <br />
        Order eSIMs for everyone
      </p>
    `

    const isMyDeviceCompatibleBlock = /* HTML */ `
      <style>
        .is-my-device-compatible__block {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          gap: 10px;
          border-radius: 6px;
          background: #eef4fc;
          padding: 12px;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .is-my-device-compatible__block p {
          color: #333f48;
          font-family: 'Poppins';
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          text-decoration-line: underline;
        }
        @media (max-width: 768px) {
          .is-my-device-compatible__block {
            margin: 0;
          }
        }
      </style>
      <div class="is-my-device-compatible__block">
        ${icons.infoCircle}
        <p>Is my device compatible with eSIM?</p>
      </div>
    `

    const itWorkInBlock = /* HTML */ `
      <style>
        .it-work-in__wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          border-radius: 6px;
          background: #eef4fc;
          padding: 12px;
          margin-top: 32px;
          cursor: pointer;
        }
        .it-work-in__wrapper p {
          color: #333f48;
          font-family: 'Poppins';
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          text-decoration-line: underline;
        }
        @media (max-width: 768px) {
          .it-work-in__wrapper {
            margin-top: 28px;
          }
        }
      </style>
      <div class="it-work-in__wrapper">
        ${icons.world}
        <p>See what countries it work in</p>
      </div>
    `

    const bestValueTxt = '🔥Best value'

    waitForElement('.new_Product-inner').then(i => {
      if (!$el('.hero-header')) {
        this.insert(newWrapHero, '.new_Product-inner', 'afterbegin')
      }
    })

    waitForElement('.hero-header').then(el => {
      waitForElement('.new_pro-grid .ProductItem__Wrap .Product__Gallery').then(i => {
        this.insertElem(i, '.hero-header__img')
      })
      waitForElement('.pro_subtitle').then(i => {
        this.insertElem(i, '.hero-header__name')
      })
      waitForElement('.new_pro-conent .ProductMeta__Title').then(i => {
        this.insertElem(i, '.hero-header__name', 'beforeend')
      })
      waitForElement('span.stamped-product-reviews-badge').then(i => {
        this.insertElem(i, '.hero-header__name', 'beforeend')
      })
    })
    waitForElement('.hero-body').then(el => {
      waitForElement('.new_pro-conent').then(i => {
        this.insertElem(i, '.hero-body', 'beforeend')
      })
      waitForElement('.new_pro-grid').then(i => {
        this.insertElem(i, '.hero-body', 'beforeend')
      })
      waitForElement('.new_pro-conent').then(i => {
        if (!$el('.is-my-device-compatible__block')) {
          this.insert(isMyDeviceCompatibleBlock, '.new_pro-conent', 'afterbegin')
        }
      })
      waitForElement('.link_Coverage').then(i => {
        if (!$el('.it-work-in__wrapper')) {
          this.insert(itWorkInBlock, '#tab-1', 'beforeend')
        }
      })

      if (window.innerWidth > 768) {
        waitForElement('.product_text').then(i => {
          this.insertElem(i, '.new_pro-grid', 'beforeend')
        })
      } else {
        waitForElement('.Product__InfoWrap form').then(i => {
          if (!$el('.mob-bgr-wrapper')) {
            this.insert(`<div class="mob-bgr-wrapper"></div>`, '.Product__InfoWrap form', 'beforeend')
          }
        })
        waitForElement('.mob-bgr-wrapper').then(i => {
          waitForElement('[data-action="add-to-cart"]').then(i => {
            this.insertElem(i, '.mob-bgr-wrapper', 'beforeend')
          })
          waitForElement('.product_text').then(i => {
            this.insertElem(i, '.mob-bgr-wrapper', 'beforeend')
          })
        })
      }

      waitForElement('.ProductForm__QuantitySelector').then(i => {
        if (!$el('.txt-quantity')) {
          this.insert(txtQuantity, '.ProductForm__QuantitySelector', 'afterbegin')
        }
      })

      waitForElement('.it-work-in__wrapper').then(el => {
        this.onClickItWorkInBlock(el)
      })
      waitForElement('.is-my-device-compatible__block').then(el => {
        this.onClickIsMyDeviceCompatibleBlock(el)
      })
      waitForElement('.stamped-product-reviews-badge').then(el => {
        this.onClickStampedReviewsBlock(el)
      })
      //

      waitForElement('.cstm-tag').then(el => {
        if (el.textContent !== bestValueTxt) {
          el.textContent = bestValueTxt
        }
      })

      this.onChangeTxtMainBtn()

      this.newInfoElemForInput()
    })
  }
  onChangeTxtMainBtn() {
    waitForElement('[data-action="add-to-cart"]').then(el => {
      if (el.textContent !== this.buyNowTxt) {
        el.textContent = this.buyNowTxt
      }
    })

    waitForElement('.product_fix_bar_inner a.Button').then(el => {
      if (el.textContent !== this.buyNowTxt) {
        el.textContent = this.buyNowTxt
      }
    })
  }
  newInfoElemForInput() {
    const infoElem = /* HTML */ `
      <style>
        .info-elem {
          display: none;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          padding: 3px;
          border-radius: 0px 0px 6px 6px;
          border-top: 1px solid rgba(51, 63, 72, 0.2);
          background: #fff;
          color: #333f48;
          text-align: center;
          font-family: 'Poppins';
          font-size: 12px;
          font-weight: 500;
          line-height: 20px;
          text-transform: uppercase;
        }
        .new_pro-grid
          .ProductForm__Variants
          .SizeSwatchList.HorizontalList
          input[type='radio']:checked
          + label
          .info-elem {
          border-top: none;
          background: #fed786;
        }
      </style>
      <div class="info-elem">Unlimited local calls and texts included!</div>
    `
    const variantItem = $$el('.new_pro-grid .ProductForm__Variants label.SizeSwatch')
    variantItem?.forEach(i => {
      if (!i.querySelector('.info-elem')) {
        i.insertAdjacentHTML('beforeend', infoElem)
      }
    })
  }
  onClickItWorkInBlock(el) {
    el.addEventListener('click', e => {
      if (!e.target.getAttribute('data-test')) {
        pushDataLayer(
          'exp_pdp_enhanc_link_see_what_count_work',
          'See what countries it work in',
          'Link',
          'PDPEurope & UK eSIM(50 Countries)Footer'
        )
        let coverageElem = $el('.link_Coverage')

        checkScrollPosition(130, coverageElem)
        coverageElem?.click()
      }
      e.target.setAttribute('data-test', '1')
      setTimeout(() => {
        if (e.target.getAttribute('data-test')) {
          e.target.removeAttribute('data-test')
        }
      }, 1000)
    })
  }
  onClickIsMyDeviceCompatibleBlock(el) {
    el.addEventListener('click', e => {
      if (!e.target.getAttribute('data-test')) {
        e.preventDefault()
        e.stopPropagation()
        setLocalStorage('onClickIsMyDeviceCompatibleBlock', `yes`)
        pushDataLayer(
          'exp_pdp_enhanc_link_is_device_compat',
          'Is my device compatible with eSIM?',
          'Link',
          'PDP Europe & UK eSIM (50 Countries) Footer'
        )
        let coverageElem = $el('#shopify-section-esim-compatible')

        checkScrollPosition(130, coverageElem)
        setTimeout(() => {
          removeLocalStorage('onClickIsMyDeviceCompatibleBlock')
        }, 1000)
      }
      e.target.setAttribute('data-test', '1')
      setTimeout(() => {
        if (e.target.getAttribute('data-test')) {
          e.target.removeAttribute('data-test')
        }
      }, 1000)
    })
  }
  onClickQuantitySelectorBtn() {
    waitForElement('.hero-body').then(i => {
      waitForElement('.QuantitySelector').then(i => {
        const quantitySelectorBtn = $$el('.hero-body .new_pro-grid .QuantitySelector__Button')

        let atr = ''
        quantitySelectorBtn?.forEach(btn => {
          btn.addEventListener('click', e => {
            if (!e.target.getAttribute('data-test') && !$el('.product_fix_bar.active')) {
              if (e.target.getAttribute('data-action') === 'decrease-quantity') {
                atr = 'minus'
              }
              if (e.target.getAttribute('data-action') === 'increase-quantity') {
                atr = 'plus'
              }
              pushDataLayer(
                'exp_pdp_enhanc_clic_pdpeuuk_buttit',
                atr,
                'Click',
                'PDP Europe & UK eSIM (50 Countries) Travelling in a group?  Order eSIMs for everyone'
              )
            }
            e.target.setAttribute('data-test', '1')
            setTimeout(() => {
              if (e.target.getAttribute('data-test')) {
                e.target.removeAttribute('data-test')
              }
            }, 1000)
          })
        })
      })
    })
  }
  onVisibleStickyBanner() {
    waitForElement('[data-action="add-to-cart"]').then(i => {
      const element = i
      let top = 80

      if (window.innerWidth < 768) {
        top = 50
      }

      function visible(target) {
        if (target.getBoundingClientRect().top < top) {
          $el('.product_fix_bar').classList.add('new_active')
        } else {
          if ($el('.product_fix_bar').classList.contains('new_active')) {
            $el('.product_fix_bar').classList.remove('new_active')
          }
        }
      }

      window.addEventListener('scroll', function () {
        visible(element)
      })

      visible(element)
    })
  }
  onClickStampedReviewsBlock(el) {
    el.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      if (!e.target.getAttribute('data-test')) {
        setLocalStorage('onClickStampedReviewsBlock', `yes`)
        pushDataLayer('exp_pdp_enhanc_link_reviews', 'Reviews', 'Link', 'PDP Europe & UK eSIM (50 Countries) Footer')

        let coverageElem = $el('.section-review')

        checkScrollPosition(130, coverageElem)
        setTimeout(() => {
          removeLocalStorage('onClickStampedReviewsBlock')
        }, 1000)
      }
      e.target.setAttribute('data-test', '1')
      setTimeout(() => {
        if (e.target.getAttribute('data-test')) {
          e.target.removeAttribute('data-test')
        }
      }, 1000)
    })
  }
  onClickSizeSwatchLinkBtn() {
    waitForElement('.hero-body').then(i => {
      waitForElement('.ProductForm__Variants').then(i => {
        const quantitySelectorBtn = $$el(
          '.new_pro-grid .ProductForm__Variants .SizeSwatchList.HorizontalList--spacingTight input[type="checkbox"]'
        )

        quantitySelectorBtn?.forEach(btn => {
          btn.addEventListener('click', e => {
            if (!e.target.getAttribute('data-test')) {
              pushDataLayer(
                'exp_pdp_enhanc_button_esim_item',
                `${e.target.value}`,
                'Button',
                'PDP Europe & UK eSIM (50 Countries) Footer'
              )
            }
            e.target.setAttribute('data-test', '1')
            setTimeout(() => {
              if (e.target.getAttribute('data-test')) {
                e.target.removeAttribute('data-test')
              }
            }, 3000)
          })
        })
      })
    })
  }
  initMutationObserver() {
    let observer = new MutationObserver(() => {
      if (document) {
        observer.disconnect()

        this.onChangeTxtMainBtn()

        observer.observe(document, {
          childList: true,
          subtree: true
        })
      }
    })

    observer.observe(document, {
      childList: true,
      subtree: true
    })
  }

  // common func
  createPopup() {
    const popupStyle = /* HTML */ `
      <style>
        .new-popup-backdrop {
          background: rgba(39, 48, 56, 0.65);
          backdrop-filter: blur(5px);
          position: fixed;
          opacity: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000000000000;
          transition: all 0.8s ease 0s;
        }
        .new-popup-backdrop.is-hidden {
          opacity: 0;
          pointer-events: none;
        }
        .new-popup {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-width: 500px;
          width: calc(100% - 32px);
          background: #eef4fc;
        }
        .new-popup__close {
          position: absolute;
          background: none;
          padding: 0;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          z-index: 1;
        }
        .new-popup__close:hover,
        .new-popup__close:focus {
          background: none;
        }
        @media (max-width: 768px) {
          .new-popup {
            max-width: 335px;
            top: 80px;
            transform: translateX(-50%);
          }
          .new-popup__close {
            top: -50px;
            right: 0;
          }
        }
      </style>
    `
    const popup = /* HTML */ `
      ${popupStyle}
      <div class="new-popup-backdrop is-hidden">
        <div class="new-popup">
          <button class="new-popup__close" data-popup="close">${icons.close}</button>
          <div class="new-popup__content"></div>
        </div>
      </div>
    `

    if (!$el('.new-popup-backdrop')) {
      this.insert(popup, 'body', 'afterbegin')
    }
    waitForElement('.new-popup-backdrop').then(el => {
      this.handleClosePopup()
    })
  }
  handleShowPopup(content, name) {
    const isShowed = getSessionStorage(name)
    if (isShowed) return

    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup .new-popup__content')

    if (backdrop.classList.contains('is-hidden')) {
      backdrop.classList.remove('is-hidden')
    }
    body.style.overflow = 'hidden'
    popup.innerHTML = content
    setSessionStorage(name, 'yes')
    if (name === 'discountPopup') {
      checkFocusTime(
        '.discount__popup',
        'exp_pdp_enhanc_vis_expopup_elem',
        'Exit intent pop-up Wait! Don’t leave without staying connected!'
      )
      this.copyDiscount()
    }
    if (name === 'learnMorePopup') {
      checkFocusTime('.learn-more__popup', 'exp_pdp_enhanc_vis_act_esim_popup_elem', 'Popup How to activate your eSim')
      if (!backdrop.classList.contains('learn-more-backdrop')) {
        backdrop.classList.add('learn-more-backdrop')
      }
    }

    this.handleClosePopup()
  }
  handleClosePopup() {
    const body = $el('body'),
      backdrop = $el('.new-popup-backdrop'),
      popup = $el('.new-popup'),
      closePopupBtns = popup.querySelectorAll('[data-popup="close"]')
    closePopupBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        if (!e.target.getAttribute('data-test')) {
          backdrop.classList.add('is-hidden')
          body.style.overflow = 'initial'
          removeSessionStorage('learnMorePopup')
          if (backdrop.querySelector('.discount__popup')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_expopup_clos',
              'Close',
              'Button',
              'Exit intent pop-up Wait! Don’t leave without staying connected!'
            )
          }
          if (backdrop.querySelector('.learn-more__popup')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_learn_how_activate_close',
              'Close',
              'Button',
              'Popup How to activate your eSim'
            )
          }
          setTimeout(() => {
            $el('.new-popup__content').innerHTML = ''
          }, 500)
        }
        e.target.setAttribute('data-test', '1')
        setTimeout(() => {
          if (e.target.getAttribute('data-test')) {
            e.target.removeAttribute('data-test')
          }
        }, 1000)
      })
    })
    backdrop.addEventListener('click', e => {
      if (!e.target.getAttribute('data-test')) {
        if (e.target.matches('.new-popup-backdrop')) {
          backdrop.classList.add('is-hidden')
          body.style.overflow = 'initial'
          removeSessionStorage('learnMorePopup')

          if (backdrop.querySelector('.discount__popup')) {
            pushDataLayer(
              'exp_pdp_enhanc_but_expopup_clos_overlay',
              'Close',
              'Overlay',
              'Exit intent pop-up Wait! Don’t leave without staying connected!'
            )
          }
          if (backdrop.querySelector('.learn-more__popup')) {
            pushDataLayer(
              'exp_pdp_learn_more_expopup_clos_overlay',
              'Close',
              'Overlay',
              'pop-up How to activateyour eSIM'
            )
          }

          setTimeout(() => {
            $el('.new-popup__content').innerHTML = ''
          }, 500)
        }
      }
      e.target.setAttribute('data-test', '1')
      setTimeout(() => {
        if (e.target.getAttribute('data-test')) {
          e.target.removeAttribute('data-test')
        }
      }, 1000)
    })
  }
  insertElem(html, selector, position = 'afterbegin') {
    $el(selector)?.insertAdjacentElement(position, html)
  }
  insert(html, selector, position = 'beforeend') {
    $el(selector).insertAdjacentHTML(position, html)
  }
  // common styles
  initMainStyles() {
    const mainStyles = /* HTML */ `
      <style>
        body div .kl-private-reset-css-Xuajs1 {
          display: none !important;
        }
        .dn_desk {
          display: none;
        }
        @media (max-width: 768px) {
          .dn_mob {
            display: none;
          }
          .dn_desk {
            display: block;
          }
        }
      </style>
    `
    this.insert(mainStyles, 'head')
  }

  initMainPdpStyles() {
    const mainPdpStyles = /* HTML */ `
      <style>
        /*shopify-section-esim-compatible, section-review, shopify-section-why-esim */
        .esim-compatible-wrapper,
        .section-review,
        .why-esim-wrapper {
          padding-top: 0;
          margin: 80px 0;
        }
        /* shopify-section-esim-compatible*/
        #shopify-section-esim-compatible h2.esim-title {
          margin-bottom: 22px;
        }
        #shopify-section-esim-compatible .esim-compa-tab .pro_tab-content ul {
          list-style: none;
        }
        /*shopify-section-why-esim */
        #shopify-section-why-esim h2.esim-title {
          margin-bottom: 22px;
        }
        /*shopify-section-e-sim-faq */
        #shopify-section-e-sim-faq h2.esim-title {
          margin-bottom: 24px;
        }
        #shopify-section-e-sim-faq .esim-que {
          background: #eef4fc;
        }
        /*View Full Guide */
        .faq-action .Button {
          max-width: 356px;
          height: 47px;
          width: 100%;
        }
        /* product_fix_bar */
        .product_fix_bar.new_active {
          display: block;
        }
        @media (max-width: 768px) {
          /*shopify-section-esim-compatible, section-review, shopify-section-why-esim */
          .esim-compatible-wrapper,
          .section-review,
          .why-esim-wrapper {
            margin: 40px 0;
          }
          /* shopify-section-esim-compatible*/
          #shopify-section-esim-compatible h2.esim-title {
            margin-bottom: 30px;
          }
          #shopify-section-esim-compatible .esim-compa-tab .pro_tab-content ul {
            list-style: circle;
          }
          /*shopify-section-e-sim-faq */
          #shopify-section-e-sim-faq h2.esim-title {
            max-width: 216px;
            width: 100%;
            margin: 0 auto 30px;
          }
        }
      </style>
    `

    this.insert(mainPdpStyles, 'head')
  }
}

new IntentPopup('/collections', 20000)
new IntentPopup('/products', 20000)
