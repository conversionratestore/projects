;(function () {
  console.log('%c EXP: Paint kits', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')
  const git = 'https://conversionratestore.github.io/projects/paintscratch/img'
  const paintItemUrl = 'https://paintscratch.com/neworder/store/item/'

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

  const device = window.innerWidth < 769 ? 'mobile' : 'desktop'

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
            'Element visibility',
            `View element on screen (${viewTime} sec or more)`,
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

  const clarityInterval = setInterval(function () {
    if (typeof clarity == 'function') {
      clearInterval(clarityInterval)
      clarity('set', 'paint_kits', 'variant_1')
    }
  }, 1000)

  const imgSvg = {
    shipping: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_1109_1903)">
    <path d="M23.776 12.8989L21.8548 8.67234C21.6955 8.32311 21.4393 8.02698 21.1166 7.81915C20.7939 7.61132 20.4183 7.50055 20.0345 7.5H16.5001V6C16.4997 5.60231 16.3415 5.22103 16.0603 4.93982C15.7791 4.65861 15.3978 4.50043 15.0001 4.5H2.50007C2.10238 4.50043 1.7211 4.65861 1.43989 4.93982C1.15868 5.22103 1.00051 5.60231 1.00007 6V12C0.999433 12.0661 1.01189 12.1316 1.03673 12.1928C1.06157 12.2541 1.0983 12.3097 1.14479 12.3567C1.19129 12.4036 1.24662 12.4409 1.3076 12.4663C1.36858 12.4918 1.43399 12.5049 1.50007 12.5049C1.56614 12.5049 1.63155 12.4918 1.69253 12.4663C1.75351 12.4409 1.80884 12.4036 1.85534 12.3567C1.90183 12.3097 1.93856 12.2541 1.9634 12.1928C1.98824 12.1316 2.0007 12.0661 2.00006 12V6C2.00021 5.86743 2.05293 5.74034 2.14667 5.6466C2.24041 5.55286 2.36751 5.50013 2.50007 5.49998H15.0001C15.1327 5.50013 15.2597 5.55286 15.3535 5.6466C15.4472 5.74034 15.5 5.86743 15.5001 6V14C15.4999 14.1326 15.4472 14.2596 15.3534 14.3534C15.2597 14.4471 15.1326 14.4998 15.0001 14.5H9.00009C8.86832 14.5013 8.74238 14.5545 8.64966 14.6481C8.55693 14.7418 8.50491 14.8682 8.50491 15C8.50491 15.1318 8.55693 15.2582 8.64966 15.3518C8.74238 15.4455 8.86832 15.4987 9.00009 15.5H15.0001C15.3978 15.4995 15.7791 15.3414 16.0603 15.0601C16.3415 14.7789 16.4997 14.3977 16.5001 14V8.49998H20.0345C20.2264 8.50025 20.4142 8.55563 20.5756 8.65954C20.737 8.76346 20.8652 8.91153 20.9449 9.08616L21.133 9.49997H19.0002C18.735 9.50023 18.4808 9.60567 18.2933 9.79316C18.1058 9.98064 18.0004 10.2349 18.0001 10.5V12.5C18.0003 12.7651 18.1058 13.0193 18.2933 13.2068C18.4807 13.3943 18.7349 13.4997 19.0001 13.5H22.9282C22.9736 13.64 22.9979 13.786 23.0003 13.9331V16C23.0001 16.1326 22.9473 16.2597 22.8536 16.3534C22.7598 16.4472 22.6327 16.4999 22.5001 16.5H20.9496C20.8343 15.9354 20.5275 15.428 20.0812 15.0636C19.6348 14.6992 19.0763 14.5001 18.5001 14.5001C17.9239 14.5001 17.3654 14.6992 16.919 15.0636C16.4727 15.428 16.1659 15.9354 16.0506 16.5H7.94957C7.83431 15.9354 7.52755 15.428 7.08121 15.0636C6.63486 14.6992 6.07634 14.5001 5.50012 14.5001C4.9239 14.5001 4.36538 14.6992 3.91903 15.0636C3.47269 15.428 3.16593 15.9354 3.05067 16.5H2.50007C2.36751 16.4998 2.24043 16.4471 2.1467 16.3534C2.05297 16.2596 2.00023 16.1325 2.00006 16V15.5C2.13182 15.4987 2.25776 15.4455 2.35049 15.3519C2.44321 15.2582 2.49523 15.1318 2.49523 15C2.49523 14.8682 2.44321 14.7418 2.35049 14.6482C2.25776 14.5545 2.13182 14.5013 2.00006 14.5H0.500057C0.36829 14.5013 0.242352 14.5545 0.149626 14.6482C0.0569005 14.7418 0.00488281 14.8682 0.00488281 15C0.00488281 15.1318 0.0569005 15.2582 0.149626 15.3519C0.242352 15.4455 0.36829 15.4987 0.500057 15.5H1.00007V16C1.00051 16.3977 1.15868 16.779 1.43989 17.0602C1.7211 17.3414 2.10238 17.4996 2.50007 17.5H3.05062C3.16589 18.0646 3.47264 18.572 3.91898 18.9364C4.36533 19.3009 4.92386 19.4999 5.50007 19.4999C6.07629 19.4999 6.63482 19.3009 7.08116 18.9364C7.5275 18.572 7.83426 18.0646 7.94953 17.5H16.0506C16.1659 18.0646 16.4726 18.572 16.919 18.9364C17.3653 19.3009 17.9238 19.4999 18.5001 19.4999C19.0763 19.4999 19.6348 19.3009 20.0811 18.9364C20.5275 18.572 20.8342 18.0646 20.9495 17.5H22.5001C22.8978 17.4996 23.2791 17.3414 23.5603 17.0602C23.8415 16.779 23.9997 16.3977 24.0001 16V13.9331C24.0007 13.5763 23.9242 13.2235 23.776 12.8989ZM5.50007 18.5C5.2034 18.5 4.91339 18.412 4.66672 18.2472C4.42004 18.0824 4.22778 17.8481 4.11425 17.574C4.00072 17.3 3.97102 16.9984 4.02889 16.7074C4.08677 16.4164 4.22963 16.1491 4.43941 15.9394C4.64919 15.7296 4.91647 15.5867 5.20744 15.5288C5.49841 15.471 5.80001 15.5007 6.0741 15.6142C6.34819 15.7277 6.58246 15.92 6.74728 16.1667C6.9121 16.4133 7.00007 16.7033 7.00007 17C6.99964 17.3977 6.84146 17.779 6.56025 18.0602C6.27904 18.3414 5.89776 18.4996 5.50007 18.5ZM18.5001 18.5C18.2034 18.5 17.9134 18.412 17.6667 18.2472C17.42 18.0824 17.2278 17.8481 17.1142 17.574C17.0007 17.3 16.971 16.9984 17.0289 16.7074C17.0868 16.4164 17.2296 16.1491 17.4394 15.9394C17.6492 15.7296 17.9164 15.5867 18.2074 15.5288C18.4984 15.471 18.8 15.5007 19.0741 15.6142C19.3482 15.7277 19.5824 15.92 19.7473 16.1667C19.9121 16.4133 20.0001 16.7033 20.0001 17C19.9996 17.3977 19.8415 17.779 19.5603 18.0602C19.2791 18.3414 18.8978 18.4996 18.5001 18.5H18.5001ZM19.0001 10.5H21.5873L22.4964 12.5H19.0001V10.5Z" fill="#1B3D71"/>
    <path d="M8.63554 9.25002C8.63513 8.91862 8.5033 8.60091 8.26896 8.36657C8.03463 8.13224 7.71692 8.00041 7.38552 8H6.38554C6.25292 8 6.12574 8.05268 6.03197 8.14645C5.9382 8.24022 5.88552 8.3674 5.88552 8.50002V11.5C5.88488 11.5661 5.89734 11.6316 5.92218 11.6928C5.94702 11.7541 5.98375 11.8098 6.03024 11.8567C6.07673 11.9037 6.13207 11.9409 6.19305 11.9663C6.25403 11.9918 6.31944 12.0049 6.38551 12.0049C6.45158 12.0049 6.517 11.9918 6.57798 11.9663C6.63896 11.9409 6.69429 11.9037 6.74079 11.8567C6.78728 11.8098 6.82401 11.7541 6.84885 11.6928C6.87369 11.6316 6.88615 11.5661 6.88551 11.5V10.9021L7.69691 11.8293C7.73992 11.8794 7.79245 11.9206 7.85146 11.9503C7.91047 11.9801 7.97479 11.9978 8.04071 12.0026C8.10662 12.0073 8.17282 11.9989 8.23547 11.9779C8.29813 11.9569 8.35599 11.9236 8.40572 11.8801C8.45544 11.8366 8.49605 11.7836 8.52519 11.7243C8.55432 11.665 8.57141 11.6005 8.57545 11.5345C8.5795 11.4686 8.57044 11.4025 8.54877 11.34C8.52711 11.2776 8.49329 11.2201 8.44926 11.1708L7.80055 10.4293C8.0445 10.343 8.25576 10.1834 8.40528 9.97221C8.5548 9.76104 8.63523 9.50875 8.63554 9.25002ZM7.38552 9.5H6.88555V9.00003H7.38557C7.45187 9.00003 7.51547 9.02637 7.56235 9.07326C7.60924 9.12014 7.63558 9.18373 7.63558 9.25004C7.63558 9.31635 7.60924 9.37994 7.56235 9.42682C7.51547 9.47371 7.45187 9.50005 7.38557 9.50005L7.38552 9.5Z" fill="#1B3D71"/>
    <path d="M5.00004 8.99998C5.13181 8.99871 5.25774 8.94547 5.35047 8.85184C5.4432 8.75821 5.49521 8.63177 5.49521 8.49999C5.49521 8.36822 5.4432 8.24177 5.35047 8.14814C5.25774 8.05451 5.13181 8.00128 5.00004 8H3.50004C3.36743 8 3.24026 8.05267 3.14649 8.14643C3.05272 8.2402 3.00004 8.36736 3.00002 8.49997V11.5C2.99938 11.566 3.01184 11.6316 3.03668 11.6928C3.06152 11.754 3.09825 11.8097 3.14474 11.8567C3.19124 11.9036 3.24657 11.9409 3.30755 11.9663C3.36853 11.9917 3.43395 12.0048 3.50002 12.0048C3.56609 12.0048 3.6315 11.9917 3.69248 11.9663C3.75346 11.9409 3.8088 11.9036 3.85529 11.8567C3.90178 11.8097 3.93851 11.754 3.96335 11.6928C3.98819 11.6316 4.00065 11.566 4.00001 11.5V10.5H4.75001C4.81608 10.5006 4.88161 10.4882 4.94284 10.4633C5.00406 10.4385 5.05975 10.4018 5.1067 10.3553C5.15364 10.3088 5.19091 10.2534 5.21634 10.1925C5.24177 10.1315 5.25486 10.0661 5.25486 9.99999C5.25486 9.93392 5.24177 9.86851 5.21634 9.80753C5.19091 9.74655 5.15364 9.69121 5.1067 9.64472C5.05975 9.59823 5.00406 9.5615 4.94284 9.53666C4.88161 9.51182 4.81608 9.49936 4.75001 9.5H4.00001V8.99998H5.00004Z" fill="#1B3D71"/>
    <path d="M14 8.99998C14.1318 8.99871 14.2577 8.94547 14.3504 8.85184C14.4432 8.75821 14.4952 8.63177 14.4952 8.49999C14.4952 8.36822 14.4432 8.24177 14.3504 8.14814C14.2577 8.05451 14.1318 8.00128 14 8H12.5C12.3674 8 12.2402 8.05267 12.1465 8.14643C12.0527 8.2402 12 8.36736 12 8.49997V11.5C12 11.6326 12.0527 11.7598 12.1465 11.8535C12.2402 11.9473 12.3674 12 12.5 12H14C14.1318 11.9987 14.2577 11.9455 14.3504 11.8518C14.4432 11.7582 14.4952 11.6318 14.4952 11.5C14.4952 11.3682 14.4432 11.2418 14.3504 11.1481C14.2577 11.0545 14.1318 11.0013 14 11H13V10.5H13.7387C13.8048 10.5006 13.8703 10.4882 13.9316 10.4633C13.9928 10.4385 14.0485 10.4018 14.0954 10.3553C14.1424 10.3088 14.1796 10.2534 14.2051 10.1925C14.2305 10.1315 14.2436 10.0661 14.2436 9.99999C14.2436 9.93392 14.2305 9.86851 14.2051 9.80753C14.1796 9.74655 14.1424 9.69121 14.0954 9.64472C14.0485 9.59823 13.9928 9.5615 13.9316 9.53666C13.8703 9.51182 13.8048 9.49936 13.7387 9.5H13V8.99998H14Z" fill="#1B3D71"/>
    <path d="M11.125 9.00001C11.1911 9.00065 11.2566 8.98819 11.3178 8.96335C11.3791 8.93851 11.4348 8.90178 11.4817 8.85529C11.5286 8.80879 11.5659 8.75346 11.5913 8.69248C11.6168 8.6315 11.6299 8.56609 11.6299 8.50002C11.6299 8.43394 11.6168 8.36853 11.5913 8.30755C11.5659 8.24657 11.5286 8.19124 11.4817 8.14474C11.4348 8.09825 11.3791 8.06152 11.3178 8.03668C11.2566 8.01184 11.1911 7.99938 11.125 8.00002H9.62502C9.4924 8.00002 9.36522 8.0527 9.27145 8.14647C9.17768 8.24025 9.125 8.36743 9.125 8.50004V11.5C9.12501 11.6326 9.1777 11.7598 9.27147 11.8536C9.36524 11.9473 9.49241 12 9.62502 12H11.125C11.1911 12.0006 11.2566 11.9882 11.3178 11.9633C11.3791 11.9385 11.4348 11.9018 11.4817 11.8553C11.5286 11.8088 11.5659 11.7535 11.5913 11.6925C11.6168 11.6315 11.6299 11.5661 11.6299 11.5C11.6299 11.4339 11.6168 11.3685 11.5913 11.3075C11.5659 11.2466 11.5286 11.1912 11.4817 11.1447C11.4348 11.0983 11.3791 11.0615 11.3178 11.0367C11.2566 11.0118 11.1911 10.9994 11.125 11H10.125V10.5H10.8641C10.9301 10.5006 10.9957 10.4882 11.0569 10.4633C11.1181 10.4385 11.1738 10.4018 11.2208 10.3553C11.2677 10.3088 11.305 10.2535 11.3304 10.1925C11.3558 10.1315 11.3689 10.0661 11.3689 10C11.3689 9.93394 11.3558 9.86853 11.3304 9.80755C11.305 9.74657 11.2677 9.69124 11.2208 9.64474C11.1738 9.59825 11.1181 9.56152 11.0569 9.53668C10.9957 9.51184 10.9301 9.49938 10.8641 9.50002H10.125V9.00001H11.125Z" fill="#1B3D71"/>
    <path d="M0.500057 14H3.00004C3.13181 13.9987 3.25775 13.9455 3.35047 13.8518C3.4432 13.7582 3.49522 13.6318 3.49522 13.5C3.49522 13.3682 3.4432 13.2418 3.35047 13.1481C3.25775 13.0545 3.13181 13.0013 3.00004 13H0.500057C0.36829 13.0013 0.242352 13.0545 0.149626 13.1481C0.0569005 13.2418 0.00488281 13.3682 0.00488281 13.5C0.00488281 13.6318 0.0569005 13.7582 0.149626 13.8518C0.242352 13.9455 0.36829 13.9987 0.500057 14Z" fill="#1B3D71"/>
    </g>
    <defs>
    <clipPath id="clip0_1109_1903">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    shipping2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_1109_1998)">
    <path d="M23.776 12.8989L21.8548 8.67234C21.6955 8.32311 21.4393 8.02698 21.1166 7.81915C20.7939 7.61132 20.4183 7.50055 20.0345 7.5H16.5001V6C16.4997 5.60231 16.3415 5.22103 16.0603 4.93982C15.7791 4.65861 15.3978 4.50043 15.0001 4.5H2.50007C2.10238 4.50043 1.7211 4.65861 1.43989 4.93982C1.15868 5.22103 1.00051 5.60231 1.00007 6V12C0.999433 12.0661 1.01189 12.1316 1.03673 12.1928C1.06157 12.2541 1.0983 12.3097 1.14479 12.3567C1.19129 12.4036 1.24662 12.4409 1.3076 12.4663C1.36858 12.4918 1.43399 12.5049 1.50007 12.5049C1.56614 12.5049 1.63155 12.4918 1.69253 12.4663C1.75351 12.4409 1.80884 12.4036 1.85534 12.3567C1.90183 12.3097 1.93856 12.2541 1.9634 12.1928C1.98824 12.1316 2.0007 12.0661 2.00006 12V6C2.00021 5.86743 2.05293 5.74034 2.14667 5.6466C2.24041 5.55286 2.36751 5.50013 2.50007 5.49998H15.0001C15.1327 5.50013 15.2597 5.55286 15.3535 5.6466C15.4472 5.74034 15.5 5.86743 15.5001 6V14C15.4999 14.1326 15.4472 14.2596 15.3534 14.3534C15.2597 14.4471 15.1326 14.4998 15.0001 14.5H9.00009C8.86832 14.5013 8.74238 14.5545 8.64966 14.6481C8.55693 14.7418 8.50491 14.8682 8.50491 15C8.50491 15.1318 8.55693 15.2582 8.64966 15.3518C8.74238 15.4455 8.86832 15.4987 9.00009 15.5H15.0001C15.3978 15.4995 15.7791 15.3414 16.0603 15.0601C16.3415 14.7789 16.4997 14.3977 16.5001 14V8.49998H20.0345C20.2264 8.50025 20.4142 8.55563 20.5756 8.65954C20.737 8.76346 20.8652 8.91153 20.9449 9.08616L21.133 9.49997H19.0002C18.735 9.50023 18.4808 9.60567 18.2933 9.79316C18.1058 9.98064 18.0004 10.2349 18.0001 10.5V12.5C18.0003 12.7651 18.1058 13.0193 18.2933 13.2068C18.4807 13.3943 18.7349 13.4997 19.0001 13.5H22.9282C22.9736 13.64 22.9979 13.786 23.0003 13.9331V16C23.0001 16.1326 22.9473 16.2597 22.8536 16.3534C22.7598 16.4472 22.6327 16.4999 22.5001 16.5H20.9496C20.8343 15.9354 20.5275 15.428 20.0812 15.0636C19.6348 14.6992 19.0763 14.5001 18.5001 14.5001C17.9239 14.5001 17.3654 14.6992 16.919 15.0636C16.4727 15.428 16.1659 15.9354 16.0506 16.5H7.94957C7.83431 15.9354 7.52755 15.428 7.08121 15.0636C6.63486 14.6992 6.07634 14.5001 5.50012 14.5001C4.9239 14.5001 4.36538 14.6992 3.91903 15.0636C3.47269 15.428 3.16593 15.9354 3.05067 16.5H2.50007C2.36751 16.4998 2.24043 16.4471 2.1467 16.3534C2.05297 16.2596 2.00023 16.1325 2.00006 16V15.5C2.13182 15.4987 2.25776 15.4455 2.35049 15.3519C2.44321 15.2582 2.49523 15.1318 2.49523 15C2.49523 14.8682 2.44321 14.7418 2.35049 14.6482C2.25776 14.5545 2.13182 14.5013 2.00006 14.5H0.500057C0.36829 14.5013 0.242352 14.5545 0.149626 14.6482C0.0569005 14.7418 0.00488281 14.8682 0.00488281 15C0.00488281 15.1318 0.0569005 15.2582 0.149626 15.3519C0.242352 15.4455 0.36829 15.4987 0.500057 15.5H1.00007V16C1.00051 16.3977 1.15868 16.779 1.43989 17.0602C1.7211 17.3414 2.10238 17.4996 2.50007 17.5H3.05062C3.16589 18.0646 3.47264 18.572 3.91898 18.9364C4.36533 19.3009 4.92386 19.4999 5.50007 19.4999C6.07629 19.4999 6.63482 19.3009 7.08116 18.9364C7.5275 18.572 7.83426 18.0646 7.94953 17.5H16.0506C16.1659 18.0646 16.4726 18.572 16.919 18.9364C17.3653 19.3009 17.9238 19.4999 18.5001 19.4999C19.0763 19.4999 19.6348 19.3009 20.0811 18.9364C20.5275 18.572 20.8342 18.0646 20.9495 17.5H22.5001C22.8978 17.4996 23.2791 17.3414 23.5603 17.0602C23.8415 16.779 23.9997 16.3977 24.0001 16V13.9331C24.0007 13.5763 23.9242 13.2235 23.776 12.8989ZM5.50007 18.5C5.2034 18.5 4.91339 18.412 4.66672 18.2472C4.42004 18.0824 4.22778 17.8481 4.11425 17.574C4.00072 17.3 3.97102 16.9984 4.02889 16.7074C4.08677 16.4164 4.22963 16.1491 4.43941 15.9394C4.64919 15.7296 4.91647 15.5867 5.20744 15.5288C5.49841 15.471 5.80001 15.5007 6.0741 15.6142C6.34819 15.7277 6.58246 15.92 6.74728 16.1667C6.9121 16.4133 7.00007 16.7033 7.00007 17C6.99964 17.3977 6.84146 17.779 6.56025 18.0602C6.27904 18.3414 5.89776 18.4996 5.50007 18.5ZM18.5001 18.5C18.2034 18.5 17.9134 18.412 17.6667 18.2472C17.42 18.0824 17.2278 17.8481 17.1142 17.574C17.0007 17.3 16.971 16.9984 17.0289 16.7074C17.0868 16.4164 17.2296 16.1491 17.4394 15.9394C17.6492 15.7296 17.9164 15.5867 18.2074 15.5288C18.4984 15.471 18.8 15.5007 19.0741 15.6142C19.3482 15.7277 19.5824 15.92 19.7473 16.1667C19.9121 16.4133 20.0001 16.7033 20.0001 17C19.9996 17.3977 19.8415 17.779 19.5603 18.0602C19.2791 18.3414 18.8978 18.4996 18.5001 18.5H18.5001ZM19.0001 10.5H21.5873L22.4964 12.5H19.0001V10.5Z" fill="white"/>
    <path d="M8.63554 9.25002C8.63513 8.91862 8.5033 8.60091 8.26896 8.36657C8.03463 8.13224 7.71692 8.00041 7.38552 8H6.38554C6.25292 8 6.12574 8.05268 6.03197 8.14645C5.9382 8.24022 5.88552 8.3674 5.88552 8.50002V11.5C5.88488 11.5661 5.89734 11.6316 5.92218 11.6928C5.94702 11.7541 5.98375 11.8098 6.03024 11.8567C6.07673 11.9037 6.13207 11.9409 6.19305 11.9663C6.25403 11.9918 6.31944 12.0049 6.38551 12.0049C6.45158 12.0049 6.517 11.9918 6.57798 11.9663C6.63896 11.9409 6.69429 11.9037 6.74079 11.8567C6.78728 11.8098 6.82401 11.7541 6.84885 11.6928C6.87369 11.6316 6.88615 11.5661 6.88551 11.5V10.9021L7.69691 11.8293C7.73992 11.8794 7.79245 11.9206 7.85146 11.9503C7.91047 11.9801 7.97479 11.9978 8.04071 12.0026C8.10662 12.0073 8.17282 11.9989 8.23547 11.9779C8.29813 11.9569 8.35599 11.9236 8.40572 11.8801C8.45544 11.8366 8.49605 11.7836 8.52519 11.7243C8.55432 11.665 8.57141 11.6005 8.57545 11.5345C8.5795 11.4686 8.57044 11.4025 8.54877 11.34C8.52711 11.2776 8.49329 11.2201 8.44926 11.1708L7.80055 10.4293C8.0445 10.343 8.25576 10.1834 8.40528 9.97221C8.5548 9.76104 8.63523 9.50875 8.63554 9.25002ZM7.38552 9.5H6.88555V9.00003H7.38557C7.45187 9.00003 7.51547 9.02637 7.56235 9.07326C7.60924 9.12014 7.63558 9.18373 7.63558 9.25004C7.63558 9.31635 7.60924 9.37994 7.56235 9.42682C7.51547 9.47371 7.45187 9.50005 7.38557 9.50005L7.38552 9.5Z" fill="white"/>
    <path d="M5.00004 8.99998C5.13181 8.99871 5.25774 8.94547 5.35047 8.85184C5.4432 8.75821 5.49521 8.63177 5.49521 8.49999C5.49521 8.36822 5.4432 8.24177 5.35047 8.14814C5.25774 8.05451 5.13181 8.00128 5.00004 8H3.50004C3.36743 8 3.24026 8.05267 3.14649 8.14643C3.05272 8.2402 3.00004 8.36736 3.00002 8.49997V11.5C2.99938 11.566 3.01184 11.6316 3.03668 11.6928C3.06152 11.754 3.09825 11.8097 3.14474 11.8567C3.19124 11.9036 3.24657 11.9409 3.30755 11.9663C3.36853 11.9917 3.43395 12.0048 3.50002 12.0048C3.56609 12.0048 3.6315 11.9917 3.69248 11.9663C3.75346 11.9409 3.8088 11.9036 3.85529 11.8567C3.90178 11.8097 3.93851 11.754 3.96335 11.6928C3.98819 11.6316 4.00065 11.566 4.00001 11.5V10.5H4.75001C4.81608 10.5006 4.88161 10.4882 4.94284 10.4633C5.00406 10.4385 5.05975 10.4018 5.1067 10.3553C5.15364 10.3088 5.19091 10.2534 5.21634 10.1925C5.24177 10.1315 5.25486 10.0661 5.25486 9.99999C5.25486 9.93392 5.24177 9.86851 5.21634 9.80753C5.19091 9.74655 5.15364 9.69121 5.1067 9.64472C5.05975 9.59823 5.00406 9.5615 4.94284 9.53666C4.88161 9.51182 4.81608 9.49936 4.75001 9.5H4.00001V8.99998H5.00004Z" fill="white"/>
    <path d="M14 8.99998C14.1318 8.99871 14.2577 8.94547 14.3504 8.85184C14.4432 8.75821 14.4952 8.63177 14.4952 8.49999C14.4952 8.36822 14.4432 8.24177 14.3504 8.14814C14.2577 8.05451 14.1318 8.00128 14 8H12.5C12.3674 8 12.2402 8.05267 12.1465 8.14643C12.0527 8.2402 12 8.36736 12 8.49997V11.5C12 11.6326 12.0527 11.7598 12.1465 11.8535C12.2402 11.9473 12.3674 12 12.5 12H14C14.1318 11.9987 14.2577 11.9455 14.3504 11.8518C14.4432 11.7582 14.4952 11.6318 14.4952 11.5C14.4952 11.3682 14.4432 11.2418 14.3504 11.1481C14.2577 11.0545 14.1318 11.0013 14 11H13V10.5H13.7387C13.8048 10.5006 13.8703 10.4882 13.9316 10.4633C13.9928 10.4385 14.0485 10.4018 14.0954 10.3553C14.1424 10.3088 14.1796 10.2534 14.2051 10.1925C14.2305 10.1315 14.2436 10.0661 14.2436 9.99999C14.2436 9.93392 14.2305 9.86851 14.2051 9.80753C14.1796 9.74655 14.1424 9.69121 14.0954 9.64472C14.0485 9.59823 13.9928 9.5615 13.9316 9.53666C13.8703 9.51182 13.8048 9.49936 13.7387 9.5H13V8.99998H14Z" fill="white"/>
    <path d="M11.125 9.00001C11.1911 9.00065 11.2566 8.98819 11.3178 8.96335C11.3791 8.93851 11.4348 8.90178 11.4817 8.85529C11.5286 8.80879 11.5659 8.75346 11.5913 8.69248C11.6168 8.6315 11.6299 8.56609 11.6299 8.50002C11.6299 8.43394 11.6168 8.36853 11.5913 8.30755C11.5659 8.24657 11.5286 8.19124 11.4817 8.14474C11.4348 8.09825 11.3791 8.06152 11.3178 8.03668C11.2566 8.01184 11.1911 7.99938 11.125 8.00002H9.62502C9.4924 8.00002 9.36522 8.0527 9.27145 8.14647C9.17768 8.24025 9.125 8.36743 9.125 8.50004V11.5C9.12501 11.6326 9.1777 11.7598 9.27147 11.8536C9.36524 11.9473 9.49241 12 9.62502 12H11.125C11.1911 12.0006 11.2566 11.9882 11.3178 11.9633C11.3791 11.9385 11.4348 11.9018 11.4817 11.8553C11.5286 11.8088 11.5659 11.7535 11.5913 11.6925C11.6168 11.6315 11.6299 11.5661 11.6299 11.5C11.6299 11.4339 11.6168 11.3685 11.5913 11.3075C11.5659 11.2466 11.5286 11.1912 11.4817 11.1447C11.4348 11.0983 11.3791 11.0615 11.3178 11.0367C11.2566 11.0118 11.1911 10.9994 11.125 11H10.125V10.5H10.8641C10.9301 10.5006 10.9957 10.4882 11.0569 10.4633C11.1181 10.4385 11.1738 10.4018 11.2208 10.3553C11.2677 10.3088 11.305 10.2535 11.3304 10.1925C11.3558 10.1315 11.3689 10.0661 11.3689 10C11.3689 9.93394 11.3558 9.86853 11.3304 9.80755C11.305 9.74657 11.2677 9.69124 11.2208 9.64474C11.1738 9.59825 11.1181 9.56152 11.0569 9.53668C10.9957 9.51184 10.9301 9.49938 10.8641 9.50002H10.125V9.00001H11.125Z" fill="white"/>
    <path d="M0.500057 14H3.00004C3.13181 13.9987 3.25775 13.9455 3.35047 13.8518C3.4432 13.7582 3.49522 13.6318 3.49522 13.5C3.49522 13.3682 3.4432 13.2418 3.35047 13.1481C3.25775 13.0545 3.13181 13.0013 3.00004 13H0.500057C0.36829 13.0013 0.242352 13.0545 0.149626 13.1481C0.0569005 13.2418 0.00488281 13.3682 0.00488281 13.5C0.00488281 13.6318 0.0569005 13.7582 0.149626 13.8518C0.242352 13.9455 0.36829 13.9987 0.500057 14Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_1109_1998">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>`
  }

  const kitsBase = {
    ppukit: {
      base: 'z117ppuDP',
      no_pen: 'z117ppuD'
    },
    ppukitt: {
      base: 'z117pptDP',
      no_pen: 'z117pptD'
    },
    tukit: {
      base: 'z117tu2DP',
      oz2_no_primer: 'z117tu2D',
      oz1_no_primer: 'z117tuD',
      oz1_primer: 'z117tuDP'
    },
    tukitt: {
      base: 'z117tt2DP',
      oz2_no_primer: 'z117tt2D',
      oz1_no_primer: 'z117ttD',
      oz1_primer: 'z117ttDP'
    },
    spukit: {
      base: 'z117spuDAR',
      respirator: 'z117spuDR',
      adhesion: 'z117spuDA',
      non_ra: 'z117spuD'
    },
    spukitt: {
      base: 'z117sptDAR',
      respirator: 'z117sptDR',
      adhesion: 'z117sptDA',
      non_ra: 'z117sptD'
    },
    spukitNM: {
      quart: 'z117qtu',
      gallon: 'z117gtu',
      pint: 'z117ptu'
    },
    spukitNMt: {
      quart: 'z117qtt',
      gallon: 'z117gtt',
      pint: 'z117ptt'
    }
  }

  const kitsData = {
    z117tuDP: {
      title: 'Brush Bottle Kit - 1 oz.',
      desc: 'Touch up small to medium paint chips and scratches on any surface with this kit. Each bottle features an integrated brush for easy application and can also be used with your own spray equipment.',
      list: /* html */ `
      <ul>
        <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean surface</li>
        <li><a href="${paintItemUrl}tp/1-oz--Primer-Bottle/">1 oz. Primer Bottle</a> - Apply primer to bare metal or plastic</li>
        <li><a href="${paintItemUrl}tu/1-oz--Basecoat-Paint-Bottle/">1 oz. Basecoat Paint Bottle</a> - Apply the main color layer</li>
        <li><a href="${paintItemUrl}tc/1-oz--Clearcoat-Bottle/">1 oz. Clearcoat Bottle</a> - Protect with a clear topcoat</li>
        <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Smooth and blend the finish</li>
        <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>
      `,
      products: ['wag', 'tp', 'tu', 'tc', 'rc', 'alt'],
      price: 49.28
    },
    z117tuD: {
      title: 'Brush Bottle Kit - 1 oz.',
      desc: 'Touch up small to medium paint chips and scratches with this kit. Each bottle features an integrated brush for easy application and can also be used with your own spray equipment.',
      list: /* html */ `
      <ul>
        <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean surface</li>
        <li><a href="${paintItemUrl}tu/1-oz--Basecoat-Paint-Bottle/">1 oz. Basecoat Paint Bottle</a> - Paint main color</li>
        <li><a href="${paintItemUrl}tc/1-oz--Clearcoat-Bottle/">1 oz. Clearcoat Bottle</a> - Add clearcoat</li>
        <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Blend and polish</li>
        <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean up</li>
      </ul>
      `,
      products: ['wag', 'tu', 'tc', 'rc', 'alt'],
      price: 41.33
    },
    z117ttDP: {
      title: 'Brush Bottle Kit - 1 oz. (Tricoat)',
      desc: 'Touch up small to medium chips and scratches on any surface with this kit. Each bottle features an integrated brush for easy application and can also be used with your own spray equipment. This is a tricoat paint bottle kit and includes an extra bottle of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean surface</li>
      <li><a href="${paintItemUrl}tp/1-oz--Primer-Bottle/">1 oz. Primer Bottle</a> - Apply primer to bare metal or plastic</li>
      <li><a href="${paintItemUrl}tt/1-oz--Tri-Coat-(2-Bottles)/">1 oz. Tri-Coat (2 Bottles)</a> - Apply the main color layers</li>
      <li><a href="${paintItemUrl}tc/1-oz--Clearcoat-Bottle/">1 oz. Clearcoat Bottle</a> - Protect with a clear topcoat</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Smooth and blend the finish</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>`,
      products: ['wag', 'tp', 'tt', 'tc', 'rc', 'alt'],
      price: 67.24
    },
    z117ttD: {
      title: 'Brush Bottle Kit - 1 oz. (Tricoat)',
      desc: 'Touch up small to medium chips and scratches with this kit. Each bottle features an integrated brush for easy application and can also be used with your own spray equipment. This is a tricoat paint bottle kit and includes an extra bottle of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean surface</li>
      <li><a href="${paintItemUrl}tp/1-oz--Primer-Bottle/">1 oz. Primer Bottle</a> - Apply primer to bare metal or plastic</li>
      <li><a href="${paintItemUrl}tt/1-oz--Tri-Coat-(2-Bottles)/">1 oz. Tri-Coat (2 Bottles)</a> - Apply the main color layers</li>
      <li><a href="${paintItemUrl}tc/1-oz--Clearcoat-Bottle/">1 oz. Clearcoat Bottle</a> - Protect with a clear topcoat</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Smooth and blend the finish</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>`,
      products: ['wag', 'tt', 'tc', 'rc', 'alt'],
      price: 59.29
    },
    z117tu2DP: {
      title: 'Brush Bottle Kit - 2 oz.',
      desc: 'Perfect for touching up larger chips and scratches on any surface, this kit provides more paint and primer for extensive touch-ups. Each 2 oz. bottle is equipped with a brush for precise application.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the damaged area</li>
      <li><a href="${paintItemUrl}tp2/2-oz--Primer-Bottle/">2 oz. Primer Bottle</a> - Prime metal or plastic surfaces</li>
      <li><a href="${paintItemUrl}tu2/2-oz--Basecoat-Paint-Bottle/">2 oz. Basecoat Paint Bottle</a> - Apply the main color layer</li>
      <li><a href="${paintItemUrl}tc2/2-oz--Clearcoat-Bottle/">2 oz. Clearcoat Bottle</a> - Apply clearcoat for protection</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Polish for a smooth finish</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>`,
      products: ['wag', 'tp2', 'tu2', 'tc2', 'rc', 'alt'],
      price: 69.24
    },
    z117tu2D: {
      title: 'Brush Bottle Kit - 2 oz.',
      desc: 'Perfect for touching up larger chips and scratches, this kit provides more paint for extensive touch-ups. Each 2 oz. bottle is equipped with a brush for precise application.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the damaged area</li>
      <li><a href="${paintItemUrl}tu2/2-oz--Basecoat-Paint-Bottle/">2 oz. Basecoat Paint Bottle</a> - Apply the main color layer</li>
      <li><a href="${paintItemUrl}tc2/2-oz--Clearcoat-Bottle/">2 oz. Clearcoat Bottle</a> - Apply clearcoat for protection</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Polish for a smooth finish</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>`,
      products: ['wag', 'tu2', 'tc2', 'rc', 'alt'],
      price: 59.29
    },
    z117tt2DP: {
      title: 'Brush Bottle Kit - 2 oz. (Tricoat)',
      desc: 'Perfect for touching up larger chips and scratches on any surface, this kit provides more paint and primer for extensive touch-ups. Each 2 oz. bottle is equipped with a brush for precise application. This is a tricoat paint bottle kit and includes an extra bottle of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the damaged area</li>
      <li><a href="${paintItemUrl}tp2/2-oz--Primer-Bottle/">2 oz. Primer Bottle</a> - Prime metal or plastic surfaces</li>
      <li><a href="${paintItemUrl}tt2/2-oz--Tri-Coat-(2-Bottles)/">2 oz. Tri-Coat (2 Bottles)</a> - Apply the main color layers</li>
      <li><a href="${paintItemUrl}tc2/2-oz--Clearcoat-Bottle/">2 oz. Clearcoat Bottle</a> - Apply clearcoat for protection</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Polish for a smooth finish</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>`,
      products: ['wag', 'tp2', 'tt2', 'tc2', 'rc', 'alt'],
      price: 100.78
    },
    z117tt2D: {
      title: 'Brush Bottle Kit - 2 oz. (Tricoat)',
      desc: 'Perfect for touching up larger chips and scratches, this kit provides more paint for extensive touch-ups. Each 2 oz. bottle is equipped with a brush for precise application. This is a tricoat paint bottle kit and includes an extra bottle of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the damaged area</li>
      <li><a href="${paintItemUrl}tt2/2-oz--Tri-Coat-(2-Bottles)/">2 oz. Tri-Coat (2 Bottles)</a> - Apply the main color layers</li>
      <li><a href="${paintItemUrl}tc2/2-oz--Clearcoat-Bottle/">2 oz. Clearcoat Bottle</a> - Apply clearcoat for protection</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Polish for a smooth finish</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean brushes and correct errors</li>
      </ul>`,
      products: ['wag', 'tt2', 'tc2', 'rc', 'alt'],
      price: 90.83
    },
    z117ppuDP: {
      title: 'Paint Pen Kit - 1/2 oz.',
      desc: 'Perfect for precise touch-ups on any surface, this Paint Pen Kit tackles small chips and scratches effectively. This kit includes essential tools for a seamless repair: degrease, prime, color match, seal, and polish. Ideal for damage no larger than a pencil eraser, it ensures a clean, blended repair with minimal effort.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Degrease the surface before painting</li>
      <li><a href="${paintItemUrl}ppp/Primer-Paint-Pen/">1/2 oz. Primer Paint Pen</a> - Prepare surface for paint</li>
      <li><a href="${paintItemUrl}ppu/1-2-oz--Basecoat-Paint-Pen/">1/2 oz. Basecoat Paint Pen</a> - Match the original color</li>
      <li><a href="${paintItemUrl}ppc/1-2-oz--Clearcoat-Paint-Pen/">1/2 oz. Clearcoat Paint Pen</a> - Seal with a protective shine</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Blend and polish the area</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean up excess paint</li>
      </ul>`,
      products: ['wag', 'ppp', 'ppu', 'ppc', 'rc', 'alt'],
      price: 48.28
    },
    z117ppuD: {
      title: 'Paint Pen Kit - 1/2 oz.',
      desc: 'Perfect for precise touch-ups, this Paint Pen Kit tackles small chips and scratches effectively. This kit includes essential tools for a seamless repair: degrease, prime, color match, seal, and polish. Ideal for damage no larger than a pencil eraser, it ensures a clean, blended repair with minimal effort.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Degrease the surface before painting</li>
      <li><a href="${paintItemUrl}ppu/1-2-oz--Basecoat-Paint-Pen/">1/2 oz. Basecoat Paint Pen</a> - Match the original color</li>
      <li><a href="${paintItemUrl}ppc/1-2-oz--Clearcoat-Paint-Pen/">1/2 oz. Clearcoat Paint Pen</a> - Seal with a protective shine</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Blend and polish the area</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean up excess paint</li>
      </ul>`,
      products: ['wag', 'ppu', 'ppc', 'rc', 'alt'],
      price: 40.33
    },
    z117pptDP: {
      title: 'Paint Pen Kit - 1/2 oz. (Tricoat)',
      desc: 'Perfect for precise touch-ups on any surface, this Paint Pen Kit tackles small chips and scratches effectively. This kit includes essential tools for a seamless tricoat paint repair: degrease, prime, color match, seal, and polish. Ideal for damage no larger than a pencil eraser, it ensures a clean, blended repair with minimal effort. This is a tricoat paint pen kit and includes an extra pen of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Degrease the surface before painting</li>
      <li><a href="${paintItemUrl}ppp/Primer-Paint-Pen/">1/2 oz. Primer Paint Pen</a> - Prepare surface for paint</li>
      <li><a href="${paintItemUrl}ppt/1-2-oz--Tri-Coat-Paint-Pen-(2-pens)/">1/2 oz. Tri-Coat Paint Pen (2 pens)</a> - Match the original color</li>
      <li><a href="${paintItemUrl}ppc/1-2-oz--Clearcoat-Paint-Pen/">1/2 oz. Clearcoat Paint Pen</a> - Seal with a protective shine</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Blend and polish the area</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean up excess paint</li>
      </ul>`,
      products: ['wag', 'ppp', 'ppt', 'ppc', 'rc', 'alt'],
      price: 64.78
    },
    z117pptD: {
      title: 'Paint Pen Kit - 1/2 oz. (Tricoat)',
      desc: 'Perfect for precise touch-ups, this Paint Pen Kit tackles small chips and scratches effectively. This kit includes essential tools for a seamless tricoat paint repair: degrease, prime, color match, seal, and polish. Ideal for damage no larger than a pencil eraser, it ensures a clean, blended repair with minimal effort. This is a tricoat paint pen kit and includes an extra pen of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Degrease the surface before painting</li>
      <li><a href="${paintItemUrl}ppt/1-2-oz--Tri-Coat-Paint-Pen-(2-pens)/">1/2 oz. Tri-Coat Paint Pen (2 pens)</a> - Match the original color</li>
      <li><a href="${paintItemUrl}ppc/1-2-oz--Clearcoat-Paint-Pen/">1/2 oz. Clearcoat Paint Pen</a> - Seal with a protective shine</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2 oz. Rubbing Compound</a> - Blend and polish the area</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean up excess paint</li>
      </ul>`,
      products: ['wag', 'ppt', 'ppc', 'rc', 'alt'],
      price: 56.83
    },
    z117spuDAR: {
      title: 'Spray Paint Kit',
      desc: 'Tackle large scratches, chips, or peeling paint on any surface with our comprehensive spray kit. Ideal for extensive repairs on bumpers, mirrors, and large panels, this kit includes everything for a complete restoration from cleaning to finishing.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}sem77723/SEM-(or-SAP)-Adhesion-Promoter/">Adhesion Promoter (Spray Can)</a> - Prepare bumpers and plastic surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spu/12-oz--Basecoat-Spray-Can/">12 oz. Basecoat Spray Can</a> - Restore color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      <li><a href="${paintItemUrl}MMM07193/Large-SAS-Dual-Cartridge-Respirator/">SAS Dual Cartridge Respirator</a> - Protect against inhalation</li>
      </ul>`,
      products: [
        'wag',
        'sem77723',
        'spp',
        'spu',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold',
        'MMM07193'
      ],
      price: 168.91
    },
    z117spuDR: {
      title: 'Spray Paint Kit',
      desc: 'Repair larger-scale damage like big scratches, chips, or peeling paint on metal surfaces, such as car doors and metal body panels. Ideal for restoring paint on areas that require more extensive work, the kit includes everything from surface cleaning to final polishing. ',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spu/12-oz--Basecoat-Spray-Can/">12 oz. Basecoat Spray Can</a> - Restore color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      <li><a href="${paintItemUrl}MMM07193/Large-SAS-Dual-Cartridge-Respirator/">SAS Dual Cartridge Respirator</a> - Protect against inhalation</li>
      </ul>`,
      products: [
        'wag',
        'spp',
        'spu',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold',
        'MMM07193'
      ],
      price: 149.96
    },
    z117spuDA: {
      title: 'Spray Paint Kit',
      desc: 'Tackle large scratches, chips, or peeling paint on any surface with our comprehensive spray kit. Ideal for extensive repairs on bumpers, mirrors, and large panels, this kit includes everything for a complete restoration from cleaning to finishing.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}sem77723/SEM-(or-SAP)-Adhesion-Promoter/">Adhesion Promoter (Spray Can)</a> - Prepare bumpers and plastic surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spu/12-oz--Basecoat-Spray-Can/">12 oz. Basecoat Spray Can</a> - Restore color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      </ul>`,
      products: [
        'wag',
        'sem77723',
        'spp',
        'spu',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold'
      ],
      price: 142.96
    },
    z117spuD: {
      title: 'Spray Paint Kit',
      desc: 'Repair larger-scale damage like big scratches, chips, or peeling paint on metal surfaces, such as car doors and metal body panels. Ideal for restoring paint on areas that require more extensive work, the kit includes everything from surface cleaning to final polishing. ',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spu/12-oz--Basecoat-Spray-Can/">12 oz. Basecoat Spray Can</a> - Restore color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      </ul>`,
      products: [
        'wag',
        'spp',
        'spu',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold'
      ],
      price: 124.01
    },
    z117sptDAR: {
      title: 'Spray Paint Kit (Tricoat)',
      desc: 'Tackle large scratches, chips, or peeling paint on any surface with our comprehensive tricoat spray kit. Ideal for extensive repairs on bumpers, mirrors, and large panels, this kit includes everything for a complete restoration from cleaning to finishing. This is a tricoat spray paint kit and includes an extra spray can of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}sem77723/SEM-(or-SAP)-Adhesion-Promoter/">Adhesion Promoter (Spray Can)</a> - Prepare bumpers and plastic surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spt/12-oz--Tri-Coat-(2-Spray-Cans)/">12 oz. Tri-Coat (2 Spray Cans)</a> - Restore tricoat color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      <li><a href="${paintItemUrl}MMM07193/Large-SAS-Dual-Cartridge-Respirator/">SAS Dual Cartridge Respirator</a> - Protect against inhalation</li>
      </ul>`,
      products: [
        'wag',
        'sem77723',
        'spp',
        'spt',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold',
        'MMM07193'
      ],
      price: 197.91
    },
    z117sptDR: {
      title: 'Spray Paint Kit (Tricoat)',
      desc: 'Repair larger-scale damage like big scratches, chips, or peeling paint on metal surfaces, such as car doors and metal body panels. Ideal for restoring paint on areas that require more extensive work, the kit includes everything from surface cleaning to final polishing. This is a tricoat spray paint kit and includes an extra spray can of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spt/12-oz--Tri-Coat-(2-Spray-Cans)/">12 oz. Tri-Coat (2 Spray Cans)</a> - Restore tricoat color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      <li><a href="${paintItemUrl}MMM07193/Large-SAS-Dual-Cartridge-Respirator/">SAS Dual Cartridge Respirator</a> - Protect against inhalation</li>
      </ul>`,
      products: [
        'wag',
        'spp',
        'spt',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold',
        'MMM07193'
      ],
      price: 178.96
    },
    z117sptDA: {
      title: 'Spray Paint Kit (Tricoat)',
      desc: 'Tackle large scratches, chips, or peeling paint on any surface with our comprehensive tricoat spray kit. Ideal for extensive repairs on bumpers, mirrors, and large panels, this kit includes everything for a complete restoration from cleaning to finishing. This is a tricoat spray paint kit and includes an extra spray can of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}sem77723/SEM-(or-SAP)-Adhesion-Promoter/">Adhesion Promoter (Spray Can)</a> - Prepare bumpers and plastic surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spt/12-oz--Tri-Coat-(2-Spray-Cans)/">12 oz. Tri-Coat (2 Spray Cans)</a> - Restore tricoat color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      </ul>`,
      products: [
        'wag',
        'sem77723',
        'spp',
        'spt',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold'
      ],
      price: 171.96
    },
    z117sptD: {
      title: 'Spray Paint Kit (Tricoat)',
      desc: 'Repair larger-scale damage like big scratches, chips, or peeling paint on metal surfaces, such as car doors and metal body panels. Ideal for restoring paint on areas that require more extensive work, the kit includes everything from surface cleaning to final polishing. This is a tricoat spray paint kit and includes an extra spray can of midcoat paint.',
      list: /* html */ `<ul>
      <li><a href="${paintItemUrl}wag/2-oz--Wax-and-Grease-Remover/">2 oz. Wax and Grease Remover</a> - Clean the surface</li>
      <li><a href="${paintItemUrl}spp/12-oz--Primer-Spray-Can/">12 oz. Primer Spray Can</a> - Prepare the base surface</li>
      <li><a href="${paintItemUrl}spt/12-oz--Tri-Coat-(2-Spray-Cans)/">12 oz. Tri-Coat (2 Spray Cans)</a> - Restore tricoat color</li>
      <li><a href="${paintItemUrl}T6363/Blending-Solvent/">12 oz. Blending Solvent</a> - Integrate paint seamlessly</li>
      <li><a href="${paintItemUrl}spc/12-oz--Clearcoat-Spray-Can/">12 oz. Clearcoat Spray Can</a> - Add shine and protection</li>
      <li><a href="${paintItemUrl}DYN907T/Glazing-and-Spot-Putty/">4.5 oz. Spot Putty</a> - Fill minor surface imperfections</li>
      <li><a href="${paintItemUrl}MMM6334/Masking-Tape/">3/4 inch masking tape - 60 yards</a> - Protect specific areas</li>
      <li><a href="${paintItemUrl}tr/Tack-Rags/">Tack Rag</a> - Ensure a dust-free surface</li>
      <li><a href="${paintItemUrl}sp/Sandpaper/">Sandpaper Pack - 6 assorted sheets</a> - Smooth the surface</li>
      <li><a href="${paintItemUrl}AF4405/Sanding-Block/">Dura-Block Black Sanding Pad</a> - Apply even sanding pressure</li>
      <li><a href="${paintItemUrl}rc/2-oz--Rubbing-Compound/">2.5 oz. Rubbing Compound Bottle</a> - Achieve the final shine</li>
      <li><a href="${paintItemUrl}alt/2-oz--Acrylic-Lacquer-Thinner/">2 oz. Acrylic Lacquer Thinner</a> - Clean and thin as needed</li>
      <li><a href="${paintItemUrl}sphold/Spray-can-trigger-sprayer/">Spray Can Trigger Sprayer</a> - Ensure controlled application</li>
      </ul>`,
      products: [
        'wag',
        'spp',
        'spt',
        'T6363',
        'spc',
        'DYN907T',
        'MMM6334',
        'tr',
        'sp',
        'AF4405',
        'rc',
        'alt',
        'sphold'
      ],
      price: 153.01
    },
    z117ptu: {
      title: 'Professional Pint Kit',
      desc: 'The 16 oz. Professional Pint Kit covers up to 20 square feet. It is ideal for use with your spraying equipment or a Preval sprayer found at most auto parts stores. Each pint-sized kit includes pint cans of primer, basecoat paint, and clearcoat. Please note that this paint formulation is not compatible with airless paint sprayers. The kit ensures a smooth, even finish for your automotive touch-up needs.',
      list: /* html */ `<ul>
          <li><a href="${paintItemUrl}ptp/One-Pint-Primer/">One Pint Primer</a> - Essential for surface preparation</li>
          <li><a href="${paintItemUrl}ptu/One-Pint---Ready-to-Spray/">One Pint Ready-to-Spray Paint</a> - Perfect for color application</li>
          <li><a href="${paintItemUrl}ptc/One-Pint-Clearcoat/">One Pint Clearcoat</a> - Provides a protective, glossy finish</li>
      </ul>`,
      products: ['ptp', 'ptu', 'ptc'],
      price: 168.85
    },
    z117ptt: {
      title: 'Professional Pint Kit (Tricoat)',
      desc: 'The 16 oz. Professional Tricoat Pint Kit covers up to 20 square feet. It is ideal for use with your spraying equipment or a Preval sprayer found at most auto parts stores. Each pint-sized kit includes pint cans of primer, basecoat paint, midcoat paint, and clearcoat. Please note that this paint formulation is not compatible with airless paint sprayers. The kit ensures a smooth, even finish for your automotive touch-up needs. This is a tricoat kit and includes an extra pint of midcoat paint.',
      list: /* html */ `<ul>
          <li><a href="${paintItemUrl}ptp/One-Pint-Primer/">One Pint Primer</a> - Essential for surface preparation</li>
          <li><a href="${paintItemUrl}ptt/16-oz--Tri-Coat-(2-Pint-Containers)/">16 oz. Tri-Coat (2 Pint Containers) Ready-to-Spray Paint</a> - Perfect for color application</li>
          <li><a href="${paintItemUrl}ptc/One-Pint-Clearcoat/">One Pint Clearcoat</a> - Provides a protective, glossy finish</li>
      </ul>`,
      products: ['ptp', 'ptt', 'ptc'],
      price: 266.89
    },
    z117qtu: {
      title: 'Professional Quart Kit',
      desc: 'The 32 oz. Professional Quart Kit covers up to 40 square feet. It is ideal for use with your spraying equipment or a Preval sprayer found at most auto parts stores. Each quart-sized kit includes quarts of primer, basecoat paint, and clearcoat. Please note that this paint formulation is not compatible with airless paint sprayers. The kit ensures a smooth, even finish for your automotive touch-up needs.',
      list: /* html */ `<ul>
          <li><a href="${paintItemUrl}qtp/32-oz--Primer-(One-Quart)/">32 oz. Primer (One Quart)</a> - Essential for surface preparation</li>
          <li><a href="${paintItemUrl}qtu/One-Quart---Ready-to-Spray/">32 oz. Basecoat Paint (One Quart)</a> - Perfect for color application</li>
          <li><a href="${paintItemUrl}qtc/32-oz--Clearcoat-(One-Quart)/">32 oz. Clearcoat (One Quart)</a> - Provides a protective, glossy finish</li>
      </ul>`,
      products: ['qtp', 'qtu', 'qtc'],
      price: 269.85
    },
    z117qtt: {
      title: 'Professional Quart Kit (Tricoat)',
      desc: 'The 32 oz. Professional Tricoat Quart Kit covers up to 40 square feet. It is ideal for use with your spraying equipment or a Preval sprayer found at most auto parts stores. Each quart-sized kit includes quart cans of primer, basecoat paint, midcoat paint, and clearcoat. Please note that this paint formulation is not compatible with airless paint sprayers. The kit ensures a smooth, even finish for your automotive touch-up needs. This is a tricoat kit and includes an extra quart of midcoat paint.',
      list: /* html */ `<ul>
          <li><a href="${paintItemUrl}qtp/32-oz--Primer-(One-Quart)/">32 oz. Primer (One Quart)</a> - Essential for surface preparation</li>
          <li><a href="${paintItemUrl}qtt/32-oz--Tri-Coat-(2-Quart-Containers)/">32 oz. Tri-Coat (2 Quart Containers)</a> - Perfect for color application</li>
          <li><a href="${paintItemUrl}qtc/32-oz--Clearcoat-(One-Quart)/">32 oz. Clearcoat (One Quart)</a> - Provides a protective, glossy finish</li>
      </ul>`,
      products: ['qtp', 'qtt', 'qtc'],
      price: 434.89
    },
    z117gtu: {
      title: 'Professional Gallon Kit',
      desc: 'The 128 oz. Professional Gallon Kit covers up to 160 square feet. It is ideal for use with your spraying equipment or a Preval sprayer found at most auto parts stores. Each gallon-sized kit includes gallons of primer, basecoat paint, and clearcoat. Please note that this paint formulation is not compatible with airless paint sprayers. The kit ensures a smooth, even finish for your automotive touch-up needs.',
      list: /* html */ `<ul>
          <li><a href="${paintItemUrl}gtp/128-oz--Primer-(One-Gallon)/">128 oz. Primer (One Gallon)</a> - Essential for surface preparation</li>
          <li><a href="${paintItemUrl}gtu/128-oz--Basecoat-Paint-(One-Gallon)/">128 oz. Basecoat Paint (One Gallon)</a> - Perfect for color application</li>
          <li><a href="${paintItemUrl}gtc/128-oz--Clearcoat-(One-Gallon)/">128 oz. Clearcoat (One Gallon)</a> - Provides a protective, glossy finish</li>
      </ul>`,
      products: ['gtp', 'gtu', 'gtc'],
      price: 773.89
    },
    z117gtt: {
      title: 'Professional Gallon Kit (Tricoat)',
      desc: 'The 128 oz. Professional Tricoat Gallon Kit covers up to 160 square feet. It is ideal for use with your spraying equipment or a Preval sprayer found at most auto parts stores. Each gallon-sized kit includes gallon cans of primer, basecoat paint, midcoat paint, and clearcoat. Please note that this paint formulation is not compatible with airless paint sprayers. The kit ensures a smooth, even finish for your automotive touch-up needs. This is a tricoat kit and includes an extra gallon of midcoat paint.',
      list: /* html */ `<ul>
          <li><a href="${paintItemUrl}gtp/128-oz--Primer-(One-Gallon)/">128 oz. Primer (One Gallon)</a> - Essential for surface preparation</li>
          <li><a href="${paintItemUrl}gtt/128-oz--Tri-Coat-(2-Gallon-Containers)/">128 oz. Tri-Coat (2 Gallon Containers)</a> - Perfect for color application</li>
          <li><a href="${paintItemUrl}gtc/128-oz--Clearcoat-(One-Gallon)/">128 oz. Clearcoat (One Gallon)</a> - Provides a protective, glossy finish</li>
      </ul>`,
      products: ['gtp', 'gtt', 'gtc'],
      price: 1251.88
    }
  }

  class PaintKits {
    constructor(device) {
      this.device = device
      this.init()
    }

    init() {
      if (window.location.href.includes('/order-form.cgi')) {
        this.drawKits()
        this.setVisibility()
      }
      if (window.location.href.includes('/store/item/')) {
        this.changeKitPage()
      }
    }

    drawKits() {
      const products = []
      $('#kit-container .kit-item>a:first-of-type').each((i, el) => {
        const href = $(el).attr('href')
        products.push(href.split('item/')[1].split('/')[0])
      })
      const tricoat = products.includes('spukitt') ? true : false
      const sprayKit = products.includes('spukitt') ? kitsBase.spukitt : kitsBase.spukit
      const brushKit = products.includes('tukitt') ? kitsBase.tukitt : kitsBase.tukit
      const penKit = products.includes('ppukitt') ? kitsBase.ppukitt : kitsBase.ppukit
      const profKit = products.includes('spukitNMt') ? kitsBase.spukitNMt : kitsBase.spukitNM
      console.log(kitsData[sprayKit.base])
      const kitsBlock = /* html */ `
        <div id="new-kit-container">
          <style>
            #kits .category-heading {
              float: none !important;
              background-color: #FFFCF4 !important;
              padding-bottom: 24px !important;
            }
            .regular #wrapper #page #main .category-heading p {
              border-bottom: none !important;
            }
            #new-kit-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              background-color: #FFFCF4;
              padding: 12px;
            }
            #kits #new-kit-container * {
              box-sizing: border-box;
            }
            #kits #new-kit-container  .kit-block {
              border: 1px solid #D3DAE2;
              padding: 12px !important;
              display: flex;
              gap: 12px;
              align-items: start;
              position: relative;
            }
            #kits #new-kit-container .kit-block .img {
              flex-shrink: 0;
              width: 160px;
              aspect-ratio: 1/1;  
            }
            #kits #new-kit-container .kit-block .img img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
            #new-kit-container .kit-block .label {
              position: absolute;
              top: 0;
              right: 0;
              border-radius: 0px 0px 0px 4px;
              background: #D3DAE2;
              padding: 4px 10px !important;
              color: #1B3D71;
              font-weight: 700;
              font-size: 14px;
              line-height: 22px;
            }
            #kits #new-kit-container .kit-block .title {
              margin: 0 0 4px;
              font-weight: 700;
              font-size: 20px !important;
              line-height: 28px !important;
              color: #253189;
              padding-right: 140px;
              text-decoration: none;
            }
            #kits #new-kit-container .kit-block .desc {
              margin: 0 0 12px !important;
              color: #555;
              font-size: 12px !important;
              line-height: 20px;
            }
            #kits #new-kit-container .kit-block .total {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 12px !important;
            }
            #kits #new-kit-container .kit-block .total .price {
              font-weight: 700;
              font-size: 22px;
              line-height: 28px;
              color: #900;
            }
            #kits #new-kit-container .kit-block .total button {
              border-radius: 4px;
              border: 2px solid #E68626;
              background: linear-gradient(180deg, #FFC842 0%, #F48818 100%);
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 6px !important;
              min-width: 180px;
              gap: 10px;
              color: #333;
              font-size: 16px;
              font-weight: 700;
              cursor: pointer;
            }
            #kits #new-kit-container .kit-block .total button img {
              width: 26px;
              height: 19px;
            }
            #kits #new-kit-container .kit-block .shipping {
              margin: 12px 0 0 !important;
              padding: 4px 8px !important;
              background-color: #D3DAE2;
              border-radius: 4px;
              display: inline-flex;
              align-items: center;
              gap: 8px;
              color: #1B3D71;
              font-weight: 700;
              font-size: 12px;
              line-height: 20px;
            }
            #kits #new-kit-container .kit-block .shipping.active {
              background-color: #04A777;
              color: #fff;
            }
            #kits #new-kit-container .kit-block .variants {
              display: flex;
              flex-direction: column;
              gap: 4px;
            }
            #kits #new-kit-container .kit-block .variants label {
              display: flex;
              align-items: start;
              gap: 8px;
              position: relative;
              cursor: pointer;
            }
            #kits #new-kit-container .kit-block .variants label p {
              margin: 0;
              color: #333;
              font-weight: 700;
              line-height: 20px !important;
              font-size: 12px !important;
            }
            #kits #new-kit-container .kit-block .variants label b {
              color: #253189;
            }
            #kits #new-kit-container .kit-block .variants label input {
              width: 1px;
              height: 1px;
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
            }
            #kits #new-kit-container .kit-block .variants label input[type="checkbox"] + span {
              width: 16px;
              height: 16px;
              border-radius: 4px;
              border: 1px solid #333;
              background-color: #EFEFEF;
              position: relative;
              flex-shrink: 0;
              top: 2px;
            }
            #kits #new-kit-container .kit-block .variants label input[type="checkbox"]:checked + span::after {
              position: absolute;
              content: '';
              width: 10px;
              height: 10px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: #333;
              border-radius: 2px;
            }
            #kits #new-kit-container .kit-block .variants label input[type="radio"] + span {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              border: 1px solid #333;
              position: relative;
              flex-shrink: 0;
              top: 3px;
            }
            #kits #new-kit-container .kit-block .variants label input[type="radio"]:checked + span::after {
              position: absolute;
              content: '';
              width: 9px;
              height: 9px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 50%;
              background-color: #333;
            }
            #kits #new-kit-container .kit-block .variants .size {
              display: flex;
              gap: 4px;
              flex-direction: column;
              padding-left: 24px;
            }
            #kits #new-kit-container .spray-kit .variants>label:first-of-type,
            #kits #new-kit-container .brush-kit .variants>label:first-of-type,
            #kits #new-kit-container .prof-kit .variants>label:first-of-type,
            #kits #new-kit-container .prof-kit .variants>label:nth-of-type(2) {
              padding-bottom: 4px !important;
              border-bottom: 1px solid #D9D9D9;
            }
            #kits #new-kit-container .brush-kit .variants>label:last-of-type {
              padding-left: 24px;
            }
            @media (max-width: 768px) {
              #kits #new-kit-container  .kit-block {
                flex-direction: column;
                align-items: center;
                padding-top: 40px !important;
              }
              #kits #new-kit-container .kit-block .title {
                text-align: center;
                font-size: 16px;
                line-height: 24px;
              }
              #kits #new-kit-container .kit-block .desc {
                text-align: center;
                font-size: 12px;
                line-height: 20px;
              }
              #kits #new-kit-container .kit-block .total {
                flex-direction: column;
                align-items: center;
                gap: 12px;
              }
            }
          </style>
          <div class="spray-kit kit-block" data-kit="${sprayKit.base}">
            <div class="img">
              <img src="${this.getImg(sprayKit.base)}" alt="spray kit">
            </div>
            <div class="info">
              <span class="label">Medium to large areas</span>
              <a href="${this.getLinks(sprayKit.base, 1)}" class="title">${kitsData[sprayKit.base].title}</a>
              <p class="desc">${kitsData[sprayKit.base].desc}</p>
              <div class="variants">
                <label>
                  <input type="checkbox" name="adhesion" checked>
                  <span></span>
                  <p>Include Adhesion Promoter for bumpers & plastic <b>+$18.95</b></p>
                </label>
                <label>
                  <input type="checkbox" name="respirator" checked> 
                  <span></span>
                  <p>Include SAS Dual Cartridge Respirator <b>+$25.95</b></p>
                </label>
                <div class="size">
                <label>
                  <input type="radio" name="size_resp" value="large" checked> 
                  <span></span>
                  <p>Size Large</p>
                </label>
                <label>
                  <input type="radio" name="size_resp" value="medium">
                  <span></span>
                  <p>Size Medium</p>
                </label>
                </div>
              </div>
              <div class="shipping ${kitsData[sprayKit.base].price > 149 ? 'active' : ''}">
                ${
                  kitsData[sprayKit.base].price > 149
                    ? `${imgSvg.shipping2} Your shipping is Free!`
                    : `${imgSvg.shipping} Free shipping from $149`
                }
                
              </div>
              <div class="total">
                <div class="price">$${kitsData[sprayKit.base].price}</div>
                <button><img src="${git}/cart.png" alt="cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="pen-kit kit-block" data-kit="${penKit.base}">
            <div class="img">
              <img src="${this.getImg(penKit.base)}" alt="pen kit">
            </div>
            <div class="info">
              <span class="label">Tiny chips & scratches</span>
              <a href="${this.getLinks(penKit.base, 0)}" class="title" >${kitsData[penKit.base].title}</a>
              <p class="desc">${kitsData[penKit.base].desc}</p>
              <div class="variants">
                <label>
                  <input type="checkbox" name="pen" checked>
                  <span></span>
                  <p>Include Primer for unpainted surfaces <b>+$7.95</b></p>
                </label>
              </div>
              <div class="total">
                <div class="price">$${kitsData[penKit.base].price}</div>
                <button><img src="${git}/cart.png" alt="cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="brush-kit kit-block" data-kit="${brushKit.base}">
            <div class="img">
              <img src="${this.getImg(brushKit.base)}" alt="brush kit">
            </div>
            <div class="info">
              <span class="label">Small chips & scratches</span>
              <a href="${this.getLinks(brushKit.base, 0)}" class="title" >${kitsData[brushKit.base].title}</a>
              <p class="desc">${kitsData[brushKit.base].desc}</p>
              <div class="variants">
                <label>
                  <input type="radio" name="oz" value="1">
                  <span></span>
                  <p>1 oz. bottle (Many small chips & scratches) - <b>${tricoat ? '$59.29' : '$41.33'}</b> </p>
                </label>
                <label>
                  <input type="radio" name="oz" value="2" checked>
                  <span></span>
                  <p>2 oz. bottle (Best for spraying) - <b>${tricoat ? '$90.83' : '$59.29'}</b></p>
                </label>
                <label>
                  <input type="checkbox" name="primer" checked>
                  <span></span>
                  <p>Include 2 oz. Primer for unpainted surfaces <b>+$9.95</b></p>
                </label>
              </div>
              <div class="total">
                <div class="price">$${kitsData[brushKit.base].price}</div>
                <button><img src="${git}/cart.png" alt="cart">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="prof-kit kit-block" data-kit="${profKit.quart}">
            <div class="img">
              <img src="${this.getImg(profKit.quart)}" alt="prof kit">
            </div>
            <div class="info">
              <span class="label">Extensive paint jobs</span>
              <a href="${this.getLinks(profKit.quart, 2)}" class="title" >${kitsData[profKit.quart].title}</a>
              <p class="desc">${kitsData[profKit.quart].desc}</p>
              <div class="variants">
                <label>
                  <input type="radio" name="size" value="${profKit.pint}">
                  <span></span>
                  <p>1 Pint can (Covers 20 square feet)- <b>$${kitsData[profKit.pint].price}</b></p>
                </label>
                <label>
                  <input type="radio" name="size" value="${profKit.quart}" checked>
                  <span></span>
                  <p>1 Quart can (Covers 40 square feet) - <b>$${kitsData[profKit.quart].price}</b></p>
                </label>
                <label>
                  <input type="radio" name="size" value="${profKit.gallon}">
                  <span></span>
                  <p>1 Gallon can (Covers 160 square feet) - <b>$${kitsData[profKit.gallon].price}</b></p>
                </label>
              </div>
              <div class="shipping active">
                ${imgSvg.shipping2} Your shipping is Free! 
              </div>
              <div class="total">
                <div class="price">$${kitsData[profKit.quart].price}</div>
                <button><img src="${git}/cart.png" alt="cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      `

      $('#kit-container').css('display', 'none')
      $('#kit-container').after(kitsBlock)

      // handle events

      $('#new-kit-container .prof-kit .variants input').on('change', e => {
        const id = $(e.target).val()
        const selector = $(e.target).closest('.kit-block')
        this.redrawKitBlock(id, selector)
        if (id === profKit.pint) {
          pushDataLayer(
            'exp_kits_upsell_radio_pdpprof_pint',
            '1 Pint can (Covers 20 square feet)',
            'Radio button',
            'Products Touch Up Paint Kits Professional Paint Kit'
          )
        } else if (id === profKit.quart) {
          pushDataLayer(
            'exp_kits_upsell_radio_pdpprof_quart',
            '1 Quart can (Covers 40 square feet)',
            'Radio button',
            'Products Touch Up Paint Kits Professional Paint Kit'
          )
        } else if (id === profKit.gallon) {
          pushDataLayer(
            'exp_kits_upsell_radio_pdpprof_gallon',
            '1 Gallon can (Covers 160 square feet)',
            'Radio button',
            'Products Touch Up Paint Kits Professional Paint Kit'
          )
        }
      })

      $('#new-kit-container .pen-kit .variants input').on('change', e => {
        const pen = $(e.target).prop('checked')
        const selector = $(e.target).closest('.kit-block')
        let id = penKit.base
        if (pen) {
          id = penKit.base
        } else {
          id = penKit.no_pen
        }
        pushDataLayer(
          'exp_kits_upsell_check_pdppen_primer',
          'Include Primer for unpainted surfaces',
          'checkbox',
          'Products Touch Up Paint Kits Pen Paint Kit'
        )
        this.redrawKitBlock(id, selector)
      })

      $('#new-kit-container .brush-kit .variants input').on('change', e => {
        const oz = $('input[name="oz"]:checked').val()
        const primer = $('input[name="primer"]').prop('checked')
        const primerBlock = $('#new-kit-container .brush-kit .variants label:last-of-type p')
        let id = brushKit.base

        const selector = $(e.target).closest('.kit-block')
        if (oz === '1' && primer) {
          id = brushKit.oz1_primer
          primerBlock.html('Include 1 oz. Primer for unpainted surfaces <b>+$7.95</b>')
        } else if (oz === '2' && primer) {
          id = brushKit.base
          primerBlock.html('Include 2 oz. Primer for unpainted surfaces <b>+$9.95</b>')
        } else if (oz === '1' && !primer) {
          id = brushKit.oz1_no_primer
          primerBlock.html('Include 1 oz. Primer for unpainted surfaces <b>+$7.95</b>')
        } else if (oz === '2' && !primer) {
          id = brushKit.oz2_no_primer
          primerBlock.html('Include 2 oz. Primer for unpainted surfaces <b>+$9.95</b>')
        }
        this.redrawKitBlock(id, selector)

        if (e.target.name === 'oz') {
          if ($(e.target).val() === '1') {
            pushDataLayer(
              'exp_kits_upsell_radio_pdpbott_chipscrat',
              '1 oz. bottle Many small chips & scratches',
              'Radio button',
              'Products Touch Up Paint Kits Brush Paint Kit'
            )
          } else {
            pushDataLayer(
              'exp_kits_upsell_radio_pdpbott_spray',
              '2 oz. bottle Best for spraying',
              'Radio button',
              'Products Touch Up Paint Kits Brush Paint Kit'
            )
          }
        }

        if (e.target.name === 'primer') {
          pushDataLayer(
            'exp_kits_upsell_check_pdpbott_primer',
            'Include Primer for unpainted surfaces',
            'checkbox',
            'Products Touch Up Paint Kits Brush Paint Kit'
          )
        }
      })

      $('#new-kit-container .spray-kit .variants input').on('change', e => {
        const adhesion = $('input[name="adhesion"]').prop('checked')
        const respirator = $('input[name="respirator"]').prop('checked')
        let id = sprayKit.base

        const selector = $(e.target).closest('.kit-block')
        if (adhesion && respirator) {
          id = sprayKit.base
        } else if (adhesion && !respirator) {
          id = sprayKit.adhesion
        } else if (!adhesion && respirator) {
          id = sprayKit.respirator
        } else if (!adhesion && !respirator) {
          id = sprayKit.non_ra
        }
        this.redrawKitBlock(id, selector)
        if (kitsData[id].price > 149) {
          $('.spray-kit .shipping').addClass('active')
          $('.spray-kit .shipping').html(`${imgSvg.shipping2} Your shipping is Free!`)
          blockVisibility(
            '.spray-kit .shipping.active',
            3,
            'exp_kits_upsell_vis_pdpspray_shipp',
            'Products Touch Up Paint Kits Spray Paint Kit'
          )
        } else {
          $('.spray-kit .shipping').removeClass('active')
          $('.spray-kit .shipping').html(`${imgSvg.shipping} Free shipping from $149`)
        }

        if (e.target.name === 'adhesion') {
          pushDataLayer(
            'exp_kits_upsell_check_pdpspray_bump',
            'Include Adhesion Promoter for bumpers & plastic',
            'checkbox',
            'Products Touch Up Paint Kits Spray Paint Kit'
          )
        } else if (e.target.name === 'respirator') {
          pushDataLayer(
            'exp_kits_upsell_check_pdpspray_resp',
            'Include SAS Dual Cartridge Respirator',
            'checkbox',
            'Products Touch Up Paint Kits Spray Paint Kit'
          )
        } else if (e.target.name === 'size_resp') {
          if ($(e.target).val() === 'medium') {
            pushDataLayer(
              'exp_kits_upsell_check_pdpspray_medi',
              'Size Medium',
              'Radio button',
              'Products Touch Up Paint Kits Spray Paint Kit'
            )
          } else {
            pushDataLayer(
              'exp_kits_upsell_check_pdpspray_larg',
              'Size Large',
              'Radio button',
              'Products Touch Up Paint Kits Spray Paint Kit'
            )
          }
        }
      })

      $('#new-kit-container .total button').on('click', e => {
        e.preventDefault()
        const block = $(e.target).closest('.kit-block')
        const id = block.attr('data-kit')
        const kitType = block.hasClass('spray-kit')
          ? 'spray'
          : block.hasClass('brush-kit')
          ? 'brush'
          : block.hasClass('pen-kit')
          ? 'pen'
          : 'prof'
        kitsData[id].products.forEach(item => {
          AddCart(1, item)
        })
        $('.to_cart').addClass('fix')
        pushDataLayer(
          `exp_kits_upsell_click_pdp${kitType}_cart`,
          'Add to Cart',
          'button',
          `Products Touch Up Paint Kits ${kitType} Paint Kit`
        )
      })
      blockVisibility(
        '.spray-kit .shipping.active',
        3,
        'exp_kits_upsell_vis_pdpspray_shipp',
        'Products Touch Up Paint Kits Spray Paint Kit'
      )

      $('.kit-block .title').on('click', e => {
        const block = $(e.target).closest('.kit-block')
        const kitType = block.hasClass('spray-kit')
          ? 'spray'
          : block.hasClass('brush-kit')
          ? 'brush'
          : block.hasClass('pen-kit')
          ? 'pen'
          : 'prof'
        pushDataLayer(
          `exp_kits_upsell_but_pdpspray_${kitType}`,
          'Link to kit',
          'Link',
          `Products Touch Up Paint Kits ${kitType} Paint Kit`
        )
      })
    }

    redrawKitBlock(id, selector) {
      const kit = kitsData[id]
      const title = $(selector).find('.title')
      const desc = $(selector).find('.desc')
      const img = $(selector).find('.img img')
      const price = $(selector).find('.total .price')

      title.text(kit.title)
      desc.text(kit.desc)
      img.attr('src', this.getImg(id))
      $(selector).attr('data-kit', id)
      price.text('$' + kit.price)
    }

    getLinks(id, productType) {
      const type = ['Touch-Up-Paint-Pen-Kit', 'Spray-Paint-Kit', 'Professional-Kit']
      return `javascript:makeWin('${paintItemUrl}${id}/${type[productType]}/')`
    }

    getImg(id) {
      return `https://paintscratch.com/content/images/product-thumbs/thumb2${id}image1.jpg`
    }

    changeKitPage() {
      const id = window.location.href.split('item/')[1].split('/')[0]
      const kit = kitsData[id]
      if (kit) {
        mainChange()
        this.setVisibilityProductPage()
      }
      function mainChange() {
        const style = /* html */ `
          <style>
            h1 {
              color: #253189;
              font-size: 20px;
              font-weight: 700;
              line-height: 20px;
              font-family: Arial;
              text-align: left !important;
              width: 500px;
              margin: 0 auto 12px;
            }
            h1+p {
              color: #555;
              font-family: Arial;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px;
              text-align: left !important;
              width: 500px;
              margin: 0 auto 16px;
            }
            #centercontent {
              display: none;
            }
            .crs_content {
              width: 500px;
              margin: 20px auto;
              font-family: Arial, sans-serif;
            }
            .crs_content p:first-of-type {
              color: #253189;
              font-size: 24px;
              font-weight: 700;
              line-height: 32px;
              margin: 0 0 12px;
            }
            .crs_content p.price {
              color: #333;
              font-size: 16px;
              font-weight: 700;
              line-height: 16px;
              padding-top: 16px;
              margin: 0 0 12px;
              width: 100%;
              border-top: 1px solid #ccc;
            }
            .crs_content p.price span {
              color: #900;
            }
            .crs_content ul {
              margin: 0;
              padding: 0;
              list-style: none;
              display: flex;
              flex-direction: column;
              gap: 4px;
              margin-bottom: 16px;
            }
            .crs_content ul li {
              color: #000;
              font-size: 16px;
              line-height: 24px;
            }
            .crs_content ul li a {
              color: #00e;
              font-size: 16px;
              line-height: 24px;
            }
          </style>
        `

        document.head.insertAdjacentHTML('beforeend', style)
        document.querySelector('h1').insertAdjacentHTML('afterend', `<p>${kitsData[id].desc}</p>`)
        document.querySelector('#centercontent').insertAdjacentHTML(
          'beforebegin',
          /* html */ `
          <div class="crs_content">
            <p>What’s included:</p>
            ${kitsData[id].list}
            <p class="price">Price: <span>$${kitsData[id].price}</span></p>
          </div>
        `
        )
      }
    }

    setVisibility() {
      blockVisibility(
        '.spray-kit',
        3,
        'exp_kits_upsell_vis_pdpspray_elem',
        'Products Touch Up Paint Kits Spray Paint Kit'
      )
      blockVisibility(
        '.brush-kit',
        3,
        'exp_kits_upsell_vis_pdpbrush_elem',
        'Products Touch Up Paint Kits Brush Bottle Kit'
      )
      blockVisibility('.pen-kit', 3, 'exp_kits_upsell_vis_pdppen_elem', 'Products Touch Up Paint Kits Pen Kit')
      blockVisibility(
        '.prof-kit',
        3,
        'exp_kits_upsell_vis_pdpprof_elem',
        'Products Touch Up Paint Kits Professional Kit'
      )
    }

    setVisibilityProductPage() {
      const title = document.querySelector('h1').innerText

      blockVisibility('table', 3, 'exp_kits_upsell_vis_pdppopup_elem', title)
    }
  }

  new PaintKits(device)
})()
