;(() => {
  console.log(
    '%c EXP: PDP enhancements (DEV: OS)',
    'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;'
  )
  const $$el = selector => document.querySelectorAll(selector)
  const $el = selector => document.querySelector(selector)
  const git = 'https://conversionratestore.github.io/projects/'
  const server = 'https://conversionrate.top/api/msb/category'
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
      clarity('set', 'exp_soc_trust_object', 'variant_1')
    }
  }, 1000)

  const iconsData = {
    warrantyIcon: /* HTML */ `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
    >
      <g clip-path="url(#clip0_573_9766)">
        <path
          d="M24.1 13.0001C24.1 11.8001 22.7 10.8001 22.4 9.80011C22 8.70011 22.6 7.10011 21.9 6.20011C21.2 5.30011 19.6 5.30011 18.6 4.60011C17.7 3.90011 17.2 2.30011 16.1 2.00011C15 1.60011 13.7 2.50011 12.5 2.50011C11.3 2.50011 10 1.50011 8.9 1.90011C7.8 2.30011 7.3 3.90011 6.4 4.50011C5.4 5.20011 3.8 5.20011 3.1 6.20011C2.4 7.10011 2.9 8.70011 2.6 9.80011C2.3 10.9001 0.900002 11.8001 0.900002 13.0001C0.900002 14.2001 2.3 15.2001 2.6 16.2001C3 17.3001 2.4 18.9001 3.1 19.8001C3.8 20.7001 5.4 20.7001 6.4 21.4001C7.3 22.1001 7.8 23.7001 8.9 24.0001C10 24.3001 11.3 23.4001 12.5 23.4001C13.7 23.4001 15 24.4001 16.1 24.0001C17.2 23.6001 17.7 22.1001 18.6 21.4001C19.5 20.7001 21.2 20.7001 21.9 19.8001C22.6 18.9001 22.1 17.3001 22.4 16.2001C22.8 15.2001 24.1 14.2001 24.1 13.0001ZM12.5 22.0001C7.5 22.0001 3.5 18.0001 3.5 13.0001C3.5 8.00011 7.5 4.00011 12.5 4.00011C17.5 4.00011 21.5 8.00011 21.5 13.0001C21.5 18.0001 17.5 22.0001 12.5 22.0001Z"
          fill="#B68B52"
        ></path>
        <path
          d="M18.2 7.2999C16.7 5.7999 14.7 4.8999 12.5 4.8999C10.3 4.8999 8.29999 5.7999 6.79999 7.2999C5.29999 8.7999 4.39999 10.7999 4.39999 12.9999C4.39999 15.1999 5.19999 17.1999 6.79999 18.6999C8.29999 20.1999 10.3 21.0999 12.5 21.0999C14.7 21.0999 16.7 20.2999 18.2 18.6999C19.7 17.1999 20.6 15.1999 20.6 12.9999C20.6 10.7999 19.7 8.7999 18.2 7.2999Z"
          fill="#B68B52"
        ></path>
        <path
          d="M8 15.6003V14.9003C8.8 14.3003 9.4 13.8003 9.9 13.4003C10.6 12.8003 10.7 12.4003 10.7 12.0003C10.7 11.5003 10.3 11.1003 9.7 11.1003C9.1 11.1003 8.6 11.6003 8.7 12.3003H7.8C7.7 11.2003 8.4 10.3003 9.7 10.3003C10.9 10.3003 11.6 11.1003 11.6 12.0003C11.6 12.5003 11.4 13.1003 10.8 13.7003C10.5 14.1003 10 14.4003 9.3 14.9003H11.7V15.7003H8V15.6003Z"
          fill="white"
        ></path>
        <path
          d="M13.6 10.4004H16.9V11.2004H14.3L14.2 12.4004C14.5 12.2004 14.9 12.0004 15.3 12.0004C16.2 12.0004 17.1 12.7004 17.1 13.8004C17.1 14.9004 16.2 15.7004 15.1 15.7004C14 15.7004 13.4 15.1004 13.1 14.5004L13.9 14.2004C14.1 14.6004 14.5 14.9004 15 14.9004C15.7 14.9004 16.1 14.4004 16.1 13.8004C16.1 13.2004 15.6 12.7004 15 12.7004C14.6 12.7004 14.3 12.9004 14 13.1004L13.2 12.9004L13.6 10.4004Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_573_9766">
          <rect width="25" height="25" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>`,
    freeReturnIcon: /* HTML */ `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
    >
      <g clip-path="url(#clip0_573_9778)">
        <path
          d="M20.8734 3H4.03797C2.88608 3 2 3.92827 2 5.02532V20.9747C2 22.0717 2.97468 23 4.12658 23H20.8734C22.0253 23 23 22.0717 23 20.9747V5.02532C22.9114 3.92827 22.0253 3 20.8734 3ZM12.4557 19.5401C9.44304 19.5401 6.96203 17.1772 6.96203 14.308H8.29114C8.29114 16.5021 10.1519 18.1899 12.3671 18.1899C14.6709 18.1899 16.443 16.4177 16.443 14.308C16.443 12.1139 14.5823 10.4262 12.3671 10.4262V13.0422L9.08861 9.75106L12.5443 6.45992V9.07595C15.557 9.07595 18.038 11.4388 18.038 14.308C17.9494 17.1772 15.4684 19.5401 12.4557 19.5401Z"
          fill="#B68B52"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_573_9778">
          <rect width="25" height="25" fill="white" transform="translate(0 0.5)"></rect>
        </clipPath>
      </defs>
    </svg>`,
    wishlistIcon: `
      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.4 2C20.6 2 22.3 3.8 22.3 5.9C22.3 6.9 21.9 7.9 21.2 8.7L12.5 17.4L3.80001 8.7C3.10001 7.9 2.60001 7 2.60001 5.9C2.70001 3.7 4.40001 2 6.60001 2C7.70001 2 8.60001 2.4 9.40001 3.2L11.1 4.9C11.5 5.3 12 5.5 12.5 5.5C13 5.5 13.5 5.3 13.9 4.9L15.6 3.2C16.4 2.4 17.4 2 18.4 2ZM18.4 0C16.8 0 15.3 0.7 14.2 1.7L12.5 3.4L10.8 1.7C9.70001 0.6 8.20001 0 6.60001 0C3.30001 0 0.700012 2.6 0.700012 5.9C0.700012 7.5 1.40001 9 2.40001 10.1L12.5 20.2L22.6 10.1C23.7 9 24.3 7.5 24.3 5.9C24.3 2.6 21.7 0 18.4 0Z" fill="#A11A17"/>
      </svg>`,
    wishlistFullIcon: `
      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6 10.1L12.5 20.2L2.39995 10.1C1.29995 9 0.699951 7.5 0.699951 5.9C0.699951 2.6 3.29995 0 6.59995 0C8.19995 0 9.69995 0.7 10.8 1.7L12.5 3.4L14.2 1.7C15.3 0.6 16.7999 0 18.4 0C21.6999 0 24.2999 2.6 24.2999 5.9C24.2999 7.5 23.7 9 22.6 10.1Z" fill="#A11A17"/>
      </svg>`,
    giftIcon: /* HTML */ ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="32"
      viewBox="0 0 34 32"
      fill="none"
    >
      <path
        d="M29.7841 7.02396H26.2481C26.3841 6.47996 26.5201 5.93596 26.5201 5.39196C26.5201 2.67196 24.4801 0.631958 21.7601 0.631958C19.9921 0.631958 18.4961 1.44796 17.8161 2.67196L17.0001 3.75996L16.1841 2.67196C15.3681 1.31196 14.0081 0.631958 12.2401 0.631958C9.52015 0.631958 7.48015 2.67196 7.48015 5.39196C7.48015 5.93596 7.61615 6.47996 7.75215 7.02396H4.21615C2.44815 7.02396 0.952148 8.51996 0.952148 10.288V27.968C0.952148 29.736 2.44815 31.232 4.21615 31.232H29.9201C31.6881 31.232 33.1841 29.736 33.1841 27.968V10.288C33.0481 8.38396 31.5521 7.02396 29.7841 7.02396ZM21.7601 3.75996C22.7121 3.75996 23.3921 4.43996 23.3921 5.39196C23.3921 6.34396 22.7121 7.02396 21.7601 7.02396C20.8081 7.02396 20.1281 6.34396 20.1281 5.39196C20.1281 4.43996 20.8081 3.75996 21.7601 3.75996ZM12.2401 3.75996C13.1921 3.75996 13.8721 4.43996 13.8721 5.39196C13.8721 6.34396 13.1921 7.02396 12.2401 7.02396C11.2881 7.02396 10.6081 6.34396 10.6081 5.39196C10.6081 4.43996 11.2881 3.75996 12.2401 3.75996ZM29.7841 27.832H4.21615V24.568H29.9201V27.832H29.7841ZM29.7841 19.808H4.21615V10.152H12.3761L8.97615 14.64L11.5601 16.544L15.3681 11.376L17.0001 9.06396L18.6321 11.376L22.4401 16.544L25.0241 14.64L21.6241 10.152H29.7841V19.808Z"
        fill="#B68B52"
      />
    </svg>`,
    personalizationIcon: /* HTML */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path
          d="M13.4852 19.5105H20.5148L17.0717 10.1857L13.4852 19.5105ZM30.557 0H3.44304C1.57806 0 0 1.57806 0 3.44304V30.557C0 32.4219 1.57806 34 3.44304 34H30.557C32.4219 34 34 32.4219 34 30.557V3.44304C34 1.57806 32.4219 0 30.557 0ZM23.6709 27.9747L21.8059 22.8101H12.1941L10.3291 27.9747H6.74262L15.3502 5.88186H18.5063L27.1139 27.9747C27.2574 27.9747 23.6709 27.9747 23.6709 27.9747Z"
          fill="#B68B52"
        />
      </svg>
    `,
    closeIcon: /* HTML */ ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <g filter="url(#filter0_d_571_2120)">
        <path
          d="M5.91211 2L15.2403 11.3M5.91211 11.3L15.2403 2"
          stroke="white"
          stroke-width="2.325"
          stroke-linecap="round"
          stroke-linejoin="round"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_571_2120"
          x="0.749634"
          y="0.837402"
          width="19.6531"
          height="19.625"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_571_2120" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_571_2120" result="shape" />
        </filter>
      </defs>
    </svg>`,
    returnsIcon: `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
          <g clip-path="url(#clip0_573_9778)">
            <path d="M20.8734 3H4.03797C2.88608 3 2 3.92827 2 5.02532V20.9747C2 22.0717 2.97468 23 4.12658 23H20.8734C22.0253 23 23 22.0717 23 20.9747V5.02532C22.9114 3.92827 22.0253 3 20.8734 3ZM12.4557 19.5401C9.44304 19.5401 6.96203 17.1772 6.96203 14.308H8.29114C8.29114 16.5021 10.1519 18.1899 12.3671 18.1899C14.6709 18.1899 16.443 16.4177 16.443 14.308C16.443 12.1139 14.5823 10.4262 12.3671 10.4262V13.0422L9.08861 9.75106L12.5443 6.45992V9.07595C15.557 9.07595 18.038 11.4388 18.038 14.308C17.9494 17.1772 15.4684 19.5401 12.4557 19.5401Z" fill="#B68B52"/>
          </g>
          <defs>
            <clipPath id="clip0_573_9778">
              <rect width="25" height="25" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>`,
    plusIcon: /* HTML */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
        <rect y="6.625" width="14" height="1.75" fill="#999999" />
        <rect x="6.125" y="0.5" width="1.75" height="14" fill="#999999" />
      </svg>
    `,
    minusIcon: /* HTML */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="3" viewBox="0 0 14 3" fill="none">
        <rect y="0.625" width="14" height="1.75" fill="#999999" />
      </svg>
    `,
    simpleCheck: /* HTML */ ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M3.5498 8.06885L6.88314 11.0688L13.5498 5.06885"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>`,
    leatherIcon: /* HTML */ ` <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <g clip-path="url(#clip0_573_9791)">
        <path
          d="M22.1 19.6H22C21.2 19 20.6 18.5 20.2 17.9C19.7 17.2 19.3 16.3 19 15.2C18.8 14.5 18.8 13.7 18.8 12.9C18.8 12 19 11.2 19.3 10.5C19.6 9.6 20.3 8.9 21.1 8.4C21.2 8.3 21.4 8.3 21.5 8.2C21.6 8.1 21.8 8.1 21.9 8C22 8 22.2 7.9 22.2 7.7V7.5L21.8 6.4C21.7 6.2 21.7 5.9 21.6 5.6C21.5 5.3 21.4 5.1 21.4 4.8C21.3 4.7 21.2 4.6 21 4.6C20.2 4.6 19.5 4.5 18.7 4.3C17.9 4.1 17.1 3.6 16.5 3C16 2.5 15.7 2 15.5 1.3C15.5 1.2 15.4 1 15.2 1H9.89999C9.79999 1 9.59999 1.1 9.59999 1.3C9.39999 2 8.99999 2.6 8.29999 3.1C7.59999 3.7 6.79999 4.1 5.69999 4.4C4.99999 4.5 4.39999 4.6 3.89999 4.6C3.69999 4.6 3.49999 4.6 3.49999 4.9L2.79999 7.3C2.79999 7.4 2.79999 7.7 3.09999 7.7C3.89999 8 4.49999 8.4 4.89999 8.9C5.19999 9.2 5.49999 9.6 5.89999 10.2C5.99999 10.4 6.19999 10.6 6.29999 10.8C6.39999 11.1 6.49999 11.4 6.59999 11.8C6.59999 12 6.69999 12.2 6.69999 12.3C6.79999 12.8 6.79999 13.2 6.79999 13.7C6.79999 14.9 6.49999 16 5.89999 17.3C5.49999 18.2 4.69999 19 3.69999 19.6C3.59999 19.7 3.49999 19.7 3.49999 19.8C3.49999 19.9 3.49999 20 3.59999 20.1C3.89999 20.5 4.19999 20.9 4.49999 21.3C4.69999 21.6 4.99999 22 5.29999 22.4C5.39999 22.5 5.59999 22.7 5.69999 22.5C5.69999 22.5 5.69999 22.4 5.79999 22.4C6.39999 22 6.99999 21.8 7.69999 21.7C7.89999 21.6 8.29999 21.6 8.59999 21.6C9.79999 21.6 10.9 22 11.7 22.9C12 23.1 12.3 23.5 12.5 23.8C12.5 23.8 12.5 23.9 12.6 23.9H12.7C12.8 23.9 12.9 23.9 12.9 23.8C13 23.8 13 23.7 13 23.7C13.3 23.1 13.9 22.6 14.5 22.2C15 21.9 15.4 21.7 16 21.6C16.5 21.5 17 21.5 17.5 21.6C18.1 21.7 18.8 22 19.7 22.4C19.8 22.4 20 22.4 20.1 22.3C20.8 21.6 21.4 20.8 22 20C22.1 19.9 22.1 19.9 22.1 19.8C22.2 19.7 22.1 19.6 22.1 19.6Z"
          fill="#B68B52"
        />
        <path
          d="M13.1 22.0996C13.1 22.0996 13 22.0996 12.9 22.0996C12.8 22.1996 12.8 22.1996 12.7 22.2996C12.6 22.1996 12.6 22.1996 12.5 22.0996C12.4 22.0996 12.4 22.0996 12.3 22.0996L12.2 22.1996V22.2996V22.3996C12.3 22.4996 12.4 22.5996 12.5 22.6996L12.6 22.7996H12.7H12.8L12.9 22.6996C13 22.5996 13.1 22.4996 13.2 22.2996V22.1996V22.0996H13.1Z"
          fill="white"
        />
        <path
          d="M9.99996 20.6996C9.69996 20.5996 9.39996 20.5996 8.99996 20.5996H8.89996V20.6996V20.8996C8.89996 20.9996 8.89996 20.9996 8.99996 20.9996C9.29996 20.9996 9.59996 21.0996 9.89996 21.0996C9.89996 21.0996 9.89996 21.0996 9.99996 21.0996C9.99996 21.0996 9.99996 21.0996 10.1 20.9996V20.7996L9.99996 20.6996Z"
          fill="white"
        />
        <path
          d="M7.99997 20.5C7.79997 20.5 7.59997 20.6 7.39997 20.6C7.29997 20.6 7.19997 20.6 7.09997 20.7C6.99997 20.7 6.99997 20.8 6.99997 20.9V21.1C6.99997 21.1 6.99997 21.2 7.09997 21.2C7.09997 21.2 7.09997 21.2 7.19997 21.2C7.29997 21.2 7.39997 21.1 7.49997 21.1C7.59997 21 7.79997 21 7.99997 21H8.09997V20.9V20.7C8.09997 20.6 8.09997 20.5 7.99997 20.5Z"
          fill="white"
        />
        <path
          d="M11.8 21.5C11.5 21.3 11.2 21.1 10.9 21H10.8C10.8 21 10.7 21 10.7 21.1L10.6 21.3C10.6 21.4 10.6 21.4 10.7 21.5C11 21.6 11.2 21.8 11.5 22C11.5 22 11.5 22 11.6 22C11.6 22 11.7 22 11.7 21.9L11.8 21.8C11.8 21.6 11.8 21.6 11.8 21.5Z"
          fill="white"
        />
        <path
          d="M6.19999 21.0999C6.09999 20.9999 6.09999 20.9999 6.09999 21.0999C5.99999 21.0999 5.89999 21.1999 5.79999 21.1999C5.69999 21.0999 5.69999 20.9999 5.59999 20.8999H5.49999H5.39999L5.29999 20.9999V21.0999V21.1999C5.39999 21.2999 5.49999 21.4999 5.59999 21.5999V21.6999L5.69999 21.7999C5.69999 21.7999 5.69999 21.7999 5.79999 21.7999H5.89999C5.99999 21.6999 6.19999 21.6999 6.29999 21.5999C6.39999 21.5999 6.39999 21.4999 6.39999 21.3999L6.19999 21.0999Z"
          fill="white"
        />
        <path
          d="M4.99998 19.5C4.89998 19.5 4.79998 19.5 4.79998 19.5C4.69998 19.6 4.49998 19.7 4.39998 19.8L4.29998 19.9C4.29998 19.9 4.29998 20 4.19998 20V20.1L4.29998 20.2C4.39998 20.3 4.49998 20.5 4.59998 20.6H4.69998H4.79998L4.99998 20.5C5.09998 20.5 5.09998 20.4 4.99998 20.3C4.99998 20.2 4.89998 20.1 4.89998 20C4.99998 20 4.99998 19.9 5.09998 19.9C5.19998 19.9 5.19998 19.8 5.09998 19.7L4.99998 19.5Z"
          fill="white"
        />
        <path
          d="M6.39997 18.1996L6.29997 18.0996H6.19997C6.19997 18.0996 6.09997 18.0996 6.09997 18.1996C5.89997 18.4996 5.69997 18.6996 5.49997 18.8996V18.9996V19.0996L5.59997 19.1996H5.69997H5.79997C5.99997 18.9996 6.19997 18.6996 6.39997 18.3996C6.49997 18.3996 6.49997 18.2996 6.39997 18.1996C6.49997 18.2996 6.49997 18.1996 6.39997 18.1996Z"
          fill="white"
        />
        <path
          d="M6.89998 10.2L7.09998 10.1C7.19998 10.1 7.19998 10 7.09998 9.9C6.99998 9.8 6.89998 9.6 6.79998 9.5C6.69998 9.3 6.59998 9.2 6.49998 9.1C6.49998 9.1 6.49998 9.1 6.39998 9H6.29998L6.19998 9.2C6.19998 9.2 6.19998 9.2 6.09998 9.3V9.4C6.19998 9.5 6.29998 9.7 6.39998 9.8C6.49998 9.9 6.59998 10 6.69998 10.2C6.79998 10.2 6.79998 10.2 6.89998 10.2Z"
          fill="white"
        />
        <path
          d="M7.29996 16.5998C7.29996 16.4998 7.29996 16.4998 7.19996 16.3998L6.99996 16.2998C6.89996 16.2998 6.89996 16.2998 6.79996 16.3998C6.69996 16.6998 6.59996 16.9998 6.39996 17.2998C6.39996 17.3998 6.39996 17.3998 6.49996 17.4998L6.69996 17.5998C6.69996 17.5998 6.69996 17.5998 6.79996 17.5998C6.79996 17.5998 6.89996 17.5998 6.89996 17.4998C7.09996 17.1998 7.19996 16.8998 7.29996 16.5998Z"
          fill="white"
        />
        <path
          d="M5.39997 8.39961C5.49997 8.49961 5.49997 8.49961 5.59997 8.59961H5.69997H5.79997L5.89997 8.49961V8.39961V8.29961C5.89997 8.19961 5.79997 8.19961 5.79997 8.09961C5.59997 7.89961 5.39997 7.79961 5.19997 7.59961C5.09997 7.59961 5.09997 7.59961 4.99997 7.59961V7.79961V7.89961V7.99961C5.09997 8.09961 5.29997 8.19961 5.39997 8.39961Z"
          fill="white"
        />
        <path
          d="M7.89997 13.6996V13.5996C7.89997 13.2996 7.89997 12.9996 7.89997 12.6996V12.5996H7.79997H7.59997H7.49997V12.6996C7.49997 12.9996 7.49997 13.2996 7.49997 13.4996V13.5996C7.49997 13.6996 7.59997 13.6996 7.59997 13.6996H7.79997C7.79997 13.8996 7.79997 13.7996 7.89997 13.6996C7.89997 13.7996 7.89997 13.7996 7.89997 13.6996Z"
          fill="white"
        />
        <path
          d="M7.69998 14.5996H7.49998C7.39998 14.5996 7.39998 14.5996 7.39998 14.6996C7.39998 14.9996 7.29998 15.2996 7.19998 15.5996C7.19998 15.6996 7.19998 15.6996 7.29998 15.7996H7.49998C7.59998 15.7996 7.59998 15.7996 7.59998 15.6996C7.69998 15.3996 7.69998 15.0996 7.79998 14.6996C7.79998 14.6996 7.79998 14.6996 7.69998 14.5996C7.79998 14.5996 7.79998 14.5996 7.69998 14.5996Z"
          fill="white"
        />
        <path
          d="M7.29998 11.5997C7.29998 11.6997 7.29998 11.7997 7.29998 11.7997C7.29998 11.8997 7.39998 11.8997 7.39998 11.8997H7.59998C7.59998 11.8997 7.69998 11.8997 7.69998 11.7997V11.6997C7.69998 11.5997 7.69998 11.5997 7.69998 11.4997C7.69998 11.2997 7.59998 10.9997 7.59998 10.7997C7.59998 10.7997 7.59998 10.6997 7.49998 10.6997C7.39998 10.6997 7.39998 10.6997 7.39998 10.6997H7.19998C7.19998 10.6997 7.09998 10.6997 7.09998 10.7997V10.8997C7.19998 11.1997 7.19998 11.3997 7.29998 11.5997Z"
          fill="white"
        />
        <path
          d="M4.39998 7.1999C4.39998 7.0999 4.39998 7.0999 4.29998 6.9999C4.29998 6.9999 4.19998 6.9999 4.09998 6.8999L4.19998 6.5999V6.4999C4.19998 6.4999 4.19998 6.3999 4.09998 6.3999H3.89998H3.79998C3.79998 6.3999 3.69998 6.3999 3.69998 6.4999L3.59998 6.9999C3.59998 7.0999 3.59998 7.0999 3.69998 7.1999H3.79998C3.99998 7.2999 4.09998 7.2999 4.19998 7.3999C4.19998 7.3999 4.19998 7.3999 4.29998 7.3999C4.29998 7.3999 4.39998 7.3999 4.39998 7.2999V7.1999Z"
          fill="white"
        />
        <path
          d="M3.99996 5.99971H4.19996C4.19996 5.99971 4.19996 5.99971 4.29996 5.99971C4.29996 5.99971 4.39996 5.99971 4.39996 5.89971L4.49996 5.59971C4.59996 5.59971 4.69996 5.59971 4.89996 5.59971C4.99996 5.59971 4.99996 5.49971 4.99996 5.49971V5.29971V5.19971H4.89996C4.69996 5.19971 4.59996 5.19971 4.39996 5.19971H4.29996C4.19996 5.19971 4.19996 5.19971 4.19996 5.29971L3.89996 5.89971C3.89996 5.89971 3.89996 5.99971 3.99996 5.99971Z"
          fill="white"
        />
        <path
          d="M8.19998 4.2C8.19998 4.1 8.19998 4.1 8.19998 4.2C8.09998 4.1 8.09998 4.1 7.99998 4.2C7.79998 4.3 7.59998 4.4 7.29998 4.5C7.29998 4.5 7.19998 4.5 7.19998 4.6V4.7L7.29998 4.9L7.39998 5C7.39998 5 7.39998 5 7.49998 5C7.79998 4.8 7.99998 4.6 8.29998 4.5C8.39998 4.5 8.39998 4.4 8.29998 4.3L8.19998 4.2Z"
          fill="white"
        />
        <path
          d="M8.99999 3.9C9.29999 3.7 9.59999 3.5 9.79999 3.2C9.79999 3.1 9.79999 3.1 9.79999 3H9.59999C9.49999 3 9.49999 3 9.39999 3C9.19999 3.2 8.99999 3.4 8.79999 3.6V3.7V3.8L8.99999 3.9C8.89999 3.9 8.89999 3.9 8.99999 3.9Z"
          fill="white"
        />
        <path
          d="M5.59997 5.3998C5.69997 5.4998 5.69997 5.4998 5.69997 5.4998C5.79997 5.4998 5.89997 5.4998 5.99997 5.3998C6.19997 5.3998 6.39997 5.2998 6.59997 5.1998C6.69997 5.1998 6.69997 5.0998 6.69997 4.9998L6.59997 4.8998C6.59997 4.8998 6.59997 4.7998 6.49997 4.7998H6.39997C6.29997 4.8998 6.09997 4.9998 5.89997 4.9998C5.79997 4.9998 5.69997 4.9998 5.59997 5.0998C5.59997 5.0998 5.49997 5.0998 5.49997 5.1998V5.2998L5.59997 5.3998Z"
          fill="white"
        />
        <path
          d="M11 1.9998V1.8998C11 1.7998 10.9 1.7998 10.9 1.7998H10.3C10.2 1.7998 10.2 1.7998 10.2 1.8998V1.9998C10.1 1.9998 9.99996 2.1998 9.89996 2.2998V2.3998C9.89996 2.3998 9.89996 2.4998 9.99996 2.4998L10.1 2.5998C10.1 2.5998 10.1 2.5998 10.2 2.5998C10.2 2.5998 10.3 2.5998 10.3 2.4998C10.4 2.3998 10.4 2.2998 10.5 2.1998H10.9C10.9 2.1998 11 2.0998 11 1.9998Z"
          fill="white"
        />
        <path
          d="M13.1 1.9998V1.8998C13.1 1.7998 13 1.7998 13 1.7998H11.9C11.8 1.7998 11.8 1.8998 11.8 1.8998V1.9998C11.8 2.0998 11.9 2.0998 11.9 2.0998H13C13.1 2.1998 13.1 2.0998 13.1 1.9998Z"
          fill="white"
        />
        <path
          d="M14.8 1.8998C14.8 1.7998 14.7 1.7998 14.7 1.7998H14.1C14 1.7998 14 1.7998 14 1.8998V1.9998C14 2.0998 14.1 2.0998 14.1 2.0998H14.5C14.6 2.1998 14.6 2.2998 14.7 2.3998L14.8 2.4998C14.8 2.4998 14.8 2.4998 14.9 2.4998L15.1 2.3998C15 2.4998 15 2.3998 15 2.2998C14.9 2.1998 14.8 1.9998 14.8 1.8998Z"
          fill="white"
        />
        <path
          d="M15.7 4C15.8 4 15.8 4.1 15.7 4C15.8 4.1 15.8 4.1 15.7 4C15.8 4 15.9 4 15.9 4L16 3.9C16 3.8 16 3.8 16 3.7C15.9 3.6 15.9 3.6 15.8 3.5C15.6 3.3 15.5 3.2 15.4 3H15.3H15.2L15.1 3.1V3.2V3.3C15.2 3.5 15.4 3.7 15.6 3.8C15.6 3.9 15.7 4 15.7 4Z"
          fill="white"
        />
        <path
          d="M17.4 5.0998C17.4 4.9998 17.5 4.9998 17.4 5.0998L17.5 4.8998C17.5 4.7998 17.5 4.7998 17.4 4.6998C17.1 4.5998 16.9 4.3998 16.6 4.2998H16.5C16.5 4.2998 16.4 4.2998 16.4 4.3998L16.3 4.4998C16.3 4.5998 16.3 4.5998 16.3 4.6998C16.7 4.7998 17 4.8998 17.4 5.0998C17.3 5.0998 17.3 5.0998 17.4 5.0998Z"
          fill="white"
        />
        <path
          d="M18.2 5.3999C18.6 5.4999 18.8 5.5999 19.1 5.5999C19.2 5.5999 19.2 5.5999 19.2 5.4999V5.2999V5.1999C19.2 5.1999 19.2 5.1999 19.1 5.0999C18.8 4.9999 18.6 4.9999 18.3 4.8999H18.2C18.1 4.8999 18.1 4.8999 18 4.9999V5.1999C18.1 5.2999 18.1 5.2999 18.2 5.3999C18.1 5.3999 18.1 5.3999 18.2 5.3999Z"
          fill="white"
        />
        <path
          d="M20.5 6.09971C20.5 6.19971 20.6 6.19971 20.6 6.19971L20.8 6.09971C20.8 6.09971 20.9 6.09971 20.9 5.99971V5.89971V5.79971C20.9 5.69971 20.8 5.49971 20.8 5.39971V5.29971C20.8 5.19971 20.7 5.19971 20.7 5.19971H20.6C20.4 5.19971 20.3 5.19971 20.1 5.19971H20V5.29971V5.49971V5.59971H20.1C20.2 5.59971 20.3 5.59971 20.5 5.59971C20.4 5.89971 20.4 5.99971 20.5 6.09971Z"
          fill="white"
        />
        <path
          d="M21.3 7.29961L21.1 6.69961C21.1 6.59961 21 6.59961 20.9 6.59961L20.7 6.69961C20.7 6.69961 20.6 6.69961 20.6 6.79961V6.89961L20.7 7.19961C20.6 7.19961 20.5 7.29961 20.4 7.29961C20.4 7.29961 20.3 7.29961 20.3 7.39961V7.49961L20.4 7.69961L20.5 7.79961C20.5 7.79961 20.5 7.79961 20.6 7.79961C20.7 7.69961 20.9 7.69961 21 7.59961H21.1C21.3 7.39961 21.3 7.39961 21.3 7.29961Z"
          fill="white"
        />
        <path
          d="M19.7 18.9996C19.7 19.0996 19.7 19.0996 19.7 18.9996C19.8 18.9996 19.9 18.9996 19.9 18.9996L20 18.8996V18.7996V18.6996C19.8 18.4996 19.7 18.2996 19.6 18.0996C19.5 17.9996 19.5 17.8996 19.4 17.7996C19.4 17.6996 19.3 17.6996 19.2 17.7996L19 17.9996C18.9 17.9996 18.9 18.0996 19 18.1996C19.1 18.2996 19.1 18.3996 19.2 18.4996C19.3 18.5996 19.5 18.7996 19.7 18.9996Z"
          fill="white"
        />
        <path
          d="M17.7 13.0999H17.9C18 13.0999 18 12.9999 18 12.9999V12.8999C18 12.5999 18 12.2999 18.1 11.9999C18.1 11.8999 18.1 11.8999 18 11.8999H17.8H17.7V11.9999C17.7 12.2999 17.6 12.5999 17.6 12.9999V13.0999C17.6 12.9999 17.7 13.0999 17.7 13.0999Z"
          fill="white"
        />
        <path
          d="M17.9 10.9H18.1C18.1 10.9 18.1 10.9 18.2 10.9C18.2 10.9 18.3 10.9 18.3 10.8C18.4 10.5 18.5 10.3 18.6 10C18.6 9.9 18.7 9.8 18.7 9.8C18.7 9.7 18.7 9.7 18.6 9.6L18.4 9.5H18.3C18.3 9.5 18.2 9.5 18.2 9.6C18.2 9.7 18.1 9.8 18.1 9.8C18 10.1 17.9 10.3 17.8 10.6C17.8 10.8 17.9 10.9 17.9 10.9Z"
          fill="white"
        />
        <path
          d="M18.5 15.9999C18.5 15.8999 18.4 15.8999 18.3 15.8999L18.2 15.9999C18.2 15.9999 18.1 15.9999 18.1 16.0999V16.1999C18.2 16.5999 18.3 16.8999 18.5 17.1999C18.5 17.1999 18.5 17.2999 18.6 17.2999C18.6 17.2999 18.6 17.2999 18.7 17.2999L18.9 17.1999C19 17.1999 19 17.0999 19 16.9999C18.7 16.6999 18.6 16.3999 18.5 15.9999Z"
          fill="white"
        />
        <path
          d="M18 13.8999H17.7C17.6 13.8999 17.6 13.9999 17.6 13.9999C17.6 14.3999 17.7 14.7999 17.8 15.0999C17.8 15.0999 17.8 15.1999 17.9 15.1999C17.9 15.1999 17.9 15.1999 18 15.1999H18.2C18.3 15.1999 18.3 15.0999 18.3 14.9999C18.1 14.6999 18.1 14.3999 18 13.8999Z"
          fill="white"
        />
        <path
          d="M19.1 9.1C19.4 8.8 19.6 8.5 19.9 8.3V8.2V8.1L19.8 8H19.7H19.6C19.3 8.2 19.1 8.5 18.8 8.8C18.8 8.9 18.8 8.9 18.8 9L19.1 9.1C19 9.1 19 9.1 19.1 9.1Z"
          fill="white"
        />
        <path
          d="M21.2 19.7999C21 19.5999 20.9 19.4999 20.7 19.3999C20.6 19.3999 20.6 19.3999 20.5 19.3999L20.4 19.4999V19.5999V19.6999C20.5 19.7999 20.6 19.7999 20.6 19.8999C20.5 19.9999 20.5 20.0999 20.4 20.0999V20.1999V20.2999L20.5 20.3999C20.5 20.3999 20.5 20.3999 20.6 20.3999C20.6 20.3999 20.7 20.3999 20.7 20.2999C20.8 20.1999 20.9 19.9999 21 19.8999V19.7999C21.2 19.9999 21.2 19.8999 21.2 19.7999Z"
          fill="white"
        />
        <path
          d="M20.2 20.8999C20.1 20.8999 20.1 20.8999 20.2 20.8999C20.1 20.8999 20 20.8999 20 20.8999C19.9 20.9999 19.8 21.0999 19.8 21.1999C19.7 21.0999 19.6 21.0999 19.5 21.0999H19.4C19.4 21.0999 19.3 21.0999 19.3 21.1999L19.2 21.3999C19.2 21.4999 19.2 21.4999 19.3 21.5999C19.4 21.6999 19.6 21.6999 19.8 21.7999H19.9C19.9 21.7999 19.9 21.7999 20 21.7999H20.1C20.2 21.6999 20.3 21.4999 20.4 21.3999C20.4 21.2999 20.4 21.2999 20.4 21.1999L20.2 20.8999Z"
          fill="white"
        />
        <path
          d="M16.5 20.3999C16.3 20.3999 16 20.4999 15.8 20.4999C15.7 20.4999 15.6 20.4999 15.5 20.5999C15.5 20.5999 15.4 20.5999 15.4 20.6999V20.7999V20.9999C15.4 21.0999 15.5 21.0999 15.5 21.0999C15.6 21.0999 15.7 21.0999 15.8 20.9999C16 20.9999 16.2 20.8999 16.4 20.8999H16.5V20.7999V20.5999C16.6 20.4999 16.6 20.3999 16.5 20.3999Z"
          fill="white"
        />
        <path
          d="M18.5 20.6999C18.3 20.5999 18 20.5999 17.8 20.4999C17.7 20.4999 17.6 20.4999 17.5 20.3999H17.4C17.4 20.3999 17.4 20.3999 17.3 20.4999V20.6999V20.7999C17.3 20.7999 17.3 20.7999 17.4 20.8999C17.5 20.8999 17.6 20.8999 17.7 20.9999C17.9 20.9999 18.1 21.0999 18.3 21.1999C18.4 21.1999 18.4 21.1999 18.4 21.0999V20.8999C18.6 20.7999 18.6 20.7999 18.5 20.6999Z"
          fill="white"
        />
        <path
          d="M14.7 20.9999C14.6 20.8999 14.6 20.8999 14.5 20.8999C14.3 20.9999 14.1 21.0999 13.9 21.2999C13.8 21.3999 13.7 21.3999 13.6 21.4999C13.5 21.4999 13.5 21.5999 13.6 21.6999L13.7 21.7999C13.7 21.7999 13.7 21.7999 13.8 21.8999H13.9C14 21.7999 14.1 21.7999 14.1 21.6999C14.3 21.5999 14.4 21.4999 14.6 21.3999C14.7 21.3999 14.7 21.2999 14.7 21.1999V20.9999Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_573_9791">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>`,
    checkIcon: /* HTML */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <rect x="0.5" y="1" width="23" height="23" fill="#A11A17" stroke="#A11A17" />
        <path d="M6 12.5L10 16.5L18 8.5" stroke="white" stroke-width="2" stroke-linecap="round" />
      </svg>
    `,
    compIcon: /* HTML */ `
      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
        <path
          d="M29.6565 22.1526H28.4251V8.34445C28.4251 7.40316 27.6456 6.73552 26.7045 6.73552H6.37C5.42828 6.73552 4.67464 7.40294 4.67464 8.34445V22.1524H3.41753C3.30252 22.1524 3.21631 22.1416 3.21631 22.2566V22.4506C3.21631 23.495 4.05848 24.4442 5.10251 24.4442H27.9709C29.0156 24.4442 29.883 23.495 29.883 22.4506V22.2566C29.8832 22.1418 29.7716 22.1526 29.6565 22.1526ZM16.2433 7.37583C16.3975 7.21951 16.6764 7.21951 16.8306 7.37583C16.9096 7.45272 16.9535 7.56117 16.9535 7.66962C16.9535 7.77997 16.9096 7.8863 16.8306 7.96531C16.7533 8.04241 16.6472 8.08604 16.537 8.08604C16.4269 8.08604 16.3204 8.04241 16.2433 7.96531C16.1638 7.88609 16.1202 7.77976 16.1202 7.66962C16.1204 7.55905 16.164 7.45272 16.2433 7.37583ZM27.1747 21.3191H5.92455V8.6107H27.1747V21.3191Z"
          fill="#333333"
        />
      </svg>
    `
  }

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
  // load list of scripts
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

  const blockVisibility = (selector, viewTime, event, descr, type, location) => {
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
            descr || 'Element visibility',
            type || `View element on screen (${viewTime} sec or more)`,
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

  const briefcases = {
    man: [
      {
        title: 'The Calvino Canvas',
        link: 'https://www.maxwellscottbags.com/products/calvino-canvas-leather-laptop-business-bag.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/c/a/calvino_canvas_black_01_1.jpg',
        sizes: [15, 16]
      },
      {
        title: 'The Calvino',
        link: 'https://www.maxwellscottbags.com/products/calvino-luxury-leather-mens-business-bag.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/c/a/calvino-chestnut_tan_01_1.jpg',
        sizes: [15, 16]
      },
      {
        title: 'The Calvino Large',
        link: 'https://www.maxwellscottbags.com/products/calvinol-17inch-luxury-mens-laptop-bag.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/c/a/calvino_large_tan_01.jpg',
        sizes: [15, 16, 17]
      },
      {
        title: 'The Loreto',
        link: 'https://www.maxwellscottbags.com/products/loreto-mens-luxury-15inch-laptop-satchel.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/l/o/loreto_15_tan_01_1.jpg',
        sizes: [15, 16]
      },
      {
        title: 'The Loreto Large',
        link: 'https://www.maxwellscottbags.com/products/loretol-mens-leather-17inch-briefcase-satchel.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/l/o/loreto_17_tan_01.jpg',
        sizes: [15, 16, 17]
      },
      {
        title: 'The Teramo',
        link: 'https://www.maxwellscottbags.com/products/teramo-luxury-mens-laptop-bag-trolley-sleeve.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/l/a/lagaro_new_tan_01.jpg',
        sizes: [15, 16]
      },
      {
        title: 'The Paolo Large',
        link: 'https://www.maxwellscottbags.com/products/paolol-luxury-large-leather-laptop-briefcase.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/p/a/paolo_large_tan_01.jpg',
        sizes: [15, 16, 17]
      },

      {
        title: 'The Vaolterra',
        link: 'https://www.maxwellscottbags.com/products/volterra-mens-fine-leather-17-laptop-briefcase.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/t/a/tan_front_3_8.jpg',
        sizes: [15, 16, 17]
      }
    ],
    woman: [
      {
        title: 'The Fabia',
        link: 'https://www.maxwellscottbags.com/products/fabia-ladies-quality-work-laptop-handbag.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/f/a/fabia_chestnut_tan_01_1.jpg',
        sizes: [14, 15, 16]
      },
      {
        title: 'The Fiorella',
        link: 'https://www.maxwellscottbags.com/products/fiorella-ladies-luxury-leather-laptop-briefcase-bag.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/f/i/fiorella_wine_01_1_1.jpg',
        sizes: [14, 15, 16]
      },
      {
        title: 'The Sorento',
        link: 'https://www.maxwellscottbags.com/products/the-sorrento-womens-quality-leather-14-laptop-bag.html',
        image: 'https://www.maxwellscottbags.com/media/catalog/product/s/o/sorrento_taupe_01.jpg',
        sizes: [14]
      }
    ]
  }
  const dir = `https://conversionratestore.github.io/projects/msb/img/`
  const media = window.matchMedia('(max-width: 768px)').matches

  class EnhancePdp {
    constructor() {
      this.device = screen.width <= 768 ? 'Mobile' : 'Desktop'
      this.targetPage = 'maxwellscottbags.com/products'
      this.currentCountry = window.location.href.split('maxwellscottbags.')[0].includes('us') ? 'US' : 'GB'
      this.init()
    }

    init() {
      const currentUrl = location.href
      if (currentUrl.includes(this.targetPage)) {
        this.#initStyles()
        this.#addBadges()
        this.#addAccordion()
        this.#createsPopups()
        this.#createProductSticky()
        this.#addQualityBadge()
        this.#changeExtrasBadge()
        this.#changeRelatedPosition()
        this.#addTrustpilot()
        this.#changeProductGallery()
        this.#addInstalmentOption()
        this.#changePopups()
        this.#allGroupProductSlider()
        this.#addLaptopBriefcaseSizeChart()
        this.#events()
      }
      this.#cartEvents()
    }

    #events() {
      waitForElement('.crs_warranty').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer('exp_soc_trus_objec_but_pdp_warran', '25-Year Warranty', 'Button', 'PDP First screen')
        })
      })
      waitForElement('.crs_wishlist').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer('exp_soc_trus_objec_but_pdp_save', 'Save to wishlist', 'Button', 'PDP First screen')
        })
      })
      waitForElement('.product-reviews-summary').then(() => {
        window.focus()
        window.addEventListener('blur', function () {
          if (document.activeElement.closest('.product-reviews-summary iframe')) {
            pushDataLayer('exp_soc_trus_objec_link_pdp_revi', 'Reviews', 'Link', 'PDP Product title')
          }
        })
      })
      waitForElement('.swatch-attribute-options').then(elem => {
        elem.addEventListener('click', event => {
          if (event.target.matches('.swatch-option')) {
            const color = event.target.dataset.optionLabel
            pushDataLayer(
              'exp_soc_trus_objec_icon_pdp_chooscol',
              'Choose colour',
              'Icone',
              'PDP Product colour options'
            )
          }
        })
      })
      waitForElement('#giftWrapLink').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer('exp_soc_trus_objec_check_pdp_addgift', 'Add Gift Wrap', 'Checkbox', 'PDP Extra option')
        })
      })
      waitForElement('.gift-popup._show').then(elem => {
        blockVisibility(
          '.gift-popup._show',
          3,
          'exp_soc_trus_objec_vis_gift_popupview',
          'Popup view',
          'Visibility',
          'Popup OUR GIFT WRAPPING SERVICE'
        )
        elem.querySelector('.modal-footer button').addEventListener('click', () => {
          pushDataLayer(
            'exp_soc_trus_objec_but_gift_addwrap',
            'Add gift wrap',
            'Button',
            'Popup CTA OUR GIFT WRAPPING SERVICE'
          )
        })
      })
      waitForElement('#personalizeLink').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer('exp_soc_trus_objec_check_pdp_addperson', 'Add Personalisation', 'Checkbox', 'PDP Extra option')
        })
      })
      waitForElement('.personalize-popup._show').then(elem => {
        blockVisibility(
          '.personalize-popup._show',
          3,
          'exp_soc_trus_objec_vis_person_popview',
          'Popup view',
          'Visibility',
          'Popup PERSONALISE YOUR ORDER'
        )
        elem.querySelector('.modal-footer .btn-personalize').addEventListener('click', event => {
          pushDataLayer('exp_soc_trus_objec_but_person_confir', 'Confirm', 'Button', 'Popup CTA PERSONALISE YOUR ORDER')
        })
      })

      blockVisibility(
        '.tocart',
        3,
        'exp_soc_trus_objec_stickbut_pdp_add',
        'Add to basket',
        'Visibility',
        'PDP Sticky CTA'
      )

      waitForElement('.tocart').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer('exp_soc_trus_objec_but_pdp_add', 'Add to basket', 'Button', 'PDP Under Block Extra option')
        })
      })
      blockVisibility(
        '.badges_button.badges__warranty',
        3,
        'exp_soc_trus_objec_vis_pdpbloc_warran',
        '25-Year warranty',
        'Visibility',
        'PDP Block Warranty and Returns'
      )
      waitForElement('.badges__warranty span:nth-of-type(2)').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer(
            'exp_soc_trus_objec_but_pdpwarra_more',
            'Learn more',
            'Button',
            'PDP Block Warranty and Returns 25-Year warranty'
          )
        })
      })
      blockVisibility(
        '.badges_button.badges__return',
        3,
        'exp_soc_trus_objec_vis_pdpbloc_risk',
        '60-day risk-free return',
        'Visibility',
        'PDP Block Warranty and Returns'
      )
      waitForElement('.badges__return span:nth-of-type(2)').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer(
            'exp_soc_trus_objec_but_pdprisk_more',
            'Learn more',
            'Button',
            'PDP Block Warranty and Returns 60-day risk-free return'
          )
        })
      })
      waitForElement('button.needsclick').then(elem => {
        blockVisibility(
          'button.needsclick',
          3,
          'exp_soc_trus_objec_vis_discorder_view',
          'View discount',
          'Visibility',
          'Discount badge 10% Off Your First Order'
        )

        document.addEventListener('click', event => {
          if (event.target.closest('button.needsclick[aria-label="Open Form"]')) {
            pushDataLayer(
              'exp_soc_trus_objec_stic_discorder_disc',
              'Discount',
              'Sticky button',
              'Discount badge 10% Off Your First Order'
            )
          }
        })
      })
    }

    #cartEvents() {
      waitForElement('.block-minicart').then(elem => {
        blockVisibility(
          '.block-minicart',
          3,
          'exp_soc_trus_objec_vis_shopopup_page',
          'Page view',
          'Visibility',
          'Shopping cart Popup'
        )
      })

      waitForElement('.block-minicart').then(() => {
        document.addEventListener('click', event => {
          if (event.target.closest('#top-cart-btn-checkout')) {
            pushDataLayer(
              'exp_soc_trus_objec_but_shopopup_proc',
              'Proceed to checkout',
              'Button',
              'Shopping cart Popup'
            )
          }
          if (event.target.closest('.paypal input')) {
            pushDataLayer('exp_soc_trus_objec_but_shopopup_paypal', 'Paypal', 'Button', 'Shopping cart Popup')
          }
        })
      })
    }
    #addTopBadges() {
      const topBadgeContainer = `
        <div class="crs_top_badges">
          <div class="crs_warranty d-flex align-items-center">
            ${iconsData.warrantyIcon}
            25-Year Warranty
          </div>
          <a href="#" class="crs_wishlist">
            ${iconsData.wishlistIcon}
            ${iconsData.wishlistFullIcon}
          </a>
        </div>
      `
      waitForElement('.page-layout-1column .product.media .sticky_container').then(el => {
        el.insertAdjacentHTML('afterbegin', topBadgeContainer)
        document.querySelector('.crs_top_badges .crs_warranty').addEventListener('click', () => {
          document.querySelectorAll('.crs_popup')[0].classList.add('active')
        })
      })
    }

    #addQualityBadge() {
      const qualityBadge = `
        <div class="crs_quality text-center">
            <div class="mx-auto">${iconsData.leatherIcon}</div>
            <h4>Made in Italy.
                <span>Now, Always, Forever.</span>
            </h4>
            <a href="#leather-unique-block-desktop" class="crs_quality_more">Learn more</ф>
        </div>`

      waitForElement('.product-add-form').then(el => {
        el.insertAdjacentHTML('afterend', qualityBadge)
        blockVisibility(
          '.crs_quality',
          3,
          'exp_soc_trus_objec_vis_pdpleath_made',
          'Handcrafted leather made in italy',
          'Visibility',
          'PDP Leather quality'
        )
      })
      waitForElement('.crs_quality_more').then(elem => {
        elem.addEventListener('click', () => {
          pushDataLayer('exp_soc_trus_objec_lin_pdpleath_more', 'Learn more', 'Link', 'PDP Leather quality')
        })
      })
    }
    #addTrustpilot() {
      const trustpilot = /* HTML */ ` <div class="crs_trustpilot">
        <a
          href=" https://www.trustpilot.com/review/www.maxwellscottbags.com"
          class="d-flex justify-content-md-center justify-content-between align-items-center"
          target="_blank"
          onclick="pushDataLayer(['exp_inc_soc_trus_but_pdprating_trust', 'Trustpilot ', 'Button', 'PDP Give us a rating'])"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="91" height="20" viewBox="0 0 91 20" fill="none">
            <path
              d="M9.78008 0.573486L12.4401 7.19635L19.5602 7.67918L14.0835 12.2552L15.8248 19.1765L9.78008 15.3817L3.73535 19.1765L5.47669 12.2552L0 7.67918L7.12008 7.19635L9.78008 0.573486Z"
              fill="#00B67E"
            />
            <path
              d="M33.0782 6.66401H29.6043V16.2435H27.6837V6.66401H24.2412V5.10308H33.0782V6.66401ZM38.1974 9.66327C37.9525 9.62253 37.6998 9.60215 37.4393 9.60215C36.5873 9.60215 36.0134 9.92858 35.7176 10.5815V16.2435H33.8587V7.96473H35.6334L35.6794 8.89054C36.1289 8.17128 36.7508 7.81165 37.5471 7.81165C37.8115 7.81165 38.0309 7.8474 38.2042 7.9188L38.1974 9.66327ZM44.3871 15.4325C43.8415 16.0752 43.0659 16.3965 42.061 16.3965C41.1629 16.3965 40.4823 16.1338 40.018 15.6085C39.5587 15.0831 39.3295 14.3231 39.3295 13.3283V7.96473H41.1884V13.3054C41.1884 14.3562 41.6252 14.8816 42.4969 14.8816C43.3998 14.8816 44.01 14.5576 44.3254 13.9099V7.96473H46.1852V16.2435H44.4331L44.3871 15.4325ZM52.7196 13.994C52.7196 13.6625 52.5815 13.41 52.3063 13.2365C52.036 13.0631 51.5845 12.9101 50.9518 12.7774C50.3192 12.6448 49.7913 12.4764 49.3682 12.2724C48.4397 11.8236 47.9755 11.1732 47.9755 10.3213C47.9755 9.60725 48.2762 9.01041 48.8785 8.53091C49.4798 8.0514 50.2457 7.81165 51.1742 7.81165C52.1633 7.81165 52.9615 8.0565 53.5687 8.54619C54.1809 9.03588 54.4864 9.671 54.4864 10.4514H52.6276C52.6276 10.0944 52.4953 9.79852 52.2299 9.56386C51.9645 9.32411 51.6129 9.20423 51.1742 9.20423C50.7658 9.20423 50.4318 9.29865 50.1713 9.48737C49.9166 9.6761 49.7893 9.92858 49.7893 10.2448C49.7893 10.5305 49.9088 10.7523 50.1488 10.9105C50.3887 11.0686 50.8725 11.2293 51.6021 11.3926C52.3318 11.5506 52.9028 11.7419 53.3161 11.9664C53.7343 12.1858 54.0428 12.451 54.2416 12.7621C54.4463 13.0733 54.5481 13.4507 54.5481 13.8946C54.5481 14.6393 54.2396 15.2438 53.6226 15.7079C53.0046 16.167 52.1966 16.3965 51.1967 16.3965C50.518 16.3965 49.9137 16.2741 49.3838 16.0292C48.853 15.7844 48.4397 15.4478 48.144 15.0193C47.8482 14.5908 47.7003 14.1291 47.7003 13.6344H49.5063C49.5317 14.0731 49.6973 14.4123 50.0028 14.652C50.3094 14.8867 50.7148 15.004 51.2202 15.004C51.7099 15.004 52.082 14.9122 52.3367 14.7285C52.5923 14.5398 52.7196 14.295 52.7196 13.994ZM58.5038 5.9524V7.96473H59.9651V9.34193H58.5038V13.9634C58.5038 14.2797 58.5655 14.5092 58.688 14.652C58.8153 14.7897 59.0396 14.8586 59.3608 14.8586C59.5753 14.8586 59.7917 14.8331 60.0111 14.7821V16.2206C59.588 16.3379 59.1796 16.3965 58.7869 16.3965C57.3589 16.3965 56.645 15.6085 56.645 14.0323V9.34193H55.2827V7.96473H56.645V5.9524H58.5038ZM68.6424 12.1883C68.6424 13.4686 68.3515 14.4913 67.7697 15.2565C67.188 16.0165 66.4074 16.3965 65.4281 16.3965C64.5202 16.3965 63.7935 16.0982 63.2479 15.5014V19.4265H61.3881V7.96473H63.102L63.1784 8.80631C63.7249 8.14327 64.4673 7.81165 65.4055 7.81165C66.4153 7.81165 67.2056 8.18911 67.7776 8.94411C68.3534 9.69392 68.6424 10.7371 68.6424 12.0735V12.1883ZM66.7904 12.0276C66.7904 11.2013 66.6249 10.5458 66.2928 10.0612C65.9667 9.57659 65.4976 9.33429 64.8855 9.33429C64.1255 9.33429 63.579 9.64799 63.2479 10.2754V13.9481C63.5848 14.5908 64.1353 14.9122 64.9002 14.9122C65.4917 14.9122 65.954 14.675 66.285 14.2006C66.6219 13.7211 66.7904 12.9968 66.7904 12.0276ZM72.1995 16.2435H70.3406V7.96473H72.1995V16.2435ZM70.226 5.8147C70.226 5.52901 70.3152 5.29181 70.4934 5.10308C70.6775 4.91435 70.9371 4.81994 71.274 4.81994C71.6109 4.81994 71.8704 4.91435 72.0545 5.10308C72.2377 5.29181 72.3297 5.52901 72.3297 5.8147C72.3297 6.09519 72.2377 6.32985 72.0545 6.51858C71.8704 6.70221 71.6109 6.79408 71.274 6.79408C70.9371 6.79408 70.6775 6.70221 70.4934 6.51858C70.3152 6.32985 70.226 6.09519 70.226 5.8147ZM76.2091 16.2435H74.3502V4.49097H76.2091V16.2435ZM77.8926 12.0276C77.8926 11.2166 78.0532 10.4871 78.3745 9.83926C78.6957 9.18641 79.1472 8.68653 79.729 8.33964C80.3107 7.98765 80.9786 7.81165 81.7337 7.81165C82.8502 7.81165 83.7562 8.17128 84.4496 8.89054C85.1488 9.60979 85.5259 10.5636 85.5817 11.7522L85.5896 12.1883C85.5896 13.0044 85.4319 13.7339 85.1155 14.3766C84.8041 15.0193 84.3555 15.5166 83.7689 15.8686C83.1871 16.2206 82.5143 16.3965 81.7484 16.3965C80.581 16.3965 79.6447 16.0089 78.9406 15.2336C78.2423 14.4531 77.8926 13.4151 77.8926 12.1195V12.0276ZM79.7515 12.1883C79.7515 13.0402 79.9278 13.7084 80.2794 14.1929C80.632 14.6724 81.1216 14.9122 81.7484 14.9122C82.3762 14.9122 82.863 14.6673 83.2107 14.1776C83.5623 13.6879 83.7386 12.9713 83.7386 12.0276C83.7386 11.191 83.5573 10.528 83.195 10.0383C82.8375 9.54858 82.3507 9.30374 81.7337 9.30374C81.1265 9.30374 80.6447 9.54604 80.2872 10.0305C79.9307 10.51 79.7515 11.2293 79.7515 12.1883ZM89.4924 5.9524V7.96473H90.9536V9.34193H89.4924V13.9634C89.4924 14.2797 89.5531 14.5092 89.6755 14.652C89.8029 14.7897 90.0281 14.8586 90.3494 14.8586C90.5629 14.8586 90.7803 14.8331 90.9996 14.7821V16.2206C90.5756 16.3379 90.1682 16.3965 89.7754 16.3965C88.3465 16.3965 87.6326 15.6085 87.6326 14.0323V9.34193H86.2712V7.96473H87.6326V5.9524H89.4924Z"
              fill="#0C0B0B"
            />
          </svg>
          <svg
            class="mx-3 mx-md-4"
            width="111"
            height="18"
            viewBox="0 0 111 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19.4986 0H0.831055V18H19.4986V0Z" fill="#00B67E" />
            <path
              d="M10.165 2.00012L12.0426 6.50832L17.0693 6.83699L13.2029 9.95192L14.4321 14.6633L10.165 12.0801L5.89798 14.6633L7.12714 9.95192L3.26074 6.83699L8.2875 6.50832L10.165 2.00012Z"
              fill="white"
            />
            <path d="M42.1666 0H23.499V18H42.1666V0Z" fill="#00B67E" />
            <path
              d="M32.832 2.00012L34.7096 6.50832L39.7363 6.83699L35.8699 9.95192L37.0991 14.6633L32.832 12.0801L28.565 14.6633L29.7941 9.95192L25.9277 6.83699L30.9545 6.50832L32.832 2.00012Z"
              fill="white"
            />
            <path d="M64.8336 0H46.166V18H64.8336V0Z" fill="#00B67E" />
            <path
              d="M55.5 2.00012L57.3778 6.50832L62.4042 6.83699L58.538 9.95192L59.7673 14.6633L55.5 12.0801L51.2329 14.6633L52.4621 9.95192L48.5957 6.83699L53.6225 6.50832L55.5 2.00012Z"
              fill="white"
            />
            <path d="M87.5015 0H68.834V18H87.5015V0Z" fill="#00B67E" />
            <path
              d="M78.1679 2.00012L80.0457 6.50832L85.0721 6.83699L81.2059 9.95192L82.4352 14.6633L78.1679 12.0801L73.9006 14.6633L75.1299 9.95192L71.2637 6.83699L76.2901 6.50832L78.1679 2.00012Z"
              fill="white"
            />
            <path d="M110.169 0H91.501V18H110.169V0Z" fill="#00B67E" />
            <path
              d="M100.835 2.00012L102.713 6.50832L107.739 6.83699L103.873 9.95192L105.102 14.6633L100.835 12.0801L96.5676 14.6633L97.7969 9.95192L93.9307 6.83699L98.9571 6.50832L100.835 2.00012Z"
              fill="white"
            />
          </svg>
          <p>
            <b>Excellent</b>
            565 Reviews
          </p>
        </a>
      </div>`
      waitForElement('.product-add-form').then(el => {
        el.insertAdjacentHTML('afterend', trustpilot)
        blockVisibility(
          '.crs_trustpilot',
          3,
          'exp_soc_trus_objec_vis_pdprevie_trust',
          'Trustpilot',
          'Visibility',
          'PDP Trustpilot reviews block'
        )
      })
    }
    #addBadges() {
      $el('.product-warranty-leather').innerHTML = /* HTML */ `
        <button class="badges_button badges__warranty">
          <span>${iconsData.warrantyIcon} 25-Year warranty</span> <span>LEARN MORE</span>
        </button>
        <button class="badges_button badges__return">
          <span>${iconsData.freeReturnIcon} 60-day risk-free return</span> <span>LEARN MORE</span>
        </button>
      `
      $el('.product-info-price').after($el('.product-warranty-leather'))

      $el('.badges__warranty').addEventListener('click', event => {
        $$el('.crs_popup')[0].classList.add('active')
        blockVisibility(
          '.crs_popup.warranty',
          3,
          'exp_soc_trus_objec_vis_pdppopup_warra',
          '25-Year Warranty: A Promise of Timeless Quality',
          'Visibility',
          '"PDP Popups Warranty and Returns'
        )
      })
      $el('.badges__return').addEventListener('click', event => {
        $$el('.crs_popup')[1].classList.add('active')
        blockVisibility(
          '.crs_popup.return',
          3,
          'exp_soc_trus_objec_vis_pdppopup_risk',
          '60-day risk-free return',
          'Visibility',
          'PDP Popups Warranty and Returns'
        )
      })
      if (this.device === 'Mobile') {
        waitForElement('.crs_trustpilot').then(el => {
          el.before($el('.product-warranty-leather'))
        })
      }
    }
    #addAccordion() {
      const productDetails = $el('.product-info-main .features-wrapper')
      const deliveryFaq = $el('.product-info-main .acc-content-delivery ul')

      const accordion = /* HTML */ `
        <ul class="crs__accordion">
          <li class="crs__accordion_item">
            <span class="crs__accordion_title">About The Product</span>
            <div class="crs__accordion_content" data-accordion="product">${productDetails.innerHTML}</div>
          </li>
          <li class="crs__accordion_item">
            <span class="crs__accordion_title">Delivery & Returns FAQ</span>
            <div class="crs__accordion_content" data-accordion="faq"></div>
          </li>
          <li class="crs__accordion_item">
            <a href="#leather-unique-block-desktop" class="crs__accordion_title link">Why Is Our Leather Unique?</a>
          </li>
          <li class="crs__accordion_item">
            <span class="crs__accordion_title">About Maxwell Scott Brand</span>
            <div class="crs__accordion_content">
              <div>
                <p>
                  Our family-run business was founded by English entrepreneur William Scott Forshaw in 2002, championing
                  the values of superior quality, timeless style and durability. Renowned for creating forever leather
                  bags and accessories to be passed down through generations, we continue to be inspired by the iconic
                  shapes, effortless style and extraordinary precision that is synonymous with fine British design.
                </p>

                <p>
                  We’re a luxury brand that genuinely cares (you’ll find no greenwashing here). We sustainably source
                  only the finest, most durable full grain leather, and trust expert leather artisans to handcraft our
                  premium leather bags and accessories at a highly-regarded atelier in Italy — we always have, and we
                  always will.
                </p>

                <div>What Sets Us Apart</div>
                <p>
                  We believe in fine quality, genuine leather goods that are made to last, which is why we offer a
                  unique 25-year warranty and friendly, hassle-free customer service for your peace of mind. You can
                  trust us to ensure that your luxury Italian leather bag or accessory will be handcrafted, quality
                  checked, wrapped and delivered to you with pride and care. Our love for leathercraft begins with the
                  journey of our products, and ends with our satisfied customers — we’re here to assist you with your
                  purchase, every step of the way.
                </p>
              </div>
            </div>
          </li>
        </ul>
      `
      $$el('.features-static-link-block').forEach(item => (item.style.display = 'none'))
      $el('.msb-product-details-col-left style').insertAdjacentHTML('beforebegin', accordion)
      $el('[data-accordion="product"]').append(productDetails)
      $el('[data-accordion="faq"]').append(deliveryFaq)
      const ul = $el('.crs__accordion')
      const titles = ul.querySelectorAll('.crs__accordion_title')
      ul.addEventListener('click', event => {
        titles.forEach(item => {
          if (item !== event.target) {
            item.classList.remove('active')
          }
        })
        if (
          event.target &&
          event.target.classList.contains('crs__accordion_title') &&
          !event.target.classList.contains('link')
        ) {
          event.target.classList.toggle('active')
        }
      })
    }
    #changeRelatedPosition() {
      const relatedContainer = $el('.related').parentNode
      $el('.container .product-view-container').after(relatedContainer)

      if (this.device === 'Mobile') {
        relatedContainer.querySelector('.block-title strong').textContent = 'Similar products'
        this.#insertToDom(
          /* HTML */ `
            <div class="crs_similar">
              <div class="crs_similar_container"></div>
              <button class="crs_similar_btn">View more</button>
            </div>
          `,
          '.related'
        )
        $$el('.related .item.product').forEach(item => $el('.related .crs_similar_container').append(item))
      }

      $el('.crs_similar_btn')?.addEventListener('click', () => {
        $el('.crs_similar').classList.toggle('view_more')
        pushDataLayer('exp_soc_trus_objec_link_similar_more', 'View more', 'Link', 'PDP Block Similar products')
      })

      waitForElement('.related').then(elem => {
        const selectors = ['.product-item-photo', '.product-item-link', '.synopsis-text']
        selectors.forEach(selector => {
          elem.querySelectorAll(selector).forEach(item => {
            item.addEventListener('click', () => {
              const type = selector === '.product-item-photo' ? 'Image' : 'Text'
              pushDataLayer(
                `exp_soc_trus_objec_${type.toLowerCase()}_similar_selec`,
                'Select',
                type,
                '"PDP Block Similar products"'
              )
            })
          })
        })

        blockVisibility(
          '.related',
          3,
          'exp_soc_trus_objec_vis_similar_block',
          'Block view',
          'Visibility',
          '"PDP Block Similar products"'
        )
      })
    }
    #createProductSticky() {
      const containerHtml = /* HTML */ ` <div class="sticky_container"></div> `
      this.#insertToDom(containerHtml, '.product.media')
      this.#addTopBadges()
      $el('.sticky_container').append($el('.gallery-placeholder'))
      $el('.sticky_container').append($el('.product-info-media-footer'))
    }
    #changeExtrasBadge() {
      waitForElement('.product-modal-options-btn-wrap').then(el => {
        const giftHtml = /* HTML */ `
          <div сlass="crs_extras__item">
            <div class="crs_extras__title">Add Premium Gift Wrapping</div>
            <div class="crs_extras__descr">
              Luxury box finished with a ribbon and gift card. <span class="learn-more">Learn More</span>
            </div>
          </div>
        `
        const personalisationHtml = /* HTML */ `
          <div сlass="crs_extras__item">
            <div class="crs_extras__title">Add Personalisation</div>
            <div class="crs_extras__descr">
              Elegant heat-stamped embossing. <span class="learn-more">Learn More</span>
            </div>
          </div>
        `
        el.querySelectorAll('li').forEach(item => {
          let icon = item.innerText.toUpperCase().includes('GIFT') ? iconsData.giftIcon : iconsData.personalizationIcon
          const descr = item.innerText.toUpperCase().includes('GIFT') ? giftHtml : personalisationHtml
          item.querySelector('a').childNodes.forEach(i => {
            if (i.nodeType === 3) {
              i.remove()
            }
          })
          item.querySelector('li > a:last-child').innerHTML = iconsData.checkIcon
          item.querySelector('a.product-modal-options-btn').insertAdjacentHTML('afterbegin', icon)
          item.querySelector('a span').insertAdjacentHTML('beforebegin', descr)
          item.querySelector('li > a:last-child').innerHTML = iconsData.checkIcon
          item.querySelector('.crs_extras__title').append(item.querySelector('a .price-notice'))

          var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              ;[].every.call(mutation.addedNodes, function (node) {
                if (node.nodeType === 3) {
                  item.querySelector('a .price-notice').textContent = item
                    .querySelector('a .price-notice')
                    .textContent.replace(/[()+]/g, '')
                  observer.disconnect()
                  return false
                }
                return true
              })
            })
          })
          observer.observe(item.querySelector('a .price-notice'), { childList: true })
        })
      })
    }
    #addInstalmentOption() {
      function addCommasToNumber(number) {
        var parts = number.toString().split('.')
        var integerPart = parts[0]
        var decimalPart = parts.length > 1 ? '.' + parts[1] : ''

        var formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

        return formattedIntegerPart + decimalPart
      }

      function klarna(price) {
        return `<p class="crs_klarna">or 3 interest-free payments of <b>£${addCommasToNumber(
          (price / 3).toFixed(2)
        )}</b> with <img src="${dir}klarna.png" alt="klarna"></p>`
      }
      waitForElement('.product-info-price').then(elem => {
        elem.insertAdjacentHTML(
          'beforeend',
          klarna(document.querySelector('.product-info-price [data-price-amount]').getAttribute('data-price-amount'))
        )
      })
    }
    #changeProductGallery() {
      waitForElement('.fotorama').then(() => {
        const $fotoramaDiv = jQuery('.fotorama').fotorama()
        const fotorama = $fotoramaDiv.data('fotorama')
        fotorama.setOptions({
          arrows: 'always'
        })
        if (this.device === 'Mobile') {
          fotorama.startAutoplay(3000)
        }
      })
    }
    #changePopups() {
      waitForElement('.gift-popup').then(el => {
        const content = el.querySelector('.content')
        content.querySelector('.title').textContent = 'OUR GIFT WRAPPING SERVICE'
        content.querySelector('.description').innerHTML = /* HTML */ `
          <div>
            <p><span>Premium Presentation:</span> Wrapped in luxurious signature tissue paper.</p>
            <p><span>Elegant Keepsake Box:</span> Tucked into a stylish box for a memorable unboxing experience.</p>
            <p><span>Stylish Gift Wrap:</span> Covered to create the perfect gift impression.</p>
            <p><span>Personal Touch:</span> Add a custom message for a more intimate gifting experience.</p>
          </div>
          <div>
            <p>Your message on a gift card (optional):</p>
            <p></p>
          </div>
        `
        const priceHtml = /* HTML */ ` <div class="crs_popup__price">Just <span></span> for all wrapping options</div> `
        const footer = el.querySelector('.modal-footer')
        footer.insertAdjacentHTML('afterbegin', priceHtml)
        content.append(footer)

        $el('#giftWrapLink').addEventListener('click', event => {
          const price = $el('#giftWrapLink .price-notice').textContent.replace(/[()+]/g, '')
          el.querySelector('.crs_popup__price span').textContent = price
        })

        const faqHtml = /* HTML */ `
          <div class="crs_faq">Gifting FAQs</div>
          <div class="crs_faq_content" style="display: none">
            <ul class="crs__accordion">
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">Can I send my gift directly to the recipient’s address?</span>
                <div class="crs__accordion_content">
                  Yes! There’s no need to worry about telltale receipts. If you’ve chosen our gift wrapping service,
                  we’re also able to personalise your notecard for you: please do notify us accordingly, via our contact
                  form, so we can accommodate your wishes. N.B. Please note that if the payment of the order is made
                  with an American Express Card the delivery can only be made to the billing address for the card. This
                  is required of us by American Express.
                </div>
              </li>
              <li class="crs__accordion_item">
                <span class="crs__accordion_title"
                  >Can my loved one exchange their gift for another colour or style?</span
                >
                <div class="crs__accordion_content">
                  Although we’re sure they’ll love their Maxwell-Scott gift, we do offer exchanges and returns within 60
                  days of ordering on all non-personalised items.
                </div>
              </li>
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">How soon can my order be delivered?</span>
                <div class="crs__accordion_content">
                  For UK orders, Next Working Day Delivery is free or Timed Next Working Day Delivery is available at a
                  small cost. For US/AUS orders, Standard Delivery to the US is free or Express Delivery is available at
                  a small cost. Kindly note that personalised gifts will take 24-48 hours longer to process and be
                  delivered, even if Next Working Day of Express Delivery is selected. Personalised orders will be sent
                  on the selected delivery service once the personalisation has been applied to the product.
                </div>
              </li>
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">How will my gift be presented?</span>
                <div class="crs__accordion_content">
                  How will my gift be presented? All of our products are wrapped with care as standard. However, an
                  additional gift wrap service is a paid-for service and can be applied to your order. Standard
                  wrapping: Maxwell-Scott monogrammed tissue paper and logo sticker Gift wrap service: Smaller goods -
                  luxury presentation box wrapped in silver paper, added ribbon & gift card Larger goods - luxury
                  presentation box finished with a ribbon and gift card
                </div>
              </li>
            </ul>
          </div>
        `
        el.querySelector('.modal-footer').insertAdjacentHTML('beforeend', faqHtml)
        const ul = el.querySelector('.crs__accordion')
        const titles = ul.querySelectorAll('.crs__accordion_title')
        ul.addEventListener('click', event => {
          titles.forEach(item => {
            if (item !== event.target) {
              item.classList.remove('active')
            }
          })
          if (event.target && event.target.classList.contains('crs__accordion_title')) {
            event.target.classList.toggle('active')
          }
        })
        $el('.crs_faq').addEventListener('click', () => {
          const faqContent = el.querySelector('.crs_faq_content')
          if (faqContent.style.display === 'none') {
            const height = el.querySelector('.content').clientHeight - el.querySelector('.modal-footer').offsetHeight
            el.querySelector('.crs_faq_content').style.display = 'block'
            el.querySelector('.crs_faq_content').style.height = `${height}px`
            el.querySelector('.modal-content').dataset.faq = 'open'
          } else {
            el.querySelector('.crs_faq_content').style.display = 'none'
            el.querySelector('.modal-content').dataset.faq = 'close'
          }
        })
      })
      waitForElement('.personalize-popup').then(el => {
        const faqHtml = /* HTML */ ` <div class="crs_faq">Gifting FAQs</div>
          <div class="crs_faq_content" style="display: none">
            <ul class="crs__accordion">
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">Positioning</span>
                <div class="crs__accordion_content">
                  We use our expertise and experience to determine the best placement of the lettering appropriate to
                  the design of the product. You have the opportunity to select Blind (no colour added), Gold or Silver
                  lettering.
                </div>
              </li>
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">Pricing</span>
                <div class="crs__accordion_content">
                  The price for embossing is a £15 flat fee of up to three initials. If an item requires specialised
                  hand embossing due to the size or complex positioning, then this will incur additional costs.
                </div>
              </li>
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">Ordering & Delivery</span>
                <div class="crs__accordion_content">
                  Please call our customer services team on 0870 2424684 for further information and enquiries. They
                  will be delighted to take your order over the phone and/or answer any further queries. Kindly allow an
                  additional 5 days for personalisation. Please note that some larger items may need to be hand embossed
                  out of house which can take longer. Due to the personalised nature of embossed items, you will not be
                  able to return an item that has been embossed. Unfortunately, we are unable to offer embossing on the
                  following products: The Piazzale, The Varese, The VareseW, The Scanno, The Buroni, The Strada, The
                  Bellino & The Rovello.
                </div>
              </li>
              <li class="crs__accordion_item">
                <span class="crs__accordion_title">Corporate Enquires</span>
                <div class="crs__accordion_content">
                  We have worked with some of the finest and prevalent companies in the world to help provide
                  unforgettable products for both their clients and staff alike. For larger orders, we are able to offer
                  an exclusive service for embossing company logos, crest’s or emblem’s onto our products
                </div>
              </li>
            </ul>
          </div>`
        el.querySelector('.modal-footer').insertAdjacentHTML('beforeend', faqHtml)
        const ul = el.querySelector('.crs__accordion')
        const titles = ul.querySelectorAll('.crs__accordion_title')
        ul.addEventListener('click', event => {
          titles.forEach(item => {
            if (item !== event.target) {
              item.classList.remove('active')
            }
          })
          if (event.target && event.target.classList.contains('crs__accordion_title')) {
            event.target.classList.toggle('active')
          }
        })
        const bgHtml = /* HTML */ ` <div class="bg"></div> `
        const content = el.querySelector('.content')
        content.append(el.querySelector('.personalize-color-block'))
        content.append(el.querySelector('.personalize-initial-block'))
        content.append(el.querySelector('.modal-footer'))
        content.insertAdjacentHTML('beforebegin', bgHtml)
        el.querySelector('.crs_faq').addEventListener('click', () => {
          const faqContent = el.querySelector('.crs_faq_content')
          if (faqContent.style.display === 'none') {
            const height = el.querySelector('.content').clientHeight - el.querySelector('.modal-footer').offsetHeight
            el.querySelector('.crs_faq_content').style.display = 'block'
            el.querySelector('.crs_faq_content').style.height = `${height}px`
            el.querySelector('.modal-content').dataset.faq = 'open'
          } else {
            el.querySelector('.crs_faq_content').style.display = 'none'
            el.querySelector('.modal-content').dataset.faq = 'close'
          }
        })
        el.querySelector('.note').textContent = 'MSB'
        const characterCountHtml = /* HTML */ ` <div class="crs_caracter_count"><span>0</span>/6</div> `

        const input = el.querySelector('.control input')
        input.maxLength = 6
        input.insertAdjacentHTML('afterend', characterCountHtml)
        input.addEventListener('input', event => {
          const inputLength = event.target.value.length
          el.querySelector('.crs_caracter_count span').textContent = inputLength
        })
      })
    }
    #createsPopups() {
      const popupOne = /* HTML */ ` <div class="crs_popup warranty">
        <div class="container d-md-flex flex-md-row-reverse">
          <button type="button" class="crs_popup_close">${iconsData.closeIcon}</button>
          <img src="${dir}image-1${media ? '' : '-desk'}.png" alt="image" />
          <div class="crs_popup_content">
            <div class="crs_popup_circle position-absolute bg-white">
              <div class="m-auto">${iconsData.warrantyIcon}</div>
            </div>
            <h3>25-Year Warranty:<br />A Promise of Timeless Quality</h3>
            <ul>
              <li><b>25-Year Warranty: </b>Guaranteed quality and peace of mind for every Italian leather product.</li>
              <li>
                <b>Expert Restoration:</b> Faults? Our skilled service team in York and Italian artisans are at your
                service.
              </li>
              <li>
                <b>Comprehensive Coverage:</b> Manufacturing faults covered, plus affordable repair for wear or misuse.
              </li>
              <li><b>Seamless Support:</b> Easy claim process through Customer Service.</li>
              <li><b>Craftsmanship Heritage:</b> A legacy of the finest Tuscan leather and artisanal mastery.</li>
              <li><b>Lasting Investment: </b> Your purchase, a commitment to enduring quality and style.</li>
            </ul>
          </div>
        </div>
      </div>`

      const popupTwo = /* HTML */ ` <div class="crs_popup return">
        <div class="container d-md-flex flex-md-row-reverse">
          <button type="button" class="crs_popup_close">${iconsData.closeIcon}</button>
          <img src="${dir}image-2${media ? '' : '-desk'}.png" alt="image" />
          <div class="crs_popup_content">
            <div class="crs_popup_circle position-absolute bg-white">
              <div class="m-auto">${iconsData.returnsIcon}</div>
            </div>
            <h3>60-day risk-free return</h3>
            <ul>
              <li>Our return policy is 60 days as we understand you may need time to consider your purchase.</li>
              <li>
                <b>Personalised Exclusion:</b> Personalised embossed items are not returnable, reflecting their unique
                customisation.
              </li>
              <li><b>Easy Process: </b> Complete our simple returns form and send back your item.</li>
              <li><b>Contact Us: </b> Questions about returns? Reach out to our Customer Services team.</li>
            </ul>
          </div>
        </div>
      </div>`

      waitForElement('.product-add-form').then(el => {
        document.body.insertAdjacentHTML('beforeend', popupOne)
        document.body.insertAdjacentHTML('beforeend', popupTwo)
        $$el('.crs_popup').forEach(item => {
          item.addEventListener('click', e => {
            if (e.target.className == 'crs_popup active') {
              e.target.classList.remove('active')
            }
          })
          item.querySelector('.crs_popup_close').addEventListener('click', event => {
            item.classList.remove('active')
          })
        })
      })
    }
    #allGroupProductSlider() {
      loadScriptsOrStyles([
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
      ]).then(async () => {
        const breadcrumpItem = $el('.breadcrumbs .items li:nth-last-of-type(2)')
        const title = breadcrumpItem.querySelector('a').textContent
        const categoryId = Array.from(breadcrumpItem.classList)
          .filter(item => item.includes('category'))[0]
          .replace(/^\D+/g, '')
        try {
          const response = await fetch(`${server}/${categoryId}`)
          const result = await response.json()

          if (!response.ok) throw new Error(result.message)

          const swiperHtml = /* HTML */ ` <div class="block products_category products_category_desktop">
            <div class="block-title title"><strong>All ${title}</strong></div>
            <div class="swiper">
              <div class="swiper-wrapper">
                ${result.items
                  .map(item => {
                    return /* HTML */ `<div class="swiper-slide">
                      <div class="crs_slider_item">
                        <a href=${'https://www.maxwellscottbags.com/products/' + item.url_key + '.html'}>
                          <div class="crs_slider_image">
                            <img src=${'https://www.maxwellscottbags.com/media/catalog/product/' + item.image} />
                          </div>
                        </a>
                        <a
                          href=${'https://www.maxwellscottbags.com/products/' + item.url_key + '.html'}
                          class="crs_slider_title"
                          >${item.name}</a
                        >
                        <a
                          href=${'https://www.maxwellscottbags.com/products/' + item.url_key + '.html'}
                          class="crs_slider_descr"
                          >${item.h1_oneliner}</a
                        >
                      </div>
                    </div>`
                  })
                  .join('')}
              </div>

              <div class="swiper-button-prev"><i class="material-icons">chevron_left</i></div>
              <div class="swiper-button-next"><i class="material-icons">chevron_right</i></div>
            </div>
          </div>`
          this.#insertToDom(swiperHtml, '.related', 'afterend')

          const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            touchStartPreventDefault: false,
            pagination: {
              el: '.swiper-pagination'
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            breakpoints: {
              768: {
                slidesPerView: 2
              },
              1000: {
                slidesPerView: 4
              }
            }
          })

          const mobileProductsHtml = /* HTML */ `
            <div class="block products_category products_category_mobile">
              <div class="block-title title"><strong>All ${title}</strong></div>
              <div class="crs_category_products">
                <div class="crs_category_products_container">
                  ${result.items
                    .map(item => {
                      return /* HTML */ `<div class="item product">
                        <div class="crs_slider_item">
                          <a href=${'https://www.maxwellscottbags.com/products/' + item.url_key + '.html'}>
                            <div class="crs_slider_image">
                              <img src=${'https://www.maxwellscottbags.com/media/catalog/product/' + item.image} />
                            </div>
                          </a>
                          <a
                            href=${'https://www.maxwellscottbags.com/products/' + item.url_key + '.html'}
                            class="crs_slider_title"
                            >${item.name}</a
                          >
                          <a
                            href=${'https://www.maxwellscottbags.com/products/' + item.url_key + '.html'}
                            class="crs_slider_descr"
                            >${item.h1_oneliner}</a
                          >
                        </div>
                      </div>`
                    })
                    .join('')}
                </div>
                <button class="crs_category_products_btn">View more</button>
              </div>
            </div>
          `
          this.#insertToDom(mobileProductsHtml, '.related', 'afterend')
          blockVisibility(
            '.crs_category_products',
            3,
            'exp_soc_trus_objec_vis_businbag_block',
            'Block view',
            'Visibility',
            'PDP Block All business bags for men'
          )
          $el('.crs_category_products_btn')?.addEventListener('click', () => {
            $el('.crs_category_products').classList.toggle('view_more')
            pushDataLayer(
              'exp_soc_trus_objec_link_businbag_more',
              'View more',
              'Link',
              'PDP Block All business bags for men'
            )
          })
        } catch (error) {
          console.log(error.message)
        }

        $$el('.crs_slider_item').forEach(item => {
          item.addEventListener('mousedown', event => {
            if (event.target.tagName === 'IMG') {
              pushDataLayer(
                'exp_soc_trus_objec_imag_businbag_selec',
                'Select',
                'Image',
                'PDP Block All business bags for men'
              )
            }
            if (event.target.closest('.crs_slider_title') || event.target.closest('.crs_slider_descr')) {
              pushDataLayer(
                'exp_soc_trus_objec_text_businbag_selec',
                'Select',
                'Text',
                'PDP Block All business bags for men'
              )
            }
          })
        })
      })
    }
    #addLaptopBriefcaseSizeChart() {
      const breadcrumpItem = $el('.breadcrumbs .items li:nth-last-of-type(2)')
      const categoryId = Array.from(breadcrumpItem.classList)
        .filter(item => item.includes('category'))[0]
        .replace(/^\D+/g, '')
      const buildBrifcaseChartSize = (products = [], gender = 'man') => {
        return /* HTML */ `
          <li class="crs__accordion_item">
            <span class="crs__accordion_title">Laptop briefcase size chart</span>
            <div class="crs__accordion_content" data-accordion="product">
              <table class="crs_size_chart">
                <tr>
                  <th style="width:60%"></th>
                  <th>${iconsData.compIcon}<span>${gender === 'man' ? '15"' : '14"'}</span></th>
                  <th>${iconsData.compIcon}<span>${gender === 'man' ? '16"' : '15"'}</span></th>
                  <th>${iconsData.compIcon}<span>${gender === 'man' ? '17"' : '16"'}</span></th>
                </tr>
                ${products
                  .map(item => {
                    return /* HTML */ ` <tr>
                      <td>
                        <a href=${item.link} class="crs_size_product"
                          ><img src=${item.image} /><span>${item.title}</span></a
                        >
                      </td>
                      <td>${item.sizes.includes(gender === 'man' ? 15 : 14) ? iconsData.simpleCheck : ''}</td>
                      <td>${item.sizes.includes(gender === 'man' ? 16 : 15) ? iconsData.simpleCheck : ''}</td>
                      <td>${item.sizes.includes(gender === 'man' ? 17 : 16) ? iconsData.simpleCheck : ''}</td>
                    </tr>`
                  })
                  .join('')}
              </table>
            </div>
          </li>
        `
      }
      waitForElement('.msb-product-details-col-left .crs__accordion').then(el => {
        if (categoryId === '72' || categoryId === '73') {
          el.insertAdjacentHTML('beforeend', buildBrifcaseChartSize(briefcases.man))
        }
        if (categoryId === '120' || categoryId === '91') {
          el.insertAdjacentHTML('beforeend', buildBrifcaseChartSize(briefcases.woman, 'woman'))
        }
      })
    }
    #initStyles() {
      const style = /* HTML */ `
        <style>
          .msb-product-details-col-left .features-wrapper {
            border-bottom: none;
          }
          .crs_size_chart {
            width: 100%;
            border: 1px solid #ccc;
            text-align: center;
          }
          .crs_size_chart tr {
            border-bottom: 1px solid #ccc;
          }
          .crs_size_chart tr,
          .crs_size_chart td {
            padding: 5px;
          }
          .crs_size_chart tr:nth-child(even) {
            background: #ccc;
          }
          .crs_size_chart tr:nth-child(even) img {
            mix-blend-mode: darken;
          }
          .crs_size_chart td {
            vertical-align: middle;
          }
          .crs_size_chart th {
            position: relative;
          }
          .crs_size_chart th span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #333;
            text-align: center;
            font-family: Arial;
            font-size: 12px;
            font-weight: 700;
            line-height: 16px;
          }
          .crs_size_product {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .crs_size_product:hover {
            text-decoration: none;
          }
          .crs_size_product img {
            height: 32px;
            width: auto;
          }
          .crs_size_chart tr td:first-of-type span {
            width: 100%;
            color: #333;
            font-family: Adobe Garamond Pro;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            text-align: left;
          }
          .crs_size_chart td {
            height: 48px;
          }
          .swiper {
            padding-left: 70px;
          }
          .swiper-slide {
            display: flex !important;
            justify-content: center;
            align-items: center;
          }
          .swiper-button-prev,
          .swiper-button-next {
            color: #b68b51 !important;
          }
          .swiper-button-prev *,
          .swiper-button-next * {
            font-size: 42px !important;
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            display: none;
          }
          .swiper-button-prev {
            left: var(--swiper-navigation-sides-offset, 25px) !important;
          }

          .swiper-button-next {
            right: var(--swiper-navigation-sides-offset, 25px) !important;
          }
          .crs_slider_item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 240px;
          }
          .crs_slider_image {
            width: 200px;
          }
          .crs_slider_item:hover {
            text-decoration: none;
            color: inherit;
          }
          .crs_slider_title,
          .crs_slider_descr {
            display: block;
            text-align: center;
            color: #333;
            font-family: 'adobe-garamond-pro', serif;
            font-size: 16px;
          }
          .crs_slider_title:hover,
          .crs_slider_descr:hover {
            color: inherit;
            text-decoration: underline;
          }
          .column.main .block .title {
            margin: 25px 0;
          }
          .sticky_container {
            position: sticky;
            top: 50px;
          }
          .pc-icon-wrapper {
            display: none !important;
          }
          .product-view-container .product-info-main .product-warranty-leather {
            display: flex !important;
            width: 100%;
            justify-content: space-between;
          }
          .product-view-container .product-info-main .product-warranty-leather button {
            display: flex;
            color: #333;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
          }
          .product-view-container .product-info-main .product-warranty-leather button span:first-of-type {
            display: flex;
            gap: 14px;
            text-decoration-line: underline;
            text-transform: capitalize;
            text-align: left;
          }
          .product-view-container .product-info-main .product-warranty-leather button span:nth-of-type(2) {
            display: none;
            height: 30px;
            padding: 10px 12px;
            justify-content: center;
            align-items: center;
            border: 1px solid #b68b51;
            background: #b68b51;
            text-align: center;
            color: #fff;
            font-family: Arial;
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: 18px; /* 180% */
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .crs_top_badges {
            position: absolute;
            top: 19px;
            left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 20px;
            padding-left: 75px;
            z-index: 10;
          }
          .crs_warranty {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #333;
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-transform: capitalize;
          }
          .crs_wishlist svg:last-child {
            display: none;
          }
          .crs_wishlist:focus svg:first-child {
            display: none;
          }
          .crs_wishlist:focus svg:last-child {
            display: block;
          }
          .crs_popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            overflow-y: auto;
            opacity: 0;
            pointer-events: none;
            transition: all 0.2s ease;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(4px);
            padding: 10px;
            z-index: 9999999;
          }
          .crs_popup.active {
            opacity: 1;
            pointer-events: auto;
          }
          .crs_popup .container {
            max-width: 335px;
            margin: auto;
            width: 100%;
            position: relative;
            background-color: #fff;
            padding: 0;
            transform: translateY(200px);
            transition: all 0.2s ease;
            box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
          }
          .crs_popup.active .container {
            transform: translateY(0);
          }
          .crs_popup img {
            width: 100%;
            height: 100px;
            display: block;
          }
          .crs_popup_close {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            background: transparent;
            border: none;
            padding: 10px 18px;
          }
          .crs_popup_content {
            position: relative;
            padding: 25px 20px 12px;
          }
          .crs_popup_circle {
            left: 20px;
            top: 0;
            transform: translateY(-50%);
            width: calc(100% - 40px);
            height: 45px;
            display: flex;
          }
          .crs_popup h3 {
            color: var(--Black, #333);
            text-align: center;
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px; /* 157.143% */
            text-transform: uppercase;
            letter-spacing: 2px;
            margin: 0 0 14px 0;
          }
          .crs_popup ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
          }
          .crs_popup ul li {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            margin-bottom: 20px;
          }
          .crs_popup .container {
            max-width: 690px;
          }
          .crs_popup img {
            width: 50%;
            height: auto;
          }
          .crs_popup_circle {
            transform: none;
            width: 100%;
            height: 49px;
            left: 0;
            top: 8px;
          }
          .crs_popup_content {
            padding: 57px 32.5px 30px;
            width: 50%;
          }
          .crs_popup h3 {
            margin-bottom: 20px;
          }

          .crs__accordion {
            display: flex;
            flex-direction: column;
            margin-top: 35px !important;
            gap: 0;
            margin: 0 auto;
            padding: 0;
            padding-left: 20px;
          }
          .crs__accordion ul {
            list-style: inside;
            padding-left: 0 !important;
          }
          .crs__accordion ul li {
            margin: 0 !important;
          }
          .crs__accordion_content {
            height: 0;
            opacity: 0;
            transition: all 400ms ease;
          }
          .crs__accordion_item {
            list-style: none;
            overflow: hidden;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid #ccc;
          }
          .crs__accordion_title {
            position: relative;
            color: #333;
            padding: 10px 0;
            display: flex;
            cursor: pointer;
          }
          .crs__accordion_title::after {
            content: '+';
            position: absolute;
            color: #999999;
            width: 16px;
            height: 16px;
            right: 0;
          }
          .crs__accordion_title.active::after {
            content: '-';
          }

          .crs__accordion_title.active + .crs__accordion_content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: max-content;
            padding: 15px 0;
            opacity: 1;
          }
          .crs_quality {
            background: #ebe0d0;
            padding: 14px 8px;
            margin-top: 24px;
          }
          .crs_quality h4 {
            margin: 6px 0 10px;
            font-size: 20px;
            font-family: 'adobe-garamond-pro', sans-serif;
            font-style: normal;
            font-weight: 400;
            line-height: 28px; /* 140% */
          }
          .crs_quality h4 span {
            font-size: 10px;
            line-height: 18px;
            display: block;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .crs_quality_more {
            color: var(--Black, #333);
            font-family: Arial;
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px; /* 220% */
            letter-spacing: 1.5px;
            text-decoration-line: underline;
            text-transform: uppercase;
          }

          .msb-product-details-col-right {
            background: #fff;
            border-bottom: none !important;
          }
          .product-info-main .msb-product-details-col-right {
            padding: 0 20px;
          }
          .crs_trustpilot {
            margin-top: 24px;
            display: flex;
            padding: 10px 12px;
            border: 1px solid #ccc;
          }
          .crs_trustpilot a {
            width: 100%;
          }
          .crs_trustpilot p {
            font-size: 12px;
            line-height: 16px;
            margin: 0;
          }
          .crs_trustpilot p b {
            display: block;
          }
          .product-social-links {
            display: none;
          }

          .crs_klarna {
            font-size: 12px;
            line-height: 22px;
            width: 100%;
          }
          .crs_klarna img {
            margin: 0 3px;
            max-width: 38px;
          }
          .product-warranty-leather {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 16px;
          }
          .product-warranty-leather button {
            background: none;
            border: none;
          }
          .swatch-attribute-label.extras-wrapper {
            display: none;
          }

          .product-modal-options-btn-wrap {
            display: block;
            padding-top: 12px;
            border-top: 1px solid #ccc;
            margin: 18px 0;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn {
            border: none !important;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            min-height: auto;
            padding: 0;
            width: 100%;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn svg {
            margin-right: 11px;
            flex-shrink: 0;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn .ml-2 > svg {
            margin-top: -12px;
          }
          .product-modal-options-btn-wrap .price-notice {
            padding-left: 4px;
            font-family: Arial;
            font-size: 12px;
          }
          .product-modal-options-btn-wrap li {
            display: flex;
            align-items: center;
            padding: 6px 0;
            font-size: 14px;
            position: relative;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn + a {
            margin: 0 !important;
            padding: 0;
            width: 24px;
            height: 24px;
            border: 1px solid #a11a17;
            pointer-events: none;
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            display: block !important;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn + a svg {
            opacity: 0;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn + a {
            margin: 0 !important;
            padding: 0;
            width: 24px;
            height: 24px;
            border: 1px solid #a11a17;
            pointer-events: none;
            cursor: pointer;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 2;
            display: block !important;
          }
          .product-modal-options-btn-wrap .product-modal-options-btn + a svg {
            opacity: 0;
          }
          a.product-modal-options-btn.selected-option + a {
            width: auto;
            height: auto;
            border-color: transparent;
            right: -1px;
            pointer-events: auto;
          }
          a.product-modal-options-btn.selected-option + a svg {
            opacity: 1;
          }
          .crs_extras__title {
            text-align: left;
            color: #333;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 23px;
          }
          .crs_extras__descr {
            text-align: left;
            color: #333;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            padding-right: 25px;
          }
          .crs_extras__descr span {
            text-decoration-line: underline;
          }
          .price-notice {
            color: #862b04;
            text-align: right;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
          }
          #product-addtocart-button {
            background-color: #5e9371;
          }
          .product-info-main .swatch-attribute.color .swatch-option {
            width: 44px !important;
            height: 44px !important;
            background-size: 40px 40px !important;
          }

          .crs_faq_content {
            background: #fff;
          }
          .modal-popup {
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 700px;
            max-width: 100% !important;
            height: 560px;
          }
          .modal-popup .modal-inner-wrap {
            margin: 0 !important;
            width: 100% !important;
            height: 100% !important;
            max-height: 100% !important;
          }
          .gift-popup .modal-content .content {
            padding: 10px 0 !important;
            width: 50% !important;
          }
          .gift-popup .modal-content .bg {
            width: 50% !important;
          }
          .gift-popup .modal-content[data-faq='open'] .content > * {
            visibility: hidden;
          }
          .gift-popup .modal-content,
          .gift-popup .modalOptions,
          .gift-popup .gift-popup-wrapper {
            height: 100%;
          }

          .gift-popup .modal-content[data-faq='open'] .modal-footer {
            visibility: visible;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 50% !important;
            overflow: hidden;
            overflow-y: auto;
          }

          .modal-content .content .icon {
            color: #a11a17;
          }
          .modal-content .content .title {
            color: #333;
            text-align: center;
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin: 0 10px;
          }
          .modal-content .content .description div {
            margin: 14px 0;
          }
          .modal-content .content .description p {
            color: #333;
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            margin: 0;
            padding: 0;
          }
          .modal-content .content .description span {
            color: #333;
            font-family: Arial;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
          }
          .gift-popup-textfield {
            margin-top: 14px !important;
            background: #fff !important;
            padding: 0 20px !important;
          }
          .crs_popup__price {
            color: #000;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
          }
          .crs_popup__price span {
            color: #000;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;
          }
          .modal-footer {
            position: static !important;
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin: 14px 0 !important;
            width: 100% !important;
          }
          .crs_faq {
            color: #000;
            text-align: center;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            text-decoration-line: underline;
            cursor: pointer;
          }
          .crs_faq_content {
            text-align: left;
          }
          .crs_faq_content .crs__accordion {
            margin-top: 0 !important;
            padding: 0;
          }
          .crs_faq_content .crs__accordion_title {
            padding-right: 20px;
          }
          .personalize-popup._inner-scroll .modal-inner-wrap {
            overflow-y: auto;
          }
          .personalize-popup .modal-inner-wrap {
            padding: 20px 20px 30px !important;
          }
          .personalize-popup._inner-scroll .modal-inner-wrap .modal-header {
            padding-bottom: 0;
            border-bottom: 0;
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 10;
          }
          .modal-popup .action-close:before,
          .modal-slide .action-close:before {
            color: #757575 !important;
          }
          .personalize-popup._inner-scroll .modal-inner-wrap .modal-content {
            overflow-y: visible !important;
          }
          .personalize-color-block,
          .personalize-initial-block {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
          .personolize-popup-wrapper {
            padding: 0 !important;
          }
          .personolize-popup-wrapper .col-left > .field .control .options-list {
            flex-wrap: nowrap !important;
          }
          .personolize-popup-wrapper .col-left > .field .control .options-list .field {
            background: transparent !important;
            width: 135px !important;
            height: 100px;
            margin: 0 !important;
            padding: 0 !important;
          }
          .personolize-popup-wrapper .col-left > .field .control .options-list label {
            width: 135px !important;
            height: 68px !important;
            background-position: center !important;
            background-size: cover !important;
            cursor: pointer;
          }
          .personolize-popup-wrapper .col-left > .field .control .options-list .field label:before {
            content: '';
            background-image: url('data: image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="0.5" y="0.5" width="17" height="17" fill="white" fill-opacity="0.6" stroke="white"/></svg>');
            position: absolute;
            width: 18px;
            height: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 6px;
            right: 6px;
          }
          .personalize-popup .field.active,
          .gift-popup .field.active {
            border: none !important;
          }
          .personolize-popup-wrapper .col-left > .field .control .options-list .field.active label:before {
            content: '';
            background-image: url('data: image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1.5 4L4.5 7L10.5 1" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>');
            background-repeat: no-repeat;
            background-position: center;
            background-color: #5e9371;
          }
          .personolize-popup-wrapper .col-left > .field .control .options-list .field label span {
            height: 32px;
            bottom: -32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            border-left: 1px solid #ccc;
            color: #646464;
            text-align: center;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
          }
          .personolize-popup-wrapper .col-right .preview .preview-block {
            display: none;
          }
          .personalize-popup._inner-scroll .modal-inner-wrap .modal-footer {
            width: 100% !important;
          }
          .personalize-popup._inner-scroll .modal-inner-wrap .modal-footer button {
            position: static !important;
          }
          .personalize-popup .personalize-initial-block {
            margin-top: 18px;
          }
          .personolize-popup-wrapper .step {
            color: #000;
            font-family: Arial;
            font-size: 12px !important;
            font-weight: 700 !important;
            line-height: 22px !important;
          }
          .personalize-popup .personalize-initial-block .preview {
            background: #fff;
            padding: 0;
          }
          .personalize-popup .personalize-initial-block .control {
            display: flex;
            position: relative;
            gap: 20px;
          }
          .personalize-popup .personalize-initial-block .control input {
            padding: 0px 12px;
            border: 1px solid #646464;
            text-align: left;
            height: 46px;
          }
          .personalize-popup .personalize-initial-block .control input::placeholder {
            color: #999;
            font-family: Arial;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
            text-align: left;
            text-transform: capitalize;
          }
          .crs_caracter_count {
            position: absolute;
            left: calc(50% - 50px);
            top: 50%;
            transform: translateY(-50%);
          }
          .personolize-popup-wrapper .col-right {
            background: #fff;
          }
          .personalize-popup .personalize-initial-block .control p {
            order: 2;
            flex: 0 0 50%;
            margin: 0;
            background: #ebedee;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ccc;
            font-family: Adobe Garamond Pro;
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            line-height: 35px;
            text-align: center;
            text-transform: uppercase;
            height: 46px;
          }
          .products_category_mobile {
            display: none;
          }
          .products_category_desktop {
            display: block;
          }

          @media (min-width: 769px) {
            .msb-product-details-col-left {
              width: 100% !important;
              order: 1 !important;
            }
            .msb-product-details-col-right {
              width: 100% !important;
            }
          }
          @media (max-width: 769px) {
            .crs_top_badges {
              padding-left: 20px;
            }
            .crs__accordion {
              padding-left: 0;
            }
            .product-info-main .msb-product-details-col-left {
              border-top: none !important;
            }
            .crs_trustpilot {
              margin-top: 0;
            }
            .product-view-container .product-info-main .product-warranty-leather {
              padding: 0px !important;
              border-top: none !important;
            }
            .product-view-container .product-info-main .product-warranty-leather button {
              justify-content: space-between;
              align-items: center;
              width: 100%;
              padding: 10px !important;
              border: 1px solid #ccc;
            }
            .product-view-container .product-info-main .product-warranty-leather button {
              border-bottom: none;
            }
            .product-view-container .product-info-main .product-warranty-leather button span:first-of-type {
              text-align: left;
              width: 100%;
              gap: 8px;
              font-family: Arial;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; /* 157.143% */
              text-transform: capitalize;
            }
            .product-view-container .product-info-main .product-warranty-leather button span:nth-of-type(2) {
              display: flex;
              width: 150px;
              text-align: center;
              padding: 10px 5px;
            }
            .modal-popup.modal-slide._inner-scroll .modal-inner-wrap {
              background: #fff;
            }
            body .gift-popup._inner-scroll .gift-popup-wrapper {
              flex-direction: column;
            }
            .gift-popup .modal-inner-wrap .modal-footer {
              margin-top: 14px !important;
              position: static !important;
              width: 100% !important;
            }
            .gift-popup .modal-inner-wrap .bg {
              width: 100% !important;
              height: 140px;
              min-height: 140px !important;
            }
            .gift-popup .modal-inner-wrap .modal-content {
              overflow-y: visible !important;
              padding-bottom: 10px;
            }
            .gift-popup .modal-inner-wrap .content {
              padding-bottom: 10px !important;
              width: 90% !important;
              position: absolute;
              background: #fff;
              left: 50%;
              transform: translateX(-50%);
              top: 116px;
            }
            .modal-content[data-faq='open'] .content > * {
              visibility: visible !important;
            }
            .gift-popup .modal-content[data-faq='open'] .modal-footer {
              position: static !important;
              width: 100% !important;
            }
            .personolize-popup .modal-inner-wrap .personolize-popup-wrapper {
              padding: 0;
            }
            .personolize-popup-wrapper .bg {
              height: 140px;
              width: 100% !important;
              background: url('https://conversionratestore.github.io/projects/msb/img/personalization.png');
            }
            .personolize-popup-wrapper .col-left > .field .control .options-list {
              flex-wrap: wrap !important;
              gap: 6px;
              justify-content: center;
            }
            .personalize-popup .modal-inner-wrap {
              padding: 0 !important;
            }
            .personalize-popup .modal-inner-wrap .content {
              padding-bottom: 10px !important;
              width: 90% !important;
              position: absolute;
              background: #fff;
              left: 50%;
              transform: translateX(-50%);
              top: 116px;
            }
            .personalize-popup .modal-inner-wrap .content .description {
              padding: 0;
              margin: 14px 0;
              text-align: left;
            }
            .personalize-popup._inner-scroll .modal-inner-wrap .modal-footer {
              flex-direction: column !important;
              padding: 0 !important;
            }
            .personalize-popup .personalize-initial-block .control {
              flex-direction: column;
              gap: 0px;
            }
            .personalize-popup .personalize-initial-block .control input {
              margin: 0;
            }
            .crs_caracter_count {
              position: absolute;
              left: calc(100% - 30px);
              top: 30%;
              transform: translateY(-50%);
            }

            .crs_popup.active .container {
              position: absolute;
              top: 0;
            }
            .crs_popup img {
              width: 100%;
            }
            .crs_popup_content {
              position: absolute;
              width: 80%;
              top: 80px;
              left: 50%;
              transform: translateX(-50%);
              background: #fff;
            }
            .product-carousel-nav-related {
              display: none;
            }
            .crs_similar_container,
            .crs_category_products_container {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .product-image-container {
              width: 50% !important;
            }
            .crs_similar,
            .crs_similar_container {
              transition: all 0.2s ease;
            }
            .crs_similar_container .item.product {
              visibility: collapse;
              height: 0;
              display: block !important;
              transition: visibility 0.5s ease;
            }
            .products_category_mobile {
              display: block;
            }
            .products_category_desktop {
              display: none;
            }
            .crs_category_products_container .item.product {
              visibility: collapse;
              height: 0;
              display: flex !important;
              transition: visibility 0.5s ease;
            }
            .crs_category_products_container .item.product * {
              flex-grow: 1;
            }
            .crs_similar_container .item.product:first-of-type,
            .crs_similar_container .item.product:nth-of-type(2),
            .crs_category_products_container .item.product:first-of-type,
            .crs_category_products_container .item.product:nth-of-type(2) {
              visibility: visible;
              height: auto;
            }
            .crs_slider_item {
              width: 50%;
            }
            .crs_similar.view_more .item.product,
            .crs_category_products.view_more .item.product {
              visibility: visible;
              height: auto;
            }

            .crs_similar_btn,
            .crs_similar_btn:focus,
            .crs_similar_btn:active,
            .crs_category_products_btn,
            .crs_category_products_btn:focus,
            .crs_category_products_btn:active {
              display: block;
              margin: 0 auto;
              background: none;
              border: none;
              color: #333;
              text-align: center;
              font-family: Arial;
              font-size: 12px;
              font-weight: 400;
              line-height: 16px;
              letter-spacing: 2px;
              text-transform: uppercase;
              border-bottom: 1px solid #000;
              padding: 0;
              padding-bottom: 1px;
              margin-top: 33px;
            }
          }
        </style>
      `

      this.#insertToDom(style, 'head')
    }

    #insertToDom(html, selector, position = 'beforeend') {
      $el(selector).insertAdjacentHTML(position, html)
    }
  }

  new EnhancePdp()
})()
